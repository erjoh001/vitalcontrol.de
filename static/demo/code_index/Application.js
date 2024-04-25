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
IV=[6,15,14,19];var Is=[6,9,14,13];var O4=[209,7,229,37];var P_=[0,40,240,320];var
P$=[0,228,240,298];var CQ=" ";var Ff=[0,40,240,280];var L3=[0,40,232,280];var Qa=[
0,40,116,160];var J5=[114,40,230,160];var Oc=[0,160,116,280];var Qb=[116,160,232
,280];var MJ=[0,280,116,400];var S$=[116,280,232,400];var UT=[0,400,116,520];var
Z5=[116,400,232,520];var W8=[-1,520,115,640];var It=[232,40,240,280];var UU=[5,40
,235,120];var Z6=[120,140,210,230];var W9=[20,140,110,230];var Z7=[0,0,116,120];
var W_=[0,0,120,120];var Z8=[0,0,116,45];var Z9=[0,0,8,200];var UV=[0,0,8,20];var
W$=[30,0,210,40];var O5=[0,0,40,40];var Z_=[7,8,200,40];var O6=[0,0,200,40];var Rn=[
6,1];var Xa="ERROR: Invalid value for ItemHighlighting";var Xb=[10,10,40,30];var
UW=[0,0,120,40];var Z$=[60,0,180,40];var Aaa=[120,0,240,40];var Xc=[0,0,100,40];
var Xd=[83,0,157,40];var Ta=[140,0,240,40];var UX=[0,0,20,40];var UY=[220,0,240,
40];var AcM=[0,0,300,30];var Tb=[0,30,300,60];var Aab=[0,60,300,90];var AfB=[0,90
,300,120];var Aac=[0,100,300,110];var Xe=[0,50,300,60];var Aad=[0,30,300,40];var
Xf="*";var AhX=[40,40];var KZ=[0,0,240,80];var AcN=[0,0,240,50];var Lw="Cap";var
AhY=[0,40,40,80];var Aoe=[200,40,240,80];var Od=[30,40,210,80];var Xg="--";var Aae=
"%d";var AfC="%m";var AhZ="%Y";var AcO=" (";var UZ=[0,0,232,80];var Aof="Date";var
Aog=[48,40,88,78];var Aoh=[39,40,79,80];var Aoi=[80,44,87,77];var Alc=".";var AsX=[
88,44,120,77];var Ax7=[120,44,127,77];var Ax8=[127,44,191,77];var O7=[0,0,80,40];
var Ro="Text";var Ax9=[430,102,430,102];var U0=[0,0,240,240];var AsY=[232,0,240,
240];var Ax_=[0,10,240,240];var Ax$="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Aya="Unhandled option";
var Aoj=[0,80,240,280];var AfD="Unhandled animal list action";var Aok="Animal list content not handled.";
var IW=[0,40,240,80];var Aol="Set Selected";var AsZ=" %%";var Xh=[0,180,240,220];
var As0=[82,127,167,150];var As1="Group";var As2=[77,91,167,124];var Aom=[0,0,90
,33];var As3=[4,4,18,29];var Ald=[20,4,34,29];var Ayb=[36,4,50,29];var Ayc=[52,4
,66,29];var Ayd=[68,4,82,29];var As4="ERROR: Unhandled Device::SyncState";var Aye=
":\n";var O8="{1}";var Ayf="{2}";var AV9=[0,49,240,109];var AV_=[0,170,240,243];
var AV$=[0,110,240,170];var AWa=[20,243,220,268];var AHr=[30,8];var AHs="\u2265 ";
var AfE=[0,0,240,160];var Aon=[0,0,0,0];var AWb=[0,0,240,66];var AHt=[10,0,76,66
];var Ale=[33,33];var AHu=[87,0,153,66];var AHv=[164,0,230,66];var AWc="No statistics available";
var AWd="in this environment.";var AHw=" fps";var AWe="CPU: - %%";var AcP=[0,0,240
,120];var AWf=[130,0,237,20];var AWg=[20,0,120,20];var AWh=[0,20,240,40];var AHx=[
40,20,100,40];var As5=[100,20,240,40];var AHy=[0,40,240,60];var AHz=[40,40,100,60
];var Ayg=[100,40,240,60];var AHA=[0,60,50,80];var Ayh=[100,60,240,80];var AWi=[
0,80,50,100];var AWj=[100,80,240,100];var AWk=[0,100,50,120];var AWl=[100,100,240
,120];var AHB=[5,5,15,15];var AWm="%H";var MK="%M";var Ayi="Time";var AWn=[79,40
,119,78];var AWo=[125,40,164,80];var AWp=[86,40,126,80];var AWq=":";var AWr=[75,
40,115,80];var AHC=[0,0,240,150];var AWs=[60,0,155,40];var Ayj=[30,0,65,40];var As6=[
60,0,100,40];var Ayk=[88,0,128,40];var AWt=[60,0,71,40];var AWu=[60,0,74,40];var
AHD=[90,0,123,40];var AWv=[120,0,161,40];var AHE=[120,0,165,40];var AHF=[60,0,88
,40];var AHG=[60,0,95,40];var AWw="Did not expect iterator bigger than number of records";
var AHH=[20,0,240,20];var AWx=[0,38,240,40];var AWy=[0,0,8,4];var Qc=[0,0,240,280
];var Xi=[0,280,240,320];var AWz="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWA="]";var AWB="ERROR: Cannot find closing bracket \'}\' in text [";var AWC=
"] opened at index ";var AWD="#";var AWE="ERROR: Invalid parameter: {";var AWF="}";
var Ah0=[20,20];var AHI=[0,12];var AWG="ERROR: Not expected Application::FooterFocus, ";
var AWH="%M:%S";var AHJ=[30,150,207,170];var AHK=[20,70,217,194];var Ayl="Unhandled item.";
var Qd=[0,80,240,120];var AWI="Unhandled Overlay Menu ";var AWJ="Invalid bootloader message: ";
var AWK="Unknown USBState: ";var As7="Invalid fader";var AWL=[2,4,32,40];var AWM=[
29,4,80,40];var AWN=[120,4,200,40];var AWO=[80,0,114,40];var AWP="-1";var AWQ="< ";
var As8=[0,0,232,40];var AWR=[22,40,180,80];var AWS=[2,40,22,80];var AWT=[23,40,
163,80];var AWU=[210,40,230,80];var AWV=[164,40,210,80];var AWW=[169,43,205,77];
var AWX="ERROR: No outlet assigned";var AWY="Unhandled screen";var AWZ="ERROR: Cannot cache null screen.";
var AW0="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHL="Untreated Rating Method type!";var Alf="Unhandled animal type";var AW1=[
5,60,235,140];var AW2=[0,130,240,196];var AW3=[49,240,229,280];var Aym="Implement in derived classes!";
var Alg="Implement in derived class";var Ah1=[0,40,230,120];var Ayn=[0,120,230,200
];var Aoo=[0,200,230,280];var Ah2=[0,280,230,360];var AW4=[0,360,230,440];var Ayo=[
230,40,238,280];var AHM="WARNING: Unhandled filter field: ";var AfF="Should not happen.";
var AHN="Invalid Boolean item";var Aaf=[0,120,240,160];var Alh=[0,160,240,200];var
Aop=[0,200,240,240];var AW5=[1152,11,1392,51];var AW6=[1152,51,1392,91];var AW7=[
1152,91,1392,131];var AW8=[1152,131,1392,171];var AW9=[1152,171,1392,211];var As9=[
0,240,240,280];var AHO=[10,0,240,40];var AHP=[190,0,230,40];var AW_=[60,3,95,39];
var AW$=[95,4,200,40];var AXa=[3,3];var AXb=[6,6];var AXc=[59,5,197,35];var AXd=[
59,2,200,38];var AXe=[3,2,43,42];var AXf=[0,17,43,40];var AXg=[50,40];var AXh=[50
,0];var AXi="Illegal shifting direction";var Ayp=[0,0,160,30];var AHQ=[0,0,25,30
];var AHR=[27,0,52,30];var AHS=[54,0,79,30];var AHT=[81,0,106,30];var AHU=[108,0
,133,30];var AHV=[135,0,160,30];var AXj="Internal queue error";var AXk="ERROR: No corresponding Id ";
var AXl=" found.";var AXm="ERROR: Error in range test";var AXn=[120,67,210,157];
var AXo=[0,40,240,70];var AXp=[20,67,110,157];var Ayq=[0,160,240,280];var AHW=[20
,77,90,147];var AXq=[0,0,210,40];var AHX=[195,0,235,40];var Ah3=[0,40,232,120];var
U1=[0,120,232,200];var AXr=[0,40,232,200];var Aag=[0,200,232,280];var AXs=[0,320
,240,400];var AXt=[0,120,53,200];var Ali=[0,280,232,360];var AfG="%%";var AcQ=[0
,360,232,440];var Aoq=[0,440,232,520];var AXu=[0,80,207,120];var O9=")";var AHY=
"/";var AHZ=[5,0,88,30];var AXv=[88,0,240,30];var AH0="276000312345678";var AH1=[
5,30,100,60];var AH2=[100,30,240,60];var AXw="Manufacturer";var AXx="Country";var
AXy=[5,60,240,90];var AXz="Niedersachsen";var AXA=[5,90,145,120];var AXB=[140,90
,240,120];var AXC="Protocol";var AXD=[0,0,120,100];var AH3=[0,40,116,120];var AXE=[
40,80,92,107];var AH4=[0,0,50,23];var AH5="ERROR: Unhandled Device::MeasureState";
var Ayr=[0,120,240,280];var AXF=[178,159,248,203];var AXG=[10,145,170,225];var AXH=[
0,61,240,101];var AXI=[0,0,40,23];var AXJ=[101,113,141,136];var AH6=[101,235,141
,258];var AXK=[69,288,101,313];var AXL=[0,40,240,200];var As_=[0,200,240,280];var
As$=[0,280,240,360];var AH7="\u2264 ";var AXM=[0,80,94,160];var AXN=[94,80,184,160
];var AXO=[184,80,240,160];var AXP=[197,105,231,139];var AXQ=[105,101,173,127];var
AXR=[7,101,75,127];var AXS=[94,125,184,151];var AXT=[2,125,92,151];var AXU=[0,70
,240,101];var AH8=[0,106,240,280];var AXV=[30,40,240,70];var Ays=[0,40,30,70];var
AH9="\u278B";var AXW=[0,0,240,175];var AXX=[0,0,232,175];var AXY=[232,0,240,175];
var AXZ="Text Here !";var AX0=[200,0,240,40];var AH_="1";var AH$="2";var AIa="3";
var AIb="4";var Ayt=[0,360,232,400];var Ayu="ERROR: invalid item class.";var AIc=[
10,220,250,260];var AX1=[185,0,225,40];var AId="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AX2="ERROR: Received more actions than expected!";var AIe=", ";var AX3=
"ERROR: Cannot set action at position=";var AX4=". Current elements:";var AX5=", max elements:";
var AX6="17";var AX7=[0,0,58,58];var AX8=[0,0,60,60];var AX9=[30,0,58,20];var AX_=[
7,6,25,24];var AX$=[30,60,130,160];var AYa=[0,0,28,20];var AYb=[4,3,40,24];var AYc=[
0,0,42,27];var Ayv=[0,0,17,17];var AYd="Unknown direction of counting enum value: ";
var AYe="Unknown id generation method enum value: ";var Ayw="Invalid animal id generation method: ";
var Ata="Unhandled popup id";var U2="0";var Atb=";";var AYf=[0,400,230,480];var AYg=[
5,120,235,200];var AYh=[0,640,230,760];var AIf=[0,0,300,200];var AYi=[20,40,220,
80];var AIg=[20,80,220,280];var AYj=[140,0,188,40];var AYk="ERROR: Row containing birth weight could not be loaded";
var AYl=[0,440,230,520];var Atc="ID";var AYm=[40,40,198,70];var AYn="Extra info: ";
var AIh=" -";var AYo=[0,0,230,120];var AYp=[0,0,230,40];var AYq=[0,80,230,120];var
AYr="\xB0Brix";var AcR=[0,320,230,400];var AYs=[0,410,230,490];var AYt="ERROR: aNumberOfDays can not be < 0 ";
var AYu="{WEIGHTGAIN} ";var AYv="\xB1";var AIi="+";var AYw="{WEIGHTGAIN}";var AYx=
"{DAYS}";var AYy="ERROR: aString can not be null";var AYz=[166,70,240,114];var AYA=[
0,60,160,120];var AYB=[30,0,240,60];var AIj=[1,6,29,54];var AYC=[30,60,240,120];
var AYD="Con";var AYE=[70,50,170,70];var AIk="Unhandled Device::NaisIdValidationResult: ";
var AIl="Unhandled PopupId";var AYF=[110,123,230,248];var AYG=[5,0,250,40];var AYH=[
102,0,186,40];var AYI=[153,0,240,40];var Rp="-";var Atd=[170,0,240,40];var AIm=[
220,0,320,30];var AIn=[200,20,300,50];var Aor=[180,0,180,40];var Aos=[170,0,170,
40];var Ayx="Untreated state";var AYJ="ERROR: Animal id scanned in an unexpected state : ";
var AIo="ERROR: Null animal id scanned.";var AYK=[40,40,235,100];var AYL=[120,100
,210,190];var AYM=[20,100,110,190];var AYN=[0,40,40,100];var AYO="\u278A";var AYP=
"Action untreated";var AYQ="ERROR: No corresponding ";var AYR=" action found!";var
AYS="Unhandled action: ";var AYT=[0,186,240,216];var AYU=[0,220,232,280];var AYV=[
5,190,235,270];var AYW=[232,60];var AYX=[0,2];var AYY=[58,58];var AYZ="A";var AY0=[
56,0,156,40];var Aot=[156,0,240,40];var AIp=" 7 ";var AY1=[40,0,156,40];var AIq=
"/-1/-2";var AIr=[72,0,144,40];var AcS="\n";var AIs="(";var AY2=[72,0,156,40];var
AIt="%y/%m";var AY3=[70,0,240,40];var Ayy=[70,0,120,40];var AY4=[160,0,245,40];var
AY5="- ";var Ayz=" - ";var AY6="{parc}{clr3}";var AY7="{clr0}/^{clr2}";var AY8="{clr0}/^{clr1}";
var AIu=[0,0,85,40];var Aou="?";var AIv=[0,0,120,140];var AY9=[0,0,116,40];var AIw=[
15,0,100,40];var AIx=[110,0,200,40];var Alj=[0,0,34,34];var AY_=[129,0,157,40];var
Aov=[0,0,25,25];var AY$="\u2611";var AIy="\u2610";var AIz=[5,0,72,40];var AIA=[150
,0,240,40];var AZa=[72,0,139,40];var AyA="Unvalid content class: ";var AZb=[0,320
,240,360];var AZc=[0,360,240,400];var AZd=[144,0,170,40];var AZe=[187,0,213,40];
var AZf=[207,10,233,50];var AZg=[247,20,273,60];var AZh=[140,0,150,100];var AZi=[
165,0,175,100];var AZj=[185,0,195,100];var AZk=[205,0,215,100];var AZl=[211,0,233
,40];var AZm=[189,0,211,40];var AZn=[167,0,189,40];var AZo=[145,0,167,40];var AIB=[
5,0,240,40];var Aah=[10,0,10,40];var AZp="= \u2211 ";var AyB=[125,0,240,40];var AZq=[
130,0,170,40];var AZr="\xD8 ";var Aow=[100,10,116,36];var AZs=[117,10,133,36];var
AZt=[135,10,151,36];var AZu="Implement in derieved class";var Ate=[0,80,240,240];
var Atf=[0,120,232,160];var Atg=[0,160,232,200];var Ath=[0,200,232,240];var AyC=[
0,240,232,280];var Alk=[0,320,232,360];var Ati=[-61,360,232,400];var AZv=[0,400,
32,440];var AZw=[0,100];var AZx=[0,40,240,240];var AZy=[0,50000];var AZz=[0,500];
var AZA=[0,0,240,105];var AZB=[0,105,240,210];var AZC=[0,40,240,81];var AZD=[0,81
,240,122];var AZE=[0,122,240,163];var AZF=[0,163,240,205];var AZG=[0,205,240,240
];var AZH=[0,200];var AZI=[0,40,240,73];var AyD=[0,0,30,40];var AZJ=[0,40,30,80];
var AyE=[60,40];var Atj=[60,0];var AZK=[10,0,40,40];var AIC=[0,190,240,260];var AZL=[
0,130,240,190];var AID=[40,40,200,130];var AIE=[90,230,170,253];var AZM=[80,190,
170,223];var AZN=[0,130,240,180];var AZO=[0,250,240,280];var AZP=[129,0,156,40];
var AZQ=[72,0,100,40];var AZR=[100,0,129,40];var AZS=[78,8,103,33];var AIF=[0,0,
300,120];var AZT=[1,-1];var AZU=[20,40,240,120];var AZV=[20,0,240,40];var AZW=[0
,118,240,120];var AZX=[0,20,130,40];var AZY=[130,20,240,40];var AZZ=[0,0,10,20];
var AIG="\u2191";var AZ0=[230,0,240,20];var Atk=[0,40,232,80];var AZ1=[0,80,232,
160];var AZ2=[0,160,230,240];var AIH=" p. p.";var AZ3="Unknown animal type";var AZ4=[
80,0,140,40];var Brc=[50,0,172,40];var Brd=[172,0,240,40];var Bre=[0,90,240,92];
var Bar="Unhandled menu item";var Bas=[0,0,50,30];var Atl=[0,0,30,30];var Brf="No AnimalActionTemperatureScreen found!";
var Brg="840003123456789";var Brh=[40,0,230,40];var Bri=[50,10,230,30];var AZ5="No AnimalMultiInfoScreen found!";
var AII=[0,0,25,40];var Bat="/^";var Bau="?/?";var Brj=[100,4,180,40];var Brk=[65
,0,99,40];var Brl=[165,0,200,40];var Bav=[0,0,60,40];var Baw="9999/^9999";var Brm=
"Invalid index: ";var Brn="Unknown AnimalIdGenerationMethod: ";var Bro="Invalid gender: ";
var Atm="Invalid input state: ";var Brp="Unhandled AnimalIdGenerationMethod";var
Brq=[42,35,67,75];var Brr=[5,35,39,75];var Brs=[70,40,228,70];var Brt="Invalid direction for setting focus";
var Ah4="Invalid index";var Bru="Unvalid direction";var Brv=[0,0,42,30];var Bax=[
22,0,42,30];var Brw=[20,0,40,30];var Brx=[0,0,158,30];var Bay=[32,0,62,30];var Baz=[
64,0,94,30];var BaA=[96,0,126,30];var Bry=[128,0,158,30];var Brz=" %% ";var BrA=[
0,70,240,220];var BrB=[0,237,240,307];var BaB="\n44 %% done";var BrC=[0,0,166,30
];var AIJ=[0,0,12,30];var AyF=[14,0,26,30];var AZ6=[28,0,40,30];var AZ7=[42,0,54
,30];var AZ8=[56,0,68,30];var AZ9=[70,0,82,30];var AZ_=[84,0,96,30];var AZ$=[98,
0,110,30];var BaC=[112,0,124,30];var A0a=[126,0,138,30];var BrD=[140,0,152,30];var
BrE=[154,0,166,30];var BaD=[20,0,46,30];var BrF="\u2642";var BrG="{fnt3}\u2642{fnt1}";
var BrH="\u2640";var BrI="{fnt3}\u2640{fnt1}";var BrJ="{parc}";var BrK=[30,30,210
,80];var BrL="Implement in derieved class!";var BrM=[60,4,226,34];var BaE=[30,4,
58,34];var BaF=[4,0,27,40];var BrN=[116,4,228,34];var BrO=[60,4,86,34];var BrP=[
88,4,114,34];var Aox="Implement in derived class!";var BaG="Implement in derived class.";
var BrQ="Invalid nais id view: ";var BrR=[0,35,240,75];var BrS=[0,0,110,30];var BrT=[
0,0,26,30];var BrU="100";var A0b="\n\n";var BrV=[240,240];var BrW=[0,240];var BrX=
"Unknown rated attribute: ";var BrY=[120,80,240,280];var BrZ=[0,80,120,280];var AIK=
" %% (";var AyG=" \xB1 ";var AyH=" (n = ";var A0c=[0,80,232,120];var Br0=[0,242,
232,282];var A0d=[0,280,232,320];var Br1=[35,0,200,40];var Br2=[1,0,31,40];var Br3=[
32,40];var Br4=[32,0];var Br5=[3,0,83,40];var BaH=[180,0,240,40];var Br6=[120,0,
180,40];var Br7=[65,0,125,40];var Br8=[0,0,120,200];var Br9=[0,40,120,150];var BaI=[
15,160,60,190];var BaJ=[60,160,105,190];var Br_=[0,65,240,135];var Br$=[10,112,170
,192];var Bsa=[178,129,248,173];var Bsb=[0,40,240,110];var Bsc=[10,98,170,178];var
Bsd=[178,112,248,156];var Bse=[85,190,160,265];var Bsf=[89,194,155,260];var Bsg=[
26,190,111,250];var Bsh=[125,181,225,211];var Bsi=[100,220,183,250];var Bsj="38.7";
var Bsk=[180,220,225,250];var Bsl="\xB0C";var Bsm=[0,99,240,178];var Bsn=[100,280
,140,320];var Bso=[0,26,240,105];var BaK=[30,40];var BaL=[30,0];var Bsp=[149,0,200
,40];var Bsq=[145,40];var Bsr=[145,0];var Bss=[38,0,88,40];var A0e=[0,0,35,40];var
Bst=[0,0,50,40];var Bsu=[40,0,200,40];var Bsv=[95,0,145,40];var Bsw=[65,5,223,35
];var A0f=[0,0,15,40];var Bsx=[72,0,140,40];var BaM="\n(";var Bsy="%y/%m/%d";var
Bsz="%y ";var BsA=" %m ";var BsB=" %d ";var BsC="20";var BsD=[225,0,240,40];var BsE=[
0,400,232,440];var BsF=[0,440,232,480];var BsG=[0,480,232,520];var BsH=[0,520,232
,560];var BsI=[0,560,232,600];var BsJ=[0,598,232,638];var BsK=[5,0,215,40];var BsL=[
215,8,240,33];var BsM="Implement in dervied class.";var BsN="ERROR: Unhandled temperature unit: ";
var AIL="ERROR: Unhandled mass unit: ";var BsO=[-1,160,115,280];var BsP=[114,160
,230,280];var A0g=[116,40,232,160];var AyI="Unknown weight class index: ";var BsQ=
"< 35";var BsR="35 - 40";var BsS="40 - 45";var BsT="45 - 50";var BsU="\u2265 50";
var BsV="< 80";var BsW="80 - 90";var BsX="90 - 100";var BsY="100 - 110";var BsZ=
"\u2265 110";var BaN="Unknown mass unit";var Bs0=[143,0,193,40];var BaO=[192,0,240
,40];var Bs1=[44,28,44,28];var Bs2="0 %%";var Bs3=[-1,40,115,160];var Bs4=[117,40
,233,160];var Bs5=[1,160,117,280];var Bs6=[114,158,230,278];var Bs7=[1,280,117,400
];var Bs8=[30,0,155,40];var BaP="\u2620";var A0h=[380,150,380,190];var BaQ=[105,
0,155,50];var A0i=[190,1,240,41];var Bs9=[72,0,108,40];var Bs_=[108,0,180,40];var
Bs$=[60,0,94,40];var Bta=[94,0,200,40];var Btb="Scroll direction not supported.";
var Btc=[44,0,207,40];var Btd=[207,0,240,40];var Bte="99";var Btf="Unknown birth type";
var Btg=[44,0,189,40];var Bth=[5,0,44,40];var Bti=[44,0,240,40];var Btj=[240,0,240
,40];var Btk="\u25C9";var BaR="\u25CB";var Btl=[75,4,215,34];var Btm=[47,4,73,34
];var BaS=[17,4,45,34];var Btn=[0,0,138,30];var Bto=[47,4,215,34];var A0j="Unhandled MotherSelectionFilterMode: ";
var Btp="Read only!";var Btq="actions array too small to hold all actions";var Btr=[
120,40];var Bts=[120,0];var Btt=[5,0,115,40];var Btu=[0,0,205,40];var Btv=[59,4,
170,34];var Btw=[59,1,173,37];var Btx=[175,1,205,37];var Bty=[0,0,37,40];var Btz=[
115,98,205,188];var BtA=[0,40,235,100];var BtB=[2,200,240,280];var BtC=" 01234";
var BtD=[0,0];var BtE=[33,63];var BtF=[25,56];var BtG="Unknown transponder image type: ";
var AIM=[0,0,82,82];var BtH=[0,0,81,26];var BtI=[105,120,195,210];var BtJ=[10,140
,100,230];var BaT="Unhandled EartagNrAssignmentMode: ";var BtK="Unhandled Gender";
var BtL=[10,35,35,75];var BtM=[44,40,202,70];var BtN=[204,35,232,75];var BtO="Unvalid FatoryResetScope";
var BaU=[0,120,240,200];var BtP=[144,0,192,40];var BtQ=[144,0,240,40];var BtR=[195
,0,245,50];var BtS=[120,0,120,40];var BtT=[140,0,240,30];var BtU=[30,0,232,40];var
BtV=[60,0,160,40];var BtW=[160,0,200,40];var BtX=[150,17,200,40];var BtY=[155,40
];var BtZ=[155,0];var Bt0=[146,80,240,160];var Bt1=[56,80,146,160];var Bt2=[0,80
,56,160];var Bt3=[13,107,47,141];var Bt4=[74,109,104,139];var Bt5=[50,100,130,150
];var Bt6=[55,112,145,140];var Bt7=[146,112,236,140];var Bt8=[150,86,223,110];var
AIN=[0,40,240,120];var Bt9="Menu item for animal table field not found";var BaV=[
0,360,240,440];var Bt_=[0,440,240,520];var Bt$=[5,40,235,104];var Bua=[120,108,226
,218];var Bub=[20,120,110,210];var Buc=[5,223,235,280];var Bud=[0,0,64,30];var Bue=[
44,0,64,30];var Buf=[185,5,225,35];var Bug=[170,5,234,35];var Buh="Unhandled number of digits";
var Bui=[0,0,126,30];var Buj=[22,5,149,35];var Buk=[149,0,232,40];var BaW=[5,20];
var Bul=[5,0];var Bum="Unhandled AnimalIdAutoGenerationMethod: ";var Bun=[4,440,
236,520];var Buo="Unhandled TransponderAssignmentIdChangeMethod: ";var Bup="\n";
var Buq="%";var Bur=[0,0,160,120];var Bus=[2,2,157,117];var But=[50,70];var Buu=[
50,50];var Buv=[0,0,168,40];var Buw=[168,0,240,40];var Bux=[0,47,232,77];var Buy=[
65,0,101,40];var Buz=[135,0,175,40];var BuA=[85,17,135,40];var BuB=[125,17,175,40
];var BuC=[40,0];var BaX=[0,40,230,280];var BuD="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuE="ERROR: Received more animal table fields than expected!";
var BuF=[0,80,240,130];var BuG="Unhandled Device::MassDeregistrationCriterion: ";
var BuH=[0,80,240,200];var BaY="Unhandled BackupError: ";var BuI="Unhandled PopupId: ";
var BuJ=[203,0,240,40];var BuK=[168,0,203,40];var BuL=[35,0,152,40];var BuM=[0,0
,84,40];var BuN=[84,0,167,40];var BuO="Unhandled TransponderLinkageIdChangeMethod: ";
C.AML={Device:null,A6e:null,GK:null,Init:function(aArg){},DriveCursorHitting:function(
Td,BF,Fh){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GK._Init.call(this.
GK={I:this},0);this.__proto__=C.AML;this.H(Ce);this.J(this.GK,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A6e=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J6=
this._variants();if(J6){this.K={};J6._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GK._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GK.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A6e)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A5m._variants();
},K:null,_className:"Application::Application"};C.Asx=[240,320];C.AB={Background:
null,Ek:null,ADe:null,An7:0,Init:function(aArg){A.pe([this,this.A0S],this);A.pe([
this,this.Bfa],this);},LO:function(G){},A0S:function(s){this.LO(s);},CC:function(
G){},AIP:function(s){this.CC(s);},E4:function(G){},AyJ:function(s){this.E4(s);},
Dr:function(E){if(this.ADe===E)return;this.ADe=E;A.pe([this,this.Bfa],this);},Bfa:
function(G){var B;if(!!this.ADe)this.Ek.Ab2((C.BQ.isPrototypeOf(B=A._NewObject(this.
ADe,0))?B:null));else this.Ek.Ab2(null);},_Init:function(aArg){C.Abi._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ek._Init.call(this.
Ek={I:this},0);this.__proto__=C.AB;this.Background.A0(0x3F);this.Background.H(Ce
);this.Background.L(A.jb.CT);this.Ek.H(BD);this.Ek.Ar(false);this.J(this.Background
,-1);this.J(this.Ek,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abi;this.
Background._Done();this.Ek._Done();C.Abi._Done.call(this);},_ReInit:function(){C.
Abi._ReInit.call(this);this.Background._ReInit();this.Ek._ReInit();},_Mark:function(
D){var B;C.Abi._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WQ={Ij:null,Zp:function(E){var B;if(this.Ij===E)return;if(!!this.Ij)this.AqF(
this.Ij,null,null,null,[B=this.Ij,B.AyJ],null,false);this.Ij=E;if(!!this.Ij)this.
AkM(this.Ij,null,null,null,null,null,null,[B=this.Ij,B.AIP],null,false);},AEA:function(
){return this.Ij;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WQ;this.H([0,0,C.Asx[0],C.Asx[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Ij)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Oz={U9:null,Q:null,AnL:null,ZC:null,NT:null,Ox:null,TG:null,TH:null,AGj:255,
ID:function(G){var F;if(!!this.Q){this.A2n();var Ada=(F=this.Q,F[1].call(F[0]));
if(Ada>20)this.Ox.L(A.jb.E1);else this.Ox.L(A.jb.Gj);this.Ox.L((this.Ox.AQ&0x00FFFFFF
)|(this.AlL(Ada,0,30)<<24));this.TG.L((this.TG.AQ&0x00FFFFFF)|(this.AlL(Ada,31,60
)<<24));this.TH.L((this.TH.AQ&0x00FFFFFF)|(this.AlL(Ada,61,100)<<24));}},A0Q:function(
s){this.ID(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0Q],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0Q],E,0);if(!!E)A.pe([this,
this.A0Q],this);},A3C:function(G){var F;if(!!this.AnL)this.ZC.Ar((F=this.AnL,F[1
].call(F[0])));else this.ZC.Ar(false);this.A_B(255);},A_t:function(E){if(A.aaZ(this.
AnL,E))return;if(!!this.AnL)A.z$([this,this.A3C],this.AnL,0);this.AnL=E;if(!!E)A.
zX([this,this.A3C],E,0);if(!!E)A.pe([this,this.A3C],this);},A_B:function(E){if(this.
AGj===E)return;this.AGj=E;if(!!this.U9)this.U9.L((this.U9.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlL:function(A0W,Bcm,BxW){if(A0W<Bcm)return 0;else if((A0W>=Bcm)&&(A0W<
BxW))return this.AGj&0xFF;else return 255;},A2n:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U9=this.TH;else if((F=this.Q,F[1].call(F[0]))>
30)this.U9=this.TG;else this.U9=this.Ox;}else this.U9=null;},BlB:function(){return this.
AGj;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZC._Init.call(this.ZC={
I:this},0);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.AL._Init.call(this.Ox={
I:this},0);A.acg.AL._Init.call(this.TG={I:this},0);A.acg.AL._Init.call(this.TH={
I:this},0);this.__proto__=C.Oz;this.H(E7);this.ZC.Fr(2000);this.NT.H(E7);this.NT.
L(A.jb.Text);this.Ox.H(Hr);this.Ox.L(A.jb.E1);this.TG.H(IV);this.TG.L(A.jb.E1);this.
TH.H(Is);this.TH.L(A.jb.E1);this.J(this.NT,0);this.J(this.Ox,0);this.J(this.TG,0
);this.J(this.TH,0);this.ZC.Q=[this,this.BlB,this.A_B];this.NT.Ax(A.aaL(A.ach.AMW
));},_Done:function(){this.__proto__=A.Core.P;this.ZC._Done();this.NT._Done();this.
Ox._Done();this.TG._Done();this.TH._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZC._ReInit();this.NT._ReInit();this.Ox._ReInit(
);this.TG._ReInit();this.TH._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnL)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ox)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZC={_Init:function(aArg){A.acl.Gm._Init.call(
this,aArg);this.__proto__=C.ZC;this.AkY=true;this.B2=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ek={GK:null,AR:null,Background:null,Oz:null,Bo:
null,Dn:null,K8:0,Avp:0,Avq:0,Ao2:0,LI:false,KH:false,Qv:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hf){this.Ao2=A.jb.CT;this.K8=A.jb.Text;}else if(GE){this.Ao2=
this.Avp;this.K8=this.Avq;}else if(Fw){this.Ao2=this.Avp;this.K8=this.Avq;}else{
this.Ao2=A.jb.CT;this.K8=A.jb.Text;}this.Background.L(this.Ao2);if(!!this.GK){this.
GK.WF(this.Ao2);this.GK.Df(this.K8);}this.LI=Hf;this.KH=Fw;this.Qv=GE;},Qu:function(
G){this.Am();A.pe(this.AR,this);},AiR:function(G){if(this.Dn.Ach)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab2:function(
E){if(this.GK===E)return;if(!!this.GK)this.HP(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.Am();},A_c:function(E){if(this.Avp===E)return;this.
Avp=E;this.Am();},A_d:function(E){if(this.Avq===E)return;this.Avq=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.Oz._Init.call(this.Oz={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=C.Ek;var B;this.
H(BD);this.Background.A0(0x3F);this.Background.H(BD);this.Background.L(A.jb.CT);
this.Oz.H(O4);this.K8=A.jb.Text;this.Bo.PV(0);this.Bo.WG(50);this.Dn.Filter=1;this.
Avp=A.jb.AV;this.Avq=A.jb.Bm;this.Ao2=A.jb.Text;this.J(this.Background,0);this.J(
this.Oz,0);this.Oz.Au([B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyK]);this.Oz.
A_t([B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyL]);this.Bo.MC=[this,this.Qu];
this.Dn.BL=[this,this.AiR];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Oz._Done();this.Bo._Done();this.Dn._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
Oz._ReInit();this.Bo._ReInit();this.Dn._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Oz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X2={AeO:null,UD:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeO={I:this},0);A.acg.Text._Init.call(this.UD={I:
this},0);this.__proto__=C.X2;this.AeO.H(P_);this.UD.H(P$);this.UD.R(A.jV);this.UD.
L(A.jb.Text);this.UD.Z(false);this.J(this.AeO,0);this.J(this.UD,0);this.AeO.Ax(null
);this.UD.S(A.aaL(A.fl.EK));var J6=this._variants();if(J6){this.K={};J6._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeO._Done();this.UD._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeO._ReInit();this.UD._ReInit();this.UD.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UD)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
X2._variants();},K:null,_className:"Application::BootScreen"};C.AU3={AAF:function(
G){A._GetAutoObject(C.A8).Ab9(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AU3;this.Background.L(0xFF000000);this.Ek.Z(false);},_className:
"Application::SleepScreen"};C.AvC={DY:null,Y:null,Yc:null,Yd:null,VJ:null,X5:null
,VK:null,X3:null,X8:null,TL:null,X7:null,Ye:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Arw,B.Atn],0);A._GetAutoObject(A.Device.Helper).AkQ();this.Bb(this.VJ);this.
N.Cw(A.aaL(A.ach.ADK));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A3b=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A3b)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJ3=A._NewObject(A.acl.AGg,0);AJ3.Fr(250);AJ3.HO(1);AJ3.WI(6);this.
Y.HI(this.AV,true,AJ3,null);}},CC:function(G){this.A4I(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Asr();},Fk:function(G){
var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.
Ay.Mz(-this.Y.Br[1]);},Ih:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VJ)A._GetAutoObject(C.A8).Cd(35);else if(Cy===this.X5)A._GetAutoObject(
C.A8).Cd(34);else if(Cy===this.X8)A._GetAutoObject(C.A8).Cd(69);else if(Cy===this.
VK)A._GetAutoObject(C.A8).Cd(8);else if(Cy===this.X3)A._GetAutoObject(C.A8).Cd(50
);else if(Cy===this.TL)A._GetAutoObject(C.A8).Cd(25);else if(Cy===this.Yc)A._GetAutoObject(
C.A8).Cd(77);else if(Cy===this.Yd)A._GetAutoObject(C.A8).Cd(70);else if(Cy===this.
Ye)A._GetAutoObject(C.A8).Cd(6);else if(Cy===this.X7)A._GetAutoObject(C.A8).Cd(63
);},BA7:function(G){A._GetAutoObject(A.Device.Device).Ae2(!A._GetAutoObject(A.Device.
Device).AmS);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmS)this.N.Hy((
A.aaR(A.acf.A7H)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hy((A.aaR(A.acf.
A7H)+CQ)+A.aaR(A.acf.A8m).toLowerCase());},Adw:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A4I:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).Mt());this.VK.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fo._Init.call(this.Yc={I:this
},0);C.Fo._Init.call(this.Yd={I:this},0);C.Fo._Init.call(this.VJ={I:this},0);C.Fo.
_Init.call(this.X5={I:this},0);C.QX._Init.call(this.VK={I:this},0);C.Fo._Init.call(
this.X3={I:this},0);C.Fo._Init.call(this.X8={I:this},0);C.Fo._Init.call(this.TL={
I:this},0);C.Fo._Init.call(this.X7={I:this},0);C.Fo._Init.call(this.Ye={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AvC;this.Background.L(A.
jb.CT);this.N.Ar(false);this.N.Z(true);this.Dr(C.Aq0);this.DY.A0(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Y.H(L3);this.Y.JV(9);this.Yc.H(Qa);this.Yc.Aj(true);
this.Yc.T(A.aaR(A.acf.Gr));this.Yd.H(J5);this.Yd.Aj(true);this.Yd.T(A.aaR(A.acf.
A75));this.VJ.H(Oc);this.VJ.Aj(true);this.VJ.T(A.aaR(A.acf.Vw));this.X5.H(Qb);this.
X5.Aj(true);this.X5.T(A.aaR(A.acf.Ty));this.VK.H(MJ);this.VK.Aj(true);this.VK.T(
A.aaR(A.acf.APL));this.X3.H(S$);this.X3.Aj(true);this.X3.T(A.aaR(A.acf.Animal));
this.X8.H(J5);this.X8.Aj(true);this.X8.T(A.aaR(A.acf.A7K));this.TL.H(UT);this.TL.
Ar(true);this.TL.Aj(true);this.TL.Z(true);this.TL.T(A.aaR(A.acf.A6u));this.X7.H(
Z5);this.X7.Aj(true);this.X7.T(A.aaR(A.acf.Device));this.Ye.H(W8);this.Ye.Aj(true
);this.Ye.T(A.aaR(A.acf.Settings));this.Ay.H(It);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.Yc,0);this.J(this.Yd,0);this.J(this.VJ,0);this.J(this.X5,0);this.
J(this.VK,0);this.J(this.X3,0);this.J(this.X8,0);this.J(this.TL,0);this.J(this.X7
,0);this.J(this.Ye,0);this.J(this.Ay,0);this.N.CE=[this,this.BA7];this.N.Cf=[this
,this.Adw];this.Y.Em=[this,this.Fk];this.Yc.AR=[this,this.Ih];this.Yc.DB(A.aaL(A.
ach.ADN));this.Yd.AR=[this,this.Ih];this.Yd.DB(A.aaL(A.ach.ADQ));this.VJ.AR=[this
,this.Ih];this.VJ.DB(A.aaL(A.ach.APQ));this.X5.AR=[this,this.Ih];this.X5.DB(A.aaL(
A.ach.AP3));this.VK.AR=[this,this.Ih];this.VK.DB(A.aaL(A.ach.AQq));this.X3.AR=[this
,this.Ih];this.X3.DB(A.aaL(A.ach.APU));this.X8.AR=[this,this.Ih];this.X8.DB(A.aaL(
A.ach.AQA));this.TL.AR=[this,this.Ih];this.TL.DB(A.aaL(A.ach.AQf));this.X7.AR=[this
,this.Ih];this.X7.DB(A.aaL(A.ach.AQc));this.Ye.AR=[this,this.Ih];this.Ye.DB(A.aaL(
A.ach.AQU));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.Yc._Done();this.Yd._Done();this.VJ._Done();this.X5._Done();
this.VK._Done();this.X3._Done();this.X8._Done();this.TL._Done();this.X7._Done();
this.Ye._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Yc._ReInit();this.Yd.
_ReInit();this.VJ._ReInit();this.X5._ReInit();this.VK._ReInit();this.X3._ReInit(
);this.X8._ReInit();this.TL._ReInit();this.X7._ReInit();this.Ye._ReInit();this.Ay.
_ReInit();this.Yc.T(A.aaR(A.acf.Gr));this.Yd.T(A.aaR(A.acf.A75));this.VJ.T(A.aaR(
A.acf.Vw));this.X5.T(A.aaR(A.acf.Ty));this.VK.T(A.aaR(A.acf.APL));this.X3.T(A.aaR(
A.acf.Animal));this.X8.T(A.aaR(A.acf.A7K));this.TL.T(A.aaR(A.acf.A6u));this.X7.T(
A.aaR(A.acf.Device));this.Ye.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Ra={Number:null,Jh:null,IU:null,TE:null,AsN:0,Init:function(aArg){var B;A.zX([
this,this.Bb0],[B=A._GetAutoObject(A.Device.Device),B.AST,B.A0w],0);A.pe([this,this.
Bb0],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An8();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhM();},E4:function(G){A._GetAutoObject(A.Device.
Device).An0();},Al6:function(G){var F;this.Am();this.TE.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aeo.Ar(true);if(!this.TE.Bw)(F=this.TE.Q,F[2].call(F[0],this.TE.
B2));},Bb0:function(s){this.Al6(s);},An8:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gj);break;case 3:this.Background.
L(A.jb.H9);break;default:this.Background.L(A.jb.CJ);}},AkG:function(E){if(this.AsN===
E)return;this.AsN=E;this.Jh.AkG(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jh._Init.call(this.Jh={I:this}
,0);A.acg.Ap._Init.call(this.IU={I:this},0);A.acl.Gm._Init.call(this.TE={I:this}
,0);this.__proto__=C.Ra;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(UU);this.Number.KS(true);this.Number.L(A.jb.Text);this.Jh.H(Z6);this.Jh.AkG(0);
this.IU.H(W9);this.IU.L(A.jb.AV);this.IU.Zr(true);this.TE.Fr(1750);this.TE.Uq(750
);this.TE.AkB(0);this.TE.Ar(true);this.TE.B2=3;this.J(this.Number,0);this.J(this.
Jh,0);this.J(this.IU,0);this.Number.S(A.aaL(A.fl.Af));this.IU.Ax(A.aaL(A.ach.ADP
));this.TE.Q=[B=this.IU,B.ASG,B.Cv];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jh._Done();this.IU._Done();this.TE._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jh._ReInit();this.IU._ReInit();this.TE._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fo={C9:null,ADB:null,AR:null,Bo:null,Dn:null,Background:
null,Ms:null,OF:null,Q3:null,G_:null,A5N:true,LI:false,KH:false,Qv:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hi.Bl.call(this,aSize);this.Ms.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q3.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OF.H(this.Q3.M);this.G_.H([].concat(0,this.G_.M.slice(1,4)));this.G_.H(A.abN(
this.G_.M,aSize[0]));this.G_.H(A.abP(this.G_.M,0));this.G_.H([].concat(this.G_.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hi.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hf){this.Q3.L(A.jb.Am4);this.
G_.L(A.jb.CJ);this.OF.Z(true);this.OF.L(A.jb.ARa);this.Ms.Z(false);}else if(GE){
this.Q3.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OF.Z(false);this.Ms.Z(true);}else if(
Fw){this.Q3.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OF.Z(false);this.Ms.Z(true);}else{
this.Q3.L(A.jb.Text);this.G_.L(A.jb.Text);this.OF.Z(true);this.OF.L(A.jb.CT);this.
Ms.Z(false);}this.LI=Hf;this.KH=Fw;this.Qv=GE;},Qu:function(G){this.Am();A.pe(this.
AR,this);},AiR:function(G){if(this.Dn.Ach)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G_.R(E);},DB:function(E){if(this.C9===E)return;this.C9=E;this.Q3.
Ax(E);this.OF.Ax(E);},Ab1:function(E){if(this.A5N===E)return;this.A5N=E;this.G_.
Z(E);},Ab4:function(E){if(this.ADB===E)return;this.ADB=E;this.Ms.Ax(E);this.Ms.H(
A.abK(this.Ms.M,E.FrameSize));},_Init:function(aArg){C.Hi._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dn={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Ms={
I:this},0);A.acg.Ap._Init.call(this.OF={I:this},0);A.acg.Ap._Init.call(this.Q3={
I:this},0);C.CG._Init.call(this.G_={I:this},0);this.__proto__=C.Fo;this.H(Z7);this.
Bo.PV(0);this.Bo.WG(50);this.Dn.Filter=1;this.Background.H(W_);this.Background.Z(
false);this.Ms.A0(0x14);this.Ms.L(A.jb.AV);this.Ms.Cv(0);this.OF.L(A.jb.CT);this.
OF.Cv(1);this.G_.H(Z8);this.J(this.Background,0);this.J(this.Ms,0);this.J(this.OF
,0);this.J(this.Q3,0);this.J(this.G_,0);this.Bo.MC=[this,this.Qu];this.Dn.BL=[this
,this.AiR];this.Ms.Ax(A.aaL(A.ach.NW));this.OF.Ax(A.aaL(A.ach.AvO));this.Q3.Ax(A.
aaL(A.ach.AvO));this.G_.S(A.aaL(A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(
A.aaL(A.fl.Bh));this.ADB=A.aaL(A.ach.NW);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hi;this.Bo._Done();this.Dn._Done();this.Background._Done();this.Ms._Done(
);this.OF._Done();this.Q3._Done();this.G_._Done();C.Hi._Done.call(this);},_ReInit:
function(){C.Hi._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit();this.Background.
_ReInit();this.Ms._ReInit();this.OF._ReInit();this.Q3._ReInit();this.G_._ReInit(
);this.G_.S(A.aaL(A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.C9)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axk:null,Background:null,O0:null,Asi:0,Ak9:10,AjF:100,AQ:0,AoV:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O0.H([].concat(2,this.O0.M.slice(1,4)));this.O0.H(A.abN(this.O0.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af6=this.Ak9<this.AjF;var AJB=(
B=this.M)[3]-B[1];var A20=10;var Auu=AJB;var A4F=0;if(10>AJB)A20=AJB;if(this.Ak9<
this.AjF)Auu=((Auu*this.Ak9)/this.AjF)|0;if(Auu<A20)Auu=A20;if(this.Ak9<this.AjF
)A4F=((this.Blz()*(AJB-Auu))/(this.AjF-this.Ak9))|0;this.O0.H(A.abP(this.O0.M,A4F
));this.O0.H([].concat(this.O0.M.slice(0,3),A4F+Auu));this.O0.Z(Af6);this.Background.
Z(Af6);if(!!this.Axk&&(this.AoV!==Af6))A.pe(this.Axk,this);this.AoV=Af6;},Blz:function(
){var E=this.Asi;var HD=this.AjF-this.Ak9;if((HD>0)&&(E>HD))E=HD;if(HD<=0)E=0;return E;
},Mz:function(E){if(E<0)E=0;if(this.Asi===E)return;this.Asi=E;this.Am();},MB:function(
E){if(E<0)E=0;if(this.Ak9===E)return;this.Ak9=E;this.Am();},My:function(E){if(E<
0)E=0;if(this.AjF===E)return;this.AjF=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.O0.L(E);},BnI:function(E){if(A.aa0(this.Axk,E))return;this.
Axk=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.O0={I:this},0);this.__proto__=
C.Ay;this.H(Z9);this.Ar(false);this.AQ=A.jb.AV;this.Background.A0(0x0);this.Background.
H(UV);this.Background.L(A.jb.CT);this.O0.A0(0x0);this.O0.H(UV);this.O0.L(A.jb.AV
);this.J(this.Background,0);this.J(this.O0,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.O0._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.O0._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axk)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cg={Hj:null,Y:null,Ay:null,Ap:null,A7a:A.jV,Init:function(aArg){A.pe([this,this.
ABc],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);this.ABc(this);},Al3:
function(G){if(!!this.N.CE)A.pe(this.N.CE,this);},ApM:function(G){if(!!this.N.B$
)A.pe(this.N.B$,this);},AAF:function(G){if(!!this.N.Cf)A.pe(this.N.Cf,this);},Fk:
function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[
3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);A.pe([this,this.BBt],this);},ABc:function(G){
var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C1(A.
aaL(A.ach.YA));this.N.CE=[this,this.Ew];if(!!GZ&&!!GZ.Amr){this.N.Fc(A.jV);this.
N.JA.C3(255);this.N.ArP(GZ.AqQ);this.N.Cw(GZ.AvL);this.N.Cf=GZ.Amr;}else{this.N.
Fc(A.jV);this.N.Cw(null);this.N.Cf=null;}if(!!GZ&&!!GZ.Agw){this.N.CR(GZ.AxP);this.
N.GW.C3(GZ.Axl);this.N.Anz(GZ.AmU);this.N.C2(GZ.Aq7);this.N.B$=GZ.Agw;}else{this.
N.CR(A.jV);this.N.C2(null);this.N.B$=null;}},Jb:function(E){if(this.A7a===E)return;
this.A7a=E;this.Hj.R(E);},Ew:function(G){A._GetAutoObject(C.A8).FB();},BBt:function(
G){var B;var BAn=this.Ay.Background.Fq();var Bed=(BAn?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajf=X;
X=X.Ah;if(((Ajf.U&0x400)===0x400)){if(!!(A.Core.Akh.isPrototypeOf(Ajf)?Ajf:null)
){var Bej=(A.Core.Akh.isPrototypeOf(Ajf)?Ajf:null);Bej.DC([Bed,Bej.ED[1]]);}else
if(!!(A.Core.Eu.isPrototypeOf(Ajf)?Ajf:null)){var Bgd=(A.Core.Eu.isPrototypeOf(Ajf
)?Ajf:null);Bgd.H(A.abN(Bgd.M,Bed));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hj={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cg;this.N.Z(true);this.Hj.H(W$);this.Hj.Ar(false);this.Hj.R(A.aaR(A.
acf.Settings));this.Hj.L(A.jb.Text);this.Y.H(Ff);this.Y.JV(1);this.Ay.H(It);this.
Ap.H(O5);this.Ap.L(A.jb.Text);this.J(this.Hj,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hj.S(A.aaL(A.fl.Kp));this.Hj.AZ(A.aaL(A.fl.HJ));this.Y.
Em=[this,this.Fk];this.Ap.Ax(A.aaL(A.ach.ADi));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hj._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hj._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hj.R(A.aaR(A.acf.Settings
));this.Hj.S(A.aaL(A.fl.Kp));this.Hj.AZ(A.aaL(A.fl.HJ));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq0={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bg_],[B=
A._GetAutoObject(A.Device.Helper),B.U3,B.U6],0);},Df:function(E){C.BQ.Df.call(this
,E);this.Text.L(E);},Bg_:function(G){this.Text.R(A._GetAutoObject(A.acj.KM).Bi9(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq0;this.Timer.WG(1);this.Timer.Ar(true);
this.Text.H(Z_);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.MC=[this,this.Bg_
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BQ;this.Timer._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BQ={KT:0xFFFFFFFF,LS:0,Df:function(E){if(
this.KT===E)return;this.KT=E;},WF:function(E){if(this.LS===E)return;this.LS=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BQ;this.H(O6
);},_className:"Application::HeaderContent"};C.N={VZ:null,V0:null,V1:null,Ag4:null
,Ag5:null,Ag6:null,CE:null,Cf:null,B$:null,Background:null,NK:null,Jf:null,JA:null
,GW:null,PB:null,I9:null,Le:null,T1:null,T2:null,An2:A.jV,An3:A.jV,An4:A.jV,Aq8:
0,Aq9:0,Aq_:0,Ahm:0,ZE:false,WN:false,Aso:false,AsD:false,AsC:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VZ)this.Jf.S(this.VZ);if(!!this.V0)this.JA.S(this.
V0);if(!!this.V1)this.GW.S(this.V1);switch(this.Ahm){case 0:{this.NK.Z(false);this.
Jf.L(A.jb.Bm);this.JA.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PB.L(A.jb.Bm);this.I9.L(
A.jb.Bm);this.Le.L(A.jb.Bm);}break;case 1:{if(!this.Ag4)this.NK.H(A.aaT(this.Jf.
ASy(),Rn));else this.NK.H(this.PB.Dc());this.NK.Z(true);this.Jf.L(A.jb.Text);this.
JA.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PB.L(A.jb.Text);this.I9.L(A.jb.Bm);this.Le.
L(A.jb.Bm);}break;case 3:{if(!this.Ag6)this.NK.H(A.aaT(this.GW.ASy(),Rn));else this.
NK.H(this.Le.Dc());this.NK.Z(true);this.Jf.L(A.jb.Bm);this.JA.L(A.jb.Bm);this.GW.
L(A.jb.Text);this.PB.L(A.jb.Bm);this.I9.L(A.jb.Bm);this.Le.L(A.jb.Text);}break;case
2:{if(!this.Ag5)this.NK.H(A.aaT(this.JA.ASy(),Rn));else this.NK.H(this.I9.Dc());
this.NK.Z(true);this.Jf.L(A.jb.Bm);this.JA.L(A.jb.Text);this.GW.L(A.jb.Bm);this.
PB.L(A.jb.Bm);this.I9.L(A.jb.Text);this.Le.L(A.jb.Bm);}break;default:{this.NK.Z(
false);A.ab5("%s",Xa);}}if(!!this.PB.Al){this.PB.Z(true);this.Jf.Z(false);}else{
this.PB.Z(false);this.Jf.Z(true);}if(this.An3.length<=0){this.I9.Z(true);this.JA.
Z(false);}else{this.I9.Z(false);this.JA.Z(true);}if(!!this.Le.Al){this.Le.Z(true
);this.GW.Z(false);}else{this.Le.Z(false);this.GW.Z(true);}},Hy:function(E){if(this.
An2===E)return;this.An2=E;this.Jf.R(E);this.Am();},Fc:function(E){if(this.An3===
E)return;this.An3=E;this.JA.R(E);this.Am();},CR:function(E){if(this.An4===E)return;
this.An4=E;this.GW.R(E);this.Am();},AFo:function(E){if(this.Ahm===E)return;this.
Ahm=E;this.Am();},AFf:function(E){if(this.VZ===E)return;this.VZ=E;this.Jf.S(E);this.
Am();},ArP:function(E){if(this.V0===E)return;this.V0=E;this.JA.S(E);this.Am();},
Anz:function(E){if(this.V1===E)return;this.V1=E;this.GW.S(E);this.Am();},A3R:function(
G){this.Am();},C1:function(E){if(this.Ag4===E)return;this.Ag4=E;this.PB.Ax(E);this.
Am();},Cw:function(E){if(this.Ag5===E)return;this.Ag5=E;this.I9.Ax(E);this.Am();
},C2:function(E){if(this.Ag6===E)return;this.Ag6=E;this.Le.Ax(E);this.Am();},OQ:
function(E){if(this.AsC===E)return;this.AsC=E;this.T1.Z(E);if(E)this.Jf.H([].concat(
this.T1.M[2],this.Jf.M.slice(1,4)));else this.Jf.H([].concat(0,this.Jf.M.slice(1
,4)));this.Am();},OR:function(E){if(this.AsD===E)return;this.AsD=E;this.T2.Z(E);
if(E)this.GW.H(A.abN(this.GW.M,this.T2.M[0]));else this.GW.H(A.abN(this.GW.M,this.
M[2]));this.Am();},Bm6:function(E){if(this.Aq8===E)return;this.Aq8=E;this.PB.Cv(
E);this.Am();},ATk:function(E){if(this.Aq9===E)return;this.Aq9=E;this.I9.Cv(E);this.
Am();},A_h:function(E){if(this.Aq_===E)return;this.Aq_=E;this.Le.Cv(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NK={I:this},0);C.CG._Init.call(this.Jf={I:this
},0);C.CG._Init.call(this.JA={I:this},0);C.CG._Init.call(this.GW={I:this},0);A.acg.
Ap._Init.call(this.PB={I:this},0);A.acg.Ap._Init.call(this.I9={I:this},0);A.acg.
Ap._Init.call(this.Le={I:this},0);A.acg.Ap._Init.call(this.T1={I:this},0);A.acg.
Ap._Init.call(this.T2={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
A0(0x3F);this.Background.H(BD);this.Background.L(A.jb.Aeb);this.NK.H(Xb);this.NK.
L(A.jb.CT);this.NK.Z(false);this.Jf.A0(0x14);this.Jf.H(UW);this.Jf.A6(0x12);this.
JA.A0(0x14);this.JA.H(Z$);this.JA.A6(0x12);this.GW.H(Aaa);this.PB.H(Xc);this.I9.
H(Xd);this.Le.H(Ta);this.Le.Z(false);this.T1.H(UX);this.T1.Z(false);this.T2.H(UY
);this.T2.Z(false);this.J(this.Background,0);this.J(this.NK,0);this.J(this.Jf,0);
this.J(this.JA,0);this.J(this.GW,0);this.J(this.PB,0);this.J(this.I9,0);this.J(this.
Le,0);this.J(this.T1,0);this.J(this.T2,0);this.Jf.S(A.aaL(A.fl.Ak));this.Jf.AZ(A.
aaL(A.fl.Bh));this.Jf.Q7([this,this.A3R]);this.JA.S(A.aaL(A.fl.Ak));this.JA.AZ(A.
aaL(A.fl.Bh));this.JA.Q7([this,this.A3R]);this.GW.S(A.aaL(A.fl.Ak));this.GW.AZ(A.
aaL(A.fl.Bh));this.GW.Q7([this,this.A3R]);this.VZ=A.aaL(A.fl.Ak);this.V0=A.aaL(A.
fl.Ak);this.V1=A.aaL(A.fl.Ak);this.PB.Ax(null);this.I9.Ax(null);this.Le.Ax(null);
this.T1.Ax(A.aaL(A.ach.AMO));this.T2.Ax(A.aaL(A.ach.Ajt));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NK._Done();this.
Jf._Done();this.JA._Done();this.GW._Done();this.PB._Done();this.I9._Done();this.
Le._Done();this.T1._Done();this.T2._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NK._ReInit();this.Jf.
_ReInit();this.JA._ReInit();this.GW._ReInit();this.PB._ReInit();this.I9._ReInit(
);this.Le._ReInit();this.T1._ReInit();this.T2._ReInit();this.Jf.S(A.aaL(A.fl.Ak)
);this.Jf.AZ(A.aaL(A.fl.Bh));this.JA.S(A.aaL(A.fl.Ak));this.JA.AZ(A.aaL(A.fl.Bh)
);this.GW.S(A.aaL(A.fl.Ak));this.GW.AZ(A.aaL(A.fl.Bh));this.AFf(A.aaL(A.fl.Ak));
this.ArP(A.aaL(A.fl.Ak));this.Anz(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V1)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.B$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JA).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Le)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADm={Init:function(aArg){var B;A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.
Helper),B.Ary,B.AkF],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper)
,B.A9f,B.AFM],0);A.pe([this,this.Ns],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhI)this.Ab3(A._GetAutoObject(A.Device.Helper).AhI.AOV());else this.
Ab3(-1);if(!!A._GetAutoObject(A.Device.Helper).UA)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak7(A._GetAutoObject(A.Device.Helper).UA.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.Am0._Init.call(this,aArg);this.__proto__=C.ADm;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AG0={Ey:null,Ei:null,
FX:null,X1:null,TF:null,II:null,IJ:null,Init:function(aArg){},WM:function(G){var
B;C.DR.WM.call(this,G);var AKQ=this.Azs(A._GetAutoObject(A.Device.Helper).UG.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALF=this.Azs(A._GetAutoObject(
A.Device.Helper).UH.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAc=
this.Azs(A._GetAutoObject(A.Device.Device).AcF);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AKQ));this.IJ.H(A.abO(this.
IJ.M,this.Ey.M[3]-((((B=this.IJ.M)[3]-B[1])/2)|0)));this.Ei.H(A.abP(this.Ei.M,this.
Ey.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-B[1])-ALF));this.
II.H(A.abO(this.II.M,(this.Ei.M[3]-((((B=this.II.M)[3]-B[1])/2)|0))+2));this.FX.
H(A.abP(this.FX.M,this.Ei.M[3]));this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.
M)[3]-B[1])-BAc));this.TF.H(A.abO(this.TF.M,this.FX.M[3]-((((B=this.TF.M)[3]-B[1
])/2)|0)));this.X1.H(A.abP(this.X1.M,this.FX.M[3]));this.X1.H([].concat(this.X1.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJO:function(AoR){return A._GetAutoObject(A.
Device.Converter).Ak2(AoR);},AKl:function(){return A._GetAutoObject(A.acj.Temperature
).AlM();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.
FX={I:this},0);A.acg.AL._Init.call(this.X1={I:this},0);A.acg.AL._Init.call(this.
TF={I:this},0);A.acg.AL._Init.call(this.II={I:this},0);A.acg.AL._Init.call(this.
IJ={I:this},0);this.__proto__=C.AG0;this.Ey.A0(0xD);this.Ey.H(AcM);this.Ey.L(A.jb.
Gj);this.Ei.A0(0xD);this.Ei.H(Tb);this.Ei.L(A.jb.H9);this.FX.A0(0xD);this.FX.H(Aab
);this.FX.L(A.jb.E1);this.X1.A0(0xD);this.X1.H(AfB);this.X1.L(A.jb.Afu);this.TF.
A0(0xD);this.TF.H(Aac);this.TF.Awy(A.jb.Afu);this.TF.Awz(A.jb.Afu);this.TF.AwB(A.
jb.E1);this.TF.AwA(A.jb.E1);this.II.A0(0xD);this.II.H(Xe);this.II.Awy(A.jb.E1);this.
II.Awz(A.jb.E1);this.II.AwB(A.jb.H9);this.II.AwA(A.jb.H9);this.IJ.A0(0xD);this.IJ.
H(Aad);this.IJ.Awy(A.jb.H9);this.IJ.Awz(A.jb.H9);this.IJ.AwB(A.jb.Gj);this.IJ.AwA(
A.jb.Gj);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FX,-1);this.J(this.X1
,-1);this.J(this.TF,-1);this.J(this.II,-1);this.J(this.IJ,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FX._Done(
);this.X1._Done();this.TF._Done();this.II._Done();this.IJ._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ey._ReInit();this.Ei._ReInit(
);this.FX._ReInit();this.X1._ReInit();this.TF._ReInit();this.II._ReInit();this.IJ.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ey)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avr:null,AmU:null,AQm:null,Aq7:null,AqQ:null,AvL:null,AR:null,Agw:null,Amr:
null,N:null,Bo:null,QT:null,AxP:A.jV,AUY:false,AGO:false,Aph:false,Axl:255,LI:false
,KH:false,Qv:false,Ai:function(Ae){var B;C.OX.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var IC=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=
A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.
L(A.jb.CT);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IC){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.Am4);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY
);}this.LI=Hf;this.KH=Fw;this.Qv=GE;this.Aph=IC;},Qu:function(G){this.Am();A.pe(
this.AR,this);},Bw_:function(s){this.Qu(s);},I1:function(G){if(this.QT.Ach)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atp:function(s){this.I1(s);},Ab0:function(E){if(A.aa0(this.Agw,E))return;this.
Agw=E;},A_M:function(E){if(this.AxP===E)return;this.AxP=E;},Zu:function(E){if(this.
Avr===E)return;this.Avr=E;},Zv:function(E){if(this.AmU===E)return;this.AmU=E;},A_r:
function(E){if(this.Axl===E)return;this.Axl=E;},Gs:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALn();},A3o:
function(G){},BGZ:function(s){this.A3o(s);},AkA:function(E){if(this.Aq7===E)return;
this.Aq7=E;},LZ:function(E){if(A.aa0(this.Amr,E))return;this.Amr=E;},BmZ:function(
E){if(this.AqQ===E)return;this.AqQ=E;},L2:function(E){if(this.AvL===E)return;this.
AvL=E;},Zz:function(E){if(this.AGO===E)return;this.AGO=E;this.ALn();},ALn:function(
){var B;var M1=this.DK;if(this.AGO)M1=M1+A.aaR(A.acf.Colon);if(this.AUY)M1=M1+Xf;
this.V.R(M1);},ATH:function(E){if(this.AUY===E)return;this.AUY=E;this.ALn();},_Init:
function(aArg){C.OX._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BK._Init.call(this.QT={I:this},0);this.__proto__=C.Co;this.Bo.PV(0);
this.Bo.WG(50);this.Bo.Ar(false);this.QT.Filter=1;this.Bo.MC=[this,this.Bw_];this.
QT.BL=[this,this.Atp];this.Avr=A.aaL(A.fl.Ak);this.AmU=A.aaL(A.fl.Ak);this.AQm=A.
aaL(A.ach.E2);this.AqQ=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OX;this.
Bo._Done();this.QT._Done();C.OX._Done.call(this);},_ReInit:function(){C.OX._ReInit.
call(this);this.Bo._ReInit();this.QT._ReInit();this.Zu(A.aaL(A.fl.Ak));this.Zv(A.
aaL(A.fl.Ak));this.BmZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OX._Mark.call(
this,D);if((B=this.Avr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqQ)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agw)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Ds={Q:null,And:null,Anf:null,Hx:null,H5:null,AM:0,Gq:0,F$:100,FI:0,Init:function(
aArg){},I1:function(G){this.FI=1;C.Eg.I1.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hx.H([0,aSize[1]-40,40,aSize[1]]);this.H5.H([].concat(A.
abe(aSize,AhX),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fw=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hx.L(this.V.AQ);this.H5.L(this.V.AQ);this.Hx.
Z((Fw||GE)&&(this.AM>this.Gq));this.H5.Z((Fw||GE)&&(this.AM<this.F$));if(this.FI===
6)this.Hx.L(A.jb.E1);if(this.FI===7)this.H5.L(A.jb.E1);},Bfm:function(G){this.FI=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyT],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qu:function(G){if(this.FI===6)A.pe([this,this.AyT],this);if(this.FI===
7)A.pe([this,this.AyU],this);if(this.FI===1)A.pe(this.AR,this);this.FI=0;this.Am(
);},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcW:function(
s){this.C4(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,
this.AcW],this);},Bfn:function(G){this.FI=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyU],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ke:function(G){this.FI=0;}
,AyU:function(s){this.Ke(s);},J$:function(G){this.FI=0;},AyT:function(s){this.J$(
s);},Bx:function(E){if(E<this.Gq)E=this.Gq;if(E>this.F$)E=this.F$;if(this.AM===E
)return;this.AM=E;this.Am();},Bbp:function(Aq){this.Bx(Aq);},Ga:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EV:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},Uj:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BK._Init.call(this.And={I:this},0);A.Core.BK._Init.call(this.Anf={
I:this},0);A.acg.Ap._Init.call(this.Hx={I:this},0);A.acg.Ap._Init.call(this.H5={
I:this},0);this.__proto__=C.Ds;this.H(KZ);this.And.Filter=6;this.Anf.Filter=7;this.
Background.H(KZ);this.V.H(AcN);this.V.R(Lw);this.Hx.H(AhY);this.H5.H(Aoe);this.H5.
Cv(1);this.J(this.Hx,0);this.J(this.H5,0);this.And.BL=[this,this.Bfm];this.And.D1=[
this,this.Bfm];this.Anf.BL=[this,this.Bfn];this.Anf.D1=[this,this.Bfn];this.V.S(
A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(null);this.Hx.Ax(A.aaL(A.ach.
Aju));this.H5.Ax(A.aaL(A.ach.Aju));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.And._Done();this.Anf._Done();this.Hx._Done();this.H5._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.And._ReInit();this.
Anf._ReInit();this.Hx._ReInit();this.H5._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.And)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Du:function(){return-1;},C6:function(aIndex){return-1;},Gl:function(
aIndex){return A.jV;},DZ:function(A7){return-1;},H4:function(){return-1;},Au:function(
E){this.Q=E;},Cb:function(Aq){this.Au(Aq);},AC1:function(aIndex){return null;},AC3:
function(aIndex){return 0;},B_:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Ir={AxG:null
,BT:null,AHb:A.jV,AVD:A.jV,Aj5:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Ds.Ai.call(this,Ae);if(!this.AxG){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVD);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AHb);}}else(B=
this.AxG)?B[1].call(B[0],this):null;},Ke:function(G){var F;var BO=this.AM;C.Ds.Ke.
call(this,G);this.Bx(this.AM+this.Aj5);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J$:function(G){var F;var BO=this.AM;C.
Ds.J$.call(this,G);this.Bx(this.AM-this.Aj5);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IR:function(E){if(this.AHb===E)return;
this.AHb=E;this.Am();},Jc:function(E){if(this.AVD===E)return;this.AVD=E;this.Am(
);},ATl:function(E){if(this.Aj5===E)return;this.Aj5=E;},A_J:function(E){if(A.aa0(
this.AxG,E))return;this.AxG=E;},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.CG._Init.call(this.BT={I:this},0);this.__proto__=C.Ir;this.H(KZ);this.BT.H(Od);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Ds;this.BT._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.AxG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dz:null,HN:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Ds.Bl.call(this,aSize);this.Dz.H([this.Hx.M[2]-10,this.Hx.M[1],this.
H5.M[0]+10,this.Hx.M[3]]);this.Dz.AFp((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.Dz.
Gt,true,null,null);},Ai:function(Ae){var B;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.Dz.AbE(0,this.Dz.AY-1);this.Hx.Z(Fw||GE);this.H5.
Z(Fw||GE);},C4:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Ke:function(G){var F;var BO=this.AM;C.Ds.Ke.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},J$:function(G){var F;var BO=this.AM;
C.Ds.J$.call(this,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var QA=0;if(E<this.Gq){E=this.F$;QA=-this.Dz.We*this.Dz.AY;}if(E>this.F$){E=this.
Gq;QA=this.Dz.We;}C.Ds.Bx.call(this,E);if(!!QA)this.Dz.Gb(QA);this.Dz.GT(this.AM
);if(this.Dz.Bj5())this.Dz.BpC(false,false);this.Dz.HI(this.Dz.Gt,true,this.HN,null
);},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(C.CG.isPrototypeOf(B=this.Dz.
Cj)?B:null);if(!CA)return;CA.S(this.V.B6);CA.Aw7(19);CA.AZ(this.V.AmT);CA.BnS(19
);CA.Cr(this.V.AqP);CA.BnT(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));
else CA.R(Xg);CA.H(A.abK(CA.M,[this.Dz.We,(B=this.Dz.M)[3]-B[1]]));},BwM:function(
s){this.Hm(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Ga(0);this.EV(this.AC.Du()-1);this.Dz.Jz(this.AC.Du());this.Dz.AbE(0,this.Dz.AY-
1);}},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Core.Dz._Init.call(this.
Dz={I:this},0);A.acl.Gm._Init.call(this.HN={I:this},0);this.__proto__=C.BW;this.
H(KZ);this.Dz.N3(C.CG);this.HN.WI(23);this.HN.HO(1);this.HN.Fr(200);this.J(this.
Dz,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.Dz.Hm=[this,this.BwM
];this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.Dz._Done();this.HN.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
Dz._ReInit();this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SS={FM:null,OI:null,Dl:null,Av:null,Jx:null,HM:null,Pv:null,VV:null,Q2:null,
Ym:null,P9:null,Gy:null,Gx:null,FY:0,A_:0,Asm:false,Bj0:false,Init:function(aArg
){},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hx.Z(false);this.H5.Z(false);var AtZ=
A.jV;if(!!this.Dl){this.Pv.R(this.Av.Format(Aae));this.Q2.R(this.Av.Format(AfC));
this.P9.R(this.Av.Format(AhZ));}if(this.A_===1){this.HM.Z(true);this.HM.H(this.Pv.
M);this.HM.L(this.V.AQ);this.Pv.L(this.Background.AQ);this.Q2.L(this.V.AQ);this.
P9.L(this.V.AQ);AtZ=A.aaR(A.acf.A56);}else if(this.A_===2){this.HM.Z(true);this.
HM.H(this.Q2.M);this.HM.L(this.V.AQ);this.Pv.L(this.V.AQ);this.Q2.L(this.Background.
AQ);this.P9.L(this.V.AQ);AtZ=A.aaR(A.acf.Hk);}else if(this.A_===3){this.HM.Z(true
);this.HM.H(this.P9.M);this.HM.L(this.V.AQ);this.Pv.L(this.V.AQ);this.Q2.L(this.
V.AQ);this.P9.L(this.Background.AQ);AtZ=A.aaR(A.acf.Year);}else{this.HM.Z(false);
this.Pv.L(this.V.AQ);this.Ym.L(this.V.AQ);this.Q2.L(this.V.AQ);this.VV.L(this.V.
AQ);this.P9.L(this.V.AQ);}if(AtZ.length>0){if(this.AGO)this.V.R((((this.DK+AcO)+
AtZ)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcO)+
AtZ)+String.fromCharCode(0x29));}else this.ALn();},Qu:function(G){if(this.FI===1
)A.pe([this,this.Vc],this);else if(this.FI===4)A.pe([this,this.AiH],this);else if(
this.FI===5)A.pe([this,this.Ait],this);C.Ds.Qu.call(this,G);},Ke:function(G){switch(
this.A_){case 0:C.Ds.Ke.call(this,G);break;case 3:break;default:this.Ady(this);}
},J$:function(G){switch(this.A_){case 0:C.Ds.J$.call(this,G);break;default:this.
Ais(this);}},AdA:function(G){var F;if(!!this.Dl)this.Un((F=this.Dl,F[1].call(F[0
])));},Ab6:function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.AdA
],this.Dl,0);this.Dl=E;if(!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA
],this);},Un:function(E){if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.
FY);this.Am();},Ady:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Vc],this);this.Bo.Ar(false);}this.Bo.Ar(true);},BbY:function(s){this.Ady(s);},Vc:
function(G){this.Ex(this.A_+1);},Al5:function(G){this.FI=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiH],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Al4:function(
G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ait],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiH:function(G){var B;var F;var BO=this.FY;switch(this.A_){
case 1:{if(this.Asm){var ABl=A._NewObject(A.Core.An5,0);ABl.Km=1;if(this.Av.J(ABl
).JU()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Av.GL<this.Av.Zo()
)this.Av.Lq(this.Av.GL+1);}break;case 2:{if(this.Asm){var ABl=A._NewObject(A.Core.
An5,0);ABl.Km=this.Av.Zo();if(this.Av.J(ABl).JU()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Av.Us(this.Av.Hk+1);if(this.Av.Zo()<this.Av.GL)this.Av.Lq(this.
Av.Zo());}break;case 3:{if(this.Asm){var A1L=A._NewObject(A.Core.Bs,0);A1L.Initialize(
this.Av.JU());A1L.Year+=1;if(A1L.JU()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Un(((B=(this.Av.JU()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.
Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}},Ait:function(G){var B;var F;var BO=
this.FY;if(this.A_===1)this.Av.Lq(this.Av.GL-1);if(this.A_===2){this.Av.Us(this.
Av.Hk-1);if(this.Av.Zo()<this.Av.GL)this.Av.Lq(this.Av.Zo());}if(this.A_===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Un(((B=(this.Av.JU()|
0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],
this.FY));A.abo(this.Dl,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[
0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CR(A.jV);(F=this.N,F[1].call(F[0])).B$=[this,this.Vc];}break;case 2:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CR(A.jV);(F=this.N,F[1].call(F[0])).B$=[this,this.Vc];}break;case 3:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=
this.N,F[1].call(F[0])).B$=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},AFK:function(E){if(this.Asm===E)return;this.Asm=E;},FV:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;var AAt=this.A_;if(!this.
A_){this.FM.AjB((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FY){var BO=this.FY;
this.Un(A._GetAutoObject(A.Device.Helper).Dv());if(this.FY!==BO){if(!!this.Dl)(F=
this.Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}}}this.A_=EO;this.Bj0=true;if((
this.A_<0)||(this.A_>3))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=
!!this.A_;if((!!AAt&&!this.A_)&&!!this.OI)A.pe(this.OI,this);this.Am();},Ais:function(
G){if(this.A_>1)this.Ex(this.A_-1);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Av={I:this},0);A.Core.BK._Init.call(this.Jx={I:this}
,0);A.acg.AL._Init.call(this.HM={I:this},0);A.acg.Text._Init.call(this.Pv={I:this
},0);A.acg.Text._Init.call(this.VV={I:this},0);A.acg.Text._Init.call(this.Q2={I:
this},0);A.acg.Text._Init.call(this.Ym={I:this},0);A.acg.Text._Init.call(this.P9={
I:this},0);A.Core.BK._Init.call(this.Gy={I:this},0);A.Core.BK._Init.call(this.Gx={
I:this},0);this.__proto__=C.SS;this.H(UZ);this.V.R(Aof);this.Hx.Z(false);this.H5.
Z(false);this.Jx.Filter=1;this.HM.H(Aog);this.HM.L(0x55FFFFFF);this.Pv.H(Aoh);this.
Pv.Ja(true);this.Pv.A6(0x14);this.VV.H(Aoi);this.VV.Ja(true);this.VV.A6(0x14);this.
VV.R(Alc);this.Q2.H(AsX);this.Q2.Ja(true);this.Ym.H(Ax7);this.Ym.Ja(true);this.Ym.
R(Alc);this.P9.H(Ax8);this.P9.Ja(true);this.P9.A6(0x11);this.Gy.Filter=4;this.Gy.
Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HM,0);this.J(this.Pv,0);this.
J(this.VV,0);this.J(this.Q2,0);this.J(this.Ym,0);this.J(this.P9,0);this.Jx.BL=[this
,this.BbY];this.Pv.S(A.aaL(A.fl.EK));this.VV.S(A.aaL(A.fl.EK));this.Q2.S(A.aaL(A.
fl.EK));this.Ym.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));this.Gy.BL=[this,this.
Al5];this.Gy.D1=[this,this.AiH];this.Gx.BL=[this,this.Al4];this.Gx.D1=[this,this.
Ait];this.FM=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ds;this.Av._Done();this.Jx._Done();this.HM._Done();this.Pv._Done();this.VV._Done(
);this.Q2._Done();this.Ym._Done();this.P9._Done();this.Gy._Done();this.Gx._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit(
);this.Jx._ReInit();this.HM._ReInit();this.Pv._ReInit();this.VV._ReInit();this.Q2.
_ReInit();this.Ym._ReInit();this.P9._ReInit();this.Gy._ReInit();this.Gx._ReInit(
);this.Pv.S(A.aaL(A.fl.EK));this.VV.S(A.aaL(A.fl.EK));this.Q2.S(A.aaL(A.fl.EK));
this.Ym.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ym)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OL={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Beg],[B=A._GetAutoObject(A.Device.Device),B.A8Z,B.Bbw],0);
A.pe([this,this.Beg],this);},Du:function(){return 16;},Gl:function(aIndex){return this.
LanguageToString.BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnC(E);},Beg:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OL;this.Ca.Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,5);this.Ca.
Set(3,3);this.Ca.Set(4,8);this.Ca.Set(5,9);this.Ca.Set(6,7);this.Ca.Set(7,6);this.
Ca.Set(8,10);this.Ca.Set(9,2);this.Ca.Set(10,11);this.Ca.Set(11,12);this.Ca.Set(
12,13);this.Ca.Set(13,14);this.Ca.Set(14,15);this.Ca.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Cm;this.LanguageToString._Done();C.Cm._Done.
call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Rf={TemperatureUnitToString:
null,Du:function(){return 2;},C6:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw$(E);}
,Init:function(aArg){var B;A.zX([this,this.BgO],[B=A._GetAutoObject(A.Device.Device
),B.Arz,B.Ato],0);A.pe([this,this.BgO],this);},BgO:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B_,this.Cb],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rf;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AVg={Ajz:null,AcB:null,KA:null,AP:null,A$:null,Bl:function(aSize){C.Ba.Bl.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.KA.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajz.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.AcB.H(this.Ajz.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KA.L(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX
)return;this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hv(Ad,6);var ApW=this.AX.CF(Ad,
7);var Aud=this.AX.I7(Ad,9);this.T(A._GetAutoObject(A.acj.KM).ACX(AlD));this.KA.
R(A._GetAutoObject(A.acj.KM).A6L(AlD));this.AcB.R(A._GetAutoObject(A.Device.Converter
).Ak2(ApW));this.AcB.L(A._GetAutoObject(A.acj.Assessment).XB(Aud));this.Ajz.L(A.
_GetAutoObject(A.acj.Assessment).Qr(Aud));this.Am();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Ajz={I:this},0);A.acg.Text._Init.
call(this.AcB={I:this},0);A.acg.Text._Init.call(this.KA={I:this},0);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AVg;this.V.H(O7);this.AcB.L(A.jb.Text);this.KA.R(Ro);this.KA.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A$.H(Ax9);this.A$.L(A.jb.Bc);this.J(this.Ajz,0);this.J(this.AcB
,0);this.J(this.KA,0);this.J(this.AP,0);this.J(this.A$,0);this.AcB.S(A.aaL(A.fl.
Af));this.KA.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajz._Done();this.AcB._Done();this.KA._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajz._ReInit(
);this.AcB._ReInit();this.KA._ReInit();this.AP._ReInit();this.A$._ReInit();this.
AcB.S(A.aaL(A.fl.Af));this.KA.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.Gc={AX:null,AR:null,Cq:null,AD:
null,Afl:null,NP:null,KO:A.jV,Lj:null,AVF:true,Hm:function(G){var B;var Gg=this.
AD.G6;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?B:null);if(!Aa)return;Aa.Zs(this.
AX);Aa.Ch(Gg);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GO]));
},N3:function(E){if(E===this.Lj)return;this.Lj=E;this.AD.N3(E);},Zs:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ch],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ch],E,0);A.pe([this,this.Ch],this);},Ch:function(G){if(this.AVF===
false)return;if(!!this.AX){this.AD.Jz(this.AX.B9());this.AD.AbE(0,this.AD.AY-1);
}else this.AD.Jz(0);if((this.AD.AY>0)&&(this.FN()<0))this.GT(0);if(this.FN()>=this.
AD.AY){this.GT(0);this.AD.Gb(0);}if(this.AD.AY<=0){this.NP.Z(true);this.GT(-1);}
else{this.NP.Z(false);this.ABL(null,null);}},Fk:function(G){var B;this.Afl.My(this.
AD.GO*this.AD.AY);this.Afl.MB((B=this.AD.M)[3]-B[1]);this.Afl.Mz(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cq.CO){case 4:if(this.FN()>0)this.GT(
this.FN()-1);break;case 5:if(this.FN()<(this.AD.AY-1))this.GT(this.FN()+1);break;
default:this.Cq.NL=true;}this.AD.HI(this.FN(),true,null,null);}else if((this.Cq.
CO!==4)&&(this.Cq.CO!==5))this.Cq.NL=true;},Zw:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbE(0,this.AD.AY);},GT:function(E){this.AD.GT(E);this.AD.HI(E,
true,null,null);},FN:function(){return this.AD.Gt;},Dk:function(E){if(this.KO===
E)return;this.KO=E;this.NP.R(E);},ABL:function(AcZ,E8){this.AD.ABL(AcZ,E8);},ATW:
function(E){if(this.AVF===E)return;this.AVF=E;if(E)A.pe([this,this.Ch],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afl={I:this},
0);A.acg.Text._Init.call(this.NP={I:this},0);this.__proto__=C.Gc;this.H(U0);this.
Lj=C.Ba;this.Cq.Filter=147;this.AD.A0(0x3F);this.AD.H(U0);this.AD.Ae8(40);this.Afl.
A0(0x3A);this.Afl.H(AsY);this.NP.A0(0x3F);this.NP.H(Ax_);this.NP.Hn(10);this.NP.
KS(true);this.NP.A6(0xA);this.NP.L(A.jb.Text);this.J(this.AD,0);this.J(this.Afl,
0);this.J(this.NP,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.AD.
Em=[this,this.Fk];this.AD.Hm=[this,this.Hm];this.NP.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=A.Core.P;this.Cq._Done();this.AD._Done();this.Afl._Done();this.
NP._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Cq._ReInit();this.AD._ReInit();this.Afl._ReInit();this.NP._ReInit();this.
NP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hs:-1,CP:function(){this.Ch(this.Hs);},Ai:function(Ae){var B;C.Co.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hs%2)===1)this.Background.L(A.
jb.CJ);else this.Background.L(A.jb.CT);}},Zs:function(E){if(this.AX===E)return;this.
AX=E;},Ch:function(Ad){A.ab5("%s",Ax$);},_Init:function(aArg){C.Co._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GJ={Bg:null,FE:null
,DP:null,Fn:null,V4:null,Kk:null,KO:A.jV,AUh:0,AUi:0,Afm:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Dw(0);A.pe([this,this.Bba],this);}},Init:function(aArg){var B;A.zX([this,this.
BeW],[B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIR],0);A.zV([this,this.Aga],A.
_GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcG],A._GetAutoObject(A.Device.
Device).An,0);A.zX([this,this.BBy],[B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6
],0);A.pe([this,this.AcG],this);A.pe([this,this.A0F],this);A.pe([this,this.AxB],
this);},WE:function(G){this.Agx();var O;for(O=this.Kk.Du()-1;O>=0;O=O-1)switch(this.
Kk.C6(O)){case 0:this.AdS(A.aaR(A.acf.A5f),[this,this.Bof],0);break;case 14:this.
AdS(A.aaR(A.acf.Bht),[this,this.Bog],14);break;case 1:this.AdS(A.aaR(A.acf.Temperature
),[this,this.ATY],1);break;case 2:this.AdS(A.aaR(A.acf.Rating),[this,this.ATX],2
);break;case 3:this.AdS(A.aaR(A.acf.Afv),[this,this.ATZ],3);break;default:A.ab5(
"%s",Aya);}A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Bir
));A._GetAutoObject(A.Device.Device).Dw(6);},Bba:function(s){this.WE(s);},DE:function(
G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var AfZ=this.Kk.DZ(A._GetAutoObject(
A.Device.Device).Kk);if(this.Afm)return;switch(D5.CO){case 6:{AfZ=AfZ-1;if(AfZ<0
)AfZ=this.Kk.Du()-1;A._GetAutoObject(A.Device.Device).Zq(this.Kk.C6(AfZ));}break;
case 7:{AfZ=AfZ+1;if(AfZ>=this.Kk.Du())AfZ=0;A._GetAutoObject(A.Device.Device).Zq(
this.Kk.C6(AfZ));}break;default:D5.NL=true;}},CC:function(G){if(this.DP.Az4()){this.
DP.Ac9();if(this.DP.Az4()===false)this.Bg.ATW(true);return;}else if(this.Afm)this.
AA5(this);if(!!this.Bg)this.Bg.ATW(true);},E4:function(G){if(!!this.Bg)this.Bg.ATW(
false);},AxB:function(G){var B;if(!!this.Bg)this.HP(this.Bg);this.Bg=A._NewObject(
C.AMA,0);this.Bg.H(Aoj);this.Bg.Zs(A._GetAutoObject(A.Device.Device).An);this.Bg.
Zw([this,this.AcU]);if(!!this.FE)this.Bg.A9M([B=this.FE,B.A9h,B.A_F]);this.A4q(this
);this.J(this.Bg,0);if(this.Afm===false)this.Bb(this.Bg);this.BeW(this);this.Bpn(
this);},A9J:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Dr(this.A6Y(
));this.Ek.AR=[this,this.AcU];this.ALt(this);this.Ek.Ar(true);this.Bb(this.Ek);this.
Afm=true;},BkW:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);if(!this.
Bg)return;var Aa=(C.AB$.isPrototypeOf(B=this.Bg.AD.BjD(this.Bg.AD.Gt))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).G8(Aa.Hs);else A._GetAutoObject(A.Device.
Helper).W.E6();this.Agj();},Agg:function(G){var F;if(!this.Fn)this.A6i(this);else
switch((F=this.Fn,F[1].call(F[0]))){case 19:break;case 0:this.A6i(this);break;case
1:this.Bis(this);break;case 9:this.A6j(this);break;case 4:this.Biu(this);break;case
6:this.Biv(this);break;case 8:this.Bix(this);break;case 2:this.Biy(this);break;case
3:this.Biz(this);break;case 7:this.BiB(this);break;case 5:this.BiC(this);break;case
10:this.BiE(this);break;case 11:this.Bit(this);break;case 12:this.Biw(this);break;
case 13:this.A6o(this);break;case 14:this.A6k(this);break;case 18:this.A6l(this);
break;case 15:this.A6m(this);break;case 16:this.BiA(this);break;case 17:this.A6n(
this);break;default:A.ab5("%s%e",AfD,(F=this.Fn,F[1].call(F[0])));}},AcU:function(
s){this.Agg(s);},Bl_:function(G){this.Dr(C.Kr);this.Ek.AR=null;this.Afm=false;this.
AcG(this);this.Bgg();this.N.T1.C3(255);this.N.T2.C3(255);this.Bb(this.Bg);this.Ek.
Ar(false);},Anp:function(G){A._GetAutoObject(C.A8).FB();},Dk:function(E){if(this.
KO===E)return;this.KO=E;this.A4q(this);},Abs:function(){switch(A._GetAutoObject(
A.Device.Device).Kk){case 14:return C.ANa;case 2:return C.ANc;case 1:return C.ANd;
case 3:return C.ANf;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqu;
case 7:return C.AB_;case 12:return C.ACb;case 11:return C.AB9;case 13:return C.ACa;
default:throw new Error(Aok);}},Abt:function(){switch(A._GetAutoObject(A.Device.
Device).Kk){case 14:return C.APC;case 2:return C.ADt;case 1:return C.APE;case 3:
return C.APG;case 4:return C.ADp;case 0:case 8:case 9:case 10:case 5:case 6:return C.
Aq1;case 7:return C.ADr;case 12:return C.ADs;case 11:return C.ADq;case 13:return C.
ADu;default:throw new Error(Aok);}},BeW:function(G){this.ATA(A._GetAutoObject(A.
Device.Device).Kk);if(!!this.Bg){this.Bg.N3(this.Abs());this.Bps(this);}},Bps:function(
G){var B;if(!!this.FE)this.HP(this.FE);this.FE=(C.Dd.isPrototypeOf(B=A._NewObject(
this.Abt(),0))?B:null);this.FE.H(IW);if(!!this.Bg)this.Bg.A9M([B=this.FE,B.A9h,B.
A_F]);this.J(this.FE,0);},BkU:function(G){this.Q_(this);A._GetAutoObject(A.Device.
Device).Dw(0);},ATY:function(G){A._GetAutoObject(A.Device.Device).Zq(1);},ATX:function(
G){A._GetAutoObject(A.Device.Device).Zq(2);},ATZ:function(G){A._GetAutoObject(A.
Device.Device).Zq(3);},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A.
_GetAutoObject(A.Device.Helper).Mt());},A0F:function(s){this.Q_(s);},HQ:function(
G){if(this.Afm){this.ALt(this);return;}this.N.C1(A.aaL(A.ach.E2));this.N.Cw(A.aaL(
A.ach.ADL));this.N.C2(A.aaL(A.ach.Options));this.N.CE=[this,this.Anp];this.N.Cf=[
this,this.A9J];this.N.B$=[this,this.Bba];this.N.Hy(A.jV);this.N.Fc(A.jV);this.N.
CR(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.I9.C3(100);this.N.
Cf=null;}else this.N.I9.C3(255);},AoA:function(s){this.HQ(s);},AdS:function(Aig,
Aih,AJq){A._GetAutoObject(C.BR).ABK(Aig,Aih,[this,this.A9b,this.ATA],AJq);},Aga:
function(G){this.A4q(this);if(this.Afm)A.pe([this,this.ALt],this);},Agj:function(
){A._GetAutoObject(C.A8).Cd(9);},A4q:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QK()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dk(
A.aaR(A.acf.AEr));else if(A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dk(this.KO);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC6(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dk(A.aaR(A.acf.AN$));else this.Bg.Dk(A.aaR(
A.acf.AN_));}else this.Bg.Dk(A.aaR(A.acf.ASi));},AES:function(G){var F;if(!!this.
Fn)(F=this.Fn,F[2].call(F[0],0));},AwS:function(E){if(A.aaZ(this.Fn,E))return;if(
!!this.Fn)A.z$([this,this.A0O],this.Fn,0);this.Fn=E;if(!!E)A.zX([this,this.A0O],
this.Fn,0);if(!!E)A.pe([this,this.A0O],this);},AEY:function(G){var F;if(!!this.Fn
)(F=this.Fn,F[2].call(F[0],1));},AwX:function(G){var F;if(!!this.Fn)(F=this.Fn,F[
2].call(F[0],2));},ATE:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],
3));},ATS:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],7));},ATT:function(
G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],5));},Biy:function(G){if(!this.Bg
)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.
Qp(1);}},I3:function(Aig,Aih,AoY){A._GetAutoObject(C.BR).ABK(Aig,Aih,[this,this.
A9c,this.ATB],AoY);},Bmi:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0
],4));},Biu:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.
Helper).G8(this.Bg.FN());this.DP.BB0();}},Bmj:function(G){var F;if(!!this.Fn)(F=
this.Fn,F[2].call(F[0],6));},Biv:function(G){if(!this.Bg)return;if(this.Nd()){A.
_GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.BB1();}},Bix:function(G
){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(1024);}},Bnv:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(
F[0],8));},Akv:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],9));},Biz:
function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(
this.Bg.FN());this.DP.Qp(2);}},A6i:function(G){if(!this.Bg)return;if(this.Nd()){
A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());if(A._GetAutoObject(A.Device.
Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A3(66,true,A.jV,0,null);else this.BBL();}},Bis:function(G){if(!this.
Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.
DP.Qp(16);}},BBL:function(){A._GetAutoObject(C.A8).Cd(94);},BiB:function(G){if(!
this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());
this.DP.Qp(4);}},BiC:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(8);}},A6j:function(G){var B;if(!this.
Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());if(this.
Afm){A.zX([this,this.AAv],[B=this.DP,B.SF,B.E5],0);this.AA5(this);}this.DP.Ac9();
}},AuI:function(Aig,Aih,ByJ){A._GetAutoObject(C.BR).Bho(Aig,Aih,ByJ);},ALt:function(
G){this.N.Hy(A.jV);this.N.CR(A.jV);this.N.C1(A.aaL(A.ach.AeA));this.N.CE=[this,this.
Bl_];this.N.T1.C3(100);this.N.T2.C3(100);var Gh=A._GetAutoObject(A.Device.Device
).An.B9();if(Gh<=0){this.N.Cw(null);this.N.C2(null);this.N.Cf=null;this.N.B$=null;
this.N.WN=false;this.N.ZE=false;}else if(Gh===1){this.N.Cw(null);this.N.C2(A.aaL(
A.ach.AeB));this.N.Cf=null;this.N.B$=[this,this.AcU];this.N.WN=false;this.N.ZE=false;
}else{this.N.Cw(A.aaL(A.ach.Aq6));this.N.C2(A.aaL(A.ach.Arc));this.N.Cf=[this,this.
A3K];this.N.B$=[this,this.A3L];this.N.WN=true;this.N.ZE=true;}},A3K:function(G){
if(!this.Bg)return;if(this.Bg.FN()<(A._GetAutoObject(A.Device.Device).An.B9()-1)
)this.Bg.GT(this.Bg.FN()+1);},A3L:function(G){if(!this.Bg)return;if(this.Bg.FN()>
0)this.Bg.GT(this.Bg.FN()-1);},Bpn:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GT(Bf);A.ab5("%s",Aol);}}},Nd:function(){return this.
Bg.FN()>=0;},Aki:function(){return A._GetAutoObject(A.Device.Device).An.B9()>5;}
,Agx:function(){this.Bhp();A._GetAutoObject(C.BR).Tz(A.aaR(A.acf.AUG),[this,this.
A9J]);A._GetAutoObject(C.BR).Fz();},AcG:function(G){if(this.Afm)this.ALt(this);else
this.HQ(this);},AA5:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E$();var Ay7=aFilter.DL(1,4);if(!!Ay7){aFilter.Np(Ay7);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GT(0);}},BG3:function(s){this.
AA5(s);},AAv:function(G){var B;if(!this.DP.EN&&this.Afm){A.z$([this,this.AAv],[B=
this.DP,B.SF,B.E5],0);this.AA5(this);}},Bn8:function(G){var F;if(!!this.Fn)(F=this.
Fn,F[2].call(F[0],10));},BiE:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(256);}},A3A:function(G){var F;this.
ATB((F=this.Fn,F[1].call(F[0])));A.pe([this,this.AoA],this);},A0O:function(s){this.
A3A(s);},Bmf:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],11));},Bit:
function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(
this.Bg.FN());this.DP.Qp(4096);}},Biw:function(G){if(!this.Bg)return;if(this.Nd(
)){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(16384);}},A6o:function(
G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.BBM();}},BBM:function(){A._GetAutoObject(C.A8).Ab9(75);},A6k:function(
G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(32768);}},A6m:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(65536);}},BiA:function(G){if(!this.
Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.
DP.Qp(131072);}},Bhp:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BR).AaU(A.aaR(A.acf.ACe));else A._GetAutoObject(C.BR).Tz(A.
aaR(A.acf.ACe),[this,this.BkU]);A._GetAutoObject(C.BR).Tz(A.aaR(A.acf.AkU),[this
,this.BkW]);A._GetAutoObject(C.BR).Fz();},A6n:function(G){if(!this.Bg)return;if(
this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(128);}}
,BBy:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ch],this);},A6l:function(
G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(524288);}},BiD:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(262144);}},ATA:function(E){if(this.
AUh===E)return;this.AUh=E;A.abo([this,this.A9b,this.ATA],0);},ATB:function(E){if(
this.AUi===E)return;this.AUi=E;A.abo([this,this.A9c,this.ATB],0);},A6Y:function(
){return C.Yv;},Bgg:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Np(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bof:function(G){A._GetAutoObject(A.Device.Device).Zq(0);
},Bog:function(G){A._GetAutoObject(A.Device.Device).Zq(14);},A9b:function(){return this.
AUh;},A9c:function(){return this.AUi;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADt._Init.call(this.V4={I:this},0);C.Kk._Init.call(this.Kk={I:this},0);
this.__proto__=C.GJ;this.Background.H(Ce);this.N.Z(true);this.N.OQ(true);this.N.
OR(true);this.Ek.A_c(A.jb.CT);this.Ek.A_d(A.jb.Text);this.Dr(C.Kr);this.V4.H(IW);
this.KO=A.aaR(A.acf.AEr);this.J(this.V4,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V4._Done();this.Kk._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V4._ReInit();
this.Kk._ReInit();this.Dk(A.aaR(A.acf.AEr));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.AB$={AP:null,A$:null,UJ:null,Acz:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UJ.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.UJ.M[2]-1,0,this.UJ.M[2]+1,aSize[1]]);this.Acz.H([this.UJ.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UJ.L(this.V.AQ);this.Acz.L(this.
V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){this.T(this.
AX.CF(Ad,1).toFixed());this.UJ.R(this.AX.CF(Ad,2).toFixed());this.Acz.R(this.AX.
CF(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.UJ={I:this},0);A.acg.Text._Init.call(this.Acz={I:this
},0);this.__proto__=C.AB$;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UJ.L(A.jb.Text
);this.Acz.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UJ,0);this.
J(this.Acz,0);this.UJ.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UJ.
_Done();this.Acz._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UJ._ReInit();this.Acz._ReInit(
);this.UJ.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad$={OB:null,ST:null,Mn:null,Init:function(aArg){var B;A.zX([this,this.A3g],[
B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyL],0);A.zX([this,this.Adz],[B=A._GetAutoObject(
A.Device.Device),B.Awa,B.AyK],0);A.pe([this,this.Adz],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.ST.R(A._GetAutoObject(A.Device.Device).Aa5.toFixed()+AsZ
);this.OB.Z(A._GetAutoObject(A.Device.Device).AmE);},Adz:function(G){this.Am();}
,MZ:function(G){A._GetAutoObject(C.A8).FB();},A3g:function(G){if(A._GetAutoObject(
A.Device.Device).AmE===false){this.OB.Z(false);A._GetAutoObject(C.A8).FB();}else
this.OB.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OB={I:this},0);A.acg.Text._Init.call(this.ST={I:this},0);C.Mn._Init.call(
this.Mn={I:this},0);this.__proto__=C.Ad$;var B;this.Background.L(A.jb.CT);this.N.
Z(true);this.N.CR(A.aaR(A.acf.Ok));this.OB.H(Xh);this.OB.R(A.aaR(A.acf.OB));this.
OB.L(A.jb.Text);this.OB.Z(false);this.ST.H(As0);this.ST.R(As1);this.ST.L(A.jb.Text
);this.Mn.H(As2);this.J(this.OB,0);this.J(this.ST,0);this.J(this.Mn,0);this.N.B$=[
this,this.MZ];this.OB.S(A.aaL(A.fl.Af));this.ST.S(A.aaL(A.fl.Af));this.Mn.Au([B=
A._GetAutoObject(A.Device.Device),B.Awa,B.AyK]);this.Mn.A_t([B=A._GetAutoObject(
A.Device.Device),B.Awd,B.AyL]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OB._Done();this.ST._Done();this.Mn._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OB._ReInit();this.ST._ReInit();this.Mn._ReInit(
);this.N.CR(A.aaR(A.acf.Ok));this.OB.R(A.aaR(A.acf.OB));this.OB.S(A.aaL(A.fl.Af)
);this.ST.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ST)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mn={Ad6:null,Ad7:null,ID:function(G){var F;if(!!this.Q){this.A2n();var Ada=(
F=this.Q,F[1].call(F[0]));if(Ada>20)this.Ox.L(A.jb.E1);else this.Ox.L(A.jb.Gj);this.
Ox.L((this.Ox.AQ&0x00FFFFFF)|(this.AlL(Ada,0,20)<<24));this.TG.L((this.TG.AQ&0x00FFFFFF
)|(this.AlL(Ada,21,40)<<24));this.TH.L((this.TH.AQ&0x00FFFFFF)|(this.AlL(Ada,41,
60)<<24));this.Ad6.L((this.Ad6.AQ&0x00FFFFFF)|(this.AlL(Ada,61,80)<<24));this.Ad7.
L((this.Ad7.AQ&0x00FFFFFF)|(this.AlL(Ada,81,100)<<24));}},A2n:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U9=this.Ad7;else if((F=this.Q,F[
1].call(F[0]))>60)this.U9=this.Ad6;else if((F=this.Q,F[1].call(F[0]))>40)this.U9=
this.TH;else if((F=this.Q,F[1].call(F[0]))>20)this.U9=this.TG;else this.U9=this.
Ox;}else this.U9=null;},_Init:function(aArg){C.Oz._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad6={I:this},0);A.acg.AL._Init.call(this.Ad7={I:this},0);this.__proto__=
C.Mn;this.H(Aom);this.NT.H(Aom);this.Ox.H(As3);this.TG.H(Ald);this.TH.H(Ayb);this.
Ad6.H(Ayc);this.Ad6.L(A.jb.E1);this.Ad7.H(Ayd);this.Ad7.L(A.jb.E1);this.J(this.Ad6
,0);this.J(this.Ad7,0);this.NT.Ax(A.aaL(A.ach.AMV));},_Done:function(){this.__proto__=
C.Oz;this.Ad6._Done();this.Ad7._Done();C.Oz._Done.call(this);},_ReInit:function(
){C.Oz._ReInit.call(this);this.Ad6._ReInit();this.Ad7._ReInit();},_Mark:function(
D){var B;C.Oz._Mark.call(this,D);if((B=this.Ad6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVb={N_:null,Ls:null,Ak8:null,ZZ:null,ZY:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device),B.
ASV,B.A0y],0);A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device),B.ASY,B.
A0A],0);A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device),B.A9r,B.BbH],0
);A.pe([this,this.ApN],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABx(this);this.BCT(this);this.DJ(this);},BBa:function(G){A._GetAutoObject(
A.Device.Device).AsG();},ApN:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZZ.Z(false);break;case 4:{var A34;if(!A._GetAutoObject(A.Device.Device).Afr)A34=
0;else A34=((A._GetAutoObject(A.Device.Device).AxS*100)/A._GetAutoObject(A.Device.
Device).Afr)|0;this.ZZ.Bx(A34);this.ZZ.Z(true);}break;default:A.ab5("%s%e",As4,A.
_GetAutoObject(A.Device.Device).SyncState);}},BCT:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Ls.L(A.jb.Text);this.N_.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gj);this.Ls.L(A.jb.Bm);this.N_.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",As4,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C1(null);this.N.CE=null;this.N.CR(A.jV);this.N.B$=null;}break;
case 7:{this.N.C1(null);this.N.CE=null;this.N.CR(A.aaR(A.acf.Ok));this.N.B$=[this
,this.BBa];}break;default:A.ab5("%s%e",As4,A._GetAutoObject(A.Device.Device).SyncState
);}},ABx:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Ls.R(A.aaR(A.acf.Bqc));break;case 1:this.Ls.R(A.aaR(A.acf.Bp$));break;
case 2:this.Ls.R(A.aaR(A.acf.Bp8));break;case 3:this.Ls.R(A.aaR(A.acf.Bqa));break;
case 4:this.Ls.R((A.aaR(A.acf.Bp_)+Aye)+A._GetAutoObject(A.Device.Helper).MG(A._GetAutoObject(
A.Device.Helper).MG(A.aaR(A.acf.BoL),O8,A._GetAutoObject(A.Device.Device).AxS.toFixed(
)),Ayf,A._GetAutoObject(A.Device.Device).Afr.toFixed()));break;case 5:this.Ls.R(
A.aaR(A.acf.Bqb));break;case 7:this.Ls.R(A.aaR(A.acf.Bp9));break;default:A.ab5("%s%e"
,As4,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.N_={I:this},0);C.CG._Init.call(this.Ls={I:this
},0);A.acg.Ap._Init.call(this.Ak8={I:this},0);A.acr.ADw._Init.call(this.ZZ={I:this
},0);A.acr.ADx._Init.call(this.ZY={I:this},0);this.__proto__=C.AVb;this.N.Z(true
);this.N_.H(AV9);this.N_.R(A.aaR(A.acf.N_));this.Ls.A0(0x3F);this.Ls.H(AV_);this.
Ls.A6(0x12);this.Ak8.H(AV$);this.Ak8.L(A.jb.AV);this.ZZ.H(AWa);this.ZZ.Ar(false);
this.ZZ.Bx(0);this.ZY.Bn2(0);this.ZY.A_S(0);this.ZY.A_Q(A.jb.AV);this.ZY.A_P(0);
this.ZY.AF9(AHr);this.J(this.N_,0);this.J(this.Ls,0);this.J(this.Ak8,0);this.J(this.
ZZ,0);this.N_.S(A.aaL(A.fl.EK));this.N_.AZ(A.aaL(A.fl.Af));this.N_.Cr(A.aaL(A.fl.
Ak));this.Ls.S(A.aaL(A.fl.Af));this.Ls.AZ(A.aaL(A.fl.Ak));this.Ls.Cr(A.aaL(A.fl.
Bh));this.Ak8.Ax(A.aaL(A.ach.AQ0));this.ZZ.OnSetAppearance(this.ZY);this.ZY.A_R(
A.aaL(A.ach.NW));this.ZY.A_O(A.aaL(A.ach.NW));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N_._Done();this.Ls._Done();this.Ak8._Done();this.ZZ._Done(
);this.ZY._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N_._ReInit();this.Ls._ReInit();this.Ak8._ReInit();this.ZZ._ReInit();this.
ZY._ReInit();this.N_.R(A.aaR(A.acf.N_));this.N_.S(A.aaL(A.fl.EK));this.N_.AZ(A.aaL(
A.fl.Af));this.N_.Cr(A.aaL(A.fl.Ak));this.Ls.S(A.aaL(A.fl.Af));this.Ls.AZ(A.aaL(
A.fl.Ak));this.Ls.Cr(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqZ={_Init:function(aArg){C.ADm._Init.call(this,aArg
);this.__proto__=C.AqZ;this.A_f(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Ca:A.abi(3,0,{0:2,2:1}),Du:function(
){return 3;},C6:function(aIndex){if(aIndex>=3)return-1;return this.Ca.Get(aIndex
);},Gl:function(aIndex){return this.GenderToString.BS(this.C6(aIndex));},DZ:function(
A7){var O=0;while(O<3){if(this.Ca.Get(O)===A7)return O;O=O+1;}return-1;},H4:function(
){var O=0;var max=-1;while(O<3){if(this.Ca.Get(O)>max)max=this.Ca.Get(O);O=O+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.JW(
E);},L0:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af3],[B=this.Animal,B.WC,B.JW],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af3],[B=this.Animal,B.WC,B.JW],0);A.pe([this,this.Af3],this);},Af3:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B_,
this.Cb],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Ca=[]).__proto__=C.Gender.Ca;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Ca:A.abi(4,0,{1:1,2:2,3:3}),Du:function(){return 4;},C6:function(aIndex){if(
aIndex>=4)return-1;return this.Ca.Get(aIndex);},Gl:function(aIndex){return this.
BirthTypeToString.BS(this.C6(aIndex));},DZ:function(A7){var O=0;while(O<4){if(this.
Ca.Get(O)===A7)return O;O=O+1;}return-1;},H4:function(){var O=0;var max=-1;while(
O<4){if(this.Ca.Get(O)>max)max=this.Ca.Get(O);O=O+1;}return max;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akw(E);},A1D:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B_,this.
Cb],0);},L0:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1D],[B=this.Animal,B.ASA,B.Akw],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1D],[B=this.Animal,B.ASA,B.Akw],0);A.pe([this,this.A1D],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Ca=[]).__proto__=C.BirthType.Ca;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acq:null,Du:
function(){return A._GetAutoObject(A.Device.Helper).Ad1.MF;},C6:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Ad1.MF)return-1;return A._GetAutoObject(
A.Device.Helper).Ad1.Get(aIndex);},Gl:function(aIndex){return this.Acq.BS(this.C6(
aIndex));},DZ:function(A7){var O=0;while(O<A._GetAutoObject(A.Device.Helper).Ad1.
MF){if(A._GetAutoObject(A.Device.Helper).Ad1.Get(O)===A7)return O;O=O+1;}return-
1;},H4:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UG.
MF){if(A._GetAutoObject(A.Device.Helper).UG.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UG.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.EC(E);},A1w:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B_,this.Cb],0);},L0:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1w],[B=this.Animal,B.PT,B.EC],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1w],[B=this.Animal,B.PT,B.EC],0);A.pe([
this,this.A1w],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acq={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acq._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acq._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AUS={Init:function(aArg){var B;A.pe([this,this.AfH],this);A.zX([this,this.AfH
],[B=A._GetAutoObject(A.Device.Device),B.Arz,B.Ato],0);},A39:function(G){A._GetAutoObject(
A.Device.Device).A3(38,true,A.jV,0,[this,this.BbZ]);},A3I:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Ass(this);},A1W:function(G){var F;if(this.A_===1){var BO=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlT)this.D7=this.AlT;if(this.D7<A._GetAutoObject(
A.Device.Device).AcF)this.D7=A._GetAutoObject(A.Device.Device).AcF;if(this.DW!==
BO){if(!!this.JZ)(F=this.JZ,F[2].call(F[0],this.D7));A.abo(this.JZ,0);}}if(this.
A_===2){var BO=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BO){if(!!this.JY)(F=this.JY,F[2].call(F[0],this.DW));A.abo(this.JY,0);
}}this.DJ(this);this.Am();},A2w:function(G){var F;if(this.A_===1){var BO=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.
JZ)(F=this.JZ,F[2].call(F[0],this.D7));A.abo(this.JZ,0);}}if(this.A_===2){var BO=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlO)this.DW=this.AlO;if(this.DW!==BO){
if(!!this.JY)(F=this.JY,F[2].call(F[0],this.DW));A.abo(this.JY,0);}}this.DJ(this
);this.Am();},GH:function(G){this.PM.R(AHs+A._GetAutoObject(A.Device.Converter).
Ak2(this.D7));this.PN.R(AHs+A._GetAutoObject(A.Device.Converter).Ak2(this.DW));this.
Sz.R(A._GetAutoObject(A.acj.Temperature).AlM());},A2p:function(Atv){if(Atv===1)return this.
PM;else if(Atv===2)return this.PN;else return null;},_Init:function(aArg){C.Aco.
_Init.call(this,aArg);this.__proto__=C.AUS;this.AlO=5000;this.AlT=3000;this.T(A.
aaR(A.acf.Arp));this.Background.H(AfE);this.V.H(BD);this.V.R(A.aaR(A.acf.AG4));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Aco._ReInit.call(this);this.T(
A.aaR(A.acf.Arp));this.V.R(A.aaR(A.acf.AG4));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CJ);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa8:null,Aba:null,Aa_:
null,Background:null,Aa7:null,Aa$:null,Aa9:null,AjG:null,Aru:null,VO:null,A5:0,BAR:
function(G){if(this.AjG.CO===6){if(this.A5===1)this.AnI(2);else if(this.A5===2)this.
AnI(3);else this.AnI(1);}else if(this.AjG.CO===7){if(this.A5===3)this.AnI(2);else
if(this.A5===2)this.AnI(1);else this.AnI(3);}},AnI:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.Aa7.M);break;case 2:this.
Background.H(this.Aa$.M);break;case 1:this.Background.H(this.Aa9.M);break;default:
this.Background.H(Aon);}},I1:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hp._Init.
call(this.Aa8={I:this},0);A.acg.Hp._Init.call(this.Aba={I:this},0);A.acg.Hp._Init.
call(this.Aa_={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aeq._Init.call(this.Aa7={I:this},0);A.acg.Aeq._Init.call(this.Aa$={I:this},0);A.
acg.Aeq._Init.call(this.Aa9={I:this},0);A.Core.BK._Init.call(this.AjG={I:this},0
);A.Core.BK._Init.call(this.Aru={I:this},0);A.Graphics.AMM._Init.call(this.VO={I:
this},0);this.__proto__=C.Rating;this.H(AWb);this.Aa8.H(AHt);this.Aa8.L(A.jb.Text
);this.Aa8.AnG(Ale);this.Aa8.Nm(3);this.Aa8.Z(true);this.Aba.H(AHu);this.Aba.L(A.
jb.Text);this.Aba.AnG(Ale);this.Aba.Nm(3);this.Aba.Z(true);this.Aa_.H(AHv);this.
Aa_.L(A.jb.Text);this.Aa_.AnG(Ale);this.Aa_.Nm(3);this.Aa_.Z(true);this.Background.
H(Aon);this.Background.L(A.jb.AV);this.Aa7.H(AHt);this.Aa7.L(A.jb.E1);this.Aa7.AnG(
Ale);this.Aa7.Z(true);this.Aa$.H(AHu);this.Aa$.L(A.jb.H9);this.Aa$.AnG(Ale);this.
Aa$.Z(true);this.Aa9.H(AHv);this.Aa9.L(A.jb.Gj);this.Aa9.AnG(Ale);this.Aa9.Z(true
);this.AjG.Filter=147;this.Aru.Filter=1;this.VO.BmA(360);this.VO.BnQ(22);this.VO.
Bn0(2);this.J(this.Aa8,0);this.J(this.Aba,0);this.J(this.Aa_,0);this.J(this.Background
,0);this.J(this.Aa7,0);this.J(this.Aa$,0);this.J(this.Aa9,0);this.Aa8.Zx(this.VO
);this.Aba.Zx(this.VO);this.Aa_.Zx(this.VO);this.Background.Ax(A.aaL(A.ach.NV));
this.Aa7.Zx(this.VO);this.Aa$.Zx(this.VO);this.Aa9.Zx(this.VO);this.AjG.BL=[this
,this.BAR];this.Aru.BL=[this,this.I1];},_Done:function(){this.__proto__=A.Core.P;
this.Aa8._Done();this.Aba._Done();this.Aa_._Done();this.Background._Done();this.
Aa7._Done();this.Aa$._Done();this.Aa9._Done();this.AjG._Done();this.Aru._Done();
this.VO._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa8._ReInit();this.Aba._ReInit();this.Aa_._ReInit();this.Background.
_ReInit();this.Aa7._ReInit();this.Aa$._ReInit();this.Aa9._ReInit();this.AjG._ReInit(
);this.Aru._ReInit();this.VO._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa$).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aru)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asu={Akk:null,Ase:null,Background:null,TS:null,TN:null,AbW:null,AbV:null,AbU:
null,Acu:null,Act:null,Acs:null,Acj:null,Aci:null,AbP:null,AbO:null,Ab$:null,Ab_:
null,AqA:null,Init:function(aArg){},Bkw:function(G){this.AbW.R(AWc);this.AbV.R(A.
jV);this.AbU.R(A.jV);this.Acu.R(AWd);this.Act.R(A.jV);this.Acs.R(A.jV);this.Acj.
R(A.jV);this.Aci.R(A.jV);this.AbP.R(A.jV);this.AbO.R(A.jV);this.Ab$.R(A.jV);this.
Ab_.R(A.jV);},Bot:function(G){this.TN.Z(true);this.TS.Z(true);var IF=this.Im();if(
!IF)return;this.TS.R(IF.GetFPS().toFixed()+AHw);this.TN.R(AWe);this.TN.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akk={I:this},0);A.Core.Timer._Init.call(this.Ase={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TS={I:this},0);A.acg.
Text._Init.call(this.TN={I:this},0);A.acg.Text._Init.call(this.AbW={I:this},0);A.
acg.Text._Init.call(this.AbV={I:this},0);A.acg.Text._Init.call(this.AbU={I:this}
,0);A.acg.Text._Init.call(this.Acu={I:this},0);A.acg.Text._Init.call(this.Act={I:
this},0);A.acg.Text._Init.call(this.Acs={I:this},0);A.acg.Text._Init.call(this.Acj={
I:this},0);A.acg.Text._Init.call(this.Aci={I:this},0);A.acg.Text._Init.call(this.
AbP={I:this},0);A.acg.Text._Init.call(this.AbO={I:this},0);A.acg.Text._Init.call(
this.Ab$={I:this},0);A.acg.Text._Init.call(this.Ab_={I:this},0);A.acg.AL._Init.call(
this.AqA={I:this},0);this.__proto__=C.Asu;this.H(AcP);this.Ar(false);this.Akk.PV(
2000);this.Akk.WG(1);this.Akk.Ar(true);this.Ase.Ar(true);this.Background.A0(0x3F
);this.Background.H(AcP);this.Background.L(0x78000000);this.TS.H(AWf);this.TS.A6(
0x14);this.TS.R(A.jV);this.TS.L(0xFFFFFC00);this.TS.Z(false);this.TN.H(AWg);this.
TN.A6(0x11);this.TN.R(A.jV);this.TN.Z(false);this.AbW.H(AWh);this.AbW.A6(0x11);this.
AbW.R(A.jV);this.AbV.H(AHx);this.AbV.A6(0x11);this.AbV.R(A.jV);this.AbU.H(As5);this.
AbU.A6(0x14);this.AbU.R(A.jV);this.Acu.H(AHy);this.Acu.A6(0x11);this.Acu.R(A.jV);
this.Act.H(AHz);this.Act.A6(0x11);this.Act.R(A.jV);this.Acs.H(Ayg);this.Acs.A6(0x14
);this.Acs.R(A.jV);this.Acj.H(AHA);this.Acj.A6(0x11);this.Acj.R(A.jV);this.Aci.H(
Ayh);this.Aci.A6(0x14);this.Aci.R(A.jV);this.AbP.H(AWi);this.AbP.A6(0x11);this.AbP.
R(A.jV);this.AbO.H(AWj);this.AbO.A6(0x14);this.AbO.R(A.jV);this.Ab$.H(AWk);this.
Ab$.A6(0x11);this.Ab$.R(A.jV);this.Ab_.H(AWl);this.Ab_.A6(0x14);this.Ab_.R(A.jV);
this.AqA.H(AHB);this.J(this.Background,0);this.J(this.TS,0);this.J(this.TN,0);this.
J(this.AbW,0);this.J(this.AbV,0);this.J(this.AbU,0);this.J(this.Acu,0);this.J(this.
Act,0);this.J(this.Acs,0);this.J(this.Acj,0);this.J(this.Aci,0);this.J(this.AbP,
0);this.J(this.AbO,0);this.J(this.Ab$,0);this.J(this.Ab_,0);this.J(this.AqA,0);this.
Akk.MC=[this,this.Bkw];this.Ase.MC=[this,this.Bot];this.TS.S(A.aaL(A.fl.Ak));this.
TN.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));this.
AbU.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.S(A.aaL(A.fl.Ak));this.
Acs.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.S(A.aaL(A.fl.Ak));this.
AbP.S(A.aaL(A.fl.Ak));this.AbO.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));this.
Ab_.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akk._Done();this.Ase._Done();this.Background._Done();this.TS._Done();this.TN.
_Done();this.AbW._Done();this.AbV._Done();this.AbU._Done();this.Acu._Done();this.
Act._Done();this.Acs._Done();this.Acj._Done();this.Aci._Done();this.AbP._Done();
this.AbO._Done();this.Ab$._Done();this.Ab_._Done();this.AqA._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akk._ReInit();this.
Ase._ReInit();this.Background._ReInit();this.TS._ReInit();this.TN._ReInit();this.
AbW._ReInit();this.AbV._ReInit();this.AbU._ReInit();this.Acu._ReInit();this.Act.
_ReInit();this.Acs._ReInit();this.Acj._ReInit();this.Aci._ReInit();this.AbP._ReInit(
);this.AbO._ReInit();this.Ab$._ReInit();this.Ab_._ReInit();this.AqA._ReInit();this.
TS.S(A.aaL(A.fl.Ak));this.TN.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.AbV.
S(A.aaL(A.fl.Ak));this.AbU.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.
S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.
S(A.aaL(A.fl.Ak));this.AbP.S(A.aaL(A.fl.Ak));this.AbO.S(A.aaL(A.fl.Ak));this.Ab$.
S(A.aaL(A.fl.Ak));this.Ab_.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ase).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Act)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGM={FM:null,Dl:null,Av:null,Jx:null,HM:null,Uh:null,Bc:null,So:null,Gy:null
,Gx:null,FY:0,A_:0,Bj6:false,Init:function(aArg){},Ai:function(Ae){C.Ds.Ai.call(
this,Ae);this.Hx.Z(false);this.H5.Z(false);if(!!this.Dl){this.So.R(this.Av.Format(
AWm));this.Uh.R(this.Av.Format(MK));}if(this.A_===1){this.HM.Z(true);this.HM.H(this.
So.M);this.HM.L(A.jb.Bm);this.So.L(this.Background.AQ);this.Uh.L(A.jb.Bm);}else if(
this.A_===2){this.HM.Z(true);this.HM.H(this.Uh.M);this.HM.L(A.jb.Bm);this.So.L(A.
jb.Bm);this.Uh.L(this.Background.AQ);}else{this.HM.Z(false);this.So.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Uh.L(this.V.AQ);}},Qu:function(G){if(this.FI===1)A.pe([
this,this.Vc],this);else if(this.FI===4)A.pe([this,this.AiH],this);else if(this.
FI===5)A.pe([this,this.Ait],this);C.Ds.Qu.call(this,G);},Ke:function(G){switch(this.
A_){case 0:C.Ds.Ke.call(this,G);break;case 2:break;default:this.Ady(this);}},J$:
function(G){switch(this.A_){case 0:C.Ds.J$.call(this,G);break;default:this.Ais(this
);}},AdA:function(G){var F;if(!!this.Dl)this.Un((F=this.Dl,F[1].call(F[0])));},Ab6:
function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.AdA],this.Dl
,0);this.Dl=E;if(!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA],this);
},Un:function(E){if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.FY);this.
Am();},Ady:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Vc],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},Vc:function(G){this.Ex(this.A_+1);},Al5:
function(G){this.FI=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiH],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},Al4:function(G){this.FI=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Ait],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiH:function(G){
var B;var F;var BO=this.FY;if(this.A_===1)this.Av.AnB(this.Av.AjU+1);if(this.A_===
2)this.Av.AnE(this.Av.Av5+1);this.Av.AnH(0);this.Un(((B=(this.Av.JU()|0))<0)?B+0x100000000:
B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FY));A.abo(this.
Dl,0);}},Ait:function(G){var B;var F;var BO=this.FY;if(this.A_===1)this.Av.AnB(this.
Av.AjU-1);if(this.A_===2)this.Av.AnE(this.Av.Av5-1);this.Av.AnH(0);this.Un(((B=(
this.Av.JU()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[
2].call(F[0],this.FY));A.abo(this.Dl,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).B$=[this,this.Vc];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=
this.N,F[1].call(F[0])).B$=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){
var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EO;this.Bj6=true;
if((this.A_<0)||(this.A_>2))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.
Bw=!!this.A_;this.Am();},Ais:function(G){if(this.A_>1)this.Ex(this.A_-1);},_Init:
function(aArg){C.Ds._Init.call(this,aArg);A.Core.Bs._Init.call(this.Av={I:this},
0);A.Core.BK._Init.call(this.Jx={I:this},0);A.acg.AL._Init.call(this.HM={I:this}
,0);A.acg.Text._Init.call(this.Uh={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.So={I:this},0);A.Core.BK._Init.call(this.Gy={I:this
},0);A.Core.BK._Init.call(this.Gx={I:this},0);this.__proto__=C.AGM;this.H(UZ);this.
V.R(Ayi);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H5.Z(false);this.Jx.Filter=1;this.
HM.H(AWn);this.HM.L(0x55FFFFFF);this.Uh.H(AWo);this.Uh.Ja(true);this.Bc.H(AWp);this.
Bc.A6(0x14);this.Bc.R(AWq);this.So.H(AWr);this.So.Ja(true);this.So.A6(0x14);this.
Gy.Filter=4;this.Gy.Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HM,0);
this.J(this.Uh,0);this.J(this.Bc,0);this.J(this.So,0);this.Jx.BL=[this,this.Ady];
this.Uh.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.So.S(A.aaL(A.fl.EK));this.
Gy.BL=[this,this.Al5];this.Gy.D1=[this,this.AiH];this.Gx.BL=[this,this.Al4];this.
Gx.D1=[this,this.Ait];this.FM=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ds;this.Av._Done();this.Jx._Done();this.HM._Done();this.Uh._Done(
);this.Bc._Done();this.So._Done();this.Gy._Done();this.Gx._Done();C.Ds._Done.call(
this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit();this.Jx._ReInit(
);this.HM._ReInit();this.Uh._ReInit();this.Bc._ReInit();this.So._ReInit();this.Gy.
_ReInit();this.Gx._ReInit();this.Uh.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.So.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((
B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Uh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CG={B6:null,AmT:null,AqP:null,Em:null,Text:null,String:A.jV,Bd0:A.jV,Kj:0x12
,ALa:0,AQ:0xFFFFFFFF,N7:0,AUA:0,A$p:0,Bd1:true,G4:function(CN){var LJ=(A.Core.ARB.
isPrototypeOf(CN)?CN:null);if(!!LJ)this.BC4(this);return A.Core.P.G4.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajl],this);}
,Dc:function(aFilter){return A.abh(this.Text.Dc(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bd1){this.Bd0=E;this.Bd1=false;
}this.ALa=E.length;A.pe([this,this.Ajl],this);},S:function(E){if(this.B6===E)return;
this.B6=E;A.pe([this,this.Ajl],this);},AZ:function(E){if(this.AmT===E)return;this.
AmT=E;A.pe([this,this.Ajl],this);},Cr:function(E){if(this.AqP===E)return;this.AqP=
E;A.pe([this,this.Ajl],this);},A6:function(E){if(E===this.Kj)return;this.Kj=E;this.
Text.A6(E);},Ajl:function(G){var B;var ALg=0;if(!this.ALa){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KS(false);if(!!this.B6){ALg=
this.B6.Yt(this.String,0,this.ALa);if(ALg<(((B=this.M)[2]-B[0])-(2*this.Text.Jd)
)){this.Text.S(this.B6);this.Text.Aw7(this.N7);return;}}this.Text.KS(true);if(!!
this.AmT){ALg=this.AmT.Yt(this.String,0,this.ALa);this.Text.S(this.AmT);this.Text.
Aw7(this.AUA);if((ALg<(((B=this.M)[2]-B[0])-(2*this.Text.Jd)))&&(((B=this.Text.Dc(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqP){this.Text.S(this.AqP);
if(((B=this.Text.Dc())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw7((((this.Text.
B6.Ascent+this.Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BC4:function(G){this.R(this.Bd0);},Q7:function(E){if(
A.aa0(this.Em,E))return;this.Em=E;this.Text.Q7(E);},ASy:function(){return A.abh(
this.Text.Dc(),this.M.slice(0,2));},Afh:function(AoM){return A.abf(this.M.slice(
0,2),this.Text.Afh(AoM));},Aw7:function(E){if(this.N7===E)return;this.N7=E;A.pe([
this,this.Ajl],this);},BnS:function(E){if(this.AUA===E)return;this.AUA=E;A.pe([this
,this.Ajl],this);},BnT:function(E){if(this.A$p===E)return;this.A$p=E;A.pe([this,
this.Ajl],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CG;this.H(AHC);this.Ar(false);
this.Text.A0(0x3F);this.Text.H(AHC);this.Text.R(Ro);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqP)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjS={Y:null,IN:null,AeM:null,I8:null,Na:null,AeG:null,AeL:null,AeK:null,AeH:
null,AeJ:null,AeI:null,Nc:null,NX:null,Mu:null,Df:function(E){C.Yu.Df.call(this,
E);this.IN.L(E);this.AeM.L(E);this.I8.L(E);this.Na.L(E);this.Mu.L(E);this.AeG.L(
E);this.Nc.L(E);this.NX.L(E);this.AeL.L(E);this.AeK.L(E);this.AeH.L(E);this.AeJ.
L(E);this.AeI.L(E);},DX:function(G){C.Yu.DX.call(this,G);this.XO(8,1,this.Na);this.
XO(12,1,this.Mu);this.XO(11,1,this.AeG);this.XO(7,1,this.Nc);this.XO(14,1,this.NX
);this.XO(1,4,this.IN);this.XO(1,1,this.AeM);this.XO(4,1,this.I8);this.XO(22,1,this.
AeL);this.XO(26,1,this.AeK);this.XO(30,1,this.AeH);this.XO(19,1,this.AeJ);this.XO(
31,1,this.AeI);this.Text.Z(!this.Y.TQ(null,0x1));},XO:function(AJr,Eb,AfU){var ABe=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adk=A._GetAutoObject(
A.Device.Device).An.Filter.DL(AJr,Eb);if(!!Adk){ABe=true;switch(AJr){case 14:{var
Azu=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adk)?Adk:null);if(!!Azu)AfU.
Ax(A._GetAutoObject(A.Device.Converter).A5j(Azu.A5));}break;case 7:{var Azu=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adk)?Adk:null);if(!!Azu)AfU.Ax(A._GetAutoObject(
A.Device.Converter).AmV(Azu.A5));}break;case 1:if(Eb===4)AfU.Ax(A.aaL(A.ach.ADL)
);else if(Adk.Operator===4)ABe=false;break;case 22:switch(Adk.Operator){case 0:case
3:AfU.Ax(A.aaL(A.ach.AQI));break;default:AfU.Ax(A.aaL(A.ach.AjY));}break;case 26:
switch(Adk.Operator){case 0:case 3:AfU.Ax(A.aaL(A.ach.AQG));break;default:AfU.Ax(
A.aaL(A.ach.AvD));}break;default:;}}else if((AJr===1)&&(Eb===4)){ABe=true;AfU.Ax(
A.aaL(A.ach.AeC));}}else if((AJr===1)&&(Eb===4)){ABe=true;AfU.Ax(A.aaL(A.ach.AeC
));}AfU.Z(ABe);},_Init:function(aArg){C.Yu._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IN={I:this},0);A.acg.Ap._Init.call(
this.AeM={I:this},0);A.acg.Ap._Init.call(this.I8={I:this},0);A.acg.Ap._Init.call(
this.Na={I:this},0);A.acg.Ap._Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(
this.AeL={I:this},0);A.acg.Ap._Init.call(this.AeK={I:this},0);A.acg.Ap._Init.call(
this.AeH={I:this},0);A.acg.Ap._Init.call(this.AeJ={I:this},0);A.acg.Ap._Init.call(
this.AeI={I:this},0);A.acg.Ap._Init.call(this.Nc={I:this},0);A.acg.Ap._Init.call(
this.NX={I:this},0);A.acg.Ap._Init.call(this.Mu={I:this},0);this.__proto__=C.AjS;
this.Y.A0(0x3F);this.Y.H(AWs);this.Y.JV(3);this.IN.H(Ayj);this.AeM.H(As6);this.AeM.
Aj(true);this.I8.H(Ayk);this.I8.Aj(true);this.Na.H(AWt);this.Na.Aj(true);this.AeG.
H(AWu);this.AeG.Aj(true);this.AeL.H(AHD);this.AeL.Aj(true);this.AeK.H(AHD);this.
AeK.Aj(true);this.AeH.H(AWv);this.AeH.Aj(true);this.AeJ.H(AHE);this.AeJ.Aj(true);
this.AeI.H(AHE);this.AeI.Aj(true);this.Nc.H(AHF);this.Nc.Aj(true);this.NX.H(AHG);
this.NX.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mu.H(AHF);this.Mu.Aj(true);
this.J1(this.Gw,-3);this.J1(this.D2,-3);this.J1(this.A$,-3);this.J1(this.AP,-2);
this.J(this.Y,-2);this.J(this.IN,-2);this.J(this.AeM,-2);this.J(this.I8,-2);this.
J(this.Na,-2);this.J(this.AeG,-2);this.J(this.AeL,-2);this.J(this.AeK,-2);this.J(
this.AeH,-2);this.J(this.AeJ,-2);this.J(this.AeI,-2);this.J(this.Nc,-2);this.J(this.
NX,-2);this.J(this.Mu,0);this.IN.Ax(A.aaL(A.ach.AeC));this.AeM.Ax(A.aaL(A.ach.AQv
));this.I8.Ax(A.aaL(A.ach.APT));this.Na.Ax(A.aaL(A.ach.ADG));this.AeG.Ax(A.aaL(A.
ach.Ag7));this.AeL.Ax(A.aaL(A.ach.AjY));this.AeK.Ax(A.aaL(A.ach.AvD));this.AeH.Ax(
A.aaL(A.ach.AQs));this.AeJ.Ax(A.aaL(A.ach.AQt));this.AeI.Ax(A.aaL(A.ach.AQr));this.
Nc.Ax(A.aaL(A.ach.ADI));this.NX.Ax(A.aaL(A.ach.AvI));this.Mu.Ax(A.aaL(A.ach.ADO)
);},_Done:function(){this.__proto__=C.Yu;this.Y._Done();this.IN._Done();this.AeM.
_Done();this.I8._Done();this.Na._Done();this.AeG._Done();this.AeL._Done();this.AeK.
_Done();this.AeH._Done();this.AeJ._Done();this.AeI._Done();this.Nc._Done();this.
NX._Done();this.Mu._Done();C.Yu._Done.call(this);},_ReInit:function(){C.Yu._ReInit.
call(this);this.Y._ReInit();this.IN._ReInit();this.AeM._ReInit();this.I8._ReInit(
);this.Na._ReInit();this.AeG._ReInit();this.AeL._ReInit();this.AeK._ReInit();this.
AeH._ReInit();this.AeJ._ReInit();this.AeI._ReInit();this.Nc._ReInit();this.NX._ReInit(
);this.Mu._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Yu.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amv={H8:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);this.H8.Gr();this.H8.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Re.CC.call(this,G);},An8:function(){C.Re.
An8.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).Bz2(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu));this.C9.L(A._GetAutoObject(
A.acj.Temperature).Bz5(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lu));this.JP.L(A._GetAutoObject(A.acj.Temperature).Bz3(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu));this.HG.L(A.
_GetAutoObject(A.acj.Temperature).Bz4(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lu));this.MH.L(this.JP.AQ);this.TemperatureUnit.
L(this.JP.AQ);}break;default:;}},AcG:function(){C.Re.AcG.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cw(A.aaL(A.ach.AQT));this.N.C2(A.aaL(
A.ach.Am3));}break;case 4:{this.N.Cw(null);this.N.C2(A.aaL(A.ach.AvQ));}break;default:;
}},WU:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lu>3240)&&(A._GetAutoObject(A.Device.
Device).Lu<5460)){A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H8.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lu);var B1=A._GetAutoObject(A.Device.Converter).AsI(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu);this.H8.OnSetRatingTemperature(
B1);this.H8.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();
}break;case 4:this.AKH(this);break;default:;}},AkX:function(G){C.Re.AkX.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKH(this);break;default:;}},AxY:function(
){C.Re.AxY.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JP.R(A._GetAutoObject(A.acj.Temperature).Bz_(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu));break;default:;}},AxZ:function(
){C.Re.AxZ.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WH(A._GetAutoObject(A.acj.Temperature).Bz6(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lu));this.Jg.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WH(16711680
);this.Jg.Ar(true);}break;default:this.Jg.Ar(false);}},AUM:function(){this.C9.Ax(
A.aaL(A.ach.AvP));this.C9.Cv(A._GetAutoObject(A.acj.Temperature).Bz$(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu));this.NV.Cv(
0);},_Init:function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.Amv;this.Dr(
C.IL);this.H8=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Re._Mark.
call(this,D);if((B=this.H8)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.AhB={N6:null,DK:null,Il:null,Bc:null,AuB:null,String:A.jV,AxM:A.jV,Mx:7,Akb:
2,KT:0,AUZ:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Akb,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Il.S(this.DK.B6);this.Il.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WM],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahw:function(
E){if(this.AxM===E)return;this.AxM=E;this.Il.R(E);},Ab5:function(E){this.Mx=E;if(
E<10)this.ATm(2);else if(E<40)this.ATm(1);else this.ATm(0);A.pe([this,this.WM],this
);},WM:function(G){var B;while(!!this.Bc.Ah)this.HP(this.Bc.Ah);if(this.Mx>1){var
Adf=this.AOQ();var A2i=this.AOO();var Apr=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var Az9;var AK6;var Aua;var Ama=null;if(!!this.N6&&(this.N6.AY>0))Ama=this.N6.K1;
while((Adf>=A2i)&&(Adf>0)){var AtN=A._NewObject(C.Ajv,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*(((Adf-A2i)/86400)|0))/this.Mx)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*((((Adf-A2i)/86400)|0)+1))/this.Mx)|0;while(!!Ama&&(Ama.Timestamp>=
Adf)){if(Ama.Timestamp<(Adf+86400))AtN.Ou(Ama.A5,Ama.Timestamp);Ama=Ama.Ah;}var Aum=
0;if(AtN.AY>0)Aum=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtN.AY
)|0;else if(this.Mx<10){Aum=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
Aua=A._NewObject(A.acg.Text,0);Aua.H([x1,Apr,x2,Apr+Aum]);Aua.S(A.aaL(A.fl.Bh));
Aua.L(A.jb.Text);Aua.R(A.aaR(A.acf.Afd));this.J(Aua,0);}var AJU=AtN.K1;var O=0;while(
!!AJU){if(O>=AtN.AY)throw new Error(AWw);Az9=A._NewObject(A.acg.AL,0);Az9.L(A._GetAutoObject(
A.acj.Assessment).Qr(AJU.A5));if(O===(AtN.AY-1))Az9.H([x1,Apr+(O*Aum),x2,this.Bc.
M[1]]);else Az9.H([x1,Apr+(O*Aum),x2,Apr+((O+1)*Aum)]);this.J(Az9,0);AJU=AJU.Ah;
O=O+1;}if(this.AUZ){var ByQ=A._GetAutoObject(A.Device.Helper).Aqp(A._GetAutoObject(
A.Device.Helper).Dv());var ByP=A._GetAutoObject(A.Device.Helper).Aqp(Adf);if(ByQ===
ByP){var ALy=A._NewObject(A.acg.Aeq,0);ALy.L(A.jb.Text);var Ben=(x1+this.Akb)+(((
x2-x1)/2)|0);ALy.H([Ben-4,this.Bc.M[1]-4,Ben+4,this.Bc.M[1]]);ALy.Zx(this.AuB);this.
J(ALy,0);}}Adf=Adf-86400;if(this.Akb>0){AK6=A._NewObject(A.acg.AL,0);AK6.H([x1,Apr
,x1+this.Akb,Apr+((((B=this.M)[3]-B[1])/2)|0)]);AK6.L(A.jb.Bc);this.J(AK6,0);}}}
},Ab7:function(E){this.N6=E;A.pe([this,this.WM],this);},ATm:function(E){if(this.
Akb===E)return;this.Akb=E;A.pe([this,this.WM],this);},Df:function(E){if(this.KT===
E)return;this.KT=E;this.DK.L(E);this.Il.L(E);},AOO:function(){var B;return this.
AOQ()-(((((B=this.Mx)<0)?B+0x100000000:B)-1)*86400);},AOQ:function(){return A._GetAutoObject(
A.Device.Converter).AhT();},BnW:function(E){if(this.AUZ===E)return;this.AUZ=E;A.
pe([this,this.WM],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Il={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.AxW._Init.call(this.AuB={I:this},0);
this.__proto__=C.AhB;this.H(BD);this.Ar(false);this.DK.H(AHH);this.DK.Hn(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Il.H(AHH);this.Il.Hn(5);this.Il.A6(0x14);this.
Il.L(A.jb.Text);this.Bc.H(AWx);this.Bc.L(A.jb.Bc);this.KT=A.jb.Text;this.AuB.H(AWy
);this.J(this.DK,0);this.J(this.Il,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Il.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Il._Done();this.Bc._Done();this.AuB._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Il._ReInit();this.Bc._ReInit();this.AuB._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Il.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Il)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AuB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A5p={Ah:null,Timestamp:0,A5:0,_Init:function(
aArg){this.__proto__=C.A5p;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajv={K1:null,MX:null,AY:0,Ou:
function(A7,Qi){var Hh;Hh=A._NewObject(C.A5p,0);Hh.A5=A7;Hh.Timestamp=Qi;if(!this.
K1){this.K1=Hh;this.MX=Hh;this.AY=1;}else{this.MX.Ah=Hh;this.MX=Hh;this.AY=this.
AY+1;}},_Init:function(aArg){this.__proto__=C.Ajv;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MX)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ej={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.ML],this);},DE:function(G){var B;var Fi=0;var X=this.AV;switch(
this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;
default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HI(X,true,null,null);this.DJ(this);},Al3:function(G){A._GetAutoObject(C.A8
).FB();},ApM:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Agw)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Agw,this);},Fk:function(G){var B;this.
Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.
Y.Br[1]);},DJ:function(G){var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!GZ){this.N.Hy(A.jV);this.N.CR(GZ.AxP);this.N.Jf.C3(255);this.N.GW.C3(GZ.Axl);this.
N.AFf(GZ.Avr);this.N.Anz(GZ.AmU);this.N.C1(GZ.AQm);this.N.C2(GZ.Aq7);GZ.A3o(this
);}},ML:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ej;this.Background.H(Qc);this.Background.L(A.jb.CT);this.N.H(Xi);this.
N.Ar(false);this.N.Z(true);this.Y.H(Ff);this.Y.JV(1);this.Ay.H(It);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AT5={NE:null,AS4:null,Ad5:null,VI:null,GU:null,PopupTimeout:null,Aca:null,AgH:
null,PopupIdToString:null,AtI:null,Text:A.jV,AkJ:A.jV,AKc:A.jV,Ak4:0,ALi:-1,Azt:-
1,AKN:0,AT7:0,A2s:false,CP:function(){this.A_L(this.PopupIdToString.BS(this.AT7)
);},Init:function(aArg){this.Bpq(this);},Bg$:function(G){var B;if(this.Ak4>0){this.
A_1((this.Ak4/1000)|0);this.PopupTimeout.WG(0);this.PopupTimeout.PV(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxL(this);},Bg7:function(G){var M1=this.
Text;var AfX=this.AkJ;var AKL=A.abi(16,A.jV,null);var index=0;var Azo=0;while(AfX
!==A.jV){Azo=AfX.indexOf(A.Device.PopupParamSeparator,0);if(Azo!==-1){AKL.Set(index
,A.ab1(AfX,Azo,(AfX.length-Azo)+1));AfX=A.ab1(AfX,0,Azo+1);index=index+1;if(index>=
16){A.ab5("%s",(AWz+AfX)+AWA);AfX=A.jV;}}else{AKL.Set(index,AfX);AfX=A.jV;}}index=
0;while(index<M1.length){if((M1.charCodeAt(index)||0)===0x7B){var BdZ=M1.indexOf(
String.fromCharCode(0x7D),index);if(BdZ===-1){A.ab5("%s",(((AWB+M1)+AWC)+index.toFixed(
))+Alc);index=M1.length;}else{var BfS=(BdZ-index)-1;var A30=A.abW(M1,index+1,BfS
);var AKK=A.wz(A30,-1,10);M1=A.ab1(M1,index,BfS+2);if(A30===AWD)this.Boc(index);
else if(((AKK>0)&&(AKK<=16))&&(this.AkJ!==A.jV)){M1=A.abU(M1,AKL.Get(AKK-1),index
);if(this.A2s===true)this.Bob(A.wz(AKL.Get(AKK-1),0,10));}else A.ab5("%s",(AWE+A30
)+AWF);}}index=index+1;}this.Boa(M1);},CC:function(G){A.pe([this,this.Bg$],this);
},Ai:function(Ae){var B;this.Ad5.H(A.aaT(this.GU.Dc(),Ah0));this.VI.H(A.aaT(this.
GU.Dc(),Ah0));if(!!this.NE){this.NE.H(A.abM(this.NE.M,this.GU.M[0]));this.NE.H(A.
abO(this.NE.M,this.GU.M[3]+10));this.NE.H(A.abL(this.NE.M,(B=this.GU.M)[2]-B[0])
);this.NE.H(A.abI(this.NE.M,8));this.Ad5.H(A.abh(A.aaT(this.GU.Dc(),Ah0),AHI));this.
VI.H(A.abh(A.aaT(this.GU.Dc(),Ah0),AHI));}else{this.Ad5.H(A.aaT(this.GU.Dc(),Ah0
));this.VI.H(A.aaT(this.GU.Dc(),Ah0));}},DE:function(G){var JD=(A.Core.BK.isPrototypeOf(
G)?G:null);if((JD.CO===4)&&((this.VI.M[1]+this.M[1])<this.M[1])){this.GU.H(A.abO(
this.GU.M,this.GU.M[1]+28));this.Am();}else if((JD.CO===5)&&((this.VI.M[3]+this.
M[1])>this.N.M[1])){this.GU.H(A.abO(this.GU.M,this.GU.M[1]-28));this.Am();}if((JD.
CO===6)&&!!this.D_().CE)this.D_().AFo(1);else if((JD.CO===7)&&!!this.D_().B$)this.
D_().AFo(3);},I1:function(G){switch(this.D_().Ahm){case 1:this.Al3(this);break;case
3:this.ApM(this);break;case 2:this.AAF(this);break;case 0:break;default:A.ab5("%s%e"
,AWG,this.D_().Ahm);}},Al3:function(G){var B;(B=this.D_().CE)?B[1].call(B[0],this
):null;},ApM:function(G){var B;(B=this.D_().B$)?B[1].call(B[0],this):null;},AAF:
function(G){var B;(B=this.D_().Cf)?B[1].call(B[0],this):null;},LO:function(G){this.
N.I9.L((this.N.I9.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
AxL(this);},A_L:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bg7],this);},BBf:function(G){var B;this.A_1(this.Azt-1);if(this.Azt<=0){this.PopupTimeout.
AxL(this);(B=this.AS4)?B[1].call(B[0],this):null;}},A_N:function(E){if(this.Ak4===
E)return;this.Ak4=E;A.pe([this,this.Bg$],this);},A_x:function(E){if(this.AkJ===E
)return;this.AkJ=E;A.pe([this,this.Bg7],this);},Boa:function(E){if(this.AKc===E)
return;this.AKc=E;this.ABx(this);this.ByX(this);},ABx:function(G){if((this.Azt!==-
1)&&(this.ALi!==-1)){var BzM=this.AtI.Format(AWH);this.GU.R(A.abU(this.AKc,BzM,this.
ALi));}else this.GU.R(this.AKc);this.GU.H(AHJ);},Boc:function(E){if(this.ALi===E
)return;this.ALi=E;this.ABx(this);},A_1:function(E){if(this.Azt===E)return;this.
Azt=E;this.AtI.AFT(E);A.pe([this,this.ABx],this);},ByX:function(G){this.GU.Dc();
if(this.GU.M[1]<=this.M[1])this.GU.H(A.abO(this.GU.M,28));this.Am();},A_3:function(
E){if(this.A2s===E)return;this.A2s=E;if(E===true)A.pe([this,this.BBR],this);},BBR:
function(G){if(!this.NE){this.NE=A._NewObject(A.acr.ADw,0);this.NE.Ga(0);this.NE.
EV(100);this.NE.OnSetAppearance(this.Aca);this.J(this.NE,0);this.AhE(this.NE,this.
GU);}this.NE.Bx(this.AKN);},Bob:function(E){if(this.AKN===E)return;this.AKN=E;if(
!!this.NE)this.NE.Bx(this.AKN);},Bpq:function(G){var B;this.N.C3(0);this.AgH.AnX(
this);},BnM:function(E){if(this.AT7===E)return;this.AT7=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad5={I:this},0);A.acg.BU._Init.
call(this.VI={I:this},0);A.acg.Text._Init.call(this.GU={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADx._Init.call(this.Aca={I:this},
0);A.acl.Gm._Init.call(this.AgH={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtI={I:this},0);this.
__proto__=C.AT5;var B;this.H(Ce);this.Background.H(Ff);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ek.Ar(false);this.Ek.Z(false);this.Ad5.H(AHK);this.
Ad5.L(A.jb.CJ);this.VI.H(AHK);this.VI.Nm(2);this.VI.L(A.jb.Text);this.GU.H(AHJ);
this.GU.Hn(10);this.GU.Ja(true);this.GU.Bn_(0);this.GU.KS(true);this.GU.L(A.jb.Text
);this.PopupTimeout.PV(0);this.Aca.A_S(0);this.Aca.A_Q(A.jb.AV);this.Aca.A_P(0);
this.Aca.AF9(AHr);this.AgH.HO(1);this.AgH.B2=255;this.AgH.Cx=0;this.J1(this.Ek,-
1);this.J(this.Ad5,0);this.J(this.VI,0);this.J(this.GU,0);this.GU.S(A.aaL(A.fl.Af
));this.PopupTimeout.MC=[this,this.BBf];this.Aca.A_R(A.aaL(A.ach.NW));this.Aca.A_O(
A.aaL(A.ach.NW));this.AgH.Q=[B=this.N,B.Awo,B.A0s];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad5._Done();this.VI._Done();this.GU._Done();this.PopupTimeout.
_Done();this.Aca._Done();this.AgH._Done();this.PopupIdToString._Done();this.AtI.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad5._ReInit();this.VI._ReInit();this.GU._ReInit();this.PopupTimeout._ReInit();this.
Aca._ReInit();this.AgH._ReInit();this.PopupIdToString._ReInit();this.AtI._ReInit(
);this.GU.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS4)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtI)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mq={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Text;
GY=A.jb.Bm;}if(!this.LI){this.Background.L(FS);this.V.L(A.jb.Am4);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KH){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Mq;},_className:"Application::DarkThemeMenuItem"
};C.Anj={AdE:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Anj;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaG:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Ln:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.B$=[this,this.A3p];this.BP.Cf=null;this.BP.CE=[this,this.AaG];this.
BP.CR(A.aaR(A.acf.Ok));this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.AeA));}return this.
BP;},A3p:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).I1(this);},CC:function(G){},AIP:function(s){this.CC(s);},E4:function(
G){},AyJ:function(s){this.E4(s);},_Init:function(aArg){C.Abi._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APN={Wb:
null,YR:null,YL:null,Init:function(aArg){this.Bb(this.Wb);},Adv:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YR)A._GetAutoObject(A.Device.
Device).A3(6,true,A.jV,0,[this,this.BB5]);else if(Aa===this.Wb)A._GetAutoObject(
A.Device.Device).A3(9,true,A.jV,0,[this,this.BCo]);else if(Aa===this.YL)A._GetAutoObject(
C.A8).Cd(4);else throw new Error(Ayl);A._GetAutoObject(A.Device.Device).Dw(0);},
BB5:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(
As.PopupState===7))A._GetAutoObject(A.Device.Device).AGu();},BCo:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))
A._GetAutoObject(A.Device.Device).AxC();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mq._Init.call(this.Wb={I:this},0);C.Mq._Init.call(this.YR={I:this
},0);C.Mq._Init.call(this.YL={I:this},0);this.__proto__=C.APN;this.H(AcP);this.Wb.
H(BD);this.Wb.Ar(true);this.Wb.T(A.aaR(A.acf.A$G));this.Wb.Bi(true);this.YR.H(IW
);this.YR.Ar(true);this.YR.T(A.aaR(A.acf.A$o));this.YR.Bi(true);this.YL.H(Qd);this.
YL.Ar(true);this.YL.T(A.aaR(A.acf.ST));this.YL.Bi(true);this.J(this.Wb,0);this.J(
this.YR,0);this.J(this.YL,0);this.Wb.AR=[this,this.Adv];this.YR.AR=[this,this.Adv
];this.YL.AR=[this,this.Adv];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.Wb._Done();this.YR._Done();this.YL._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Wb._ReInit(
);this.YR._ReInit();this.YL._ReInit();this.Wb.T(A.aaR(A.acf.A$G));this.YR.T(A.aaR(
A.acf.A$o));this.YL.T(A.aaR(A.acf.ST));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GK={AaD:null,OverlayMenu:null,WQ:null,A4j:null
,Lb:null,A3Z:null,AkK:null,N4:null,AAd:100,BcW:false,Init:function(aArg){var B;A.
zX([this,this.Bfj],[B=A._GetAutoObject(A.Device.Device),B.Awp,B.AyS],0);A.zX([this
,this.Bfd],[B=A._GetAutoObject(A.Device.Device),B.ASK,B.A0q],0);A.zX([this,this.
A3g],[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyL],0);A.zX([this,this.BAM],[
B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyK],0);A.zX([this,this.BAN],[B=A._GetAutoObject(
A.Device.Device),B.A8J,B.Bbn],0);A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.
Device),B.ASV,B.A0y],0);A.zX([this,this.BfA],[B=A._GetAutoObject(A.Device.Device
),B.WD,B.Xj],0);A.pe([this,this.Bfj],this);A.pe([this,this.Bfd],this);A.pe([this
,this.ApN],this);A.pe([this,this.BfA],this);this.A4j.Au([B=this.WQ,B.AEA,B.Zp]);
this.J(this.WQ,0);this.Bb(this.WQ);this.ByA(this);},Ai:function(Ae){},Bfd:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEm){if(!this.AaD){this.AaD=A._NewObject(
C.Asu,0);this.AaD.H(A.abJ(this.AaD.M,this.WQ.M.slice(0,2)));this.AaD.H(A.abO(this.
AaD.M,this.WQ.M[3]-((B=this.AaD.M)[3]-B[1])));this.J(this.AaD,1);}}else{if(!!this.
AaD)this.HP(this.AaD);this.AaD=null;}},Bfj:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APN,0));break;case 8:this.Dw(A._NewObject(C.AL6,0));break;case 2:this.Dw(A._NewObject(
C.AL3,0));break;case 3:this.Dw(A._NewObject(C.AL_,0));break;case 4:this.Dw(A._NewObject(
C.AUn,0));break;case 5:this.Dw(A._NewObject(C.AVV,0));break;case 6:this.Dw(A._NewObject(
C.AT0,0));break;case 7:this.Dw(A._NewObject(C.Amx,0));break;case 11:this.Dw(A._NewObject(
C.AMC,0));break;case 12:this.Dw(A._NewObject(C.AMB,0));break;case 9:this.Dw(A._NewObject(
C.ARV,0));break;case 10:this.Dw(A._NewObject(C.AMx,0));break;case 14:this.Dw(A._NewObject(
C.ARR,0));break;case 15:this.Dw(A._NewObject(C.ARS,0));break;case 13:this.Dw(A._NewObject(
C.ART,0));break;case 16:this.Dw(A._NewObject(C.AMY,0));break;default:throw new Error(
AWI+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WJ).ArF(
null);this.N4.AqF(this.OverlayMenu,A._GetAutoObject(C.AxF),null,null,[B=this.OverlayMenu
,B.AyJ],null,true);this.Bb(this.WQ);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N4.AkM(this.OverlayMenu,A._GetAutoObject(C.AxE),null,null,null,null,null,[B=this.
OverlayMenu,B.AIP],null,false);this.Bb(this.N4);A._GetAutoObject(C.WJ).ArF(this.
OverlayMenu.Ln());}else if(!!this.Lb){this.Bb(this.N4);A._GetAutoObject(C.WJ).ArF(
this.Lb.Akr().Ln());}},Ahr:function(E){var B;if(this.Lb===E)return;if(!!this.Lb){
A._GetAutoObject(C.WJ).ArF(null);this.N4.AqF(this.Lb.Akr(),A._GetAutoObject(C.Afj
),null,null,[B=this.Lb.Akr(),B.AyJ],null,false);this.Bb(this.WQ);}this.Lb=E;if(!
!this.Lb){this.N4.AkM(this.Lb.Akr(),A._GetAutoObject(C.Afj),null,null,null,null,
null,[this,this.Bl8],null,false);this.Bb(this.N4);A._GetAutoObject(C.WJ).ArF(this.
Lb.Akr().Ln());}else if(!!this.OverlayMenu){this.Bb(this.N4);A._GetAutoObject(C.
WJ).ArF(this.OverlayMenu.Ln());}},ByA:function(G){var B;var F;this.J(this.A3Z,0);(
F=A._GetAutoObject(C.WJ),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WJ).M)[3]-B[1]))));this.ZF(this.N4);},A3g:function(G){if(A._GetAutoObject(A.Device.
Device).AmE)switch(A._GetAutoObject(A.Device.Device).Ij){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A8).Ab9(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa5<98)A._GetAutoObject(C.A8).Cd(4);}else{this.AAd=100;this.Bc6();}},BAM:
function(G){this.Bc6();},Bc6:function(){if(!A._GetAutoObject(A.Device.Device).AmE
){if(A._GetAutoObject(A.Device.Device).Aa5<=2){if(this.AAd>2)switch(A._GetAutoObject(
A.Device.Device).Ij){case 38:break;case 4:case 39:A._GetAutoObject(C.A8).Ab9(38);
break;default:A._GetAutoObject(C.A8).Cd(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa5<=10){if(this.AAd>10)switch(A._GetAutoObject(A.Device.Device).Ij){case
39:break;case 4:case 38:A._GetAutoObject(C.A8).Ab9(39);break;default:A._GetAutoObject(
C.A8).Cd(39);}}else if(A._GetAutoObject(A.Device.Device).Aa5<=20){if(this.AAd>20
)switch(A._GetAutoObject(A.Device.Device).Ij){case 39:break;case 4:case 38:A._GetAutoObject(
C.A8).Ab9(39);break;default:A._GetAutoObject(C.A8).Cd(39);}}else switch(A._GetAutoObject(
A.Device.Device).Ij){case 38:case 4:case 39:A._GetAutoObject(C.A8).FB();break;default:;
}this.AAd=A._GetAutoObject(A.Device.Device).Aa5;}},BAN:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqs){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A3(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anx(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A3(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anx(0
);}break;default:A.ab5("%s",AWJ+A._GetAutoObject(A.Device.Device).Aqs.toFixed());
}},ApN:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A8).Cd(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Ij===5)A._GetAutoObject(C.A8).Ab9(3);break;
default:;}},BfA:function(G){switch(A._GetAutoObject(A.Device.Device).P4.Z1){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).Ut(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WH(65535);A._GetAutoObject(A.Device.Device).Ut(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WH(255);A._GetAutoObject(A.Device.Device).Ut(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WH(16776960);A._GetAutoObject(
A.Device.Device).Ut(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WH(16711935
);A._GetAutoObject(A.Device.Device).Ut(true);}break;default:A.ab5("%s",AWK+A._GetAutoObject(
A.Device.Device).P4.Z1.toFixed());}this.Bn$(A._GetAutoObject(A.Device.Helper).Bj4(
));},Bl8:function(G){var B;this.Lb.Akr().CC(this);this.Lb.BBd(this);},Bn$:function(
E){if(this.BcW===E)return;this.BcW=E;if(E){if(A._GetAutoObject(A.Device.Device).
Ij===3)A._GetAutoObject(C.A8).Cd(27);else if(A._GetAutoObject(A.Device.Device).Ij
!==27)A._GetAutoObject(A.Device.Device).A3(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).Ij===27)A._GetAutoObject(A.Device.Device).A3(112,true,A.jV,0,[this
,this.A1e]);},A1e:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!As&&(As.Id===112))&&(As.PopupState===7))A._GetAutoObject(C.A8).Ab9(85);}
,Bk9:function(){return this.Lb;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkK._Init.call(this.AkK={I:this},0);C.N4._Init.call(this.N4={I:this},0);this.
__proto__=C.GK;this.H(Ce);this.N4.H(Qc);this.J(this.N4,0);this.WQ=A._NewObject(C.
WQ,0);this.A4j=A._GetAutoObject(C.A8);this.AkK.ANE=[this,this.Bk9,this.Ahr];this.
A3Z=A._GetAutoObject(C.WJ);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkK._Done();this.N4._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkK._ReInit();this.N4._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaD)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WQ)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4j)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Lb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3Z)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abi={A$c:
null,BP:null,N:null,Cq:null,Ana:null,Anc:null,QT:null,Anb:null,Am_:null,Ane:null
,Am$:null,DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;
case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x14
);if(!!X)this.Bb(X);},BbX:function(s){this.DE(s);},Al3:function(G){var D5=(A.Core.
BK.isPrototypeOf(G)?G:null);if(D5.Ach&&(this.D_().Aso===false))return;A.pe(this.
D_().CE,this);},AI2:function(s){this.Al3(s);},ApM:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);if(D5.Ach&&(this.D_().ZE===false))return;A.pe(this.D_().
B$,this);},AI4:function(s){this.ApM(s);},I1:function(G){if(this.QT.Ach)return;},
Atp:function(s){this.I1(s);},AAF:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?
G:null);if(D5.Ach&&(this.D_().WN===false))return;A.pe(this.D_().Cf,this);},AI3:function(
s){this.AAF(s);},D_:function(){if(!!this.Ln())return this.BP;else return this.N;
},Ln:function(){return this.BP;},GS:function(E){this.A$c=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BK._Init.
call(this.Cq={I:this},0);A.Core.BK._Init.call(this.Ana={I:this},0);A.Core.BK._Init.
call(this.Anc={I:this},0);A.Core.BK._Init.call(this.QT={I:this},0);A.Core.BK._Init.
call(this.Anb={I:this},0);A.Core.BK._Init.call(this.Am_={I:this},0);A.Core.BK._Init.
call(this.Ane={I:this},0);A.Core.BK._Init.call(this.Am$={I:this},0);this.__proto__=
C.Abi;this.H([0,0,C.Asx[0],C.Asx[1]]);this.N.H(Xi);this.N.Ar(false);this.N.Z(false
);this.Cq.Filter=147;this.Ana.Filter=26;this.Anc.Filter=28;this.QT.Filter=1;this.
Anb.Filter=27;this.Am_.Filter=44;this.Ane.Filter=9;this.Am$.Filter=42;this.J(this.
N,0);this.Cq.BL=[this,this.BbX];this.Cq.D1=[this,this.BbX];this.Ana.BL=[this,this.
AI2];this.Ana.D1=[this,this.AI2];this.Anc.BL=[this,this.AI4];this.Anc.D1=[this,this.
AI4];this.QT.BL=[this,this.Atp];this.QT.D1=[this,this.Atp];this.Anb.BL=[this,this.
AI3];this.Anb.D1=[this,this.AI3];this.Am_.BL=[this,this.AI2];this.Am_.D1=[this,this.
AI2];this.Ane.BL=[this,this.AI4];this.Ane.D1=[this,this.AI4];this.Am$.BL=[this,this.
AI3];this.Am$.D1=[this,this.AI3];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Ana._Done();this.Anc._Done();this.QT._Done();this.
Anb._Done();this.Am_._Done();this.Ane._Done();this.Am$._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Ana._ReInit();this.Anc._ReInit();this.QT._ReInit();this.Anb._ReInit(
);this.Am_._ReInit();this.Ane._ReInit();this.Am$._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A$c)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ana)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxE={_Init:function(){A.acl.AGS._Init.call(this,0);this.Kj=0x22;this.Ad9=true;
this.Au6=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxF={_Init:function(){A.acl.AGS._Init.call(this,0);this.Kj=0x22;this.Ad9=true;
this.Au6=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUX={Se:function(){var B;var Ao=(A.acl.Afb.isPrototypeOf(B=A.acl.Aen.Se.call(this
))?B:null);if(!Ao)throw new Error(As7);Ao.Cp.Cx=100;return Ao;},Sd:function(){var
B;var Ao=(A.acl.Axm.isPrototypeOf(B=A.acl.Aen.Sd.call(this))?B:null);if(!Ao)throw new
Error(As7);Ao.E0.B2=100;return Ao;},_Init:function(aArg){A.acl.Aen._Init.call(this
,aArg);this.__proto__=C.AUX;},_className:"Application::ShadeTransition"};C.Am0={
Ag_:null,SY:null,HR:null,DS:null,AnimalId:-1,GroupId:-1,ADd:true,Df:function(E){
C.BQ.Df.call(this,E);this.SY.L(E);this.HR.L(E);this.Ag_.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HR.R(A.aaR(A.acf.Afd)
);else this.HR.R(E.toFixed());},Ab3:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SY.R(A.aaR(A.acf.Afd));else this.SY.R(E.toFixed());},DX:function(
G){},Ns:function(s){this.DX(s);},A_f:function(E){if(this.ADd===E)return;this.ADd=
E;this.SY.Z(this.ADd);this.Ag_.Z(this.ADd);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag_={I:this},0);A.acg.Text._Init.call(this.SY={
I:this},0);A.acg.Text._Init.call(this.HR={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.Am0;this.Ag_.H(AWL);this.SY.H(AWM);this.SY.A6(0x11);this.
SY.R(A.aaR(A.acf.Afd));this.HR.H(AWN);this.HR.A6(0x11);this.HR.R(A.aaR(A.acf.Afd
));this.DS.H(AWO);this.J(this.Ag_,0);this.J(this.SY,0);this.J(this.HR,0);this.J(
this.DS,0);this.Ag_.Ax(A.aaL(A.ach.AQB));this.SY.S(A.aaL(A.fl.Af));this.HR.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BQ;this.Ag_._Done();this.SY._Done(
);this.HR._Done();this.DS._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ.
_ReInit.call(this);this.Ag_._ReInit();this.SY._ReInit();this.HR._ReInit();this.DS.
_ReInit();this.SY.R(A.aaR(A.acf.Afd));this.HR.R(A.aaR(A.acf.Afd));this.SY.S(A.aaL(
A.fl.Af));this.HR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this
,D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADn={Init:function(
aArg){var B;A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SK
],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper).W,B.A82,B.AnD],0);
A.zV([this,this.Ns],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Ns],[
B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC],0);A.zX([this,this.Ns],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9E,B.Axi],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8T,B.Ae3],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8U,B.Ur],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8X,B.Ae7],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper).W,B.A81,B.
Ae9],0);A.pe([this,this.Ns],this);},Df:function(E){C.Am0.Df.call(this,E);this.DS.
Df(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqY()){this.Ab3(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab3(-1);this.OnSetAnimalId(-1);}this.DS.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AE$(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae3(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Ur(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae7(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae9(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Am0._Init.call(this,aArg);this.
__proto__=C.ADn;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Km={AhQ:A.abi(3,A.jV,null),Ca:A.abi(3,0,{0:7,1:30,2:90}),Ann:3,Du:function(){
if(this.Ann<3)return this.Ann;else return 3;},C6:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ann))return-1;return this.Ca.Get(aIndex);},Gl:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ann))return AWP;return this.AhQ.Get(aIndex);},DZ:function(
A7){var O=0;while((O<3)&&(O<=this.Ann)){if(this.Ca.Get(O)===A7)return O;O=O+1;}return-
1;},H4:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ann)){if(this.Ca.Get(
O)>max)max=this.Ca.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhQ=[]).__proto__=C.Km.AhQ;(this.Ca=[]).__proto__=C.Km.Ca;this.
__proto__=C.Km;this.AhQ.Set(0,A.aaR(A.acf.A7F));this.AhQ.Set(1,A.aaR(A.acf.A7D));
this.AhQ.Set(2,A.aaR(A.acf.A7E));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhQ.Set(0,A.aaR(A.acf.A7F));this.AhQ.Set(1,A.aaR(A.acf.A7D));this.AhQ.Set(2,A.aaR(
A.acf.A7E));},_className:"Application::Days"};C.AUU={Amz:null,BT:null,Q8:null,QH:
null,A$6:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BBz],[B=A._GetAutoObject(A.Device.Device),B.Arz,B.Ato],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWQ+A._GetAutoObject(
A.Device.Converter).Ak2((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlM());this.H5.Z((this.AM<A._GetAutoObject(A.Device.Helper).A61())&&(
Fw||GE));},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Ke:function(G){var F;var BO=this.AM;C.Ds.Ke.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A61()){this.Bx(this.AM+10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J$:function(G){var F;var BO=this.
AM;C.Ds.J$.call(this,G);this.Bx(this.AM-10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_V:function(E){if(this.A$6===E)return;
this.A$6=E;this.Am();},BBz:function(G){this.Am();},_Init:function(aArg){C.Ds._Init.
call(this,aArg);A.acg.AL._Init.call(this.Amz={I:this},0);C.CG._Init.call(this.BT={
I:this},0);A.acg.AL._Init.call(this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={
I:this},0);this.__proto__=C.AUU;this.H(UZ);this.Background.H(UZ);this.V.H(As8);this.
V.L(A.jb.Bm);this.Amz.H(AWR);this.Amz.L(A.jb.Afu);this.Hx.H(AWS);this.BT.H(AWT);
this.BT.A6(0x12);this.BT.L(A.jb.Text);this.H5.H(AWU);this.Q8.H(AWV);this.Q8.L(A.
jb.E1);this.QH.H(AWW);this.J(this.Amz,-2);this.J(this.BT,-1);this.J(this.Q8,0);this.
J(this.QH,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EK));this.BT.AZ(A.aaL(A.fl.Af));this.QH.Ax(A.aaL(A.ach.ADD));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ds;this.Amz._Done();this.BT._Done();this.Q8.
_Done();this.QH._Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.
call(this);this.Amz._ReInit();this.BT._ReInit();this.Q8._ReInit();this.QH._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EK));this.
BT.AZ(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
Amz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnT={Q:null
,Ai4:null,Init:function(aArg){var B;A.zX([this,this.BbU],[B=A._GetAutoObject(A.Device.
Device),B.AEA,B.Bbg],0);A.pe([this,this.BbU],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ab9:function(Alp){A._GetAutoObject(A.Device.Device).Zp(Alp
);},AKB:function(G){if(this.K&&this.K.AKB)return this.K.AKB.apply(this,arguments
);else return C.AnT.Bb1.apply(this,arguments);},Bb1:function(G){var F;if(!this.Q
){A.ab5("%s",AWX);return;}var By=null;if(this.Ai4.Contains(A._GetAutoObject(A.Device.
Device).Ij)){By=this.Ai4.A$a();while(!!By&&(By.An7!==A._GetAutoObject(A.Device.Device
).Ij))By=this.Ai4.A$a();}if(!By)By=this.Bz9(A._GetAutoObject(A.Device.Device).Ij
);(F=this.Q,F[2].call(F[0],By));},BbU:function(s){this.AKB(s);},Bz9:function(Alp
){var By=null;switch(Alp){case 0:case 1:By=A._NewObject(C.AU3,0);break;case 2:By=
A._NewObject(C.X2,0);break;case 3:By=A._NewObject(C.AvC,0);break;case 53:By=A._NewObject(
C.AVJ,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.AR$,0);break;case 6:By=A._NewObject(C.ARK,0);break;case 16:By=A._NewObject(C.ANM
,0);break;case 22:By=A._NewObject(C.AVE,0);break;case 17:By=A._NewObject(C.AVi,0
);break;case 42:By=A._NewObject(C.ANJ,0);break;case 87:By=A._NewObject(C.AUv,0);
break;case 88:By=A._NewObject(C.AUu,0);break;case 89:By=A._NewObject(C.AVz,0);break;
case 95:By=A._NewObject(C.AVC,0);break;case 23:By=A._NewObject(C.AV2,0);break;case
18:By=A._NewObject(C.ANZ,0);break;case 19:By=A._NewObject(C.AUw,0);break;case 37:
By=A._NewObject(C.ARb,0);break;case 76:By=A._NewObject(C.AUb,0);break;case 63:By=
A._NewObject(C.ANX,0);break;case 64:By=A._NewObject(C.ANY,0);break;case 82:By=A.
_NewObject(C.ANW,0);break;case 83:By=A._NewObject(C.ANU,0);break;case 92:By=A._NewObject(
C.ANS,0);break;case 93:By=A._NewObject(C.ANV,0);break;case 65:By=A._NewObject(C.
ANT,0);break;case 5:By=A._NewObject(C.AVb,0);break;case 4:By=A._NewObject(C.Ad$,
0);break;case 39:By=A._NewObject(C.ANj,0);break;case 38:By=A._NewObject(C.ANC,0);
break;case 28:By=A._NewObject(C.Wx,0);break;case 7:By=A._NewObject(C.AqI,0);break;
case 81:By=A._NewObject(C.AN6,0);break;case 31:By=A._NewObject(C.Ars,0);break;case
78:By=A._NewObject(C.AR9,0);break;case 34:By=A._NewObject(C.AL1,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GJ,0);break;case 9:By=A._NewObject(C.I5,0);break;case 24:By=A._NewObject(C.AMg
,0);break;case 10:By=A._NewObject(C.Amv,0);break;case 21:By=A._NewObject(C.AMk,0
);break;case 11:By=A._NewObject(C.AMj,0);break;case 29:By=A._NewObject(C.AuN,0);
break;case 48:By=A._NewObject(C.AMi,0);break;case 30:By=A._NewObject(C.AMh,0);break;
case 12:By=A._NewObject(C.AMf,0);break;case 40:By=A._NewObject(C.AMe,0);break;case
14:By=A._NewObject(C.ANA,0);break;case 13:By=A._NewObject(C.ANB,0);break;case 20:
By=A._NewObject(C.AVT,0);break;case 41:By=A._NewObject(C.AVS,0);break;case 43:By=
A._NewObject(C.AOH,0);break;case 44:By=A._NewObject(C.AOG,0);break;case 61:By=A.
_NewObject(C.AN5,0);break;case 62:By=A._NewObject(C.AN4,0);break;case 46:By=A._NewObject(
C.ASm,0);break;case 47:By=A._NewObject(C.ASl,0);break;case 85:By=A._NewObject(C.
AV8,0);break;case 86:By=A._NewObject(C.AV7,0);break;case 71:By=A._NewObject(C.ASh
,0);break;case 72:By=A._NewObject(C.ASg,0);break;case 74:By=A._NewObject(C.AM0,0
);break;case 90:By=A._NewObject(C.AUd,0);break;case 73:By=A._NewObject(C.AUx,0);
break;case 51:By=A._NewObject(C.AL5,0);break;case 52:By=A._NewObject(C.AL4,0);break;
case 15:By=A._NewObject(C.AUk,0);break;case 60:By=A._NewObject(C.AVh,0);break;case
69:By=A._NewObject(C.ARI,0);break;case 70:By=A._NewObject(C.ARH,0);break;case 26:
By=A._NewObject(C.ASa,0);break;case 54:By=A._NewObject(C.AR8,0);break;case 25:By=
A._NewObject(C.AOh,0);break;case 66:By=A._NewObject(C.AOi,0);break;case 59:By=A.
_NewObject(C.AOg,0);break;case 58:By=A._NewObject(C.AOj,0);break;case 56:By=A._NewObject(
C.AOk,0);break;case 57:By=A._NewObject(C.AqL,0);break;case 68:By=A._NewObject(C.
AOl,0);break;case 67:By=A._NewObject(C.AOe,0);break;case 84:By=A._NewObject(C.AMm
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AMz,0);break;case 91:By=A._NewObject(C.AVn,0
);break;case 94:By=A._NewObject(C.Aqf,0);break;default:throw new Error(AWY);}if(
!!By)By.An7=Alp;return By;},Cd:function(Alp){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AWZ);else this.Ai4.BoC((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zp(Alp);},FB:function(){var Bf8=3;var Bf7=this.Ai4.Bos();if(!!Bf7
)Bf8=Bf7.An7;else A.ab5("%s",AW0);A._GetAutoObject(A.Device.Device).Zp(Bf8);},_Init:
function(aArg){C.A$w._Init.call(this.Ai4={I:this},0);this.__proto__=C.AnT;this.Init(
aArg);var J6=this._variants();if(J6){this.K={};J6._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai4.
_Done();A.h7--;},_ReInit:function(){this.Ai4._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnT._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A8={_Init:function(){C.AnT._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGm={H8:null,Yw:null,Aff:null,AaJ:null,MD:
null,Azz:1,RatingMode:0,RatedAttribute:0,CP:function(){this.Yw.R(this.BdC(this.RatedAttribute
));this.AKG(this);},Ai:function(Ae){this.MD.R(A._GetAutoObject(A.Device.Helper).
MG(A.aaR(A.acf.ARZ),O8,this.Azz.toFixed()));if(this.RatingMode===1)this.MD.Z(true
);else this.MD.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);this.H8.Gr();this.H8.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axx(this.
H8,5);A.zX([this,this.AKG],[B=A._GetAutoObject(A.Device.Device),B.ASS,B.A0v],0);
A.zX([this,this.AKG],[B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC],0);A.pe([
this,this.AKG],this);},AsF:function(G){var a=this.AKk(this.RatedAttribute);this.
Bgm();this.Azz=this.Azz-1;this.Am();if(!a)this.AR6();else this.SJ(a);},WU:function(
G){var a=this.BdJ(this.RatedAttribute);this.Bgm();this.Azz=this.Azz+1;this.Am();
if(!a)this.A73();else this.SJ(a);},AKk:function(Nu){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Nu){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHL);},BdJ:function(Nu){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Nu){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHL);},SJ:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yw.R(this.BdC(E));this.
DJ(E);this.Aff.AnI(this.H8.Bjh(E));if(!this.AKk(E)){if(this.ARk())this.N.Cw(A.aaL(
A.ach.AeD));else this.N.Cw(null);}else this.N.Cw(A.aaL(A.ach.AeA));},BdC:function(
Nu){return this.AaJ.BS(Nu);},Bz8:function(Nu){if(!!Nu){var a=this.AKk(Nu);if(!a)
return A.jV;else return this.BdD(a);}else return A.jV;},Bz7:function(Nu){if(!!Nu
){var a=this.BdJ(Nu);if(!a)return A.jV;else return this.BdD(a);}else return A.jV;
},AR6:function(){},A73:function(){},A62:function(){return null;},BdD:function(Nu
){return this.AaJ.Lv(Nu);},Bgm:function(){if(!!this.RatedAttribute)this.H8.Bpd(this.
RatedAttribute,this.Aff.A5);},AKG:function(G){if(this.ARk())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SJ(2);this.DJ(this.RatedAttribute
);this.Am();},Adw:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkX:function(G){var a=this.AKk(this.RatedAttribute);if(!a){if(this.ARk())this.
Adw(this);}else this.AR6();},DJ:function(Nu){this.N.Hy(this.Bz8(Nu));if(!!this.N.
An2){this.N.C1(null);this.N.OQ(true);}else{this.N.C1(A.aaL(A.ach.AeA));this.N.OQ(
false);}this.N.CR(this.Bz7(Nu));if(!!this.N.An4){this.N.C2(null);this.N.OR(true);
}else{this.N.C2(this.A62());this.N.OR(false);}},ARk:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alf,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yw={
I:this},0);C.Rating._Init.call(this.Aff={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaJ={I:this},0);A.acg.Text._Init.call(this.MD={I:this},0);this.__proto__=
C.AGm;this.Background.L(A.jb.CJ);this.N.Z(true);this.Dr(C.IL);this.Yw.H(AW1);this.
Yw.KS(true);this.Yw.L(A.jb.Text);this.Aff.H(AW2);this.MD.H(AW3);this.MD.A6(0x14);
this.MD.R(A.aaR(A.acf.ARZ));this.MD.L(A.jb.Text);this.J(this.Yw,0);this.J(this.Aff
,0);this.J(this.MD,0);this.Bb(this.Aff);this.N.CE=[this,this.AsF];this.N.Cf=[this
,this.AkX];this.N.B$=[this,this.WU];this.Yw.S(A.aaL(A.fl.Af));this.Aff.AR=[this,
this.WU];this.MD.S(A.aaL(A.fl.Af));this.H8=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yw._Done();this.Aff._Done();this.AaJ._Done();
this.MD._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yw._ReInit();this.Aff._ReInit();this.AaJ._ReInit();this.MD._ReInit();this.
MD.R(A.aaR(A.acf.ARZ));this.Yw.S(A.aaL(A.fl.Af));this.MD.S(A.aaL(A.fl.Af));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H8)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaJ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HZ={Y:null,Gender:null,AnimalType:null,Breed:null,Ji:null,Pp:null,AsV:null,BZ:
null,Da:null,C_:null,CH:null,Gn:null,Ay:null,KK:0,Init:function(aArg){A.zX([this
,this.BbV],this.BZ.Q,0);A.pe([this,this.BbV],this);A.pe([this,this.ABc],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANx(this.
Y);},DE:function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;
break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(
X,Fi,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null
,null);this.ABc(this);},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[
1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},AeY:function(E){
if(this.KK===E)return;this.KK=E;A.abo([this,this.Awb,this.AeY],0);},ABc:function(
G){var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C1(
A.aaL(A.ach.E2));this.N.CE=[this,this.AI1];if(!!GZ&&!!GZ.Amr){this.N.Fc(A.jV);this.
N.JA.C3(255);this.N.ArP(GZ.AqQ);this.N.Cw(GZ.AvL);this.N.Cf=GZ.Amr;}else{this.N.
Fc(A.jV);this.N.Cw(null);this.N.Cf=null;}if(!!GZ&&!!GZ.Agw){this.N.CR(GZ.AxP);this.
N.GW.C3(GZ.Axl);this.N.Anz(GZ.AmU);this.N.C2(GZ.Aq7);this.N.B$=GZ.Agw;}else this.
Auo();},Agh:function(G){A.ab5("%s",Aym);},AyV:function(s){this.Agh(s);},Ew:function(
G){A.ab5("%s",Aym);},AI1:function(s){this.Ew(s);},Auo:function(){A.ab5("%s",Alg);
},AAy:function(G){A.ab5("%s",Aym);},AcT:function(s){this.AAy(s);},JJ:function(Ag
){this.Bb(Ag);this.Y.HI(Ag,true,null,null);this.Y.Vz(null,null);},ApI:function(G
){var F;this.C_.Ahv(A._GetAutoObject(A.Device.Helper).Abq((F=this.BZ.Q,F[1].call(
F[0]))));},BbV:function(s){this.ApI(s);},Awb:function(){return this.KK;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UR._Init.call(this.Ji={I:this},
0);A.Device.M5._Init.call(this.Pp={I:this},0);A.Device.KY._Init.call(this.AsV={I:
this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.Da={I:this},0);
C.AkV._Init.call(this.C_={I:this},0);C.AxA._Init.call(this.CH={I:this},0);C.AsA.
_Init.call(this.Gn={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.HZ;var B;this.N.Z(true);this.Dr(C.IL);this.Y.H(Ff);this.Y.JV(1);this.KK=A._GetAutoObject(
A.Device.Helper).Abq(this.AnimalType.Q);this.BZ.H(Ah1);this.BZ.Aj(true);this.BZ.
T(A.aaR(A.acf.Aft));this.Da.H(Ayn);this.Da.Aj(true);this.Da.T(A.aaR(A.acf.Afo));
this.C_.H(Aoo);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.KK));this.C_.Ga(1000);this.
C_.EV(99000);this.C_.Ahv(A._GetAutoObject(A.Device.Helper).Abq(this.AnimalType.Q
));this.CH.H(Ah2);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Gn.H(AW4);
this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Ji));this.Ay.H(Ayo);this.J(this.Y,0);this.
J(this.BZ,0);this.J(this.Da,0);this.J(this.C_,0);this.J(this.CH,0);this.J(this.Gn
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Gender.L0(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L0(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L0(A._GetAutoObject(A.Device.Helper).W);this.Ji.L0(A._GetAutoObject(A.Device.Helper
).W);this.BZ.Au([B=this.AnimalType,B.B_,B.Cb]);this.BZ.CK(this.AnimalType);this.
Da.Au([B=this.Gender,B.B_,B.Cb]);this.Da.CK(this.Gender);this.C_.Au([this,this.Awb
,this.AeY]);this.CH.Gs([this,this.D_,this.GS]);this.CH.LZ([B=this.CH,B.FV]);this.
CH.L2(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B_,B.Cb]);this.CH.CK(this.Breed
);this.CH.Any(this.Pp);this.Gn.Gs([this,this.D_,this.GS]);this.Gn.LZ([B=this.Gn,
B.FV]);this.Gn.L2(A.aaL(A.ach.Edit));this.Gn.Au([B=this.Ji,B.B_,B.Cb]);this.Gn.CK(
this.Ji);this.Gn.Any(this.AsV);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Ji._Done();this.Pp._Done();this.AsV._Done();this.BZ._Done();this.Da._Done(
);this.C_._Done();this.CH._Done();this.Gn._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Ji._ReInit();this.
Pp._ReInit();this.AsV._ReInit();this.BZ._ReInit();this.Da._ReInit();this.C_._ReInit(
);this.CH._ReInit();this.Gn._ReInit();this.Ay._ReInit();this.BZ.T(A.aaR(A.acf.Aft
));this.Da.T(A.aaR(A.acf.Afo));this.C_.T(A.aaR(A.acf.KK));this.CH.T(A.aaR(A.acf.
Breed));this.Gn.T(A.aaR(A.acf.Ji));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ji)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wx={Ay$:false,LO:function(G){if(A._GetAutoObject(A.Device.Device).An.Lh())A._GetAutoObject(
A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper
).Aqi(A._GetAutoObject(A.Device.Helper).W);},Auo:function(){this.N.CR(A.jV);this.
N.C2(A.aaL(A.ach.ADH));this.N.B$=[this,this.AyV];},CC:function(G){if(!this.Ay$){
this.Ay$=true;A.pe([this,this.AcT],this);}else C.Ars.CC.call(this,G);},AAy:function(
G){A._GetAutoObject(C.A8).Cd(49);},_Init:function(aArg){C.Ars._Init.call(this,aArg
);this.__proto__=C.Wx;this.J1(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IL={_Init:function(aArg){C.ADn._Init.call(this,aArg);this.__proto__=C.IL;this.
A_f(false);},_className:"Application::HeaderSelectedAnimalId"};C.I5={Filter:null
,Gender:null,AnimalType:null,Transponder:null,El:null,Y:null,P6:null,S7:null,Ob:
null,S8:null,Nr:null,Ov:null,RR:null,Ow:null,RS:null,NH:null,Ld:null,Js:null,KW:
null,Mv:null,Yq:null,S9:null,RT:null,Ay:null,Ax2:0,Ax1:0,AuL:0,AuK:0,Arr:0,AsM:0
,Avn:0,Avo:0,Am5:true,Amu:false,Aob:false,Init:function(aArg){A.zX([this,this.Avt
],this.Ld.Q,0);A.zX([this,this.AuQ],this.Js.Q,0);A.zX([this,this.Bqo],this.KW.Q,
0);A.zX([this,this.BkC],this.Mv.Q,0);A.zX([this,this.BqS],this.Nr.Q,0);A.zX([this
,this.BqR],this.Ob.Q,0);A.zX([this,this.Bhr],this.NH.Q,0);A.zX([this,this.Bhq],this.
Ow.Q,0);this.Bb(this.P6);},DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.
CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;
}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);this.MS(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E$(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A8).FB();},A3c:function(G){var EE=(C.Aer.isPrototypeOf(G)?G:null);if(!EE)return;
var Aw=this.Filter.DL(EE.Er,EE.Operator);if(!!Aw){this.Filter.Np(Aw);A.abo([this
,this.Fp,this.Ft],0);}else{if(EE.Er===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else A.ab5("%s",AHM+EE.Er.toFixed());if(!!Aw){this.Filter.
CW(Aw);A.abo([this,this.Fp,this.Ft],0);}}},BAK:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A8).FB();},AAw:function(G){var EE=(
C.AmZ.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.DL(EE.Er,EE.Operator
);if(!!Aw){this.Filter.Np(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE.Er===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;
}else if(EE.Er===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;}else if((EE.Er===22)||(EE.Er===26)){var A1b=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1b.EJ=EE.Er;A1b.Operator=0;Aw=A1b;}else A.ab5(
"%s",AHM+EE.Er.toFixed());if(!!Aw){this.Filter.CW(Aw);A.abo([this,this.Fp,this.Ft
],0);}}},A_a:function(E){if(this.Avn===E)return;this.Avn=E;A.abo([this,this.Blh,
this.A_a],0);},A_b:function(E){if(this.Avo===E)return;this.Avo=E;A.abo([this,this.
Bli,this.A_b],0);},Avt:function(G){var F;this.A_b((F=this.Ld.Q,F[1].call(F[0])));
var Aw=this.Filter.DL(7,0);if(!!Aw){var AzR=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!AzR)AzR.A5=this.Avo;else A.ab5("%s",AfF);}},AuQ:function(G){var
F;this.A_a((F=this.Js.Q,F[1].call(F[0])));var Aw=this.Filter.DL(14,0);if(!!Aw){var
U8=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!U8)U8.A5=
this.Avn;else A.ab5("%s",AfF);}},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1
))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},A_T:function(
E){if(this.AsM===E)return;this.AsM=E;A.abo([this,this.BlV,this.A_T],0);},Bqo:function(
G){var F;this.A_T((F=this.KW.Q,F[1].call(F[0])));var Aw=this.Filter.DL(22,1);if(
!!Aw){var Ajc=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ajc
)switch(this.AsM){case 1:Ajc.Operator=5;break;case 0:Ajc.Operator=0;break;default:
A.ab5("%s%e",AHN,this.AsM);}else A.ab5("%s",AfF);}},A_n:function(E){if(this.Arr===
E)return;this.Arr=E;A.abo([this,this.Blx,this.A_n],0);},BkC:function(G){var F;this.
A_n((F=this.Mv.Q,F[1].call(F[0])));var Aw=this.Filter.DL(26,1);if(!!Aw){var At4=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At4)switch(this.Arr
){case 1:At4.Operator=5;break;case 0:At4.Operator=0;break;default:A.ab5("%s%e",AHN
,this.Arr);}else A.ab5("%s",AfF);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P6.Bk([this,this.Fp,this.Ft]);this.S7.
Bk([this,this.Fp,this.Ft]);this.Ob.Bk([this,this.Fp,this.Ft]);this.S8.Bk([this,this.
Fp,this.Ft]);this.Nr.Bk([this,this.Fp,this.Ft]);this.Ov.Bk([this,this.Fp,this.Ft
]);this.RR.Bk([this,this.Fp,this.Ft]);this.Ow.Bk([this,this.Fp,this.Ft]);this.RS.
Bk([this,this.Fp,this.Ft]);this.NH.Bk([this,this.Fp,this.Ft]);this.Ld.Bk([this,this.
Fp,this.Ft]);this.Js.Bk([this,this.Fp,this.Ft]);this.KW.Bk([this,this.Fp,this.Ft
]);this.Mv.Bk([this,this.Fp,this.Ft]);this.Yq.Bk([this,this.Fp,this.Ft]);this.S9.
Bk([this,this.Fp,this.Ft]);this.RT.Bk([this,this.Fp,this.Ft]);this.Ar_(false);A.
pe([this,this.A4O],this);var Bel=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!Bel){this.Ar_(true);this.AF5(Bel.A5);}var BdP=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
BdP){this.Ar_(true);this.AF6(BdP.A5);}this.ArI(false);A.pe([this,this.ALl],this);
var Bek=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!Bek){this.ArI(true);this.AET(A._GetAutoObject(A.Device.Helper).L$(Bek.A5,
A._GetAutoObject(A.Device.Helper).Dv()));}var BdO=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!BdO){this.ArI(true);this.AEV(A.
_GetAutoObject(A.Device.Helper).L$(BdO.A5,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzR=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzR)this.Ld.Bx(this.Gender.DZ(AzR.A5));var U8=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U8)this.Js.Bx(this.AnimalType.
DZ(U8.A5));var Ajc=this.Filter.DL(22,1);if(!!Ajc){if(!Ajc.Operator)this.KW.Bx(0);
else this.KW.Bx(1);}var At4=this.Filter.DL(26,1);if(!!At4){if(!At4.Operator)this.
Mv.Bx(0);else this.Mv.Bx(1);}},Ft:function(Aq){this.Bk(Aq);},AF6:function(E){if(
this.Ax2===E)return;this.Ax2=E;A.abo([this,this.A9w,this.AF6],0);},AF5:function(
E){if(this.Ax1===E)return;this.Ax1=E;A.abo([this,this.A9v,this.AF5],0);},BqS:function(
G){var F;this.AF6((F=this.Nr.Q,F[1].call(F[0])));var Aw=this.Filter.DL(1,3);if(!
!Aw){var ABA=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABA)
ABA.A5=this.Ax2;else A.ab5("%s",AfF);}},BqR:function(G){var F;this.AF5((F=this.Ob.
Q,F[1].call(F[0])));var Aw=this.Filter.DL(1,2);if(!!Aw){var ABA=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABA)ABA.A5=this.Ax1;else A.ab5("%s",AfF);}},BeQ:
function(G){var EE=(C.AjK.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.
DL(EE.Er,EE.Operator);if(!!Aw){this.Filter.Np(Aw);A.abo([this,this.Fp,this.Ft],0
);}else{if(EE===this.S7){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A5=this.Ax1;this.Bb(this.Ob);}else if(EE===this.S8){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=this.Ax2;this.Bb(this.Nr);}if(!!Aw){this.Filter.CW(
Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([this,this.A4O],this);},A4O:function(
G){var A2W=!!this.Filter.DL(this.Ob.Er,this.Ob.Operator);var A4P=!!this.Filter.DL(
this.Nr.Er,this.Nr.Operator);A._GetAutoObject(A.Device.Helper).J2(this.S7,this.Aob
);A._GetAutoObject(A.Device.Helper).J2(this.S8,this.Aob);A._GetAutoObject(A.Device.
Helper).J2(this.Ob,A2W);A._GetAutoObject(A.Device.Helper).J2(this.Nr,A4P);},MS:function(
G){var B;this.Y.Vz(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},BBG:function(G){A.pe([this,this.Fk],this);A.pe([this,this.
MS],this);},BAH:function(G){this.Ar_(!this.Aob);if(this.Aob===false){var Aw=this.
Filter.DL(this.P6.Er,this.P6.Operator);while(!!Aw){this.Filter.Np(Aw);Aw=this.Filter.
DL(this.P6.Er,this.P6.Operator);}A.abo([this,this.Fp,this.Ft],0);}},Ar_:function(
E){if(this.Aob===E)return;this.Aob=E;A.abo([this,this.A9u,this.Ar_],0);A.pe([this
,this.A4O],this);},AEV:function(E){if(this.AuL===E)return;this.AuL=E;A.abo([this
,this.A8A,this.AEV],0);},AET:function(E){if(this.AuK===E)return;this.AuK=E;A.abo([
this,this.A8y,this.AET],0);},Bhr:function(G){var F;this.AEV((F=this.NH.Q,F[1].call(
F[0])));var Aw=this.Filter.DL(4,2);if(!!Aw){var AfS=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaO=A._GetAutoObject(A.Device.Helper).ZR(
this.AuL-1);AfS.A5=AaO;}else A.ab5("%s",AfF);}},Bhq:function(G){var F;this.AET((
F=this.Ow.Q,F[1].call(F[0])));var Aw=this.Filter.DL(4,3);if(!!Aw){var AfS=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaO=A._GetAutoObject(
A.Device.Helper).ZR(this.AuK);AfS.A5=AaO;}else A.ab5("%s",AfF);}},ALl:function(G
){var A2W=this.Am5&&!!this.Filter.DL(this.Ow.Er,this.Ow.Operator);var A4P=this.Am5&&
!!this.Filter.DL(this.NH.Er,this.NH.Operator);A._GetAutoObject(A.Device.Helper).
J2(this.Ov,this.Am5);A._GetAutoObject(A.Device.Helper).J2(this.RR,this.Am5&&this.
Amu);A._GetAutoObject(A.Device.Helper).J2(this.RS,this.Am5&&this.Amu);A._GetAutoObject(
A.Device.Helper).J2(this.Ow,A2W);A._GetAutoObject(A.Device.Helper).J2(this.NH,A4P
);},ArI:function(E){if(this.Amu===E)return;this.Amu=E;A.abo([this,this.A8x,this.
ArI],0);A.pe([this,this.ALl],this);},BeP:function(G){var EE=(C.AjK.isPrototypeOf(
G)?G:null);if(!EE)return;var Aw=this.Filter.DL(EE.Er,EE.Operator);if(!!Aw){this.
Filter.Np(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE===this.RR){Aw=A._NewObject(
A.Device.UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper
).ZR(this.AuK);this.Bb(this.Ow);}else if(EE===this.RS){Aw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper).ZR(this.AuL-1);this.
Bb(this.NH);}if(!!Aw){this.Filter.CW(Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([
this,this.ALl],this);},BAG:function(G){this.ArI(!this.Amu);if(this.Amu===false){
var Aw=this.Filter.DL(this.Ov.Er,this.Ov.Operator);while(!!Aw){this.Filter.Np(Aw
);Aw=this.Filter.DL(this.Ov.Er,this.Ov.Operator);}A.abo([this,this.Fp,this.Ft],0
);}},Bni:function(E){if(this.Am5===E)return;this.Am5=E;A.pe([this,this.ALl],this
);},Fp:function(){return this.Filter;},Bli:function(){return this.Avo;},Blh:function(
){return this.Avn;},BlV:function(){return this.AsM;},Blx:function(){return this.
Arr;},A9w:function(){return this.Ax2;},A9v:function(){return this.Ax1;},A9u:function(
){return this.Aob;},A8A:function(){return this.AuL;},A8y:function(){return this.
AuK;},A8x:function(){return this.Amu;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABT._Init.call(this.Transponder={I:this},0);C.ABT._Init.
call(this.El={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.AB4._Init.call(
this.P6={I:this},0);C.AjK._Init.call(this.S7={I:this},0);C.Abp._Init.call(this.Ob={
I:this},0);C.AjK._Init.call(this.S8={I:this},0);C.Abp._Init.call(this.Nr={I:this
},0);C.AB4._Init.call(this.Ov={I:this},0);C.AjK._Init.call(this.RR={I:this},0);C.
ACR._Init.call(this.Ow={I:this},0);C.AjK._Init.call(this.RS={I:this},0);C.ACR._Init.
call(this.NH={I:this},0);C.AmZ._Init.call(this.Ld={I:this},0);C.AmZ._Init.call(this.
Js={I:this},0);C.AmZ._Init.call(this.KW={I:this},0);C.AmZ._Init.call(this.Mv={I:
this},0);C.QF._Init.call(this.Yq={I:this},0);C.QF._Init.call(this.S9={I:this},0);
C.QF._Init.call(this.RT={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I5;var B;this.N.Z(true);this.N.CR(A.aaR(A.acf.A5n));this.Dr(C.APA);this.Gender.
Au(this.Avo);this.AnimalType.Au(this.Avn);this.Transponder.Au(this.AsM);this.El.
Au(this.Arr);this.Y.H(Ff);this.Y.JV(1);this.P6.H(IW);this.P6.Aj(true);this.P6.T(
A._GetAutoObject(A.Device.Helper).AmX(0,1));this.P6.Ni(1);this.S7.H(Qd);this.S7.
Aj(true);this.S7.T(A.aaR(A.acf.AEe));this.S7.Ni(1);this.S7.OP(2);this.Ob.H(Aaf);
this.Ob.Ni(1);this.Ob.OP(2);this.Ob.AFX(A.aaR(A.acf.GN));this.S8.H(Alh);this.S8.
Aj(true);this.S8.T(A.aaR(A.acf.AHf));this.S8.Ni(1);this.S8.OP(3);this.Nr.H(Aop);
this.Nr.Aj(true);this.Nr.Ni(1);this.Nr.OP(3);this.Nr.AFX(A.aaR(A.acf.GN));this.Ov.
H(AW5);this.Ov.Aj(true);this.Ov.T(A.aaR(A.acf.RQ));this.Ov.Ni(4);this.RR.H(AW6);
this.RR.Aj(true);this.RR.T(A.aaR(A.acf.AEe));this.RR.Ni(4);this.RR.OP(3);this.Ow.
H(AW7);this.Ow.Ni(4);this.Ow.OP(3);this.Ow.A_s(2);this.RS.H(AW8);this.RS.Aj(true
);this.RS.T(A.aaR(A.acf.AHf));this.RS.Ni(4);this.RS.OP(2);this.NH.H(AW9);this.NH.
Aj(true);this.NH.Ni(4);this.NH.OP(2);this.NH.A_s(3);this.Ld.H(As9);this.Ld.Aj(true
);this.Ld.Ni(7);this.Ld.Ahx(0);this.Ld.OP(0);this.Js.H(Xi);this.Js.Aj(true);this.
Js.Ni(14);this.Js.Ahx(0);this.Js.OP(0);this.KW.H(Xi);this.KW.Aj(true);this.KW.Ni(
22);this.KW.Ahx(0);this.KW.OP(1);this.Mv.H(Xi);this.Mv.Aj(true);this.Mv.Ni(26);this.
Mv.Ahx(0);this.Mv.OP(1);this.Yq.H(Xi);this.Yq.Aj(true);this.Yq.Ni(11);this.Yq.Ahx(
0);this.Yq.OP(0);this.S9.H(Xi);this.S9.Aj(true);this.S9.Ni(12);this.S9.Ahx(0);this.
S9.OP(0);this.RT.H(Xi);this.RT.Aj(true);this.RT.Ni(8);this.RT.Ahx(0);this.RT.OP(
0);this.Ay.H(It);this.J(this.Y,0);this.J(this.P6,0);this.J(this.S7,0);this.J(this.
Ob,0);this.J(this.S8,0);this.J(this.Nr,0);this.J(this.Ov,0);this.J(this.RR,0);this.
J(this.Ow,0);this.J(this.RS,0);this.J(this.NH,0);this.J(this.Ld,0);this.J(this.Js
,0);this.J(this.KW,0);this.J(this.Mv,0);this.J(this.Yq,0);this.J(this.S9,0);this.
J(this.RT,0);this.J(this.Ay,0);this.N.CE=[this,this.Ew];this.N.B$=[this,this.BAK
];this.N.C1(A.aaL(A.ach.E2));this.Y.Em=[this,this.BBG];this.P6.AR=[this,this.BAH
];this.P6.Au([this,this.A9u,this.Ar_]);this.S7.AR=[this,this.BeQ];this.Ob.Gs([this
,this.D_,this.GS]);this.Ob.Au([this,this.A9v,this.AF5]);this.S8.AR=[this,this.BeQ
];this.Nr.Gs([this,this.D_,this.GS]);this.Nr.Au([this,this.A9w,this.AF6]);this.Ov.
AR=[this,this.BAG];this.Ov.Au([this,this.A8x,this.ArI]);this.RR.AR=[this,this.BeP
];this.Ow.Gs([this,this.D_,this.GS]);this.Ow.Au([this,this.A8y,this.AET]);this.RS.
AR=[this,this.BeP];this.NH.Gs([this,this.D_,this.GS]);this.NH.Au([this,this.A8A,
this.AEV]);this.Ld.AR=[this,this.AAw];this.Ld.Au([B=this.Gender,B.B_,B.Cb]);this.
Ld.CK(this.Gender);this.Js.AR=[this,this.AAw];this.Js.Au([B=this.AnimalType,B.B_
,B.Cb]);this.Js.CK(this.AnimalType);this.KW.AR=[this,this.AAw];this.KW.Au([B=this.
Transponder,B.B_,B.Cb]);this.KW.CK(this.Transponder);this.Mv.AR=[this,this.AAw];
this.Mv.Au([B=this.El,B.B_,B.Cb]);this.Mv.CK(this.El);this.Yq.AR=[this,this.A3c];
this.S9.AR=[this,this.A3c];this.RT.AR=[this,this.A3c];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.El._Done();this.Y._Done();this.P6._Done();this.S7._Done();this.Ob._Done(
);this.S8._Done();this.Nr._Done();this.Ov._Done();this.RR._Done();this.Ow._Done(
);this.RS._Done();this.NH._Done();this.Ld._Done();this.Js._Done();this.KW._Done(
);this.Mv._Done();this.Yq._Done();this.S9._Done();this.RT._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.El._ReInit();
this.Y._ReInit();this.P6._ReInit();this.S7._ReInit();this.Ob._ReInit();this.S8._ReInit(
);this.Nr._ReInit();this.Ov._ReInit();this.RR._ReInit();this.Ow._ReInit();this.RS.
_ReInit();this.NH._ReInit();this.Ld._ReInit();this.Js._ReInit();this.KW._ReInit(
);this.Mv._ReInit();this.Yq._ReInit();this.S9._ReInit();this.RT._ReInit();this.Ay.
_ReInit();this.N.CR(A.aaR(A.acf.A5n));this.S7.T(A.aaR(A.acf.AEe));this.Ob.AFX(A.
aaR(A.acf.GN));this.S8.T(A.aaR(A.acf.AHf));this.Nr.AFX(A.aaR(A.acf.GN));this.Ov.
T(A.aaR(A.acf.RQ));this.RR.T(A.aaR(A.acf.AEe));this.RS.T(A.aaR(A.acf.AHf));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ob)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.NH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ld)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$w={ZS:null,BoC:
function(Byc){var EF=A._NewObject(C.A$v,0);EF.AB=Byc;EF.Mw=this.ZS;this.ZS=EF;},
A$a:function(){var Vn=null;if(!!this.ZS){Vn=this.ZS.AB;this.ZS=this.ZS.Mw;}return Vn;
},Contains:function(Alp){var EF=this.ZS;while(!!EF){if(EF.AB.An7===Alp)return true;
EF=EF.Mw;}return false;},Bos:function(){if(!!this.ZS)return this.ZS.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$w;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZS)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$v={AB:null,
Mw:null,_Init:function(aArg){this.__proto__=C.A$v;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMj={AR6:function(){A._GetAutoObject(
A.Device.Helper).Axx(this.H8,0);A._GetAutoObject(C.A8).FB();},A73:function(){this.
H8.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();},A62:function(
){return A.aaL(A.ach.Am3);},_Init:function(aArg){C.AGm._Init.call(this,aArg);this.
__proto__=C.AMj;this.Dr(C.IL);},_className:"Application::AnimalActionRateScreen"
};C.AMf={WE:function(G){this.Agx();this.I3(A.aaR(A.acf.AVs),[this,this.ATT],5);this.
I3(A.aaR(A.acf.A5Q),[this,this.Bmi],4);this.I3(A.aaR(A.acf.AGl),[this,this.ATE],
3);this.I3(A.aaR(A.acf.An1),[this,this.AwX],2);this.I3(A.aaR(A.acf.AdV),[this,this.
AEY],1);this.I3(A.aaR(A.acf.AuG),[this,this.AES],0);A._GetAutoObject(C.BR).Fz();
A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abs:function(){return C.AM$;},Abt:function(
){return C.ADp;},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mt();var
Ay9=A._NewObject(A.Device.BoolFilterCriterion,0);Ay9.Initialize(8,0,true,true);Be.
CW(Ay9);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HQ:function(G){var F;C.GJ.
HQ.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.
N.OQ(false);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(40);},_Init:
function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AMf;var B;this.Dr(C.AO1
);this.Dk(A.aaR(A.acf.A79));this.AwS([B=A._GetAutoObject(A.Device.Device),B.A8B,
B.Bbi]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dk(A.aaR(A.acf.A79));}
,_className:"Application::AlarmListScreen"};C.ANA={DE:function(G){},Agg:function(
G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gt);var Aa=(C.AB$.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).G8(Aa.Hs);A._GetAutoObject(C.A8).Cd(13
);}},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mt();var Azr=A._NewObject(
A.Device.BoolFilterCriterion,0);Azr.Initialize(9,0,true,true);Be.CW(Azr);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HQ:function(G){C.GJ.HQ.call(this,G);this.N.OQ(false
);this.N.OR(false);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.ANA;this.Dr(C.AO3);this.Dk(A.aaR(A.acf.A7_));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dk(A.aaR(A.acf.A7_));},_className:"Application::ControlListScreen"
};C.Aer={Filter:null,Er:0,Jd:10,TableId:0,Operator:1,CP:function(){var F;this.Tt((
F=this.Filter,F[1].call(F[0])).DL(this.Er,this.Operator));},Bl:function(aSize){C.
Co.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jd),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Md],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Md],E,0);A.pe([this,this.
Md],this);},Md:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Tt((F=this.Filter,F[1].call(F[0])).DL(this.Er,this.Operator));else this.
Tt(null);},Ahx:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Md],this);},Ni:function(E){if(this.Er===E)return;this.Er=E;A.pe([this,this.
Md],this);},Tt:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A6V(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).AmX(this.TableId
,this.Er));},OP:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Md],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aer;this.V.H(AHO);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QF={H7:null,Bl:function(aSize){var B;C.Aer.Bl.call(this,aSize);this.H7.H([(aSize[
0]-((B=this.H7.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jd,0,this.
H7.M[0]-this.Jd,aSize[1]]);},Tt:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).AmX(this.TableId,this.Er));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Aw&&Aw.A5)this.H7.Cv(1);else this.H7.Cv(0);},_Init:function(aArg
){C.Aer._Init.call(this,aArg);A.acg.Ap._Init.call(this.H7={I:this},0);this.__proto__=
C.QF;this.H7.H(AHP);this.H7.Cv(0);this.J(this.H7,0);this.H7.Ax(A.aaL(A.ach.AqO));
},_Done:function(){this.__proto__=C.Aer;this.H7._Done();C.Aer._Done.call(this);}
,_ReInit:function(){C.Aer._ReInit.call(this);this.H7._ReInit();},_Mark:function(
D){var B;C.Aer._Mark.call(this,D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APA={Ap:null,Text:null,Df:function(
E){C.BQ.Df.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APA;this.Ap.H(AW_);this.Text.H(AW$);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeC));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BQ;this.Ap._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjT={
AW:null,T6:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BQ.Bl.call(this,aSize);this.T6.H(A.abJ(this.T6.M,A.abe(this.AW.M.slice(0
,2),AXa)));this.T6.H(A.abK(this.T6.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXb
)));},Ai:function(Ae){var B;C.BQ.Ai.call(this,Ae);var IC=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IC)this.T6.L(A.jb.AV);else this.T6.L(A.jb.Am4);},Df:function(E){
C.BQ.Df.call(this,E);this.Gw.L(E);this.D2.Zt(E);},WF:function(E){C.BQ.WF.call(this
,E);this.D2.CU(E);},Akq:function(){return this.AW.Akq();},Awj:function(){return this.
AW.Awj();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.BQ._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BU._Init.call(this.T6={I:this},0);A.acg.Ap._Init.call(this.Gw={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C7._Init.call(this.A$={I:this
},0);this.__proto__=C.AjT;this.AW.H(AXc);this.T6.H(AXd);this.T6.Nm(2);this.Gw.H(
AXe);this.Gw.L(A.jb.CT);this.D2.A0(0x14);this.D2.H(AXf);this.D2.Zt(A.jb.Bm);this.
D2.CU(A.jb.Ri);this.D2.Hn(2);this.A$.DC(AXg);this.A$.DM(AXh);this.A$.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T6,0);this.J(this.Gw,0);this.J(this.D2,0);this.J(this.
A$,0);this.Bb(this.AW);this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.AW._Done();this.T6._Done(
);this.Gw._Done();this.D2._Done();this.A$._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.AW._ReInit();this.T6._ReInit();this.Gw._ReInit(
);this.D2._ReInit();this.A$._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BQ._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Dj:null,Ip:null,Io:null
,Agf:function(G){if(this.Ez<0)this.L1(1);else if(this.Ez===9)this.L1(0);else this.
L1(this.Ez+1);A.pe(this.Dj,this);},Ai:function(Ae){var B;C.Ez.Ai.call(this,Ae);var
Hf=((Ae&0x10)===0x10);var IC=((Ae&0x40)===0x40);if(IC){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.C3(256);}else if(Hf){this.Background.L(this.M4);this.
Text.L(A.jb.Text);this.C3(256);}else{this.Background.L(this.M4);this.Text.L(A.jb.
Text);this.C3(128);}},Age:function(G){if(this.Ez<=0)this.L1(9);else this.L1(this.
Ez-1);A.pe(this.Dj,this);},_Init:function(aArg){C.Ez._Init.call(this,aArg);A.Core.
BK._Init.call(this.Ip={I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);this.
__proto__=C.DF;this.Ip.Filter=4;this.Io.Filter=5;this.Ip.BL=[this,this.Agf];this.
Ip.D1=[this,this.Agf];this.Io.BL=[this,this.Age];this.Io.D1=[this,this.Age];},_Done:
function(){this.__proto__=C.Ez;this.Ip._Done();this.Io._Done();C.Ez._Done.call(this
);},_ReInit:function(){C.Ez._ReInit.call(this);this.Ip._ReInit();this.Io._ReInit(
);},_Mark:function(D){var B;C.Ez._Mark.call(this,D);if((B=this.Dj)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Io)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Dj:null,Cu:null,CV:null,Dy:null,Eq:null,FZ:null,ET:null,Fm:null,Fb:null,M9:0,ARl:
false,Aqr:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqr)this.ET.AeZ(true);else this.ET.AeZ(false);},AwO:function(E){var B;
if(E===this.Akq())return;var Af_=E;var DV=this.ET;while(!!DV){if(Af_>0){DV.L1(Af_
%10);Af_=(Af_/10)|0;}else DV.L1(-1);DV=(C.DF.isPrototypeOf(B=this.QJ(DV,2,0x11))?
B:null);}},Akq:function(){return A.wz(this.Awj(),-1,10);},Op:function(G){if(this.
FZ.Ez>=0)this.Bgy(7);},MZ:function(G){if(((this.Akq()>0)||this.ARl)&&(this.Cu.Ez<
0))this.Bgy(2);else if(this.Akq()<=0)this.Fb.NL=true;},Adu:function(G){A.pe(this.
Dj,this);},Bgy:function(GA){var B;var ALz=0;var DV=null;switch(GA){case 2:{DV=this.
Cu;ALz=7;}break;case 7:{DV=this.ET;ALz=2;}break;default:throw new Error(AXi);}while(
!!DV){var A27=(C.DF.isPrototypeOf(B=this.QJ(DV,ALz,0x11))?B:null);if(!!A27)DV.L1(
A27.Ez);else if(ALz===7)DV.L1(0);else DV.L1(-1);DV=A27;}A.pe([this,this.Adu],this
);},AeZ:function(E){if(this.Aqr===E)return;this.Aqr=E;this.Am();},Bnj:function(E
){if(this.ARl===E)return;this.ARl=E;},ATj:function(E){var B;if(E===this.Awj())return;
var Af_=E;var DV=this.ET;while(!!DV){if(Af_.length>0){DV.L1(A.wz(A.ab2(Af_,1),-1
,10));Af_=A.abV(Af_,Af_.length-1);}else DV.L1(-1);DV=(C.DF.isPrototypeOf(B=this.
QJ(DV,2,0x11))?B:null);}},Awj:function(){var B;var IA=A.jV;var O=0;var B5=this.Cu;
for(;O<6;O=O+1){if(!!B5&&(B5.Ez>=0))IA=IA+B5.Ez.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TQ(B5,0x11))?B:null);}return IA;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Cu={I:this},0);C.DF._Init.call(this.CV={I:this},
0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF.
_Init.call(this.FZ={I:this},0);C.DF._Init.call(this.ET={I:this},0);A.Core.BK._Init.
call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={I:this},0);this.__proto__=
C.AW;this.H(Ayp);this.Cu.A0(0x3);this.Cu.H(AHQ);this.CV.A0(0x3);this.CV.H(AHR);this.
Dy.A0(0x3);this.Dy.H(AHS);this.Eq.A0(0x3);this.Eq.H(AHT);this.FZ.A0(0x3);this.FZ.
H(AHU);this.ET.A0(0x3);this.ET.H(AHV);this.ET.L1(0);this.Fm.Filter=6;this.Fb.Filter=
7;this.M9=A.jb.CJ;this.J(this.Cu,0);this.J(this.CV,0);this.J(this.Dy,0);this.J(this.
Eq,0);this.J(this.FZ,0);this.J(this.ET,0);this.Bb(this.ET);this.Cu.Dj=[this,this.
Adu];this.CV.Dj=[this,this.Adu];this.Dy.Dj=[this,this.Adu];this.Eq.Dj=[this,this.
Adu];this.FZ.Dj=[this,this.Adu];this.ET.Dj=[this,this.Adu];this.Fm.BL=[this,this.
Op];this.Fb.BL=[this,this.MZ];},_Done:function(){this.__proto__=A.Core.P;this.Cu.
_Done();this.CV._Done();this.Dy._Done();this.Eq._Done();this.FZ._Done();this.ET.
_Done();this.Fm._Done();this.Fb._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cu._ReInit();this.CV._ReInit();this.Dy._ReInit(
);this.Eq._ReInit();this.FZ._ReInit();this.ET._ReInit();this.Fm._ReInit();this.Fb.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Dj)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bh3="3f5bfefd";C.BDg={Undefined:0,BEk:1,BDy:2};C.AkK={
Tr:null,AiW:null,Lb:null,ANE:null,An_:null,push:function(MN){if(!this.Tr){MN.Ahz=
null;MN.Mw=null;this.Tr=MN;this.AiW=this.Tr;}else{MN.Ahz=this.AiW;MN.Mw=null;this.
AiW.Mw=MN;this.AiW=MN;}},BCe:function(MN){var Ql=this.Tr;while(!!Ql){if(Ql.JO.Id===
MN.Id)return Ql;Ql=Ql.Mw;}return Ql;},BBZ:function(MN){if(MN===this.Tr)this.pop(
);else if(MN===this.AiW){MN=MN.Ahz;if(!!MN)MN.Mw=null;this.AiW=MN;}else{MN.Ahz.Mw=
MN.Mw;MN.Mw.Ahz=MN.Ahz;}},Ahr:function(E){var F;if(this.Lb===E)return;this.Lb=E;
if(!!this.Lb)this.Lb.AgM(2);(F=this.ANE,F[2].call(F[0],this.Lb));},Vk:function(G
){var Ql=(C.AT6.isPrototypeOf(G)?G:null);if(!!Ql){if(!Ql.JO.PopupState){if(!this.
Lb)this.Ahr(this.top());}else if(Ql.JO.PopupState===4){this.pop();this.Ahr(this.
top());}else if(Ql.JO.PopupState===5){this.pop();this.Ahr(this.top());}else if(Ql.
JO.PopupState===7){this.pop();this.Ahr(this.top());}else if(Ql.JO.PopupState===8
){this.pop();this.Ahr(this.top());}else if(Ql.JO.PopupState===6){if(Ql===this.Lb
){this.pop();this.Ahr(this.top());}else this.BBZ(Ql);}else if(Ql.JO.PopupState===
3){this.pop();this.Ahr(this.top());}}},pop:function(){var AKV=null;if(!!this.Tr){
AKV=this.Tr;if(this.Tr===this.AiW){this.Tr=null;this.AiW=null;}else{this.Tr=this.
Tr.Mw;if(!this.Tr)throw new Error(AXj);this.Tr.Ahz=null;}AKV.Ahz=null;AKV.Mw=null;
}return AKV;},top:function(){return this.Tr;},BBH:function(G){var B;var At5=(A.Device.
PopupContext.isPrototypeOf(B=this.An_.JO)?B:null);if(!!At5){var A4k=this.BCe(At5
);if(!!A4k){A4k.A91(At5);if(!At5.Show)A4k.AgM(6);}else if(At5.Show){var AKz=A._NewObject(
C.AT6,0);AKz.A91(At5);AKz.AS3=[this,this.Vk];this.push(AKz);AKz.AgM(0);}}},_Init:
function(aArg){A.Core.A$U._Init.call(this.An_={I:this},0);this.__proto__=C.AkK;this.
An_.ASu=[this,this.BBH];this.An_.BmD(A._GetAutoObject(A.Device.Device).AnO);A.h7++;
},_Done:function(){this.__proto__=null;this.An_._Done();A.h7--;},_ReInit:function(
){this.An_._ReInit();},_Mark:function(D){var B;if((B=this.Tr)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lb)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANE)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AT6={Rm:null,Mw:null,Ahz:null,JO:null,AS3:null,PopupIdToString:null,AfY:function(
Bxk,BxT,Byb,Bx4,Bx6,Bx3,BxC){var Vm=A._NewObject(C.AT5,0);Vm.BnM(this.JO.Id);Vm.
A_L(Bxk);Vm.AS4=Bx3;Vm.A_N(this.JO.Ak4);Vm.A_x(this.JO.AkJ);Vm.BP=A._NewObject(C.
N,0);Vm.Ln().B$=Bx6;Vm.Ln().Cf=null;Vm.Ln().CE=Bx4;Vm.Ln().CR(Byb);Vm.Ln().Cw(null
);Vm.Ln().Hy(BxT);Vm.Ln().AFo(BxC);return Vm;},Akr:function(){if(!this.Rm){var Agq=
this.PopupIdToString.BS(this.JO.Id);switch(this.JO.Id){case 91:case 92:this.Rm=this.
AfY(Agq,A.jV,A.jV,null,null,[this,this.Agb],0);break;case 39:this.Rm=this.AfY(Agq
,A.aaR(A.acf.AmC),A.aaR(A.acf.Ok),[this,this.A3i],[this,this.A3j],[this,this.Agb
],3);break;case 13:this.Rm=this.AfY(Agq,A.aaR(A.acf.AmC),A.aaR(A.acf.BoO),[this,
this.A3h],[this,this.AKE],[this,this.Agb],3);break;case 25:this.Rm=this.AfY(Agq,
A.aaR(A.acf.AmC),A.aaR(A.acf.Ok),[this,this.A3h],[this,this.AKE],[this,this.Agb]
,3);break;case 16:case 24:case 49:case 74:this.Rm=this.AfY(Agq,A.aaR(A.acf.AmC),
A.jV,[this,this.A3h],null,[this,this.Agb],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 116:case 34:case
82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 14:
case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:case 17:
case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:case 65:
case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:case 71:
case 113:case 100:case 114:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.Rm=this.AfY(Agq,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AKE],[this,this.Agb],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.Rm=
this.AfY(Agq,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3i],[this,this.A3j],[this
,this.Agb],3);break;case 110:this.Rm=this.AfY(Agq,A.jV,A.jV,null,null,[this,this.
Agb],1);break;case 46:case 111:this.Rm=this.AfY(Agq,A.jV,A.aaR(A.acf.Ok),null,[this
,this.AKE],[this,this.Agb],1);break;case 4:case 7:case 33:case 115:case 44:case 37:
case 38:case 63:case 95:case 108:case 112:this.Rm=this.AfY(Agq,A.aaR(A.acf.No),A.
aaR(A.acf.Yes),[this,this.A3i],[this,this.A3j],[this,this.Agb],1);break;default:
A.ab5("%s",(AXk+this.JO.Id.toFixed())+AXl);}}switch(this.JO.Id){case 16:case 49:
this.Rm.A_3(true);break;case 91:case 92:this.Rm.A_3(false);break;default:;}return this.
Rm;},AKE:function(G){this.AgM(4);},A3h:function(G){this.AgM(5);},A3j:function(G){
this.AgM(7);},A3i:function(G){this.AgM(8);},Agb:function(G){this.AgM(3);},A91:function(
E){if(this.JO===E)return;this.JO=E;if(!!this.Rm){this.Akr().A_N(this.JO.Ak4);this.
Akr().A_x(this.JO.AkJ);}},AgM:function(Bx9){var B;this.JO.BnN(Bx9);(B=this.AS3)?
B[1].call(B[0],this):null;},BBd:function(G){this.AgM(9);},_Init:function(aArg){A.
Device.PopupIdToString._Init.call(this.PopupIdToString={I:this},0);this.__proto__=
C.AT6;A.h7++;},_Done:function(){this.__proto__=null;this.PopupIdToString._Done();
A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(D){var
B;if((B=this.Rm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mw)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ahz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
JO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS3)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::PopupEntry"};C.Gd={BooleanToYesNo:null,Du:function(){return 2;},C6:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.BS(aIndex
);},DZ:function(A7){return A7;},H4:function(){return 1;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Gd;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afn={Uu:null,Ke:function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.
AM!==BO){if(!!this.Uu&&!!this.AC)switch(this.AC.C6(this.AM)){case 0:(F=this.Uu,F[
2].call(F[0],false));break;case 1:(F=this.Uu,F[2].call(F[0],true));break;default:;
}A.abo(this.Uu,0);}},J$:function(G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.
AM!==BO){if(!!this.Uu&&!!this.AC)switch(this.AC.C6(this.AM)){case 0:(F=this.Uu,F[
2].call(F[0],false));break;case 1:(F=this.Uu,F[2].call(F[0],true));break;default:;
}A.abo(this.Uu,0);}},AkD:function(E){if(A.aaZ(this.Uu,E))return;if(!!this.Q)A.z$([
this,this.A3X],this.Uu,0);this.Uu=E;if(!!E)A.zX([this,this.A3X],E,0);if(!!E)A.pe([
this,this.A3X],this);},A3X:function(G){var F;if(!!this.Uu){if((F=this.Uu,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.Afn;this.J1(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Uu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUk={Jh:null,OW:null,IU:null,Gm:null,AL:null,Abh:null,AgS:null,TM:null,Sc:null
,AcC:null,W4:null,Hj:null,ABz:true,Init:function(aArg){var B;A.zX([this,this.Al6
],[B=A._GetAutoObject(A.Device.Device),B.AST,B.A0w],0);A.pe([this,this.Al6],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABz)this.N.C2(A.aaL(A.ach.
AQ1));else this.N.C2(A.aaL(A.ach.AQ2));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OW.L(A.jb.Bm);this.Sc.Z(false);this.TM.Z(false);this.IU.Z(true);this.Gm.
Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B2));this.Background.L(A.jb.Gj);}else
if(this.Abh.Bw){this.OW.L(A.jb.Text);this.Sc.Z(true);this.TM.Z(true);this.IU.Z(false
);this.Gm.Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B2));this.Background.L(A.
jb.E1);}else{this.OW.L(A.jb.Text);this.Sc.Z(false);this.TM.Z(false);this.IU.Z(true
);this.Gm.Ar(true);this.Background.L(A.jb.CJ);}if(this.AgS.Bw)this.W4.Z(true);else
this.W4.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhM();},E4:function(
G){A._GetAutoObject(A.Device.Device).An0();A._GetAutoObject(A.Device.Device).Afa(
false);A._GetAutoObject(A.Device.Device).Ut(false);},Al6:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BAU],this);break;case 3:{A.pe([this,this.Bfp],this);A.pe([B=this.Abh,B.AxL],this
);A.pe(this.Abh.MC,this);}break;case 4:A.ab5("%s",AXm);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A8).FB();},BBI:function(G){this.Bod(!this.ABz);},Bod:function(
E){if(this.ABz===E)return;this.ABz=E;if(!E)A._GetAutoObject(A.Device.Device).Afa(
false);this.Am();},BAU:function(G){var B;this.Bfp(this);if(this.ABz)A._GetAutoObject(
A.Device.Device).Afa(true);A._GetAutoObject(A.Device.Device).WH(65280);A._GetAutoObject(
A.Device.Device).Ut(true);A.pe([B=this.Abh,B.StartTimer],this);A.pe([B=this.AgS,
B.StartTimer],this);this.Am();},BAV:function(G){A._GetAutoObject(A.Device.Device
).Afa(false);A._GetAutoObject(A.Device.Device).Ut(false);this.Am();},BAX:function(
G){this.Am();},Bfp:function(G){A._GetAutoObject(A.Device.Device).AhM();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jh._Init.call(this.Jh={I:this},0);C.CG._Init.
call(this.OW={I:this},0);A.acg.Ap._Init.call(this.IU={I:this},0);A.acl.Gm._Init.
call(this.Gm={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abh={I:this},0);A.Core.Timer._Init.call(this.AgS={I:this},0);A.acg.Ap.
_Init.call(this.TM={I:this},0);A.acg.Ap._Init.call(this.Sc={I:this},0);A.acg.Text.
_Init.call(this.AcC={I:this},0);C.W4._Init.call(this.W4={I:this},0);C.CG._Init.call(
this.Hj={I:this},0);this.__proto__=C.AUk;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Jh.H(AXn);this.Jh.AkG(0);this.OW.H(AXo);this.OW.R(A.aaR(A.acf.A$Z));
this.OW.L(A.jb.Text);this.IU.H(AXp);this.IU.L(A.jb.AV);this.IU.Zr(true);this.Gm.
Fr(1750);this.Gm.Uq(750);this.Gm.AkB(0);this.Gm.Ar(true);this.Gm.B2=3;this.AL.H(
Ayq);this.Abh.PV(-1);this.Abh.WG(1000);this.AgS.PV(-1);this.AgS.WG(5000);this.TM.
H(AHW);this.Sc.H(AHW);this.Sc.L(A.jb.E1);this.AcC.H(Ayq);this.AcC.R(A.aaR(A.acf.
A$x));this.AcC.L(A.jb.Text);this.W4.H(Ayq);this.Hj.H(AXq);this.Hj.Ar(false);this.
Hj.R(A.aaR(A.acf.RangeTest));this.Hj.L(A.jb.Text);this.J(this.Jh,0);this.J(this.
OW,0);this.J(this.IU,0);this.J(this.AL,0);this.J(this.TM,0);this.J(this.Sc,0);this.
J(this.AcC,0);this.J(this.W4,0);this.J(this.Hj,0);this.N.CE=[this,this.Ew];this.
N.B$=[this,this.BBI];this.N.C1(A.aaL(A.ach.E2));this.OW.S(A.aaL(A.fl.Af));this.OW.
AZ(A.aaL(A.fl.Ak));this.OW.Cr(A.aaL(A.fl.Bh));this.IU.Ax(A.aaL(A.ach.ADP));this.
Gm.Q=[B=this.IU,B.ASG,B.Cv];this.Abh.MC=[this,this.BAV];this.AgS.MC=[this,this.BAX
];this.TM.Ax(A.aaL(A.ach.TM));this.Sc.Ax(A.aaL(A.ach.Sc));this.AcC.S(A.aaL(A.fl.
Af));this.W4.Au([B=A._GetAutoObject(A.Device.Device),B.ASU,B.A0x]);this.Hj.S(A.aaL(
A.fl.Kp));this.Hj.AZ(A.aaL(A.fl.HJ));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jh._Done();this.OW._Done();this.IU._Done();this.Gm._Done();this.AL._Done(
);this.Abh._Done();this.AgS._Done();this.TM._Done();this.Sc._Done();this.AcC._Done(
);this.W4._Done();this.Hj._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jh._ReInit();this.OW._ReInit();this.IU._ReInit();this.Gm.
_ReInit();this.AL._ReInit();this.Abh._ReInit();this.AgS._ReInit();this.TM._ReInit(
);this.Sc._ReInit();this.AcC._ReInit();this.W4._ReInit();this.Hj._ReInit();this.
OW.R(A.aaR(A.acf.A$Z));this.AcC.R(A.aaR(A.acf.A$x));this.Hj.R(A.aaR(A.acf.RangeTest
));this.OW.S(A.aaL(A.fl.Af));this.OW.AZ(A.aaL(A.fl.Ak));this.OW.Cr(A.aaL(A.fl.Bh
));this.AcC.S(A.aaL(A.fl.Af));this.Hj.S(A.aaL(A.fl.Kp));this.Hj.AZ(A.aaL(A.fl.HJ
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jh)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TM)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.W4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hj).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbS={
ScreenType:0,Nk:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nn:
function(G){A._GetAutoObject(C.A8).Cd(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbS;},_className:"Application::MenuItemScreen"
};C.Uc={Ad_:null,Mo:null,AmD:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmD){this.Mo.Cv(1);this.Mo.L(A.jb.H9);}else{this.Mo.Cv(0);
if(this.KH)this.Mo.L(A.jb.Bm);else if(this.Hl)this.Mo.L(A.jb.Text);else this.Mo.
L(A.jb.Bm);}},I1:function(G){var F,Ct;if(!!this.Ad_){(Ct=this.Ad_,Ct[2].call(Ct[
0],!(F=this.Ad_,F[1].call(F[0]))));this.AE7((F=this.Ad_,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A3o:function(G){this.KH=true;this.DJ(this);},AE7:function(
E){if(this.AmD===E)return;this.AmD=E;this.DJ(this);this.Am();},A3Q:function(G){var
F;this.AE7((F=this.Ad_,F[1].call(F[0])));},A0R:function(s){this.A3Q(s);},DJ:function(
G){var F;if(!this.N||!this.KH)return;if(this.AmD){(F=this.N,F[1].call(F[0])).CR(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CR(A.aaR(A.acf.A8m));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},AS_:function(E){if(A.aaZ(this.Ad_,E))
return;if(!!this.Ad_)A.z$([this,this.A0R],this.Ad_,0);this.Ad_=E;if(!!E)A.zX([this
,this.A0R],E,0);if(!!E)A.pe([this,this.A0R],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mo={I:this},0);this.__proto__=C.Uc;this.
V.L(A.jb.H9);this.Mo.H(AHX);this.Mo.Cv(0);this.J(this.Mo,0);this.Mo.Ax(A.aaL(A.ach.
AqO));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mo._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mo._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad_)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mo)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANM={H6:null,IO:null,_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.SS._Init.call(this.H6={I:this},0);C.AGM._Init.call(this.
IO={I:this},0);this.__proto__=C.ANM;var B;this.Jb(A.aaR(A.acf.ACz));this.H6.H(Ah3
);this.H6.Aj(true);this.H6.T(A.aaR(A.acf.Date));this.H6.Bi(true);this.IO.H(U1);this.
IO.Aj(true);this.IO.T(A.aaR(A.acf.Bs));this.J(this.H6,-1);this.J(this.IO,-1);this.
H6.Ab0([B=this.H6,B.FV]);this.H6.Gs([this,this.D_,this.GS]);this.H6.AkA(A.aaL(A.
ach.Edit));this.H6.Ab6([B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6]);this.IO.
Ab0([B=this.IO,B.FV]);this.IO.Gs([this,this.D_,this.GS]);this.IO.AkA(A.aaL(A.ach.
Edit));this.IO.Ab6([B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6]);},_Done:function(
){this.__proto__=C.Cg;this.H6._Done();this.IO._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.H6._ReInit();this.IO._ReInit();this.Jb(A.
aaR(A.acf.ACz));this.H6.T(A.aaR(A.acf.Date));this.IO.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cg._Mark.call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVi={Rf:null,FK:null,BZ:null,OK:null,YM:null,Aa3:null,_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.Rf._Init.call(this.Rf={I:this},0);C.AMF._Init.call(this.
FK={I:this},0);C.AUS._Init.call(this.BZ={I:this},0);C.AUU._Init.call(this.OK={I:
this},0);C.Afn._Init.call(this.YM={I:this},0);C.Aa3._Init.call(this.Aa3={I:this}
,0);this.__proto__=C.AVi;var B;this.Jb(A.aaR(A.acf.Temperature));this.FK.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AXr);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Arp));this.BZ.Bi(false);this.OK.H(Aag);this.OK.Aj(true);this.OK.T(A.aaR(A.acf.Undertemperature
));this.OK.Bi(true);this.OK.Bx(3800);this.OK.Ga(3000);this.OK.EV(5000);this.OK.A_V(
A.aaR(A.acf.AGZ));this.YM.H(AXs);this.YM.Aj(true);this.YM.Z(true);this.YM.T(A.aaR(
A.acf.A5l));this.J(this.BZ,0);this.J(this.OK,0);this.J(this.YM,0);this.BZ.Ab0([B=
this.BZ,B.FV]);this.BZ.Gs([this,this.D_,this.GS]);this.BZ.AkA(A.aaL(A.ach.Edit));
this.BZ.LZ([B=this.BZ,B.AyW]);this.BZ.L2(A.aaL(A.ach.AnR));this.BZ.Au([B=this.FK
,B.B_,B.Cb]);this.BZ.CK(this.FK);this.BZ.A_v([B=this.FK,B.AS2,B.A0E]);this.BZ.A_u([
B=this.FK,B.AS1,B.A0D]);this.OK.LZ([B=this.BZ,B.AyW]);this.OK.L2(A.aaL(A.ach.AnR
));this.OK.Au([B=A._GetAutoObject(A.Device.Device),B.A9s,B.BbI]);this.YM.CK(this.
Aa3);this.YM.AkD([B=A._GetAutoObject(A.Device.Device),B.A8N,B.Bbr]);},_Done:function(
){this.__proto__=C.Cg;this.Rf._Done();this.FK._Done();this.BZ._Done();this.OK._Done(
);this.YM._Done();this.Aa3._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.Rf._ReInit();this.FK._ReInit();this.BZ._ReInit();this.
OK._ReInit();this.YM._ReInit();this.Aa3._ReInit();this.Jb(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Arp));this.OK.T(A.aaR(A.acf.Undertemperature));this.OK.
A_V(A.aaR(A.acf.AGZ));this.YM.T(A.aaR(A.acf.A5l));},_Mark:function(D){var B;C.Cg.
_Mark.call(this,D);if((B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ANZ={PK:null,PL:null,Sv:null,V7:null,Sx:null,Sw:null,Gd:null,Acr:null,Init:function(
aArg){A.zX([this,this.BpB],this.PL.Q,0);},BpB:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw9((F=this.PL.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.Ir._Init.call(this.PK={I:this},0);C.BW._Init.call(this.PL={
I:this},0);C.Afn._Init.call(this.Sv={I:this},0);C.Ir._Init.call(this.V7={I:this}
,0);C.Afn._Init.call(this.Sx={I:this},0);C.Afn._Init.call(this.Sw={I:this},0);C.
Gd._Init.call(this.Gd={I:this},0);C.Acr._Init.call(this.Acr={I:this},0);this.__proto__=
C.ANZ;var B;this.N.H(Xi);this.Jb(A.aaR(A.acf.Device));this.PK.H(Ah3);this.PK.Aj(
true);this.PK.T(A.aaR(A.acf.A$H));this.PK.Bi(false);this.PK.Ga(2);this.PK.EV(60);
this.PK.IR(A.aaR(A.acf.AHc));this.PK.Jc(A.aaR(A.acf.AHc));this.PL.H(AXt);this.PL.
Aj(true);this.PL.T(A.aaR(A.acf.A$O));this.PL.Bi(true);this.PL.Bx(0);this.PL.Ga(-
1);this.PL.EV(1);this.Sv.H(Aag);this.Sv.Aj(true);this.Sv.T(A.aaR(A.acf.HG));this.
Sv.Bi(false);this.Sv.Bx(0);this.Sv.Ga(-1);this.Sv.EV(1);this.V7.H(Ali);this.V7.Aj(
true);this.V7.T(A.aaR(A.acf.A5J));this.V7.Bi(true);this.V7.IR(AfG);this.V7.Jc(AfG
);this.Sx.H(AcQ);this.Sx.Aj(true);this.Sx.T(A.aaR(A.acf.AsR));this.Sx.Bi(false);
this.Sx.Bx(1);this.Sx.Ga(-1);this.Sx.EV(1);this.Sw.H(Aoq);this.Sw.Aj(true);this.
Sw.T(A.aaR(A.acf.Asu));this.Sw.Bi(true);this.Sw.Bx(0);this.Sw.Ga(-1);this.Sw.EV(
1);this.Acr.Au(A._GetAutoObject(A.Device.Device).AxK);this.J(this.PK,0);this.J(this.
PL,0);this.J(this.Sv,0);this.J(this.V7,0);this.J(this.Sx,0);this.J(this.Sw,0);this.
PK.Au([B=A._GetAutoObject(A.Device.Device),B.A9k,B.BbE]);this.PL.Au([B=this.Acr,
B.B_,B.Cb]);this.PL.CK(this.Acr);this.Sv.CK(this.Gd);this.Sv.AkD([B=A._GetAutoObject(
A.Device.Device),B.AEF,B.AIT]);this.V7.Au([B=A._GetAutoObject(A.Device.Device),B.
A8K,B.Bbo]);this.Sx.CK(this.Gd);this.Sx.AkD([B=A._GetAutoObject(A.Device.Device)
,B.A9t,B.BbJ]);this.Sw.CK(this.Gd);this.Sw.AkD([B=A._GetAutoObject(A.Device.Device
),B.ASK,B.A0q]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.PK._Done(
);this.PL._Done();this.Sv._Done();this.V7._Done();this.Sx._Done();this.Sw._Done(
);this.Gd._Done();this.Acr._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.PK._ReInit();this.PL._ReInit();this.Sv._ReInit();this.
V7._ReInit();this.Sx._ReInit();this.Sw._ReInit();this.Gd._ReInit();this.Acr._ReInit(
);this.Jb(A.aaR(A.acf.Device));this.PK.T(A.aaR(A.acf.A$H));this.PK.IR(A.aaR(A.acf.
AHc));this.PK.Jc(A.aaR(A.acf.AHc));this.PL.T(A.aaR(A.acf.A$O));this.Sv.T(A.aaR(A.
acf.HG));this.V7.T(A.aaR(A.acf.A5J));this.Sx.T(A.aaR(A.acf.AsR));this.Sw.T(A.aaR(
A.acf.Asu));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.PK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUw={V_:null,V9:
null,QP:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BiP
],this.QP.Q,0);},BiP:function(G){var F;A._GetAutoObject(A.Device.Device).Akx((F=
this.QP.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
Nh._Init.call(this.V_={I:this},0);C.Nh._Init.call(this.V9={I:this},0);C.AUO._Init.
call(this.QP={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUw;var B;this.Jb(A.aaR(A.acf.Asn));this.V_.H(IW);this.
V_.Aj(true);this.V_.T(A.aaR(A.acf.AjH));this.V_.Bi(false);this.V_.Nk(87);this.V9.
H(AXu);this.V9.Aj(true);this.V9.T(A.aaR(A.acf.Aqm));this.V9.Bi(true);this.V9.Nk(
88);this.QP.H(U1);this.QP.Aj(true);this.QP.T(A.aaR(A.acf.A5q));this.QP.Bi(false);
this.QP.Ga(-1);this.QP.EV(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V_,0);this.J(this.V9,0);this.J(this.
QP,0);this.V_.AR=[B=this.V_,B.Nn];this.V9.AR=[B=this.V9,B.Nn];this.QP.Au([B=this.
EartagNrAssignmentMode,B.B_,B.Cb]);this.QP.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.V_._Done();this.V9._Done(
);this.QP._Done();this.EartagNrAssignmentMode._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.V_._ReInit();this.V9._ReInit();this.QP._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Jb(A.aaR(A.acf.Asn));this.V_.T(A.aaR(
A.acf.AjH));this.V9.T(A.aaR(A.acf.Aqm));this.QP.T(A.aaR(A.acf.A5q));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.V_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.W4={Q:null,TransponderProtocolToString:
null,Apq:null,Background:null,Y:null,Sp:null,GN:null,PP:null,OM:null,Pt:null,C8:
null,EN:null,SN:null,N5:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.ID],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.ID],E,0);if(!!E)A.pe([this,this.ID],this);},ID:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GN.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BM=(F=this.Q,F[1].call(F[0])).Bjl();if(BM<900){var J_=A._GetAutoObject(
A.Device.Converter).AND(BM);if(!!J_)this.C8.R(((this.CountryToString.Lv(J_)+AcO)+
BM.toFixed())+O9);else this.C8.R(BM.toFixed());if(J_===10){var AKh=this.A7f((F=this.
Q,F[1].call(F[0])).Id);this.C8.R(this.C8.String+((((AHY+this.Apq.Bqk(AKh))+AcO)+
A.abl(this.Apq.Bqj(AKh),2,10))+O9));}this.C8.Z(true);this.Pt.Z(true);this.OM.Z(false
);this.PP.Z(false);}else{this.OM.R(((A._GetAutoObject(A.Device.Converter).Bh6(BM
)+AcO)+BM.toFixed())+O9);this.OM.Z(true);this.PP.Z(true);this.C8.Z(false);this.Pt.
Z(false);}if(BM===276){this.EN.R(this.Apq.BS(this.A7f((F=this.Q,F[1].call(F[0])).
Id)));this.EN.Z(true);}else this.EN.Z(false);this.N5.R(this.TransponderProtocolToString.
BS((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GN.R(A.jV);this.OM.
R(A.jV);this.EN.R(A.jV);this.C8.R(A.jV);this.N5.R(A.jV);}},A7f:function(J8){var Qz=
0;var J_=A._GetAutoObject(A.Device.Converter).S3(J8);switch(J_){case 10:{var Gi=
A._GetAutoObject(A.Device.Converter).AVA(J8);Qz=A._GetAutoObject(A.Device.Converter
).ACZ(Gi);}break;default:;}return Qz;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apq={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.Sp={I:this},0);C.CG._Init.call(this.GN={I:this},0);C.CG._Init.
call(this.PP={I:this},0);C.CG._Init.call(this.OM={I:this},0);C.CG._Init.call(this.
Pt={I:this},0);C.CG._Init.call(this.C8={I:this},0);C.CG._Init.call(this.EN={I:this
},0);C.CG._Init.call(this.SN={I:this},0);C.CG._Init.call(this.N5={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.W4;
this.H(AcP);this.Background.A0(0x3F);this.Background.H(AcP);this.Background.L(A.
jb.CT);this.Y.A0(0x3F);this.Y.H(AcP);this.Y.JV(9);this.Sp.H(AHZ);this.Sp.Aj(true
);this.Sp.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.Sp.A6(0x11);this.Sp.L(A.jb.
Text);this.GN.H(AXv);this.GN.Aj(true);this.GN.R(AH0);this.GN.A6(0x14);this.GN.L(
A.jb.Text);this.PP.H(AH1);this.PP.Aj(true);this.PP.R(A.aaR(A.acf.A$b)+A.aaR(A.acf.
Colon));this.PP.A6(0x11);this.PP.L(A.jb.Text);this.OM.H(AH2);this.OM.Aj(true);this.
OM.R(AXw);this.OM.A6(0x14);this.OM.L(A.jb.Text);this.Pt.H(AH1);this.Pt.Aj(true);
this.Pt.R(A.aaR(A.acf.C8)+A.aaR(A.acf.Colon));this.Pt.A6(0x11);this.Pt.L(A.jb.Text
);this.C8.H(AH2);this.C8.Aj(true);this.C8.R(AXx);this.C8.A6(0x14);this.C8.L(A.jb.
Text);this.EN.H(AXy);this.EN.Aj(true);this.EN.R(AXz);this.EN.A6(0x14);this.EN.L(
A.jb.Text);this.SN.H(AXA);this.SN.Aj(true);this.SN.R(A.aaR(A.acf.N5)+A.aaR(A.acf.
Colon));this.SN.A6(0x11);this.SN.L(A.jb.Text);this.N5.H(AXB);this.N5.Aj(true);this.
N5.R(AXC);this.N5.A6(0x14);this.N5.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.Sp,0);this.J(this.GN,0);this.J(this.PP,0);this.J(this.OM,0
);this.J(this.Pt,0);this.J(this.C8,0);this.J(this.EN,0);this.J(this.SN,0);this.J(
this.N5,0);this.Sp.S(A.aaL(A.fl.Ak));this.Sp.AZ(A.aaL(A.fl.Bh));this.GN.S(A.aaL(
A.fl.Ak));this.GN.AZ(A.aaL(A.fl.Bh));this.PP.S(A.aaL(A.fl.Ak));this.PP.AZ(A.aaL(
A.fl.Bh));this.OM.S(A.aaL(A.fl.Ak));this.OM.AZ(A.aaL(A.fl.Bh));this.Pt.S(A.aaL(A.
fl.Ak));this.Pt.AZ(A.aaL(A.fl.Bh));this.C8.S(A.aaL(A.fl.Ak));this.C8.AZ(A.aaL(A.
fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.AZ(A.aaL(A.fl.Bh));this.SN.S(A.aaL(A.fl.
Ak));this.SN.AZ(A.aaL(A.fl.Bh));this.N5.S(A.aaL(A.fl.Ak));this.N5.AZ(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apq._Done();this.Background._Done();this.Y._Done();this.Sp._Done();
this.GN._Done();this.PP._Done();this.OM._Done();this.Pt._Done();this.C8._Done();
this.EN._Done();this.SN._Done();this.N5._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apq._ReInit();this.Background._ReInit();this.Y._ReInit();this.Sp.
_ReInit();this.GN._ReInit();this.PP._ReInit();this.OM._ReInit();this.Pt._ReInit(
);this.C8._ReInit();this.EN._ReInit();this.SN._ReInit();this.N5._ReInit();this.CountryToString.
_ReInit();this.Sp.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.PP.R(A.aaR(A.acf.A$b
)+A.aaR(A.acf.Colon));this.Pt.R(A.aaR(A.acf.C8)+A.aaR(A.acf.Colon));this.SN.R(A.
aaR(A.acf.N5)+A.aaR(A.acf.Colon));this.Sp.S(A.aaL(A.fl.Ak));this.Sp.AZ(A.aaL(A.fl.
Bh));this.GN.S(A.aaL(A.fl.Ak));this.GN.AZ(A.aaL(A.fl.Bh));this.PP.S(A.aaL(A.fl.Ak
));this.PP.AZ(A.aaL(A.fl.Bh));this.OM.S(A.aaL(A.fl.Ak));this.OM.AZ(A.aaL(A.fl.Bh
));this.Pt.S(A.aaL(A.fl.Ak));this.Pt.AZ(A.aaL(A.fl.Bh));this.C8.S(A.aaL(A.fl.Ak)
);this.C8.AZ(A.aaL(A.fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.AZ(A.aaL(A.fl.Bh)
);this.SN.S(A.aaL(A.fl.Ak));this.SN.AZ(A.aaL(A.fl.Bh));this.N5.S(A.aaL(A.fl.Ak));
this.N5.AZ(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QX={D2:null,A$q:A.jV,Ai:function(Ae){C.Fo.Ai.call(
this,Ae);if(this.Ms.Fq())this.D2.CU(A.jb.AV);else this.D2.CU(this.Background.AQ);
this.D2.Zt(this.G_.AQ);},Zy:function(E){if(this.A$q===E)return;this.A$q=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fo._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QX;this.Background.H(AXD);this.
Ms.H(W_);this.OF.H(AH3);this.Q3.H(AH3);this.D2.H(AXE);this.D2.Z(false);this.J(this.
D2,0);this.G_.S(A.aaL(A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fo;this.D2._Done();C.Fo._Done.call(this
);},_ReInit:function(){C.Fo._ReInit.call(this);this.D2._ReInit();this.G_.S(A.aaL(
A.fl.Af));this.G_.AZ(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fo._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,AeF:null,Ap:null,Text:null
,DK:A.jV,AmQ:0,M4:0,Jd:0,A5M:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BCW:function(G){this.Ap.H(this.Text.M);this.
AeF.H(this.Text.M);},Zt:function(E){if(this.AmQ===E)return;this.AmQ=E;this.AeF.L(
E);this.Text.L(E);},CU:function(E){if(this.M4===E)return;this.M4=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hn:function(E){
if(this.Jd===E)return;this.Jd=E;this.Text.Hn(E);},Bmg:function(E){if(this.A5M===
E)return;this.A5M=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NT._Init.call(this.AeF={I:this},0);A.acg.NT._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AH4);
this.AeF.A0(0x8);this.AeF.L(A.jb.Text);this.Ap.A0(0x8);this.Ap.L(A.jb.CT);this.Text.
A0(0xD);this.Text.H(AH4);this.Text.Hn(5);this.Text.Ja(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeF,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeF.Ax(A.aaL(A.ach.APZ));this.Ap.Ax(A.aaL(A.ach.APY));this.Text.Q7([this,this.BCW
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeF._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeF._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T_={DY:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALo(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkQ();A._GetAutoObject(A.Device.Helper).Asr();},Ih:function(G){},AcV:function(
s){this.Ih(s);},A3F:function(G){A._GetAutoObject(C.A8).FB();},Fk:function(G){var
B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.
Mz(-this.Y.Br[1]);},ALo:function(G){},BG5:function(s){this.ALo(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T_;this.Background.L(A.jb.CT);this.N.Z(true);this.N.CR(A.jV);this.Dr(C.Aq0);this.
DY.A0(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);this.Y.JV(9);this.Ay.H(
It);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CE=[this,this.A3F
];this.N.C1(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVT={WE:function(
G){this.Agx();this.I3(A.aaR(A.acf.AVq),[this,this.ATS],7);this.I3(A.aaR(A.acf.BoT
),[this,this.Bmj],6);this.I3(A.aaR(A.acf.AGl),[this,this.ATE],3);this.I3(A.aaR(A.
acf.An1),[this,this.AwX],2);this.I3(A.aaR(A.acf.AdV),[this,this.AEY],1);this.I3(
A.aaR(A.acf.AuG),[this,this.AES],0);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abs:function(){return C.ANe;},Abt:function(){return C.APF;
},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mt();var ABB=A._NewObject(
A.Device.BoolFilterCriterion,0);ABB.Initialize(12,0,true,true);Be.CW(ABB);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HQ:function(G){var F;C.GJ.HQ.call(this,G);if(this.Aki(
)===false){this.N.Cw(A._GetAutoObject(A.Device.Converter).Ajr((F=this.Fn,F[1].call(
F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OQ(false);this.N.OR(false
);},Agj:function(){A._GetAutoObject(C.A8).Cd(41);},_Init:function(aArg){C.GJ._Init.
call(this,aArg);this.__proto__=C.AVT;var B;this.Dr(C.APB);this.Dk(A.aaR(A.acf.A7$
));this.AwS([B=A._GetAutoObject(A.Device.Device),B.A9x,B.BbK]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dk(A.aaR(A.acf.A7$));},_className:"Application::WatchListScreen"
};C.AMk={DE:function(G){var B;var JD=(A.Core.BK.isPrototypeOf(G)?G:null);if(((JD.
CO===4)||(JD.CO===5))===false){C.Ax4.DE.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var Bdc=A._GetAutoObject(A.Device.Device
).KX;var Tj;if(JD.CO===5)Tj=5;else Tj=4;var ABf=A._GetAutoObject(A.acj.DU).BdM(Bdc
,Tj);var Gv=(((Bdc+((ABf/2)|0))/ABf)|0)*ABf;if(JD.CO===4)Gv+=ABf;else if(JD.CO===
5)Gv-=ABf;if(Gv>999900)Gv=999900;if(Gv<100)Gv=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(Gv);},AsF:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O3,B.CE],this);else A._GetAutoObject(C.A8).FB();
},WU:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsH();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$F()===false){this.H8.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KX
);this.H8.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H8.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KX);this.H8.Ci(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A8).FB();}},AkX:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O3,B.B$],this);},BdL:function(){var
ALC=A._GetAutoObject(A.Device.Helper).W.AhW(1);if(ALC>=100000)ALC=(Math.round(ALC
/1000)|0)*1000;return ALC;},_Init:function(aArg){C.Ax4._Init.call(this,aArg);this.
__proto__=C.AMk;},_className:"Application::AnimalActionWeighingScreen"};C.AVE={Wc:
null,YO:null,Rf:null,AeQ:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
BW._Init.call(this.Wc={I:this},0);C.BW._Init.call(this.YO={I:this},0);C.Rf._Init.
call(this.Rf={I:this},0);C.AeQ._Init.call(this.AeQ={I:this},0);this.__proto__=C.
AVE;var B;this.Jb(A.aaR(A.acf.AHd));this.Wc.H(Ah3);this.Wc.Aj(true);this.Wc.T(A.
aaR(A.acf.A$8));this.Wc.Bi(true);this.Wc.Bx(0);this.YO.H(U1);this.YO.Aj(true);this.
YO.T(A.aaR(A.acf.A$7));this.YO.Bi(false);this.J(this.Wc,0);this.J(this.YO,0);this.
Wc.Au([B=this.Rf,B.B_,B.Cb]);this.Wc.CK(this.Rf);this.YO.Au([B=this.AeQ,B.B_,B.Cb
]);this.YO.CK(this.AeQ);},_Done:function(){this.__proto__=C.Cg;this.Wc._Done();this.
YO._Done();this.Rf._Done();this.AeQ._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.Wc._ReInit();this.YO._ReInit();this.Rf._ReInit();
this.AeQ._ReInit();this.Jb(A.aaR(A.acf.AHd));this.Wc.T(A.aaR(A.acf.A$8));this.YO.
T(A.aaR(A.acf.A$7));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.
Wc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeQ={MassUnitToString:null
,Du:function(){return 2;},C6:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwT(E);}
,Init:function(aArg){var B;A.zX([this,this.Bep],[B=A._GetAutoObject(A.Device.Device
),B.ASJ,B.A0p],0);A.pe([this,this.Bep],this);},Bep:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeQ;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax4={H8:null,Ajx:null,MassUnit:null,
KX:null,VB:null,AnN:null,AcE:null,Z0:null,O3:null,YE:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af4());A.zX([this,this.AKF],[B=A._GetAutoObject(
A.Device.Device),B.AEI,B.AIW],0);A.zX([this,this.BBJ],[B=A._GetAutoObject(A.Device.
Device),B.AEO,B.AI0],0);A.zX([this,this.BBK],[B=this.O3,B.Arx,B.Jz],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxX();this.AcG();},I1:function(G){this.WU(this);}
,CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsH();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),
0,null);this.H8.Gr();this.H8.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGV();else{var BC$=this.BdL();this.Z0.Z(true);this.AcE.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BC$);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsH();else A._GetAutoObject(A.Device.Device).AhP(
);},AxX:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bha();break;case 3:{this.Bha();this.Z0.Z(false);this.AcE.Z(false
);if(this.A$F()){this.VB.Z(false);this.KX.H(A.abO(this.KX.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O3.Ar(true);this.O3.Z(true);this.Bb(this.O3);}}break;
case 4:this.KX.R(A.aaR(A.acu.Akl));break;default:A.ab5("%s%e",AH5,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcG:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C1(A.aaL(A.ach.AeA));this.N.Cw(null);
this.YE.Z(false);this.N.C2(A.aaL(A.ach.Am3));this.N.CR(A.jV);}break;case 3:{if(this.
O3.AY<=1){this.N.C1(null);this.N.Cw(null);this.YE.Z(false);this.N.C2(null);}else{
this.N.C1(A.aaL(A.ach.Am2));this.N.Cw(A.aaL(A.ach.AeB));this.YE.Z(true);this.N.C2(
null);}this.N.CR(A.aaR(A.acf.Ok));}break;case 4:{this.N.C2(A.aaL(A.ach.AvQ));this.
N.B$=[this,this.Bl9];this.N.Cw(null);this.YE.Z(false);this.N.CR(A.jV);}break;default:;
}},AsF:function(G){},Bw2:function(s){this.AsF(s);},WU:function(G){},A0H:function(
s){this.WU(s);},Bl9:function(G){this.CC(this);},BBJ:function(G){this.Am();},AKF:
function(G){this.Am();},A$F:function(){var Aux=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Aux>0)&&!A._GetAutoObject(A.Device.Helper).Bqh(Aux
,this.H8.Timestamp);},AkX:function(G){},A0G:function(s){this.AkX(s);},BBK:function(
G){this.Am();},Bha:function(){this.KX.R(A._GetAutoObject(A.Device.Converter).Ak$(
A._GetAutoObject(A.Device.Device).KX));},BdL:function(){return A._GetAutoObject(
A.Device.Helper).W.AhW(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KX={I:this},0);A.acg.Text._Init.call(this.VB={I:this
},0);C.AxW._Init.call(this.AnN={I:this},0);A.acg.Aeq._Init.call(this.AcE={I:this
},0);A.acg.Aeq._Init.call(this.Z0={I:this},0);C.AVY._Init.call(this.O3={I:this},
0);A.acg.Ap._Init.call(this.YE={I:this},0);this.__proto__=C.Ax4;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dr(C.IL);this.Ajx.A0(0x3F);this.Ajx.H(Ayr);this.Ajx.
L(A.jb.CJ);this.MassUnit.H(AXF);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
AAa));this.MassUnit.L(A.jb.Text);this.KX.H(AXG);this.KX.A6(0x14);this.KX.R(A.aaR(
A.acu.Akl));this.KX.L(A.jb.Text);this.VB.H(AXH);this.VB.R(A.aaR(A.acf.Bai));this.
VB.L(A.jb.Text);this.VB.Z(true);this.AnN.H(AXI);this.AcE.H(AXJ);this.AcE.L(A.jb.
Aeb);this.AcE.Z(false);this.Z0.H(AH6);this.Z0.L(A.jb.Aeb);this.Z0.BmX(true);this.
Z0.Z(false);this.O3.A0(0x3F);this.O3.H(Ayr);this.O3.Ar(false);this.O3.Z(false);this.
YE.H(AXK);this.YE.L(A.jb.Bm);this.J(this.Ajx,0);this.J(this.MassUnit,0);this.J(this.
KX,0);this.J(this.VB,0);this.J(this.AcE,0);this.J(this.Z0,0);this.J(this.O3,0);this.
J(this.YE,0);this.N.CE=[this,this.Bw2];this.N.Cf=[this,this.A0G];this.N.B$=[this
,this.A0H];this.MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aet));this.VB.S(
A.aaL(A.fl.EK));this.AcE.Zx(this.AnN);this.Z0.Zx(this.AnN);this.H8=A._NewObject(
A.Device.Rating,0);this.O3.L0(A._GetAutoObject(A.Device.Helper).W);this.O3.AkE(this.
H8);this.YE.Ax(A.aaL(A.ach.AQV));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajx._Done();this.MassUnit._Done();this.KX._Done();this.VB._Done();this.
AnN._Done();this.AcE._Done();this.Z0._Done();this.O3._Done();this.YE._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajx._ReInit();
this.MassUnit._ReInit();this.KX._ReInit();this.VB._ReInit();this.AnN._ReInit();this.
AcE._ReInit();this.Z0._ReInit();this.O3._ReInit();this.YE._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAa));this.KX.R(A.aaR(A.acu.Akl));this.VB.R(A.aaR(A.acf.Bai));this.
MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aet));this.VB.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H8)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AV2={FK:null
,ON:null,Ne:null,C_:null,LW:null,T7:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FK,B.B_,B.Cb],0);A.pe([this,this.GH],this);},CC:function(G){C.Cg.CC.
call(this,G);A.pe([this,this.GH],this);},BkS:function(G){var F;this.LW.BT.L(this.
LW.V.AQ);if(!!this.LW.Q)this.LW.BT.R((A._GetAutoObject(A.Device.Converter).S_((F=
this.LW.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DU).Aav());},GH:function(
G){var AJA=true;if(this.FK.Q===1)AJA=false;this.C_.Aj(AJA);this.C_.Ar(AJA);this.
C_.Z(AJA);A._GetAutoObject(A.Device.Helper).ANx(this.Y);},_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.AMG._Init.call(this.FK={I:this},0);C.AHo._Init.call(this.
ON={I:this},0);C.AUT._Init.call(this.Ne={I:this},0);C.AkV._Init.call(this.C_={I:
this},0);C.Ir._Init.call(this.LW={I:this},0);C.BW._Init.call(this.T7={I:this},0);
this.__proto__=C.AV2;var B;this.Jb(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsU));this.FK.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.ON.Au(A._GetAutoObject(
A.Device.Device).ON);this.Ne.H(AXL);this.Ne.Aj(true);this.C_.H(As_);this.C_.Aj(true
);this.C_.T(A.aaR(A.acf.KK));this.C_.Bi(true);this.C_.Ga(1000);this.C_.EV(99000);
this.LW.H(As$);this.LW.Aj(true);this.LW.T(A.aaR(A.acf.A5u));this.LW.Ga(50);this.
LW.EV(2000);this.LW.ATl(A._GetAutoObject(A.acj.DU).AzT());this.T7.H(AcQ);this.T7.
Aj(true);this.T7.T(A.aaR(A.acf.A7T));this.T7.Ga(-1);this.T7.EV(1);this.J1(this.Y
,-1);this.J1(this.Ay,-1);this.J(this.Ne,0);this.J(this.C_,0);this.J(this.LW,0);this.
J(this.T7,0);this.Ne.Ab0([B=this.Ne,B.FV]);this.Ne.Gs([this,this.D_,this.GS]);this.
Ne.AkA(A.aaL(A.ach.Edit));this.Ne.LZ([B=this.Ne,B.AyW]);this.Ne.L2(A.aaL(A.ach.AnR
));this.Ne.Au([B=this.FK,B.B_,B.Cb]);this.Ne.CK(this.FK);this.Ne.A_v([B=this.FK,
B.AS2,B.A0E]);this.Ne.A_u([B=this.FK,B.AS1,B.A0D]);this.C_.Gs([this,this.D_,this.
GS]);this.C_.LZ([B=this.Ne,B.AyW]);this.C_.L2(A.aaL(A.ach.AnR));this.C_.Au([B=this.
FK,B.A8I,B.AS9]);this.LW.Gs([this,this.D_,this.GS]);this.LW.LZ([B=this.Ne,B.AyW]
);this.LW.L2(A.aaL(A.ach.AnR));this.LW.Au([B=this.FK,B.A8G,B.AS7]);this.LW.A_J([
this,this.BkS]);this.T7.Gs([this,this.D_,this.GS]);this.T7.Au([B=this.ON,B.B_,B.
Cb]);this.T7.CK(this.ON);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;
this.FK._Done();this.ON._Done();this.Ne._Done();this.C_._Done();this.LW._Done();
this.T7._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.FK._ReInit();this.ON._ReInit();this.Ne._ReInit();this.C_._ReInit();this.LW.
_ReInit();this.T7._ReInit();this.Jb(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsU));this.C_.T(A.aaR(A.acf.KK));this.LW.T(A.aaR(A.acf.A5u));this.T7.T(A.aaR(A.acf.
A7T));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FK)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.ON)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ne).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUT={Y0:null,Init:
function(aArg){var B;A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Device),B.
ASJ,B.A0p],0);A.pe([this,this.AfH],this);},A39:function(G){A._GetAutoObject(A.Device.
Device).A3(37,true,A.jV,0,[this,this.BbZ]);},A1W:function(G){var F;if(this.A_===
1){var BO=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).AzT();if(this.D7<this.
AlT)this.D7=this.AlT;if(this.DW!==BO){if(!!this.JZ)(F=this.JZ,F[2].call(F[0],this.
D7));A.abo(this.JZ,0);}}if(this.A_===2){var BO=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).AzT();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JY
)(F=this.JY,F[2].call(F[0],this.DW));A.abo(this.JY,0);}}this.DJ(this);this.Am();
},A2w:function(G){var F;if(this.A_===1){var BO=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).AzT();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.JZ
)(F=this.JZ,F[2].call(F[0],this.D7));A.abo(this.JZ,0);}}if(this.A_===2){var BO=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).AzT();if(this.DW>this.AlO)this.DW=
this.AlO;if(this.DW!==BO){if(!!this.JY)(F=this.JY,F[2].call(F[0],this.DW));A.abo(
this.JY,0);}}this.DJ(this);this.Am();},GH:function(G){this.PN.R(AH7+A._GetAutoObject(
A.Device.Converter).S_(this.D7,2,true));this.PM.R(AH7+A._GetAutoObject(A.Device.
Converter).S_(this.DW,2,true));this.Sz.R(A._GetAutoObject(A.acj.DU).Aav());this.
Y0.R(this.Sz.String);},A3I:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).Ast(this
);},A2p:function(Atv){if(Atv===1)return this.PN;else if(Atv===2)return this.PM;else
return null;},_Init:function(aArg){C.Aco._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y0={I:this},0);this.__proto__=C.AUT;this.T(A.aaR(A.acf.ACu));this.AlO=
2000;this.AlT=20;this.Background.H(KZ);this.V.H(BD);this.V.R(A.aaR(A.acf.ACu)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkN.H(AXM);this.AkO.H(AXN);this.Q8.H(AXO);
this.QH.H(AXP);this.PM.H(AXQ);this.PN.H(AXR);this.Sz.H(AXS);this.Y0.H(AXT);this.
Y0.Ja(false);this.Y0.A6(0x12);this.Y0.L(0xFF000000);this.J1(this.H5,-8);this.J(this.
Y0,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.Y0.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Aco;this.Y0._Done();C.Aco.
_Done.call(this);},_ReInit:function(){C.Aco._ReInit.call(this);this.Y0._ReInit();
this.T(A.aaR(A.acf.ACu));this.V.R(A.aaR(A.acf.ACu)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.Y0.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Aco._Mark.call(this,D);if((B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABG={M:O5,A7s:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7s();},_Init:function(
aArg){A.Graphics.Hz._Init.call(this,aArg);this.__proto__=C.ABG;},_className:"Application::AbstractPath"
};C.Aqf={DP:null,DY:null,Rk:null,AdR:null,P5:null,AdQ:null,AuF:1,A42:0,BcV:false
,AzP:true,CP:function(){this.Bg8(this);},Init:function(aArg){var B;this.Bb(this.
AdR);A.zX([this,this.Bg8],[B=this.AdR,B.A8O,B.Bbs],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdQ.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Bip(this.AuF+this.A42)));if(this.AuF===1)this.P5.R(A.aaR(A.acf.ANl));else this.
P5.R(A.aaR(A.acf.BhZ));},CC:function(G){if(this.AzP)this.AzP=false;else if(this.
DP.Bc5()===false)A.pe([this,this.A3f],this);else if(this.DP.Az4())this.DP.Ac9();
A.zV([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);},A3f:function(G){this.
BcV=true;A._GetAutoObject(C.A8).FB();},Bg8:function(G){var B;var Bdv=(C.Wo.isPrototypeOf(
B=this.AdR.AV)?B:null);if(!!Bdv){var Aza=A._NewObject(A.Device.ActionToString,0);
this.Rk.R(Aza.Lv(Bdv.Action));}},Ih:function(G){var Cy=(C.Wo.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DP.Qp(Cy.Action);this.Bma(this.AuF+1);},BBc:function(G){
if(A._GetAutoObject(C.Pn).NY(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bma:function(E){
if(this.AuF===E)return;this.AuF=E;this.Am();},Aga:function(G){if((this.BcV===false
)&&(this.DP.Bc5()===false))A.pe([this,this.A3f],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);C.CG._Init.call(this.
Rk={I:this},0);C.ARO._Init.call(this.AdR={I:this},0);C.CG._Init.call(this.P5={I:
this},0);A.acg.Text._Init.call(this.AdQ={I:this},0);this.__proto__=C.Aqf;this.Background.
L(A.jb.CT);this.N.H(Xi);this.N.Z(true);this.Dr(C.IL);this.DY.A0(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Rk.H(AXU);this.Rk.L(A.jb.Text);this.AdR.H(AH8);this.
P5.H(AXV);this.P5.R(A.aaR(A.acf.ANl));this.P5.L(A.jb.Text);this.AdQ.H(Ays);this.
AdQ.R(AH9);this.AdQ.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rk,0);this.J(this.
AdR,0);this.J(this.P5,0);this.J(this.AdQ,0);this.N.CE=[this,this.A3f];this.N.Cf=[
this,this.BBc];this.N.C1(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.Rk.S(
A.aaL(A.fl.EK));this.Rk.AZ(A.aaL(A.fl.Af));this.Rk.Cr(A.aaL(A.fl.Ak));this.AdR.A3G=[
this,this.Ih];this.P5.S(A.aaL(A.fl.EK));this.P5.AZ(A.aaL(A.fl.Af));this.P5.Cr(A.
aaL(A.fl.Ak));this.AdQ.S(A.aaL(A.fl.H2));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rk._Done();this.
AdR._Done();this.P5._Done();this.AdQ._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rk._ReInit();this.AdR._ReInit();
this.P5._ReInit();this.AdQ._ReInit();this.P5.R(A.aaR(A.acf.ANl));this.Rk.S(A.aaL(
A.fl.EK));this.Rk.AZ(A.aaL(A.fl.Af));this.Rk.Cr(A.aaL(A.fl.Ak));this.P5.S(A.aaL(
A.fl.EK));this.P5.AZ(A.aaL(A.fl.Af));this.P5.Cr(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdQ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARO={Ib:null,A3G:null,Cq:null,Y:null,Ay:
null,A4m:0,Init:function(aArg){A.zV([this,this.ABv],this.Ib,0);A.zV([this,this.Bg5
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AuC],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABv],this);},Bb:function(E){var A3b=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A3b)A.abo([this,this.A8O,this.Bbs],0);},DE:
function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case
7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x415);
if((Fi===5)&&!X){var ALe=this.AV;while(!X){ALe=this.QJ(ALe,2,0x415);if(!!ALe)X=this.
QJ(ALe,Fi,0x415);else break;}}if(!!X)this.Bb(X);var GZ=(C.Wo.isPrototypeOf(B=this.
AV)?B:null);if(!!GZ)this.A4m=(C.Wo.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4m=0;A.pe([this,this.MS],this);},A1P:function(Eh){var EQ=A._GetAutoObject(C.DP).
Bdb(Eh,this.A3G);this.J(EQ,0);},Ao3:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HP(AdM);
}},ABv:function(G){this.Ao3();var O;var CB=A._GetAutoObject(C.Pn).M$();for(O=0;O<
CB;O=O+1){var Tg=A._GetAutoObject(C.Pn).OG(O);this.A1P(Tg);}A.pe([this,this.Bg5]
,this);A.pe([this,this.BqD],this);A.pe([this,this.AuC],this);},BqD:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Wo.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},AuC:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wo.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATN(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATN(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATN(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((
B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},Bg5:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wo.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pn).NY(Aa.Action)&&A._GetAutoObject(C.
DP).A41(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A4m===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MS],this);},MS:function(G){var B;this.Y.Vz(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARO;this.H(AXW);this.Cq.Filter=147;this.Y.A0(0xB);this.Y.H(AXX);this.Y.JV(9);this.
Ay.A0(0xA);this.Ay.H(AXY);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.
DE];this.Cq.D1=[this,this.DE];this.Y.Em=[this,this.Fk];this.Ib=A._GetAutoObject(
C.Pn);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ib)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3G)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fs={Ek:null,AL:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fs;this.N.Ar(false);this.Ek.H(BD);this.Ek.Ar(false
);this.AL.H(Ff);this.AL.L(A.jb.Aeb);this.Text.H(BD);this.Text.R(AXZ);this.Text.L(
0xFF000000);this.Ap.H(O5);this.Ap.L(A.jb.Text);this.J(this.Ek,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Cw(A.aaL(A.ach.AeD));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADi));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ek._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ek._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.AaT={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},I1:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FS=A.jb.Aeb;var GY=A.jb.CT;if(this.Hl){FS=A.jb.Text;GY=A.jb.
Bm;}if(!this.LI){this.Background.L(A.jb.CT);this.V.L(A.jb.CJ);}else if(this.Qv){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KH){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.Hx.L(A.
jb.CT);this.H5.L(A.jb.CT);},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(C.CG.
isPrototypeOf(B=this.Dz.Cj)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.AZ(A.aaL(
A.fl.Bh));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));else CA.R(Xg);CA.H(A.
abK(CA.M,[this.Dz.We,(B=this.Dz.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.AaT;this.Dz.AFp(170);this.Dz.N3(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajk={C9:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hn(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FS=A.jb.Aeb;var GY=A.jb.CT;if(this.Hl){FS=A.jb.Text;
GY=A.jb.Bm;}if(!this.LI){this.Background.L(A.jb.CT);this.V.L(A.jb.CJ);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KH){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C9={I:this},0);this.__proto__=
C.Ajk;this.C9.H(AX0);this.C9.Cv(1);this.J(this.C9,0);this.C9.Ax(A.aaL(A.ach.Aju)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C9._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C9._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AL3={Y:null,RO:null,Tv:null
,Tw:null,Tx:null,AdP:null,XP:null,Vt:null,Vu:null,AaS:null,Ay:null,Init:function(
aArg){this.Bb(this.RO);},DE:function(G){C.Fs.DE.call(this,G);this.MS(this);},I1:
function(G){this.Bgl(this);},Ln:function(){if(!this.BP){this.BP=A._NewObject(C.N
,0);this.BP.CE=[this,this.Bgl];this.BP.Cf=null;this.BP.B$=null;this.BP.CR(A.jV);
this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.YA));}return this.BP;},AA_:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XP.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XP.Q))A._GetAutoObject(C.AutoActions).J(this.XP.Q);if(!!this.Vt.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vt.Q))A._GetAutoObject(C.AutoActions
).J(this.Vt.Q);if(!!this.Vu.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vu.
Q))A._GetAutoObject(C.AutoActions).J(this.Vu.Q);if(!!this.AaS.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaS.Q))A._GetAutoObject(C.AutoActions).J(this.AaS.Q
);A._GetAutoObject(C.AutoActions).Ci();},Bgl:function(G){if(this.BAj()===true){this.
AA_();this.AaG(this);}else A._GetAutoObject(A.Device.Device).A3(27,true,A.jV,0,null
);},BAj:function(){return(!!this.XP.C6(this.XP.Q)||!!this.Vt.C6(this.Vt.Q))||!!this.
Vu.C6(this.Vu.Q);},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.
Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},MS:function(G){var B;this.
Y.Vz(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true
,null,null);},BBq:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XP.AtC(this);this.Vt.AtC(this);this.Vu.AtC(this);this.AaS.AtC(this);}
,_Init:function(aArg){C.Fs._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.AaT._Init.call(this.RO={I:this},0);C.AaT._Init.call(this.Tv={I:this},0);C.
AaT._Init.call(this.Tw={I:this},0);C.AaT._Init.call(this.Tx={I:this},0);C.Au$._Init.
call(this.AdP={I:this},0);C.AutoAction._Init.call(this.XP={I:this},0);C.AutoAction.
_Init.call(this.Vt={I:this},0);C.AutoAction._Init.call(this.Vu={I:this},0);C.AutoAction.
_Init.call(this.AaS={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AL3;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.Ty));this.Y.H(L3);this.Y.JV(1);this.
RO.H(Ah3);this.RO.Ar(true);this.RO.Aj(true);this.RO.T(A._GetAutoObject(A.Device.
Helper).MG(A.aaR(A.acf.Ajj),O8,AH_));this.Tv.H(U1);this.Tv.Ar(true);this.Tv.Aj(true
);this.Tv.T(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.Ajj),O8,AH$));this.
Tw.H(Aag);this.Tw.Ar(true);this.Tw.Aj(true);this.Tw.T(A._GetAutoObject(A.Device.
Helper).MG(A.aaR(A.acf.Ajj),O8,AIa));this.Tx.H(Ali);this.Tx.Ar(true);this.Tx.Aj(
true);this.Tx.T(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.Ajj),O8,AIb));this.
AdP.H(Ayt);this.AdP.Aj(true);this.AdP.T(A.aaR(A.acf.A$n));this.Vt.Index=1;this.Vu.
Index=2;this.AaS.Index=3;this.Ay.H(It);this.J(this.Y,0);this.J(this.RO,0);this.J(
this.Tv,0);this.J(this.Tw,0);this.J(this.Tx,0);this.J(this.AdP,0);this.J(this.Ay
,0);this.Y.Em=[this,this.Fk];this.RO.Zu(A.aaL(A.fl.H2));this.RO.Zv(A.aaL(A.fl.H2
));this.RO.Au([B=this.XP,B.B_,B.Cb]);this.RO.CK(this.XP);this.Tv.Zu(A.aaL(A.fl.H2
));this.Tv.Zv(A.aaL(A.fl.H2));this.Tv.Au([B=this.Vt,B.B_,B.Cb]);this.Tv.CK(this.
Vt);this.Tw.Zu(A.aaL(A.fl.H2));this.Tw.Zv(A.aaL(A.fl.H2));this.Tw.Au([B=this.Vu,
B.B_,B.Cb]);this.Tw.CK(this.Vu);this.Tx.Zu(A.aaL(A.fl.H2));this.Tx.Zv(A.aaL(A.fl.
H2));this.Tx.Au([B=this.AaS,B.B_,B.Cb]);this.Tx.CK(this.AaS);this.AdP.AR=[this,this.
BBq];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Y._Done();this.
RO._Done();this.Tv._Done();this.Tw._Done();this.Tx._Done();this.AdP._Done();this.
XP._Done();this.Vt._Done();this.Vu._Done();this.AaS._Done();this.Ay._Done();C.Fs.
_Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.Y._ReInit();this.
RO._ReInit();this.Tv._ReInit();this.Tw._ReInit();this.Tx._ReInit();this.AdP._ReInit(
);this.XP._ReInit();this.Vt._ReInit();this.Vu._ReInit();this.AaS._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Ty));this.RO.T(A._GetAutoObject(A.Device.Helper
).MG(A.aaR(A.acf.Ajj),O8,AH_));this.Tv.T(A._GetAutoObject(A.Device.Helper).MG(A.
aaR(A.acf.Ajj),O8,AH$));this.Tw.T(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.
Ajj),O8,AIa));this.Tx.T(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.Ajj),O8
,AIb));this.AdP.T(A.aaR(A.acf.A$n));},_Mark:function(D){var B;C.Fs._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Tx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={Ca:
A.abi(16,0,null),Du:function(){return 16;},C6:function(aIndex){if(aIndex>=16)return-
1;return this.Ca.Get(aIndex);},DZ:function(A7){var O=0;while(O<16){if(this.Ca.Get(
O)===A7)return O;O=O+1;}return-1;},H4:function(){var O=0;var max=-1;while(O<16){
if(this.Ca.Get(O)>max)max=this.Ca.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Ca=[]).__proto__=C.Cm.Ca;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={Ib:null,Ac9:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AtC],this.Ac9,0);A.pe([this,this.
AtC],this);},Du:function(){return this.Ib.M$();},C6:function(aIndex){if(aIndex>=
this.Du())return-1;return this.Ib.OG(aIndex);},Gl:function(aIndex){return this.ActionToString.
BS(this.C6(aIndex));},DZ:function(A7){var O=0;while(O<this.Du()){if(this.Ib.OG(O
)===A7)return O;O=O+1;}return-1;},H4:function(){var O=0;var max=-1;while(O<this.
Du()){if(this.Ib.OG(O)>max)max=this.Ib.OG(O);O=O+1;}return max;},AtC:function(G){
this.Q=this.Ac9.OG(this.Index);A.abo([this,this.B_,this.Cb],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ib=A._GetAutoObject(C.AuV);this.Ac9=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ib)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL9={Atz:0,Init:function(aArg
){var B;A.zX([this,this.BeR],[B=A._GetAutoObject(A.Device.Device),B.A8u,B.Bbd],0
);A.zX([this,this.BeO],[B=A._GetAutoObject(A.Device.Device),B.ASw,B.A0k],0);A.pe([
this,this.BeR],this);A.pe([this,this.BeO],this);},Clear:function(){C.Vy.Clear.call(
this);this.Atz=0;},Ci:function(){A._GetAutoObject(A.Device.Device).ArD(this.Atz);
A._GetAutoObject(A.Device.Device).ArE(this.toString());},BeR:function(G){this.Atz=
A._GetAutoObject(A.Device.Device).Pn;A.we(this,0);},BeO:function(G){this.E3(A._GetAutoObject(
A.Device.Device).AuH);A.we(this,0);},NY:function(Eh){if((this.Atz&(((B=Eh)<0)?B+
0x100000000:B))===(((B=Eh)<0)?B+0x100000000:B))return true;return false;},AUJ:function(
Eh){this.Atz=this.Atz|(((B=Eh)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vy._Init.
call(this,aArg);this.__proto__=C.AL9;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pn={_Init:function(){C.AL9._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL_={Vw:null,Ay:null,Y:null,JR:null,CP:function(
){this.AiL(this);},Init:function(aArg){A.zV([this,this.AiL],this.Vw,0);A.pe([this
,this.AiL],this);},DE:function(G){C.Fs.DE.call(this,G);this.MS(this);},Ln:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.Ew];this.BP.Cf=[
this,this.A3n];this.BP.B$=[this,this.A3S];this.BP.C2(A.aaL(A.ach.Arc));this.BP.Cw(
A.aaL(A.ach.Aq6));this.BP.C1(A.aaL(A.ach.YA));}return this.BP;},Ew:function(G){if(
this.By$()>0){this.AA_();this.AaG(this);}else A._GetAutoObject(A.Device.Device).
A3(28,true,A.jV,0,null);},AiL:function(G){this.Ao3();var O;for(O=0;O<this.Vw.M$(
);O=O+1){var Tg=A._GetAutoObject(C.Pn).OG(O);this.A1s(Tg);}this.J(this.JR,0);A.aaS([
this,this.MS],this);},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]
);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},MS:function(G){var
B;this.Y.Vz(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.
AV,true,null,null);},A1s:function(Ha){var Aza=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Si,0);Aa.T(Aza.BS(Ha));Aa.Aj(true);Aa.G6=Ha;Aa.A_i(this.
Vw.NY(Ha));this.J(Aa,0);this.ZF(Aa);},Ao3:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HP(
AdM);}},AA_:function(){var B;this.Vw.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JR)){var Aa=(C.Si.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vw.J(Aa.G6);if(Aa.ASH())this.Vw.AUJ(Aa.G6);}else A.ab5(
"%s",Ayu);}X=X.Ah;}this.Vw.Ci();},By$:function(){var B;var A4n=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JR)){var
Aa=(C.Si.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASH())A4n=A4n+1;}else A.ab5("%s"
,Ayu);}X=X.Ah;}return A4n;},A3n:function(G){var B;var Aa=(C.Si.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAp=(C.Si.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAp){this.
AhE(AAp,Aa);A.pe([this,this.MS],this);}}},A3S:function(G){var B;var Aa=(C.Si.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAW=(C.Si.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAW
){this.AhE(Aa,AAW);A.pe([this,this.MS],this);}}},AqJ:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiL],this);},_Init:function(
aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au$._Init.call(this.JR={I:this},0);this.__proto__=C.AL_;
this.H(Qc);this.Text.R(A.aaR(A.acf.AEj));this.Ay.H(It);this.Y.H(L3);this.Y.JV(1);
this.JR.H(AIc);this.JR.Aj(true);this.JR.T(A.aaR(A.acf.AqJ));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JR,0);this.Y.Em=[this,this.Fk];this.JR.AR=[this,this.AqJ
];this.Vw=A._GetAutoObject(C.Pn);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Ay._Done();this.Y._Done();this.JR._Done();C.Fs._Done.call(this);},_ReInit:
function(){C.Fs._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JR._ReInit(
);this.Text.R(A.aaR(A.acf.AEj));this.JR.T(A.aaR(A.acf.AqJ));this.CP();},_Mark:function(
D){var B;C.Fs._Mark.call(this,D);if((B=this.Vw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Si={G6:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hn(10);},Bl:function(aSize){C.Uc.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mo.M[0]));},Ai:function(Ae){var B;C.Uc.Ai.call(this,Ae);var Hf=((Ae&0x10
)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.
Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.L(FS);this.V.L(A.
jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);
}this.LI=Hf;this.KH=Fw;this.Qv=GE;},I1:function(G){this.A3Q(this);},A3Q:function(
G){this.AE7(!this.AmD);},A_i:function(E){this.AE7(E);},ASH:function(){return this.
AmD;},_Init:function(aArg){C.Uc._Init.call(this,aArg);this.__proto__=C.Si;this.Mo.
H(AX1);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vy={CB:0,
Ib:A.abi(17,0,null),OG:function(HA){return this.Ib.Get(HA);},M$:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ib.Set(O,0);this.CB=0;},J:function(
Eh){if(this.CB>=17)A.ab5("%s",AId);else{this.Ib.Set(this.CB,Eh);this.CB=this.CB+
1;}},Ci:function(){},E3:function(AcX){var AJn=AcX.indexOf(String.fromCharCode(0x2C
),0);var A1Q=A.jV;var O=0;this.CB=0;while(O<17)if(AcX===A.jV){this.Ib.Set(O,0);O++;
}else{if(AJn===-1){A1Q=AcX;AcX=A.jV;}else{A1Q=A.abV(AcX,AJn);AcX=A.ab1(AcX,0,AJn+
1);}var Tg=A.abZ(A1Q,0,10)|0;if(this.ADY(Tg)){this.Ib.Set(this.CB,Tg);this.CB=this.
CB+1;O++;}AJn=AcX.indexOf(String.fromCharCode(0x2C),0);}if(AcX!==A.jV)A.ab5("%s"
,AX2);},toString:function(){var A24=(((B=this.Ib.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A24=(A24+AIe)+(((B=this.Ib.Get(O))<0)?B+0x100000000:
B).toFixed();return A24;},Axy:function(HA,Eh){if(HA>=this.CB){A.ab5("%s",((((AX3+
HA.toFixed())+AX4)+this.CB.toFixed())+AX5)+AX6);return;}this.Ib.Set(HA,Eh);},Contains:
function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(this.Ib.Get(O)===Eh)return true;return false;
},ADY:function(Eh){return true;},DZ:function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(
this.Ib.Get(O)===Eh)return O;return-1;},_Init:function(aArg){(this.Ib=[]).__proto__=
C.Vy.Ib;this.__proto__=C.Vy;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AMQ={Init:function(aArg){var B;A.zX([this,this.Be1],[B=A._GetAutoObject(A.Device.
Device),B.A8F,B.Bbl],0);A.pe([this,this.Be1],this);},Ci:function(){A._GetAutoObject(
A.Device.Device).Akv(this.toString());},ADY:function(Eh){switch(Eh){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Be1:function(
G){this.E3(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.Vy._Init.call(this,aArg);this.__proto__=C.AMQ;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AMQ._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Wo={Vv:null,Ky:null,A7r:A.jV,Action:0,A43:false,A__:false,A$S:false,Bl:function(
aSize){C.Fo.Bl.call(this,aSize);this.Q3.H(this.Ms.M);this.OF.H(this.Q3.M);},Ai:function(
Ae){C.Fo.Ai.call(this,Ae);if(!this.LI){this.Ky.T0.L(A.jb.Am4);this.Ky.QL.Z(true);
this.Ky.QL.L(A.jb.ARa);}else if(this.Qv){this.Ky.T0.L(A.jb.Bm);this.Ky.QL.Z(false
);}else if(this.KH){this.Ky.T0.L(A.jb.Bm);this.Ky.QL.Z(false);}else{this.Ky.T0.L(
A.jb.Text);this.Ky.QL.Z(true);this.Ky.QL.L(A.jb.CT);}},Bl$:function(E){if(this.Action===
E)return;this.Action=E;},Bng:function(E){if(this.A7r===E)return;this.A7r=E;this.
Vv.Text.R(E);},ATN:function(E){if(this.A$S===E)return;this.A$S=E;this.Ky.Bn3(!this.
Ky.AU9);},AFG:function(E){if(this.A__===E)return;this.A__=E;this.Ky.Z(!this.Ky.Fq(
));},A9K:function(E){if(this.A43===E)return;this.A43=E;this.Vv.Z(E);},_Init:function(
aArg){C.Fo._Init.call(this,aArg);C.Vv._Init.call(this.Vv={I:this},0);C.Ky._Init.
call(this.Ky={I:this},0);this.__proto__=C.Wo;this.H(AX7);this.Background.H(AX8);
this.G_.Ar(false);this.G_.Z(false);this.Vv.H(AX9);this.Vv.Z(false);this.Ky.H(AX_
);this.Ky.Z(false);this.J(this.Vv,0);this.J(this.Ky,0);this.Ms.Ax(A.aaL(A.ach.ANm
));},_Done:function(){this.__proto__=C.Fo;this.Vv._Done();this.Ky._Done();C.Fo._Done.
call(this);},_ReInit:function(){C.Fo._ReInit.call(this);this.Vv._ReInit();this.Ky.
_ReInit();},_Mark:function(D){var B;C.Fo._Mark.call(this,D);if((B=this.Vv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.Vv={AL:null,Text:null,BU:null,Init:function(
aArg){this.Text.H(this.M);this.BU.H(this.M);this.AL.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BU._Init.call(this.BU={I:this},0);this.__proto__=
C.Vv;this.AL.H(AX$);this.AL.L(A.jb.BjR);this.H(AYa);this.Text.H(AYb);this.Text.L(
A.jb.Text);this.BU.H(AYc);this.BU.Nm(1);this.BU.L(A.jb.Text);this.J(this.AL,0);this.
J(this.Text,0);this.J(this.BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AL._Done();this.Text._Done();this.BU._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AL._ReInit();this.Text._ReInit();this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.Ky={QL:null
,T0:null,AU9:false,Bn3:function(E){if(this.AU9===E)return;this.AU9=E;if(E){this.
T0.Ax(A.aaL(A.ach.ACB));this.QL.Ax(A.aaL(A.ach.ACB));}else{this.T0.Ax(A.aaL(A.ach.
AqD));this.QL.Ax(A.aaL(A.ach.AqD));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QL={I:this},0);A.acg.Ap._Init.call(this.T0={I:this
},0);this.__proto__=C.Ky;this.H(Ayv);this.QL.H(Ayv);this.QL.Cv(1);this.T0.H(Ayv);
this.T0.Cv(0);this.J(this.QL,0);this.J(this.T0,0);this.QL.Ax(A.aaL(A.ach.AqD));this.
T0.Ax(A.aaL(A.ach.AqD));},_Done:function(){this.__proto__=A.Core.P;this.QL._Done(
);this.T0._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QL._ReInit();this.T0._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T0).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASa={
Ge:null,Cc:null,Dp:null,Di:null,Kt:null,Zl:10,Aq3:0,AEu:0,ASo:0,Ay$:false,LV:false
,Bc4:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Lh(
))A._GetAutoObject(A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).
An.HK().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(
A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAD],this.
Da.Q,0);A.zX([this,this.BA$],this.Dp.Q,0);A.zX([this,this.ABt],this.Di.Q,0);A.zX([
this,this.ABt],this.Di.HH.Q,0);A.zX([this,this.ABt],[this,this.ASO,this.AFE],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A9C,B.BbP],0);A.zX([this
,this.Bfz],this.Cc.Q,0);A.pe([this,this.AAD],this);A.pe([this,this.GH],this);A.pe([
this,this.ABt],this);A.pe([this,this.Bfz],this);},CC:function(G){if(!this.Ay$){this.
Ay$=true;A.pe([this,this.AcT],this);}else C.HZ.CC.call(this,G);},Agh:function(G){
this.ASo=this.Zl;this.Bda(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.E6();A._GetAutoObject(C.A8).FB();},Auo:function(){this.N.CR(A.jV);this.N.C2(
A.aaL(A.ach.ADH));this.N.B$=[this,this.AyV];},AAy:function(G){A._GetAutoObject(C.
A8).Cd(55);},AFE:function(E){if(this.Zl===E)return;this.Zl=E;A.abo([this,this.ASO
,this.AFE],0);},Bda:function(G){var F;if(!this.Zl||(this.Bc4===true)){A._GetAutoObject(
A.Device.Device).A3(24,false,CQ,0,null);if(this.AEu===1)A._GetAutoObject(A.Device.
Device).A3(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A3(23,
true,this.AEu.toFixed(),2000,null);this.Ew(this);return;}this.Ge.Gr();this.Ge.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Ge.N2(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Ge.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Ge.JW(A._GetAutoObject(A.Device.Helper).W.Gender);this.Ge.Nj(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Ge.PW(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Ge.SK(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alt=A._GetAutoObject(
A.Device.Helper).A1K(this.Ge,(F=this.Di.H0.Hu,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alt)this.Ai1();else{A._GetAutoObject(A.Device.Helper).AKn(
this.Ge,Alt,(F=this.Di.H0.Hu,F[1].call(F[0])),this.Zl-1,[this,this.ApH]);A._GetAutoObject(
A.Device.Device).A3(24,false,CQ,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am6())this.C_.Z(true);else this.C_.Z(false);if(this.LV){this.Dp.
Z(false);this.Cc.T(A.aaR(A.acf.ACI));this.Cc.AE9(A.aaL(A.ach.Afe));}else{this.Dp.
Z(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.AE9(null);}if((this.Y.Bjq(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JJ(this.Y.TQ(this.AV,0x1));this.Am();
},ATi:function(E){if(this.Aq3===E)return;this.Aq3=E;A.abo([this,this.A8S,this.ATi
],0);},ABt:function(G){var F;var AJ$=(F=this.Di.Q,F[1].call(F[0]));var AAg=-1;switch((
F=this.Di.H0.Hu,F[1].call(F[0]))){case 0:AAg=AJ$+((F=A._GetAutoObject(A.Device.Helper
).BdI(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zl-1));break;case 1:AAg=(AJ$+this.
Zl)-1;break;case 3:case 2:case 5:case 4:switch(this.Di.HH.AC.Q){case 0:AAg=(AJ$+
this.Zl)-1;break;case 1:AAg=(AJ$-this.Zl)+1;break;default:throw new Error(AYd+this.
Di.HH.AC.Q.toFixed());}break;default:throw new Error(AYe+this.Di.HH.AC.Q.toFixed(
));}this.ATi(AAg);},BA$:function(G){A.pe([this,this.GH],this);A.pe([this,this.At9
],this);},AAD:function(G){A._GetAutoObject(A.Device.Helper).AVG(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LV);A.pe([this,this.ABt],this);},ApH:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.ApB();else switch((F=this.Di.H0.Hu,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JJ(this.Di);break;case 0:this.JJ(this.Dp
);break;case 1:this.JJ(this.Cc);break;default:throw new Error(Ayw+(F=this.Di.H0.
Hu,F[1].call(F[0])).toFixed());}break;case 25:this.JJ(this.Cc);break;case 47:if(
As.PopupState===7)this.ApB();else{this.JJ(this.Di);this.JJ(this.Cc);}break;case 43:{
this.JJ(this.Di);this.JJ(this.Dp);}break;case 42:{this.JJ(this.Di);this.JJ(this.
Cc);}break;case 41:break;default:A.ab5("%s%e",Ata,As.Id);}},Ai1:function(){this.
Ge.Ci(A._GetAutoObject(A.Device.Device).An);this.AEu=this.AEu+1;if(A._GetAutoObject(
A.Device.Helper).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh()){A._GetAutoObject(
A.Device.Device).A3(24,false,U2,0,null);A._GetAutoObject(A.Device.Device).A3(50,
true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),0,null);}else{var L9=A.
_GetAutoObject(A.Device.Device).An.LT(0,this.Ge.Id);A._GetAutoObject(A.Device.Device
).SR(L9);var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(this.Ge.
Id);B1.OnSetBodyWeight(this.KK);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApB();},ApB:function(){var B;var F,Ct;if(!!(F=this.Cc.
Q,F[1].call(F[0]))){(F=this.Cc.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LV)(
Ct=this.Dp.Q,Ct[2].call(Ct[0],(F=this.Cc.Q,F[1].call(F[0]))));}if(!this.LV)(Ct=this.
Dp.Q,Ct[2].call(Ct[0],A._GetAutoObject(A.Device.Helper).A$_(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjO(),this.Dp.AjQ())));var IY=null;switch((F=this.Di.H0.Hu,F[1].call(
F[0]))){case 3:IY=[B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyN];break;case 2:
IY=[B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyO];break;case 4:case 5:IY=[B=A.
_GetAutoObject(A.Device.Device),B.Ant,B.Aoz];break;default:;}if(!!IY){switch((F=
this.Di.Kn.VU,F[1].call(F[0]))){case 1:IY[2].call(IY[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IY[2].call(IY[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Di.Q,F[2].call(F[0],IY[1].call(IY[0])));
}var XL=100-((this.Zl/this.ASo)*100);A._GetAutoObject(A.Device.Device).A3(24,true
,(((this.ASo.toFixed()+Atb)+(XL|0).toFixed())+Atb)+(F=this.Di.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBj]);this.AFE(this.Zl-1);A.aaS([this,this.Bda],null);},BBj:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.Bc4=true;},ApI:function(G){var F;C.HZ.ApI.call(this,G);var AoW=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoW=A._GetAutoObject(A.Device.
Device).AdT;break;case 1:AoW=730;break;default:A.ab5("%s%e",Alf,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmJ(AoW));(F=this.C_.Q,F[2].call(
F[0],this.C_.AnY));switch(this.BZ.AC.Q){case 0:{this.Kt.Jc(A.aaR(A.acf.ANh));this.
Kt.IR(A.aaR(A.acf.ANi));}break;case 1:{this.Kt.Jc(A.aaR(A.acf.Bh9));this.Kt.IR(A.
aaR(A.acf.Bh_));}break;case 2:{this.Kt.Jc(A.aaR(A.acf.Bke));this.Kt.IR(A.aaR(A.acf.
Bkf));}break;default:throw new Error(Alf);}},Ae4:function(E){if(this.LV===E)return;
this.LV=E;A.abo([this,this.Awk,this.Ae4],0);},At9:function(G){var F,Ct,Tc;this.Ae4(((
F=this.Cc.Q,F[1].call(F[0]))===(Ct=this.Dp.Q,Ct[1].call(Ct[0])))&&!!(Tc=this.Cc.
Q,Tc[1].call(Tc[0])));A.pe([this,this.GH],this);},Bfz:function(G){A.pe([this,this.
At9],this);},ASO:function(){return this.Zl;},A8S:function(){return this.Aq3;},Awk:
function(){return this.LV;},_Init:function(aArg){C.HZ._Init.call(this,aArg);C.Av4.
_Init.call(this.Cc={I:this},0);C.Rb._Init.call(this.Dp={I:this},0);C.AGL._Init.call(
this.Di={I:this},0);C.AUV._Init.call(this.Kt={I:this},0);this.__proto__=C.ASa;var
B;this.Dr(C.ADk);this.Cc.H(Aoo);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.
Cc.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.
aaR(A.acf.Akn));this.Dp.H(AYf);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Ui));this.
Dp.Ar2(false);this.Di.H(AYg);this.Di.Aj(true);this.Di.T(A.aaR(A.acf.A7e));this.Di.
Bx(0);this.Kt.H(AYh);this.Kt.Aj(true);this.Kt.T(A.aaR(A.acf.A8l));this.Kt.Ga(1);
this.Kt.EV(500);this.Kt.IR(A.aaR(A.acf.ANi));this.Kt.Jc(A.aaR(A.acf.ANh));this.Kt.
A9$(A.aaR(A.acf.Aq3)+A.aaR(A.acf.Colon));this.J(this.Cc,0);this.J(this.Dp,0);this.
J(this.Di,0);this.J(this.Kt,0);this.Ge=A._NewObject(A.Device.Animal,0);this.Cc.AR=[
this,this.AcT];this.Cc.LZ([this,this.AcT]);this.Cc.L2(A.aaL(A.ach.Afe));this.Cc.
Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArA,B.PW]);this.Cc.OO([B=A._GetAutoObject(
A.Device.Device),B.Uk,B.U4]);this.Cc.PU([B=A._GetAutoObject(A.Device.Device),B.Ul
,B.U5]);this.Cc.Um([B=A._GetAutoObject(A.Device.Device),B.Anq,B.Aoy]);this.Cc.Ae4([
this,this.Awk,this.Ae4]);this.Dp.Gs([this,this.D_,this.GS]);this.Dp.LZ([this,this.
AcT]);this.Dp.L2(A.aaL(A.ach.Afe));this.Dp.Uo([B=this.Gender.Animal,B.WC,B.JW]);
this.Dp.OO([B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4]);this.Dp.PU([B=A._GetAutoObject(
A.Device.Device),B.Ul,B.U5]);this.Dp.Um([B=A._GetAutoObject(A.Device.Device),B.Anq
,B.Aoy]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Anu,B.Nj]);this.Dp.
Anw([B=this.AnimalType.Animal,B.PT,B.EC]);this.Di.Gs([this,this.D_,this.GS]);this.
Di.LZ([B=this.Di,B.FV]);this.Di.L2(A.aaL(A.ach.Edit));this.Di.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArB,B.SK]);this.Di.A9L(A._GetAutoObject(A.Device.Helper).W);
this.Kt.Au([this,this.ASO,this.AFE]);this.Kt.BmE([this,this.A8S,this.ATi]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HZ;this.Cc._Done();this.Dp._Done(
);this.Di._Done();this.Kt._Done();C.HZ._Done.call(this);},_ReInit:function(){C.HZ.
_ReInit.call(this);this.Cc._ReInit();this.Dp._ReInit();this.Di._ReInit();this.Kt.
_ReInit();this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.aaR(A.acf.Akn));this.Dp.T(A.aaR(A.acf.
Ui));this.Di.T(A.aaR(A.acf.A7e));this.Kt.T(A.aaR(A.acf.A8l));this.Kt.IR(A.aaR(A.
acf.ANi));this.Kt.Jc(A.aaR(A.acf.ANh));this.Kt.A9$(A.aaR(A.acf.Aq3)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HZ._Mark.call(this,D);if((B=this.Ge)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Di)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUn={BW:null,RatingMode:null,Ln:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.B$=null;this.BP.Cf=null;this.BP.CE=[this,this.AaG];this.BP.CR(A.jV
);this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.YA));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUn;var B;this.
H(Qc);this.BW.H(As_);this.BW.T(A.aaR(A.acf.A$2));this.J(this.BW,0);this.BW.Au([B=
this.RatingMode,B.B_,B.Cb]);this.BW.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$2));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bf$],[B=A._GetAutoObject(A.Device.Device),B.ASS,B.A0v],0);A.pe([this,this.Bf$],this
);},Du:function(){return 2;},Gl:function(aIndex){return this.RatingModeToString.
BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Aw6(E);},Bf$:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Ca.Set(0,0);this.Ca.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANB={WU:
function(G){C.Amv.WU.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqY()){
A._GetAutoObject(A.Device.Helper).W.AkC(false);A._GetAutoObject(A.Device.Helper).
W.Ci(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amv._Init.call(
this,aArg);this.__proto__=C.ANB;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hi={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hi;},_className:"Application::BaseItem"
};C.AVV={BW:null,WeightRecordingMode:null,Ln:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.B$=null;this.BP.Cf=null;this.BP.CE=[this,this.AaG];this.BP.CR(A.jV
);this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.YA));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVV;var B;this.H(Qc);this.BW.H(As_);this.BW.T(A.aaR(A.acf.AsU));this.BW.EV(1);
this.J(this.BW,0);this.BW.Au([B=this.WeightRecordingMode,B.B_,B.Cb]);this.BW.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.T(A.aaR(A.acf.AsU));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Du:function(){return 2;},Gl:function(aIndex){return this.
WeightRecordingModeToString.BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Axg(E);},Init:function(aArg){var B;A.zX([this
,this.Bhf],[B=A._GetAutoObject(A.Device.Device),B.A9B,B.BbO],0);A.pe([this,this.
Bhf],this);},Bhf:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Ca.Set(0,0);this.Ca.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa3={BooleanToAutoOnOff:null,Gl:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BS(aIndex);},_Init:function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa3;},_Done:function(
){this.__proto__=C.Gd;this.BooleanToAutoOnOff._Done();C.Gd._Done.call(this);},_ReInit:
function(){C.Gd._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gd._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxW={A7s:function(){var B;this.
Axz(1);this.Jv(0,3);this.VH(0,0,(B=this.M)[3]-B[1]);this.A46(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A46(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VP(0);},_Init:
function(aArg){C.ABG._Init.call(this,aArg);this.__proto__=C.AxW;},_className:"Application::Triangle"
};C.AT0={Y:null,Init:function(aArg){this.Byw(this);},Byv:function(Qe){var Aa=A._NewObject(
C.ANI,0);Aa.H(BD);Aa.T(Qe);Aa.Aj(true);Aa.Ar(false);Aa.Bi(true);this.J(Aa,0);this.
AtB(this);},AtB:function(G){var B;var AlB=1;var A2V=0;var X=this.Y.Ah;var Cy=null;
var K6=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OX.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALh=(B=Cy.V.B6.A67(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.Mq.isPrototypeOf(X)?X:null))ALh=ALh+20;if(A2V<ALh)A2V=ALh;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(AlB*28)));AlB=AlB+1;}else{K6=(A.acg.C7.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K6){var Dh=((B=this.M)[3]-B[1])-((AlB-1)*28);K6.DM([this.
M[0],K6.Et[1]]);K6.DM([K6.Et[0],Dh]);K6.DC([this.M[0]+120,K6.ED[1]]);K6.DC([K6.ED[
0],Dh]);}}X=X.Ah;}this.BB3(A2V,28);},BB3:function(aWidth,BxF){var B;var X=this.Y.
Ah;var Cy=null;var K6=null;aWidth=aWidth+20;if(aWidth>(C.Asx[0]-10))aWidth=C.Asx[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OX.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A6(0x14);Cy.V.Text.Hn(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,BxF));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K6=(
A.acg.C7.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K6){K6.DM([this.M[
2]-aWidth,K6.Et[1]]);K6.DC([this.M[2],K6.ED[1]]);}}X=X.Ah;}},Byw:function(G){var
Aa=A._GetAutoObject(C.BR).AqN;while(!!Aa){if(!!(C.Axn.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axn.isPrototypeOf(Aa)?Aa:null);this.Byu(EF.DK,EF.AR,EF.Bw,EF.ARi);}else
if(!!(C.Axp.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axp.isPrototypeOf(Aa)?Aa:null);
this.ByB(EF.DK,EF.AR,EF.Bw,EF.WA,EF.WW);}else if(!!(C.ZB.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.ZB.isPrototypeOf(Aa)?Aa:null);this.Byt(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkI.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkI.isPrototypeOf(Aa)?Aa:null);this.
Byv(EF.DK);}else if(!!(C.AGc.isPrototypeOf(Aa)?Aa:null))this.ByC();Aa=Aa.Mw;}A._GetAutoObject(
C.BR).Clear();A.pe([this,this.AtB],this);},Byt:function(Qe,Ac4,Ah7){var Aa=A._NewObject(
C.Mq,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(Ah7);Aa.Bi(true);this.J(Aa
,0);this.AtB(this);},ByC:function(){var K6=A._NewObject(A.acg.C7,0);K6.L(A.jb.Bm
);K6.Aj(true);K6.Nm(3);this.J(K6,0);this.AtB(this);},Byu:function(Qe,Ac4,Ah7,A05
){var Aa=A._NewObject(C.AmH,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(Ah7
);Aa.Bi(true);Aa.Au(A05);this.J(Aa,0);this.AtB(this);},ByB:function(Qe,Ac4,Ah7,A3a
,Agr){var Aa=A._NewObject(C.ANH,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(
Ah7);Aa.Bi(true);Aa.BnE(A3a);Aa.AFS(Agr);this.J(Aa,0);this.AtB(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AT0;this.H(Qc);this.Y.H(Qc);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afj={_Init:
function(){A.acl.Afj._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_6={AqN:null,Ahn:null,Mj:function(Qe){var EF=A._NewObject(
C.AkI,0);EF.DK=Qe;this.J(EF);},Clear:function(){this.AqN=null;this.Ahn=null;},Fz:
function(){var K6=A._NewObject(C.AGc,0);this.J(K6);},J:function(Bcq){if(!this.AqN
){this.AqN=Bcq;this.Ahn=this.AqN;}else{this.Ahn.Mw=Bcq;this.Ahn=this.Ahn.Mw;}},Tz:
function(Qe,Ac4){var EF=A._NewObject(C.ZB,0);EF.DK=Qe;EF.AR=Ac4;this.J(EF);},Bho:
function(Qe,Ac4,A05){var EF=A._NewObject(C.Axn,0);EF.DK=Qe;EF.AR=Ac4;EF.ARi=A05;
this.J(EF);},AaU:function(Qe){var EF=A._NewObject(C.ZB,0);EF.DK=Qe;EF.Bw=false;this.
J(EF);},ABK:function(Qe,Ac4,A3a,Agr){var EF=A._NewObject(C.Axp,0);EF.DK=Qe;EF.AR=
Ac4;EF.WA=A3a;EF.WW=Agr;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_6;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BR={_Init:function(){C.A_6._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axo={Mw:null,_Init:function(aArg){this.__proto__=
C.Axo;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Mw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOE={Amt:null,ArF:function(E){if(this.Amt===
E)return;if(!!this.Ab)this.Ab.ZF(this);if(!!this.Amt)this.AqF(this.Amt,A._GetAutoObject(
C.AsB),null,null,null,null,false);this.Amt=E;if(!!this.Amt)this.AkM(this.Amt,A._GetAutoObject(
C.AsB),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOE;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amt)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WJ={_Init:function(){C.AOE._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N4={Init:function(aArg){var C0=A._NewObject(C.AT1,0);C0.H(this.M);this.AkM(C0,A.
_GetAutoObject(C.AnW),null,A._GetAutoObject(C.AnW),A._GetAutoObject(C.AnW),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N4;this.H(Qc);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsB={_Init:function(){C.AUX._Init.call(this,0);this.ACG=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AT1={AL:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.AT1;this.H(AIf);this.C3(0);this.AL.A0(0x3F);this.AL.H(AIf);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.P;this.AL.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUW={Se:function(){var B;var Ao=(A.acl.Afb.isPrototypeOf(B=A.acl.Aen.Se.call(this
))?B:null);if(!Ao)throw new Error(As7);Ao.Cp.Cx=255;Ao.Cp.B2=0;return Ao;},Sd:function(
){var B;var Ao=(A.acl.Axm.isPrototypeOf(B=A.acl.Aen.Sd.call(this))?B:null);if(!Ao
)throw new Error(As7);Ao.E0.Cx=0;Ao.E0.B2=255;Ao.Dt=true;return Ao;},_Init:function(
aArg){A.acl.Aen._Init.call(this,aArg);this.__proto__=C.AUW;},_className:"Application::ShadeOverlayTransition"
};C.AnW={_Init:function(){C.AUW._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkV={AnY:0,A2e:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Ir.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BDa=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Ak$(BDa)+CQ)+A._GetAutoObject(A.acj.DU).Af4()
);else this.BT.R(A.aaR(A.acf.Akn));}},Ke:function(G){var B;var Bhc=(this.A2e===false
)&&(this.AM<=this.Gq);if(Bhc)this.Bx(this.AnY);this.A4L(this.AM,4);if(Bhc){this.
Bx(this.AM-this.Aj5);this.A2e=true;}C.Ir.Ke.call(this,G);},J$:function(G){this.A4L(
this.AM,5);C.Ir.J$.call(this,G);},Bx:function(E){this.A4L(E,4);E=(((E+((this.Aj5
/2)|0))/this.Aj5)|0)*this.Aj5;if(!E)this.A2e=false;C.Ir.Bx.call(this,E);},Ahv:function(
E){if(this.AnY===E)return;this.AnY=E;},A4L:function(Bxn,GA){this.ATl(A._GetAutoObject(
A.acj.DU).BdM(Bxn,GA));},_Init:function(aArg){C.Ir._Init.call(this,aArg);this.__proto__=
C.AkV;this.H(KZ);this.AnY=this.Gq;this.J1(this.H5,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEA={None:0,Left:1,BE9:2,Right:3};C.Amx={Xt:
null,FE:null,Ek:null,Background:null,Ani:null,Gc:null,KO:A.jV,AEc:null,Init:function(
aArg){var B;A.zV([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A3T],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.
LO],this);A.pe([this,this.A3T],this);this.Bb(this.Ek);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},Ln:function(){if(!this.BP)this.BP=A._NewObject(
C.N,0);return this.BP;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xt);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKT();},Agg:function(G){var Aa=(C.ACc.isPrototypeOf(G)?G:null);var Hs;if(!!Aa)Hs=
Aa.Hs;else Hs=this.Gc.FN();if(Hs>=A._GetAutoObject(A.Device.Device).An.B9())return;
A._GetAutoObject(A.Device.Helper).G8(Hs);A.pe([this,this.AaG],this);},AKT:function(
){},Aga:function(G){this.Am();},A3K:function(G){if(this.Gc.FN()<(A._GetAutoObject(
A.Device.Device).An.B9()-1))this.Gc.GT(this.Gc.FN()+1);},A3L:function(G){if(this.
Gc.FN()>0)this.Gc.GT(this.Gc.FN()-1);},DJ:function(G){var Gh=A._GetAutoObject(A.
Device.Device).An.B9();var MV=this.BP;if(!MV)return;MV.C1(A.aaL(A.ach.AeA));MV.CE=[
this,this.AaG];if(Gh<=0){MV.Cw(null);MV.C2(null);MV.Cf=null;MV.B$=null;MV.WN=false;
MV.ZE=false;}else if(Gh===1){MV.Cw(null);MV.C2(A.aaL(A.ach.AeB));MV.Cf=null;MV.B$=[
this,this.Agg];MV.WN=false;MV.ZE=false;}else{MV.Cw(A.aaL(A.ach.Aq6));MV.C2(A.aaL(
A.ach.Arc));MV.Cf=[this,this.A3K];MV.B$=[this,this.A3L];MV.WN=true;MV.ZE=true;}}
,LO:function(G){this.Bgz(this);this.Xt=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKT();},Bnw:function(E){if(this.AEc===E)return;this.AEc=E;A.pe([this,this.BA8
],this);},BA8:function(G){this.Bgz(this);},Bgz:function(G){var B;if(!!this.FE)this.
HP(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(this.AEc,0))?B:null);if(!
!this.FE){this.FE.H(AYi);this.J(this.FE,0);}},A3T:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DL(1,4
))this.Gc.Dk(A.aaR(A.acf.ASi));else this.Gc.Dk(this.KO);},Dk:function(E){if(this.
KO===E)return;this.KO=E;A.pe([this,this.A3T],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Ani={I:this},0);C.Gc._Init.call(
this.Gc={I:this},0);this.__proto__=C.Amx;this.H(Qc);this.Ek.H(BD);this.Ek.A_c(A.
jb.CT);this.Ek.A_d(A.jb.Text);this.Background.H(Ff);this.Background.L(A.jb.Bpa);
this.Ani.H(AIg);this.Ani.L(A.jb.CT);this.Gc.H(AIg);this.Gc.N3(C.ACc);this.AEc=C.
APJ;this.KO=A.aaR(A.acf.Av8);this.J(this.Ek,0);this.J(this.Background,0);this.J(
this.Ani,0);this.J(this.Gc,0);this.Ek.AR=[this,this.Agg];this.Ek.Ab2(A._NewObject(
C.Yv,0));this.Gc.Zs(A._GetAutoObject(A.Device.Device).An);this.Gc.Zw([this,this.
Agg]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ek._Done(
);this.Background._Done();this.Ani._Done();this.Gc._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ek._ReInit();this.
Background._ReInit();this.Ani._ReInit();this.Gc._ReInit();this.Dk(A.aaR(A.acf.Av8
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xt)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACc={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.Df(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EC(this.AX.AmW(
Ad,14));this.DS.AE$(this.AX.I7(Ad,13));this.DS.Ae3(this.AX.H3(Ad,8));this.DS.Ur(
this.AX.H3(Ad,11));this.DS.Ae7(this.AX.H3(Ad,12));this.DS.Ae9(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.ACc;this.
H(O6);this.AP.L(A.jb.Bc);this.DS.H(AYj);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.Yv={Q:null,Init:function(aArg){var
B;this.AA4(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft]);},AEQ:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Np(FilterCriterion
);var Ai5=this.Akq();if(Ai5>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai5,false);Filter.CW(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeZ(false);},BwN:function(s){this.AEQ(
s);},AA4:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);if(!!FilterCriterion
)Filter.Np(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BG2:function(s){
this.AA4(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,this.
AcW],this);},C4:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwO(-1);return;}var Ay7=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DL(1,4))?B:null);if(!Ay7){this.AW.AwO(0);this.AW.AeZ(true);}else
this.AW.AwO(Ay7.A5);},AcW:function(s){this.C4(s);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.Yv;this.AW.AwO(0);this.AW.Dj=[this,this.BwN];this.
Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqI={BirthType:null,EaseOfDelivery:null,Cc:null,Ef:null,AbH:null,G7:null,Cn:
null,AbF:null,AM1:false,Init:function(aArg){this.AM1=A._GetAutoObject(A.Device.Helper
).W.Arf();if(this.AM1)this.AeY(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeY(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cc.
LZ([this,this.AcT]);this.Cc.L2(A.aaL(A.ach.Afe));this.Cc.AR=[this,this.AcT];}this.
Ef.Ar2(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Cc.Q,0);A.pe([this,this.GH],this);},Agh:function(G
){if(((this.Ef.Asl===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARm(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rj(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ci(
A._GetAutoObject(A.Device.Device).An);if(this.KK>0){if(this.AM1){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LT(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KK);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYk,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KK);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ci(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A8).FB();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A8).FB();},Auo:function(
){this.N.CR(A.jV);this.N.C2(A.aaL(A.ach.Am3));this.N.B$=[this,this.AyV];},AAy:function(
G){A._GetAutoObject(C.A8).Cd(32);},GH:function(G){var F;var Jo=(F=this.Ef.Q,F[1].
call(F[0]));var ABq=(F=this.Cc.Q,F[1].call(F[0]));var A4G=true;if(!!Jo&&(ABq===Jo
))A4G=false;A._GetAutoObject(A.Device.Helper).J2(this.Cc,A4G);this.Ef.Bmw(!A4G);
},_Init:function(aArg){C.HZ._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Av4._Init.
call(this.Cc={I:this},0);C.Rb._Init.call(this.Ef={I:this},0);C.Acn._Init.call(this.
AbH={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.SS._Init.call(this.Cn={I:this
},0);C.BW._Init.call(this.AbF={I:this},0);this.__proto__=C.AqI;var B;this.Cc.H(Ah2
);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArM(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.aaR(A.acf.Akn));this.Ef.H(Ah2);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Ui));this.AbH.H(AYl);this.AbH.Aj(true);this.
AbH.T(A.aaR(A.acf.GN));this.G7.H(Ah2);this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Arq
));this.Cn.H(Ah2);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFK(true);
this.AbF.H(Ah2);this.AbF.Aj(true);this.AbF.T(A.aaR(A.acf.AgK));this.J(this.Cc,-1
);this.J(this.Ef,-1);this.J(this.AbH,-1);this.J(this.G7,-1);this.J(this.Cn,-1);this.
J(this.AbF,-1);this.BirthType.L0(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
L0(A._GetAutoObject(A.Device.Helper).W);this.Cc.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArA,B.PW]);this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Nj]);this.AbH.Gs([this,this.D_,this.GS]);this.AbH.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SK]);this.G7.Au([B=this.BirthType,
B.B_,B.Cb]);this.G7.CK(this.BirthType);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.
LZ([B=this.Cn,B.FV]);this.Cn.L2(A.aaL(A.ach.Edit));this.Cn.Ab6([B=A._GetAutoObject(
A.Device.Helper).W,B.Awe,B.Q6]);this.AbF.Au([B=this.EaseOfDelivery,B.B_,B.Cb]);this.
AbF.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HZ;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cc._Done();this.Ef._Done(
);this.AbH._Done();this.G7._Done();this.Cn._Done();this.AbF._Done();C.HZ._Done.call(
this);},_ReInit:function(){C.HZ._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cc._ReInit();this.Ef._ReInit();this.AbH._ReInit();
this.G7._ReInit();this.Cn._ReInit();this.AbF._ReInit();this.Cc.T(A.aaR(A.acf.Ak6
));this.Cc.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.
Cc.ArN(A.aaR(A.acf.Akn));this.Ef.T(A.aaR(A.acf.Ui));this.AbH.T(A.aaR(A.acf.GN));
this.G7.T(A.aaR(A.acf.Arq));this.Cn.T(A.aaR(A.acf.Aeg));this.AbF.T(A.aaR(A.acf.AgK
));},_Mark:function(D){var B;C.HZ._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acn={FM:null,AW:null,A_:0,I1:function(G){C.Ds.I1.call(this,G);if(!this.A_)this.
FV(this);else this.He(this);},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hx.Z(false
);this.H5.Z(false);if(this.A_===1){this.Bb(this.AW);if(this.Hl){this.AW.FO(A.jb.
CJ);this.Background.L(A.jb.CT);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CT);this.
Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.AW.FO(A.jb.CJ);
else this.AW.FO(A.jb.CT);this.Bb(null);}},Bx:function(E){var F;var BO=this.AM;C.
Ds.Bx.call(this,E);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Uj,this.Bbp],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}break;default:this.FM.AkR((F=
this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0
);},Ex:function(EO){var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.
A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.A_=1;if(this.A_===1)this.AW.
SQ(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.ARg._Init.call(this.AW={I:this},0);this.__proto__=C.Acn;this.H(UZ);this.EV(999999
);this.V.R(Atc);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H5.Z(false);this.AW.H(AYm
);this.AW.ATt(6);this.J(this.AW,0);this.AW.Au([this,this.Uj,this.Bbp]);this.FM=A.
_NewObject(C.Aeu,0);},_Done:function(){this.__proto__=C.Ds;this.AW._Done();C.Ds.
_Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Du:function(){return 4;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuN={Y:null,QR:null,NZ:null,Ee:null,PJ:null,PF:null,PG:null,Ay:null,Gd:null,
ReasonOfLeaving:null,AhC:null,M7:0,AmL:false,ACg:true,AOx:false,Asg:false,Init:function(
aArg){A.zX([this,this.A9I],[this,this.A8_,this.ATw],0);this.Ahs(A._GetAutoObject(
A.Device.Helper).W.AhW(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9I],this);},DE:function(G){
var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;
case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al3:function(G
){A._GetAutoObject(C.A8).FB();},ApM:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M7);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmL){A._GetAutoObject(A.Device.Helper).W.Ae5(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A69(A._GetAutoObject(A.Device.Helper).Dv(),this.Asg);}A._GetAutoObject(A.Device.
Helper).W.AFJ(this.ReasonOfLeaving.C6((F=this.NZ.Q,F[1].call(F[0]))));if(this.ACg
)A._GetAutoObject(A.Device.Helper).W.PW(0);if(this.Asg)A._GetAutoObject(A.Device.
Helper).W.AwQ(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);this.A$E();},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[
1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},Ahs:function(E){
if(this.M7===E)return;this.M7=E;},Anr:function(){return this.M7;},BfB:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.A8).FB();A._GetAutoObject(A.Device.Helper
).Asr();}},A9I:function(G){switch(this.Asg){case false:this.Ee.T(A.aaR(A.acf.AVX
));break;case true:this.Ee.T(A.aaR(A.acf.Bra));break;default:;}},ATw:function(E){
if(this.Asg===E)return;this.Asg=E;},A8_:function(){return this.Asg;},A$E:function(
){A._GetAutoObject(A.Device.Device).A3(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfB]);},BmW:function(E){if(this.AOx===E)return;
this.AOx=E;},Blf:function(){return this.AOx;},Bmk:function(E){if(this.ACg===E)return;
this.ACg=E;},Bk5:function(){return this.ACg;},Bmu:function(E){if(this.AmL===E)return;
this.AmL=E;},Blb:function(){return this.AmL;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afn._Init.call(this.QR={I:this
},0);C.AsA._Init.call(this.NZ={I:this},0);C.AkV._Init.call(this.Ee={I:this},0);C.
Afn._Init.call(this.PJ={I:this},0);C.Afn._Init.call(this.PF={I:this},0);C.Afn._Init.
call(this.PG={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gd._Init.call(this.
Gd={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
AhC._Init.call(this.AhC={I:this},0);this.__proto__=C.AuN;var B;this.N.Z(true);this.
N.CR(A.aaR(A.acf.Unregister));this.Dr(C.IL);this.Y.H(Ff);this.Y.JV(1);this.QR.H(
Aag);this.QR.Aj(true);this.QR.T(A.aaR(A.acf.AmL));this.QR.Bi(true);this.QR.Zz(false
);this.QR.Ga(-1);this.QR.EV(1);this.NZ.H(U1);this.NZ.Aj(true);this.NZ.T(A.aaR(A.
acf.ReasonOfLeaving));this.NZ.Bi(true);this.NZ.Zz(false);this.Ee.H(Ah1);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVX));this.Ee.Bi(false);this.Ee.Ga(1000);this.Ee.
EV(999000);this.PJ.H(U1);this.PJ.Aj(true);this.PJ.T(A.aaR(A.acf.A5h));this.PJ.Bi(
true);this.PJ.Zz(false);this.PJ.Bx(1);this.PJ.Ga(-1);this.PJ.EV(1);this.PF.H(Aag
);this.PF.Aj(true);this.PF.T(A.aaR(A.acf.A5i));this.PF.Bi(true);this.PF.Zz(false
);this.PF.Bx(1);this.PF.Ga(-1);this.PF.EV(1);this.PG.H(U1);this.PG.Aj(true);this.
PG.T(A.aaR(A.acf.A5U));this.PG.Bi(true);this.PG.Zz(false);this.PG.Bx(1);this.PG.
Ga(-1);this.PG.EV(1);this.Ay.H(Ayo);this.Gd.Au(0);this.J(this.Y,0);this.J(this.QR
,0);this.J(this.NZ,0);this.J(this.Ee,0);this.J(this.PJ,0);this.J(this.PF,0);this.
J(this.PG,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk
];this.QR.Au([B=this.Gd,B.B_,B.Cb]);this.QR.CK(this.Gd);this.QR.AkD([this,this.Blb
,this.Bmu]);this.NZ.Gs([this,this.D_,this.GS]);this.NZ.LZ([B=this.NZ,B.FV]);this.
NZ.L2(A.aaL(A.ach.Edit));this.NZ.Au([B=this.ReasonOfLeaving,B.B_,B.Cb]);this.NZ.
CK(this.ReasonOfLeaving);this.NZ.Any(this.AhC);this.Ee.Au([this,this.Anr,this.Ahs
]);this.PJ.Au([B=this.Gd,B.B_,B.Cb]);this.PJ.CK(this.Gd);this.PJ.AkD([this,this.
Blf,this.BmW]);this.PF.Au([B=this.Gd,B.B_,B.Cb]);this.PF.CK(this.Gd);this.PF.AkD([
this,this.A8_,this.ATw]);this.PG.Au([B=this.Gd,B.B_,B.Cb]);this.PG.CK(this.Gd);this.
PG.AkD([this,this.Bk5,this.Bmk]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QR._Done();this.NZ._Done();this.Ee._Done();this.PJ._Done(
);this.PF._Done();this.PG._Done();this.Ay._Done();this.Gd._Done();this.ReasonOfLeaving.
_Done();this.AhC._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QR._ReInit();this.NZ._ReInit();this.Ee._ReInit(
);this.PJ._ReInit();this.PF._ReInit();this.PG._ReInit();this.Ay._ReInit();this.Gd.
_ReInit();this.ReasonOfLeaving._ReInit();this.AhC._ReInit();this.N.CR(A.aaR(A.acf.
Unregister));this.QR.T(A.aaR(A.acf.AmL));this.NZ.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVX));this.PJ.T(A.aaR(A.acf.A5h));this.PF.T(A.aaR(A.acf.A5i
));this.PG.T(A.aaR(A.acf.A5U));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhC)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUV={AjM:null,Py:null,Avb:AYn,Bl:function(aSize){C.Ir.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Hx.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H5.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Ir.Ai.call(this,Ae);this.Py.L(this.V.AQ);if(!!this.AjM){if((
F=this.AjM,F[1].call(F[0]))===-1)this.Py.R(this.Avb+AIh);else this.Py.R((this.Avb+
CQ)+(F=this.AjM,F[1].call(F[0])).toFixed());}else this.Py.R(this.Avb);},A3s:function(
G){this.Am();},BmE:function(E){if(A.aaZ(this.AjM,E))return;if(!!this.AjM)A.z$([this
,this.A3s],this.AjM,0);this.AjM=E;if(!!E)A.zX([this,this.A3s],E,0);if(!!E)A.pe([
this,this.A3s],this);},A9$:function(E){if(this.Avb===E)return;this.Avb=E;this.Am(
);},_Init:function(aArg){C.Ir._Init.call(this,aArg);C.CG._Init.call(this.Py={I:this
},0);this.__proto__=C.AUV;this.H(AYo);this.V.H(AYp);this.V.A6(0x12);this.Py.H(AYq
);this.Py.A6(0x12);this.Py.L(A.jb.Bm);this.J(this.Py,0);this.Py.S(A.aaL(A.fl.Af)
);this.Py.AZ(A.aaL(A.fl.Ak));this.Py.Cr(null);},_Done:function(){this.__proto__=
C.Ir;this.Py._Done();C.Ir._Done.call(this);},_ReInit:function(){C.Ir._ReInit.call(
this);this.Py._ReInit();this.Py.S(A.aaL(A.fl.Af));this.Py.AZ(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Ir._Mark.call(this,D);if((B=this.AjM)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Py)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMh={Y:null,JQ:null,Su:null,Ay:null,Aqw:2500,ANy:24,DE:function(G){var B;var
Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:
Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al3:function(G){A._GetAutoObject(
C.A8).FB();},ApM:function(G){},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1)
)[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},Bmo:function(
E){if(this.Aqw===E)return;this.Aqw=E;},Bk7:function(){return this.Aqw;},Bmp:function(
E){if(this.ANy===E)return;this.ANy=E;},Bk8:function(){return this.ANy;},BkV:function(
G){var F,Ct;this.JQ.BT.L(this.JQ.V.AQ);if(!!this.JQ.Q)this.JQ.BT.R((((String.fromCharCode(((
F=this.JQ.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Alc)+String.fromCharCode(((
Ct=this.JQ.Q,Ct[1].call(Ct[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JQ.
AHb);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ir._Init.call(this.JQ={I:this},0);C.Ir._Init.call(this.Su={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMh;this.N.Z(true);this.
Dr(C.IL);this.Y.H(Ff);this.Y.JV(1);this.JQ.H(Ah1);this.JQ.Aj(true);this.JQ.T(A.aaR(
A.acf.Aqw));this.JQ.Bi(false);this.JQ.Ga(0);this.JQ.EV(5000);this.JQ.IR(A.aaR(A.
acf.Af8));this.JQ.Jc(A.aaR(A.acf.Af8));this.JQ.ATl(100);this.Su.H(U1);this.Su.Aj(
true);this.Su.T(A.aaR(A.acf.A$e));this.Su.Bi(true);this.Su.Bx(24);this.Su.Ga(10);
this.Su.EV(33);this.Su.IR(AYr);this.Ay.H(Ayo);this.J(this.Y,0);this.J(this.JQ,0);
this.J(this.Su,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.YA));this.Y.Em=[this,this.
Fk];this.JQ.Au([this,this.Bk7,this.Bmo]);this.JQ.A_J([this,this.BkV]);this.Su.Au([
this,this.Bk8,this.Bmp]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JQ._Done();this.Su._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JQ._ReInit();this.Su._ReInit();this.
Ay._ReInit();this.JQ.T(A.aaR(A.acf.Aqw));this.JQ.IR(A.aaR(A.acf.Af8));this.JQ.Jc(
A.aaR(A.acf.Af8));this.Su.T(A.aaR(A.acf.A$e));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Ars={EaseOfDelivery:null,BirthType:null,Cc:null,Dp:null,Di:null,Cn:null,Ee:null
,G7:null,Li:null,M7:0,LV:false,Init:function(aArg){A.zX([this,this.GH],this.Cc.Q
,0);A.zX([this,this.GH],this.Dp.Q,0);A.zX([this,this.AAD],this.Da.Q,0);A.zX([this
,this.Be9],this.Cn.Dl,0);A.zX([this,this.Be3],this.C_.Q,0);A.zX([this,this.At9],
this.Cc.Q,0);A.zX([this,this.At9],this.Dp.Q,0);A.pe([this,this.AAD],this);A.pe([
this,this.GH],this);A.pe([this,this.Be9],this);A.pe([this,this.Be3],this);A.pe([
this,this.At9],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.E6();A.
_GetAutoObject(C.A8).FB();},Agh:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhI
){var AlN=A._GetAutoObject(A.Device.Helper).AhI.AOV();A._GetAutoObject(A.Device.
Helper).W.Ab3(AlN);A._GetAutoObject(A.Device.Helper).W.AnD(AlN);}var Alt=A._GetAutoObject(
A.Device.Helper).A1K(A._GetAutoObject(A.Device.Helper).W,(F=this.Di.H0.Hu,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alt){this.Ai1();A.pe([this,this.
Bw$],this);}else A._GetAutoObject(A.Device.Helper).AKn(A._GetAutoObject(A.Device.
Helper).W,Alt,(F=this.Di.H0.Hu,F[1].call(F[0])),0,[this,this.ApH]);},Auo:function(
){this.N.CR(A.jV);this.N.C2(A.aaL(A.ach.ADR));this.N.B$=[this,this.AyV];},Ai1:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);var L9=A._GetAutoObject(A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SR(L9);var Bd2=false;if(A._GetAutoObject(
A.Device.Helper).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh()){Bd2=true;A.
_GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.
HK().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KK);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7y()&&(Bd2===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M7);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}}var IY=null;switch((F=this.
Di.H0.Hu,F[1].call(F[0]))){case 3:IY=[B=A._GetAutoObject(A.Device.Device),B.Awh,
B.AyN];break;case 2:IY=[B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyO];break;case
4:case 5:IY=[B=A._GetAutoObject(A.Device.Device),B.Ant,B.Aoz];break;default:;}if(
!!IY)switch((F=this.Di.Kn.VU,F[1].call(F[0]))){case 1:IY[2].call(IY[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IY[2].call(IY[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).A$_(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjO(),this.Dp.AjQ());},Ap5:function(G){A.
_GetAutoObject(C.A8).FB();},Bw$:function(s){this.Ap5(s);},AAy:function(G){A._GetAutoObject(
C.A8).Cd(49);},Ahs:function(E){if(this.M7===E)return;this.M7=E;A.abo([this,this.
Anr,this.Ahs],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am6())this.
C_.Z(true);else this.C_.Z(false);if(A._GetAutoObject(A.Device.Helper).A7y())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LV){this.Dp.Z(false);this.Cc.T(A.aaR(A.
acf.ACI));this.Cc.AE9(A.aaL(A.ach.Afe));}else{this.Dp.Z(true);this.Cc.T(A.aaR(A.
acf.Ak6));this.Cc.AE9(null);}},AAD:function(G){A._GetAutoObject(A.Device.Helper).
AVG(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LV);},Be9:function(G){A.pe([this,this.Bg3],this);},Be3:function(G){A.pe([this
,this.Bg3],this);},Bg3:function(G){var F,Ct,Tc;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahv(A._GetAutoObject(A.Device.Helper
).AhW(A._GetAutoObject(A.Device.Helper).Abq((F=this.BZ.Q,F[1].call(F[0]))),(Ct=this.
Cn.Dl,Ct[1].call(Ct[0])),2,(Tc=this.BZ.Q,Tc[1].call(Tc[0]))));break;case 2:this.
Ee.Ahv(A._GetAutoObject(A.Device.Helper).AhW(this.KK,(F=this.Cn.Dl,F[1].call(F[0
])),2,(Ct=this.BZ.Q,Ct[1].call(Ct[0]))));break;default:;}},ApH:function(G){var F;
var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id
){case 22:case 21:switch((F=this.Di.H0.Hu,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JJ(this.Di);break;case 0:this.JJ(this.Dp);break;case 1:this.JJ(this.
Cc);break;default:throw new Error(Ayw+(F=this.Di.H0.Hu,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JJ(this.Di);this.JJ(this.Dp);}break;case 25:case 42:{this.
JJ(this.Di);this.JJ(this.Cc);}break;case 41:break;default:A.ab5("%s%e",Ata,As.Id
);}},ApI:function(G){var F;C.HZ.ApI.call(this,G);var AoW=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoW=A._GetAutoObject(A.Device.Device).AdT;break;case
1:AoW=730;break;default:A.ab5("%s%e",Alf,(F=this.BZ.Q,F[1].call(F[0])));}(F=this.
Cn.Dl,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmJ(AoW)));(F=this.C_.Q,F[2].call(F[0],this.C_.AnY));this.Ee.Ahv(A._GetAutoObject(
A.Device.Helper).W.AhW(1));},Ae4:function(E){if(this.LV===E)return;this.LV=E;A.abo([
this,this.Awk,this.Ae4],0);},At9:function(G){var F,Ct,Tc;this.Ae4(((F=this.Cc.Q,
F[1].call(F[0]))===(Ct=this.Dp.Q,Ct[1].call(Ct[0])))&&!!(Tc=this.Cc.Q,Tc[1].call(
Tc[0])));A.pe([this,this.GH],this);},Anr:function(){return this.M7;},Awk:function(
){return this.LV;},_Init:function(aArg){C.HZ._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Av4._Init.call(this.Cc={I:this},0);C.Rb._Init.call(this.Dp={I:this}
,0);C.AGL._Init.call(this.Di={I:this},0);C.SS._Init.call(this.Cn={I:this},0);C.AkV.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.BW._Init.call(
this.Li={I:this},0);this.__proto__=C.Ars;var B;this.Dr(C.ADj);this.CH.H(AcR);this.
Cc.H(Aoo);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArM(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.aaR(A.acf.Akn));this.
Dp.H(Aoo);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Ui));this.Dp.Ar2(false);this.Di.
H(AYs);this.Di.Aj(true);this.Di.T(A.aaR(A.acf.GN));this.Di.Bx(0);this.Cn.H(AcR);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFK(true);this.Ee.H(AcR);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M7));this.Ee.Ga(1000);this.Ee.EV(999000);this.
G7.H(AcR);this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Arq));this.Li.H(AcR);this.Li.Aj(
true);this.Li.T(A.aaR(A.acf.AgK));this.J(this.Cc,-3);this.J(this.Dp,-3);this.J(this.
Di,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G7,-1);this.J(this.Li,-
1);this.EaseOfDelivery.L0(A._GetAutoObject(A.Device.Helper).W);this.BirthType.L0(
A._GetAutoObject(A.Device.Helper).W);this.Cc.AR=[this,this.AcT];this.Cc.LZ([this
,this.AcT]);this.Cc.L2(A.aaL(A.ach.Afe));this.Cc.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArA,B.PW]);this.Cc.OO([B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4
]);this.Cc.PU([B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5]);this.Cc.Um([B=A._GetAutoObject(
A.Device.Device),B.Anq,B.Aoy]);this.Cc.Ae4([this,this.Awk,this.Ae4]);this.Dp.Gs([
this,this.D_,this.GS]);this.Dp.LZ([this,this.AcT]);this.Dp.L2(A.aaL(A.ach.Afe));
this.Dp.Uo([B=this.Gender.Animal,B.WC,B.JW]);this.Dp.OO([B=A._GetAutoObject(A.Device.
Device),B.Uk,B.U4]);this.Dp.PU([B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5]);
this.Dp.Um([B=A._GetAutoObject(A.Device.Device),B.Anq,B.Aoy]);this.Dp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Nj]);this.Dp.Anw([B=this.AnimalType.Animal,B.PT,B.EC]
);this.Di.Gs([this,this.D_,this.GS]);this.Di.LZ([B=this.Di,B.FV]);this.Di.L2(A.aaL(
A.ach.Edit));this.Di.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SK]);this.
Di.A9L(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gs([this,this.D_,this.GS]);this.
Cn.LZ([B=this.Cn,B.FV]);this.Cn.L2(A.aaL(A.ach.Edit));this.Cn.Ab6([B=A._GetAutoObject(
A.Device.Helper).W,B.Awe,B.Q6]);this.Ee.Au([this,this.Anr,this.Ahs]);this.G7.Au([
B=this.BirthType,B.B_,B.Cb]);this.G7.CK(this.BirthType);this.Li.Au([B=this.EaseOfDelivery
,B.B_,B.Cb]);this.Li.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HZ;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cc._Done(
);this.Dp._Done();this.Di._Done();this.Cn._Done();this.Ee._Done();this.G7._Done(
);this.Li._Done();C.HZ._Done.call(this);},_ReInit:function(){C.HZ._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cc._ReInit();this.
Dp._ReInit();this.Di._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G7._ReInit(
);this.Li._ReInit();this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArM(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.aaR(A.acf.Akn));this.Dp.T(
A.aaR(A.acf.Ui));this.Di.T(A.aaR(A.acf.GN));this.Cn.T(A.aaR(A.acf.Aeg));this.Ee.
T(A.aaR(A.acf.M7));this.G7.T(A.aaR(A.acf.Arq));this.Li.T(A.aaR(A.acf.AgK));},_Mark:
function(D){var B;C.HZ._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Di)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHj={H8:null,AhN:null,AgV:null,AhO:null,AgW:null,AnimalType:null,Background:
null,N0:null,Rl:null,V:null,TU:null,YD:null,AbC:null,PR:null,DK:A.jV,AGN:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An8();this.
AxX();},An8:function(){var F,Ct;var LD=0;var Amh=0;var AlG=0;var Ic=0;if((((!!this.
AhN&&!!this.AhO)&&!!this.AgV)&&!!this.AgW)&&!!this.AnimalType){Amh=(F=this.AhN,F[
1].call(F[0]));AlG=(F=this.AgV,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper
).L$((F=this.AhO,F[1].call(F[0])),(Ct=this.AgW,Ct[1].call(Ct[0])));Ic=(F=this.AnimalType
,F[1].call(F[0]));}var K8=A.jb.Text;var Azd=A.jb.CT;if(!!LD){var ALB=A._GetAutoObject(
A.acj.DU).AlA(LD,Amh,AlG);Azd=A._GetAutoObject(A.acj.DU).AzS(ALB,Ic);K8=A._GetAutoObject(
A.acj.DU).AzU(ALB,Ic);}this.Background.L(Azd);this.TU.L(K8);this.Rl.L(K8);this.N0.
L(K8);this.AbC.L(K8);if(K8===A.jb.Bm)this.YD.L(K8);else this.YD.L(A.jb.CJ);this.
V.L(K8);this.PR.L(K8);},AxX:function(){var F,Ct;var LD=0;var Amh=0;var AlG=0;if(((
!!this.AhN&&!!this.AhO)&&!!this.AgV)&&!!this.AgW){Amh=(F=this.AhN,F[1].call(F[0]
));AlG=(F=this.AgV,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper).L$((F=this.
AhO,F[1].call(F[0])),(Ct=this.AgW,Ct[1].call(Ct[0])));}if(!!LD){var ALB=A._GetAutoObject(
A.acj.DU).AlA(LD,Amh,AlG);this.Rl.R(A._GetAutoObject(A.Device.Converter).S_(ALB,
2,true));this.N0.Z(true);this.Rl.Z(true);this.PR.Z(false);}else{this.N0.Z(false);
this.Rl.Z(false);this.PR.Z(true);}this.TU.R(this.BzL(AlG-Amh,LD));this.AbC.Z(this.
AGN);this.YD.Z(this.AGN);this.N0.R(A._GetAutoObject(A.acj.DU).Aav());},BzL:function(
A1p,Ah8){var B;if(Ah8<0){A.ab5("%s",AYt);return A.jV;}var Iv=(AYu+A._GetAutoObject(
A.acj.DU).Af4())+CQ;var FW=A._GetAutoObject(A.Device.Converter).Ak$(A1p);if(!A1p
)FW=A.abU(FW,AYv,0);else if(A1p>0)FW=A.abU(FW,AIi,0);Iv=this.Bgh(Iv,AYw,FW);if(Ah8===
1)Iv=Iv+A.aaR(A.acf.BjN);else{Iv=Iv+A.aaR(A.acf.BjO);Iv=this.Bgh(Iv,AYx,Ah8.toFixed(
));}return Iv;},Bgh:function(aString,Bcv,Bx$){if(aString===A.jV){A.ab5("%s",AYy);
return A.jV;}var A2_=aString.indexOf(Bcv,0);if(A2_>=0){aString=A.ab1(aString,A2_
,Bcv.length);aString=A.abU(aString,Bx$,A2_);}return aString;},ATL:function(E){if(
A.aaZ(this.AhN,E))return;if(!!this.AhN)A.z$([this,this.C4],this.AhN,0);this.AhN=
E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},BmB:function(
E){if(A.aaZ(this.AgV,E))return;if(!!this.AgV)A.z$([this,this.C4],this.AgV,0);this.
AgV=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},ATM:function(
E){if(A.aaZ(this.AhO,E))return;if(!!this.AhO)A.z$([this,this.C4],this.AhO,0);this.
AhO=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},BmC:function(
E){if(A.aaZ(this.AgW,E))return;if(!!this.AgW)A.z$([this,this.C4],this.AgW,0);this.
AgW=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},C4:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_I:function(
E){if(this.AGN===E)return;this.AGN=E;this.Am();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C4],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.N0={I:this},0);A.acg.Text._Init.call(this.Rl={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.TU={I:this},0);A.acg.
Ap._Init.call(this.YD={I:this},0);A.acg.Ap._Init.call(this.AbC={I:this},0);C.CG.
_Init.call(this.PR={I:this},0);this.__proto__=C.AHj;this.H(AfE);this.Background.
A0(0x3F);this.Background.H(AfE);this.N0.H(AYz);this.N0.R(A._GetAutoObject(A.acj.
DU).Aav());this.N0.A6(0x9);this.N0.L(A.jb.Text);this.Rl.H(AYA);this.Rl.A6(0x14);
this.Rl.R(A.aaR(A.acu.Akl));this.Rl.L(A.jb.Text);this.V.A0(0x1D);this.V.H(AYB);this.
V.R(A.aaR(A.acf.AuD));this.V.A6(0x12);this.V.L(A.jb.Text);this.TU.H(Aaf);this.YD.
A0(0x14);this.YD.H(AIj);this.YD.Cv(1);this.AbC.A0(0x14);this.AbC.H(AIj);this.AbC.
Cv(0);this.PR.H(AYC);this.PR.R(A.aaR(A.acf.A40));this.J(this.Background,0);this.
J(this.N0,0);this.J(this.Rl,0);this.J(this.V,0);this.J(this.TU,0);this.J(this.YD
,0);this.J(this.AbC,0);this.J(this.PR,0);this.N0.S(A.aaL(A.fl.EK));this.N0.AZ(A.
aaL(A.fl.Af));this.N0.Cr(A.aaL(A.fl.HJ));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(
A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));this.TU.S(A.aaL(A.
fl.Af));this.TU.AZ(A.aaL(A.fl.Ak));this.TU.Cr(A.aaL(A.fl.Bh));this.YD.Ax(A.aaL(A.
ach.ABS));this.AbC.Ax(A.aaL(A.ach.ABS));this.H8=A._NewObject(A.Device.Rating,0);
this.PR.S(A.aaL(A.fl.Af));this.PR.AZ(A.aaL(A.fl.Ak));this.PR.Cr(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N0._Done(
);this.Rl._Done();this.V._Done();this.TU._Done();this.YD._Done();this.AbC._Done(
);this.PR._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N0._ReInit();this.Rl._ReInit();this.V.
_ReInit();this.TU._ReInit();this.YD._ReInit();this.AbC._ReInit();this.PR._ReInit(
);this.Rl.R(A.aaR(A.acu.Akl));this.V.R(A.aaR(A.acf.AuD));this.PR.R(A.aaR(A.acf.A40
));this.N0.S(A.aaL(A.fl.EK));this.N0.AZ(A.aaL(A.fl.Af));this.N0.Cr(A.aaL(A.fl.HJ
));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));
this.V.Cr(A.aaL(A.fl.Bh));this.TU.S(A.aaL(A.fl.Af));this.TU.AZ(A.aaL(A.fl.Ak));this.
TU.Cr(A.aaL(A.fl.Bh));this.PR.S(A.aaL(A.fl.Af));this.PR.AZ(A.aaL(A.fl.Ak));this.
PR.Cr(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhN)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgW)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVY={Animal:null,Rating:null,Cq:null,AD:null,AY:
0,Hm:function(G){var B;if(!this.Animal||!this.Rating)return;var Gg=this.AD.G6;var
CA=(C.AHj.isPrototypeOf(B=this.AD.Cj)?B:null);if(!CA)return;CA.EC([B=this.Animal
,B.PT,B.EC]);CA.BmB([B=A._GetAutoObject(A.Device.Device),B.AEO,B.AI0]);CA.BmC([B=
this.Rating,B.A9p,B.OnSetTimestamp]);switch(Gg%this.AY){case 1:{CA.ATL([B=this.Animal
,B.A80,B.AFq]);CA.ATM([B=this.Animal,B.A9q,B.AFU]);CA.T(A.aaR(A.acf.AuD));}break;
default:if(this.Animal.Arf()){CA.ATL([B=this.Animal,B.ASF,B.AwL]);CA.ATM([B=this.
Animal,B.ASW,B.Axb]);CA.T(A.aaR(A.acf.ALZ));}else{CA.ATL([B=this.Animal,B.ASF,B.
AwL]);CA.ATM([B=this.Animal,B.ASW,B.Axb]);CA.T(A.aaR(A.acf.Bhj));}}if(this.AY>1)
CA.A_I(true);else CA.A_I(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GO
]));},DE:function(G){if(this.AY>0)switch(this.Cq.CO){case 6:this.CE(this);break;
case 7:this.B$(this);break;default:this.Cq.NL=true;}},L0:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jz(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jz(1);else{this.Jz(2);this.AD.GT(1);this.
AD.HI(this.AD.Gt,true,null,null);}if(this.AY>0)this.AD.AbE(0,this.AY-1);},AkE:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbE(0,this.AY-1);
},CE:function(G){if(this.AD.Gt>0)this.AD.GT(this.AD.Gt-1);else this.AD.GT(this.AY-
1);this.AD.HI(this.AD.Gt,true,null,null);},B$:function(G){if(this.AD.Gt<(this.AY-
1))this.AD.GT(this.AD.Gt+1);else this.AD.GT(0);this.AD.HI(this.AD.Gt,true,null,null
);},Jz:function(E){if(this.AY===E)return;this.AY=E;this.AD.Jz(this.AY);A.abo([this
,this.Arx,this.Jz],0);},Arx:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVY;this.H(AfE);this.Cq.Filter=147;this.
AD.A0(0x3F);this.AD.H(AfE);this.AD.N3(C.AHj);this.AD.Ae8(160);this.AD.GT(0);this.
AD.Jz(2);this.J(this.AD,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.
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
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.LI=Hf;
this.KH=Fw;this.Qv=GE;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(KZ);this.V.H(BD);this.Zz(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeS={KL:null,GK:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KL.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KL.
L(this.V.AQ);},Init:function(aArg){},Ab2:function(E){if(this.GK===E)return;this.
GK=E;this.KL.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.call(
this.KL={I:this},0);this.__proto__=C.AeS;this.H(KZ);this.Background.H(KZ);this.V.
H(AcN);this.V.R(Lw);this.KL.H(IW);this.KL.R(AYD);this.J(this.KL,0);this.V.S(A.aaL(
A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(null);this.KL.S(A.aaL(A.fl.Af));this.
KL.AZ(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KL._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KL._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.KL.S(A.aaL(
A.fl.Af));this.KL.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Av4={ACk:null,Q:null,A2:null,AF:null,Ik:null,LV:null,Ap:null,EM:null,AOa:A.jV
,AOb:A.jV,Bl:function(aSize){C.AeS.Bl.call(this,aSize);if(!this.ACk)this.KL.H([].
concat(0,this.KL.M.slice(1,4)));else this.KL.H([].concat(this.Ap.M[2],this.KL.M.
slice(1,4)));},Ai:function(Ae){var F,Ct,Tc;C.AeS.Ai.call(this,Ae);var Bc0=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Aph)this.Ab2(this.AOa);else
this.Ab2(this.AOb);}else{this.Ab2(A._GetAutoObject(A.Device.Converter).Rj((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ik&&!!this.A2)&&!!this.AF)&&!!this.LV)&&(((F=this.
Ik,F[1].call(F[0]))===1)||(!(Ct=this.Ik,Ct[1].call(Ct[0]))&&(Tc=this.LV,Tc[1].call(
Tc[0])))))Bc0=true;}}this.EM.Z(Bc0);this.Ap.L(this.V.AQ);A.pe([this,this.Agc],this
);},C4:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)
A.pe([this,this.C4],this);},AE9:function(E){if(this.ACk===E)return;this.ACk=E;this.
Ap.Ax(E);this.BjU();},OO:function(E){if(A.aaZ(this.A2,E))return;if(!!this.A2)A.z$([
this,this.AaF],this.A2,0);this.A2=E;if(!!E)A.zX([this,this.AaF],E,0);if(!!E)A.pe([
this,this.AaF],this);},PU:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaH],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaH],E,0);if(!!E)
A.pe([this,this.AaH],this);},AaH:function(G){this.Am();},AaF:function(G){this.Am(
);},Um:function(E){if(A.aaZ(this.Ik,E))return;if(!!this.Ik)A.z$([this,this.Al1],
this.Ik,0);this.Ik=E;if(!!E)A.zX([this,this.Al1],E,0);if(!!E)A.pe([this,this.Al1
],this);},Al1:function(G){this.Am();},Agc:function(G){var F,Ct;if((!this.Ik||!this.
A2)||!this.AF)return;var A2R=this.KL.Afh([(this.KL.String.length-(F=this.AF,F[1].
call(F[0])))-(Ct=this.A2,Ct[1].call(Ct[0])),0]);var A4b=this.KL.Afh([this.KL.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABj=this.KL.Dc(0x0);this.EM.H([A2R[0]-
1,ABj[1],A4b[0]+1,ABj[3]]);},ArM:function(E){if(this.AOa===E)return;this.AOa=E;this.
Am();},ArN:function(E){if(this.AOb===E)return;this.AOb=E;this.Am();},Ae4:function(
E){if(A.aaZ(this.LV,E))return;if(!!this.LV)A.z$([this,this.A3z],this.LV,0);this.
LV=E;if(!!E)A.zX([this,this.A3z],E,0);if(!!E)A.pe([this,this.A3z],this);},A3z:function(
G){this.Am();},_Init:function(aArg){C.AeS._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.Av4;
this.Ap.H(AhY);this.EM.H(AYE);this.EM.Nm(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KL.Q7([this,this.Agc]);},_Done:function(){this.__proto__=
C.AeS;this.Ap._Done();this.EM._Done();C.AeS._Done.call(this);},_ReInit:function(
){C.AeS._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeS._Mark.call(this,D);if((B=this.ACk)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ik)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ii:0,AaE:4,Bd6:false,Bec:true,Beb:false,Bc7:true,Bd5:false
,Al6:function(G){C.Ra.Al6.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bd4(
)){this.Ii=A._GetAutoObject(A.Device.Helper).UA.Id;var AiA=A._GetAutoObject(A.Device.
Helper).ARo(this.Ii);if(AiA)A._GetAutoObject(A.Device.Device).A3(107,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.A3D]);else{this.AaE=A._GetAutoObject(
A.Device.Helper).ARp(this.Ii);var Bez=false;if((this.AaE===3)||(this.AaE===2))Bez=
A._GetAutoObject(A.Device.Helper).A7z(this.Ii,A._GetAutoObject(A.Device.Helper).
W);if(Bez)A._GetAutoObject(A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Ii),0,null);else switch(this.AaE){case 2:{var BM=A._GetAutoObject(
A.Device.Converter).AxV(this.Ii);A._GetAutoObject(A.Device.Device).A3(46,true,BM.
toFixed(),0,[this,this.A3D]);}break;case 3:case 1:case 0:case 4:this.A4r();break;
default:throw new Error(AIk+this.AaE.toFixed());}}}},Ew:function(G){A._GetAutoObject(
C.A8).FB();},AI1:function(s){this.Ew(s);},A4r:function(){if((this.AaE===3)||(this.
AaE===2)){if((this.Bc7&&(A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(
A.Device.Helper).W.NaisId!==this.Ii)){A._GetAutoObject(A.Device.Device).A3(69,true
,A.jV,0,[this,this.A3D]);return;}else this.BCh();}if(this.Bd6)A._GetAutoObject(A.
Device.Helper).BoU(this.Ii);A._GetAutoObject(A.Device.Helper).W.PW(this.Ii);this.
Bd5=true;this.BCj();this.Ew(this);},A3D:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A4r();break;case 107:switch(As.PopupState){case 7:{this.Bd6=true;this.A4r();}break;
case 8:this.Ew(this);break;default:;}break;case 69:if(As.PopupState===4)this.Ew(
this);break;default:A.ab5("%s%e",AIl,As.Id);}},BCh:function(){A._GetAutoObject(A.
Device.Helper).W.Nj(this.Ii);if(this.Beb&&(A._GetAutoObject(A.Device.Converter).
S3(this.Ii)===10)){var BcK=Math.trunc((this.Ii%1000000000000)/10000000000);if(!BcK&&(
A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper
).W.EC(0);else if((BcK===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2
))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BCj:function(){if(this.Bec){A._GetAutoObject(
A.Device.Helper).W.SK(A._GetAutoObject(A.Device.Helper).A5g(A._GetAutoObject(A.Device.
Device).Ak5,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device
).Ak5===1)A._GetAutoObject(A.Device.Helper).A$$();}},_Init:function(aArg){C.Ra._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Z(true);this.Dr(C.IL
);this.Number.R(A.aaR(A.acf.OT));this.Jh.H(AYF);this.IU.H(W9);this.AkG(1);this.N.
CE=[this,this.AI1];this.N.C1(A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.
call(this);this.Number.R(A.aaR(A.acf.OT));},_className:"Application::SetTransponderScreen"
};C.ADv={Go:null,Lm:null,Ku:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EB.Ai.call(this,Ae);this.Lm.R(A._GetAutoObject(A.acj.DU
).Af4());this.Ku.R(A._GetAutoObject(A.acj.DU).Aav());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.
call(this.Lm={I:this},0);A.acg.Text._Init.call(this.Ku={I:this},0);this.__proto__=
C.ADv;this.Background.L(A.jb.Text);this.Go.H(AYG);this.Go.A6(0x11);this.Go.R(A.aaR(
A.acf.Date));this.Go.L(A.jb.Bm);this.Lm.H(AYH);this.Lm.A6(0x11);this.Lm.L(A.jb.Bm
);this.Ku.H(AYI);this.Ku.L(A.jb.Bm);this.J(this.Go,0);this.J(this.Lm,0);this.J(this.
Ku,0);this.Go.S(A.aaL(A.fl.Af));this.Lm.S(A.aaL(A.fl.Af));this.Ku.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Go._Done();this.Lm.
_Done();this.Ku._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Go._ReInit();this.Lm._ReInit();this.Ku._ReInit();this.Go.R(A.aaR(
A.acf.Date));this.Go.S(A.aaL(A.fl.Af));this.Lm.S(A.aaL(A.fl.Af));this.Ku.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ku)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHn={Mm:null,Hq:null,Ia:null,AP:null,A$:null,FW:0,Ic:0,AiO:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mm.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ia.H(this.Mm.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiO){this.Ia.R(Rp);this.Ia.L(A.jb.
Text);this.Mm.L(this.Background.AQ);}else{this.Ia.R(A._GetAutoObject(A.Device.Converter
).S_(this.FW,2,true));this.Ia.L(A._GetAutoObject(A.acj.DU).AzU(this.FW,this.Ic));
this.Mm.L(A._GetAutoObject(A.acj.DU).AzS(this.FW,this.Ic));}this.Hq.L(this.V.AQ);
},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hv(
Ad,6);var Al$=this.AX.CF(Ad,8);if(this.Hs>0){var Bzi=this.AX.Hv(this.Hs-1,6);var
BBY=this.AX.CF(this.Hs-1,8);var LD=A._GetAutoObject(A.Device.Helper).L$(Bzi,AlD);
if(!!LD){this.AiO=false;this.FW=A._GetAutoObject(A.acj.DU).AlA(LD,BBY,Al$);}else{
this.AiO=true;this.FW=0;}}else{this.AiO=true;this.FW=0;}this.T(A._GetAutoObject(
A.acj.KM).ACX(AlD));this.Hq.R(A._GetAutoObject(A.Device.Converter).Ak$(Al$));this.
Ic=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mm={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ia={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AHn;this.V.H(O7);this.Mm.H(Atd);this.Hq.H(AIm);this.Hq.A6(0x12);this.Hq.R(Ro);
this.Hq.L(A.jb.Text);this.Ia.H(AIn);this.Ia.R(Ro);this.Ia.L(A.jb.Text);this.AP.H(
Aor);this.AP.L(A.jb.Bc);this.A$.H(Aos);this.A$.L(A.jb.Bc);this.J(this.Mm,0);this.
J(this.Hq,0);this.J(this.Ia,0);this.J(this.AP,0);this.J(this.A$,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mm._Done();this.Hq._Done();this.Ia._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mm._ReInit(
);this.Hq._ReInit();this.Ia._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ia)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,V4:null,AhU:null,S1:null
,KO:A.jV,CP:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LD=
A._GetAutoObject(A.Device.Helper).L$(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LD){var FW=A._GetAutoObject(
A.acj.DU).AlA(LD,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdO=A.aaR(A.acf.BhF);AdO=A._GetAutoObject(
A.Device.Helper).MG(AdO,O8,A._GetAutoObject(A.Device.Converter).S_(FW,2,true));AdO=
A._GetAutoObject(A.Device.Helper).MG(AdO,Ayf,A._GetAutoObject(A.acj.DU).Aav());this.
S1.R(AdO);this.AhU.L(A._GetAutoObject(A.acj.DU).AzS(FW,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S1.L(A._GetAutoObject(A.acj.DU).AzU(FW,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S1.R(A.aaR(A.acf.AVW));this.AhU.L(A.jb.
ARa);this.S1.L(A.jb.Text);}},CC:function(G){var Fy=A._NewObject(A.Device.Filter,
0);var HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CW(HW);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fy.CW(Ac_);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);this.AxB(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},AxB:function(G){this.Bg=A._NewObject(C.Gc,0);this.Bg.N3(C.AHn);this.Bg.H(Ayr
);this.Bg.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dk(this.KO);this.J(this.
Bg,0);this.Bb(this.Bg);},Anp:function(G){A._GetAutoObject(C.A8).FB();},Dk:function(
E){if(this.KO===E)return;this.KO=E;if(!!this.Bg)this.Bg.Dk(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADv._Init.call(this.V4={I:this},0);A.acg.AL._Init.
call(this.AhU={I:this},0);A.acg.Text._Init.call(this.S1={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Ce);this.N.Z(true);this.Dr(C.IL);this.V4.H(
Qd);this.KO=A.aaR(A.acf.Akm);this.AhU.A0(0x1D);this.AhU.H(IW);this.S1.A0(0x1D);this.
S1.H(IW);this.S1.A6(0x12);this.S1.R(Ro);this.J(this.V4,0);this.J(this.AhU,0);this.
J(this.S1,0);this.N.CE=[this,this.Anp];this.N.C1(A.aaL(A.ach.E2));this.S1.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V4._Done();this.AhU._Done(
);this.S1._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V4._ReInit();this.AhU._ReInit();this.S1._ReInit();this.Dk(A.aaR(A.acf.Akm
));this.S1.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V4)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S1
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mi={DP:null,Acy:null,ARP:11,EN:0,A5e:true,ABZ:false,I1:function(G){if(A._GetAutoObject(
A.Device.Device).An.B9()>0)this.E5(4);else A._GetAutoObject(A.Device.Device).A3(
30,true,A.jV,0,null);},CC:function(G){if(this.DP.Az4())this.DP.Ac9();else if((this.
EN===2)&&A._GetAutoObject(A.Device.Helper).W.AqY())this.E5(5);else this.E5(1);},
E4:function(G){if(this.EN===1)this.E5(0);},Ew:function(G){this.E5(0);A._GetAutoObject(
C.A8).FB();},BCz:function(){A._GetAutoObject(A.Device.Device).AhM();},A4x:function(
){A._GetAutoObject(A.Device.Device).An0();},A9O:function(E){if(this.ABZ===E)return;
this.ABZ=E;A.abo([this,this.Bk0,this.A9O],0);},E5:function(E){var B;if(this.EN===
E)return;this.EN=E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkQ();A.zX([
this,this.AKC],[B=A._GetAutoObject(A.Device.Helper),B.Ary,B.AkF],0);A.z$([this,this.
AAv],[B=this.DP,B.SF,B.E5],0);this.BCz();}break;case 3:{A.z$([this,this.AKC],[B=
A._GetAutoObject(A.Device.Helper),B.Ary,B.AkF],0);this.A4x();this.BAu();}break;case
2:{A._GetAutoObject(A.Device.Helper).Asr();if(!A._GetAutoObject(A.Device.Device).
AutoRegistrationMode&&this.A5e)this.BCk();else this.BCn();}break;case 4:{A.z$([this
,this.AKC],[B=A._GetAutoObject(A.Device.Helper),B.Ary,B.AkF],0);this.A4x();A._GetAutoObject(
A.Device.Helper).Asr();A.zX([this,this.Bfi],[B=A._GetAutoObject(A.Device.Device)
,B.Awp,B.AyS],0);A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(this.ARP);}
break;case 5:this.BgD();break;case 6:{A.zX([this,this.AAv],[B=this.DP,B.SF,B.E5]
,0);this.DP.Ac9();}break;case 0:{A.z$([this,this.AKC],[B=A._GetAutoObject(A.Device.
Helper),B.Ary,B.AkF],0);this.A4x();}break;default:throw new Error(Ayx);}A.abo([this
,this.SF,this.BwZ],0);},BwZ:function(Aq){this.E5(Aq);},AKC:function(G){if(!!A._GetAutoObject(
A.Device.Helper).UA){if(this.EN===1)this.E5(3);else A.ab5("%s%e",AYJ,this.EN);}else
A.ab5("%s",AIo);},BCk:function(){A._GetAutoObject(A.Device.Device).A3(13,true,A.
_GetAutoObject(A.Device.Helper).Ak7(A._GetAutoObject(A.Device.Helper).UA.Id).toFixed(
),0,[this,this.BAJ]);},BAJ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&((As.PopupState===4)||(As.PopupState===3))){if(this.Bc$(false
))A._GetAutoObject(C.A8).Cd(31);else{A._GetAutoObject(A.Device.Helper).AkQ();this.
E5(1);}}else if(!!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkQ(
);this.E5(1);}},Bc$:function(Ai1){if(A._GetAutoObject(A.Device.Device).An.Lh()){
A._GetAutoObject(A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.
HK().toFixed(),0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gr();A.
_GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(
A.Device.Helper).W.PW(A._GetAutoObject(A.Device.Helper).UA.Id);if(!!A._GetAutoObject(
A.Device.Helper).AhI){var AlN=A._GetAutoObject(A.Device.Helper).AhI.AOV();A._GetAutoObject(
A.Device.Helper).W.Ab3(AlN);A._GetAutoObject(A.Device.Helper).W.AnD(AlN);}if(A._GetAutoObject(
A.Device.Helper).ARp(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nj(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SK(A._GetAutoObject(A.Device.Helper).Bhu(A._GetAutoObject(A.Device.
Device).AgA,A._GetAutoObject(A.Device.Helper).W));if(Ai1){A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var L9=A._GetAutoObject(A.Device.
Device).An.LT(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SR(L9);if(A._GetAutoObject(A.Device.Helper).Am6()){if(A._GetAutoObject(A.
Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abq(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).AgA)A._GetAutoObject(
A.Device.Helper).A$$();}return true;},BAu:function(){if(!!A._GetAutoObject(A.Device.
Helper).UA){var AJs=true;if(A._GetAutoObject(A.Device.Helper).UA.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJs=A._GetAutoObject(A.Device.Helper).A7L(A._GetAutoObject(
A.Device.Helper).UA.Id);if(!AJs&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bc$(true);AJs=A._GetAutoObject(A.Device.Helper).A7L(A._GetAutoObject(A.
Device.Helper).UA.Id);}}if(AJs)this.E5(5);else this.E5(2);}else{A.ab5("%s",AIo);
return;}},Bfi:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARP){A.z$([this,this.Bfi],[B=A._GetAutoObject(A.Device.Device),B.Awp,B.AyS
],0);if(A._GetAutoObject(A.Device.Helper).W.AqY())this.E5(5);else this.E5(1);}},
BgD:function(){if(this.ABZ===true)this.E5(6);else A._GetAutoObject(C.A8).Cd(24);
},BCn:function(){A._GetAutoObject(A.Device.Device).A3(36,true,A.jV,0,[this,this.
BBD]);},BBD:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkQ();this.E5(1);}},AAv:function(G){if(!this.DP.EN)this.E5(1);},A3r:function(G
){},Bw9:function(s){this.A3r(s);},Bk0:function(){return this.ABZ;},SF:function(){
return this.EN;},_Init:function(aArg){C.Ra._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acy={I:this},0);this.__proto__=C.Mi;this.N.Z(true);this.Dr(C.AqZ);this.
Number.H(AYK);this.Number.R(A.aaR(A.acf.A$y));this.Jh.H(AYL);this.IU.H(AYM);this.
Acy.H(AYN);this.Acy.R(AYO);this.Acy.L(A.jb.Text);this.J(this.Acy,0);this.N.CE=[this
,this.Ew];this.N.Cf=[this,this.Bw9];this.N.C1(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acy.S(A.aaL(A.fl.H2));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Ra;this.Acy._Done();C.Ra._Done.call(this);},_ReInit:function(
){C.Ra._ReInit.call(this);this.Acy._ReInit();this.Number.R(A.aaR(A.acf.A$y));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ra._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A44={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Apc:-1,EN:0,Byx:function(){var Bgi=false;
var Om=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HK().toFixed(),0,null);else if(Om){Bgi=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axx(B1,5);B1.OnSetAppearance(3);B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axx(B1
,5);B1.OnSetAppearance(1);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(Bgi)A._GetAutoObject(A.Device.Helper).W.Ur(false);if(Om)A.
_GetAutoObject(A.Device.Helper).W.AnV(false);else A._GetAutoObject(A.Device.Helper
).W.AnV(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A3(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MY]);else A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MY]);},Byz:function(){A._GetAutoObject(
A.Device.Helper).W.AGJ(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A3(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MY]);else A._GetAutoObject(
A.Device.Device).A3(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MY]);},Qp:function(Eh){switch(Eh){case 4:this.Byx();break;case
128:A._GetAutoObject(C.A8).Cd(7);break;case 16:A._GetAutoObject(C.A8).Cd(36);break;
case 1:A._GetAutoObject(C.A8).Cd(10);break;case 2:A._GetAutoObject(C.A8).Cd(11);
break;case 8:this.Byz();break;case 64:A._GetAutoObject(C.A8).Cd(29);break;case 32:
A._GetAutoObject(C.A8).Cd(48);break;case 256:A._GetAutoObject(C.A8).Cd(21);break;
case 512:A._GetAutoObject(C.A8).Cd(30);break;case 1024:this.BAr();break;case 262144:
this.BCP();break;case 2048:this.Ac9();break;case 4096:this.Bc3(false);break;case
8192:this.Byy();break;case 16384:this.BAq();break;case 32768:this.ByY();break;case
524288:this.ByZ();break;case 65536:this.Bzm();break;case 131072:this.BCc();break;
case 0:break;default:throw new Error(AYP);}},Bdb:function(Eh,Bx5){var EQ=A._NewObject(
C.Wo,0);EQ.Ab1(false);EQ.Aj(true);EQ.AR=Bx5;EQ.Bl$(Eh);switch(Eh){case 1:{EQ.T(A.
aaR(A.acf.An1));EQ.DB(A.aaL(A.ach.ALP));}break;case 2:{EQ.T(A.aaR(A.acf.A$i));EQ.
DB(A.aaL(A.ach.ALQ));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DB(A.aaL(A.ach.ALR
));EQ.AFG(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asd));EQ.DB(A.aaL(A.ach.ALS));EQ.
AFG(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMo));EQ.DB(A.aaL(A.ach.ALT));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DB(A.aaL(A.ach.ALU));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DB(A.aaL(A.ach.ALV));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DB(A.aaL(A.ach.ALW));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DB(A._GetAutoObject(A.acj.DU).Bz1());}break;case 512:{EQ.T(A.aaR(A.acf.ASc));
EQ.DB(A.aaL(A.ach.ALH));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DB(A.aaL(A.ach.ALI));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DB(A.aaL(A.ach.ALO));}break;case 2048:{EQ.T(A.aaR(A.acf.Ty));EQ.DB(A.aaL(A.ach.ALJ
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DB(A.aaL(A.ach.ALK));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DB(A.aaL(A.ach.ALL));EQ.AFG(true);}break;case
16384:{EQ.T(A.aaR(A.acf.BiR));EQ.DB(A.aaL(A.ach.ALM));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bo7));EQ.DB(A.aaL(A.ach.ALN));}break;default:A.ab5("%s",(AYQ+Eh.toFixed(
))+AYR);}return EQ;},Bzz:function(){this.Apc=this.Apc+1;if(this.Apc>=this.AutoActions.
M$())this.E5(0);else this.E5(2);},BB2:function(){this.Apc=-1;},Az4:function(){return(
this.Apc>-1)&&!this.BAk();},BAk:function(){return this.Apc>=this.AutoActions.M$(
);},E5:function(E){if(this.EN===E)return;this.EN=E;switch(E){case 1:this.Bzz();break;
case 2:{var Tg=this.AutoActions.OG(this.Apc);if(this.A41(A._GetAutoObject(A.Device.
Helper).W,Tg))this.Qp(Tg);else A._GetAutoObject(A.Device.Device).A3(64,true,(this.
ActionToString.Lv(Tg)+Atb)+this.AnimalTypeToString.Lv(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MY]);}break;case 0:this.BB2();break;default:throw new
Error(Ayx);}A.abo([this,this.SF,this.E5],0);},MY:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
Bc3(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.A8).Cd(45);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.Az4())this.
E5(1);},Bc5:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAr:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A8).Cd(
45);else A._GetAutoObject(A.Device.Device).A3(32,true,A.jV,0,[this,this.MY]);},Ac9:
function(){this.E5(1);},BB0:function(){var Om=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Om&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device
).Bt.HK().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axx(B1,5);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Ur(false);if(Om)A._GetAutoObject(
A.Device.Helper).W.AnV(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MY]);},BB1:function(){A._GetAutoObject(
A.Device.Helper).W.AGJ(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MY]);},Bc3:function(BzD){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BzD===false))A._GetAutoObject(A.Device.
Device).A3(63,true,A.jV,0,[this,this.MY]);else A._GetAutoObject(C.A8).Cd(54);},Byy:
function(){A._GetAutoObject(A.Device.Helper).W.ArV(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A3(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MY]);else A._GetAutoObject(A.Device.Device).A3(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MY]);},BAq:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A8).Cd(81);else A._GetAutoObject(A.
Device.Device).A3(69,true,A.jV,0,[this,this.MY]);},ByY:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae5(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(65,true,A.jV,2000,[this,this.MY
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae6(false);A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).A3(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MY]);}}},Bzm:function(){A._GetAutoObject(A.Device.Helper).W.Ae5(false);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae5(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(65,true,A.jV,2000,[this,this.MY
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A3(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MY]);else A._GetAutoObject(A.Device.Device).A3(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MY]);}},A41:function(En,Eh
){var Qz=false;switch(Eh){case 32768:Qz=En.IsRegistrationNoticePending&&!!En.NaisIdMother;
break;case 524288:Qz=En.IsRegistrationNoticePending&&!En.NaisIdMother;break;case
4096:case 8192:switch(En.AnimalType){case 1:Qz=true;break;default:;}break;case 512:
switch(En.AnimalType){case 0:Qz=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qz=true;break;default:A.ab5("%s",AYS+
Eh.toFixed());}return Qz;},BCc:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A8).Cd(80);else A._GetAutoObject(A.Device.Device).A3(
69,true,A.jV,0,[this,this.MY]);},BCP:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A3(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MY]);else{A._GetAutoObject(A.
Device.Helper).W.PW(0);A._GetAutoObject(A.Device.Helper).W.SK(A._GetAutoObject(A.
Device.Helper).A5g(A._GetAutoObject(A.Device.Device).An6,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A3(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MY]);}},ByZ:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae6(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MY]);}},SF:function(){return this.EN;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A44;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AL1={R2:null,Aqk:null,E5:function(E){if(this.EN===E)return;C.Mi.E5.call(this
,E);switch(E){case 1:this.Dr(C.AqZ);break;case 5:case 6:this.Dr(C.IL);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayx);}},A3r:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mi._Init.call(this
,aArg);C.CG._Init.call(this.R2={I:this},0);C.AL2._Init.call(this.Aqk={I:this},0);
this.__proto__=C.AL1;this.A9O(true);this.R2.H(AYT);this.R2.R(A.aaR(A.acf.Ty));this.
R2.L(A.jb.Text);this.Aqk.H(AYU);this.J(this.R2,0);this.J(this.Aqk,0);this.N.Cw(A.
aaL(A.ach.AeD));this.R2.S(A.aaL(A.fl.Af));this.R2.AZ(A.aaL(A.fl.HJ));this.R2.Cr(
A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Mi;this.R2._Done();this.Aqk.
_Done();C.Mi._Done.call(this);},_ReInit:function(){C.Mi._ReInit.call(this);this.
R2._ReInit();this.Aqk._ReInit();this.R2.R(A.aaR(A.acf.Ty));this.R2.S(A.aaL(A.fl.
Af));this.R2.AZ(A.aaL(A.fl.HJ));this.R2.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Mi._Mark.call(this,D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aqk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"
};C.ManualActionScanScreen={Ib:null,J4:null,A3r:function(G){if(this.Ib.NY(2048))
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(3);},_Init:function(aArg){C.Mi._Init.call(this,aArg);A.
acg.Text._Init.call(this.J4={I:this},0);this.__proto__=C.ManualActionScanScreen;
this.J4.H(AYV);this.J4.KS(true);this.J4.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+
CQ)+A.aaR(A.acf.ABN));this.J4.L(A.jb.Text);this.J(this.J4,0);this.N.Cw(A.aaL(A.ach.
AeD));this.J4.S(A.aaL(A.fl.Af));this.Ib=A._GetAutoObject(C.Pn);},_Done:function(
){this.__proto__=C.Mi;this.J4._Done();C.Mi._Done.call(this);},_ReInit:function(){
C.Mi._ReInit.call(this);this.J4._ReInit();this.J4.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.ABN));this.J4.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Mi._Mark.call(this,D);if((B=this.Ib)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.J4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScanScreen"
};C.AL2={Y:null,Init:function(aArg){var B;A.zV([this,this.ABv],A._GetAutoObject(
C.AutoActions),0);A.zV([this,this.AuC],A._GetAutoObject(A.Device.Helper).W,0);A.
pe([this,this.ABv],this);A.pe([this,this.AuC],this);this.H(A.abK(this.M,AYW));this.
Y.H(A.abK(this.Y.M,A.abe([(B=this.M)[2]-B[0],B[3]-B[1]],AYX)));},BcS:function(G){
var B;var AlB=0;var Azw=0;var Bc9;var X=this.Y.Ah;var Cy=null;Bc9=((((B=this.M)[
2]-B[0])-(A._GetAutoObject(C.AutoActions).M$()*58))/2)|0;while(!!X&&!((X.U&0x200
)===0x200)){Cy=(C.Wo.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.
H(A.abK(Cy.M,AYY));Cy.H(A.abM(Cy.M,(Azw*58)+Bc9));Cy.H(A.abO(Cy.M,AlB*58));if(Azw>=
3){AlB=AlB+1;Azw=0;}else Azw=Azw+1;}X=X.Ah;}this.Bb(null);},A1P:function(Eh){var
EQ=A._GetAutoObject(C.DP).Bdb(Eh,null);this.J(EQ,0);this.BcS(this);},Ao3:function(
){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((
AdM.U&0x400)===0x400))this.HP(AdM);}},ABv:function(G){this.Ao3();var O;var CB=A.
_GetAutoObject(C.AutoActions).M$();for(O=0;O<CB;O=O+1){var Tg=A._GetAutoObject(C.
AutoActions).OG(O);this.A1P(Tg);}A.pe([this,this.BcS],this);A.pe([this,this.AuC]
,this);A.pe([this,this.BCZ],this);},AuC:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wo.isPrototypeOf(
X)?X:null);Aa.AFG(false);}X=X.Ah;}},BCZ:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wo.isPrototypeOf(
X)?X:null);var ByO=A._GetAutoObject(C.AutoActions).M$();if(!!Aa){var O;Aa.A9K(false
);for(O=0;O<ByO;O=O+1)if(Aa.Action===A._GetAutoObject(C.AutoActions).OG(O)){Aa.A9K(
true);Aa.Bng(AYZ+(O+1).toFixed());}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);this.__proto__=C.AL2;this.
Y.JV(0);this.J(this.Y,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.Y._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Y._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScreenGrid"
};C.DP={_Init:function(){C.A44._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.APE={Ll:null,T8:null,Init:function(aArg){
this.Ll.R(A._GetAutoObject(A.acj.Temperature).AlM());},_Init:function(aArg){C.Dd.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Ll={I:this},0);C.CG._Init.call(
this.T8={I:this},0);this.__proto__=C.APE;this.Ll.H(AY0);this.Ll.A6(0x12);this.Ll.
L(A.jb.Text);this.T8.H(Aot);this.T8.R((A.aaR(A.acf.Ahn)+AIp)+A.aaR(A.acf.Km));this.
T8.A6(0x12);this.T8.L(A.jb.Text);this.J(this.Ll,0);this.J(this.T8,0);this.Ll.S(A.
aaL(A.fl.Af));this.T8.S(A.aaL(A.fl.Ak));this.T8.AZ(A.aaL(A.fl.Bh));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dd;this.Ll._Done();this.T8._Done();C.Dd._Done.
call(this);},_ReInit:function(){C.Dd._ReInit.call(this);this.Ll._ReInit();this.T8.
_ReInit();this.T8.R((A.aaR(A.acf.Ahn)+AIp)+A.aaR(A.acf.Km));this.Ll.S(A.aaL(A.fl.
Af));this.T8.S(A.aaL(A.fl.Ak));this.T8.AZ(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Dd._Mark.call(this,D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
T8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdTemperatures"
};C.ADt={Jy:null,D0:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Jy={I:this},0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=
C.ADt;this.Jy.H(AY1);this.Jy.KS(true);this.Jy.A6(0x14);this.Jy.R(A.aaR(A.acf.AhT
)+AIq);this.Jy.L(A.jb.Text);this.D0.H(Aot);this.D0.KS(true);this.D0.R(A.aaR(A.acf.
AGd));this.D0.L(A.jb.Text);this.J(this.Jy,0);this.J(this.D0,0);this.Jy.S(A.aaL(A.
fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dd;this.Jy.
_Done();this.D0._Done();C.Dd._Done.call(this);},_ReInit:function(){C.Dd._ReInit.
call(this);this.Jy._ReInit();this.D0._ReInit();this.Jy.R(A.aaR(A.acf.AhT)+AIq);this.
D0.R(A.aaR(A.acf.AGd));this.Jy.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Dd._Mark.call(this,D);if((B=this.Jy)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"
};C.TY={I$:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);C.CG._Init.call(
this.I$={I:this},0);this.__proto__=C.TY;this.I$.H(AIr);this.I$.R((((A.aaR(A.acf.
RQ)+AcS)+AIs)+A.aaR(A.acf.Bao))+O9);this.I$.A6(0x12);this.I$.L(A.jb.Text);this.J(
this.I$,0);this.I$.S(A.aaL(A.fl.Af));this.I$.AZ(A.aaL(A.fl.Ak));this.I$.Cr(A.aaL(
A.fl.Bh));},_Done:function(){this.__proto__=C.Dd;this.I$._Done();C.Dd._Done.call(
this);},_ReInit:function(){C.Dd._ReInit.call(this);this.I$._ReInit();this.I$.R((((
A.aaR(A.acf.RQ)+AcS)+AIs)+A.aaR(A.acf.Bao))+O9);this.I$.S(A.aaL(A.fl.Af));this.I$.
AZ(A.aaL(A.fl.Ak));this.I$.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dd._Mark.
call(this,D);if((B=this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APG={Lm:null,Ku:null,CP:function(){this.A$A();},Init:function(aArg){this.A$A(
);},A$A:function(){this.Lm.R(A._GetAutoObject(A.acj.DU).Af4());this.Ku.R(A._GetAutoObject(
A.acj.DU).Aav());},_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lm={I:this},0);C.CG._Init.call(this.Ku={I:this},0);this.__proto__=C.APG;
this.Lm.H(AY2);this.Lm.A6(0x12);this.Lm.L(A.jb.Text);this.Ku.H(Aot);this.Ku.L(A.
jb.Text);this.J(this.Lm,0);this.J(this.Ku,0);this.Lm.S(A.aaL(A.fl.Af));this.Ku.S(
A.aaL(A.fl.Af));this.Ku.AZ(A.aaL(A.fl.Ak));this.Ku.Cr(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dd;this.Lm._Done();this.Ku._Done();C.Dd.
_Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this);this.Lm._ReInit();
this.Ku._ReInit();this.Lm.S(A.aaL(A.fl.Af));this.Ku.S(A.aaL(A.fl.Af));this.Ku.AZ(
A.aaL(A.fl.Ak));this.Ku.Cr(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.
Dd._Mark.call(this,D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ku
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANf={Mm:null,Hq:null,Ia:null,AP:null,A$:null,FW:0,AaB:0,Ic:0,AiO:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mm.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.Ia.H(this.Mm.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiO){this.Ia.R(Rp);this.Ia.L(A.jb.
Text);this.Mm.L(this.Background.AQ);}else{this.Ia.R(A._GetAutoObject(A.Device.Converter
).S_(this.FW,2,true));this.Ia.L(A._GetAutoObject(A.acj.DU).AzU(this.FW,this.Ic));
this.Mm.L(A._GetAutoObject(A.acj.DU).AzS(this.FW,this.Ic));}if(this.AaB>0)this.Hq.
R(A._GetAutoObject(A.Device.Converter).Ak$(this.AaB));else this.Hq.R(Rp);this.Hq.
L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mh=
this.AX.CF(Ad,1);var Aux=this.AX.Hv(Ad,24);var AKb=this.AX.CF(Ad,23);var Auy=this.
AX.Hv(Ad,19);this.AaB=this.AX.CF(Ad,18);if((Aux>0)&&(Aux!==Auy)){var LD=A._GetAutoObject(
A.Device.Helper).L$(Aux,Auy);if(!!LD){this.AiO=false;this.FW=A._GetAutoObject(A.
acj.DU).AlA(LD,AKb,this.AaB);}else{this.AiO=true;this.FW=0;}}else{this.AiO=true;
this.FW=0;}this.T(Mh.toFixed());this.Ic=this.AX.AmW(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mm={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.Ia={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.ANf;this.V.H(O7);this.Mm.H(Atd);this.Hq.H(AIm);this.Hq.A6(0x12);this.Hq.R(Ro);
this.Hq.L(A.jb.Text);this.Ia.H(AIn);this.Ia.R(Ro);this.Ia.L(A.jb.Text);this.AP.H(
Aor);this.AP.L(A.jb.Bc);this.A$.H(Aos);this.A$.L(A.jb.Bc);this.J(this.Mm,0);this.
J(this.Hq,0);this.J(this.Ia,0);this.J(this.AP,0);this.J(this.A$,0);this.Hq.S(A.aaL(
A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mm._Done();this.Hq._Done();this.Ia._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mm._ReInit(
);this.Hq._ReInit();this.Ia._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.Ia.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ia)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M6={Ml:null,AP:null,A$:null,Gz:null,Xs:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Ml.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Ml.M);this.Background.H([].concat(this.Ml.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gz.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gz.M[2]-1,0,this.
Gz.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gz.L(this.V.AQ
);if(!!this.Xs&&(this.Xs!==5)){this.Ml.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
Xs));this.V.L(A._GetAutoObject(A.acj.Assessment).XB(this.Xs));}else this.Ml.L(this.
Background.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var
Mh=this.AX.CF(Ad,1);var LQ=this.AX.I7(Ad,13);var AlH=this.AX.I7(Ad,17);var AlQ=this.
AX.H3(Ad,11);var Aze=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.Helper).
L$(Aze,A._GetAutoObject(A.Device.Helper).Dv());this.Xs=A._GetAutoObject(A.Device.
Helper).AMl(LQ,AlQ,AlH);this.T(Mh.toFixed());if(AfR<100)this.Gz.R((AfR.toFixed()+
CQ)+A.aaR(A.acf.AL0));else this.Gz.R(A._GetAutoObject(A.acj.KM).ACY(Aze,A._GetAutoObject(
A.Device.Helper).Dv(),AIt));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Ml={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gz={I:this
},0);this.__proto__=C.M6;this.Ml.H(Atd);this.Background.H(AY3);this.V.H(O7);this.
AP.H(Aor);this.AP.L(A.jb.Bc);this.A$.H(Aos);this.A$.L(A.jb.Bc);this.Gz.H(Ayy);this.
J(this.Ml,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gz,0);this.Gz.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Ml._Done(
);this.AP._Done();this.A$._Done();this.Gz._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Ml._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gz._ReInit();this.Gz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ml)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ANd={AjA:null,Oa:null,AP:null,A$:null,Jt:null,AKt:0,A2Q:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.Oa.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AjA.H(this.Oa.M);this.A$.H([this.Oa.M[2]-1,0,this.Oa.M[2]+1,aSize[1]]);
this.Jt.H([this.Oa.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jt.Df(this.V.AQ);if(this.AKt>0){this.AjA.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.A2Q));this.Oa.L(A._GetAutoObject(A.acj.Assessment).XB(this.A2Q));}else{
this.AjA.L(this.Background.AQ);this.Oa.L(this.V.AQ);}},Ch:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){var IA=this.AX.CF(Ad,0);var Mh=this.AX.CF(Ad,
1);this.AKt=this.AX.CF(Ad,5);this.A2Q=this.AX.I7(Ad,17);this.T(Mh.toFixed());if(
this.AKt>0)this.Oa.R(A._GetAutoObject(A.Device.Converter).Ak2(this.AKt));else this.
Oa.R(Rp);var Xr=A._GetAutoObject(A.Device.Helper).ZR(6);A._GetAutoObject(A.Device.
Device).SR(Ad);var A0Z=A._GetAutoObject(A.Device.Helper).Bjf(A._GetAutoObject(A.
Device.Device).Bt,9,IA,Xr,0);this.Jt.A92(A0Z.Get(3));this.Jt.A94(A0Z.Get(2));this.
Jt.A93(A0Z.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AjA={I:this},0);A.acg.Text._Init.call(this.Oa={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},
0);C.Jt._Init.call(this.Jt={I:this},0);this.__proto__=C.ANd;this.Oa.A6(0x12);this.
Oa.R(Ro);this.Oa.L(A.jb.Text);this.AP.H(Aor);this.AP.L(A.jb.Bc);this.A$.H(Aos);this.
A$.L(A.jb.Bc);this.Jt.H(AY4);this.J(this.AjA,0);this.J(this.Oa,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Jt,0);this.Oa.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AjA._Done();this.Oa._Done();this.AP.
_Done();this.A$._Done();this.Jt._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AjA._ReInit();this.Oa._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Jt._ReInit();this.Oa.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Oa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jt)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jt={Afq:null,
ColoredCounterAttrSet:null,ACp:0,ACq:0,ACo:0,KT:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKm;var ALG;var AKR;var AlY=0;if(this.ACo>0){AKm=this.ACo.toFixed(
);AlY+=AKm.length;}else{AKm=AY5;AlY++;}if(this.ACq>0){ALG=this.ACq.toFixed();AlY+=
ALG.length;}else{ALG=Ayz;AlY++;}if(this.ACp>0){AKR=this.ACp.toFixed();AlY+=AKR.length;
}else{AKR=AIh;AlY++;}if(AlY<=4)this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Af));else
if(AlY<=5)this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Aht(A.aaL(A.fl.Bh));this.Afq.R(((((AY6+AKm)+AY7)+ALG)+AY8)+AKR);},A93:function(E
){if(this.ACp===E)return;this.ACp=E;this.Am();},A94:function(E){if(this.ACq===E)
return;this.ACq=E;this.Am();},A92:function(E){if(this.ACo===E)return;this.ACo=E;
this.Am();},Df:function(E){if(this.KT===E)return;this.KT=E;this.ColoredCounterAttrSet.
Ahq(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuU._Init.call(
this.Afq={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jt;this.H(AIu);this.Afq.A0(0x3F);this.Afq.H(AIu);this.
Afq.R(Ro);this.ColoredCounterAttrSet.Bml(A.jb.E1);this.ColoredCounterAttrSet.A9T(
A.jb.H9);this.ColoredCounterAttrSet.A9S(A.jb.Gj);this.ColoredCounterAttrSet.Ahq(
A.jb.Text);this.KT=A.jb.Text;this.J(this.Afq,0);this.Afq.A9N(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9P(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afq._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afq._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Aht(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANc={AtJ:null
,Acb:null,Acc:null,Acd:null,Jt:null,AP:null,A$:null,Ea:null,Lt:null,AcA:null,KU:
null,KV:null,AJy:0,AJx:0,AJw:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acb.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcA.H(this.
Acb.M);this.A$.H([this.Acb.M[2]-1,0,this.Acb.M[2]+1,aSize[1]]);this.Acc.H([this.
Acb.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KU.H(this.Acc.M);this.Ea.H([this.
Acc.M[2]-1,0,this.Acc.M[2]+1,aSize[1]]);this.Acd.H([this.Acc.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KV.H(this.Acd.M);this.Lt.H([this.Acd.M[2]-1,0,this.Acd.
M[2]+1,aSize[1]]);this.Jt.H([this.Acd.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jt.Df(this.V.AQ);this.Acb.L(A._GetAutoObject(A.acj.
Assessment).Qr(this.AJw));this.Acc.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
AJx));this.Acd.L(A._GetAutoObject(A.acj.Assessment).Qr(this.AJy));this.AcA.L(A._GetAutoObject(
A.acj.Assessment).XB(this.AJw));this.KU.L(A._GetAutoObject(A.acj.Assessment).XB(
this.AJx));this.KV.L(A._GetAutoObject(A.acj.Assessment).XB(this.AJy));this.AcA.Z(
!this.AJw);this.KU.Z(!this.AJx);this.KV.Z(!this.AJy);this.Jt.A92(this.AtJ.Get(3)
);this.Jt.A94(this.AtJ.Get(2));this.Jt.A93(this.AtJ.Get(1));},Ch:function(Ad){if(
!this.AX)return;this.Hs=Ad;if(!!this.AX){var IA=this.AX.CF(Ad,0);var Mh=this.AX.
CF(Ad,1);this.T(Mh.toFixed());A._GetAutoObject(A.Device.Device).SR(Ad);this.AJw=
A._GetAutoObject(A.Device.Helper).A2q(A._GetAutoObject(A.Device.Device).Bt,IA,0);
this.AJx=A._GetAutoObject(A.Device.Helper).A2q(A._GetAutoObject(A.Device.Device).
Bt,IA,-1);this.AJy=A._GetAutoObject(A.Device.Helper).A2q(A._GetAutoObject(A.Device.
Device).Bt,IA,-2);this.AtJ=A._GetAutoObject(A.Device.Helper).A6R(A._GetAutoObject(
A.Device.Device).Bt,IA,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Acb={I:this},0);A.acg.AL._Init.call(this.Acc={I:
this},0);A.acg.AL._Init.call(this.Acd={I:this},0);C.Jt._Init.call(this.Jt={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Lt={I:this
},0);A.acg.Text._Init.call(this.AcA={I:this},0);A.acg.Text._Init.call(this.KU={I:
this},0);A.acg.Text._Init.call(this.KV={I:this},0);this.__proto__=C.ANc;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Lt.L(A.jb.Bc);this.AcA.R(Aou
);this.KU.R(Aou);this.KV.R(Aou);this.J(this.Acb,0);this.J(this.Acc,0);this.J(this.
Acd,0);this.J(this.Jt,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.Lt,0);this.J(this.AcA,0);this.J(this.KU,0);this.J(this.KV,0);this.AcA.S(A.
aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.AtJ=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acb._Done();this.Acc._Done();this.Acd._Done();this.Jt._Done();this.AP.
_Done();this.A$._Done();this.Ea._Done();this.Lt._Done();this.AcA._Done();this.KU.
_Done();this.KV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acb._ReInit();this.Acc._ReInit();this.Acd._ReInit();this.Jt._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Lt._ReInit();this.AcA.
_ReInit();this.KU._ReInit();this.KV._ReInit();this.AcA.S(A.aaL(A.fl.Af));this.KU.
S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jt)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmZ={H7:null,Af6:false,Bl:function(aSize){var
B;this.H7.H([(aSize[0]-((B=this.H7.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H7.M[0]-10,40]);C.TI.Bl.call(this,aSize);},Ai:function(Ae){C.TI.Ai.call(
this,Ae);if(this.Af6)this.H7.Cv(1);else this.H7.Cv(0);},Ke:function(G){if(this.Af6
)C.TI.Ke.call(this,G);},J$:function(G){if(this.Af6)C.TI.J$.call(this,G);},Tt:function(
AI){C.TI.Tt.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.Af6=true;this.Zz(
true);}else{this.H(A.abI(this.M,40));this.Af6=false;this.Zz(false);}},_Init:function(
aArg){C.TI._Init.call(this,aArg);A.acg.Ap._Init.call(this.H7={I:this},0);this.__proto__=
C.AmZ;this.V.A6(0x11);this.H7.H(AHP);this.H7.Cv(0);this.J(this.H7,0);this.V.Cr(A.
aaL(A.fl.Bh));this.H7.Ax(A.aaL(A.ach.AqO));},_Done:function(){this.__proto__=C.TI;
this.H7._Done();C.TI._Done.call(this);},_ReInit:function(){C.TI._ReInit.call(this
);this.H7._ReInit();this.V.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TI._Mark.
call(this,D);if((B=this.H7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AGc={_Init:function(aArg){C.Axo._Init.call(this,aArg);this.__proto__=C.AGc;}
,_className:"Application::OptionsOverlaySeparator"};C.AkI={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axo._Init.call(this,aArg);this.__proto__=C.AkI;},_className:"Application::OptionsOverlayNode"
};C.ZB={AR:null,_Init:function(aArg){C.AkI._Init.call(this,aArg);this.__proto__=
C.ZB;},_Mark:function(D){var B;C.AkI._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANI={Ai:function(Ae){C.OX.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(
this.Hl){FS=A.jb.Text;GY=A.jb.Bm;}this.Background.L(FS);this.V.L(GY);},_Init:function(
aArg){C.OX._Init.call(this,aArg);this.__proto__=C.ANI;},_className:"Application::DarkThemeTextItem"
};C.OX={Background:null,BU:null,V:null,Aqv:0,Hl:false,Init:function(aArg){},Bl:function(
aSize){C.Hi.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hi.Ai.call(this,Ae);this.BU.L(this.Aqv);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bi:function(E){if(this.Hl===E)return;this.Hl=E;this.Am();
},ArL:function(E){if(this.Aqv===E)return;this.Aqv=E;this.Am();},_Init:function(aArg
){C.Hi._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.OX;this.H(BD);this.Background.H(AIv);this.BU.H(BD);this.BU.Nm(2);this.BU.L(A.jb.
Ri);this.V.H(AY9);this.Aqv=A.jb.Ri;this.J(this.Background,0);this.J(this.BU,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);this.BU._Done();this.V._Done();C.Hi._Done.call(this);},_ReInit:function(){C.Hi.
_ReInit.call(this);this.Background._ReInit();this.BU._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APJ={Es:null,IP:null
,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.Es={
I:this},0);A.acg.Text._Init.call(this.IP={I:this},0);this.__proto__=C.APJ;this.H(
O6);this.Background.H(O6);this.Es.H(AIw);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11
);this.Es.L(A.jb.Text);this.IP.A0(0x3F);this.IP.H(AIx);this.IP.Hn(5);this.IP.A6(
0x14);this.IP.R(A.aaR(A.acf.AGW));this.IP.L(A.jb.Text);this.J(this.Es,0);this.J(
this.IP,0);this.Es.S(A.aaL(A.fl.Af));this.IP.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.IP._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.IP._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.IP.R(A.aaR(A.acf.AGW));this.Es.S(A.aaL(A.fl.Af));this.IP.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sq:null,Sr:null,AeE:null,Ag8:null,QM:null
,KT:0,LastTemperature:0,AqB:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sq.Ax(A.aaL(A.ach.AvJ));this.Sr.Ax(A.aaL(A.ach.AvJ));}break;case 2:{this.Sq.Ax(A.
aaL(A.ach.AvM));this.Sr.Ax(A.aaL(A.ach.AvM));}break;default:{this.Sq.Ax(A.aaL(A.
ach.Aez));this.Sr.Ax(A.aaL(A.ach.Aez));}}this.Sq.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.AqB));var ApO;if(this.IsWatch)ApO=A.aaL(A.ach.AQN);else if(this.IsFever
){ApO=A.aaL(A.ach.AQM);switch(A._GetAutoObject(A.Device.Converter).Ajn(this.LastTemperature
,this.AnimalType)){case 3:this.QM.L(A.jb.Gj);break;case 2:this.QM.L(A.jb.H9);break;
case 1:this.QM.L(A.jb.E1);break;case 0:this.QM.L(A.jb.Afu);break;default:;}}else
if(this.IsAlarm){ApO=A.aaL(A.ach.AQL);if(!this.AqB||(this.AqB===5))this.QM.L(A.jb.
Gj);else this.QM.L(0xFF000000);}else ApO=null;this.AeE.Ax(ApO);this.Ag8.Ax(ApO);
this.QM.Ax(ApO);if(A._GetAutoObject(A.acj.Assessment).Qr(this.AqB)===A.jb.E1)this.
Sr.L(this.KT);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AE$:function(E){if(this.AqB===E)return;this.AqB=E;this.Am();},Df:function(
E){if(this.KT===E)return;this.KT=E;this.Am();},Ae7:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Ur:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae3:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae9:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E6:function(){this.EC(0);this.AE$(0);this.Ae3(false);this.Ur(false
);this.Ae7(false);this.Ae9(0);this.Df(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sq={I:this},0);A.acg.Ap._Init.call(
this.Sr={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap._Init.call(
this.Ag8={I:this},0);A.acg.Ap._Init.call(this.QM={I:this},0);this.__proto__=C.DS;
this.H(Alj);this.Sq.A0(0x3F);this.Sq.H(Alj);this.Sq.L(A.jb.CJ);this.Sq.A6(0x12);
this.Sq.Cv(0);this.Sr.A0(0x3F);this.Sr.H(Alj);this.Sr.L(0xFF000000);this.Sr.A6(0x12
);this.Sr.Cv(1);this.AeE.A0(0x3F);this.AeE.H(Alj);this.AeE.L(0xFF000000);this.AeE.
Cv(0);this.Ag8.A0(0x3F);this.Ag8.H(Alj);this.Ag8.Cv(1);this.QM.A0(0x3F);this.QM.
H(Alj);this.QM.L(A.jb.CT);this.QM.Cv(2);this.KT=A.jb.Text;this.J(this.Sq,0);this.
J(this.Sr,0);this.J(this.AeE,0);this.J(this.Ag8,0);this.J(this.QM,0);this.Sq.Ax(
A.aaL(A.ach.Aez));this.Sr.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=
A.Core.P;this.Sq._Done();this.Sr._Done();this.AeE._Done();this.Ag8._Done();this.
QM._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sq._ReInit();this.Sr._ReInit();this.AeE._ReInit();this.Ag8._ReInit();
this.QM._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AM$={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(!!this.AX){var BAo=this.AX.H3(
Ad,12);var ByG=this.AX.Sm(Ad,15);this.Abf.R(A._GetAutoObject(A.Device.Helper).L$(
ByG,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Ss.Z(BAo);this.Am();
}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=C.AM$;},_className:
"Application::CalfListAlarmItem"};C.ADp={D0:null,Mu:null,_Init:function(aArg){C.
TZ._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mu={I:this},0);this.__proto__=C.ADp;this.D0.H(Aot);this.D0.KS(true);this.
D0.R(A.aaR(A.acf.A57));this.D0.L(A.jb.Text);this.Mu.H(AY_);this.Mu.Ja(false);this.
Mu.L(A.jb.Text);this.Mu.A6(0x12);this.J(this.D0,-2);this.J(this.Mu,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mu.Ax(A.aaL(A.ach.ADO));},_Done:function(){this.__proto__=C.
TZ;this.D0._Done();this.Mu._Done();C.TZ._Done.call(this);},_ReInit:function(){C.
TZ._ReInit.call(this);this.D0._ReInit();this.Mu._ReInit();this.D0.R(A.aaR(A.acf.
A57));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TZ._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kl={Background:null,BU:
null,ACQ:0,AB5:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACQ);this.BU.L(this.AB5);},AwK:function(E){if(this.ACQ===E)return;this.ACQ=E;this.
Am();},AE3:function(E){if(this.AB5===E)return;this.AB5=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Kl;this.H(Aov);this.
Background.A0(0x3C);this.Background.H(Aov);this.Background.Cv(1);this.BU.A0(0x3C
);this.BU.H(Aov);this.ACQ=A.jb.E1;this.AB5=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Ax(A.aaL(A.ach.Kl));this.BU.Ax(A.aaL(A.ach.Kl));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmH={Q:null,Ps:
null,A7w:false,Bl:function(aSize){C.Mq.Bl.call(this,aSize);this.V.H([].concat(this.
Ps.M[2]-this.V.Text.Jd,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mq.Ai.call(this
,Ae);this.Ps.L(this.V.AQ);},AwP:function(E){if(this.A7w===E)return;this.A7w=E;if(
E)this.Ps.R(AY$);else this.Ps.R(AIy);},ID:function(G){var F;if(!!this.Q)this.AwP((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.ID],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.ID],E,0);if(!!E)
A.pe([this,this.ID],this);},_Init:function(aArg){C.Mq._Init.call(this,aArg);A.acg.
Text._Init.call(this.Ps={I:this},0);this.__proto__=C.AmH;this.Ps.A0(0x34);this.Ps.
H(UX);this.Ps.R(AIy);this.J(this.Ps,0);this.Ps.S(A.aaL(A.fl.AOC));},_Done:function(
){this.__proto__=C.Mq;this.Ps._Done();C.Mq._Done.call(this);},_ReInit:function(){
C.Mq._ReInit.call(this);this.Ps._ReInit();},_Mark:function(D){var B;C.Mq._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ps)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AO1={DX:function(G){C.Kr.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(4));},_Init:function(aArg){C.Kr._Init.call(this,aArg);this.__proto__=C.AO1;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Du:function(){return 3;},C6:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BS(aIndex);},DZ:function(A7){return A7;},H4:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APK={Go:null,Ll:null,YT:null,Init:function(aArg){this.Ll.R(A._GetAutoObject(
A.acj.Temperature).AlM());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.call(this.Ll={I:this},0);A.
acg.Text._Init.call(this.YT={I:this},0);this.__proto__=C.APK;this.Background.L(A.
jb.Text);this.Go.H(AIz);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date));this.Go.L(
A.jb.Bm);this.Ll.H(AIA);this.Ll.A6(0x12);this.Ll.L(A.jb.Bm);this.YT.H(AZa);this.
YT.A6(0x12);this.YT.R(A.aaR(A.acf.Bs));this.YT.L(A.jb.Bm);this.J(this.Go,0);this.
J(this.Ll,0);this.J(this.YT,0);this.Go.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af
));this.YT.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Go._Done();this.Ll._Done();this.YT._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Go._ReInit();this.Ll._ReInit();this.YT._ReInit(
);this.Go.R(A.aaR(A.acf.Date));this.YT.R(A.aaR(A.acf.Bs));this.Go.S(A.aaL(A.fl.Af
));this.Ll.S(A.aaL(A.fl.Af));this.YT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TC={Lf:null,AjR:false,Init:function(
aArg){var B;A.zX([this,this.BbS],[B=A._GetAutoObject(A.Device.Device),B.AEB,B.AIQ
],0);this.AGP(this);A.pe([this,this.AoA],this);},DE:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Op(this);break;case 7:this.MZ(
this);break;default:D5.NL=true;}},CC:function(G){var B;if(!!this.Lf)this.Lf.CC(this
);C.AB.CC.call(this,G);},E4:function(G){var B;if(!!this.Lf)this.Lf.E4(this);C.AB.
E4.call(this,G);},Anp:function(G){A._GetAutoObject(C.A8).FB();},AGP:function(G){
var B;if(!!this.Lf){this.Lf.E4(this);this.HP(this.Lf);}if(this.AjR)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMs,0);break;case 1:this.Lf=A.
_NewObject(C.AMt,0);break;case 3:this.Lf=A._NewObject(C.AMr,0);break;case 2:this.
Lf=A._NewObject(C.AMu,0);break;default:throw new Error(AyA);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMv,0);break;case 1:this.Lf=A.
_NewObject(C.AME,0);break;case 3:this.Lf=A._NewObject(C.AMy,0);break;case 2:this.
Lf=A._NewObject(C.AMJ,0);break;default:throw new Error(AyA);}this.HQ(this);this.
J(this.Lf,0);this.Lf.H(Ff);this.Lf.Zw([this,this.A0L]);this.Lf.CC(this);this.Bb(
this.Lf);},BbS:function(s){this.AGP(s);},Boe:function(G){A._GetAutoObject(A.Device.
Device).AeX(0);},ATY:function(G){A._GetAutoObject(A.Device.Device).AeX(1);},ATX:
function(G){A._GetAutoObject(A.Device.Device).AeX(3);},ATZ:function(G){A._GetAutoObject(
A.Device.Device).AeX(2);},HQ:function(G){this.N.C1(A.aaL(A.ach.E2));this.N.Hy(A.
jV);this.N.CE=[this,this.Anp];this.N.AFf(A.aaL(A.fl.Ak));},AoA:function(s){this.
HQ(s);},Bm1:function(E){if(this.AjR===E)return;this.AjR=E;A.pe([this,this.BbS],this
);},A_5:function(G){this.Bm1(!this.AjR);},Boh:function(G){A._GetAutoObject(A.Device.
Device).A3(31,true,A.jV,0,null);},MZ:function(G){},BG1:function(s){this.MZ(s);},
Op:function(G){},BG0:function(s){this.Op(s);},Bff:function(G){var FQ=A._GetAutoObject(
A.Device.Device).D9;FQ=FQ+1;if(FQ>=4)FQ=0;A._GetAutoObject(A.Device.Device).AeX(
FQ);},BBi:function(G){var FQ=A._GetAutoObject(A.Device.Device).D9;FQ=FQ-1;if(FQ<
0)FQ=3;A._GetAutoObject(A.Device.Device).AeX(FQ);},Af$:function(G){},A0L:function(
s){this.Af$(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TC;this.Background.H(Ce);this.N.Z(true);this.N.OQ(true);this.N.OR(true);this.Dr(
C.APz);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lf)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dn:null,CC:function(G){},AIP:function(s){this.CC(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyJ:function(s){
this.E4(s);},Zw:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dn.BL=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=
C.D9;this.H(U0);this.AttrSet.A9T(A.jb.Gj);this.AttrSet.A9S(A.jb.H9);this.AttrSet.
Ahq(A.jb.Text);this.Dn.Filter=1;this.AttrSet.Aht(A.aaL(A.fl.Ak));this.AttrSet.A9P(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dn._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dn._ReInit();this.AttrSet.Aht(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMv={RU:
null,AaY:null,TB:null,TA:null,RZ:null,QE:null,R0:null,RX:null,RY:null,RW:null,CP:
function(){var B;this.RU.Ch(this);this.AaY.Ch(this);this.TB.Ch(this);this.TA.Ch(
this);this.RZ.Ch(this);this.QE.Ch(this);this.R0.Ch(this);this.RX.Ch(this);this.RY.
Ch(this);this.RW.Ch(this);},GH:function(G){C.R1.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RU.Z(true);this.AaY.Z(false);
this.RX.Z(false);this.RY.Z(false);this.RW.Z(false);this.RZ.Z(true);this.QE.Z(true
);this.R0.Z(true);}break;case 1:{this.RU.Z(false);this.AaY.Z(true);this.RX.Z(true
);this.RY.Z(true);this.RW.Z(true);this.RZ.Z(false);this.QE.Z(false);this.R0.Z(false
);}break;default:A.ab5("%s%e",Alf,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MS],this);},_Init:function(aArg){C.R1._Init.call(this,aArg);C.
RU._Init.call(this.RU={I:this},0);C.AMq._Init.call(this.AaY={I:this},0);C.TB._Init.
call(this.TB={I:this},0);C.TA._Init.call(this.TA={I:this},0);C.RZ._Init.call(this.
RZ={I:this},0);C.QE._Init.call(this.QE={I:this},0);C.R0._Init.call(this.R0={I:this
},0);C.RX._Init.call(this.RX={I:this},0);C.RY._Init.call(this.RY={I:this},0);C.RW.
_Init.call(this.RW={I:this},0);this.__proto__=C.AMv;this.RU.H(BD);this.RU.Aj(true
);this.RU.Bi(false);this.AaY.H(IW);this.AaY.Aj(true);this.AaY.Bi(false);this.TB.
H(Qd);this.TB.Aj(true);this.TB.Bi(true);this.TA.H(Aaf);this.TA.Aj(true);this.TA.
Bi(false);this.RZ.H(Alh);this.RZ.Aj(true);this.RZ.Bi(true);this.QE.H(Aop);this.QE.
Aj(true);this.QE.Bi(false);this.R0.H(As9);this.R0.Aj(true);this.R0.Bi(true);this.
RX.H(Xi);this.RX.Aj(true);this.RX.Bi(true);this.RY.H(AZb);this.RY.Aj(true);this.
RY.Bi(false);this.RW.H(AZc);this.RW.Aj(true);this.RW.Bi(true);this.J(this.RU,0);
this.J(this.AaY,0);this.J(this.TB,0);this.J(this.TA,0);this.J(this.RZ,0);this.J(
this.QE,0);this.J(this.R0,0);this.J(this.RX,0);this.J(this.RY,0);this.J(this.RW,
0);},_Done:function(){this.__proto__=C.R1;this.RU._Done();this.AaY._Done();this.
TB._Done();this.TA._Done();this.RZ._Done();this.QE._Done();this.R0._Done();this.
RX._Done();this.RY._Done();this.RW._Done();C.R1._Done.call(this);},_ReInit:function(
){C.R1._ReInit.call(this);this.RU._ReInit();this.AaY._ReInit();this.TB._ReInit();
this.TA._ReInit();this.RZ._ReInit();this.QE._ReInit();this.R0._ReInit();this.RX.
_ReInit();this.RY._ReInit();this.RW._ReInit();this.CP();},_Mark:function(D){var B;
C.R1._Mark.call(this,D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMJ={AkU:function(L4){if(!L4)return;var Fy=A._NewObject(
A.Device.Filter,0);var HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CW(HW);var Ac_=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fy.CW(Ac_);L4.Bk(Fy);
},AD3:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pk=A.
_GetAutoObject(A.Device.Device).Bt.B9();if(Pk<2)return false;var BCJ=A._GetAutoObject(
A.Device.Device).Bt.Hv(0,6);var BCK=A._GetAutoObject(A.Device.Device).Bt.Hv(Pk-1
,6);var A2f=A._NewObject(A.Core.Bs,0);A2f.Initialize(BCJ);var A4l=A._NewObject(A.
Core.Bs,0);A4l.Initialize(BCK);if((A2f.AbY()!==A4l.AbY())||(A2f.Year!==A4l.Year)
)return true;else return false;},_Init:function(aArg){C.Aa0._Init.call(this,aArg
);this.__proto__=C.AMJ;this.ATr(C.AHn);this.ATs(C.ADv);this.ATh(C.QE);this.ArR(A.
aaR(A.acf.AVW));this.Dk(A.aaR(A.acf.Akm));},_ReInit:function(){C.Aa0._ReInit.call(
this);this.ArR(A.aaR(A.acf.AVW));this.Dk(A.aaR(A.acf.Akm));},_className:"Application::AnimalWeights"
};C.AME={AkU:function(L4){if(!L4)return;var Fy=A._NewObject(A.Device.Filter,0);var
HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CW(HW);var ABi=A._NewObject(A.Device.Int32FilterCriterion
,0);ABi.Initialize(7,2,0,true);Fy.CW(ABi);L4.Bk(Fy);},AD3:function(){return A._GetAutoObject(
A.Device.Device).Bt.B9()>0;},_Init:function(aArg){C.Aa0._Init.call(this,aArg);this.
__proto__=C.AME;this.ATr(C.AVg);this.ATs(C.APK);this.ATh(C.TB);this.ArR(A.aaR(A.
acf.A7U));this.Dk(A.aaR(A.acf.Art));},_ReInit:function(){C.Aa0._ReInit.call(this
);this.ArR(A.aaR(A.acf.A7U));this.Dk(A.aaR(A.acf.Art));},_className:"Application::AnimalTemperatures"
};C.AUm={VE:null,VF:null,X0:null,AgI:null,KA:null,AP:null,A$:null,Ea:null,Lt:null
,AnU:null,KU:null,KV:null,ZO:null,ZP:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.KA.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VE.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VE.M[2]-1,0,this.VE.M[2]+1,aSize[1]]);this.VF.H([this.VE.M[2],0,this.VE.M[2]+22,
aSize[1]]);this.Lt.H([this.VF.M[2]-1,0,this.VF.M[2]+1,aSize[1]]);this.X0.H([this.
VF.M[2],0,this.VF.M[2]+22,aSize[1]]);this.AnU.H([this.X0.M[2]-1,0,this.X0.M[2]+1
,aSize[1]]);this.AgI.H([this.X0.M[2],0,aSize[0],aSize[1]]);this.KU.H(this.VE.M);
this.KV.H(this.VF.M);this.ZO.H(this.X0.M);this.ZP.H(this.AgI.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.KA.L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hv(Ad,6);var A1x=this.AX.I7(Ad,3);var A2b=
this.AX.I7(Ad,2);var A2a=this.AX.I7(Ad,5);var A3$=this.AX.I7(Ad,4);this.T(A._GetAutoObject(
A.acj.KM).ACX(AlD));this.KA.R(A._GetAutoObject(A.acj.KM).A6L(AlD));this.VE.L(A._GetAutoObject(
A.acj.Assessment).Qr(A1x));this.VF.L(A._GetAutoObject(A.acj.Assessment).Qr(A2b));
this.X0.L(A._GetAutoObject(A.acj.Assessment).Qr(A2a));this.AgI.L(A._GetAutoObject(
A.acj.Assessment).Qr(A3$));this.KU.L(A._GetAutoObject(A.acj.Assessment).XB(A1x));
this.KV.L(A._GetAutoObject(A.acj.Assessment).XB(A2b));this.ZO.L(A._GetAutoObject(
A.acj.Assessment).XB(A2a));this.ZP.L(A._GetAutoObject(A.acj.Assessment).XB(A3$));
this.KU.Z(A1x===5);this.KV.Z(A2b===5);this.ZO.Z(A2a===5);this.ZP.Z(A3$===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
VE={I:this},0);A.acg.AL._Init.call(this.VF={I:this},0);A.acg.AL._Init.call(this.
X0={I:this},0);A.acg.AL._Init.call(this.AgI={I:this},0);A.acg.Text._Init.call(this.
KA={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Lt={I:this},0);A.acg.AL._Init.call(this.AnU={I:this},0);A.acg.Text._Init.call(this.
KU={I:this},0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(this.
ZO={I:this},0);A.acg.Text._Init.call(this.ZP={I:this},0);this.__proto__=C.AUm;this.
V.H(O7);this.VE.H(AZd);this.VF.H(AZe);this.X0.H(AZf);this.AgI.H(AZg);this.KA.R(Ro
);this.KA.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lt.L(A.jb.Bc);this.AnU.L(A.jb.Bc);this.KU.H(AZh);this.KU.R(Rp);this.KV.H(AZi
);this.KV.R(Rp);this.ZO.H(AZj);this.ZO.R(Rp);this.ZP.H(AZk);this.ZP.R(Rp);this.J(
this.VE,0);this.J(this.VF,0);this.J(this.X0,0);this.J(this.AgI,0);this.J(this.KA
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Lt,0);this.
J(this.AnU,0);this.J(this.KU,0);this.J(this.KV,0);this.J(this.ZO,0);this.J(this.
ZP,0);this.KA.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af
));this.ZO.S(A.aaL(A.fl.Af));this.ZP.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VE._Done();this.VF._Done();this.X0._Done();this.AgI._Done(
);this.KA._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Lt._Done(
);this.AnU._Done();this.KU._Done();this.KV._Done();this.ZO._Done();this.ZP._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VE._ReInit(
);this.VF._ReInit();this.X0._ReInit();this.AgI._ReInit();this.KA._ReInit();this.
AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Lt._ReInit();this.AnU._ReInit(
);this.KU._ReInit();this.KV._ReInit();this.ZO._ReInit();this.ZP._ReInit();this.KA.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.ZO.S(
A.aaL(A.fl.Af));this.ZP.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VF)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lt)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.API={Go:null,YZ:null,YV:null,YW:null,YX:null,YY:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Go={I:this},0);A.acg.Text._Init.call(this.YZ={I:this},0);A.acg.Text._Init.call(this.
YV={I:this},0);A.acg.Text._Init.call(this.YW={I:this},0);A.acg.Text._Init.call(this.
YX={I:this},0);A.acg.Text._Init.call(this.YY={I:this},0);this.__proto__=C.API;this.
Background.L(A.jb.Text);this.Go.H(AIz);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date
));this.Go.L(A.jb.Bm);this.YZ.H(AIr);this.YZ.A6(0x12);this.YZ.R(A.aaR(A.acf.Bs));
this.YZ.L(A.jb.Bm);this.YV.H(AZl);this.YV.A6(0x12);this.YV.R(A.aaR(A.acf.AUo));this.
YV.L(A.jb.Bm);this.YW.H(AZm);this.YW.A6(0x12);this.YW.R(A.aaR(A.acf.AUp));this.YW.
L(A.jb.Bm);this.YX.H(AZn);this.YX.A6(0x12);this.YX.R(A.aaR(A.acf.AOy));this.YX.L(
A.jb.Bm);this.YY.H(AZo);this.YY.A6(0x12);this.YY.R(A.aaR(A.acf.ANz));this.YY.L(A.
jb.Bm);this.J(this.Go,0);this.J(this.YZ,0);this.J(this.YV,0);this.J(this.YW,0);this.
J(this.YX,0);this.J(this.YY,0);this.Go.S(A.aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af
));this.YV.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af));
this.YY.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Go._Done();
this.YZ._Done();this.YV._Done();this.YW._Done();this.YX._Done();this.YY._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Go._ReInit(
);this.YZ._ReInit();this.YV._ReInit();this.YW._ReInit();this.YX._ReInit();this.YY.
_ReInit();this.Go.R(A.aaR(A.acf.Date));this.YZ.R(A.aaR(A.acf.Bs));this.YV.R(A.aaR(
A.acf.AUo));this.YW.R(A.aaR(A.acf.AUp));this.YX.R(A.aaR(A.acf.AOy));this.YY.R(A.
aaR(A.acf.ANz));this.Go.S(A.aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af));this.YV.S(A.
aaL(A.fl.Af));this.YW.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af));this.YY.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Go)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMy={AkU:function(L4){if(!L4)return;
var Fy=A._NewObject(A.Device.Filter,0);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CW(HW);var
AA1=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA1.Initialize(3,5,0,true
);Fy.CW(AA1);L4.Bk(Fy);},AD3:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B9()>0;},_Init:function(
aArg){C.Aa0._Init.call(this,aArg);this.__proto__=C.AMy;this.ATr(C.AUm);this.ATs(
C.API);this.ATh(C.TA);this.ArR(A.aaR(A.acf.Axt));this.Dk(A.aaR(A.acf.Ano));},_ReInit:
function(){C.Aa0._ReInit.call(this);this.ArR(A.aaR(A.acf.Axt));this.Dk(A.aaR(A.acf.
Ano));},_className:"Application::AnimalRatings"};C.IH={B6:null,Y:null,V:null,Uv:
5,T:function(E){C.I4.T.call(this,E);this.V.R(E);},Df:function(E){C.I4.Df.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuY:function(G){var B;var ND=(A.Core.Y.isPrototypeOf(G)?G:null);if(!ND)return;
if(((B=ND.Dc(0x1))[2]-B[0])>((B=ND.M)[2]-B[0]))this.S(A.aaL(A.fl.HJ));},Kv:function(
E){if(this.Uv===E)return;this.Uv=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAV:function(G){A.pe([this,this.AuY],this);},_Init:function(aArg){C.I4._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IH;this.Y.A0(0x3F);this.Y.H(AIB);this.Y.A_K(5);this.
Y.JV(3);this.V.A0(0x34);this.V.H(Aah);this.V.Ja(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.Em=[this,this.
AAV];this.V.S(A.aaL(A.fl.Kp));},_Done:function(){this.__proto__=C.I4;this.Y._Done(
);this.V._Done();C.I4._Done.call(this);},_ReInit:function(){C.I4._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kp));},_Mark:function(D){
var B;C.I4._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RU={AfR:0,Ai:function(Ae){C.FA.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RQ));if(this.AfR>=0)this.Kx((this.AfR.toFixed(
)+CQ)+A.aaR(A.acf.Km));else this.Kx(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.
Ch.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfR=-1;
else this.AfR=A._GetAutoObject(A.Device.Helper).W.RQ();this.Am();},_Init:function(
aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RU;},_className:"Application::AnimalInfoItemAge"
};C.RZ={A4R:0,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afv));if(
this.A4R>0)this.Kx((A._GetAutoObject(A.Device.Converter).Ak$(this.A4R)+CQ)+A._GetAutoObject(
A.acj.DU).Af4());else this.Kx(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(
this,G);this.A4R=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RZ;},_className:
"Application::AnimalInfoItemWeight"};C.TB={Y:null,Ei:null,Ey:null,Fe:null,P0:null
,Fd:null,P1:null,Aji:0,Pj:0,CP:function(){this.Am();},Ai:function(Ae){C.JM.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Big));this.Fe.R(this.Aji.toFixed());this.Fd.R(this.Pj.
toFixed());if(!!this.Aji||!!this.Pj)this.P1.R(AZp+(this.Aji+this.Pj).toFixed());
else this.P1.R(A.aaR(A.acf.ASn));},Ch:function(G){C.JM.Ch.call(this,G);var Ak1;Ak1=
A._GetAutoObject(A.Device.Helper).Bjg(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Aji=Ak1.Get(2);this.Pj=Ak1.Get(1);this.Am();},Df:
function(E){C.JM.Df.call(this,E);this.P0.L(E);this.P1.L(E);},AsP:function(G){if(
!!this.Aji||!!this.Pj){this.Fe.Z(true);this.P0.Z(true);this.Fd.Z(true);}else{this.
Fe.Z(false);this.P0.Z(false);this.Fd.Z(false);}this.Ei.H(this.Fe.M);this.Ei.Z(this.
Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq());},AuY:function(G){var B;var
ND=(A.Core.Y.isPrototypeOf(G)?G:null);if(!ND)return;if(((B=ND.Dc(0x1))[2]-B[0])>((
B=ND.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.P0.S(A.aaL(A.fl.Ak));this.Fe.S(
A.aaL(A.fl.Ak));this.P1.S(A.aaL(A.fl.Ak));}},AAV:function(G){A.pe([this,this.AuY
],this);},_Init:function(aArg){C.JM._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.Ey={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
P0={I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
P1={I:this},0);this.__proto__=C.TB;this.Y.H(AyB);this.Y.BnY(0);this.Y.JV(3);this.
Ei.H(AZq);this.Ei.L(A.jb.H9);this.Ey.H(Ayy);this.Ey.L(A.jb.Gj);this.Fe.A0(0x34);
this.Fe.H(Aah);this.Fe.Hn(2);this.Fe.Ja(true);this.Fe.R(U2);this.Fe.L(A.jb.Text);
this.Fe.Aj(true);this.P0.A0(0x34);this.P0.H(Aah);this.P0.Ja(true);this.P0.R(AIi);
this.P0.L(A.jb.Text);this.P0.Aj(true);this.Fd.A0(0x34);this.Fd.H(Aah);this.Fd.Hn(
2);this.Fd.Ja(true);this.Fd.R(U2);this.Fd.L(A.jb.Bm);this.Fd.Aj(true);this.P1.A0(
0x34);this.P1.H(Aah);this.P1.Ja(true);this.P1.R(Ro);this.P1.L(A.jb.Text);this.P1.
Aj(true);this.J(this.Y,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.Fe,0);
this.J(this.P0,0);this.J(this.Fd,0);this.J(this.P1,0);this.Y.Em=[this,this.AAV];
this.Fe.Q7([this,this.AsP]);this.Fe.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));
this.Fd.Q7([this,this.AsP]);this.Fd.S(A.aaL(A.fl.Af));this.P1.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JM;this.Y._Done();this.Ei._Done();this.Ey._Done(
);this.Fe._Done();this.P0._Done();this.Fd._Done();this.P1._Done();C.JM._Done.call(
this);},_ReInit:function(){C.JM._ReInit.call(this);this.Y._ReInit();this.Ei._ReInit(
);this.Ey._ReInit();this.Fe._ReInit();this.P0._ReInit();this.Fd._ReInit();this.P1.
_ReInit();this.Fe.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.
fl.Af));this.P1.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JM._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fe
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QE={FW:0,Ic:0
,A2F:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(AZr+A.aaR(A.acf.AHi));if(
this.A2F){this.Kx((A._GetAutoObject(A.Device.Converter).S_(this.FW,2,true)+CQ)+A.
_GetAutoObject(A.acj.DU).Aav());this.Background.L(A._GetAutoObject(A.acj.DU).AzS(
this.FW,this.Ic));this.Df(A._GetAutoObject(A.acj.DU).AzU(this.FW,this.Ic));}else{
this.Kx(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.Df(A.jb.Text);}},Ch:
function(G){C.FA.Ch.call(this,G);var LD=A._GetAutoObject(A.Device.Helper).L$(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LD){this.A2F=true;this.FW=A._GetAutoObject(A.acj.DU).AlA(LD,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2F=false;this.FW=0;}this.Ic=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.QE;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.TA={Y:null,FX:null,Ei:
null,Ey:null,MI:null,Fe:null,Fd:null,OZ:null,Aax:0,Aji:0,Pj:0,CP:function(){this.
Am();},Ai:function(Ae){C.JM.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axt));this.MI.R(
this.Aax.toFixed());this.Fe.R(this.Aji.toFixed());this.Fd.R(this.Pj.toFixed());}
,Ch:function(G){C.JM.Ch.call(this,G);var Ak1;Ak1=A._GetAutoObject(A.Device.Helper
).A6R(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aax=Ak1.Get(3);this.Aji=Ak1.Get(2);this.Pj=Ak1.Get(1);this.Am();},AsP:
function(G){if((!!this.Aax||!!this.Aji)||!!this.Pj){this.MI.Z(true);this.Fe.Z(true
);this.Fd.Z(true);this.OZ.Z(false);}else{this.MI.Z(false);this.Fe.Z(false);this.
Fd.Z(false);this.OZ.Z(true);}this.FX.H(this.MI.M);this.FX.Z(this.MI.Fq());this.Ei.
H(this.Fe.M);this.Ei.Z(this.Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq()
);},AuY:function(G){var B;var ND=(A.Core.Y.isPrototypeOf(G)?G:null);if(!ND)return;
if(((B=ND.Dc(0x1))[2]-B[0])>((B=ND.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.Fe.
S(A.aaL(A.fl.Ak));this.MI.S(A.aaL(A.fl.Ak));}},AAV:function(G){A.pe([this,this.AuY
],this);},_Init:function(aArg){C.JM._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.Ei={
I:this},0);A.acg.AL._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MI={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
Fd={I:this},0);A.acg.Text._Init.call(this.OZ={I:this},0);this.__proto__=C.TA;this.
Y.A0(0x3F);this.Y.H(AyB);this.Y.A_K(5);this.Y.JV(3);this.FX.H(Aow);this.FX.L(A.jb.
E1);this.Ei.H(AZs);this.Ei.L(A.jb.H9);this.Ey.H(AZt);this.Ey.L(A.jb.Gj);this.MI.
A0(0x3C);this.MI.H(Aah);this.MI.Hn(2);this.MI.Ja(true);this.MI.R(U2);this.MI.L(A.
jb.Text);this.MI.Aj(true);this.Fe.A0(0x3C);this.Fe.H(Aah);this.Fe.Hn(2);this.Fe.
Ja(true);this.Fe.R(U2);this.Fe.L(A.jb.Text);this.Fe.Aj(true);this.Fd.A0(0x3C);this.
Fd.H(Aah);this.Fd.Hn(2);this.Fd.Ja(true);this.Fd.R(U2);this.Fd.L(A.jb.Bm);this.Fd.
Aj(true);this.OZ.A0(0x34);this.OZ.H(Aah);this.OZ.Ja(true);this.OZ.A6(0x11);this.
OZ.R(A.aaR(A.acf.ASn));this.OZ.L(A.jb.Text);this.OZ.Aj(true);this.OZ.Z(false);this.
J(this.Y,0);this.J(this.FX,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.MI
,0);this.J(this.Fe,0);this.J(this.Fd,0);this.J(this.OZ,0);this.Y.Em=[this,this.AAV
];this.MI.Q7([this,this.AsP]);this.MI.S(A.aaL(A.fl.Af));this.Fe.Q7([this,this.AsP
]);this.Fe.S(A.aaL(A.fl.Af));this.Fd.Q7([this,this.AsP]);this.Fd.S(A.aaL(A.fl.Af
));this.OZ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JM;this.Y._Done(
);this.FX._Done();this.Ei._Done();this.Ey._Done();this.MI._Done();this.Fe._Done(
);this.Fd._Done();this.OZ._Done();C.JM._Done.call(this);},_ReInit:function(){C.JM.
_ReInit.call(this);this.Y._ReInit();this.FX._ReInit();this.Ei._ReInit();this.Ey.
_ReInit();this.MI._ReInit();this.Fe._ReInit();this.Fd._ReInit();this.OZ._ReInit(
);this.OZ.R(A.aaR(A.acf.ASn));this.MI.S(A.aaL(A.fl.Af));this.Fe.S(A.aaL(A.fl.Af)
);this.Fd.S(A.aaL(A.fl.Af));this.OZ.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JM._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMg={_Init:function(aArg){C.Aqf._Init.call(
this,aArg);this.__proto__=C.AMg;this.A42=1;this.Rk.Cr(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqf._ReInit.call(this);this.Rk.Cr(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARb={OL:null,IQ:null,H6:null,IO:null,GP:null,Al3:function(G){A.pe([this,this.
BAO],this);},BAO:function(G){A._GetAutoObject(C.A8).Cd(3);},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.OL._Init.call(this.OL={I:this},0);C.BW._Init.call(this.
IQ={I:this},0);C.SS._Init.call(this.H6={I:this},0);C.AGM._Init.call(this.IO={I:this
},0);C.Rb._Init.call(this.GP={I:this},0);this.__proto__=C.ARb;var B;this.Jb(A.aaR(
A.acf.A$N));this.IQ.H(Ah3);this.IQ.Aj(true);this.IQ.T(A.aaR(A.acf.Language));this.
IQ.A_r(100);this.H6.H(U1);this.H6.Aj(true);this.H6.T(A.aaR(A.acf.Date));this.H6.
Bi(true);this.IO.H(Aag);this.IO.Aj(true);this.IO.T(A.aaR(A.acf.Bs));this.GP.H(Ah2
);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGi));this.GP.Bi(true);
this.GP.Ar2(false);this.GP.A_z(true);this.J1(this.Y,-1);this.J1(this.Ay,-1);this.
J(this.IQ,0);this.J(this.H6,0);this.J(this.IO,0);this.J(this.GP,0);this.IQ.Zu(A.
aaL(A.fl.H2));this.IQ.Zv(A.aaL(A.fl.H2));this.IQ.Au([B=this.OL,B.B_,B.Cb]);this.
IQ.CK(this.OL);this.H6.Ab0([B=this.H6,B.FV]);this.H6.Gs([this,this.D_,this.GS]);
this.H6.AkA(A.aaL(A.ach.Edit));this.H6.Ab6([B=A._GetAutoObject(A.Device.Helper),
B.U3,B.U6]);this.IO.Ab0([B=this.IO,B.FV]);this.IO.Gs([this,this.D_,this.GS]);this.
IO.AkA(A.aaL(A.ach.Edit));this.IO.Ab6([B=A._GetAutoObject(A.Device.Helper),B.U3,
B.U6]);this.GP.Ab0([B=this.GP,B.FV]);this.GP.Gs([this,this.D_,this.GS]);this.GP.
AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(A.Device.Device),B.ASQ,B.A0u
]);},_Done:function(){this.__proto__=C.Cg;this.OL._Done();this.IQ._Done();this.H6.
_Done();this.IO._Done();this.GP._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.OL._ReInit();this.IQ._ReInit();this.H6._ReInit();
this.IO._ReInit();this.GP._ReInit();this.Jb(A.aaR(A.acf.A$N));this.IQ.T(A.aaR(A.
acf.Language));this.H6.T(A.aaR(A.acf.Date));this.IO.T(A.aaR(A.acf.Bs));this.GP.T(
A.aaR(A.acf.AGi));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aa0={Bg:null,FE:null,Am1:null,AmK:null,Sg:null,A7b:A.jV,KO:A.jV,ARF:null,ARG:
null,ADo:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A3d],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);this.A3d(this);},E4:function(
G){var B;A.z$([this,this.A3d],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Zw:function(E){C.D9.Zw.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zw(E);},ATr:function(E){if(this.ARF===E)return;this.
ARF=E;if(!!this.Bg)this.Bg.N3(E);},ATs:function(E){if(this.ARG===E)return;this.ARG=
E;this.Bpu(this);},ATh:function(E){if(this.ADo===E)return;this.ADo=E;A.pe([this,
this.Bpt],this);},ArR:function(E){if(this.A7b===E)return;this.A7b=E;this.Sg.R(E);
},Dk:function(E){if(this.KO===E)return;this.KO=E;if(!!this.Bg)this.Bg.Dk(E);},AkU:
function(L4){A.ab5("%s",AZu);},AD3:function(){A.ab5("%s",Alg);return false;},AxB:
function(G){if(!!this.Bg)this.HP(this.Bg);this.Bg=A._NewObject(C.Gc,0);this.Bg.H(
Ate);this.Bg.Zs(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dk(this.KO);this.Bg.
N3(this.ARF);this.Bg.Zw(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},Bpu:function(
G){var B;if(!!this.FE)this.HP(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(
this.ARG,0))?B:null);this.FE.H(IW);this.J(this.FE,0);},Bpt:function(G){var B;if(
!!this.Am1)this.HP(this.Am1);if(!!this.ADo&&this.AD3()){this.Am1=(C.I4.isPrototypeOf(
B=A._NewObject(this.ADo,0))?B:null);this.Am1.H(BD);this.Am1.Bi(false);this.J(this.
Am1,0);this.Sg.Z(false);}else this.Sg.Z(true);},A3d:function(G){this.AkU(A._GetAutoObject(
A.Device.Device).Bt);this.AxB(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmK={I:this},0);C.CG._Init.call(this.Sg={I:this},
0);this.__proto__=C.Aa0;this.AmK.H(BD);this.AmK.L(A.jb.CJ);this.Sg.H(AHO);this.Sg.
A6(0x11);this.Sg.L(A.jb.Text);this.J(this.AmK,0);this.J(this.Sg,0);this.Sg.S(A.aaL(
A.fl.Kp));this.Sg.AZ(A.aaL(A.fl.HJ));},_Done:function(){this.__proto__=C.D9;this.
AmK._Done();this.Sg._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmK._ReInit();this.Sg._ReInit();this.Sg.S(A.aaL(A.fl.Kp));this.Sg.
AZ(A.aaL(A.fl.HJ));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kk={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
BcP],[B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIR],0);A.pe([this,this.BcP],this
);},Du:function(){return 5;},Gl:function(aIndex){return this.AnimalListContentToString.
BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zq(E);},BcP:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kk;this.Ca.Set(0,0);this.Ca.Set(1,14);this.Ca.Set(2,
1);this.Ca.Set(3,2);this.Ca.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARK={IQ:null
,Y_:null,Zh:null,Ze:null,Zi:null,Y$:null,Zc:null,Zf:null,Zg:null,Zb:null,OL:null
,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.BW._Init.call(this.IQ={I:this
},0);C.Nh._Init.call(this.Y_={I:this},0);C.Nh._Init.call(this.Zh={I:this},0);C.Nh.
_Init.call(this.Ze={I:this},0);C.Nh._Init.call(this.Zi={I:this},0);C.Nh._Init.call(
this.Y$={I:this},0);C.Nh._Init.call(this.Zc={I:this},0);C.Nh._Init.call(this.Zf={
I:this},0);C.Nh._Init.call(this.Zg={I:this},0);C.Nh._Init.call(this.Zb={I:this},
0);C.OL._Init.call(this.OL={I:this},0);this.__proto__=C.ARK;var B;this.Jb(A.aaR(
A.acf.Settings));this.IQ.H(Ah3);this.IQ.Aj(true);this.IQ.T(A.aaR(A.acf.Language)
);this.IQ.A_r(100);this.Y_.H(Atf);this.Y_.Aj(true);this.Y_.T(A.aaR(A.acf.ACz));this.
Y_.Nk(16);this.Zh.H(Atg);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.AHd));this.Zh.Nk(
22);this.Ze.H(Ath);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.Temperature));this.Ze.
Nk(17);this.Zi.H(AyC);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.ACw));this.Zi.Nk(42
);this.Y$.H(Alk);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.Device));this.Y$.Nk(18);
this.Zc.H(Alk);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.Asn));this.Zc.Nk(19);this.
Zf.H(Ati);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.LinkTransponder));this.Zf.Nk(89
);this.Zg.H(AZv);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.UnlinkTransponder));this.
Zg.Nk(95);this.Zb.H(Ayt);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.ACO));this.Zb.Nk(
76);this.J(this.IQ,0);this.J(this.Y_,0);this.J(this.Zh,0);this.J(this.Ze,0);this.
J(this.Zi,0);this.J(this.Y$,0);this.J(this.Zc,0);this.J(this.Zf,0);this.J(this.Zg
,0);this.J(this.Zb,0);this.IQ.Zu(A.aaL(A.fl.H2));this.IQ.Zv(A.aaL(A.fl.H2));this.
IQ.Au([B=this.OL,B.B_,B.Cb]);this.IQ.CK(this.OL);this.Y_.AR=[B=this.Y_,B.Nn];this.
Zh.AR=[B=this.Zh,B.Nn];this.Ze.AR=[B=this.Ze,B.Nn];this.Zi.AR=[B=this.Zi,B.Nn];this.
Y$.AR=[B=this.Y$,B.Nn];this.Zc.AR=[B=this.Zc,B.Nn];this.Zf.AR=[B=this.Zf,B.Nn];this.
Zg.AR=[B=this.Zg,B.Nn];this.Zb.AR=[B=this.Zb,B.Nn];},_Done:function(){this.__proto__=
C.Cg;this.IQ._Done();this.Y_._Done();this.Zh._Done();this.Ze._Done();this.Zi._Done(
);this.Y$._Done();this.Zc._Done();this.Zf._Done();this.Zg._Done();this.Zb._Done(
);this.OL._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.IQ._ReInit();this.Y_._ReInit();this.Zh._ReInit();this.Ze._ReInit();this.Zi.
_ReInit();this.Y$._ReInit();this.Zc._ReInit();this.Zf._ReInit();this.Zg._ReInit(
);this.Zb._ReInit();this.OL._ReInit();this.Jb(A.aaR(A.acf.Settings));this.IQ.T(A.
aaR(A.acf.Language));this.Y_.T(A.aaR(A.acf.ACz));this.Zh.T(A.aaR(A.acf.AHd));this.
Ze.T(A.aaR(A.acf.Temperature));this.Zi.T(A.aaR(A.acf.ACw));this.Y$.T(A.aaR(A.acf.
Device));this.Zc.T(A.aaR(A.acf.Asn));this.Zf.T(A.aaR(A.acf.LinkTransponder));this.
Zg.T(A.aaR(A.acf.UnlinkTransponder));this.Zb.T(A.aaR(A.acf.ACO));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMt={EU:null,Init:function(aArg){this.EU.Ahw(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));},AUt:function(
){this.EU.Ae0(this.AOW());this.Aaz=!this.EU.EZ.AY;},AiX:function(G){this.EU.Ahw(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag0)));this.AUt();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dk(A.aaR(A.acf.A8i));else this.Dk(A.aaR(A.acf.Art));this.Am();},AOW:function(
){var Bz=A._NewObject(C.Aqt,0);var Qo=A._GetAutoObject(A.Device.Helper).AOd(A._GetAutoObject(
A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqp(Qo-(86400*this.
Mx));Bz.AnA(AZw);Bz.Q5([].concat(0,Bz.Gk.slice(1,4)));Bz.Q5(A.abN(Bz.Gk,(Qo-Dx)|
0));Bz.Q5(A.abP(Bz.Gk,3400));Bz.Q5([].concat(Bz.Gk.slice(0,3),4200));var Gh=A._GetAutoObject(
A.Device.Device).Bt.B9();Bz.AwU(Gh);Bz.Yi();if(Gh>0){var O=0;while(O<Gh){var ApW=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var ApX=A._GetAutoObject(A.Device.Device
).Bt.Hv(O,6)-Dx;if(ApW>0)Bz.Aqg(ApX,ApW);O=O+1;}}return Bz;},_Init:function(aArg
){C.K$._Init.call(this,aArg);C.AqX._Init.call(this.EU={I:this},0);this.__proto__=
C.AMt;this.EU.H(AZx);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFi(C.AG0);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K$;this.EU._Done(
);C.K$._Done.call(this);},_ReInit:function(){C.K$._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K$._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMu={Z4:null,O2:null,AgU:null,Aaz:false,Init:function(aArg){this.Z4.Ahw(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag0)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgU.Z(this.Aaz);},CC:function(
G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiX],[B=A._GetAutoObject(A.Device.
Helper),B.U3,B.U6],0);A.zV([this,this.AiX],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0
);A.pe([this,this.Amf],this);},E4:function(G){var B;A.z$([this,this.AiX],[B=A._GetAutoObject(
A.Device.Helper),B.U3,B.U6],0);A.z9([this,this.AiX],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Amf:function(G){var Fy=A._NewObject(A.Device.Filter,
0);var HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CW(HW);A._GetAutoObject(A.Device.Device).Bt.Bk(Fy
);},AiX:function(G){this.Z4.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));this.BoN();this.Am();},BoN:function(
){var B;var Gh=A._GetAutoObject(A.Device.Device).Bt.B9();var K9=A._NewObject(C.Aqt
,0);var Vr=A._NewObject(C.Aqt,0);var Qo=A._GetAutoObject(A.Device.Helper).AOd(A.
_GetAutoObject(A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K9.Q5([].concat(0,K9.Gk.slice(1
,4)));K9.Q5(A.abN(K9.Gk,(Qo-Dx)|0));K9.Q5(A.abP(K9.Gk,0));K9.Q5([].concat(K9.Gk.
slice(0,3),150000));K9.AnA(AZy);Vr.Q5([].concat(0,Vr.Gk.slice(1,4)));Vr.Q5(A.abN(
Vr.Gk,(Qo-Dx)|0));Vr.Q5(A.abP(Vr.Gk,0));Vr.Q5([].concat(Vr.Gk.slice(0,3),1500));
Vr.AnA(AZz);K9.AwU(Gh);K9.Yi();Vr.AwU(Gh);Vr.Yi();if(Gh>0){var O=0;var AaB=0;var
AAi=0;var AKb=0;var A2g=0;var Bdt=true;while(O<Gh){var Al$=A._GetAutoObject(A.Device.
Device).Bt.CF(O,8);var AaO=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-Dx;if(Al$>
0){K9.Aqg(AaO,Al$);if(!A2g){A2g=AaO;AKb=Al$;}if(AAi>0){var LD=A._GetAutoObject(A.
Device.Helper).L$(AAi,AaO);if(!!LD){var FW=A._GetAutoObject(A.acj.DU).AlA(LD,AaB
,Al$);if(Bdt){Vr.Aqg(AAi,FW);Bdt=false;}Vr.Aqg(AaO,FW);}}AaB=Al$;AAi=AaO;}O=O+1;
}var AdO=A.acf.Bhi;var FW=A._GetAutoObject(A.Device.Helper).Bji(A2g,AAi,AKb,AaB);
AdO=A._GetAutoObject(A.Device.Helper).MG(AdO,O8,FW.toFixed());AdO=A._GetAutoObject(
A.Device.Helper).MG(AdO,Ayf,A._GetAutoObject(A.acj.DU).Aav());this.O2.Il.R(AdO);
}this.Aaz=!K9.AY;if(this.Aaz)this.O2.Il.R(A.jV);(C.O2.isPrototypeOf(B=this.O2.EU
)?B:null).Anw([B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC]);this.Z4.Ae0(K9);
this.O2.Ae0(Vr);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqX._Init.call(
this.Z4={I:this},0);C.AqX._Init.call(this.O2={I:this},0);C.AkS._Init.call(this.AgU={
I:this},0);this.__proto__=C.AMu;this.Z4.H(AZA);this.Z4.T(A.aaR(A.acf.Afv));this.
Z4.AFi(C.AM2);this.O2.H(AZB);this.O2.T(A.aaR(A.acf.AHi));this.O2.AFi(C.O2);this.
AgU.H(U0);this.AgU.R(A.aaR(A.acf.Akm));this.J(this.Z4,0);this.J(this.O2,0);this.
J(this.AgU,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z4._Done(
);this.O2._Done();this.AgU._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z4._ReInit();this.O2._ReInit();this.AgU._ReInit();this.
Z4.T(A.aaR(A.acf.Afv));this.O2.T(A.aaR(A.acf.AHi));this.AgU.R(A.aaR(A.acf.Akm));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgU)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMr={
Avl:null,Avk:null,Axv:null,AuS:null,VD:null,Abn:null,Abm:null,Ack:null,Afi:null,
Init:function(aArg){this.VD.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));},A4J:function(G){this.VD.Ab7(this.
AuS);this.Abn.Ab7(this.Avl);this.Abm.Ab7(this.Avk);this.Ack.Ab7(this.Axv);},Axu:
function(){var Gh=A._GetAutoObject(A.Device.Device).Bt.B9();this.AuS=A._NewObject(
C.Ajv,0);this.Avl=A._NewObject(C.Ajv,0);this.Avk=A._NewObject(C.Ajv,0);this.Axv=
A._NewObject(C.Ajv,0);if(Gh>0){var O=Gh-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hv(O,6);this.AtA(this.AuS,O,3,D8);this.AtA(this.Avl,O,2,D8);this.
AtA(this.Avk,O,5,D8);this.AtA(this.Axv,O,4,D8);O=O-1;}}this.Aaz=!(((this.AuS.AY+
this.Avk.AY)+this.Avl.AY)+this.Axv.AY);A.pe([this,this.A4J],this);},AtA:function(
A1g,Ad,A1f,Qi){var Alw=A._GetAutoObject(A.Device.Device).Bt.I7(Ad,A1f);if(!!Alw)
A1g.Ou(Alw,Qi);},Ab5:function(E){if(this.Mx===E)return;C.K$.Ab5.call(this,E);if(
!!this.VD)this.VD.Ab5(E);if(!!this.Abn)this.Abn.Ab5(E);if(!!this.Abm)this.Abm.Ab5(
E);if(!!this.Ack)this.Ack.Ab5(E);this.Afi.Ab5(E);},AiX:function(G){this.VD.Ahw(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag0)));this.Axu();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dk(A.aaR(A.acf.BkH));else this.Dk(A.aaR(A.acf.Ano));this.Am();},_Init:function(
aArg){C.K$._Init.call(this,aArg);C.AhB._Init.call(this.VD={I:this},0);C.AhB._Init.
call(this.Abn={I:this},0);C.AhB._Init.call(this.Abm={I:this},0);C.AhB._Init.call(
this.Ack={I:this},0);C.AUq._Init.call(this.Afi={I:this},0);this.__proto__=C.AMr;
this.Dk(A.aaR(A.acf.Ano));this.VD.H(AZC);this.VD.R(A.aaR(A.acf.AGn));this.Abn.H(
AZD);this.Abn.R(A.aaR(A.acf.Feed));this.Abm.H(AZE);this.Abm.R(A.aaR(A.acf.AGp));
this.Ack.H(AZF);this.Ack.R(A.aaR(A.acf.AGq));this.Afi.H(AZG);this.J(this.VD,-1);
this.J(this.Abn,-1);this.J(this.Abm,-1);this.J(this.Ack,-1);this.J(this.Afi,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K$;this.VD._Done();this.Abn.
_Done();this.Abm._Done();this.Ack._Done();this.Afi._Done();C.K$._Done.call(this);
},_ReInit:function(){C.K$._ReInit.call(this);this.VD._ReInit();this.Abn._ReInit(
);this.Abm._ReInit();this.Ack._ReInit();this.Afi._ReInit();this.Dk(A.aaR(A.acf.Ano
));this.VD.R(A.aaR(A.acf.AGn));this.Abn.R(A.aaR(A.acf.Feed));this.Abm.R(A.aaR(A.
acf.AGp));this.Ack.R(A.aaR(A.acf.AGq));},_Mark:function(D){var B;C.K$._Mark.call(
this,D);if((B=this.Avl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avk)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMs={EU:null,WK:null,Aek:null,A2D:false,Init:function(aArg){this.WK.Ahw(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag0)));},Bl:function(aSize){C.K$.Bl.call(this,aSize);this.Aek.H(this.EU.M);},Ai:
function(Ae){C.K$.Ai.call(this,Ae);var BCl=!this.Aaz&&this.A2D;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aek.R(A.aaR(A.acf.A8i));else this.
Aek.R(A.aaR(A.acf.Art));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dk(A.aaR(
A.acf.BkI));else this.Dk(A.aaR(A.acf.BkJ));this.Aek.Z(BCl);},AiX:function(G){this.
WK.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.Ag0)));this.Aaz=true;this.A2D=true;this.Axu();this.AUt();this.
Am();},AUt:function(){this.EU.Ae0(this.AOW());if(!!this.EU.EZ&&(this.EU.EZ.AY>0)
){this.Aaz=false;this.A2D=false;}},AOW:function(){var Bz=A._NewObject(C.Aqt,0);var
Qo=A._GetAutoObject(A.Device.Helper).AOd(A._GetAutoObject(A.Device.Helper).Dv());
var Dx=A._GetAutoObject(A.Device.Helper).Aqp(Qo-(86400*this.Mx));Bz.AnA(AZH);Bz.
Q5([].concat(0,Bz.Gk.slice(1,4)));Bz.Q5(A.abN(Bz.Gk,(Qo-Dx)|0));Bz.Q5(A.abP(Bz.Gk
,3400));Bz.Q5([].concat(Bz.Gk.slice(0,3),4200));var Gh=A._GetAutoObject(A.Device.
Device).Bt.B9();Bz.AwU(Gh);Bz.Yi();if(Gh>0){var O=0;while(O<Gh){var ApW=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var ApX=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-
Dx;if(ApW>0)Bz.Aqg(ApX,ApW);O=O+1;}}return Bz;},Bjx:function(){var Gh=A._GetAutoObject(
A.Device.Device).Bt.B9();if(Gh>0){var Bga=A._NewObject(C.Ajv,0);var O=Gh-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LQ=A._GetAutoObject(A.Device.Helper).ADc(D3);if(!!LQ)Bga.Ou(LQ,D3.Timestamp
);O=O-1;}return Bga;}else return null;},Axu:function(){this.WK.Ab7(this.Bjx());if(
!!this.WK.N6&&(this.WK.N6.AY>0))this.Aaz=false;},_Init:function(aArg){C.K$._Init.
call(this,aArg);C.AqX._Init.call(this.EU={I:this},0);C.AhB._Init.call(this.WK={I:
this},0);C.AkS._Init.call(this.Aek={I:this},0);this.__proto__=C.AMs;this.EU.H(Ate
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFi(C.AG0);this.WK.H(AZI);this.WK.
R(A.aaR(A.acf.Rating));this.Aek.H(Ate);this.J(this.EU,-2);this.J(this.WK,-2);this.
J(this.Aek,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K$;this.EU._Done(
);this.WK._Done();this.Aek._Done();C.K$._Done.call(this);},_ReInit:function(){C.
K$._ReInit.call(this);this.EU._ReInit();this.WK._ReInit();this.Aek._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WK.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K$._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WS={Q:null,Gx:null,Gy:null
,QN:null,AM:0,Gq:0,F$:100,FI:0,Init:function(aArg){},I1:function(G){this.FI=1;C.
Eg.I1.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QN.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QN.Z(this.Gq!==
this.F$);this.QN.L(this.V.AQ);if((this.FI===4)||(this.FI===5))this.QN.L(A.jb.E1);
},Al4:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.AyT],this);
this.Bo.Ar(false);}this.Bo.Ar(true);},Qu:function(G){if(this.FI===5)A.pe([this,this.
AyT],this);if(this.FI===4)A.pe([this,this.AyU],this);if(this.FI===1)A.pe(this.AR
,this);this.FI=0;this.Am();},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcW:function(s){this.C4(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcW],E,0);if(!!E)A.pe([this,this.AcW],this);},Al5:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.AyU],this);this.Bo.Ar(false);}this.Bo.Ar(true
);},Ke:function(G){this.FI=0;},AyU:function(s){this.Ke(s);},J$:function(G){this.
FI=0;},AyT:function(s){this.J$(s);},Bx:function(E){if(E<this.Gq)E=this.Gq;if(E>this.
F$)E=this.F$;if(this.AM===E)return;this.AM=E;this.Am();},Ga:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EV:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(
this.Gx={I:this},0);A.Core.BK._Init.call(this.Gy={I:this},0);A.acg.Ap._Init.call(
this.QN={I:this},0);this.__proto__=C.WS;this.H(KZ);this.Gx.Filter=5;this.Gy.Filter=
4;this.Background.H(KZ);this.V.H(AcN);this.V.R(Lw);this.QN.H(AyD);this.J(this.QN
,0);this.Gx.BL=[this,this.Al4];this.Gx.D1=[this,this.Al4];this.Gy.BL=[this,this.
Al5];this.Gy.D1=[this,this.Al5];this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak
));this.V.Cr(null);this.QN.Ax(A.aaL(A.ach.AMP));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gx._Done();this.Gy._Done();this.QN._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gx._ReInit();this.Gy.
_ReInit();this.QN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUQ={AC:null,CM:null,HN:
null,Bl:function(aSize){C.WS.Bl.call(this,aSize);this.CM.H([this.QN.M[2],this.QN.
M[1],this.M[2],this.QN.M[3]]);},Ai:function(Ae){C.WS.Ai.call(this,Ae);this.CM.AbE(
0,this.CM.AY-1);if(this.Gq!==this.F$)this.QN.Z(true);},Init:function(aArg){},C4:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Ke:function(G){var F;var BO=this.AM;C.WS.Ke.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C6(
this.AM)));A.abo(this.Q,0);}},J$:function(G){var F;var BO=this.AM;C.WS.J$.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var QA=0;if(this.Gq
!==this.F$){if(E<this.Gq){E=this.F$;QA=-this.CM.GO*this.CM.AY;}if(E>this.F$){E=this.
Gq;QA=this.CM.GO;}}C.WS.Bx.call(this,E);if(!!QA)this.CM.Gb(QA);this.CM.GT(this.AM
);this.CM.HI(this.CM.Gt,true,this.HN,null);},Hm:function(G){var B;var Gg=this.CM.
G6;var CA=(C.CG.isPrototypeOf(B=this.CM.Cj)?B:null);if(!CA)return;CA.S(this.V.B6
);CA.AZ(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));else CA.
R(Xg);CA.H(A.abK(CA.M,[(B=this.CM.M)[2]-B[0],this.CM.GO]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Ga(0);this.EV(this.AC.Du()-1);this.CM.
Jz(this.AC.Du());this.CM.AbE(0,this.CM.AY-1);}},_Init:function(aArg){C.WS._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gm._Init.call(this.
HN={I:this},0);this.__proto__=C.AUQ;this.H(KZ);this.QN.H(AZJ);this.CM.Ae8(40);this.
CM.N3(C.CG);this.HN.WI(23);this.HN.HO(1);this.HN.Fr(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));this.CM.Hm=[this,this.Hm];this.Init(
aArg);},_Done:function(){this.__proto__=C.WS;this.CM._Done();this.HN._Done();C.WS.
_Done.call(this);},_ReInit:function(){C.WS._ReInit.call(this);this.CM._ReInit();
this.HN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AZ(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WS._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.R0={ALA:0
,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.AHi));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kx((A._GetAutoObject(A.Device.Converter).Ak$(this.ALA
)+CQ)+A._GetAutoObject(A.acj.DU).Af4());else this.Kx(A.aaR(A.acf.Unknown));},Ch:
function(G){C.FA.Ch.call(this,G);this.ALA=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.FA._Init.call(this,aArg);this.__proto__=C.R0;},_className:"Application::AnimalInfoItemWeightGain"
};C.APz={Bc:null,De:null,Init:function(aArg){var B;A.zX([this,this.Ns],[B=A._GetAutoObject(
A.Device.Device),B.AEB,B.AIQ],0);},DX:function(G){C.IL.DX.call(this,G);this.De.Ax(
A._GetAutoObject(A.Device.Converter).Bhx(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IL._Init.call(this,aArg);A.acg.C7._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.De={I:this},0);this.__proto__=C.APz;this.Bc.DC(
AyE);this.Bc.DM(Atj);this.Bc.L(A.jb.Bc);this.De.H(AZK);this.De.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.De,0);this.De.Ax(A.aaL(A.ach.AjW));this.Init(aArg);},_Done:
function(){this.__proto__=C.IL;this.Bc._Done();this.De._Done();C.IL._Done.call(this
);},_ReInit:function(){C.IL._ReInit.call(this);this.Bc._ReInit();this.De._ReInit(
);},_Mark:function(D){var B;C.IL._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANC={ZM:null,KB:null,Mn:null,Timer:null,ACn:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZM.R(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.Bq8),O8,this.ACn.
toFixed()));},CC:function(G){this.Timer.Ar(true);},E4:function(G){this.Timer.Ar(
false);},BBA:function(G){if(this.ACn>1){this.ACn=this.ACn-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).AxC();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZM={I:this},0);A.acg.Text.
_Init.call(this.KB={I:this},0);A.acg.Ap._Init.call(this.Mn={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANC;this.Background.L(A.jb.CT
);this.N.Z(true);this.ZM.H(AIC);this.ZM.KS(true);this.ZM.R(A.jV);this.ZM.L(A.jb.
Text);this.KB.H(AZL);this.KB.KS(true);this.KB.R(A.aaR(A.acf.A5A));this.KB.L(A.jb.
Text);this.Mn.H(AID);this.J(this.ZM,0);this.J(this.KB,0);this.J(this.Mn,0);this.
ZM.S(A.aaL(A.fl.Af));this.KB.S(A.aaL(A.fl.Af));this.Mn.Ax(A.aaL(A.ach.ABU));this.
Timer.MC=[this,this.BBA];},_Done:function(){this.__proto__=C.AB;this.ZM._Done();
this.KB._Done();this.Mn._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZM._ReInit();this.KB._ReInit();this.Mn._ReInit(
);this.Timer._ReInit();this.KB.R(A.aaR(A.acf.A5A));this.ZM.S(A.aaL(A.fl.Af));this.
KB.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANj={KB:null,AmB:null
,QG:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad$.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa5<=10)this.KB.R(A.aaR(A.acf.BhJ));else this.KB.R(A.aaR(A.acf.
A5B));},_Init:function(aArg){C.Ad$._Init.call(this,aArg);A.acg.Text._Init.call(this.
KB={I:this},0);A.acg.Ap._Init.call(this.AmB={I:this},0);C.CG._Init.call(this.QG={
I:this},0);this.__proto__=C.ANj;this.ST.H(AIE);this.Mn.H(AZM);this.KB.H(AZN);this.
KB.KS(true);this.KB.L(A.jb.Text);this.AmB.H(AID);this.QG.H(AZO);this.QG.Z(true);
this.QG.R(A.aaR(A.acf.AUr));this.QG.L(A.jb.Text);this.J(this.KB,0);this.J(this.AmB
,0);this.J(this.QG,0);this.KB.S(A.aaL(A.fl.Af));this.AmB.Ax(A.aaL(A.ach.ABU));this.
QG.S(A.aaL(A.fl.Af));this.QG.AZ(A.aaL(A.fl.Ak));this.QG.Cr(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad$;this.KB._Done();this.AmB._Done();this.QG._Done();
C.Ad$._Done.call(this);},_ReInit:function(){C.Ad$._ReInit.call(this);this.KB._ReInit(
);this.AmB._ReInit();this.QG._ReInit();this.QG.R(A.aaR(A.acf.AUr));this.KB.S(A.aaL(
A.fl.Af));this.QG.S(A.aaL(A.fl.Af));this.QG.AZ(A.aaL(A.fl.Ak));this.QG.Cr(A.aaL(
A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ad$._Mark.call(this,D);if((B=this.
KB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMe={_Init:function(aArg){C.I5._Init.call(this,aArg);this.__proto__=C.AMe;this.
RT.Ar(false);this.RT.Aj(false);this.RT.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVS={_Init:function(aArg){C.I5._Init.call(this,aArg);this.__proto__=C.AVS;this.
S9.Ar(false);this.S9.Aj(false);this.S9.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AO3={DX:function(G){C.Kr.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.
Converter).Ad0(5));},_Init:function(aArg){C.Kr._Init.call(this,aArg);this.__proto__=
C.AO3;},_className:"Application::HeaderControlListFilter"};C.APB={DX:function(G){
C.Kr.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(6));},_Init:
function(aArg){C.Kr._Init.call(this,aArg);this.__proto__=C.APB;},_className:"Application::HeaderWatchListFilter"
};C.APF={D0:null,Na:null,_Init:function(aArg){C.TZ._Init.call(this,aArg);C.CG._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.Na={I:this},0);this.__proto__=
C.APF;this.D0.H(Aot);this.D0.R(A.aaR(A.acf.A58));this.D0.L(A.jb.Text);this.Na.H(
AZP);this.Na.L(A.jb.Text);this.Na.A6(0x12);this.J(this.D0,-2);this.J(this.Na,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(A.aaL(A.fl.Bh));this.Na.Ax(A.aaL(A.ach.ADG)
);},_Done:function(){this.__proto__=C.TZ;this.D0._Done();this.Na._Done();C.TZ._Done.
call(this);},_ReInit:function(){C.TZ._ReInit.call(this);this.D0._ReInit();this.Na.
_ReInit();this.D0.R(A.aaR(A.acf.A58));this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.TZ._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANe={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(
!!this.AX){var Om=this.AX.H3(Ad,8);var BC9=this.AX.Sm(Ad,21);this.Abf.R(A._GetAutoObject(
A.Device.Helper).L$(BC9,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Ss.Z(Om);this.Am();}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=
C.ANe;},_className:"Application::CalfListWatchItem"};C.TZ={Ag$:null,Ahb:null,_Init:
function(aArg){C.Dd._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag$={I:this},
0);A.acg.Ap._Init.call(this.Ahb={I:this},0);this.__proto__=C.TZ;this.Ag$.H(AZQ);
this.Ag$.L(A.jb.Text);this.Ag$.A6(0x12);this.Ahb.H(AZR);this.Ahb.L(A.jb.Text);this.
Ahb.A6(0x12);this.J1(this.DS,-1);this.J(this.Ag$,0);this.J(this.Ahb,0);this.Ag$.
Ax(A.aaL(A.ach.Ara));this.Ahb.Ax(A.aaL(A.ach.Ag7));},_Done:function(){this.__proto__=
C.Dd;this.Ag$._Done();this.Ahb._Done();C.Dd._Done.call(this);},_ReInit:function(
){C.Dd._ReInit.call(this);this.Ag$._ReInit();this.Ahb._ReInit();},_Mark:function(
D){var B;C.Dd._Mark.call(this,D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqt={Gk:A.wg,OH:A.wf,Q5:function(E){if(A.aaY(this.Gk,E))return;this.Gk=E;},AnA:
function(E){if(A.aaX(this.OH,E))return;this.OH=E;},_Init:function(aArg){A.acv.ACm.
_Init.call(this,aArg);this.__proto__=C.Aqt;},_className:"Application::BoundCoordList"
};C.AjD={T4:null,Wy:null,T5:null,Wz:null,Ss:null,Zj:null,Abf:null,AP:null,A$:null
,Ea:null,Lt:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T4.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wy.H(this.T4.M);this.A$.H([this.T4.
M[2]-1,0,this.T4.M[2]+1,aSize[1]]);this.T5.H([this.T4.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wz.H(this.T5.M);this.Ea.H([this.T5.M[2]-1,0,this.T5.M[2]+1,aSize[
1]]);this.Ss.H([this.T5.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zj.H(this.Ss.
M);this.Lt.H([this.Ss.M[2]-1,0,this.Ss.M[2]+1,aSize[1]]);this.Abf.H([this.Ss.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K8=this.V.AQ;
this.T4.AE3(K8);this.Wy.L(K8);this.T5.AE3(K8);this.Wz.L(K8);this.Ss.AE3(K8);this.
Zj.L(K8);this.Abf.L(K8);this.Zj.Z(!this.Ss.Fq());},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;var Mh=this.AX.CF(Ad,1);var Ic=this.AX.AmW(Ad,14);var Aut=this.AX.CF(
Ad,5);var LQ=this.AX.I7(Ad,13);this.T(Mh.toFixed());if(!!LQ){this.T4.Z(true);this.
T4.AwK(A._GetAutoObject(A.acj.Assessment).BdB(LQ));this.Wy.Z(false);}else{this.T4.
Z(false);this.Wy.Z(true);}if(Aut>0){this.T5.Z(true);this.T5.AwK(A._GetAutoObject(
A.acj.Assessment).BdB(A._GetAutoObject(A.Device.Converter).AsI(Ic,Aut)));this.Wz.
Z(false);}else{this.T5.Z(false);this.Wz.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kl._Init.call(this.T4={I:this},0);A.acg.Text._Init.
call(this.Wy={I:this},0);C.Kl._Init.call(this.T5={I:this},0);A.acg.Text._Init.call(
this.Wz={I:this},0);C.Kl._Init.call(this.Ss={I:this},0);A.acg.Text._Init.call(this.
Zj={I:this},0);A.acg.Text._Init.call(this.Abf={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Lt={I:this},0);this.__proto__=C.AjD;this.
Wy.H(AZS);this.Wy.R(Aou);this.Wz.H(Aov);this.Wz.R(Aou);this.Ss.AwK(A.jb.Ri);this.
Zj.H(Aov);this.Zj.R(Rp);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lt.L(A.jb.Bc);this.J(this.T4,0);this.J(this.Wy,0);this.J(this.T5,0);this.J(
this.Wz,0);this.J(this.Ss,0);this.J(this.Zj,0);this.J(this.Abf,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Lt,0);this.Wy.S(A.aaL(A.fl.Af
));this.Wz.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(A.fl.Af));this.Abf.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.T4._Done();this.Wy.
_Done();this.T5._Done();this.Wz._Done();this.Ss._Done();this.Zj._Done();this.Abf.
_Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Lt._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.T4._ReInit();this.Wy.
_ReInit();this.T5._ReInit();this.Wz._ReInit();this.Ss._ReInit();this.Zj._ReInit(
);this.Abf._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.
Lt._ReInit();this.Wy.S(A.aaL(A.fl.Af));this.Wz.S(A.aaL(A.fl.Af));this.Zj.S(A.aaL(
A.fl.Af));this.Abf.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.T4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lt)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pw:null,Ang:null
,EZ:null,DR:null,Arm:0,Arn:0,A7A:0,AmN:0,AqG:0,Init:function(aArg){this.ATc(6);this.
ATd(8);this.ATo(A.jb.AV);this.ATp(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.Bmq([this.DR.Abb[0],(B=this.DR.M)[3]-B[1]]);this.WM(this);},ATb:function(
E){if(this.Pw===E)return;this.Pw=E;this.DR.ATb(E);},ATp:function(E){if(this.Arn===
E)return;this.Arn=E;this.DR.ATp(E);},ATo:function(E){if(this.Arm===E)return;this.
Arm=E;this.DR.ATo(E);this.DR.Bmv(E);},WM:function(G){var B;while(!!this.DR.Ah)this.
HP(this.DR.Ah);if(!this.EZ)return;this.DR.AnA([((this.EZ.OH[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gk[2]-this.EZ.Gk[0]))|0,this.DR.OH[1]]);this.DR.AnA([this.DR.OH[0]
,((this.EZ.OH[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gk[3]-this.EZ.Gk[1]))|0]);var O;
var Dh=this.DR.OH[1];var D8;var A4U=this.EZ.Gk[1];var BkG=(((B=this.DR.M)[3]-B[1
])/this.DR.OH[1])|0;for(O=0;O<BkG;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dh))-(this.Ang.Ascent+this.Ang.Descent))+2,((B=this.M)[2]-
B[0])-this.Arn,(((B=this.M)[3]-B[1])-(O*Dh))+2]);D8.L(this.A7A);D8.S(this.Ang);D8.
A6(0x24);if(O>0)D8.R(this.AJO(A4U));else D8.R(this.AKl());A4U=A4U+this.EZ.OH[1];
this.J(D8,0);}},BGP:function(s){this.WM(s);},Bnl:function(E){if(this.Ang===E)return;
this.Ang=E;this.Am();},Azs:function(A0X){var B;if(!this.EZ||(this.EZ.Gk[3]===this.
EZ.Gk[1]))return 0;return(((A0X-this.EZ.Gk[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gk[
3]-this.EZ.Gk[1]))|0;},Ae0:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.Ae0(null);else{var Bz=A._NewObject(A.acv.ACm,0);Bz.AwU(this.EZ.AEh);Bz.Yi();var
JB=E.AlK;while(!!JB){Bz.Aqg(this.By9(JB.P7),this.By_(JB.P8));JB=JB.Ah;}this.DR.Ae0(
Bz);this.Am();}},By9:function(Bxl){var B;if(!this.EZ||(this.EZ.Gk[2]===this.EZ.Gk[
0]))return 0;return((Bxl-this.EZ.Gk[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gk[2]-this.
EZ.Gk[0]);},By_:function(A0X){var B;if(!this.EZ||(this.EZ.Gk[3]===this.EZ.Gk[1])
)return 0;return((A0X-this.EZ.Gk[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gk[3]-this.EZ.
Gk[1]);},AJO:function(AoR){return AoR.toFixed();},AKl:function(){return A.jV;},ATd:
function(E){if(this.AmN===E)return;this.AmN=E;this.DR.ATd(E);},ATc:function(E){if(
this.AqG===E)return;this.AqG=E;this.DR.ATc(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIF);this.A7A=A.jb.Text;this.DR.A0(0x3F);this.DR.H(AIF);this.DR.BnL(AZT);this.
DR.Bme(A.jb.Ri);this.DR.Bm4(A.jb.Bc);this.DR.Bn7(A.jb.Ri);this.J(this.DR,0);this.
Pw=A.aaL(A.acv.ACF);this.Ang=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bnl(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pw)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ang)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AM2={AJO:function(AoR){return A._GetAutoObject(
A.Device.Converter).Ax5(AoR,0);},AKl:function(){return A._GetAutoObject(A.acj.DU
).Af4();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AM2;}
,_className:"Application::BodyWeightGraph"};C.O2={JN:null,Ey:null,Ei:null,FX:null
,II:null,IJ:null,Init:function(aArg){this.ATb(null);},WM:function(G){var B;var F;
C.DR.WM.call(this,G);var AKQ=0;var ALF=0;if(!!this.JN){AKQ=this.Azs(A._GetAutoObject(
A.Device.Helper).ADb((F=this.JN,F[1].call(F[0]))));ALF=this.Azs(A._GetAutoObject(
A.Device.Helper).ADa((F=this.JN,F[1].call(F[0]))));}this.FX.H(A.abP(this.FX.M,0)
);this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.M)[3]-B[1])-ALF));this.II.H(
A.abO(this.II.M,(this.FX.M[3]-((((B=this.II.M)[3]-B[1])/2)|0))-2));this.Ei.H(A.abP(
this.Ei.M,this.FX.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-
B[1])-AKQ));this.IJ.H(A.abO(this.IJ.M,(this.Ei.M[3]-((((B=this.IJ.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Ei.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJO:function(AoR){return A._GetAutoObject(A.Device.Converter
).S_(AoR,0,true);},AKl:function(){return A._GetAutoObject(A.acj.DU).Aav();},Anw:
function(E){if(A.aaZ(this.JN,E))return;if(!!this.JN)A.z$([this,this.AiP],this.JN
,0);this.JN=E;if(!!E)A.zX([this,this.AiP],E,0);if(!!E)A.pe([this,this.AiP],this);
},AiP:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.
acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.II={I:this},0);A.
acg.AL._Init.call(this.IJ={I:this},0);this.__proto__=C.O2;this.Ey.A0(0xD);this.Ey.
H(Aab);this.Ey.L(A.jb.Gj);this.Ei.A0(0xD);this.Ei.H(Tb);this.Ei.L(A.jb.H9);this.
FX.A0(0xD);this.FX.H(AcM);this.FX.L(A.jb.E1);this.II.A0(0xD);this.II.H(Aad);this.
II.Awy(A.jb.H9);this.II.Awz(A.jb.H9);this.II.AwB(A.jb.E1);this.II.AwA(A.jb.E1);this.
IJ.A0(0xD);this.IJ.H(Xe);this.IJ.Awy(A.jb.Gj);this.IJ.Awz(A.jb.Gj);this.IJ.AwB(A.
jb.H9);this.IJ.AwA(A.jb.H9);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FX
,-1);this.J(this.II,-1);this.J(this.IJ,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FX._Done();this.II._Done();this.
IJ._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ey._ReInit();this.Ei._ReInit();this.FX._ReInit();this.II._ReInit();this.IJ._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JN)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqX={EU:null,EZ:null,Sb:null,Il:
null,Bc:null,AxM:A.jV,DK:A.jV,AOY:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.Sb.
H([30,0,aSize[0]-2,30]);this.Il.H(this.Sb.M);if(!!this.EU)this.EU.H([30,this.Sb.
M[3],aSize[0],this.Bc.M[1]]);},Ahw:function(E){if(this.AxM===E)return;this.AxM=E;
this.Il.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.Sb.R(E);},AFi:
function(E){if(this.AOY===E)return;this.AOY=E;this.Bpr(this);},Bpr:function(G){var
B;if(!!this.EU)this.HP(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOY,0))?B:null);if(!!this.EU){this.EU.H(AZU);this.EU.Ae0(this.EZ);this.J(this.EU
,0);}},Ae0:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.Ae0(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Sb={I:this},0);A.acg.Text._Init.call(this.Il={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqX;this.H(AcP);this.Ar(false);this.Sb.H(AZV);this.
Sb.A6(0x11);this.Sb.R(Lw);this.Sb.L(A.jb.Text);this.Il.A6(0x14);this.Il.R(A.jV);
this.Il.L(A.jb.Text);this.Bc.H(AZW);this.Bc.L(A.jb.Bc);this.J(this.Sb,0);this.J(
this.Il,0);this.J(this.Bc,0);this.Sb.S(A.aaL(A.fl.Ak));this.Il.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Sb._Done();this.
Il._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.Sb._ReInit();this.Il._ReInit();this.Bc._ReInit();this.
Sb.S(A.aaL(A.fl.Ak));this.Il.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Il)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMA={AgD:null,GT:function(E
){var F;C.Gc.GT.call(this,E);if(!!this.AgD)(F=this.AgD,F[2].call(F[0],E));},A9M:
function(E){if(A.aaZ(this.AgD,E))return;if(!!this.AgD)A.z$([this,this.A3e],this.
AgD,0);this.AgD=E;if(!!E)A.zX([this,this.A3e],E,0);if(!!E)A.pe([this,this.A3e],this
);},A3e:function(G){var F;if(!this.AgD)return;(F=this.AgD,F[2].call(F[0],this.FN(
)));},_Init:function(aArg){C.Gc._Init.call(this,aArg);this.__proto__=C.AMA;},_Mark:
function(D){var B;C.Gc._Mark.call(this,D);if((B=this.AgD)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUq={Rg:null
,P2:null,XY:null,XZ:null,Mx:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Rg.H(A.abI(this.Rg.M,(((B=this.M)[3]-B[1])/2)|
0));this.P2.H(A.abI(this.P2.M,(((B=this.M)[3]-B[1])/2)|0));this.Rg.H(A.abO(this.
Rg.M,(((B=this.M)[3]-B[1])/2)|0));this.P2.H(A.abO(this.P2.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rg.R(A._GetAutoObject(
A.Device.Helper).MG(A.aaR(A.acf.BkA),O8,this.Mx.toFixed()));},Ab5:function(E){if(
this.Mx===E)return;this.Mx=E;this.BB$(this);},BB$:function(G){var B;var AJV=(((B=
this.M)[2]-B[0])/this.Mx)|0;this.XY.H(A.abM(this.XY.M,(((B=this.M)[2]-B[0])-(this.
Mx*AJV))+(((AJV/2)-(((B=this.XY.M)[2]-B[0])/2))|0)));this.XZ.H(A.abM(this.XZ.M,(((
B=this.M)[2]-B[0])-AJV)+(((AJV/2)-(((B=this.XZ.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rg={
I:this},0);A.acg.Text._Init.call(this.P2={I:this},0);A.acg.Text._Init.call(this.
XY={I:this},0);A.acg.Text._Init.call(this.XZ={I:this},0);this.__proto__=C.AUq;this.
H(BD);this.Rg.H(AZX);this.Rg.Hn(5);this.Rg.A6(0x11);this.Rg.L(A.jb.Text);this.P2.
H(AZY);this.P2.Hn(5);this.P2.A6(0x14);this.P2.R(A.aaR(A.acf.AhT));this.P2.L(A.jb.
Text);this.XY.H(AZZ);this.XY.R(AIG);this.XY.L(A.jb.Text);this.XZ.H(AZ0);this.XZ.
R(AIG);this.XZ.L(A.jb.Text);this.J(this.Rg,0);this.J(this.P2,0);this.J(this.XY,0
);this.J(this.XZ,0);this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.XY.
S(A.aaL(A.fl.H2));this.XZ.S(A.aaL(A.fl.H2));},_Done:function(){this.__proto__=A.
Core.P;this.Rg._Done();this.P2._Done();this.XY._Done();this.XZ._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rg._ReInit(
);this.P2._ReInit();this.XY._ReInit();this.XZ._ReInit();this.P2.R(A.aaR(A.acf.AhT
));this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rg)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K$={V8:null,AjJ:null,KO:A.jV,Mx:0,Aaz:false,Init:function(aArg){var A1V=A._NewObject(
C.Km,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RQ()<A1V.
C6(O))A1V.Ann=O+1;this.V8.CK(A1V);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjJ.
Z(this.Aaz);if(this.Aaz)this.Bb(null);else this.Bb(this.V8);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.V8.Q,F[1].call(F[0])))(F=this.V8.Q,F[2].
call(F[0],this.V8.AC.C6(0)));A.zX([this,this.AI5],[B=A._GetAutoObject(A.Device.Helper
),B.U3,B.U6],0);A.zV([this,this.AI5],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.pe([this
,this.Amf],this);},E4:function(G){var B;A.z$([this,this.AI5],[B=A._GetAutoObject(
A.Device.Helper),B.U3,B.U6],0);A.z9([this,this.AI5],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Zw:function(E){if(A.aa0(this.AR,E))return;C.D9.Zw.call(
this,E);this.V8.AR=E;},Ab5:function(E){if(this.Mx===E)return;this.Mx=E;A.pe([this
,this.Amf],this);},BwV:function(Aq){this.Ab5(Aq);},AiX:function(G){},AI5:function(
s){this.AiX(s);},Dk:function(E){if(this.KO===E)return;this.KO=E;this.AjJ.R(E);},
Amf:function(G){var Fy=A._NewObject(A.Device.Filter,0);var AzB=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzB.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhT()-((this.Mx-1)*86400))-1,true);Fy.CW(AzB);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CW(HW);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fy);},Bly:function(){return this.Mx;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUQ._Init.call(this.V8={I:this},0);C.AkS._Init.call(
this.AjJ={I:this},0);this.__proto__=C.K$;this.V8.H(BD);this.AjJ.H(U0);this.J(this.
V8,0);this.J(this.AjJ,0);this.V8.Au([this,this.Bly,this.BwV]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V8._Done();this.AjJ._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V8._ReInit();this.AjJ.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANJ={Wd:null,YP:null,RatingMode:null,PH:null,_Init:
function(aArg){C.Cg._Init.call(this,aArg);C.Nh._Init.call(this.Wd={I:this},0);C.
BW._Init.call(this.YP={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Ir._Init.call(this.PH={I:this},0);this.__proto__=C.ANJ;var B;this.Hj.R(A.
aaR(A.acf.ACw));this.Jb(A.aaR(A.acf.A52));this.Wd.H(Atk);this.Wd.Aj(true);this.Wd.
T(A.aaR(A.acf.AsU));this.Wd.Bi(true);this.Wd.Nk(23);this.YP.H(AZ1);this.YP.Aj(true
);this.YP.T(A.aaR(A.acf.A$j));this.YP.Bi(false);this.PH.H(AZ2);this.PH.Aj(true);
this.PH.T(A.aaR(A.acf.A5Z));this.PH.Bi(true);this.PH.Ga(3);this.PH.EV(14);this.PH.
IR(A.aaR(A.acf.Km)+AIH);this.PH.Jc(A.aaR(A.acf.GL)+AIH);this.J(this.Wd,0);this.J(
this.YP,0);this.J(this.PH,0);this.Wd.AR=[B=this.Wd,B.Nn];this.YP.Au([B=this.RatingMode
,B.B_,B.Cb]);this.YP.CK(this.RatingMode);this.PH.Au([B=A._GetAutoObject(A.Device.
Device),B.A8Q,B.Bbu]);},_Done:function(){this.__proto__=C.Cg;this.Wd._Done();this.
YP._Done();this.RatingMode._Done();this.PH._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wd._ReInit();this.YP._ReInit();this.RatingMode.
_ReInit();this.PH._ReInit();this.Hj.R(A.aaR(A.acf.ACw));this.Jb(A.aaR(A.acf.A52)
);this.Wd.T(A.aaR(A.acf.AsU));this.YP.T(A.aaR(A.acf.A$j));this.PH.T(A.aaR(A.acf.
A5Z));this.PH.IR(A.aaR(A.acf.Km)+AIH);this.PH.Jc(A.aaR(A.acf.GL)+AIH);},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au$={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hn(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.
Text;}if(!Hf){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.LI=Hf;this.KH=Fw;this.Qv=GE;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Au$;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADj={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PT,B.EC],0);A.pe([this,this.DX],this);},Df:function(E){C.BQ.Df.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.ADg));break;case 1:this.Ap.Ax(A.aaL(A.ach.APj));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APl));break;default:A.ab5("%s%e",AZ3,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADj;this.Ap.H(AZ4);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADg));this.Init(aArg);},_Done:function(){this.
__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADk={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PT,B.EC],0);A.pe([this,this.DX],this);},Df:function(E){C.BQ.
Df.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADh));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APk));break;case 2:this.Ap.Ax(A.aaL(A.ach.APm));break;default:A.ab5("%s%e"
,AZ3,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADk;
this.Ap.H(AZ4);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADh));this.Init(aArg);},
_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.FA={BT:null,Ax0:A.jV,Df:function(E){C.JM.Df.call(
this,E);this.BT.L(E);},Kx:function(E){if(this.Ax0===E)return;this.Ax0=E;this.BT.
R(E);},_Init:function(aArg){C.JM._Init.call(this,aArg);C.CG._Init.call(this.BT={
I:this},0);this.__proto__=C.FA;this.BT.A0(0x34);this.BT.H(AyB);this.BT.A6(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.AZ(A.aaL(
A.fl.Ak));this.BT.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JM;this.
BT._Done();C.JM._Done.call(this);},_ReInit:function(){C.JM._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));this.BT.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JM._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOH={WE:function(G){var B;this.Agx();this.AuI(A.aaR(A.acf.BjJ),[this,this.Bol],[
B=A._GetAutoObject(A.Device.Device),B.A8R,B.Bbv]);A._GetAutoObject(C.BR).Fz();this.
I3(A.aaR(A.acf.AVs),[this,this.ATT],5);this.I3(A.aaR(A.acf.AVq),[this,this.ATS],
7);this.I3(A.aaR(A.acf.An1),[this,this.AwX],2);this.I3(A.aaR(A.acf.AdV),[this,this.
AEY],1);this.I3(A.aaR(A.acf.AuG),[this,this.AES],0);A._GetAutoObject(C.BR).Fz();
A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abs:function(){return C.AB_;},Abt:function(
){return C.ADr;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6X());},HQ:function(G){var F;C.GJ.HQ.call(this,G);if(this.Aki(
)===false){this.N.Cw(A._GetAutoObject(A.Device.Converter).Ajr((F=this.Fn,F[1].call(
F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OQ(false);this.N.OR(false
);},Agj:function(){A._GetAutoObject(C.A8).Cd(44);},Bol:function(G){A._GetAutoObject(
A.Device.Device).AwN(!A._GetAutoObject(A.Device.Device).AqS);this.An9(this);},An9:
function(G){var Be=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Aw=Be.DL(
30,3);if(!!Aw)Be.Np(Aw);if(A._GetAutoObject(A.Device.Device).AqS){var AAh=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A2N=A._GetAutoObject(A.Device.Helper).Dv()-
21600;AAh.Initialize(30,3,A2N,true);Be.CW(AAh);}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOH;
var B;this.Dr(C.APf);this.Dk(A.aaR(A.acf.A8f));this.AwS([B=A._GetAutoObject(A.Device.
Device),B.A8P,B.Bbt]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dk(A.aaR(
A.acf.A8f));},_className:"Application::FreshCowListScreen"};C.AOG={_Init:function(
aArg){C.I5._Init.call(this,aArg);this.__proto__=C.AOG;this.Ld.Ar(false);this.Ld.
Aj(false);this.Ld.Z(false);this.Js.Ar(false);this.Js.Aj(false);this.Js.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APf={DX:function(G){C.Kr.
DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(7));},_Init:
function(aArg){C.Kr._Init.call(this,aArg);this.__proto__=C.APf;},_className:"Application::HeaderFreshCowListFilter"
};C.ADr={Jy:null,D0:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);C.CG._Init.
call(this.Jy={I:this},0);C.CG._Init.call(this.D0={I:this},0);this.__proto__=C.ADr;
this.A97(1);this.Jy.H(Brc);this.Jy.R((A.aaR(A.acf.Calving)+AcS)+A.aaR(A.acf.A$W)
);this.Jy.L(A.jb.Text);this.D0.H(Brd);this.D0.R(A.aaR(A.acf.AD$));this.D0.L(A.jb.
Text);this.J(this.Jy,0);this.J(this.D0,0);this.Jy.S(A.aaL(A.fl.Ak));this.Jy.AZ(A.
aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Dd;this.Jy._Done();this.D0._Done();C.Dd._Done.call(this);},_ReInit:
function(){C.Dd._ReInit.call(this);this.Jy._ReInit();this.D0._ReInit();this.Jy.R((
A.aaR(A.acf.Calving)+AcS)+A.aaR(A.acf.A$W));this.D0.R(A.aaR(A.acf.AD$));this.Jy.
S(A.aaL(A.fl.Ak));this.Jy.AZ(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.AZ(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.Jy).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.AB_={AG1:null,KQ:null,UF:null,AP:null,A$:null
,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UF.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A$.H([this.UF.M[2]-1,0,this.UF.M[2]+1,aSize[
1]]);this.KQ.H([this.UF.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KQ.L(this.V.AQ);this.UF.Df(this.V.AQ);},Ch:function(Ad){if(!this.AX
)return;this.Hs=Ad;if(!!this.AX){var IA=this.AX.CF(Ad,0);var Mh=this.AX.CF(Ad,1);
var A2M=this.AX.CF(Ad,29);var AlC=this.AX.Hv(Ad,28);this.T(Mh.toFixed());this.KQ.
R(A2M.toFixed());this.UF.Ab5(A._GetAutoObject(A.Device.Device).AqR+1);this.UF.BnZ(
AlC);this.UF.R(A._GetAutoObject(A.acj.KM).AjN(AlC));A._GetAutoObject(A.Device.Device
).SR(Ad);this.Ap6(IA);this.Axu();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A4J:function(G){this.UF.Ab7(this.AG1);},Axu:function(){var Gh=A._GetAutoObject(
A.Device.Device).Bt.B9();this.AG1=A._NewObject(C.Ajv,0);if(Gh>0){var O=Gh-1;while(
O>=0){var D8=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6);this.AtA(this.AG1,O,9,
D8);O=O-1;}}A.pe([this,this.A4J],this);},AtA:function(A1g,Ad,A1f,Qi){var Alw=A._GetAutoObject(
A.Device.Device).Bt.I7(Ad,A1f);if(!!Alw)A1g.Ou(Alw,Qi);},Ap6:function(Ac8){var Fy=
A._NewObject(A.Device.Filter,0);var AzB=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzB.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZR(A._GetAutoObject(A.Device.
Device).AqR)-1,true);Fy.CW(AzB);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,Ac8,true);Fy.CW(HW);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.Text._Init.call(this.
KQ={I:this},0);C.AUl._Init.call(this.UF={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.AB_;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(this.KQ,0);this.J(this.UF,0);this.J(this.AP
,0);this.J(this.A$,0);this.KQ.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.KQ._Done();this.UF._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.KQ._ReInit(
);this.UF._ReInit();this.AP._ReInit();this.A$._ReInit();this.KQ.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AG1)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUl={AU5:0,Init:function(aArg){},AOO:function(){return A._GetAutoObject(A.Device.
Helper).Aqp(this.AU5);},AOQ:function(){return this.AOO()+(this.Mx*86400);},BnZ:function(
E){if(this.AU5===E)return;this.AU5=E;A.pe([this,this.WM],this);},_Init:function(
aArg){C.AhB._Init.call(this,aArg);this.__proto__=C.AUl;this.Bc.H(Bre);this.BnW(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Du:function(){if(this.K&&this.K.Du)return this.K.
Du.apply(this,arguments);else return C.FactoryResetScope.BuU.apply(this,arguments
);},BuU:function(){return 3;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
jV;return this.FactoryResetScopeToString.BS(this.C6(aIndex));},_Init:function(aArg
){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.Ca.
Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,2);var J6=this._variants();if(J6){this.K={
};J6._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);
this.__proto__=C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);
},_ReInit:function(){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acs.FactoryResetScope._variants(
);},K:null,_className:"Application::FactoryResetScope"};C.SetSaveTransponderScreen={
BgZ:false,Init:function(aArg){this.BgZ=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ew:function(G){if(this.Bd5){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);if(this.BgZ)A._GetAutoObject(A.Device.Device).A3(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).A3(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASm={WE:function(G){this.
Agx();A._GetAutoObject(C.BR).Tz(A.aaR(A.acf.Settings),[this,this.A3O]);A._GetAutoObject(
C.BR).Fz();this.AMa();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.ARC)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){},Abs:function(
){return C.Aqu;},Abt:function(){return C.Aq1;},Q_:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AC5());},HQ:function(G){C.
QD.HQ.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr(A._GetAutoObject(A.Device.Converter).AL7(this.LX.AC7())));this.N.Cf=[this,
this.AcU];this.N.Fc(A.jV);}this.N.OQ(false);this.N.OR(false);},Agj:function(){A.
_GetAutoObject(C.A8).Cd(47);},A3O:function(G){A._GetAutoObject(A.Device.Device).
Dw(0);A._GetAutoObject(C.A8).Cd(89);},_Init:function(aArg){C.QD._Init.call(this,
aArg);this.__proto__=C.ASm;this.Dr(C.ADl);this.Dk(A.aaR(A.acf.A8b));this.ATq(A._GetAutoObject(
C.Av_));},_ReInit:function(){C.QD._ReInit.call(this);this.Dk(A.aaR(A.acf.A8b));}
,_className:"Application::NoTransponderListScreen"};C.ASl={_Init:function(aArg){
C.I5._Init.call(this,aArg);this.__proto__=C.ASl;this.KW.Ar(false);this.KW.Aj(false
);this.KW.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADl={DX:function(G){C.Kr.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(8));},_Init:function(aArg){C.Kr._Init.call(this,aArg);this.__proto__=C.ADl;
},_className:"Application::HeaderNoTransponderListFilter"};C.ABT={AuX:null,Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuX.BS(aIndex);},_Init:
function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuX={I:this},0);this.__proto__=C.ABT;},_Done:function(){this.__proto__=
C.Gd;this.AuX._Done();C.Gd._Done.call(this);},_ReInit:function(){C.Gd._ReInit.call(
this);this.AuX._ReInit();},_Mark:function(D){var B;C.Gd._Mark.call(this,D);if((B=
this.AuX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL6={Co:null,Ad3:null,Init:function(aArg){this.Bb(this.Co);},Ln:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaG];this.BP.Cf=null;
this.BP.B$=[this,this.A3p];this.BP.CR(A.jV);this.BP.Cw(null);this.BP.C1(A.aaL(A.
ach.AeA));}return this.BP;},AAx:function(G){var Aa=(C.Ajk.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad3)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(Bar);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ajk._Init.call(this.
Co={I:this},0);C.Ajk._Init.call(this.Ad3={I:this},0);this.__proto__=C.AL6;this.H(
Qc);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(IW);this.Co.T(A.aaR(A.acf.
AEj));this.Ad3.H(Qd);this.Ad3.T(A.aaR(A.acf.Ty));this.J(this.Co,0);this.J(this.Ad3
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAx];this.Ad3.AR=[this,this.
AAx];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Co._Done();this.
Ad3._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Co._ReInit();this.Ad3._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AEj));this.Ad3.T(A.aaR(A.acf.Ty));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BF_={Undefined:0,BF8:1,BF9:2,IdScanned:3,BE4:4,BD_:5,BEO:6};C.AMi={A$E:function(
){A._GetAutoObject(A.Device.Device).A3(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfB]);},_Init:function(aArg){C.AuN._Init.call(
this,aArg);this.__proto__=C.AMi;this.Gd.Au(1);this.ATw(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aeu={VZ:null,V0:null,V1:null,Ag4:null,Ag5:null,Ag6:null,CE:null,Cf:null,B$:null
,An2:A.jV,An3:A.jV,An4:A.jV,Aq8:0,Aq9:0,Aq_:0,Ahm:0,ZE:false,WN:false,Aso:false,
AsD:false,AsC:false,AjB:function(Fg){this.CE=Fg.CE;this.Cf=Fg.Cf;this.B$=Fg.B$;this.
An2=Fg.An2;this.An3=Fg.An3;this.An4=Fg.An4;this.Ahm=Fg.Ahm;this.VZ=Fg.VZ;this.V0=
Fg.V0;this.V1=Fg.V1;this.Ag4=Fg.Ag4;this.Ag5=Fg.Ag5;this.Ag6=Fg.Ag6;this.AsC=Fg.
AsC;this.AsD=Fg.AsD;this.Aso=Fg.Aso;this.WN=Fg.WN;this.ZE=Fg.ZE;this.Aq8=Fg.Aq8;
this.Aq9=Fg.Aq9;this.Aq_=Fg.Aq_;},AkR:function(Fg){Fg.CE=this.CE;Fg.Cf=this.Cf;Fg.
B$=this.B$;Fg.Hy(this.An2);Fg.Fc(this.An3);Fg.CR(this.An4);Fg.AFo(this.Ahm);Fg.AFf(
this.VZ);Fg.ArP(this.V0);Fg.Anz(this.V1);Fg.C1(this.Ag4);Fg.Cw(this.Ag5);Fg.C2(this.
Ag6);Fg.OQ(this.AsC);Fg.OR(this.AsD);Fg.Aso=this.Aso;Fg.WN=this.WN;Fg.ZE=this.ZE;
Fg.Bm6(this.Aq8);Fg.ATk(this.Aq9);Fg.A_h(this.Aq_);},_Init:function(aArg){this.__proto__=
C.Aeu;this.VZ=A.aaL(A.fl.Ak);this.V0=A.aaL(A.fl.Ak);this.V1=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VZ=A.aaL(
A.fl.Ak);this.V0=A.aaL(A.fl.Ak);this.V1=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V0)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.V1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag5)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CE)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.B$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Asz._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.ADj);},_className:"Application::NewAnimalSetTransponderScreen"};C.C8={Abc:null
,CountryToString:null,Du:function(){return 40;},C6:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lv(aIndex);},DZ:function(A7){return A7;
},H4:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abc)(F=this.Abc,F[2].call(F[0],E));},A1O:function(G){var F;if(!!this.Abc)this.Q=(
F=this.Abc,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_,this.Cb],0);},AE_:
function(E){if(A.aaZ(this.Abc,E))return;if(!!this.Abc)A.z$([this,this.A1O],this.
Abc,0);this.Abc=E;if(!!this.Abc)A.zX([this,this.A1O],this.Abc,0);A.pe([this,this.
A1O],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C8;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abc)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.O1={AC:null,Q:null,Background:null,Ip:null,Io:null,M4:
0,AM:0,Gq:0,F$:0,Agf:function(G){this.Ke(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IC=((Ae&0x40)===0x40);if(IC){this.Background.
L(A.jb.AV);this.C3(256);}else{this.Background.L(this.M4);this.C3(256);}},Age:function(
G){this.J$(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3M],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3M],E,0);if(!!E)A.pe([this
,this.A3M],this);},CU:function(E){if(this.M4===E)return;this.M4=E;this.Am();},Ke:
function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},J$:function(
G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gq)E=this.F$;if(E>this.F$)E=this.Gq;if(this.AM===E)return;this.AM=E;
this.Am();},Ga:function(E){if(this.Gq===E)return;this.Gq=E;this.Am();},EV:function(
E){if(this.F$===E)return;this.F$=E;this.Am();},C4:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},A3M:function(G){var F;if(!!this.
AC){this.Ga(0);this.EV(this.AC.H4());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BK._Init.call(this.Ip={
I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.O1;this.H(Bas
);this.Background.H(Atl);this.Ip.Filter=4;this.Io.Filter=5;this.M4=A.jb.CJ;this.
J(this.Background,0);this.Ip.BL=[this,this.Agf];this.Ip.D1=[this,this.Agf];this.
Io.BL=[this,this.Age];this.Io.D1=[this,this.Age];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Ip._Done();this.Io._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Ip._ReInit();this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RW={A1G:A.jV,Ai:function(
Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5L));this.Kx(this.A1G);},Ch:function(
G){C.FA.Ch.call(this,G);var AlC=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlC)this.A1G=Xg;else this.A1G=A._GetAutoObject(A.acj.KM).AjN(AlC);this.Am();
},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RW;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RX={A2L:0,Ai:function(Ae){C.FA.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARA));if(this.A2L>0)this.Kx(this.A2L.toFixed());else
this.Kx(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(this,G);this.A2L=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.FA._Init.call(
this,aArg);this.__proto__=C.RX;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Du:function(){return 5;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Aky(E);},A17:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B_,
this.Cb],0);},L0:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A17],[B=this.Animal,B.ASE,B.Aky],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A17],[B=this.Animal,B.ASE,B.Aky],0);A.pe([this,this.A17],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Du:function(){return 99;},C6:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BS(aIndex);},DZ:function(A7){return A7;
},H4:function(){return 98;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal
)this.Animal.N2(E);},A1E:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B_,this.Cb],0);},L0:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1E],[B=this.Animal,B.Awc,B.N2],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1E],[B=this.Animal,B.Awc,B.N2],0);A.pe([
this,this.A1E],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARV={V$:null,YN:null,AeN:null,Init:function(
aArg){this.Bb(this.V$);},Adv:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YN)this.ByD();else if(Aa===this.V$)this.BBp(this);else throw new
Error(Ayl);A._GetAutoObject(A.Device.Device).Dw(0);},BBp:function(G){var B;var F;
var Vn=(C.Amv.isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null
);if(!Vn){A.ab5("%s",Brf);return;}Vn.AKH(this);},ByD:function(){A._GetAutoObject(
A.Device.Helper).W.AGJ(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mq._Init.call(this.V$={I:this},0);C.Mq._Init.call(this.YN={
I:this},0);C.VS._Init.call(this.AeN={I:this},0);this.__proto__=C.ARV;var B;this.
H(AcP);this.V$.H(Qd);this.V$.Ar(true);this.V$.T(A.aaR(A.acf.A$l));this.V$.Bi(true
);this.YN.H(IW);this.YN.Ar(true);this.YN.T(A.aaR(A.acf.A49));this.YN.Bi(true);this.
AeN.H(BD);this.AeN.T(A.aaR(A.acf.ACT));this.AeN.Bi(true);this.J(this.V$,0);this.
J(this.YN,0);this.J(this.AeN,0);this.V$.AR=[this,this.Adv];this.YN.AR=[this,this.
Adv];this.AeN.AS_([B=A._GetAutoObject(A.Device.Device),B.Arw,B.Atn]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V$._Done();this.YN._Done(
);this.AeN._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V$._ReInit();this.YN._ReInit();this.AeN._ReInit();this.V$.
T(A.aaR(A.acf.A$l));this.YN.T(A.aaR(A.acf.A49));this.AeN.T(A.aaR(A.acf.ACT));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VS={
Ai:function(Ae){C.Uc.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl
){FS=A.jb.Text;GY=A.jb.Bm;}if(!this.LI){this.Background.L(FS);this.V.L(A.jb.Am4);
}else if(this.Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KH){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.
L(GY);}if(this.AmD){this.Mo.Cv(1);this.Mo.L(A.jb.H9);}else{this.Mo.Cv(0);this.Mo.
L(A.jb.Bm);}},_Init:function(aArg){C.Uc._Init.call(this,aArg);this.__proto__=C.VS;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.Av3={C9:null,A2:null,AF:
null,Akj:null,QY:null,EM:null,ASb:Lw,Bl:function(aSize){C.Co.Bl.call(this,aSize);
var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}this.Background.
L(FS);this.V.L(GY);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,Ct;C.Co.Ai.call(this
,Ae);this.Akj.L(this.V.AQ);this.QY.L(this.V.AQ);this.QY.R(Brg);this.T(((this.ASb+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak7(840003123456789).toFixed(
));if(!!this.A2&&!!this.AF){var A2R=this.QY.Afh([(this.QY.String.length-(F=this.
AF,F[1].call(F[0])))-(Ct=this.A2,Ct[1].call(Ct[0])),0]);var A4b=this.QY.Afh([this.
QY.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABj=this.QY.Dc();this.EM.H([
A2R[0]-1,ABj[1],A4b[0]+1,ABj[3]]);}else this.EM.H(this.QY.Dc());},DB:function(E){
if(this.C9===E)return;this.C9=E;this.Akj.Ax(E);},OO:function(E){if(A.aaZ(this.A2
,E))return;if(!!this.A2)A.z$([this,this.AaF],this.A2,0);this.A2=E;if(!!E)A.zX([this
,this.AaF],E,0);if(!!E)A.pe([this,this.AaF],this);},PU:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaH],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaH],E,0);if(!!E)A.pe([this,this.AaH],this);},AaH:function(G){this.Am(
);},AaF:function(G){this.Am();},Ar1:function(E){if(this.ASb===E)return;this.ASb=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akj={I:this},0);A.acg.Text._Init.call(this.QY={I:this},0);A.acg.BU._Init.call(
this.EM={I:this},0);this.__proto__=C.Av3;this.H(KZ);this.V.A6(0x11);this.Akj.H(O5
);this.QY.H(Brh);this.EM.H(Bri);this.EM.Nm(2);this.EM.L(A.jb.E1);this.J(this.Akj
,0);this.J(this.QY,0);this.J(this.EM,0);this.QY.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akj._Done();this.QY._Done();this.EM._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akj._ReInit();this.
QY._ReInit();this.EM._ReInit();this.QY.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUg:0,Init:
function(aArg){var B;A.zX([this,this.BeV],[B=A._GetAutoObject(A.Device.Device),B.
AEB,B.AIQ],0);A.pe([this,this.BeV],this);},HQ:function(G){C.TC.HQ.call(this,G);if(
this.AjR)this.N.Cw(A.aaL(A.ach.AD));else this.N.Cw(A.aaL(A.ach.ANk));this.N.C2(A.
aaL(A.ach.Options));this.N.Fc(A.jV);this.N.CR(A.jV);this.N.Cf=[this,this.A_5];this.
N.B$=[this,this.WE];this.N.ArP(A.aaL(A.fl.Ak));this.N.Anz(A.aaL(A.fl.Ak));},MZ:function(
G){this.Bff(this);},Op:function(G){this.BBi(this);},AdS:function(Aig,Aih,BxI){A.
_GetAutoObject(C.BR).ABK(Aig,Aih,[this,this.A9a,this.ATz],BxI);},WE:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjR){A._GetAutoObject(C.BR).
Tz(A.aaR(A.acf.Bim),[this,this.Boh]);A._GetAutoObject(C.BR).Fz();}this.AdS(A.aaR(
A.acf.Rating),[this,this.ATX],3);this.AdS(A.aaR(A.acf.Afv),[this,this.ATZ],2);this.
AdS(A.aaR(A.acf.Temperature),[this,this.ATY],1);this.AdS(A.aaR(A.acf.AdV),[this,
this.Boe],0);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Biq
));A._GetAutoObject(A.Device.Device).Dw(6);},ATz:function(E){if(this.AUg===E)return;
this.AUg=E;A.abo([this,this.A9a,this.ATz],0);},BeV:function(G){this.ATz(A._GetAutoObject(
A.Device.Device).D9);},A9a:function(){return this.AUg;},_Init:function(aArg){C.TC.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={VA:null
,Init:function(aArg){var B;A.zX([this,this.Aga],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);A.pe([this,this.Bg4],this);A.pe([this,this.Q_],this);},CC:function(
G){C.TC.CC.call(this,G);A.pe([this,this.Bg9],this);},AGP:function(G){C.TC.AGP.call(
this,G);if(!!this.Lf)this.AhE(this.Lf,this.VA);},HQ:function(G){C.TC.HQ.call(this
,G);this.N.Cw(A.aaL(A.ach.AQ_));this.N.C2(A.aaL(A.ach.AQ$));if(this.AjR)this.N.ATk(
0);else this.N.ATk(1);this.N.A_h(A._GetAutoObject(A.Device.Converter).Bhw(A._GetAutoObject(
A.Device.Device).D9));this.N.Fc(A.jV);this.N.CR(A.jV);this.N.Cf=[this,this.Bl6];
this.N.B$=[this,this.Boj];this.N.ArP(A.aaL(A.fl.Ak));this.N.Anz(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QK()){this.N.I9.C3(100);this.N.Cf=null;
}else this.N.I9.C3(255);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.Le.
C3(100);this.N.B$=null;}else this.N.Le.C3(255);if(A._GetAutoObject(A.Device.Device
).An.B9()<=1){this.N.T1.C3(100);this.N.T2.C3(100);}else{this.N.T1.C3(255);this.N.
T2.C3(255);}},MZ:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;
var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;if(LC>=A._GetAutoObject(A.
Device.Device).An.B9())LC=0;A._GetAutoObject(A.Device.Helper).G8(LC);},Op:function(
G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;var LC=A._GetAutoObject(
A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(A.Device.Device).An.B9(
)-1;A._GetAutoObject(A.Device.Helper).G8(LC);},Af$:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A8).Cd(94);},Bl6:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},Boj:function(G){this.Bff(this);},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).Mt());A.pe([this,this.Bg9
],this);},Bg4:function(G){if(!A._GetAutoObject(A.Device.Device).An.B9()){this.VA.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QK()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.VA.R(A.aaR(A.acf.AEr));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC6(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.VA.R(A.aaR(A.acf.AN$));else this.VA.R(A.aaR(
A.acf.AN_));}else this.VA.R(A.aaR(A.acf.ASi));}else this.VA.Z(false);},Bg9:function(
G){var BCg=A._GetAutoObject(A.Device.Helper).W.Id;var A4e=A._GetAutoObject(A.Device.
Device).An.LT(0,BCg);if(!A._GetAutoObject(A.Device.Device).An.B9())A._GetAutoObject(
A.Device.Helper).G8(-1);else if(A4e<0)A._GetAutoObject(A.Device.Helper).G8(0);},
Aga:function(G){this.Bg4(this);this.HQ(this);},_Init:function(aArg){C.TC._Init.call(
this,aArg);C.AkS._Init.call(this.VA={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.APy);this.VA.H(Ff);this.J(this.VA,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TC;this.VA._Done();C.TC._Done.call(this);},_ReInit:function(){
C.TC._ReInit.call(this);this.VA._ReInit();},_Mark:function(D){var B;C.TC._Mark.call(
this,D);if((B=this.VA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMx={QS:null,Wa:null,AbG:null,YQ:null,Init:function(aArg){var B;var F;this.Bb(
this.QS);if(!!A._GetAutoObject(C.A8).Q){var Vn=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vn){A.ab5("%s",AZ5);
return;}else{if(Vn.AjR)this.QS.T(A.aaR(A.acf.Bg));else this.QS.T(A.aaR(A.acf.EU)
);var Azx=A._GetAutoObject(A.Device.Device).An.Filter;if(!Azx||A._GetAutoObject(
A.Device.Helper).Are(Azx))this.YQ.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.B9()){this.Wa.Ar(false);this.QS.Ar(false);}}}},Adv:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbG)A._GetAutoObject(C.A8).Cd(9);else if(Aa===this.Wa)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QS)this.BCL();else if(Aa===this.YQ)this.
A1M();else throw new Error(Ayl);},BCL:function(){var B;var F;var Vn=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vn){A.
ab5("%s",AZ5);return;}Vn.A_5(this);},A1M:function(){var B;var F;var Vn=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vn){A.
ab5("%s",AZ5);return;}Vn.Q_(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mq._Init.call(this.QS={I:this},0);C.Mq._Init.call(this.Wa={I:this},
0);C.Mq._Init.call(this.AbG={I:this},0);C.Mq._Init.call(this.YQ={I:this},0);this.
__proto__=C.AMx;this.H(AfE);this.QS.H(Aaf);this.QS.Ar(true);this.QS.T(A.aaR(A.acf.
EU));this.QS.Bi(true);this.Wa.H(Qd);this.Wa.Ar(true);this.Wa.T(A.aaR(A.acf.AUG));
this.Wa.Bi(true);this.AbG.H(IW);this.AbG.T(A.aaR(A.acf.AkU));this.AbG.Bi(true);this.
YQ.H(BD);this.YQ.T(A.aaR(A.acf.ACe));this.YQ.Bi(true);this.J(this.QS,0);this.J(this.
Wa,0);this.J(this.AbG,0);this.J(this.YQ,0);this.QS.AR=[this,this.Adv];this.Wa.AR=[
this,this.Adv];this.AbG.AR=[this,this.Adv];this.YQ.AR=[this,this.Adv];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QS._Done();this.Wa._Done(
);this.AbG._Done();this.YQ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QS._ReInit();this.Wa._ReInit();this.AbG.
_ReInit();this.YQ._ReInit();this.QS.T(A.aaR(A.acf.EU));this.Wa.T(A.aaR(A.acf.AUG
));this.AbG.T(A.aaR(A.acf.AkU));this.YQ.T(A.aaR(A.acf.ACe));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I_={T3:null,EA:null,Yn:null,Background:null,Ap:null,Ip:null,Io:null,M4:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var IC=((Ae&0x40)===0x40);if(IC){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.C3(256);}else if(Hf){this.Background.L(this.M4);this.Ap.L(A.jb.Text);this.C3(
256);}else{this.Background.L(this.M4);this.Ap.L(A.jb.Text);this.C3(128);}if(!this.
AM)this.Ap.Cv(0);else if(this.AM>0){if(A.aaZ(this.T3,[B=A._GetAutoObject(A.Device.
Device),B.Awm,B.AyQ]))this.Ap.Cv(2);else if(A.aaZ(this.T3,[B=A._GetAutoObject(A.
Device.Device),B.Awl,B.AyP]))this.Ap.Cv(3);else if(!!this.Yn&&((F=this.Yn,F[1].call(
F[0]))===1))this.Ap.Cv(1);else this.Ap.Cv(0);}else if(A.aaZ(this.T3,[B=A._GetAutoObject(
A.Device.Device),B.Awm,B.AyQ]))this.Ap.Cv(6);else if(A.aaZ(this.T3,[B=A._GetAutoObject(
A.Device.Device),B.Awl,B.AyP]))this.Ap.Cv(7);else if(!!this.Yn&&((F=this.Yn,F[1].
call(F[0]))===1))this.Ap.Cv(5);else this.Ap.Cv(4);},Agf:function(G){this.Ke(this
);},Age:function(G){this.J$(this);},Ke:function(G){this.Bx(1);},J$:function(G){this.
Bx(-1);},Bne:function(E){if(A.aaZ(this.T3,E))return;if(!!this.T3)A.z$([this,this.
A3v],this.T3,0);this.T3=E;if(!!E)A.zX([this,this.A3v],this.T3,0);A.pe([this,this.
A3v],this);},Uo:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Agd],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Agd],this.EA,0);if(!!E)A.pe([this
,this.Agd],this);},A3v:function(G){var F;if(!!this.T3)this.Bx((F=this.T3,F[1].call(
F[0])));},Agd:function(G){A.pe([this,this.BCY],this);},CU:function(E){if(this.M4===
E)return;this.M4=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T3)(F=this.T3,F[2].call(F[0],E));this.Am();A.abo([this,this.Uj,this.
Bx],0);},A99:function(E){if(A.aaZ(this.Yn,E))return;if(!!this.Yn)A.z$([this,this.
Agd],this.Yn,0);this.Yn=E;if(!!E)A.zX([this,this.Agd],this.Yn,0);if(!!E)A.pe([this
,this.Agd],this);},BCY:function(G){var F,Ct;if(!this.Yn||!this.EA)return;this.Bne(
A._GetAutoObject(A.Device.Helper).BdI((F=this.Yn,F[1].call(F[0])),(Ct=this.EA,Ct[
1].call(Ct[0]))));this.Am();},Uj:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BK._Init.call(this.Ip={I:this},0);
A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.I_;this.H(AII);this.Background.
A0(0x3F);this.Background.H(AII);this.Ap.A0(0x3C);this.Ap.H(AII);this.Ip.Filter=4;
this.Io.Filter=5;this.M4=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AU7));this.Ip.BL=[this,this.Agf];this.Io.BL=[this,this.Age];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Ip._Done();this.Io._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Ip._ReInit(
);this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL5={WE:function(G){var B;var F;this.Agx();if(!!A._GetAutoObject(A.Device.Helper
).AOM((F=this.Fn,F[1].call(F[0])),0,true))this.AuI(A.aaR(A.acf.A7c),[this,this.Bok
],[B=A._GetAutoObject(A.Device.Device),B.A8t,B.Bbc]);else A._GetAutoObject(C.BR).
AaU(A.aaR(A.acf.A7c));A._GetAutoObject(C.BR).Fz();this.I3(A.aaR(A.acf.LinkTransponder
),[this,this.Bnv],8);this.I3(A.aaR(A.acf.Ty),[this,this.Akv],9);this.I3(A.aaR(A.
acf.Bag),[this,this.Bn8],10);this.I3(A.aaR(A.acf.AGl),[this,this.ATE],3);this.I3(
A.aaR(A.acf.An1),[this,this.AwX],2);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abs:function(){return C.Aqu;},Abt:function(){return C.Aq1;
},Q_:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6O((F=this.Fn,F[1].call(F[0]))));},HQ:function(G){var F;C.GJ.HQ.
call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.
N.OQ(false);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(52);},A3A:
function(G){C.GJ.A3A.call(this,G);A.pe([this,this.A0F],this);},Bok:function(G){A.
_GetAutoObject(A.Device.Device).Aws(!A._GetAutoObject(A.Device.Device).Aqe);this.
An9(this);},An9:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E$();A._GetAutoObject(A.Device.Helper).BoS(Be);if(A._GetAutoObject(A.Device.Device
).Aqe){var A2t=A._GetAutoObject(A.Device.Helper).AOM((F=this.Fn,F[1].call(F[0]))
,21600,true);Be.CW(A2t);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AL5;var B;this.Dk(A.aaR(A.acf.
Av8));this.AwS([B=A._GetAutoObject(A.Device.Device),B.A8s,B.Bbb]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dk(A.aaR(A.acf.Av8));},_className:"Application::ActionListScreen"
};C.AL4={_Init:function(aArg){C.I5._Init.call(this,aArg);this.__proto__=C.AL4;},
_className:"Application::ActionListFilterScreen"};C.APy={IN:null,IT:null,Bc:null
,MD:A.jV,Init:function(aArg){var B;A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9e,B.A_D],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);},Df:function(E){C.IL.Df.call(this,E);this.IT.L(E);},DX:function(
G){C.IL.DX.call(this,G);var Azx=A._GetAutoObject(A.Device.Device).An.Filter;if(!
Azx||A._GetAutoObject(A.Device.Helper).Are(Azx))this.IN.Z(false);else this.IN.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqY())this.Aw4(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+Bat)+A._GetAutoObject(A.Device.Device).An.B9().
toFixed());else this.Aw4(Bau);},Aw4:function(E){if(this.MD===E)return;this.MD=E;
this.IT.R(E);},_Init:function(aArg){C.IL._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IN={I:this},0);A.acg.Text._Init.call(this.IT={I:this},0);A.acg.C7._Init.call(
this.Bc={I:this},0);this.__proto__=C.APy;this.HR.H(Brj);this.DS.H(Brk);this.IN.H(
Brl);this.IN.L(A.jb.Text);this.IT.H(Bav);this.IT.Hn(2);this.IT.KS(true);this.IT.
A6(0x12);this.IT.R(Baw);this.Bc.DC(AyE);this.Bc.DM(Atj);this.Bc.L(A.jb.Bc);this.
J(this.IN,0);this.J(this.IT,0);this.J(this.Bc,0);this.IN.Ax(A.aaL(A.ach.AeC));this.
IT.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IL;this.
IN._Done();this.IT._Done();this.Bc._Done();C.IL._Done.call(this);},_ReInit:function(
){C.IL._ReInit.call(this);this.IN._ReInit();this.IT._ReInit();this.Bc._ReInit();
this.IT.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IL._Mark.call(this,D);if((
B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsJ={Text:null,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.O1.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xg);else this.Text.R(this.AC.Gl((F=this.Q,F[1].call(F[0]
))));var IC=((Ae&0x40)===0x40);if(IC)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.O1._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsJ;this.Text.R(Rp);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.O1;this.Text._Done();C.O1.
_Done.call(this);},_ReInit:function(){C.O1._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.O1._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Arb={C9:null,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.C9.H(A.abK(this.
C9.M,aSize));},Ai:function(Ae){var B;var F;C.O1.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C9.Ax(null);else{this.C9.Ax(this.AC.AC1(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C9.Cv(this.AC.AC3(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IC=((
Ae&0x40)===0x40);if(IC)this.C9.L(A.jb.Bm);else this.C9.L(A.jb.Text);},_Init:function(
aArg){C.O1._Init.call(this,aArg);A.acg.Ap._Init.call(this.C9={I:this},0);this.__proto__=
C.Arb;this.H(AII);this.C9.H(Bas);this.J(this.C9,0);},_Done:function(){this.__proto__=
C.O1;this.C9._Done();C.O1._Done.call(this);},_ReInit:function(){C.O1._ReInit.call(
this);this.C9._ReInit();},_Mark:function(D){var B;C.O1._Mark.call(this,D);if((B=
this.C9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Au7={VU:null,DirectionOfCountingToString:null,Aei:null,Du:function(){return 2;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},Gl:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jV;return this.
DirectionOfCountingToString.BS(aIndex);},DZ:function(A7){return A7;},H4:function(
){return this.Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.VU)(F=
this.VU,F[2].call(F[0],E));},AC1:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Aei.AsK(aIndex);},AC3:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Aei.AsL(aIndex);},A10:function(G){var F;
if(!!this.VU)this.Q=(F=this.VU,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.Cb],0);},Ae1:function(E){if(A.aaZ(this.VU,E))return;if(!!this.VU)A.z$([this
,this.A10],this.VU,0);this.VU=E;if(!!this.VU)A.zX([this,this.A10],this.VU,0);A.pe([
this,this.A10],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aei._Init.call(this.Aei={I:this},0);this.__proto__=C.Au7;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aei._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aei._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VU)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMp={Hu:null,EA:null,AnimalIdGenerationMethodToString:
null,AdZ:null,Du:function(){return 4;},C6:function(aIndex){var F;var A7=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A7=0;break;case 1:A7=1;break;
case 2:A7=this.BzO((F=this.EA,F[1].call(F[0])));break;case 3:A7=5;break;default:
throw new Error(Brm+aIndex.toFixed());}return A7;},Gl:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jV;return this.AnimalIdGenerationMethodToString.
BS(this.C6(aIndex));},DZ:function(A7){var aIndex=-1;switch(A7){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Brn+A7.toFixed());}return aIndex;},H4:function(){return this.
Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hu)(F=this.Hu,F[2].
call(F[0],E));},AC1:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.AdZ.AsK(this.C6(aIndex));},AC3:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.AdZ.AsL(this.C6(aIndex));},A1u:function(G){var F;
if(!!this.Hu)this.Q=(F=this.Hu,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.Cb],0);},Bmc:function(E){if(A.aaZ(this.Hu,E))return;if(!!this.Hu)A.z$([this
,this.A1u],this.Hu,0);this.Hu=E;if(!!this.Hu)A.zX([this,this.A1u],this.Hu,0);A.pe([
this,this.A1u],this);},Uo:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Agd],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Agd],this.EA
,0);A.pe([this,this.Agd],this);},Agd:function(G){A.pe([this,this.ByF],this);},BzO:
function(L6){var Rr=0;switch(L6){case 0:Rr=2;break;case 1:Rr=3;break;case 2:Rr=4;
break;default:throw new Error(Bro+L6.toFixed());}return Rr;},ByF:function(G){var
BeH=this.C6(this.DZ(this.Q));if(this.Q!==BeH)this.Au(BeH);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdZ._Init.call(this.
AdZ={I:this},0);this.__proto__=C.AMp;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdZ._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdZ._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGL={FM:null,Aa1:null,Q:null,Fm:null,Fb:null,HH:null,Wv:null,AW:null,H0:null
,Kn:null,A_:0,AM:0,Alu:0,Init:function(aArg){var B;A.zX([this,this.BeU],[B=A._GetAutoObject(
A.Device.Device),B.Anq,B.Aoy],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CU(A.jb.CJ);this.Wv.CU(A.jb.CJ);
this.Background.L(A.jb.CT);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CT);this.HH.
CU(A.jb.CT);this.Wv.CU(A.jb.CT);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}
}else{if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CU(A.jb.CJ);this.Wv.CU(A.jb.CJ);}else{
this.AW.FO(A.jb.CT);this.HH.CU(A.jb.CT);this.Wv.CU(A.jb.CT);}this.Bb(null);}},I1:
function(G){C.Eg.I1.call(this,G);if(!this.A_)this.FV(this);else this.He(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}break;
default:this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:
function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)this.FM.AjB((
F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.
A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{if(this.AW.A8M())this.Bb(
this.AW);else this.Bb(this.Wv);if(!this.AM)this.AW.SQ(2);else this.AW.SQ(7);}break;
default:throw new Error(Atm+this.A_.toFixed());}this.DJ(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},C4:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uj,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Op:function(G){this.ABb(2);},MZ:function(G){this.ABb(
7);},ABb:function(GA){var B;var Azy=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azy){var AAo=(A.Core.P.isPrototypeOf(B=this.QJ(Azy,GA,0x15))?B:null);if(!!AAo){
this.Bb(AAo);return true;}}return false;},Ao1:function(G){A.pe([this,this.BeU],this
);},A4p:function(G){var B;var F;if(!this.H0.Hu){this.Kn.Ae1(null);return;}switch((
F=this.H0.Hu,F[1].call(F[0]))){case 0:case 1:this.Kn.Ae1(null);break;case 3:this.
Kn.Ae1([B=A._GetAutoObject(A.Device.Device),B.ASC,B.A0m]);break;case 2:this.Kn.Ae1([
B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0n]);break;case 4:case 5:this.Kn.Ae1([
B=A._GetAutoObject(A.Device.Device),B.AEG,B.AIU]);break;default:throw new Error(
Brp+(F=this.H0.Hu,F[1].call(F[0])).toFixed());}},BeU:function(G){var F;if(!this.
H0.Hu)return;A.pe([this,this.A4p],this);var At2=false;switch((F=this.H0.Hu,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{At2=true;this.AW.A_X(-1);}break;case 0:
case 1:{At2=false;this.AW.A_X(A._GetAutoObject(A.Device.Device).A2);}break;default:
throw new Error(Ayw+(F=this.H0.Hu,F[1].call(F[0])).toFixed());}this.AW.Ar(At2);this.
HH.Ar(At2);this.HH.Z(At2);if(((F=this.H0.Hu,F[1].call(F[0]))!==this.Alu)||(At2===
false)){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMn((F=this.H0.
Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).BjX((F=this.H0.Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kv(A._GetAutoObject(A.Device.Device).A2);else this.AW.Kv(0);this.Alu=(
F=this.H0.Hu,F[1].call(F[0]));},A9L:function(E){var B;if(this.Aa1===E)return;if(
!!this.Aa1){A.z$([this,this.Ao1],[B=this.Aa1,B.WC,B.JW],0);A.z$([this,this.Ao1],[
B=this.Aa1,B.Anu,B.Nj],0);A.z$([this,this.Ao1],[B=this.Aa1,B.ArA,B.PW],0);this.H0.
Uo(null);}this.Aa1=E;if(!!E){A.zX([this,this.Ao1],[B=this.Aa1,B.WC,B.JW],0);A.zX([
this,this.Ao1],[B=this.Aa1,B.Anu,B.Nj],0);A.zX([this,this.Ao1],[B=this.Aa1,B.ArA
,B.PW],0);this.H0.Uo([B=this.Aa1,B.WC,B.JW]);}if(!!E)A.pe([this,this.Ao1],this);
},Uj:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={I:this},0
);C.Arb._Init.call(this.HH={I:this},0);C.Arb._Init.call(this.Wv={I:this},0);C.AvT.
_Init.call(this.AW={I:this},0);C.AMp._Init.call(this.H0={I:this},0);C.Au7._Init.
call(this.Kn={I:this},0);this.__proto__=C.AGL;var B;this.H(UZ);this.V.Ar(false);
this.V.R(Atc);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fb.Filter=7;this.HH.H(Brq);
this.HH.Ar(false);this.Wv.H(Brr);this.AW.H(Brs);this.AW.Ar(false);this.J(this.HH
,0);this.J(this.Wv,0);this.J(this.AW,0);this.FM=A._NewObject(C.Aeu,0);this.Fm.BL=[
this,this.Op];this.Fb.BL=[this,this.MZ];this.HH.CK(this.Kn);this.HH.Au([B=this.Kn
,B.B_,B.Cb]);this.Wv.CK(this.H0);this.Wv.Au([B=this.H0,B.B_,B.Cb]);this.AW.Au([this
,this.Uj,this.Bx]);this.H0.Bmc([B=A._GetAutoObject(A.Device.Device),B.Anq,B.Aoy]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fb.
_Done();this.HH._Done();this.Wv._Done();this.AW._Done();this.H0._Done();this.Kn.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fm._ReInit();this.Fb._ReInit();this.HH._ReInit();this.Wv._ReInit();this.AW._ReInit(
);this.H0._ReInit();this.Kn._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wv)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G5={AzQ:null,Fm:null,Fb:null,G2:null,
F0:null,EM:null,M9:0,AM4:0,AB6:0,Uv:0,Bad:-1,AM3:false,Init:function(aArg){A.pe([
this,this.A0S],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AM3);this.EM.H(A.wC(this.Ys(this.AB6).M,this.Ys((this.AB6+this.AM4)-1).M));},Op:
function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var A1J=this.Bgr(2);if(A1J===
false)D5.NL=true;},MZ:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var
A1J=this.Bgr(7);if(A1J===false)D5.NL=true;},Bgr:function(GA){var B;var DV=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DV=this.BdK(DV,GA,true);if(!!DV){this.Bb(DV);this.
AzQ=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adu:function(
G){A.ab5("%s",Alg);},GX:function(s){this.Adu(s);},FO:function(E){if(this.M9===E)
return;this.M9=E;this.F0.CU(E);this.G2.CU(E);},SQ:function(GA){var B;switch(GA){
case 2:this.Bb(this.G2);break;case 7:this.Bb(this.F0);break;default:A.ab5("%s%e"
,Brt,GA);}this.AzQ=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LO:function(G){},A0S:
function(s){this.LO(s);},AE4:function(E){if(this.AM3===E)return;this.AM3=E;this.
Am();},A9R:function(E){if(this.AM4===E)return;this.AM4=E;this.Am();},A9Q:function(
E){if(this.AB6===E)return;this.AB6=E;this.Am();},Ys:function(HA){var B5=null;switch(
HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.G2;break;default:A.ab5("%s",Ah4
);}return B5;},Kv:function(E){if(this.Uv===E)return;this.Uv=E;this.Amo();},Amo:function(
){A.ab5("%s",Alg);},BdK:function(Ac2,GA,LI){var B;if(!!Ac2){var Be;if(LI)Be=0x11;
else Be=0x0;switch(GA){case 2:Ac2=(C.DF.isPrototypeOf(B=this.AqM(Ac2,Be))?B:null
);break;case 7:Ac2=(C.DF.isPrototypeOf(B=this.TQ(Ac2,Be))?B:null);break;default:
throw new Error(Bru);}}return Ac2;},A_X:function(E){if(this.Bad===E)return;this.
Bad=E;var DV=this.F0;var A18;while(!!DV){A18=!!E;DV.Ar(A18);DV.Z(A18);if(DV===this.
AzQ)this.Bb(DV);DV=this.BdK(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.
call(this.Fb={I:this},0);C.DF._Init.call(this.G2={I:this},0);C.DF._Init.call(this.
F0={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.G5;this.
H(Brv);this.Fm.Filter=6;this.Fb.Filter=7;this.M9=A.jb.CJ;this.G2.H(E7);this.F0.H(
Bax);this.EM.H(Brw);this.EM.Nm(2);this.EM.L(A.jb.E1);this.J(this.G2,0);this.J(this.
F0,0);this.J(this.EM,0);this.Fm.BL=[this,this.Op];this.Fm.D1=[this,this.Op];this.
Fb.BL=[this,this.MZ];this.Fb.D1=[this,this.MZ];this.AzQ=this.F0;this.G2.Dj=[this
,this.GX];this.F0.Dj=[this,this.GX];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fm._Done();this.Fb._Done();this.G2._Done();this.F0._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fm._ReInit();this.Fb._ReInit();this.G2._ReInit();this.F0._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzQ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.ARe={Dy:null,CV:null,Cu:null
,FO:function(E){if(this.M9===E)return;C.HL.FO.call(this,E);this.Cu.CU(E);this.CV.
CU(E);this.Dy.CU(E);},Ys:function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.
F0;break;case 1:B5=this.Cu;break;case 2:B5=this.CV;break;case 3:B5=this.Dy;break;
case 4:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(
this.CV={I:this},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.ARe;this.
H(Brx);this.G2.H(Atl);this.Dy.H(Bay);this.CV.H(Baz);this.Cu.H(BaA);this.F0.H(Bry
);this.J(this.Dy,-2);this.J(this.CV,-2);this.J(this.Cu,-2);this.Dy.Dj=[this,this.
GX];this.CV.Dj=[this,this.GX];this.Cu.Dj=[this,this.GX];},_Done:function(){this.
__proto__=C.HL;this.Dy._Done();this.CV._Done();this.Cu._Done();C.HL._Done.call(this
);},_ReInit:function(){C.HL._ReInit.call(this);this.Dy._ReInit();this.CV._ReInit(
);this.Cu._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.
Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVJ={Rc:null,AcH:null,AVI:0,CC:function(G){this.AcH.Ar(true);},E4:function(G
){this.AcH.Ar(false);},Bn6:function(E){if(this.AVI===E)return;this.AVI=E;this.Rc.
R((((A.aaR(A.acf.AVH)+AcS)+E.toFixed())+Brz)+A.aaR(A.acf.Lc));},BlZ:function(){return this.
AVI;},BBF:function(G){A._GetAutoObject(C.A8).Cd(3);A._GetAutoObject(A.Device.Device
).Anx(1);},_Init:function(aArg){C.X2._Init.call(this,aArg);C.CG._Init.call(this.
Rc={I:this},0);A.acl.Gm._Init.call(this.AcH={I:this},0);this.__proto__=C.AVJ;this.
AeO.H(BrA);this.UD.R(A.jV);this.Rc.H(BrB);this.Rc.R(A.aaR(A.acf.AVH)+BaB);this.Rc.
L(A.jb.Text);this.AcH.HO(1);this.AcH.Fr(5000);this.AcH.B2=100;this.J(this.Rc,0);
this.Rc.S(A.aaL(A.fl.Af));this.Rc.AZ(A.aaL(A.fl.Ak));this.Rc.Cr(A.aaL(A.fl.Bh));
this.AcH.SC=[this,this.BBF];this.AcH.Q=[this,this.BlZ,this.Bn6];},_Done:function(
){this.__proto__=C.X2;this.Rc._Done();this.AcH._Done();C.X2._Done.call(this);},_ReInit:
function(){C.X2._ReInit.call(this);this.Rc._ReInit();this.AcH._ReInit();this.Rc.
R(A.aaR(A.acf.AVH)+BaB);this.Rc.S(A.aaL(A.fl.Af));this.Rc.AZ(A.aaL(A.fl.Ak));this.
Rc.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X2._Mark.call(this,D);if((B=this.
Rc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.AR8={K5:null,Lk:null,Bew:false,Init:
function(aArg){this.Bb(this.Da);},Ew:function(G){var B;if(!!this.K5)this.K5.Ew(this
);C.Wx.Ew.call(this,G);},Agh:function(G){var B;if(!!this.K5)this.K5.Agh(this);C.
Wx.Agh.call(this,G);},CC:function(G){var B;if(!this.Bew){this.Bew=true;A.pe([this
,this.A3U],this);}else if(!this.K5){this.K5=A._NewObject(C.AR_,0);this.K5.A95([this
,this.AA2]);this.LO(this);this.K5.LO(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.Wx.CC.call(this,G);}else C.Wx.CC.call(this,G
);},Ap5:function(G){var B;if(!!this.K5)this.K5.Ap5(this);},AA2:function(G){var B;
var F;this.LO(this);this.K5.LO(this);A.pe([this,this.AcT],this);var Bd9=this.LV;
this.AeY(A._GetAutoObject(A.Device.Helper).Abq(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVG(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bd9);if(Bd9)A._GetAutoObject(
A.Device.Helper).W.PW(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SK(A._GetAutoObject(A.Device.Helper).AMn((F=this.Di.H0.Hu,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JJ(this.Da);},A3U:function(
G){A._GetAutoObject(C.A8).Cd(79);},_Init:function(aArg){C.Wx._Init.call(this,aArg
);C.Rb._Init.call(this.Lk={I:this},0);this.__proto__=C.AR8;var B;this.Lk.H(Ah1);
this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACv));this.J(this.Lk,-9);this.J1(this.Gn,-
1);this.Lk.Gs([this,this.D_,this.GS]);this.Lk.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASM,B.AnF]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wx;this.Lk.
_Done();C.Wx._Done.call(this);},_ReInit:function(){C.Wx._ReInit.call(this);this.
Lk._ReInit();this.Lk.T(A.aaR(A.acf.ACv));},_Mark:function(D){var B;C.Wx._Mark.call(
this,D);if((B=this.K5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADU={AgQ:null,AgR:null,NO:null,NN:null,ET:null,FZ:null,Eq:null,Dy:null,CV:null,Cu:
null,FO:function(E){if(this.M9===E)return;C.Lg.FO.call(this,E);this.Cu.CU(E);this.
CV.CU(E);this.Dy.CU(E);this.Eq.CU(E);this.FZ.CU(E);this.ET.CU(E);this.NN.CU(E);this.
NO.CU(E);this.AgR.CU(E);this.AgQ.CU(E);},Ys:function(HA){var B5=null;switch(HA){
case-1:case 0:B5=this.F0;break;case 1:B5=this.Cu;break;case 2:B5=this.CV;break;case
3:B5=this.Dy;break;case 4:B5=this.Eq;break;case 5:B5=this.FZ;break;case 6:B5=this.
ET;break;case 7:B5=this.NN;break;case 8:B5=this.NO;break;case 9:B5=this.AgR;break;
case 10:B5=this.AgQ;break;case 11:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;
},_Init:function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(this.AgQ={I:this
},0);C.DF._Init.call(this.AgR={I:this},0);C.DF._Init.call(this.NO={I:this},0);C.
DF._Init.call(this.NN={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CV={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADU;this.H(BrC);this.G2.H(AIJ);this.AgQ.H(AyF);this.AgR.H(
AZ6);this.NO.H(AZ7);this.NN.H(AZ8);this.ET.H(AZ9);this.FZ.H(AZ_);this.Eq.H(AZ$);
this.Dy.H(BaC);this.CV.H(A0a);this.Cu.H(BrD);this.F0.H(BrE);this.J(this.AgQ,-2);
this.J(this.AgR,-2);this.J(this.NO,-2);this.J(this.NN,-2);this.J(this.ET,-2);this.
J(this.FZ,-2);this.J(this.Eq,-2);this.J(this.Dy,-2);this.J(this.CV,-2);this.J(this.
Cu,-2);this.AgQ.Dj=[this,this.GX];this.AgR.Dj=[this,this.GX];this.NO.Dj=[this,this.
GX];this.NN.Dj=[this,this.GX];this.ET.Dj=[this,this.GX];this.FZ.Dj=[this,this.GX
];this.Eq.Dj=[this,this.GX];this.Dy.Dj=[this,this.GX];this.CV.Dj=[this,this.GX];
this.Cu.Dj=[this,this.GX];},_Done:function(){this.__proto__=C.Lg;this.AgQ._Done(
);this.AgR._Done();this.NO._Done();this.NN._Done();this.ET._Done();this.FZ._Done(
);this.Eq._Done();this.Dy._Done();this.CV._Done();this.Cu._Done();C.Lg._Done.call(
this);},_ReInit:function(){C.Lg._ReInit.call(this);this.AgQ._ReInit();this.AgR._ReInit(
);this.NO._ReInit();this.NN._ReInit();this.ET._ReInit();this.FZ._ReInit();this.Eq.
_ReInit();this.Dy._ReInit();this.CV._ReInit();this.Cu._ReInit();},_Mark:function(
D){var B;C.Lg._Mark.call(this,D);if((B=this.AgQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HL={Q:null,AM:0,Ai:function(Ae){C.G5.Ai.call(this
,Ae);this.Amo();},Adu:function(G){var B;var F;var IA=A.jV;var B5=this.G2;while(!
!B5){if(B5.Ez>0)IA=IA+B5.Ez.toFixed();else IA=IA+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TQ(B5,0x11))?B:null);}var BO=this.AM;this.Bx(A.wz(IA,-1,
10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LO:function(G){},Amo:function(){var B;var F;if(!!this.Q){var DV=this.F0;
var AdD=this.Uv;var A7=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A7>0){DV.L1(A7%
10);A7=(A7/10)|0;}else if(AdD>0)DV.L1(0);else DV.L1(-1);DV=(C.DF.isPrototypeOf(B=
this.AqM(DV,0x11))?B:null);AdD=AdD-1;}}},C4:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)
A.pe([this,this.C4],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G5._Init.call(this,aArg);this.__proto__=C.HL;},_Mark:
function(D){var B;C.G5._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lg={AM:0,Q:null
,Ai:function(Ae){C.G5.Ai.call(this,Ae);this.Amo();},Adu:function(G){var B;var F;
var IA=A.jV;var B5=this.G2;while(!!B5){if(B5.Ez>0)IA=IA+B5.Ez.toFixed();else IA=
IA+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TQ(B5,0x11))?B:null);
}var BO=this.AM;this.Bx(A.ab0(IA,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LO:function(G){},Amo:function(){var B;
var F;if(!!this.Q){var DV=this.F0;var AdD=this.Uv;var A7=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A7>0){DV.L1((A7%10)|0);A7=Math.trunc(A7/10);}else if(AdD>0)DV.
L1(0);else DV.L1(-1);DV=(C.DF.isPrototypeOf(B=this.AqM(DV,0x11))?B:null);AdD=AdD-
1;}}},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Au:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G5._Init.call(
this,aArg);this.__proto__=C.Lg;},_Mark:function(D){var B;C.G5._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Du:function(){return 2;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvT={Eq:null,Dy:null,CV:null,Cu:null,FO:function(E){if(this.M9===E)return;C.
HL.FO.call(this,E);this.Cu.CU(E);this.CV.CU(E);this.Dy.CU(E);this.Eq.CU(E);},Ys:
function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Cu;break;case 2:B5=this.CV;break;case 3:B5=this.Dy;break;case 4:B5=this.Eq;break;
case 5:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},_Init:function(aArg
){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(
this.Dy={I:this},0);C.DF._Init.call(this.CV={I:this},0);C.DF._Init.call(this.Cu={
I:this},0);this.__proto__=C.AvT;this.H(Ayp);this.G2.H(AHQ);this.Eq.H(AHR);this.Dy.
H(AHS);this.CV.H(AHT);this.Cu.H(AHU);this.F0.H(AHV);this.EM.H(BaD);this.J(this.Eq
,-2);this.J(this.Dy,-2);this.J(this.CV,-2);this.J(this.Cu,-2);this.Eq.Dj=[this,this.
GX];this.Dy.Dj=[this,this.GX];this.CV.Dj=[this,this.GX];this.Cu.Dj=[this,this.GX
];},_Done:function(){this.__proto__=C.HL;this.Eq._Done();this.Dy._Done();this.CV.
_Done();this.Cu._Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.
call(this);this.Eq._ReInit();this.Dy._ReInit();this.CV._ReInit();this.Cu._ReInit(
);},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUO={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bpj(0);this.AttributeSet.Bpk(1);this.AttributeSet.Bpl(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var IC=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=
A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CT);this.V.L(A.jb.CJ);this.
AttributeSet.Ahq(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahq(A.jb.Bm);}else if(IC){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahq(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.
Am4);this.V.L(A.jb.Bm);this.AttributeSet.Ahq(A.jb.Bm);}else{this.Background.L(FS
);this.V.L(GY);this.AttributeSet.Ahq(GY);}this.LI=Hf;this.KH=Fw;this.Qv=GE;this.
Aph=IC;},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(A.acg.AuU.isPrototypeOf(
B=this.Dz.Cj)?B:null);CA.A9N(this.AttributeSet);CA.A6(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.BzH(this.AC.Gl(Gg)));else CA.R(Xg);CA.H(A.abK(CA.M,[this.Dz.We,(B=this.
Dz.M)[3]-B[1]]));},BzH:function(Bx7){var AAM=Bx7;AAM=A._GetAutoObject(A.Device.Helper
).MG(AAM,BrF,BrG);AAM=A._GetAutoObject(A.Device.Helper).MG(AAM,BrH,BrI);return BrJ+
AAM;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUO;this.Dz.H(BrK);this.Dz.Jz(2);
this.Dz.N3(A.acg.AuU);this.AttributeSet.Ahq(this.V.AQ);this.AttributeSet.BmY(A.aaL(
A.fl.AOD));this.AttributeSet.A_e(A.aaL(A.fl.Ak));this.AttributeSet.Aht(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A_e(A.aaL(A.fl.Ak));this.AttributeSet.Aht(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asz._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dr(C.ADk);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Du:function(){return 14;},C6:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gl:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BS(aIndex
);},DZ:function(A7){return A7;},H4:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OU={FM:null,EnumToCodeset:
null,Jx:null,A_:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A_===1){
if(this.Hl){this.Background.L(A.jb.CT);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BW.Bx.call(this,E);var BAC=this.
EnumToCodeset.AmG(this.Number);var BeG=this.AC.C6(this.AM);if(BAC!==BeG){this.AFD(
this.EnumToCodeset.Ael(BeG));A.abo([this,this.ASN,this.AFD],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[
this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(
A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=
this.N,F[1].call(F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}break;default:
this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:function(
G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(
F[0])));this.A_=EO;if((this.A_<0)||(this.A_>1))this.A_=0;this.DJ(this);if(!this.
A_)this.Bb(null);else this.A2j();this.Am();},AFD:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqU()>E)E=this.EnumToCodeset.
AqU();if(this.EnumToCodeset.H4()<E)E=this.EnumToCodeset.H4();}this.Number=E;var BO=
this.AM;if(!!this.EnumToCodeset){var Bzx=this.EnumToCodeset.AmG(E);this.Bx(this.
AC.DZ(Bzx));if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C6(this.AM)));A.abo(this.Q,0);}}},Any:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Vc:function(G){this.Ex(this.A_+1);},A2j:function(){A.ab5(
"%s",BrL);},ASN:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BK._Init.call(this.Jx={I:this},0);this.__proto__=C.OU;this.
Jx.Filter=1;this.FM=A._NewObject(C.Aeu,0);this.Jx.BL=[this,this.Vc];},_Done:function(
){this.__proto__=C.BW;this.Jx._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Jx._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jx)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeV={Text:null,Ai:function(
Ae){C.El.Ai.call(this,Ae);this.Text.L(this.ACW);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rj(this.AM));this.
Am();},AaH:function(G){A.pe([this,this.Agc],this);},AaF:function(G){A.pe([this,this.
Agc],this);},Al1:function(G){A.pe([this,this.Agc],this);},Agc:function(G){if((!this.
Ik||!this.A2)||!this.AF)return;},_Init:function(aArg){C.El._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeV;this.Text.A0(0x3F
);this.Text.H(As8);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.El;this.Text._Done();C.El.
_Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AR1={GI:0,C8:null,AW:null,Fa:null,
I_:null,CountryToString:null,La:0,Mb:false,Init:function(aArg){A.zX([this,this.ML
],[this,this.SE,this.Lp],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.I_.Z(this.
Afp);this.AW.FO(this.LS);this.Fa.CU(this.LS);this.I_.CU(this.LS);},DJ:function(G
){var F;if(!this.N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CR(this.CountryToString.BS(this.La));(F=this.N,
F[1].call(F[0])).B$=null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}}},Ex:function(EO){var Tp=this.
A_;this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>this.RK)this.A_=this.RK;if((
this.A_===1)&&!this.Afp)this.A_=2;switch(this.A_){case 0:{this.Bb(null);if(!this.
GI)this.Lp(0);}break;case 1:this.Bb(this.I_);break;case 2:this.Bb(this.Fa);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Tp>0))this.AW.SQ(2);else this.AW.SQ(7);}break;
default:throw new Error(Atm+this.A_.toFixed());}C.El.Ex.call(this,this.A_);},App:
function(G){this.I_.Uo(this.EA);},AaH:function(G){var F;this.AW.A9Q((F=this.AF,F[
1].call(F[0])));},AaF:function(G){var F;this.AW.A9R((F=this.A2,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mb=true;this.SG(A._GetAutoObject(
A.Device.Helper).VY(E,0,12));this.Lp(A._GetAutoObject(A.Device.Converter).S3(E));
this.Mb=false;if(!!E)this.AW.Kv(12);else this.AW.Kv(0);this.Am();},Al1:function(
G){A.pe([this,this.Agc],this);},FV:function(G){var F;if(!this.AM){var BO=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).AC$());if(this.AM!==BO){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjO:function(){return this.
GI;},AjQ:function(){return 999999999999;},Lp:function(E){if(this.La===E)return;this.
La=E;if(this.Mb===false)A.pe([this,this.Vp],this);A.abo([this,this.SE,this.Lp],0
);},SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Mb===false)A.pe([this
,this.Vp],this);A.abo([this,this.AbX,this.SG],0);},Vp:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.La),3,10)+A.abm(this.GI,12,10
);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agc:function(G){var F;if((!this.Ik||
!this.A2)||!this.AF)return;if(!(F=this.Ik,F[1].call(F[0])))this.AW.AE4(true);else
this.AW.AE4(false);},SE:function(){return this.La;},AbX:function(){return this.GI;
},_Init:function(aArg){C.El._Init.call(this,aArg);C.C8._Init.call(this.C8={I:this
},0);C.ADU._Init.call(this.AW={I:this},0);C.AsJ._Init.call(this.Fa={I:this},0);C.
I_._Init.call(this.I_={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AR1;var B;this.RK=3;this.AW.H(BrM);this.Fa.H(BaE);this.
I_.H(BaF);this.J(this.AW,0);this.J(this.Fa,0);this.J(this.I_,0);this.C8.AE_([this
,this.SE,this.Lp]);this.AW.Au([this,this.AbX,this.SG]);this.Fa.CK(this.C8);this.
Fa.Au([B=this.C8,B.B_,B.Cb]);this.I_.A99([B=A._GetAutoObject(A.Device.Device),B.
Awg,B.AyM]);this.Init(aArg);},_Done:function(){this.__proto__=C.El;this.C8._Done(
);this.AW._Done();this.Fa._Done();this.I_._Done();this.CountryToString._Done();C.
El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C8._ReInit(
);this.AW._ReInit();this.Fa._ReInit();this.I_._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AR0={GI:0,C8:null,AW:null,YG:null,Ks:null,Fa:null,I_:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pz:0,La:0,Mb:false,Init:function(aArg){A.
zX([this,this.ML],[this,this.PT,this.EC],0);A.zX([this,this.ML],[this,this.SE,this.
Lp],0);A.zX([this,this.ML],[this,this.Ans,this.Ahu],0);},Ai:function(Ae){C.El.Ai.
call(this,Ae);this.I_.Z(this.Afp);this.AW.FO(this.LS);this.YG.FO(this.LS);this.Ks.
FO(this.LS);this.Fa.CU(this.LS);this.I_.CU(this.LS);},DJ:function(G){var F;if(!this.
N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this
,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.
N,F[1].call(F[0])).CR(this.CountryToString.BS(this.La));(F=this.N,F[1].call(F[0]
)).B$=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CR(((A.aaR(A.acf.AGU)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.
acf.BhR));break;case 1:(F=this.N,F[1].call(F[0])).CR(((A.aaR(A.acf.AGU)+A.aaR(A.
acf.Colon))+AcS)+A.aaR(A.acf.Bpp));break;case 2:(F=this.N,F[1].call(F[0])).CR(((
A.aaR(A.acf.AGU)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.acf.BiT));break;default:(F=this.
N,F[1].call(F[0])).CR(((A.aaR(A.acf.AGU)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).B$=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0]
)).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0
])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null
);(F=this.N,F[1].call(F[0])).CR((A.aaR(A.acf.EN)+Aye)+this.GermanStateToString.Lv(
A._GetAutoObject(A.Device.Converter).ACZ(this.Pz)));(F=this.N,F[1].call(F[0])).B$=
null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[
1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CR(
A.jV);(F=this.N,F[1].call(F[0])).B$=null;}}},Ex:function(EO){var Tp=this.A_;if(EO<
0)EO=0;else if(EO>this.RK)EO=this.RK;if((EO===1)&&!this.Afp)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.Pz)this.Lp(0);}break;case
1:this.Bb(this.I_);break;case 2:this.Bb(this.Fa);break;case 3:if(!Tp)A.pe([this,
this.BBT],this);else this.Bb(this.YG);break;case 4:this.Bb(this.Ks);break;case 5:
if(((Tp===4)&&!this.Pz)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Tp>
0))this.AW.SQ(2);else this.AW.SQ(7);}break;default:throw new Error(Atm+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,this.A_);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.Mb=true;this.SG(A._GetAutoObject(A.Device.Helper).VY(E,0,8));this.
Ahu(A._GetAutoObject(A.Device.Converter).A$1(E));this.EC(A._GetAutoObject(A.Device.
Converter).A$0(E));this.Lp(A._GetAutoObject(A.Device.Converter).S3(E));this.Mb=false;
if(!!this.AM){this.YG.Kv(2);this.Ks.Kv(2);this.AW.Kv(8);}else{this.YG.Kv(0);this.
Ks.Kv(0);this.AW.Kv(0);}this.Am();},App:function(G){this.I_.Uo(this.EA);},AaH:function(
G){var F;this.AW.A9Q((F=this.AF,F[1].call(F[0])));},AaF:function(G){var F;this.AW.
A9R((F=this.A2,F[1].call(F[0])));},Al1:function(G){A.pe([this,this.Agc],this);},
FV:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).AC$());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RK);},AjO:function(){return this.GI;
},AjQ:function(){return 99999999;},Lp:function(E){if(this.La===E)return;this.La=
E;if(this.Mb===false)A.pe([this,this.Vp],this);A.abo([this,this.SE,this.Lp],0);}
,SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Mb===false)A.pe([this,this.
Vp],this);A.abo([this,this.AbX,this.SG],0);},Vp:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.La),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pz,2,10))+A.abm(this.GI,8,10);var BO=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Agc:function(G){var F;if((!this.Ik||!this.A2)||!this.AF)return;if(!(F=this.
Ik,F[1].call(F[0])))this.AW.AE4(true);else this.AW.AE4(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Mb===false)A.pe([this,this.
Vp],this);A.abo([this,this.PT,this.EC],0);},Ahu:function(E){if(this.Pz===E)return;
this.Pz=E;if(this.Mb===false)A.pe([this,this.Vp],this);A.abo([this,this.Ans,this.
Ahu],0);},BBT:function(G){var F;if(!!this.JN){var Ic=(F=this.JN,F[1].call(F[0]));
var A1v=0;switch(Ic){case 0:case 1:A1v=0;break;case 2:A1v=1;break;default:A.ab5(
"%s%e",Alf,Ic);}this.EC(A1v);}if(!this.Pz)this.Ex(4);else this.Ex(5);},SE:function(
){return this.La;},AbX:function(){return this.GI;},PT:function(){return this.AnimalType;
},Ans:function(){return this.Pz;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C8._Init.call(this.C8={I:this},0);C.ARf._Init.call(this.AW={I:this},0);C.AvS.
_Init.call(this.YG={I:this},0);C.AvS._Init.call(this.Ks={I:this},0);C.AsJ._Init.
call(this.Fa={I:this},0);C.I_._Init.call(this.I_={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AR0;var B;this.RK=5;this.AW.H(
BrN);this.YG.H(BrO);this.YG.EV(2);this.Ks.H(BrP);this.Ks.EV(16);this.Fa.H(BaE);this.
I_.H(BaF);this.J(this.AW,0);this.J(this.YG,0);this.J(this.Ks,0);this.J(this.Fa,0
);this.J(this.I_,0);this.C8.AE_([this,this.SE,this.Lp]);this.AW.Au([this,this.AbX
,this.SG]);this.YG.Au([this,this.PT,this.EC]);this.Ks.Au([this,this.Ans,this.Ahu
]);this.Fa.CK(this.C8);this.Fa.Au([B=this.C8,B.B_,B.Cb]);this.I_.A99([B=A._GetAutoObject(
A.Device.Device),B.Awg,B.AyM]);this.Init(aArg);},_Done:function(){this.__proto__=
C.El;this.C8._Done();this.AW._Done();this.YG._Done();this.Ks._Done();this.Fa._Done(
);this.I_._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C8._ReInit(
);this.AW._ReInit();this.YG._ReInit();this.Ks._ReInit();this.Fa._ReInit();this.I_.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ks)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.El={AM:0,Awr:null,OI:null,
Q:null,EA:null,A2:null,AF:null,Ik:null,N:null,JN:null,Fm:null,Fb:null,ACW:0,LS:0
,A_:0,RK:0,Afp:true,Init:function(aArg){A.pe([this,this.LO],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A_)this.Bb(null);},Bm0:function(E){if(this.
ACW===E)return;this.ACW=E;this.Am();},WF:function(E){if(this.LS===E)return;this.
LS=E;this.Am();},DJ:function(G){A.ab5("%s",Alg);},ML:function(s){this.DJ(s);},Ex:
function(EO){A.pe([this,this.ML],this);A.pe(this.Awr,this);if(!EO)A.pe(this.OI,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);}
,C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aox);},Op:function(G){if(this.A_>1)this.Ex(this.A_-1);},MZ:function(
G){if((this.A_>0)&&(this.A_<this.RK))this.Ex(this.A_+1);},Uo:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A0J],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A0J],this.EA,0);A.pe([this,this.A0J],this);},App:function(G){},A0J:
function(s){this.App(s);},OO:function(E){if(A.aaZ(this.A2,E))return;if(!!this.A2
)A.z$([this,this.A0N],this.A2,0);this.A2=E;if(!!E)A.zX([this,this.A0N],E,0);if(!
!E)A.pe([this,this.A0N],this);},PU:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0P],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0P],E,0);if(
!!E)A.pe([this,this.A0P],this);},AaH:function(G){},A0P:function(s){this.AaH(s);}
,AaF:function(G){},A0N:function(s){this.AaF(s);},Um:function(E){if(A.aaZ(this.Ik
,E))return;if(!!this.Ik)A.z$([this,this.A0M],this.Ik,0);this.Ik=E;if(!!E)A.zX([this
,this.A0M],E,0);if(!!E)A.pe([this,this.A0M],this);},Al1:function(G){},A0M:function(
s){this.Al1(s);},FV:function(G){A.ab5("%s",BaG);},BG4:function(s){this.FV(s);},He:
function(G){this.Ex(0);},AjO:function(){A.ab5("%s",Aox);return 0;},AjQ:function(
){A.ab5("%s",Aox);return 0;},LO:function(G){},Anw:function(E){if(A.aaZ(this.JN,E
))return;if(!!this.JN)A.z$([this,this.Ao0],this.JN,0);this.JN=E;if(!!E)A.zX([this
,this.Ao0],this.JN,0);A.pe([this,this.Ao0],this);},Ao0:function(G){},AFk:function(
E){if(A.aa0(this.OI,E))return;this.OI=E;},AFP:function(E){if(this.Afp===E)return;
this.Afp=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={I:this},0);this.
__proto__=C.El;this.H(As8);this.ACW=A.jb.Text;this.LS=A.jb.CT;this.Fm.Filter=6;this.
Fb.Filter=7;this.Fm.BL=[this,this.Op];this.Fb.BL=[this,this.MZ];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fm._Done();this.Fb._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fm._ReInit(
);this.Fb._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OI)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ik)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JN)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Rb={AM:0,Dq:null,FM:
null,OI:null,EA:null,A2:null,AF:null,Ik:null,Q:null,JN:null,AEp:-1,Afp:true,AN9:
false,AT_:false,Asl:true,Init:function(aArg){A.pe([this,this.ABw],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dq)return;if(this.Dq.A_>0){if(this.Hl){this.Dq.
WF(A.jb.CJ);this.Background.L(A.jb.CT);this.V.L(A.jb.Text);}else{this.Dq.WF(A.jb.
CT);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.Dq.WF(
A.jb.CJ);else this.Dq.WF(A.jb.CT);this.Dq.Bm0(this.V.AQ);}},I1:function(G){C.Eg.
I1.call(this,G);if(!this.Dq)return;if(!this.Dq.A_)this.FV(this);else this.He(this
);},Gs:function(E){C.Eg.Gs.call(this,E);if(!!this.Dq)this.Dq.N=E;},Uo:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.App],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.App],this.EA,0);A.pe([this,this.App],this);},App:function(
G){if(!!this.Dq)this.Dq.Uo(this.EA);},OO:function(E){if(A.aaZ(this.A2,E))return;
this.A2=E;if(!!this.Dq)this.Dq.OO(E);},PU:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PU(E);},Um:function(E){if(A.aaZ(this.Ik,E))return;
this.Ik=E;if(!!this.Dq)this.Dq.Um(E);},BCm:function(G){var AAt=0;if(!!this.Dq){AAt=
this.Dq.A_;this.Dq.N=null;this.HP(this.Dq);}switch(this.AEp){case 0:this.Dq=A._NewObject(
C.AeV,0);break;case 1:this.Dq=A._NewObject(C.AR1,0);break;case 2:this.Dq=A._NewObject(
C.AR0,0);break;case 3:this.Dq=A._NewObject(C.AUa,0);break;case 4:this.Dq=A._NewObject(
C.AT$,0);break;case 5:this.Dq=A._NewObject(C.AR2,0);break;default:throw new Error(
BrQ+this.AEp.toFixed());}this.J(this.Dq,0);this.Dq.Anw(this.JN);this.Dq.H(BrR);this.
Dq.N=this.N;this.Dq.Uo(this.EA);this.Dq.Awr=[this,this.Awr];this.Dq.Au([this,this.
Uj,this.Bx]);this.Dq.Um(this.Ik);this.Dq.OO(this.A2);this.Dq.PU(this.AF);this.Dq.
AFk(this.OI);this.Dq.AFP(this.Afp);if(AAt>0)this.Dq.Ex(AAt);this.Bb(this.Dq);this.
Am();},FV:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FM.AjB((F=this.
N,F[1].call(F[0])));else this.FM=A._NewObject(C.Aeu,0);this.Dq.FV(this);}},He:function(
G){var B;if(!!this.Dq)this.Dq.He(this);},AjO:function(){if(!this.Dq)return 0;return this.
Dq.AjO();},AjQ:function(){if(!this.Dq)return 0;return this.Dq.AjQ();},C4:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uj,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABw],this);},BnD:function(
E){if(this.AEp===E)return;this.AEp=E;A.pe([this,this.BCm],this);},Ar2:function(E
){if(this.Asl===E)return;this.Asl=E;A.pe([this,this.ABw],this);},ABw:function(G){
var ApA;if(this.Asl){if(this.AN9)ApA=5;else ApA=0;}else if(this.AT_){if(A._GetAutoObject(
A.Device.Converter).S3(this.AM)===10)ApA=4;else ApA=3;}else if(A._GetAutoObject(
A.Device.Converter).S3(this.AM)===10)ApA=2;else ApA=1;this.BnD(ApA);},Awr:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A_)this.FM.AkR((F=this.N,F[1].call(F[
0])));this.Am();},Anw:function(E){if(A.aaZ(this.JN,E))return;if(!!this.JN)A.z$([
this,this.Ao0],this.JN,0);this.JN=E;if(!!E)A.zX([this,this.Ao0],this.JN,0);A.pe([
this,this.Ao0],this);},Ao0:function(G){if(!!this.Dq)this.Dq.Anw(this.JN);},A_z:function(
E){if(this.AT_===E)return;this.AT_=E;A.pe([this,this.ABw],this);},Bmw:function(E
){if(this.AN9===E)return;this.AN9=E;A.pe([this,this.ABw],this);},AFk:function(E){
if(A.aa0(this.OI,E))return;this.OI=E;if(!!this.Dq)this.Dq.AFk(E);},AFP:function(
E){if(this.Afp===E)return;this.Afp=E;if(!!this.Dq)this.Dq.AFP(E);},Uj:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Rb;this.H(UZ);this.V.R(Atc);this.V.L(A.jb.Bm);this.FM=A._NewObject(C.Aeu,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ik
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARf={ET:null,FZ:null,Eq:null,Dy:null,CV:null
,Cu:null,FO:function(E){if(this.M9===E)return;C.Lg.FO.call(this,E);this.Cu.CU(E);
this.CV.CU(E);this.Dy.CU(E);this.Eq.CU(E);this.FZ.CU(E);this.ET.CU(E);},Ys:function(
HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.Cu;break;
case 2:B5=this.CV;break;case 3:B5=this.Dy;break;case 4:B5=this.Eq;break;case 5:B5=
this.FZ;break;case 6:B5=this.ET;break;case 7:B5=this.G2;break;default:A.ab5("%s"
,Ah4);}return B5;},_Init:function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(
this.ET={I:this},0);C.DF._Init.call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={
I:this},0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.CV={I:this},
0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.ARf;this.H(BrS);this.G2.
H(AIJ);this.ET.H(AyF);this.FZ.H(AZ6);this.Eq.H(AZ7);this.Dy.H(AZ8);this.CV.H(AZ9
);this.Cu.H(AZ_);this.F0.H(AZ$);this.EM.H(BaD);this.J(this.ET,-2);this.J(this.FZ
,-2);this.J(this.Eq,-2);this.J(this.Dy,-2);this.J(this.CV,-2);this.J(this.Cu,-2);
this.ET.Dj=[this,this.GX];this.FZ.Dj=[this,this.GX];this.Eq.Dj=[this,this.GX];this.
Dy.Dj=[this,this.GX];this.CV.Dj=[this,this.GX];this.Cu.Dj=[this,this.GX];},_Done:
function(){this.__proto__=C.Lg;this.ET._Done();this.FZ._Done();this.Eq._Done();this.
Dy._Done();this.CV._Done();this.Cu._Done();C.Lg._Done.call(this);},_ReInit:function(
){C.Lg._ReInit.call(this);this.ET._ReInit();this.FZ._ReInit();this.Eq._ReInit();
this.Dy._ReInit();this.CV._ReInit();this.Cu._ReInit();},_Mark:function(D){var B;
C.Lg._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvS={Q:null,G2:null,F0:null,EM:null,Ip:null,Io:null,M9:0,Uv:0,AM:0,F$:99,Init:
function(aArg){A.pe([this,this.LO],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Ys(0).M,this.Ys(-1).M));var IC=((Ae&
0x40)===0x40);if(IC){this.Bgt(A.jb.AV);this.Bgu(A.jb.Bm);}else{this.Bgt(this.M9);
this.Bgu(A.jb.Text);}this.Amo();},FO:function(E){if(this.M9===E)return;this.M9=E;
this.Am();},LO:function(G){},Ys:function(HA){var B5=null;switch(HA){case-1:case 0:
B5=this.F0;break;case 1:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},Kv:
function(E){if(this.Uv===E)return;this.Uv=E;this.Amo();},Amo:function(){var B;var
F;if(!!this.Q){var DV=this.F0;var AdD=this.Uv;var A7=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A7>0){DV.L1(A7%10);A7=(A7/10)|0;}else if(AdD>0)DV.L1(0);else DV.L1(-
1);DV=(C.Ez.isPrototypeOf(B=this.AqM(DV,0x11))?B:null);AdD=AdD-1;}}},Agf:function(
G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Age:function(G){var F;var BO=this.
AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4
],this);},Bx:function(E){if(E<0)E=0;if(E>this.F$)E=this.F$;if(this.AM===E)return;
this.AM=E;this.Am();},EV:function(E){if(this.F$===E)return;this.F$=E;this.Am();}
,Bgt:function(aColor){this.F0.CU(aColor);this.G2.CU(aColor);},Bgu:function(aColor
){this.F0.Zt(aColor);this.G2.Zt(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ez._Init.call(this.G2={I:this},0);C.Ez._Init.call(this.F0={I:this},
0);A.acg.BU._Init.call(this.EM={I:this},0);A.Core.BK._Init.call(this.Ip={I:this}
,0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.AvS;this.H(BrT);this.
M9=A.jb.CJ;this.G2.H(AIJ);this.F0.H(AyF);this.EM.H(AyF);this.EM.Nm(2);this.EM.L(
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
null,Background:null,Text:null,Ez:-1,M4:0,AmQ:0,Aqr:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ez<0)this.Text.R(Rp);else this.Text.R(this.Ez.toFixed(
));this.Background.L(this.M4);this.Text.L(this.AmQ);},L1:function(E){if(this.Ez===
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ez=B5;this.Am();},CU:function(E){
if(this.M4===E)return;this.M4=E;this.Am();},AeZ:function(E){if(this.Aqr===E)return;
this.Aqr=E;this.AgJ.Ar(E);if(E===false)this.Text.Z(true);},Zt:function(E){if(this.
AmQ===E)return;this.AmQ=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TJ._Init.call(this.AgJ={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(Atl);this.M4=A.jb.CJ;this.AgJ.Fr(750);this.AgJ.Uq(750);this.AgJ.AkB(750);
this.AmQ=A.jb.Text;this.Background.A0(0x3);this.Background.H(Atl);this.Text.A0(0x3
);this.Text.H(Atl);this.Text.R(Rp);this.J(this.Background,0);this.J(this.Text,0);
this.AgJ.Q=[B=this.Text,B.Fq,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgJ._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgJ._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FC={Y:null,I6:null,AOf:A.jV,ASe:A.jV,Th:0,AJP:0,A1$:false,A1H:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABr],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.zX([this,this.ML],[B=A._GetAutoObject(A.Device.
Device).An,B.Fp,B.Ft],0);A.pe([this,this.ABr],this);A.pe([this,this.ML],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABr],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);},Bys:function(L9){A._GetAutoObject(A.Device.Helper
).G8(L9);this.Ap6(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap6:function(L4,AcY){A.ab5("%s",Alg);},Vk:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.Bzp],this);else if(!!As&&(As.PopupState===5)){this.A1H=true;this.Ew(this
);}},Bzp:function(G){if(this.Th>0){this.A1H=false;this.Adp(this);this.A_2(0);}},
Aiy:function(G){if((this.AJP+1)<this.Th)this.A_2(this.AJP+1);else A.aaS([this,this.
Bw3],this);},Bw4:function(s){this.Aiy(s);},A_2:function(E){this.AJP=E;if(this.A1H===
false){this.Bys(E);A.aaS([this,this.Bw4],this);var XL=(this.AJP/this.Th)*100;A._GetAutoObject(
A.Device.Device).A3(49,true,A.abk(XL,0,0),0,[this,this.Vk]);}},Aaq:function(G){A.
_GetAutoObject(A.Device.Device).A3(49,false,BrU,0,[this,this.Vk]);this.A1$=true;
A.pe([this,this.ALp],this);},Bw3:function(s){this.Aaq(s);},Adp:function(G){this.
I6.Z(true);this.A1$=false;this.ALp(this);},BGY:function(s){this.Adp(s);},AAI:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6U();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ew:function(G){A._GetAutoObject(C.A8).FB();},A3N:function(G){A._GetAutoObject(
C.A8).Cd(84);},DJ:function(G){this.N.Z(true);this.N.C1(A.aaL(A.ach.E2));this.N.CE=[
this,this.Ew];this.N.Cw(A.aaL(A.ach.ADJ));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Cf=null;this.N.I9.C3(100);}else{this.N.Cf=[this,this.AAI];this.
N.I9.C3(255);}this.N.C2(A.aaL(A.ach.AeC));this.N.B$=[this,this.A3N];},ML:function(
s){this.DJ(s);},ABr:function(G){this.Th=A._GetAutoObject(A.Device.Device).An.B9(
);if(this.Th>0)A._GetAutoObject(A.Device.Device).A3(49,true,U2,0,[this,this.Vk]);
else{this.Adp(this);this.Aaq(this);}},Akz:function(E){if(this.AOf===E)return;this.
AOf=E;A.pe([this,this.ALp],this);},ALp:function(G){var B;if(this.A1$===false){this.
I6.R(A.jV);return;}var Apb;if(!A._GetAutoObject(A.Device.Device).An.B9()){var Adj=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABr],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);this.AAI(this);if(!A._GetAutoObject(A.Device.Device
).An.QK()||!Adj)Apb=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).AC6(A._GetAutoObject(A.Device.Device).An.Filter)===1)Apb=A.aaR(
A.acf.AN$);else Apb=A.aaR(A.acf.AN_);A._GetAutoObject(A.Device.Device).An.Bk(Adj
);A.zX([this,this.ABr],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);}else
Apb=this.ASe;Apb=Apb+(A0b+this.AOf);this.I6.R(Apb);},Ae_:function(E){if(this.ASe===
E)return;this.ASe=E;A.pe([this,this.ALp],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkS._Init.call(this.I6={
I:this},0);this.__proto__=C.FC;this.Dr(C.Abu);this.Y.H(Ff);this.Y.JV(1);this.I6.
H(Ff);this.J(this.Y,0);this.J(this.I6,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I6._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I6._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7t={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A7t;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvU={K1:null,MX:null,AY:0,Yi:function(){this.K1=null;this.MX=null;this.AY=0;
},Ou:function(A7){var Hh;Hh=A._NewObject(C.A7t,0);Hh.A5=A7;if(!this.K1){this.K1=
Hh;this.MX=Hh;this.AY=1;}else{this.MX.Ah=Hh;this.MX=Hh;this.AY=this.AY+1;}},AmY:
function(){var B;var RN=0;var Oi=this.K1;while(!!Oi){RN+=Oi.A5;Oi=Oi.Ah;}return RN;
},AjP:function(){if(!this.AY)return 0;return this.AmY()/this.AY;},AqW:function(){
var B;if(!this.AY)return 0;var A1B=this.AjP();var Adg=0;var Oi=this.K1;while(!!Oi
){Adg+=Math.pow(Oi.A5-A1B,2);Oi=Oi.Ah;}Adg/=this.AY;Adg=Math.sqrt(Adg);return Adg;
},_Init:function(aArg){this.__proto__=C.AvU;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOg={Gc:null,Aey:null,Yp:null,C7:null,I6:null,
CP:function(){this.A4N(this);},Init:function(aArg){A.zV([this,this.A4N],A._GetAutoObject(
A.Device.Device).Pr,0);A.pe([this,this.A4N],this);},Ew:function(G){A._GetAutoObject(
C.A8).FB();},A4N:function(G){this.Yp.Ch(-1);this.I6.Z(!this.Gc.AX.B9());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gc._Init.call(this.Gc={I:this},0);C.
Aey._Init.call(this.Aey={I:this},0);C.Yp._Init.call(this.Yp={I:this},0);A.acg.C7.
_Init.call(this.C7={I:this},0);C.AkS._Init.call(this.I6={I:this},0);this.__proto__=
C.AOg;this.N.Z(true);this.Dr(C.APb);this.Gc.H(Ate);this.Gc.N3(C.AmP);this.Aey.H(
IW);this.Yp.H(As9);this.C7.DC(BrV);this.C7.DM(BrW);this.C7.Nm(3);this.C7.L(A.jb.
Text);this.I6.H(Aoj);this.I6.R((A.aaR(A.acf.A8d)+A0b)+A.aaR(A.acf.A6w));this.J(this.
Gc,0);this.J(this.Aey,0);this.J(this.Yp,0);this.J(this.C7,0);this.J(this.I6,0);this.
N.CE=[this,this.Ew];this.N.C1(A.aaL(A.ach.E2));this.Gc.Zs(A._GetAutoObject(A.Device.
Device).Pr);this.Yp.Zs(A._GetAutoObject(A.Device.Device).Pr);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gc._Done();this.Aey._Done();this.Yp._Done();
this.C7._Done();this.I6._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gc._ReInit();this.Aey._ReInit();this.Yp._ReInit();this.C7.
_ReInit();this.I6._ReInit();this.I6.R((A.aaR(A.acf.A8d)+A0b)+A.aaR(A.acf.A6w));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gc)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yp).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOj={Auf:null,Aue:null,Auh:null,Aug:null,Auj:null,Aui:null,Aul:null,Auk:null
,AaJ:null,Yx:null,Abl:null,Abk:null,RatedAttribute:0,Init:function(aArg){this.SJ(
2);},DE:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SJ(3);break;case 1:this.SJ(2);break;case
4:this.SJ(1);break;case 3:this.SJ(4);break;default:this.SJ(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SJ(1);break;case 1:this.SJ(4);break;case 4:this.
SJ(3);break;case 3:this.SJ(2);break;default:this.SJ(0);}break;default:D5.NL=true;
}},Ap6:function(L4,AcY){if(!L4)return;var Fy=A._NewObject(A.Device.Filter,0);var
HW=A._NewObject(A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,AcY,true);Fy.
CW(HW);var AA1=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA1.Initialize(
3,5,0,true);Fy.CW(AA1);L4.Bk(Fy);},Aiy:function(G){var Ap4=0;var A37=A._GetAutoObject(
A.Device.Device).Bt.B9();var B1=A._NewObject(A.Device.Rating,0);while(Ap4<A37){B1.
E3(Ap4,A._GetAutoObject(A.Device.Device).Bt);this.BdN(B1,0);var BCI=A._GetAutoObject(
A.Device.Helper).ZR(2);this.BdN(B1,BCI);Ap4++;}C.FC.Aiy.call(this,G);},Aaq:function(
G){A.pe([this,this.Bdq],this);C.FC.Aaq.call(this,G);},Adp:function(G){this.Auf=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Aue=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aug=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auh=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aui=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auj=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auk=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FC.Adp.
call(this,G);},DJ:function(G){C.FC.DJ.call(this,G);this.N.OQ(true);this.N.OR(true
);},BdN:function(D3,Bcl){if(!D3||(D3.Timestamp<Bcl))return;if(!Bcl){this.Auf.Set(
D3.Appearance,this.Auf.Get(D3.Appearance)+1);this.Auh.Set(D3.Faeces,this.Auh.Get(
D3.Faeces)+1);this.Auj.Set(D3.Feed,this.Auj.Get(D3.Feed)+1);this.Aul.Set(D3.Respiratory
,this.Aul.Get(D3.Respiratory)+1);}else{this.Aue.Set(D3.Appearance,this.Aue.Get(D3.
Appearance)+1);this.Aug.Set(D3.Faeces,this.Aug.Get(D3.Faeces)+1);this.Aui.Set(D3.
Feed,this.Aui.Get(D3.Feed)+1);this.Auk.Set(D3.Respiratory,this.Auk.Get(D3.Respiratory
)+1);}},SJ:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yx.Kx(this.AaJ.Lv(E));A.pe([this,this.Bdq],this);},Bdq:function(G){var AaK=null;
var AaL=null;switch(this.RatedAttribute){case 2:{AaK=this.Aue;AaL=this.Auf;}break;
case 4:{AaK=this.Aug;AaL=this.Auh;}break;case 1:{AaK=this.Aui;AaL=this.Auj;}break;
case 0:{AaK=A._NewObject(A.Device.Int32ArrayWrapper,0);AaL=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaK=this.Auk;AaL=this.Aul;}break;default:throw new
Error(BrX+this.RatedAttribute.toFixed());}var AGs=A._NewObject(A.acv.AUs,0);AGs.
Ou(AaK.Get(3),A.jb.E1);AGs.Ou(AaK.Get(2),A.jb.H9);AGs.Ou(AaK.Get(1),A.jb.Gj);var
AGt=A._NewObject(A.acv.AUs,0);AGt.Ou(AaL.Get(3),A.jb.E1);AGt.Ou(AaL.Get(2),A.jb.
H9);AGt.Ou(AaL.Get(1),A.jb.Gj);this.Abk.Ab7(AGs);this.Abl.Ab7(AGt);var A4z=AaK.AmY(
)-AaK.Get(5);var Bf1=0;var BfZ=0;if(A4z>0){Bf1=(AaK.Get(2)/A4z)*100;BfZ=(AaK.Get(
1)/A4z)*100;}var ALc=AaL.AmY()-AaL.Get(5);this.I6.Z(!ALc);var Bf2=0;var Bf0=0;if(
ALc>0){Bf2=(AaL.Get(2)/ALc)*100;Bf0=(AaL.Get(1)/ALc)*100;}this.Abk.A_0(A.abk(Bf1
,0,0)+AfG);this.Abk.A_C(A.abk(BfZ,0,0)+AfG);this.Abl.A_0(A.abk(Bf2,0,0)+AfG);this.
Abl.A_C(A.abk(Bf0,0,0)+AfG);},_Init:function(aArg){C.FC._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaJ={I:this},0);C.NI._Init.call(this.
Yx={I:this},0);C.ACM._Init.call(this.Abl={I:this},0);C.ACM._Init.call(this.Abk={
I:this},0);this.__proto__=C.AOj;this.Dr(C.APc);this.Akz(A.aaR(A.acf.A6x));this.Ae_(
A.aaR(A.acf.Ano));this.Yx.H(IW);this.Yx.Aj(true);this.Yx.T(A.aaR(A.acf.Axt)+A.aaR(
A.acf.Colon));this.Yx.Bi(false);this.Yx.BnB(false);this.Abl.H(BrY);this.Abl.T(A.
aaR(A.acf.AGd));this.Abk.H(BrZ);this.Abk.T(A.aaR(A.acf.A7C));this.I6.H(Aoj);this.
J(this.Yx,-1);this.J(this.Abl,-1);this.J(this.Abk,-1);this.Auf=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aue=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auh=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aug=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aui=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auk=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FC;this.AaJ._Done();this.Yx._Done();this.Abl._Done();this.Abk.
_Done();C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.
AaJ._ReInit();this.Yx._ReInit();this.Abl._ReInit();this.Abk._ReInit();this.Akz(A.
aaR(A.acf.A6x));this.Ae_(A.aaR(A.acf.Ano));this.Yx.T(A.aaR(A.acf.Axt)+A.aaR(A.acf.
Colon));this.Abl.T(A.aaR(A.acf.AGd));this.Abk.T(A.aaR(A.acf.A7C));},_Mark:function(
D){var B;C.FC._Mark.call(this,D);if((B=this.Auf)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aue)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auh)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aug)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Auj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aui)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aul)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Auk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOk={Aex:null,UO:null,UP:null,Aew:null,UL:null,UM:null,AJR:0,AJQ:0,AJv:0,AJu:
0,Adi:false,CP:function(){this.Aaq(this);},Ap6:function(L4,AcY){if(!L4)return;var
Fy=A._NewObject(A.Device.Filter,0);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,AcY,true);Fy.CW(HW);var ABi=A._NewObject(A.Device.Int32FilterCriterion
,0);ABi.Initialize(7,2,0,true);Fy.CW(ABi);L4.Bk(Fy);},Aiy:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJR++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJQ++;var Ap4=0;var A37=A._GetAutoObject(
A.Device.Device).Bt.B9();var Aud;var ABD=0;while(Ap4<A37){this.Adi=true;Aud=A._GetAutoObject(
A.Device.Device).Bt.I7(Ap4,9);if(Aud===1)ABD=1;else if((Aud===2)&&(ABD!==1))ABD=
2;Ap4++;}if(ABD===1)this.AJu++;else if(ABD===2)this.AJv++;C.FC.Aiy.call(this,G);
},Aaq:function(G){var BfX=0;var BfY=0;if(this.Th>0){BfX=(this.AJR/this.Th)*100;BfY=(
this.AJQ/this.Th)*100;}this.UO.Kx(((((((A.abk(BfX,0,0)+AIK)+this.AJR.toFixed())+
CQ)+A.aaR(A.acf.AEw))+CQ)+this.Th.toFixed())+O9);this.UP.Kx(((((((A.abk(BfY,0,0)+
AIK)+this.AJQ.toFixed())+CQ)+A.aaR(A.acf.AEw))+CQ)+this.Th.toFixed())+O9);var BfV=
0;var BfW=0;if(this.Th>0){BfV=(this.AJv/this.Th)*100;BfW=(this.AJu/this.Th)*100;
}this.UL.Kx(((((((A.abk(BfV,0,0)+AIK)+this.AJv.toFixed())+CQ)+A.aaR(A.acf.AEw))+
CQ)+this.Th.toFixed())+O9);this.UM.Kx(((((((A.abk(BfW,0,0)+AIK)+this.AJu.toFixed(
))+CQ)+A.aaR(A.acf.AEw))+CQ)+this.Th.toFixed())+O9);this.I6.Z(!this.Adi);C.FC.Aaq.
call(this,G);},Adp:function(G){this.AJu=0;this.AJv=0;this.AJQ=0;this.AJR=0;this.
Adi=false;C.FC.Adp.call(this,G);},_Init:function(aArg){C.FC._Init.call(this,aArg
);C.Agz._Init.call(this.Aex={I:this},0);C.Ajs._Init.call(this.UO={I:this},0);C.Ajs.
_Init.call(this.UP={I:this},0);C.Agz._Init.call(this.Aew={I:this},0);C.Ajs._Init.
call(this.UL={I:this},0);C.Ajs._Init.call(this.UM={I:this},0);this.__proto__=C.AOk;
this.Dr(C.APd);this.Akz(A.aaR(A.acf.A6y));this.Ae_(A.aaR(A.acf.Art));this.Aex.H(
IW);this.Aex.Aj(true);this.Aex.T(A.aaR(A.acf.A6C));this.Aex.Bi(false);this.UO.H(
Qd);this.UO.Aj(true);this.UO.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UO.
Bi(true);this.UO.AkE(2);this.UP.H(Aaf);this.UP.Aj(true);this.UP.T(A.aaR(A.acf.AvB
)+A.aaR(A.acf.Colon));this.UP.Bi(true);this.UP.AkE(1);this.Aew.H(Alh);this.Aew.Aj(
true);this.Aew.T(A.aaR(A.acf.A6D));this.Aew.Bi(false);this.UL.H(Aop);this.UL.Aj(
true);this.UL.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UL.Bi(true);this.
UL.AkE(2);this.UM.H(As9);this.UM.Aj(true);this.UM.T(A.aaR(A.acf.AvB)+A.aaR(A.acf.
Colon));this.UM.Bi(true);this.UM.AkE(1);this.J(this.Aex,0);this.J(this.UO,0);this.
J(this.UP,0);this.J(this.Aew,0);this.J(this.UL,0);this.J(this.UM,0);this.UO.S(A.
aaL(A.fl.Ak));this.UP.S(A.aaL(A.fl.Ak));this.UL.S(A.aaL(A.fl.Ak));this.UM.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FC;this.Aex._Done();this.UO._Done(
);this.UP._Done();this.Aew._Done();this.UL._Done();this.UM._Done();C.FC._Done.call(
this);},_ReInit:function(){C.FC._ReInit.call(this);this.Aex._ReInit();this.UO._ReInit(
);this.UP._ReInit();this.Aew._ReInit();this.UL._ReInit();this.UM._ReInit();this.
Akz(A.aaR(A.acf.A6y));this.Ae_(A.aaR(A.acf.Art));this.Aex.T(A.aaR(A.acf.A6C));this.
UO.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UP.T(A.aaR(A.acf.AvB)+A.aaR(
A.acf.Colon));this.Aew.T(A.aaR(A.acf.A6D));this.UL.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UM.T(A.aaR(A.acf.AvB)+A.aaR(A.acf.Colon));this.UO.S(A.aaL(A.fl.
Ak));this.UP.S(A.aaL(A.fl.Ak));this.UL.S(A.aaL(A.fl.Ak));this.UM.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.Aex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqL={K9:null
,Ajg:null,Ajh:null,Amp:null,Aby:null,W5:null,Abv:null,S5:null,Abw:null,S6:null,Abz:
null,W6:null,Ay:null,Add:0,AAu:0,Apv:0,A2O:0,Bei:0,CP:function(){this.Aaq(this);
},DE:function(G){switch(this.Cq.CO){case 4:{if(this.I6.Fq())return;var QA=this.Y.
Br[1]+80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.Vz(null,null);}break;case 5:{if(this.
I6.Fq())return;var QA=this.Y.Br[1]-80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.Vz(null
,null);}break;default:C.FC.DE.call(this,G);}},Ap6:function(L4,AcY){if(!L4)return;
var Fy=A._NewObject(A.Device.Filter,0);var HW=A._NewObject(A.Device.Int32FilterCriterion
,0);HW.Initialize(1,0,AcY,true);Fy.CW(HW);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fy.CW(Ac_);L4.Bk(Fy);},Aiy:function(G){if(this.Bd_(
)){this.K9.Ou(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arf()){var Qm=A._GetAutoObject(A.Device.Helper).L$(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qm>0){var A2m=A._GetAutoObject(A.acj.DU).AlA(Qm,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajg.
Ou(A2m);}}var A29=A._GetAutoObject(A.Device.Device).Bt.B9()-2;if(A29>=0){var BAy=
A._GetAutoObject(A.Device.Device).Bt.AC8(A29,8);var BAx=A._GetAutoObject(A.Device.
Device).Bt.Hv(A29,6);var Qm=A._GetAutoObject(A.Device.Helper).L$(BAx,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qm>0){var A2m=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAy)/Qm)|0;this.Ajh.Ou(A2m);}}if((A._GetAutoObject(
A.Device.Helper).W.Arf()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RQ()<=180)){var ALA=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tq=A._GetAutoObject(A.Device.
Helper).L$(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BBP=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALA/Tq);this.Amp.Ou(BBP);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Add++;this.Apv=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZR(7)){this.AAu++;this.A2O=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bei=A._GetAutoObject(A.Device.Helper).L$(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.FC.Aiy.call(
this,G);},Aaq:function(G){var A4W=this.Ajg.AjP()|0;var A4Y=this.Ajh.AjP()|0;if(this.
Add>1)A._GetAutoObject(A.Device.Device).A3(56,true,this.Add.toFixed(),0,null);if(
this.Add===1)A._GetAutoObject(A.Device.Device).A3(53,true,this.Apv.toFixed(),0,null
);if(this.AAu>1)A._GetAutoObject(A.Device.Device).A3(52,true,this.AAu.toFixed(),
0,null);if(this.AAu===1)A._GetAutoObject(A.Device.Device).A3(57,true,(this.A2O.toFixed(
)+Atb)+this.Bei.toFixed(),0,null);if(this.K9.AY>0)this.W5.T(((((((A._GetAutoObject(
A.Device.Converter).Ax5(this.K9.AjP()|0,1)+AyG)+A._GetAutoObject(A.Device.Converter
).Ax5(this.K9.AqW()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af4())+AyH)+this.K9.AY.
toFixed())+O9);else this.W5.T(A.aaR(A.acf.Unknown));if(this.Ajg.AY>0)this.S5.T(((((((
A._GetAutoObject(A.Device.Converter).S_(A4W,2,true)+AyG)+A._GetAutoObject(A.Device.
Converter).S_(this.Ajg.AqW()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).Aav())+AyH
)+this.Ajg.AY.toFixed())+O9);else this.S5.T(A.aaR(A.acf.Unknown));if(this.Ajh.AY>
0)this.S6.T(((((((A._GetAutoObject(A.Device.Converter).S_(A4Y,2,true)+AyG)+A._GetAutoObject(
A.Device.Converter).S_(this.Ajh.AqW()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).
Aav())+AyH)+this.Ajh.AY.toFixed())+O9);else this.S6.T(A.aaR(A.acf.Unknown));if(this.
Amp.AY>0)this.W6.T(((((((A.abk(this.Amp.AjP(),0,1)+AyG)+A.abk(this.Amp.AqW(),0,1
))+CQ)+A.aaR(A.acf.Bif))+AyH)+this.Amp.AY.toFixed())+O9);else this.W6.T(A.aaR(A.
acf.Unknown));var A4X=0;var A4Z=0;var Adi=false;if(this.K9.AY>0)Adi=true;var Ic=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AJ_=A._GetAutoObject(A.Device.
Device).An.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJ_)?AJ_:null))Ic=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJ_)?AJ_:null
).A5;}if(this.Ajg.AY>0){Adi=true;A4X=A._GetAutoObject(A.Device.Converter).Bal(A4W
,Ic);}if(this.Ajh.AY>0){Adi=true;A4Z=A._GetAutoObject(A.Device.Converter).Bal(A4Y
,Ic);}this.S5.AkE(A4X);this.S6.AkE(A4Z);this.I6.Z(!Adi);C.FC.Aaq.call(this,G);},
Adp:function(G){this.K9.Yi();this.Ajg.Yi();this.Ajh.Yi();this.Amp.Yi();this.Add=
0;this.AAu=0;this.Apv=0;this.A2O=0;C.FC.Adp.call(this,G);},Fk:function(G){var B;
this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.
Mz(-this.Y.Br[1]);},Bd_:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FC._Init.call(this,aArg);C.Agz._Init.call(this.Aby={I:
this},0);C.IH._Init.call(this.W5={I:this},0);C.Agz._Init.call(this.Abv={I:this},
0);C.Ajs._Init.call(this.S5={I:this},0);C.Agz._Init.call(this.Abw={I:this},0);C.
Ajs._Init.call(this.S6={I:this},0);C.Agz._Init.call(this.Abz={I:this},0);C.IH._Init.
call(this.W6={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqL;
this.Dr(C.AvA);this.Akz(A.aaR(A.acf.A6z));this.Ae_(A.aaR(A.acf.Akm));this.Aby.H(
Atk);this.Aby.Aj(true);this.Aby.T(A.aaR(A.acf.A5v));this.Aby.Bi(false);this.Aby.
Kv(5);this.W5.H(A0c);this.W5.Aj(true);this.W5.T(A.jV);this.W5.Bi(true);this.Abv.
H(Atf);this.Abv.Aj(true);this.Abv.T(A.aaR(A.acf.ALZ));this.Abv.Bi(false);this.Abv.
Kv(5);this.S5.H(Atg);this.S5.Aj(true);this.S5.T(A.jV);this.S5.Bi(true);this.S5.Kx(
A.jV);this.Abw.H(Ath);this.Abw.Aj(true);this.Abw.T(A.aaR(A.acf.AuD));this.Abw.Bi(
false);this.Abw.Kv(5);this.S6.H(Br0);this.S6.Aj(true);this.S6.T(A.jV);this.S6.Bi(
true);this.S6.Kx(A.jV);this.Abz.H(A0d);this.Abz.Aj(true);this.Abz.T(A.aaR(A.acf.
A5D));this.Abz.Bi(false);this.Abz.Kv(5);this.W6.H(Alk);this.W6.Aj(true);this.W6.
T(A.jV);this.W6.Bi(true);this.Ay.H(It);this.J(this.Aby,-1);this.J(this.W5,-1);this.
J(this.Abv,-1);this.J(this.S5,-1);this.J(this.Abw,-1);this.J(this.S6,-1);this.J(
this.Abz,-1);this.J(this.W6,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.
K9=A._NewObject(C.AvU,0);this.Ajg=A._NewObject(C.AvU,0);this.Ajh=A._NewObject(C.
AvU,0);this.W5.S(A.aaL(A.fl.Af));this.S5.S(A.aaL(A.fl.Ak));this.S6.S(A.aaL(A.fl.
Ak));this.W6.S(A.aaL(A.fl.Ak));this.Amp=A._NewObject(C.A6J,0);},_Done:function(){
this.__proto__=C.FC;this.Aby._Done();this.W5._Done();this.Abv._Done();this.S5._Done(
);this.Abw._Done();this.S6._Done();this.Abz._Done();this.W6._Done();this.Ay._Done(
);C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.Aby._ReInit(
);this.W5._ReInit();this.Abv._ReInit();this.S5._ReInit();this.Abw._ReInit();this.
S6._ReInit();this.Abz._ReInit();this.W6._ReInit();this.Ay._ReInit();this.Akz(A.aaR(
A.acf.A6z));this.Ae_(A.aaR(A.acf.Akm));this.Aby.T(A.aaR(A.acf.A5v));this.Abv.T(A.
aaR(A.acf.ALZ));this.Abw.T(A.aaR(A.acf.AuD));this.Abz.T(A.aaR(A.acf.A5D));this.W5.
S(A.aaL(A.fl.Af));this.S5.S(A.aaL(A.fl.Ak));this.S6.S(A.aaL(A.fl.Ak));this.W6.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((
B=this.K9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajg)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amp)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abu={_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.Abu;this.
De.Ax(A.aaL(A.ach.ADF));},_className:"Application::HeaderEvaluationFilter"};C.Kr={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjS.DX.call(this
,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(A._GetAutoObject(A.Device.
Device).Kk));},_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.
Kr;},_ReInit:function(){C.AjS._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.AvA={Init:function(aArg){this.De.Ax(A._GetAutoObject(A.acj.DU).BdG());},_Init:
function(aArg){C.Abu._Init.call(this,aArg);this.__proto__=C.AvA;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APd={Init:function(
aArg){this.De.Ax(A.aaL(A.ach.Ag7));},_Init:function(aArg){C.Abu._Init.call(this,
aArg);this.__proto__=C.APd;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APc={Init:function(aArg){this.De.Ax(A.aaL(A.ach.Ara));},_Init:function(aArg){
C.Abu._Init.call(this,aArg);this.__proto__=C.APc;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APb={Sn:null,De:null,AP:null,CP:function(){this.Sn.R(A.aaR(A.acf.ANg));},Df:
function(E){C.BQ.Df.call(this,E);this.Sn.L(E);this.De.L(E);},_Init:function(aArg
){C.BQ._Init.call(this,aArg);C.CG._Init.call(this.Sn={I:this},0);A.acg.Ap._Init.
call(this.De={I:this},0);A.acg.C7._Init.call(this.AP={I:this},0);this.__proto__=
C.APb;this.Sn.H(Br1);this.Sn.R(A.aaR(A.acf.ANg));this.Sn.A6(0x11);this.De.H(Br2);
this.AP.DC(Br3);this.AP.DM(Br4);this.AP.L(A.jb.Bc);this.J(this.Sn,0);this.J(this.
De,0);this.J(this.AP,0);this.Sn.S(A.aaL(A.fl.Af));this.Sn.AZ(A.aaL(A.fl.Ak));this.
De.Ax(A.aaL(A.ach.AQp));},_Done:function(){this.__proto__=C.BQ;this.Sn._Done();this.
De._Done();this.AP._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Sn._ReInit();this.De._ReInit();this.AP._ReInit();this.Sn.R(A.aaR(
A.acf.ANg));this.Sn.S(A.aaL(A.fl.Af));this.Sn.AZ(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aey={TX:null,Aj2:
null,AjZ:null,Aj0:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.TX={I:this},0);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.
call(this.AjZ={I:this},0);A.acg.Ap._Init.call(this.Aj0={I:this},0);this.__proto__=
C.Aey;this.TX.H(Br5);this.TX.R(A.aaR(A.acf.Year));this.TX.A6(0x11);this.TX.L(A.jb.
Text);this.Aj2.H(BaH);this.Aj2.L(A.jb.Text);this.AjZ.H(Br6);this.AjZ.L(A.jb.Text
);this.Aj0.H(Br7);this.Aj0.L(A.jb.Text);this.J(this.TX,0);this.J(this.Aj2,0);this.
J(this.AjZ,0);this.J(this.Aj0,0);this.TX.S(A.aaL(A.fl.Kp));this.TX.AZ(A.aaL(A.fl.
HJ));this.Aj2.Ax(A.aaL(A.ach.AQD));this.AjZ.Ax(A.aaL(A.ach.AQC));this.Aj0.Ax(A.aaL(
A.ach.AQK));},_Done:function(){this.__proto__=C.EB;this.TX._Done();this.Aj2._Done(
);this.AjZ._Done();this.Aj0._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.TX._ReInit();this.Aj2._ReInit();this.AjZ._ReInit();this.
Aj0._ReInit();this.TX.R(A.aaR(A.acf.Year));this.TX.S(A.aaL(A.fl.Kp));this.TX.AZ(
A.aaL(A.fl.HJ));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.TX).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmP={Ajy:null,AP:null
,A$:null,Ea:null,UI:null,SW:null,Gu:null,XL:0,AtO:0,AlE:0,ABE:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SW.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.SW.M[2]-1,0,this.SW.M[
2]+1,aSize[1]]);this.UI.H([this.SW.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UI.M[2]-1,0,this.UI.M[2]+1,aSize[1]]);this.Gu.H([this.UI.M[2],0,aSize[
0],aSize[1]]);this.Ajy.H(this.Gu.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABE.toFixed());this.SW.L(this.V.AQ);this.SW.R(this.AlE.toFixed());this.UI.
L(this.V.AQ);this.UI.R(this.AtO.toFixed());var B1=this.BBO(this.XL);this.Gu.L(A.
_GetAutoObject(A.acj.Assessment).XB(B1));this.Ajy.L(A._GetAutoObject(A.acj.Assessment
).Qr(B1));this.Gu.R(A.abk(this.XL,0,0)+AfG);},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;Ad=(this.AX.B9()-Ad)-1;if(!!this.AX){this.AlE=this.AX.CF(Ad,1);this.AtO=
this.AX.CF(Ad,2);this.ABE=this.AX.CF(Ad,0);if(this.AlE>0)this.XL=(this.AtO/this.
AlE)*100;else this.XL=0;this.Am();}},BBO:function(XL){if(XL>=8)return 1;else if(
XL>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajy={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UI={I:this},0);A.acg.Text._Init.call(this.SW={I:this},0
);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.AmP;this.Ajy.H(Aon);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.H(Aon);this.Ea.L(A.jb.Bc);this.UI.
L(A.jb.Text);this.SW.H(Aon);this.SW.L(A.jb.Text);this.Gu.L(A.jb.Text);this.J(this.
Ajy,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.UI,0);this.
J(this.SW,0);this.J(this.Gu,0);this.UI.S(A.aaL(A.fl.Af));this.SW.S(A.aaL(A.fl.Af
));this.Gu.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajy._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.UI._Done(
);this.SW._Done();this.Gu._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajy._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea.
_ReInit();this.UI._ReInit();this.SW._ReInit();this.Gu._ReInit();this.UI.S(A.aaL(
A.fl.Af));this.SW.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajs={
BT:null,Ax0:A.jV,Rating:0,Ai:function(Ae){C.IH.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XB(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IH.S.call(this,E);if((E===A.aaL(A.fl.Kp))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.HJ))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Kx:function(E){if(this.Ax0===E)return;this.Ax0=E;this.
BT.R(E);},AkE:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IH._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Ajs;this.BT.A0(0x34);this.BT.H(Aah);this.BT.Ja(true);this.BT.
A6(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IH;this.BT._Done();C.IH._Done.call(
this);},_ReInit:function(){C.IH._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IH._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACM={
N6:null,SM:null,V:null,AnQ:null,AnP:null,Acf:null,Ace:null,DK:Lw,Baq:A.jV,A$k:A.
jV,Ab7:function(E){if(this.N6===E)return;this.N6=E;this.SM.Ab7(this.N6);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_0:function(E){if(this.Baq===E
)return;this.Baq=E;this.Acf.R(E);},A_C:function(E){if(this.A$k===E)return;this.A$k=
E;this.Ace.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SM._Init.
call(this.SM={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnQ={I:this},0);A.acg.AL._Init.call(this.AnP={I:this},0);A.acg.Text._Init.
call(this.Acf={I:this},0);A.acg.Text._Init.call(this.Ace={I:this},0);this.__proto__=
C.ACM;this.H(Br8);this.SM.H(Br9);this.SM.Ar(false);this.SM.BnK(360);this.SM.BnU(
0.5);this.V.A0(0x1D);this.V.H(UW);this.V.KS(true);this.V.R(Lw);this.V.L(A.jb.Text
);this.AnQ.H(BaI);this.AnQ.L(A.jb.H9);this.AnP.H(BaJ);this.AnP.L(A.jb.Gj);this.Acf.
A0(0x1D);this.Acf.H(BaI);this.Acf.L(A.jb.Text);this.Ace.A0(0x1D);this.Ace.H(BaJ);
this.Ace.L(A.jb.CT);this.J(this.SM,0);this.J(this.V,0);this.J(this.AnQ,0);this.J(
this.AnP,0);this.J(this.Acf,0);this.J(this.Ace,0);this.SM.BnV(A.aaL(A.acv.AT3));
this.V.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SM._Done();this.V._Done();this.AnQ.
_Done();this.AnP._Done();this.Acf._Done();this.Ace._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SM._ReInit();this.V._ReInit(
);this.AnQ._ReInit();this.AnP._ReInit();this.Acf._ReInit();this.Ace._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkS={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkS;this.H(U0);this.Background.A0(0x3F);this.Background.
H(U0);this.Background.L(A.jb.Bkh);this.Text.A0(0x3F);this.Text.H(U0);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.AZ(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Re={Ak3:null,NV:null,C9:null,AcD:null,JP:null,TemperatureUnit:null,MH:null,PX:
null,Sk:null,Ux:null,Lr:null,Jg:null,Z3:null,Z2:null,Sl:null,HG:null,AjI:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlM());
this.Ux.R(A._GetAutoObject(A.acj.Temperature).AlM());this.Sl.Z(!A._GetAutoObject(
A.Device.Device).AmR);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An8();this.AxX(
);this.AcG();this.AxY();},I1:function(G){this.WU(this);},CC:function(G){var B;C.
AB.CC.call(this,G);A.zX([this,this.AKF],[B=A._GetAutoObject(A.Device.Device),B.AEI
,B.AIW],0);A.zX([this,this.AAJ],[B=A._GetAutoObject(A.Device.Device),B.AEM,B.AIY
],0);A.zX([this,this.AAJ],[B=A._GetAutoObject(A.Device.Device),B.ASP,B.A0t],0);A.
zX([this,this.A3t],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Atn],0);A.zX([this
,this.A3l],[B=A._GetAutoObject(A.Device.Device),B.AEF,B.AIT],0);A._GetAutoObject(
A.Device.Device).AhP();if(A._GetAutoObject(A.Device.Device).AmR)A._GetAutoObject(
A.Device.Device).Ae2(true);A._GetAutoObject(A.Device.Device).AxJ();A.pe([this,this.
A3l],this);A.pe([this,this.AAJ],this);A.pe([this,this.A3t],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).Ut(false);A._GetAutoObject(A.Device.Device).Afa(false);A._GetAutoObject(A.Device.
Device).Ae2(false);A.z$([this,this.AKF],[B=A._GetAutoObject(A.Device.Device),B.AEI
,B.AIW],0);A.z$([this,this.AAJ],[B=A._GetAutoObject(A.Device.Device),B.AEM,B.AIY
],0);A.z$([this,this.AAJ],[B=A._GetAutoObject(A.Device.Device),B.ASP,B.A0t],0);A.
z$([this,this.A3t],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Atn],0);A.z$([this
,this.A3l],[B=A._GetAutoObject(A.Device.Device),B.AEF,B.AIT],0);},AAJ:function(G
){this.Am();},An8:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C9.L(A.jb.Gj);this.JP.L(this.C9.AQ);this.
MH.L(this.C9.AQ);this.TemperatureUnit.L(this.C9.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C9.L(A.jb.AV);this.JP.L(A.jb.Text);this.MH.L(this.JP.AQ);this.TemperatureUnit.
L(this.JP.AQ);this.HG.L(A.jb.Gj);}}},AxX:function(){this.Ak3.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JP.R(A.aaR(A.acf.ADW));this.C9.Ax(A.aaL(A.ach.AvN));this.C9.Cv(0);
this.NV.Cv(0);}break;case 1:{this.AVK(A._GetAutoObject(A.Device.Device).Lu,false
);this.C9.Ax(A.aaL(A.ach.AvN));this.NV.Cv(0);}break;case 2:{this.Sk.R(A._GetAutoObject(
A.Device.Converter).Ak2(A._GetAutoObject(A.Device.Device).AGh));this.AVK(A._GetAutoObject(
A.Device.Device).Lu,false);this.C9.Ax(null);this.NV.Cv(1);this.AcD.Z(true);this.
PX.Z(true);this.Sk.Z(true);this.Ux.Z(true);}break;case 3:{this.AUM();this.AVK(A.
_GetAutoObject(A.Device.Device).Lu,true);this.AcD.Z(false);this.PX.Z(false);this.
Sk.Z(false);this.Ux.Z(false);}break;case 4:{this.JP.R(A.aaR(A.acf.Bku));this.MH.
R(A.aaR(A.acu.Akl));this.C9.Ax(A.aaL(A.ach.AvP));this.C9.Cv(2);this.NV.Cv(0);}break;
default:A.ab5("%s%e",AH5,A._GetAutoObject(A.Device.Device).MeasureState);}},AcG:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Lu<=3240)||(A._GetAutoObject(A.Device.Device
).Lu>=5460))this.N.C2(null);else this.N.C2(A.aaL(A.ach.AeB));this.N.Cw(null);}break;
default:;}},AsF:function(G){A._GetAutoObject(C.A8).FB();},WU:function(G){},A0H:function(
s){this.WU(s);},AkX:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BBB(this);break;default:;}},A0G:function(s){this.AkX(s);},AVK:
function(AoO,BAm){if(BAm)this.Lr.L(A.jb.Bm);else this.Lr.L(A.jb.Gj);if(AoO<=3240
){this.MH.Z(false);this.TemperatureUnit.Z(false);this.Lr.Z(true);this.Lr.R(A.aaR(
A.acu.AVt));}else if(AoO>=5460){this.MH.Z(false);this.TemperatureUnit.Z(false);this.
Lr.Z(true);this.Lr.R(A.aaR(A.acu.Bql));}else{this.MH.Z(true);this.TemperatureUnit.
Z(true);this.Lr.Z(false);this.MH.R(A._GetAutoObject(A.Device.Converter).Ak2(AoO)
);}},AxY:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lu<=3240)||(A._GetAutoObject(A.Device.
Device).Lu>=5460))this.JP.R(A.aaR(A.acf.ADW));else this.JP.R(A.aaR(A.acf.BqV));break;
default:;}},AxZ:function(){},BqE:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Z3.Ar(true);break;case 4:this.Z2.Ar(true);break;default:{
this.Z3.Ar(false);this.Z2.Ar(false);A._GetAutoObject(A.Device.Device).Afa(false);
}}},AKF:function(G){this.Am();this.AxZ();this.BqE();this.BqC();},A3t:function(G){
if(A._GetAutoObject(A.Device.Device).AmS){this.Sl.L(A.jb.H9);this.Sl.Cv(1);}else{
this.Sl.L(A.jb.Bm);this.Sl.Cv(0);}},BBB:function(G){if(!A._GetAutoObject(A.Device.
Device).AmR)A._GetAutoObject(A.Device.Device).Ae2(!A._GetAutoObject(A.Device.Device
).AmS);},BqC:function(){if(A._GetAutoObject(A.Device.Device).AmR){this.Sl.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Ae2(true);else A._GetAutoObject(A.Device.Device).Ae2(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sl.Z(true);else this.Sl.Z(false);},AKH:function(
G){this.CC(this);},AUM:function(){A.ab5("%s",BaG);},A3l:function(G){if(A._GetAutoObject(
A.Device.Device).HG){this.JP.H(Br_);this.MH.H(Br$);this.TemperatureUnit.H(Bsa);}
else{this.JP.H(Bsb);this.MH.H(Bsc);this.TemperatureUnit.H(Bsd);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gm._Init.call(this.Ak3={I:this},0);A.acg.
Ap._Init.call(this.NV={I:this},0);A.acg.Ap._Init.call(this.C9={I:this},0);A.acg.
Ap._Init.call(this.AcD={I:this},0);A.acg.Text._Init.call(this.JP={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MH={
I:this},0);A.acg.Text._Init.call(this.PX={I:this},0);A.acg.Text._Init.call(this.
Sk={I:this},0);A.acg.Text._Init.call(this.Ux={I:this},0);C.CG._Init.call(this.Lr={
I:this},0);A.Device.TJ._Init.call(this.Jg={I:this},0);A.Device.TJ._Init.call(this.
Z3={I:this},0);A.Device.TJ._Init.call(this.Z2={I:this},0);A.acg.Ap._Init.call(this.
Sl={I:this},0);C.CG._Init.call(this.HG={I:this},0);A.acl.TJ._Init.call(this.AjI={
I:this},0);this.__proto__=C.Re;var B;this.N.Z(true);this.Ak3.Fr(1000);this.Ak3.B2=
2;this.NV.H(Bse);this.NV.L(A.jb.CT);this.C9.H(Bsf);this.C9.L(A.jb.AV);this.C9.Cv(
0);this.C9.Z(true);this.AcD.H(Bsg);this.AcD.L(A.jb.Text);this.AcD.Z(false);this.
JP.KS(true);this.JP.R(A.aaR(A.acf.ADW));this.JP.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.MH.A6(0x14);this.MH.R(A.aaR(A.acu.
Akl));this.MH.L(A.jb.Text);this.PX.H(Bsh);this.PX.R(A.aaR(A.acf.PX));this.PX.L(A.
jb.Text);this.PX.Z(false);this.Sk.H(Bsi);this.Sk.A6(0x14);this.Sk.R(Bsj);this.Sk.
L(A.jb.Text);this.Sk.Z(false);this.Ux.H(Bsk);this.Ux.R(Bsl);this.Ux.L(A.jb.Text);
this.Ux.Z(false);this.Lr.H(Bsm);this.Lr.R(A.aaR(A.acu.AVt));this.Lr.A6(0x12);this.
Lr.L(A.jb.Gj);this.Jg.B2=false;this.Jg.Cx=true;this.Jg.HO(1);this.Jg.Fr(4000);this.
Jg.Uq(0);this.Z3.B2=false;this.Z3.Cx=true;this.Z3.HO(2);this.Z3.Fr(400);this.Z3.
Uq(200);this.Z2.B2=false;this.Z2.Cx=true;this.Z2.HO(3);this.Z2.Fr(500);this.Z2.Uq(
250);this.Sl.H(Bsn);this.HG.H(Bso);this.HG.Z(A._GetAutoObject(A.Device.Device).HG
);this.HG.R(A.aaR(A.acf.HG));this.HG.A6(0x12);this.HG.L(A.jb.Gj);this.AjI.Ar(A._GetAutoObject(
A.Device.Device).HG);this.AjI.Fr(500);this.AjI.Uq(1000);this.J(this.NV,0);this.J(
this.C9,0);this.J(this.AcD,0);this.J(this.JP,0);this.J(this.TemperatureUnit,0);this.
J(this.MH,0);this.J(this.PX,0);this.J(this.Sk,0);this.J(this.Ux,0);this.J(this.Lr
,0);this.J(this.Sl,0);this.J(this.HG,0);this.N.CE=[this,this.AsF];this.N.Cf=[this
,this.A0G];this.N.B$=[this,this.A0H];this.N.C1(A.aaL(A.ach.AeA));this.Ak3.Q=[B=this.
C9,B.ASG,B.Cv];this.NV.Ax(A.aaL(A.ach.NV));this.C9.Ax(A.aaL(A.ach.AvN));this.AcD.
Ax(A.aaL(A.ach.AQZ));this.JP.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MH.S(A.aaL(A.fl.Aet));this.PX.S(A.aaL(A.fl.Af));this.Sk.S(A.aaL(A.fl.EK
));this.Ux.S(A.aaL(A.fl.EK));this.Lr.S(A.aaL(A.fl.Aet));this.Lr.AZ(A.aaL(A.fl.EK
));this.Lr.Cr(A.aaL(A.fl.Af));this.Jg.Q=[B=A._GetAutoObject(A.Device.Device),B.ASX
,B.A0z];this.Z3.Q=[B=A._GetAutoObject(A.Device.Device),B.AEN,B.AIZ];this.Z2.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEN,B.AIZ];this.Sl.Ax(A.aaL(A.ach.AqO));this.
HG.S(A.aaL(A.fl.EK));this.HG.AZ(A.aaL(A.fl.Kp));this.HG.Cr(A.aaL(A.fl.HJ));this.
AjI.Q=[B=this.HG,B.Fq,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak3._Done();this.NV._Done();this.C9._Done();this.AcD._Done();this.JP._Done(
);this.TemperatureUnit._Done();this.MH._Done();this.PX._Done();this.Sk._Done();this.
Ux._Done();this.Lr._Done();this.Jg._Done();this.Z3._Done();this.Z2._Done();this.
Sl._Done();this.HG._Done();this.AjI._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak3._ReInit();this.NV._ReInit();this.C9._ReInit();
this.AcD._ReInit();this.JP._ReInit();this.TemperatureUnit._ReInit();this.MH._ReInit(
);this.PX._ReInit();this.Sk._ReInit();this.Ux._ReInit();this.Lr._ReInit();this.Jg.
_ReInit();this.Z3._ReInit();this.Z2._ReInit();this.Sl._ReInit();this.HG._ReInit(
);this.AjI._ReInit();this.JP.R(A.aaR(A.acf.ADW));this.MH.R(A.aaR(A.acu.Akl));this.
PX.R(A.aaR(A.acf.PX));this.Lr.R(A.aaR(A.acu.AVt));this.HG.R(A.aaR(A.acf.HG));this.
JP.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MH.S(A.aaL(A.fl.
Aet));this.PX.S(A.aaL(A.fl.Af));this.Sk.S(A.aaL(A.fl.EK));this.Ux.S(A.aaL(A.fl.EK
));this.Lr.S(A.aaL(A.fl.Aet));this.Lr.AZ(A.aaL(A.fl.EK));this.Lr.Cr(A.aaL(A.fl.Af
));this.HG.S(A.aaL(A.fl.EK));this.HG.AZ(A.aaL(A.fl.Kp));this.HG.Cr(A.aaL(A.fl.HJ
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak3)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ux
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjI)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AVh={AcG:
function(){C.Re.AcG.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cw(null);this.N.C2(A.aaL(A.ach.AvQ));}break;default:;}},
WU:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Lu>3240)&&(A._GetAutoObject(A.Device.Device
).Lu<5460)){A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKH(this);break;default:;}},AxY:
function(){C.Re.AxY.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JP.R(A.aaR(A.acf.Bkv));break;default:;}},AxZ:function(){C.Re.AxZ.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WH(16711680);this.Jg.Ar(true);}break;default:this.Jg.Ar(false);
}},AUM:function(){this.C9.Ax(A.aaL(A.ach.AvP));this.C9.Cv(0);this.NV.Cv(0);},_Init:
function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.AVh;this.Dr(C.AO$);},
_className:"Application::TemperatureMeasurementScreen"};C.APe={De:null,IN:null,NX:
null,AP:null,Ag9:null,A$:null,Df:function(E){C.BQ.Df.call(this,E);this.De.L(E);this.
IN.L(E);this.NX.L(E);this.Ag9.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.De={I:this},0);A.acg.Ap._Init.call(this.IN={I:this},0
);A.acg.Ap._Init.call(this.NX={I:this},0);A.acg.C7._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.Ag9={I:this},0);A.acg.C7._Init.call(this.A$={I:this},
0);this.__proto__=C.APe;this.De.H(AyD);this.IN.H(Ayj);this.NX.H(AHG);this.AP.DC(
BaK);this.AP.DM(BaL);this.AP.L(A.jb.Bc);this.Ag9.H(Bsp);this.Ag9.L(A.jb.CT);this.
A$.DC(Bsq);this.A$.DM(Bsr);this.A$.L(A.jb.Bc);this.J(this.De,0);this.J(this.IN,0
);this.J(this.NX,0);this.J(this.AP,0);this.J(this.Ag9,0);this.J(this.A$,0);this.
De.Ax(A.aaL(A.ach.ADF));this.IN.Ax(A.aaL(A.ach.AeC));this.NX.Ax(A.aaL(A.ach.AvI)
);this.Ag9.Ax(A.aaL(A.ach.AQo));},_Done:function(){this.__proto__=C.BQ;this.De._Done(
);this.IN._Done();this.NX._Done();this.AP._Done();this.Ag9._Done();this.A$._Done(
);C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.De._ReInit(
);this.IN._ReInit();this.NX._ReInit();this.AP._ReInit();this.Ag9._ReInit();this.
A$._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.De)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dd={Es:null,DS:null,AGD:
0,ANO:0,Init:function(aArg){A.zV([this,this.ALm],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALm],this);},ALm:function(G){var Ad=this.AGD;if(Ad<0){this.
DS.E6();this.DS.EC(this.ANO);return;}this.DS.EC(A._GetAutoObject(A.Device.Device
).An.AmW(Ad,14));this.DS.AE$(A._GetAutoObject(A.Device.Device).An.I7(Ad,13));this.
DS.Ae3(A._GetAutoObject(A.Device.Device).An.H3(Ad,8));this.DS.Ur(A._GetAutoObject(
A.Device.Device).An.H3(Ad,11));this.DS.Ae7(A._GetAutoObject(A.Device.Device).An.
H3(Ad,12));this.DS.Ae9(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));},A_F:function(
E){if(this.AGD===E)return;this.AGD=E;A.pe([this,this.ALm],this);},A97:function(E
){if(this.ANO===E)return;this.ANO=E;A.pe([this,this.ALm],this);},A9h:function(){
return this.AGD;},_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.call(
this.Es={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dd;this.
Es.H(Bss);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11);this.Es.L(A.jb.Text);this.
DS.H(A0e);this.J(this.Es,0);this.J(this.DS,0);this.Es.S(A.aaL(A.fl.Af));this.Es.
AZ(A.aaL(A.fl.Ak));this.Es.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){
this.__proto__=C.EB;this.Es._Done();this.DS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.DS._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.Es.S(A.aaL(A.fl.Af));this.Es.AZ(A.aaL(A.fl.Ak));this.Es.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Kq={AgP:null,Text:null,Afk:null,Df:function(E
){C.BQ.Df.call(this,E);this.AgP.L(E);this.Text.L(E);this.Afk.L(E);},_Init:function(
aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgP={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afk={I:this},0);this.__proto__=
C.Kq;this.AgP.H(Bst);this.AgP.L(A.jb.Text);this.Text.H(Bsu);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afk.H(Bsv);this.Afk.L(A.jb.Text);this.
J(this.AgP,0);this.J(this.Text,0);this.J(this.Afk,0);this.AgP.Ax(A.aaL(A.ach.APg
));this.Text.S(A.aaL(A.fl.Kp));this.Text.AZ(A.aaL(A.fl.HJ));},_Done:function(){this.
__proto__=C.BQ;this.AgP._Done();this.Text._Done();this.Afk._Done();C.BQ._Done.call(
this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AgP._ReInit();this.Text.
_ReInit();this.Afk._ReInit();this.Text.S(A.aaL(A.fl.Kp));this.Text.AZ(A.aaL(A.fl.
HJ));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.AgP)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afk
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO9={
_Init:function(aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.AO9;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Kq._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AO$={_Init:function(
aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.AO$;this.J1(this.Afk,-2);this.
Afk.Ax(A.aaL(A.ach.Ag7));},_className:"Application::HeaderDeviceTemperature"};C.
Yp={Ai:function(Ae){C.AmP.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bqm)+A.aaR(A.acf.Colon
));},Ch:function(Ad){var B;if(!this.AX)return;this.AlE=0;this.AtO=0;this.XL=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B9();O++){this.AlE+=this.AX.CF(O,1);this.AtO+=
this.AX.CF(O,2);}if(this.AlE>0)this.XL=(this.AtO/this.AlE)*100;this.Am();}},_Init:
function(aArg){C.AmP._Init.call(this,aArg);this.__proto__=C.Yp;this.AP.Z(false);
this.A$.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kp));this.V.AZ(A.aaL(A.fl.
HJ));},_ReInit:function(){C.AmP._ReInit.call(this);this.V.S(A.aaL(A.fl.Kp));this.
V.AZ(A.aaL(A.fl.HJ));},_className:"Application::EvaluationLossesSumItem"};C.A6I={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A6I;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6J={K1:null,MX:null,AY:0,Yi:function(){this.K1=null;this.MX=null;this.AY=0;
},Ou:function(A7){var Hh;Hh=A._NewObject(C.A6I,0);Hh.A5=A7;if(!this.K1){this.K1=
Hh;this.MX=Hh;this.AY=1;}else{this.MX.Ah=Hh;this.MX=Hh;this.AY=this.AY+1;}},AmY:
function(){var B;var RN=0;var Oi=this.K1;while(!!Oi){RN+=Oi.A5;Oi=Oi.Ah;}return RN;
},AjP:function(){if(!this.AY)return 0;return this.AmY()/this.AY;},AqW:function(){
var B;if(!this.AY)return 0;var A1B=this.AjP();var Adg=0;var Oi=this.K1;while(!!Oi
){Adg+=Math.pow(Oi.A5-A1B,2);Oi=Oi.Ah;}Adg/=this.AY;Adg=Math.sqrt(Adg);return Adg;
},_Init:function(aArg){this.__proto__=C.A6J;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agz={Background:null,V:null,KT:0,Uv:5,Hl:false
,Ai:function(Ae){C.Hi.Ai.call(this,Ae);if(this.Hl)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CJ);},T:function(E){C.Hi.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hl===E)return;this.Hl=E;this.Am();},Kv:function(E){if(this.Uv===
E)return;this.Uv=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hi._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.Agz;this.H(BD);this.Background.A0(
0x3F);this.Background.H(BD);this.V.A0(0x3F);this.V.H(AIB);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KT=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kp));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hi;this.Background._Done();this.V._Done();C.Hi._Done.call(this
);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kp));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN5={WE:function(G){this.Agx();this.I3(A.aaR(
A.acf.AVs),[this,this.ATT],5);this.I3(A.aaR(A.acf.AVq),[this,this.ATS],7);this.I3(
A.aaR(A.acf.Calving),[this,this.Bmf],11);this.I3(A.aaR(A.acf.An1),[this,this.AwX
],2);this.I3(A.aaR(A.acf.AdV),[this,this.AEY],1);this.I3(A.aaR(A.acf.AuG),[this,
this.AES],0);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Anh
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){}
,Abs:function(){return C.ANb;},Abt:function(){return C.APD;},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AC2());},HQ:function(G){
var F;C.GJ.HQ.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.
Converter).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(
A.jV);}this.N.OQ(false);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).
Cd(62);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AN5;var
B;this.Dr(C.APa);this.Dk(A.aaR(A.acf.ASd));this.AwS([B=A._GetAutoObject(A.Device.
Device),B.A8L,B.Bbq]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dk(A.aaR(
A.acf.ASd));},_className:"Application::DryCowListScreen"};C.AN4={_Init:function(
aArg){C.I5._Init.call(this,aArg);this.__proto__=C.AN4;this.Ld.Ar(false);this.Ld.
Aj(false);this.Ld.Z(false);this.Js.Ar(false);this.Js.Aj(false);this.Js.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APa={DX:function(G){C.Kr.DX.
call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(9));},_Init:function(
aArg){C.Kr._Init.call(this,aArg);this.__proto__=C.APa;},_className:"Application::HeaderDryCowListFilter"
};C.Abp={Filter:null,LY:null,AG6:A.jV,Er:0,AGb:1,Operator:1,Bl:function(aSize){C.
Acn.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(
Ae){C.Acn.Ai.call(this,Ae);this.LY.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Md],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Md],E,0);A.pe([this,this.Md],this);},Md:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Tt((F=this.Filter,F[1].call(
F[0])).DL(this.Er,this.Operator));else this.Tt(null);},Ni:function(E){if(this.Er===
E)return;this.Er=E;A.pe([this,this.Md],this);},Tt:function(AI){if(!!AI){var A2d;
if(this.AGb!==1)A2d=this.AGb;else A2d=AI.Operator;this.T((this.AG6+CQ)+A._GetAutoObject(
A.Device.Converter).A6E(A2d));this.Zz(false);}else{this.T(this.AG6);this.Zz(true
);}},OP:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Md],this);},AFX:function(E){if(this.AG6===E)return;this.AG6=E;A.pe([this,this.Md
],this);},A_s:function(E){if(this.AGb===E)return;this.AGb=E;A.pe([this,this.Md],
this);},_Init:function(aArg){C.Acn._Init.call(this,aArg);C.LY._Init.call(this.LY={
I:this},0);this.__proto__=C.Abp;this.H(As8);this.AW.H(Bsw);this.LY.H(A0f);this.J1(
this.V,-1);this.J(this.LY,0);},_Done:function(){this.__proto__=C.Acn;this.LY._Done(
);C.Acn._Done.call(this);},_ReInit:function(){C.Acn._ReInit.call(this);this.LY._ReInit(
);},_Mark:function(D){var B;C.Acn._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.LY)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjK={LY:null,Ai:function(Ae){C.QF.
Ai.call(this,Ae);this.LY.L(this.V.AQ);},Tt:function(AI){if(!!AI){this.H7.Cv(1);this.
Zz(true);this.LY.A_j(false);}else{this.H7.Cv(0);this.Zz(false);this.LY.A_j(true);
}},_Init:function(aArg){C.QF._Init.call(this,aArg);C.LY._Init.call(this.LY={I:this
},0);this.__proto__=C.AjK;this.Jd=20;this.LY.H(A0f);this.J(this.LY,0);},_Done:function(
){this.__proto__=C.QF;this.LY._Done();C.QF._Done.call(this);},_ReInit:function(){
C.QF._ReInit.call(this);this.LY._ReInit();},_Mark:function(D){var B;C.QF._Mark.call(
this,D);if((B=this.LY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.AB4={Q:null,CP:function(){this.T(A._GetAutoObject(A.Device.Helper).AmX(this.
TableId,this.Er));},Tt:function(AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H7.Cv(1);else this.H7.Cv(0);},ID:function(G){A.pe([this,this.Md],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.ID],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.ID],E,0);if(!!E)A.pe([this,this.ID],this);},_Init:
function(aArg){C.QF._Init.call(this,aArg);this.__proto__=C.AB4;},_ReInit:function(
){C.QF._ReInit.call(this);this.CP();},_Mark:function(D){var B;C.QF._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APD={YU:null,I$:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YU={I:this},0);A.acg.Text._Init.call(this.I$={I:this},0);this.__proto__=
C.APD;this.A97(1);this.YU.H(Bsx);this.YU.KS(true);this.YU.R(A.aaR(A.acf.AD$));this.
YU.L(A.jb.Text);this.I$.H(Ta);this.I$.R(((A.aaR(A.acf.RQ)+BaM)+A.aaR(A.acf.Bap))+
O9);this.I$.L(A.jb.Text);this.J(this.YU,0);this.J(this.I$,0);this.YU.S(A.aaL(A.fl.
Ak));this.I$.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dd;this.YU._Done(
);this.I$._Done();C.Dd._Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this
);this.YU._ReInit();this.I$._ReInit();this.YU.R(A.aaR(A.acf.AD$));this.I$.R(((A.
aaR(A.acf.RQ)+BaM)+A.aaR(A.acf.Bap))+O9);this.YU.S(A.aaL(A.fl.Ak));this.I$.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.YU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANb={Ml:null,KQ:null,AdU:null,AP:null,A$:null
,Xs:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Ml.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KQ.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KQ.M[2]-1,0,this.
KQ.M[2]+1,aSize[1]]);this.AdU.H([this.KQ.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KQ.L(this.V.AQ);this.AdU.L(this.V.AQ);if(!!this.Xs&&(
this.Xs!==5)){this.Ml.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Xs));this.V.L(
A._GetAutoObject(A.acj.Assessment).XB(this.Xs));}else this.Ml.L(this.Background.
AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mh=this.AX.
CF(Ad,1);var A2M=this.AX.CF(Ad,29);var Pb=this.AX.Hv(Ad,4);var LQ=this.AX.I7(Ad,
13);var AlH=this.AX.I7(Ad,17);var AlQ=this.AX.H3(Ad,11);this.Xs=A._GetAutoObject(
A.Device.Helper).AMl(LQ,AlQ,AlH);this.T(Mh.toFixed());this.KQ.R(A2M.toFixed());this.
AdU.R(A._GetAutoObject(A.acj.KM).ACY(Pb,A._GetAutoObject(A.Device.Helper).Dv(),Bsy
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Ml={I:this},0);A.acg.Text._Init.call(this.KQ={I:this},0);A.acg.Text._Init.call(
this.AdU={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.ANb;this.Ml.H(Atd);this.AP.L(A.jb.Bc);this.
A$.L(A.jb.Bc);this.J(this.Ml,-1);this.J(this.KQ,0);this.J(this.AdU,0);this.J(this.
AP,0);this.J(this.A$,0);this.KQ.S(A.aaL(A.fl.Af));this.AdU.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Ml._Done();this.KQ._Done(
);this.AdU._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Ml._ReInit();this.KQ._ReInit();this.AdU.
_ReInit();this.AP._ReInit();this.A$._ReInit();this.KQ.S(A.aaL(A.fl.Af));this.AdU.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Ml
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RY={AJT:0,Bd7:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);if(this.Bd7){this.
T(A.aaR(A.acf.AN2));this.Kx(A.jV);}else{this.T(A.aaR(A.acf.Bkc));if(this.AJT>0)this.
Kx(this.AJT.toFixed());else this.Kx(Xg);}},Ch:function(G){C.FA.Ch.call(this,G);this.
Bd7=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlC=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlC>0)this.AJT=A._GetAutoObject(A.Device.Helper).
L$(AlC,A._GetAutoObject(A.Device.Helper).Dv());else this.AJT=0;this.Am();},_Init:
function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RY;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMq={ALw:A.jV,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.RQ));
this.Kx(this.ALw);},Ch:function(G){C.FA.Ch.call(this,G);var Pb=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALw=A._GetAutoObject(A.acj.KM).ACY(Pb,A._GetAutoObject(
A.Device.Helper).Dv(),((((Bsz+A.aaR(A.acf.Bhm))+BsA)+A.aaR(A.acf.Bhl))+BsB)+A.aaR(
A.acf.AL0));this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=
C.AMq;this.ALw=A.aaR(A.acf.Unknown);},_ReInit:function(){C.FA._ReInit.call(this);
this.ALw=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANX={Uf:null,Wq:null,Wt:null,Wu:null,SA:null,Init:function(aArg){this.Bb(this.
Uf);A.pe([this,this.ML],this);},Adw:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Nh._Init.call(this.Uf={
I:this},0);C.Nh._Init.call(this.Wq={I:this},0);C.Nh._Init.call(this.Wt={I:this},
0);C.AbS._Init.call(this.Wu={I:this},0);C.Uc._Init.call(this.SA={I:this},0);this.
__proto__=C.ANX;var B;this.Dr(C.AO9);this.Uf.H(IW);this.Uf.Aj(true);this.Uf.T(A.
aaR(A.acf.ACy));this.Uf.Bi(false);this.Uf.Nk(83);this.Wq.H(Qd);this.Wq.Aj(true);
this.Wq.T(A.aaR(A.acf.Info));this.Wq.Bi(true);this.Wq.Nk(82);this.Wt.H(Aaf);this.
Wt.Aj(true);this.Wt.T(A.aaR(A.acf.AGG));this.Wt.Bi(false);this.Wt.Nk(64);this.Wu.
H(Alh);this.Wu.Aj(true);this.Wu.T(A.aaR(A.acf.TempMeasurement));this.Wu.Bi(true);
this.Wu.Nk(60);this.SA.H(Aop);this.SA.Aj(true);this.SA.T(A.aaR(A.acf.ACT));this.
SA.Bi(false);this.J(this.Uf,-1);this.J(this.Wq,-1);this.J(this.Wt,-1);this.J(this.
Wu,-1);this.J(this.SA,-1);this.N.Cf=[this,this.Adw];this.N.Cw(A.aaL(A.ach.ADK));
this.Uf.AR=[B=this.Uf,B.Nn];this.Wq.AR=[B=this.Wq,B.Nn];this.Wt.AR=[B=this.Wt,B.
Nn];this.Wu.AR=[B=this.Wu,B.Nn];this.SA.AR=null;this.SA.Ab0([B=this.SA,B.Atp]);this.
SA.Gs([this,this.D_,this.GS]);this.SA.AS_([B=A._GetAutoObject(A.Device.Device),B.
Arw,B.Atn]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Uf._Done(
);this.Wq._Done();this.Wt._Done();this.Wu._Done();this.SA._Done();C.Ej._Done.call(
this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Uf._ReInit();this.Wq._ReInit(
);this.Wt._ReInit();this.Wu._ReInit();this.SA._ReInit();this.Uf.T(A.aaR(A.acf.ACy
));this.Wq.T(A.aaR(A.acf.Info));this.Wt.T(A.aaR(A.acf.AGG));this.Wu.T(A.aaR(A.acf.
TempMeasurement));this.SA.T(A.aaR(A.acf.ACT));},_Mark:function(D){var B;C.Ej._Mark.
call(this,D);if((B=this.Uf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceMainScreen"};C.ANY={Ud:null,AbQ:null,Wr:null,Init:function(aArg
){this.Bb(this.Ud);},BzB:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).UpdateFirmware(
);},BkQ:function(G){if(A._GetAutoObject(A.Device.Device).Aa5<=20)A._GetAutoObject(
A.Device.Device).A3(76,true,BsC,0,null);else A._GetAutoObject(A.Device.Device).A3(
39,true,A.jV,0,[this,this.BzB]);},_Init:function(aArg){C.Ej._Init.call(this,aArg
);C.Nh._Init.call(this.Ud={I:this},0);C.Co._Init.call(this.AbQ={I:this},0);C.AbS.
_Init.call(this.Wr={I:this},0);this.__proto__=C.ANY;var B;this.Dr(C.AO_);this.Ud.
H(IW);this.Ud.Aj(true);this.Ud.T(A.aaR(A.acf.A5O));this.Ud.Bi(false);this.Ud.Nk(
65);this.AbQ.H(Qd);this.AbQ.Aj(true);this.AbQ.T(A.aaR(A.acf.A6G));this.AbQ.Bi(true
);this.Wr.H(Aaf);this.Wr.Aj(true);this.Wr.T(A.aaR(A.acf.RangeTest));this.Wr.Bi(false
);this.Wr.Nk(15);this.J(this.Ud,-1);this.J(this.AbQ,-1);this.J(this.Wr,-1);this.
Ud.AR=[B=this.Ud,B.Nn];this.AbQ.AR=[this,this.BkQ];this.Wr.AR=[B=this.Wr,B.Nn];this.
Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ud._Done();this.AbQ._Done(
);this.Wr._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.Ud._ReInit();this.AbQ._ReInit();this.Wr._ReInit();this.Ud.T(A.aaR(A.acf.A5O
));this.AbQ.T(A.aaR(A.acf.A6G));this.Wr.T(A.aaR(A.acf.RangeTest));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Ud)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceServiceScreen"};C.AO_={_Init:function(aArg){
C.Kq._Init.call(this,aArg);this.__proto__=C.AO_;this.Text.R(A.aaR(A.acf.AGG));},
_ReInit:function(){C.Kq._ReInit.call(this);this.Text.R(A.aaR(A.acf.AGG));},_className:
"Application::HeaderDeviceServiceMenu"};C.Nh={Nb:null,Ai:function(Ae){C.AbS.Ai.call(
this,Ae);this.Nb.L(this.V.AQ);},_Init:function(aArg){C.AbS._Init.call(this,aArg);
A.acg.Ap._Init.call(this.Nb={I:this},0);this.__proto__=C.Nh;this.Nb.A0(0x38);this.
Nb.H(BsD);this.J(this.Nb,0);this.V.Cr(A.aaL(A.fl.Bh));this.Nb.Ax(A.aaL(A.ach.Ajt
));},_Done:function(){this.__proto__=C.AbS;this.Nb._Done();C.AbS._Done.call(this
);},_ReInit:function(){C.AbS._ReInit.call(this);this.Nb._ReInit();this.V.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.AbS._Mark.call(this,D);if((B=this.Nb)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"};C.ANT={Ahd:
null,Ahj:null,Ahl:null,Ahh:null,Aj_:null,Ahg:null,Ahf:null,Ahe:null,Aj8:null,Ahc:
null,Aj9:null,Ahk:null,Aj$:null,Ahi:null,Aka:null,Init:function(aArg){this.Bb(this.
Ahd);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.PQ._Init.call(this.Ahd={
I:this},0);C.PQ._Init.call(this.Ahj={I:this},0);C.PQ._Init.call(this.Ahl={I:this
},0);C.PQ._Init.call(this.Ahh={I:this},0);C.PQ._Init.call(this.Aj_={I:this},0);C.
PQ._Init.call(this.Ahg={I:this},0);C.PQ._Init.call(this.Ahf={I:this},0);C.PQ._Init.
call(this.Ahe={I:this},0);C.PQ._Init.call(this.Aj8={I:this},0);C.PQ._Init.call(this.
Ahc={I:this},0);C.PQ._Init.call(this.Aj9={I:this},0);C.PQ._Init.call(this.Ahk={I:
this},0);C.PQ._Init.call(this.Aj$={I:this},0);C.PQ._Init.call(this.Ahi={I:this},
0);C.PQ._Init.call(this.Aka={I:this},0);this.__proto__=C.ANT;this.Dr(C.AO5);this.
Ahd.H(Atk);this.Ahd.Aj(true);this.Ahd.SI(1);this.Ahj.H(A0c);this.Ahj.Aj(true);this.
Ahj.Bi(true);this.Ahj.SI(2);this.Ahl.H(Atf);this.Ahl.Aj(true);this.Ahl.Bi(false);
this.Ahl.SI(3);this.Ahh.H(Atg);this.Ahh.Aj(true);this.Ahh.Bi(true);this.Ahh.SI(4
);this.Aj_.H(Ayt);this.Aj_.Aj(true);this.Aj_.SI(5);this.Ahg.H(BsE);this.Ahg.Aj(true
);this.Ahg.Bi(true);this.Ahg.SI(6);this.Ahf.H(Ath);this.Ahf.Aj(true);this.Ahf.Bi(
false);this.Ahf.SI(7);this.Ahe.H(AyC);this.Ahe.Aj(true);this.Ahe.Bi(true);this.Ahe.
SI(8);this.Aj8.H(A0d);this.Aj8.Aj(true);this.Aj8.SI(9);this.Ahc.H(Alk);this.Ahc.
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
"Application::DeviceCheckScreen"};C.AO5={_Init:function(aArg){C.Kq._Init.call(this
,aArg);this.__proto__=C.AO5;this.Text.R(A.aaR(A.acf.A6d));},_ReInit:function(){C.
Kq._ReInit.call(this);this.Text.R(A.aaR(A.acf.A6d));},_className:"Application::HeaderDeviceCheck"
};C.PQ={DeviceComponentToString:null,Kl:null,Au5:0,BcG:false,CP:function(){this.
V.R(this.DeviceComponentToString.BS(this.Au5));},Bl:function(aSize){var B;C.Co.Bl.
call(this,aSize);this.Kl.H(A.abM(this.Kl.M,aSize[0]-((B=this.Kl.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kl.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kl.
AE3(this.V.AQ);if(this.BcG)this.Kl.AwK(A.jb.E1);else this.Kl.AwK(A.jb.Gj);},SI:function(
E){if(this.Au5===E)return;this.Au5=E;this.T(this.DeviceComponentToString.BS(E));
this.DX(this);},DX:function(G){this.BcG=A._GetAutoObject(A.Device.Device).AJK(this.
Au5);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kl._Init.call(this.Kl={I:this
},0);this.__proto__=C.PQ;this.V.H(BsK);this.V.A6(0x11);this.Kl.H(BsL);this.J(this.
Kl,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kl._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kl._ReInit();this.CP();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sj={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAI],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALr(this);this.DJ(this);},CC:function(G
){A.pe([this,this.ML],this);},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[
3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},AAI:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6U();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.ML],this);},Ew:function(G){A._GetAutoObject(C.A8).FB(
);},A3N:function(G){A._GetAutoObject(C.A8).Cd(84);},DJ:function(G){this.N.C1(A.aaL(
A.ach.E2));this.N.CE=[this,this.Ew];this.N.Cw(A.aaL(A.ach.ADJ));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Cf=null;this.N.I9.C3(100);}else{this.N.Cf=[this
,this.AAI];this.N.I9.C3(255);}this.N.C2(A.aaL(A.ach.AeC));this.N.B$=[this,this.A3N
];},ML:function(s){this.DJ(s);},ALr:function(G){A.ab5("%s",BsM);},BG6:function(s
){this.ALr(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sj;this.N.Ar(false);this.N.Z(true);this.Dr(C.
Abu);this.Ay.H(It);this.DY.A0(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(L3
);this.Y.JV(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.Em=[this
,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOh={Yg:null,Yf:null,X4:null
,TK:null,DJ:function(G){C.Sj.DJ.call(this,G);if(this.AV===this.TK){this.N.Cw(null
);this.N.Cf=null;this.N.C2(null);this.N.B$=null;}},ALr:function(G){if(this.AV===
this.TK)this.Dr(C.APe);else this.Dr(C.Abu);},BzU:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQi);case 1:return A.
aaL(A.ach.AQj);default:A.ab5("%s%s",BsN,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},BzV:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQk);case 1:return A.aaL(A.ach.AQl);default:
A.ab5("%s%s",AIL,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ih:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Yg)A._GetAutoObject(C.A8).Cd(66);else if(Cy===this.Yf)A._GetAutoObject(C.A8).Cd(
56);else if(Cy===this.X4)A._GetAutoObject(C.A8).Cd(58);else if(Cy===this.TK)A._GetAutoObject(
C.A8).Cd(59);},_Init:function(aArg){C.Sj._Init.call(this,aArg);C.Fo._Init.call(this.
Yg={I:this},0);C.Fo._Init.call(this.Yf={I:this},0);C.Fo._Init.call(this.X4={I:this
},0);C.Fo._Init.call(this.TK={I:this},0);this.__proto__=C.AOh;this.Yg.H(Qa);this.
Yg.Aj(true);this.Yg.T(A.aaR(A.acf.Afv));this.Yf.H(J5);this.Yf.Aj(true);this.Yf.T(
A.aaR(A.acf.Temperature));this.X4.H(BsO);this.X4.Aj(true);this.X4.T(A.aaR(A.acf.
Rating));this.TK.H(BsP);this.TK.Aj(true);this.TK.T(A.aaR(A.acf.A70));this.J(this.
Yg,0);this.J(this.Yf,0);this.J(this.X4,0);this.J(this.TK,0);this.Yg.AR=[this,this.
Ih];this.Yg.DB(this.BzV());this.Yf.AR=[this,this.Ih];this.Yf.DB(this.BzU());this.
X4.AR=[this,this.Ih];this.X4.DB(A.aaL(A.ach.AQg));this.TK.AR=[this,this.Ih];this.
TK.DB(A.aaL(A.ach.AQh));},_Done:function(){this.__proto__=C.Sj;this.Yg._Done();this.
Yf._Done();this.X4._Done();this.TK._Done();C.Sj._Done.call(this);},_ReInit:function(
){C.Sj._ReInit.call(this);this.Yg._ReInit();this.Yf._ReInit();this.X4._ReInit();
this.TK._ReInit();this.Yg.T(A.aaR(A.acf.Afv));this.Yf.T(A.aaR(A.acf.Temperature)
);this.X4.T(A.aaR(A.acf.Rating));this.TK.T(A.aaR(A.acf.A70));},_Mark:function(D){
var B;C.Sj._Mark.call(this,D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOi={VM:null,X6:null,Yh:null,ALr:function(G){this.Dr(C.AvA);},BzY:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ6
);case 1:return A.aaL(A.ach.AQ7);default:A.ab5("%s%s",AIL,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ih:function(G){var Cy=(C.Fo.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VM)A._GetAutoObject(C.A8).Cd(68);else if(Cy===
this.Yh)A._GetAutoObject(C.A8).Cd(57);else if(Cy===this.X6)A._GetAutoObject(C.A8
).Cd(67);},BzX:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AP5);case 1:return A.aaL(A.ach.AP6);default:A.ab5("%s%s",AIL
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},BzZ:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ8
);case 1:return A.aaL(A.ach.AQ9);default:A.ab5("%s%s",AIL,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sj._Init.call(
this,aArg);C.Fo._Init.call(this.VM={I:this},0);C.Fo._Init.call(this.X6={I:this},
0);C.Fo._Init.call(this.Yh={I:this},0);this.__proto__=C.AOi;this.VM.H(Qa);this.VM.
Aj(true);this.VM.T(A.aaR(A.acf.Bah));this.X6.H(A0g);this.X6.Aj(true);this.X6.T(A.
aaR(A.acf.A5E));this.Yh.H(Oc);this.Yh.Aj(true);this.Yh.T(A.aaR(A.acf.Bak));this.
J(this.VM,0);this.J(this.X6,0);this.J(this.Yh,0);this.VM.AR=[this,this.Ih];this.
VM.DB(this.BzY());this.VM.Ab4(A.aaL(A.ach.NW));this.X6.AR=[this,this.Ih];this.X6.
DB(this.BzX());this.Yh.AR=[this,this.Ih];this.Yh.DB(this.BzZ());},_Done:function(
){this.__proto__=C.Sj;this.VM._Done();this.X6._Done();this.Yh._Done();C.Sj._Done.
call(this);},_ReInit:function(){C.Sj._ReInit.call(this);this.VM._ReInit();this.X6.
_ReInit();this.Yh._ReInit();this.VM.T(A.aaR(A.acf.Bah));this.X6.T(A.aaR(A.acf.A5E
));this.Yh.T(A.aaR(A.acf.Bak));},_Mark:function(D){var B;C.Sj._Mark.call(this,D);
if((B=this.VM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOl={Bd_:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZR(0));},_Init:function(aArg){C.AqL._Init.call(this,aArg);this.
__proto__=C.AOl;this.Ae_(A.aaR(A.acf.A8j));},_ReInit:function(){C.AqL._ReInit.call(
this);this.Ae_(A.aaR(A.acf.A8j));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOe={Aik:null,Abx:null,UN:null,AaZ:null,Po:null,Ajp:null,AgB:null,Ajq:null,AgC:
null,Ay:null,AaQ:null,Add:0,Apv:0,DE:function(G){switch(this.Cq.CO){case 4:{if(this.
I6.Fq())return;var QA=this.Y.Br[1]+80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.Vz(null
,null);}break;case 5:{if(this.I6.Fq())return;var QA=this.Y.Br[1]-80;this.Y.Gb([this.
Y.Br[0],QA]);this.Y.Vz(null,null);}break;default:C.FC.DE.call(this,G);}},Ap6:function(
L4,AcY){if(!L4)return;var Fy=A._NewObject(A.Device.Filter,0);var HW=A._NewObject(
A.Device.Int32FilterCriterion,0);HW.Initialize(1,0,AcY,true);Fy.CW(HW);var Ac_=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fy.CW(Ac_
);L4.Bk(Fy);},Aiy:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arf()){this.
Aik.Ou(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azk=this.BzS(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaQ.Set(Azk,this.AaQ.Get(Azk)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Add++;this.Apv=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FC.Aiy.call(
this,G);},Aaq:function(G){if(this.Add>1)A._GetAutoObject(A.Device.Device).A3(56,
true,this.Add.toFixed(),0,null);if(this.Add===1)A._GetAutoObject(A.Device.Device
).A3(53,true,this.Apv.toFixed(),0,null);if(this.Aik.AY>0)this.UN.T(((((((A._GetAutoObject(
A.Device.Converter).Ax5(this.Aik.AjP()|0,1)+AyG)+A._GetAutoObject(A.Device.Converter
).Ax5(this.Aik.AqW()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af4())+AyH)+this.Aik.AY.
toFixed())+O9);else this.UN.T(A.aaR(A.acf.Unknown));var RN=this.AaQ.AmY();var O;
for(O=0;O<this.AaQ.MF;O++){var Bf=this.BAb(O);if(!!Bf){var CB=this.AaQ.Get(O);Bf.
Bmr(CB);if(!RN)Bf.A_y(0);else Bf.A_y(Math.round((CB*100)/RN)|0);Bf.Bn9(this.BAa(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adi=false;if(this.Aik.AY>0)
Adi=true;this.I6.Z(!Adi);C.FC.Aaq.call(this,G);},Adp:function(G){this.Aik.Yi();this.
AaQ.E6();this.Add=0;this.Apv=0;C.FC.Adp.call(this,G);},BAb:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Po;break;case 1:Bf=this.Ajp;break;case 2:Bf=this.
AgB;break;case 3:Bf=this.Ajq;break;case 4:Bf=this.AgC;break;default:throw new Error(
AyI+aIndex.toFixed());}return Bf;},BAa:function(aIndex,AoJ){var B;var Tu=A.jV;switch(
AoJ){case 0:{switch(aIndex){case 0:Tu=BsQ;break;case 1:Tu=BsR;break;case 2:Tu=BsS;
break;case 3:Tu=BsT;break;case 4:Tu=BsU;break;default:throw new Error(AyI+aIndex.
toFixed());}Tu=Tu+(CQ+A.aaR(A.acf.AAa));}break;case 1:{switch(aIndex){case 0:Tu=
BsV;break;case 1:Tu=BsW;break;case 2:Tu=BsX;break;case 3:Tu=BsY;break;case 4:Tu=
BsZ;break;default:throw new Error(AyI+aIndex.toFixed());}Tu=Tu+(CQ+A.aaR(A.acf.A7G
));}break;default:A.ab5("%s%e",BaN,AoJ);}return Tu;},BzT:function(AI6,AoJ){var Ac$=
0;switch(AoJ){case 0:switch(AI6){case 0:Ac$=35000;break;case 1:Ac$=40000;break;case
2:Ac$=45000;break;case 3:Ac$=50000;break;case 4:Ac$=2147483647;break;default:throw new
Error(AyI+AI6.toFixed());}break;case 1:switch(AI6){case 0:Ac$=36287;break;case 1:
Ac$=40823;break;case 2:Ac$=45359;break;case 3:Ac$=49895;break;case 4:Ac$=2147483647;
break;default:throw new Error(AyI+AI6.toFixed());}break;default:A.ab5("%s%e",BaN
,AoJ);}return Ac$;},BzS:function(A7,AoJ){var Azk=0;var O;for(O=0;O<this.AaQ.MF;O++
)if(A7<this.BzT(O,AoJ)){Azk=O;break;}return Azk;},Fk:function(G){var B;this.Ay.My((
B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[
1]);},_Init:function(aArg){C.FC._Init.call(this,aArg);C.Agz._Init.call(this.Abx={
I:this},0);C.IH._Init.call(this.UN={I:this},0);C.AaZ._Init.call(this.AaZ={I:this
},0);C.Po._Init.call(this.Po={I:this},0);C.Po._Init.call(this.Ajp={I:this},0);C.
Po._Init.call(this.AgB={I:this},0);C.Po._Init.call(this.Ajq={I:this},0);C.Po._Init.
call(this.AgC={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaQ={I:this},0);this.__proto__=C.AOe;this.Dr(C.AvA);this.Akz(A.aaR(
A.acf.A6v));this.Ae_(A.aaR(A.acf.A8c));this.Abx.H(Atk);this.Abx.Aj(true);this.Abx.
T(A.aaR(A.acf.A5t));this.Abx.Bi(false);this.Abx.Kv(5);this.UN.H(A0c);this.UN.Aj(
true);this.UN.T(A.jV);this.UN.Bi(true);this.UN.Kv(5);this.AaZ.H(Atf);this.AaZ.Aj(
true);this.Po.H(Atg);this.Po.Aj(true);this.Po.Bi(true);this.Ajp.H(Ath);this.Ajp.
Aj(true);this.AgB.H(AyC);this.AgB.Aj(true);this.AgB.Bi(true);this.Ajq.H(A0d);this.
Ajq.Aj(true);this.AgC.H(Alk);this.AgC.Aj(true);this.AgC.Bi(true);this.Ay.H(It);this.
AaQ.ZA(5);this.J(this.Abx,-1);this.J(this.UN,-1);this.J(this.AaZ,-1);this.J(this.
Po,-1);this.J(this.Ajp,-1);this.J(this.AgB,-1);this.J(this.Ajq,-1);this.J(this.AgC
,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.Aik=A._NewObject(C.AvU,0);
this.UN.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FC;this.Abx._Done(
);this.UN._Done();this.AaZ._Done();this.Po._Done();this.Ajp._Done();this.AgB._Done(
);this.Ajq._Done();this.AgC._Done();this.Ay._Done();this.AaQ._Done();C.FC._Done.
call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.Abx._ReInit();this.
UN._ReInit();this.AaZ._ReInit();this.Po._ReInit();this.Ajp._ReInit();this.AgB._ReInit(
);this.Ajq._ReInit();this.AgC._ReInit();this.Ay._ReInit();this.AaQ._ReInit();this.
Akz(A.aaR(A.acf.A6v));this.Ae_(A.aaR(A.acf.A8c));this.Abx.T(A.aaR(A.acf.A5t));this.
UN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.
Aik)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Po)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AgB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaZ={H$:null,Gu:null
,Bl:function(aSize){C.IH.Bl.call(this,aSize);this.H$.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gu.H([this.H$.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IH.Ai.call(this,Ae);this.H$.L(this.V.AQ);this.Gu.L(this.V.AQ);},_Init:
function(aArg){C.IH._Init.call(this,aArg);A.acg.Text._Init.call(this.H$={I:this}
,0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.AaZ;this.T(A.aaR(
A.acf.AHh));this.H$.H(Bs0);this.H$.KS(true);this.H$.R(A.aaR(A.acf.Aqy));this.H$.
L(A.jb.Text);this.Gu.H(BaO);this.Gu.R(AfG);this.Gu.L(A.jb.Text);this.J(this.H$,0
);this.J(this.Gu,0);this.V.S(A.aaL(A.fl.HJ));this.H$.S(A.aaL(A.fl.HJ));this.Gu.S(
A.aaL(A.fl.Kp));},_Done:function(){this.__proto__=C.IH;this.H$._Done();this.Gu._Done(
);C.IH._Done.call(this);},_ReInit:function(){C.IH._ReInit.call(this);this.H$._ReInit(
);this.Gu._ReInit();this.T(A.aaR(A.acf.AHh));this.H$.R(A.aaR(A.acf.Aqy));this.V.
S(A.aaL(A.fl.HJ));this.H$.S(A.aaL(A.fl.HJ));this.Gu.S(A.aaL(A.fl.Kp));},_Mark:function(
D){var B;C.IH._Mark.call(this,D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Po={AP:null,A$:null,P3:null,H$:null,Gu:null,Baj:A.jV,Aqy:0,A_9:0,Bl:function(
aSize){C.IH.Bl.call(this,aSize);this.P3.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P3.M[2]-1,0,this.P3.M[2]+1,aSize[1]]);this.H$.H([this.P3.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.H$.M[2]-1,0,this.H$.M[2]+1,aSize[
1]]);this.Gu.H([this.H$.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IH.Ai.call(
this,Ae);this.P3.L(this.V.AQ);this.H$.L(this.V.AQ);this.Gu.L(this.V.AQ);},Bn9:function(
E){if(this.Baj===E)return;this.Baj=E;this.P3.R(E);},Bmr:function(E){if(this.Aqy===
E)return;this.Aqy=E;this.H$.R(E.toFixed());},A_y:function(E){if(this.A_9===E)return;
this.A_9=E;this.Gu.R(E.toFixed()+AsZ);},_Init:function(aArg){C.IH._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.P3={I:this},0);A.acg.Text._Init.call(this.H$={I:
this},0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Po;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.P3.H(Bs1);this.P3.R(A.aaR(A.acf.AHh));this.P3.L(
A.jb.Text);this.H$.R(U2);this.H$.L(A.jb.Text);this.Gu.R(Bs2);this.Gu.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.P3,0);this.J(this.H$,0);this.J(
this.Gu,0);this.P3.S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IH;this.AP._Done();this.A$._Done();this.
P3._Done();this.H$._Done();this.Gu._Done();C.IH._Done.call(this);},_ReInit:function(
){C.IH._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.P3._ReInit();
this.H$._ReInit();this.Gu._ReInit();this.P3.R(A.aaR(A.acf.AHh));this.P3.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IH._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMC={AKT:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mt();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amx._Init.call(this,aArg);this.__proto__=
C.AMC;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARI={R5:null,
R$:null,R4:null,R8:null,Pq:null,R7:null,ALo:function(G){A.pe([this,this.BC6],this
);A.pe([this,this.BCU],this);A.pe([this,this.BCQ],this);A.pe([this,this.A4I],this
);A.pe([this,this.BCX],this);A.pe([this,this.BCV],this);},Ih:function(G){var Cy=(
C.QX.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.R$)A._GetAutoObject(C.A8
).Cd(20);else if(Cy===this.Pq)A._GetAutoObject(C.A8).Cd(14);else if(Cy===this.R5
)A._GetAutoObject(C.A8).Cd(12);else if(Cy===this.R8)A._GetAutoObject(C.A8).Cd(43
);else if(Cy===this.R4)A._GetAutoObject(C.A8).Cd(51);else if(Cy===this.R7)A._GetAutoObject(
C.A8).Cd(61);},BCU:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mt();var
Azr=A._NewObject(A.Device.BoolFilterCriterion,0);Azr.Initialize(9,0,true,true);Be.
CW(Azr);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pq.Zy(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BC6:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mt();var ABB=A._NewObject(A.Device.BoolFilterCriterion,0);ABB.Initialize(
12,0,true,true);Be.CW(ABB);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R$.Zy(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCQ:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mt();var Ay9=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay9.Initialize(8,0,true,true);Be.CW(Ay9);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R5.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},A4I:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6O(A._GetAutoObject(A.Device.Device
).ABH);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R4.Zy(A._GetAutoObject(A.
Device.Device).An.B9().toFixed());},BCX:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6X();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R8.Zy(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BCV:function(G){var Be=A._GetAutoObject(A.
Device.Helper).AC2();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R7.Zy(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},_Init:function(aArg){C.T_._Init.call(this,
aArg);C.QX._Init.call(this.R5={I:this},0);C.QX._Init.call(this.R$={I:this},0);C.
QX._Init.call(this.R4={I:this},0);C.QX._Init.call(this.R8={I:this},0);C.QX._Init.
call(this.Pq={I:this},0);C.QX._Init.call(this.R7={I:this},0);this.__proto__=C.ARI;
this.R5.H(Qa);this.R5.Aj(true);this.R5.T(A.aaR(A.acf.Alarm));this.R5.Ab1(true);this.
R$.H(A0g);this.R$.Aj(true);this.R$.T(A.aaR(A.acf.Asd));this.R$.Ab1(true);this.R4.
H(Oc);this.R4.Aj(true);this.R4.T(A.aaR(A.acf.ActionList));this.R4.Ab1(true);this.
R8.H(Qb);this.R8.Aj(true);this.R8.T(A.aaR(A.acf.AOI));this.R8.Ab1(true);this.Pq.
H(S$);this.Pq.Ar(false);this.Pq.Aj(false);this.Pq.Z(false);this.Pq.T(A.aaR(A.acf.
ACl));this.Pq.Ab1(true);this.R7.H(UT);this.R7.Aj(true);this.R7.T(A.aaR(A.acf.A6q
));this.R7.Ab1(true);this.J(this.R5,-1);this.J(this.R$,-1);this.J(this.R4,-1);this.
J(this.R8,-1);this.J(this.Pq,-1);this.J(this.R7,-1);this.R5.AR=[this,this.AcV];this.
R5.DB(A.aaL(A.ach.ADA));this.R5.Ab4(A.aaL(A.ach.NW));this.R$.AR=[this,this.AcV];
this.R$.DB(A.aaL(A.ach.AQ3));this.R$.Ab4(A.aaL(A.ach.NW));this.R4.AR=[this,this.
AcV];this.R4.DB(A.aaL(A.ach.APP));this.R4.Ab4(A.aaL(A.ach.NW));this.R8.AR=[this,
this.AcV];this.R8.DB(A.aaL(A.ach.AQn));this.R8.Ab4(A.aaL(A.ach.NW));this.Pq.AR=[
this,this.AcV];this.Pq.DB(A.aaL(A.ach.ADA));this.Pq.Ab4(A.aaL(A.ach.NW));this.R7.
AR=[this,this.AcV];this.R7.DB(A.aaL(A.ach.AQd));this.R7.Ab4(A.aaL(A.ach.NW));},_Done:
function(){this.__proto__=C.T_;this.R5._Done();this.R$._Done();this.R4._Done();this.
R8._Done();this.Pq._Done();this.R7._Done();C.T_._Done.call(this);},_ReInit:function(
){C.T_._ReInit.call(this);this.R5._ReInit();this.R$._ReInit();this.R4._ReInit();
this.R8._ReInit();this.Pq._ReInit();this.R7._ReInit();this.R5.T(A.aaR(A.acf.Alarm
));this.R$.T(A.aaR(A.acf.Asd));this.R4.T(A.aaR(A.acf.ActionList));this.R8.T(A.aaR(
A.acf.AOI));this.Pq.T(A.aaR(A.acf.ACl));this.R7.T(A.aaR(A.acf.A6q));},_Mark:function(
D){var B;C.T_._Mark.call(this,D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARH={Sa:null,VL:null,R9:null,R6:null,R_:null,ALo:function(G){A.pe([this,this.
BCR],this);A.pe([this,this.BC1],this);A.pe([this,this.BC2],this);A.pe([this,this.
BC7],this);A.pe([this,this.BC3],this);},Ih:function(G){var Cy=(C.QX.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VL)A._GetAutoObject(C.A8).Cd(90);if(Cy===this.
R6)A._GetAutoObject(C.A8).Cd(74);if(Cy===this.R9)A._GetAutoObject(C.A8).Cd(71);if(
Cy===this.R_)A._GetAutoObject(C.A8).Cd(46);if(Cy===this.Sa)A._GetAutoObject(C.A8
).Cd(85);},BC2:function(G){var Be=A._GetAutoObject(A.Device.Helper).AC5();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.R_.Zy(A._GetAutoObject(A.Device.Device).An.B9().
toFixed());},BC7:function(G){var Be=A._GetAutoObject(A.Device.Helper).A68(Math.max(
A._GetAutoObject(A.Device.Device).Av2,A._GetAutoObject(A.Device.Helper).A60(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Sa.Zy(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BC1:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A63();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R9.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCR:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOJ();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R6.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BC3:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avw();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VL.Zy(A._GetAutoObject(A.Device.Device).An.B9().toFixed()
);},_Init:function(aArg){C.T_._Init.call(this,aArg);C.QX._Init.call(this.Sa={I:this
},0);C.QX._Init.call(this.VL={I:this},0);C.QX._Init.call(this.R9={I:this},0);C.QX.
_Init.call(this.R6={I:this},0);C.QX._Init.call(this.R_={I:this},0);this.__proto__=
C.ARH;this.Sa.H(Bs3);this.Sa.Aj(true);this.Sa.T(A.aaR(A.acf.A76));this.Sa.Ab1(true
);this.VL.H(Bs4);this.VL.Aj(true);this.VL.T(A.aaR(A.acf.AGk));this.R9.H(Bs5);this.
R9.Aj(true);this.R9.T(A.aaR(A.acf.A78));this.R9.Ab1(true);this.R6.H(Bs6);this.R6.
Aj(true);this.R6.T(A.aaR(A.acf.AB2));this.R6.Ab1(true);this.R_.H(Bs7);this.R_.Aj(
true);this.R_.T(A.aaR(A.acf.ASj));this.R_.Ab1(true);this.J(this.Sa,-1);this.J(this.
VL,-1);this.J(this.R9,-1);this.J(this.R6,-1);this.J(this.R_,-1);this.Sa.AR=[this
,this.AcV];this.Sa.DB(A.aaL(A.ach.AQF));this.Sa.Ab4(A.aaL(A.ach.NW));this.VL.AR=[
this,this.AcV];this.VL.DB(A.aaL(A.ach.ADQ));this.R9.AR=[this,this.AcV];this.R9.DB(
A.aaL(A.ach.AQH));this.R9.Ab4(A.aaL(A.ach.NW));this.R6.AR=[this,this.AcV];this.R6.
DB(A.aaL(A.ach.AP_));this.R6.Ab4(A.aaL(A.ach.NW));this.R_.AR=[this,this.AcV];this.
R_.DB(A.aaL(A.ach.AQJ));this.R_.Ab4(A.aaL(A.ach.NW));},_Done:function(){this.__proto__=
C.T_;this.Sa._Done();this.VL._Done();this.R9._Done();this.R6._Done();this.R_._Done(
);C.T_._Done.call(this);},_ReInit:function(){C.T_._ReInit.call(this);this.Sa._ReInit(
);this.VL._ReInit();this.R9._ReInit();this.R6._ReInit();this.R_._ReInit();this.Sa.
T(A.aaR(A.acf.A76));this.VL.T(A.aaR(A.acf.AGk));this.R9.T(A.aaR(A.acf.A78));this.
R6.T(A.aaR(A.acf.AB2));this.R_.T(A.aaR(A.acf.ASj));},_Mark:function(D){var B;C.T_.
_Mark.call(this,D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASh={WE:function(G){this.Agx(
);this.AMa();this.A47(A.aaR(A.acf.A7J),[this,this.BnP],131072);this.A47(A.aaR(A.
acf.A7I),[this,this.BnO],16384);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR
).Mj(A.aaR(A.acf.ARC)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DE:function(G){},Abs:function(){return C.Aqu;},Abt:function(){return C.Aq1;}
,Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A63());},HQ:function(G){C.QD.HQ.call(this,G);if(this.Aki()===false){this.
N.Cw(A._GetAutoObject(A.Device.Converter).Ajr(A._GetAutoObject(A.Device.Converter
).AL7(this.LX.AC7())));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OQ(false
);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(72);},BnO:function(
G){this.AGI(16384);},BnP:function(G){this.AGI(131072);},_Init:function(aArg){C.QD.
_Init.call(this,aArg);this.__proto__=C.ASh;this.Dr(C.APs);this.Dk(A.aaR(A.acf.A8a
));this.ATq(A._GetAutoObject(C.Av9));},_ReInit:function(){C.QD._ReInit.call(this
);this.Dk(A.aaR(A.acf.A8a));},_className:"Application::NoNaisIdListScreen"};C.ASg={
_Init:function(aArg){C.I5._Init.call(this,aArg);this.__proto__=C.ASg;this.Mv.Ar(
false);this.Mv.Aj(false);this.Mv.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APs={DX:function(G){C.Kr.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.
Converter).Ad0(10));},_Init:function(aArg){C.Kr._Init.call(this,aArg);this.__proto__=
C.APs;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkP={OD:null,Bf6:false
,CP:function(){A.pe([this,this.AoA],this);},DE:function(G){},CC:function(G){C.GJ.
CC.call(this,G);if(this.Bf6&&(A._GetAutoObject(A.Device.Device).PY>0))A.pe([this
,this.AIO],this);},Agg:function(G){this.A6n(this);},Agj:function(){A._GetAutoObject(
C.A8).Cd(73);},ASp:function(G){throw new Error(Aox);},Ba8:function(s){this.ASp(s
);},ASq:function(G){throw new Error(Aox);},Ba9:function(s){this.ASq(s);},ASv:function(
G){throw new Error(Aox);},AIO:function(s){this.ASv(s);},Bfg:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.
Bf6=true;A._GetAutoObject(C.A8).Cd(76);}},Agi:function(G){var B;var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.
XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);},XG:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P4.Z1===3){A._GetAutoObject(A.Device.Device).A3(
74,false,A.jV,0,[this,this.Agi]);A.z$([this,this.XG],[B=A._GetAutoObject(A.Device.
Device),B.WD,B.Xj],0);A.pe([this,this.AIO],this);}},AJJ:function(){throw new Error(
Aox);},A8q:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A6m(this);},
Bom:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.BiD(this);},ID:function(
G){},A98:function(E){if(A.aaZ(this.OD,E))return;if(!!this.OD)A.z$([this,this.ID]
,this.OD,0);this.OD=E;if(!!E)A.zX([this,this.ID],E,0);if(!!E)A.pe([this,this.ID]
,this);},BgT:function(G){var F,Ct;if(!this.OD)return;(Ct=this.OD,Ct[2].call(Ct[0
],!(F=this.OD,F[1].call(F[0]))));},_Init:function(aArg){C.GJ._Init.call(this,aArg
);this.__proto__=C.AkP;this.Dk(A.aaR(A.acf.A8h));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dk(A.aaR(A.acf.A8h));this.CP();},_Mark:function(D){var B;C.GJ._Mark.
call(this,D);if((B=this.OD)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::RegistrationsListScreen"};C.AUx={_Init:function(aArg){C.I5._Init.call(
this,aArg);this.__proto__=C.AUx;},_className:"Application::RegistrationsListFilterScreen"
};C.Aev={_Init:function(aArg){C.Yu._Init.call(this,aArg);this.__proto__=C.Aev;this.
Text.H(Bs8);this.Text.R(A.jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"
};C.AB9={Jo:0,AP:null,A$:null,Ea:null,IM:null,SZ:null,Gz:null,Mh:0,K_:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IM.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A$.H([this.IM.M[2]-1,0,this.IM.M[2]+1,aSize[
1]]);this.SZ.H([this.IM.M[2],0,this.IM.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.SZ.M[2]-1,0,this.SZ.M[2]+1,aSize[1]]);this.Gz.H([this.SZ.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IM.L(this.V.AQ);this.
Gz.L(this.V.AQ);this.SZ.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj7(this.
K_)){this.V.S(A.aaL(A.fl.H2));this.T(BaP);this.SZ.R(Rp);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mh.toFixed());this.SZ.R(A._GetAutoObject(A.Device.Helper).VY(this.
Jo,0,5).toFixed());}},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX
){this.Mh=this.AX.CF(Ad,1);this.K_=this.AX.AOX(Ad,34);var AtW=this.AX.AOP(Ad,7);
this.Jo=this.AX.KP(Ad,26);var Aze=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.
Helper).L$(Aze,A._GetAutoObject(A.Device.Helper).Dv());this.IM.Ax(A._GetAutoObject(
A.Device.Converter).AmV(AtW));if(AfR<100)this.Gz.R((AfR.toFixed()+CQ)+A.aaR(A.acf.
AL0));else this.Gz.R(A._GetAutoObject(A.acj.KM).ACY(Aze,A._GetAutoObject(A.Device.
Helper).Dv(),AIt));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IM={I:this},0);
A.acg.Text._Init.call(this.SZ={I:this},0);C.CG._Init.call(this.Gz={I:this},0);this.
__proto__=C.AB9;this.AP.H(Aor);this.AP.L(A.jb.Bc);this.A$.H(Aos);this.A$.L(A.jb.
Bc);this.Ea.H(A0h);this.Ea.L(A.jb.Bc);this.IM.H(BaQ);this.IM.L(A.jb.Text);this.SZ.
H(Ayy);this.Gz.H(A0i);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
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
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADq={Aj4:
null,PC:null,I8:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj4={I:this},0);A.acg.Ap._Init.call(this.PC={I:this},0);A.acg.Ap._Init.
call(this.I8={I:this},0);this.__proto__=C.ADq;this.Aj4.H(Bs9);this.Aj4.L(A.jb.Text
);this.PC.H(Bs_);this.PC.L(A.jb.Text);this.I8.H(BaH);this.I8.L(A.jb.Text);this.J(
this.Aj4,0);this.J(this.PC,0);this.J(this.I8,0);this.Aj4.Ax(A.aaL(A.ach.ADM));this.
PC.Ax(A.aaL(A.ach.AvK));this.I8.Ax(A.aaL(A.ach.AvF));},_Done:function(){this.__proto__=
C.Dd;this.Aj4._Done();this.PC._Done();this.I8._Done();C.Dd._Done.call(this);},_ReInit:
function(){C.Dd._ReInit.call(this);this.Aj4._ReInit();this.PC._ReInit();this.I8.
_ReInit();},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.Aj4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APu={IT:null,Ag2:null,HR:null,Bc:null,MD:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9e,B.A_D],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
WC,B.JW],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SK
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},Df:function(E){C.BQ.Df.call(this,E);this.IT.L(E);this.Ag2.L(E);this.
HR.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HR.R(A.aaR(A.acf.Afd));else this.HR.R(((A.aaR(A.acf.GN)+A.aaR(A.acf.
Colon))+CQ)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
AqY()){this.Aw4(((A._GetAutoObject(A.Device.Helper).W.CL+1).toFixed()+Bat)+A._GetAutoObject(
A.Device.Device).An.B9().toFixed());this.JW(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nl(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Aw4(Bau);this.JW(2);
this.OnSetAnimalId(-1);this.Nl(0);}},JW:function(E){if(this.Gender===E)return;this.
Gender=E;this.Ag2.Ax(A._GetAutoObject(A.Device.Converter).AmV(E));},Aw4:function(
E){if(this.MD===E)return;this.MD=E;this.IT.R(E);},Nl:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj7(E))this.HR.
Z(false);else this.HR.Z(true);},_Init:function(aArg){C.BQ._Init.call(this,aArg);
A.acg.Text._Init.call(this.IT={I:this},0);A.acg.Ap._Init.call(this.Ag2={I:this},
0);A.acg.Text._Init.call(this.HR={I:this},0);A.acg.C7._Init.call(this.Bc={I:this
},0);this.__proto__=C.APu;this.IT.H(Bav);this.IT.Hn(2);this.IT.KS(true);this.IT.
A6(0x12);this.IT.R(Baw);this.Ag2.H(Bs$);this.HR.H(Bta);this.HR.A6(0x11);this.HR.
R(A.aaR(A.acf.Afd));this.Bc.DC(AyE);this.Bc.DM(Atj);this.Bc.L(A.jb.Bc);this.J(this.
IT,0);this.J(this.Ag2,0);this.J(this.HR,0);this.J(this.Bc,0);this.IT.S(A.aaL(A.fl.
Ak));this.Ag2.Ax(A._GetAutoObject(A.Device.Converter).AmV(2));this.HR.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.IT._Done();this.
Ag2._Done();this.HR._Done();this.Bc._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.IT._ReInit();this.Ag2._ReInit();this.HR._ReInit();
this.Bc._ReInit();this.HR.R(A.aaR(A.acf.Afd));this.IT.S(A.aaL(A.fl.Ak));this.HR.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.IT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aa2={EaseOfDeliveryToString:
null,AgT:null,Ch:function(G){C.NI.Ch.call(this,G);var AJ2=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.Kx(this.EaseOfDeliveryToString.Lv(AJ2));this.G3.R(
this.AgT.Ael(AJ2).toFixed());},Df:function(E){C.NI.Df.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.NI._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgT._Init.call(this.
AgT={I:this},0);this.__proto__=C.Aa2;this.T(A.aaR(A.acf.AgK));},_Done:function(){
this.__proto__=C.NI;this.EaseOfDeliveryToString._Done();this.AgT._Done();C.NI._Done.
call(this);},_ReInit:function(){C.NI._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgT._ReInit();this.T(A.aaR(A.acf.AgK));},_Mark:function(D){var B;
C.NI._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XV={WhereAboutsToString:null,KY:null,Ch:function(G){C.NI.Ch.call(this,G);var
K_=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kx(this.WhereAboutsToString.
Lv(K_));this.G3.R(this.KY.Ael(K_).toFixed());},Df:function(E){C.NI.Df.call(this,
E);this.G3.L(E);},_Init:function(aArg){C.NI._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KY._Init.call(this.KY={
I:this},0);this.__proto__=C.XV;this.T(A.aaR(A.acf.Ji));},_Done:function(){this.__proto__=
C.NI;this.WhereAboutsToString._Done();this.KY._Done();C.NI._Done.call(this);},_ReInit:
function(){C.NI._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KY._ReInit(
);this.T(A.aaR(A.acf.Ji));},_Mark:function(D){var B;C.NI._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R1={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.
OnSetId],0);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6]
,0);A.pe([this,this.AfH],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.z$([this
,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U3,B.U6],0);},Fk:function(G){var
B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.
Mz(-this.Y.Br[1]);},DE:function(G){switch(this.Cq.CO){case 6:case 7:this.Cq.NL=true;
break;case 4:this.Bgp(4);break;case 5:this.Bgp(5);break;default:;}},Bgp:function(
GA){var B;switch(GA){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Dc(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Dc(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;default:throw new Error(
Btb);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I4.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ch(this
);}X=X.Ah;}},AfH:function(s){this.GH(s);},MS:function(G){var B;this.Y.Vz(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R1;this.Cq.Filter=147;this.Y.H(U0);this.Y.JV(1);this.Ay.H(AsY
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,
this.DE];this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XW={AaW:null,
XS:null,AaX:null,XT:null,Aa2:null,XV:null,_Init:function(aArg){C.R1._Init.call(this
,aArg);C.AaW._Init.call(this.AaW={I:this},0);C.XS._Init.call(this.XS={I:this},0);
C.AaX._Init.call(this.AaX={I:this},0);C.XT._Init.call(this.XT={I:this},0);C.Aa2.
_Init.call(this.Aa2={I:this},0);C.XV._Init.call(this.XV={I:this},0);this.__proto__=
C.XW;this.AaW.H(BD);this.AaW.Aj(true);this.XS.H(IW);this.XS.Aj(true);this.XS.Bi(
true);this.AaX.H(Qd);this.AaX.Aj(true);this.XT.H(Aaf);this.XT.Aj(true);this.XT.Bi(
true);this.Aa2.H(Alh);this.Aa2.Aj(true);this.XV.H(Aop);this.XV.Aj(true);this.XV.
Bi(true);this.J(this.AaW,0);this.J(this.XS,0);this.J(this.AaX,0);this.J(this.XT,
0);this.J(this.Aa2,0);this.J(this.XV,0);},_Done:function(){this.__proto__=C.R1;this.
AaW._Done();this.XS._Done();this.AaX._Done();this.XT._Done();this.Aa2._Done();this.
XV._Done();C.R1._Done.call(this);},_ReInit:function(){C.R1._ReInit.call(this);this.
AaW._ReInit();this.XS._ReInit();this.AaX._ReInit();this.XT._ReInit();this.Aa2._ReInit(
);this.XV._ReInit();},_Mark:function(D){var B;C.R1._Mark.call(this,D);if((B=this.
AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XT={
BreedToString:null,G3:null,M5:null,Ch:function(G){C.IG.Ch.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BS(Bv));this.G3.
R(this.M5.Ael(Bv).toFixed());},Df:function(E){C.IG.Df.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.IG._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G3={I:this},0);A.Device.
M5._Init.call(this.M5={I:this},0);this.__proto__=C.XT;this.BT.H(Btc);this.G3.H(Btd
);this.G3.Hn(5);this.G3.A6(0x14);this.G3.R(Bte);this.G3.L(A.jb.Text);this.J(this.
G3,0);this.Hw.Ax(A.aaL(A.ach.ADE));this.G3.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IG;this.BreedToString._Done();this.G3._Done();this.M5._Done();C.
IG._Done.call(this);},_ReInit:function(){C.IG._ReInit.call(this);this.BreedToString.
_ReInit();this.G3._ReInit();this.M5._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IG._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaX={
Ch:function(G){C.IG.Ch.call(this,G);var AAm=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAm>0)this.T(A._GetAutoObject(A.Device.Converter).Rj(AAm));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IG._Init.call(this,aArg);this.__proto__=
C.AaX;this.Hw.Ax(A.aaL(A.ach.AQe));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XS={Yz:null,Ch:function(G){C.IG.Ch.call(this,G);var Pb=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Pb>
0)this.T(A._GetAutoObject(A.acj.KM).AjN(Pb));else this.T(A.aaR(A.acf.Unknown));var
Azg=A.aaL(A.aci.TO);switch(AfW){case 0:Azg=A.aaL(A.ach.ADC);break;case 1:{Azg=A.
aaL(A.ach.AvG);this.Yz.Cv(0);}break;case 2:{Azg=A.aaL(A.ach.AvG);this.Yz.Cv(1);}
break;case 3:{Azg=A.aaL(A.ach.AvG);this.Yz.Cv(2);}break;default:A.ab5("%s%e",Btf
,AfW);}this.Yz.Ax(Azg);},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Yz={I:this},0);this.__proto__=C.XS;this.BT.H(Btg);this.Yz.H(AHX);
this.Yz.L(A.jb.Text);this.J(this.Yz,0);this.Hw.Ax(A.aaL(A.ach.AvF));this.Yz.Ax(A.
aaL(A.ach.ADC));},_Done:function(){this.__proto__=C.IG;this.Yz._Done();C.IG._Done.
call(this);},_ReInit:function(){C.IG._ReInit.call(this);this.Yz._ReInit();},_Mark:
function(D){var B;C.IG._Mark.call(this,D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaW={Jo:0,XU:null,K_:0
,Bl:function(aSize){C.IG.Bl.call(this,aSize);this.XU.H(this.Hw.M);},Ai:function(
Ae){C.IG.Ai.call(this,Ae);this.XU.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj7(this.K_)){this.T(A.aaR(A.acf.AnimalLoss));this.Hw.Z(false);this.XU.Z(true);
}else if(this.Jo>0){this.T(A._GetAutoObject(A.Device.Converter).Rj(this.Jo));this.
Hw.Z(true);this.XU.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hw.Z(true);this.
XU.Z(false);}},Ch:function(G){C.IG.Ch.call(this,G);this.Jo=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K_=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IG._Init.call(this,aArg);A.acg.Text._Init.call(this.XU={
I:this},0);this.__proto__=C.AaW;this.XU.R(BaP);this.J(this.XU,0);this.Hw.Ax(A.aaL(
A.ach.AvK));this.XU.S(A.aaL(A.fl.H2));},_Done:function(){this.__proto__=C.IG;this.
XU._Done();C.IG._Done.call(this);},_ReInit:function(){C.IG._ReInit.call(this);this.
XU._ReInit();},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((B=this.XU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMz={XW:null,Init:function(aArg){var B;A.zX([this,this.AAE],[B=A._GetAutoObject(
A.Device.Device),B.AED,B.AIS],0);A.pe([this,this.AAE],this);},DE:function(G){var
D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Op(this);break;
case 7:this.MZ(this);break;default:D5.NL=true;}},CC:function(G){var B;this.XW.CC(
this);C.AB.CC.call(this,G);},E4:function(G){var B;this.XW.E4(this);C.AB.E4.call(
this,G);},Anp:function(G){A._GetAutoObject(C.A8).FB();},Adw:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},MZ:function(G){if(A._GetAutoObject(A.Device.
Device).An.B9()<=1)return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;
if(LC>=A._GetAutoObject(A.Device.Device).An.B9())LC=0;A._GetAutoObject(A.Device.
Helper).G8(LC);},Op:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)
return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(
A.Device.Device).An.B9()-1;A._GetAutoObject(A.Device.Helper).G8(LC);},AAE:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqq)A._GetAutoObject(C.A8).Ab9(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XW._Init.call(this.XW={I:this},0);this.
__proto__=C.AMz;this.Background.H(Ce);this.N.Z(true);this.N.OQ(true);this.N.OR(true
);this.Dr(C.APu);this.XW.H(Ff);this.J(this.XW,0);this.N.CE=[this,this.Anp];this.
N.Cf=[this,this.Adw];this.N.C1(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XW._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XW._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XW)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IG={Hw:null,BT:null
,T:function(E){C.I4.T.call(this,E);this.BT.R(this.DK);},Df:function(E){C.I4.Df.call(
this,E);this.Hw.L(E);this.BT.L(E);},_Init:function(aArg){C.I4._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hw={I:this},0);C.CG._Init.call(this.BT={I:this},0);this.
__proto__=C.IG;this.Hw.H(Bth);this.Hw.L(A.jb.Text);this.BT.H(Bti);this.BT.A6(0x11
);this.BT.L(A.jb.Text);this.J(this.Hw,0);this.J(this.BT,0);this.Hw.Ax(A.aaL(A.aci.
TO));this.BT.S(A.aaL(A.fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I4;this.Hw._Done();this.BT._Done();C.I4._Done.call(this);},_ReInit:function(
){C.I4._ReInit.call(this);this.Hw._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I4._Mark.call(this
,D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I4={Background:null
,KT:0,Hl:false,CP:function(){this.Ch(this);},Init:function(aArg){var B;A.zX([this
,this.BbT],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.pe([this,
this.BbT],this);},Bl:function(aSize){C.Hi.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hi.Ai.call(this,Ae);if(this.
Hl)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Ch:function(G){}
,BbT:function(s){this.Ch(s);},Bi:function(E){if(this.Hl===E)return;this.Hl=E;this.
Am();},Df:function(E){if(this.KT===E)return;this.KT=E;},_Init:function(aArg){C.Hi.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.I4;this.H(BD);this.Background.H(AIv);this.KT=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);C.Hi._Done.call(this);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NI={G3:null,BBE:function(G){this.BT.H(A.abN(this.BT.M,this.G3.M[0]));},_Init:
function(aArg){C.FA._Init.call(this,aArg);A.acg.Text._Init.call(this.G3={I:this}
,0);this.__proto__=C.NI;this.G3.A0(0xA);this.G3.H(Btj);this.G3.Hn(5);this.G3.Ja(
true);this.G3.A6(0x14);this.G3.R(A.jV);this.G3.L(A.jb.Text);this.J(this.G3,0);this.
G3.Q7([this,this.BBE]);this.G3.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.FA;this.G3._Done();C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(
this);this.G3._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FA.
_Mark.call(this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axn={ARi:null,_Init:function(aArg){C.ZB._Init.call(this,aArg);this.__proto__=
C.Axn;},_Mark:function(D){var B;C.ZB._Mark.call(this,D);if((B=this.ARi)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANH={WA:null,WW:0,AwP:function(E){C.AmH.AwP.call(this,E);if(E)this.Ps.R(Btk);
else this.Ps.R(BaR);},BnE:function(E){if(A.aaZ(this.WA,E))return;if(!!this.WA)A.
z$([this,this.A3B],this.WA,0);this.WA=E;if(!!E)A.zX([this,this.A3B],E,0);if(!!E)
A.pe([this,this.A3B],this);},AFS:function(E){var F;if(this.WW===E)return;this.WW=
E;this.AwP(!!this.WA&&((F=this.WA,F[1].call(F[0]))===E));},A3B:function(G){var F;
this.AwP(!!this.WA&&((F=this.WA,F[1].call(F[0]))===this.WW));},_Init:function(aArg
){C.AmH._Init.call(this,aArg);this.__proto__=C.ANH;this.Ps.R(BaR);this.Ps.S(A.aaL(
A.fl.H2));},_Mark:function(D){var B;C.AmH._Mark.call(this,D);if((B=this.WA)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axp={WA:null,WW:0,_Init:function(aArg){C.ZB._Init.call(this,aArg);this.__proto__=
C.Axp;},_Mark:function(D){var B;C.ZB._Mark.call(this,D);if((B=this.WA)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUb={GP:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Rb._Init.call(
this.GP={I:this},0);this.__proto__=C.AUb;var B;this.Jb(A.aaR(A.acf.ACO));this.GP.
H(Ah1);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGi));this.GP.Ar2(
false);this.GP.A_z(true);this.J(this.GP,0);this.GP.Ab0([B=this.GP,B.FV]);this.GP.
Gs([this,this.D_,this.GS]);this.GP.AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(
A.Device.Device),B.ASQ,B.A0u]);},_Done:function(){this.__proto__=C.Cg;this.GP._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.GP._ReInit(
);this.Jb(A.aaR(A.acf.ACO));this.GP.T(A.aaR(A.acf.AGi));},_Mark:function(D){var B;
C.Cg._Mark.call(this,D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.AT$={GI:0,C8:null,AW:null,Ks:null,Fa:null
,GermanStateToString:null,CountryToString:null,Pz:0,La:0,Mb:false,Init:function(
aArg){A.zX([this,this.ML],[this,this.SE,this.Lp],0);A.zX([this,this.ML],[this,this.
Ans,this.Ahu],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.AW.FO(this.LS);this.
Ks.FO(this.LS);this.Fa.CU(this.LS);},DJ:function(G){var F;if(!this.N)return;switch(
this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=
this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[
1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[
0])).CR(this.CountryToString.BS(this.La));(F=this.N,F[1].call(F[0])).B$=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0]
)).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(
F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CR((A.aaR(A.acf.EN
)+Aye)+this.GermanStateToString.Lv(A._GetAutoObject(A.Device.Converter).ACZ(this.
Pz)));(F=this.N,F[1].call(F[0])).B$=null;}break;default:{(F=this.N,F[1].call(F[0
])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}}}
,Ex:function(EO){var Tp=this.A_;if(EO<0)EO=0;else if(EO>this.RK)EO=this.RK;switch(
EO){case 0:{this.Bb(null);if(!this.GI&&!this.Pz)this.Lp(0);}break;case 1:this.Bb(
this.Fa);break;case 2:this.Bb(this.Ks);break;case 3:if(((Tp===2)&&!this.Pz)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Tp>0))this.AW.SQ(2);else this.AW.SQ(
7);}break;default:throw new Error(Atm+EO.toFixed());}this.A_=EO;C.El.Ex.call(this
,EO);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mb=true;this.SG(A._GetAutoObject(
A.Device.Helper).VY(E,0,10));this.Ahu(A._GetAutoObject(A.Device.Helper).VY(E,10,
2)|0);this.Lp(A._GetAutoObject(A.Device.Converter).S3(E));this.Mb=false;if(!!this.
AM){this.Ks.Kv(2);this.AW.Kv(10);}else{this.Ks.Kv(0);this.AW.Kv(0);}this.Am();},
FV:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).AC$());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RK);},AjO:function(){return this.GI;
},AjQ:function(){return 9999999999;},Lp:function(E){if(this.La===E)return;this.La=
E;if(this.Mb===false)A.pe([this,this.Vp],this);A.abo([this,this.SE,this.Lp],0);}
,SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Mb===false)A.pe([this,this.
Vp],this);A.abo([this,this.AbX,this.SG],0);},Vp:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqz(this.La),3,10)+A.abl(this.Pz,2,10))+
A.abm(this.GI,10,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahu:function(
E){if(this.Pz===E)return;this.Pz=E;if(this.Mb===false)A.pe([this,this.Vp],this);
A.abo([this,this.Ans,this.Ahu],0);},SE:function(){return this.La;},AbX:function(
){return this.GI;},Ans:function(){return this.Pz;},_Init:function(aArg){C.El._Init.
call(this,aArg);C.C8._Init.call(this.C8={I:this},0);C.ARc._Init.call(this.AW={I:
this},0);C.AvS._Init.call(this.Ks={I:this},0);C.AsJ._Init.call(this.Fa={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AT$;var B;this.RK=3;this.AW.H(Btl);this.Ks.H(Btm);this.Ks.EV(16);this.Fa.H(BaS
);this.J(this.AW,0);this.J(this.Ks,0);this.J(this.Fa,0);this.C8.AE_([this,this.SE
,this.Lp]);this.AW.Au([this,this.AbX,this.SG]);this.Ks.Au([this,this.Ans,this.Ahu
]);this.Fa.CK(this.C8);this.Fa.Au([B=this.C8,B.B_,B.Cb]);this.Init(aArg);},_Done:
function(){this.__proto__=C.El;this.C8._Done();this.AW._Done();this.Ks._Done();this.
Fa._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.El._Done.
call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C8._ReInit();this.AW.
_ReInit();this.Ks._ReInit();this.Fa._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ks)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.ARc={NO:null,NN:null,ET:null,FZ:null,Eq:null,Dy:null,CV:null,Cu:null,FO:function(
E){if(this.M9===E)return;C.Lg.FO.call(this,E);this.Cu.CU(E);this.CV.CU(E);this.Dy.
CU(E);this.Eq.CU(E);this.FZ.CU(E);this.ET.CU(E);this.NN.CU(E);this.NO.CU(E);},Ys:
function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Cu;break;case 2:B5=this.CV;break;case 3:B5=this.Dy;break;case 4:B5=this.Eq;break;
case 5:B5=this.FZ;break;case 6:B5=this.ET;break;case 7:B5=this.NN;break;case 8:B5=
this.NO;break;case 9:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},_Init:
function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(this.NO={I:this},0);C.
DF._Init.call(this.NN={I:this},0);C.DF._Init.call(this.ET={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CV={I:this},0);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ARc;this.H(Btn);this.G2.H(AIJ);this.NO.H(AyF);this.NN.H(AZ6
);this.ET.H(AZ7);this.FZ.H(AZ8);this.Eq.H(AZ9);this.Dy.H(AZ_);this.CV.H(AZ$);this.
Cu.H(BaC);this.F0.H(A0a);this.EM.H(A0a);this.J(this.NO,-2);this.J(this.NN,-2);this.
J(this.ET,-2);this.J(this.FZ,-2);this.J(this.Eq,-2);this.J(this.Dy,-2);this.J(this.
CV,-2);this.J(this.Cu,-2);this.NO.Dj=[this,this.GX];this.NN.Dj=[this,this.GX];this.
ET.Dj=[this,this.GX];this.FZ.Dj=[this,this.GX];this.Eq.Dj=[this,this.GX];this.Dy.
Dj=[this,this.GX];this.CV.Dj=[this,this.GX];this.Cu.Dj=[this,this.GX];},_Done:function(
){this.__proto__=C.Lg;this.NO._Done();this.NN._Done();this.ET._Done();this.FZ._Done(
);this.Eq._Done();this.Dy._Done();this.CV._Done();this.Cu._Done();C.Lg._Done.call(
this);},_ReInit:function(){C.Lg._ReInit.call(this);this.NO._ReInit();this.NN._ReInit(
);this.ET._ReInit();this.FZ._ReInit();this.Eq._ReInit();this.Dy._ReInit();this.CV.
_ReInit();this.Cu._ReInit();},_Mark:function(D){var B;C.Lg._Mark.call(this,D);if((
B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cu
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUa={
GI:0,C8:null,AW:null,Fa:null,CountryToString:null,La:0,Mb:false,Init:function(aArg
){A.zX([this,this.ML],[this,this.SE,this.Lp],0);},Ai:function(Ae){C.El.Ai.call(this
,Ae);this.AW.FO(this.LS);this.Fa.CU(this.LS);},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CR(this.CountryToString.BS(this.La));(F=this.N,F[1].call(F[0])).B$=null;}
break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(
F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=
this.N,F[1].call(F[0])).B$=null;}}},Ex:function(EO){var Tp=this.A_;if(EO<0)EO=0;
else if(EO>this.RK)EO=this.RK;switch(EO){case 0:{this.Bb(null);if(!this.GI)this.
Lp(0);}break;case 1:this.Bb(this.Fa);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Tp>0))this.AW.SQ(2);else this.AW.SQ(7);}break;default:throw new Error(Atm+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,EO);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.Mb=true;this.SG(A._GetAutoObject(A.Device.Helper).VY(E,0,12));this.Lp(
A._GetAutoObject(A.Device.Converter).S3(E));this.Mb=false;if(!!this.AM)this.AW.Kv(
12);else this.AW.Kv(0);this.Am();},FV:function(G){var F;if(!this.AM){var BO=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).AC$());if(this.AM!==BO){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RK);},AjO:function(
){return this.GI;},AjQ:function(){return 999999999999;},Lp:function(E){if(this.La===
E)return;this.La=E;if(this.Mb===false)A.pe([this,this.Vp],this);A.abo([this,this.
SE,this.Lp],0);},SG:function(E){if(this.GI===E)return;this.GI=E;if(this.Mb===false
)A.pe([this,this.Vp],this);A.abo([this,this.AbX,this.SG],0);},Vp:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.La),3,10)+A.abm(
this.GI,12,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SE:function(){return this.
La;},AbX:function(){return this.GI;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C8._Init.call(this.C8={I:this},0);C.ADU._Init.call(this.AW={I:this},0);C.AsJ.
_Init.call(this.Fa={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUa;var B;this.RK=2;this.AW.H(Bto);this.Fa.H(BaS);this.
J(this.AW,0);this.J(this.Fa,0);this.C8.AE_([this,this.SE,this.Lp]);this.AW.Au([this
,this.AbX,this.SG]);this.Fa.CK(this.C8);this.Fa.Au([B=this.C8,B.B_,B.Cb]);this.Init(
aArg);},_Done:function(){this.__proto__=C.El;this.C8._Done();this.AW._Done();this.
Fa._Done();this.CountryToString._Done();C.El._Done.call(this);},_ReInit:function(
){C.El._ReInit.call(this);this.C8._ReInit();this.AW._ReInit();this.Fa._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,Ya:null,Yb:null,X$:null,X9:null,X_:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Asr();},Ih:function(G){
var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Ya)A._GetAutoObject(
C.A8).Cd(28);else if(Cy===this.Yb)A._GetAutoObject(C.A8).Cd(26);else if(Cy===this.
X$)A._GetAutoObject(C.A8).Cd(54);else if(Cy===this.X9)A._GetAutoObject(C.A8).Cd(
27);else if(Cy===this.X_)A._GetAutoObject(C.A8).Cd(78);},A3F:function(G){A._GetAutoObject(
C.A8).FB();},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.
MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fo._Init.call(this.Ya={I:this
},0);C.Fo._Init.call(this.Yb={I:this},0);C.Fo._Init.call(this.X$={I:this},0);C.Fo.
_Init.call(this.X9={I:this},0);C.Fo._Init.call(this.X_={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CT);this.N.Z(true);this.N.CR(A.jV);this.Ek.Ar(false
);this.Dr(C.Aq0);this.DY.A0(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);
this.Y.JV(9);this.Ay.H(It);this.Ya.H(Qa);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.
A74));this.Yb.H(A0g);this.Yb.Aj(true);this.Yb.T(A.aaR(A.acf.NewAnimals));this.X$.
H(Oc);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.Calving));this.X9.H(Qb);this.X9.Aj(
true);this.X9.T(A.aaR(A.acf.AB7));this.X_.H(MJ);this.X_.Aj(true);this.X_.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Ya,0);this.J(this.Yb,0);this.J(this.X$,0);this.J(this.X9,0);this.J(this.X_,0);this.
N.CE=[this,this.A3F];this.N.C1(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];this.Ya.
AR=[this,this.Ih];this.Ya.DB(A.aaL(A.ach.ADN));this.Yb.AR=[this,this.Ih];this.Yb.
DB(A.aaL(A.ach.AvO));this.X$.AR=[this,this.Ih];this.X$.DB(A.aaL(A.ach.AP9));this.
X9.AR=[this,this.Ih];this.X9.DB(A.aaL(A.ach.AP4));this.X_.AR=[this,this.Ih];this.
X_.DB(A.aaL(A.ach.APX));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.Ya._Done();this.Yb._Done();this.X$._Done();this.X9.
_Done();this.X_._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Ya._ReInit(
);this.Yb._ReInit();this.X$._ReInit();this.X9._ReInit();this.X_._ReInit();this.Ya.
T(A.aaR(A.acf.A74));this.Yb.T(A.aaR(A.acf.NewAnimals));this.X$.T(A.aaR(A.acf.Calving
));this.X9.T(A.aaR(A.acf.AB7));this.X_.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.AR9={K5:null,EaseOfDelivery:null,BirthType:null,AcK:null
,Lk:null,Cn:null,G7:null,Li:null,AzP:true,Init:function(aArg){this.Bb(this.Da);A.
pe([this,this.GH],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E6();A._GetAutoObject(C.A8).FB();if(!!this.K5)this.K5.Ew(this);},Agh:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwQ(true);if(!!this.K5)this.K5.Agh(this
);if(A._GetAutoObject(A.Device.Device).An.Lh())A._GetAutoObject(A.Device.Helper).
AKn(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApH]);else{this.Ai1();A.
pe([this,this.Ap5],this);}},Auo:function(){this.N.CR(A.jV);this.N.C2(A.aaL(A.ach.
ADR));this.N.B$=[this,this.AyV];},CC:function(G){var B;C.HZ.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lh()){A._GetAutoObject(A.Device.Device).A3(41
,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),0,null);this.Ew(this);
}else if(this.AzP){this.AzP=false;A.pe([this,this.A3U],this);}else if(!this.K5){
this.K5=A._NewObject(C.AR_,0);this.K5.A95([this,this.AA2]);A._GetAutoObject(A.Device.
Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nl(this.AsV.Ael(6));this.K5.LO(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},Ai1:function(
){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var
L9=A._GetAutoObject(A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SR(L9);if(A._GetAutoObject(A.Device.Helper
).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.
Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KK);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A69(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap5:function(G){var B;if(!!this.K5)this.K5.Ap5(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am6())this.C_.Z(true);else this.C_.Z(false);},
ApH:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",Ata,As.Id);}},AA2:function(G){this.
LO(this);this.AeY(A._GetAutoObject(A.Device.Helper).Abq(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JJ(this.Da);},ApI:function(G){var F;C.HZ.ApI.call(this
,G);(F=this.C_.Q,F[2].call(F[0],this.C_.AnY));},A3U:function(G){A._GetAutoObject(
C.A8).Cd(79);},_Init:function(aArg){C.HZ._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcK._Init.call(this.AcK={I:this},0);C.Rb._Init.call(this.Lk={I:this
},0);C.SS._Init.call(this.Cn={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.BW.
_Init.call(this.Li={I:this},0);this.__proto__=C.AR9;var B;this.Dr(C.APr);this.Lk.
H(Ah1);this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACv));this.CH.H(AcR);this.Cn.H(AcR
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFK(true);this.G7.H(AcR);
this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Arq));this.Li.H(AcR);this.Li.Aj(true);this.
Li.T(A.aaR(A.acf.AgK));this.J(this.Lk,-5);this.J(this.Cn,-3);this.J(this.G7,-1);
this.J(this.Li,-1);this.EaseOfDelivery.L0(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.L0(A._GetAutoObject(A.Device.Helper).W);this.AcK.L0(A._GetAutoObject(A.
Device.Helper).W);this.Lk.Gs([this,this.D_,this.GS]);this.Lk.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ASM,B.AnF]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.LZ([
B=this.Cn,B.FV]);this.Cn.L2(A.aaL(A.ach.Edit));this.Cn.Ab6([B=A._GetAutoObject(A.
Device.Helper).W,B.Awe,B.Q6]);this.Gn.Au([B=this.AcK,B.B_,B.Cb]);this.Gn.CK(this.
AcK);this.G7.Au([B=this.BirthType,B.B_,B.Cb]);this.G7.CK(this.BirthType);this.Li.
Au([B=this.EaseOfDelivery,B.B_,B.Cb]);this.Li.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HZ;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcK._Done();this.Lk._Done();this.Cn._Done();this.G7._Done();this.Li.
_Done();C.HZ._Done.call(this);},_ReInit:function(){C.HZ._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcK._ReInit();this.Lk._ReInit(
);this.Cn._ReInit();this.G7._ReInit();this.Li._ReInit();this.Lk.T(A.aaR(A.acf.ACv
));this.Cn.T(A.aaR(A.acf.Aeg));this.G7.T(A.aaR(A.acf.Arq));this.Li.T(A.aaR(A.acf.
AgK));},_Mark:function(D){var B;C.HZ._Mark.call(this,D);if((B=this.K5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMB={Init:function(aArg){var B;A.zX([this,this.ALq],[B=A._GetAutoObject(A.Device.
Device),B.AEK,B.AIX],0);A.pe([this,this.ALq],this);},AKT:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbT){case 0:Be=A._GetAutoObject(A.Device.
Helper).AC2();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOL();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mt();break;default:throw new Error(A0j+A.
_GetAutoObject(A.Device.Device).AbT.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},ALq:function(G){switch(A._GetAutoObject(A.Device.Device).AbT){case
0:this.Dk(A.aaR(A.acf.ASd));break;case 1:this.Dk(A.aaR(A.acf.BkF));break;case 2:
this.Dk(A.aaR(A.acf.Av8));break;default:A.ab5("%s",A0j+A._GetAutoObject(A.Device.
Device).AbT.toFixed());}},_Init:function(aArg){C.Amx._Init.call(this,aArg);this.
__proto__=C.AMB;this.Bnw(C.APH);this.Ek.Ab2(A._NewObject(C.APw,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.AR_={AAm:0,Adj:null
,Au3:null,Bev:0,A38:0,A21:0,Init:function(aArg){this.Bev=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adj=A._GetAutoObject(A.Device.Device).An.Filter;this.AAm=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A21=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LO:function(G){A._GetAutoObject(A.Device.Helper).W.AnF(this.AAm);A._GetAutoObject(
A.Device.Helper).W.Ae6(true);switch(this.A21){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AZ3,this.A21);}},Ew:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adj);if(!!this.A38)this.Bg6();},Agh:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bg6:function(){var At3=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LT(0,this.Bev);At3.E3(Ad,A._GetAutoObject(
A.Device.Device).An);At3.AwC(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At3.
ArV(false);At3.AwR(At3.LactationNumber+1);At3.Ci(A._GetAutoObject(A.Device.Device
).An);},Ap5:function(G){this.A38++;var ByL=A._GetAutoObject(A.Device.Converter).
BhO(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A38<ByL)&&(A._GetAutoObject(
A.Device.Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A3(59,true,A.jV,0,[this,this.Vk]);else this.Bds(
this);},Vk:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&(As.PopupState===8))this.Bds(this);else if(!!As&&(As.PopupState===7))this.
AA2(this);},AA2:function(G){var B;var Ic=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Pb=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJ2=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Au3)(B=this.Au3
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(Ic);A._GetAutoObject(
A.Device.Helper).W.Akw(AfW);A._GetAutoObject(A.Device.Helper).W.N2(Bv);A._GetAutoObject(
A.Device.Helper).W.Q6(Pb);A._GetAutoObject(A.Device.Helper).W.Aky(AJ2);},Bds:function(
G){this.Bg6();A._GetAutoObject(C.A8).FB();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adj);},A95:function(E){if(A.aa0(this.Au3,E))return;this.Au3=E;},_Init:function(
aArg){this.__proto__=C.AR_;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adj)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMR={Init:function(aArg){
var B;A.zX([this,this.BeS],[B=A._GetAutoObject(A.Device.Device),B.ASw,B.A0k],0);
this.BeS(this);},Ci:function(){A.ab5("%s",Btp);},E3:function(AcX){C.Vy.E3.call(this
,AcX);var O;for(O=16;O>0;O--)this.Ib.Set(O,this.Ib.Get(O-1));this.Ib.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Btq);},ADY:function(Eh){switch(Eh){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},BeS:
function(G){this.E3(A._GetAutoObject(A.Device.Device).AuH);A.we(this,0);},_Init:
function(aArg){C.Vy._Init.call(this,aArg);this.__proto__=C.AMR;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuV={_Init:function(){C.
AMR._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JM={C7:null,V:null,A7X:true,T:function(E){C.I4.T.call(this,E);this.
V.R(E);},Df:function(E){C.I4.Df.call(this,E);this.V.L(E);},BnB:function(E){if(this.
A7X===E)return;this.A7X=E;this.C7.Z(E);},_Init:function(aArg){C.I4._Init.call(this
,aArg);A.acg.C7._Init.call(this.C7={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JM;this.C7.DC(Btr);this.C7.DM(Bts);this.C7.L(A.jb.Bc);this.V.
A0(0x3F);this.V.H(Btt);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C7,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kp));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I4;this.C7._Done();this.V._Done();C.
I4._Done.call(this);},_ReInit:function(){C.I4._ReInit.call(this);this.C7._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kp));this.V.AZ(A.aaL(A.fl.HJ));this.V.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I4._Mark.call(this,D);if((B=this.C7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APw={AgY:null,De:null,Abo:null,Fm:null,Fb:
null,Init:function(aArg){var B;A.zX([this,this.A4K],[B=A._GetAutoObject(A.Device.
Device),B.AEK,B.AIX],0);A.pe([this,this.A4K],this);},Df:function(E){C.Yv.Df.call(
this,E);this.De.L(E);},AEQ:function(G){A.pe([this,this.A4K],this);},AA4:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Np(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C4:function(G){var B;var F;C.Yv.C4.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.De.Ax(A.aaL(A.ach.AjW));return;}var Bzr=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var Bb4=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!Bzr)this.De.Ax(A.aaL(A.ach.ADf));else if(
!!Bb4&&(Bb4.A5===1))this.De.Ax(A.aaL(A.ach.AP$));else this.De.Ax(A.aaL(A.ach.AjW
));},A4K:function(G){var F;var Filter=null;var AOz;switch(A._GetAutoObject(A.Device.
Device).AbT){case 0:Filter=A._GetAutoObject(A.Device.Helper).AC2();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOL();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mt();break;default:throw new Error(A0j+A._GetAutoObject(A.Device.
Device).AbT.toFixed());}var Ai5=this.Akq();if(Ai5>0){AOz=A._NewObject(A.Device.Int32FilterCriterion
,0);AOz.Initialize(1,4,Ai5,false);Filter.CW(AOz);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeZ(false);},Op:function(G){if(!this.Akq())this.AW.AeZ(true
);this.Bb(this.AW);this.Am();},MZ:function(G){this.AW.AeZ(false);this.Bb(this.AgY
);this.Am();},_Init:function(aArg){C.Yv._Init.call(this,aArg);C.Arb._Init.call(this.
AgY={I:this},0);A.acg.Ap._Init.call(this.De={I:this},0);C.Abo._Init.call(this.Abo={
I:this},0);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fb={
I:this},0);this.__proto__=C.APw;var B;this.H(Btu);this.AW.H(Btv);this.T6.H(Btw);
this.Gw.Z(false);this.AgY.H(Btx);this.De.H(Bty);this.Abo.Au(A._GetAutoObject(A.Device.
Device).AbT);this.Fm.Filter=6;this.Fb.Filter=7;this.J1(this.A$,-1);this.J(this.AgY
,-1);this.J(this.De,-1);this.AgY.CK(this.Abo);this.AgY.Au([B=this.Abo,B.B_,B.Cb]
);this.De.Ax(A.aaL(A.ach.AjW));this.Fm.BL=[this,this.Op];this.Fb.BL=[this,this.MZ
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yv;this.AgY._Done();this.De.
_Done();this.Abo._Done();this.Fm._Done();this.Fb._Done();C.Yv._Done.call(this);}
,_ReInit:function(){C.Yv._ReInit.call(this);this.AgY._ReInit();this.De._ReInit();
this.Abo._ReInit();this.Fm._ReInit();this.Fb._ReInit();},_Mark:function(D){var B;
C.Yv._Mark.call(this,D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abo={AeU:null
,Init:function(aArg){var B;A.zX([this,this.Bex],[B=A._GetAutoObject(A.Device.Device
),B.AEK,B.AIX],0);A.pe([this,this.Bex],this);},Du:function(){return 3;},Au:function(
E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwY(E);},AC1:function(
aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.AeU.AsK(aIndex
);},AC3:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return this.
AeU.AsL(aIndex);},Bex:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbT;A.
abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeU._Init.call(this.AeU={I:this},0);this.__proto__=C.Abo;this.Ca.Set(0,
0);this.Ca.Set(1,1);this.Ca.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeU._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeU._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APH={Es:null,IP:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.Es={I:this},0);A.acg.Text._Init.call(this.IP={I:this},0);this.__proto__=
C.APH;this.H(O6);this.Background.H(O6);this.Es.H(AIw);this.Es.R(A.aaR(A.acf.A7d)
);this.Es.A6(0x12);this.Es.L(A.jb.Text);this.IP.A0(0x3F);this.IP.H(AIx);this.IP.
Hn(5);this.IP.A6(0x14);this.IP.R(A.aaR(A.acf.AGW));this.IP.L(A.jb.Text);this.J(this.
Es,0);this.J(this.IP,0);this.Es.S(A.aaL(A.fl.Af));this.Es.AZ(A.aaL(A.fl.HJ));this.
Es.Cr(A.aaL(A.fl.Bh));this.IP.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Es._Done();this.IP._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Es._ReInit();this.IP._ReInit();this.Es.R(A.aaR(A.acf.
A7d));this.IP.R(A.aaR(A.acf.AGW));this.Es.S(A.aaL(A.fl.Af));this.Es.AZ(A.aaL(A.fl.
HJ));this.Es.Cr(A.aaL(A.fl.Bh));this.IP.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J4:null,BgD:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bfh(this);else A._GetAutoObject(A.Device.Device).A3(63,true,A.
jV,0,[this,this.Vk]);},Bfh:function(G){A._GetAutoObject(C.A8).FB();},Vk:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63)
)&&(As.PopupState===7))this.Bfh(this);},_Init:function(aArg){C.Mi._Init.call(this
,aArg);A.acg.Text._Init.call(this.J4={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APv);this.Jh.H(Btz);this.Jh.AkG(2);this.Acy.Z(false);this.ARP=12;this.
Number.H(BtA);this.Number.R(A.aaR(A.acf.A$z));this.A5e=false;this.J4.H(BtB);this.
J4.Hn(5);this.J4.KS(true);this.J4.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABN));this.J4.L(A.jb.Text);this.J1(this.Jh,-1);this.J1(this.IU,-1);this.
J1(this.Acy,-1);this.J(this.J4,0);this.J4.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mi;this.J4._Done();C.Mi._Done.call(this);},_ReInit:function(){C.Mi._ReInit.
call(this);this.J4._ReInit();this.Number.R(A.aaR(A.acf.A$z));this.J4.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABN));this.J4.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mi._Mark.call(this,D);if((B=this.J4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APv={_Init:function(aArg){C.AqZ.
_Init.call(this,aArg);this.__proto__=C.APv;this.DS.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Jh={AbK:null,AbJ:null,AbI:null,QI:null,CountryToString:null,AsN:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QI.R(this.CountryToString.
Lv(A._GetAutoObject(A.Device.Converter).A7B(A._GetAutoObject(A.Device.Device).Language
))+BtC);},AkG:function(E){if(this.AsN===E)return;this.AsN=E;var bitmap=null;var A15=
BtD;var A14=null;var A16=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq$);break;case
1:{bitmap=A.aaL(A.ach.AQO);A15=BtE;A14=A.aaL(A.fl.Ak);A16=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQP);A15=BtF;A14=A.aaL(A.fl.Bh);A16=true;}break;default:throw new Error(
BtG+E.toFixed());}this.AbI.Ax(bitmap);this.AbJ.Ax(bitmap);this.AbK.Ax(bitmap);this.
QI.H(A.abJ(this.QI.M,A15));this.QI.S(A14);this.QI.Z(A16);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbK={I:this},0);A.acg.Ap._Init.call(this.AbJ={I:this},0);A.acg.Ap._Init.
call(this.AbI={I:this},0);A.acg.Text._Init.call(this.QI={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jh;this.H(AIM);this.
AbK.A0(0x3);this.AbK.H(AIM);this.AbK.L(A.jb.H9);this.AbK.Cv(2);this.AbJ.A0(0x3);
this.AbJ.H(AIM);this.AbJ.L(A.jb.Aeb);this.AbJ.Cv(1);this.AbI.A0(0x3);this.AbI.H(
AIM);this.AbI.L(A.jb.Text);this.AbI.Cv(0);this.QI.A0(0x14);this.QI.H(BtH);this.QI.
L(0xFF020202);this.QI.Z(false);this.J(this.AbK,0);this.J(this.AbJ,0);this.J(this.
AbI,0);this.J(this.QI,0);this.AbK.Ax(A.aaL(A.ach.Aq$));this.AbJ.Ax(A.aaL(A.ach.Aq$
));this.AbI.Ax(A.aaL(A.ach.Aq$));this.QI.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbK._Done();this.AbJ._Done();this.AbI._Done();this.QI._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbK._ReInit();this.AbJ._ReInit();this.AbI._ReInit(
);this.QI._ReInit();this.CountryToString._ReInit();this.QI.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsN={Transponder:0,BGx:1,BGy:2};C.APr={Ap:null,Df:function(E){C.BQ.Df.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APr;this.Ap.H(AZ4);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APi));},_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.
BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ii:0,AaE:4,Al6:function(G){C.Ra.Al6.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bd4()){this.Ii=A._GetAutoObject(A.Device.Helper).UA.Id;var AiA=A._GetAutoObject(
A.Device.Helper).A7z(this.Ii,A._GetAutoObject(A.Device.Helper).W);if(AiA){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rj(this.Ii),0,[
this,this.Vk]);return;}AiA=A._GetAutoObject(A.Device.Helper).Bj7(this.Ii,A._GetAutoObject(
A.Device.Helper).W);if(AiA&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ii)){A._GetAutoObject(A.Device.Device).A3(25,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Ii),0,[this,this.Vk]);return;}this.AaE=A._GetAutoObject(A.Device.
Helper).ARp(this.Ii);switch(this.AaE){case 0:A._GetAutoObject(A.Device.Device).A3(
45,true,this.Ii.toFixed().length.toFixed(),0,[this,this.Vk]);break;case 1:case 2:{
var BM=A._GetAutoObject(A.Device.Converter).AxV(this.Ii);A._GetAutoObject(A.Device.
Device).A3(46,true,BM.toFixed(),0,[this,this.Vk]);}break;case 3:this.Bgv();break;
default:throw new Error(AIk+this.AaE.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A8).FB();},Vk:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.AaE===2)this.Bgv();else A._GetAutoObject(
A.Device.Device).AhM();break;case 5:this.Ew(this);break;default:;}},Bgv:function(
){A._GetAutoObject(A.Device.Helper).W.Nj(this.Ii);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PW(this.Ii);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A3(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.IL);this.Number.R(A.aaR(A.acf.A$t
));this.Jh.H(BtI);this.IU.H(BtJ);this.AkG(1);this.N.CE=[this,this.Ew];this.N.C1(
A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$t));},_className:"Application::SetSaveNaisIdScreen"};C.AN6={LO:function(
G){C.AqI.LO.call(this,G);A.pe([this,this.BCf],this);},BCf:function(G){this.JJ(this.
Ef);},_Init:function(aArg){C.AqI._Init.call(this,aArg);this.__proto__=C.AN6;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UQ={Animal:null,WhereAboutsToString:
null,Gl:function(aIndex){return this.WhereAboutsToString.BS(this.C6(aIndex));},Au:
function(E){C.Cm.Au.call(this,E);if(!!this.Animal)this.Animal.Nl(E);},A4S:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B_,this.Cb],0);},L0:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4S],[B=this.Animal,B.Awq,B.Nl],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4S],[B=this.Animal,B.Awq,B.Nl],0);A.pe([this,this.A4S],this);}
,_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UQ;this.Ca.Set(0,1);this.
Ca.Set(1,2);this.Ca.Set(2,3);this.Ca.Set(3,4);this.Ca.Set(4,5);},_Done:function(
){this.__proto__=C.Cm;this.WhereAboutsToString._Done();C.Cm._Done.call(this);},_ReInit:
function(){C.Cm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UR={Du:function(){return 6;},_Init:function(aArg){C.UQ._Init.call(this,aArg);
this.__proto__=C.UR;this.Ca.Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,2);this.Ca.Set(
3,3);this.Ca.Set(4,4);this.Ca.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcK={Du:function(){return 5;},_Init:function(aArg){C.UQ._Init.call(this,aArg
);this.__proto__=C.AcK;this.Ca.Set(0,6);this.Ca.Set(1,7);this.Ca.Set(2,8);this.Ca.
Set(3,9);this.Ca.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdW={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.BcN],[B=A._GetAutoObject(A.Device.
Device),B.ASx,B.A0l],0);A.pe([this,this.BcN],this);},Du:function(){return 2;},C6:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BS(aIndex);},DZ:function(A7){return A7;},H4:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awt(E);},BcN:function(G){
this.Q=A._GetAutoObject(A.Device.Device).AgA;A.abo([this,this.B_,this.Cb],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdW;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGK={FM:null
,EA:null,EartagNrAssignmentMode:null,Fm:null,Fb:null,HH:null,AW:null,Kn:null,Nc:
null,A_:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CU(A.jb.CJ);this.Background.L(A.
jb.CT);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CT);this.HH.CU(A.jb.CT);this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CU(
A.jb.CJ);}else{this.AW.FO(A.jb.CT);this.HH.CU(A.jb.CT);}this.Bb(null);}this.Nc.L(
this.V.AQ);},I1:function(G){C.Eg.I1.call(this,G);if(!this.A_)this.FV(this);else this.
He(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.
N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(
F[0])).C2(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).B$=
null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)
this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(
this.A_>1)this.A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SQ(2);else this.AW.SQ(7);}break;default:throw new Error(
Atm+this.A_.toFixed());}this.DJ(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Op:function(G){this.ABb(2);},MZ:function(G){this.ABb(7);},ABb:
function(GA){var B;var Azy=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azy){
var AAo=(A.Core.P.isPrototypeOf(B=this.QJ(Azy,GA,0x15))?B:null);if(!!AAo){this.Bb(
AAo);return true;}}return false;},Af3:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nc.Ax(
A._GetAutoObject(A.Device.Converter).AmV(2));break;case 1:this.Nc.Ax(A._GetAutoObject(
A.Device.Converter).AmV((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
BaT+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4p],this);},A4p:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kn.Ae1(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Ant,B.Aoz]);this.Kn.
Ae1([B=A._GetAutoObject(A.Device.Device),B.AEG,B.AIU]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awh
,B.AyN]);this.Kn.Ae1([B=A._GetAutoObject(A.Device.Device),B.ASC,B.A0m]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyO]);this.Kn.Ae1([B=
A._GetAutoObject(A.Device.Device),B.ASD,B.A0n]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Ant,B.Aoz]);this.Kn.Ae1([B=A._GetAutoObject(A.Device.Device),
B.AEG,B.AIU]);}break;default:throw new Error(BtK+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(BaT+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Uo:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.Af3],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af3],this.EA,0);if(!!
E)A.pe([this,this.Af3],this);},Akx:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af3],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af3],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af3],this);},Uj:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.
BK._Init.call(this.Fb={I:this},0);C.Arb._Init.call(this.HH={I:this},0);C.AvT._Init.
call(this.AW={I:this},0);C.Au7._Init.call(this.Kn={I:this},0);A.acg.Ap._Init.call(
this.Nc={I:this},0);this.__proto__=C.AGK;var B;this.H(UZ);this.V.Ar(false);this.
V.R(Atc);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fb.Filter=7;this.HH.H(BtL);this.
AW.H(BtM);this.Nc.H(BtN);this.J(this.HH,0);this.J(this.AW,0);this.J(this.Nc,0);this.
FM=A._NewObject(C.Aeu,0);this.Fm.BL=[this,this.Op];this.Fb.BL=[this,this.MZ];this.
HH.CK(this.Kn);this.HH.Au([B=this.Kn,B.B_,B.Cb]);this.AW.Au([this,this.Uj,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fb.
_Done();this.HH._Done();this.AW._Done();this.Kn._Done();this.Nc._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fm._ReInit();this.Fb.
_ReInit();this.HH._ReInit();this.AW._ReInit();this.Kn._ReInit();this.Nc._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANW={Ws:
null,Zd:null,Za:null,Ub:null,Init:function(aArg){this.Bb(this.Ws);},AEy:function(
G){var Bet=(C.Anj.isPrototypeOf(G)?G:null);if(!!Bet)A._GetAutoObject(A.Device.Device
).A3(Bet.AdE,true,A.jV,0,null);},DE:function(G){if((this.Cq.CO===7)&&(this.AV===
this.Ub))A._GetAutoObject(A.Device.Device).A3(10,true,A.jV,0,null);else if((this.
Cq.CO===6)&&(this.AV===this.Ub))A._GetAutoObject(C.A8).Cd(91);C.Ej.DE.call(this,
G);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Anj._Init.call(this.Ws={I:
this},0);C.Anj._Init.call(this.Zd={I:this},0);C.Anj._Init.call(this.Za={I:this},
0);C.Anj._Init.call(this.Ub={I:this},0);this.__proto__=C.ANW;this.Dr(C.AO8);this.
Ws.H(IW);this.Ws.Aj(true);this.Ws.T(A.aaR(A.acf.AhL));this.Ws.Bi(false);this.Ws.
AdE=79;this.Zd.H(Qd);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.A$L));this.Zd.Bi(true
);this.Zd.AdE=77;this.Za.H(Aaf);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.A6_));this.
Za.Bi(false);this.Za.AdE=78;this.Ub.H(Alh);this.Ub.Aj(true);this.Ub.T(A.aaR(A.acf.
About));this.Ub.Bi(true);this.Ub.AdE=3;this.J(this.Ws,-1);this.J(this.Zd,-1);this.
J(this.Za,-1);this.J(this.Ub,-1);this.Ws.AR=[this,this.AEy];this.Zd.AR=[this,this.
AEy];this.Za.AR=[this,this.AEy];this.Ub.AR=[this,this.AEy];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Ws._Done();this.Zd._Done();this.Za._Done();this.
Ub._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.
Ws._ReInit();this.Zd._ReInit();this.Za._ReInit();this.Ub._ReInit();this.Ws.T(A.aaR(
A.acf.AhL));this.Zd.T(A.aaR(A.acf.A$L));this.Za.T(A.aaR(A.acf.A6_));this.Ub.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.Ws
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ub)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AO8={_Init:function(aArg){C.Kq.
_Init.call(this,aArg);this.__proto__=C.AO8;this.Text.R(A.aaR(A.acf.Info));},_ReInit:
function(){C.Kq._ReInit.call(this);this.Text.R(A.aaR(A.acf.Info));},_className:"Application::HeaderDeviceInfoMenu"
};C.ANU={FactoryResetScope:null,Ue:null,Wp:null,Ug:null,Init:function(aArg){this.
Bb(this.Ue);A.pe([this,this.ML],this);},BkP:function(G){switch(this.FactoryResetScope.
C6(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A3(33,true
,A.jV,0,[this,this.A3_]);break;case 0:A._GetAutoObject(A.Device.Device).A3(7,true
,A.jV,0,[this,this.A3_]);break;case 2:A._GetAutoObject(A.Device.Device).A3(115,true
,A.jV,0,[this,this.A3_]);break;default:A.ab5("%s%i",BtO,this.FactoryResetScope.Q
);}},A3_:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.Device.Device).
BoX();A._GetAutoObject(A.Device.Device).A3(8,true,A.jV,0,null);A._GetAutoObject(
C.A8).Cd(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).BoW();A._GetAutoObject(
A.Device.Device).ArS(0);A._GetAutoObject(A.Device.Device).ArT(0);A._GetAutoObject(
A.Device.Device).ArU(0);A._GetAutoObject(A.Device.Device).ArY(0);A._GetAutoObject(
A.Device.Device).ArZ(0);A._GetAutoObject(A.Device.Device).Ar0(0);A._GetAutoObject(
A.Device.Device).Um(5);A._GetAutoObject(A.Device.Device).AwF(0);A._GetAutoObject(
A.Device.Device).AwG(0);A._GetAutoObject(A.Device.Device).AwH(0);A._GetAutoObject(
A.Device.Device).AwZ(1);A._GetAutoObject(A.Device.Device).Aw0(1);A._GetAutoObject(
A.Device.Device).Aw1(1);A._GetAutoObject(A.Device.Device).A3(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).BoV();A._GetAutoObject(A.Device.
Device).A3(116,true,A.jV,0,null);A._GetAutoObject(C.A8).Cd(37);}break;default:A.
ab5("%s%e",AIl,As.Id);}},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Nh._Init.call(this.Ue={I:this},0
);C.Nh._Init.call(this.Wp={I:this},0);C.BW._Init.call(this.Ug={I:this},0);this.__proto__=
C.ANU;var B;this.Dr(C.AO6);this.Ue.H(IW);this.Ue.Aj(true);this.Ue.T(A.aaR(A.acf.
ACx));this.Ue.Bi(false);this.Ue.Nk(93);this.Wp.H(Qd);this.Wp.Aj(true);this.Wp.T(
A.aaR(A.acf.AdV));this.Wp.Bi(true);this.Wp.Nk(92);this.Ug.H(BaU);this.Ug.Aj(true
);this.Ug.Bmb(true);this.Ug.T(A.aaR(A.acf.A6B));this.Ug.Bi(false);this.J(this.Ue
,-1);this.J(this.Wp,-1);this.J(this.Ug,-1);this.Ue.AR=[B=this.Ue,B.Nn];this.Wp.AR=[
B=this.Wp,B.Nn];this.Ug.AR=[this,this.BkP];this.Ug.Au([B=this.FactoryResetScope,
B.B_,B.Cb]);this.Ug.CK(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.FactoryResetScope._Done();this.Ue._Done();this.Wp._Done(
);this.Ug._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Ue._ReInit();this.Wp._ReInit();this.Ug._ReInit(
);this.Ue.T(A.aaR(A.acf.ACx));this.Wp.T(A.aaR(A.acf.AdV));this.Ug.T(A.aaR(A.acf.
A6B));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ue)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ug)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.AO6={_Init:function(
aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.AO6;this.Text.R(A.aaR(A.acf.ACy
));},_ReInit:function(){C.Kq._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACy));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq1={QV:null,Wf:null
,_Init:function(aArg){C.TY._Init.call(this,aArg);C.CG._Init.call(this.QV={I:this
},0);C.CG._Init.call(this.Wf={I:this},0);this.__proto__=C.Aq1;this.QV.H(BtP);this.
QV.R(A.aaR(A.acf.A$D));this.QV.A6(0x12);this.QV.L(A.jb.Text);this.Wf.H(BaO);this.
Wf.R(A.aaR(A.acf.An7));this.Wf.L(A.jb.Text);this.J(this.QV,0);this.J(this.Wf,0);
this.QV.S(A.aaL(A.fl.Af));this.QV.AZ(A.aaL(A.fl.Ak));this.QV.Cr(A.aaL(A.fl.Bh));
this.Wf.S(A.aaL(A.fl.Af));this.Wf.AZ(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.TY;this.QV._Done();this.Wf._Done();C.TY._Done.call(this);},_ReInit:function(){
C.TY._ReInit.call(this);this.QV._ReInit();this.Wf._ReInit();this.QV.R(A.aaR(A.acf.
A$D));this.Wf.R(A.aaR(A.acf.An7));this.QV.S(A.aaL(A.fl.Af));this.QV.AZ(A.aaL(A.fl.
Ak));this.QV.Cr(A.aaL(A.fl.Bh));this.Wf.S(A.aaL(A.fl.Af));this.Wf.AZ(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.TY._Mark.call(this,D);if((B=this.QV)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APC={QW:null,_Init:function(aArg){C.TY._Init.call(this,aArg);C.CG._Init.call(
this.QW={I:this},0);this.__proto__=C.APC;this.QW.H(BtQ);this.QW.R(A.aaR(A.acf.Ui
));this.QW.A6(0x12);this.QW.L(A.jb.Text);this.J(this.QW,0);this.QW.S(A.aaL(A.fl.
Af));this.QW.AZ(A.aaL(A.fl.Ak));this.QW.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.
__proto__=C.TY;this.QW._Done();C.TY._Done.call(this);},_ReInit:function(){C.TY._ReInit.
call(this);this.QW._ReInit();this.QW.R(A.aaR(A.acf.Ui));this.QW.S(A.aaL(A.fl.Af)
);this.QW.AZ(A.aaL(A.fl.Ak));this.QW.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;
C.TY._Mark.call(this,D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.Aqu={IM:null,AbB:null,Ea:null
,Bl:function(aSize){C.M6.Bl.call(this,aSize);this.IM.H([this.Gz.M[2],0,this.Gz.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([this.IM.M[2]-1,0,this.IM.M[2]+1
,aSize[1]]);this.AbB.H([this.IM.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.M6.
Ai.call(this,Ae);this.AbB.L(this.Gz.AQ);this.IM.L(this.Gz.AQ);},Ch:function(Ad){
C.M6.Ch.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Ic=this.AX.
AmW(Ad,14);var AtW=this.AX.AOP(Ad,7);this.IM.Ax(A._GetAutoObject(A.Device.Converter
).AmV(AtW));this.AbB.Ax(A._GetAutoObject(A.Device.Converter).A5j(Ic));this.Am();
}},_Init:function(aArg){C.M6._Init.call(this,aArg);A.acg.Ap._Init.call(this.IM={
I:this},0);A.acg.Ap._Init.call(this.AbB={I:this},0);A.acg.AL._Init.call(this.Ea={
I:this},0);this.__proto__=C.Aqu;this.IM.H(BaQ);this.IM.L(A.jb.Text);this.AbB.H(BtR
);this.AbB.L(A.jb.Text);this.Ea.H(BtS);this.Ea.L(A.jb.Bc);this.J(this.IM,0);this.
J(this.AbB,0);this.J(this.Ea,0);this.IM.Ax(A.aaL(A.aci.TO));this.AbB.Ax(A.aaL(A.
aci.TO));},_Done:function(){this.__proto__=C.M6;this.IM._Done();this.AbB._Done();
this.Ea._Done();C.M6._Done.call(this);},_ReInit:function(){C.M6._ReInit.call(this
);this.IM._ReInit();this.AbB._ReInit();this.Ea._ReInit();},_Mark:function(D){var
B;C.M6._Mark.call(this,D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANa={ZQ:null,Bl:
function(aSize){C.M6.Bl.call(this,aSize);this.ZQ.H([this.Gz.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M6.Ai.call(this,Ae);this.ZQ.L(this.Gz.AQ);},Ch:function(
Ad){C.M6.Ch.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Jo=this.
AX.KP(Ad,26);if(Jo>0)this.ZQ.R(A.ab2(Jo.toFixed(),5));else this.ZQ.R(Rp);this.Am(
);}},_Init:function(aArg){C.M6._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZQ={I:this},0);this.__proto__=C.ANa;this.ZQ.H(BtT);this.J(this.ZQ,0);this.ZQ.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M6;this.ZQ._Done();C.M6._Done.
call(this);},_ReInit:function(){C.M6._ReInit.call(this);this.ZQ._ReInit();this.ZQ.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M6._Mark.call(this,D);if((B=this.ZQ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.AR2={Ap:null,Ai:function(Ae){C.AeV.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeV._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.AR2;this.Text.H(BtU);this.Ap.H(A0e);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afe));},_Done:function(){this.__proto__=C.AeV;this.Ap._Done(
);C.AeV._Done.call(this);},_ReInit:function(){C.AeV._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeV._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Yu={Text:
null,De:null,AP:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Ns],[B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIR],0);A.zV([this,this.Ns
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Ns],this);},Df:function(
E){C.BQ.Df.call(this,E);this.De.L(E);this.Text.L(E);this.Gw.L(E);this.D2.Zt(E);}
,WF:function(E){C.BQ.WF.call(this,E);this.D2.CU(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B9().toFixed());},Ns:function(s){this.DX(s);}
,_Init:function(aArg){C.BQ._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.De={I:this},0);A.acg.C7._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C7._Init.call(this.A$={I:this},0);this.__proto__=C.Yu;this.Text.H(BtV);this.
Text.A6(0x11);this.De.H(AyD);this.AP.DC(BaK);this.AP.DM(BaL);this.AP.L(A.jb.Bc);
this.Gw.H(BtW);this.Gw.L(A.jb.CT);this.D2.A0(0x14);this.D2.H(BtX);this.D2.Zt(A.jb.
Bm);this.D2.CU(A.jb.Ri);this.D2.Hn(2);this.A$.DC(BtY);this.A$.DM(BtZ);this.A$.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.De,0);this.J(this.AP,0);this.J(this.Gw,
0);this.J(this.D2,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.AZ(
A.aaL(A.fl.Ak));this.De.Ax(A.aaL(A.ach.AjW));this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Text.
_Done();this.De._Done();this.AP._Done();this.Gw._Done();this.D2._Done();this.A$.
_Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.
Text._ReInit();this.De._ReInit();this.AP._ReInit();this.Gw._ReInit();this.D2._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.AZ(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Aco={FM:null
,JZ:null,JY:null,AkN:null,AkO:null,Q8:null,QH:null,AbA:null,V5:null,PM:null,PN:null
,Sz:null,Gx:null,Gy:null,Jx:null,AlO:0,AlT:0,D7:0,DW:0,A_:0,Bl:function(aSize){var
B;this.Dz.H([this.Hx.M[2]-10,this.Hx.M[1],this.H5.M[0]+10,this.Hx.M[3]]);this.Dz.
AFp((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.Dz.Gt,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A_===1)||(this.A_===2)){var A1r=this.A2p(this.A_);if(!!
A1r){this.AbA.Z(true);this.AbA.H(A1r.M);this.AbA.L(this.V.AQ);this.V5.Z(true);this.
V5.H(A1r.M);}else{this.AbA.Z(false);this.V5.Z(false);}this.Hx.Z(false);this.H5.Z(
false);}else{this.AbA.Z(false);this.V5.Z(false);this.Hx.Z(Fw||GE);this.H5.Z(Fw||
GE);}},Qu:function(G){if(!!this.Q){if(this.FI===1)A.pe([this,this.Vc],this);else
if(this.FI===4)A.pe([this,this.A0K],this);else if(this.FI===5)A.pe([this,this.A0I
],this);}C.BW.Qu.call(this,G);},Ke:function(G){switch(this.A_){case 0:C.BW.Ke.call(
this,G);break;case 2:break;default:this.Ady(this);}},J$:function(G){switch(this.
A_){case 0:C.BW.J$.call(this,G);break;default:this.Ais(this);}},A1W:function(G){
var F;if(this.A_===1){var BO=this.D7;this.D7=this.D7-10;if(this.D7<this.AlT)this.
D7=this.AlT;if(this.D7<A._GetAutoObject(A.Device.Device).AcF)this.D7=A._GetAutoObject(
A.Device.Device).AcF;if(this.DW!==BO){if(!!this.JZ)(F=this.JZ,F[2].call(F[0],this.
D7));A.abo(this.JZ,0);}}if(this.A_===2){var BO=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JY)(F=this.JY,F[2].call(F[
0],this.DW));A.abo(this.JY,0);}}this.DJ(this);this.Am();},A0I:function(s){this.A1W(
s);},Al4:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A0I],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A2w:function(G){var F;if(this.A_===1){var
BO=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO
){if(!!this.JZ)(F=this.JZ,F[2].call(F[0],this.D7));A.abo(this.JZ,0);}}if(this.A_===
2){var BO=this.DW;this.DW=this.DW+10;if(this.DW>this.AlO)this.DW=this.AlO;if(this.
DW!==BO){if(!!this.JY)(F=this.JY,F[2].call(F[0],this.DW));A.abo(this.JY,0);}}this.
DJ(this);this.Am();},A0K:function(s){this.A2w(s);},Al5:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0K],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},Vc:function(G){this.Ex(this.A_+1);},Ady:function(G){this.FI=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Vc],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GH:function(G){},AfH:function(s){this.GH(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CR(A.jV);(F=this.N,F[1].call(F[0])).B$=[this,this.Vc];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CR(A.jV);(F=
this.N,F[1].call(F[0])).B$=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},A_v:function(E){if(A.aaZ(this.JZ,E))return;if(!!this.JZ)A.z$([this,this.
A3W],this.JZ,0);this.JZ=E;if(!!this.JZ)A.zX([this,this.A3W],this.JZ,0);A.pe([this
,this.A3W],this);},A3W:function(G){var F;this.D7=(F=this.JZ,F[1].call(F[0]));this.
Am();},A_u:function(E){if(A.aaZ(this.JY,E))return;if(!!this.JY)A.z$([this,this.A3V
],this.JY,0);this.JY=E;if(!!this.JY)A.zX([this,this.A3V],this.JY,0);A.pe([this,this.
A3V],this);},A3V:function(G){var F;this.DW=(F=this.JY,F[1].call(F[0]));this.Am();
},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;
if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EO;if((this.A_<0)||(
this.A_>2))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=!!this.A_;this.
Am();},Ais:function(G){if(this.A_>1)this.Ex(this.A_-1);},A39:function(G){},AyW:function(
s){this.A39(s);},A3I:function(G){},BbZ:function(s){this.A3I(s);},A2p:function(Atv
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkN={I:this},0);A.acg.AL._Init.call(this.AkO={I:this},0);A.acg.AL._Init.call(
this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={I:this},0);A.acg.AL._Init.call(
this.AbA={I:this},0);A.acg.BU._Init.call(this.V5={I:this},0);A.acg.Text._Init.call(
this.PM={I:this},0);A.acg.Text._Init.call(this.PN={I:this},0);A.acg.Text._Init.call(
this.Sz={I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.Core.BK._Init.call(
this.Gy={I:this},0);A.Core.BK._Init.call(this.Jx={I:this},0);this.__proto__=C.Aco;
this.H(AfE);this.T(A.aaR(A.acf.Arp));this.Background.H(AfE);this.V.H(BD);this.V.
R(A.aaR(A.acf.AG4));this.V.A6(0x12);this.AkN.H(Bt0);this.AkN.L(A.jb.Gj);this.AkO.
H(Bt1);this.AkO.L(A.jb.H9);this.Q8.H(Bt2);this.Q8.L(A.jb.E1);this.QH.H(Bt3);this.
AbA.H(Bt4);this.V5.H(Bt5);this.V5.Nm(3);this.V5.L(A.jb.AV);this.V5.Z(false);this.
PM.H(Bt6);this.PM.Hn(8);this.PM.Ja(true);this.PM.A6(0x11);this.PM.L(0xFF000000);
this.PN.H(Bt7);this.PN.Hn(8);this.PN.Ja(true);this.PN.A6(0x11);this.PN.L(0xFF000000
);this.Sz.H(Bt8);this.Sz.Ja(false);this.Sz.A6(0x12);this.Sz.L(0xFF000000);this.Gx.
Filter=5;this.Gx.Bw=false;this.Gy.Filter=4;this.Gy.Bw=false;this.Jx.Filter=1;this.
J1(this.V,-1);this.J1(this.Dz,-2);this.J(this.AkN,-1);this.J(this.AkO,-1);this.J(
this.Q8,-1);this.J(this.QH,-1);this.J(this.AbA,-1);this.J(this.V5,-1);this.J(this.
PM,-1);this.J(this.PN,0);this.J(this.Sz,0);this.QH.Ax(A.aaL(A.ach.ADD));this.PM.
S(A.aaL(A.fl.Af));this.PN.S(A.aaL(A.fl.Af));this.Sz.S(A.aaL(A.fl.Ak));this.Gx.BL=[
this,this.Al4];this.Gx.D1=[this,this.A0I];this.Gy.BL=[this,this.Al5];this.Gy.D1=[
this,this.A0K];this.Jx.BL=[this,this.Ady];this.FM=A._NewObject(C.Aeu,0);},_Done:
function(){this.__proto__=C.BW;this.AkN._Done();this.AkO._Done();this.Q8._Done();
this.QH._Done();this.AbA._Done();this.V5._Done();this.PM._Done();this.PN._Done();
this.Sz._Done();this.Gx._Done();this.Gy._Done();this.Jx._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkN._ReInit();this.AkO._ReInit(
);this.Q8._ReInit();this.QH._ReInit();this.AbA._ReInit();this.V5._ReInit();this.
PM._ReInit();this.PN._ReInit();this.Sz._ReInit();this.Gx._ReInit();this.Gy._ReInit(
);this.Jx._ReInit();this.T(A.aaR(A.acf.Arp));this.V.R(A.aaR(A.acf.AG4));this.PM.
S(A.aaL(A.fl.Af));this.PN.S(A.aaL(A.fl.Af));this.Sz.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JY)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FK={XX:null,Acq:
null,An$:0,Aoa:0,Du:function(){if(!this.XX)return 0;return this.XX.MF;},C6:function(
aIndex){if(!this.XX||(aIndex>=this.XX.MF))return-1;return this.XX.Get(aIndex);},
Gl:function(aIndex){return this.A6T().BS(this.C6(aIndex));},DZ:function(A7){if(!
this.XX)return-1;return this.XX.Avv(A7);},H4:function(){if(!this.XX)return-1;return this.
XX.H4();},AnJ:function(E){if(this.An$===E)return;this.An$=E;A.pe([this,this.AVM]
,this);},A0D:function(Aq){this.AnJ(Aq);},AnK:function(E){if(this.Aoa===E)return;
this.Aoa=E;A.pe([this,this.AVN],this);},A0E:function(Aq){this.AnK(Aq);},AVN:function(
G){A.abo([this,this.AS2,this.A0E],0);},AVM:function(G){A.abo([this,this.AS1,this.
A0D],0);},A6T:function(){return this.Acq;},AS1:function(){return this.An$;},AS2:
function(){return this.Aoa;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acq={I:this},0);this.__proto__=C.FK;},_Done:function(
){this.__proto__=C.AC;this.Acq._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acq._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acq)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMF={Init:
function(aArg){A.zV([this,this.Bfv],A._GetAutoObject(A.Device.Helper).UH,0);A.zV([
this,this.Bft],A._GetAutoObject(A.Device.Helper).UG,0);this.Bfv(this);this.Bft(this
);},Au:function(E){C.FK.Au.call(this,E);this.AnK(A._GetAutoObject(A.Device.Helper
).UH.Get(this.DZ(E)));this.AnJ(A._GetAutoObject(A.Device.Helper).UG.Get(this.DZ(
E)));},AnJ:function(E){if(this.An$===E)return;C.FK.AnJ.call(this,E);A._GetAutoObject(
A.Device.Helper).UG.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UG.
Ci();},AnK:function(E){if(this.Aoa===E)return;C.FK.AnK.call(this,E);A._GetAutoObject(
A.Device.Helper).UH.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UH.
Ci();},Bfv:function(G){this.Aoa=A._GetAutoObject(A.Device.Helper).UH.Get(this.DZ(
this.Q));A.pe([this,this.AVN],this);},Bft:function(G){this.An$=A._GetAutoObject(
A.Device.Helper).UG.Get(this.DZ(this.Q));A.pe([this,this.AVM],this);},_Init:function(
aArg){C.FK._Init.call(this,aArg);this.__proto__=C.AMF;this.XX=A._GetAutoObject(A.
Device.Helper).Ad1;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMG={AgF:null,AB1:0,AB0:0,Init:function(aArg){A.zV([this,this.BfI],A._GetAutoObject(
A.Device.Helper).Afy,0);A.zV([this,this.BfG],A._GetAutoObject(A.Device.Helper).Afx
,0);A.zV([this,this.BfE],A._GetAutoObject(A.Device.Helper).Afw,0);A.zV([this,this.
BfK],A._GetAutoObject(A.Device.Helper).Afz,0);this.BfI(this);this.BfG(this);this.
BfE(this);this.BfK(this);},Au:function(E){C.FK.Au.call(this,E);this.AnK(A._GetAutoObject(
A.Device.Helper).Afy.Get(this.DZ(E)));this.AnJ(A._GetAutoObject(A.Device.Helper).
Afx.Get(this.DZ(E)));this.AS7(A._GetAutoObject(A.Device.Helper).Afw.Get(this.DZ(
E)));this.AS9(A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(E)));},AnJ:function(
E){if(this.An$===E)return;C.FK.AnJ.call(this,E);A._GetAutoObject(A.Device.Helper
).Afx.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afx.Ci();},AnK:function(
E){if(this.Aoa===E)return;C.FK.AnK.call(this,E);A._GetAutoObject(A.Device.Helper
).Afy.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afy.Ci();},A6T:function(
){return this.AgF;},BfI:function(G){this.Aoa=A._GetAutoObject(A.Device.Helper).Afy.
Get(this.DZ(this.Q));A.pe([this,this.AVN],this);},BfG:function(G){this.An$=A._GetAutoObject(
A.Device.Helper).Afx.Get(this.DZ(this.Q));A.pe([this,this.AVM],this);},AS9:function(
E){if(this.AB1===E)return;this.AB1=E;A._GetAutoObject(A.Device.Helper).Afz.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afz.Ci();A.pe([this,this.Bac],this
);},AS7:function(E){if(this.AB0===E)return;this.AB0=E;A._GetAutoObject(A.Device.
Helper).Afw.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afw.Ci();A.
pe([this,this.Bab],this);},Bab:function(G){A.abo([this,this.A8G,this.AS7],0);},Bac:
function(G){A.abo([this,this.A8I,this.AS9],0);},BfE:function(G){this.AB0=A._GetAutoObject(
A.Device.Helper).Afw.Get(this.DZ(this.Q));A.pe([this,this.Bab],this);},BfK:function(
G){this.AB1=A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(this.Q));A.pe([this
,this.Bac],this);},A8I:function(){return this.AB1;},A8G:function(){return this.AB0;
},_Init:function(aArg){C.FK._Init.call(this,aArg);A.Device.AgF._Init.call(this.AgF={
I:this},0);this.__proto__=C.AMG;this.XX=A._GetAutoObject(A.Device.Helper).AgG;this.
Init(aArg);},_Done:function(){this.__proto__=C.FK;this.AgF._Done();C.FK._Done.call(
this);},_ReInit:function(){C.FK._ReInit.call(this);this.AgF._ReInit();},_Mark:function(
D){var B;C.FK._Mark.call(this,D);if((B=this.AgF)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMm={RP:null,Init:function(
aArg){var B;A.zX([this,this.AiP],[B=this.AnimalType,B.B_,B.Cb],0);A.pe([this,this.
AiP],this);this.Bb(this.RP);},Bk:function(E){C.I5.Bk.call(this,E);this.RP.Bx(this.
Js.AM);},AiP:function(G){A._GetAutoObject(A.Device.Device).AwI(this.AnimalType.Q
);},_Init:function(aArg){C.I5._Init.call(this,aArg);C.TI._Init.call(this.RP={I:this
},0);this.__proto__=C.AMm;var B;this.Js.Ar(false);this.Js.Aj(false);this.Js.Z(false
);this.RP.H(AIN);this.RP.Aj(true);this.RP.Ni(14);this.RP.Ahx(0);this.RP.OP(0);this.
J(this.RP,-4);this.RP.AR=[this,this.AAw];this.RP.Au([B=this.AnimalType,B.B_,B.Cb
]);this.RP.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I5;this.RP._Done();C.I5._Done.call(this);},_ReInit:function(){C.I5._ReInit.call(
this);this.RP._ReInit();},_Mark:function(D){var B;C.I5._Mark.call(this,D);if((B=
this.RP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TI={Filter:null,Er:0,TableId:0,Operator:1,CP:function(){var F;this.Tt((F=this.
Filter,F[1].call(F[0])).DL(this.Er,this.Operator));},Bl:function(aSize){var B;C.
BW.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hx.H(AhY
);this.H5.H([aSize[0]-40,40,aSize[0],80]);this.Dz.H([this.Hx.M[2]-5,this.Hx.M[1]
,this.H5.M[0]+5,this.Hx.M[3]]);this.Dz.AFp((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.
Dz.Gt,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Md],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Md
],E,0);A.pe([this,this.Md],this);},Md:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tt((F=this.Filter,F[1].call(F[0])).DL(this.Er,this.
Operator));else this.Tt(null);},Ahx:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Md],this);},Ni:function(E){if(this.Er===E)return;this.
Er=E;A.pe([this,this.Md],this);},Tt:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).AmX(this.TableId,this.Er));this.Am();},OP:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Md],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TI;this.H(KZ);this.V.A6(0x11);this.V.Cr(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cr(A.aaL(A.fl.Bh));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.AR$={Ge:null,MT:null,DY:null,Y:null,Ef:null,Cn:null,CH:null,Da:null,Gn:null,
Ee:null,C_:null,BZ:null,Ay:null,Breed:null,Ji:null,AnimalType:null,Gender:null,Pp:
null,KY:null,Jg:null,YJ:null,Amk:null,KK:0,M7:0,A4g:false,Init:function(aArg){var
B;A.zX([this,this.BA9],[B=A._GetAutoObject(A.Device.Device),B.AEH,B.AIV],0);A.zV([
this,this.At8],this.MT,0);A.zX([this,this.At8],[B=A._GetAutoObject(A.Device.Device
),B.Awp,B.AyS],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEH
,B.AIV],0);A.zV([this,this.GH],this.MT,0);A.zX([this,this.AiP],this.BZ.Q,0);A.pe([
this,this.AiP],this);A.pe([this,this.Be8],this);A.pe([this,this.At8],this);A.pe([
this,this.GH],this);A.pe([this,this.A3J],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALs],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArL(A.jb.E1);else
this.Ef.ArL(A.jb.Gj);if(A._GetAutoObject(A.Device.Device).AeP){if(!!(F=this.Cn.Dl
,F[1].call(F[0])))this.Cn.ArL(A.jb.E1);else this.Cn.ArL(A.jb.Gj);}else this.Cn.ArL(
A.jb.Ri);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},LO:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lh())A._GetAutoObject(A.Device.Device
).A3(41,true,A._GetAutoObject(A.Device.Device).An.HK().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(A.
Device.Helper).W);this.ApB();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFw(0);},E4:function(G){C.AB.E4.call(this,G);this.Jg.Ar(false);
A._GetAutoObject(A.Device.Device).Ut(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.E6();A._GetAutoObject(C.A8).FB();},Fk:function(G){var B;this.Ay.
My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.
Y.Br[1]);},At8:function(G){var F,Ct;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALs(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aem(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter
).Rj((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A3y]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A3x],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeP)this.JJ(this.Cn);}var Bem=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeP||!!(Ct=this.Cn.Dl,Ct[1].call(Ct[0])));if(this.MT.AOK()>0){if((
this.AV===this.Cn)&&Bem)this.Bb(this.Y.TQ(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeP&&(this.AV===this.Cn))&&!!(F=this.Cn.Dl,F[1].call(F[0])))this.
JJ(this.Ef);if(Bem)this.Bc_(this);},Adw:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},Ai1:function(){var F;this.Ge.Ci(A._GetAutoObject(A.Device.Device).An);
if(this.MT.NY(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HK().toFixed(),
0,null);else{var L9=A._GetAutoObject(A.Device.Device).An.LT(0,this.Ge.Id);A._GetAutoObject(
A.Device.Device).SR(L9);var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
this.Ge.Id);B1.OnSetBodyWeight(this.KK);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.
Ci(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MT.NY(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HK().toFixed(),0,null);else{var L9=A._GetAutoObject(A.Device.
Device).An.LT(0,this.Ge.Id);A._GetAutoObject(A.Device.Device).SR(L9);var B1=A._NewObject(
A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(this.Ge.Id);B1.OnSetBodyWeight(this.
M7);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WH(65280);this.Jg.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFw(F.Av0+1));this.A4g=true;A.pe([this,
this.ALs],this);this.ApB();},GH:function(G){this.Cn.ATH(A._GetAutoObject(A.Device.
Device).AeP);A._GetAutoObject(A.Device.Helper).J2(this.BZ,this.MT.NY(14));A._GetAutoObject(
A.Device.Helper).J2(this.C_,this.MT.NY(23));A._GetAutoObject(A.Device.Helper).J2(
this.CH,this.MT.NY(32));A._GetAutoObject(A.Device.Helper).J2(this.Ee,this.MT.NY(
18));A._GetAutoObject(A.Device.Helper).J2(this.Da,this.MT.NY(7));A._GetAutoObject(
A.Device.Helper).J2(this.Gn,this.MT.NY(34));this.YJ.Z(!this.MT.AOK());var O;var Aa=
null;var Aph=this.AV;for(O=0;O<this.MT.AfQ.M$();O++){Aa=this.Bz0(this.MT.AfQ.OG(
O));if(!!Aa)this.ZF(Aa);}this.JJ(Aph);A._GetAutoObject(A.Device.Helper).ANx(this.
Y);A.pe([this,this.A3J],this);this.Am();},AeY:function(E){if(this.KK===E)return;
this.KK=E;A.abo([this,this.Awb,this.AeY],0);},Ahs:function(E){if(this.M7===E)return;
this.M7=E;A.abo([this,this.Anr,this.Ahs],0);},Bc_:function(G){this.Ge.Gr();A._GetAutoObject(
A.Device.Helper).Aqi(this.Ge);this.Ge.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Ge.Nj(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Ge.SK(A._GetAutoObject(
A.Device.Helper).AMn(0,this.Ge));this.Ge.Ae6(true);if(this.MT.NY(14))this.Ge.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MT.NY(32))this.Ge.N2(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MT.NY(7))this.Ge.JW(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MT.NY(34))this.Ge.Nl(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alt=A._GetAutoObject(A.Device.Helper).A1K(this.Ge,0,A._GetAutoObject(
A.Device.Device).An);if(!Alt)this.Ai1();else A._GetAutoObject(A.Device.Helper).AKn(
this.Ge,Alt,0,0,[this,this.ApH]);},ApB:function(){A._GetAutoObject(A.Device.Helper
).W.Nj(0);if(A._GetAutoObject(A.Device.Device).AeP)A._GetAutoObject(A.Device.Helper
).W.Q6(0);this.AeY(0);this.Ahs(0);this.JJ(this.Ef);this.Am();},ApH:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.ApB();break;case 43:this.JJ(this.Ef);break;case 41:break;
default:A.ab5("%s%e",Ata,As.Id);}},JJ:function(Ag){this.Bb(Ag);this.Y.HI(Ag,true
,null,null);this.Y.Vz(null,null);},Be8:function(G){this.Ee.Ahv(A._GetAutoObject(
A.Device.Helper).W.AhW(1));this.At8(this);},AiP:function(G){this.C_.Ahv(A._GetAutoObject(
A.Device.Helper).Abq(this.AnimalType.Q));},A3J:function(G){var B;var BCd=this.Ay.
Background.Fq();var width=(BCd?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xw=this.Y.TQ(null,0x401);while(!!Xw&&(((B=Xw)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OX.isPrototypeOf(Xw)?Xw:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xw=this.Y.TQ(Xw,0x1);}},Bz0:function(Aai){var Aa=null;switch(Aai){case 14:Aa=
this.BZ;break;case 32:Aa=this.CH;break;case 23:Aa=this.C_;break;case 7:Aa=this.Da;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gn;break;default:A.ab5("%s%e",Bt9
,Aai);}return Aa;},BA9:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeP
)A._GetAutoObject(A.Device.Helper).W.Q6(0);else if(!(F=this.Cn.Dl,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmJ(A._GetAutoObject(A.Device.Device).AdT));this.
At8(this);},ALs:function(G){var B;var AKq=A.jV;var Azd=A.jb.CJ;var Bdp=A.jb.AV;this.
Amk.AxL(this);if(this.A4g){this.A4g=false;AKq=A._GetAutoObject(A.Device.Helper).
MG(A.aaR(A.acf.BpU),O8,A._GetAutoObject(A.Device.Converter).Rj(this.Ge.NaisId));
A.pe([B=this.Amk,B.StartTimer],this);Azd=A.jb.E1;Bdp=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKq=A.aaR(A.acf.Bo9);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKq=A.aaR(A.
acf.Bo8);this.YJ.T(AKq);this.YJ.Bmm(Azd);this.YJ.Bmn(Bdp);},A3y:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).AjC();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).AjC();else if(As.PopupState===7){A._GetAutoObject(C.A8).Cd(76);
A._GetAutoObject(A.Device.Device).AjC();}}}else A._GetAutoObject(A.Device.Device
).AjC();},A3x:function(G){A._GetAutoObject(A.Device.Device).AuW();},DJ:function(
G){var B;if(!this.MT.AOK()){this.N.Le.C3(255);if(this.AV===this.Ef){this.N.C2(A.
aaL(A.ach.Edit));this.N.B$=[B=this.Ef,B.FV];}else if(this.AV===this.Cn){this.N.C2(
A.aaL(A.ach.Edit));this.N.B$=[B=this.Cn,B.FV];}else{this.N.C2(null);this.N.B$=null;
}}else{this.N.C2(A.aaL(A.ach.Am3));if((this.Ef.Aqv===A.jb.Gj)||(this.Cn.Aqv===A.
jb.Gj)){this.N.Le.C3(100);this.N.B$=null;}else{this.N.Le.C3(255);this.N.B$=[this
,this.Bc_];}}},Awb:function(){return this.KK;},Anr:function(){return this.M7;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUR._Init.call(this.Ef={I:this},0);C.
AUN._Init.call(this.Cn={I:this},0);C.AxA._Init.call(this.CH={I:this},0);C.BW._Init.
call(this.Da={I:this},0);C.AsA._Init.call(this.Gn={I:this},0);C.AkV._Init.call(this.
Ee={I:this},0);C.AkV._Init.call(this.C_={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UR._Init.call(this.Ji={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M5._Init.call(this.
Pp={I:this},0);A.Device.KY._Init.call(this.KY={I:this},0);A.Device.TJ._Init.call(
this.Jg={I:this},0);C.AVm._Init.call(this.YJ={I:this},0);A.Core.Timer._Init.call(
this.Amk={I:this},0);this.__proto__=C.AR$;var B;this.Background.L(A.jb.CT);this.
N.Z(true);this.Ek.Ar(false);this.Dr(C.APq);this.DY.A0(0x3F);this.DY.H(Ff);this.DY.
L(A.jb.CJ);this.Y.H(Ff);this.Y.JV(9);this.Ef.H(AIN);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACI));this.Ef.ATH(true);this.Ef.AFP(false);this.Cn.H(BaU);this.Cn.Aj(true
);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.ATH(true);this.Cn.AFK(true);this.CH.H(As$);
this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Da.H(As$);this.Da.Aj(true);this.
Da.T(A.aaR(A.acf.Afo));this.Gn.H(BaV);this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Ji)
);this.Ee.H(Bt_);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M7));this.Ee.Ga(1000);this.
Ee.EV(999000);this.Ee.Ahv(A._GetAutoObject(A.Device.Helper).Abq(this.AnimalType.
Q));this.C_.H(BaV);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.KK));this.C_.Ga(1000);
this.C_.EV(99000);this.C_.Ahv(A._GetAutoObject(A.Device.Helper).Abq(this.AnimalType.
Q));this.BZ.H(As_);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Aft));this.Ay.H(It);this.
Jg.B2=false;this.Jg.Cx=true;this.Jg.HO(1);this.Jg.Fr(1000);this.Jg.Uq(0);this.YJ.
H(Aag);this.YJ.Aj(true);this.YJ.ArL(A.jb.Text);this.Amk.PV(3000);this.J(this.DY,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CH,0);this.J(
this.Da,0);this.J(this.Gn,0);this.J(this.Ee,0);this.J(this.C_,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YJ,0);this.N.CE=[this,this.Ew];this.N.Cf=[this,
this.Adw];this.N.C1(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.Y.Em=[this
,this.Fk];this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.Anu,B.Nj]);this.Ef.AFk([this,this.At8]);this.Ef.ATu([this,this.A3x]);
this.Ef.ATv([this,this.A3y]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.Ab6([B=A.
_GetAutoObject(A.Device.Helper).W,B.Awe,B.Q6]);this.Cn.OI=[this,this.Be8];this.Cn.
ATu([this,this.A3x]);this.Cn.ATv([this,this.A3y]);this.CH.Gs([this,this.D_,this.
GS]);this.CH.LZ([B=this.CH,B.FV]);this.CH.L2(A.aaL(A.ach.Edit));this.CH.Au([B=this.
Breed,B.B_,B.Cb]);this.CH.CK(this.Breed);this.CH.Any(this.Pp);this.Da.Au([B=this.
Gender,B.B_,B.Cb]);this.Da.CK(this.Gender);this.Gn.Gs([this,this.D_,this.GS]);this.
Gn.LZ([B=this.Gn,B.FV]);this.Gn.L2(A.aaL(A.ach.Edit));this.Gn.Au([B=this.Ji,B.B_
,B.Cb]);this.Gn.CK(this.Ji);this.Gn.Any(this.KY);this.Ee.Au([this,this.Anr,this.
Ahs]);this.C_.Au([this,this.Awb,this.AeY]);this.BZ.Au([B=this.AnimalType,B.B_,B.
Cb]);this.BZ.CK(this.AnimalType);this.Ay.BnI([this,this.A3J]);this.Breed.L0(A._GetAutoObject(
A.Device.Helper).W);this.Ji.L0(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
L0(A._GetAutoObject(A.Device.Helper).W);this.Gender.L0(A._GetAutoObject(A.Device.
Helper).W);this.Ge=A._NewObject(A.Device.Animal,0);this.MT=A._GetAutoObject(C.Ams
);this.Jg.Q=[B=A._GetAutoObject(A.Device.Device),B.ASX,B.A0z];this.Amk.MC=[this,
this.ALs];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();
this.Y._Done();this.Ef._Done();this.Cn._Done();this.CH._Done();this.Da._Done();this.
Gn._Done();this.Ee._Done();this.C_._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Ji._Done();this.AnimalType._Done();this.Gender._Done();this.Pp.
_Done();this.KY._Done();this.Jg._Done();this.YJ._Done();this.Amk._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cn._ReInit();this.CH._ReInit();this.Da._ReInit(
);this.Gn._ReInit();this.Ee._ReInit();this.C_._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Ji._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pp._ReInit();this.KY._ReInit();this.Jg._ReInit();this.YJ._ReInit(
);this.Amk._ReInit();this.Ef.T(A.aaR(A.acf.ACI));this.Cn.T(A.aaR(A.acf.Aeg));this.
CH.T(A.aaR(A.acf.Breed));this.Da.T(A.aaR(A.acf.Afo));this.Gn.T(A.aaR(A.acf.Ji));
this.Ee.T(A.aaR(A.acf.M7));this.C_.T(A.aaR(A.acf.KK));this.BZ.T(A.aaR(A.acf.Aft)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ge)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ji)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amk)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asz={Zk:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zk={
I:this},0);this.__proto__=C.Asz;this.N.CR(A.aaR(A.acf.A6r));this.Number.H(Bt$);this.
Jh.H(Bua);this.IU.H(Bub);this.AkG(2);this.Bc7=false;this.Beb=true;this.Bec=false;
this.Zk.H(Buc);this.Zk.KS(true);this.Zk.R(A.aaR(A.acf.A$K));this.Zk.L(A.jb.Text);
this.J(this.Zk,0);this.N.CE=null;this.N.B$=[this,this.AI1];this.N.C1(null);this.
Zk.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.
Zk._Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zk._ReInit();this.N.CR(A.aaR(A.acf.A6r));this.Zk.R(A.aaR(
A.acf.A$K));this.Zk.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen.
_Mark.call(this,D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADV={Cu:null,FO:function(E){if(this.M9===E)return;C.HL.FO.call(this,E);this.
Cu.CU(E);},Ys:function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;
case 1:B5=this.Cu;break;case 2:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DF._Init.call(this.Cu={I:this
},0);this.__proto__=C.ADV;this.H(Bud);this.Cu.H(Bax);this.F0.H(Bue);this.J(this.
Cu,-2);this.Cu.Dj=[this,this.GX];},_Done:function(){this.__proto__=C.HL;this.Cu.
_Done();C.HL._Done.call(this);},_ReInit:function(){C.HL._ReInit.call(this);this.
Cu._ReInit();},_Mark:function(D){var B;C.HL._Mark.call(this,D);if((B=this.Cu)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsA={G5:null
,Bl:function(aSize){C.OU.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G5.M[0
]));},Ai:function(Ae){C.OU.Ai.call(this,Ae);if(this.Hl)this.G5.FO(A.jb.CJ);else this.
G5.FO(A.jb.CT);},A2j:function(){this.Bb(this.G5);},_Init:function(aArg){C.OU._Init.
call(this,aArg);C.HL._Init.call(this.G5={I:this},0);this.__proto__=C.AsA;this.G5.
H(Buf);this.J(this.G5,0);this.G5.Au([this,this.ASN,this.AFD]);},_Done:function(){
this.__proto__=C.OU;this.G5._Done();C.OU._Done.call(this);},_ReInit:function(){C.
OU._ReInit.call(this);this.G5._ReInit();},_Mark:function(D){var B;C.OU._Mark.call(
this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AxA={G5:null,Bl:function(aSize){C.OU.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G5.M[0]));},Ai:function(Ae){C.OU.Ai.call(this,Ae);if(this.Hl)this.G5.FO(
A.jb.CJ);else this.G5.FO(A.jb.CT);},A2j:function(){this.Bb(this.G5);},_Init:function(
aArg){C.OU._Init.call(this,aArg);C.ADV._Init.call(this.G5={I:this},0);this.__proto__=
C.AxA;this.G5.A0(0x18);this.G5.H(Bug);this.J(this.G5,0);this.G5.Au([this,this.ASN
,this.AFD]);},_Done:function(){this.__proto__=C.OU;this.G5._Done();C.OU._Done.call(
this);},_ReInit:function(){C.OU._ReInit.call(this);this.G5._ReInit();},_Mark:function(
D){var B;C.OU._Mark.call(this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acr={ScreenTypeToString:
null,Du:function(){return 4;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BS(this.C6(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acr;this.Ca.Set(0,3);this.Ca.Set(1,35);this.Ca.Set(2
,34);this.Ca.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AV8={ALj:false,A2C:false,WE:function(G){this.Agx();A._GetAutoObject(C.BR).Tz(
A.aaR(A.acf.Settings),[this,this.A3O]);A._GetAutoObject(C.BR).Fz();this.AMa();A.
_GetAutoObject(C.BR).Mj(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BR).Fz(
);A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.ARC)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},CC:function(G){C.QD.CC.call(this,G);if(
this.A2C){this.A2C=false;A.pe([this,this.A0F],this);}},Agg:function(G){C.QD.Agg.
call(this,G);this.A_4(true);},Abs:function(){return C.ACa;},Abt:function(){return C.
ADu;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.
Device.Helper).A68(Math.max(A._GetAutoObject(A.Device.Device).Av2,A._GetAutoObject(
A.Device.Helper).A60(A._GetAutoObject(A.Device.Device).An))+1));},HQ:function(G){
C.QD.HQ.call(this,G);if((((A._GetAutoObject(A.Device.Converter).S3(A._GetAutoObject(
A.Device.Device).PY)===10)&&this.ALj)&&!!this.Bg.AX)&&!this.Bg.AX.B9()){this.N.Cw(
null);this.N.Fc(A.aaR(A.acf.No));this.N.Cf=[this,this.BBl];this.N.C2(null);this.
N.CR(A.aaR(A.acf.Yes));this.N.B$=[this,this.BBm];}else if(this.Aki()===false){this.
N.Cw(A._GetAutoObject(A.Device.Converter).Ajr(A._GetAutoObject(A.Device.Converter
).AL7(this.LX.AC7())));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OQ(false
);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(86);},AA5:function(
G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Ay3=aFilter.
DL(26,4);if(!!Ay3){aFilter.Np(Ay3);A._GetAutoObject(A.Device.Device).An.Bk(aFilter
);if(!!this.Bg)this.Bg.GT(0);}},A6Y:function(){return C.APx;},Bgg:function(){var
B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.Filter
){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion
)Filter.Np(FilterCriterion);A._GetAutoObject(A.Device.Device).An.Bk(Filter);}},A3O:
function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A2C=true;A._GetAutoObject(
C.A8).Cd(89);},ALq:function(G){if(A._GetAutoObject(A.Device.Converter).S3(A._GetAutoObject(
A.Device.Device).PY)===10){if(this.ALj){this.Dk(A.aaR(A.acf.BoM));this.Bg.NP.S(A.
aaL(A.fl.Bh));}else{this.Dk(A.aaR(A.acf.AEs));this.Bg.NP.S(A.aaL(A.fl.Af));}}else
this.Dk(A.aaR(A.acf.AEs));},A_4:function(E){if(this.ALj===E)return;this.ALj=E;A.
pe([this,this.AoA],this);A.pe([this,this.ALq],this);},BBm:function(G){A._GetAutoObject(
C.A8).Ab9(90);},BBl:function(G){this.A_4(false);},_Init:function(aArg){C.QD._Init.
call(this,aArg);this.__proto__=C.AV8;this.Dr(C.ADl);this.Dk(A.aaR(A.acf.AEs));this.
ATq(A._GetAutoObject(C.Ax6));},_ReInit:function(){C.QD._ReInit.call(this);this.Dk(
A.aaR(A.acf.AEs));},_className:"Application::YoungNoTransponderListScreen"};C.AV7={
_Init:function(aArg){C.I5._Init.call(this,aArg);this.__proto__=C.AV7;this.KW.Ar(
false);this.KW.Aj(false);this.KW.Z(false);this.Bni(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARg={St:null,Q:null,A8g:0,M9:0,Init:function(aArg){this.ATt(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.St)this.St.Au(E);},ATt:function(
E){if(this.A8g===E)return;this.A8g=E;var X;switch(E){case 2:X=A._NewObject(C.HL,
0);break;case 3:X=A._NewObject(C.ADV,0);break;case 4:X=A._NewObject(C.ARd,0);break;
case 5:X=A._NewObject(C.ARe,0);break;case 6:X=A._NewObject(C.AvT,0);break;default:{
X=null;A.ab5("%s%i",Buh,E);}}this.Bnh(X);},Bnh:function(E){if(this.St===E)return;
if(!!this.St){this.St.Au(null);this.HP(this.St);}this.St=E;if(!!this.St){this.St.
Au(this.Q);this.J(this.St,0);}},FO:function(E){if(this.M9===E)return;this.M9=E;if(
!!this.St)this.St.FO(E);},SQ:function(GA){if(!!this.St)this.St.SQ(GA);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARg;this.H(Ayp);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.St)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARd={CV:null,Cu:null,FO:function(
E){if(this.M9===E)return;C.HL.FO.call(this,E);this.Cu.CU(E);this.CV.CU(E);},Ys:function(
HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.Cu;break;
case 2:B5=this.CV;break;case 3:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;
},_Init:function(aArg){C.HL._Init.call(this,aArg);C.DF._Init.call(this.CV={I:this
},0);C.DF._Init.call(this.Cu={I:this},0);this.__proto__=C.ARd;this.H(Bui);this.G2.
H(Atl);this.CV.H(Bay);this.Cu.H(Baz);this.F0.H(BaA);this.J(this.CV,-2);this.J(this.
Cu,-2);this.CV.Dj=[this,this.GX];this.Cu.Dj=[this,this.GX];},_Done:function(){this.
__proto__=C.HL;this.CV._Done();this.Cu._Done();C.HL._Done.call(this);},_ReInit:function(
){C.HL._ReInit.call(this);this.CV._ReInit();this.Cu._ReInit();},_Mark:function(D
){var B;C.HL._Mark.call(this,D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACR={S4:null,Ai:function(Ae){C.Abp.Ai.call(this,Ae);this.S4.L(this.V.AQ);},_Init:
function(aArg){C.Abp._Init.call(this,aArg);C.CG._Init.call(this.S4={I:this},0);this.
__proto__=C.ACR;this.V.Z(false);this.AW.H(Buj);this.AW.ATt(4);this.S4.H(Buk);this.
S4.R(A.aaR(A.acf.Km));this.S4.L(A.jb.Bm);this.J(this.S4,0);this.S4.S(A.aaL(A.fl.
Af));this.S4.AZ(A.aaL(A.fl.Ak));this.S4.Cr(null);},_Done:function(){this.__proto__=
C.Abp;this.S4._Done();C.Abp._Done.call(this);},_ReInit:function(){C.Abp._ReInit.
call(this);this.S4._ReInit();this.S4.R(A.aaR(A.acf.Km));this.S4.S(A.aaL(A.fl.Af)
);this.S4.AZ(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abp._Mark.call(this,D);
if((B=this.S4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LY={Y1:null,T9:null,AQ:0,A7x:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y1.L(this.AQ);this.T9.L(this.AQ);},A_j:function(E){var B;if(this.A7x===
E)return;this.A7x=E;if(E){this.Y1.Z(true);this.T9.DC([this.T9.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y1.Z(false);this.T9.DC([this.T9.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C7._Init.call(
this.Y1={I:this},0);A.acg.C7._Init.call(this.T9={I:this},0);this.__proto__=C.LY;
this.H(A0f);this.Y1.A0(0x2D);this.Y1.DC(Ah0);this.Y1.DM(BaW);this.Y1.L(A.jb.Text
);this.T9.A0(0x36);this.T9.DC(BaW);this.T9.DM(Bul);this.T9.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y1,0);this.J(this.T9,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y1._Done();this.T9._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y1._ReInit();this.T9._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUv={Sy:null,PE:null,Da:null,BZ:null,CH:null,GQ:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pp:null,UR:null,KY:null,Init:function(aArg){A.zX([this
,this.AuQ],this.BZ.Q,0);A.zX([this,this.AM5],this.CH.Q,0);A.zX([this,this.Brb],this.
Sy.Q,0);A.zX([this,this.Avt],this.Da.Q,0);A.zX([this,this.AV4],this.GQ.Q,0);},AuQ:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.BZ.Q,F[1].call(F[
0])));},Brb:function(G){var F;A._GetAutoObject(A.Device.Device).Axh((F=this.Sy.Q
,F[1].call(F[0])));},Avt:function(G){var F;A._GetAutoObject(A.Device.Device).JW((
F=this.Da.Q,F[1].call(F[0])));},AV4:function(G){var F;A._GetAutoObject(A.Device.
Device).Nl((F=this.GQ.Q,F[1].call(F[0])));},AM5:function(G){var F;A._GetAutoObject(
A.Device.Device).N2((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.
call(this,aArg);C.BW._Init.call(this.Sy={I:this},0);C.Ir._Init.call(this.PE={I:this
},0);C.BW._Init.call(this.Da={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.AxA.
_Init.call(this.CH={I:this},0);C.AsA._Init.call(this.GQ={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M5._Init.call(this.Pp={I:this},0);C.UR._Init.call(this.UR={I:
this},0);A.Device.KY._Init.call(this.KY={I:this},0);this.__proto__=C.AUv;var B;this.
Jb((A.aaR(A.acf.Asn)+Ayz)+A.aaR(A.acf.AjH));this.Sy.H(Ah3);this.Sy.Aj(true);this.
Sy.T(A.aaR(A.acf.Bam));this.Sy.Bi(true);this.Sy.Bx(0);this.PE.H(Ayn);this.PE.Aj(
true);this.PE.Z(true);this.PE.T(A.aaR(A.acf.AdT));this.PE.Ga(0);this.PE.EV(99);this.
PE.IR(A.aaR(A.acf.Km));this.PE.Jc(A.aaR(A.acf.GL));this.Da.H(Aag);this.Da.Aj(true
);this.Da.T(A.aaR(A.acf.Afo));this.Da.Bi(true);this.Da.Bx(0);this.BZ.H(Ali);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Aft));this.BZ.Bi(true);this.BZ.Bx(0);this.CH.H(
AcQ);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.CH.Bi(false);this.GQ.H(
AcQ);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Ji));this.GQ.Bi(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.UR.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sy,0);this.
J(this.PE,0);this.J(this.Da,0);this.J(this.BZ,0);this.J(this.CH,0);this.J(this.GQ
,0);this.Sy.Au([B=this.WeightRecordingScope,B.B_,B.Cb]);this.Sy.CK(this.WeightRecordingScope
);this.PE.Au([B=A._GetAutoObject(A.Device.Device),B.A8z,B.Bbh]);this.Da.Au([B=this.
Gender,B.B_,B.Cb]);this.Da.CK(this.Gender);this.BZ.Au([B=this.AnimalType,B.B_,B.
Cb]);this.BZ.CK(this.AnimalType);this.CH.Gs([this,this.D_,this.GS]);this.CH.LZ([
B=this.CH,B.FV]);this.CH.L2(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B_,B.Cb
]);this.CH.CK(this.Breed);this.CH.Any(this.Pp);this.GQ.Gs([this,this.D_,this.GS]
);this.GQ.LZ([B=this.GQ,B.FV]);this.GQ.L2(A.aaL(A.ach.Edit));this.GQ.Au([B=this.
UR,B.B_,B.Cb]);this.GQ.CK(this.UR);this.GQ.Any(this.KY);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cg;this.Sy._Done();this.PE._Done();this.Da._Done();this.
BZ._Done();this.CH._Done();this.GQ._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pp._Done();this.UR._Done();this.
KY._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
Sy._ReInit();this.PE._ReInit();this.Da._ReInit();this.BZ._ReInit();this.CH._ReInit(
);this.GQ._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pp._ReInit();this.UR._ReInit();
this.KY._ReInit();this.Jb((A.aaR(A.acf.Asn)+Ayz)+A.aaR(A.acf.AjH));this.Sy.T(A.aaR(
A.acf.Bam));this.PE.T(A.aaR(A.acf.AdT));this.PE.IR(A.aaR(A.acf.Km));this.PE.Jc(A.
aaR(A.acf.GL));this.Da.T(A.aaR(A.acf.Afo));this.BZ.T(A.aaR(A.acf.Aft));this.CH.T(
A.aaR(A.acf.Breed));this.GQ.T(A.aaR(A.acf.Ji));},_Mark:function(D){var B;C.Cg._Mark.
call(this,D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UR)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUu={QQ:null,FD:null,In:null,C$:null,Dm:null,EL:null,AutoRegistrationMode:null
,AdW:null,Init:function(aArg){var B;A.zX([this,this.BhE],this.QQ.Q,0);A.zX([this
,this.BeT],[B=A._GetAutoObject(A.Device.Device),B.ASx,B.A0l],0);A.zX([this,this.
Adx],[B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4],0);A.zX([this,this.Adx],[B=
A._GetAutoObject(A.Device.Device),B.Ul,B.U5],0);A.pe([this,this.BeT],this);A.pe([
this,this.Adx],this);},BhE:function(G){var F;A._GetAutoObject(A.Device.Device).Aww((
F=this.QQ.Q,F[1].call(F[0])));},BeT:function(G){switch(A._GetAutoObject(A.Device.
Device).AgA){case 0:A._GetAutoObject(A.Device.Helper).J2(this.In,true);break;case
1:A._GetAutoObject(A.Device.Helper).J2(this.In,false);break;default:throw new Error(
Bum+A._GetAutoObject(A.Device.Device).AgA.toFixed());}},Adx:function(G){var F,Ct;
if(((F=this.C$.Q,F[1].call(F[0]))+(Ct=this.Dm.Q,Ct[1].call(Ct[0])))>12)(Ct=this.
Dm.Q,Ct[2].call(Ct[0],12-(F=this.C$.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.BW._Init.call(this.QQ={I:this},0);C.BW._Init.call(this.
FD={I:this},0);C.AGK._Init.call(this.In={I:this},0);C.Ir._Init.call(this.C$={I:this
},0);C.Ir._Init.call(this.Dm={I:this},0);C.Av3._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdW._Init.
call(this.AdW={I:this},0);this.__proto__=C.AUu;var B;this.Jb(A.aaR(A.acf.Aqm));this.
QQ.H(AIN);this.QQ.Aj(true);this.QQ.T(A.aaR(A.acf.Aqm));this.QQ.Bi(false);this.QQ.
Ga(-1);this.QQ.EV(1);this.FD.H(U1);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.
aaR(A.acf.Aqj));this.FD.Bi(true);this.In.H(Aag);this.In.Aj(true);this.In.Z(true);
this.In.T(A.aaR(A.acf.AEq));this.In.Bi(true);this.C$.H(Ali);this.C$.Aj(true);this.
C$.Z(true);this.C$.T(A.aaR(A.acf.AqE));this.C$.Bi(false);this.C$.Ga(2);this.C$.EV(
6);this.C$.IR(A.aaR(A.acf.OE));this.C$.Jc(A.aaR(A.acf.Ez));this.Dm.H(AcQ);this.Dm.
Aj(true);this.Dm.T(A.aaR(A.acf.Zm));this.Dm.Bi(true);this.Dm.Ga(0);this.Dm.EV(12
);this.Dm.IR(A.aaR(A.acf.OE));this.Dm.Jc(A.aaR(A.acf.Ez));this.EL.H(Bun);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.Ar1(A.aaR(A.acf.Aql));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QQ,0);this.
J(this.FD,0);this.J(this.In,0);this.J(this.C$,0);this.J(this.Dm,0);this.J(this.EL
,0);this.QQ.Au([B=this.AutoRegistrationMode,B.B_,B.Cb]);this.QQ.CK(this.AutoRegistrationMode
);this.FD.Au([B=this.AdW,B.B_,B.Cb]);this.FD.CK(this.AdW);this.In.Uo([B=A._GetAutoObject(
A.Device.Device),B.WC,B.A0o]);this.In.Akx([B=A._GetAutoObject(A.Device.Device),B.
Awg,B.AyM]);this.C$.Au([B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4]);this.Dm.
Au([B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5]);this.EL.DB(A.aaL(A.ach.AjY));
this.EL.OO([B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4]);this.EL.PU([B=A._GetAutoObject(
A.Device.Device),B.Ul,B.U5]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.QQ._Done();this.FD._Done();this.In._Done();this.C$._Done();this.Dm._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdW._Done();C.Cg._Done.
call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.QQ._ReInit();this.FD.
_ReInit();this.In._ReInit();this.C$._ReInit();this.Dm._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdW._ReInit();this.Jb(A.aaR(A.acf.Aqm
));this.QQ.T(A.aaR(A.acf.Aqm));this.FD.T(A.aaR(A.acf.Aqj));this.In.T(A.aaR(A.acf.
AEq));this.C$.T(A.aaR(A.acf.AqE));this.C$.IR(A.aaR(A.acf.OE));this.C$.Jc(A.aaR(A.
acf.Ez));this.Dm.T(A.aaR(A.acf.Zm));this.Dm.IR(A.aaR(A.acf.OE));this.Dm.Jc(A.aaR(
A.acf.Ez));this.EL.Ar1(A.aaR(A.acf.Aql));},_Mark:function(D){var B;C.Cg._Mark.call(
this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVz={OJ:null,FD:null,In:null,C$:null,Dm:null,EL:null,Afs:null,Init:function(
aArg){var B;A.zX([this,this.Bfx],[B=A._GetAutoObject(A.Device.Device),B.ASZ,B.A0B
],0);A.zX([this,this.Adx],[B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4],0);A.zX([
this,this.Adx],[B=A._GetAutoObject(A.Device.Device),B.Ul,B.U5],0);A.pe([this,this.
Bfx],this);A.pe([this,this.Adx],this);},Bfx:function(G){var AK7=false;var AaN=false;
switch(A._GetAutoObject(A.Device.Device).Ak5){case 0:{AK7=false;AaN=false;}break;
case 1:{AK7=true;AaN=false;}break;case 2:{AK7=false;AaN=true;}break;default:throw new
Error(Buo+A._GetAutoObject(A.Device.Device).Ak5.toFixed());}A._GetAutoObject(A.Device.
Helper).J2(this.In,AK7);A._GetAutoObject(A.Device.Helper).J2(this.C$,AaN);A._GetAutoObject(
A.Device.Helper).J2(this.Dm,AaN);A._GetAutoObject(A.Device.Helper).J2(this.EL,AaN
);},Adx:function(G){var F,Ct;if(((F=this.C$.Q,F[1].call(F[0]))+(Ct=this.Dm.Q,Ct[
1].call(Ct[0])))>12)(Ct=this.Dm.Q,Ct[2].call(Ct[0],12-(F=this.C$.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Ir._Init.call(this.OJ={
I:this},0);C.BW._Init.call(this.FD={I:this},0);C.AGK._Init.call(this.In={I:this}
,0);C.Ir._Init.call(this.C$={I:this},0);C.Ir._Init.call(this.Dm={I:this},0);C.Av3.
_Init.call(this.EL={I:this},0);C.Afs._Init.call(this.Afs={I:this},0);this.__proto__=
C.AVz;var B;this.Jb(A.aaR(A.acf.LinkTransponder));this.OJ.H(AIN);this.OJ.Aj(true
);this.OJ.Z(true);this.OJ.T(A.aaR(A.acf.A7R));this.OJ.Bi(false);this.OJ.Ga(1);this.
OJ.EV(365);this.OJ.IR(A.aaR(A.acf.Km));this.OJ.Jc(A.aaR(A.acf.GL));this.FD.H(U1);
this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqj));this.FD.Bi(true);this.
In.H(Aag);this.In.Aj(true);this.In.Z(true);this.In.T(A.aaR(A.acf.AEq));this.In.Bi(
false);this.C$.H(Ali);this.C$.Aj(true);this.C$.Z(true);this.C$.T(A.aaR(A.acf.AqE
));this.C$.Bi(false);this.C$.Ga(2);this.C$.EV(6);this.C$.IR(A.aaR(A.acf.OE));this.
C$.Jc(A.aaR(A.acf.Ez));this.Dm.H(AcQ);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.Zm)
);this.Dm.Bi(true);this.Dm.Ga(0);this.Dm.EV(12);this.Dm.IR(A.aaR(A.acf.OE));this.
Dm.Jc(A.aaR(A.acf.Ez));this.EL.H(Aoq);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar1(A.aaR(A.acf.Aql));this.J(this.OJ,0);this.J(this.FD,0);this.
J(this.In,0);this.J(this.C$,0);this.J(this.Dm,0);this.J(this.EL,0);this.OJ.Au([B=
A._GetAutoObject(A.Device.Device),B.A85,B.Bby]);this.FD.Au([B=this.Afs,B.B_,B.Cb
]);this.FD.CK(this.Afs);this.In.Uo([B=A._GetAutoObject(A.Device.Device),B.WC,B.A0o
]);this.In.Akx([B=A._GetAutoObject(A.Device.Device),B.Awg,B.AyM]);this.C$.Au([B=
A._GetAutoObject(A.Device.Device),B.Uk,B.U4]);this.Dm.Au([B=A._GetAutoObject(A.Device.
Device),B.Ul,B.U5]);this.EL.DB(A.aaL(A.ach.AjY));this.EL.OO([B=A._GetAutoObject(
A.Device.Device),B.Uk,B.U4]);this.EL.PU([B=A._GetAutoObject(A.Device.Device),B.Ul
,B.U5]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.OJ._Done();this.
FD._Done();this.In._Done();this.C$._Done();this.Dm._Done();this.EL._Done();this.
Afs._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
OJ._ReInit();this.FD._ReInit();this.In._ReInit();this.C$._ReInit();this.Dm._ReInit(
);this.EL._ReInit();this.Afs._ReInit();this.Jb(A.aaR(A.acf.LinkTransponder));this.
OJ.T(A.aaR(A.acf.A7R));this.OJ.IR(A.aaR(A.acf.Km));this.OJ.Jc(A.aaR(A.acf.GL));this.
FD.T(A.aaR(A.acf.Aqj));this.In.T(A.aaR(A.acf.AEq));this.C$.T(A.aaR(A.acf.AqE));this.
C$.IR(A.aaR(A.acf.OE));this.C$.Jc(A.aaR(A.acf.Ez));this.Dm.T(A.aaR(A.acf.Zm));this.
Dm.IR(A.aaR(A.acf.OE));this.Dm.Jc(A.aaR(A.acf.Ez));this.EL.Ar1(A.aaR(A.acf.Aql));
},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afs={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.BgW],[B=A._GetAutoObject(A.Device.Device),B.ASZ,B.A0B],0);A.pe([
this,this.BgW],this);},Du:function(){return 3;},Gl:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axd(E);},BgW:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak5;A.
abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afs;this.Ca.Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Je={B6:null,IX:null,Cq:null,AmA:null,Sh:null,Anl:null,AjE:null,Text:null,CX:
null,D6:0,LA:false,Ai:function(Ae){var B;A.acn.Je.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IX.Ar(true);else{this.IX.Ar(false);this.CX.Z(false);}},A4M:function(G
){var B;var Bd=this.Text.M;var Nz=0;var NA=0;if(this.CX.Et[0]<Bd[0])Nz=Bd[0]-this.
CX.Et[0];if(this.CX.Et[0]>Bd[2])Nz=Bd[2]-this.CX.Et[0];if(this.CX.Et[1]<Bd[1])NA=
Bd[1]-this.CX.Et[1];if(this.CX.ED[1]>Bd[3])NA=Bd[3]-this.CX.ED[1];if(!!Nz||!!NA)
this.Text.Gb(A.abf(this.Text.Br,[Nz,NA]));Nz=this.Text.Br[0];NA=this.Text.Br[1];
var C5=[(B=this.Text.Dc())[2]-B[0],B[3]-B[1]];if(C5[0]<=((B=this.Text.M)[2]-B[0]
))Nz=0;if(C5[1]<=((B=this.Text.M)[3]-B[1]))NA=0;this.Text.Gb([Nz,NA]);},Amn:function(
G){if(!this.B6)return;var A4c=this.Text.AGX(this.D6);var pos=this.Text.Afh(A4c);
this.CX.DM(A.abe(pos,[0,this.B6.Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IX.Bw){this.IX.Ar(false);this.IX.Ar(true);}if(this.LA){A.pe([this,this.
A4M],this);this.LA=false;}},AAA:function(G){if(!this.B6)return;var EH=this.Text.
AGX(this.D6);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnS(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.AC9(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnS(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CO===4){var pos=this.Text.Afh(EH);var AaM=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.AT8(A.abe(pos,[0,AaM]));}if(this.Cq.CO===5
){var pos=this.Text.Afh(EH);var AaM=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.AT8(A.abf(pos,[0,AaM]));}var Vi=this.Text.AnS(EH);var Iy=this.Text.
String.charCodeAt(Vi)||0;if(((Iy===0x5E)||(Iy===0x7E))||(Iy===0x25))Vi=Vi-1;if(Vi
!==this.D6){this.D6=Vi;A.pe([this,this.Amn],this);this.LA=true;}},Be2:function(G
){if(!this.D6)return;var Iy=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Iy===0x5E)||(Iy===0x7E))||(Iy===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.LA=true;},AAB:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Iy=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Iy===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.LA=true;}
,Bfe:function(G){this.Text.R(A.abU(this.Text.String,Bup,this.D6));this.D6=this.D6+
1;this.LA=true;},Be4:function(G){var Iy=this.AjE.DQ;var Aur=String.fromCharCode(
Iy);A.ab5("%c",Iy);if((((Iy===0x5E)||(Iy===0x7E))||(Iy===0xAD))||(Iy===0x25))Aur=
Buq+String.fromCharCode(Iy);this.Text.R(A.abU(this.Text.String,Aur,this.D6));this.
D6=this.D6+Aur.length;this.LA=true;},_Init:function(aArg){A.acn.Je._Init.call(this
,aArg);A.acl.TJ._Init.call(this.IX={I:this},0);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.BK._Init.call(this.AmA={I:this},0);A.Core.BK._Init.call(this.Sh={I:this
},0);A.Core.BK._Init.call(this.Anl={I:this},0);A.Core.BK._Init.call(this.AjE={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C7._Init.call(this.CX={
I:this},0);this.__proto__=C.Je;var B;this.H(Bur);this.IX.B2=false;this.IX.Cx=true;
this.IX.Fr(500);this.IX.Uq(500);this.Cq.Filter=147;this.Cq.Bw=false;this.AmA.Filter=
151;this.Sh.Filter=44;this.Anl.Filter=149;this.AjE.Filter=145;this.Text.A0(0x3F);
this.Text.H(Bus);this.Text.KS(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DC(But);this.CX.DM(Buu);this.CX.A_Z(2);this.CX.A_Y(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IX.
Q=[B=this.CX,B.Fq,B.Z];this.Cq.BL=[this,this.AAA];this.Cq.D1=[this,this.AAA];this.
AmA.BL=[this,this.Be2];this.AmA.D1=[this,this.Be2];this.Sh.BL=[this,this.AAB];this.
Sh.D1=[this,this.AAB];this.Anl.BL=[this,this.Bfe];this.Anl.D1=[this,this.Bfe];this.
AjE.BL=[this,this.Be4];this.AjE.D1=[this,this.Be4];this.Text.Q7([this,this.Amn]);
this.Text.S(A.aaL(A.aci.ACV));this.B6=A.aaL(A.aci.ACV);},_Done:function(){this.__proto__=
A.acn.Je;this.IX._Done();this.Cq._Done();this.AmA._Done();this.Sh._Done();this.Anl.
_Done();this.AjE._Done();this.Text._Done();this.CX._Done();A.acn.Je._Done.call(this
);},_ReInit:function(){A.acn.Je._ReInit.call(this);this.IX._ReInit();this.Cq._ReInit(
);this.AmA._ReInit();this.Sh._ReInit();this.Anl._ReInit();this.AjE._ReInit();this.
Text._ReInit();this.CX._ReInit();},_Mark:function(D){var B;A.acn.Je._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVn={Je:null,DE:function(G
){switch(this.Cq.CO){case 6:A._GetAutoObject(A.Device.Device).AuW();break;case 7:
A._GetAutoObject(A.Device.Device).Aqn();break;case 4:A._GetAutoObject(A.Device.Device
).AjC();break;case 5:A._GetAutoObject(A.Device.Device).Aqo();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A8).FB();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Je._Init.call(this.Je={I:this},0);this.__proto__=C.AVn;this.H(Ce);this.
N.Z(true);this.Dr(C.Aq0);this.Je.H(Ff);this.J(this.Je,0);this.Bb(this.Je);this.N.
CE=[this,this.Ew];this.N.C1(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Je._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Je._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Je)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUd={WE:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){A._GetAutoObject(
C.BR).Tz(A.aaR(A.acf.ACf),[this,this.Ba9]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Tz(A.aaR(A.acf.AHe),[this,this.A8q]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Tz(A.aaR(A.acf.A5S),[this,this.Ba8]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Tz(A.aaR(A.acf.UnlinkTransponder),[this,this.Bom]);}else{A._GetAutoObject(
C.BR).AaU(A.aaR(A.acf.ACf));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).AaU(
A.aaR(A.acf.AHe));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).AaU(A.aaR(A.
acf.A5S));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).AaU(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.A6f)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).Fz();this.AuI(A.aaR(A.acf.A59),[this,this.BgT
],this.OD);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(
A.acf.A6s));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Anh
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Abs:function(){return C.
ACb;},Abt:function(){return C.ADs;},Q_:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avw());},HQ:function(G){C.AkP.HQ.call(
this,G);this.N.Cw(null);this.N.Fc(A.aaR(A.acf.A5K));if(this.AJJ()){this.N.Cf=[this
,this.AIO];this.N.JA.C3(255);}else{this.N.Cf=null;this.N.JA.C3(100);}this.N.C2(A.
aaL(A.ach.Options));this.N.CR(A.jV);this.N.OQ(false);this.N.OR(false);this.N.I9.
C3(255);},ASp:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiY=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiY.toFixed(),0,null);},ASq:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6l(this);},ASv:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).PY){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.Bfg]);return;}if(A._GetAutoObject(A.Device.Device
).Arg()===false){A.zX([this,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.
Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Agi]);return;
}A.zX([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,B.SF,B.E5],0);var A4t=
!!this.OD&&!(F=this.OD,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asp(2,
A4t);},AJJ:function(){if(!this.Bg)return false;var AtM=this.Bg.AX;if(!AtM)return false;
if(!AtM.B9())return false;return true;},Al2:function(G){var B;var F;switch(A._GetAutoObject(
A.Device.Device).Gf.EN){case 0:A.z$([this,this.Al2],[B=A._GetAutoObject(A.Device.
Device).Gf,B.SF,B.E5],0);break;case 3:{if(!!this.OD&&(F=this.OD,F[1].call(F[0]))
)A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(
A.Device.Converter).S3(A._GetAutoObject(A.Device.Device).PY)===10){this.Dk(A.aaR(
A.acf.BjK));this.Bg.NP.S(A.aaL(A.fl.Bh));}else this.Dk(A.aaR(A.acf.A$d));A._GetAutoObject(
A.Device.Device).AqC();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gf.E6();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).Gf.EN);},_Init:function(aArg){C.AkP._Init.call(
this,aArg);this.__proto__=C.AUd;var B;this.Dr(C.APt);this.A98([B=A._GetAutoObject(
A.Device.Device),B.A8$,B.BbD]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADs={PC:null,I8:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PC={I:this},0);A.acg.Ap._Init.call(this.I8={I:this},0);this.__proto__=
C.ADs;this.Es.Z(false);this.DS.Z(false);this.PC.H(Buv);this.PC.L(A.jb.Text);this.
I8.H(Buw);this.I8.L(A.jb.Text);this.J(this.PC,0);this.J(this.I8,0);this.PC.Ax(A.
aaL(A.ach.AvK));this.I8.Ax(A.aaL(A.ach.AvF));},_Done:function(){this.__proto__=C.
Dd;this.PC._Done();this.I8._Done();C.Dd._Done.call(this);},_ReInit:function(){C.
Dd._ReInit.call(this);this.PC._ReInit();this.I8._ReInit();},_Mark:function(D){var
B;C.Dd._Mark.call(this,D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AM0={Init:function(aArg){var B;A.zX([this,this.AAE],[B=A._GetAutoObject(A.Device.
Device),B.AED,B.AIS],0);A.pe([this,this.AAE],this);},WE:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){if(this.AJJ())A._GetAutoObject(C.BR).Tz(A.aaR(
A.acf.AOn),[this,this.AIO]);else A._GetAutoObject(C.BR).AaU(A.aaR(A.acf.AOn));A.
_GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Tz(A.aaR(A.acf.ACd),[this,this.
Ba9]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Tz(A.aaR(A.acf.AHe),[this
,this.A8q]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Tz(A.aaR(A.acf.A5R
),[this,this.Ba8]);}else{A._GetAutoObject(C.BR).AaU(A.aaR(A.acf.AOn));A._GetAutoObject(
C.BR).Fz();A._GetAutoObject(C.BR).AaU(A.aaR(A.acf.ACd));A._GetAutoObject(C.BR).Fz(
);A._GetAutoObject(C.BR).AaU(A.aaR(A.acf.AHe));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).AaU(A.aaR(A.acf.A5R));}A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).
Mj(A.aaR(A.acf.A6f)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fz();this.AuI(A.aaR(
A.acf.A59),[this,this.BgT],this.OD);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Mj(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fz();A.
_GetAutoObject(C.BR).Mj(A.aaR(A.acf.A6s));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},Abs:function(){return C.AB9;},Abt:function(){return C.ADq;},Q_:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOJ(
));},HQ:function(G){C.AkP.HQ.call(this,G);this.N.Cw(A.aaL(A.ach.AeD));this.N.Cf=[
this,this.Adw];this.N.Fc(A.jV);this.N.C2(null);this.N.CR((A.aaR(A.acf.A5K)+String.
fromCharCode(0x0A))+A.aaR(A.acf.BhM));this.N.OQ(false);this.N.OR(false);this.N.I9.
C3(255);},ASp:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiY=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiY.toFixed(),0,null);},ASq:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6k(this);},ASv:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).PY){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.Bfg]);return;}if(A._GetAutoObject(A.Device.Device
).Arg()===false){A.zX([this,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.
Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Agi]);return;
}A.zX([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,B.SF,B.E5],0);var A4t=
!!this.OD&&!(F=this.OD,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asp(0,
A4t);},AJJ:function(){var AtM=this.Bg.AX;if(!AtM)return false;var O;for(O=0;O<AtM.
B9();O++)if(A._GetAutoObject(A.Device.Helper).Aj7(AtM.AOX(O,34))===false)return true;
return false;},Adw:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAE:function(G){if(A._GetAutoObject(A.Device.Device).Aqq===1)A.pe([this,this.
A6o],this);},Al2:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device
).Gf.EN){case 0:A.z$([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,B.SF
,B.E5],0);break;case 3:{if(!!this.OD&&(F=this.OD,F[1].call(F[0])))A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dk(A.aaR(A.acf.BhN));A._GetAutoObject(
A.Device.Device).AqC();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gf.E6();}break;default:;}},_Init:
function(aArg){C.AkP._Init.call(this,aArg);this.__proto__=C.AM0;var B;this.Dr(C.
AO2);this.A98([B=A._GetAutoObject(A.Device.Device),B.A8H,B.Bbm]);this.Init(aArg);
},_className:"Application::BirthRegistrationsListScreen"};C.AO2={DX:function(G){
C.Aev.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(11));}
,_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=C.AO2;this.Text.
R(A.aaR(A.acf.AB2));},_ReInit:function(){C.Aev._ReInit.call(this);this.Text.R(A.
aaR(A.acf.AB2));},_className:"Application::HeaderBirthRegistrationsList"};C.APt={
DX:function(G){C.Aev.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(12));},_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=C.APt;
this.Text.R(A.aaR(A.acf.AGk));},_ReInit:function(){C.Aev._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AGk));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ACb={Jo:0,AP:null,SV:null,Pb:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SV.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SV.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rj(this.
Jo));this.SV.R(A._GetAutoObject(A.acj.KM).ACX(this.Pb));},Ch:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){this.Jo=this.AX.KP(Ad,26);this.Pb=this.AX.Hv(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.SV={I:this},0);this.__proto__=C.ACb;
this.AP.H(A0h);this.AP.L(A.jb.Bc);this.SV.H(A0i);this.J(this.AP,0);this.J(this.SV
,0);this.V.S(A.aaL(A.fl.Ak));this.V.AZ(A.aaL(A.fl.Bh));this.SV.S(A.aaL(A.fl.Ak));
this.SV.AZ(A.aaL(A.fl.Bh));this.SV.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SV._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SV._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.AZ(A.aaL(A.fl.Bh));this.SV.S(A.aaL(A.fl.Ak));this.SV.AZ(A.
aaL(A.fl.Bh));this.SV.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SV)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUN={
AeW:null,AbZ:null,TR:null,KN:null,TP:null,NM:null,Tk:A.jV,Ai:function(Ae){var F;
C.SS.Ai.call(this,Ae);this.TR.L(this.V.AQ);var Apu=false;if((!this.Dl||!(F=this.
Dl,F[1].call(F[0])))&&!this.A_)Apu=true;this.TR.Z(Apu);this.Pv.Z(!Apu);this.VV.Z(
!Apu);this.Q2.Z(!Apu);this.Ym.Z(!Apu);this.P9.Z(!Apu);},Ady:function(G){var B;var
F;if(!this.Tk.length){C.SS.Ady.call(this,G);return;}var BO=this.FY;var Gv=A._GetAutoObject(
A.Device.AnM).BfT(this.Tk);this.Tk=A.jV;if(!Gv){A._GetAutoObject(A.Device.Device
).A3(101,true,A.jV,0,this.AbZ);A.pe(this.AeW,this);return;}if(this.Asm&&(Gv>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A3(102,true,A.jV,0,this.
AbZ);A.pe(this.AeW,this);return;}this.Un(((B=(Gv|0))<0)?B+0x100000000:B);if(this.
FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}if(!
!this.OI)A.pe(this.OI,this);},A3m:function(G){if(this.Tk.length<10)this.Tk=this.
Tk+String.fromCharCode(this.KN.DQ);},ASs:function(G){if((this.NM.DQ===0x0D)||(this.
NM.DQ===0x0A))this.Ady(this);else this.NM.NL=true;},ATu:function(E){if(A.aa0(this.
AeW,E))return;this.AeW=E;},ATv:function(E){if(A.aa0(this.AbZ,E))return;this.AbZ=
E;},_Init:function(aArg){C.SS._Init.call(this,aArg);A.acg.Text._Init.call(this.TR={
I:this},0);A.Core.BK._Init.call(this.KN={I:this},0);A.Core.BK._Init.call(this.TP={
I:this},0);A.Core.BK._Init.call(this.NM={I:this},0);this.__proto__=C.AUN;this.TR.
H(Bux);this.TR.Ja(true);this.TR.A6(0x12);this.TR.R(A.aaR(A.acf.A54));this.KN.Filter=
143;this.TP.Filter=149;this.NM.Filter=145;this.J(this.TR,0);this.TR.S(A.aaL(A.fl.
EK));this.KN.BL=[this,this.A3m];this.TP.BL=[this,this.BbY];this.NM.BL=[this,this.
ASs];},_Done:function(){this.__proto__=C.SS;this.TR._Done();this.KN._Done();this.
TP._Done();this.NM._Done();C.SS._Done.call(this);},_ReInit:function(){C.SS._ReInit.
call(this);this.TR._ReInit();this.KN._ReInit();this.TP._ReInit();this.NM._ReInit(
);this.TR.R(A.aaR(A.acf.A54));this.TR.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SS._Mark.call(this,D);if((B=this.AeW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUR={AeW:null,AbZ:null,KN:null
,TP:null,NM:null,Tk:A.jV,I1:function(G){var F;if(!this.Tk.length){C.Rb.I1.call(this
,G);return;}if(this.Asl)return;if(!this.Tk.length)this.TP.NL=true;var BO=this.AM;
var Gv=A._GetAutoObject(A.Device.AnM).BBN(this.Tk);this.Tk=A.jV;if(!Gv){if((this.
Tk.length<13)&&!A._GetAutoObject(A.Device.Device).PY)A._GetAutoObject(A.Device.Device
).A3(105,true,A.jV,0,this.AbZ);else A._GetAutoObject(A.Device.Device).A3(103,true
,A.jV,0,this.AbZ);A.pe(this.AeW,this);return;}this.Bx(Gv);if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OI)A.pe(this.
OI,this);},A3m:function(G){if(this.Asl)return;if(this.Tk.length<17)this.Tk=this.
Tk+String.fromCharCode(this.KN.DQ);},ASs:function(G){if((this.NM.DQ===0x0D)||(this.
NM.DQ===0x0A))this.I1(this);else this.NM.NL=true;},ATu:function(E){if(A.aa0(this.
AeW,E))return;this.AeW=E;},ATv:function(E){if(A.aa0(this.AbZ,E))return;this.AbZ=
E;},_Init:function(aArg){C.Rb._Init.call(this,aArg);A.Core.BK._Init.call(this.KN={
I:this},0);A.Core.BK._Init.call(this.TP={I:this},0);A.Core.BK._Init.call(this.NM={
I:this},0);this.__proto__=C.AUR;this.Ar2(false);this.KN.Filter=143;this.TP.Filter=
149;this.NM.Filter=145;this.KN.BL=[this,this.A3m];this.TP.BL=[this,this.Atp];this.
NM.BL=[this,this.ASs];},_Done:function(){this.__proto__=C.Rb;this.KN._Done();this.
TP._Done();this.NM._Done();C.Rb._Done.call(this);},_ReInit:function(){C.Rb._ReInit.
call(this);this.KN._ReInit();this.TP._ReInit();this.NM._ReInit();},_Mark:function(
D){var B;C.Rb._Mark.call(this,D);if((B=this.AeW)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APq={Aj3:null,Aj1:null,Gw:null,Q$:null,SP:null,C7:null,Init:function(aArg){var
B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Device),B.A83,B.AFw],0);A.pe([
this,this.DX],this);},Df:function(E){C.BQ.Df.call(this,E);this.Aj3.L(E);this.Aj1.
L(E);this.Q$.Zt(E);this.Gw.L(E);this.SP.Zt(E);},WF:function(E){this.Q$.CU(E);this.
SP.CU(E);},DX:function(G){this.Q$.T(A._GetAutoObject(A.Device.Device).Av0.toFixed(
));A.pe([this,this.BC5],this);},BC5:function(G){var Xt=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).Avw());this.SP.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bk(Xt);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},0);A.acg.Ap._Init.call(this.Aj1={
I:this},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.Q$={I:this
},0);C.D2._Init.call(this.SP={I:this},0);A.acg.C7._Init.call(this.C7={I:this},0);
this.__proto__=C.APq;this.Aj3.H(O5);this.Aj1.H(Buy);this.Gw.H(Buz);this.Gw.L(A.jb.
CT);this.Q$.A0(0x14);this.Q$.H(BuA);this.Q$.Zt(A.jb.Bm);this.Q$.CU(A.jb.Ri);this.
Q$.Hn(2);this.Q$.Bmg(0x11);this.SP.A0(0x14);this.SP.H(BuB);this.SP.Zt(A.jb.Bm);this.
SP.CU(A.jb.Ri);this.SP.Hn(2);this.C7.DC(AhX);this.C7.DM(BuC);this.C7.L(A.jb.Bc);
this.J(this.Aj3,0);this.J(this.Aj1,0);this.J(this.Gw,0);this.J(this.Q$,0);this.J(
this.SP,0);this.J(this.C7,0);this.Aj3.Ax(A.aaL(A.ach.AvE));this.Aj1.Ax(A.aaL(A.ach.
AP0));this.Gw.Ax(A.aaL(A.ach.Gw));this.Q$.S(A.aaL(A.fl.Bh));this.SP.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Aj3._Done();this.
Aj1._Done();this.Gw._Done();this.Q$._Done();this.SP._Done();this.C7._Done();C.BQ.
_Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Aj3._ReInit();
this.Aj1._ReInit();this.Gw._ReInit();this.Q$._ReInit();this.SP._ReInit();this.C7.
_ReInit();this.Q$.S(A.aaL(A.fl.Bh));this.SP.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BQ._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ART={Abg:null,Aep:null,VS:null,Init:function(aArg){this.Bb(this.Abg);},Ln:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaG];this.BP.Cf=
null;this.BP.B$=[this,this.A3p];this.BP.CR(A.jV);this.BP.Cw(null);this.BP.C1(A.aaL(
A.ach.YA));}return this.BP;},AAx:function(G){var Aa=(C.Ajk.isPrototypeOf(G)?G:null
);if(Aa===this.Abg)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aep)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(Bar);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ajk._Init.call(this.
Abg={I:this},0);C.Ajk._Init.call(this.Aep={I:this},0);C.ARX._Init.call(this.VS={
I:this},0);this.__proto__=C.ART;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.AB7));this.
Abg.H(IW);this.Abg.T(A.aaR(A.acf.AjH));this.Aep.H(Qd);this.Aep.T(A.aaR(A.acf.AGr
));this.VS.H(Aaf);this.VS.T(A.aaR(A.acf.A5C));this.J(this.Abg,0);this.J(this.Aep
,0);this.J(this.VS,0);this.Text.S(A.aaL(A.fl.Ak));this.Abg.AR=[this,this.AAx];this.
Aep.AR=[this,this.AAx];this.VS.AS_([B=A._GetAutoObject(A.Device.Device),B.AEH,B.
AIV]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Abg._Done();this.
Aep._Done();this.VS._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.
call(this);this.Abg._ReInit();this.Aep._ReInit();this.VS._ReInit();this.Text.R(A.
aaR(A.acf.AB7));this.Abg.T(A.aaR(A.acf.AjH));this.Aep.T(A.aaR(A.acf.AGr));this.VS.
T(A.aaR(A.acf.A5C));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fs._Mark.
call(this,D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aep)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ARS={AnimalTableFields:null,Ay:null,Y:
null,JR:null,CP:function(){this.AiL(this);},Init:function(aArg){A.zV([this,this.
AiL],this.AnimalTableFields,0);A.pe([this,this.AiL],this);},DE:function(G){C.Fs.
DE.call(this,G);this.MS(this);},Ln:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.CE=[this,this.Ew];this.BP.Cf=[this,this.A3n];this.BP.B$=[this,this.
A3S];this.BP.C2(A.aaL(A.ach.Arc));this.BP.Cw(A.aaL(A.ach.Aq6));this.BP.C1(A.aaL(
A.ach.YA));}return this.BP;},Ew:function(G){this.AA_();this.AaG(this);},AiL:function(
G){this.Ao3();var O;for(O=0;O<this.AnimalTableFields.M$();O=O+1){var Aan=A._GetAutoObject(
C.Ams).OG(O);this.A1s(Aan);}this.J(this.JR,0);A.aaS([this,this.MS],this);},Fk:function(
G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);
this.Ay.Mz(-this.Y.Br[1]);},MS:function(G){var B;this.Y.Vz(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},A1s:function(
Ha){var Aza=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Si,0);Aa.T(Aza.BS(Ha));Aa.Aj(true);Aa.G6=Ha;Aa.A_i(this.AnimalTableFields.NY(Ha
));this.J(Aa,0);this.ZF(Aa);},Ao3:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HP(AdM);}}
,AA_:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JR)){var Aa=(C.Si.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G6);if(Aa.ASH())this.AnimalTableFields.
AUJ(Aa.G6);}else A.ab5("%s",Ayu);}X=X.Ah;}this.AnimalTableFields.Ci();},A3n:function(
G){var B;var Aa=(C.Si.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAp=(C.Si.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAp){this.AhE(AAp,Aa);A.pe([this,this.MS],this);}}},A3S:function(
G){var B;var Aa=(C.Si.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAW=(C.Si.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAW){this.AhE(Aa,AAW);A.pe([this,this.MS],this);}}},AqJ:function(
G){var B;A._GetAutoObject(A.Device.Device).Asq(this);A.pe([this,this.AiL],this);
},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au$._Init.call(this.JR={I:this},0);
this.__proto__=C.ARS;this.H(Qc);this.Text.R(A.aaR(A.acf.AGr));this.Ay.H(It);this.
Y.H(BaX);this.Y.JV(1);this.JR.H(AIc);this.JR.Aj(true);this.JR.T(A.aaR(A.acf.A6g)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JR,0);this.Y.Em=[this,this.Fk];
this.JR.AR=[this,this.AqJ];this.AnimalTableFields=A._GetAutoObject(C.Ams);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fs;this.Ay._Done();this.Y._Done();this.
JR._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JR._ReInit();this.Text.R(A.aaR(A.acf.AGr));this.
JR.T(A.aaR(A.acf.A6g));this.CP();},_Mark:function(D){var B;C.Fs._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARR={Y:null,BZ:null,Da:null,CH:null,GQ:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UQ:null,Init:function(aArg){A.zX([this,this.AuQ],this.BZ.Q,0);A.zX([
this,this.AM5],this.CH.Q,0);A.zX([this,this.AV4],this.GQ.Q,0);A.zX([this,this.Avt
],this.Da.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fs.DE.call(this,G);this.MS(this
);},Ln:function(){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.
AaG];this.BP.Cf=null;this.BP.B$=null;this.BP.CR(A.jV);this.BP.Cw(null);this.BP.C1(
A.aaL(A.ach.YA));}return this.BP;},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(
0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},MS:function(
G){var B;this.Y.Vz(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},AuQ:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.BZ.Q,F[1].call(F[0])));},AV4:function(G){var F;A._GetAutoObject(A.Device.
Device).Nl((F=this.GQ.Q,F[1].call(F[0])));},Avt:function(G){var F;A._GetAutoObject(
A.Device.Device).JW((F=this.Da.Q,F[1].call(F[0])));},AM5:function(G){var F;A._GetAutoObject(
A.Device.Device).N2((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fs._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AaT._Init.call(this.BZ={
I:this},0);C.AaT._Init.call(this.Da={I:this},0);C.AaT._Init.call(this.CH={I:this
},0);C.AaT._Init.call(this.GQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UR._Init.call(this.UQ={I:
this},0);this.__proto__=C.ARR;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.AjH));this.
Y.H(BaX);this.Y.JV(1);this.BZ.H(Ah1);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(
A.aaR(A.acf.Aft));this.Da.H(Ayn);this.Da.Ar(true);this.Da.Aj(true);this.Da.T(A.aaR(
A.acf.Afo));this.CH.H(Aoo);this.CH.Ar(true);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.
Breed));this.GQ.H(As$);this.GQ.Ar(true);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Ji
));this.Ay.H(It);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UQ.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.Da,0);this.J(this.CH,0);this.J(
this.GQ,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.BZ.Zu(A.aaL(A.fl.H2));
this.BZ.Zv(A.aaL(A.fl.H2));this.BZ.Au([B=this.AnimalType,B.B_,B.Cb]);this.BZ.CK(
this.AnimalType);this.Da.Zu(A.aaL(A.fl.H2));this.Da.Zv(A.aaL(A.fl.H2));this.Da.Au([
B=this.Gender,B.B_,B.Cb]);this.Da.CK(this.Gender);this.CH.Zu(A.aaL(A.fl.H2));this.
CH.Zv(A.aaL(A.fl.H2));this.CH.Au([B=this.Breed,B.B_,B.Cb]);this.CH.CK(this.Breed
);this.GQ.Zu(A.aaL(A.fl.H2));this.GQ.Zv(A.aaL(A.fl.H2));this.GQ.Au([B=this.UQ,B.
B_,B.Cb]);this.GQ.CK(this.UQ);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Y._Done();this.BZ._Done();this.Da._Done();this.CH._Done();this.GQ._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UQ._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this
);this.Y._ReInit();this.BZ._ReInit();this.Da._ReInit();this.CH._ReInit();this.GQ.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UQ._ReInit();this.Text.R(A.aaR(A.acf.AjH));this.BZ.T(A.aaR(
A.acf.Aft));this.Da.T(A.aaR(A.acf.Afo));this.CH.T(A.aaR(A.acf.Breed));this.GQ.T(
A.aaR(A.acf.Ji));},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amw={CB:0,Alv:A.abi(17,0,null),OG:function(HA){return this.Alv.Get(HA);},M$:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alv.Set(
O,0);this.CB=0;},J:function(Aai){if(this.CB>=17)A.ab5("%s",BuD);else{this.Alv.Set(
this.CB,Aai);this.CB=this.CB+1;}},Ci:function(){},E3:function(Ah5){var AJ4=Ah5.indexOf(
String.fromCharCode(0x2C),0);var A1R=A.jV;var O=0;this.CB=0;while(O<17)if(Ah5===
A.jV)O++;else{if(AJ4===-1){A1R=Ah5;Ah5=A.jV;}else{A1R=A.abV(Ah5,AJ4);Ah5=A.ab1(Ah5
,0,AJ4+1);}var Aan=A.abZ(A1R,0,10)|0;if(this.Bj1(Aan)){this.Alv.Set(this.CB,Aan);
this.CB=this.CB+1;O++;}AJ4=Ah5.indexOf(String.fromCharCode(0x2C),0);}if(Ah5!==A.
jV)A.ab5("%s",BuE);},toString:function(){var B;var AAn=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAn=AAn+AIe;AAn=AAn+(((B=this.Alv.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAn;},Contains:function(Aai){var O;for(O=0;O<this.CB;O=O+1)if(this.Alv.
Get(O)===Aai)return true;return false;},Bj1:function(Aai){return true;},_Init:function(
aArg){(this.Alv=[]).__proto__=C.Amw.Alv;this.__proto__=C.Amw;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AL$={AfQ:null,Init:function(aArg){var B;A.
zX([this,this.BeX],[B=A._GetAutoObject(A.Device.Device),B.A8v,B.Bbe],0);A.zX([this
,this.BeY],[B=A._GetAutoObject(A.Device.Device),B.A8w,B.Bbf],0);A.pe([this,this.
BeX],this);A.pe([this,this.BeY],this);},Clear:function(){C.Amw.Clear.call(this);
this.AfQ.Clear();},Ci:function(){A._GetAutoObject(A.Device.Device).ArG(this.AfQ.
toString());A._GetAutoObject(A.Device.Device).ArH(this.toString());},BeX:function(
G){this.AfQ.E3(A._GetAutoObject(A.Device.Device).ABI);A.we(this,0);},BeY:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABJ);A.we(this,0);},NY:function(Aai
){return this.AfQ.Contains(Aai);},AUJ:function(Aai){if(!this.NY(Aai))this.AfQ.J(
Aai);},AOK:function(){return this.AfQ.M$();},_Init:function(aArg){C.Amw._Init.call(
this,aArg);this.__proto__=C.AL$;this.AfQ=A._NewObject(C.Amw,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amw._Mark.call(this,D);if((B=this.AfQ)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Ams={_Init:function(){C.AL$._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARX={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hn(10);},Bl:function(aSize){C.Uc.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mo.M[0]));},Ai:function(Ae){var B;C.Uc.
Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf
){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FS);this.V.L(GY);}this.LI=Hf;this.KH=Fw;this.Qv=GE;},_Init:function(
aArg){C.Uc._Init.call(this,aArg);this.__proto__=C.ARX;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AMY={YS:null,Ak_:null,Ln:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaG];this.BP.Cf=null;
this.BP.B$=null;this.BP.CR(A.jV);this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.YA));}return this.
BP;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.AaT._Init.call(this.
YS={I:this},0);C.AEd._Init.call(this.Ak_={I:this},0);this.__proto__=C.AMY;var B;
this.H(KZ);this.YS.H(KZ);this.YS.T(A.aaR(A.acf.Display));this.Ak_.Au(A._GetAutoObject(
A.Device.Device).Aqq);this.J(this.YS,0);this.YS.Zu(A.aaL(A.fl.H2));this.YS.Zv(A.
aaL(A.fl.H2));this.YS.Au([B=this.Ak_,B.B_,B.Cb]);this.YS.CK(this.Ak_);this.Ak_.Bnx([
B=A._GetAutoObject(A.Device.Device),B.AED,B.AIS]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YS._Done();this.Ak_._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YS._ReInit();this.Ak_._ReInit(
);this.YS.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak_)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEd={AbN:null,ListViewScopeToString:null,Du:function(){return 2;},C6:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BS(aIndex
);},DZ:function(A7){return A7;},H4:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbN)(F=this.AbN,F[2].call(F[0],E));},Bnx:function(E
){if(A.aaZ(this.AbN,E))return;if(!!this.AbN)A.z$([this,this.A3Y],this.AbN,0);this.
AbN=E;if(!!this.AbN)A.zX([this,this.A3Y],this.AbN,0);A.pe([this,this.A3Y],this);
},A3Y:function(G){var F;if(!!this.AbN)this.Q=(F=this.AbN,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEd;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AVm={
ACi:0,ACh:0,Ai:function(Ae){C.OX.Ai.call(this,Ae);this.Background.L(this.ACh);this.
V.L(this.ACi);},Bmn:function(E){if(this.ACi===E)return;this.ACi=E;this.Am();},Bmm:
function(E){if(this.ACh===E)return;this.ACh=E;this.Am();},_Init:function(aArg){C.
OX._Init.call(this,aArg);this.__proto__=C.AVm;this.Ar(false);this.ACi=A.jb.Text;
this.ACh=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AHo={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.Ber],[B=A._GetAutoObject(A.Device.
Device),B.A84,B.Bbx],0);A.pe([this,this.Ber],this);},Du:function(){return 3;},Gl:
function(aIndex){return this.WeightValuePrecisionToString.BS(this.C6(aIndex));},
Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwV(E);},Ber:
function(G){this.Q=A._GetAutoObject(A.Device.Device).ON;A.abo([this,this.B_,this.
Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHo;this.
Ca.Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cm;this.WeightValuePrecisionToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AUP={UE:null,A$P:A.jV,Init:function(aArg){},Bl:function(aSize){C.BW.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UE.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BW.Ai.call(this,Ae);this.UE.L(this.
V.AQ);},Bn1:function(E){if(this.A$P===E)return;this.A$P=E;this.UE.R(E);},_Init:function(
aArg){C.BW._Init.call(this,aArg);C.CG._Init.call(this.UE={I:this},0);this.__proto__=
C.AUP;this.H(AcP);this.UE.H(BuF);this.J(this.UE,0);this.UE.S(A.aaL(A.fl.Af));this.
UE.AZ(A.aaL(A.fl.Ak));this.UE.Cr(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BW;this.UE._Done();C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(
this);this.UE._ReInit();this.UE.S(A.aaL(A.fl.Af));this.UE.AZ(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BW._Mark.call(this,D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Wm={ABM:null,MassDeregistrationCriterionToString:
null,Du:function(){return 2;},Gl:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A7=this.C6(aIndex);var M1=this.MassDeregistrationCriterionToString.
BS(this.C6(aIndex));if(!!this.ABM&&!A7)M1=A._GetAutoObject(A.Device.Helper).MG(M1
,O8,(F=this.ABM,F[1].call(F[0])).toFixed());return M1;},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Wm;this.Ca.Set(
0,0);this.Ca.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.ABM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.ANS={Vl:null,Wm:null,Y9:null,JS:null
,Aub:0,AaV:100,Init:function(aArg){this.Bb(this.Y9);},Ai:function(Ae){C.Ej.Ai.call(
this,Ae);var BCC=((A.aaR(A.acf.Aqy)+A.aaR(A.acf.Colon))+CQ)+this.Aub.toFixed();this.
JS.Bn1(BCC);},CC:function(G){C.Ej.CC.call(this,G);A.zX([this,this.ABy],this.JS.Q
,0);A.pe([this,this.ABy],this);},E4:function(G){C.Ej.E4.call(this,G);A.z$([this,
this.ABy],this.JS.Q,0);},DJ:function(G){var F;C.Ej.DJ.call(this,G);this.N.Fc(A.jV
);this.N.Cf=null;if((this.AV===this.JS)&&!!this.JS.Q){this.N.B$=[this,this.Bfb];
switch((F=this.JS.Q,F[1].call(F[0]))){case 1:if(!this.Aub)this.N.GW.C3(100);else
this.N.GW.C3(255);break;case 0:{this.N.Fc(A.aaR(A.acf.Bih));this.N.Cf=[this,this.
Bzk];if(this.AaV<=1)this.N.GW.C3(100);else this.N.GW.C3(255);this.N.CR(A.aaR(A.acf.
Bii));this.N.B$=[this,this.BAh];if(this.AaV>=2147483647)this.N.GW.C3(100);else this.
N.GW.C3(255);this.N.WN=true;}break;default:throw new Error(BuG+(F=this.JS.Q,F[1].
call(F[0])).toFixed());}this.JS.Ab0(this.N.B$);}},Bfb:function(G){if(this.Aub>0)
A._GetAutoObject(A.Device.Device).A3(108,true,this.Aub.toFixed(),0,[this,this.BAP
]);},ABy:function(G){var F;this.Aub=A._GetAutoObject(A.Device.Helper).Bjo((F=this.
JS.Q,F[1].call(F[0])),this.AaV);this.Am();A.pe([this,this.ML],this);},Be7:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B9()){A._GetAutoObject(A.Device.
Device).A3(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Arg(
)===false){this.Vl=[this,this.Be7];A.zX([this,this.XG],[B=A._GetAutoObject(A.Device.
Device),B.WD,B.Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,
this.Agi]);return;}A.zX([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,
B.SF,B.E5],0);A._GetAutoObject(A.Device.Device).Asp(1,false);},Agi:function(G){var
B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);this.
Vl=null;}},XG:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.Z1===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Agi]);A.z$([this
,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);if(!!this.Vl)A.pe(this.
Vl,this);this.Vl=null;}},BAP:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BCx],this);},BCx:function(
G){A._GetAutoObject(A.Device.Helper).ByM(this.Wm.Q,this.AaV);A._GetAutoObject(A.
Device.Device).A3(109,true,this.Aub.toFixed(),0,null);A.pe([this,this.ML],this);
A.pe([this,this.ABy],this);},Al2:function(G){var B;switch(A._GetAutoObject(A.Device.
Device).Gf.EN){case 0:A.z$([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).
Gf,B.SF,B.E5],0);break;case 3:A._GetAutoObject(A.Device.Device).AqC();break;case
4:{A._GetAutoObject(A.Device.Device).A3(88,true,A.jV,0,null);A._GetAutoObject(A.
Device.Device).Gf.E6();}break;default:;}},BAh:function(G){if(this.AaV<2147483647
)this.AS5(this.AaV+1);},Bzk:function(G){if(this.AaV>1)this.AS5(this.AaV-1);},AS5:
function(E){if(this.AaV===E)return;this.AaV=E;A.pe([this,this.ABy],this);this.JS.
Am();},BkX:function(){return this.AaV;},_Init:function(aArg){C.Ej._Init.call(this
,aArg);C.Wm._Init.call(this.Wm={I:this},0);C.Co._Init.call(this.Y9={I:this},0);C.
AUP._Init.call(this.JS={I:this},0);this.__proto__=C.ANS;var B;this.Dr(C.AO4);this.
Y9.H(IW);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.A6A));this.Y9.Bi(false);this.JS.
H(BuH);this.JS.Aj(true);this.JS.T(A.aaR(A.acf.A$9));this.JS.Bi(true);this.JS.A_M(
A.aaR(A.acf.Ok));this.J(this.Y9,0);this.J(this.JS,0);this.Wm.ABM=[this,this.BkX,
this.AS5];this.Y9.AR=[this,this.Be7];this.JS.AR=[this,this.Bfb];this.JS.Ab0(this.
N.B$);this.JS.Au([B=this.Wm,B.B_,B.Cb]);this.JS.CK(this.Wm);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wm._Done();this.Y9._Done();this.JS._Done();C.
Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Wm._ReInit(
);this.Y9._ReInit();this.JS._ReInit();this.Y9.T(A.aaR(A.acf.A6A));this.JS.T(A.aaR(
A.acf.A$9));this.JS.A_M(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ej._Mark.call(
this,D);if((B=this.Vl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wm).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AO4={_Init:function(aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.AO4;this.
Text.R(A.aaR(A.acf.AdV));},_ReInit:function(){C.Kq._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdV));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANV={
Vl:null,Y8:null,AbR:null,Init:function(aArg){this.Bb(this.Y8);A.pe([this,this.ML
],this);},Be6:function(G){var B;var Az8=A._GetAutoObject(A.Device.Device).AD1();
switch(Az8){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A3(91,true,U2,0,[this,this.Bfo]);break;
case 2:{this.Vl=[this,this.Be6];A.zX([this,this.XG],[B=A._GetAutoObject(A.Device.
Device),B.WD,B.Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,
this.Agi]);}break;default:throw new Error(BaY+Az8.toFixed());}},Agi:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);this.
Vl=null;}},XG:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.Z1===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Agi]);A.z$([this
,this.XG],[B=A._GetAutoObject(A.Device.Device),B.WD,B.Xj],0);if(!!this.Vl)A.pe(this.
Vl,this);this.Vl=null;}},Bfq:function(G){var B;var Az8=A._GetAutoObject(A.Device.
Device).AD2();switch(Az8){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A3(95,true,A.jV,0,[this
,this.BAQ]);break;case 2:{this.Vl=[this,this.Bfq];A.zX([this,this.XG],[B=A._GetAutoObject(
A.Device.Device),B.WD,B.Xj],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV
,0,[this,this.Agi]);}break;case 3:A._GetAutoObject(A.Device.Device).A3(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A3(93,true,A.jV,0,null
);break;default:throw new Error(BaY+Az8.toFixed());}},Bfo:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.Bzo],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
Bzq],this);break;default:throw new Error(BuI+As.Id.toFixed());}},Bzo:function(G){
if(A._GetAutoObject(A.Device.Device).ACr()){var A2$=A._GetAutoObject(A.Device.Device
).An.QK();A._GetAutoObject(A.Device.Device).A3(80,true,A2$.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A3(82,true,A.jV,0,null);A.aaS([this,this.BAL],
this);},Bzq:function(G){if(A._GetAutoObject(A.Device.Device).AGv()){var A2$=A._GetAutoObject(
A.Device.Device).An.QK();A._GetAutoObject(A.Device.Device).A3(81,true,A2$.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A3(83,true,A.jV,0,null);A.aaS([
this,this.BBr],this);},BAQ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BCy],this);},BCy:function(
G){A._GetAutoObject(A.Device.Device).A3(92,true,U2,0,[this,this.Bfo]);},BBr:function(
G){A._GetAutoObject(A.Device.Device).A3(92,false,A.jV,0,null);},BAL:function(G){
A._GetAutoObject(A.Device.Device).A3(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ej._Init.call(this,aArg);C.Co._Init.call(this.Y8={I:this},0);C.Co._Init.call(
this.AbR={I:this},0);this.__proto__=C.ANV;this.Dr(C.AO7);this.Y8.H(IW);this.Y8.Aj(
true);this.Y8.T(A.aaR(A.acf.ACr));this.Y8.Bi(false);this.AbR.H(Qd);this.AbR.Aj(true
);this.AbR.T(A.aaR(A.acf.AGv));this.AbR.Bi(true);this.J(this.Y8,-1);this.J(this.
AbR,-1);this.Y8.AR=[this,this.Be6];this.AbR.AR=[this,this.Bfq];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ej;this.Y8._Done();this.AbR._Done();C.Ej._Done.
call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Y8._ReInit();this.AbR.
_ReInit();this.Y8.T(A.aaR(A.acf.ACr));this.AbR.T(A.aaR(A.acf.AGv));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Vl)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO7={
_Init:function(aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.AO7;this.Text.R(
A.aaR(A.acf.ACx));},_ReInit:function(){C.Kq._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACx));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.QD={LX:null
,AUj:0,AD4:false,AD0:false,AD5:false,Agg:function(G){this.A6j(this);},ATq:function(
E){if(this.LX===E)return;this.LX=E;if(!this.LX)return;this.DP.AutoActions=E;A.zV([
this,this.Bgs],this.LX,0);A.zV([this,this.AoA],this.LX,0);A.pe([this,this.Bgs],this
);A.pe([this,this.AoA],this);},AMa:function(){this.AMc(A.aaR(A.acf.Bag),[this,this.
BCO],[this,this.A8Y,this.AFn]);this.AMc(A.aaR(A.acf.AGl),[this,this.BCM],[this,this.
A8V,this.AFl]);this.AMc(A.aaR(A.acf.An1),[this,this.BCN],[this,this.A8W,this.AFm
]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Box)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).Fz();},AMc:function(Bxf,Byp,BxK){if(!this.LX
)return;this.AuI(Bxf,Byp,BxK);},BCO:function(G){this.AFn(!this.AD5);},BCM:function(
G){this.AFl(!this.AD0);},BCN:function(G){this.AFm(!this.AD4);},A4o:function(Eh,BxJ
){if(!this.LX)return;if(BxJ)this.LX.Bhn(Eh);else this.LX.BoQ(Eh);this.LX.Ci();},
A47:function(Aig,Aih,ByH){A._GetAutoObject(C.BR).ABK(Aig,Aih,[this,this.A9d,this.
ATC],ByH);},AGI:function(Eh){if(!this.LX)return;this.LX.AGI(Eh);this.LX.Ci();},AFn:
function(E){if(this.AD5===E)return;this.AD5=E;this.A4o(256,E);A.abo([this,this.A8Y
,this.AFn],0);},AFl:function(E){if(this.AD0===E)return;this.AD0=E;this.A4o(2,E);
A.abo([this,this.A8V,this.AFl],0);},AFm:function(E){if(this.AD4===E)return;this.
AD4=E;this.A4o(1,E);A.abo([this,this.A8W,this.AFm],0);},Bgs:function(G){this.AFn(
this.LX.Contains(256));this.AFl(this.LX.Contains(2));this.AFm(this.LX.Contains(1
));if(this.LX.M$()>0)this.ATC(this.LX.AC7());},ATC:function(E){if(this.AUj===E)return;
this.AUj=E;A.abo([this,this.A9d,this.ATC],0);},A8Y:function(){return this.AD5;},
A8V:function(){return this.AD0;},A8W:function(){return this.AD4;},A9d:function(){
return this.AUj;},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.QD;},_Mark:function(D){var B;C.GJ._Mark.call(this,D);if((B=this.LX)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvZ={Q:null,Ci:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADY:
function(Eh){switch(Eh){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},ID:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.ID],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.ID],E,
0);if(!!E)A.pe([this,this.ID],this);},AGI:function(Eh){if(this.M$()>0)this.Axy(this.
M$()-1,Eh);},Bhn:function(Eh){if(this.Contains(Eh))return;if(this.CB>=17){A.ab5(
"%s",AId);return;}var Az1=0;for(;(Az1<=this.M$())&&(this.OG(Az1)<Eh);Az1++);var ABd=
this.M$()-1;this.J(this.OG(ABd));for(;ABd>Az1;ABd--)this.Axy(ABd,this.OG(ABd-1));
this.Axy(Az1,Eh);},BoQ:function(Eh){var index=this.DZ(Eh);if(index<0)return;for(;
index<(this.M$()-1);index++)this.Axy(index,this.OG(index+1));this.Axy(index,0);this.
CB--;},AC7:function(){var Tg=0;if(this.M$()>0)Tg=this.OG(this.M$()-1);return Tg;
},_Init:function(aArg){C.Vy._Init.call(this,aArg);this.__proto__=C.AvZ;},_Mark:function(
D){var B;C.Vy._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Av9={_Init:function(){C.AvZ.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A88,B.BbB
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Av_={
_Init:function(){C.AvZ._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A89,B.BbC]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Ax6={_Init:function(){C.AvZ._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A9F,B.BbR]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADu={QU:null,AjX:null,_Init:function(aArg){C.Dd._Init.
call(this,aArg);C.CG._Init.call(this.QU={I:this},0);A.acg.Ap._Init.call(this.AjX={
I:this},0);this.__proto__=C.ADu;this.Es.H(BuJ);this.DS.H(BuK);this.QU.H(BuL);this.
QU.R(A.aaR(A.acf.Ui));this.QU.A6(0x11);this.QU.L(A.jb.Text);this.AjX.H(A0e);this.
AjX.L(A.jb.Text);this.J(this.QU,0);this.J(this.AjX,0);this.QU.S(A.aaL(A.fl.Af));
this.QU.AZ(A.aaL(A.fl.Ak));this.QU.Cr(A.aaL(A.fl.Bh));this.AjX.Ax(A.aaL(A.ach.AvD
));},_Done:function(){this.__proto__=C.Dd;this.QU._Done();this.AjX._Done();C.Dd.
_Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this);this.QU._ReInit();
this.AjX._ReInit();this.QU.R(A.aaR(A.acf.Ui));this.QU.S(A.aaL(A.fl.Af));this.QU.
AZ(A.aaL(A.fl.Ak));this.QU.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dd._Mark.
call(this,D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.ACa={
AP:null,SX:null,OY:null,AKx:A.jV,BeA:A.jV,Mh:0,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OY.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.OY.M[2]-1,0,this.OY.M[2]+1,aSize[1]]);this.
SX.H([this.OY.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);
this.OY.L(this.V.AQ);this.SX.L(this.V.AQ);this.T(this.AKx);this.OY.R(this.BeA);this.
SX.R(this.Mh.toFixed());},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.
AX){var Jo=this.AX.KP(Ad,26);var A23=A._GetAutoObject(A.Device.Converter).Rj(Jo);
this.AKx=A.abV(A23,A23.length-5);this.BeA=A.ab2(A23,5);if((A._GetAutoObject(A.Device.
Converter).S3(Jo)===10)&&!(Math.trunc(Jo/10000000000)%100))this.AKx=A.ab1(this.AKx
,3,2);this.Mh=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.call(
this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CG._Init.call(this.SX={I:this
},0);C.CG._Init.call(this.OY={I:this},0);this.__proto__=C.ACa;this.V.H(BuM);this.
AP.H(A0h);this.AP.L(A.jb.Bc);this.SX.H(A0i);this.OY.H(BuN);this.J(this.AP,0);this.
J(this.SX,0);this.J(this.OY,0);this.V.S(A.aaL(A.fl.Bh));this.V.AZ(A.aaL(A.fl.Bh)
);this.SX.S(A.aaL(A.fl.Ak));this.SX.AZ(A.aaL(A.fl.Bh));this.SX.Cr(A.aaL(A.fl.Bh)
);this.OY.S(A.aaL(A.fl.Af));this.OY.AZ(A.aaL(A.fl.Bh));this.OY.Cr(A.aaL(A.fl.Bh)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.SX.
_Done();this.OY._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.SX._ReInit();this.OY._ReInit();this.V.S(A.aaL(
A.fl.Bh));this.V.AZ(A.aaL(A.fl.Bh));this.SX.S(A.aaL(A.fl.Ak));this.SX.AZ(A.aaL(A.
fl.Bh));this.SX.Cr(A.aaL(A.fl.Bh));this.OY.S(A.aaL(A.fl.Af));this.OY.AZ(A.aaL(A.
fl.Bh));this.OY.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListNaisIdAnimalIdItem"
};C.APx={Q:null,Init:function(aArg){var B;this.AA4(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft]);},AEQ:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Np(FilterCriterion);var Ai5=this.Awj();if((Ai5.length>
0)&&(Ai5!==U2)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai5,0,6,false);Filter.CW(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeZ(false);},AA4:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion)Filter.Np(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,
0);if(!!E)A.pe([this,this.C4],this);},C4:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATj(A.jV);return;}var Ay3=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!Ay3){this.AW.ATj(
U2);this.AW.AeZ(true);}else this.AW.ATj(Ay3.A5);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.APx;this.AW.AwO(0);this.AW.Bnj(true);this.AW.Dj=[
this,this.AEQ];this.Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVC={FD:null,C$:null,Dm:null,EL:null,AsO:null,Init:function(aArg){var B;A.zX([
this,this.Bfy],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0C],0);A.zX([this,this.
Adx],[B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4],0);A.zX([this,this.Adx],[B=
A._GetAutoObject(A.Device.Device),B.Ul,B.U5],0);A.pe([this,this.Bfy],this);A.pe([
this,this.Adx],this);},Bfy:function(G){var AaN=false;switch(A._GetAutoObject(A.Device.
Device).An6){case 0:AaN=false;break;case 3:AaN=true;break;default:throw new Error(
BuO+A._GetAutoObject(A.Device.Device).An6.toFixed());}A._GetAutoObject(A.Device.
Helper).J2(this.C$,AaN);A._GetAutoObject(A.Device.Helper).J2(this.Dm,AaN);A._GetAutoObject(
A.Device.Helper).J2(this.EL,AaN);},Adx:function(G){var F,Ct;if(((F=this.C$.Q,F[1
].call(F[0]))+(Ct=this.Dm.Q,Ct[1].call(Ct[0])))>12)(Ct=this.Dm.Q,Ct[2].call(Ct[0
],12-(F=this.C$.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cg._Init.call(this
,aArg);C.BW._Init.call(this.FD={I:this},0);C.Ir._Init.call(this.C$={I:this},0);C.
Ir._Init.call(this.Dm={I:this},0);C.Av3._Init.call(this.EL={I:this},0);C.AVB._Init.
call(this.AsO={I:this},0);this.__proto__=C.AVC;var B;this.Jb(A.aaR(A.acf.UnlinkTransponder
));this.FD.H(U1);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqj));this.
FD.Bi(true);this.C$.H(Ali);this.C$.Aj(true);this.C$.Z(true);this.C$.T(A.aaR(A.acf.
AqE));this.C$.Bi(false);this.C$.Ga(2);this.C$.EV(6);this.C$.IR(A.aaR(A.acf.OE));
this.C$.Jc(A.aaR(A.acf.Ez));this.Dm.H(AcQ);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.
Zm));this.Dm.Bi(true);this.Dm.Ga(0);this.Dm.EV(12);this.Dm.IR(A.aaR(A.acf.OE));this.
Dm.Jc(A.aaR(A.acf.Ez));this.EL.H(Aoq);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar1(A.aaR(A.acf.Aql));this.J(this.FD,0);this.J(this.C$,0);this.
J(this.Dm,0);this.J(this.EL,0);this.FD.Au([B=this.AsO,B.B_,B.Cb]);this.FD.CK(this.
AsO);this.C$.Au([B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4]);this.Dm.Au([B=A.
_GetAutoObject(A.Device.Device),B.Ul,B.U5]);this.EL.DB(A.aaL(A.ach.AjY));this.EL.
OO([B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4]);this.EL.PU([B=A._GetAutoObject(
A.Device.Device),B.Ul,B.U5]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.FD._Done();this.C$._Done();this.Dm._Done();this.EL._Done();this.AsO._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.FD._ReInit(
);this.C$._ReInit();this.Dm._ReInit();this.EL._ReInit();this.AsO._ReInit();this.
Jb(A.aaR(A.acf.UnlinkTransponder));this.FD.T(A.aaR(A.acf.Aqj));this.C$.T(A.aaR(A.
acf.AqE));this.C$.IR(A.aaR(A.acf.OE));this.C$.Jc(A.aaR(A.acf.Ez));this.Dm.T(A.aaR(
A.acf.Zm));this.Dm.IR(A.aaR(A.acf.OE));this.Dm.Jc(A.aaR(A.acf.Ez));this.EL.Ar1(A.
aaR(A.acf.Aql));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVB={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bg1],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0C],0);A.pe([
this,this.Bg1],this);},Du:function(){return 2;},Gl:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axe(E);},Bg1:function(G){this.Q=A._GetAutoObject(A.Device.Device).An6;A.
abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVB;this.Ca.Set(0,0);this.Ca.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AML.__proto__=A.Core.Root;C.AB.__proto__=C.Abi;C.WQ.__proto__=
A.Core.P;C.Oz.__proto__=A.Core.P;C.ZC.__proto__=A.acl.Gm;C.Ek.__proto__=A.Core.P;
C.X2.__proto__=C.AB;C.AU3.__proto__=C.AB;C.AvC.__proto__=C.AB;C.Ra.__proto__=C.AB;
C.Fo.__proto__=C.Hi;C.Ay.__proto__=A.Core.P;C.Cg.__proto__=C.AB;C.Aq0.__proto__=
C.BQ;C.BQ.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADm.__proto__=C.Am0;C.AG0.
__proto__=C.DR;C.Co.__proto__=C.OX;C.Ds.__proto__=C.Eg;C.Ir.__proto__=C.Ds;C.BW.
__proto__=C.Ds;C.SS.__proto__=C.Ds;C.OL.__proto__=C.Cm;C.Rf.__proto__=C.AC;C.AVg.
__proto__=C.Ba;C.Gc.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GJ.__proto__=C.AB;C.
AB$.__proto__=C.Ba;C.Ad$.__proto__=C.AB;C.Mn.__proto__=C.Oz;C.AVb.__proto__=C.AB;
C.AqZ.__proto__=C.ADm;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUS.__proto__=C.Aco;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asu.__proto__=A.Core.P;C.AGM.__proto__=C.Ds;C.CG.__proto__=A.Core.P;C.
AjS.__proto__=C.Yu;C.Amv.__proto__=C.Re;C.AhB.__proto__=A.Core.P;C.Ej.__proto__=
C.AB;C.AT5.__proto__=C.AB;C.Mq.__proto__=C.Co;C.Anj.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abi;C.APN.__proto__=C.OverlayMenu;C.GK.__proto__=A.Core.P;C.Abi.__proto__=
A.Core.P;C.AUX.__proto__=A.acl.Aen;C.Am0.__proto__=C.BQ;C.ADn.__proto__=C.Am0;C.
Km.__proto__=C.AC;C.AUU.__proto__=C.Ds;C.AGm.__proto__=C.AB;C.HZ.__proto__=C.AB;
C.Wx.__proto__=C.Ars;C.IL.__proto__=C.ADn;C.I5.__proto__=C.AB;C.AMj.__proto__=C.
AGm;C.AMf.__proto__=C.GJ;C.ANA.__proto__=C.GJ;C.Aer.__proto__=C.Co;C.QF.__proto__=
C.Aer;C.APA.__proto__=C.BQ;C.AjT.__proto__=C.BQ;C.DF.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Gd.__proto__=C.AC;C.Afn.__proto__=C.BW;C.AUk.__proto__=C.AB;C.AbS.__proto__=
C.Co;C.Uc.__proto__=C.Co;C.ANM.__proto__=C.Cg;C.AVi.__proto__=C.Cg;C.ANZ.__proto__=
C.Cg;C.AUw.__proto__=C.Cg;C.W4.__proto__=A.Core.P;C.QX.__proto__=C.Fo;C.D2.__proto__=
A.Core.P;C.T_.__proto__=C.AB;C.AVT.__proto__=C.GJ;C.AMk.__proto__=C.Ax4;C.AVE.__proto__=
C.Cg;C.AeQ.__proto__=C.AC;C.Ax4.__proto__=C.AB;C.AV2.__proto__=C.Cg;C.AUT.__proto__=
C.Aco;C.ABG.__proto__=A.Graphics.Hz;C.Aqf.__proto__=C.AB;C.ARO.__proto__=A.Core.
P;C.Fs.__proto__=C.OverlayMenu;C.AaT.__proto__=C.BW;C.Ajk.__proto__=C.Co;C.AL3.__proto__=
C.Fs;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL9.__proto__=C.Vy;C.AL_.
__proto__=C.Fs;C.Si.__proto__=C.Uc;C.AMQ.__proto__=C.Vy;C.Wo.__proto__=C.Fo;C.Vv.
__proto__=A.Core.P;C.Ky.__proto__=A.Core.P;C.ASa.__proto__=C.HZ;C.AUn.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANB.__proto__=C.Amv;C.Hi.__proto__=A.
Core.P;C.AVV.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa3.
__proto__=C.Gd;C.AxW.__proto__=C.ABG;C.AT0.__proto__=C.OverlayMenu;C.AOE.__proto__=
A.Core.P;C.N4.__proto__=A.Core.P;C.AT1.__proto__=A.Core.P;C.AUW.__proto__=A.acl.
Aen;C.AkV.__proto__=C.Ir;C.Amx.__proto__=C.OverlayMenu;C.ACc.__proto__=C.Ba;C.Yv.
__proto__=C.AjT;C.AqI.__proto__=C.HZ;C.Acn.__proto__=C.Ds;C.WeightRecordingScope.
__proto__=C.AC;C.AuN.__proto__=C.AB;C.AUV.__proto__=C.Ir;C.AMh.__proto__=C.AB;C.
Ars.__proto__=C.HZ;C.AHj.__proto__=A.Core.P;C.AVY.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeS.__proto__=C.Eg;C.Av4.__proto__=C.AeS;C.SetTransponderScreen.__proto__=
C.Ra;C.ADv.__proto__=C.EB;C.AHn.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mi.__proto__=C.Ra;C.AL1.__proto__=C.Mi;C.ManualActionScanScreen.__proto__=C.Mi;
C.AL2.__proto__=A.Core.P;C.APE.__proto__=C.Dd;C.ADt.__proto__=C.Dd;C.TY.__proto__=
C.Dd;C.APG.__proto__=C.Dd;C.ANf.__proto__=C.Ba;C.M6.__proto__=C.Ba;C.ANd.__proto__=
C.Ba;C.Jt.__proto__=A.Core.P;C.ANc.__proto__=C.Ba;C.AmZ.__proto__=C.TI;C.AGc.__proto__=
C.Axo;C.AkI.__proto__=C.Axo;C.ZB.__proto__=C.AkI;C.ANI.__proto__=C.OX;C.OX.__proto__=
C.Hi;C.APJ.__proto__=C.EB;C.DS.__proto__=A.Core.P;C.AM$.__proto__=C.AjD;C.ADp.__proto__=
C.TZ;C.Kl.__proto__=A.Core.P;C.AmH.__proto__=C.Mq;C.AO1.__proto__=C.Kr;C.AutoRegistrationMode.
__proto__=C.AC;C.APK.__proto__=C.EB;C.TC.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMv.__proto__=C.R1;C.AMJ.__proto__=C.Aa0;C.AME.__proto__=C.Aa0;C.AUm.__proto__=
C.Ba;C.API.__proto__=C.EB;C.AMy.__proto__=C.Aa0;C.IH.__proto__=C.I4;C.RU.__proto__=
C.FA;C.RZ.__proto__=C.FA;C.TB.__proto__=C.JM;C.QE.__proto__=C.FA;C.TA.__proto__=
C.JM;C.AMg.__proto__=C.Aqf;C.ARb.__proto__=C.Cg;C.Aa0.__proto__=C.D9;C.Kk.__proto__=
C.Cm;C.ARK.__proto__=C.Cg;C.AMt.__proto__=C.K$;C.AMu.__proto__=C.D9;C.AMr.__proto__=
C.K$;C.AMs.__proto__=C.K$;C.WS.__proto__=C.Eg;C.AUQ.__proto__=C.WS;C.R0.__proto__=
C.FA;C.APz.__proto__=C.IL;C.ANC.__proto__=C.AB;C.ANj.__proto__=C.Ad$;C.AMe.__proto__=
C.I5;C.AVS.__proto__=C.I5;C.AO3.__proto__=C.Kr;C.APB.__proto__=C.Kr;C.APF.__proto__=
C.TZ;C.ANe.__proto__=C.AjD;C.TZ.__proto__=C.Dd;C.Aqt.__proto__=A.acv.ACm;C.AjD.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AM2.__proto__=C.DR;C.O2.__proto__=C.DR;C.AqX.__proto__=
A.Core.P;C.AMA.__proto__=C.Gc;C.AUq.__proto__=A.Core.P;C.K$.__proto__=C.D9;C.ANJ.
__proto__=C.Cg;C.Au$.__proto__=C.Co;C.ADj.__proto__=C.BQ;C.ADk.__proto__=C.BQ;C.
FA.__proto__=C.JM;C.AOH.__proto__=C.GJ;C.AOG.__proto__=C.I5;C.APf.__proto__=C.Kr;
C.ADr.__proto__=C.Dd;C.AB_.__proto__=C.Ba;C.AUl.__proto__=C.AhB;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASm.
__proto__=C.QD;C.ASl.__proto__=C.I5;C.ADl.__proto__=C.Kr;C.ABT.__proto__=C.Gd;C.
AL6.__proto__=C.Fs;C.AMi.__proto__=C.AuN;C.NewAnimalSetTransponderScreen.__proto__=
C.Asz;C.C8.__proto__=C.AC;C.O1.__proto__=A.Core.P;C.RW.__proto__=C.FA;C.RX.__proto__=
C.FA;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARV.__proto__=C.OverlayMenu;
C.VS.__proto__=C.Uc;C.Av3.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.TC;
C.AnimalMultiInfoScreen.__proto__=C.TC;C.AMx.__proto__=C.OverlayMenu;C.I_.__proto__=
A.Core.P;C.AL5.__proto__=C.GJ;C.AL4.__proto__=C.I5;C.APy.__proto__=C.IL;C.AsJ.__proto__=
C.O1;C.Arb.__proto__=C.O1;C.Au7.__proto__=C.AC;C.AMp.__proto__=C.AC;C.AGL.__proto__=
C.Eg;C.G5.__proto__=A.Core.P;C.ARe.__proto__=C.HL;C.AVJ.__proto__=C.X2;C.AR8.__proto__=
C.Wx;C.ADU.__proto__=C.Lg;C.HL.__proto__=C.G5;C.Lg.__proto__=C.G5;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvT.__proto__=C.HL;C.AUO.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asz;C.ReasonOfLeaving.__proto__=C.AC;C.OU.__proto__=C.BW;C.AeV.__proto__=
C.El;C.AR1.__proto__=C.El;C.AR0.__proto__=C.El;C.El.__proto__=A.Core.P;C.Rb.__proto__=
C.Eg;C.ARf.__proto__=C.Lg;C.AvS.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.FC.
__proto__=C.AB;C.AOg.__proto__=C.AB;C.AOj.__proto__=C.FC;C.AOk.__proto__=C.FC;C.
AqL.__proto__=C.FC;C.Abu.__proto__=C.AjS;C.Kr.__proto__=C.AjS;C.AvA.__proto__=C.
Abu;C.APd.__proto__=C.Abu;C.APc.__proto__=C.Abu;C.APb.__proto__=C.BQ;C.Aey.__proto__=
C.EB;C.AmP.__proto__=C.Ba;C.Ajs.__proto__=C.IH;C.ACM.__proto__=A.Core.P;C.AkS.__proto__=
A.Core.P;C.Re.__proto__=C.AB;C.AVh.__proto__=C.Re;C.APe.__proto__=C.BQ;C.Dd.__proto__=
C.EB;C.Kq.__proto__=C.BQ;C.AO9.__proto__=C.Kq;C.AO$.__proto__=C.Kq;C.Yp.__proto__=
C.AmP;C.Agz.__proto__=C.Hi;C.AN5.__proto__=C.GJ;C.AN4.__proto__=C.I5;C.APa.__proto__=
C.Kr;C.Abp.__proto__=C.Acn;C.AjK.__proto__=C.QF;C.AB4.__proto__=C.QF;C.APD.__proto__=
C.Dd;C.ANb.__proto__=C.Ba;C.RY.__proto__=C.FA;C.AMq.__proto__=C.FA;C.ANX.__proto__=
C.Ej;C.ANY.__proto__=C.Ej;C.AO_.__proto__=C.Kq;C.Nh.__proto__=C.AbS;C.ANT.__proto__=
C.Ej;C.AO5.__proto__=C.Kq;C.PQ.__proto__=C.Co;C.Sj.__proto__=C.AB;C.AOh.__proto__=
C.Sj;C.AOi.__proto__=C.Sj;C.AOl.__proto__=C.AqL;C.AOe.__proto__=C.FC;C.AaZ.__proto__=
C.IH;C.Po.__proto__=C.IH;C.AMC.__proto__=C.Amx;C.ARI.__proto__=C.T_;C.ARH.__proto__=
C.T_;C.ASh.__proto__=C.QD;C.ASg.__proto__=C.I5;C.APs.__proto__=C.Kr;C.AkP.__proto__=
C.GJ;C.AUx.__proto__=C.I5;C.Aev.__proto__=C.Yu;C.AB9.__proto__=C.Ba;C.ADq.__proto__=
C.Dd;C.APu.__proto__=C.BQ;C.Aa2.__proto__=C.NI;C.XV.__proto__=C.NI;C.R1.__proto__=
C.D9;C.XW.__proto__=C.R1;C.XT.__proto__=C.IG;C.AaX.__proto__=C.IG;C.XS.__proto__=
C.IG;C.AaW.__proto__=C.IG;C.AMz.__proto__=C.AB;C.IG.__proto__=C.I4;C.I4.__proto__=
C.Hi;C.NI.__proto__=C.FA;C.Axn.__proto__=C.ZB;C.ANH.__proto__=C.AmH;C.Axp.__proto__=
C.ZB;C.AUb.__proto__=C.Cg;C.AT$.__proto__=C.El;C.ARc.__proto__=C.Lg;C.AUa.__proto__=
C.El;C.NewMenu.__proto__=C.AB;C.AR9.__proto__=C.HZ;C.AMB.__proto__=C.Amx;C.AMR.__proto__=
C.Vy;C.JM.__proto__=C.I4;C.APw.__proto__=C.Yv;C.Abo.__proto__=C.Cm;C.APH.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Mi;C.APv.__proto__=C.AqZ;C.Jh.__proto__=A.Core.
P;C.APr.__proto__=C.BQ;C.SetSaveNaisIdScreen.__proto__=C.Ra;C.AN6.__proto__=C.AqI;
C.UQ.__proto__=C.Cm;C.UR.__proto__=C.UQ;C.AcK.__proto__=C.UQ;C.AdW.__proto__=C.AC;
C.AGK.__proto__=C.Eg;C.ANW.__proto__=C.Ej;C.AO8.__proto__=C.Kq;C.ANU.__proto__=C.
Ej;C.AO6.__proto__=C.Kq;C.Aq1.__proto__=C.TY;C.APC.__proto__=C.TY;C.Aqu.__proto__=
C.M6;C.ANa.__proto__=C.M6;C.AR2.__proto__=C.AeV;C.Yu.__proto__=C.BQ;C.Aco.__proto__=
C.BW;C.FK.__proto__=C.AC;C.AMF.__proto__=C.FK;C.AMG.__proto__=C.FK;C.AMm.__proto__=
C.I5;C.TI.__proto__=C.BW;C.AR$.__proto__=C.AB;C.Asz.__proto__=C.SetTransponderScreen;
C.ADV.__proto__=C.HL;C.AsA.__proto__=C.OU;C.AxA.__proto__=C.OU;C.Acr.__proto__=C.
Cm;C.AV8.__proto__=C.QD;C.AV7.__proto__=C.I5;C.ARg.__proto__=A.Core.P;C.ARd.__proto__=
C.HL;C.ACR.__proto__=C.Abp;C.LY.__proto__=A.Core.P;C.AUv.__proto__=C.Cg;C.AUu.__proto__=
C.Cg;C.AVz.__proto__=C.Cg;C.Afs.__proto__=C.Cm;C.Je.__proto__=A.acn.Je;C.AVn.__proto__=
C.AB;C.AUd.__proto__=C.AkP;C.ADs.__proto__=C.Dd;C.AM0.__proto__=C.AkP;C.AO2.__proto__=
C.Aev;C.APt.__proto__=C.Aev;C.ACb.__proto__=C.Ba;C.AUN.__proto__=C.SS;C.AUR.__proto__=
C.Rb;C.APq.__proto__=C.BQ;C.ART.__proto__=C.Fs;C.ARS.__proto__=C.Fs;C.ARR.__proto__=
C.Fs;C.AL$.__proto__=C.Amw;C.ARX.__proto__=C.Uc;C.AMY.__proto__=C.OverlayMenu;C.
AEd.__proto__=C.AC;C.AVm.__proto__=C.OX;C.AHo.__proto__=C.Cm;C.AUP.__proto__=C.BW;
C.Wm.__proto__=C.Cm;C.ANS.__proto__=C.Ej;C.AO4.__proto__=C.Kq;C.ANV.__proto__=C.
Ej;C.AO7.__proto__=C.Kq;C.QD.__proto__=C.GJ;C.AvZ.__proto__=C.Vy;C.ADu.__proto__=
C.Dd;C.ACa.__proto__=C.Ba;C.APx.__proto__=C.AjT;C.AVC.__proto__=C.Cg;C.AVB.__proto__=
C.Cm;};C._ReInit=function(){var B;if((B=C.AxE._this))B._ReInit(),C.AxE._ReInit.call(
B);if((B=C.AxF._this))B._ReInit(),C.AxF._ReInit.call(B);if((B=C.A8._this))B._ReInit(
),C.A8._ReInit.call(B);if((B=C.Pn._this))B._ReInit(),C.Pn._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afj._this
))B._ReInit(),C.Afj._ReInit.call(B);if((B=C.BR._this))B._ReInit(),C.BR._ReInit.call(
B);if((B=C.WJ._this))B._ReInit(),C.WJ._ReInit.call(B);if((B=C.AsB._this))B._ReInit(
),C.AsB._ReInit.call(B);if((B=C.AnW._this))B._ReInit(),C.AnW._ReInit.call(B);if((
B=C.DP._this))B._ReInit(),C.DP._ReInit.call(B);if((B=C.AuV._this))B._ReInit(),C.
AuV._ReInit.call(B);if((B=C.Ams._this))B._ReInit(),C.Ams._ReInit.call(B);if((B=C.
Av9._this))B._ReInit(),C.Av9._ReInit.call(B);if((B=C.Av_._this))B._ReInit(),C.Av_.
_ReInit.call(B);if((B=C.Ax6._this))B._ReInit(),C.Ax6._ReInit.call(B);};C.DH=function(
D){var B;if((B=C.AxE._this)&&(B._cycle!=D))B._Done(C.AxE._this=null);if((B=C.AxF.
_this)&&(B._cycle!=D))B._Done(C.AxF._this=null);if((B=C.A8._this)&&(B._cycle!=D)
)B._Done(C.A8._this=null);if((B=C.Pn._this)&&(B._cycle!=D))B._Done(C.Pn._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afj._this)&&(B._cycle!=D))B._Done(C.Afj._this=null);if((B=C.BR._this)&&(B._cycle
!=D))B._Done(C.BR._this=null);if((B=C.WJ._this)&&(B._cycle!=D))B._Done(C.WJ._this=
null);if((B=C.AsB._this)&&(B._cycle!=D))B._Done(C.AsB._this=null);if((B=C.AnW._this
)&&(B._cycle!=D))B._Done(C.AnW._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(
C.DP._this=null);if((B=C.AuV._this)&&(B._cycle!=D))B._Done(C.AuV._this=null);if((
B=C.Ams._this)&&(B._cycle!=D))B._Done(C.Ams._this=null);if((B=C.Av9._this)&&(B._cycle
!=D))B._Done(C.Av9._this=null);if((B=C.Av_._this)&&(B._cycle!=D))B._Done(C.Av_._this=
null);if((B=C.Ax6._this)&&(B._cycle!=D))B._Done(C.Ax6._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */