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
IV=[6,15,14,19];var Is=[6,9,14,13];var O6=[209,7,229,37];var P_=[0,40,240,320];var
P$=[0,228,240,298];var CQ=" ";var Ff=[0,40,240,280];var L5=[0,40,232,280];var Qa=[
0,40,116,160];var J6=[114,40,230,160];var Od=[0,160,116,280];var Qb=[116,160,232
,280];var ML=[0,280,116,400];var S$=[116,280,232,400];var UW=[0,400,116,520];var
Z5=[116,400,232,520];var W8=[-1,520,115,640];var It=[232,40,240,280];var UX=[5,40
,235,120];var Z6=[120,140,210,230];var W9=[20,140,110,230];var Z7=[0,0,116,120];
var W_=[0,0,120,120];var Z8=[0,0,116,45];var Z9=[0,0,8,200];var UY=[0,0,8,20];var
W$=[30,0,210,40];var O7=[0,0,40,40];var Z_=[7,8,200,40];var Oe=[0,0,200,40];var Rn=[
6,1];var Xa="ERROR: Invalid value for ItemHighlighting";var Xb=[10,10,40,30];var
Ta=[0,0,120,40];var Z$=[60,0,180,40];var Aaa=[120,0,240,40];var Xc=[0,0,100,40];
var Xd=[83,0,157,40];var Tb=[140,0,240,40];var Tc=[0,0,20,40];var Td=[220,0,240,
40];var Aab=[0,0,300,30];var Te=[0,30,300,60];var Aac=[0,60,300,90];var AfB=[0,90
,300,120];var Aad=[0,100,300,110];var Xe=[0,50,300,60];var Aae=[0,30,300,40];var
Xf="*";var AhX=[40,40];var K1=[0,0,240,80];var AcN=[0,0,240,50];var Ly="Cap";var
AhY=[0,40,40,80];var Aoe=[200,40,240,80];var Of=[30,40,210,80];var Xg="--";var Aaf=
"%d";var AfC="%m";var AhZ="%Y";var AcO=" (";var UZ=[0,0,232,80];var Aof="Date";var
Aog=[48,40,88,78];var Aoh=[39,40,79,80];var Aoi=[80,44,87,77];var Alc=".";var AsZ=[
88,44,120,77];var Ax9=[120,44,127,77];var Ax_=[127,44,191,77];var O8=[0,0,80,40];
var Ro="Text";var Ax$=[430,102,430,102];var U0=[0,0,240,240];var As0=[232,0,240,
240];var Aya=[0,10,240,240];var Ayb="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ayc="Unhandled option";
var Aoj=[0,80,240,280];var AfD="Unhandled animal list action";var Aok="Animal list content not handled.";
var IW=[0,40,240,80];var Aol="Set Selected";var As1=" %%";var Xh=[0,180,240,220];
var As2=[82,127,167,150];var As3="Group";var As4=[77,91,167,124];var Aom=[0,0,90
,33];var As5=[4,4,18,29];var Ald=[20,4,34,29];var Ayd=[36,4,50,29];var Aye=[52,4
,66,29];var Ayf=[68,4,82,29];var As6="ERROR: Unhandled Device::SyncState";var Ayg=
":\n";var O9="{1}";var Ayh="{2}";var AWa=[0,49,240,109];var AWb=[0,170,240,243];
var AWc=[0,110,240,170];var AWd=[20,243,220,268];var AHu=[30,8];var AHv="\u2265 ";
var AfE=[0,0,240,160];var Aon=[0,0,0,0];var AWe=[0,0,240,66];var AHw=[10,0,76,66
];var Ale=[33,33];var AHx=[87,0,153,66];var AHy=[164,0,230,66];var AWf="No statistics available";
var AWg="in this environment.";var AHz=" fps";var AWh="CPU: - %%";var AcP=[0,0,240
,120];var AWi=[130,0,237,20];var AWj=[20,0,120,20];var AWk=[0,20,240,40];var AHA=[
40,20,100,40];var As7=[100,20,240,40];var AHB=[0,40,240,60];var AHC=[40,40,100,60
];var Ayi=[100,40,240,60];var AHD=[0,60,50,80];var Ayj=[100,60,240,80];var AWl=[
0,80,50,100];var AWm=[100,80,240,100];var AWn=[0,100,50,120];var AWo=[100,100,240
,120];var AHE=[5,5,15,15];var AWp="%H";var MM="%M";var Ayk="Time";var AWq=[79,40
,119,78];var AWr=[125,40,164,80];var AWs=[86,40,126,80];var AWt=":";var AWu=[75,
40,115,80];var AHF=[0,0,240,150];var AWv=[60,0,155,40];var Ayl=[30,0,65,40];var As8=[
60,0,100,40];var Aym=[88,0,128,40];var AWw=[60,0,71,40];var AWx=[60,0,74,40];var
AHG=[90,0,123,40];var AWy=[120,0,161,40];var AHH=[120,0,165,40];var AHI=[60,0,88
,40];var AHJ=[60,0,95,40];var AWz="Did not expect iterator bigger than number of records";
var AHK=[20,0,240,20];var AWA=[0,38,240,40];var AWB=[0,0,8,4];var Qc=[0,0,240,280
];var Xi=[0,280,240,320];var AWC="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWD="]";var AWE="ERROR: Cannot find closing bracket \'}\' in text [";var AWF=
"] opened at index ";var AWG="#";var AWH="ERROR: Invalid parameter: {";var AWI="}";
var Ah0=[20,20];var AHL=[0,12];var AWJ="ERROR: Not expected Application::FooterFocus, ";
var AWK="%M:%S";var AHM=[30,150,207,170];var AHN=[20,70,217,194];var Ayn="Unhandled item.";
var Qd=[0,80,240,120];var AWL="Unhandled Overlay Menu ";var AWM="Invalid bootloader message: ";
var AWN="Unknown USBState: ";var As9="Invalid fader";var AWO=[2,4,32,40];var AWP=[
29,4,80,40];var AWQ=[120,4,200,40];var AWR=[80,0,114,40];var AWS="-1";var AWT="< ";
var As_=[0,0,232,40];var AWU=[22,40,180,80];var AWV=[2,40,22,80];var AWW=[23,40,
163,80];var AWX=[210,40,230,80];var AWY=[164,40,210,80];var AWZ=[169,43,205,77];
var AW0="ERROR: No outlet assigned";var AW1="Unhandled screen";var AW2="ERROR: Cannot cache null screen.";
var AW3="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHO="Untreated Rating Method type!";var Alf="Unhandled animal type";var AW4=[
5,60,235,140];var AW5=[0,130,240,196];var AW6=[49,240,229,280];var Ayo="Implement in derived classes!";
var Alg="Implement in derived class";var Ah1=[0,40,230,120];var Ayp=[0,120,230,200
];var Aoo=[0,200,230,280];var Ah2=[0,280,230,360];var AW7=[0,360,230,440];var Ayq=[
230,40,238,280];var AHP="WARNING: Unhandled filter field: ";var AfF="Should not happen.";
var AHQ="Invalid Boolean item";var Aag=[0,120,240,160];var Alh=[0,160,240,200];var
Aop=[0,200,240,240];var AW8=[1152,11,1392,51];var AW9=[1152,51,1392,91];var AW_=[
1152,91,1392,131];var AW$=[1152,131,1392,171];var AXa=[1152,171,1392,211];var As$=[
0,240,240,280];var AHR=[10,0,240,40];var AHS=[190,0,230,40];var AXb=[60,3,95,39];
var AXc=[95,4,200,40];var AXd=[3,3];var AXe=[6,6];var AXf=[59,5,197,35];var AXg=[
59,2,200,38];var AXh=[3,2,43,42];var AXi=[0,17,43,40];var AXj=[50,40];var AXk=[50
,0];var AXl="Illegal shifting direction";var Ayr=[0,0,160,30];var AHT=[0,0,25,30
];var AHU=[27,0,52,30];var AHV=[54,0,79,30];var AHW=[81,0,106,30];var AHX=[108,0
,133,30];var AHY=[135,0,160,30];var AXm="Internal queue error";var AXn="ERROR: No corresponding Id ";
var AXo=" found.";var AXp="ERROR: Error in range test";var AXq=[120,67,210,157];
var AXr=[0,40,240,70];var AXs=[20,67,110,157];var Ays=[0,160,240,280];var AHZ=[20
,77,90,147];var AXt=[0,0,210,40];var AH0=[195,0,235,40];var Ah3=[0,40,232,120];var
U1=[0,120,232,200];var AXu=[0,40,232,200];var Aah=[0,200,232,280];var AXv=[0,320
,240,400];var AXw=[0,120,53,200];var Ali=[0,280,232,360];var AfG="%%";var AcQ=[0
,360,232,440];var Aoq=[0,440,232,520];var AXx=[0,80,207,120];var O_=")";var AH1=
"/";var AH2=[5,0,88,30];var AXy=[88,0,240,30];var AH3="276000312345678";var AH4=[
5,30,100,60];var AH5=[100,30,240,60];var AXz="Manufacturer";var AXA="Country";var
AXB=[5,60,240,90];var AXC="Niedersachsen";var AXD=[5,90,145,120];var AXE=[140,90
,240,120];var AXF="Protocol";var AXG=[0,0,120,100];var AH6=[0,40,116,120];var AXH=[
40,80,92,107];var AH7=[0,0,50,23];var AH8="ERROR: Unhandled Device::MeasureState";
var Ayt=[0,120,240,280];var AXI=[178,159,248,203];var AXJ=[10,145,170,225];var AXK=[
0,61,240,101];var AXL=[0,0,40,23];var AXM=[101,113,141,136];var AXN=[101,235,141
,258];var AXO=[69,288,101,313];var AXP=[0,40,240,200];var Ata=[0,200,240,280];var
Atb=[0,280,240,360];var AH9="\u2264 ";var AXQ=[0,80,94,160];var AXR=[94,80,184,160
];var AH_=[184,80,240,160];var AXS=[197,105,231,139];var AXT=[105,101,173,127];var
AXU=[7,101,75,127];var AXV=[94,125,184,151];var AXW=[2,125,92,151];var AXX=[0,70
,240,101];var AXY=[0,106,240,280];var AXZ=[30,40,240,70];var AX0=[0,40,30,70];var
AX1="\u278B";var AX2=[0,0,240,175];var AX3=[0,0,232,175];var AX4=[232,0,240,175];
var AX5="Text Here !";var AX6=[200,0,240,40];var AH$="1";var AIa="2";var Ayu="3";
var AIb="4";var Aor=[0,360,232,400];var Atc="ERROR: invalid item class.";var AIc=[
10,220,250,260];var AX7=[185,0,225,40];var AId="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AX8="ERROR: Received more actions than expected!";var AIe=", ";var AX9=
"ERROR: Cannot set action at position=";var AX_=". Current elements:";var AX$=", max elements:";
var AYa="17";var AYb=[0,0,58,58];var AYc=[0,0,60,60];var AYd=[30,0,58,20];var AYe=[
7,6,25,24];var AYf=[30,60,130,160];var AYg=[0,0,28,20];var AYh=[4,3,40,24];var AYi=[
0,0,42,27];var Ayv=[0,0,17,17];var AYj="Unknown direction of counting enum value: ";
var AYk="Unknown id generation method enum value: ";var Ayw="Invalid animal id generation method: ";
var Atd="Unhandled popup id";var U2="0";var Ate=";";var AYl=[0,400,230,480];var AYm=[
5,120,235,200];var AYn=[0,640,230,760];var AIf=[0,0,300,200];var AYo=[20,40,220,
80];var AIg=[20,80,220,280];var AYp=[140,0,188,40];var AYq="ERROR: Row containing birth weight could not be loaded";
var AYr=[0,440,230,520];var Atf="ID";var AYs=[40,40,198,70];var AYt="Extra info: ";
var AIh=" -";var AYu=[0,0,230,120];var AYv=[0,0,230,40];var AYw=[0,80,230,120];var
AYx="\xB0Brix";var AcR=[0,320,230,400];var AYy=[0,410,230,490];var AYz="ERROR: aNumberOfDays can not be < 0 ";
var AYA="{WEIGHTGAIN} ";var AYB="\xB1";var AIi="+";var AYC="{WEIGHTGAIN}";var AYD=
"{DAYS}";var AYE="ERROR: aString can not be null";var AYF=[166,70,240,114];var AYG=[
0,60,160,120];var AYH=[30,0,240,60];var AIj=[1,6,29,54];var AYI=[30,60,240,120];
var AYJ="Con";var AYK=[70,50,170,70];var AIk="Unhandled Device::NaisIdValidationResult: ";
var AIl="Unhandled PopupId";var AYL=[110,123,230,248];var AYM=[5,0,250,40];var AYN=[
102,0,186,40];var AYO=[153,0,240,40];var Rp="-";var Atg=[170,0,240,40];var AIm=[
220,0,320,30];var AIn=[200,20,300,50];var Aos=[180,0,180,40];var Aot=[170,0,170,
40];var Ayx="Untreated state";var AYP="ERROR: Animal id scanned in an unexpected state : ";
var AIo="ERROR: Null animal id scanned.";var AYQ=[40,40,235,100];var AYR=[120,100
,210,190];var AYS=[20,100,110,190];var AYT=[0,40,40,100];var AYU="\u278A";var AYV=
"Action untreated";var AYW="ERROR: No corresponding ";var AYX=" action found!";var
AYY="Unhandled action: ";var AYZ=[0,186,240,216];var AY0=[0,220,232,280];var AY1=[
5,190,235,270];var AY2=[232,60];var AY3=[0,2];var AY4=[58,58];var AY5="A";var AY6=[
56,0,156,40];var Aou=[156,0,240,40];var AIp=" 7 ";var AY7=[40,0,156,40];var AIq=
"/-1/-2";var AIr=[72,0,144,40];var AcS="\n";var AIs="(";var AY8=[72,0,156,40];var
AIt="%y/%m";var AY9=[70,0,240,40];var Ayy=[70,0,120,40];var AY_=[160,0,245,40];var
AY$="- ";var Ayz=" - ";var AZa="{parc}{clr3}";var AZb="{clr0}/^{clr2}";var AZc="{clr0}/^{clr1}";
var AIu=[0,0,85,40];var Aov="?";var AIv=[0,0,120,140];var AZd=[0,0,116,40];var AIw=[
15,0,100,40];var AIx=[110,0,200,40];var Alj=[0,0,34,34];var AZe=[129,0,157,40];var
Aow=[0,0,25,25];var AZf="\u2611";var AIy="\u2610";var AIz=[5,0,72,40];var AZg=[150
,0,240,40];var AZh=[72,0,139,40];var AIA="Unvalid content class: ";var AZi=[0,320
,240,360];var AZj=[0,360,240,400];var AZk=[144,0,170,40];var AZl=[187,0,213,40];
var AZm=[207,10,233,50];var AZn=[247,20,273,60];var AZo=[140,0,150,100];var AZp=[
165,0,175,100];var AIB=[185,0,195,100];var AZq=[205,0,215,100];var AIC=[211,0,233
,40];var AZr=[189,0,211,40];var AZs=[167,0,189,40];var AZt=[145,0,167,40];var AID=[
5,0,240,40];var Aai=[10,0,10,40];var AZu="= \u2211 ";var AyA=[125,0,240,40];var AZv=[
130,0,170,40];var AZw="\xD8 ";var AZx=[100,10,116,36];var AZy=[117,10,133,36];var
AZz=[135,10,151,36];var AZA="Implement in derieved class";var Ath=[0,80,240,240];
var Ati=[0,120,232,160];var Atj=[0,160,232,200];var Atk=[0,200,232,240];var AyB=[
0,240,232,280];var Aox=[0,320,232,360];var AZB=[-61,360,232,400];var Aoy=[0,400,
32,440];var AZC=[0,100];var AZD=[0,40,240,240];var AZE=[0,50000];var AZF=[0,500];
var AZG=[0,0,240,105];var AZH=[0,105,240,210];var AZI=[0,40,240,81];var AZJ=[0,81
,240,122];var AIE=[0,122,240,163];var Atl=[0,163,240,205];var AZK=[0,205,240,240
];var AZL=[0,200];var AZM=[0,40,240,73];var AyC=[0,0,30,40];var AZN=[0,40,30,80];
var AyD=[60,40];var AyE=[60,0];var AZO=[10,0,40,40];var AZP=[0,190,240,260];var AZQ=[
0,130,240,190];var AIF=[40,40,200,130];var AZR=[90,230,170,253];var AZS=[80,190,
170,223];var AZT=[0,130,240,180];var AZU=[0,250,240,280];var AZV=[129,0,156,40];
var AZW=[72,0,100,40];var AIG=[100,0,129,40];var AZX=[78,8,103,33];var AyF=[0,0,
300,120];var AZY=[1,-1];var AZZ=[20,40,240,120];var AIH=[20,0,240,40];var AZ0=[0
,118,240,120];var AZ1=[0,20,130,40];var AZ2=[130,20,240,40];var AZ3=[0,0,10,20];
var AII="\u2191";var AZ4=[230,0,240,20];var Atm=[0,40,232,80];var AZ5=[0,80,232,
160];var AZ6=[0,160,230,240];var Atn=" p. p.";var AyG="Unknown animal type";var AyH=[
80,0,140,40];var AZ7=[50,0,172,40];var AZ8=[172,0,240,40];var AZ9=[0,90,240,92];
var AIJ="Unhandled menu item";var AIK=[0,0,50,30];var Alk=[0,0,30,30];var AZ_="No AnimalActionTemperatureScreen found!";
var AZ$="840003123456789";var Brh=[40,0,230,40];var Bri=[50,10,230,30];var A0a="No AnimalMultiInfoScreen found!";
var AIL=[0,0,25,40];var Bay="/^";var Baz="?/?";var Brj=[100,4,180,40];var Brk=[65
,0,99,40];var Brl=[165,0,200,40];var BaA=[0,0,60,40];var BaB="9999/^9999";var Brm=
"Invalid index: ";var Brn="Unknown AnimalIdGenerationMethod: ";var Bro="Invalid gender: ";
var Ato="Invalid input state: ";var Brp="Unhandled AnimalIdGenerationMethod";var
Brq=[42,35,67,75];var Brr=[5,35,39,75];var Brs=[70,40,228,70];var Brt="Invalid direction for setting focus";
var Ah4="Invalid index";var Bru="Unvalid direction";var Brv=[0,0,42,30];var BaC=[
22,0,42,30];var Brw=[20,0,40,30];var Brx=[0,0,158,30];var BaD=[32,0,62,30];var BaE=[
64,0,94,30];var BaF=[96,0,126,30];var Bry=[128,0,158,30];var Brz=" %% ";var BrA=[
0,70,240,220];var BrB=[0,237,240,307];var BaG="\n44 %% done";var BrC=[0,0,166,30
];var AIM=[0,0,12,30];var AyI=[14,0,26,30];var A0b=[28,0,40,30];var A0c=[42,0,54
,30];var A0d=[56,0,68,30];var A0e=[70,0,82,30];var A0f=[84,0,96,30];var A0g=[98,
0,110,30];var BaH=[112,0,124,30];var A0h=[126,0,138,30];var BrD=[140,0,152,30];var
BrE=[154,0,166,30];var BaI=[20,0,46,30];var BrF="\u2642";var BrG="{fnt3}\u2642{fnt1}";
var BrH="\u2640";var BrI="{fnt3}\u2640{fnt1}";var BrJ="{parc}";var BrK=[30,30,210
,80];var BrL="Implement in derieved class!";var BrM=[60,4,226,34];var BaJ=[30,4,
58,34];var BaK=[4,0,27,40];var BrN=[116,4,228,34];var BrO=[60,4,86,34];var BrP=[
88,4,114,34];var Aoz="Implement in derived class!";var BaL="Implement in derived class.";
var BrQ="Invalid nais id view: ";var BrR=[0,35,240,75];var BrS=[0,0,110,30];var BrT=[
0,0,26,30];var BrU="100";var A0i="\n\n";var BrV=[240,240];var BrW=[0,240];var BrX=
"Unknown rated attribute: ";var BrY=[120,80,240,280];var BrZ=[0,80,120,280];var AIN=
" %% (";var AyJ=" \xB1 ";var AyK=" (n = ";var A0j=[0,80,232,120];var Br0=[0,242,
232,282];var A0k=[0,280,232,320];var Br1=[35,0,200,40];var Br2=[1,0,31,40];var Br3=[
32,40];var Br4=[32,0];var Br5=[3,0,83,40];var BaM=[180,0,240,40];var Br6=[120,0,
180,40];var Br7=[65,0,125,40];var Br8=[0,0,120,200];var Br9=[0,40,120,150];var BaN=[
15,160,60,190];var BaO=[60,160,105,190];var Br_=[0,65,240,135];var Br$=[10,112,170
,192];var Bsa=[178,129,248,173];var Bsb=[0,40,240,110];var Bsc=[10,98,170,178];var
Bsd=[178,112,248,156];var Bse=[85,190,160,265];var Bsf=[89,194,155,260];var Bsg=[
26,190,111,250];var Bsh=[125,181,225,211];var Bsi=[100,220,183,250];var Bsj="38.7";
var Bsk=[180,220,225,250];var Bsl="\xB0C";var Bsm=[0,99,240,178];var Bsn=[100,280
,140,320];var Bso=[0,26,240,105];var BaP=[30,40];var BaQ=[30,0];var Bsp=[149,0,200
,40];var Bsq=[145,40];var Bsr=[145,0];var Bss=[38,0,88,40];var A0l=[0,0,35,40];var
Bst=[0,0,50,40];var Bsu=[40,0,200,40];var Bsv=[95,0,145,40];var Bsw=[65,5,223,35
];var A0m=[0,0,15,40];var Bsx=[72,0,140,40];var BaR="\n(";var Bsy="%y/%m/%d";var
Bsz="%y ";var BsA=" %m ";var BsB=" %d ";var BsC="20";var BsD=[225,0,240,40];var BsE=[
0,400,232,440];var BsF=[0,440,232,480];var BsG=[0,480,232,520];var BsH=[0,520,232
,560];var BsI=[0,560,232,600];var BsJ=[0,598,232,638];var BsK=[5,0,215,40];var BsL=[
215,8,240,33];var BsM="Implement in dervied class.";var BsN="ERROR: Unhandled temperature unit: ";
var AIO="ERROR: Unhandled mass unit: ";var BsO=[-1,160,115,280];var BsP=[114,160
,230,280];var A0n=[116,40,232,160];var AyL="Unknown weight class index: ";var BsQ=
"< 35";var BsR="35 - 40";var BsS="40 - 45";var BsT="45 - 50";var BsU="\u2265 50";
var BsV="< 80";var BsW="80 - 90";var BsX="90 - 100";var BsY="100 - 110";var BsZ=
"\u2265 110";var BaS="Unknown mass unit";var Bs0=[143,0,193,40];var BaT=[192,0,240
,40];var Bs1=[44,28,44,28];var Bs2="0 %%";var Bs3=[-1,40,115,160];var Bs4=[117,40
,233,160];var Bs5=[1,160,117,280];var Bs6=[114,158,230,278];var Bs7=[1,280,117,400
];var Bs8=[30,0,155,40];var BaU="\u2620";var A0o=[380,150,380,190];var BaV=[105,
0,155,50];var A0p=[190,1,240,41];var Bs9=[72,0,108,40];var Bs_=[108,0,180,40];var
Bs$=[60,0,94,40];var Bta=[94,0,200,40];var Btb="Scroll direction not supported.";
var Btc=[44,0,207,40];var Btd=[207,0,240,40];var Bte="99";var Btf="Unknown birth type";
var Btg=[44,0,189,40];var Bth=[5,0,44,40];var Bti=[44,0,240,40];var Btj=[240,0,240
,40];var Btk="\u25C9";var BaW="\u25CB";var Btl=[75,4,215,34];var Btm=[47,4,73,34
];var BaX=[17,4,45,34];var Btn=[0,0,138,30];var Bto=[47,4,215,34];var A0q="Unhandled MotherSelectionFilterMode: ";
var Btp="Read only!";var Btq="actions array too small to hold all actions";var Btr=[
120,40];var Bts=[120,0];var Btt=[5,0,115,40];var Btu=[0,0,205,40];var Btv=[59,4,
170,34];var Btw=[59,1,173,37];var Btx=[175,1,205,37];var Bty=[0,0,37,40];var Btz=[
115,98,205,188];var BtA=[0,40,235,100];var BtB=[2,200,240,280];var BtC=" 01234";
var BtD=[0,0];var BtE=[33,63];var BtF=[25,56];var BtG="Unknown transponder image type: ";
var AIP=[0,0,82,82];var BtH=[0,0,81,26];var BtI=[105,120,195,210];var BtJ=[10,140
,100,230];var BaY="Unhandled EartagNrAssignmentMode: ";var BtK="Unhandled Gender";
var BtL=[10,35,35,75];var BtM=[44,40,202,70];var BtN=[204,35,232,75];var BtO="Unvalid FatoryResetScope";
var BaZ=[0,120,240,200];var BtP=[144,0,192,40];var BtQ=[144,0,240,40];var BtR=[195
,0,245,50];var BtS=[120,0,120,40];var BtT=[140,0,240,30];var BtU=[30,0,232,40];var
BtV=[60,0,160,40];var BtW=[160,0,200,40];var BtX=[150,17,200,40];var BtY=[155,40
];var BtZ=[155,0];var Bt0=[146,80,240,160];var Bt1=[56,80,146,160];var Bt2=[0,80
,56,160];var Bt3=[13,107,47,141];var Bt4=[74,109,104,139];var Bt5=[50,100,130,150
];var Bt6=[55,112,145,140];var Bt7=[146,112,236,140];var Bt8=[150,86,223,110];var
AIQ=[0,40,240,120];var Bt9="Menu item for animal table field not found";var Ba0=[
0,360,240,440];var Bt_=[0,440,240,520];var Bt$=[5,40,235,104];var Bua=[120,108,226
,218];var Bub=[20,120,110,210];var Buc=[5,223,235,280];var Bud=[0,0,64,30];var Bue=[
44,0,64,30];var Buf=[185,5,225,35];var Bug=[170,5,234,35];var Buh="Unhandled number of digits";
var Bui=[0,0,126,30];var Buj=[22,5,149,35];var Buk=[149,0,232,40];var Ba1=[5,20];
var Bul=[5,0];var Bum="Unhandled AnimalIdAutoGenerationMethod: ";var Bun=[4,440,
236,520];var Buo="Unhandled TransponderAssignmentIdChangeMethod: ";var Bup="\n";
var Buq="%";var Bur=[0,0,160,120];var Bus=[2,2,157,117];var But=[50,70];var Buu=[
50,50];var Buv=[0,0,168,40];var Buw=[168,0,240,40];var Bux=[0,47,232,77];var Buy=[
65,0,101,40];var Buz=[135,0,175,40];var BuA=[85,17,135,40];var BuB=[125,17,175,40
];var BuC=[40,0];var Ba2=[0,40,230,280];var BuD="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuE="ERROR: Received more animal table fields than expected!";
var BuF=[0,80,240,130];var BuG="Unhandled Device::MassDeregistrationCriterion: ";
var BuH=[0,80,240,200];var Ba3="Unhandled BackupError: ";var BuI="Unhandled PopupId: ";
var BuJ=[203,0,240,40];var BuK=[168,0,203,40];var BuL=[35,0,152,40];var BuM=[0,0
,84,40];var BuN=[84,0,167,40];var BuO="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMO={Device:null,A6l:null,GK:null,Init:function(aArg){},DriveCursorHitting:function(
Tg,BF,Fh){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GK._Init.call(this.
GK={I:this},0);this.__proto__=C.AMO;this.H(Ce);this.J(this.GK,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A6l=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J7=
this._variants();if(J7){this.K={};J7._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GK._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GK.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A6l)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A5t._variants();
},K:null,_className:"Application::Application"};C.Asz=[240,320];C.AB={Background:
null,Ek:null,ADh:null,An7:0,Init:function(aArg){A.pe([this,this.A0Z],this);A.pe([
this,this.Bff],this);},LQ:function(G){},A0Z:function(s){this.LQ(s);},CC:function(
G){},AIS:function(s){this.CC(s);},E4:function(G){},AyM:function(s){this.E4(s);},
Dr:function(E){if(this.ADh===E)return;this.ADh=E;A.pe([this,this.Bff],this);},Bff:
function(G){var B;if(!!this.ADh)this.Ek.Ab3((C.BQ.isPrototypeOf(B=A._NewObject(this.
ADh,0))?B:null));else this.Ek.Ab3(null);},_Init:function(aArg){C.Abj._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ek._Init.call(this.
Ek={I:this},0);this.__proto__=C.AB;this.Background.A0(0x3F);this.Background.H(Ce
);this.Background.L(A.jb.CT);this.Ek.H(BD);this.Ek.Ar(false);this.J(this.Background
,-1);this.J(this.Ek,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abj;this.
Background._Done();this.Ek._Done();C.Abj._Done.call(this);},_ReInit:function(){C.
Abj._ReInit.call(this);this.Background._ReInit();this.Ek._ReInit();},_Mark:function(
D){var B;C.Abj._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WQ={Ij:null,Zp:function(E){var B;if(this.Ij===E)return;if(!!this.Ij)this.AqH(
this.Ij,null,null,null,[B=this.Ij,B.AyM],null,false);this.Ij=E;if(!!this.Ij)this.
AkM(this.Ij,null,null,null,null,null,null,[B=this.Ij,B.AIS],null,false);},AED:function(
){return this.Ij;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WQ;this.H([0,0,C.Asz[0],C.Asz[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Ij)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.OB={U9:null,Q:null,AnL:null,ZC:null,NU:null,Oz:null,TJ:null,TK:null,AGm:255,
ID:function(G){var F;if(!!this.Q){this.A2u();var Ada=(F=this.Q,F[1].call(F[0]));
if(Ada>20)this.Oz.L(A.jb.E1);else this.Oz.L(A.jb.Gj);this.Oz.L((this.Oz.AQ&0x00FFFFFF
)|(this.AlL(Ada,0,30)<<24));this.TJ.L((this.TJ.AQ&0x00FFFFFF)|(this.AlL(Ada,31,60
)<<24));this.TK.L((this.TK.AQ&0x00FFFFFF)|(this.AlL(Ada,61,100)<<24));}},A0X:function(
s){this.ID(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0X],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0X],E,0);if(!!E)A.pe([this,
this.A0X],this);},A3J:function(G){var F;if(!!this.AnL)this.ZC.Ar((F=this.AnL,F[1
].call(F[0])));else this.ZC.Ar(false);this.A_I(255);},A_A:function(E){if(A.aaZ(this.
AnL,E))return;if(!!this.AnL)A.z$([this,this.A3J],this.AnL,0);this.AnL=E;if(!!E)A.
zX([this,this.A3J],E,0);if(!!E)A.pe([this,this.A3J],this);},A_I:function(E){if(this.
AGm===E)return;this.AGm=E;if(!!this.U9)this.U9.L((this.U9.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlL:function(A03,Bcr,BxW){if(A03<Bcr)return 0;else if((A03>=Bcr)&&(A03<
BxW))return this.AGm&0xFF;else return 255;},A2u:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U9=this.TK;else if((F=this.Q,F[1].call(F[0]))>
30)this.U9=this.TJ;else this.U9=this.Oz;}else this.U9=null;},BlG:function(){return this.
AGm;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZC._Init.call(this.ZC={
I:this},0);A.acg.Ap._Init.call(this.NU={I:this},0);A.acg.AL._Init.call(this.Oz={
I:this},0);A.acg.AL._Init.call(this.TJ={I:this},0);A.acg.AL._Init.call(this.TK={
I:this},0);this.__proto__=C.OB;this.H(E7);this.ZC.Fr(2000);this.NU.H(E7);this.NU.
L(A.jb.Text);this.Oz.H(Hr);this.Oz.L(A.jb.E1);this.TJ.H(IV);this.TJ.L(A.jb.E1);this.
TK.H(Is);this.TK.L(A.jb.E1);this.J(this.NU,0);this.J(this.Oz,0);this.J(this.TJ,0
);this.J(this.TK,0);this.ZC.Q=[this,this.BlG,this.A_I];this.NU.Ax(A.aaL(A.ach.AMZ
));},_Done:function(){this.__proto__=A.Core.P;this.ZC._Done();this.NU._Done();this.
Oz._Done();this.TJ._Done();this.TK._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZC._ReInit();this.NU._ReInit();this.Oz._ReInit(
);this.TJ._ReInit();this.TK._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnL)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Oz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZC={_Init:function(aArg){A.acl.Gm._Init.call(
this,aArg);this.__proto__=C.ZC;this.AkY=true;this.B2=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ek={GK:null,AR:null,Background:null,OB:null,Bo:
null,Do:null,K_:0,Avr:0,Avs:0,Ao4:0,LK:false,KJ:false,Qv:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hf){this.Ao4=A.jb.CT;this.K_=A.jb.Text;}else if(GE){this.Ao4=
this.Avr;this.K_=this.Avs;}else if(Fw){this.Ao4=this.Avr;this.K_=this.Avs;}else{
this.Ao4=A.jb.CT;this.K_=A.jb.Text;}this.Background.L(this.Ao4);if(!!this.GK){this.
GK.WF(this.Ao4);this.GK.Dg(this.K_);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;},Qu:function(
G){this.Am();A.pe(this.AR,this);},AiR:function(G){if(this.Do.Aci)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab3:function(
E){if(this.GK===E)return;if(!!this.GK)this.HP(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.Am();},A_j:function(E){if(this.Avr===E)return;this.
Avr=E;this.Am();},A_k:function(E){if(this.Avs===E)return;this.Avs=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.OB._Init.call(this.OB={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BK._Init.call(this.Do={I:this},0);this.__proto__=C.Ek;var B;this.
H(BD);this.Background.A0(0x3F);this.Background.H(BD);this.Background.L(A.jb.CT);
this.OB.H(O6);this.K_=A.jb.Text;this.Bo.PV(0);this.Bo.WG(50);this.Do.Filter=1;this.
Avr=A.jb.AV;this.Avs=A.jb.Bm;this.Ao4=A.jb.Text;this.J(this.Background,0);this.J(
this.OB,0);this.OB.Au([B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyN]);this.OB.
A_A([B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyO]);this.Bo.ME=[this,this.Qu];
this.Do.BL=[this,this.AiR];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.OB._Done();this.Bo._Done();this.Do._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
OB._ReInit();this.Bo._ReInit();this.Do._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X2={AeO:null,UG:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeO={I:this},0);A.acg.Text._Init.call(this.UG={I:
this},0);this.__proto__=C.X2;this.AeO.H(P_);this.UG.H(P$);this.UG.R(A.jV);this.UG.
L(A.jb.Text);this.UG.Z(false);this.J(this.AeO,0);this.J(this.UG,0);this.AeO.Ax(null
);this.UG.S(A.aaL(A.fl.EK));var J7=this._variants();if(J7){this.K={};J7._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeO._Done();this.UG._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeO._ReInit();this.UG._ReInit();this.UG.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UG)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
X2._variants();},K:null,_className:"Application::BootScreen"};C.AU6={AAI:function(
G){A._GetAutoObject(C.A8).Ab_(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AU6;this.Background.L(0xFF000000);this.Ek.Z(false);},_className:
"Application::SleepScreen"};C.AvE={DY:null,Y:null,Yc:null,Yd:null,VJ:null,X5:null
,VK:null,X3:null,X8:null,TO:null,X7:null,Ye:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Ary,B.Atp],0);A._GetAutoObject(A.Device.Helper).AkQ();this.Bb(this.VJ);this.
N.Cw(A.aaL(A.ach.ADN));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A3i=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A3i)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJ6=A._NewObject(A.acl.AGj,0);AJ6.Fr(250);AJ6.HO(1);AJ6.WI(6);this.
Y.HI(this.AV,true,AJ6,null);}},CC:function(G){this.A4P(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Ast();},Fk:function(G){
var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.
Ay.MC(-this.Y.Br[1]);},Ih:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VJ)A._GetAutoObject(C.A8).Cd(35);else if(Cy===this.X5)A._GetAutoObject(
C.A8).Cd(34);else if(Cy===this.X8)A._GetAutoObject(C.A8).Cd(69);else if(Cy===this.
VK)A._GetAutoObject(C.A8).Cd(8);else if(Cy===this.X3)A._GetAutoObject(C.A8).Cd(50
);else if(Cy===this.TO)A._GetAutoObject(C.A8).Cd(25);else if(Cy===this.Yc)A._GetAutoObject(
C.A8).Cd(77);else if(Cy===this.Yd)A._GetAutoObject(C.A8).Cd(70);else if(Cy===this.
Ye)A._GetAutoObject(C.A8).Cd(6);else if(Cy===this.X7)A._GetAutoObject(C.A8).Cd(63
);},BA7:function(G){A._GetAutoObject(A.Device.Device).Ae2(!A._GetAutoObject(A.Device.
Device).AmS);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmS)this.N.Hy((
A.aaR(A.acf.A7O)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hy((A.aaR(A.acf.
A7O)+CQ)+A.aaR(A.acf.A8t).toLowerCase());},Adw:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A4P:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).Mv());this.VK.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fo._Init.call(this.Yc={I:this
},0);C.Fo._Init.call(this.Yd={I:this},0);C.Fo._Init.call(this.VJ={I:this},0);C.Fo.
_Init.call(this.X5={I:this},0);C.QX._Init.call(this.VK={I:this},0);C.Fo._Init.call(
this.X3={I:this},0);C.Fo._Init.call(this.X8={I:this},0);C.Fo._Init.call(this.TO={
I:this},0);C.Fo._Init.call(this.X7={I:this},0);C.Fo._Init.call(this.Ye={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AvE;this.Background.L(A.
jb.CT);this.N.Ar(false);this.N.Z(true);this.Dr(C.Aq2);this.DY.A0(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Y.H(L5);this.Y.JW(9);this.Yc.H(Qa);this.Yc.Aj(true);
this.Yc.T(A.aaR(A.acf.Gr));this.Yd.H(J6);this.Yd.Aj(true);this.Yd.T(A.aaR(A.acf.
A8a));this.VJ.H(Od);this.VJ.Aj(true);this.VJ.T(A.aaR(A.acf.Vw));this.X5.H(Qb);this.
X5.Aj(true);this.X5.T(A.aaR(A.acf.TB));this.VK.H(ML);this.VK.Aj(true);this.VK.T(
A.aaR(A.acf.APO));this.X3.H(S$);this.X3.Aj(true);this.X3.T(A.aaR(A.acf.Animal));
this.X8.H(J6);this.X8.Aj(true);this.X8.T(A.aaR(A.acf.A7R));this.TO.H(UW);this.TO.
Ar(true);this.TO.Aj(true);this.TO.Z(true);this.TO.T(A.aaR(A.acf.A6B));this.X7.H(
Z5);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.Device));this.Ye.H(W8);this.Ye.Aj(true
);this.Ye.T(A.aaR(A.acf.Settings));this.Ay.H(It);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.Yc,0);this.J(this.Yd,0);this.J(this.VJ,0);this.J(this.X5,0);this.
J(this.VK,0);this.J(this.X3,0);this.J(this.X8,0);this.J(this.TO,0);this.J(this.X7
,0);this.J(this.Ye,0);this.J(this.Ay,0);this.N.CE=[this,this.BA7];this.N.Cf=[this
,this.Adw];this.Y.Em=[this,this.Fk];this.Yc.AR=[this,this.Ih];this.Yc.DB(A.aaL(A.
ach.ADQ));this.Yd.AR=[this,this.Ih];this.Yd.DB(A.aaL(A.ach.ADT));this.VJ.AR=[this
,this.Ih];this.VJ.DB(A.aaL(A.ach.APT));this.X5.AR=[this,this.Ih];this.X5.DB(A.aaL(
A.ach.AP6));this.VK.AR=[this,this.Ih];this.VK.DB(A.aaL(A.ach.AQt));this.X3.AR=[this
,this.Ih];this.X3.DB(A.aaL(A.ach.APX));this.X8.AR=[this,this.Ih];this.X8.DB(A.aaL(
A.ach.AQD));this.TO.AR=[this,this.Ih];this.TO.DB(A.aaL(A.ach.AQi));this.X7.AR=[this
,this.Ih];this.X7.DB(A.aaL(A.ach.AQf));this.Ye.AR=[this,this.Ih];this.Ye.DB(A.aaL(
A.ach.AQX));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.Yc._Done();this.Yd._Done();this.VJ._Done();this.X5._Done();
this.VK._Done();this.X3._Done();this.X8._Done();this.TO._Done();this.X7._Done();
this.Ye._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Yc._ReInit();this.Yd.
_ReInit();this.VJ._ReInit();this.X5._ReInit();this.VK._ReInit();this.X3._ReInit(
);this.X8._ReInit();this.TO._ReInit();this.X7._ReInit();this.Ye._ReInit();this.Ay.
_ReInit();this.Yc.T(A.aaR(A.acf.Gr));this.Yd.T(A.aaR(A.acf.A8a));this.VJ.T(A.aaR(
A.acf.Vw));this.X5.T(A.aaR(A.acf.TB));this.VK.T(A.aaR(A.acf.APO));this.X3.T(A.aaR(
A.acf.Animal));this.X8.T(A.aaR(A.acf.A7R));this.TO.T(A.aaR(A.acf.A6B));this.X7.T(
A.aaR(A.acf.Device));this.Ye.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Ra={Number:null,Ji:null,IU:null,TH:null,AsP:0,Init:function(aArg){var B;A.zX([
this,this.Bb5],[B=A._GetAutoObject(A.Device.Device),B.ASW,B.A0D],0);A.pe([this,this.
Bb5],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An8();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhM();},E4:function(G){A._GetAutoObject(A.Device.
Device).An0();},Al6:function(G){var F;this.Am();this.TH.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aeo.Ar(true);if(!this.TH.Bw)(F=this.TH.Q,F[2].call(F[0],this.TH.
B2));},Bb5:function(s){this.Al6(s);},An8:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gj);break;case 3:this.Background.
L(A.jb.H9);break;default:this.Background.L(A.jb.CJ);}},AkG:function(E){if(this.AsP===
E)return;this.AsP=E;this.Ji.AkG(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Ji._Init.call(this.Ji={I:this}
,0);A.acg.Ap._Init.call(this.IU={I:this},0);A.acl.Gm._Init.call(this.TH={I:this}
,0);this.__proto__=C.Ra;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(UX);this.Number.KU(true);this.Number.L(A.jb.Text);this.Ji.H(Z6);this.Ji.AkG(0);
this.IU.H(W9);this.IU.L(A.jb.AV);this.IU.Zr(true);this.TH.Fr(1750);this.TH.Ut(750
);this.TH.AkB(0);this.TH.Ar(true);this.TH.B2=3;this.J(this.Number,0);this.J(this.
Ji,0);this.J(this.IU,0);this.Number.S(A.aaL(A.fl.Af));this.IU.Ax(A.aaL(A.ach.ADS
));this.TH.Q=[B=this.IU,B.ASJ,B.Cv];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Ji._Done();this.IU._Done();this.TH._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Ji._ReInit();this.IU._ReInit();this.TH._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ji)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fo={C_:null,ADE:null,AR:null,Bo:null,Do:null,Background:
null,Mu:null,OH:null,Q3:null,G_:null,A5U:true,LK:false,KJ:false,Qv:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hi.Bl.call(this,aSize);this.Mu.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q3.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OH.H(this.Q3.M);this.G_.H([].concat(0,this.G_.M.slice(1,4)));this.G_.H(A.abN(
this.G_.M,aSize[0]));this.G_.H(A.abP(this.G_.M,0));this.G_.H([].concat(this.G_.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hi.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hf){this.Q3.L(A.jb.Am4);this.
G_.L(A.jb.CJ);this.OH.Z(true);this.OH.L(A.jb.ARd);this.Mu.Z(false);}else if(GE){
this.Q3.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OH.Z(false);this.Mu.Z(true);}else if(
Fw){this.Q3.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OH.Z(false);this.Mu.Z(true);}else{
this.Q3.L(A.jb.Text);this.G_.L(A.jb.Text);this.OH.Z(true);this.OH.L(A.jb.CT);this.
Mu.Z(false);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;},Qu:function(G){this.Am();A.pe(this.
AR,this);},AiR:function(G){if(this.Do.Aci)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G_.R(E);},DB:function(E){if(this.C_===E)return;this.C_=E;this.Q3.
Ax(E);this.OH.Ax(E);},Ab2:function(E){if(this.A5U===E)return;this.A5U=E;this.G_.
Z(E);},Ab5:function(E){if(this.ADE===E)return;this.ADE=E;this.Mu.Ax(E);this.Mu.H(
A.abK(this.Mu.M,E.FrameSize));},_Init:function(aArg){C.Hi._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Do={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mu={
I:this},0);A.acg.Ap._Init.call(this.OH={I:this},0);A.acg.Ap._Init.call(this.Q3={
I:this},0);C.CG._Init.call(this.G_={I:this},0);this.__proto__=C.Fo;this.H(Z7);this.
Bo.PV(0);this.Bo.WG(50);this.Do.Filter=1;this.Background.H(W_);this.Background.Z(
false);this.Mu.A0(0x14);this.Mu.L(A.jb.AV);this.Mu.Cv(0);this.OH.L(A.jb.CT);this.
OH.Cv(1);this.G_.H(Z8);this.J(this.Background,0);this.J(this.Mu,0);this.J(this.OH
,0);this.J(this.Q3,0);this.J(this.G_,0);this.Bo.ME=[this,this.Qu];this.Do.BL=[this
,this.AiR];this.Mu.Ax(A.aaL(A.ach.NX));this.OH.Ax(A.aaL(A.ach.AvQ));this.Q3.Ax(A.
aaL(A.ach.AvQ));this.G_.S(A.aaL(A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(
A.aaL(A.fl.Bh));this.ADE=A.aaL(A.ach.NX);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hi;this.Bo._Done();this.Do._Done();this.Background._Done();this.Mu._Done(
);this.OH._Done();this.Q3._Done();this.G_._Done();C.Hi._Done.call(this);},_ReInit:
function(){C.Hi._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit();this.Background.
_ReInit();this.Mu._ReInit();this.OH._ReInit();this.Q3._ReInit();this.G_._ReInit(
);this.G_.S(A.aaL(A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axm:null,Background:null,O2:null,Ask:0,Ak9:10,AjF:100,AQ:0,AoX:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O2.H([].concat(2,this.O2.M.slice(1,4)));this.O2.H(A.abN(this.O2.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af6=this.Ak9<this.AjF;var AJE=(
B=this.M)[3]-B[1];var A27=10;var Auw=AJE;var A4M=0;if(10>AJE)A27=AJE;if(this.Ak9<
this.AjF)Auw=((Auw*this.Ak9)/this.AjF)|0;if(Auw<A27)Auw=A27;if(this.Ak9<this.AjF
)A4M=((this.BlE()*(AJE-Auw))/(this.AjF-this.Ak9))|0;this.O2.H(A.abP(this.O2.M,A4M
));this.O2.H([].concat(this.O2.M.slice(0,3),A4M+Auw));this.O2.Z(Af6);this.Background.
Z(Af6);if(!!this.Axm&&(this.AoX!==Af6))A.pe(this.Axm,this);this.AoX=Af6;},BlE:function(
){var E=this.Ask;var HD=this.AjF-this.Ak9;if((HD>0)&&(E>HD))E=HD;if(HD<=0)E=0;return E;
},MC:function(E){if(E<0)E=0;if(this.Ask===E)return;this.Ask=E;this.Am();},MD:function(
E){if(E<0)E=0;if(this.Ak9===E)return;this.Ak9=E;this.Am();},MB:function(E){if(E<
0)E=0;if(this.AjF===E)return;this.AjF=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.O2.L(E);},BnN:function(E){if(A.aa0(this.Axm,E))return;this.
Axm=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.O2={I:this},0);this.__proto__=
C.Ay;this.H(Z9);this.Ar(false);this.AQ=A.jb.AV;this.Background.A0(0x0);this.Background.
H(UY);this.Background.L(A.jb.CT);this.O2.A0(0x0);this.O2.H(UY);this.O2.L(A.jb.AV
);this.J(this.Background,0);this.J(this.O2,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.O2._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.O2._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axm)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cg={Hj:null,Y:null,Ay:null,Ap:null,A7h:A.jV,Init:function(aArg){A.pe([this,this.
ABf],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);this.ABf(this);},Al3:
function(G){if(!!this.N.CE)A.pe(this.N.CE,this);},ApO:function(G){if(!!this.N.Ca
)A.pe(this.N.Ca,this);},AAI:function(G){if(!!this.N.Cf)A.pe(this.N.Cf,this);},Fk:
function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[
3]-B[1]);this.Ay.MC(-this.Y.Br[1]);A.pe([this,this.BBt],this);},ABf:function(G){
var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C2(A.
aaL(A.ach.YA));this.N.CE=[this,this.Ew];if(!!GZ&&!!GZ.Amr){this.N.Fc(A.jV);this.
N.JB.C4(255);this.N.ArR(GZ.AqS);this.N.Cw(GZ.AvN);this.N.Cf=GZ.Amr;}else{this.N.
Fc(A.jV);this.N.Cw(null);this.N.Cf=null;}if(!!GZ&&!!GZ.Agw){this.N.CR(GZ.AxR);this.
N.GW.C4(GZ.Axn);this.N.Anz(GZ.AmU);this.N.C3(GZ.Aq9);this.N.Ca=GZ.Agw;}else{this.
N.CR(A.jV);this.N.C3(null);this.N.Ca=null;}},Jc:function(E){if(this.A7h===E)return;
this.A7h=E;this.Hj.R(E);},Ew:function(G){A._GetAutoObject(C.A8).FB();},BBt:function(
G){var B;var BAn=this.Ay.Background.Fq();var Bei=(BAn?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajf=X;
X=X.Ah;if(((Ajf.U&0x400)===0x400)){if(!!(A.Core.Akh.isPrototypeOf(Ajf)?Ajf:null)
){var Beo=(A.Core.Akh.isPrototypeOf(Ajf)?Ajf:null);Beo.DC([Bei,Beo.ED[1]]);}else
if(!!(A.Core.Eu.isPrototypeOf(Ajf)?Ajf:null)){var Bgi=(A.Core.Eu.isPrototypeOf(Ajf
)?Ajf:null);Bgi.H(A.abN(Bgi.M,Bei));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hj={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cg;this.N.Z(true);this.Hj.H(W$);this.Hj.Ar(false);this.Hj.R(A.aaR(A.
acf.Settings));this.Hj.L(A.jb.Text);this.Y.H(Ff);this.Y.JW(1);this.Ay.H(It);this.
Ap.H(O7);this.Ap.L(A.jb.Text);this.J(this.Hj,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hj.S(A.aaL(A.fl.Kr));this.Hj.AZ(A.aaL(A.fl.HJ));this.Y.
Em=[this,this.Fk];this.Ap.Ax(A.aaL(A.ach.ADl));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hj._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hj._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hj.R(A.aaR(A.acf.Settings
));this.Hj.S(A.aaL(A.fl.Kr));this.Hj.AZ(A.aaL(A.fl.HJ));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq2={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bhd],[B=
A._GetAutoObject(A.Device.Helper),B.U3,B.U6],0);},Dg:function(E){C.BQ.Dg.call(this
,E);this.Text.L(E);},Bhd:function(G){this.Text.R(A._GetAutoObject(A.acj.KO).Bjc(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq2;this.Timer.WG(1);this.Timer.Ar(true);
this.Text.H(Z_);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.ME=[this,this.Bhd
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BQ;this.Timer._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BQ={KV:0xFFFFFFFF,LU:0,Dg:function(E){if(
this.KV===E)return;this.KV=E;},WF:function(E){if(this.LU===E)return;this.LU=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BQ;this.H(Oe
);},_className:"Application::HeaderContent"};C.N={VZ:null,V0:null,V1:null,Ag4:null
,Ag5:null,Ag6:null,CE:null,Cf:null,Ca:null,Background:null,NL:null,Jg:null,JB:null
,GW:null,PB:null,I_:null,Lg:null,T4:null,T5:null,An2:A.jV,An3:A.jV,An4:A.jV,Aq_:
0,Aq$:0,Ara:0,Ahm:0,ZE:false,WN:false,Asq:false,AsF:false,AsE:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VZ)this.Jg.S(this.VZ);if(!!this.V0)this.JB.S(this.
V0);if(!!this.V1)this.GW.S(this.V1);switch(this.Ahm){case 0:{this.NL.Z(false);this.
Jg.L(A.jb.Bm);this.JB.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PB.L(A.jb.Bm);this.I_.L(
A.jb.Bm);this.Lg.L(A.jb.Bm);}break;case 1:{if(!this.Ag4)this.NL.H(A.aaT(this.Jg.
ASB(),Rn));else this.NL.H(this.PB.Dd());this.NL.Z(true);this.Jg.L(A.jb.Text);this.
JB.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PB.L(A.jb.Text);this.I_.L(A.jb.Bm);this.Lg.
L(A.jb.Bm);}break;case 3:{if(!this.Ag6)this.NL.H(A.aaT(this.GW.ASB(),Rn));else this.
NL.H(this.Lg.Dd());this.NL.Z(true);this.Jg.L(A.jb.Bm);this.JB.L(A.jb.Bm);this.GW.
L(A.jb.Text);this.PB.L(A.jb.Bm);this.I_.L(A.jb.Bm);this.Lg.L(A.jb.Text);}break;case
2:{if(!this.Ag5)this.NL.H(A.aaT(this.JB.ASB(),Rn));else this.NL.H(this.I_.Dd());
this.NL.Z(true);this.Jg.L(A.jb.Bm);this.JB.L(A.jb.Text);this.GW.L(A.jb.Bm);this.
PB.L(A.jb.Bm);this.I_.L(A.jb.Text);this.Lg.L(A.jb.Bm);}break;default:{this.NL.Z(
false);A.ab5("%s",Xa);}}if(!!this.PB.Al){this.PB.Z(true);this.Jg.Z(false);}else{
this.PB.Z(false);this.Jg.Z(true);}if(this.An3.length<=0){this.I_.Z(true);this.JB.
Z(false);}else{this.I_.Z(false);this.JB.Z(true);}if(!!this.Lg.Al){this.Lg.Z(true
);this.GW.Z(false);}else{this.Lg.Z(false);this.GW.Z(true);}},Hy:function(E){if(this.
An2===E)return;this.An2=E;this.Jg.R(E);this.Am();},Fc:function(E){if(this.An3===
E)return;this.An3=E;this.JB.R(E);this.Am();},CR:function(E){if(this.An4===E)return;
this.An4=E;this.GW.R(E);this.Am();},AFr:function(E){if(this.Ahm===E)return;this.
Ahm=E;this.Am();},AFi:function(E){if(this.VZ===E)return;this.VZ=E;this.Jg.S(E);this.
Am();},ArR:function(E){if(this.V0===E)return;this.V0=E;this.JB.S(E);this.Am();},
Anz:function(E){if(this.V1===E)return;this.V1=E;this.GW.S(E);this.Am();},A3Y:function(
G){this.Am();},C2:function(E){if(this.Ag4===E)return;this.Ag4=E;this.PB.Ax(E);this.
Am();},Cw:function(E){if(this.Ag5===E)return;this.Ag5=E;this.I_.Ax(E);this.Am();
},C3:function(E){if(this.Ag6===E)return;this.Ag6=E;this.Lg.Ax(E);this.Am();},OS:
function(E){if(this.AsE===E)return;this.AsE=E;this.T4.Z(E);if(E)this.Jg.H([].concat(
this.T4.M[2],this.Jg.M.slice(1,4)));else this.Jg.H([].concat(0,this.Jg.M.slice(1
,4)));this.Am();},OT:function(E){if(this.AsF===E)return;this.AsF=E;this.T5.Z(E);
if(E)this.GW.H(A.abN(this.GW.M,this.T5.M[0]));else this.GW.H(A.abN(this.GW.M,this.
M[2]));this.Am();},Bm$:function(E){if(this.Aq_===E)return;this.Aq_=E;this.PB.Cv(
E);this.Am();},ATn:function(E){if(this.Aq$===E)return;this.Aq$=E;this.I_.Cv(E);this.
Am();},A_o:function(E){if(this.Ara===E)return;this.Ara=E;this.Lg.Cv(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NL={I:this},0);C.CG._Init.call(this.Jg={I:this
},0);C.CG._Init.call(this.JB={I:this},0);C.CG._Init.call(this.GW={I:this},0);A.acg.
Ap._Init.call(this.PB={I:this},0);A.acg.Ap._Init.call(this.I_={I:this},0);A.acg.
Ap._Init.call(this.Lg={I:this},0);A.acg.Ap._Init.call(this.T4={I:this},0);A.acg.
Ap._Init.call(this.T5={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
A0(0x3F);this.Background.H(BD);this.Background.L(A.jb.Aeb);this.NL.H(Xb);this.NL.
L(A.jb.CT);this.NL.Z(false);this.Jg.A0(0x14);this.Jg.H(Ta);this.Jg.A6(0x12);this.
JB.A0(0x14);this.JB.H(Z$);this.JB.A6(0x12);this.GW.H(Aaa);this.PB.H(Xc);this.I_.
H(Xd);this.Lg.H(Tb);this.Lg.Z(false);this.T4.H(Tc);this.T4.Z(false);this.T5.H(Td
);this.T5.Z(false);this.J(this.Background,0);this.J(this.NL,0);this.J(this.Jg,0);
this.J(this.JB,0);this.J(this.GW,0);this.J(this.PB,0);this.J(this.I_,0);this.J(this.
Lg,0);this.J(this.T4,0);this.J(this.T5,0);this.Jg.S(A.aaL(A.fl.Ak));this.Jg.AZ(A.
aaL(A.fl.Bh));this.Jg.Q7([this,this.A3Y]);this.JB.S(A.aaL(A.fl.Ak));this.JB.AZ(A.
aaL(A.fl.Bh));this.JB.Q7([this,this.A3Y]);this.GW.S(A.aaL(A.fl.Ak));this.GW.AZ(A.
aaL(A.fl.Bh));this.GW.Q7([this,this.A3Y]);this.VZ=A.aaL(A.fl.Ak);this.V0=A.aaL(A.
fl.Ak);this.V1=A.aaL(A.fl.Ak);this.PB.Ax(null);this.I_.Ax(null);this.Lg.Ax(null);
this.T4.Ax(A.aaL(A.ach.AMR));this.T5.Ax(A.aaL(A.ach.Ajt));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NL._Done();this.
Jg._Done();this.JB._Done();this.GW._Done();this.PB._Done();this.I_._Done();this.
Lg._Done();this.T4._Done();this.T5._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NL._ReInit();this.Jg.
_ReInit();this.JB._ReInit();this.GW._ReInit();this.PB._ReInit();this.I_._ReInit(
);this.Lg._ReInit();this.T4._ReInit();this.T5._ReInit();this.Jg.S(A.aaL(A.fl.Ak)
);this.Jg.AZ(A.aaL(A.fl.Bh));this.JB.S(A.aaL(A.fl.Ak));this.JB.AZ(A.aaL(A.fl.Bh)
);this.GW.S(A.aaL(A.fl.Ak));this.GW.AZ(A.aaL(A.fl.Bh));this.AFi(A.aaL(A.fl.Ak));
this.ArR(A.aaL(A.fl.Ak));this.Anz(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V1)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NL)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADp={Init:function(aArg){var B;A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.
Helper),B.ArA,B.AkF],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper)
,B.A9m,B.AFP],0);A.pe([this,this.Nt],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhI)this.Ab4(A._GetAutoObject(A.Device.Helper).AhI.AOY());else this.
Ab4(-1);if(!!A._GetAutoObject(A.Device.Helper).UD)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak7(A._GetAutoObject(A.Device.Helper).UD.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.Am0._Init.call(this,aArg);this.__proto__=C.ADp;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AG3={Ey:null,Ei:null,
FX:null,X1:null,TI:null,II:null,IJ:null,Init:function(aArg){},WM:function(G){var
B;C.DR.WM.call(this,G);var AKT=this.Azv(A._GetAutoObject(A.Device.Helper).UJ.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALI=this.Azv(A._GetAutoObject(
A.Device.Helper).UK.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAc=
this.Azv(A._GetAutoObject(A.Device.Device).AcG);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AKT));this.IJ.H(A.abO(this.
IJ.M,this.Ey.M[3]-((((B=this.IJ.M)[3]-B[1])/2)|0)));this.Ei.H(A.abP(this.Ei.M,this.
Ey.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-B[1])-ALI));this.
II.H(A.abO(this.II.M,(this.Ei.M[3]-((((B=this.II.M)[3]-B[1])/2)|0))+2));this.FX.
H(A.abP(this.FX.M,this.Ei.M[3]));this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.
M)[3]-B[1])-BAc));this.TI.H(A.abO(this.TI.M,this.FX.M[3]-((((B=this.TI.M)[3]-B[1
])/2)|0)));this.X1.H(A.abP(this.X1.M,this.FX.M[3]));this.X1.H([].concat(this.X1.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJR:function(AoT){return A._GetAutoObject(A.
Device.Converter).Ak2(AoT);},AKo:function(){return A._GetAutoObject(A.acj.Temperature
).AlM();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.
FX={I:this},0);A.acg.AL._Init.call(this.X1={I:this},0);A.acg.AL._Init.call(this.
TI={I:this},0);A.acg.AL._Init.call(this.II={I:this},0);A.acg.AL._Init.call(this.
IJ={I:this},0);this.__proto__=C.AG3;this.Ey.A0(0xD);this.Ey.H(Aab);this.Ey.L(A.jb.
Gj);this.Ei.A0(0xD);this.Ei.H(Te);this.Ei.L(A.jb.H9);this.FX.A0(0xD);this.FX.H(Aac
);this.FX.L(A.jb.E1);this.X1.A0(0xD);this.X1.H(AfB);this.X1.L(A.jb.Afu);this.TI.
A0(0xD);this.TI.H(Aad);this.TI.AwA(A.jb.Afu);this.TI.AwB(A.jb.Afu);this.TI.AwD(A.
jb.E1);this.TI.AwC(A.jb.E1);this.II.A0(0xD);this.II.H(Xe);this.II.AwA(A.jb.E1);this.
II.AwB(A.jb.E1);this.II.AwD(A.jb.H9);this.II.AwC(A.jb.H9);this.IJ.A0(0xD);this.IJ.
H(Aae);this.IJ.AwA(A.jb.H9);this.IJ.AwB(A.jb.H9);this.IJ.AwD(A.jb.Gj);this.IJ.AwC(
A.jb.Gj);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FX,-1);this.J(this.X1
,-1);this.J(this.TI,-1);this.J(this.II,-1);this.J(this.IJ,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FX._Done(
);this.X1._Done();this.TI._Done();this.II._Done();this.IJ._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ey._ReInit();this.Ei._ReInit(
);this.FX._ReInit();this.X1._ReInit();this.TI._ReInit();this.II._ReInit();this.IJ.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ey)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avt:null,AmU:null,AQp:null,Aq9:null,AqS:null,AvN:null,AR:null,Agw:null,Amr:
null,N:null,Bo:null,QT:null,AxR:A.jV,AU1:false,AGR:false,Apj:false,Axn:255,LK:false
,KJ:false,Qv:false,Ai:function(Ae){var B;C.OZ.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var IC=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=
A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.
L(A.jb.CT);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IC){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.Am4);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY
);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;this.Apj=IC;},Qu:function(G){this.Am();A.pe(
this.AR,this);},Bw_:function(s){this.Qu(s);},I2:function(G){if(this.QT.Aci)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atr:function(s){this.I2(s);},Ab1:function(E){if(A.aa0(this.Agw,E))return;this.
Agw=E;},A_T:function(E){if(this.AxR===E)return;this.AxR=E;},Zu:function(E){if(this.
Avt===E)return;this.Avt=E;},Zv:function(E){if(this.AmU===E)return;this.AmU=E;},A_y:
function(E){if(this.Axn===E)return;this.Axn=E;},Gs:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALq();},A3v:
function(G){},BGZ:function(s){this.A3v(s);},AkA:function(E){if(this.Aq9===E)return;
this.Aq9=E;},L1:function(E){if(A.aa0(this.Amr,E))return;this.Amr=E;},Bm4:function(
E){if(this.AqS===E)return;this.AqS=E;},L4:function(E){if(this.AvN===E)return;this.
AvN=E;},Zz:function(E){if(this.AGR===E)return;this.AGR=E;this.ALq();},ALq:function(
){var B;var M2=this.DK;if(this.AGR)M2=M2+A.aaR(A.acf.Colon);if(this.AU1)M2=M2+Xf;
this.V.R(M2);},ATK:function(E){if(this.AU1===E)return;this.AU1=E;this.ALq();},_Init:
function(aArg){C.OZ._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BK._Init.call(this.QT={I:this},0);this.__proto__=C.Co;this.Bo.PV(0);
this.Bo.WG(50);this.Bo.Ar(false);this.QT.Filter=1;this.Bo.ME=[this,this.Bw_];this.
QT.BL=[this,this.Atr];this.Avt=A.aaL(A.fl.Ak);this.AmU=A.aaL(A.fl.Ak);this.AQp=A.
aaL(A.ach.E2);this.AqS=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OZ;this.
Bo._Done();this.QT._Done();C.OZ._Done.call(this);},_ReInit:function(){C.OZ._ReInit.
call(this);this.Bo._ReInit();this.QT._ReInit();this.Zu(A.aaL(A.fl.Ak));this.Zv(A.
aaL(A.fl.Ak));this.Bm4(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OZ._Mark.call(
this,D);if((B=this.Avt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqS)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agw)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Ds={Q:null,And:null,Anf:null,Hx:null,H5:null,AM:0,Gq:0,F$:100,FI:0,Init:function(
aArg){},I2:function(G){this.FI=1;C.Eg.I2.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hx.H([0,aSize[1]-40,40,aSize[1]]);this.H5.H([].concat(A.
abe(aSize,AhX),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fw=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hx.L(this.V.AQ);this.H5.L(this.V.AQ);this.Hx.
Z((Fw||GE)&&(this.AM>this.Gq));this.H5.Z((Fw||GE)&&(this.AM<this.F$));if(this.FI===
6)this.Hx.L(A.jb.E1);if(this.FI===7)this.H5.L(A.jb.E1);},Bfr:function(G){this.FI=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyW],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qu:function(G){if(this.FI===6)A.pe([this,this.AyW],this);if(this.FI===
7)A.pe([this,this.AyX],this);if(this.FI===1)A.pe(this.AR,this);this.FI=0;this.Am(
);},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcW:function(
s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,
this.AcW],this);},Bfs:function(G){this.FI=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyX],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Kf:function(G){this.FI=0;}
,AyX:function(s){this.Kf(s);},Ka:function(G){this.FI=0;},AyW:function(s){this.Ka(
s);},Bx:function(E){if(E<this.Gq)E=this.Gq;if(E>this.F$)E=this.F$;if(this.AM===E
)return;this.AM=E;this.Am();},Bbu:function(Aq){this.Bx(Aq);},Ga:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EV:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},Um:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BK._Init.call(this.And={I:this},0);A.Core.BK._Init.call(this.Anf={
I:this},0);A.acg.Ap._Init.call(this.Hx={I:this},0);A.acg.Ap._Init.call(this.H5={
I:this},0);this.__proto__=C.Ds;this.H(K1);this.And.Filter=6;this.Anf.Filter=7;this.
Background.H(K1);this.V.H(AcN);this.V.R(Ly);this.Hx.H(AhY);this.H5.H(Aoe);this.H5.
Cv(1);this.J(this.Hx,0);this.J(this.H5,0);this.And.BL=[this,this.Bfr];this.And.D1=[
this,this.Bfr];this.Anf.BL=[this,this.Bfs];this.Anf.D1=[this,this.Bfs];this.V.S(
A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(null);this.Hx.Ax(A.aaL(A.ach.
Aju));this.H5.Ax(A.aaL(A.ach.Aju));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.And._Done();this.Anf._Done();this.Hx._Done();this.H5._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.And._ReInit();this.
Anf._ReInit();this.Hx._ReInit();this.H5._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.And)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Du:function(){return-1;},C7:function(aIndex){return-1;},Gl:function(
aIndex){return A.jV;},DZ:function(A7){return-1;},H4:function(){return-1;},Au:function(
E){this.Q=E;},Cb:function(Aq){this.Au(Aq);},AC4:function(aIndex){return null;},AC6:
function(aIndex){return 0;},B$:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Ir={AxI:null
,BT:null,AHe:A.jV,AVG:A.jV,Aj5:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Ds.Ai.call(this,Ae);if(!this.AxI){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVG);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AHe);}}else(B=
this.AxI)?B[1].call(B[0],this):null;},Kf:function(G){var F;var BO=this.AM;C.Ds.Kf.
call(this,G);this.Bx(this.AM+this.Aj5);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},Ka:function(G){var F;var BO=this.AM;C.
Ds.Ka.call(this,G);this.Bx(this.AM-this.Aj5);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IR:function(E){if(this.AHe===E)return;
this.AHe=E;this.Am();},Jd:function(E){if(this.AVG===E)return;this.AVG=E;this.Am(
);},ATo:function(E){if(this.Aj5===E)return;this.Aj5=E;},A_Q:function(E){if(A.aa0(
this.AxI,E))return;this.AxI=E;},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.CG._Init.call(this.BT={I:this},0);this.__proto__=C.Ir;this.H(K1);this.BT.H(Of);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Ds;this.BT._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.AxI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dz:null,HN:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Ds.Bl.call(this,aSize);this.Dz.H([this.Hx.M[2]-10,this.Hx.M[1],this.
H5.M[0]+10,this.Hx.M[3]]);this.Dz.AFs((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.Dz.
Gt,true,null,null);},Ai:function(Ae){var B;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.Dz.AbF(0,this.Dz.AY-1);this.Hx.Z(Fw||GE);this.H5.
Z(Fw||GE);},C5:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Kf:function(G){var F;var BO=this.AM;C.Ds.Kf.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Ka:function(G){var F;var BO=this.AM;
C.Ds.Ka.call(this,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var QA=0;if(E<this.Gq){E=this.F$;QA=-this.Dz.We*this.Dz.AY;}if(E>this.F$){E=this.
Gq;QA=this.Dz.We;}C.Ds.Bx.call(this,E);if(!!QA)this.Dz.Gb(QA);this.Dz.GT(this.AM
);if(this.Dz.Bj_())this.Dz.BpH(false,false);this.Dz.HI(this.Dz.Gt,true,this.HN,null
);},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(C.CG.isPrototypeOf(B=this.Dz.
Cj)?B:null);if(!CA)return;CA.S(this.V.B6);CA.Aw9(19);CA.AZ(this.V.AmT);CA.BnX(19
);CA.Cr(this.V.AqR);CA.BnY(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));
else CA.R(Xg);CA.H(A.abK(CA.M,[this.Dz.We,(B=this.Dz.M)[3]-B[1]]));},BwM:function(
s){this.Hm(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Ga(0);this.EV(this.AC.Du()-1);this.Dz.JA(this.AC.Du());this.Dz.AbF(0,this.Dz.AY-
1);}},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Core.Dz._Init.call(this.
Dz={I:this},0);A.acl.Gm._Init.call(this.HN={I:this},0);this.__proto__=C.BW;this.
H(K1);this.Dz.N4(C.CG);this.HN.WI(23);this.HN.HO(1);this.HN.Fr(200);this.J(this.
Dz,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.Dz.Hm=[this,this.BwM
];this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.Dz._Done();this.HN.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
Dz._ReInit();this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SS={FM:null,OK:null,Dm:null,Av:null,Jy:null,HM:null,Pv:null,VV:null,Q2:null,
Ym:null,P9:null,Gy:null,Gx:null,FY:0,A_:0,Aso:false,Bj5:false,Init:function(aArg
){},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hx.Z(false);this.H5.Z(false);var At1=
A.jV;if(!!this.Dm){this.Pv.R(this.Av.Format(Aaf));this.Q2.R(this.Av.Format(AfC));
this.P9.R(this.Av.Format(AhZ));}if(this.A_===1){this.HM.Z(true);this.HM.H(this.Pv.
M);this.HM.L(this.V.AQ);this.Pv.L(this.Background.AQ);this.Q2.L(this.V.AQ);this.
P9.L(this.V.AQ);At1=A.aaR(A.acf.A6b);}else if(this.A_===2){this.HM.Z(true);this.
HM.H(this.Q2.M);this.HM.L(this.V.AQ);this.Pv.L(this.V.AQ);this.Q2.L(this.Background.
AQ);this.P9.L(this.V.AQ);At1=A.aaR(A.acf.Hk);}else if(this.A_===3){this.HM.Z(true
);this.HM.H(this.P9.M);this.HM.L(this.V.AQ);this.Pv.L(this.V.AQ);this.Q2.L(this.
V.AQ);this.P9.L(this.Background.AQ);At1=A.aaR(A.acf.Year);}else{this.HM.Z(false);
this.Pv.L(this.V.AQ);this.Ym.L(this.V.AQ);this.Q2.L(this.V.AQ);this.VV.L(this.V.
AQ);this.P9.L(this.V.AQ);}if(At1.length>0){if(this.AGR)this.V.R((((this.DK+AcO)+
At1)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcO)+
At1)+String.fromCharCode(0x29));}else this.ALq();},Qu:function(G){if(this.FI===1
)A.pe([this,this.Vc],this);else if(this.FI===4)A.pe([this,this.AiH],this);else if(
this.FI===5)A.pe([this,this.Ait],this);C.Ds.Qu.call(this,G);},Kf:function(G){switch(
this.A_){case 0:C.Ds.Kf.call(this,G);break;case 3:break;default:this.Ady(this);}
},Ka:function(G){switch(this.A_){case 0:C.Ds.Ka.call(this,G);break;default:this.
Ais(this);}},AdA:function(G){var F;if(!!this.Dm)this.Ur((F=this.Dm,F[1].call(F[0
])));},Ab7:function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdA
],this.Dm,0);this.Dm=E;if(!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA
],this);},Ur:function(E){if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.
FY);this.Am();},Ady:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Vc],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Bb3:function(s){this.Ady(s);},Vc:
function(G){this.Ex(this.A_+1);},Al5:function(G){this.FI=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiH],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Al4:function(
G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ait],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiH:function(G){var B;var F;var BO=this.FY;switch(this.A_){
case 1:{if(this.Aso){var ABo=A._NewObject(A.Core.An5,0);ABo.Ko=1;if(this.Av.J(ABo
).JV()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Av.GL<this.Av.Zo()
)this.Av.Ls(this.Av.GL+1);}break;case 2:{if(this.Aso){var ABo=A._NewObject(A.Core.
An5,0);ABo.Ko=this.Av.Zo();if(this.Av.J(ABo).JV()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Av.Uv(this.Av.Hk+1);if(this.Av.Zo()<this.Av.GL)this.Av.Ls(this.
Av.Zo());}break;case 3:{if(this.Aso){var A1S=A._NewObject(A.Core.Bs,0);A1S.Initialize(
this.Av.JV());A1S.Year+=1;if(A1S.JV()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Ur(((B=(this.Av.JV()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dm)(F=this.
Dm,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}},Ait:function(G){var B;var F;var BO=
this.FY;if(this.A_===1)this.Av.Ls(this.Av.GL-1);if(this.A_===2){this.Av.Uv(this.
Av.Hk-1);if(this.Av.Zo()<this.Av.GL)this.Av.Ls(this.Av.Zo());}if(this.A_===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Ur(((B=(this.Av.JV()|
0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],
this.FY));A.abo(this.Dm,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[
0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vc];}break;case 2:{(F=this.N,F[
1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vc];}break;case 3:{(F=this.N,F[
1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},AFN:function(E){if(this.Aso===E)return;this.Aso=E;},FV:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;var AAw=this.A_;if(!this.
A_){this.FM.AjB((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FY){var BO=this.FY;
this.Ur(A._GetAutoObject(A.Device.Helper).Dv());if(this.FY!==BO){if(!!this.Dm)(F=
this.Dm,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}}}this.A_=EO;this.Bj5=true;if((
this.A_<0)||(this.A_>3))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=
!!this.A_;if((!!AAw&&!this.A_)&&!!this.OK)A.pe(this.OK,this);this.Am();},Ais:function(
G){if(this.A_>1)this.Ex(this.A_-1);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Av={I:this},0);A.Core.BK._Init.call(this.Jy={I:this}
,0);A.acg.AL._Init.call(this.HM={I:this},0);A.acg.Text._Init.call(this.Pv={I:this
},0);A.acg.Text._Init.call(this.VV={I:this},0);A.acg.Text._Init.call(this.Q2={I:
this},0);A.acg.Text._Init.call(this.Ym={I:this},0);A.acg.Text._Init.call(this.P9={
I:this},0);A.Core.BK._Init.call(this.Gy={I:this},0);A.Core.BK._Init.call(this.Gx={
I:this},0);this.__proto__=C.SS;this.H(UZ);this.V.R(Aof);this.Hx.Z(false);this.H5.
Z(false);this.Jy.Filter=1;this.HM.H(Aog);this.HM.L(0x55FFFFFF);this.Pv.H(Aoh);this.
Pv.Jb(true);this.Pv.A6(0x14);this.VV.H(Aoi);this.VV.Jb(true);this.VV.A6(0x14);this.
VV.R(Alc);this.Q2.H(AsZ);this.Q2.Jb(true);this.Ym.H(Ax9);this.Ym.Jb(true);this.Ym.
R(Alc);this.P9.H(Ax_);this.P9.Jb(true);this.P9.A6(0x11);this.Gy.Filter=4;this.Gy.
Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HM,0);this.J(this.Pv,0);this.
J(this.VV,0);this.J(this.Q2,0);this.J(this.Ym,0);this.J(this.P9,0);this.Jy.BL=[this
,this.Bb3];this.Pv.S(A.aaL(A.fl.EK));this.VV.S(A.aaL(A.fl.EK));this.Q2.S(A.aaL(A.
fl.EK));this.Ym.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));this.Gy.BL=[this,this.
Al5];this.Gy.D1=[this,this.AiH];this.Gx.BL=[this,this.Al4];this.Gx.D1=[this,this.
Ait];this.FM=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ds;this.Av._Done();this.Jy._Done();this.HM._Done();this.Pv._Done();this.VV._Done(
);this.Q2._Done();this.Ym._Done();this.P9._Done();this.Gy._Done();this.Gx._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit(
);this.Jy._ReInit();this.HM._ReInit();this.Pv._ReInit();this.VV._ReInit();this.Q2.
_ReInit();this.Ym._ReInit();this.P9._ReInit();this.Gy._ReInit();this.Gx._ReInit(
);this.Pv.S(A.aaL(A.fl.EK));this.VV.S(A.aaL(A.fl.EK));this.Q2.S(A.aaL(A.fl.EK));
this.Ym.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jy
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ym)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.ON={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bel],[B=A._GetAutoObject(A.Device.Device),B.A86,B.BbB],0);
A.pe([this,this.Bel],this);},Du:function(){return 17;},Gl:function(aIndex){return this.
LanguageToString.BS(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnC(E);},Bel:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.ON;this.B_.Set(0,0);this.B_.Set(1,1);this.B_.Set(2,5);this.B_.
Set(3,3);this.B_.Set(4,8);this.B_.Set(5,9);this.B_.Set(6,7);this.B_.Set(7,6);this.
B_.Set(8,10);this.B_.Set(9,2);this.B_.Set(10,11);this.B_.Set(11,12);this.B_.Set(
12,13);this.B_.Set(13,14);this.B_.Set(14,15);this.B_.Set(15,16);this.B_.Set(16,18
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.LanguageToString._Done(
);C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.LanguageToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.LanguageToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Rf={TemperatureUnitToString:
null,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Axb(E);}
,Init:function(aArg){var B;A.zX([this,this.BgT],[B=A._GetAutoObject(A.Device.Device
),B.ArB,B.Atq],0);A.pe([this,this.BgT],this);},BgT:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B$,this.Cb],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rf;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AVj={Ajz:null,AcC:null,KC:null,AP:null,A$:null,Bl:function(aSize){C.Ba.Bl.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.KC.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajz.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.AcC.H(this.Ajz.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KC.L(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX
)return;this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hv(Ad,6);var ApY=this.AX.CF(Ad,
7);var Auf=this.AX.I8(Ad,9);this.T(A._GetAutoObject(A.acj.KO).AC0(AlD));this.KC.
R(A._GetAutoObject(A.acj.KO).A6S(AlD));this.AcC.R(A._GetAutoObject(A.Device.Converter
).Ak2(ApY));this.AcC.L(A._GetAutoObject(A.acj.Assessment).XB(Auf));this.Ajz.L(A.
_GetAutoObject(A.acj.Assessment).Qr(Auf));this.Am();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Ajz={I:this},0);A.acg.Text._Init.
call(this.AcC={I:this},0);A.acg.Text._Init.call(this.KC={I:this},0);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AVj;this.V.H(O8);this.AcC.L(A.jb.Text);this.KC.R(Ro);this.KC.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A$.H(Ax$);this.A$.L(A.jb.Bc);this.J(this.Ajz,0);this.J(this.AcC
,0);this.J(this.KC,0);this.J(this.AP,0);this.J(this.A$,0);this.AcC.S(A.aaL(A.fl.
Af));this.KC.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajz._Done();this.AcC._Done();this.KC._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajz._ReInit(
);this.AcC._ReInit();this.KC._ReInit();this.AP._ReInit();this.A$._ReInit();this.
AcC.S(A.aaL(A.fl.Af));this.KC.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.Gc={AX:null,AR:null,Cq:null,AD:
null,Afl:null,NQ:null,KQ:A.jV,Ll:null,AVI:true,Hm:function(G){var B;var Gg=this.
AD.G6;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?B:null);if(!Aa)return;Aa.Zs(this.
AX);Aa.Ch(Gg);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GO]));
},N4:function(E){if(E===this.Ll)return;this.Ll=E;this.AD.N4(E);},Zs:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ch],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ch],E,0);A.pe([this,this.Ch],this);},Ch:function(G){if(this.AVI===
false)return;if(!!this.AX){this.AD.JA(this.AX.B9());this.AD.AbF(0,this.AD.AY-1);
}else this.AD.JA(0);if((this.AD.AY>0)&&(this.FN()<0))this.GT(0);if(this.FN()>=this.
AD.AY){this.GT(0);this.AD.Gb(0);}if(this.AD.AY<=0){this.NQ.Z(true);this.GT(-1);}
else{this.NQ.Z(false);this.ABO(null,null);}},Fk:function(G){var B;this.Afl.MB(this.
AD.GO*this.AD.AY);this.Afl.MD((B=this.AD.M)[3]-B[1]);this.Afl.MC(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cq.CO){case 4:if(this.FN()>0)this.GT(
this.FN()-1);break;case 5:if(this.FN()<(this.AD.AY-1))this.GT(this.FN()+1);break;
default:this.Cq.NM=true;}this.AD.HI(this.FN(),true,null,null);}else if((this.Cq.
CO!==4)&&(this.Cq.CO!==5))this.Cq.NM=true;},Zw:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbF(0,this.AD.AY);},GT:function(E){this.AD.GT(E);this.AD.HI(E,
true,null,null);},FN:function(){return this.AD.Gt;},Dl:function(E){if(this.KQ===
E)return;this.KQ=E;this.NQ.R(E);},ABO:function(AcZ,E8){this.AD.ABO(AcZ,E8);},ATZ:
function(E){if(this.AVI===E)return;this.AVI=E;if(E)A.pe([this,this.Ch],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afl={I:this},
0);A.acg.Text._Init.call(this.NQ={I:this},0);this.__proto__=C.Gc;this.H(U0);this.
Ll=C.Ba;this.Cq.Filter=147;this.AD.A0(0x3F);this.AD.H(U0);this.AD.Ae8(40);this.Afl.
A0(0x3A);this.Afl.H(As0);this.NQ.A0(0x3F);this.NQ.H(Aya);this.NQ.Hn(10);this.NQ.
KU(true);this.NQ.A6(0xA);this.NQ.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afl,
0);this.J(this.NQ,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.AD.
Em=[this,this.Fk];this.AD.Hm=[this,this.Hm];this.NQ.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.P;this.Cq._Done();this.AD._Done();this.Afl._Done();this.
NQ._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Cq._ReInit();this.AD._ReInit();this.Afl._ReInit();this.NQ._ReInit();this.
NQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hs:-1,CP:function(){this.Ch(this.Hs);},Ai:function(Ae){var B;C.Co.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hs%2)===1)this.Background.L(A.
jb.CJ);else this.Background.L(A.jb.CT);}},Zs:function(E){if(this.AX===E)return;this.
AX=E;},Ch:function(Ad){A.ab5("%s",Ayb);},_Init:function(aArg){C.Co._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GJ={Bg:null,FE:null
,DP:null,Fn:null,V4:null,Km:null,KQ:A.jV,AUk:0,AUl:0,Afm:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Dw(0);A.pe([this,this.Bbf],this);}},Init:function(aArg){var B;A.zX([this,this.
Be1],[B=A._GetAutoObject(A.Device.Device),B.AEF,B.AIU],0);A.zV([this,this.Aga],A.
_GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcH],A._GetAutoObject(A.Device.
Device).An,0);A.zX([this,this.BBy],[B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6
],0);A.pe([this,this.AcH],this);A.pe([this,this.A0M],this);A.pe([this,this.AxD],
this);},WE:function(G){this.Agx();var O;for(O=this.Km.Du()-1;O>=0;O=O-1)switch(this.
Km.C7(O)){case 0:this.AdS(A.aaR(A.acf.A5m),[this,this.Bok],0);break;case 14:this.
AdS(A.aaR(A.acf.Bhy),[this,this.Bol],14);break;case 1:this.AdS(A.aaR(A.acf.Temperature
),[this,this.AT1],1);break;case 2:this.AdS(A.aaR(A.acf.Rating),[this,this.AT0],2
);break;case 3:this.AdS(A.aaR(A.acf.Afv),[this,this.AT2],3);break;default:A.ab5(
"%s",Ayc);}A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.Biw
));A._GetAutoObject(A.Device.Device).Dw(6);},Bbf:function(s){this.WE(s);},DE:function(
G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var AfZ=this.Km.DZ(A._GetAutoObject(
A.Device.Device).Km);if(this.Afm)return;switch(D5.CO){case 6:{AfZ=AfZ-1;if(AfZ<0
)AfZ=this.Km.Du()-1;A._GetAutoObject(A.Device.Device).Zq(this.Km.C7(AfZ));}break;
case 7:{AfZ=AfZ+1;if(AfZ>=this.Km.Du())AfZ=0;A._GetAutoObject(A.Device.Device).Zq(
this.Km.C7(AfZ));}break;default:D5.NM=true;}},CC:function(G){if(this.DP.Az7()){this.
DP.Ac9();if(this.DP.Az7()===false)this.Bg.ATZ(true);return;}else if(this.Afm)this.
AA8(this);if(!!this.Bg)this.Bg.ATZ(true);},E4:function(G){if(!!this.Bg)this.Bg.ATZ(
false);},AxD:function(G){var B;if(!!this.Bg)this.HP(this.Bg);this.Bg=A._NewObject(
C.AMD,0);this.Bg.H(Aoj);this.Bg.Zs(A._GetAutoObject(A.Device.Device).An);this.Bg.
Zw([this,this.AcU]);if(!!this.FE)this.Bg.A9T([B=this.FE,B.A9o,B.A_M]);this.A4x(this
);this.J(this.Bg,0);if(this.Afm===false)this.Bb(this.Bg);this.Be1(this);this.Bps(
this);},A9Q:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Dr(this.A65(
));this.Ek.AR=[this,this.AcU];this.ALw(this);this.Ek.Ar(true);this.Bb(this.Ek);this.
Afm=true;},Bk1:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);if(!this.
Bg)return;var Aa=(C.ACc.isPrototypeOf(B=this.Bg.AD.BjI(this.Bg.AD.Gt))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).G8(Aa.Hs);else A._GetAutoObject(A.Device.
Helper).W.E6();this.Agj();},Agg:function(G){var F;if(!this.Fn)this.A6p(this);else
switch((F=this.Fn,F[1].call(F[0]))){case 19:break;case 0:this.A6p(this);break;case
1:this.Bix(this);break;case 9:this.A6q(this);break;case 4:this.Biz(this);break;case
6:this.BiA(this);break;case 8:this.BiC(this);break;case 2:this.BiD(this);break;case
3:this.BiE(this);break;case 7:this.BiG(this);break;case 5:this.BiH(this);break;case
10:this.BiJ(this);break;case 11:this.Biy(this);break;case 12:this.BiB(this);break;
case 13:this.A6v(this);break;case 14:this.A6r(this);break;case 18:this.A6s(this);
break;case 15:this.A6t(this);break;case 16:this.BiF(this);break;case 17:this.A6u(
this);break;default:A.ab5("%s%e",AfD,(F=this.Fn,F[1].call(F[0])));}},AcU:function(
s){this.Agg(s);},Bmd:function(G){this.Dr(C.Kt);this.Ek.AR=null;this.Afm=false;this.
AcH(this);this.Bgl();this.N.T4.C4(255);this.N.T5.C4(255);this.Bb(this.Bg);this.Ek.
Ar(false);},Anp:function(G){A._GetAutoObject(C.A8).FB();},Dl:function(E){if(this.
KQ===E)return;this.KQ=E;this.A4x(this);},Abt:function(){switch(A._GetAutoObject(
A.Device.Device).Km){case 14:return C.ANd;case 2:return C.ANf;case 1:return C.ANg;
case 3:return C.ANi;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqw;
case 7:return C.ACb;case 12:return C.ACe;case 11:return C.ACa;case 13:return C.ACd;
default:throw new Error(Aok);}},Abu:function(){switch(A._GetAutoObject(A.Device.
Device).Km){case 14:return C.APF;case 2:return C.ADw;case 1:return C.APH;case 3:
return C.APJ;case 4:return C.ADs;case 0:case 8:case 9:case 10:case 5:case 6:return C.
Aq3;case 7:return C.ADu;case 12:return C.ADv;case 11:return C.ADt;case 13:return C.
ADx;default:throw new Error(Aok);}},Be1:function(G){this.ATD(A._GetAutoObject(A.
Device.Device).Km);if(!!this.Bg){this.Bg.N4(this.Abt());this.Bpx(this);}},Bpx:function(
G){var B;if(!!this.FE)this.HP(this.FE);this.FE=(C.De.isPrototypeOf(B=A._NewObject(
this.Abu(),0))?B:null);this.FE.H(IW);if(!!this.Bg)this.Bg.A9T([B=this.FE,B.A9o,B.
A_M]);this.J(this.FE,0);},BkZ:function(G){this.Q_(this);A._GetAutoObject(A.Device.
Device).Dw(0);},AT1:function(G){A._GetAutoObject(A.Device.Device).Zq(1);},AT0:function(
G){A._GetAutoObject(A.Device.Device).Zq(2);},AT2:function(G){A._GetAutoObject(A.
Device.Device).Zq(3);},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A.
_GetAutoObject(A.Device.Helper).Mv());},A0M:function(s){this.Q_(s);},HQ:function(
G){if(this.Afm){this.ALw(this);return;}this.N.C2(A.aaL(A.ach.E2));this.N.Cw(A.aaL(
A.ach.ADO));this.N.C3(A.aaL(A.ach.Options));this.N.CE=[this,this.Anp];this.N.Cf=[
this,this.A9Q];this.N.Ca=[this,this.Bbf];this.N.Hy(A.jV);this.N.Fc(A.jV);this.N.
CR(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.I_.C4(100);this.N.
Cf=null;}else this.N.I_.C4(255);},AoC:function(s){this.HQ(s);},AdS:function(Aig,
Aih,AJt){A._GetAutoObject(C.BR).ABN(Aig,Aih,[this,this.A9i,this.ATD],AJt);},Aga:
function(G){this.A4x(this);if(this.Afm)A.pe([this,this.ALw],this);},Agj:function(
){A._GetAutoObject(C.A8).Cd(9);},A4x:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QK()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dl(
A.aaR(A.acf.AEu));else if(A._GetAutoObject(A.Device.Helper).Arg(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dl(this.KQ);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC9(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dl(A.aaR(A.acf.AOc));else this.Bg.Dl(A.aaR(
A.acf.AOb));}else this.Bg.Dl(A.aaR(A.acf.ASl));},AEV:function(G){var F;if(!!this.
Fn)(F=this.Fn,F[2].call(F[0],0));},AwU:function(E){if(A.aaZ(this.Fn,E))return;if(
!!this.Fn)A.z$([this,this.A0V],this.Fn,0);this.Fn=E;if(!!E)A.zX([this,this.A0V],
this.Fn,0);if(!!E)A.pe([this,this.A0V],this);},AE1:function(G){var F;if(!!this.Fn
)(F=this.Fn,F[2].call(F[0],1));},AwZ:function(G){var F;if(!!this.Fn)(F=this.Fn,F[
2].call(F[0],2));},ATH:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],
3));},ATV:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],7));},ATW:function(
G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],5));},BiD:function(G){if(!this.Bg
)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.
Qp(1);}},I4:function(Aig,Aih,Ao0){A._GetAutoObject(C.BR).ABN(Aig,Aih,[this,this.
A9j,this.ATE],Ao0);},Bmn:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0
],4));},Biz:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.
Helper).G8(this.Bg.FN());this.DP.BB0();}},Bmo:function(G){var F;if(!!this.Fn)(F=
this.Fn,F[2].call(F[0],6));},BiA:function(G){if(!this.Bg)return;if(this.Ne()){A.
_GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.BB1();}},BiC:function(G
){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(1024);}},BnA:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(
F[0],8));},Akv:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],9));},BiE:
function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(
this.Bg.FN());this.DP.Qp(2);}},A6p:function(G){if(!this.Bg)return;if(this.Ne()){
A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());if(A._GetAutoObject(A.Device.
Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A3(66,true,A.jV,0,null);else this.BBL();}},Bix:function(G){if(!this.
Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.
DP.Qp(16);}},BBL:function(){A._GetAutoObject(C.A8).Cd(94);},BiG:function(G){if(!
this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());
this.DP.Qp(4);}},BiH:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(8);}},A6q:function(G){var B;if(!this.
Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());if(this.
Afm){A.zX([this,this.AAy],[B=this.DP,B.SF,B.E5],0);this.AA8(this);}this.DP.Ac9();
}},AuK:function(Aig,Aih,ByJ){A._GetAutoObject(C.BR).Bht(Aig,Aih,ByJ);},ALw:function(
G){this.N.Hy(A.jV);this.N.CR(A.jV);this.N.C2(A.aaL(A.ach.AeA));this.N.CE=[this,this.
Bmd];this.N.T4.C4(100);this.N.T5.C4(100);var Gh=A._GetAutoObject(A.Device.Device
).An.B9();if(Gh<=0){this.N.Cw(null);this.N.C3(null);this.N.Cf=null;this.N.Ca=null;
this.N.WN=false;this.N.ZE=false;}else if(Gh===1){this.N.Cw(null);this.N.C3(A.aaL(
A.ach.AeB));this.N.Cf=null;this.N.Ca=[this,this.AcU];this.N.WN=false;this.N.ZE=false;
}else{this.N.Cw(A.aaL(A.ach.Aq8));this.N.C3(A.aaL(A.ach.Are));this.N.Cf=[this,this.
A3R];this.N.Ca=[this,this.A3S];this.N.WN=true;this.N.ZE=true;}},A3R:function(G){
if(!this.Bg)return;if(this.Bg.FN()<(A._GetAutoObject(A.Device.Device).An.B9()-1)
)this.Bg.GT(this.Bg.FN()+1);},A3S:function(G){if(!this.Bg)return;if(this.Bg.FN()>
0)this.Bg.GT(this.Bg.FN()-1);},Bps:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.LV(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GT(Bf);A.ab5("%s",Aol);}}},Ne:function(){return this.
Bg.FN()>=0;},Aki:function(){return A._GetAutoObject(A.Device.Device).An.B9()>5;}
,Agx:function(){this.Bhu();A._GetAutoObject(C.BR).TC(A.aaR(A.acf.AUJ),[this,this.
A9Q]);A._GetAutoObject(C.BR).Fz();},AcH:function(G){if(this.Afm)this.ALw(this);else
this.HQ(this);},AA8:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E$();var Ay_=aFilter.DL(1,4);if(!!Ay_){aFilter.Nq(Ay_);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GT(0);}},BG3:function(s){this.
AA8(s);},AAy:function(G){var B;if(!this.DP.EN&&this.Afm){A.z$([this,this.AAy],[B=
this.DP,B.SF,B.E5],0);this.AA8(this);}},Bob:function(G){var F;if(!!this.Fn)(F=this.
Fn,F[2].call(F[0],10));},BiJ:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(256);}},A3H:function(G){var F;this.
ATE((F=this.Fn,F[1].call(F[0])));A.pe([this,this.AoC],this);},A0V:function(s){this.
A3H(s);},Bmk:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],11));},Biy:
function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(
this.Bg.FN());this.DP.Qp(4096);}},BiB:function(G){if(!this.Bg)return;if(this.Ne(
)){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(16384);}},A6v:function(
G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.BBM();}},BBM:function(){A._GetAutoObject(C.A8).Ab_(75);},A6r:function(
G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(32768);}},A6t:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(65536);}},BiF:function(G){if(!this.
Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.
DP.Qp(131072);}},Bhu:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Arg(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BR).AaV(A.aaR(A.acf.ACh));else A._GetAutoObject(C.BR).TC(A.
aaR(A.acf.ACh),[this,this.BkZ]);A._GetAutoObject(C.BR).TC(A.aaR(A.acf.AkU),[this
,this.Bk1]);A._GetAutoObject(C.BR).Fz();},A6u:function(G){if(!this.Bg)return;if(
this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(128);}}
,BBy:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ch],this);},A6s:function(
G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(524288);}},BiI:function(G){if(!this.Bg)return;if(this.Ne()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(262144);}},ATD:function(E){if(this.
AUk===E)return;this.AUk=E;A.abo([this,this.A9i,this.ATD],0);},ATE:function(E){if(
this.AUl===E)return;this.AUl=E;A.abo([this,this.A9j,this.ATE],0);},A65:function(
){return C.Yv;},Bgl:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Nq(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bok:function(G){A._GetAutoObject(A.Device.Device).Zq(0);
},Bol:function(G){A._GetAutoObject(A.Device.Device).Zq(14);},A9i:function(){return this.
AUk;},A9j:function(){return this.AUl;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADw._Init.call(this.V4={I:this},0);C.Km._Init.call(this.Km={I:this},0);
this.__proto__=C.GJ;this.Background.H(Ce);this.N.Z(true);this.N.OS(true);this.N.
OT(true);this.Ek.A_j(A.jb.CT);this.Ek.A_k(A.jb.Text);this.Dr(C.Kt);this.V4.H(IW);
this.KQ=A.aaR(A.acf.AEu);this.J(this.V4,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V4._Done();this.Km._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V4._ReInit();
this.Km._ReInit();this.Dl(A.aaR(A.acf.AEu));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Km)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ACc={AP:null,A$:null,UM:null,AcA:
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
},0);this.__proto__=C.ACc;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UM.L(A.jb.Text
);this.AcA.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UM,0);this.
J(this.AcA,0);this.UM.S(A.aaL(A.fl.Af));this.AcA.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UM.
_Done();this.AcA._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UM._ReInit();this.AcA._ReInit(
);this.UM.S(A.aaL(A.fl.Af));this.AcA.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad$={OD:null,ST:null,Mp:null,Init:function(aArg){var B;A.zX([this,this.A3n],[
B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyO],0);A.zX([this,this.Adz],[B=A._GetAutoObject(
A.Device.Device),B.Awc,B.AyN],0);A.pe([this,this.Adz],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.ST.R(A._GetAutoObject(A.Device.Device).Aa6.toFixed()+As1
);this.OD.Z(A._GetAutoObject(A.Device.Device).AmE);},Adz:function(G){this.Am();}
,M0:function(G){A._GetAutoObject(C.A8).FB();},A3n:function(G){if(A._GetAutoObject(
A.Device.Device).AmE===false){this.OD.Z(false);A._GetAutoObject(C.A8).FB();}else
this.OD.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OD={I:this},0);A.acg.Text._Init.call(this.ST={I:this},0);C.Mp._Init.call(
this.Mp={I:this},0);this.__proto__=C.Ad$;var B;this.Background.L(A.jb.CT);this.N.
Z(true);this.N.CR(A.aaR(A.acf.Ok));this.OD.H(Xh);this.OD.R(A.aaR(A.acf.OD));this.
OD.L(A.jb.Text);this.OD.Z(false);this.ST.H(As2);this.ST.R(As3);this.ST.L(A.jb.Text
);this.Mp.H(As4);this.J(this.OD,0);this.J(this.ST,0);this.J(this.Mp,0);this.N.Ca=[
this,this.M0];this.OD.S(A.aaL(A.fl.Af));this.ST.S(A.aaL(A.fl.Af));this.Mp.Au([B=
A._GetAutoObject(A.Device.Device),B.Awc,B.AyN]);this.Mp.A_A([B=A._GetAutoObject(
A.Device.Device),B.Awf,B.AyO]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OD._Done();this.ST._Done();this.Mp._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OD._ReInit();this.ST._ReInit();this.Mp._ReInit(
);this.N.CR(A.aaR(A.acf.Ok));this.OD.R(A.aaR(A.acf.OD));this.OD.S(A.aaL(A.fl.Af)
);this.ST.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mp={Ad6:null,Ad7:null,ID:function(G){var F;if(!!this.Q){this.A2u();var Ada=(
F=this.Q,F[1].call(F[0]));if(Ada>20)this.Oz.L(A.jb.E1);else this.Oz.L(A.jb.Gj);this.
Oz.L((this.Oz.AQ&0x00FFFFFF)|(this.AlL(Ada,0,20)<<24));this.TJ.L((this.TJ.AQ&0x00FFFFFF
)|(this.AlL(Ada,21,40)<<24));this.TK.L((this.TK.AQ&0x00FFFFFF)|(this.AlL(Ada,41,
60)<<24));this.Ad6.L((this.Ad6.AQ&0x00FFFFFF)|(this.AlL(Ada,61,80)<<24));this.Ad7.
L((this.Ad7.AQ&0x00FFFFFF)|(this.AlL(Ada,81,100)<<24));}},A2u:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U9=this.Ad7;else if((F=this.Q,F[
1].call(F[0]))>60)this.U9=this.Ad6;else if((F=this.Q,F[1].call(F[0]))>40)this.U9=
this.TK;else if((F=this.Q,F[1].call(F[0]))>20)this.U9=this.TJ;else this.U9=this.
Oz;}else this.U9=null;},_Init:function(aArg){C.OB._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad6={I:this},0);A.acg.AL._Init.call(this.Ad7={I:this},0);this.__proto__=
C.Mp;this.H(Aom);this.NU.H(Aom);this.Oz.H(As5);this.TJ.H(Ald);this.TK.H(Ayd);this.
Ad6.H(Aye);this.Ad6.L(A.jb.E1);this.Ad7.H(Ayf);this.Ad7.L(A.jb.E1);this.J(this.Ad6
,0);this.J(this.Ad7,0);this.NU.Ax(A.aaL(A.ach.AMY));},_Done:function(){this.__proto__=
C.OB;this.Ad6._Done();this.Ad7._Done();C.OB._Done.call(this);},_ReInit:function(
){C.OB._ReInit.call(this);this.Ad6._ReInit();this.Ad7._ReInit();},_Mark:function(
D){var B;C.OB._Mark.call(this,D);if((B=this.Ad6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVe={N$:null,Lu:null,Ak8:null,ZZ:null,ZY:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device),B.
ASY,B.A0F],0);A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device),B.AS1,B.
A0H],0);A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.Device),B.A9y,B.BbM],0
);A.pe([this,this.ApP],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABA(this);this.BCT(this);this.DJ(this);},BBa:function(G){A._GetAutoObject(
A.Device.Device).AsI();},ApP:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZZ.Z(false);break;case 4:{var A3$;if(!A._GetAutoObject(A.Device.Device).Afr)A3$=
0;else A3$=((A._GetAutoObject(A.Device.Device).AxU*100)/A._GetAutoObject(A.Device.
Device).Afr)|0;this.ZZ.Bx(A3$);this.ZZ.Z(true);}break;default:A.ab5("%s%e",As6,A.
_GetAutoObject(A.Device.Device).SyncState);}},BCT:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Lu.L(A.jb.Text);this.N$.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gj);this.Lu.L(A.jb.Bm);this.N$.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",As6,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C2(null);this.N.CE=null;this.N.CR(A.jV);this.N.Ca=null;}break;
case 7:{this.N.C2(null);this.N.CE=null;this.N.CR(A.aaR(A.acf.Ok));this.N.Ca=[this
,this.BBa];}break;default:A.ab5("%s%e",As6,A._GetAutoObject(A.Device.Device).SyncState
);}},ABA:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lu.R(A.aaR(A.acf.Bqh));break;case 1:this.Lu.R(A.aaR(A.acf.Bqe));break;
case 2:this.Lu.R(A.aaR(A.acf.Bqb));break;case 3:this.Lu.R(A.aaR(A.acf.Bqf));break;
case 4:this.Lu.R((A.aaR(A.acf.Bqd)+Ayg)+A._GetAutoObject(A.Device.Helper).MI(A._GetAutoObject(
A.Device.Helper).MI(A.aaR(A.acf.BoQ),O9,A._GetAutoObject(A.Device.Device).AxU.toFixed(
)),Ayh,A._GetAutoObject(A.Device.Device).Afr.toFixed()));break;case 5:this.Lu.R(
A.aaR(A.acf.Bqg));break;case 7:this.Lu.R(A.aaR(A.acf.Bqc));break;default:A.ab5("%s%e"
,As6,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.N$={I:this},0);C.CG._Init.call(this.Lu={I:this
},0);A.acg.Ap._Init.call(this.Ak8={I:this},0);A.acr.ADz._Init.call(this.ZZ={I:this
},0);A.acr.ADA._Init.call(this.ZY={I:this},0);this.__proto__=C.AVe;this.N.Z(true
);this.N$.H(AWa);this.N$.R(A.aaR(A.acf.N$));this.Lu.A0(0x3F);this.Lu.H(AWb);this.
Lu.A6(0x12);this.Ak8.H(AWc);this.Ak8.L(A.jb.AV);this.ZZ.H(AWd);this.ZZ.Ar(false);
this.ZZ.Bx(0);this.ZY.Bn7(0);this.ZY.A_Z(0);this.ZY.A_X(A.jb.AV);this.ZY.A_W(0);
this.ZY.AGa(AHu);this.J(this.N$,0);this.J(this.Lu,0);this.J(this.Ak8,0);this.J(this.
ZZ,0);this.N$.S(A.aaL(A.fl.EK));this.N$.AZ(A.aaL(A.fl.Af));this.N$.Cr(A.aaL(A.fl.
Ak));this.Lu.S(A.aaL(A.fl.Af));this.Lu.AZ(A.aaL(A.fl.Ak));this.Lu.Cr(A.aaL(A.fl.
Bh));this.Ak8.Ax(A.aaL(A.ach.AQ3));this.ZZ.OnSetAppearance(this.ZY);this.ZY.A_Y(
A.aaL(A.ach.NX));this.ZY.A_V(A.aaL(A.ach.NX));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N$._Done();this.Lu._Done();this.Ak8._Done();this.ZZ._Done(
);this.ZY._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N$._ReInit();this.Lu._ReInit();this.Ak8._ReInit();this.ZZ._ReInit();this.
ZY._ReInit();this.N$.R(A.aaR(A.acf.N$));this.N$.S(A.aaL(A.fl.EK));this.N$.AZ(A.aaL(
A.fl.Af));this.N$.Cr(A.aaL(A.fl.Ak));this.Lu.S(A.aaL(A.fl.Af));this.Lu.AZ(A.aaL(
A.fl.Ak));this.Lu.Cr(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lu)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aq1={_Init:function(aArg){C.ADp._Init.call(this,aArg
);this.__proto__=C.Aq1;this.A_m(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,B_:A.abi(3,0,{0:2,2:1}),Du:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.B_.Get(aIndex
);},Gl:function(aIndex){return this.GenderToString.BS(this.C7(aIndex));},DZ:function(
A7){var O=0;while(O<3){if(this.B_.Get(O)===A7)return O;O=O+1;}return-1;},H4:function(
){var O=0;var max=-1;while(O<3){if(this.B_.Get(O)>max)max=this.B_.Get(O);O=O+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.JX(
E);},L2:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af3],[B=this.Animal,B.WC,B.JX],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af3],[B=this.Animal,B.WC,B.JX],0);A.pe([this,this.Af3],this);},Af3:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B$,
this.Cb],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.B_=[]).__proto__=C.Gender.B_;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,B_:A.abi(4,0,{1:1,2:2,3:3}),Du:function(){return 4;},C7:function(aIndex){if(
aIndex>=4)return-1;return this.B_.Get(aIndex);},Gl:function(aIndex){return this.
BirthTypeToString.BS(this.C7(aIndex));},DZ:function(A7){var O=0;while(O<4){if(this.
B_.Get(O)===A7)return O;O=O+1;}return-1;},H4:function(){var O=0;var max=-1;while(
O<4){if(this.B_.Get(O)>max)max=this.B_.Get(O);O=O+1;}return max;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akw(E);},A1K:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B$,this.
Cb],0);},L2:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1K],[B=this.Animal,B.ASD,B.Akw],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1K],[B=this.Animal,B.ASD,B.Akw],0);A.pe([this,this.A1K],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.B_=[]).__proto__=C.BirthType.B_;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acr:null,Du:
function(){return A._GetAutoObject(A.Device.Helper).Ad1.MH;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Ad1.MH)return-1;return A._GetAutoObject(
A.Device.Helper).Ad1.Get(aIndex);},Gl:function(aIndex){return this.Acr.BS(this.C7(
aIndex));},DZ:function(A7){var O=0;while(O<A._GetAutoObject(A.Device.Helper).Ad1.
MH){if(A._GetAutoObject(A.Device.Helper).Ad1.Get(O)===A7)return O;O=O+1;}return-
1;},H4:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UJ.
MH){if(A._GetAutoObject(A.Device.Helper).UJ.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UJ.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.EC(E);},A1D:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B$,this.Cb],0);},L2:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1D],[B=this.Animal,B.PT,B.EC],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1D],[B=this.Animal,B.PT,B.EC],0);A.pe([
this,this.A1D],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acr={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acr._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acr._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUV={Init:function(aArg){var B;A.pe([this,this.AfH],this);A.zX([this,this.AfH
],[B=A._GetAutoObject(A.Device.Device),B.ArB,B.Atq],0);},A4e:function(G){A._GetAutoObject(
A.Device.Device).A3(38,true,A.jV,0,[this,this.Bb4]);},A3P:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Asu(this);},A13:function(G){var F;if(this.A_===1){var BO=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlT)this.D7=this.AlT;if(this.D7<A._GetAutoObject(
A.Device.Device).AcG)this.D7=A._GetAutoObject(A.Device.Device).AcG;if(this.DW!==
BO){if(!!this.J0)(F=this.J0,F[2].call(F[0],this.D7));A.abo(this.J0,0);}}if(this.
A_===2){var BO=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BO){if(!!this.JZ)(F=this.JZ,F[2].call(F[0],this.DW));A.abo(this.JZ,0);
}}this.DJ(this);this.Am();},A2D:function(G){var F;if(this.A_===1){var BO=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.
J0)(F=this.J0,F[2].call(F[0],this.D7));A.abo(this.J0,0);}}if(this.A_===2){var BO=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlO)this.DW=this.AlO;if(this.DW!==BO){
if(!!this.JZ)(F=this.JZ,F[2].call(F[0],this.DW));A.abo(this.JZ,0);}}this.DJ(this
);this.Am();},GH:function(G){this.PM.R(AHv+A._GetAutoObject(A.Device.Converter).
Ak2(this.D7));this.PN.R(AHv+A._GetAutoObject(A.Device.Converter).Ak2(this.DW));this.
Sz.R(A._GetAutoObject(A.acj.Temperature).AlM());},A2w:function(Atx){if(Atx===1)return this.
PM;else if(Atx===2)return this.PN;else return null;},_Init:function(aArg){C.Acp.
_Init.call(this,aArg);this.__proto__=C.AUV;this.AlO=5000;this.AlT=3000;this.T(A.
aaR(A.acf.Arr));this.Background.H(AfE);this.V.H(BD);this.V.R(A.aaR(A.acf.AG7));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Acp._ReInit.call(this);this.T(
A.aaR(A.acf.Arr));this.V.R(A.aaR(A.acf.AG7));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CJ);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa9:null,Abb:null,Aa$:
null,Background:null,Aa8:null,Aba:null,Aa_:null,AjG:null,Arw:null,VO:null,A5:0,BAR:
function(G){if(this.AjG.CO===6){if(this.A5===1)this.AnI(2);else if(this.A5===2)this.
AnI(3);else this.AnI(1);}else if(this.AjG.CO===7){if(this.A5===3)this.AnI(2);else
if(this.A5===2)this.AnI(1);else this.AnI(3);}},AnI:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.Aa8.M);break;case 2:this.
Background.H(this.Aba.M);break;case 1:this.Background.H(this.Aa_.M);break;default:
this.Background.H(Aon);}},I2:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hp._Init.
call(this.Aa9={I:this},0);A.acg.Hp._Init.call(this.Abb={I:this},0);A.acg.Hp._Init.
call(this.Aa$={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aeq._Init.call(this.Aa8={I:this},0);A.acg.Aeq._Init.call(this.Aba={I:this},0);A.
acg.Aeq._Init.call(this.Aa_={I:this},0);A.Core.BK._Init.call(this.AjG={I:this},0
);A.Core.BK._Init.call(this.Arw={I:this},0);A.Graphics.AMP._Init.call(this.VO={I:
this},0);this.__proto__=C.Rating;this.H(AWe);this.Aa9.H(AHw);this.Aa9.L(A.jb.Text
);this.Aa9.AnG(Ale);this.Aa9.Nn(3);this.Aa9.Z(true);this.Abb.H(AHx);this.Abb.L(A.
jb.Text);this.Abb.AnG(Ale);this.Abb.Nn(3);this.Abb.Z(true);this.Aa$.H(AHy);this.
Aa$.L(A.jb.Text);this.Aa$.AnG(Ale);this.Aa$.Nn(3);this.Aa$.Z(true);this.Background.
H(Aon);this.Background.L(A.jb.AV);this.Aa8.H(AHw);this.Aa8.L(A.jb.E1);this.Aa8.AnG(
Ale);this.Aa8.Z(true);this.Aba.H(AHx);this.Aba.L(A.jb.H9);this.Aba.AnG(Ale);this.
Aba.Z(true);this.Aa_.H(AHy);this.Aa_.L(A.jb.Gj);this.Aa_.AnG(Ale);this.Aa_.Z(true
);this.AjG.Filter=147;this.Arw.Filter=1;this.VO.BmF(360);this.VO.BnV(22);this.VO.
Bn5(2);this.J(this.Aa9,0);this.J(this.Abb,0);this.J(this.Aa$,0);this.J(this.Background
,0);this.J(this.Aa8,0);this.J(this.Aba,0);this.J(this.Aa_,0);this.Aa9.Zx(this.VO
);this.Abb.Zx(this.VO);this.Aa$.Zx(this.VO);this.Background.Ax(A.aaL(A.ach.NW));
this.Aa8.Zx(this.VO);this.Aba.Zx(this.VO);this.Aa_.Zx(this.VO);this.AjG.BL=[this
,this.BAR];this.Arw.BL=[this,this.I2];},_Done:function(){this.__proto__=A.Core.P;
this.Aa9._Done();this.Abb._Done();this.Aa$._Done();this.Background._Done();this.
Aa8._Done();this.Aba._Done();this.Aa_._Done();this.AjG._Done();this.Arw._Done();
this.VO._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa9._ReInit();this.Abb._ReInit();this.Aa$._ReInit();this.Background.
_ReInit();this.Aa8._ReInit();this.Aba._ReInit();this.Aa_._ReInit();this.AjG._ReInit(
);this.Arw._ReInit();this.VO._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asw={Akk:null,Asg:null,Background:null,TW:null,TQ:null,AbX:null,AbW:null,AbV:
null,Acv:null,Acu:null,Act:null,Ack:null,Acj:null,AbQ:null,AbP:null,Aca:null,Ab$:
null,AqC:null,Init:function(aArg){},BkB:function(G){this.AbX.R(AWf);this.AbW.R(A.
jV);this.AbV.R(A.jV);this.Acv.R(AWg);this.Acu.R(A.jV);this.Act.R(A.jV);this.Ack.
R(A.jV);this.Acj.R(A.jV);this.AbQ.R(A.jV);this.AbP.R(A.jV);this.Aca.R(A.jV);this.
Ab$.R(A.jV);},Boy:function(G){this.TQ.Z(true);this.TW.Z(true);var IF=this.Im();if(
!IF)return;this.TW.R(IF.GetFPS().toFixed()+AHz);this.TQ.R(AWh);this.TQ.L(0xFFFFFFFF
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
2000);this.Akk.WG(1);this.Akk.Ar(true);this.Asg.Ar(true);this.Background.A0(0x3F
);this.Background.H(AcP);this.Background.L(0x78000000);this.TW.H(AWi);this.TW.A6(
0x14);this.TW.R(A.jV);this.TW.L(0xFFFFFC00);this.TW.Z(false);this.TQ.H(AWj);this.
TQ.A6(0x11);this.TQ.R(A.jV);this.TQ.Z(false);this.AbX.H(AWk);this.AbX.A6(0x11);this.
AbX.R(A.jV);this.AbW.H(AHA);this.AbW.A6(0x11);this.AbW.R(A.jV);this.AbV.H(As7);this.
AbV.A6(0x14);this.AbV.R(A.jV);this.Acv.H(AHB);this.Acv.A6(0x11);this.Acv.R(A.jV);
this.Acu.H(AHC);this.Acu.A6(0x11);this.Acu.R(A.jV);this.Act.H(Ayi);this.Act.A6(0x14
);this.Act.R(A.jV);this.Ack.H(AHD);this.Ack.A6(0x11);this.Ack.R(A.jV);this.Acj.H(
Ayj);this.Acj.A6(0x14);this.Acj.R(A.jV);this.AbQ.H(AWl);this.AbQ.A6(0x11);this.AbQ.
R(A.jV);this.AbP.H(AWm);this.AbP.A6(0x14);this.AbP.R(A.jV);this.Aca.H(AWn);this.
Aca.A6(0x11);this.Aca.R(A.jV);this.Ab$.H(AWo);this.Ab$.A6(0x14);this.Ab$.R(A.jV);
this.AqC.H(AHE);this.J(this.Background,0);this.J(this.TW,0);this.J(this.TQ,0);this.
J(this.AbX,0);this.J(this.AbW,0);this.J(this.AbV,0);this.J(this.Acv,0);this.J(this.
Acu,0);this.J(this.Act,0);this.J(this.Ack,0);this.J(this.Acj,0);this.J(this.AbQ,
0);this.J(this.AbP,0);this.J(this.Aca,0);this.J(this.Ab$,0);this.J(this.AqC,0);this.
Akk.ME=[this,this.BkB];this.Asg.ME=[this,this.Boy];this.TW.S(A.aaL(A.fl.Ak));this.
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
};C.AGP={FM:null,Dm:null,Av:null,Jy:null,HM:null,Uk:null,Bc:null,So:null,Gy:null
,Gx:null,FY:0,A_:0,Bj$:false,Init:function(aArg){},Ai:function(Ae){C.Ds.Ai.call(
this,Ae);this.Hx.Z(false);this.H5.Z(false);if(!!this.Dm){this.So.R(this.Av.Format(
AWp));this.Uk.R(this.Av.Format(MM));}if(this.A_===1){this.HM.Z(true);this.HM.H(this.
So.M);this.HM.L(A.jb.Bm);this.So.L(this.Background.AQ);this.Uk.L(A.jb.Bm);}else if(
this.A_===2){this.HM.Z(true);this.HM.H(this.Uk.M);this.HM.L(A.jb.Bm);this.So.L(A.
jb.Bm);this.Uk.L(this.Background.AQ);}else{this.HM.Z(false);this.So.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Uk.L(this.V.AQ);}},Qu:function(G){if(this.FI===1)A.pe([
this,this.Vc],this);else if(this.FI===4)A.pe([this,this.AiH],this);else if(this.
FI===5)A.pe([this,this.Ait],this);C.Ds.Qu.call(this,G);},Kf:function(G){switch(this.
A_){case 0:C.Ds.Kf.call(this,G);break;case 2:break;default:this.Ady(this);}},Ka:
function(G){switch(this.A_){case 0:C.Ds.Ka.call(this,G);break;default:this.Ais(this
);}},AdA:function(G){var F;if(!!this.Dm)this.Ur((F=this.Dm,F[1].call(F[0])));},Ab7:
function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdA],this.Dm
,0);this.Dm=E;if(!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA],this);
},Ur:function(E){if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.FY);this.
Am();},Ady:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Vc],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},Vc:function(G){this.Ex(this.A_+1);},Al5:
function(G){this.FI=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiH],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},Al4:function(G){this.FI=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Ait],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiH:function(G){
var B;var F;var BO=this.FY;if(this.A_===1)this.Av.AnB(this.Av.AjU+1);if(this.A_===
2)this.Av.AnE(this.Av.Av7+1);this.Av.AnH(0);this.Ur(((B=(this.Av.JV()|0))<0)?B+0x100000000:
B);if(this.FY!==BO){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FY));A.abo(this.
Dm,0);}},Ait:function(G){var B;var F;var BO=this.FY;if(this.A_===1)this.Av.AnB(this.
Av.AjU-1);if(this.A_===2)this.Av.AnE(this.Av.Av7-1);this.Av.AnH(0);this.Ur(((B=(
this.Av.JV()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dm)(F=this.Dm,F[
2].call(F[0],this.FY));A.abo(this.Dm,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vc];}break;case 2:{(F=this.
N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){
var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EO;this.Bj$=true;
if((this.A_<0)||(this.A_>2))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.
Bw=!!this.A_;this.Am();},Ais:function(G){if(this.A_>1)this.Ex(this.A_-1);},_Init:
function(aArg){C.Ds._Init.call(this,aArg);A.Core.Bs._Init.call(this.Av={I:this},
0);A.Core.BK._Init.call(this.Jy={I:this},0);A.acg.AL._Init.call(this.HM={I:this}
,0);A.acg.Text._Init.call(this.Uk={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.So={I:this},0);A.Core.BK._Init.call(this.Gy={I:this
},0);A.Core.BK._Init.call(this.Gx={I:this},0);this.__proto__=C.AGP;this.H(UZ);this.
V.R(Ayk);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H5.Z(false);this.Jy.Filter=1;this.
HM.H(AWq);this.HM.L(0x55FFFFFF);this.Uk.H(AWr);this.Uk.Jb(true);this.Bc.H(AWs);this.
Bc.A6(0x14);this.Bc.R(AWt);this.So.H(AWu);this.So.Jb(true);this.So.A6(0x14);this.
Gy.Filter=4;this.Gy.Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HM,0);
this.J(this.Uk,0);this.J(this.Bc,0);this.J(this.So,0);this.Jy.BL=[this,this.Ady];
this.Uk.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.So.S(A.aaL(A.fl.EK));this.
Gy.BL=[this,this.Al5];this.Gy.D1=[this,this.AiH];this.Gx.BL=[this,this.Al4];this.
Gx.D1=[this,this.Ait];this.FM=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ds;this.Av._Done();this.Jy._Done();this.HM._Done();this.Uk._Done(
);this.Bc._Done();this.So._Done();this.Gy._Done();this.Gx._Done();C.Ds._Done.call(
this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit();this.Jy._ReInit(
);this.HM._ReInit();this.Uk._ReInit();this.Bc._ReInit();this.So._ReInit();this.Gy.
_ReInit();this.Gx._ReInit();this.Uk.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.So.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((
B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jy
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Uk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CG={B6:null,AmT:null,AqR:null,Em:null,Text:null,String:A.jV,Bd5:A.jV,Kl:0x12
,ALd:0,AQ:0xFFFFFFFF,N8:0,AUD:0,A$w:0,Bd6:true,G4:function(CN){var LL=(A.Core.ARE.
isPrototypeOf(CN)?CN:null);if(!!LL)this.BC4(this);return A.Core.P.G4.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajl],this);}
,Dd:function(aFilter){return A.abh(this.Text.Dd(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bd6){this.Bd5=E;this.Bd6=false;
}this.ALd=E.length;A.pe([this,this.Ajl],this);},S:function(E){if(this.B6===E)return;
this.B6=E;A.pe([this,this.Ajl],this);},AZ:function(E){if(this.AmT===E)return;this.
AmT=E;A.pe([this,this.Ajl],this);},Cr:function(E){if(this.AqR===E)return;this.AqR=
E;A.pe([this,this.Ajl],this);},A6:function(E){if(E===this.Kl)return;this.Kl=E;this.
Text.A6(E);},Ajl:function(G){var B;var ALj=0;if(!this.ALd){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KU(false);if(!!this.B6){ALj=
this.B6.Yt(this.String,0,this.ALd);if(ALj<(((B=this.M)[2]-B[0])-(2*this.Text.Je)
)){this.Text.S(this.B6);this.Text.Aw9(this.N8);return;}}this.Text.KU(true);if(!!
this.AmT){ALj=this.AmT.Yt(this.String,0,this.ALd);this.Text.S(this.AmT);this.Text.
Aw9(this.AUD);if((ALj<(((B=this.M)[2]-B[0])-(2*this.Text.Je)))&&(((B=this.Text.Dd(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqR){this.Text.S(this.AqR);
if(((B=this.Text.Dd())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw9((((this.Text.
B6.Ascent+this.Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BC4:function(G){this.R(this.Bd5);},Q7:function(E){if(
A.aa0(this.Em,E))return;this.Em=E;this.Text.Q7(E);},ASB:function(){return A.abh(
this.Text.Dd(),this.M.slice(0,2));},Afh:function(AoO){return A.abf(this.M.slice(
0,2),this.Text.Afh(AoO));},Aw9:function(E){if(this.N8===E)return;this.N8=E;A.pe([
this,this.Ajl],this);},BnX:function(E){if(this.AUD===E)return;this.AUD=E;A.pe([this
,this.Ajl],this);},BnY:function(E){if(this.A$w===E)return;this.A$w=E;A.pe([this,
this.Ajl],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CG;this.H(AHF);this.Ar(false);
this.Text.A0(0x3F);this.Text.H(AHF);this.Text.R(Ro);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjS={Y:null,IN:null,AeM:null,I9:null,Nb:null,AeG:null,AeL:null,AeK:null,AeH:
null,AeJ:null,AeI:null,Nd:null,NY:null,Mw:null,Dg:function(E){C.Yu.Dg.call(this,
E);this.IN.L(E);this.AeM.L(E);this.I9.L(E);this.Nb.L(E);this.Mw.L(E);this.AeG.L(
E);this.Nd.L(E);this.NY.L(E);this.AeL.L(E);this.AeK.L(E);this.AeH.L(E);this.AeJ.
L(E);this.AeI.L(E);},DX:function(G){C.Yu.DX.call(this,G);this.XO(8,1,this.Nb);this.
XO(12,1,this.Mw);this.XO(11,1,this.AeG);this.XO(7,1,this.Nd);this.XO(14,1,this.NY
);this.XO(1,4,this.IN);this.XO(1,1,this.AeM);this.XO(4,1,this.I9);this.XO(22,1,this.
AeL);this.XO(26,1,this.AeK);this.XO(30,1,this.AeH);this.XO(19,1,this.AeJ);this.XO(
31,1,this.AeI);this.Text.Z(!this.Y.TT(null,0x1));},XO:function(AJu,Eb,AfU){var ABh=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adk=A._GetAutoObject(
A.Device.Device).An.Filter.DL(AJu,Eb);if(!!Adk){ABh=true;switch(AJu){case 14:{var
Azx=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adk)?Adk:null);if(!!Azx)AfU.
Ax(A._GetAutoObject(A.Device.Converter).A5q(Azx.A5));}break;case 7:{var Azx=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adk)?Adk:null);if(!!Azx)AfU.Ax(A._GetAutoObject(
A.Device.Converter).AmV(Azx.A5));}break;case 1:if(Eb===4)AfU.Ax(A.aaL(A.ach.ADO)
);else if(Adk.Operator===4)ABh=false;break;case 22:switch(Adk.Operator){case 0:case
3:AfU.Ax(A.aaL(A.ach.AQL));break;default:AfU.Ax(A.aaL(A.ach.AjY));}break;case 26:
switch(Adk.Operator){case 0:case 3:AfU.Ax(A.aaL(A.ach.AQJ));break;default:AfU.Ax(
A.aaL(A.ach.AvF));}break;default:;}}else if((AJu===1)&&(Eb===4)){ABh=true;AfU.Ax(
A.aaL(A.ach.AeC));}}else if((AJu===1)&&(Eb===4)){ABh=true;AfU.Ax(A.aaL(A.ach.AeC
));}AfU.Z(ABh);},_Init:function(aArg){C.Yu._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IN={I:this},0);A.acg.Ap._Init.call(
this.AeM={I:this},0);A.acg.Ap._Init.call(this.I9={I:this},0);A.acg.Ap._Init.call(
this.Nb={I:this},0);A.acg.Ap._Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(
this.AeL={I:this},0);A.acg.Ap._Init.call(this.AeK={I:this},0);A.acg.Ap._Init.call(
this.AeH={I:this},0);A.acg.Ap._Init.call(this.AeJ={I:this},0);A.acg.Ap._Init.call(
this.AeI={I:this},0);A.acg.Ap._Init.call(this.Nd={I:this},0);A.acg.Ap._Init.call(
this.NY={I:this},0);A.acg.Ap._Init.call(this.Mw={I:this},0);this.__proto__=C.AjS;
this.Y.A0(0x3F);this.Y.H(AWv);this.Y.JW(3);this.IN.H(Ayl);this.AeM.H(As8);this.AeM.
Aj(true);this.I9.H(Aym);this.I9.Aj(true);this.Nb.H(AWw);this.Nb.Aj(true);this.AeG.
H(AWx);this.AeG.Aj(true);this.AeL.H(AHG);this.AeL.Aj(true);this.AeK.H(AHG);this.
AeK.Aj(true);this.AeH.H(AWy);this.AeH.Aj(true);this.AeJ.H(AHH);this.AeJ.Aj(true);
this.AeI.H(AHH);this.AeI.Aj(true);this.Nd.H(AHI);this.Nd.Aj(true);this.NY.H(AHJ);
this.NY.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mw.H(AHI);this.Mw.Aj(true);
this.J2(this.Gw,-3);this.J2(this.D2,-3);this.J2(this.A$,-3);this.J2(this.AP,-2);
this.J(this.Y,-2);this.J(this.IN,-2);this.J(this.AeM,-2);this.J(this.I9,-2);this.
J(this.Nb,-2);this.J(this.AeG,-2);this.J(this.AeL,-2);this.J(this.AeK,-2);this.J(
this.AeH,-2);this.J(this.AeJ,-2);this.J(this.AeI,-2);this.J(this.Nd,-2);this.J(this.
NY,-2);this.J(this.Mw,0);this.IN.Ax(A.aaL(A.ach.AeC));this.AeM.Ax(A.aaL(A.ach.AQy
));this.I9.Ax(A.aaL(A.ach.APW));this.Nb.Ax(A.aaL(A.ach.ADJ));this.AeG.Ax(A.aaL(A.
ach.Ag7));this.AeL.Ax(A.aaL(A.ach.AjY));this.AeK.Ax(A.aaL(A.ach.AvF));this.AeH.Ax(
A.aaL(A.ach.AQv));this.AeJ.Ax(A.aaL(A.ach.AQw));this.AeI.Ax(A.aaL(A.ach.AQu));this.
Nd.Ax(A.aaL(A.ach.ADL));this.NY.Ax(A.aaL(A.ach.AvK));this.Mw.Ax(A.aaL(A.ach.ADR)
);},_Done:function(){this.__proto__=C.Yu;this.Y._Done();this.IN._Done();this.AeM.
_Done();this.I9._Done();this.Nb._Done();this.AeG._Done();this.AeL._Done();this.AeK.
_Done();this.AeH._Done();this.AeJ._Done();this.AeI._Done();this.Nd._Done();this.
NY._Done();this.Mw._Done();C.Yu._Done.call(this);},_ReInit:function(){C.Yu._ReInit.
call(this);this.Y._ReInit();this.IN._ReInit();this.AeM._ReInit();this.I9._ReInit(
);this.Nb._ReInit();this.AeG._ReInit();this.AeL._ReInit();this.AeK._ReInit();this.
AeH._ReInit();this.AeJ._ReInit();this.AeI._ReInit();this.Nd._ReInit();this.NY._ReInit(
);this.Mw._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yu.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mw)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amv={H8:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);this.H8.Gr();this.H8.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Re.CC.call(this,G);},An8:function(){C.Re.
An8.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).Bz2(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw));this.C_.L(A._GetAutoObject(
A.acj.Temperature).Bz5(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lw));this.JQ.L(A._GetAutoObject(A.acj.Temperature).Bz3(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw));this.HG.L(A.
_GetAutoObject(A.acj.Temperature).Bz4(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lw));this.MJ.L(this.JQ.AQ);this.TemperatureUnit.
L(this.JQ.AQ);}break;default:;}},AcH:function(){C.Re.AcH.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cw(A.aaL(A.ach.AQW));this.N.C3(A.aaL(
A.ach.Am3));}break;case 4:{this.N.Cw(null);this.N.C3(A.aaL(A.ach.AvS));}break;default:;
}},WU:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lw>3240)&&(A._GetAutoObject(A.Device.
Device).Lw<5460)){A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H8.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lw);var B1=A._GetAutoObject(A.Device.Converter).AsK(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw);this.H8.OnSetRatingTemperature(
B1);this.H8.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();
}break;case 4:this.AKK(this);break;default:;}},AkX:function(G){C.Re.AkX.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKK(this);break;default:;}},Ax0:function(
){C.Re.Ax0.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JQ.R(A._GetAutoObject(A.acj.Temperature).Bz_(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw));break;default:;}},Ax1:function(
){C.Re.Ax1.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WH(A._GetAutoObject(A.acj.Temperature).Bz6(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lw));this.Jh.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WH(16711680
);this.Jh.Ar(true);}break;default:this.Jh.Ar(false);}},AUP:function(){this.C_.Ax(
A.aaL(A.ach.AvR));this.C_.Cv(A._GetAutoObject(A.acj.Temperature).Bz$(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lw));this.NW.Cv(
0);},_Init:function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.Amv;this.Dr(
C.IL);this.H8=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Re._Mark.
call(this,D);if((B=this.H8)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.AhB={N7:null,DK:null,Il:null,Bc:null,AuD:null,String:A.jV,AxO:A.jV,Mz:7,Akb:
2,KV:0,AU2:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Akb,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Il.S(this.DK.B6);this.Il.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WM],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahw:function(
E){if(this.AxO===E)return;this.AxO=E;this.Il.R(E);},Ab6:function(E){this.Mz=E;if(
E<10)this.ATp(2);else if(E<40)this.ATp(1);else this.ATp(0);A.pe([this,this.WM],this
);},WM:function(G){var B;while(!!this.Bc.Ah)this.HP(this.Bc.Ah);if(this.Mz>1){var
Adf=this.AOT();var A2p=this.AOR();var Apt=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AAa;var AK9;var Auc;var Ama=null;if(!!this.N7&&(this.N7.AY>0))Ama=this.N7.K3;
while((Adf>=A2p)&&(Adf>0)){var AtP=A._NewObject(C.Ajv,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*(((Adf-A2p)/86400)|0))/this.Mz)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*((((Adf-A2p)/86400)|0)+1))/this.Mz)|0;while(!!Ama&&(Ama.Timestamp>=
Adf)){if(Ama.Timestamp<(Adf+86400))AtP.Ow(Ama.A5,Ama.Timestamp);Ama=Ama.Ah;}var Auo=
0;if(AtP.AY>0)Auo=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtP.AY
)|0;else if(this.Mz<10){Auo=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
Auc=A._NewObject(A.acg.Text,0);Auc.H([x1,Apt,x2,Apt+Auo]);Auc.S(A.aaL(A.fl.Bh));
Auc.L(A.jb.Text);Auc.R(A.aaR(A.acf.Afd));this.J(Auc,0);}var AJX=AtP.K3;var O=0;while(
!!AJX){if(O>=AtP.AY)throw new Error(AWz);AAa=A._NewObject(A.acg.AL,0);AAa.L(A._GetAutoObject(
A.acj.Assessment).Qr(AJX.A5));if(O===(AtP.AY-1))AAa.H([x1,Apt+(O*Auo),x2,this.Bc.
M[1]]);else AAa.H([x1,Apt+(O*Auo),x2,Apt+((O+1)*Auo)]);this.J(AAa,0);AJX=AJX.Ah;
O=O+1;}if(this.AU2){var ByQ=A._GetAutoObject(A.Device.Helper).Aqr(A._GetAutoObject(
A.Device.Helper).Dv());var ByP=A._GetAutoObject(A.Device.Helper).Aqr(Adf);if(ByQ===
ByP){var ALB=A._NewObject(A.acg.Aeq,0);ALB.L(A.jb.Text);var Bes=(x1+this.Akb)+(((
x2-x1)/2)|0);ALB.H([Bes-4,this.Bc.M[1]-4,Bes+4,this.Bc.M[1]]);ALB.Zx(this.AuD);this.
J(ALB,0);}}Adf=Adf-86400;if(this.Akb>0){AK9=A._NewObject(A.acg.AL,0);AK9.H([x1,Apt
,x1+this.Akb,Apt+((((B=this.M)[3]-B[1])/2)|0)]);AK9.L(A.jb.Bc);this.J(AK9,0);}}}
},Ab8:function(E){this.N7=E;A.pe([this,this.WM],this);},ATp:function(E){if(this.
Akb===E)return;this.Akb=E;A.pe([this,this.WM],this);},Dg:function(E){if(this.KV===
E)return;this.KV=E;this.DK.L(E);this.Il.L(E);},AOR:function(){var B;return this.
AOT()-(((((B=this.Mz)<0)?B+0x100000000:B)-1)*86400);},AOT:function(){return A._GetAutoObject(
A.Device.Converter).AhT();},Bn1:function(E){if(this.AU2===E)return;this.AU2=E;A.
pe([this,this.WM],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Il={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.AxY._Init.call(this.AuD={I:this},0);
this.__proto__=C.AhB;this.H(BD);this.Ar(false);this.DK.H(AHK);this.DK.Hn(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Il.H(AHK);this.Il.Hn(5);this.Il.A6(0x14);this.
Il.L(A.jb.Text);this.Bc.H(AWA);this.Bc.L(A.jb.Bc);this.KV=A.jb.Text;this.AuD.H(AWB
);this.J(this.DK,0);this.J(this.Il,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Il.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Il._Done();this.Bc._Done();this.AuD._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Il._ReInit();this.Bc._ReInit();this.AuD._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Il.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Il)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AuD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A5w={Ah:null,Timestamp:0,A5:0,_Init:function(
aArg){this.__proto__=C.A5w;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajv={K3:null,MY:null,AY:0,Ow:
function(A7,Qi){var Hh;Hh=A._NewObject(C.A5w,0);Hh.A5=A7;Hh.Timestamp=Qi;if(!this.
K3){this.K3=Hh;this.MY=Hh;this.AY=1;}else{this.MY.Ah=Hh;this.MY=Hh;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajv;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ej={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MN],this);},DE:function(G){var B;var Fi=0;var X=this.AV;switch(
this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;
default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HI(X,true,null,null);this.DJ(this);},Al3:function(G){A._GetAutoObject(C.A8
).FB();},ApO:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Agw)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Agw,this);},Fk:function(G){var B;this.
Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.
Y.Br[1]);},DJ:function(G){var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!GZ){this.N.Hy(A.jV);this.N.CR(GZ.AxR);this.N.Jg.C4(255);this.N.GW.C4(GZ.Axn);this.
N.AFi(GZ.Avt);this.N.Anz(GZ.AmU);this.N.C2(GZ.AQp);this.N.C3(GZ.Aq9);GZ.A3v(this
);}},MN:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ej;this.Background.H(Qc);this.Background.L(A.jb.CT);this.N.H(Xi);this.
N.Ar(false);this.N.Z(true);this.Y.H(Ff);this.Y.JW(1);this.Ay.H(It);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AT8={NF:null,AS7:null,Ad5:null,VI:null,GU:null,PopupTimeout:null,Acb:null,AgH:
null,PopupIdToString:null,AtK:null,Text:A.jV,AkJ:A.jV,AKf:A.jV,Ak4:0,ALl:-1,Azw:-
1,AKQ:0,AT_:0,A2z:false,CP:function(){this.A_S(this.PopupIdToString.BS(this.AT_)
);},Init:function(aArg){this.Bpv(this);},Bhe:function(G){var B;if(this.Ak4>0){this.
A_8((this.Ak4/1000)|0);this.PopupTimeout.WG(0);this.PopupTimeout.PV(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxN(this);},Bha:function(G){var M2=this.
Text;var AfX=this.AkJ;var AKO=A.abi(16,A.jV,null);var index=0;var Azr=0;while(AfX
!==A.jV){Azr=AfX.indexOf(A.Device.PopupParamSeparator,0);if(Azr!==-1){AKO.Set(index
,A.ab1(AfX,Azr,(AfX.length-Azr)+1));AfX=A.ab1(AfX,0,Azr+1);index=index+1;if(index>=
16){A.ab5("%s",(AWC+AfX)+AWD);AfX=A.jV;}}else{AKO.Set(index,AfX);AfX=A.jV;}}index=
0;while(index<M2.length){if((M2.charCodeAt(index)||0)===0x7B){var Bd4=M2.indexOf(
String.fromCharCode(0x7D),index);if(Bd4===-1){A.ab5("%s",(((AWE+M2)+AWF)+index.toFixed(
))+Alc);index=M2.length;}else{var BfX=(Bd4-index)-1;var A37=A.abW(M2,index+1,BfX
);var AKN=A.wz(A37,-1,10);M2=A.ab1(M2,index,BfX+2);if(A37===AWG)this.Boh(index);
else if(((AKN>0)&&(AKN<=16))&&(this.AkJ!==A.jV)){M2=A.abU(M2,AKO.Get(AKN-1),index
);if(this.A2z===true)this.Bog(A.wz(AKO.Get(AKN-1),0,10));}else A.ab5("%s",(AWH+A37
)+AWI);}}index=index+1;}this.Bof(M2);},CC:function(G){A.pe([this,this.Bhe],this);
},Ai:function(Ae){var B;this.Ad5.H(A.aaT(this.GU.Dd(),Ah0));this.VI.H(A.aaT(this.
GU.Dd(),Ah0));if(!!this.NF){this.NF.H(A.abM(this.NF.M,this.GU.M[0]));this.NF.H(A.
abO(this.NF.M,this.GU.M[3]+10));this.NF.H(A.abL(this.NF.M,(B=this.GU.M)[2]-B[0])
);this.NF.H(A.abI(this.NF.M,8));this.Ad5.H(A.abh(A.aaT(this.GU.Dd(),Ah0),AHL));this.
VI.H(A.abh(A.aaT(this.GU.Dd(),Ah0),AHL));}else{this.Ad5.H(A.aaT(this.GU.Dd(),Ah0
));this.VI.H(A.aaT(this.GU.Dd(),Ah0));}},DE:function(G){var JE=(A.Core.BK.isPrototypeOf(
G)?G:null);if((JE.CO===4)&&((this.VI.M[1]+this.M[1])<this.M[1])){this.GU.H(A.abO(
this.GU.M,this.GU.M[1]+28));this.Am();}else if((JE.CO===5)&&((this.VI.M[3]+this.
M[1])>this.N.M[1])){this.GU.H(A.abO(this.GU.M,this.GU.M[1]-28));this.Am();}if((JE.
CO===6)&&!!this.D_().CE)this.D_().AFr(1);else if((JE.CO===7)&&!!this.D_().Ca)this.
D_().AFr(3);},I2:function(G){switch(this.D_().Ahm){case 1:this.Al3(this);break;case
3:this.ApO(this);break;case 2:this.AAI(this);break;case 0:break;default:A.ab5("%s%e"
,AWJ,this.D_().Ahm);}},Al3:function(G){var B;(B=this.D_().CE)?B[1].call(B[0],this
):null;},ApO:function(G){var B;(B=this.D_().Ca)?B[1].call(B[0],this):null;},AAI:
function(G){var B;(B=this.D_().Cf)?B[1].call(B[0],this):null;},LQ:function(G){this.
N.I_.L((this.N.I_.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
AxN(this);},A_S:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bha],this);},BBf:function(G){var B;this.A_8(this.Azw-1);if(this.Azw<=0){this.PopupTimeout.
AxN(this);(B=this.AS7)?B[1].call(B[0],this):null;}},A_U:function(E){if(this.Ak4===
E)return;this.Ak4=E;A.pe([this,this.Bhe],this);},A_E:function(E){if(this.AkJ===E
)return;this.AkJ=E;A.pe([this,this.Bha],this);},Bof:function(E){if(this.AKf===E)
return;this.AKf=E;this.ABA(this);this.ByX(this);},ABA:function(G){if((this.Azw!==-
1)&&(this.ALl!==-1)){var BzM=this.AtK.Format(AWK);this.GU.R(A.abU(this.AKf,BzM,this.
ALl));}else this.GU.R(this.AKf);this.GU.H(AHM);},Boh:function(E){if(this.ALl===E
)return;this.ALl=E;this.ABA(this);},A_8:function(E){if(this.Azw===E)return;this.
Azw=E;this.AtK.AFW(E);A.pe([this,this.ABA],this);},ByX:function(G){this.GU.Dd();
if(this.GU.M[1]<=this.M[1])this.GU.H(A.abO(this.GU.M,28));this.Am();},A__:function(
E){if(this.A2z===E)return;this.A2z=E;if(E===true)A.pe([this,this.BBR],this);},BBR:
function(G){if(!this.NF){this.NF=A._NewObject(A.acr.ADz,0);this.NF.Ga(0);this.NF.
EV(100);this.NF.OnSetAppearance(this.Acb);this.J(this.NF,0);this.AhE(this.NF,this.
GU);}this.NF.Bx(this.AKQ);},Bog:function(E){if(this.AKQ===E)return;this.AKQ=E;if(
!!this.NF)this.NF.Bx(this.AKQ);},Bpv:function(G){var B;this.N.C4(0);this.AgH.AnX(
this);},BnR:function(E){if(this.AT_===E)return;this.AT_=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad5={I:this},0);A.acg.BU._Init.
call(this.VI={I:this},0);A.acg.Text._Init.call(this.GU={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADA._Init.call(this.Acb={I:this},
0);A.acl.Gm._Init.call(this.AgH={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtK={I:this},0);this.
__proto__=C.AT8;var B;this.H(Ce);this.Background.H(Ff);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ek.Ar(false);this.Ek.Z(false);this.Ad5.H(AHN);this.
Ad5.L(A.jb.CJ);this.VI.H(AHN);this.VI.Nn(2);this.VI.L(A.jb.Text);this.GU.H(AHM);
this.GU.Hn(10);this.GU.Jb(true);this.GU.Bod(0);this.GU.KU(true);this.GU.L(A.jb.Text
);this.PopupTimeout.PV(0);this.Acb.A_Z(0);this.Acb.A_X(A.jb.AV);this.Acb.A_W(0);
this.Acb.AGa(AHu);this.AgH.HO(1);this.AgH.B2=255;this.AgH.Cx=0;this.J2(this.Ek,-
1);this.J(this.Ad5,0);this.J(this.VI,0);this.J(this.GU,0);this.GU.S(A.aaL(A.fl.Af
));this.PopupTimeout.ME=[this,this.BBf];this.Acb.A_Y(A.aaL(A.ach.NX));this.Acb.A_V(
A.aaL(A.ach.NX));this.AgH.Q=[B=this.N,B.Awq,B.A0z];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad5._Done();this.VI._Done();this.GU._Done();this.PopupTimeout.
_Done();this.Acb._Done();this.AgH._Done();this.PopupIdToString._Done();this.AtK.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad5._ReInit();this.VI._ReInit();this.GU._ReInit();this.PopupTimeout._ReInit();this.
Acb._ReInit();this.AgH._ReInit();this.PopupIdToString._ReInit();this.AtK._ReInit(
);this.GU.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS7)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtK)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Ms={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Text;
GY=A.jb.Bm;}if(!this.LK){this.Background.L(FS);this.V.L(A.jb.Am4);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KJ){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ms;},_className:"Application::DarkThemeMenuItem"
};C.Anj={AdE:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Anj;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaH:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Lp:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Ca=[this,this.A3w];this.BP.Cf=null;this.BP.CE=[this,this.AaH];this.
BP.CR(A.aaR(A.acf.Ok));this.BP.Cw(null);this.BP.C2(A.aaL(A.ach.AeA));}return this.
BP;},A3w:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).I2(this);},CC:function(G){},AIS:function(s){this.CC(s);},E4:function(
G){},AyM:function(s){this.E4(s);},_Init:function(aArg){C.Abj._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APQ={Wb:
null,YR:null,YL:null,Init:function(aArg){this.Bb(this.Wb);},Adv:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YR)A._GetAutoObject(A.Device.
Device).A3(6,true,A.jV,0,[this,this.BB5]);else if(Aa===this.Wb)A._GetAutoObject(
A.Device.Device).A3(9,true,A.jV,0,[this,this.BCo]);else if(Aa===this.YL)A._GetAutoObject(
C.A8).Cd(4);else throw new Error(Ayn);A._GetAutoObject(A.Device.Device).Dw(0);},
BB5:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(
As.PopupState===7))A._GetAutoObject(A.Device.Device).AGx();},BCo:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))
A._GetAutoObject(A.Device.Device).AxE();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ms._Init.call(this.Wb={I:this},0);C.Ms._Init.call(this.YR={I:this
},0);C.Ms._Init.call(this.YL={I:this},0);this.__proto__=C.APQ;this.H(AcP);this.Wb.
H(BD);this.Wb.Ar(true);this.Wb.T(A.aaR(A.acf.A$N));this.Wb.Bi(true);this.YR.H(IW
);this.YR.Ar(true);this.YR.T(A.aaR(A.acf.A$v));this.YR.Bi(true);this.YL.H(Qd);this.
YL.Ar(true);this.YL.T(A.aaR(A.acf.ST));this.YL.Bi(true);this.J(this.Wb,0);this.J(
this.YR,0);this.J(this.YL,0);this.Wb.AR=[this,this.Adv];this.YR.AR=[this,this.Adv
];this.YL.AR=[this,this.Adv];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.Wb._Done();this.YR._Done();this.YL._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Wb._ReInit(
);this.YR._ReInit();this.YL._ReInit();this.Wb.T(A.aaR(A.acf.A$N));this.YR.T(A.aaR(
A.acf.A$v));this.YL.T(A.aaR(A.acf.ST));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GK={AaE:null,OverlayMenu:null,WQ:null,A4q:null
,Ld:null,A36:null,AkK:null,N5:null,AAg:100,Bc1:false,Init:function(aArg){var B;A.
zX([this,this.Bfo],[B=A._GetAutoObject(A.Device.Device),B.Awr,B.AyV],0);A.zX([this
,this.Bfi],[B=A._GetAutoObject(A.Device.Device),B.ASN,B.A0x],0);A.zX([this,this.
A3n],[B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyO],0);A.zX([this,this.BAM],[
B=A._GetAutoObject(A.Device.Device),B.Awc,B.AyN],0);A.zX([this,this.BAN],[B=A._GetAutoObject(
A.Device.Device),B.A8Q,B.Bbs],0);A.zX([this,this.ApP],[B=A._GetAutoObject(A.Device.
Device),B.ASY,B.A0F],0);A.zX([this,this.BfF],[B=A._GetAutoObject(A.Device.Device
),B.WD,B.Xj],0);A.pe([this,this.Bfo],this);A.pe([this,this.Bfi],this);A.pe([this
,this.ApP],this);A.pe([this,this.BfF],this);this.A4q.Au([B=this.WQ,B.AED,B.Zp]);
this.J(this.WQ,0);this.Bb(this.WQ);this.ByA(this);},Ai:function(Ae){},Bfi:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEp){if(!this.AaE){this.AaE=A._NewObject(
C.Asw,0);this.AaE.H(A.abJ(this.AaE.M,this.WQ.M.slice(0,2)));this.AaE.H(A.abO(this.
AaE.M,this.WQ.M[3]-((B=this.AaE.M)[3]-B[1])));this.J(this.AaE,1);}}else{if(!!this.
AaE)this.HP(this.AaE);this.AaE=null;}},Bfo:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APQ,0));break;case 8:this.Dw(A._NewObject(C.AL9,0));break;case 2:this.Dw(A._NewObject(
C.AL6,0));break;case 3:this.Dw(A._NewObject(C.AMb,0));break;case 4:this.Dw(A._NewObject(
C.AUq,0));break;case 5:this.Dw(A._NewObject(C.AVY,0));break;case 6:this.Dw(A._NewObject(
C.AT3,0));break;case 7:this.Dw(A._NewObject(C.Amx,0));break;case 11:this.Dw(A._NewObject(
C.AMF,0));break;case 12:this.Dw(A._NewObject(C.AME,0));break;case 9:this.Dw(A._NewObject(
C.ARY,0));break;case 10:this.Dw(A._NewObject(C.AMA,0));break;case 14:this.Dw(A._NewObject(
C.ARU,0));break;case 15:this.Dw(A._NewObject(C.ARV,0));break;case 13:this.Dw(A._NewObject(
C.ARW,0));break;case 16:this.Dw(A._NewObject(C.AM1,0));break;default:throw new Error(
AWL+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WJ).ArH(
null);this.N5.AqH(this.OverlayMenu,A._GetAutoObject(C.AxH),null,null,[B=this.OverlayMenu
,B.AyM],null,true);this.Bb(this.WQ);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N5.AkM(this.OverlayMenu,A._GetAutoObject(C.AxG),null,null,null,null,null,[B=this.
OverlayMenu,B.AIS],null,false);this.Bb(this.N5);A._GetAutoObject(C.WJ).ArH(this.
OverlayMenu.Lp());}else if(!!this.Ld){this.Bb(this.N5);A._GetAutoObject(C.WJ).ArH(
this.Ld.Akr().Lp());}},Ahr:function(E){var B;if(this.Ld===E)return;if(!!this.Ld){
A._GetAutoObject(C.WJ).ArH(null);this.N5.AqH(this.Ld.Akr(),A._GetAutoObject(C.Afj
),null,null,[B=this.Ld.Akr(),B.AyM],null,false);this.Bb(this.WQ);}this.Ld=E;if(!
!this.Ld){this.N5.AkM(this.Ld.Akr(),A._GetAutoObject(C.Afj),null,null,null,null,
null,[this,this.Bmb],null,false);this.Bb(this.N5);A._GetAutoObject(C.WJ).ArH(this.
Ld.Akr().Lp());}else if(!!this.OverlayMenu){this.Bb(this.N5);A._GetAutoObject(C.
WJ).ArH(this.OverlayMenu.Lp());}},ByA:function(G){var B;var F;this.J(this.A36,0);(
F=A._GetAutoObject(C.WJ),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WJ).M)[3]-B[1]))));this.ZF(this.N5);},A3n:function(G){if(A._GetAutoObject(A.Device.
Device).AmE)switch(A._GetAutoObject(A.Device.Device).Ij){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A8).Ab_(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa6<98)A._GetAutoObject(C.A8).Cd(4);}else{this.AAg=100;this.Bc$();}},BAM:
function(G){this.Bc$();},Bc$:function(){if(!A._GetAutoObject(A.Device.Device).AmE
){if(A._GetAutoObject(A.Device.Device).Aa6<=2){if(this.AAg>2)switch(A._GetAutoObject(
A.Device.Device).Ij){case 38:break;case 4:case 39:A._GetAutoObject(C.A8).Ab_(38);
break;default:A._GetAutoObject(C.A8).Cd(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa6<=10){if(this.AAg>10)switch(A._GetAutoObject(A.Device.Device).Ij){case
39:break;case 4:case 38:A._GetAutoObject(C.A8).Ab_(39);break;default:A._GetAutoObject(
C.A8).Cd(39);}}else if(A._GetAutoObject(A.Device.Device).Aa6<=20){if(this.AAg>20
)switch(A._GetAutoObject(A.Device.Device).Ij){case 39:break;case 4:case 38:A._GetAutoObject(
C.A8).Ab_(39);break;default:A._GetAutoObject(C.A8).Cd(39);}}else switch(A._GetAutoObject(
A.Device.Device).Ij){case 38:case 4:case 39:A._GetAutoObject(C.A8).FB();break;default:;
}this.AAg=A._GetAutoObject(A.Device.Device).Aa6;}},BAN:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqu){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A3(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anx(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A3(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anx(0
);}break;default:A.ab5("%s",AWM+A._GetAutoObject(A.Device.Device).Aqu.toFixed());
}},ApP:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A8).Cd(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Ij===5)A._GetAutoObject(C.A8).Ab_(3);break;
default:;}},BfF:function(G){switch(A._GetAutoObject(A.Device.Device).P4.Z1){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).Uw(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WH(65535);A._GetAutoObject(A.Device.Device).Uw(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WH(255);A._GetAutoObject(A.Device.Device).Uw(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WH(16776960);A._GetAutoObject(
A.Device.Device).Uw(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WH(16711935
);A._GetAutoObject(A.Device.Device).Uw(true);}break;default:A.ab5("%s",AWN+A._GetAutoObject(
A.Device.Device).P4.Z1.toFixed());}this.Boe(A._GetAutoObject(A.Device.Helper).Bj9(
));},Bmb:function(G){var B;this.Ld.Akr().CC(this);this.Ld.BBd(this);},Boe:function(
E){if(this.Bc1===E)return;this.Bc1=E;if(E){if(A._GetAutoObject(A.Device.Device).
Ij===3)A._GetAutoObject(C.A8).Cd(27);else if(A._GetAutoObject(A.Device.Device).Ij
!==27)A._GetAutoObject(A.Device.Device).A3(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).Ij===27)A._GetAutoObject(A.Device.Device).A3(112,true,A.jV,0,[this
,this.A1l]);},A1l:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!As&&(As.Id===112))&&(As.PopupState===7))A._GetAutoObject(C.A8).Ab_(85);}
,Blc:function(){return this.Ld;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkK._Init.call(this.AkK={I:this},0);C.N5._Init.call(this.N5={I:this},0);this.
__proto__=C.GK;this.H(Ce);this.N5.H(Qc);this.J(this.N5,0);this.WQ=A._NewObject(C.
WQ,0);this.A4q=A._GetAutoObject(C.A8);this.AkK.ANH=[this,this.Blc,this.Ahr];this.
A36=A._GetAutoObject(C.WJ);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkK._Done();this.N5._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkK._ReInit();this.N5._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WQ)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4q)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ld)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A36)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abj={A$j:
null,BP:null,N:null,Cq:null,Ana:null,Anc:null,QT:null,Anb:null,Am_:null,Ane:null
,Am$:null,DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;
case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x14
);if(!!X)this.Bb(X);},Bb2:function(s){this.DE(s);},Al3:function(G){var D5=(A.Core.
BK.isPrototypeOf(G)?G:null);if(D5.Aci&&(this.D_().Asq===false))return;A.pe(this.
D_().CE,this);},AI5:function(s){this.Al3(s);},ApO:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);if(D5.Aci&&(this.D_().ZE===false))return;A.pe(this.D_().
Ca,this);},AI7:function(s){this.ApO(s);},I2:function(G){if(this.QT.Aci)return;},
Atr:function(s){this.I2(s);},AAI:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?
G:null);if(D5.Aci&&(this.D_().WN===false))return;A.pe(this.D_().Cf,this);},AI6:function(
s){this.AAI(s);},D_:function(){if(!!this.Lp())return this.BP;else return this.N;
},Lp:function(){return this.BP;},GS:function(E){this.A$j=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BK._Init.
call(this.Cq={I:this},0);A.Core.BK._Init.call(this.Ana={I:this},0);A.Core.BK._Init.
call(this.Anc={I:this},0);A.Core.BK._Init.call(this.QT={I:this},0);A.Core.BK._Init.
call(this.Anb={I:this},0);A.Core.BK._Init.call(this.Am_={I:this},0);A.Core.BK._Init.
call(this.Ane={I:this},0);A.Core.BK._Init.call(this.Am$={I:this},0);this.__proto__=
C.Abj;this.H([0,0,C.Asz[0],C.Asz[1]]);this.N.H(Xi);this.N.Ar(false);this.N.Z(false
);this.Cq.Filter=147;this.Ana.Filter=26;this.Anc.Filter=28;this.QT.Filter=1;this.
Anb.Filter=27;this.Am_.Filter=44;this.Ane.Filter=9;this.Am$.Filter=42;this.J(this.
N,0);this.Cq.BL=[this,this.Bb2];this.Cq.D1=[this,this.Bb2];this.Ana.BL=[this,this.
AI5];this.Ana.D1=[this,this.AI5];this.Anc.BL=[this,this.AI7];this.Anc.D1=[this,this.
AI7];this.QT.BL=[this,this.Atr];this.QT.D1=[this,this.Atr];this.Anb.BL=[this,this.
AI6];this.Anb.D1=[this,this.AI6];this.Am_.BL=[this,this.AI5];this.Am_.D1=[this,this.
AI5];this.Ane.BL=[this,this.AI7];this.Ane.D1=[this,this.AI7];this.Am$.BL=[this,this.
AI6];this.Am$.D1=[this,this.AI6];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Ana._Done();this.Anc._Done();this.QT._Done();this.
Anb._Done();this.Am_._Done();this.Ane._Done();this.Am$._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Ana._ReInit();this.Anc._ReInit();this.QT._ReInit();this.Anb._ReInit(
);this.Am_._ReInit();this.Ane._ReInit();this.Am$._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A$j)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ana)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxG={_Init:function(){A.acl.AGV._Init.call(this,0);this.Kl=0x22;this.Ad9=true;
this.Au8=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxH={_Init:function(){A.acl.AGV._Init.call(this,0);this.Kl=0x22;this.Ad9=true;
this.Au8=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AU0={Se:function(){var B;var Ao=(A.acl.Afb.isPrototypeOf(B=A.acl.Aen.Se.call(this
))?B:null);if(!Ao)throw new Error(As9);Ao.Cp.Cx=100;return Ao;},Sd:function(){var
B;var Ao=(A.acl.Axo.isPrototypeOf(B=A.acl.Aen.Sd.call(this))?B:null);if(!Ao)throw new
Error(As9);Ao.E0.B2=100;return Ao;},_Init:function(aArg){A.acl.Aen._Init.call(this
,aArg);this.__proto__=C.AU0;},_className:"Application::ShadeTransition"};C.Am0={
Ag_:null,SY:null,HR:null,DS:null,AnimalId:-1,GroupId:-1,ADg:true,Dg:function(E){
C.BQ.Dg.call(this,E);this.SY.L(E);this.HR.L(E);this.Ag_.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HR.R(A.aaR(A.acf.Afd)
);else this.HR.R(E.toFixed());},Ab4:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SY.R(A.aaR(A.acf.Afd));else this.SY.R(E.toFixed());},DX:function(
G){},Nt:function(s){this.DX(s);},A_m:function(E){if(this.ADg===E)return;this.ADg=
E;this.SY.Z(this.ADg);this.Ag_.Z(this.ADg);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag_={I:this},0);A.acg.Text._Init.call(this.SY={
I:this},0);A.acg.Text._Init.call(this.HR={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.Am0;this.Ag_.H(AWO);this.SY.H(AWP);this.SY.A6(0x11);this.
SY.R(A.aaR(A.acf.Afd));this.HR.H(AWQ);this.HR.A6(0x11);this.HR.R(A.aaR(A.acf.Afd
));this.DS.H(AWR);this.J(this.Ag_,0);this.J(this.SY,0);this.J(this.HR,0);this.J(
this.DS,0);this.Ag_.Ax(A.aaL(A.ach.AQE));this.SY.S(A.aaL(A.fl.Af));this.HR.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BQ;this.Ag_._Done();this.SY._Done(
);this.HR._Done();this.DS._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ.
_ReInit.call(this);this.Ag_._ReInit();this.SY._ReInit();this.HR._ReInit();this.DS.
_ReInit();this.SY.R(A.aaR(A.acf.Afd));this.HR.R(A.aaR(A.acf.Afd));this.SY.S(A.aaL(
A.fl.Af));this.HR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this
,D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADq={Init:function(
aArg){var B;A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SK
],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper).W,B.A89,B.AnD],0);
A.zV([this,this.Nt],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nt],[
B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC],0);A.zX([this,this.Nt],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9L,B.Axk],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.
Helper).W,B.A80,B.Ae3],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper
).W,B.A81,B.Uu],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper).W,B.
A84,B.Ae7],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Helper).W,B.A88,B.
Ae9],0);A.pe([this,this.Nt],this);},Dg:function(E){C.Am0.Dg.call(this,E);this.DS.
Dg(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq0()){this.Ab4(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab4(-1);this.OnSetAnimalId(-1);}this.DS.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AFc(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae3(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uu(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae7(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae9(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Am0._Init.call(this,aArg);this.
__proto__=C.ADq;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Ko={AhQ:A.abi(3,A.jV,null),B_:A.abi(3,0,{0:7,1:30,2:90}),Ann:3,Du:function(){
if(this.Ann<3)return this.Ann;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ann))return-1;return this.B_.Get(aIndex);},Gl:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ann))return AWS;return this.AhQ.Get(aIndex);},DZ:function(
A7){var O=0;while((O<3)&&(O<=this.Ann)){if(this.B_.Get(O)===A7)return O;O=O+1;}return-
1;},H4:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ann)){if(this.B_.Get(
O)>max)max=this.B_.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhQ=[]).__proto__=C.Ko.AhQ;(this.B_=[]).__proto__=C.Ko.B_;this.
__proto__=C.Ko;this.AhQ.Set(0,A.aaR(A.acf.A7M));this.AhQ.Set(1,A.aaR(A.acf.A7K));
this.AhQ.Set(2,A.aaR(A.acf.A7L));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhQ.Set(0,A.aaR(A.acf.A7M));this.AhQ.Set(1,A.aaR(A.acf.A7K));this.AhQ.Set(2,A.aaR(
A.acf.A7L));},_className:"Application::Days"};C.AUX={Amz:null,BT:null,Q8:null,QH:
null,Bab:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BBz],[B=A._GetAutoObject(A.Device.Device),B.ArB,B.Atq],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWT+A._GetAutoObject(
A.Device.Converter).Ak2((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlM());this.H5.Z((this.AM<A._GetAutoObject(A.Device.Helper).A68())&&(
Fw||GE));},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Kf:function(G){var F;var BO=this.AM;C.Ds.Kf.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A68()){this.Bx(this.AM+10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},Ka:function(G){var F;var BO=this.
AM;C.Ds.Ka.call(this,G);this.Bx(this.AM-10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_2:function(E){if(this.Bab===E)return;
this.Bab=E;this.Am();},BBz:function(G){this.Am();},_Init:function(aArg){C.Ds._Init.
call(this,aArg);A.acg.AL._Init.call(this.Amz={I:this},0);C.CG._Init.call(this.BT={
I:this},0);A.acg.AL._Init.call(this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={
I:this},0);this.__proto__=C.AUX;this.H(UZ);this.Background.H(UZ);this.V.H(As_);this.
V.L(A.jb.Bm);this.Amz.H(AWU);this.Amz.L(A.jb.Afu);this.Hx.H(AWV);this.BT.H(AWW);
this.BT.A6(0x12);this.BT.L(A.jb.Text);this.H5.H(AWX);this.Q8.H(AWY);this.Q8.L(A.
jb.E1);this.QH.H(AWZ);this.J(this.Amz,-2);this.J(this.BT,-1);this.J(this.Q8,0);this.
J(this.QH,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EK));this.BT.AZ(A.aaL(A.fl.Af));this.QH.Ax(A.aaL(A.ach.ADG));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ds;this.Amz._Done();this.BT._Done();this.Q8.
_Done();this.QH._Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.
call(this);this.Amz._ReInit();this.BT._ReInit();this.Q8._ReInit();this.QH._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EK));this.
BT.AZ(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
Amz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnT={Q:null
,Ai4:null,Init:function(aArg){var B;A.zX([this,this.BbZ],[B=A._GetAutoObject(A.Device.
Device),B.AED,B.Bbl],0);A.pe([this,this.BbZ],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ab_:function(Alp){A._GetAutoObject(A.Device.Device).Zp(Alp
);},AKE:function(G){if(this.K&&this.K.AKE)return this.K.AKE.apply(this,arguments
);else return C.AnT.Bb6.apply(this,arguments);},Bb6:function(G){var F;if(!this.Q
){A.ab5("%s",AW0);return;}var By=null;if(this.Ai4.Contains(A._GetAutoObject(A.Device.
Device).Ij)){By=this.Ai4.A$h();while(!!By&&(By.An7!==A._GetAutoObject(A.Device.Device
).Ij))By=this.Ai4.A$h();}if(!By)By=this.Bz9(A._GetAutoObject(A.Device.Device).Ij
);(F=this.Q,F[2].call(F[0],By));},BbZ:function(s){this.AKE(s);},Bz9:function(Alp
){var By=null;switch(Alp){case 0:case 1:By=A._NewObject(C.AU6,0);break;case 2:By=
A._NewObject(C.X2,0);break;case 3:By=A._NewObject(C.AvE,0);break;case 53:By=A._NewObject(
C.AVM,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.ASc,0);break;case 6:By=A._NewObject(C.ARN,0);break;case 16:By=A._NewObject(C.ANP
,0);break;case 22:By=A._NewObject(C.AVH,0);break;case 17:By=A._NewObject(C.AVl,0
);break;case 42:By=A._NewObject(C.ANM,0);break;case 87:By=A._NewObject(C.AUy,0);
break;case 88:By=A._NewObject(C.AUx,0);break;case 89:By=A._NewObject(C.AVC,0);break;
case 95:By=A._NewObject(C.AVF,0);break;case 23:By=A._NewObject(C.AV5,0);break;case
18:By=A._NewObject(C.AN2,0);break;case 19:By=A._NewObject(C.AUz,0);break;case 37:
By=A._NewObject(C.ARe,0);break;case 76:By=A._NewObject(C.AUe,0);break;case 63:By=
A._NewObject(C.AN0,0);break;case 64:By=A._NewObject(C.AN1,0);break;case 82:By=A.
_NewObject(C.ANZ,0);break;case 83:By=A._NewObject(C.ANX,0);break;case 92:By=A._NewObject(
C.ANV,0);break;case 93:By=A._NewObject(C.ANY,0);break;case 65:By=A._NewObject(C.
ANW,0);break;case 5:By=A._NewObject(C.AVe,0);break;case 4:By=A._NewObject(C.Ad$,
0);break;case 39:By=A._NewObject(C.ANm,0);break;case 38:By=A._NewObject(C.ANF,0);
break;case 28:By=A._NewObject(C.Wx,0);break;case 7:By=A._NewObject(C.AqK,0);break;
case 81:By=A._NewObject(C.AN9,0);break;case 31:By=A._NewObject(C.Aru,0);break;case
78:By=A._NewObject(C.ASa,0);break;case 34:By=A._NewObject(C.AL4,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GJ,0);break;case 9:By=A._NewObject(C.I6,0);break;case 24:By=A._NewObject(C.AMj
,0);break;case 10:By=A._NewObject(C.Amv,0);break;case 21:By=A._NewObject(C.AMn,0
);break;case 11:By=A._NewObject(C.AMm,0);break;case 29:By=A._NewObject(C.AuP,0);
break;case 48:By=A._NewObject(C.AMl,0);break;case 30:By=A._NewObject(C.AMk,0);break;
case 12:By=A._NewObject(C.AMi,0);break;case 40:By=A._NewObject(C.AMh,0);break;case
14:By=A._NewObject(C.AND,0);break;case 13:By=A._NewObject(C.ANE,0);break;case 20:
By=A._NewObject(C.AVW,0);break;case 41:By=A._NewObject(C.AVV,0);break;case 43:By=
A._NewObject(C.AOK,0);break;case 44:By=A._NewObject(C.AOJ,0);break;case 61:By=A.
_NewObject(C.AN8,0);break;case 62:By=A._NewObject(C.AN7,0);break;case 46:By=A._NewObject(
C.ASp,0);break;case 47:By=A._NewObject(C.ASo,0);break;case 85:By=A._NewObject(C.
AV$,0);break;case 86:By=A._NewObject(C.AV_,0);break;case 71:By=A._NewObject(C.ASk
,0);break;case 72:By=A._NewObject(C.ASj,0);break;case 74:By=A._NewObject(C.AM3,0
);break;case 90:By=A._NewObject(C.AUg,0);break;case 73:By=A._NewObject(C.AUA,0);
break;case 51:By=A._NewObject(C.AL8,0);break;case 52:By=A._NewObject(C.AL7,0);break;
case 15:By=A._NewObject(C.AUn,0);break;case 60:By=A._NewObject(C.AVk,0);break;case
69:By=A._NewObject(C.ARL,0);break;case 70:By=A._NewObject(C.ARK,0);break;case 26:
By=A._NewObject(C.ASd,0);break;case 54:By=A._NewObject(C.AR$,0);break;case 25:By=
A._NewObject(C.AOk,0);break;case 66:By=A._NewObject(C.AOl,0);break;case 59:By=A.
_NewObject(C.AOj,0);break;case 58:By=A._NewObject(C.AOm,0);break;case 56:By=A._NewObject(
C.AOn,0);break;case 57:By=A._NewObject(C.AqN,0);break;case 68:By=A._NewObject(C.
AOo,0);break;case 67:By=A._NewObject(C.AOh,0);break;case 84:By=A._NewObject(C.AMp
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AMC,0);break;case 91:By=A._NewObject(C.AVq,0
);break;case 94:By=A._NewObject(C.Aqh,0);break;default:throw new Error(AW1);}if(
!!By)By.An7=Alp;return By;},Cd:function(Alp){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AW2);else this.Ai4.BoH((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zp(Alp);},FB:function(){var Bgb=3;var Bga=this.Ai4.Box();if(!!Bga
)Bgb=Bga.An7;else A.ab5("%s",AW3);A._GetAutoObject(A.Device.Device).Zp(Bgb);},_Init:
function(aArg){C.A$D._Init.call(this.Ai4={I:this},0);this.__proto__=C.AnT;this.Init(
aArg);var J7=this._variants();if(J7){this.K={};J7._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai4.
_Done();A.h7--;},_ReInit:function(){this.Ai4._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnT._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A8={_Init:function(){C.AnT._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGp={H8:null,Yw:null,Aff:null,AaK:null,MF:
null,AzC:1,RatingMode:0,RatedAttribute:0,CP:function(){this.Yw.R(this.BdH(this.RatedAttribute
));this.AKJ(this);},Ai:function(Ae){this.MF.R(A._GetAutoObject(A.Device.Helper).
MI(A.aaR(A.acf.AR2),O9,this.AzC.toFixed()));if(this.RatingMode===1)this.MF.Z(true
);else this.MF.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);this.H8.Gr();this.H8.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axz(this.
H8,5);A.zX([this,this.AKJ],[B=A._GetAutoObject(A.Device.Device),B.ASV,B.A0C],0);
A.zX([this,this.AKJ],[B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC],0);A.pe([
this,this.AKJ],this);},AsH:function(G){var a=this.AKn(this.RatedAttribute);this.
Bgr();this.AzC=this.AzC-1;this.Am();if(!a)this.AR9();else this.SJ(a);},WU:function(
G){var a=this.BdO(this.RatedAttribute);this.Bgr();this.AzC=this.AzC+1;this.Am();
if(!a)this.A7_();else this.SJ(a);},AKn:function(Nv){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Nv){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHO);},BdO:function(Nv){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Nv){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHO);},SJ:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yw.R(this.BdH(E));this.
DJ(E);this.Aff.AnI(this.H8.Bjm(E));if(!this.AKn(E)){if(this.ARn())this.N.Cw(A.aaL(
A.ach.AeD));else this.N.Cw(null);}else this.N.Cw(A.aaL(A.ach.AeA));},BdH:function(
Nv){return this.AaK.BS(Nv);},Bz8:function(Nv){if(!!Nv){var a=this.AKn(Nv);if(!a)
return A.jV;else return this.BdI(a);}else return A.jV;},Bz7:function(Nv){if(!!Nv
){var a=this.BdO(Nv);if(!a)return A.jV;else return this.BdI(a);}else return A.jV;
},AR9:function(){},A7_:function(){},A69:function(){return null;},BdI:function(Nv
){return this.AaK.Lx(Nv);},Bgr:function(){if(!!this.RatedAttribute)this.H8.Bpi(this.
RatedAttribute,this.Aff.A5);},AKJ:function(G){if(this.ARn())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SJ(2);this.DJ(this.RatedAttribute
);this.Am();},Adw:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkX:function(G){var a=this.AKn(this.RatedAttribute);if(!a){if(this.ARn())this.
Adw(this);}else this.AR9();},DJ:function(Nv){this.N.Hy(this.Bz8(Nv));if(!!this.N.
An2){this.N.C2(null);this.N.OS(true);}else{this.N.C2(A.aaL(A.ach.AeA));this.N.OS(
false);}this.N.CR(this.Bz7(Nv));if(!!this.N.An4){this.N.C3(null);this.N.OT(true);
}else{this.N.C3(this.A69());this.N.OT(false);}},ARn:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alf,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yw={
I:this},0);C.Rating._Init.call(this.Aff={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaK={I:this},0);A.acg.Text._Init.call(this.MF={I:this},0);this.__proto__=
C.AGp;this.Background.L(A.jb.CJ);this.N.Z(true);this.Dr(C.IL);this.Yw.H(AW4);this.
Yw.KU(true);this.Yw.L(A.jb.Text);this.Aff.H(AW5);this.MF.H(AW6);this.MF.A6(0x14);
this.MF.R(A.aaR(A.acf.AR2));this.MF.L(A.jb.Text);this.J(this.Yw,0);this.J(this.Aff
,0);this.J(this.MF,0);this.Bb(this.Aff);this.N.CE=[this,this.AsH];this.N.Cf=[this
,this.AkX];this.N.Ca=[this,this.WU];this.Yw.S(A.aaL(A.fl.Af));this.Aff.AR=[this,
this.WU];this.MF.S(A.aaL(A.fl.Af));this.H8=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yw._Done();this.Aff._Done();this.AaK._Done();
this.MF._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yw._ReInit();this.Aff._ReInit();this.AaK._ReInit();this.MF._ReInit();this.
MF.R(A.aaR(A.acf.AR2));this.Yw.S(A.aaL(A.fl.Af));this.MF.S(A.aaL(A.fl.Af));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H8)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaK)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.MF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HZ={Y:null,Gender:null,AnimalType:null,Breed:null,Jj:null,Pp:null,AsX:null,BZ:
null,Db:null,C$:null,CH:null,Gn:null,Ay:null,KM:0,Init:function(aArg){A.zX([this
,this.Bb0],this.BZ.Q,0);A.pe([this,this.Bb0],this);A.pe([this,this.ABf],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANA(this.
Y);},DE:function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;
break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(
X,Fi,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null
,null);this.ABf(this);},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},AeY:function(E){
if(this.KM===E)return;this.KM=E;A.abo([this,this.Awd,this.AeY],0);},ABf:function(
G){var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C2(
A.aaL(A.ach.E2));this.N.CE=[this,this.AI4];if(!!GZ&&!!GZ.Amr){this.N.Fc(A.jV);this.
N.JB.C4(255);this.N.ArR(GZ.AqS);this.N.Cw(GZ.AvN);this.N.Cf=GZ.Amr;}else{this.N.
Fc(A.jV);this.N.Cw(null);this.N.Cf=null;}if(!!GZ&&!!GZ.Agw){this.N.CR(GZ.AxR);this.
N.GW.C4(GZ.Axn);this.N.Anz(GZ.AmU);this.N.C3(GZ.Aq9);this.N.Ca=GZ.Agw;}else this.
Auq();},Agh:function(G){A.ab5("%s",Ayo);},AyY:function(s){this.Agh(s);},Ew:function(
G){A.ab5("%s",Ayo);},AI4:function(s){this.Ew(s);},Auq:function(){A.ab5("%s",Alg);
},AAB:function(G){A.ab5("%s",Ayo);},AcT:function(s){this.AAB(s);},JK:function(Ag
){this.Bb(Ag);this.Y.HI(Ag,true,null,null);this.Y.Vz(null,null);},ApK:function(G
){var F;this.C$.Ahv(A._GetAutoObject(A.Device.Helper).Abr((F=this.BZ.Q,F[1].call(
F[0]))));},Bb0:function(s){this.ApK(s);},Awd:function(){return this.KM;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UU._Init.call(this.Jj={I:this},
0);A.Device.M6._Init.call(this.Pp={I:this},0);A.Device.K0._Init.call(this.AsX={I:
this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.Db={I:this},0);
C.AkV._Init.call(this.C$={I:this},0);C.AxC._Init.call(this.CH={I:this},0);C.AsC.
_Init.call(this.Gn={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.HZ;var B;this.N.Z(true);this.Dr(C.IL);this.Y.H(Ff);this.Y.JW(1);this.KM=A._GetAutoObject(
A.Device.Helper).Abr(this.AnimalType.Q);this.BZ.H(Ah1);this.BZ.Aj(true);this.BZ.
T(A.aaR(A.acf.Aft));this.Db.H(Ayp);this.Db.Aj(true);this.Db.T(A.aaR(A.acf.Afo));
this.C$.H(Aoo);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KM));this.C$.Ga(1000);this.
C$.EV(99000);this.C$.Ahv(A._GetAutoObject(A.Device.Helper).Abr(this.AnimalType.Q
));this.CH.H(Ah2);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Gn.H(AW7);
this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Jj));this.Ay.H(Ayq);this.J(this.Y,0);this.
J(this.BZ,0);this.J(this.Db,0);this.J(this.C$,0);this.J(this.CH,0);this.J(this.Gn
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Gender.L2(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L2(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L2(A._GetAutoObject(A.Device.Helper).W);this.Jj.L2(A._GetAutoObject(A.Device.Helper
).W);this.BZ.Au([B=this.AnimalType,B.B$,B.Cb]);this.BZ.CK(this.AnimalType);this.
Db.Au([B=this.Gender,B.B$,B.Cb]);this.Db.CK(this.Gender);this.C$.Au([this,this.Awd
,this.AeY]);this.CH.Gs([this,this.D_,this.GS]);this.CH.L1([B=this.CH,B.FV]);this.
CH.L4(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cb]);this.CH.CK(this.Breed
);this.CH.Any(this.Pp);this.Gn.Gs([this,this.D_,this.GS]);this.Gn.L1([B=this.Gn,
B.FV]);this.Gn.L4(A.aaL(A.ach.Edit));this.Gn.Au([B=this.Jj,B.B$,B.Cb]);this.Gn.CK(
this.Jj);this.Gn.Any(this.AsX);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Jj._Done();this.Pp._Done();this.AsX._Done();this.BZ._Done();this.Db._Done(
);this.C$._Done();this.CH._Done();this.Gn._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jj._ReInit();this.
Pp._ReInit();this.AsX._ReInit();this.BZ._ReInit();this.Db._ReInit();this.C$._ReInit(
);this.CH._ReInit();this.Gn._ReInit();this.Ay._ReInit();this.BZ.T(A.aaR(A.acf.Aft
));this.Db.T(A.aaR(A.acf.Afo));this.C$.T(A.aaR(A.acf.KM));this.CH.T(A.aaR(A.acf.
Breed));this.Gn.T(A.aaR(A.acf.Jj));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wx={Azc:false,LQ:function(G){if(A._GetAutoObject(A.Device.Device).An.Lj())A._GetAutoObject(
A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper
).Aqk(A._GetAutoObject(A.Device.Helper).W);},Auq:function(){this.N.CR(A.jV);this.
N.C3(A.aaL(A.ach.ADK));this.N.Ca=[this,this.AyY];},CC:function(G){if(!this.Azc){
this.Azc=true;A.pe([this,this.AcT],this);}else C.Aru.CC.call(this,G);},AAB:function(
G){A._GetAutoObject(C.A8).Cd(49);},_Init:function(aArg){C.Aru._Init.call(this,aArg
);this.__proto__=C.Wx;this.J2(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IL={_Init:function(aArg){C.ADq._Init.call(this,aArg);this.__proto__=C.IL;this.
A_m(false);},_className:"Application::HeaderSelectedAnimalId"};C.I6={Filter:null
,Gender:null,AnimalType:null,Transponder:null,El:null,Y:null,P6:null,S7:null,Oc:
null,S8:null,Ns:null,Ox:null,RR:null,Oy:null,RS:null,NI:null,Lf:null,Jt:null,KY:
null,Mx:null,Yq:null,S9:null,RT:null,Ay:null,Ax4:0,Ax3:0,AuN:0,AuM:0,Art:0,AsO:0
,Avp:0,Avq:0,Am5:true,Amu:false,Aob:false,Init:function(aArg){A.zX([this,this.Avv
],this.Lf.Q,0);A.zX([this,this.AuS],this.Jt.Q,0);A.zX([this,this.Bqt],this.KY.Q,
0);A.zX([this,this.BkH],this.Mx.Q,0);A.zX([this,this.BqX],this.Ns.Q,0);A.zX([this
,this.BqW],this.Oc.Q,0);A.zX([this,this.Bhw],this.NI.Q,0);A.zX([this,this.Bhv],this.
Oy.Q,0);this.Bb(this.P6);},DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.
CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;
}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);this.MT(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E$(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A8).FB();},A3j:function(G){var EE=(C.Aer.isPrototypeOf(G)?G:null);if(!EE)return;
var Aw=this.Filter.DL(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nq(Aw);A.abo([this
,this.Fp,this.Ft],0);}else{if(EE.Er===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else A.ab5("%s",AHP+EE.Er.toFixed());if(!!Aw){this.Filter.
CX(Aw);A.abo([this,this.Fp,this.Ft],0);}}},BAK:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A8).FB();},AAz:function(G){var EE=(
C.AmZ.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.DL(EE.Er,EE.Operator
);if(!!Aw){this.Filter.Nq(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE.Er===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;
}else if(EE.Er===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;}else if((EE.Er===22)||(EE.Er===26)){var A1i=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1i.EJ=EE.Er;A1i.Operator=0;Aw=A1i;}else A.ab5(
"%s",AHP+EE.Er.toFixed());if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fp,this.Ft
],0);}}},A_h:function(E){if(this.Avp===E)return;this.Avp=E;A.abo([this,this.Blm,
this.A_h],0);},A_i:function(E){if(this.Avq===E)return;this.Avq=E;A.abo([this,this.
Bln,this.A_i],0);},Avv:function(G){var F;this.A_i((F=this.Lf.Q,F[1].call(F[0])));
var Aw=this.Filter.DL(7,0);if(!!Aw){var AzU=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!AzU)AzU.A5=this.Avq;else A.ab5("%s",AfF);}},AuS:function(G){var
F;this.A_h((F=this.Jt.Q,F[1].call(F[0])));var Aw=this.Filter.DL(14,0);if(!!Aw){var
U8=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!U8)U8.A5=
this.Avp;else A.ab5("%s",AfF);}},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},A_0:function(
E){if(this.AsO===E)return;this.AsO=E;A.abo([this,this.Bl0,this.A_0],0);},Bqt:function(
G){var F;this.A_0((F=this.KY.Q,F[1].call(F[0])));var Aw=this.Filter.DL(22,1);if(
!!Aw){var Ajc=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ajc
)switch(this.AsO){case 1:Ajc.Operator=5;break;case 0:Ajc.Operator=0;break;default:
A.ab5("%s%e",AHQ,this.AsO);}else A.ab5("%s",AfF);}},A_u:function(E){if(this.Art===
E)return;this.Art=E;A.abo([this,this.BlC,this.A_u],0);},BkH:function(G){var F;this.
A_u((F=this.Mx.Q,F[1].call(F[0])));var Aw=this.Filter.DL(26,1);if(!!Aw){var At6=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At6)switch(this.Art
){case 1:At6.Operator=5;break;case 0:At6.Operator=0;break;default:A.ab5("%s%e",AHQ
,this.Art);}else A.ab5("%s",AfF);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P6.Bk([this,this.Fp,this.Ft]);this.S7.
Bk([this,this.Fp,this.Ft]);this.Oc.Bk([this,this.Fp,this.Ft]);this.S8.Bk([this,this.
Fp,this.Ft]);this.Ns.Bk([this,this.Fp,this.Ft]);this.Ox.Bk([this,this.Fp,this.Ft
]);this.RR.Bk([this,this.Fp,this.Ft]);this.Oy.Bk([this,this.Fp,this.Ft]);this.RS.
Bk([this,this.Fp,this.Ft]);this.NI.Bk([this,this.Fp,this.Ft]);this.Lf.Bk([this,this.
Fp,this.Ft]);this.Jt.Bk([this,this.Fp,this.Ft]);this.KY.Bk([this,this.Fp,this.Ft
]);this.Mx.Bk([this,this.Fp,this.Ft]);this.Yq.Bk([this,this.Fp,this.Ft]);this.S9.
Bk([this,this.Fp,this.Ft]);this.RT.Bk([this,this.Fp,this.Ft]);this.Asa(false);A.
pe([this,this.A4V],this);var Beq=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!Beq){this.Asa(true);this.AF8(Beq.A5);}var BdU=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
BdU){this.Asa(true);this.AF9(BdU.A5);}this.ArK(false);A.pe([this,this.ALo],this);
var Bep=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!Bep){this.ArK(true);this.AEW(A._GetAutoObject(A.Device.Helper).Mb(Bep.A5,
A._GetAutoObject(A.Device.Helper).Dv()));}var BdT=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!BdT){this.ArK(true);this.AEY(A.
_GetAutoObject(A.Device.Helper).Mb(BdT.A5,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzU=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzU)this.Lf.Bx(this.Gender.DZ(AzU.A5));var U8=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U8)this.Jt.Bx(this.AnimalType.
DZ(U8.A5));var Ajc=this.Filter.DL(22,1);if(!!Ajc){if(!Ajc.Operator)this.KY.Bx(0);
else this.KY.Bx(1);}var At6=this.Filter.DL(26,1);if(!!At6){if(!At6.Operator)this.
Mx.Bx(0);else this.Mx.Bx(1);}},Ft:function(Aq){this.Bk(Aq);},AF9:function(E){if(
this.Ax4===E)return;this.Ax4=E;A.abo([this,this.A9D,this.AF9],0);},AF8:function(
E){if(this.Ax3===E)return;this.Ax3=E;A.abo([this,this.A9C,this.AF8],0);},BqX:function(
G){var F;this.AF9((F=this.Ns.Q,F[1].call(F[0])));var Aw=this.Filter.DL(1,3);if(!
!Aw){var ABD=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABD)
ABD.A5=this.Ax4;else A.ab5("%s",AfF);}},BqW:function(G){var F;this.AF8((F=this.Oc.
Q,F[1].call(F[0])));var Aw=this.Filter.DL(1,2);if(!!Aw){var ABD=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABD)ABD.A5=this.Ax3;else A.ab5("%s",AfF);}},BeV:
function(G){var EE=(C.AjK.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.
DL(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nq(Aw);A.abo([this,this.Fp,this.Ft],0
);}else{if(EE===this.S7){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A5=this.Ax3;this.Bb(this.Oc);}else if(EE===this.S8){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=this.Ax4;this.Bb(this.Ns);}if(!!Aw){this.Filter.CX(
Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([this,this.A4V],this);},A4V:function(
G){var A23=!!this.Filter.DL(this.Oc.Er,this.Oc.Operator);var A4W=!!this.Filter.DL(
this.Ns.Er,this.Ns.Operator);A._GetAutoObject(A.Device.Helper).J3(this.S7,this.Aob
);A._GetAutoObject(A.Device.Helper).J3(this.S8,this.Aob);A._GetAutoObject(A.Device.
Helper).J3(this.Oc,A23);A._GetAutoObject(A.Device.Helper).J3(this.Ns,A4W);},MT:function(
G){var B;this.Y.Vz(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},BBG:function(G){A.pe([this,this.Fk],this);A.pe([this,this.
MT],this);},BAH:function(G){this.Asa(!this.Aob);if(this.Aob===false){var Aw=this.
Filter.DL(this.P6.Er,this.P6.Operator);while(!!Aw){this.Filter.Nq(Aw);Aw=this.Filter.
DL(this.P6.Er,this.P6.Operator);}A.abo([this,this.Fp,this.Ft],0);}},Asa:function(
E){if(this.Aob===E)return;this.Aob=E;A.abo([this,this.A9B,this.Asa],0);A.pe([this
,this.A4V],this);},AEY:function(E){if(this.AuN===E)return;this.AuN=E;A.abo([this
,this.A8H,this.AEY],0);},AEW:function(E){if(this.AuM===E)return;this.AuM=E;A.abo([
this,this.A8F,this.AEW],0);},Bhw:function(G){var F;this.AEY((F=this.NI.Q,F[1].call(
F[0])));var Aw=this.Filter.DL(4,2);if(!!Aw){var AfS=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaP=A._GetAutoObject(A.Device.Helper).ZR(
this.AuN-1);AfS.A5=AaP;}else A.ab5("%s",AfF);}},Bhv:function(G){var F;this.AEW((
F=this.Oy.Q,F[1].call(F[0])));var Aw=this.Filter.DL(4,3);if(!!Aw){var AfS=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaP=A._GetAutoObject(
A.Device.Helper).ZR(this.AuM);AfS.A5=AaP;}else A.ab5("%s",AfF);}},ALo:function(G
){var A23=this.Am5&&!!this.Filter.DL(this.Oy.Er,this.Oy.Operator);var A4W=this.Am5&&
!!this.Filter.DL(this.NI.Er,this.NI.Operator);A._GetAutoObject(A.Device.Helper).
J3(this.Ox,this.Am5);A._GetAutoObject(A.Device.Helper).J3(this.RR,this.Am5&&this.
Amu);A._GetAutoObject(A.Device.Helper).J3(this.RS,this.Am5&&this.Amu);A._GetAutoObject(
A.Device.Helper).J3(this.Oy,A23);A._GetAutoObject(A.Device.Helper).J3(this.NI,A4W
);},ArK:function(E){if(this.Amu===E)return;this.Amu=E;A.abo([this,this.A8E,this.
ArK],0);A.pe([this,this.ALo],this);},BeU:function(G){var EE=(C.AjK.isPrototypeOf(
G)?G:null);if(!EE)return;var Aw=this.Filter.DL(EE.Er,EE.Operator);if(!!Aw){this.
Filter.Nq(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE===this.RR){Aw=A._NewObject(
A.Device.UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper
).ZR(this.AuM);this.Bb(this.Oy);}else if(EE===this.RS){Aw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper).ZR(this.AuN-1);this.
Bb(this.NI);}if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([
this,this.ALo],this);},BAG:function(G){this.ArK(!this.Amu);if(this.Amu===false){
var Aw=this.Filter.DL(this.Ox.Er,this.Ox.Operator);while(!!Aw){this.Filter.Nq(Aw
);Aw=this.Filter.DL(this.Ox.Er,this.Ox.Operator);}A.abo([this,this.Fp,this.Ft],0
);}},Bnn:function(E){if(this.Am5===E)return;this.Am5=E;A.pe([this,this.ALo],this
);},Fp:function(){return this.Filter;},Bln:function(){return this.Avq;},Blm:function(
){return this.Avp;},Bl0:function(){return this.AsO;},BlC:function(){return this.
Art;},A9D:function(){return this.Ax4;},A9C:function(){return this.Ax3;},A9B:function(
){return this.Aob;},A8H:function(){return this.AuN;},A8F:function(){return this.
AuM;},A8E:function(){return this.Amu;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABW._Init.call(this.Transponder={I:this},0);C.ABW._Init.
call(this.El={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.AB7._Init.call(
this.P6={I:this},0);C.AjK._Init.call(this.S7={I:this},0);C.Abq._Init.call(this.Oc={
I:this},0);C.AjK._Init.call(this.S8={I:this},0);C.Abq._Init.call(this.Ns={I:this
},0);C.AB7._Init.call(this.Ox={I:this},0);C.AjK._Init.call(this.RR={I:this},0);C.
ACU._Init.call(this.Oy={I:this},0);C.AjK._Init.call(this.RS={I:this},0);C.ACU._Init.
call(this.NI={I:this},0);C.AmZ._Init.call(this.Lf={I:this},0);C.AmZ._Init.call(this.
Jt={I:this},0);C.AmZ._Init.call(this.KY={I:this},0);C.AmZ._Init.call(this.Mx={I:
this},0);C.QF._Init.call(this.Yq={I:this},0);C.QF._Init.call(this.S9={I:this},0);
C.QF._Init.call(this.RT={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I6;var B;this.N.Z(true);this.N.CR(A.aaR(A.acf.A5u));this.Dr(C.APD);this.Gender.
Au(this.Avq);this.AnimalType.Au(this.Avp);this.Transponder.Au(this.AsO);this.El.
Au(this.Art);this.Y.H(Ff);this.Y.JW(1);this.P6.H(IW);this.P6.Aj(true);this.P6.T(
A._GetAutoObject(A.Device.Helper).AmX(0,1));this.P6.Nj(1);this.S7.H(Qd);this.S7.
Aj(true);this.S7.T(A.aaR(A.acf.AEh));this.S7.Nj(1);this.S7.OR(2);this.Oc.H(Aag);
this.Oc.Nj(1);this.Oc.OR(2);this.Oc.AF0(A.aaR(A.acf.GN));this.S8.H(Alh);this.S8.
Aj(true);this.S8.T(A.aaR(A.acf.AHi));this.S8.Nj(1);this.S8.OR(3);this.Ns.H(Aop);
this.Ns.Aj(true);this.Ns.Nj(1);this.Ns.OR(3);this.Ns.AF0(A.aaR(A.acf.GN));this.Ox.
H(AW8);this.Ox.Aj(true);this.Ox.T(A.aaR(A.acf.RQ));this.Ox.Nj(4);this.RR.H(AW9);
this.RR.Aj(true);this.RR.T(A.aaR(A.acf.AEh));this.RR.Nj(4);this.RR.OR(3);this.Oy.
H(AW_);this.Oy.Nj(4);this.Oy.OR(3);this.Oy.A_z(2);this.RS.H(AW$);this.RS.Aj(true
);this.RS.T(A.aaR(A.acf.AHi));this.RS.Nj(4);this.RS.OR(2);this.NI.H(AXa);this.NI.
Aj(true);this.NI.Nj(4);this.NI.OR(2);this.NI.A_z(3);this.Lf.H(As$);this.Lf.Aj(true
);this.Lf.Nj(7);this.Lf.Ahx(0);this.Lf.OR(0);this.Jt.H(Xi);this.Jt.Aj(true);this.
Jt.Nj(14);this.Jt.Ahx(0);this.Jt.OR(0);this.KY.H(Xi);this.KY.Aj(true);this.KY.Nj(
22);this.KY.Ahx(0);this.KY.OR(1);this.Mx.H(Xi);this.Mx.Aj(true);this.Mx.Nj(26);this.
Mx.Ahx(0);this.Mx.OR(1);this.Yq.H(Xi);this.Yq.Aj(true);this.Yq.Nj(11);this.Yq.Ahx(
0);this.Yq.OR(0);this.S9.H(Xi);this.S9.Aj(true);this.S9.Nj(12);this.S9.Ahx(0);this.
S9.OR(0);this.RT.H(Xi);this.RT.Aj(true);this.RT.Nj(8);this.RT.Ahx(0);this.RT.OR(
0);this.Ay.H(It);this.J(this.Y,0);this.J(this.P6,0);this.J(this.S7,0);this.J(this.
Oc,0);this.J(this.S8,0);this.J(this.Ns,0);this.J(this.Ox,0);this.J(this.RR,0);this.
J(this.Oy,0);this.J(this.RS,0);this.J(this.NI,0);this.J(this.Lf,0);this.J(this.Jt
,0);this.J(this.KY,0);this.J(this.Mx,0);this.J(this.Yq,0);this.J(this.S9,0);this.
J(this.RT,0);this.J(this.Ay,0);this.N.CE=[this,this.Ew];this.N.Ca=[this,this.BAK
];this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.BBG];this.P6.AR=[this,this.BAH
];this.P6.Au([this,this.A9B,this.Asa]);this.S7.AR=[this,this.BeV];this.Oc.Gs([this
,this.D_,this.GS]);this.Oc.Au([this,this.A9C,this.AF8]);this.S8.AR=[this,this.BeV
];this.Ns.Gs([this,this.D_,this.GS]);this.Ns.Au([this,this.A9D,this.AF9]);this.Ox.
AR=[this,this.BAG];this.Ox.Au([this,this.A8E,this.ArK]);this.RR.AR=[this,this.BeU
];this.Oy.Gs([this,this.D_,this.GS]);this.Oy.Au([this,this.A8F,this.AEW]);this.RS.
AR=[this,this.BeU];this.NI.Gs([this,this.D_,this.GS]);this.NI.Au([this,this.A8H,
this.AEY]);this.Lf.AR=[this,this.AAz];this.Lf.Au([B=this.Gender,B.B$,B.Cb]);this.
Lf.CK(this.Gender);this.Jt.AR=[this,this.AAz];this.Jt.Au([B=this.AnimalType,B.B$
,B.Cb]);this.Jt.CK(this.AnimalType);this.KY.AR=[this,this.AAz];this.KY.Au([B=this.
Transponder,B.B$,B.Cb]);this.KY.CK(this.Transponder);this.Mx.AR=[this,this.AAz];
this.Mx.Au([B=this.El,B.B$,B.Cb]);this.Mx.CK(this.El);this.Yq.AR=[this,this.A3j];
this.S9.AR=[this,this.A3j];this.RT.AR=[this,this.A3j];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.El._Done();this.Y._Done();this.P6._Done();this.S7._Done();this.Oc._Done(
);this.S8._Done();this.Ns._Done();this.Ox._Done();this.RR._Done();this.Oy._Done(
);this.RS._Done();this.NI._Done();this.Lf._Done();this.Jt._Done();this.KY._Done(
);this.Mx._Done();this.Yq._Done();this.S9._Done();this.RT._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.El._ReInit();
this.Y._ReInit();this.P6._ReInit();this.S7._ReInit();this.Oc._ReInit();this.S8._ReInit(
);this.Ns._ReInit();this.Ox._ReInit();this.RR._ReInit();this.Oy._ReInit();this.RS.
_ReInit();this.NI._ReInit();this.Lf._ReInit();this.Jt._ReInit();this.KY._ReInit(
);this.Mx._ReInit();this.Yq._ReInit();this.S9._ReInit();this.RT._ReInit();this.Ay.
_ReInit();this.N.CR(A.aaR(A.acf.A5u));this.S7.T(A.aaR(A.acf.AEh));this.Oc.AF0(A.
aaR(A.acf.GN));this.S8.T(A.aaR(A.acf.AHi));this.Ns.AF0(A.aaR(A.acf.GN));this.Ox.
T(A.aaR(A.acf.RQ));this.RR.T(A.aaR(A.acf.AEh));this.RS.T(A.aaR(A.acf.AHi));},_Mark:
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
D)B._Mark(B._cycle=D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$D={ZS:null,BoH:
function(Byc){var EF=A._NewObject(C.A$C,0);EF.AB=Byc;EF.My=this.ZS;this.ZS=EF;},
A$h:function(){var Vn=null;if(!!this.ZS){Vn=this.ZS.AB;this.ZS=this.ZS.My;}return Vn;
},Contains:function(Alp){var EF=this.ZS;while(!!EF){if(EF.AB.An7===Alp)return true;
EF=EF.My;}return false;},Box:function(){if(!!this.ZS)return this.ZS.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$D;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$C={AB:null,
My:null,_Init:function(aArg){this.__proto__=C.A$C;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.My)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMm={AR9:function(){A._GetAutoObject(
A.Device.Helper).Axz(this.H8,0);A._GetAutoObject(C.A8).FB();},A7_:function(){this.
H8.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();},A69:function(
){return A.aaL(A.ach.Am3);},_Init:function(aArg){C.AGp._Init.call(this,aArg);this.
__proto__=C.AMm;this.Dr(C.IL);},_className:"Application::AnimalActionRateScreen"
};C.AMi={WE:function(G){this.Agx();this.I4(A.aaR(A.acf.AVv),[this,this.ATW],5);this.
I4(A.aaR(A.acf.A5X),[this,this.Bmn],4);this.I4(A.aaR(A.acf.AGo),[this,this.ATH],
3);this.I4(A.aaR(A.acf.An1),[this,this.AwZ],2);this.I4(A.aaR(A.acf.AdV),[this,this.
AE1],1);this.I4(A.aaR(A.acf.AuI),[this,this.AEV],0);A._GetAutoObject(C.BR).Fz();
A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abt:function(){return C.ANc;},Abu:function(
){return C.ADs;},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mv();var
Aza=A._NewObject(A.Device.BoolFilterCriterion,0);Aza.Initialize(8,0,true,true);Be.
CX(Aza);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HQ:function(G){var F;C.GJ.
HQ.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.
N.OS(false);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(40);},_Init:
function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AMi;var B;this.Dr(C.AO4
);this.Dl(A.aaR(A.acf.A8e));this.AwU([B=A._GetAutoObject(A.Device.Device),B.A8I,
B.Bbn]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.A8e));}
,_className:"Application::AlarmListScreen"};C.AND={DE:function(G){},Agg:function(
G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gt);var Aa=(C.ACc.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).G8(Aa.Hs);A._GetAutoObject(C.A8).Cd(13
);}},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mv();var Azu=A._NewObject(
A.Device.BoolFilterCriterion,0);Azu.Initialize(9,0,true,true);Be.CX(Azu);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HQ:function(G){C.GJ.HQ.call(this,G);this.N.OS(false
);this.N.OT(false);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.AND;this.Dr(C.AO6);this.Dl(A.aaR(A.acf.A8f));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8f));},_className:"Application::ControlListScreen"
};C.Aer={Filter:null,Er:0,Je:10,TableId:0,Operator:1,CP:function(){var F;this.Tw((
F=this.Filter,F[1].call(F[0])).DL(this.Er,this.Operator));},Bl:function(aSize){C.
Co.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Je),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mf],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mf],E,0);A.pe([this,this.
Mf],this);},Mf:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tw((F=this.Filter,F[1].call(F[0])).DL(this.Er,this.Operator));else this.
Tw(null);},Ahx:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mf],this);},Nj:function(E){if(this.Er===E)return;this.Er=E;A.pe([this,this.
Mf],this);},Tw:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A62(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).AmX(this.TableId
,this.Er));},OR:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mf],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aer;this.V.H(AHR);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QF={H7:null,Bl:function(aSize){var B;C.Aer.Bl.call(this,aSize);this.H7.H([(aSize[
0]-((B=this.H7.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Je,0,this.
H7.M[0]-this.Je,aSize[1]]);},Tw:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).AmX(this.TableId,this.Er));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Aw&&Aw.A5)this.H7.Cv(1);else this.H7.Cv(0);},_Init:function(aArg
){C.Aer._Init.call(this,aArg);A.acg.Ap._Init.call(this.H7={I:this},0);this.__proto__=
C.QF;this.H7.H(AHS);this.H7.Cv(0);this.J(this.H7,0);this.H7.Ax(A.aaL(A.ach.AqQ));
},_Done:function(){this.__proto__=C.Aer;this.H7._Done();C.Aer._Done.call(this);}
,_ReInit:function(){C.Aer._ReInit.call(this);this.H7._ReInit();},_Mark:function(
D){var B;C.Aer._Mark.call(this,D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APD={Ap:null,Text:null,Dg:function(
E){C.BQ.Dg.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APD;this.Ap.H(AXb);this.Text.H(AXc);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeC));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BQ;this.Ap._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjT={
AW:null,T9:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BQ.Bl.call(this,aSize);this.T9.H(A.abJ(this.T9.M,A.abe(this.AW.M.slice(0
,2),AXd)));this.T9.H(A.abK(this.T9.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXe
)));},Ai:function(Ae){var B;C.BQ.Ai.call(this,Ae);var IC=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IC)this.T9.L(A.jb.AV);else this.T9.L(A.jb.Am4);},Dg:function(E){
C.BQ.Dg.call(this,E);this.Gw.L(E);this.D2.Zt(E);},WF:function(E){C.BQ.WF.call(this
,E);this.D2.CU(E);},Akq:function(){return this.AW.Akq();},Awl:function(){return this.
AW.Awl();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.BQ._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BU._Init.call(this.T9={I:this},0);A.acg.Ap._Init.call(this.Gw={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C8._Init.call(this.A$={I:this
},0);this.__proto__=C.AjT;this.AW.H(AXf);this.T9.H(AXg);this.T9.Nn(2);this.Gw.H(
AXh);this.Gw.L(A.jb.CT);this.D2.A0(0x14);this.D2.H(AXi);this.D2.Zt(A.jb.Bm);this.
D2.CU(A.jb.Ri);this.D2.Hn(2);this.A$.DC(AXj);this.A$.DM(AXk);this.A$.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T9,0);this.J(this.Gw,0);this.J(this.D2,0);this.J(this.
A$,0);this.Bb(this.AW);this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.AW._Done();this.T9._Done(
);this.Gw._Done();this.D2._Done();this.A$._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.AW._ReInit();this.T9._ReInit();this.Gw._ReInit(
);this.D2._ReInit();this.A$._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BQ._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Dk:null,Ip:null,Io:null
,Agf:function(G){if(this.Ez<0)this.L3(1);else if(this.Ez===9)this.L3(0);else this.
L3(this.Ez+1);A.pe(this.Dk,this);},Ai:function(Ae){var B;C.Ez.Ai.call(this,Ae);var
Hf=((Ae&0x10)===0x10);var IC=((Ae&0x40)===0x40);if(IC){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.C4(256);}else if(Hf){this.Background.L(this.M5);this.
Text.L(A.jb.Text);this.C4(256);}else{this.Background.L(this.M5);this.Text.L(A.jb.
Text);this.C4(128);}},Age:function(G){if(this.Ez<=0)this.L3(9);else this.L3(this.
Ez-1);A.pe(this.Dk,this);},_Init:function(aArg){C.Ez._Init.call(this,aArg);A.Core.
BK._Init.call(this.Ip={I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);this.
__proto__=C.DF;this.Ip.Filter=4;this.Io.Filter=5;this.Ip.BL=[this,this.Agf];this.
Ip.D1=[this,this.Agf];this.Io.BL=[this,this.Age];this.Io.D1=[this,this.Age];},_Done:
function(){this.__proto__=C.Ez;this.Ip._Done();this.Io._Done();C.Ez._Done.call(this
);},_ReInit:function(){C.Ez._ReInit.call(this);this.Ip._ReInit();this.Io._ReInit(
);},_Mark:function(D){var B;C.Ez._Mark.call(this,D);if((B=this.Dk)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Io)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Dk:null,Cu:null,CW:null,Dy:null,Eq:null,FZ:null,ET:null,Fm:null,Fb:null,M_:0,ARo:
false,Aqt:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqt)this.ET.AeZ(true);else this.ET.AeZ(false);},AwQ:function(E){var B;
if(E===this.Akq())return;var Af_=E;var DV=this.ET;while(!!DV){if(Af_>0){DV.L3(Af_
%10);Af_=(Af_/10)|0;}else DV.L3(-1);DV=(C.DF.isPrototypeOf(B=this.QJ(DV,2,0x11))?
B:null);}},Akq:function(){return A.wz(this.Awl(),-1,10);},Or:function(G){if(this.
FZ.Ez>=0)this.BgD(7);},M0:function(G){if(((this.Akq()>0)||this.ARo)&&(this.Cu.Ez<
0))this.BgD(2);else if(this.Akq()<=0)this.Fb.NM=true;},Adu:function(G){A.pe(this.
Dk,this);},BgD:function(GA){var B;var ALC=0;var DV=null;switch(GA){case 2:{DV=this.
Cu;ALC=7;}break;case 7:{DV=this.ET;ALC=2;}break;default:throw new Error(AXl);}while(
!!DV){var A3c=(C.DF.isPrototypeOf(B=this.QJ(DV,ALC,0x11))?B:null);if(!!A3c)DV.L3(
A3c.Ez);else if(ALC===7)DV.L3(0);else DV.L3(-1);DV=A3c;}A.pe([this,this.Adu],this
);},AeZ:function(E){if(this.Aqt===E)return;this.Aqt=E;this.Am();},Bno:function(E
){if(this.ARo===E)return;this.ARo=E;},ATm:function(E){var B;if(E===this.Awl())return;
var Af_=E;var DV=this.ET;while(!!DV){if(Af_.length>0){DV.L3(A.wz(A.ab2(Af_,1),-1
,10));Af_=A.abV(Af_,Af_.length-1);}else DV.L3(-1);DV=(C.DF.isPrototypeOf(B=this.
QJ(DV,2,0x11))?B:null);}},Awl:function(){var B;var IA=A.jV;var O=0;var B5=this.Cu;
for(;O<6;O=O+1){if(!!B5&&(B5.Ez>=0))IA=IA+B5.Ez.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TT(B5,0x11))?B:null);}return IA;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Cu={I:this},0);C.DF._Init.call(this.CW={I:this},
0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF.
_Init.call(this.FZ={I:this},0);C.DF._Init.call(this.ET={I:this},0);A.Core.BK._Init.
call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={I:this},0);this.__proto__=
C.AW;this.H(Ayr);this.Cu.A0(0x3);this.Cu.H(AHT);this.CW.A0(0x3);this.CW.H(AHU);this.
Dy.A0(0x3);this.Dy.H(AHV);this.Eq.A0(0x3);this.Eq.H(AHW);this.FZ.A0(0x3);this.FZ.
H(AHX);this.ET.A0(0x3);this.ET.H(AHY);this.ET.L3(0);this.Fm.Filter=6;this.Fb.Filter=
7;this.M_=A.jb.CJ;this.J(this.Cu,0);this.J(this.CW,0);this.J(this.Dy,0);this.J(this.
Eq,0);this.J(this.FZ,0);this.J(this.ET,0);this.Bb(this.ET);this.Cu.Dk=[this,this.
Adu];this.CW.Dk=[this,this.Adu];this.Dy.Dk=[this,this.Adu];this.Eq.Dk=[this,this.
Adu];this.FZ.Dk=[this,this.Adu];this.ET.Dk=[this,this.Adu];this.Fm.BL=[this,this.
Or];this.Fb.BL=[this,this.M0];},_Done:function(){this.__proto__=A.Core.P;this.Cu.
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
"Application::InputID"};C.Bh8="3f5bfefd";C.BDg={Undefined:0,BEk:1,BDy:2};C.AkK={
Tu:null,AiW:null,Ld:null,ANH:null,An_:null,push:function(MO){if(!this.Tu){MO.Ahz=
null;MO.My=null;this.Tu=MO;this.AiW=this.Tu;}else{MO.Ahz=this.AiW;MO.My=null;this.
AiW.My=MO;this.AiW=MO;}},BCe:function(MO){var Ql=this.Tu;while(!!Ql){if(Ql.JP.Id===
MO.Id)return Ql;Ql=Ql.My;}return Ql;},BBZ:function(MO){if(MO===this.Tu)this.pop(
);else if(MO===this.AiW){MO=MO.Ahz;if(!!MO)MO.My=null;this.AiW=MO;}else{MO.Ahz.My=
MO.My;MO.My.Ahz=MO.Ahz;}},Ahr:function(E){var F;if(this.Ld===E)return;this.Ld=E;
if(!!this.Ld)this.Ld.AgM(2);(F=this.ANH,F[2].call(F[0],this.Ld));},Vk:function(G
){var Ql=(C.AT9.isPrototypeOf(G)?G:null);if(!!Ql){if(!Ql.JP.PopupState){if(!this.
Ld)this.Ahr(this.top());}else if(Ql.JP.PopupState===4){this.pop();this.Ahr(this.
top());}else if(Ql.JP.PopupState===5){this.pop();this.Ahr(this.top());}else if(Ql.
JP.PopupState===7){this.pop();this.Ahr(this.top());}else if(Ql.JP.PopupState===8
){this.pop();this.Ahr(this.top());}else if(Ql.JP.PopupState===6){if(Ql===this.Ld
){this.pop();this.Ahr(this.top());}else this.BBZ(Ql);}else if(Ql.JP.PopupState===
3){this.pop();this.Ahr(this.top());}}},pop:function(){var AKY=null;if(!!this.Tu){
AKY=this.Tu;if(this.Tu===this.AiW){this.Tu=null;this.AiW=null;}else{this.Tu=this.
Tu.My;if(!this.Tu)throw new Error(AXm);this.Tu.Ahz=null;}AKY.Ahz=null;AKY.My=null;
}return AKY;},top:function(){return this.Tu;},BBH:function(G){var B;var At7=(A.Device.
PopupContext.isPrototypeOf(B=this.An_.JP)?B:null);if(!!At7){var A4r=this.BCe(At7
);if(!!A4r){A4r.A98(At7);if(!At7.Show)A4r.AgM(6);}else if(At7.Show){var AKC=A._NewObject(
C.AT9,0);AKC.A98(At7);AKC.AS6=[this,this.Vk];this.push(AKC);AKC.AgM(0);}}},_Init:
function(aArg){A.Core.A$1._Init.call(this.An_={I:this},0);this.__proto__=C.AkK;this.
An_.ASx=[this,this.BBH];this.An_.BmI(A._GetAutoObject(A.Device.Device).AnO);A.h7++;
},_Done:function(){this.__proto__=null;this.An_._Done();A.h7--;},_ReInit:function(
){this.An_._ReInit();},_Mark:function(D){var B;if((B=this.Tu)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ld)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANH)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AT9={Rm:null,My:null,Ahz:null,JP:null,AS6:null,PopupIdToString:null,AfY:function(
Bxk,BxT,Byb,Bx4,Bx6,Bx3,BxC){var Vm=A._NewObject(C.AT8,0);Vm.BnR(this.JP.Id);Vm.
A_S(Bxk);Vm.AS7=Bx3;Vm.A_U(this.JP.Ak4);Vm.A_E(this.JP.AkJ);Vm.BP=A._NewObject(C.
N,0);Vm.Lp().Ca=Bx6;Vm.Lp().Cf=null;Vm.Lp().CE=Bx4;Vm.Lp().CR(Byb);Vm.Lp().Cw(null
);Vm.Lp().Hy(BxT);Vm.Lp().AFr(BxC);return Vm;},Akr:function(){if(!this.Rm){var Agq=
this.PopupIdToString.BS(this.JP.Id);switch(this.JP.Id){case 91:case 92:this.Rm=this.
AfY(Agq,A.jV,A.jV,null,null,[this,this.Agb],0);break;case 39:this.Rm=this.AfY(Agq
,A.aaR(A.acf.AmC),A.aaR(A.acf.Ok),[this,this.A3p],[this,this.A3q],[this,this.Agb
],3);break;case 13:this.Rm=this.AfY(Agq,A.aaR(A.acf.AmC),A.aaR(A.acf.BoT),[this,
this.A3o],[this,this.AKH],[this,this.Agb],3);break;case 25:this.Rm=this.AfY(Agq,
A.aaR(A.acf.AmC),A.aaR(A.acf.Ok),[this,this.A3o],[this,this.AKH],[this,this.Agb]
,3);break;case 16:case 24:case 49:case 74:this.Rm=this.AfY(Agq,A.aaR(A.acf.AmC),
A.jV,[this,this.A3o],null,[this,this.Agb],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 116:case 34:case
82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 14:
case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:case 17:
case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:case 65:
case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:case 71:
case 113:case 100:case 114:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.Rm=this.AfY(Agq,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKH],[this,this.Agb],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.Rm=
this.AfY(Agq,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3p],[this,this.A3q],[this
,this.Agb],3);break;case 110:this.Rm=this.AfY(Agq,A.jV,A.jV,null,null,[this,this.
Agb],1);break;case 46:case 111:this.Rm=this.AfY(Agq,A.jV,A.aaR(A.acf.Ok),null,[this
,this.AKH],[this,this.Agb],1);break;case 4:case 7:case 33:case 115:case 44:case 37:
case 38:case 63:case 95:case 108:case 112:this.Rm=this.AfY(Agq,A.aaR(A.acf.No),A.
aaR(A.acf.Yes),[this,this.A3p],[this,this.A3q],[this,this.Agb],1);break;default:
A.ab5("%s",(AXn+this.JP.Id.toFixed())+AXo);}}switch(this.JP.Id){case 16:case 49:
this.Rm.A__(true);break;case 91:case 92:this.Rm.A__(false);break;default:;}return this.
Rm;},AKH:function(G){this.AgM(4);},A3o:function(G){this.AgM(5);},A3q:function(G){
this.AgM(7);},A3p:function(G){this.AgM(8);},Agb:function(G){this.AgM(3);},A98:function(
E){if(this.JP===E)return;this.JP=E;if(!!this.Rm){this.Akr().A_U(this.JP.Ak4);this.
Akr().A_E(this.JP.AkJ);}},AgM:function(Bx9){var B;this.JP.BnS(Bx9);(B=this.AS6)?
B[1].call(B[0],this):null;},BBd:function(G){this.AgM(9);},_Init:function(aArg){A.
Device.PopupIdToString._Init.call(this.PopupIdToString={I:this},0);this.__proto__=
C.AT9;A.h7++;},_Done:function(){this.__proto__=null;this.PopupIdToString._Done();
A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(D){var
B;if((B=this.Rm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.My)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ahz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
JP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS6)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::PopupEntry"};C.Gd={BooleanToYesNo:null,Du:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.BS(aIndex
);},DZ:function(A7){return A7;},H4:function(){return 1;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Gd;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afn={Ux:null,Kf:function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.
AM!==BO){if(!!this.Ux&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Ux,F[
2].call(F[0],false));break;case 1:(F=this.Ux,F[2].call(F[0],true));break;default:;
}A.abo(this.Ux,0);}},Ka:function(G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.
AM!==BO){if(!!this.Ux&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.Ux,F[
2].call(F[0],false));break;case 1:(F=this.Ux,F[2].call(F[0],true));break;default:;
}A.abo(this.Ux,0);}},AkD:function(E){if(A.aaZ(this.Ux,E))return;if(!!this.Q)A.z$([
this,this.A34],this.Ux,0);this.Ux=E;if(!!E)A.zX([this,this.A34],E,0);if(!!E)A.pe([
this,this.A34],this);},A34:function(G){var F;if(!!this.Ux){if((F=this.Ux,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.Afn;this.J2(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Ux)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUn={Ji:null,OY:null,IU:null,Gm:null,AL:null,Abi:null,AgS:null,TP:null,Sc:null
,AcD:null,W4:null,Hj:null,ABC:true,Init:function(aArg){var B;A.zX([this,this.Al6
],[B=A._GetAutoObject(A.Device.Device),B.ASW,B.A0D],0);A.pe([this,this.Al6],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABC)this.N.C3(A.aaL(A.ach.
AQ4));else this.N.C3(A.aaL(A.ach.AQ5));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OY.L(A.jb.Bm);this.Sc.Z(false);this.TP.Z(false);this.IU.Z(true);this.Gm.
Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B2));this.Background.L(A.jb.Gj);}else
if(this.Abi.Bw){this.OY.L(A.jb.Text);this.Sc.Z(true);this.TP.Z(true);this.IU.Z(false
);this.Gm.Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B2));this.Background.L(A.
jb.E1);}else{this.OY.L(A.jb.Text);this.Sc.Z(false);this.TP.Z(false);this.IU.Z(true
);this.Gm.Ar(true);this.Background.L(A.jb.CJ);}if(this.AgS.Bw)this.W4.Z(true);else
this.W4.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhM();},E4:function(
G){A._GetAutoObject(A.Device.Device).An0();A._GetAutoObject(A.Device.Device).Afa(
false);A._GetAutoObject(A.Device.Device).Uw(false);},Al6:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BAU],this);break;case 3:{A.pe([this,this.Bfu],this);A.pe([B=this.Abi,B.AxN],this
);A.pe(this.Abi.ME,this);}break;case 4:A.ab5("%s",AXp);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A8).FB();},BBI:function(G){this.Boi(!this.ABC);},Boi:function(
E){if(this.ABC===E)return;this.ABC=E;if(!E)A._GetAutoObject(A.Device.Device).Afa(
false);this.Am();},BAU:function(G){var B;this.Bfu(this);if(this.ABC)A._GetAutoObject(
A.Device.Device).Afa(true);A._GetAutoObject(A.Device.Device).WH(65280);A._GetAutoObject(
A.Device.Device).Uw(true);A.pe([B=this.Abi,B.StartTimer],this);A.pe([B=this.AgS,
B.StartTimer],this);this.Am();},BAV:function(G){A._GetAutoObject(A.Device.Device
).Afa(false);A._GetAutoObject(A.Device.Device).Uw(false);this.Am();},BAX:function(
G){this.Am();},Bfu:function(G){A._GetAutoObject(A.Device.Device).AhM();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Ji._Init.call(this.Ji={I:this},0);C.CG._Init.
call(this.OY={I:this},0);A.acg.Ap._Init.call(this.IU={I:this},0);A.acl.Gm._Init.
call(this.Gm={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abi={I:this},0);A.Core.Timer._Init.call(this.AgS={I:this},0);A.acg.Ap.
_Init.call(this.TP={I:this},0);A.acg.Ap._Init.call(this.Sc={I:this},0);A.acg.Text.
_Init.call(this.AcD={I:this},0);C.W4._Init.call(this.W4={I:this},0);C.CG._Init.call(
this.Hj={I:this},0);this.__proto__=C.AUn;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Ji.H(AXq);this.Ji.AkG(0);this.OY.H(AXr);this.OY.R(A.aaR(A.acf.A$6));
this.OY.L(A.jb.Text);this.IU.H(AXs);this.IU.L(A.jb.AV);this.IU.Zr(true);this.Gm.
Fr(1750);this.Gm.Ut(750);this.Gm.AkB(0);this.Gm.Ar(true);this.Gm.B2=3;this.AL.H(
Ays);this.Abi.PV(-1);this.Abi.WG(1000);this.AgS.PV(-1);this.AgS.WG(5000);this.TP.
H(AHZ);this.Sc.H(AHZ);this.Sc.L(A.jb.E1);this.AcD.H(Ays);this.AcD.R(A.aaR(A.acf.
A$E));this.AcD.L(A.jb.Text);this.W4.H(Ays);this.Hj.H(AXt);this.Hj.Ar(false);this.
Hj.R(A.aaR(A.acf.RangeTest));this.Hj.L(A.jb.Text);this.J(this.Ji,0);this.J(this.
OY,0);this.J(this.IU,0);this.J(this.AL,0);this.J(this.TP,0);this.J(this.Sc,0);this.
J(this.AcD,0);this.J(this.W4,0);this.J(this.Hj,0);this.N.CE=[this,this.Ew];this.
N.Ca=[this,this.BBI];this.N.C2(A.aaL(A.ach.E2));this.OY.S(A.aaL(A.fl.Af));this.OY.
AZ(A.aaL(A.fl.Ak));this.OY.Cr(A.aaL(A.fl.Bh));this.IU.Ax(A.aaL(A.ach.ADS));this.
Gm.Q=[B=this.IU,B.ASJ,B.Cv];this.Abi.ME=[this,this.BAV];this.AgS.ME=[this,this.BAX
];this.TP.Ax(A.aaL(A.ach.TP));this.Sc.Ax(A.aaL(A.ach.Sc));this.AcD.S(A.aaL(A.fl.
Af));this.W4.Au([B=A._GetAutoObject(A.Device.Device),B.ASX,B.A0E]);this.Hj.S(A.aaL(
A.fl.Kr));this.Hj.AZ(A.aaL(A.fl.HJ));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ji._Done();this.OY._Done();this.IU._Done();this.Gm._Done();this.AL._Done(
);this.Abi._Done();this.AgS._Done();this.TP._Done();this.Sc._Done();this.AcD._Done(
);this.W4._Done();this.Hj._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Ji._ReInit();this.OY._ReInit();this.IU._ReInit();this.Gm.
_ReInit();this.AL._ReInit();this.Abi._ReInit();this.AgS._ReInit();this.TP._ReInit(
);this.Sc._ReInit();this.AcD._ReInit();this.W4._ReInit();this.Hj._ReInit();this.
OY.R(A.aaR(A.acf.A$6));this.AcD.R(A.aaR(A.acf.A$E));this.Hj.R(A.aaR(A.acf.RangeTest
));this.OY.S(A.aaL(A.fl.Af));this.OY.AZ(A.aaL(A.fl.Ak));this.OY.Cr(A.aaL(A.fl.Bh
));this.AcD.S(A.aaL(A.fl.Af));this.Hj.S(A.aaL(A.fl.Kr));this.Hj.AZ(A.aaL(A.fl.HJ
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ji)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.W4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hj).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbT={
ScreenType:0,Nl:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Np:
function(G){A._GetAutoObject(C.A8).Cd(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbT;},_className:"Application::MenuItemScreen"
};C.Uf={Ad_:null,Mq:null,AmD:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmD){this.Mq.Cv(1);this.Mq.L(A.jb.H9);}else{this.Mq.Cv(0);
if(this.KJ)this.Mq.L(A.jb.Bm);else if(this.Hl)this.Mq.L(A.jb.Text);else this.Mq.
L(A.jb.Bm);}},I2:function(G){var F,Ct;if(!!this.Ad_){(Ct=this.Ad_,Ct[2].call(Ct[
0],!(F=this.Ad_,F[1].call(F[0]))));this.AE_((F=this.Ad_,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A3v:function(G){this.KJ=true;this.DJ(this);},AE_:function(
E){if(this.AmD===E)return;this.AmD=E;this.DJ(this);this.Am();},A3X:function(G){var
F;this.AE_((F=this.Ad_,F[1].call(F[0])));},A0Y:function(s){this.A3X(s);},DJ:function(
G){var F;if(!this.N||!this.KJ)return;if(this.AmD){(F=this.N,F[1].call(F[0])).CR(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CR(A.aaR(A.acf.A8t));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ATb:function(E){if(A.aaZ(this.Ad_,E))
return;if(!!this.Ad_)A.z$([this,this.A0Y],this.Ad_,0);this.Ad_=E;if(!!E)A.zX([this
,this.A0Y],E,0);if(!!E)A.pe([this,this.A0Y],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mq={I:this},0);this.__proto__=C.Uf;this.
V.L(A.jb.H9);this.Mq.H(AH0);this.Mq.Cv(0);this.J(this.Mq,0);this.Mq.Ax(A.aaL(A.ach.
AqQ));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mq._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mq._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad_)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mq)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANP={H6:null,IO:null,_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.SS._Init.call(this.H6={I:this},0);C.AGP._Init.call(this.
IO={I:this},0);this.__proto__=C.ANP;var B;this.Jc(A.aaR(A.acf.ACC));this.H6.H(Ah3
);this.H6.Aj(true);this.H6.T(A.aaR(A.acf.Date));this.H6.Bi(true);this.IO.H(U1);this.
IO.Aj(true);this.IO.T(A.aaR(A.acf.Bs));this.J(this.H6,-1);this.J(this.IO,-1);this.
H6.Ab1([B=this.H6,B.FV]);this.H6.Gs([this,this.D_,this.GS]);this.H6.AkA(A.aaL(A.
ach.Edit));this.H6.Ab7([B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6]);this.IO.
Ab1([B=this.IO,B.FV]);this.IO.Gs([this,this.D_,this.GS]);this.IO.AkA(A.aaL(A.ach.
Edit));this.IO.Ab7([B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6]);},_Done:function(
){this.__proto__=C.Cg;this.H6._Done();this.IO._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.H6._ReInit();this.IO._ReInit();this.Jc(A.
aaR(A.acf.ACC));this.H6.T(A.aaR(A.acf.Date));this.IO.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cg._Mark.call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVl={Rf:null,FK:null,BZ:null,OM:null,YM:null,Aa4:null,_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.Rf._Init.call(this.Rf={I:this},0);C.AMI._Init.call(this.
FK={I:this},0);C.AUV._Init.call(this.BZ={I:this},0);C.AUX._Init.call(this.OM={I:
this},0);C.Afn._Init.call(this.YM={I:this},0);C.Aa4._Init.call(this.Aa4={I:this}
,0);this.__proto__=C.AVl;var B;this.Jc(A.aaR(A.acf.Temperature));this.FK.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AXu);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Arr));this.BZ.Bi(false);this.OM.H(Aah);this.OM.Aj(true);this.OM.T(A.aaR(A.acf.Undertemperature
));this.OM.Bi(true);this.OM.Bx(3800);this.OM.Ga(3000);this.OM.EV(5000);this.OM.A_2(
A.aaR(A.acf.AG2));this.YM.H(AXv);this.YM.Aj(true);this.YM.Z(true);this.YM.T(A.aaR(
A.acf.A5s));this.J(this.BZ,0);this.J(this.OM,0);this.J(this.YM,0);this.BZ.Ab1([B=
this.BZ,B.FV]);this.BZ.Gs([this,this.D_,this.GS]);this.BZ.AkA(A.aaL(A.ach.Edit));
this.BZ.L1([B=this.BZ,B.AyZ]);this.BZ.L4(A.aaL(A.ach.AnR));this.BZ.Au([B=this.FK
,B.B$,B.Cb]);this.BZ.CK(this.FK);this.BZ.A_C([B=this.FK,B.AS5,B.A0L]);this.BZ.A_B([
B=this.FK,B.AS4,B.A0K]);this.OM.L1([B=this.BZ,B.AyZ]);this.OM.L4(A.aaL(A.ach.AnR
));this.OM.Au([B=A._GetAutoObject(A.Device.Device),B.A9z,B.BbN]);this.YM.CK(this.
Aa4);this.YM.AkD([B=A._GetAutoObject(A.Device.Device),B.A8U,B.Bbw]);},_Done:function(
){this.__proto__=C.Cg;this.Rf._Done();this.FK._Done();this.BZ._Done();this.OM._Done(
);this.YM._Done();this.Aa4._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.Rf._ReInit();this.FK._ReInit();this.BZ._ReInit();this.
OM._ReInit();this.YM._ReInit();this.Aa4._ReInit();this.Jc(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Arr));this.OM.T(A.aaR(A.acf.Undertemperature));this.OM.
A_2(A.aaR(A.acf.AG2));this.YM.T(A.aaR(A.acf.A5s));},_Mark:function(D){var B;C.Cg.
_Mark.call(this,D);if((B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AN2={PK:null,PL:null,Sv:null,V7:null,Sx:null,Sw:null,Gd:null,Acs:null,Init:function(
aArg){A.zX([this,this.BpG],this.PL.Q,0);},BpG:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw$((F=this.PL.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.Ir._Init.call(this.PK={I:this},0);C.BW._Init.call(this.PL={
I:this},0);C.Afn._Init.call(this.Sv={I:this},0);C.Ir._Init.call(this.V7={I:this}
,0);C.Afn._Init.call(this.Sx={I:this},0);C.Afn._Init.call(this.Sw={I:this},0);C.
Gd._Init.call(this.Gd={I:this},0);C.Acs._Init.call(this.Acs={I:this},0);this.__proto__=
C.AN2;var B;this.N.H(Xi);this.Jc(A.aaR(A.acf.Device));this.PK.H(Ah3);this.PK.Aj(
true);this.PK.T(A.aaR(A.acf.A$O));this.PK.Bi(false);this.PK.Ga(2);this.PK.EV(60);
this.PK.IR(A.aaR(A.acf.AHf));this.PK.Jd(A.aaR(A.acf.AHf));this.PL.H(AXw);this.PL.
Aj(true);this.PL.T(A.aaR(A.acf.A$V));this.PL.Bi(true);this.PL.Bx(0);this.PL.Ga(-
1);this.PL.EV(1);this.Sv.H(Aah);this.Sv.Aj(true);this.Sv.T(A.aaR(A.acf.HG));this.
Sv.Bi(false);this.Sv.Bx(0);this.Sv.Ga(-1);this.Sv.EV(1);this.V7.H(Ali);this.V7.Aj(
true);this.V7.T(A.aaR(A.acf.A5Q));this.V7.Bi(true);this.V7.IR(AfG);this.V7.Jd(AfG
);this.Sx.H(AcQ);this.Sx.Aj(true);this.Sx.T(A.aaR(A.acf.AsT));this.Sx.Bi(false);
this.Sx.Bx(1);this.Sx.Ga(-1);this.Sx.EV(1);this.Sw.H(Aoq);this.Sw.Aj(true);this.
Sw.T(A.aaR(A.acf.Asw));this.Sw.Bi(true);this.Sw.Bx(0);this.Sw.Ga(-1);this.Sw.EV(
1);this.Acs.Au(A._GetAutoObject(A.Device.Device).AxM);this.J(this.PK,0);this.J(this.
PL,0);this.J(this.Sv,0);this.J(this.V7,0);this.J(this.Sx,0);this.J(this.Sw,0);this.
PK.Au([B=A._GetAutoObject(A.Device.Device),B.A9r,B.BbJ]);this.PL.Au([B=this.Acs,
B.B$,B.Cb]);this.PL.CK(this.Acs);this.Sv.CK(this.Gd);this.Sv.AkD([B=A._GetAutoObject(
A.Device.Device),B.AEI,B.AIW]);this.V7.Au([B=A._GetAutoObject(A.Device.Device),B.
A8R,B.Bbt]);this.Sx.CK(this.Gd);this.Sx.AkD([B=A._GetAutoObject(A.Device.Device)
,B.A9A,B.BbO]);this.Sw.CK(this.Gd);this.Sw.AkD([B=A._GetAutoObject(A.Device.Device
),B.ASN,B.A0x]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.PK._Done(
);this.PL._Done();this.Sv._Done();this.V7._Done();this.Sx._Done();this.Sw._Done(
);this.Gd._Done();this.Acs._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.PK._ReInit();this.PL._ReInit();this.Sv._ReInit();this.
V7._ReInit();this.Sx._ReInit();this.Sw._ReInit();this.Gd._ReInit();this.Acs._ReInit(
);this.Jc(A.aaR(A.acf.Device));this.PK.T(A.aaR(A.acf.A$O));this.PK.IR(A.aaR(A.acf.
AHf));this.PK.Jd(A.aaR(A.acf.AHf));this.PL.T(A.aaR(A.acf.A$V));this.Sv.T(A.aaR(A.
acf.HG));this.V7.T(A.aaR(A.acf.A5Q));this.Sx.T(A.aaR(A.acf.AsT));this.Sw.T(A.aaR(
A.acf.Asw));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.PK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acs)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUz={V_:null,V9:
null,QP:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BiU
],this.QP.Q,0);},BiU:function(G){var F;A._GetAutoObject(A.Device.Device).Akx((F=
this.QP.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
Ni._Init.call(this.V_={I:this},0);C.Ni._Init.call(this.V9={I:this},0);C.AUR._Init.
call(this.QP={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUz;var B;this.Jc(A.aaR(A.acf.Asp));this.V_.H(IW);this.
V_.Aj(true);this.V_.T(A.aaR(A.acf.AjH));this.V_.Bi(false);this.V_.Nl(87);this.V9.
H(AXx);this.V9.Aj(true);this.V9.T(A.aaR(A.acf.Aqo));this.V9.Bi(true);this.V9.Nl(
88);this.QP.H(U1);this.QP.Aj(true);this.QP.T(A.aaR(A.acf.A5x));this.QP.Bi(false);
this.QP.Ga(-1);this.QP.EV(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V_,0);this.J(this.V9,0);this.J(this.
QP,0);this.V_.AR=[B=this.V_,B.Np];this.V9.AR=[B=this.V9,B.Np];this.QP.Au([B=this.
EartagNrAssignmentMode,B.B$,B.Cb]);this.QP.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.V_._Done();this.V9._Done(
);this.QP._Done();this.EartagNrAssignmentMode._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.V_._ReInit();this.V9._ReInit();this.QP._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Jc(A.aaR(A.acf.Asp));this.V_.T(A.aaR(
A.acf.AjH));this.V9.T(A.aaR(A.acf.Aqo));this.QP.T(A.aaR(A.acf.A5x));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.V_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.W4={Q:null,TransponderProtocolToString:
null,Aps:null,Background:null,Y:null,Sp:null,GN:null,PP:null,OO:null,Pt:null,C9:
null,EN:null,SN:null,N6:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.ID],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.ID],E,0);if(!!E)A.pe([this,this.ID],this);},ID:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GN.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BM=(F=this.Q,F[1].call(F[0])).Bjq();if(BM<900){var J$=A._GetAutoObject(
A.Device.Converter).ANG(BM);if(!!J$)this.C9.R(((this.CountryToString.Lx(J$)+AcO)+
BM.toFixed())+O_);else this.C9.R(BM.toFixed());if(J$===10){var AKk=this.A7m((F=this.
Q,F[1].call(F[0])).Id);this.C9.R(this.C9.String+((((AH1+this.Aps.Bqp(AKk))+AcO)+
A.abl(this.Aps.Bqo(AKk),2,10))+O_));}this.C9.Z(true);this.Pt.Z(true);this.OO.Z(false
);this.PP.Z(false);}else{this.OO.R(((A._GetAutoObject(A.Device.Converter).Bh$(BM
)+AcO)+BM.toFixed())+O_);this.OO.Z(true);this.PP.Z(true);this.C9.Z(false);this.Pt.
Z(false);}if(BM===276){this.EN.R(this.Aps.BS(this.A7m((F=this.Q,F[1].call(F[0])).
Id)));this.EN.Z(true);}else this.EN.Z(false);this.N6.R(this.TransponderProtocolToString.
BS((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GN.R(A.jV);this.OO.
R(A.jV);this.EN.R(A.jV);this.C9.R(A.jV);this.N6.R(A.jV);}},A7m:function(J9){var Qz=
0;var J$=A._GetAutoObject(A.Device.Converter).S3(J9);switch(J$){case 10:{var Gi=
A._GetAutoObject(A.Device.Converter).AVD(J9);Qz=A._GetAutoObject(A.Device.Converter
).AC2(Gi);}break;default:;}return Qz;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Aps={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.Sp={I:this},0);C.CG._Init.call(this.GN={I:this},0);C.CG._Init.
call(this.PP={I:this},0);C.CG._Init.call(this.OO={I:this},0);C.CG._Init.call(this.
Pt={I:this},0);C.CG._Init.call(this.C9={I:this},0);C.CG._Init.call(this.EN={I:this
},0);C.CG._Init.call(this.SN={I:this},0);C.CG._Init.call(this.N6={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.W4;
this.H(AcP);this.Background.A0(0x3F);this.Background.H(AcP);this.Background.L(A.
jb.CT);this.Y.A0(0x3F);this.Y.H(AcP);this.Y.JW(9);this.Sp.H(AH2);this.Sp.Aj(true
);this.Sp.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.Sp.A6(0x11);this.Sp.L(A.jb.
Text);this.GN.H(AXy);this.GN.Aj(true);this.GN.R(AH3);this.GN.A6(0x14);this.GN.L(
A.jb.Text);this.PP.H(AH4);this.PP.Aj(true);this.PP.R(A.aaR(A.acf.A$i)+A.aaR(A.acf.
Colon));this.PP.A6(0x11);this.PP.L(A.jb.Text);this.OO.H(AH5);this.OO.Aj(true);this.
OO.R(AXz);this.OO.A6(0x14);this.OO.L(A.jb.Text);this.Pt.H(AH4);this.Pt.Aj(true);
this.Pt.R(A.aaR(A.acf.C9)+A.aaR(A.acf.Colon));this.Pt.A6(0x11);this.Pt.L(A.jb.Text
);this.C9.H(AH5);this.C9.Aj(true);this.C9.R(AXA);this.C9.A6(0x14);this.C9.L(A.jb.
Text);this.EN.H(AXB);this.EN.Aj(true);this.EN.R(AXC);this.EN.A6(0x14);this.EN.L(
A.jb.Text);this.SN.H(AXD);this.SN.Aj(true);this.SN.R(A.aaR(A.acf.N6)+A.aaR(A.acf.
Colon));this.SN.A6(0x11);this.SN.L(A.jb.Text);this.N6.H(AXE);this.N6.Aj(true);this.
N6.R(AXF);this.N6.A6(0x14);this.N6.L(A.jb.Text);this.J(this.Background,0);this.J(
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
_ReInit();this.Sp.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.PP.R(A.aaR(A.acf.A$i
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
"Application::TransponderInfo"};C.QX={D2:null,A$x:A.jV,Ai:function(Ae){C.Fo.Ai.call(
this,Ae);if(this.Mu.Fq())this.D2.CU(A.jb.AV);else this.D2.CU(this.Background.AQ);
this.D2.Zt(this.G_.AQ);},Zy:function(E){if(this.A$x===E)return;this.A$x=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fo._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QX;this.Background.H(AXG);this.
Mu.H(W_);this.OH.H(AH6);this.Q3.H(AH6);this.D2.H(AXH);this.D2.Z(false);this.J(this.
D2,0);this.G_.S(A.aaL(A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fo;this.D2._Done();C.Fo._Done.call(this
);},_ReInit:function(){C.Fo._ReInit.call(this);this.D2._ReInit();this.G_.S(A.aaL(
A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fo._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,AeF:null,Ap:null,Text:null
,DK:A.jV,AmQ:0,M5:0,Je:0,A5T:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BCW:function(G){this.Ap.H(this.Text.M);this.
AeF.H(this.Text.M);},Zt:function(E){if(this.AmQ===E)return;this.AmQ=E;this.AeF.L(
E);this.Text.L(E);},CU:function(E){if(this.M5===E)return;this.M5=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hn:function(E){
if(this.Je===E)return;this.Je=E;this.Text.Hn(E);},Bml:function(E){if(this.A5T===
E)return;this.A5T=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NU._Init.call(this.AeF={I:this},0);A.acg.NU._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AH7);
this.AeF.A0(0x8);this.AeF.L(A.jb.Text);this.Ap.A0(0x8);this.Ap.L(A.jb.CT);this.Text.
A0(0xD);this.Text.H(AH7);this.Text.Hn(5);this.Text.Jb(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeF,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeF.Ax(A.aaL(A.ach.AP2));this.Ap.Ax(A.aaL(A.ach.AP1));this.Text.Q7([this,this.BCW
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeF._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeF._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.Ub={DY:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALr(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkQ();A._GetAutoObject(A.Device.Helper).Ast();},Ih:function(G){},AcV:function(
s){this.Ih(s);},A3M:function(G){A._GetAutoObject(C.A8).FB();},Fk:function(G){var
B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.
MC(-this.Y.Br[1]);},ALr:function(G){},BG5:function(s){this.ALr(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.Ub;this.Background.L(A.jb.CT);this.N.Z(true);this.N.CR(A.jV);this.Dr(C.Aq2);this.
DY.A0(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);this.Y.JW(9);this.Ay.H(
It);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CE=[this,this.A3M
];this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVW={WE:function(
G){this.Agx();this.I4(A.aaR(A.acf.AVt),[this,this.ATV],7);this.I4(A.aaR(A.acf.BoY
),[this,this.Bmo],6);this.I4(A.aaR(A.acf.AGo),[this,this.ATH],3);this.I4(A.aaR(A.
acf.An1),[this,this.AwZ],2);this.I4(A.aaR(A.acf.AdV),[this,this.AE1],1);this.I4(
A.aaR(A.acf.AuI),[this,this.AEV],0);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Ml(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abt:function(){return C.ANh;},Abu:function(){return C.API;
},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mv();var ABE=A._NewObject(
A.Device.BoolFilterCriterion,0);ABE.Initialize(12,0,true,true);Be.CX(ABE);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HQ:function(G){var F;C.GJ.HQ.call(this,G);if(this.Aki(
)===false){this.N.Cw(A._GetAutoObject(A.Device.Converter).Ajr((F=this.Fn,F[1].call(
F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OS(false);this.N.OT(false
);},Agj:function(){A._GetAutoObject(C.A8).Cd(41);},_Init:function(aArg){C.GJ._Init.
call(this,aArg);this.__proto__=C.AVW;var B;this.Dr(C.APE);this.Dl(A.aaR(A.acf.A8g
));this.AwU([B=A._GetAutoObject(A.Device.Device),B.A9E,B.BbP]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.A8g));},_className:"Application::WatchListScreen"
};C.AMn={DE:function(G){var B;var JE=(A.Core.BK.isPrototypeOf(G)?G:null);if(((JE.
CO===4)||(JE.CO===5))===false){C.Ax6.DE.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var Bdh=A._GetAutoObject(A.Device.Device
).KZ;var Tm;if(JE.CO===5)Tm=5;else Tm=4;var ABi=A._GetAutoObject(A.acj.DU).BdR(Bdh
,Tm);var Gv=(((Bdh+((ABi/2)|0))/ABi)|0)*ABi;if(JE.CO===4)Gv+=ABi;else if(JE.CO===
5)Gv-=ABi;if(Gv>999900)Gv=999900;if(Gv<100)Gv=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(Gv);},AsH:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O5,B.CE],this);else A._GetAutoObject(C.A8).FB();
},WU:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsJ();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$M()===false){this.H8.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KZ
);this.H8.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H8.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KZ);this.H8.Ci(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A8).FB();}},AkX:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O5,B.Ca],this);},BdQ:function(){var
ALF=A._GetAutoObject(A.Device.Helper).W.AhW(1);if(ALF>=100000)ALF=(Math.round(ALF
/1000)|0)*1000;return ALF;},_Init:function(aArg){C.Ax6._Init.call(this,aArg);this.
__proto__=C.AMn;},_className:"Application::AnimalActionWeighingScreen"};C.AVH={Wc:
null,YO:null,Rf:null,AeQ:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
BW._Init.call(this.Wc={I:this},0);C.BW._Init.call(this.YO={I:this},0);C.Rf._Init.
call(this.Rf={I:this},0);C.AeQ._Init.call(this.AeQ={I:this},0);this.__proto__=C.
AVH;var B;this.Jc(A.aaR(A.acf.AHg));this.Wc.H(Ah3);this.Wc.Aj(true);this.Wc.T(A.
aaR(A.acf.Bad));this.Wc.Bi(true);this.Wc.Bx(0);this.YO.H(U1);this.YO.Aj(true);this.
YO.T(A.aaR(A.acf.Bac));this.YO.Bi(false);this.J(this.Wc,0);this.J(this.YO,0);this.
Wc.Au([B=this.Rf,B.B$,B.Cb]);this.Wc.CK(this.Rf);this.YO.Au([B=this.AeQ,B.B$,B.Cb
]);this.YO.CK(this.AeQ);},_Done:function(){this.__proto__=C.Cg;this.Wc._Done();this.
YO._Done();this.Rf._Done();this.AeQ._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.Wc._ReInit();this.YO._ReInit();this.Rf._ReInit();
this.AeQ._ReInit();this.Jc(A.aaR(A.acf.AHg));this.Wc.T(A.aaR(A.acf.Bad));this.YO.
T(A.aaR(A.acf.Bac));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.
Wc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeQ={MassUnitToString:null
,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwV(E);}
,Init:function(aArg){var B;A.zX([this,this.Beu],[B=A._GetAutoObject(A.Device.Device
),B.ASM,B.A0w],0);A.pe([this,this.Beu],this);},Beu:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeQ;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax6={H8:null,Ajx:null,MassUnit:null,
KZ:null,VB:null,AnN:null,AcF:null,Z0:null,O5:null,YE:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af4());A.zX([this,this.AKI],[B=A._GetAutoObject(
A.Device.Device),B.AEL,B.AIZ],0);A.zX([this,this.BBJ],[B=A._GetAutoObject(A.Device.
Device),B.AER,B.AI3],0);A.zX([this,this.BBK],[B=this.O5,B.Arz,B.JA],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxZ();this.AcH();},I2:function(G){this.WU(this);}
,CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsJ();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lj())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),
0,null);this.H8.Gr();this.H8.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGY();else{var BC$=this.BdQ();this.Z0.Z(true);this.AcF.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BC$);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsJ();else A._GetAutoObject(A.Device.Device).AhP(
);},AxZ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bhf();break;case 3:{this.Bhf();this.Z0.Z(false);this.AcF.Z(false
);if(this.A$M()){this.VB.Z(false);this.KZ.H(A.abO(this.KZ.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O5.Ar(true);this.O5.Z(true);this.Bb(this.O5);}}break;
case 4:this.KZ.R(A.aaR(A.acu.Akl));break;default:A.ab5("%s%e",AH8,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcH:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C2(A.aaL(A.ach.AeA));this.N.Cw(null);
this.YE.Z(false);this.N.C3(A.aaL(A.ach.Am3));this.N.CR(A.jV);}break;case 3:{if(this.
O5.AY<=1){this.N.C2(null);this.N.Cw(null);this.YE.Z(false);this.N.C3(null);}else{
this.N.C2(A.aaL(A.ach.Am2));this.N.Cw(A.aaL(A.ach.AeB));this.YE.Z(true);this.N.C3(
null);}this.N.CR(A.aaR(A.acf.Ok));}break;case 4:{this.N.C3(A.aaL(A.ach.AvS));this.
N.Ca=[this,this.Bmc];this.N.Cw(null);this.YE.Z(false);this.N.CR(A.jV);}break;default:;
}},AsH:function(G){},Bw2:function(s){this.AsH(s);},WU:function(G){},A0O:function(
s){this.WU(s);},Bmc:function(G){this.CC(this);},BBJ:function(G){this.Am();},AKI:
function(G){this.Am();},A$M:function(){var Auz=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Auz>0)&&!A._GetAutoObject(A.Device.Helper).Bqm(Auz
,this.H8.Timestamp);},AkX:function(G){},A0N:function(s){this.AkX(s);},BBK:function(
G){this.Am();},Bhf:function(){this.KZ.R(A._GetAutoObject(A.Device.Converter).Ak$(
A._GetAutoObject(A.Device.Device).KZ));},BdQ:function(){return A._GetAutoObject(
A.Device.Helper).W.AhW(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KZ={I:this},0);A.acg.Text._Init.call(this.VB={I:this
},0);C.AxY._Init.call(this.AnN={I:this},0);A.acg.Aeq._Init.call(this.AcF={I:this
},0);A.acg.Aeq._Init.call(this.Z0={I:this},0);C.AV1._Init.call(this.O5={I:this},
0);A.acg.Ap._Init.call(this.YE={I:this},0);this.__proto__=C.Ax6;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dr(C.IL);this.Ajx.A0(0x3F);this.Ajx.H(Ayt);this.Ajx.
L(A.jb.CJ);this.MassUnit.H(AXI);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
AAd));this.MassUnit.L(A.jb.Text);this.KZ.H(AXJ);this.KZ.A6(0x14);this.KZ.R(A.aaR(
A.acu.Akl));this.KZ.L(A.jb.Text);this.VB.H(AXK);this.VB.R(A.aaR(A.acf.Bap));this.
VB.L(A.jb.Text);this.VB.Z(true);this.AnN.H(AXL);this.AcF.H(AXM);this.AcF.L(A.jb.
Aeb);this.AcF.Z(false);this.Z0.H(AXN);this.Z0.L(A.jb.Aeb);this.Z0.Bm2(true);this.
Z0.Z(false);this.O5.A0(0x3F);this.O5.H(Ayt);this.O5.Ar(false);this.O5.Z(false);this.
YE.H(AXO);this.YE.L(A.jb.Bm);this.J(this.Ajx,0);this.J(this.MassUnit,0);this.J(this.
KZ,0);this.J(this.VB,0);this.J(this.AcF,0);this.J(this.Z0,0);this.J(this.O5,0);this.
J(this.YE,0);this.N.CE=[this,this.Bw2];this.N.Cf=[this,this.A0N];this.N.Ca=[this
,this.A0O];this.MassUnit.S(A.aaL(A.fl.EK));this.KZ.S(A.aaL(A.fl.Aet));this.VB.S(
A.aaL(A.fl.EK));this.AcF.Zx(this.AnN);this.Z0.Zx(this.AnN);this.H8=A._NewObject(
A.Device.Rating,0);this.O5.L2(A._GetAutoObject(A.Device.Helper).W);this.O5.AkE(this.
H8);this.YE.Ax(A.aaL(A.ach.AQY));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajx._Done();this.MassUnit._Done();this.KZ._Done();this.VB._Done();this.
AnN._Done();this.AcF._Done();this.Z0._Done();this.O5._Done();this.YE._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajx._ReInit();
this.MassUnit._ReInit();this.KZ._ReInit();this.VB._ReInit();this.AnN._ReInit();this.
AcF._ReInit();this.Z0._ReInit();this.O5._ReInit();this.YE._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAd));this.KZ.R(A.aaR(A.acu.Akl));this.VB.R(A.aaR(A.acf.Bap));this.
MassUnit.S(A.aaL(A.fl.EK));this.KZ.S(A.aaL(A.fl.Aet));this.VB.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H8)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AV5={FK:null
,OP:null,Nf:null,C$:null,LY:null,T_:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FK,B.B$,B.Cb],0);A.pe([this,this.GH],this);},CC:function(G){C.Cg.CC.
call(this,G);A.pe([this,this.GH],this);},BkX:function(G){var F;this.LY.BT.L(this.
LY.V.AQ);if(!!this.LY.Q)this.LY.BT.R((A._GetAutoObject(A.Device.Converter).S_((F=
this.LY.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DU).Aaw());},GH:function(
G){var AJD=true;if(this.FK.Q===1)AJD=false;this.C$.Aj(AJD);this.C$.Ar(AJD);this.
C$.Z(AJD);A._GetAutoObject(A.Device.Helper).ANA(this.Y);},_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.AMJ._Init.call(this.FK={I:this},0);C.AHr._Init.call(this.
OP={I:this},0);C.AUW._Init.call(this.Nf={I:this},0);C.AkV._Init.call(this.C$={I:
this},0);C.Ir._Init.call(this.LY={I:this},0);C.BW._Init.call(this.T_={I:this},0);
this.__proto__=C.AV5;var B;this.Jc(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsW));this.FK.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.OP.Au(A._GetAutoObject(
A.Device.Device).OP);this.Nf.H(AXP);this.Nf.Aj(true);this.C$.H(Ata);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.KM));this.C$.Bi(true);this.C$.Ga(1000);this.C$.EV(99000);
this.LY.H(Atb);this.LY.Aj(true);this.LY.T(A.aaR(A.acf.A5B));this.LY.Ga(50);this.
LY.EV(2000);this.LY.ATo(A._GetAutoObject(A.acj.DU).AzW());this.T_.H(AcQ);this.T_.
Aj(true);this.T_.T(A.aaR(A.acf.A70));this.T_.Ga(-1);this.T_.EV(1);this.J2(this.Y
,-1);this.J2(this.Ay,-1);this.J(this.Nf,0);this.J(this.C$,0);this.J(this.LY,0);this.
J(this.T_,0);this.Nf.Ab1([B=this.Nf,B.FV]);this.Nf.Gs([this,this.D_,this.GS]);this.
Nf.AkA(A.aaL(A.ach.Edit));this.Nf.L1([B=this.Nf,B.AyZ]);this.Nf.L4(A.aaL(A.ach.AnR
));this.Nf.Au([B=this.FK,B.B$,B.Cb]);this.Nf.CK(this.FK);this.Nf.A_C([B=this.FK,
B.AS5,B.A0L]);this.Nf.A_B([B=this.FK,B.AS4,B.A0K]);this.C$.Gs([this,this.D_,this.
GS]);this.C$.L1([B=this.Nf,B.AyZ]);this.C$.L4(A.aaL(A.ach.AnR));this.C$.Au([B=this.
FK,B.A8P,B.ATa]);this.LY.Gs([this,this.D_,this.GS]);this.LY.L1([B=this.Nf,B.AyZ]
);this.LY.L4(A.aaL(A.ach.AnR));this.LY.Au([B=this.FK,B.A8N,B.AS_]);this.LY.A_Q([
this,this.BkX]);this.T_.Gs([this,this.D_,this.GS]);this.T_.Au([B=this.OP,B.B$,B.
Cb]);this.T_.CK(this.OP);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;
this.FK._Done();this.OP._Done();this.Nf._Done();this.C$._Done();this.LY._Done();
this.T_._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.FK._ReInit();this.OP._ReInit();this.Nf._ReInit();this.C$._ReInit();this.LY.
_ReInit();this.T_._ReInit();this.Jc(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsW));this.C$.T(A.aaR(A.acf.KM));this.LY.T(A.aaR(A.acf.A5B));this.T_.T(A.aaR(A.acf.
A70));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FK)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nf).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUW={Y0:null,Init:
function(aArg){var B;A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Device),B.
ASM,B.A0w],0);A.pe([this,this.AfH],this);},A4e:function(G){A._GetAutoObject(A.Device.
Device).A3(37,true,A.jV,0,[this,this.Bb4]);},A13:function(G){var F;if(this.A_===
1){var BO=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).AzW();if(this.D7<this.
AlT)this.D7=this.AlT;if(this.DW!==BO){if(!!this.J0)(F=this.J0,F[2].call(F[0],this.
D7));A.abo(this.J0,0);}}if(this.A_===2){var BO=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).AzW();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JZ
)(F=this.JZ,F[2].call(F[0],this.DW));A.abo(this.JZ,0);}}this.DJ(this);this.Am();
},A2D:function(G){var F;if(this.A_===1){var BO=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).AzW();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.J0
)(F=this.J0,F[2].call(F[0],this.D7));A.abo(this.J0,0);}}if(this.A_===2){var BO=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).AzW();if(this.DW>this.AlO)this.DW=
this.AlO;if(this.DW!==BO){if(!!this.JZ)(F=this.JZ,F[2].call(F[0],this.DW));A.abo(
this.JZ,0);}}this.DJ(this);this.Am();},GH:function(G){this.PN.R(AH9+A._GetAutoObject(
A.Device.Converter).S_(this.D7,2,true));this.PM.R(AH9+A._GetAutoObject(A.Device.
Converter).S_(this.DW,2,true));this.Sz.R(A._GetAutoObject(A.acj.DU).Aaw());this.
Y0.R(this.Sz.String);},A3P:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).Asv(this
);},A2w:function(Atx){if(Atx===1)return this.PN;else if(Atx===2)return this.PM;else
return null;},_Init:function(aArg){C.Acp._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y0={I:this},0);this.__proto__=C.AUW;this.T(A.aaR(A.acf.ACx));this.AlO=
2000;this.AlT=20;this.Background.H(K1);this.V.H(BD);this.V.R(A.aaR(A.acf.ACx)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkN.H(AXQ);this.AkO.H(AXR);this.Q8.H(AH_);
this.QH.H(AXS);this.PM.H(AXT);this.PN.H(AXU);this.Sz.H(AXV);this.Y0.H(AXW);this.
Y0.Jb(false);this.Y0.A6(0x12);this.Y0.L(0xFF000000);this.J2(this.H5,-8);this.J(this.
Y0,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.Y0.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acp;this.Y0._Done();C.Acp.
_Done.call(this);},_ReInit:function(){C.Acp._ReInit.call(this);this.Y0._ReInit();
this.T(A.aaR(A.acf.ACx));this.V.R(A.aaR(A.acf.ACx)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.Y0.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acp._Mark.call(this,D);if((B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABJ={M:O7,A7z:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7z();},_Init:function(
aArg){A.Graphics.Hz._Init.call(this,aArg);this.__proto__=C.ABJ;},_className:"Application::AbstractPath"
};C.Aqh={DP:null,DY:null,Rk:null,AdR:null,P5:null,AdQ:null,AuH:1,A49:0,Bc0:false
,AzS:true,CP:function(){this.Bhb(this);},Init:function(aArg){var B;this.Bb(this.
AdR);A.zX([this,this.Bhb],[B=this.AdR,B.A8V,B.Bbx],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdQ.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Biu(this.AuH+this.A49)));if(this.AuH===1)this.P5.R(A.aaR(A.acf.ANo));else this.
P5.R(A.aaR(A.acf.Bh4));},CC:function(G){if(this.AzS)this.AzS=false;else if(this.
DP.Bc_()===false)A.pe([this,this.A3m],this);else if(this.DP.Az7())this.DP.Ac9();
A.zV([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);},A3m:function(G){this.
Bc0=true;A._GetAutoObject(C.A8).FB();},Bhb:function(G){var B;var BdA=(C.Wo.isPrototypeOf(
B=this.AdR.AV)?B:null);if(!!BdA){var Azd=A._NewObject(A.Device.ActionToString,0);
this.Rk.R(Azd.Lx(BdA.Action));}},Ih:function(G){var Cy=(C.Wo.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DP.Qp(Cy.Action);this.Bmf(this.AuH+1);},BBc:function(G){
if(A._GetAutoObject(C.Pn).NZ(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bmf:function(E){
if(this.AuH===E)return;this.AuH=E;this.Am();},Aga:function(G){if((this.Bc0===false
)&&(this.DP.Bc_()===false))A.pe([this,this.A3m],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);C.CG._Init.call(this.
Rk={I:this},0);C.ARR._Init.call(this.AdR={I:this},0);C.CG._Init.call(this.P5={I:
this},0);A.acg.Text._Init.call(this.AdQ={I:this},0);this.__proto__=C.Aqh;this.Background.
L(A.jb.CT);this.N.H(Xi);this.N.Z(true);this.Dr(C.IL);this.DY.A0(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Rk.H(AXX);this.Rk.L(A.jb.Text);this.AdR.H(AXY);this.
P5.H(AXZ);this.P5.R(A.aaR(A.acf.ANo));this.P5.L(A.jb.Text);this.AdQ.H(AX0);this.
AdQ.R(AX1);this.AdQ.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rk,0);this.J(this.
AdR,0);this.J(this.P5,0);this.J(this.AdQ,0);this.N.CE=[this,this.A3m];this.N.Cf=[
this,this.BBc];this.N.C2(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.Rk.S(
A.aaL(A.fl.EK));this.Rk.AZ(A.aaL(A.fl.Af));this.Rk.Cr(A.aaL(A.fl.Ak));this.AdR.A3N=[
this,this.Ih];this.P5.S(A.aaL(A.fl.EK));this.P5.AZ(A.aaL(A.fl.Af));this.P5.Cr(A.
aaL(A.fl.Ak));this.AdQ.S(A.aaL(A.fl.H2));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rk._Done();this.
AdR._Done();this.P5._Done();this.AdQ._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rk._ReInit();this.AdR._ReInit();
this.P5._ReInit();this.AdQ._ReInit();this.P5.R(A.aaR(A.acf.ANo));this.Rk.S(A.aaL(
A.fl.EK));this.Rk.AZ(A.aaL(A.fl.Af));this.Rk.Cr(A.aaL(A.fl.Ak));this.P5.S(A.aaL(
A.fl.EK));this.P5.AZ(A.aaL(A.fl.Af));this.P5.Cr(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdQ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARR={Ib:null,A3N:null,Cq:null,Y:null,Ay:
null,A4t:0,Init:function(aArg){A.zV([this,this.ABy],this.Ib,0);A.zV([this,this.Bg_
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AuE],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABy],this);},Bb:function(E){var A3i=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A3i)A.abo([this,this.A8V,this.Bbx],0);},DE:
function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case
7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x415);
if((Fi===5)&&!X){var ALh=this.AV;while(!X){ALh=this.QJ(ALh,2,0x415);if(!!ALh)X=this.
QJ(ALh,Fi,0x415);else break;}}if(!!X)this.Bb(X);var GZ=(C.Wo.isPrototypeOf(B=this.
AV)?B:null);if(!!GZ)this.A4t=(C.Wo.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4t=0;A.pe([this,this.MT],this);},A1W:function(Eh){var EQ=A._GetAutoObject(C.DP).
Bdg(Eh,this.A3N);this.J(EQ,0);},Ao5:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HP(AdM);
}},ABy:function(G){this.Ao5();var O;var CB=A._GetAutoObject(C.Pn).Na();for(O=0;O<
CB;O=O+1){var Tj=A._GetAutoObject(C.Pn).OI(O);this.A1W(Tj);}A.pe([this,this.Bg_]
,this);A.pe([this,this.BqI],this);A.pe([this,this.AuE],this);},BqI:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Wo.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},AuE:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wo.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATQ(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATQ(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATQ(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((
B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},Bg_:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wo.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pn).NZ(Aa.Action)&&A._GetAutoObject(C.
DP).A48(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A4t===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MT],this);},MT:function(G){var B;this.Y.Vz(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARR;this.H(AX2);this.Cq.Filter=147;this.Y.A0(0xB);this.Y.H(AX3);this.Y.JW(9);this.
Ay.A0(0xA);this.Ay.H(AX4);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.
DE];this.Cq.D1=[this,this.DE];this.Y.Em=[this,this.Fk];this.Ib=A._GetAutoObject(
C.Pn);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ib)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fs={Ek:null,AL:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fs;this.N.Ar(false);this.Ek.H(BD);this.Ek.Ar(false
);this.AL.H(Ff);this.AL.L(A.jb.Aeb);this.Text.H(BD);this.Text.R(AX5);this.Text.L(
0xFF000000);this.Ap.H(O7);this.Ap.L(A.jb.Text);this.J(this.Ek,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cw(A.aaL(A.ach.AeD));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADl));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ek._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ek._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.AaU={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},I2:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FS=A.jb.Aeb;var GY=A.jb.CT;if(this.Hl){FS=A.jb.Text;GY=A.jb.
Bm;}if(!this.LK){this.Background.L(A.jb.CT);this.V.L(A.jb.CJ);}else if(this.Qv){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KJ){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.Hx.L(A.
jb.CT);this.H5.L(A.jb.CT);},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(C.CG.
isPrototypeOf(B=this.Dz.Cj)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.AZ(A.aaL(
A.fl.Bh));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));else CA.R(Xg);CA.H(A.
abK(CA.M,[this.Dz.We,(B=this.Dz.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.AaU;this.Dz.AFs(170);this.Dz.N4(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajk={C_:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hn(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FS=A.jb.Aeb;var GY=A.jb.CT;if(this.Hl){FS=A.jb.Text;
GY=A.jb.Bm;}if(!this.LK){this.Background.L(A.jb.CT);this.V.L(A.jb.CJ);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KJ){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ajk;this.C_.H(AX6);this.C_.Cv(1);this.J(this.C_,0);this.C_.Ax(A.aaL(A.ach.Aju)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C_._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C_._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AL6={Y:null,RO:null,Ty:null
,Tz:null,TA:null,AdP:null,XP:null,Vt:null,Vu:null,AaT:null,Ay:null,Init:function(
aArg){this.Bb(this.RO);},DE:function(G){C.Fs.DE.call(this,G);this.MT(this);},I2:
function(G){this.Bgq(this);},Lp:function(){if(!this.BP){this.BP=A._NewObject(C.N
,0);this.BP.CE=[this,this.Bgq];this.BP.Cf=null;this.BP.Ca=null;this.BP.CR(A.jV);
this.BP.Cw(null);this.BP.C2(A.aaL(A.ach.YA));}return this.BP;},ABb:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XP.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XP.Q))A._GetAutoObject(C.AutoActions).J(this.XP.Q);if(!!this.Vt.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vt.Q))A._GetAutoObject(C.AutoActions
).J(this.Vt.Q);if(!!this.Vu.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vu.
Q))A._GetAutoObject(C.AutoActions).J(this.Vu.Q);if(!!this.AaT.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaT.Q))A._GetAutoObject(C.AutoActions).J(this.AaT.Q
);A._GetAutoObject(C.AutoActions).Ci();},Bgq:function(G){if(this.BAj()===true){this.
ABb();this.AaH(this);}else A._GetAutoObject(A.Device.Device).A3(27,true,A.jV,0,null
);},BAj:function(){return(!!this.XP.C7(this.XP.Q)||!!this.Vt.C7(this.Vt.Q))||!!this.
Vu.C7(this.Vu.Q);},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.
Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},MT:function(G){var B;this.
Y.Vz(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true
,null,null);},BBq:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XP.AtE(this);this.Vt.AtE(this);this.Vu.AtE(this);this.AaT.AtE(this);}
,_Init:function(aArg){C.Fs._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.AaU._Init.call(this.RO={I:this},0);C.AaU._Init.call(this.Ty={I:this},0);C.
AaU._Init.call(this.Tz={I:this},0);C.AaU._Init.call(this.TA={I:this},0);C.Avb._Init.
call(this.AdP={I:this},0);C.AutoAction._Init.call(this.XP={I:this},0);C.AutoAction.
_Init.call(this.Vt={I:this},0);C.AutoAction._Init.call(this.Vu={I:this},0);C.AutoAction.
_Init.call(this.AaT={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AL6;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.TB));this.Y.H(L5);this.Y.JW(1);this.
RO.H(Ah3);this.RO.Ar(true);this.RO.Aj(true);this.RO.T(A._GetAutoObject(A.Device.
Helper).MI(A.aaR(A.acf.Ajj),O9,AH$));this.Ty.H(U1);this.Ty.Ar(true);this.Ty.Aj(true
);this.Ty.T(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.Ajj),O9,AIa));this.
Tz.H(Aah);this.Tz.Ar(true);this.Tz.Aj(true);this.Tz.T(A._GetAutoObject(A.Device.
Helper).MI(A.aaR(A.acf.Ajj),O9,Ayu));this.TA.H(Ali);this.TA.Ar(true);this.TA.Aj(
true);this.TA.T(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.Ajj),O9,AIb));this.
AdP.H(Aor);this.AdP.Aj(true);this.AdP.T(A.aaR(A.acf.A$u));this.Vt.Index=1;this.Vu.
Index=2;this.AaT.Index=3;this.Ay.H(It);this.J(this.Y,0);this.J(this.RO,0);this.J(
this.Ty,0);this.J(this.Tz,0);this.J(this.TA,0);this.J(this.AdP,0);this.J(this.Ay
,0);this.Y.Em=[this,this.Fk];this.RO.Zu(A.aaL(A.fl.H2));this.RO.Zv(A.aaL(A.fl.H2
));this.RO.Au([B=this.XP,B.B$,B.Cb]);this.RO.CK(this.XP);this.Ty.Zu(A.aaL(A.fl.H2
));this.Ty.Zv(A.aaL(A.fl.H2));this.Ty.Au([B=this.Vt,B.B$,B.Cb]);this.Ty.CK(this.
Vt);this.Tz.Zu(A.aaL(A.fl.H2));this.Tz.Zv(A.aaL(A.fl.H2));this.Tz.Au([B=this.Vu,
B.B$,B.Cb]);this.Tz.CK(this.Vu);this.TA.Zu(A.aaL(A.fl.H2));this.TA.Zv(A.aaL(A.fl.
H2));this.TA.Au([B=this.AaT,B.B$,B.Cb]);this.TA.CK(this.AaT);this.AdP.AR=[this,this.
BBq];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Y._Done();this.
RO._Done();this.Ty._Done();this.Tz._Done();this.TA._Done();this.AdP._Done();this.
XP._Done();this.Vt._Done();this.Vu._Done();this.AaT._Done();this.Ay._Done();C.Fs.
_Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.Y._ReInit();this.
RO._ReInit();this.Ty._ReInit();this.Tz._ReInit();this.TA._ReInit();this.AdP._ReInit(
);this.XP._ReInit();this.Vt._ReInit();this.Vu._ReInit();this.AaT._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.TB));this.RO.T(A._GetAutoObject(A.Device.Helper
).MI(A.aaR(A.acf.Ajj),O9,AH$));this.Ty.T(A._GetAutoObject(A.Device.Helper).MI(A.
aaR(A.acf.Ajj),O9,AIa));this.Tz.T(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.
Ajj),O9,Ayu));this.TA.T(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.Ajj),O9
,AIb));this.AdP.T(A.aaR(A.acf.A$u));},_Mark:function(D){var B;C.Fs._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ty)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={B_:
A.abi(20,0,null),Du:function(){return 16;},C7:function(aIndex){if(aIndex>=20)return-
1;return this.B_.Get(aIndex);},DZ:function(A7){var O=0;while(O<20){if(this.B_.Get(
O)===A7)return O;O=O+1;}return-1;},H4:function(){var O=0;var max=-1;while(O<20){
if(this.B_.Get(O)>max)max=this.B_.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.B_=[]).__proto__=C.Cm.B_;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={Ib:null,Ac9:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AtE],this.Ac9,0);A.pe([this,this.
AtE],this);},Du:function(){return this.Ib.Na();},C7:function(aIndex){if(aIndex>=
this.Du())return-1;return this.Ib.OI(aIndex);},Gl:function(aIndex){return this.ActionToString.
BS(this.C7(aIndex));},DZ:function(A7){var O=0;while(O<this.Du()){if(this.Ib.OI(O
)===A7)return O;O=O+1;}return-1;},H4:function(){var O=0;var max=-1;while(O<this.
Du()){if(this.Ib.OI(O)>max)max=this.Ib.OI(O);O=O+1;}return max;},AtE:function(G){
this.Q=this.Ac9.OI(this.Index);A.abo([this,this.B$,this.Cb],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ib=A._GetAutoObject(C.AuX);this.Ac9=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ib)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AMa={AtB:0,Init:function(aArg
){var B;A.zX([this,this.BeW],[B=A._GetAutoObject(A.Device.Device),B.A8B,B.Bbi],0
);A.zX([this,this.BeT],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.A0r],0);A.pe([
this,this.BeW],this);A.pe([this,this.BeT],this);},Clear:function(){C.Vy.Clear.call(
this);this.AtB=0;},Ci:function(){A._GetAutoObject(A.Device.Device).ArF(this.AtB);
A._GetAutoObject(A.Device.Device).ArG(this.toString());},BeW:function(G){this.AtB=
A._GetAutoObject(A.Device.Device).Pn;A.we(this,0);},BeT:function(G){this.E3(A._GetAutoObject(
A.Device.Device).AuJ);A.we(this,0);},NZ:function(Eh){if((this.AtB&(((B=Eh)<0)?B+
0x100000000:B))===(((B=Eh)<0)?B+0x100000000:B))return true;return false;},AUM:function(
Eh){this.AtB=this.AtB|(((B=Eh)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vy._Init.
call(this,aArg);this.__proto__=C.AMa;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pn={_Init:function(){C.AMa._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AMb={Vw:null,Ay:null,Y:null,JS:null,CP:function(
){this.AiL(this);},Init:function(aArg){A.zV([this,this.AiL],this.Vw,0);A.pe([this
,this.AiL],this);},DE:function(G){C.Fs.DE.call(this,G);this.MT(this);},Lp:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.Ew];this.BP.Cf=[
this,this.A3u];this.BP.Ca=[this,this.A3Z];this.BP.C3(A.aaL(A.ach.Are));this.BP.Cw(
A.aaL(A.ach.Aq8));this.BP.C2(A.aaL(A.ach.YA));}return this.BP;},Ew:function(G){if(
this.By$()>0){this.ABb();this.AaH(this);}else A._GetAutoObject(A.Device.Device).
A3(28,true,A.jV,0,null);},AiL:function(G){this.Ao5();var O;for(O=0;O<this.Vw.Na(
);O=O+1){var Tj=A._GetAutoObject(C.Pn).OI(O);this.A1z(Tj);}this.J(this.JS,0);A.aaS([
this,this.MT],this);},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]
);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},MT:function(G){var
B;this.Y.Vz(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.
AV,true,null,null);},A1z:function(Ha){var Azd=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Si,0);Aa.T(Azd.BS(Ha));Aa.Aj(true);Aa.G6=Ha;Aa.A_p(this.
Vw.NZ(Ha));this.J(Aa,0);this.ZF(Aa);},Ao5:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HP(
AdM);}},ABb:function(){var B;this.Vw.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JS)){var Aa=(C.Si.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vw.J(Aa.G6);if(Aa.ASK())this.Vw.AUM(Aa.G6);}else A.ab5(
"%s",Atc);}X=X.Ah;}this.Vw.Ci();},By$:function(){var B;var A4u=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JS)){var
Aa=(C.Si.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASK())A4u=A4u+1;}else A.ab5("%s"
,Atc);}X=X.Ah;}return A4u;},A3u:function(G){var B;var Aa=(C.Si.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAs=(C.Si.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAs){this.
AhE(AAs,Aa);A.pe([this,this.MT],this);}}},A3Z:function(G){var B;var Aa=(C.Si.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAZ=(C.Si.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAZ
){this.AhE(Aa,AAZ);A.pe([this,this.MT],this);}}},AqL:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiL],this);},_Init:function(
aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Avb._Init.call(this.JS={I:this},0);this.__proto__=C.AMb;
this.H(Qc);this.Text.R(A.aaR(A.acf.AEm));this.Ay.H(It);this.Y.H(L5);this.Y.JW(1);
this.JS.H(AIc);this.JS.Aj(true);this.JS.T(A.aaR(A.acf.AqL));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JS,0);this.Y.Em=[this,this.Fk];this.JS.AR=[this,this.AqL
];this.Vw=A._GetAutoObject(C.Pn);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Ay._Done();this.Y._Done();this.JS._Done();C.Fs._Done.call(this);},_ReInit:
function(){C.Fs._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JS._ReInit(
);this.Text.R(A.aaR(A.acf.AEm));this.JS.T(A.aaR(A.acf.AqL));this.CP();},_Mark:function(
D){var B;C.Fs._Mark.call(this,D);if((B=this.Vw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Si={G6:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hn(10);},Bl:function(aSize){C.Uf.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mq.M[0]));},Ai:function(Ae){var B;C.Uf.Ai.call(this,Ae);var Hf=((Ae&0x10
)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.
Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.L(FS);this.V.L(A.
jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);
}this.LK=Hf;this.KJ=Fw;this.Qv=GE;},I2:function(G){this.A3X(this);},A3X:function(
G){this.AE_(!this.AmD);},A_p:function(E){this.AE_(E);},ASK:function(){return this.
AmD;},_Init:function(aArg){C.Uf._Init.call(this,aArg);this.__proto__=C.Si;this.Mq.
H(AX7);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vy={CB:0,
Ib:A.abi(17,0,null),OI:function(HA){return this.Ib.Get(HA);},Na:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ib.Set(O,0);this.CB=0;},J:function(
Eh){if(this.CB>=17)A.ab5("%s",AId);else{this.Ib.Set(this.CB,Eh);this.CB=this.CB+
1;}},Ci:function(){},E3:function(AcX){var AJq=AcX.indexOf(String.fromCharCode(0x2C
),0);var A1X=A.jV;var O=0;this.CB=0;while(O<17)if(AcX===A.jV){this.Ib.Set(O,0);O++;
}else{if(AJq===-1){A1X=AcX;AcX=A.jV;}else{A1X=A.abV(AcX,AJq);AcX=A.ab1(AcX,0,AJq+
1);}var Tj=A.abZ(A1X,0,10)|0;if(this.AD1(Tj)){this.Ib.Set(this.CB,Tj);this.CB=this.
CB+1;O++;}AJq=AcX.indexOf(String.fromCharCode(0x2C),0);}if(AcX!==A.jV)A.ab5("%s"
,AX8);},toString:function(){var A2$=(((B=this.Ib.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A2$=(A2$+AIe)+(((B=this.Ib.Get(O))<0)?B+0x100000000:
B).toFixed();return A2$;},AxA:function(HA,Eh){if(HA>=this.CB){A.ab5("%s",((((AX9+
HA.toFixed())+AX_)+this.CB.toFixed())+AX$)+AYa);return;}this.Ib.Set(HA,Eh);},Contains:
function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(this.Ib.Get(O)===Eh)return true;return false;
},AD1:function(Eh){return true;},DZ:function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(
this.Ib.Get(O)===Eh)return O;return-1;},_Init:function(aArg){(this.Ib=[]).__proto__=
C.Vy.Ib;this.__proto__=C.Vy;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AMT={Init:function(aArg){var B;A.zX([this,this.Be6],[B=A._GetAutoObject(A.Device.
Device),B.A8M,B.Bbq],0);A.pe([this,this.Be6],this);},Ci:function(){A._GetAutoObject(
A.Device.Device).Akv(this.toString());},AD1:function(Eh){switch(Eh){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Be6:function(
G){this.E3(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.Vy._Init.call(this,aArg);this.__proto__=C.AMT;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AMT._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Wo={Vv:null,KA:null,A7y:A.jV,Action:0,A4_:false,A$f:false,A$Z:false,Bl:function(
aSize){C.Fo.Bl.call(this,aSize);this.Q3.H(this.Mu.M);this.OH.H(this.Q3.M);},Ai:function(
Ae){C.Fo.Ai.call(this,Ae);if(!this.LK){this.KA.T3.L(A.jb.Am4);this.KA.QL.Z(true);
this.KA.QL.L(A.jb.ARd);}else if(this.Qv){this.KA.T3.L(A.jb.Bm);this.KA.QL.Z(false
);}else if(this.KJ){this.KA.T3.L(A.jb.Bm);this.KA.QL.Z(false);}else{this.KA.T3.L(
A.jb.Text);this.KA.QL.Z(true);this.KA.QL.L(A.jb.CT);}},Bme:function(E){if(this.Action===
E)return;this.Action=E;},Bnl:function(E){if(this.A7y===E)return;this.A7y=E;this.
Vv.Text.R(E);},ATQ:function(E){if(this.A$Z===E)return;this.A$Z=E;this.KA.Bn8(!this.
KA.AVa);},AFJ:function(E){if(this.A$f===E)return;this.A$f=E;this.KA.Z(!this.KA.Fq(
));},A9R:function(E){if(this.A4_===E)return;this.A4_=E;this.Vv.Z(E);},_Init:function(
aArg){C.Fo._Init.call(this,aArg);C.Vv._Init.call(this.Vv={I:this},0);C.KA._Init.
call(this.KA={I:this},0);this.__proto__=C.Wo;this.H(AYb);this.Background.H(AYc);
this.G_.Ar(false);this.G_.Z(false);this.Vv.H(AYd);this.Vv.Z(false);this.KA.H(AYe
);this.KA.Z(false);this.J(this.Vv,0);this.J(this.KA,0);this.Mu.Ax(A.aaL(A.ach.ANp
));},_Done:function(){this.__proto__=C.Fo;this.Vv._Done();this.KA._Done();C.Fo._Done.
call(this);},_ReInit:function(){C.Fo._ReInit.call(this);this.Vv._ReInit();this.KA.
_ReInit();},_Mark:function(D){var B;C.Fo._Mark.call(this,D);if((B=this.Vv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.Vv={AL:null,Text:null,BU:null,Init:function(
aArg){this.Text.H(this.M);this.BU.H(this.M);this.AL.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BU._Init.call(this.BU={I:this},0);this.__proto__=
C.Vv;this.AL.H(AYf);this.AL.L(A.jb.BjW);this.H(AYg);this.Text.H(AYh);this.Text.L(
A.jb.Text);this.BU.H(AYi);this.BU.Nn(1);this.BU.L(A.jb.Text);this.J(this.AL,0);this.
J(this.Text,0);this.J(this.BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AL._Done();this.Text._Done();this.BU._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AL._ReInit();this.Text._ReInit();this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.KA={QL:null
,T3:null,AVa:false,Bn8:function(E){if(this.AVa===E)return;this.AVa=E;if(E){this.
T3.Ax(A.aaL(A.ach.ACE));this.QL.Ax(A.aaL(A.ach.ACE));}else{this.T3.Ax(A.aaL(A.ach.
AqF));this.QL.Ax(A.aaL(A.ach.AqF));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QL={I:this},0);A.acg.Ap._Init.call(this.T3={I:this
},0);this.__proto__=C.KA;this.H(Ayv);this.QL.H(Ayv);this.QL.Cv(1);this.T3.H(Ayv);
this.T3.Cv(0);this.J(this.QL,0);this.J(this.T3,0);this.QL.Ax(A.aaL(A.ach.AqF));this.
T3.Ax(A.aaL(A.ach.AqF));},_Done:function(){this.__proto__=A.Core.P;this.QL._Done(
);this.T3._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QL._ReInit();this.T3._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T3).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASd={
Ge:null,Cc:null,Dp:null,Dj:null,Kv:null,Zl:10,Aq5:0,AEx:0,ASr:0,Azc:false,LX:false
,Bc9:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Lj(
))A._GetAutoObject(A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).
An.HK().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(
A.Device.Helper).Aqk(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAG],this.
Db.Q,0);A.zX([this,this.BA$],this.Dp.Q,0);A.zX([this,this.ABw],this.Dj.Q,0);A.zX([
this,this.ABw],this.Dj.HH.Q,0);A.zX([this,this.ABw],[this,this.ASR,this.AFH],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A9J,B.BbU],0);A.zX([this
,this.BfE],this.Cc.Q,0);A.pe([this,this.AAG],this);A.pe([this,this.GH],this);A.pe([
this,this.ABw],this);A.pe([this,this.BfE],this);},CC:function(G){if(!this.Azc){this.
Azc=true;A.pe([this,this.AcT],this);}else C.HZ.CC.call(this,G);},Agh:function(G){
this.ASr=this.Zl;this.Bdf(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.E6();A._GetAutoObject(C.A8).FB();},Auq:function(){this.N.CR(A.jV);this.N.C3(
A.aaL(A.ach.ADK));this.N.Ca=[this,this.AyY];},AAB:function(G){A._GetAutoObject(C.
A8).Cd(55);},AFH:function(E){if(this.Zl===E)return;this.Zl=E;A.abo([this,this.ASR
,this.AFH],0);},Bdf:function(G){var F;if(!this.Zl||(this.Bc9===true)){A._GetAutoObject(
A.Device.Device).A3(24,false,CQ,0,null);if(this.AEx===1)A._GetAutoObject(A.Device.
Device).A3(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A3(23,
true,this.AEx.toFixed(),2000,null);this.Ew(this);return;}this.Ge.Gr();this.Ge.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Ge.N3(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Ge.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Ge.JX(A._GetAutoObject(A.Device.Helper).W.Gender);this.Ge.Nk(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Ge.PW(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Ge.SK(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alt=A._GetAutoObject(
A.Device.Helper).A1R(this.Ge,(F=this.Dj.H0.Hu,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alt)this.Ai1();else{A._GetAutoObject(A.Device.Helper).AKq(
this.Ge,Alt,(F=this.Dj.H0.Hu,F[1].call(F[0])),this.Zl-1,[this,this.ApJ]);A._GetAutoObject(
A.Device.Device).A3(24,false,CQ,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am6())this.C$.Z(true);else this.C$.Z(false);if(this.LX){this.Dp.
Z(false);this.Cc.T(A.aaR(A.acf.ACL));this.Cc.AFa(A.aaL(A.ach.Afe));}else{this.Dp.
Z(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.AFa(null);}if((this.Y.Bjv(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JK(this.Y.TT(this.AV,0x1));this.Am();
},ATl:function(E){if(this.Aq5===E)return;this.Aq5=E;A.abo([this,this.A8Z,this.ATl
],0);},ABw:function(G){var F;var AKc=(F=this.Dj.Q,F[1].call(F[0]));var AAj=-1;switch((
F=this.Dj.H0.Hu,F[1].call(F[0]))){case 0:AAj=AKc+((F=A._GetAutoObject(A.Device.Helper
).BdN(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zl-1));break;case 1:AAj=(AKc+this.
Zl)-1;break;case 3:case 2:case 5:case 4:switch(this.Dj.HH.AC.Q){case 0:AAj=(AKc+
this.Zl)-1;break;case 1:AAj=(AKc-this.Zl)+1;break;default:throw new Error(AYj+this.
Dj.HH.AC.Q.toFixed());}break;default:throw new Error(AYk+this.Dj.HH.AC.Q.toFixed(
));}this.ATl(AAj);},BA$:function(G){A.pe([this,this.GH],this);A.pe([this,this.At$
],this);},AAG:function(G){A._GetAutoObject(A.Device.Helper).AVJ(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LX);A.pe([this,this.ABw],this);},ApJ:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.ApD();else switch((F=this.Dj.H0.Hu,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JK(this.Dj);break;case 0:this.JK(this.Dp
);break;case 1:this.JK(this.Cc);break;default:throw new Error(Ayw+(F=this.Dj.H0.
Hu,F[1].call(F[0])).toFixed());}break;case 25:this.JK(this.Cc);break;case 47:if(
As.PopupState===7)this.ApD();else{this.JK(this.Dj);this.JK(this.Cc);}break;case 43:{
this.JK(this.Dj);this.JK(this.Dp);}break;case 42:{this.JK(this.Dj);this.JK(this.
Cc);}break;case 41:break;default:A.ab5("%s%e",Atd,As.Id);}},Ai1:function(){this.
Ge.Ci(A._GetAutoObject(A.Device.Device).An);this.AEx=this.AEx+1;if(A._GetAutoObject(
A.Device.Helper).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lj()){A._GetAutoObject(
A.Device.Device).A3(24,false,U2,0,null);A._GetAutoObject(A.Device.Device).A3(50,
true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),0,null);}else{var L$=A.
_GetAutoObject(A.Device.Device).An.LV(0,this.Ge.Id);A._GetAutoObject(A.Device.Device
).SR(L$);var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(this.Ge.
Id);B1.OnSetBodyWeight(this.KM);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApD();},ApD:function(){var B;var F,Ct;if(!!(F=this.Cc.
Q,F[1].call(F[0]))){(F=this.Cc.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LX)(
Ct=this.Dp.Q,Ct[2].call(Ct[0],(F=this.Cc.Q,F[1].call(F[0]))));}if(!this.LX)(Ct=this.
Dp.Q,Ct[2].call(Ct[0],A._GetAutoObject(A.Device.Helper).Baf(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjO(),this.Dp.AjQ())));var IZ=null;switch((F=this.Dj.H0.Hu,F[1].call(
F[0]))){case 3:IZ=[B=A._GetAutoObject(A.Device.Device),B.Awj,B.AyQ];break;case 2:
IZ=[B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyR];break;case 4:case 5:IZ=[B=A.
_GetAutoObject(A.Device.Device),B.Ant,B.AoB];break;default:;}if(!!IZ){switch((F=
this.Dj.Kp.VU,F[1].call(F[0]))){case 1:IZ[2].call(IZ[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IZ[2].call(IZ[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dj.Q,F[2].call(F[0],IZ[1].call(IZ[0])));
}var XL=100-((this.Zl/this.ASr)*100);A._GetAutoObject(A.Device.Device).A3(24,true
,(((this.ASr.toFixed()+Ate)+(XL|0).toFixed())+Ate)+(F=this.Dj.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBj]);this.AFH(this.Zl-1);A.aaS([this,this.Bdf],null);},BBj:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.Bc9=true;},ApK:function(G){var F;C.HZ.ApK.call(this,G);var AoY=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoY=A._GetAutoObject(A.Device.
Device).AdT;break;case 1:AoY=730;break;default:A.ab5("%s%e",Alf,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmJ(AoY));(F=this.C$.Q,F[2].call(
F[0],this.C$.AnY));switch(this.BZ.AC.Q){case 0:{this.Kv.Jd(A.aaR(A.acf.ANk));this.
Kv.IR(A.aaR(A.acf.ANl));}break;case 1:{this.Kv.Jd(A.aaR(A.acf.Bic));this.Kv.IR(A.
aaR(A.acf.Bid));}break;case 2:{this.Kv.Jd(A.aaR(A.acf.Bkj));this.Kv.IR(A.aaR(A.acf.
Bkk));}break;default:throw new Error(Alf);}},Ae4:function(E){if(this.LX===E)return;
this.LX=E;A.abo([this,this.Awm,this.Ae4],0);},At$:function(G){var F,Ct,Tf;this.Ae4(((
F=this.Cc.Q,F[1].call(F[0]))===(Ct=this.Dp.Q,Ct[1].call(Ct[0])))&&!!(Tf=this.Cc.
Q,Tf[1].call(Tf[0])));A.pe([this,this.GH],this);},BfE:function(G){A.pe([this,this.
At$],this);},ASR:function(){return this.Zl;},A8Z:function(){return this.Aq5;},Awm:
function(){return this.LX;},_Init:function(aArg){C.HZ._Init.call(this,aArg);C.Av6.
_Init.call(this.Cc={I:this},0);C.Rb._Init.call(this.Dp={I:this},0);C.AGO._Init.call(
this.Dj={I:this},0);C.AUY._Init.call(this.Kv={I:this},0);this.__proto__=C.ASd;var
B;this.Dr(C.ADn);this.Cc.H(Aoo);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.
Cc.ArO(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asy));this.Cc.ArP(A.
aaR(A.acf.Akn));this.Dp.H(AYl);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Ul));this.
Dp.Ar4(false);this.Dj.H(AYm);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.A7l));this.Dj.
Bx(0);this.Kv.H(AYn);this.Kv.Aj(true);this.Kv.T(A.aaR(A.acf.A8s));this.Kv.Ga(1);
this.Kv.EV(500);this.Kv.IR(A.aaR(A.acf.ANl));this.Kv.Jd(A.aaR(A.acf.ANk));this.Kv.
A_g(A.aaR(A.acf.Aq5)+A.aaR(A.acf.Colon));this.J(this.Cc,0);this.J(this.Dp,0);this.
J(this.Dj,0);this.J(this.Kv,0);this.Ge=A._NewObject(A.Device.Animal,0);this.Cc.AR=[
this,this.AcT];this.Cc.L1([this,this.AcT]);this.Cc.L4(A.aaL(A.ach.Afe));this.Cc.
Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArC,B.PW]);this.Cc.OQ([B=A._GetAutoObject(
A.Device.Device),B.Un,B.U4]);this.Cc.PU([B=A._GetAutoObject(A.Device.Device),B.Uo
,B.U5]);this.Cc.Uq([B=A._GetAutoObject(A.Device.Device),B.Anq,B.AoA]);this.Cc.Ae4([
this,this.Awm,this.Ae4]);this.Dp.Gs([this,this.D_,this.GS]);this.Dp.L1([this,this.
AcT]);this.Dp.L4(A.aaL(A.ach.Afe));this.Dp.Us([B=this.Gender.Animal,B.WC,B.JX]);
this.Dp.OQ([B=A._GetAutoObject(A.Device.Device),B.Un,B.U4]);this.Dp.PU([B=A._GetAutoObject(
A.Device.Device),B.Uo,B.U5]);this.Dp.Uq([B=A._GetAutoObject(A.Device.Device),B.Anq
,B.AoA]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Anu,B.Nk]);this.Dp.
Anw([B=this.AnimalType.Animal,B.PT,B.EC]);this.Dj.Gs([this,this.D_,this.GS]);this.
Dj.L1([B=this.Dj,B.FV]);this.Dj.L4(A.aaL(A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArD,B.SK]);this.Dj.A9S(A._GetAutoObject(A.Device.Helper).W);
this.Kv.Au([this,this.ASR,this.AFH]);this.Kv.BmJ([this,this.A8Z,this.ATl]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HZ;this.Cc._Done();this.Dp._Done(
);this.Dj._Done();this.Kv._Done();C.HZ._Done.call(this);},_ReInit:function(){C.HZ.
_ReInit.call(this);this.Cc._ReInit();this.Dp._ReInit();this.Dj._ReInit();this.Kv.
_ReInit();this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArO(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Asy));this.Cc.ArP(A.aaR(A.acf.Akn));this.Dp.T(A.aaR(A.acf.
Ul));this.Dj.T(A.aaR(A.acf.A7l));this.Kv.T(A.aaR(A.acf.A8s));this.Kv.IR(A.aaR(A.
acf.ANl));this.Kv.Jd(A.aaR(A.acf.ANk));this.Kv.A_g(A.aaR(A.acf.Aq5)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HZ._Mark.call(this,D);if((B=this.Ge)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUq={BW:null,RatingMode:null,Lp:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Ca=null;this.BP.Cf=null;this.BP.CE=[this,this.AaH];this.BP.CR(A.jV
);this.BP.Cw(null);this.BP.C2(A.aaL(A.ach.YA));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUq;var B;this.
H(Qc);this.BW.H(Ata);this.BW.T(A.aaR(A.acf.A$9));this.J(this.BW,0);this.BW.Au([B=
this.RatingMode,B.B$,B.Cb]);this.BW.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$9));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bge],[B=A._GetAutoObject(A.Device.Device),B.ASV,B.A0C],0);A.pe([this,this.Bge],this
);},Du:function(){return 2;},Gl:function(aIndex){return this.RatingModeToString.
BS(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Aw8(E);},Bge:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.B_.Set(0,0);this.B_.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANE={WU:
function(G){C.Amv.WU.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aq0()){
A._GetAutoObject(A.Device.Helper).W.AkC(false);A._GetAutoObject(A.Device.Helper).
W.Ci(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amv._Init.call(
this,aArg);this.__proto__=C.ANE;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hi={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hi;},_className:"Application::BaseItem"
};C.AVY={BW:null,WeightRecordingMode:null,Lp:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.Ca=null;this.BP.Cf=null;this.BP.CE=[this,this.AaH];this.BP.CR(A.jV
);this.BP.Cw(null);this.BP.C2(A.aaL(A.ach.YA));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVY;var B;this.H(Qc);this.BW.H(Ata);this.BW.T(A.aaR(A.acf.AsW));this.BW.EV(1);
this.J(this.BW,0);this.BW.Au([B=this.WeightRecordingMode,B.B$,B.Cb]);this.BW.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.T(A.aaR(A.acf.AsW));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Du:function(){return 2;},Gl:function(aIndex){return this.
WeightRecordingModeToString.BS(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Axi(E);},Init:function(aArg){var B;A.zX([this
,this.Bhk],[B=A._GetAutoObject(A.Device.Device),B.A9I,B.BbT],0);A.pe([this,this.
Bhk],this);},Bhk:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.B_.Set(0,0);this.B_.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa4={BooleanToAutoOnOff:null,Gl:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BS(aIndex);},_Init:function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa4;},_Done:function(
){this.__proto__=C.Gd;this.BooleanToAutoOnOff._Done();C.Gd._Done.call(this);},_ReInit:
function(){C.Gd._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gd._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxY={A7z:function(){var B;this.
AxB(1);this.Jw(0,3);this.VH(0,0,(B=this.M)[3]-B[1]);this.A5b(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A5b(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VP(0);},_Init:
function(aArg){C.ABJ._Init.call(this,aArg);this.__proto__=C.AxY;},_className:"Application::Triangle"
};C.AT3={Y:null,Init:function(aArg){this.Byw(this);},Byv:function(Qe){var Aa=A._NewObject(
C.ANL,0);Aa.H(BD);Aa.T(Qe);Aa.Aj(true);Aa.Ar(false);Aa.Bi(true);this.J(Aa,0);this.
AtD(this);},AtD:function(G){var B;var AlB=1;var A22=0;var X=this.Y.Ah;var Cy=null;
var K8=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OZ.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALk=(B=Cy.V.B6.A7c(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.Ms.isPrototypeOf(X)?X:null))ALk=ALk+20;if(A22<ALk)A22=ALk;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(AlB*28)));AlB=AlB+1;}else{K8=(A.acg.C8.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K8){var Di=((B=this.M)[3]-B[1])-((AlB-1)*28);K8.DM([this.
M[0],K8.Et[1]]);K8.DM([K8.Et[0],Di]);K8.DC([this.M[0]+120,K8.ED[1]]);K8.DC([K8.ED[
0],Di]);}}X=X.Ah;}this.BB3(A22,28);},BB3:function(aWidth,BxF){var B;var X=this.Y.
Ah;var Cy=null;var K8=null;aWidth=aWidth+20;if(aWidth>(C.Asz[0]-10))aWidth=C.Asz[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OZ.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A6(0x14);Cy.V.Text.Hn(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,BxF));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K8=(
A.acg.C8.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K8){K8.DM([this.M[
2]-aWidth,K8.Et[1]]);K8.DC([this.M[2],K8.ED[1]]);}}X=X.Ah;}},Byw:function(G){var
Aa=A._GetAutoObject(C.BR).AqP;while(!!Aa){if(!!(C.Axp.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axp.isPrototypeOf(Aa)?Aa:null);this.Byu(EF.DK,EF.AR,EF.Bw,EF.ARl);}else
if(!!(C.Axr.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axr.isPrototypeOf(Aa)?Aa:null);
this.ByB(EF.DK,EF.AR,EF.Bw,EF.WA,EF.WW);}else if(!!(C.ZB.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.ZB.isPrototypeOf(Aa)?Aa:null);this.Byt(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkI.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkI.isPrototypeOf(Aa)?Aa:null);this.
Byv(EF.DK);}else if(!!(C.AGf.isPrototypeOf(Aa)?Aa:null))this.ByC();Aa=Aa.My;}A._GetAutoObject(
C.BR).Clear();A.pe([this,this.AtD],this);},Byt:function(Qe,Ac4,Ah7){var Aa=A._NewObject(
C.Ms,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(Ah7);Aa.Bi(true);this.J(Aa
,0);this.AtD(this);},ByC:function(){var K8=A._NewObject(A.acg.C8,0);K8.L(A.jb.Bm
);K8.Aj(true);K8.Nn(3);this.J(K8,0);this.AtD(this);},Byu:function(Qe,Ac4,Ah7,A1a
){var Aa=A._NewObject(C.AmH,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(Ah7
);Aa.Bi(true);Aa.Au(A1a);this.J(Aa,0);this.AtD(this);},ByB:function(Qe,Ac4,Ah7,A3h
,Agr){var Aa=A._NewObject(C.ANK,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(
Ah7);Aa.Bi(true);Aa.BnJ(A3h);Aa.AFV(Agr);this.J(Aa,0);this.AtD(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AT3;this.H(Qc);this.Y.H(Qc);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afj={_Init:
function(){A.acl.Afj._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A$b={AqP:null,Ahn:null,Ml:function(Qe){var EF=A._NewObject(
C.AkI,0);EF.DK=Qe;this.J(EF);},Clear:function(){this.AqP=null;this.Ahn=null;},Fz:
function(){var K8=A._NewObject(C.AGf,0);this.J(K8);},J:function(Bcv){if(!this.AqP
){this.AqP=Bcv;this.Ahn=this.AqP;}else{this.Ahn.My=Bcv;this.Ahn=this.Ahn.My;}},TC:
function(Qe,Ac4){var EF=A._NewObject(C.ZB,0);EF.DK=Qe;EF.AR=Ac4;this.J(EF);},Bht:
function(Qe,Ac4,A1a){var EF=A._NewObject(C.Axp,0);EF.DK=Qe;EF.AR=Ac4;EF.ARl=A1a;
this.J(EF);},AaV:function(Qe){var EF=A._NewObject(C.ZB,0);EF.DK=Qe;EF.Bw=false;this.
J(EF);},ABN:function(Qe,Ac4,A3h,Agr){var EF=A._NewObject(C.Axr,0);EF.DK=Qe;EF.AR=
Ac4;EF.WA=A3h;EF.WW=Agr;this.J(EF);},_Init:function(aArg){this.__proto__=C.A$b;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BR={_Init:function(){C.A$b._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axq={My:null,_Init:function(aArg){this.__proto__=
C.Axq;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.My)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOH={Amt:null,ArH:function(E){if(this.Amt===
E)return;if(!!this.Ab)this.Ab.ZF(this);if(!!this.Amt)this.AqH(this.Amt,A._GetAutoObject(
C.AsD),null,null,null,null,false);this.Amt=E;if(!!this.Amt)this.AkM(this.Amt,A._GetAutoObject(
C.AsD),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOH;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amt)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WJ={_Init:function(){C.AOH._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N5={Init:function(aArg){var C1=A._NewObject(C.AT4,0);C1.H(this.M);this.AkM(C1,A.
_GetAutoObject(C.AnW),null,A._GetAutoObject(C.AnW),A._GetAutoObject(C.AnW),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N5;this.H(Qc);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsD={_Init:function(){C.AU0._Init.call(this,0);this.ACJ=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AT4={AL:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.AT4;this.H(AIf);this.C4(0);this.AL.A0(0x3F);this.AL.H(AIf);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.P;this.AL.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUZ={Se:function(){var B;var Ao=(A.acl.Afb.isPrototypeOf(B=A.acl.Aen.Se.call(this
))?B:null);if(!Ao)throw new Error(As9);Ao.Cp.Cx=255;Ao.Cp.B2=0;return Ao;},Sd:function(
){var B;var Ao=(A.acl.Axo.isPrototypeOf(B=A.acl.Aen.Sd.call(this))?B:null);if(!Ao
)throw new Error(As9);Ao.E0.Cx=0;Ao.E0.B2=255;Ao.Dt=true;return Ao;},_Init:function(
aArg){A.acl.Aen._Init.call(this,aArg);this.__proto__=C.AUZ;},_className:"Application::ShadeOverlayTransition"
};C.AnW={_Init:function(){C.AUZ._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkV={AnY:0,A2l:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Ir.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BDa=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Ak$(BDa)+CQ)+A._GetAutoObject(A.acj.DU).Af4()
);else this.BT.R(A.aaR(A.acf.Akn));}},Kf:function(G){var B;var Bhh=(this.A2l===false
)&&(this.AM<=this.Gq);if(Bhh)this.Bx(this.AnY);this.A4S(this.AM,4);if(Bhh){this.
Bx(this.AM-this.Aj5);this.A2l=true;}C.Ir.Kf.call(this,G);},Ka:function(G){this.A4S(
this.AM,5);C.Ir.Ka.call(this,G);},Bx:function(E){this.A4S(E,4);E=(((E+((this.Aj5
/2)|0))/this.Aj5)|0)*this.Aj5;if(!E)this.A2l=false;C.Ir.Bx.call(this,E);},Ahv:function(
E){if(this.AnY===E)return;this.AnY=E;},A4S:function(Bxn,GA){this.ATo(A._GetAutoObject(
A.acj.DU).BdR(Bxn,GA));},_Init:function(aArg){C.Ir._Init.call(this,aArg);this.__proto__=
C.AkV;this.H(K1);this.AnY=this.Gq;this.J2(this.H5,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEA={None:0,Left:1,BE9:2,Right:3};C.Amx={Xt:
null,FE:null,Ek:null,Background:null,Ani:null,Gc:null,KQ:A.jV,AEf:null,Init:function(
aArg){var B;A.zV([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A30],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.
LQ],this);A.pe([this,this.A30],this);this.Bb(this.Ek);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},Lp:function(){if(!this.BP)this.BP=A._NewObject(
C.N,0);return this.BP;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xt);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKW();},Agg:function(G){var Aa=(C.ACf.isPrototypeOf(G)?G:null);var Hs;if(!!Aa)Hs=
Aa.Hs;else Hs=this.Gc.FN();if(Hs>=A._GetAutoObject(A.Device.Device).An.B9())return;
A._GetAutoObject(A.Device.Helper).G8(Hs);A.pe([this,this.AaH],this);},AKW:function(
){},Aga:function(G){this.Am();},A3R:function(G){if(this.Gc.FN()<(A._GetAutoObject(
A.Device.Device).An.B9()-1))this.Gc.GT(this.Gc.FN()+1);},A3S:function(G){if(this.
Gc.FN()>0)this.Gc.GT(this.Gc.FN()-1);},DJ:function(G){var Gh=A._GetAutoObject(A.
Device.Device).An.B9();var MX=this.BP;if(!MX)return;MX.C2(A.aaL(A.ach.AeA));MX.CE=[
this,this.AaH];if(Gh<=0){MX.Cw(null);MX.C3(null);MX.Cf=null;MX.Ca=null;MX.WN=false;
MX.ZE=false;}else if(Gh===1){MX.Cw(null);MX.C3(A.aaL(A.ach.AeB));MX.Cf=null;MX.Ca=[
this,this.Agg];MX.WN=false;MX.ZE=false;}else{MX.Cw(A.aaL(A.ach.Aq8));MX.C3(A.aaL(
A.ach.Are));MX.Cf=[this,this.A3R];MX.Ca=[this,this.A3S];MX.WN=true;MX.ZE=true;}}
,LQ:function(G){this.BgE(this);this.Xt=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKW();},BnB:function(E){if(this.AEf===E)return;this.AEf=E;A.pe([this,this.BA8
],this);},BA8:function(G){this.BgE(this);},BgE:function(G){var B;if(!!this.FE)this.
HP(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(this.AEf,0))?B:null);if(!
!this.FE){this.FE.H(AYo);this.J(this.FE,0);}},A30:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DL(1,4
))this.Gc.Dl(A.aaR(A.acf.ASl));else this.Gc.Dl(this.KQ);},Dl:function(E){if(this.
KQ===E)return;this.KQ=E;A.pe([this,this.A30],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Ani={I:this},0);C.Gc._Init.call(
this.Gc={I:this},0);this.__proto__=C.Amx;this.H(Qc);this.Ek.H(BD);this.Ek.A_j(A.
jb.CT);this.Ek.A_k(A.jb.Text);this.Background.H(Ff);this.Background.L(A.jb.Bpf);
this.Ani.H(AIg);this.Ani.L(A.jb.CT);this.Gc.H(AIg);this.Gc.N4(C.ACf);this.AEf=C.
APM;this.KQ=A.aaR(A.acf.Av_);this.J(this.Ek,0);this.J(this.Background,0);this.J(
this.Ani,0);this.J(this.Gc,0);this.Ek.AR=[this,this.Agg];this.Ek.Ab3(A._NewObject(
C.Yv,0));this.Gc.Zs(A._GetAutoObject(A.Device.Device).An);this.Gc.Zw([this,this.
Agg]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ek._Done(
);this.Background._Done();this.Ani._Done();this.Gc._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ek._ReInit();this.
Background._ReInit();this.Ani._ReInit();this.Gc._ReInit();this.Dl(A.aaR(A.acf.Av_
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xt)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACf={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.Dg(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EC(this.AX.AmW(
Ad,14));this.DS.AFc(this.AX.I8(Ad,13));this.DS.Ae3(this.AX.H3(Ad,8));this.DS.Uu(
this.AX.H3(Ad,11));this.DS.Ae7(this.AX.H3(Ad,12));this.DS.Ae9(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.ACf;this.
H(Oe);this.AP.L(A.jb.Bc);this.DS.H(AYp);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.Yv={Q:null,Init:function(aArg){var
B;this.AA7(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft]);},AET:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Nq(FilterCriterion
);var Ai5=this.Akq();if(Ai5>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai5,false);Filter.CX(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeZ(false);},BwN:function(s){this.AET(
s);},AA7:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);if(!!FilterCriterion
)Filter.Nq(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BG2:function(s){
this.AA7(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,this.
AcW],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwQ(-1);return;}var Ay_=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DL(1,4))?B:null);if(!Ay_){this.AW.AwQ(0);this.AW.AeZ(true);}else
this.AW.AwQ(Ay_.A5);},AcW:function(s){this.C5(s);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.Yv;this.AW.AwQ(0);this.AW.Dk=[this,this.BwN];this.
Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqK={BirthType:null,EaseOfDelivery:null,Cc:null,Ef:null,AbI:null,G7:null,Cn:
null,AbG:null,AM4:false,Init:function(aArg){this.AM4=A._GetAutoObject(A.Device.Helper
).W.Arh();if(this.AM4)this.AeY(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeY(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cc.
L1([this,this.AcT]);this.Cc.L4(A.aaL(A.ach.Afe));this.Cc.AR=[this,this.AcT];}this.
Ef.Ar4(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Cc.Q,0);A.pe([this,this.GH],this);},Agh:function(G
){if(((this.Ef.Asn===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARp(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rj(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ci(
A._GetAutoObject(A.Device.Device).An);if(this.KM>0){if(this.AM4){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LV(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KM);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYq,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KM);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ci(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A8).FB();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A8).FB();},Auq:function(
){this.N.CR(A.jV);this.N.C3(A.aaL(A.ach.Am3));this.N.Ca=[this,this.AyY];},AAB:function(
G){A._GetAutoObject(C.A8).Cd(32);},GH:function(G){var F;var Jp=(F=this.Ef.Q,F[1].
call(F[0]));var ABt=(F=this.Cc.Q,F[1].call(F[0]));var A4N=true;if(!!Jp&&(ABt===Jp
))A4N=false;A._GetAutoObject(A.Device.Helper).J3(this.Cc,A4N);this.Ef.BmB(!A4N);
},_Init:function(aArg){C.HZ._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Av6._Init.
call(this.Cc={I:this},0);C.Rb._Init.call(this.Ef={I:this},0);C.Aco._Init.call(this.
AbI={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.SS._Init.call(this.Cn={I:this
},0);C.BW._Init.call(this.AbG={I:this},0);this.__proto__=C.AqK;var B;this.Cc.H(Ah2
);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArO(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Asy));this.Cc.ArP(A.aaR(A.acf.Akn));this.Ef.H(Ah2);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Ul));this.AbI.H(AYr);this.AbI.Aj(true);this.
AbI.T(A.aaR(A.acf.GN));this.G7.H(Ah2);this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Ars
));this.Cn.H(Ah2);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFN(true);
this.AbG.H(Ah2);this.AbG.Aj(true);this.AbG.T(A.aaR(A.acf.AgK));this.J(this.Cc,-1
);this.J(this.Ef,-1);this.J(this.AbI,-1);this.J(this.G7,-1);this.J(this.Cn,-1);this.
J(this.AbG,-1);this.BirthType.L2(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
L2(A._GetAutoObject(A.Device.Helper).W);this.Cc.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArC,B.PW]);this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Nk]);this.AbI.Gs([this,this.D_,this.GS]);this.AbI.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SK]);this.G7.Au([B=this.BirthType,
B.B$,B.Cb]);this.G7.CK(this.BirthType);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.
L1([B=this.Cn,B.FV]);this.Cn.L4(A.aaL(A.ach.Edit));this.Cn.Ab7([B=A._GetAutoObject(
A.Device.Helper).W,B.Awg,B.Q6]);this.AbG.Au([B=this.EaseOfDelivery,B.B$,B.Cb]);this.
AbG.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HZ;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cc._Done();this.Ef._Done(
);this.AbI._Done();this.G7._Done();this.Cn._Done();this.AbG._Done();C.HZ._Done.call(
this);},_ReInit:function(){C.HZ._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cc._ReInit();this.Ef._ReInit();this.AbI._ReInit();
this.G7._ReInit();this.Cn._ReInit();this.AbG._ReInit();this.Cc.T(A.aaR(A.acf.Ak6
));this.Cc.ArO(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asy));this.
Cc.ArP(A.aaR(A.acf.Akn));this.Ef.T(A.aaR(A.acf.Ul));this.AbI.T(A.aaR(A.acf.GN));
this.G7.T(A.aaR(A.acf.Ars));this.Cn.T(A.aaR(A.acf.Aeg));this.AbG.T(A.aaR(A.acf.AgK
));},_Mark:function(D){var B;C.HZ._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbG
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Aco={FM:null,AW:null,A_:0,I2:function(G){C.Ds.I2.call(this,G);if(!this.A_)this.
FV(this);else this.He(this);},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hx.Z(false
);this.H5.Z(false);if(this.A_===1){this.Bb(this.AW);if(this.Hl){this.AW.FO(A.jb.
CJ);this.Background.L(A.jb.CT);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CT);this.
Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.AW.FO(A.jb.CJ);
else this.AW.FO(A.jb.CT);this.Bb(null);}},Bx:function(E){var F;var BO=this.AM;C.
Ds.Bx.call(this,E);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Um,this.Bbu],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:this.FM.AkR((F=
this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0
);},Ex:function(EO){var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.
A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.A_=1;if(this.A_===1)this.AW.
SQ(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.ARj._Init.call(this.AW={I:this},0);this.__proto__=C.Aco;this.H(UZ);this.EV(999999
);this.V.R(Atf);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H5.Z(false);this.AW.H(AYs
);this.AW.ATw(6);this.J(this.AW,0);this.AW.Au([this,this.Um,this.Bbu]);this.FM=A.
_NewObject(C.Aeu,0);},_Done:function(){this.__proto__=C.Ds;this.AW._Done();C.Ds.
_Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Du:function(){return 4;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuP={Y:null,QR:null,N0:null,Ee:null,PJ:null,PF:null,PG:null,Ay:null,Gd:null,
ReasonOfLeaving:null,AhC:null,M8:0,AmL:false,ACj:true,AOA:false,Asi:false,Init:function(
aArg){A.zX([this,this.A9P],[this,this.A9f,this.ATz],0);this.Ahs(A._GetAutoObject(
A.Device.Helper).W.AhW(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9P],this);},DE:function(G){
var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;
case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al3:function(G
){A._GetAutoObject(C.A8).FB();},ApO:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M8);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmL){A._GetAutoObject(A.Device.Helper).W.Ae5(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A7e(A._GetAutoObject(A.Device.Helper).Dv(),this.Asi);}A._GetAutoObject(A.Device.
Helper).W.AFM(this.ReasonOfLeaving.C7((F=this.N0.Q,F[1].call(F[0]))));if(this.ACj
)A._GetAutoObject(A.Device.Helper).W.PW(0);if(this.Asi)A._GetAutoObject(A.Device.
Helper).W.AwS(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);this.A$L();},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},Ahs:function(E){
if(this.M8===E)return;this.M8=E;},Anr:function(){return this.M8;},BfG:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.A8).FB();A._GetAutoObject(A.Device.Helper
).Ast();}},A9P:function(G){switch(this.Asi){case false:this.Ee.T(A.aaR(A.acf.AV0
));break;case true:this.Ee.T(A.aaR(A.acf.Brf));break;default:;}},ATz:function(E){
if(this.Asi===E)return;this.Asi=E;},A9f:function(){return this.Asi;},A$L:function(
){A._GetAutoObject(A.Device.Device).A3(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfG]);},Bm1:function(E){if(this.AOA===E)return;
this.AOA=E;},Blk:function(){return this.AOA;},Bmp:function(E){if(this.ACj===E)return;
this.ACj=E;},Bk_:function(){return this.ACj;},Bmz:function(E){if(this.AmL===E)return;
this.AmL=E;},Blg:function(){return this.AmL;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afn._Init.call(this.QR={I:this
},0);C.AsC._Init.call(this.N0={I:this},0);C.AkV._Init.call(this.Ee={I:this},0);C.
Afn._Init.call(this.PJ={I:this},0);C.Afn._Init.call(this.PF={I:this},0);C.Afn._Init.
call(this.PG={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gd._Init.call(this.
Gd={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
AhC._Init.call(this.AhC={I:this},0);this.__proto__=C.AuP;var B;this.N.Z(true);this.
N.CR(A.aaR(A.acf.Unregister));this.Dr(C.IL);this.Y.H(Ff);this.Y.JW(1);this.QR.H(
Aah);this.QR.Aj(true);this.QR.T(A.aaR(A.acf.AmL));this.QR.Bi(true);this.QR.Zz(false
);this.QR.Ga(-1);this.QR.EV(1);this.N0.H(U1);this.N0.Aj(true);this.N0.T(A.aaR(A.
acf.ReasonOfLeaving));this.N0.Bi(true);this.N0.Zz(false);this.Ee.H(Ah1);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AV0));this.Ee.Bi(false);this.Ee.Ga(1000);this.Ee.
EV(999000);this.PJ.H(U1);this.PJ.Aj(true);this.PJ.T(A.aaR(A.acf.A5o));this.PJ.Bi(
true);this.PJ.Zz(false);this.PJ.Bx(1);this.PJ.Ga(-1);this.PJ.EV(1);this.PF.H(Aah
);this.PF.Aj(true);this.PF.T(A.aaR(A.acf.A5p));this.PF.Bi(true);this.PF.Zz(false
);this.PF.Bx(1);this.PF.Ga(-1);this.PF.EV(1);this.PG.H(U1);this.PG.Aj(true);this.
PG.T(A.aaR(A.acf.A51));this.PG.Bi(true);this.PG.Zz(false);this.PG.Bx(1);this.PG.
Ga(-1);this.PG.EV(1);this.Ay.H(Ayq);this.Gd.Au(0);this.J(this.Y,0);this.J(this.QR
,0);this.J(this.N0,0);this.J(this.Ee,0);this.J(this.PJ,0);this.J(this.PF,0);this.
J(this.PG,0);this.J(this.Ay,0);this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk
];this.QR.Au([B=this.Gd,B.B$,B.Cb]);this.QR.CK(this.Gd);this.QR.AkD([this,this.Blg
,this.Bmz]);this.N0.Gs([this,this.D_,this.GS]);this.N0.L1([B=this.N0,B.FV]);this.
N0.L4(A.aaL(A.ach.Edit));this.N0.Au([B=this.ReasonOfLeaving,B.B$,B.Cb]);this.N0.
CK(this.ReasonOfLeaving);this.N0.Any(this.AhC);this.Ee.Au([this,this.Anr,this.Ahs
]);this.PJ.Au([B=this.Gd,B.B$,B.Cb]);this.PJ.CK(this.Gd);this.PJ.AkD([this,this.
Blk,this.Bm1]);this.PF.Au([B=this.Gd,B.B$,B.Cb]);this.PF.CK(this.Gd);this.PF.AkD([
this,this.A9f,this.ATz]);this.PG.Au([B=this.Gd,B.B$,B.Cb]);this.PG.CK(this.Gd);this.
PG.AkD([this,this.Bk_,this.Bmp]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QR._Done();this.N0._Done();this.Ee._Done();this.PJ._Done(
);this.PF._Done();this.PG._Done();this.Ay._Done();this.Gd._Done();this.ReasonOfLeaving.
_Done();this.AhC._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QR._ReInit();this.N0._ReInit();this.Ee._ReInit(
);this.PJ._ReInit();this.PF._ReInit();this.PG._ReInit();this.Ay._ReInit();this.Gd.
_ReInit();this.ReasonOfLeaving._ReInit();this.AhC._ReInit();this.N.CR(A.aaR(A.acf.
Unregister));this.QR.T(A.aaR(A.acf.AmL));this.N0.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AV0));this.PJ.T(A.aaR(A.acf.A5o));this.PF.T(A.aaR(A.acf.A5p
));this.PG.T(A.aaR(A.acf.A51));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhC)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUY={AjM:null,Py:null,Avd:AYt,Bl:function(aSize){C.Ir.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Hx.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H5.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Ir.Ai.call(this,Ae);this.Py.L(this.V.AQ);if(!!this.AjM){if((
F=this.AjM,F[1].call(F[0]))===-1)this.Py.R(this.Avd+AIh);else this.Py.R((this.Avd+
CQ)+(F=this.AjM,F[1].call(F[0])).toFixed());}else this.Py.R(this.Avd);},A3z:function(
G){this.Am();},BmJ:function(E){if(A.aaZ(this.AjM,E))return;if(!!this.AjM)A.z$([this
,this.A3z],this.AjM,0);this.AjM=E;if(!!E)A.zX([this,this.A3z],E,0);if(!!E)A.pe([
this,this.A3z],this);},A_g:function(E){if(this.Avd===E)return;this.Avd=E;this.Am(
);},_Init:function(aArg){C.Ir._Init.call(this,aArg);C.CG._Init.call(this.Py={I:this
},0);this.__proto__=C.AUY;this.H(AYu);this.V.H(AYv);this.V.A6(0x12);this.Py.H(AYw
);this.Py.A6(0x12);this.Py.L(A.jb.Bm);this.J(this.Py,0);this.Py.S(A.aaL(A.fl.Af)
);this.Py.AZ(A.aaL(A.fl.Ak));this.Py.Cr(null);},_Done:function(){this.__proto__=
C.Ir;this.Py._Done();C.Ir._Done.call(this);},_ReInit:function(){C.Ir._ReInit.call(
this);this.Py._ReInit();this.Py.S(A.aaL(A.fl.Af));this.Py.AZ(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Ir._Mark.call(this,D);if((B=this.AjM)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Py)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMk={Y:null,JR:null,Su:null,Ay:null,Aqy:2500,ANB:24,DE:function(G){var B;var
Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:
Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al3:function(G){A._GetAutoObject(
C.A8).FB();},ApO:function(G){},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1)
)[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},Bmt:function(
E){if(this.Aqy===E)return;this.Aqy=E;},Bla:function(){return this.Aqy;},Bmu:function(
E){if(this.ANB===E)return;this.ANB=E;},Blb:function(){return this.ANB;},Bk0:function(
G){var F,Ct;this.JR.BT.L(this.JR.V.AQ);if(!!this.JR.Q)this.JR.BT.R((((String.fromCharCode(((
F=this.JR.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Alc)+String.fromCharCode(((
Ct=this.JR.Q,Ct[1].call(Ct[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JR.
AHe);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ir._Init.call(this.JR={I:this},0);C.Ir._Init.call(this.Su={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMk;this.N.Z(true);this.
Dr(C.IL);this.Y.H(Ff);this.Y.JW(1);this.JR.H(Ah1);this.JR.Aj(true);this.JR.T(A.aaR(
A.acf.Aqy));this.JR.Bi(false);this.JR.Ga(0);this.JR.EV(5000);this.JR.IR(A.aaR(A.
acf.Af8));this.JR.Jd(A.aaR(A.acf.Af8));this.JR.ATo(100);this.Su.H(U1);this.Su.Aj(
true);this.Su.T(A.aaR(A.acf.A$l));this.Su.Bi(true);this.Su.Bx(24);this.Su.Ga(10);
this.Su.EV(33);this.Su.IR(AYx);this.Ay.H(Ayq);this.J(this.Y,0);this.J(this.JR,0);
this.J(this.Su,0);this.J(this.Ay,0);this.N.C2(A.aaL(A.ach.YA));this.Y.Em=[this,this.
Fk];this.JR.Au([this,this.Bla,this.Bmt]);this.JR.A_Q([this,this.Bk0]);this.Su.Au([
this,this.Blb,this.Bmu]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JR._Done();this.Su._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JR._ReInit();this.Su._ReInit();this.
Ay._ReInit();this.JR.T(A.aaR(A.acf.Aqy));this.JR.IR(A.aaR(A.acf.Af8));this.JR.Jd(
A.aaR(A.acf.Af8));this.Su.T(A.aaR(A.acf.A$l));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Aru={EaseOfDelivery:null,BirthType:null,Cc:null,Dp:null,Dj:null,Cn:null,Ee:null
,G7:null,Lk:null,M8:0,LX:false,Init:function(aArg){A.zX([this,this.GH],this.Cc.Q
,0);A.zX([this,this.GH],this.Dp.Q,0);A.zX([this,this.AAG],this.Db.Q,0);A.zX([this
,this.Bfc],this.Cn.Dm,0);A.zX([this,this.Be8],this.C$.Q,0);A.zX([this,this.At$],
this.Cc.Q,0);A.zX([this,this.At$],this.Dp.Q,0);A.pe([this,this.AAG],this);A.pe([
this,this.GH],this);A.pe([this,this.Bfc],this);A.pe([this,this.Be8],this);A.pe([
this,this.At$],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.E6();A.
_GetAutoObject(C.A8).FB();},Agh:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhI
){var AlN=A._GetAutoObject(A.Device.Helper).AhI.AOY();A._GetAutoObject(A.Device.
Helper).W.Ab4(AlN);A._GetAutoObject(A.Device.Helper).W.AnD(AlN);}var Alt=A._GetAutoObject(
A.Device.Helper).A1R(A._GetAutoObject(A.Device.Helper).W,(F=this.Dj.H0.Hu,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alt){this.Ai1();A.pe([this,this.
Bw$],this);}else A._GetAutoObject(A.Device.Helper).AKq(A._GetAutoObject(A.Device.
Helper).W,Alt,(F=this.Dj.H0.Hu,F[1].call(F[0])),0,[this,this.ApJ]);},Auq:function(
){this.N.CR(A.jV);this.N.C3(A.aaL(A.ach.ADU));this.N.Ca=[this,this.AyY];},Ai1:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);var L$=A._GetAutoObject(A.Device.Device).An.LV(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SR(L$);var Bd7=false;if(A._GetAutoObject(
A.Device.Helper).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lj()){Bd7=true;A.
_GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.
HK().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KM);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7F()&&(Bd7===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M8);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}}var IZ=null;switch((F=this.
Dj.H0.Hu,F[1].call(F[0]))){case 3:IZ=[B=A._GetAutoObject(A.Device.Device),B.Awj,
B.AyQ];break;case 2:IZ=[B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyR];break;case
4:case 5:IZ=[B=A._GetAutoObject(A.Device.Device),B.Ant,B.AoB];break;default:;}if(
!!IZ)switch((F=this.Dj.Kp.VU,F[1].call(F[0]))){case 1:IZ[2].call(IZ[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IZ[2].call(IZ[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).Baf(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjO(),this.Dp.AjQ());},Ap7:function(G){A.
_GetAutoObject(C.A8).FB();},Bw$:function(s){this.Ap7(s);},AAB:function(G){A._GetAutoObject(
C.A8).Cd(49);},Ahs:function(E){if(this.M8===E)return;this.M8=E;A.abo([this,this.
Anr,this.Ahs],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am6())this.
C$.Z(true);else this.C$.Z(false);if(A._GetAutoObject(A.Device.Helper).A7F())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LX){this.Dp.Z(false);this.Cc.T(A.aaR(A.
acf.ACL));this.Cc.AFa(A.aaL(A.ach.Afe));}else{this.Dp.Z(true);this.Cc.T(A.aaR(A.
acf.Ak6));this.Cc.AFa(null);}},AAG:function(G){A._GetAutoObject(A.Device.Helper).
AVJ(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LX);},Bfc:function(G){A.pe([this,this.Bg8],this);},Be8:function(G){A.pe([this
,this.Bg8],this);},Bg8:function(G){var F,Ct,Tf;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahv(A._GetAutoObject(A.Device.Helper
).AhW(A._GetAutoObject(A.Device.Helper).Abr((F=this.BZ.Q,F[1].call(F[0]))),(Ct=this.
Cn.Dm,Ct[1].call(Ct[0])),2,(Tf=this.BZ.Q,Tf[1].call(Tf[0]))));break;case 2:this.
Ee.Ahv(A._GetAutoObject(A.Device.Helper).AhW(this.KM,(F=this.Cn.Dm,F[1].call(F[0
])),2,(Ct=this.BZ.Q,Ct[1].call(Ct[0]))));break;default:;}},ApJ:function(G){var F;
var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id
){case 22:case 21:switch((F=this.Dj.H0.Hu,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JK(this.Dj);break;case 0:this.JK(this.Dp);break;case 1:this.JK(this.
Cc);break;default:throw new Error(Ayw+(F=this.Dj.H0.Hu,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JK(this.Dj);this.JK(this.Dp);}break;case 25:case 42:{this.
JK(this.Dj);this.JK(this.Cc);}break;case 41:break;default:A.ab5("%s%e",Atd,As.Id
);}},ApK:function(G){var F;C.HZ.ApK.call(this,G);var AoY=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoY=A._GetAutoObject(A.Device.Device).AdT;break;case
1:AoY=730;break;default:A.ab5("%s%e",Alf,(F=this.BZ.Q,F[1].call(F[0])));}(F=this.
Cn.Dm,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmJ(AoY)));(F=this.C$.Q,F[2].call(F[0],this.C$.AnY));this.Ee.Ahv(A._GetAutoObject(
A.Device.Helper).W.AhW(1));},Ae4:function(E){if(this.LX===E)return;this.LX=E;A.abo([
this,this.Awm,this.Ae4],0);},At$:function(G){var F,Ct,Tf;this.Ae4(((F=this.Cc.Q,
F[1].call(F[0]))===(Ct=this.Dp.Q,Ct[1].call(Ct[0])))&&!!(Tf=this.Cc.Q,Tf[1].call(
Tf[0])));A.pe([this,this.GH],this);},Anr:function(){return this.M8;},Awm:function(
){return this.LX;},_Init:function(aArg){C.HZ._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Av6._Init.call(this.Cc={I:this},0);C.Rb._Init.call(this.Dp={I:this}
,0);C.AGO._Init.call(this.Dj={I:this},0);C.SS._Init.call(this.Cn={I:this},0);C.AkV.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.BW._Init.call(
this.Lk={I:this},0);this.__proto__=C.Aru;var B;this.Dr(C.ADm);this.CH.H(AcR);this.
Cc.H(Aoo);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArO(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asy));this.Cc.ArP(A.aaR(A.acf.Akn));this.
Dp.H(Aoo);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Ul));this.Dp.Ar4(false);this.Dj.
H(AYy);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.GN));this.Dj.Bx(0);this.Cn.H(AcR);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFN(true);this.Ee.H(AcR);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M8));this.Ee.Ga(1000);this.Ee.EV(999000);this.
G7.H(AcR);this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Ars));this.Lk.H(AcR);this.Lk.Aj(
true);this.Lk.T(A.aaR(A.acf.AgK));this.J(this.Cc,-3);this.J(this.Dp,-3);this.J(this.
Dj,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G7,-1);this.J(this.Lk,-
1);this.EaseOfDelivery.L2(A._GetAutoObject(A.Device.Helper).W);this.BirthType.L2(
A._GetAutoObject(A.Device.Helper).W);this.Cc.AR=[this,this.AcT];this.Cc.L1([this
,this.AcT]);this.Cc.L4(A.aaL(A.ach.Afe));this.Cc.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArC,B.PW]);this.Cc.OQ([B=A._GetAutoObject(A.Device.Device),B.Un,B.U4
]);this.Cc.PU([B=A._GetAutoObject(A.Device.Device),B.Uo,B.U5]);this.Cc.Uq([B=A._GetAutoObject(
A.Device.Device),B.Anq,B.AoA]);this.Cc.Ae4([this,this.Awm,this.Ae4]);this.Dp.Gs([
this,this.D_,this.GS]);this.Dp.L1([this,this.AcT]);this.Dp.L4(A.aaL(A.ach.Afe));
this.Dp.Us([B=this.Gender.Animal,B.WC,B.JX]);this.Dp.OQ([B=A._GetAutoObject(A.Device.
Device),B.Un,B.U4]);this.Dp.PU([B=A._GetAutoObject(A.Device.Device),B.Uo,B.U5]);
this.Dp.Uq([B=A._GetAutoObject(A.Device.Device),B.Anq,B.AoA]);this.Dp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Nk]);this.Dp.Anw([B=this.AnimalType.Animal,B.PT,B.EC]
);this.Dj.Gs([this,this.D_,this.GS]);this.Dj.L1([B=this.Dj,B.FV]);this.Dj.L4(A.aaL(
A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SK]);this.
Dj.A9S(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gs([this,this.D_,this.GS]);this.
Cn.L1([B=this.Cn,B.FV]);this.Cn.L4(A.aaL(A.ach.Edit));this.Cn.Ab7([B=A._GetAutoObject(
A.Device.Helper).W,B.Awg,B.Q6]);this.Ee.Au([this,this.Anr,this.Ahs]);this.G7.Au([
B=this.BirthType,B.B$,B.Cb]);this.G7.CK(this.BirthType);this.Lk.Au([B=this.EaseOfDelivery
,B.B$,B.Cb]);this.Lk.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HZ;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cc._Done(
);this.Dp._Done();this.Dj._Done();this.Cn._Done();this.Ee._Done();this.G7._Done(
);this.Lk._Done();C.HZ._Done.call(this);},_ReInit:function(){C.HZ._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cc._ReInit();this.
Dp._ReInit();this.Dj._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G7._ReInit(
);this.Lk._ReInit();this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArO(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asy));this.Cc.ArP(A.aaR(A.acf.Akn));this.Dp.T(
A.aaR(A.acf.Ul));this.Dj.T(A.aaR(A.acf.GN));this.Cn.T(A.aaR(A.acf.Aeg));this.Ee.
T(A.aaR(A.acf.M8));this.G7.T(A.aaR(A.acf.Ars));this.Lk.T(A.aaR(A.acf.AgK));},_Mark:
function(D){var B;C.HZ._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHm={H8:null,AhN:null,AgV:null,AhO:null,AgW:null,AnimalType:null,Background:
null,N1:null,Rl:null,V:null,TY:null,YD:null,AbD:null,PR:null,DK:A.jV,AGQ:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An8();this.
AxZ();},An8:function(){var F,Ct;var LF=0;var Amh=0;var AlG=0;var Ic=0;if((((!!this.
AhN&&!!this.AhO)&&!!this.AgV)&&!!this.AgW)&&!!this.AnimalType){Amh=(F=this.AhN,F[
1].call(F[0]));AlG=(F=this.AgV,F[1].call(F[0]));LF=A._GetAutoObject(A.Device.Helper
).Mb((F=this.AhO,F[1].call(F[0])),(Ct=this.AgW,Ct[1].call(Ct[0])));Ic=(F=this.AnimalType
,F[1].call(F[0]));}var K_=A.jb.Text;var Azg=A.jb.CT;if(!!LF){var ALE=A._GetAutoObject(
A.acj.DU).AlA(LF,Amh,AlG);Azg=A._GetAutoObject(A.acj.DU).AzV(ALE,Ic);K_=A._GetAutoObject(
A.acj.DU).AzX(ALE,Ic);}this.Background.L(Azg);this.TY.L(K_);this.Rl.L(K_);this.N1.
L(K_);this.AbD.L(K_);if(K_===A.jb.Bm)this.YD.L(K_);else this.YD.L(A.jb.CJ);this.
V.L(K_);this.PR.L(K_);},AxZ:function(){var F,Ct;var LF=0;var Amh=0;var AlG=0;if(((
!!this.AhN&&!!this.AhO)&&!!this.AgV)&&!!this.AgW){Amh=(F=this.AhN,F[1].call(F[0]
));AlG=(F=this.AgV,F[1].call(F[0]));LF=A._GetAutoObject(A.Device.Helper).Mb((F=this.
AhO,F[1].call(F[0])),(Ct=this.AgW,Ct[1].call(Ct[0])));}if(!!LF){var ALE=A._GetAutoObject(
A.acj.DU).AlA(LF,Amh,AlG);this.Rl.R(A._GetAutoObject(A.Device.Converter).S_(ALE,
2,true));this.N1.Z(true);this.Rl.Z(true);this.PR.Z(false);}else{this.N1.Z(false);
this.Rl.Z(false);this.PR.Z(true);}this.TY.R(this.BzL(AlG-Amh,LF));this.AbD.Z(this.
AGQ);this.YD.Z(this.AGQ);this.N1.R(A._GetAutoObject(A.acj.DU).Aaw());},BzL:function(
A1w,Ah8){var B;if(Ah8<0){A.ab5("%s",AYz);return A.jV;}var Iv=(AYA+A._GetAutoObject(
A.acj.DU).Af4())+CQ;var FW=A._GetAutoObject(A.Device.Converter).Ak$(A1w);if(!A1w
)FW=A.abU(FW,AYB,0);else if(A1w>0)FW=A.abU(FW,AIi,0);Iv=this.Bgm(Iv,AYC,FW);if(Ah8===
1)Iv=Iv+A.aaR(A.acf.BjS);else{Iv=Iv+A.aaR(A.acf.BjT);Iv=this.Bgm(Iv,AYD,Ah8.toFixed(
));}return Iv;},Bgm:function(aString,BcA,Bx$){if(aString===A.jV){A.ab5("%s",AYE);
return A.jV;}var A3f=aString.indexOf(BcA,0);if(A3f>=0){aString=A.ab1(aString,A3f
,BcA.length);aString=A.abU(aString,Bx$,A3f);}return aString;},ATO:function(E){if(
A.aaZ(this.AhN,E))return;if(!!this.AhN)A.z$([this,this.C5],this.AhN,0);this.AhN=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmG:function(
E){if(A.aaZ(this.AgV,E))return;if(!!this.AgV)A.z$([this,this.C5],this.AgV,0);this.
AgV=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},ATP:function(
E){if(A.aaZ(this.AhO,E))return;if(!!this.AhO)A.z$([this,this.C5],this.AhO,0);this.
AhO=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmH:function(
E){if(A.aaZ(this.AgW,E))return;if(!!this.AgW)A.z$([this,this.C5],this.AgW,0);this.
AgW=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_P:function(
E){if(this.AGQ===E)return;this.AGQ=E;this.Am();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C5],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.N1={I:this},0);A.acg.Text._Init.call(this.Rl={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.TY={I:this},0);A.acg.
Ap._Init.call(this.YD={I:this},0);A.acg.Ap._Init.call(this.AbD={I:this},0);C.CG.
_Init.call(this.PR={I:this},0);this.__proto__=C.AHm;this.H(AfE);this.Background.
A0(0x3F);this.Background.H(AfE);this.N1.H(AYF);this.N1.R(A._GetAutoObject(A.acj.
DU).Aaw());this.N1.A6(0x9);this.N1.L(A.jb.Text);this.Rl.H(AYG);this.Rl.A6(0x14);
this.Rl.R(A.aaR(A.acu.Akl));this.Rl.L(A.jb.Text);this.V.A0(0x1D);this.V.H(AYH);this.
V.R(A.aaR(A.acf.AuF));this.V.A6(0x12);this.V.L(A.jb.Text);this.TY.H(Aag);this.YD.
A0(0x14);this.YD.H(AIj);this.YD.Cv(1);this.AbD.A0(0x14);this.AbD.H(AIj);this.AbD.
Cv(0);this.PR.H(AYI);this.PR.R(A.aaR(A.acf.A47));this.J(this.Background,0);this.
J(this.N1,0);this.J(this.Rl,0);this.J(this.V,0);this.J(this.TY,0);this.J(this.YD
,0);this.J(this.AbD,0);this.J(this.PR,0);this.N1.S(A.aaL(A.fl.EK));this.N1.AZ(A.
aaL(A.fl.Af));this.N1.Cr(A.aaL(A.fl.HJ));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(
A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));this.TY.S(A.aaL(A.
fl.Af));this.TY.AZ(A.aaL(A.fl.Ak));this.TY.Cr(A.aaL(A.fl.Bh));this.YD.Ax(A.aaL(A.
ach.ABV));this.AbD.Ax(A.aaL(A.ach.ABV));this.H8=A._NewObject(A.Device.Rating,0);
this.PR.S(A.aaL(A.fl.Af));this.PR.AZ(A.aaL(A.fl.Ak));this.PR.Cr(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N1._Done(
);this.Rl._Done();this.V._Done();this.TY._Done();this.YD._Done();this.AbD._Done(
);this.PR._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N1._ReInit();this.Rl._ReInit();this.V.
_ReInit();this.TY._ReInit();this.YD._ReInit();this.AbD._ReInit();this.PR._ReInit(
);this.Rl.R(A.aaR(A.acu.Akl));this.V.R(A.aaR(A.acf.AuF));this.PR.R(A.aaR(A.acf.A47
));this.N1.S(A.aaL(A.fl.EK));this.N1.AZ(A.aaL(A.fl.Af));this.N1.Cr(A.aaL(A.fl.HJ
));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));
this.V.Cr(A.aaL(A.fl.Bh));this.TY.S(A.aaL(A.fl.Af));this.TY.AZ(A.aaL(A.fl.Ak));this.
TY.Cr(A.aaL(A.fl.Bh));this.PR.S(A.aaL(A.fl.Af));this.PR.AZ(A.aaL(A.fl.Ak));this.
PR.Cr(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhN)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgW)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AV1={Animal:null,Rating:null,Cq:null,AD:null,AY:
0,Hm:function(G){var B;if(!this.Animal||!this.Rating)return;var Gg=this.AD.G6;var
CA=(C.AHm.isPrototypeOf(B=this.AD.Cj)?B:null);if(!CA)return;CA.EC([B=this.Animal
,B.PT,B.EC]);CA.BmG([B=A._GetAutoObject(A.Device.Device),B.AER,B.AI3]);CA.BmH([B=
this.Rating,B.A9w,B.OnSetTimestamp]);switch(Gg%this.AY){case 1:{CA.ATO([B=this.Animal
,B.A87,B.AFt]);CA.ATP([B=this.Animal,B.A9x,B.AFX]);CA.T(A.aaR(A.acf.AuF));}break;
default:if(this.Animal.Arh()){CA.ATO([B=this.Animal,B.ASI,B.AwN]);CA.ATP([B=this.
Animal,B.ASZ,B.Axd]);CA.T(A.aaR(A.acf.AL2));}else{CA.ATO([B=this.Animal,B.ASI,B.
AwN]);CA.ATP([B=this.Animal,B.ASZ,B.Axd]);CA.T(A.aaR(A.acf.Bho));}}if(this.AY>1)
CA.A_P(true);else CA.A_P(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GO
]));},DE:function(G){if(this.AY>0)switch(this.Cq.CO){case 6:this.CE(this);break;
case 7:this.Ca(this);break;default:this.Cq.NM=true;}},L2:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.JA(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.JA(1);else{this.JA(2);this.AD.GT(1);this.
AD.HI(this.AD.Gt,true,null,null);}if(this.AY>0)this.AD.AbF(0,this.AY-1);},AkE:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbF(0,this.AY-1);
},CE:function(G){if(this.AD.Gt>0)this.AD.GT(this.AD.Gt-1);else this.AD.GT(this.AY-
1);this.AD.HI(this.AD.Gt,true,null,null);},Ca:function(G){if(this.AD.Gt<(this.AY-
1))this.AD.GT(this.AD.Gt+1);else this.AD.GT(0);this.AD.HI(this.AD.Gt,true,null,null
);},JA:function(E){if(this.AY===E)return;this.AY=E;this.AD.JA(this.AY);A.abo([this
,this.Arz,this.JA],0);},Arz:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AV1;this.H(AfE);this.Cq.Filter=147;this.
AD.A0(0x3F);this.AD.H(AfE);this.AD.N4(C.AHm);this.AD.Ae8(160);this.AD.GT(0);this.
AD.JA(2);this.J(this.AD,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.
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
A.jb.CT;GY=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CT);this.V.L(A.jb.CJ);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.LK=Hf;
this.KJ=Fw;this.Qv=GE;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(K1);this.V.H(BD);this.Zz(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeS={KN:null,GK:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KN.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KN.
L(this.V.AQ);},Init:function(aArg){},Ab3:function(E){if(this.GK===E)return;this.
GK=E;this.KN.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.call(
this.KN={I:this},0);this.__proto__=C.AeS;this.H(K1);this.Background.H(K1);this.V.
H(AcN);this.V.R(Ly);this.KN.H(IW);this.KN.R(AYJ);this.J(this.KN,0);this.V.S(A.aaL(
A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(null);this.KN.S(A.aaL(A.fl.Af));this.
KN.AZ(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KN._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.KN.S(A.aaL(
A.fl.Af));this.KN.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Av6={ACn:null,Q:null,A2:null,AF:null,Ik:null,LX:null,Ap:null,EM:null,AOd:A.jV
,AOe:A.jV,Bl:function(aSize){C.AeS.Bl.call(this,aSize);if(!this.ACn)this.KN.H([].
concat(0,this.KN.M.slice(1,4)));else this.KN.H([].concat(this.Ap.M[2],this.KN.M.
slice(1,4)));},Ai:function(Ae){var F,Ct,Tf;C.AeS.Ai.call(this,Ae);var Bc5=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apj)this.Ab3(this.AOd);else
this.Ab3(this.AOe);}else{this.Ab3(A._GetAutoObject(A.Device.Converter).Rj((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ik&&!!this.A2)&&!!this.AF)&&!!this.LX)&&(((F=this.
Ik,F[1].call(F[0]))===1)||(!(Ct=this.Ik,Ct[1].call(Ct[0]))&&(Tf=this.LX,Tf[1].call(
Tf[0])))))Bc5=true;}}this.EM.Z(Bc5);this.Ap.L(this.V.AQ);A.pe([this,this.Agc],this
);},C5:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},AFa:function(E){if(this.ACn===E)return;this.ACn=E;this.
Ap.Ax(E);this.BjZ();},OQ:function(E){if(A.aaZ(this.A2,E))return;if(!!this.A2)A.z$([
this,this.AaG],this.A2,0);this.A2=E;if(!!E)A.zX([this,this.AaG],E,0);if(!!E)A.pe([
this,this.AaG],this);},PU:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaI],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaI],E,0);if(!!E)
A.pe([this,this.AaI],this);},AaI:function(G){this.Am();},AaG:function(G){this.Am(
);},Uq:function(E){if(A.aaZ(this.Ik,E))return;if(!!this.Ik)A.z$([this,this.Al1],
this.Ik,0);this.Ik=E;if(!!E)A.zX([this,this.Al1],E,0);if(!!E)A.pe([this,this.Al1
],this);},Al1:function(G){this.Am();},Agc:function(G){var F,Ct;if((!this.Ik||!this.
A2)||!this.AF)return;var A2Y=this.KN.Afh([(this.KN.String.length-(F=this.AF,F[1].
call(F[0])))-(Ct=this.A2,Ct[1].call(Ct[0])),0]);var A4i=this.KN.Afh([this.KN.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABm=this.KN.Dd(0x0);this.EM.H([A2Y[0]-
1,ABm[1],A4i[0]+1,ABm[3]]);},ArO:function(E){if(this.AOd===E)return;this.AOd=E;this.
Am();},ArP:function(E){if(this.AOe===E)return;this.AOe=E;this.Am();},Ae4:function(
E){if(A.aaZ(this.LX,E))return;if(!!this.LX)A.z$([this,this.A3G],this.LX,0);this.
LX=E;if(!!E)A.zX([this,this.A3G],E,0);if(!!E)A.pe([this,this.A3G],this);},A3G:function(
G){this.Am();},_Init:function(aArg){C.AeS._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.Av6;
this.Ap.H(AhY);this.EM.H(AYK);this.EM.Nn(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KN.Q7([this,this.Agc]);},_Done:function(){this.__proto__=
C.AeS;this.Ap._Done();this.EM._Done();C.AeS._Done.call(this);},_ReInit:function(
){C.AeS._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeS._Mark.call(this,D);if((B=this.ACn)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ik)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ii:0,AaF:4,Bd$:false,Beh:true,Beg:false,Bda:true,Bd_:false
,Al6:function(G){C.Ra.Al6.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bd9(
)){this.Ii=A._GetAutoObject(A.Device.Helper).UD.Id;var AiA=A._GetAutoObject(A.Device.
Helper).ARr(this.Ii);if(AiA)A._GetAutoObject(A.Device.Device).A3(107,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.A3K]);else{this.AaF=A._GetAutoObject(
A.Device.Helper).ARs(this.Ii);var BeE=false;if((this.AaF===3)||(this.AaF===2))BeE=
A._GetAutoObject(A.Device.Helper).A7G(this.Ii,A._GetAutoObject(A.Device.Helper).
W);if(BeE)A._GetAutoObject(A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Ii),0,null);else switch(this.AaF){case 2:{var BM=A._GetAutoObject(
A.Device.Converter).AxX(this.Ii);A._GetAutoObject(A.Device.Device).A3(46,true,BM.
toFixed(),0,[this,this.A3K]);}break;case 3:case 1:case 0:case 4:this.A4y();break;
default:throw new Error(AIk+this.AaF.toFixed());}}}},Ew:function(G){A._GetAutoObject(
C.A8).FB();},AI4:function(s){this.Ew(s);},A4y:function(){if((this.AaF===3)||(this.
AaF===2)){if((this.Bda&&(A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(
A.Device.Helper).W.NaisId!==this.Ii)){A._GetAutoObject(A.Device.Device).A3(69,true
,A.jV,0,[this,this.A3K]);return;}else this.BCh();}if(this.Bd$)A._GetAutoObject(A.
Device.Helper).BoZ(this.Ii);A._GetAutoObject(A.Device.Helper).W.PW(this.Ii);this.
Bd_=true;this.BCj();this.Ew(this);},A3K:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A4y();break;case 107:switch(As.PopupState){case 7:{this.Bd$=true;this.A4y();}break;
case 8:this.Ew(this);break;default:;}break;case 69:if(As.PopupState===4)this.Ew(
this);break;default:A.ab5("%s%e",AIl,As.Id);}},BCh:function(){A._GetAutoObject(A.
Device.Helper).W.Nk(this.Ii);if(this.Beg&&(A._GetAutoObject(A.Device.Converter).
S3(this.Ii)===10)){var BcP=Math.trunc((this.Ii%1000000000000)/10000000000);if(!BcP&&(
A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper
).W.EC(0);else if((BcP===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2
))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BCj:function(){if(this.Beh){A._GetAutoObject(
A.Device.Helper).W.SK(A._GetAutoObject(A.Device.Helper).A5n(A._GetAutoObject(A.Device.
Device).Ak5,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device
).Ak5===1)A._GetAutoObject(A.Device.Helper).Bag();}},_Init:function(aArg){C.Ra._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Z(true);this.Dr(C.IL
);this.Number.R(A.aaR(A.acf.OV));this.Ji.H(AYL);this.IU.H(W9);this.AkG(1);this.N.
CE=[this,this.AI4];this.N.C2(A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.
call(this);this.Number.R(A.aaR(A.acf.OV));},_className:"Application::SetTransponderScreen"
};C.ADy={Go:null,Lo:null,Kw:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EB.Ai.call(this,Ae);this.Lo.R(A._GetAutoObject(A.acj.DU
).Af4());this.Kw.R(A._GetAutoObject(A.acj.DU).Aaw());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.
call(this.Lo={I:this},0);A.acg.Text._Init.call(this.Kw={I:this},0);this.__proto__=
C.ADy;this.Background.L(A.jb.Text);this.Go.H(AYM);this.Go.A6(0x11);this.Go.R(A.aaR(
A.acf.Date));this.Go.L(A.jb.Bm);this.Lo.H(AYN);this.Lo.A6(0x11);this.Lo.L(A.jb.Bm
);this.Kw.H(AYO);this.Kw.L(A.jb.Bm);this.J(this.Go,0);this.J(this.Lo,0);this.J(this.
Kw,0);this.Go.S(A.aaL(A.fl.Af));this.Lo.S(A.aaL(A.fl.Af));this.Kw.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Go._Done();this.Lo.
_Done();this.Kw._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Go._ReInit();this.Lo._ReInit();this.Kw._ReInit();this.Go.R(A.aaR(
A.acf.Date));this.Go.S(A.aaL(A.fl.Af));this.Lo.S(A.aaL(A.fl.Af));this.Kw.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHq={Mo:null,Hq:null,Ia:null,AP:null,A$:null,FW:0,Ic:0,AiO:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mo.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ia.H(this.Mo.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiO){this.Ia.R(Rp);this.Ia.L(A.jb.
Text);this.Mo.L(this.Background.AQ);}else{this.Ia.R(A._GetAutoObject(A.Device.Converter
).S_(this.FW,2,true));this.Ia.L(A._GetAutoObject(A.acj.DU).AzX(this.FW,this.Ic));
this.Mo.L(A._GetAutoObject(A.acj.DU).AzV(this.FW,this.Ic));}this.Hq.L(this.V.AQ);
},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hv(
Ad,6);var Al$=this.AX.CF(Ad,8);if(this.Hs>0){var Bzi=this.AX.Hv(this.Hs-1,6);var
BBY=this.AX.CF(this.Hs-1,8);var LF=A._GetAutoObject(A.Device.Helper).Mb(Bzi,AlD);
if(!!LF){this.AiO=false;this.FW=A._GetAutoObject(A.acj.DU).AlA(LF,BBY,Al$);}else{
this.AiO=true;this.FW=0;}}else{this.AiO=true;this.FW=0;}this.T(A._GetAutoObject(
A.acj.KO).AC0(AlD));this.Hq.R(A._GetAutoObject(A.Device.Converter).Ak$(Al$));this.
Ic=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mo={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ia={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AHq;this.V.H(O8);this.Mo.H(Atg);this.Hq.H(AIm);this.Hq.A6(0x12);this.Hq.R(Ro);
this.Hq.L(A.jb.Text);this.Ia.H(AIn);this.Ia.R(Ro);this.Ia.L(A.jb.Text);this.AP.H(
Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.A$.L(A.jb.Bc);this.J(this.Mo,0);this.
J(this.Hq,0);this.J(this.Ia,0);this.J(this.AP,0);this.J(this.A$,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mo._Done();this.Hq._Done();this.Ia._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mo._ReInit(
);this.Hq._ReInit();this.Ia._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ia)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,V4:null,AhU:null,S1:null
,KQ:A.jV,CP:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LF=
A._GetAutoObject(A.Device.Helper).Mb(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LF){var FW=A._GetAutoObject(
A.acj.DU).AlA(LF,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdO=A.aaR(A.acf.BhK);AdO=A._GetAutoObject(
A.Device.Helper).MI(AdO,O9,A._GetAutoObject(A.Device.Converter).S_(FW,2,true));AdO=
A._GetAutoObject(A.Device.Helper).MI(AdO,Ayh,A._GetAutoObject(A.acj.DU).Aaw());this.
S1.R(AdO);this.AhU.L(A._GetAutoObject(A.acj.DU).AzV(FW,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S1.L(A._GetAutoObject(A.acj.DU).AzX(FW,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S1.R(A.aaR(A.acf.AVZ));this.AhU.L(A.jb.
ARd);this.S1.L(A.jb.Text);}},CC:function(G){var Fy=A._NewObject(A.Device.Filter,
0);var HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CX(HW);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fy.CX(Ac_);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);this.AxD(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},AxD:function(G){this.Bg=A._NewObject(C.Gc,0);this.Bg.N4(C.AHq);this.Bg.H(Ayt
);this.Bg.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KQ);this.J(this.
Bg,0);this.Bb(this.Bg);},Anp:function(G){A._GetAutoObject(C.A8).FB();},Dl:function(
E){if(this.KQ===E)return;this.KQ=E;if(!!this.Bg)this.Bg.Dl(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADy._Init.call(this.V4={I:this},0);A.acg.AL._Init.
call(this.AhU={I:this},0);A.acg.Text._Init.call(this.S1={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Ce);this.N.Z(true);this.Dr(C.IL);this.V4.H(
Qd);this.KQ=A.aaR(A.acf.Akm);this.AhU.A0(0x1D);this.AhU.H(IW);this.S1.A0(0x1D);this.
S1.H(IW);this.S1.A6(0x12);this.S1.R(Ro);this.J(this.V4,0);this.J(this.AhU,0);this.
J(this.S1,0);this.N.CE=[this,this.Anp];this.N.C2(A.aaL(A.ach.E2));this.S1.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V4._Done();this.AhU._Done(
);this.S1._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V4._ReInit();this.AhU._ReInit();this.S1._ReInit();this.Dl(A.aaR(A.acf.Akm
));this.S1.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V4)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S1
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mk={DP:null,Acz:null,ARS:11,EN:0,A5l:true,AB2:false,I2:function(G){if(A._GetAutoObject(
A.Device.Device).An.B9()>0)this.E5(4);else A._GetAutoObject(A.Device.Device).A3(
30,true,A.jV,0,null);},CC:function(G){if(this.DP.Az7())this.DP.Ac9();else if((this.
EN===2)&&A._GetAutoObject(A.Device.Helper).W.Aq0())this.E5(5);else this.E5(1);},
E4:function(G){if(this.EN===1)this.E5(0);},Ew:function(G){this.E5(0);A._GetAutoObject(
C.A8).FB();},BCz:function(){A._GetAutoObject(A.Device.Device).AhM();},A4E:function(
){A._GetAutoObject(A.Device.Device).An0();},A9V:function(E){if(this.AB2===E)return;
this.AB2=E;A.abo([this,this.Bk5,this.A9V],0);},E5:function(E){var B;if(this.EN===
E)return;this.EN=E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkQ();A.zX([
this,this.AKF],[B=A._GetAutoObject(A.Device.Helper),B.ArA,B.AkF],0);A.z$([this,this.
AAy],[B=this.DP,B.SF,B.E5],0);this.BCz();}break;case 3:{A.z$([this,this.AKF],[B=
A._GetAutoObject(A.Device.Helper),B.ArA,B.AkF],0);this.A4E();this.BAu();}break;case
2:{A._GetAutoObject(A.Device.Helper).Ast();if(!A._GetAutoObject(A.Device.Device).
AutoRegistrationMode&&this.A5l)this.BCk();else this.BCn();}break;case 4:{A.z$([this
,this.AKF],[B=A._GetAutoObject(A.Device.Helper),B.ArA,B.AkF],0);this.A4E();A._GetAutoObject(
A.Device.Helper).Ast();A.zX([this,this.Bfn],[B=A._GetAutoObject(A.Device.Device)
,B.Awr,B.AyV],0);A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(this.ARS);}
break;case 5:this.BgI();break;case 6:{A.zX([this,this.AAy],[B=this.DP,B.SF,B.E5]
,0);this.DP.Ac9();}break;case 0:{A.z$([this,this.AKF],[B=A._GetAutoObject(A.Device.
Helper),B.ArA,B.AkF],0);this.A4E();}break;default:throw new Error(Ayx);}A.abo([this
,this.SF,this.BwZ],0);},BwZ:function(Aq){this.E5(Aq);},AKF:function(G){if(!!A._GetAutoObject(
A.Device.Helper).UD){if(this.EN===1)this.E5(3);else A.ab5("%s%e",AYP,this.EN);}else
A.ab5("%s",AIo);},BCk:function(){A._GetAutoObject(A.Device.Device).A3(13,true,A.
_GetAutoObject(A.Device.Helper).Ak7(A._GetAutoObject(A.Device.Helper).UD.Id).toFixed(
),0,[this,this.BAJ]);},BAJ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&((As.PopupState===4)||(As.PopupState===3))){if(this.Bde(false
))A._GetAutoObject(C.A8).Cd(31);else{A._GetAutoObject(A.Device.Helper).AkQ();this.
E5(1);}}else if(!!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkQ(
);this.E5(1);}},Bde:function(Ai1){if(A._GetAutoObject(A.Device.Device).An.Lj()){
A._GetAutoObject(A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.
HK().toFixed(),0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gr();A.
_GetAutoObject(A.Device.Helper).Aqk(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(
A.Device.Helper).W.PW(A._GetAutoObject(A.Device.Helper).UD.Id);if(!!A._GetAutoObject(
A.Device.Helper).AhI){var AlN=A._GetAutoObject(A.Device.Helper).AhI.AOY();A._GetAutoObject(
A.Device.Helper).W.Ab4(AlN);A._GetAutoObject(A.Device.Helper).W.AnD(AlN);}if(A._GetAutoObject(
A.Device.Helper).ARs(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nk(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SK(A._GetAutoObject(A.Device.Helper).Bhz(A._GetAutoObject(A.Device.
Device).AgA,A._GetAutoObject(A.Device.Helper).W));if(Ai1){A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var L$=A._GetAutoObject(A.Device.
Device).An.LV(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SR(L$);if(A._GetAutoObject(A.Device.Helper).Am6()){if(A._GetAutoObject(A.
Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abr(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).AgA)A._GetAutoObject(
A.Device.Helper).Bag();}return true;},BAu:function(){if(!!A._GetAutoObject(A.Device.
Helper).UD){var AJv=true;if(A._GetAutoObject(A.Device.Helper).UD.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJv=A._GetAutoObject(A.Device.Helper).A7S(A._GetAutoObject(
A.Device.Helper).UD.Id);if(!AJv&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bde(true);AJv=A._GetAutoObject(A.Device.Helper).A7S(A._GetAutoObject(A.
Device.Helper).UD.Id);}}if(AJv)this.E5(5);else this.E5(2);}else{A.ab5("%s",AIo);
return;}},Bfn:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARS){A.z$([this,this.Bfn],[B=A._GetAutoObject(A.Device.Device),B.Awr,B.AyV
],0);if(A._GetAutoObject(A.Device.Helper).W.Aq0())this.E5(5);else this.E5(1);}},
BgI:function(){if(this.AB2===true)this.E5(6);else A._GetAutoObject(C.A8).Cd(24);
},BCn:function(){A._GetAutoObject(A.Device.Device).A3(36,true,A.jV,0,[this,this.
BBD]);},BBD:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkQ();this.E5(1);}},AAy:function(G){if(!this.DP.EN)this.E5(1);},A3y:function(G
){},Bw9:function(s){this.A3y(s);},Bk5:function(){return this.AB2;},SF:function(){
return this.EN;},_Init:function(aArg){C.Ra._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acz={I:this},0);this.__proto__=C.Mk;this.N.Z(true);this.Dr(C.Aq1);this.
Number.H(AYQ);this.Number.R(A.aaR(A.acf.A$F));this.Ji.H(AYR);this.IU.H(AYS);this.
Acz.H(AYT);this.Acz.R(AYU);this.Acz.L(A.jb.Text);this.J(this.Acz,0);this.N.CE=[this
,this.Ew];this.N.Cf=[this,this.Bw9];this.N.C2(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acz.S(A.aaL(A.fl.H2));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Ra;this.Acz._Done();C.Ra._Done.call(this);},_ReInit:function(
){C.Ra._ReInit.call(this);this.Acz._ReInit();this.Number.R(A.aaR(A.acf.A$F));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ra._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acz)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A4$={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Ape:-1,EN:0,Byx:function(){var Bgn=false;
var Oo=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HK().toFixed(),0,null);else if(Oo){Bgn=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axz(B1,5);B1.OnSetAppearance(3);B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axz(B1
,5);B1.OnSetAppearance(1);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(Bgn)A._GetAutoObject(A.Device.Helper).W.Uu(false);if(Oo)A.
_GetAutoObject(A.Device.Helper).W.AnV(false);else A._GetAutoObject(A.Device.Helper
).W.AnV(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A3(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MZ]);else A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);},Byz:function(){A._GetAutoObject(
A.Device.Helper).W.AGM(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
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
this.BCP();break;case 2048:this.Ac9();break;case 4096:this.Bc8(false);break;case
8192:this.Byy();break;case 16384:this.BAq();break;case 32768:this.ByY();break;case
524288:this.ByZ();break;case 65536:this.Bzm();break;case 131072:this.BCc();break;
case 0:break;default:throw new Error(AYV);}},Bdg:function(Eh,Bx5){var EQ=A._NewObject(
C.Wo,0);EQ.Ab2(false);EQ.Aj(true);EQ.AR=Bx5;EQ.Bme(Eh);switch(Eh){case 1:{EQ.T(A.
aaR(A.acf.An1));EQ.DB(A.aaL(A.ach.ALS));}break;case 2:{EQ.T(A.aaR(A.acf.A$p));EQ.
DB(A.aaL(A.ach.ALT));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DB(A.aaL(A.ach.ALU
));EQ.AFJ(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asf));EQ.DB(A.aaL(A.ach.ALV));EQ.
AFJ(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMr));EQ.DB(A.aaL(A.ach.ALW));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DB(A.aaL(A.ach.ALX));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DB(A.aaL(A.ach.ALY));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DB(A.aaL(A.ach.ALZ));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DB(A._GetAutoObject(A.acj.DU).Bz1());}break;case 512:{EQ.T(A.aaR(A.acf.ASf));
EQ.DB(A.aaL(A.ach.ALK));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DB(A.aaL(A.ach.ALL));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DB(A.aaL(A.ach.ALR));}break;case 2048:{EQ.T(A.aaR(A.acf.TB));EQ.DB(A.aaL(A.ach.ALM
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DB(A.aaL(A.ach.ALN));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DB(A.aaL(A.ach.ALO));EQ.AFJ(true);}break;case
16384:{EQ.T(A.aaR(A.acf.BiW));EQ.DB(A.aaL(A.ach.ALP));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bpa));EQ.DB(A.aaL(A.ach.ALQ));}break;default:A.ab5("%s",(AYW+Eh.toFixed(
))+AYX);}return EQ;},Bzz:function(){this.Ape=this.Ape+1;if(this.Ape>=this.AutoActions.
Na())this.E5(0);else this.E5(2);},BB2:function(){this.Ape=-1;},Az7:function(){return(
this.Ape>-1)&&!this.BAk();},BAk:function(){return this.Ape>=this.AutoActions.Na(
);},E5:function(E){if(this.EN===E)return;this.EN=E;switch(E){case 1:this.Bzz();break;
case 2:{var Tj=this.AutoActions.OI(this.Ape);if(this.A48(A._GetAutoObject(A.Device.
Helper).W,Tj))this.Qp(Tj);else A._GetAutoObject(A.Device.Device).A3(64,true,(this.
ActionToString.Lx(Tj)+Ate)+this.AnimalTypeToString.Lx(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MZ]);}break;case 0:this.BB2();break;default:throw new
Error(Ayx);}A.abo([this,this.SF,this.E5],0);},MZ:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
Bc8(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.A8).Cd(45);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.Az7())this.
E5(1);},Bc_:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LV(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAr:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A8).Cd(
45);else A._GetAutoObject(A.Device.Device).A3(32,true,A.jV,0,[this,this.MZ]);},Ac9:
function(){this.E5(1);},BB0:function(){var Oo=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Oo&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device
).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axz(B1,5);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uu(false);if(Oo)A._GetAutoObject(
A.Device.Helper).W.AnV(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);},BB1:function(){A._GetAutoObject(
A.Device.Helper).W.AGM(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);},Bc8:function(BzD){if(
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
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);}},A48:function(En,Eh
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
Device.Helper).A5n(A._GetAutoObject(A.Device.Device).An6,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A3(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MZ]);}},ByZ:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae6(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MZ]);}},SF:function(){return this.EN;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A4$;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AL4={R2:null,Aqm:null,E5:function(E){if(this.EN===E)return;C.Mk.E5.call(this
,E);switch(E){case 1:this.Dr(C.Aq1);break;case 5:case 6:this.Dr(C.IL);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayx);}},A3y:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mk._Init.call(this
,aArg);C.CG._Init.call(this.R2={I:this},0);C.AL5._Init.call(this.Aqm={I:this},0);
this.__proto__=C.AL4;this.A9V(true);this.R2.H(AYZ);this.R2.R(A.aaR(A.acf.TB));this.
R2.L(A.jb.Text);this.Aqm.H(AY0);this.J(this.R2,0);this.J(this.Aqm,0);this.N.Cw(A.
aaL(A.ach.AeD));this.R2.S(A.aaL(A.fl.Af));this.R2.AZ(A.aaL(A.fl.HJ));this.R2.Cr(
A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Mk;this.R2._Done();this.Aqm.
_Done();C.Mk._Done.call(this);},_ReInit:function(){C.Mk._ReInit.call(this);this.
R2._ReInit();this.Aqm._ReInit();this.R2.R(A.aaR(A.acf.TB));this.R2.S(A.aaL(A.fl.
Af));this.R2.AZ(A.aaL(A.fl.HJ));this.R2.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Mk._Mark.call(this,D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aqm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"
};C.ManualActionScanScreen={Ib:null,J5:null,A3y:function(G){if(this.Ib.NZ(2048))
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(3);},_Init:function(aArg){C.Mk._Init.call(this,aArg);A.
acg.Text._Init.call(this.J5={I:this},0);this.__proto__=C.ManualActionScanScreen;
this.J5.H(AY1);this.J5.KU(true);this.J5.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+
CQ)+A.aaR(A.acf.ABQ));this.J5.L(A.jb.Text);this.J(this.J5,0);this.N.Cw(A.aaL(A.ach.
AeD));this.J5.S(A.aaL(A.fl.Af));this.Ib=A._GetAutoObject(C.Pn);},_Done:function(
){this.__proto__=C.Mk;this.J5._Done();C.Mk._Done.call(this);},_ReInit:function(){
C.Mk._ReInit.call(this);this.J5._ReInit();this.J5.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.ABQ));this.J5.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Mk._Mark.call(this,D);if((B=this.Ib)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.J5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScanScreen"
};C.AL5={Y:null,Init:function(aArg){var B;A.zV([this,this.ABy],A._GetAutoObject(
C.AutoActions),0);A.zV([this,this.AuE],A._GetAutoObject(A.Device.Helper).W,0);A.
pe([this,this.ABy],this);A.pe([this,this.AuE],this);this.H(A.abK(this.M,AY2));this.
Y.H(A.abK(this.Y.M,A.abe([(B=this.M)[2]-B[0],B[3]-B[1]],AY3)));},BcX:function(G){
var B;var AlB=0;var Azz=0;var Bdc;var X=this.Y.Ah;var Cy=null;Bdc=((((B=this.M)[
2]-B[0])-(A._GetAutoObject(C.AutoActions).Na()*58))/2)|0;while(!!X&&!((X.U&0x200
)===0x200)){Cy=(C.Wo.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.
H(A.abK(Cy.M,AY4));Cy.H(A.abM(Cy.M,(Azz*58)+Bdc));Cy.H(A.abO(Cy.M,AlB*58));if(Azz>=
3){AlB=AlB+1;Azz=0;}else Azz=Azz+1;}X=X.Ah;}this.Bb(null);},A1W:function(Eh){var
EQ=A._GetAutoObject(C.DP).Bdg(Eh,null);this.J(EQ,0);this.BcX(this);},Ao5:function(
){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((
AdM.U&0x400)===0x400))this.HP(AdM);}},ABy:function(G){this.Ao5();var O;var CB=A.
_GetAutoObject(C.AutoActions).Na();for(O=0;O<CB;O=O+1){var Tj=A._GetAutoObject(C.
AutoActions).OI(O);this.A1W(Tj);}A.pe([this,this.BcX],this);A.pe([this,this.AuE]
,this);A.pe([this,this.BCZ],this);},AuE:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wo.isPrototypeOf(
X)?X:null);Aa.AFJ(false);}X=X.Ah;}},BCZ:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wo.isPrototypeOf(
X)?X:null);var ByO=A._GetAutoObject(C.AutoActions).Na();if(!!Aa){var O;Aa.A9R(false
);for(O=0;O<ByO;O=O+1)if(Aa.Action===A._GetAutoObject(C.AutoActions).OI(O)){Aa.A9R(
true);Aa.Bnl(AY5+(O+1).toFixed());}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);this.__proto__=C.AL5;this.
Y.JW(0);this.J(this.Y,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.Y._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Y._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScreenGrid"
};C.DP={_Init:function(){C.A4$._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.APH={Ln:null,T$:null,Init:function(aArg){
this.Ln.R(A._GetAutoObject(A.acj.Temperature).AlM());},_Init:function(aArg){C.De.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Ln={I:this},0);C.CG._Init.call(
this.T$={I:this},0);this.__proto__=C.APH;this.Ln.H(AY6);this.Ln.A6(0x12);this.Ln.
L(A.jb.Text);this.T$.H(Aou);this.T$.R((A.aaR(A.acf.Ahn)+AIp)+A.aaR(A.acf.Ko));this.
T$.A6(0x12);this.T$.L(A.jb.Text);this.J(this.Ln,0);this.J(this.T$,0);this.Ln.S(A.
aaL(A.fl.Af));this.T$.S(A.aaL(A.fl.Ak));this.T$.AZ(A.aaL(A.fl.Bh));this.Init(aArg
);},_Done:function(){this.__proto__=C.De;this.Ln._Done();this.T$._Done();C.De._Done.
call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Ln._ReInit();this.T$.
_ReInit();this.T$.R((A.aaR(A.acf.Ahn)+AIp)+A.aaR(A.acf.Ko));this.Ln.S(A.aaL(A.fl.
Af));this.T$.S(A.aaL(A.fl.Ak));this.T$.AZ(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.Ln)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
T$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdTemperatures"
};C.ADw={Jz:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Jz={I:this},0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=
C.ADw;this.Jz.H(AY7);this.Jz.KU(true);this.Jz.A6(0x14);this.Jz.R(A.aaR(A.acf.AhT
)+AIq);this.Jz.L(A.jb.Text);this.D0.H(Aou);this.D0.KU(true);this.D0.R(A.aaR(A.acf.
AGg));this.D0.L(A.jb.Text);this.J(this.Jz,0);this.J(this.D0,0);this.Jz.S(A.aaL(A.
fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.De;this.Jz.
_Done();this.D0._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.
call(this);this.Jz._ReInit();this.D0._ReInit();this.Jz.R(A.aaR(A.acf.AhT)+AIq);this.
D0.R(A.aaR(A.acf.AGg));this.Jz.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.De._Mark.call(this,D);if((B=this.Jz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"
};C.T1={Ja:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.call(
this.Ja={I:this},0);this.__proto__=C.T1;this.Ja.H(AIr);this.Ja.R((((A.aaR(A.acf.
RQ)+AcS)+AIs)+A.aaR(A.acf.Bav))+O_);this.Ja.A6(0x12);this.Ja.L(A.jb.Text);this.J(
this.Ja,0);this.Ja.S(A.aaL(A.fl.Af));this.Ja.AZ(A.aaL(A.fl.Ak));this.Ja.Cr(A.aaL(
A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.Ja._Done();C.De._Done.call(
this);},_ReInit:function(){C.De._ReInit.call(this);this.Ja._ReInit();this.Ja.R((((
A.aaR(A.acf.RQ)+AcS)+AIs)+A.aaR(A.acf.Bav))+O_);this.Ja.S(A.aaL(A.fl.Af));this.Ja.
AZ(A.aaL(A.fl.Ak));this.Ja.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.Ja)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APJ={Lo:null,Kw:null,CP:function(){this.A$H();},Init:function(aArg){this.A$H(
);},A$H:function(){this.Lo.R(A._GetAutoObject(A.acj.DU).Af4());this.Kw.R(A._GetAutoObject(
A.acj.DU).Aaw());},_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lo={I:this},0);C.CG._Init.call(this.Kw={I:this},0);this.__proto__=C.APJ;
this.Lo.H(AY8);this.Lo.A6(0x12);this.Lo.L(A.jb.Text);this.Kw.H(Aou);this.Kw.L(A.
jb.Text);this.J(this.Lo,0);this.J(this.Kw,0);this.Lo.S(A.aaL(A.fl.Af));this.Kw.S(
A.aaL(A.fl.Af));this.Kw.AZ(A.aaL(A.fl.Ak));this.Kw.Cr(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.De;this.Lo._Done();this.Kw._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lo._ReInit();
this.Kw._ReInit();this.Lo.S(A.aaL(A.fl.Af));this.Kw.S(A.aaL(A.fl.Af));this.Kw.AZ(
A.aaL(A.fl.Ak));this.Kw.Cr(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.
De._Mark.call(this,D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kw
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANi={Mo:null,Hq:null,Ia:null,AP:null,A$:null,FW:0,AaC:0,Ic:0,AiO:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mo.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ia.H(this.Mo.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiO){this.Ia.R(Rp);this.Ia.L(A.jb.
Text);this.Mo.L(this.Background.AQ);}else{this.Ia.R(A._GetAutoObject(A.Device.Converter
).S_(this.FW,2,true));this.Ia.L(A._GetAutoObject(A.acj.DU).AzX(this.FW,this.Ic));
this.Mo.L(A._GetAutoObject(A.acj.DU).AzV(this.FW,this.Ic));}if(this.AaC>0)this.Hq.
R(A._GetAutoObject(A.Device.Converter).Ak$(this.AaC));else this.Hq.R(Rp);this.Hq.
L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mj=
this.AX.CF(Ad,1);var Auz=this.AX.Hv(Ad,24);var AKe=this.AX.CF(Ad,23);var AuA=this.
AX.Hv(Ad,19);this.AaC=this.AX.CF(Ad,18);if((Auz>0)&&(Auz!==AuA)){var LF=A._GetAutoObject(
A.Device.Helper).Mb(Auz,AuA);if(!!LF){this.AiO=false;this.FW=A._GetAutoObject(A.
acj.DU).AlA(LF,AKe,this.AaC);}else{this.AiO=true;this.FW=0;}}else{this.AiO=true;
this.FW=0;}this.T(Mj.toFixed());this.Ic=this.AX.AmW(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mo={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ia={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.ANi;this.V.H(O8);this.Mo.H(Atg);this.Hq.H(AIm);this.Hq.A6(0x12);this.Hq.R(Ro);
this.Hq.L(A.jb.Text);this.Ia.H(AIn);this.Ia.R(Ro);this.Ia.L(A.jb.Text);this.AP.H(
Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.A$.L(A.jb.Bc);this.J(this.Mo,0);this.
J(this.Hq,0);this.J(this.Ia,0);this.J(this.AP,0);this.J(this.A$,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mo._Done();this.Hq._Done();this.Ia._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mo._ReInit(
);this.Hq._ReInit();this.Ia._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ia)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M7={Mn:null,AP:null,A$:null,Gz:null,Xs:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Mn.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mn.M);this.Background.H([].concat(this.Mn.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gz.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gz.M[2]-1,0,this.
Gz.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gz.L(this.V.AQ
);if(!!this.Xs&&(this.Xs!==5)){this.Mn.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
Xs));this.V.L(A._GetAutoObject(A.acj.Assessment).XB(this.Xs));}else this.Mn.L(this.
Background.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var
Mj=this.AX.CF(Ad,1);var LT=this.AX.I8(Ad,13);var AlH=this.AX.I8(Ad,17);var AlQ=this.
AX.H3(Ad,11);var Azh=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.Helper).
Mb(Azh,A._GetAutoObject(A.Device.Helper).Dv());this.Xs=A._GetAutoObject(A.Device.
Helper).AMo(LT,AlQ,AlH);this.T(Mj.toFixed());if(AfR<100)this.Gz.R((AfR.toFixed()+
CQ)+A.aaR(A.acf.AL3));else this.Gz.R(A._GetAutoObject(A.acj.KO).AC1(Azh,A._GetAutoObject(
A.Device.Helper).Dv(),AIt));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Mn={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gz={I:this
},0);this.__proto__=C.M7;this.Mn.H(Atg);this.Background.H(AY9);this.V.H(O8);this.
AP.H(Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.A$.L(A.jb.Bc);this.Gz.H(Ayy);this.
J(this.Mn,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gz,0);this.Gz.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mn._Done(
);this.AP._Done();this.A$._Done();this.Gz._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mn._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gz._ReInit();this.Gz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ANg={AjA:null,Ob:null,AP:null,A$:null,Ju:null,AKw:0,A2X:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.Ob.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AjA.H(this.Ob.M);this.A$.H([this.Ob.M[2]-1,0,this.Ob.M[2]+1,aSize[1]]);
this.Ju.H([this.Ob.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Ju.Dg(this.V.AQ);if(this.AKw>0){this.AjA.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.A2X));this.Ob.L(A._GetAutoObject(A.acj.Assessment).XB(this.A2X));}else{
this.AjA.L(this.Background.AQ);this.Ob.L(this.V.AQ);}},Ch:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){var IA=this.AX.CF(Ad,0);var Mj=this.AX.CF(Ad,
1);this.AKw=this.AX.CF(Ad,5);this.A2X=this.AX.I8(Ad,17);this.T(Mj.toFixed());if(
this.AKw>0)this.Ob.R(A._GetAutoObject(A.Device.Converter).Ak2(this.AKw));else this.
Ob.R(Rp);var Xr=A._GetAutoObject(A.Device.Helper).ZR(6);A._GetAutoObject(A.Device.
Device).SR(Ad);var A06=A._GetAutoObject(A.Device.Helper).Bjk(A._GetAutoObject(A.
Device.Device).Bt,9,IA,Xr,0);this.Ju.A99(A06.Get(3));this.Ju.A9$(A06.Get(2));this.
Ju.A9_(A06.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AjA={I:this},0);A.acg.Text._Init.call(this.Ob={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},
0);C.Ju._Init.call(this.Ju={I:this},0);this.__proto__=C.ANg;this.Ob.A6(0x12);this.
Ob.R(Ro);this.Ob.L(A.jb.Text);this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.
A$.L(A.jb.Bc);this.Ju.H(AY_);this.J(this.AjA,0);this.J(this.Ob,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Ju,0);this.Ob.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AjA._Done();this.Ob._Done();this.AP.
_Done();this.A$._Done();this.Ju._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AjA._ReInit();this.Ob._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Ju._ReInit();this.Ob.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ob)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Ju={Afq:null,
ColoredCounterAttrSet:null,ACs:0,ACt:0,ACr:0,KV:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKp;var ALJ;var AKU;var AlY=0;if(this.ACr>0){AKp=this.ACr.toFixed(
);AlY+=AKp.length;}else{AKp=AY$;AlY++;}if(this.ACt>0){ALJ=this.ACt.toFixed();AlY+=
ALJ.length;}else{ALJ=Ayz;AlY++;}if(this.ACs>0){AKU=this.ACs.toFixed();AlY+=AKU.length;
}else{AKU=AIh;AlY++;}if(AlY<=4)this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Af));else
if(AlY<=5)this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Aht(A.aaL(A.fl.Bh));this.Afq.R(((((AZa+AKp)+AZb)+ALJ)+AZc)+AKU);},A9_:function(E
){if(this.ACs===E)return;this.ACs=E;this.Am();},A9$:function(E){if(this.ACt===E)
return;this.ACt=E;this.Am();},A99:function(E){if(this.ACr===E)return;this.ACr=E;
this.Am();},Dg:function(E){if(this.KV===E)return;this.KV=E;this.ColoredCounterAttrSet.
Ahq(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuW._Init.call(
this.Afq={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Ju;this.H(AIu);this.Afq.A0(0x3F);this.Afq.H(AIu);this.
Afq.R(Ro);this.ColoredCounterAttrSet.Bmq(A.jb.E1);this.ColoredCounterAttrSet.A90(
A.jb.H9);this.ColoredCounterAttrSet.A9Z(A.jb.Gj);this.ColoredCounterAttrSet.Ahq(
A.jb.Text);this.KV=A.jb.Text;this.J(this.Afq,0);this.Afq.A9U(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9W(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afq._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afq._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Aht(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANf={AtL:null
,Acc:null,Acd:null,Ace:null,Ju:null,AP:null,A$:null,Ea:null,Lv:null,AcB:null,KW:
null,KX:null,AJB:0,AJA:0,AJz:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acc.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcB.H(this.
Acc.M);this.A$.H([this.Acc.M[2]-1,0,this.Acc.M[2]+1,aSize[1]]);this.Acd.H([this.
Acc.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KW.H(this.Acd.M);this.Ea.H([this.
Acd.M[2]-1,0,this.Acd.M[2]+1,aSize[1]]);this.Ace.H([this.Acd.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KX.H(this.Ace.M);this.Lv.H([this.Ace.M[2]-1,0,this.Ace.
M[2]+1,aSize[1]]);this.Ju.H([this.Ace.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Ju.Dg(this.V.AQ);this.Acc.L(A._GetAutoObject(A.acj.
Assessment).Qr(this.AJz));this.Acd.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
AJA));this.Ace.L(A._GetAutoObject(A.acj.Assessment).Qr(this.AJB));this.AcB.L(A._GetAutoObject(
A.acj.Assessment).XB(this.AJz));this.KW.L(A._GetAutoObject(A.acj.Assessment).XB(
this.AJA));this.KX.L(A._GetAutoObject(A.acj.Assessment).XB(this.AJB));this.AcB.Z(
!this.AJz);this.KW.Z(!this.AJA);this.KX.Z(!this.AJB);this.Ju.A99(this.AtL.Get(3)
);this.Ju.A9$(this.AtL.Get(2));this.Ju.A9_(this.AtL.Get(1));},Ch:function(Ad){if(
!this.AX)return;this.Hs=Ad;if(!!this.AX){var IA=this.AX.CF(Ad,0);var Mj=this.AX.
CF(Ad,1);this.T(Mj.toFixed());A._GetAutoObject(A.Device.Device).SR(Ad);this.AJz=
A._GetAutoObject(A.Device.Helper).A2x(A._GetAutoObject(A.Device.Device).Bt,IA,0);
this.AJA=A._GetAutoObject(A.Device.Helper).A2x(A._GetAutoObject(A.Device.Device).
Bt,IA,-1);this.AJB=A._GetAutoObject(A.Device.Helper).A2x(A._GetAutoObject(A.Device.
Device).Bt,IA,-2);this.AtL=A._GetAutoObject(A.Device.Helper).A6Y(A._GetAutoObject(
A.Device.Device).Bt,IA,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Acc={I:this},0);A.acg.AL._Init.call(this.Acd={I:
this},0);A.acg.AL._Init.call(this.Ace={I:this},0);C.Ju._Init.call(this.Ju={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Lv={I:this
},0);A.acg.Text._Init.call(this.AcB={I:this},0);A.acg.Text._Init.call(this.KW={I:
this},0);A.acg.Text._Init.call(this.KX={I:this},0);this.__proto__=C.ANf;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Lv.L(A.jb.Bc);this.AcB.R(Aov
);this.KW.R(Aov);this.KX.R(Aov);this.J(this.Acc,0);this.J(this.Acd,0);this.J(this.
Ace,0);this.J(this.Ju,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.Lv,0);this.J(this.AcB,0);this.J(this.KW,0);this.J(this.KX,0);this.AcB.S(A.
aaL(A.fl.Af));this.KW.S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.AtL=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acc._Done();this.Acd._Done();this.Ace._Done();this.Ju._Done();this.AP.
_Done();this.A$._Done();this.Ea._Done();this.Lv._Done();this.AcB._Done();this.KW.
_Done();this.KX._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acc._ReInit();this.Acd._ReInit();this.Ace._ReInit();this.Ju._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Lv._ReInit();this.AcB.
_ReInit();this.KW._ReInit();this.KX._ReInit();this.AcB.S(A.aaL(A.fl.Af));this.KW.
S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ju)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmZ={H7:null,Af6:false,Bl:function(aSize){var
B;this.H7.H([(aSize[0]-((B=this.H7.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H7.M[0]-10,40]);C.TL.Bl.call(this,aSize);},Ai:function(Ae){C.TL.Ai.call(
this,Ae);if(this.Af6)this.H7.Cv(1);else this.H7.Cv(0);},Kf:function(G){if(this.Af6
)C.TL.Kf.call(this,G);},Ka:function(G){if(this.Af6)C.TL.Ka.call(this,G);},Tw:function(
AI){C.TL.Tw.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.Af6=true;this.Zz(
true);}else{this.H(A.abI(this.M,40));this.Af6=false;this.Zz(false);}},_Init:function(
aArg){C.TL._Init.call(this,aArg);A.acg.Ap._Init.call(this.H7={I:this},0);this.__proto__=
C.AmZ;this.V.A6(0x11);this.H7.H(AHS);this.H7.Cv(0);this.J(this.H7,0);this.V.Cr(A.
aaL(A.fl.Bh));this.H7.Ax(A.aaL(A.ach.AqQ));},_Done:function(){this.__proto__=C.TL;
this.H7._Done();C.TL._Done.call(this);},_ReInit:function(){C.TL._ReInit.call(this
);this.H7._ReInit();this.V.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TL._Mark.
call(this,D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AGf={_Init:function(aArg){C.Axq._Init.call(this,aArg);this.__proto__=C.AGf;}
,_className:"Application::OptionsOverlaySeparator"};C.AkI={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axq._Init.call(this,aArg);this.__proto__=C.AkI;},_className:"Application::OptionsOverlayNode"
};C.ZB={AR:null,_Init:function(aArg){C.AkI._Init.call(this,aArg);this.__proto__=
C.ZB;},_Mark:function(D){var B;C.AkI._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANL={Ai:function(Ae){C.OZ.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(
this.Hl){FS=A.jb.Text;GY=A.jb.Bm;}this.Background.L(FS);this.V.L(GY);},_Init:function(
aArg){C.OZ._Init.call(this,aArg);this.__proto__=C.ANL;},_className:"Application::DarkThemeTextItem"
};C.OZ={Background:null,BU:null,V:null,Aqx:0,Hl:false,Init:function(aArg){},Bl:function(
aSize){C.Hi.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hi.Ai.call(this,Ae);this.BU.L(this.Aqx);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bi:function(E){if(this.Hl===E)return;this.Hl=E;this.Am();
},ArN:function(E){if(this.Aqx===E)return;this.Aqx=E;this.Am();},_Init:function(aArg
){C.Hi._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.OZ;this.H(BD);this.Background.H(AIv);this.BU.H(BD);this.BU.Nn(2);this.BU.L(A.jb.
Ri);this.V.H(AZd);this.Aqx=A.jb.Ri;this.J(this.Background,0);this.J(this.BU,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);this.BU._Done();this.V._Done();C.Hi._Done.call(this);},_ReInit:function(){C.Hi.
_ReInit.call(this);this.Background._ReInit();this.BU._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APM={Es:null,IP:null
,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.Es={
I:this},0);A.acg.Text._Init.call(this.IP={I:this},0);this.__proto__=C.APM;this.H(
Oe);this.Background.H(Oe);this.Es.H(AIw);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11
);this.Es.L(A.jb.Text);this.IP.A0(0x3F);this.IP.H(AIx);this.IP.Hn(5);this.IP.A6(
0x14);this.IP.R(A.aaR(A.acf.AGZ));this.IP.L(A.jb.Text);this.J(this.Es,0);this.J(
this.IP,0);this.Es.S(A.aaL(A.fl.Af));this.IP.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.IP._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.IP._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.IP.R(A.aaR(A.acf.AGZ));this.Es.S(A.aaL(A.fl.Af));this.IP.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sq:null,Sr:null,AeE:null,Ag8:null,QM:null
,KV:0,LastTemperature:0,AqD:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sq.Ax(A.aaL(A.ach.AvL));this.Sr.Ax(A.aaL(A.ach.AvL));}break;case 2:{this.Sq.Ax(A.
aaL(A.ach.AvO));this.Sr.Ax(A.aaL(A.ach.AvO));}break;default:{this.Sq.Ax(A.aaL(A.
ach.Aez));this.Sr.Ax(A.aaL(A.ach.Aez));}}this.Sq.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.AqD));var ApQ;if(this.IsWatch)ApQ=A.aaL(A.ach.AQQ);else if(this.IsFever
){ApQ=A.aaL(A.ach.AQP);switch(A._GetAutoObject(A.Device.Converter).Ajn(this.LastTemperature
,this.AnimalType)){case 3:this.QM.L(A.jb.Gj);break;case 2:this.QM.L(A.jb.H9);break;
case 1:this.QM.L(A.jb.E1);break;case 0:this.QM.L(A.jb.Afu);break;default:;}}else
if(this.IsAlarm){ApQ=A.aaL(A.ach.AQO);if(!this.AqD||(this.AqD===5))this.QM.L(A.jb.
Gj);else this.QM.L(0xFF000000);}else ApQ=null;this.AeE.Ax(ApQ);this.Ag8.Ax(ApQ);
this.QM.Ax(ApQ);if(A._GetAutoObject(A.acj.Assessment).Qr(this.AqD)===A.jb.E1)this.
Sr.L(this.KV);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AFc:function(E){if(this.AqD===E)return;this.AqD=E;this.Am();},Dg:function(
E){if(this.KV===E)return;this.KV=E;this.Am();},Ae7:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uu:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae3:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae9:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E6:function(){this.EC(0);this.AFc(0);this.Ae3(false);this.Uu(false
);this.Ae7(false);this.Ae9(0);this.Dg(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sq={I:this},0);A.acg.Ap._Init.call(
this.Sr={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap._Init.call(
this.Ag8={I:this},0);A.acg.Ap._Init.call(this.QM={I:this},0);this.__proto__=C.DS;
this.H(Alj);this.Sq.A0(0x3F);this.Sq.H(Alj);this.Sq.L(A.jb.CJ);this.Sq.A6(0x12);
this.Sq.Cv(0);this.Sr.A0(0x3F);this.Sr.H(Alj);this.Sr.L(0xFF000000);this.Sr.A6(0x12
);this.Sr.Cv(1);this.AeE.A0(0x3F);this.AeE.H(Alj);this.AeE.L(0xFF000000);this.AeE.
Cv(0);this.Ag8.A0(0x3F);this.Ag8.H(Alj);this.Ag8.Cv(1);this.QM.A0(0x3F);this.QM.
H(Alj);this.QM.L(A.jb.CT);this.QM.Cv(2);this.KV=A.jb.Text;this.J(this.Sq,0);this.
J(this.Sr,0);this.J(this.AeE,0);this.J(this.Ag8,0);this.J(this.QM,0);this.Sq.Ax(
A.aaL(A.ach.Aez));this.Sr.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=
A.Core.P;this.Sq._Done();this.Sr._Done();this.AeE._Done();this.Ag8._Done();this.
QM._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sq._ReInit();this.Sr._ReInit();this.AeE._ReInit();this.Ag8._ReInit();
this.QM._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.ANc={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(!!this.AX){var BAo=this.AX.H3(
Ad,12);var ByG=this.AX.Sm(Ad,15);this.Abg.R(A._GetAutoObject(A.Device.Helper).Mb(
ByG,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Ss.Z(BAo);this.Am();
}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=C.ANc;},_className:
"Application::CalfListAlarmItem"};C.ADs={D0:null,Mw:null,_Init:function(aArg){C.
T2._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mw={I:this},0);this.__proto__=C.ADs;this.D0.H(Aou);this.D0.KU(true);this.
D0.R(A.aaR(A.acf.A6c));this.D0.L(A.jb.Text);this.Mw.H(AZe);this.Mw.Jb(false);this.
Mw.L(A.jb.Text);this.Mw.A6(0x12);this.J(this.D0,-2);this.J(this.Mw,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mw.Ax(A.aaL(A.ach.ADR));},_Done:function(){this.__proto__=C.
T2;this.D0._Done();this.Mw._Done();C.T2._Done.call(this);},_ReInit:function(){C.
T2._ReInit.call(this);this.D0._ReInit();this.Mw._ReInit();this.D0.R(A.aaR(A.acf.
A6c));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.T2._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mw)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kn={Background:null,BU:
null,ACT:0,AB8:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACT);this.BU.L(this.AB8);},AwM:function(E){if(this.ACT===E)return;this.ACT=E;this.
Am();},AE6:function(E){if(this.AB8===E)return;this.AB8=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Kn;this.H(Aow);this.
Background.A0(0x3C);this.Background.H(Aow);this.Background.Cv(1);this.BU.A0(0x3C
);this.BU.H(Aow);this.ACT=A.jb.E1;this.AB8=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Ax(A.aaL(A.ach.Kn));this.BU.Ax(A.aaL(A.ach.Kn));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmH={Q:null,Ps:
null,A7D:false,Bl:function(aSize){C.Ms.Bl.call(this,aSize);this.V.H([].concat(this.
Ps.M[2]-this.V.Text.Je,this.V.M.slice(1,4)));},Ai:function(Ae){C.Ms.Ai.call(this
,Ae);this.Ps.L(this.V.AQ);},AwR:function(E){if(this.A7D===E)return;this.A7D=E;if(
E)this.Ps.R(AZf);else this.Ps.R(AIy);},ID:function(G){var F;if(!!this.Q)this.AwR((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.ID],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.ID],E,0);if(!!E)
A.pe([this,this.ID],this);},_Init:function(aArg){C.Ms._Init.call(this,aArg);A.acg.
Text._Init.call(this.Ps={I:this},0);this.__proto__=C.AmH;this.Ps.A0(0x34);this.Ps.
H(Tc);this.Ps.R(AIy);this.J(this.Ps,0);this.Ps.S(A.aaL(A.fl.AOF));},_Done:function(
){this.__proto__=C.Ms;this.Ps._Done();C.Ms._Done.call(this);},_ReInit:function(){
C.Ms._ReInit.call(this);this.Ps._ReInit();},_Mark:function(D){var B;C.Ms._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ps)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AO4={DX:function(G){C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(4));},_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.AO4;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Du:function(){return 3;},C7:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BS(aIndex);},DZ:function(A7){return A7;},H4:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APN={Go:null,Ln:null,YT:null,Init:function(aArg){this.Ln.R(A._GetAutoObject(
A.acj.Temperature).AlM());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.call(this.Ln={I:this},0);A.
acg.Text._Init.call(this.YT={I:this},0);this.__proto__=C.APN;this.Background.L(A.
jb.Text);this.Go.H(AIz);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date));this.Go.L(
A.jb.Bm);this.Ln.H(AZg);this.Ln.A6(0x12);this.Ln.L(A.jb.Bm);this.YT.H(AZh);this.
YT.A6(0x12);this.YT.R(A.aaR(A.acf.Bs));this.YT.L(A.jb.Bm);this.J(this.Go,0);this.
J(this.Ln,0);this.J(this.YT,0);this.Go.S(A.aaL(A.fl.Af));this.Ln.S(A.aaL(A.fl.Af
));this.YT.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Go._Done();this.Ln._Done();this.YT._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Go._ReInit();this.Ln._ReInit();this.YT._ReInit(
);this.Go.R(A.aaR(A.acf.Date));this.YT.R(A.aaR(A.acf.Bs));this.Go.S(A.aaL(A.fl.Af
));this.Ln.S(A.aaL(A.fl.Af));this.YT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ln)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TF={Lh:null,AjR:false,Init:function(
aArg){var B;A.zX([this,this.BbX],[B=A._GetAutoObject(A.Device.Device),B.AEE,B.AIT
],0);this.AGS(this);A.pe([this,this.AoC],this);},DE:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Or(this);break;case 7:this.M0(
this);break;default:D5.NM=true;}},CC:function(G){var B;if(!!this.Lh)this.Lh.CC(this
);C.AB.CC.call(this,G);},E4:function(G){var B;if(!!this.Lh)this.Lh.E4(this);C.AB.
E4.call(this,G);},Anp:function(G){A._GetAutoObject(C.A8).FB();},AGS:function(G){
var B;if(!!this.Lh){this.Lh.E4(this);this.HP(this.Lh);}if(this.AjR)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lh=A._NewObject(C.AMv,0);break;case 1:this.Lh=A.
_NewObject(C.AMw,0);break;case 3:this.Lh=A._NewObject(C.AMu,0);break;case 2:this.
Lh=A._NewObject(C.AMx,0);break;default:throw new Error(AIA);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lh=A._NewObject(C.AMy,0);break;case 1:this.Lh=A.
_NewObject(C.AMH,0);break;case 3:this.Lh=A._NewObject(C.AMB,0);break;case 2:this.
Lh=A._NewObject(C.AMM,0);break;default:throw new Error(AIA);}this.HQ(this);this.
J(this.Lh,0);this.Lh.H(Ff);this.Lh.Zw([this,this.A0S]);this.Lh.CC(this);this.Bb(
this.Lh);},BbX:function(s){this.AGS(s);},Boj:function(G){A._GetAutoObject(A.Device.
Device).AeX(0);},AT1:function(G){A._GetAutoObject(A.Device.Device).AeX(1);},AT0:
function(G){A._GetAutoObject(A.Device.Device).AeX(3);},AT2:function(G){A._GetAutoObject(
A.Device.Device).AeX(2);},HQ:function(G){this.N.C2(A.aaL(A.ach.E2));this.N.Hy(A.
jV);this.N.CE=[this,this.Anp];this.N.AFi(A.aaL(A.fl.Ak));},AoC:function(s){this.
HQ(s);},Bm6:function(E){if(this.AjR===E)return;this.AjR=E;A.pe([this,this.BbX],this
);},A$a:function(G){this.Bm6(!this.AjR);},Bom:function(G){A._GetAutoObject(A.Device.
Device).A3(31,true,A.jV,0,null);},M0:function(G){},BG1:function(s){this.M0(s);},
Or:function(G){},BG0:function(s){this.Or(s);},Bfk:function(G){var FQ=A._GetAutoObject(
A.Device.Device).D9;FQ=FQ+1;if(FQ>=4)FQ=0;A._GetAutoObject(A.Device.Device).AeX(
FQ);},BBi:function(G){var FQ=A._GetAutoObject(A.Device.Device).D9;FQ=FQ-1;if(FQ<
0)FQ=3;A._GetAutoObject(A.Device.Device).AeX(FQ);},Af$:function(G){},A0S:function(
s){this.Af$(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TF;this.Background.H(Ce);this.N.Z(true);this.N.OS(true);this.N.OT(true);this.Dr(
C.APC);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lh)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Do:null,CC:function(G){},AIS:function(s){this.CC(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyM:function(s){
this.E4(s);},Zw:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Do.BL=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BK._Init.call(this.Do={I:this},0);this.__proto__=
C.D9;this.H(U0);this.AttrSet.A90(A.jb.Gj);this.AttrSet.A9Z(A.jb.H9);this.AttrSet.
Ahq(A.jb.Text);this.Do.Filter=1;this.AttrSet.Aht(A.aaL(A.fl.Ak));this.AttrSet.A9W(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Do._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Do._ReInit();this.AttrSet.Aht(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMy={RU:
null,AaZ:null,TE:null,TD:null,RZ:null,QE:null,R0:null,RX:null,RY:null,RW:null,CP:
function(){var B;this.RU.Ch(this);this.AaZ.Ch(this);this.TE.Ch(this);this.TD.Ch(
this);this.RZ.Ch(this);this.QE.Ch(this);this.R0.Ch(this);this.RX.Ch(this);this.RY.
Ch(this);this.RW.Ch(this);},GH:function(G){C.R1.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RU.Z(true);this.AaZ.Z(false);
this.RX.Z(false);this.RY.Z(false);this.RW.Z(false);this.RZ.Z(true);this.QE.Z(true
);this.R0.Z(true);}break;case 1:{this.RU.Z(false);this.AaZ.Z(true);this.RX.Z(true
);this.RY.Z(true);this.RW.Z(true);this.RZ.Z(false);this.QE.Z(false);this.R0.Z(false
);}break;default:A.ab5("%s%e",Alf,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MT],this);},_Init:function(aArg){C.R1._Init.call(this,aArg);C.
RU._Init.call(this.RU={I:this},0);C.AMt._Init.call(this.AaZ={I:this},0);C.TE._Init.
call(this.TE={I:this},0);C.TD._Init.call(this.TD={I:this},0);C.RZ._Init.call(this.
RZ={I:this},0);C.QE._Init.call(this.QE={I:this},0);C.R0._Init.call(this.R0={I:this
},0);C.RX._Init.call(this.RX={I:this},0);C.RY._Init.call(this.RY={I:this},0);C.RW.
_Init.call(this.RW={I:this},0);this.__proto__=C.AMy;this.RU.H(BD);this.RU.Aj(true
);this.RU.Bi(false);this.AaZ.H(IW);this.AaZ.Aj(true);this.AaZ.Bi(false);this.TE.
H(Qd);this.TE.Aj(true);this.TE.Bi(true);this.TD.H(Aag);this.TD.Aj(true);this.TD.
Bi(false);this.RZ.H(Alh);this.RZ.Aj(true);this.RZ.Bi(true);this.QE.H(Aop);this.QE.
Aj(true);this.QE.Bi(false);this.R0.H(As$);this.R0.Aj(true);this.R0.Bi(true);this.
RX.H(Xi);this.RX.Aj(true);this.RX.Bi(true);this.RY.H(AZi);this.RY.Aj(true);this.
RY.Bi(false);this.RW.H(AZj);this.RW.Aj(true);this.RW.Bi(true);this.J(this.RU,0);
this.J(this.AaZ,0);this.J(this.TE,0);this.J(this.TD,0);this.J(this.RZ,0);this.J(
this.QE,0);this.J(this.R0,0);this.J(this.RX,0);this.J(this.RY,0);this.J(this.RW,
0);},_Done:function(){this.__proto__=C.R1;this.RU._Done();this.AaZ._Done();this.
TE._Done();this.TD._Done();this.RZ._Done();this.QE._Done();this.R0._Done();this.
RX._Done();this.RY._Done();this.RW._Done();C.R1._Done.call(this);},_ReInit:function(
){C.R1._ReInit.call(this);this.RU._ReInit();this.AaZ._ReInit();this.TE._ReInit();
this.TD._ReInit();this.RZ._ReInit();this.QE._ReInit();this.R0._ReInit();this.RX.
_ReInit();this.RY._ReInit();this.RW._ReInit();this.CP();},_Mark:function(D){var B;
C.R1._Mark.call(this,D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMM={AkU:function(L6){if(!L6)return;var Fy=A._NewObject(
A.Device.Filter,0);var HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HW);var Ac_=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fy.CX(Ac_);L6.Bk(Fy);
},AD6:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pk=A.
_GetAutoObject(A.Device.Device).Bt.B9();if(Pk<2)return false;var BCJ=A._GetAutoObject(
A.Device.Device).Bt.Hv(0,6);var BCK=A._GetAutoObject(A.Device.Device).Bt.Hv(Pk-1
,6);var A2m=A._NewObject(A.Core.Bs,0);A2m.Initialize(BCJ);var A4s=A._NewObject(A.
Core.Bs,0);A4s.Initialize(BCK);if((A2m.AbZ()!==A4s.AbZ())||(A2m.Year!==A4s.Year)
)return true;else return false;},_Init:function(aArg){C.Aa1._Init.call(this,aArg
);this.__proto__=C.AMM;this.ATu(C.AHq);this.ATv(C.ADy);this.ATk(C.QE);this.ArT(A.
aaR(A.acf.AVZ));this.Dl(A.aaR(A.acf.Akm));},_ReInit:function(){C.Aa1._ReInit.call(
this);this.ArT(A.aaR(A.acf.AVZ));this.Dl(A.aaR(A.acf.Akm));},_className:"Application::AnimalWeights"
};C.AMH={AkU:function(L6){if(!L6)return;var Fy=A._NewObject(A.Device.Filter,0);var
HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CX(HW);var ABl=A._NewObject(A.Device.Int32FilterCriterion
,0);ABl.Initialize(7,2,0,true);Fy.CX(ABl);L6.Bk(Fy);},AD6:function(){return A._GetAutoObject(
A.Device.Device).Bt.B9()>0;},_Init:function(aArg){C.Aa1._Init.call(this,aArg);this.
__proto__=C.AMH;this.ATu(C.AVj);this.ATv(C.APN);this.ATk(C.TE);this.ArT(A.aaR(A.
acf.A71));this.Dl(A.aaR(A.acf.Arv));},_ReInit:function(){C.Aa1._ReInit.call(this
);this.ArT(A.aaR(A.acf.A71));this.Dl(A.aaR(A.acf.Arv));},_className:"Application::AnimalTemperatures"
};C.AUp={VE:null,VF:null,X0:null,AgI:null,KC:null,AP:null,A$:null,Ea:null,Lv:null
,AnU:null,KW:null,KX:null,ZO:null,ZP:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.KC.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VE.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VE.M[2]-1,0,this.VE.M[2]+1,aSize[1]]);this.VF.H([this.VE.M[2],0,this.VE.M[2]+22,
aSize[1]]);this.Lv.H([this.VF.M[2]-1,0,this.VF.M[2]+1,aSize[1]]);this.X0.H([this.
VF.M[2],0,this.VF.M[2]+22,aSize[1]]);this.AnU.H([this.X0.M[2]-1,0,this.X0.M[2]+1
,aSize[1]]);this.AgI.H([this.X0.M[2],0,aSize[0],aSize[1]]);this.KW.H(this.VE.M);
this.KX.H(this.VF.M);this.ZO.H(this.X0.M);this.ZP.H(this.AgI.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.KC.L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hv(Ad,6);var A1E=this.AX.I8(Ad,3);var A2i=
this.AX.I8(Ad,2);var A2h=this.AX.I8(Ad,5);var A4g=this.AX.I8(Ad,4);this.T(A._GetAutoObject(
A.acj.KO).AC0(AlD));this.KC.R(A._GetAutoObject(A.acj.KO).A6S(AlD));this.VE.L(A._GetAutoObject(
A.acj.Assessment).Qr(A1E));this.VF.L(A._GetAutoObject(A.acj.Assessment).Qr(A2i));
this.X0.L(A._GetAutoObject(A.acj.Assessment).Qr(A2h));this.AgI.L(A._GetAutoObject(
A.acj.Assessment).Qr(A4g));this.KW.L(A._GetAutoObject(A.acj.Assessment).XB(A1E));
this.KX.L(A._GetAutoObject(A.acj.Assessment).XB(A2i));this.ZO.L(A._GetAutoObject(
A.acj.Assessment).XB(A2h));this.ZP.L(A._GetAutoObject(A.acj.Assessment).XB(A4g));
this.KW.Z(A1E===5);this.KX.Z(A2i===5);this.ZO.Z(A2h===5);this.ZP.Z(A4g===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
VE={I:this},0);A.acg.AL._Init.call(this.VF={I:this},0);A.acg.AL._Init.call(this.
X0={I:this},0);A.acg.AL._Init.call(this.AgI={I:this},0);A.acg.Text._Init.call(this.
KC={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Lv={I:this},0);A.acg.AL._Init.call(this.AnU={I:this},0);A.acg.Text._Init.call(this.
KW={I:this},0);A.acg.Text._Init.call(this.KX={I:this},0);A.acg.Text._Init.call(this.
ZO={I:this},0);A.acg.Text._Init.call(this.ZP={I:this},0);this.__proto__=C.AUp;this.
V.H(O8);this.VE.H(AZk);this.VF.H(AZl);this.X0.H(AZm);this.AgI.H(AZn);this.KC.R(Ro
);this.KC.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lv.L(A.jb.Bc);this.AnU.L(A.jb.Bc);this.KW.H(AZo);this.KW.R(Rp);this.KX.H(AZp
);this.KX.R(Rp);this.ZO.H(AIB);this.ZO.R(Rp);this.ZP.H(AZq);this.ZP.R(Rp);this.J(
this.VE,0);this.J(this.VF,0);this.J(this.X0,0);this.J(this.AgI,0);this.J(this.KC
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Lv,0);this.
J(this.AnU,0);this.J(this.KW,0);this.J(this.KX,0);this.J(this.ZO,0);this.J(this.
ZP,0);this.KC.S(A.aaL(A.fl.Af));this.KW.S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af
));this.ZO.S(A.aaL(A.fl.Af));this.ZP.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VE._Done();this.VF._Done();this.X0._Done();this.AgI._Done(
);this.KC._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Lv._Done(
);this.AnU._Done();this.KW._Done();this.KX._Done();this.ZO._Done();this.ZP._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VE._ReInit(
);this.VF._ReInit();this.X0._ReInit();this.AgI._ReInit();this.KC._ReInit();this.
AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Lv._ReInit();this.AnU._ReInit(
);this.KW._ReInit();this.KX._ReInit();this.ZO._ReInit();this.ZP._ReInit();this.KC.
S(A.aaL(A.fl.Af));this.KW.S(A.aaL(A.fl.Af));this.KX.S(A.aaL(A.fl.Af));this.ZO.S(
A.aaL(A.fl.Af));this.ZP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VF)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APL={Go:null,YZ:null,YV:null,YW:null,YX:null,YY:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Go={I:this},0);A.acg.Text._Init.call(this.YZ={I:this},0);A.acg.Text._Init.call(this.
YV={I:this},0);A.acg.Text._Init.call(this.YW={I:this},0);A.acg.Text._Init.call(this.
YX={I:this},0);A.acg.Text._Init.call(this.YY={I:this},0);this.__proto__=C.APL;this.
Background.L(A.jb.Text);this.Go.H(AIz);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date
));this.Go.L(A.jb.Bm);this.YZ.H(AIr);this.YZ.A6(0x12);this.YZ.R(A.aaR(A.acf.Bs));
this.YZ.L(A.jb.Bm);this.YV.H(AIC);this.YV.A6(0x12);this.YV.R(A.aaR(A.acf.AUr));this.
YV.L(A.jb.Bm);this.YW.H(AZr);this.YW.A6(0x12);this.YW.R(A.aaR(A.acf.AUs));this.YW.
L(A.jb.Bm);this.YX.H(AZs);this.YX.A6(0x12);this.YX.R(A.aaR(A.acf.AOB));this.YX.L(
A.jb.Bm);this.YY.H(AZt);this.YY.A6(0x12);this.YY.R(A.aaR(A.acf.ANC));this.YY.L(A.
jb.Bm);this.J(this.Go,0);this.J(this.YZ,0);this.J(this.YV,0);this.J(this.YW,0);this.
J(this.YX,0);this.J(this.YY,0);this.Go.S(A.aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af
));this.YV.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af));
this.YY.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Go._Done();
this.YZ._Done();this.YV._Done();this.YW._Done();this.YX._Done();this.YY._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Go._ReInit(
);this.YZ._ReInit();this.YV._ReInit();this.YW._ReInit();this.YX._ReInit();this.YY.
_ReInit();this.Go.R(A.aaR(A.acf.Date));this.YZ.R(A.aaR(A.acf.Bs));this.YV.R(A.aaR(
A.acf.AUr));this.YW.R(A.aaR(A.acf.AUs));this.YX.R(A.aaR(A.acf.AOB));this.YY.R(A.
aaR(A.acf.ANC));this.Go.S(A.aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af));this.YV.S(A.
aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af));this.YY.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Go)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMB={AkU:function(L6){if(!L6)return;
var Fy=A._NewObject(A.Device.Filter,0);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HW);var
AA4=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA4.Initialize(3,5,0,true
);Fy.CX(AA4);L6.Bk(Fy);},AD6:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B9()>0;},_Init:function(
aArg){C.Aa1._Init.call(this,aArg);this.__proto__=C.AMB;this.ATu(C.AUp);this.ATv(
C.APL);this.ATk(C.TD);this.ArT(A.aaR(A.acf.Axv));this.Dl(A.aaR(A.acf.Ano));},_ReInit:
function(){C.Aa1._ReInit.call(this);this.ArT(A.aaR(A.acf.Axv));this.Dl(A.aaR(A.acf.
Ano));},_className:"Application::AnimalRatings"};C.IH={B6:null,Y:null,V:null,Uy:
5,T:function(E){C.I5.T.call(this,E);this.V.R(E);},Dg:function(E){C.I5.Dg.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},Au0:function(G){var B;var NE=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NE)return;
if(((B=NE.Dd(0x1))[2]-B[0])>((B=NE.M)[2]-B[0]))this.S(A.aaL(A.fl.HJ));},Kx:function(
E){if(this.Uy===E)return;this.Uy=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAY:function(G){A.pe([this,this.Au0],this);},_Init:function(aArg){C.I5._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IH;this.Y.A0(0x3F);this.Y.H(AID);this.Y.A_R(5);this.
Y.JW(3);this.V.A0(0x34);this.V.H(Aai);this.V.Jb(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.Em=[this,this.
AAY];this.V.S(A.aaL(A.fl.Kr));},_Done:function(){this.__proto__=C.I5;this.Y._Done(
);this.V._Done();C.I5._Done.call(this);},_ReInit:function(){C.I5._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kr));},_Mark:function(D){
var B;C.I5._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RU={AfR:0,Ai:function(Ae){C.FA.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RQ));if(this.AfR>=0)this.Kz((this.AfR.toFixed(
)+CQ)+A.aaR(A.acf.Ko));else this.Kz(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.
Ch.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfR=-1;
else this.AfR=A._GetAutoObject(A.Device.Helper).W.RQ();this.Am();},_Init:function(
aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RU;},_className:"Application::AnimalInfoItemAge"
};C.RZ={A4Y:0,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afv));if(
this.A4Y>0)this.Kz((A._GetAutoObject(A.Device.Converter).Ak$(this.A4Y)+CQ)+A._GetAutoObject(
A.acj.DU).Af4());else this.Kz(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(
this,G);this.A4Y=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RZ;},_className:
"Application::AnimalInfoItemWeight"};C.TE={Y:null,Ei:null,Ey:null,Fe:null,P0:null
,Fd:null,P1:null,Aji:0,Pj:0,CP:function(){this.Am();},Ai:function(Ae){C.JN.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Bil));this.Fe.R(this.Aji.toFixed());this.Fd.R(this.Pj.
toFixed());if(!!this.Aji||!!this.Pj)this.P1.R(AZu+(this.Aji+this.Pj).toFixed());
else this.P1.R(A.aaR(A.acf.ASq));},Ch:function(G){C.JN.Ch.call(this,G);var Ak1;Ak1=
A._GetAutoObject(A.Device.Helper).Bjl(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Aji=Ak1.Get(2);this.Pj=Ak1.Get(1);this.Am();},Dg:
function(E){C.JN.Dg.call(this,E);this.P0.L(E);this.P1.L(E);},AsR:function(G){if(
!!this.Aji||!!this.Pj){this.Fe.Z(true);this.P0.Z(true);this.Fd.Z(true);}else{this.
Fe.Z(false);this.P0.Z(false);this.Fd.Z(false);}this.Ei.H(this.Fe.M);this.Ei.Z(this.
Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq());},Au0:function(G){var B;var
NE=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NE)return;if(((B=NE.Dd(0x1))[2]-B[0])>((
B=NE.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.P0.S(A.aaL(A.fl.Ak));this.Fe.S(
A.aaL(A.fl.Ak));this.P1.S(A.aaL(A.fl.Ak));}},AAY:function(G){A.pe([this,this.Au0
],this);},_Init:function(aArg){C.JN._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.Ey={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
P0={I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
P1={I:this},0);this.__proto__=C.TE;this.Y.H(AyA);this.Y.Bn3(0);this.Y.JW(3);this.
Ei.H(AZv);this.Ei.L(A.jb.H9);this.Ey.H(Ayy);this.Ey.L(A.jb.Gj);this.Fe.A0(0x34);
this.Fe.H(Aai);this.Fe.Hn(2);this.Fe.Jb(true);this.Fe.R(U2);this.Fe.L(A.jb.Text);
this.Fe.Aj(true);this.P0.A0(0x34);this.P0.H(Aai);this.P0.Jb(true);this.P0.R(AIi);
this.P0.L(A.jb.Text);this.P0.Aj(true);this.Fd.A0(0x34);this.Fd.H(Aai);this.Fd.Hn(
2);this.Fd.Jb(true);this.Fd.R(U2);this.Fd.L(A.jb.Bm);this.Fd.Aj(true);this.P1.A0(
0x34);this.P1.H(Aai);this.P1.Jb(true);this.P1.R(Ro);this.P1.L(A.jb.Text);this.P1.
Aj(true);this.J(this.Y,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.Fe,0);
this.J(this.P0,0);this.J(this.Fd,0);this.J(this.P1,0);this.Y.Em=[this,this.AAY];
this.Fe.Q7([this,this.AsR]);this.Fe.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));
this.Fd.Q7([this,this.AsR]);this.Fd.S(A.aaL(A.fl.Af));this.P1.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JN;this.Y._Done();this.Ei._Done();this.Ey._Done(
);this.Fe._Done();this.P0._Done();this.Fd._Done();this.P1._Done();C.JN._Done.call(
this);},_ReInit:function(){C.JN._ReInit.call(this);this.Y._ReInit();this.Ei._ReInit(
);this.Ey._ReInit();this.Fe._ReInit();this.P0._ReInit();this.Fd._ReInit();this.P1.
_ReInit();this.Fe.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.
fl.Af));this.P1.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JN._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fe
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QE={FW:0,Ic:0
,A2M:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(AZw+A.aaR(A.acf.AHl));if(
this.A2M){this.Kz((A._GetAutoObject(A.Device.Converter).S_(this.FW,2,true)+CQ)+A.
_GetAutoObject(A.acj.DU).Aaw());this.Background.L(A._GetAutoObject(A.acj.DU).AzV(
this.FW,this.Ic));this.Dg(A._GetAutoObject(A.acj.DU).AzX(this.FW,this.Ic));}else{
this.Kz(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.Dg(A.jb.Text);}},Ch:
function(G){C.FA.Ch.call(this,G);var LF=A._GetAutoObject(A.Device.Helper).Mb(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LF){this.A2M=true;this.FW=A._GetAutoObject(A.acj.DU).AlA(LF,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2M=false;this.FW=0;}this.Ic=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.QE;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.TD={Y:null,FX:null,Ei:
null,Ey:null,MK:null,Fe:null,Fd:null,O1:null,Aay:0,Aji:0,Pj:0,CP:function(){this.
Am();},Ai:function(Ae){C.JN.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axv));this.MK.R(
this.Aay.toFixed());this.Fe.R(this.Aji.toFixed());this.Fd.R(this.Pj.toFixed());}
,Ch:function(G){C.JN.Ch.call(this,G);var Ak1;Ak1=A._GetAutoObject(A.Device.Helper
).A6Y(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aay=Ak1.Get(3);this.Aji=Ak1.Get(2);this.Pj=Ak1.Get(1);this.Am();},AsR:
function(G){if((!!this.Aay||!!this.Aji)||!!this.Pj){this.MK.Z(true);this.Fe.Z(true
);this.Fd.Z(true);this.O1.Z(false);}else{this.MK.Z(false);this.Fe.Z(false);this.
Fd.Z(false);this.O1.Z(true);}this.FX.H(this.MK.M);this.FX.Z(this.MK.Fq());this.Ei.
H(this.Fe.M);this.Ei.Z(this.Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq()
);},Au0:function(G){var B;var NE=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NE)return;
if(((B=NE.Dd(0x1))[2]-B[0])>((B=NE.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.Fe.
S(A.aaL(A.fl.Ak));this.MK.S(A.aaL(A.fl.Ak));}},AAY:function(G){A.pe([this,this.Au0
],this);},_Init:function(aArg){C.JN._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.Ei={
I:this},0);A.acg.AL._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MK={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
Fd={I:this},0);A.acg.Text._Init.call(this.O1={I:this},0);this.__proto__=C.TD;this.
Y.A0(0x3F);this.Y.H(AyA);this.Y.A_R(5);this.Y.JW(3);this.FX.H(AZx);this.FX.L(A.jb.
E1);this.Ei.H(AZy);this.Ei.L(A.jb.H9);this.Ey.H(AZz);this.Ey.L(A.jb.Gj);this.MK.
A0(0x3C);this.MK.H(Aai);this.MK.Hn(2);this.MK.Jb(true);this.MK.R(U2);this.MK.L(A.
jb.Text);this.MK.Aj(true);this.Fe.A0(0x3C);this.Fe.H(Aai);this.Fe.Hn(2);this.Fe.
Jb(true);this.Fe.R(U2);this.Fe.L(A.jb.Text);this.Fe.Aj(true);this.Fd.A0(0x3C);this.
Fd.H(Aai);this.Fd.Hn(2);this.Fd.Jb(true);this.Fd.R(U2);this.Fd.L(A.jb.Bm);this.Fd.
Aj(true);this.O1.A0(0x34);this.O1.H(Aai);this.O1.Jb(true);this.O1.A6(0x11);this.
O1.R(A.aaR(A.acf.ASq));this.O1.L(A.jb.Text);this.O1.Aj(true);this.O1.Z(false);this.
J(this.Y,0);this.J(this.FX,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.MK
,0);this.J(this.Fe,0);this.J(this.Fd,0);this.J(this.O1,0);this.Y.Em=[this,this.AAY
];this.MK.Q7([this,this.AsR]);this.MK.S(A.aaL(A.fl.Af));this.Fe.Q7([this,this.AsR
]);this.Fe.S(A.aaL(A.fl.Af));this.Fd.Q7([this,this.AsR]);this.Fd.S(A.aaL(A.fl.Af
));this.O1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JN;this.Y._Done(
);this.FX._Done();this.Ei._Done();this.Ey._Done();this.MK._Done();this.Fe._Done(
);this.Fd._Done();this.O1._Done();C.JN._Done.call(this);},_ReInit:function(){C.JN.
_ReInit.call(this);this.Y._ReInit();this.FX._ReInit();this.Ei._ReInit();this.Ey.
_ReInit();this.MK._ReInit();this.Fe._ReInit();this.Fd._ReInit();this.O1._ReInit(
);this.O1.R(A.aaR(A.acf.ASq));this.MK.S(A.aaL(A.fl.Af));this.Fe.S(A.aaL(A.fl.Af)
);this.Fd.S(A.aaL(A.fl.Af));this.O1.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JN._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.O1)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMj={_Init:function(aArg){C.Aqh._Init.call(
this,aArg);this.__proto__=C.AMj;this.A49=1;this.Rk.Cr(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqh._ReInit.call(this);this.Rk.Cr(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARe={ON:null,IQ:null,H6:null,IO:null,GP:null,Al3:function(G){A.pe([this,this.
BAO],this);},BAO:function(G){A._GetAutoObject(C.A8).Cd(3);},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.ON._Init.call(this.ON={I:this},0);C.BW._Init.call(this.
IQ={I:this},0);C.SS._Init.call(this.H6={I:this},0);C.AGP._Init.call(this.IO={I:this
},0);C.Rb._Init.call(this.GP={I:this},0);this.__proto__=C.ARe;var B;this.Jc(A.aaR(
A.acf.A$U));this.IQ.H(Ah3);this.IQ.Aj(true);this.IQ.T(A.aaR(A.acf.Language));this.
IQ.A_y(100);this.H6.H(U1);this.H6.Aj(true);this.H6.T(A.aaR(A.acf.Date));this.H6.
Bi(true);this.IO.H(Aah);this.IO.Aj(true);this.IO.T(A.aaR(A.acf.Bs));this.GP.H(Ah2
);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGl));this.GP.Bi(true);
this.GP.Ar4(false);this.GP.A_G(true);this.J2(this.Y,-1);this.J2(this.Ay,-1);this.
J(this.IQ,0);this.J(this.H6,0);this.J(this.IO,0);this.J(this.GP,0);this.IQ.Zu(A.
aaL(A.fl.H2));this.IQ.Zv(A.aaL(A.fl.H2));this.IQ.Au([B=this.ON,B.B$,B.Cb]);this.
IQ.CK(this.ON);this.H6.Ab1([B=this.H6,B.FV]);this.H6.Gs([this,this.D_,this.GS]);
this.H6.AkA(A.aaL(A.ach.Edit));this.H6.Ab7([B=A._GetAutoObject(A.Device.Helper),
B.U3,B.U6]);this.IO.Ab1([B=this.IO,B.FV]);this.IO.Gs([this,this.D_,this.GS]);this.
IO.AkA(A.aaL(A.ach.Edit));this.IO.Ab7([B=A._GetAutoObject(A.Device.Helper),B.U3,
B.U6]);this.GP.Ab1([B=this.GP,B.FV]);this.GP.Gs([this,this.D_,this.GS]);this.GP.
AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(A.Device.Device),B.AST,B.A0B
]);},_Done:function(){this.__proto__=C.Cg;this.ON._Done();this.IQ._Done();this.H6.
_Done();this.IO._Done();this.GP._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.ON._ReInit();this.IQ._ReInit();this.H6._ReInit();
this.IO._ReInit();this.GP._ReInit();this.Jc(A.aaR(A.acf.A$U));this.IQ.T(A.aaR(A.
acf.Language));this.H6.T(A.aaR(A.acf.Date));this.IO.T(A.aaR(A.acf.Bs));this.GP.T(
A.aaR(A.acf.AGl));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.ON
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aa1={Bg:null,FE:null,Am1:null,AmK:null,Sg:null,A7i:A.jV,KQ:A.jV,ARI:null,ARJ:
null,ADr:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A3k],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);this.A3k(this);},E4:function(
G){var B;A.z$([this,this.A3k],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Zw:function(E){C.D9.Zw.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zw(E);},ATu:function(E){if(this.ARI===E)return;this.
ARI=E;if(!!this.Bg)this.Bg.N4(E);},ATv:function(E){if(this.ARJ===E)return;this.ARJ=
E;this.Bpz(this);},ATk:function(E){if(this.ADr===E)return;this.ADr=E;A.pe([this,
this.Bpy],this);},ArT:function(E){if(this.A7i===E)return;this.A7i=E;this.Sg.R(E);
},Dl:function(E){if(this.KQ===E)return;this.KQ=E;if(!!this.Bg)this.Bg.Dl(E);},AkU:
function(L6){A.ab5("%s",AZA);},AD6:function(){A.ab5("%s",Alg);return false;},AxD:
function(G){if(!!this.Bg)this.HP(this.Bg);this.Bg=A._NewObject(C.Gc,0);this.Bg.H(
Ath);this.Bg.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KQ);this.Bg.
N4(this.ARI);this.Bg.Zw(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},Bpz:function(
G){var B;if(!!this.FE)this.HP(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(
this.ARJ,0))?B:null);this.FE.H(IW);this.J(this.FE,0);},Bpy:function(G){var B;if(
!!this.Am1)this.HP(this.Am1);if(!!this.ADr&&this.AD6()){this.Am1=(C.I5.isPrototypeOf(
B=A._NewObject(this.ADr,0))?B:null);this.Am1.H(BD);this.Am1.Bi(false);this.J(this.
Am1,0);this.Sg.Z(false);}else this.Sg.Z(true);},A3k:function(G){this.AkU(A._GetAutoObject(
A.Device.Device).Bt);this.AxD(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmK={I:this},0);C.CG._Init.call(this.Sg={I:this},
0);this.__proto__=C.Aa1;this.AmK.H(BD);this.AmK.L(A.jb.CJ);this.Sg.H(AHR);this.Sg.
A6(0x11);this.Sg.L(A.jb.Text);this.J(this.AmK,0);this.J(this.Sg,0);this.Sg.S(A.aaL(
A.fl.Kr));this.Sg.AZ(A.aaL(A.fl.HJ));},_Done:function(){this.__proto__=C.D9;this.
AmK._Done();this.Sg._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmK._ReInit();this.Sg._ReInit();this.Sg.S(A.aaL(A.fl.Kr));this.Sg.
AZ(A.aaL(A.fl.HJ));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Km={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
BcU],[B=A._GetAutoObject(A.Device.Device),B.AEF,B.AIU],0);A.pe([this,this.BcU],this
);},Du:function(){return 5;},Gl:function(aIndex){return this.AnimalListContentToString.
BS(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zq(E);},BcU:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Km;this.B_.Set(0,0);this.B_.Set(1,14);this.B_.Set(2,
1);this.B_.Set(3,2);this.B_.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARN={IQ:null
,Y_:null,Zh:null,Ze:null,Zi:null,Y$:null,Zc:null,Zf:null,Zg:null,Zb:null,ON:null
,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.BW._Init.call(this.IQ={I:this
},0);C.Ni._Init.call(this.Y_={I:this},0);C.Ni._Init.call(this.Zh={I:this},0);C.Ni.
_Init.call(this.Ze={I:this},0);C.Ni._Init.call(this.Zi={I:this},0);C.Ni._Init.call(
this.Y$={I:this},0);C.Ni._Init.call(this.Zc={I:this},0);C.Ni._Init.call(this.Zf={
I:this},0);C.Ni._Init.call(this.Zg={I:this},0);C.Ni._Init.call(this.Zb={I:this},
0);C.ON._Init.call(this.ON={I:this},0);this.__proto__=C.ARN;var B;this.Jc(A.aaR(
A.acf.Settings));this.IQ.H(Ah3);this.IQ.Aj(true);this.IQ.T(A.aaR(A.acf.Language)
);this.IQ.A_y(100);this.Y_.H(Ati);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.ACC));this.
Y_.Nl(16);this.Zh.H(Atj);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.AHg));this.Zh.Nl(
22);this.Ze.H(Atk);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.Temperature));this.Ze.
Nl(17);this.Zi.H(AyB);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.ACz));this.Zi.Nl(42
);this.Y$.H(Aox);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.Device));this.Y$.Nl(18);
this.Zc.H(Aox);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.Asp));this.Zc.Nl(19);this.
Zf.H(AZB);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.LinkTransponder));this.Zf.Nl(89
);this.Zg.H(Aoy);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.UnlinkTransponder));this.
Zg.Nl(95);this.Zb.H(Aor);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.ACR));this.Zb.Nl(
76);this.J(this.IQ,0);this.J(this.Y_,0);this.J(this.Zh,0);this.J(this.Ze,0);this.
J(this.Zi,0);this.J(this.Y$,0);this.J(this.Zc,0);this.J(this.Zf,0);this.J(this.Zg
,0);this.J(this.Zb,0);this.IQ.Zu(A.aaL(A.fl.H2));this.IQ.Zv(A.aaL(A.fl.H2));this.
IQ.Au([B=this.ON,B.B$,B.Cb]);this.IQ.CK(this.ON);this.Y_.AR=[B=this.Y_,B.Np];this.
Zh.AR=[B=this.Zh,B.Np];this.Ze.AR=[B=this.Ze,B.Np];this.Zi.AR=[B=this.Zi,B.Np];this.
Y$.AR=[B=this.Y$,B.Np];this.Zc.AR=[B=this.Zc,B.Np];this.Zf.AR=[B=this.Zf,B.Np];this.
Zg.AR=[B=this.Zg,B.Np];this.Zb.AR=[B=this.Zb,B.Np];},_Done:function(){this.__proto__=
C.Cg;this.IQ._Done();this.Y_._Done();this.Zh._Done();this.Ze._Done();this.Zi._Done(
);this.Y$._Done();this.Zc._Done();this.Zf._Done();this.Zg._Done();this.Zb._Done(
);this.ON._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.IQ._ReInit();this.Y_._ReInit();this.Zh._ReInit();this.Ze._ReInit();this.Zi.
_ReInit();this.Y$._ReInit();this.Zc._ReInit();this.Zf._ReInit();this.Zg._ReInit(
);this.Zb._ReInit();this.ON._ReInit();this.Jc(A.aaR(A.acf.Settings));this.IQ.T(A.
aaR(A.acf.Language));this.Y_.T(A.aaR(A.acf.ACC));this.Zh.T(A.aaR(A.acf.AHg));this.
Ze.T(A.aaR(A.acf.Temperature));this.Zi.T(A.aaR(A.acf.ACz));this.Y$.T(A.aaR(A.acf.
Device));this.Zc.T(A.aaR(A.acf.Asp));this.Zf.T(A.aaR(A.acf.LinkTransponder));this.
Zg.T(A.aaR(A.acf.UnlinkTransponder));this.Zb.T(A.aaR(A.acf.ACR));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ON)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMw={EU:null,Init:function(aArg){this.EU.Ahw(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));},AUw:function(
){this.EU.Ae0(this.AOZ());this.AaA=!this.EU.EZ.AY;},AiX:function(G){this.EU.Ahw(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag0)));this.AUw();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dl(A.aaR(A.acf.A8p));else this.Dl(A.aaR(A.acf.Arv));this.Am();},AOZ:function(
){var Bz=A._NewObject(C.Aqv,0);var Qo=A._GetAutoObject(A.Device.Helper).AOg(A._GetAutoObject(
A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqr(Qo-(86400*this.
Mz));Bz.AnA(AZC);Bz.Q5([].concat(0,Bz.Gk.slice(1,4)));Bz.Q5(A.abN(Bz.Gk,(Qo-Dx)|
0));Bz.Q5(A.abP(Bz.Gk,3400));Bz.Q5([].concat(Bz.Gk.slice(0,3),4200));var Gh=A._GetAutoObject(
A.Device.Device).Bt.B9();Bz.AwW(Gh);Bz.Yi();if(Gh>0){var O=0;while(O<Gh){var ApY=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var ApZ=A._GetAutoObject(A.Device.Device
).Bt.Hv(O,6)-Dx;if(ApY>0)Bz.Aqi(ApZ,ApY);O=O+1;}}return Bz;},_Init:function(aArg
){C.Lb._Init.call(this,aArg);C.AqZ._Init.call(this.EU={I:this},0);this.__proto__=
C.AMw;this.EU.H(AZD);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFl(C.AG3);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Lb;this.EU._Done(
);C.Lb._Done.call(this);},_ReInit:function(){C.Lb._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.Lb._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMx={Z4:null,O4:null,AgU:null,AaA:false,Init:function(aArg){this.Z4.Ahw(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag0)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgU.Z(this.AaA);},CC:function(
G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiX],[B=A._GetAutoObject(A.Device.
Helper),B.U3,B.U6],0);A.zV([this,this.AiX],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0
);A.pe([this,this.Amf],this);},E4:function(G){var B;A.z$([this,this.AiX],[B=A._GetAutoObject(
A.Device.Helper),B.U3,B.U6],0);A.z9([this,this.AiX],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Amf:function(G){var Fy=A._NewObject(A.Device.Filter,
0);var HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CX(HW);A._GetAutoObject(A.Device.Device).Bt.Bk(Fy
);},AiX:function(G){this.Z4.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));this.BoS();this.Am();},BoS:function(
){var B;var Gh=A._GetAutoObject(A.Device.Device).Bt.B9();var K$=A._NewObject(C.Aqv
,0);var Vr=A._NewObject(C.Aqv,0);var Qo=A._GetAutoObject(A.Device.Helper).AOg(A.
_GetAutoObject(A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqr(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K$.Q5([].concat(0,K$.Gk.slice(1
,4)));K$.Q5(A.abN(K$.Gk,(Qo-Dx)|0));K$.Q5(A.abP(K$.Gk,0));K$.Q5([].concat(K$.Gk.
slice(0,3),150000));K$.AnA(AZE);Vr.Q5([].concat(0,Vr.Gk.slice(1,4)));Vr.Q5(A.abN(
Vr.Gk,(Qo-Dx)|0));Vr.Q5(A.abP(Vr.Gk,0));Vr.Q5([].concat(Vr.Gk.slice(0,3),1500));
Vr.AnA(AZF);K$.AwW(Gh);K$.Yi();Vr.AwW(Gh);Vr.Yi();if(Gh>0){var O=0;var AaC=0;var
AAl=0;var AKe=0;var A2n=0;var Bdy=true;while(O<Gh){var Al$=A._GetAutoObject(A.Device.
Device).Bt.CF(O,8);var AaP=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-Dx;if(Al$>
0){K$.Aqi(AaP,Al$);if(!A2n){A2n=AaP;AKe=Al$;}if(AAl>0){var LF=A._GetAutoObject(A.
Device.Helper).Mb(AAl,AaP);if(!!LF){var FW=A._GetAutoObject(A.acj.DU).AlA(LF,AaC
,Al$);if(Bdy){Vr.Aqi(AAl,FW);Bdy=false;}Vr.Aqi(AaP,FW);}}AaC=Al$;AAl=AaP;}O=O+1;
}var AdO=A.acf.Bhn;var FW=A._GetAutoObject(A.Device.Helper).Bjn(A2n,AAl,AKe,AaC);
AdO=A._GetAutoObject(A.Device.Helper).MI(AdO,O9,FW.toFixed());AdO=A._GetAutoObject(
A.Device.Helper).MI(AdO,Ayh,A._GetAutoObject(A.acj.DU).Aaw());this.O4.Il.R(AdO);
}this.AaA=!K$.AY;if(this.AaA)this.O4.Il.R(A.jV);(C.O4.isPrototypeOf(B=this.O4.EU
)?B:null).Anw([B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC]);this.Z4.Ae0(K$);
this.O4.Ae0(Vr);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqZ._Init.call(
this.Z4={I:this},0);C.AqZ._Init.call(this.O4={I:this},0);C.AkS._Init.call(this.AgU={
I:this},0);this.__proto__=C.AMx;this.Z4.H(AZG);this.Z4.T(A.aaR(A.acf.Afv));this.
Z4.AFl(C.AM5);this.O4.H(AZH);this.O4.T(A.aaR(A.acf.AHl));this.O4.AFl(C.O4);this.
AgU.H(U0);this.AgU.R(A.aaR(A.acf.Akm));this.J(this.Z4,0);this.J(this.O4,0);this.
J(this.AgU,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z4._Done(
);this.O4._Done();this.AgU._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z4._ReInit();this.O4._ReInit();this.AgU._ReInit();this.
Z4.T(A.aaR(A.acf.Afv));this.O4.T(A.aaR(A.acf.AHl));this.AgU.R(A.aaR(A.acf.Akm));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgU)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMu={
Avn:null,Avm:null,Axx:null,AuU:null,VD:null,Abo:null,Abn:null,Acl:null,Afi:null,
Init:function(aArg){this.VD.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));},A4Q:function(G){this.VD.Ab8(this.
AuU);this.Abo.Ab8(this.Avn);this.Abn.Ab8(this.Avm);this.Acl.Ab8(this.Axx);},Axw:
function(){var Gh=A._GetAutoObject(A.Device.Device).Bt.B9();this.AuU=A._NewObject(
C.Ajv,0);this.Avn=A._NewObject(C.Ajv,0);this.Avm=A._NewObject(C.Ajv,0);this.Axx=
A._NewObject(C.Ajv,0);if(Gh>0){var O=Gh-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hv(O,6);this.AtC(this.AuU,O,3,D8);this.AtC(this.Avn,O,2,D8);this.
AtC(this.Avm,O,5,D8);this.AtC(this.Axx,O,4,D8);O=O-1;}}this.AaA=!(((this.AuU.AY+
this.Avm.AY)+this.Avn.AY)+this.Axx.AY);A.pe([this,this.A4Q],this);},AtC:function(
A1n,Ad,A1m,Qi){var Alw=A._GetAutoObject(A.Device.Device).Bt.I8(Ad,A1m);if(!!Alw)
A1n.Ow(Alw,Qi);},Ab6:function(E){if(this.Mz===E)return;C.Lb.Ab6.call(this,E);if(
!!this.VD)this.VD.Ab6(E);if(!!this.Abo)this.Abo.Ab6(E);if(!!this.Abn)this.Abn.Ab6(
E);if(!!this.Acl)this.Acl.Ab6(E);this.Afi.Ab6(E);},AiX:function(G){this.VD.Ahw(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag0)));this.Axw();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dl(A.aaR(A.acf.BkM));else this.Dl(A.aaR(A.acf.Ano));this.Am();},_Init:function(
aArg){C.Lb._Init.call(this,aArg);C.AhB._Init.call(this.VD={I:this},0);C.AhB._Init.
call(this.Abo={I:this},0);C.AhB._Init.call(this.Abn={I:this},0);C.AhB._Init.call(
this.Acl={I:this},0);C.AUt._Init.call(this.Afi={I:this},0);this.__proto__=C.AMu;
this.Dl(A.aaR(A.acf.Ano));this.VD.H(AZI);this.VD.R(A.aaR(A.acf.AGq));this.Abo.H(
AZJ);this.Abo.R(A.aaR(A.acf.Feed));this.Abn.H(AIE);this.Abn.R(A.aaR(A.acf.AGs));
this.Acl.H(Atl);this.Acl.R(A.aaR(A.acf.AGt));this.Afi.H(AZK);this.J(this.VD,-1);
this.J(this.Abo,-1);this.J(this.Abn,-1);this.J(this.Acl,-1);this.J(this.Afi,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.Lb;this.VD._Done();this.Abo.
_Done();this.Abn._Done();this.Acl._Done();this.Afi._Done();C.Lb._Done.call(this);
},_ReInit:function(){C.Lb._ReInit.call(this);this.VD._ReInit();this.Abo._ReInit(
);this.Abn._ReInit();this.Acl._ReInit();this.Afi._ReInit();this.Dl(A.aaR(A.acf.Ano
));this.VD.R(A.aaR(A.acf.AGq));this.Abo.R(A.aaR(A.acf.Feed));this.Abn.R(A.aaR(A.
acf.AGs));this.Acl.R(A.aaR(A.acf.AGt));},_Mark:function(D){var B;C.Lb._Mark.call(
this,D);if((B=this.Avn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avm)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMv={EU:null,WK:null,Aek:null,A2K:false,Init:function(aArg){this.WK.Ahw(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag0)));},Bl:function(aSize){C.Lb.Bl.call(this,aSize);this.Aek.H(this.EU.M);},Ai:
function(Ae){C.Lb.Ai.call(this,Ae);var BCl=!this.AaA&&this.A2K;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aek.R(A.aaR(A.acf.A8p));else this.
Aek.R(A.aaR(A.acf.Arv));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dl(A.aaR(
A.acf.BkN));else this.Dl(A.aaR(A.acf.BkO));this.Aek.Z(BCl);},AiX:function(G){this.
WK.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.Ag0)));this.AaA=true;this.A2K=true;this.Axw();this.AUw();this.
Am();},AUw:function(){this.EU.Ae0(this.AOZ());if(!!this.EU.EZ&&(this.EU.EZ.AY>0)
){this.AaA=false;this.A2K=false;}},AOZ:function(){var Bz=A._NewObject(C.Aqv,0);var
Qo=A._GetAutoObject(A.Device.Helper).AOg(A._GetAutoObject(A.Device.Helper).Dv());
var Dx=A._GetAutoObject(A.Device.Helper).Aqr(Qo-(86400*this.Mz));Bz.AnA(AZL);Bz.
Q5([].concat(0,Bz.Gk.slice(1,4)));Bz.Q5(A.abN(Bz.Gk,(Qo-Dx)|0));Bz.Q5(A.abP(Bz.Gk
,3400));Bz.Q5([].concat(Bz.Gk.slice(0,3),4200));var Gh=A._GetAutoObject(A.Device.
Device).Bt.B9();Bz.AwW(Gh);Bz.Yi();if(Gh>0){var O=0;while(O<Gh){var ApY=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var ApZ=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-
Dx;if(ApY>0)Bz.Aqi(ApZ,ApY);O=O+1;}}return Bz;},BjC:function(){var Gh=A._GetAutoObject(
A.Device.Device).Bt.B9();if(Gh>0){var Bgf=A._NewObject(C.Ajv,0);var O=Gh-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LT=A._GetAutoObject(A.Device.Helper).ADf(D3);if(!!LT)Bgf.Ow(LT,D3.Timestamp
);O=O-1;}return Bgf;}else return null;},Axw:function(){this.WK.Ab8(this.BjC());if(
!!this.WK.N7&&(this.WK.N7.AY>0))this.AaA=false;},_Init:function(aArg){C.Lb._Init.
call(this,aArg);C.AqZ._Init.call(this.EU={I:this},0);C.AhB._Init.call(this.WK={I:
this},0);C.AkS._Init.call(this.Aek={I:this},0);this.__proto__=C.AMv;this.EU.H(Ath
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFl(C.AG3);this.WK.H(AZM);this.WK.
R(A.aaR(A.acf.Rating));this.Aek.H(Ath);this.J(this.EU,-2);this.J(this.WK,-2);this.
J(this.Aek,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Lb;this.EU._Done(
);this.WK._Done();this.Aek._Done();C.Lb._Done.call(this);},_ReInit:function(){C.
Lb._ReInit.call(this);this.EU._ReInit();this.WK._ReInit();this.Aek._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WK.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.Lb._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WS={Q:null,Gx:null,Gy:null
,QN:null,AM:0,Gq:0,F$:100,FI:0,Init:function(aArg){},I2:function(G){this.FI=1;C.
Eg.I2.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QN.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QN.Z(this.Gq!==
this.F$);this.QN.L(this.V.AQ);if((this.FI===4)||(this.FI===5))this.QN.L(A.jb.E1);
},Al4:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AyW],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qu:function(G){if(this.FI===5)A.pe([this,this.
AyW],this);if(this.FI===4)A.pe([this,this.AyX],this);if(this.FI===1)A.pe(this.AR
,this);this.FI=0;this.Am();},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcW:function(s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcW],E,0);if(!!E)A.pe([this,this.AcW],this);},Al5:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AyX],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},Kf:function(G){this.FI=0;},AyX:function(s){this.Kf(s);},Ka:function(G){this.
FI=0;},AyW:function(s){this.Ka(s);},Bx:function(E){if(E<this.Gq)E=this.Gq;if(E>this.
F$)E=this.F$;if(this.AM===E)return;this.AM=E;this.Am();},Ga:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EV:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(
this.Gx={I:this},0);A.Core.BK._Init.call(this.Gy={I:this},0);A.acg.Ap._Init.call(
this.QN={I:this},0);this.__proto__=C.WS;this.H(K1);this.Gx.Filter=5;this.Gy.Filter=
4;this.Background.H(K1);this.V.H(AcN);this.V.R(Ly);this.QN.H(AyC);this.J(this.QN
,0);this.Gx.BL=[this,this.Al4];this.Gx.D1=[this,this.Al4];this.Gy.BL=[this,this.
Al5];this.Gy.D1=[this,this.Al5];this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak
));this.V.Cr(null);this.QN.Ax(A.aaL(A.ach.AMS));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gx._Done();this.Gy._Done();this.QN._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gx._ReInit();this.Gy.
_ReInit();this.QN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUT={AC:null,CM:null,HN:
null,Bl:function(aSize){C.WS.Bl.call(this,aSize);this.CM.H([this.QN.M[2],this.QN.
M[1],this.M[2],this.QN.M[3]]);},Ai:function(Ae){C.WS.Ai.call(this,Ae);this.CM.AbF(
0,this.CM.AY-1);if(this.Gq!==this.F$)this.QN.Z(true);},Init:function(aArg){},C5:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Kf:function(G){var F;var BO=this.AM;C.WS.Kf.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},Ka:function(G){var F;var BO=this.AM;C.WS.Ka.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var QA=0;if(this.Gq
!==this.F$){if(E<this.Gq){E=this.F$;QA=-this.CM.GO*this.CM.AY;}if(E>this.F$){E=this.
Gq;QA=this.CM.GO;}}C.WS.Bx.call(this,E);if(!!QA)this.CM.Gb(QA);this.CM.GT(this.AM
);this.CM.HI(this.CM.Gt,true,this.HN,null);},Hm:function(G){var B;var Gg=this.CM.
G6;var CA=(C.CG.isPrototypeOf(B=this.CM.Cj)?B:null);if(!CA)return;CA.S(this.V.B6
);CA.AZ(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));else CA.
R(Xg);CA.H(A.abK(CA.M,[(B=this.CM.M)[2]-B[0],this.CM.GO]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Ga(0);this.EV(this.AC.Du()-1);this.CM.
JA(this.AC.Du());this.CM.AbF(0,this.CM.AY-1);}},_Init:function(aArg){C.WS._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gm._Init.call(this.
HN={I:this},0);this.__proto__=C.AUT;this.H(K1);this.QN.H(AZN);this.CM.Ae8(40);this.
CM.N4(C.CG);this.HN.WI(23);this.HN.HO(1);this.HN.Fr(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.CM.Hm=[this,this.Hm];this.Init(
aArg);},_Done:function(){this.__proto__=C.WS;this.CM._Done();this.HN._Done();C.WS.
_Done.call(this);},_ReInit:function(){C.WS._ReInit.call(this);this.CM._ReInit();
this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WS._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.R0={ALD:0
,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.AHl));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kz((A._GetAutoObject(A.Device.Converter).Ak$(this.ALD
)+CQ)+A._GetAutoObject(A.acj.DU).Af4());else this.Kz(A.aaR(A.acf.Unknown));},Ch:
function(G){C.FA.Ch.call(this,G);this.ALD=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.FA._Init.call(this,aArg);this.__proto__=C.R0;},_className:"Application::AnimalInfoItemWeightGain"
};C.APC={Bc:null,Df:null,Init:function(aArg){var B;A.zX([this,this.Nt],[B=A._GetAutoObject(
A.Device.Device),B.AEE,B.AIT],0);},DX:function(G){C.IL.DX.call(this,G);this.Df.Ax(
A._GetAutoObject(A.Device.Converter).BhC(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IL._Init.call(this,aArg);A.acg.C8._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Df={I:this},0);this.__proto__=C.APC;this.Bc.DC(
AyD);this.Bc.DM(AyE);this.Bc.L(A.jb.Bc);this.Df.H(AZO);this.Df.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Df,0);this.Df.Ax(A.aaL(A.ach.AjW));this.Init(aArg);},_Done:
function(){this.__proto__=C.IL;this.Bc._Done();this.Df._Done();C.IL._Done.call(this
);},_ReInit:function(){C.IL._ReInit.call(this);this.Bc._ReInit();this.Df._ReInit(
);},_Mark:function(D){var B;C.IL._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANF={ZM:null,KD:null,Mp:null,Timer:null,ACq:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZM.R(A._GetAutoObject(A.Device.Helper).MI(A.aaR(A.acf.Brb),O9,this.ACq.
toFixed()));},CC:function(G){this.Timer.Ar(true);},E4:function(G){this.Timer.Ar(
false);},BBA:function(G){if(this.ACq>1){this.ACq=this.ACq-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).AxE();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZM={I:this},0);A.acg.Text.
_Init.call(this.KD={I:this},0);A.acg.Ap._Init.call(this.Mp={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANF;this.Background.L(A.jb.CT
);this.N.Z(true);this.ZM.H(AZP);this.ZM.KU(true);this.ZM.R(A.jV);this.ZM.L(A.jb.
Text);this.KD.H(AZQ);this.KD.KU(true);this.KD.R(A.aaR(A.acf.A5H));this.KD.L(A.jb.
Text);this.Mp.H(AIF);this.J(this.ZM,0);this.J(this.KD,0);this.J(this.Mp,0);this.
ZM.S(A.aaL(A.fl.Af));this.KD.S(A.aaL(A.fl.Af));this.Mp.Ax(A.aaL(A.ach.ABX));this.
Timer.ME=[this,this.BBA];},_Done:function(){this.__proto__=C.AB;this.ZM._Done();
this.KD._Done();this.Mp._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZM._ReInit();this.KD._ReInit();this.Mp._ReInit(
);this.Timer._ReInit();this.KD.R(A.aaR(A.acf.A5H));this.ZM.S(A.aaL(A.fl.Af));this.
KD.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANm={KD:null,AmB:null
,QG:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad$.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa6<=10)this.KD.R(A.aaR(A.acf.BhO));else this.KD.R(A.aaR(A.acf.
A5I));},_Init:function(aArg){C.Ad$._Init.call(this,aArg);A.acg.Text._Init.call(this.
KD={I:this},0);A.acg.Ap._Init.call(this.AmB={I:this},0);C.CG._Init.call(this.QG={
I:this},0);this.__proto__=C.ANm;this.ST.H(AZR);this.Mp.H(AZS);this.KD.H(AZT);this.
KD.KU(true);this.KD.L(A.jb.Text);this.AmB.H(AIF);this.QG.H(AZU);this.QG.Z(true);
this.QG.R(A.aaR(A.acf.AUu));this.QG.L(A.jb.Text);this.J(this.KD,0);this.J(this.AmB
,0);this.J(this.QG,0);this.KD.S(A.aaL(A.fl.Af));this.AmB.Ax(A.aaL(A.ach.ABX));this.
QG.S(A.aaL(A.fl.Af));this.QG.AZ(A.aaL(A.fl.Ak));this.QG.Cr(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad$;this.KD._Done();this.AmB._Done();this.QG._Done();
C.Ad$._Done.call(this);},_ReInit:function(){C.Ad$._ReInit.call(this);this.KD._ReInit(
);this.AmB._ReInit();this.QG._ReInit();this.QG.R(A.aaR(A.acf.AUu));this.KD.S(A.aaL(
A.fl.Af));this.QG.S(A.aaL(A.fl.Af));this.QG.AZ(A.aaL(A.fl.Ak));this.QG.Cr(A.aaL(
A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ad$._Mark.call(this,D);if((B=this.
KD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMh={_Init:function(aArg){C.I6._Init.call(this,aArg);this.__proto__=C.AMh;this.
RT.Ar(false);this.RT.Aj(false);this.RT.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVV={_Init:function(aArg){C.I6._Init.call(this,aArg);this.__proto__=C.AVV;this.
S9.Ar(false);this.S9.Aj(false);this.S9.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AO6={DX:function(G){C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad0(5));},_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=
C.AO6;},_className:"Application::HeaderControlListFilter"};C.APE={DX:function(G){
C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(6));},_Init:
function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.APE;},_className:"Application::HeaderWatchListFilter"
};C.API={D0:null,Nb:null,_Init:function(aArg){C.T2._Init.call(this,aArg);C.CG._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.Nb={I:this},0);this.__proto__=
C.API;this.D0.H(Aou);this.D0.R(A.aaR(A.acf.A6d));this.D0.L(A.jb.Text);this.Nb.H(
AZV);this.Nb.L(A.jb.Text);this.Nb.A6(0x12);this.J(this.D0,-2);this.J(this.Nb,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(A.aaL(A.fl.Bh));this.Nb.Ax(A.aaL(A.ach.ADJ)
);},_Done:function(){this.__proto__=C.T2;this.D0._Done();this.Nb._Done();C.T2._Done.
call(this);},_ReInit:function(){C.T2._ReInit.call(this);this.D0._ReInit();this.Nb.
_ReInit();this.D0.R(A.aaR(A.acf.A6d));this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.T2._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANh={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(
!!this.AX){var Oo=this.AX.H3(Ad,8);var BC9=this.AX.Sm(Ad,21);this.Abg.R(A._GetAutoObject(
A.Device.Helper).Mb(BC9,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Ss.Z(Oo);this.Am();}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=
C.ANh;},_className:"Application::CalfListWatchItem"};C.T2={Ag$:null,Ahb:null,_Init:
function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag$={I:this},
0);A.acg.Ap._Init.call(this.Ahb={I:this},0);this.__proto__=C.T2;this.Ag$.H(AZW);
this.Ag$.L(A.jb.Text);this.Ag$.A6(0x12);this.Ahb.H(AIG);this.Ahb.L(A.jb.Text);this.
Ahb.A6(0x12);this.J2(this.DS,-1);this.J(this.Ag$,0);this.J(this.Ahb,0);this.Ag$.
Ax(A.aaL(A.ach.Arc));this.Ahb.Ax(A.aaL(A.ach.Ag7));},_Done:function(){this.__proto__=
C.De;this.Ag$._Done();this.Ahb._Done();C.De._Done.call(this);},_ReInit:function(
){C.De._ReInit.call(this);this.Ag$._ReInit();this.Ahb._ReInit();},_Mark:function(
D){var B;C.De._Mark.call(this,D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqv={Gk:A.wg,OJ:A.wf,Q5:function(E){if(A.aaY(this.Gk,E))return;this.Gk=E;},AnA:
function(E){if(A.aaX(this.OJ,E))return;this.OJ=E;},_Init:function(aArg){A.acv.ACp.
_Init.call(this,aArg);this.__proto__=C.Aqv;},_className:"Application::BoundCoordList"
};C.AjD={T7:null,Wy:null,T8:null,Wz:null,Ss:null,Zj:null,Abg:null,AP:null,A$:null
,Ea:null,Lv:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T7.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wy.H(this.T7.M);this.A$.H([this.T7.
M[2]-1,0,this.T7.M[2]+1,aSize[1]]);this.T8.H([this.T7.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wz.H(this.T8.M);this.Ea.H([this.T8.M[2]-1,0,this.T8.M[2]+1,aSize[
1]]);this.Ss.H([this.T8.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zj.H(this.Ss.
M);this.Lv.H([this.Ss.M[2]-1,0,this.Ss.M[2]+1,aSize[1]]);this.Abg.H([this.Ss.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K_=this.V.AQ;
this.T7.AE6(K_);this.Wy.L(K_);this.T8.AE6(K_);this.Wz.L(K_);this.Ss.AE6(K_);this.
Zj.L(K_);this.Abg.L(K_);this.Zj.Z(!this.Ss.Fq());},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;var Mj=this.AX.CF(Ad,1);var Ic=this.AX.AmW(Ad,14);var Auv=this.AX.CF(
Ad,5);var LT=this.AX.I8(Ad,13);this.T(Mj.toFixed());if(!!LT){this.T7.Z(true);this.
T7.AwM(A._GetAutoObject(A.acj.Assessment).BdG(LT));this.Wy.Z(false);}else{this.T7.
Z(false);this.Wy.Z(true);}if(Auv>0){this.T8.Z(true);this.T8.AwM(A._GetAutoObject(
A.acj.Assessment).BdG(A._GetAutoObject(A.Device.Converter).AsK(Ic,Auv)));this.Wz.
Z(false);}else{this.T8.Z(false);this.Wz.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kn._Init.call(this.T7={I:this},0);A.acg.Text._Init.
call(this.Wy={I:this},0);C.Kn._Init.call(this.T8={I:this},0);A.acg.Text._Init.call(
this.Wz={I:this},0);C.Kn._Init.call(this.Ss={I:this},0);A.acg.Text._Init.call(this.
Zj={I:this},0);A.acg.Text._Init.call(this.Abg={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Lv={I:this},0);this.__proto__=C.AjD;this.
Wy.H(AZX);this.Wy.R(Aov);this.Wz.H(Aow);this.Wz.R(Aov);this.Ss.AwM(A.jb.Ri);this.
Zj.H(Aow);this.Zj.R(Rp);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lv.L(A.jb.Bc);this.J(this.T7,0);this.J(this.Wy,0);this.J(this.T8,0);this.J(
this.Wz,0);this.J(this.Ss,0);this.J(this.Zj,0);this.J(this.Abg,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Lv,0);this.Wy.S(A.aaL(A.fl.Af
));this.Wz.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(A.fl.Af));this.Abg.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.T7._Done();this.Wy.
_Done();this.T8._Done();this.Wz._Done();this.Ss._Done();this.Zj._Done();this.Abg.
_Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Lv._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.T7._ReInit();this.Wy.
_ReInit();this.T8._ReInit();this.Wz._ReInit();this.Ss._ReInit();this.Zj._ReInit(
);this.Abg._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.
Lv._ReInit();this.Wy.S(A.aaL(A.fl.Af));this.Wz.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(
A.fl.Af));this.Abg.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pw:null,Ang:null
,EZ:null,DR:null,Aro:0,Arp:0,A7H:0,AmN:0,AqI:0,Init:function(aArg){this.ATf(6);this.
ATg(8);this.ATr(A.jb.AV);this.ATs(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.Bmv([this.DR.Abc[0],(B=this.DR.M)[3]-B[1]]);this.WM(this);},ATe:function(
E){if(this.Pw===E)return;this.Pw=E;this.DR.ATe(E);},ATs:function(E){if(this.Arp===
E)return;this.Arp=E;this.DR.ATs(E);},ATr:function(E){if(this.Aro===E)return;this.
Aro=E;this.DR.ATr(E);this.DR.BmA(E);},WM:function(G){var B;while(!!this.DR.Ah)this.
HP(this.DR.Ah);if(!this.EZ)return;this.DR.AnA([((this.EZ.OJ[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gk[2]-this.EZ.Gk[0]))|0,this.DR.OJ[1]]);this.DR.AnA([this.DR.OJ[0]
,((this.EZ.OJ[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gk[3]-this.EZ.Gk[1]))|0]);var O;
var Di=this.DR.OJ[1];var D8;var A41=this.EZ.Gk[1];var BkL=(((B=this.DR.M)[3]-B[1
])/this.DR.OJ[1])|0;for(O=0;O<BkL;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Di))-(this.Ang.Ascent+this.Ang.Descent))+2,((B=this.M)[2]-
B[0])-this.Arp,(((B=this.M)[3]-B[1])-(O*Di))+2]);D8.L(this.A7H);D8.S(this.Ang);D8.
A6(0x24);if(O>0)D8.R(this.AJR(A41));else D8.R(this.AKo());A41=A41+this.EZ.OJ[1];
this.J(D8,0);}},BGP:function(s){this.WM(s);},Bnq:function(E){if(this.Ang===E)return;
this.Ang=E;this.Am();},Azv:function(A04){var B;if(!this.EZ||(this.EZ.Gk[3]===this.
EZ.Gk[1]))return 0;return(((A04-this.EZ.Gk[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gk[
3]-this.EZ.Gk[1]))|0;},Ae0:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.Ae0(null);else{var Bz=A._NewObject(A.acv.ACp,0);Bz.AwW(this.EZ.AEk);Bz.Yi();var
JC=E.AlK;while(!!JC){Bz.Aqi(this.By9(JC.P7),this.By_(JC.P8));JC=JC.Ah;}this.DR.Ae0(
Bz);this.Am();}},By9:function(Bxl){var B;if(!this.EZ||(this.EZ.Gk[2]===this.EZ.Gk[
0]))return 0;return((Bxl-this.EZ.Gk[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gk[2]-this.
EZ.Gk[0]);},By_:function(A04){var B;if(!this.EZ||(this.EZ.Gk[3]===this.EZ.Gk[1])
)return 0;return((A04-this.EZ.Gk[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gk[3]-this.EZ.
Gk[1]);},AJR:function(AoT){return AoT.toFixed();},AKo:function(){return A.jV;},ATg:
function(E){if(this.AmN===E)return;this.AmN=E;this.DR.ATg(E);},ATf:function(E){if(
this.AqI===E)return;this.AqI=E;this.DR.ATf(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AyF);this.A7H=A.jb.Text;this.DR.A0(0x3F);this.DR.H(AyF);this.DR.BnQ(AZY);this.
DR.Bmj(A.jb.Ri);this.DR.Bm9(A.jb.Bc);this.DR.Boa(A.jb.Ri);this.J(this.DR,0);this.
Pw=A.aaL(A.acv.ACI);this.Ang=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bnq(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pw)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ang)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AM5={AJR:function(AoT){return A._GetAutoObject(
A.Device.Converter).Ax7(AoT,0);},AKo:function(){return A._GetAutoObject(A.acj.DU
).Af4();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AM5;}
,_className:"Application::BodyWeightGraph"};C.O4={JO:null,Ey:null,Ei:null,FX:null
,II:null,IJ:null,Init:function(aArg){this.ATe(null);},WM:function(G){var B;var F;
C.DR.WM.call(this,G);var AKT=0;var ALI=0;if(!!this.JO){AKT=this.Azv(A._GetAutoObject(
A.Device.Helper).ADe((F=this.JO,F[1].call(F[0]))));ALI=this.Azv(A._GetAutoObject(
A.Device.Helper).ADd((F=this.JO,F[1].call(F[0]))));}this.FX.H(A.abP(this.FX.M,0)
);this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.M)[3]-B[1])-ALI));this.II.H(
A.abO(this.II.M,(this.FX.M[3]-((((B=this.II.M)[3]-B[1])/2)|0))-2));this.Ei.H(A.abP(
this.Ei.M,this.FX.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-
B[1])-AKT));this.IJ.H(A.abO(this.IJ.M,(this.Ei.M[3]-((((B=this.IJ.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Ei.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJR:function(AoT){return A._GetAutoObject(A.Device.Converter
).S_(AoT,0,true);},AKo:function(){return A._GetAutoObject(A.acj.DU).Aaw();},Anw:
function(E){if(A.aaZ(this.JO,E))return;if(!!this.JO)A.z$([this,this.AiP],this.JO
,0);this.JO=E;if(!!E)A.zX([this,this.AiP],E,0);if(!!E)A.pe([this,this.AiP],this);
},AiP:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.
acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.II={I:this},0);A.
acg.AL._Init.call(this.IJ={I:this},0);this.__proto__=C.O4;this.Ey.A0(0xD);this.Ey.
H(Aac);this.Ey.L(A.jb.Gj);this.Ei.A0(0xD);this.Ei.H(Te);this.Ei.L(A.jb.H9);this.
FX.A0(0xD);this.FX.H(Aab);this.FX.L(A.jb.E1);this.II.A0(0xD);this.II.H(Aae);this.
II.AwA(A.jb.H9);this.II.AwB(A.jb.H9);this.II.AwD(A.jb.E1);this.II.AwC(A.jb.E1);this.
IJ.A0(0xD);this.IJ.H(Xe);this.IJ.AwA(A.jb.Gj);this.IJ.AwB(A.jb.Gj);this.IJ.AwD(A.
jb.H9);this.IJ.AwC(A.jb.H9);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FX
,-1);this.J(this.II,-1);this.J(this.IJ,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FX._Done();this.II._Done();this.
IJ._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ey._ReInit();this.Ei._ReInit();this.FX._ReInit();this.II._ReInit();this.IJ._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JO)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqZ={EU:null,EZ:null,Sb:null,Il:
null,Bc:null,AxO:A.jV,DK:A.jV,AO1:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.Sb.
H([30,0,aSize[0]-2,30]);this.Il.H(this.Sb.M);if(!!this.EU)this.EU.H([30,this.Sb.
M[3],aSize[0],this.Bc.M[1]]);},Ahw:function(E){if(this.AxO===E)return;this.AxO=E;
this.Il.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.Sb.R(E);},AFl:
function(E){if(this.AO1===E)return;this.AO1=E;this.Bpw(this);},Bpw:function(G){var
B;if(!!this.EU)this.HP(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AO1,0))?B:null);if(!!this.EU){this.EU.H(AZZ);this.EU.Ae0(this.EZ);this.J(this.EU
,0);}},Ae0:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.Ae0(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Sb={I:this},0);A.acg.Text._Init.call(this.Il={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqZ;this.H(AcP);this.Ar(false);this.Sb.H(AIH);this.
Sb.A6(0x11);this.Sb.R(Ly);this.Sb.L(A.jb.Text);this.Il.A6(0x14);this.Il.R(A.jV);
this.Il.L(A.jb.Text);this.Bc.H(AZ0);this.Bc.L(A.jb.Bc);this.J(this.Sb,0);this.J(
this.Il,0);this.J(this.Bc,0);this.Sb.S(A.aaL(A.fl.Ak));this.Il.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Sb._Done();this.
Il._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.Sb._ReInit();this.Il._ReInit();this.Bc._ReInit();this.
Sb.S(A.aaL(A.fl.Ak));this.Il.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Il)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMD={AgD:null,GT:function(E
){var F;C.Gc.GT.call(this,E);if(!!this.AgD)(F=this.AgD,F[2].call(F[0],E));},A9T:
function(E){if(A.aaZ(this.AgD,E))return;if(!!this.AgD)A.z$([this,this.A3l],this.
AgD,0);this.AgD=E;if(!!E)A.zX([this,this.A3l],E,0);if(!!E)A.pe([this,this.A3l],this
);},A3l:function(G){var F;if(!this.AgD)return;(F=this.AgD,F[2].call(F[0],this.FN(
)));},_Init:function(aArg){C.Gc._Init.call(this,aArg);this.__proto__=C.AMD;},_Mark:
function(D){var B;C.Gc._Mark.call(this,D);if((B=this.AgD)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUt={Rg:null
,P2:null,XY:null,XZ:null,Mz:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Rg.H(A.abI(this.Rg.M,(((B=this.M)[3]-B[1])/2)|
0));this.P2.H(A.abI(this.P2.M,(((B=this.M)[3]-B[1])/2)|0));this.Rg.H(A.abO(this.
Rg.M,(((B=this.M)[3]-B[1])/2)|0));this.P2.H(A.abO(this.P2.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rg.R(A._GetAutoObject(
A.Device.Helper).MI(A.aaR(A.acf.BkF),O9,this.Mz.toFixed()));},Ab6:function(E){if(
this.Mz===E)return;this.Mz=E;this.BB$(this);},BB$:function(G){var B;var AJY=(((B=
this.M)[2]-B[0])/this.Mz)|0;this.XY.H(A.abM(this.XY.M,(((B=this.M)[2]-B[0])-(this.
Mz*AJY))+(((AJY/2)-(((B=this.XY.M)[2]-B[0])/2))|0)));this.XZ.H(A.abM(this.XZ.M,(((
B=this.M)[2]-B[0])-AJY)+(((AJY/2)-(((B=this.XZ.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rg={
I:this},0);A.acg.Text._Init.call(this.P2={I:this},0);A.acg.Text._Init.call(this.
XY={I:this},0);A.acg.Text._Init.call(this.XZ={I:this},0);this.__proto__=C.AUt;this.
H(BD);this.Rg.H(AZ1);this.Rg.Hn(5);this.Rg.A6(0x11);this.Rg.L(A.jb.Text);this.P2.
H(AZ2);this.P2.Hn(5);this.P2.A6(0x14);this.P2.R(A.aaR(A.acf.AhT));this.P2.L(A.jb.
Text);this.XY.H(AZ3);this.XY.R(AII);this.XY.L(A.jb.Text);this.XZ.H(AZ4);this.XZ.
R(AII);this.XZ.L(A.jb.Text);this.J(this.Rg,0);this.J(this.P2,0);this.J(this.XY,0
);this.J(this.XZ,0);this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.XY.
S(A.aaL(A.fl.H2));this.XZ.S(A.aaL(A.fl.H2));},_Done:function(){this.__proto__=A.
Core.P;this.Rg._Done();this.P2._Done();this.XY._Done();this.XZ._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rg._ReInit(
);this.P2._ReInit();this.XY._ReInit();this.XZ._ReInit();this.P2.R(A.aaR(A.acf.AhT
));this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rg)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.Lb={V8:null,AjJ:null,KQ:A.jV,Mz:0,AaA:false,Init:function(aArg){var A12=A._NewObject(
C.Ko,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RQ()<A12.
C7(O))A12.Ann=O+1;this.V8.CK(A12);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjJ.
Z(this.AaA);if(this.AaA)this.Bb(null);else this.Bb(this.V8);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.V8.Q,F[1].call(F[0])))(F=this.V8.Q,F[2].
call(F[0],this.V8.AC.C7(0)));A.zX([this,this.AI8],[B=A._GetAutoObject(A.Device.Helper
),B.U3,B.U6],0);A.zV([this,this.AI8],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.pe([this
,this.Amf],this);},E4:function(G){var B;A.z$([this,this.AI8],[B=A._GetAutoObject(
A.Device.Helper),B.U3,B.U6],0);A.z9([this,this.AI8],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Zw:function(E){if(A.aa0(this.AR,E))return;C.D9.Zw.call(
this,E);this.V8.AR=E;},Ab6:function(E){if(this.Mz===E)return;this.Mz=E;A.pe([this
,this.Amf],this);},BwV:function(Aq){this.Ab6(Aq);},AiX:function(G){},AI8:function(
s){this.AiX(s);},Dl:function(E){if(this.KQ===E)return;this.KQ=E;this.AjJ.R(E);},
Amf:function(G){var Fy=A._NewObject(A.Device.Filter,0);var AzE=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzE.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhT()-((this.Mz-1)*86400))-1,true);Fy.CX(AzE);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HW);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fy);},BlD:function(){return this.Mz;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUT._Init.call(this.V8={I:this},0);C.AkS._Init.call(
this.AjJ={I:this},0);this.__proto__=C.Lb;this.V8.H(BD);this.AjJ.H(U0);this.J(this.
V8,0);this.J(this.AjJ,0);this.V8.Au([this,this.BlD,this.BwV]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V8._Done();this.AjJ._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V8._ReInit();this.AjJ.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANM={Wd:null,YP:null,RatingMode:null,PH:null,_Init:
function(aArg){C.Cg._Init.call(this,aArg);C.Ni._Init.call(this.Wd={I:this},0);C.
BW._Init.call(this.YP={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Ir._Init.call(this.PH={I:this},0);this.__proto__=C.ANM;var B;this.Hj.R(A.
aaR(A.acf.ACz));this.Jc(A.aaR(A.acf.A59));this.Wd.H(Atm);this.Wd.Aj(true);this.Wd.
T(A.aaR(A.acf.AsW));this.Wd.Bi(true);this.Wd.Nl(23);this.YP.H(AZ5);this.YP.Aj(true
);this.YP.T(A.aaR(A.acf.A$q));this.YP.Bi(false);this.PH.H(AZ6);this.PH.Aj(true);
this.PH.T(A.aaR(A.acf.A56));this.PH.Bi(true);this.PH.Ga(3);this.PH.EV(14);this.PH.
IR(A.aaR(A.acf.Ko)+Atn);this.PH.Jd(A.aaR(A.acf.GL)+Atn);this.J(this.Wd,0);this.J(
this.YP,0);this.J(this.PH,0);this.Wd.AR=[B=this.Wd,B.Np];this.YP.Au([B=this.RatingMode
,B.B$,B.Cb]);this.YP.CK(this.RatingMode);this.PH.Au([B=A._GetAutoObject(A.Device.
Device),B.A8X,B.Bbz]);},_Done:function(){this.__proto__=C.Cg;this.Wd._Done();this.
YP._Done();this.RatingMode._Done();this.PH._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wd._ReInit();this.YP._ReInit();this.RatingMode.
_ReInit();this.PH._ReInit();this.Hj.R(A.aaR(A.acf.ACz));this.Jc(A.aaR(A.acf.A59)
);this.Wd.T(A.aaR(A.acf.AsW));this.YP.T(A.aaR(A.acf.A$q));this.PH.T(A.aaR(A.acf.
A56));this.PH.IR(A.aaR(A.acf.Ko)+Atn);this.PH.Jd(A.aaR(A.acf.GL)+Atn);},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Avb={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hn(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.
Text;}if(!Hf){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Avb;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADm={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PT,B.EC],0);A.pe([this,this.DX],this);},Dg:function(E){C.BQ.Dg.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.ADj));break;case 1:this.Ap.Ax(A.aaL(A.ach.APm));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APo));break;default:A.ab5("%s%e",AyG,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADm;this.Ap.H(AyH);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADj));this.Init(aArg);},_Done:function(){this.
__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADn={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PT,B.EC],0);A.pe([this,this.DX],this);},Dg:function(E){C.BQ.
Dg.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADk));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APn));break;case 2:this.Ap.Ax(A.aaL(A.ach.APp));break;default:A.ab5("%s%e"
,AyG,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADn;
this.Ap.H(AyH);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADk));this.Init(aArg);},
_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.FA={BT:null,Ax2:A.jV,Dg:function(E){C.JN.Dg.call(
this,E);this.BT.L(E);},Kz:function(E){if(this.Ax2===E)return;this.Ax2=E;this.BT.
R(E);},_Init:function(aArg){C.JN._Init.call(this,aArg);C.CG._Init.call(this.BT={
I:this},0);this.__proto__=C.FA;this.BT.A0(0x34);this.BT.H(AyA);this.BT.A6(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.AZ(A.aaL(
A.fl.Ak));this.BT.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JN;this.
BT._Done();C.JN._Done.call(this);},_ReInit:function(){C.JN._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));this.BT.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JN._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOK={WE:function(G){var B;this.Agx();this.AuK(A.aaR(A.acf.BjO),[this,this.Boq],[
B=A._GetAutoObject(A.Device.Device),B.A8Y,B.BbA]);A._GetAutoObject(C.BR).Fz();this.
I4(A.aaR(A.acf.AVv),[this,this.ATW],5);this.I4(A.aaR(A.acf.AVt),[this,this.ATV],
7);this.I4(A.aaR(A.acf.An1),[this,this.AwZ],2);this.I4(A.aaR(A.acf.AdV),[this,this.
AE1],1);this.I4(A.aaR(A.acf.AuI),[this,this.AEV],0);A._GetAutoObject(C.BR).Fz();
A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abt:function(){return C.ACb;},Abu:function(
){return C.ADu;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A64());},HQ:function(G){var F;C.GJ.HQ.call(this,G);if(this.Aki(
)===false){this.N.Cw(A._GetAutoObject(A.Device.Converter).Ajr((F=this.Fn,F[1].call(
F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OS(false);this.N.OT(false
);},Agj:function(){A._GetAutoObject(C.A8).Cd(44);},Boq:function(G){A._GetAutoObject(
A.Device.Device).AwP(!A._GetAutoObject(A.Device.Device).AqU);this.An9(this);},An9:
function(G){var Be=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Aw=Be.DL(
30,3);if(!!Aw)Be.Nq(Aw);if(A._GetAutoObject(A.Device.Device).AqU){var AAk=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A2U=A._GetAutoObject(A.Device.Helper).Dv()-
21600;AAk.Initialize(30,3,A2U,true);Be.CX(AAk);}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOK;
var B;this.Dr(C.APi);this.Dl(A.aaR(A.acf.A8m));this.AwU([B=A._GetAutoObject(A.Device.
Device),B.A8W,B.Bby]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.A8m));},_className:"Application::FreshCowListScreen"};C.AOJ={_Init:function(
aArg){C.I6._Init.call(this,aArg);this.__proto__=C.AOJ;this.Lf.Ar(false);this.Lf.
Aj(false);this.Lf.Z(false);this.Jt.Ar(false);this.Jt.Aj(false);this.Jt.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APi={DX:function(G){C.Kt.
DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(7));},_Init:
function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.APi;},_className:"Application::HeaderFreshCowListFilter"
};C.ADu={Jz:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.
call(this.Jz={I:this},0);C.CG._Init.call(this.D0={I:this},0);this.__proto__=C.ADu;
this.A_c(1);this.Jz.H(AZ7);this.Jz.R((A.aaR(A.acf.Calving)+AcS)+A.aaR(A.acf.A$3)
);this.Jz.L(A.jb.Text);this.D0.H(AZ8);this.D0.R(A.aaR(A.acf.AEc));this.D0.L(A.jb.
Text);this.J(this.Jz,0);this.J(this.D0,0);this.Jz.S(A.aaL(A.fl.Ak));this.Jz.AZ(A.
aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.De;this.Jz._Done();this.D0._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.Jz._ReInit();this.D0._ReInit();this.Jz.R((
A.aaR(A.acf.Calving)+AcS)+A.aaR(A.acf.A$3));this.D0.R(A.aaR(A.acf.AEc));this.Jz.
S(A.aaL(A.fl.Ak));this.Jz.AZ(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Jz).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.ACb={AG4:null,KS:null,UI:null,AP:null,A$:null
,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UI.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A$.H([this.UI.M[2]-1,0,this.UI.M[2]+1,aSize[
1]]);this.KS.H([this.UI.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KS.L(this.V.AQ);this.UI.Dg(this.V.AQ);},Ch:function(Ad){if(!this.AX
)return;this.Hs=Ad;if(!!this.AX){var IA=this.AX.CF(Ad,0);var Mj=this.AX.CF(Ad,1);
var A2T=this.AX.CF(Ad,29);var AlC=this.AX.Hv(Ad,28);this.T(Mj.toFixed());this.KS.
R(A2T.toFixed());this.UI.Ab6(A._GetAutoObject(A.Device.Device).AqT+1);this.UI.Bn4(
AlC);this.UI.R(A._GetAutoObject(A.acj.KO).AjN(AlC));A._GetAutoObject(A.Device.Device
).SR(Ad);this.Ap8(IA);this.Axw();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A4Q:function(G){this.UI.Ab8(this.AG4);},Axw:function(){var Gh=A._GetAutoObject(
A.Device.Device).Bt.B9();this.AG4=A._NewObject(C.Ajv,0);if(Gh>0){var O=Gh-1;while(
O>=0){var D8=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6);this.AtC(this.AG4,O,9,
D8);O=O-1;}}A.pe([this,this.A4Q],this);},AtC:function(A1n,Ad,A1m,Qi){var Alw=A._GetAutoObject(
A.Device.Device).Bt.I8(Ad,A1m);if(!!Alw)A1n.Ow(Alw,Qi);},Ap8:function(Ac8){var Fy=
A._NewObject(A.Device.Filter,0);var AzE=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzE.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZR(A._GetAutoObject(A.Device.
Device).AqT)-1,true);Fy.CX(AzE);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,Ac8,true);Fy.CX(HW);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.Text._Init.call(this.
KS={I:this},0);C.AUo._Init.call(this.UI={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.ACb;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(this.KS,0);this.J(this.UI,0);this.J(this.AP
,0);this.J(this.A$,0);this.KS.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.KS._Done();this.UI._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.KS._ReInit(
);this.UI._ReInit();this.AP._ReInit();this.A$._ReInit();this.KS.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AG4)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUo={AU8:0,Init:function(aArg){},AOR:function(){return A._GetAutoObject(A.Device.
Helper).Aqr(this.AU8);},AOT:function(){return this.AOR()+(this.Mz*86400);},Bn4:function(
E){if(this.AU8===E)return;this.AU8=E;A.pe([this,this.WM],this);},_Init:function(
aArg){C.AhB._Init.call(this,aArg);this.__proto__=C.AUo;this.Bc.H(AZ9);this.Bn1(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Du:function(){if(this.K&&this.K.Du)return this.K.
Du.apply(this,arguments);else return C.FactoryResetScope.BuU.apply(this,arguments
);},BuU:function(){return 3;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
jV;return this.FactoryResetScopeToString.BS(this.C7(aIndex));},_Init:function(aArg
){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.B_.
Set(0,0);this.B_.Set(1,1);this.B_.Set(2,2);var J7=this._variants();if(J7){this.K={
};J7._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);
this.__proto__=C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);
},_ReInit:function(){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acs.FactoryResetScope._variants(
);},K:null,_className:"Application::FactoryResetScope"};C.SetSaveTransponderScreen={
Bg4:false,Init:function(aArg){this.Bg4=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ew:function(G){if(this.Bd_){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);if(this.Bg4)A._GetAutoObject(A.Device.Device).A3(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).A3(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASp={WE:function(G){this.
Agx();A._GetAutoObject(C.BR).TC(A.aaR(A.acf.Settings),[this,this.A3V]);A._GetAutoObject(
C.BR).Fz();this.AMd();A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.ARF)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){},Abt:function(
){return C.Aqw;},Abu:function(){return C.Aq3;},Q_:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AC8());},HQ:function(G){C.
QD.HQ.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr(A._GetAutoObject(A.Device.Converter).AL_(this.LZ.AC_())));this.N.Cf=[this,
this.AcU];this.N.Fc(A.jV);}this.N.OS(false);this.N.OT(false);},Agj:function(){A.
_GetAutoObject(C.A8).Cd(47);},A3V:function(G){A._GetAutoObject(A.Device.Device).
Dw(0);A._GetAutoObject(C.A8).Cd(89);},_Init:function(aArg){C.QD._Init.call(this,
aArg);this.__proto__=C.ASp;this.Dr(C.ADo);this.Dl(A.aaR(A.acf.A8i));this.ATt(A._GetAutoObject(
C.Awa));},_ReInit:function(){C.QD._ReInit.call(this);this.Dl(A.aaR(A.acf.A8i));}
,_className:"Application::NoTransponderListScreen"};C.ASo={_Init:function(aArg){
C.I6._Init.call(this,aArg);this.__proto__=C.ASo;this.KY.Ar(false);this.KY.Aj(false
);this.KY.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADo={DX:function(G){C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(8));},_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.ADo;
},_className:"Application::HeaderNoTransponderListFilter"};C.ABW={AuZ:null,Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuZ.BS(aIndex);},_Init:
function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuZ={I:this},0);this.__proto__=C.ABW;},_Done:function(){this.__proto__=
C.Gd;this.AuZ._Done();C.Gd._Done.call(this);},_ReInit:function(){C.Gd._ReInit.call(
this);this.AuZ._ReInit();},_Mark:function(D){var B;C.Gd._Mark.call(this,D);if((B=
this.AuZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL9={Co:null,Ad3:null,Init:function(aArg){this.Bb(this.Co);},Lp:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaH];this.BP.Cf=null;
this.BP.Ca=[this,this.A3w];this.BP.CR(A.jV);this.BP.Cw(null);this.BP.C2(A.aaL(A.
ach.AeA));}return this.BP;},AAA:function(G){var Aa=(C.Ajk.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad3)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(AIJ);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ajk._Init.call(this.
Co={I:this},0);C.Ajk._Init.call(this.Ad3={I:this},0);this.__proto__=C.AL9;this.H(
Qc);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(IW);this.Co.T(A.aaR(A.acf.
AEm));this.Ad3.H(Qd);this.Ad3.T(A.aaR(A.acf.TB));this.J(this.Co,0);this.J(this.Ad3
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAA];this.Ad3.AR=[this,this.
AAA];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Co._Done();this.
Ad3._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Co._ReInit();this.Ad3._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AEm));this.Ad3.T(A.aaR(A.acf.TB));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BF_={Undefined:0,BF8:1,BF9:2,IdScanned:3,BE4:4,BD_:5,BEO:6};C.AMl={A$L:function(
){A._GetAutoObject(A.Device.Device).A3(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfG]);},_Init:function(aArg){C.AuP._Init.call(
this,aArg);this.__proto__=C.AMl;this.Gd.Au(1);this.ATz(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aeu={VZ:null,V0:null,V1:null,Ag4:null,Ag5:null,Ag6:null,CE:null,Cf:null,Ca:null
,An2:A.jV,An3:A.jV,An4:A.jV,Aq_:0,Aq$:0,Ara:0,Ahm:0,ZE:false,WN:false,Asq:false,
AsF:false,AsE:false,AjB:function(Fg){this.CE=Fg.CE;this.Cf=Fg.Cf;this.Ca=Fg.Ca;this.
An2=Fg.An2;this.An3=Fg.An3;this.An4=Fg.An4;this.Ahm=Fg.Ahm;this.VZ=Fg.VZ;this.V0=
Fg.V0;this.V1=Fg.V1;this.Ag4=Fg.Ag4;this.Ag5=Fg.Ag5;this.Ag6=Fg.Ag6;this.AsE=Fg.
AsE;this.AsF=Fg.AsF;this.Asq=Fg.Asq;this.WN=Fg.WN;this.ZE=Fg.ZE;this.Aq_=Fg.Aq_;
this.Aq$=Fg.Aq$;this.Ara=Fg.Ara;},AkR:function(Fg){Fg.CE=this.CE;Fg.Cf=this.Cf;Fg.
Ca=this.Ca;Fg.Hy(this.An2);Fg.Fc(this.An3);Fg.CR(this.An4);Fg.AFr(this.Ahm);Fg.AFi(
this.VZ);Fg.ArR(this.V0);Fg.Anz(this.V1);Fg.C2(this.Ag4);Fg.Cw(this.Ag5);Fg.C3(this.
Ag6);Fg.OS(this.AsE);Fg.OT(this.AsF);Fg.Asq=this.Asq;Fg.WN=this.WN;Fg.ZE=this.ZE;
Fg.Bm$(this.Aq_);Fg.ATn(this.Aq$);Fg.A_o(this.Ara);},_Init:function(aArg){this.__proto__=
C.Aeu;this.VZ=A.aaL(A.fl.Ak);this.V0=A.aaL(A.fl.Ak);this.V1=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VZ=A.aaL(
A.fl.Ak);this.V0=A.aaL(A.fl.Ak);this.V1=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V0)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.V1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag5)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CE)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.AsB._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.ADm);},_className:"Application::NewAnimalSetTransponderScreen"};C.C9={Abd:null
,CountryToString:null,Du:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lx(aIndex);},DZ:function(A7){return A7;
},H4:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abd)(F=this.Abd,F[2].call(F[0],E));},A1V:function(G){var F;if(!!this.Abd)this.Q=(
F=this.Abd,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Cb],0);},AFb:
function(E){if(A.aaZ(this.Abd,E))return;if(!!this.Abd)A.z$([this,this.A1V],this.
Abd,0);this.Abd=E;if(!!this.Abd)A.zX([this,this.A1V],this.Abd,0);A.pe([this,this.
A1V],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C9;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abd)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.O3={AC:null,Q:null,Background:null,Ip:null,Io:null,M5:
0,AM:0,Gq:0,F$:0,Agf:function(G){this.Kf(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IC=((Ae&0x40)===0x40);if(IC){this.Background.
L(A.jb.AV);this.C4(256);}else{this.Background.L(this.M5);this.C4(256);}},Age:function(
G){this.Ka(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3T],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3T],E,0);if(!!E)A.pe([this
,this.A3T],this);},CU:function(E){if(this.M5===E)return;this.M5=E;this.Am();},Kf:
function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Ka:function(
G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gq)E=this.F$;if(E>this.F$)E=this.Gq;if(this.AM===E)return;this.AM=E;
this.Am();},Ga:function(E){if(this.Gq===E)return;this.Gq=E;this.Am();},EV:function(
E){if(this.F$===E)return;this.F$=E;this.Am();},C5:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},A3T:function(G){var F;if(!!this.
AC){this.Ga(0);this.EV(this.AC.H4());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BK._Init.call(this.Ip={
I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.O3;this.H(AIK
);this.Background.H(Alk);this.Ip.Filter=4;this.Io.Filter=5;this.M5=A.jb.CJ;this.
J(this.Background,0);this.Ip.BL=[this,this.Agf];this.Ip.D1=[this,this.Agf];this.
Io.BL=[this,this.Age];this.Io.D1=[this,this.Age];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Ip._Done();this.Io._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Ip._ReInit();this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RW={A1N:A.jV,Ai:function(
Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5S));this.Kz(this.A1N);},Ch:function(
G){C.FA.Ch.call(this,G);var AlC=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlC)this.A1N=Xg;else this.A1N=A._GetAutoObject(A.acj.KO).AjN(AlC);this.Am();
},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RW;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RX={A2S:0,Ai:function(Ae){C.FA.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARD));if(this.A2S>0)this.Kz(this.A2S.toFixed());else
this.Kz(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(this,G);this.A2S=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.FA._Init.call(
this,aArg);this.__proto__=C.RX;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Du:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Aky(E);},A2c:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B$,
this.Cb],0);},L2:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A2c],[B=this.Animal,B.ASH,B.Aky],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A2c],[B=this.Animal,B.ASH,B.Aky],0);A.pe([this,this.A2c],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Du:function(){return 99;},C7:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BS(aIndex);},DZ:function(A7){return A7;
},H4:function(){return 98;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal
)this.Animal.N3(E);},A1L:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B$,this.Cb],0);},L2:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1L],[B=this.Animal,B.Awe,B.N3],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1L],[B=this.Animal,B.Awe,B.N3],0);A.pe([
this,this.A1L],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARY={V$:null,YN:null,AeN:null,Init:function(
aArg){this.Bb(this.V$);},Adv:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YN)this.ByD();else if(Aa===this.V$)this.BBp(this);else throw new
Error(Ayn);A._GetAutoObject(A.Device.Device).Dw(0);},BBp:function(G){var B;var F;
var Vn=(C.Amv.isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null
);if(!Vn){A.ab5("%s",AZ_);return;}Vn.AKK(this);},ByD:function(){A._GetAutoObject(
A.Device.Helper).W.AGM(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ms._Init.call(this.V$={I:this},0);C.Ms._Init.call(this.YN={
I:this},0);C.VS._Init.call(this.AeN={I:this},0);this.__proto__=C.ARY;var B;this.
H(AcP);this.V$.H(Qd);this.V$.Ar(true);this.V$.T(A.aaR(A.acf.A$s));this.V$.Bi(true
);this.YN.H(IW);this.YN.Ar(true);this.YN.T(A.aaR(A.acf.A5e));this.YN.Bi(true);this.
AeN.H(BD);this.AeN.T(A.aaR(A.acf.ACW));this.AeN.Bi(true);this.J(this.V$,0);this.
J(this.YN,0);this.J(this.AeN,0);this.V$.AR=[this,this.Adv];this.YN.AR=[this,this.
Adv];this.AeN.ATb([B=A._GetAutoObject(A.Device.Device),B.Ary,B.Atp]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V$._Done();this.YN._Done(
);this.AeN._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V$._ReInit();this.YN._ReInit();this.AeN._ReInit();this.V$.
T(A.aaR(A.acf.A$s));this.YN.T(A.aaR(A.acf.A5e));this.AeN.T(A.aaR(A.acf.ACW));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VS={
Ai:function(Ae){C.Uf.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl
){FS=A.jb.Text;GY=A.jb.Bm;}if(!this.LK){this.Background.L(FS);this.V.L(A.jb.Am4);
}else if(this.Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KJ){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.
L(GY);}if(this.AmD){this.Mq.Cv(1);this.Mq.L(A.jb.H9);}else{this.Mq.Cv(0);this.Mq.
L(A.jb.Bm);}},_Init:function(aArg){C.Uf._Init.call(this,aArg);this.__proto__=C.VS;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.Av5={C_:null,A2:null,AF:
null,Akj:null,QY:null,EM:null,ASe:Ly,Bl:function(aSize){C.Co.Bl.call(this,aSize);
var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}this.Background.
L(FS);this.V.L(GY);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,Ct;C.Co.Ai.call(this
,Ae);this.Akj.L(this.V.AQ);this.QY.L(this.V.AQ);this.QY.R(AZ$);this.T(((this.ASe+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak7(840003123456789).toFixed(
));if(!!this.A2&&!!this.AF){var A2Y=this.QY.Afh([(this.QY.String.length-(F=this.
AF,F[1].call(F[0])))-(Ct=this.A2,Ct[1].call(Ct[0])),0]);var A4i=this.QY.Afh([this.
QY.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABm=this.QY.Dd();this.EM.H([
A2Y[0]-1,ABm[1],A4i[0]+1,ABm[3]]);}else this.EM.H(this.QY.Dd());},DB:function(E){
if(this.C_===E)return;this.C_=E;this.Akj.Ax(E);},OQ:function(E){if(A.aaZ(this.A2
,E))return;if(!!this.A2)A.z$([this,this.AaG],this.A2,0);this.A2=E;if(!!E)A.zX([this
,this.AaG],E,0);if(!!E)A.pe([this,this.AaG],this);},PU:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaI],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaI],E,0);if(!!E)A.pe([this,this.AaI],this);},AaI:function(G){this.Am(
);},AaG:function(G){this.Am();},Ar3:function(E){if(this.ASe===E)return;this.ASe=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akj={I:this},0);A.acg.Text._Init.call(this.QY={I:this},0);A.acg.BU._Init.call(
this.EM={I:this},0);this.__proto__=C.Av5;this.H(K1);this.V.A6(0x11);this.Akj.H(O7
);this.QY.H(Brh);this.EM.H(Bri);this.EM.Nn(2);this.EM.L(A.jb.E1);this.J(this.Akj
,0);this.J(this.QY,0);this.J(this.EM,0);this.QY.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akj._Done();this.QY._Done();this.EM._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akj._ReInit();this.
QY._ReInit();this.EM._ReInit();this.QY.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUj:0,Init:
function(aArg){var B;A.zX([this,this.Be0],[B=A._GetAutoObject(A.Device.Device),B.
AEE,B.AIT],0);A.pe([this,this.Be0],this);},HQ:function(G){C.TF.HQ.call(this,G);if(
this.AjR)this.N.Cw(A.aaL(A.ach.AD));else this.N.Cw(A.aaL(A.ach.ANn));this.N.C3(A.
aaL(A.ach.Options));this.N.Fc(A.jV);this.N.CR(A.jV);this.N.Cf=[this,this.A$a];this.
N.Ca=[this,this.WE];this.N.ArR(A.aaL(A.fl.Ak));this.N.Anz(A.aaL(A.fl.Ak));},M0:function(
G){this.Bfk(this);},Or:function(G){this.BBi(this);},AdS:function(Aig,Aih,BxI){A.
_GetAutoObject(C.BR).ABN(Aig,Aih,[this,this.A9h,this.ATC],BxI);},WE:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjR){A._GetAutoObject(C.BR).
TC(A.aaR(A.acf.Bir),[this,this.Bom]);A._GetAutoObject(C.BR).Fz();}this.AdS(A.aaR(
A.acf.Rating),[this,this.AT0],3);this.AdS(A.aaR(A.acf.Afv),[this,this.AT2],2);this.
AdS(A.aaR(A.acf.Temperature),[this,this.AT1],1);this.AdS(A.aaR(A.acf.AdV),[this,
this.Boj],0);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.Biv
));A._GetAutoObject(A.Device.Device).Dw(6);},ATC:function(E){if(this.AUj===E)return;
this.AUj=E;A.abo([this,this.A9h,this.ATC],0);},Be0:function(G){this.ATC(A._GetAutoObject(
A.Device.Device).D9);},A9h:function(){return this.AUj;},_Init:function(aArg){C.TF.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={VA:null
,Init:function(aArg){var B;A.zX([this,this.Aga],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);A.pe([this,this.Bg9],this);A.pe([this,this.Q_],this);},CC:function(
G){C.TF.CC.call(this,G);A.pe([this,this.Bhc],this);},AGS:function(G){C.TF.AGS.call(
this,G);if(!!this.Lh)this.AhE(this.Lh,this.VA);},HQ:function(G){C.TF.HQ.call(this
,G);this.N.Cw(A.aaL(A.ach.ARb));this.N.C3(A.aaL(A.ach.ARc));if(this.AjR)this.N.ATn(
0);else this.N.ATn(1);this.N.A_o(A._GetAutoObject(A.Device.Converter).BhB(A._GetAutoObject(
A.Device.Device).D9));this.N.Fc(A.jV);this.N.CR(A.jV);this.N.Cf=[this,this.Bl$];
this.N.Ca=[this,this.Boo];this.N.ArR(A.aaL(A.fl.Ak));this.N.Anz(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QK()){this.N.I_.C4(100);this.N.Cf=null;
}else this.N.I_.C4(255);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.Lg.
C4(100);this.N.Ca=null;}else this.N.Lg.C4(255);if(A._GetAutoObject(A.Device.Device
).An.B9()<=1){this.N.T4.C4(100);this.N.T5.C4(100);}else{this.N.T4.C4(255);this.N.
T5.C4(255);}},M0:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;
var LE=A._GetAutoObject(A.Device.Helper).W.CL;LE=LE+1;if(LE>=A._GetAutoObject(A.
Device.Device).An.B9())LE=0;A._GetAutoObject(A.Device.Helper).G8(LE);},Or:function(
G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;var LE=A._GetAutoObject(
A.Device.Helper).W.CL;LE=LE-1;if(LE<0)LE=A._GetAutoObject(A.Device.Device).An.B9(
)-1;A._GetAutoObject(A.Device.Helper).G8(LE);},Af$:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A8).Cd(94);},Bl$:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},Boo:function(G){this.Bfk(this);},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).Mv());A.pe([this,this.Bhc
],this);},Bg9:function(G){if(!A._GetAutoObject(A.Device.Device).An.B9()){this.VA.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QK()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.VA.R(A.aaR(A.acf.AEu));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC9(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.VA.R(A.aaR(A.acf.AOc));else this.VA.R(A.aaR(
A.acf.AOb));}else this.VA.R(A.aaR(A.acf.ASl));}else this.VA.Z(false);},Bhc:function(
G){var BCg=A._GetAutoObject(A.Device.Helper).W.Id;var A4l=A._GetAutoObject(A.Device.
Device).An.LV(0,BCg);if(!A._GetAutoObject(A.Device.Device).An.B9())A._GetAutoObject(
A.Device.Helper).G8(-1);else if(A4l<0)A._GetAutoObject(A.Device.Helper).G8(0);},
Aga:function(G){this.Bg9(this);this.HQ(this);},_Init:function(aArg){C.TF._Init.call(
this,aArg);C.AkS._Init.call(this.VA={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.APB);this.VA.H(Ff);this.J(this.VA,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TF;this.VA._Done();C.TF._Done.call(this);},_ReInit:function(){
C.TF._ReInit.call(this);this.VA._ReInit();},_Mark:function(D){var B;C.TF._Mark.call(
this,D);if((B=this.VA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMA={QS:null,Wa:null,AbH:null,YQ:null,Init:function(aArg){var B;var F;this.Bb(
this.QS);if(!!A._GetAutoObject(C.A8).Q){var Vn=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vn){A.ab5("%s",A0a);
return;}else{if(Vn.AjR)this.QS.T(A.aaR(A.acf.Bg));else this.QS.T(A.aaR(A.acf.EU)
);var AzA=A._GetAutoObject(A.Device.Device).An.Filter;if(!AzA||A._GetAutoObject(
A.Device.Helper).Arg(AzA))this.YQ.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.B9()){this.Wa.Ar(false);this.QS.Ar(false);}}}},Adv:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbH)A._GetAutoObject(C.A8).Cd(9);else if(Aa===this.Wa)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QS)this.BCL();else if(Aa===this.YQ)this.
A1T();else throw new Error(Ayn);},BCL:function(){var B;var F;var Vn=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vn){A.
ab5("%s",A0a);return;}Vn.A$a(this);},A1T:function(){var B;var F;var Vn=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vn){A.
ab5("%s",A0a);return;}Vn.Q_(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Ms._Init.call(this.QS={I:this},0);C.Ms._Init.call(this.Wa={I:this},
0);C.Ms._Init.call(this.AbH={I:this},0);C.Ms._Init.call(this.YQ={I:this},0);this.
__proto__=C.AMA;this.H(AfE);this.QS.H(Aag);this.QS.Ar(true);this.QS.T(A.aaR(A.acf.
EU));this.QS.Bi(true);this.Wa.H(Qd);this.Wa.Ar(true);this.Wa.T(A.aaR(A.acf.AUJ));
this.Wa.Bi(true);this.AbH.H(IW);this.AbH.T(A.aaR(A.acf.AkU));this.AbH.Bi(true);this.
YQ.H(BD);this.YQ.T(A.aaR(A.acf.ACh));this.YQ.Bi(true);this.J(this.QS,0);this.J(this.
Wa,0);this.J(this.AbH,0);this.J(this.YQ,0);this.QS.AR=[this,this.Adv];this.Wa.AR=[
this,this.Adv];this.AbH.AR=[this,this.Adv];this.YQ.AR=[this,this.Adv];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QS._Done();this.Wa._Done(
);this.AbH._Done();this.YQ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QS._ReInit();this.Wa._ReInit();this.AbH.
_ReInit();this.YQ._ReInit();this.QS.T(A.aaR(A.acf.EU));this.Wa.T(A.aaR(A.acf.AUJ
));this.AbH.T(A.aaR(A.acf.AkU));this.YQ.T(A.aaR(A.acf.ACh));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I$={T6:null,EA:null,Yn:null,Background:null,Ap:null,Ip:null,Io:null,M5:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var IC=((Ae&0x40)===0x40);if(IC){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.C4(256);}else if(Hf){this.Background.L(this.M5);this.Ap.L(A.jb.Text);this.C4(
256);}else{this.Background.L(this.M5);this.Ap.L(A.jb.Text);this.C4(128);}if(!this.
AM)this.Ap.Cv(0);else if(this.AM>0){if(A.aaZ(this.T6,[B=A._GetAutoObject(A.Device.
Device),B.Awo,B.AyT]))this.Ap.Cv(2);else if(A.aaZ(this.T6,[B=A._GetAutoObject(A.
Device.Device),B.Awn,B.AyS]))this.Ap.Cv(3);else if(!!this.Yn&&((F=this.Yn,F[1].call(
F[0]))===1))this.Ap.Cv(1);else this.Ap.Cv(0);}else if(A.aaZ(this.T6,[B=A._GetAutoObject(
A.Device.Device),B.Awo,B.AyT]))this.Ap.Cv(6);else if(A.aaZ(this.T6,[B=A._GetAutoObject(
A.Device.Device),B.Awn,B.AyS]))this.Ap.Cv(7);else if(!!this.Yn&&((F=this.Yn,F[1].
call(F[0]))===1))this.Ap.Cv(5);else this.Ap.Cv(4);},Agf:function(G){this.Kf(this
);},Age:function(G){this.Ka(this);},Kf:function(G){this.Bx(1);},Ka:function(G){this.
Bx(-1);},Bnj:function(E){if(A.aaZ(this.T6,E))return;if(!!this.T6)A.z$([this,this.
A3C],this.T6,0);this.T6=E;if(!!E)A.zX([this,this.A3C],this.T6,0);A.pe([this,this.
A3C],this);},Us:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Agd],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Agd],this.EA,0);if(!!E)A.pe([this
,this.Agd],this);},A3C:function(G){var F;if(!!this.T6)this.Bx((F=this.T6,F[1].call(
F[0])));},Agd:function(G){A.pe([this,this.BCY],this);},CU:function(E){if(this.M5===
E)return;this.M5=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T6)(F=this.T6,F[2].call(F[0],E));this.Am();A.abo([this,this.Um,this.
Bx],0);},A_e:function(E){if(A.aaZ(this.Yn,E))return;if(!!this.Yn)A.z$([this,this.
Agd],this.Yn,0);this.Yn=E;if(!!E)A.zX([this,this.Agd],this.Yn,0);if(!!E)A.pe([this
,this.Agd],this);},BCY:function(G){var F,Ct;if(!this.Yn||!this.EA)return;this.Bnj(
A._GetAutoObject(A.Device.Helper).BdN((F=this.Yn,F[1].call(F[0])),(Ct=this.EA,Ct[
1].call(Ct[0]))));this.Am();},Um:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BK._Init.call(this.Ip={I:this},0);
A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.I$;this.H(AIL);this.Background.
A0(0x3F);this.Background.H(AIL);this.Ap.A0(0x3C);this.Ap.H(AIL);this.Ip.Filter=4;
this.Io.Filter=5;this.M5=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AU_));this.Ip.BL=[this,this.Agf];this.Io.BL=[this,this.Age];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Ip._Done();this.Io._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Ip._ReInit(
);this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL8={WE:function(G){var B;var F;this.Agx();if(!!A._GetAutoObject(A.Device.Helper
).AOP((F=this.Fn,F[1].call(F[0])),0,true))this.AuK(A.aaR(A.acf.A7j),[this,this.Bop
],[B=A._GetAutoObject(A.Device.Device),B.A8A,B.Bbh]);else A._GetAutoObject(C.BR).
AaV(A.aaR(A.acf.A7j));A._GetAutoObject(C.BR).Fz();this.I4(A.aaR(A.acf.LinkTransponder
),[this,this.BnA],8);this.I4(A.aaR(A.acf.TB),[this,this.Akv],9);this.I4(A.aaR(A.
acf.Ban),[this,this.Bob],10);this.I4(A.aaR(A.acf.AGo),[this,this.ATH],3);this.I4(
A.aaR(A.acf.An1),[this,this.AwZ],2);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Ml(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abt:function(){return C.Aqw;},Abu:function(){return C.Aq3;
},Q_:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6V((F=this.Fn,F[1].call(F[0]))));},HQ:function(G){var F;C.GJ.HQ.
call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.
N.OS(false);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(52);},A3H:
function(G){C.GJ.A3H.call(this,G);A.pe([this,this.A0M],this);},Bop:function(G){A.
_GetAutoObject(A.Device.Device).Awu(!A._GetAutoObject(A.Device.Device).Aqg);this.
An9(this);},An9:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E$();A._GetAutoObject(A.Device.Helper).BoX(Be);if(A._GetAutoObject(A.Device.Device
).Aqg){var A2A=A._GetAutoObject(A.Device.Helper).AOP((F=this.Fn,F[1].call(F[0]))
,21600,true);Be.CX(A2A);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AL8;var B;this.Dl(A.aaR(A.acf.
Av_));this.AwU([B=A._GetAutoObject(A.Device.Device),B.A8z,B.Bbg]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.Av_));},_className:"Application::ActionListScreen"
};C.AL7={_Init:function(aArg){C.I6._Init.call(this,aArg);this.__proto__=C.AL7;},
_className:"Application::ActionListFilterScreen"};C.APB={IN:null,IT:null,Bc:null
,MF:A.jV,Init:function(aArg){var B;A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9l,B.A_K],0);A.zX([this,this.Nt],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);},Dg:function(E){C.IL.Dg.call(this,E);this.IT.L(E);},DX:function(
G){C.IL.DX.call(this,G);var AzA=A._GetAutoObject(A.Device.Device).An.Filter;if(!
AzA||A._GetAutoObject(A.Device.Helper).Arg(AzA))this.IN.Z(false);else this.IN.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.Aq0())this.Aw6(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+Bay)+A._GetAutoObject(A.Device.Device).An.B9().
toFixed());else this.Aw6(Baz);},Aw6:function(E){if(this.MF===E)return;this.MF=E;
this.IT.R(E);},_Init:function(aArg){C.IL._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IN={I:this},0);A.acg.Text._Init.call(this.IT={I:this},0);A.acg.C8._Init.call(
this.Bc={I:this},0);this.__proto__=C.APB;this.HR.H(Brj);this.DS.H(Brk);this.IN.H(
Brl);this.IN.L(A.jb.Text);this.IT.H(BaA);this.IT.Hn(2);this.IT.KU(true);this.IT.
A6(0x12);this.IT.R(BaB);this.Bc.DC(AyD);this.Bc.DM(AyE);this.Bc.L(A.jb.Bc);this.
J(this.IN,0);this.J(this.IT,0);this.J(this.Bc,0);this.IN.Ax(A.aaL(A.ach.AeC));this.
IT.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IL;this.
IN._Done();this.IT._Done();this.Bc._Done();C.IL._Done.call(this);},_ReInit:function(
){C.IL._ReInit.call(this);this.IN._ReInit();this.IT._ReInit();this.Bc._ReInit();
this.IT.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IL._Mark.call(this,D);if((
B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsL={Text:null,Bl:function(aSize){C.O3.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.O3.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xg);else this.Text.R(this.AC.Gl((F=this.Q,F[1].call(F[0]
))));var IC=((Ae&0x40)===0x40);if(IC)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.O3._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsL;this.Text.R(Rp);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.O3;this.Text._Done();C.O3.
_Done.call(this);},_ReInit:function(){C.O3._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.O3._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Ard={C_:null,Bl:function(aSize){C.O3.Bl.call(this,aSize);this.C_.H(A.abK(this.
C_.M,aSize));},Ai:function(Ae){var B;var F;C.O3.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C_.Ax(null);else{this.C_.Ax(this.AC.AC4(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C_.Cv(this.AC.AC6(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IC=((
Ae&0x40)===0x40);if(IC)this.C_.L(A.jb.Bm);else this.C_.L(A.jb.Text);},_Init:function(
aArg){C.O3._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ard;this.H(AIL);this.C_.H(AIK);this.J(this.C_,0);},_Done:function(){this.__proto__=
C.O3;this.C_._Done();C.O3._Done.call(this);},_ReInit:function(){C.O3._ReInit.call(
this);this.C_._ReInit();},_Mark:function(D){var B;C.O3._Mark.call(this,D);if((B=
this.C_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Au9={VU:null,DirectionOfCountingToString:null,Aei:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},Gl:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jV;return this.
DirectionOfCountingToString.BS(aIndex);},DZ:function(A7){return A7;},H4:function(
){return this.Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.VU)(F=
this.VU,F[2].call(F[0],E));},AC4:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Aei.AsM(aIndex);},AC6:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Aei.AsN(aIndex);},A17:function(G){var F;
if(!!this.VU)this.Q=(F=this.VU,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cb],0);},Ae1:function(E){if(A.aaZ(this.VU,E))return;if(!!this.VU)A.z$([this
,this.A17],this.VU,0);this.VU=E;if(!!this.VU)A.zX([this,this.A17],this.VU,0);A.pe([
this,this.A17],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aei._Init.call(this.Aei={I:this},0);this.__proto__=C.Au9;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aei._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aei._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMs={Hu:null,EA:null,AnimalIdGenerationMethodToString:
null,AdZ:null,Du:function(){return 4;},C7:function(aIndex){var F;var A7=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A7=0;break;case 1:A7=1;break;
case 2:A7=this.BzO((F=this.EA,F[1].call(F[0])));break;case 3:A7=5;break;default:
throw new Error(Brm+aIndex.toFixed());}return A7;},Gl:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jV;return this.AnimalIdGenerationMethodToString.
BS(this.C7(aIndex));},DZ:function(A7){var aIndex=-1;switch(A7){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Brn+A7.toFixed());}return aIndex;},H4:function(){return this.
Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hu)(F=this.Hu,F[2].
call(F[0],E));},AC4:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.AdZ.AsM(this.C7(aIndex));},AC6:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.AdZ.AsN(this.C7(aIndex));},A1B:function(G){var F;
if(!!this.Hu)this.Q=(F=this.Hu,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cb],0);},Bmh:function(E){if(A.aaZ(this.Hu,E))return;if(!!this.Hu)A.z$([this
,this.A1B],this.Hu,0);this.Hu=E;if(!!this.Hu)A.zX([this,this.A1B],this.Hu,0);A.pe([
this,this.A1B],this);},Us:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Agd],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Agd],this.EA
,0);A.pe([this,this.Agd],this);},Agd:function(G){A.pe([this,this.ByF],this);},BzO:
function(L8){var Rr=0;switch(L8){case 0:Rr=2;break;case 1:Rr=3;break;case 2:Rr=4;
break;default:throw new Error(Bro+L8.toFixed());}return Rr;},ByF:function(G){var
BeM=this.C7(this.DZ(this.Q));if(this.Q!==BeM)this.Au(BeM);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdZ._Init.call(this.
AdZ={I:this},0);this.__proto__=C.AMs;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdZ._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdZ._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGO={FM:null,Aa2:null,Q:null,Fm:null,Fb:null,HH:null,Wv:null,AW:null,H0:null
,Kp:null,A_:0,AM:0,Alu:0,Init:function(aArg){var B;A.zX([this,this.BeZ],[B=A._GetAutoObject(
A.Device.Device),B.Anq,B.AoA],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CU(A.jb.CJ);this.Wv.CU(A.jb.CJ);
this.Background.L(A.jb.CT);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CT);this.HH.
CU(A.jb.CT);this.Wv.CU(A.jb.CT);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}
}else{if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CU(A.jb.CJ);this.Wv.CU(A.jb.CJ);}else{
this.AW.FO(A.jb.CT);this.HH.CU(A.jb.CT);this.Wv.CU(A.jb.CT);}this.Bb(null);}},I2:
function(G){C.Eg.I2.call(this,G);if(!this.A_)this.FV(this);else this.He(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(
F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;
default:this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:
function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)this.FM.AjB((
F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.
A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{if(this.AW.A8T())this.Bb(
this.AW);else this.Bb(this.Wv);if(!this.AM)this.AW.SQ(2);else this.AW.SQ(7);}break;
default:throw new Error(Ato+this.A_.toFixed());}this.DJ(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Um,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Or:function(G){this.ABe(2);},M0:function(G){this.ABe(
7);},ABe:function(GA){var B;var AzB=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!AzB){var AAr=(A.Core.P.isPrototypeOf(B=this.QJ(AzB,GA,0x15))?B:null);if(!!AAr){
this.Bb(AAr);return true;}}return false;},Ao3:function(G){A.pe([this,this.BeZ],this
);},A4w:function(G){var B;var F;if(!this.H0.Hu){this.Kp.Ae1(null);return;}switch((
F=this.H0.Hu,F[1].call(F[0]))){case 0:case 1:this.Kp.Ae1(null);break;case 3:this.
Kp.Ae1([B=A._GetAutoObject(A.Device.Device),B.ASF,B.A0t]);break;case 2:this.Kp.Ae1([
B=A._GetAutoObject(A.Device.Device),B.ASG,B.A0u]);break;case 4:case 5:this.Kp.Ae1([
B=A._GetAutoObject(A.Device.Device),B.AEJ,B.AIX]);break;default:throw new Error(
Brp+(F=this.H0.Hu,F[1].call(F[0])).toFixed());}},BeZ:function(G){var F;if(!this.
H0.Hu)return;A.pe([this,this.A4w],this);var At4=false;switch((F=this.H0.Hu,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{At4=true;this.AW.A_4(-1);}break;case 0:
case 1:{At4=false;this.AW.A_4(A._GetAutoObject(A.Device.Device).A2);}break;default:
throw new Error(Ayw+(F=this.H0.Hu,F[1].call(F[0])).toFixed());}this.AW.Ar(At4);this.
HH.Ar(At4);this.HH.Z(At4);if(((F=this.H0.Hu,F[1].call(F[0]))!==this.Alu)||(At4===
false)){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMq((F=this.H0.
Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bj2((F=this.H0.Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kx(A._GetAutoObject(A.Device.Device).A2);else this.AW.Kx(0);this.Alu=(
F=this.H0.Hu,F[1].call(F[0]));},A9S:function(E){var B;if(this.Aa2===E)return;if(
!!this.Aa2){A.z$([this,this.Ao3],[B=this.Aa2,B.WC,B.JX],0);A.z$([this,this.Ao3],[
B=this.Aa2,B.Anu,B.Nk],0);A.z$([this,this.Ao3],[B=this.Aa2,B.ArC,B.PW],0);this.H0.
Us(null);}this.Aa2=E;if(!!E){A.zX([this,this.Ao3],[B=this.Aa2,B.WC,B.JX],0);A.zX([
this,this.Ao3],[B=this.Aa2,B.Anu,B.Nk],0);A.zX([this,this.Ao3],[B=this.Aa2,B.ArC
,B.PW],0);this.H0.Us([B=this.Aa2,B.WC,B.JX]);}if(!!E)A.pe([this,this.Ao3],this);
},Um:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={I:this},0
);C.Ard._Init.call(this.HH={I:this},0);C.Ard._Init.call(this.Wv={I:this},0);C.AvV.
_Init.call(this.AW={I:this},0);C.AMs._Init.call(this.H0={I:this},0);C.Au9._Init.
call(this.Kp={I:this},0);this.__proto__=C.AGO;var B;this.H(UZ);this.V.Ar(false);
this.V.R(Atf);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fb.Filter=7;this.HH.H(Brq);
this.HH.Ar(false);this.Wv.H(Brr);this.AW.H(Brs);this.AW.Ar(false);this.J(this.HH
,0);this.J(this.Wv,0);this.J(this.AW,0);this.FM=A._NewObject(C.Aeu,0);this.Fm.BL=[
this,this.Or];this.Fb.BL=[this,this.M0];this.HH.CK(this.Kp);this.HH.Au([B=this.Kp
,B.B$,B.Cb]);this.Wv.CK(this.H0);this.Wv.Au([B=this.H0,B.B$,B.Cb]);this.AW.Au([this
,this.Um,this.Bx]);this.H0.Bmh([B=A._GetAutoObject(A.Device.Device),B.Anq,B.AoA]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fb.
_Done();this.HH._Done();this.Wv._Done();this.AW._Done();this.H0._Done();this.Kp.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fm._ReInit();this.Fb._ReInit();this.HH._ReInit();this.Wv._ReInit();this.AW._ReInit(
);this.H0._ReInit();this.Kp._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa2)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wv)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G5={AzT:null,Fm:null,Fb:null,G2:null,
F0:null,EM:null,M_:0,AM7:0,AB9:0,Uy:0,Bak:-1,AM6:false,Init:function(aArg){A.pe([
this,this.A0Z],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AM6);this.EM.H(A.wC(this.Ys(this.AB9).M,this.Ys((this.AB9+this.AM7)-1).M));},Or:
function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var A1Q=this.Bgw(2);if(A1Q===
false)D5.NM=true;},M0:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var
A1Q=this.Bgw(7);if(A1Q===false)D5.NM=true;},Bgw:function(GA){var B;var DV=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DV=this.BdP(DV,GA,true);if(!!DV){this.Bb(DV);this.
AzT=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adu:function(
G){A.ab5("%s",Alg);},GX:function(s){this.Adu(s);},FO:function(E){if(this.M_===E)
return;this.M_=E;this.F0.CU(E);this.G2.CU(E);},SQ:function(GA){var B;switch(GA){
case 2:this.Bb(this.G2);break;case 7:this.Bb(this.F0);break;default:A.ab5("%s%e"
,Brt,GA);}this.AzT=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LQ:function(G){},A0Z:
function(s){this.LQ(s);},AE7:function(E){if(this.AM6===E)return;this.AM6=E;this.
Am();},A9Y:function(E){if(this.AM7===E)return;this.AM7=E;this.Am();},A9X:function(
E){if(this.AB9===E)return;this.AB9=E;this.Am();},Ys:function(HA){var B5=null;switch(
HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.G2;break;default:A.ab5("%s",Ah4
);}return B5;},Kx:function(E){if(this.Uy===E)return;this.Uy=E;this.Amo();},Amo:function(
){A.ab5("%s",Alg);},BdP:function(Ac2,GA,LK){var B;if(!!Ac2){var Be;if(LK)Be=0x11;
else Be=0x0;switch(GA){case 2:Ac2=(C.DF.isPrototypeOf(B=this.AqO(Ac2,Be))?B:null
);break;case 7:Ac2=(C.DF.isPrototypeOf(B=this.TT(Ac2,Be))?B:null);break;default:
throw new Error(Bru);}}return Ac2;},A_4:function(E){if(this.Bak===E)return;this.
Bak=E;var DV=this.F0;var A2d;while(!!DV){A2d=!!E;DV.Ar(A2d);DV.Z(A2d);if(DV===this.
AzT)this.Bb(DV);DV=this.BdP(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.
call(this.Fb={I:this},0);C.DF._Init.call(this.G2={I:this},0);C.DF._Init.call(this.
F0={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.G5;this.
H(Brv);this.Fm.Filter=6;this.Fb.Filter=7;this.M_=A.jb.CJ;this.G2.H(E7);this.F0.H(
BaC);this.EM.H(Brw);this.EM.Nn(2);this.EM.L(A.jb.E1);this.J(this.G2,0);this.J(this.
F0,0);this.J(this.EM,0);this.Fm.BL=[this,this.Or];this.Fm.D1=[this,this.Or];this.
Fb.BL=[this,this.M0];this.Fb.D1=[this,this.M0];this.AzT=this.F0;this.G2.Dk=[this
,this.GX];this.F0.Dk=[this,this.GX];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fm._Done();this.Fb._Done();this.G2._Done();this.F0._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fm._ReInit();this.Fb._ReInit();this.G2._ReInit();this.F0._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzT)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.ARh={Dy:null,CW:null,Cu:null
,FO:function(E){if(this.M_===E)return;C.HL.FO.call(this,E);this.Cu.CU(E);this.CW.
CU(E);this.Dy.CU(E);},Ys:function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.
F0;break;case 1:B5=this.Cu;break;case 2:B5=this.CW;break;case 3:B5=this.Dy;break;
case 4:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(
this.CW={I:this},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.ARh;this.
H(Brx);this.G2.H(Alk);this.Dy.H(BaD);this.CW.H(BaE);this.Cu.H(BaF);this.F0.H(Bry
);this.J(this.Dy,-2);this.J(this.CW,-2);this.J(this.Cu,-2);this.Dy.Dk=[this,this.
GX];this.CW.Dk=[this,this.GX];this.Cu.Dk=[this,this.GX];},_Done:function(){this.
__proto__=C.HL;this.Dy._Done();this.CW._Done();this.Cu._Done();C.HL._Done.call(this
);},_ReInit:function(){C.HL._ReInit.call(this);this.Dy._ReInit();this.CW._ReInit(
);this.Cu._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.
Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVM={Rc:null,AcI:null,AVL:0,CC:function(G){this.AcI.Ar(true);},E4:function(G
){this.AcI.Ar(false);},Bn$:function(E){if(this.AVL===E)return;this.AVL=E;this.Rc.
R((((A.aaR(A.acf.AVK)+AcS)+E.toFixed())+Brz)+A.aaR(A.acf.Le));},Bl4:function(){return this.
AVL;},BBF:function(G){A._GetAutoObject(C.A8).Cd(3);A._GetAutoObject(A.Device.Device
).Anx(1);},_Init:function(aArg){C.X2._Init.call(this,aArg);C.CG._Init.call(this.
Rc={I:this},0);A.acl.Gm._Init.call(this.AcI={I:this},0);this.__proto__=C.AVM;this.
AeO.H(BrA);this.UG.R(A.jV);this.Rc.H(BrB);this.Rc.R(A.aaR(A.acf.AVK)+BaG);this.Rc.
L(A.jb.Text);this.AcI.HO(1);this.AcI.Fr(5000);this.AcI.B2=100;this.J(this.Rc,0);
this.Rc.S(A.aaL(A.fl.Af));this.Rc.AZ(A.aaL(A.fl.Ak));this.Rc.Cr(A.aaL(A.fl.Bh));
this.AcI.SC=[this,this.BBF];this.AcI.Q=[this,this.Bl4,this.Bn$];},_Done:function(
){this.__proto__=C.X2;this.Rc._Done();this.AcI._Done();C.X2._Done.call(this);},_ReInit:
function(){C.X2._ReInit.call(this);this.Rc._ReInit();this.AcI._ReInit();this.Rc.
R(A.aaR(A.acf.AVK)+BaG);this.Rc.S(A.aaL(A.fl.Af));this.Rc.AZ(A.aaL(A.fl.Ak));this.
Rc.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X2._Mark.call(this,D);if((B=this.
Rc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcI)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.AR$={K7:null,Lm:null,BeB:false,Init:
function(aArg){this.Bb(this.Db);},Ew:function(G){var B;if(!!this.K7)this.K7.Ew(this
);C.Wx.Ew.call(this,G);},Agh:function(G){var B;if(!!this.K7)this.K7.Agh(this);C.
Wx.Agh.call(this,G);},CC:function(G){var B;if(!this.BeB){this.BeB=true;A.pe([this
,this.A31],this);}else if(!this.K7){this.K7=A._NewObject(C.ASb,0);this.K7.A_a([this
,this.AA5]);this.LQ(this);this.K7.LQ(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.Wx.CC.call(this,G);}else C.Wx.CC.call(this,G
);},Ap7:function(G){var B;if(!!this.K7)this.K7.Ap7(this);},AA5:function(G){var B;
var F;this.LQ(this);this.K7.LQ(this);A.pe([this,this.AcT],this);var Bec=this.LX;
this.AeY(A._GetAutoObject(A.Device.Helper).Abr(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVJ(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bec);if(Bec)A._GetAutoObject(
A.Device.Helper).W.PW(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SK(A._GetAutoObject(A.Device.Helper).AMq((F=this.Dj.H0.Hu,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JK(this.Db);},A31:function(
G){A._GetAutoObject(C.A8).Cd(79);},_Init:function(aArg){C.Wx._Init.call(this,aArg
);C.Rb._Init.call(this.Lm={I:this},0);this.__proto__=C.AR$;var B;this.Lm.H(Ah1);
this.Lm.Aj(true);this.Lm.T(A.aaR(A.acf.ACy));this.J(this.Lm,-9);this.J2(this.Gn,-
1);this.Lm.Gs([this,this.D_,this.GS]);this.Lm.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASP,B.AnF]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wx;this.Lm.
_Done();C.Wx._Done.call(this);},_ReInit:function(){C.Wx._ReInit.call(this);this.
Lm._ReInit();this.Lm.T(A.aaR(A.acf.ACy));},_Mark:function(D){var B;C.Wx._Mark.call(
this,D);if((B=this.K7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADX={AgQ:null,AgR:null,NP:null,NO:null,ET:null,FZ:null,Eq:null,Dy:null,CW:null,Cu:
null,FO:function(E){if(this.M_===E)return;C.Li.FO.call(this,E);this.Cu.CU(E);this.
CW.CU(E);this.Dy.CU(E);this.Eq.CU(E);this.FZ.CU(E);this.ET.CU(E);this.NO.CU(E);this.
NP.CU(E);this.AgR.CU(E);this.AgQ.CU(E);},Ys:function(HA){var B5=null;switch(HA){
case-1:case 0:B5=this.F0;break;case 1:B5=this.Cu;break;case 2:B5=this.CW;break;case
3:B5=this.Dy;break;case 4:B5=this.Eq;break;case 5:B5=this.FZ;break;case 6:B5=this.
ET;break;case 7:B5=this.NO;break;case 8:B5=this.NP;break;case 9:B5=this.AgR;break;
case 10:B5=this.AgQ;break;case 11:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;
},_Init:function(aArg){C.Li._Init.call(this,aArg);C.DF._Init.call(this.AgQ={I:this
},0);C.DF._Init.call(this.AgR={I:this},0);C.DF._Init.call(this.NP={I:this},0);C.
DF._Init.call(this.NO={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CW={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADX;this.H(BrC);this.G2.H(AIM);this.AgQ.H(AyI);this.AgR.H(
A0b);this.NP.H(A0c);this.NO.H(A0d);this.ET.H(A0e);this.FZ.H(A0f);this.Eq.H(A0g);
this.Dy.H(BaH);this.CW.H(A0h);this.Cu.H(BrD);this.F0.H(BrE);this.J(this.AgQ,-2);
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
,Ae);this.Amo();},Adu:function(G){var B;var F;var IA=A.jV;var B5=this.G2;while(!
!B5){if(B5.Ez>0)IA=IA+B5.Ez.toFixed();else IA=IA+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TT(B5,0x11))?B:null);}var BO=this.AM;this.Bx(A.wz(IA,-1,
10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LQ:function(G){},Amo:function(){var B;var F;if(!!this.Q){var DV=this.F0;
var AdD=this.Uy;var A7=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A7>0){DV.L3(A7%
10);A7=(A7/10)|0;}else if(AdD>0)DV.L3(0);else DV.L3(-1);DV=(C.DF.isPrototypeOf(B=
this.AqO(DV,0x11))?B:null);AdD=AdD-1;}}},C5:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G5._Init.call(this,aArg);this.__proto__=C.HL;},_Mark:
function(D){var B;C.G5._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Li={AM:0,Q:null
,Ai:function(Ae){C.G5.Ai.call(this,Ae);this.Amo();},Adu:function(G){var B;var F;
var IA=A.jV;var B5=this.G2;while(!!B5){if(B5.Ez>0)IA=IA+B5.Ez.toFixed();else IA=
IA+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TT(B5,0x11))?B:null);
}var BO=this.AM;this.Bx(A.ab0(IA,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LQ:function(G){},Amo:function(){var B;
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
BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvV={Eq:null,Dy:null,CW:null,Cu:null,FO:function(E){if(this.M_===E)return;C.
HL.FO.call(this,E);this.Cu.CU(E);this.CW.CU(E);this.Dy.CU(E);this.Eq.CU(E);},Ys:
function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Cu;break;case 2:B5=this.CW;break;case 3:B5=this.Dy;break;case 4:B5=this.Eq;break;
case 5:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(
this.Dy={I:this},0);C.DF._Init.call(this.CW={I:this},0);C.DF._Init.call(this.Cu={
I:this},0);this.__proto__=C.AvV;this.H(Ayr);this.G2.H(AHT);this.Eq.H(AHU);this.Dy.
H(AHV);this.CW.H(AHW);this.Cu.H(AHX);this.F0.H(AHY);this.EM.H(BaI);this.J(this.Eq
,-2);this.J(this.Dy,-2);this.J(this.CW,-2);this.J(this.Cu,-2);this.Eq.Dk=[this,this.
GX];this.Dy.Dk=[this,this.GX];this.CW.Dk=[this,this.GX];this.Cu.Dk=[this,this.GX
];},_Done:function(){this.__proto__=C.HL;this.Eq._Done();this.Dy._Done();this.CW.
_Done();this.Cu._Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.
call(this);this.Eq._ReInit();this.Dy._ReInit();this.CW._ReInit();this.Cu._ReInit(
);},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUR={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bpo(0);this.AttributeSet.Bpp(1);this.AttributeSet.Bpq(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var IC=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=
A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CT);this.V.L(A.jb.CJ);this.
AttributeSet.Ahq(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahq(A.jb.Bm);}else if(IC){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahq(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.
Am4);this.V.L(A.jb.Bm);this.AttributeSet.Ahq(A.jb.Bm);}else{this.Background.L(FS
);this.V.L(GY);this.AttributeSet.Ahq(GY);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;this.
Apj=IC;},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(A.acg.AuW.isPrototypeOf(
B=this.Dz.Cj)?B:null);CA.A9U(this.AttributeSet);CA.A6(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.BzH(this.AC.Gl(Gg)));else CA.R(Xg);CA.H(A.abK(CA.M,[this.Dz.We,(B=this.
Dz.M)[3]-B[1]]));},BzH:function(Bx7){var AAP=Bx7;AAP=A._GetAutoObject(A.Device.Helper
).MI(AAP,BrF,BrG);AAP=A._GetAutoObject(A.Device.Helper).MI(AAP,BrH,BrI);return BrJ+
AAP;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUR;this.Dz.H(BrK);this.Dz.JA(2);
this.Dz.N4(A.acg.AuW);this.AttributeSet.Ahq(this.V.AQ);this.AttributeSet.Bm3(A.aaL(
A.fl.AOG));this.AttributeSet.A_l(A.aaL(A.fl.Ak));this.AttributeSet.Aht(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A_l(A.aaL(A.fl.Ak));this.AttributeSet.Aht(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.AsB._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dr(C.ADn);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Du:function(){return 14;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gl:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BS(aIndex
);},DZ:function(A7){return A7;},H4:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OW={FM:null,EnumToCodeset:
null,Jy:null,A_:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A_===1){
if(this.Hl){this.Background.L(A.jb.CT);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BW.Bx.call(this,E);var BAC=this.
EnumToCodeset.AmG(this.Number);var BeL=this.AC.C7(this.AM);if(BAC!==BeL){this.AFG(
this.EnumToCodeset.Ael(BeL));A.abo([this,this.ASQ,this.AFG],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[
this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(
A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=
this.N,F[1].call(F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:
this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:function(
G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(
F[0])));this.A_=EO;if((this.A_<0)||(this.A_>1))this.A_=0;this.DJ(this);if(!this.
A_)this.Bb(null);else this.A2q();this.Am();},AFG:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqW()>E)E=this.EnumToCodeset.
AqW();if(this.EnumToCodeset.H4()<E)E=this.EnumToCodeset.H4();}this.Number=E;var BO=
this.AM;if(!!this.EnumToCodeset){var Bzx=this.EnumToCodeset.AmG(E);this.Bx(this.
AC.DZ(Bzx));if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},Any:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Vc:function(G){this.Ex(this.A_+1);},A2q:function(){A.ab5(
"%s",BrL);},ASQ:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BK._Init.call(this.Jy={I:this},0);this.__proto__=C.OW;this.
Jy.Filter=1;this.FM=A._NewObject(C.Aeu,0);this.Jy.BL=[this,this.Vc];},_Done:function(
){this.__proto__=C.BW;this.Jy._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Jy._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jy)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeV={Text:null,Ai:function(
Ae){C.El.Ai.call(this,Ae);this.Text.L(this.ACZ);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rj(this.AM));this.
Am();},AaI:function(G){A.pe([this,this.Agc],this);},AaG:function(G){A.pe([this,this.
Agc],this);},Al1:function(G){A.pe([this,this.Agc],this);},Agc:function(G){if((!this.
Ik||!this.A2)||!this.AF)return;},_Init:function(aArg){C.El._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeV;this.Text.A0(0x3F
);this.Text.H(As_);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.El;this.Text._Done();C.El.
_Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AR4={GI:0,C9:null,AW:null,Fa:null,
I$:null,CountryToString:null,Lc:0,Md:false,Init:function(aArg){A.zX([this,this.MN
],[this,this.SE,this.Lr],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.I$.Z(this.
Afp);this.AW.FO(this.LU);this.Fa.CU(this.LU);this.I$.CU(this.LU);},DJ:function(G
){var F;if(!this.N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).CR(this.CountryToString.BS(this.Lc));(F=this.N,
F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Ts=this.
A_;this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>this.RK)this.A_=this.RK;if((
this.A_===1)&&!this.Afp)this.A_=2;switch(this.A_){case 0:{this.Bb(null);if(!this.
GI)this.Lr(0);}break;case 1:this.Bb(this.I$);break;case 2:this.Bb(this.Fa);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Ts>0))this.AW.SQ(2);else this.AW.SQ(7);}break;
default:throw new Error(Ato+this.A_.toFixed());}C.El.Ex.call(this,this.A_);},Apr:
function(G){this.I$.Us(this.EA);},AaI:function(G){var F;this.AW.A9X((F=this.AF,F[
1].call(F[0])));},AaG:function(G){var F;this.AW.A9Y((F=this.A2,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Md=true;this.SG(A._GetAutoObject(
A.Device.Helper).VY(E,0,12));this.Lr(A._GetAutoObject(A.Device.Converter).S3(E));
this.Md=false;if(!!E)this.AW.Kx(12);else this.AW.Kx(0);this.Am();},Al1:function(
G){A.pe([this,this.Agc],this);},FV:function(G){var F;if(!this.AM){var BO=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ADc());if(this.AM!==BO){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjO:function(){return this.
GI;},AjQ:function(){return 999999999999;},Lr:function(E){if(this.Lc===E)return;this.
Lc=E;if(this.Md===false)A.pe([this,this.Vp],this);A.abo([this,this.SE,this.Lr],0
);},SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Md===false)A.pe([this
,this.Vp],this);A.abo([this,this.AbY,this.SG],0);},Vp:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).AqB(this.Lc),3,10)+A.abm(this.GI,12,10
);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agc:function(G){var F;if((!this.Ik||
!this.A2)||!this.AF)return;if(!(F=this.Ik,F[1].call(F[0])))this.AW.AE7(true);else
this.AW.AE7(false);},SE:function(){return this.Lc;},AbY:function(){return this.GI;
},_Init:function(aArg){C.El._Init.call(this,aArg);C.C9._Init.call(this.C9={I:this
},0);C.ADX._Init.call(this.AW={I:this},0);C.AsL._Init.call(this.Fa={I:this},0);C.
I$._Init.call(this.I$={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AR4;var B;this.RK=3;this.AW.H(BrM);this.Fa.H(BaJ);this.
I$.H(BaK);this.J(this.AW,0);this.J(this.Fa,0);this.J(this.I$,0);this.C9.AFb([this
,this.SE,this.Lr]);this.AW.Au([this,this.AbY,this.SG]);this.Fa.CK(this.C9);this.
Fa.Au([B=this.C9,B.B$,B.Cb]);this.I$.A_e([B=A._GetAutoObject(A.Device.Device),B.
Awi,B.AyP]);this.Init(aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done(
);this.AW._Done();this.Fa._Done();this.I$._Done();this.CountryToString._Done();C.
El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.Fa._ReInit();this.I$._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AR3={GI:0,C9:null,AW:null,YG:null,Ku:null,Fa:null,I$:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pz:0,Lc:0,Md:false,Init:function(aArg){A.
zX([this,this.MN],[this,this.PT,this.EC],0);A.zX([this,this.MN],[this,this.SE,this.
Lr],0);A.zX([this,this.MN],[this,this.Ans,this.Ahu],0);},Ai:function(Ae){C.El.Ai.
call(this,Ae);this.I$.Z(this.Afp);this.AW.FO(this.LU);this.YG.FO(this.LU);this.Ku.
FO(this.LU);this.Fa.CU(this.LU);this.I$.CU(this.LU);},DJ:function(G){var F;if(!this.
N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C2(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this
,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.
N,F[1].call(F[0])).CR(this.CountryToString.BS(this.Lc));(F=this.N,F[1].call(F[0]
)).Ca=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CR(((A.aaR(A.acf.AGX)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.
acf.BhW));break;case 1:(F=this.N,F[1].call(F[0])).CR(((A.aaR(A.acf.AGX)+A.aaR(A.
acf.Colon))+AcS)+A.aaR(A.acf.Bpu));break;case 2:(F=this.N,F[1].call(F[0])).CR(((
A.aaR(A.acf.AGX)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.acf.BiY));break;default:(F=this.
N,F[1].call(F[0])).CR(((A.aaR(A.acf.AGX)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Ca=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0]
)).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0
])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null
);(F=this.N,F[1].call(F[0])).CR((A.aaR(A.acf.EN)+Ayg)+this.GermanStateToString.Lx(
A._GetAutoObject(A.Device.Converter).AC2(this.Pz)));(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[
1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CR(
A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Ts=this.A_;if(EO<
0)EO=0;else if(EO>this.RK)EO=this.RK;if((EO===1)&&!this.Afp)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.Pz)this.Lr(0);}break;case
1:this.Bb(this.I$);break;case 2:this.Bb(this.Fa);break;case 3:if(!Ts)A.pe([this,
this.BBT],this);else this.Bb(this.YG);break;case 4:this.Bb(this.Ku);break;case 5:
if(((Ts===4)&&!this.Pz)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Ts>
0))this.AW.SQ(2);else this.AW.SQ(7);}break;default:throw new Error(Ato+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,this.A_);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.Md=true;this.SG(A._GetAutoObject(A.Device.Helper).VY(E,0,8));this.
Ahu(A._GetAutoObject(A.Device.Converter).A$8(E));this.EC(A._GetAutoObject(A.Device.
Converter).A$7(E));this.Lr(A._GetAutoObject(A.Device.Converter).S3(E));this.Md=false;
if(!!this.AM){this.YG.Kx(2);this.Ku.Kx(2);this.AW.Kx(8);}else{this.YG.Kx(0);this.
Ku.Kx(0);this.AW.Kx(0);}this.Am();},Apr:function(G){this.I$.Us(this.EA);},AaI:function(
G){var F;this.AW.A9X((F=this.AF,F[1].call(F[0])));},AaG:function(G){var F;this.AW.
A9Y((F=this.A2,F[1].call(F[0])));},Al1:function(G){A.pe([this,this.Agc],this);},
FV:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADc());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RK);},AjO:function(){return this.GI;
},AjQ:function(){return 99999999;},Lr:function(E){if(this.Lc===E)return;this.Lc=
E;if(this.Md===false)A.pe([this,this.Vp],this);A.abo([this,this.SE,this.Lr],0);}
,SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Md===false)A.pe([this,this.
Vp],this);A.abo([this,this.AbY,this.SG],0);},Vp:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).AqB(this.Lc),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pz,2,10))+A.abm(this.GI,8,10);var BO=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Agc:function(G){var F;if((!this.Ik||!this.A2)||!this.AF)return;if(!(F=this.
Ik,F[1].call(F[0])))this.AW.AE7(true);else this.AW.AE7(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Md===false)A.pe([this,this.
Vp],this);A.abo([this,this.PT,this.EC],0);},Ahu:function(E){if(this.Pz===E)return;
this.Pz=E;if(this.Md===false)A.pe([this,this.Vp],this);A.abo([this,this.Ans,this.
Ahu],0);},BBT:function(G){var F;if(!!this.JO){var Ic=(F=this.JO,F[1].call(F[0]));
var A1C=0;switch(Ic){case 0:case 1:A1C=0;break;case 2:A1C=1;break;default:A.ab5(
"%s%e",Alf,Ic);}this.EC(A1C);}if(!this.Pz)this.Ex(4);else this.Ex(5);},SE:function(
){return this.Lc;},AbY:function(){return this.GI;},PT:function(){return this.AnimalType;
},Ans:function(){return this.Pz;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.ARi._Init.call(this.AW={I:this},0);C.AvU.
_Init.call(this.YG={I:this},0);C.AvU._Init.call(this.Ku={I:this},0);C.AsL._Init.
call(this.Fa={I:this},0);C.I$._Init.call(this.I$={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AR3;var B;this.RK=5;this.AW.H(
BrN);this.YG.H(BrO);this.YG.EV(2);this.Ku.H(BrP);this.Ku.EV(16);this.Fa.H(BaJ);this.
I$.H(BaK);this.J(this.AW,0);this.J(this.YG,0);this.J(this.Ku,0);this.J(this.Fa,0
);this.J(this.I$,0);this.C9.AFb([this,this.SE,this.Lr]);this.AW.Au([this,this.AbY
,this.SG]);this.YG.Au([this,this.PT,this.EC]);this.Ku.Au([this,this.Ans,this.Ahu
]);this.Fa.CK(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cb]);this.I$.A_e([B=A._GetAutoObject(
A.Device.Device),B.Awi,B.AyP]);this.Init(aArg);},_Done:function(){this.__proto__=
C.El;this.C9._Done();this.AW._Done();this.YG._Done();this.Ku._Done();this.Fa._Done(
);this.I$._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.YG._ReInit();this.Ku._ReInit();this.Fa._ReInit();this.I$.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ku)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.El={AM:0,Awt:null,OK:null,
Q:null,EA:null,A2:null,AF:null,Ik:null,N:null,JO:null,Fm:null,Fb:null,ACZ:0,LU:0
,A_:0,RK:0,Afp:true,Init:function(aArg){A.pe([this,this.LQ],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A_)this.Bb(null);},Bm5:function(E){if(this.
ACZ===E)return;this.ACZ=E;this.Am();},WF:function(E){if(this.LU===E)return;this.
LU=E;this.Am();},DJ:function(G){A.ab5("%s",Alg);},MN:function(s){this.DJ(s);},Ex:
function(EO){A.pe([this,this.MN],this);A.pe(this.Awt,this);if(!EO)A.pe(this.OK,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);}
,C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aoz);},Or:function(G){if(this.A_>1)this.Ex(this.A_-1);},M0:function(
G){if((this.A_>0)&&(this.A_<this.RK))this.Ex(this.A_+1);},Us:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A0Q],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A0Q],this.EA,0);A.pe([this,this.A0Q],this);},Apr:function(G){},A0Q:
function(s){this.Apr(s);},OQ:function(E){if(A.aaZ(this.A2,E))return;if(!!this.A2
)A.z$([this,this.A0U],this.A2,0);this.A2=E;if(!!E)A.zX([this,this.A0U],E,0);if(!
!E)A.pe([this,this.A0U],this);},PU:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0W],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0W],E,0);if(
!!E)A.pe([this,this.A0W],this);},AaI:function(G){},A0W:function(s){this.AaI(s);}
,AaG:function(G){},A0U:function(s){this.AaG(s);},Uq:function(E){if(A.aaZ(this.Ik
,E))return;if(!!this.Ik)A.z$([this,this.A0T],this.Ik,0);this.Ik=E;if(!!E)A.zX([this
,this.A0T],E,0);if(!!E)A.pe([this,this.A0T],this);},Al1:function(G){},A0T:function(
s){this.Al1(s);},FV:function(G){A.ab5("%s",BaL);},BG4:function(s){this.FV(s);},He:
function(G){this.Ex(0);},AjO:function(){A.ab5("%s",Aoz);return 0;},AjQ:function(
){A.ab5("%s",Aoz);return 0;},LQ:function(G){},Anw:function(E){if(A.aaZ(this.JO,E
))return;if(!!this.JO)A.z$([this,this.Ao2],this.JO,0);this.JO=E;if(!!E)A.zX([this
,this.Ao2],this.JO,0);A.pe([this,this.Ao2],this);},Ao2:function(G){},AFn:function(
E){if(A.aa0(this.OK,E))return;this.OK=E;},AFS:function(E){if(this.Afp===E)return;
this.Afp=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={I:this},0);this.
__proto__=C.El;this.H(As_);this.ACZ=A.jb.Text;this.LU=A.jb.CT;this.Fm.Filter=6;this.
Fb.Filter=7;this.Fm.BL=[this,this.Or];this.Fb.BL=[this,this.M0];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fm._Done();this.Fb._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fm._ReInit(
);this.Fb._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OK)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ik)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JO)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Rb={AM:0,Dq:null,FM:
null,OK:null,EA:null,A2:null,AF:null,Ik:null,Q:null,JO:null,AEs:-1,Afp:true,AOa:
false,AUb:false,Asn:true,Init:function(aArg){A.pe([this,this.ABz],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dq)return;if(this.Dq.A_>0){if(this.Hl){this.Dq.
WF(A.jb.CJ);this.Background.L(A.jb.CT);this.V.L(A.jb.Text);}else{this.Dq.WF(A.jb.
CT);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.Dq.WF(
A.jb.CJ);else this.Dq.WF(A.jb.CT);this.Dq.Bm5(this.V.AQ);}},I2:function(G){C.Eg.
I2.call(this,G);if(!this.Dq)return;if(!this.Dq.A_)this.FV(this);else this.He(this
);},Gs:function(E){C.Eg.Gs.call(this,E);if(!!this.Dq)this.Dq.N=E;},Us:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.Apr],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.Apr],this.EA,0);A.pe([this,this.Apr],this);},Apr:function(
G){if(!!this.Dq)this.Dq.Us(this.EA);},OQ:function(E){if(A.aaZ(this.A2,E))return;
this.A2=E;if(!!this.Dq)this.Dq.OQ(E);},PU:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PU(E);},Uq:function(E){if(A.aaZ(this.Ik,E))return;
this.Ik=E;if(!!this.Dq)this.Dq.Uq(E);},BCm:function(G){var AAw=0;if(!!this.Dq){AAw=
this.Dq.A_;this.Dq.N=null;this.HP(this.Dq);}switch(this.AEs){case 0:this.Dq=A._NewObject(
C.AeV,0);break;case 1:this.Dq=A._NewObject(C.AR4,0);break;case 2:this.Dq=A._NewObject(
C.AR3,0);break;case 3:this.Dq=A._NewObject(C.AUd,0);break;case 4:this.Dq=A._NewObject(
C.AUc,0);break;case 5:this.Dq=A._NewObject(C.AR5,0);break;default:throw new Error(
BrQ+this.AEs.toFixed());}this.J(this.Dq,0);this.Dq.Anw(this.JO);this.Dq.H(BrR);this.
Dq.N=this.N;this.Dq.Us(this.EA);this.Dq.Awt=[this,this.Awt];this.Dq.Au([this,this.
Um,this.Bx]);this.Dq.Uq(this.Ik);this.Dq.OQ(this.A2);this.Dq.PU(this.AF);this.Dq.
AFn(this.OK);this.Dq.AFS(this.Afp);if(AAw>0)this.Dq.Ex(AAw);this.Bb(this.Dq);this.
Am();},FV:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FM.AjB((F=this.
N,F[1].call(F[0])));else this.FM=A._NewObject(C.Aeu,0);this.Dq.FV(this);}},He:function(
G){var B;if(!!this.Dq)this.Dq.He(this);},AjO:function(){if(!this.Dq)return 0;return this.
Dq.AjO();},AjQ:function(){if(!this.Dq)return 0;return this.Dq.AjQ();},C5:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Um,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABz],this);},BnI:function(
E){if(this.AEs===E)return;this.AEs=E;A.pe([this,this.BCm],this);},Ar4:function(E
){if(this.Asn===E)return;this.Asn=E;A.pe([this,this.ABz],this);},ABz:function(G){
var ApC;if(this.Asn){if(this.AOa)ApC=5;else ApC=0;}else if(this.AUb){if(A._GetAutoObject(
A.Device.Converter).S3(this.AM)===10)ApC=4;else ApC=3;}else if(A._GetAutoObject(
A.Device.Converter).S3(this.AM)===10)ApC=2;else ApC=1;this.BnI(ApC);},Awt:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A_)this.FM.AkR((F=this.N,F[1].call(F[
0])));this.Am();},Anw:function(E){if(A.aaZ(this.JO,E))return;if(!!this.JO)A.z$([
this,this.Ao2],this.JO,0);this.JO=E;if(!!E)A.zX([this,this.Ao2],this.JO,0);A.pe([
this,this.Ao2],this);},Ao2:function(G){if(!!this.Dq)this.Dq.Anw(this.JO);},A_G:function(
E){if(this.AUb===E)return;this.AUb=E;A.pe([this,this.ABz],this);},BmB:function(E
){if(this.AOa===E)return;this.AOa=E;A.pe([this,this.ABz],this);},AFn:function(E){
if(A.aa0(this.OK,E))return;this.OK=E;if(!!this.Dq)this.Dq.AFn(E);},AFS:function(
E){if(this.Afp===E)return;this.Afp=E;if(!!this.Dq)this.Dq.AFS(E);},Um:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Rb;this.H(UZ);this.V.R(Atf);this.V.L(A.jb.Bm);this.FM=A._NewObject(C.Aeu,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ik
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARi={ET:null,FZ:null,Eq:null,Dy:null,CW:null
,Cu:null,FO:function(E){if(this.M_===E)return;C.Li.FO.call(this,E);this.Cu.CU(E);
this.CW.CU(E);this.Dy.CU(E);this.Eq.CU(E);this.FZ.CU(E);this.ET.CU(E);},Ys:function(
HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.Cu;break;
case 2:B5=this.CW;break;case 3:B5=this.Dy;break;case 4:B5=this.Eq;break;case 5:B5=
this.FZ;break;case 6:B5=this.ET;break;case 7:B5=this.G2;break;default:A.ab5("%s"
,Ah4);}return B5;},_Init:function(aArg){C.Li._Init.call(this,aArg);C.DF._Init.call(
this.ET={I:this},0);C.DF._Init.call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={
I:this},0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.CW={I:this},
0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.ARi;this.H(BrS);this.G2.
H(AIM);this.ET.H(AyI);this.FZ.H(A0b);this.Eq.H(A0c);this.Dy.H(A0d);this.CW.H(A0e
);this.Cu.H(A0f);this.F0.H(A0g);this.EM.H(BaI);this.J(this.ET,-2);this.J(this.FZ
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
};C.AvU={Q:null,G2:null,F0:null,EM:null,Ip:null,Io:null,M_:0,Uy:0,AM:0,F$:99,Init:
function(aArg){A.pe([this,this.LQ],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Ys(0).M,this.Ys(-1).M));var IC=((Ae&
0x40)===0x40);if(IC){this.Bgy(A.jb.AV);this.Bgz(A.jb.Bm);}else{this.Bgy(this.M_);
this.Bgz(A.jb.Text);}this.Amo();},FO:function(E){if(this.M_===E)return;this.M_=E;
this.Am();},LQ:function(G){},Ys:function(HA){var B5=null;switch(HA){case-1:case 0:
B5=this.F0;break;case 1:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},Kx:
function(E){if(this.Uy===E)return;this.Uy=E;this.Amo();},Amo:function(){var B;var
F;if(!!this.Q){var DV=this.F0;var AdD=this.Uy;var A7=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A7>0){DV.L3(A7%10);A7=(A7/10)|0;}else if(AdD>0)DV.L3(0);else DV.L3(-
1);DV=(C.Ez.isPrototypeOf(B=this.AqO(DV,0x11))?B:null);AdD=AdD-1;}}},Agf:function(
G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Age:function(G){var F;var BO=this.
AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5
],this);},Bx:function(E){if(E<0)E=0;if(E>this.F$)E=this.F$;if(this.AM===E)return;
this.AM=E;this.Am();},EV:function(E){if(this.F$===E)return;this.F$=E;this.Am();}
,Bgy:function(aColor){this.F0.CU(aColor);this.G2.CU(aColor);},Bgz:function(aColor
){this.F0.Zt(aColor);this.G2.Zt(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ez._Init.call(this.G2={I:this},0);C.Ez._Init.call(this.F0={I:this},
0);A.acg.BU._Init.call(this.EM={I:this},0);A.Core.BK._Init.call(this.Ip={I:this}
,0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.AvU;this.H(BrT);this.
M_=A.jb.CJ;this.G2.H(AIM);this.F0.H(AyI);this.EM.H(AyI);this.EM.Nn(2);this.EM.L(
A.jb.E1);this.Ip.Filter=4;this.Io.Filter=5;this.J(this.G2,0);this.J(this.F0,0);this.
J(this.EM,0);this.Ip.BL=[this,this.Agf];this.Ip.D1=[this,this.Agf];this.Io.BL=[this
,this.Age];this.Io.D1=[this,this.Age];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G2._Done();this.F0._Done();this.EM._Done();this.Ip._Done();this.Io.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G2._ReInit();this.F0._ReInit();this.EM._ReInit();this.Ip._ReInit();this.Io.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ez={AgJ:
null,Background:null,Text:null,Ez:-1,M5:0,AmQ:0,Aqt:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ez<0)this.Text.R(Rp);else this.Text.R(this.Ez.toFixed(
));this.Background.L(this.M5);this.Text.L(this.AmQ);},L3:function(E){if(this.Ez===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ez=B5;this.Am();},CU:function(E){
if(this.M5===E)return;this.M5=E;this.Am();},AeZ:function(E){if(this.Aqt===E)return;
this.Aqt=E;this.AgJ.Ar(E);if(E===false)this.Text.Z(true);},Zt:function(E){if(this.
AmQ===E)return;this.AmQ=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TM._Init.call(this.AgJ={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(Alk);this.M5=A.jb.CJ;this.AgJ.Fr(750);this.AgJ.Ut(750);this.AgJ.AkB(750);
this.AmQ=A.jb.Text;this.Background.A0(0x3);this.Background.H(Alk);this.Text.A0(0x3
);this.Text.H(Alk);this.Text.R(Rp);this.J(this.Background,0);this.J(this.Text,0);
this.AgJ.Q=[B=this.Text,B.Fq,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgJ._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgJ._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FC={Y:null,I7:null,AOi:A.jV,ASh:A.jV,Tk:0,AJS:0,A2g:false,A1O:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABu],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.zX([this,this.MN],[B=A._GetAutoObject(A.Device.
Device).An,B.Fp,B.Ft],0);A.pe([this,this.ABu],this);A.pe([this,this.MN],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABu],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);},Bys:function(L$){A._GetAutoObject(A.Device.Helper
).G8(L$);this.Ap8(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap8:function(L6,AcY){A.ab5("%s",Alg);},Vk:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.Bzp],this);else if(!!As&&(As.PopupState===5)){this.A1O=true;this.Ew(this
);}},Bzp:function(G){if(this.Tk>0){this.A1O=false;this.Adp(this);this.A_9(0);}},
Aiy:function(G){if((this.AJS+1)<this.Tk)this.A_9(this.AJS+1);else A.aaS([this,this.
Bw3],this);},Bw4:function(s){this.Aiy(s);},A_9:function(E){this.AJS=E;if(this.A1O===
false){this.Bys(E);A.aaS([this,this.Bw4],this);var XL=(this.AJS/this.Tk)*100;A._GetAutoObject(
A.Device.Device).A3(49,true,A.abk(XL,0,0),0,[this,this.Vk]);}},Aar:function(G){A.
_GetAutoObject(A.Device.Device).A3(49,false,BrU,0,[this,this.Vk]);this.A2g=true;
A.pe([this,this.ALs],this);},Bw3:function(s){this.Aar(s);},Adp:function(G){this.
I7.Z(true);this.A2g=false;this.ALs(this);},BGY:function(s){this.Adp(s);},AAL:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A61();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ew:function(G){A._GetAutoObject(C.A8).FB();},A3U:function(G){A._GetAutoObject(
C.A8).Cd(84);},DJ:function(G){this.N.Z(true);this.N.C2(A.aaL(A.ach.E2));this.N.CE=[
this,this.Ew];this.N.Cw(A.aaL(A.ach.ADM));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Arg(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Cf=null;this.N.I_.C4(100);}else{this.N.Cf=[this,this.AAL];this.
N.I_.C4(255);}this.N.C3(A.aaL(A.ach.AeC));this.N.Ca=[this,this.A3U];},MN:function(
s){this.DJ(s);},ABu:function(G){this.Tk=A._GetAutoObject(A.Device.Device).An.B9(
);if(this.Tk>0)A._GetAutoObject(A.Device.Device).A3(49,true,U2,0,[this,this.Vk]);
else{this.Adp(this);this.Aar(this);}},Akz:function(E){if(this.AOi===E)return;this.
AOi=E;A.pe([this,this.ALs],this);},ALs:function(G){var B;if(this.A2g===false){this.
I7.R(A.jV);return;}var Apd;if(!A._GetAutoObject(A.Device.Device).An.B9()){var Adj=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABu],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);this.AAL(this);if(!A._GetAutoObject(A.Device.Device
).An.QK()||!Adj)Apd=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).AC9(A._GetAutoObject(A.Device.Device).An.Filter)===1)Apd=A.aaR(
A.acf.AOc);else Apd=A.aaR(A.acf.AOb);A._GetAutoObject(A.Device.Device).An.Bk(Adj
);A.zX([this,this.ABu],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);}else
Apd=this.ASh;Apd=Apd+(A0i+this.AOi);this.I7.R(Apd);},Ae_:function(E){if(this.ASh===
E)return;this.ASh=E;A.pe([this,this.ALs],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkS._Init.call(this.I7={
I:this},0);this.__proto__=C.FC;this.Dr(C.Abv);this.Y.H(Ff);this.Y.JW(1);this.I7.
H(Ff);this.J(this.Y,0);this.J(this.I7,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I7._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I7._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7A={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A7A;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvW={K3:null,MY:null,AY:0,Yi:function(){this.K3=null;this.MY=null;this.AY=0;
},Ow:function(A7){var Hh;Hh=A._NewObject(C.A7A,0);Hh.A5=A7;if(!this.K3){this.K3=
Hh;this.MY=Hh;this.AY=1;}else{this.MY.Ah=Hh;this.MY=Hh;this.AY=this.AY+1;}},AmY:
function(){var B;var RN=0;var Ol=this.K3;while(!!Ol){RN+=Ol.A5;Ol=Ol.Ah;}return RN;
},AjP:function(){if(!this.AY)return 0;return this.AmY()/this.AY;},AqY:function(){
var B;if(!this.AY)return 0;var A1I=this.AjP();var Adg=0;var Ol=this.K3;while(!!Ol
){Adg+=Math.pow(Ol.A5-A1I,2);Ol=Ol.Ah;}Adg/=this.AY;Adg=Math.sqrt(Adg);return Adg;
},_Init:function(aArg){this.__proto__=C.AvW;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOj={Gc:null,Aey:null,Yp:null,C8:null,I7:null,
CP:function(){this.A4U(this);},Init:function(aArg){A.zV([this,this.A4U],A._GetAutoObject(
A.Device.Device).Pr,0);A.pe([this,this.A4U],this);},Ew:function(G){A._GetAutoObject(
C.A8).FB();},A4U:function(G){this.Yp.Ch(-1);this.I7.Z(!this.Gc.AX.B9());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gc._Init.call(this.Gc={I:this},0);C.
Aey._Init.call(this.Aey={I:this},0);C.Yp._Init.call(this.Yp={I:this},0);A.acg.C8.
_Init.call(this.C8={I:this},0);C.AkS._Init.call(this.I7={I:this},0);this.__proto__=
C.AOj;this.N.Z(true);this.Dr(C.APe);this.Gc.H(Ath);this.Gc.N4(C.AmP);this.Aey.H(
IW);this.Yp.H(As$);this.C8.DC(BrV);this.C8.DM(BrW);this.C8.Nn(3);this.C8.L(A.jb.
Text);this.I7.H(Aoj);this.I7.R((A.aaR(A.acf.A8k)+A0i)+A.aaR(A.acf.A6D));this.J(this.
Gc,0);this.J(this.Aey,0);this.J(this.Yp,0);this.J(this.C8,0);this.J(this.I7,0);this.
N.CE=[this,this.Ew];this.N.C2(A.aaL(A.ach.E2));this.Gc.Zs(A._GetAutoObject(A.Device.
Device).Pr);this.Yp.Zs(A._GetAutoObject(A.Device.Device).Pr);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gc._Done();this.Aey._Done();this.Yp._Done();
this.C8._Done();this.I7._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gc._ReInit();this.Aey._ReInit();this.Yp._ReInit();this.C8.
_ReInit();this.I7._ReInit();this.I7.R((A.aaR(A.acf.A8k)+A0i)+A.aaR(A.acf.A6D));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gc)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yp).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOm={Auh:null,Aug:null,Auj:null,Aui:null,Aul:null,Auk:null,Aun:null,Aum:null
,AaK:null,Yx:null,Abm:null,Abl:null,RatedAttribute:0,Init:function(aArg){this.SJ(
2);},DE:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SJ(3);break;case 1:this.SJ(2);break;case
4:this.SJ(1);break;case 3:this.SJ(4);break;default:this.SJ(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SJ(1);break;case 1:this.SJ(4);break;case 4:this.
SJ(3);break;case 3:this.SJ(2);break;default:this.SJ(0);}break;default:D5.NM=true;
}},Ap8:function(L6,AcY){if(!L6)return;var Fy=A._NewObject(A.Device.Filter,0);var
HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,AcY,true);Fy.
CX(HW);var AA4=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA4.Initialize(
3,5,0,true);Fy.CX(AA4);L6.Bk(Fy);},Aiy:function(G){var Ap6=0;var A4c=A._GetAutoObject(
A.Device.Device).Bt.B9();var B1=A._NewObject(A.Device.Rating,0);while(Ap6<A4c){B1.
E3(Ap6,A._GetAutoObject(A.Device.Device).Bt);this.BdS(B1,0);var BCI=A._GetAutoObject(
A.Device.Helper).ZR(2);this.BdS(B1,BCI);Ap6++;}C.FC.Aiy.call(this,G);},Aar:function(
G){A.pe([this,this.Bdv],this);C.FC.Aar.call(this,G);},Adp:function(G){this.Auh=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Aug=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aui=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auj=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auk=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aum=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aun=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FC.Adp.
call(this,G);},DJ:function(G){C.FC.DJ.call(this,G);this.N.OS(true);this.N.OT(true
);},BdS:function(D3,Bcq){if(!D3||(D3.Timestamp<Bcq))return;if(!Bcq){this.Auh.Set(
D3.Appearance,this.Auh.Get(D3.Appearance)+1);this.Auj.Set(D3.Faeces,this.Auj.Get(
D3.Faeces)+1);this.Aul.Set(D3.Feed,this.Aul.Get(D3.Feed)+1);this.Aun.Set(D3.Respiratory
,this.Aun.Get(D3.Respiratory)+1);}else{this.Aug.Set(D3.Appearance,this.Aug.Get(D3.
Appearance)+1);this.Aui.Set(D3.Faeces,this.Aui.Get(D3.Faeces)+1);this.Auk.Set(D3.
Feed,this.Auk.Get(D3.Feed)+1);this.Aum.Set(D3.Respiratory,this.Aum.Get(D3.Respiratory
)+1);}},SJ:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yx.Kz(this.AaK.Lx(E));A.pe([this,this.Bdv],this);},Bdv:function(G){var AaL=null;
var AaM=null;switch(this.RatedAttribute){case 2:{AaL=this.Aug;AaM=this.Auh;}break;
case 4:{AaL=this.Aui;AaM=this.Auj;}break;case 1:{AaL=this.Auk;AaM=this.Aul;}break;
case 0:{AaL=A._NewObject(A.Device.Int32ArrayWrapper,0);AaM=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaL=this.Aum;AaM=this.Aun;}break;default:throw new
Error(BrX+this.RatedAttribute.toFixed());}var AGv=A._NewObject(A.acv.AUv,0);AGv.
Ow(AaL.Get(3),A.jb.E1);AGv.Ow(AaL.Get(2),A.jb.H9);AGv.Ow(AaL.Get(1),A.jb.Gj);var
AGw=A._NewObject(A.acv.AUv,0);AGw.Ow(AaM.Get(3),A.jb.E1);AGw.Ow(AaM.Get(2),A.jb.
H9);AGw.Ow(AaM.Get(1),A.jb.Gj);this.Abl.Ab8(AGv);this.Abm.Ab8(AGw);var A4G=AaL.AmY(
)-AaL.Get(5);var Bf6=0;var Bf4=0;if(A4G>0){Bf6=(AaL.Get(2)/A4G)*100;Bf4=(AaL.Get(
1)/A4G)*100;}var ALf=AaM.AmY()-AaM.Get(5);this.I7.Z(!ALf);var Bf7=0;var Bf5=0;if(
ALf>0){Bf7=(AaM.Get(2)/ALf)*100;Bf5=(AaM.Get(1)/ALf)*100;}this.Abl.A_7(A.abk(Bf6
,0,0)+AfG);this.Abl.A_J(A.abk(Bf4,0,0)+AfG);this.Abm.A_7(A.abk(Bf7,0,0)+AfG);this.
Abm.A_J(A.abk(Bf5,0,0)+AfG);},_Init:function(aArg){C.FC._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaK={I:this},0);C.NJ._Init.call(this.
Yx={I:this},0);C.ACP._Init.call(this.Abm={I:this},0);C.ACP._Init.call(this.Abl={
I:this},0);this.__proto__=C.AOm;this.Dr(C.APf);this.Akz(A.aaR(A.acf.A6E));this.Ae_(
A.aaR(A.acf.Ano));this.Yx.H(IW);this.Yx.Aj(true);this.Yx.T(A.aaR(A.acf.Axv)+A.aaR(
A.acf.Colon));this.Yx.Bi(false);this.Yx.BnG(false);this.Abm.H(BrY);this.Abm.T(A.
aaR(A.acf.AGg));this.Abl.H(BrZ);this.Abl.T(A.aaR(A.acf.A7J));this.I7.H(Aoj);this.
J(this.Yx,-1);this.J(this.Abm,-1);this.J(this.Abl,-1);this.Auh=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aug=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auj=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aui=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auk=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aun=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aum=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FC;this.AaK._Done();this.Yx._Done();this.Abm._Done();this.Abl.
_Done();C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.
AaK._ReInit();this.Yx._ReInit();this.Abm._ReInit();this.Abl._ReInit();this.Akz(A.
aaR(A.acf.A6E));this.Ae_(A.aaR(A.acf.Ano));this.Yx.T(A.aaR(A.acf.Axv)+A.aaR(A.acf.
Colon));this.Abm.T(A.aaR(A.acf.AGg));this.Abl.T(A.aaR(A.acf.A7J));},_Mark:function(
D){var B;C.FC._Mark.call(this,D);if((B=this.Auh)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aug)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auj)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aui)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aul)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auk)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aun)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aum)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOn={Aex:null,UR:null,US:null,Aew:null,UO:null,UP:null,AJU:0,AJT:0,AJy:0,AJx:
0,Adi:false,CP:function(){this.Aar(this);},Ap8:function(L6,AcY){if(!L6)return;var
Fy=A._NewObject(A.Device.Filter,0);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,AcY,true);Fy.CX(HW);var ABl=A._NewObject(A.Device.Int32FilterCriterion
,0);ABl.Initialize(7,2,0,true);Fy.CX(ABl);L6.Bk(Fy);},Aiy:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJU++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJT++;var Ap6=0;var A4c=A._GetAutoObject(
A.Device.Device).Bt.B9();var Auf;var ABG=0;while(Ap6<A4c){this.Adi=true;Auf=A._GetAutoObject(
A.Device.Device).Bt.I8(Ap6,9);if(Auf===1)ABG=1;else if((Auf===2)&&(ABG!==1))ABG=
2;Ap6++;}if(ABG===1)this.AJx++;else if(ABG===2)this.AJy++;C.FC.Aiy.call(this,G);
},Aar:function(G){var Bf2=0;var Bf3=0;if(this.Tk>0){Bf2=(this.AJU/this.Tk)*100;Bf3=(
this.AJT/this.Tk)*100;}this.UR.Kz(((((((A.abk(Bf2,0,0)+AIN)+this.AJU.toFixed())+
CQ)+A.aaR(A.acf.AEz))+CQ)+this.Tk.toFixed())+O_);this.US.Kz(((((((A.abk(Bf3,0,0)+
AIN)+this.AJT.toFixed())+CQ)+A.aaR(A.acf.AEz))+CQ)+this.Tk.toFixed())+O_);var Bf0=
0;var Bf1=0;if(this.Tk>0){Bf0=(this.AJy/this.Tk)*100;Bf1=(this.AJx/this.Tk)*100;
}this.UO.Kz(((((((A.abk(Bf0,0,0)+AIN)+this.AJy.toFixed())+CQ)+A.aaR(A.acf.AEz))+
CQ)+this.Tk.toFixed())+O_);this.UP.Kz(((((((A.abk(Bf1,0,0)+AIN)+this.AJx.toFixed(
))+CQ)+A.aaR(A.acf.AEz))+CQ)+this.Tk.toFixed())+O_);this.I7.Z(!this.Adi);C.FC.Aar.
call(this,G);},Adp:function(G){this.AJx=0;this.AJy=0;this.AJT=0;this.AJU=0;this.
Adi=false;C.FC.Adp.call(this,G);},_Init:function(aArg){C.FC._Init.call(this,aArg
);C.Agz._Init.call(this.Aex={I:this},0);C.Ajs._Init.call(this.UR={I:this},0);C.Ajs.
_Init.call(this.US={I:this},0);C.Agz._Init.call(this.Aew={I:this},0);C.Ajs._Init.
call(this.UO={I:this},0);C.Ajs._Init.call(this.UP={I:this},0);this.__proto__=C.AOn;
this.Dr(C.APg);this.Akz(A.aaR(A.acf.A6F));this.Ae_(A.aaR(A.acf.Arv));this.Aex.H(
IW);this.Aex.Aj(true);this.Aex.T(A.aaR(A.acf.A6J));this.Aex.Bi(false);this.UR.H(
Qd);this.UR.Aj(true);this.UR.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UR.
Bi(true);this.UR.AkE(2);this.US.H(Aag);this.US.Aj(true);this.US.T(A.aaR(A.acf.AvD
)+A.aaR(A.acf.Colon));this.US.Bi(true);this.US.AkE(1);this.Aew.H(Alh);this.Aew.Aj(
true);this.Aew.T(A.aaR(A.acf.A6K));this.Aew.Bi(false);this.UO.H(Aop);this.UO.Aj(
true);this.UO.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UO.Bi(true);this.
UO.AkE(2);this.UP.H(As$);this.UP.Aj(true);this.UP.T(A.aaR(A.acf.AvD)+A.aaR(A.acf.
Colon));this.UP.Bi(true);this.UP.AkE(1);this.J(this.Aex,0);this.J(this.UR,0);this.
J(this.US,0);this.J(this.Aew,0);this.J(this.UO,0);this.J(this.UP,0);this.UR.S(A.
aaL(A.fl.Ak));this.US.S(A.aaL(A.fl.Ak));this.UO.S(A.aaL(A.fl.Ak));this.UP.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FC;this.Aex._Done();this.UR._Done(
);this.US._Done();this.Aew._Done();this.UO._Done();this.UP._Done();C.FC._Done.call(
this);},_ReInit:function(){C.FC._ReInit.call(this);this.Aex._ReInit();this.UR._ReInit(
);this.US._ReInit();this.Aew._ReInit();this.UO._ReInit();this.UP._ReInit();this.
Akz(A.aaR(A.acf.A6F));this.Ae_(A.aaR(A.acf.Arv));this.Aex.T(A.aaR(A.acf.A6J));this.
UR.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.US.T(A.aaR(A.acf.AvD)+A.aaR(
A.acf.Colon));this.Aew.T(A.aaR(A.acf.A6K));this.UO.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UP.T(A.aaR(A.acf.AvD)+A.aaR(A.acf.Colon));this.UR.S(A.aaL(A.fl.
Ak));this.US.S(A.aaL(A.fl.Ak));this.UO.S(A.aaL(A.fl.Ak));this.UP.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.Aex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
US)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UP)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqN={K$:null
,Ajg:null,Ajh:null,Amp:null,Abz:null,W5:null,Abw:null,S5:null,Abx:null,S6:null,AbA:
null,W6:null,Ay:null,Add:0,AAx:0,Apx:0,A2V:0,Ben:0,CP:function(){this.Aar(this);
},DE:function(G){switch(this.Cq.CO){case 4:{if(this.I7.Fq())return;var QA=this.Y.
Br[1]+80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.Vz(null,null);}break;case 5:{if(this.
I7.Fq())return;var QA=this.Y.Br[1]-80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.Vz(null
,null);}break;default:C.FC.DE.call(this,G);}},Ap8:function(L6,AcY){if(!L6)return;
var Fy=A._NewObject(A.Device.Filter,0);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,AcY,true);Fy.CX(HW);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fy.CX(Ac_);L6.Bk(Fy);},Aiy:function(G){if(this.Bed(
)){this.K$.Ow(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arh()){var Qm=A._GetAutoObject(A.Device.Helper).Mb(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qm>0){var A2t=A._GetAutoObject(A.acj.DU).AlA(Qm,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajg.
Ow(A2t);}}var A3e=A._GetAutoObject(A.Device.Device).Bt.B9()-2;if(A3e>=0){var BAy=
A._GetAutoObject(A.Device.Device).Bt.AC$(A3e,8);var BAx=A._GetAutoObject(A.Device.
Device).Bt.Hv(A3e,6);var Qm=A._GetAutoObject(A.Device.Helper).Mb(BAx,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qm>0){var A2t=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAy)/Qm)|0;this.Ajh.Ow(A2t);}}if((A._GetAutoObject(
A.Device.Helper).W.Arh()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RQ()<=180)){var ALD=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tt=A._GetAutoObject(A.Device.
Helper).Mb(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BBP=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALD/Tt);this.Amp.Ow(BBP);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Add++;this.Apx=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZR(7)){this.AAx++;this.A2V=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Ben=A._GetAutoObject(A.Device.Helper).Mb(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.FC.Aiy.call(
this,G);},Aar:function(G){var A43=this.Ajg.AjP()|0;var A45=this.Ajh.AjP()|0;if(this.
Add>1)A._GetAutoObject(A.Device.Device).A3(56,true,this.Add.toFixed(),0,null);if(
this.Add===1)A._GetAutoObject(A.Device.Device).A3(53,true,this.Apx.toFixed(),0,null
);if(this.AAx>1)A._GetAutoObject(A.Device.Device).A3(52,true,this.AAx.toFixed(),
0,null);if(this.AAx===1)A._GetAutoObject(A.Device.Device).A3(57,true,(this.A2V.toFixed(
)+Ate)+this.Ben.toFixed(),0,null);if(this.K$.AY>0)this.W5.T(((((((A._GetAutoObject(
A.Device.Converter).Ax7(this.K$.AjP()|0,1)+AyJ)+A._GetAutoObject(A.Device.Converter
).Ax7(this.K$.AqY()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af4())+AyK)+this.K$.AY.
toFixed())+O_);else this.W5.T(A.aaR(A.acf.Unknown));if(this.Ajg.AY>0)this.S5.T(((((((
A._GetAutoObject(A.Device.Converter).S_(A43,2,true)+AyJ)+A._GetAutoObject(A.Device.
Converter).S_(this.Ajg.AqY()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).Aaw())+AyK
)+this.Ajg.AY.toFixed())+O_);else this.S5.T(A.aaR(A.acf.Unknown));if(this.Ajh.AY>
0)this.S6.T(((((((A._GetAutoObject(A.Device.Converter).S_(A45,2,true)+AyJ)+A._GetAutoObject(
A.Device.Converter).S_(this.Ajh.AqY()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).
Aaw())+AyK)+this.Ajh.AY.toFixed())+O_);else this.S6.T(A.aaR(A.acf.Unknown));if(this.
Amp.AY>0)this.W6.T(((((((A.abk(this.Amp.AjP(),0,1)+AyJ)+A.abk(this.Amp.AqY(),0,1
))+CQ)+A.aaR(A.acf.Bik))+AyK)+this.Amp.AY.toFixed())+O_);else this.W6.T(A.aaR(A.
acf.Unknown));var A44=0;var A46=0;var Adi=false;if(this.K$.AY>0)Adi=true;var Ic=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AKb=A._GetAutoObject(A.Device.
Device).An.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AKb)?AKb:null))Ic=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AKb)?AKb:null
).A5;}if(this.Ajg.AY>0){Adi=true;A44=A._GetAutoObject(A.Device.Converter).Bas(A43
,Ic);}if(this.Ajh.AY>0){Adi=true;A46=A._GetAutoObject(A.Device.Converter).Bas(A45
,Ic);}this.S5.AkE(A44);this.S6.AkE(A46);this.I7.Z(!Adi);C.FC.Aar.call(this,G);},
Adp:function(G){this.K$.Yi();this.Ajg.Yi();this.Ajh.Yi();this.Amp.Yi();this.Add=
0;this.AAx=0;this.Apx=0;this.A2V=0;C.FC.Adp.call(this,G);},Fk:function(G){var B;
this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.
MC(-this.Y.Br[1]);},Bed:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FC._Init.call(this,aArg);C.Agz._Init.call(this.Abz={I:
this},0);C.IH._Init.call(this.W5={I:this},0);C.Agz._Init.call(this.Abw={I:this},
0);C.Ajs._Init.call(this.S5={I:this},0);C.Agz._Init.call(this.Abx={I:this},0);C.
Ajs._Init.call(this.S6={I:this},0);C.Agz._Init.call(this.AbA={I:this},0);C.IH._Init.
call(this.W6={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqN;
this.Dr(C.AvC);this.Akz(A.aaR(A.acf.A6G));this.Ae_(A.aaR(A.acf.Akm));this.Abz.H(
Atm);this.Abz.Aj(true);this.Abz.T(A.aaR(A.acf.A5C));this.Abz.Bi(false);this.Abz.
Kx(5);this.W5.H(A0j);this.W5.Aj(true);this.W5.T(A.jV);this.W5.Bi(true);this.Abw.
H(Ati);this.Abw.Aj(true);this.Abw.T(A.aaR(A.acf.AL2));this.Abw.Bi(false);this.Abw.
Kx(5);this.S5.H(Atj);this.S5.Aj(true);this.S5.T(A.jV);this.S5.Bi(true);this.S5.Kz(
A.jV);this.Abx.H(Atk);this.Abx.Aj(true);this.Abx.T(A.aaR(A.acf.AuF));this.Abx.Bi(
false);this.Abx.Kx(5);this.S6.H(Br0);this.S6.Aj(true);this.S6.T(A.jV);this.S6.Bi(
true);this.S6.Kz(A.jV);this.AbA.H(A0k);this.AbA.Aj(true);this.AbA.T(A.aaR(A.acf.
A5K));this.AbA.Bi(false);this.AbA.Kx(5);this.W6.H(Aox);this.W6.Aj(true);this.W6.
T(A.jV);this.W6.Bi(true);this.Ay.H(It);this.J(this.Abz,-1);this.J(this.W5,-1);this.
J(this.Abw,-1);this.J(this.S5,-1);this.J(this.Abx,-1);this.J(this.S6,-1);this.J(
this.AbA,-1);this.J(this.W6,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.
K$=A._NewObject(C.AvW,0);this.Ajg=A._NewObject(C.AvW,0);this.Ajh=A._NewObject(C.
AvW,0);this.W5.S(A.aaL(A.fl.Af));this.S5.S(A.aaL(A.fl.Ak));this.S6.S(A.aaL(A.fl.
Ak));this.W6.S(A.aaL(A.fl.Ak));this.Amp=A._NewObject(C.A6Q,0);},_Done:function(){
this.__proto__=C.FC;this.Abz._Done();this.W5._Done();this.Abw._Done();this.S5._Done(
);this.Abx._Done();this.S6._Done();this.AbA._Done();this.W6._Done();this.Ay._Done(
);C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.Abz._ReInit(
);this.W5._ReInit();this.Abw._ReInit();this.S5._ReInit();this.Abx._ReInit();this.
S6._ReInit();this.AbA._ReInit();this.W6._ReInit();this.Ay._ReInit();this.Akz(A.aaR(
A.acf.A6G));this.Ae_(A.aaR(A.acf.Akm));this.Abz.T(A.aaR(A.acf.A5C));this.Abw.T(A.
aaR(A.acf.AL2));this.Abx.T(A.aaR(A.acf.AuF));this.AbA.T(A.aaR(A.acf.A5K));this.W5.
S(A.aaL(A.fl.Af));this.S5.S(A.aaL(A.fl.Ak));this.S6.S(A.aaL(A.fl.Ak));this.W6.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((
B=this.K$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajg)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amp)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abv={_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.Abv;this.
Df.Ax(A.aaL(A.ach.ADI));},_className:"Application::HeaderEvaluationFilter"};C.Kt={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjS.DX.call(this
,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(A._GetAutoObject(A.Device.
Device).Km));},_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.
Kt;},_ReInit:function(){C.AjS._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.AvC={Init:function(aArg){this.Df.Ax(A._GetAutoObject(A.acj.DU).BdL());},_Init:
function(aArg){C.Abv._Init.call(this,aArg);this.__proto__=C.AvC;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APg={Init:function(
aArg){this.Df.Ax(A.aaL(A.ach.Ag7));},_Init:function(aArg){C.Abv._Init.call(this,
aArg);this.__proto__=C.APg;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APf={Init:function(aArg){this.Df.Ax(A.aaL(A.ach.Arc));},_Init:function(aArg){
C.Abv._Init.call(this,aArg);this.__proto__=C.APf;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APe={Sn:null,Df:null,AP:null,CP:function(){this.Sn.R(A.aaR(A.acf.ANj));},Dg:
function(E){C.BQ.Dg.call(this,E);this.Sn.L(E);this.Df.L(E);},_Init:function(aArg
){C.BQ._Init.call(this,aArg);C.CG._Init.call(this.Sn={I:this},0);A.acg.Ap._Init.
call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this},0);this.__proto__=
C.APe;this.Sn.H(Br1);this.Sn.R(A.aaR(A.acf.ANj));this.Sn.A6(0x11);this.Df.H(Br2);
this.AP.DC(Br3);this.AP.DM(Br4);this.AP.L(A.jb.Bc);this.J(this.Sn,0);this.J(this.
Df,0);this.J(this.AP,0);this.Sn.S(A.aaL(A.fl.Af));this.Sn.AZ(A.aaL(A.fl.Ak));this.
Df.Ax(A.aaL(A.ach.AQs));},_Done:function(){this.__proto__=C.BQ;this.Sn._Done();this.
Df._Done();this.AP._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Sn._ReInit();this.Df._ReInit();this.AP._ReInit();this.Sn.R(A.aaR(
A.acf.ANj));this.Sn.S(A.aaL(A.fl.Af));this.Sn.AZ(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aey={T0:null,Aj2:
null,AjZ:null,Aj0:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.T0={I:this},0);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.
call(this.AjZ={I:this},0);A.acg.Ap._Init.call(this.Aj0={I:this},0);this.__proto__=
C.Aey;this.T0.H(Br5);this.T0.R(A.aaR(A.acf.Year));this.T0.A6(0x11);this.T0.L(A.jb.
Text);this.Aj2.H(BaM);this.Aj2.L(A.jb.Text);this.AjZ.H(Br6);this.AjZ.L(A.jb.Text
);this.Aj0.H(Br7);this.Aj0.L(A.jb.Text);this.J(this.T0,0);this.J(this.Aj2,0);this.
J(this.AjZ,0);this.J(this.Aj0,0);this.T0.S(A.aaL(A.fl.Kr));this.T0.AZ(A.aaL(A.fl.
HJ));this.Aj2.Ax(A.aaL(A.ach.AQG));this.AjZ.Ax(A.aaL(A.ach.AQF));this.Aj0.Ax(A.aaL(
A.ach.AQN));},_Done:function(){this.__proto__=C.EB;this.T0._Done();this.Aj2._Done(
);this.AjZ._Done();this.Aj0._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.T0._ReInit();this.Aj2._ReInit();this.AjZ._ReInit();this.
Aj0._ReInit();this.T0.R(A.aaR(A.acf.Year));this.T0.S(A.aaL(A.fl.Kr));this.T0.AZ(
A.aaL(A.fl.HJ));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.T0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmP={Ajy:null,AP:null
,A$:null,Ea:null,UL:null,SW:null,Gu:null,XL:0,AtQ:0,AlE:0,ABH:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SW.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.SW.M[2]-1,0,this.SW.M[
2]+1,aSize[1]]);this.UL.H([this.SW.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UL.M[2]-1,0,this.UL.M[2]+1,aSize[1]]);this.Gu.H([this.UL.M[2],0,aSize[
0],aSize[1]]);this.Ajy.H(this.Gu.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABH.toFixed());this.SW.L(this.V.AQ);this.SW.R(this.AlE.toFixed());this.UL.
L(this.V.AQ);this.UL.R(this.AtQ.toFixed());var B1=this.BBO(this.XL);this.Gu.L(A.
_GetAutoObject(A.acj.Assessment).XB(B1));this.Ajy.L(A._GetAutoObject(A.acj.Assessment
).Qr(B1));this.Gu.R(A.abk(this.XL,0,0)+AfG);},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;Ad=(this.AX.B9()-Ad)-1;if(!!this.AX){this.AlE=this.AX.CF(Ad,1);this.AtQ=
this.AX.CF(Ad,2);this.ABH=this.AX.CF(Ad,0);if(this.AlE>0)this.XL=(this.AtQ/this.
AlE)*100;else this.XL=0;this.Am();}},BBO:function(XL){if(XL>=8)return 1;else if(
XL>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajy={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UL={I:this},0);A.acg.Text._Init.call(this.SW={I:this},0
);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.AmP;this.Ajy.H(Aon);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.H(Aon);this.Ea.L(A.jb.Bc);this.UL.
L(A.jb.Text);this.SW.H(Aon);this.SW.L(A.jb.Text);this.Gu.L(A.jb.Text);this.J(this.
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
BT:null,Ax2:A.jV,Rating:0,Ai:function(Ae){C.IH.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XB(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IH.S.call(this,E);if((E===A.aaL(A.fl.Kr))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.HJ))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Kz:function(E){if(this.Ax2===E)return;this.Ax2=E;this.
BT.R(E);},AkE:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IH._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Ajs;this.BT.A0(0x34);this.BT.H(Aai);this.BT.Jb(true);this.BT.
A6(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IH;this.BT._Done();C.IH._Done.call(
this);},_ReInit:function(){C.IH._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IH._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACP={
N7:null,SM:null,V:null,AnQ:null,AnP:null,Acg:null,Acf:null,DK:Ly,Bax:A.jV,A$r:A.
jV,Ab8:function(E){if(this.N7===E)return;this.N7=E;this.SM.Ab8(this.N7);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_7:function(E){if(this.Bax===E
)return;this.Bax=E;this.Acg.R(E);},A_J:function(E){if(this.A$r===E)return;this.A$r=
E;this.Acf.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SM._Init.
call(this.SM={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnQ={I:this},0);A.acg.AL._Init.call(this.AnP={I:this},0);A.acg.Text._Init.
call(this.Acg={I:this},0);A.acg.Text._Init.call(this.Acf={I:this},0);this.__proto__=
C.ACP;this.H(Br8);this.SM.H(Br9);this.SM.Ar(false);this.SM.BnP(360);this.SM.BnZ(
0.5);this.V.A0(0x1D);this.V.H(Ta);this.V.KU(true);this.V.R(Ly);this.V.L(A.jb.Text
);this.AnQ.H(BaN);this.AnQ.L(A.jb.H9);this.AnP.H(BaO);this.AnP.L(A.jb.Gj);this.Acg.
A0(0x1D);this.Acg.H(BaN);this.Acg.L(A.jb.Text);this.Acf.A0(0x1D);this.Acf.H(BaO);
this.Acf.L(A.jb.CT);this.J(this.SM,0);this.J(this.V,0);this.J(this.AnQ,0);this.J(
this.AnP,0);this.J(this.Acg,0);this.J(this.Acf,0);this.SM.Bn0(A.aaL(A.acv.AT6));
this.V.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SM._Done();this.V._Done();this.AnQ.
_Done();this.AnP._Done();this.Acg._Done();this.Acf._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SM._ReInit();this.V._ReInit(
);this.AnQ._ReInit();this.AnP._ReInit();this.Acg._ReInit();this.Acf._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N7)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkS={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkS;this.H(U0);this.Background.A0(0x3F);this.Background.
H(U0);this.Background.L(A.jb.Bkm);this.Text.A0(0x3F);this.Text.H(U0);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.AZ(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Re={Ak3:null,NW:null,C_:null,AcE:null,JQ:null,TemperatureUnit:null,MJ:null,PX:
null,Sk:null,UA:null,Lt:null,Jh:null,Z3:null,Z2:null,Sl:null,HG:null,AjI:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlM());
this.UA.R(A._GetAutoObject(A.acj.Temperature).AlM());this.Sl.Z(!A._GetAutoObject(
A.Device.Device).AmR);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An8();this.AxZ(
);this.AcH();this.Ax0();},I2:function(G){this.WU(this);},CC:function(G){var B;C.
AB.CC.call(this,G);A.zX([this,this.AKI],[B=A._GetAutoObject(A.Device.Device),B.AEL
,B.AIZ],0);A.zX([this,this.AAM],[B=A._GetAutoObject(A.Device.Device),B.AEP,B.AI1
],0);A.zX([this,this.AAM],[B=A._GetAutoObject(A.Device.Device),B.ASS,B.A0A],0);A.
zX([this,this.A3A],[B=A._GetAutoObject(A.Device.Device),B.Ary,B.Atp],0);A.zX([this
,this.A3s],[B=A._GetAutoObject(A.Device.Device),B.AEI,B.AIW],0);A._GetAutoObject(
A.Device.Device).AhP();if(A._GetAutoObject(A.Device.Device).AmR)A._GetAutoObject(
A.Device.Device).Ae2(true);A._GetAutoObject(A.Device.Device).AxL();A.pe([this,this.
A3s],this);A.pe([this,this.AAM],this);A.pe([this,this.A3A],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).Uw(false);A._GetAutoObject(A.Device.Device).Afa(false);A._GetAutoObject(A.Device.
Device).Ae2(false);A.z$([this,this.AKI],[B=A._GetAutoObject(A.Device.Device),B.AEL
,B.AIZ],0);A.z$([this,this.AAM],[B=A._GetAutoObject(A.Device.Device),B.AEP,B.AI1
],0);A.z$([this,this.AAM],[B=A._GetAutoObject(A.Device.Device),B.ASS,B.A0A],0);A.
z$([this,this.A3A],[B=A._GetAutoObject(A.Device.Device),B.Ary,B.Atp],0);A.z$([this
,this.A3s],[B=A._GetAutoObject(A.Device.Device),B.AEI,B.AIW],0);},AAM:function(G
){this.Am();},An8:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C_.L(A.jb.Gj);this.JQ.L(this.C_.AQ);this.
MJ.L(this.C_.AQ);this.TemperatureUnit.L(this.C_.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C_.L(A.jb.AV);this.JQ.L(A.jb.Text);this.MJ.L(this.JQ.AQ);this.TemperatureUnit.
L(this.JQ.AQ);this.HG.L(A.jb.Gj);}}},AxZ:function(){this.Ak3.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JQ.R(A.aaR(A.acf.ADZ));this.C_.Ax(A.aaL(A.ach.AvP));this.C_.Cv(0);
this.NW.Cv(0);}break;case 1:{this.AVN(A._GetAutoObject(A.Device.Device).Lw,false
);this.C_.Ax(A.aaL(A.ach.AvP));this.NW.Cv(0);}break;case 2:{this.Sk.R(A._GetAutoObject(
A.Device.Converter).Ak2(A._GetAutoObject(A.Device.Device).AGk));this.AVN(A._GetAutoObject(
A.Device.Device).Lw,false);this.C_.Ax(null);this.NW.Cv(1);this.AcE.Z(true);this.
PX.Z(true);this.Sk.Z(true);this.UA.Z(true);}break;case 3:{this.AUP();this.AVN(A.
_GetAutoObject(A.Device.Device).Lw,true);this.AcE.Z(false);this.PX.Z(false);this.
Sk.Z(false);this.UA.Z(false);}break;case 4:{this.JQ.R(A.aaR(A.acf.Bkz));this.MJ.
R(A.aaR(A.acu.Akl));this.C_.Ax(A.aaL(A.ach.AvR));this.C_.Cv(2);this.NW.Cv(0);}break;
default:A.ab5("%s%e",AH8,A._GetAutoObject(A.Device.Device).MeasureState);}},AcH:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Lw<=3240)||(A._GetAutoObject(A.Device.Device
).Lw>=5460))this.N.C3(null);else this.N.C3(A.aaL(A.ach.AeB));this.N.Cw(null);}break;
default:;}},AsH:function(G){A._GetAutoObject(C.A8).FB();},WU:function(G){},A0O:function(
s){this.WU(s);},AkX:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BBB(this);break;default:;}},A0N:function(s){this.AkX(s);},AVN:
function(AoQ,BAm){if(BAm)this.Lt.L(A.jb.Bm);else this.Lt.L(A.jb.Gj);if(AoQ<=3240
){this.MJ.Z(false);this.TemperatureUnit.Z(false);this.Lt.Z(true);this.Lt.R(A.aaR(
A.acu.AVw));}else if(AoQ>=5460){this.MJ.Z(false);this.TemperatureUnit.Z(false);this.
Lt.Z(true);this.Lt.R(A.aaR(A.acu.Bqq));}else{this.MJ.Z(true);this.TemperatureUnit.
Z(true);this.Lt.Z(false);this.MJ.R(A._GetAutoObject(A.Device.Converter).Ak2(AoQ)
);}},Ax0:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lw<=3240)||(A._GetAutoObject(A.Device.
Device).Lw>=5460))this.JQ.R(A.aaR(A.acf.ADZ));else this.JQ.R(A.aaR(A.acf.Bq0));break;
default:;}},Ax1:function(){},BqJ:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Z3.Ar(true);break;case 4:this.Z2.Ar(true);break;default:{
this.Z3.Ar(false);this.Z2.Ar(false);A._GetAutoObject(A.Device.Device).Afa(false);
}}},AKI:function(G){this.Am();this.Ax1();this.BqJ();this.BqH();},A3A:function(G){
if(A._GetAutoObject(A.Device.Device).AmS){this.Sl.L(A.jb.H9);this.Sl.Cv(1);}else{
this.Sl.L(A.jb.Bm);this.Sl.Cv(0);}},BBB:function(G){if(!A._GetAutoObject(A.Device.
Device).AmR)A._GetAutoObject(A.Device.Device).Ae2(!A._GetAutoObject(A.Device.Device
).AmS);},BqH:function(){if(A._GetAutoObject(A.Device.Device).AmR){this.Sl.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Ae2(true);else A._GetAutoObject(A.Device.Device).Ae2(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sl.Z(true);else this.Sl.Z(false);},AKK:function(
G){this.CC(this);},AUP:function(){A.ab5("%s",BaL);},A3s:function(G){if(A._GetAutoObject(
A.Device.Device).HG){this.JQ.H(Br_);this.MJ.H(Br$);this.TemperatureUnit.H(Bsa);}
else{this.JQ.H(Bsb);this.MJ.H(Bsc);this.TemperatureUnit.H(Bsd);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gm._Init.call(this.Ak3={I:this},0);A.acg.
Ap._Init.call(this.NW={I:this},0);A.acg.Ap._Init.call(this.C_={I:this},0);A.acg.
Ap._Init.call(this.AcE={I:this},0);A.acg.Text._Init.call(this.JQ={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MJ={
I:this},0);A.acg.Text._Init.call(this.PX={I:this},0);A.acg.Text._Init.call(this.
Sk={I:this},0);A.acg.Text._Init.call(this.UA={I:this},0);C.CG._Init.call(this.Lt={
I:this},0);A.Device.TM._Init.call(this.Jh={I:this},0);A.Device.TM._Init.call(this.
Z3={I:this},0);A.Device.TM._Init.call(this.Z2={I:this},0);A.acg.Ap._Init.call(this.
Sl={I:this},0);C.CG._Init.call(this.HG={I:this},0);A.acl.TM._Init.call(this.AjI={
I:this},0);this.__proto__=C.Re;var B;this.N.Z(true);this.Ak3.Fr(1000);this.Ak3.B2=
2;this.NW.H(Bse);this.NW.L(A.jb.CT);this.C_.H(Bsf);this.C_.L(A.jb.AV);this.C_.Cv(
0);this.C_.Z(true);this.AcE.H(Bsg);this.AcE.L(A.jb.Text);this.AcE.Z(false);this.
JQ.KU(true);this.JQ.R(A.aaR(A.acf.ADZ));this.JQ.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.MJ.A6(0x14);this.MJ.R(A.aaR(A.acu.
Akl));this.MJ.L(A.jb.Text);this.PX.H(Bsh);this.PX.R(A.aaR(A.acf.PX));this.PX.L(A.
jb.Text);this.PX.Z(false);this.Sk.H(Bsi);this.Sk.A6(0x14);this.Sk.R(Bsj);this.Sk.
L(A.jb.Text);this.Sk.Z(false);this.UA.H(Bsk);this.UA.R(Bsl);this.UA.L(A.jb.Text);
this.UA.Z(false);this.Lt.H(Bsm);this.Lt.R(A.aaR(A.acu.AVw));this.Lt.A6(0x12);this.
Lt.L(A.jb.Gj);this.Jh.B2=false;this.Jh.Cx=true;this.Jh.HO(1);this.Jh.Fr(4000);this.
Jh.Ut(0);this.Z3.B2=false;this.Z3.Cx=true;this.Z3.HO(2);this.Z3.Fr(400);this.Z3.
Ut(200);this.Z2.B2=false;this.Z2.Cx=true;this.Z2.HO(3);this.Z2.Fr(500);this.Z2.Ut(
250);this.Sl.H(Bsn);this.HG.H(Bso);this.HG.Z(A._GetAutoObject(A.Device.Device).HG
);this.HG.R(A.aaR(A.acf.HG));this.HG.A6(0x12);this.HG.L(A.jb.Gj);this.AjI.Ar(A._GetAutoObject(
A.Device.Device).HG);this.AjI.Fr(500);this.AjI.Ut(1000);this.J(this.NW,0);this.J(
this.C_,0);this.J(this.AcE,0);this.J(this.JQ,0);this.J(this.TemperatureUnit,0);this.
J(this.MJ,0);this.J(this.PX,0);this.J(this.Sk,0);this.J(this.UA,0);this.J(this.Lt
,0);this.J(this.Sl,0);this.J(this.HG,0);this.N.CE=[this,this.AsH];this.N.Cf=[this
,this.A0N];this.N.Ca=[this,this.A0O];this.N.C2(A.aaL(A.ach.AeA));this.Ak3.Q=[B=this.
C_,B.ASJ,B.Cv];this.NW.Ax(A.aaL(A.ach.NW));this.C_.Ax(A.aaL(A.ach.AvP));this.AcE.
Ax(A.aaL(A.ach.AQ2));this.JQ.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MJ.S(A.aaL(A.fl.Aet));this.PX.S(A.aaL(A.fl.Af));this.Sk.S(A.aaL(A.fl.EK
));this.UA.S(A.aaL(A.fl.EK));this.Lt.S(A.aaL(A.fl.Aet));this.Lt.AZ(A.aaL(A.fl.EK
));this.Lt.Cr(A.aaL(A.fl.Af));this.Jh.Q=[B=A._GetAutoObject(A.Device.Device),B.AS0
,B.A0G];this.Z3.Q=[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI2];this.Z2.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEQ,B.AI2];this.Sl.Ax(A.aaL(A.ach.AqQ));this.
HG.S(A.aaL(A.fl.EK));this.HG.AZ(A.aaL(A.fl.Kr));this.HG.Cr(A.aaL(A.fl.HJ));this.
AjI.Q=[B=this.HG,B.Fq,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak3._Done();this.NW._Done();this.C_._Done();this.AcE._Done();this.JQ._Done(
);this.TemperatureUnit._Done();this.MJ._Done();this.PX._Done();this.Sk._Done();this.
UA._Done();this.Lt._Done();this.Jh._Done();this.Z3._Done();this.Z2._Done();this.
Sl._Done();this.HG._Done();this.AjI._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak3._ReInit();this.NW._ReInit();this.C_._ReInit();
this.AcE._ReInit();this.JQ._ReInit();this.TemperatureUnit._ReInit();this.MJ._ReInit(
);this.PX._ReInit();this.Sk._ReInit();this.UA._ReInit();this.Lt._ReInit();this.Jh.
_ReInit();this.Z3._ReInit();this.Z2._ReInit();this.Sl._ReInit();this.HG._ReInit(
);this.AjI._ReInit();this.JQ.R(A.aaR(A.acf.ADZ));this.MJ.R(A.aaR(A.acu.Akl));this.
PX.R(A.aaR(A.acf.PX));this.Lt.R(A.aaR(A.acu.AVw));this.HG.R(A.aaR(A.acf.HG));this.
JQ.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MJ.S(A.aaL(A.fl.
Aet));this.PX.S(A.aaL(A.fl.Af));this.Sk.S(A.aaL(A.fl.EK));this.UA.S(A.aaL(A.fl.EK
));this.Lt.S(A.aaL(A.fl.Aet));this.Lt.AZ(A.aaL(A.fl.EK));this.Lt.Cr(A.aaL(A.fl.Af
));this.HG.S(A.aaL(A.fl.EK));this.HG.AZ(A.aaL(A.fl.Kr));this.HG.Cr(A.aaL(A.fl.HJ
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak3)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjI)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AVk={AcH:
function(){C.Re.AcH.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cw(null);this.N.C3(A.aaL(A.ach.AvS));}break;default:;}},
WU:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Lw>3240)&&(A._GetAutoObject(A.Device.Device
).Lw<5460)){A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKK(this);break;default:;}},Ax0:
function(){C.Re.Ax0.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JQ.R(A.aaR(A.acf.BkA));break;default:;}},Ax1:function(){C.Re.Ax1.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WH(16711680);this.Jh.Ar(true);}break;default:this.Jh.Ar(false);
}},AUP:function(){this.C_.Ax(A.aaL(A.ach.AvR));this.C_.Cv(0);this.NW.Cv(0);},_Init:
function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.AVk;this.Dr(C.APc);},
_className:"Application::TemperatureMeasurementScreen"};C.APh={Df:null,IN:null,NY:
null,AP:null,Ag9:null,A$:null,Dg:function(E){C.BQ.Dg.call(this,E);this.Df.L(E);this.
IN.L(E);this.NY.L(E);this.Ag9.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.Ap._Init.call(this.IN={I:this},0
);A.acg.Ap._Init.call(this.NY={I:this},0);A.acg.C8._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.Ag9={I:this},0);A.acg.C8._Init.call(this.A$={I:this},
0);this.__proto__=C.APh;this.Df.H(AyC);this.IN.H(Ayl);this.NY.H(AHJ);this.AP.DC(
BaP);this.AP.DM(BaQ);this.AP.L(A.jb.Bc);this.Ag9.H(Bsp);this.Ag9.L(A.jb.CT);this.
A$.DC(Bsq);this.A$.DM(Bsr);this.A$.L(A.jb.Bc);this.J(this.Df,0);this.J(this.IN,0
);this.J(this.NY,0);this.J(this.AP,0);this.J(this.Ag9,0);this.J(this.A$,0);this.
Df.Ax(A.aaL(A.ach.ADI));this.IN.Ax(A.aaL(A.ach.AeC));this.NY.Ax(A.aaL(A.ach.AvK)
);this.Ag9.Ax(A.aaL(A.ach.AQr));},_Done:function(){this.__proto__=C.BQ;this.Df._Done(
);this.IN._Done();this.NY._Done();this.AP._Done();this.Ag9._Done();this.A$._Done(
);C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Df._ReInit(
);this.IN._ReInit();this.NY._ReInit();this.AP._ReInit();this.Ag9._ReInit();this.
A$._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Df)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.De={Es:null,DS:null,AGG:
0,ANR:0,Init:function(aArg){A.zV([this,this.ALp],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALp],this);},ALp:function(G){var Ad=this.AGG;if(Ad<0){this.
DS.E6();this.DS.EC(this.ANR);return;}this.DS.EC(A._GetAutoObject(A.Device.Device
).An.AmW(Ad,14));this.DS.AFc(A._GetAutoObject(A.Device.Device).An.I8(Ad,13));this.
DS.Ae3(A._GetAutoObject(A.Device.Device).An.H3(Ad,8));this.DS.Uu(A._GetAutoObject(
A.Device.Device).An.H3(Ad,11));this.DS.Ae7(A._GetAutoObject(A.Device.Device).An.
H3(Ad,12));this.DS.Ae9(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));},A_M:function(
E){if(this.AGG===E)return;this.AGG=E;A.pe([this,this.ALp],this);},A_c:function(E
){if(this.ANR===E)return;this.ANR=E;A.pe([this,this.ALp],this);},A9o:function(){
return this.AGG;},_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.call(
this.Es={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.De;this.
Es.H(Bss);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11);this.Es.L(A.jb.Text);this.
DS.H(A0l);this.J(this.Es,0);this.J(this.DS,0);this.Es.S(A.aaL(A.fl.Af));this.Es.
AZ(A.aaL(A.fl.Ak));this.Es.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){
this.__proto__=C.EB;this.Es._Done();this.DS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.DS._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.Es.S(A.aaL(A.fl.Af));this.Es.AZ(A.aaL(A.fl.Ak));this.Es.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Ks={AgP:null,Text:null,Afk:null,Dg:function(E
){C.BQ.Dg.call(this,E);this.AgP.L(E);this.Text.L(E);this.Afk.L(E);},_Init:function(
aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgP={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afk={I:this},0);this.__proto__=
C.Ks;this.AgP.H(Bst);this.AgP.L(A.jb.Text);this.Text.H(Bsu);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afk.H(Bsv);this.Afk.L(A.jb.Text);this.
J(this.AgP,0);this.J(this.Text,0);this.J(this.Afk,0);this.AgP.Ax(A.aaL(A.ach.APj
));this.Text.S(A.aaL(A.fl.Kr));this.Text.AZ(A.aaL(A.fl.HJ));},_Done:function(){this.
__proto__=C.BQ;this.AgP._Done();this.Text._Done();this.Afk._Done();C.BQ._Done.call(
this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AgP._ReInit();this.Text.
_ReInit();this.Afk._ReInit();this.Text.S(A.aaL(A.fl.Kr));this.Text.AZ(A.aaL(A.fl.
HJ));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.AgP)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afk
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.APa={
_Init:function(aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.APa;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Ks._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.APc={_Init:function(
aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.APc;this.J2(this.Afk,-2);this.
Afk.Ax(A.aaL(A.ach.Ag7));},_className:"Application::HeaderDeviceTemperature"};C.
Yp={Ai:function(Ae){C.AmP.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bqr)+A.aaR(A.acf.Colon
));},Ch:function(Ad){var B;if(!this.AX)return;this.AlE=0;this.AtQ=0;this.XL=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B9();O++){this.AlE+=this.AX.CF(O,1);this.AtQ+=
this.AX.CF(O,2);}if(this.AlE>0)this.XL=(this.AtQ/this.AlE)*100;this.Am();}},_Init:
function(aArg){C.AmP._Init.call(this,aArg);this.__proto__=C.Yp;this.AP.Z(false);
this.A$.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.
HJ));},_ReInit:function(){C.AmP._ReInit.call(this);this.V.S(A.aaL(A.fl.Kr));this.
V.AZ(A.aaL(A.fl.HJ));},_className:"Application::EvaluationLossesSumItem"};C.A6P={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A6P;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6Q={K3:null,MY:null,AY:0,Yi:function(){this.K3=null;this.MY=null;this.AY=0;
},Ow:function(A7){var Hh;Hh=A._NewObject(C.A6P,0);Hh.A5=A7;if(!this.K3){this.K3=
Hh;this.MY=Hh;this.AY=1;}else{this.MY.Ah=Hh;this.MY=Hh;this.AY=this.AY+1;}},AmY:
function(){var B;var RN=0;var Ol=this.K3;while(!!Ol){RN+=Ol.A5;Ol=Ol.Ah;}return RN;
},AjP:function(){if(!this.AY)return 0;return this.AmY()/this.AY;},AqY:function(){
var B;if(!this.AY)return 0;var A1I=this.AjP();var Adg=0;var Ol=this.K3;while(!!Ol
){Adg+=Math.pow(Ol.A5-A1I,2);Ol=Ol.Ah;}Adg/=this.AY;Adg=Math.sqrt(Adg);return Adg;
},_Init:function(aArg){this.__proto__=C.A6Q;A.h7++;},_Done:function(){this.__proto__=
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
0x3F);this.Background.H(BD);this.V.A0(0x3F);this.V.H(AID);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KV=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hi;this.Background._Done();this.V._Done();C.Hi._Done.call(this
);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN8={WE:function(G){this.Agx();this.I4(A.aaR(
A.acf.AVv),[this,this.ATW],5);this.I4(A.aaR(A.acf.AVt),[this,this.ATV],7);this.I4(
A.aaR(A.acf.Calving),[this,this.Bmk],11);this.I4(A.aaR(A.acf.An1),[this,this.AwZ
],2);this.I4(A.aaR(A.acf.AdV),[this,this.AE1],1);this.I4(A.aaR(A.acf.AuI),[this,
this.AEV],0);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.Anh
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){}
,Abt:function(){return C.ANe;},Abu:function(){return C.APG;},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AC5());},HQ:function(G){
var F;C.GJ.HQ.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.
Converter).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(
A.jV);}this.N.OS(false);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).
Cd(62);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AN8;var
B;this.Dr(C.APd);this.Dl(A.aaR(A.acf.ASg));this.AwU([B=A._GetAutoObject(A.Device.
Device),B.A8S,B.Bbv]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.ASg));},_className:"Application::DryCowListScreen"};C.AN7={_Init:function(
aArg){C.I6._Init.call(this,aArg);this.__proto__=C.AN7;this.Lf.Ar(false);this.Lf.
Aj(false);this.Lf.Z(false);this.Jt.Ar(false);this.Jt.Aj(false);this.Jt.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APd={DX:function(G){C.Kt.DX.
call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(9));},_Init:function(
aArg){C.Kt._Init.call(this,aArg);this.__proto__=C.APd;},_className:"Application::HeaderDryCowListFilter"
};C.Abq={Filter:null,L0:null,AG9:A.jV,Er:0,AGe:1,Operator:1,Bl:function(aSize){C.
Aco.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(
Ae){C.Aco.Ai.call(this,Ae);this.L0.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Mf],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Mf],E,0);A.pe([this,this.Mf],this);},Mf:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Tw((F=this.Filter,F[1].call(
F[0])).DL(this.Er,this.Operator));else this.Tw(null);},Nj:function(E){if(this.Er===
E)return;this.Er=E;A.pe([this,this.Mf],this);},Tw:function(AI){if(!!AI){var A2k;
if(this.AGe!==1)A2k=this.AGe;else A2k=AI.Operator;this.T((this.AG9+CQ)+A._GetAutoObject(
A.Device.Converter).A6L(A2k));this.Zz(false);}else{this.T(this.AG9);this.Zz(true
);}},OR:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Mf],this);},AF0:function(E){if(this.AG9===E)return;this.AG9=E;A.pe([this,this.Mf
],this);},A_z:function(E){if(this.AGe===E)return;this.AGe=E;A.pe([this,this.Mf],
this);},_Init:function(aArg){C.Aco._Init.call(this,aArg);C.L0._Init.call(this.L0={
I:this},0);this.__proto__=C.Abq;this.H(As_);this.AW.H(Bsw);this.L0.H(A0m);this.J2(
this.V,-1);this.J(this.L0,0);},_Done:function(){this.__proto__=C.Aco;this.L0._Done(
);C.Aco._Done.call(this);},_ReInit:function(){C.Aco._ReInit.call(this);this.L0._ReInit(
);},_Mark:function(D){var B;C.Aco._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.L0)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjK={L0:null,Ai:function(Ae){C.QF.
Ai.call(this,Ae);this.L0.L(this.V.AQ);},Tw:function(AI){if(!!AI){this.H7.Cv(1);this.
Zz(true);this.L0.A_q(false);}else{this.H7.Cv(0);this.Zz(false);this.L0.A_q(true);
}},_Init:function(aArg){C.QF._Init.call(this,aArg);C.L0._Init.call(this.L0={I:this
},0);this.__proto__=C.AjK;this.Je=20;this.L0.H(A0m);this.J(this.L0,0);},_Done:function(
){this.__proto__=C.QF;this.L0._Done();C.QF._Done.call(this);},_ReInit:function(){
C.QF._ReInit.call(this);this.L0._ReInit();},_Mark:function(D){var B;C.QF._Mark.call(
this,D);if((B=this.L0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.AB7={Q:null,CP:function(){this.T(A._GetAutoObject(A.Device.Helper).AmX(this.
TableId,this.Er));},Tw:function(AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H7.Cv(1);else this.H7.Cv(0);},ID:function(G){A.pe([this,this.Mf],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.ID],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.ID],E,0);if(!!E)A.pe([this,this.ID],this);},_Init:
function(aArg){C.QF._Init.call(this,aArg);this.__proto__=C.AB7;},_ReInit:function(
){C.QF._ReInit.call(this);this.CP();},_Mark:function(D){var B;C.QF._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APG={YU:null,Ja:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YU={I:this},0);A.acg.Text._Init.call(this.Ja={I:this},0);this.__proto__=
C.APG;this.A_c(1);this.YU.H(Bsx);this.YU.KU(true);this.YU.R(A.aaR(A.acf.AEc));this.
YU.L(A.jb.Text);this.Ja.H(Tb);this.Ja.R(((A.aaR(A.acf.RQ)+BaR)+A.aaR(A.acf.Baw))+
O_);this.Ja.L(A.jb.Text);this.J(this.YU,0);this.J(this.Ja,0);this.YU.S(A.aaL(A.fl.
Ak));this.Ja.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.YU._Done(
);this.Ja._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.call(this
);this.YU._ReInit();this.Ja._ReInit();this.YU.R(A.aaR(A.acf.AEc));this.Ja.R(((A.
aaR(A.acf.RQ)+BaR)+A.aaR(A.acf.Baw))+O_);this.YU.S(A.aaL(A.fl.Ak));this.Ja.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.YU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ja)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANe={Mn:null,KS:null,AdU:null,AP:null,A$:null
,Xs:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mn.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KS.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KS.M[2]-1,0,this.
KS.M[2]+1,aSize[1]]);this.AdU.H([this.KS.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KS.L(this.V.AQ);this.AdU.L(this.V.AQ);if(!!this.Xs&&(
this.Xs!==5)){this.Mn.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Xs));this.V.L(
A._GetAutoObject(A.acj.Assessment).XB(this.Xs));}else this.Mn.L(this.Background.
AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mj=this.AX.
CF(Ad,1);var A2T=this.AX.CF(Ad,29);var Pc=this.AX.Hv(Ad,4);var LT=this.AX.I8(Ad,
13);var AlH=this.AX.I8(Ad,17);var AlQ=this.AX.H3(Ad,11);this.Xs=A._GetAutoObject(
A.Device.Helper).AMo(LT,AlQ,AlH);this.T(Mj.toFixed());this.KS.R(A2T.toFixed());this.
AdU.R(A._GetAutoObject(A.acj.KO).AC1(Pc,A._GetAutoObject(A.Device.Helper).Dv(),Bsy
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Mn={I:this},0);A.acg.Text._Init.call(this.KS={I:this},0);A.acg.Text._Init.call(
this.AdU={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.ANe;this.Mn.H(Atg);this.AP.L(A.jb.Bc);this.
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
};C.RY={AJW:0,Bea:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);if(this.Bea){this.
T(A.aaR(A.acf.AN5));this.Kz(A.jV);}else{this.T(A.aaR(A.acf.Bkh));if(this.AJW>0)this.
Kz(this.AJW.toFixed());else this.Kz(Xg);}},Ch:function(G){C.FA.Ch.call(this,G);this.
Bea=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlC=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlC>0)this.AJW=A._GetAutoObject(A.Device.Helper).
Mb(AlC,A._GetAutoObject(A.Device.Helper).Dv());else this.AJW=0;this.Am();},_Init:
function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RY;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMt={ALz:A.jV,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.RQ));
this.Kz(this.ALz);},Ch:function(G){C.FA.Ch.call(this,G);var Pc=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALz=A._GetAutoObject(A.acj.KO).AC1(Pc,A._GetAutoObject(
A.Device.Helper).Dv(),((((Bsz+A.aaR(A.acf.Bhr))+BsA)+A.aaR(A.acf.Bhq))+BsB)+A.aaR(
A.acf.AL3));this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=
C.AMt;this.ALz=A.aaR(A.acf.Unknown);},_ReInit:function(){C.FA._ReInit.call(this);
this.ALz=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AN0={Ui:null,Wq:null,Wt:null,Wu:null,SA:null,Init:function(aArg){this.Bb(this.
Ui);A.pe([this,this.MN],this);},Adw:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Ni._Init.call(this.Ui={
I:this},0);C.Ni._Init.call(this.Wq={I:this},0);C.Ni._Init.call(this.Wt={I:this},
0);C.AbT._Init.call(this.Wu={I:this},0);C.Uf._Init.call(this.SA={I:this},0);this.
__proto__=C.AN0;var B;this.Dr(C.APa);this.Ui.H(IW);this.Ui.Aj(true);this.Ui.T(A.
aaR(A.acf.ACB));this.Ui.Bi(false);this.Ui.Nl(83);this.Wq.H(Qd);this.Wq.Aj(true);
this.Wq.T(A.aaR(A.acf.Info));this.Wq.Bi(true);this.Wq.Nl(82);this.Wt.H(Aag);this.
Wt.Aj(true);this.Wt.T(A.aaR(A.acf.AGJ));this.Wt.Bi(false);this.Wt.Nl(64);this.Wu.
H(Alh);this.Wu.Aj(true);this.Wu.T(A.aaR(A.acf.TempMeasurement));this.Wu.Bi(true);
this.Wu.Nl(60);this.SA.H(Aop);this.SA.Aj(true);this.SA.T(A.aaR(A.acf.ACW));this.
SA.Bi(false);this.J(this.Ui,-1);this.J(this.Wq,-1);this.J(this.Wt,-1);this.J(this.
Wu,-1);this.J(this.SA,-1);this.N.Cf=[this,this.Adw];this.N.Cw(A.aaL(A.ach.ADN));
this.Ui.AR=[B=this.Ui,B.Np];this.Wq.AR=[B=this.Wq,B.Np];this.Wt.AR=[B=this.Wt,B.
Np];this.Wu.AR=[B=this.Wu,B.Np];this.SA.AR=null;this.SA.Ab1([B=this.SA,B.Atr]);this.
SA.Gs([this,this.D_,this.GS]);this.SA.ATb([B=A._GetAutoObject(A.Device.Device),B.
Ary,B.Atp]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ui._Done(
);this.Wq._Done();this.Wt._Done();this.Wu._Done();this.SA._Done();C.Ej._Done.call(
this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Ui._ReInit();this.Wq._ReInit(
);this.Wt._ReInit();this.Wu._ReInit();this.SA._ReInit();this.Ui.T(A.aaR(A.acf.ACB
));this.Wq.T(A.aaR(A.acf.Info));this.Wt.T(A.aaR(A.acf.AGJ));this.Wu.T(A.aaR(A.acf.
TempMeasurement));this.SA.T(A.aaR(A.acf.ACW));},_Mark:function(D){var B;C.Ej._Mark.
call(this,D);if((B=this.Ui)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceMainScreen"};C.AN1={Ug:null,AbR:null,Wr:null,Init:function(aArg
){this.Bb(this.Ug);},BzB:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).UpdateFirmware(
);},BkV:function(G){if(A._GetAutoObject(A.Device.Device).Aa6<=20)A._GetAutoObject(
A.Device.Device).A3(76,true,BsC,0,null);else A._GetAutoObject(A.Device.Device).A3(
39,true,A.jV,0,[this,this.BzB]);},_Init:function(aArg){C.Ej._Init.call(this,aArg
);C.Ni._Init.call(this.Ug={I:this},0);C.Co._Init.call(this.AbR={I:this},0);C.AbT.
_Init.call(this.Wr={I:this},0);this.__proto__=C.AN1;var B;this.Dr(C.APb);this.Ug.
H(IW);this.Ug.Aj(true);this.Ug.T(A.aaR(A.acf.A5V));this.Ug.Bi(false);this.Ug.Nl(
65);this.AbR.H(Qd);this.AbR.Aj(true);this.AbR.T(A.aaR(A.acf.A6N));this.AbR.Bi(true
);this.Wr.H(Aag);this.Wr.Aj(true);this.Wr.T(A.aaR(A.acf.RangeTest));this.Wr.Bi(false
);this.Wr.Nl(15);this.J(this.Ug,-1);this.J(this.AbR,-1);this.J(this.Wr,-1);this.
Ug.AR=[B=this.Ug,B.Np];this.AbR.AR=[this,this.BkV];this.Wr.AR=[B=this.Wr,B.Np];this.
Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ug._Done();this.AbR._Done(
);this.Wr._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.Ug._ReInit();this.AbR._ReInit();this.Wr._ReInit();this.Ug.T(A.aaR(A.acf.A5V
));this.AbR.T(A.aaR(A.acf.A6N));this.Wr.T(A.aaR(A.acf.RangeTest));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Ug)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceServiceScreen"};C.APb={_Init:function(aArg){
C.Ks._Init.call(this,aArg);this.__proto__=C.APb;this.Text.R(A.aaR(A.acf.AGJ));},
_ReInit:function(){C.Ks._ReInit.call(this);this.Text.R(A.aaR(A.acf.AGJ));},_className:
"Application::HeaderDeviceServiceMenu"};C.Ni={Nc:null,Ai:function(Ae){C.AbT.Ai.call(
this,Ae);this.Nc.L(this.V.AQ);},_Init:function(aArg){C.AbT._Init.call(this,aArg);
A.acg.Ap._Init.call(this.Nc={I:this},0);this.__proto__=C.Ni;this.Nc.A0(0x38);this.
Nc.H(BsD);this.J(this.Nc,0);this.V.Cr(A.aaL(A.fl.Bh));this.Nc.Ax(A.aaL(A.ach.Ajt
));},_Done:function(){this.__proto__=C.AbT;this.Nc._Done();C.AbT._Done.call(this
);},_ReInit:function(){C.AbT._ReInit.call(this);this.Nc._ReInit();this.V.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.AbT._Mark.call(this,D);if((B=this.Nc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"};C.ANW={Ahd:
null,Ahj:null,Ahl:null,Ahh:null,Aj_:null,Ahg:null,Ahf:null,Ahe:null,Aj8:null,Ahc:
null,Aj9:null,Ahk:null,Aj$:null,Ahi:null,Aka:null,Init:function(aArg){this.Bb(this.
Ahd);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.PQ._Init.call(this.Ahd={
I:this},0);C.PQ._Init.call(this.Ahj={I:this},0);C.PQ._Init.call(this.Ahl={I:this
},0);C.PQ._Init.call(this.Ahh={I:this},0);C.PQ._Init.call(this.Aj_={I:this},0);C.
PQ._Init.call(this.Ahg={I:this},0);C.PQ._Init.call(this.Ahf={I:this},0);C.PQ._Init.
call(this.Ahe={I:this},0);C.PQ._Init.call(this.Aj8={I:this},0);C.PQ._Init.call(this.
Ahc={I:this},0);C.PQ._Init.call(this.Aj9={I:this},0);C.PQ._Init.call(this.Ahk={I:
this},0);C.PQ._Init.call(this.Aj$={I:this},0);C.PQ._Init.call(this.Ahi={I:this},
0);C.PQ._Init.call(this.Aka={I:this},0);this.__proto__=C.ANW;this.Dr(C.AO8);this.
Ahd.H(Atm);this.Ahd.Aj(true);this.Ahd.SI(1);this.Ahj.H(A0j);this.Ahj.Aj(true);this.
Ahj.Bi(true);this.Ahj.SI(2);this.Ahl.H(Ati);this.Ahl.Aj(true);this.Ahl.Bi(false);
this.Ahl.SI(3);this.Ahh.H(Atj);this.Ahh.Aj(true);this.Ahh.Bi(true);this.Ahh.SI(4
);this.Aj_.H(Aor);this.Aj_.Aj(true);this.Aj_.SI(5);this.Ahg.H(BsE);this.Ahg.Aj(true
);this.Ahg.Bi(true);this.Ahg.SI(6);this.Ahf.H(Atk);this.Ahf.Aj(true);this.Ahf.Bi(
false);this.Ahf.SI(7);this.Ahe.H(AyB);this.Ahe.Aj(true);this.Ahe.Bi(true);this.Ahe.
SI(8);this.Aj8.H(A0k);this.Aj8.Aj(true);this.Aj8.SI(9);this.Ahc.H(Aox);this.Ahc.
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
"Application::DeviceCheckScreen"};C.AO8={_Init:function(aArg){C.Ks._Init.call(this
,aArg);this.__proto__=C.AO8;this.Text.R(A.aaR(A.acf.A6k));},_ReInit:function(){C.
Ks._ReInit.call(this);this.Text.R(A.aaR(A.acf.A6k));},_className:"Application::HeaderDeviceCheck"
};C.PQ={DeviceComponentToString:null,Kn:null,Au7:0,BcL:false,CP:function(){this.
V.R(this.DeviceComponentToString.BS(this.Au7));},Bl:function(aSize){var B;C.Co.Bl.
call(this,aSize);this.Kn.H(A.abM(this.Kn.M,aSize[0]-((B=this.Kn.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kn.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kn.
AE6(this.V.AQ);if(this.BcL)this.Kn.AwM(A.jb.E1);else this.Kn.AwM(A.jb.Gj);},SI:function(
E){if(this.Au7===E)return;this.Au7=E;this.T(this.DeviceComponentToString.BS(E));
this.DX(this);},DX:function(G){this.BcL=A._GetAutoObject(A.Device.Device).AJN(this.
Au7);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kn._Init.call(this.Kn={I:this
},0);this.__proto__=C.PQ;this.V.H(BsK);this.V.A6(0x11);this.Kn.H(BsL);this.J(this.
Kn,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kn._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kn._ReInit();this.CP();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sj={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAL],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALu(this);this.DJ(this);},CC:function(G
){A.pe([this,this.MN],this);},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[
3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},AAL:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A61();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.MN],this);},Ew:function(G){A._GetAutoObject(C.A8).FB(
);},A3U:function(G){A._GetAutoObject(C.A8).Cd(84);},DJ:function(G){this.N.C2(A.aaL(
A.ach.E2));this.N.CE=[this,this.Ew];this.N.Cw(A.aaL(A.ach.ADM));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Arg(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Cf=null;this.N.I_.C4(100);}else{this.N.Cf=[this
,this.AAL];this.N.I_.C4(255);}this.N.C3(A.aaL(A.ach.AeC));this.N.Ca=[this,this.A3U
];},MN:function(s){this.DJ(s);},ALu:function(G){A.ab5("%s",BsM);},BG6:function(s
){this.ALu(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sj;this.N.Ar(false);this.N.Z(true);this.Dr(C.
Abv);this.Ay.H(It);this.DY.A0(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(L5
);this.Y.JW(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.Em=[this
,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOk={Yg:null,Yf:null,X4:null
,TN:null,DJ:function(G){C.Sj.DJ.call(this,G);if(this.AV===this.TN){this.N.Cw(null
);this.N.Cf=null;this.N.C3(null);this.N.Ca=null;}},ALu:function(G){if(this.AV===
this.TN)this.Dr(C.APh);else this.Dr(C.Abv);},BzU:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQl);case 1:return A.
aaL(A.ach.AQm);default:A.ab5("%s%s",BsN,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},BzV:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQn);case 1:return A.aaL(A.ach.AQo);default:
A.ab5("%s%s",AIO,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ih:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Yg)A._GetAutoObject(C.A8).Cd(66);else if(Cy===this.Yf)A._GetAutoObject(C.A8).Cd(
56);else if(Cy===this.X4)A._GetAutoObject(C.A8).Cd(58);else if(Cy===this.TN)A._GetAutoObject(
C.A8).Cd(59);},_Init:function(aArg){C.Sj._Init.call(this,aArg);C.Fo._Init.call(this.
Yg={I:this},0);C.Fo._Init.call(this.Yf={I:this},0);C.Fo._Init.call(this.X4={I:this
},0);C.Fo._Init.call(this.TN={I:this},0);this.__proto__=C.AOk;this.Yg.H(Qa);this.
Yg.Aj(true);this.Yg.T(A.aaR(A.acf.Afv));this.Yf.H(J6);this.Yf.Aj(true);this.Yf.T(
A.aaR(A.acf.Temperature));this.X4.H(BsO);this.X4.Aj(true);this.X4.T(A.aaR(A.acf.
Rating));this.TN.H(BsP);this.TN.Aj(true);this.TN.T(A.aaR(A.acf.A77));this.J(this.
Yg,0);this.J(this.Yf,0);this.J(this.X4,0);this.J(this.TN,0);this.Yg.AR=[this,this.
Ih];this.Yg.DB(this.BzV());this.Yf.AR=[this,this.Ih];this.Yf.DB(this.BzU());this.
X4.AR=[this,this.Ih];this.X4.DB(A.aaL(A.ach.AQj));this.TN.AR=[this,this.Ih];this.
TN.DB(A.aaL(A.ach.AQk));},_Done:function(){this.__proto__=C.Sj;this.Yg._Done();this.
Yf._Done();this.X4._Done();this.TN._Done();C.Sj._Done.call(this);},_ReInit:function(
){C.Sj._ReInit.call(this);this.Yg._ReInit();this.Yf._ReInit();this.X4._ReInit();
this.TN._ReInit();this.Yg.T(A.aaR(A.acf.Afv));this.Yf.T(A.aaR(A.acf.Temperature)
);this.X4.T(A.aaR(A.acf.Rating));this.TN.T(A.aaR(A.acf.A77));},_Mark:function(D){
var B;C.Sj._Mark.call(this,D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOl={VM:null,X6:null,Yh:null,ALu:function(G){this.Dr(C.AvC);},BzY:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ9
);case 1:return A.aaL(A.ach.AQ_);default:A.ab5("%s%s",AIO,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ih:function(G){var Cy=(C.Fo.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VM)A._GetAutoObject(C.A8).Cd(68);else if(Cy===
this.Yh)A._GetAutoObject(C.A8).Cd(57);else if(Cy===this.X6)A._GetAutoObject(C.A8
).Cd(67);},BzX:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AP8);case 1:return A.aaL(A.ach.AP9);default:A.ab5("%s%s",AIO
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},BzZ:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ$
);case 1:return A.aaL(A.ach.ARa);default:A.ab5("%s%s",AIO,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sj._Init.call(
this,aArg);C.Fo._Init.call(this.VM={I:this},0);C.Fo._Init.call(this.X6={I:this},
0);C.Fo._Init.call(this.Yh={I:this},0);this.__proto__=C.AOl;this.VM.H(Qa);this.VM.
Aj(true);this.VM.T(A.aaR(A.acf.Bao));this.X6.H(A0n);this.X6.Aj(true);this.X6.T(A.
aaR(A.acf.A5L));this.Yh.H(Od);this.Yh.Aj(true);this.Yh.T(A.aaR(A.acf.Bar));this.
J(this.VM,0);this.J(this.X6,0);this.J(this.Yh,0);this.VM.AR=[this,this.Ih];this.
VM.DB(this.BzY());this.VM.Ab5(A.aaL(A.ach.NX));this.X6.AR=[this,this.Ih];this.X6.
DB(this.BzX());this.Yh.AR=[this,this.Ih];this.Yh.DB(this.BzZ());},_Done:function(
){this.__proto__=C.Sj;this.VM._Done();this.X6._Done();this.Yh._Done();C.Sj._Done.
call(this);},_ReInit:function(){C.Sj._ReInit.call(this);this.VM._ReInit();this.X6.
_ReInit();this.Yh._ReInit();this.VM.T(A.aaR(A.acf.Bao));this.X6.T(A.aaR(A.acf.A5L
));this.Yh.T(A.aaR(A.acf.Bar));},_Mark:function(D){var B;C.Sj._Mark.call(this,D);
if((B=this.VM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOo={Bed:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZR(0));},_Init:function(aArg){C.AqN._Init.call(this,aArg);this.
__proto__=C.AOo;this.Ae_(A.aaR(A.acf.A8q));},_ReInit:function(){C.AqN._ReInit.call(
this);this.Ae_(A.aaR(A.acf.A8q));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOh={Aik:null,Aby:null,UQ:null,Aa0:null,Po:null,Ajp:null,AgB:null,Ajq:null,AgC:
null,Ay:null,AaR:null,Add:0,Apx:0,DE:function(G){switch(this.Cq.CO){case 4:{if(this.
I7.Fq())return;var QA=this.Y.Br[1]+80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.Vz(null
,null);}break;case 5:{if(this.I7.Fq())return;var QA=this.Y.Br[1]-80;this.Y.Gb([this.
Y.Br[0],QA]);this.Y.Vz(null,null);}break;default:C.FC.DE.call(this,G);}},Ap8:function(
L6,AcY){if(!L6)return;var Fy=A._NewObject(A.Device.Filter,0);var HW=A._NewObject(
A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,AcY,true);Fy.CX(HW);var Ac_=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fy.CX(Ac_
);L6.Bk(Fy);},Aiy:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arh()){this.
Aik.Ow(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azn=this.BzS(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaR.Set(Azn,this.AaR.Get(Azn)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Add++;this.Apx=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FC.Aiy.call(
this,G);},Aar:function(G){if(this.Add>1)A._GetAutoObject(A.Device.Device).A3(56,
true,this.Add.toFixed(),0,null);if(this.Add===1)A._GetAutoObject(A.Device.Device
).A3(53,true,this.Apx.toFixed(),0,null);if(this.Aik.AY>0)this.UQ.T(((((((A._GetAutoObject(
A.Device.Converter).Ax7(this.Aik.AjP()|0,1)+AyJ)+A._GetAutoObject(A.Device.Converter
).Ax7(this.Aik.AqY()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af4())+AyK)+this.Aik.AY.
toFixed())+O_);else this.UQ.T(A.aaR(A.acf.Unknown));var RN=this.AaR.AmY();var O;
for(O=0;O<this.AaR.MH;O++){var Bf=this.BAb(O);if(!!Bf){var CB=this.AaR.Get(O);Bf.
Bmw(CB);if(!RN)Bf.A_F(0);else Bf.A_F(Math.round((CB*100)/RN)|0);Bf.Boc(this.BAa(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adi=false;if(this.Aik.AY>0)
Adi=true;this.I7.Z(!Adi);C.FC.Aar.call(this,G);},Adp:function(G){this.Aik.Yi();this.
AaR.E6();this.Add=0;this.Apx=0;C.FC.Adp.call(this,G);},BAb:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Po;break;case 1:Bf=this.Ajp;break;case 2:Bf=this.
AgB;break;case 3:Bf=this.Ajq;break;case 4:Bf=this.AgC;break;default:throw new Error(
AyL+aIndex.toFixed());}return Bf;},BAa:function(aIndex,AoL){var B;var Tx=A.jV;switch(
AoL){case 0:{switch(aIndex){case 0:Tx=BsQ;break;case 1:Tx=BsR;break;case 2:Tx=BsS;
break;case 3:Tx=BsT;break;case 4:Tx=BsU;break;default:throw new Error(AyL+aIndex.
toFixed());}Tx=Tx+(CQ+A.aaR(A.acf.AAd));}break;case 1:{switch(aIndex){case 0:Tx=
BsV;break;case 1:Tx=BsW;break;case 2:Tx=BsX;break;case 3:Tx=BsY;break;case 4:Tx=
BsZ;break;default:throw new Error(AyL+aIndex.toFixed());}Tx=Tx+(CQ+A.aaR(A.acf.A7N
));}break;default:A.ab5("%s%e",BaS,AoL);}return Tx;},BzT:function(AI9,AoL){var Ac$=
0;switch(AoL){case 0:switch(AI9){case 0:Ac$=35000;break;case 1:Ac$=40000;break;case
2:Ac$=45000;break;case 3:Ac$=50000;break;case 4:Ac$=2147483647;break;default:throw new
Error(AyL+AI9.toFixed());}break;case 1:switch(AI9){case 0:Ac$=36287;break;case 1:
Ac$=40823;break;case 2:Ac$=45359;break;case 3:Ac$=49895;break;case 4:Ac$=2147483647;
break;default:throw new Error(AyL+AI9.toFixed());}break;default:A.ab5("%s%e",BaS
,AoL);}return Ac$;},BzS:function(A7,AoL){var Azn=0;var O;for(O=0;O<this.AaR.MH;O++
)if(A7<this.BzT(O,AoL)){Azn=O;break;}return Azn;},Fk:function(G){var B;this.Ay.MB((
B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[
1]);},_Init:function(aArg){C.FC._Init.call(this,aArg);C.Agz._Init.call(this.Aby={
I:this},0);C.IH._Init.call(this.UQ={I:this},0);C.Aa0._Init.call(this.Aa0={I:this
},0);C.Po._Init.call(this.Po={I:this},0);C.Po._Init.call(this.Ajp={I:this},0);C.
Po._Init.call(this.AgB={I:this},0);C.Po._Init.call(this.Ajq={I:this},0);C.Po._Init.
call(this.AgC={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaR={I:this},0);this.__proto__=C.AOh;this.Dr(C.AvC);this.Akz(A.aaR(
A.acf.A6C));this.Ae_(A.aaR(A.acf.A8j));this.Aby.H(Atm);this.Aby.Aj(true);this.Aby.
T(A.aaR(A.acf.A5A));this.Aby.Bi(false);this.Aby.Kx(5);this.UQ.H(A0j);this.UQ.Aj(
true);this.UQ.T(A.jV);this.UQ.Bi(true);this.UQ.Kx(5);this.Aa0.H(Ati);this.Aa0.Aj(
true);this.Po.H(Atj);this.Po.Aj(true);this.Po.Bi(true);this.Ajp.H(Atk);this.Ajp.
Aj(true);this.AgB.H(AyB);this.AgB.Aj(true);this.AgB.Bi(true);this.Ajq.H(A0k);this.
Ajq.Aj(true);this.AgC.H(Aox);this.AgC.Aj(true);this.AgC.Bi(true);this.Ay.H(It);this.
AaR.ZA(5);this.J(this.Aby,-1);this.J(this.UQ,-1);this.J(this.Aa0,-1);this.J(this.
Po,-1);this.J(this.Ajp,-1);this.J(this.AgB,-1);this.J(this.Ajq,-1);this.J(this.AgC
,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.Aik=A._NewObject(C.AvW,0);
this.UQ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FC;this.Aby._Done(
);this.UQ._Done();this.Aa0._Done();this.Po._Done();this.Ajp._Done();this.AgB._Done(
);this.Ajq._Done();this.AgC._Done();this.Ay._Done();this.AaR._Done();C.FC._Done.
call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.Aby._ReInit();this.
UQ._ReInit();this.Aa0._ReInit();this.Po._ReInit();this.Ajp._ReInit();this.AgB._ReInit(
);this.Ajq._ReInit();this.AgC._ReInit();this.Ay._ReInit();this.AaR._ReInit();this.
Akz(A.aaR(A.acf.A6C));this.Ae_(A.aaR(A.acf.A8j));this.Aby.T(A.aaR(A.acf.A5A));this.
UQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.
Aik)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Po)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AgB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaR)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.Aa0={H$:null,Gu:null
,Bl:function(aSize){C.IH.Bl.call(this,aSize);this.H$.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gu.H([this.H$.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IH.Ai.call(this,Ae);this.H$.L(this.V.AQ);this.Gu.L(this.V.AQ);},_Init:
function(aArg){C.IH._Init.call(this,aArg);A.acg.Text._Init.call(this.H$={I:this}
,0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Aa0;this.T(A.aaR(
A.acf.AHk));this.H$.H(Bs0);this.H$.KU(true);this.H$.R(A.aaR(A.acf.AqA));this.H$.
L(A.jb.Text);this.Gu.H(BaT);this.Gu.R(AfG);this.Gu.L(A.jb.Text);this.J(this.H$,0
);this.J(this.Gu,0);this.V.S(A.aaL(A.fl.HJ));this.H$.S(A.aaL(A.fl.HJ));this.Gu.S(
A.aaL(A.fl.Kr));},_Done:function(){this.__proto__=C.IH;this.H$._Done();this.Gu._Done(
);C.IH._Done.call(this);},_ReInit:function(){C.IH._ReInit.call(this);this.H$._ReInit(
);this.Gu._ReInit();this.T(A.aaR(A.acf.AHk));this.H$.R(A.aaR(A.acf.AqA));this.V.
S(A.aaL(A.fl.HJ));this.H$.S(A.aaL(A.fl.HJ));this.Gu.S(A.aaL(A.fl.Kr));},_Mark:function(
D){var B;C.IH._Mark.call(this,D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Po={AP:null,A$:null,P3:null,H$:null,Gu:null,Baq:A.jV,AqA:0,A$e:0,Bl:function(
aSize){C.IH.Bl.call(this,aSize);this.P3.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P3.M[2]-1,0,this.P3.M[2]+1,aSize[1]]);this.H$.H([this.P3.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.H$.M[2]-1,0,this.H$.M[2]+1,aSize[
1]]);this.Gu.H([this.H$.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IH.Ai.call(
this,Ae);this.P3.L(this.V.AQ);this.H$.L(this.V.AQ);this.Gu.L(this.V.AQ);},Boc:function(
E){if(this.Baq===E)return;this.Baq=E;this.P3.R(E);},Bmw:function(E){if(this.AqA===
E)return;this.AqA=E;this.H$.R(E.toFixed());},A_F:function(E){if(this.A$e===E)return;
this.A$e=E;this.Gu.R(E.toFixed()+As1);},_Init:function(aArg){C.IH._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.P3={I:this},0);A.acg.Text._Init.call(this.H$={I:
this},0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Po;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.P3.H(Bs1);this.P3.R(A.aaR(A.acf.AHk));this.P3.L(
A.jb.Text);this.H$.R(U2);this.H$.L(A.jb.Text);this.Gu.R(Bs2);this.Gu.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.P3,0);this.J(this.H$,0);this.J(
this.Gu,0);this.P3.S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IH;this.AP._Done();this.A$._Done();this.
P3._Done();this.H$._Done();this.Gu._Done();C.IH._Done.call(this);},_ReInit:function(
){C.IH._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.P3._ReInit();
this.H$._ReInit();this.Gu._ReInit();this.P3.R(A.aaR(A.acf.AHk));this.P3.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IH._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMF={AKW:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mv();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amx._Init.call(this,aArg);this.__proto__=
C.AMF;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARL={R5:null,
R$:null,R4:null,R8:null,Pq:null,R7:null,ALr:function(G){A.pe([this,this.BC6],this
);A.pe([this,this.BCU],this);A.pe([this,this.BCQ],this);A.pe([this,this.A4P],this
);A.pe([this,this.BCX],this);A.pe([this,this.BCV],this);},Ih:function(G){var Cy=(
C.QX.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.R$)A._GetAutoObject(C.A8
).Cd(20);else if(Cy===this.Pq)A._GetAutoObject(C.A8).Cd(14);else if(Cy===this.R5
)A._GetAutoObject(C.A8).Cd(12);else if(Cy===this.R8)A._GetAutoObject(C.A8).Cd(43
);else if(Cy===this.R4)A._GetAutoObject(C.A8).Cd(51);else if(Cy===this.R7)A._GetAutoObject(
C.A8).Cd(61);},BCU:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mv();var
Azu=A._NewObject(A.Device.BoolFilterCriterion,0);Azu.Initialize(9,0,true,true);Be.
CX(Azu);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pq.Zy(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BC6:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mv();var ABE=A._NewObject(A.Device.BoolFilterCriterion,0);ABE.Initialize(
12,0,true,true);Be.CX(ABE);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R$.Zy(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCQ:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mv();var Aza=A._NewObject(A.Device.BoolFilterCriterion
,0);Aza.Initialize(8,0,true,true);Be.CX(Aza);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R5.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},A4P:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6V(A._GetAutoObject(A.Device.Device
).ABK);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R4.Zy(A._GetAutoObject(A.
Device.Device).An.B9().toFixed());},BCX:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A64();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R8.Zy(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BCV:function(G){var Be=A._GetAutoObject(A.
Device.Helper).AC5();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R7.Zy(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},_Init:function(aArg){C.Ub._Init.call(this,
aArg);C.QX._Init.call(this.R5={I:this},0);C.QX._Init.call(this.R$={I:this},0);C.
QX._Init.call(this.R4={I:this},0);C.QX._Init.call(this.R8={I:this},0);C.QX._Init.
call(this.Pq={I:this},0);C.QX._Init.call(this.R7={I:this},0);this.__proto__=C.ARL;
this.R5.H(Qa);this.R5.Aj(true);this.R5.T(A.aaR(A.acf.Alarm));this.R5.Ab2(true);this.
R$.H(A0n);this.R$.Aj(true);this.R$.T(A.aaR(A.acf.Asf));this.R$.Ab2(true);this.R4.
H(Od);this.R4.Aj(true);this.R4.T(A.aaR(A.acf.ActionList));this.R4.Ab2(true);this.
R8.H(Qb);this.R8.Aj(true);this.R8.T(A.aaR(A.acf.AOL));this.R8.Ab2(true);this.Pq.
H(S$);this.Pq.Ar(false);this.Pq.Aj(false);this.Pq.Z(false);this.Pq.T(A.aaR(A.acf.
ACo));this.Pq.Ab2(true);this.R7.H(UW);this.R7.Aj(true);this.R7.T(A.aaR(A.acf.A6x
));this.R7.Ab2(true);this.J(this.R5,-1);this.J(this.R$,-1);this.J(this.R4,-1);this.
J(this.R8,-1);this.J(this.Pq,-1);this.J(this.R7,-1);this.R5.AR=[this,this.AcV];this.
R5.DB(A.aaL(A.ach.ADD));this.R5.Ab5(A.aaL(A.ach.NX));this.R$.AR=[this,this.AcV];
this.R$.DB(A.aaL(A.ach.AQ6));this.R$.Ab5(A.aaL(A.ach.NX));this.R4.AR=[this,this.
AcV];this.R4.DB(A.aaL(A.ach.APS));this.R4.Ab5(A.aaL(A.ach.NX));this.R8.AR=[this,
this.AcV];this.R8.DB(A.aaL(A.ach.AQq));this.R8.Ab5(A.aaL(A.ach.NX));this.Pq.AR=[
this,this.AcV];this.Pq.DB(A.aaL(A.ach.ADD));this.Pq.Ab5(A.aaL(A.ach.NX));this.R7.
AR=[this,this.AcV];this.R7.DB(A.aaL(A.ach.AQg));this.R7.Ab5(A.aaL(A.ach.NX));},_Done:
function(){this.__proto__=C.Ub;this.R5._Done();this.R$._Done();this.R4._Done();this.
R8._Done();this.Pq._Done();this.R7._Done();C.Ub._Done.call(this);},_ReInit:function(
){C.Ub._ReInit.call(this);this.R5._ReInit();this.R$._ReInit();this.R4._ReInit();
this.R8._ReInit();this.Pq._ReInit();this.R7._ReInit();this.R5.T(A.aaR(A.acf.Alarm
));this.R$.T(A.aaR(A.acf.Asf));this.R4.T(A.aaR(A.acf.ActionList));this.R8.T(A.aaR(
A.acf.AOL));this.Pq.T(A.aaR(A.acf.ACo));this.R7.T(A.aaR(A.acf.A6x));},_Mark:function(
D){var B;C.Ub._Mark.call(this,D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARK={Sa:null,VL:null,R9:null,R6:null,R_:null,ALr:function(G){A.pe([this,this.
BCR],this);A.pe([this,this.BC1],this);A.pe([this,this.BC2],this);A.pe([this,this.
BC7],this);A.pe([this,this.BC3],this);},Ih:function(G){var Cy=(C.QX.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VL)A._GetAutoObject(C.A8).Cd(90);if(Cy===this.
R6)A._GetAutoObject(C.A8).Cd(74);if(Cy===this.R9)A._GetAutoObject(C.A8).Cd(71);if(
Cy===this.R_)A._GetAutoObject(C.A8).Cd(46);if(Cy===this.Sa)A._GetAutoObject(C.A8
).Cd(85);},BC2:function(G){var Be=A._GetAutoObject(A.Device.Helper).AC8();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.R_.Zy(A._GetAutoObject(A.Device.Device).An.B9().
toFixed());},BC7:function(G){var Be=A._GetAutoObject(A.Device.Helper).A7d(Math.max(
A._GetAutoObject(A.Device.Device).Av4,A._GetAutoObject(A.Device.Helper).A67(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sa.Zy(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BC1:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A6_();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R9.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCR:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOM();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R6.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BC3:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avy();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VL.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed()
);},_Init:function(aArg){C.Ub._Init.call(this,aArg);C.QX._Init.call(this.Sa={I:this
},0);C.QX._Init.call(this.VL={I:this},0);C.QX._Init.call(this.R9={I:this},0);C.QX.
_Init.call(this.R6={I:this},0);C.QX._Init.call(this.R_={I:this},0);this.__proto__=
C.ARK;this.Sa.H(Bs3);this.Sa.Aj(true);this.Sa.T(A.aaR(A.acf.A8b));this.Sa.Ab2(true
);this.VL.H(Bs4);this.VL.Aj(true);this.VL.T(A.aaR(A.acf.AGn));this.R9.H(Bs5);this.
R9.Aj(true);this.R9.T(A.aaR(A.acf.A8d));this.R9.Ab2(true);this.R6.H(Bs6);this.R6.
Aj(true);this.R6.T(A.aaR(A.acf.AB5));this.R6.Ab2(true);this.R_.H(Bs7);this.R_.Aj(
true);this.R_.T(A.aaR(A.acf.ASm));this.R_.Ab2(true);this.J(this.Sa,-1);this.J(this.
VL,-1);this.J(this.R9,-1);this.J(this.R6,-1);this.J(this.R_,-1);this.Sa.AR=[this
,this.AcV];this.Sa.DB(A.aaL(A.ach.AQI));this.Sa.Ab5(A.aaL(A.ach.NX));this.VL.AR=[
this,this.AcV];this.VL.DB(A.aaL(A.ach.ADT));this.R9.AR=[this,this.AcV];this.R9.DB(
A.aaL(A.ach.AQK));this.R9.Ab5(A.aaL(A.ach.NX));this.R6.AR=[this,this.AcV];this.R6.
DB(A.aaL(A.ach.AQb));this.R6.Ab5(A.aaL(A.ach.NX));this.R_.AR=[this,this.AcV];this.
R_.DB(A.aaL(A.ach.AQM));this.R_.Ab5(A.aaL(A.ach.NX));},_Done:function(){this.__proto__=
C.Ub;this.Sa._Done();this.VL._Done();this.R9._Done();this.R6._Done();this.R_._Done(
);C.Ub._Done.call(this);},_ReInit:function(){C.Ub._ReInit.call(this);this.Sa._ReInit(
);this.VL._ReInit();this.R9._ReInit();this.R6._ReInit();this.R_._ReInit();this.Sa.
T(A.aaR(A.acf.A8b));this.VL.T(A.aaR(A.acf.AGn));this.R9.T(A.aaR(A.acf.A8d));this.
R6.T(A.aaR(A.acf.AB5));this.R_.T(A.aaR(A.acf.ASm));},_Mark:function(D){var B;C.Ub.
_Mark.call(this,D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASk={WE:function(G){this.Agx(
);this.AMd();this.A5c(A.aaR(A.acf.A7Q),[this,this.BnU],131072);this.A5c(A.aaR(A.
acf.A7P),[this,this.BnT],16384);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR
).Ml(A.aaR(A.acf.ARF)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DE:function(G){},Abt:function(){return C.Aqw;},Abu:function(){return C.Aq3;}
,Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A6_());},HQ:function(G){C.QD.HQ.call(this,G);if(this.Aki()===false){this.
N.Cw(A._GetAutoObject(A.Device.Converter).Ajr(A._GetAutoObject(A.Device.Converter
).AL_(this.LZ.AC_())));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OS(false
);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(72);},BnT:function(
G){this.AGL(16384);},BnU:function(G){this.AGL(131072);},_Init:function(aArg){C.QD.
_Init.call(this,aArg);this.__proto__=C.ASk;this.Dr(C.APv);this.Dl(A.aaR(A.acf.A8h
));this.ATt(A._GetAutoObject(C.Av$));},_ReInit:function(){C.QD._ReInit.call(this
);this.Dl(A.aaR(A.acf.A8h));},_className:"Application::NoNaisIdListScreen"};C.ASj={
_Init:function(aArg){C.I6._Init.call(this,aArg);this.__proto__=C.ASj;this.Mx.Ar(
false);this.Mx.Aj(false);this.Mx.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APv={DX:function(G){C.Kt.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad0(10));},_Init:function(aArg){C.Kt._Init.call(this,aArg);this.__proto__=
C.APv;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkP={OF:null,Bf$:false
,CP:function(){A.pe([this,this.AoC],this);},DE:function(G){},CC:function(G){C.GJ.
CC.call(this,G);if(this.Bf$&&(A._GetAutoObject(A.Device.Device).PY>0))A.pe([this
,this.AIR],this);},Agg:function(G){this.A6u(this);},Agj:function(){A._GetAutoObject(
C.A8).Cd(73);},ASs:function(G){throw new Error(Aoz);},Bbb:function(s){this.ASs(s
);},ASt:function(G){throw new Error(Aoz);},Bbc:function(s){this.ASt(s);},ASy:function(
G){throw new Error(Aoz);},AIR:function(s){this.ASy(s);},Bfl:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.
Bf$=true;A._GetAutoObject(C.A8).Cd(76);}},Agi:function(G){var B;var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.
XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);},XG:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P4.Z1===3){A._GetAutoObject(A.Device.Device).A3(
74,false,A.jV,0,[this,this.Agi]);A.z$([this,this.XG],[B=A._GetAutoObject(A.Device.
Device),B.WD,B.Xj],0);A.pe([this,this.AIR],this);}},AJM:function(){throw new Error(
Aoz);},A8x:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A6t(this);},
Bor:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.BiI(this);},ID:function(
G){},A_d:function(E){if(A.aaZ(this.OF,E))return;if(!!this.OF)A.z$([this,this.ID]
,this.OF,0);this.OF=E;if(!!E)A.zX([this,this.ID],E,0);if(!!E)A.pe([this,this.ID]
,this);},BgY:function(G){var F,Ct;if(!this.OF)return;(Ct=this.OF,Ct[2].call(Ct[0
],!(F=this.OF,F[1].call(F[0]))));},_Init:function(aArg){C.GJ._Init.call(this,aArg
);this.__proto__=C.AkP;this.Dl(A.aaR(A.acf.A8o));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8o));this.CP();},_Mark:function(D){var B;C.GJ._Mark.
call(this,D);if((B=this.OF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::RegistrationsListScreen"};C.AUA={_Init:function(aArg){C.I6._Init.call(
this,aArg);this.__proto__=C.AUA;},_className:"Application::RegistrationsListFilterScreen"
};C.Aev={_Init:function(aArg){C.Yu._Init.call(this,aArg);this.__proto__=C.Aev;this.
Text.H(Bs8);this.Text.R(A.jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"
};C.ACa={Jp:0,AP:null,A$:null,Ea:null,IM:null,SZ:null,Gz:null,Mj:0,La:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IM.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A$.H([this.IM.M[2]-1,0,this.IM.M[2]+1,aSize[
1]]);this.SZ.H([this.IM.M[2],0,this.IM.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.SZ.M[2]-1,0,this.SZ.M[2]+1,aSize[1]]);this.Gz.H([this.SZ.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IM.L(this.V.AQ);this.
Gz.L(this.V.AQ);this.SZ.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj7(this.
La)){this.V.S(A.aaL(A.fl.H2));this.T(BaU);this.SZ.R(Rp);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mj.toFixed());this.SZ.R(A._GetAutoObject(A.Device.Helper).VY(this.
Jp,0,5).toFixed());}},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX
){this.Mj=this.AX.CF(Ad,1);this.La=this.AX.AO0(Ad,34);var AtY=this.AX.AOS(Ad,7);
this.Jp=this.AX.KR(Ad,26);var Azh=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.
Helper).Mb(Azh,A._GetAutoObject(A.Device.Helper).Dv());this.IM.Ax(A._GetAutoObject(
A.Device.Converter).AmV(AtY));if(AfR<100)this.Gz.R((AfR.toFixed()+CQ)+A.aaR(A.acf.
AL3));else this.Gz.R(A._GetAutoObject(A.acj.KO).AC1(Azh,A._GetAutoObject(A.Device.
Helper).Dv(),AIt));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IM={I:this},0);
A.acg.Text._Init.call(this.SZ={I:this},0);C.CG._Init.call(this.Gz={I:this},0);this.
__proto__=C.ACa;this.AP.H(Aos);this.AP.L(A.jb.Bc);this.A$.H(Aot);this.A$.L(A.jb.
Bc);this.Ea.H(A0o);this.Ea.L(A.jb.Bc);this.IM.H(BaV);this.IM.L(A.jb.Text);this.SZ.
H(Ayy);this.Gz.H(A0p);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.IM,0);this.J(this.SZ,0);this.J(this.Gz,0);this.SZ.S(A.aaL(A.fl.Af));this.
Gz.S(A.aaL(A.fl.Af));this.Gz.AZ(A.aaL(A.fl.Ak));this.Gz.Cr(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done(
);this.Ea._Done();this.IM._Done();this.SZ._Done();this.Gz._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.A$._ReInit(
);this.Ea._ReInit();this.IM._ReInit();this.SZ._ReInit();this.Gz._ReInit();this.SZ.
S(A.aaL(A.fl.Af));this.Gz.S(A.aaL(A.fl.Af));this.Gz.AZ(A.aaL(A.fl.Ak));this.Gz.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADt={Aj4:
null,PC:null,I9:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj4={I:this},0);A.acg.Ap._Init.call(this.PC={I:this},0);A.acg.Ap._Init.
call(this.I9={I:this},0);this.__proto__=C.ADt;this.Aj4.H(Bs9);this.Aj4.L(A.jb.Text
);this.PC.H(Bs_);this.PC.L(A.jb.Text);this.I9.H(BaM);this.I9.L(A.jb.Text);this.J(
this.Aj4,0);this.J(this.PC,0);this.J(this.I9,0);this.Aj4.Ax(A.aaL(A.ach.ADP));this.
PC.Ax(A.aaL(A.ach.AvM));this.I9.Ax(A.aaL(A.ach.AvH));},_Done:function(){this.__proto__=
C.De;this.Aj4._Done();this.PC._Done();this.I9._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.Aj4._ReInit();this.PC._ReInit();this.I9.
_ReInit();},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Aj4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APx={IT:null,Ag2:null,HR:null,Bc:null,MF:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9l,B.A_K],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
WC,B.JX],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.ArD,B.SK
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},Dg:function(E){C.BQ.Dg.call(this,E);this.IT.L(E);this.Ag2.L(E);this.
HR.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HR.R(A.aaR(A.acf.Afd));else this.HR.R(((A.aaR(A.acf.GN)+A.aaR(A.acf.
Colon))+CQ)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
Aq0()){this.Aw6(((A._GetAutoObject(A.Device.Helper).W.CL+1).toFixed()+Bay)+A._GetAutoObject(
A.Device.Device).An.B9().toFixed());this.JX(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nm(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Aw6(Baz);this.JX(2);
this.OnSetAnimalId(-1);this.Nm(0);}},JX:function(E){if(this.Gender===E)return;this.
Gender=E;this.Ag2.Ax(A._GetAutoObject(A.Device.Converter).AmV(E));},Aw6:function(
E){if(this.MF===E)return;this.MF=E;this.IT.R(E);},Nm:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj7(E))this.HR.
Z(false);else this.HR.Z(true);},_Init:function(aArg){C.BQ._Init.call(this,aArg);
A.acg.Text._Init.call(this.IT={I:this},0);A.acg.Ap._Init.call(this.Ag2={I:this},
0);A.acg.Text._Init.call(this.HR={I:this},0);A.acg.C8._Init.call(this.Bc={I:this
},0);this.__proto__=C.APx;this.IT.H(BaA);this.IT.Hn(2);this.IT.KU(true);this.IT.
A6(0x12);this.IT.R(BaB);this.Ag2.H(Bs$);this.HR.H(Bta);this.HR.A6(0x11);this.HR.
R(A.aaR(A.acf.Afd));this.Bc.DC(AyD);this.Bc.DM(AyE);this.Bc.L(A.jb.Bc);this.J(this.
IT,0);this.J(this.Ag2,0);this.J(this.HR,0);this.J(this.Bc,0);this.IT.S(A.aaL(A.fl.
Ak));this.Ag2.Ax(A._GetAutoObject(A.Device.Converter).AmV(2));this.HR.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.IT._Done();this.
Ag2._Done();this.HR._Done();this.Bc._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.IT._ReInit();this.Ag2._ReInit();this.HR._ReInit();
this.Bc._ReInit();this.HR.R(A.aaR(A.acf.Afd));this.IT.S(A.aaL(A.fl.Ak));this.HR.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.IT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aa3={EaseOfDeliveryToString:
null,AgT:null,Ch:function(G){C.NJ.Ch.call(this,G);var AJ5=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.Kz(this.EaseOfDeliveryToString.Lx(AJ5));this.G3.R(
this.AgT.Ael(AJ5).toFixed());},Dg:function(E){C.NJ.Dg.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.NJ._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgT._Init.call(this.
AgT={I:this},0);this.__proto__=C.Aa3;this.T(A.aaR(A.acf.AgK));},_Done:function(){
this.__proto__=C.NJ;this.EaseOfDeliveryToString._Done();this.AgT._Done();C.NJ._Done.
call(this);},_ReInit:function(){C.NJ._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgT._ReInit();this.T(A.aaR(A.acf.AgK));},_Mark:function(D){var B;
C.NJ._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XV={WhereAboutsToString:null,K0:null,Ch:function(G){C.NJ.Ch.call(this,G);var
La=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kz(this.WhereAboutsToString.
Lx(La));this.G3.R(this.K0.Ael(La).toFixed());},Dg:function(E){C.NJ.Dg.call(this,
E);this.G3.L(E);},_Init:function(aArg){C.NJ._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.K0._Init.call(this.K0={
I:this},0);this.__proto__=C.XV;this.T(A.aaR(A.acf.Jj));},_Done:function(){this.__proto__=
C.NJ;this.WhereAboutsToString._Done();this.K0._Done();C.NJ._Done.call(this);},_ReInit:
function(){C.NJ._ReInit.call(this);this.WhereAboutsToString._ReInit();this.K0._ReInit(
);this.T(A.aaR(A.acf.Jj));},_Mark:function(D){var B;C.NJ._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K0)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R1={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.
OnSetId],0);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6]
,0);A.pe([this,this.AfH],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.z$([this
,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6],0);},Fk:function(G){var
B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.
MC(-this.Y.Br[1]);},DE:function(G){switch(this.Cq.CO){case 6:case 7:this.Cq.NM=true;
break;case 4:this.Bgu(4);break;case 5:this.Bgu(5);break;default:;}},Bgu:function(
GA){var B;switch(GA){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Dd(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Dd(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;default:throw new Error(
Btb);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I5.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ch(this
);}X=X.Ah;}},AfH:function(s){this.GH(s);},MT:function(G){var B;this.Y.Vz(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R1;this.Cq.Filter=147;this.Y.H(U0);this.Y.JW(1);this.Ay.H(As0
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,
this.DE];this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XW={AaX:null,
XS:null,AaY:null,XT:null,Aa3:null,XV:null,_Init:function(aArg){C.R1._Init.call(this
,aArg);C.AaX._Init.call(this.AaX={I:this},0);C.XS._Init.call(this.XS={I:this},0);
C.AaY._Init.call(this.AaY={I:this},0);C.XT._Init.call(this.XT={I:this},0);C.Aa3.
_Init.call(this.Aa3={I:this},0);C.XV._Init.call(this.XV={I:this},0);this.__proto__=
C.XW;this.AaX.H(BD);this.AaX.Aj(true);this.XS.H(IW);this.XS.Aj(true);this.XS.Bi(
true);this.AaY.H(Qd);this.AaY.Aj(true);this.XT.H(Aag);this.XT.Aj(true);this.XT.Bi(
true);this.Aa3.H(Alh);this.Aa3.Aj(true);this.XV.H(Aop);this.XV.Aj(true);this.XV.
Bi(true);this.J(this.AaX,0);this.J(this.XS,0);this.J(this.AaY,0);this.J(this.XT,
0);this.J(this.Aa3,0);this.J(this.XV,0);},_Done:function(){this.__proto__=C.R1;this.
AaX._Done();this.XS._Done();this.AaY._Done();this.XT._Done();this.Aa3._Done();this.
XV._Done();C.R1._Done.call(this);},_ReInit:function(){C.R1._ReInit.call(this);this.
AaX._ReInit();this.XS._ReInit();this.AaY._ReInit();this.XT._ReInit();this.Aa3._ReInit(
);this.XV._ReInit();},_Mark:function(D){var B;C.R1._Mark.call(this,D);if((B=this.
AaX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XT={
BreedToString:null,G3:null,M6:null,Ch:function(G){C.IG.Ch.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BS(Bv));this.G3.
R(this.M6.Ael(Bv).toFixed());},Dg:function(E){C.IG.Dg.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.IG._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G3={I:this},0);A.Device.
M6._Init.call(this.M6={I:this},0);this.__proto__=C.XT;this.BT.H(Btc);this.G3.H(Btd
);this.G3.Hn(5);this.G3.A6(0x14);this.G3.R(Bte);this.G3.L(A.jb.Text);this.J(this.
G3,0);this.Hw.Ax(A.aaL(A.ach.ADH));this.G3.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IG;this.BreedToString._Done();this.G3._Done();this.M6._Done();C.
IG._Done.call(this);},_ReInit:function(){C.IG._ReInit.call(this);this.BreedToString.
_ReInit();this.G3._ReInit();this.M6._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IG._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaY={
Ch:function(G){C.IG.Ch.call(this,G);var AAp=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAp>0)this.T(A._GetAutoObject(A.Device.Converter).Rj(AAp));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IG._Init.call(this,aArg);this.__proto__=
C.AaY;this.Hw.Ax(A.aaL(A.ach.AQh));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XS={Yz:null,Ch:function(G){C.IG.Ch.call(this,G);var Pc=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Pc>
0)this.T(A._GetAutoObject(A.acj.KO).AjN(Pc));else this.T(A.aaR(A.acf.Unknown));var
Azj=A.aaL(A.aci.TR);switch(AfW){case 0:Azj=A.aaL(A.ach.ADF);break;case 1:{Azj=A.
aaL(A.ach.AvI);this.Yz.Cv(0);}break;case 2:{Azj=A.aaL(A.ach.AvI);this.Yz.Cv(1);}
break;case 3:{Azj=A.aaL(A.ach.AvI);this.Yz.Cv(2);}break;default:A.ab5("%s%e",Btf
,AfW);}this.Yz.Ax(Azj);},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Yz={I:this},0);this.__proto__=C.XS;this.BT.H(Btg);this.Yz.H(AH0);
this.Yz.L(A.jb.Text);this.J(this.Yz,0);this.Hw.Ax(A.aaL(A.ach.AvH));this.Yz.Ax(A.
aaL(A.ach.ADF));},_Done:function(){this.__proto__=C.IG;this.Yz._Done();C.IG._Done.
call(this);},_ReInit:function(){C.IG._ReInit.call(this);this.Yz._ReInit();},_Mark:
function(D){var B;C.IG._Mark.call(this,D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaX={Jp:0,XU:null,La:0
,Bl:function(aSize){C.IG.Bl.call(this,aSize);this.XU.H(this.Hw.M);},Ai:function(
Ae){C.IG.Ai.call(this,Ae);this.XU.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj7(this.La)){this.T(A.aaR(A.acf.AnimalLoss));this.Hw.Z(false);this.XU.Z(true);
}else if(this.Jp>0){this.T(A._GetAutoObject(A.Device.Converter).Rj(this.Jp));this.
Hw.Z(true);this.XU.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hw.Z(true);this.
XU.Z(false);}},Ch:function(G){C.IG.Ch.call(this,G);this.Jp=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.La=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.Text._Init.call(this.XU={
I:this},0);this.__proto__=C.AaX;this.XU.R(BaU);this.J(this.XU,0);this.Hw.Ax(A.aaL(
A.ach.AvM));this.XU.S(A.aaL(A.fl.H2));},_Done:function(){this.__proto__=C.IG;this.
XU._Done();C.IG._Done.call(this);},_ReInit:function(){C.IG._ReInit.call(this);this.
XU._ReInit();},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((B=this.XU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMC={XW:null,Init:function(aArg){var B;A.zX([this,this.AAH],[B=A._GetAutoObject(
A.Device.Device),B.AEG,B.AIV],0);A.pe([this,this.AAH],this);},DE:function(G){var
D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Or(this);break;
case 7:this.M0(this);break;default:D5.NM=true;}},CC:function(G){var B;this.XW.CC(
this);C.AB.CC.call(this,G);},E4:function(G){var B;this.XW.E4(this);C.AB.E4.call(
this,G);},Anp:function(G){A._GetAutoObject(C.A8).FB();},Adw:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},M0:function(G){if(A._GetAutoObject(A.Device.
Device).An.B9()<=1)return;var LE=A._GetAutoObject(A.Device.Helper).W.CL;LE=LE+1;
if(LE>=A._GetAutoObject(A.Device.Device).An.B9())LE=0;A._GetAutoObject(A.Device.
Helper).G8(LE);},Or:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)
return;var LE=A._GetAutoObject(A.Device.Helper).W.CL;LE=LE-1;if(LE<0)LE=A._GetAutoObject(
A.Device.Device).An.B9()-1;A._GetAutoObject(A.Device.Helper).G8(LE);},AAH:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqs)A._GetAutoObject(C.A8).Ab_(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XW._Init.call(this.XW={I:this},0);this.
__proto__=C.AMC;this.Background.H(Ce);this.N.Z(true);this.N.OS(true);this.N.OT(true
);this.Dr(C.APx);this.XW.H(Ff);this.J(this.XW,0);this.N.CE=[this,this.Anp];this.
N.Cf=[this,this.Adw];this.N.C2(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XW._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XW._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XW)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IG={Hw:null,BT:null
,T:function(E){C.I5.T.call(this,E);this.BT.R(this.DK);},Dg:function(E){C.I5.Dg.call(
this,E);this.Hw.L(E);this.BT.L(E);},_Init:function(aArg){C.I5._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hw={I:this},0);C.CG._Init.call(this.BT={I:this},0);this.
__proto__=C.IG;this.Hw.H(Bth);this.Hw.L(A.jb.Text);this.BT.H(Bti);this.BT.A6(0x11
);this.BT.L(A.jb.Text);this.J(this.Hw,0);this.J(this.BT,0);this.Hw.Ax(A.aaL(A.aci.
TR));this.BT.S(A.aaL(A.fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I5;this.Hw._Done();this.BT._Done();C.I5._Done.call(this);},_ReInit:function(
){C.I5._ReInit.call(this);this.Hw._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I5._Mark.call(this
,D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I5={Background:null
,KV:0,Hl:false,CP:function(){this.Ch(this);},Init:function(aArg){var B;A.zX([this
,this.BbY],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.pe([this,
this.BbY],this);},Bl:function(aSize){C.Hi.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hi.Ai.call(this,Ae);if(this.
Hl)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Ch:function(G){}
,BbY:function(s){this.Ch(s);},Bi:function(E){if(this.Hl===E)return;this.Hl=E;this.
Am();},Dg:function(E){if(this.KV===E)return;this.KV=E;},_Init:function(aArg){C.Hi.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.I5;this.H(BD);this.Background.H(AIv);this.KV=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);C.Hi._Done.call(this);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NJ={G3:null,BBE:function(G){this.BT.H(A.abN(this.BT.M,this.G3.M[0]));},_Init:
function(aArg){C.FA._Init.call(this,aArg);A.acg.Text._Init.call(this.G3={I:this}
,0);this.__proto__=C.NJ;this.G3.A0(0xA);this.G3.H(Btj);this.G3.Hn(5);this.G3.Jb(
true);this.G3.A6(0x14);this.G3.R(A.jV);this.G3.L(A.jb.Text);this.J(this.G3,0);this.
G3.Q7([this,this.BBE]);this.G3.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.FA;this.G3._Done();C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(
this);this.G3._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FA.
_Mark.call(this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axp={ARl:null,_Init:function(aArg){C.ZB._Init.call(this,aArg);this.__proto__=
C.Axp;},_Mark:function(D){var B;C.ZB._Mark.call(this,D);if((B=this.ARl)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANK={WA:null,WW:0,AwR:function(E){C.AmH.AwR.call(this,E);if(E)this.Ps.R(Btk);
else this.Ps.R(BaW);},BnJ:function(E){if(A.aaZ(this.WA,E))return;if(!!this.WA)A.
z$([this,this.A3I],this.WA,0);this.WA=E;if(!!E)A.zX([this,this.A3I],E,0);if(!!E)
A.pe([this,this.A3I],this);},AFV:function(E){var F;if(this.WW===E)return;this.WW=
E;this.AwR(!!this.WA&&((F=this.WA,F[1].call(F[0]))===E));},A3I:function(G){var F;
this.AwR(!!this.WA&&((F=this.WA,F[1].call(F[0]))===this.WW));},_Init:function(aArg
){C.AmH._Init.call(this,aArg);this.__proto__=C.ANK;this.Ps.R(BaW);this.Ps.S(A.aaL(
A.fl.H2));},_Mark:function(D){var B;C.AmH._Mark.call(this,D);if((B=this.WA)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axr={WA:null,WW:0,_Init:function(aArg){C.ZB._Init.call(this,aArg);this.__proto__=
C.Axr;},_Mark:function(D){var B;C.ZB._Mark.call(this,D);if((B=this.WA)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUe={GP:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Rb._Init.call(
this.GP={I:this},0);this.__proto__=C.AUe;var B;this.Jc(A.aaR(A.acf.ACR));this.GP.
H(Ah1);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGl));this.GP.Ar4(
false);this.GP.A_G(true);this.J(this.GP,0);this.GP.Ab1([B=this.GP,B.FV]);this.GP.
Gs([this,this.D_,this.GS]);this.GP.AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(
A.Device.Device),B.AST,B.A0B]);},_Done:function(){this.__proto__=C.Cg;this.GP._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.GP._ReInit(
);this.Jc(A.aaR(A.acf.ACR));this.GP.T(A.aaR(A.acf.AGl));},_Mark:function(D){var B;
C.Cg._Mark.call(this,D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.AUc={GI:0,C9:null,AW:null,Ku:null,Fa:null
,GermanStateToString:null,CountryToString:null,Pz:0,Lc:0,Md:false,Init:function(
aArg){A.zX([this,this.MN],[this,this.SE,this.Lr],0);A.zX([this,this.MN],[this,this.
Ans,this.Ahu],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.AW.FO(this.LU);this.
Ku.FO(this.LU);this.Fa.CU(this.LU);},DJ:function(G){var F;if(!this.N)return;switch(
this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=
this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[
1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[
0])).CR(this.CountryToString.BS(this.Lc));(F=this.N,F[1].call(F[0])).Ca=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0]
)).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(
F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CR((A.aaR(A.acf.EN
)+Ayg)+this.GermanStateToString.Lx(A._GetAutoObject(A.Device.Converter).AC2(this.
Pz)));(F=this.N,F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0
])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}}
,Ex:function(EO){var Ts=this.A_;if(EO<0)EO=0;else if(EO>this.RK)EO=this.RK;switch(
EO){case 0:{this.Bb(null);if(!this.GI&&!this.Pz)this.Lr(0);}break;case 1:this.Bb(
this.Fa);break;case 2:this.Bb(this.Ku);break;case 3:if(((Ts===2)&&!this.Pz)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Ts>0))this.AW.SQ(2);else this.AW.SQ(
7);}break;default:throw new Error(Ato+EO.toFixed());}this.A_=EO;C.El.Ex.call(this
,EO);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Md=true;this.SG(A._GetAutoObject(
A.Device.Helper).VY(E,0,10));this.Ahu(A._GetAutoObject(A.Device.Helper).VY(E,10,
2)|0);this.Lr(A._GetAutoObject(A.Device.Converter).S3(E));this.Md=false;if(!!this.
AM){this.Ku.Kx(2);this.AW.Kx(10);}else{this.Ku.Kx(0);this.AW.Kx(0);}this.Am();},
FV:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADc());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RK);},AjO:function(){return this.GI;
},AjQ:function(){return 9999999999;},Lr:function(E){if(this.Lc===E)return;this.Lc=
E;if(this.Md===false)A.pe([this,this.Vp],this);A.abo([this,this.SE,this.Lr],0);}
,SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Md===false)A.pe([this,this.
Vp],this);A.abo([this,this.AbY,this.SG],0);},Vp:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).AqB(this.Lc),3,10)+A.abl(this.Pz,2,10))+
A.abm(this.GI,10,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahu:function(
E){if(this.Pz===E)return;this.Pz=E;if(this.Md===false)A.pe([this,this.Vp],this);
A.abo([this,this.Ans,this.Ahu],0);},SE:function(){return this.Lc;},AbY:function(
){return this.GI;},Ans:function(){return this.Pz;},_Init:function(aArg){C.El._Init.
call(this,aArg);C.C9._Init.call(this.C9={I:this},0);C.ARf._Init.call(this.AW={I:
this},0);C.AvU._Init.call(this.Ku={I:this},0);C.AsL._Init.call(this.Fa={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AUc;var B;this.RK=3;this.AW.H(Btl);this.Ku.H(Btm);this.Ku.EV(16);this.Fa.H(BaX
);this.J(this.AW,0);this.J(this.Ku,0);this.J(this.Fa,0);this.C9.AFb([this,this.SE
,this.Lr]);this.AW.Au([this,this.AbY,this.SG]);this.Ku.Au([this,this.Ans,this.Ahu
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
};C.ARf={NP:null,NO:null,ET:null,FZ:null,Eq:null,Dy:null,CW:null,Cu:null,FO:function(
E){if(this.M_===E)return;C.Li.FO.call(this,E);this.Cu.CU(E);this.CW.CU(E);this.Dy.
CU(E);this.Eq.CU(E);this.FZ.CU(E);this.ET.CU(E);this.NO.CU(E);this.NP.CU(E);},Ys:
function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Cu;break;case 2:B5=this.CW;break;case 3:B5=this.Dy;break;case 4:B5=this.Eq;break;
case 5:B5=this.FZ;break;case 6:B5=this.ET;break;case 7:B5=this.NO;break;case 8:B5=
this.NP;break;case 9:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},_Init:
function(aArg){C.Li._Init.call(this,aArg);C.DF._Init.call(this.NP={I:this},0);C.
DF._Init.call(this.NO={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CW={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ARf;this.H(Btn);this.G2.H(AIM);this.NP.H(AyI);this.NO.H(A0b
);this.ET.H(A0c);this.FZ.H(A0d);this.Eq.H(A0e);this.Dy.H(A0f);this.CW.H(A0g);this.
Cu.H(BaH);this.F0.H(A0h);this.EM.H(A0h);this.J(this.NP,-2);this.J(this.NO,-2);this.
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
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUd={
GI:0,C9:null,AW:null,Fa:null,CountryToString:null,Lc:0,Md:false,Init:function(aArg
){A.zX([this,this.MN],[this,this.SE,this.Lr],0);},Ai:function(Ae){C.El.Ai.call(this
,Ae);this.AW.FO(this.LU);this.Fa.CU(this.LU);},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).CR(this.CountryToString.BS(this.Lc));(F=this.N,F[1].call(F[0])).Ca=null;}
break;default:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(
F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Ts=this.A_;if(EO<0)EO=0;
else if(EO>this.RK)EO=this.RK;switch(EO){case 0:{this.Bb(null);if(!this.GI)this.
Lr(0);}break;case 1:this.Bb(this.Fa);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Ts>0))this.AW.SQ(2);else this.AW.SQ(7);}break;default:throw new Error(Ato+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,EO);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.Md=true;this.SG(A._GetAutoObject(A.Device.Helper).VY(E,0,12));this.Lr(
A._GetAutoObject(A.Device.Converter).S3(E));this.Md=false;if(!!this.AM)this.AW.Kx(
12);else this.AW.Kx(0);this.Am();},FV:function(G){var F;if(!this.AM){var BO=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ADc());if(this.AM!==BO){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RK);},AjO:function(
){return this.GI;},AjQ:function(){return 999999999999;},Lr:function(E){if(this.Lc===
E)return;this.Lc=E;if(this.Md===false)A.pe([this,this.Vp],this);A.abo([this,this.
SE,this.Lr],0);},SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Md===false
)A.pe([this,this.Vp],this);A.abo([this,this.AbY,this.SG],0);},Vp:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).AqB(this.Lc),3,10)+A.abm(
this.GI,12,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SE:function(){return this.
Lc;},AbY:function(){return this.GI;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.ADX._Init.call(this.AW={I:this},0);C.AsL.
_Init.call(this.Fa={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUd;var B;this.RK=2;this.AW.H(Bto);this.Fa.H(BaX);this.
J(this.AW,0);this.J(this.Fa,0);this.C9.AFb([this,this.SE,this.Lr]);this.AW.Au([this
,this.AbY,this.SG]);this.Fa.CK(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cb]);this.Init(
aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done();this.AW._Done();this.
Fa._Done();this.CountryToString._Done();C.El._Done.call(this);},_ReInit:function(
){C.El._ReInit.call(this);this.C9._ReInit();this.AW._ReInit();this.Fa._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,Ya:null,Yb:null,X$:null,X9:null,X_:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Ast();},Ih:function(G){
var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Ya)A._GetAutoObject(
C.A8).Cd(28);else if(Cy===this.Yb)A._GetAutoObject(C.A8).Cd(26);else if(Cy===this.
X$)A._GetAutoObject(C.A8).Cd(54);else if(Cy===this.X9)A._GetAutoObject(C.A8).Cd(
27);else if(Cy===this.X_)A._GetAutoObject(C.A8).Cd(78);},A3M:function(G){A._GetAutoObject(
C.A8).FB();},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.
MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fo._Init.call(this.Ya={I:this
},0);C.Fo._Init.call(this.Yb={I:this},0);C.Fo._Init.call(this.X$={I:this},0);C.Fo.
_Init.call(this.X9={I:this},0);C.Fo._Init.call(this.X_={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CT);this.N.Z(true);this.N.CR(A.jV);this.Ek.Ar(false
);this.Dr(C.Aq2);this.DY.A0(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);
this.Y.JW(9);this.Ay.H(It);this.Ya.H(Qa);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.
A7$));this.Yb.H(A0n);this.Yb.Aj(true);this.Yb.T(A.aaR(A.acf.NewAnimals));this.X$.
H(Od);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.Calving));this.X9.H(Qb);this.X9.Aj(
true);this.X9.T(A.aaR(A.acf.AB_));this.X_.H(ML);this.X_.Aj(true);this.X_.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Ya,0);this.J(this.Yb,0);this.J(this.X$,0);this.J(this.X9,0);this.J(this.X_,0);this.
N.CE=[this,this.A3M];this.N.C2(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];this.Ya.
AR=[this,this.Ih];this.Ya.DB(A.aaL(A.ach.ADQ));this.Yb.AR=[this,this.Ih];this.Yb.
DB(A.aaL(A.ach.AvQ));this.X$.AR=[this,this.Ih];this.X$.DB(A.aaL(A.ach.AQa));this.
X9.AR=[this,this.Ih];this.X9.DB(A.aaL(A.ach.AP7));this.X_.AR=[this,this.Ih];this.
X_.DB(A.aaL(A.ach.AP0));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.Ya._Done();this.Yb._Done();this.X$._Done();this.X9.
_Done();this.X_._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Ya._ReInit(
);this.Yb._ReInit();this.X$._ReInit();this.X9._ReInit();this.X_._ReInit();this.Ya.
T(A.aaR(A.acf.A7$));this.Yb.T(A.aaR(A.acf.NewAnimals));this.X$.T(A.aaR(A.acf.Calving
));this.X9.T(A.aaR(A.acf.AB_));this.X_.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ASa={K7:null,EaseOfDelivery:null,BirthType:null,AcL:null
,Lm:null,Cn:null,G7:null,Lk:null,AzS:true,Init:function(aArg){this.Bb(this.Db);A.
pe([this,this.GH],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E6();A._GetAutoObject(C.A8).FB();if(!!this.K7)this.K7.Ew(this);},Agh:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwS(true);if(!!this.K7)this.K7.Agh(this
);if(A._GetAutoObject(A.Device.Device).An.Lj())A._GetAutoObject(A.Device.Helper).
AKq(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApJ]);else{this.Ai1();A.
pe([this,this.Ap7],this);}},Auq:function(){this.N.CR(A.jV);this.N.C3(A.aaL(A.ach.
ADU));this.N.Ca=[this,this.AyY];},CC:function(G){var B;C.HZ.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lj()){A._GetAutoObject(A.Device.Device).A3(41
,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),0,null);this.Ew(this);
}else if(this.AzS){this.AzS=false;A.pe([this,this.A31],this);}else if(!this.K7){
this.K7=A._NewObject(C.ASb,0);this.K7.A_a([this,this.AA5]);A._GetAutoObject(A.Device.
Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aqk(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nm(this.AsX.Ael(6));this.K7.LQ(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},Ai1:function(
){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var
L$=A._GetAutoObject(A.Device.Device).An.LV(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SR(L$);if(A._GetAutoObject(A.Device.Helper
).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.
Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KM);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A7e(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap7:function(G){var B;if(!!this.K7)this.K7.Ap7(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am6())this.C$.Z(true);else this.C$.Z(false);},
ApJ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",Atd,As.Id);}},AA5:function(G){this.
LQ(this);this.AeY(A._GetAutoObject(A.Device.Helper).Abr(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JK(this.Db);},ApK:function(G){var F;C.HZ.ApK.call(this
,G);(F=this.C$.Q,F[2].call(F[0],this.C$.AnY));},A31:function(G){A._GetAutoObject(
C.A8).Cd(79);},_Init:function(aArg){C.HZ._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcL._Init.call(this.AcL={I:this},0);C.Rb._Init.call(this.Lm={I:this
},0);C.SS._Init.call(this.Cn={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.BW.
_Init.call(this.Lk={I:this},0);this.__proto__=C.ASa;var B;this.Dr(C.APu);this.Lm.
H(Ah1);this.Lm.Aj(true);this.Lm.T(A.aaR(A.acf.ACy));this.CH.H(AcR);this.Cn.H(AcR
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFN(true);this.G7.H(AcR);
this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Ars));this.Lk.H(AcR);this.Lk.Aj(true);this.
Lk.T(A.aaR(A.acf.AgK));this.J(this.Lm,-5);this.J(this.Cn,-3);this.J(this.G7,-1);
this.J(this.Lk,-1);this.EaseOfDelivery.L2(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.L2(A._GetAutoObject(A.Device.Helper).W);this.AcL.L2(A._GetAutoObject(A.
Device.Helper).W);this.Lm.Gs([this,this.D_,this.GS]);this.Lm.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ASP,B.AnF]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.L1([
B=this.Cn,B.FV]);this.Cn.L4(A.aaL(A.ach.Edit));this.Cn.Ab7([B=A._GetAutoObject(A.
Device.Helper).W,B.Awg,B.Q6]);this.Gn.Au([B=this.AcL,B.B$,B.Cb]);this.Gn.CK(this.
AcL);this.G7.Au([B=this.BirthType,B.B$,B.Cb]);this.G7.CK(this.BirthType);this.Lk.
Au([B=this.EaseOfDelivery,B.B$,B.Cb]);this.Lk.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HZ;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcL._Done();this.Lm._Done();this.Cn._Done();this.G7._Done();this.Lk.
_Done();C.HZ._Done.call(this);},_ReInit:function(){C.HZ._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcL._ReInit();this.Lm._ReInit(
);this.Cn._ReInit();this.G7._ReInit();this.Lk._ReInit();this.Lm.T(A.aaR(A.acf.ACy
));this.Cn.T(A.aaR(A.acf.Aeg));this.G7.T(A.aaR(A.acf.Ars));this.Lk.T(A.aaR(A.acf.
AgK));},_Mark:function(D){var B;C.HZ._Mark.call(this,D);if((B=this.K7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcL)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AME={Init:function(aArg){var B;A.zX([this,this.ALt],[B=A._GetAutoObject(A.Device.
Device),B.AEN,B.AI0],0);A.pe([this,this.ALt],this);},AKW:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbU){case 0:Be=A._GetAutoObject(A.Device.
Helper).AC5();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOO();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mv();break;default:throw new Error(A0q+A.
_GetAutoObject(A.Device.Device).AbU.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},ALt:function(G){switch(A._GetAutoObject(A.Device.Device).AbU){case
0:this.Dl(A.aaR(A.acf.ASg));break;case 1:this.Dl(A.aaR(A.acf.BkK));break;case 2:
this.Dl(A.aaR(A.acf.Av_));break;default:A.ab5("%s",A0q+A._GetAutoObject(A.Device.
Device).AbU.toFixed());}},_Init:function(aArg){C.Amx._Init.call(this,aArg);this.
__proto__=C.AME;this.BnB(C.APK);this.Ek.Ab3(A._NewObject(C.APz,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ASb={AAp:0,Adj:null
,Au5:null,BeA:0,A4d:0,A28:0,Init:function(aArg){this.BeA=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adj=A._GetAutoObject(A.Device.Device).An.Filter;this.AAp=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A28=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LQ:function(G){A._GetAutoObject(A.Device.Helper).W.AnF(this.AAp);A._GetAutoObject(
A.Device.Helper).W.Ae6(true);switch(this.A28){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AyG,this.A28);}},Ew:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adj);if(!!this.A4d)this.Bg$();},Agh:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bg$:function(){var At5=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LV(0,this.BeA);At5.E3(Ad,A._GetAutoObject(
A.Device.Device).An);At5.AwE(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At5.
ArX(false);At5.AwT(At5.LactationNumber+1);At5.Ci(A._GetAutoObject(A.Device.Device
).An);},Ap7:function(G){this.A4d++;var ByL=A._GetAutoObject(A.Device.Converter).
BhT(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A4d<ByL)&&(A._GetAutoObject(
A.Device.Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A3(59,true,A.jV,0,[this,this.Vk]);else this.Bdx(
this);},Vk:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&(As.PopupState===8))this.Bdx(this);else if(!!As&&(As.PopupState===7))this.
AA5(this);},AA5:function(G){var B;var Ic=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Pc=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJ5=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Au5)(B=this.Au5
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(Ic);A._GetAutoObject(
A.Device.Helper).W.Akw(AfW);A._GetAutoObject(A.Device.Helper).W.N3(Bv);A._GetAutoObject(
A.Device.Helper).W.Q6(Pc);A._GetAutoObject(A.Device.Helper).W.Aky(AJ5);},Bdx:function(
G){this.Bg$();A._GetAutoObject(C.A8).FB();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adj);},A_a:function(E){if(A.aa0(this.Au5,E))return;this.Au5=E;},_Init:function(
aArg){this.__proto__=C.ASb;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adj)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMU={Init:function(aArg){
var B;A.zX([this,this.BeX],[B=A._GetAutoObject(A.Device.Device),B.ASz,B.A0r],0);
this.BeX(this);},Ci:function(){A.ab5("%s",Btp);},E3:function(AcX){C.Vy.E3.call(this
,AcX);var O;for(O=16;O>0;O--)this.Ib.Set(O,this.Ib.Get(O-1));this.Ib.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Btq);},AD1:function(Eh){switch(Eh){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},BeX:
function(G){this.E3(A._GetAutoObject(A.Device.Device).AuJ);A.we(this,0);},_Init:
function(aArg){C.Vy._Init.call(this,aArg);this.__proto__=C.AMU;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuX={_Init:function(){C.
AMU._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JN={C8:null,V:null,A74:true,T:function(E){C.I5.T.call(this,E);this.
V.R(E);},Dg:function(E){C.I5.Dg.call(this,E);this.V.L(E);},BnG:function(E){if(this.
A74===E)return;this.A74=E;this.C8.Z(E);},_Init:function(aArg){C.I5._Init.call(this
,aArg);A.acg.C8._Init.call(this.C8={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JN;this.C8.DC(Btr);this.C8.DM(Bts);this.C8.L(A.jb.Bc);this.V.
A0(0x3F);this.V.H(Btt);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C8,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I5;this.C8._Done();this.V._Done();C.
I5._Done.call(this);},_ReInit:function(){C.I5._ReInit.call(this);this.C8._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kr));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I5._Mark.call(this,D);if((B=this.C8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APz={AgY:null,Df:null,Abp:null,Fm:null,Fb:
null,Init:function(aArg){var B;A.zX([this,this.A4R],[B=A._GetAutoObject(A.Device.
Device),B.AEN,B.AI0],0);A.pe([this,this.A4R],this);},Dg:function(E){C.Yv.Dg.call(
this,E);this.Df.L(E);},AET:function(G){A.pe([this,this.A4R],this);},AA7:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Nq(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C5:function(G){var B;var F;C.Yv.C5.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Df.Ax(A.aaL(A.ach.AjW));return;}var Bzr=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var Bb9=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!Bzr)this.Df.Ax(A.aaL(A.ach.ADi));else if(
!!Bb9&&(Bb9.A5===1))this.Df.Ax(A.aaL(A.ach.AQc));else this.Df.Ax(A.aaL(A.ach.AjW
));},A4R:function(G){var F;var Filter=null;var AOC;switch(A._GetAutoObject(A.Device.
Device).AbU){case 0:Filter=A._GetAutoObject(A.Device.Helper).AC5();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOO();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mv();break;default:throw new Error(A0q+A._GetAutoObject(A.Device.
Device).AbU.toFixed());}var Ai5=this.Akq();if(Ai5>0){AOC=A._NewObject(A.Device.Int32FilterCriterion
,0);AOC.Initialize(1,4,Ai5,false);Filter.CX(AOC);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeZ(false);},Or:function(G){if(!this.Akq())this.AW.AeZ(true
);this.Bb(this.AW);this.Am();},M0:function(G){this.AW.AeZ(false);this.Bb(this.AgY
);this.Am();},_Init:function(aArg){C.Yv._Init.call(this,aArg);C.Ard._Init.call(this.
AgY={I:this},0);A.acg.Ap._Init.call(this.Df={I:this},0);C.Abp._Init.call(this.Abp={
I:this},0);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={
I:this},0);this.__proto__=C.APz;var B;this.H(Btu);this.AW.H(Btv);this.T9.H(Btw);
this.Gw.Z(false);this.AgY.H(Btx);this.Df.H(Bty);this.Abp.Au(A._GetAutoObject(A.Device.
Device).AbU);this.Fm.Filter=6;this.Fb.Filter=7;this.J2(this.A$,-1);this.J(this.AgY
,-1);this.J(this.Df,-1);this.AgY.CK(this.Abp);this.AgY.Au([B=this.Abp,B.B$,B.Cb]
);this.Df.Ax(A.aaL(A.ach.AjW));this.Fm.BL=[this,this.Or];this.Fb.BL=[this,this.M0
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yv;this.AgY._Done();this.Df.
_Done();this.Abp._Done();this.Fm._Done();this.Fb._Done();C.Yv._Done.call(this);}
,_ReInit:function(){C.Yv._ReInit.call(this);this.AgY._ReInit();this.Df._ReInit();
this.Abp._ReInit();this.Fm._ReInit();this.Fb._ReInit();},_Mark:function(D){var B;
C.Yv._Mark.call(this,D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abp)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abp={AeU:null
,Init:function(aArg){var B;A.zX([this,this.BeC],[B=A._GetAutoObject(A.Device.Device
),B.AEN,B.AI0],0);A.pe([this,this.BeC],this);},Du:function(){return 3;},Au:function(
E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw0(E);},AC4:function(
aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.AeU.AsM(aIndex
);},AC6:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return this.
AeU.AsN(aIndex);},BeC:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbU;A.
abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeU._Init.call(this.AeU={I:this},0);this.__proto__=C.Abp;this.B_.Set(0,
0);this.B_.Set(1,1);this.B_.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeU._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeU._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APK={Es:null,IP:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.Es={I:this},0);A.acg.Text._Init.call(this.IP={I:this},0);this.__proto__=
C.APK;this.H(Oe);this.Background.H(Oe);this.Es.H(AIw);this.Es.R(A.aaR(A.acf.A7k)
);this.Es.A6(0x12);this.Es.L(A.jb.Text);this.IP.A0(0x3F);this.IP.H(AIx);this.IP.
Hn(5);this.IP.A6(0x14);this.IP.R(A.aaR(A.acf.AGZ));this.IP.L(A.jb.Text);this.J(this.
Es,0);this.J(this.IP,0);this.Es.S(A.aaL(A.fl.Af));this.Es.AZ(A.aaL(A.fl.HJ));this.
Es.Cr(A.aaL(A.fl.Bh));this.IP.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Es._Done();this.IP._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Es._ReInit();this.IP._ReInit();this.Es.R(A.aaR(A.acf.
A7k));this.IP.R(A.aaR(A.acf.AGZ));this.Es.S(A.aaL(A.fl.Af));this.Es.AZ(A.aaL(A.fl.
HJ));this.Es.Cr(A.aaL(A.fl.Bh));this.IP.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J5:null,BgI:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bfm(this);else A._GetAutoObject(A.Device.Device).A3(63,true,A.
jV,0,[this,this.Vk]);},Bfm:function(G){A._GetAutoObject(C.A8).FB();},Vk:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63)
)&&(As.PopupState===7))this.Bfm(this);},_Init:function(aArg){C.Mk._Init.call(this
,aArg);A.acg.Text._Init.call(this.J5={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APy);this.Ji.H(Btz);this.Ji.AkG(2);this.Acz.Z(false);this.ARS=12;this.
Number.H(BtA);this.Number.R(A.aaR(A.acf.A$G));this.A5l=false;this.J5.H(BtB);this.
J5.Hn(5);this.J5.KU(true);this.J5.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABQ));this.J5.L(A.jb.Text);this.J2(this.Ji,-1);this.J2(this.IU,-1);this.
J2(this.Acz,-1);this.J(this.J5,0);this.J5.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mk;this.J5._Done();C.Mk._Done.call(this);},_ReInit:function(){C.Mk._ReInit.
call(this);this.J5._ReInit();this.Number.R(A.aaR(A.acf.A$G));this.J5.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABQ));this.J5.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mk._Mark.call(this,D);if((B=this.J5)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APy={_Init:function(aArg){C.Aq1.
_Init.call(this,aArg);this.__proto__=C.APy;this.DS.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Ji={AbL:null,AbK:null,AbJ:null,QI:null,CountryToString:null,AsP:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QI.R(this.CountryToString.
Lx(A._GetAutoObject(A.Device.Converter).A7I(A._GetAutoObject(A.Device.Device).Language
))+BtC);},AkG:function(E){if(this.AsP===E)return;this.AsP=E;var bitmap=null;var A2a=
BtD;var A1$=null;var A2b=false;switch(E){case 0:bitmap=A.aaL(A.ach.Arb);break;case
1:{bitmap=A.aaL(A.ach.AQR);A2a=BtE;A1$=A.aaL(A.fl.Ak);A2b=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQS);A2a=BtF;A1$=A.aaL(A.fl.Bh);A2b=true;}break;default:throw new Error(
BtG+E.toFixed());}this.AbJ.Ax(bitmap);this.AbK.Ax(bitmap);this.AbL.Ax(bitmap);this.
QI.H(A.abJ(this.QI.M,A2a));this.QI.S(A1$);this.QI.Z(A2b);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbL={I:this},0);A.acg.Ap._Init.call(this.AbK={I:this},0);A.acg.Ap._Init.
call(this.AbJ={I:this},0);A.acg.Text._Init.call(this.QI={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Ji;this.H(AIP);this.
AbL.A0(0x3);this.AbL.H(AIP);this.AbL.L(A.jb.H9);this.AbL.Cv(2);this.AbK.A0(0x3);
this.AbK.H(AIP);this.AbK.L(A.jb.Aeb);this.AbK.Cv(1);this.AbJ.A0(0x3);this.AbJ.H(
AIP);this.AbJ.L(A.jb.Text);this.AbJ.Cv(0);this.QI.A0(0x14);this.QI.H(BtH);this.QI.
L(0xFF020202);this.QI.Z(false);this.J(this.AbL,0);this.J(this.AbK,0);this.J(this.
AbJ,0);this.J(this.QI,0);this.AbL.Ax(A.aaL(A.ach.Arb));this.AbK.Ax(A.aaL(A.ach.Arb
));this.AbJ.Ax(A.aaL(A.ach.Arb));this.QI.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbL._Done();this.AbK._Done();this.AbJ._Done();this.QI._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbL._ReInit();this.AbK._ReInit();this.AbJ._ReInit(
);this.QI._ReInit();this.CountryToString._ReInit();this.QI.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsP={Transponder:0,BGx:1,BGy:2};C.APu={Ap:null,Dg:function(E){C.BQ.Dg.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APu;this.Ap.H(AyH);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APl));},_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.
BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ii:0,AaF:4,Al6:function(G){C.Ra.Al6.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bd9()){this.Ii=A._GetAutoObject(A.Device.Helper).UD.Id;var AiA=A._GetAutoObject(
A.Device.Helper).A7G(this.Ii,A._GetAutoObject(A.Device.Helper).W);if(AiA){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rj(this.Ii),0,[
this,this.Vk]);return;}AiA=A._GetAutoObject(A.Device.Helper).Bka(this.Ii,A._GetAutoObject(
A.Device.Helper).W);if(AiA&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ii)){A._GetAutoObject(A.Device.Device).A3(25,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Ii),0,[this,this.Vk]);return;}this.AaF=A._GetAutoObject(A.Device.
Helper).ARs(this.Ii);switch(this.AaF){case 0:A._GetAutoObject(A.Device.Device).A3(
45,true,this.Ii.toFixed().length.toFixed(),0,[this,this.Vk]);break;case 1:case 2:{
var BM=A._GetAutoObject(A.Device.Converter).AxX(this.Ii);A._GetAutoObject(A.Device.
Device).A3(46,true,BM.toFixed(),0,[this,this.Vk]);}break;case 3:this.BgA();break;
default:throw new Error(AIk+this.AaF.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A8).FB();},Vk:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.AaF===2)this.BgA();else A._GetAutoObject(
A.Device.Device).AhM();break;case 5:this.Ew(this);break;default:;}},BgA:function(
){A._GetAutoObject(A.Device.Helper).W.Nk(this.Ii);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PW(this.Ii);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A3(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.IL);this.Number.R(A.aaR(A.acf.A$A
));this.Ji.H(BtI);this.IU.H(BtJ);this.AkG(1);this.N.CE=[this,this.Ew];this.N.C2(
A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$A));},_className:"Application::SetSaveNaisIdScreen"};C.AN9={LQ:function(
G){C.AqK.LQ.call(this,G);A.pe([this,this.BCf],this);},BCf:function(G){this.JK(this.
Ef);},_Init:function(aArg){C.AqK._Init.call(this,aArg);this.__proto__=C.AN9;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UT={Animal:null,WhereAboutsToString:
null,Gl:function(aIndex){return this.WhereAboutsToString.BS(this.C7(aIndex));},Au:
function(E){C.Cm.Au.call(this,E);if(!!this.Animal)this.Animal.Nm(E);},A4Z:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B$,this.Cb],0);},L2:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4Z],[B=this.Animal,B.Aws,B.Nm],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4Z],[B=this.Animal,B.Aws,B.Nm],0);A.pe([this,this.A4Z],this);}
,_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UT;this.B_.Set(0,1);this.
B_.Set(1,2);this.B_.Set(2,3);this.B_.Set(3,4);this.B_.Set(4,5);},_Done:function(
){this.__proto__=C.Cm;this.WhereAboutsToString._Done();C.Cm._Done.call(this);},_ReInit:
function(){C.Cm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UU={Du:function(){return 6;},_Init:function(aArg){C.UT._Init.call(this,aArg);
this.__proto__=C.UU;this.B_.Set(0,0);this.B_.Set(1,1);this.B_.Set(2,2);this.B_.Set(
3,3);this.B_.Set(4,4);this.B_.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcL={Du:function(){return 5;},_Init:function(aArg){C.UT._Init.call(this,aArg
);this.__proto__=C.AcL;this.B_.Set(0,6);this.B_.Set(1,7);this.B_.Set(2,8);this.B_.
Set(3,9);this.B_.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdW={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.BcS],[B=A._GetAutoObject(A.Device.
Device),B.ASA,B.A0s],0);A.pe([this,this.BcS],this);},Du:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awv(E);},BcS:function(G){
this.Q=A._GetAutoObject(A.Device.Device).AgA;A.abo([this,this.B$,this.Cb],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdW;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGN={FM:null
,EA:null,EartagNrAssignmentMode:null,Fm:null,Fb:null,HH:null,AW:null,Kp:null,Nd:
null,A_:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CU(A.jb.CJ);this.Background.L(A.
jb.CT);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CT);this.HH.CU(A.jb.CT);this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CU(
A.jb.CJ);}else{this.AW.FO(A.jb.CT);this.HH.CU(A.jb.CT);}this.Bb(null);}this.Nd.L(
this.V.AQ);},I2:function(G){C.Eg.I2.call(this,G);if(!this.A_)this.FV(this);else this.
He(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.
N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.
N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(
F[0])).C3(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)
this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(
this.A_>1)this.A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SQ(2);else this.AW.SQ(7);}break;default:throw new Error(
Ato+this.A_.toFixed());}this.DJ(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Or:function(G){this.ABe(2);},M0:function(G){this.ABe(7);},ABe:
function(GA){var B;var AzB=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!AzB){
var AAr=(A.Core.P.isPrototypeOf(B=this.QJ(AzB,GA,0x15))?B:null);if(!!AAr){this.Bb(
AAr);return true;}}return false;},Af3:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nd.Ax(
A._GetAutoObject(A.Device.Converter).AmV(2));break;case 1:this.Nd.Ax(A._GetAutoObject(
A.Device.Converter).AmV((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
BaY+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4w],this);},A4w:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kp.Ae1(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Ant,B.AoB]);this.Kp.
Ae1([B=A._GetAutoObject(A.Device.Device),B.AEJ,B.AIX]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awj
,B.AyQ]);this.Kp.Ae1([B=A._GetAutoObject(A.Device.Device),B.ASF,B.A0t]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyR]);this.Kp.Ae1([B=
A._GetAutoObject(A.Device.Device),B.ASG,B.A0u]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Ant,B.AoB]);this.Kp.Ae1([B=A._GetAutoObject(A.Device.Device),
B.AEJ,B.AIX]);}break;default:throw new Error(BtK+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(BaY+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Us:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.Af3],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af3],this.EA,0);if(!!
E)A.pe([this,this.Af3],this);},Akx:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af3],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af3],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af3],this);},Um:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.
BK._Init.call(this.Fb={I:this},0);C.Ard._Init.call(this.HH={I:this},0);C.AvV._Init.
call(this.AW={I:this},0);C.Au9._Init.call(this.Kp={I:this},0);A.acg.Ap._Init.call(
this.Nd={I:this},0);this.__proto__=C.AGN;var B;this.H(UZ);this.V.Ar(false);this.
V.R(Atf);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fb.Filter=7;this.HH.H(BtL);this.
AW.H(BtM);this.Nd.H(BtN);this.J(this.HH,0);this.J(this.AW,0);this.J(this.Nd,0);this.
FM=A._NewObject(C.Aeu,0);this.Fm.BL=[this,this.Or];this.Fb.BL=[this,this.M0];this.
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
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANZ={Ws:
null,Zd:null,Za:null,Ue:null,Init:function(aArg){this.Bb(this.Ws);},AEB:function(
G){var Bey=(C.Anj.isPrototypeOf(G)?G:null);if(!!Bey)A._GetAutoObject(A.Device.Device
).A3(Bey.AdE,true,A.jV,0,null);},DE:function(G){if((this.Cq.CO===7)&&(this.AV===
this.Ue))A._GetAutoObject(A.Device.Device).A3(10,true,A.jV,0,null);else if((this.
Cq.CO===6)&&(this.AV===this.Ue))A._GetAutoObject(C.A8).Cd(91);C.Ej.DE.call(this,
G);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Anj._Init.call(this.Ws={I:
this},0);C.Anj._Init.call(this.Zd={I:this},0);C.Anj._Init.call(this.Za={I:this},
0);C.Anj._Init.call(this.Ue={I:this},0);this.__proto__=C.ANZ;this.Dr(C.AO$);this.
Ws.H(IW);this.Ws.Aj(true);this.Ws.T(A.aaR(A.acf.AhL));this.Ws.Bi(false);this.Ws.
AdE=79;this.Zd.H(Qd);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.A$S));this.Zd.Bi(true
);this.Zd.AdE=77;this.Za.H(Aag);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.A7f));this.
Za.Bi(false);this.Za.AdE=78;this.Ue.H(Alh);this.Ue.Aj(true);this.Ue.T(A.aaR(A.acf.
About));this.Ue.Bi(true);this.Ue.AdE=3;this.J(this.Ws,-1);this.J(this.Zd,-1);this.
J(this.Za,-1);this.J(this.Ue,-1);this.Ws.AR=[this,this.AEB];this.Zd.AR=[this,this.
AEB];this.Za.AR=[this,this.AEB];this.Ue.AR=[this,this.AEB];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Ws._Done();this.Zd._Done();this.Za._Done();this.
Ue._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.
Ws._ReInit();this.Zd._ReInit();this.Za._ReInit();this.Ue._ReInit();this.Ws.T(A.aaR(
A.acf.AhL));this.Zd.T(A.aaR(A.acf.A$S));this.Za.T(A.aaR(A.acf.A7f));this.Ue.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.Ws
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ue)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AO$={_Init:function(aArg){C.Ks.
_Init.call(this,aArg);this.__proto__=C.AO$;this.Text.R(A.aaR(A.acf.Info));},_ReInit:
function(){C.Ks._ReInit.call(this);this.Text.R(A.aaR(A.acf.Info));},_className:"Application::HeaderDeviceInfoMenu"
};C.ANX={FactoryResetScope:null,Uh:null,Wp:null,Uj:null,Init:function(aArg){this.
Bb(this.Uh);A.pe([this,this.MN],this);},BkU:function(G){switch(this.FactoryResetScope.
C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A3(33,true
,A.jV,0,[this,this.A4f]);break;case 0:A._GetAutoObject(A.Device.Device).A3(7,true
,A.jV,0,[this,this.A4f]);break;case 2:A._GetAutoObject(A.Device.Device).A3(115,true
,A.jV,0,[this,this.A4f]);break;default:A.ab5("%s%i",BtO,this.FactoryResetScope.Q
);}},A4f:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bo2();A._GetAutoObject(A.Device.Device).A3(8,true,A.jV,0,null);A._GetAutoObject(
C.A8).Cd(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bo1();A._GetAutoObject(
A.Device.Device).ArU(0);A._GetAutoObject(A.Device.Device).ArV(0);A._GetAutoObject(
A.Device.Device).ArW(0);A._GetAutoObject(A.Device.Device).Ar0(0);A._GetAutoObject(
A.Device.Device).Ar1(0);A._GetAutoObject(A.Device.Device).Ar2(0);A._GetAutoObject(
A.Device.Device).Uq(5);A._GetAutoObject(A.Device.Device).AwH(0);A._GetAutoObject(
A.Device.Device).AwI(0);A._GetAutoObject(A.Device.Device).AwJ(0);A._GetAutoObject(
A.Device.Device).Aw1(1);A._GetAutoObject(A.Device.Device).Aw2(1);A._GetAutoObject(
A.Device.Device).Aw3(1);A._GetAutoObject(A.Device.Device).A3(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).Bo0();A._GetAutoObject(A.Device.
Device).A3(116,true,A.jV,0,null);A._GetAutoObject(C.A8).Cd(37);}break;default:A.
ab5("%s%e",AIl,As.Id);}},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Ni._Init.call(this.Uh={I:this},0
);C.Ni._Init.call(this.Wp={I:this},0);C.BW._Init.call(this.Uj={I:this},0);this.__proto__=
C.ANX;var B;this.Dr(C.AO9);this.Uh.H(IW);this.Uh.Aj(true);this.Uh.T(A.aaR(A.acf.
ACA));this.Uh.Bi(false);this.Uh.Nl(93);this.Wp.H(Qd);this.Wp.Aj(true);this.Wp.T(
A.aaR(A.acf.AdV));this.Wp.Bi(true);this.Wp.Nl(92);this.Uj.H(BaZ);this.Uj.Aj(true
);this.Uj.Bmg(true);this.Uj.T(A.aaR(A.acf.A6I));this.Uj.Bi(false);this.J(this.Uh
,-1);this.J(this.Wp,-1);this.J(this.Uj,-1);this.Uh.AR=[B=this.Uh,B.Np];this.Wp.AR=[
B=this.Wp,B.Np];this.Uj.AR=[this,this.BkU];this.Uj.Au([B=this.FactoryResetScope,
B.B$,B.Cb]);this.Uj.CK(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.FactoryResetScope._Done();this.Uh._Done();this.Wp._Done(
);this.Uj._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Uh._ReInit();this.Wp._ReInit();this.Uj._ReInit(
);this.Uh.T(A.aaR(A.acf.ACA));this.Wp.T(A.aaR(A.acf.AdV));this.Uj.T(A.aaR(A.acf.
A6I));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uj)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.AO9={_Init:function(
aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.AO9;this.Text.R(A.aaR(A.acf.ACB
));},_ReInit:function(){C.Ks._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACB));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq3={QV:null,Wf:null
,_Init:function(aArg){C.T1._Init.call(this,aArg);C.CG._Init.call(this.QV={I:this
},0);C.CG._Init.call(this.Wf={I:this},0);this.__proto__=C.Aq3;this.QV.H(BtP);this.
QV.R(A.aaR(A.acf.A$K));this.QV.A6(0x12);this.QV.L(A.jb.Text);this.Wf.H(BaT);this.
Wf.R(A.aaR(A.acf.An7));this.Wf.L(A.jb.Text);this.J(this.QV,0);this.J(this.Wf,0);
this.QV.S(A.aaL(A.fl.Af));this.QV.AZ(A.aaL(A.fl.Ak));this.QV.Cr(A.aaL(A.fl.Bh));
this.Wf.S(A.aaL(A.fl.Af));this.Wf.AZ(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.T1;this.QV._Done();this.Wf._Done();C.T1._Done.call(this);},_ReInit:function(){
C.T1._ReInit.call(this);this.QV._ReInit();this.Wf._ReInit();this.QV.R(A.aaR(A.acf.
A$K));this.Wf.R(A.aaR(A.acf.An7));this.QV.S(A.aaL(A.fl.Af));this.QV.AZ(A.aaL(A.fl.
Ak));this.QV.Cr(A.aaL(A.fl.Bh));this.Wf.S(A.aaL(A.fl.Af));this.Wf.AZ(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.T1._Mark.call(this,D);if((B=this.QV)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APF={QW:null,_Init:function(aArg){C.T1._Init.call(this,aArg);C.CG._Init.call(
this.QW={I:this},0);this.__proto__=C.APF;this.QW.H(BtQ);this.QW.R(A.aaR(A.acf.Ul
));this.QW.A6(0x12);this.QW.L(A.jb.Text);this.J(this.QW,0);this.QW.S(A.aaL(A.fl.
Af));this.QW.AZ(A.aaL(A.fl.Ak));this.QW.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.
__proto__=C.T1;this.QW._Done();C.T1._Done.call(this);},_ReInit:function(){C.T1._ReInit.
call(this);this.QW._ReInit();this.QW.R(A.aaR(A.acf.Ul));this.QW.S(A.aaL(A.fl.Af)
);this.QW.AZ(A.aaL(A.fl.Ak));this.QW.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;
C.T1._Mark.call(this,D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.Aqw={IM:null,AbC:null,Ea:null
,Bl:function(aSize){C.M7.Bl.call(this,aSize);this.IM.H([this.Gz.M[2],0,this.Gz.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([this.IM.M[2]-1,0,this.IM.M[2]+1
,aSize[1]]);this.AbC.H([this.IM.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.M7.
Ai.call(this,Ae);this.AbC.L(this.Gz.AQ);this.IM.L(this.Gz.AQ);},Ch:function(Ad){
C.M7.Ch.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Ic=this.AX.
AmW(Ad,14);var AtY=this.AX.AOS(Ad,7);this.IM.Ax(A._GetAutoObject(A.Device.Converter
).AmV(AtY));this.AbC.Ax(A._GetAutoObject(A.Device.Converter).A5q(Ic));this.Am();
}},_Init:function(aArg){C.M7._Init.call(this,aArg);A.acg.Ap._Init.call(this.IM={
I:this},0);A.acg.Ap._Init.call(this.AbC={I:this},0);A.acg.AL._Init.call(this.Ea={
I:this},0);this.__proto__=C.Aqw;this.IM.H(BaV);this.IM.L(A.jb.Text);this.AbC.H(BtR
);this.AbC.L(A.jb.Text);this.Ea.H(BtS);this.Ea.L(A.jb.Bc);this.J(this.IM,0);this.
J(this.AbC,0);this.J(this.Ea,0);this.IM.Ax(A.aaL(A.aci.TR));this.AbC.Ax(A.aaL(A.
aci.TR));},_Done:function(){this.__proto__=C.M7;this.IM._Done();this.AbC._Done();
this.Ea._Done();C.M7._Done.call(this);},_ReInit:function(){C.M7._ReInit.call(this
);this.IM._ReInit();this.AbC._ReInit();this.Ea._ReInit();},_Mark:function(D){var
B;C.M7._Mark.call(this,D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANd={ZQ:null,Bl:
function(aSize){C.M7.Bl.call(this,aSize);this.ZQ.H([this.Gz.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M7.Ai.call(this,Ae);this.ZQ.L(this.Gz.AQ);},Ch:function(
Ad){C.M7.Ch.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Jp=this.
AX.KR(Ad,26);if(Jp>0)this.ZQ.R(A.ab2(Jp.toFixed(),5));else this.ZQ.R(Rp);this.Am(
);}},_Init:function(aArg){C.M7._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZQ={I:this},0);this.__proto__=C.ANd;this.ZQ.H(BtT);this.J(this.ZQ,0);this.ZQ.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M7;this.ZQ._Done();C.M7._Done.
call(this);},_ReInit:function(){C.M7._ReInit.call(this);this.ZQ._ReInit();this.ZQ.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M7._Mark.call(this,D);if((B=this.ZQ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.AR5={Ap:null,Ai:function(Ae){C.AeV.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeV._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.AR5;this.Text.H(BtU);this.Ap.H(A0l);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afe));},_Done:function(){this.__proto__=C.AeV;this.Ap._Done(
);C.AeV._Done.call(this);},_ReInit:function(){C.AeV._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeV._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yu={Text:
null,Df:null,AP:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Nt],[B=A._GetAutoObject(A.Device.Device),B.AEF,B.AIU],0);A.zV([this,this.Nt
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nt],this);},Dg:function(
E){C.BQ.Dg.call(this,E);this.Df.L(E);this.Text.L(E);this.Gw.L(E);this.D2.Zt(E);}
,WF:function(E){C.BQ.WF.call(this,E);this.D2.CU(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B9().toFixed());},Nt:function(s){this.DX(s);}
,_Init:function(aArg){C.BQ._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C8._Init.call(this.A$={I:this},0);this.__proto__=C.Yu;this.Text.H(BtV);this.
Text.A6(0x11);this.Df.H(AyC);this.AP.DC(BaP);this.AP.DM(BaQ);this.AP.L(A.jb.Bc);
this.Gw.H(BtW);this.Gw.L(A.jb.CT);this.D2.A0(0x14);this.D2.H(BtX);this.D2.Zt(A.jb.
Bm);this.D2.CU(A.jb.Ri);this.D2.Hn(2);this.A$.DC(BtY);this.A$.DM(BtZ);this.A$.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Df,0);this.J(this.AP,0);this.J(this.Gw,
0);this.J(this.D2,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.AZ(
A.aaL(A.fl.Ak));this.Df.Ax(A.aaL(A.ach.AjW));this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Text.
_Done();this.Df._Done();this.AP._Done();this.Gw._Done();this.D2._Done();this.A$.
_Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.
Text._ReInit();this.Df._ReInit();this.AP._ReInit();this.Gw._ReInit();this.D2._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.AZ(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acp={FM:null
,J0:null,JZ:null,AkN:null,AkO:null,Q8:null,QH:null,AbB:null,V5:null,PM:null,PN:null
,Sz:null,Gx:null,Gy:null,Jy:null,AlO:0,AlT:0,D7:0,DW:0,A_:0,Bl:function(aSize){var
B;this.Dz.H([this.Hx.M[2]-10,this.Hx.M[1],this.H5.M[0]+10,this.Hx.M[3]]);this.Dz.
AFs((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.Dz.Gt,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A_===1)||(this.A_===2)){var A1y=this.A2w(this.A_);if(!!
A1y){this.AbB.Z(true);this.AbB.H(A1y.M);this.AbB.L(this.V.AQ);this.V5.Z(true);this.
V5.H(A1y.M);}else{this.AbB.Z(false);this.V5.Z(false);}this.Hx.Z(false);this.H5.Z(
false);}else{this.AbB.Z(false);this.V5.Z(false);this.Hx.Z(Fw||GE);this.H5.Z(Fw||
GE);}},Qu:function(G){if(!!this.Q){if(this.FI===1)A.pe([this,this.Vc],this);else
if(this.FI===4)A.pe([this,this.A0R],this);else if(this.FI===5)A.pe([this,this.A0P
],this);}C.BW.Qu.call(this,G);},Kf:function(G){switch(this.A_){case 0:C.BW.Kf.call(
this,G);break;case 2:break;default:this.Ady(this);}},Ka:function(G){switch(this.
A_){case 0:C.BW.Ka.call(this,G);break;default:this.Ais(this);}},A13:function(G){
var F;if(this.A_===1){var BO=this.D7;this.D7=this.D7-10;if(this.D7<this.AlT)this.
D7=this.AlT;if(this.D7<A._GetAutoObject(A.Device.Device).AcG)this.D7=A._GetAutoObject(
A.Device.Device).AcG;if(this.DW!==BO){if(!!this.J0)(F=this.J0,F[2].call(F[0],this.
D7));A.abo(this.J0,0);}}if(this.A_===2){var BO=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JZ)(F=this.JZ,F[2].call(F[
0],this.DW));A.abo(this.JZ,0);}}this.DJ(this);this.Am();},A0P:function(s){this.A13(
s);},Al4:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A0P],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A2D:function(G){var F;if(this.A_===1){var
BO=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO
){if(!!this.J0)(F=this.J0,F[2].call(F[0],this.D7));A.abo(this.J0,0);}}if(this.A_===
2){var BO=this.DW;this.DW=this.DW+10;if(this.DW>this.AlO)this.DW=this.AlO;if(this.
DW!==BO){if(!!this.JZ)(F=this.JZ,F[2].call(F[0],this.DW));A.abo(this.JZ,0);}}this.
DJ(this);this.Am();},A0R:function(s){this.A2D(s);},Al5:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0R],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},Vc:function(G){this.Ex(this.A_+1);},Ady:function(G){this.FI=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Vc],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GH:function(G){},AfH:function(s){this.GH(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vc];}break;case 2:{(F=this.
N,F[1].call(F[0])).C2(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},A_C:function(E){if(A.aaZ(this.J0,E))return;if(!!this.J0)A.z$([this,this.
A33],this.J0,0);this.J0=E;if(!!this.J0)A.zX([this,this.A33],this.J0,0);A.pe([this
,this.A33],this);},A33:function(G){var F;this.D7=(F=this.J0,F[1].call(F[0]));this.
Am();},A_B:function(E){if(A.aaZ(this.JZ,E))return;if(!!this.JZ)A.z$([this,this.A32
],this.JZ,0);this.JZ=E;if(!!this.JZ)A.zX([this,this.A32],this.JZ,0);A.pe([this,this.
A32],this);},A32:function(G){var F;this.DW=(F=this.JZ,F[1].call(F[0]));this.Am();
},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;
if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EO;if((this.A_<0)||(
this.A_>2))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=!!this.A_;this.
Am();},Ais:function(G){if(this.A_>1)this.Ex(this.A_-1);},A4e:function(G){},AyZ:function(
s){this.A4e(s);},A3P:function(G){},Bb4:function(s){this.A3P(s);},A2w:function(Atx
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkN={I:this},0);A.acg.AL._Init.call(this.AkO={I:this},0);A.acg.AL._Init.call(
this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={I:this},0);A.acg.AL._Init.call(
this.AbB={I:this},0);A.acg.BU._Init.call(this.V5={I:this},0);A.acg.Text._Init.call(
this.PM={I:this},0);A.acg.Text._Init.call(this.PN={I:this},0);A.acg.Text._Init.call(
this.Sz={I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.Core.BK._Init.call(
this.Gy={I:this},0);A.Core.BK._Init.call(this.Jy={I:this},0);this.__proto__=C.Acp;
this.H(AfE);this.T(A.aaR(A.acf.Arr));this.Background.H(AfE);this.V.H(BD);this.V.
R(A.aaR(A.acf.AG7));this.V.A6(0x12);this.AkN.H(Bt0);this.AkN.L(A.jb.Gj);this.AkO.
H(Bt1);this.AkO.L(A.jb.H9);this.Q8.H(Bt2);this.Q8.L(A.jb.E1);this.QH.H(Bt3);this.
AbB.H(Bt4);this.V5.H(Bt5);this.V5.Nn(3);this.V5.L(A.jb.AV);this.V5.Z(false);this.
PM.H(Bt6);this.PM.Hn(8);this.PM.Jb(true);this.PM.A6(0x11);this.PM.L(0xFF000000);
this.PN.H(Bt7);this.PN.Hn(8);this.PN.Jb(true);this.PN.A6(0x11);this.PN.L(0xFF000000
);this.Sz.H(Bt8);this.Sz.Jb(false);this.Sz.A6(0x12);this.Sz.L(0xFF000000);this.Gx.
Filter=5;this.Gx.Bw=false;this.Gy.Filter=4;this.Gy.Bw=false;this.Jy.Filter=1;this.
J2(this.V,-1);this.J2(this.Dz,-2);this.J(this.AkN,-1);this.J(this.AkO,-1);this.J(
this.Q8,-1);this.J(this.QH,-1);this.J(this.AbB,-1);this.J(this.V5,-1);this.J(this.
PM,-1);this.J(this.PN,0);this.J(this.Sz,0);this.QH.Ax(A.aaL(A.ach.ADG));this.PM.
S(A.aaL(A.fl.Af));this.PN.S(A.aaL(A.fl.Af));this.Sz.S(A.aaL(A.fl.Ak));this.Gx.BL=[
this,this.Al4];this.Gx.D1=[this,this.A0P];this.Gy.BL=[this,this.Al5];this.Gy.D1=[
this,this.A0R];this.Jy.BL=[this,this.Ady];this.FM=A._NewObject(C.Aeu,0);},_Done:
function(){this.__proto__=C.BW;this.AkN._Done();this.AkO._Done();this.Q8._Done();
this.QH._Done();this.AbB._Done();this.V5._Done();this.PM._Done();this.PN._Done();
this.Sz._Done();this.Gx._Done();this.Gy._Done();this.Jy._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkN._ReInit();this.AkO._ReInit(
);this.Q8._ReInit();this.QH._ReInit();this.AbB._ReInit();this.V5._ReInit();this.
PM._ReInit();this.PN._ReInit();this.Sz._ReInit();this.Gx._ReInit();this.Gy._ReInit(
);this.Jy._ReInit();this.T(A.aaR(A.acf.Arr));this.V.R(A.aaR(A.acf.AG7));this.PM.
S(A.aaL(A.fl.Af));this.PN.S(A.aaL(A.fl.Af));this.Sz.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.J0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JZ)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jy)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FK={XX:null,Acr:
null,An$:0,Aoa:0,Du:function(){if(!this.XX)return 0;return this.XX.MH;},C7:function(
aIndex){if(!this.XX||(aIndex>=this.XX.MH))return-1;return this.XX.Get(aIndex);},
Gl:function(aIndex){return this.A60().BS(this.C7(aIndex));},DZ:function(A7){if(!
this.XX)return-1;return this.XX.Avx(A7);},H4:function(){if(!this.XX)return-1;return this.
XX.H4();},AnJ:function(E){if(this.An$===E)return;this.An$=E;A.pe([this,this.AVP]
,this);},A0K:function(Aq){this.AnJ(Aq);},AnK:function(E){if(this.Aoa===E)return;
this.Aoa=E;A.pe([this,this.AVQ],this);},A0L:function(Aq){this.AnK(Aq);},AVQ:function(
G){A.abo([this,this.AS5,this.A0L],0);},AVP:function(G){A.abo([this,this.AS4,this.
A0K],0);},A60:function(){return this.Acr;},AS4:function(){return this.An$;},AS5:
function(){return this.Aoa;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acr={I:this},0);this.__proto__=C.FK;},_Done:function(
){this.__proto__=C.AC;this.Acr._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acr._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acr)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMI={Init:
function(aArg){A.zV([this,this.BfA],A._GetAutoObject(A.Device.Helper).UK,0);A.zV([
this,this.Bfy],A._GetAutoObject(A.Device.Helper).UJ,0);this.BfA(this);this.Bfy(this
);},Au:function(E){C.FK.Au.call(this,E);this.AnK(A._GetAutoObject(A.Device.Helper
).UK.Get(this.DZ(E)));this.AnJ(A._GetAutoObject(A.Device.Helper).UJ.Get(this.DZ(
E)));},AnJ:function(E){if(this.An$===E)return;C.FK.AnJ.call(this,E);A._GetAutoObject(
A.Device.Helper).UJ.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UJ.
Ci();},AnK:function(E){if(this.Aoa===E)return;C.FK.AnK.call(this,E);A._GetAutoObject(
A.Device.Helper).UK.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UK.
Ci();},BfA:function(G){this.Aoa=A._GetAutoObject(A.Device.Helper).UK.Get(this.DZ(
this.Q));A.pe([this,this.AVQ],this);},Bfy:function(G){this.An$=A._GetAutoObject(
A.Device.Helper).UJ.Get(this.DZ(this.Q));A.pe([this,this.AVP],this);},_Init:function(
aArg){C.FK._Init.call(this,aArg);this.__proto__=C.AMI;this.XX=A._GetAutoObject(A.
Device.Helper).Ad1;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMJ={AgF:null,AB4:0,AB3:0,Init:function(aArg){A.zV([this,this.BfN],A._GetAutoObject(
A.Device.Helper).Afy,0);A.zV([this,this.BfL],A._GetAutoObject(A.Device.Helper).Afx
,0);A.zV([this,this.BfJ],A._GetAutoObject(A.Device.Helper).Afw,0);A.zV([this,this.
BfP],A._GetAutoObject(A.Device.Helper).Afz,0);this.BfN(this);this.BfL(this);this.
BfJ(this);this.BfP(this);},Au:function(E){C.FK.Au.call(this,E);this.AnK(A._GetAutoObject(
A.Device.Helper).Afy.Get(this.DZ(E)));this.AnJ(A._GetAutoObject(A.Device.Helper).
Afx.Get(this.DZ(E)));this.AS_(A._GetAutoObject(A.Device.Helper).Afw.Get(this.DZ(
E)));this.ATa(A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(E)));},AnJ:function(
E){if(this.An$===E)return;C.FK.AnJ.call(this,E);A._GetAutoObject(A.Device.Helper
).Afx.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afx.Ci();},AnK:function(
E){if(this.Aoa===E)return;C.FK.AnK.call(this,E);A._GetAutoObject(A.Device.Helper
).Afy.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afy.Ci();},A60:function(
){return this.AgF;},BfN:function(G){this.Aoa=A._GetAutoObject(A.Device.Helper).Afy.
Get(this.DZ(this.Q));A.pe([this,this.AVQ],this);},BfL:function(G){this.An$=A._GetAutoObject(
A.Device.Helper).Afx.Get(this.DZ(this.Q));A.pe([this,this.AVP],this);},ATa:function(
E){if(this.AB4===E)return;this.AB4=E;A._GetAutoObject(A.Device.Helper).Afz.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afz.Ci();A.pe([this,this.Baj],this
);},AS_:function(E){if(this.AB3===E)return;this.AB3=E;A._GetAutoObject(A.Device.
Helper).Afw.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afw.Ci();A.
pe([this,this.Bai],this);},Bai:function(G){A.abo([this,this.A8N,this.AS_],0);},Baj:
function(G){A.abo([this,this.A8P,this.ATa],0);},BfJ:function(G){this.AB3=A._GetAutoObject(
A.Device.Helper).Afw.Get(this.DZ(this.Q));A.pe([this,this.Bai],this);},BfP:function(
G){this.AB4=A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(this.Q));A.pe([this
,this.Baj],this);},A8P:function(){return this.AB4;},A8N:function(){return this.AB3;
},_Init:function(aArg){C.FK._Init.call(this,aArg);A.Device.AgF._Init.call(this.AgF={
I:this},0);this.__proto__=C.AMJ;this.XX=A._GetAutoObject(A.Device.Helper).AgG;this.
Init(aArg);},_Done:function(){this.__proto__=C.FK;this.AgF._Done();C.FK._Done.call(
this);},_ReInit:function(){C.FK._ReInit.call(this);this.AgF._ReInit();},_Mark:function(
D){var B;C.FK._Mark.call(this,D);if((B=this.AgF)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMp={RP:null,Init:function(
aArg){var B;A.zX([this,this.AiP],[B=this.AnimalType,B.B$,B.Cb],0);A.pe([this,this.
AiP],this);this.Bb(this.RP);},Bk:function(E){C.I6.Bk.call(this,E);this.RP.Bx(this.
Jt.AM);},AiP:function(G){A._GetAutoObject(A.Device.Device).AwK(this.AnimalType.Q
);},_Init:function(aArg){C.I6._Init.call(this,aArg);C.TL._Init.call(this.RP={I:this
},0);this.__proto__=C.AMp;var B;this.Jt.Ar(false);this.Jt.Aj(false);this.Jt.Z(false
);this.RP.H(AIQ);this.RP.Aj(true);this.RP.Nj(14);this.RP.Ahx(0);this.RP.OR(0);this.
J(this.RP,-4);this.RP.AR=[this,this.AAz];this.RP.Au([B=this.AnimalType,B.B$,B.Cb
]);this.RP.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I6;this.RP._Done();C.I6._Done.call(this);},_ReInit:function(){C.I6._ReInit.call(
this);this.RP._ReInit();},_Mark:function(D){var B;C.I6._Mark.call(this,D);if((B=
this.RP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TL={Filter:null,Er:0,TableId:0,Operator:1,CP:function(){var F;this.Tw((F=this.
Filter,F[1].call(F[0])).DL(this.Er,this.Operator));},Bl:function(aSize){var B;C.
BW.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hx.H(AhY
);this.H5.H([aSize[0]-40,40,aSize[0],80]);this.Dz.H([this.Hx.M[2]-5,this.Hx.M[1]
,this.H5.M[0]+5,this.Hx.M[3]]);this.Dz.AFs((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.
Dz.Gt,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mf],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mf
],E,0);A.pe([this,this.Mf],this);},Mf:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tw((F=this.Filter,F[1].call(F[0])).DL(this.Er,this.
Operator));else this.Tw(null);},Ahx:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mf],this);},Nj:function(E){if(this.Er===E)return;this.
Er=E;A.pe([this,this.Mf],this);},Tw:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).AmX(this.TableId,this.Er));this.Am();},OR:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mf],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TL;this.H(K1);this.V.A6(0x11);this.V.Cr(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cr(A.aaL(A.fl.Bh));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ASc={Ge:null,MU:null,DY:null,Y:null,Ef:null,Cn:null,CH:null,Db:null,Gn:null,
Ee:null,C$:null,BZ:null,Ay:null,Breed:null,Jj:null,AnimalType:null,Gender:null,Pp:
null,K0:null,Jh:null,YJ:null,Amk:null,KM:0,M8:0,A4n:false,Init:function(aArg){var
B;A.zX([this,this.BA9],[B=A._GetAutoObject(A.Device.Device),B.AEK,B.AIY],0);A.zV([
this,this.At_],this.MU,0);A.zX([this,this.At_],[B=A._GetAutoObject(A.Device.Device
),B.Awr,B.AyV],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEK
,B.AIY],0);A.zV([this,this.GH],this.MU,0);A.zX([this,this.AiP],this.BZ.Q,0);A.pe([
this,this.AiP],this);A.pe([this,this.Bfb],this);A.pe([this,this.At_],this);A.pe([
this,this.GH],this);A.pe([this,this.A3Q],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALv],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArN(A.jb.E1);else
this.Ef.ArN(A.jb.Gj);if(A._GetAutoObject(A.Device.Device).AeP){if(!!(F=this.Cn.Dm
,F[1].call(F[0])))this.Cn.ArN(A.jb.E1);else this.Cn.ArN(A.jb.Gj);}else this.Cn.ArN(
A.jb.Ri);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},LQ:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lj())A._GetAutoObject(A.Device.Device
).A3(41,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aqk(A._GetAutoObject(A.
Device.Helper).W);this.ApD();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFz(0);},E4:function(G){C.AB.E4.call(this,G);this.Jh.Ar(false);
A._GetAutoObject(A.Device.Device).Uw(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.E6();A._GetAutoObject(C.A8).FB();},Fk:function(G){var B;this.Ay.
MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.
Y.Br[1]);},At_:function(G){var F,Ct;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALv(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aem(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter
).Rj((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A3F]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A3E],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeP)this.JK(this.Cn);}var Ber=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeP||!!(Ct=this.Cn.Dm,Ct[1].call(Ct[0])));if(this.MU.AON()>0){if((
this.AV===this.Cn)&&Ber)this.Bb(this.Y.TT(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeP&&(this.AV===this.Cn))&&!!(F=this.Cn.Dm,F[1].call(F[0])))this.
JK(this.Ef);if(Ber)this.Bdd(this);},Adw:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},Ai1:function(){var F;this.Ge.Ci(A._GetAutoObject(A.Device.Device).An);
if(this.MU.NZ(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lj())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),
0,null);else{var L$=A._GetAutoObject(A.Device.Device).An.LV(0,this.Ge.Id);A._GetAutoObject(
A.Device.Device).SR(L$);var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
this.Ge.Id);B1.OnSetBodyWeight(this.KM);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.
Ci(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MU.NZ(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lj())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var L$=A._GetAutoObject(A.Device.
Device).An.LV(0,this.Ge.Id);A._GetAutoObject(A.Device.Device).SR(L$);var B1=A._NewObject(
A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(this.Ge.Id);B1.OnSetBodyWeight(this.
M8);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WH(65280);this.Jh.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFz(F.Av2+1));this.A4n=true;A.pe([this,
this.ALv],this);this.ApD();},GH:function(G){this.Cn.ATK(A._GetAutoObject(A.Device.
Device).AeP);A._GetAutoObject(A.Device.Helper).J3(this.BZ,this.MU.NZ(14));A._GetAutoObject(
A.Device.Helper).J3(this.C$,this.MU.NZ(23));A._GetAutoObject(A.Device.Helper).J3(
this.CH,this.MU.NZ(32));A._GetAutoObject(A.Device.Helper).J3(this.Ee,this.MU.NZ(
18));A._GetAutoObject(A.Device.Helper).J3(this.Db,this.MU.NZ(7));A._GetAutoObject(
A.Device.Helper).J3(this.Gn,this.MU.NZ(34));this.YJ.Z(!this.MU.AON());var O;var Aa=
null;var Apj=this.AV;for(O=0;O<this.MU.AfQ.Na();O++){Aa=this.Bz0(this.MU.AfQ.OI(
O));if(!!Aa)this.ZF(Aa);}this.JK(Apj);A._GetAutoObject(A.Device.Helper).ANA(this.
Y);A.pe([this,this.A3Q],this);this.Am();},AeY:function(E){if(this.KM===E)return;
this.KM=E;A.abo([this,this.Awd,this.AeY],0);},Ahs:function(E){if(this.M8===E)return;
this.M8=E;A.abo([this,this.Anr,this.Ahs],0);},Bdd:function(G){this.Ge.Gr();A._GetAutoObject(
A.Device.Helper).Aqk(this.Ge);this.Ge.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Ge.Nk(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Ge.SK(A._GetAutoObject(
A.Device.Helper).AMq(0,this.Ge));this.Ge.Ae6(true);if(this.MU.NZ(14))this.Ge.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MU.NZ(32))this.Ge.N3(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MU.NZ(7))this.Ge.JX(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MU.NZ(34))this.Ge.Nm(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alt=A._GetAutoObject(A.Device.Helper).A1R(this.Ge,0,A._GetAutoObject(
A.Device.Device).An);if(!Alt)this.Ai1();else A._GetAutoObject(A.Device.Helper).AKq(
this.Ge,Alt,0,0,[this,this.ApJ]);},ApD:function(){A._GetAutoObject(A.Device.Helper
).W.Nk(0);if(A._GetAutoObject(A.Device.Device).AeP)A._GetAutoObject(A.Device.Helper
).W.Q6(0);this.AeY(0);this.Ahs(0);this.JK(this.Ef);this.Am();},ApJ:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.ApD();break;case 43:this.JK(this.Ef);break;case 41:break;
default:A.ab5("%s%e",Atd,As.Id);}},JK:function(Ag){this.Bb(Ag);this.Y.HI(Ag,true
,null,null);this.Y.Vz(null,null);},Bfb:function(G){this.Ee.Ahv(A._GetAutoObject(
A.Device.Helper).W.AhW(1));this.At_(this);},AiP:function(G){this.C$.Ahv(A._GetAutoObject(
A.Device.Helper).Abr(this.AnimalType.Q));},A3Q:function(G){var B;var BCd=this.Ay.
Background.Fq();var width=(BCd?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xw=this.Y.TT(null,0x401);while(!!Xw&&(((B=Xw)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OZ.isPrototypeOf(Xw)?Xw:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xw=this.Y.TT(Xw,0x1);}},Bz0:function(Aaj){var Aa=null;switch(Aaj){case 14:Aa=
this.BZ;break;case 32:Aa=this.CH;break;case 23:Aa=this.C$;break;case 7:Aa=this.Db;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gn;break;default:A.ab5("%s%e",Bt9
,Aaj);}return Aa;},BA9:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeP
)A._GetAutoObject(A.Device.Helper).W.Q6(0);else if(!(F=this.Cn.Dm,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmJ(A._GetAutoObject(A.Device.Device).AdT));this.
At_(this);},ALv:function(G){var B;var AKt=A.jV;var Azg=A.jb.CJ;var Bdu=A.jb.AV;this.
Amk.AxN(this);if(this.A4n){this.A4n=false;AKt=A._GetAutoObject(A.Device.Helper).
MI(A.aaR(A.acf.BpZ),O9,A._GetAutoObject(A.Device.Converter).Rj(this.Ge.NaisId));
A.pe([B=this.Amk,B.StartTimer],this);Azg=A.jb.E1;Bdu=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKt=A.aaR(A.acf.Bpc);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKt=A.aaR(A.
acf.Bpb);this.YJ.T(AKt);this.YJ.Bmr(Azg);this.YJ.Bms(Bdu);},A3F:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).AjC();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).AjC();else if(As.PopupState===7){A._GetAutoObject(C.A8).Cd(76);
A._GetAutoObject(A.Device.Device).AjC();}}}else A._GetAutoObject(A.Device.Device
).AjC();},A3E:function(G){A._GetAutoObject(A.Device.Device).AuY();},DJ:function(
G){var B;if(!this.MU.AON()){this.N.Lg.C4(255);if(this.AV===this.Ef){this.N.C3(A.
aaL(A.ach.Edit));this.N.Ca=[B=this.Ef,B.FV];}else if(this.AV===this.Cn){this.N.C3(
A.aaL(A.ach.Edit));this.N.Ca=[B=this.Cn,B.FV];}else{this.N.C3(null);this.N.Ca=null;
}}else{this.N.C3(A.aaL(A.ach.Am3));if((this.Ef.Aqx===A.jb.Gj)||(this.Cn.Aqx===A.
jb.Gj)){this.N.Lg.C4(100);this.N.Ca=null;}else{this.N.Lg.C4(255);this.N.Ca=[this
,this.Bdd];}}},Awd:function(){return this.KM;},Anr:function(){return this.M8;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUU._Init.call(this.Ef={I:this},0);C.
AUQ._Init.call(this.Cn={I:this},0);C.AxC._Init.call(this.CH={I:this},0);C.BW._Init.
call(this.Db={I:this},0);C.AsC._Init.call(this.Gn={I:this},0);C.AkV._Init.call(this.
Ee={I:this},0);C.AkV._Init.call(this.C$={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UU._Init.call(this.Jj={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M6._Init.call(this.
Pp={I:this},0);A.Device.K0._Init.call(this.K0={I:this},0);A.Device.TM._Init.call(
this.Jh={I:this},0);C.AVp._Init.call(this.YJ={I:this},0);A.Core.Timer._Init.call(
this.Amk={I:this},0);this.__proto__=C.ASc;var B;this.Background.L(A.jb.CT);this.
N.Z(true);this.Ek.Ar(false);this.Dr(C.APt);this.DY.A0(0x3F);this.DY.H(Ff);this.DY.
L(A.jb.CJ);this.Y.H(Ff);this.Y.JW(9);this.Ef.H(AIQ);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACL));this.Ef.ATK(true);this.Ef.AFS(false);this.Cn.H(BaZ);this.Cn.Aj(true
);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.ATK(true);this.Cn.AFN(true);this.CH.H(Atb);
this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Db.H(Atb);this.Db.Aj(true);this.
Db.T(A.aaR(A.acf.Afo));this.Gn.H(Ba0);this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Jj)
);this.Ee.H(Bt_);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M8));this.Ee.Ga(1000);this.
Ee.EV(999000);this.Ee.Ahv(A._GetAutoObject(A.Device.Helper).Abr(this.AnimalType.
Q));this.C$.H(Ba0);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KM));this.C$.Ga(1000);
this.C$.EV(99000);this.C$.Ahv(A._GetAutoObject(A.Device.Helper).Abr(this.AnimalType.
Q));this.BZ.H(Ata);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Aft));this.Ay.H(It);this.
Jh.B2=false;this.Jh.Cx=true;this.Jh.HO(1);this.Jh.Fr(1000);this.Jh.Ut(0);this.YJ.
H(Aah);this.YJ.Aj(true);this.YJ.ArN(A.jb.Text);this.Amk.PV(3000);this.J(this.DY,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CH,0);this.J(
this.Db,0);this.J(this.Gn,0);this.J(this.Ee,0);this.J(this.C$,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YJ,0);this.N.CE=[this,this.Ew];this.N.Cf=[this,
this.Adw];this.N.C2(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.Y.Em=[this
,this.Fk];this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.Anu,B.Nk]);this.Ef.AFn([this,this.At_]);this.Ef.ATx([this,this.A3E]);
this.Ef.ATy([this,this.A3F]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.Ab7([B=A.
_GetAutoObject(A.Device.Helper).W,B.Awg,B.Q6]);this.Cn.OK=[this,this.Bfb];this.Cn.
ATx([this,this.A3E]);this.Cn.ATy([this,this.A3F]);this.CH.Gs([this,this.D_,this.
GS]);this.CH.L1([B=this.CH,B.FV]);this.CH.L4(A.aaL(A.ach.Edit));this.CH.Au([B=this.
Breed,B.B$,B.Cb]);this.CH.CK(this.Breed);this.CH.Any(this.Pp);this.Db.Au([B=this.
Gender,B.B$,B.Cb]);this.Db.CK(this.Gender);this.Gn.Gs([this,this.D_,this.GS]);this.
Gn.L1([B=this.Gn,B.FV]);this.Gn.L4(A.aaL(A.ach.Edit));this.Gn.Au([B=this.Jj,B.B$
,B.Cb]);this.Gn.CK(this.Jj);this.Gn.Any(this.K0);this.Ee.Au([this,this.Anr,this.
Ahs]);this.C$.Au([this,this.Awd,this.AeY]);this.BZ.Au([B=this.AnimalType,B.B$,B.
Cb]);this.BZ.CK(this.AnimalType);this.Ay.BnN([this,this.A3Q]);this.Breed.L2(A._GetAutoObject(
A.Device.Helper).W);this.Jj.L2(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
L2(A._GetAutoObject(A.Device.Helper).W);this.Gender.L2(A._GetAutoObject(A.Device.
Helper).W);this.Ge=A._NewObject(A.Device.Animal,0);this.MU=A._GetAutoObject(C.Ams
);this.Jh.Q=[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0G];this.Amk.ME=[this,
this.ALv];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();
this.Y._Done();this.Ef._Done();this.Cn._Done();this.CH._Done();this.Db._Done();this.
Gn._Done();this.Ee._Done();this.C$._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Jj._Done();this.AnimalType._Done();this.Gender._Done();this.Pp.
_Done();this.K0._Done();this.Jh._Done();this.YJ._Done();this.Amk._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cn._ReInit();this.CH._ReInit();this.Db._ReInit(
);this.Gn._ReInit();this.Ee._ReInit();this.C$._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jj._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pp._ReInit();this.K0._ReInit();this.Jh._ReInit();this.YJ._ReInit(
);this.Amk._ReInit();this.Ef.T(A.aaR(A.acf.ACL));this.Cn.T(A.aaR(A.acf.Aeg));this.
CH.T(A.aaR(A.acf.Breed));this.Db.T(A.aaR(A.acf.Afo));this.Gn.T(A.aaR(A.acf.Jj));
this.Ee.T(A.aaR(A.acf.M8));this.C$.T(A.aaR(A.acf.KM));this.BZ.T(A.aaR(A.acf.Aft)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ge)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
K0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amk)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.AsB={Zk:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zk={
I:this},0);this.__proto__=C.AsB;this.N.CR(A.aaR(A.acf.A6y));this.Number.H(Bt$);this.
Ji.H(Bua);this.IU.H(Bub);this.AkG(2);this.Bda=false;this.Beg=true;this.Beh=false;
this.Zk.H(Buc);this.Zk.KU(true);this.Zk.R(A.aaR(A.acf.A$R));this.Zk.L(A.jb.Text);
this.J(this.Zk,0);this.N.CE=null;this.N.Ca=[this,this.AI4];this.N.C2(null);this.
Zk.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.
Zk._Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zk._ReInit();this.N.CR(A.aaR(A.acf.A6y));this.Zk.R(A.aaR(
A.acf.A$R));this.Zk.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen.
_Mark.call(this,D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADY={Cu:null,FO:function(E){if(this.M_===E)return;C.HL.FO.call(this,E);this.
Cu.CU(E);},Ys:function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;
case 1:B5=this.Cu;break;case 2:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADY;this.H(Bud);this.Cu.H(BaC);this.F0.H(Bue);this.J(this.
Cu,-2);this.Cu.Dk=[this,this.GX];},_Done:function(){this.__proto__=C.HL;this.Cu.
_Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.call(this);this.
Cu._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Cu)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsC={G5:null
,Bl:function(aSize){C.OW.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G5.M[0
]));},Ai:function(Ae){C.OW.Ai.call(this,Ae);if(this.Hl)this.G5.FO(A.jb.CJ);else this.
G5.FO(A.jb.CT);},A2q:function(){this.Bb(this.G5);},_Init:function(aArg){C.OW._Init.
call(this,aArg);C.HL._Init.call(this.G5={I:this},0);this.__proto__=C.AsC;this.G5.
H(Buf);this.J(this.G5,0);this.G5.Au([this,this.ASQ,this.AFG]);},_Done:function(){
this.__proto__=C.OW;this.G5._Done();C.OW._Done.call(this);},_ReInit:function(){C.
OW._ReInit.call(this);this.G5._ReInit();},_Mark:function(D){var B;C.OW._Mark.call(
this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AxC={G5:null,Bl:function(aSize){C.OW.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G5.M[0]));},Ai:function(Ae){C.OW.Ai.call(this,Ae);if(this.Hl)this.G5.FO(
A.jb.CJ);else this.G5.FO(A.jb.CT);},A2q:function(){this.Bb(this.G5);},_Init:function(
aArg){C.OW._Init.call(this,aArg);C.ADY._Init.call(this.G5={I:this},0);this.__proto__=
C.AxC;this.G5.A0(0x18);this.G5.H(Bug);this.J(this.G5,0);this.G5.Au([this,this.ASQ
,this.AFG]);},_Done:function(){this.__proto__=C.OW;this.G5._Done();C.OW._Done.call(
this);},_ReInit:function(){C.OW._ReInit.call(this);this.G5._ReInit();},_Mark:function(
D){var B;C.OW._Mark.call(this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acs={ScreenTypeToString:
null,Du:function(){return 4;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BS(this.C7(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acs;this.B_.Set(0,3);this.B_.Set(1,35);this.B_.Set(2
,34);this.B_.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AV$={ALm:false,A2J:false,WE:function(G){this.Agx();A._GetAutoObject(C.BR).TC(
A.aaR(A.acf.Settings),[this,this.A3V]);A._GetAutoObject(C.BR).Fz();this.AMd();A.
_GetAutoObject(C.BR).Ml(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BR).Fz(
);A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.ARF)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},CC:function(G){C.QD.CC.call(this,G);if(
this.A2J){this.A2J=false;A.pe([this,this.A0M],this);}},Agg:function(G){C.QD.Agg.
call(this,G);this.A_$(true);},Abt:function(){return C.ACd;},Abu:function(){return C.
ADx;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.
Device.Helper).A7d(Math.max(A._GetAutoObject(A.Device.Device).Av4,A._GetAutoObject(
A.Device.Helper).A67(A._GetAutoObject(A.Device.Device).An))+1));},HQ:function(G){
C.QD.HQ.call(this,G);if((((A._GetAutoObject(A.Device.Converter).S3(A._GetAutoObject(
A.Device.Device).PY)===10)&&this.ALm)&&!!this.Bg.AX)&&!this.Bg.AX.B9()){this.N.Cw(
null);this.N.Fc(A.aaR(A.acf.No));this.N.Cf=[this,this.BBl];this.N.C3(null);this.
N.CR(A.aaR(A.acf.Yes));this.N.Ca=[this,this.BBm];}else if(this.Aki()===false){this.
N.Cw(A._GetAutoObject(A.Device.Converter).Ajr(A._GetAutoObject(A.Device.Converter
).AL_(this.LZ.AC_())));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OS(false
);this.N.OT(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(86);},AA8:function(
G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Ay6=aFilter.
DL(26,4);if(!!Ay6){aFilter.Nq(Ay6);A._GetAutoObject(A.Device.Device).An.Bk(aFilter
);if(!!this.Bg)this.Bg.GT(0);}},A65:function(){return C.APA;},Bgl:function(){var
B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.Filter
){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion
)Filter.Nq(FilterCriterion);A._GetAutoObject(A.Device.Device).An.Bk(Filter);}},A3V:
function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A2J=true;A._GetAutoObject(
C.A8).Cd(89);},ALt:function(G){if(A._GetAutoObject(A.Device.Converter).S3(A._GetAutoObject(
A.Device.Device).PY)===10){if(this.ALm){this.Dl(A.aaR(A.acf.BoR));this.Bg.NQ.S(A.
aaL(A.fl.Bh));}else{this.Dl(A.aaR(A.acf.AEv));this.Bg.NQ.S(A.aaL(A.fl.Af));}}else
this.Dl(A.aaR(A.acf.AEv));},A_$:function(E){if(this.ALm===E)return;this.ALm=E;A.
pe([this,this.AoC],this);A.pe([this,this.ALt],this);},BBm:function(G){A._GetAutoObject(
C.A8).Ab_(90);},BBl:function(G){this.A_$(false);},_Init:function(aArg){C.QD._Init.
call(this,aArg);this.__proto__=C.AV$;this.Dr(C.ADo);this.Dl(A.aaR(A.acf.AEv));this.
ATt(A._GetAutoObject(C.Ax8));},_ReInit:function(){C.QD._ReInit.call(this);this.Dl(
A.aaR(A.acf.AEv));},_className:"Application::YoungNoTransponderListScreen"};C.AV_={
_Init:function(aArg){C.I6._Init.call(this,aArg);this.__proto__=C.AV_;this.KY.Ar(
false);this.KY.Aj(false);this.KY.Z(false);this.Bnn(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARj={St:null,Q:null,A8n:0,M_:0,Init:function(aArg){this.ATw(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.St)this.St.Au(E);},ATw:function(
E){if(this.A8n===E)return;this.A8n=E;var X;switch(E){case 2:X=A._NewObject(C.HL,
0);break;case 3:X=A._NewObject(C.ADY,0);break;case 4:X=A._NewObject(C.ARg,0);break;
case 5:X=A._NewObject(C.ARh,0);break;case 6:X=A._NewObject(C.AvV,0);break;default:{
X=null;A.ab5("%s%i",Buh,E);}}this.Bnm(X);},Bnm:function(E){if(this.St===E)return;
if(!!this.St){this.St.Au(null);this.HP(this.St);}this.St=E;if(!!this.St){this.St.
Au(this.Q);this.J(this.St,0);}},FO:function(E){if(this.M_===E)return;this.M_=E;if(
!!this.St)this.St.FO(E);},SQ:function(GA){if(!!this.St)this.St.SQ(GA);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARj;this.H(Ayr);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.St)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARg={CW:null,Cu:null,FO:function(
E){if(this.M_===E)return;C.HL.FO.call(this,E);this.Cu.CU(E);this.CW.CU(E);},Ys:function(
HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.Cu;break;
case 2:B5=this.CW;break;case 3:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DF._Init.call(this.CW={I:this
},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.ARg;this.H(Bui);this.G2.
H(Alk);this.CW.H(BaD);this.Cu.H(BaE);this.F0.H(BaF);this.J(this.CW,-2);this.J(this.
Cu,-2);this.CW.Dk=[this,this.GX];this.Cu.Dk=[this,this.GX];},_Done:function(){this.
__proto__=C.HL;this.CW._Done();this.Cu._Done();C.HL._Done.call(this);},_ReInit:function(
){C.HL._ReInit.call(this);this.CW._ReInit();this.Cu._ReInit();},_Mark:function(D
){var B;C.HL._Mark.call(this,D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACU={S4:null,Ai:function(Ae){C.Abq.Ai.call(this,Ae);this.S4.L(this.V.AQ);},_Init:
function(aArg){C.Abq._Init.call(this,aArg);C.CG._Init.call(this.S4={I:this},0);this.
__proto__=C.ACU;this.V.Z(false);this.AW.H(Buj);this.AW.ATw(4);this.S4.H(Buk);this.
S4.R(A.aaR(A.acf.Ko));this.S4.L(A.jb.Bm);this.J(this.S4,0);this.S4.S(A.aaL(A.fl.
Af));this.S4.AZ(A.aaL(A.fl.Ak));this.S4.Cr(null);},_Done:function(){this.__proto__=
C.Abq;this.S4._Done();C.Abq._Done.call(this);},_ReInit:function(){C.Abq._ReInit.
call(this);this.S4._ReInit();this.S4.R(A.aaR(A.acf.Ko));this.S4.S(A.aaL(A.fl.Af)
);this.S4.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abq._Mark.call(this,D);
if((B=this.S4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.L0={Y1:null,Ua:null,AQ:0,A7E:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y1.L(this.AQ);this.Ua.L(this.AQ);},A_q:function(E){var B;if(this.A7E===
E)return;this.A7E=E;if(E){this.Y1.Z(true);this.Ua.DC([this.Ua.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y1.Z(false);this.Ua.DC([this.Ua.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C8._Init.call(
this.Y1={I:this},0);A.acg.C8._Init.call(this.Ua={I:this},0);this.__proto__=C.L0;
this.H(A0m);this.Y1.A0(0x2D);this.Y1.DC(Ah0);this.Y1.DM(Ba1);this.Y1.L(A.jb.Text
);this.Ua.A0(0x36);this.Ua.DC(Ba1);this.Ua.DM(Bul);this.Ua.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y1,0);this.J(this.Ua,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y1._Done();this.Ua._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y1._ReInit();this.Ua._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUy={Sy:null,PE:null,Db:null,BZ:null,CH:null,GQ:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pp:null,UU:null,K0:null,Init:function(aArg){A.zX([this
,this.AuS],this.BZ.Q,0);A.zX([this,this.AM8],this.CH.Q,0);A.zX([this,this.Brg],this.
Sy.Q,0);A.zX([this,this.Avv],this.Db.Q,0);A.zX([this,this.AV7],this.GQ.Q,0);},AuS:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.BZ.Q,F[1].call(F[
0])));},Brg:function(G){var F;A._GetAutoObject(A.Device.Device).Axj((F=this.Sy.Q
,F[1].call(F[0])));},Avv:function(G){var F;A._GetAutoObject(A.Device.Device).JX((
F=this.Db.Q,F[1].call(F[0])));},AV7:function(G){var F;A._GetAutoObject(A.Device.
Device).Nm((F=this.GQ.Q,F[1].call(F[0])));},AM8:function(G){var F;A._GetAutoObject(
A.Device.Device).N3((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.
call(this,aArg);C.BW._Init.call(this.Sy={I:this},0);C.Ir._Init.call(this.PE={I:this
},0);C.BW._Init.call(this.Db={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.AxC.
_Init.call(this.CH={I:this},0);C.AsC._Init.call(this.GQ={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M6._Init.call(this.Pp={I:this},0);C.UU._Init.call(this.UU={I:
this},0);A.Device.K0._Init.call(this.K0={I:this},0);this.__proto__=C.AUy;var B;this.
Jc((A.aaR(A.acf.Asp)+Ayz)+A.aaR(A.acf.AjH));this.Sy.H(Ah3);this.Sy.Aj(true);this.
Sy.T(A.aaR(A.acf.Bat));this.Sy.Bi(true);this.Sy.Bx(0);this.PE.H(Ayp);this.PE.Aj(
true);this.PE.Z(true);this.PE.T(A.aaR(A.acf.AdT));this.PE.Ga(0);this.PE.EV(99);this.
PE.IR(A.aaR(A.acf.Ko));this.PE.Jd(A.aaR(A.acf.GL));this.Db.H(Aah);this.Db.Aj(true
);this.Db.T(A.aaR(A.acf.Afo));this.Db.Bi(true);this.Db.Bx(0);this.BZ.H(Ali);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Aft));this.BZ.Bi(true);this.BZ.Bx(0);this.CH.H(
AcQ);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.CH.Bi(false);this.GQ.H(
AcQ);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jj));this.GQ.Bi(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.UU.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sy,0);this.
J(this.PE,0);this.J(this.Db,0);this.J(this.BZ,0);this.J(this.CH,0);this.J(this.GQ
,0);this.Sy.Au([B=this.WeightRecordingScope,B.B$,B.Cb]);this.Sy.CK(this.WeightRecordingScope
);this.PE.Au([B=A._GetAutoObject(A.Device.Device),B.A8G,B.Bbm]);this.Db.Au([B=this.
Gender,B.B$,B.Cb]);this.Db.CK(this.Gender);this.BZ.Au([B=this.AnimalType,B.B$,B.
Cb]);this.BZ.CK(this.AnimalType);this.CH.Gs([this,this.D_,this.GS]);this.CH.L1([
B=this.CH,B.FV]);this.CH.L4(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cb
]);this.CH.CK(this.Breed);this.CH.Any(this.Pp);this.GQ.Gs([this,this.D_,this.GS]
);this.GQ.L1([B=this.GQ,B.FV]);this.GQ.L4(A.aaL(A.ach.Edit));this.GQ.Au([B=this.
UU,B.B$,B.Cb]);this.GQ.CK(this.UU);this.GQ.Any(this.K0);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cg;this.Sy._Done();this.PE._Done();this.Db._Done();this.
BZ._Done();this.CH._Done();this.GQ._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pp._Done();this.UU._Done();this.
K0._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
Sy._ReInit();this.PE._ReInit();this.Db._ReInit();this.BZ._ReInit();this.CH._ReInit(
);this.GQ._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pp._ReInit();this.UU._ReInit();
this.K0._ReInit();this.Jc((A.aaR(A.acf.Asp)+Ayz)+A.aaR(A.acf.AjH));this.Sy.T(A.aaR(
A.acf.Bat));this.PE.T(A.aaR(A.acf.AdT));this.PE.IR(A.aaR(A.acf.Ko));this.PE.Jd(A.
aaR(A.acf.GL));this.Db.T(A.aaR(A.acf.Afo));this.BZ.T(A.aaR(A.acf.Aft));this.CH.T(
A.aaR(A.acf.Breed));this.GQ.T(A.aaR(A.acf.Jj));},_Mark:function(D){var B;C.Cg._Mark.
call(this,D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UU)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUx={QQ:null,FD:null,In:null,Da:null,Dn:null,EL:null,AutoRegistrationMode:null
,AdW:null,Init:function(aArg){var B;A.zX([this,this.BhJ],this.QQ.Q,0);A.zX([this
,this.BeY],[B=A._GetAutoObject(A.Device.Device),B.ASA,B.A0s],0);A.zX([this,this.
Adx],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U4],0);A.zX([this,this.Adx],[B=
A._GetAutoObject(A.Device.Device),B.Uo,B.U5],0);A.pe([this,this.BeY],this);A.pe([
this,this.Adx],this);},BhJ:function(G){var F;A._GetAutoObject(A.Device.Device).Awy((
F=this.QQ.Q,F[1].call(F[0])));},BeY:function(G){switch(A._GetAutoObject(A.Device.
Device).AgA){case 0:A._GetAutoObject(A.Device.Helper).J3(this.In,true);break;case
1:A._GetAutoObject(A.Device.Helper).J3(this.In,false);break;default:throw new Error(
Bum+A._GetAutoObject(A.Device.Device).AgA.toFixed());}},Adx:function(G){var F,Ct;
if(((F=this.Da.Q,F[1].call(F[0]))+(Ct=this.Dn.Q,Ct[1].call(Ct[0])))>12)(Ct=this.
Dn.Q,Ct[2].call(Ct[0],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.BW._Init.call(this.QQ={I:this},0);C.BW._Init.call(this.
FD={I:this},0);C.AGN._Init.call(this.In={I:this},0);C.Ir._Init.call(this.Da={I:this
},0);C.Ir._Init.call(this.Dn={I:this},0);C.Av5._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdW._Init.
call(this.AdW={I:this},0);this.__proto__=C.AUx;var B;this.Jc(A.aaR(A.acf.Aqo));this.
QQ.H(AIQ);this.QQ.Aj(true);this.QQ.T(A.aaR(A.acf.Aqo));this.QQ.Bi(false);this.QQ.
Ga(-1);this.QQ.EV(1);this.FD.H(U1);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.
aaR(A.acf.Aql));this.FD.Bi(true);this.In.H(Aah);this.In.Aj(true);this.In.Z(true);
this.In.T(A.aaR(A.acf.AEt));this.In.Bi(true);this.Da.H(Ali);this.Da.Aj(true);this.
Da.Z(true);this.Da.T(A.aaR(A.acf.AqG));this.Da.Bi(false);this.Da.Ga(2);this.Da.EV(
6);this.Da.IR(A.aaR(A.acf.OG));this.Da.Jd(A.aaR(A.acf.Ez));this.Dn.H(AcQ);this.Dn.
Aj(true);this.Dn.T(A.aaR(A.acf.Zm));this.Dn.Bi(true);this.Dn.Ga(0);this.Dn.EV(12
);this.Dn.IR(A.aaR(A.acf.OG));this.Dn.Jd(A.aaR(A.acf.Ez));this.EL.H(Bun);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.Ar3(A.aaR(A.acf.Aqn));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QQ,0);this.
J(this.FD,0);this.J(this.In,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL
,0);this.QQ.Au([B=this.AutoRegistrationMode,B.B$,B.Cb]);this.QQ.CK(this.AutoRegistrationMode
);this.FD.Au([B=this.AdW,B.B$,B.Cb]);this.FD.CK(this.AdW);this.In.Us([B=A._GetAutoObject(
A.Device.Device),B.WC,B.A0v]);this.In.Akx([B=A._GetAutoObject(A.Device.Device),B.
Awi,B.AyP]);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Un,B.U4]);this.Dn.
Au([B=A._GetAutoObject(A.Device.Device),B.Uo,B.U5]);this.EL.DB(A.aaL(A.ach.AjY));
this.EL.OQ([B=A._GetAutoObject(A.Device.Device),B.Un,B.U4]);this.EL.PU([B=A._GetAutoObject(
A.Device.Device),B.Uo,B.U5]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.QQ._Done();this.FD._Done();this.In._Done();this.Da._Done();this.Dn._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdW._Done();C.Cg._Done.
call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.QQ._ReInit();this.FD.
_ReInit();this.In._ReInit();this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdW._ReInit();this.Jc(A.aaR(A.acf.Aqo
));this.QQ.T(A.aaR(A.acf.Aqo));this.FD.T(A.aaR(A.acf.Aql));this.In.T(A.aaR(A.acf.
AEt));this.Da.T(A.aaR(A.acf.AqG));this.Da.IR(A.aaR(A.acf.OG));this.Da.Jd(A.aaR(A.
acf.Ez));this.Dn.T(A.aaR(A.acf.Zm));this.Dn.IR(A.aaR(A.acf.OG));this.Dn.Jd(A.aaR(
A.acf.Ez));this.EL.Ar3(A.aaR(A.acf.Aqn));},_Mark:function(D){var B;C.Cg._Mark.call(
this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVC={OL:null,FD:null,In:null,Da:null,Dn:null,EL:null,Afs:null,Init:function(
aArg){var B;A.zX([this,this.BfC],[B=A._GetAutoObject(A.Device.Device),B.AS2,B.A0I
],0);A.zX([this,this.Adx],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U4],0);A.zX([
this,this.Adx],[B=A._GetAutoObject(A.Device.Device),B.Uo,B.U5],0);A.pe([this,this.
BfC],this);A.pe([this,this.Adx],this);},BfC:function(G){var AK_=false;var AaO=false;
switch(A._GetAutoObject(A.Device.Device).Ak5){case 0:{AK_=false;AaO=false;}break;
case 1:{AK_=true;AaO=false;}break;case 2:{AK_=false;AaO=true;}break;default:throw new
Error(Buo+A._GetAutoObject(A.Device.Device).Ak5.toFixed());}A._GetAutoObject(A.Device.
Helper).J3(this.In,AK_);A._GetAutoObject(A.Device.Helper).J3(this.Da,AaO);A._GetAutoObject(
A.Device.Helper).J3(this.Dn,AaO);A._GetAutoObject(A.Device.Helper).J3(this.EL,AaO
);},Adx:function(G){var F,Ct;if(((F=this.Da.Q,F[1].call(F[0]))+(Ct=this.Dn.Q,Ct[
1].call(Ct[0])))>12)(Ct=this.Dn.Q,Ct[2].call(Ct[0],12-(F=this.Da.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Ir._Init.call(this.OL={
I:this},0);C.BW._Init.call(this.FD={I:this},0);C.AGN._Init.call(this.In={I:this}
,0);C.Ir._Init.call(this.Da={I:this},0);C.Ir._Init.call(this.Dn={I:this},0);C.Av5.
_Init.call(this.EL={I:this},0);C.Afs._Init.call(this.Afs={I:this},0);this.__proto__=
C.AVC;var B;this.Jc(A.aaR(A.acf.LinkTransponder));this.OL.H(AIQ);this.OL.Aj(true
);this.OL.Z(true);this.OL.T(A.aaR(A.acf.A7Y));this.OL.Bi(false);this.OL.Ga(1);this.
OL.EV(365);this.OL.IR(A.aaR(A.acf.Ko));this.OL.Jd(A.aaR(A.acf.GL));this.FD.H(U1);
this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aql));this.FD.Bi(true);this.
In.H(Aah);this.In.Aj(true);this.In.Z(true);this.In.T(A.aaR(A.acf.AEt));this.In.Bi(
false);this.Da.H(Ali);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.AqG
));this.Da.Bi(false);this.Da.Ga(2);this.Da.EV(6);this.Da.IR(A.aaR(A.acf.OG));this.
Da.Jd(A.aaR(A.acf.Ez));this.Dn.H(AcQ);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.Zm)
);this.Dn.Bi(true);this.Dn.Ga(0);this.Dn.EV(12);this.Dn.IR(A.aaR(A.acf.OG));this.
Dn.Jd(A.aaR(A.acf.Ez));this.EL.H(Aoq);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar3(A.aaR(A.acf.Aqn));this.J(this.OL,0);this.J(this.FD,0);this.
J(this.In,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL,0);this.OL.Au([B=
A._GetAutoObject(A.Device.Device),B.A9a,B.BbD]);this.FD.Au([B=this.Afs,B.B$,B.Cb
]);this.FD.CK(this.Afs);this.In.Us([B=A._GetAutoObject(A.Device.Device),B.WC,B.A0v
]);this.In.Akx([B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyP]);this.Da.Au([B=
A._GetAutoObject(A.Device.Device),B.Un,B.U4]);this.Dn.Au([B=A._GetAutoObject(A.Device.
Device),B.Uo,B.U5]);this.EL.DB(A.aaL(A.ach.AjY));this.EL.OQ([B=A._GetAutoObject(
A.Device.Device),B.Un,B.U4]);this.EL.PU([B=A._GetAutoObject(A.Device.Device),B.Uo
,B.U5]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.OL._Done();this.
FD._Done();this.In._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.
Afs._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
OL._ReInit();this.FD._ReInit();this.In._ReInit();this.Da._ReInit();this.Dn._ReInit(
);this.EL._ReInit();this.Afs._ReInit();this.Jc(A.aaR(A.acf.LinkTransponder));this.
OL.T(A.aaR(A.acf.A7Y));this.OL.IR(A.aaR(A.acf.Ko));this.OL.Jd(A.aaR(A.acf.GL));this.
FD.T(A.aaR(A.acf.Aql));this.In.T(A.aaR(A.acf.AEt));this.Da.T(A.aaR(A.acf.AqG));this.
Da.IR(A.aaR(A.acf.OG));this.Da.Jd(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(A.acf.Zm));this.
Dn.IR(A.aaR(A.acf.OG));this.Dn.Jd(A.aaR(A.acf.Ez));this.EL.Ar3(A.aaR(A.acf.Aqn));
},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afs={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bg1],[B=A._GetAutoObject(A.Device.Device),B.AS2,B.A0I],0);A.pe([
this,this.Bg1],this);},Du:function(){return 3;},Gl:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axf(E);},Bg1:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak5;A.
abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afs;this.B_.Set(0,0);this.B_.Set(1,1);this.B_.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Jf={B6:null,IY:null,Cq:null,AmA:null,Sh:null,Anl:null,AjE:null,Text:null,CY:
null,D6:0,LC:false,Ai:function(Ae){var B;A.acn.Jf.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IY.Ar(true);else{this.IY.Ar(false);this.CY.Z(false);}},A4T:function(G
){var B;var Bd=this.Text.M;var NA=0;var NB=0;if(this.CY.Et[0]<Bd[0])NA=Bd[0]-this.
CY.Et[0];if(this.CY.Et[0]>Bd[2])NA=Bd[2]-this.CY.Et[0];if(this.CY.Et[1]<Bd[1])NB=
Bd[1]-this.CY.Et[1];if(this.CY.ED[1]>Bd[3])NB=Bd[3]-this.CY.ED[1];if(!!NA||!!NB)
this.Text.Gb(A.abf(this.Text.Br,[NA,NB]));NA=this.Text.Br[0];NB=this.Text.Br[1];
var C6=[(B=this.Text.Dd())[2]-B[0],B[3]-B[1]];if(C6[0]<=((B=this.Text.M)[2]-B[0]
))NA=0;if(C6[1]<=((B=this.Text.M)[3]-B[1]))NB=0;this.Text.Gb([NA,NB]);},Amn:function(
G){if(!this.B6)return;var A4j=this.Text.AG0(this.D6);var pos=this.Text.Afh(A4j);
this.CY.DM(A.abe(pos,[0,this.B6.Ascent]));this.CY.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IY.Bw){this.IY.Ar(false);this.IY.Ar(true);}if(this.LC){A.pe([this,this.
A4T],this);this.LC=false;}},AAD:function(G){if(!this.B6)return;var EH=this.Text.
AG0(this.D6);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnS(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ADa(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnS(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CO===4){var pos=this.Text.Afh(EH);var AaN=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.AT$(A.abe(pos,[0,AaN]));}if(this.Cq.CO===5
){var pos=this.Text.Afh(EH);var AaN=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.AT$(A.abf(pos,[0,AaN]));}var Vi=this.Text.AnS(EH);var Iy=this.Text.
String.charCodeAt(Vi)||0;if(((Iy===0x5E)||(Iy===0x7E))||(Iy===0x25))Vi=Vi-1;if(Vi
!==this.D6){this.D6=Vi;A.pe([this,this.Amn],this);this.LC=true;}},Be7:function(G
){if(!this.D6)return;var Iy=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Iy===0x5E)||(Iy===0x7E))||(Iy===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.LC=true;},AAE:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iy=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Iy===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.LC=true;}
,Bfj:function(G){this.Text.R(A.abU(this.Text.String,Bup,this.D6));this.D6=this.D6+
1;this.LC=true;},Be9:function(G){var Iy=this.AjE.DQ;var Aut=String.fromCharCode(
Iy);A.ab5("%c",Iy);if((((Iy===0x5E)||(Iy===0x7E))||(Iy===0xAD))||(Iy===0x25))Aut=
Buq+String.fromCharCode(Iy);this.Text.R(A.abU(this.Text.String,Aut,this.D6));this.
D6=this.D6+Aut.length;this.LC=true;},_Init:function(aArg){A.acn.Jf._Init.call(this
,aArg);A.acl.TM._Init.call(this.IY={I:this},0);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.BK._Init.call(this.AmA={I:this},0);A.Core.BK._Init.call(this.Sh={I:this
},0);A.Core.BK._Init.call(this.Anl={I:this},0);A.Core.BK._Init.call(this.AjE={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C8._Init.call(this.CY={
I:this},0);this.__proto__=C.Jf;var B;this.H(Bur);this.IY.B2=false;this.IY.Cx=true;
this.IY.Fr(500);this.IY.Ut(500);this.Cq.Filter=147;this.Cq.Bw=false;this.AmA.Filter=
151;this.Sh.Filter=44;this.Anl.Filter=149;this.AjE.Filter=145;this.Text.A0(0x3F);
this.Text.H(Bus);this.Text.KU(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CY.DC(But);this.CY.DM(Buu);this.CY.A_6(2);this.CY.A_5(2);this.
CY.L(0xFF000000);this.CY.Z(false);this.J(this.Text,0);this.J(this.CY,0);this.IY.
Q=[B=this.CY,B.Fq,B.Z];this.Cq.BL=[this,this.AAD];this.Cq.D1=[this,this.AAD];this.
AmA.BL=[this,this.Be7];this.AmA.D1=[this,this.Be7];this.Sh.BL=[this,this.AAE];this.
Sh.D1=[this,this.AAE];this.Anl.BL=[this,this.Bfj];this.Anl.D1=[this,this.Bfj];this.
AjE.BL=[this,this.Be9];this.AjE.D1=[this,this.Be9];this.Text.Q7([this,this.Amn]);
this.Text.S(A.aaL(A.aci.ACY));this.B6=A.aaL(A.aci.ACY);},_Done:function(){this.__proto__=
A.acn.Jf;this.IY._Done();this.Cq._Done();this.AmA._Done();this.Sh._Done();this.Anl.
_Done();this.AjE._Done();this.Text._Done();this.CY._Done();A.acn.Jf._Done.call(this
);},_ReInit:function(){A.acn.Jf._ReInit.call(this);this.IY._ReInit();this.Cq._ReInit(
);this.AmA._ReInit();this.Sh._ReInit();this.Anl._ReInit();this.AjE._ReInit();this.
Text._ReInit();this.CY._ReInit();},_Mark:function(D){var B;A.acn.Jf._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVq={Jf:null,DE:function(G
){switch(this.Cq.CO){case 6:A._GetAutoObject(A.Device.Device).AuY();break;case 7:
A._GetAutoObject(A.Device.Device).Aqp();break;case 4:A._GetAutoObject(A.Device.Device
).AjC();break;case 5:A._GetAutoObject(A.Device.Device).Aqq();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A8).FB();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Jf._Init.call(this.Jf={I:this},0);this.__proto__=C.AVq;this.H(Ce);this.
N.Z(true);this.Dr(C.Aq2);this.Jf.H(Ff);this.J(this.Jf,0);this.Bb(this.Jf);this.N.
CE=[this,this.Ew];this.N.C2(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Jf._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Jf._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Jf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUg={WE:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){A._GetAutoObject(
C.BR).TC(A.aaR(A.acf.ACi),[this,this.Bbc]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).TC(A.aaR(A.acf.AHh),[this,this.A8x]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).TC(A.aaR(A.acf.A5Z),[this,this.Bbb]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).TC(A.aaR(A.acf.UnlinkTransponder),[this,this.Bor]);}else{A._GetAutoObject(
C.BR).AaV(A.aaR(A.acf.ACi));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).AaV(
A.aaR(A.acf.AHh));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).AaV(A.aaR(A.
acf.A5Z));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).AaV(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.A6m)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).Fz();this.AuK(A.aaR(A.acf.A6e),[this,this.BgY
],this.OF);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ml(A.aaR(
A.acf.A6z));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.Anh
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Abt:function(){return C.
ACe;},Abu:function(){return C.ADv;},Q_:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avy());},HQ:function(G){C.AkP.HQ.call(
this,G);this.N.Cw(null);this.N.Fc(A.aaR(A.acf.A5R));if(this.AJM()){this.N.Cf=[this
,this.AIR];this.N.JB.C4(255);}else{this.N.Cf=null;this.N.JB.C4(100);}this.N.C3(A.
aaL(A.ach.Options));this.N.CR(A.jV);this.N.OS(false);this.N.OT(false);this.N.I_.
C4(255);},ASs:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiY=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiY.toFixed(),0,null);},ASt:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6s(this);},ASy:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).PY){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.Bfl]);return;}if(A._GetAutoObject(A.Device.Device
).Ari()===false){A.zX([this,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.
Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Agi]);return;
}A.zX([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,B.SF,B.E5],0);var A4A=
!!this.OF&&!(F=this.OF,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asr(2,
A4A);},AJM:function(){if(!this.Bg)return false;var AtO=this.Bg.AX;if(!AtO)return false;
if(!AtO.B9())return false;return true;},Al2:function(G){var B;var F;switch(A._GetAutoObject(
A.Device.Device).Gf.EN){case 0:A.z$([this,this.Al2],[B=A._GetAutoObject(A.Device.
Device).Gf,B.SF,B.E5],0);break;case 3:{if(!!this.OF&&(F=this.OF,F[1].call(F[0]))
)A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(
A.Device.Converter).S3(A._GetAutoObject(A.Device.Device).PY)===10){this.Dl(A.aaR(
A.acf.BjP));this.Bg.NQ.S(A.aaL(A.fl.Bh));}else this.Dl(A.aaR(A.acf.A$k));A._GetAutoObject(
A.Device.Device).AqE();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gf.E6();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).Gf.EN);},_Init:function(aArg){C.AkP._Init.call(
this,aArg);this.__proto__=C.AUg;var B;this.Dr(C.APw);this.A_d([B=A._GetAutoObject(
A.Device.Device),B.A9g,B.BbI]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADv={PC:null,I9:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PC={I:this},0);A.acg.Ap._Init.call(this.I9={I:this},0);this.__proto__=
C.ADv;this.Es.Z(false);this.DS.Z(false);this.PC.H(Buv);this.PC.L(A.jb.Text);this.
I9.H(Buw);this.I9.L(A.jb.Text);this.J(this.PC,0);this.J(this.I9,0);this.PC.Ax(A.
aaL(A.ach.AvM));this.I9.Ax(A.aaL(A.ach.AvH));},_Done:function(){this.__proto__=C.
De;this.PC._Done();this.I9._Done();C.De._Done.call(this);},_ReInit:function(){C.
De._ReInit.call(this);this.PC._ReInit();this.I9._ReInit();},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AM3={Init:function(aArg){var B;A.zX([this,this.AAH],[B=A._GetAutoObject(A.Device.
Device),B.AEG,B.AIV],0);A.pe([this,this.AAH],this);},WE:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){if(this.AJM())A._GetAutoObject(C.BR).TC(A.aaR(
A.acf.AOq),[this,this.AIR]);else A._GetAutoObject(C.BR).AaV(A.aaR(A.acf.AOq));A.
_GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).TC(A.aaR(A.acf.ACg),[this,this.
Bbc]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).TC(A.aaR(A.acf.AHh),[this
,this.A8x]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).TC(A.aaR(A.acf.A5Y
),[this,this.Bbb]);}else{A._GetAutoObject(C.BR).AaV(A.aaR(A.acf.AOq));A._GetAutoObject(
C.BR).Fz();A._GetAutoObject(C.BR).AaV(A.aaR(A.acf.ACg));A._GetAutoObject(C.BR).Fz(
);A._GetAutoObject(C.BR).AaV(A.aaR(A.acf.AHh));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).AaV(A.aaR(A.acf.A5Y));}A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).
Ml(A.aaR(A.acf.A6m)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fz();this.AuK(A.aaR(
A.acf.A6e),[this,this.BgY],this.OF);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Ml(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fz();A.
_GetAutoObject(C.BR).Ml(A.aaR(A.acf.A6z));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Ml(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},Abt:function(){return C.ACa;},Abu:function(){return C.ADt;},Q_:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOM(
));},HQ:function(G){C.AkP.HQ.call(this,G);this.N.Cw(A.aaL(A.ach.AeD));this.N.Cf=[
this,this.Adw];this.N.Fc(A.jV);this.N.C3(null);this.N.CR((A.aaR(A.acf.A5R)+String.
fromCharCode(0x0A))+A.aaR(A.acf.BhR));this.N.OS(false);this.N.OT(false);this.N.I_.
C4(255);},ASs:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiY=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiY.toFixed(),0,null);},ASt:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6r(this);},ASy:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).PY){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.Bfl]);return;}if(A._GetAutoObject(A.Device.Device
).Ari()===false){A.zX([this,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.
Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Agi]);return;
}A.zX([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,B.SF,B.E5],0);var A4A=
!!this.OF&&!(F=this.OF,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asr(0,
A4A);},AJM:function(){var AtO=this.Bg.AX;if(!AtO)return false;var O;for(O=0;O<AtO.
B9();O++)if(A._GetAutoObject(A.Device.Helper).Aj7(AtO.AO0(O,34))===false)return true;
return false;},Adw:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAH:function(G){if(A._GetAutoObject(A.Device.Device).Aqs===1)A.pe([this,this.
A6v],this);},Al2:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device
).Gf.EN){case 0:A.z$([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,B.SF
,B.E5],0);break;case 3:{if(!!this.OF&&(F=this.OF,F[1].call(F[0])))A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dl(A.aaR(A.acf.BhS));A._GetAutoObject(
A.Device.Device).AqE();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gf.E6();}break;default:;}},_Init:
function(aArg){C.AkP._Init.call(this,aArg);this.__proto__=C.AM3;var B;this.Dr(C.
AO5);this.A_d([B=A._GetAutoObject(A.Device.Device),B.A8O,B.Bbr]);this.Init(aArg);
},_className:"Application::BirthRegistrationsListScreen"};C.AO5={DX:function(G){
C.Aev.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad0(11));}
,_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=C.AO5;this.Text.
R(A.aaR(A.acf.AB5));},_ReInit:function(){C.Aev._ReInit.call(this);this.Text.R(A.
aaR(A.acf.AB5));},_className:"Application::HeaderBirthRegistrationsList"};C.APw={
DX:function(G){C.Aev.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(12));},_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=C.APw;
this.Text.R(A.aaR(A.acf.AGn));},_ReInit:function(){C.Aev._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AGn));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ACe={Jp:0,AP:null,SV:null,Pc:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SV.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SV.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rj(this.
Jp));this.SV.R(A._GetAutoObject(A.acj.KO).AC0(this.Pc));},Ch:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){this.Jp=this.AX.KR(Ad,26);this.Pc=this.AX.Hv(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.SV={I:this},0);this.__proto__=C.ACe;
this.AP.H(A0o);this.AP.L(A.jb.Bc);this.SV.H(A0p);this.J(this.AP,0);this.J(this.SV
,0);this.V.S(A.aaL(A.fl.Ak));this.V.AZ(A.aaL(A.fl.Bh));this.SV.S(A.aaL(A.fl.Ak));
this.SV.AZ(A.aaL(A.fl.Bh));this.SV.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SV._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SV._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.AZ(A.aaL(A.fl.Bh));this.SV.S(A.aaL(A.fl.Ak));this.SV.AZ(A.
aaL(A.fl.Bh));this.SV.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SV)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUQ={
AeW:null,Ab0:null,TU:null,KP:null,TS:null,NN:null,Tn:A.jV,Ai:function(Ae){var F;
C.SS.Ai.call(this,Ae);this.TU.L(this.V.AQ);var Apw=false;if((!this.Dm||!(F=this.
Dm,F[1].call(F[0])))&&!this.A_)Apw=true;this.TU.Z(Apw);this.Pv.Z(!Apw);this.VV.Z(
!Apw);this.Q2.Z(!Apw);this.Ym.Z(!Apw);this.P9.Z(!Apw);},Ady:function(G){var B;var
F;if(!this.Tn.length){C.SS.Ady.call(this,G);return;}var BO=this.FY;var Gv=A._GetAutoObject(
A.Device.AnM).BfY(this.Tn);this.Tn=A.jV;if(!Gv){A._GetAutoObject(A.Device.Device
).A3(101,true,A.jV,0,this.Ab0);A.pe(this.AeW,this);return;}if(this.Aso&&(Gv>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A3(102,true,A.jV,0,this.
Ab0);A.pe(this.AeW,this);return;}this.Ur(((B=(Gv|0))<0)?B+0x100000000:B);if(this.
FY!==BO){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FY));A.abo(this.Dm,0);}if(!
!this.OK)A.pe(this.OK,this);},A3t:function(G){if(this.Tn.length<10)this.Tn=this.
Tn+String.fromCharCode(this.KP.DQ);},ASv:function(G){if((this.NN.DQ===0x0D)||(this.
NN.DQ===0x0A))this.Ady(this);else this.NN.NM=true;},ATx:function(E){if(A.aa0(this.
AeW,E))return;this.AeW=E;},ATy:function(E){if(A.aa0(this.Ab0,E))return;this.Ab0=
E;},_Init:function(aArg){C.SS._Init.call(this,aArg);A.acg.Text._Init.call(this.TU={
I:this},0);A.Core.BK._Init.call(this.KP={I:this},0);A.Core.BK._Init.call(this.TS={
I:this},0);A.Core.BK._Init.call(this.NN={I:this},0);this.__proto__=C.AUQ;this.TU.
H(Bux);this.TU.Jb(true);this.TU.A6(0x12);this.TU.R(A.aaR(A.acf.A5$));this.KP.Filter=
143;this.TS.Filter=149;this.NN.Filter=145;this.J(this.TU,0);this.TU.S(A.aaL(A.fl.
EK));this.KP.BL=[this,this.A3t];this.TS.BL=[this,this.Bb3];this.NN.BL=[this,this.
ASv];},_Done:function(){this.__proto__=C.SS;this.TU._Done();this.KP._Done();this.
TS._Done();this.NN._Done();C.SS._Done.call(this);},_ReInit:function(){C.SS._ReInit.
call(this);this.TU._ReInit();this.KP._ReInit();this.TS._ReInit();this.NN._ReInit(
);this.TU.R(A.aaR(A.acf.A5$));this.TU.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SS._Mark.call(this,D);if((B=this.AeW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Ab0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUU={AeW:null,Ab0:null,KP:null
,TS:null,NN:null,Tn:A.jV,I2:function(G){var F;if(!this.Tn.length){C.Rb.I2.call(this
,G);return;}if(this.Asn)return;if(!this.Tn.length)this.TS.NM=true;var BO=this.AM;
var Gv=A._GetAutoObject(A.Device.AnM).BBN(this.Tn);this.Tn=A.jV;if(!Gv){if((this.
Tn.length<13)&&!A._GetAutoObject(A.Device.Device).PY)A._GetAutoObject(A.Device.Device
).A3(105,true,A.jV,0,this.Ab0);else A._GetAutoObject(A.Device.Device).A3(103,true
,A.jV,0,this.Ab0);A.pe(this.AeW,this);return;}this.Bx(Gv);if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OK)A.pe(this.
OK,this);},A3t:function(G){if(this.Asn)return;if(this.Tn.length<17)this.Tn=this.
Tn+String.fromCharCode(this.KP.DQ);},ASv:function(G){if((this.NN.DQ===0x0D)||(this.
NN.DQ===0x0A))this.I2(this);else this.NN.NM=true;},ATx:function(E){if(A.aa0(this.
AeW,E))return;this.AeW=E;},ATy:function(E){if(A.aa0(this.Ab0,E))return;this.Ab0=
E;},_Init:function(aArg){C.Rb._Init.call(this,aArg);A.Core.BK._Init.call(this.KP={
I:this},0);A.Core.BK._Init.call(this.TS={I:this},0);A.Core.BK._Init.call(this.NN={
I:this},0);this.__proto__=C.AUU;this.Ar4(false);this.KP.Filter=143;this.TS.Filter=
149;this.NN.Filter=145;this.KP.BL=[this,this.A3t];this.TS.BL=[this,this.Atr];this.
NN.BL=[this,this.ASv];},_Done:function(){this.__proto__=C.Rb;this.KP._Done();this.
TS._Done();this.NN._Done();C.Rb._Done.call(this);},_ReInit:function(){C.Rb._ReInit.
call(this);this.KP._ReInit();this.TS._ReInit();this.NN._ReInit();},_Mark:function(
D){var B;C.Rb._Mark.call(this,D);if((B=this.AeW)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ab0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APt={Aj3:null,Aj1:null,Gw:null,Q$:null,SP:null,C8:null,Init:function(aArg){var
B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Device),B.A8_,B.AFz],0);A.pe([
this,this.DX],this);},Dg:function(E){C.BQ.Dg.call(this,E);this.Aj3.L(E);this.Aj1.
L(E);this.Q$.Zt(E);this.Gw.L(E);this.SP.Zt(E);},WF:function(E){this.Q$.CU(E);this.
SP.CU(E);},DX:function(G){this.Q$.T(A._GetAutoObject(A.Device.Device).Av2.toFixed(
));A.pe([this,this.BC5],this);},BC5:function(G){var Xt=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).Avy());this.SP.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bk(Xt);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},0);A.acg.Ap._Init.call(this.Aj1={
I:this},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.Q$={I:this
},0);C.D2._Init.call(this.SP={I:this},0);A.acg.C8._Init.call(this.C8={I:this},0);
this.__proto__=C.APt;this.Aj3.H(O7);this.Aj1.H(Buy);this.Gw.H(Buz);this.Gw.L(A.jb.
CT);this.Q$.A0(0x14);this.Q$.H(BuA);this.Q$.Zt(A.jb.Bm);this.Q$.CU(A.jb.Ri);this.
Q$.Hn(2);this.Q$.Bml(0x11);this.SP.A0(0x14);this.SP.H(BuB);this.SP.Zt(A.jb.Bm);this.
SP.CU(A.jb.Ri);this.SP.Hn(2);this.C8.DC(AhX);this.C8.DM(BuC);this.C8.L(A.jb.Bc);
this.J(this.Aj3,0);this.J(this.Aj1,0);this.J(this.Gw,0);this.J(this.Q$,0);this.J(
this.SP,0);this.J(this.C8,0);this.Aj3.Ax(A.aaL(A.ach.AvG));this.Aj1.Ax(A.aaL(A.ach.
AP3));this.Gw.Ax(A.aaL(A.ach.Gw));this.Q$.S(A.aaL(A.fl.Bh));this.SP.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Aj3._Done();this.
Aj1._Done();this.Gw._Done();this.Q$._Done();this.SP._Done();this.C8._Done();C.BQ.
_Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Aj3._ReInit();
this.Aj1._ReInit();this.Gw._ReInit();this.Q$._ReInit();this.SP._ReInit();this.C8.
_ReInit();this.Q$.S(A.aaL(A.fl.Bh));this.SP.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BQ._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARW={Abh:null,Aep:null,VS:null,Init:function(aArg){this.Bb(this.Abh);},Lp:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaH];this.BP.Cf=
null;this.BP.Ca=[this,this.A3w];this.BP.CR(A.jV);this.BP.Cw(null);this.BP.C2(A.aaL(
A.ach.YA));}return this.BP;},AAA:function(G){var Aa=(C.Ajk.isPrototypeOf(G)?G:null
);if(Aa===this.Abh)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aep)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(AIJ);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ajk._Init.call(this.
Abh={I:this},0);C.Ajk._Init.call(this.Aep={I:this},0);C.AR0._Init.call(this.VS={
I:this},0);this.__proto__=C.ARW;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.AB_));this.
Abh.H(IW);this.Abh.T(A.aaR(A.acf.AjH));this.Aep.H(Qd);this.Aep.T(A.aaR(A.acf.AGu
));this.VS.H(Aag);this.VS.T(A.aaR(A.acf.A5J));this.J(this.Abh,0);this.J(this.Aep
,0);this.J(this.VS,0);this.Text.S(A.aaL(A.fl.Ak));this.Abh.AR=[this,this.AAA];this.
Aep.AR=[this,this.AAA];this.VS.ATb([B=A._GetAutoObject(A.Device.Device),B.AEK,B.
AIY]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Abh._Done();this.
Aep._Done();this.VS._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.
call(this);this.Abh._ReInit();this.Aep._ReInit();this.VS._ReInit();this.Text.R(A.
aaR(A.acf.AB_));this.Abh.T(A.aaR(A.acf.AjH));this.Aep.T(A.aaR(A.acf.AGu));this.VS.
T(A.aaR(A.acf.A5J));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fs._Mark.
call(this,D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aep)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARV={AnimalTableFields:null,Ay:null,Y:
null,JS:null,CP:function(){this.AiL(this);},Init:function(aArg){A.zV([this,this.
AiL],this.AnimalTableFields,0);A.pe([this,this.AiL],this);},DE:function(G){C.Fs.
DE.call(this,G);this.MT(this);},Lp:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.CE=[this,this.Ew];this.BP.Cf=[this,this.A3u];this.BP.Ca=[this,this.
A3Z];this.BP.C3(A.aaL(A.ach.Are));this.BP.Cw(A.aaL(A.ach.Aq8));this.BP.C2(A.aaL(
A.ach.YA));}return this.BP;},Ew:function(G){this.ABb();this.AaH(this);},AiL:function(
G){this.Ao5();var O;for(O=0;O<this.AnimalTableFields.Na();O=O+1){var Aao=A._GetAutoObject(
C.Ams).OI(O);this.A1z(Aao);}this.J(this.JS,0);A.aaS([this,this.MT],this);},Fk:function(
G){var B;this.Ay.MB((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);
this.Ay.MC(-this.Y.Br[1]);},MT:function(G){var B;this.Y.Vz(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},A1z:function(
Ha){var Azd=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Si,0);Aa.T(Azd.BS(Ha));Aa.Aj(true);Aa.G6=Ha;Aa.A_p(this.AnimalTableFields.NZ(Ha
));this.J(Aa,0);this.ZF(Aa);},Ao5:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HP(AdM);}}
,ABb:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JS)){var Aa=(C.Si.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G6);if(Aa.ASK())this.AnimalTableFields.
AUM(Aa.G6);}else A.ab5("%s",Atc);}X=X.Ah;}this.AnimalTableFields.Ci();},A3u:function(
G){var B;var Aa=(C.Si.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAs=(C.Si.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAs){this.AhE(AAs,Aa);A.pe([this,this.MT],this);}}},A3Z:function(
G){var B;var Aa=(C.Si.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAZ=(C.Si.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAZ){this.AhE(Aa,AAZ);A.pe([this,this.MT],this);}}},AqL:function(
G){var B;A._GetAutoObject(A.Device.Device).Ass(this);A.pe([this,this.AiL],this);
},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Avb._Init.call(this.JS={I:this},0);
this.__proto__=C.ARV;this.H(Qc);this.Text.R(A.aaR(A.acf.AGu));this.Ay.H(It);this.
Y.H(Ba2);this.Y.JW(1);this.JS.H(AIc);this.JS.Aj(true);this.JS.T(A.aaR(A.acf.A6n)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JS,0);this.Y.Em=[this,this.Fk];
this.JS.AR=[this,this.AqL];this.AnimalTableFields=A._GetAutoObject(C.Ams);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fs;this.Ay._Done();this.Y._Done();this.
JS._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JS._ReInit();this.Text.R(A.aaR(A.acf.AGu));this.
JS.T(A.aaR(A.acf.A6n));this.CP();},_Mark:function(D){var B;C.Fs._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARU={Y:null,BZ:null,Db:null,CH:null,GQ:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UT:null,Init:function(aArg){A.zX([this,this.AuS],this.BZ.Q,0);A.zX([
this,this.AM8],this.CH.Q,0);A.zX([this,this.AV7],this.GQ.Q,0);A.zX([this,this.Avv
],this.Db.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fs.DE.call(this,G);this.MT(this
);},Lp:function(){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.
AaH];this.BP.Cf=null;this.BP.Ca=null;this.BP.CR(A.jV);this.BP.Cw(null);this.BP.C2(
A.aaL(A.ach.YA));}return this.BP;},Fk:function(G){var B;this.Ay.MB((B=this.Y.Dd(
0x1))[3]-B[1]);this.Ay.MD((B=this.Y.M)[3]-B[1]);this.Ay.MC(-this.Y.Br[1]);},MT:function(
G){var B;this.Y.Vz(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},AuS:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.BZ.Q,F[1].call(F[0])));},AV7:function(G){var F;A._GetAutoObject(A.Device.
Device).Nm((F=this.GQ.Q,F[1].call(F[0])));},Avv:function(G){var F;A._GetAutoObject(
A.Device.Device).JX((F=this.Db.Q,F[1].call(F[0])));},AM8:function(G){var F;A._GetAutoObject(
A.Device.Device).N3((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fs._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AaU._Init.call(this.BZ={
I:this},0);C.AaU._Init.call(this.Db={I:this},0);C.AaU._Init.call(this.CH={I:this
},0);C.AaU._Init.call(this.GQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UU._Init.call(this.UT={I:
this},0);this.__proto__=C.ARU;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.AjH));this.
Y.H(Ba2);this.Y.JW(1);this.BZ.H(Ah1);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(
A.aaR(A.acf.Aft));this.Db.H(Ayp);this.Db.Ar(true);this.Db.Aj(true);this.Db.T(A.aaR(
A.acf.Afo));this.CH.H(Aoo);this.CH.Ar(true);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.
Breed));this.GQ.H(Atb);this.GQ.Ar(true);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jj
));this.Ay.H(It);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UT.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.Db,0);this.J(this.CH,0);this.J(
this.GQ,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.BZ.Zu(A.aaL(A.fl.H2));
this.BZ.Zv(A.aaL(A.fl.H2));this.BZ.Au([B=this.AnimalType,B.B$,B.Cb]);this.BZ.CK(
this.AnimalType);this.Db.Zu(A.aaL(A.fl.H2));this.Db.Zv(A.aaL(A.fl.H2));this.Db.Au([
B=this.Gender,B.B$,B.Cb]);this.Db.CK(this.Gender);this.CH.Zu(A.aaL(A.fl.H2));this.
CH.Zv(A.aaL(A.fl.H2));this.CH.Au([B=this.Breed,B.B$,B.Cb]);this.CH.CK(this.Breed
);this.GQ.Zu(A.aaL(A.fl.H2));this.GQ.Zv(A.aaL(A.fl.H2));this.GQ.Au([B=this.UT,B.
B$,B.Cb]);this.GQ.CK(this.UT);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Y._Done();this.BZ._Done();this.Db._Done();this.CH._Done();this.GQ._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UT._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this
);this.Y._ReInit();this.BZ._ReInit();this.Db._ReInit();this.CH._ReInit();this.GQ.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UT._ReInit();this.Text.R(A.aaR(A.acf.AjH));this.BZ.T(A.aaR(
A.acf.Aft));this.Db.T(A.aaR(A.acf.Afo));this.CH.T(A.aaR(A.acf.Breed));this.GQ.T(
A.aaR(A.acf.Jj));},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amw={CB:0,Alv:A.abi(17,0,null),OI:function(HA){return this.Alv.Get(HA);},Na:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alv.Set(
O,0);this.CB=0;},J:function(Aaj){if(this.CB>=17)A.ab5("%s",BuD);else{this.Alv.Set(
this.CB,Aaj);this.CB=this.CB+1;}},Ci:function(){},E3:function(Ah5){var AJ7=Ah5.indexOf(
String.fromCharCode(0x2C),0);var A1Y=A.jV;var O=0;this.CB=0;while(O<17)if(Ah5===
A.jV)O++;else{if(AJ7===-1){A1Y=Ah5;Ah5=A.jV;}else{A1Y=A.abV(Ah5,AJ7);Ah5=A.ab1(Ah5
,0,AJ7+1);}var Aao=A.abZ(A1Y,0,10)|0;if(this.Bj6(Aao)){this.Alv.Set(this.CB,Aao);
this.CB=this.CB+1;O++;}AJ7=Ah5.indexOf(String.fromCharCode(0x2C),0);}if(Ah5!==A.
jV)A.ab5("%s",BuE);},toString:function(){var B;var AAq=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAq=AAq+AIe;AAq=AAq+(((B=this.Alv.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAq;},Contains:function(Aaj){var O;for(O=0;O<this.CB;O=O+1)if(this.Alv.
Get(O)===Aaj)return true;return false;},Bj6:function(Aaj){return true;},_Init:function(
aArg){(this.Alv=[]).__proto__=C.Amw.Alv;this.__proto__=C.Amw;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AMc={AfQ:null,Init:function(aArg){var B;A.
zX([this,this.Be2],[B=A._GetAutoObject(A.Device.Device),B.A8C,B.Bbj],0);A.zX([this
,this.Be3],[B=A._GetAutoObject(A.Device.Device),B.A8D,B.Bbk],0);A.pe([this,this.
Be2],this);A.pe([this,this.Be3],this);},Clear:function(){C.Amw.Clear.call(this);
this.AfQ.Clear();},Ci:function(){A._GetAutoObject(A.Device.Device).ArI(this.AfQ.
toString());A._GetAutoObject(A.Device.Device).ArJ(this.toString());},Be2:function(
G){this.AfQ.E3(A._GetAutoObject(A.Device.Device).ABL);A.we(this,0);},Be3:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABM);A.we(this,0);},NZ:function(Aaj
){return this.AfQ.Contains(Aaj);},AUM:function(Aaj){if(!this.NZ(Aaj))this.AfQ.J(
Aaj);},AON:function(){return this.AfQ.Na();},_Init:function(aArg){C.Amw._Init.call(
this,aArg);this.__proto__=C.AMc;this.AfQ=A._NewObject(C.Amw,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amw._Mark.call(this,D);if((B=this.AfQ)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Ams={_Init:function(){C.AMc._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AR0={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hn(10);},Bl:function(aSize){C.Uf.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mq.M[0]));},Ai:function(Ae){var B;C.Uf.
Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf
){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FS);this.V.L(GY);}this.LK=Hf;this.KJ=Fw;this.Qv=GE;},_Init:function(
aArg){C.Uf._Init.call(this,aArg);this.__proto__=C.AR0;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AM1={YS:null,Ak_:null,Lp:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaH];this.BP.Cf=null;
this.BP.Ca=null;this.BP.CR(A.jV);this.BP.Cw(null);this.BP.C2(A.aaL(A.ach.YA));}return this.
BP;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.AaU._Init.call(this.
YS={I:this},0);C.AEg._Init.call(this.Ak_={I:this},0);this.__proto__=C.AM1;var B;
this.H(K1);this.YS.H(K1);this.YS.T(A.aaR(A.acf.Display));this.Ak_.Au(A._GetAutoObject(
A.Device.Device).Aqs);this.J(this.YS,0);this.YS.Zu(A.aaL(A.fl.H2));this.YS.Zv(A.
aaL(A.fl.H2));this.YS.Au([B=this.Ak_,B.B$,B.Cb]);this.YS.CK(this.Ak_);this.Ak_.BnC([
B=A._GetAutoObject(A.Device.Device),B.AEG,B.AIV]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YS._Done();this.Ak_._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YS._ReInit();this.Ak_._ReInit(
);this.YS.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak_)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEg={AbO:null,ListViewScopeToString:null,Du:function(){return 2;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BS(aIndex
);},DZ:function(A7){return A7;},H4:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbO)(F=this.AbO,F[2].call(F[0],E));},BnC:function(E
){if(A.aaZ(this.AbO,E))return;if(!!this.AbO)A.z$([this,this.A35],this.AbO,0);this.
AbO=E;if(!!this.AbO)A.zX([this,this.A35],this.AbO,0);A.pe([this,this.A35],this);
},A35:function(G){var F;if(!!this.AbO)this.Q=(F=this.AbO,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEg;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AVp={
ACl:0,ACk:0,Ai:function(Ae){C.OZ.Ai.call(this,Ae);this.Background.L(this.ACk);this.
V.L(this.ACl);},Bms:function(E){if(this.ACl===E)return;this.ACl=E;this.Am();},Bmr:
function(E){if(this.ACk===E)return;this.ACk=E;this.Am();},_Init:function(aArg){C.
OZ._Init.call(this,aArg);this.__proto__=C.AVp;this.Ar(false);this.ACl=A.jb.Text;
this.ACk=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AHr={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.Bew],[B=A._GetAutoObject(A.Device.
Device),B.A8$,B.BbC],0);A.pe([this,this.Bew],this);},Du:function(){return 3;},Gl:
function(aIndex){return this.WeightValuePrecisionToString.BS(this.C7(aIndex));},
Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwX(E);},Bew:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OP;A.abo([this,this.B$,this.
Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHr;this.
B_.Set(0,0);this.B_.Set(1,1);this.B_.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cm;this.WeightValuePrecisionToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AUS={UH:null,A$W:A.jV,Init:function(aArg){},Bl:function(aSize){C.BW.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UH.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BW.Ai.call(this,Ae);this.UH.L(this.
V.AQ);},Bn6:function(E){if(this.A$W===E)return;this.A$W=E;this.UH.R(E);},_Init:function(
aArg){C.BW._Init.call(this,aArg);C.CG._Init.call(this.UH={I:this},0);this.__proto__=
C.AUS;this.H(AcP);this.UH.H(BuF);this.J(this.UH,0);this.UH.S(A.aaL(A.fl.Af));this.
UH.AZ(A.aaL(A.fl.Ak));this.UH.Cr(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BW;this.UH._Done();C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(
this);this.UH._ReInit();this.UH.S(A.aaL(A.fl.Af));this.UH.AZ(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BW._Mark.call(this,D);if((B=this.UH)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Wm={ABP:null,MassDeregistrationCriterionToString:
null,Du:function(){return 2;},Gl:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A7=this.C7(aIndex);var M2=this.MassDeregistrationCriterionToString.
BS(this.C7(aIndex));if(!!this.ABP&&!A7)M2=A._GetAutoObject(A.Device.Helper).MI(M2
,O9,(F=this.ABP,F[1].call(F[0])).toFixed());return M2;},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Wm;this.B_.Set(
0,0);this.B_.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.ABP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.ANV={Vl:null,Wm:null,Y9:null,JT:null
,Aud:0,AaW:100,Init:function(aArg){this.Bb(this.Y9);},Ai:function(Ae){C.Ej.Ai.call(
this,Ae);var BCC=((A.aaR(A.acf.AqA)+A.aaR(A.acf.Colon))+CQ)+this.Aud.toFixed();this.
JT.Bn6(BCC);},CC:function(G){C.Ej.CC.call(this,G);A.zX([this,this.ABB],this.JT.Q
,0);A.pe([this,this.ABB],this);},E4:function(G){C.Ej.E4.call(this,G);A.z$([this,
this.ABB],this.JT.Q,0);},DJ:function(G){var F;C.Ej.DJ.call(this,G);this.N.Fc(A.jV
);this.N.Cf=null;if((this.AV===this.JT)&&!!this.JT.Q){this.N.Ca=[this,this.Bfg];
switch((F=this.JT.Q,F[1].call(F[0]))){case 1:if(!this.Aud)this.N.GW.C4(100);else
this.N.GW.C4(255);break;case 0:{this.N.Fc(A.aaR(A.acf.Bim));this.N.Cf=[this,this.
Bzk];if(this.AaW<=1)this.N.GW.C4(100);else this.N.GW.C4(255);this.N.CR(A.aaR(A.acf.
Bin));this.N.Ca=[this,this.BAh];if(this.AaW>=2147483647)this.N.GW.C4(100);else this.
N.GW.C4(255);this.N.WN=true;}break;default:throw new Error(BuG+(F=this.JT.Q,F[1].
call(F[0])).toFixed());}this.JT.Ab1(this.N.Ca);}},Bfg:function(G){if(this.Aud>0)
A._GetAutoObject(A.Device.Device).A3(108,true,this.Aud.toFixed(),0,[this,this.BAP
]);},ABB:function(G){var F;this.Aud=A._GetAutoObject(A.Device.Helper).Bjt((F=this.
JT.Q,F[1].call(F[0])),this.AaW);this.Am();A.pe([this,this.MN],this);},Bfa:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B9()){A._GetAutoObject(A.Device.
Device).A3(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Ari(
)===false){this.Vl=[this,this.Bfa];A.zX([this,this.XG],[B=A._GetAutoObject(A.Device.
Device),B.WD,B.Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,
this.Agi]);return;}A.zX([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,
B.SF,B.E5],0);A._GetAutoObject(A.Device.Device).Asr(1,false);},Agi:function(G){var
B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);this.
Vl=null;}},XG:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.Z1===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Agi]);A.z$([this
,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);if(!!this.Vl)A.pe(this.
Vl,this);this.Vl=null;}},BAP:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BCx],this);},BCx:function(
G){A._GetAutoObject(A.Device.Helper).ByM(this.Wm.Q,this.AaW);A._GetAutoObject(A.
Device.Device).A3(109,true,this.Aud.toFixed(),0,null);A.pe([this,this.MN],this);
A.pe([this,this.ABB],this);},Al2:function(G){var B;switch(A._GetAutoObject(A.Device.
Device).Gf.EN){case 0:A.z$([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).
Gf,B.SF,B.E5],0);break;case 3:A._GetAutoObject(A.Device.Device).AqE();break;case
4:{A._GetAutoObject(A.Device.Device).A3(88,true,A.jV,0,null);A._GetAutoObject(A.
Device.Device).Gf.E6();}break;default:;}},BAh:function(G){if(this.AaW<2147483647
)this.AS8(this.AaW+1);},Bzk:function(G){if(this.AaW>1)this.AS8(this.AaW-1);},AS8:
function(E){if(this.AaW===E)return;this.AaW=E;A.pe([this,this.ABB],this);this.JT.
Am();},Bk2:function(){return this.AaW;},_Init:function(aArg){C.Ej._Init.call(this
,aArg);C.Wm._Init.call(this.Wm={I:this},0);C.Co._Init.call(this.Y9={I:this},0);C.
AUS._Init.call(this.JT={I:this},0);this.__proto__=C.ANV;var B;this.Dr(C.AO7);this.
Y9.H(IW);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.A6H));this.Y9.Bi(false);this.JT.
H(BuH);this.JT.Aj(true);this.JT.T(A.aaR(A.acf.Bae));this.JT.Bi(true);this.JT.A_T(
A.aaR(A.acf.Ok));this.J(this.Y9,0);this.J(this.JT,0);this.Wm.ABP=[this,this.Bk2,
this.AS8];this.Y9.AR=[this,this.Bfa];this.JT.AR=[this,this.Bfg];this.JT.Ab1(this.
N.Ca);this.JT.Au([B=this.Wm,B.B$,B.Cb]);this.JT.CK(this.Wm);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wm._Done();this.Y9._Done();this.JT._Done();C.
Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Wm._ReInit(
);this.Y9._ReInit();this.JT._ReInit();this.Y9.T(A.aaR(A.acf.A6H));this.JT.T(A.aaR(
A.acf.Bae));this.JT.A_T(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ej._Mark.call(
this,D);if((B=this.Vl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wm).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AO7={_Init:function(aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.AO7;this.
Text.R(A.aaR(A.acf.AdV));},_ReInit:function(){C.Ks._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdV));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANY={
Vl:null,Y8:null,AbS:null,Init:function(aArg){this.Bb(this.Y8);A.pe([this,this.MN
],this);},Be$:function(G){var B;var Az$=A._GetAutoObject(A.Device.Device).AD4();
switch(Az$){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A3(91,true,U2,0,[this,this.Bft]);break;
case 2:{this.Vl=[this,this.Be$];A.zX([this,this.XG],[B=A._GetAutoObject(A.Device.
Device),B.WD,B.Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,
this.Agi]);}break;default:throw new Error(Ba3+Az$.toFixed());}},Agi:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);this.
Vl=null;}},XG:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.Z1===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Agi]);A.z$([this
,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);if(!!this.Vl)A.pe(this.
Vl,this);this.Vl=null;}},Bfv:function(G){var B;var Az$=A._GetAutoObject(A.Device.
Device).AD5();switch(Az$){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A3(95,true,A.jV,0,[this
,this.BAQ]);break;case 2:{this.Vl=[this,this.Bfv];A.zX([this,this.XG],[B=A._GetAutoObject(
A.Device.Device),B.WD,B.Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV
,0,[this,this.Agi]);}break;case 3:A._GetAutoObject(A.Device.Device).A3(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A3(93,true,A.jV,0,null
);break;default:throw new Error(Ba3+Az$.toFixed());}},Bft:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.Bzo],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
Bzq],this);break;default:throw new Error(BuI+As.Id.toFixed());}},Bzo:function(G){
if(A._GetAutoObject(A.Device.Device).ACu()){var A3g=A._GetAutoObject(A.Device.Device
).An.QK();A._GetAutoObject(A.Device.Device).A3(80,true,A3g.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A3(82,true,A.jV,0,null);A.aaS([this,this.BAL],
this);},Bzq:function(G){if(A._GetAutoObject(A.Device.Device).AGy()){var A3g=A._GetAutoObject(
A.Device.Device).An.QK();A._GetAutoObject(A.Device.Device).A3(81,true,A3g.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A3(83,true,A.jV,0,null);A.aaS([
this,this.BBr],this);},BAQ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BCy],this);},BCy:function(
G){A._GetAutoObject(A.Device.Device).A3(92,true,U2,0,[this,this.Bft]);},BBr:function(
G){A._GetAutoObject(A.Device.Device).A3(92,false,A.jV,0,null);},BAL:function(G){
A._GetAutoObject(A.Device.Device).A3(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ej._Init.call(this,aArg);C.Co._Init.call(this.Y8={I:this},0);C.Co._Init.call(
this.AbS={I:this},0);this.__proto__=C.ANY;this.Dr(C.AO_);this.Y8.H(IW);this.Y8.Aj(
true);this.Y8.T(A.aaR(A.acf.ACu));this.Y8.Bi(false);this.AbS.H(Qd);this.AbS.Aj(true
);this.AbS.T(A.aaR(A.acf.AGy));this.AbS.Bi(true);this.J(this.Y8,-1);this.J(this.
AbS,-1);this.Y8.AR=[this,this.Be$];this.AbS.AR=[this,this.Bfv];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ej;this.Y8._Done();this.AbS._Done();C.Ej._Done.
call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Y8._ReInit();this.AbS.
_ReInit();this.Y8.T(A.aaR(A.acf.ACu));this.AbS.T(A.aaR(A.acf.AGy));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Vl)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO_={
_Init:function(aArg){C.Ks._Init.call(this,aArg);this.__proto__=C.AO_;this.Text.R(
A.aaR(A.acf.ACA));},_ReInit:function(){C.Ks._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACA));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.QD={LZ:null
,AUm:0,AD7:false,AD3:false,AD8:false,Agg:function(G){this.A6q(this);},ATt:function(
E){if(this.LZ===E)return;this.LZ=E;if(!this.LZ)return;this.DP.AutoActions=E;A.zV([
this,this.Bgx],this.LZ,0);A.zV([this,this.AoC],this.LZ,0);A.pe([this,this.Bgx],this
);A.pe([this,this.AoC],this);},AMd:function(){this.AMf(A.aaR(A.acf.Ban),[this,this.
BCO],[this,this.A85,this.AFq]);this.AMf(A.aaR(A.acf.AGo),[this,this.BCM],[this,this.
A82,this.AFo]);this.AMf(A.aaR(A.acf.An1),[this,this.BCN],[this,this.A83,this.AFp
]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ml(A.aaR(A.acf.BoC)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).Fz();},AMf:function(Bxf,Byp,BxK){if(!this.LZ
)return;this.AuK(Bxf,Byp,BxK);},BCO:function(G){this.AFq(!this.AD8);},BCM:function(
G){this.AFo(!this.AD3);},BCN:function(G){this.AFp(!this.AD7);},A4v:function(Eh,BxJ
){if(!this.LZ)return;if(BxJ)this.LZ.Bhs(Eh);else this.LZ.BoV(Eh);this.LZ.Ci();},
A5c:function(Aig,Aih,ByH){A._GetAutoObject(C.BR).ABN(Aig,Aih,[this,this.A9k,this.
ATF],ByH);},AGL:function(Eh){if(!this.LZ)return;this.LZ.AGL(Eh);this.LZ.Ci();},AFq:
function(E){if(this.AD8===E)return;this.AD8=E;this.A4v(256,E);A.abo([this,this.A85
,this.AFq],0);},AFo:function(E){if(this.AD3===E)return;this.AD3=E;this.A4v(2,E);
A.abo([this,this.A82,this.AFo],0);},AFp:function(E){if(this.AD7===E)return;this.
AD7=E;this.A4v(1,E);A.abo([this,this.A83,this.AFp],0);},Bgx:function(G){this.AFq(
this.LZ.Contains(256));this.AFo(this.LZ.Contains(2));this.AFp(this.LZ.Contains(1
));if(this.LZ.Na()>0)this.ATF(this.LZ.AC_());},ATF:function(E){if(this.AUm===E)return;
this.AUm=E;A.abo([this,this.A9k,this.ATF],0);},A85:function(){return this.AD8;},
A82:function(){return this.AD3;},A83:function(){return this.AD7;},A9k:function(){
return this.AUm;},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.QD;},_Mark:function(D){var B;C.GJ._Mark.call(this,D);if((B=this.LZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.Av1={Q:null,Ci:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},AD1:
function(Eh){switch(Eh){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},ID:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.ID],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.ID],E,
0);if(!!E)A.pe([this,this.ID],this);},AGL:function(Eh){if(this.Na()>0)this.AxA(this.
Na()-1,Eh);},Bhs:function(Eh){if(this.Contains(Eh))return;if(this.CB>=17){A.ab5(
"%s",AId);return;}var Az4=0;for(;(Az4<=this.Na())&&(this.OI(Az4)<Eh);Az4++);var ABg=
this.Na()-1;this.J(this.OI(ABg));for(;ABg>Az4;ABg--)this.AxA(ABg,this.OI(ABg-1));
this.AxA(Az4,Eh);},BoV:function(Eh){var index=this.DZ(Eh);if(index<0)return;for(;
index<(this.Na()-1);index++)this.AxA(index,this.OI(index+1));this.AxA(index,0);this.
CB--;},AC_:function(){var Tj=0;if(this.Na()>0)Tj=this.OI(this.Na()-1);return Tj;
},_Init:function(aArg){C.Vy._Init.call(this,aArg);this.__proto__=C.Av1;},_Mark:function(
D){var B;C.Vy._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Av$={_Init:function(){C.Av1.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A9d,B.BbG
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Awa={
_Init:function(){C.Av1._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A9e,B.BbH]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Ax8={_Init:function(){C.Av1._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A9M,B.BbW]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADx={QU:null,AjX:null,_Init:function(aArg){C.De._Init.
call(this,aArg);C.CG._Init.call(this.QU={I:this},0);A.acg.Ap._Init.call(this.AjX={
I:this},0);this.__proto__=C.ADx;this.Es.H(BuJ);this.DS.H(BuK);this.QU.H(BuL);this.
QU.R(A.aaR(A.acf.Ul));this.QU.A6(0x11);this.QU.L(A.jb.Text);this.AjX.H(A0l);this.
AjX.L(A.jb.Text);this.J(this.QU,0);this.J(this.AjX,0);this.QU.S(A.aaL(A.fl.Af));
this.QU.AZ(A.aaL(A.fl.Ak));this.QU.Cr(A.aaL(A.fl.Bh));this.AjX.Ax(A.aaL(A.ach.AvF
));},_Done:function(){this.__proto__=C.De;this.QU._Done();this.AjX._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.QU._ReInit();
this.AjX._ReInit();this.QU.R(A.aaR(A.acf.Ul));this.QU.S(A.aaL(A.fl.Af));this.QU.
AZ(A.aaL(A.fl.Ak));this.QU.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.ACd={
AP:null,SX:null,O0:null,AKA:A.jV,BeF:A.jV,Mj:0,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.O0.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.O0.M[2]-1,0,this.O0.M[2]+1,aSize[1]]);this.
SX.H([this.O0.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);
this.O0.L(this.V.AQ);this.SX.L(this.V.AQ);this.T(this.AKA);this.O0.R(this.BeF);this.
SX.R(this.Mj.toFixed());},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.
AX){var Jp=this.AX.KR(Ad,26);var A2_=A._GetAutoObject(A.Device.Converter).Rj(Jp);
this.AKA=A.abV(A2_,A2_.length-5);this.BeF=A.ab2(A2_,5);if((A._GetAutoObject(A.Device.
Converter).S3(Jp)===10)&&!(Math.trunc(Jp/10000000000)%100))this.AKA=A.ab1(this.AKA
,3,2);this.Mj=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.call(
this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CG._Init.call(this.SX={I:this
},0);C.CG._Init.call(this.O0={I:this},0);this.__proto__=C.ACd;this.V.H(BuM);this.
AP.H(A0o);this.AP.L(A.jb.Bc);this.SX.H(A0p);this.O0.H(BuN);this.J(this.AP,0);this.
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
};C.APA={Q:null,Init:function(aArg){var B;this.AA7(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft]);},AET:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Nq(FilterCriterion);var Ai5=this.Awl();if((Ai5.length>
0)&&(Ai5!==U2)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai5,0,6,false);Filter.CX(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeZ(false);},AA7:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion)Filter.Nq(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,
0);if(!!E)A.pe([this,this.C5],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATm(A.jV);return;}var Ay6=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!Ay6){this.AW.ATm(
U2);this.AW.AeZ(true);}else this.AW.ATm(Ay6.A5);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.APA;this.AW.AwQ(0);this.AW.Bno(true);this.AW.Dk=[
this,this.AET];this.Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVF={FD:null,Da:null,Dn:null,EL:null,AsQ:null,Init:function(aArg){var B;A.zX([
this,this.BfD],[B=A._GetAutoObject(A.Device.Device),B.AS3,B.A0J],0);A.zX([this,this.
Adx],[B=A._GetAutoObject(A.Device.Device),B.Un,B.U4],0);A.zX([this,this.Adx],[B=
A._GetAutoObject(A.Device.Device),B.Uo,B.U5],0);A.pe([this,this.BfD],this);A.pe([
this,this.Adx],this);},BfD:function(G){var AaO=false;switch(A._GetAutoObject(A.Device.
Device).An6){case 0:AaO=false;break;case 3:AaO=true;break;default:throw new Error(
BuO+A._GetAutoObject(A.Device.Device).An6.toFixed());}A._GetAutoObject(A.Device.
Helper).J3(this.Da,AaO);A._GetAutoObject(A.Device.Helper).J3(this.Dn,AaO);A._GetAutoObject(
A.Device.Helper).J3(this.EL,AaO);},Adx:function(G){var F,Ct;if(((F=this.Da.Q,F[1
].call(F[0]))+(Ct=this.Dn.Q,Ct[1].call(Ct[0])))>12)(Ct=this.Dn.Q,Ct[2].call(Ct[0
],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cg._Init.call(this
,aArg);C.BW._Init.call(this.FD={I:this},0);C.Ir._Init.call(this.Da={I:this},0);C.
Ir._Init.call(this.Dn={I:this},0);C.Av5._Init.call(this.EL={I:this},0);C.AVE._Init.
call(this.AsQ={I:this},0);this.__proto__=C.AVF;var B;this.Jc(A.aaR(A.acf.UnlinkTransponder
));this.FD.H(U1);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aql));this.
FD.Bi(true);this.Da.H(Ali);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.
AqG));this.Da.Bi(false);this.Da.Ga(2);this.Da.EV(6);this.Da.IR(A.aaR(A.acf.OG));
this.Da.Jd(A.aaR(A.acf.Ez));this.Dn.H(AcQ);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.
Zm));this.Dn.Bi(true);this.Dn.Ga(0);this.Dn.EV(12);this.Dn.IR(A.aaR(A.acf.OG));this.
Dn.Jd(A.aaR(A.acf.Ez));this.EL.H(Aoq);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar3(A.aaR(A.acf.Aqn));this.J(this.FD,0);this.J(this.Da,0);this.
J(this.Dn,0);this.J(this.EL,0);this.FD.Au([B=this.AsQ,B.B$,B.Cb]);this.FD.CK(this.
AsQ);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Un,B.U4]);this.Dn.Au([B=A.
_GetAutoObject(A.Device.Device),B.Uo,B.U5]);this.EL.DB(A.aaL(A.ach.AjY));this.EL.
OQ([B=A._GetAutoObject(A.Device.Device),B.Un,B.U4]);this.EL.PU([B=A._GetAutoObject(
A.Device.Device),B.Uo,B.U5]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.FD._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.AsQ._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.FD._ReInit(
);this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit();this.AsQ._ReInit();this.
Jc(A.aaR(A.acf.UnlinkTransponder));this.FD.T(A.aaR(A.acf.Aql));this.Da.T(A.aaR(A.
acf.AqG));this.Da.IR(A.aaR(A.acf.OG));this.Da.Jd(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(
A.acf.Zm));this.Dn.IR(A.aaR(A.acf.OG));this.Dn.Jd(A.aaR(A.acf.Ez));this.EL.Ar3(A.
aaR(A.acf.Aqn));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVE={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bg6],[B=A._GetAutoObject(A.Device.Device),B.AS3,B.A0J],0);A.pe([
this,this.Bg6],this);},Du:function(){return 2;},Gl:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axg(E);},Bg6:function(G){this.Q=A._GetAutoObject(A.Device.Device).An6;A.
abo([this,this.B$,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVE;this.B_.Set(0,0);this.B_.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMO.__proto__=A.Core.Root;C.AB.__proto__=C.Abj;C.WQ.__proto__=
A.Core.P;C.OB.__proto__=A.Core.P;C.ZC.__proto__=A.acl.Gm;C.Ek.__proto__=A.Core.P;
C.X2.__proto__=C.AB;C.AU6.__proto__=C.AB;C.AvE.__proto__=C.AB;C.Ra.__proto__=C.AB;
C.Fo.__proto__=C.Hi;C.Ay.__proto__=A.Core.P;C.Cg.__proto__=C.AB;C.Aq2.__proto__=
C.BQ;C.BQ.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADp.__proto__=C.Am0;C.AG3.
__proto__=C.DR;C.Co.__proto__=C.OZ;C.Ds.__proto__=C.Eg;C.Ir.__proto__=C.Ds;C.BW.
__proto__=C.Ds;C.SS.__proto__=C.Ds;C.ON.__proto__=C.Cm;C.Rf.__proto__=C.AC;C.AVj.
__proto__=C.Ba;C.Gc.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GJ.__proto__=C.AB;C.
ACc.__proto__=C.Ba;C.Ad$.__proto__=C.AB;C.Mp.__proto__=C.OB;C.AVe.__proto__=C.AB;
C.Aq1.__proto__=C.ADp;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUV.__proto__=C.Acp;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asw.__proto__=A.Core.P;C.AGP.__proto__=C.Ds;C.CG.__proto__=A.Core.P;C.
AjS.__proto__=C.Yu;C.Amv.__proto__=C.Re;C.AhB.__proto__=A.Core.P;C.Ej.__proto__=
C.AB;C.AT8.__proto__=C.AB;C.Ms.__proto__=C.Co;C.Anj.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abj;C.APQ.__proto__=C.OverlayMenu;C.GK.__proto__=A.Core.P;C.Abj.__proto__=
A.Core.P;C.AU0.__proto__=A.acl.Aen;C.Am0.__proto__=C.BQ;C.ADq.__proto__=C.Am0;C.
Ko.__proto__=C.AC;C.AUX.__proto__=C.Ds;C.AGp.__proto__=C.AB;C.HZ.__proto__=C.AB;
C.Wx.__proto__=C.Aru;C.IL.__proto__=C.ADq;C.I6.__proto__=C.AB;C.AMm.__proto__=C.
AGp;C.AMi.__proto__=C.GJ;C.AND.__proto__=C.GJ;C.Aer.__proto__=C.Co;C.QF.__proto__=
C.Aer;C.APD.__proto__=C.BQ;C.AjT.__proto__=C.BQ;C.DF.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Gd.__proto__=C.AC;C.Afn.__proto__=C.BW;C.AUn.__proto__=C.AB;C.AbT.__proto__=
C.Co;C.Uf.__proto__=C.Co;C.ANP.__proto__=C.Cg;C.AVl.__proto__=C.Cg;C.AN2.__proto__=
C.Cg;C.AUz.__proto__=C.Cg;C.W4.__proto__=A.Core.P;C.QX.__proto__=C.Fo;C.D2.__proto__=
A.Core.P;C.Ub.__proto__=C.AB;C.AVW.__proto__=C.GJ;C.AMn.__proto__=C.Ax6;C.AVH.__proto__=
C.Cg;C.AeQ.__proto__=C.AC;C.Ax6.__proto__=C.AB;C.AV5.__proto__=C.Cg;C.AUW.__proto__=
C.Acp;C.ABJ.__proto__=A.Graphics.Hz;C.Aqh.__proto__=C.AB;C.ARR.__proto__=A.Core.
P;C.Fs.__proto__=C.OverlayMenu;C.AaU.__proto__=C.BW;C.Ajk.__proto__=C.Co;C.AL6.__proto__=
C.Fs;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AMa.__proto__=C.Vy;C.AMb.
__proto__=C.Fs;C.Si.__proto__=C.Uf;C.AMT.__proto__=C.Vy;C.Wo.__proto__=C.Fo;C.Vv.
__proto__=A.Core.P;C.KA.__proto__=A.Core.P;C.ASd.__proto__=C.HZ;C.AUq.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANE.__proto__=C.Amv;C.Hi.__proto__=A.
Core.P;C.AVY.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa4.
__proto__=C.Gd;C.AxY.__proto__=C.ABJ;C.AT3.__proto__=C.OverlayMenu;C.AOH.__proto__=
A.Core.P;C.N5.__proto__=A.Core.P;C.AT4.__proto__=A.Core.P;C.AUZ.__proto__=A.acl.
Aen;C.AkV.__proto__=C.Ir;C.Amx.__proto__=C.OverlayMenu;C.ACf.__proto__=C.Ba;C.Yv.
__proto__=C.AjT;C.AqK.__proto__=C.HZ;C.Aco.__proto__=C.Ds;C.WeightRecordingScope.
__proto__=C.AC;C.AuP.__proto__=C.AB;C.AUY.__proto__=C.Ir;C.AMk.__proto__=C.AB;C.
Aru.__proto__=C.HZ;C.AHm.__proto__=A.Core.P;C.AV1.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeS.__proto__=C.Eg;C.Av6.__proto__=C.AeS;C.SetTransponderScreen.__proto__=
C.Ra;C.ADy.__proto__=C.EB;C.AHq.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mk.__proto__=C.Ra;C.AL4.__proto__=C.Mk;C.ManualActionScanScreen.__proto__=C.Mk;
C.AL5.__proto__=A.Core.P;C.APH.__proto__=C.De;C.ADw.__proto__=C.De;C.T1.__proto__=
C.De;C.APJ.__proto__=C.De;C.ANi.__proto__=C.Ba;C.M7.__proto__=C.Ba;C.ANg.__proto__=
C.Ba;C.Ju.__proto__=A.Core.P;C.ANf.__proto__=C.Ba;C.AmZ.__proto__=C.TL;C.AGf.__proto__=
C.Axq;C.AkI.__proto__=C.Axq;C.ZB.__proto__=C.AkI;C.ANL.__proto__=C.OZ;C.OZ.__proto__=
C.Hi;C.APM.__proto__=C.EB;C.DS.__proto__=A.Core.P;C.ANc.__proto__=C.AjD;C.ADs.__proto__=
C.T2;C.Kn.__proto__=A.Core.P;C.AmH.__proto__=C.Ms;C.AO4.__proto__=C.Kt;C.AutoRegistrationMode.
__proto__=C.AC;C.APN.__proto__=C.EB;C.TF.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMy.__proto__=C.R1;C.AMM.__proto__=C.Aa1;C.AMH.__proto__=C.Aa1;C.AUp.__proto__=
C.Ba;C.APL.__proto__=C.EB;C.AMB.__proto__=C.Aa1;C.IH.__proto__=C.I5;C.RU.__proto__=
C.FA;C.RZ.__proto__=C.FA;C.TE.__proto__=C.JN;C.QE.__proto__=C.FA;C.TD.__proto__=
C.JN;C.AMj.__proto__=C.Aqh;C.ARe.__proto__=C.Cg;C.Aa1.__proto__=C.D9;C.Km.__proto__=
C.Cm;C.ARN.__proto__=C.Cg;C.AMw.__proto__=C.Lb;C.AMx.__proto__=C.D9;C.AMu.__proto__=
C.Lb;C.AMv.__proto__=C.Lb;C.WS.__proto__=C.Eg;C.AUT.__proto__=C.WS;C.R0.__proto__=
C.FA;C.APC.__proto__=C.IL;C.ANF.__proto__=C.AB;C.ANm.__proto__=C.Ad$;C.AMh.__proto__=
C.I6;C.AVV.__proto__=C.I6;C.AO6.__proto__=C.Kt;C.APE.__proto__=C.Kt;C.API.__proto__=
C.T2;C.ANh.__proto__=C.AjD;C.T2.__proto__=C.De;C.Aqv.__proto__=A.acv.ACp;C.AjD.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AM5.__proto__=C.DR;C.O4.__proto__=C.DR;C.AqZ.__proto__=
A.Core.P;C.AMD.__proto__=C.Gc;C.AUt.__proto__=A.Core.P;C.Lb.__proto__=C.D9;C.ANM.
__proto__=C.Cg;C.Avb.__proto__=C.Co;C.ADm.__proto__=C.BQ;C.ADn.__proto__=C.BQ;C.
FA.__proto__=C.JN;C.AOK.__proto__=C.GJ;C.AOJ.__proto__=C.I6;C.APi.__proto__=C.Kt;
C.ADu.__proto__=C.De;C.ACb.__proto__=C.Ba;C.AUo.__proto__=C.AhB;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASp.
__proto__=C.QD;C.ASo.__proto__=C.I6;C.ADo.__proto__=C.Kt;C.ABW.__proto__=C.Gd;C.
AL9.__proto__=C.Fs;C.AMl.__proto__=C.AuP;C.NewAnimalSetTransponderScreen.__proto__=
C.AsB;C.C9.__proto__=C.AC;C.O3.__proto__=A.Core.P;C.RW.__proto__=C.FA;C.RX.__proto__=
C.FA;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARY.__proto__=C.OverlayMenu;
C.VS.__proto__=C.Uf;C.Av5.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.TF;
C.AnimalMultiInfoScreen.__proto__=C.TF;C.AMA.__proto__=C.OverlayMenu;C.I$.__proto__=
A.Core.P;C.AL8.__proto__=C.GJ;C.AL7.__proto__=C.I6;C.APB.__proto__=C.IL;C.AsL.__proto__=
C.O3;C.Ard.__proto__=C.O3;C.Au9.__proto__=C.AC;C.AMs.__proto__=C.AC;C.AGO.__proto__=
C.Eg;C.G5.__proto__=A.Core.P;C.ARh.__proto__=C.HL;C.AVM.__proto__=C.X2;C.AR$.__proto__=
C.Wx;C.ADX.__proto__=C.Li;C.HL.__proto__=C.G5;C.Li.__proto__=C.G5;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvV.__proto__=C.HL;C.AUR.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.AsB;C.ReasonOfLeaving.__proto__=C.AC;C.OW.__proto__=C.BW;C.AeV.__proto__=
C.El;C.AR4.__proto__=C.El;C.AR3.__proto__=C.El;C.El.__proto__=A.Core.P;C.Rb.__proto__=
C.Eg;C.ARi.__proto__=C.Li;C.AvU.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.FC.
__proto__=C.AB;C.AOj.__proto__=C.AB;C.AOm.__proto__=C.FC;C.AOn.__proto__=C.FC;C.
AqN.__proto__=C.FC;C.Abv.__proto__=C.AjS;C.Kt.__proto__=C.AjS;C.AvC.__proto__=C.
Abv;C.APg.__proto__=C.Abv;C.APf.__proto__=C.Abv;C.APe.__proto__=C.BQ;C.Aey.__proto__=
C.EB;C.AmP.__proto__=C.Ba;C.Ajs.__proto__=C.IH;C.ACP.__proto__=A.Core.P;C.AkS.__proto__=
A.Core.P;C.Re.__proto__=C.AB;C.AVk.__proto__=C.Re;C.APh.__proto__=C.BQ;C.De.__proto__=
C.EB;C.Ks.__proto__=C.BQ;C.APa.__proto__=C.Ks;C.APc.__proto__=C.Ks;C.Yp.__proto__=
C.AmP;C.Agz.__proto__=C.Hi;C.AN8.__proto__=C.GJ;C.AN7.__proto__=C.I6;C.APd.__proto__=
C.Kt;C.Abq.__proto__=C.Aco;C.AjK.__proto__=C.QF;C.AB7.__proto__=C.QF;C.APG.__proto__=
C.De;C.ANe.__proto__=C.Ba;C.RY.__proto__=C.FA;C.AMt.__proto__=C.FA;C.AN0.__proto__=
C.Ej;C.AN1.__proto__=C.Ej;C.APb.__proto__=C.Ks;C.Ni.__proto__=C.AbT;C.ANW.__proto__=
C.Ej;C.AO8.__proto__=C.Ks;C.PQ.__proto__=C.Co;C.Sj.__proto__=C.AB;C.AOk.__proto__=
C.Sj;C.AOl.__proto__=C.Sj;C.AOo.__proto__=C.AqN;C.AOh.__proto__=C.FC;C.Aa0.__proto__=
C.IH;C.Po.__proto__=C.IH;C.AMF.__proto__=C.Amx;C.ARL.__proto__=C.Ub;C.ARK.__proto__=
C.Ub;C.ASk.__proto__=C.QD;C.ASj.__proto__=C.I6;C.APv.__proto__=C.Kt;C.AkP.__proto__=
C.GJ;C.AUA.__proto__=C.I6;C.Aev.__proto__=C.Yu;C.ACa.__proto__=C.Ba;C.ADt.__proto__=
C.De;C.APx.__proto__=C.BQ;C.Aa3.__proto__=C.NJ;C.XV.__proto__=C.NJ;C.R1.__proto__=
C.D9;C.XW.__proto__=C.R1;C.XT.__proto__=C.IG;C.AaY.__proto__=C.IG;C.XS.__proto__=
C.IG;C.AaX.__proto__=C.IG;C.AMC.__proto__=C.AB;C.IG.__proto__=C.I5;C.I5.__proto__=
C.Hi;C.NJ.__proto__=C.FA;C.Axp.__proto__=C.ZB;C.ANK.__proto__=C.AmH;C.Axr.__proto__=
C.ZB;C.AUe.__proto__=C.Cg;C.AUc.__proto__=C.El;C.ARf.__proto__=C.Li;C.AUd.__proto__=
C.El;C.NewMenu.__proto__=C.AB;C.ASa.__proto__=C.HZ;C.AME.__proto__=C.Amx;C.AMU.__proto__=
C.Vy;C.JN.__proto__=C.I5;C.APz.__proto__=C.Yv;C.Abp.__proto__=C.Cm;C.APK.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Mk;C.APy.__proto__=C.Aq1;C.Ji.__proto__=A.Core.
P;C.APu.__proto__=C.BQ;C.SetSaveNaisIdScreen.__proto__=C.Ra;C.AN9.__proto__=C.AqK;
C.UT.__proto__=C.Cm;C.UU.__proto__=C.UT;C.AcL.__proto__=C.UT;C.AdW.__proto__=C.AC;
C.AGN.__proto__=C.Eg;C.ANZ.__proto__=C.Ej;C.AO$.__proto__=C.Ks;C.ANX.__proto__=C.
Ej;C.AO9.__proto__=C.Ks;C.Aq3.__proto__=C.T1;C.APF.__proto__=C.T1;C.Aqw.__proto__=
C.M7;C.ANd.__proto__=C.M7;C.AR5.__proto__=C.AeV;C.Yu.__proto__=C.BQ;C.Acp.__proto__=
C.BW;C.FK.__proto__=C.AC;C.AMI.__proto__=C.FK;C.AMJ.__proto__=C.FK;C.AMp.__proto__=
C.I6;C.TL.__proto__=C.BW;C.ASc.__proto__=C.AB;C.AsB.__proto__=C.SetTransponderScreen;
C.ADY.__proto__=C.HL;C.AsC.__proto__=C.OW;C.AxC.__proto__=C.OW;C.Acs.__proto__=C.
Cm;C.AV$.__proto__=C.QD;C.AV_.__proto__=C.I6;C.ARj.__proto__=A.Core.P;C.ARg.__proto__=
C.HL;C.ACU.__proto__=C.Abq;C.L0.__proto__=A.Core.P;C.AUy.__proto__=C.Cg;C.AUx.__proto__=
C.Cg;C.AVC.__proto__=C.Cg;C.Afs.__proto__=C.Cm;C.Jf.__proto__=A.acn.Jf;C.AVq.__proto__=
C.AB;C.AUg.__proto__=C.AkP;C.ADv.__proto__=C.De;C.AM3.__proto__=C.AkP;C.AO5.__proto__=
C.Aev;C.APw.__proto__=C.Aev;C.ACe.__proto__=C.Ba;C.AUQ.__proto__=C.SS;C.AUU.__proto__=
C.Rb;C.APt.__proto__=C.BQ;C.ARW.__proto__=C.Fs;C.ARV.__proto__=C.Fs;C.ARU.__proto__=
C.Fs;C.AMc.__proto__=C.Amw;C.AR0.__proto__=C.Uf;C.AM1.__proto__=C.OverlayMenu;C.
AEg.__proto__=C.AC;C.AVp.__proto__=C.OZ;C.AHr.__proto__=C.Cm;C.AUS.__proto__=C.BW;
C.Wm.__proto__=C.Cm;C.ANV.__proto__=C.Ej;C.AO7.__proto__=C.Ks;C.ANY.__proto__=C.
Ej;C.AO_.__proto__=C.Ks;C.QD.__proto__=C.GJ;C.Av1.__proto__=C.Vy;C.ADx.__proto__=
C.De;C.ACd.__proto__=C.Ba;C.APA.__proto__=C.AjT;C.AVF.__proto__=C.Cg;C.AVE.__proto__=
C.Cm;};C._ReInit=function(){var B;if((B=C.AxG._this))B._ReInit(),C.AxG._ReInit.call(
B);if((B=C.AxH._this))B._ReInit(),C.AxH._ReInit.call(B);if((B=C.A8._this))B._ReInit(
),C.A8._ReInit.call(B);if((B=C.Pn._this))B._ReInit(),C.Pn._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afj._this
))B._ReInit(),C.Afj._ReInit.call(B);if((B=C.BR._this))B._ReInit(),C.BR._ReInit.call(
B);if((B=C.WJ._this))B._ReInit(),C.WJ._ReInit.call(B);if((B=C.AsD._this))B._ReInit(
),C.AsD._ReInit.call(B);if((B=C.AnW._this))B._ReInit(),C.AnW._ReInit.call(B);if((
B=C.DP._this))B._ReInit(),C.DP._ReInit.call(B);if((B=C.AuX._this))B._ReInit(),C.
AuX._ReInit.call(B);if((B=C.Ams._this))B._ReInit(),C.Ams._ReInit.call(B);if((B=C.
Av$._this))B._ReInit(),C.Av$._ReInit.call(B);if((B=C.Awa._this))B._ReInit(),C.Awa.
_ReInit.call(B);if((B=C.Ax8._this))B._ReInit(),C.Ax8._ReInit.call(B);};C.DH=function(
D){var B;if((B=C.AxG._this)&&(B._cycle!=D))B._Done(C.AxG._this=null);if((B=C.AxH.
_this)&&(B._cycle!=D))B._Done(C.AxH._this=null);if((B=C.A8._this)&&(B._cycle!=D)
)B._Done(C.A8._this=null);if((B=C.Pn._this)&&(B._cycle!=D))B._Done(C.Pn._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afj._this)&&(B._cycle!=D))B._Done(C.Afj._this=null);if((B=C.BR._this)&&(B._cycle
!=D))B._Done(C.BR._this=null);if((B=C.WJ._this)&&(B._cycle!=D))B._Done(C.WJ._this=
null);if((B=C.AsD._this)&&(B._cycle!=D))B._Done(C.AsD._this=null);if((B=C.AnW._this
)&&(B._cycle!=D))B._Done(C.AnW._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(
C.DP._this=null);if((B=C.AuX._this)&&(B._cycle!=D))B._Done(C.AuX._this=null);if((
B=C.Ams._this)&&(B._cycle!=D))B._Done(C.Ams._this=null);if((B=C.Av$._this)&&(B._cycle
!=D))B._Done(C.Av$._this=null);if((B=C.Awa._this)&&(B._cycle!=D))B._Done(C.Awa._this=
null);if((B=C.Ax8._this)&&(B._cycle!=D))B._Done(C.Ax8._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */