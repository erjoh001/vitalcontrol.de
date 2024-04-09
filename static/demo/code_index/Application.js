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
var Ce=[0,0,240,320];var BD=[0,0,240,40];var E6=[0,0,20,30];var Hr=[6,21,14,25];var
IU=[6,15,14,19];var Is=[6,9,14,13];var O4=[209,7,229,37];var P_=[0,40,240,320];var
P$=[0,228,240,298];var CQ=" ";var Ff=[0,40,240,280];var L3=[0,40,232,280];var Qa=[
0,40,116,160];var J3=[114,40,230,160];var Ob=[0,160,116,280];var Qb=[116,160,232
,280];var MJ=[0,280,116,400];var S_=[116,280,232,400];var US=[0,400,116,520];var
Z3=[116,400,232,520];var W5=[-1,520,115,640];var It=[232,40,240,280];var UT=[5,40
,235,120];var Z4=[120,140,210,230];var W6=[20,140,110,230];var Z5=[0,0,116,120];
var W7=[0,0,120,120];var Z6=[0,0,116,45];var Z7=[0,0,8,200];var UU=[0,0,8,20];var
W8=[30,0,210,40];var O5=[0,0,40,40];var Z8=[7,8,200,40];var O6=[0,0,200,40];var Rn=[
6,1];var W9="ERROR: Invalid value for ItemHighlighting";var W_=[10,10,40,30];var
UV=[0,0,120,40];var Z9=[60,0,180,40];var Z_=[120,0,240,40];var W$=[0,0,100,40];var
Xa=[83,0,157,40];var S$=[140,0,240,40];var UW=[0,0,20,40];var UX=[220,0,240,40];
var AcM=[0,0,300,30];var Ta=[0,30,300,60];var Z$=[0,60,300,90];var AfB=[0,90,300
,120];var Aaa=[0,100,300,110];var Xb=[0,50,300,60];var Aab=[0,30,300,40];var Xc=
"*";var AhX=[40,40];var KZ=[0,0,240,80];var AcN=[0,0,240,50];var Lw="Cap";var AhY=[
0,40,40,80];var Aoe=[200,40,240,80];var Oc=[30,40,210,80];var Xd="--";var Aac="%d";
var AfC="%m";var AhZ="%Y";var AcO=" (";var UY=[0,0,232,80];var Aof="Date";var Aog=[
48,40,88,78];var Aoh=[39,40,79,80];var Aoi=[80,44,87,77];var Alc=".";var AsX=[88
,44,120,77];var Ax7=[120,44,127,77];var Ax8=[127,44,191,77];var O7=[0,0,80,40];var
Ro="Text";var Ax9=[430,102,430,102];var UZ=[0,0,240,240];var AsY=[232,0,240,240];
var Ax_=[0,10,240,240];var Ax$="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Aya="Unhandled option";
var Aoj=[0,80,240,280];var AfD="Unhandled animal list action";var Aok="Animal list content not handled.";
var IV=[0,40,240,80];var Aol="Set Selected";var AsZ=" %%";var Xe=[0,180,240,220];
var As0=[82,127,167,150];var As1="Group";var As2=[77,91,167,124];var Aom=[0,0,90
,33];var As3=[4,4,18,29];var Ald=[20,4,34,29];var Ayb=[36,4,50,29];var Ayc=[52,4
,66,29];var Ayd=[68,4,82,29];var As4="ERROR: Unhandled Device::SyncState";var Aye=
":\n";var O8="{1}";var Ayf="{2}";var AV9=[0,49,240,109];var AV_=[0,170,240,243];
var AV$=[0,110,240,170];var AWa=[20,243,220,268];var AHq=[30,8];var AHr="\u2265 ";
var AfE=[0,0,240,160];var Aon=[0,0,0,0];var AWb=[0,0,240,66];var AHs=[10,0,76,66
];var Ale=[33,33];var AHt=[87,0,153,66];var AHu=[164,0,230,66];var AWc="No statistics available";
var AWd="in this environment.";var AHv=" fps";var AWe="CPU: - %%";var AcP=[0,0,240
,120];var AWf=[130,0,237,20];var AWg=[20,0,120,20];var AWh=[0,20,240,40];var AHw=[
40,20,100,40];var As5=[100,20,240,40];var AHx=[0,40,240,60];var AHy=[40,40,100,60
];var Ayg=[100,40,240,60];var AHz=[0,60,50,80];var Ayh=[100,60,240,80];var AWi=[
0,80,50,100];var AWj=[100,80,240,100];var AWk=[0,100,50,120];var AWl=[100,100,240
,120];var AHA=[5,5,15,15];var AWm="%H";var MK="%M";var Ayi="Time";var AWn=[79,40
,119,78];var AWo=[125,40,164,80];var AWp=[86,40,126,80];var AWq=":";var AWr=[75,
40,115,80];var AHB=[0,0,240,150];var AWs=[60,0,155,40];var Ayj=[30,0,65,40];var As6=[
60,0,100,40];var Ayk=[88,0,128,40];var AWt=[60,0,71,40];var AWu=[60,0,74,40];var
AHC=[90,0,123,40];var AWv=[120,0,161,40];var AHD=[120,0,165,40];var AHE=[60,0,88
,40];var AHF=[60,0,95,40];var AWw="Did not expect iterator bigger than number of records";
var AHG=[20,0,240,20];var AWx=[0,38,240,40];var AWy=[0,0,8,4];var Qc=[0,0,240,280
];var Xf=[0,280,240,320];var AWz="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWA="]";var AWB="ERROR: Cannot find closing bracket \'}\' in text [";var AWC=
"] opened at index ";var AWD="#";var AWE="ERROR: Invalid parameter: {";var AWF="}";
var Ah0=[20,20];var AHH=[0,12];var AWG="ERROR: Not expected Application::FooterFocus, ";
var AWH="%M:%S";var AHI=[30,150,207,170];var AHJ=[20,70,217,194];var Ayl="Unhandled item.";
var Qd=[0,80,240,120];var AWI="Unhandled Overlay Menu ";var AWJ="Invalid bootloader message: ";
var AWK="Unknown USBState: ";var As7="Invalid fader";var AWL=[2,4,32,40];var AWM=[
29,4,80,40];var AWN=[120,4,200,40];var AWO=[80,0,114,40];var AWP="-1";var AWQ="< ";
var As8=[0,0,232,40];var AWR=[22,40,180,80];var AWS=[2,40,22,80];var AWT=[23,40,
163,80];var AWU=[210,40,230,80];var AWV=[164,40,210,80];var AWW=[169,43,205,77];
var AWX="ERROR: No outlet assigned";var AWY="Unhandled screen";var AWZ="ERROR: Cannot cache null screen.";
var AW0="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHK="Untreated Rating Method type!";var Alf="Unhandled animal type";var AW1=[
5,60,235,140];var AW2=[0,130,240,196];var AW3=[49,240,229,280];var Aym="Implement in derived classes!";
var Alg="Implement in derived class";var Ah1=[0,40,230,120];var Ayn=[0,120,230,200
];var Aoo=[0,200,230,280];var Ah2=[0,280,230,360];var AW4=[0,360,230,440];var Ayo=[
230,40,238,280];var AHL="WARNING: Unhandled filter field: ";var AfF="Should not happen.";
var AHM="Invalid Boolean item";var Aad=[0,120,240,160];var Alh=[0,160,240,200];var
Aop=[0,200,240,240];var AW5=[1152,11,1392,51];var AW6=[1152,51,1392,91];var AW7=[
1152,91,1392,131];var AW8=[1152,131,1392,171];var AW9=[1152,171,1392,211];var As9=[
0,240,240,280];var AHN=[10,0,240,40];var AHO=[190,0,230,40];var AW_=[60,3,95,39];
var AW$=[95,4,200,40];var AXa=[3,3];var AXb=[6,6];var AXc=[59,5,197,35];var AXd=[
59,2,200,38];var AXe=[3,2,43,42];var AXf=[0,17,43,40];var AXg=[50,40];var AXh=[50
,0];var AXi="Illegal shifting direction";var Ayp=[0,0,160,30];var AHP=[0,0,25,30
];var AHQ=[27,0,52,30];var AHR=[54,0,79,30];var AHS=[81,0,106,30];var AHT=[108,0
,133,30];var AHU=[135,0,160,30];var AXj="Internal queue error";var AXk="ERROR: No corresponding Id ";
var AXl=" found.";var AXm="ERROR: Error in range test";var AXn=[120,67,210,157];
var AXo=[0,40,240,70];var AXp=[20,67,110,157];var Ayq=[0,160,240,280];var AHV=[20
,77,90,147];var AXq=[0,0,210,40];var AHW=[195,0,235,40];var Ah3=[0,40,232,120];var
U0=[0,120,232,200];var AXr=[0,40,232,200];var Aae=[0,200,232,280];var AXs=[0,320
,240,400];var AXt=[0,120,53,200];var Ali=[0,280,232,360];var AfG="%%";var AcQ=[0
,360,232,440];var Aoq=[0,440,232,520];var AXu=[0,80,207,120];var O9=")";var AHX=
"/";var AHY=[5,0,88,30];var AXv=[88,0,240,30];var AHZ="276000312345678";var AH0=[
5,30,100,60];var AH1=[100,30,240,60];var AXw="Manufacturer";var AXx="Country";var
AXy=[5,60,240,90];var AXz="Niedersachsen";var AXA=[5,90,145,120];var AXB=[140,90
,240,120];var AXC="Protocol";var AXD=[0,0,120,100];var AH2=[0,40,116,120];var AXE=[
40,80,92,107];var AH3=[0,0,50,23];var AH4="ERROR: Unhandled Device::MeasureState";
var Ayr=[0,120,240,280];var AXF=[178,159,248,203];var AXG=[10,145,170,225];var AXH=[
0,61,240,101];var AXI=[0,0,40,23];var AXJ=[101,113,141,136];var AH5=[101,235,141
,258];var AXK=[69,288,101,313];var AXL=[0,40,240,200];var As_=[0,200,240,280];var
As$=[0,280,240,360];var AH6="\u2264 ";var AXM=[0,80,94,160];var AXN=[94,80,184,160
];var AXO=[184,80,240,160];var AXP=[197,105,231,139];var AXQ=[105,101,173,127];var
AXR=[7,101,75,127];var AXS=[94,125,184,151];var AXT=[2,125,92,151];var AXU=[0,70
,240,101];var AH7=[0,106,240,280];var AXV=[30,40,240,70];var Ays=[0,40,30,70];var
AH8="\u278B";var AXW=[0,0,240,175];var AXX=[0,0,232,175];var AXY=[232,0,240,175];
var AXZ="Text Here !";var AX0=[200,0,240,40];var AH9="1";var AH_="2";var AH$="3";
var AIa="4";var Ayt=[0,360,232,400];var Ayu="ERROR: invalid item class.";var AIb=[
10,220,250,260];var AX1=[185,0,225,40];var AIc="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AX2="ERROR: Received more actions than expected!";var AId=", ";var AX3=
"ERROR: Cannot set action at position=";var AX4=". Current elements:";var AX5=", max elements:";
var AX6="17";var AX7=[0,0,58,58];var AX8=[0,0,60,60];var AX9=[30,0,58,20];var AX_=[
7,6,25,24];var AX$=[30,60,130,160];var AYa=[0,0,28,20];var AYb=[4,3,40,24];var AYc=[
0,0,42,27];var Ayv=[0,0,17,17];var AYd="Unknown direction of counting enum value: ";
var AYe="Unknown id generation method enum value: ";var Ayw="Invalid animal id generation method: ";
var Ata="Unhandled popup id";var U1="0";var Atb=";";var AYf=[0,400,230,480];var AYg=[
5,120,235,200];var AYh=[0,640,230,760];var AIe=[0,0,300,200];var AYi=[20,40,220,
80];var AIf=[20,80,220,280];var AYj=[140,0,188,40];var AYk="ERROR: Row containing birth weight could not be loaded";
var AYl=[0,440,230,520];var Atc="ID";var AYm=[40,40,198,70];var AYn="Extra info: ";
var AIg=" -";var AYo=[0,0,230,120];var AYp=[0,0,230,40];var AYq=[0,80,230,120];var
AYr="\xB0Brix";var AcR=[0,320,230,400];var AYs=[0,410,230,490];var AYt="ERROR: aNumberOfDays can not be < 0 ";
var AYu="{WEIGHTGAIN} ";var AYv="\xB1";var AIh="+";var AYw="{WEIGHTGAIN}";var AYx=
"{DAYS}";var AYy="ERROR: aString can not be null";var AYz=[166,70,240,114];var AYA=[
0,60,160,120];var AYB=[30,0,240,60];var AIi=[1,6,29,54];var AYC=[30,60,240,120];
var AYD="Con";var AYE=[70,50,170,70];var AIj="Unhandled Device::NaisIdValidationResult: ";
var AIk="Unhandled PopupId";var AYF=[110,123,230,248];var AYG=[5,0,250,40];var AYH=[
102,0,186,40];var AYI=[153,0,240,40];var Rp="-";var Atd=[170,0,240,40];var AIl=[
220,0,320,30];var AIm=[200,20,300,50];var Aor=[180,0,180,40];var Aos=[170,0,170,
40];var Ayx="Untreated state";var AYJ="ERROR: Animal id scanned in an unexpected state : ";
var AIn="ERROR: Null animal id scanned.";var AYK=[40,40,235,100];var AYL=[120,100
,210,190];var AYM=[20,100,110,190];var AYN=[0,40,40,100];var AYO="\u278A";var AYP=
"Action untreated";var AYQ="ERROR: No corresponding ";var AYR=" action found!";var
AYS="Unhandled action: ";var AYT=[0,190,240,220];var AYU=[0,220,232,280];var AYV=[
5,190,235,270];var AYW=[232,60];var AYX=[0,2];var AYY=[58,58];var AYZ="A";var AY0=[
56,0,156,40];var Aot=[156,0,240,40];var AIo=" 7 ";var AY1=[40,0,156,40];var AIp=
"/-1/-2";var AIq=[72,0,144,40];var AcS="\n";var AIr="(";var AY2=[72,0,156,40];var
AIs="%y/%m";var AY3=[70,0,240,40];var Ayy=[70,0,120,40];var AY4=[160,0,245,40];var
AY5="- ";var Ayz=" - ";var AY6="{parc}{clr3}";var AY7="{clr0}/^{clr2}";var AY8="{clr0}/^{clr1}";
var AIt=[0,0,85,40];var Aou="?";var AIu=[0,0,120,140];var AY9=[0,0,116,40];var AIv=[
15,0,100,40];var AIw=[110,0,200,40];var Alj=[0,0,34,34];var AY_=[129,0,157,40];var
Aov=[0,0,25,25];var AY$="\u2611";var AIx="\u2610";var AIy=[5,0,72,40];var AIz=[150
,0,240,40];var AZa=[72,0,139,40];var AyA="Unvalid content class: ";var AZb=[0,320
,240,360];var AZc=[0,360,240,400];var AZd=[144,0,170,40];var AZe=[187,0,213,40];
var AZf=[207,10,233,50];var AZg=[247,20,273,60];var AZh=[140,0,150,100];var AZi=[
165,0,175,100];var AZj=[185,0,195,100];var AZk=[205,0,215,100];var AZl=[211,0,233
,40];var AZm=[189,0,211,40];var AZn=[167,0,189,40];var AZo=[145,0,167,40];var AIA=[
5,0,240,40];var Aaf=[10,0,10,40];var AZp="= \u2211 ";var AyB=[125,0,240,40];var AZq=[
130,0,170,40];var AZr="\xD8 ";var Aow=[100,10,116,36];var AZs=[117,10,133,36];var
AZt=[135,10,151,36];var AZu="Implement in derieved class";var Ate=[0,80,240,240];
var Atf=[0,120,232,160];var Atg=[0,160,232,200];var Ath=[0,200,232,240];var AyC=[
0,240,232,280];var Alk=[0,320,232,360];var Ati=[-61,360,232,400];var AZv=[0,400,
32,440];var AZw=[0,100];var AZx=[0,40,240,240];var AZy=[0,50000];var AZz=[0,500];
var AZA=[0,0,240,105];var AZB=[0,105,240,210];var AZC=[0,40,240,81];var AZD=[0,81
,240,122];var AZE=[0,122,240,163];var AZF=[0,163,240,205];var AZG=[0,205,240,240
];var AZH=[0,200];var AZI=[0,40,240,73];var AyD=[0,0,30,40];var AZJ=[0,40,30,80];
var AyE=[60,40];var Atj=[60,0];var AZK=[10,0,40,40];var AIB=[0,190,240,260];var AZL=[
0,130,240,190];var AIC=[40,40,200,130];var AID=[90,230,170,253];var AZM=[80,190,
170,223];var AZN=[0,130,240,180];var AZO=[0,250,240,280];var AZP=[129,0,156,40];
var AZQ=[72,0,100,40];var AZR=[100,0,129,40];var AZS=[78,8,103,33];var AIE=[0,0,
300,120];var AZT=[1,-1];var AZU=[20,40,240,120];var AZV=[20,0,240,40];var AZW=[0
,118,240,120];var AZX=[0,20,130,40];var AZY=[130,20,240,40];var AZZ=[0,0,10,20];
var AIF="\u2191";var AZ0=[230,0,240,20];var Atk=[0,40,232,80];var AZ1=[0,80,232,
160];var AZ2=[0,160,230,240];var AIG=" p. p.";var AZ3="Unknown animal type";var AZ4=[
80,0,140,40];var Bra=[50,0,172,40];var Brb=[172,0,240,40];var Brc=[0,90,240,92];
var Bam="Unhandled menu item";var Ban=[0,0,50,30];var Atl=[0,0,30,30];var Brd="No AnimalActionTemperatureScreen found!";
var Bre="840003123456789";var Brf=[40,0,230,40];var Brg=[50,10,230,30];var AZ5="No AnimalMultiInfoScreen found!";
var AIH=[0,0,25,40];var Bao="/^";var Bap="?/?";var Brh=[100,4,180,40];var Bri=[65
,0,99,40];var Brj=[165,0,200,40];var Baq=[0,0,60,40];var Bar="9999/^9999";var Brk=
"Invalid index: ";var Brl="Unknown AnimalIdGenerationMethod: ";var Brm="Invalid gender: ";
var Atm="Invalid input state: ";var Brn="Unhandled AnimalIdGenerationMethod";var
Bro=[42,35,67,75];var Brp=[5,35,39,75];var Brq=[70,40,228,70];var Brr="Invalid direction for setting focus";
var Ah4="Invalid index";var Brs="Unvalid direction";var Brt=[0,0,42,30];var Bas=[
22,0,42,30];var Bru=[20,0,40,30];var Brv=[0,0,158,30];var Bat=[32,0,62,30];var Bau=[
64,0,94,30];var Bav=[96,0,126,30];var Brw=[128,0,158,30];var Brx=" %% ";var Bry=[
0,70,240,220];var Brz=[0,237,240,307];var Baw="\n44 %% done";var BrA=[0,0,166,30
];var AII=[0,0,12,30];var AyF=[14,0,26,30];var AZ6=[28,0,40,30];var AZ7=[42,0,54
,30];var AZ8=[56,0,68,30];var AZ9=[70,0,82,30];var AZ_=[84,0,96,30];var AZ$=[98,
0,110,30];var Bax=[112,0,124,30];var A0a=[126,0,138,30];var BrB=[140,0,152,30];var
BrC=[154,0,166,30];var Bay=[20,0,46,30];var BrD="\u2642";var BrE="{fnt3}\u2642{fnt1}";
var BrF="\u2640";var BrG="{fnt3}\u2640{fnt1}";var BrH="{parc}";var BrI=[30,30,210
,80];var BrJ="Implement in derieved class!";var BrK=[60,4,226,34];var Baz=[30,4,
58,34];var BaA=[4,0,27,40];var BrL=[116,4,228,34];var BrM=[60,4,86,34];var BrN=[
88,4,114,34];var Aox="Implement in derived class!";var BaB="Implement in derived class.";
var BrO="Invalid nais id view: ";var BrP=[0,35,240,75];var BrQ=[0,0,110,30];var BrR=[
0,0,26,30];var BrS="100";var A0b="\n\n";var BrT=[240,240];var BrU=[0,240];var BrV=
"Unknown rated attribute: ";var BrW=[120,80,240,280];var BrX=[0,80,120,280];var AIJ=
" %% (";var AyG=" \xB1 ";var AyH=" (n = ";var A0c=[0,80,232,120];var BrY=[0,242,
232,282];var A0d=[0,280,232,320];var BrZ=[35,0,200,40];var Br0=[1,0,31,40];var Br1=[
32,40];var Br2=[32,0];var Br3=[3,0,83,40];var BaC=[180,0,240,40];var Br4=[120,0,
180,40];var Br5=[65,0,125,40];var Br6=[0,0,120,200];var Br7=[0,40,120,150];var BaD=[
15,160,60,190];var BaE=[60,160,105,190];var Br8=[0,65,240,135];var Br9=[10,112,170
,192];var Br_=[178,129,248,173];var Br$=[0,40,240,110];var Bsa=[10,98,170,178];var
Bsb=[178,112,248,156];var Bsc=[85,190,160,265];var Bsd=[89,194,155,260];var Bse=[
26,190,111,250];var Bsf=[125,181,225,211];var Bsg=[100,220,183,250];var Bsh="38.7";
var Bsi=[180,220,225,250];var Bsj="\xB0C";var Bsk=[0,99,240,178];var Bsl=[100,280
,140,320];var Bsm=[0,26,240,105];var BaF=[30,40];var BaG=[30,0];var Bsn=[149,0,200
,40];var Bso=[145,40];var Bsp=[145,0];var Bsq=[38,0,88,40];var A0e=[0,0,35,40];var
Bsr=[0,0,50,40];var Bss=[40,0,200,40];var Bst=[95,0,145,40];var Bsu=[65,5,223,35
];var A0f=[0,0,15,40];var Bsv=[72,0,140,40];var BaH="\n(";var Bsw="%y/%m/%d";var
Bsx="%y ";var Bsy=" %m ";var Bsz=" %d ";var BsA="20";var BsB=[225,0,240,40];var BsC=[
0,400,232,440];var BsD=[0,440,232,480];var BsE=[0,480,232,520];var BsF=[0,520,232
,560];var BsG=[0,560,232,600];var BsH=[0,598,232,638];var BsI=[5,0,215,40];var BsJ=[
215,8,240,33];var BsK="Implement in dervied class.";var BsL="ERROR: Unhandled temperature unit: ";
var AIK="ERROR: Unhandled mass unit: ";var BsM=[-1,160,115,280];var BsN=[114,160
,230,280];var A0g=[116,40,232,160];var AyI="Unknown weight class index: ";var BsO=
"< 35";var BsP="35 - 40";var BsQ="40 - 45";var BsR="45 - 50";var BsS="\u2265 50";
var BsT="< 80";var BsU="80 - 90";var BsV="90 - 100";var BsW="100 - 110";var BsX=
"\u2265 110";var BaI="Unknown mass unit";var BsY=[143,0,193,40];var BaJ=[192,0,240
,40];var BsZ=[44,28,44,28];var Bs0="0 %%";var Bs1=[-1,40,115,160];var Bs2=[117,40
,233,160];var Bs3=[1,160,117,280];var Bs4=[114,158,230,278];var Bs5=[1,280,117,400
];var Bs6=[30,0,155,40];var BaK="\u2620";var A0h=[380,150,380,190];var BaL=[105,
0,155,50];var A0i=[190,1,240,41];var Bs7=[72,0,108,40];var Bs8=[108,0,180,40];var
Bs9=[60,0,94,40];var Bs_=[94,0,200,40];var Bs$="Scroll direction not supported.";
var Bta=[44,0,207,40];var Btb=[207,0,240,40];var Btc="99";var Btd="Unknown birth type";
var Bte=[44,0,189,40];var Btf=[5,0,44,40];var Btg=[44,0,240,40];var Bth=[240,0,240
,40];var Bti="\u25C9";var BaM="\u25CB";var Btj=[75,4,215,34];var Btk=[47,4,73,34
];var BaN=[17,4,45,34];var Btl=[0,0,138,30];var Btm=[47,4,215,34];var A0j="Unhandled MotherSelectionFilterMode: ";
var Btn="Read only!";var Bto="actions array too small to hold all actions";var Btp=[
120,40];var Btq=[120,0];var Btr=[5,0,115,40];var Bts=[0,0,205,40];var Btt=[59,4,
170,34];var Btu=[59,1,173,37];var Btv=[175,1,205,37];var Btw=[0,0,37,40];var Btx=[
115,98,205,188];var Bty=[0,40,235,100];var Btz=[2,200,240,280];var BtA=" 01234";
var BtB=[0,0];var BtC=[33,63];var BtD=[25,56];var BtE="Unknown transponder image type: ";
var AIL=[0,0,82,82];var BtF=[0,0,81,26];var BtG=[105,120,195,210];var BtH=[10,140
,100,230];var BaO="Unhandled EartagNrAssignmentMode: ";var BtI="Unhandled Gender";
var BtJ=[10,35,35,75];var BtK=[44,40,202,70];var BtL=[204,35,232,75];var BtM="Unvalid FatoryResetScope";
var BaP=[0,120,240,200];var BtN=[144,0,192,40];var BtO=[144,0,240,40];var BtP=[195
,0,245,50];var BtQ=[120,0,120,40];var BtR=[140,0,240,30];var BtS=[30,0,232,40];var
BtT=[60,0,160,40];var BtU=[160,0,200,40];var BtV=[150,17,200,40];var BtW=[155,40
];var BtX=[155,0];var BtY=[146,80,240,160];var BtZ=[56,80,146,160];var Bt0=[0,80
,56,160];var Bt1=[13,107,47,141];var Bt2=[74,109,104,139];var Bt3=[50,100,130,150
];var Bt4=[55,112,145,140];var Bt5=[146,112,236,140];var Bt6=[150,86,223,110];var
AIM=[0,40,240,120];var Bt7="Menu item for animal table field not found";var BaQ=[
0,360,240,440];var Bt8=[0,440,240,520];var Bt9=[5,40,235,104];var Bt_=[120,108,226
,218];var Bt$=[20,120,110,210];var Bua=[5,223,235,280];var Bub=[0,0,64,30];var Buc=[
44,0,64,30];var Bud=[185,5,225,35];var Bue=[170,5,234,35];var Buf="Unhandled number of digits";
var Bug=[0,0,126,30];var Buh=[22,5,149,35];var Bui=[149,0,232,40];var BaR=[5,20];
var Buj=[5,0];var Buk="Unhandled AnimalIdAutoGenerationMethod: ";var Bul=[4,440,
236,520];var Bum="Unhandled TransponderAssignmentIdChangeMethod: ";var Bun="\n";
var Buo="%";var Bup=[0,0,160,120];var Buq=[2,2,157,117];var Bur=[50,70];var Bus=[
50,50];var But=[0,0,168,40];var Buu=[168,0,240,40];var Buv=[0,47,232,77];var Buw=[
65,0,101,40];var Bux=[135,0,175,40];var Buy=[85,17,135,40];var Buz=[125,17,175,40
];var BuA=[40,0];var BaS=[0,40,230,280];var BuB="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuC="ERROR: Received more animal table fields than expected!";
var BuD=[0,80,240,130];var BuE="Unhandled Device::MassDeregistrationCriterion: ";
var BuF=[0,80,240,200];var BaT="Unhandled BackupError: ";var BuG="Unhandled PopupId: ";
var BuH=[203,0,240,40];var BuI=[168,0,203,40];var BuJ=[35,0,152,40];var BuK=[0,0
,84,40];var BuL=[84,0,167,40];var BuM="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMM={Device:null,A6d:null,GK:null,Init:function(aArg){},DriveCursorHitting:function(
Tc,BF,Fh){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GK._Init.call(this.
GK={I:this},0);this.__proto__=C.AMM;this.H(Ce);this.J(this.GK,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A6d=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J4=
this._variants();if(J4){this.K={};J4._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GK._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GK.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A6d)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A5l._variants();
},K:null,_className:"Application::Application"};C.Asx=[240,320];C.AB={Background:
null,Ek:null,ADd:null,An7:0,Init:function(aArg){A.pe([this,this.A0S],this);A.pe([
this,this.Be6],this);},LO:function(G){},A0S:function(s){this.LO(s);},CC:function(
G){},AIO:function(s){this.CC(s);},E4:function(G){},AyJ:function(s){this.E4(s);},
Dr:function(E){if(this.ADd===E)return;this.ADd=E;A.pe([this,this.Be6],this);},Be6:
function(G){var B;if(!!this.ADd)this.Ek.Ab2((C.BQ.isPrototypeOf(B=A._NewObject(this.
ADd,0))?B:null));else this.Ek.Ab2(null);},_Init:function(aArg){C.Abh._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ek._Init.call(this.
Ek={I:this},0);this.__proto__=C.AB;this.Background.AZ(0x3F);this.Background.H(Ce
);this.Background.L(A.jb.CS);this.Ek.H(BD);this.Ek.Ar(false);this.J(this.Background
,-1);this.J(this.Ek,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abh;this.
Background._Done();this.Ek._Done();C.Abh._Done.call(this);},_ReInit:function(){C.
Abh._ReInit.call(this);this.Background._ReInit();this.Ek._ReInit();},_Mark:function(
D){var B;C.Abh._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WM={Ii:null,Zn:function(E){var B;if(this.Ii===E)return;if(!!this.Ii)this.AqF(
this.Ii,null,null,null,[B=this.Ii,B.AyJ],null,false);this.Ii=E;if(!!this.Ii)this.
AkM(this.Ii,null,null,null,null,null,null,[B=this.Ii,B.AIO],null,false);},AEz:function(
){return this.Ii;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WM;this.H([0,0,C.Asx[0],C.Asx[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Ii)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Oy={U8:null,Q:null,AnL:null,ZA:null,NT:null,Ow:null,TF:null,TG:null,AGi:255,
IC:function(G){var F;if(!!this.Q){this.A2n();var Ada=(F=this.Q,F[1].call(F[0]));
if(Ada>20)this.Ow.L(A.jb.E1);else this.Ow.L(A.jb.Gj);this.Ow.L((this.Ow.AQ&0x00FFFFFF
)|(this.AlL(Ada,0,30)<<24));this.TF.L((this.TF.AQ&0x00FFFFFF)|(this.AlL(Ada,31,60
)<<24));this.TG.L((this.TG.AQ&0x00FFFFFF)|(this.AlL(Ada,61,100)<<24));}},A0Q:function(
s){this.IC(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0Q],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0Q],E,0);if(!!E)A.pe([this,
this.A0Q],this);},A3C:function(G){var F;if(!!this.AnL)this.ZA.Ar((F=this.AnL,F[1
].call(F[0])));else this.ZA.Ar(false);this.A_y(255);},A_q:function(E){if(A.aaZ(this.
AnL,E))return;if(!!this.AnL)A.z$([this,this.A3C],this.AnL,0);this.AnL=E;if(!!E)A.
zX([this,this.A3C],E,0);if(!!E)A.pe([this,this.A3C],this);},A_y:function(E){if(this.
AGi===E)return;this.AGi=E;if(!!this.U8)this.U8.L((this.U8.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlL:function(A0W,Bch,BxU){if(A0W<Bch)return 0;else if((A0W>=Bch)&&(A0W<
BxU))return this.AGi&0xFF;else return 255;},A2n:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.U8=this.TG;else if((F=this.Q,F[1].call(F[0]))>
30)this.U8=this.TF;else this.U8=this.Ow;}else this.U8=null;},Blx:function(){return this.
AGi;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZA._Init.call(this.ZA={
I:this},0);A.acg.Ap._Init.call(this.NT={I:this},0);A.acg.AL._Init.call(this.Ow={
I:this},0);A.acg.AL._Init.call(this.TF={I:this},0);A.acg.AL._Init.call(this.TG={
I:this},0);this.__proto__=C.Oy;this.H(E6);this.ZA.Fr(2000);this.NT.H(E6);this.NT.
L(A.jb.Text);this.Ow.H(Hr);this.Ow.L(A.jb.E1);this.TF.H(IU);this.TF.L(A.jb.E1);this.
TG.H(Is);this.TG.L(A.jb.E1);this.J(this.NT,0);this.J(this.Ow,0);this.J(this.TF,0
);this.J(this.TG,0);this.ZA.Q=[this,this.Blx,this.A_y];this.NT.Ax(A.aaL(A.ach.AMX
));},_Done:function(){this.__proto__=A.Core.P;this.ZA._Done();this.NT._Done();this.
Ow._Done();this.TF._Done();this.TG._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZA._ReInit();this.NT._ReInit();this.Ow._ReInit(
);this.TF._ReInit();this.TG._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.U8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnL)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZA={_Init:function(aArg){A.acl.Gm._Init.call(
this,aArg);this.__proto__=C.ZA;this.AkY=true;this.B2=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ek={GK:null,AR:null,Background:null,Oy:null,Bo:
null,Dn:null,K8:0,Avp:0,Avq:0,Ao2:0,LI:false,KG:false,Qv:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hf){this.Ao2=A.jb.CS;this.K8=A.jb.Text;}else if(GE){this.Ao2=
this.Avp;this.K8=this.Avq;}else if(Fw){this.Ao2=this.Avp;this.K8=this.Avq;}else{
this.Ao2=A.jb.CS;this.K8=A.jb.Text;}this.Background.L(this.Ao2);if(!!this.GK){this.
GK.WC(this.Ao2);this.GK.Df(this.K8);}this.LI=Hf;this.KG=Fw;this.Qv=GE;},Qu:function(
G){this.Am();A.pe(this.AR,this);},AiR:function(G){if(this.Dn.Ach)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},Ab2:function(
E){if(this.GK===E)return;if(!!this.GK)this.HO(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.Am();},A9$:function(E){if(this.Avp===E)return;this.
Avp=E;this.Am();},A_a:function(E){if(this.Avq===E)return;this.Avq=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.Oy._Init.call(this.Oy={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=C.Ek;var B;this.
H(BD);this.Background.AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.CS);
this.Oy.H(O4);this.K8=A.jb.Text;this.Bo.PV(0);this.Bo.WD(50);this.Dn.Filter=1;this.
Avp=A.jb.AV;this.Avq=A.jb.Bm;this.Ao2=A.jb.Text;this.J(this.Background,0);this.J(
this.Oy,0);this.Oy.Au([B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyK]);this.Oy.
A_q([B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyL]);this.Bo.MC=[this,this.Qu];
this.Dn.BL=[this,this.AiR];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.Oy._Done();this.Bo._Done();this.Dn._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
Oy._ReInit();this.Bo._ReInit();this.Dn._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Oy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X0={AeO:null,UC:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeO={I:this},0);A.acg.Text._Init.call(this.UC={I:
this},0);this.__proto__=C.X0;this.AeO.H(P_);this.UC.H(P$);this.UC.R(A.jV);this.UC.
L(A.jb.Text);this.UC.Z(false);this.J(this.AeO,0);this.J(this.UC,0);this.AeO.Ax(null
);this.UC.S(A.aaL(A.fl.EK));var J4=this._variants();if(J4){this.K={};J4._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeO._Done();this.UC._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeO._ReInit();this.UC._ReInit();this.UC.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acs.
X0._variants();},K:null,_className:"Application::BootScreen"};C.AU4={AAF:function(
G){A._GetAutoObject(C.A8).Ab9(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AU4;this.Background.L(0xFF000000);this.Ek.Z(false);},_className:
"Application::SleepScreen"};C.AvC={DY:null,Y:null,Ya:null,Yb:null,VI:null,X3:null
,VJ:null,X1:null,X6:null,TK:null,X5:null,Yc:null,Ay:null,CP:function(){this.DJ(this
);},Init:function(aArg){var B;A.zX([this,this.DJ],[B=A._GetAutoObject(A.Device.Device
),B.Arw,B.Atn],0);A._GetAutoObject(A.Device.Helper).AkQ();this.Bb(this.VI);this.
N.Cw(A.aaL(A.ach.ADJ));A.pe([this,this.DJ],this);},Bb:function(E){var B;var A3b=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A3b)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AJ2=A._NewObject(A.acl.AGf,0);AJ2.Fr(250);AJ2.HN(1);AJ2.WF(6);this.
Y.HI(this.AV,true,AJ2,null);}},CC:function(G){this.A4H(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Asr();},Fk:function(G){
var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.
Ay.Mz(-this.Y.Br[1]);},Ig:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VI)A._GetAutoObject(C.A8).Cd(35);else if(Cy===this.X3)A._GetAutoObject(
C.A8).Cd(34);else if(Cy===this.X6)A._GetAutoObject(C.A8).Cd(69);else if(Cy===this.
VJ)A._GetAutoObject(C.A8).Cd(8);else if(Cy===this.X1)A._GetAutoObject(C.A8).Cd(50
);else if(Cy===this.TK)A._GetAutoObject(C.A8).Cd(25);else if(Cy===this.Ya)A._GetAutoObject(
C.A8).Cd(77);else if(Cy===this.Yb)A._GetAutoObject(C.A8).Cd(70);else if(Cy===this.
Yc)A._GetAutoObject(C.A8).Cd(6);else if(Cy===this.X5)A._GetAutoObject(C.A8).Cd(63
);},BA5:function(G){A._GetAutoObject(A.Device.Device).Ae2(!A._GetAutoObject(A.Device.
Device).AmS);},DJ:function(G){if(A._GetAutoObject(A.Device.Device).AmS)this.N.Hy((
A.aaR(A.acf.A7E)+CQ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hy((A.aaR(A.acf.
A7E)+CQ)+A.aaR(A.acf.A8j).toLowerCase());},Adw:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A4H:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).Mt());this.VJ.Zw(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fo._Init.call(this.Ya={I:this
},0);C.Fo._Init.call(this.Yb={I:this},0);C.Fo._Init.call(this.VI={I:this},0);C.Fo.
_Init.call(this.X3={I:this},0);C.QX._Init.call(this.VJ={I:this},0);C.Fo._Init.call(
this.X1={I:this},0);C.Fo._Init.call(this.X6={I:this},0);C.Fo._Init.call(this.TK={
I:this},0);C.Fo._Init.call(this.X5={I:this},0);C.Fo._Init.call(this.Yc={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AvC;this.Background.L(A.
jb.CS);this.N.Ar(false);this.N.Z(true);this.Dr(C.Aq0);this.DY.AZ(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Y.H(L3);this.Y.JT(9);this.Ya.H(Qa);this.Ya.Aj(true);
this.Ya.T(A.aaR(A.acf.Gr));this.Yb.H(J3);this.Yb.Aj(true);this.Yb.T(A.aaR(A.acf.
A72));this.VI.H(Ob);this.VI.Aj(true);this.VI.T(A.aaR(A.acf.Vv));this.X3.H(Qb);this.
X3.Aj(true);this.X3.T(A.aaR(A.acf.Tx));this.VJ.H(MJ);this.VJ.Aj(true);this.VJ.T(
A.aaR(A.acf.APM));this.X1.H(S_);this.X1.Aj(true);this.X1.T(A.aaR(A.acf.Animal));
this.X6.H(J3);this.X6.Aj(true);this.X6.T(A.aaR(A.acf.A7H));this.TK.H(US);this.TK.
Ar(true);this.TK.Aj(true);this.TK.Z(true);this.TK.T(A.aaR(A.acf.A6s));this.X5.H(
Z3);this.X5.Aj(true);this.X5.T(A.aaR(A.acf.Device));this.Yc.H(W5);this.Yc.Aj(true
);this.Yc.T(A.aaR(A.acf.Settings));this.Ay.H(It);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.Ya,0);this.J(this.Yb,0);this.J(this.VI,0);this.J(this.X3,0);this.
J(this.VJ,0);this.J(this.X1,0);this.J(this.X6,0);this.J(this.TK,0);this.J(this.X5
,0);this.J(this.Yc,0);this.J(this.Ay,0);this.N.CE=[this,this.BA5];this.N.Cf=[this
,this.Adw];this.Y.Em=[this,this.Fk];this.Ya.AR=[this,this.Ig];this.Ya.DB(A.aaL(A.
ach.ADM));this.Yb.AR=[this,this.Ig];this.Yb.DB(A.aaL(A.ach.ADP));this.VI.AR=[this
,this.Ig];this.VI.DB(A.aaL(A.ach.APR));this.X3.AR=[this,this.Ig];this.X3.DB(A.aaL(
A.ach.AP4));this.VJ.AR=[this,this.Ig];this.VJ.DB(A.aaL(A.ach.AQr));this.X1.AR=[this
,this.Ig];this.X1.DB(A.aaL(A.ach.APV));this.X6.AR=[this,this.Ig];this.X6.DB(A.aaL(
A.ach.AQB));this.TK.AR=[this,this.Ig];this.TK.DB(A.aaL(A.ach.AQg));this.X5.AR=[this
,this.Ig];this.X5.DB(A.aaL(A.ach.AQd));this.Yc.AR=[this,this.Ig];this.Yc.DB(A.aaL(
A.ach.AQV));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.Ya._Done();this.Yb._Done();this.VI._Done();this.X3._Done();
this.VJ._Done();this.X1._Done();this.X6._Done();this.TK._Done();this.X5._Done();
this.Yc._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ya._ReInit();this.Yb.
_ReInit();this.VI._ReInit();this.X3._ReInit();this.VJ._ReInit();this.X1._ReInit(
);this.X6._ReInit();this.TK._ReInit();this.X5._ReInit();this.Yc._ReInit();this.Ay.
_ReInit();this.Ya.T(A.aaR(A.acf.Gr));this.Yb.T(A.aaR(A.acf.A72));this.VI.T(A.aaR(
A.acf.Vv));this.X3.T(A.aaR(A.acf.Tx));this.VJ.T(A.aaR(A.acf.APM));this.X1.T(A.aaR(
A.acf.Animal));this.X6.T(A.aaR(A.acf.A7H));this.TK.T(A.aaR(A.acf.A6s));this.X5.T(
A.aaR(A.acf.Device));this.Yc.T(A.aaR(A.acf.Settings));this.CP();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Ra={Number:null,Jg:null,IT:null,TD:null,AsN:0,Init:function(aArg){var B;A.zX([
this,this.BbV],[B=A._GetAutoObject(A.Device.Device),B.ASU,B.A0w],0);A.pe([this,this.
BbV],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An8();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhM();},E4:function(G){A._GetAutoObject(A.Device.
Device).An0();},Al6:function(G){var F;this.Am();this.TD.Ar(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aeo.Ar(true);if(!this.TD.Bw)(F=this.TD.Q,F[2].call(F[0],this.TD.
B2));},BbV:function(s){this.Al6(s);},An8:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gj);break;case 3:this.Background.
L(A.jb.H8);break;default:this.Background.L(A.jb.CJ);}},AkG:function(E){if(this.AsN===
E)return;this.AsN=E;this.Jg.AkG(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jg._Init.call(this.Jg={I:this}
,0);A.acg.Ap._Init.call(this.IT={I:this},0);A.acl.Gm._Init.call(this.TD={I:this}
,0);this.__proto__=C.Ra;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(UT);this.Number.KS(true);this.Number.L(A.jb.Text);this.Jg.H(Z4);this.Jg.AkG(0);
this.IT.H(W6);this.IT.L(A.jb.AV);this.IT.Zp(true);this.TD.Fr(1750);this.TD.Uo(750
);this.TD.AkB(0);this.TD.Ar(true);this.TD.B2=3;this.J(this.Number,0);this.J(this.
Jg,0);this.J(this.IT,0);this.Number.S(A.aaL(A.fl.Af));this.IT.Ax(A.aaL(A.ach.ADO
));this.TD.Q=[B=this.IT,B.ASH,B.Cv];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jg._Done();this.IT._Done();this.TD._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jg._ReInit();this.IT._ReInit();this.TD._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fo={C9:null,ADA:null,AR:null,Bo:null,Dn:null,Background:
null,Ms:null,OE:null,Q3:null,G_:null,A5M:true,LI:false,KG:false,Qv:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hi.Bl.call(this,aSize);this.Ms.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q3.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OE.H(this.Q3.M);this.G_.H([].concat(0,this.G_.M.slice(1,4)));this.G_.H(A.abN(
this.G_.M,aSize[0]));this.G_.H(A.abP(this.G_.M,0));this.G_.H([].concat(this.G_.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hi.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hf){this.Q3.L(A.jb.Am4);this.
G_.L(A.jb.CJ);this.OE.Z(true);this.OE.L(A.jb.ARb);this.Ms.Z(false);}else if(GE){
this.Q3.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OE.Z(false);this.Ms.Z(true);}else if(
Fw){this.Q3.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OE.Z(false);this.Ms.Z(true);}else{
this.Q3.L(A.jb.Text);this.G_.L(A.jb.Text);this.OE.Z(true);this.OE.L(A.jb.CS);this.
Ms.Z(false);}this.LI=Hf;this.KG=Fw;this.Qv=GE;},Qu:function(G){this.Am();A.pe(this.
AR,this);},AiR:function(G){if(this.Dn.Ach)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);},T:function(E){if(this.DK===E)return;
this.DK=E;this.G_.R(E);},DB:function(E){if(this.C9===E)return;this.C9=E;this.Q3.
Ax(E);this.OE.Ax(E);},Ab1:function(E){if(this.A5M===E)return;this.A5M=E;this.G_.
Z(E);},Ab4:function(E){if(this.ADA===E)return;this.ADA=E;this.Ms.Ax(E);this.Ms.H(
A.abK(this.Ms.M,E.FrameSize));},_Init:function(aArg){C.Hi._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BK._Init.call(this.Dn={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Ms={
I:this},0);A.acg.Ap._Init.call(this.OE={I:this},0);A.acg.Ap._Init.call(this.Q3={
I:this},0);C.CH._Init.call(this.G_={I:this},0);this.__proto__=C.Fo;this.H(Z5);this.
Bo.PV(0);this.Bo.WD(50);this.Dn.Filter=1;this.Background.H(W7);this.Background.Z(
false);this.Ms.AZ(0x14);this.Ms.L(A.jb.AV);this.Ms.Cv(0);this.OE.L(A.jb.CS);this.
OE.Cv(1);this.G_.H(Z6);this.J(this.Background,0);this.J(this.Ms,0);this.J(this.OE
,0);this.J(this.Q3,0);this.J(this.G_,0);this.Bo.MC=[this,this.Qu];this.Dn.BL=[this
,this.AiR];this.Ms.Ax(A.aaL(A.ach.NW));this.OE.Ax(A.aaL(A.ach.AvO));this.Q3.Ax(A.
aaL(A.ach.AvO));this.G_.S(A.aaL(A.fl.Af));this.G_.A2(A.aaL(A.fl.Ak));this.G_.Cu(
A.aaL(A.fl.Bh));this.ADA=A.aaL(A.ach.NW);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hi;this.Bo._Done();this.Dn._Done();this.Background._Done();this.Ms._Done(
);this.OE._Done();this.Q3._Done();this.G_._Done();C.Hi._Done.call(this);},_ReInit:
function(){C.Hi._ReInit.call(this);this.Bo._ReInit();this.Dn._ReInit();this.Background.
_ReInit();this.Ms._ReInit();this.OE._ReInit();this.Q3._ReInit();this.G_._ReInit(
);this.G_.S(A.aaL(A.fl.Af));this.G_.A2(A.aaL(A.fl.Ak));this.G_.Cu(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.C9)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axk:null,Background:null,O0:null,Asi:0,Ak9:10,AjF:100,AQ:0,AoV:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O0.H([].concat(2,this.O0.M.slice(1,4)));this.O0.H(A.abN(this.O0.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var Af6=this.Ak9<this.AjF;var AJA=(
B=this.M)[3]-B[1];var A20=10;var Auu=AJA;var A4E=0;if(10>AJA)A20=AJA;if(this.Ak9<
this.AjF)Auu=((Auu*this.Ak9)/this.AjF)|0;if(Auu<A20)Auu=A20;if(this.Ak9<this.AjF
)A4E=((this.Blv()*(AJA-Auu))/(this.AjF-this.Ak9))|0;this.O0.H(A.abP(this.O0.M,A4E
));this.O0.H([].concat(this.O0.M.slice(0,3),A4E+Auu));this.O0.Z(Af6);this.Background.
Z(Af6);if(!!this.Axk&&(this.AoV!==Af6))A.pe(this.Axk,this);this.AoV=Af6;},Blv:function(
){var E=this.Asi;var HD=this.AjF-this.Ak9;if((HD>0)&&(E>HD))E=HD;if(HD<=0)E=0;return E;
},Mz:function(E){if(E<0)E=0;if(this.Asi===E)return;this.Asi=E;this.Am();},MB:function(
E){if(E<0)E=0;if(this.Ak9===E)return;this.Ak9=E;this.Am();},My:function(E){if(E<
0)E=0;if(this.AjF===E)return;this.AjF=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.O0.L(E);},BnE:function(E){if(A.aa0(this.Axk,E))return;this.
Axk=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.O0={I:this},0);this.__proto__=
C.Ay;this.H(Z7);this.Ar(false);this.AQ=A.jb.AV;this.Background.AZ(0x0);this.Background.
H(UU);this.Background.L(A.jb.CS);this.O0.AZ(0x0);this.O0.H(UU);this.O0.L(A.jb.AV
);this.J(this.Background,0);this.J(this.O0,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.O0._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.O0._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axk)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cg={Hj:null,Y:null,Ay:null,Ap:null,A69:A.jV,Init:function(aArg){A.pe([this,this.
ABb],this);},DE:function(G){var B;C.AB.DE.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);this.ABb(this);},Al3:
function(G){if(!!this.N.CE)A.pe(this.N.CE,this);},ApM:function(G){if(!!this.N.B$
)A.pe(this.N.B$,this);},AAF:function(G){if(!!this.N.Cf)A.pe(this.N.Cf,this);},Fk:
function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[
3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);A.pe([this,this.BBr],this);},ABb:function(G){
var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C1(A.
aaL(A.ach.Yy));this.N.CE=[this,this.Ew];if(!!GZ&&!!GZ.Amr){this.N.Fc(A.jV);this.
N.Jz.C3(255);this.N.ArP(GZ.AqQ);this.N.Cw(GZ.AvL);this.N.Cf=GZ.Amr;}else{this.N.
Fc(A.jV);this.N.Cw(null);this.N.Cf=null;}if(!!GZ&&!!GZ.Agw){this.N.CU(GZ.AxP);this.
N.GW.C3(GZ.Axl);this.N.Anz(GZ.AmU);this.N.C2(GZ.Aq7);this.N.B$=GZ.Agw;}else{this.
N.CU(A.jV);this.N.C2(null);this.N.B$=null;}},Ja:function(E){if(this.A69===E)return;
this.A69=E;this.Hj.R(E);},Ew:function(G){A._GetAutoObject(C.A8).FB();},BBr:function(
G){var B;var BAl=this.Ay.Background.Fq();var Bd9=(BAl?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajf=X;
X=X.Ah;if(((Ajf.U&0x400)===0x400)){if(!!(A.Core.Akh.isPrototypeOf(Ajf)?Ajf:null)
){var Bed=(A.Core.Akh.isPrototypeOf(Ajf)?Ajf:null);Bed.DC([Bd9,Bed.ED[1]]);}else
if(!!(A.Core.Eu.isPrototypeOf(Ajf)?Ajf:null)){var Bf9=(A.Core.Eu.isPrototypeOf(Ajf
)?Ajf:null);Bf9.H(A.abN(Bf9.M,Bd9));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CH._Init.call(this.Hj={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cg;this.N.Z(true);this.Hj.H(W8);this.Hj.Ar(false);this.Hj.R(A.aaR(A.
acf.Settings));this.Hj.L(A.jb.Text);this.Y.H(Ff);this.Y.JT(1);this.Ay.H(It);this.
Ap.H(O5);this.Ap.L(A.jb.Text);this.J(this.Hj,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hj.S(A.aaL(A.fl.Kp));this.Hj.A2(A.aaL(A.fl.Il));this.Y.
Em=[this,this.Fk];this.Ap.Ax(A.aaL(A.ach.ADh));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hj._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hj._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hj.R(A.aaR(A.acf.Settings
));this.Hj.S(A.aaL(A.fl.Kp));this.Hj.A2(A.aaL(A.fl.Il));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq0={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bg4],[B=
A._GetAutoObject(A.Device.Helper),B.U2,B.U5],0);},Df:function(E){C.BQ.Df.call(this
,E);this.Text.L(E);},Bg4:function(G){this.Text.R(A._GetAutoObject(A.acj.KL).Bi4(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq0;this.Timer.WD(1);this.Timer.Ar(true);
this.Text.H(Z8);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.MC=[this,this.Bg4
];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BQ;this.Timer._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BQ={KT:0xFFFFFFFF,LS:0,Df:function(E){if(
this.KT===E)return;this.KT=E;},WC:function(E){if(this.LS===E)return;this.LS=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BQ;this.H(O6
);},_className:"Application::HeaderContent"};C.N={VX:null,VY:null,VZ:null,Ag4:null
,Ag5:null,Ag6:null,CE:null,Cf:null,B$:null,Background:null,NK:null,Je:null,Jz:null
,GW:null,PB:null,I8:null,Le:null,T0:null,T1:null,An2:A.jV,An3:A.jV,An4:A.jV,Aq8:
0,Aq9:0,Aq_:0,Ahm:0,ZC:false,WJ:false,Aso:false,AsD:false,AsC:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.VX)this.Je.S(this.VX);if(!!this.VY)this.Jz.S(this.
VY);if(!!this.VZ)this.GW.S(this.VZ);switch(this.Ahm){case 0:{this.NK.Z(false);this.
Je.L(A.jb.Bm);this.Jz.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PB.L(A.jb.Bm);this.I8.L(
A.jb.Bm);this.Le.L(A.jb.Bm);}break;case 1:{if(!this.Ag4)this.NK.H(A.aaT(this.Je.
ASz(),Rn));else this.NK.H(this.PB.Dc());this.NK.Z(true);this.Je.L(A.jb.Text);this.
Jz.L(A.jb.Bm);this.GW.L(A.jb.Bm);this.PB.L(A.jb.Text);this.I8.L(A.jb.Bm);this.Le.
L(A.jb.Bm);}break;case 3:{if(!this.Ag6)this.NK.H(A.aaT(this.GW.ASz(),Rn));else this.
NK.H(this.Le.Dc());this.NK.Z(true);this.Je.L(A.jb.Bm);this.Jz.L(A.jb.Bm);this.GW.
L(A.jb.Text);this.PB.L(A.jb.Bm);this.I8.L(A.jb.Bm);this.Le.L(A.jb.Text);}break;case
2:{if(!this.Ag5)this.NK.H(A.aaT(this.Jz.ASz(),Rn));else this.NK.H(this.I8.Dc());
this.NK.Z(true);this.Je.L(A.jb.Bm);this.Jz.L(A.jb.Text);this.GW.L(A.jb.Bm);this.
PB.L(A.jb.Bm);this.I8.L(A.jb.Text);this.Le.L(A.jb.Bm);}break;default:{this.NK.Z(
false);A.ab5("%s",W9);}}if(!!this.PB.Al){this.PB.Z(true);this.Je.Z(false);}else{
this.PB.Z(false);this.Je.Z(true);}if(this.An3.length<=0){this.I8.Z(true);this.Jz.
Z(false);}else{this.I8.Z(false);this.Jz.Z(true);}if(!!this.Le.Al){this.Le.Z(true
);this.GW.Z(false);}else{this.Le.Z(false);this.GW.Z(true);}},Hy:function(E){if(this.
An2===E)return;this.An2=E;this.Je.R(E);this.Am();},Fc:function(E){if(this.An3===
E)return;this.An3=E;this.Jz.R(E);this.Am();},CU:function(E){if(this.An4===E)return;
this.An4=E;this.GW.R(E);this.Am();},AFn:function(E){if(this.Ahm===E)return;this.
Ahm=E;this.Am();},AFe:function(E){if(this.VX===E)return;this.VX=E;this.Je.S(E);this.
Am();},ArP:function(E){if(this.VY===E)return;this.VY=E;this.Jz.S(E);this.Am();},
Anz:function(E){if(this.VZ===E)return;this.VZ=E;this.GW.S(E);this.Am();},A3R:function(
G){this.Am();},C1:function(E){if(this.Ag4===E)return;this.Ag4=E;this.PB.Ax(E);this.
Am();},Cw:function(E){if(this.Ag5===E)return;this.Ag5=E;this.I8.Ax(E);this.Am();
},C2:function(E){if(this.Ag6===E)return;this.Ag6=E;this.Le.Ax(E);this.Am();},OQ:
function(E){if(this.AsC===E)return;this.AsC=E;this.T0.Z(E);if(E)this.Je.H([].concat(
this.T0.M[2],this.Je.M.slice(1,4)));else this.Je.H([].concat(0,this.Je.M.slice(1
,4)));this.Am();},OR:function(E){if(this.AsD===E)return;this.AsD=E;this.T1.Z(E);
if(E)this.GW.H(A.abN(this.GW.M,this.T1.M[0]));else this.GW.H(A.abN(this.GW.M,this.
M[2]));this.Am();},Bm2:function(E){if(this.Aq8===E)return;this.Aq8=E;this.PB.Cv(
E);this.Am();},ATl:function(E){if(this.Aq9===E)return;this.Aq9=E;this.I8.Cv(E);this.
Am();},A_e:function(E){if(this.Aq_===E)return;this.Aq_=E;this.Le.Cv(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NK={I:this},0);C.CH._Init.call(this.Je={I:this
},0);C.CH._Init.call(this.Jz={I:this},0);C.CH._Init.call(this.GW={I:this},0);A.acg.
Ap._Init.call(this.PB={I:this},0);A.acg.Ap._Init.call(this.I8={I:this},0);A.acg.
Ap._Init.call(this.Le={I:this},0);A.acg.Ap._Init.call(this.T0={I:this},0);A.acg.
Ap._Init.call(this.T1={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
AZ(0x3F);this.Background.H(BD);this.Background.L(A.jb.Aeb);this.NK.H(W_);this.NK.
L(A.jb.CS);this.NK.Z(false);this.Je.AZ(0x14);this.Je.H(UV);this.Je.A6(0x12);this.
Jz.AZ(0x14);this.Jz.H(Z9);this.Jz.A6(0x12);this.GW.H(Z_);this.PB.H(W$);this.I8.H(
Xa);this.Le.H(S$);this.Le.Z(false);this.T0.H(UW);this.T0.Z(false);this.T1.H(UX);
this.T1.Z(false);this.J(this.Background,0);this.J(this.NK,0);this.J(this.Je,0);this.
J(this.Jz,0);this.J(this.GW,0);this.J(this.PB,0);this.J(this.I8,0);this.J(this.Le
,0);this.J(this.T0,0);this.J(this.T1,0);this.Je.S(A.aaL(A.fl.Ak));this.Je.A2(A.aaL(
A.fl.Bh));this.Je.Q7([this,this.A3R]);this.Jz.S(A.aaL(A.fl.Ak));this.Jz.A2(A.aaL(
A.fl.Bh));this.Jz.Q7([this,this.A3R]);this.GW.S(A.aaL(A.fl.Ak));this.GW.A2(A.aaL(
A.fl.Bh));this.GW.Q7([this,this.A3R]);this.VX=A.aaL(A.fl.Ak);this.VY=A.aaL(A.fl.
Ak);this.VZ=A.aaL(A.fl.Ak);this.PB.Ax(null);this.I8.Ax(null);this.Le.Ax(null);this.
T0.Ax(A.aaL(A.ach.AMP));this.T1.Ax(A.aaL(A.ach.Ajt));this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.P;this.Background._Done();this.NK._Done();this.Je._Done(
);this.Jz._Done();this.GW._Done();this.PB._Done();this.I8._Done();this.Le._Done(
);this.T0._Done();this.T1._Done();A.Core.P._Done.call(this);},_ReInit:function(){
A.Core.P._ReInit.call(this);this.Background._ReInit();this.NK._ReInit();this.Je.
_ReInit();this.Jz._ReInit();this.GW._ReInit();this.PB._ReInit();this.I8._ReInit(
);this.Le._ReInit();this.T0._ReInit();this.T1._ReInit();this.Je.S(A.aaL(A.fl.Ak)
);this.Je.A2(A.aaL(A.fl.Bh));this.Jz.S(A.aaL(A.fl.Ak));this.Jz.A2(A.aaL(A.fl.Bh)
);this.GW.S(A.aaL(A.fl.Ak));this.GW.A2(A.aaL(A.fl.Bh));this.AFe(A.aaL(A.fl.Ak));
this.ArP(A.aaL(A.fl.Ak));this.Anz(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.VX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
VY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VZ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.B$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Je)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jz).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Le)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADl={Init:function(aArg){var B;A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.
Helper),B.Ary,B.AkF],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper)
,B.A9c,B.AFL],0);A.pe([this,this.Ns],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhI)this.Ab3(A._GetAutoObject(A.Device.Helper).AhI.AOW());else this.
Ab3(-1);if(!!A._GetAutoObject(A.Device.Helper).Uz)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak7(A._GetAutoObject(A.Device.Helper).Uz.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.Am0._Init.call(this,aArg);this.__proto__=C.ADl;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AGZ={Ey:null,Ei:null,
FX:null,XZ:null,TE:null,IH:null,II:null,Init:function(aArg){},WI:function(G){var
B;C.DR.WI.call(this,G);var AKQ=this.Azs(A._GetAutoObject(A.Device.Helper).UF.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALG=this.Azs(A._GetAutoObject(
A.Device.Helper).UG.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAa=
this.Azs(A._GetAutoObject(A.Device.Device).AcF);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AKQ));this.II.H(A.abO(this.
II.M,this.Ey.M[3]-((((B=this.II.M)[3]-B[1])/2)|0)));this.Ei.H(A.abP(this.Ei.M,this.
Ey.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-B[1])-ALG));this.
IH.H(A.abO(this.IH.M,(this.Ei.M[3]-((((B=this.IH.M)[3]-B[1])/2)|0))+2));this.FX.
H(A.abP(this.FX.M,this.Ei.M[3]));this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.
M)[3]-B[1])-BAa));this.TE.H(A.abO(this.TE.M,this.FX.M[3]-((((B=this.TE.M)[3]-B[1
])/2)|0)));this.XZ.H(A.abP(this.XZ.M,this.FX.M[3]));this.XZ.H([].concat(this.XZ.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJN:function(AoR){return A._GetAutoObject(A.
Device.Converter).Ak2(AoR);},AKk:function(){return A._GetAutoObject(A.acj.Temperature
).AlM();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.
FX={I:this},0);A.acg.AL._Init.call(this.XZ={I:this},0);A.acg.AL._Init.call(this.
TE={I:this},0);A.acg.AL._Init.call(this.IH={I:this},0);A.acg.AL._Init.call(this.
II={I:this},0);this.__proto__=C.AGZ;this.Ey.AZ(0xD);this.Ey.H(AcM);this.Ey.L(A.jb.
Gj);this.Ei.AZ(0xD);this.Ei.H(Ta);this.Ei.L(A.jb.H8);this.FX.AZ(0xD);this.FX.H(Z$
);this.FX.L(A.jb.E1);this.XZ.AZ(0xD);this.XZ.H(AfB);this.XZ.L(A.jb.Afu);this.TE.
AZ(0xD);this.TE.H(Aaa);this.TE.Awy(A.jb.Afu);this.TE.Awz(A.jb.Afu);this.TE.AwB(A.
jb.E1);this.TE.AwA(A.jb.E1);this.IH.AZ(0xD);this.IH.H(Xb);this.IH.Awy(A.jb.E1);this.
IH.Awz(A.jb.E1);this.IH.AwB(A.jb.H8);this.IH.AwA(A.jb.H8);this.II.AZ(0xD);this.II.
H(Aab);this.II.Awy(A.jb.H8);this.II.Awz(A.jb.H8);this.II.AwB(A.jb.Gj);this.II.AwA(
A.jb.Gj);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FX,-1);this.J(this.XZ
,-1);this.J(this.TE,-1);this.J(this.IH,-1);this.J(this.II,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FX._Done(
);this.XZ._Done();this.TE._Done();this.IH._Done();this.II._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ey._ReInit();this.Ei._ReInit(
);this.FX._ReInit();this.XZ._ReInit();this.TE._ReInit();this.IH._ReInit();this.II.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ey)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avr:null,AmU:null,AQn:null,Aq7:null,AqQ:null,AvL:null,AR:null,Agw:null,Amr:
null,N:null,Bo:null,QT:null,AxP:A.jV,AUZ:false,AGN:false,Aph:false,Axl:255,LI:false
,KG:false,Qv:false,Ai:function(Ae){var B;C.OX.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var IB=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=
A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.
L(A.jb.CS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IB){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.Am4);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY
);}this.LI=Hf;this.KG=Fw;this.Qv=GE;this.Aph=IB;},Qu:function(G){this.Am();A.pe(
this.AR,this);},Bw8:function(s){this.Qu(s);},I0:function(G){if(this.QT.Ach)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.Ar(false);}this.Bo.Ar(true);
},Atp:function(s){this.I0(s);},Ab0:function(E){if(A.aa0(this.Agw,E))return;this.
Agw=E;},A_J:function(E){if(this.AxP===E)return;this.AxP=E;},Zs:function(E){if(this.
Avr===E)return;this.Avr=E;},Zt:function(E){if(this.AmU===E)return;this.AmU=E;},A_o:
function(E){if(this.Axl===E)return;this.Axl=E;},Gs:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DK===E)return;this.DK=E;this.ALo();},A3o:
function(G){},BGX:function(s){this.A3o(s);},AkA:function(E){if(this.Aq7===E)return;
this.Aq7=E;},LZ:function(E){if(A.aa0(this.Amr,E))return;this.Amr=E;},BmV:function(
E){if(this.AqQ===E)return;this.AqQ=E;},L2:function(E){if(this.AvL===E)return;this.
AvL=E;},Zx:function(E){if(this.AGN===E)return;this.AGN=E;this.ALo();},ALo:function(
){var B;var M1=this.DK;if(this.AGN)M1=M1+A.aaR(A.acf.Colon);if(this.AUZ)M1=M1+Xc;
this.V.R(M1);},ATI:function(E){if(this.AUZ===E)return;this.AUZ=E;this.ALo();},_Init:
function(aArg){C.OX._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BK._Init.call(this.QT={I:this},0);this.__proto__=C.Co;this.Bo.PV(0);
this.Bo.WD(50);this.Bo.Ar(false);this.QT.Filter=1;this.Bo.MC=[this,this.Bw8];this.
QT.BL=[this,this.Atp];this.Avr=A.aaL(A.fl.Ak);this.AmU=A.aaL(A.fl.Ak);this.AQn=A.
aaL(A.ach.E2);this.AqQ=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OX;this.
Bo._Done();this.QT._Done();C.OX._Done.call(this);},_ReInit:function(){C.OX._ReInit.
call(this);this.Bo._ReInit();this.QT._ReInit();this.Zs(A.aaL(A.fl.Ak));this.Zt(A.
aaL(A.fl.Ak));this.BmV(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OX._Mark.call(
this,D);if((B=this.Avr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmU)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aq7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqQ)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agw)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Ds={Q:null,And:null,Anf:null,Hx:null,H4:null,AM:0,Gq:0,F$:100,FI:0,Init:function(
aArg){},I0:function(G){this.FI=1;C.Eg.I0.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hx.H([0,aSize[1]-40,40,aSize[1]]);this.H4.H([].concat(A.
abe(aSize,AhX),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fw=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hx.L(this.V.AQ);this.H4.L(this.V.AQ);this.Hx.
Z((Fw||GE)&&(this.AM>this.Gq));this.H4.Z((Fw||GE)&&(this.AM<this.F$));if(this.FI===
6)this.Hx.L(A.jb.E1);if(this.FI===7)this.H4.L(A.jb.E1);},Bfg:function(G){this.FI=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.AyT],this);this.Bo.Ar(false);}this.Bo.
Ar(true);},Qu:function(G){if(this.FI===6)A.pe([this,this.AyT],this);if(this.FI===
7)A.pe([this,this.AyU],this);if(this.FI===1)A.pe(this.AR,this);this.FI=0;this.Am(
);},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcW:function(
s){this.C4(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,
this.AcW],this);},Bfh:function(G){this.FI=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.AyU],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Kd:function(G){this.FI=0;}
,AyU:function(s){this.Kd(s);},J_:function(G){this.FI=0;},AyT:function(s){this.J_(
s);},Bx:function(E){if(E<this.Gq)E=this.Gq;if(E>this.F$)E=this.F$;if(this.AM===E
)return;this.AM=E;this.Am();},Bbk:function(Aq){this.Bx(Aq);},Ga:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EU:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},Ui:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BK._Init.call(this.And={I:this},0);A.Core.BK._Init.call(this.Anf={
I:this},0);A.acg.Ap._Init.call(this.Hx={I:this},0);A.acg.Ap._Init.call(this.H4={
I:this},0);this.__proto__=C.Ds;this.H(KZ);this.And.Filter=6;this.Anf.Filter=7;this.
Background.H(KZ);this.V.H(AcN);this.V.R(Lw);this.Hx.H(AhY);this.H4.H(Aoe);this.H4.
Cv(1);this.J(this.Hx,0);this.J(this.H4,0);this.And.BL=[this,this.Bfg];this.And.D1=[
this,this.Bfg];this.Anf.BL=[this,this.Bfh];this.Anf.D1=[this,this.Bfh];this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.Hx.Ax(A.aaL(A.ach.
Aju));this.H4.Ax(A.aaL(A.ach.Aju));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.And._Done();this.Anf._Done();this.Hx._Done();this.H4._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.And._ReInit();this.
Anf._ReInit();this.Hx._ReInit();this.H4._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.And)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hx)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Du:function(){return-1;},C6:function(aIndex){return-1;},Gl:function(
aIndex){return A.jV;},DZ:function(A7){return-1;},H3:function(){return-1;},Au:function(
E){this.Q=E;},Cb:function(Aq){this.Au(Aq);},AC0:function(aIndex){return null;},AC2:
function(aIndex){return 0;},B_:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Ir={AxG:null
,BT:null,AHa:A.jV,AVD:A.jV,Aj5:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Ds.Ai.call(this,Ae);if(!this.AxG){this.BT.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.
AVD);else this.BT.R(((F=this.Q,F[1].call(F[0])).toFixed()+CQ)+this.AHa);}}else(B=
this.AxG)?B[1].call(B[0],this):null;},Kd:function(G){var F;var BO=this.AM;C.Ds.Kd.
call(this,G);this.Bx(this.AM+this.Aj5);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},J_:function(G){var F;var BO=this.AM;C.
Ds.J_.call(this,G);this.Bx(this.AM-this.Aj5);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IQ:function(E){if(this.AHa===E)return;
this.AHa=E;this.Am();},Jb:function(E){if(this.AVD===E)return;this.AVD=E;this.Am(
);},ATm:function(E){if(this.Aj5===E)return;this.Aj5=E;},A_G:function(E){if(A.aa0(
this.AxG,E))return;this.AxG=E;},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.CH._Init.call(this.BT={I:this},0);this.__proto__=C.Ir;this.H(KZ);this.BT.H(Oc);
this.J(this.BT,-1);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Ds;this.BT._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.BT._ReInit();this.BT.S(A.aaL(
A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.AxG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Dz:null,HM:null,CP:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Ds.Bl.call(this,aSize);this.Dz.H([this.Hx.M[2]-10,this.Hx.M[1],this.
H4.M[0]+10,this.Hx.M[3]]);this.Dz.AFo((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.Dz.
Gt,true,null,null);},Ai:function(Ae){var B;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.Dz.AbD(0,this.Dz.AY-1);this.Hx.Z(Fw||GE);this.H4.
Z(Fw||GE);},C4:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Kd:function(G){var F;var BO=this.AM;C.Ds.Kd.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},J_:function(G){var F;var BO=this.AM;
C.Ds.J_.call(this,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var QA=0;if(E<this.Gq){E=this.F$;QA=-this.Dz.Wc*this.Dz.AY;}if(E>this.F$){E=this.
Gq;QA=this.Dz.Wc;}C.Ds.Bx.call(this,E);if(!!QA)this.Dz.Gb(QA);this.Dz.GT(this.AM
);if(this.Dz.Bj1())this.Dz.Bpy(false,false);this.Dz.HI(this.Dz.Gt,true,this.HM,null
);},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(C.CH.isPrototypeOf(B=this.Dz.
Cj)?B:null);if(!CA)return;CA.S(this.V.B6);CA.Aw7(19);CA.A2(this.V.AmT);CA.BnO(19
);CA.Cu(this.V.AqP);CA.BnP(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));
else CA.R(Xd);CA.H(A.abK(CA.M,[this.Dz.Wc,(B=this.Dz.M)[3]-B[1]]));},BwK:function(
s){this.Hm(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Ga(0);this.EU(this.AC.Du()-1);this.Dz.Jy(this.AC.Du());this.Dz.AbD(0,this.Dz.AY-
1);}},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Core.Dz._Init.call(this.
Dz={I:this},0);A.acl.Gm._Init.call(this.HM={I:this},0);this.__proto__=C.BW;this.
H(KZ);this.Dz.N2(C.CH);this.HM.WF(23);this.HM.HN(1);this.HM.Fr(200);this.J(this.
Dz,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.Dz.Hm=[this,this.BwK
];this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.Dz._Done();this.HM.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
Dz._ReInit();this.HM._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak)
);this.CP();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SR={FM:null,OH:null,Dl:null,Av:null,Jw:null,HL:null,Pv:null,VU:null,Q2:null,
Yk:null,P9:null,Gy:null,Gx:null,FY:0,A_:0,Asm:false,BjW:false,Init:function(aArg
){},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hx.Z(false);this.H4.Z(false);var AtZ=
A.jV;if(!!this.Dl){this.Pv.R(this.Av.Format(Aac));this.Q2.R(this.Av.Format(AfC));
this.P9.R(this.Av.Format(AhZ));}if(this.A_===1){this.HL.Z(true);this.HL.H(this.Pv.
M);this.HL.L(this.V.AQ);this.Pv.L(this.Background.AQ);this.Q2.L(this.V.AQ);this.
P9.L(this.V.AQ);AtZ=A.aaR(A.acf.A55);}else if(this.A_===2){this.HL.Z(true);this.
HL.H(this.Q2.M);this.HL.L(this.V.AQ);this.Pv.L(this.V.AQ);this.Q2.L(this.Background.
AQ);this.P9.L(this.V.AQ);AtZ=A.aaR(A.acf.Hk);}else if(this.A_===3){this.HL.Z(true
);this.HL.H(this.P9.M);this.HL.L(this.V.AQ);this.Pv.L(this.V.AQ);this.Q2.L(this.
V.AQ);this.P9.L(this.Background.AQ);AtZ=A.aaR(A.acf.Year);}else{this.HL.Z(false);
this.Pv.L(this.V.AQ);this.Yk.L(this.V.AQ);this.Q2.L(this.V.AQ);this.VU.L(this.V.
AQ);this.P9.L(this.V.AQ);}if(AtZ.length>0){if(this.AGN)this.V.R((((this.DK+AcO)+
AtZ)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DK+AcO)+
AtZ)+String.fromCharCode(0x29));}else this.ALo();},Qu:function(G){if(this.FI===1
)A.pe([this,this.Vb],this);else if(this.FI===4)A.pe([this,this.AiH],this);else if(
this.FI===5)A.pe([this,this.Ait],this);C.Ds.Qu.call(this,G);},Kd:function(G){switch(
this.A_){case 0:C.Ds.Kd.call(this,G);break;case 3:break;default:this.Ady(this);}
},J_:function(G){switch(this.A_){case 0:C.Ds.J_.call(this,G);break;default:this.
Ais(this);}},AdA:function(G){var F;if(!!this.Dl)this.Um((F=this.Dl,F[1].call(F[0
])));},Ab6:function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.AdA
],this.Dl,0);this.Dl=E;if(!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA
],this);},Um:function(E){if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.
FY);this.Am();},Ady:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Vb],this);this.Bo.Ar(false);}this.Bo.Ar(true);},BbT:function(s){this.Ady(s);},Vb:
function(G){this.Ex(this.A_+1);},Al5:function(G){this.FI=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiH],this);this.Bo.Ar(false);}this.Bo.Ar(true);},Al4:function(
G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ait],this);this.Bo.Ar(false
);}this.Bo.Ar(true);},AiH:function(G){var B;var F;var BO=this.FY;switch(this.A_){
case 1:{if(this.Asm){var ABk=A._NewObject(A.Core.An5,0);ABk.Km=1;if(this.Av.J(ABk
).JS()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Av.GL<this.Av.Zm()
)this.Av.Lq(this.Av.GL+1);}break;case 2:{if(this.Asm){var ABk=A._NewObject(A.Core.
An5,0);ABk.Km=this.Av.Zm();if(this.Av.J(ABk).JS()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Av.Ur(this.Av.Hk+1);if(this.Av.Zm()<this.Av.GL)this.Av.Lq(this.
Av.Zm());}break;case 3:{if(this.Asm){var A1L=A._NewObject(A.Core.Bs,0);A1L.Initialize(
this.Av.JS());A1L.Year+=1;if(A1L.JS()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Um(((B=(this.Av.JS()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.
Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}},Ait:function(G){var B;var F;var BO=
this.FY;if(this.A_===1)this.Av.Lq(this.Av.GL-1);if(this.A_===2){this.Av.Ur(this.
Av.Hk-1);if(this.Av.Zm()<this.Av.GL)this.Av.Lq(this.Av.Zm());}if(this.A_===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Um(((B=(this.Av.JS()|
0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],
this.FY));A.abo(this.Dl,0);}},DJ:function(G){var F;if(!this.N)return;switch(this.
A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[
0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CU(A.jV);(F=this.N,F[1].call(F[0])).B$=[this,this.Vb];}break;case 2:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AeB));(F=this.N,F[1].call(F[0])).
CU(A.jV);(F=this.N,F[1].call(F[0])).B$=[this,this.Vb];}break;case 3:{(F=this.N,F[
1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CU(A.jV);(F=
this.N,F[1].call(F[0])).B$=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},AFJ:function(E){if(this.Asm===E)return;this.Asm=E;},FV:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EN){var F;var AAt=this.A_;if(!this.
A_){this.FM.AjB((F=this.N,F[1].call(F[0])));if((EN===1)&&!this.FY){var BO=this.FY;
this.Um(A._GetAutoObject(A.Device.Helper).Dv());if(this.FY!==BO){if(!!this.Dl)(F=
this.Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}}}this.A_=EN;this.BjW=true;if((
this.A_<0)||(this.A_>3))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=
!!this.A_;if((!!AAt&&!this.A_)&&!!this.OH)A.pe(this.OH,this);this.Am();},Ais:function(
G){if(this.A_>1)this.Ex(this.A_-1);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Av={I:this},0);A.Core.BK._Init.call(this.Jw={I:this}
,0);A.acg.AL._Init.call(this.HL={I:this},0);A.acg.Text._Init.call(this.Pv={I:this
},0);A.acg.Text._Init.call(this.VU={I:this},0);A.acg.Text._Init.call(this.Q2={I:
this},0);A.acg.Text._Init.call(this.Yk={I:this},0);A.acg.Text._Init.call(this.P9={
I:this},0);A.Core.BK._Init.call(this.Gy={I:this},0);A.Core.BK._Init.call(this.Gx={
I:this},0);this.__proto__=C.SR;this.H(UY);this.V.R(Aof);this.Hx.Z(false);this.H4.
Z(false);this.Jw.Filter=1;this.HL.H(Aog);this.HL.L(0x55FFFFFF);this.Pv.H(Aoh);this.
Pv.I$(true);this.Pv.A6(0x14);this.VU.H(Aoi);this.VU.I$(true);this.VU.A6(0x14);this.
VU.R(Alc);this.Q2.H(AsX);this.Q2.I$(true);this.Yk.H(Ax7);this.Yk.I$(true);this.Yk.
R(Alc);this.P9.H(Ax8);this.P9.I$(true);this.P9.A6(0x11);this.Gy.Filter=4;this.Gy.
Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HL,0);this.J(this.Pv,0);this.
J(this.VU,0);this.J(this.Q2,0);this.J(this.Yk,0);this.J(this.P9,0);this.Jw.BL=[this
,this.BbT];this.Pv.S(A.aaL(A.fl.EK));this.VU.S(A.aaL(A.fl.EK));this.Q2.S(A.aaL(A.
fl.EK));this.Yk.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));this.Gy.BL=[this,this.
Al5];this.Gy.D1=[this,this.AiH];this.Gx.BL=[this,this.Al4];this.Gx.D1=[this,this.
Ait];this.FM=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ds;this.Av._Done();this.Jw._Done();this.HL._Done();this.Pv._Done();this.VU._Done(
);this.Q2._Done();this.Yk._Done();this.P9._Done();this.Gy._Done();this.Gx._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit(
);this.Jw._ReInit();this.HL._ReInit();this.Pv._ReInit();this.VU._ReInit();this.Q2.
_ReInit();this.Yk._ReInit();this.P9._ReInit();this.Gy._ReInit();this.Gx._ReInit(
);this.Pv.S(A.aaL(A.fl.EK));this.VU.S(A.aaL(A.fl.EK));this.Q2.S(A.aaL(A.fl.EK));
this.Yk.S(A.aaL(A.fl.EK));this.P9.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OK={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bea],[B=A._GetAutoObject(A.Device.Device),B.A8W,B.Bbr],0);
A.pe([this,this.Bea],this);},Du:function(){return 16;},Gl:function(aIndex){return this.
LanguageToString.BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnC(E);},Bea:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OK;this.Ca.Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,5);this.Ca.
Set(3,3);this.Ca.Set(4,8);this.Ca.Set(5,9);this.Ca.Set(6,7);this.Ca.Set(7,6);this.
Ca.Set(8,10);this.Ca.Set(9,2);this.Ca.Set(10,11);this.Ca.Set(11,12);this.Ca.Set(
12,13);this.Ca.Set(13,14);this.Ca.Set(14,15);this.Ca.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Cm;this.LanguageToString._Done();C.Cm._Done.
call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Rf={TemperatureUnitToString:
null,Du:function(){return 2;},C6:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BS(aIndex);},DZ:function(A7){return A7;},H3:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw$(E);}
,Init:function(aArg){var B;A.zX([this,this.BgI],[B=A._GetAutoObject(A.Device.Device
),B.Arz,B.Ato],0);A.pe([this,this.BgI],this);},BgI:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B_,this.Cb],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Rf;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AVh={Ajz:null,AcB:null,Kz:null,AP:null,A$:null,Bl:function(aSize){C.Ba.Bl.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kz.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ajz.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.AcB.H(this.Ajz.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Kz.L(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX
)return;this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hv(Ad,6);var ApW=this.AX.CF(Ad,
7);var Aud=this.AX.I6(Ad,9);this.T(A._GetAutoObject(A.acj.KL).ACW(AlD));this.Kz.
R(A._GetAutoObject(A.acj.KL).A6J(AlD));this.AcB.R(A._GetAutoObject(A.Device.Converter
).Ak2(ApW));this.AcB.L(A._GetAutoObject(A.acj.Assessment).Xz(Aud));this.Ajz.L(A.
_GetAutoObject(A.acj.Assessment).Qr(Aud));this.Am();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Ajz={I:this},0);A.acg.Text._Init.
call(this.AcB={I:this},0);A.acg.Text._Init.call(this.Kz={I:this},0);A.acg.AL._Init.
call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AVh;this.V.H(O7);this.AcB.L(A.jb.Text);this.Kz.R(Ro);this.Kz.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A$.H(Ax9);this.A$.L(A.jb.Bc);this.J(this.Ajz,0);this.J(this.AcB
,0);this.J(this.Kz,0);this.J(this.AP,0);this.J(this.A$,0);this.AcB.S(A.aaL(A.fl.
Af));this.Kz.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ajz._Done();this.AcB._Done();this.Kz._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ajz._ReInit(
);this.AcB._ReInit();this.Kz._ReInit();this.AP._ReInit();this.A$._ReInit();this.
AcB.S(A.aaL(A.fl.Af));this.Kz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.Gc={AX:null,AR:null,Cq:null,AD:
null,Afl:null,NP:null,KN:A.jV,Lj:null,AVF:true,Hm:function(G){var B;var Gg=this.
AD.G6;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?B:null);if(!Aa)return;Aa.Zq(this.
AX);Aa.Ch(Gg);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GO]));
},N2:function(E){if(E===this.Lj)return;this.Lj=E;this.AD.N2(E);},Zq:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Ch],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Ch],E,0);A.pe([this,this.Ch],this);},Ch:function(G){if(this.AVF===
false)return;if(!!this.AX){this.AD.Jy(this.AX.B9());this.AD.AbD(0,this.AD.AY-1);
}else this.AD.Jy(0);if((this.AD.AY>0)&&(this.FN()<0))this.GT(0);if(this.FN()>=this.
AD.AY){this.GT(0);this.AD.Gb(0);}if(this.AD.AY<=0){this.NP.Z(true);this.GT(-1);}
else{this.NP.Z(false);this.ABK(null,null);}},Fk:function(G){var B;this.Afl.My(this.
AD.GO*this.AD.AY);this.Afl.MB((B=this.AD.M)[3]-B[1]);this.Afl.Mz(-this.AD.Br);},
DE:function(G){if(this.AD.AY>0){switch(this.Cq.CO){case 4:if(this.FN()>0)this.GT(
this.FN()-1);break;case 5:if(this.FN()<(this.AD.AY-1))this.GT(this.FN()+1);break;
default:this.Cq.NL=true;}this.AD.HI(this.FN(),true,null,null);}else if((this.Cq.
CO!==4)&&(this.Cq.CO!==5))this.Cq.NL=true;},Zu:function(E){if(A.aa0(this.AR,E))return;
this.AR=E;this.AD.AbD(0,this.AD.AY);},GT:function(E){this.AD.GT(E);this.AD.HI(E,
true,null,null);},FN:function(){return this.AD.Gt;},Dk:function(E){if(this.KN===
E)return;this.KN=E;this.NP.R(E);},ABK:function(AcZ,E7){this.AD.ABK(AcZ,E7);},ATX:
function(E){if(this.AVF===E)return;this.AVF=E;if(E)A.pe([this,this.Ch],this);},_Init:
function(aArg){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.CM._Init.call(this.AD={I:this},0);C.Ay._Init.call(this.Afl={I:this},
0);A.acg.Text._Init.call(this.NP={I:this},0);this.__proto__=C.Gc;this.H(UZ);this.
Lj=C.Ba;this.Cq.Filter=147;this.AD.AZ(0x3F);this.AD.H(UZ);this.AD.Ae8(40);this.Afl.
AZ(0x3A);this.Afl.H(AsY);this.NP.AZ(0x3F);this.NP.H(Ax_);this.NP.Hn(10);this.NP.
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
jb.CJ);else this.Background.L(A.jb.CS);}},Zq:function(E){if(this.AX===E)return;this.
AX=E;},Ch:function(Ad){A.ab5("%s",Ax$);},_Init:function(aArg){C.Co._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.call(this);this.CP(
);},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GJ={Bg:null,FE:null
,DP:null,Fn:null,V2:null,Kk:null,KN:A.jV,AUi:0,AUj:0,Afm:false,CP:function(){if(
A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(A.Device.Device
).Dw(0);A.pe([this,this.Ba7],this);}},Init:function(aArg){var B;A.zX([this,this.
BeQ],[B=A._GetAutoObject(A.Device.Device),B.AEB,B.AIQ],0);A.zV([this,this.Aga],A.
_GetAutoObject(A.Device.Device).An,0);A.zV([this,this.AcG],A._GetAutoObject(A.Device.
Device).An,0);A.zX([this,this.BBw],[B=A._GetAutoObject(A.Device.Helper),B.U2,B.U5
],0);A.pe([this,this.AcG],this);A.pe([this,this.A0F],this);A.pe([this,this.AxB],
this);},WA:function(G){this.Agx();var O;for(O=this.Kk.Du()-1;O>=0;O=O-1)switch(this.
Kk.C6(O)){case 0:this.AdS(A.aaR(A.acf.A5e),[this,this.Bob],0);break;case 14:this.
AdS(A.aaR(A.acf.Bhn),[this,this.Boc],14);break;case 1:this.AdS(A.aaR(A.acf.Temperature
),[this,this.ATZ],1);break;case 2:this.AdS(A.aaR(A.acf.Rating),[this,this.ATY],2
);break;case 3:this.AdS(A.aaR(A.acf.Afv),[this,this.AT0],3);break;default:A.ab5(
"%s",Aya);}A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Bil
));A._GetAutoObject(A.Device.Device).Dw(6);},Ba7:function(s){this.WA(s);},DE:function(
G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var AfZ=this.Kk.DZ(A._GetAutoObject(
A.Device.Device).Kk);if(this.Afm)return;switch(D5.CO){case 6:{AfZ=AfZ-1;if(AfZ<0
)AfZ=this.Kk.Du()-1;A._GetAutoObject(A.Device.Device).Zo(this.Kk.C6(AfZ));}break;
case 7:{AfZ=AfZ+1;if(AfZ>=this.Kk.Du())AfZ=0;A._GetAutoObject(A.Device.Device).Zo(
this.Kk.C6(AfZ));}break;default:D5.NL=true;}},CC:function(G){if(this.DP.Az4()){this.
DP.Ac9();if(this.DP.Az4()===false)this.Bg.ATX(true);return;}else if(this.Afm)this.
AA4(this);if(!!this.Bg)this.Bg.ATX(true);},E4:function(G){if(!!this.Bg)this.Bg.ATX(
false);},AxB:function(G){var B;if(!!this.Bg)this.HO(this.Bg);this.Bg=A._NewObject(
C.AMB,0);this.Bg.H(Aoj);this.Bg.Zq(A._GetAutoObject(A.Device.Device).An);this.Bg.
Zu([this,this.AcU]);if(!!this.FE)this.Bg.A9J([B=this.FE,B.A9e,B.A_C]);this.A4q(this
);this.J(this.Bg,0);if(this.Afm===false)this.Bb(this.Bg);this.BeQ(this);this.Bpj(
this);},A9G:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Dr(this.A6W(
));this.Ek.AR=[this,this.AcU];this.ALu(this);this.Ek.Ar(true);this.Bb(this.Ek);this.
Afm=true;},BkS:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);if(!this.
Bg)return;var Aa=(C.AB_.isPrototypeOf(B=this.Bg.AD.Bjy(this.Bg.AD.Gt))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).G8(Aa.Hs);else A._GetAutoObject(A.Device.
Helper).W.E5();this.Agj();},Agg:function(G){var F;if(!this.Fn)this.A6h(this);else
switch((F=this.Fn,F[1].call(F[0]))){case 19:break;case 0:this.A6h(this);break;case
1:this.Bim(this);break;case 9:this.A6i(this);break;case 4:this.Bio(this);break;case
6:this.Bip(this);break;case 8:this.Bir(this);break;case 2:this.Bis(this);break;case
3:this.Bit(this);break;case 7:this.Biv(this);break;case 5:this.Biw(this);break;case
10:this.Biy(this);break;case 11:this.Bin(this);break;case 12:this.Biq(this);break;
case 13:this.A6n(this);break;case 14:this.A6j(this);break;case 18:this.A6k(this);
break;case 15:this.A6l(this);break;case 16:this.Biu(this);break;case 17:this.A6m(
this);break;default:A.ab5("%s%e",AfD,(F=this.Fn,F[1].call(F[0])));}},AcU:function(
s){this.Agg(s);},Bl6:function(G){this.Dr(C.Kq);this.Ek.AR=null;this.Afm=false;this.
AcG(this);this.Bga();this.N.T0.C3(255);this.N.T1.C3(255);this.Bb(this.Bg);this.Ek.
Ar(false);},Anp:function(G){A._GetAutoObject(C.A8).FB();},Dk:function(E){if(this.
KN===E)return;this.KN=E;this.A4q(this);},Abr:function(){switch(A._GetAutoObject(
A.Device.Device).Kk){case 14:return C.ANb;case 2:return C.ANd;case 1:return C.ANe;
case 3:return C.ANg;case 0:case 8:case 9:case 10:case 4:case 5:case 6:return C.Aqu;
case 7:return C.AB9;case 12:return C.ACa;case 11:return C.AB8;case 13:return C.AB$;
default:throw new Error(Aok);}},Abs:function(){switch(A._GetAutoObject(A.Device.
Device).Kk){case 14:return C.APD;case 2:return C.ADs;case 1:return C.APF;case 3:
return C.APH;case 4:return C.ADo;case 0:case 8:case 9:case 10:case 5:case 6:return C.
Aq1;case 7:return C.ADq;case 12:return C.ADr;case 11:return C.ADp;case 13:return C.
ADt;default:throw new Error(Aok);}},BeQ:function(G){this.ATB(A._GetAutoObject(A.
Device.Device).Kk);if(!!this.Bg){this.Bg.N2(this.Abr());this.Bpo(this);}},Bpo:function(
G){var B;if(!!this.FE)this.HO(this.FE);this.FE=(C.Dd.isPrototypeOf(B=A._NewObject(
this.Abs(),0))?B:null);this.FE.H(IV);if(!!this.Bg)this.Bg.A9J([B=this.FE,B.A9e,B.
A_C]);this.J(this.FE,0);},BkQ:function(G){this.Q_(this);A._GetAutoObject(A.Device.
Device).Dw(0);},ATZ:function(G){A._GetAutoObject(A.Device.Device).Zo(1);},ATY:function(
G){A._GetAutoObject(A.Device.Device).Zo(2);},AT0:function(G){A._GetAutoObject(A.
Device.Device).Zo(3);},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A.
_GetAutoObject(A.Device.Helper).Mt());},A0F:function(s){this.Q_(s);},HP:function(
G){if(this.Afm){this.ALu(this);return;}this.N.C1(A.aaL(A.ach.E2));this.N.Cw(A.aaL(
A.ach.ADK));this.N.C2(A.aaL(A.ach.Options));this.N.CE=[this,this.Anp];this.N.Cf=[
this,this.A9G];this.N.B$=[this,this.Ba7];this.N.Hy(A.jV);this.N.Fc(A.jV);this.N.
CU(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.I8.C3(100);this.N.
Cf=null;}else this.N.I8.C3(255);},AoA:function(s){this.HP(s);},AdS:function(Aig,
Aih,AJp){A._GetAutoObject(C.BR).ABJ(Aig,Aih,[this,this.A8_,this.ATB],AJp);},Aga:
function(G){this.A4q(this);if(this.Afm)A.pe([this,this.ALu],this);},Agj:function(
){A._GetAutoObject(C.A8).Cd(9);},A4q:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QK()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dk(
A.aaR(A.acf.AEq));else if(A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dk(this.KN);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC5(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dk(A.aaR(A.acf.AOa));else this.Bg.Dk(A.aaR(
A.acf.AN$));}else this.Bg.Dk(A.aaR(A.acf.ASj));},AER:function(G){var F;if(!!this.
Fn)(F=this.Fn,F[2].call(F[0],0));},AwS:function(E){if(A.aaZ(this.Fn,E))return;if(
!!this.Fn)A.z$([this,this.A0O],this.Fn,0);this.Fn=E;if(!!E)A.zX([this,this.A0O],
this.Fn,0);if(!!E)A.pe([this,this.A0O],this);},AEX:function(G){var F;if(!!this.Fn
)(F=this.Fn,F[2].call(F[0],1));},AwX:function(G){var F;if(!!this.Fn)(F=this.Fn,F[
2].call(F[0],2));},ATF:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],
3));},ATT:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],7));},ATU:function(
G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],5));},Bis:function(G){if(!this.Bg
)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.
Qp(1);}},I2:function(Aig,Aih,AoY){A._GetAutoObject(C.BR).ABJ(Aig,Aih,[this,this.
A8$,this.ATC],AoY);},Bme:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0
],4));},Bio:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.
Helper).G8(this.Bg.FN());this.DP.BBY();}},Bmf:function(G){var F;if(!!this.Fn)(F=
this.Fn,F[2].call(F[0],6));},Bip:function(G){if(!this.Bg)return;if(this.Nd()){A.
_GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.BBZ();}},Bir:function(G
){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(1024);}},Bnr:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(
F[0],8));},Akv:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],9));},Bit:
function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(
this.Bg.FN());this.DP.Qp(2);}},A6h:function(G){if(!this.Bg)return;if(this.Nd()){
A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());if(A._GetAutoObject(A.Device.
Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).A3(66,true,A.jV,0,null);else this.BBJ();}},Bim:function(G){if(!this.
Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.
DP.Qp(16);}},BBJ:function(){A._GetAutoObject(C.A8).Cd(94);},Biv:function(G){if(!
this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());
this.DP.Qp(4);}},Biw:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(8);}},A6i:function(G){var B;if(!this.
Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());if(this.
Afm){A.zX([this,this.AAv],[B=this.DP,B.SE,B.Fb],0);this.AA4(this);}this.DP.Ac9();
}},AuI:function(Aig,Aih,ByH){A._GetAutoObject(C.BR).Bhi(Aig,Aih,ByH);},ALu:function(
G){this.N.Hy(A.jV);this.N.CU(A.jV);this.N.C1(A.aaL(A.ach.AeA));this.N.CE=[this,this.
Bl6];this.N.T0.C3(100);this.N.T1.C3(100);var Gh=A._GetAutoObject(A.Device.Device
).An.B9();if(Gh<=0){this.N.Cw(null);this.N.C2(null);this.N.Cf=null;this.N.B$=null;
this.N.WJ=false;this.N.ZC=false;}else if(Gh===1){this.N.Cw(null);this.N.C2(A.aaL(
A.ach.AeB));this.N.Cf=null;this.N.B$=[this,this.AcU];this.N.WJ=false;this.N.ZC=false;
}else{this.N.Cw(A.aaL(A.ach.Aq6));this.N.C2(A.aaL(A.ach.Arc));this.N.Cf=[this,this.
A3K];this.N.B$=[this,this.A3L];this.N.WJ=true;this.N.ZC=true;}},A3K:function(G){
if(!this.Bg)return;if(this.Bg.FN()<(A._GetAutoObject(A.Device.Device).An.B9()-1)
)this.Bg.GT(this.Bg.FN()+1);},A3L:function(G){if(!this.Bg)return;if(this.Bg.FN()>
0)this.Bg.GT(this.Bg.FN()-1);},Bpj:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Bf=A._GetAutoObject(A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bf>=0){this.Bg.GT(Bf);A.ab5("%s",Aol);}}},Nd:function(){return this.
Bg.FN()>=0;},Aki:function(){return A._GetAutoObject(A.Device.Device).An.B9()>5;}
,Agx:function(){this.Bhj();A._GetAutoObject(C.BR).Ty(A.aaR(A.acf.AUH),[this,this.
A9G]);A._GetAutoObject(C.BR).Fz();},AcG:function(G){if(this.Afm)this.ALu(this);else
this.HP(this);},AA4:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E_();var Ay7=aFilter.DL(1,4);if(!!Ay7){aFilter.Np(Ay7);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GT(0);}},BG1:function(s){this.
AA4(s);},AAv:function(G){var B;if(!this.DP.EV&&this.Afm){A.z$([this,this.AAv],[B=
this.DP,B.SE,B.Fb],0);this.AA4(this);}},Bn4:function(G){var F;if(!!this.Fn)(F=this.
Fn,F[2].call(F[0],10));},Biy:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(256);}},A3A:function(G){var F;this.
ATC((F=this.Fn,F[1].call(F[0])));A.pe([this,this.AoA],this);},A0O:function(s){this.
A3A(s);},Bmb:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],11));},Bin:
function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(
this.Bg.FN());this.DP.Qp(4096);}},Biq:function(G){if(!this.Bg)return;if(this.Nd(
)){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(16384);}},A6n:function(
G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.BBK();}},BBK:function(){A._GetAutoObject(C.A8).Ab9(75);},A6j:function(
G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(32768);}},A6l:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(65536);}},Biu:function(G){if(!this.
Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.
DP.Qp(131072);}},Bhj:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.ACd));else A._GetAutoObject(C.BR).Ty(A.
aaR(A.acf.ACd),[this,this.BkQ]);A._GetAutoObject(C.BR).Ty(A.aaR(A.acf.AkU),[this
,this.BkS]);A._GetAutoObject(C.BR).Fz();},A6m:function(G){if(!this.Bg)return;if(
this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(128);}}
,BBw:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ch],this);},A6k:function(
G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(A.Device.Helper).G8(this.Bg.
FN());this.DP.Qp(524288);}},Bix:function(G){if(!this.Bg)return;if(this.Nd()){A._GetAutoObject(
A.Device.Helper).G8(this.Bg.FN());this.DP.Qp(262144);}},ATB:function(E){if(this.
AUi===E)return;this.AUi=E;A.abo([this,this.A8_,this.ATB],0);},ATC:function(E){if(
this.AUj===E)return;this.AUj=E;A.abo([this,this.A8$,this.ATC],0);},A6W:function(
){return C.Yt;},Bga:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E_(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?
B:null);if(!!FilterCriterion)Filter.Np(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bob:function(G){A._GetAutoObject(A.Device.Device).Zo(0);
},Boc:function(G){A._GetAutoObject(A.Device.Device).Zo(14);},A8_:function(){return this.
AUi;},A8$:function(){return this.AUj;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADs._Init.call(this.V2={I:this},0);C.Kk._Init.call(this.Kk={I:this},0);
this.__proto__=C.GJ;this.Background.H(Ce);this.N.Z(true);this.N.OQ(true);this.N.
OR(true);this.Ek.A9$(A.jb.CS);this.Ek.A_a(A.jb.Text);this.Dr(C.Kq);this.V2.H(IV);
this.KN=A.aaR(A.acf.AEq);this.J(this.V2,0);this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V2._Done();this.Kk._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V2._ReInit();
this.Kk._ReInit();this.Dk(A.aaR(A.acf.AEq));this.CP();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.AB_={AP:null,A$:null,UI:null,Acz:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UI.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.UI.M[2]-1,0,this.UI.M[2]+1,aSize[1]]);this.Acz.H([this.UI.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UI.L(this.V.AQ);this.Acz.L(this.
V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){this.T(this.
AX.CF(Ad,1).toFixed());this.UI.R(this.AX.CF(Ad,2).toFixed());this.Acz.R(this.AX.
CF(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.UI={I:this},0);A.acg.Text._Init.call(this.Acz={I:this
},0);this.__proto__=C.AB_;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UI.L(A.jb.Text
);this.Acz.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UI,0);this.
J(this.Acz,0);this.UI.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UI.
_Done();this.Acz._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UI._ReInit();this.Acz._ReInit(
);this.UI.S(A.aaL(A.fl.Af));this.Acz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ad$={OA:null,SS:null,Mn:null,Init:function(aArg){var B;A.zX([this,this.A3g],[
B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyL],0);A.zX([this,this.Adz],[B=A._GetAutoObject(
A.Device.Device),B.Awa,B.AyK],0);A.pe([this,this.Adz],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SS.R(A._GetAutoObject(A.Device.Device).Aa4.toFixed()+AsZ
);this.OA.Z(A._GetAutoObject(A.Device.Device).AmE);},Adz:function(G){this.Am();}
,MZ:function(G){A._GetAutoObject(C.A8).FB();},A3g:function(G){if(A._GetAutoObject(
A.Device.Device).AmE===false){this.OA.Z(false);A._GetAutoObject(C.A8).FB();}else
this.OA.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OA={I:this},0);A.acg.Text._Init.call(this.SS={I:this},0);C.Mn._Init.call(
this.Mn={I:this},0);this.__proto__=C.Ad$;var B;this.Background.L(A.jb.CS);this.N.
Z(true);this.N.CU(A.aaR(A.acf.Ok));this.OA.H(Xe);this.OA.R(A.aaR(A.acf.OA));this.
OA.L(A.jb.Text);this.OA.Z(false);this.SS.H(As0);this.SS.R(As1);this.SS.L(A.jb.Text
);this.Mn.H(As2);this.J(this.OA,0);this.J(this.SS,0);this.J(this.Mn,0);this.N.B$=[
this,this.MZ];this.OA.S(A.aaL(A.fl.Af));this.SS.S(A.aaL(A.fl.Af));this.Mn.Au([B=
A._GetAutoObject(A.Device.Device),B.Awa,B.AyK]);this.Mn.A_q([B=A._GetAutoObject(
A.Device.Device),B.Awd,B.AyL]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OA._Done();this.SS._Done();this.Mn._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OA._ReInit();this.SS._ReInit();this.Mn._ReInit(
);this.N.CU(A.aaR(A.acf.Ok));this.OA.R(A.aaR(A.acf.OA));this.OA.S(A.aaL(A.fl.Af)
);this.SS.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mn={Ad6:null,Ad7:null,IC:function(G){var F;if(!!this.Q){this.A2n();var Ada=(
F=this.Q,F[1].call(F[0]));if(Ada>20)this.Ow.L(A.jb.E1);else this.Ow.L(A.jb.Gj);this.
Ow.L((this.Ow.AQ&0x00FFFFFF)|(this.AlL(Ada,0,20)<<24));this.TF.L((this.TF.AQ&0x00FFFFFF
)|(this.AlL(Ada,21,40)<<24));this.TG.L((this.TG.AQ&0x00FFFFFF)|(this.AlL(Ada,41,
60)<<24));this.Ad6.L((this.Ad6.AQ&0x00FFFFFF)|(this.AlL(Ada,61,80)<<24));this.Ad7.
L((this.Ad7.AQ&0x00FFFFFF)|(this.AlL(Ada,81,100)<<24));}},A2n:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.U8=this.Ad7;else if((F=this.Q,F[
1].call(F[0]))>60)this.U8=this.Ad6;else if((F=this.Q,F[1].call(F[0]))>40)this.U8=
this.TG;else if((F=this.Q,F[1].call(F[0]))>20)this.U8=this.TF;else this.U8=this.
Ow;}else this.U8=null;},_Init:function(aArg){C.Oy._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad6={I:this},0);A.acg.AL._Init.call(this.Ad7={I:this},0);this.__proto__=
C.Mn;this.H(Aom);this.NT.H(Aom);this.Ow.H(As3);this.TF.H(Ald);this.TG.H(Ayb);this.
Ad6.H(Ayc);this.Ad6.L(A.jb.E1);this.Ad7.H(Ayd);this.Ad7.L(A.jb.E1);this.J(this.Ad6
,0);this.J(this.Ad7,0);this.NT.Ax(A.aaL(A.ach.AMW));},_Done:function(){this.__proto__=
C.Oy;this.Ad6._Done();this.Ad7._Done();C.Oy._Done.call(this);},_ReInit:function(
){C.Oy._ReInit.call(this);this.Ad6._ReInit();this.Ad7._ReInit();},_Mark:function(
D){var B;C.Oy._Mark.call(this,D);if((B=this.Ad6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVc={N9:null,Ls:null,Ak8:null,ZX:null,ZW:null,CP:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device),B.
ASW,B.A0y],0);A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device),B.ASZ,B.
A0A],0);A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.Device),B.A9o,B.BbC],0
);A.pe([this,this.ApN],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABw(this);this.BCR(this);this.DJ(this);},BA_:function(G){A._GetAutoObject(
A.Device.Device).AsG();},ApN:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
ZX.Z(false);break;case 4:{var A34;if(!A._GetAutoObject(A.Device.Device).Afr)A34=
0;else A34=((A._GetAutoObject(A.Device.Device).AxS*100)/A._GetAutoObject(A.Device.
Device).Afr)|0;this.ZX.Bx(A34);this.ZX.Z(true);}break;default:A.ab5("%s%e",As4,A.
_GetAutoObject(A.Device.Device).SyncState);}},BCR:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Ls.L(A.jb.Text);this.N9.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gj);this.Ls.L(A.jb.Bm);this.N9.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",As4,A._GetAutoObject(A.Device.Device).SyncState);}},DJ:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C1(null);this.N.CE=null;this.N.CU(A.jV);this.N.B$=null;}break;
case 7:{this.N.C1(null);this.N.CE=null;this.N.CU(A.aaR(A.acf.Ok));this.N.B$=[this
,this.BA_];}break;default:A.ab5("%s%e",As4,A._GetAutoObject(A.Device.Device).SyncState
);}},ABw:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Ls.R(A.aaR(A.acf.Bp_));break;case 1:this.Ls.R(A.aaR(A.acf.Bp7));break;
case 2:this.Ls.R(A.aaR(A.acf.Bp4));break;case 3:this.Ls.R(A.aaR(A.acf.Bp8));break;
case 4:this.Ls.R((A.aaR(A.acf.Bp6)+Aye)+A._GetAutoObject(A.Device.Helper).MG(A._GetAutoObject(
A.Device.Helper).MG(A.aaR(A.acf.BoH),O8,A._GetAutoObject(A.Device.Device).AxS.toFixed(
)),Ayf,A._GetAutoObject(A.Device.Device).Afr.toFixed()));break;case 5:this.Ls.R(
A.aaR(A.acf.Bp9));break;case 7:this.Ls.R(A.aaR(A.acf.Bp5));break;default:A.ab5("%s%e"
,As4,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CH._Init.call(this.N9={I:this},0);C.CH._Init.call(this.Ls={I:this
},0);A.acg.Ap._Init.call(this.Ak8={I:this},0);A.acr.ADv._Init.call(this.ZX={I:this
},0);A.acr.ADw._Init.call(this.ZW={I:this},0);this.__proto__=C.AVc;this.N.Z(true
);this.N9.H(AV9);this.N9.R(A.aaR(A.acf.N9));this.Ls.AZ(0x3F);this.Ls.H(AV_);this.
Ls.A6(0x12);this.Ak8.H(AV$);this.Ak8.L(A.jb.AV);this.ZX.H(AWa);this.ZX.Ar(false);
this.ZX.Bx(0);this.ZW.BnY(0);this.ZW.A_P(0);this.ZW.A_N(A.jb.AV);this.ZW.A_M(0);
this.ZW.AF8(AHq);this.J(this.N9,0);this.J(this.Ls,0);this.J(this.Ak8,0);this.J(this.
ZX,0);this.N9.S(A.aaL(A.fl.EK));this.N9.A2(A.aaL(A.fl.Af));this.N9.Cu(A.aaL(A.fl.
Ak));this.Ls.S(A.aaL(A.fl.Af));this.Ls.A2(A.aaL(A.fl.Ak));this.Ls.Cu(A.aaL(A.fl.
Bh));this.Ak8.Ax(A.aaL(A.ach.AQ1));this.ZX.OnSetAppearance(this.ZW);this.ZW.A_O(
A.aaL(A.ach.NW));this.ZW.A_L(A.aaL(A.ach.NW));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N9._Done();this.Ls._Done();this.Ak8._Done();this.ZX._Done(
);this.ZW._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N9._ReInit();this.Ls._ReInit();this.Ak8._ReInit();this.ZX._ReInit();this.
ZW._ReInit();this.N9.R(A.aaR(A.acf.N9));this.N9.S(A.aaL(A.fl.EK));this.N9.A2(A.aaL(
A.fl.Af));this.N9.Cu(A.aaL(A.fl.Ak));this.Ls.S(A.aaL(A.fl.Af));this.Ls.A2(A.aaL(
A.fl.Ak));this.Ls.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ls)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.AqZ={_Init:function(aArg){C.ADl._Init.call(this,aArg
);this.__proto__=C.AqZ;this.A_c(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Ca:A.abi(3,0,{0:2,2:1}),Du:function(
){return 3;},C6:function(aIndex){if(aIndex>=3)return-1;return this.Ca.Get(aIndex
);},Gl:function(aIndex){return this.GenderToString.BS(this.C6(aIndex));},DZ:function(
A7){var O=0;while(O<3){if(this.Ca.Get(O)===A7)return O;O=O+1;}return-1;},H3:function(
){var O=0;var max=-1;while(O<3){if(this.Ca.Get(O)>max)max=this.Ca.Get(O);O=O+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.JU(
E);},L0:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af3],[B=this.Animal,B.Wy,B.JU],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af3],[B=this.Animal,B.Wy,B.JU],0);A.pe([this,this.Af3],this);},Af3:function(
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
Ca.Get(O)===A7)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(
O<4){if(this.Ca.Get(O)>max)max=this.Ca.Get(O);O=O+1;}return max;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akw(E);},A1D:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B_,this.
Cb],0);},L0:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1D],[B=this.Animal,B.ASB,B.Akw],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1D],[B=this.Animal,B.ASB,B.Akw],0);A.pe([this,this.A1D],this);},_Init:function(
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
1;},H3:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UF.
MF){if(A._GetAutoObject(A.Device.Helper).UF.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UF.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
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
};C.AUT={Init:function(aArg){var B;A.pe([this,this.AfH],this);A.zX([this,this.AfH
],[B=A._GetAutoObject(A.Device.Device),B.Arz,B.Ato],0);},A39:function(G){A._GetAutoObject(
A.Device.Device).A3(38,true,A.jV,0,[this,this.BbU]);},A3I:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).Ass(this);},A1W:function(G){var F;if(this.A_===1){var BO=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlT)this.D7=this.AlT;if(this.D7<A._GetAutoObject(
A.Device.Device).AcF)this.D7=A._GetAutoObject(A.Device.Device).AcF;if(this.DW!==
BO){if(!!this.JX)(F=this.JX,F[2].call(F[0],this.D7));A.abo(this.JX,0);}}if(this.
A_===2){var BO=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BO){if(!!this.JW)(F=this.JW,F[2].call(F[0],this.DW));A.abo(this.JW,0);
}}this.DJ(this);this.Am();},A2w:function(G){var F;if(this.A_===1){var BO=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.
JX)(F=this.JX,F[2].call(F[0],this.D7));A.abo(this.JX,0);}}if(this.A_===2){var BO=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlO)this.DW=this.AlO;if(this.DW!==BO){
if(!!this.JW)(F=this.JW,F[2].call(F[0],this.DW));A.abo(this.JW,0);}}this.DJ(this
);this.Am();},GH:function(G){this.PM.R(AHr+A._GetAutoObject(A.Device.Converter).
Ak2(this.D7));this.PN.R(AHr+A._GetAutoObject(A.Device.Converter).Ak2(this.DW));this.
Sy.R(A._GetAutoObject(A.acj.Temperature).AlM());},A2p:function(Atv){if(Atv===1)return this.
PM;else if(Atv===2)return this.PN;else return null;},_Init:function(aArg){C.Aco.
_Init.call(this,aArg);this.__proto__=C.AUT;this.AlO=5000;this.AlT=3000;this.T(A.
aaR(A.acf.Arp));this.Background.H(AfE);this.V.H(BD);this.V.R(A.aaR(A.acf.AG3));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Aco._ReInit.call(this);this.T(
A.aaR(A.acf.Arp));this.V.R(A.aaR(A.acf.AG3));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CJ);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Aa7:null,Aa$:null,Aa9:
null,Background:null,Aa6:null,Aa_:null,Aa8:null,AjG:null,Aru:null,VN:null,A5:0,BAP:
function(G){if(this.AjG.CO===6){if(this.A5===1)this.AnI(2);else if(this.A5===2)this.
AnI(3);else this.AnI(1);}else if(this.AjG.CO===7){if(this.A5===3)this.AnI(2);else
if(this.A5===2)this.AnI(1);else this.AnI(3);}},AnI:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.Aa6.M);break;case 2:this.
Background.H(this.Aa_.M);break;case 1:this.Background.H(this.Aa8.M);break;default:
this.Background.H(Aon);}},I0:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hp._Init.
call(this.Aa7={I:this},0);A.acg.Hp._Init.call(this.Aa$={I:this},0);A.acg.Hp._Init.
call(this.Aa9={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aeq._Init.call(this.Aa6={I:this},0);A.acg.Aeq._Init.call(this.Aa_={I:this},0);A.
acg.Aeq._Init.call(this.Aa8={I:this},0);A.Core.BK._Init.call(this.AjG={I:this},0
);A.Core.BK._Init.call(this.Aru={I:this},0);A.Graphics.AMN._Init.call(this.VN={I:
this},0);this.__proto__=C.Rating;this.H(AWb);this.Aa7.H(AHs);this.Aa7.L(A.jb.Text
);this.Aa7.AnG(Ale);this.Aa7.Nm(3);this.Aa7.Z(true);this.Aa$.H(AHt);this.Aa$.L(A.
jb.Text);this.Aa$.AnG(Ale);this.Aa$.Nm(3);this.Aa$.Z(true);this.Aa9.H(AHu);this.
Aa9.L(A.jb.Text);this.Aa9.AnG(Ale);this.Aa9.Nm(3);this.Aa9.Z(true);this.Background.
H(Aon);this.Background.L(A.jb.AV);this.Aa6.H(AHs);this.Aa6.L(A.jb.E1);this.Aa6.AnG(
Ale);this.Aa6.Z(true);this.Aa_.H(AHt);this.Aa_.L(A.jb.H8);this.Aa_.AnG(Ale);this.
Aa_.Z(true);this.Aa8.H(AHu);this.Aa8.L(A.jb.Gj);this.Aa8.AnG(Ale);this.Aa8.Z(true
);this.AjG.Filter=147;this.Aru.Filter=1;this.VN.Bmw(360);this.VN.BnM(22);this.VN.
BnW(2);this.J(this.Aa7,0);this.J(this.Aa$,0);this.J(this.Aa9,0);this.J(this.Background
,0);this.J(this.Aa6,0);this.J(this.Aa_,0);this.J(this.Aa8,0);this.Aa7.Zv(this.VN
);this.Aa$.Zv(this.VN);this.Aa9.Zv(this.VN);this.Background.Ax(A.aaL(A.ach.NV));
this.Aa6.Zv(this.VN);this.Aa_.Zv(this.VN);this.Aa8.Zv(this.VN);this.AjG.BL=[this
,this.BAP];this.Aru.BL=[this,this.I0];},_Done:function(){this.__proto__=A.Core.P;
this.Aa7._Done();this.Aa$._Done();this.Aa9._Done();this.Background._Done();this.
Aa6._Done();this.Aa_._Done();this.Aa8._Done();this.AjG._Done();this.Aru._Done();
this.VN._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Aa7._ReInit();this.Aa$._ReInit();this.Aa9._ReInit();this.Background.
_ReInit();this.Aa6._ReInit();this.Aa_._ReInit();this.Aa8._ReInit();this.AjG._ReInit(
);this.Aru._ReInit();this.VN._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aa6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aru)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Asu={Akk:null,Ase:null,Background:null,TR:null,TM:null,AbW:null,AbV:null,AbU:
null,Acu:null,Act:null,Acs:null,Acj:null,Aci:null,AbO:null,AbN:null,Ab$:null,Ab_:
null,AqA:null,Init:function(aArg){},Bks:function(G){this.AbW.R(AWc);this.AbV.R(A.
jV);this.AbU.R(A.jV);this.Acu.R(AWd);this.Act.R(A.jV);this.Acs.R(A.jV);this.Acj.
R(A.jV);this.Aci.R(A.jV);this.AbO.R(A.jV);this.AbN.R(A.jV);this.Ab$.R(A.jV);this.
Ab_.R(A.jV);},Bop:function(G){this.TM.Z(true);this.TR.Z(true);var IE=this.Im();if(
!IE)return;this.TR.R(IE.GetFPS().toFixed()+AHv);this.TM.R(AWe);this.TM.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akk={I:this},0);A.Core.Timer._Init.call(this.Ase={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TR={I:this},0);A.acg.
Text._Init.call(this.TM={I:this},0);A.acg.Text._Init.call(this.AbW={I:this},0);A.
acg.Text._Init.call(this.AbV={I:this},0);A.acg.Text._Init.call(this.AbU={I:this}
,0);A.acg.Text._Init.call(this.Acu={I:this},0);A.acg.Text._Init.call(this.Act={I:
this},0);A.acg.Text._Init.call(this.Acs={I:this},0);A.acg.Text._Init.call(this.Acj={
I:this},0);A.acg.Text._Init.call(this.Aci={I:this},0);A.acg.Text._Init.call(this.
AbO={I:this},0);A.acg.Text._Init.call(this.AbN={I:this},0);A.acg.Text._Init.call(
this.Ab$={I:this},0);A.acg.Text._Init.call(this.Ab_={I:this},0);A.acg.AL._Init.call(
this.AqA={I:this},0);this.__proto__=C.Asu;this.H(AcP);this.Ar(false);this.Akk.PV(
2000);this.Akk.WD(1);this.Akk.Ar(true);this.Ase.Ar(true);this.Background.AZ(0x3F
);this.Background.H(AcP);this.Background.L(0x78000000);this.TR.H(AWf);this.TR.A6(
0x14);this.TR.R(A.jV);this.TR.L(0xFFFFFC00);this.TR.Z(false);this.TM.H(AWg);this.
TM.A6(0x11);this.TM.R(A.jV);this.TM.Z(false);this.AbW.H(AWh);this.AbW.A6(0x11);this.
AbW.R(A.jV);this.AbV.H(AHw);this.AbV.A6(0x11);this.AbV.R(A.jV);this.AbU.H(As5);this.
AbU.A6(0x14);this.AbU.R(A.jV);this.Acu.H(AHx);this.Acu.A6(0x11);this.Acu.R(A.jV);
this.Act.H(AHy);this.Act.A6(0x11);this.Act.R(A.jV);this.Acs.H(Ayg);this.Acs.A6(0x14
);this.Acs.R(A.jV);this.Acj.H(AHz);this.Acj.A6(0x11);this.Acj.R(A.jV);this.Aci.H(
Ayh);this.Aci.A6(0x14);this.Aci.R(A.jV);this.AbO.H(AWi);this.AbO.A6(0x11);this.AbO.
R(A.jV);this.AbN.H(AWj);this.AbN.A6(0x14);this.AbN.R(A.jV);this.Ab$.H(AWk);this.
Ab$.A6(0x11);this.Ab$.R(A.jV);this.Ab_.H(AWl);this.Ab_.A6(0x14);this.Ab_.R(A.jV);
this.AqA.H(AHA);this.J(this.Background,0);this.J(this.TR,0);this.J(this.TM,0);this.
J(this.AbW,0);this.J(this.AbV,0);this.J(this.AbU,0);this.J(this.Acu,0);this.J(this.
Act,0);this.J(this.Acs,0);this.J(this.Acj,0);this.J(this.Aci,0);this.J(this.AbO,
0);this.J(this.AbN,0);this.J(this.Ab$,0);this.J(this.Ab_,0);this.J(this.AqA,0);this.
Akk.MC=[this,this.Bks];this.Ase.MC=[this,this.Bop];this.TR.S(A.aaL(A.fl.Ak));this.
TM.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));this.
AbU.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.S(A.aaL(A.fl.Ak));this.
Acs.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.S(A.aaL(A.fl.Ak));this.
AbO.S(A.aaL(A.fl.Ak));this.AbN.S(A.aaL(A.fl.Ak));this.Ab$.S(A.aaL(A.fl.Ak));this.
Ab_.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akk._Done();this.Ase._Done();this.Background._Done();this.TR._Done();this.TM.
_Done();this.AbW._Done();this.AbV._Done();this.AbU._Done();this.Acu._Done();this.
Act._Done();this.Acs._Done();this.Acj._Done();this.Aci._Done();this.AbO._Done();
this.AbN._Done();this.Ab$._Done();this.Ab_._Done();this.AqA._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akk._ReInit();this.
Ase._ReInit();this.Background._ReInit();this.TR._ReInit();this.TM._ReInit();this.
AbW._ReInit();this.AbV._ReInit();this.AbU._ReInit();this.Acu._ReInit();this.Act.
_ReInit();this.Acs._ReInit();this.Acj._ReInit();this.Aci._ReInit();this.AbO._ReInit(
);this.AbN._ReInit();this.Ab$._ReInit();this.Ab_._ReInit();this.AqA._ReInit();this.
TR.S(A.aaL(A.fl.Ak));this.TM.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.AbV.
S(A.aaL(A.fl.Ak));this.AbU.S(A.aaL(A.fl.Ak));this.Acu.S(A.aaL(A.fl.Ak));this.Act.
S(A.aaL(A.fl.Ak));this.Acs.S(A.aaL(A.fl.Ak));this.Acj.S(A.aaL(A.fl.Ak));this.Aci.
S(A.aaL(A.fl.Ak));this.AbO.S(A.aaL(A.fl.Ak));this.AbN.S(A.aaL(A.fl.Ak));this.Ab$.
S(A.aaL(A.fl.Ak));this.Ab_.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ase).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Act)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab_)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGL={FM:null,Dl:null,Av:null,Jw:null,HL:null,Ug:null,Bc:null,Sn:null,Gy:null
,Gx:null,FY:0,A_:0,Bj2:false,Init:function(aArg){},Ai:function(Ae){C.Ds.Ai.call(
this,Ae);this.Hx.Z(false);this.H4.Z(false);if(!!this.Dl){this.Sn.R(this.Av.Format(
AWm));this.Ug.R(this.Av.Format(MK));}if(this.A_===1){this.HL.Z(true);this.HL.H(this.
Sn.M);this.HL.L(A.jb.Bm);this.Sn.L(this.Background.AQ);this.Ug.L(A.jb.Bm);}else if(
this.A_===2){this.HL.Z(true);this.HL.H(this.Ug.M);this.HL.L(A.jb.Bm);this.Sn.L(A.
jb.Bm);this.Ug.L(this.Background.AQ);}else{this.HL.Z(false);this.Sn.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Ug.L(this.V.AQ);}},Qu:function(G){if(this.FI===1)A.pe([
this,this.Vb],this);else if(this.FI===4)A.pe([this,this.AiH],this);else if(this.
FI===5)A.pe([this,this.Ait],this);C.Ds.Qu.call(this,G);},Kd:function(G){switch(this.
A_){case 0:C.Ds.Kd.call(this,G);break;case 2:break;default:this.Ady(this);}},J_:
function(G){switch(this.A_){case 0:C.Ds.J_.call(this,G);break;default:this.Ais(this
);}},AdA:function(G){var F;if(!!this.Dl)this.Um((F=this.Dl,F[1].call(F[0])));},Ab6:
function(E){if(A.aaZ(this.Dl,E))return;if(!!this.Dl)A.z$([this,this.AdA],this.Dl
,0);this.Dl=E;if(!!E)A.zX([this,this.AdA],E,0);if(!!E)A.pe([this,this.AdA],this);
},Um:function(E){if(this.FY===E)return;this.FY=E;this.Av.Initialize(this.FY);this.
Am();},Ady:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Vb],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},Vb:function(G){this.Ex(this.A_+1);},Al5:
function(G){this.FI=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiH],this);this.Bo.
Ar(false);}this.Bo.Ar(true);},Al4:function(G){this.FI=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Ait],this);this.Bo.Ar(false);}this.Bo.Ar(true);},AiH:function(G){
var B;var F;var BO=this.FY;if(this.A_===1)this.Av.AnB(this.Av.AjU+1);if(this.A_===
2)this.Av.AnE(this.Av.Av5+1);this.Av.AnH(0);this.Um(((B=(this.Av.JS()|0))<0)?B+0x100000000:
B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FY));A.abo(this.
Dl,0);}},Ait:function(G){var B;var F;var BO=this.FY;if(this.A_===1)this.Av.AnB(this.
Av.AjU-1);if(this.A_===2)this.Av.AnE(this.Av.Av5-1);this.Av.AnH(0);this.Um(((B=(
this.Av.JS()|0))<0)?B+0x100000000:B);if(this.FY!==BO){if(!!this.Dl)(F=this.Dl,F[
2].call(F[0],this.FY));A.abo(this.Dl,0);}},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CU(A.jV);(F=this.N,F[1].call(F[0])).B$=[this,this.Vb];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CU(A.jV);(F=
this.N,F[1].call(F[0])).B$=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EN){
var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EN;this.Bj2=true;
if((this.A_<0)||(this.A_>2))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.
Bw=!!this.A_;this.Am();},Ais:function(G){if(this.A_>1)this.Ex(this.A_-1);},_Init:
function(aArg){C.Ds._Init.call(this,aArg);A.Core.Bs._Init.call(this.Av={I:this},
0);A.Core.BK._Init.call(this.Jw={I:this},0);A.acg.AL._Init.call(this.HL={I:this}
,0);A.acg.Text._Init.call(this.Ug={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Sn={I:this},0);A.Core.BK._Init.call(this.Gy={I:this
},0);A.Core.BK._Init.call(this.Gx={I:this},0);this.__proto__=C.AGL;this.H(UY);this.
V.R(Ayi);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H4.Z(false);this.Jw.Filter=1;this.
HL.H(AWn);this.HL.L(0x55FFFFFF);this.Ug.H(AWo);this.Ug.I$(true);this.Bc.H(AWp);this.
Bc.A6(0x14);this.Bc.R(AWq);this.Sn.H(AWr);this.Sn.I$(true);this.Sn.A6(0x14);this.
Gy.Filter=4;this.Gy.Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HL,0);
this.J(this.Ug,0);this.J(this.Bc,0);this.J(this.Sn,0);this.Jw.BL=[this,this.Ady];
this.Ug.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Sn.S(A.aaL(A.fl.EK));this.
Gy.BL=[this,this.Al5];this.Gy.D1=[this,this.AiH];this.Gx.BL=[this,this.Al4];this.
Gx.D1=[this,this.Ait];this.FM=A._NewObject(C.Aeu,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ds;this.Av._Done();this.Jw._Done();this.HL._Done();this.Ug._Done(
);this.Bc._Done();this.Sn._Done();this.Gy._Done();this.Gx._Done();C.Ds._Done.call(
this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit();this.Jw._ReInit(
);this.HL._ReInit();this.Ug._ReInit();this.Bc._ReInit();this.Sn._ReInit();this.Gy.
_ReInit();this.Gx._ReInit();this.Ug.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.Sn.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((
B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dl)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ug)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CH={B6:null,AmT:null,AqP:null,Em:null,Text:null,String:A.jV,BdV:A.jV,Kj:0x12
,ALb:0,AQ:0xFFFFFFFF,N6:0,AUB:0,A$m:0,BdW:true,G4:function(CN){var LJ=(A.Core.ARC.
isPrototypeOf(CN)?CN:null);if(!!LJ)this.BC2(this);return A.Core.P.G4.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajl],this);}
,Dc:function(aFilter){return A.abh(this.Text.Dc(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.BdW){this.BdV=E;this.BdW=false;
}this.ALb=E.length;A.pe([this,this.Ajl],this);},S:function(E){if(this.B6===E)return;
this.B6=E;A.pe([this,this.Ajl],this);},A2:function(E){if(this.AmT===E)return;this.
AmT=E;A.pe([this,this.Ajl],this);},Cu:function(E){if(this.AqP===E)return;this.AqP=
E;A.pe([this,this.Ajl],this);},A6:function(E){if(E===this.Kj)return;this.Kj=E;this.
Text.A6(E);},Ajl:function(G){var B;var ALh=0;if(!this.ALb){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KS(false);if(!!this.B6){ALh=
this.B6.Yr(this.String,0,this.ALb);if(ALh<(((B=this.M)[2]-B[0])-(2*this.Text.Jc)
)){this.Text.S(this.B6);this.Text.Aw7(this.N6);return;}}this.Text.KS(true);if(!!
this.AmT){ALh=this.AmT.Yr(this.String,0,this.ALb);this.Text.S(this.AmT);this.Text.
Aw7(this.AUB);if((ALh<(((B=this.M)[2]-B[0])-(2*this.Text.Jc)))&&(((B=this.Text.Dc(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqP){this.Text.S(this.AqP);
if(((B=this.Text.Dc())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Aw7((((this.Text.
B6.Ascent+this.Text.B6.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BC2:function(G){this.R(this.BdV);},Q7:function(E){if(
A.aa0(this.Em,E))return;this.Em=E;this.Text.Q7(E);},ASz:function(){return A.abh(
this.Text.Dc(),this.M.slice(0,2));},Afh:function(AoM){return A.abf(this.M.slice(
0,2),this.Text.Afh(AoM));},Aw7:function(E){if(this.N6===E)return;this.N6=E;A.pe([
this,this.Ajl],this);},BnO:function(E){if(this.AUB===E)return;this.AUB=E;A.pe([this
,this.Ajl],this);},BnP:function(E){if(this.A$m===E)return;this.A$m=E;A.pe([this,
this.Ajl],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CH;this.H(AHB);this.Ar(false);
this.Text.AZ(0x3F);this.Text.H(AHB);this.Text.R(Ro);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqP)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjS={Y:null,IM:null,AeM:null,I7:null,Na:null,AeG:null,AeL:null,AeK:null,AeH:
null,AeJ:null,AeI:null,Nc:null,NX:null,Mu:null,Df:function(E){C.Ys.Df.call(this,
E);this.IM.L(E);this.AeM.L(E);this.I7.L(E);this.Na.L(E);this.Mu.L(E);this.AeG.L(
E);this.Nc.L(E);this.NX.L(E);this.AeL.L(E);this.AeK.L(E);this.AeH.L(E);this.AeJ.
L(E);this.AeI.L(E);},DX:function(G){C.Ys.DX.call(this,G);this.XM(8,1,this.Na);this.
XM(12,1,this.Mu);this.XM(11,1,this.AeG);this.XM(7,1,this.Nc);this.XM(14,1,this.NX
);this.XM(1,4,this.IM);this.XM(1,1,this.AeM);this.XM(4,1,this.I7);this.XM(22,1,this.
AeL);this.XM(26,1,this.AeK);this.XM(30,1,this.AeH);this.XM(19,1,this.AeJ);this.XM(
31,1,this.AeI);this.Text.Z(!this.Y.TP(null,0x1));},XM:function(AJq,Eb,AfU){var ABd=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adk=A._GetAutoObject(
A.Device.Device).An.Filter.DL(AJq,Eb);if(!!Adk){ABd=true;switch(AJq){case 14:{var
Azu=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adk)?Adk:null);if(!!Azu)AfU.
Ax(A._GetAutoObject(A.Device.Converter).A5i(Azu.A5));}break;case 7:{var Azu=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adk)?Adk:null);if(!!Azu)AfU.Ax(A._GetAutoObject(
A.Device.Converter).AmV(Azu.A5));}break;case 1:if(Eb===4)AfU.Ax(A.aaL(A.ach.ADK)
);else if(Adk.Operator===4)ABd=false;break;case 22:switch(Adk.Operator){case 0:case
3:AfU.Ax(A.aaL(A.ach.AQJ));break;default:AfU.Ax(A.aaL(A.ach.AjY));}break;case 26:
switch(Adk.Operator){case 0:case 3:AfU.Ax(A.aaL(A.ach.AQH));break;default:AfU.Ax(
A.aaL(A.ach.AvD));}break;default:;}}else if((AJq===1)&&(Eb===4)){ABd=true;AfU.Ax(
A.aaL(A.ach.AeC));}}else if((AJq===1)&&(Eb===4)){ABd=true;AfU.Ax(A.aaL(A.ach.AeC
));}AfU.Z(ABd);},_Init:function(aArg){C.Ys._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IM={I:this},0);A.acg.Ap._Init.call(
this.AeM={I:this},0);A.acg.Ap._Init.call(this.I7={I:this},0);A.acg.Ap._Init.call(
this.Na={I:this},0);A.acg.Ap._Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(
this.AeL={I:this},0);A.acg.Ap._Init.call(this.AeK={I:this},0);A.acg.Ap._Init.call(
this.AeH={I:this},0);A.acg.Ap._Init.call(this.AeJ={I:this},0);A.acg.Ap._Init.call(
this.AeI={I:this},0);A.acg.Ap._Init.call(this.Nc={I:this},0);A.acg.Ap._Init.call(
this.NX={I:this},0);A.acg.Ap._Init.call(this.Mu={I:this},0);this.__proto__=C.AjS;
this.Y.AZ(0x3F);this.Y.H(AWs);this.Y.JT(3);this.IM.H(Ayj);this.AeM.H(As6);this.AeM.
Aj(true);this.I7.H(Ayk);this.I7.Aj(true);this.Na.H(AWt);this.Na.Aj(true);this.AeG.
H(AWu);this.AeG.Aj(true);this.AeL.H(AHC);this.AeL.Aj(true);this.AeK.H(AHC);this.
AeK.Aj(true);this.AeH.H(AWv);this.AeH.Aj(true);this.AeJ.H(AHD);this.AeJ.Aj(true);
this.AeI.H(AHD);this.AeI.Aj(true);this.Nc.H(AHE);this.Nc.Aj(true);this.NX.H(AHF);
this.NX.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mu.H(AHE);this.Mu.Aj(true);
this.JZ(this.Gw,-3);this.JZ(this.D2,-3);this.JZ(this.A$,-3);this.JZ(this.AP,-2);
this.J(this.Y,-2);this.J(this.IM,-2);this.J(this.AeM,-2);this.J(this.I7,-2);this.
J(this.Na,-2);this.J(this.AeG,-2);this.J(this.AeL,-2);this.J(this.AeK,-2);this.J(
this.AeH,-2);this.J(this.AeJ,-2);this.J(this.AeI,-2);this.J(this.Nc,-2);this.J(this.
NX,-2);this.J(this.Mu,0);this.IM.Ax(A.aaL(A.ach.AeC));this.AeM.Ax(A.aaL(A.ach.AQw
));this.I7.Ax(A.aaL(A.ach.APU));this.Na.Ax(A.aaL(A.ach.ADF));this.AeG.Ax(A.aaL(A.
ach.Ag7));this.AeL.Ax(A.aaL(A.ach.AjY));this.AeK.Ax(A.aaL(A.ach.AvD));this.AeH.Ax(
A.aaL(A.ach.AQt));this.AeJ.Ax(A.aaL(A.ach.AQu));this.AeI.Ax(A.aaL(A.ach.AQs));this.
Nc.Ax(A.aaL(A.ach.ADH));this.NX.Ax(A.aaL(A.ach.AvI));this.Mu.Ax(A.aaL(A.ach.ADN)
);},_Done:function(){this.__proto__=C.Ys;this.Y._Done();this.IM._Done();this.AeM.
_Done();this.I7._Done();this.Na._Done();this.AeG._Done();this.AeL._Done();this.AeK.
_Done();this.AeH._Done();this.AeJ._Done();this.AeI._Done();this.Nc._Done();this.
NX._Done();this.Mu._Done();C.Ys._Done.call(this);},_ReInit:function(){C.Ys._ReInit.
call(this);this.Y._ReInit();this.IM._ReInit();this.AeM._ReInit();this.I7._ReInit(
);this.Na._ReInit();this.AeG._ReInit();this.AeL._ReInit();this.AeK._ReInit();this.
AeH._ReInit();this.AeJ._ReInit();this.AeI._ReInit();this.Nc._ReInit();this.NX._ReInit(
);this.Mu._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.Ys.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amv={H7:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);this.H7.Gr();this.H7.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Re.CC.call(this,G);},An8:function(){C.Re.
An8.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).Bz0(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu));this.C9.L(A._GetAutoObject(
A.acj.Temperature).Bz3(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lu));this.JN.L(A._GetAutoObject(A.acj.Temperature).Bz1(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu));this.HG.L(A.
_GetAutoObject(A.acj.Temperature).Bz2(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lu));this.MH.L(this.JN.AQ);this.TemperatureUnit.
L(this.JN.AQ);}break;default:;}},AcG:function(){C.Re.AcG.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Cw(A.aaL(A.ach.AQU));this.N.C2(A.aaL(
A.ach.Am3));}break;case 4:{this.N.Cw(null);this.N.C2(A.aaL(A.ach.AvQ));}break;default:;
}},WR:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lu>3240)&&(A._GetAutoObject(A.Device.
Device).Lu<5460)){A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.H7.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lu);var B1=A._GetAutoObject(A.Device.Converter).AsI(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu);this.H7.OnSetRatingTemperature(
B1);this.H7.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();
}break;case 4:this.AKG(this);break;default:;}},AkX:function(G){C.Re.AkX.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKG(this);break;default:;}},AxY:function(
){C.Re.AxY.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JN.R(A._GetAutoObject(A.acj.Temperature).Bz8(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu));break;default:;}},AxZ:function(
){C.Re.AxZ.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WE(A._GetAutoObject(A.acj.Temperature).Bz4(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lu));this.Jf.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WE(16711680
);this.Jf.Ar(true);}break;default:this.Jf.Ar(false);}},AUN:function(){this.C9.Ax(
A.aaL(A.ach.AvP));this.C9.Cv(A._GetAutoObject(A.acj.Temperature).Bz9(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lu));this.NV.Cv(
0);},_Init:function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.Amv;this.Dr(
C.IK);this.H7=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Re._Mark.
call(this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.AhB={N5:null,DK:null,Ik:null,Bc:null,AuB:null,String:A.jV,AxM:A.jV,Mx:7,Akb:
2,KT:0,AU0:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DK.H([0,0,aSize[0]-this.Akb,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DK.
S(A.aaL(A.fl.Bh));else this.DK.S(A.aaL(A.fl.Ak));this.Ik.S(this.DK.B6);this.Ik.H(
this.DK.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WI],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DK.R(E);},Ahw:function(
E){if(this.AxM===E)return;this.AxM=E;this.Ik.R(E);},Ab5:function(E){this.Mx=E;if(
E<10)this.ATn(2);else if(E<40)this.ATn(1);else this.ATn(0);A.pe([this,this.WI],this
);},WI:function(G){var B;while(!!this.Bc.Ah)this.HO(this.Bc.Ah);if(this.Mx>1){var
Adf=this.AOR();var A2i=this.AOP();var Apr=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var Az9;var AK6;var Aua;var Ama=null;if(!!this.N5&&(this.N5.AY>0))Ama=this.N5.K1;
while((Adf>=A2i)&&(Adf>0)){var AtN=A._NewObject(C.Ajv,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*(((Adf-A2i)/86400)|0))/this.Mx)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*((((Adf-A2i)/86400)|0)+1))/this.Mx)|0;while(!!Ama&&(Ama.Timestamp>=
Adf)){if(Ama.Timestamp<(Adf+86400))AtN.Ot(Ama.A5,Ama.Timestamp);Ama=Ama.Ah;}var Aum=
0;if(AtN.AY>0)Aum=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtN.AY
)|0;else if(this.Mx<10){Aum=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
Aua=A._NewObject(A.acg.Text,0);Aua.H([x1,Apr,x2,Apr+Aum]);Aua.S(A.aaL(A.fl.Bh));
Aua.L(A.jb.Text);Aua.R(A.aaR(A.acf.Afd));this.J(Aua,0);}var AJT=AtN.K1;var O=0;while(
!!AJT){if(O>=AtN.AY)throw new Error(AWw);Az9=A._NewObject(A.acg.AL,0);Az9.L(A._GetAutoObject(
A.acj.Assessment).Qr(AJT.A5));if(O===(AtN.AY-1))Az9.H([x1,Apr+(O*Aum),x2,this.Bc.
M[1]]);else Az9.H([x1,Apr+(O*Aum),x2,Apr+((O+1)*Aum)]);this.J(Az9,0);AJT=AJT.Ah;
O=O+1;}if(this.AU0){var ByO=A._GetAutoObject(A.Device.Helper).Aqp(A._GetAutoObject(
A.Device.Helper).Dv());var ByN=A._GetAutoObject(A.Device.Helper).Aqp(Adf);if(ByO===
ByN){var ALz=A._NewObject(A.acg.Aeq,0);ALz.L(A.jb.Text);var Beh=(x1+this.Akb)+(((
x2-x1)/2)|0);ALz.H([Beh-4,this.Bc.M[1]-4,Beh+4,this.Bc.M[1]]);ALz.Zv(this.AuB);this.
J(ALz,0);}}Adf=Adf-86400;if(this.Akb>0){AK6=A._NewObject(A.acg.AL,0);AK6.H([x1,Apr
,x1+this.Akb,Apr+((((B=this.M)[3]-B[1])/2)|0)]);AK6.L(A.jb.Bc);this.J(AK6,0);}}}
},Ab7:function(E){this.N5=E;A.pe([this,this.WI],this);},ATn:function(E){if(this.
Akb===E)return;this.Akb=E;A.pe([this,this.WI],this);},Df:function(E){if(this.KT===
E)return;this.KT=E;this.DK.L(E);this.Ik.L(E);},AOP:function(){var B;return this.
AOR()-(((((B=this.Mx)<0)?B+0x100000000:B)-1)*86400);},AOR:function(){return A._GetAutoObject(
A.Device.Converter).AhT();},BnS:function(E){if(this.AU0===E)return;this.AU0=E;A.
pe([this,this.WI],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DK={I:this},0);A.acg.Text._Init.call(this.Ik={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.AxW._Init.call(this.AuB={I:this},0);
this.__proto__=C.AhB;this.H(BD);this.Ar(false);this.DK.H(AHG);this.DK.Hn(5);this.
DK.A6(0x11);this.DK.L(A.jb.Text);this.Ik.H(AHG);this.Ik.Hn(5);this.Ik.A6(0x14);this.
Ik.L(A.jb.Text);this.Bc.H(AWx);this.Bc.L(A.jb.Bc);this.KT=A.jb.Text;this.AuB.H(AWy
);this.J(this.DK,0);this.J(this.Ik,0);this.J(this.Bc,0);this.DK.S(A.aaL(A.fl.Ak)
);this.Ik.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DK._Done();this.Ik._Done();this.Bc._Done();this.AuB._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DK._ReInit(
);this.Ik._ReInit();this.Bc._ReInit();this.AuB._ReInit();this.DK.S(A.aaL(A.fl.Ak
));this.Ik.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AuB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A5o={Ah:null,Timestamp:0,A5:0,_Init:function(
aArg){this.__proto__=C.A5o;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajv={K1:null,MX:null,AY:0,Ot:
function(A7,Qi){var Hh;Hh=A._NewObject(C.A5o,0);Hh.A5=A7;Hh.Timestamp=Qi;if(!this.
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
!!GZ){this.N.Hy(A.jV);this.N.CU(GZ.AxP);this.N.Je.C3(255);this.N.GW.C3(GZ.Axl);this.
N.AFe(GZ.Avr);this.N.Anz(GZ.AmU);this.N.C1(GZ.AQn);this.N.C2(GZ.Aq7);GZ.A3o(this
);}},ML:function(s){this.DJ(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ej;this.Background.H(Qc);this.Background.L(A.jb.CS);this.N.H(Xf);this.
N.Ar(false);this.N.Z(true);this.Y.H(Ff);this.Y.JT(1);this.Ay.H(It);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AT6={NE:null,AS5:null,Ad5:null,VH:null,GU:null,PopupTimeout:null,Aca:null,AgH:
null,PopupIdToString:null,AtI:null,Text:A.jV,AkJ:A.jV,AKb:A.jV,Ak4:0,ALj:-1,Azt:-
1,AKN:0,AT8:0,A2s:false,CP:function(){this.A_I(this.PopupIdToString.BS(this.AT8)
);},Init:function(aArg){this.Bpm(this);},Bg5:function(G){var B;if(this.Ak4>0){this.
A_Y((this.Ak4/1000)|0);this.PopupTimeout.WD(0);this.PopupTimeout.PV(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxL(this);},Bg1:function(G){var M1=this.
Text;var AfX=this.AkJ;var AKL=A.abi(16,A.jV,null);var index=0;var Azo=0;while(AfX
!==A.jV){Azo=AfX.indexOf(A.Device.PopupParamSeparator,0);if(Azo!==-1){AKL.Set(index
,A.ab1(AfX,Azo,(AfX.length-Azo)+1));AfX=A.ab1(AfX,0,Azo+1);index=index+1;if(index>=
16){A.ab5("%s",(AWz+AfX)+AWA);AfX=A.jV;}}else{AKL.Set(index,AfX);AfX=A.jV;}}index=
0;while(index<M1.length){if((M1.charCodeAt(index)||0)===0x7B){var BdU=M1.indexOf(
String.fromCharCode(0x7D),index);if(BdU===-1){A.ab5("%s",(((AWB+M1)+AWC)+index.toFixed(
))+Alc);index=M1.length;}else{var BfM=(BdU-index)-1;var A30=A.abW(M1,index+1,BfM
);var AKK=A.wz(A30,-1,10);M1=A.ab1(M1,index,BfM+2);if(A30===AWD)this.Bn_(index);
else if(((AKK>0)&&(AKK<=16))&&(this.AkJ!==A.jV)){M1=A.abU(M1,AKL.Get(AKK-1),index
);if(this.A2s===true)this.Bn9(A.wz(AKL.Get(AKK-1),0,10));}else A.ab5("%s",(AWE+A30
)+AWF);}}index=index+1;}this.Bn8(M1);},CC:function(G){A.pe([this,this.Bg5],this);
},Ai:function(Ae){var B;this.Ad5.H(A.aaT(this.GU.Dc(),Ah0));this.VH.H(A.aaT(this.
GU.Dc(),Ah0));if(!!this.NE){this.NE.H(A.abM(this.NE.M,this.GU.M[0]));this.NE.H(A.
abO(this.NE.M,this.GU.M[3]+10));this.NE.H(A.abL(this.NE.M,(B=this.GU.M)[2]-B[0])
);this.NE.H(A.abI(this.NE.M,8));this.Ad5.H(A.abh(A.aaT(this.GU.Dc(),Ah0),AHH));this.
VH.H(A.abh(A.aaT(this.GU.Dc(),Ah0),AHH));}else{this.Ad5.H(A.aaT(this.GU.Dc(),Ah0
));this.VH.H(A.aaT(this.GU.Dc(),Ah0));}},DE:function(G){var JC=(A.Core.BK.isPrototypeOf(
G)?G:null);if((JC.CO===4)&&((this.VH.M[1]+this.M[1])<this.M[1])){this.GU.H(A.abO(
this.GU.M,this.GU.M[1]+28));this.Am();}else if((JC.CO===5)&&((this.VH.M[3]+this.
M[1])>this.N.M[1])){this.GU.H(A.abO(this.GU.M,this.GU.M[1]-28));this.Am();}if((JC.
CO===6)&&!!this.D_().CE)this.D_().AFn(1);else if((JC.CO===7)&&!!this.D_().B$)this.
D_().AFn(3);},I0:function(G){switch(this.D_().Ahm){case 1:this.Al3(this);break;case
3:this.ApM(this);break;case 2:this.AAF(this);break;case 0:break;default:A.ab5("%s%e"
,AWG,this.D_().Ahm);}},Al3:function(G){var B;(B=this.D_().CE)?B[1].call(B[0],this
):null;},ApM:function(G){var B;(B=this.D_().B$)?B[1].call(B[0],this):null;},AAF:
function(G){var B;(B=this.D_().Cf)?B[1].call(B[0],this):null;},LO:function(G){this.
N.I8.L((this.N.I8.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
AxL(this);},A_I:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bg1],this);},BBd:function(G){var B;this.A_Y(this.Azt-1);if(this.Azt<=0){this.PopupTimeout.
AxL(this);(B=this.AS5)?B[1].call(B[0],this):null;}},A_K:function(E){if(this.Ak4===
E)return;this.Ak4=E;A.pe([this,this.Bg5],this);},A_u:function(E){if(this.AkJ===E
)return;this.AkJ=E;A.pe([this,this.Bg1],this);},Bn8:function(E){if(this.AKb===E)
return;this.AKb=E;this.ABw(this);this.ByV(this);},ABw:function(G){if((this.Azt!==-
1)&&(this.ALj!==-1)){var BzK=this.AtI.Format(AWH);this.GU.R(A.abU(this.AKb,BzK,this.
ALj));}else this.GU.R(this.AKb);this.GU.H(AHI);},Bn_:function(E){if(this.ALj===E
)return;this.ALj=E;this.ABw(this);},A_Y:function(E){if(this.Azt===E)return;this.
Azt=E;this.AtI.AFS(E);A.pe([this,this.ABw],this);},ByV:function(G){this.GU.Dc();
if(this.GU.M[1]<=this.M[1])this.GU.H(A.abO(this.GU.M,28));this.Am();},A_0:function(
E){if(this.A2s===E)return;this.A2s=E;if(E===true)A.pe([this,this.BBP],this);},BBP:
function(G){if(!this.NE){this.NE=A._NewObject(A.acr.ADv,0);this.NE.Ga(0);this.NE.
EU(100);this.NE.OnSetAppearance(this.Aca);this.J(this.NE,0);this.AhE(this.NE,this.
GU);}this.NE.Bx(this.AKN);},Bn9:function(E){if(this.AKN===E)return;this.AKN=E;if(
!!this.NE)this.NE.Bx(this.AKN);},Bpm:function(G){var B;this.N.C3(0);this.AgH.AnX(
this);},BnI:function(E){if(this.AT8===E)return;this.AT8=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad5={I:this},0);A.acg.BU._Init.
call(this.VH={I:this},0);A.acg.Text._Init.call(this.GU={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acr.ADw._Init.call(this.Aca={I:this},
0);A.acl.Gm._Init.call(this.AgH={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtI={I:this},0);this.
__proto__=C.AT6;var B;this.H(Ce);this.Background.H(Ff);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ek.Ar(false);this.Ek.Z(false);this.Ad5.H(AHJ);this.
Ad5.L(A.jb.CJ);this.VH.H(AHJ);this.VH.Nm(2);this.VH.L(A.jb.Text);this.GU.H(AHI);
this.GU.Hn(10);this.GU.I$(true);this.GU.Bn6(0);this.GU.KS(true);this.GU.L(A.jb.Text
);this.PopupTimeout.PV(0);this.Aca.A_P(0);this.Aca.A_N(A.jb.AV);this.Aca.A_M(0);
this.Aca.AF8(AHq);this.AgH.HN(1);this.AgH.B2=255;this.AgH.Cx=0;this.JZ(this.Ek,-
1);this.J(this.Ad5,0);this.J(this.VH,0);this.J(this.GU,0);this.GU.S(A.aaL(A.fl.Af
));this.PopupTimeout.MC=[this,this.BBd];this.Aca.A_O(A.aaL(A.ach.NW));this.Aca.A_L(
A.aaL(A.ach.NW));this.AgH.Q=[B=this.N,B.Awo,B.A0s];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad5._Done();this.VH._Done();this.GU._Done();this.PopupTimeout.
_Done();this.Aca._Done();this.AgH._Done();this.PopupIdToString._Done();this.AtI.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad5._ReInit();this.VH._ReInit();this.GU._ReInit();this.PopupTimeout._ReInit();this.
Aca._ReInit();this.AgH._ReInit();this.PopupIdToString._ReInit();this.AtI._ReInit(
);this.GU.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS5)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtI)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mq={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Text;
GY=A.jb.Bm;}if(!this.LI){this.Background.L(FS);this.V.L(A.jb.Am4);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KG){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Mq;},_className:"Application::DarkThemeMenuItem"
};C.Anj={AdE:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Anj;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaE:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Ln:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.B$=[this,this.A3p];this.BP.Cf=null;this.BP.CE=[this,this.AaE];this.
BP.CU(A.aaR(A.acf.Ok));this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.AeA));}return this.
BP;},A3p:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).I0(this);},CC:function(G){},AIO:function(s){this.CC(s);},E4:function(
G){},AyJ:function(s){this.E4(s);},_Init:function(aArg){C.Abh._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APO={V$:
null,YP:null,YJ:null,Init:function(aArg){this.Bb(this.V$);},Adv:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YP)A._GetAutoObject(A.Device.
Device).A3(6,true,A.jV,0,[this,this.BB3]);else if(Aa===this.V$)A._GetAutoObject(
A.Device.Device).A3(9,true,A.jV,0,[this,this.BCm]);else if(Aa===this.YJ)A._GetAutoObject(
C.A8).Cd(4);else throw new Error(Ayl);A._GetAutoObject(A.Device.Device).Dw(0);},
BB3:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(
As.PopupState===7))A._GetAutoObject(A.Device.Device).AGt();},BCm:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))
A._GetAutoObject(A.Device.Device).AxC();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mq._Init.call(this.V$={I:this},0);C.Mq._Init.call(this.YP={I:this
},0);C.Mq._Init.call(this.YJ={I:this},0);this.__proto__=C.APO;this.H(AcP);this.V$.
H(BD);this.V$.Ar(true);this.V$.T(A.aaR(A.acf.A$D));this.V$.Bi(true);this.YP.H(IV
);this.YP.Ar(true);this.YP.T(A.aaR(A.acf.A$l));this.YP.Bi(true);this.YJ.H(Qd);this.
YJ.Ar(true);this.YJ.T(A.aaR(A.acf.SS));this.YJ.Bi(true);this.J(this.V$,0);this.J(
this.YP,0);this.J(this.YJ,0);this.V$.AR=[this,this.Adv];this.YP.AR=[this,this.Adv
];this.YJ.AR=[this,this.Adv];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.V$._Done();this.YP._Done();this.YJ._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.V$._ReInit(
);this.YP._ReInit();this.YJ._ReInit();this.V$.T(A.aaR(A.acf.A$D));this.YP.T(A.aaR(
A.acf.A$l));this.YJ.T(A.aaR(A.acf.SS));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.V$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GK={AaB:null,OverlayMenu:null,WM:null,A4j:null
,Lb:null,A3Z:null,AkK:null,N3:null,AAd:100,BcR:false,Init:function(aArg){var B;A.
zX([this,this.Bfd],[B=A._GetAutoObject(A.Device.Device),B.Awp,B.AyS],0);A.zX([this
,this.Be9],[B=A._GetAutoObject(A.Device.Device),B.ASL,B.A0q],0);A.zX([this,this.
A3g],[B=A._GetAutoObject(A.Device.Device),B.Awd,B.AyL],0);A.zX([this,this.BAK],[
B=A._GetAutoObject(A.Device.Device),B.Awa,B.AyK],0);A.zX([this,this.BAL],[B=A._GetAutoObject(
A.Device.Device),B.A8G,B.Bbi],0);A.zX([this,this.ApN],[B=A._GetAutoObject(A.Device.
Device),B.ASW,B.A0y],0);A.zX([this,this.Bfu],[B=A._GetAutoObject(A.Device.Device
),B.Wz,B.Xg],0);A.pe([this,this.Bfd],this);A.pe([this,this.Be9],this);A.pe([this
,this.ApN],this);A.pe([this,this.Bfu],this);this.A4j.Au([B=this.WM,B.AEz,B.Zn]);
this.J(this.WM,0);this.Bb(this.WM);this.Byy(this);},Ai:function(Ae){},Be9:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEl){if(!this.AaB){this.AaB=A._NewObject(
C.Asu,0);this.AaB.H(A.abJ(this.AaB.M,this.WM.M.slice(0,2)));this.AaB.H(A.abO(this.
AaB.M,this.WM.M[3]-((B=this.AaB.M)[3]-B[1])));this.J(this.AaB,1);}}else{if(!!this.
AaB)this.HO(this.AaB);this.AaB=null;}},Bfd:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APO,0));break;case 8:this.Dw(A._NewObject(C.AL7,0));break;case 2:this.Dw(A._NewObject(
C.AL4,0));break;case 3:this.Dw(A._NewObject(C.AL$,0));break;case 4:this.Dw(A._NewObject(
C.AUo,0));break;case 5:this.Dw(A._NewObject(C.AVV,0));break;case 6:this.Dw(A._NewObject(
C.AT1,0));break;case 7:this.Dw(A._NewObject(C.Amx,0));break;case 11:this.Dw(A._NewObject(
C.AMD,0));break;case 12:this.Dw(A._NewObject(C.AMC,0));break;case 9:this.Dw(A._NewObject(
C.ARW,0));break;case 10:this.Dw(A._NewObject(C.AMy,0));break;case 14:this.Dw(A._NewObject(
C.ARS,0));break;case 15:this.Dw(A._NewObject(C.ART,0));break;case 13:this.Dw(A._NewObject(
C.ARU,0));break;case 16:this.Dw(A._NewObject(C.AMZ,0));break;default:throw new Error(
AWI+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WG).ArF(
null);this.N3.AqF(this.OverlayMenu,A._GetAutoObject(C.AxF),null,null,[B=this.OverlayMenu
,B.AyJ],null,true);this.Bb(this.WM);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N3.AkM(this.OverlayMenu,A._GetAutoObject(C.AxE),null,null,null,null,null,[B=this.
OverlayMenu,B.AIO],null,false);this.Bb(this.N3);A._GetAutoObject(C.WG).ArF(this.
OverlayMenu.Ln());}else if(!!this.Lb){this.Bb(this.N3);A._GetAutoObject(C.WG).ArF(
this.Lb.Akr().Ln());}},Ahr:function(E){var B;if(this.Lb===E)return;if(!!this.Lb){
A._GetAutoObject(C.WG).ArF(null);this.N3.AqF(this.Lb.Akr(),A._GetAutoObject(C.Afj
),null,null,[B=this.Lb.Akr(),B.AyJ],null,false);this.Bb(this.WM);}this.Lb=E;if(!
!this.Lb){this.N3.AkM(this.Lb.Akr(),A._GetAutoObject(C.Afj),null,null,null,null,
null,[this,this.Bl4],null,false);this.Bb(this.N3);A._GetAutoObject(C.WG).ArF(this.
Lb.Akr().Ln());}else if(!!this.OverlayMenu){this.Bb(this.N3);A._GetAutoObject(C.
WG).ArF(this.OverlayMenu.Ln());}},Byy:function(G){var B;var F;this.J(this.A3Z,0);(
F=A._GetAutoObject(C.WG),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WG).M)[3]-B[1]))));this.ZD(this.N3);},A3g:function(G){if(A._GetAutoObject(A.Device.
Device).AmE)switch(A._GetAutoObject(A.Device.Device).Ii){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A8).Ab9(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aa4<98)A._GetAutoObject(C.A8).Cd(4);}else{this.AAd=100;this.Bc1();}},BAK:
function(G){this.Bc1();},Bc1:function(){if(!A._GetAutoObject(A.Device.Device).AmE
){if(A._GetAutoObject(A.Device.Device).Aa4<=2){if(this.AAd>2)switch(A._GetAutoObject(
A.Device.Device).Ii){case 38:break;case 4:case 39:A._GetAutoObject(C.A8).Ab9(38);
break;default:A._GetAutoObject(C.A8).Cd(38);}}else if(A._GetAutoObject(A.Device.
Device).Aa4<=10){if(this.AAd>10)switch(A._GetAutoObject(A.Device.Device).Ii){case
39:break;case 4:case 38:A._GetAutoObject(C.A8).Ab9(39);break;default:A._GetAutoObject(
C.A8).Cd(39);}}else if(A._GetAutoObject(A.Device.Device).Aa4<=20){if(this.AAd>20
)switch(A._GetAutoObject(A.Device.Device).Ii){case 39:break;case 4:case 38:A._GetAutoObject(
C.A8).Ab9(39);break;default:A._GetAutoObject(C.A8).Cd(39);}}else switch(A._GetAutoObject(
A.Device.Device).Ii){case 38:case 4:case 39:A._GetAutoObject(C.A8).FB();break;default:;
}this.AAd=A._GetAutoObject(A.Device.Device).Aa4;}},BAL:function(G){switch(A._GetAutoObject(
A.Device.Device).Aqs){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A3(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anx(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A3(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Anx(0
);}break;default:A.ab5("%s",AWJ+A._GetAutoObject(A.Device.Device).Aqs.toFixed());
}},ApN:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A8).Cd(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Ii===5)A._GetAutoObject(C.A8).Ab9(3);break;
default:;}},Bfu:function(G){switch(A._GetAutoObject(A.Device.Device).P4.ZZ){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).Us(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WE(65535);A._GetAutoObject(A.Device.Device).Us(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WE(255);A._GetAutoObject(A.Device.Device).Us(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WE(16776960);A._GetAutoObject(
A.Device.Device).Us(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WE(16711935
);A._GetAutoObject(A.Device.Device).Us(true);}break;default:A.ab5("%s",AWK+A._GetAutoObject(
A.Device.Device).P4.ZZ.toFixed());}this.Bn7(A._GetAutoObject(A.Device.Helper).Bj0(
));},Bl4:function(G){var B;this.Lb.Akr().CC(this);this.Lb.BBb(this);},Bn7:function(
E){if(this.BcR===E)return;this.BcR=E;if(E){if(A._GetAutoObject(A.Device.Device).
Ii===3)A._GetAutoObject(C.A8).Cd(27);else if(A._GetAutoObject(A.Device.Device).Ii
!==27)A._GetAutoObject(A.Device.Device).A3(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).Ii===27)A._GetAutoObject(A.Device.Device).A3(112,true,A.jV,0,[this
,this.A1e]);},A1e:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!As&&(As.Id===112))&&(As.PopupState===7))A._GetAutoObject(C.A8).Ab9(85);}
,Bk5:function(){return this.Lb;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkK._Init.call(this.AkK={I:this},0);C.N3._Init.call(this.N3={I:this},0);this.
__proto__=C.GK;this.H(Ce);this.N3.H(Qc);this.J(this.N3,0);this.WM=A._NewObject(C.
WM,0);this.A4j=A._GetAutoObject(C.A8);this.AkK.ANF=[this,this.Bk5,this.Ahr];this.
A3Z=A._GetAutoObject(C.WG);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkK._Done();this.N3._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkK._ReInit();this.N3._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WM)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4j)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Lb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3Z)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abh={A_$:
null,BP:null,N:null,Cq:null,Ana:null,Anc:null,QT:null,Anb:null,Am_:null,Ane:null
,Am$:null,DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;
case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x14
);if(!!X)this.Bb(X);},BbS:function(s){this.DE(s);},Al3:function(G){var D5=(A.Core.
BK.isPrototypeOf(G)?G:null);if(D5.Ach&&(this.D_().Aso===false))return;A.pe(this.
D_().CE,this);},AI1:function(s){this.Al3(s);},ApM:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);if(D5.Ach&&(this.D_().ZC===false))return;A.pe(this.D_().
B$,this);},AI3:function(s){this.ApM(s);},I0:function(G){if(this.QT.Ach)return;},
Atp:function(s){this.I0(s);},AAF:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?
G:null);if(D5.Ach&&(this.D_().WJ===false))return;A.pe(this.D_().Cf,this);},AI2:function(
s){this.AAF(s);},D_:function(){if(!!this.Ln())return this.BP;else return this.N;
},Ln:function(){return this.BP;},GS:function(E){this.A_$=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BK._Init.
call(this.Cq={I:this},0);A.Core.BK._Init.call(this.Ana={I:this},0);A.Core.BK._Init.
call(this.Anc={I:this},0);A.Core.BK._Init.call(this.QT={I:this},0);A.Core.BK._Init.
call(this.Anb={I:this},0);A.Core.BK._Init.call(this.Am_={I:this},0);A.Core.BK._Init.
call(this.Ane={I:this},0);A.Core.BK._Init.call(this.Am$={I:this},0);this.__proto__=
C.Abh;this.H([0,0,C.Asx[0],C.Asx[1]]);this.N.H(Xf);this.N.Ar(false);this.N.Z(false
);this.Cq.Filter=147;this.Ana.Filter=26;this.Anc.Filter=28;this.QT.Filter=1;this.
Anb.Filter=27;this.Am_.Filter=44;this.Ane.Filter=9;this.Am$.Filter=42;this.J(this.
N,0);this.Cq.BL=[this,this.BbS];this.Cq.D1=[this,this.BbS];this.Ana.BL=[this,this.
AI1];this.Ana.D1=[this,this.AI1];this.Anc.BL=[this,this.AI3];this.Anc.D1=[this,this.
AI3];this.QT.BL=[this,this.Atp];this.QT.D1=[this,this.Atp];this.Anb.BL=[this,this.
AI2];this.Anb.D1=[this,this.AI2];this.Am_.BL=[this,this.AI1];this.Am_.D1=[this,this.
AI1];this.Ane.BL=[this,this.AI3];this.Ane.D1=[this,this.AI3];this.Am$.BL=[this,this.
AI2];this.Am$.D1=[this,this.AI2];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Ana._Done();this.Anc._Done();this.QT._Done();this.
Anb._Done();this.Am_._Done();this.Ane._Done();this.Am$._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Ana._ReInit();this.Anc._ReInit();this.QT._ReInit();this.Anb._ReInit(
);this.Am_._ReInit();this.Ane._ReInit();this.Am$._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A_$)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ana)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Am_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Am$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxE={_Init:function(){A.acl.AGR._Init.call(this,0);this.Kj=0x22;this.Ad9=true;
this.Au6=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxF={_Init:function(){A.acl.AGR._Init.call(this,0);this.Kj=0x22;this.Ad9=true;
this.Au6=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AUY={Sc:function(){var B;var Ao=(A.acl.Afb.isPrototypeOf(B=A.acl.Aen.Sc.call(this
))?B:null);if(!Ao)throw new Error(As7);Ao.Cp.Cx=100;return Ao;},Sb:function(){var
B;var Ao=(A.acl.Axm.isPrototypeOf(B=A.acl.Aen.Sb.call(this))?B:null);if(!Ao)throw new
Error(As7);Ao.E0.B2=100;return Ao;},_Init:function(aArg){A.acl.Aen._Init.call(this
,aArg);this.__proto__=C.AUY;},_className:"Application::ShadeTransition"};C.Am0={
Ag_:null,SX:null,HQ:null,DS:null,AnimalId:-1,GroupId:-1,ADc:true,Df:function(E){
C.BQ.Df.call(this,E);this.SX.L(E);this.HQ.L(E);this.Ag_.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HQ.R(A.aaR(A.acf.Afd)
);else this.HQ.R(E.toFixed());},Ab3:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SX.R(A.aaR(A.acf.Afd));else this.SX.R(E.toFixed());},DX:function(
G){},Ns:function(s){this.DX(s);},A_c:function(E){if(this.ADc===E)return;this.ADc=
E;this.SX.Z(this.ADc);this.Ag_.Z(this.ADc);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag_={I:this},0);A.acg.Text._Init.call(this.SX={
I:this},0);A.acg.Text._Init.call(this.HQ={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.Am0;this.Ag_.H(AWL);this.SX.H(AWM);this.SX.A6(0x11);this.
SX.R(A.aaR(A.acf.Afd));this.HQ.H(AWN);this.HQ.A6(0x11);this.HQ.R(A.aaR(A.acf.Afd
));this.DS.H(AWO);this.J(this.Ag_,0);this.J(this.SX,0);this.J(this.HQ,0);this.J(
this.DS,0);this.Ag_.Ax(A.aaL(A.ach.AQC));this.SX.S(A.aaL(A.fl.Af));this.HQ.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BQ;this.Ag_._Done();this.SX._Done(
);this.HQ._Done();this.DS._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ.
_ReInit.call(this);this.Ag_._ReInit();this.SX._ReInit();this.HQ._ReInit();this.DS.
_ReInit();this.SX.R(A.aaR(A.acf.Afd));this.HQ.R(A.aaR(A.acf.Afd));this.SX.S(A.aaL(
A.fl.Af));this.HQ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this
,D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADm={Init:function(
aArg){var B;A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SJ
],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper).W,B.A8Z,B.AnD],0);
A.zV([this,this.Ns],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Ns],[
B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC],0);A.zX([this,this.Ns],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9B,B.Axi],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.
Helper).W,B.A8Q,B.Ae3],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper
).W,B.A8R,B.Uq],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper).W,B.
A8U,B.Ae7],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Helper).W,B.A8Y,B.
Ae9],0);A.pe([this,this.Ns],this);},Df:function(E){C.Am0.Df.call(this,E);this.DS.
Df(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqY()){this.Ab3(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab3(-1);this.OnSetAnimalId(-1);}this.DS.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AE_(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae3(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uq(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae7(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae9(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Am0._Init.call(this,aArg);this.
__proto__=C.ADm;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Km={AhQ:A.abi(3,A.jV,null),Ca:A.abi(3,0,{0:7,1:30,2:90}),Ann:3,Du:function(){
if(this.Ann<3)return this.Ann;else return 3;},C6:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ann))return-1;return this.Ca.Get(aIndex);},Gl:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ann))return AWP;return this.AhQ.Get(aIndex);},DZ:function(
A7){var O=0;while((O<3)&&(O<=this.Ann)){if(this.Ca.Get(O)===A7)return O;O=O+1;}return-
1;},H3:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ann)){if(this.Ca.Get(
O)>max)max=this.Ca.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhQ=[]).__proto__=C.Km.AhQ;(this.Ca=[]).__proto__=C.Km.Ca;this.
__proto__=C.Km;this.AhQ.Set(0,A.aaR(A.acf.A7C));this.AhQ.Set(1,A.aaR(A.acf.A7A));
this.AhQ.Set(2,A.aaR(A.acf.A7B));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhQ.Set(0,A.aaR(A.acf.A7C));this.AhQ.Set(1,A.aaR(A.acf.A7A));this.AhQ.Set(2,A.aaR(
A.acf.A7B));},_className:"Application::Days"};C.AUV={Amz:null,BT:null,Q8:null,QH:
null,A$1:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BBx],[B=A._GetAutoObject(A.Device.Device),B.Arz,B.Ato],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BT.L(A.jb.Bm);if(!!this.Q)this.BT.R(((AWQ+A._GetAutoObject(
A.Device.Converter).Ak2((F=this.Q,F[1].call(F[0]))))+CQ)+A._GetAutoObject(A.acj.
Temperature).AlM());this.H4.Z((this.AM<A._GetAutoObject(A.Device.Helper).A6Z())&&(
Fw||GE));},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Kd:function(G){var F;var BO=this.AM;C.Ds.Kd.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A6Z()){this.Bx(this.AM+10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},J_:function(G){var F;var BO=this.
AM;C.Ds.J_.call(this,G);this.Bx(this.AM-10);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A_S:function(E){if(this.A$1===E)return;
this.A$1=E;this.Am();},BBx:function(G){this.Am();},_Init:function(aArg){C.Ds._Init.
call(this,aArg);A.acg.AL._Init.call(this.Amz={I:this},0);C.CH._Init.call(this.BT={
I:this},0);A.acg.AL._Init.call(this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={
I:this},0);this.__proto__=C.AUV;this.H(UY);this.Background.H(UY);this.V.H(As8);this.
V.L(A.jb.Bm);this.Amz.H(AWR);this.Amz.L(A.jb.Afu);this.Hx.H(AWS);this.BT.H(AWT);
this.BT.A6(0x12);this.BT.L(A.jb.Text);this.H4.H(AWU);this.Q8.H(AWV);this.Q8.L(A.
jb.E1);this.QH.H(AWW);this.J(this.Amz,-2);this.J(this.BT,-1);this.J(this.Q8,0);this.
J(this.QH,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(
A.fl.EK));this.BT.A2(A.aaL(A.fl.Af));this.QH.Ax(A.aaL(A.ach.ADC));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ds;this.Amz._Done();this.BT._Done();this.Q8.
_Done();this.QH._Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.
call(this);this.Amz._ReInit();this.BT._ReInit();this.Q8._ReInit();this.QH._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.BT.S(A.aaL(A.fl.EK));this.
BT.A2(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
Amz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnT={Q:null
,Ai4:null,Init:function(aArg){var B;A.zX([this,this.BbP],[B=A._GetAutoObject(A.Device.
Device),B.AEz,B.Bbb],0);A.pe([this,this.BbP],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ab9:function(Alp){A._GetAutoObject(A.Device.Device).Zn(Alp
);},AKA:function(G){if(this.K&&this.K.AKA)return this.K.AKA.apply(this,arguments
);else return C.AnT.BbW.apply(this,arguments);},BbW:function(G){var F;if(!this.Q
){A.ab5("%s",AWX);return;}var By=null;if(this.Ai4.Contains(A._GetAutoObject(A.Device.
Device).Ii)){By=this.Ai4.A_9();while(!!By&&(By.An7!==A._GetAutoObject(A.Device.Device
).Ii))By=this.Ai4.A_9();}if(!By)By=this.Bz7(A._GetAutoObject(A.Device.Device).Ii
);(F=this.Q,F[2].call(F[0],By));},BbP:function(s){this.AKA(s);},Bz7:function(Alp
){var By=null;switch(Alp){case 0:case 1:By=A._NewObject(C.AU4,0);break;case 2:By=
A._NewObject(C.X0,0);break;case 3:By=A._NewObject(C.AvC,0);break;case 53:By=A._NewObject(
C.AVJ,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.ASa,0);break;case 6:By=A._NewObject(C.ARL,0);break;case 16:By=A._NewObject(C.ANN
,0);break;case 22:By=A._NewObject(C.AVE,0);break;case 17:By=A._NewObject(C.AVj,0
);break;case 42:By=A._NewObject(C.ANK,0);break;case 87:By=A._NewObject(C.AUw,0);
break;case 88:By=A._NewObject(C.AUv,0);break;case 89:By=A._NewObject(C.AVA,0);break;
case 95:By=A._NewObject(C.AVC,0);break;case 23:By=A._NewObject(C.AV2,0);break;case
18:By=A._NewObject(C.AN0,0);break;case 19:By=A._NewObject(C.AUx,0);break;case 37:
By=A._NewObject(C.ARc,0);break;case 76:By=A._NewObject(C.AUc,0);break;case 63:By=
A._NewObject(C.ANY,0);break;case 64:By=A._NewObject(C.ANZ,0);break;case 82:By=A.
_NewObject(C.ANX,0);break;case 83:By=A._NewObject(C.ANV,0);break;case 92:By=A._NewObject(
C.ANT,0);break;case 93:By=A._NewObject(C.ANW,0);break;case 65:By=A._NewObject(C.
ANU,0);break;case 5:By=A._NewObject(C.AVc,0);break;case 4:By=A._NewObject(C.Ad$,
0);break;case 39:By=A._NewObject(C.ANk,0);break;case 38:By=A._NewObject(C.AND,0);
break;case 28:By=A._NewObject(C.Wu,0);break;case 7:By=A._NewObject(C.AqI,0);break;
case 81:By=A._NewObject(C.AN7,0);break;case 31:By=A._NewObject(C.Ars,0);break;case
78:By=A._NewObject(C.AR_,0);break;case 34:By=A._NewObject(C.AL2,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GJ,0);break;case 9:By=A._NewObject(C.I4,0);break;case 24:By=A._NewObject(C.AMh
,0);break;case 10:By=A._NewObject(C.Amv,0);break;case 21:By=A._NewObject(C.AMl,0
);break;case 11:By=A._NewObject(C.AMk,0);break;case 29:By=A._NewObject(C.AuN,0);
break;case 48:By=A._NewObject(C.AMj,0);break;case 30:By=A._NewObject(C.AMi,0);break;
case 12:By=A._NewObject(C.AMg,0);break;case 40:By=A._NewObject(C.AMf,0);break;case
14:By=A._NewObject(C.ANB,0);break;case 13:By=A._NewObject(C.ANC,0);break;case 20:
By=A._NewObject(C.AVT,0);break;case 41:By=A._NewObject(C.AVS,0);break;case 43:By=
A._NewObject(C.AOI,0);break;case 44:By=A._NewObject(C.AOH,0);break;case 61:By=A.
_NewObject(C.AN6,0);break;case 62:By=A._NewObject(C.AN5,0);break;case 46:By=A._NewObject(
C.ASn,0);break;case 47:By=A._NewObject(C.ASm,0);break;case 85:By=A._NewObject(C.
AV8,0);break;case 86:By=A._NewObject(C.AV7,0);break;case 71:By=A._NewObject(C.ASi
,0);break;case 72:By=A._NewObject(C.ASh,0);break;case 74:By=A._NewObject(C.AM1,0
);break;case 90:By=A._NewObject(C.AUe,0);break;case 73:By=A._NewObject(C.AUy,0);
break;case 51:By=A._NewObject(C.AL6,0);break;case 52:By=A._NewObject(C.AL5,0);break;
case 15:By=A._NewObject(C.AUl,0);break;case 60:By=A._NewObject(C.AVi,0);break;case
69:By=A._NewObject(C.ARJ,0);break;case 70:By=A._NewObject(C.ARI,0);break;case 26:
By=A._NewObject(C.ASb,0);break;case 54:By=A._NewObject(C.AR9,0);break;case 25:By=
A._NewObject(C.AOi,0);break;case 66:By=A._NewObject(C.AOj,0);break;case 59:By=A.
_NewObject(C.AOh,0);break;case 58:By=A._NewObject(C.AOk,0);break;case 56:By=A._NewObject(
C.AOl,0);break;case 57:By=A._NewObject(C.AqL,0);break;case 68:By=A._NewObject(C.
AOm,0);break;case 67:By=A._NewObject(C.AOf,0);break;case 84:By=A._NewObject(C.AMn
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AMA,0);break;case 91:By=A._NewObject(C.AVo,0
);break;case 94:By=A._NewObject(C.Aqf,0);break;default:throw new Error(AWY);}if(
!!By)By.An7=Alp;return By;},Cd:function(Alp){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AWZ);else this.Ai4.Boy((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zn(Alp);},FB:function(){var Bf2=3;var Bf1=this.Ai4.Boo();if(!!Bf1
)Bf2=Bf1.An7;else A.ab5("%s",AW0);A._GetAutoObject(A.Device.Device).Zn(Bf2);},_Init:
function(aArg){C.A$t._Init.call(this.Ai4={I:this},0);this.__proto__=C.AnT;this.Init(
aArg);var J4=this._variants();if(J4){this.K={};J4._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai4.
_Done();A.h7--;},_ReInit:function(){this.Ai4._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnT._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A8={_Init:function(){C.AnT._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGl={H7:null,Yu:null,Aff:null,AaH:null,MD:
null,Azz:1,RatingMode:0,RatedAttribute:0,CP:function(){this.Yu.R(this.Bdx(this.RatedAttribute
));this.AKF(this);},Ai:function(Ae){this.MD.R(A._GetAutoObject(A.Device.Helper).
MG(A.aaR(A.acf.AR0),O8,this.Azz.toFixed()));if(this.RatingMode===1)this.MD.Z(true
);else this.MD.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);this.H7.Gr();this.H7.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axx(this.
H7,5);A.zX([this,this.AKF],[B=A._GetAutoObject(A.Device.Device),B.AST,B.A0v],0);
A.zX([this,this.AKF],[B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC],0);A.pe([
this,this.AKF],this);},AsF:function(G){var a=this.AKj(this.RatedAttribute);this.
Bgg();this.Azz=this.Azz-1;this.Am();if(!a)this.AR7();else this.SI(a);},WR:function(
G){var a=this.BdE(this.RatedAttribute);this.Bgg();this.Azz=this.Azz+1;this.Am();
if(!a)this.A70();else this.SI(a);},AKj:function(Nu){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Nu){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHK);},BdE:function(Nu){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Nu){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHK);},SI:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yu.R(this.Bdx(E));this.
DJ(E);this.Aff.AnI(this.H7.Bjc(E));if(!this.AKj(E)){if(this.ARl())this.N.Cw(A.aaL(
A.ach.AeD));else this.N.Cw(null);}else this.N.Cw(A.aaL(A.ach.AeA));},Bdx:function(
Nu){return this.AaH.BS(Nu);},Bz6:function(Nu){if(!!Nu){var a=this.AKj(Nu);if(!a)
return A.jV;else return this.Bdy(a);}else return A.jV;},Bz5:function(Nu){if(!!Nu
){var a=this.BdE(Nu);if(!a)return A.jV;else return this.Bdy(a);}else return A.jV;
},AR7:function(){},A70:function(){},A60:function(){return null;},Bdy:function(Nu
){return this.AaH.Lv(Nu);},Bgg:function(){if(!!this.RatedAttribute)this.H7.Bo$(this.
RatedAttribute,this.Aff.A5);},AKF:function(G){if(this.ARl())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SI(2);this.DJ(this.RatedAttribute
);this.Am();},Adw:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkX:function(G){var a=this.AKj(this.RatedAttribute);if(!a){if(this.ARl())this.
Adw(this);}else this.AR7();},DJ:function(Nu){this.N.Hy(this.Bz6(Nu));if(!!this.N.
An2){this.N.C1(null);this.N.OQ(true);}else{this.N.C1(A.aaL(A.ach.AeA));this.N.OQ(
false);}this.N.CU(this.Bz5(Nu));if(!!this.N.An4){this.N.C2(null);this.N.OR(true);
}else{this.N.C2(this.A60());this.N.OR(false);}},ARl:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alf,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yu={
I:this},0);C.Rating._Init.call(this.Aff={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaH={I:this},0);A.acg.Text._Init.call(this.MD={I:this},0);this.__proto__=
C.AGl;this.Background.L(A.jb.CJ);this.N.Z(true);this.Dr(C.IK);this.Yu.H(AW1);this.
Yu.KS(true);this.Yu.L(A.jb.Text);this.Aff.H(AW2);this.MD.H(AW3);this.MD.A6(0x14);
this.MD.R(A.aaR(A.acf.AR0));this.MD.L(A.jb.Text);this.J(this.Yu,0);this.J(this.Aff
,0);this.J(this.MD,0);this.Bb(this.Aff);this.N.CE=[this,this.AsF];this.N.Cf=[this
,this.AkX];this.N.B$=[this,this.WR];this.Yu.S(A.aaL(A.fl.Af));this.Aff.AR=[this,
this.WR];this.MD.S(A.aaL(A.fl.Af));this.H7=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yu._Done();this.Aff._Done();this.AaH._Done();
this.MD._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yu._ReInit();this.Aff._ReInit();this.AaH._ReInit();this.MD._ReInit();this.
MD.R(A.aaR(A.acf.AR0));this.Yu.S(A.aaL(A.fl.Af));this.MD.S(A.aaL(A.fl.Af));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aff)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaH)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HY={Y:null,Gender:null,AnimalType:null,Breed:null,Jh:null,Pp:null,AsV:null,BZ:
null,Da:null,C_:null,CG:null,Gn:null,Ay:null,KJ:0,Init:function(aArg){A.zX([this
,this.BbQ],this.BZ.Q,0);A.pe([this,this.BbQ],this);A.pe([this,this.ABb],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANy(this.
Y);},DE:function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;
break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(
X,Fi,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null
,null);this.ABb(this);},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[
1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},AeY:function(E){
if(this.KJ===E)return;this.KJ=E;A.abo([this,this.Awb,this.AeY],0);},ABb:function(
G){var B;var GZ=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hy(A.jV);this.N.C1(
A.aaL(A.ach.E2));this.N.CE=[this,this.AI0];if(!!GZ&&!!GZ.Amr){this.N.Fc(A.jV);this.
N.Jz.C3(255);this.N.ArP(GZ.AqQ);this.N.Cw(GZ.AvL);this.N.Cf=GZ.Amr;}else{this.N.
Fc(A.jV);this.N.Cw(null);this.N.Cf=null;}if(!!GZ&&!!GZ.Agw){this.N.CU(GZ.AxP);this.
N.GW.C3(GZ.Axl);this.N.Anz(GZ.AmU);this.N.C2(GZ.Aq7);this.N.B$=GZ.Agw;}else this.
Auo();},Agh:function(G){A.ab5("%s",Aym);},AyV:function(s){this.Agh(s);},Ew:function(
G){A.ab5("%s",Aym);},AI0:function(s){this.Ew(s);},Auo:function(){A.ab5("%s",Alg);
},AAy:function(G){A.ab5("%s",Aym);},AcT:function(s){this.AAy(s);},JH:function(Ag
){this.Bb(Ag);this.Y.HI(Ag,true,null,null);this.Y.Vy(null,null);},ApI:function(G
){var F;this.C_.Ahv(A._GetAutoObject(A.Device.Helper).Abp((F=this.BZ.Q,F[1].call(
F[0]))));},BbQ:function(s){this.ApI(s);},Awb:function(){return this.KJ;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UQ._Init.call(this.Jh={I:this},
0);A.Device.M5._Init.call(this.Pp={I:this},0);A.Device.KY._Init.call(this.AsV={I:
this},0);C.BW._Init.call(this.BZ={I:this},0);C.BW._Init.call(this.Da={I:this},0);
C.AkV._Init.call(this.C_={I:this},0);C.AxA._Init.call(this.CG={I:this},0);C.AsA.
_Init.call(this.Gn={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.HY;var B;this.N.Z(true);this.Dr(C.IK);this.Y.H(Ff);this.Y.JT(1);this.KJ=A._GetAutoObject(
A.Device.Helper).Abp(this.AnimalType.Q);this.BZ.H(Ah1);this.BZ.Aj(true);this.BZ.
T(A.aaR(A.acf.Aft));this.Da.H(Ayn);this.Da.Aj(true);this.Da.T(A.aaR(A.acf.Afo));
this.C_.H(Aoo);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.KJ));this.C_.Ga(1000);this.
C_.EU(99000);this.C_.Ahv(A._GetAutoObject(A.Device.Helper).Abp(this.AnimalType.Q
));this.CG.H(Ah2);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.Gn.H(AW4);
this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Jh));this.Ay.H(Ayo);this.J(this.Y,0);this.
J(this.BZ,0);this.J(this.Da,0);this.J(this.C_,0);this.J(this.CG,0);this.J(this.Gn
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Gender.L0(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L0(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L0(A._GetAutoObject(A.Device.Helper).W);this.Jh.L0(A._GetAutoObject(A.Device.Helper
).W);this.BZ.Au([B=this.AnimalType,B.B_,B.Cb]);this.BZ.CK(this.AnimalType);this.
Da.Au([B=this.Gender,B.B_,B.Cb]);this.Da.CK(this.Gender);this.C_.Au([this,this.Awb
,this.AeY]);this.CG.Gs([this,this.D_,this.GS]);this.CG.LZ([B=this.CG,B.FV]);this.
CG.L2(A.aaL(A.ach.Edit));this.CG.Au([B=this.Breed,B.B_,B.Cb]);this.CG.CK(this.Breed
);this.CG.Any(this.Pp);this.Gn.Gs([this,this.D_,this.GS]);this.Gn.LZ([B=this.Gn,
B.FV]);this.Gn.L2(A.aaL(A.ach.Edit));this.Gn.Au([B=this.Jh,B.B_,B.Cb]);this.Gn.CK(
this.Jh);this.Gn.Any(this.AsV);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Jh._Done();this.Pp._Done();this.AsV._Done();this.BZ._Done();this.Da._Done(
);this.C_._Done();this.CG._Done();this.Gn._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jh._ReInit();this.
Pp._ReInit();this.AsV._ReInit();this.BZ._ReInit();this.Da._ReInit();this.C_._ReInit(
);this.CG._ReInit();this.Gn._ReInit();this.Ay._ReInit();this.BZ.T(A.aaR(A.acf.Aft
));this.Da.T(A.aaR(A.acf.Afo));this.C_.T(A.aaR(A.acf.KJ));this.CG.T(A.aaR(A.acf.
Breed));this.Gn.T(A.aaR(A.acf.Jh));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AsV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
Wu={Ay$:false,LO:function(G){if(A._GetAutoObject(A.Device.Device).An.Lh())A._GetAutoObject(
A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.HJ().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper
).Aqi(A._GetAutoObject(A.Device.Helper).W);},Auo:function(){this.N.CU(A.jV);this.
N.C2(A.aaL(A.ach.ADG));this.N.B$=[this,this.AyV];},CC:function(G){if(!this.Ay$){
this.Ay$=true;A.pe([this,this.AcT],this);}else C.Ars.CC.call(this,G);},AAy:function(
G){A._GetAutoObject(C.A8).Cd(49);},_Init:function(aArg){C.Ars._Init.call(this,aArg
);this.__proto__=C.Wu;this.JZ(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IK={_Init:function(aArg){C.ADm._Init.call(this,aArg);this.__proto__=C.IK;this.
A_c(false);},_className:"Application::HeaderSelectedAnimalId"};C.I4={Filter:null
,Gender:null,AnimalType:null,Transponder:null,El:null,Y:null,P6:null,S6:null,Oa:
null,S7:null,Nr:null,Ou:null,RQ:null,Ov:null,RR:null,NH:null,Ld:null,Jr:null,KW:
null,Mv:null,Yo:null,S8:null,RS:null,Ay:null,Ax2:0,Ax1:0,AuL:0,AuK:0,Arr:0,AsM:0
,Avn:0,Avo:0,Am5:true,Amu:false,Aob:false,Init:function(aArg){A.zX([this,this.Avt
],this.Ld.Q,0);A.zX([this,this.AuQ],this.Jr.Q,0);A.zX([this,this.Bqk],this.KW.Q,
0);A.zX([this,this.Bky],this.Mv.Q,0);A.zX([this,this.BqQ],this.Nr.Q,0);A.zX([this
,this.BqP],this.Oa.Q,0);A.zX([this,this.Bhl],this.NH.Q,0);A.zX([this,this.Bhk],this.
Ov.Q,0);this.Bb(this.P6);},DE:function(G){var Fi=0;var X=this.AV;switch(this.Cq.
CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;
}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);this.MS(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E_(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A8).FB();},A3c:function(G){var EE=(C.Aer.isPrototypeOf(G)?G:null);if(!EE)return;
var Aw=this.Filter.DL(EE.Er,EE.Operator);if(!!Aw){this.Filter.Np(Aw);A.abo([this
,this.Fp,this.Ft],0);}else{if(EE.Er===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else A.ab5("%s",AHL+EE.Er.toFixed());if(!!Aw){this.Filter.
CW(Aw);A.abo([this,this.Fp,this.Ft],0);}}},BAI:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A8).FB();},AAw:function(G){var EE=(
C.AmZ.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.DL(EE.Er,EE.Operator
);if(!!Aw){this.Filter.Np(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE.Er===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;
}else if(EE.Er===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;}else if((EE.Er===22)||(EE.Er===26)){var A1b=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1b.EJ=EE.Er;A1b.Operator=0;Aw=A1b;}else A.ab5(
"%s",AHL+EE.Er.toFixed());if(!!Aw){this.Filter.CW(Aw);A.abo([this,this.Fp,this.Ft
],0);}}},A99:function(E){if(this.Avn===E)return;this.Avn=E;A.abo([this,this.Bld,
this.A99],0);},A9_:function(E){if(this.Avo===E)return;this.Avo=E;A.abo([this,this.
Ble,this.A9_],0);},Avt:function(G){var F;this.A9_((F=this.Ld.Q,F[1].call(F[0])));
var Aw=this.Filter.DL(7,0);if(!!Aw){var AzR=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!AzR)AzR.A5=this.Avo;else A.ab5("%s",AfF);}},AuQ:function(G){var
F;this.A99((F=this.Jr.Q,F[1].call(F[0])));var Aw=this.Filter.DL(14,0);if(!!Aw){var
U7=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!U7)U7.A5=
this.Avn;else A.ab5("%s",AfF);}},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1
))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},A_Q:function(
E){if(this.AsM===E)return;this.AsM=E;A.abo([this,this.BlR,this.A_Q],0);},Bqk:function(
G){var F;this.A_Q((F=this.KW.Q,F[1].call(F[0])));var Aw=this.Filter.DL(22,1);if(
!!Aw){var Ajc=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ajc
)switch(this.AsM){case 1:Ajc.Operator=5;break;case 0:Ajc.Operator=0;break;default:
A.ab5("%s%e",AHM,this.AsM);}else A.ab5("%s",AfF);}},A_k:function(E){if(this.Arr===
E)return;this.Arr=E;A.abo([this,this.Blt,this.A_k],0);},Bky:function(G){var F;this.
A_k((F=this.Mv.Q,F[1].call(F[0])));var Aw=this.Filter.DL(26,1);if(!!Aw){var At4=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At4)switch(this.Arr
){case 1:At4.Operator=5;break;case 0:At4.Operator=0;break;default:A.ab5("%s%e",AHM
,this.Arr);}else A.ab5("%s",AfF);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P6.Bk([this,this.Fp,this.Ft]);this.S6.
Bk([this,this.Fp,this.Ft]);this.Oa.Bk([this,this.Fp,this.Ft]);this.S7.Bk([this,this.
Fp,this.Ft]);this.Nr.Bk([this,this.Fp,this.Ft]);this.Ou.Bk([this,this.Fp,this.Ft
]);this.RQ.Bk([this,this.Fp,this.Ft]);this.Ov.Bk([this,this.Fp,this.Ft]);this.RR.
Bk([this,this.Fp,this.Ft]);this.NH.Bk([this,this.Fp,this.Ft]);this.Ld.Bk([this,this.
Fp,this.Ft]);this.Jr.Bk([this,this.Fp,this.Ft]);this.KW.Bk([this,this.Fp,this.Ft
]);this.Mv.Bk([this,this.Fp,this.Ft]);this.Yo.Bk([this,this.Fp,this.Ft]);this.S8.
Bk([this,this.Fp,this.Ft]);this.RS.Bk([this,this.Fp,this.Ft]);this.Ar_(false);A.
pe([this,this.A4N],this);var Bef=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DL(1,2))?B:null);if(!!Bef){this.Ar_(true);this.AF4(Bef.A5);}var BdK=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DL(1,3))?B:null);if(!!
BdK){this.Ar_(true);this.AF5(BdK.A5);}this.ArI(false);A.pe([this,this.ALm],this);
var Bee=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DL(4,3))?B:null
);if(!!Bee){this.ArI(true);this.AES(A._GetAutoObject(A.Device.Helper).L$(Bee.A5,
A._GetAutoObject(A.Device.Helper).Dv()));}var BdJ=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DL(4,2))?B:null);if(!!BdJ){this.ArI(true);this.AEU(A.
_GetAutoObject(A.Device.Helper).L$(BdJ.A5,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var AzR=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DL(7,0
))?B:null);if(!!AzR)this.Ld.Bx(this.Gender.DZ(AzR.A5));var U7=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DL(14,0))?B:null);if(!!U7)this.Jr.Bx(this.AnimalType.
DZ(U7.A5));var Ajc=this.Filter.DL(22,1);if(!!Ajc){if(!Ajc.Operator)this.KW.Bx(0);
else this.KW.Bx(1);}var At4=this.Filter.DL(26,1);if(!!At4){if(!At4.Operator)this.
Mv.Bx(0);else this.Mv.Bx(1);}},Ft:function(Aq){this.Bk(Aq);},AF5:function(E){if(
this.Ax2===E)return;this.Ax2=E;A.abo([this,this.A9t,this.AF5],0);},AF4:function(
E){if(this.Ax1===E)return;this.Ax1=E;A.abo([this,this.A9s,this.AF4],0);},BqQ:function(
G){var F;this.AF5((F=this.Nr.Q,F[1].call(F[0])));var Aw=this.Filter.DL(1,3);if(!
!Aw){var ABz=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABz)
ABz.A5=this.Ax2;else A.ab5("%s",AfF);}},BqP:function(G){var F;this.AF4((F=this.Oa.
Q,F[1].call(F[0])));var Aw=this.Filter.DL(1,2);if(!!Aw){var ABz=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABz)ABz.A5=this.Ax1;else A.ab5("%s",AfF);}},BeK:
function(G){var EE=(C.AjK.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.
DL(EE.Er,EE.Operator);if(!!Aw){this.Filter.Np(Aw);A.abo([this,this.Fp,this.Ft],0
);}else{if(EE===this.S6){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A5=this.Ax1;this.Bb(this.Oa);}else if(EE===this.S7){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=this.Ax2;this.Bb(this.Nr);}if(!!Aw){this.Filter.CW(
Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([this,this.A4N],this);},A4N:function(
G){var A2W=!!this.Filter.DL(this.Oa.Er,this.Oa.Operator);var A4O=!!this.Filter.DL(
this.Nr.Er,this.Nr.Operator);A._GetAutoObject(A.Device.Helper).J0(this.S6,this.Aob
);A._GetAutoObject(A.Device.Helper).J0(this.S7,this.Aob);A._GetAutoObject(A.Device.
Helper).J0(this.Oa,A2W);A._GetAutoObject(A.Device.Helper).J0(this.Nr,A4O);},MS:function(
G){var B;this.Y.Vy(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},BBE:function(G){A.pe([this,this.Fk],this);A.pe([this,this.
MS],this);},BAF:function(G){this.Ar_(!this.Aob);if(this.Aob===false){var Aw=this.
Filter.DL(this.P6.Er,this.P6.Operator);while(!!Aw){this.Filter.Np(Aw);Aw=this.Filter.
DL(this.P6.Er,this.P6.Operator);}A.abo([this,this.Fp,this.Ft],0);}},Ar_:function(
E){if(this.Aob===E)return;this.Aob=E;A.abo([this,this.A9r,this.Ar_],0);A.pe([this
,this.A4N],this);},AEU:function(E){if(this.AuL===E)return;this.AuL=E;A.abo([this
,this.A8x,this.AEU],0);},AES:function(E){if(this.AuK===E)return;this.AuK=E;A.abo([
this,this.A8v,this.AES],0);},Bhl:function(G){var F;this.AEU((F=this.NH.Q,F[1].call(
F[0])));var Aw=this.Filter.DL(4,2);if(!!Aw){var AfS=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaM=A._GetAutoObject(A.Device.Helper).ZP(
this.AuL-1);AfS.A5=AaM;}else A.ab5("%s",AfF);}},Bhk:function(G){var F;this.AES((
F=this.Ov.Q,F[1].call(F[0])));var Aw=this.Filter.DL(4,3);if(!!Aw){var AfS=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfS){var AaM=A._GetAutoObject(
A.Device.Helper).ZP(this.AuK);AfS.A5=AaM;}else A.ab5("%s",AfF);}},ALm:function(G
){var A2W=this.Am5&&!!this.Filter.DL(this.Ov.Er,this.Ov.Operator);var A4O=this.Am5&&
!!this.Filter.DL(this.NH.Er,this.NH.Operator);A._GetAutoObject(A.Device.Helper).
J0(this.Ou,this.Am5);A._GetAutoObject(A.Device.Helper).J0(this.RQ,this.Am5&&this.
Amu);A._GetAutoObject(A.Device.Helper).J0(this.RR,this.Am5&&this.Amu);A._GetAutoObject(
A.Device.Helper).J0(this.Ov,A2W);A._GetAutoObject(A.Device.Helper).J0(this.NH,A4O
);},ArI:function(E){if(this.Amu===E)return;this.Amu=E;A.abo([this,this.A8u,this.
ArI],0);A.pe([this,this.ALm],this);},BeJ:function(G){var EE=(C.AjK.isPrototypeOf(
G)?G:null);if(!EE)return;var Aw=this.Filter.DL(EE.Er,EE.Operator);if(!!Aw){this.
Filter.Np(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE===this.RQ){Aw=A._NewObject(
A.Device.UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper
).ZP(this.AuK);this.Bb(this.Ov);}else if(EE===this.RR){Aw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper).ZP(this.AuL-1);this.
Bb(this.NH);}if(!!Aw){this.Filter.CW(Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([
this,this.ALm],this);},BAE:function(G){this.ArI(!this.Amu);if(this.Amu===false){
var Aw=this.Filter.DL(this.Ou.Er,this.Ou.Operator);while(!!Aw){this.Filter.Np(Aw
);Aw=this.Filter.DL(this.Ou.Er,this.Ou.Operator);}A.abo([this,this.Fp,this.Ft],0
);}},Bne:function(E){if(this.Am5===E)return;this.Am5=E;A.pe([this,this.ALm],this
);},Fp:function(){return this.Filter;},Ble:function(){return this.Avo;},Bld:function(
){return this.Avn;},BlR:function(){return this.AsM;},Blt:function(){return this.
Arr;},A9t:function(){return this.Ax2;},A9s:function(){return this.Ax1;},A9r:function(
){return this.Aob;},A8x:function(){return this.AuL;},A8v:function(){return this.
AuK;},A8u:function(){return this.Amu;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.ABS._Init.call(this.Transponder={I:this},0);C.ABS._Init.
call(this.El={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.AB3._Init.call(
this.P6={I:this},0);C.AjK._Init.call(this.S6={I:this},0);C.Abo._Init.call(this.Oa={
I:this},0);C.AjK._Init.call(this.S7={I:this},0);C.Abo._Init.call(this.Nr={I:this
},0);C.AB3._Init.call(this.Ou={I:this},0);C.AjK._Init.call(this.RQ={I:this},0);C.
ACQ._Init.call(this.Ov={I:this},0);C.AjK._Init.call(this.RR={I:this},0);C.ACQ._Init.
call(this.NH={I:this},0);C.AmZ._Init.call(this.Ld={I:this},0);C.AmZ._Init.call(this.
Jr={I:this},0);C.AmZ._Init.call(this.KW={I:this},0);C.AmZ._Init.call(this.Mv={I:
this},0);C.QF._Init.call(this.Yo={I:this},0);C.QF._Init.call(this.S8={I:this},0);
C.QF._Init.call(this.RS={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I4;var B;this.N.Z(true);this.N.CU(A.aaR(A.acf.A5m));this.Dr(C.APB);this.Gender.
Au(this.Avo);this.AnimalType.Au(this.Avn);this.Transponder.Au(this.AsM);this.El.
Au(this.Arr);this.Y.H(Ff);this.Y.JT(1);this.P6.H(IV);this.P6.Aj(true);this.P6.T(
A._GetAutoObject(A.Device.Helper).AmX(0,1));this.P6.Ni(1);this.S6.H(Qd);this.S6.
Aj(true);this.S6.T(A.aaR(A.acf.AEd));this.S6.Ni(1);this.S6.OP(2);this.Oa.H(Aad);
this.Oa.Ni(1);this.Oa.OP(2);this.Oa.AFW(A.aaR(A.acf.GN));this.S7.H(Alh);this.S7.
Aj(true);this.S7.T(A.aaR(A.acf.AHe));this.S7.Ni(1);this.S7.OP(3);this.Nr.H(Aop);
this.Nr.Aj(true);this.Nr.Ni(1);this.Nr.OP(3);this.Nr.AFW(A.aaR(A.acf.GN));this.Ou.
H(AW5);this.Ou.Aj(true);this.Ou.T(A.aaR(A.acf.RP));this.Ou.Ni(4);this.RQ.H(AW6);
this.RQ.Aj(true);this.RQ.T(A.aaR(A.acf.AEd));this.RQ.Ni(4);this.RQ.OP(3);this.Ov.
H(AW7);this.Ov.Ni(4);this.Ov.OP(3);this.Ov.A_p(2);this.RR.H(AW8);this.RR.Aj(true
);this.RR.T(A.aaR(A.acf.AHe));this.RR.Ni(4);this.RR.OP(2);this.NH.H(AW9);this.NH.
Aj(true);this.NH.Ni(4);this.NH.OP(2);this.NH.A_p(3);this.Ld.H(As9);this.Ld.Aj(true
);this.Ld.Ni(7);this.Ld.Ahx(0);this.Ld.OP(0);this.Jr.H(Xf);this.Jr.Aj(true);this.
Jr.Ni(14);this.Jr.Ahx(0);this.Jr.OP(0);this.KW.H(Xf);this.KW.Aj(true);this.KW.Ni(
22);this.KW.Ahx(0);this.KW.OP(1);this.Mv.H(Xf);this.Mv.Aj(true);this.Mv.Ni(26);this.
Mv.Ahx(0);this.Mv.OP(1);this.Yo.H(Xf);this.Yo.Aj(true);this.Yo.Ni(11);this.Yo.Ahx(
0);this.Yo.OP(0);this.S8.H(Xf);this.S8.Aj(true);this.S8.Ni(12);this.S8.Ahx(0);this.
S8.OP(0);this.RS.H(Xf);this.RS.Aj(true);this.RS.Ni(8);this.RS.Ahx(0);this.RS.OP(
0);this.Ay.H(It);this.J(this.Y,0);this.J(this.P6,0);this.J(this.S6,0);this.J(this.
Oa,0);this.J(this.S7,0);this.J(this.Nr,0);this.J(this.Ou,0);this.J(this.RQ,0);this.
J(this.Ov,0);this.J(this.RR,0);this.J(this.NH,0);this.J(this.Ld,0);this.J(this.Jr
,0);this.J(this.KW,0);this.J(this.Mv,0);this.J(this.Yo,0);this.J(this.S8,0);this.
J(this.RS,0);this.J(this.Ay,0);this.N.CE=[this,this.Ew];this.N.B$=[this,this.BAI
];this.N.C1(A.aaL(A.ach.E2));this.Y.Em=[this,this.BBE];this.P6.AR=[this,this.BAF
];this.P6.Au([this,this.A9r,this.Ar_]);this.S6.AR=[this,this.BeK];this.Oa.Gs([this
,this.D_,this.GS]);this.Oa.Au([this,this.A9s,this.AF4]);this.S7.AR=[this,this.BeK
];this.Nr.Gs([this,this.D_,this.GS]);this.Nr.Au([this,this.A9t,this.AF5]);this.Ou.
AR=[this,this.BAE];this.Ou.Au([this,this.A8u,this.ArI]);this.RQ.AR=[this,this.BeJ
];this.Ov.Gs([this,this.D_,this.GS]);this.Ov.Au([this,this.A8v,this.AES]);this.RR.
AR=[this,this.BeJ];this.NH.Gs([this,this.D_,this.GS]);this.NH.Au([this,this.A8x,
this.AEU]);this.Ld.AR=[this,this.AAw];this.Ld.Au([B=this.Gender,B.B_,B.Cb]);this.
Ld.CK(this.Gender);this.Jr.AR=[this,this.AAw];this.Jr.Au([B=this.AnimalType,B.B_
,B.Cb]);this.Jr.CK(this.AnimalType);this.KW.AR=[this,this.AAw];this.KW.Au([B=this.
Transponder,B.B_,B.Cb]);this.KW.CK(this.Transponder);this.Mv.AR=[this,this.AAw];
this.Mv.Au([B=this.El,B.B_,B.Cb]);this.Mv.CK(this.El);this.Yo.AR=[this,this.A3c];
this.S8.AR=[this,this.A3c];this.RS.AR=[this,this.A3c];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.El._Done();this.Y._Done();this.P6._Done();this.S6._Done();this.Oa._Done(
);this.S7._Done();this.Nr._Done();this.Ou._Done();this.RQ._Done();this.Ov._Done(
);this.RR._Done();this.NH._Done();this.Ld._Done();this.Jr._Done();this.KW._Done(
);this.Mv._Done();this.Yo._Done();this.S8._Done();this.RS._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.El._ReInit();
this.Y._ReInit();this.P6._ReInit();this.S6._ReInit();this.Oa._ReInit();this.S7._ReInit(
);this.Nr._ReInit();this.Ou._ReInit();this.RQ._ReInit();this.Ov._ReInit();this.RR.
_ReInit();this.NH._ReInit();this.Ld._ReInit();this.Jr._ReInit();this.KW._ReInit(
);this.Mv._ReInit();this.Yo._ReInit();this.S8._ReInit();this.RS._ReInit();this.Ay.
_ReInit();this.N.CU(A.aaR(A.acf.A5m));this.S6.T(A.aaR(A.acf.AEd));this.Oa.AFW(A.
aaR(A.acf.GN));this.S7.T(A.aaR(A.acf.AHe));this.Nr.AFW(A.aaR(A.acf.GN));this.Ou.
T(A.aaR(A.acf.RP));this.RQ.T(A.aaR(A.acf.AEd));this.RR.T(A.aaR(A.acf.AHe));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Oa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S7
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ov)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RR)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.NH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ld)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$t={ZQ:null,Boy:
function(Bya){var EF=A._NewObject(C.A$s,0);EF.AB=Bya;EF.Mw=this.ZQ;this.ZQ=EF;},
A_9:function(){var Vm=null;if(!!this.ZQ){Vm=this.ZQ.AB;this.ZQ=this.ZQ.Mw;}return Vm;
},Contains:function(Alp){var EF=this.ZQ;while(!!EF){if(EF.AB.An7===Alp)return true;
EF=EF.Mw;}return false;},Boo:function(){if(!!this.ZQ)return this.ZQ.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$t;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$s={AB:null,
Mw:null,_Init:function(aArg){this.__proto__=C.A$s;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMk={AR7:function(){A._GetAutoObject(
A.Device.Helper).Axx(this.H7,0);A._GetAutoObject(C.A8).FB();},A70:function(){this.
H7.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();},A60:function(
){return A.aaL(A.ach.Am3);},_Init:function(aArg){C.AGl._Init.call(this,aArg);this.
__proto__=C.AMk;this.Dr(C.IK);},_className:"Application::AnimalActionRateScreen"
};C.AMg={WA:function(G){this.Agx();this.I2(A.aaR(A.acf.AVt),[this,this.ATU],5);this.
I2(A.aaR(A.acf.A5P),[this,this.Bme],4);this.I2(A.aaR(A.acf.AGk),[this,this.ATF],
3);this.I2(A.aaR(A.acf.An1),[this,this.AwX],2);this.I2(A.aaR(A.acf.AdV),[this,this.
AEX],1);this.I2(A.aaR(A.acf.AuG),[this,this.AER],0);A._GetAutoObject(C.BR).Fz();
A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abr:function(){return C.ANa;},Abs:function(
){return C.ADo;},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mt();var
Ay9=A._NewObject(A.Device.BoolFilterCriterion,0);Ay9.Initialize(8,0,true,true);Be.
CW(Ay9);A._GetAutoObject(A.Device.Device).An.Bk(Be);},HP:function(G){var F;C.GJ.
HP.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.
N.OQ(false);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(40);},_Init:
function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AMg;var B;this.Dr(C.AO2
);this.Dk(A.aaR(A.acf.A76));this.AwS([B=A._GetAutoObject(A.Device.Device),B.A8y,
B.Bbd]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dk(A.aaR(A.acf.A76));}
,_className:"Application::AlarmListScreen"};C.ANB={DE:function(G){},Agg:function(
G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gt);var Aa=(C.AB_.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).G8(Aa.Hs);A._GetAutoObject(C.A8).Cd(13
);}},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mt();var Azr=A._NewObject(
A.Device.BoolFilterCriterion,0);Azr.Initialize(9,0,true,true);Be.CW(Azr);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HP:function(G){C.GJ.HP.call(this,G);this.N.OQ(false
);this.N.OR(false);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.ANB;this.Dr(C.AO4);this.Dk(A.aaR(A.acf.A77));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dk(A.aaR(A.acf.A77));},_className:"Application::ControlListScreen"
};C.Aer={Filter:null,Er:0,Jc:10,TableId:0,Operator:1,CP:function(){var F;this.Ts((
F=this.Filter,F[1].call(F[0])).DL(this.Er,this.Operator));},Bl:function(aSize){C.
Co.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jc),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Md],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Md],E,0);A.pe([this,this.
Md],this);},Md:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.Ts((F=this.Filter,F[1].call(F[0])).DL(this.Er,this.Operator));else this.
Ts(null);},Ahx:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Md],this);},Ni:function(E){if(this.Er===E)return;this.Er=E;A.pe([this,this.
Md],this);},Ts:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A6T(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).AmX(this.TableId
,this.Er));},OP:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Md],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aer;this.V.H(AHN);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CP();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QF={H6:null,Bl:function(aSize){var B;C.Aer.Bl.call(this,aSize);this.H6.H([(aSize[
0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jc,0,this.
H6.M[0]-this.Jc,aSize[1]]);},Ts:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).AmX(this.TableId,this.Er));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Aw&&Aw.A5)this.H6.Cv(1);else this.H6.Cv(0);},_Init:function(aArg
){C.Aer._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.QF;this.H6.H(AHO);this.H6.Cv(0);this.J(this.H6,0);this.H6.Ax(A.aaL(A.ach.AqO));
},_Done:function(){this.__proto__=C.Aer;this.H6._Done();C.Aer._Done.call(this);}
,_ReInit:function(){C.Aer._ReInit.call(this);this.H6._ReInit();},_Mark:function(
D){var B;C.Aer._Mark.call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APB={Ap:null,Text:null,Df:function(
E){C.BQ.Df.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APB;this.Ap.H(AW_);this.Text.H(AW$);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeC));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BQ;this.Ap._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjT={
AW:null,T5:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BQ.Bl.call(this,aSize);this.T5.H(A.abJ(this.T5.M,A.abe(this.AW.M.slice(0
,2),AXa)));this.T5.H(A.abK(this.T5.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXb
)));},Ai:function(Ae){var B;C.BQ.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IB)this.T5.L(A.jb.AV);else this.T5.L(A.jb.Am4);},Df:function(E){
C.BQ.Df.call(this,E);this.Gw.L(E);this.D2.Zr(E);},WC:function(E){C.BQ.WC.call(this
,E);this.D2.CT(E);},Akq:function(){return this.AW.Akq();},Awj:function(){return this.
AW.Awj();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed(
));},_Init:function(aArg){C.BQ._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BU._Init.call(this.T5={I:this},0);A.acg.Ap._Init.call(this.Gw={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C7._Init.call(this.A$={I:this
},0);this.__proto__=C.AjT;this.AW.H(AXc);this.T5.H(AXd);this.T5.Nm(2);this.Gw.H(
AXe);this.Gw.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(AXf);this.D2.Zr(A.jb.Bm);this.
D2.CT(A.jb.Ri);this.D2.Hn(2);this.A$.DC(AXg);this.A$.DM(AXh);this.A$.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.T5,0);this.J(this.Gw,0);this.J(this.D2,0);this.J(this.
A$,0);this.Bb(this.AW);this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.AW._Done();this.T5._Done(
);this.Gw._Done();this.D2._Done();this.A$._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.AW._ReInit();this.T5._ReInit();this.Gw._ReInit(
);this.D2._ReInit();this.A$._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BQ._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DF={Dj:null,Ip:null,Io:null
,Agf:function(G){if(this.Ez<0)this.L1(1);else if(this.Ez===9)this.L1(0);else this.
L1(this.Ez+1);A.pe(this.Dj,this);},Ai:function(Ae){var B;C.Ez.Ai.call(this,Ae);var
Hf=((Ae&0x10)===0x10);var IB=((Ae&0x40)===0x40);if(IB){this.Background.L(A.jb.AV
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
Dj:null,Ct:null,CV:null,Dy:null,Eq:null,FZ:null,ES:null,Fm:null,Fa:null,M9:0,ARm:
false,Aqr:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqr)this.ES.AeZ(true);else this.ES.AeZ(false);},AwO:function(E){var B;
if(E===this.Akq())return;var Af_=E;var DV=this.ES;while(!!DV){if(Af_>0){DV.L1(Af_
%10);Af_=(Af_/10)|0;}else DV.L1(-1);DV=(C.DF.isPrototypeOf(B=this.QJ(DV,2,0x11))?
B:null);}},Akq:function(){return A.wz(this.Awj(),-1,10);},Oo:function(G){if(this.
FZ.Ez>=0)this.Bgs(7);},MZ:function(G){if(((this.Akq()>0)||this.ARm)&&(this.Ct.Ez<
0))this.Bgs(2);else if(this.Akq()<=0)this.Fa.NL=true;},Adu:function(G){A.pe(this.
Dj,this);},Bgs:function(GA){var B;var ALA=0;var DV=null;switch(GA){case 2:{DV=this.
Ct;ALA=7;}break;case 7:{DV=this.ES;ALA=2;}break;default:throw new Error(AXi);}while(
!!DV){var A27=(C.DF.isPrototypeOf(B=this.QJ(DV,ALA,0x11))?B:null);if(!!A27)DV.L1(
A27.Ez);else if(ALA===7)DV.L1(0);else DV.L1(-1);DV=A27;}A.pe([this,this.Adu],this
);},AeZ:function(E){if(this.Aqr===E)return;this.Aqr=E;this.Am();},Bnf:function(E
){if(this.ARm===E)return;this.ARm=E;},ATk:function(E){var B;if(E===this.Awj())return;
var Af_=E;var DV=this.ES;while(!!DV){if(Af_.length>0){DV.L1(A.wz(A.ab2(Af_,1),-1
,10));Af_=A.abV(Af_,Af_.length-1);}else DV.L1(-1);DV=(C.DF.isPrototypeOf(B=this.
QJ(DV,2,0x11))?B:null);}},Awj:function(){var B;var Iz=A.jV;var O=0;var B5=this.Ct;
for(;O<6;O=O+1){if(!!B5&&(B5.Ez>=0))Iz=Iz+B5.Ez.toFixed();B5=(C.DF.isPrototypeOf(
B=this.TP(B5,0x11))?B:null);}return Iz;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DF._Init.call(this.Ct={I:this},0);C.DF._Init.call(this.CV={I:this},
0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF.
_Init.call(this.FZ={I:this},0);C.DF._Init.call(this.ES={I:this},0);A.Core.BK._Init.
call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0);this.__proto__=
C.AW;this.H(Ayp);this.Ct.AZ(0x3);this.Ct.H(AHP);this.CV.AZ(0x3);this.CV.H(AHQ);this.
Dy.AZ(0x3);this.Dy.H(AHR);this.Eq.AZ(0x3);this.Eq.H(AHS);this.FZ.AZ(0x3);this.FZ.
H(AHT);this.ES.AZ(0x3);this.ES.H(AHU);this.ES.L1(0);this.Fm.Filter=6;this.Fa.Filter=
7;this.M9=A.jb.CJ;this.J(this.Ct,0);this.J(this.CV,0);this.J(this.Dy,0);this.J(this.
Eq,0);this.J(this.FZ,0);this.J(this.ES,0);this.Bb(this.ES);this.Ct.Dj=[this,this.
Adu];this.CV.Dj=[this,this.Adu];this.Dy.Dj=[this,this.Adu];this.Eq.Dj=[this,this.
Adu];this.FZ.Dj=[this,this.Adu];this.ES.Dj=[this,this.Adu];this.Fm.BL=[this,this.
Oo];this.Fa.BL=[this,this.MZ];},_Done:function(){this.__proto__=A.Core.P;this.Ct.
_Done();this.CV._Done();this.Dy._Done();this.Eq._Done();this.FZ._Done();this.ES.
_Done();this.Fm._Done();this.Fa._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Ct._ReInit();this.CV._ReInit();this.Dy._ReInit(
);this.Eq._ReInit();this.FZ._ReInit();this.ES._ReInit();this.Fm._ReInit();this.Fa.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Dj)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.BhX="00558be9";C.BDe={Undefined:0,BEi:1,BDw:2};C.AkK={
Tq:null,AiW:null,Lb:null,ANF:null,An_:null,push:function(MN){if(!this.Tq){MN.Ahz=
null;MN.Mw=null;this.Tq=MN;this.AiW=this.Tq;}else{MN.Ahz=this.AiW;MN.Mw=null;this.
AiW.Mw=MN;this.AiW=MN;}},BCc:function(MN){var Ql=this.Tq;while(!!Ql){if(Ql.JM.Id===
MN.Id)return Ql;Ql=Ql.Mw;}return Ql;},BBX:function(MN){if(MN===this.Tq)this.pop(
);else if(MN===this.AiW){MN=MN.Ahz;if(!!MN)MN.Mw=null;this.AiW=MN;}else{MN.Ahz.Mw=
MN.Mw;MN.Mw.Ahz=MN.Ahz;}},Ahr:function(E){var F;if(this.Lb===E)return;this.Lb=E;
if(!!this.Lb)this.Lb.AgM(2);(F=this.ANF,F[2].call(F[0],this.Lb));},Vj:function(G
){var Ql=(C.AT7.isPrototypeOf(G)?G:null);if(!!Ql){if(!Ql.JM.PopupState){if(!this.
Lb)this.Ahr(this.top());}else if(Ql.JM.PopupState===4){this.pop();this.Ahr(this.
top());}else if(Ql.JM.PopupState===5){this.pop();this.Ahr(this.top());}else if(Ql.
JM.PopupState===7){this.pop();this.Ahr(this.top());}else if(Ql.JM.PopupState===8
){this.pop();this.Ahr(this.top());}else if(Ql.JM.PopupState===6){if(Ql===this.Lb
){this.pop();this.Ahr(this.top());}else this.BBX(Ql);}else if(Ql.JM.PopupState===
3){this.pop();this.Ahr(this.top());}}},pop:function(){var AKV=null;if(!!this.Tq){
AKV=this.Tq;if(this.Tq===this.AiW){this.Tq=null;this.AiW=null;}else{this.Tq=this.
Tq.Mw;if(!this.Tq)throw new Error(AXj);this.Tq.Ahz=null;}AKV.Ahz=null;AKV.Mw=null;
}return AKV;},top:function(){return this.Tq;},BBF:function(G){var B;var At5=(A.Device.
PopupContext.isPrototypeOf(B=this.An_.JM)?B:null);if(!!At5){var A4k=this.BCc(At5
);if(!!A4k){A4k.A9Y(At5);if(!At5.Show)A4k.AgM(6);}else if(At5.Show){var AKy=A._NewObject(
C.AT7,0);AKy.A9Y(At5);AKy.AS4=[this,this.Vj];this.push(AKy);AKy.AgM(0);}}},_Init:
function(aArg){A.Core.A$R._Init.call(this.An_={I:this},0);this.__proto__=C.AkK;this.
An_.ASv=[this,this.BBF];this.An_.Bmz(A._GetAutoObject(A.Device.Device).AnO);A.h7++;
},_Done:function(){this.__proto__=null;this.An_._Done();A.h7--;},_ReInit:function(
){this.An_._ReInit();},_Mark:function(D){var B;if((B=this.Tq)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lb)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.An_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AT7={Rm:null,Mw:null,Ahz:null,JM:null,AS4:null,PopupIdToString:null,AfY:function(
Bxi,BxR,Bx$,Bx2,Bx4,Bx1,BxA){var Vl=A._NewObject(C.AT6,0);Vl.BnI(this.JM.Id);Vl.
A_I(Bxi);Vl.AS5=Bx1;Vl.A_K(this.JM.Ak4);Vl.A_u(this.JM.AkJ);Vl.BP=A._NewObject(C.
N,0);Vl.Ln().B$=Bx4;Vl.Ln().Cf=null;Vl.Ln().CE=Bx2;Vl.Ln().CU(Bx$);Vl.Ln().Cw(null
);Vl.Ln().Hy(BxR);Vl.Ln().AFn(BxA);return Vl;},Akr:function(){if(!this.Rm){var Agq=
this.PopupIdToString.BS(this.JM.Id);switch(this.JM.Id){case 91:case 92:this.Rm=this.
AfY(Agq,A.jV,A.jV,null,null,[this,this.Agb],0);break;case 39:this.Rm=this.AfY(Agq
,A.aaR(A.acf.AmC),A.aaR(A.acf.Ok),[this,this.A3i],[this,this.A3j],[this,this.Agb
],3);break;case 13:this.Rm=this.AfY(Agq,A.aaR(A.acf.AmC),A.aaR(A.acf.BoK),[this,
this.A3h],[this,this.AKD],[this,this.Agb],3);break;case 25:this.Rm=this.AfY(Agq,
A.aaR(A.acf.AmC),A.aaR(A.acf.Ok),[this,this.A3h],[this,this.AKD],[this,this.Agb]
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
,[this,this.AKD],[this,this.Agb],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.Rm=
this.AfY(Agq,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3i],[this,this.A3j],[this
,this.Agb],3);break;case 110:this.Rm=this.AfY(Agq,A.jV,A.jV,null,null,[this,this.
Agb],1);break;case 46:case 111:this.Rm=this.AfY(Agq,A.jV,A.aaR(A.acf.Ok),null,[this
,this.AKD],[this,this.Agb],1);break;case 4:case 7:case 33:case 115:case 44:case 37:
case 38:case 63:case 95:case 108:case 112:this.Rm=this.AfY(Agq,A.aaR(A.acf.No),A.
aaR(A.acf.Yes),[this,this.A3i],[this,this.A3j],[this,this.Agb],1);break;default:
A.ab5("%s",(AXk+this.JM.Id.toFixed())+AXl);}}switch(this.JM.Id){case 16:case 49:
this.Rm.A_0(true);break;case 91:case 92:this.Rm.A_0(false);break;default:;}return this.
Rm;},AKD:function(G){this.AgM(4);},A3h:function(G){this.AgM(5);},A3j:function(G){
this.AgM(7);},A3i:function(G){this.AgM(8);},Agb:function(G){this.AgM(3);},A9Y:function(
E){if(this.JM===E)return;this.JM=E;if(!!this.Rm){this.Akr().A_K(this.JM.Ak4);this.
Akr().A_u(this.JM.AkJ);}},AgM:function(Bx7){var B;this.JM.BnJ(Bx7);(B=this.AS4)?
B[1].call(B[0],this):null;},BBb:function(G){this.AgM(9);},_Init:function(aArg){A.
Device.PopupIdToString._Init.call(this.PopupIdToString={I:this},0);this.__proto__=
C.AT7;A.h7++;},_Done:function(){this.__proto__=null;this.PopupIdToString._Done();
A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(D){var
B;if((B=this.Rm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mw)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ahz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
JM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AS4)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::PopupEntry"};C.Gd={BooleanToYesNo:null,Du:function(){return 2;},C6:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.BS(aIndex
);},DZ:function(A7){return A7;},H3:function(){return 1;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Gd;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afn={Ut:null,Kd:function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.
AM!==BO){if(!!this.Ut&&!!this.AC)switch(this.AC.C6(this.AM)){case 0:(F=this.Ut,F[
2].call(F[0],false));break;case 1:(F=this.Ut,F[2].call(F[0],true));break;default:;
}A.abo(this.Ut,0);}},J_:function(G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.
AM!==BO){if(!!this.Ut&&!!this.AC)switch(this.AC.C6(this.AM)){case 0:(F=this.Ut,F[
2].call(F[0],false));break;case 1:(F=this.Ut,F[2].call(F[0],true));break;default:;
}A.abo(this.Ut,0);}},AkD:function(E){if(A.aaZ(this.Ut,E))return;if(!!this.Q)A.z$([
this,this.A3X],this.Ut,0);this.Ut=E;if(!!E)A.zX([this,this.A3X],E,0);if(!!E)A.pe([
this,this.A3X],this);},A3X:function(G){var F;if(!!this.Ut){if((F=this.Ut,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.Afn;this.JZ(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Ut)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUl={Jg:null,OW:null,IT:null,Gm:null,AL:null,Abg:null,AgS:null,TL:null,Sa:null
,AcC:null,W1:null,Hj:null,ABy:true,Init:function(aArg){var B;A.zX([this,this.Al6
],[B=A._GetAutoObject(A.Device.Device),B.ASU,B.A0w],0);A.pe([this,this.Al6],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABy)this.N.C2(A.aaL(A.ach.
AQ2));else this.N.C2(A.aaL(A.ach.AQ3));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OW.L(A.jb.Bm);this.Sa.Z(false);this.TL.Z(false);this.IT.Z(true);this.Gm.
Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B2));this.Background.L(A.jb.Gj);}else
if(this.Abg.Bw){this.OW.L(A.jb.Text);this.Sa.Z(true);this.TL.Z(true);this.IT.Z(false
);this.Gm.Ar(false);(F=this.Gm.Q,F[2].call(F[0],this.Gm.B2));this.Background.L(A.
jb.E1);}else{this.OW.L(A.jb.Text);this.Sa.Z(false);this.TL.Z(false);this.IT.Z(true
);this.Gm.Ar(true);this.Background.L(A.jb.CJ);}if(this.AgS.Bw)this.W1.Z(true);else
this.W1.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhM();},E4:function(
G){A._GetAutoObject(A.Device.Device).An0();A._GetAutoObject(A.Device.Device).Afa(
false);A._GetAutoObject(A.Device.Device).Us(false);},Al6:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BAS],this);break;case 3:{A.pe([this,this.Bfj],this);A.pe([B=this.Abg,B.AxL],this
);A.pe(this.Abg.MC,this);}break;case 4:A.ab5("%s",AXm);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A8).FB();},BBG:function(G){this.Bn$(!this.ABy);},Bn$:function(
E){if(this.ABy===E)return;this.ABy=E;if(!E)A._GetAutoObject(A.Device.Device).Afa(
false);this.Am();},BAS:function(G){var B;this.Bfj(this);if(this.ABy)A._GetAutoObject(
A.Device.Device).Afa(true);A._GetAutoObject(A.Device.Device).WE(65280);A._GetAutoObject(
A.Device.Device).Us(true);A.pe([B=this.Abg,B.StartTimer],this);A.pe([B=this.AgS,
B.StartTimer],this);this.Am();},BAT:function(G){A._GetAutoObject(A.Device.Device
).Afa(false);A._GetAutoObject(A.Device.Device).Us(false);this.Am();},BAV:function(
G){this.Am();},Bfj:function(G){A._GetAutoObject(A.Device.Device).AhM();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jg._Init.call(this.Jg={I:this},0);C.CH._Init.
call(this.OW={I:this},0);A.acg.Ap._Init.call(this.IT={I:this},0);A.acl.Gm._Init.
call(this.Gm={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abg={I:this},0);A.Core.Timer._Init.call(this.AgS={I:this},0);A.acg.Ap.
_Init.call(this.TL={I:this},0);A.acg.Ap._Init.call(this.Sa={I:this},0);A.acg.Text.
_Init.call(this.AcC={I:this},0);C.W1._Init.call(this.W1={I:this},0);C.CH._Init.call(
this.Hj={I:this},0);this.__proto__=C.AUl;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Jg.H(AXn);this.Jg.AkG(0);this.OW.H(AXo);this.OW.R(A.aaR(A.acf.A$W));
this.OW.L(A.jb.Text);this.IT.H(AXp);this.IT.L(A.jb.AV);this.IT.Zp(true);this.Gm.
Fr(1750);this.Gm.Uo(750);this.Gm.AkB(0);this.Gm.Ar(true);this.Gm.B2=3;this.AL.H(
Ayq);this.Abg.PV(-1);this.Abg.WD(1000);this.AgS.PV(-1);this.AgS.WD(5000);this.TL.
H(AHV);this.Sa.H(AHV);this.Sa.L(A.jb.E1);this.AcC.H(Ayq);this.AcC.R(A.aaR(A.acf.
A$u));this.AcC.L(A.jb.Text);this.W1.H(Ayq);this.Hj.H(AXq);this.Hj.Ar(false);this.
Hj.R(A.aaR(A.acf.RangeTest));this.Hj.L(A.jb.Text);this.J(this.Jg,0);this.J(this.
OW,0);this.J(this.IT,0);this.J(this.AL,0);this.J(this.TL,0);this.J(this.Sa,0);this.
J(this.AcC,0);this.J(this.W1,0);this.J(this.Hj,0);this.N.CE=[this,this.Ew];this.
N.B$=[this,this.BBG];this.N.C1(A.aaL(A.ach.E2));this.OW.S(A.aaL(A.fl.Af));this.OW.
A2(A.aaL(A.fl.Ak));this.OW.Cu(A.aaL(A.fl.Bh));this.IT.Ax(A.aaL(A.ach.ADO));this.
Gm.Q=[B=this.IT,B.ASH,B.Cv];this.Abg.MC=[this,this.BAT];this.AgS.MC=[this,this.BAV
];this.TL.Ax(A.aaL(A.ach.TL));this.Sa.Ax(A.aaL(A.ach.Sa));this.AcC.S(A.aaL(A.fl.
Af));this.W1.Au([B=A._GetAutoObject(A.Device.Device),B.ASV,B.A0x]);this.Hj.S(A.aaL(
A.fl.Kp));this.Hj.A2(A.aaL(A.fl.Il));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jg._Done();this.OW._Done();this.IT._Done();this.Gm._Done();this.AL._Done(
);this.Abg._Done();this.AgS._Done();this.TL._Done();this.Sa._Done();this.AcC._Done(
);this.W1._Done();this.Hj._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jg._ReInit();this.OW._ReInit();this.IT._ReInit();this.Gm.
_ReInit();this.AL._ReInit();this.Abg._ReInit();this.AgS._ReInit();this.TL._ReInit(
);this.Sa._ReInit();this.AcC._ReInit();this.W1._ReInit();this.Hj._ReInit();this.
OW.R(A.aaR(A.acf.A$W));this.AcC.R(A.aaR(A.acf.A$u));this.Hj.R(A.aaR(A.acf.RangeTest
));this.OW.S(A.aaL(A.fl.Af));this.OW.A2(A.aaL(A.fl.Ak));this.OW.Cu(A.aaL(A.fl.Bh
));this.AcC.S(A.aaL(A.fl.Af));this.Hj.S(A.aaL(A.fl.Kp));this.Hj.A2(A.aaL(A.fl.Il
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jg)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TL)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcC)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.W1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hj).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.AbS={
ScreenType:0,Nk:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nn:
function(G){A._GetAutoObject(C.A8).Cd(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.AbS;},_className:"Application::MenuItemScreen"
};C.Ub={Ad_:null,Mo:null,AmD:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmD){this.Mo.Cv(1);this.Mo.L(A.jb.H8);}else{this.Mo.Cv(0);
if(this.KG)this.Mo.L(A.jb.Bm);else if(this.Hl)this.Mo.L(A.jb.Text);else this.Mo.
L(A.jb.Bm);}},I0:function(G){var F,Cs;if(!!this.Ad_){(Cs=this.Ad_,Cs[2].call(Cs[
0],!(F=this.Ad_,F[1].call(F[0]))));this.AE6((F=this.Ad_,F[1].call(F[0])));A.pe([
this,this.DJ],this);}},A3o:function(G){this.KG=true;this.DJ(this);},AE6:function(
E){if(this.AmD===E)return;this.AmD=E;this.DJ(this);this.Am();},A3Q:function(G){var
F;this.AE6((F=this.Ad_,F[1].call(F[0])));},A0R:function(s){this.A3Q(s);},DJ:function(
G){var F;if(!this.N||!this.KG)return;if(this.AmD){(F=this.N,F[1].call(F[0])).CU(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CU(A.aaR(A.acf.A8j));(F=this.N,F[1].call(F[0])).GW.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},AS$:function(E){if(A.aaZ(this.Ad_,E))
return;if(!!this.Ad_)A.z$([this,this.A0R],this.Ad_,0);this.Ad_=E;if(!!E)A.zX([this
,this.A0R],E,0);if(!!E)A.pe([this,this.A0R],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mo={I:this},0);this.__proto__=C.Ub;this.
V.L(A.jb.H8);this.Mo.H(AHW);this.Mo.Cv(0);this.J(this.Mo,0);this.Mo.Ax(A.aaL(A.ach.
AqO));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mo._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mo._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad_)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mo)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANN={H5:null,IN:null,_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.SR._Init.call(this.H5={I:this},0);C.AGL._Init.call(this.
IN={I:this},0);this.__proto__=C.ANN;var B;this.Ja(A.aaR(A.acf.ACy));this.H5.H(Ah3
);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.Bi(true);this.IN.H(U0);this.
IN.Aj(true);this.IN.T(A.aaR(A.acf.Bs));this.J(this.H5,-1);this.J(this.IN,-1);this.
H5.Ab0([B=this.H5,B.FV]);this.H5.Gs([this,this.D_,this.GS]);this.H5.AkA(A.aaL(A.
ach.Edit));this.H5.Ab6([B=A._GetAutoObject(A.Device.Helper),B.U2,B.U5]);this.IN.
Ab0([B=this.IN,B.FV]);this.IN.Gs([this,this.D_,this.GS]);this.IN.AkA(A.aaL(A.ach.
Edit));this.IN.Ab6([B=A._GetAutoObject(A.Device.Helper),B.U2,B.U5]);},_Done:function(
){this.__proto__=C.Cg;this.H5._Done();this.IN._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.H5._ReInit();this.IN._ReInit();this.Ja(A.
aaR(A.acf.ACy));this.H5.T(A.aaR(A.acf.Date));this.IN.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cg._Mark.call(this,D);if((B=this.H5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVj={Rf:null,FK:null,BZ:null,OJ:null,YK:null,Aa2:null,_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.Rf._Init.call(this.Rf={I:this},0);C.AMG._Init.call(this.
FK={I:this},0);C.AUT._Init.call(this.BZ={I:this},0);C.AUV._Init.call(this.OJ={I:
this},0);C.Afn._Init.call(this.YK={I:this},0);C.Aa2._Init.call(this.Aa2={I:this}
,0);this.__proto__=C.AVj;var B;this.Ja(A.aaR(A.acf.Temperature));this.FK.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.BZ.H(AXr);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.
Arp));this.BZ.Bi(false);this.OJ.H(Aae);this.OJ.Aj(true);this.OJ.T(A.aaR(A.acf.Undertemperature
));this.OJ.Bi(true);this.OJ.Bx(3800);this.OJ.Ga(3000);this.OJ.EU(5000);this.OJ.A_S(
A.aaR(A.acf.AGY));this.YK.H(AXs);this.YK.Aj(true);this.YK.Z(true);this.YK.T(A.aaR(
A.acf.A5k));this.J(this.BZ,0);this.J(this.OJ,0);this.J(this.YK,0);this.BZ.Ab0([B=
this.BZ,B.FV]);this.BZ.Gs([this,this.D_,this.GS]);this.BZ.AkA(A.aaL(A.ach.Edit));
this.BZ.LZ([B=this.BZ,B.AyW]);this.BZ.L2(A.aaL(A.ach.AnR));this.BZ.Au([B=this.FK
,B.B_,B.Cb]);this.BZ.CK(this.FK);this.BZ.A_s([B=this.FK,B.AS3,B.A0E]);this.BZ.A_r([
B=this.FK,B.AS2,B.A0D]);this.OJ.LZ([B=this.BZ,B.AyW]);this.OJ.L2(A.aaL(A.ach.AnR
));this.OJ.Au([B=A._GetAutoObject(A.Device.Device),B.A9p,B.BbD]);this.YK.CK(this.
Aa2);this.YK.AkD([B=A._GetAutoObject(A.Device.Device),B.A8K,B.Bbm]);},_Done:function(
){this.__proto__=C.Cg;this.Rf._Done();this.FK._Done();this.BZ._Done();this.OJ._Done(
);this.YK._Done();this.Aa2._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.Rf._ReInit();this.FK._ReInit();this.BZ._ReInit();this.
OJ._ReInit();this.YK._ReInit();this.Aa2._ReInit();this.Ja(A.aaR(A.acf.Temperature
));this.BZ.T(A.aaR(A.acf.Arp));this.OJ.T(A.aaR(A.acf.Undertemperature));this.OJ.
A_S(A.aaR(A.acf.AGY));this.YK.T(A.aaR(A.acf.A5k));},_Mark:function(D){var B;C.Cg.
_Mark.call(this,D);if((B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aa2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AN0={PK:null,PL:null,Su:null,V5:null,Sw:null,Sv:null,Gd:null,Acr:null,Init:function(
aArg){A.zX([this,this.Bpx],this.PL.Q,0);},Bpx:function(G){var F;A._GetAutoObject(
A.Device.Device).Aw9((F=this.PL.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.Ir._Init.call(this.PK={I:this},0);C.BW._Init.call(this.PL={
I:this},0);C.Afn._Init.call(this.Su={I:this},0);C.Ir._Init.call(this.V5={I:this}
,0);C.Afn._Init.call(this.Sw={I:this},0);C.Afn._Init.call(this.Sv={I:this},0);C.
Gd._Init.call(this.Gd={I:this},0);C.Acr._Init.call(this.Acr={I:this},0);this.__proto__=
C.AN0;var B;this.N.H(Xf);this.Ja(A.aaR(A.acf.Device));this.PK.H(Ah3);this.PK.Aj(
true);this.PK.T(A.aaR(A.acf.A$E));this.PK.Bi(false);this.PK.Ga(2);this.PK.EU(60);
this.PK.IQ(A.aaR(A.acf.AHb));this.PK.Jb(A.aaR(A.acf.AHb));this.PL.H(AXt);this.PL.
Aj(true);this.PL.T(A.aaR(A.acf.A$L));this.PL.Bi(true);this.PL.Bx(0);this.PL.Ga(-
1);this.PL.EU(1);this.Su.H(Aae);this.Su.Aj(true);this.Su.T(A.aaR(A.acf.HG));this.
Su.Bi(false);this.Su.Bx(0);this.Su.Ga(-1);this.Su.EU(1);this.V5.H(Ali);this.V5.Aj(
true);this.V5.T(A.aaR(A.acf.A5I));this.V5.Bi(true);this.V5.IQ(AfG);this.V5.Jb(AfG
);this.Sw.H(AcQ);this.Sw.Aj(true);this.Sw.T(A.aaR(A.acf.AsR));this.Sw.Bi(false);
this.Sw.Bx(1);this.Sw.Ga(-1);this.Sw.EU(1);this.Sv.H(Aoq);this.Sv.Aj(true);this.
Sv.T(A.aaR(A.acf.Asu));this.Sv.Bi(true);this.Sv.Bx(0);this.Sv.Ga(-1);this.Sv.EU(
1);this.Acr.Au(A._GetAutoObject(A.Device.Device).AxK);this.J(this.PK,0);this.J(this.
PL,0);this.J(this.Su,0);this.J(this.V5,0);this.J(this.Sw,0);this.J(this.Sv,0);this.
PK.Au([B=A._GetAutoObject(A.Device.Device),B.A9h,B.Bbz]);this.PL.Au([B=this.Acr,
B.B_,B.Cb]);this.PL.CK(this.Acr);this.Su.CK(this.Gd);this.Su.AkD([B=A._GetAutoObject(
A.Device.Device),B.AEE,B.AIS]);this.V5.Au([B=A._GetAutoObject(A.Device.Device),B.
A8H,B.Bbj]);this.Sw.CK(this.Gd);this.Sw.AkD([B=A._GetAutoObject(A.Device.Device)
,B.A9q,B.BbE]);this.Sv.CK(this.Gd);this.Sv.AkD([B=A._GetAutoObject(A.Device.Device
),B.ASL,B.A0q]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.PK._Done(
);this.PL._Done();this.Su._Done();this.V5._Done();this.Sw._Done();this.Sv._Done(
);this.Gd._Done();this.Acr._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.PK._ReInit();this.PL._ReInit();this.Su._ReInit();this.
V5._ReInit();this.Sw._ReInit();this.Sv._ReInit();this.Gd._ReInit();this.Acr._ReInit(
);this.Ja(A.aaR(A.acf.Device));this.PK.T(A.aaR(A.acf.A$E));this.PK.IQ(A.aaR(A.acf.
AHb));this.PK.Jb(A.aaR(A.acf.AHb));this.PL.T(A.aaR(A.acf.A$L));this.Su.T(A.aaR(A.
acf.HG));this.V5.T(A.aaR(A.acf.A5I));this.Sw.T(A.aaR(A.acf.AsR));this.Sv.T(A.aaR(
A.acf.Asu));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.PK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUx={V8:null,V7:
null,QP:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BiK
],this.QP.Q,0);},BiK:function(G){var F;A._GetAutoObject(A.Device.Device).Akx((F=
this.QP.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
Nh._Init.call(this.V8={I:this},0);C.Nh._Init.call(this.V7={I:this},0);C.AUP._Init.
call(this.QP={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUx;var B;this.Ja(A.aaR(A.acf.Asn));this.V8.H(IV);this.
V8.Aj(true);this.V8.T(A.aaR(A.acf.AjH));this.V8.Bi(false);this.V8.Nk(87);this.V7.
H(AXu);this.V7.Aj(true);this.V7.T(A.aaR(A.acf.Aqm));this.V7.Bi(true);this.V7.Nk(
88);this.QP.H(U0);this.QP.Aj(true);this.QP.T(A.aaR(A.acf.A5p));this.QP.Bi(false);
this.QP.Ga(-1);this.QP.EU(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.V8,0);this.J(this.V7,0);this.J(this.
QP,0);this.V8.AR=[B=this.V8,B.Nn];this.V7.AR=[B=this.V7,B.Nn];this.QP.Au([B=this.
EartagNrAssignmentMode,B.B_,B.Cb]);this.QP.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.V8._Done();this.V7._Done(
);this.QP._Done();this.EartagNrAssignmentMode._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.V8._ReInit();this.V7._ReInit();this.QP._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Ja(A.aaR(A.acf.Asn));this.V8.T(A.aaR(
A.acf.AjH));this.V7.T(A.aaR(A.acf.Aqm));this.QP.T(A.aaR(A.acf.A5p));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.W1={Q:null,TransponderProtocolToString:
null,Apq:null,Background:null,Y:null,So:null,GN:null,PP:null,OL:null,Pt:null,C8:
null,EV:null,SM:null,N4:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.IC],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.IC],E,0);if(!!E)A.pe([this,this.IC],this);},IC:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GN.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BM=(F=this.Q,F[1].call(F[0])).Bjg();if(BM<900){var J8=A._GetAutoObject(
A.Device.Converter).ANE(BM);if(!!J8)this.C8.R(((this.CountryToString.Lv(J8)+AcO)+
BM.toFixed())+O9);else this.C8.R(BM.toFixed());if(J8===10){var AKg=this.A7c((F=this.
Q,F[1].call(F[0])).Id);this.C8.R(this.C8.String+((((AHX+this.Apq.Bqg(AKg))+AcO)+
A.abl(this.Apq.Bqf(AKg),2,10))+O9));}this.C8.Z(true);this.Pt.Z(true);this.OL.Z(false
);this.PP.Z(false);}else{this.OL.R(((A._GetAutoObject(A.Device.Converter).Bh0(BM
)+AcO)+BM.toFixed())+O9);this.OL.Z(true);this.PP.Z(true);this.C8.Z(false);this.Pt.
Z(false);}if(BM===276){this.EV.R(this.Apq.BS(this.A7c((F=this.Q,F[1].call(F[0])).
Id)));this.EV.Z(true);}else this.EV.Z(false);this.N4.R(this.TransponderProtocolToString.
BS((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GN.R(A.jV);this.OL.
R(A.jV);this.EV.R(A.jV);this.C8.R(A.jV);this.N4.R(A.jV);}},A7c:function(J6){var Qz=
0;var J8=A._GetAutoObject(A.Device.Converter).S2(J6);switch(J8){case 10:{var Gi=
A._GetAutoObject(A.Device.Helper).Sj(J6,8,2)|0;Qz=A._GetAutoObject(A.Device.Converter
).ACY(Gi);}break;default:;}return Qz;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apq={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CH._Init.call(this.So={I:this},0);C.CH._Init.call(this.GN={I:this},0);C.CH._Init.
call(this.PP={I:this},0);C.CH._Init.call(this.OL={I:this},0);C.CH._Init.call(this.
Pt={I:this},0);C.CH._Init.call(this.C8={I:this},0);C.CH._Init.call(this.EV={I:this
},0);C.CH._Init.call(this.SM={I:this},0);C.CH._Init.call(this.N4={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.W1;
this.H(AcP);this.Background.AZ(0x3F);this.Background.H(AcP);this.Background.L(A.
jb.CS);this.Y.AZ(0x3F);this.Y.H(AcP);this.Y.JT(9);this.So.H(AHY);this.So.Aj(true
);this.So.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.So.A6(0x11);this.So.L(A.jb.
Text);this.GN.H(AXv);this.GN.Aj(true);this.GN.R(AHZ);this.GN.A6(0x14);this.GN.L(
A.jb.Text);this.PP.H(AH0);this.PP.Aj(true);this.PP.R(A.aaR(A.acf.A__)+A.aaR(A.acf.
Colon));this.PP.A6(0x11);this.PP.L(A.jb.Text);this.OL.H(AH1);this.OL.Aj(true);this.
OL.R(AXw);this.OL.A6(0x14);this.OL.L(A.jb.Text);this.Pt.H(AH0);this.Pt.Aj(true);
this.Pt.R(A.aaR(A.acf.C8)+A.aaR(A.acf.Colon));this.Pt.A6(0x11);this.Pt.L(A.jb.Text
);this.C8.H(AH1);this.C8.Aj(true);this.C8.R(AXx);this.C8.A6(0x14);this.C8.L(A.jb.
Text);this.EV.H(AXy);this.EV.Aj(true);this.EV.R(AXz);this.EV.A6(0x14);this.EV.L(
A.jb.Text);this.SM.H(AXA);this.SM.Aj(true);this.SM.R(A.aaR(A.acf.N4)+A.aaR(A.acf.
Colon));this.SM.A6(0x11);this.SM.L(A.jb.Text);this.N4.H(AXB);this.N4.Aj(true);this.
N4.R(AXC);this.N4.A6(0x14);this.N4.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.So,0);this.J(this.GN,0);this.J(this.PP,0);this.J(this.OL,0
);this.J(this.Pt,0);this.J(this.C8,0);this.J(this.EV,0);this.J(this.SM,0);this.J(
this.N4,0);this.So.S(A.aaL(A.fl.Ak));this.So.A2(A.aaL(A.fl.Bh));this.GN.S(A.aaL(
A.fl.Ak));this.GN.A2(A.aaL(A.fl.Bh));this.PP.S(A.aaL(A.fl.Ak));this.PP.A2(A.aaL(
A.fl.Bh));this.OL.S(A.aaL(A.fl.Ak));this.OL.A2(A.aaL(A.fl.Bh));this.Pt.S(A.aaL(A.
fl.Ak));this.Pt.A2(A.aaL(A.fl.Bh));this.C8.S(A.aaL(A.fl.Ak));this.C8.A2(A.aaL(A.
fl.Bh));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bh));this.SM.S(A.aaL(A.fl.
Ak));this.SM.A2(A.aaL(A.fl.Bh));this.N4.S(A.aaL(A.fl.Ak));this.N4.A2(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apq._Done();this.Background._Done();this.Y._Done();this.So._Done();
this.GN._Done();this.PP._Done();this.OL._Done();this.Pt._Done();this.C8._Done();
this.EV._Done();this.SM._Done();this.N4._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apq._ReInit();this.Background._ReInit();this.Y._ReInit();this.So.
_ReInit();this.GN._ReInit();this.PP._ReInit();this.OL._ReInit();this.Pt._ReInit(
);this.C8._ReInit();this.EV._ReInit();this.SM._ReInit();this.N4._ReInit();this.CountryToString.
_ReInit();this.So.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.PP.R(A.aaR(A.acf.A__
)+A.aaR(A.acf.Colon));this.Pt.R(A.aaR(A.acf.C8)+A.aaR(A.acf.Colon));this.SM.R(A.
aaR(A.acf.N4)+A.aaR(A.acf.Colon));this.So.S(A.aaL(A.fl.Ak));this.So.A2(A.aaL(A.fl.
Bh));this.GN.S(A.aaL(A.fl.Ak));this.GN.A2(A.aaL(A.fl.Bh));this.PP.S(A.aaL(A.fl.Ak
));this.PP.A2(A.aaL(A.fl.Bh));this.OL.S(A.aaL(A.fl.Ak));this.OL.A2(A.aaL(A.fl.Bh
));this.Pt.S(A.aaL(A.fl.Ak));this.Pt.A2(A.aaL(A.fl.Bh));this.C8.S(A.aaL(A.fl.Ak)
);this.C8.A2(A.aaL(A.fl.Bh));this.EV.S(A.aaL(A.fl.Ak));this.EV.A2(A.aaL(A.fl.Bh)
);this.SM.S(A.aaL(A.fl.Ak));this.SM.A2(A.aaL(A.fl.Bh));this.N4.S(A.aaL(A.fl.Ak));
this.N4.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OL
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QX={D2:null,A$n:A.jV,Ai:function(Ae){C.Fo.Ai.call(
this,Ae);if(this.Ms.Fq())this.D2.CT(A.jb.AV);else this.D2.CT(this.Background.AQ);
this.D2.Zr(this.G_.AQ);},Zw:function(E){if(this.A$n===E)return;this.A$n=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fo._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QX;this.Background.H(AXD);this.
Ms.H(W7);this.OE.H(AH2);this.Q3.H(AH2);this.D2.H(AXE);this.D2.Z(false);this.J(this.
D2,0);this.G_.S(A.aaL(A.fl.Af));this.G_.A2(A.aaL(A.fl.Ak));this.G_.Cu(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fo;this.D2._Done();C.Fo._Done.call(this
);},_ReInit:function(){C.Fo._ReInit.call(this);this.D2._ReInit();this.G_.S(A.aaL(
A.fl.Af));this.G_.A2(A.aaL(A.fl.Ak));this.G_.Cu(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fo._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B6:null,AeF:null,Ap:null,Text:null
,DK:A.jV,AmQ:0,M4:0,Jc:0,A5L:0x14,Init:function(aArg){},T:function(E){if(this.DK===
E)return;this.DK=E;this.Text.R(E);},BCU:function(G){this.Ap.H(this.Text.M);this.
AeF.H(this.Text.M);},Zr:function(E){if(this.AmQ===E)return;this.AmQ=E;this.AeF.L(
E);this.Text.L(E);},CT:function(E){if(this.M4===E)return;this.M4=E;this.Ap.L(E);
},S:function(E){if(this.B6===E)return;this.B6=E;this.Text.S(E);},Hn:function(E){
if(this.Jc===E)return;this.Jc=E;this.Text.Hn(E);},Bmc:function(E){if(this.A5L===
E)return;this.A5L=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NT._Init.call(this.AeF={I:this},0);A.acg.NT._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AH3);
this.AeF.AZ(0x8);this.AeF.L(A.jb.Text);this.Ap.AZ(0x8);this.Ap.L(A.jb.CS);this.Text.
AZ(0xD);this.Text.H(AH3);this.Text.Hn(5);this.Text.I$(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeF,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeF.Ax(A.aaL(A.ach.AP0));this.Ap.Ax(A.aaL(A.ach.APZ));this.Text.Q7([this,this.BCU
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeF._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeF._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.T9={DY:null,Y:null,Ay:null,DE:function(G){var B;C.AB.DE.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALp(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkQ();A._GetAutoObject(A.Device.Helper).Asr();},Ig:function(G){},AcV:function(
s){this.Ig(s);},A3F:function(G){A._GetAutoObject(C.A8).FB();},Fk:function(G){var
B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.
Mz(-this.Y.Br[1]);},ALp:function(G){},BG3:function(s){this.ALp(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.T9;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CU(A.jV);this.Dr(C.Aq0);this.
DY.AZ(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);this.Y.JT(9);this.Ay.H(
It);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CE=[this,this.A3F
];this.N.C1(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AVT={WA:function(
G){this.Agx();this.I2(A.aaR(A.acf.AVr),[this,this.ATT],7);this.I2(A.aaR(A.acf.BoP
),[this,this.Bmf],6);this.I2(A.aaR(A.acf.AGk),[this,this.ATF],3);this.I2(A.aaR(A.
acf.An1),[this,this.AwX],2);this.I2(A.aaR(A.acf.AdV),[this,this.AEX],1);this.I2(
A.aaR(A.acf.AuG),[this,this.AER],0);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abr:function(){return C.ANf;},Abs:function(){return C.APG;
},Q_:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mt();var ABA=A._NewObject(
A.Device.BoolFilterCriterion,0);ABA.Initialize(12,0,true,true);Be.CW(ABA);A._GetAutoObject(
A.Device.Device).An.Bk(Be);},HP:function(G){var F;C.GJ.HP.call(this,G);if(this.Aki(
)===false){this.N.Cw(A._GetAutoObject(A.Device.Converter).Ajr((F=this.Fn,F[1].call(
F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OQ(false);this.N.OR(false
);},Agj:function(){A._GetAutoObject(C.A8).Cd(41);},_Init:function(aArg){C.GJ._Init.
call(this,aArg);this.__proto__=C.AVT;var B;this.Dr(C.APC);this.Dk(A.aaR(A.acf.A78
));this.AwS([B=A._GetAutoObject(A.Device.Device),B.A9u,B.BbF]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dk(A.aaR(A.acf.A78));},_className:"Application::WatchListScreen"
};C.AMl={DE:function(G){var B;var JC=(A.Core.BK.isPrototypeOf(G)?G:null);if(((JC.
CO===4)||(JC.CO===5))===false){C.Ax4.DE.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var Bc9=A._GetAutoObject(A.Device.Device
).KX;var Ti;if(JC.CO===5)Ti=5;else Ti=4;var ABe=A._GetAutoObject(A.acj.DU).BdH(Bc9
,Ti);var Gv=(((Bc9+((ABe/2)|0))/ABe)|0)*ABe;if(JC.CO===4)Gv+=ABe;else if(JC.CO===
5)Gv-=ABe;if(Gv>999900)Gv=999900;if(Gv<100)Gv=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(Gv);},AsF:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O3,B.CE],this);else A._GetAutoObject(C.A8).FB();
},WR:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsH();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$C()===false){this.H7.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KX
);this.H7.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A8).FB();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.H7.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).KX);this.H7.Ci(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A8).FB();}},AkX:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O3,B.B$],this);},BdG:function(){var
ALD=A._GetAutoObject(A.Device.Helper).W.AhW(1);if(ALD>=100000)ALD=(Math.round(ALD
/1000)|0)*1000;return ALD;},_Init:function(aArg){C.Ax4._Init.call(this,aArg);this.
__proto__=C.AMl;},_className:"Application::AnimalActionWeighingScreen"};C.AVE={Wa:
null,YM:null,Rf:null,AeQ:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
BW._Init.call(this.Wa={I:this},0);C.BW._Init.call(this.YM={I:this},0);C.Rf._Init.
call(this.Rf={I:this},0);C.AeQ._Init.call(this.AeQ={I:this},0);this.__proto__=C.
AVE;var B;this.Ja(A.aaR(A.acf.AHc));this.Wa.H(Ah3);this.Wa.Aj(true);this.Wa.T(A.
aaR(A.acf.A$3));this.Wa.Bi(true);this.Wa.Bx(0);this.YM.H(U0);this.YM.Aj(true);this.
YM.T(A.aaR(A.acf.A$2));this.YM.Bi(false);this.J(this.Wa,0);this.J(this.YM,0);this.
Wa.Au([B=this.Rf,B.B_,B.Cb]);this.Wa.CK(this.Rf);this.YM.Au([B=this.AeQ,B.B_,B.Cb
]);this.YM.CK(this.AeQ);},_Done:function(){this.__proto__=C.Cg;this.Wa._Done();this.
YM._Done();this.Rf._Done();this.AeQ._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.Wa._ReInit();this.YM._ReInit();this.Rf._ReInit();
this.AeQ._ReInit();this.Ja(A.aaR(A.acf.AHc));this.Wa.T(A.aaR(A.acf.A$3));this.YM.
T(A.aaR(A.acf.A$2));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.
Wa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeQ={MassUnitToString:null
,Du:function(){return 2;},C6:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BS(aIndex);},DZ:function(A7){return A7;},H3:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwT(E);}
,Init:function(aArg){var B;A.zX([this,this.Bej],[B=A._GetAutoObject(A.Device.Device
),B.ASK,B.A0p],0);A.pe([this,this.Bej],this);},Bej:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeQ;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax4={H7:null,Ajx:null,MassUnit:null,
KX:null,VA:null,AnN:null,AcE:null,ZY:null,O3:null,YC:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af4());A.zX([this,this.AKE],[B=A._GetAutoObject(
A.Device.Device),B.AEH,B.AIV],0);A.zX([this,this.BBH],[B=A._GetAutoObject(A.Device.
Device),B.AEN,B.AIZ],0);A.zX([this,this.BBI],[B=this.O3,B.Arx,B.Jy],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AxX();this.AcG();},I0:function(G){this.WR(this);}
,CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsH();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HJ().toFixed(),
0,null);this.H7.Gr();this.H7.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AGU();else{var BC9=this.BdG();this.ZY.Z(true);this.AcE.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BC9);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsH();else A._GetAutoObject(A.Device.Device).AhP(
);},AxX:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bg6();break;case 3:{this.Bg6();this.ZY.Z(false);this.AcE.Z(false
);if(this.A$C()){this.VA.Z(false);this.KX.H(A.abO(this.KX.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O3.Ar(true);this.O3.Z(true);this.Bb(this.O3);}}break;
case 4:this.KX.R(A.aaR(A.acu.Akl));break;default:A.ab5("%s%e",AH4,A._GetAutoObject(
A.Device.Device).MeasureState);}},AcG:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C1(A.aaL(A.ach.AeA));this.N.Cw(null);
this.YC.Z(false);this.N.C2(A.aaL(A.ach.Am3));this.N.CU(A.jV);}break;case 3:{if(this.
O3.AY<=1){this.N.C1(null);this.N.Cw(null);this.YC.Z(false);this.N.C2(null);}else{
this.N.C1(A.aaL(A.ach.Am2));this.N.Cw(A.aaL(A.ach.AeB));this.YC.Z(true);this.N.C2(
null);}this.N.CU(A.aaR(A.acf.Ok));}break;case 4:{this.N.C2(A.aaL(A.ach.AvQ));this.
N.B$=[this,this.Bl5];this.N.Cw(null);this.YC.Z(false);this.N.CU(A.jV);}break;default:;
}},AsF:function(G){},Bw0:function(s){this.AsF(s);},WR:function(G){},A0H:function(
s){this.WR(s);},Bl5:function(G){this.CC(this);},BBH:function(G){this.Am();},AKE:
function(G){this.Am();},A$C:function(){var Aux=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(Aux>0)&&!A._GetAutoObject(A.Device.Helper).Bqd(Aux
,this.H7.Timestamp);},AkX:function(G){},A0G:function(s){this.AkX(s);},BBI:function(
G){this.Am();},Bg6:function(){this.KX.R(A._GetAutoObject(A.Device.Converter).Ak$(
A._GetAutoObject(A.Device.Device).KX));},BdG:function(){return A._GetAutoObject(
A.Device.Helper).W.AhW(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Ajx={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KX={I:this},0);A.acg.Text._Init.call(this.VA={I:this
},0);C.AxW._Init.call(this.AnN={I:this},0);A.acg.Aeq._Init.call(this.AcE={I:this
},0);A.acg.Aeq._Init.call(this.ZY={I:this},0);C.AVY._Init.call(this.O3={I:this},
0);A.acg.Ap._Init.call(this.YC={I:this},0);this.__proto__=C.Ax4;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dr(C.IK);this.Ajx.AZ(0x3F);this.Ajx.H(Ayr);this.Ajx.
L(A.jb.CJ);this.MassUnit.H(AXF);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
AAa));this.MassUnit.L(A.jb.Text);this.KX.H(AXG);this.KX.A6(0x14);this.KX.R(A.aaR(
A.acu.Akl));this.KX.L(A.jb.Text);this.VA.H(AXH);this.VA.R(A.aaR(A.acf.Bad));this.
VA.L(A.jb.Text);this.VA.Z(true);this.AnN.H(AXI);this.AcE.H(AXJ);this.AcE.L(A.jb.
Aeb);this.AcE.Z(false);this.ZY.H(AH5);this.ZY.L(A.jb.Aeb);this.ZY.BmT(true);this.
ZY.Z(false);this.O3.AZ(0x3F);this.O3.H(Ayr);this.O3.Ar(false);this.O3.Z(false);this.
YC.H(AXK);this.YC.L(A.jb.Bm);this.J(this.Ajx,0);this.J(this.MassUnit,0);this.J(this.
KX,0);this.J(this.VA,0);this.J(this.AcE,0);this.J(this.ZY,0);this.J(this.O3,0);this.
J(this.YC,0);this.N.CE=[this,this.Bw0];this.N.Cf=[this,this.A0G];this.N.B$=[this
,this.A0H];this.MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aet));this.VA.S(
A.aaL(A.fl.EK));this.AcE.Zv(this.AnN);this.ZY.Zv(this.AnN);this.H7=A._NewObject(
A.Device.Rating,0);this.O3.L0(A._GetAutoObject(A.Device.Helper).W);this.O3.AkE(this.
H7);this.YC.Ax(A.aaL(A.ach.AQW));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajx._Done();this.MassUnit._Done();this.KX._Done();this.VA._Done();this.
AnN._Done();this.AcE._Done();this.ZY._Done();this.O3._Done();this.YC._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajx._ReInit();
this.MassUnit._ReInit();this.KX._ReInit();this.VA._ReInit();this.AnN._ReInit();this.
AcE._ReInit();this.ZY._ReInit();this.O3._ReInit();this.YC._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAa));this.KX.R(A.aaR(A.acu.Akl));this.VA.R(A.aaR(A.acf.Bad));this.
MassUnit.S(A.aaL(A.fl.EK));this.KX.S(A.aaL(A.fl.Aet));this.VA.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H7)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YC)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AV2={FK:null
,OM:null,Ne:null,C_:null,LW:null,T6:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FK,B.B_,B.Cb],0);A.pe([this,this.GH],this);},CC:function(G){C.Cg.CC.
call(this,G);A.pe([this,this.GH],this);},BkO:function(G){var F;this.LW.BT.L(this.
LW.V.AQ);if(!!this.LW.Q)this.LW.BT.R((A._GetAutoObject(A.Device.Converter).S9((F=
this.LW.Q,F[1].call(F[0])),2,true)+CQ)+A._GetAutoObject(A.acj.DU).Aat());},GH:function(
G){var AJz=true;if(this.FK.Q===1)AJz=false;this.C_.Aj(AJz);this.C_.Ar(AJz);this.
C_.Z(AJz);A._GetAutoObject(A.Device.Helper).ANy(this.Y);},_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.AMH._Init.call(this.FK={I:this},0);C.AHn._Init.call(this.
OM={I:this},0);C.AUU._Init.call(this.Ne={I:this},0);C.AkV._Init.call(this.C_={I:
this},0);C.Ir._Init.call(this.LW={I:this},0);C.BW._Init.call(this.T6={I:this},0);
this.__proto__=C.AV2;var B;this.Ja(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsU));this.FK.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.OM.Au(A._GetAutoObject(
A.Device.Device).OM);this.Ne.H(AXL);this.Ne.Aj(true);this.C_.H(As_);this.C_.Aj(true
);this.C_.T(A.aaR(A.acf.KJ));this.C_.Bi(true);this.C_.Ga(1000);this.C_.EU(99000);
this.LW.H(As$);this.LW.Aj(true);this.LW.T(A.aaR(A.acf.A5t));this.LW.Ga(50);this.
LW.EU(2000);this.LW.ATm(A._GetAutoObject(A.acj.DU).AzT());this.T6.H(AcQ);this.T6.
Aj(true);this.T6.T(A.aaR(A.acf.A7Q));this.T6.Ga(-1);this.T6.EU(1);this.JZ(this.Y
,-1);this.JZ(this.Ay,-1);this.J(this.Ne,0);this.J(this.C_,0);this.J(this.LW,0);this.
J(this.T6,0);this.Ne.Ab0([B=this.Ne,B.FV]);this.Ne.Gs([this,this.D_,this.GS]);this.
Ne.AkA(A.aaL(A.ach.Edit));this.Ne.LZ([B=this.Ne,B.AyW]);this.Ne.L2(A.aaL(A.ach.AnR
));this.Ne.Au([B=this.FK,B.B_,B.Cb]);this.Ne.CK(this.FK);this.Ne.A_s([B=this.FK,
B.AS3,B.A0E]);this.Ne.A_r([B=this.FK,B.AS2,B.A0D]);this.C_.Gs([this,this.D_,this.
GS]);this.C_.LZ([B=this.Ne,B.AyW]);this.C_.L2(A.aaL(A.ach.AnR));this.C_.Au([B=this.
FK,B.A8F,B.AS_]);this.LW.Gs([this,this.D_,this.GS]);this.LW.LZ([B=this.Ne,B.AyW]
);this.LW.L2(A.aaL(A.ach.AnR));this.LW.Au([B=this.FK,B.A8D,B.AS8]);this.LW.A_G([
this,this.BkO]);this.T6.Gs([this,this.D_,this.GS]);this.T6.Au([B=this.OM,B.B_,B.
Cb]);this.T6.CK(this.OM);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;
this.FK._Done();this.OM._Done();this.Ne._Done();this.C_._Done();this.LW._Done();
this.T6._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.FK._ReInit();this.OM._ReInit();this.Ne._ReInit();this.C_._ReInit();this.LW.
_ReInit();this.T6._ReInit();this.Ja(A.aaR(A.acf.Settings));this.Hj.R(A.aaR(A.acf.
AsU));this.C_.T(A.aaR(A.acf.KJ));this.LW.T(A.aaR(A.acf.A5t));this.T6.T(A.aaR(A.acf.
A7Q));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FK)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ne).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T6)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AUU={YY:null,Init:
function(aArg){var B;A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Device),B.
ASK,B.A0p],0);A.pe([this,this.AfH],this);},A39:function(G){A._GetAutoObject(A.Device.
Device).A3(37,true,A.jV,0,[this,this.BbU]);},A1W:function(G){var F;if(this.A_===
1){var BO=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).AzT();if(this.D7<this.
AlT)this.D7=this.AlT;if(this.DW!==BO){if(!!this.JX)(F=this.JX,F[2].call(F[0],this.
D7));A.abo(this.JX,0);}}if(this.A_===2){var BO=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).AzT();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JW
)(F=this.JW,F[2].call(F[0],this.DW));A.abo(this.JW,0);}}this.DJ(this);this.Am();
},A2w:function(G){var F;if(this.A_===1){var BO=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).AzT();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO){if(!!this.JX
)(F=this.JX,F[2].call(F[0],this.D7));A.abo(this.JX,0);}}if(this.A_===2){var BO=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).AzT();if(this.DW>this.AlO)this.DW=
this.AlO;if(this.DW!==BO){if(!!this.JW)(F=this.JW,F[2].call(F[0],this.DW));A.abo(
this.JW,0);}}this.DJ(this);this.Am();},GH:function(G){this.PN.R(AH6+A._GetAutoObject(
A.Device.Converter).S9(this.D7,2,true));this.PM.R(AH6+A._GetAutoObject(A.Device.
Converter).S9(this.DW,2,true));this.Sy.R(A._GetAutoObject(A.acj.DU).Aat());this.
YY.R(this.Sy.String);},A3I:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).Ast(this
);},A2p:function(Atv){if(Atv===1)return this.PN;else if(Atv===2)return this.PM;else
return null;},_Init:function(aArg){C.Aco._Init.call(this,aArg);A.acg.Text._Init.
call(this.YY={I:this},0);this.__proto__=C.AUU;this.T(A.aaR(A.acf.ACt));this.AlO=
2000;this.AlT=20;this.Background.H(KZ);this.V.H(BD);this.V.R(A.aaR(A.acf.ACt)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkN.H(AXM);this.AkO.H(AXN);this.Q8.H(AXO);
this.QH.H(AXP);this.PM.H(AXQ);this.PN.H(AXR);this.Sy.H(AXS);this.YY.H(AXT);this.
YY.I$(false);this.YY.A6(0x12);this.YY.L(0xFF000000);this.JZ(this.H4,-8);this.J(this.
YY,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YY.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Aco;this.YY._Done();C.Aco.
_Done.call(this);},_ReInit:function(){C.Aco._ReInit.call(this);this.YY._ReInit();
this.T(A.aaR(A.acf.ACt));this.V.R(A.aaR(A.acf.ACt)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.YY.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Aco._Mark.call(this,D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABF={M:O5,A7p:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7p();},_Init:function(
aArg){A.Graphics.Hz._Init.call(this,aArg);this.__proto__=C.ABF;},_className:"Application::AbstractPath"
};C.Aqf={DP:null,DY:null,Rk:null,AdR:null,P5:null,AdQ:null,AuF:1,A41:0,BcQ:false
,AzP:true,CP:function(){this.Bg2(this);},Init:function(aArg){var B;this.Bb(this.
AdR);A.zX([this,this.Bg2],[B=this.AdR,B.A8L,B.Bbn],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdQ.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Bij(this.AuF+this.A41)));if(this.AuF===1)this.P5.R(A.aaR(A.acf.ANm));else this.
P5.R(A.aaR(A.acf.BhT));},CC:function(G){if(this.AzP)this.AzP=false;else if(this.
DP.Bc0()===false)A.pe([this,this.A3f],this);else if(this.DP.Az4())this.DP.Ac9();
A.zV([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);},A3f:function(G){this.
BcQ=true;A._GetAutoObject(C.A8).FB();},Bg2:function(G){var B;var Bdq=(C.Wm.isPrototypeOf(
B=this.AdR.AV)?B:null);if(!!Bdq){var Aza=A._NewObject(A.Device.ActionToString,0);
this.Rk.R(Aza.Lv(Bdq.Action));}},Ig:function(G){var Cy=(C.Wm.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DP.Qp(Cy.Action);this.Bl8(this.AuF+1);},BBa:function(G){
if(A._GetAutoObject(C.Pn).NY(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bl8:function(E){
if(this.AuF===E)return;this.AuF=E;this.Am();},Aga:function(G){if((this.BcQ===false
)&&(this.DP.Bc0()===false))A.pe([this,this.A3f],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);C.CH._Init.call(this.
Rk={I:this},0);C.ARP._Init.call(this.AdR={I:this},0);C.CH._Init.call(this.P5={I:
this},0);A.acg.Text._Init.call(this.AdQ={I:this},0);this.__proto__=C.Aqf;this.Background.
L(A.jb.CS);this.N.H(Xf);this.N.Z(true);this.Dr(C.IK);this.DY.AZ(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Rk.H(AXU);this.Rk.L(A.jb.Text);this.AdR.H(AH7);this.
P5.H(AXV);this.P5.R(A.aaR(A.acf.ANm));this.P5.L(A.jb.Text);this.AdQ.H(Ays);this.
AdQ.R(AH8);this.AdQ.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rk,0);this.J(this.
AdR,0);this.J(this.P5,0);this.J(this.AdQ,0);this.N.CE=[this,this.A3f];this.N.Cf=[
this,this.BBa];this.N.C1(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.Rk.S(
A.aaL(A.fl.EK));this.Rk.A2(A.aaL(A.fl.Af));this.Rk.Cu(A.aaL(A.fl.Ak));this.AdR.A3G=[
this,this.Ig];this.P5.S(A.aaL(A.fl.EK));this.P5.A2(A.aaL(A.fl.Af));this.P5.Cu(A.
aaL(A.fl.Ak));this.AdQ.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rk._Done();this.
AdR._Done();this.P5._Done();this.AdQ._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rk._ReInit();this.AdR._ReInit();
this.P5._ReInit();this.AdQ._ReInit();this.P5.R(A.aaR(A.acf.ANm));this.Rk.S(A.aaL(
A.fl.EK));this.Rk.A2(A.aaL(A.fl.Af));this.Rk.Cu(A.aaL(A.fl.Ak));this.P5.S(A.aaL(
A.fl.EK));this.P5.A2(A.aaL(A.fl.Af));this.P5.Cu(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdQ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.ARP={Ia:null,A3G:null,Cq:null,Y:null,Ay:
null,A4m:0,Init:function(aArg){A.zV([this,this.ABu],this.Ia,0);A.zV([this,this.BgZ
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AuC],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABu],this);},Bb:function(E){var A3b=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A3b)A.abo([this,this.A8L,this.Bbn],0);},DE:
function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case
7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x415);
if((Fi===5)&&!X){var ALf=this.AV;while(!X){ALf=this.QJ(ALf,2,0x415);if(!!ALf)X=this.
QJ(ALf,Fi,0x415);else break;}}if(!!X)this.Bb(X);var GZ=(C.Wm.isPrototypeOf(B=this.
AV)?B:null);if(!!GZ)this.A4m=(C.Wm.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4m=0;A.pe([this,this.MS],this);},A1P:function(Eh){var EP=A._GetAutoObject(C.DP).
Bc8(Eh,this.A3G);this.J(EP,0);},Ao3:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HO(AdM);
}},ABu:function(G){this.Ao3();var O;var CB=A._GetAutoObject(C.Pn).M$();for(O=0;O<
CB;O=O+1){var Tf=A._GetAutoObject(C.Pn).OF(O);this.A1P(Tf);}A.pe([this,this.BgZ]
,this);A.pe([this,this.BqB],this);A.pe([this,this.AuC],this);},BqB:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Wm.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ah;}},AuC:function(G){var B;var X=this.Y.Ah;while(!!
X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wm.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ATO(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ATO(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ATO(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((
B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},BgZ:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wm.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pn).NY(Aa.Action)&&A._GetAutoObject(C.
DP).A40(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Z(true);if(
this.A4m===Aa.Action)this.Bb(Aa);}else{Aa.Ar(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MS],this);},MS:function(G){var B;this.Y.Vy(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.ARP;this.H(AXW);this.Cq.Filter=147;this.Y.AZ(0xB);this.Y.H(AXX);this.Y.JT(9);this.
Ay.AZ(0xA);this.Ay.H(AXY);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.
DE];this.Cq.D1=[this,this.DE];this.Y.Em=[this,this.Fk];this.Ia=A._GetAutoObject(
C.Pn);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=
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
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADh));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ek._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ek._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.AaR={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},I0:function(G){},Ai:function(Ae){C.BW.
Ai.call(this,Ae);var FS=A.jb.Aeb;var GY=A.jb.CS;if(this.Hl){FS=A.jb.Text;GY=A.jb.
Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.Qv){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KG){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.Hx.L(A.
jb.CS);this.H4.L(A.jb.CS);},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(C.CH.
isPrototypeOf(B=this.Dz.Cj)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.A2(A.aaL(
A.fl.Bh));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));else CA.R(Xd);CA.H(A.
abK(CA.M,[this.Dz.Wc,(B=this.Dz.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.AaR;this.Dz.AFo(170);this.Dz.N2(C.CH);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajk={C9:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hn(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FS=A.jb.Aeb;var GY=A.jb.CS;if(this.Hl){FS=A.jb.Text;
GY=A.jb.Bm;}if(!this.LI){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else if(this.
Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KG){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C9={I:this},0);this.__proto__=
C.Ajk;this.C9.H(AX0);this.C9.Cv(1);this.J(this.C9,0);this.C9.Ax(A.aaL(A.ach.Aju)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C9._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C9._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AL4={Y:null,RN:null,Tu:null
,Tv:null,Tw:null,AdP:null,XN:null,Vs:null,Vt:null,AaQ:null,Ay:null,Init:function(
aArg){this.Bb(this.RN);},DE:function(G){C.Fs.DE.call(this,G);this.MS(this);},I0:
function(G){this.Bgf(this);},Ln:function(){if(!this.BP){this.BP=A._NewObject(C.N
,0);this.BP.CE=[this,this.Bgf];this.BP.Cf=null;this.BP.B$=null;this.BP.CU(A.jV);
this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.Yy));}return this.BP;},AA9:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XN.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XN.Q))A._GetAutoObject(C.AutoActions).J(this.XN.Q);if(!!this.Vs.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vs.Q))A._GetAutoObject(C.AutoActions
).J(this.Vs.Q);if(!!this.Vt.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.Vt.
Q))A._GetAutoObject(C.AutoActions).J(this.Vt.Q);if(!!this.AaQ.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.AaQ.Q))A._GetAutoObject(C.AutoActions).J(this.AaQ.Q
);A._GetAutoObject(C.AutoActions).Ci();},Bgf:function(G){if(this.BAh()===true){this.
AA9();this.AaE(this);}else A._GetAutoObject(A.Device.Device).A3(27,true,A.jV,0,null
);},BAh:function(){return(!!this.XN.C6(this.XN.Q)||!!this.Vs.C6(this.Vs.Q))||!!this.
Vt.C6(this.Vt.Q);},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.
Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},MS:function(G){var B;this.
Y.Vy(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true
,null,null);},BBo:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XN.AtC(this);this.Vs.AtC(this);this.Vt.AtC(this);this.AaQ.AtC(this);}
,_Init:function(aArg){C.Fs._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.AaR._Init.call(this.RN={I:this},0);C.AaR._Init.call(this.Tu={I:this},0);C.
AaR._Init.call(this.Tv={I:this},0);C.AaR._Init.call(this.Tw={I:this},0);C.Au$._Init.
call(this.AdP={I:this},0);C.AutoAction._Init.call(this.XN={I:this},0);C.AutoAction.
_Init.call(this.Vs={I:this},0);C.AutoAction._Init.call(this.Vt={I:this},0);C.AutoAction.
_Init.call(this.AaQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AL4;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.Tx));this.Y.H(L3);this.Y.JT(1);this.
RN.H(Ah3);this.RN.Ar(true);this.RN.Aj(true);this.RN.T(A._GetAutoObject(A.Device.
Helper).MG(A.aaR(A.acf.Ajj),O8,AH9));this.Tu.H(U0);this.Tu.Ar(true);this.Tu.Aj(true
);this.Tu.T(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.Ajj),O8,AH_));this.
Tv.H(Aae);this.Tv.Ar(true);this.Tv.Aj(true);this.Tv.T(A._GetAutoObject(A.Device.
Helper).MG(A.aaR(A.acf.Ajj),O8,AH$));this.Tw.H(Ali);this.Tw.Ar(true);this.Tw.Aj(
true);this.Tw.T(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.Ajj),O8,AIa));this.
AdP.H(Ayt);this.AdP.Aj(true);this.AdP.T(A.aaR(A.acf.A$k));this.Vs.Index=1;this.Vt.
Index=2;this.AaQ.Index=3;this.Ay.H(It);this.J(this.Y,0);this.J(this.RN,0);this.J(
this.Tu,0);this.J(this.Tv,0);this.J(this.Tw,0);this.J(this.AdP,0);this.J(this.Ay
,0);this.Y.Em=[this,this.Fk];this.RN.Zs(A.aaL(A.fl.H1));this.RN.Zt(A.aaL(A.fl.H1
));this.RN.Au([B=this.XN,B.B_,B.Cb]);this.RN.CK(this.XN);this.Tu.Zs(A.aaL(A.fl.H1
));this.Tu.Zt(A.aaL(A.fl.H1));this.Tu.Au([B=this.Vs,B.B_,B.Cb]);this.Tu.CK(this.
Vs);this.Tv.Zs(A.aaL(A.fl.H1));this.Tv.Zt(A.aaL(A.fl.H1));this.Tv.Au([B=this.Vt,
B.B_,B.Cb]);this.Tv.CK(this.Vt);this.Tw.Zs(A.aaL(A.fl.H1));this.Tw.Zt(A.aaL(A.fl.
H1));this.Tw.Au([B=this.AaQ,B.B_,B.Cb]);this.Tw.CK(this.AaQ);this.AdP.AR=[this,this.
BBo];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Y._Done();this.
RN._Done();this.Tu._Done();this.Tv._Done();this.Tw._Done();this.AdP._Done();this.
XN._Done();this.Vs._Done();this.Vt._Done();this.AaQ._Done();this.Ay._Done();C.Fs.
_Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.Y._ReInit();this.
RN._ReInit();this.Tu._ReInit();this.Tv._ReInit();this.Tw._ReInit();this.AdP._ReInit(
);this.XN._ReInit();this.Vs._ReInit();this.Vt._ReInit();this.AaQ._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.Tx));this.RN.T(A._GetAutoObject(A.Device.Helper
).MG(A.aaR(A.acf.Ajj),O8,AH9));this.Tu.T(A._GetAutoObject(A.Device.Helper).MG(A.
aaR(A.acf.Ajj),O8,AH_));this.Tv.T(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.
Ajj),O8,AH$));this.Tw.T(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.Ajj),O8
,AIa));this.AdP.T(A.aaR(A.acf.A$k));},_Mark:function(D){var B;C.Fs._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vt)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={Ca:
A.abi(16,0,null),Du:function(){return 16;},C6:function(aIndex){if(aIndex>=16)return-
1;return this.Ca.Get(aIndex);},DZ:function(A7){var O=0;while(O<16){if(this.Ca.Get(
O)===A7)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(O<16){
if(this.Ca.Get(O)>max)max=this.Ca.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.Ca=[]).__proto__=C.Cm.Ca;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={Ia:null,Ac9:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AtC],this.Ac9,0);A.pe([this,this.
AtC],this);},Du:function(){return this.Ia.M$();},C6:function(aIndex){if(aIndex>=
this.Du())return-1;return this.Ia.OF(aIndex);},Gl:function(aIndex){return this.ActionToString.
BS(this.C6(aIndex));},DZ:function(A7){var O=0;while(O<this.Du()){if(this.Ia.OF(O
)===A7)return O;O=O+1;}return-1;},H3:function(){var O=0;var max=-1;while(O<this.
Du()){if(this.Ia.OF(O)>max)max=this.Ia.OF(O);O=O+1;}return max;},AtC:function(G){
this.Q=this.Ac9.OF(this.Index);A.abo([this,this.B_,this.Cb],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ia=A._GetAutoObject(C.AuV);this.Ac9=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AL_={Atz:0,Init:function(aArg
){var B;A.zX([this,this.BeL],[B=A._GetAutoObject(A.Device.Device),B.A8r,B.Ba_],0
);A.zX([this,this.BeI],[B=A._GetAutoObject(A.Device.Device),B.ASx,B.A0k],0);A.pe([
this,this.BeL],this);A.pe([this,this.BeI],this);},Clear:function(){C.Vx.Clear.call(
this);this.Atz=0;},Ci:function(){A._GetAutoObject(A.Device.Device).ArD(this.Atz);
A._GetAutoObject(A.Device.Device).ArE(this.toString());},BeL:function(G){this.Atz=
A._GetAutoObject(A.Device.Device).Pn;A.we(this,0);},BeI:function(G){this.E3(A._GetAutoObject(
A.Device.Device).AuH);A.we(this,0);},NY:function(Eh){if((this.Atz&(((B=Eh)<0)?B+
0x100000000:B))===(((B=Eh)<0)?B+0x100000000:B))return true;return false;},AUK:function(
Eh){this.Atz=this.Atz|(((B=Eh)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vx._Init.
call(this,aArg);this.__proto__=C.AL_;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pn={_Init:function(){C.AL_._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AL$={Vv:null,Ay:null,Y:null,JP:null,CP:function(
){this.AiL(this);},Init:function(aArg){A.zV([this,this.AiL],this.Vv,0);A.pe([this
,this.AiL],this);},DE:function(G){C.Fs.DE.call(this,G);this.MS(this);},Ln:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.Ew];this.BP.Cf=[
this,this.A3n];this.BP.B$=[this,this.A3S];this.BP.C2(A.aaL(A.ach.Arc));this.BP.Cw(
A.aaL(A.ach.Aq6));this.BP.C1(A.aaL(A.ach.Yy));}return this.BP;},Ew:function(G){if(
this.By9()>0){this.AA9();this.AaE(this);}else A._GetAutoObject(A.Device.Device).
A3(28,true,A.jV,0,null);},AiL:function(G){this.Ao3();var O;for(O=0;O<this.Vv.M$(
);O=O+1){var Tf=A._GetAutoObject(C.Pn).OF(O);this.A1s(Tf);}this.J(this.JP,0);A.aaS([
this,this.MS],this);},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]
);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},MS:function(G){var
B;this.Y.Vy(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.
AV,true,null,null);},A1s:function(Ha){var Aza=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sg,0);Aa.T(Aza.BS(Ha));Aa.Aj(true);Aa.G6=Ha;Aa.A_f(this.
Vv.NY(Ha));this.J(Aa,0);this.ZD(Aa);},Ao3:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HO(
AdM);}},AA9:function(){var B;this.Vv.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JP)){var Aa=(C.Sg.isPrototypeOf(
X)?X:null);if(!!Aa){this.Vv.J(Aa.G6);if(Aa.ASI())this.Vv.AUK(Aa.G6);}else A.ab5(
"%s",Ayu);}X=X.Ah;}this.Vv.Ci();},By9:function(){var B;var A4n=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JP)){var
Aa=(C.Sg.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASI())A4n=A4n+1;}else A.ab5("%s"
,Ayu);}X=X.Ah;}return A4n;},A3n:function(G){var B;var Aa=(C.Sg.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAp=(C.Sg.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAp){this.
AhE(AAp,Aa);A.pe([this,this.MS],this);}}},A3S:function(G){var B;var Aa=(C.Sg.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAV=(C.Sg.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AAV
){this.AhE(Aa,AAV);A.pe([this,this.MS],this);}}},AqJ:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiL],this);},_Init:function(
aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Au$._Init.call(this.JP={I:this},0);this.__proto__=C.AL$;
this.H(Qc);this.Text.R(A.aaR(A.acf.AEi));this.Ay.H(It);this.Y.H(L3);this.Y.JT(1);
this.JP.H(AIb);this.JP.Aj(true);this.JP.T(A.aaR(A.acf.AqJ));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JP,0);this.Y.Em=[this,this.Fk];this.JP.AR=[this,this.AqJ
];this.Vv=A._GetAutoObject(C.Pn);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Ay._Done();this.Y._Done();this.JP._Done();C.Fs._Done.call(this);},_ReInit:
function(){C.Fs._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JP._ReInit(
);this.Text.R(A.aaR(A.acf.AEi));this.JP.T(A.aaR(A.acf.AqJ));this.CP();},_Mark:function(
D){var B;C.Fs._Mark.call(this,D);if((B=this.Vv)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sg={G6:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hn(10);},Bl:function(aSize){C.Ub.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mo.M[0]));},Ai:function(Ae){var B;C.Ub.Ai.call(this,Ae);var Hf=((Ae&0x10
)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.
Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.L(FS);this.V.L(A.
jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);
}this.LI=Hf;this.KG=Fw;this.Qv=GE;},I0:function(G){this.A3Q(this);},A3Q:function(
G){this.AE6(!this.AmD);},A_f:function(E){this.AE6(E);},ASI:function(){return this.
AmD;},_Init:function(aArg){C.Ub._Init.call(this,aArg);this.__proto__=C.Sg;this.Mo.
H(AX1);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vx={CB:0,
Ia:A.abi(17,0,null),OF:function(HA){return this.Ia.Get(HA);},M$:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ia.Set(O,0);this.CB=0;},J:function(
Eh){if(this.CB>=17)A.ab5("%s",AIc);else{this.Ia.Set(this.CB,Eh);this.CB=this.CB+
1;}},Ci:function(){},E3:function(AcX){var AJm=AcX.indexOf(String.fromCharCode(0x2C
),0);var A1Q=A.jV;var O=0;this.CB=0;while(O<17)if(AcX===A.jV){this.Ia.Set(O,0);O++;
}else{if(AJm===-1){A1Q=AcX;AcX=A.jV;}else{A1Q=A.abV(AcX,AJm);AcX=A.ab1(AcX,0,AJm+
1);}var Tf=A.abZ(A1Q,0,10)|0;if(this.ADX(Tf)){this.Ia.Set(this.CB,Tf);this.CB=this.
CB+1;O++;}AJm=AcX.indexOf(String.fromCharCode(0x2C),0);}if(AcX!==A.jV)A.ab5("%s"
,AX2);},toString:function(){var A24=(((B=this.Ia.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A24=(A24+AId)+(((B=this.Ia.Get(O))<0)?B+0x100000000:
B).toFixed();return A24;},Axy:function(HA,Eh){if(HA>=this.CB){A.ab5("%s",((((AX3+
HA.toFixed())+AX4)+this.CB.toFixed())+AX5)+AX6);return;}this.Ia.Set(HA,Eh);},Contains:
function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(this.Ia.Get(O)===Eh)return true;return false;
},ADX:function(Eh){return true;},DZ:function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(
this.Ia.Get(O)===Eh)return O;return-1;},_Init:function(aArg){(this.Ia=[]).__proto__=
C.Vx.Ia;this.__proto__=C.Vx;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AMR={Init:function(aArg){var B;A.zX([this,this.BeV],[B=A._GetAutoObject(A.Device.
Device),B.A8C,B.Bbg],0);A.pe([this,this.BeV],this);},Ci:function(){A._GetAutoObject(
A.Device.Device).Akv(this.toString());},ADX:function(Eh){switch(Eh){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},BeV:function(
G){this.E3(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.Vx._Init.call(this,aArg);this.__proto__=C.AMR;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AMR._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Wm={Vu:null,Kx:null,A7o:A.jV,Action:0,A42:false,A_7:false,A$P:false,Bl:function(
aSize){C.Fo.Bl.call(this,aSize);this.Q3.H(this.Ms.M);this.OE.H(this.Q3.M);},Ai:function(
Ae){C.Fo.Ai.call(this,Ae);if(!this.LI){this.Kx.TZ.L(A.jb.Am4);this.Kx.QL.Z(true);
this.Kx.QL.L(A.jb.ARb);}else if(this.Qv){this.Kx.TZ.L(A.jb.Bm);this.Kx.QL.Z(false
);}else if(this.KG){this.Kx.TZ.L(A.jb.Bm);this.Kx.QL.Z(false);}else{this.Kx.TZ.L(
A.jb.Text);this.Kx.QL.Z(true);this.Kx.QL.L(A.jb.CS);}},Bl7:function(E){if(this.Action===
E)return;this.Action=E;},Bnc:function(E){if(this.A7o===E)return;this.A7o=E;this.
Vu.Text.R(E);},ATO:function(E){if(this.A$P===E)return;this.A$P=E;this.Kx.BnZ(!this.
Kx.AU_);},AFF:function(E){if(this.A_7===E)return;this.A_7=E;this.Kx.Z(!this.Kx.Fq(
));},A9H:function(E){if(this.A42===E)return;this.A42=E;this.Vu.Z(E);},_Init:function(
aArg){C.Fo._Init.call(this,aArg);C.Vu._Init.call(this.Vu={I:this},0);C.Kx._Init.
call(this.Kx={I:this},0);this.__proto__=C.Wm;this.H(AX7);this.Background.H(AX8);
this.G_.Ar(false);this.G_.Z(false);this.Vu.H(AX9);this.Vu.Z(false);this.Kx.H(AX_
);this.Kx.Z(false);this.J(this.Vu,0);this.J(this.Kx,0);this.Ms.Ax(A.aaL(A.ach.ANn
));},_Done:function(){this.__proto__=C.Fo;this.Vu._Done();this.Kx._Done();C.Fo._Done.
call(this);},_ReInit:function(){C.Fo._ReInit.call(this);this.Vu._ReInit();this.Kx.
_ReInit();},_Mark:function(D){var B;C.Fo._Mark.call(this,D);if((B=this.Vu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.Vu={AL:null,Text:null,BU:null,Init:function(
aArg){this.Text.H(this.M);this.BU.H(this.M);this.AL.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BU._Init.call(this.BU={I:this},0);this.__proto__=
C.Vu;this.AL.H(AX$);this.AL.L(A.jb.BjN);this.H(AYa);this.Text.H(AYb);this.Text.L(
A.jb.Text);this.BU.H(AYc);this.BU.Nm(1);this.BU.L(A.jb.Text);this.J(this.AL,0);this.
J(this.Text,0);this.J(this.BU,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AL._Done();this.Text._Done();this.BU._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AL._ReInit();this.Text._ReInit();this.BU._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.Kx={QL:null
,TZ:null,AU_:false,BnZ:function(E){if(this.AU_===E)return;this.AU_=E;if(E){this.
TZ.Ax(A.aaL(A.ach.ACA));this.QL.Ax(A.aaL(A.ach.ACA));}else{this.TZ.Ax(A.aaL(A.ach.
AqD));this.QL.Ax(A.aaL(A.ach.AqD));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QL={I:this},0);A.acg.Ap._Init.call(this.TZ={I:this
},0);this.__proto__=C.Kx;this.H(Ayv);this.QL.H(Ayv);this.QL.Cv(1);this.TZ.H(Ayv);
this.TZ.Cv(0);this.J(this.QL,0);this.J(this.TZ,0);this.QL.Ax(A.aaL(A.ach.AqD));this.
TZ.Ax(A.aaL(A.ach.AqD));},_Done:function(){this.__proto__=A.Core.P;this.QL._Done(
);this.TZ._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QL._ReInit();this.TZ._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TZ).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASb={
Ge:null,Cc:null,Dp:null,Di:null,Ks:null,Zj:10,Aq3:0,AEt:0,ASp:0,Ay$:false,LV:false
,BcZ:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Lh(
))A._GetAutoObject(A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).
An.HJ().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(
A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAD],this.
Da.Q,0);A.zX([this,this.BA9],this.Dp.Q,0);A.zX([this,this.ABs],this.Di.Q,0);A.zX([
this,this.ABs],this.Di.HH.Q,0);A.zX([this,this.ABs],[this,this.ASP,this.AFD],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A9z,B.BbK],0);A.zX([this
,this.Bft],this.Cc.Q,0);A.pe([this,this.AAD],this);A.pe([this,this.GH],this);A.pe([
this,this.ABs],this);A.pe([this,this.Bft],this);},CC:function(G){if(!this.Ay$){this.
Ay$=true;A.pe([this,this.AcT],this);}else C.HY.CC.call(this,G);},Agh:function(G){
this.ASp=this.Zj;this.Bc7(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.E5();A._GetAutoObject(C.A8).FB();},Auo:function(){this.N.CU(A.jV);this.N.C2(
A.aaL(A.ach.ADG));this.N.B$=[this,this.AyV];},AAy:function(G){A._GetAutoObject(C.
A8).Cd(55);},AFD:function(E){if(this.Zj===E)return;this.Zj=E;A.abo([this,this.ASP
,this.AFD],0);},Bc7:function(G){var F;if(!this.Zj||(this.BcZ===true)){A._GetAutoObject(
A.Device.Device).A3(24,false,CQ,0,null);if(this.AEt===1)A._GetAutoObject(A.Device.
Device).A3(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A3(23,
true,this.AEt.toFixed(),2000,null);this.Ew(this);return;}this.Ge.Gr();this.Ge.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Ge.N1(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Ge.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Ge.JU(A._GetAutoObject(A.Device.Helper).W.Gender);this.Ge.Nj(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Ge.PW(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Ge.SJ(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alt=A._GetAutoObject(
A.Device.Helper).A1K(this.Ge,(F=this.Di.HZ.Hu,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alt)this.Ai1();else{A._GetAutoObject(A.Device.Helper).AKm(
this.Ge,Alt,(F=this.Di.HZ.Hu,F[1].call(F[0])),this.Zj-1,[this,this.ApH]);A._GetAutoObject(
A.Device.Device).A3(24,false,CQ,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am6())this.C_.Z(true);else this.C_.Z(false);if(this.LV){this.Dp.
Z(false);this.Cc.T(A.aaR(A.acf.ACH));this.Cc.AE8(A.aaL(A.ach.Afe));}else{this.Dp.
Z(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.AE8(null);}if((this.Y.Bjl(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JH(this.Y.TP(this.AV,0x1));this.Am();
},ATj:function(E){if(this.Aq3===E)return;this.Aq3=E;A.abo([this,this.A8P,this.ATj
],0);},ABs:function(G){var F;var AJ_=(F=this.Di.Q,F[1].call(F[0]));var AAg=-1;switch((
F=this.Di.HZ.Hu,F[1].call(F[0]))){case 0:AAg=AJ_+((F=A._GetAutoObject(A.Device.Helper
).BdD(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zj-1));break;case 1:AAg=(AJ_+this.
Zj)-1;break;case 3:case 2:case 5:case 4:switch(this.Di.HH.AC.Q){case 0:AAg=(AJ_+
this.Zj)-1;break;case 1:AAg=(AJ_-this.Zj)+1;break;default:throw new Error(AYd+this.
Di.HH.AC.Q.toFixed());}break;default:throw new Error(AYe+this.Di.HH.AC.Q.toFixed(
));}this.ATj(AAg);},BA9:function(G){A.pe([this,this.GH],this);A.pe([this,this.At9
],this);},AAD:function(G){A._GetAutoObject(A.Device.Helper).AVG(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LV);A.pe([this,this.ABs],this);},ApH:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.ApB();else switch((F=this.Di.HZ.Hu,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JH(this.Di);break;case 0:this.JH(this.Dp
);break;case 1:this.JH(this.Cc);break;default:throw new Error(Ayw+(F=this.Di.HZ.
Hu,F[1].call(F[0])).toFixed());}break;case 25:this.JH(this.Cc);break;case 47:if(
As.PopupState===7)this.ApB();else{this.JH(this.Di);this.JH(this.Cc);}break;case 43:{
this.JH(this.Di);this.JH(this.Dp);}break;case 42:{this.JH(this.Di);this.JH(this.
Cc);}break;case 41:break;default:A.ab5("%s%e",Ata,As.Id);}},Ai1:function(){this.
Ge.Ci(A._GetAutoObject(A.Device.Device).An);this.AEt=this.AEt+1;if(A._GetAutoObject(
A.Device.Helper).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh()){A._GetAutoObject(
A.Device.Device).A3(24,false,U1,0,null);A._GetAutoObject(A.Device.Device).A3(50,
true,A._GetAutoObject(A.Device.Device).Bt.HJ().toFixed(),0,null);}else{var L9=A.
_GetAutoObject(A.Device.Device).An.LT(0,this.Ge.Id);A._GetAutoObject(A.Device.Device
).SQ(L9);var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(this.Ge.
Id);B1.OnSetBodyWeight(this.KJ);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApB();},ApB:function(){var B;var F,Cs;if(!!(F=this.Cc.
Q,F[1].call(F[0]))){(F=this.Cc.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LV)(
Cs=this.Dp.Q,Cs[2].call(Cs[0],(F=this.Cc.Q,F[1].call(F[0]))));}if(!this.LV)(Cs=this.
Dp.Q,Cs[2].call(Cs[0],A._GetAutoObject(A.Device.Helper).A$5(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjO(),this.Dp.AjQ())));var IX=null;switch((F=this.Di.HZ.Hu,F[1].call(
F[0]))){case 3:IX=[B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyN];break;case 2:
IX=[B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyO];break;case 4:case 5:IX=[B=A.
_GetAutoObject(A.Device.Device),B.Ant,B.Aoz];break;default:;}if(!!IX){switch((F=
this.Di.Kn.VT,F[1].call(F[0]))){case 1:IX[2].call(IX[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IX[2].call(IX[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Di.Q,F[2].call(F[0],IX[1].call(IX[0])));
}var XJ=100-((this.Zj/this.ASp)*100);A._GetAutoObject(A.Device.Device).A3(24,true
,(((this.ASp.toFixed()+Atb)+(XJ|0).toFixed())+Atb)+(F=this.Di.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBh]);this.AFD(this.Zj-1);A.aaS([this,this.Bc7],null);},BBh:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.BcZ=true;},ApI:function(G){var F;C.HY.ApI.call(this,G);var AoW=
0;switch((F=this.BZ.Q,F[1].call(F[0]))){case 0:case 2:AoW=A._GetAutoObject(A.Device.
Device).AdT;break;case 1:AoW=730;break;default:A.ab5("%s%e",Alf,(F=this.BZ.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmJ(AoW));(F=this.C_.Q,F[2].call(
F[0],this.C_.AnY));switch(this.BZ.AC.Q){case 0:{this.Ks.Jb(A.aaR(A.acf.ANi));this.
Ks.IQ(A.aaR(A.acf.ANj));}break;case 1:{this.Ks.Jb(A.aaR(A.acf.Bh3));this.Ks.IQ(A.
aaR(A.acf.Bh4));}break;case 2:{this.Ks.Jb(A.aaR(A.acf.Bka));this.Ks.IQ(A.aaR(A.acf.
Bkb));}break;default:throw new Error(Alf);}},Ae4:function(E){if(this.LV===E)return;
this.LV=E;A.abo([this,this.Awk,this.Ae4],0);},At9:function(G){var F,Cs,Tb;this.Ae4(((
F=this.Cc.Q,F[1].call(F[0]))===(Cs=this.Dp.Q,Cs[1].call(Cs[0])))&&!!(Tb=this.Cc.
Q,Tb[1].call(Tb[0])));A.pe([this,this.GH],this);},Bft:function(G){A.pe([this,this.
At9],this);},ASP:function(){return this.Zj;},A8P:function(){return this.Aq3;},Awk:
function(){return this.LV;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.Av4.
_Init.call(this.Cc={I:this},0);C.Rb._Init.call(this.Dp={I:this},0);C.AGK._Init.call(
this.Di={I:this},0);C.AUW._Init.call(this.Ks={I:this},0);this.__proto__=C.ASb;var
B;this.Dr(C.ADj);this.Cc.H(Aoo);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.
Cc.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.
aaR(A.acf.Akn));this.Dp.H(AYf);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uh));this.
Dp.Ar2(false);this.Di.H(AYg);this.Di.Aj(true);this.Di.T(A.aaR(A.acf.A7b));this.Di.
Bx(0);this.Ks.H(AYh);this.Ks.Aj(true);this.Ks.T(A.aaR(A.acf.A8i));this.Ks.Ga(1);
this.Ks.EU(500);this.Ks.IQ(A.aaR(A.acf.ANj));this.Ks.Jb(A.aaR(A.acf.ANi));this.Ks.
A98(A.aaR(A.acf.Aq3)+A.aaR(A.acf.Colon));this.J(this.Cc,0);this.J(this.Dp,0);this.
J(this.Di,0);this.J(this.Ks,0);this.Ge=A._NewObject(A.Device.Animal,0);this.Cc.AR=[
this,this.AcT];this.Cc.LZ([this,this.AcT]);this.Cc.L2(A.aaL(A.ach.Afe));this.Cc.
Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArA,B.PW]);this.Cc.OO([B=A._GetAutoObject(
A.Device.Device),B.Uj,B.U3]);this.Cc.PU([B=A._GetAutoObject(A.Device.Device),B.Uk
,B.U4]);this.Cc.Ul([B=A._GetAutoObject(A.Device.Device),B.Anq,B.Aoy]);this.Cc.Ae4([
this,this.Awk,this.Ae4]);this.Dp.Gs([this,this.D_,this.GS]);this.Dp.LZ([this,this.
AcT]);this.Dp.L2(A.aaL(A.ach.Afe));this.Dp.Un([B=this.Gender.Animal,B.Wy,B.JU]);
this.Dp.OO([B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3]);this.Dp.PU([B=A._GetAutoObject(
A.Device.Device),B.Uk,B.U4]);this.Dp.Ul([B=A._GetAutoObject(A.Device.Device),B.Anq
,B.Aoy]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Anu,B.Nj]);this.Dp.
Anw([B=this.AnimalType.Animal,B.PT,B.EC]);this.Di.Gs([this,this.D_,this.GS]);this.
Di.LZ([B=this.Di,B.FV]);this.Di.L2(A.aaL(A.ach.Edit));this.Di.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArB,B.SJ]);this.Di.A9I(A._GetAutoObject(A.Device.Helper).W);
this.Ks.Au([this,this.ASP,this.AFD]);this.Ks.BmA([this,this.A8P,this.ATj]);this.
Init(aArg);},_Done:function(){this.__proto__=C.HY;this.Cc._Done();this.Dp._Done(
);this.Di._Done();this.Ks._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY.
_ReInit.call(this);this.Cc._ReInit();this.Dp._ReInit();this.Di._ReInit();this.Ks.
_ReInit();this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.aaR(A.acf.Akn));this.Dp.T(A.aaR(A.acf.
Uh));this.Di.T(A.aaR(A.acf.A7b));this.Ks.T(A.aaR(A.acf.A8i));this.Ks.IQ(A.aaR(A.
acf.ANj));this.Ks.Jb(A.aaR(A.acf.ANi));this.Ks.A98(A.aaR(A.acf.Aq3)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.Ge)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Di)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ks)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUo={BW:null,RatingMode:null,Ln:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.B$=null;this.BP.Cf=null;this.BP.CE=[this,this.AaE];this.BP.CU(A.jV
);this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.Yy));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUo;var B;this.
H(Qc);this.BW.H(As_);this.BW.T(A.aaR(A.acf.A$X));this.J(this.BW,0);this.BW.Au([B=
this.RatingMode,B.B_,B.Cb]);this.BW.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit(
);this.RatingMode._ReInit();this.BW.T(A.aaR(A.acf.A$X));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bf5],[B=A._GetAutoObject(A.Device.Device),B.AST,B.A0v],0);A.pe([this,this.Bf5],this
);},Du:function(){return 2;},Gl:function(aIndex){return this.RatingModeToString.
BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Aw6(E);},Bf5:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Ca.Set(0,0);this.Ca.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANC={WR:
function(G){C.Amv.WR.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.AqY()){
A._GetAutoObject(A.Device.Helper).W.AkC(false);A._GetAutoObject(A.Device.Helper).
W.Ci(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amv._Init.call(
this,aArg);this.__proto__=C.ANC;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hi={DK:A.jV,T:function(E){if(this.DK===E)return;this.DK=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hi;},_className:"Application::BaseItem"
};C.AVV={BW:null,WeightRecordingMode:null,Ln:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.B$=null;this.BP.Cf=null;this.BP.CE=[this,this.AaE];this.BP.CU(A.jV
);this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.Yy));}return this.BP;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AVV;var B;this.H(Qc);this.BW.H(As_);this.BW.T(A.aaR(A.acf.AsU));this.BW.EU(1);
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
,this.Bg$],[B=A._GetAutoObject(A.Device.Device),B.A9y,B.BbJ],0);A.pe([this,this.
Bg$],this);},Bg$:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Ca.Set(0,0);this.Ca.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aa2={BooleanToAutoOnOff:null,Gl:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BS(aIndex);},_Init:function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aa2;},_Done:function(
){this.__proto__=C.Gd;this.BooleanToAutoOnOff._Done();C.Gd._Done.call(this);},_ReInit:
function(){C.Gd._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Gd._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AxW={A7p:function(){var B;this.
Axz(1);this.Ju(0,3);this.VG(0,0,(B=this.M)[3]-B[1]);this.A45(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A45(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VO(0);},_Init:
function(aArg){C.ABF._Init.call(this,aArg);this.__proto__=C.AxW;},_className:"Application::Triangle"
};C.AT1={Y:null,Init:function(aArg){this.Byu(this);},Byt:function(Qe){var Aa=A._NewObject(
C.ANJ,0);Aa.H(BD);Aa.T(Qe);Aa.Aj(true);Aa.Ar(false);Aa.Bi(true);this.J(Aa,0);this.
AtB(this);},AtB:function(G){var B;var AlB=1;var A2V=0;var X=this.Y.Ah;var Cy=null;
var K6=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OX.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALi=(B=Cy.V.B6.A65(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.Mq.isPrototypeOf(X)?X:null))ALi=ALi+20;if(A2V<ALi)A2V=ALi;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(AlB*28)));AlB=AlB+1;}else{K6=(A.acg.C7.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K6){var Dh=((B=this.M)[3]-B[1])-((AlB-1)*28);K6.DM([this.
M[0],K6.Et[1]]);K6.DM([K6.Et[0],Dh]);K6.DC([this.M[0]+120,K6.ED[1]]);K6.DC([K6.ED[
0],Dh]);}}X=X.Ah;}this.BB1(A2V,28);},BB1:function(aWidth,BxD){var B;var X=this.Y.
Ah;var Cy=null;var K6=null;aWidth=aWidth+20;if(aWidth>(C.Asx[0]-10))aWidth=C.Asx[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.OX.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A6(0x14);Cy.V.Text.Hn(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,BxD));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K6=(
A.acg.C7.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K6){K6.DM([this.M[
2]-aWidth,K6.Et[1]]);K6.DC([this.M[2],K6.ED[1]]);}}X=X.Ah;}},Byu:function(G){var
Aa=A._GetAutoObject(C.BR).AqN;while(!!Aa){if(!!(C.Axn.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axn.isPrototypeOf(Aa)?Aa:null);this.Bys(EF.DK,EF.AR,EF.Bw,EF.ARj);}else
if(!!(C.Axp.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axp.isPrototypeOf(Aa)?Aa:null);
this.Byz(EF.DK,EF.AR,EF.Bw,EF.Wx,EF.WT);}else if(!!(C.Zz.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.Zz.isPrototypeOf(Aa)?Aa:null);this.Byr(EF.DK,EF.AR,EF.Bw);}else if(
!!(C.AkI.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkI.isPrototypeOf(Aa)?Aa:null);this.
Byt(EF.DK);}else if(!!(C.AGb.isPrototypeOf(Aa)?Aa:null))this.ByA();Aa=Aa.Mw;}A._GetAutoObject(
C.BR).Clear();A.pe([this,this.AtB],this);},Byr:function(Qe,Ac4,Ah7){var Aa=A._NewObject(
C.Mq,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(Ah7);Aa.Bi(true);this.J(Aa
,0);this.AtB(this);},ByA:function(){var K6=A._NewObject(A.acg.C7,0);K6.L(A.jb.Bm
);K6.Aj(true);K6.Nm(3);this.J(K6,0);this.AtB(this);},Bys:function(Qe,Ac4,Ah7,A05
){var Aa=A._NewObject(C.AmH,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(Ah7
);Aa.Bi(true);Aa.Au(A05);this.J(Aa,0);this.AtB(this);},Byz:function(Qe,Ac4,Ah7,A3a
,Agr){var Aa=A._NewObject(C.ANI,0);Aa.H(BD);Aa.T(Qe);Aa.AR=Ac4;Aa.Aj(true);Aa.Ar(
Ah7);Aa.Bi(true);Aa.BnA(A3a);Aa.AFR(Agr);this.J(Aa,0);this.AtB(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AT1;this.H(Qc);this.Y.H(Qc);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afj={_Init:
function(){A.acl.Afj._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A_3={AqN:null,Ahn:null,Mj:function(Qe){var EF=A._NewObject(
C.AkI,0);EF.DK=Qe;this.J(EF);},Clear:function(){this.AqN=null;this.Ahn=null;},Fz:
function(){var K6=A._NewObject(C.AGb,0);this.J(K6);},J:function(Bcl){if(!this.AqN
){this.AqN=Bcl;this.Ahn=this.AqN;}else{this.Ahn.Mw=Bcl;this.Ahn=this.Ahn.Mw;}},Ty:
function(Qe,Ac4){var EF=A._NewObject(C.Zz,0);EF.DK=Qe;EF.AR=Ac4;this.J(EF);},Bhi:
function(Qe,Ac4,A05){var EF=A._NewObject(C.Axn,0);EF.DK=Qe;EF.AR=Ac4;EF.ARj=A05;
this.J(EF);},AaS:function(Qe){var EF=A._NewObject(C.Zz,0);EF.DK=Qe;EF.Bw=false;this.
J(EF);},ABJ:function(Qe,Ac4,A3a,Agr){var EF=A._NewObject(C.Axp,0);EF.DK=Qe;EF.AR=
Ac4;EF.Wx=A3a;EF.WT=Agr;this.J(EF);},_Init:function(aArg){this.__proto__=C.A_3;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BR={_Init:function(){C.A_3._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axo={Mw:null,_Init:function(aArg){this.__proto__=
C.Axo;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.Mw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOF={Amt:null,ArF:function(E){if(this.Amt===
E)return;if(!!this.Ab)this.Ab.ZD(this);if(!!this.Amt)this.AqF(this.Amt,A._GetAutoObject(
C.AsB),null,null,null,null,false);this.Amt=E;if(!!this.Amt)this.AkM(this.Amt,A._GetAutoObject(
C.AsB),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOF;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amt)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WG={_Init:function(){C.AOF._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N3={Init:function(aArg){var C0=A._NewObject(C.AT2,0);C0.H(this.M);this.AkM(C0,A.
_GetAutoObject(C.AnW),null,A._GetAutoObject(C.AnW),A._GetAutoObject(C.AnW),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N3;this.H(Qc);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsB={_Init:function(){C.AUY._Init.call(this,0);this.ACF=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AT2={AL:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.AT2;this.H(AIe);this.C3(0);this.AL.AZ(0x3F);this.AL.H(AIe);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.P;this.AL.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AUX={Sc:function(){var B;var Ao=(A.acl.Afb.isPrototypeOf(B=A.acl.Aen.Sc.call(this
))?B:null);if(!Ao)throw new Error(As7);Ao.Cp.Cx=255;Ao.Cp.B2=0;return Ao;},Sb:function(
){var B;var Ao=(A.acl.Axm.isPrototypeOf(B=A.acl.Aen.Sb.call(this))?B:null);if(!Ao
)throw new Error(As7);Ao.E0.Cx=0;Ao.E0.B2=255;Ao.Dt=true;return Ao;},_Init:function(
aArg){A.acl.Aen._Init.call(this,aArg);this.__proto__=C.AUX;},_className:"Application::ShadeOverlayTransition"
};C.AnW={_Init:function(){C.AUX._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkV={AnY:0,A2e:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Ir.Ai.call(this,Ae);this.BT.L(this.V.AQ);if(!!this.Q){
var BC_=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BT.R((A.
_GetAutoObject(A.Device.Converter).Ak$(BC_)+CQ)+A._GetAutoObject(A.acj.DU).Af4()
);else this.BT.R(A.aaR(A.acf.Akn));}},Kd:function(G){var B;var Bg8=(this.A2e===false
)&&(this.AM<=this.Gq);if(Bg8)this.Bx(this.AnY);this.A4K(this.AM,4);if(Bg8){this.
Bx(this.AM-this.Aj5);this.A2e=true;}C.Ir.Kd.call(this,G);},J_:function(G){this.A4K(
this.AM,5);C.Ir.J_.call(this,G);},Bx:function(E){this.A4K(E,4);E=(((E+((this.Aj5
/2)|0))/this.Aj5)|0)*this.Aj5;if(!E)this.A2e=false;C.Ir.Bx.call(this,E);},Ahv:function(
E){if(this.AnY===E)return;this.AnY=E;},A4K:function(Bxl,GA){this.ATm(A._GetAutoObject(
A.acj.DU).BdH(Bxl,GA));},_Init:function(aArg){C.Ir._Init.call(this,aArg);this.__proto__=
C.AkV;this.H(KZ);this.AnY=this.Gq;this.JZ(this.H4,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEy={None:0,Left:1,BE7:2,Right:3};C.Amx={Xq:
null,FE:null,Ek:null,Background:null,Ani:null,Gc:null,KN:A.jV,AEb:null,Init:function(
aArg){var B;A.zV([this,this.Aga],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A3T],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.
LO],this);A.pe([this,this.A3T],this);this.Bb(this.Ek);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DJ(this);},Ln:function(){if(!this.BP)this.BP=A._NewObject(
C.N,0);return this.BP;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xq);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AKT();},Agg:function(G){var Aa=(C.ACb.isPrototypeOf(G)?G:null);var Hs;if(!!Aa)Hs=
Aa.Hs;else Hs=this.Gc.FN();if(Hs>=A._GetAutoObject(A.Device.Device).An.B9())return;
A._GetAutoObject(A.Device.Helper).G8(Hs);A.pe([this,this.AaE],this);},AKT:function(
){},Aga:function(G){this.Am();},A3K:function(G){if(this.Gc.FN()<(A._GetAutoObject(
A.Device.Device).An.B9()-1))this.Gc.GT(this.Gc.FN()+1);},A3L:function(G){if(this.
Gc.FN()>0)this.Gc.GT(this.Gc.FN()-1);},DJ:function(G){var Gh=A._GetAutoObject(A.
Device.Device).An.B9();var MV=this.BP;if(!MV)return;MV.C1(A.aaL(A.ach.AeA));MV.CE=[
this,this.AaE];if(Gh<=0){MV.Cw(null);MV.C2(null);MV.Cf=null;MV.B$=null;MV.WJ=false;
MV.ZC=false;}else if(Gh===1){MV.Cw(null);MV.C2(A.aaL(A.ach.AeB));MV.Cf=null;MV.B$=[
this,this.Agg];MV.WJ=false;MV.ZC=false;}else{MV.Cw(A.aaL(A.ach.Aq6));MV.C2(A.aaL(
A.ach.Arc));MV.Cf=[this,this.A3K];MV.B$=[this,this.A3L];MV.WJ=true;MV.ZC=true;}}
,LO:function(G){this.Bgt(this);this.Xq=A._GetAutoObject(A.Device.Device).An.Filter;
this.AKT();},Bns:function(E){if(this.AEb===E)return;this.AEb=E;A.pe([this,this.BA6
],this);},BA6:function(G){this.Bgt(this);},Bgt:function(G){var B;if(!!this.FE)this.
HO(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(this.AEb,0))?B:null);if(!
!this.FE){this.FE.H(AYi);this.J(this.FE,0);}},A3T:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DL(1,4
))this.Gc.Dk(A.aaR(A.acf.ASj));else this.Gc.Dk(this.KN);},Dk:function(E){if(this.
KN===E)return;this.KN=E;A.pe([this,this.A3T],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Ani={I:this},0);C.Gc._Init.call(
this.Gc={I:this},0);this.__proto__=C.Amx;this.H(Qc);this.Ek.H(BD);this.Ek.A9$(A.
jb.CS);this.Ek.A_a(A.jb.Text);this.Background.H(Ff);this.Background.L(A.jb.Bo8);
this.Ani.H(AIf);this.Ani.L(A.jb.CS);this.Gc.H(AIf);this.Gc.N2(C.ACb);this.AEb=C.
APK;this.KN=A.aaR(A.acf.Av8);this.J(this.Ek,0);this.J(this.Background,0);this.J(
this.Ani,0);this.J(this.Gc,0);this.Ek.AR=[this,this.Agg];this.Ek.Ab2(A._NewObject(
C.Yt,0));this.Gc.Zq(A._GetAutoObject(A.Device.Device).An);this.Gc.Zu([this,this.
Agg]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ek._Done(
);this.Background._Done();this.Ani._Done();this.Gc._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ek._ReInit();this.
Background._ReInit();this.Ani._ReInit();this.Gc._ReInit();this.Dk(A.aaR(A.acf.Av8
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACb={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.Df(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EC(this.AX.AmW(
Ad,14));this.DS.AE_(this.AX.I6(Ad,13));this.DS.Ae3(this.AX.H2(Ad,8));this.DS.Uq(
this.AX.H2(Ad,11));this.DS.Ae7(this.AX.H2(Ad,12));this.DS.Ae9(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.ACb;this.
H(O6);this.AP.L(A.jb.Bc);this.DS.H(AYj);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.Yt={Q:null,Init:function(aArg){var
B;this.AA3(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft]);},AEP:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Np(FilterCriterion
);var Ai5=this.Akq();if(Ai5>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai5,false);Filter.CW(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeZ(false);},BwL:function(s){this.AEP(
s);},AA3:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DL(1,4))?B:null);if(!!FilterCriterion
)Filter.Np(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BG0:function(s){
this.AA3(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcW],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcW],E,0);if(!!E)A.pe([this,this.
AcW],this);},C4:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwO(-1);return;}var Ay7=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DL(1,4))?B:null);if(!Ay7){this.AW.AwO(0);this.AW.AeZ(true);}else
this.AW.AwO(Ay7.A5);},AcW:function(s){this.C4(s);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.Yt;this.AW.AwO(0);this.AW.Dj=[this,this.BwL];this.
Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqI={BirthType:null,EaseOfDelivery:null,Cc:null,Ef:null,AbG:null,G7:null,Cn:
null,AbE:null,AM2:false,Init:function(aArg){this.AM2=A._GetAutoObject(A.Device.Helper
).W.Arf();if(this.AM2)this.AeY(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeY(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cc.
LZ([this,this.AcT]);this.Cc.L2(A.aaL(A.ach.Afe));this.Cc.AR=[this,this.AcT];}this.
Ef.Ar2(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Cc.Q,0);A.pe([this,this.GH],this);},Agh:function(G
){if(((this.Ef.Asl===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARn(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rj(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ci(
A._GetAutoObject(A.Device.Device).An);if(this.KJ>0){if(this.AM2){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LT(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B1=A._NewObject(A.Device.Rating,0);B1.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B1.OnSetBodyWeight(this.KJ);B1.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYk,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.KJ);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ci(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A8).FB();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A8).FB();},Auo:function(
){this.N.CU(A.jV);this.N.C2(A.aaL(A.ach.Am3));this.N.B$=[this,this.AyV];},AAy:function(
G){A._GetAutoObject(C.A8).Cd(32);},GH:function(G){var F;var Ke=(F=this.Ef.Q,F[1].
call(F[0]));var ABp=(F=this.Cc.Q,F[1].call(F[0]));var A4F=true;if(!!Ke&&(ABp===Ke
))A4F=false;A._GetAutoObject(A.Device.Helper).J0(this.Cc,A4F);this.Ef.Bms(!A4F);
},_Init:function(aArg){C.HY._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Av4._Init.
call(this.Cc={I:this},0);C.Rb._Init.call(this.Ef={I:this},0);C.Acn._Init.call(this.
AbG={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.SR._Init.call(this.Cn={I:this
},0);C.BW._Init.call(this.AbE={I:this},0);this.__proto__=C.AqI;var B;this.Cc.H(Ah2
);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArM(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.aaR(A.acf.Akn));this.Ef.H(Ah2);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Uh));this.AbG.H(AYl);this.AbG.Aj(true);this.
AbG.T(A.aaR(A.acf.GN));this.G7.H(Ah2);this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Arq
));this.Cn.H(Ah2);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFJ(true);
this.AbE.H(Ah2);this.AbE.Aj(true);this.AbE.T(A.aaR(A.acf.AgK));this.J(this.Cc,-1
);this.J(this.Ef,-1);this.J(this.AbG,-1);this.J(this.G7,-1);this.J(this.Cn,-1);this.
J(this.AbE,-1);this.BirthType.L0(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
L0(A._GetAutoObject(A.Device.Helper).W);this.Cc.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArA,B.PW]);this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Nj]);this.AbG.Gs([this,this.D_,this.GS]);this.AbG.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SJ]);this.G7.Au([B=this.BirthType,
B.B_,B.Cb]);this.G7.CK(this.BirthType);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.
LZ([B=this.Cn,B.FV]);this.Cn.L2(A.aaL(A.ach.Edit));this.Cn.Ab6([B=A._GetAutoObject(
A.Device.Helper).W,B.Awe,B.Q6]);this.AbE.Au([B=this.EaseOfDelivery,B.B_,B.Cb]);this.
AbE.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HY;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cc._Done();this.Ef._Done(
);this.AbG._Done();this.G7._Done();this.Cn._Done();this.AbE._Done();C.HY._Done.call(
this);},_ReInit:function(){C.HY._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cc._ReInit();this.Ef._ReInit();this.AbG._ReInit();
this.G7._ReInit();this.Cn._ReInit();this.AbE._ReInit();this.Cc.T(A.aaR(A.acf.Ak6
));this.Cc.ArM(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.
Cc.ArN(A.aaR(A.acf.Akn));this.Ef.T(A.aaR(A.acf.Uh));this.AbG.T(A.aaR(A.acf.GN));
this.G7.T(A.aaR(A.acf.Arq));this.Cn.T(A.aaR(A.acf.Aeg));this.AbE.T(A.aaR(A.acf.AgK
));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acn={FM:null,AW:null,A_:0,I0:function(G){C.Ds.I0.call(this,G);if(!this.A_)this.
FV(this);else this.He(this);},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hx.Z(false
);this.H4.Z(false);if(this.A_===1){this.Bb(this.AW);if(this.Hl){this.AW.FO(A.jb.
CJ);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CS);this.
Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.AW.FO(A.jb.CJ);
else this.AW.FO(A.jb.CS);this.Bb(null);}},Bx:function(E){var F;var BO=this.AM;C.
Ds.Bx.call(this,E);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Ui,this.Bbk],0);},DJ:function(G){var F;if(!
this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CU(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}break;default:this.FM.AkR((F=
this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0
);},Ex:function(EN){var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.
A_=EN;if(this.A_<0)this.A_=0;else if(this.A_>1)this.A_=1;if(this.A_===1)this.AW.
SP(7);this.DJ(this);this.Am();},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.ARh._Init.call(this.AW={I:this},0);this.__proto__=C.Acn;this.H(UY);this.EU(999999
);this.V.R(Atc);this.V.L(A.jb.Bm);this.Hx.Z(false);this.H4.Z(false);this.AW.H(AYm
);this.AW.ATu(6);this.J(this.AW,0);this.AW.Au([this,this.Ui,this.Bbk]);this.FM=A.
_NewObject(C.Aeu,0);},_Done:function(){this.__proto__=C.Ds;this.AW._Done();C.Ds.
_Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Du:function(){return 4;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BS(aIndex);},DZ:function(A7){return A7;},H3:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuN={Y:null,QR:null,NZ:null,Ee:null,PJ:null,PF:null,PG:null,Ay:null,Gd:null,
ReasonOfLeaving:null,AhC:null,M7:0,AmL:false,ACf:true,AOy:false,Asg:false,Init:function(
aArg){A.zX([this,this.A9F],[this,this.A87,this.ATx],0);this.Ahs(A._GetAutoObject(
A.Device.Helper).W.AhW(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A9F],this);},DE:function(G){
var B;var Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;
case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al3:function(G
){A._GetAutoObject(C.A8).FB();},ApM:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M7);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmL){A._GetAutoObject(A.Device.Helper).W.Ae5(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A67(A._GetAutoObject(A.Device.Helper).Dv(),this.Asg);}A._GetAutoObject(A.Device.
Helper).W.AFI(this.ReasonOfLeaving.C6((F=this.NZ.Q,F[1].call(F[0]))));if(this.ACf
)A._GetAutoObject(A.Device.Helper).W.PW(0);if(this.Asg)A._GetAutoObject(A.Device.
Helper).W.AwQ(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);this.A$B();},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[
1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},Ahs:function(E){
if(this.M7===E)return;this.M7=E;},Anr:function(){return this.M7;},Bfv:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.A8).FB();A._GetAutoObject(A.Device.Helper
).Asr();}},A9F:function(G){switch(this.Asg){case false:this.Ee.T(A.aaR(A.acf.AVX
));break;case true:this.Ee.T(A.aaR(A.acf.Bq_));break;default:;}},ATx:function(E){
if(this.Asg===E)return;this.Asg=E;},A87:function(){return this.Asg;},A$B:function(
){A._GetAutoObject(A.Device.Device).A3(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Bfv]);},BmS:function(E){if(this.AOy===E)return;
this.AOy=E;},Blb:function(){return this.AOy;},Bmg:function(E){if(this.ACf===E)return;
this.ACf=E;},Bk1:function(){return this.ACf;},Bmq:function(E){if(this.AmL===E)return;
this.AmL=E;},Bk9:function(){return this.AmL;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afn._Init.call(this.QR={I:this
},0);C.AsA._Init.call(this.NZ={I:this},0);C.AkV._Init.call(this.Ee={I:this},0);C.
Afn._Init.call(this.PJ={I:this},0);C.Afn._Init.call(this.PF={I:this},0);C.Afn._Init.
call(this.PG={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Gd._Init.call(this.
Gd={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
AhC._Init.call(this.AhC={I:this},0);this.__proto__=C.AuN;var B;this.N.Z(true);this.
N.CU(A.aaR(A.acf.Unregister));this.Dr(C.IK);this.Y.H(Ff);this.Y.JT(1);this.QR.H(
Aae);this.QR.Aj(true);this.QR.T(A.aaR(A.acf.AmL));this.QR.Bi(true);this.QR.Zx(false
);this.QR.Ga(-1);this.QR.EU(1);this.NZ.H(U0);this.NZ.Aj(true);this.NZ.T(A.aaR(A.
acf.ReasonOfLeaving));this.NZ.Bi(true);this.NZ.Zx(false);this.Ee.H(Ah1);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AVX));this.Ee.Bi(false);this.Ee.Ga(1000);this.Ee.
EU(999000);this.PJ.H(U0);this.PJ.Aj(true);this.PJ.T(A.aaR(A.acf.A5g));this.PJ.Bi(
true);this.PJ.Zx(false);this.PJ.Bx(1);this.PJ.Ga(-1);this.PJ.EU(1);this.PF.H(Aae
);this.PF.Aj(true);this.PF.T(A.aaR(A.acf.A5h));this.PF.Bi(true);this.PF.Zx(false
);this.PF.Bx(1);this.PF.Ga(-1);this.PF.EU(1);this.PG.H(U0);this.PG.Aj(true);this.
PG.T(A.aaR(A.acf.A5T));this.PG.Bi(true);this.PG.Zx(false);this.PG.Bx(1);this.PG.
Ga(-1);this.PG.EU(1);this.Ay.H(Ayo);this.Gd.Au(0);this.J(this.Y,0);this.J(this.QR
,0);this.J(this.NZ,0);this.J(this.Ee,0);this.J(this.PJ,0);this.J(this.PF,0);this.
J(this.PG,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk
];this.QR.Au([B=this.Gd,B.B_,B.Cb]);this.QR.CK(this.Gd);this.QR.AkD([this,this.Bk9
,this.Bmq]);this.NZ.Gs([this,this.D_,this.GS]);this.NZ.LZ([B=this.NZ,B.FV]);this.
NZ.L2(A.aaL(A.ach.Edit));this.NZ.Au([B=this.ReasonOfLeaving,B.B_,B.Cb]);this.NZ.
CK(this.ReasonOfLeaving);this.NZ.Any(this.AhC);this.Ee.Au([this,this.Anr,this.Ahs
]);this.PJ.Au([B=this.Gd,B.B_,B.Cb]);this.PJ.CK(this.Gd);this.PJ.AkD([this,this.
Blb,this.BmS]);this.PF.Au([B=this.Gd,B.B_,B.Cb]);this.PF.CK(this.Gd);this.PF.AkD([
this,this.A87,this.ATx]);this.PG.Au([B=this.Gd,B.B_,B.Cb]);this.PG.CK(this.Gd);this.
PG.AkD([this,this.Bk1,this.Bmg]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QR._Done();this.NZ._Done();this.Ee._Done();this.PJ._Done(
);this.PF._Done();this.PG._Done();this.Ay._Done();this.Gd._Done();this.ReasonOfLeaving.
_Done();this.AhC._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QR._ReInit();this.NZ._ReInit();this.Ee._ReInit(
);this.PJ._ReInit();this.PF._ReInit();this.PG._ReInit();this.Ay._ReInit();this.Gd.
_ReInit();this.ReasonOfLeaving._ReInit();this.AhC._ReInit();this.N.CU(A.aaR(A.acf.
Unregister));this.QR.T(A.aaR(A.acf.AmL));this.NZ.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AVX));this.PJ.T(A.aaR(A.acf.A5g));this.PF.T(A.aaR(A.acf.A5h
));this.PG.T(A.aaR(A.acf.A5T));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhC)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AUW={AjM:null,Py:null,Avb:AYn,Bl:function(aSize){C.Ir.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BT.H([0,40,aSize[0],80]);this.Hx.H([0,this.BT.M[1],40,
this.BT.M[3]]);this.H4.H([aSize[0]-40,this.BT.M[1],aSize[0],this.BT.M[3]]);},Ai:
function(Ae){var F;C.Ir.Ai.call(this,Ae);this.Py.L(this.V.AQ);if(!!this.AjM){if((
F=this.AjM,F[1].call(F[0]))===-1)this.Py.R(this.Avb+AIg);else this.Py.R((this.Avb+
CQ)+(F=this.AjM,F[1].call(F[0])).toFixed());}else this.Py.R(this.Avb);},A3s:function(
G){this.Am();},BmA:function(E){if(A.aaZ(this.AjM,E))return;if(!!this.AjM)A.z$([this
,this.A3s],this.AjM,0);this.AjM=E;if(!!E)A.zX([this,this.A3s],E,0);if(!!E)A.pe([
this,this.A3s],this);},A98:function(E){if(this.Avb===E)return;this.Avb=E;this.Am(
);},_Init:function(aArg){C.Ir._Init.call(this,aArg);C.CH._Init.call(this.Py={I:this
},0);this.__proto__=C.AUW;this.H(AYo);this.V.H(AYp);this.V.A6(0x12);this.Py.H(AYq
);this.Py.A6(0x12);this.Py.L(A.jb.Bm);this.J(this.Py,0);this.Py.S(A.aaL(A.fl.Af)
);this.Py.A2(A.aaL(A.fl.Ak));this.Py.Cu(null);},_Done:function(){this.__proto__=
C.Ir;this.Py._Done();C.Ir._Done.call(this);},_ReInit:function(){C.Ir._ReInit.call(
this);this.Py._ReInit();this.Py.S(A.aaL(A.fl.Af));this.Py.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Ir._Mark.call(this,D);if((B=this.AjM)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Py)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMi={Y:null,JO:null,St:null,Ay:null,Aqw:2500,ANz:24,DE:function(G){var B;var
Fi=0;var X=this.AV;switch(this.Cq.CO){case 6:Fi=2;break;case 7:Fi=7;break;case 4:
Fi=4;break;case 5:Fi=5;break;default:;}X=this.QJ(X,Fi,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HI(X,true,null,null);},Al3:function(G){A._GetAutoObject(
C.A8).FB();},ApM:function(G){},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1)
)[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},Bmk:function(
E){if(this.Aqw===E)return;this.Aqw=E;},Bk3:function(){return this.Aqw;},Bml:function(
E){if(this.ANz===E)return;this.ANz=E;},Bk4:function(){return this.ANz;},BkR:function(
G){var F,Cs;this.JO.BT.L(this.JO.V.AQ);if(!!this.JO.Q)this.JO.BT.R((((String.fromCharCode(((
F=this.JO.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Alc)+String.fromCharCode(((
Cs=this.JO.Q,Cs[1].call(Cs[0]))+10000).toFixed().charCodeAt(2)||0))+CQ)+this.JO.
AHa);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ir._Init.call(this.JO={I:this},0);C.Ir._Init.call(this.St={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMi;this.N.Z(true);this.
Dr(C.IK);this.Y.H(Ff);this.Y.JT(1);this.JO.H(Ah1);this.JO.Aj(true);this.JO.T(A.aaR(
A.acf.Aqw));this.JO.Bi(false);this.JO.Ga(0);this.JO.EU(5000);this.JO.IQ(A.aaR(A.
acf.Af8));this.JO.Jb(A.aaR(A.acf.Af8));this.JO.ATm(100);this.St.H(U0);this.St.Aj(
true);this.St.T(A.aaR(A.acf.A$b));this.St.Bi(true);this.St.Bx(24);this.St.Ga(10);
this.St.EU(33);this.St.IQ(AYr);this.Ay.H(Ayo);this.J(this.Y,0);this.J(this.JO,0);
this.J(this.St,0);this.J(this.Ay,0);this.N.C1(A.aaL(A.ach.Yy));this.Y.Em=[this,this.
Fk];this.JO.Au([this,this.Bk3,this.Bmk]);this.JO.A_G([this,this.BkR]);this.St.Au([
this,this.Bk4,this.Bml]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JO._Done();this.St._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JO._ReInit();this.St._ReInit();this.
Ay._ReInit();this.JO.T(A.aaR(A.acf.Aqw));this.JO.IQ(A.aaR(A.acf.Af8));this.JO.Jb(
A.aaR(A.acf.Af8));this.St.T(A.aaR(A.acf.A$b));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.Ars={EaseOfDelivery:null,BirthType:null,Cc:null,Dp:null,Di:null,Cn:null,Ee:null
,G7:null,Li:null,M7:0,LV:false,Init:function(aArg){A.zX([this,this.GH],this.Cc.Q
,0);A.zX([this,this.GH],this.Dp.Q,0);A.zX([this,this.AAD],this.Da.Q,0);A.zX([this
,this.Be3],this.Cn.Dl,0);A.zX([this,this.BeX],this.C_.Q,0);A.zX([this,this.At9],
this.Cc.Q,0);A.zX([this,this.At9],this.Dp.Q,0);A.pe([this,this.AAD],this);A.pe([
this,this.GH],this);A.pe([this,this.Be3],this);A.pe([this,this.BeX],this);A.pe([
this,this.At9],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.E5();A.
_GetAutoObject(C.A8).FB();},Agh:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.BZ.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhI
){var AlN=A._GetAutoObject(A.Device.Helper).AhI.AOW();A._GetAutoObject(A.Device.
Helper).W.Ab3(AlN);A._GetAutoObject(A.Device.Helper).W.AnD(AlN);}var Alt=A._GetAutoObject(
A.Device.Helper).A1K(A._GetAutoObject(A.Device.Helper).W,(F=this.Di.HZ.Hu,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alt){this.Ai1();A.pe([this,this.
Bw9],this);}else A._GetAutoObject(A.Device.Helper).AKm(A._GetAutoObject(A.Device.
Helper).W,Alt,(F=this.Di.HZ.Hu,F[1].call(F[0])),0,[this,this.ApH]);},Auo:function(
){this.N.CU(A.jV);this.N.C2(A.aaL(A.ach.ADQ));this.N.B$=[this,this.AyV];},Ai1:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);var L9=A._GetAutoObject(A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SQ(L9);var BdX=false;if(A._GetAutoObject(
A.Device.Helper).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh()){BdX=true;A.
_GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.
HJ().toFixed(),0,null);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KJ);B1.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7v()&&(BdX===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
this.M7);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}}var IX=null;switch((F=this.
Di.HZ.Hu,F[1].call(F[0]))){case 3:IX=[B=A._GetAutoObject(A.Device.Device),B.Awh,
B.AyN];break;case 2:IX=[B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyO];break;case
4:case 5:IX=[B=A._GetAutoObject(A.Device.Device),B.Ant,B.Aoz];break;default:;}if(
!!IX)switch((F=this.Di.Kn.VT,F[1].call(F[0]))){case 1:IX[2].call(IX[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:IX[2].call(IX[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).A$5(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjO(),this.Dp.AjQ());},Ap5:function(G){A.
_GetAutoObject(C.A8).FB();},Bw9:function(s){this.Ap5(s);},AAy:function(G){A._GetAutoObject(
C.A8).Cd(49);},Ahs:function(E){if(this.M7===E)return;this.M7=E;A.abo([this,this.
Anr,this.Ahs],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am6())this.
C_.Z(true);else this.C_.Z(false);if(A._GetAutoObject(A.Device.Helper).A7v())this.
Ee.Z(true);else this.Ee.Z(false);if(this.LV){this.Dp.Z(false);this.Cc.T(A.aaR(A.
acf.ACH));this.Cc.AE8(A.aaL(A.ach.Afe));}else{this.Dp.Z(true);this.Cc.T(A.aaR(A.
acf.Ak6));this.Cc.AE8(null);}},AAD:function(G){A._GetAutoObject(A.Device.Helper).
AVG(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.LV);},Be3:function(G){A.pe([this,this.BgX],this);},BeX:function(G){A.pe([this
,this.BgX],this);},BgX:function(G){var F,Cs,Tb;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahv(A._GetAutoObject(A.Device.Helper
).AhW(A._GetAutoObject(A.Device.Helper).Abp((F=this.BZ.Q,F[1].call(F[0]))),(Cs=this.
Cn.Dl,Cs[1].call(Cs[0])),2,(Tb=this.BZ.Q,Tb[1].call(Tb[0]))));break;case 2:this.
Ee.Ahv(A._GetAutoObject(A.Device.Helper).AhW(this.KJ,(F=this.Cn.Dl,F[1].call(F[0
])),2,(Cs=this.BZ.Q,Cs[1].call(Cs[0]))));break;default:;}},ApH:function(G){var F;
var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id
){case 22:case 21:switch((F=this.Di.HZ.Hu,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JH(this.Di);break;case 0:this.JH(this.Dp);break;case 1:this.JH(this.
Cc);break;default:throw new Error(Ayw+(F=this.Di.HZ.Hu,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JH(this.Di);this.JH(this.Dp);}break;case 25:case 42:{this.
JH(this.Di);this.JH(this.Cc);}break;case 41:break;default:A.ab5("%s%e",Ata,As.Id
);}},ApI:function(G){var F;C.HY.ApI.call(this,G);var AoW=0;switch((F=this.BZ.Q,F[
1].call(F[0]))){case 0:case 2:AoW=A._GetAutoObject(A.Device.Device).AdT;break;case
1:AoW=730;break;default:A.ab5("%s%e",Alf,(F=this.BZ.Q,F[1].call(F[0])));}(F=this.
Cn.Dl,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmJ(AoW)));(F=this.C_.Q,F[2].call(F[0],this.C_.AnY));this.Ee.Ahv(A._GetAutoObject(
A.Device.Helper).W.AhW(1));},Ae4:function(E){if(this.LV===E)return;this.LV=E;A.abo([
this,this.Awk,this.Ae4],0);},At9:function(G){var F,Cs,Tb;this.Ae4(((F=this.Cc.Q,
F[1].call(F[0]))===(Cs=this.Dp.Q,Cs[1].call(Cs[0])))&&!!(Tb=this.Cc.Q,Tb[1].call(
Tb[0])));A.pe([this,this.GH],this);},Anr:function(){return this.M7;},Awk:function(
){return this.LV;},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Av4._Init.call(this.Cc={I:this},0);C.Rb._Init.call(this.Dp={I:this}
,0);C.AGK._Init.call(this.Di={I:this},0);C.SR._Init.call(this.Cn={I:this},0);C.AkV.
_Init.call(this.Ee={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.BW._Init.call(
this.Li={I:this},0);this.__proto__=C.Ars;var B;this.Dr(C.ADi);this.CG.H(AcR);this.
Cc.H(Aoo);this.Cc.Aj(true);this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArM(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.aaR(A.acf.Akn));this.
Dp.H(Aoo);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uh));this.Dp.Ar2(false);this.Di.
H(AYs);this.Di.Aj(true);this.Di.T(A.aaR(A.acf.GN));this.Di.Bx(0);this.Cn.H(AcR);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFJ(true);this.Ee.H(AcR);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M7));this.Ee.Ga(1000);this.Ee.EU(999000);this.
G7.H(AcR);this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Arq));this.Li.H(AcR);this.Li.Aj(
true);this.Li.T(A.aaR(A.acf.AgK));this.J(this.Cc,-3);this.J(this.Dp,-3);this.J(this.
Di,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G7,-1);this.J(this.Li,-
1);this.EaseOfDelivery.L0(A._GetAutoObject(A.Device.Helper).W);this.BirthType.L0(
A._GetAutoObject(A.Device.Helper).W);this.Cc.AR=[this,this.AcT];this.Cc.LZ([this
,this.AcT]);this.Cc.L2(A.aaL(A.ach.Afe));this.Cc.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArA,B.PW]);this.Cc.OO([B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3
]);this.Cc.PU([B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4]);this.Cc.Ul([B=A._GetAutoObject(
A.Device.Device),B.Anq,B.Aoy]);this.Cc.Ae4([this,this.Awk,this.Ae4]);this.Dp.Gs([
this,this.D_,this.GS]);this.Dp.LZ([this,this.AcT]);this.Dp.L2(A.aaL(A.ach.Afe));
this.Dp.Un([B=this.Gender.Animal,B.Wy,B.JU]);this.Dp.OO([B=A._GetAutoObject(A.Device.
Device),B.Uj,B.U3]);this.Dp.PU([B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4]);
this.Dp.Ul([B=A._GetAutoObject(A.Device.Device),B.Anq,B.Aoy]);this.Dp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anu,B.Nj]);this.Dp.Anw([B=this.AnimalType.Animal,B.PT,B.EC]
);this.Di.Gs([this,this.D_,this.GS]);this.Di.LZ([B=this.Di,B.FV]);this.Di.L2(A.aaL(
A.ach.Edit));this.Di.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SJ]);this.
Di.A9I(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gs([this,this.D_,this.GS]);this.
Cn.LZ([B=this.Cn,B.FV]);this.Cn.L2(A.aaL(A.ach.Edit));this.Cn.Ab6([B=A._GetAutoObject(
A.Device.Helper).W,B.Awe,B.Q6]);this.Ee.Au([this,this.Anr,this.Ahs]);this.G7.Au([
B=this.BirthType,B.B_,B.Cb]);this.G7.CK(this.BirthType);this.Li.Au([B=this.EaseOfDelivery
,B.B_,B.Cb]);this.Li.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cc._Done(
);this.Dp._Done();this.Di._Done();this.Cn._Done();this.Ee._Done();this.G7._Done(
);this.Li._Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cc._ReInit();this.
Dp._ReInit();this.Di._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G7._ReInit(
);this.Li._ReInit();this.Cc.T(A.aaR(A.acf.Ak6));this.Cc.ArM(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.Asw));this.Cc.ArN(A.aaR(A.acf.Akn));this.Dp.T(
A.aaR(A.acf.Uh));this.Di.T(A.aaR(A.acf.GN));this.Cn.T(A.aaR(A.acf.Aeg));this.Ee.
T(A.aaR(A.acf.M7));this.G7.T(A.aaR(A.acf.Arq));this.Li.T(A.aaR(A.acf.AgK));},_Mark:
function(D){var B;C.HY._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Di)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHi={H7:null,AhN:null,AgV:null,AhO:null,AgW:null,AnimalType:null,Background:
null,N0:null,Rl:null,V:null,TT:null,YB:null,AbB:null,PR:null,DK:A.jV,AGM:true,CP:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.An8();this.
AxX();},An8:function(){var F,Cs;var LD=0;var Amh=0;var AlG=0;var Ib=0;if((((!!this.
AhN&&!!this.AhO)&&!!this.AgV)&&!!this.AgW)&&!!this.AnimalType){Amh=(F=this.AhN,F[
1].call(F[0]));AlG=(F=this.AgV,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper
).L$((F=this.AhO,F[1].call(F[0])),(Cs=this.AgW,Cs[1].call(Cs[0])));Ib=(F=this.AnimalType
,F[1].call(F[0]));}var K8=A.jb.Text;var Azd=A.jb.CS;if(!!LD){var ALC=A._GetAutoObject(
A.acj.DU).AlA(LD,Amh,AlG);Azd=A._GetAutoObject(A.acj.DU).AzS(ALC,Ib);K8=A._GetAutoObject(
A.acj.DU).AzU(ALC,Ib);}this.Background.L(Azd);this.TT.L(K8);this.Rl.L(K8);this.N0.
L(K8);this.AbB.L(K8);if(K8===A.jb.Bm)this.YB.L(K8);else this.YB.L(A.jb.CJ);this.
V.L(K8);this.PR.L(K8);},AxX:function(){var F,Cs;var LD=0;var Amh=0;var AlG=0;if(((
!!this.AhN&&!!this.AhO)&&!!this.AgV)&&!!this.AgW){Amh=(F=this.AhN,F[1].call(F[0]
));AlG=(F=this.AgV,F[1].call(F[0]));LD=A._GetAutoObject(A.Device.Helper).L$((F=this.
AhO,F[1].call(F[0])),(Cs=this.AgW,Cs[1].call(Cs[0])));}if(!!LD){var ALC=A._GetAutoObject(
A.acj.DU).AlA(LD,Amh,AlG);this.Rl.R(A._GetAutoObject(A.Device.Converter).S9(ALC,
2,true));this.N0.Z(true);this.Rl.Z(true);this.PR.Z(false);}else{this.N0.Z(false);
this.Rl.Z(false);this.PR.Z(true);}this.TT.R(this.BzJ(AlG-Amh,LD));this.AbB.Z(this.
AGM);this.YB.Z(this.AGM);this.N0.R(A._GetAutoObject(A.acj.DU).Aat());},BzJ:function(
A1p,Ah8){var B;if(Ah8<0){A.ab5("%s",AYt);return A.jV;}var Iv=(AYu+A._GetAutoObject(
A.acj.DU).Af4())+CQ;var FW=A._GetAutoObject(A.Device.Converter).Ak$(A1p);if(!A1p
)FW=A.abU(FW,AYv,0);else if(A1p>0)FW=A.abU(FW,AIh,0);Iv=this.Bgb(Iv,AYw,FW);if(Ah8===
1)Iv=Iv+A.aaR(A.acf.BjJ);else{Iv=Iv+A.aaR(A.acf.BjK);Iv=this.Bgb(Iv,AYx,Ah8.toFixed(
));}return Iv;},Bgb:function(aString,Bcq,Bx9){if(aString===A.jV){A.ab5("%s",AYy);
return A.jV;}var A2_=aString.indexOf(Bcq,0);if(A2_>=0){aString=A.ab1(aString,A2_
,Bcq.length);aString=A.abU(aString,Bx9,A2_);}return aString;},ATM:function(E){if(
A.aaZ(this.AhN,E))return;if(!!this.AhN)A.z$([this,this.C4],this.AhN,0);this.AhN=
E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},Bmx:function(
E){if(A.aaZ(this.AgV,E))return;if(!!this.AgV)A.z$([this,this.C4],this.AgV,0);this.
AgV=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},ATN:function(
E){if(A.aaZ(this.AhO,E))return;if(!!this.AhO)A.z$([this,this.C4],this.AhO,0);this.
AhO=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},Bmy:function(
E){if(A.aaZ(this.AgW,E))return;if(!!this.AgW)A.z$([this,this.C4],this.AgW,0);this.
AgW=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},C4:function(
G){this.Am();},T:function(E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_F:function(
E){if(this.AGM===E)return;this.AGM=E;this.Am();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C4],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CH._Init.call(this.N0={I:this},0);A.acg.Text._Init.call(this.Rl={I:this},
0);C.CH._Init.call(this.V={I:this},0);C.CH._Init.call(this.TT={I:this},0);A.acg.
Ap._Init.call(this.YB={I:this},0);A.acg.Ap._Init.call(this.AbB={I:this},0);C.CH.
_Init.call(this.PR={I:this},0);this.__proto__=C.AHi;this.H(AfE);this.Background.
AZ(0x3F);this.Background.H(AfE);this.N0.H(AYz);this.N0.R(A._GetAutoObject(A.acj.
DU).Aat());this.N0.A6(0x9);this.N0.L(A.jb.Text);this.Rl.H(AYA);this.Rl.A6(0x14);
this.Rl.R(A.aaR(A.acu.Akl));this.Rl.L(A.jb.Text);this.V.AZ(0x1D);this.V.H(AYB);this.
V.R(A.aaR(A.acf.AuD));this.V.A6(0x12);this.V.L(A.jb.Text);this.TT.H(Aad);this.YB.
AZ(0x14);this.YB.H(AIi);this.YB.Cv(1);this.AbB.AZ(0x14);this.AbB.H(AIi);this.AbB.
Cv(0);this.PR.H(AYC);this.PR.R(A.aaR(A.acf.A4Z));this.J(this.Background,0);this.
J(this.N0,0);this.J(this.Rl,0);this.J(this.V,0);this.J(this.TT,0);this.J(this.YB
,0);this.J(this.AbB,0);this.J(this.PR,0);this.N0.S(A.aaL(A.fl.EK));this.N0.A2(A.
aaL(A.fl.Af));this.N0.Cu(A.aaL(A.fl.Il));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bh));this.TT.S(A.aaL(A.
fl.Af));this.TT.A2(A.aaL(A.fl.Ak));this.TT.Cu(A.aaL(A.fl.Bh));this.YB.Ax(A.aaL(A.
ach.ABR));this.AbB.Ax(A.aaL(A.ach.ABR));this.H7=A._NewObject(A.Device.Rating,0);
this.PR.S(A.aaL(A.fl.Af));this.PR.A2(A.aaL(A.fl.Ak));this.PR.Cu(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N0._Done(
);this.Rl._Done();this.V._Done();this.TT._Done();this.YB._Done();this.AbB._Done(
);this.PR._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N0._ReInit();this.Rl._ReInit();this.V.
_ReInit();this.TT._ReInit();this.YB._ReInit();this.AbB._ReInit();this.PR._ReInit(
);this.Rl.R(A.aaR(A.acu.Akl));this.V.R(A.aaR(A.acf.AuD));this.PR.R(A.aaR(A.acf.A4Z
));this.N0.S(A.aaL(A.fl.EK));this.N0.A2(A.aaL(A.fl.Af));this.N0.Cu(A.aaL(A.fl.Il
));this.Rl.S(A.aaL(A.fl.Aet));this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));
this.V.Cu(A.aaL(A.fl.Bh));this.TT.S(A.aaL(A.fl.Af));this.TT.A2(A.aaL(A.fl.Ak));this.
TT.Cu(A.aaL(A.fl.Bh));this.PR.S(A.aaL(A.fl.Af));this.PR.A2(A.aaL(A.fl.Ak));this.
PR.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhN)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgW)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AVY={Animal:null,Rating:null,Cq:null,AD:null,AY:
0,Hm:function(G){var B;if(!this.Animal||!this.Rating)return;var Gg=this.AD.G6;var
CA=(C.AHi.isPrototypeOf(B=this.AD.Cj)?B:null);if(!CA)return;CA.EC([B=this.Animal
,B.PT,B.EC]);CA.Bmx([B=A._GetAutoObject(A.Device.Device),B.AEN,B.AIZ]);CA.Bmy([B=
this.Rating,B.A9m,B.OnSetTimestamp]);switch(Gg%this.AY){case 1:{CA.ATM([B=this.Animal
,B.A8X,B.AFp]);CA.ATN([B=this.Animal,B.A9n,B.AFT]);CA.T(A.aaR(A.acf.AuD));}break;
default:if(this.Animal.Arf()){CA.ATM([B=this.Animal,B.ASG,B.AwL]);CA.ATN([B=this.
Animal,B.ASX,B.Axb]);CA.T(A.aaR(A.acf.AL0));}else{CA.ATM([B=this.Animal,B.ASG,B.
AwL]);CA.ATN([B=this.Animal,B.ASX,B.Axb]);CA.T(A.aaR(A.acf.Bhd));}}if(this.AY>1)
CA.A_F(true);else CA.A_F(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GO
]));},DE:function(G){if(this.AY>0)switch(this.Cq.CO){case 6:this.CE(this);break;
case 7:this.B$(this);break;default:this.Cq.NL=true;}},L0:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jy(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jy(1);else{this.Jy(2);this.AD.GT(1);this.
AD.HI(this.AD.Gt,true,null,null);}if(this.AY>0)this.AD.AbD(0,this.AY-1);},AkE:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AY>0)this.AD.AbD(0,this.AY-1);
},CE:function(G){if(this.AD.Gt>0)this.AD.GT(this.AD.Gt-1);else this.AD.GT(this.AY-
1);this.AD.HI(this.AD.Gt,true,null,null);},B$:function(G){if(this.AD.Gt<(this.AY-
1))this.AD.GT(this.AD.Gt+1);else this.AD.GT(0);this.AD.HI(this.AD.Gt,true,null,null
);},Jy:function(E){if(this.AY===E)return;this.AY=E;this.AD.Jy(this.AY);A.abo([this
,this.Arx,this.Jy],0);},Arx:function(){return this.AY;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AVY;this.H(AfE);this.Cq.Filter=147;this.
AD.AZ(0x3F);this.AD.H(AfE);this.AD.N2(C.AHi);this.AD.Ae8(160);this.AD.GT(0);this.
AD.Jy(2);this.J(this.AD,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,this.DE];this.
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
A.jb.CS;GY=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.LI=Hf;
this.KG=Fw;this.Qv=GE;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(KZ);this.V.H(BD);this.Zx(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeS={KK:null,GK:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KK.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KK.
L(this.V.AQ);},Init:function(aArg){},Ab2:function(E){if(this.GK===E)return;this.
GK=E;this.KK.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CH._Init.call(
this.KK={I:this},0);this.__proto__=C.AeS;this.H(KZ);this.Background.H(KZ);this.V.
H(AcN);this.V.R(Lw);this.KK.H(IV);this.KK.R(AYD);this.J(this.KK,0);this.V.S(A.aaL(
A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(null);this.KK.S(A.aaL(A.fl.Af));this.
KK.A2(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KK._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KK._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.KK.S(A.aaL(
A.fl.Af));this.KK.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Av4={ACj:null,Q:null,A1:null,AF:null,Ij:null,LV:null,Ap:null,EM:null,AOb:A.jV
,AOc:A.jV,Bl:function(aSize){C.AeS.Bl.call(this,aSize);if(!this.ACj)this.KK.H([].
concat(0,this.KK.M.slice(1,4)));else this.KK.H([].concat(this.Ap.M[2],this.KK.M.
slice(1,4)));},Ai:function(Ae){var F,Cs,Tb;C.AeS.Ai.call(this,Ae);var BcV=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Aph)this.Ab2(this.AOb);else
this.Ab2(this.AOc);}else{this.Ab2(A._GetAutoObject(A.Device.Converter).Rj((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ij&&!!this.A1)&&!!this.AF)&&!!this.LV)&&(((F=this.
Ij,F[1].call(F[0]))===1)||(!(Cs=this.Ij,Cs[1].call(Cs[0]))&&(Tb=this.LV,Tb[1].call(
Tb[0])))))BcV=true;}}this.EM.Z(BcV);this.Ap.L(this.V.AQ);A.pe([this,this.Agc],this
);},C4:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)
A.pe([this,this.C4],this);},AE8:function(E){if(this.ACj===E)return;this.ACj=E;this.
Ap.Ax(E);this.BjQ();},OO:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1)A.z$([
this,this.AaD],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.AaD],E,0);if(!!E)A.pe([
this,this.AaD],this);},PU:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaF],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaF],E,0);if(!!E)
A.pe([this,this.AaF],this);},AaF:function(G){this.Am();},AaD:function(G){this.Am(
);},Ul:function(E){if(A.aaZ(this.Ij,E))return;if(!!this.Ij)A.z$([this,this.Al1],
this.Ij,0);this.Ij=E;if(!!E)A.zX([this,this.Al1],E,0);if(!!E)A.pe([this,this.Al1
],this);},Al1:function(G){this.Am();},Agc:function(G){var F,Cs;if((!this.Ij||!this.
A1)||!this.AF)return;var A2R=this.KK.Afh([(this.KK.String.length-(F=this.AF,F[1].
call(F[0])))-(Cs=this.A1,Cs[1].call(Cs[0])),0]);var A4b=this.KK.Afh([this.KK.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABi=this.KK.Dc(0x0);this.EM.H([A2R[0]-
1,ABi[1],A4b[0]+1,ABi[3]]);},ArM:function(E){if(this.AOb===E)return;this.AOb=E;this.
Am();},ArN:function(E){if(this.AOc===E)return;this.AOc=E;this.Am();},Ae4:function(
E){if(A.aaZ(this.LV,E))return;if(!!this.LV)A.z$([this,this.A3z],this.LV,0);this.
LV=E;if(!!E)A.zX([this,this.A3z],E,0);if(!!E)A.pe([this,this.A3z],this);},A3z:function(
G){this.Am();},_Init:function(aArg){C.AeS._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.Av4;
this.Ap.H(AhY);this.EM.H(AYE);this.EM.Nm(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KK.Q7([this,this.Agc]);},_Done:function(){this.__proto__=
C.AeS;this.Ap._Done();this.EM._Done();C.AeS._Done.call(this);},_ReInit:function(
){C.AeS._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeS._Mark.call(this,D);if((B=this.ACj)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ij)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Ih:0,AaC:4,Bd8:true,Bd7:false,Bc2:true,Bd0:false,Al6:function(
G){C.Ra.Al6.call(this,G);if(A._GetAutoObject(A.Device.Helper).BdZ()){this.Ih=A._GetAutoObject(
A.Device.Helper).Uz.Id;var AiA=A._GetAutoObject(A.Device.Helper).ARp(this.Ih);if(
AiA)A._GetAutoObject(A.Device.Device).A3(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A3D]);else{this.AaC=A._GetAutoObject(A.Device.
Helper).ARq(this.Ih);var Bet=false;if((this.AaC===3)||(this.AaC===2))Bet=A._GetAutoObject(
A.Device.Helper).A7w(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(Bet)A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rj(this.Ih),0,null
);else switch(this.AaC){case 2:{var BM=A._GetAutoObject(A.Device.Converter).AxV(
this.Ih);A._GetAutoObject(A.Device.Device).A3(46,true,BM.toFixed(),0,[this,this.
A3D]);}break;case 3:case 1:case 0:case 4:this.A4r();break;default:throw new Error(
AIj+this.AaC.toFixed());}}}},Ew:function(G){A._GetAutoObject(C.A8).FB();},AI0:function(
s){this.Ew(s);},A4r:function(){if((this.AaC===3)||(this.AaC===2)){if((this.Bc2&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Ih)){A._GetAutoObject(A.Device.Device).A3(69,true,A.jV,0,[this
,this.A3D]);return;}else this.BCf();}A._GetAutoObject(A.Device.Helper).W.PW(this.
Ih);this.Bd0=true;this.BCh();this.Ew(this);},A3D:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A4r();break;case 107:switch(As.PopupState){case 7:{this.A4r();A._GetAutoObject(A.
Device.Helper).BoQ(this.Ih);}break;case 8:this.Ew(this);break;default:;}break;case
69:if(As.PopupState===4)this.Ew(this);break;default:A.ab5("%s%e",AIk,As.Id);}},BCf:
function(){A._GetAutoObject(A.Device.Helper).W.Nj(this.Ih);if(this.Bd7&&(A._GetAutoObject(
A.Device.Converter).S2(this.Ih)===10)){var BcF=Math.trunc((this.Ih%1000000000000
)/10000000000);if(!BcF&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.EC(0);else if((BcF===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BCh:function(){if(this.
Bd8){A._GetAutoObject(A.Device.Helper).W.SJ(A._GetAutoObject(A.Device.Helper).A5f(
A._GetAutoObject(A.Device.Device).Ak5,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ak5===1)A._GetAutoObject(A.Device.Helper).A$6();
}},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Z(true);this.Dr(C.IK);this.Number.R(A.aaR(A.acf.OT));this.Jg.H(AYF);this.
IT.H(W6);this.AkG(1);this.N.CE=[this,this.AI0];this.N.C1(A.aaL(A.ach.E2));},_ReInit:
function(){C.Ra._ReInit.call(this);this.Number.R(A.aaR(A.acf.OT));},_className:"Application::SetTransponderScreen"
};C.ADu={Go:null,Lm:null,Kt:null,CP:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EB.Ai.call(this,Ae);this.Lm.R(A._GetAutoObject(A.acj.DU
).Af4());this.Kt.R(A._GetAutoObject(A.acj.DU).Aat());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.
call(this.Lm={I:this},0);A.acg.Text._Init.call(this.Kt={I:this},0);this.__proto__=
C.ADu;this.Background.L(A.jb.Text);this.Go.H(AYG);this.Go.A6(0x11);this.Go.R(A.aaR(
A.acf.Date));this.Go.L(A.jb.Bm);this.Lm.H(AYH);this.Lm.A6(0x11);this.Lm.L(A.jb.Bm
);this.Kt.H(AYI);this.Kt.L(A.jb.Bm);this.J(this.Go,0);this.J(this.Lm,0);this.J(this.
Kt,0);this.Go.S(A.aaL(A.fl.Af));this.Lm.S(A.aaL(A.fl.Af));this.Kt.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Go._Done();this.Lm.
_Done();this.Kt._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Go._ReInit();this.Lm._ReInit();this.Kt._ReInit();this.Go.R(A.aaR(
A.acf.Date));this.Go.S(A.aaL(A.fl.Af));this.Lm.S(A.aaL(A.fl.Af));this.Kt.S(A.aaL(
A.fl.Af));this.CP();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHm={Mm:null,Hq:null,H$:null,AP:null,A$:null,FW:0,Ib:0,AiO:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mm.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mm.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiO){this.H$.R(Rp);this.H$.L(A.jb.
Text);this.Mm.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S9(this.FW,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzU(this.FW,this.Ib));
this.Mm.L(A._GetAutoObject(A.acj.DU).AzS(this.FW,this.Ib));}this.Hq.L(this.V.AQ);
},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hv(
Ad,6);var Al$=this.AX.CF(Ad,8);if(this.Hs>0){var Bzg=this.AX.Hv(this.Hs-1,6);var
BBW=this.AX.CF(this.Hs-1,8);var LD=A._GetAutoObject(A.Device.Helper).L$(Bzg,AlD);
if(!!LD){this.AiO=false;this.FW=A._GetAutoObject(A.acj.DU).AlA(LD,BBW,Al$);}else{
this.AiO=true;this.FW=0;}}else{this.AiO=true;this.FW=0;}this.T(A._GetAutoObject(
A.acj.KL).ACW(AlD));this.Hq.R(A._GetAutoObject(A.Device.Converter).Ak$(Al$));this.
Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mm={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AHm;this.V.H(O7);this.Mm.H(Atd);this.Hq.H(AIl);this.Hq.A6(0x12);this.Hq.R(Ro);
this.Hq.L(A.jb.Text);this.H$.H(AIm);this.H$.R(Ro);this.H$.L(A.jb.Text);this.AP.H(
Aor);this.AP.L(A.jb.Bc);this.A$.H(Aos);this.A$.L(A.jb.Bc);this.J(this.Mm,0);this.
J(this.Hq,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A$,0);this.Hq.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mm._Done();this.Hq._Done();this.H$._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mm._ReInit(
);this.Hq._ReInit();this.H$._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,V2:null,AhU:null,S0:null
,KN:A.jV,CP:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LD=
A._GetAutoObject(A.Device.Helper).L$(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LD){var FW=A._GetAutoObject(
A.acj.DU).AlA(LD,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdO=A.aaR(A.acf.Bhz);AdO=A._GetAutoObject(
A.Device.Helper).MG(AdO,O8,A._GetAutoObject(A.Device.Converter).S9(FW,2,true));AdO=
A._GetAutoObject(A.Device.Helper).MG(AdO,Ayf,A._GetAutoObject(A.acj.DU).Aat());this.
S0.R(AdO);this.AhU.L(A._GetAutoObject(A.acj.DU).AzS(FW,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S0.L(A._GetAutoObject(A.acj.DU).AzU(FW,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S0.R(A.aaR(A.acf.AVW));this.AhU.L(A.jb.
ARb);this.S0.L(A.jb.Text);}},CC:function(G){var Fy=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CW(HV);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fy.CW(Ac_);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);this.AxB(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},AxB:function(G){this.Bg=A._NewObject(C.Gc,0);this.Bg.N2(C.AHm);this.Bg.H(Ayr
);this.Bg.Zq(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dk(this.KN);this.J(this.
Bg,0);this.Bb(this.Bg);},Anp:function(G){A._GetAutoObject(C.A8).FB();},Dk:function(
E){if(this.KN===E)return;this.KN=E;if(!!this.Bg)this.Bg.Dk(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADu._Init.call(this.V2={I:this},0);A.acg.AL._Init.
call(this.AhU={I:this},0);A.acg.Text._Init.call(this.S0={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Ce);this.N.Z(true);this.Dr(C.IK);this.V2.H(
Qd);this.KN=A.aaR(A.acf.Akm);this.AhU.AZ(0x1D);this.AhU.H(IV);this.S0.AZ(0x1D);this.
S0.H(IV);this.S0.A6(0x12);this.S0.R(Ro);this.J(this.V2,0);this.J(this.AhU,0);this.
J(this.S0,0);this.N.CE=[this,this.Anp];this.N.C1(A.aaL(A.ach.E2));this.S0.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V2._Done();this.AhU._Done(
);this.S0._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V2._ReInit();this.AhU._ReInit();this.S0._ReInit();this.Dk(A.aaR(A.acf.Akm
));this.S0.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mi={DP:null,Acy:null,ARQ:11,EV:0,A5d:true,ABY:false,I0:function(G){if(A._GetAutoObject(
A.Device.Device).An.B9()>0)this.Fb(4);else A._GetAutoObject(A.Device.Device).A3(
30,true,A.jV,0,null);},CC:function(G){if(this.DP.Az4())this.DP.Ac9();else if((this.
EV===2)&&A._GetAutoObject(A.Device.Helper).W.AqY())this.Fb(5);else this.Fb(1);},
E4:function(G){this.ALa();},Ew:function(G){this.Fb(0);A._GetAutoObject(C.A8).FB(
);},BCx:function(){A._GetAutoObject(A.Device.Device).AhM();},ALa:function(){A._GetAutoObject(
A.Device.Device).An0();},A9L:function(E){if(this.ABY===E)return;this.ABY=E;A.abo([
this,this.BkW,this.A9L],0);},Fb:function(E){var B;if(this.EV===E)return;this.EV=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkQ();A.zX([this,this.AKB]
,[B=A._GetAutoObject(A.Device.Helper),B.Ary,B.AkF],0);A.z$([this,this.AAv],[B=this.
DP,B.SE,B.Fb],0);this.BCx();}break;case 3:{A.z$([this,this.AKB],[B=A._GetAutoObject(
A.Device.Helper),B.Ary,B.AkF],0);this.ALa();this.BAs();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Asr();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A5d)this.BCi();else this.BCl();}break;case 4:{A.z$([this,this.AKB],[B=A._GetAutoObject(
A.Device.Helper),B.Ary,B.AkF],0);this.ALa();A._GetAutoObject(A.Device.Helper).Asr(
);A.zX([this,this.Bfc],[B=A._GetAutoObject(A.Device.Device),B.Awp,B.AyS],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ARQ);}break;case 5:this.Bgx();break;case
6:{A.zX([this,this.AAv],[B=this.DP,B.SE,B.Fb],0);this.DP.Ac9();}break;case 0:{A.
z$([this,this.AKB],[B=A._GetAutoObject(A.Device.Helper),B.Ary,B.AkF],0);this.ALa(
);}break;default:throw new Error(Ayx);}A.abo([this,this.SE,this.BwX],0);},BwX:function(
Aq){this.Fb(Aq);},AKB:function(G){if(!!A._GetAutoObject(A.Device.Helper).Uz){if(
this.EV===1)this.Fb(3);else A.ab5("%s%e",AYJ,this.EV);}else A.ab5("%s",AIn);},BCi:
function(){A._GetAutoObject(A.Device.Device).A3(13,true,A._GetAutoObject(A.Device.
Helper).Ak7(A._GetAutoObject(A.Device.Helper).Uz.Id).toFixed(),0,[this,this.BAH]
);},BAH:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
As&&((As.PopupState===4)||(As.PopupState===3))){if(this.Bc6(false))A._GetAutoObject(
C.A8).Cd(31);else{A._GetAutoObject(A.Device.Helper).AkQ();this.Fb(1);}}else if(!
!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkQ();this.Fb(1);}},
Bc6:function(Ai1){if(A._GetAutoObject(A.Device.Device).An.Lh()){A._GetAutoObject(
A.Device.Device).A3(41,true,A._GetAutoObject(A.Device.Device).An.HJ().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gr();A._GetAutoObject(
A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.PW(A._GetAutoObject(A.Device.Helper).Uz.Id);if(!!A._GetAutoObject(A.Device.
Helper).AhI){var AlN=A._GetAutoObject(A.Device.Helper).AhI.AOW();A._GetAutoObject(
A.Device.Helper).W.Ab3(AlN);A._GetAutoObject(A.Device.Helper).W.AnD(AlN);}if(A._GetAutoObject(
A.Device.Helper).ARq(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nj(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SJ(A._GetAutoObject(A.Device.Helper).Bho(A._GetAutoObject(A.Device.
Device).AgA,A._GetAutoObject(A.Device.Helper).W));if(Ai1){A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var L9=A._GetAutoObject(A.Device.
Device).An.LT(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SQ(L9);if(A._GetAutoObject(A.Device.Helper).Am6()){if(A._GetAutoObject(A.
Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating
,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B1.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abp(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).AgA)A._GetAutoObject(
A.Device.Helper).A$6();}return true;},BAs:function(){if(!!A._GetAutoObject(A.Device.
Helper).Uz){var AJr=true;if(A._GetAutoObject(A.Device.Helper).Uz.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJr=A._GetAutoObject(A.Device.Helper).A7I(A._GetAutoObject(
A.Device.Helper).Uz.Id);if(!AJr&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bc6(true);AJr=A._GetAutoObject(A.Device.Helper).A7I(A._GetAutoObject(A.
Device.Helper).Uz.Id);}}if(AJr)this.Fb(5);else this.Fb(2);}else{A.ab5("%s",AIn);
return;}},Bfc:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.ARQ){A.z$([this,this.Bfc],[B=A._GetAutoObject(A.Device.Device),B.Awp,B.AyS
],0);if(A._GetAutoObject(A.Device.Helper).W.AqY())this.Fb(5);else this.Fb(1);}},
Bgx:function(){if(this.ABY===true)this.Fb(6);else A._GetAutoObject(C.A8).Cd(24);
},BCl:function(){A._GetAutoObject(A.Device.Device).A3(36,true,A.jV,0,[this,this.
BBB]);},BBB:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkQ();this.Fb(1);}},AAv:function(G){if(!this.DP.EV)this.Fb(1);},A3r:function(G
){},Bw7:function(s){this.A3r(s);},BkW:function(){return this.ABY;},SE:function(){
return this.EV;},_Init:function(aArg){C.Ra._Init.call(this,aArg);A.acg.Text._Init.
call(this.Acy={I:this},0);this.__proto__=C.Mi;this.N.Z(true);this.Dr(C.AqZ);this.
Number.H(AYK);this.Number.R(A.aaR(A.acf.A$v));this.Jg.H(AYL);this.IT.H(AYM);this.
Acy.H(AYN);this.Acy.R(AYO);this.Acy.L(A.jb.Text);this.J(this.Acy,0);this.N.CE=[this
,this.Ew];this.N.Cf=[this,this.Bw7];this.N.C1(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.Acy.S(A.aaL(A.fl.H1));this.DP=A._GetAutoObject(C.DP);},_Done:function(
){this.__proto__=C.Ra;this.Acy._Done();C.Ra._Done.call(this);},_ReInit:function(
){C.Ra._ReInit.call(this);this.Acy._ReInit();this.Number.R(A.aaR(A.acf.A$v));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ra._Mark.call(this,D);if((B=
this.DP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A43={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Apc:-1,EV:0,Byv:function(){var Bgc=false;
var Ol=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.
Device.Device).Bt.HJ().toFixed(),0,null);else if(Ol){Bgc=true;var B1=A._NewObject(
A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Axx(B1,5);B1.OnSetAppearance(3);B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Axx(B1
,5);B1.OnSetAppearance(1);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(Bgc)A._GetAutoObject(A.Device.Helper).W.Uq(false);if(Ol)A.
_GetAutoObject(A.Device.Helper).W.AnV(false);else A._GetAutoObject(A.Device.Helper
).W.AnV(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A3(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MY]);else A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MY]);},Byx:function(){A._GetAutoObject(
A.Device.Helper).W.AGI(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A3(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MY]);else A._GetAutoObject(
A.Device.Device).A3(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MY]);},Qp:function(Eh){switch(Eh){case 4:this.Byv();break;case
128:A._GetAutoObject(C.A8).Cd(7);break;case 16:A._GetAutoObject(C.A8).Cd(36);break;
case 1:A._GetAutoObject(C.A8).Cd(10);break;case 2:A._GetAutoObject(C.A8).Cd(11);
break;case 8:this.Byx();break;case 64:A._GetAutoObject(C.A8).Cd(29);break;case 32:
A._GetAutoObject(C.A8).Cd(48);break;case 256:A._GetAutoObject(C.A8).Cd(21);break;
case 512:A._GetAutoObject(C.A8).Cd(30);break;case 1024:this.BAp();break;case 262144:
this.BCN();break;case 2048:this.Ac9();break;case 4096:this.BcY(false);break;case
8192:this.Byw();break;case 16384:this.BAo();break;case 32768:this.ByW();break;case
524288:this.ByX();break;case 65536:this.Bzk();break;case 131072:this.BCa();break;
case 0:break;default:throw new Error(AYP);}},Bc8:function(Eh,Bx3){var EP=A._NewObject(
C.Wm,0);EP.Ab1(false);EP.Aj(true);EP.AR=Bx3;EP.Bl7(Eh);switch(Eh){case 1:{EP.T(A.
aaR(A.acf.An1));EP.DB(A.aaL(A.ach.ALQ));}break;case 2:{EP.T(A.aaR(A.acf.A$f));EP.
DB(A.aaL(A.ach.ALR));}break;case 4:{EP.T(A.aaR(A.acf.Alarm));EP.DB(A.aaL(A.ach.ALS
));EP.AFF(true);}break;case 8:{EP.T(A.aaR(A.acf.Asd));EP.DB(A.aaL(A.ach.ALT));EP.
AFF(true);}break;case 16:{EP.T(A.aaR(A.acf.AMp));EP.DB(A.aaL(A.ach.ALU));}break;
case 32:{EP.T(A.aaR(A.acf.AnimalLoss));EP.DB(A.aaL(A.ach.ALV));}break;case 64:{EP.
T(A.aaR(A.acf.Unregister));EP.DB(A.aaL(A.ach.ALW));}break;case 128:{EP.T(A.aaR(A.
acf.Edit));EP.DB(A.aaL(A.ach.ALX));}break;case 256:{EP.T(A.aaR(A.acf.Weighing));
EP.DB(A._GetAutoObject(A.acj.DU).BzZ());}break;case 512:{EP.T(A.aaR(A.acf.ASd));
EP.DB(A.aaL(A.ach.ALI));}break;case 1024:{EP.T(A.aaR(A.acf.LinkTransponder));EP.
DB(A.aaL(A.ach.ALJ));}break;case 262144:{EP.T(A.aaR(A.acf.UnlinkTransponder));EP.
DB(A.aaL(A.ach.ALP));}break;case 2048:{EP.T(A.aaR(A.acf.Tx));EP.DB(A.aaL(A.ach.ALK
));}break;case 4096:{EP.T(A.aaR(A.acf.Calving));EP.DB(A.aaL(A.ach.ALL));}break;case
8192:{EP.T(A.aaR(A.acf.DryOff));EP.DB(A.aaL(A.ach.ALM));EP.AFF(true);}break;case
16384:{EP.T(A.aaR(A.acf.BiM));EP.DB(A.aaL(A.ach.ALN));}break;case 131072:{EP.T(A.
aaR(A.acf.Bo3));EP.DB(A.aaL(A.ach.ALO));}break;default:A.ab5("%s",(AYQ+Eh.toFixed(
))+AYR);}return EP;},Bzx:function(){this.Apc=this.Apc+1;if(this.Apc>=this.AutoActions.
M$())this.Fb(0);else this.Fb(2);},BB0:function(){this.Apc=-1;},Az4:function(){return(
this.Apc>-1)&&!this.BAi();},BAi:function(){return this.Apc>=this.AutoActions.M$(
);},Fb:function(E){if(this.EV===E)return;this.EV=E;switch(E){case 1:this.Bzx();break;
case 2:{var Tf=this.AutoActions.OF(this.Apc);if(this.A40(A._GetAutoObject(A.Device.
Helper).W,Tf))this.Qp(Tf);else A._GetAutoObject(A.Device.Device).A3(64,true,(this.
ActionToString.Lv(Tf)+Atb)+this.AnimalTypeToString.Lv(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MY]);}break;case 0:this.BB0();break;default:throw new
Error(Ayx);}A.abo([this,this.SE,this.Fb],0);},MY:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
BcY(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.A8).Cd(45);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.Az4())this.
Fb(1);},Bc0:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAp:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A8).Cd(
45);else A._GetAutoObject(A.Device.Device).A3(32,true,A.jV,0,[this,this.MY]);},Ac9:
function(){this.Fb(1);},BBY:function(){var Ol=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Ol&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device
).Bt.HJ().toFixed(),0,null);else{var B1=A._NewObject(A.Device.Rating,0);B1.Gr();
B1.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).Axx(B1,5);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uq(false);if(Ol)A._GetAutoObject(
A.Device.Helper).W.AnV(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MY]);},BBZ:function(){A._GetAutoObject(
A.Device.Helper).W.AGI(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MY]);},BcY:function(BzB){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BzB===false))A._GetAutoObject(A.Device.
Device).A3(63,true,A.jV,0,[this,this.MY]);else A._GetAutoObject(C.A8).Cd(54);},Byw:
function(){A._GetAutoObject(A.Device.Helper).W.ArV(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A3(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MY]);else A._GetAutoObject(A.Device.Device).A3(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MY]);},BAo:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A8).Cd(81);else A._GetAutoObject(A.
Device.Device).A3(69,true,A.jV,0,[this,this.MY]);},ByW:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae5(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(65,true,A.jV,2000,[this,this.MY
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae6(false);A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).A3(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MY]);}}},Bzk:function(){A._GetAutoObject(A.Device.Helper).W.Ae5(false);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae5(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(65,true,A.jV,2000,[this,this.MY
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A3(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MY]);else A._GetAutoObject(A.Device.Device).A3(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MY]);}},A40:function(En,Eh
){var Qz=false;switch(Eh){case 32768:Qz=En.IsRegistrationNoticePending&&!!En.NaisIdMother;
break;case 524288:Qz=En.IsRegistrationNoticePending&&!En.NaisIdMother;break;case
4096:case 8192:switch(En.AnimalType){case 1:Qz=true;break;default:;}break;case 512:
switch(En.AnimalType){case 0:Qz=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qz=true;break;default:A.ab5("%s",AYS+
Eh.toFixed());}return Qz;},BCa:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A8).Cd(80);else A._GetAutoObject(A.Device.Device).A3(
69,true,A.jV,0,[this,this.MY]);},BCN:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A3(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MY]);else{A._GetAutoObject(A.
Device.Helper).W.PW(0);A._GetAutoObject(A.Device.Helper).W.SJ(A._GetAutoObject(A.
Device.Helper).A5f(A._GetAutoObject(A.Device.Device).An6,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).A3(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.MY]);}},ByX:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae6(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).A3(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MY]);}},SE:function(){return this.EV;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A43;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AL2={Aa1:null,Aqk:null,Fb:function(E){if(this.EV===E)return;C.Mi.Fb.call(this
,E);switch(E){case 1:this.Dr(C.AqZ);break;case 5:case 6:this.Dr(C.IK);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ayx);}},A3r:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mi._Init.call(this
,aArg);A.acg.Text._Init.call(this.Aa1={I:this},0);C.AL3._Init.call(this.Aqk={I:this
},0);this.__proto__=C.AL2;this.A9L(true);this.Aa1.H(AYT);this.Aa1.R(A.aaR(A.acf.
Tx));this.Aa1.L(A.jb.Text);this.Aqk.H(AYU);this.J(this.Aa1,0);this.J(this.Aqk,0);
this.N.Cw(A.aaL(A.ach.AeD));this.Aa1.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.Mi;this.Aa1._Done();this.Aqk._Done();C.Mi._Done.call(this);},_ReInit:function(
){C.Mi._ReInit.call(this);this.Aa1._ReInit();this.Aqk._ReInit();this.Aa1.R(A.aaR(
A.acf.Tx));this.Aa1.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mi._Mark.call(
this,D);if((B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqk)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
Ia:null,J2:null,A3r:function(G){if(this.Ia.NY(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.Mi._Init.call(this,aArg);A.acg.Text._Init.call(this.
J2={I:this},0);this.__proto__=C.ManualActionScanScreen;this.J2.H(AYV);this.J2.KS(
true);this.J2.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABM));this.
J2.L(A.jb.Text);this.J(this.J2,0);this.N.Cw(A.aaL(A.ach.AeD));this.J2.S(A.aaL(A.
fl.Af));this.Ia=A._GetAutoObject(C.Pn);},_Done:function(){this.__proto__=C.Mi;this.
J2._Done();C.Mi._Done.call(this);},_ReInit:function(){C.Mi._ReInit.call(this);this.
J2._ReInit();this.J2.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABM
));this.J2.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Mi._Mark.call(this,D);if((
B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.J2)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.AL3={Y:null,Init:
function(aArg){var B;A.zV([this,this.ABu],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.AuC],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.ABu],this);
A.pe([this,this.AuC],this);this.H(A.abK(this.M,AYW));this.Y.H(A.abK(this.Y.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AYX)));},BcN:function(G){var B;var AlB=0;var Azw=0;
var Bc4;var X=this.Y.Ah;var Cy=null;Bc4=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).M$()*58))/2)|0;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.Wm.isPrototypeOf(
X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.H(A.abK(Cy.M,AYY));Cy.H(A.abM(Cy.M
,(Azw*58)+Bc4));Cy.H(A.abO(Cy.M,AlB*58));if(Azw>=3){AlB=AlB+1;Azw=0;}else Azw=Azw+
1;}X=X.Ah;}this.Bb(null);},A1P:function(Eh){var EP=A._GetAutoObject(C.DP).Bc8(Eh
,null);this.J(EP,0);this.BcN(this);},Ao3:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HO(
AdM);}},ABu:function(G){this.Ao3();var O;var CB=A._GetAutoObject(C.AutoActions).
M$();for(O=0;O<CB;O=O+1){var Tf=A._GetAutoObject(C.AutoActions).OF(O);this.A1P(Tf
);}A.pe([this,this.BcN],this);A.pe([this,this.AuC],this);A.pe([this,this.BCX],this
);},AuC:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var Aa=(C.Wm.isPrototypeOf(X)?X:null);Aa.AFF(false);}X=X.Ah;
}},BCX:function(G){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((
X.U&0x400)===0x400)){var Aa=(C.Wm.isPrototypeOf(X)?X:null);var ByM=A._GetAutoObject(
C.AutoActions).M$();if(!!Aa){var O;Aa.A9H(false);for(O=0;O<ByM;O=O+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).OF(O)){Aa.A9H(true);Aa.Bnc(AYZ+(O+1).toFixed());
}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);this.__proto__=C.AL3;this.Y.JT(0);this.J(this.Y,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Y._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Y._ReInit();},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DP={_Init:function(
){C.A43._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.APF={Ll:null,T7:null,Init:function(aArg){this.Ll.R(A._GetAutoObject(
A.acj.Temperature).AlM());},_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.
Text._Init.call(this.Ll={I:this},0);C.CH._Init.call(this.T7={I:this},0);this.__proto__=
C.APF;this.Ll.H(AY0);this.Ll.A6(0x12);this.Ll.L(A.jb.Text);this.T7.H(Aot);this.T7.
R((A.aaR(A.acf.Ahn)+AIo)+A.aaR(A.acf.Km));this.T7.A6(0x12);this.T7.L(A.jb.Text);
this.J(this.Ll,0);this.J(this.T7,0);this.Ll.S(A.aaL(A.fl.Af));this.T7.S(A.aaL(A.
fl.Ak));this.T7.A2(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dd;this.Ll._Done();this.T7._Done();C.Dd._Done.call(this);},_ReInit:function(){
C.Dd._ReInit.call(this);this.Ll._ReInit();this.T7._ReInit();this.T7.R((A.aaR(A.acf.
Ahn)+AIo)+A.aaR(A.acf.Km));this.Ll.S(A.aaL(A.fl.Af));this.T7.S(A.aaL(A.fl.Ak));this.
T7.A2(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.
Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ADs={Jx:null,D0:null,_Init:
function(aArg){C.Dd._Init.call(this,aArg);A.acg.Text._Init.call(this.Jx={I:this}
,0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=C.ADs;this.Jx.H(AY1
);this.Jx.KS(true);this.Jx.A6(0x14);this.Jx.R(A.aaR(A.acf.AhT)+AIp);this.Jx.L(A.
jb.Text);this.D0.H(Aot);this.D0.KS(true);this.D0.R(A.aaR(A.acf.AGc));this.D0.L(A.
jb.Text);this.J(this.Jx,0);this.J(this.D0,0);this.Jx.S(A.aaL(A.fl.Ak));this.D0.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dd;this.Jx._Done();this.D0._Done(
);C.Dd._Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this);this.Jx._ReInit(
);this.D0._ReInit();this.Jx.R(A.aaR(A.acf.AhT)+AIp);this.D0.R(A.aaR(A.acf.AGc));
this.Jx.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dd._Mark.call(this,D);if((B=this.Jx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D0
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TX={I_:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);C.CH._Init.call(this.
I_={I:this},0);this.__proto__=C.TX;this.I_.H(AIq);this.I_.R((((A.aaR(A.acf.RP)+AcS
)+AIr)+A.aaR(A.acf.Baj))+O9);this.I_.A6(0x12);this.I_.L(A.jb.Text);this.J(this.I_
,0);this.I_.S(A.aaL(A.fl.Af));this.I_.A2(A.aaL(A.fl.Ak));this.I_.Cu(A.aaL(A.fl.Bh
));},_Done:function(){this.__proto__=C.Dd;this.I_._Done();C.Dd._Done.call(this);
},_ReInit:function(){C.Dd._ReInit.call(this);this.I_._ReInit();this.I_.R((((A.aaR(
A.acf.RP)+AcS)+AIr)+A.aaR(A.acf.Baj))+O9);this.I_.S(A.aaL(A.fl.Af));this.I_.A2(A.
aaL(A.fl.Ak));this.I_.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dd._Mark.call(
this,D);if((B=this.I_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APH={Lm:null,Kt:null,CP:function(){this.A$x();},Init:function(aArg){this.A$x(
);},A$x:function(){this.Lm.R(A._GetAutoObject(A.acj.DU).Af4());this.Kt.R(A._GetAutoObject(
A.acj.DU).Aat());},_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lm={I:this},0);C.CH._Init.call(this.Kt={I:this},0);this.__proto__=C.APH;
this.Lm.H(AY2);this.Lm.A6(0x12);this.Lm.L(A.jb.Text);this.Kt.H(Aot);this.Kt.L(A.
jb.Text);this.J(this.Lm,0);this.J(this.Kt,0);this.Lm.S(A.aaL(A.fl.Af));this.Kt.S(
A.aaL(A.fl.Af));this.Kt.A2(A.aaL(A.fl.Ak));this.Kt.Cu(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dd;this.Lm._Done();this.Kt._Done();C.Dd.
_Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this);this.Lm._ReInit();
this.Kt._ReInit();this.Lm.S(A.aaL(A.fl.Af));this.Kt.S(A.aaL(A.fl.Af));this.Kt.A2(
A.aaL(A.fl.Ak));this.Kt.Cu(A.aaL(A.fl.Bh));this.CP();},_Mark:function(D){var B;C.
Dd._Mark.call(this,D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kt
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANg={Mm:null,Hq:null,H$:null,AP:null,A$:null,FW:0,Aaz:0,Ib:0,AiO:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hq.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hq.M[2]-1,0,this.Hq.M[2]+1,aSize[
1]]);this.Mm.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H$.H(this.Mm.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiO){this.H$.R(Rp);this.H$.L(A.jb.
Text);this.Mm.L(this.Background.AQ);}else{this.H$.R(A._GetAutoObject(A.Device.Converter
).S9(this.FW,2,true));this.H$.L(A._GetAutoObject(A.acj.DU).AzU(this.FW,this.Ib));
this.Mm.L(A._GetAutoObject(A.acj.DU).AzS(this.FW,this.Ib));}if(this.Aaz>0)this.Hq.
R(A._GetAutoObject(A.Device.Converter).Ak$(this.Aaz));else this.Hq.R(Rp);this.Hq.
L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mh=
this.AX.CF(Ad,1);var Aux=this.AX.Hv(Ad,24);var AKa=this.AX.CF(Ad,23);var Auy=this.
AX.Hv(Ad,19);this.Aaz=this.AX.CF(Ad,18);if((Aux>0)&&(Aux!==Auy)){var LD=A._GetAutoObject(
A.Device.Helper).L$(Aux,Auy);if(!!LD){this.AiO=false;this.FW=A._GetAutoObject(A.
acj.DU).AlA(LD,AKa,this.Aaz);}else{this.AiO=true;this.FW=0;}}else{this.AiO=true;
this.FW=0;}this.T(Mh.toFixed());this.Ib=this.AX.AmW(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mm={I:this},0);A.acg.Text.
_Init.call(this.Hq={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.ANg;this.V.H(O7);this.Mm.H(Atd);this.Hq.H(AIl);this.Hq.A6(0x12);this.Hq.R(Ro);
this.Hq.L(A.jb.Text);this.H$.H(AIm);this.H$.R(Ro);this.H$.L(A.jb.Text);this.AP.H(
Aor);this.AP.L(A.jb.Bc);this.A$.H(Aos);this.A$.L(A.jb.Bc);this.J(this.Mm,0);this.
J(this.Hq,0);this.J(this.H$,0);this.J(this.AP,0);this.J(this.A$,0);this.Hq.S(A.aaL(
A.fl.Af));this.H$.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mm._Done();this.Hq._Done();this.H$._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mm._ReInit(
);this.Hq._ReInit();this.H$._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hq.
S(A.aaL(A.fl.Af));this.H$.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M6={Ml:null,AP:null,A$:null,Gz:null,Xp:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Ml.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Ml.M);this.Background.H([].concat(this.Ml.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gz.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gz.M[2]-1,0,this.
Gz.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gz.L(this.V.AQ
);if(!!this.Xp&&(this.Xp!==5)){this.Ml.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
Xp));this.V.L(A._GetAutoObject(A.acj.Assessment).Xz(this.Xp));}else this.Ml.L(this.
Background.AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var
Mh=this.AX.CF(Ad,1);var LQ=this.AX.I6(Ad,13);var AlH=this.AX.I6(Ad,17);var AlQ=this.
AX.H2(Ad,11);var Aze=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.Helper).
L$(Aze,A._GetAutoObject(A.Device.Helper).Dv());this.Xp=A._GetAutoObject(A.Device.
Helper).AMm(LQ,AlQ,AlH);this.T(Mh.toFixed());if(AfR<100)this.Gz.R((AfR.toFixed()+
CQ)+A.aaR(A.acf.AL1));else this.Gz.R(A._GetAutoObject(A.acj.KL).ACX(Aze,A._GetAutoObject(
A.Device.Helper).Dv(),AIs));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
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
};C.ANe={AjA:null,N$:null,AP:null,A$:null,Js:null,AKs:0,A2Q:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N$.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AjA.H(this.N$.M);this.A$.H([this.N$.M[2]-1,0,this.N$.M[2]+1,aSize[1]]);
this.Js.H([this.N$.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Js.Df(this.V.AQ);if(this.AKs>0){this.AjA.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.A2Q));this.N$.L(A._GetAutoObject(A.acj.Assessment).Xz(this.A2Q));}else{
this.AjA.L(this.Background.AQ);this.N$.L(this.V.AQ);}},Ch:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){var Iz=this.AX.CF(Ad,0);var Mh=this.AX.CF(Ad,
1);this.AKs=this.AX.CF(Ad,5);this.A2Q=this.AX.I6(Ad,17);this.T(Mh.toFixed());if(
this.AKs>0)this.N$.R(A._GetAutoObject(A.Device.Converter).Ak2(this.AKs));else this.
N$.R(Rp);var Xo=A._GetAutoObject(A.Device.Helper).ZP(6);A._GetAutoObject(A.Device.
Device).SQ(Ad);var A0Z=A._GetAutoObject(A.Device.Helper).Bja(A._GetAutoObject(A.
Device.Device).Bt,9,Iz,Xo,0);this.Js.A9Z(A0Z.Get(3));this.Js.A91(A0Z.Get(2));this.
Js.A90(A0Z.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AjA={I:this},0);A.acg.Text._Init.call(this.N$={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},
0);C.Js._Init.call(this.Js={I:this},0);this.__proto__=C.ANe;this.N$.A6(0x12);this.
N$.R(Ro);this.N$.L(A.jb.Text);this.AP.H(Aor);this.AP.L(A.jb.Bc);this.A$.H(Aos);this.
A$.L(A.jb.Bc);this.Js.H(AY4);this.J(this.AjA,0);this.J(this.N$,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Js,0);this.N$.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AjA._Done();this.N$._Done();this.AP.
_Done();this.A$._Done();this.Js._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AjA._ReInit();this.N$._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Js._ReInit();this.N$.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Js={Afq:null,
ColoredCounterAttrSet:null,ACo:0,ACp:0,ACn:0,KT:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKl;var ALH;var AKR;var AlY=0;if(this.ACn>0){AKl=this.ACn.toFixed(
);AlY+=AKl.length;}else{AKl=AY5;AlY++;}if(this.ACp>0){ALH=this.ACp.toFixed();AlY+=
ALH.length;}else{ALH=Ayz;AlY++;}if(this.ACo>0){AKR=this.ACo.toFixed();AlY+=AKR.length;
}else{AKR=AIg;AlY++;}if(AlY<=4)this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Af));else
if(AlY<=5)this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Aht(A.aaL(A.fl.Bh));this.Afq.R(((((AY6+AKl)+AY7)+ALH)+AY8)+AKR);},A90:function(E
){if(this.ACo===E)return;this.ACo=E;this.Am();},A91:function(E){if(this.ACp===E)
return;this.ACp=E;this.Am();},A9Z:function(E){if(this.ACn===E)return;this.ACn=E;
this.Am();},Df:function(E){if(this.KT===E)return;this.KT=E;this.ColoredCounterAttrSet.
Ahq(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuU._Init.call(
this.Afq={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Js;this.H(AIt);this.Afq.AZ(0x3F);this.Afq.H(AIt);this.
Afq.R(Ro);this.ColoredCounterAttrSet.Bmh(A.jb.E1);this.ColoredCounterAttrSet.A9Q(
A.jb.H8);this.ColoredCounterAttrSet.A9P(A.jb.Gj);this.ColoredCounterAttrSet.Ahq(
A.jb.Text);this.KT=A.jb.Text;this.J(this.Afq,0);this.Afq.A9K(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Aht(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9M(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afq._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afq._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Aht(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANd={AtJ:null
,Acb:null,Acc:null,Acd:null,Js:null,AP:null,A$:null,Ea:null,Lt:null,AcA:null,KU:
null,KV:null,AJx:0,AJw:0,AJv:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acb.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcA.H(this.
Acb.M);this.A$.H([this.Acb.M[2]-1,0,this.Acb.M[2]+1,aSize[1]]);this.Acc.H([this.
Acb.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KU.H(this.Acc.M);this.Ea.H([this.
Acc.M[2]-1,0,this.Acc.M[2]+1,aSize[1]]);this.Acd.H([this.Acc.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KV.H(this.Acd.M);this.Lt.H([this.Acd.M[2]-1,0,this.Acd.
M[2]+1,aSize[1]]);this.Js.H([this.Acd.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Js.Df(this.V.AQ);this.Acb.L(A._GetAutoObject(A.acj.
Assessment).Qr(this.AJv));this.Acc.L(A._GetAutoObject(A.acj.Assessment).Qr(this.
AJw));this.Acd.L(A._GetAutoObject(A.acj.Assessment).Qr(this.AJx));this.AcA.L(A._GetAutoObject(
A.acj.Assessment).Xz(this.AJv));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xz(
this.AJw));this.KV.L(A._GetAutoObject(A.acj.Assessment).Xz(this.AJx));this.AcA.Z(
!this.AJv);this.KU.Z(!this.AJw);this.KV.Z(!this.AJx);this.Js.A9Z(this.AtJ.Get(3)
);this.Js.A91(this.AtJ.Get(2));this.Js.A90(this.AtJ.Get(1));},Ch:function(Ad){if(
!this.AX)return;this.Hs=Ad;if(!!this.AX){var Iz=this.AX.CF(Ad,0);var Mh=this.AX.
CF(Ad,1);this.T(Mh.toFixed());A._GetAutoObject(A.Device.Device).SQ(Ad);this.AJv=
A._GetAutoObject(A.Device.Helper).A2q(A._GetAutoObject(A.Device.Device).Bt,Iz,0);
this.AJw=A._GetAutoObject(A.Device.Helper).A2q(A._GetAutoObject(A.Device.Device).
Bt,Iz,-1);this.AJx=A._GetAutoObject(A.Device.Helper).A2q(A._GetAutoObject(A.Device.
Device).Bt,Iz,-2);this.AtJ=A._GetAutoObject(A.Device.Helper).A6P(A._GetAutoObject(
A.Device.Device).Bt,Iz,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Acb={I:this},0);A.acg.AL._Init.call(this.Acc={I:
this},0);A.acg.AL._Init.call(this.Acd={I:this},0);C.Js._Init.call(this.Js={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Lt={I:this
},0);A.acg.Text._Init.call(this.AcA={I:this},0);A.acg.Text._Init.call(this.KU={I:
this},0);A.acg.Text._Init.call(this.KV={I:this},0);this.__proto__=C.ANd;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Lt.L(A.jb.Bc);this.AcA.R(Aou
);this.KU.R(Aou);this.KV.R(Aou);this.J(this.Acb,0);this.J(this.Acc,0);this.J(this.
Acd,0);this.J(this.Js,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.Lt,0);this.J(this.AcA,0);this.J(this.KU,0);this.J(this.KV,0);this.AcA.S(A.
aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.AtJ=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acb._Done();this.Acc._Done();this.Acd._Done();this.Js._Done();this.AP.
_Done();this.A$._Done();this.Ea._Done();this.Lt._Done();this.AcA._Done();this.KU.
_Done();this.KV._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acb._ReInit();this.Acc._ReInit();this.Acd._ReInit();this.Js._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Lt._ReInit();this.AcA.
_ReInit();this.KU._ReInit();this.KV._ReInit();this.AcA.S(A.aaL(A.fl.Af));this.KU.
S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.AmZ={H6:null,Af6:false,Bl:function(aSize){var
B;this.H6.H([(aSize[0]-((B=this.H6.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H6.M[0]-10,40]);C.TH.Bl.call(this,aSize);},Ai:function(Ae){C.TH.Ai.call(
this,Ae);if(this.Af6)this.H6.Cv(1);else this.H6.Cv(0);},Kd:function(G){if(this.Af6
)C.TH.Kd.call(this,G);},J_:function(G){if(this.Af6)C.TH.J_.call(this,G);},Ts:function(
AI){C.TH.Ts.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.Af6=true;this.Zx(
true);}else{this.H(A.abI(this.M,40));this.Af6=false;this.Zx(false);}},_Init:function(
aArg){C.TH._Init.call(this,aArg);A.acg.Ap._Init.call(this.H6={I:this},0);this.__proto__=
C.AmZ;this.V.A6(0x11);this.H6.H(AHO);this.H6.Cv(0);this.J(this.H6,0);this.V.Cu(A.
aaL(A.fl.Bh));this.H6.Ax(A.aaL(A.ach.AqO));},_Done:function(){this.__proto__=C.TH;
this.H6._Done();C.TH._Done.call(this);},_ReInit:function(){C.TH._ReInit.call(this
);this.H6._ReInit();this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TH._Mark.
call(this,D);if((B=this.H6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AGb={_Init:function(aArg){C.Axo._Init.call(this,aArg);this.__proto__=C.AGb;}
,_className:"Application::OptionsOverlaySeparator"};C.AkI={DK:A.jV,Bw:true,_Init:
function(aArg){C.Axo._Init.call(this,aArg);this.__proto__=C.AkI;},_className:"Application::OptionsOverlayNode"
};C.Zz={AR:null,_Init:function(aArg){C.AkI._Init.call(this,aArg);this.__proto__=
C.Zz;},_Mark:function(D){var B;C.AkI._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANJ={Ai:function(Ae){C.OX.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(
this.Hl){FS=A.jb.Text;GY=A.jb.Bm;}this.Background.L(FS);this.V.L(GY);},_Init:function(
aArg){C.OX._Init.call(this,aArg);this.__proto__=C.ANJ;},_className:"Application::DarkThemeTextItem"
};C.OX={Background:null,BU:null,V:null,Aqv:0,Hl:false,Init:function(aArg){},Bl:function(
aSize){C.Hi.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BU.H(A.abK(this.BU.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hi.Ai.call(this,Ae);this.BU.L(this.Aqv);},T:function(E){if(this.DK===E)return;
this.DK=E;this.V.R(E);},Bi:function(E){if(this.Hl===E)return;this.Hl=E;this.Am();
},ArL:function(E){if(this.Aqv===E)return;this.Aqv=E;this.Am();},_Init:function(aArg
){C.Hi._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
BU._Init.call(this.BU={I:this},0);C.CH._Init.call(this.V={I:this},0);this.__proto__=
C.OX;this.H(BD);this.Background.H(AIu);this.BU.H(BD);this.BU.Nm(2);this.BU.L(A.jb.
Ri);this.V.H(AY9);this.Aqv=A.jb.Ri;this.J(this.Background,0);this.J(this.BU,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);this.BU._Done();this.V._Done();C.Hi._Done.call(this);},_ReInit:function(){C.Hi.
_ReInit.call(this);this.Background._ReInit();this.BU._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.V.Cu(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APK={Es:null,IO:null
,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.Es={
I:this},0);A.acg.Text._Init.call(this.IO={I:this},0);this.__proto__=C.APK;this.H(
O6);this.Background.H(O6);this.Es.H(AIv);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11
);this.Es.L(A.jb.Text);this.IO.AZ(0x3F);this.IO.H(AIw);this.IO.Hn(5);this.IO.A6(
0x14);this.IO.R(A.aaR(A.acf.AGV));this.IO.L(A.jb.Text);this.J(this.Es,0);this.J(
this.IO,0);this.Es.S(A.aaL(A.fl.Af));this.IO.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.IO._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.IO._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.IO.R(A.aaR(A.acf.AGV));this.Es.S(A.aaL(A.fl.Af));this.IO.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Sp:null,Sq:null,AeE:null,Ag8:null,QM:null
,KT:0,LastTemperature:0,AqB:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Sp.Ax(A.aaL(A.ach.AvJ));this.Sq.Ax(A.aaL(A.ach.AvJ));}break;case 2:{this.Sp.Ax(A.
aaL(A.ach.AvM));this.Sq.Ax(A.aaL(A.ach.AvM));}break;default:{this.Sp.Ax(A.aaL(A.
ach.Aez));this.Sq.Ax(A.aaL(A.ach.Aez));}}this.Sp.L(A._GetAutoObject(A.acj.Assessment
).Qr(this.AqB));var ApO;if(this.IsWatch)ApO=A.aaL(A.ach.AQO);else if(this.IsFever
){ApO=A.aaL(A.ach.AQN);switch(A._GetAutoObject(A.Device.Converter).Ajn(this.LastTemperature
,this.AnimalType)){case 3:this.QM.L(A.jb.Gj);break;case 2:this.QM.L(A.jb.H8);break;
case 1:this.QM.L(A.jb.E1);break;case 0:this.QM.L(A.jb.Afu);break;default:;}}else
if(this.IsAlarm){ApO=A.aaL(A.ach.AQM);if(!this.AqB||(this.AqB===5))this.QM.L(A.jb.
Gj);else this.QM.L(0xFF000000);}else ApO=null;this.AeE.Ax(ApO);this.Ag8.Ax(ApO);
this.QM.Ax(ApO);if(A._GetAutoObject(A.acj.Assessment).Qr(this.AqB)===A.jb.E1)this.
Sq.L(this.KT);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AE_:function(E){if(this.AqB===E)return;this.AqB=E;this.Am();},Df:function(
E){if(this.KT===E)return;this.KT=E;this.Am();},Ae7:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uq:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae3:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae9:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E5:function(){this.EC(0);this.AE_(0);this.Ae3(false);this.Uq(false
);this.Ae7(false);this.Ae9(0);this.Df(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Sp={I:this},0);A.acg.Ap._Init.call(
this.Sq={I:this},0);A.acg.Ap._Init.call(this.AeE={I:this},0);A.acg.Ap._Init.call(
this.Ag8={I:this},0);A.acg.Ap._Init.call(this.QM={I:this},0);this.__proto__=C.DS;
this.H(Alj);this.Sp.AZ(0x3F);this.Sp.H(Alj);this.Sp.L(A.jb.CJ);this.Sp.A6(0x12);
this.Sp.Cv(0);this.Sq.AZ(0x3F);this.Sq.H(Alj);this.Sq.L(0xFF000000);this.Sq.A6(0x12
);this.Sq.Cv(1);this.AeE.AZ(0x3F);this.AeE.H(Alj);this.AeE.L(0xFF000000);this.AeE.
Cv(0);this.Ag8.AZ(0x3F);this.Ag8.H(Alj);this.Ag8.Cv(1);this.QM.AZ(0x3F);this.QM.
H(Alj);this.QM.L(A.jb.CS);this.QM.Cv(2);this.KT=A.jb.Text;this.J(this.Sp,0);this.
J(this.Sq,0);this.J(this.AeE,0);this.J(this.Ag8,0);this.J(this.QM,0);this.Sp.Ax(
A.aaL(A.ach.Aez));this.Sq.Ax(A.aaL(A.ach.Aez));},_Done:function(){this.__proto__=
A.Core.P;this.Sp._Done();this.Sq._Done();this.AeE._Done();this.Ag8._Done();this.
QM._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Sp._ReInit();this.Sq._ReInit();this.AeE._ReInit();this.Ag8._ReInit();
this.QM._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.ANa={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(!!this.AX){var BAm=this.AX.H2(
Ad,12);var ByE=this.AX.Sl(Ad,15);this.Abe.R(A._GetAutoObject(A.Device.Helper).L$(
ByE,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sr.Z(BAm);this.Am();
}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=C.ANa;},_className:
"Application::CalfListAlarmItem"};C.ADo={D0:null,Mu:null,_Init:function(aArg){C.
TY._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.Mu={I:this},0);this.__proto__=C.ADo;this.D0.H(Aot);this.D0.KS(true);this.
D0.R(A.aaR(A.acf.A56));this.D0.L(A.jb.Text);this.Mu.H(AY_);this.Mu.I$(false);this.
Mu.L(A.jb.Text);this.Mu.A6(0x12);this.J(this.D0,-2);this.J(this.Mu,0);this.D0.S(
A.aaL(A.fl.Ak));this.Mu.Ax(A.aaL(A.ach.ADN));},_Done:function(){this.__proto__=C.
TY;this.D0._Done();this.Mu._Done();C.TY._Done.call(this);},_ReInit:function(){C.
TY._ReInit.call(this);this.D0._ReInit();this.Mu._ReInit();this.D0.R(A.aaR(A.acf.
A56));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TY._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kl={Background:null,BU:
null,ACP:0,AB4:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
ACP);this.BU.L(this.AB4);},AwK:function(E){if(this.ACP===E)return;this.ACP=E;this.
Am();},AE2:function(E){if(this.AB4===E)return;this.AB4=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BU={I:this},0);this.__proto__=C.Kl;this.H(Aov);this.
Background.AZ(0x3C);this.Background.H(Aov);this.Background.Cv(1);this.BU.AZ(0x3C
);this.BU.H(Aov);this.ACP=A.jb.E1;this.AB4=A.jb.Text;this.J(this.Background,0);this.
J(this.BU,0);this.Background.Ax(A.aaL(A.ach.Kl));this.BU.Ax(A.aaL(A.ach.Kl));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BU._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BU._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmH={Q:null,Ps:
null,A7t:false,Bl:function(aSize){C.Mq.Bl.call(this,aSize);this.V.H([].concat(this.
Ps.M[2]-this.V.Text.Jc,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mq.Ai.call(this
,Ae);this.Ps.L(this.V.AQ);},AwP:function(E){if(this.A7t===E)return;this.A7t=E;if(
E)this.Ps.R(AY$);else this.Ps.R(AIx);},IC:function(G){var F;if(!!this.Q)this.AwP((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.IC],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.IC],E,0);if(!!E)
A.pe([this,this.IC],this);},_Init:function(aArg){C.Mq._Init.call(this,aArg);A.acg.
Text._Init.call(this.Ps={I:this},0);this.__proto__=C.AmH;this.Ps.AZ(0x34);this.Ps.
H(UW);this.Ps.R(AIx);this.J(this.Ps,0);this.Ps.S(A.aaL(A.fl.AOD));},_Done:function(
){this.__proto__=C.Mq;this.Ps._Done();C.Mq._Done.call(this);},_ReInit:function(){
C.Mq._ReInit.call(this);this.Ps._ReInit();},_Mark:function(D){var B;C.Mq._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ps)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AO2={DX:function(G){C.Kq.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(4));},_Init:function(aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.AO2;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Du:function(){return 3;},C6:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BS(aIndex);},DZ:function(A7){return A7;},H3:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APL={Go:null,Ll:null,YR:null,Init:function(aArg){this.Ll.R(A._GetAutoObject(
A.acj.Temperature).AlM());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Go={I:this},0);A.acg.Text._Init.call(this.Ll={I:this},0);A.
acg.Text._Init.call(this.YR={I:this},0);this.__proto__=C.APL;this.Background.L(A.
jb.Text);this.Go.H(AIy);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date));this.Go.L(
A.jb.Bm);this.Ll.H(AIz);this.Ll.A6(0x12);this.Ll.L(A.jb.Bm);this.YR.H(AZa);this.
YR.A6(0x12);this.YR.R(A.aaR(A.acf.Bs));this.YR.L(A.jb.Bm);this.J(this.Go,0);this.
J(this.Ll,0);this.J(this.YR,0);this.Go.S(A.aaL(A.fl.Af));this.Ll.S(A.aaL(A.fl.Af
));this.YR.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Go._Done();this.Ll._Done();this.YR._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Go._ReInit();this.Ll._ReInit();this.YR._ReInit(
);this.Go.R(A.aaR(A.acf.Date));this.YR.R(A.aaR(A.acf.Bs));this.Go.S(A.aaL(A.fl.Af
));this.Ll.S(A.aaL(A.fl.Af));this.YR.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ll)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TB={Lf:null,AjR:false,Init:function(
aArg){var B;A.zX([this,this.BbN],[B=A._GetAutoObject(A.Device.Device),B.AEA,B.AIP
],0);this.AGO(this);A.pe([this,this.AoA],this);},DE:function(G){var D5=(A.Core.BK.
isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Oo(this);break;case 7:this.MZ(
this);break;default:D5.NL=true;}},CC:function(G){var B;if(!!this.Lf)this.Lf.CC(this
);C.AB.CC.call(this,G);},E4:function(G){var B;if(!!this.Lf)this.Lf.E4(this);C.AB.
E4.call(this,G);},Anp:function(G){A._GetAutoObject(C.A8).FB();},AGO:function(G){
var B;if(!!this.Lf){this.Lf.E4(this);this.HO(this.Lf);}if(this.AjR)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMt,0);break;case 1:this.Lf=A.
_NewObject(C.AMu,0);break;case 3:this.Lf=A._NewObject(C.AMs,0);break;case 2:this.
Lf=A._NewObject(C.AMv,0);break;default:throw new Error(AyA);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lf=A._NewObject(C.AMw,0);break;case 1:this.Lf=A.
_NewObject(C.AMF,0);break;case 3:this.Lf=A._NewObject(C.AMz,0);break;case 2:this.
Lf=A._NewObject(C.AMK,0);break;default:throw new Error(AyA);}this.HP(this);this.
J(this.Lf,0);this.Lf.H(Ff);this.Lf.Zu([this,this.A0L]);this.Lf.CC(this);this.Bb(
this.Lf);},BbN:function(s){this.AGO(s);},Boa:function(G){A._GetAutoObject(A.Device.
Device).AeX(0);},ATZ:function(G){A._GetAutoObject(A.Device.Device).AeX(1);},ATY:
function(G){A._GetAutoObject(A.Device.Device).AeX(3);},AT0:function(G){A._GetAutoObject(
A.Device.Device).AeX(2);},HP:function(G){this.N.C1(A.aaL(A.ach.E2));this.N.Hy(A.
jV);this.N.CE=[this,this.Anp];this.N.AFe(A.aaL(A.fl.Ak));},AoA:function(s){this.
HP(s);},BmX:function(E){if(this.AjR===E)return;this.AjR=E;A.pe([this,this.BbN],this
);},A_2:function(G){this.BmX(!this.AjR);},Bod:function(G){A._GetAutoObject(A.Device.
Device).A3(31,true,A.jV,0,null);},MZ:function(G){},BGZ:function(s){this.MZ(s);},
Oo:function(G){},BGY:function(s){this.Oo(s);},Be$:function(G){var FQ=A._GetAutoObject(
A.Device.Device).D9;FQ=FQ+1;if(FQ>=4)FQ=0;A._GetAutoObject(A.Device.Device).AeX(
FQ);},BBg:function(G){var FQ=A._GetAutoObject(A.Device.Device).D9;FQ=FQ-1;if(FQ<
0)FQ=3;A._GetAutoObject(A.Device.Device).AeX(FQ);},Af$:function(G){},A0L:function(
s){this.Af$(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TB;this.Background.H(Ce);this.N.Z(true);this.N.OQ(true);this.N.OR(true);this.Dr(
C.APA);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lf)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Dn:null,CC:function(G){},AIO:function(s){this.CC(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyJ:function(s){
this.E4(s);},Zu:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Dn.BL=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BK._Init.call(this.Dn={I:this},0);this.__proto__=
C.D9;this.H(UZ);this.AttrSet.A9Q(A.jb.Gj);this.AttrSet.A9P(A.jb.H8);this.AttrSet.
Ahq(A.jb.Text);this.Dn.Filter=1;this.AttrSet.Aht(A.aaL(A.fl.Ak));this.AttrSet.A9M(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Dn._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Dn._ReInit();this.AttrSet.Aht(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMw={RT:
null,AaW:null,TA:null,Tz:null,RY:null,QE:null,RZ:null,RW:null,RX:null,RU:null,CP:
function(){var B;this.RT.Ch(this);this.AaW.Ch(this);this.TA.Ch(this);this.Tz.Ch(
this);this.RY.Ch(this);this.QE.Ch(this);this.RZ.Ch(this);this.RW.Ch(this);this.RX.
Ch(this);this.RU.Ch(this);},GH:function(G){C.R0.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RT.Z(true);this.AaW.Z(false);
this.RW.Z(false);this.RX.Z(false);this.RU.Z(false);this.RY.Z(true);this.QE.Z(true
);this.RZ.Z(true);}break;case 1:{this.RT.Z(false);this.AaW.Z(true);this.RW.Z(true
);this.RX.Z(true);this.RU.Z(true);this.RY.Z(false);this.QE.Z(false);this.RZ.Z(false
);}break;default:A.ab5("%s%e",Alf,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MS],this);},_Init:function(aArg){C.R0._Init.call(this,aArg);C.
RT._Init.call(this.RT={I:this},0);C.AMr._Init.call(this.AaW={I:this},0);C.TA._Init.
call(this.TA={I:this},0);C.Tz._Init.call(this.Tz={I:this},0);C.RY._Init.call(this.
RY={I:this},0);C.QE._Init.call(this.QE={I:this},0);C.RZ._Init.call(this.RZ={I:this
},0);C.RW._Init.call(this.RW={I:this},0);C.RX._Init.call(this.RX={I:this},0);C.RU.
_Init.call(this.RU={I:this},0);this.__proto__=C.AMw;this.RT.H(BD);this.RT.Aj(true
);this.RT.Bi(false);this.AaW.H(IV);this.AaW.Aj(true);this.AaW.Bi(false);this.TA.
H(Qd);this.TA.Aj(true);this.TA.Bi(true);this.Tz.H(Aad);this.Tz.Aj(true);this.Tz.
Bi(false);this.RY.H(Alh);this.RY.Aj(true);this.RY.Bi(true);this.QE.H(Aop);this.QE.
Aj(true);this.QE.Bi(false);this.RZ.H(As9);this.RZ.Aj(true);this.RZ.Bi(true);this.
RW.H(Xf);this.RW.Aj(true);this.RW.Bi(true);this.RX.H(AZb);this.RX.Aj(true);this.
RX.Bi(false);this.RU.H(AZc);this.RU.Aj(true);this.RU.Bi(true);this.J(this.RT,0);
this.J(this.AaW,0);this.J(this.TA,0);this.J(this.Tz,0);this.J(this.RY,0);this.J(
this.QE,0);this.J(this.RZ,0);this.J(this.RW,0);this.J(this.RX,0);this.J(this.RU,
0);},_Done:function(){this.__proto__=C.R0;this.RT._Done();this.AaW._Done();this.
TA._Done();this.Tz._Done();this.RY._Done();this.QE._Done();this.RZ._Done();this.
RW._Done();this.RX._Done();this.RU._Done();C.R0._Done.call(this);},_ReInit:function(
){C.R0._ReInit.call(this);this.RT._ReInit();this.AaW._ReInit();this.TA._ReInit();
this.Tz._ReInit();this.RY._ReInit();this.QE._ReInit();this.RZ._ReInit();this.RW.
_ReInit();this.RX._ReInit();this.RU._ReInit();this.CP();},_Mark:function(D){var B;
C.R0._Mark.call(this,D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Tz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMK={AkU:function(L4){if(!L4)return;var Fy=A._NewObject(
A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CW(HV);var Ac_=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fy.CW(Ac_);L4.Bk(Fy);
},AD2:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pk=A.
_GetAutoObject(A.Device.Device).Bt.B9();if(Pk<2)return false;var BCH=A._GetAutoObject(
A.Device.Device).Bt.Hv(0,6);var BCI=A._GetAutoObject(A.Device.Device).Bt.Hv(Pk-1
,6);var A2f=A._NewObject(A.Core.Bs,0);A2f.Initialize(BCH);var A4l=A._NewObject(A.
Core.Bs,0);A4l.Initialize(BCI);if((A2f.AbY()!==A4l.AbY())||(A2f.Year!==A4l.Year)
)return true;else return false;},_Init:function(aArg){C.AaY._Init.call(this,aArg
);this.__proto__=C.AMK;this.ATs(C.AHm);this.ATt(C.ADu);this.ATi(C.QE);this.ArR(A.
aaR(A.acf.AVW));this.Dk(A.aaR(A.acf.Akm));},_ReInit:function(){C.AaY._ReInit.call(
this);this.ArR(A.aaR(A.acf.AVW));this.Dk(A.aaR(A.acf.Akm));},_className:"Application::AnimalWeights"
};C.AMF={AkU:function(L4){if(!L4)return;var Fy=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CW(HV);var ABh=A._NewObject(A.Device.Int32FilterCriterion
,0);ABh.Initialize(7,2,0,true);Fy.CW(ABh);L4.Bk(Fy);},AD2:function(){return A._GetAutoObject(
A.Device.Device).Bt.B9()>0;},_Init:function(aArg){C.AaY._Init.call(this,aArg);this.
__proto__=C.AMF;this.ATs(C.AVh);this.ATt(C.APL);this.ATi(C.TA);this.ArR(A.aaR(A.
acf.A7R));this.Dk(A.aaR(A.acf.Art));},_ReInit:function(){C.AaY._ReInit.call(this
);this.ArR(A.aaR(A.acf.A7R));this.Dk(A.aaR(A.acf.Art));},_className:"Application::AnimalTemperatures"
};C.AUn={VD:null,VE:null,XY:null,AgI:null,Kz:null,AP:null,A$:null,Ea:null,Lt:null
,AnU:null,KU:null,KV:null,ZM:null,ZN:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kz.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VD.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VD.M[2]-1,0,this.VD.M[2]+1,aSize[1]]);this.VE.H([this.VD.M[2],0,this.VD.M[2]+22,
aSize[1]]);this.Lt.H([this.VE.M[2]-1,0,this.VE.M[2]+1,aSize[1]]);this.XY.H([this.
VE.M[2],0,this.VE.M[2]+22,aSize[1]]);this.AnU.H([this.XY.M[2]-1,0,this.XY.M[2]+1
,aSize[1]]);this.AgI.H([this.XY.M[2],0,aSize[0],aSize[1]]);this.KU.H(this.VD.M);
this.KV.H(this.VE.M);this.ZM.H(this.XY.M);this.ZN.H(this.AgI.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Kz.L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;if(!!this.AX){var AlD=this.AX.Hv(Ad,6);var A1x=this.AX.I6(Ad,3);var A2b=
this.AX.I6(Ad,2);var A2a=this.AX.I6(Ad,5);var A3$=this.AX.I6(Ad,4);this.T(A._GetAutoObject(
A.acj.KL).ACW(AlD));this.Kz.R(A._GetAutoObject(A.acj.KL).A6J(AlD));this.VD.L(A._GetAutoObject(
A.acj.Assessment).Qr(A1x));this.VE.L(A._GetAutoObject(A.acj.Assessment).Qr(A2b));
this.XY.L(A._GetAutoObject(A.acj.Assessment).Qr(A2a));this.AgI.L(A._GetAutoObject(
A.acj.Assessment).Qr(A3$));this.KU.L(A._GetAutoObject(A.acj.Assessment).Xz(A1x));
this.KV.L(A._GetAutoObject(A.acj.Assessment).Xz(A2b));this.ZM.L(A._GetAutoObject(
A.acj.Assessment).Xz(A2a));this.ZN.L(A._GetAutoObject(A.acj.Assessment).Xz(A3$));
this.KU.Z(A1x===5);this.KV.Z(A2b===5);this.ZM.Z(A2a===5);this.ZN.Z(A3$===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
VD={I:this},0);A.acg.AL._Init.call(this.VE={I:this},0);A.acg.AL._Init.call(this.
XY={I:this},0);A.acg.AL._Init.call(this.AgI={I:this},0);A.acg.Text._Init.call(this.
Kz={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Lt={I:this},0);A.acg.AL._Init.call(this.AnU={I:this},0);A.acg.Text._Init.call(this.
KU={I:this},0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(this.
ZM={I:this},0);A.acg.Text._Init.call(this.ZN={I:this},0);this.__proto__=C.AUn;this.
V.H(O7);this.VD.H(AZd);this.VE.H(AZe);this.XY.H(AZf);this.AgI.H(AZg);this.Kz.R(Ro
);this.Kz.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lt.L(A.jb.Bc);this.AnU.L(A.jb.Bc);this.KU.H(AZh);this.KU.R(Rp);this.KV.H(AZi
);this.KV.R(Rp);this.ZM.H(AZj);this.ZM.R(Rp);this.ZN.H(AZk);this.ZN.R(Rp);this.J(
this.VD,0);this.J(this.VE,0);this.J(this.XY,0);this.J(this.AgI,0);this.J(this.Kz
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Lt,0);this.
J(this.AnU,0);this.J(this.KU,0);this.J(this.KV,0);this.J(this.ZM,0);this.J(this.
ZN,0);this.Kz.S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af
));this.ZM.S(A.aaL(A.fl.Af));this.ZN.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VD._Done();this.VE._Done();this.XY._Done();this.AgI._Done(
);this.Kz._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Lt._Done(
);this.AnU._Done();this.KU._Done();this.KV._Done();this.ZM._Done();this.ZN._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VD._ReInit(
);this.VE._ReInit();this.XY._ReInit();this.AgI._ReInit();this.Kz._ReInit();this.
AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Lt._ReInit();this.AnU._ReInit(
);this.KU._ReInit();this.KV._ReInit();this.ZM._ReInit();this.ZN._ReInit();this.Kz.
S(A.aaL(A.fl.Af));this.KU.S(A.aaL(A.fl.Af));this.KV.S(A.aaL(A.fl.Af));this.ZM.S(
A.aaL(A.fl.Af));this.ZN.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VE)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lt)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APJ={Go:null,YX:null,YT:null,YU:null,YV:null,YW:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Go={I:this},0);A.acg.Text._Init.call(this.YX={I:this},0);A.acg.Text._Init.call(this.
YT={I:this},0);A.acg.Text._Init.call(this.YU={I:this},0);A.acg.Text._Init.call(this.
YV={I:this},0);A.acg.Text._Init.call(this.YW={I:this},0);this.__proto__=C.APJ;this.
Background.L(A.jb.Text);this.Go.H(AIy);this.Go.A6(0x11);this.Go.R(A.aaR(A.acf.Date
));this.Go.L(A.jb.Bm);this.YX.H(AIq);this.YX.A6(0x12);this.YX.R(A.aaR(A.acf.Bs));
this.YX.L(A.jb.Bm);this.YT.H(AZl);this.YT.A6(0x12);this.YT.R(A.aaR(A.acf.AUp));this.
YT.L(A.jb.Bm);this.YU.H(AZm);this.YU.A6(0x12);this.YU.R(A.aaR(A.acf.AUq));this.YU.
L(A.jb.Bm);this.YV.H(AZn);this.YV.A6(0x12);this.YV.R(A.aaR(A.acf.AOz));this.YV.L(
A.jb.Bm);this.YW.H(AZo);this.YW.A6(0x12);this.YW.R(A.aaR(A.acf.ANA));this.YW.L(A.
jb.Bm);this.J(this.Go,0);this.J(this.YX,0);this.J(this.YT,0);this.J(this.YU,0);this.
J(this.YV,0);this.J(this.YW,0);this.Go.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af
));this.YT.S(A.aaL(A.fl.Af));this.YU.S(A.aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));
this.YW.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Go._Done();
this.YX._Done();this.YT._Done();this.YU._Done();this.YV._Done();this.YW._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Go._ReInit(
);this.YX._ReInit();this.YT._ReInit();this.YU._ReInit();this.YV._ReInit();this.YW.
_ReInit();this.Go.R(A.aaR(A.acf.Date));this.YX.R(A.aaR(A.acf.Bs));this.YT.R(A.aaR(
A.acf.AUp));this.YU.R(A.aaR(A.acf.AUq));this.YV.R(A.aaR(A.acf.AOz));this.YW.R(A.
aaR(A.acf.ANA));this.Go.S(A.aaL(A.fl.Af));this.YX.S(A.aaL(A.fl.Af));this.YT.S(A.
aaL(A.fl.Af));this.YU.S(A.aaL(A.fl.Af));this.YV.S(A.aaL(A.fl.Af));this.YW.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Go)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
YT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMz={AkU:function(L4){if(!L4)return;
var Fy=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CW(HV);var
AA0=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA0.Initialize(3,5,0,true
);Fy.CW(AA0);L4.Bk(Fy);},AD2:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B9()>0;},_Init:function(
aArg){C.AaY._Init.call(this,aArg);this.__proto__=C.AMz;this.ATs(C.AUn);this.ATt(
C.APJ);this.ATi(C.Tz);this.ArR(A.aaR(A.acf.Axt));this.Dk(A.aaR(A.acf.Ano));},_ReInit:
function(){C.AaY._ReInit.call(this);this.ArR(A.aaR(A.acf.Axt));this.Dk(A.aaR(A.acf.
Ano));},_className:"Application::AnimalRatings"};C.IG={B6:null,Y:null,V:null,Uu:
5,T:function(E){C.I3.T.call(this,E);this.V.R(E);},Df:function(E){C.I3.Df.call(this
,E);this.V.L(E);},S:function(E){if(this.B6===E)return;this.B6=E;this.V.S(this.B6
);},AuY:function(G){var B;var ND=(A.Core.Y.isPrototypeOf(G)?G:null);if(!ND)return;
if(((B=ND.Dc(0x1))[2]-B[0])>((B=ND.M)[2]-B[0]))this.S(A.aaL(A.fl.Il));},Ku:function(
E){if(this.Uu===E)return;this.Uu=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AAU:function(G){A.pe([this,this.AuY],this);},_Init:function(aArg){C.I3._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IG;this.Y.AZ(0x3F);this.Y.H(AIA);this.Y.A_H(5);this.
Y.JT(3);this.V.AZ(0x34);this.V.H(Aaf);this.V.I$(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.Em=[this,this.
AAU];this.V.S(A.aaL(A.fl.Kp));},_Done:function(){this.__proto__=C.I3;this.Y._Done(
);this.V._Done();C.I3._Done.call(this);},_ReInit:function(){C.I3._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kp));},_Mark:function(D){
var B;C.I3._Mark.call(this,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RT={AfR:0,Ai:function(Ae){C.FA.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RP));if(this.AfR>=0)this.Kw((this.AfR.toFixed(
)+CQ)+A.aaR(A.acf.Km));else this.Kw(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.
Ch.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfR=-1;
else this.AfR=A._GetAutoObject(A.Device.Helper).W.RP();this.Am();},_Init:function(
aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RT;},_className:"Application::AnimalInfoItemAge"
};C.RY={A4Q:0,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afv));if(
this.A4Q>0)this.Kw((A._GetAutoObject(A.Device.Converter).Ak$(this.A4Q)+CQ)+A._GetAutoObject(
A.acj.DU).Af4());else this.Kw(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(
this,G);this.A4Q=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RY;},_className:
"Application::AnimalInfoItemWeight"};C.TA={Y:null,Ei:null,Ey:null,Fe:null,P0:null
,Fd:null,P1:null,Aji:0,Pj:0,CP:function(){this.Am();},Ai:function(Ae){C.JK.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Bia));this.Fe.R(this.Aji.toFixed());this.Fd.R(this.Pj.
toFixed());if(!!this.Aji||!!this.Pj)this.P1.R(AZp+(this.Aji+this.Pj).toFixed());
else this.P1.R(A.aaR(A.acf.ASo));},Ch:function(G){C.JK.Ch.call(this,G);var Ak1;Ak1=
A._GetAutoObject(A.Device.Helper).Bjb(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Aji=Ak1.Get(2);this.Pj=Ak1.Get(1);this.Am();},Df:
function(E){C.JK.Df.call(this,E);this.P0.L(E);this.P1.L(E);},AsP:function(G){if(
!!this.Aji||!!this.Pj){this.Fe.Z(true);this.P0.Z(true);this.Fd.Z(true);}else{this.
Fe.Z(false);this.P0.Z(false);this.Fd.Z(false);}this.Ei.H(this.Fe.M);this.Ei.Z(this.
Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq());},AuY:function(G){var B;var
ND=(A.Core.Y.isPrototypeOf(G)?G:null);if(!ND)return;if(((B=ND.Dc(0x1))[2]-B[0])>((
B=ND.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.P0.S(A.aaL(A.fl.Ak));this.Fe.S(
A.aaL(A.fl.Ak));this.P1.S(A.aaL(A.fl.Ak));}},AAU:function(G){A.pe([this,this.AuY
],this);},_Init:function(aArg){C.JK._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.Ey={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
P0={I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
P1={I:this},0);this.__proto__=C.TA;this.Y.H(AyB);this.Y.BnU(0);this.Y.JT(3);this.
Ei.H(AZq);this.Ei.L(A.jb.H8);this.Ey.H(Ayy);this.Ey.L(A.jb.Gj);this.Fe.AZ(0x34);
this.Fe.H(Aaf);this.Fe.Hn(2);this.Fe.I$(true);this.Fe.R(U1);this.Fe.L(A.jb.Text);
this.Fe.Aj(true);this.P0.AZ(0x34);this.P0.H(Aaf);this.P0.I$(true);this.P0.R(AIh);
this.P0.L(A.jb.Text);this.P0.Aj(true);this.Fd.AZ(0x34);this.Fd.H(Aaf);this.Fd.Hn(
2);this.Fd.I$(true);this.Fd.R(U1);this.Fd.L(A.jb.Bm);this.Fd.Aj(true);this.P1.AZ(
0x34);this.P1.H(Aaf);this.P1.I$(true);this.P1.R(Ro);this.P1.L(A.jb.Text);this.P1.
Aj(true);this.J(this.Y,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.Fe,0);
this.J(this.P0,0);this.J(this.Fd,0);this.J(this.P1,0);this.Y.Em=[this,this.AAU];
this.Fe.Q7([this,this.AsP]);this.Fe.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));
this.Fd.Q7([this,this.AsP]);this.Fd.S(A.aaL(A.fl.Af));this.P1.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JK;this.Y._Done();this.Ei._Done();this.Ey._Done(
);this.Fe._Done();this.P0._Done();this.Fd._Done();this.P1._Done();C.JK._Done.call(
this);},_ReInit:function(){C.JK._ReInit.call(this);this.Y._ReInit();this.Ei._ReInit(
);this.Ey._ReInit();this.Fe._ReInit();this.P0._ReInit();this.Fd._ReInit();this.P1.
_ReInit();this.Fe.S(A.aaL(A.fl.Af));this.P0.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.
fl.Af));this.P1.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(D){var B;C.JK._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fe
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QE={FW:0,Ib:0
,A2F:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(AZr+A.aaR(A.acf.AHh));if(
this.A2F){this.Kw((A._GetAutoObject(A.Device.Converter).S9(this.FW,2,true)+CQ)+A.
_GetAutoObject(A.acj.DU).Aat());this.Background.L(A._GetAutoObject(A.acj.DU).AzS(
this.FW,this.Ib));this.Df(A._GetAutoObject(A.acj.DU).AzU(this.FW,this.Ib));}else{
this.Kw(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.Df(A.jb.Text);}},Ch:
function(G){C.FA.Ch.call(this,G);var LD=A._GetAutoObject(A.Device.Helper).L$(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LD){this.A2F=true;this.FW=A._GetAutoObject(A.acj.DU).AlA(LD,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2F=false;this.FW=0;}this.Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.QE;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tz={Y:null,FX:null,Ei:
null,Ey:null,MI:null,Fe:null,Fd:null,OZ:null,Aav:0,Aji:0,Pj:0,CP:function(){this.
Am();},Ai:function(Ae){C.JK.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axt));this.MI.R(
this.Aav.toFixed());this.Fe.R(this.Aji.toFixed());this.Fd.R(this.Pj.toFixed());}
,Ch:function(G){C.JK.Ch.call(this,G);var Ak1;Ak1=A._GetAutoObject(A.Device.Helper
).A6P(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Aav=Ak1.Get(3);this.Aji=Ak1.Get(2);this.Pj=Ak1.Get(1);this.Am();},AsP:
function(G){if((!!this.Aav||!!this.Aji)||!!this.Pj){this.MI.Z(true);this.Fe.Z(true
);this.Fd.Z(true);this.OZ.Z(false);}else{this.MI.Z(false);this.Fe.Z(false);this.
Fd.Z(false);this.OZ.Z(true);}this.FX.H(this.MI.M);this.FX.Z(this.MI.Fq());this.Ei.
H(this.Fe.M);this.Ei.Z(this.Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq()
);},AuY:function(G){var B;var ND=(A.Core.Y.isPrototypeOf(G)?G:null);if(!ND)return;
if(((B=ND.Dc(0x1))[2]-B[0])>((B=ND.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.Fe.
S(A.aaL(A.fl.Ak));this.MI.S(A.aaL(A.fl.Ak));}},AAU:function(G){A.pe([this,this.AuY
],this);},_Init:function(aArg){C.JK._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.Ei={
I:this},0);A.acg.AL._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MI={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
Fd={I:this},0);A.acg.Text._Init.call(this.OZ={I:this},0);this.__proto__=C.Tz;this.
Y.AZ(0x3F);this.Y.H(AyB);this.Y.A_H(5);this.Y.JT(3);this.FX.H(Aow);this.FX.L(A.jb.
E1);this.Ei.H(AZs);this.Ei.L(A.jb.H8);this.Ey.H(AZt);this.Ey.L(A.jb.Gj);this.MI.
AZ(0x3C);this.MI.H(Aaf);this.MI.Hn(2);this.MI.I$(true);this.MI.R(U1);this.MI.L(A.
jb.Text);this.MI.Aj(true);this.Fe.AZ(0x3C);this.Fe.H(Aaf);this.Fe.Hn(2);this.Fe.
I$(true);this.Fe.R(U1);this.Fe.L(A.jb.Text);this.Fe.Aj(true);this.Fd.AZ(0x3C);this.
Fd.H(Aaf);this.Fd.Hn(2);this.Fd.I$(true);this.Fd.R(U1);this.Fd.L(A.jb.Bm);this.Fd.
Aj(true);this.OZ.AZ(0x34);this.OZ.H(Aaf);this.OZ.I$(true);this.OZ.A6(0x11);this.
OZ.R(A.aaR(A.acf.ASo));this.OZ.L(A.jb.Text);this.OZ.Aj(true);this.OZ.Z(false);this.
J(this.Y,0);this.J(this.FX,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.MI
,0);this.J(this.Fe,0);this.J(this.Fd,0);this.J(this.OZ,0);this.Y.Em=[this,this.AAU
];this.MI.Q7([this,this.AsP]);this.MI.S(A.aaL(A.fl.Af));this.Fe.Q7([this,this.AsP
]);this.Fe.S(A.aaL(A.fl.Af));this.Fd.Q7([this,this.AsP]);this.Fd.S(A.aaL(A.fl.Af
));this.OZ.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JK;this.Y._Done(
);this.FX._Done();this.Ei._Done();this.Ey._Done();this.MI._Done();this.Fe._Done(
);this.Fd._Done();this.OZ._Done();C.JK._Done.call(this);},_ReInit:function(){C.JK.
_ReInit.call(this);this.Y._ReInit();this.FX._ReInit();this.Ei._ReInit();this.Ey.
_ReInit();this.MI._ReInit();this.Fe._ReInit();this.Fd._ReInit();this.OZ._ReInit(
);this.OZ.R(A.aaR(A.acf.ASo));this.MI.S(A.aaL(A.fl.Af));this.Fe.S(A.aaL(A.fl.Af)
);this.Fd.S(A.aaL(A.fl.Af));this.OZ.S(A.aaL(A.fl.Af));this.CP();},_Mark:function(
D){var B;C.JK._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMh={_Init:function(aArg){C.Aqf._Init.call(
this,aArg);this.__proto__=C.AMh;this.A41=1;this.Rk.Cu(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqf._ReInit.call(this);this.Rk.Cu(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARc={OK:null,IP:null,H5:null,IN:null,GP:null,Al3:function(G){A.pe([this,this.
BAM],this);},BAM:function(G){A._GetAutoObject(C.A8).Cd(3);},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.OK._Init.call(this.OK={I:this},0);C.BW._Init.call(this.
IP={I:this},0);C.SR._Init.call(this.H5={I:this},0);C.AGL._Init.call(this.IN={I:this
},0);C.Rb._Init.call(this.GP={I:this},0);this.__proto__=C.ARc;var B;this.Ja(A.aaR(
A.acf.A$K));this.IP.H(Ah3);this.IP.Aj(true);this.IP.T(A.aaR(A.acf.Language));this.
IP.A_o(100);this.H5.H(U0);this.H5.Aj(true);this.H5.T(A.aaR(A.acf.Date));this.H5.
Bi(true);this.IN.H(Aae);this.IN.Aj(true);this.IN.T(A.aaR(A.acf.Bs));this.GP.H(Ah2
);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGh));this.GP.Bi(true);
this.GP.Ar2(false);this.GP.A_w(true);this.JZ(this.Y,-1);this.JZ(this.Ay,-1);this.
J(this.IP,0);this.J(this.H5,0);this.J(this.IN,0);this.J(this.GP,0);this.IP.Zs(A.
aaL(A.fl.H1));this.IP.Zt(A.aaL(A.fl.H1));this.IP.Au([B=this.OK,B.B_,B.Cb]);this.
IP.CK(this.OK);this.H5.Ab0([B=this.H5,B.FV]);this.H5.Gs([this,this.D_,this.GS]);
this.H5.AkA(A.aaL(A.ach.Edit));this.H5.Ab6([B=A._GetAutoObject(A.Device.Helper),
B.U2,B.U5]);this.IN.Ab0([B=this.IN,B.FV]);this.IN.Gs([this,this.D_,this.GS]);this.
IN.AkA(A.aaL(A.ach.Edit));this.IN.Ab6([B=A._GetAutoObject(A.Device.Helper),B.U2,
B.U5]);this.GP.Ab0([B=this.GP,B.FV]);this.GP.Gs([this,this.D_,this.GS]);this.GP.
AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(A.Device.Device),B.ASR,B.A0u
]);},_Done:function(){this.__proto__=C.Cg;this.OK._Done();this.IP._Done();this.H5.
_Done();this.IN._Done();this.GP._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.OK._ReInit();this.IP._ReInit();this.H5._ReInit();
this.IN._ReInit();this.GP._ReInit();this.Ja(A.aaR(A.acf.A$K));this.IP.T(A.aaR(A.
acf.Language));this.H5.T(A.aaR(A.acf.Date));this.IN.T(A.aaR(A.acf.Bs));this.GP.T(
A.aaR(A.acf.AGh));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.AaY={Bg:null,FE:null,Am1:null,AmK:null,Se:null,A6_:A.jV,KN:A.jV,ARG:null,ARH:
null,ADn:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A3d],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);this.A3d(this);},E4:function(
G){var B;A.z$([this,this.A3d],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Zu:function(E){C.D9.Zu.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.Zu(E);},ATs:function(E){if(this.ARG===E)return;this.
ARG=E;if(!!this.Bg)this.Bg.N2(E);},ATt:function(E){if(this.ARH===E)return;this.ARH=
E;this.Bpq(this);},ATi:function(E){if(this.ADn===E)return;this.ADn=E;A.pe([this,
this.Bpp],this);},ArR:function(E){if(this.A6_===E)return;this.A6_=E;this.Se.R(E);
},Dk:function(E){if(this.KN===E)return;this.KN=E;if(!!this.Bg)this.Bg.Dk(E);},AkU:
function(L4){A.ab5("%s",AZu);},AD2:function(){A.ab5("%s",Alg);return false;},AxB:
function(G){if(!!this.Bg)this.HO(this.Bg);this.Bg=A._NewObject(C.Gc,0);this.Bg.H(
Ate);this.Bg.Zq(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dk(this.KN);this.Bg.
N2(this.ARG);this.Bg.Zu(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},Bpq:function(
G){var B;if(!!this.FE)this.HO(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(
this.ARH,0))?B:null);this.FE.H(IV);this.J(this.FE,0);},Bpp:function(G){var B;if(
!!this.Am1)this.HO(this.Am1);if(!!this.ADn&&this.AD2()){this.Am1=(C.I3.isPrototypeOf(
B=A._NewObject(this.ADn,0))?B:null);this.Am1.H(BD);this.Am1.Bi(false);this.J(this.
Am1,0);this.Se.Z(false);}else this.Se.Z(true);},A3d:function(G){this.AkU(A._GetAutoObject(
A.Device.Device).Bt);this.AxB(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmK={I:this},0);C.CH._Init.call(this.Se={I:this},
0);this.__proto__=C.AaY;this.AmK.H(BD);this.AmK.L(A.jb.CJ);this.Se.H(AHN);this.Se.
A6(0x11);this.Se.L(A.jb.Text);this.J(this.AmK,0);this.J(this.Se,0);this.Se.S(A.aaL(
A.fl.Kp));this.Se.A2(A.aaL(A.fl.Il));},_Done:function(){this.__proto__=C.D9;this.
AmK._Done();this.Se._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmK._ReInit();this.Se._ReInit();this.Se.S(A.aaL(A.fl.Kp));this.Se.
A2(A.aaL(A.fl.Il));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Kk={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
BcK],[B=A._GetAutoObject(A.Device.Device),B.AEB,B.AIQ],0);A.pe([this,this.BcK],this
);},Du:function(){return 5;},Gl:function(aIndex){return this.AnimalListContentToString.
BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zo(E);},BcK:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Kk;this.Ca.Set(0,0);this.Ca.Set(1,14);this.Ca.Set(2,
1);this.Ca.Set(3,2);this.Ca.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARL={IP:null
,Y8:null,Zf:null,Zc:null,Zg:null,Y9:null,Za:null,Zd:null,Ze:null,Y$:null,OK:null
,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.BW._Init.call(this.IP={I:this
},0);C.Nh._Init.call(this.Y8={I:this},0);C.Nh._Init.call(this.Zf={I:this},0);C.Nh.
_Init.call(this.Zc={I:this},0);C.Nh._Init.call(this.Zg={I:this},0);C.Nh._Init.call(
this.Y9={I:this},0);C.Nh._Init.call(this.Za={I:this},0);C.Nh._Init.call(this.Zd={
I:this},0);C.Nh._Init.call(this.Ze={I:this},0);C.Nh._Init.call(this.Y$={I:this},
0);C.OK._Init.call(this.OK={I:this},0);this.__proto__=C.ARL;var B;this.Ja(A.aaR(
A.acf.Settings));this.IP.H(Ah3);this.IP.Aj(true);this.IP.T(A.aaR(A.acf.Language)
);this.IP.A_o(100);this.Y8.H(Atf);this.Y8.Aj(true);this.Y8.T(A.aaR(A.acf.ACy));this.
Y8.Nk(16);this.Zf.H(Atg);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.AHc));this.Zf.Nk(
22);this.Zc.H(Ath);this.Zc.Aj(true);this.Zc.T(A.aaR(A.acf.Temperature));this.Zc.
Nk(17);this.Zg.H(AyC);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.ACv));this.Zg.Nk(42
);this.Y9.H(Alk);this.Y9.Aj(true);this.Y9.T(A.aaR(A.acf.Device));this.Y9.Nk(18);
this.Za.H(Alk);this.Za.Aj(true);this.Za.T(A.aaR(A.acf.Asn));this.Za.Nk(19);this.
Zd.H(Ati);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.LinkTransponder));this.Zd.Nk(89
);this.Ze.H(AZv);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.UnlinkTransponder));this.
Ze.Nk(95);this.Y$.H(Ayt);this.Y$.Aj(true);this.Y$.T(A.aaR(A.acf.ACN));this.Y$.Nk(
76);this.J(this.IP,0);this.J(this.Y8,0);this.J(this.Zf,0);this.J(this.Zc,0);this.
J(this.Zg,0);this.J(this.Y9,0);this.J(this.Za,0);this.J(this.Zd,0);this.J(this.Ze
,0);this.J(this.Y$,0);this.IP.Zs(A.aaL(A.fl.H1));this.IP.Zt(A.aaL(A.fl.H1));this.
IP.Au([B=this.OK,B.B_,B.Cb]);this.IP.CK(this.OK);this.Y8.AR=[B=this.Y8,B.Nn];this.
Zf.AR=[B=this.Zf,B.Nn];this.Zc.AR=[B=this.Zc,B.Nn];this.Zg.AR=[B=this.Zg,B.Nn];this.
Y9.AR=[B=this.Y9,B.Nn];this.Za.AR=[B=this.Za,B.Nn];this.Zd.AR=[B=this.Zd,B.Nn];this.
Ze.AR=[B=this.Ze,B.Nn];this.Y$.AR=[B=this.Y$,B.Nn];},_Done:function(){this.__proto__=
C.Cg;this.IP._Done();this.Y8._Done();this.Zf._Done();this.Zc._Done();this.Zg._Done(
);this.Y9._Done();this.Za._Done();this.Zd._Done();this.Ze._Done();this.Y$._Done(
);this.OK._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.IP._ReInit();this.Y8._ReInit();this.Zf._ReInit();this.Zc._ReInit();this.Zg.
_ReInit();this.Y9._ReInit();this.Za._ReInit();this.Zd._ReInit();this.Ze._ReInit(
);this.Y$._ReInit();this.OK._ReInit();this.Ja(A.aaR(A.acf.Settings));this.IP.T(A.
aaR(A.acf.Language));this.Y8.T(A.aaR(A.acf.ACy));this.Zf.T(A.aaR(A.acf.AHc));this.
Zc.T(A.aaR(A.acf.Temperature));this.Zg.T(A.aaR(A.acf.ACv));this.Y9.T(A.aaR(A.acf.
Device));this.Za.T(A.aaR(A.acf.Asn));this.Zd.T(A.aaR(A.acf.LinkTransponder));this.
Ze.T(A.aaR(A.acf.UnlinkTransponder));this.Y$.T(A.aaR(A.acf.ACN));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.IP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Za)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMu={ET:null,Init:function(aArg){this.ET.Ahw(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));},AUu:function(
){this.ET.Ae0(this.AOX());this.Aax=!this.ET.EZ.AY;},AiX:function(G){this.ET.Ahw(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag0)));this.AUu();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dk(A.aaR(A.acf.A8f));else this.Dk(A.aaR(A.acf.Art));this.Am();},AOX:function(
){var Bz=A._NewObject(C.Aqt,0);var Qo=A._GetAutoObject(A.Device.Helper).AOe(A._GetAutoObject(
A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqp(Qo-(86400*this.
Mx));Bz.AnA(AZw);Bz.Q5([].concat(0,Bz.Gk.slice(1,4)));Bz.Q5(A.abN(Bz.Gk,(Qo-Dx)|
0));Bz.Q5(A.abP(Bz.Gk,3400));Bz.Q5([].concat(Bz.Gk.slice(0,3),4200));var Gh=A._GetAutoObject(
A.Device.Device).Bt.B9();Bz.AwU(Gh);Bz.Yg();if(Gh>0){var O=0;while(O<Gh){var ApW=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var ApX=A._GetAutoObject(A.Device.Device
).Bt.Hv(O,6)-Dx;if(ApW>0)Bz.Aqg(ApX,ApW);O=O+1;}}return Bz;},_Init:function(aArg
){C.K$._Init.call(this,aArg);C.AqX._Init.call(this.ET={I:this},0);this.__proto__=
C.AMu;this.ET.H(AZx);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AFh(C.AGZ);this.
J(this.ET,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K$;this.ET._Done(
);C.K$._Done.call(this);},_ReInit:function(){C.K$._ReInit.call(this);this.ET._ReInit(
);this.ET.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K$._Mark.call(
this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMv={Z2:null,O2:null,AgU:null,Aax:false,Init:function(aArg){this.Z2.Ahw(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag0)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgU.Z(this.Aax);},CC:function(
G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiX],[B=A._GetAutoObject(A.Device.
Helper),B.U2,B.U5],0);A.zV([this,this.AiX],A._GetAutoObject(A.Device.Device).Bt,
0);A.zX([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0
);A.pe([this,this.Amf],this);},E4:function(G){var B;A.z$([this,this.AiX],[B=A._GetAutoObject(
A.Device.Helper),B.U2,B.U5],0);A.z9([this,this.AiX],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Amf:function(G){var Fy=A._NewObject(A.Device.Filter,
0);var HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(Fy
);},AiX:function(G){this.Z2.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));this.BoJ();this.Am();},BoJ:function(
){var B;var Gh=A._GetAutoObject(A.Device.Device).Bt.B9();var K9=A._NewObject(C.Aqt
,0);var Vq=A._NewObject(C.Aqt,0);var Qo=A._GetAutoObject(A.Device.Helper).AOe(A.
_GetAutoObject(A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K9.Q5([].concat(0,K9.Gk.slice(1
,4)));K9.Q5(A.abN(K9.Gk,(Qo-Dx)|0));K9.Q5(A.abP(K9.Gk,0));K9.Q5([].concat(K9.Gk.
slice(0,3),150000));K9.AnA(AZy);Vq.Q5([].concat(0,Vq.Gk.slice(1,4)));Vq.Q5(A.abN(
Vq.Gk,(Qo-Dx)|0));Vq.Q5(A.abP(Vq.Gk,0));Vq.Q5([].concat(Vq.Gk.slice(0,3),1500));
Vq.AnA(AZz);K9.AwU(Gh);K9.Yg();Vq.AwU(Gh);Vq.Yg();if(Gh>0){var O=0;var Aaz=0;var
AAi=0;var AKa=0;var A2g=0;var Bdo=true;while(O<Gh){var Al$=A._GetAutoObject(A.Device.
Device).Bt.CF(O,8);var AaM=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-Dx;if(Al$>
0){K9.Aqg(AaM,Al$);if(!A2g){A2g=AaM;AKa=Al$;}if(AAi>0){var LD=A._GetAutoObject(A.
Device.Helper).L$(AAi,AaM);if(!!LD){var FW=A._GetAutoObject(A.acj.DU).AlA(LD,Aaz
,Al$);if(Bdo){Vq.Aqg(AAi,FW);Bdo=false;}Vq.Aqg(AaM,FW);}}Aaz=Al$;AAi=AaM;}O=O+1;
}var AdO=A.aaR(A.acf.Bhc);var FW=A._GetAutoObject(A.Device.Helper).Bjd(A2g,AAi,AKa
,Aaz);AdO=A._GetAutoObject(A.Device.Helper).MG(AdO,O8,FW.toFixed());AdO=A._GetAutoObject(
A.Device.Helper).MG(AdO,Ayf,A._GetAutoObject(A.acj.DU).Aat());this.O2.Ik.R(AdO);
}this.Aax=!K9.AY;if(this.Aax)this.O2.Ik.R(A.jV);(C.O2.isPrototypeOf(B=this.O2.ET
)?B:null).Anw([B=A._GetAutoObject(A.Device.Helper).W,B.PT,B.EC]);this.Z2.Ae0(K9);
this.O2.Ae0(Vq);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.AqX._Init.call(
this.Z2={I:this},0);C.AqX._Init.call(this.O2={I:this},0);C.AkS._Init.call(this.AgU={
I:this},0);this.__proto__=C.AMv;this.Z2.H(AZA);this.Z2.T(A.aaR(A.acf.Afv));this.
Z2.AFh(C.AM3);this.O2.H(AZB);this.O2.T(A.aaR(A.acf.AHh));this.O2.AFh(C.O2);this.
AgU.H(UZ);this.AgU.R(A.aaR(A.acf.Akm));this.J(this.Z2,0);this.J(this.O2,0);this.
J(this.AgU,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;this.Z2._Done(
);this.O2._Done();this.AgU._Done();C.D9._Done.call(this);},_ReInit:function(){C.
D9._ReInit.call(this);this.Z2._ReInit();this.O2._ReInit();this.AgU._ReInit();this.
Z2.T(A.aaR(A.acf.Afv));this.O2.T(A.aaR(A.acf.AHh));this.AgU.R(A.aaR(A.acf.Akm));
},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Z2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgU)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"};C.AMs={
Avl:null,Avk:null,Axv:null,AuS:null,VC:null,Abm:null,Abl:null,Ack:null,Afi:null,
Init:function(aArg){this.VC.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag0)));},A4I:function(G){this.VC.Ab7(this.
AuS);this.Abm.Ab7(this.Avl);this.Abl.Ab7(this.Avk);this.Ack.Ab7(this.Axv);},Axu:
function(){var Gh=A._GetAutoObject(A.Device.Device).Bt.B9();this.AuS=A._NewObject(
C.Ajv,0);this.Avl=A._NewObject(C.Ajv,0);this.Avk=A._NewObject(C.Ajv,0);this.Axv=
A._NewObject(C.Ajv,0);if(Gh>0){var O=Gh-1;while(O>=0){var D8=A._GetAutoObject(A.
Device.Device).Bt.Hv(O,6);this.AtA(this.AuS,O,3,D8);this.AtA(this.Avl,O,2,D8);this.
AtA(this.Avk,O,5,D8);this.AtA(this.Axv,O,4,D8);O=O-1;}}this.Aax=!(((this.AuS.AY+
this.Avk.AY)+this.Avl.AY)+this.Axv.AY);A.pe([this,this.A4I],this);},AtA:function(
A1g,Ad,A1f,Qi){var Alw=A._GetAutoObject(A.Device.Device).Bt.I6(Ad,A1f);if(!!Alw)
A1g.Ot(Alw,Qi);},Ab5:function(E){if(this.Mx===E)return;C.K$.Ab5.call(this,E);if(
!!this.VC)this.VC.Ab5(E);if(!!this.Abm)this.Abm.Ab5(E);if(!!this.Abl)this.Abl.Ab5(
E);if(!!this.Ack)this.Ack.Ab5(E);this.Afi.Ab5(E);},AiX:function(G){this.VC.Ahw(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag0)));this.Axu();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dk(A.aaR(A.acf.BkD));else this.Dk(A.aaR(A.acf.Ano));this.Am();},_Init:function(
aArg){C.K$._Init.call(this,aArg);C.AhB._Init.call(this.VC={I:this},0);C.AhB._Init.
call(this.Abm={I:this},0);C.AhB._Init.call(this.Abl={I:this},0);C.AhB._Init.call(
this.Ack={I:this},0);C.AUr._Init.call(this.Afi={I:this},0);this.__proto__=C.AMs;
this.Dk(A.aaR(A.acf.Ano));this.VC.H(AZC);this.VC.R(A.aaR(A.acf.AGm));this.Abm.H(
AZD);this.Abm.R(A.aaR(A.acf.Feed));this.Abl.H(AZE);this.Abl.R(A.aaR(A.acf.AGo));
this.Ack.H(AZF);this.Ack.R(A.aaR(A.acf.AGp));this.Afi.H(AZG);this.J(this.VC,-1);
this.J(this.Abm,-1);this.J(this.Abl,-1);this.J(this.Ack,-1);this.J(this.Afi,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K$;this.VC._Done();this.Abm.
_Done();this.Abl._Done();this.Ack._Done();this.Afi._Done();C.K$._Done.call(this);
},_ReInit:function(){C.K$._ReInit.call(this);this.VC._ReInit();this.Abm._ReInit(
);this.Abl._ReInit();this.Ack._ReInit();this.Afi._ReInit();this.Dk(A.aaR(A.acf.Ano
));this.VC.R(A.aaR(A.acf.AGm));this.Abm.R(A.aaR(A.acf.Feed));this.Abl.R(A.aaR(A.
acf.AGo));this.Ack.R(A.aaR(A.acf.AGp));},_Mark:function(D){var B;C.K$._Mark.call(
this,D);if((B=this.Avl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avk)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Axv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abl)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMt={ET:null,WH:null,Aek:null,A2D:false,Init:function(aArg){this.WH.Ahw(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag0)));},Bl:function(aSize){C.K$.Bl.call(this,aSize);this.Aek.H(this.ET.M);},Ai:
function(Ae){C.K$.Ai.call(this,Ae);var BCj=!this.Aax&&this.A2D;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aek.R(A.aaR(A.acf.A8f));else this.
Aek.R(A.aaR(A.acf.Art));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dk(A.aaR(
A.acf.BkE));else this.Dk(A.aaR(A.acf.BkF));this.Aek.Z(BCj);},AiX:function(G){this.
WH.Ahw(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.Ag0)));this.Aax=true;this.A2D=true;this.Axu();this.AUu();this.
Am();},AUu:function(){this.ET.Ae0(this.AOX());if(!!this.ET.EZ&&(this.ET.EZ.AY>0)
){this.Aax=false;this.A2D=false;}},AOX:function(){var Bz=A._NewObject(C.Aqt,0);var
Qo=A._GetAutoObject(A.Device.Helper).AOe(A._GetAutoObject(A.Device.Helper).Dv());
var Dx=A._GetAutoObject(A.Device.Helper).Aqp(Qo-(86400*this.Mx));Bz.AnA(AZH);Bz.
Q5([].concat(0,Bz.Gk.slice(1,4)));Bz.Q5(A.abN(Bz.Gk,(Qo-Dx)|0));Bz.Q5(A.abP(Bz.Gk
,3400));Bz.Q5([].concat(Bz.Gk.slice(0,3),4200));var Gh=A._GetAutoObject(A.Device.
Device).Bt.B9();Bz.AwU(Gh);Bz.Yg();if(Gh>0){var O=0;while(O<Gh){var ApW=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var ApX=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6)-
Dx;if(ApW>0)Bz.Aqg(ApX,ApW);O=O+1;}}return Bz;},Bjs:function(){var Gh=A._GetAutoObject(
A.Device.Device).Bt.B9();if(Gh>0){var Bf6=A._NewObject(C.Ajv,0);var O=Gh-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LQ=A._GetAutoObject(A.Device.Helper).ADb(D3);if(!!LQ)Bf6.Ot(LQ,D3.Timestamp
);O=O-1;}return Bf6;}else return null;},Axu:function(){this.WH.Ab7(this.Bjs());if(
!!this.WH.N5&&(this.WH.N5.AY>0))this.Aax=false;},_Init:function(aArg){C.K$._Init.
call(this,aArg);C.AqX._Init.call(this.ET={I:this},0);C.AhB._Init.call(this.WH={I:
this},0);C.AkS._Init.call(this.Aek={I:this},0);this.__proto__=C.AMt;this.ET.H(Ate
);this.ET.T(A.aaR(A.acf.Temperature));this.ET.AFh(C.AGZ);this.WH.H(AZI);this.WH.
R(A.aaR(A.acf.Rating));this.Aek.H(Ate);this.J(this.ET,-2);this.J(this.WH,-2);this.
J(this.Aek,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K$;this.ET._Done(
);this.WH._Done();this.Aek._Done();C.K$._Done.call(this);},_ReInit:function(){C.
K$._ReInit.call(this);this.ET._ReInit();this.WH._ReInit();this.Aek._ReInit();this.
ET.T(A.aaR(A.acf.Temperature));this.WH.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K$._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WO={Q:null,Gx:null,Gy:null
,QN:null,AM:0,Gq:0,F$:100,FI:0,Init:function(aArg){},I0:function(G){this.FI=1;C.
Eg.I0.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QN.H([0,aSize[
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
);},Kd:function(G){this.FI=0;},AyU:function(s){this.Kd(s);},J_:function(G){this.
FI=0;},AyT:function(s){this.J_(s);},Bx:function(E){if(E<this.Gq)E=this.Gq;if(E>this.
F$)E=this.F$;if(this.AM===E)return;this.AM=E;this.Am();},Ga:function(E){if(this.
Gq===E)return;this.Gq=E;this.Am();},EU:function(E){if(this.F$===E)return;this.F$=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(
this.Gx={I:this},0);A.Core.BK._Init.call(this.Gy={I:this},0);A.acg.Ap._Init.call(
this.QN={I:this},0);this.__proto__=C.WO;this.H(KZ);this.Gx.Filter=5;this.Gy.Filter=
4;this.Background.H(KZ);this.V.H(AcN);this.V.R(Lw);this.QN.H(AyD);this.J(this.QN
,0);this.Gx.BL=[this,this.Al4];this.Gx.D1=[this,this.Al4];this.Gy.BL=[this,this.
Al5];this.Gy.D1=[this,this.Al5];this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak
));this.V.Cu(null);this.QN.Ax(A.aaL(A.ach.AMQ));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gx._Done();this.Gy._Done();this.QN._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gx._ReInit();this.Gy.
_ReInit();this.QN._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AUR={AC:null,CM:null,HM:
null,Bl:function(aSize){C.WO.Bl.call(this,aSize);this.CM.H([this.QN.M[2],this.QN.
M[1],this.M[2],this.QN.M[3]]);},Ai:function(Ae){C.WO.Ai.call(this,Ae);this.CM.AbD(
0,this.CM.AY-1);if(this.Gq!==this.F$)this.QN.Z(true);},Init:function(aArg){},C4:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Kd:function(G){var F;var BO=this.AM;C.WO.Kd.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C6(
this.AM)));A.abo(this.Q,0);}},J_:function(G){var F;var BO=this.AM;C.WO.J_.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var QA=0;if(this.Gq
!==this.F$){if(E<this.Gq){E=this.F$;QA=-this.CM.GO*this.CM.AY;}if(E>this.F$){E=this.
Gq;QA=this.CM.GO;}}C.WO.Bx.call(this,E);if(!!QA)this.CM.Gb(QA);this.CM.GT(this.AM
);this.CM.HI(this.CM.Gt,true,this.HM,null);},Hm:function(G){var B;var Gg=this.CM.
G6;var CA=(C.CH.isPrototypeOf(B=this.CM.Cj)?B:null);if(!CA)return;CA.S(this.V.B6
);CA.A2(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gl(Gg));else CA.
R(Xd);CA.H(A.abK(CA.M,[(B=this.CM.M)[2]-B[0],this.CM.GO]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Ga(0);this.EU(this.AC.Du()-1);this.CM.
Jy(this.AC.Du());this.CM.AbD(0,this.CM.AY-1);}},_Init:function(aArg){C.WO._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gm._Init.call(this.
HM={I:this},0);this.__proto__=C.AUR;this.H(KZ);this.QN.H(AZJ);this.CM.Ae8(40);this.
CM.N2(C.CH);this.HM.WF(23);this.HM.HN(1);this.HM.Fr(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));this.CM.Hm=[this,this.Hm];this.Init(
aArg);},_Done:function(){this.__proto__=C.WO;this.CM._Done();this.HM._Done();C.WO.
_Done.call(this);},_ReInit:function(){C.WO._ReInit.call(this);this.CM._ReInit();
this.HM._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A2(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WO._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RZ={ALB:0
,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.AHh));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kw((A._GetAutoObject(A.Device.Converter).Ak$(this.ALB
)+CQ)+A._GetAutoObject(A.acj.DU).Af4());else this.Kw(A.aaR(A.acf.Unknown));},Ch:
function(G){C.FA.Ch.call(this,G);this.ALB=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.FA._Init.call(this,aArg);this.__proto__=C.RZ;},_className:"Application::AnimalInfoItemWeightGain"
};C.APA={Bc:null,De:null,Init:function(aArg){var B;A.zX([this,this.Ns],[B=A._GetAutoObject(
A.Device.Device),B.AEA,B.AIP],0);},DX:function(G){C.IK.DX.call(this,G);this.De.Ax(
A._GetAutoObject(A.Device.Converter).Bhr(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IK._Init.call(this,aArg);A.acg.C7._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.De={I:this},0);this.__proto__=C.APA;this.Bc.DC(
AyE);this.Bc.DM(Atj);this.Bc.L(A.jb.Bc);this.De.H(AZK);this.De.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.De,0);this.De.Ax(A.aaL(A.ach.AjW));this.Init(aArg);},_Done:
function(){this.__proto__=C.IK;this.Bc._Done();this.De._Done();C.IK._Done.call(this
);},_ReInit:function(){C.IK._ReInit.call(this);this.Bc._ReInit();this.De._ReInit(
);},_Mark:function(D){var B;C.IK._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.AND={ZK:null,KA:null,Mn:null,Timer:null,ACm:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZK.R(A._GetAutoObject(A.Device.Helper).MG(A.aaR(A.acf.Bq6),O8,this.ACm.
toFixed()));},CC:function(G){this.Timer.Ar(true);},E4:function(G){this.Timer.Ar(
false);},BBy:function(G){if(this.ACm>1){this.ACm=this.ACm-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).AxC();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZK={I:this},0);A.acg.Text.
_Init.call(this.KA={I:this},0);A.acg.Ap._Init.call(this.Mn={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.AND;this.Background.L(A.jb.CS
);this.N.Z(true);this.ZK.H(AIB);this.ZK.KS(true);this.ZK.R(A.jV);this.ZK.L(A.jb.
Text);this.KA.H(AZL);this.KA.KS(true);this.KA.R(A.aaR(A.acf.A5z));this.KA.L(A.jb.
Text);this.Mn.H(AIC);this.J(this.ZK,0);this.J(this.KA,0);this.J(this.Mn,0);this.
ZK.S(A.aaL(A.fl.Af));this.KA.S(A.aaL(A.fl.Af));this.Mn.Ax(A.aaL(A.ach.ABT));this.
Timer.MC=[this,this.BBy];},_Done:function(){this.__proto__=C.AB;this.ZK._Done();
this.KA._Done();this.Mn._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZK._ReInit();this.KA._ReInit();this.Mn._ReInit(
);this.Timer._ReInit();this.KA.R(A.aaR(A.acf.A5z));this.ZK.S(A.aaL(A.fl.Af));this.
KA.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANk={KA:null,AmB:null
,QG:null,CP:function(){this.Am();},Ai:function(Ae){C.Ad$.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aa4<=10)this.KA.R(A.aaR(A.acf.BhD));else this.KA.R(A.aaR(A.acf.
A5A));},_Init:function(aArg){C.Ad$._Init.call(this,aArg);A.acg.Text._Init.call(this.
KA={I:this},0);A.acg.Ap._Init.call(this.AmB={I:this},0);C.CH._Init.call(this.QG={
I:this},0);this.__proto__=C.ANk;this.SS.H(AID);this.Mn.H(AZM);this.KA.H(AZN);this.
KA.KS(true);this.KA.L(A.jb.Text);this.AmB.H(AIC);this.QG.H(AZO);this.QG.Z(true);
this.QG.R(A.aaR(A.acf.AUs));this.QG.L(A.jb.Text);this.J(this.KA,0);this.J(this.AmB
,0);this.J(this.QG,0);this.KA.S(A.aaL(A.fl.Af));this.AmB.Ax(A.aaL(A.ach.ABT));this.
QG.S(A.aaL(A.fl.Af));this.QG.A2(A.aaL(A.fl.Ak));this.QG.Cu(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Ad$;this.KA._Done();this.AmB._Done();this.QG._Done();
C.Ad$._Done.call(this);},_ReInit:function(){C.Ad$._ReInit.call(this);this.KA._ReInit(
);this.AmB._ReInit();this.QG._ReInit();this.QG.R(A.aaR(A.acf.AUs));this.KA.S(A.aaL(
A.fl.Af));this.QG.S(A.aaL(A.fl.Af));this.QG.A2(A.aaL(A.fl.Ak));this.QG.Cu(A.aaL(
A.fl.Bh));this.CP();},_Mark:function(D){var B;C.Ad$._Mark.call(this,D);if((B=this.
KA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmB)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMf={_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AMf;this.
RS.Ar(false);this.RS.Aj(false);this.RS.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AVS={_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AVS;this.
S8.Ar(false);this.S8.Aj(false);this.S8.Z(false);},_className:"Application::WatchListFilterScreen"
};C.AO4={DX:function(G){C.Kq.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.
Converter).Ad0(5));},_Init:function(aArg){C.Kq._Init.call(this,aArg);this.__proto__=
C.AO4;},_className:"Application::HeaderControlListFilter"};C.APC={DX:function(G){
C.Kq.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(6));},_Init:
function(aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.APC;},_className:"Application::HeaderWatchListFilter"
};C.APG={D0:null,Na:null,_Init:function(aArg){C.TY._Init.call(this,aArg);C.CH._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.Na={I:this},0);this.__proto__=
C.APG;this.D0.H(Aot);this.D0.R(A.aaR(A.acf.A57));this.D0.L(A.jb.Text);this.Na.H(
AZP);this.Na.L(A.jb.Text);this.Na.A6(0x12);this.J(this.D0,-2);this.J(this.Na,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));this.Na.Ax(A.aaL(A.ach.ADF)
);},_Done:function(){this.__proto__=C.TY;this.D0._Done();this.Na._Done();C.TY._Done.
call(this);},_ReInit:function(){C.TY._ReInit.call(this);this.D0._ReInit();this.Na.
_ReInit();this.D0.R(A.aaR(A.acf.A57));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.TY._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANf={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(
!!this.AX){var Ol=this.AX.H2(Ad,8);var BC7=this.AX.Sl(Ad,21);this.Abe.R(A._GetAutoObject(
A.Device.Helper).L$(BC7,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sr.Z(Ol);this.Am();}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=
C.ANf;},_className:"Application::CalfListWatchItem"};C.TY={Ag$:null,Ahb:null,_Init:
function(aArg){C.Dd._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ag$={I:this},
0);A.acg.Ap._Init.call(this.Ahb={I:this},0);this.__proto__=C.TY;this.Ag$.H(AZQ);
this.Ag$.L(A.jb.Text);this.Ag$.A6(0x12);this.Ahb.H(AZR);this.Ahb.L(A.jb.Text);this.
Ahb.A6(0x12);this.JZ(this.DS,-1);this.J(this.Ag$,0);this.J(this.Ahb,0);this.Ag$.
Ax(A.aaL(A.ach.Ara));this.Ahb.Ax(A.aaL(A.ach.Ag7));},_Done:function(){this.__proto__=
C.Dd;this.Ag$._Done();this.Ahb._Done();C.Dd._Done.call(this);},_ReInit:function(
){C.Dd._ReInit.call(this);this.Ag$._ReInit();this.Ahb._ReInit();},_Mark:function(
D){var B;C.Dd._Mark.call(this,D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.Aqt={Gk:A.wg,OG:A.wf,Q5:function(E){if(A.aaY(this.Gk,E))return;this.Gk=E;},AnA:
function(E){if(A.aaX(this.OG,E))return;this.OG=E;},_Init:function(aArg){A.acv.ACl.
_Init.call(this,aArg);this.__proto__=C.Aqt;},_className:"Application::BoundCoordList"
};C.AjD={T3:null,Wv:null,T4:null,Ww:null,Sr:null,Zh:null,Abe:null,AP:null,A$:null
,Ea:null,Lt:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T3.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wv.H(this.T3.M);this.A$.H([this.T3.
M[2]-1,0,this.T3.M[2]+1,aSize[1]]);this.T4.H([this.T3.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Ww.H(this.T4.M);this.Ea.H([this.T4.M[2]-1,0,this.T4.M[2]+1,aSize[
1]]);this.Sr.H([this.T4.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zh.H(this.Sr.
M);this.Lt.H([this.Sr.M[2]-1,0,this.Sr.M[2]+1,aSize[1]]);this.Abe.H([this.Sr.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var K8=this.V.AQ;
this.T3.AE2(K8);this.Wv.L(K8);this.T4.AE2(K8);this.Ww.L(K8);this.Sr.AE2(K8);this.
Zh.L(K8);this.Abe.L(K8);this.Zh.Z(!this.Sr.Fq());},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;var Mh=this.AX.CF(Ad,1);var Ib=this.AX.AmW(Ad,14);var Aut=this.AX.CF(
Ad,5);var LQ=this.AX.I6(Ad,13);this.T(Mh.toFixed());if(!!LQ){this.T3.Z(true);this.
T3.AwK(A._GetAutoObject(A.acj.Assessment).Bdw(LQ));this.Wv.Z(false);}else{this.T3.
Z(false);this.Wv.Z(true);}if(Aut>0){this.T4.Z(true);this.T4.AwK(A._GetAutoObject(
A.acj.Assessment).Bdw(A._GetAutoObject(A.Device.Converter).AsI(Ib,Aut)));this.Ww.
Z(false);}else{this.T4.Z(false);this.Ww.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kl._Init.call(this.T3={I:this},0);A.acg.Text._Init.
call(this.Wv={I:this},0);C.Kl._Init.call(this.T4={I:this},0);A.acg.Text._Init.call(
this.Ww={I:this},0);C.Kl._Init.call(this.Sr={I:this},0);A.acg.Text._Init.call(this.
Zh={I:this},0);A.acg.Text._Init.call(this.Abe={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Lt={I:this},0);this.__proto__=C.AjD;this.
Wv.H(AZS);this.Wv.R(Aou);this.Ww.H(Aov);this.Ww.R(Aou);this.Sr.AwK(A.jb.Ri);this.
Zh.H(Aov);this.Zh.R(Rp);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Lt.L(A.jb.Bc);this.J(this.T3,0);this.J(this.Wv,0);this.J(this.T4,0);this.J(
this.Ww,0);this.J(this.Sr,0);this.J(this.Zh,0);this.J(this.Abe,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Lt,0);this.Wv.S(A.aaL(A.fl.Af
));this.Ww.S(A.aaL(A.fl.Af));this.Zh.S(A.aaL(A.fl.Af));this.Abe.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.T3._Done();this.Wv.
_Done();this.T4._Done();this.Ww._Done();this.Sr._Done();this.Zh._Done();this.Abe.
_Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Lt._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.T3._ReInit();this.Wv.
_ReInit();this.T4._ReInit();this.Ww._ReInit();this.Sr._ReInit();this.Zh._ReInit(
);this.Abe._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.
Lt._ReInit();this.Wv.S(A.aaL(A.fl.Af));this.Ww.S(A.aaL(A.fl.Af));this.Zh.S(A.aaL(
A.fl.Af));this.Abe.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ww)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lt)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={Pw:null,Ang:null
,EZ:null,DR:null,Arm:0,Arn:0,A7x:0,AmN:0,AqG:0,Init:function(aArg){this.ATd(6);this.
ATe(8);this.ATp(A.jb.AV);this.ATq(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.Bmm([this.DR.Aba[0],(B=this.DR.M)[3]-B[1]]);this.WI(this);},ATc:function(
E){if(this.Pw===E)return;this.Pw=E;this.DR.ATc(E);},ATq:function(E){if(this.Arn===
E)return;this.Arn=E;this.DR.ATq(E);},ATp:function(E){if(this.Arm===E)return;this.
Arm=E;this.DR.ATp(E);this.DR.Bmr(E);},WI:function(G){var B;while(!!this.DR.Ah)this.
HO(this.DR.Ah);if(!this.EZ)return;this.DR.AnA([((this.EZ.OG[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gk[2]-this.EZ.Gk[0]))|0,this.DR.OG[1]]);this.DR.AnA([this.DR.OG[0]
,((this.EZ.OG[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gk[3]-this.EZ.Gk[1]))|0]);var O;
var Dh=this.DR.OG[1];var D8;var A4T=this.EZ.Gk[1];var BkC=(((B=this.DR.M)[3]-B[1
])/this.DR.OG[1])|0;for(O=0;O<BkC;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Dh))-(this.Ang.Ascent+this.Ang.Descent))+2,((B=this.M)[2]-
B[0])-this.Arn,(((B=this.M)[3]-B[1])-(O*Dh))+2]);D8.L(this.A7x);D8.S(this.Ang);D8.
A6(0x24);if(O>0)D8.R(this.AJN(A4T));else D8.R(this.AKk());A4T=A4T+this.EZ.OG[1];
this.J(D8,0);}},BGN:function(s){this.WI(s);},Bnh:function(E){if(this.Ang===E)return;
this.Ang=E;this.Am();},Azs:function(A0X){var B;if(!this.EZ||(this.EZ.Gk[3]===this.
EZ.Gk[1]))return 0;return(((A0X-this.EZ.Gk[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gk[
3]-this.EZ.Gk[1]))|0;},Ae0:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.Ae0(null);else{var Bz=A._NewObject(A.acv.ACl,0);Bz.AwU(this.EZ.AEg);Bz.Yg();var
JA=E.AlK;while(!!JA){Bz.Aqg(this.By7(JA.P7),this.By8(JA.P8));JA=JA.Ah;}this.DR.Ae0(
Bz);this.Am();}},By7:function(Bxj){var B;if(!this.EZ||(this.EZ.Gk[2]===this.EZ.Gk[
0]))return 0;return((Bxj-this.EZ.Gk[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gk[2]-this.
EZ.Gk[0]);},By8:function(A0X){var B;if(!this.EZ||(this.EZ.Gk[3]===this.EZ.Gk[1])
)return 0;return((A0X-this.EZ.Gk[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gk[3]-this.EZ.
Gk[1]);},AJN:function(AoR){return AoR.toFixed();},AKk:function(){return A.jV;},ATe:
function(E){if(this.AmN===E)return;this.AmN=E;this.DR.ATe(E);},ATd:function(E){if(
this.AqG===E)return;this.AqG=E;this.DR.ATd(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIE);this.A7x=A.jb.Text;this.DR.AZ(0x3F);this.DR.H(AIE);this.DR.BnH(AZT);this.
DR.Bma(A.jb.Ri);this.DR.Bm0(A.jb.Bc);this.DR.Bn3(A.jb.Ri);this.J(this.DR,0);this.
Pw=A.aaL(A.acv.ACE);this.Ang=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.Bnh(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Pw)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ang)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AM3={AJN:function(AoR){return A._GetAutoObject(
A.Device.Converter).Ax5(AoR,0);},AKk:function(){return A._GetAutoObject(A.acj.DU
).Af4();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.AM3;}
,_className:"Application::BodyWeightGraph"};C.O2={JL:null,Ey:null,Ei:null,FX:null
,IH:null,II:null,Init:function(aArg){this.ATc(null);},WI:function(G){var B;var F;
C.DR.WI.call(this,G);var AKQ=0;var ALG=0;if(!!this.JL){AKQ=this.Azs(A._GetAutoObject(
A.Device.Helper).ADa((F=this.JL,F[1].call(F[0]))));ALG=this.Azs(A._GetAutoObject(
A.Device.Helper).AC$((F=this.JL,F[1].call(F[0]))));}this.FX.H(A.abP(this.FX.M,0)
);this.FX.H([].concat(this.FX.M.slice(0,3),((B=this.M)[3]-B[1])-ALG));this.IH.H(
A.abO(this.IH.M,(this.FX.M[3]-((((B=this.IH.M)[3]-B[1])/2)|0))-2));this.Ei.H(A.abP(
this.Ei.M,this.FX.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-
B[1])-AKQ));this.II.H(A.abO(this.II.M,(this.Ei.M[3]-((((B=this.II.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Ei.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJN:function(AoR){return A._GetAutoObject(A.Device.Converter
).S9(AoR,0,true);},AKk:function(){return A._GetAutoObject(A.acj.DU).Aat();},Anw:
function(E){if(A.aaZ(this.JL,E))return;if(!!this.JL)A.z$([this,this.AiP],this.JL
,0);this.JL=E;if(!!E)A.zX([this,this.AiP],E,0);if(!!E)A.pe([this,this.AiP],this);
},AiP:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.
acg.AL._Init.call(this.FX={I:this},0);A.acg.AL._Init.call(this.IH={I:this},0);A.
acg.AL._Init.call(this.II={I:this},0);this.__proto__=C.O2;this.Ey.AZ(0xD);this.Ey.
H(Z$);this.Ey.L(A.jb.Gj);this.Ei.AZ(0xD);this.Ei.H(Ta);this.Ei.L(A.jb.H8);this.FX.
AZ(0xD);this.FX.H(AcM);this.FX.L(A.jb.E1);this.IH.AZ(0xD);this.IH.H(Aab);this.IH.
Awy(A.jb.H8);this.IH.Awz(A.jb.H8);this.IH.AwB(A.jb.E1);this.IH.AwA(A.jb.E1);this.
II.AZ(0xD);this.II.H(Xb);this.II.Awy(A.jb.Gj);this.II.Awz(A.jb.Gj);this.II.AwB(A.
jb.H8);this.II.AwA(A.jb.H8);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FX
,-1);this.J(this.IH,-1);this.J(this.II,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FX._Done();this.IH._Done();this.
II._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ey._ReInit();this.Ei._ReInit();this.FX._ReInit();this.IH._ReInit();this.II._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JL)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.AqX={ET:null,EZ:null,R$:null,Ik:
null,Bc:null,AxM:A.jV,DK:A.jV,AOZ:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.R$.
H([30,0,aSize[0]-2,30]);this.Ik.H(this.R$.M);if(!!this.ET)this.ET.H([30,this.R$.
M[3],aSize[0],this.Bc.M[1]]);},Ahw:function(E){if(this.AxM===E)return;this.AxM=E;
this.Ik.R(E);},T:function(E){if(this.DK===E)return;this.DK=E;this.R$.R(E);},AFh:
function(E){if(this.AOZ===E)return;this.AOZ=E;this.Bpn(this);},Bpn:function(G){var
B;if(!!this.ET)this.HO(this.ET);this.ET=(C.DR.isPrototypeOf(B=A._NewObject(this.
AOZ,0))?B:null);if(!!this.ET){this.ET.H(AZU);this.ET.Ae0(this.EZ);this.J(this.ET
,0);}},Ae0:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.ET)this.ET.Ae0(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
R$={I:this},0);A.acg.Text._Init.call(this.Ik={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.AqX;this.H(AcP);this.Ar(false);this.R$.H(AZV);this.
R$.A6(0x11);this.R$.R(Lw);this.R$.L(A.jb.Text);this.Ik.A6(0x14);this.Ik.R(A.jV);
this.Ik.L(A.jb.Text);this.Bc.H(AZW);this.Bc.L(A.jb.Bc);this.J(this.R$,0);this.J(
this.Ik,0);this.J(this.Bc,0);this.R$.S(A.aaL(A.fl.Ak));this.Ik.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.R$._Done();this.
Ik._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.R$._ReInit();this.Ik._ReInit();this.Bc._ReInit();this.
R$.S(A.aaL(A.fl.Ak));this.Ik.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.ET)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMB={AgD:null,GT:function(E
){var F;C.Gc.GT.call(this,E);if(!!this.AgD)(F=this.AgD,F[2].call(F[0],E));},A9J:
function(E){if(A.aaZ(this.AgD,E))return;if(!!this.AgD)A.z$([this,this.A3e],this.
AgD,0);this.AgD=E;if(!!E)A.zX([this,this.A3e],E,0);if(!!E)A.pe([this,this.A3e],this
);},A3e:function(G){var F;if(!this.AgD)return;(F=this.AgD,F[2].call(F[0],this.FN(
)));},_Init:function(aArg){C.Gc._Init.call(this,aArg);this.__proto__=C.AMB;},_Mark:
function(D){var B;C.Gc._Mark.call(this,D);if((B=this.AgD)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUr={Rg:null
,P2:null,XW:null,XX:null,Mx:0,CP:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Rg.H(A.abI(this.Rg.M,(((B=this.M)[3]-B[1])/2)|
0));this.P2.H(A.abI(this.P2.M,(((B=this.M)[3]-B[1])/2)|0));this.Rg.H(A.abO(this.
Rg.M,(((B=this.M)[3]-B[1])/2)|0));this.P2.H(A.abO(this.P2.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rg.R(A._GetAutoObject(
A.Device.Helper).MG(A.aaR(A.acf.Bkw),O8,this.Mx.toFixed()));},Ab5:function(E){if(
this.Mx===E)return;this.Mx=E;this.BB9(this);},BB9:function(G){var B;var AJU=(((B=
this.M)[2]-B[0])/this.Mx)|0;this.XW.H(A.abM(this.XW.M,(((B=this.M)[2]-B[0])-(this.
Mx*AJU))+(((AJU/2)-(((B=this.XW.M)[2]-B[0])/2))|0)));this.XX.H(A.abM(this.XX.M,(((
B=this.M)[2]-B[0])-AJU)+(((AJU/2)-(((B=this.XX.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rg={
I:this},0);A.acg.Text._Init.call(this.P2={I:this},0);A.acg.Text._Init.call(this.
XW={I:this},0);A.acg.Text._Init.call(this.XX={I:this},0);this.__proto__=C.AUr;this.
H(BD);this.Rg.H(AZX);this.Rg.Hn(5);this.Rg.A6(0x11);this.Rg.L(A.jb.Text);this.P2.
H(AZY);this.P2.Hn(5);this.P2.A6(0x14);this.P2.R(A.aaR(A.acf.AhT));this.P2.L(A.jb.
Text);this.XW.H(AZZ);this.XW.R(AIF);this.XW.L(A.jb.Text);this.XX.H(AZ0);this.XX.
R(AIF);this.XX.L(A.jb.Text);this.J(this.Rg,0);this.J(this.P2,0);this.J(this.XW,0
);this.J(this.XX,0);this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.XW.
S(A.aaL(A.fl.H1));this.XX.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=A.
Core.P;this.Rg._Done();this.P2._Done();this.XW._Done();this.XX._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rg._ReInit(
);this.P2._ReInit();this.XW._ReInit();this.XX._ReInit();this.P2.R(A.aaR(A.acf.AhT
));this.Rg.S(A.aaL(A.fl.Ak));this.P2.S(A.aaL(A.fl.Ak));this.CP();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rg)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.K$={V6:null,AjJ:null,KN:A.jV,Mx:0,Aax:false,Init:function(aArg){var A1V=A._NewObject(
C.Km,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RP()<A1V.
C6(O))A1V.Ann=O+1;this.V6.CK(A1V);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjJ.
Z(this.Aax);if(this.Aax)this.Bb(null);else this.Bb(this.V6);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.V6.Q,F[1].call(F[0])))(F=this.V6.Q,F[2].
call(F[0],this.V6.AC.C6(0)));A.zX([this,this.AI4],[B=A._GetAutoObject(A.Device.Helper
),B.U2,B.U5],0);A.zV([this,this.AI4],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.pe([this
,this.Amf],this);},E4:function(G){var B;A.z$([this,this.AI4],[B=A._GetAutoObject(
A.Device.Helper),B.U2,B.U5],0);A.z9([this,this.AI4],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amf],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId
],0);C.D9.E4.call(this,G);},Zu:function(E){if(A.aa0(this.AR,E))return;C.D9.Zu.call(
this,E);this.V6.AR=E;},Ab5:function(E){if(this.Mx===E)return;this.Mx=E;A.pe([this
,this.Amf],this);},BwT:function(Aq){this.Ab5(Aq);},AiX:function(G){},AI4:function(
s){this.AiX(s);},Dk:function(E){if(this.KN===E)return;this.KN=E;this.AjJ.R(E);},
Amf:function(G){var Fy=A._NewObject(A.Device.Filter,0);var AzB=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzB.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhT()-((this.Mx-1)*86400))-1,true);Fy.CW(AzB);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CW(HV);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fy);},Blu:function(){return this.Mx;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AUR._Init.call(this.V6={I:this},0);C.AkS._Init.call(
this.AjJ={I:this},0);this.__proto__=C.K$;this.V6.H(BD);this.AjJ.H(UZ);this.J(this.
V6,0);this.J(this.AjJ,0);this.V6.Au([this,this.Blu,this.BwT]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.V6._Done();this.AjJ._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.V6._ReInit();this.AjJ.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.V6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANK={Wb:null,YN:null,RatingMode:null,PH:null,_Init:
function(aArg){C.Cg._Init.call(this,aArg);C.Nh._Init.call(this.Wb={I:this},0);C.
BW._Init.call(this.YN={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Ir._Init.call(this.PH={I:this},0);this.__proto__=C.ANK;var B;this.Hj.R(A.
aaR(A.acf.ACv));this.Ja(A.aaR(A.acf.A51));this.Wb.H(Atk);this.Wb.Aj(true);this.Wb.
T(A.aaR(A.acf.AsU));this.Wb.Bi(true);this.Wb.Nk(23);this.YN.H(AZ1);this.YN.Aj(true
);this.YN.T(A.aaR(A.acf.A$g));this.YN.Bi(false);this.PH.H(AZ2);this.PH.Aj(true);
this.PH.T(A.aaR(A.acf.A5Y));this.PH.Bi(true);this.PH.Ga(3);this.PH.EU(14);this.PH.
IQ(A.aaR(A.acf.Km)+AIG);this.PH.Jb(A.aaR(A.acf.GL)+AIG);this.J(this.Wb,0);this.J(
this.YN,0);this.J(this.PH,0);this.Wb.AR=[B=this.Wb,B.Nn];this.YN.Au([B=this.RatingMode
,B.B_,B.Cb]);this.YN.CK(this.RatingMode);this.PH.Au([B=A._GetAutoObject(A.Device.
Device),B.A8N,B.Bbp]);},_Done:function(){this.__proto__=C.Cg;this.Wb._Done();this.
YN._Done();this.RatingMode._Done();this.PH._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wb._ReInit();this.YN._ReInit();this.RatingMode.
_ReInit();this.PH._ReInit();this.Hj.R(A.aaR(A.acf.ACv));this.Ja(A.aaR(A.acf.A51)
);this.Wb.T(A.aaR(A.acf.AsU));this.YN.T(A.aaR(A.acf.A$g));this.PH.T(A.aaR(A.acf.
A5Y));this.PH.IQ(A.aaR(A.acf.Km)+AIG);this.PH.Jb(A.aaR(A.acf.GL)+AIG);},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Au$={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hn(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.
Text;}if(!Hf){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FS);this.V.L(GY);}this.LI=Hf;this.KG=Fw;this.Qv=GE;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Au$;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADi={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PT,B.EC],0);A.pe([this,this.DX],this);},Df:function(E){C.BQ.Df.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.ADf));break;case 1:this.Ap.Ax(A.aaL(A.ach.APk));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APm));break;default:A.ab5("%s%e",AZ3,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADi;this.Ap.H(AZ4);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADf));this.Init(aArg);},_Done:function(){this.
__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADj={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PT,B.EC],0);A.pe([this,this.DX],this);},Df:function(E){C.BQ.
Df.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADg));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APl));break;case 2:this.Ap.Ax(A.aaL(A.ach.APn));break;default:A.ab5("%s%e"
,AZ3,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADj;
this.Ap.H(AZ4);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADg));this.Init(aArg);},
_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.FA={BT:null,Ax0:A.jV,Df:function(E){C.JK.Df.call(
this,E);this.BT.L(E);},Kw:function(E){if(this.Ax0===E)return;this.Ax0=E;this.BT.
R(E);},_Init:function(aArg){C.JK._Init.call(this,aArg);C.CH._Init.call(this.BT={
I:this},0);this.__proto__=C.FA;this.BT.AZ(0x34);this.BT.H(AyB);this.BT.A6(0x11);
this.BT.L(A.jb.Text);this.J(this.BT,0);this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(
A.fl.Ak));this.BT.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JK;this.
BT._Done();C.JK._Done.call(this);},_ReInit:function(){C.JK._ReInit.call(this);this.
BT._ReInit();this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));this.BT.Cu(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JK._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOI={WA:function(G){var B;this.Agx();this.AuI(A.aaR(A.acf.BjF),[this,this.Boh],[
B=A._GetAutoObject(A.Device.Device),B.A8O,B.Bbq]);A._GetAutoObject(C.BR).Fz();this.
I2(A.aaR(A.acf.AVt),[this,this.ATU],5);this.I2(A.aaR(A.acf.AVr),[this,this.ATT],
7);this.I2(A.aaR(A.acf.An1),[this,this.AwX],2);this.I2(A.aaR(A.acf.AdV),[this,this.
AEX],1);this.I2(A.aaR(A.acf.AuG),[this,this.AER],0);A._GetAutoObject(C.BR).Fz();
A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},Abr:function(){return C.AB9;},Abs:function(
){return C.ADq;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6V());},HP:function(G){var F;C.GJ.HP.call(this,G);if(this.Aki(
)===false){this.N.Cw(A._GetAutoObject(A.Device.Converter).Ajr((F=this.Fn,F[1].call(
F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OQ(false);this.N.OR(false
);},Agj:function(){A._GetAutoObject(C.A8).Cd(44);},Boh:function(G){A._GetAutoObject(
A.Device.Device).AwN(!A._GetAutoObject(A.Device.Device).AqS);this.An9(this);},An9:
function(G){var Be=A._GetAutoObject(A.Device.Device).An.Filter.E_();var Aw=Be.DL(
30,3);if(!!Aw)Be.Np(Aw);if(A._GetAutoObject(A.Device.Device).AqS){var AAh=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A2N=A._GetAutoObject(A.Device.Helper).Dv()-
21600;AAh.Initialize(30,3,A2N,true);Be.CW(AAh);}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOI;
var B;this.Dr(C.APg);this.Dk(A.aaR(A.acf.A8c));this.AwS([B=A._GetAutoObject(A.Device.
Device),B.A8M,B.Bbo]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dk(A.aaR(
A.acf.A8c));},_className:"Application::FreshCowListScreen"};C.AOH={_Init:function(
aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AOH;this.Ld.Ar(false);this.Ld.
Aj(false);this.Ld.Z(false);this.Jr.Ar(false);this.Jr.Aj(false);this.Jr.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APg={DX:function(G){C.Kq.
DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(7));},_Init:
function(aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.APg;},_className:"Application::HeaderFreshCowListFilter"
};C.ADq={Jx:null,D0:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);C.CH._Init.
call(this.Jx={I:this},0);C.CH._Init.call(this.D0={I:this},0);this.__proto__=C.ADq;
this.A94(1);this.Jx.H(Bra);this.Jx.R((A.aaR(A.acf.Calving)+AcS)+A.aaR(A.acf.A$T)
);this.Jx.L(A.jb.Text);this.D0.H(Brb);this.D0.R(A.aaR(A.acf.AD_));this.D0.L(A.jb.
Text);this.J(this.Jx,0);this.J(this.D0,0);this.Jx.S(A.aaL(A.fl.Ak));this.Jx.A2(A.
aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Dd;this.Jx._Done();this.D0._Done();C.Dd._Done.call(this);},_ReInit:
function(){C.Dd._ReInit.call(this);this.Jx._ReInit();this.D0._ReInit();this.Jx.R((
A.aaR(A.acf.Calving)+AcS)+A.aaR(A.acf.A$T));this.D0.R(A.aaR(A.acf.AD_));this.Jx.
S(A.aaL(A.fl.Ak));this.Jx.A2(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A2(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.Jx).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.AB9={AG0:null,KQ:null,UE:null,AP:null,A$:null
,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UE.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A$.H([this.UE.M[2]-1,0,this.UE.M[2]+1,aSize[
1]]);this.KQ.H([this.UE.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KQ.L(this.V.AQ);this.UE.Df(this.V.AQ);},Ch:function(Ad){if(!this.AX
)return;this.Hs=Ad;if(!!this.AX){var Iz=this.AX.CF(Ad,0);var Mh=this.AX.CF(Ad,1);
var A2M=this.AX.CF(Ad,29);var AlC=this.AX.Hv(Ad,28);this.T(Mh.toFixed());this.KQ.
R(A2M.toFixed());this.UE.Ab5(A._GetAutoObject(A.Device.Device).AqR+1);this.UE.BnV(
AlC);this.UE.R(A._GetAutoObject(A.acj.KL).AjN(AlC));A._GetAutoObject(A.Device.Device
).SQ(Ad);this.Ap6(Iz);this.Axu();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A4I:function(G){this.UE.Ab7(this.AG0);},Axu:function(){var Gh=A._GetAutoObject(
A.Device.Device).Bt.B9();this.AG0=A._NewObject(C.Ajv,0);if(Gh>0){var O=Gh-1;while(
O>=0){var D8=A._GetAutoObject(A.Device.Device).Bt.Hv(O,6);this.AtA(this.AG0,O,9,
D8);O=O-1;}}A.pe([this,this.A4I],this);},AtA:function(A1g,Ad,A1f,Qi){var Alw=A._GetAutoObject(
A.Device.Device).Bt.I6(Ad,A1f);if(!!Alw)A1g.Ot(Alw,Qi);},Ap6:function(Ac8){var Fy=
A._NewObject(A.Device.Filter,0);var AzB=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzB.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZP(A._GetAutoObject(A.Device.
Device).AqR)-1,true);Fy.CW(AzB);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,Ac8,true);Fy.CW(HV);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.Text._Init.call(this.
KQ={I:this},0);C.AUm._Init.call(this.UE={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.AB9;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(this.KQ,0);this.J(this.UE,0);this.J(this.AP
,0);this.J(this.A$,0);this.KQ.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.KQ._Done();this.UE._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.KQ._ReInit(
);this.UE._ReInit();this.AP._ReInit();this.A$._ReInit();this.KQ.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AG0)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUm={AU6:0,Init:function(aArg){},AOP:function(){return A._GetAutoObject(A.Device.
Helper).Aqp(this.AU6);},AOR:function(){return this.AOP()+(this.Mx*86400);},BnV:function(
E){if(this.AU6===E)return;this.AU6=E;A.pe([this,this.WI],this);},_Init:function(
aArg){C.AhB._Init.call(this,aArg);this.__proto__=C.AUm;this.Bc.H(Brc);this.BnS(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Du:function(){if(this.K&&this.K.Du)return this.K.
Du.apply(this,arguments);else return C.FactoryResetScope.BuS.apply(this,arguments
);},BuS:function(){return 3;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
jV;return this.FactoryResetScopeToString.BS(this.C6(aIndex));},_Init:function(aArg
){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.Ca.
Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,2);var J4=this._variants();if(J4){this.K={
};J4._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);
this.__proto__=C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);
},_ReInit:function(){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acs.FactoryResetScope._variants(
);},K:null,_className:"Application::FactoryResetScope"};C.SetSaveTransponderScreen={
BgT:false,Init:function(aArg){this.BgT=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ew:function(G){if(this.Bd0){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);if(this.BgT)A._GetAutoObject(A.Device.Device).A3(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).A3(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASn={WA:function(G){this.
Agx();A._GetAutoObject(C.BR).Ty(A.aaR(A.acf.Settings),[this,this.A3O]);A._GetAutoObject(
C.BR).Fz();this.AMb();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.ARD)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){},Abr:function(
){return C.Aqu;},Abs:function(){return C.Aq1;},Q_:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AC4());},HP:function(G){C.
QD.HP.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr(A._GetAutoObject(A.Device.Converter).AL8(this.LX.AC6())));this.N.Cf=[this,
this.AcU];this.N.Fc(A.jV);}this.N.OQ(false);this.N.OR(false);},Agj:function(){A.
_GetAutoObject(C.A8).Cd(47);},A3O:function(G){A._GetAutoObject(A.Device.Device).
Dw(0);A._GetAutoObject(C.A8).Cd(89);},_Init:function(aArg){C.QD._Init.call(this,
aArg);this.__proto__=C.ASn;this.Dr(C.ADk);this.Dk(A.aaR(A.acf.A7_));this.ATr(A._GetAutoObject(
C.Av_));},_ReInit:function(){C.QD._ReInit.call(this);this.Dk(A.aaR(A.acf.A7_));}
,_className:"Application::NoTransponderListScreen"};C.ASm={_Init:function(aArg){
C.I4._Init.call(this,aArg);this.__proto__=C.ASm;this.KW.Ar(false);this.KW.Aj(false
);this.KW.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADk={DX:function(G){C.Kq.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(8));},_Init:function(aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.ADk;
},_className:"Application::HeaderNoTransponderListFilter"};C.ABS={AuX:null,Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AuX.BS(aIndex);},_Init:
function(aArg){C.Gd._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AuX={I:this},0);this.__proto__=C.ABS;},_Done:function(){this.__proto__=
C.Gd;this.AuX._Done();C.Gd._Done.call(this);},_ReInit:function(){C.Gd._ReInit.call(
this);this.AuX._ReInit();},_Mark:function(D){var B;C.Gd._Mark.call(this,D);if((B=
this.AuX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AL7={Co:null,Ad3:null,Init:function(aArg){this.Bb(this.Co);},Ln:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaE];this.BP.Cf=null;
this.BP.B$=[this,this.A3p];this.BP.CU(A.jV);this.BP.Cw(null);this.BP.C1(A.aaL(A.
ach.AeA));}return this.BP;},AAx:function(G){var Aa=(C.Ajk.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad3)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(Bam);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ajk._Init.call(this.
Co={I:this},0);C.Ajk._Init.call(this.Ad3={I:this},0);this.__proto__=C.AL7;this.H(
Qc);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(IV);this.Co.T(A.aaR(A.acf.
AEi));this.Ad3.H(Qd);this.Ad3.T(A.aaR(A.acf.Tx));this.J(this.Co,0);this.J(this.Ad3
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAx];this.Ad3.AR=[this,this.
AAx];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Co._Done();this.
Ad3._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Co._ReInit();this.Ad3._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AEi));this.Ad3.T(A.aaR(A.acf.Tx));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BF8={Undefined:0,BF6:1,BF7:2,IdScanned:3,BE2:4,BD8:5,BEM:6};C.AMj={A$B:function(
){A._GetAutoObject(A.Device.Device).A3(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.Bfv]);},_Init:function(aArg){C.AuN._Init.call(
this,aArg);this.__proto__=C.AMj;this.Gd.Au(1);this.ATx(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aeu={VX:null,VY:null,VZ:null,Ag4:null,Ag5:null,Ag6:null,CE:null,Cf:null,B$:null
,An2:A.jV,An3:A.jV,An4:A.jV,Aq8:0,Aq9:0,Aq_:0,Ahm:0,ZC:false,WJ:false,Aso:false,
AsD:false,AsC:false,AjB:function(Fg){this.CE=Fg.CE;this.Cf=Fg.Cf;this.B$=Fg.B$;this.
An2=Fg.An2;this.An3=Fg.An3;this.An4=Fg.An4;this.Ahm=Fg.Ahm;this.VX=Fg.VX;this.VY=
Fg.VY;this.VZ=Fg.VZ;this.Ag4=Fg.Ag4;this.Ag5=Fg.Ag5;this.Ag6=Fg.Ag6;this.AsC=Fg.
AsC;this.AsD=Fg.AsD;this.Aso=Fg.Aso;this.WJ=Fg.WJ;this.ZC=Fg.ZC;this.Aq8=Fg.Aq8;
this.Aq9=Fg.Aq9;this.Aq_=Fg.Aq_;},AkR:function(Fg){Fg.CE=this.CE;Fg.Cf=this.Cf;Fg.
B$=this.B$;Fg.Hy(this.An2);Fg.Fc(this.An3);Fg.CU(this.An4);Fg.AFn(this.Ahm);Fg.AFe(
this.VX);Fg.ArP(this.VY);Fg.Anz(this.VZ);Fg.C1(this.Ag4);Fg.Cw(this.Ag5);Fg.C2(this.
Ag6);Fg.OQ(this.AsC);Fg.OR(this.AsD);Fg.Aso=this.Aso;Fg.WJ=this.WJ;Fg.ZC=this.ZC;
Fg.Bm2(this.Aq8);Fg.ATl(this.Aq9);Fg.A_e(this.Aq_);},_Init:function(aArg){this.__proto__=
C.Aeu;this.VX=A.aaL(A.fl.Ak);this.VY=A.aaL(A.fl.Ak);this.VZ=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.VX=A.aaL(
A.fl.Ak);this.VY=A.aaL(A.fl.Ak);this.VZ=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.VX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VY)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag5)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CE)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.B$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Asz._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.ADi);},_className:"Application::NewAnimalSetTransponderScreen"};C.C8={Abb:null
,CountryToString:null,Du:function(){return 40;},C6:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gl:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lv(aIndex);},DZ:function(A7){return A7;
},H3:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abb)(F=this.Abb,F[2].call(F[0],E));},A1O:function(G){var F;if(!!this.Abb)this.Q=(
F=this.Abb,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_,this.Cb],0);},AE9:
function(E){if(A.aaZ(this.Abb,E))return;if(!!this.Abb)A.z$([this,this.A1O],this.
Abb,0);this.Abb=E;if(!!this.Abb)A.zX([this,this.A1O],this.Abb,0);A.pe([this,this.
A1O],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C8;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abb)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.O1={AC:null,Q:null,Background:null,Ip:null,Io:null,M4:
0,AM:0,Gq:0,F$:0,Agf:function(G){this.Kd(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IB=((Ae&0x40)===0x40);if(IB){this.Background.
L(A.jb.AV);this.C3(256);}else{this.Background.L(this.M4);this.C3(256);}},Age:function(
G){this.J_(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A3M],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A3M],E,0);if(!!E)A.pe([this
,this.A3M],this);},CT:function(E){if(this.M4===E)return;this.M4=E;this.Am();},Kd:
function(G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},J_:function(
G){var F;var BO=this.AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C6(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gq)E=this.F$;if(E>this.F$)E=this.Gq;if(this.AM===E)return;this.AM=E;
this.Am();},Ga:function(E){if(this.Gq===E)return;this.Gq=E;this.Am();},EU:function(
E){if(this.F$===E)return;this.F$=E;this.Am();},C4:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},A3M:function(G){var F;if(!!this.
AC){this.Ga(0);this.EU(this.AC.H3());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BK._Init.call(this.Ip={
I:this},0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.O1;this.H(Ban
);this.Background.H(Atl);this.Ip.Filter=4;this.Io.Filter=5;this.M4=A.jb.CJ;this.
J(this.Background,0);this.Ip.BL=[this,this.Agf];this.Ip.D1=[this,this.Agf];this.
Io.BL=[this,this.Age];this.Io.D1=[this,this.Age];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Ip._Done();this.Io._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.Ip._ReInit();this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RU={A1G:A.jV,Ai:function(
Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.A5K));this.Kw(this.A1G);},Ch:function(
G){C.FA.Ch.call(this,G);var AlC=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlC)this.A1G=Xd;else this.A1G=A._GetAutoObject(A.acj.KL).AjN(AlC);this.Am();
},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RU;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RW={A2L:0,Ai:function(Ae){C.FA.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARB));if(this.A2L>0)this.Kw(this.A2L.toFixed());else
this.Kw(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(this,G);this.A2L=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.FA._Init.call(
this,aArg);this.__proto__=C.RW;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Du:function(){return 5;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BS(aIndex);},DZ:function(A7){return A7;},H3:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Aky(E);},A17:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B_,
this.Cb],0);},L0:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A17],[B=this.Animal,B.ASF,B.Aky],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A17],[B=this.Animal,B.ASF,B.Aky],0);A.pe([this,this.A17],this);
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
},H3:function(){return 98;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal
)this.Animal.N1(E);},A1E:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B_,this.Cb],0);},L0:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1E],[B=this.Animal,B.Awc,B.N1],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1E],[B=this.Animal,B.Awc,B.N1],0);A.pe([
this,this.A1E],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.ARW={V9:null,YL:null,AeN:null,Init:function(
aArg){this.Bb(this.V9);},Adv:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YL)this.ByB();else if(Aa===this.V9)this.BBn(this);else throw new
Error(Ayl);A._GetAutoObject(A.Device.Device).Dw(0);},BBn:function(G){var B;var F;
var Vm=(C.Amv.isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null
);if(!Vm){A.ab5("%s",Brd);return;}Vm.AKG(this);},ByB:function(){A._GetAutoObject(
A.Device.Helper).W.AGI(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).A3(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mq._Init.call(this.V9={I:this},0);C.Mq._Init.call(this.YL={
I:this},0);C.VQ._Init.call(this.AeN={I:this},0);this.__proto__=C.ARW;var B;this.
H(AcP);this.V9.H(Qd);this.V9.Ar(true);this.V9.T(A.aaR(A.acf.A$i));this.V9.Bi(true
);this.YL.H(IV);this.YL.Ar(true);this.YL.T(A.aaR(A.acf.A48));this.YL.Bi(true);this.
AeN.H(BD);this.AeN.T(A.aaR(A.acf.ACS));this.AeN.Bi(true);this.J(this.V9,0);this.
J(this.YL,0);this.J(this.AeN,0);this.V9.AR=[this,this.Adv];this.YL.AR=[this,this.
Adv];this.AeN.AS$([B=A._GetAutoObject(A.Device.Device),B.Arw,B.Atn]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.V9._Done();this.YL._Done(
);this.AeN._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.V9._ReInit();this.YL._ReInit();this.AeN._ReInit();this.V9.
T(A.aaR(A.acf.A$i));this.YL.T(A.aaR(A.acf.A48));this.AeN.T(A.aaR(A.acf.ACS));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.V9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.VQ={
Ai:function(Ae){C.Ub.Ai.call(this,Ae);var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl
){FS=A.jb.Text;GY=A.jb.Bm;}if(!this.LI){this.Background.L(FS);this.V.L(A.jb.Am4);
}else if(this.Qv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KG){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FS);this.V.
L(GY);}if(this.AmD){this.Mo.Cv(1);this.Mo.L(A.jb.H8);}else{this.Mo.Cv(0);this.Mo.
L(A.jb.Bm);}},_Init:function(aArg){C.Ub._Init.call(this,aArg);this.__proto__=C.VQ;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.Av3={C9:null,A1:null,AF:
null,Akj:null,QY:null,EM:null,ASc:Lw,Bl:function(aSize){C.Co.Bl.call(this,aSize);
var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}this.Background.
L(FS);this.V.L(GY);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,Cs;C.Co.Ai.call(this
,Ae);this.Akj.L(this.V.AQ);this.QY.L(this.V.AQ);this.QY.R(Bre);this.T(((this.ASc+
A.aaR(A.acf.Colon))+CQ)+A._GetAutoObject(A.Device.Helper).Ak7(840003123456789).toFixed(
));if(!!this.A1&&!!this.AF){var A2R=this.QY.Afh([(this.QY.String.length-(F=this.
AF,F[1].call(F[0])))-(Cs=this.A1,Cs[1].call(Cs[0])),0]);var A4b=this.QY.Afh([this.
QY.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABi=this.QY.Dc();this.EM.H([
A2R[0]-1,ABi[1],A4b[0]+1,ABi[3]]);}else this.EM.H(this.QY.Dc());},DB:function(E){
if(this.C9===E)return;this.C9=E;this.Akj.Ax(E);},OO:function(E){if(A.aaZ(this.A1
,E))return;if(!!this.A1)A.z$([this,this.AaD],this.A1,0);this.A1=E;if(!!E)A.zX([this
,this.AaD],E,0);if(!!E)A.pe([this,this.AaD],this);},PU:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaF],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaF],E,0);if(!!E)A.pe([this,this.AaF],this);},AaF:function(G){this.Am(
);},AaD:function(G){this.Am();},Ar1:function(E){if(this.ASc===E)return;this.ASc=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akj={I:this},0);A.acg.Text._Init.call(this.QY={I:this},0);A.acg.BU._Init.call(
this.EM={I:this},0);this.__proto__=C.Av3;this.H(KZ);this.V.A6(0x11);this.Akj.H(O5
);this.QY.H(Brf);this.EM.H(Brg);this.EM.Nm(2);this.EM.L(A.jb.E1);this.J(this.Akj
,0);this.J(this.QY,0);this.J(this.EM,0);this.QY.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akj._Done();this.QY._Done();this.EM._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akj._ReInit();this.
QY._ReInit();this.EM._ReInit();this.QY.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUh:0,Init:
function(aArg){var B;A.zX([this,this.BeP],[B=A._GetAutoObject(A.Device.Device),B.
AEA,B.AIP],0);A.pe([this,this.BeP],this);},HP:function(G){C.TB.HP.call(this,G);if(
this.AjR)this.N.Cw(A.aaL(A.ach.AD));else this.N.Cw(A.aaL(A.ach.ANl));this.N.C2(A.
aaL(A.ach.Options));this.N.Fc(A.jV);this.N.CU(A.jV);this.N.Cf=[this,this.A_2];this.
N.B$=[this,this.WA];this.N.ArP(A.aaL(A.fl.Ak));this.N.Anz(A.aaL(A.fl.Ak));},MZ:function(
G){this.Be$(this);},Oo:function(G){this.BBg(this);},AdS:function(Aig,Aih,BxG){A.
_GetAutoObject(C.BR).ABJ(Aig,Aih,[this,this.A89,this.ATA],BxG);},WA:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjR){A._GetAutoObject(C.BR).
Ty(A.aaR(A.acf.Big),[this,this.Bod]);A._GetAutoObject(C.BR).Fz();}this.AdS(A.aaR(
A.acf.Rating),[this,this.ATY],3);this.AdS(A.aaR(A.acf.Afv),[this,this.AT0],2);this.
AdS(A.aaR(A.acf.Temperature),[this,this.ATZ],1);this.AdS(A.aaR(A.acf.AdV),[this,
this.Boa],0);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Bik
));A._GetAutoObject(A.Device.Device).Dw(6);},ATA:function(E){if(this.AUh===E)return;
this.AUh=E;A.abo([this,this.A89,this.ATA],0);},BeP:function(G){this.ATA(A._GetAutoObject(
A.Device.Device).D9);},A89:function(){return this.AUh;},_Init:function(aArg){C.TB.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={Vz:null
,Init:function(aArg){var B;A.zX([this,this.Aga],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);A.pe([this,this.BgY],this);A.pe([this,this.Q_],this);},CC:function(
G){C.TB.CC.call(this,G);A.pe([this,this.Bg3],this);},AGO:function(G){C.TB.AGO.call(
this,G);if(!!this.Lf)this.AhE(this.Lf,this.Vz);},HP:function(G){C.TB.HP.call(this
,G);this.N.Cw(A.aaL(A.ach.AQ$));this.N.C2(A.aaL(A.ach.ARa));if(this.AjR)this.N.ATl(
0);else this.N.ATl(1);this.N.A_e(A._GetAutoObject(A.Device.Converter).Bhq(A._GetAutoObject(
A.Device.Device).D9));this.N.Fc(A.jV);this.N.CU(A.jV);this.N.Cf=[this,this.Bl2];
this.N.B$=[this,this.Bof];this.N.ArP(A.aaL(A.fl.Ak));this.N.Anz(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QK()){this.N.I8.C3(100);this.N.Cf=null;
}else this.N.I8.C3(255);if(!A._GetAutoObject(A.Device.Device).An.B9()){this.N.Le.
C3(100);this.N.B$=null;}else this.N.Le.C3(255);if(A._GetAutoObject(A.Device.Device
).An.B9()<=1){this.N.T0.C3(100);this.N.T1.C3(100);}else{this.N.T0.C3(255);this.N.
T1.C3(255);}},MZ:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;
var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;if(LC>=A._GetAutoObject(A.
Device.Device).An.B9())LC=0;A._GetAutoObject(A.Device.Helper).G8(LC);},Oo:function(
G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)return;var LC=A._GetAutoObject(
A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(A.Device.Device).An.B9(
)-1;A._GetAutoObject(A.Device.Helper).G8(LC);},Af$:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.A8).Cd(94);},Bl2:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},Bof:function(G){this.Be$(this);},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).Mt());A.pe([this,this.Bg3
],this);},BgY:function(G){if(!A._GetAutoObject(A.Device.Device).An.B9()){this.Vz.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QK()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.Vz.R(A.aaR(A.acf.AEq));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DL(1,4)){if(A._GetAutoObject(A.Device.Helper).AC5(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Vz.R(A.aaR(A.acf.AOa));else this.Vz.R(A.aaR(
A.acf.AN$));}else this.Vz.R(A.aaR(A.acf.ASj));}else this.Vz.Z(false);},Bg3:function(
G){var BCe=A._GetAutoObject(A.Device.Helper).W.Id;var A4e=A._GetAutoObject(A.Device.
Device).An.LT(0,BCe);if(!A._GetAutoObject(A.Device.Device).An.B9())A._GetAutoObject(
A.Device.Helper).G8(-1);else if(A4e<0)A._GetAutoObject(A.Device.Helper).G8(0);},
Aga:function(G){this.BgY(this);this.HP(this);},_Init:function(aArg){C.TB._Init.call(
this,aArg);C.AkS._Init.call(this.Vz={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.APz);this.Vz.H(Ff);this.J(this.Vz,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TB;this.Vz._Done();C.TB._Done.call(this);},_ReInit:function(){
C.TB._ReInit.call(this);this.Vz._ReInit();},_Mark:function(D){var B;C.TB._Mark.call(
this,D);if((B=this.Vz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMy={QS:null,V_:null,AbF:null,YO:null,Init:function(aArg){var B;var F;this.Bb(
this.QS);if(!!A._GetAutoObject(C.A8).Q){var Vm=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vm){A.ab5("%s",AZ5);
return;}else{if(Vm.AjR)this.QS.T(A.aaR(A.acf.Bg));else this.QS.T(A.aaR(A.acf.ET)
);var Azx=A._GetAutoObject(A.Device.Device).An.Filter;if(!Azx||A._GetAutoObject(
A.Device.Helper).Are(Azx))this.YO.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).An.B9()){this.V_.Ar(false);this.QS.Ar(false);}}}},Adv:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbF)A._GetAutoObject(C.A8).Cd(9);else if(Aa===this.V_)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QS)this.BCJ();else if(Aa===this.YO)this.
A1M();else throw new Error(Ayl);},BCJ:function(){var B;var F;var Vm=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vm){A.
ab5("%s",AZ5);return;}Vm.A_2(this);},A1M:function(){var B;var F;var Vm=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A8).Q,F[1].call(F[0])))?B:null);if(!Vm){A.
ab5("%s",AZ5);return;}Vm.Q_(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mq._Init.call(this.QS={I:this},0);C.Mq._Init.call(this.V_={I:this},
0);C.Mq._Init.call(this.AbF={I:this},0);C.Mq._Init.call(this.YO={I:this},0);this.
__proto__=C.AMy;this.H(AfE);this.QS.H(Aad);this.QS.Ar(true);this.QS.T(A.aaR(A.acf.
ET));this.QS.Bi(true);this.V_.H(Qd);this.V_.Ar(true);this.V_.T(A.aaR(A.acf.AUH));
this.V_.Bi(true);this.AbF.H(IV);this.AbF.T(A.aaR(A.acf.AkU));this.AbF.Bi(true);this.
YO.H(BD);this.YO.T(A.aaR(A.acf.ACd));this.YO.Bi(true);this.J(this.QS,0);this.J(this.
V_,0);this.J(this.AbF,0);this.J(this.YO,0);this.QS.AR=[this,this.Adv];this.V_.AR=[
this,this.Adv];this.AbF.AR=[this,this.Adv];this.YO.AR=[this,this.Adv];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QS._Done();this.V_._Done(
);this.AbF._Done();this.YO._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QS._ReInit();this.V_._ReInit();this.AbF.
_ReInit();this.YO._ReInit();this.QS.T(A.aaR(A.acf.ET));this.V_.T(A.aaR(A.acf.AUH
));this.AbF.T(A.aaR(A.acf.AkU));this.YO.T(A.aaR(A.acf.ACd));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.I9={T2:null,EA:null,Yl:null,Background:null,Ap:null,Ip:null,Io:null,M4:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var IB=((Ae&0x40)===0x40);if(IB){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.C3(256);}else if(Hf){this.Background.L(this.M4);this.Ap.L(A.jb.Text);this.C3(
256);}else{this.Background.L(this.M4);this.Ap.L(A.jb.Text);this.C3(128);}if(!this.
AM)this.Ap.Cv(0);else if(this.AM>0){if(A.aaZ(this.T2,[B=A._GetAutoObject(A.Device.
Device),B.Awm,B.AyQ]))this.Ap.Cv(2);else if(A.aaZ(this.T2,[B=A._GetAutoObject(A.
Device.Device),B.Awl,B.AyP]))this.Ap.Cv(3);else if(!!this.Yl&&((F=this.Yl,F[1].call(
F[0]))===1))this.Ap.Cv(1);else this.Ap.Cv(0);}else if(A.aaZ(this.T2,[B=A._GetAutoObject(
A.Device.Device),B.Awm,B.AyQ]))this.Ap.Cv(6);else if(A.aaZ(this.T2,[B=A._GetAutoObject(
A.Device.Device),B.Awl,B.AyP]))this.Ap.Cv(7);else if(!!this.Yl&&((F=this.Yl,F[1].
call(F[0]))===1))this.Ap.Cv(5);else this.Ap.Cv(4);},Agf:function(G){this.Kd(this
);},Age:function(G){this.J_(this);},Kd:function(G){this.Bx(1);},J_:function(G){this.
Bx(-1);},Bna:function(E){if(A.aaZ(this.T2,E))return;if(!!this.T2)A.z$([this,this.
A3v],this.T2,0);this.T2=E;if(!!E)A.zX([this,this.A3v],this.T2,0);A.pe([this,this.
A3v],this);},Un:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Agd],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Agd],this.EA,0);if(!!E)A.pe([this
,this.Agd],this);},A3v:function(G){var F;if(!!this.T2)this.Bx((F=this.T2,F[1].call(
F[0])));},Agd:function(G){A.pe([this,this.BCW],this);},CT:function(E){if(this.M4===
E)return;this.M4=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T2)(F=this.T2,F[2].call(F[0],E));this.Am();A.abo([this,this.Ui,this.
Bx],0);},A96:function(E){if(A.aaZ(this.Yl,E))return;if(!!this.Yl)A.z$([this,this.
Agd],this.Yl,0);this.Yl=E;if(!!E)A.zX([this,this.Agd],this.Yl,0);if(!!E)A.pe([this
,this.Agd],this);},BCW:function(G){var F,Cs;if(!this.Yl||!this.EA)return;this.Bna(
A._GetAutoObject(A.Device.Helper).BdD((F=this.Yl,F[1].call(F[0])),(Cs=this.EA,Cs[
1].call(Cs[0]))));this.Am();},Ui:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BK._Init.call(this.Ip={I:this},0);
A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.I9;this.H(AIH);this.Background.
AZ(0x3F);this.Background.H(AIH);this.Ap.AZ(0x3C);this.Ap.H(AIH);this.Ip.Filter=4;
this.Io.Filter=5;this.M4=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AU8));this.Ip.BL=[this,this.Agf];this.Io.BL=[this,this.Age];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.Ip._Done();this.Io._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.Ip._ReInit(
);this.Io._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AL6={WA:function(G){var B;var F;this.Agx();if(!!A._GetAutoObject(A.Device.Helper
).AON((F=this.Fn,F[1].call(F[0])),0,true))this.AuI(A.aaR(A.acf.A6$),[this,this.Bog
],[B=A._GetAutoObject(A.Device.Device),B.A8q,B.Ba9]);else A._GetAutoObject(C.BR).
AaS(A.aaR(A.acf.A6$));A._GetAutoObject(C.BR).Fz();this.I2(A.aaR(A.acf.LinkTransponder
),[this,this.Bnr],8);this.I2(A.aaR(A.acf.Tx),[this,this.Akv],9);this.I2(A.aaR(A.
acf.Bab),[this,this.Bn4],10);this.I2(A.aaR(A.acf.AGk),[this,this.ATF],3);this.I2(
A.aaR(A.acf.An1),[this,this.AwX],2);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DE:function(G){},Abr:function(){return C.Aqu;},Abs:function(){return C.Aq1;
},Q_:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A6M((F=this.Fn,F[1].call(F[0]))));},HP:function(G){var F;C.GJ.HP.
call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.Converter
).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.
N.OQ(false);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(52);},A3A:
function(G){C.GJ.A3A.call(this,G);A.pe([this,this.A0F],this);},Bog:function(G){A.
_GetAutoObject(A.Device.Device).Aws(!A._GetAutoObject(A.Device.Device).Aqe);this.
An9(this);},An9:function(G){var F;var Be=A._GetAutoObject(A.Device.Device).An.Filter.
E_();A._GetAutoObject(A.Device.Helper).BoO(Be);if(A._GetAutoObject(A.Device.Device
).Aqe){var A2t=A._GetAutoObject(A.Device.Helper).AON((F=this.Fn,F[1].call(F[0]))
,21600,true);Be.CW(A2t);}A._GetAutoObject(A.Device.Device).An.Bk(Be);},_Init:function(
aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AL6;var B;this.Dk(A.aaR(A.acf.
Av8));this.AwS([B=A._GetAutoObject(A.Device.Device),B.A8p,B.Ba8]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dk(A.aaR(A.acf.Av8));},_className:"Application::ActionListScreen"
};C.AL5={_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AL5;},
_className:"Application::ActionListFilterScreen"};C.APz={IM:null,IS:null,Bc:null
,MD:A.jV,Init:function(aArg){var B;A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9b,B.A_A],0);A.zX([this,this.Ns],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);},Df:function(E){C.IK.Df.call(this,E);this.IS.L(E);},DX:function(
G){C.IK.DX.call(this,G);var Azx=A._GetAutoObject(A.Device.Device).An.Filter;if(!
Azx||A._GetAutoObject(A.Device.Helper).Are(Azx))this.IM.Z(false);else this.IM.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.AqY())this.Aw4(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+Bao)+A._GetAutoObject(A.Device.Device).An.B9().
toFixed());else this.Aw4(Bap);},Aw4:function(E){if(this.MD===E)return;this.MD=E;
this.IS.R(E);},_Init:function(aArg){C.IK._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IM={I:this},0);A.acg.Text._Init.call(this.IS={I:this},0);A.acg.C7._Init.call(
this.Bc={I:this},0);this.__proto__=C.APz;this.HQ.H(Brh);this.DS.H(Bri);this.IM.H(
Brj);this.IM.L(A.jb.Text);this.IS.H(Baq);this.IS.Hn(2);this.IS.KS(true);this.IS.
A6(0x12);this.IS.R(Bar);this.Bc.DC(AyE);this.Bc.DM(Atj);this.Bc.L(A.jb.Bc);this.
J(this.IM,0);this.J(this.IS,0);this.J(this.Bc,0);this.IM.Ax(A.aaL(A.ach.AeC));this.
IS.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IK;this.
IM._Done();this.IS._Done();this.Bc._Done();C.IK._Done.call(this);},_ReInit:function(
){C.IK._ReInit.call(this);this.IM._ReInit();this.IS._ReInit();this.Bc._ReInit();
this.IS.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IK._Mark.call(this,D);if((
B=this.IM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsJ={Text:null,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.O1.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xd);else this.Text.R(this.AC.Gl((F=this.Q,F[1].call(F[0]
))));var IB=((Ae&0x40)===0x40);if(IB)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.O1._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsJ;this.Text.R(Rp);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.O1;this.Text._Done();C.O1.
_Done.call(this);},_ReInit:function(){C.O1._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.O1._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Arb={C9:null,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.C9.H(A.abK(this.
C9.M,aSize));},Ai:function(Ae){var B;var F;C.O1.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C9.Ax(null);else{this.C9.Ax(this.AC.AC0(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C9.Cv(this.AC.AC2(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IB=((
Ae&0x40)===0x40);if(IB)this.C9.L(A.jb.Bm);else this.C9.L(A.jb.Text);},_Init:function(
aArg){C.O1._Init.call(this,aArg);A.acg.Ap._Init.call(this.C9={I:this},0);this.__proto__=
C.Arb;this.H(AIH);this.C9.H(Ban);this.J(this.C9,0);},_Done:function(){this.__proto__=
C.O1;this.C9._Done();C.O1._Done.call(this);},_ReInit:function(){C.O1._ReInit.call(
this);this.C9._ReInit();},_Mark:function(D){var B;C.O1._Mark.call(this,D);if((B=
this.C9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Au7={VT:null,DirectionOfCountingToString:null,Aei:null,Du:function(){return 2;
},C6:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},Gl:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jV;return this.
DirectionOfCountingToString.BS(aIndex);},DZ:function(A7){return A7;},H3:function(
){return this.Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.VT)(F=
this.VT,F[2].call(F[0],E));},AC0:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Aei.AsK(aIndex);},AC2:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Aei.AsL(aIndex);},A10:function(G){var F;
if(!!this.VT)this.Q=(F=this.VT,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.Cb],0);},Ae1:function(E){if(A.aaZ(this.VT,E))return;if(!!this.VT)A.z$([this
,this.A10],this.VT,0);this.VT=E;if(!!this.VT)A.zX([this,this.A10],this.VT,0);A.pe([
this,this.A10],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aei._Init.call(this.Aei={I:this},0);this.__proto__=C.Au7;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aei._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aei._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.VT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMq={Hu:null,EA:null,AnimalIdGenerationMethodToString:
null,AdZ:null,Du:function(){return 4;},C6:function(aIndex){var F;var A7=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A7=0;break;case 1:A7=1;break;
case 2:A7=this.BzM((F=this.EA,F[1].call(F[0])));break;case 3:A7=5;break;default:
throw new Error(Brk+aIndex.toFixed());}return A7;},Gl:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jV;return this.AnimalIdGenerationMethodToString.
BS(this.C6(aIndex));},DZ:function(A7){var aIndex=-1;switch(A7){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Brl+A7.toFixed());}return aIndex;},H3:function(){return this.
Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hu)(F=this.Hu,F[2].
call(F[0],E));},AC0:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.AdZ.AsK(this.C6(aIndex));},AC2:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.AdZ.AsL(this.C6(aIndex));},A1u:function(G){var F;
if(!!this.Hu)this.Q=(F=this.Hu,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.Cb],0);},Bl_:function(E){if(A.aaZ(this.Hu,E))return;if(!!this.Hu)A.z$([this
,this.A1u],this.Hu,0);this.Hu=E;if(!!this.Hu)A.zX([this,this.A1u],this.Hu,0);A.pe([
this,this.A1u],this);},Un:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Agd],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Agd],this.EA
,0);A.pe([this,this.Agd],this);},Agd:function(G){A.pe([this,this.ByD],this);},BzM:
function(L6){var Rr=0;switch(L6){case 0:Rr=2;break;case 1:Rr=3;break;case 2:Rr=4;
break;default:throw new Error(Brm+L6.toFixed());}return Rr;},ByD:function(G){var
BeB=this.C6(this.DZ(this.Q));if(this.Q!==BeB)this.Au(BeB);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.AdZ._Init.call(this.
AdZ={I:this},0);this.__proto__=C.AMq;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.AdZ._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.AdZ._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGK={FM:null,AaZ:null,Q:null,Fm:null,Fa:null,HH:null,Ws:null,AW:null,HZ:null
,Kn:null,A_:0,AM:0,Alu:0,Init:function(aArg){var B;A.zX([this,this.BeO],[B=A._GetAutoObject(
A.Device.Device),B.Anq,B.Aoy],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CT(A.jb.CJ);this.Ws.CT(A.jb.CJ);
this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CS);this.HH.
CT(A.jb.CS);this.Ws.CT(A.jb.CS);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}
}else{if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CT(A.jb.CJ);this.Ws.CT(A.jb.CJ);}else{
this.AW.FO(A.jb.CS);this.HH.CT(A.jb.CS);this.Ws.CT(A.jb.CS);}this.Bb(null);}},I0:
function(G){C.Eg.I0.call(this,G);if(!this.A_)this.FV(this);else this.He(this);},
DJ:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CU(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}break;
default:this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:
function(G){this.Ex(0);},Ex:function(EN){var F;if(!this.A_&&!!this.N)this.FM.AjB((
F=this.N,F[1].call(F[0])));this.A_=EN;if(this.A_<0)this.A_=0;else if(this.A_>1)this.
A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{if(this.AW.A8J())this.Bb(
this.AW);else this.Bb(this.Ws);if(!this.AM)this.AW.SP(2);else this.AW.SP(7);}break;
default:throw new Error(Atm+this.A_.toFixed());}this.DJ(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);},C4:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ui,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Oo:function(G){this.ABa(2);},MZ:function(G){this.ABa(
7);},ABa:function(GA){var B;var Azy=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!Azy){var AAo=(A.Core.P.isPrototypeOf(B=this.QJ(Azy,GA,0x15))?B:null);if(!!AAo){
this.Bb(AAo);return true;}}return false;},Ao1:function(G){A.pe([this,this.BeO],this
);},A4p:function(G){var B;var F;if(!this.HZ.Hu){this.Kn.Ae1(null);return;}switch((
F=this.HZ.Hu,F[1].call(F[0]))){case 0:case 1:this.Kn.Ae1(null);break;case 3:this.
Kn.Ae1([B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0m]);break;case 2:this.Kn.Ae1([
B=A._GetAutoObject(A.Device.Device),B.ASE,B.A0n]);break;case 4:case 5:this.Kn.Ae1([
B=A._GetAutoObject(A.Device.Device),B.AEF,B.AIT]);break;default:throw new Error(
Brn+(F=this.HZ.Hu,F[1].call(F[0])).toFixed());}},BeO:function(G){var F;if(!this.
HZ.Hu)return;A.pe([this,this.A4p],this);var At2=false;switch((F=this.HZ.Hu,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{At2=true;this.AW.A_U(-1);}break;case 0:
case 1:{At2=false;this.AW.A_U(A._GetAutoObject(A.Device.Device).A1);}break;default:
throw new Error(Ayw+(F=this.HZ.Hu,F[1].call(F[0])).toFixed());}this.AW.Ar(At2);this.
HH.Ar(At2);this.HH.Z(At2);if(((F=this.HZ.Hu,F[1].call(F[0]))!==this.Alu)||(At2===
false)){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMo((F=this.HZ.
Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).BjT((F=this.HZ.Hu,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Ku(A._GetAutoObject(A.Device.Device).A1);else this.AW.Ku(0);this.Alu=(
F=this.HZ.Hu,F[1].call(F[0]));},A9I:function(E){var B;if(this.AaZ===E)return;if(
!!this.AaZ){A.z$([this,this.Ao1],[B=this.AaZ,B.Wy,B.JU],0);A.z$([this,this.Ao1],[
B=this.AaZ,B.Anu,B.Nj],0);A.z$([this,this.Ao1],[B=this.AaZ,B.ArA,B.PW],0);this.HZ.
Un(null);}this.AaZ=E;if(!!E){A.zX([this,this.Ao1],[B=this.AaZ,B.Wy,B.JU],0);A.zX([
this,this.Ao1],[B=this.AaZ,B.Anu,B.Nj],0);A.zX([this,this.Ao1],[B=this.AaZ,B.ArA
,B.PW],0);this.HZ.Un([B=this.AaZ,B.Wy,B.JU]);}if(!!E)A.pe([this,this.Ao1],this);
},Ui:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0
);C.Arb._Init.call(this.HH={I:this},0);C.Arb._Init.call(this.Ws={I:this},0);C.AvT.
_Init.call(this.AW={I:this},0);C.AMq._Init.call(this.HZ={I:this},0);C.Au7._Init.
call(this.Kn={I:this},0);this.__proto__=C.AGK;var B;this.H(UY);this.V.Ar(false);
this.V.R(Atc);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fa.Filter=7;this.HH.H(Bro);
this.HH.Ar(false);this.Ws.H(Brp);this.AW.H(Brq);this.AW.Ar(false);this.J(this.HH
,0);this.J(this.Ws,0);this.J(this.AW,0);this.FM=A._NewObject(C.Aeu,0);this.Fm.BL=[
this,this.Oo];this.Fa.BL=[this,this.MZ];this.HH.CK(this.Kn);this.HH.Au([B=this.Kn
,B.B_,B.Cb]);this.Ws.CK(this.HZ);this.Ws.Au([B=this.HZ,B.B_,B.Cb]);this.AW.Au([this
,this.Ui,this.Bx]);this.HZ.Bl_([B=A._GetAutoObject(A.Device.Device),B.Anq,B.Aoy]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fa.
_Done();this.HH._Done();this.Ws._Done();this.AW._Done();this.HZ._Done();this.Kn.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fm._ReInit();this.Fa._ReInit();this.HH._ReInit();this.Ws._ReInit();this.AW._ReInit(
);this.HZ._ReInit();this.Kn._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ws)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G5={AzQ:null,Fm:null,Fa:null,G2:null,
F0:null,EM:null,M9:0,AM5:0,AB5:0,Uu:0,A$_:-1,AM4:false,Init:function(aArg){A.pe([
this,this.A0S],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
AM4);this.EM.H(A.wC(this.Yq(this.AB5).M,this.Yq((this.AB5+this.AM5)-1).M));},Oo:
function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var A1J=this.Bgl(2);if(A1J===
false)D5.NL=true;},MZ:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);var
A1J=this.Bgl(7);if(A1J===false)D5.NL=true;},Bgl:function(GA){var B;var DV=(C.DF.
isPrototypeOf(B=this.AV)?B:null);DV=this.BdF(DV,GA,true);if(!!DV){this.Bb(DV);this.
AzQ=(C.DF.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adu:function(
G){A.ab5("%s",Alg);},GX:function(s){this.Adu(s);},FO:function(E){if(this.M9===E)
return;this.M9=E;this.F0.CT(E);this.G2.CT(E);},SP:function(GA){var B;switch(GA){
case 2:this.Bb(this.G2);break;case 7:this.Bb(this.F0);break;default:A.ab5("%s%e"
,Brr,GA);}this.AzQ=(C.DF.isPrototypeOf(B=this.AV)?B:null);},LO:function(G){},A0S:
function(s){this.LO(s);},AE3:function(E){if(this.AM4===E)return;this.AM4=E;this.
Am();},A9O:function(E){if(this.AM5===E)return;this.AM5=E;this.Am();},A9N:function(
E){if(this.AB5===E)return;this.AB5=E;this.Am();},Yq:function(HA){var B5=null;switch(
HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.G2;break;default:A.ab5("%s",Ah4
);}return B5;},Ku:function(E){if(this.Uu===E)return;this.Uu=E;this.Amo();},Amo:function(
){A.ab5("%s",Alg);},BdF:function(Ac2,GA,LI){var B;if(!!Ac2){var Be;if(LI)Be=0x11;
else Be=0x0;switch(GA){case 2:Ac2=(C.DF.isPrototypeOf(B=this.AqM(Ac2,Be))?B:null
);break;case 7:Ac2=(C.DF.isPrototypeOf(B=this.TP(Ac2,Be))?B:null);break;default:
throw new Error(Brs);}}return Ac2;},A_U:function(E){if(this.A$_===E)return;this.
A$_=E;var DV=this.F0;var A18;while(!!DV){A18=!!E;DV.Ar(A18);DV.Z(A18);if(DV===this.
AzQ)this.Bb(DV);DV=this.BdF(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.
call(this.Fa={I:this},0);C.DF._Init.call(this.G2={I:this},0);C.DF._Init.call(this.
F0={I:this},0);A.acg.BU._Init.call(this.EM={I:this},0);this.__proto__=C.G5;this.
H(Brt);this.Fm.Filter=6;this.Fa.Filter=7;this.M9=A.jb.CJ;this.G2.H(E6);this.F0.H(
Bas);this.EM.H(Bru);this.EM.Nm(2);this.EM.L(A.jb.E1);this.J(this.G2,0);this.J(this.
F0,0);this.J(this.EM,0);this.Fm.BL=[this,this.Oo];this.Fm.D1=[this,this.Oo];this.
Fa.BL=[this,this.MZ];this.Fa.D1=[this,this.MZ];this.AzQ=this.F0;this.G2.Dj=[this
,this.GX];this.F0.Dj=[this,this.GX];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fm._Done();this.Fa._Done();this.G2._Done();this.F0._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fm._ReInit();this.Fa._ReInit();this.G2._ReInit();this.F0._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AzQ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.ARf={Dy:null,CV:null,Ct:null
,FO:function(E){if(this.M9===E)return;C.HK.FO.call(this,E);this.Ct.CT(E);this.CV.
CT(E);this.Dy.CT(E);},Yq:function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.
F0;break;case 1:B5=this.Ct;break;case 2:B5=this.CV;break;case 3:B5=this.Dy;break;
case 4:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},_Init:function(aArg
){C.HK._Init.call(this,aArg);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(
this.CV={I:this},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.ARf;this.
H(Brv);this.G2.H(Atl);this.Dy.H(Bat);this.CV.H(Bau);this.Ct.H(Bav);this.F0.H(Brw
);this.J(this.Dy,-2);this.J(this.CV,-2);this.J(this.Ct,-2);this.Dy.Dj=[this,this.
GX];this.CV.Dj=[this,this.GX];this.Ct.Dj=[this,this.GX];},_Done:function(){this.
__proto__=C.HK;this.Dy._Done();this.CV._Done();this.Ct._Done();C.HK._Done.call(this
);},_ReInit:function(){C.HK._ReInit.call(this);this.Dy._ReInit();this.CV._ReInit(
);this.Ct._ReInit();},_Mark:function(D){var B;C.HK._Mark.call(this,D);if((B=this.
Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVJ={Rc:null,AcH:null,AVI:0,CC:function(G){this.AcH.Ar(true);},E4:function(G
){this.AcH.Ar(false);},Bn2:function(E){if(this.AVI===E)return;this.AVI=E;this.Rc.
R((((A.aaR(A.acf.AVH)+AcS)+E.toFixed())+Brx)+A.aaR(A.acf.Lc));},BlV:function(){return this.
AVI;},BBD:function(G){A._GetAutoObject(C.A8).Cd(3);A._GetAutoObject(A.Device.Device
).Anx(1);},_Init:function(aArg){C.X0._Init.call(this,aArg);C.CH._Init.call(this.
Rc={I:this},0);A.acl.Gm._Init.call(this.AcH={I:this},0);this.__proto__=C.AVJ;this.
AeO.H(Bry);this.UC.R(A.jV);this.Rc.H(Brz);this.Rc.R(A.aaR(A.acf.AVH)+Baw);this.Rc.
L(A.jb.Text);this.AcH.HN(1);this.AcH.Fr(5000);this.AcH.B2=100;this.J(this.Rc,0);
this.Rc.S(A.aaL(A.fl.Af));this.Rc.A2(A.aaL(A.fl.Ak));this.Rc.Cu(A.aaL(A.fl.Bh));
this.AcH.SB=[this,this.BBD];this.AcH.Q=[this,this.BlV,this.Bn2];},_Done:function(
){this.__proto__=C.X0;this.Rc._Done();this.AcH._Done();C.X0._Done.call(this);},_ReInit:
function(){C.X0._ReInit.call(this);this.Rc._ReInit();this.AcH._ReInit();this.Rc.
R(A.aaR(A.acf.AVH)+Baw);this.Rc.S(A.aaL(A.fl.Af));this.Rc.A2(A.aaL(A.fl.Ak));this.
Rc.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X0._Mark.call(this,D);if((B=this.
Rc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.AR9={K5:null,Lk:null,Beq:false,Init:
function(aArg){this.Bb(this.Da);},Ew:function(G){var B;if(!!this.K5)this.K5.Ew(this
);C.Wu.Ew.call(this,G);},Agh:function(G){var B;if(!!this.K5)this.K5.Agh(this);C.
Wu.Agh.call(this,G);},CC:function(G){var B;if(!this.Beq){this.Beq=true;A.pe([this
,this.A3U],this);}else if(!this.K5){this.K5=A._NewObject(C.AR$,0);this.K5.A92([this
,this.AA1]);this.LO(this);this.K5.LO(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.Wu.CC.call(this,G);}else C.Wu.CC.call(this,G
);},Ap5:function(G){var B;if(!!this.K5)this.K5.Ap5(this);},AA1:function(G){var B;
var F;this.LO(this);this.K5.LO(this);A.pe([this,this.AcT],this);var Bd3=this.LV;
this.AeY(A._GetAutoObject(A.Device.Helper).Abp(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVG(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bd3);if(Bd3)A._GetAutoObject(
A.Device.Helper).W.PW(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SJ(A._GetAutoObject(A.Device.Helper).AMo((F=this.Di.HZ.Hu,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JH(this.Da);},A3U:function(
G){A._GetAutoObject(C.A8).Cd(79);},_Init:function(aArg){C.Wu._Init.call(this,aArg
);C.Rb._Init.call(this.Lk={I:this},0);this.__proto__=C.AR9;var B;this.Lk.H(Ah1);
this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACu));this.J(this.Lk,-9);this.JZ(this.Gn,-
1);this.Lk.Gs([this,this.D_,this.GS]);this.Lk.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASN,B.AnF]);this.Init(aArg);},_Done:function(){this.__proto__=C.Wu;this.Lk.
_Done();C.Wu._Done.call(this);},_ReInit:function(){C.Wu._ReInit.call(this);this.
Lk._ReInit();this.Lk.T(A.aaR(A.acf.ACu));},_Mark:function(D){var B;C.Wu._Mark.call(
this,D);if((B=this.K5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
ADT={AgQ:null,AgR:null,NO:null,NN:null,ES:null,FZ:null,Eq:null,Dy:null,CV:null,Ct:
null,FO:function(E){if(this.M9===E)return;C.Lg.FO.call(this,E);this.Ct.CT(E);this.
CV.CT(E);this.Dy.CT(E);this.Eq.CT(E);this.FZ.CT(E);this.ES.CT(E);this.NN.CT(E);this.
NO.CT(E);this.AgR.CT(E);this.AgQ.CT(E);},Yq:function(HA){var B5=null;switch(HA){
case-1:case 0:B5=this.F0;break;case 1:B5=this.Ct;break;case 2:B5=this.CV;break;case
3:B5=this.Dy;break;case 4:B5=this.Eq;break;case 5:B5=this.FZ;break;case 6:B5=this.
ES;break;case 7:B5=this.NN;break;case 8:B5=this.NO;break;case 9:B5=this.AgR;break;
case 10:B5=this.AgQ;break;case 11:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;
},_Init:function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(this.AgQ={I:this
},0);C.DF._Init.call(this.AgR={I:this},0);C.DF._Init.call(this.NO={I:this},0);C.
DF._Init.call(this.NN={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CV={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADT;this.H(BrA);this.G2.H(AII);this.AgQ.H(AyF);this.AgR.H(
AZ6);this.NO.H(AZ7);this.NN.H(AZ8);this.ES.H(AZ9);this.FZ.H(AZ_);this.Eq.H(AZ$);
this.Dy.H(Bax);this.CV.H(A0a);this.Ct.H(BrB);this.F0.H(BrC);this.J(this.AgQ,-2);
this.J(this.AgR,-2);this.J(this.NO,-2);this.J(this.NN,-2);this.J(this.ES,-2);this.
J(this.FZ,-2);this.J(this.Eq,-2);this.J(this.Dy,-2);this.J(this.CV,-2);this.J(this.
Ct,-2);this.AgQ.Dj=[this,this.GX];this.AgR.Dj=[this,this.GX];this.NO.Dj=[this,this.
GX];this.NN.Dj=[this,this.GX];this.ES.Dj=[this,this.GX];this.FZ.Dj=[this,this.GX
];this.Eq.Dj=[this,this.GX];this.Dy.Dj=[this,this.GX];this.CV.Dj=[this,this.GX];
this.Ct.Dj=[this,this.GX];},_Done:function(){this.__proto__=C.Lg;this.AgQ._Done(
);this.AgR._Done();this.NO._Done();this.NN._Done();this.ES._Done();this.FZ._Done(
);this.Eq._Done();this.Dy._Done();this.CV._Done();this.Ct._Done();C.Lg._Done.call(
this);},_ReInit:function(){C.Lg._ReInit.call(this);this.AgQ._ReInit();this.AgR._ReInit(
);this.NO._ReInit();this.NN._ReInit();this.ES._ReInit();this.FZ._ReInit();this.Eq.
_ReInit();this.Dy._ReInit();this.CV._ReInit();this.Ct._ReInit();},_Mark:function(
D){var B;C.Lg._Mark.call(this,D);if((B=this.AgQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ES)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HK={Q:null,AM:0,Ai:function(Ae){C.G5.Ai.call(this
,Ae);this.Amo();},Adu:function(G){var B;var F;var Iz=A.jV;var B5=this.G2;while(!
!B5){if(B5.Ez>0)Iz=Iz+B5.Ez.toFixed();else Iz=Iz+String.fromCharCode(0x30);B5=(C.
DF.isPrototypeOf(B=this.TP(B5,0x11))?B:null);}var BO=this.AM;this.Bx(A.wz(Iz,-1,
10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LO:function(G){},Amo:function(){var B;var F;if(!!this.Q){var DV=this.F0;
var AdD=this.Uu;var A7=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A7>0){DV.L1(A7%
10);A7=(A7/10)|0;}else if(AdD>0)DV.L1(0);else DV.L1(-1);DV=(C.DF.isPrototypeOf(B=
this.AqM(DV,0x11))?B:null);AdD=AdD-1;}}},C4:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)
A.pe([this,this.C4],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G5._Init.call(this,aArg);this.__proto__=C.HK;},_Mark:
function(D){var B;C.G5._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lg={AM:0,Q:null
,Ai:function(Ae){C.G5.Ai.call(this,Ae);this.Amo();},Adu:function(G){var B;var F;
var Iz=A.jV;var B5=this.G2;while(!!B5){if(B5.Ez>0)Iz=Iz+B5.Ez.toFixed();else Iz=
Iz+String.fromCharCode(0x30);B5=(C.DF.isPrototypeOf(B=this.TP(B5,0x11))?B:null);
}var BO=this.AM;this.Bx(A.ab0(Iz,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LO:function(G){},Amo:function(){var B;
var F;if(!!this.Q){var DV=this.F0;var AdD=this.Uu;var A7=(F=this.Q,F[1].call(F[0
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
BS(aIndex);},DZ:function(A7){return A7;},H3:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvT={Eq:null,Dy:null,CV:null,Ct:null,FO:function(E){if(this.M9===E)return;C.
HK.FO.call(this,E);this.Ct.CT(E);this.CV.CT(E);this.Dy.CT(E);this.Eq.CT(E);},Yq:
function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Ct;break;case 2:B5=this.CV;break;case 3:B5=this.Dy;break;case 4:B5=this.Eq;break;
case 5:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},_Init:function(aArg
){C.HK._Init.call(this,aArg);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(
this.Dy={I:this},0);C.DF._Init.call(this.CV={I:this},0);C.DF._Init.call(this.Ct={
I:this},0);this.__proto__=C.AvT;this.H(Ayp);this.G2.H(AHP);this.Eq.H(AHQ);this.Dy.
H(AHR);this.CV.H(AHS);this.Ct.H(AHT);this.F0.H(AHU);this.EM.H(Bay);this.J(this.Eq
,-2);this.J(this.Dy,-2);this.J(this.CV,-2);this.J(this.Ct,-2);this.Eq.Dj=[this,this.
GX];this.Dy.Dj=[this,this.GX];this.CV.Dj=[this,this.GX];this.Ct.Dj=[this,this.GX
];},_Done:function(){this.__proto__=C.HK;this.Eq._Done();this.Dy._Done();this.CV.
_Done();this.Ct._Done();C.HK._Done.call(this);},_ReInit:function(){C.HK._ReInit.
call(this);this.Eq._ReInit();this.Dy._ReInit();this.CV._ReInit();this.Ct._ReInit(
);},_Mark:function(D){var B;C.HK._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AUP={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bpf(0);this.AttributeSet.Bpg(1);this.AttributeSet.Bph(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var IB=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FS=A.jb.CJ;var GY=A.jb.Text;if(this.Hl){FS=
A.jb.Bm;GY=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CS);this.V.L(A.jb.CJ);this.
AttributeSet.Ahq(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahq(A.jb.Bm);}else if(IB){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahq(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.
Am4);this.V.L(A.jb.Bm);this.AttributeSet.Ahq(A.jb.Bm);}else{this.Background.L(FS
);this.V.L(GY);this.AttributeSet.Ahq(GY);}this.LI=Hf;this.KG=Fw;this.Qv=GE;this.
Aph=IB;},Hm:function(G){var B;var Gg=this.Dz.G6;var CA=(A.acg.AuU.isPrototypeOf(
B=this.Dz.Cj)?B:null);CA.A9K(this.AttributeSet);CA.A6(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.BzF(this.AC.Gl(Gg)));else CA.R(Xd);CA.H(A.abK(CA.M,[this.Dz.Wc,(B=this.
Dz.M)[3]-B[1]]));},BzF:function(Bx5){var AAL=Bx5;AAL=A._GetAutoObject(A.Device.Helper
).MG(AAL,BrD,BrE);AAL=A._GetAutoObject(A.Device.Helper).MG(AAL,BrF,BrG);return BrH+
AAL;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AUP;this.Dz.H(BrI);this.Dz.Jy(2);
this.Dz.N2(A.acg.AuU);this.AttributeSet.Ahq(this.V.AQ);this.AttributeSet.BmU(A.aaL(
A.fl.AOE));this.AttributeSet.A_b(A.aaL(A.fl.Ak));this.AttributeSet.Aht(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A_b(A.aaL(A.fl.Ak));this.AttributeSet.Aht(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.Asz._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dr(C.ADj);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Du:function(){return 14;},C6:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gl:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BS(aIndex
);},DZ:function(A7){return A7;},H3:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OU={FM:null,EnumToCodeset:
null,Jw:null,A_:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A_===1){
if(this.Hl){this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BW.Bx.call(this,E);var BAA=this.
EnumToCodeset.AmG(this.Number);var BeA=this.AC.C6(this.AM);if(BAA!==BeA){this.AFC(
this.EnumToCodeset.Ael(BeA));A.abo([this,this.ASO,this.AFC],0);}},DJ:function(G){
var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[
this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(
A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=
this.N,F[1].call(F[0])).CU(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}break;default:
this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.Ex(1);},He:function(
G){this.Ex(0);},Ex:function(EN){var F;if(!this.A_)this.FM.AjB((F=this.N,F[1].call(
F[0])));this.A_=EN;if((this.A_<0)||(this.A_>1))this.A_=0;this.DJ(this);if(!this.
A_)this.Bb(null);else this.A2j();this.Am();},AFC:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.AqU()>E)E=this.EnumToCodeset.
AqU();if(this.EnumToCodeset.H3()<E)E=this.EnumToCodeset.H3();}this.Number=E;var BO=
this.AM;if(!!this.EnumToCodeset){var Bzv=this.EnumToCodeset.AmG(E);this.Bx(this.
AC.DZ(Bzv));if(this.AM!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C6(this.AM)));A.abo(this.Q,0);}}},Any:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Vb:function(G){this.Ex(this.A_+1);},A2j:function(){A.ab5(
"%s",BrJ);},ASO:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BK._Init.call(this.Jw={I:this},0);this.__proto__=C.OU;this.
Jw.Filter=1;this.FM=A._NewObject(C.Aeu,0);this.Jw.BL=[this,this.Vb];},_Done:function(
){this.__proto__=C.BW;this.Jw._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Jw._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeV={Text:null,Ai:function(
Ae){C.El.Ai.call(this,Ae);this.Text.L(this.ACV);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rj(this.AM));this.
Am();},AaF:function(G){A.pe([this,this.Agc],this);},AaD:function(G){A.pe([this,this.
Agc],this);},Al1:function(G){A.pe([this,this.Agc],this);},Agc:function(G){if((!this.
Ij||!this.A1)||!this.AF)return;},_Init:function(aArg){C.El._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeV;this.Text.AZ(0x3F
);this.Text.H(As8);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.El;this.Text._Done();C.El.
_Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AR2={GI:0,C8:null,AW:null,E$:null,
I9:null,CountryToString:null,La:0,Mb:false,Init:function(aArg){A.zX([this,this.ML
],[this,this.SC,this.Lp],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.I9.Z(this.
Afp);this.AW.FO(this.LS);this.E$.CT(this.LS);this.I9.CT(this.LS);},DJ:function(G
){var F;if(!this.N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CU(this.CountryToString.BS(this.La));(F=this.N,
F[1].call(F[0])).B$=null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CU(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}}},Ex:function(EN){var To=this.
A_;this.A_=EN;if(this.A_<0)this.A_=0;else if(this.A_>this.RJ)this.A_=this.RJ;if((
this.A_===1)&&!this.Afp)this.A_=2;switch(this.A_){case 0:{this.Bb(null);if(!this.
GI)this.Lp(0);}break;case 1:this.Bb(this.I9);break;case 2:this.Bb(this.E$);break;
case 3:{this.Bb(this.AW);if(!this.GI||(To>0))this.AW.SP(2);else this.AW.SP(7);}break;
default:throw new Error(Atm+this.A_.toFixed());}C.El.Ex.call(this,this.A_);},App:
function(G){this.I9.Un(this.EA);},AaF:function(G){var F;this.AW.A9N((F=this.AF,F[
1].call(F[0])));},AaD:function(G){var F;this.AW.A9O((F=this.A1,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mb=true;this.SF(A._GetAutoObject(
A.Device.Helper).Sj(E,0,12));this.Lp(A._GetAutoObject(A.Device.Converter).S2(E));
this.Mb=false;if(!!E)this.AW.Ku(12);else this.AW.Ku(0);this.Am();},Al1:function(
G){A.pe([this,this.Agc],this);},FV:function(G){var F;if(!this.AM){var BO=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).AC_());if(this.AM!==BO){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjO:function(){return this.
GI;},AjQ:function(){return 999999999999;},Lp:function(E){if(this.La===E)return;this.
La=E;if(this.Mb===false)A.pe([this,this.Vo],this);A.abo([this,this.SC,this.Lp],0
);},SF:function(E){if(this.GI===E)return;this.GI=E;if(this.Mb===false)A.pe([this
,this.Vo],this);A.abo([this,this.AbX,this.SF],0);},Vo:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.La),3,10)+A.abm(this.GI,12,10
);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agc:function(G){var F;if((!this.Ij||
!this.A1)||!this.AF)return;if(!(F=this.Ij,F[1].call(F[0])))this.AW.AE3(true);else
this.AW.AE3(false);},SC:function(){return this.La;},AbX:function(){return this.GI;
},_Init:function(aArg){C.El._Init.call(this,aArg);C.C8._Init.call(this.C8={I:this
},0);C.ADT._Init.call(this.AW={I:this},0);C.AsJ._Init.call(this.E$={I:this},0);C.
I9._Init.call(this.I9={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AR2;var B;this.RJ=3;this.AW.H(BrK);this.E$.H(Baz);this.
I9.H(BaA);this.J(this.AW,0);this.J(this.E$,0);this.J(this.I9,0);this.C8.AE9([this
,this.SC,this.Lp]);this.AW.Au([this,this.AbX,this.SF]);this.E$.CK(this.C8);this.
E$.Au([B=this.C8,B.B_,B.Cb]);this.I9.A96([B=A._GetAutoObject(A.Device.Device),B.
Awg,B.AyM]);this.Init(aArg);},_Done:function(){this.__proto__=C.El;this.C8._Done(
);this.AW._Done();this.E$._Done();this.I9._Done();this.CountryToString._Done();C.
El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C8._ReInit(
);this.AW._ReInit();this.E$._ReInit();this.I9._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AR1={GI:0,C8:null,AW:null,YE:null,Kr:null,E$:null,I9:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pz:0,La:0,Mb:false,Init:function(aArg){A.
zX([this,this.ML],[this,this.PT,this.EC],0);A.zX([this,this.ML],[this,this.SC,this.
Lp],0);A.zX([this,this.ML],[this,this.Ans,this.Ahu],0);},Ai:function(Ae){C.El.Ai.
call(this,Ae);this.I9.Z(this.Afp);this.AW.FO(this.LS);this.YE.FO(this.LS);this.Kr.
FO(this.LS);this.E$.CT(this.LS);this.I9.CT(this.LS);},DJ:function(G){var F;if(!this.
N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this
,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.
N,F[1].call(F[0])).CU(this.CountryToString.BS(this.La));(F=this.N,F[1].call(F[0]
)).B$=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CU(((A.aaR(A.acf.AGT)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.
acf.BhL));break;case 1:(F=this.N,F[1].call(F[0])).CU(((A.aaR(A.acf.AGT)+A.aaR(A.
acf.Colon))+AcS)+A.aaR(A.acf.Bpl));break;case 2:(F=this.N,F[1].call(F[0])).CU(((
A.aaR(A.acf.AGT)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.acf.BiO));break;default:(F=this.
N,F[1].call(F[0])).CU(((A.aaR(A.acf.AGT)+A.aaR(A.acf.Colon))+AcS)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).B$=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0]
)).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0
])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null
);(F=this.N,F[1].call(F[0])).CU((A.aaR(A.acf.EV)+Aye)+this.GermanStateToString.Lv(
A._GetAutoObject(A.Device.Converter).ACY(this.Pz)));(F=this.N,F[1].call(F[0])).B$=
null;}break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[
1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CU(
A.jV);(F=this.N,F[1].call(F[0])).B$=null;}}},Ex:function(EN){var To=this.A_;if(EN<
0)EN=0;else if(EN>this.RJ)EN=this.RJ;if((EN===1)&&!this.Afp)EN=2;switch(EN){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.Pz)this.Lp(0);}break;case
1:this.Bb(this.I9);break;case 2:this.Bb(this.E$);break;case 3:if(!To)A.pe([this,
this.BBR],this);else this.Bb(this.YE);break;case 4:this.Bb(this.Kr);break;case 5:
if(((To===4)&&!this.Pz)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(To>
0))this.AW.SP(2);else this.AW.SP(7);}break;default:throw new Error(Atm+EN.toFixed(
));}this.A_=EN;C.El.Ex.call(this,this.A_);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.Mb=true;this.SF(A._GetAutoObject(A.Device.Helper).Sj(E,0,8));this.
Ahu(A._GetAutoObject(A.Device.Helper).Sj(E,8,2)|0);this.EC(A._GetAutoObject(A.Device.
Helper).Sj(E,10,2)|0);this.Lp(A._GetAutoObject(A.Device.Converter).S2(E));this.Mb=
false;if(!!this.AM){this.YE.Ku(2);this.Kr.Ku(2);this.AW.Ku(8);}else{this.YE.Ku(0
);this.Kr.Ku(0);this.AW.Ku(0);}this.Am();},App:function(G){this.I9.Un(this.EA);}
,AaF:function(G){var F;this.AW.A9N((F=this.AF,F[1].call(F[0])));},AaD:function(G
){var F;this.AW.A9O((F=this.A1,F[1].call(F[0])));},Al1:function(G){A.pe([this,this.
Agc],this);},FV:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(
A.Device.Helper).AC_());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RJ);},AjO:function(){return this.
GI;},AjQ:function(){return 99999999;},Lp:function(E){if(this.La===E)return;this.
La=E;if(this.Mb===false)A.pe([this,this.Vo],this);A.abo([this,this.SC,this.Lp],0
);},SF:function(E){if(this.GI===E)return;this.GI=E;if(this.Mb===false)A.pe([this
,this.Vo],this);A.abo([this,this.AbX,this.SF],0);},Vo:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.La),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pz,2,10))+A.abm(this.GI,8,10);var BO=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Agc:function(G){var F;if((!this.Ij||!this.A1)||!this.AF)return;if(!(F=this.
Ij,F[1].call(F[0])))this.AW.AE3(true);else this.AW.AE3(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Mb===false)A.pe([this,this.
Vo],this);A.abo([this,this.PT,this.EC],0);},Ahu:function(E){if(this.Pz===E)return;
this.Pz=E;if(this.Mb===false)A.pe([this,this.Vo],this);A.abo([this,this.Ans,this.
Ahu],0);},BBR:function(G){var F;if(!!this.JL){var Ib=(F=this.JL,F[1].call(F[0]));
var A1v=0;switch(Ib){case 0:case 1:A1v=0;break;case 2:A1v=1;break;default:A.ab5(
"%s%e",Alf,Ib);}this.EC(A1v);}if(!this.Pz)this.Ex(4);else this.Ex(5);},SC:function(
){return this.La;},AbX:function(){return this.GI;},PT:function(){return this.AnimalType;
},Ans:function(){return this.Pz;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C8._Init.call(this.C8={I:this},0);C.ARg._Init.call(this.AW={I:this},0);C.AvS.
_Init.call(this.YE={I:this},0);C.AvS._Init.call(this.Kr={I:this},0);C.AsJ._Init.
call(this.E$={I:this},0);C.I9._Init.call(this.I9={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AR1;var B;this.RJ=5;this.AW.H(
BrL);this.YE.H(BrM);this.YE.EU(2);this.Kr.H(BrN);this.Kr.EU(16);this.E$.H(Baz);this.
I9.H(BaA);this.J(this.AW,0);this.J(this.YE,0);this.J(this.Kr,0);this.J(this.E$,0
);this.J(this.I9,0);this.C8.AE9([this,this.SC,this.Lp]);this.AW.Au([this,this.AbX
,this.SF]);this.YE.Au([this,this.PT,this.EC]);this.Kr.Au([this,this.Ans,this.Ahu
]);this.E$.CK(this.C8);this.E$.Au([B=this.C8,B.B_,B.Cb]);this.I9.A96([B=A._GetAutoObject(
A.Device.Device),B.Awg,B.AyM]);this.Init(aArg);},_Done:function(){this.__proto__=
C.El;this.C8._Done();this.AW._Done();this.YE._Done();this.Kr._Done();this.E$._Done(
);this.I9._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C8._ReInit(
);this.AW._ReInit();this.YE._ReInit();this.Kr._ReInit();this.E$._ReInit();this.I9.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.I9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.El={AM:0,Awr:null,OH:null,
Q:null,EA:null,A1:null,AF:null,Ij:null,N:null,JL:null,Fm:null,Fa:null,ACV:0,LS:0
,A_:0,RJ:0,Afp:true,Init:function(aArg){A.pe([this,this.LO],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A_)this.Bb(null);},BmW:function(E){if(this.
ACV===E)return;this.ACV=E;this.Am();},WC:function(E){if(this.LS===E)return;this.
LS=E;this.Am();},DJ:function(G){A.ab5("%s",Alg);},ML:function(s){this.DJ(s);},Ex:
function(EN){A.pe([this,this.ML],this);A.pe(this.Awr,this);if(!EN)A.pe(this.OH,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],this);}
,C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",Aox);},Oo:function(G){if(this.A_>1)this.Ex(this.A_-1);},MZ:function(
G){if((this.A_>0)&&(this.A_<this.RJ))this.Ex(this.A_+1);},Un:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A0J],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A0J],this.EA,0);A.pe([this,this.A0J],this);},App:function(G){},A0J:
function(s){this.App(s);},OO:function(E){if(A.aaZ(this.A1,E))return;if(!!this.A1
)A.z$([this,this.A0N],this.A1,0);this.A1=E;if(!!E)A.zX([this,this.A0N],E,0);if(!
!E)A.pe([this,this.A0N],this);},PU:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0P],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0P],E,0);if(
!!E)A.pe([this,this.A0P],this);},AaF:function(G){},A0P:function(s){this.AaF(s);}
,AaD:function(G){},A0N:function(s){this.AaD(s);},Ul:function(E){if(A.aaZ(this.Ij
,E))return;if(!!this.Ij)A.z$([this,this.A0M],this.Ij,0);this.Ij=E;if(!!E)A.zX([this
,this.A0M],E,0);if(!!E)A.pe([this,this.A0M],this);},Al1:function(G){},A0M:function(
s){this.Al1(s);},FV:function(G){A.ab5("%s",BaB);},BG2:function(s){this.FV(s);},He:
function(G){this.Ex(0);},AjO:function(){A.ab5("%s",Aox);return 0;},AjQ:function(
){A.ab5("%s",Aox);return 0;},LO:function(G){},Anw:function(E){if(A.aaZ(this.JL,E
))return;if(!!this.JL)A.z$([this,this.Ao0],this.JL,0);this.JL=E;if(!!E)A.zX([this
,this.Ao0],this.JL,0);A.pe([this,this.Ao0],this);},Ao0:function(G){},AFj:function(
E){if(A.aa0(this.OH,E))return;this.OH=E;},AFO:function(E){if(this.Afp===E)return;
this.Afp=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fa={I:this},0);this.
__proto__=C.El;this.H(As8);this.ACV=A.jb.Text;this.LS=A.jb.CS;this.Fm.Filter=6;this.
Fa.Filter=7;this.Fm.BL=[this,this.Oo];this.Fa.BL=[this,this.MZ];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fm._Done();this.Fa._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fm._ReInit(
);this.Fa._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OH)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ij)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JL)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Rb={AM:0,Dq:null,FM:
null,OH:null,EA:null,A1:null,AF:null,Ij:null,Q:null,JL:null,AEo:-1,Afp:true,AN_:
false,AT$:false,Asl:true,Init:function(aArg){A.pe([this,this.ABv],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dq)return;if(this.Dq.A_>0){if(this.Hl){this.Dq.
WC(A.jb.CJ);this.Background.L(A.jb.CS);this.V.L(A.jb.Text);}else{this.Dq.WC(A.jb.
CS);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl)this.Dq.WC(
A.jb.CJ);else this.Dq.WC(A.jb.CS);this.Dq.BmW(this.V.AQ);}},I0:function(G){C.Eg.
I0.call(this,G);if(!this.Dq)return;if(!this.Dq.A_)this.FV(this);else this.He(this
);},Gs:function(E){C.Eg.Gs.call(this,E);if(!!this.Dq)this.Dq.N=E;},Un:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.App],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.App],this.EA,0);A.pe([this,this.App],this);},App:function(
G){if(!!this.Dq)this.Dq.Un(this.EA);},OO:function(E){if(A.aaZ(this.A1,E))return;
this.A1=E;if(!!this.Dq)this.Dq.OO(E);},PU:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PU(E);},Ul:function(E){if(A.aaZ(this.Ij,E))return;
this.Ij=E;if(!!this.Dq)this.Dq.Ul(E);},BCk:function(G){var AAt=0;if(!!this.Dq){AAt=
this.Dq.A_;this.Dq.N=null;this.HO(this.Dq);}switch(this.AEo){case 0:this.Dq=A._NewObject(
C.AeV,0);break;case 1:this.Dq=A._NewObject(C.AR2,0);break;case 2:this.Dq=A._NewObject(
C.AR1,0);break;case 3:this.Dq=A._NewObject(C.AUb,0);break;case 4:this.Dq=A._NewObject(
C.AUa,0);break;case 5:this.Dq=A._NewObject(C.AR3,0);break;default:throw new Error(
BrO+this.AEo.toFixed());}this.J(this.Dq,0);this.Dq.Anw(this.JL);this.Dq.H(BrP);this.
Dq.N=this.N;this.Dq.Un(this.EA);this.Dq.Awr=[this,this.Awr];this.Dq.Au([this,this.
Ui,this.Bx]);this.Dq.Ul(this.Ij);this.Dq.OO(this.A1);this.Dq.PU(this.AF);this.Dq.
AFj(this.OH);this.Dq.AFO(this.Afp);if(AAt>0)this.Dq.Ex(AAt);this.Bb(this.Dq);this.
Am();},FV:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FM.AjB((F=this.
N,F[1].call(F[0])));else this.FM=A._NewObject(C.Aeu,0);this.Dq.FV(this);}},He:function(
G){var B;if(!!this.Dq)this.Dq.He(this);},AjO:function(){if(!this.Dq)return 0;return this.
Dq.AjO();},AjQ:function(){if(!this.Dq)return 0;return this.Dq.AjQ();},C4:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ui,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C4
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABv],this);},Bnz:function(
E){if(this.AEo===E)return;this.AEo=E;A.pe([this,this.BCk],this);},Ar2:function(E
){if(this.Asl===E)return;this.Asl=E;A.pe([this,this.ABv],this);},ABv:function(G){
var ApA;if(this.Asl){if(this.AN_)ApA=5;else ApA=0;}else if(this.AT$){if(A._GetAutoObject(
A.Device.Converter).S2(this.AM)===10)ApA=4;else ApA=3;}else if(A._GetAutoObject(
A.Device.Converter).S2(this.AM)===10)ApA=2;else ApA=1;this.Bnz(ApA);},Awr:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A_)this.FM.AkR((F=this.N,F[1].call(F[
0])));this.Am();},Anw:function(E){if(A.aaZ(this.JL,E))return;if(!!this.JL)A.z$([
this,this.Ao0],this.JL,0);this.JL=E;if(!!E)A.zX([this,this.Ao0],this.JL,0);A.pe([
this,this.Ao0],this);},Ao0:function(G){if(!!this.Dq)this.Dq.Anw(this.JL);},A_w:function(
E){if(this.AT$===E)return;this.AT$=E;A.pe([this,this.ABv],this);},Bms:function(E
){if(this.AN_===E)return;this.AN_=E;A.pe([this,this.ABv],this);},AFj:function(E){
if(A.aa0(this.OH,E))return;this.OH=E;if(!!this.Dq)this.Dq.AFj(E);},AFO:function(
E){if(this.Afp===E)return;this.Afp=E;if(!!this.Dq)this.Dq.AFO(E);},Ui:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Rb;this.H(UY);this.V.R(Atc);this.V.L(A.jb.Bm);this.FM=A._NewObject(C.Aeu,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ij
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARg={ES:null,FZ:null,Eq:null,Dy:null,CV:null
,Ct:null,FO:function(E){if(this.M9===E)return;C.Lg.FO.call(this,E);this.Ct.CT(E);
this.CV.CT(E);this.Dy.CT(E);this.Eq.CT(E);this.FZ.CT(E);this.ES.CT(E);},Yq:function(
HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.Ct;break;
case 2:B5=this.CV;break;case 3:B5=this.Dy;break;case 4:B5=this.Eq;break;case 5:B5=
this.FZ;break;case 6:B5=this.ES;break;case 7:B5=this.G2;break;default:A.ab5("%s"
,Ah4);}return B5;},_Init:function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(
this.ES={I:this},0);C.DF._Init.call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={
I:this},0);C.DF._Init.call(this.Dy={I:this},0);C.DF._Init.call(this.CV={I:this},
0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.ARg;this.H(BrQ);this.G2.
H(AII);this.ES.H(AyF);this.FZ.H(AZ6);this.Eq.H(AZ7);this.Dy.H(AZ8);this.CV.H(AZ9
);this.Ct.H(AZ_);this.F0.H(AZ$);this.EM.H(Bay);this.J(this.ES,-2);this.J(this.FZ
,-2);this.J(this.Eq,-2);this.J(this.Dy,-2);this.J(this.CV,-2);this.J(this.Ct,-2);
this.ES.Dj=[this,this.GX];this.FZ.Dj=[this,this.GX];this.Eq.Dj=[this,this.GX];this.
Dy.Dj=[this,this.GX];this.CV.Dj=[this,this.GX];this.Ct.Dj=[this,this.GX];},_Done:
function(){this.__proto__=C.Lg;this.ES._Done();this.FZ._Done();this.Eq._Done();this.
Dy._Done();this.CV._Done();this.Ct._Done();C.Lg._Done.call(this);},_ReInit:function(
){C.Lg._ReInit.call(this);this.ES._ReInit();this.FZ._ReInit();this.Eq._ReInit();
this.Dy._ReInit();this.CV._ReInit();this.Ct._ReInit();},_Mark:function(D){var B;
C.Lg._Mark.call(this,D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvS={Q:null,G2:null,F0:null,EM:null,Ip:null,Io:null,M9:0,Uu:0,AM:0,F$:99,Init:
function(aArg){A.pe([this,this.LO],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Yq(0).M,this.Yq(-1).M));var IB=((Ae&
0x40)===0x40);if(IB){this.Bgn(A.jb.AV);this.Bgo(A.jb.Bm);}else{this.Bgn(this.M9);
this.Bgo(A.jb.Text);}this.Amo();},FO:function(E){if(this.M9===E)return;this.M9=E;
this.Am();},LO:function(G){},Yq:function(HA){var B5=null;switch(HA){case-1:case 0:
B5=this.F0;break;case 1:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},Ku:
function(E){if(this.Uu===E)return;this.Uu=E;this.Amo();},Amo:function(){var B;var
F;if(!!this.Q){var DV=this.F0;var AdD=this.Uu;var A7=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A7>0){DV.L1(A7%10);A7=(A7/10)|0;}else if(AdD>0)DV.L1(0);else DV.L1(-
1);DV=(C.Ez.isPrototypeOf(B=this.AqM(DV,0x11))?B:null);AdD=AdD-1;}}},Agf:function(
G){var F;var BO=this.AM;this.Bx(this.AM+1);if(this.AM!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Age:function(G){var F;var BO=this.
AM;this.Bx(this.AM-1);if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C4:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,0);if(!!E)A.pe([this,this.C4
],this);},Bx:function(E){if(E<0)E=0;if(E>this.F$)E=this.F$;if(this.AM===E)return;
this.AM=E;this.Am();},EU:function(E){if(this.F$===E)return;this.F$=E;this.Am();}
,Bgn:function(aColor){this.F0.CT(aColor);this.G2.CT(aColor);},Bgo:function(aColor
){this.F0.Zr(aColor);this.G2.Zr(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ez._Init.call(this.G2={I:this},0);C.Ez._Init.call(this.F0={I:this},
0);A.acg.BU._Init.call(this.EM={I:this},0);A.Core.BK._Init.call(this.Ip={I:this}
,0);A.Core.BK._Init.call(this.Io={I:this},0);this.__proto__=C.AvS;this.H(BrR);this.
M9=A.jb.CJ;this.G2.H(AII);this.F0.H(AyF);this.EM.H(AyF);this.EM.Nm(2);this.EM.L(
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
E)return;var B5=E;if((B5<0)||(B5>9))B5=-1;this.Ez=B5;this.Am();},CT:function(E){
if(this.M4===E)return;this.M4=E;this.Am();},AeZ:function(E){if(this.Aqr===E)return;
this.Aqr=E;this.AgJ.Ar(E);if(E===false)this.Text.Z(true);},Zr:function(E){if(this.
AmQ===E)return;this.AmQ=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TI._Init.call(this.AgJ={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(Atl);this.M4=A.jb.CJ;this.AgJ.Fr(750);this.AgJ.Uo(750);this.AgJ.AkB(750);
this.AmQ=A.jb.Text;this.Background.AZ(0x3);this.Background.H(Atl);this.Text.AZ(0x3
);this.Text.H(Atl);this.Text.R(Rp);this.J(this.Background,0);this.J(this.Text,0);
this.AgJ.Q=[B=this.Text,B.Fq,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgJ._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgJ._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FC={Y:null,I5:null,AOg:A.jV,ASf:A.jV,Tg:0,AJO:0,A1$:false,A1H:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABq],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.zX([this,this.ML],[B=A._GetAutoObject(A.Device.
Device).An,B.Fp,B.Ft],0);A.pe([this,this.ABq],this);A.pe([this,this.ML],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABq],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);},Byq:function(L9){A._GetAutoObject(A.Device.Helper
).G8(L9);this.Ap6(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap6:function(L4,AcY){A.ab5("%s",Alg);},Vj:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.Bzn],this);else if(!!As&&(As.PopupState===5)){this.A1H=true;this.Ew(this
);}},Bzn:function(G){if(this.Tg>0){this.A1H=false;this.Adp(this);this.A_Z(0);}},
Aiy:function(G){if((this.AJO+1)<this.Tg)this.A_Z(this.AJO+1);else A.aaS([this,this.
Bw1],this);},Bw2:function(s){this.Aiy(s);},A_Z:function(E){this.AJO=E;if(this.A1H===
false){this.Byq(E);A.aaS([this,this.Bw2],this);var XJ=(this.AJO/this.Tg)*100;A._GetAutoObject(
A.Device.Device).A3(49,true,A.abk(XJ,0,0),0,[this,this.Vj]);}},Aao:function(G){A.
_GetAutoObject(A.Device.Device).A3(49,false,BrS,0,[this,this.Vj]);this.A1$=true;
A.pe([this,this.ALq],this);},Bw1:function(s){this.Aao(s);},Adp:function(G){this.
I5.Z(true);this.A1$=false;this.ALq(this);},BGW:function(s){this.Adp(s);},AAI:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6S();A._GetAutoObject(A.Device.Device
).An.Bk(Be);},Ew:function(G){A._GetAutoObject(C.A8).FB();},A3N:function(G){A._GetAutoObject(
C.A8).Cd(84);},DJ:function(G){this.N.Z(true);this.N.C1(A.aaL(A.ach.E2));this.N.CE=[
this,this.Ew];this.N.Cw(A.aaL(A.ach.ADI));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Cf=null;this.N.I8.C3(100);}else{this.N.Cf=[this,this.AAI];this.
N.I8.C3(255);}this.N.C2(A.aaL(A.ach.AeC));this.N.B$=[this,this.A3N];},ML:function(
s){this.DJ(s);},ABq:function(G){this.Tg=A._GetAutoObject(A.Device.Device).An.B9(
);if(this.Tg>0)A._GetAutoObject(A.Device.Device).A3(49,true,U1,0,[this,this.Vj]);
else{this.Adp(this);this.Aao(this);}},Akz:function(E){if(this.AOg===E)return;this.
AOg=E;A.pe([this,this.ALq],this);},ALq:function(G){var B;if(this.A1$===false){this.
I5.R(A.jV);return;}var Apb;if(!A._GetAutoObject(A.Device.Device).An.B9()){var Adj=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABq],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);this.AAI(this);if(!A._GetAutoObject(A.Device.Device
).An.QK()||!Adj)Apb=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).AC5(A._GetAutoObject(A.Device.Device).An.Filter)===1)Apb=A.aaR(
A.acf.AOa);else Apb=A.aaR(A.acf.AN$);A._GetAutoObject(A.Device.Device).An.Bk(Adj
);A.zX([this,this.ABq],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);}else
Apb=this.ASf;Apb=Apb+(A0b+this.AOg);this.I5.R(Apb);},Ae_:function(E){if(this.ASf===
E)return;this.ASf=E;A.pe([this,this.ALq],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkS._Init.call(this.I5={
I:this},0);this.__proto__=C.FC;this.Dr(C.Abt);this.Y.H(Ff);this.Y.JT(1);this.I5.
H(Ff);this.J(this.Y,0);this.J(this.I5,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I5._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I5._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7q={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A7q;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvU={K1:null,MX:null,AY:0,Yg:function(){this.K1=null;this.MX=null;this.AY=0;
},Ot:function(A7){var Hh;Hh=A._NewObject(C.A7q,0);Hh.A5=A7;if(!this.K1){this.K1=
Hh;this.MX=Hh;this.AY=1;}else{this.MX.Ah=Hh;this.MX=Hh;this.AY=this.AY+1;}},AmY:
function(){var B;var RM=0;var Oh=this.K1;while(!!Oh){RM+=Oh.A5;Oh=Oh.Ah;}return RM;
},AjP:function(){if(!this.AY)return 0;return this.AmY()/this.AY;},AqW:function(){
var B;if(!this.AY)return 0;var A1B=this.AjP();var Adg=0;var Oh=this.K1;while(!!Oh
){Adg+=Math.pow(Oh.A5-A1B,2);Oh=Oh.Ah;}Adg/=this.AY;Adg=Math.sqrt(Adg);return Adg;
},_Init:function(aArg){this.__proto__=C.AvU;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOh={Gc:null,Aey:null,Yn:null,C7:null,I5:null,
CP:function(){this.A4M(this);},Init:function(aArg){A.zV([this,this.A4M],A._GetAutoObject(
A.Device.Device).Pr,0);A.pe([this,this.A4M],this);},Ew:function(G){A._GetAutoObject(
C.A8).FB();},A4M:function(G){this.Yn.Ch(-1);this.I5.Z(!this.Gc.AX.B9());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gc._Init.call(this.Gc={I:this},0);C.
Aey._Init.call(this.Aey={I:this},0);C.Yn._Init.call(this.Yn={I:this},0);A.acg.C7.
_Init.call(this.C7={I:this},0);C.AkS._Init.call(this.I5={I:this},0);this.__proto__=
C.AOh;this.N.Z(true);this.Dr(C.APc);this.Gc.H(Ate);this.Gc.N2(C.AmP);this.Aey.H(
IV);this.Yn.H(As9);this.C7.DC(BrT);this.C7.DM(BrU);this.C7.Nm(3);this.C7.L(A.jb.
Text);this.I5.H(Aoj);this.I5.R((A.aaR(A.acf.A8a)+A0b)+A.aaR(A.acf.A6u));this.J(this.
Gc,0);this.J(this.Aey,0);this.J(this.Yn,0);this.J(this.C7,0);this.J(this.I5,0);this.
N.CE=[this,this.Ew];this.N.C1(A.aaL(A.ach.E2));this.Gc.Zq(A._GetAutoObject(A.Device.
Device).Pr);this.Yn.Zq(A._GetAutoObject(A.Device.Device).Pr);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gc._Done();this.Aey._Done();this.Yn._Done();
this.C7._Done();this.I5._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gc._ReInit();this.Aey._ReInit();this.Yn._ReInit();this.C7.
_ReInit();this.I5._ReInit();this.I5.R((A.aaR(A.acf.A8a)+A0b)+A.aaR(A.acf.A6u));this.
CP();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gc)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOk={Auf:null,Aue:null,Auh:null,Aug:null,Auj:null,Aui:null,Aul:null,Auk:null
,AaH:null,Yv:null,Abk:null,Abj:null,RatedAttribute:0,Init:function(aArg){this.SI(
2);},DE:function(G){var D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case
6:switch(this.RatedAttribute){case 2:this.SI(3);break;case 1:this.SI(2);break;case
4:this.SI(1);break;case 3:this.SI(4);break;default:this.SI(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SI(1);break;case 1:this.SI(4);break;case 4:this.
SI(3);break;case 3:this.SI(2);break;default:this.SI(0);}break;default:D5.NL=true;
}},Ap6:function(L4,AcY){if(!L4)return;var Fy=A._NewObject(A.Device.Filter,0);var
HV=A._NewObject(A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcY,true);Fy.
CW(HV);var AA0=A._NewObject(A.Device.AssessmentFilterCriterion,0);AA0.Initialize(
3,5,0,true);Fy.CW(AA0);L4.Bk(Fy);},Aiy:function(G){var Ap4=0;var A37=A._GetAutoObject(
A.Device.Device).Bt.B9();var B1=A._NewObject(A.Device.Rating,0);while(Ap4<A37){B1.
E3(Ap4,A._GetAutoObject(A.Device.Device).Bt);this.BdI(B1,0);var BCG=A._GetAutoObject(
A.Device.Helper).ZP(2);this.BdI(B1,BCG);Ap4++;}C.FC.Aiy.call(this,G);},Aao:function(
G){A.pe([this,this.Bdl],this);C.FC.Aao.call(this,G);},Adp:function(G){this.Auf=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Aue=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aug=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auh=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aui=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auj=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auk=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FC.Adp.
call(this,G);},DJ:function(G){C.FC.DJ.call(this,G);this.N.OQ(true);this.N.OR(true
);},BdI:function(D3,Bcg){if(!D3||(D3.Timestamp<Bcg))return;if(!Bcg){this.Auf.Set(
D3.Appearance,this.Auf.Get(D3.Appearance)+1);this.Auh.Set(D3.Faeces,this.Auh.Get(
D3.Faeces)+1);this.Auj.Set(D3.Feed,this.Auj.Get(D3.Feed)+1);this.Aul.Set(D3.Respiratory
,this.Aul.Get(D3.Respiratory)+1);}else{this.Aue.Set(D3.Appearance,this.Aue.Get(D3.
Appearance)+1);this.Aug.Set(D3.Faeces,this.Aug.Get(D3.Faeces)+1);this.Aui.Set(D3.
Feed,this.Aui.Get(D3.Feed)+1);this.Auk.Set(D3.Respiratory,this.Auk.Get(D3.Respiratory
)+1);}},SI:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yv.Kw(this.AaH.Lv(E));A.pe([this,this.Bdl],this);},Bdl:function(G){var AaI=null;
var AaJ=null;switch(this.RatedAttribute){case 2:{AaI=this.Aue;AaJ=this.Auf;}break;
case 4:{AaI=this.Aug;AaJ=this.Auh;}break;case 1:{AaI=this.Aui;AaJ=this.Auj;}break;
case 0:{AaI=A._NewObject(A.Device.Int32ArrayWrapper,0);AaJ=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaI=this.Auk;AaJ=this.Aul;}break;default:throw new
Error(BrV+this.RatedAttribute.toFixed());}var AGr=A._NewObject(A.acv.AUt,0);AGr.
Ot(AaI.Get(3),A.jb.E1);AGr.Ot(AaI.Get(2),A.jb.H8);AGr.Ot(AaI.Get(1),A.jb.Gj);var
AGs=A._NewObject(A.acv.AUt,0);AGs.Ot(AaJ.Get(3),A.jb.E1);AGs.Ot(AaJ.Get(2),A.jb.
H8);AGs.Ot(AaJ.Get(1),A.jb.Gj);this.Abj.Ab7(AGr);this.Abk.Ab7(AGs);var A4y=AaI.AmY(
)-AaI.Get(5);var BfV=0;var BfT=0;if(A4y>0){BfV=(AaI.Get(2)/A4y)*100;BfT=(AaI.Get(
1)/A4y)*100;}var ALd=AaJ.AmY()-AaJ.Get(5);this.I5.Z(!ALd);var BfW=0;var BfU=0;if(
ALd>0){BfW=(AaJ.Get(2)/ALd)*100;BfU=(AaJ.Get(1)/ALd)*100;}this.Abj.A_X(A.abk(BfV
,0,0)+AfG);this.Abj.A_z(A.abk(BfT,0,0)+AfG);this.Abk.A_X(A.abk(BfW,0,0)+AfG);this.
Abk.A_z(A.abk(BfU,0,0)+AfG);},_Init:function(aArg){C.FC._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaH={I:this},0);C.NI._Init.call(this.
Yv={I:this},0);C.ACL._Init.call(this.Abk={I:this},0);C.ACL._Init.call(this.Abj={
I:this},0);this.__proto__=C.AOk;this.Dr(C.APd);this.Akz(A.aaR(A.acf.A6v));this.Ae_(
A.aaR(A.acf.Ano));this.Yv.H(IV);this.Yv.Aj(true);this.Yv.T(A.aaR(A.acf.Axt)+A.aaR(
A.acf.Colon));this.Yv.Bi(false);this.Yv.Bnx(false);this.Abk.H(BrW);this.Abk.T(A.
aaR(A.acf.AGc));this.Abj.H(BrX);this.Abj.T(A.aaR(A.acf.A7z));this.I5.H(Aoj);this.
J(this.Yv,-1);this.J(this.Abk,-1);this.J(this.Abj,-1);this.Auf=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aue=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auh=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aug=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aui=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auk=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FC;this.AaH._Done();this.Yv._Done();this.Abk._Done();this.Abj.
_Done();C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.
AaH._ReInit();this.Yv._ReInit();this.Abk._ReInit();this.Abj._ReInit();this.Akz(A.
aaR(A.acf.A6v));this.Ae_(A.aaR(A.acf.Ano));this.Yv.T(A.aaR(A.acf.Axt)+A.aaR(A.acf.
Colon));this.Abk.T(A.aaR(A.acf.AGc));this.Abj.T(A.aaR(A.acf.A7z));},_Mark:function(
D){var B;C.FC._Mark.call(this,D);if((B=this.Auf)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aue)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auh)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aug)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Auj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aui)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aul)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Auk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOl={Aex:null,UN:null,UO:null,Aew:null,UK:null,UL:null,AJQ:0,AJP:0,AJu:0,AJt:
0,Adi:false,CP:function(){this.Aao(this);},Ap6:function(L4,AcY){if(!L4)return;var
Fy=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcY,true);Fy.CW(HV);var ABh=A._NewObject(A.Device.Int32FilterCriterion
,0);ABh.Initialize(7,2,0,true);Fy.CW(ABh);L4.Bk(Fy);},Aiy:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJQ++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJP++;var Ap4=0;var A37=A._GetAutoObject(
A.Device.Device).Bt.B9();var Aud;var ABC=0;while(Ap4<A37){this.Adi=true;Aud=A._GetAutoObject(
A.Device.Device).Bt.I6(Ap4,9);if(Aud===1)ABC=1;else if((Aud===2)&&(ABC!==1))ABC=
2;Ap4++;}if(ABC===1)this.AJt++;else if(ABC===2)this.AJu++;C.FC.Aiy.call(this,G);
},Aao:function(G){var BfR=0;var BfS=0;if(this.Tg>0){BfR=(this.AJQ/this.Tg)*100;BfS=(
this.AJP/this.Tg)*100;}this.UN.Kw(((((((A.abk(BfR,0,0)+AIJ)+this.AJQ.toFixed())+
CQ)+A.aaR(A.acf.AEv))+CQ)+this.Tg.toFixed())+O9);this.UO.Kw(((((((A.abk(BfS,0,0)+
AIJ)+this.AJP.toFixed())+CQ)+A.aaR(A.acf.AEv))+CQ)+this.Tg.toFixed())+O9);var BfP=
0;var BfQ=0;if(this.Tg>0){BfP=(this.AJu/this.Tg)*100;BfQ=(this.AJt/this.Tg)*100;
}this.UK.Kw(((((((A.abk(BfP,0,0)+AIJ)+this.AJu.toFixed())+CQ)+A.aaR(A.acf.AEv))+
CQ)+this.Tg.toFixed())+O9);this.UL.Kw(((((((A.abk(BfQ,0,0)+AIJ)+this.AJt.toFixed(
))+CQ)+A.aaR(A.acf.AEv))+CQ)+this.Tg.toFixed())+O9);this.I5.Z(!this.Adi);C.FC.Aao.
call(this,G);},Adp:function(G){this.AJt=0;this.AJu=0;this.AJP=0;this.AJQ=0;this.
Adi=false;C.FC.Adp.call(this,G);},_Init:function(aArg){C.FC._Init.call(this,aArg
);C.Agz._Init.call(this.Aex={I:this},0);C.Ajs._Init.call(this.UN={I:this},0);C.Ajs.
_Init.call(this.UO={I:this},0);C.Agz._Init.call(this.Aew={I:this},0);C.Ajs._Init.
call(this.UK={I:this},0);C.Ajs._Init.call(this.UL={I:this},0);this.__proto__=C.AOl;
this.Dr(C.APe);this.Akz(A.aaR(A.acf.A6w));this.Ae_(A.aaR(A.acf.Art));this.Aex.H(
IV);this.Aex.Aj(true);this.Aex.T(A.aaR(A.acf.A6A));this.Aex.Bi(false);this.UN.H(
Qd);this.UN.Aj(true);this.UN.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UN.
Bi(true);this.UN.AkE(2);this.UO.H(Aad);this.UO.Aj(true);this.UO.T(A.aaR(A.acf.AvB
)+A.aaR(A.acf.Colon));this.UO.Bi(true);this.UO.AkE(1);this.Aew.H(Alh);this.Aew.Aj(
true);this.Aew.T(A.aaR(A.acf.A6B));this.Aew.Bi(false);this.UK.H(Aop);this.UK.Aj(
true);this.UK.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UK.Bi(true);this.
UK.AkE(2);this.UL.H(As9);this.UL.Aj(true);this.UL.T(A.aaR(A.acf.AvB)+A.aaR(A.acf.
Colon));this.UL.Bi(true);this.UL.AkE(1);this.J(this.Aex,0);this.J(this.UN,0);this.
J(this.UO,0);this.J(this.Aew,0);this.J(this.UK,0);this.J(this.UL,0);this.UN.S(A.
aaL(A.fl.Ak));this.UO.S(A.aaL(A.fl.Ak));this.UK.S(A.aaL(A.fl.Ak));this.UL.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FC;this.Aex._Done();this.UN._Done(
);this.UO._Done();this.Aew._Done();this.UK._Done();this.UL._Done();C.FC._Done.call(
this);},_ReInit:function(){C.FC._ReInit.call(this);this.Aex._ReInit();this.UN._ReInit(
);this.UO._ReInit();this.Aew._ReInit();this.UK._ReInit();this.UL._ReInit();this.
Akz(A.aaR(A.acf.A6w));this.Ae_(A.aaR(A.acf.Art));this.Aex.T(A.aaR(A.acf.A6A));this.
UN.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UO.T(A.aaR(A.acf.AvB)+A.aaR(
A.acf.Colon));this.Aew.T(A.aaR(A.acf.A6B));this.UK.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UL.T(A.aaR(A.acf.AvB)+A.aaR(A.acf.Colon));this.UN.S(A.aaL(A.fl.
Ak));this.UO.S(A.aaL(A.fl.Ak));this.UK.S(A.aaL(A.fl.Ak));this.UL.S(A.aaL(A.fl.Ak
));this.CP();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.Aex)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqL={K9:null
,Ajg:null,Ajh:null,Amp:null,Abx:null,W2:null,Abu:null,S4:null,Abv:null,S5:null,Aby:
null,W3:null,Ay:null,Add:0,AAu:0,Apv:0,A2O:0,Bec:0,CP:function(){this.Aao(this);
},DE:function(G){switch(this.Cq.CO){case 4:{if(this.I5.Fq())return;var QA=this.Y.
Br[1]+80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.Vy(null,null);}break;case 5:{if(this.
I5.Fq())return;var QA=this.Y.Br[1]-80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.Vy(null
,null);}break;default:C.FC.DE.call(this,G);}},Ap6:function(L4,AcY){if(!L4)return;
var Fy=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(A.Device.Int32FilterCriterion
,0);HV.Initialize(1,0,AcY,true);Fy.CW(HV);var Ac_=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac_.Initialize(8,2,0,true);Fy.CW(Ac_);L4.Bk(Fy);},Aiy:function(G){if(this.Bd4(
)){this.K9.Ot(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arf()){var Qm=A._GetAutoObject(A.Device.Helper).L$(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qm>0){var A2m=A._GetAutoObject(A.acj.DU).AlA(Qm,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajg.
Ot(A2m);}}var A29=A._GetAutoObject(A.Device.Device).Bt.B9()-2;if(A29>=0){var BAw=
A._GetAutoObject(A.Device.Device).Bt.AC7(A29,8);var BAv=A._GetAutoObject(A.Device.
Device).Bt.Hv(A29,6);var Qm=A._GetAutoObject(A.Device.Helper).L$(BAv,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qm>0){var A2m=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAw)/Qm)|0;this.Ajh.Ot(A2m);}}if((A._GetAutoObject(
A.Device.Helper).W.Arf()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RP()<=180)){var ALB=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tp=A._GetAutoObject(A.Device.
Helper).L$(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BBN=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALB/Tp);this.Amp.Ot(BBN);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Add++;this.Apv=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZP(7)){this.AAu++;this.A2O=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bec=A._GetAutoObject(A.Device.Helper).L$(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.FC.Aiy.call(
this,G);},Aao:function(G){var A4V=this.Ajg.AjP()|0;var A4X=this.Ajh.AjP()|0;if(this.
Add>1)A._GetAutoObject(A.Device.Device).A3(56,true,this.Add.toFixed(),0,null);if(
this.Add===1)A._GetAutoObject(A.Device.Device).A3(53,true,this.Apv.toFixed(),0,null
);if(this.AAu>1)A._GetAutoObject(A.Device.Device).A3(52,true,this.AAu.toFixed(),
0,null);if(this.AAu===1)A._GetAutoObject(A.Device.Device).A3(57,true,(this.A2O.toFixed(
)+Atb)+this.Bec.toFixed(),0,null);if(this.K9.AY>0)this.W2.T(((((((A._GetAutoObject(
A.Device.Converter).Ax5(this.K9.AjP()|0,1)+AyG)+A._GetAutoObject(A.Device.Converter
).Ax5(this.K9.AqW()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af4())+AyH)+this.K9.AY.
toFixed())+O9);else this.W2.T(A.aaR(A.acf.Unknown));if(this.Ajg.AY>0)this.S4.T(((((((
A._GetAutoObject(A.Device.Converter).S9(A4V,2,true)+AyG)+A._GetAutoObject(A.Device.
Converter).S9(this.Ajg.AqW()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).Aat())+AyH
)+this.Ajg.AY.toFixed())+O9);else this.S4.T(A.aaR(A.acf.Unknown));if(this.Ajh.AY>
0)this.S5.T(((((((A._GetAutoObject(A.Device.Converter).S9(A4X,2,true)+AyG)+A._GetAutoObject(
A.Device.Converter).S9(this.Ajh.AqW()|0,2,true))+CQ)+A._GetAutoObject(A.acj.DU).
Aat())+AyH)+this.Ajh.AY.toFixed())+O9);else this.S5.T(A.aaR(A.acf.Unknown));if(this.
Amp.AY>0)this.W3.T(((((((A.abk(this.Amp.AjP(),0,1)+AyG)+A.abk(this.Amp.AqW(),0,1
))+CQ)+A.aaR(A.acf.Bh$))+AyH)+this.Amp.AY.toFixed())+O9);else this.W3.T(A.aaR(A.
acf.Unknown));var A4W=0;var A4Y=0;var Adi=false;if(this.K9.AY>0)Adi=true;var Ib=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AJ9=A._GetAutoObject(A.Device.
Device).An.Filter.DL(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJ9)?AJ9:null))Ib=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJ9)?AJ9:null
).A5;}if(this.Ajg.AY>0){Adi=true;A4W=A._GetAutoObject(A.Device.Converter).Bag(A4V
,Ib);}if(this.Ajh.AY>0){Adi=true;A4Y=A._GetAutoObject(A.Device.Converter).Bag(A4X
,Ib);}this.S4.AkE(A4W);this.S5.AkE(A4Y);this.I5.Z(!Adi);C.FC.Aao.call(this,G);},
Adp:function(G){this.K9.Yg();this.Ajg.Yg();this.Ajh.Yg();this.Amp.Yg();this.Add=
0;this.AAu=0;this.Apv=0;this.A2O=0;C.FC.Adp.call(this,G);},Fk:function(G){var B;
this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.
Mz(-this.Y.Br[1]);},Bd4:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FC._Init.call(this,aArg);C.Agz._Init.call(this.Abx={I:
this},0);C.IG._Init.call(this.W2={I:this},0);C.Agz._Init.call(this.Abu={I:this},
0);C.Ajs._Init.call(this.S4={I:this},0);C.Agz._Init.call(this.Abv={I:this},0);C.
Ajs._Init.call(this.S5={I:this},0);C.Agz._Init.call(this.Aby={I:this},0);C.IG._Init.
call(this.W3={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqL;
this.Dr(C.AvA);this.Akz(A.aaR(A.acf.A6x));this.Ae_(A.aaR(A.acf.Akm));this.Abx.H(
Atk);this.Abx.Aj(true);this.Abx.T(A.aaR(A.acf.A5u));this.Abx.Bi(false);this.Abx.
Ku(5);this.W2.H(A0c);this.W2.Aj(true);this.W2.T(A.jV);this.W2.Bi(true);this.Abu.
H(Atf);this.Abu.Aj(true);this.Abu.T(A.aaR(A.acf.AL0));this.Abu.Bi(false);this.Abu.
Ku(5);this.S4.H(Atg);this.S4.Aj(true);this.S4.T(A.jV);this.S4.Bi(true);this.S4.Kw(
A.jV);this.Abv.H(Ath);this.Abv.Aj(true);this.Abv.T(A.aaR(A.acf.AuD));this.Abv.Bi(
false);this.Abv.Ku(5);this.S5.H(BrY);this.S5.Aj(true);this.S5.T(A.jV);this.S5.Bi(
true);this.S5.Kw(A.jV);this.Aby.H(A0d);this.Aby.Aj(true);this.Aby.T(A.aaR(A.acf.
A5C));this.Aby.Bi(false);this.Aby.Ku(5);this.W3.H(Alk);this.W3.Aj(true);this.W3.
T(A.jV);this.W3.Bi(true);this.Ay.H(It);this.J(this.Abx,-1);this.J(this.W2,-1);this.
J(this.Abu,-1);this.J(this.S4,-1);this.J(this.Abv,-1);this.J(this.S5,-1);this.J(
this.Aby,-1);this.J(this.W3,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.
K9=A._NewObject(C.AvU,0);this.Ajg=A._NewObject(C.AvU,0);this.Ajh=A._NewObject(C.
AvU,0);this.W2.S(A.aaL(A.fl.Af));this.S4.S(A.aaL(A.fl.Ak));this.S5.S(A.aaL(A.fl.
Ak));this.W3.S(A.aaL(A.fl.Ak));this.Amp=A._NewObject(C.A6H,0);},_Done:function(){
this.__proto__=C.FC;this.Abx._Done();this.W2._Done();this.Abu._Done();this.S4._Done(
);this.Abv._Done();this.S5._Done();this.Aby._Done();this.W3._Done();this.Ay._Done(
);C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.Abx._ReInit(
);this.W2._ReInit();this.Abu._ReInit();this.S4._ReInit();this.Abv._ReInit();this.
S5._ReInit();this.Aby._ReInit();this.W3._ReInit();this.Ay._ReInit();this.Akz(A.aaR(
A.acf.A6x));this.Ae_(A.aaR(A.acf.Akm));this.Abx.T(A.aaR(A.acf.A5u));this.Abu.T(A.
aaR(A.acf.AL0));this.Abv.T(A.aaR(A.acf.AuD));this.Aby.T(A.aaR(A.acf.A5C));this.W2.
S(A.aaL(A.fl.Af));this.S4.S(A.aaL(A.fl.Ak));this.S5.S(A.aaL(A.fl.Ak));this.W3.S(
A.aaL(A.fl.Ak));this.CP();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((
B=this.K9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajg)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amp)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Abt={_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.Abt;this.
De.Ax(A.aaL(A.ach.ADE));},_className:"Application::HeaderEvaluationFilter"};C.Kq={
CP:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjS.DX.call(this
,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(A._GetAutoObject(A.Device.
Device).Kk));},_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.
Kq;},_ReInit:function(){C.AjS._ReInit.call(this);this.CP();},_className:"Application::HeaderListFilter"
};C.AvA={Init:function(aArg){this.De.Ax(A._GetAutoObject(A.acj.DU).BdB());},_Init:
function(aArg){C.Abt._Init.call(this,aArg);this.__proto__=C.AvA;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APe={Init:function(
aArg){this.De.Ax(A.aaL(A.ach.Ag7));},_Init:function(aArg){C.Abt._Init.call(this,
aArg);this.__proto__=C.APe;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APd={Init:function(aArg){this.De.Ax(A.aaL(A.ach.Ara));},_Init:function(aArg){
C.Abt._Init.call(this,aArg);this.__proto__=C.APd;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APc={Sm:null,De:null,AP:null,CP:function(){this.Sm.R(A.aaR(A.acf.ANh));},Df:
function(E){C.BQ.Df.call(this,E);this.Sm.L(E);this.De.L(E);},_Init:function(aArg
){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Sm={I:this},0);A.acg.Ap._Init.
call(this.De={I:this},0);A.acg.C7._Init.call(this.AP={I:this},0);this.__proto__=
C.APc;this.Sm.H(BrZ);this.Sm.R(A.aaR(A.acf.ANh));this.Sm.A6(0x11);this.De.H(Br0);
this.AP.DC(Br1);this.AP.DM(Br2);this.AP.L(A.jb.Bc);this.J(this.Sm,0);this.J(this.
De,0);this.J(this.AP,0);this.Sm.S(A.aaL(A.fl.Af));this.Sm.A2(A.aaL(A.fl.Ak));this.
De.Ax(A.aaL(A.ach.AQq));},_Done:function(){this.__proto__=C.BQ;this.Sm._Done();this.
De._Done();this.AP._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.Sm._ReInit();this.De._ReInit();this.AP._ReInit();this.Sm.R(A.aaR(
A.acf.ANh));this.Sm.S(A.aaL(A.fl.Af));this.Sm.A2(A.aaL(A.fl.Ak));this.CP();},_Mark:
function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Aey={TW:null,Aj2:
null,AjZ:null,Aj0:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CH._Init.
call(this.TW={I:this},0);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.
call(this.AjZ={I:this},0);A.acg.Ap._Init.call(this.Aj0={I:this},0);this.__proto__=
C.Aey;this.TW.H(Br3);this.TW.R(A.aaR(A.acf.Year));this.TW.A6(0x11);this.TW.L(A.jb.
Text);this.Aj2.H(BaC);this.Aj2.L(A.jb.Text);this.AjZ.H(Br4);this.AjZ.L(A.jb.Text
);this.Aj0.H(Br5);this.Aj0.L(A.jb.Text);this.J(this.TW,0);this.J(this.Aj2,0);this.
J(this.AjZ,0);this.J(this.Aj0,0);this.TW.S(A.aaL(A.fl.Kp));this.TW.A2(A.aaL(A.fl.
Il));this.Aj2.Ax(A.aaL(A.ach.AQE));this.AjZ.Ax(A.aaL(A.ach.AQD));this.Aj0.Ax(A.aaL(
A.ach.AQL));},_Done:function(){this.__proto__=C.EB;this.TW._Done();this.Aj2._Done(
);this.AjZ._Done();this.Aj0._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.TW._ReInit();this.Aj2._ReInit();this.AjZ._ReInit();this.
Aj0._ReInit();this.TW.R(A.aaR(A.acf.Year));this.TW.S(A.aaL(A.fl.Kp));this.TW.A2(
A.aaL(A.fl.Il));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.TW).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmP={Ajy:null,AP:null
,A$:null,Ea:null,UH:null,SV:null,Gu:null,XJ:0,AtO:0,AlE:0,ABD:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SV.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.SV.M[2]-1,0,this.SV.M[
2]+1,aSize[1]]);this.UH.H([this.SV.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UH.M[2]-1,0,this.UH.M[2]+1,aSize[1]]);this.Gu.H([this.UH.M[2],0,aSize[
0],aSize[1]]);this.Ajy.H(this.Gu.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABD.toFixed());this.SV.L(this.V.AQ);this.SV.R(this.AlE.toFixed());this.UH.
L(this.V.AQ);this.UH.R(this.AtO.toFixed());var B1=this.BBM(this.XJ);this.Gu.L(A.
_GetAutoObject(A.acj.Assessment).Xz(B1));this.Ajy.L(A._GetAutoObject(A.acj.Assessment
).Qr(B1));this.Gu.R(A.abk(this.XJ,0,0)+AfG);},Ch:function(Ad){if(!this.AX)return;
this.Hs=Ad;Ad=(this.AX.B9()-Ad)-1;if(!!this.AX){this.AlE=this.AX.CF(Ad,1);this.AtO=
this.AX.CF(Ad,2);this.ABD=this.AX.CF(Ad,0);if(this.AlE>0)this.XJ=(this.AtO/this.
AlE)*100;else this.XJ=0;this.Am();}},BBM:function(XJ){if(XJ>=8)return 1;else if(
XJ>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajy={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UH={I:this},0);A.acg.Text._Init.call(this.SV={I:this},0
);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.AmP;this.Ajy.H(Aon);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.H(Aon);this.Ea.L(A.jb.Bc);this.UH.
L(A.jb.Text);this.SV.H(Aon);this.SV.L(A.jb.Text);this.Gu.L(A.jb.Text);this.J(this.
Ajy,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.UH,0);this.
J(this.SV,0);this.J(this.Gu,0);this.UH.S(A.aaL(A.fl.Af));this.SV.S(A.aaL(A.fl.Af
));this.Gu.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajy._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.UH._Done(
);this.SV._Done();this.Gu._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajy._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea.
_ReInit();this.UH._ReInit();this.SV._ReInit();this.Gu._ReInit();this.UH.S(A.aaL(
A.fl.Af));this.SV.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajs={
BT:null,Ax0:A.jV,Rating:0,Ai:function(Ae){C.IG.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xz(this.Rating));}this.BT.L(this.V.AQ);},S:function(
E){C.IG.S.call(this,E);if((E===A.aaL(A.fl.Kp))||(E===A.aaL(A.fl.Af)))this.BT.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.Il))||(E===A.aaL(A.fl.Ak)))this.BT.S(A.aaL(
A.fl.Ak));else this.BT.S(E);},Kw:function(E){if(this.Ax0===E)return;this.Ax0=E;this.
BT.R(E);},AkE:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IG._Init.call(this,aArg);A.acg.Text._Init.call(this.BT={I:this}
,0);this.__proto__=C.Ajs;this.BT.AZ(0x34);this.BT.H(Aaf);this.BT.I$(true);this.BT.
A6(0x11);this.BT.L(A.jb.Text);this.BT.Aj(true);this.J(this.BT,0);this.BT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IG;this.BT._Done();C.IG._Done.call(
this);},_ReInit:function(){C.IG._ReInit.call(this);this.BT._ReInit();this.BT.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IG._Mark.call(this,D);if((B=this.BT)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ACL={
N5:null,SL:null,V:null,AnQ:null,AnP:null,Acf:null,Ace:null,DK:Lw,Bal:A.jV,A$h:A.
jV,Ab7:function(E){if(this.N5===E)return;this.N5=E;this.SL.Ab7(this.N5);},T:function(
E){if(this.DK===E)return;this.DK=E;this.V.R(E);},A_X:function(E){if(this.Bal===E
)return;this.Bal=E;this.Acf.R(E);},A_z:function(E){if(this.A$h===E)return;this.A$h=
E;this.Ace.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SL._Init.
call(this.SL={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnQ={I:this},0);A.acg.AL._Init.call(this.AnP={I:this},0);A.acg.Text._Init.
call(this.Acf={I:this},0);A.acg.Text._Init.call(this.Ace={I:this},0);this.__proto__=
C.ACL;this.H(Br6);this.SL.H(Br7);this.SL.Ar(false);this.SL.BnG(360);this.SL.BnQ(
0.5);this.V.AZ(0x1D);this.V.H(UV);this.V.KS(true);this.V.R(Lw);this.V.L(A.jb.Text
);this.AnQ.H(BaD);this.AnQ.L(A.jb.H8);this.AnP.H(BaE);this.AnP.L(A.jb.Gj);this.Acf.
AZ(0x1D);this.Acf.H(BaD);this.Acf.L(A.jb.Text);this.Ace.AZ(0x1D);this.Ace.H(BaE);
this.Ace.L(A.jb.CS);this.J(this.SL,0);this.J(this.V,0);this.J(this.AnQ,0);this.J(
this.AnP,0);this.J(this.Acf,0);this.J(this.Ace,0);this.SL.BnR(A.aaL(A.acv.AT4));
this.V.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SL._Done();this.V._Done();this.AnQ.
_Done();this.AnP._Done();this.Acf._Done();this.Ace._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SL._ReInit();this.V._ReInit(
);this.AnQ._ReInit();this.AnP._ReInit();this.Acf._ReInit();this.Ace._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));this.Ace.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N5)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ace)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkS={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CH._Init.call(this.Text={
I:this},0);this.__proto__=C.AkS;this.H(UZ);this.Background.AZ(0x3F);this.Background.
H(UZ);this.Background.L(A.jb.Bkd);this.Text.AZ(0x3F);this.Text.H(UZ);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Re={Ak3:null,NV:null,C9:null,AcD:null,JN:null,TemperatureUnit:null,MH:null,PX:
null,Si:null,Uw:null,Lr:null,Jf:null,Z1:null,Z0:null,Sk:null,HG:null,AjI:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlM());
this.Uw.R(A._GetAutoObject(A.acj.Temperature).AlM());this.Sk.Z(!A._GetAutoObject(
A.Device.Device).AmR);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.An8();this.AxX(
);this.AcG();this.AxY();},I0:function(G){this.WR(this);},CC:function(G){var B;C.
AB.CC.call(this,G);A.zX([this,this.AKE],[B=A._GetAutoObject(A.Device.Device),B.AEH
,B.AIV],0);A.zX([this,this.AAJ],[B=A._GetAutoObject(A.Device.Device),B.AEL,B.AIX
],0);A.zX([this,this.AAJ],[B=A._GetAutoObject(A.Device.Device),B.ASQ,B.A0t],0);A.
zX([this,this.A3t],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Atn],0);A.zX([this
,this.A3l],[B=A._GetAutoObject(A.Device.Device),B.AEE,B.AIS],0);A._GetAutoObject(
A.Device.Device).AhP();if(A._GetAutoObject(A.Device.Device).AmR)A._GetAutoObject(
A.Device.Device).Ae2(true);A._GetAutoObject(A.Device.Device).AxJ();A.pe([this,this.
A3l],this);A.pe([this,this.AAJ],this);A.pe([this,this.A3t],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).Us(false);A._GetAutoObject(A.Device.Device).Afa(false);A._GetAutoObject(A.Device.
Device).Ae2(false);A.z$([this,this.AKE],[B=A._GetAutoObject(A.Device.Device),B.AEH
,B.AIV],0);A.z$([this,this.AAJ],[B=A._GetAutoObject(A.Device.Device),B.AEL,B.AIX
],0);A.z$([this,this.AAJ],[B=A._GetAutoObject(A.Device.Device),B.ASQ,B.A0t],0);A.
z$([this,this.A3t],[B=A._GetAutoObject(A.Device.Device),B.Arw,B.Atn],0);A.z$([this
,this.A3l],[B=A._GetAutoObject(A.Device.Device),B.AEE,B.AIS],0);},AAJ:function(G
){this.Am();},An8:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C9.L(A.jb.Gj);this.JN.L(this.C9.AQ);this.
MH.L(this.C9.AQ);this.TemperatureUnit.L(this.C9.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C9.L(A.jb.AV);this.JN.L(A.jb.Text);this.MH.L(this.JN.AQ);this.TemperatureUnit.
L(this.JN.AQ);this.HG.L(A.jb.Gj);}}},AxX:function(){this.Ak3.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JN.R(A.aaR(A.acf.ADV));this.C9.Ax(A.aaL(A.ach.AvN));this.C9.Cv(0);
this.NV.Cv(0);}break;case 1:{this.AVK(A._GetAutoObject(A.Device.Device).Lu,false
);this.C9.Ax(A.aaL(A.ach.AvN));this.NV.Cv(0);}break;case 2:{this.Si.R(A._GetAutoObject(
A.Device.Converter).Ak2(A._GetAutoObject(A.Device.Device).AGg));this.AVK(A._GetAutoObject(
A.Device.Device).Lu,false);this.C9.Ax(null);this.NV.Cv(1);this.AcD.Z(true);this.
PX.Z(true);this.Si.Z(true);this.Uw.Z(true);}break;case 3:{this.AUN();this.AVK(A.
_GetAutoObject(A.Device.Device).Lu,true);this.AcD.Z(false);this.PX.Z(false);this.
Si.Z(false);this.Uw.Z(false);}break;case 4:{this.JN.R(A.aaR(A.acf.Bkq));this.MH.
R(A.aaR(A.acu.Akl));this.C9.Ax(A.aaL(A.ach.AvP));this.C9.Cv(2);this.NV.Cv(0);}break;
default:A.ab5("%s%e",AH4,A._GetAutoObject(A.Device.Device).MeasureState);}},AcG:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Lu<=3240)||(A._GetAutoObject(A.Device.Device
).Lu>=5460))this.N.C2(null);else this.N.C2(A.aaL(A.ach.AeB));this.N.Cw(null);}break;
default:;}},AsF:function(G){A._GetAutoObject(C.A8).FB();},WR:function(G){},A0H:function(
s){this.WR(s);},AkX:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.BBz(this);break;default:;}},A0G:function(s){this.AkX(s);},AVK:
function(AoO,BAk){if(BAk)this.Lr.L(A.jb.Bm);else this.Lr.L(A.jb.Gj);if(AoO<=3240
){this.MH.Z(false);this.TemperatureUnit.Z(false);this.Lr.Z(true);this.Lr.R(A.aaR(
A.acu.AVu));}else if(AoO>=5460){this.MH.Z(false);this.TemperatureUnit.Z(false);this.
Lr.Z(true);this.Lr.R(A.aaR(A.acu.Bqh));}else{this.MH.Z(true);this.TemperatureUnit.
Z(true);this.Lr.Z(false);this.MH.R(A._GetAutoObject(A.Device.Converter).Ak2(AoO)
);}},AxY:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lu<=3240)||(A._GetAutoObject(A.Device.
Device).Lu>=5460))this.JN.R(A.aaR(A.acf.ADV));else this.JN.R(A.aaR(A.acf.BqT));break;
default:;}},AxZ:function(){},BqC:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Z1.Ar(true);break;case 4:this.Z0.Ar(true);break;default:{
this.Z1.Ar(false);this.Z0.Ar(false);A._GetAutoObject(A.Device.Device).Afa(false);
}}},AKE:function(G){this.Am();this.AxZ();this.BqC();this.BqA();},A3t:function(G){
if(A._GetAutoObject(A.Device.Device).AmS){this.Sk.L(A.jb.H8);this.Sk.Cv(1);}else{
this.Sk.L(A.jb.Bm);this.Sk.Cv(0);}},BBz:function(G){if(!A._GetAutoObject(A.Device.
Device).AmR)A._GetAutoObject(A.Device.Device).Ae2(!A._GetAutoObject(A.Device.Device
).AmS);},BqA:function(){if(A._GetAutoObject(A.Device.Device).AmR){this.Sk.Z(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Ae2(true);else A._GetAutoObject(A.Device.Device).Ae2(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.Sk.Z(true);else this.Sk.Z(false);},AKG:function(
G){this.CC(this);},AUN:function(){A.ab5("%s",BaB);},A3l:function(G){if(A._GetAutoObject(
A.Device.Device).HG){this.JN.H(Br8);this.MH.H(Br9);this.TemperatureUnit.H(Br_);}
else{this.JN.H(Br$);this.MH.H(Bsa);this.TemperatureUnit.H(Bsb);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Gm._Init.call(this.Ak3={I:this},0);A.acg.
Ap._Init.call(this.NV={I:this},0);A.acg.Ap._Init.call(this.C9={I:this},0);A.acg.
Ap._Init.call(this.AcD={I:this},0);A.acg.Text._Init.call(this.JN={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.MH={
I:this},0);A.acg.Text._Init.call(this.PX={I:this},0);A.acg.Text._Init.call(this.
Si={I:this},0);A.acg.Text._Init.call(this.Uw={I:this},0);C.CH._Init.call(this.Lr={
I:this},0);A.Device.TI._Init.call(this.Jf={I:this},0);A.Device.TI._Init.call(this.
Z1={I:this},0);A.Device.TI._Init.call(this.Z0={I:this},0);A.acg.Ap._Init.call(this.
Sk={I:this},0);C.CH._Init.call(this.HG={I:this},0);A.acl.TI._Init.call(this.AjI={
I:this},0);this.__proto__=C.Re;var B;this.N.Z(true);this.Ak3.Fr(1000);this.Ak3.B2=
2;this.NV.H(Bsc);this.NV.L(A.jb.CS);this.C9.H(Bsd);this.C9.L(A.jb.AV);this.C9.Cv(
0);this.C9.Z(true);this.AcD.H(Bse);this.AcD.L(A.jb.Text);this.AcD.Z(false);this.
JN.KS(true);this.JN.R(A.aaR(A.acf.ADV));this.JN.L(A.jb.Text);this.TemperatureUnit.
A6(0x9);this.TemperatureUnit.L(A.jb.Text);this.MH.A6(0x14);this.MH.R(A.aaR(A.acu.
Akl));this.MH.L(A.jb.Text);this.PX.H(Bsf);this.PX.R(A.aaR(A.acf.PX));this.PX.L(A.
jb.Text);this.PX.Z(false);this.Si.H(Bsg);this.Si.A6(0x14);this.Si.R(Bsh);this.Si.
L(A.jb.Text);this.Si.Z(false);this.Uw.H(Bsi);this.Uw.R(Bsj);this.Uw.L(A.jb.Text);
this.Uw.Z(false);this.Lr.H(Bsk);this.Lr.R(A.aaR(A.acu.AVu));this.Lr.A6(0x12);this.
Lr.L(A.jb.Gj);this.Jf.B2=false;this.Jf.Cx=true;this.Jf.HN(1);this.Jf.Fr(4000);this.
Jf.Uo(0);this.Z1.B2=false;this.Z1.Cx=true;this.Z1.HN(2);this.Z1.Fr(400);this.Z1.
Uo(200);this.Z0.B2=false;this.Z0.Cx=true;this.Z0.HN(3);this.Z0.Fr(500);this.Z0.Uo(
250);this.Sk.H(Bsl);this.HG.H(Bsm);this.HG.Z(A._GetAutoObject(A.Device.Device).HG
);this.HG.R(A.aaR(A.acf.HG));this.HG.A6(0x12);this.HG.L(A.jb.Gj);this.AjI.Ar(A._GetAutoObject(
A.Device.Device).HG);this.AjI.Fr(500);this.AjI.Uo(1000);this.J(this.NV,0);this.J(
this.C9,0);this.J(this.AcD,0);this.J(this.JN,0);this.J(this.TemperatureUnit,0);this.
J(this.MH,0);this.J(this.PX,0);this.J(this.Si,0);this.J(this.Uw,0);this.J(this.Lr
,0);this.J(this.Sk,0);this.J(this.HG,0);this.N.CE=[this,this.AsF];this.N.Cf=[this
,this.A0G];this.N.B$=[this,this.A0H];this.N.C1(A.aaL(A.ach.AeA));this.Ak3.Q=[B=this.
C9,B.ASH,B.Cv];this.NV.Ax(A.aaL(A.ach.NV));this.C9.Ax(A.aaL(A.ach.AvN));this.AcD.
Ax(A.aaL(A.ach.AQ0));this.JN.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.
Af));this.MH.S(A.aaL(A.fl.Aet));this.PX.S(A.aaL(A.fl.Af));this.Si.S(A.aaL(A.fl.EK
));this.Uw.S(A.aaL(A.fl.EK));this.Lr.S(A.aaL(A.fl.Aet));this.Lr.A2(A.aaL(A.fl.EK
));this.Lr.Cu(A.aaL(A.fl.Af));this.Jf.Q=[B=A._GetAutoObject(A.Device.Device),B.ASY
,B.A0z];this.Z1.Q=[B=A._GetAutoObject(A.Device.Device),B.AEM,B.AIY];this.Z0.Q=[B=
A._GetAutoObject(A.Device.Device),B.AEM,B.AIY];this.Sk.Ax(A.aaL(A.ach.AqO));this.
HG.S(A.aaL(A.fl.EK));this.HG.A2(A.aaL(A.fl.Kp));this.HG.Cu(A.aaL(A.fl.Il));this.
AjI.Q=[B=this.HG,B.Fq,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Ak3._Done();this.NV._Done();this.C9._Done();this.AcD._Done();this.JN._Done(
);this.TemperatureUnit._Done();this.MH._Done();this.PX._Done();this.Si._Done();this.
Uw._Done();this.Lr._Done();this.Jf._Done();this.Z1._Done();this.Z0._Done();this.
Sk._Done();this.HG._Done();this.AjI._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Ak3._ReInit();this.NV._ReInit();this.C9._ReInit();
this.AcD._ReInit();this.JN._ReInit();this.TemperatureUnit._ReInit();this.MH._ReInit(
);this.PX._ReInit();this.Si._ReInit();this.Uw._ReInit();this.Lr._ReInit();this.Jf.
_ReInit();this.Z1._ReInit();this.Z0._ReInit();this.Sk._ReInit();this.HG._ReInit(
);this.AjI._ReInit();this.JN.R(A.aaR(A.acf.ADV));this.MH.R(A.aaR(A.acu.Akl));this.
PX.R(A.aaR(A.acf.PX));this.Lr.R(A.aaR(A.acu.AVu));this.HG.R(A.aaR(A.acf.HG));this.
JN.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MH.S(A.aaL(A.fl.
Aet));this.PX.S(A.aaL(A.fl.Af));this.Si.S(A.aaL(A.fl.EK));this.Uw.S(A.aaL(A.fl.EK
));this.Lr.S(A.aaL(A.fl.Aet));this.Lr.A2(A.aaL(A.fl.EK));this.Lr.Cu(A.aaL(A.fl.Af
));this.HG.S(A.aaL(A.fl.EK));this.HG.A2(A.aaL(A.fl.Kp));this.HG.Cu(A.aaL(A.fl.Il
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ak3)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C9)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.MH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uw
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjI)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AVi={AcG:
function(){C.Re.AcG.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cw(null);this.N.C2(A.aaL(A.ach.AvQ));}break;default:;}},
WR:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Lu>3240)&&(A._GetAutoObject(A.Device.Device
).Lu<5460)){A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AKG(this);break;default:;}},AxY:
function(){C.Re.AxY.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JN.R(A.aaR(A.acf.Bkr));break;default:;}},AxZ:function(){C.Re.AxZ.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).WE(16711680);this.Jf.Ar(true);}break;default:this.Jf.Ar(false);
}},AUN:function(){this.C9.Ax(A.aaL(A.ach.AvP));this.C9.Cv(0);this.NV.Cv(0);},_Init:
function(aArg){C.Re._Init.call(this,aArg);this.__proto__=C.AVi;this.Dr(C.APa);},
_className:"Application::TemperatureMeasurementScreen"};C.APf={De:null,IM:null,NX:
null,AP:null,Ag9:null,A$:null,Df:function(E){C.BQ.Df.call(this,E);this.De.L(E);this.
IM.L(E);this.NX.L(E);this.Ag9.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.Ap._Init.call(this.De={I:this},0);A.acg.Ap._Init.call(this.IM={I:this},0
);A.acg.Ap._Init.call(this.NX={I:this},0);A.acg.C7._Init.call(this.AP={I:this},0
);A.acg.Ap._Init.call(this.Ag9={I:this},0);A.acg.C7._Init.call(this.A$={I:this},
0);this.__proto__=C.APf;this.De.H(AyD);this.IM.H(Ayj);this.NX.H(AHF);this.AP.DC(
BaF);this.AP.DM(BaG);this.AP.L(A.jb.Bc);this.Ag9.H(Bsn);this.Ag9.L(A.jb.CS);this.
A$.DC(Bso);this.A$.DM(Bsp);this.A$.L(A.jb.Bc);this.J(this.De,0);this.J(this.IM,0
);this.J(this.NX,0);this.J(this.AP,0);this.J(this.Ag9,0);this.J(this.A$,0);this.
De.Ax(A.aaL(A.ach.ADE));this.IM.Ax(A.aaL(A.ach.AeC));this.NX.Ax(A.aaL(A.ach.AvI)
);this.Ag9.Ax(A.aaL(A.ach.AQp));},_Done:function(){this.__proto__=C.BQ;this.De._Done(
);this.IM._Done();this.NX._Done();this.AP._Done();this.Ag9._Done();this.A$._Done(
);C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.De._ReInit(
);this.IM._ReInit();this.NX._ReInit();this.AP._ReInit();this.Ag9._ReInit();this.
A$._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.De)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ag9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dd={Es:null,DS:null,AGC:
0,ANP:0,Init:function(aArg){A.zV([this,this.ALn],A._GetAutoObject(A.Device.Device
).An,0);A.pe([this,this.ALn],this);},ALn:function(G){var Ad=this.AGC;if(Ad<0){this.
DS.E5();this.DS.EC(this.ANP);return;}this.DS.EC(A._GetAutoObject(A.Device.Device
).An.AmW(Ad,14));this.DS.AE_(A._GetAutoObject(A.Device.Device).An.I6(Ad,13));this.
DS.Ae3(A._GetAutoObject(A.Device.Device).An.H2(Ad,8));this.DS.Uq(A._GetAutoObject(
A.Device.Device).An.H2(Ad,11));this.DS.Ae7(A._GetAutoObject(A.Device.Device).An.
H2(Ad,12));this.DS.Ae9(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));},A_C:function(
E){if(this.AGC===E)return;this.AGC=E;A.pe([this,this.ALn],this);},A94:function(E
){if(this.ANP===E)return;this.ANP=E;A.pe([this,this.ALn],this);},A9e:function(){
return this.AGC;},_Init:function(aArg){C.EB._Init.call(this,aArg);C.CH._Init.call(
this.Es={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.Dd;this.
Es.H(Bsq);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11);this.Es.L(A.jb.Text);this.
DS.H(A0e);this.J(this.Es,0);this.J(this.DS,0);this.Es.S(A.aaL(A.fl.Af));this.Es.
A2(A.aaL(A.fl.Ak));this.Es.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){
this.__proto__=C.EB;this.Es._Done();this.DS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.DS._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.Es.S(A.aaL(A.fl.Af));this.Es.A2(A.aaL(A.fl.Ak));this.Es.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KP={AgP:null,Text:null,Afk:null,Df:function(E
){C.BQ.Df.call(this,E);this.AgP.L(E);this.Text.L(E);this.Afk.L(E);},_Init:function(
aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgP={I:this},0);C.CH._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afk={I:this},0);this.__proto__=
C.KP;this.AgP.H(Bsr);this.AgP.L(A.jb.Text);this.Text.H(Bss);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afk.H(Bst);this.Afk.L(A.jb.Text);this.
J(this.AgP,0);this.J(this.Text,0);this.J(this.Afk,0);this.AgP.Ax(A.aaL(A.ach.APh
));this.Text.S(A.aaL(A.fl.Kp));this.Text.A2(A.aaL(A.fl.Il));},_Done:function(){this.
__proto__=C.BQ;this.AgP._Done();this.Text._Done();this.Afk._Done();C.BQ._Done.call(
this);},_ReInit:function(){C.BQ._ReInit.call(this);this.AgP._ReInit();this.Text.
_ReInit();this.Afk._ReInit();this.Text.S(A.aaL(A.fl.Kp));this.Text.A2(A.aaL(A.fl.
Il));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.AgP)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afk
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AO_={
_Init:function(aArg){C.KP._Init.call(this,aArg);this.__proto__=C.AO_;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KP._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.APa={_Init:function(
aArg){C.KP._Init.call(this,aArg);this.__proto__=C.APa;this.JZ(this.Afk,-2);this.
Afk.Ax(A.aaL(A.ach.Ag7));},_className:"Application::HeaderDeviceTemperature"};C.
Yn={Ai:function(Ae){C.AmP.Ai.call(this,Ae);this.T(A.aaR(A.acf.Bqi)+A.aaR(A.acf.Colon
));},Ch:function(Ad){var B;if(!this.AX)return;this.AlE=0;this.AtO=0;this.XJ=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B9();O++){this.AlE+=this.AX.CF(O,1);this.AtO+=
this.AX.CF(O,2);}if(this.AlE>0)this.XJ=(this.AtO/this.AlE)*100;this.Am();}},_Init:
function(aArg){C.AmP._Init.call(this,aArg);this.__proto__=C.Yn;this.AP.Z(false);
this.A$.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kp));this.V.A2(A.aaL(A.fl.
Il));},_ReInit:function(){C.AmP._ReInit.call(this);this.V.S(A.aaL(A.fl.Kp));this.
V.A2(A.aaL(A.fl.Il));},_className:"Application::EvaluationLossesSumItem"};C.A6G={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A6G;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A6H={K1:null,MX:null,AY:0,Yg:function(){this.K1=null;this.MX=null;this.AY=0;
},Ot:function(A7){var Hh;Hh=A._NewObject(C.A6G,0);Hh.A5=A7;if(!this.K1){this.K1=
Hh;this.MX=Hh;this.AY=1;}else{this.MX.Ah=Hh;this.MX=Hh;this.AY=this.AY+1;}},AmY:
function(){var B;var RM=0;var Oh=this.K1;while(!!Oh){RM+=Oh.A5;Oh=Oh.Ah;}return RM;
},AjP:function(){if(!this.AY)return 0;return this.AmY()/this.AY;},AqW:function(){
var B;if(!this.AY)return 0;var A1B=this.AjP();var Adg=0;var Oh=this.K1;while(!!Oh
){Adg+=Math.pow(Oh.A5-A1B,2);Oh=Oh.Ah;}Adg/=this.AY;Adg=Math.sqrt(Adg);return Adg;
},_Init:function(aArg){this.__proto__=C.A6H;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Agz={Background:null,V:null,KT:0,Uu:5,Hl:false
,Ai:function(Ae){C.Hi.Ai.call(this,Ae);if(this.Hl)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CJ);},T:function(E){C.Hi.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hl===E)return;this.Hl=E;this.Am();},Ku:function(E){if(this.Uu===
E)return;this.Uu=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hi._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CH.
_Init.call(this.V={I:this},0);this.__proto__=C.Agz;this.H(BD);this.Background.AZ(
0x3F);this.Background.H(BD);this.V.AZ(0x3F);this.V.H(AIA);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KT=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kp));this.V.A2(A.aaL(A.fl.Il));this.V.Cu(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hi;this.Background._Done();this.V._Done();C.Hi._Done.call(this
);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kp));this.V.A2(A.aaL(A.fl.Il));this.V.Cu(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AN6={WA:function(G){this.Agx();this.I2(A.aaR(
A.acf.AVt),[this,this.ATU],5);this.I2(A.aaR(A.acf.AVr),[this,this.ATT],7);this.I2(
A.aaR(A.acf.Calving),[this,this.Bmb],11);this.I2(A.aaR(A.acf.An1),[this,this.AwX
],2);this.I2(A.aaR(A.acf.AdV),[this,this.AEX],1);this.I2(A.aaR(A.acf.AuG),[this,
this.AER],0);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Anh
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DE:function(G){}
,Abr:function(){return C.ANc;},Abs:function(){return C.APE;},Q_:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AC1());},HP:function(G){
var F;C.GJ.HP.call(this,G);if(this.Aki()===false){this.N.Cw(A._GetAutoObject(A.Device.
Converter).Ajr((F=this.Fn,F[1].call(F[0]))));this.N.Cf=[this,this.AcU];this.N.Fc(
A.jV);}this.N.OQ(false);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).
Cd(62);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AN6;var
B;this.Dr(C.APb);this.Dk(A.aaR(A.acf.ASe));this.AwS([B=A._GetAutoObject(A.Device.
Device),B.A8I,B.Bbl]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dk(A.aaR(
A.acf.ASe));},_className:"Application::DryCowListScreen"};C.AN5={_Init:function(
aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AN5;this.Ld.Ar(false);this.Ld.
Aj(false);this.Ld.Z(false);this.Jr.Ar(false);this.Jr.Aj(false);this.Jr.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APb={DX:function(G){C.Kq.DX.
call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(9));},_Init:function(
aArg){C.Kq._Init.call(this,aArg);this.__proto__=C.APb;},_className:"Application::HeaderDryCowListFilter"
};C.Abo={Filter:null,LY:null,AG5:A.jV,Er:0,AGa:1,Operator:1,Bl:function(aSize){C.
Acn.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(
Ae){C.Acn.Ai.call(this,Ae);this.LY.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Md],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Md],E,0);A.pe([this,this.Md],this);},Md:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Ts((F=this.Filter,F[1].call(
F[0])).DL(this.Er,this.Operator));else this.Ts(null);},Ni:function(E){if(this.Er===
E)return;this.Er=E;A.pe([this,this.Md],this);},Ts:function(AI){if(!!AI){var A2d;
if(this.AGa!==1)A2d=this.AGa;else A2d=AI.Operator;this.T((this.AG5+CQ)+A._GetAutoObject(
A.Device.Converter).A6C(A2d));this.Zx(false);}else{this.T(this.AG5);this.Zx(true
);}},OP:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Md],this);},AFW:function(E){if(this.AG5===E)return;this.AG5=E;A.pe([this,this.Md
],this);},A_p:function(E){if(this.AGa===E)return;this.AGa=E;A.pe([this,this.Md],
this);},_Init:function(aArg){C.Acn._Init.call(this,aArg);C.LY._Init.call(this.LY={
I:this},0);this.__proto__=C.Abo;this.H(As8);this.AW.H(Bsu);this.LY.H(A0f);this.JZ(
this.V,-1);this.J(this.LY,0);},_Done:function(){this.__proto__=C.Acn;this.LY._Done(
);C.Acn._Done.call(this);},_ReInit:function(){C.Acn._ReInit.call(this);this.LY._ReInit(
);},_Mark:function(D){var B;C.Acn._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.LY)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjK={LY:null,Ai:function(Ae){C.QF.
Ai.call(this,Ae);this.LY.L(this.V.AQ);},Ts:function(AI){if(!!AI){this.H6.Cv(1);this.
Zx(true);this.LY.A_g(false);}else{this.H6.Cv(0);this.Zx(false);this.LY.A_g(true);
}},_Init:function(aArg){C.QF._Init.call(this,aArg);C.LY._Init.call(this.LY={I:this
},0);this.__proto__=C.AjK;this.Jc=20;this.LY.H(A0f);this.J(this.LY,0);},_Done:function(
){this.__proto__=C.QF;this.LY._Done();C.QF._Done.call(this);},_ReInit:function(){
C.QF._ReInit.call(this);this.LY._ReInit();},_Mark:function(D){var B;C.QF._Mark.call(
this,D);if((B=this.LY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.AB3={Q:null,CP:function(){this.T(A._GetAutoObject(A.Device.Helper).AmX(this.
TableId,this.Er));},Ts:function(AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H6.Cv(1);else this.H6.Cv(0);},IC:function(G){A.pe([this,this.Md],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.IC],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.IC],E,0);if(!!E)A.pe([this,this.IC],this);},_Init:
function(aArg){C.QF._Init.call(this,aArg);this.__proto__=C.AB3;},_ReInit:function(
){C.QF._ReInit.call(this);this.CP();},_Mark:function(D){var B;C.QF._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APE={YS:null,I_:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Text.
_Init.call(this.YS={I:this},0);A.acg.Text._Init.call(this.I_={I:this},0);this.__proto__=
C.APE;this.A94(1);this.YS.H(Bsv);this.YS.KS(true);this.YS.R(A.aaR(A.acf.AD_));this.
YS.L(A.jb.Text);this.I_.H(S$);this.I_.R(((A.aaR(A.acf.RP)+BaH)+A.aaR(A.acf.Bak))+
O9);this.I_.L(A.jb.Text);this.J(this.YS,0);this.J(this.I_,0);this.YS.S(A.aaL(A.fl.
Ak));this.I_.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Dd;this.YS._Done(
);this.I_._Done();C.Dd._Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this
);this.YS._ReInit();this.I_._ReInit();this.YS.R(A.aaR(A.acf.AD_));this.I_.R(((A.
aaR(A.acf.RP)+BaH)+A.aaR(A.acf.Bak))+O9);this.YS.S(A.aaL(A.fl.Ak));this.I_.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.YS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.I_)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANc={Ml:null,KQ:null,AdU:null,AP:null,A$:null
,Xp:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Ml.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KQ.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KQ.M[2]-1,0,this.
KQ.M[2]+1,aSize[1]]);this.AdU.H([this.KQ.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KQ.L(this.V.AQ);this.AdU.L(this.V.AQ);if(!!this.Xp&&(
this.Xp!==5)){this.Ml.L(A._GetAutoObject(A.acj.Assessment).Qr(this.Xp));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xz(this.Xp));}else this.Ml.L(this.Background.
AQ);},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Mh=this.AX.
CF(Ad,1);var A2M=this.AX.CF(Ad,29);var Pb=this.AX.Hv(Ad,4);var LQ=this.AX.I6(Ad,
13);var AlH=this.AX.I6(Ad,17);var AlQ=this.AX.H2(Ad,11);this.Xp=A._GetAutoObject(
A.Device.Helper).AMm(LQ,AlQ,AlH);this.T(Mh.toFixed());this.KQ.R(A2M.toFixed());this.
AdU.R(A._GetAutoObject(A.acj.KL).ACX(Pb,A._GetAutoObject(A.Device.Helper).Dv(),Bsw
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Ml={I:this},0);A.acg.Text._Init.call(this.KQ={I:this},0);A.acg.Text._Init.call(
this.AdU={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.ANc;this.Ml.H(Atd);this.AP.L(A.jb.Bc);this.
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
};C.RX={AJS:0,Bd1:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);if(this.Bd1){this.
T(A.aaR(A.acf.AN3));this.Kw(A.jV);}else{this.T(A.aaR(A.acf.Bj_));if(this.AJS>0)this.
Kw(this.AJS.toFixed());else this.Kw(Xd);}},Ch:function(G){C.FA.Ch.call(this,G);this.
Bd1=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlC=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlC>0)this.AJS=A._GetAutoObject(A.Device.Helper).
L$(AlC,A._GetAutoObject(A.Device.Helper).Dv());else this.AJS=0;this.Am();},_Init:
function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RX;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMr={ALx:A.jV,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.RP));
this.Kw(this.ALx);},Ch:function(G){C.FA.Ch.call(this,G);var Pb=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALx=A._GetAutoObject(A.acj.KL).ACX(Pb,A._GetAutoObject(
A.Device.Helper).Dv(),((((Bsx+A.aaR(A.acf.Bhg))+Bsy)+A.aaR(A.acf.Bhf))+Bsz)+A.aaR(
A.acf.AL1));this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=
C.AMr;this.ALx=A.aaR(A.acf.Unknown);},_ReInit:function(){C.FA._ReInit.call(this);
this.ALx=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ANY={Ue:null,Y_:null,Wq:null,Wr:null,Sz:null,Init:function(aArg){this.Bb(this.
Ue);A.pe([this,this.ML],this);},Adw:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Nh._Init.call(this.Ue={
I:this},0);C.Nh._Init.call(this.Y_={I:this},0);C.Nh._Init.call(this.Wq={I:this},
0);C.AbS._Init.call(this.Wr={I:this},0);C.Ub._Init.call(this.Sz={I:this},0);this.
__proto__=C.ANY;var B;this.Dr(C.AO_);this.Ue.H(IV);this.Ue.Aj(true);this.Ue.T(A.
aaR(A.acf.ACx));this.Ue.Bi(false);this.Ue.Nk(83);this.Y_.H(Qd);this.Y_.Aj(true);
this.Y_.T(A.acf.Info);this.Y_.Bi(true);this.Y_.Nk(82);this.Wq.H(Aad);this.Wq.Aj(
true);this.Wq.T(A.aaR(A.acf.AGF));this.Wq.Bi(false);this.Wq.Nk(64);this.Wr.H(Alh
);this.Wr.Aj(true);this.Wr.T(A.aaR(A.acf.TempMeasurement));this.Wr.Bi(true);this.
Wr.Nk(60);this.Sz.H(Aop);this.Sz.Aj(true);this.Sz.T(A.aaR(A.acf.ACS));this.Sz.Bi(
false);this.J(this.Ue,-1);this.J(this.Y_,-1);this.J(this.Wq,-1);this.J(this.Wr,-
1);this.J(this.Sz,-1);this.N.Cf=[this,this.Adw];this.N.Cw(A.aaL(A.ach.ADJ));this.
Ue.AR=[B=this.Ue,B.Nn];this.Y_.AR=[B=this.Y_,B.Nn];this.Wq.AR=[B=this.Wq,B.Nn];this.
Wr.AR=[B=this.Wr,B.Nn];this.Sz.AR=null;this.Sz.Ab0([B=this.Sz,B.Atp]);this.Sz.Gs([
this,this.D_,this.GS]);this.Sz.AS$([B=A._GetAutoObject(A.Device.Device),B.Arw,B.
Atn]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ue._Done();this.
Y_._Done();this.Wq._Done();this.Wr._Done();this.Sz._Done();C.Ej._Done.call(this);
},_ReInit:function(){C.Ej._ReInit.call(this);this.Ue._ReInit();this.Y_._ReInit();
this.Wq._ReInit();this.Wr._ReInit();this.Sz._ReInit();this.Ue.T(A.aaR(A.acf.ACx)
);this.Wq.T(A.aaR(A.acf.AGF));this.Wr.T(A.aaR(A.acf.TempMeasurement));this.Sz.T(
A.aaR(A.acf.ACS));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.Ue
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"
};C.ANZ={Uc:null,AbP:null,Wo:null,Init:function(aArg){this.Bb(this.Uc);},Bzz:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},BkM:function(G){if(A._GetAutoObject(
A.Device.Device).Aa4<=20)A._GetAutoObject(A.Device.Device).A3(76,true,BsA,0,null
);else A._GetAutoObject(A.Device.Device).A3(39,true,A.jV,0,[this,this.Bzz]);},_Init:
function(aArg){C.Ej._Init.call(this,aArg);C.Nh._Init.call(this.Uc={I:this},0);C.
Co._Init.call(this.AbP={I:this},0);C.AbS._Init.call(this.Wo={I:this},0);this.__proto__=
C.ANZ;var B;this.Dr(C.AO$);this.Uc.H(IV);this.Uc.Aj(true);this.Uc.T(A.aaR(A.acf.
A5N));this.Uc.Bi(false);this.Uc.Nk(65);this.AbP.H(Qd);this.AbP.Aj(true);this.AbP.
T(A.aaR(A.acf.A6E));this.AbP.Bi(true);this.Wo.H(Aad);this.Wo.Aj(true);this.Wo.T(
A.aaR(A.acf.RangeTest));this.Wo.Bi(false);this.Wo.Nk(15);this.J(this.Uc,-1);this.
J(this.AbP,-1);this.J(this.Wo,-1);this.Uc.AR=[B=this.Uc,B.Nn];this.AbP.AR=[this,
this.BkM];this.Wo.AR=[B=this.Wo,B.Nn];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ej;this.Uc._Done();this.AbP._Done();this.Wo._Done();C.Ej._Done.call(this);},_ReInit:
function(){C.Ej._ReInit.call(this);this.Uc._ReInit();this.AbP._ReInit();this.Wo.
_ReInit();this.Uc.T(A.aaR(A.acf.A5N));this.AbP.T(A.aaR(A.acf.A6E));this.Wo.T(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.Uc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AO$={_Init:function(aArg){C.KP._Init.call(this,aArg);this.__proto__=C.AO$;this.
Text.R(A.aaR(A.acf.AGF));},_ReInit:function(){C.KP._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AGF));},_className:"Application::HeaderDeviceServiceMenu"};C.Nh={Nb:
null,Ai:function(Ae){C.AbS.Ai.call(this,Ae);this.Nb.L(this.V.AQ);},_Init:function(
aArg){C.AbS._Init.call(this,aArg);A.acg.Ap._Init.call(this.Nb={I:this},0);this.__proto__=
C.Nh;this.Nb.AZ(0x38);this.Nb.H(BsB);this.J(this.Nb,0);this.V.Cu(A.aaL(A.fl.Bh));
this.Nb.Ax(A.aaL(A.ach.Ajt));},_Done:function(){this.__proto__=C.AbS;this.Nb._Done(
);C.AbS._Done.call(this);},_ReInit:function(){C.AbS._ReInit.call(this);this.Nb._ReInit(
);this.V.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.AbS._Mark.call(this,D);if((
B=this.Nb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ANU={Ahd:null,Ahj:null,Ahl:null,Ahh:null,Aj_:null,Ahg:null,Ahf:null,Ahe:null
,Aj8:null,Ahc:null,Aj9:null,Ahk:null,Aj$:null,Ahi:null,Aka:null,Init:function(aArg
){this.Bb(this.Ahd);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.PQ._Init.
call(this.Ahd={I:this},0);C.PQ._Init.call(this.Ahj={I:this},0);C.PQ._Init.call(this.
Ahl={I:this},0);C.PQ._Init.call(this.Ahh={I:this},0);C.PQ._Init.call(this.Aj_={I:
this},0);C.PQ._Init.call(this.Ahg={I:this},0);C.PQ._Init.call(this.Ahf={I:this},
0);C.PQ._Init.call(this.Ahe={I:this},0);C.PQ._Init.call(this.Aj8={I:this},0);C.PQ.
_Init.call(this.Ahc={I:this},0);C.PQ._Init.call(this.Aj9={I:this},0);C.PQ._Init.
call(this.Ahk={I:this},0);C.PQ._Init.call(this.Aj$={I:this},0);C.PQ._Init.call(this.
Ahi={I:this},0);C.PQ._Init.call(this.Aka={I:this},0);this.__proto__=C.ANU;this.Dr(
C.AO6);this.Ahd.H(Atk);this.Ahd.Aj(true);this.Ahd.SG(1);this.Ahj.H(A0c);this.Ahj.
Aj(true);this.Ahj.Bi(true);this.Ahj.SG(2);this.Ahl.H(Atf);this.Ahl.Aj(true);this.
Ahl.Bi(false);this.Ahl.SG(3);this.Ahh.H(Atg);this.Ahh.Aj(true);this.Ahh.Bi(true);
this.Ahh.SG(4);this.Aj_.H(Ayt);this.Aj_.Aj(true);this.Aj_.SG(5);this.Ahg.H(BsC);
this.Ahg.Aj(true);this.Ahg.Bi(true);this.Ahg.SG(6);this.Ahf.H(Ath);this.Ahf.Aj(true
);this.Ahf.Bi(false);this.Ahf.SG(7);this.Ahe.H(AyC);this.Ahe.Aj(true);this.Ahe.Bi(
true);this.Ahe.SG(8);this.Aj8.H(A0d);this.Aj8.Aj(true);this.Aj8.SG(9);this.Ahc.H(
Alk);this.Ahc.Aj(true);this.Ahc.Bi(true);this.Ahc.SG(10);this.Aj9.H(BsD);this.Aj9.
Aj(true);this.Aj9.SG(11);this.Ahk.H(BsE);this.Ahk.Aj(true);this.Ahk.Bi(true);this.
Ahk.SG(12);this.Aj$.H(BsF);this.Aj$.Aj(true);this.Aj$.SG(13);this.Ahi.H(BsG);this.
Ahi.Aj(true);this.Ahi.Bi(true);this.Ahi.SG(14);this.Aka.H(BsH);this.Aka.Aj(true);
this.Aka.SG(15);this.J(this.Ahd,-1);this.J(this.Ahj,-1);this.J(this.Ahl,-1);this.
J(this.Ahh,-1);this.J(this.Aj_,-1);this.J(this.Ahg,-1);this.J(this.Ahf,-1);this.
J(this.Ahe,-1);this.J(this.Aj8,-1);this.J(this.Ahc,-1);this.J(this.Aj9,-1);this.
J(this.Ahk,-1);this.J(this.Aj$,-1);this.J(this.Ahi,-1);this.J(this.Aka,-1);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ahd._Done();this.Ahj._Done(
);this.Ahl._Done();this.Ahh._Done();this.Aj_._Done();this.Ahg._Done();this.Ahf._Done(
);this.Ahe._Done();this.Aj8._Done();this.Ahc._Done();this.Aj9._Done();this.Ahk._Done(
);this.Aj$._Done();this.Ahi._Done();this.Aka._Done();C.Ej._Done.call(this);},_ReInit:
function(){C.Ej._ReInit.call(this);this.Ahd._ReInit();this.Ahj._ReInit();this.Ahl.
_ReInit();this.Ahh._ReInit();this.Aj_._ReInit();this.Ahg._ReInit();this.Ahf._ReInit(
);this.Ahe._ReInit();this.Aj8._ReInit();this.Ahc._ReInit();this.Aj9._ReInit();this.
Ahk._ReInit();this.Aj$._ReInit();this.Ahi._ReInit();this.Aka._ReInit();},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ahh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ahe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahi)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aka)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AO6={_Init:function(aArg){C.KP._Init.call(this
,aArg);this.__proto__=C.AO6;this.Text.R(A.aaR(A.acf.A6c));},_ReInit:function(){C.
KP._ReInit.call(this);this.Text.R(A.aaR(A.acf.A6c));},_className:"Application::HeaderDeviceCheck"
};C.PQ={DeviceComponentToString:null,Kl:null,Au5:0,BcB:false,CP:function(){this.
V.R(this.DeviceComponentToString.BS(this.Au5));},Bl:function(aSize){var B;C.Co.Bl.
call(this,aSize);this.Kl.H(A.abM(this.Kl.M,aSize[0]-((B=this.Kl.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kl.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kl.
AE2(this.V.AQ);if(this.BcB)this.Kl.AwK(A.jb.E1);else this.Kl.AwK(A.jb.Gj);},SG:function(
E){if(this.Au5===E)return;this.Au5=E;this.T(this.DeviceComponentToString.BS(E));
this.DX(this);},DX:function(G){this.BcB=A._GetAutoObject(A.Device.Device).AJJ(this.
Au5);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kl._Init.call(this.Kl={I:this
},0);this.__proto__=C.PQ;this.V.H(BsI);this.V.A6(0x11);this.Kl.H(BsJ);this.J(this.
Kl,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kl._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kl._ReInit();this.CP();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sh={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAI],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALs(this);this.DJ(this);},CC:function(G
){A.pe([this,this.ML],this);},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[
3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},AAI:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6S();A._GetAutoObject(A.Device.Device
).An.Bk(Be);A.pe([this,this.ML],this);},Ew:function(G){A._GetAutoObject(C.A8).FB(
);},A3N:function(G){A._GetAutoObject(C.A8).Cd(84);},DJ:function(G){this.N.C1(A.aaL(
A.ach.E2));this.N.CE=[this,this.Ew];this.N.Cw(A.aaL(A.ach.ADI));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Are(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Cf=null;this.N.I8.C3(100);}else{this.N.Cf=[this
,this.AAI];this.N.I8.C3(255);}this.N.C2(A.aaL(A.ach.AeC));this.N.B$=[this,this.A3N
];},ML:function(s){this.DJ(s);},ALs:function(G){A.ab5("%s",BsK);},BG4:function(s
){this.ALs(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sh;this.N.Ar(false);this.N.Z(true);this.Dr(C.
Abt);this.Ay.H(It);this.DY.AZ(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(L3
);this.Y.JT(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.Em=[this
,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOi={Ye:null,Yd:null,X2:null
,TJ:null,DJ:function(G){C.Sh.DJ.call(this,G);if(this.AV===this.TJ){this.N.Cw(null
);this.N.Cf=null;this.N.C2(null);this.N.B$=null;}},ALs:function(G){if(this.AV===
this.TJ)this.Dr(C.APf);else this.Dr(C.Abt);},BzS:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQj);case 1:return A.
aaL(A.ach.AQk);default:A.ab5("%s%s",BsL,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},BzT:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQl);case 1:return A.aaL(A.ach.AQm);default:
A.ab5("%s%s",AIK,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Ig:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Ye)A._GetAutoObject(C.A8).Cd(66);else if(Cy===this.Yd)A._GetAutoObject(C.A8).Cd(
56);else if(Cy===this.X2)A._GetAutoObject(C.A8).Cd(58);else if(Cy===this.TJ)A._GetAutoObject(
C.A8).Cd(59);},_Init:function(aArg){C.Sh._Init.call(this,aArg);C.Fo._Init.call(this.
Ye={I:this},0);C.Fo._Init.call(this.Yd={I:this},0);C.Fo._Init.call(this.X2={I:this
},0);C.Fo._Init.call(this.TJ={I:this},0);this.__proto__=C.AOi;this.Ye.H(Qa);this.
Ye.Aj(true);this.Ye.T(A.aaR(A.acf.Afv));this.Yd.H(J3);this.Yd.Aj(true);this.Yd.T(
A.aaR(A.acf.Temperature));this.X2.H(BsM);this.X2.Aj(true);this.X2.T(A.aaR(A.acf.
Rating));this.TJ.H(BsN);this.TJ.Aj(true);this.TJ.T(A.aaR(A.acf.A7X));this.J(this.
Ye,0);this.J(this.Yd,0);this.J(this.X2,0);this.J(this.TJ,0);this.Ye.AR=[this,this.
Ig];this.Ye.DB(this.BzT());this.Yd.AR=[this,this.Ig];this.Yd.DB(this.BzS());this.
X2.AR=[this,this.Ig];this.X2.DB(A.aaL(A.ach.AQh));this.TJ.AR=[this,this.Ig];this.
TJ.DB(A.aaL(A.ach.AQi));},_Done:function(){this.__proto__=C.Sh;this.Ye._Done();this.
Yd._Done();this.X2._Done();this.TJ._Done();C.Sh._Done.call(this);},_ReInit:function(
){C.Sh._ReInit.call(this);this.Ye._ReInit();this.Yd._ReInit();this.X2._ReInit();
this.TJ._ReInit();this.Ye.T(A.aaR(A.acf.Afv));this.Yd.T(A.aaR(A.acf.Temperature)
);this.X2.T(A.aaR(A.acf.Rating));this.TJ.T(A.aaR(A.acf.A7X));},_Mark:function(D){
var B;C.Sh._Mark.call(this,D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Yd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOj={VL:null,X4:null,Yf:null,ALs:function(G){this.Dr(C.AvA);},BzW:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ7
);case 1:return A.aaL(A.ach.AQ8);default:A.ab5("%s%s",AIK,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Ig:function(G){var Cy=(C.Fo.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VL)A._GetAutoObject(C.A8).Cd(68);else if(Cy===
this.Yf)A._GetAutoObject(C.A8).Cd(57);else if(Cy===this.X4)A._GetAutoObject(C.A8
).Cd(67);},BzV:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AP6);case 1:return A.aaL(A.ach.AP7);default:A.ab5("%s%s",AIK
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},BzX:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AQ9
);case 1:return A.aaL(A.ach.AQ_);default:A.ab5("%s%s",AIK,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sh._Init.call(
this,aArg);C.Fo._Init.call(this.VL={I:this},0);C.Fo._Init.call(this.X4={I:this},
0);C.Fo._Init.call(this.Yf={I:this},0);this.__proto__=C.AOj;this.VL.H(Qa);this.VL.
Aj(true);this.VL.T(A.aaR(A.acf.Bac));this.X4.H(A0g);this.X4.Aj(true);this.X4.T(A.
aaR(A.acf.A5D));this.Yf.H(Ob);this.Yf.Aj(true);this.Yf.T(A.aaR(A.acf.Baf));this.
J(this.VL,0);this.J(this.X4,0);this.J(this.Yf,0);this.VL.AR=[this,this.Ig];this.
VL.DB(this.BzW());this.VL.Ab4(A.aaL(A.ach.NW));this.X4.AR=[this,this.Ig];this.X4.
DB(this.BzV());this.Yf.AR=[this,this.Ig];this.Yf.DB(this.BzX());},_Done:function(
){this.__proto__=C.Sh;this.VL._Done();this.X4._Done();this.Yf._Done();C.Sh._Done.
call(this);},_ReInit:function(){C.Sh._ReInit.call(this);this.VL._ReInit();this.X4.
_ReInit();this.Yf._ReInit();this.VL.T(A.aaR(A.acf.Bac));this.X4.T(A.aaR(A.acf.A5D
));this.Yf.T(A.aaR(A.acf.Baf));},_Mark:function(D){var B;C.Sh._Mark.call(this,D);
if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOm={Bd4:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZP(0));},_Init:function(aArg){C.AqL._Init.call(this,aArg);this.
__proto__=C.AOm;this.Ae_(A.aaR(A.acf.A8g));},_ReInit:function(){C.AqL._ReInit.call(
this);this.Ae_(A.aaR(A.acf.A8g));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOf={Aik:null,Abw:null,UM:null,AaX:null,Po:null,Ajp:null,AgB:null,Ajq:null,AgC:
null,Ay:null,AaO:null,Add:0,Apv:0,DE:function(G){switch(this.Cq.CO){case 4:{if(this.
I5.Fq())return;var QA=this.Y.Br[1]+80;this.Y.Gb([this.Y.Br[0],QA]);this.Y.Vy(null
,null);}break;case 5:{if(this.I5.Fq())return;var QA=this.Y.Br[1]-80;this.Y.Gb([this.
Y.Br[0],QA]);this.Y.Vy(null,null);}break;default:C.FC.DE.call(this,G);}},Ap6:function(
L4,AcY){if(!L4)return;var Fy=A._NewObject(A.Device.Filter,0);var HV=A._NewObject(
A.Device.Int32FilterCriterion,0);HV.Initialize(1,0,AcY,true);Fy.CW(HV);var Ac_=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac_.Initialize(8,2,0,true);Fy.CW(Ac_
);L4.Bk(Fy);},Aiy:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arf()){this.
Aik.Ot(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azk=this.BzQ(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaO.Set(Azk,this.AaO.Get(Azk)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Add++;this.Apv=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FC.Aiy.call(
this,G);},Aao:function(G){if(this.Add>1)A._GetAutoObject(A.Device.Device).A3(56,
true,this.Add.toFixed(),0,null);if(this.Add===1)A._GetAutoObject(A.Device.Device
).A3(53,true,this.Apv.toFixed(),0,null);if(this.Aik.AY>0)this.UM.T(((((((A._GetAutoObject(
A.Device.Converter).Ax5(this.Aik.AjP()|0,1)+AyG)+A._GetAutoObject(A.Device.Converter
).Ax5(this.Aik.AqW()|0,1))+CQ)+A._GetAutoObject(A.acj.DU).Af4())+AyH)+this.Aik.AY.
toFixed())+O9);else this.UM.T(A.aaR(A.acf.Unknown));var RM=this.AaO.AmY();var O;
for(O=0;O<this.AaO.MF;O++){var Bf=this.Bz$(O);if(!!Bf){var CB=this.AaO.Get(O);Bf.
Bmn(CB);if(!RM)Bf.A_v(0);else Bf.A_v(Math.round((CB*100)/RM)|0);Bf.Bn5(this.Bz_(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adi=false;if(this.Aik.AY>0)
Adi=true;this.I5.Z(!Adi);C.FC.Aao.call(this,G);},Adp:function(G){this.Aik.Yg();this.
AaO.E5();this.Add=0;this.Apv=0;C.FC.Adp.call(this,G);},Bz$:function(aIndex){var Bf=
null;switch(aIndex){case 0:Bf=this.Po;break;case 1:Bf=this.Ajp;break;case 2:Bf=this.
AgB;break;case 3:Bf=this.Ajq;break;case 4:Bf=this.AgC;break;default:throw new Error(
AyI+aIndex.toFixed());}return Bf;},Bz_:function(aIndex,AoJ){var B;var Tt=A.jV;switch(
AoJ){case 0:{switch(aIndex){case 0:Tt=BsO;break;case 1:Tt=BsP;break;case 2:Tt=BsQ;
break;case 3:Tt=BsR;break;case 4:Tt=BsS;break;default:throw new Error(AyI+aIndex.
toFixed());}Tt=Tt+(CQ+A.aaR(A.acf.AAa));}break;case 1:{switch(aIndex){case 0:Tt=
BsT;break;case 1:Tt=BsU;break;case 2:Tt=BsV;break;case 3:Tt=BsW;break;case 4:Tt=
BsX;break;default:throw new Error(AyI+aIndex.toFixed());}Tt=Tt+(CQ+A.aaR(A.acf.A7D
));}break;default:A.ab5("%s%e",BaI,AoJ);}return Tt;},BzR:function(AI5,AoJ){var Ac$=
0;switch(AoJ){case 0:switch(AI5){case 0:Ac$=35000;break;case 1:Ac$=40000;break;case
2:Ac$=45000;break;case 3:Ac$=50000;break;case 4:Ac$=2147483647;break;default:throw new
Error(AyI+AI5.toFixed());}break;case 1:switch(AI5){case 0:Ac$=36287;break;case 1:
Ac$=40823;break;case 2:Ac$=45359;break;case 3:Ac$=49895;break;case 4:Ac$=2147483647;
break;default:throw new Error(AyI+AI5.toFixed());}break;default:A.ab5("%s%e",BaI
,AoJ);}return Ac$;},BzQ:function(A7,AoJ){var Azk=0;var O;for(O=0;O<this.AaO.MF;O++
)if(A7<this.BzR(O,AoJ)){Azk=O;break;}return Azk;},Fk:function(G){var B;this.Ay.My((
B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[
1]);},_Init:function(aArg){C.FC._Init.call(this,aArg);C.Agz._Init.call(this.Abw={
I:this},0);C.IG._Init.call(this.UM={I:this},0);C.AaX._Init.call(this.AaX={I:this
},0);C.Po._Init.call(this.Po={I:this},0);C.Po._Init.call(this.Ajp={I:this},0);C.
Po._Init.call(this.AgB={I:this},0);C.Po._Init.call(this.Ajq={I:this},0);C.Po._Init.
call(this.AgC={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaO={I:this},0);this.__proto__=C.AOf;this.Dr(C.AvA);this.Akz(A.aaR(
A.acf.A6t));this.Ae_(A.aaR(A.acf.A7$));this.Abw.H(Atk);this.Abw.Aj(true);this.Abw.
T(A.aaR(A.acf.A5s));this.Abw.Bi(false);this.Abw.Ku(5);this.UM.H(A0c);this.UM.Aj(
true);this.UM.T(A.jV);this.UM.Bi(true);this.UM.Ku(5);this.AaX.H(Atf);this.AaX.Aj(
true);this.Po.H(Atg);this.Po.Aj(true);this.Po.Bi(true);this.Ajp.H(Ath);this.Ajp.
Aj(true);this.AgB.H(AyC);this.AgB.Aj(true);this.AgB.Bi(true);this.Ajq.H(A0d);this.
Ajq.Aj(true);this.AgC.H(Alk);this.AgC.Aj(true);this.AgC.Bi(true);this.Ay.H(It);this.
AaO.Zy(5);this.J(this.Abw,-1);this.J(this.UM,-1);this.J(this.AaX,-1);this.J(this.
Po,-1);this.J(this.Ajp,-1);this.J(this.AgB,-1);this.J(this.Ajq,-1);this.J(this.AgC
,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.Aik=A._NewObject(C.AvU,0);
this.UM.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FC;this.Abw._Done(
);this.UM._Done();this.AaX._Done();this.Po._Done();this.Ajp._Done();this.AgB._Done(
);this.Ajq._Done();this.AgC._Done();this.Ay._Done();this.AaO._Done();C.FC._Done.
call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.Abw._ReInit();this.
UM._ReInit();this.AaX._ReInit();this.Po._ReInit();this.Ajp._ReInit();this.AgB._ReInit(
);this.Ajq._ReInit();this.AgC._ReInit();this.Ay._ReInit();this.AaO._ReInit();this.
Akz(A.aaR(A.acf.A6t));this.Ae_(A.aaR(A.acf.A7$));this.Abw.T(A.aaR(A.acf.A5s));this.
UM.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.
Aik)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Po)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AgB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaO)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.AaX={H_:null,Gu:null
,Bl:function(aSize){C.IG.Bl.call(this,aSize);this.H_.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gu.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IG.Ai.call(this,Ae);this.H_.L(this.V.AQ);this.Gu.L(this.V.AQ);},_Init:
function(aArg){C.IG._Init.call(this,aArg);A.acg.Text._Init.call(this.H_={I:this}
,0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.AaX;this.T(A.aaR(
A.acf.AHg));this.H_.H(BsY);this.H_.KS(true);this.H_.R(A.aaR(A.acf.Aqy));this.H_.
L(A.jb.Text);this.Gu.H(BaJ);this.Gu.R(AfG);this.Gu.L(A.jb.Text);this.J(this.H_,0
);this.J(this.Gu,0);this.V.S(A.aaL(A.fl.Il));this.H_.S(A.aaL(A.fl.Il));this.Gu.S(
A.aaL(A.fl.Kp));},_Done:function(){this.__proto__=C.IG;this.H_._Done();this.Gu._Done(
);C.IG._Done.call(this);},_ReInit:function(){C.IG._ReInit.call(this);this.H_._ReInit(
);this.Gu._ReInit();this.T(A.aaR(A.acf.AHg));this.H_.R(A.aaR(A.acf.Aqy));this.V.
S(A.aaL(A.fl.Il));this.H_.S(A.aaL(A.fl.Il));this.Gu.S(A.aaL(A.fl.Kp));},_Mark:function(
D){var B;C.IG._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Po={AP:null,A$:null,P3:null,H_:null,Gu:null,Bae:A.jV,Aqy:0,A_6:0,Bl:function(
aSize){C.IG.Bl.call(this,aSize);this.P3.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P3.M[2]-1,0,this.P3.M[2]+1,aSize[1]]);this.H_.H([this.P3.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.H_.M[2]-1,0,this.H_.M[2]+1,aSize[
1]]);this.Gu.H([this.H_.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IG.Ai.call(
this,Ae);this.P3.L(this.V.AQ);this.H_.L(this.V.AQ);this.Gu.L(this.V.AQ);},Bn5:function(
E){if(this.Bae===E)return;this.Bae=E;this.P3.R(E);},Bmn:function(E){if(this.Aqy===
E)return;this.Aqy=E;this.H_.R(E.toFixed());},A_v:function(E){if(this.A_6===E)return;
this.A_6=E;this.Gu.R(E.toFixed()+AsZ);},_Init:function(aArg){C.IG._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.P3={I:this},0);A.acg.Text._Init.call(this.H_={I:
this},0);A.acg.Text._Init.call(this.Gu={I:this},0);this.__proto__=C.Po;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.P3.H(BsZ);this.P3.R(A.aaR(A.acf.AHg));this.P3.L(
A.jb.Text);this.H_.R(U1);this.H_.L(A.jb.Text);this.Gu.R(Bs0);this.Gu.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.P3,0);this.J(this.H_,0);this.J(
this.Gu,0);this.P3.S(A.aaL(A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IG;this.AP._Done();this.A$._Done();this.
P3._Done();this.H_._Done();this.Gu._Done();C.IG._Done.call(this);},_ReInit:function(
){C.IG._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.P3._ReInit();
this.H_._ReInit();this.Gu._ReInit();this.P3.R(A.aaR(A.acf.AHg));this.P3.S(A.aaL(
A.fl.Af));this.H_.S(A.aaL(A.fl.Af));this.Gu.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IG._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gu)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMD={AKT:
function(){var Be=A._GetAutoObject(A.Device.Helper).Mt();A._GetAutoObject(A.Device.
Device).An.Bk(Be);},_Init:function(aArg){C.Amx._Init.call(this,aArg);this.__proto__=
C.AMD;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARJ={R3:null,
R9:null,R2:null,R6:null,Pq:null,R5:null,ALp:function(G){A.pe([this,this.BC4],this
);A.pe([this,this.BCS],this);A.pe([this,this.BCO],this);A.pe([this,this.A4H],this
);A.pe([this,this.BCV],this);A.pe([this,this.BCT],this);},Ig:function(G){var Cy=(
C.QX.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.R9)A._GetAutoObject(C.A8
).Cd(20);else if(Cy===this.Pq)A._GetAutoObject(C.A8).Cd(14);else if(Cy===this.R3
)A._GetAutoObject(C.A8).Cd(12);else if(Cy===this.R6)A._GetAutoObject(C.A8).Cd(43
);else if(Cy===this.R2)A._GetAutoObject(C.A8).Cd(51);else if(Cy===this.R5)A._GetAutoObject(
C.A8).Cd(61);},BCS:function(G){var Be=A._GetAutoObject(A.Device.Helper).Mt();var
Azr=A._NewObject(A.Device.BoolFilterCriterion,0);Azr.Initialize(9,0,true,true);Be.
CW(Azr);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.Pq.Zw(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BC4:function(G){var Be=A._GetAutoObject(A.
Device.Helper).Mt();var ABA=A._NewObject(A.Device.BoolFilterCriterion,0);ABA.Initialize(
12,0,true,true);Be.CW(ABA);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R9.Zw(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCO:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).Mt();var Ay9=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay9.Initialize(8,0,true,true);Be.CW(Ay9);A._GetAutoObject(A.Device.Device).An.
Bk(Be);this.R3.Zw(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},A4H:function(
G){var Be=A._GetAutoObject(A.Device.Helper).A6M(A._GetAutoObject(A.Device.Device
).ABG);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R2.Zw(A._GetAutoObject(A.
Device.Device).An.B9().toFixed());},BCV:function(G){var Be=A._GetAutoObject(A.Device.
Helper).A6V();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R6.Zw(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},BCT:function(G){var Be=A._GetAutoObject(A.
Device.Helper).AC1();A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R5.Zw(A._GetAutoObject(
A.Device.Device).An.B9().toFixed());},_Init:function(aArg){C.T9._Init.call(this,
aArg);C.QX._Init.call(this.R3={I:this},0);C.QX._Init.call(this.R9={I:this},0);C.
QX._Init.call(this.R2={I:this},0);C.QX._Init.call(this.R6={I:this},0);C.QX._Init.
call(this.Pq={I:this},0);C.QX._Init.call(this.R5={I:this},0);this.__proto__=C.ARJ;
this.R3.H(Qa);this.R3.Aj(true);this.R3.T(A.aaR(A.acf.Alarm));this.R3.Ab1(true);this.
R9.H(A0g);this.R9.Aj(true);this.R9.T(A.aaR(A.acf.Asd));this.R9.Ab1(true);this.R2.
H(Ob);this.R2.Aj(true);this.R2.T(A.aaR(A.acf.ActionList));this.R2.Ab1(true);this.
R6.H(Qb);this.R6.Aj(true);this.R6.T(A.aaR(A.acf.AOJ));this.R6.Ab1(true);this.Pq.
H(S_);this.Pq.Ar(false);this.Pq.Aj(false);this.Pq.Z(false);this.Pq.T(A.aaR(A.acf.
ACk));this.Pq.Ab1(true);this.R5.H(US);this.R5.Aj(true);this.R5.T(A.aaR(A.acf.A6p
));this.R5.Ab1(true);this.J(this.R3,-1);this.J(this.R9,-1);this.J(this.R2,-1);this.
J(this.R6,-1);this.J(this.Pq,-1);this.J(this.R5,-1);this.R3.AR=[this,this.AcV];this.
R3.DB(A.aaL(A.ach.ADz));this.R3.Ab4(A.aaL(A.ach.NW));this.R9.AR=[this,this.AcV];
this.R9.DB(A.aaL(A.ach.AQ4));this.R9.Ab4(A.aaL(A.ach.NW));this.R2.AR=[this,this.
AcV];this.R2.DB(A.aaL(A.ach.APQ));this.R2.Ab4(A.aaL(A.ach.NW));this.R6.AR=[this,
this.AcV];this.R6.DB(A.aaL(A.ach.AQo));this.R6.Ab4(A.aaL(A.ach.NW));this.Pq.AR=[
this,this.AcV];this.Pq.DB(A.aaL(A.ach.ADz));this.Pq.Ab4(A.aaL(A.ach.NW));this.R5.
AR=[this,this.AcV];this.R5.DB(A.aaL(A.ach.AQe));this.R5.Ab4(A.aaL(A.ach.NW));},_Done:
function(){this.__proto__=C.T9;this.R3._Done();this.R9._Done();this.R2._Done();this.
R6._Done();this.Pq._Done();this.R5._Done();C.T9._Done.call(this);},_ReInit:function(
){C.T9._ReInit.call(this);this.R3._ReInit();this.R9._ReInit();this.R2._ReInit();
this.R6._ReInit();this.Pq._ReInit();this.R5._ReInit();this.R3.T(A.aaR(A.acf.Alarm
));this.R9.T(A.aaR(A.acf.Asd));this.R2.T(A.aaR(A.acf.ActionList));this.R6.T(A.aaR(
A.acf.AOJ));this.Pq.T(A.aaR(A.acf.ACk));this.R5.T(A.aaR(A.acf.A6p));},_Mark:function(
D){var B;C.T9._Mark.call(this,D);if((B=this.R3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARI={R_:null,VK:null,R7:null,R4:null,R8:null,ALp:function(G){A.pe([this,this.
BCP],this);A.pe([this,this.BCZ],this);A.pe([this,this.BC0],this);A.pe([this,this.
BC5],this);A.pe([this,this.BC1],this);},Ig:function(G){var Cy=(C.QX.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VK)A._GetAutoObject(C.A8).Cd(90);if(Cy===this.
R4)A._GetAutoObject(C.A8).Cd(74);if(Cy===this.R7)A._GetAutoObject(C.A8).Cd(71);if(
Cy===this.R8)A._GetAutoObject(C.A8).Cd(46);if(Cy===this.R_)A._GetAutoObject(C.A8
).Cd(85);},BC0:function(G){var Be=A._GetAutoObject(A.Device.Helper).AC4();A._GetAutoObject(
A.Device.Device).An.Bk(Be);this.R8.Zw(A._GetAutoObject(A.Device.Device).An.B9().
toFixed());},BC5:function(G){var Be=A._GetAutoObject(A.Device.Helper).A66(Math.max(
A._GetAutoObject(A.Device.Device).Av2,A._GetAutoObject(A.Device.Helper).A6Y(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Be);this.R_.Zw(
A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCZ:function(G){var Be=A.
_GetAutoObject(A.Device.Helper).A61();A._GetAutoObject(A.Device.Device).An.Bk(Be
);this.R7.Zw(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BCP:function(
G){var Be=A._GetAutoObject(A.Device.Helper).AOK();A._GetAutoObject(A.Device.Device
).An.Bk(Be);this.R4.Zw(A._GetAutoObject(A.Device.Device).An.B9().toFixed());},BC1:
function(G){var Be=A._GetAutoObject(A.Device.Helper).Avw();A._GetAutoObject(A.Device.
Device).An.Bk(Be);this.VK.Zw(A._GetAutoObject(A.Device.Device).An.B9().toFixed()
);},_Init:function(aArg){C.T9._Init.call(this,aArg);C.QX._Init.call(this.R_={I:this
},0);C.QX._Init.call(this.VK={I:this},0);C.QX._Init.call(this.R7={I:this},0);C.QX.
_Init.call(this.R4={I:this},0);C.QX._Init.call(this.R8={I:this},0);this.__proto__=
C.ARI;this.R_.H(Bs1);this.R_.Aj(true);this.R_.T(A.aaR(A.acf.A73));this.R_.Ab1(true
);this.VK.H(Bs2);this.VK.Aj(true);this.VK.T(A.aaR(A.acf.AGj));this.R7.H(Bs3);this.
R7.Aj(true);this.R7.T(A.aaR(A.acf.A75));this.R7.Ab1(true);this.R4.H(Bs4);this.R4.
Aj(true);this.R4.T(A.aaR(A.acf.AB1));this.R4.Ab1(true);this.R8.H(Bs5);this.R8.Aj(
true);this.R8.T(A.aaR(A.acf.ASk));this.R8.Ab1(true);this.J(this.R_,-1);this.J(this.
VK,-1);this.J(this.R7,-1);this.J(this.R4,-1);this.J(this.R8,-1);this.R_.AR=[this
,this.AcV];this.R_.DB(A.aaL(A.ach.AQG));this.R_.Ab4(A.aaL(A.ach.NW));this.VK.AR=[
this,this.AcV];this.VK.DB(A.aaL(A.ach.ADP));this.R7.AR=[this,this.AcV];this.R7.DB(
A.aaL(A.ach.AQI));this.R7.Ab4(A.aaL(A.ach.NW));this.R4.AR=[this,this.AcV];this.R4.
DB(A.aaL(A.ach.AP$));this.R4.Ab4(A.aaL(A.ach.NW));this.R8.AR=[this,this.AcV];this.
R8.DB(A.aaL(A.ach.AQK));this.R8.Ab4(A.aaL(A.ach.NW));},_Done:function(){this.__proto__=
C.T9;this.R_._Done();this.VK._Done();this.R7._Done();this.R4._Done();this.R8._Done(
);C.T9._Done.call(this);},_ReInit:function(){C.T9._ReInit.call(this);this.R_._ReInit(
);this.VK._ReInit();this.R7._ReInit();this.R4._ReInit();this.R8._ReInit();this.R_.
T(A.aaR(A.acf.A73));this.VK.T(A.aaR(A.acf.AGj));this.R7.T(A.aaR(A.acf.A75));this.
R4.T(A.aaR(A.acf.AB1));this.R8.T(A.aaR(A.acf.ASk));},_Mark:function(D){var B;C.T9.
_Mark.call(this,D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASi={WA:function(G){this.Agx(
);this.AMb();this.A46(A.aaR(A.acf.A7G),[this,this.BnL],131072);this.A46(A.aaR(A.
acf.A7F),[this,this.BnK],16384);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR
).Mj(A.aaR(A.acf.ARD)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DE:function(G){},Abr:function(){return C.Aqu;},Abs:function(){return C.Aq1;}
,Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A61());},HP:function(G){C.QD.HP.call(this,G);if(this.Aki()===false){this.
N.Cw(A._GetAutoObject(A.Device.Converter).Ajr(A._GetAutoObject(A.Device.Converter
).AL8(this.LX.AC6())));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OQ(false
);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(72);},BnK:function(
G){this.AGH(16384);},BnL:function(G){this.AGH(131072);},_Init:function(aArg){C.QD.
_Init.call(this,aArg);this.__proto__=C.ASi;this.Dr(C.APt);this.Dk(A.aaR(A.acf.A79
));this.ATr(A._GetAutoObject(C.Av9));},_ReInit:function(){C.QD._ReInit.call(this
);this.Dk(A.aaR(A.acf.A79));},_className:"Application::NoNaisIdListScreen"};C.ASh={
_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.ASh;this.Mv.Ar(
false);this.Mv.Aj(false);this.Mv.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APt={DX:function(G){C.Kq.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.
Converter).Ad0(10));},_Init:function(aArg){C.Kq._Init.call(this,aArg);this.__proto__=
C.APt;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkP={OC:null,Bf0:false
,CP:function(){A.pe([this,this.AoA],this);},DE:function(G){},CC:function(G){C.GJ.
CC.call(this,G);if(this.Bf0&&(A._GetAutoObject(A.Device.Device).PY>0))A.pe([this
,this.AIN],this);},Agg:function(G){this.A6m(this);},Agj:function(){A._GetAutoObject(
C.A8).Cd(73);},ASq:function(G){throw new Error(Aox);},Ba3:function(s){this.ASq(s
);},ASr:function(G){throw new Error(Aox);},Ba4:function(s){this.ASr(s);},ASw:function(
G){throw new Error(Aox);},AIN:function(s){this.ASw(s);},Bfa:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.
Bf0=true;A._GetAutoObject(C.A8).Cd(76);}},Agi:function(G){var B;var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.
XE],[B=A._GetAutoObject(A.Device.Device),B.Wz,B.Xg],0);},XE:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P4.ZZ===3){A._GetAutoObject(A.Device.Device).A3(
74,false,A.jV,0,[this,this.Agi]);A.z$([this,this.XE],[B=A._GetAutoObject(A.Device.
Device),B.Wz,B.Xg],0);A.pe([this,this.AIN],this);}},AJI:function(){throw new Error(
Aox);},A8n:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A6l(this);},
Boi:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Bix(this);},IC:function(
G){},A95:function(E){if(A.aaZ(this.OC,E))return;if(!!this.OC)A.z$([this,this.IC]
,this.OC,0);this.OC=E;if(!!E)A.zX([this,this.IC],E,0);if(!!E)A.pe([this,this.IC]
,this);},BgN:function(G){var F,Cs;if(!this.OC)return;(Cs=this.OC,Cs[2].call(Cs[0
],!(F=this.OC,F[1].call(F[0]))));},_Init:function(aArg){C.GJ._Init.call(this,aArg
);this.__proto__=C.AkP;this.Dk(A.aaR(A.acf.A8e));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dk(A.aaR(A.acf.A8e));this.CP();},_Mark:function(D){var B;C.GJ._Mark.
call(this,D);if((B=this.OC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::RegistrationsListScreen"};C.AUy={_Init:function(aArg){C.I4._Init.call(
this,aArg);this.__proto__=C.AUy;},_className:"Application::RegistrationsListFilterScreen"
};C.Aev={_Init:function(aArg){C.Ys._Init.call(this,aArg);this.__proto__=C.Aev;this.
Text.H(Bs6);this.Text.R(A.jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"
};C.AB8={Ke:0,AP:null,A$:null,Ea:null,IL:null,SY:null,Gz:null,Mh:0,K_:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IL.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A$.H([this.IL.M[2]-1,0,this.IL.M[2]+1,aSize[
1]]);this.SY.H([this.IL.M[2],0,this.IL.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.SY.M[2]-1,0,this.SY.M[2]+1,aSize[1]]);this.Gz.H([this.SY.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IL.L(this.V.AQ);this.
Gz.L(this.V.AQ);this.SY.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj7(this.
K_)){this.V.S(A.aaL(A.fl.H1));this.T(BaK);this.SY.R(Rp);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mh.toFixed());this.SY.R(A._GetAutoObject(A.Device.Helper).Sj(this.
Ke,0,5).toFixed());}},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.AX
){this.Mh=this.AX.CF(Ad,1);this.K_=this.AX.AOY(Ad,34);var AtW=this.AX.AOQ(Ad,7);
this.Ke=this.AX.KO(Ad,26);var Aze=this.AX.Hv(Ad,4);var AfR=A._GetAutoObject(A.Device.
Helper).L$(Aze,A._GetAutoObject(A.Device.Helper).Dv());this.IL.Ax(A._GetAutoObject(
A.Device.Converter).AmV(AtW));if(AfR<100)this.Gz.R((AfR.toFixed()+CQ)+A.aaR(A.acf.
AL1));else this.Gz.R(A._GetAutoObject(A.acj.KL).ACX(Aze,A._GetAutoObject(A.Device.
Helper).Dv(),AIs));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IL={I:this},0);
A.acg.Text._Init.call(this.SY={I:this},0);C.CH._Init.call(this.Gz={I:this},0);this.
__proto__=C.AB8;this.AP.H(Aor);this.AP.L(A.jb.Bc);this.A$.H(Aos);this.A$.L(A.jb.
Bc);this.Ea.H(A0h);this.Ea.L(A.jb.Bc);this.IL.H(BaL);this.IL.L(A.jb.Text);this.SY.
H(Ayy);this.Gz.H(A0i);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.IL,0);this.J(this.SY,0);this.J(this.Gz,0);this.SY.S(A.aaL(A.fl.Af));this.
Gz.S(A.aaL(A.fl.Af));this.Gz.A2(A.aaL(A.fl.Ak));this.Gz.Cu(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done(
);this.Ea._Done();this.IL._Done();this.SY._Done();this.Gz._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.A$._ReInit(
);this.Ea._ReInit();this.IL._ReInit();this.SY._ReInit();this.Gz._ReInit();this.SY.
S(A.aaL(A.fl.Af));this.Gz.S(A.aaL(A.fl.Af));this.Gz.A2(A.aaL(A.fl.Ak));this.Gz.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADp={Aj4:
null,PC:null,I7:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj4={I:this},0);A.acg.Ap._Init.call(this.PC={I:this},0);A.acg.Ap._Init.
call(this.I7={I:this},0);this.__proto__=C.ADp;this.Aj4.H(Bs7);this.Aj4.L(A.jb.Text
);this.PC.H(Bs8);this.PC.L(A.jb.Text);this.I7.H(BaC);this.I7.L(A.jb.Text);this.J(
this.Aj4,0);this.J(this.PC,0);this.J(this.I7,0);this.Aj4.Ax(A.aaL(A.ach.ADL));this.
PC.Ax(A.aaL(A.ach.AvK));this.I7.Ax(A.aaL(A.ach.AvF));},_Done:function(){this.__proto__=
C.Dd;this.Aj4._Done();this.PC._Done();this.I7._Done();C.Dd._Done.call(this);},_ReInit:
function(){C.Dd._ReInit.call(this);this.Aj4._ReInit();this.PC._ReInit();this.I7.
_ReInit();},_Mark:function(D){var B;C.Dd._Mark.call(this,D);if((B=this.Aj4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APv={IS:null,Ag2:null,HQ:null,Bc:null,MD:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9b,B.A_A],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
Wy,B.JU],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.ArB,B.SJ
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},Df:function(E){C.BQ.Df.call(this,E);this.IS.L(E);this.Ag2.L(E);this.
HQ.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HQ.R(A.aaR(A.acf.Afd));else this.HQ.R(((A.aaR(A.acf.GN)+A.aaR(A.acf.
Colon))+CQ)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
AqY()){this.Aw4(((A._GetAutoObject(A.Device.Helper).W.CL+1).toFixed()+Bao)+A._GetAutoObject(
A.Device.Device).An.B9().toFixed());this.JU(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nl(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Aw4(Bap);this.JU(2);
this.OnSetAnimalId(-1);this.Nl(0);}},JU:function(E){if(this.Gender===E)return;this.
Gender=E;this.Ag2.Ax(A._GetAutoObject(A.Device.Converter).AmV(E));},Aw4:function(
E){if(this.MD===E)return;this.MD=E;this.IS.R(E);},Nl:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj7(E))this.HQ.
Z(false);else this.HQ.Z(true);},_Init:function(aArg){C.BQ._Init.call(this,aArg);
A.acg.Text._Init.call(this.IS={I:this},0);A.acg.Ap._Init.call(this.Ag2={I:this},
0);A.acg.Text._Init.call(this.HQ={I:this},0);A.acg.C7._Init.call(this.Bc={I:this
},0);this.__proto__=C.APv;this.IS.H(Baq);this.IS.Hn(2);this.IS.KS(true);this.IS.
A6(0x12);this.IS.R(Bar);this.Ag2.H(Bs9);this.HQ.H(Bs_);this.HQ.A6(0x11);this.HQ.
R(A.aaR(A.acf.Afd));this.Bc.DC(AyE);this.Bc.DM(Atj);this.Bc.L(A.jb.Bc);this.J(this.
IS,0);this.J(this.Ag2,0);this.J(this.HQ,0);this.J(this.Bc,0);this.IS.S(A.aaL(A.fl.
Ak));this.Ag2.Ax(A._GetAutoObject(A.Device.Converter).AmV(2));this.HQ.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.IS._Done();this.
Ag2._Done();this.HQ._Done();this.Bc._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.IS._ReInit();this.Ag2._ReInit();this.HQ._ReInit();
this.Bc._ReInit();this.HQ.R(A.aaR(A.acf.Afd));this.IS.S(A.aaL(A.fl.Ak));this.HQ.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.IS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aa0={EaseOfDeliveryToString:
null,AgT:null,Ch:function(G){C.NI.Ch.call(this,G);var AJ1=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.Kw(this.EaseOfDeliveryToString.Lv(AJ1));this.G3.R(
this.AgT.Ael(AJ1).toFixed());},Df:function(E){C.NI.Df.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.NI._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgT._Init.call(this.
AgT={I:this},0);this.__proto__=C.Aa0;this.T(A.aaR(A.acf.AgK));},_Done:function(){
this.__proto__=C.NI;this.EaseOfDeliveryToString._Done();this.AgT._Done();C.NI._Done.
call(this);},_ReInit:function(){C.NI._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgT._ReInit();this.T(A.aaR(A.acf.AgK));},_Mark:function(D){var B;
C.NI._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XT={WhereAboutsToString:null,KY:null,Ch:function(G){C.NI.Ch.call(this,G);var
K_=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kw(this.WhereAboutsToString.
Lv(K_));this.G3.R(this.KY.Ael(K_).toFixed());},Df:function(E){C.NI.Df.call(this,
E);this.G3.L(E);},_Init:function(aArg){C.NI._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KY._Init.call(this.KY={
I:this},0);this.__proto__=C.XT;this.T(A.aaR(A.acf.Jh));},_Done:function(){this.__proto__=
C.NI;this.WhereAboutsToString._Done();this.KY._Done();C.NI._Done.call(this);},_ReInit:
function(){C.NI._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KY._ReInit(
);this.T(A.aaR(A.acf.Jh));},_Mark:function(D){var B;C.NI._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R0={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.
OnSetId],0);A.zX([this,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U2,B.U5]
,0);A.pe([this,this.AfH],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfH],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.z$([this
,this.AfH],[B=A._GetAutoObject(A.Device.Helper),B.U2,B.U5],0);},Fk:function(G){var
B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.
Mz(-this.Y.Br[1]);},DE:function(G){switch(this.Cq.CO){case 6:case 7:this.Cq.NL=true;
break;case 4:this.Bgj(4);break;case 5:this.Bgj(5);break;default:;}},Bgj:function(
GA){var B;switch(GA){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Dc(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Dc(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Gb([this.Y.Br[0],CD]);}break;default:throw new Error(
Bs$);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I3.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ch(this
);}X=X.Ah;}},AfH:function(s){this.GH(s);},MS:function(G){var B;this.Y.Vy(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BK._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R0;this.Cq.Filter=147;this.Y.H(UZ);this.Y.JT(1);this.Ay.H(AsY
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BL=[this,this.DE];this.Cq.D1=[this,
this.DE];this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.XU={AaU:null,
XQ:null,AaV:null,XR:null,Aa0:null,XT:null,_Init:function(aArg){C.R0._Init.call(this
,aArg);C.AaU._Init.call(this.AaU={I:this},0);C.XQ._Init.call(this.XQ={I:this},0);
C.AaV._Init.call(this.AaV={I:this},0);C.XR._Init.call(this.XR={I:this},0);C.Aa0.
_Init.call(this.Aa0={I:this},0);C.XT._Init.call(this.XT={I:this},0);this.__proto__=
C.XU;this.AaU.H(BD);this.AaU.Aj(true);this.XQ.H(IV);this.XQ.Aj(true);this.XQ.Bi(
true);this.AaV.H(Qd);this.AaV.Aj(true);this.XR.H(Aad);this.XR.Aj(true);this.XR.Bi(
true);this.Aa0.H(Alh);this.Aa0.Aj(true);this.XT.H(Aop);this.XT.Aj(true);this.XT.
Bi(true);this.J(this.AaU,0);this.J(this.XQ,0);this.J(this.AaV,0);this.J(this.XR,
0);this.J(this.Aa0,0);this.J(this.XT,0);},_Done:function(){this.__proto__=C.R0;this.
AaU._Done();this.XQ._Done();this.AaV._Done();this.XR._Done();this.Aa0._Done();this.
XT._Done();C.R0._Done.call(this);},_ReInit:function(){C.R0._ReInit.call(this);this.
AaU._ReInit();this.XQ._ReInit();this.AaV._ReInit();this.XR._ReInit();this.Aa0._ReInit(
);this.XT._ReInit();},_Mark:function(D){var B;C.R0._Mark.call(this,D);if((B=this.
AaU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XR={
BreedToString:null,G3:null,M5:null,Ch:function(G){C.IF.Ch.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BS(Bv));this.G3.
R(this.M5.Ael(Bv).toFixed());},Df:function(E){C.IF.Df.call(this,E);this.G3.L(E);
},_Init:function(aArg){C.IF._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G3={I:this},0);A.Device.
M5._Init.call(this.M5={I:this},0);this.__proto__=C.XR;this.BT.H(Bta);this.G3.H(Btb
);this.G3.Hn(5);this.G3.A6(0x14);this.G3.R(Btc);this.G3.L(A.jb.Text);this.J(this.
G3,0);this.Hw.Ax(A.aaL(A.ach.ADD));this.G3.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IF;this.BreedToString._Done();this.G3._Done();this.M5._Done();C.
IF._Done.call(this);},_ReInit:function(){C.IF._ReInit.call(this);this.BreedToString.
_ReInit();this.G3._ReInit();this.M5._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IF._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M5)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.AaV={
Ch:function(G){C.IF.Ch.call(this,G);var AAm=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAm>0)this.T(A._GetAutoObject(A.Device.Converter).Rj(AAm));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IF._Init.call(this,aArg);this.__proto__=
C.AaV;this.Hw.Ax(A.aaL(A.ach.AQf));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XQ={Yx:null,Ch:function(G){C.IF.Ch.call(this,G);var Pb=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Pb>
0)this.T(A._GetAutoObject(A.acj.KL).AjN(Pb));else this.T(A.aaR(A.acf.Unknown));var
Azg=A.aaL(A.aci.TN);switch(AfW){case 0:Azg=A.aaL(A.ach.ADB);break;case 1:{Azg=A.
aaL(A.ach.AvG);this.Yx.Cv(0);}break;case 2:{Azg=A.aaL(A.ach.AvG);this.Yx.Cv(1);}
break;case 3:{Azg=A.aaL(A.ach.AvG);this.Yx.Cv(2);}break;default:A.ab5("%s%e",Btd
,AfW);}this.Yx.Ax(Azg);},_Init:function(aArg){C.IF._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.Yx={I:this},0);this.__proto__=C.XQ;this.BT.H(Bte);this.Yx.H(AHW);
this.Yx.L(A.jb.Text);this.J(this.Yx,0);this.Hw.Ax(A.aaL(A.ach.AvF));this.Yx.Ax(A.
aaL(A.ach.ADB));},_Done:function(){this.__proto__=C.IF;this.Yx._Done();C.IF._Done.
call(this);},_ReInit:function(){C.IF._ReInit.call(this);this.Yx._ReInit();},_Mark:
function(D){var B;C.IF._Mark.call(this,D);if((B=this.Yx)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.AaU={Ke:0,XS:null,K_:0
,Bl:function(aSize){C.IF.Bl.call(this,aSize);this.XS.H(this.Hw.M);},Ai:function(
Ae){C.IF.Ai.call(this,Ae);this.XS.L(this.BT.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj7(this.K_)){this.T(A.aaR(A.acf.AnimalLoss));this.Hw.Z(false);this.XS.Z(true);
}else if(this.Ke>0){this.T(A._GetAutoObject(A.Device.Converter).Rj(this.Ke));this.
Hw.Z(true);this.XS.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hw.Z(true);this.
XS.Z(false);}},Ch:function(G){C.IF.Ch.call(this,G);this.Ke=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.K_=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IF._Init.call(this,aArg);A.acg.Text._Init.call(this.XS={
I:this},0);this.__proto__=C.AaU;this.XS.R(BaK);this.J(this.XS,0);this.Hw.Ax(A.aaL(
A.ach.AvK));this.XS.S(A.aaL(A.fl.H1));},_Done:function(){this.__proto__=C.IF;this.
XS._Done();C.IF._Done.call(this);},_ReInit:function(){C.IF._ReInit.call(this);this.
XS._ReInit();},_Mark:function(D){var B;C.IF._Mark.call(this,D);if((B=this.XS)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMA={XU:null,Init:function(aArg){var B;A.zX([this,this.AAE],[B=A._GetAutoObject(
A.Device.Device),B.AEC,B.AIR],0);A.pe([this,this.AAE],this);},DE:function(G){var
D5=(A.Core.BK.isPrototypeOf(G)?G:null);switch(D5.CO){case 6:this.Oo(this);break;
case 7:this.MZ(this);break;default:D5.NL=true;}},CC:function(G){var B;this.XU.CC(
this);C.AB.CC.call(this,G);},E4:function(G){var B;this.XU.E4(this);C.AB.E4.call(
this,G);},Anp:function(G){A._GetAutoObject(C.A8).FB();},Adw:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},MZ:function(G){if(A._GetAutoObject(A.Device.
Device).An.B9()<=1)return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC+1;
if(LC>=A._GetAutoObject(A.Device.Device).An.B9())LC=0;A._GetAutoObject(A.Device.
Helper).G8(LC);},Oo:function(G){if(A._GetAutoObject(A.Device.Device).An.B9()<=1)
return;var LC=A._GetAutoObject(A.Device.Helper).W.CL;LC=LC-1;if(LC<0)LC=A._GetAutoObject(
A.Device.Device).An.B9()-1;A._GetAutoObject(A.Device.Helper).G8(LC);},AAE:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqq)A._GetAutoObject(C.A8).Ab9(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XU._Init.call(this.XU={I:this},0);this.
__proto__=C.AMA;this.Background.H(Ce);this.N.Z(true);this.N.OQ(true);this.N.OR(true
);this.Dr(C.APv);this.XU.H(Ff);this.J(this.XU,0);this.N.CE=[this,this.Anp];this.
N.Cf=[this,this.Adw];this.N.C1(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XU._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XU._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XU)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IF={Hw:null,BT:null
,T:function(E){C.I3.T.call(this,E);this.BT.R(this.DK);},Df:function(E){C.I3.Df.call(
this,E);this.Hw.L(E);this.BT.L(E);},_Init:function(aArg){C.I3._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hw={I:this},0);C.CH._Init.call(this.BT={I:this},0);this.
__proto__=C.IF;this.Hw.H(Btf);this.Hw.L(A.jb.Text);this.BT.H(Btg);this.BT.A6(0x11
);this.BT.L(A.jb.Text);this.J(this.Hw,0);this.J(this.BT,0);this.Hw.Ax(A.aaL(A.aci.
TN));this.BT.S(A.aaL(A.fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I3;this.Hw._Done();this.BT._Done();C.I3._Done.call(this);},_ReInit:function(
){C.I3._ReInit.call(this);this.Hw._ReInit();this.BT._ReInit();this.BT.S(A.aaL(A.
fl.Af));this.BT.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I3._Mark.call(this
,D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I3={Background:null
,KT:0,Hl:false,CP:function(){this.Ch(this);},Init:function(aArg){var B;A.zX([this
,this.BbO],[B=A._GetAutoObject(A.Device.Helper).W,B.Q4,B.OnSetId],0);A.pe([this,
this.BbO],this);},Bl:function(aSize){C.Hi.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hi.Ai.call(this,Ae);if(this.
Hl)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Ch:function(G){}
,BbO:function(s){this.Ch(s);},Bi:function(E){if(this.Hl===E)return;this.Hl=E;this.
Am();},Df:function(E){if(this.KT===E)return;this.KT=E;},_Init:function(aArg){C.Hi.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.I3;this.H(BD);this.Background.H(AIu);this.KT=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hi;this.Background._Done(
);C.Hi._Done.call(this);},_ReInit:function(){C.Hi._ReInit.call(this);this.Background.
_ReInit();this.CP();},_Mark:function(D){var B;C.Hi._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NI={G3:null,BBC:function(G){this.BT.H(A.abN(this.BT.M,this.G3.M[0]));},_Init:
function(aArg){C.FA._Init.call(this,aArg);A.acg.Text._Init.call(this.G3={I:this}
,0);this.__proto__=C.NI;this.G3.AZ(0xA);this.G3.H(Bth);this.G3.Hn(5);this.G3.I$(
true);this.G3.A6(0x14);this.G3.R(A.jV);this.G3.L(A.jb.Text);this.J(this.G3,0);this.
G3.Q7([this,this.BBC]);this.G3.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.FA;this.G3._Done();C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(
this);this.G3._ReInit();this.G3.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FA.
_Mark.call(this,D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axn={ARj:null,_Init:function(aArg){C.Zz._Init.call(this,aArg);this.__proto__=
C.Axn;},_Mark:function(D){var B;C.Zz._Mark.call(this,D);if((B=this.ARj)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANI={Wx:null,WT:0,AwP:function(E){C.AmH.AwP.call(this,E);if(E)this.Ps.R(Bti);
else this.Ps.R(BaM);},BnA:function(E){if(A.aaZ(this.Wx,E))return;if(!!this.Wx)A.
z$([this,this.A3B],this.Wx,0);this.Wx=E;if(!!E)A.zX([this,this.A3B],E,0);if(!!E)
A.pe([this,this.A3B],this);},AFR:function(E){var F;if(this.WT===E)return;this.WT=
E;this.AwP(!!this.Wx&&((F=this.Wx,F[1].call(F[0]))===E));},A3B:function(G){var F;
this.AwP(!!this.Wx&&((F=this.Wx,F[1].call(F[0]))===this.WT));},_Init:function(aArg
){C.AmH._Init.call(this,aArg);this.__proto__=C.ANI;this.Ps.R(BaM);this.Ps.S(A.aaL(
A.fl.H1));},_Mark:function(D){var B;C.AmH._Mark.call(this,D);if((B=this.Wx)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axp={Wx:null,WT:0,_Init:function(aArg){C.Zz._Init.call(this,aArg);this.__proto__=
C.Axp;},_Mark:function(D){var B;C.Zz._Mark.call(this,D);if((B=this.Wx)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUc={GP:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Rb._Init.call(
this.GP={I:this},0);this.__proto__=C.AUc;var B;this.Ja(A.aaR(A.acf.ACN));this.GP.
H(Ah1);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGh));this.GP.Ar2(
false);this.GP.A_w(true);this.J(this.GP,0);this.GP.Ab0([B=this.GP,B.FV]);this.GP.
Gs([this,this.D_,this.GS]);this.GP.AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(
A.Device.Device),B.ASR,B.A0u]);},_Done:function(){this.__proto__=C.Cg;this.GP._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.GP._ReInit(
);this.Ja(A.aaR(A.acf.ACN));this.GP.T(A.aaR(A.acf.AGh));},_Mark:function(D){var B;
C.Cg._Mark.call(this,D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.AUa={GI:0,C8:null,AW:null,Kr:null,E$:null
,GermanStateToString:null,CountryToString:null,Pz:0,La:0,Mb:false,Init:function(
aArg){A.zX([this,this.ML],[this,this.SC,this.Lp],0);A.zX([this,this.ML],[this,this.
Ans,this.Ahu],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.AW.FO(this.LS);this.
Kr.FO(this.LS);this.E$.CT(this.LS);},DJ:function(G){var F;if(!this.N)return;switch(
this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=
this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[
1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[
0])).CU(this.CountryToString.BS(this.La));(F=this.N,F[1].call(F[0])).B$=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0]
)).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(
F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CU((A.aaR(A.acf.EV
)+Aye)+this.GermanStateToString.Lv(A._GetAutoObject(A.Device.Converter).ACY(this.
Pz)));(F=this.N,F[1].call(F[0])).B$=null;}break;default:{(F=this.N,F[1].call(F[0
])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(
F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).CU(A.jV);(F=this.N,F[1].call(F[0])).B$=null;}}}
,Ex:function(EN){var To=this.A_;if(EN<0)EN=0;else if(EN>this.RJ)EN=this.RJ;switch(
EN){case 0:{this.Bb(null);if(!this.GI&&!this.Pz)this.Lp(0);}break;case 1:this.Bb(
this.E$);break;case 2:this.Bb(this.Kr);break;case 3:if(((To===2)&&!this.Pz)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(To>0))this.AW.SP(2);else this.AW.SP(
7);}break;default:throw new Error(Atm+EN.toFixed());}this.A_=EN;C.El.Ex.call(this
,EN);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mb=true;this.SF(A._GetAutoObject(
A.Device.Helper).Sj(E,0,10));this.Ahu(A._GetAutoObject(A.Device.Helper).Sj(E,10,
2)|0);this.Lp(A._GetAutoObject(A.Device.Converter).S2(E));this.Mb=false;if(!!this.
AM){this.Kr.Ku(2);this.AW.Ku(10);}else{this.Kr.Ku(0);this.AW.Ku(0);}this.Am();},
FV:function(G){var F;if(!this.AM){var BO=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).AC_());if(this.AM!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RJ);},AjO:function(){return this.GI;
},AjQ:function(){return 9999999999;},Lp:function(E){if(this.La===E)return;this.La=
E;if(this.Mb===false)A.pe([this,this.Vo],this);A.abo([this,this.SC,this.Lp],0);}
,SF:function(E){if(this.GI===E)return;this.GI=E;if(this.Mb===false)A.pe([this,this.
Vo],this);A.abo([this,this.AbX,this.SF],0);},Vo:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).Aqz(this.La),3,10)+A.abl(this.Pz,2,10))+
A.abm(this.GI,10,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahu:function(
E){if(this.Pz===E)return;this.Pz=E;if(this.Mb===false)A.pe([this,this.Vo],this);
A.abo([this,this.Ans,this.Ahu],0);},SC:function(){return this.La;},AbX:function(
){return this.GI;},Ans:function(){return this.Pz;},_Init:function(aArg){C.El._Init.
call(this,aArg);C.C8._Init.call(this.C8={I:this},0);C.ARd._Init.call(this.AW={I:
this},0);C.AvS._Init.call(this.Kr={I:this},0);C.AsJ._Init.call(this.E$={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AUa;var B;this.RJ=3;this.AW.H(Btj);this.Kr.H(Btk);this.Kr.EU(16);this.E$.H(BaN
);this.J(this.AW,0);this.J(this.Kr,0);this.J(this.E$,0);this.C8.AE9([this,this.SC
,this.Lp]);this.AW.Au([this,this.AbX,this.SF]);this.Kr.Au([this,this.Ans,this.Ahu
]);this.E$.CK(this.C8);this.E$.Au([B=this.C8,B.B_,B.Cb]);this.Init(aArg);},_Done:
function(){this.__proto__=C.El;this.C8._Done();this.AW._Done();this.Kr._Done();this.
E$._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.El._Done.
call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C8._ReInit();this.AW.
_ReInit();this.Kr._ReInit();this.E$._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.ARd={NO:null,NN:null,ES:null,FZ:null,Eq:null,Dy:null,CV:null,Ct:null,FO:function(
E){if(this.M9===E)return;C.Lg.FO.call(this,E);this.Ct.CT(E);this.CV.CT(E);this.Dy.
CT(E);this.Eq.CT(E);this.FZ.CT(E);this.ES.CT(E);this.NN.CT(E);this.NO.CT(E);},Yq:
function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.
Ct;break;case 2:B5=this.CV;break;case 3:B5=this.Dy;break;case 4:B5=this.Eq;break;
case 5:B5=this.FZ;break;case 6:B5=this.ES;break;case 7:B5=this.NN;break;case 8:B5=
this.NO;break;case 9:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;},_Init:
function(aArg){C.Lg._Init.call(this,aArg);C.DF._Init.call(this.NO={I:this},0);C.
DF._Init.call(this.NN={I:this},0);C.DF._Init.call(this.ES={I:this},0);C.DF._Init.
call(this.FZ={I:this},0);C.DF._Init.call(this.Eq={I:this},0);C.DF._Init.call(this.
Dy={I:this},0);C.DF._Init.call(this.CV={I:this},0);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ARd;this.H(Btl);this.G2.H(AII);this.NO.H(AyF);this.NN.H(AZ6
);this.ES.H(AZ7);this.FZ.H(AZ8);this.Eq.H(AZ9);this.Dy.H(AZ_);this.CV.H(AZ$);this.
Ct.H(Bax);this.F0.H(A0a);this.EM.H(A0a);this.J(this.NO,-2);this.J(this.NN,-2);this.
J(this.ES,-2);this.J(this.FZ,-2);this.J(this.Eq,-2);this.J(this.Dy,-2);this.J(this.
CV,-2);this.J(this.Ct,-2);this.NO.Dj=[this,this.GX];this.NN.Dj=[this,this.GX];this.
ES.Dj=[this,this.GX];this.FZ.Dj=[this,this.GX];this.Eq.Dj=[this,this.GX];this.Dy.
Dj=[this,this.GX];this.CV.Dj=[this,this.GX];this.Ct.Dj=[this,this.GX];},_Done:function(
){this.__proto__=C.Lg;this.NO._Done();this.NN._Done();this.ES._Done();this.FZ._Done(
);this.Eq._Done();this.Dy._Done();this.CV._Done();this.Ct._Done();C.Lg._Done.call(
this);},_ReInit:function(){C.Lg._ReInit.call(this);this.NO._ReInit();this.NN._ReInit(
);this.ES._ReInit();this.FZ._ReInit();this.Eq._ReInit();this.Dy._ReInit();this.CV.
_ReInit();this.Ct._ReInit();},_Mark:function(D){var B;C.Lg._Mark.call(this,D);if((
B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ES)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ct
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUb={
GI:0,C8:null,AW:null,E$:null,CountryToString:null,La:0,Mb:false,Init:function(aArg
){A.zX([this,this.ML],[this,this.SC,this.Lp],0);},Ai:function(Ae){C.El.Ai.call(this
,Ae);this.AW.FO(this.LS);this.E$.CT(this.LS);},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).CU(this.CountryToString.BS(this.La));(F=this.N,F[1].call(F[0])).B$=null;}
break;default:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(
F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CU(A.jV);(F=
this.N,F[1].call(F[0])).B$=null;}}},Ex:function(EN){var To=this.A_;if(EN<0)EN=0;
else if(EN>this.RJ)EN=this.RJ;switch(EN){case 0:{this.Bb(null);if(!this.GI)this.
Lp(0);}break;case 1:this.Bb(this.E$);break;case 2:{this.Bb(this.AW);if(!this.GI||(
To>0))this.AW.SP(2);else this.AW.SP(7);}break;default:throw new Error(Atm+EN.toFixed(
));}this.A_=EN;C.El.Ex.call(this,EN);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.Mb=true;this.SF(A._GetAutoObject(A.Device.Helper).Sj(E,0,12));this.Lp(
A._GetAutoObject(A.Device.Converter).S2(E));this.Mb=false;if(!!this.AM)this.AW.Ku(
12);else this.AW.Ku(0);this.Am();},FV:function(G){var F;if(!this.AM){var BO=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).AC_());if(this.AM!==BO){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RJ);},AjO:function(
){return this.GI;},AjQ:function(){return 999999999999;},Lp:function(E){if(this.La===
E)return;this.La=E;if(this.Mb===false)A.pe([this,this.Vo],this);A.abo([this,this.
SC,this.Lp],0);},SF:function(E){if(this.GI===E)return;this.GI=E;if(this.Mb===false
)A.pe([this,this.Vo],this);A.abo([this,this.AbX,this.SF],0);},Vo:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Aqz(this.La),3,10)+A.abm(
this.GI,12,10);var BO=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BO){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SC:function(){return this.
La;},AbX:function(){return this.GI;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C8._Init.call(this.C8={I:this},0);C.ADT._Init.call(this.AW={I:this},0);C.AsJ.
_Init.call(this.E$={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUb;var B;this.RJ=2;this.AW.H(Btm);this.E$.H(BaN);this.
J(this.AW,0);this.J(this.E$,0);this.C8.AE9([this,this.SC,this.Lp]);this.AW.Au([this
,this.AbX,this.SF]);this.E$.CK(this.C8);this.E$.Au([B=this.C8,B.B_,B.Cb]);this.Init(
aArg);},_Done:function(){this.__proto__=C.El;this.C8._Done();this.AW._Done();this.
E$._Done();this.CountryToString._Done();C.El._Done.call(this);},_ReInit:function(
){C.El._ReInit.call(this);this.C8._ReInit();this.AW._ReInit();this.E$._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,X_:null,X$:null,X9:null,X7:null,X8:null,DE:function(
G){var B;C.AB.DE.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkQ();A._GetAutoObject(A.Device.Helper).Asr();},Ig:function(G){
var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.X_)A._GetAutoObject(
C.A8).Cd(28);else if(Cy===this.X$)A._GetAutoObject(C.A8).Cd(26);else if(Cy===this.
X9)A._GetAutoObject(C.A8).Cd(54);else if(Cy===this.X7)A._GetAutoObject(C.A8).Cd(
27);else if(Cy===this.X8)A._GetAutoObject(C.A8).Cd(78);},A3F:function(G){A._GetAutoObject(
C.A8).FB();},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.
MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fo._Init.call(this.X_={I:this
},0);C.Fo._Init.call(this.X$={I:this},0);C.Fo._Init.call(this.X9={I:this},0);C.Fo.
_Init.call(this.X7={I:this},0);C.Fo._Init.call(this.X8={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CS);this.N.Z(true);this.N.CU(A.jV);this.Ek.Ar(false
);this.Dr(C.Aq0);this.DY.AZ(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);
this.Y.JT(9);this.Ay.H(It);this.X_.H(Qa);this.X_.Aj(true);this.X_.T(A.aaR(A.acf.
A71));this.X$.H(A0g);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.NewAnimals));this.X9.
H(Ob);this.X9.Aj(true);this.X9.T(A.aaR(A.acf.Calving));this.X7.H(Qb);this.X7.Aj(
true);this.X7.T(A.aaR(A.acf.AB6));this.X8.H(MJ);this.X8.Aj(true);this.X8.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
X_,0);this.J(this.X$,0);this.J(this.X9,0);this.J(this.X7,0);this.J(this.X8,0);this.
N.CE=[this,this.A3F];this.N.C1(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];this.X_.
AR=[this,this.Ig];this.X_.DB(A.aaL(A.ach.ADM));this.X$.AR=[this,this.Ig];this.X$.
DB(A.aaL(A.ach.AvO));this.X9.AR=[this,this.Ig];this.X9.DB(A.aaL(A.ach.AP_));this.
X7.AR=[this,this.Ig];this.X7.DB(A.aaL(A.ach.AP5));this.X8.AR=[this,this.Ig];this.
X8.DB(A.aaL(A.ach.APY));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.X_._Done();this.X$._Done();this.X9._Done();this.X7.
_Done();this.X8._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.X_._ReInit(
);this.X$._ReInit();this.X9._ReInit();this.X7._ReInit();this.X8._ReInit();this.X_.
T(A.aaR(A.acf.A71));this.X$.T(A.aaR(A.acf.NewAnimals));this.X9.T(A.aaR(A.acf.Calving
));this.X7.T(A.aaR(A.acf.AB6));this.X8.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.AR_={K5:null,EaseOfDelivery:null,BirthType:null,AcK:null
,Lk:null,Cn:null,G7:null,Li:null,AzP:true,Init:function(aArg){this.Bb(this.Da);A.
pe([this,this.GH],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E5();A._GetAutoObject(C.A8).FB();if(!!this.K5)this.K5.Ew(this);},Agh:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.BZ.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwQ(true);if(!!this.K5)this.K5.Agh(this
);if(A._GetAutoObject(A.Device.Device).An.Lh())A._GetAutoObject(A.Device.Helper).
AKm(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApH]);else{this.Ai1();A.
pe([this,this.Ap5],this);}},Auo:function(){this.N.CU(A.jV);this.N.C2(A.aaL(A.ach.
ADQ));this.N.B$=[this,this.AyV];},CC:function(G){var B;C.HY.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lh()){A._GetAutoObject(A.Device.Device).A3(41
,true,A._GetAutoObject(A.Device.Device).An.HJ().toFixed(),0,null);this.Ew(this);
}else if(this.AzP){this.AzP=false;A.pe([this,this.A3U],this);}else if(!this.K5){
this.K5=A._NewObject(C.AR$,0);this.K5.A92([this,this.AA1]);A._GetAutoObject(A.Device.
Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nl(this.AsV.Ael(6));this.K5.LO(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},Ai1:function(
){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var
L9=A._GetAutoObject(A.Device.Device).An.LT(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SQ(L9);if(A._GetAutoObject(A.Device.Helper
).Am6()){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.
Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HJ().toFixed(),0,null);else{
var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B1.OnSetBodyWeight(this.KJ);B1.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B1.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A67(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap5:function(G){var B;if(!!this.K5)this.K5.Ap5(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am6())this.C_.Z(true);else this.C_.Z(false);},
ApH:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",Ata,As.Id);}},AA1:function(G){this.
LO(this);this.AeY(A._GetAutoObject(A.Device.Helper).Abp(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JH(this.Da);},ApI:function(G){var F;C.HY.ApI.call(this
,G);(F=this.C_.Q,F[2].call(F[0],this.C_.AnY));},A3U:function(G){A._GetAutoObject(
C.A8).Cd(79);},_Init:function(aArg){C.HY._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcK._Init.call(this.AcK={I:this},0);C.Rb._Init.call(this.Lk={I:this
},0);C.SR._Init.call(this.Cn={I:this},0);C.BW._Init.call(this.G7={I:this},0);C.BW.
_Init.call(this.Li={I:this},0);this.__proto__=C.AR_;var B;this.Dr(C.APs);this.Lk.
H(Ah1);this.Lk.Aj(true);this.Lk.T(A.aaR(A.acf.ACu));this.CG.H(AcR);this.Cn.H(AcR
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.AFJ(true);this.G7.H(AcR);
this.G7.Aj(true);this.G7.T(A.aaR(A.acf.Arq));this.Li.H(AcR);this.Li.Aj(true);this.
Li.T(A.aaR(A.acf.AgK));this.J(this.Lk,-5);this.J(this.Cn,-3);this.J(this.G7,-1);
this.J(this.Li,-1);this.EaseOfDelivery.L0(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.L0(A._GetAutoObject(A.Device.Helper).W);this.AcK.L0(A._GetAutoObject(A.
Device.Helper).W);this.Lk.Gs([this,this.D_,this.GS]);this.Lk.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ASN,B.AnF]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.LZ([
B=this.Cn,B.FV]);this.Cn.L2(A.aaL(A.ach.Edit));this.Cn.Ab6([B=A._GetAutoObject(A.
Device.Helper).W,B.Awe,B.Q6]);this.Gn.Au([B=this.AcK,B.B_,B.Cb]);this.Gn.CK(this.
AcK);this.G7.Au([B=this.BirthType,B.B_,B.Cb]);this.G7.CK(this.BirthType);this.Li.
Au([B=this.EaseOfDelivery,B.B_,B.Cb]);this.Li.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HY;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcK._Done();this.Lk._Done();this.Cn._Done();this.G7._Done();this.Li.
_Done();C.HY._Done.call(this);},_ReInit:function(){C.HY._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcK._ReInit();this.Lk._ReInit(
);this.Cn._ReInit();this.G7._ReInit();this.Li._ReInit();this.Lk.T(A.aaR(A.acf.ACu
));this.Cn.T(A.aaR(A.acf.Aeg));this.G7.T(A.aaR(A.acf.Arq));this.Li.T(A.aaR(A.acf.
AgK));},_Mark:function(D){var B;C.HY._Mark.call(this,D);if((B=this.K5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcK)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Li)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMC={Init:function(aArg){var B;A.zX([this,this.ALr],[B=A._GetAutoObject(A.Device.
Device),B.AEJ,B.AIW],0);A.pe([this,this.ALr],this);},AKT:function(){var Be=null;
switch(A._GetAutoObject(A.Device.Device).AbT){case 0:Be=A._GetAutoObject(A.Device.
Helper).AC1();break;case 1:Be=A._GetAutoObject(A.Device.Helper).AOM();break;case
2:Be=A._GetAutoObject(A.Device.Helper).Mt();break;default:throw new Error(A0j+A.
_GetAutoObject(A.Device.Device).AbT.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Be);},ALr:function(G){switch(A._GetAutoObject(A.Device.Device).AbT){case
0:this.Dk(A.aaR(A.acf.ASe));break;case 1:this.Dk(A.aaR(A.acf.BkB));break;case 2:
this.Dk(A.aaR(A.acf.Av8));break;default:A.ab5("%s",A0j+A._GetAutoObject(A.Device.
Device).AbT.toFixed());}},_Init:function(aArg){C.Amx._Init.call(this,aArg);this.
__proto__=C.AMC;this.Bns(C.API);this.Ek.Ab2(A._NewObject(C.APx,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.AR$={AAm:0,Adj:null
,Au3:null,Bep:0,A38:0,A21:0,Init:function(aArg){this.Bep=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adj=A._GetAutoObject(A.Device.Device).An.Filter;this.AAm=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A21=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LO:function(G){A._GetAutoObject(A.Device.Helper).W.AnF(this.AAm);A._GetAutoObject(
A.Device.Helper).W.Ae6(true);switch(this.A21){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AZ3,this.A21);}},Ew:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adj);if(!!this.A38)this.Bg0();},Agh:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bg0:function(){var At3=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LT(0,this.Bep);At3.E3(Ad,A._GetAutoObject(
A.Device.Device).An);At3.AwC(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At3.
ArV(false);At3.AwR(At3.LactationNumber+1);At3.Ci(A._GetAutoObject(A.Device.Device
).An);},Ap5:function(G){this.A38++;var ByJ=A._GetAutoObject(A.Device.Converter).
BhI(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A38<ByJ)&&(A._GetAutoObject(
A.Device.Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A3(59,true,A.jV,0,[this,this.Vj]);else this.Bdn(
this);},Vj:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&(As.PopupState===8))this.Bdn(this);else if(!!As&&(As.PopupState===7))this.
AA1(this);},AA1:function(G){var B;var Ib=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfW=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Pb=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AJ1=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Au3)(B=this.Au3
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(Ib);A._GetAutoObject(
A.Device.Helper).W.Akw(AfW);A._GetAutoObject(A.Device.Helper).W.N1(Bv);A._GetAutoObject(
A.Device.Helper).W.Q6(Pb);A._GetAutoObject(A.Device.Helper).W.Aky(AJ1);},Bdn:function(
G){this.Bg0();A._GetAutoObject(C.A8).FB();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adj);},A92:function(E){if(A.aa0(this.Au3,E))return;this.Au3=E;},_Init:function(
aArg){this.__proto__=C.AR$;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adj)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AMS={Init:function(aArg){
var B;A.zX([this,this.BeM],[B=A._GetAutoObject(A.Device.Device),B.ASx,B.A0k],0);
this.BeM(this);},Ci:function(){A.ab5("%s",Btn);},E3:function(AcX){C.Vx.E3.call(this
,AcX);var O;for(O=16;O>0;O--)this.Ia.Set(O,this.Ia.Get(O-1));this.Ia.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Bto);},ADX:function(Eh){switch(Eh){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},BeM:
function(G){this.E3(A._GetAutoObject(A.Device.Device).AuH);A.we(this,0);},_Init:
function(aArg){C.Vx._Init.call(this,aArg);this.__proto__=C.AMS;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.AuV={_Init:function(){C.
AMS._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JK={C7:null,V:null,A7U:true,T:function(E){C.I3.T.call(this,E);this.
V.R(E);},Df:function(E){C.I3.Df.call(this,E);this.V.L(E);},Bnx:function(E){if(this.
A7U===E)return;this.A7U=E;this.C7.Z(E);},_Init:function(aArg){C.I3._Init.call(this
,aArg);A.acg.C7._Init.call(this.C7={I:this},0);C.CH._Init.call(this.V={I:this},0
);this.__proto__=C.JK;this.C7.DC(Btp);this.C7.DM(Btq);this.C7.L(A.jb.Bc);this.V.
AZ(0x3F);this.V.H(Btr);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C7,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kp));this.V.A2(A.aaL(A.fl.Il));this.V.Cu(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I3;this.C7._Done();this.V._Done();C.
I3._Done.call(this);},_ReInit:function(){C.I3._ReInit.call(this);this.C7._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kp));this.V.A2(A.aaL(A.fl.Il));this.V.Cu(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I3._Mark.call(this,D);if((B=this.C7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APx={AgY:null,De:null,Abn:null,Fm:null,Fa:
null,Init:function(aArg){var B;A.zX([this,this.A4J],[B=A._GetAutoObject(A.Device.
Device),B.AEJ,B.AIW],0);A.pe([this,this.A4J],this);},Df:function(E){C.Yt.Df.call(
this,E);this.De.L(E);},AEP:function(G){A.pe([this,this.A4J],this);},AA3:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E_();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DL(1,4))?B:null);if(!!FilterCriterion)Filter.Np(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C4:function(G){var B;var F;C.Yt.C4.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.De.Ax(A.aaL(A.ach.AjW));return;}var Bzp=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(38,0)
)?B:null);var BbZ=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DL(14,0))?B:null);if(!!Bzp)this.De.Ax(A.aaL(A.ach.ADe));else if(
!!BbZ&&(BbZ.A5===1))this.De.Ax(A.aaL(A.ach.AQa));else this.De.Ax(A.aaL(A.ach.AjW
));},A4J:function(G){var F;var Filter=null;var AOA;switch(A._GetAutoObject(A.Device.
Device).AbT){case 0:Filter=A._GetAutoObject(A.Device.Helper).AC1();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOM();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mt();break;default:throw new Error(A0j+A._GetAutoObject(A.Device.
Device).AbT.toFixed());}var Ai5=this.Akq();if(Ai5>0){AOA=A._NewObject(A.Device.Int32FilterCriterion
,0);AOA.Initialize(1,4,Ai5,false);Filter.CW(AOA);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.AeZ(false);},Oo:function(G){if(!this.Akq())this.AW.AeZ(true
);this.Bb(this.AW);this.Am();},MZ:function(G){this.AW.AeZ(false);this.Bb(this.AgY
);this.Am();},_Init:function(aArg){C.Yt._Init.call(this,aArg);C.Arb._Init.call(this.
AgY={I:this},0);A.acg.Ap._Init.call(this.De={I:this},0);C.Abn._Init.call(this.Abn={
I:this},0);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.BK._Init.call(this.Fa={
I:this},0);this.__proto__=C.APx;var B;this.H(Bts);this.AW.H(Btt);this.T5.H(Btu);
this.Gw.Z(false);this.AgY.H(Btv);this.De.H(Btw);this.Abn.Au(A._GetAutoObject(A.Device.
Device).AbT);this.Fm.Filter=6;this.Fa.Filter=7;this.JZ(this.A$,-1);this.J(this.AgY
,-1);this.J(this.De,-1);this.AgY.CK(this.Abn);this.AgY.Au([B=this.Abn,B.B_,B.Cb]
);this.De.Ax(A.aaL(A.ach.AjW));this.Fm.BL=[this,this.Oo];this.Fa.BL=[this,this.MZ
];this.Init(aArg);},_Done:function(){this.__proto__=C.Yt;this.AgY._Done();this.De.
_Done();this.Abn._Done();this.Fm._Done();this.Fa._Done();C.Yt._Done.call(this);}
,_ReInit:function(){C.Yt._ReInit.call(this);this.AgY._ReInit();this.De._ReInit();
this.Abn._ReInit();this.Fm._ReInit();this.Fa._ReInit();},_Mark:function(D){var B;
C.Yt._Mark.call(this,D);if((B=this.AgY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abn={AeU:null
,Init:function(aArg){var B;A.zX([this,this.Ber],[B=A._GetAutoObject(A.Device.Device
),B.AEJ,B.AIW],0);A.pe([this,this.Ber],this);},Du:function(){return 3;},Au:function(
E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwY(E);},AC0:function(
aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.AeU.AsK(aIndex
);},AC2:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return this.
AeU.AsL(aIndex);},Ber:function(G){this.Q=A._GetAutoObject(A.Device.Device).AbT;A.
abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeU._Init.call(this.AeU={I:this},0);this.__proto__=C.Abn;this.Ca.Set(0,
0);this.Ca.Set(1,1);this.Ca.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeU._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeU._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.API={Es:null,IO:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CH._Init.
call(this.Es={I:this},0);A.acg.Text._Init.call(this.IO={I:this},0);this.__proto__=
C.API;this.H(O6);this.Background.H(O6);this.Es.H(AIv);this.Es.R(A.aaR(A.acf.A7a)
);this.Es.A6(0x12);this.Es.L(A.jb.Text);this.IO.AZ(0x3F);this.IO.H(AIw);this.IO.
Hn(5);this.IO.A6(0x14);this.IO.R(A.aaR(A.acf.AGV));this.IO.L(A.jb.Text);this.J(this.
Es,0);this.J(this.IO,0);this.Es.S(A.aaL(A.fl.Af));this.Es.A2(A.aaL(A.fl.Il));this.
Es.Cu(A.aaL(A.fl.Bh));this.IO.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Es._Done();this.IO._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Es._ReInit();this.IO._ReInit();this.Es.R(A.aaR(A.acf.
A7a));this.IO.R(A.aaR(A.acf.AGV));this.Es.S(A.aaL(A.fl.Af));this.Es.A2(A.aaL(A.fl.
Il));this.Es.Cu(A.aaL(A.fl.Bh));this.IO.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J2:null,Bgx:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bfb(this);else A._GetAutoObject(A.Device.Device).A3(63,true,A.
jV,0,[this,this.Vj]);},Bfb:function(G){A._GetAutoObject(C.A8).FB();},Vj:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63)
)&&(As.PopupState===7))this.Bfb(this);},_Init:function(aArg){C.Mi._Init.call(this
,aArg);A.acg.Text._Init.call(this.J2={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APw);this.Jg.H(Btx);this.Jg.AkG(2);this.Acy.Z(false);this.ARQ=12;this.
Number.H(Bty);this.Number.R(A.aaR(A.acf.A$w));this.A5d=false;this.J2.H(Btz);this.
J2.Hn(5);this.J2.KS(true);this.J2.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.
aaR(A.acf.ABM));this.J2.L(A.jb.Text);this.JZ(this.Jg,-1);this.JZ(this.IT,-1);this.
JZ(this.Acy,-1);this.J(this.J2,0);this.J2.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mi;this.J2._Done();C.Mi._Done.call(this);},_ReInit:function(){C.Mi._ReInit.
call(this);this.J2._ReInit();this.Number.R(A.aaR(A.acf.A$w));this.J2.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CQ)+A.aaR(A.acf.ABM));this.J2.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mi._Mark.call(this,D);if((B=this.J2)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APw={_Init:function(aArg){C.AqZ.
_Init.call(this,aArg);this.__proto__=C.APw;this.DS.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Jg={AbJ:null,AbI:null,AbH:null,QI:null,CountryToString:null,AsN:0,CP:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QI.R(this.CountryToString.
Lv(A._GetAutoObject(A.Device.Converter).A7y(A._GetAutoObject(A.Device.Device).Language
))+BtA);},AkG:function(E){if(this.AsN===E)return;this.AsN=E;var bitmap=null;var A15=
BtB;var A14=null;var A16=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aq$);break;case
1:{bitmap=A.aaL(A.ach.AQP);A15=BtC;A14=A.aaL(A.fl.Ak);A16=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQQ);A15=BtD;A14=A.aaL(A.fl.Bh);A16=true;}break;default:throw new Error(
BtE+E.toFixed());}this.AbH.Ax(bitmap);this.AbI.Ax(bitmap);this.AbJ.Ax(bitmap);this.
QI.H(A.abJ(this.QI.M,A15));this.QI.S(A14);this.QI.Z(A16);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbJ={I:this},0);A.acg.Ap._Init.call(this.AbI={I:this},0);A.acg.Ap._Init.
call(this.AbH={I:this},0);A.acg.Text._Init.call(this.QI={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jg;this.H(AIL);this.
AbJ.AZ(0x3);this.AbJ.H(AIL);this.AbJ.L(A.jb.H8);this.AbJ.Cv(2);this.AbI.AZ(0x3);
this.AbI.H(AIL);this.AbI.L(A.jb.Aeb);this.AbI.Cv(1);this.AbH.AZ(0x3);this.AbH.H(
AIL);this.AbH.L(A.jb.Text);this.AbH.Cv(0);this.QI.AZ(0x14);this.QI.H(BtF);this.QI.
L(0xFF020202);this.QI.Z(false);this.J(this.AbJ,0);this.J(this.AbI,0);this.J(this.
AbH,0);this.J(this.QI,0);this.AbJ.Ax(A.aaL(A.ach.Aq$));this.AbI.Ax(A.aaL(A.ach.Aq$
));this.AbH.Ax(A.aaL(A.ach.Aq$));this.QI.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbJ._Done();this.AbI._Done();this.AbH._Done();this.QI._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbJ._ReInit();this.AbI._ReInit();this.AbH._ReInit(
);this.QI._ReInit();this.CountryToString._ReInit();this.QI.S(A.aaL(A.fl.Ak));this.
CP();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbJ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsN={Transponder:0,BGv:1,BGw:2};C.APs={Ap:null,Df:function(E){C.BQ.Df.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APs;this.Ap.H(AZ4);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APj));},_Done:function(){this.__proto__=C.BQ;this.Ap._Done();C.
BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Ih:0,AaC:4,Al6:function(G){C.Ra.Al6.call(this,G);if(A._GetAutoObject(A.Device.Helper
).BdZ()){this.Ih=A._GetAutoObject(A.Device.Helper).Uz.Id;var AiA=A._GetAutoObject(
A.Device.Helper).A7w(this.Ih,A._GetAutoObject(A.Device.Helper).W);if(AiA){A._GetAutoObject(
A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter).Rj(this.Ih),0,[
this,this.Vj]);return;}AiA=A._GetAutoObject(A.Device.Helper).Bj3(this.Ih,A._GetAutoObject(
A.Device.Helper).W);if(AiA&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Ih)){A._GetAutoObject(A.Device.Device).A3(25,true,A._GetAutoObject(A.Device.
Converter).Rj(this.Ih),0,[this,this.Vj]);return;}this.AaC=A._GetAutoObject(A.Device.
Helper).ARq(this.Ih);switch(this.AaC){case 0:A._GetAutoObject(A.Device.Device).A3(
45,true,this.Ih.toFixed().length.toFixed(),0,[this,this.Vj]);break;case 1:case 2:{
var BM=A._GetAutoObject(A.Device.Converter).AxV(this.Ih);A._GetAutoObject(A.Device.
Device).A3(46,true,BM.toFixed(),0,[this,this.Vj]);}break;case 3:this.Bgp();break;
default:throw new Error(AIj+this.AaC.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A8).FB();},Vj:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.AaC===2)this.Bgp();else A._GetAutoObject(
A.Device.Device).AhM();break;case 5:this.Ew(this);break;default:;}},Bgp:function(
){A._GetAutoObject(A.Device.Helper).W.Nj(this.Ih);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.PW(this.Ih);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).A3(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Ra._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.IK);this.Number.R(A.aaR(A.acf.A$q
));this.Jg.H(BtG);this.IT.H(BtH);this.AkG(1);this.N.CE=[this,this.Ew];this.N.C1(
A.aaL(A.ach.E2));},_ReInit:function(){C.Ra._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$q));},_className:"Application::SetSaveNaisIdScreen"};C.AN7={LO:function(
G){C.AqI.LO.call(this,G);A.pe([this,this.BCd],this);},BCd:function(G){this.JH(this.
Ef);},_Init:function(aArg){C.AqI._Init.call(this,aArg);this.__proto__=C.AN7;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UP={Animal:null,WhereAboutsToString:
null,Gl:function(aIndex){return this.WhereAboutsToString.BS(this.C6(aIndex));},Au:
function(E){C.Cm.Au.call(this,E);if(!!this.Animal)this.Animal.Nl(E);},A4R:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B_,this.Cb],0);},L0:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4R],[B=this.Animal,B.Awq,B.Nl],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4R],[B=this.Animal,B.Awq,B.Nl],0);A.pe([this,this.A4R],this);}
,_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UP;this.Ca.Set(0,1);this.
Ca.Set(1,2);this.Ca.Set(2,3);this.Ca.Set(3,4);this.Ca.Set(4,5);},_Done:function(
){this.__proto__=C.Cm;this.WhereAboutsToString._Done();C.Cm._Done.call(this);},_ReInit:
function(){C.Cm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UQ={Du:function(){return 6;},_Init:function(aArg){C.UP._Init.call(this,aArg);
this.__proto__=C.UQ;this.Ca.Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,2);this.Ca.Set(
3,3);this.Ca.Set(4,4);this.Ca.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcK={Du:function(){return 5;},_Init:function(aArg){C.UP._Init.call(this,aArg
);this.__proto__=C.AcK;this.Ca.Set(0,6);this.Ca.Set(1,7);this.Ca.Set(2,8);this.Ca.
Set(3,9);this.Ca.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdW={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.BcI],[B=A._GetAutoObject(A.Device.
Device),B.ASy,B.A0l],0);A.pe([this,this.BcI],this);},Du:function(){return 2;},C6:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BS(aIndex);},DZ:function(A7){return A7;},H3:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awt(E);},BcI:function(G){
this.Q=A._GetAutoObject(A.Device.Device).AgA;A.abo([this,this.B_,this.Cb],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdW;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGJ={FM:null
,EA:null,EartagNrAssignmentMode:null,Fm:null,Fa:null,HH:null,AW:null,Kn:null,Nc:
null,A_:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CT(A.jb.CJ);this.Background.L(A.
jb.CS);this.V.L(A.jb.Text);}else{this.AW.FO(A.jb.CS);this.HH.CT(A.jb.CS);this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hl){this.AW.FO(A.jb.CJ);this.HH.CT(
A.jb.CJ);}else{this.AW.FO(A.jb.CS);this.HH.CT(A.jb.CS);}this.Bb(null);}this.Nc.L(
this.V.AQ);},I0:function(G){C.Eg.I0.call(this,G);if(!this.A_)this.FV(this);else this.
He(this);},DJ:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(null);(F=this.
N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(
F[0])).C2(null);(F=this.N,F[1].call(F[0])).CU(A.jV);(F=this.N,F[1].call(F[0])).B$=
null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[0])));}},FV:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EN){var F;if(!this.A_&&!!this.N)
this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EN;if(this.A_<0)this.A_=0;else if(
this.A_>1)this.A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SP(2);else this.AW.SP(7);}break;default:throw new Error(
Atm+this.A_.toFixed());}this.DJ(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Oo:function(G){this.ABa(2);},MZ:function(G){this.ABa(7);},ABa:
function(GA){var B;var Azy=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!Azy){
var AAo=(A.Core.P.isPrototypeOf(B=this.QJ(Azy,GA,0x15))?B:null);if(!!AAo){this.Bb(
AAo);return true;}}return false;},Af3:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nc.Ax(
A._GetAutoObject(A.Device.Converter).AmV(2));break;case 1:this.Nc.Ax(A._GetAutoObject(
A.Device.Converter).AmV((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
BaO+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4p],this);},A4p:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kn.Ae1(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Ant,B.Aoz]);this.Kn.
Ae1([B=A._GetAutoObject(A.Device.Device),B.AEF,B.AIT]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awh
,B.AyN]);this.Kn.Ae1([B=A._GetAutoObject(A.Device.Device),B.ASD,B.A0m]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyO]);this.Kn.Ae1([B=
A._GetAutoObject(A.Device.Device),B.ASE,B.A0n]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Ant,B.Aoz]);this.Kn.Ae1([B=A._GetAutoObject(A.Device.Device),
B.AEF,B.AIT]);}break;default:throw new Error(BtI+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(BaO+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Un:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.Af3],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af3],this.EA,0);if(!!
E)A.pe([this,this.Af3],this);},Akx:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af3],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af3],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af3],this);},Ui:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BK._Init.call(this.Fm={I:this},0);A.Core.
BK._Init.call(this.Fa={I:this},0);C.Arb._Init.call(this.HH={I:this},0);C.AvT._Init.
call(this.AW={I:this},0);C.Au7._Init.call(this.Kn={I:this},0);A.acg.Ap._Init.call(
this.Nc={I:this},0);this.__proto__=C.AGJ;var B;this.H(UY);this.V.Ar(false);this.
V.R(Atc);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fa.Filter=7;this.HH.H(BtJ);this.
AW.H(BtK);this.Nc.H(BtL);this.J(this.HH,0);this.J(this.AW,0);this.J(this.Nc,0);this.
FM=A._NewObject(C.Aeu,0);this.Fm.BL=[this,this.Oo];this.Fa.BL=[this,this.MZ];this.
HH.CK(this.Kn);this.HH.Au([B=this.Kn,B.B_,B.Cb]);this.AW.Au([this,this.Ui,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fa.
_Done();this.HH._Done();this.AW._Done();this.Kn._Done();this.Nc._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fm._ReInit();this.Fa.
_ReInit();this.HH._ReInit();this.AW._ReInit();this.Kn._ReInit();this.Nc._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ANX={Wp:
null,Zb:null,AbQ:null,Ua:null,Init:function(aArg){this.Bb(this.Wp);},AEx:function(
G){var Ben=(C.Anj.isPrototypeOf(G)?G:null);if(!!Ben)A._GetAutoObject(A.Device.Device
).A3(Ben.AdE,true,A.jV,0,null);},DE:function(G){if((this.Cq.CO===7)&&(this.AV===
this.Ua))A._GetAutoObject(A.Device.Device).A3(10,true,A.jV,0,null);else if((this.
Cq.CO===6)&&(this.AV===this.Ua))A._GetAutoObject(C.A8).Cd(91);C.Ej.DE.call(this,
G);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Anj._Init.call(this.Wp={I:
this},0);C.Anj._Init.call(this.Zb={I:this},0);C.Anj._Init.call(this.AbQ={I:this}
,0);C.Anj._Init.call(this.Ua={I:this},0);this.__proto__=C.ANX;this.Dr(C.AO9);this.
Wp.H(IV);this.Wp.Aj(true);this.Wp.T(A.aaR(A.acf.AhL));this.Wp.Bi(false);this.Wp.
AdE=79;this.Zb.H(Qd);this.Zb.Aj(true);this.Zb.T(A.aaR(A.acf.A$I));this.Zb.Bi(true
);this.Zb.AdE=77;this.AbQ.H(Aad);this.AbQ.Aj(true);this.AbQ.T(A.acf.BjC);this.AbQ.
Bi(false);this.AbQ.AdE=78;this.Ua.H(Alh);this.Ua.Aj(true);this.Ua.T(A.aaR(A.acf.
About));this.Ua.Bi(true);this.Ua.AdE=3;this.J(this.Wp,-1);this.J(this.Zb,-1);this.
J(this.AbQ,-1);this.J(this.Ua,-1);this.Wp.AR=[this,this.AEx];this.Zb.AR=[this,this.
AEx];this.AbQ.AR=[this,this.AEx];this.Ua.AR=[this,this.AEx];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wp._Done();this.Zb._Done();this.AbQ._Done();
this.Ua._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.Wp._ReInit();this.Zb._ReInit();this.AbQ._ReInit();this.Ua._ReInit();this.
Wp.T(A.aaR(A.acf.AhL));this.Zb.T(A.aaR(A.acf.A$I));this.Ua.T(A.aaR(A.acf.About));
},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.Wp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceInfoScreen"};C.AO9={_Init:function(aArg){C.KP._Init.call(this
,aArg);this.__proto__=C.AO9;this.Text.R(A.acf.Info);},_className:"Application::HeaderDeviceInfoMenu"
};C.ANV={FactoryResetScope:null,Ud:null,Wn:null,Uf:null,Init:function(aArg){this.
Bb(this.Ud);A.pe([this,this.ML],this);},BkL:function(G){switch(this.FactoryResetScope.
C6(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).A3(33,true
,A.jV,0,[this,this.A3_]);break;case 0:A._GetAutoObject(A.Device.Device).A3(7,true
,A.jV,0,[this,this.A3_]);break;case 2:A._GetAutoObject(A.Device.Device).A3(115,true
,A.jV,0,[this,this.A3_]);break;default:A.ab5("%s%i",BtM,this.FactoryResetScope.Q
);}},A3_:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.Device.Device).
BoT();A._GetAutoObject(A.Device.Device).A3(8,true,A.jV,0,null);A._GetAutoObject(
C.A8).Cd(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).BoS();A._GetAutoObject(
A.Device.Device).ArS(0);A._GetAutoObject(A.Device.Device).ArT(0);A._GetAutoObject(
A.Device.Device).ArU(0);A._GetAutoObject(A.Device.Device).ArY(0);A._GetAutoObject(
A.Device.Device).ArZ(0);A._GetAutoObject(A.Device.Device).Ar0(0);A._GetAutoObject(
A.Device.Device).Ul(5);A._GetAutoObject(A.Device.Device).AwF(0);A._GetAutoObject(
A.Device.Device).AwG(0);A._GetAutoObject(A.Device.Device).AwH(0);A._GetAutoObject(
A.Device.Device).AwZ(1);A._GetAutoObject(A.Device.Device).Aw0(1);A._GetAutoObject(
A.Device.Device).Aw1(1);A._GetAutoObject(A.Device.Device).A3(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).BoR();A._GetAutoObject(A.Device.
Device).A3(116,true,A.jV,0,null);A._GetAutoObject(C.A8).Cd(37);}break;default:A.
ab5("%s%e",AIk,As.Id);}},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Nh._Init.call(this.Ud={I:this},0
);C.Nh._Init.call(this.Wn={I:this},0);C.BW._Init.call(this.Uf={I:this},0);this.__proto__=
C.ANV;var B;this.Dr(C.AO7);this.Ud.H(IV);this.Ud.Aj(true);this.Ud.T(A.aaR(A.acf.
ACw));this.Ud.Bi(false);this.Ud.Nk(93);this.Wn.H(Qd);this.Wn.Aj(true);this.Wn.T(
A.aaR(A.acf.AdV));this.Wn.Bi(true);this.Wn.Nk(92);this.Uf.H(BaP);this.Uf.Aj(true
);this.Uf.Bl9(true);this.Uf.T(A.aaR(A.acf.A6z));this.Uf.Bi(false);this.J(this.Ud
,-1);this.J(this.Wn,-1);this.J(this.Uf,-1);this.Ud.AR=[B=this.Ud,B.Nn];this.Wn.AR=[
B=this.Wn,B.Nn];this.Uf.AR=[this,this.BkL];this.Uf.Au([B=this.FactoryResetScope,
B.B_,B.Cb]);this.Uf.CK(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.FactoryResetScope._Done();this.Ud._Done();this.Wn._Done(
);this.Uf._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Ud._ReInit();this.Wn._ReInit();this.Uf._ReInit(
);this.Ud.T(A.aaR(A.acf.ACw));this.Wn.T(A.aaR(A.acf.AdV));this.Uf.T(A.aaR(A.acf.
A6z));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ud)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uf)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.AO7={_Init:function(
aArg){C.KP._Init.call(this,aArg);this.__proto__=C.AO7;this.Text.R(A.aaR(A.acf.ACx
));},_ReInit:function(){C.KP._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACx));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq1={QV:null,Wd:null
,_Init:function(aArg){C.TX._Init.call(this,aArg);C.CH._Init.call(this.QV={I:this
},0);C.CH._Init.call(this.Wd={I:this},0);this.__proto__=C.Aq1;this.QV.H(BtN);this.
QV.R(A.aaR(A.acf.A$A));this.QV.A6(0x12);this.QV.L(A.jb.Text);this.Wd.H(BaJ);this.
Wd.R(A.aaR(A.acf.An7));this.Wd.L(A.jb.Text);this.J(this.QV,0);this.J(this.Wd,0);
this.QV.S(A.aaL(A.fl.Af));this.QV.A2(A.aaL(A.fl.Ak));this.QV.Cu(A.aaL(A.fl.Bh));
this.Wd.S(A.aaL(A.fl.Af));this.Wd.A2(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.TX;this.QV._Done();this.Wd._Done();C.TX._Done.call(this);},_ReInit:function(){
C.TX._ReInit.call(this);this.QV._ReInit();this.Wd._ReInit();this.QV.R(A.aaR(A.acf.
A$A));this.Wd.R(A.aaR(A.acf.An7));this.QV.S(A.aaL(A.fl.Af));this.QV.A2(A.aaL(A.fl.
Ak));this.QV.Cu(A.aaL(A.fl.Bh));this.Wd.S(A.aaL(A.fl.Af));this.Wd.A2(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.TX._Mark.call(this,D);if((B=this.QV)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APD={QW:null,_Init:function(aArg){C.TX._Init.call(this,aArg);C.CH._Init.call(
this.QW={I:this},0);this.__proto__=C.APD;this.QW.H(BtO);this.QW.R(A.aaR(A.acf.Uh
));this.QW.A6(0x12);this.QW.L(A.jb.Text);this.J(this.QW,0);this.QW.S(A.aaL(A.fl.
Af));this.QW.A2(A.aaL(A.fl.Ak));this.QW.Cu(A.aaL(A.fl.Bh));},_Done:function(){this.
__proto__=C.TX;this.QW._Done();C.TX._Done.call(this);},_ReInit:function(){C.TX._ReInit.
call(this);this.QW._ReInit();this.QW.R(A.aaR(A.acf.Uh));this.QW.S(A.aaL(A.fl.Af)
);this.QW.A2(A.aaL(A.fl.Ak));this.QW.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;
C.TX._Mark.call(this,D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.Aqu={IL:null,AbA:null,Ea:null
,Bl:function(aSize){C.M6.Bl.call(this,aSize);this.IL.H([this.Gz.M[2],0,this.Gz.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([this.IL.M[2]-1,0,this.IL.M[2]+1
,aSize[1]]);this.AbA.H([this.IL.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.M6.
Ai.call(this,Ae);this.AbA.L(this.Gz.AQ);this.IL.L(this.Gz.AQ);},Ch:function(Ad){
C.M6.Ch.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Ib=this.AX.
AmW(Ad,14);var AtW=this.AX.AOQ(Ad,7);this.IL.Ax(A._GetAutoObject(A.Device.Converter
).AmV(AtW));this.AbA.Ax(A._GetAutoObject(A.Device.Converter).A5i(Ib));this.Am();
}},_Init:function(aArg){C.M6._Init.call(this,aArg);A.acg.Ap._Init.call(this.IL={
I:this},0);A.acg.Ap._Init.call(this.AbA={I:this},0);A.acg.AL._Init.call(this.Ea={
I:this},0);this.__proto__=C.Aqu;this.IL.H(BaL);this.IL.L(A.jb.Text);this.AbA.H(BtP
);this.AbA.L(A.jb.Text);this.Ea.H(BtQ);this.Ea.L(A.jb.Bc);this.J(this.IL,0);this.
J(this.AbA,0);this.J(this.Ea,0);this.IL.Ax(A.aaL(A.aci.TN));this.AbA.Ax(A.aaL(A.
aci.TN));},_Done:function(){this.__proto__=C.M6;this.IL._Done();this.AbA._Done();
this.Ea._Done();C.M6._Done.call(this);},_ReInit:function(){C.M6._ReInit.call(this
);this.IL._ReInit();this.AbA._ReInit();this.Ea._ReInit();},_Mark:function(D){var
B;C.M6._Mark.call(this,D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANb={ZO:null,Bl:
function(aSize){C.M6.Bl.call(this,aSize);this.ZO.H([this.Gz.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M6.Ai.call(this,Ae);this.ZO.L(this.Gz.AQ);},Ch:function(
Ad){C.M6.Ch.call(this,Ad);if(!this.AX)return;this.Hs=Ad;if(!!this.AX){var Ke=this.
AX.KO(Ad,26);if(Ke>0)this.ZO.R(A.ab2(Ke.toFixed(),5));else this.ZO.R(Rp);this.Am(
);}},_Init:function(aArg){C.M6._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZO={I:this},0);this.__proto__=C.ANb;this.ZO.H(BtR);this.J(this.ZO,0);this.ZO.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.M6;this.ZO._Done();C.M6._Done.
call(this);},_ReInit:function(){C.M6._ReInit.call(this);this.ZO._ReInit();this.ZO.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.M6._Mark.call(this,D);if((B=this.ZO
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.AR3={Ap:null,Ai:function(Ae){C.AeV.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeV._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.AR3;this.Text.H(BtS);this.Ap.H(A0e);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afe));},_Done:function(){this.__proto__=C.AeV;this.Ap._Done(
);C.AeV._Done.call(this);},_ReInit:function(){C.AeV._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeV._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Ys={Text:
null,De:null,AP:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Ns],[B=A._GetAutoObject(A.Device.Device),B.AEB,B.AIQ],0);A.zV([this,this.Ns
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Ns],this);},Df:function(
E){C.BQ.Df.call(this,E);this.De.L(E);this.Text.L(E);this.Gw.L(E);this.D2.Zr(E);}
,WC:function(E){C.BQ.WC.call(this,E);this.D2.CT(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B9().toFixed());},Ns:function(s){this.DX(s);}
,_Init:function(aArg){C.BQ._Init.call(this,aArg);C.CH._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.De={I:this},0);A.acg.C7._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C7._Init.call(this.A$={I:this},0);this.__proto__=C.Ys;this.Text.H(BtT);this.
Text.A6(0x11);this.De.H(AyD);this.AP.DC(BaF);this.AP.DM(BaG);this.AP.L(A.jb.Bc);
this.Gw.H(BtU);this.Gw.L(A.jb.CS);this.D2.AZ(0x14);this.D2.H(BtV);this.D2.Zr(A.jb.
Bm);this.D2.CT(A.jb.Ri);this.D2.Hn(2);this.A$.DC(BtW);this.A$.DM(BtX);this.A$.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.De,0);this.J(this.AP,0);this.J(this.Gw,
0);this.J(this.D2,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A2(
A.aaL(A.fl.Ak));this.De.Ax(A.aaL(A.ach.AjW));this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Text.
_Done();this.De._Done();this.AP._Done();this.Gw._Done();this.D2._Done();this.A$.
_Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.
Text._ReInit();this.De._ReInit();this.AP._ReInit();this.Gw._ReInit();this.D2._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A2(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Aco={FM:null
,JX:null,JW:null,AkN:null,AkO:null,Q8:null,QH:null,Abz:null,V3:null,PM:null,PN:null
,Sy:null,Gx:null,Gy:null,Jw:null,AlO:0,AlT:0,D7:0,DW:0,A_:0,Bl:function(aSize){var
B;this.Dz.H([this.Hx.M[2]-10,this.Hx.M[1],this.H4.M[0]+10,this.Hx.M[3]]);this.Dz.
AFo((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.Dz.Gt,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A_===1)||(this.A_===2)){var A1r=this.A2p(this.A_);if(!!
A1r){this.Abz.Z(true);this.Abz.H(A1r.M);this.Abz.L(this.V.AQ);this.V3.Z(true);this.
V3.H(A1r.M);}else{this.Abz.Z(false);this.V3.Z(false);}this.Hx.Z(false);this.H4.Z(
false);}else{this.Abz.Z(false);this.V3.Z(false);this.Hx.Z(Fw||GE);this.H4.Z(Fw||
GE);}},Qu:function(G){if(!!this.Q){if(this.FI===1)A.pe([this,this.Vb],this);else
if(this.FI===4)A.pe([this,this.A0K],this);else if(this.FI===5)A.pe([this,this.A0I
],this);}C.BW.Qu.call(this,G);},Kd:function(G){switch(this.A_){case 0:C.BW.Kd.call(
this,G);break;case 2:break;default:this.Ady(this);}},J_:function(G){switch(this.
A_){case 0:C.BW.J_.call(this,G);break;default:this.Ais(this);}},A1W:function(G){
var F;if(this.A_===1){var BO=this.D7;this.D7=this.D7-10;if(this.D7<this.AlT)this.
D7=this.AlT;if(this.D7<A._GetAutoObject(A.Device.Device).AcF)this.D7=A._GetAutoObject(
A.Device.Device).AcF;if(this.DW!==BO){if(!!this.JX)(F=this.JX,F[2].call(F[0],this.
D7));A.abo(this.JX,0);}}if(this.A_===2){var BO=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BO){if(!!this.JW)(F=this.JW,F[2].call(F[
0],this.DW));A.abo(this.JW,0);}}this.DJ(this);this.Am();},A0I:function(s){this.A1W(
s);},Al4:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A0I],this
);this.Bo.Ar(false);}this.Bo.Ar(true);},A2w:function(G){var F;if(this.A_===1){var
BO=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BO
){if(!!this.JX)(F=this.JX,F[2].call(F[0],this.D7));A.abo(this.JX,0);}}if(this.A_===
2){var BO=this.DW;this.DW=this.DW+10;if(this.DW>this.AlO)this.DW=this.AlO;if(this.
DW!==BO){if(!!this.JW)(F=this.JW,F[2].call(F[0],this.DW));A.abo(this.JW,0);}}this.
DJ(this);this.Am();},A0K:function(s){this.A2w(s);},Al5:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A0K],this);this.Bo.Ar(false);}this.Bo.Ar(true
);return;},Vb:function(G){this.Ex(this.A_+1);},Ady:function(G){this.FI=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Vb],this);this.Bo.Ar(false);}this.Bo.Ar(true);}
,GH:function(G){},AfH:function(s){this.GH(s);},DJ:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hy(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Cw(null);(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AeB));(F=this.N,F[1].call(
F[0])).CU(A.jV);(F=this.N,F[1].call(F[0])).B$=[this,this.Vb];}break;case 2:{(F=this.
N,F[1].call(F[0])).C1(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hy(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Cw(A.aaL(A.ach.Am2
));(F=this.N,F[1].call(F[0])).Fc(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
Ais];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).CU(A.jV);(F=
this.N,F[1].call(F[0])).B$=null;}break;default:this.FM.AkR((F=this.N,F[1].call(F[
0])));}},A_s:function(E){if(A.aaZ(this.JX,E))return;if(!!this.JX)A.z$([this,this.
A3W],this.JX,0);this.JX=E;if(!!this.JX)A.zX([this,this.A3W],this.JX,0);A.pe([this
,this.A3W],this);},A3W:function(G){var F;this.D7=(F=this.JX,F[1].call(F[0]));this.
Am();},A_r:function(E){if(A.aaZ(this.JW,E))return;if(!!this.JW)A.z$([this,this.A3V
],this.JW,0);this.JW=E;if(!!this.JW)A.zX([this,this.A3V],this.JW,0);A.pe([this,this.
A3V],this);},A3V:function(G){var F;this.DW=(F=this.JW,F[1].call(F[0]));this.Am();
},FV:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EN){var F;
if(!this.A_)this.FM.AjB((F=this.N,F[1].call(F[0])));this.A_=EN;if((this.A_<0)||(
this.A_>2))this.A_=0;this.DJ(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=!!this.A_;this.
Am();},Ais:function(G){if(this.A_>1)this.Ex(this.A_-1);},A39:function(G){},AyW:function(
s){this.A39(s);},A3I:function(G){},BbU:function(s){this.A3I(s);},A2p:function(Atv
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkN={I:this},0);A.acg.AL._Init.call(this.AkO={I:this},0);A.acg.AL._Init.call(
this.Q8={I:this},0);A.acg.Ap._Init.call(this.QH={I:this},0);A.acg.AL._Init.call(
this.Abz={I:this},0);A.acg.BU._Init.call(this.V3={I:this},0);A.acg.Text._Init.call(
this.PM={I:this},0);A.acg.Text._Init.call(this.PN={I:this},0);A.acg.Text._Init.call(
this.Sy={I:this},0);A.Core.BK._Init.call(this.Gx={I:this},0);A.Core.BK._Init.call(
this.Gy={I:this},0);A.Core.BK._Init.call(this.Jw={I:this},0);this.__proto__=C.Aco;
this.H(AfE);this.T(A.aaR(A.acf.Arp));this.Background.H(AfE);this.V.H(BD);this.V.
R(A.aaR(A.acf.AG3));this.V.A6(0x12);this.AkN.H(BtY);this.AkN.L(A.jb.Gj);this.AkO.
H(BtZ);this.AkO.L(A.jb.H8);this.Q8.H(Bt0);this.Q8.L(A.jb.E1);this.QH.H(Bt1);this.
Abz.H(Bt2);this.V3.H(Bt3);this.V3.Nm(3);this.V3.L(A.jb.AV);this.V3.Z(false);this.
PM.H(Bt4);this.PM.Hn(8);this.PM.I$(true);this.PM.A6(0x11);this.PM.L(0xFF000000);
this.PN.H(Bt5);this.PN.Hn(8);this.PN.I$(true);this.PN.A6(0x11);this.PN.L(0xFF000000
);this.Sy.H(Bt6);this.Sy.I$(false);this.Sy.A6(0x12);this.Sy.L(0xFF000000);this.Gx.
Filter=5;this.Gx.Bw=false;this.Gy.Filter=4;this.Gy.Bw=false;this.Jw.Filter=1;this.
JZ(this.V,-1);this.JZ(this.Dz,-2);this.J(this.AkN,-1);this.J(this.AkO,-1);this.J(
this.Q8,-1);this.J(this.QH,-1);this.J(this.Abz,-1);this.J(this.V3,-1);this.J(this.
PM,-1);this.J(this.PN,0);this.J(this.Sy,0);this.QH.Ax(A.aaL(A.ach.ADC));this.PM.
S(A.aaL(A.fl.Af));this.PN.S(A.aaL(A.fl.Af));this.Sy.S(A.aaL(A.fl.Ak));this.Gx.BL=[
this,this.Al4];this.Gx.D1=[this,this.A0I];this.Gy.BL=[this,this.Al5];this.Gy.D1=[
this,this.A0K];this.Jw.BL=[this,this.Ady];this.FM=A._NewObject(C.Aeu,0);},_Done:
function(){this.__proto__=C.BW;this.AkN._Done();this.AkO._Done();this.Q8._Done();
this.QH._Done();this.Abz._Done();this.V3._Done();this.PM._Done();this.PN._Done();
this.Sy._Done();this.Gx._Done();this.Gy._Done();this.Jw._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.AkN._ReInit();this.AkO._ReInit(
);this.Q8._ReInit();this.QH._ReInit();this.Abz._ReInit();this.V3._ReInit();this.
PM._ReInit();this.PN._ReInit();this.Sy._ReInit();this.Gx._ReInit();this.Gy._ReInit(
);this.Jw._ReInit();this.T(A.aaR(A.acf.Arp));this.V.R(A.aaR(A.acf.AG3));this.PM.
S(A.aaL(A.fl.Af));this.PN.S(A.aaL(A.fl.Af));this.Sy.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.FM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JW)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FK={XV:null,Acq:
null,An$:0,Aoa:0,Du:function(){if(!this.XV)return 0;return this.XV.MF;},C6:function(
aIndex){if(!this.XV||(aIndex>=this.XV.MF))return-1;return this.XV.Get(aIndex);},
Gl:function(aIndex){return this.A6R().BS(this.C6(aIndex));},DZ:function(A7){if(!
this.XV)return-1;return this.XV.Avv(A7);},H3:function(){if(!this.XV)return-1;return this.
XV.H3();},AnJ:function(E){if(this.An$===E)return;this.An$=E;A.pe([this,this.AVM]
,this);},A0D:function(Aq){this.AnJ(Aq);},AnK:function(E){if(this.Aoa===E)return;
this.Aoa=E;A.pe([this,this.AVN],this);},A0E:function(Aq){this.AnK(Aq);},AVN:function(
G){A.abo([this,this.AS3,this.A0E],0);},AVM:function(G){A.abo([this,this.AS2,this.
A0D],0);},A6R:function(){return this.Acq;},AS2:function(){return this.An$;},AS3:
function(){return this.Aoa;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acq={I:this},0);this.__proto__=C.FK;},_Done:function(
){this.__proto__=C.AC;this.Acq._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acq._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acq)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMG={Init:
function(aArg){A.zV([this,this.Bfp],A._GetAutoObject(A.Device.Helper).UG,0);A.zV([
this,this.Bfn],A._GetAutoObject(A.Device.Helper).UF,0);this.Bfp(this);this.Bfn(this
);},Au:function(E){C.FK.Au.call(this,E);this.AnK(A._GetAutoObject(A.Device.Helper
).UG.Get(this.DZ(E)));this.AnJ(A._GetAutoObject(A.Device.Helper).UF.Get(this.DZ(
E)));},AnJ:function(E){if(this.An$===E)return;C.FK.AnJ.call(this,E);A._GetAutoObject(
A.Device.Helper).UF.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UF.
Ci();},AnK:function(E){if(this.Aoa===E)return;C.FK.AnK.call(this,E);A._GetAutoObject(
A.Device.Helper).UG.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UG.
Ci();},Bfp:function(G){this.Aoa=A._GetAutoObject(A.Device.Helper).UG.Get(this.DZ(
this.Q));A.pe([this,this.AVN],this);},Bfn:function(G){this.An$=A._GetAutoObject(
A.Device.Helper).UF.Get(this.DZ(this.Q));A.pe([this,this.AVM],this);},_Init:function(
aArg){C.FK._Init.call(this,aArg);this.__proto__=C.AMG;this.XV=A._GetAutoObject(A.
Device.Helper).Ad1;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMH={AgF:null,AB0:0,ABZ:0,Init:function(aArg){A.zV([this,this.BfC],A._GetAutoObject(
A.Device.Helper).Afy,0);A.zV([this,this.BfA],A._GetAutoObject(A.Device.Helper).Afx
,0);A.zV([this,this.Bfy],A._GetAutoObject(A.Device.Helper).Afw,0);A.zV([this,this.
BfE],A._GetAutoObject(A.Device.Helper).Afz,0);this.BfC(this);this.BfA(this);this.
Bfy(this);this.BfE(this);},Au:function(E){C.FK.Au.call(this,E);this.AnK(A._GetAutoObject(
A.Device.Helper).Afy.Get(this.DZ(E)));this.AnJ(A._GetAutoObject(A.Device.Helper).
Afx.Get(this.DZ(E)));this.AS8(A._GetAutoObject(A.Device.Helper).Afw.Get(this.DZ(
E)));this.AS_(A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(E)));},AnJ:function(
E){if(this.An$===E)return;C.FK.AnJ.call(this,E);A._GetAutoObject(A.Device.Helper
).Afx.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afx.Ci();},AnK:function(
E){if(this.Aoa===E)return;C.FK.AnK.call(this,E);A._GetAutoObject(A.Device.Helper
).Afy.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afy.Ci();},A6R:function(
){return this.AgF;},BfC:function(G){this.Aoa=A._GetAutoObject(A.Device.Helper).Afy.
Get(this.DZ(this.Q));A.pe([this,this.AVN],this);},BfA:function(G){this.An$=A._GetAutoObject(
A.Device.Helper).Afx.Get(this.DZ(this.Q));A.pe([this,this.AVM],this);},AS_:function(
E){if(this.AB0===E)return;this.AB0=E;A._GetAutoObject(A.Device.Helper).Afz.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afz.Ci();A.pe([this,this.A$9],this
);},AS8:function(E){if(this.ABZ===E)return;this.ABZ=E;A._GetAutoObject(A.Device.
Helper).Afw.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afw.Ci();A.
pe([this,this.A$8],this);},A$8:function(G){A.abo([this,this.A8D,this.AS8],0);},A$9:
function(G){A.abo([this,this.A8F,this.AS_],0);},Bfy:function(G){this.ABZ=A._GetAutoObject(
A.Device.Helper).Afw.Get(this.DZ(this.Q));A.pe([this,this.A$8],this);},BfE:function(
G){this.AB0=A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(this.Q));A.pe([this
,this.A$9],this);},A8F:function(){return this.AB0;},A8D:function(){return this.ABZ;
},_Init:function(aArg){C.FK._Init.call(this,aArg);A.Device.AgF._Init.call(this.AgF={
I:this},0);this.__proto__=C.AMH;this.XV=A._GetAutoObject(A.Device.Helper).AgG;this.
Init(aArg);},_Done:function(){this.__proto__=C.FK;this.AgF._Done();C.FK._Done.call(
this);},_ReInit:function(){C.FK._ReInit.call(this);this.AgF._ReInit();},_Mark:function(
D){var B;C.FK._Mark.call(this,D);if((B=this.AgF)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMn={RO:null,Init:function(
aArg){var B;A.zX([this,this.AiP],[B=this.AnimalType,B.B_,B.Cb],0);A.pe([this,this.
AiP],this);this.Bb(this.RO);},Bk:function(E){C.I4.Bk.call(this,E);this.RO.Bx(this.
Jr.AM);},AiP:function(G){A._GetAutoObject(A.Device.Device).AwI(this.AnimalType.Q
);},_Init:function(aArg){C.I4._Init.call(this,aArg);C.TH._Init.call(this.RO={I:this
},0);this.__proto__=C.AMn;var B;this.Jr.Ar(false);this.Jr.Aj(false);this.Jr.Z(false
);this.RO.H(AIM);this.RO.Aj(true);this.RO.Ni(14);this.RO.Ahx(0);this.RO.OP(0);this.
J(this.RO,-4);this.RO.AR=[this,this.AAw];this.RO.Au([B=this.AnimalType,B.B_,B.Cb
]);this.RO.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I4;this.RO._Done();C.I4._Done.call(this);},_ReInit:function(){C.I4._ReInit.call(
this);this.RO._ReInit();},_Mark:function(D){var B;C.I4._Mark.call(this,D);if((B=
this.RO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TH={Filter:null,Er:0,TableId:0,Operator:1,CP:function(){var F;this.Ts((F=this.
Filter,F[1].call(F[0])).DL(this.Er,this.Operator));},Bl:function(aSize){var B;C.
BW.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hx.H(AhY
);this.H4.H([aSize[0]-40,40,aSize[0],80]);this.Dz.H([this.Hx.M[2]-5,this.Hx.M[1]
,this.H4.M[0]+5,this.Hx.M[3]]);this.Dz.AFo((B=this.Dz.M)[2]-B[0]);this.Dz.HI(this.
Dz.Gt,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Md],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Md
],E,0);A.pe([this,this.Md],this);},Md:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Ts((F=this.Filter,F[1].call(F[0])).DL(this.Er,this.
Operator));else this.Ts(null);},Ahx:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Md],this);},Ni:function(E){if(this.Er===E)return;this.
Er=E;A.pe([this,this.Md],this);},Ts:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).AmX(this.TableId,this.Er));this.Am();},OP:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Md],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.TH;this.H(KZ);this.V.A6(0x11);this.V.Cu(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BW._ReInit.call(this);this.V.Cu(A.aaL(A.fl.Bh));this.
CP();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ASa={Ge:null,MT:null,DY:null,Y:null,Ef:null,Cn:null,CG:null,Da:null,Gn:null,
Ee:null,C_:null,BZ:null,Ay:null,Breed:null,Jh:null,AnimalType:null,Gender:null,Pp:
null,KY:null,Jf:null,YH:null,Amk:null,KJ:0,M7:0,A4g:false,Init:function(aArg){var
B;A.zX([this,this.BA7],[B=A._GetAutoObject(A.Device.Device),B.AEG,B.AIU],0);A.zV([
this,this.At8],this.MT,0);A.zX([this,this.At8],[B=A._GetAutoObject(A.Device.Device
),B.Awp,B.AyS],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEG
,B.AIU],0);A.zV([this,this.GH],this.MT,0);A.zX([this,this.AiP],this.BZ.Q,0);A.pe([
this,this.AiP],this);A.pe([this,this.Be2],this);A.pe([this,this.At8],this);A.pe([
this,this.GH],this);A.pe([this,this.A3J],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.ALt],this);A.pe([this,this.DJ],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.ArL(A.jb.E1);else
this.Ef.ArL(A.jb.Gj);if(A._GetAutoObject(A.Device.Device).AeP){if(!!(F=this.Cn.Dl
,F[1].call(F[0])))this.Cn.ArL(A.jb.E1);else this.Cn.ArL(A.jb.Gj);}else this.Cn.ArL(
A.jb.Ri);A.pe([this,this.DJ],this);},DE:function(G){var B;C.AB.DE.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},LO:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lh())A._GetAutoObject(A.Device.Device
).A3(41,true,A._GetAutoObject(A.Device.Device).An.HJ().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gr();A._GetAutoObject(A.Device.Helper).Aqi(A._GetAutoObject(A.
Device.Helper).W);this.ApB();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFv(0);},E4:function(G){C.AB.E4.call(this,G);this.Jf.Ar(false);
A._GetAutoObject(A.Device.Device).Us(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.E5();A._GetAutoObject(C.A8).FB();},Fk:function(G){var B;this.Ay.
My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.
Y.Br[1]);},At8:function(G){var F,Cs;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.ALt(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aem(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).A3(21,true,A._GetAutoObject(A.Device.Converter
).Rj((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A3y]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A3x],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeP)this.JH(this.Cn);}var Beg=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeP||!!(Cs=this.Cn.Dl,Cs[1].call(Cs[0])));if(this.MT.AOL()>0){if((
this.AV===this.Cn)&&Beg)this.Bb(this.Y.TP(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeP&&(this.AV===this.Cn))&&!!(F=this.Cn.Dl,F[1].call(F[0])))this.
JH(this.Ef);if(Beg)this.Bc5(this);},Adw:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},Ai1:function(){var F;this.Ge.Ci(A._GetAutoObject(A.Device.Device).An);
if(this.MT.NY(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lh())A._GetAutoObject(
A.Device.Device).A3(50,true,A._GetAutoObject(A.Device.Device).Bt.HJ().toFixed(),
0,null);else{var L9=A._GetAutoObject(A.Device.Device).An.LT(0,this.Ge.Id);A._GetAutoObject(
A.Device.Device).SQ(L9);var B1=A._NewObject(A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(
this.Ge.Id);B1.OnSetBodyWeight(this.KJ);B1.OnSetTimestamp(this.Ge.DateOfBirth);B1.
Ci(A._GetAutoObject(A.Device.Device).Bt);}}if(this.MT.NY(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lh())A._GetAutoObject(A.Device.Device).A3(50,true,A._GetAutoObject(
A.Device.Device).Bt.HJ().toFixed(),0,null);else{var L9=A._GetAutoObject(A.Device.
Device).An.LT(0,this.Ge.Id);A._GetAutoObject(A.Device.Device).SQ(L9);var B1=A._NewObject(
A.Device.Rating,0);B1.Gr();B1.OnSetAnimalId(this.Ge.Id);B1.OnSetBodyWeight(this.
M7);B1.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B1.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WE(65280);this.Jf.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AFv(F.Av0+1));this.A4g=true;A.pe([this,
this.ALt],this);this.ApB();},GH:function(G){this.Cn.ATI(A._GetAutoObject(A.Device.
Device).AeP);A._GetAutoObject(A.Device.Helper).J0(this.BZ,this.MT.NY(14));A._GetAutoObject(
A.Device.Helper).J0(this.C_,this.MT.NY(23));A._GetAutoObject(A.Device.Helper).J0(
this.CG,this.MT.NY(32));A._GetAutoObject(A.Device.Helper).J0(this.Ee,this.MT.NY(
18));A._GetAutoObject(A.Device.Helper).J0(this.Da,this.MT.NY(7));A._GetAutoObject(
A.Device.Helper).J0(this.Gn,this.MT.NY(34));this.YH.Z(!this.MT.AOL());var O;var Aa=
null;var Aph=this.AV;for(O=0;O<this.MT.AfQ.M$();O++){Aa=this.BzY(this.MT.AfQ.OF(
O));if(!!Aa)this.ZD(Aa);}this.JH(Aph);A._GetAutoObject(A.Device.Helper).ANy(this.
Y);A.pe([this,this.A3J],this);this.Am();},AeY:function(E){if(this.KJ===E)return;
this.KJ=E;A.abo([this,this.Awb,this.AeY],0);},Ahs:function(E){if(this.M7===E)return;
this.M7=E;A.abo([this,this.Anr,this.Ahs],0);},Bc5:function(G){this.Ge.Gr();A._GetAutoObject(
A.Device.Helper).Aqi(this.Ge);this.Ge.Q6(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Ge.Nj(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Ge.SJ(A._GetAutoObject(
A.Device.Helper).AMo(0,this.Ge));this.Ge.Ae6(true);if(this.MT.NY(14))this.Ge.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MT.NY(32))this.Ge.N1(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MT.NY(7))this.Ge.JU(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MT.NY(34))this.Ge.Nl(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alt=A._GetAutoObject(A.Device.Helper).A1K(this.Ge,0,A._GetAutoObject(
A.Device.Device).An);if(!Alt)this.Ai1();else A._GetAutoObject(A.Device.Helper).AKm(
this.Ge,Alt,0,0,[this,this.ApH]);},ApB:function(){A._GetAutoObject(A.Device.Helper
).W.Nj(0);if(A._GetAutoObject(A.Device.Device).AeP)A._GetAutoObject(A.Device.Helper
).W.Q6(0);this.AeY(0);this.Ahs(0);this.JH(this.Ef);this.Am();},ApH:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.ApB();break;case 43:this.JH(this.Ef);break;case 41:break;
default:A.ab5("%s%e",Ata,As.Id);}},JH:function(Ag){this.Bb(Ag);this.Y.HI(Ag,true
,null,null);this.Y.Vy(null,null);},Be2:function(G){this.Ee.Ahv(A._GetAutoObject(
A.Device.Helper).W.AhW(1));this.At8(this);},AiP:function(G){this.C_.Ahv(A._GetAutoObject(
A.Device.Helper).Abp(this.AnimalType.Q));},A3J:function(G){var B;var BCb=this.Ay.
Background.Fq();var width=(BCb?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var Xu=this.Y.TP(null,0x401);while(!!Xu&&(((B=Xu)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.OX.isPrototypeOf(Xu)?Xu:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));Xu=this.Y.TP(Xu,0x1);}},BzY:function(Aag){var Aa=null;switch(Aag){case 14:Aa=
this.BZ;break;case 32:Aa=this.CG;break;case 23:Aa=this.C_;break;case 7:Aa=this.Da;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Gn;break;default:A.ab5("%s%e",Bt7
,Aag);}return Aa;},BA7:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeP
)A._GetAutoObject(A.Device.Helper).W.Q6(0);else if(!(F=this.Cn.Dl,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q6(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmJ(A._GetAutoObject(A.Device.Device).AdT));this.
At8(this);},ALt:function(G){var B;var AKp=A.jV;var Azd=A.jb.CJ;var Bdk=A.jb.AV;this.
Amk.AxL(this);if(this.A4g){this.A4g=false;AKp=A._GetAutoObject(A.Device.Helper).
MG(A.aaR(A.acf.BpQ),O8,A._GetAutoObject(A.Device.Converter).Rj(this.Ge.NaisId));
A.pe([B=this.Amk,B.StartTimer],this);Azd=A.jb.E1;Bdk=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKp=A.aaR(A.acf.Bo5);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKp=A.aaR(A.
acf.Bo4);this.YH.T(AKp);this.YH.Bmi(Azd);this.YH.Bmj(Bdk);},A3y:function(G){var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).AjC();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).AjC();else if(As.PopupState===7){A._GetAutoObject(C.A8).Cd(76);
A._GetAutoObject(A.Device.Device).AjC();}}}else A._GetAutoObject(A.Device.Device
).AjC();},A3x:function(G){A._GetAutoObject(A.Device.Device).AuW();},DJ:function(
G){var B;if(!this.MT.AOL()){this.N.Le.C3(255);if(this.AV===this.Ef){this.N.C2(A.
aaL(A.ach.Edit));this.N.B$=[B=this.Ef,B.FV];}else if(this.AV===this.Cn){this.N.C2(
A.aaL(A.ach.Edit));this.N.B$=[B=this.Cn,B.FV];}else{this.N.C2(null);this.N.B$=null;
}}else{this.N.C2(A.aaL(A.ach.Am3));if((this.Ef.Aqv===A.jb.Gj)||(this.Cn.Aqv===A.
jb.Gj)){this.N.Le.C3(100);this.N.B$=null;}else{this.N.Le.C3(255);this.N.B$=[this
,this.Bc5];}}},Awb:function(){return this.KJ;},Anr:function(){return this.M7;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0
);A.Core.Y._Init.call(this.Y={I:this},0);C.AUS._Init.call(this.Ef={I:this},0);C.
AUO._Init.call(this.Cn={I:this},0);C.AxA._Init.call(this.CG={I:this},0);C.BW._Init.
call(this.Da={I:this},0);C.AsA._Init.call(this.Gn={I:this},0);C.AkV._Init.call(this.
Ee={I:this},0);C.AkV._Init.call(this.C_={I:this},0);C.BW._Init.call(this.BZ={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UQ._Init.call(this.Jh={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.M5._Init.call(this.
Pp={I:this},0);A.Device.KY._Init.call(this.KY={I:this},0);A.Device.TI._Init.call(
this.Jf={I:this},0);C.AVn._Init.call(this.YH={I:this},0);A.Core.Timer._Init.call(
this.Amk={I:this},0);this.__proto__=C.ASa;var B;this.Background.L(A.jb.CS);this.
N.Z(true);this.Ek.Ar(false);this.Dr(C.APr);this.DY.AZ(0x3F);this.DY.H(Ff);this.DY.
L(A.jb.CJ);this.Y.H(Ff);this.Y.JT(9);this.Ef.H(AIM);this.Ef.Aj(true);this.Ef.T(A.
aaR(A.acf.ACH));this.Ef.ATI(true);this.Ef.AFO(false);this.Cn.H(BaP);this.Cn.Aj(true
);this.Cn.T(A.aaR(A.acf.Aeg));this.Cn.ATI(true);this.Cn.AFJ(true);this.CG.H(As$);
this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.Da.H(As$);this.Da.Aj(true);this.
Da.T(A.aaR(A.acf.Afo));this.Gn.H(BaQ);this.Gn.Aj(true);this.Gn.T(A.aaR(A.acf.Jh)
);this.Ee.H(Bt8);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.M7));this.Ee.Ga(1000);this.
Ee.EU(999000);this.Ee.Ahv(A._GetAutoObject(A.Device.Helper).Abp(this.AnimalType.
Q));this.C_.H(BaQ);this.C_.Aj(true);this.C_.T(A.aaR(A.acf.KJ));this.C_.Ga(1000);
this.C_.EU(99000);this.C_.Ahv(A._GetAutoObject(A.Device.Helper).Abp(this.AnimalType.
Q));this.BZ.H(As_);this.BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Aft));this.Ay.H(It);this.
Jf.B2=false;this.Jf.Cx=true;this.Jf.HN(1);this.Jf.Fr(1000);this.Jf.Uo(0);this.YH.
H(Aae);this.YH.Aj(true);this.YH.ArL(A.jb.Text);this.Amk.PV(3000);this.J(this.DY,
0);this.J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CG,0);this.J(
this.Da,0);this.J(this.Gn,0);this.J(this.Ee,0);this.J(this.C_,0);this.J(this.BZ,
0);this.J(this.Ay,0);this.J(this.YH,0);this.N.CE=[this,this.Ew];this.N.Cf=[this,
this.Adw];this.N.C1(A.aaL(A.ach.E2));this.N.Cw(A.aaL(A.ach.AeD));this.Y.Em=[this
,this.Fk];this.Ef.Gs([this,this.D_,this.GS]);this.Ef.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.Anu,B.Nj]);this.Ef.AFj([this,this.At8]);this.Ef.ATv([this,this.A3x]);
this.Ef.ATw([this,this.A3y]);this.Cn.Gs([this,this.D_,this.GS]);this.Cn.Ab6([B=A.
_GetAutoObject(A.Device.Helper).W,B.Awe,B.Q6]);this.Cn.OH=[this,this.Be2];this.Cn.
ATv([this,this.A3x]);this.Cn.ATw([this,this.A3y]);this.CG.Gs([this,this.D_,this.
GS]);this.CG.LZ([B=this.CG,B.FV]);this.CG.L2(A.aaL(A.ach.Edit));this.CG.Au([B=this.
Breed,B.B_,B.Cb]);this.CG.CK(this.Breed);this.CG.Any(this.Pp);this.Da.Au([B=this.
Gender,B.B_,B.Cb]);this.Da.CK(this.Gender);this.Gn.Gs([this,this.D_,this.GS]);this.
Gn.LZ([B=this.Gn,B.FV]);this.Gn.L2(A.aaL(A.ach.Edit));this.Gn.Au([B=this.Jh,B.B_
,B.Cb]);this.Gn.CK(this.Jh);this.Gn.Any(this.KY);this.Ee.Au([this,this.Anr,this.
Ahs]);this.C_.Au([this,this.Awb,this.AeY]);this.BZ.Au([B=this.AnimalType,B.B_,B.
Cb]);this.BZ.CK(this.AnimalType);this.Ay.BnE([this,this.A3J]);this.Breed.L0(A._GetAutoObject(
A.Device.Helper).W);this.Jh.L0(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
L0(A._GetAutoObject(A.Device.Helper).W);this.Gender.L0(A._GetAutoObject(A.Device.
Helper).W);this.Ge=A._NewObject(A.Device.Animal,0);this.MT=A._GetAutoObject(C.Ams
);this.Jf.Q=[B=A._GetAutoObject(A.Device.Device),B.ASY,B.A0z];this.Amk.MC=[this,
this.ALt];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();
this.Y._Done();this.Ef._Done();this.Cn._Done();this.CG._Done();this.Da._Done();this.
Gn._Done();this.Ee._Done();this.C_._Done();this.BZ._Done();this.Ay._Done();this.
Breed._Done();this.Jh._Done();this.AnimalType._Done();this.Gender._Done();this.Pp.
_Done();this.KY._Done();this.Jf._Done();this.YH._Done();this.Amk._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y.
_ReInit();this.Ef._ReInit();this.Cn._ReInit();this.CG._ReInit();this.Da._ReInit(
);this.Gn._ReInit();this.Ee._ReInit();this.C_._ReInit();this.BZ._ReInit();this.Ay.
_ReInit();this.Breed._ReInit();this.Jh._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pp._ReInit();this.KY._ReInit();this.Jf._ReInit();this.YH._ReInit(
);this.Amk._ReInit();this.Ef.T(A.aaR(A.acf.ACH));this.Cn.T(A.aaR(A.acf.Aeg));this.
CG.T(A.aaR(A.acf.Breed));this.Da.T(A.aaR(A.acf.Afo));this.Gn.T(A.aaR(A.acf.Jh));
this.Ee.T(A.aaR(A.acf.M7));this.C_.T(A.aaR(A.acf.KJ));this.BZ.T(A.aaR(A.acf.Aft)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ge)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amk)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.Asz={Zi:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Zi={
I:this},0);this.__proto__=C.Asz;this.N.CU(A.acf.BiJ);this.Number.H(Bt9);this.Jg.
H(Bt_);this.IT.H(Bt$);this.AkG(2);this.Bc2=false;this.Bd7=true;this.Bd8=false;this.
Zi.H(Bua);this.Zi.KS(true);this.Zi.R(A.aaR(A.acf.A$H));this.Zi.L(A.jb.Text);this.
J(this.Zi,0);this.N.CE=null;this.N.B$=[this,this.AI0];this.N.C1(null);this.Zi.S(
A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Zi.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Zi._ReInit();this.Zi.R(A.aaR(A.acf.A$H));this.Zi.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.ADU={Ct:null,FO:function(E){if(this.M9===E)return;C.HK.FO.call(this,E);this.
Ct.CT(E);},Yq:function(HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;
case 1:B5=this.Ct;break;case 2:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;
},_Init:function(aArg){C.HK._Init.call(this,aArg);C.DF._Init.call(this.Ct={I:this
},0);this.__proto__=C.ADU;this.H(Bub);this.Ct.H(Bas);this.F0.H(Buc);this.J(this.
Ct,-2);this.Ct.Dj=[this,this.GX];},_Done:function(){this.__proto__=C.HK;this.Ct.
_Done();C.HK._Done.call(this);},_ReInit:function(){C.HK._ReInit.call(this);this.
Ct._ReInit();},_Mark:function(D){var B;C.HK._Mark.call(this,D);if((B=this.Ct)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsA={G5:null
,Bl:function(aSize){C.OU.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G5.M[0
]));},Ai:function(Ae){C.OU.Ai.call(this,Ae);if(this.Hl)this.G5.FO(A.jb.CJ);else this.
G5.FO(A.jb.CS);},A2j:function(){this.Bb(this.G5);},_Init:function(aArg){C.OU._Init.
call(this,aArg);C.HK._Init.call(this.G5={I:this},0);this.__proto__=C.AsA;this.G5.
H(Bud);this.J(this.G5,0);this.G5.Au([this,this.ASO,this.AFC]);},_Done:function(){
this.__proto__=C.OU;this.G5._Done();C.OU._Done.call(this);},_ReInit:function(){C.
OU._ReInit.call(this);this.G5._ReInit();},_Mark:function(D){var B;C.OU._Mark.call(
this,D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AxA={G5:null,Bl:function(aSize){C.OU.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G5.M[0]));},Ai:function(Ae){C.OU.Ai.call(this,Ae);if(this.Hl)this.G5.FO(
A.jb.CJ);else this.G5.FO(A.jb.CS);},A2j:function(){this.Bb(this.G5);},_Init:function(
aArg){C.OU._Init.call(this,aArg);C.ADU._Init.call(this.G5={I:this},0);this.__proto__=
C.AxA;this.G5.AZ(0x18);this.G5.H(Bue);this.J(this.G5,0);this.G5.Au([this,this.ASO
,this.AFC]);},_Done:function(){this.__proto__=C.OU;this.G5._Done();C.OU._Done.call(
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
};C.AV8={ALk:false,A2C:false,WA:function(G){this.Agx();A._GetAutoObject(C.BR).Ty(
A.aaR(A.acf.Settings),[this,this.A3O]);A._GetAutoObject(C.BR).Fz();this.AMb();A.
_GetAutoObject(C.BR).Mj(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.BR).Fz(
);A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.ARD)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DE:function(G){},CC:function(G){C.QD.CC.call(this,G);if(
this.A2C){this.A2C=false;A.pe([this,this.A0F],this);}},Agg:function(G){C.QD.Agg.
call(this,G);this.A_1(true);},Abr:function(){return C.AB$;},Abs:function(){return C.
ADt;},Q_:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.
Device.Helper).A66(Math.max(A._GetAutoObject(A.Device.Device).Av2,A._GetAutoObject(
A.Device.Helper).A6Y(A._GetAutoObject(A.Device.Device).An))+1));},HP:function(G){
C.QD.HP.call(this,G);if((((A._GetAutoObject(A.Device.Converter).S2(A._GetAutoObject(
A.Device.Device).PY)===10)&&this.ALk)&&!!this.Bg.AX)&&!this.Bg.AX.B9()){this.N.Cw(
null);this.N.Fc(A.aaR(A.acf.No));this.N.Cf=[this,this.BBj];this.N.C2(null);this.
N.CU(A.aaR(A.acf.Yes));this.N.B$=[this,this.BBk];}else if(this.Aki()===false){this.
N.Cw(A._GetAutoObject(A.Device.Converter).Ajr(A._GetAutoObject(A.Device.Converter
).AL8(this.LX.AC6())));this.N.Cf=[this,this.AcU];this.N.Fc(A.jV);}this.N.OQ(false
);this.N.OR(false);},Agj:function(){A._GetAutoObject(C.A8).Cd(86);},AA4:function(
G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E_();var Ay3=aFilter.
DL(26,4);if(!!Ay3){aFilter.Np(Ay3);A._GetAutoObject(A.Device.Device).An.Bk(aFilter
);if(!!this.Bg)this.Bg.GT(0);}},A6W:function(){return C.APy;},Bga:function(){var
B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.Filter
){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E_();FilterCriterion=(A.Device.
UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion
)Filter.Np(FilterCriterion);A._GetAutoObject(A.Device.Device).An.Bk(Filter);}},A3O:
function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A2C=true;A._GetAutoObject(
C.A8).Cd(89);},ALr:function(G){if(A._GetAutoObject(A.Device.Converter).S2(A._GetAutoObject(
A.Device.Device).PY)===10){if(this.ALk){this.Dk(A.aaR(A.acf.BoI));this.Bg.NP.S(A.
aaL(A.fl.Bh));}else{this.Dk(A.aaR(A.acf.AEr));this.Bg.NP.S(A.aaL(A.fl.Af));}}else
this.Dk(A.aaR(A.acf.AEr));},A_1:function(E){if(this.ALk===E)return;this.ALk=E;A.
pe([this,this.AoA],this);A.pe([this,this.ALr],this);},BBk:function(G){A._GetAutoObject(
C.A8).Ab9(90);},BBj:function(G){this.A_1(false);},_Init:function(aArg){C.QD._Init.
call(this,aArg);this.__proto__=C.AV8;this.Dr(C.ADk);this.Dk(A.aaR(A.acf.AEr));this.
ATr(A._GetAutoObject(C.Ax6));},_ReInit:function(){C.QD._ReInit.call(this);this.Dk(
A.aaR(A.acf.AEr));},_className:"Application::YoungNoTransponderListScreen"};C.AV7={
_Init:function(aArg){C.I4._Init.call(this,aArg);this.__proto__=C.AV7;this.KW.Ar(
false);this.KW.Aj(false);this.KW.Z(false);this.Bne(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARh={Ss:null,Q:null,A8d:0,M9:0,Init:function(aArg){this.ATu(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Ss)this.Ss.Au(E);},ATu:function(
E){if(this.A8d===E)return;this.A8d=E;var X;switch(E){case 2:X=A._NewObject(C.HK,
0);break;case 3:X=A._NewObject(C.ADU,0);break;case 4:X=A._NewObject(C.ARe,0);break;
case 5:X=A._NewObject(C.ARf,0);break;case 6:X=A._NewObject(C.AvT,0);break;default:{
X=null;A.ab5("%s%i",Buf,E);}}this.Bnd(X);},Bnd:function(E){if(this.Ss===E)return;
if(!!this.Ss){this.Ss.Au(null);this.HO(this.Ss);}this.Ss=E;if(!!this.Ss){this.Ss.
Au(this.Q);this.J(this.Ss,0);}},FO:function(E){if(this.M9===E)return;this.M9=E;if(
!!this.Ss)this.Ss.FO(E);},SP:function(GA){if(!!this.Ss)this.Ss.SP(GA);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARh;this.H(Ayp);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ss)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARe={CV:null,Ct:null,FO:function(
E){if(this.M9===E)return;C.HK.FO.call(this,E);this.Ct.CT(E);this.CV.CT(E);},Yq:function(
HA){var B5=null;switch(HA){case-1:case 0:B5=this.F0;break;case 1:B5=this.Ct;break;
case 2:B5=this.CV;break;case 3:B5=this.G2;break;default:A.ab5("%s",Ah4);}return B5;
},_Init:function(aArg){C.HK._Init.call(this,aArg);C.DF._Init.call(this.CV={I:this
},0);C.DF._Init.call(this.Ct={I:this},0);this.__proto__=C.ARe;this.H(Bug);this.G2.
H(Atl);this.CV.H(Bat);this.Ct.H(Bau);this.F0.H(Bav);this.J(this.CV,-2);this.J(this.
Ct,-2);this.CV.Dj=[this,this.GX];this.Ct.Dj=[this,this.GX];},_Done:function(){this.
__proto__=C.HK;this.CV._Done();this.Ct._Done();C.HK._Done.call(this);},_ReInit:function(
){C.HK._ReInit.call(this);this.CV._ReInit();this.Ct._ReInit();},_Mark:function(D
){var B;C.HK._Mark.call(this,D);if((B=this.CV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ct)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ACQ={S3:null,Ai:function(Ae){C.Abo.Ai.call(this,Ae);this.S3.L(this.V.AQ);},_Init:
function(aArg){C.Abo._Init.call(this,aArg);C.CH._Init.call(this.S3={I:this},0);this.
__proto__=C.ACQ;this.V.Z(false);this.AW.H(Buh);this.AW.ATu(4);this.S3.H(Bui);this.
S3.R(A.aaR(A.acf.Km));this.S3.L(A.jb.Bm);this.J(this.S3,0);this.S3.S(A.aaL(A.fl.
Af));this.S3.A2(A.aaL(A.fl.Ak));this.S3.Cu(null);},_Done:function(){this.__proto__=
C.Abo;this.S3._Done();C.Abo._Done.call(this);},_ReInit:function(){C.Abo._ReInit.
call(this);this.S3._ReInit();this.S3.R(A.aaR(A.acf.Km));this.S3.S(A.aaL(A.fl.Af)
);this.S3.A2(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abo._Mark.call(this,D);
if((B=this.S3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LY={YZ:null,T8:null,AQ:0,A7u:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YZ.L(this.AQ);this.T8.L(this.AQ);},A_g:function(E){var B;if(this.A7u===
E)return;this.A7u=E;if(E){this.YZ.Z(true);this.T8.DC([this.T8.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YZ.Z(false);this.T8.DC([this.T8.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C7._Init.call(
this.YZ={I:this},0);A.acg.C7._Init.call(this.T8={I:this},0);this.__proto__=C.LY;
this.H(A0f);this.YZ.AZ(0x2D);this.YZ.DC(Ah0);this.YZ.DM(BaR);this.YZ.L(A.jb.Text
);this.T8.AZ(0x36);this.T8.DC(BaR);this.T8.DM(Buj);this.T8.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YZ,0);this.J(this.T8,0);},_Done:function(){this.__proto__=
A.Core.P;this.YZ._Done();this.T8._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.YZ._ReInit();this.T8._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUw={Sx:null,PE:null,Da:null,BZ:null,CG:null,GQ:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pp:null,UQ:null,KY:null,Init:function(aArg){A.zX([this
,this.AuQ],this.BZ.Q,0);A.zX([this,this.AM6],this.CG.Q,0);A.zX([this,this.Bq$],this.
Sx.Q,0);A.zX([this,this.Avt],this.Da.Q,0);A.zX([this,this.AV4],this.GQ.Q,0);},AuQ:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.BZ.Q,F[1].call(F[
0])));},Bq$:function(G){var F;A._GetAutoObject(A.Device.Device).Axh((F=this.Sx.Q
,F[1].call(F[0])));},Avt:function(G){var F;A._GetAutoObject(A.Device.Device).JU((
F=this.Da.Q,F[1].call(F[0])));},AV4:function(G){var F;A._GetAutoObject(A.Device.
Device).Nl((F=this.GQ.Q,F[1].call(F[0])));},AM6:function(G){var F;A._GetAutoObject(
A.Device.Device).N1((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.
call(this,aArg);C.BW._Init.call(this.Sx={I:this},0);C.Ir._Init.call(this.PE={I:this
},0);C.BW._Init.call(this.Da={I:this},0);C.BW._Init.call(this.BZ={I:this},0);C.AxA.
_Init.call(this.CG={I:this},0);C.AsA._Init.call(this.GQ={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.M5._Init.call(this.Pp={I:this},0);C.UQ._Init.call(this.UQ={I:
this},0);A.Device.KY._Init.call(this.KY={I:this},0);this.__proto__=C.AUw;var B;this.
Ja((A.aaR(A.acf.Asn)+Ayz)+A.aaR(A.acf.AjH));this.Sx.H(Ah3);this.Sx.Aj(true);this.
Sx.T(A.aaR(A.acf.Bah));this.Sx.Bi(true);this.Sx.Bx(0);this.PE.H(Ayn);this.PE.Aj(
true);this.PE.Z(true);this.PE.T(A.aaR(A.acf.AdT));this.PE.Ga(0);this.PE.EU(99);this.
PE.IQ(A.aaR(A.acf.Km));this.PE.Jb(A.aaR(A.acf.GL));this.Da.H(Aae);this.Da.Aj(true
);this.Da.T(A.aaR(A.acf.Afo));this.Da.Bi(true);this.Da.Bx(0);this.BZ.H(Ali);this.
BZ.Aj(true);this.BZ.T(A.aaR(A.acf.Aft));this.BZ.Bi(true);this.BZ.Bx(0);this.CG.H(
AcQ);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.Breed));this.CG.Bi(false);this.GQ.H(
AcQ);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jh));this.GQ.Bi(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.UQ.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sx,0);this.
J(this.PE,0);this.J(this.Da,0);this.J(this.BZ,0);this.J(this.CG,0);this.J(this.GQ
,0);this.Sx.Au([B=this.WeightRecordingScope,B.B_,B.Cb]);this.Sx.CK(this.WeightRecordingScope
);this.PE.Au([B=A._GetAutoObject(A.Device.Device),B.A8w,B.Bbc]);this.Da.Au([B=this.
Gender,B.B_,B.Cb]);this.Da.CK(this.Gender);this.BZ.Au([B=this.AnimalType,B.B_,B.
Cb]);this.BZ.CK(this.AnimalType);this.CG.Gs([this,this.D_,this.GS]);this.CG.LZ([
B=this.CG,B.FV]);this.CG.L2(A.aaL(A.ach.Edit));this.CG.Au([B=this.Breed,B.B_,B.Cb
]);this.CG.CK(this.Breed);this.CG.Any(this.Pp);this.GQ.Gs([this,this.D_,this.GS]
);this.GQ.LZ([B=this.GQ,B.FV]);this.GQ.L2(A.aaL(A.ach.Edit));this.GQ.Au([B=this.
UQ,B.B_,B.Cb]);this.GQ.CK(this.UQ);this.GQ.Any(this.KY);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cg;this.Sx._Done();this.PE._Done();this.Da._Done();this.
BZ._Done();this.CG._Done();this.GQ._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pp._Done();this.UQ._Done();this.
KY._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
Sx._ReInit();this.PE._ReInit();this.Da._ReInit();this.BZ._ReInit();this.CG._ReInit(
);this.GQ._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pp._ReInit();this.UQ._ReInit();
this.KY._ReInit();this.Ja((A.aaR(A.acf.Asn)+Ayz)+A.aaR(A.acf.AjH));this.Sx.T(A.aaR(
A.acf.Bah));this.PE.T(A.aaR(A.acf.AdT));this.PE.IQ(A.aaR(A.acf.Km));this.PE.Jb(A.
aaR(A.acf.GL));this.Da.T(A.aaR(A.acf.Afo));this.BZ.T(A.aaR(A.acf.Aft));this.CG.T(
A.aaR(A.acf.Breed));this.GQ.T(A.aaR(A.acf.Jh));},_Mark:function(D){var B;C.Cg._Mark.
call(this,D);if((B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UQ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUv={QQ:null,FD:null,In:null,C$:null,Dm:null,EL:null,AutoRegistrationMode:null
,AdW:null,Init:function(aArg){var B;A.zX([this,this.Bhy],this.QQ.Q,0);A.zX([this
,this.BeN],[B=A._GetAutoObject(A.Device.Device),B.ASy,B.A0l],0);A.zX([this,this.
Adx],[B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3],0);A.zX([this,this.Adx],[B=
A._GetAutoObject(A.Device.Device),B.Uk,B.U4],0);A.pe([this,this.BeN],this);A.pe([
this,this.Adx],this);},Bhy:function(G){var F;A._GetAutoObject(A.Device.Device).Aww((
F=this.QQ.Q,F[1].call(F[0])));},BeN:function(G){switch(A._GetAutoObject(A.Device.
Device).AgA){case 0:A._GetAutoObject(A.Device.Helper).J0(this.In,true);break;case
1:A._GetAutoObject(A.Device.Helper).J0(this.In,false);break;default:throw new Error(
Buk+A._GetAutoObject(A.Device.Device).AgA.toFixed());}},Adx:function(G){var F,Cs;
if(((F=this.C$.Q,F[1].call(F[0]))+(Cs=this.Dm.Q,Cs[1].call(Cs[0])))>12)(Cs=this.
Dm.Q,Cs[2].call(Cs[0],12-(F=this.C$.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.BW._Init.call(this.QQ={I:this},0);C.BW._Init.call(this.
FD={I:this},0);C.AGJ._Init.call(this.In={I:this},0);C.Ir._Init.call(this.C$={I:this
},0);C.Ir._Init.call(this.Dm={I:this},0);C.Av3._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdW._Init.
call(this.AdW={I:this},0);this.__proto__=C.AUv;var B;this.Ja(A.aaR(A.acf.Aqm));this.
QQ.H(AIM);this.QQ.Aj(true);this.QQ.T(A.aaR(A.acf.Aqm));this.QQ.Bi(false);this.QQ.
Ga(-1);this.QQ.EU(1);this.FD.H(U0);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.
aaR(A.acf.Aqj));this.FD.Bi(true);this.In.H(Aae);this.In.Aj(true);this.In.Z(true);
this.In.T(A.aaR(A.acf.AEp));this.In.Bi(true);this.C$.H(Ali);this.C$.Aj(true);this.
C$.Z(true);this.C$.T(A.aaR(A.acf.AqE));this.C$.Bi(false);this.C$.Ga(2);this.C$.EU(
6);this.C$.IQ(A.aaR(A.acf.OD));this.C$.Jb(A.aaR(A.acf.Ez));this.Dm.H(AcQ);this.Dm.
Aj(true);this.Dm.T(A.aaR(A.acf.Zk));this.Dm.Bi(true);this.Dm.Ga(0);this.Dm.EU(12
);this.Dm.IQ(A.aaR(A.acf.OD));this.Dm.Jb(A.aaR(A.acf.Ez));this.EL.H(Bul);this.EL.
Ar(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.Ar1(A.aaR(A.acf.Aql));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QQ,0);this.
J(this.FD,0);this.J(this.In,0);this.J(this.C$,0);this.J(this.Dm,0);this.J(this.EL
,0);this.QQ.Au([B=this.AutoRegistrationMode,B.B_,B.Cb]);this.QQ.CK(this.AutoRegistrationMode
);this.FD.Au([B=this.AdW,B.B_,B.Cb]);this.FD.CK(this.AdW);this.In.Un([B=A._GetAutoObject(
A.Device.Device),B.Wy,B.A0o]);this.In.Akx([B=A._GetAutoObject(A.Device.Device),B.
Awg,B.AyM]);this.C$.Au([B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3]);this.Dm.
Au([B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4]);this.EL.DB(A.aaL(A.ach.AjY));
this.EL.OO([B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3]);this.EL.PU([B=A._GetAutoObject(
A.Device.Device),B.Uk,B.U4]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.QQ._Done();this.FD._Done();this.In._Done();this.C$._Done();this.Dm._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdW._Done();C.Cg._Done.
call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.QQ._ReInit();this.FD.
_ReInit();this.In._ReInit();this.C$._ReInit();this.Dm._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdW._ReInit();this.Ja(A.aaR(A.acf.Aqm
));this.QQ.T(A.aaR(A.acf.Aqm));this.FD.T(A.aaR(A.acf.Aqj));this.In.T(A.aaR(A.acf.
AEp));this.C$.T(A.aaR(A.acf.AqE));this.C$.IQ(A.aaR(A.acf.OD));this.C$.Jb(A.aaR(A.
acf.Ez));this.Dm.T(A.aaR(A.acf.Zk));this.Dm.IQ(A.aaR(A.acf.OD));this.Dm.Jb(A.aaR(
A.acf.Ez));this.EL.Ar1(A.aaR(A.acf.Aql));},_Mark:function(D){var B;C.Cg._Mark.call(
this,D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVA={OI:null,FD:null,In:null,C$:null,Dm:null,EL:null,Afs:null,Init:function(
aArg){var B;A.zX([this,this.Bfr],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0B
],0);A.zX([this,this.Adx],[B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3],0);A.zX([
this,this.Adx],[B=A._GetAutoObject(A.Device.Device),B.Uk,B.U4],0);A.pe([this,this.
Bfr],this);A.pe([this,this.Adx],this);},Bfr:function(G){var AK7=false;var AaL=false;
switch(A._GetAutoObject(A.Device.Device).Ak5){case 0:{AK7=false;AaL=false;}break;
case 1:{AK7=true;AaL=false;}break;case 2:{AK7=false;AaL=true;}break;default:throw new
Error(Bum+A._GetAutoObject(A.Device.Device).Ak5.toFixed());}A._GetAutoObject(A.Device.
Helper).J0(this.In,AK7);A._GetAutoObject(A.Device.Helper).J0(this.C$,AaL);A._GetAutoObject(
A.Device.Helper).J0(this.Dm,AaL);A._GetAutoObject(A.Device.Helper).J0(this.EL,AaL
);},Adx:function(G){var F,Cs;if(((F=this.C$.Q,F[1].call(F[0]))+(Cs=this.Dm.Q,Cs[
1].call(Cs[0])))>12)(Cs=this.Dm.Q,Cs[2].call(Cs[0],12-(F=this.C$.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Ir._Init.call(this.OI={
I:this},0);C.BW._Init.call(this.FD={I:this},0);C.AGJ._Init.call(this.In={I:this}
,0);C.Ir._Init.call(this.C$={I:this},0);C.Ir._Init.call(this.Dm={I:this},0);C.Av3.
_Init.call(this.EL={I:this},0);C.Afs._Init.call(this.Afs={I:this},0);this.__proto__=
C.AVA;var B;this.Ja(A.aaR(A.acf.LinkTransponder));this.OI.H(AIM);this.OI.Aj(true
);this.OI.Z(true);this.OI.T(A.aaR(A.acf.A7O));this.OI.Bi(false);this.OI.Ga(1);this.
OI.EU(365);this.OI.IQ(A.aaR(A.acf.Km));this.OI.Jb(A.aaR(A.acf.GL));this.FD.H(U0);
this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqj));this.FD.Bi(true);this.
In.H(Aae);this.In.Aj(true);this.In.Z(true);this.In.T(A.aaR(A.acf.AEp));this.In.Bi(
false);this.C$.H(Ali);this.C$.Aj(true);this.C$.Z(true);this.C$.T(A.aaR(A.acf.AqE
));this.C$.Bi(false);this.C$.Ga(2);this.C$.EU(6);this.C$.IQ(A.aaR(A.acf.OD));this.
C$.Jb(A.aaR(A.acf.Ez));this.Dm.H(AcQ);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.Zk)
);this.Dm.Bi(true);this.Dm.Ga(0);this.Dm.EU(12);this.Dm.IQ(A.aaR(A.acf.OD));this.
Dm.Jb(A.aaR(A.acf.Ez));this.EL.H(Aoq);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar1(A.aaR(A.acf.Aql));this.J(this.OI,0);this.J(this.FD,0);this.
J(this.In,0);this.J(this.C$,0);this.J(this.Dm,0);this.J(this.EL,0);this.OI.Au([B=
A._GetAutoObject(A.Device.Device),B.A82,B.Bbt]);this.FD.Au([B=this.Afs,B.B_,B.Cb
]);this.FD.CK(this.Afs);this.In.Un([B=A._GetAutoObject(A.Device.Device),B.Wy,B.A0o
]);this.In.Akx([B=A._GetAutoObject(A.Device.Device),B.Awg,B.AyM]);this.C$.Au([B=
A._GetAutoObject(A.Device.Device),B.Uj,B.U3]);this.Dm.Au([B=A._GetAutoObject(A.Device.
Device),B.Uk,B.U4]);this.EL.DB(A.aaL(A.ach.AjY));this.EL.OO([B=A._GetAutoObject(
A.Device.Device),B.Uj,B.U3]);this.EL.PU([B=A._GetAutoObject(A.Device.Device),B.Uk
,B.U4]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.OI._Done();this.
FD._Done();this.In._Done();this.C$._Done();this.Dm._Done();this.EL._Done();this.
Afs._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
OI._ReInit();this.FD._ReInit();this.In._ReInit();this.C$._ReInit();this.Dm._ReInit(
);this.EL._ReInit();this.Afs._ReInit();this.Ja(A.aaR(A.acf.LinkTransponder));this.
OI.T(A.aaR(A.acf.A7O));this.OI.IQ(A.aaR(A.acf.Km));this.OI.Jb(A.aaR(A.acf.GL));this.
FD.T(A.aaR(A.acf.Aqj));this.In.T(A.aaR(A.acf.AEp));this.C$.T(A.aaR(A.acf.AqE));this.
C$.IQ(A.aaR(A.acf.OD));this.C$.Jb(A.aaR(A.acf.Ez));this.Dm.T(A.aaR(A.acf.Zk));this.
Dm.IQ(A.aaR(A.acf.OD));this.Dm.Jb(A.aaR(A.acf.Ez));this.EL.Ar1(A.aaR(A.acf.Aql));
},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.In)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afs={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.BgQ],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0B],0);A.pe([
this,this.BgQ],this);},Du:function(){return 3;},Gl:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axd(E);},BgQ:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak5;A.
abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afs;this.Ca.Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Jd={B6:null,IW:null,Cq:null,AmA:null,Sf:null,Anl:null,AjE:null,Text:null,CX:
null,D6:0,LA:false,Ai:function(Ae){var B;A.acn.Jd.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IW.Ar(true);else{this.IW.Ar(false);this.CX.Z(false);}},A4L:function(G
){var B;var Bd=this.Text.M;var Nz=0;var NA=0;if(this.CX.Et[0]<Bd[0])Nz=Bd[0]-this.
CX.Et[0];if(this.CX.Et[0]>Bd[2])Nz=Bd[2]-this.CX.Et[0];if(this.CX.Et[1]<Bd[1])NA=
Bd[1]-this.CX.Et[1];if(this.CX.ED[1]>Bd[3])NA=Bd[3]-this.CX.ED[1];if(!!Nz||!!NA)
this.Text.Gb(A.abf(this.Text.Br,[Nz,NA]));Nz=this.Text.Br[0];NA=this.Text.Br[1];
var C5=[(B=this.Text.Dc())[2]-B[0],B[3]-B[1]];if(C5[0]<=((B=this.Text.M)[2]-B[0]
))Nz=0;if(C5[1]<=((B=this.Text.M)[3]-B[1]))NA=0;this.Text.Gb([Nz,NA]);},Amn:function(
G){if(!this.B6)return;var A4c=this.Text.AGW(this.D6);var pos=this.Text.Afh(A4c);
this.CX.DM(A.abe(pos,[0,this.B6.Ascent]));this.CX.DC(A.abf(pos,[0,this.B6.Descent
]));if(this.IW.Bw){this.IW.Ar(false);this.IW.Ar(true);}if(this.LA){A.pe([this,this.
A4L],this);this.LA=false;}},AAA:function(G){if(!this.B6)return;var EH=this.Text.
AGW(this.D6);if(this.Cq.CO===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnS(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.AC8(EH[1]).length,EH[1]];}}if(this.Cq.CO===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnS(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CO===4){var pos=this.Text.Afh(EH);var AaK=(this.B6.Ascent+this.B6.
Descent)+this.B6.Leading;EH=this.Text.AT9(A.abe(pos,[0,AaK]));}if(this.Cq.CO===5
){var pos=this.Text.Afh(EH);var AaK=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
EH=this.Text.AT9(A.abf(pos,[0,AaK]));}var Vh=this.Text.AnS(EH);var Ix=this.Text.
String.charCodeAt(Vh)||0;if(((Ix===0x5E)||(Ix===0x7E))||(Ix===0x25))Vh=Vh-1;if(Vh
!==this.D6){this.D6=Vh;A.pe([this,this.Amn],this);this.LA=true;}},BeW:function(G
){if(!this.D6)return;var Ix=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
Ix===0x5E)||(Ix===0x7E))||(Ix===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.LA=true;},AAB:function(G){if(this.D6>=(this.Text.
String.length-1))return;var Ix=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(Ix===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.LA=true;}
,Be_:function(G){this.Text.R(A.abU(this.Text.String,Bun,this.D6));this.D6=this.D6+
1;this.LA=true;},BeY:function(G){var Ix=this.AjE.DQ;var Aur=String.fromCharCode(
Ix);A.ab5("%c",Ix);if((((Ix===0x5E)||(Ix===0x7E))||(Ix===0xAD))||(Ix===0x25))Aur=
Buo+String.fromCharCode(Ix);this.Text.R(A.abU(this.Text.String,Aur,this.D6));this.
D6=this.D6+Aur.length;this.LA=true;},_Init:function(aArg){A.acn.Jd._Init.call(this
,aArg);A.acl.TI._Init.call(this.IW={I:this},0);A.Core.BK._Init.call(this.Cq={I:this
},0);A.Core.BK._Init.call(this.AmA={I:this},0);A.Core.BK._Init.call(this.Sf={I:this
},0);A.Core.BK._Init.call(this.Anl={I:this},0);A.Core.BK._Init.call(this.AjE={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C7._Init.call(this.CX={
I:this},0);this.__proto__=C.Jd;var B;this.H(Bup);this.IW.B2=false;this.IW.Cx=true;
this.IW.Fr(500);this.IW.Uo(500);this.Cq.Filter=147;this.Cq.Bw=false;this.AmA.Filter=
151;this.Sf.Filter=44;this.Anl.Filter=149;this.AjE.Filter=145;this.Text.AZ(0x3F);
this.Text.H(Buq);this.Text.KS(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CX.DC(Bur);this.CX.DM(Bus);this.CX.A_W(2);this.CX.A_V(2);this.
CX.L(0xFF000000);this.CX.Z(false);this.J(this.Text,0);this.J(this.CX,0);this.IW.
Q=[B=this.CX,B.Fq,B.Z];this.Cq.BL=[this,this.AAA];this.Cq.D1=[this,this.AAA];this.
AmA.BL=[this,this.BeW];this.AmA.D1=[this,this.BeW];this.Sf.BL=[this,this.AAB];this.
Sf.D1=[this,this.AAB];this.Anl.BL=[this,this.Be_];this.Anl.D1=[this,this.Be_];this.
AjE.BL=[this,this.BeY];this.AjE.D1=[this,this.BeY];this.Text.Q7([this,this.Amn]);
this.Text.S(A.aaL(A.aci.ACU));this.B6=A.aaL(A.aci.ACU);},_Done:function(){this.__proto__=
A.acn.Jd;this.IW._Done();this.Cq._Done();this.AmA._Done();this.Sf._Done();this.Anl.
_Done();this.AjE._Done();this.Text._Done();this.CX._Done();A.acn.Jd._Done.call(this
);},_ReInit:function(){A.acn.Jd._ReInit.call(this);this.IW._ReInit();this.Cq._ReInit(
);this.AmA._ReInit();this.Sf._ReInit();this.Anl._ReInit();this.AjE._ReInit();this.
Text._ReInit();this.CX._ReInit();},_Mark:function(D){var B;A.acn.Jd._Mark.call(this
,D);if((B=this.B6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IW)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVo={Jd:null,DE:function(G
){switch(this.Cq.CO){case 6:A._GetAutoObject(A.Device.Device).AuW();break;case 7:
A._GetAutoObject(A.Device.Device).Aqn();break;case 4:A._GetAutoObject(A.Device.Device
).AjC();break;case 5:A._GetAutoObject(A.Device.Device).Aqo();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A8).FB();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Jd._Init.call(this.Jd={I:this},0);this.__proto__=C.AVo;this.H(Ce);this.
N.Z(true);this.Dr(C.Aq0);this.Jd.H(Ff);this.J(this.Jd,0);this.Bb(this.Jd);this.N.
CE=[this,this.Ew];this.N.C1(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Jd._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Jd._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUe={WA:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){A._GetAutoObject(
C.BR).Ty(A.aaR(A.acf.ACe),[this,this.Ba4]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Ty(A.aaR(A.acf.AHd),[this,this.A8n]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Ty(A.aaR(A.acf.A5R),[this,this.Ba3]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Ty(A.aaR(A.acf.UnlinkTransponder),[this,this.Boi]);}else{A._GetAutoObject(
C.BR).AaS(A.aaR(A.acf.ACe));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).AaS(
A.aaR(A.acf.AHd));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).AaS(A.aaR(A.
acf.A5R));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.A6e)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).Fz();this.AuI(A.aaR(A.acf.A58),[this,this.BgN
],this.OC);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(
A.acf.A6q));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Anh
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},Abr:function(){return C.
ACa;},Abs:function(){return C.ADr;},Q_:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).Avw());},HP:function(G){C.AkP.HP.call(
this,G);this.N.Cw(null);this.N.Fc(A.aaR(A.acf.A5J));if(this.AJI()){this.N.Cf=[this
,this.AIN];this.N.Jz.C3(255);}else{this.N.Cf=null;this.N.Jz.C3(100);}this.N.C2(A.
aaL(A.ach.Options));this.N.CU(A.jV);this.N.OQ(false);this.N.OR(false);this.N.I8.
C3(255);},ASq:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiY=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiY.toFixed(),0,null);},ASr:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6k(this);},ASw:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).PY){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.Bfa]);return;}if(A._GetAutoObject(A.Device.Device
).Arg()===false){A.zX([this,this.XE],[B=A._GetAutoObject(A.Device.Device),B.Wz,B.
Xg],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Agi]);return;
}A.zX([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,B.SE,B.Fb],0);var A4t=
!!this.OC&&!(F=this.OC,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asp(2,
A4t);},AJI:function(){if(!this.Bg)return false;var AtM=this.Bg.AX;if(!AtM)return false;
if(!AtM.B9())return false;return true;},Al2:function(G){var B;var F;switch(A._GetAutoObject(
A.Device.Device).Gf.EV){case 0:A.z$([this,this.Al2],[B=A._GetAutoObject(A.Device.
Device).Gf,B.SE,B.Fb],0);break;case 3:{if(!!this.OC&&(F=this.OC,F[1].call(F[0]))
)A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(
A.Device.Converter).S2(A._GetAutoObject(A.Device.Device).PY)===10){this.Dk(A.aaR(
A.acf.BjG));this.Bg.NP.S(A.aaL(A.fl.Bh));}else this.Dk(A.aaR(A.acf.A$a));A._GetAutoObject(
A.Device.Device).AqC();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gf.E5();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).Gf.EV);},_Init:function(aArg){C.AkP._Init.call(
this,aArg);this.__proto__=C.AUe;var B;this.Dr(C.APu);this.A95([B=A._GetAutoObject(
A.Device.Device),B.A88,B.Bby]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADr={PC:null,I7:null,_Init:function(aArg){C.Dd._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PC={I:this},0);A.acg.Ap._Init.call(this.I7={I:this},0);this.__proto__=
C.ADr;this.Es.Z(false);this.DS.Z(false);this.PC.H(But);this.PC.L(A.jb.Text);this.
I7.H(Buu);this.I7.L(A.jb.Text);this.J(this.PC,0);this.J(this.I7,0);this.PC.Ax(A.
aaL(A.ach.AvK));this.I7.Ax(A.aaL(A.ach.AvF));},_Done:function(){this.__proto__=C.
Dd;this.PC._Done();this.I7._Done();C.Dd._Done.call(this);},_ReInit:function(){C.
Dd._ReInit.call(this);this.PC._ReInit();this.I7._ReInit();},_Mark:function(D){var
B;C.Dd._Mark.call(this,D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AM1={Init:function(aArg){var B;A.zX([this,this.AAE],[B=A._GetAutoObject(A.Device.
Device),B.AEC,B.AIR],0);A.pe([this,this.AAE],this);},WA:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B9()>0)){if(this.AJI())A._GetAutoObject(C.BR).Ty(A.aaR(
A.acf.AOo),[this,this.AIN]);else A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.AOo));A.
_GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ty(A.aaR(A.acf.ACc),[this,this.
Ba4]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ty(A.aaR(A.acf.AHd),[this
,this.A8n]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Ty(A.aaR(A.acf.A5Q
),[this,this.Ba3]);}else{A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.AOo));A._GetAutoObject(
C.BR).Fz();A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.ACc));A._GetAutoObject(C.BR).Fz(
);A._GetAutoObject(C.BR).AaS(A.aaR(A.acf.AHd));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).AaS(A.aaR(A.acf.A5Q));}A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).
Mj(A.aaR(A.acf.A6e)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fz();this.AuI(A.aaR(
A.acf.A58),[this,this.BgN],this.OC);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Mj(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BR).Fz();A.
_GetAutoObject(C.BR).Mj(A.aaR(A.acf.A6q));A._GetAutoObject(C.BR).Fz();A._GetAutoObject(
C.BR).Mj(A.aaR(A.acf.Anh)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},Abr:function(){return C.AB8;},Abs:function(){return C.ADp;},Q_:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOK(
));},HP:function(G){C.AkP.HP.call(this,G);this.N.Cw(A.aaL(A.ach.AeD));this.N.Cf=[
this,this.Adw];this.N.Fc(A.jV);this.N.C2(null);this.N.CU((A.aaR(A.acf.A5J)+String.
fromCharCode(0x0A))+A.aaR(A.acf.BhG));this.N.OQ(false);this.N.OR(false);this.N.I8.
C3(255);},ASq:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiY=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).A3(96,true,AiY.toFixed(),0,null);},ASr:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6j(this);},ASw:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).PY){A._GetAutoObject(A.Device.Device
).A3(73,true,A.jV,0,[this,this.Bfa]);return;}if(A._GetAutoObject(A.Device.Device
).Arg()===false){A.zX([this,this.XE],[B=A._GetAutoObject(A.Device.Device),B.Wz,B.
Xg],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,this.Agi]);return;
}A.zX([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,B.SE,B.Fb],0);var A4t=
!!this.OC&&!(F=this.OC,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asp(0,
A4t);},AJI:function(){var AtM=this.Bg.AX;if(!AtM)return false;var O;for(O=0;O<AtM.
B9();O++)if(A._GetAutoObject(A.Device.Helper).Aj7(AtM.AOY(O,34))===false)return true;
return false;},Adw:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAE:function(G){if(A._GetAutoObject(A.Device.Device).Aqq===1)A.pe([this,this.
A6n],this);},Al2:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device
).Gf.EV){case 0:A.z$([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,B.SE
,B.Fb],0);break;case 3:{if(!!this.OC&&(F=this.OC,F[1].call(F[0])))A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dk(A.aaR(A.acf.BhH));A._GetAutoObject(
A.Device.Device).AqC();}break;case 4:{A._GetAutoObject(A.Device.Device).A3(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gf.E5();}break;default:;}},_Init:
function(aArg){C.AkP._Init.call(this,aArg);this.__proto__=C.AM1;var B;this.Dr(C.
AO3);this.A95([B=A._GetAutoObject(A.Device.Device),B.A8E,B.Bbh]);this.Init(aArg);
},_className:"Application::BirthRegistrationsListScreen"};C.AO3={DX:function(G){
C.Aev.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter).Ad0(11));}
,_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=C.AO3;this.Text.
R(A.aaR(A.acf.AB1));},_ReInit:function(){C.Aev._ReInit.call(this);this.Text.R(A.
aaR(A.acf.AB1));},_className:"Application::HeaderBirthRegistrationsList"};C.APu={
DX:function(G){C.Aev.DX.call(this,G);this.De.Ax(A._GetAutoObject(A.Device.Converter
).Ad0(12));},_Init:function(aArg){C.Aev._Init.call(this,aArg);this.__proto__=C.APu;
this.Text.R(A.aaR(A.acf.AGj));},_ReInit:function(){C.Aev._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AGj));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ACa={Ke:0,AP:null,SU:null,Pb:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.SU.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.SU.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rj(this.
Ke));this.SU.R(A._GetAutoObject(A.acj.KL).ACW(this.Pb));},Ch:function(Ad){if(!this.
AX)return;this.Hs=Ad;if(!!this.AX){this.Ke=this.AX.KO(Ad,26);this.Pb=this.AX.Hv(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CH._Init.call(this.SU={I:this},0);this.__proto__=C.ACa;
this.AP.H(A0h);this.AP.L(A.jb.Bc);this.SU.H(A0i);this.J(this.AP,0);this.J(this.SU
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SU.S(A.aaL(A.fl.Ak));
this.SU.A2(A.aaL(A.fl.Bh));this.SU.Cu(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.SU._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.SU._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A2(A.aaL(A.fl.Bh));this.SU.S(A.aaL(A.fl.Ak));this.SU.A2(A.
aaL(A.fl.Bh));this.SU.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SU)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AUO={
AeW:null,AbZ:null,TQ:null,KM:null,TO:null,NM:null,Tj:A.jV,Ai:function(Ae){var F;
C.SR.Ai.call(this,Ae);this.TQ.L(this.V.AQ);var Apu=false;if((!this.Dl||!(F=this.
Dl,F[1].call(F[0])))&&!this.A_)Apu=true;this.TQ.Z(Apu);this.Pv.Z(!Apu);this.VU.Z(
!Apu);this.Q2.Z(!Apu);this.Yk.Z(!Apu);this.P9.Z(!Apu);},Ady:function(G){var B;var
F;if(!this.Tj.length){C.SR.Ady.call(this,G);return;}var BO=this.FY;var Gv=A._GetAutoObject(
A.Device.AnM).BfN(this.Tj);this.Tj=A.jV;if(!Gv){A._GetAutoObject(A.Device.Device
).A3(101,true,A.jV,0,this.AbZ);A.pe(this.AeW,this);return;}if(this.Asm&&(Gv>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).A3(102,true,A.jV,0,this.
AbZ);A.pe(this.AeW,this);return;}this.Um(((B=(Gv|0))<0)?B+0x100000000:B);if(this.
FY!==BO){if(!!this.Dl)(F=this.Dl,F[2].call(F[0],this.FY));A.abo(this.Dl,0);}if(!
!this.OH)A.pe(this.OH,this);},A3m:function(G){if(this.Tj.length<10)this.Tj=this.
Tj+String.fromCharCode(this.KM.DQ);},ASt:function(G){if((this.NM.DQ===0x0D)||(this.
NM.DQ===0x0A))this.Ady(this);else this.NM.NL=true;},ATv:function(E){if(A.aa0(this.
AeW,E))return;this.AeW=E;},ATw:function(E){if(A.aa0(this.AbZ,E))return;this.AbZ=
E;},_Init:function(aArg){C.SR._Init.call(this,aArg);A.acg.Text._Init.call(this.TQ={
I:this},0);A.Core.BK._Init.call(this.KM={I:this},0);A.Core.BK._Init.call(this.TO={
I:this},0);A.Core.BK._Init.call(this.NM={I:this},0);this.__proto__=C.AUO;this.TQ.
H(Buv);this.TQ.I$(true);this.TQ.A6(0x12);this.TQ.R(A.aaR(A.acf.A53));this.KM.Filter=
143;this.TO.Filter=149;this.NM.Filter=145;this.J(this.TQ,0);this.TQ.S(A.aaL(A.fl.
EK));this.KM.BL=[this,this.A3m];this.TO.BL=[this,this.BbT];this.NM.BL=[this,this.
ASt];},_Done:function(){this.__proto__=C.SR;this.TQ._Done();this.KM._Done();this.
TO._Done();this.NM._Done();C.SR._Done.call(this);},_ReInit:function(){C.SR._ReInit.
call(this);this.TQ._ReInit();this.KM._ReInit();this.TO._ReInit();this.NM._ReInit(
);this.TQ.R(A.aaR(A.acf.A53));this.TQ.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SR._Mark.call(this,D);if((B=this.AeW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AUS={AeW:null,AbZ:null,KM:null
,TO:null,NM:null,Tj:A.jV,I0:function(G){var F;if(!this.Tj.length){C.Rb.I0.call(this
,G);return;}if(this.Asl)return;if(!this.Tj.length)this.TO.NL=true;var BO=this.AM;
var Gv=A._GetAutoObject(A.Device.AnM).BBL(this.Tj);this.Tj=A.jV;if(!Gv){if((this.
Tj.length<13)&&!A._GetAutoObject(A.Device.Device).PY)A._GetAutoObject(A.Device.Device
).A3(105,true,A.jV,0,this.AbZ);else A._GetAutoObject(A.Device.Device).A3(103,true
,A.jV,0,this.AbZ);A.pe(this.AeW,this);return;}this.Bx(Gv);if(this.AM!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}if(!!this.OH)A.pe(this.
OH,this);},A3m:function(G){if(this.Asl)return;if(this.Tj.length<17)this.Tj=this.
Tj+String.fromCharCode(this.KM.DQ);},ASt:function(G){if((this.NM.DQ===0x0D)||(this.
NM.DQ===0x0A))this.I0(this);else this.NM.NL=true;},ATv:function(E){if(A.aa0(this.
AeW,E))return;this.AeW=E;},ATw:function(E){if(A.aa0(this.AbZ,E))return;this.AbZ=
E;},_Init:function(aArg){C.Rb._Init.call(this,aArg);A.Core.BK._Init.call(this.KM={
I:this},0);A.Core.BK._Init.call(this.TO={I:this},0);A.Core.BK._Init.call(this.NM={
I:this},0);this.__proto__=C.AUS;this.Ar2(false);this.KM.Filter=143;this.TO.Filter=
149;this.NM.Filter=145;this.KM.BL=[this,this.A3m];this.TO.BL=[this,this.Atp];this.
NM.BL=[this,this.ASt];},_Done:function(){this.__proto__=C.Rb;this.KM._Done();this.
TO._Done();this.NM._Done();C.Rb._Done.call(this);},_ReInit:function(){C.Rb._ReInit.
call(this);this.KM._ReInit();this.TO._ReInit();this.NM._ReInit();},_Mark:function(
D){var B;C.Rb._Mark.call(this,D);if((B=this.AeW)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.APr={Aj3:null,Aj1:null,Gw:null,Q$:null,SO:null,C7:null,Init:function(aArg){var
B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Device),B.A80,B.AFv],0);A.pe([
this,this.DX],this);},Df:function(E){C.BQ.Df.call(this,E);this.Aj3.L(E);this.Aj1.
L(E);this.Q$.Zr(E);this.Gw.L(E);this.SO.Zr(E);},WC:function(E){this.Q$.CT(E);this.
SO.CT(E);},DX:function(G){this.Q$.T(A._GetAutoObject(A.Device.Device).Av0.toFixed(
));A.pe([this,this.BC3],this);},BC3:function(G){var Xq=A._GetAutoObject(A.Device.
Device).An.Filter;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).Avw());this.SO.T(A._GetAutoObject(A.Device.Device).An.B9().toFixed());A.
_GetAutoObject(A.Device.Device).An.Bk(Xq);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},0);A.acg.Ap._Init.call(this.Aj1={
I:this},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.Q$={I:this
},0);C.D2._Init.call(this.SO={I:this},0);A.acg.C7._Init.call(this.C7={I:this},0);
this.__proto__=C.APr;this.Aj3.H(O5);this.Aj1.H(Buw);this.Gw.H(Bux);this.Gw.L(A.jb.
CS);this.Q$.AZ(0x14);this.Q$.H(Buy);this.Q$.Zr(A.jb.Bm);this.Q$.CT(A.jb.Ri);this.
Q$.Hn(2);this.Q$.Bmc(0x11);this.SO.AZ(0x14);this.SO.H(Buz);this.SO.Zr(A.jb.Bm);this.
SO.CT(A.jb.Ri);this.SO.Hn(2);this.C7.DC(AhX);this.C7.DM(BuA);this.C7.L(A.jb.Bc);
this.J(this.Aj3,0);this.J(this.Aj1,0);this.J(this.Gw,0);this.J(this.Q$,0);this.J(
this.SO,0);this.J(this.C7,0);this.Aj3.Ax(A.aaL(A.ach.AvE));this.Aj1.Ax(A.aaL(A.ach.
AP1));this.Gw.Ax(A.aaL(A.ach.Gw));this.Q$.S(A.aaL(A.fl.Bh));this.SO.S(A.aaL(A.fl.
Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Aj3._Done();this.
Aj1._Done();this.Gw._Done();this.Q$._Done();this.SO._Done();this.C7._Done();C.BQ.
_Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Aj3._ReInit();
this.Aj1._ReInit();this.Gw._ReInit();this.Q$._ReInit();this.SO._ReInit();this.C7.
_ReInit();this.Q$.S(A.aaL(A.fl.Bh));this.SO.S(A.aaL(A.fl.Bh));},_Mark:function(D
){var B;C.BQ._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.ARU={Abf:null,Aep:null,VQ:null,Init:function(aArg){this.Bb(this.Abf);},Ln:function(
){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaE];this.BP.Cf=
null;this.BP.B$=[this,this.A3p];this.BP.CU(A.jV);this.BP.Cw(null);this.BP.C1(A.aaL(
A.ach.Yy));}return this.BP;},AAx:function(G){var Aa=(C.Ajk.isPrototypeOf(G)?G:null
);if(Aa===this.Abf)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.Aep)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(Bam);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ajk._Init.call(this.
Abf={I:this},0);C.Ajk._Init.call(this.Aep={I:this},0);C.ARY._Init.call(this.VQ={
I:this},0);this.__proto__=C.ARU;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.AB6));this.
Abf.H(IV);this.Abf.T(A.aaR(A.acf.AjH));this.Aep.H(Qd);this.Aep.T(A.aaR(A.acf.AGq
));this.VQ.H(Aad);this.VQ.T(A.aaR(A.acf.A5B));this.J(this.Abf,0);this.J(this.Aep
,0);this.J(this.VQ,0);this.Text.S(A.aaL(A.fl.Ak));this.Abf.AR=[this,this.AAx];this.
Aep.AR=[this,this.AAx];this.VQ.AS$([B=A._GetAutoObject(A.Device.Device),B.AEG,B.
AIU]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Abf._Done();this.
Aep._Done();this.VQ._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.
call(this);this.Abf._ReInit();this.Aep._ReInit();this.VQ._ReInit();this.Text.R(A.
aaR(A.acf.AB6));this.Abf.T(A.aaR(A.acf.AjH));this.Aep.T(A.aaR(A.acf.AGq));this.VQ.
T(A.aaR(A.acf.A5B));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fs._Mark.
call(this,D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aep)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.VQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.ART={AnimalTableFields:null,Ay:null,Y:
null,JP:null,CP:function(){this.AiL(this);},Init:function(aArg){A.zV([this,this.
AiL],this.AnimalTableFields,0);A.pe([this,this.AiL],this);},DE:function(G){C.Fs.
DE.call(this,G);this.MS(this);},Ln:function(){if(!this.BP){this.BP=A._NewObject(
C.N,0);this.BP.CE=[this,this.Ew];this.BP.Cf=[this,this.A3n];this.BP.B$=[this,this.
A3S];this.BP.C2(A.aaL(A.ach.Arc));this.BP.Cw(A.aaL(A.ach.Aq6));this.BP.C1(A.aaL(
A.ach.Yy));}return this.BP;},Ew:function(G){this.AA9();this.AaE(this);},AiL:function(
G){this.Ao3();var O;for(O=0;O<this.AnimalTableFields.M$();O=O+1){var Aal=A._GetAutoObject(
C.Ams).OF(O);this.A1s(Aal);}this.J(this.JP,0);A.aaS([this,this.MS],this);},Fk:function(
G){var B;this.Ay.My((B=this.Y.Dc(0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);
this.Ay.Mz(-this.Y.Br[1]);},MS:function(G){var B;this.Y.Vy(null,null);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HI(this.AV,true,null,null);},A1s:function(
Ha){var Aza=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.Sg,0);Aa.T(Aza.BS(Ha));Aa.Aj(true);Aa.G6=Ha;Aa.A_f(this.AnimalTableFields.NY(Ha
));this.J(Aa,0);this.ZD(Aa);},Ao3:function(){var B;var X=this.Y.Ah;while(!!X&&!((
X.U&0x200)===0x200)){var AdM=X;X=X.Ah;if(((AdM.U&0x400)===0x400))this.HO(AdM);}}
,AA9:function(){var B;this.AnimalTableFields.Clear();var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JP)){var Aa=(C.Sg.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.G6);if(Aa.ASI())this.AnimalTableFields.
AUK(Aa.G6);}else A.ab5("%s",Ayu);}X=X.Ah;}this.AnimalTableFields.Ci();},A3n:function(
G){var B;var Aa=(C.Sg.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAp=(C.Sg.isPrototypeOf(
B=Aa.Ah)?B:null);if(!!AAp){this.AhE(AAp,Aa);A.pe([this,this.MS],this);}}},A3S:function(
G){var B;var Aa=(C.Sg.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AAV=(C.Sg.isPrototypeOf(
B=Aa.AJ)?B:null);if(!!AAV){this.AhE(Aa,AAV);A.pe([this,this.MS],this);}}},AqJ:function(
G){var B;A._GetAutoObject(A.Device.Device).Asq(this);A.pe([this,this.AiL],this);
},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Au$._Init.call(this.JP={I:this},0);
this.__proto__=C.ART;this.H(Qc);this.Text.R(A.aaR(A.acf.AGq));this.Ay.H(It);this.
Y.H(BaS);this.Y.JT(1);this.JP.H(AIb);this.JP.Aj(true);this.JP.T(A.aaR(A.acf.A6f)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JP,0);this.Y.Em=[this,this.Fk];
this.JP.AR=[this,this.AqJ];this.AnimalTableFields=A._GetAutoObject(C.Ams);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fs;this.Ay._Done();this.Y._Done();this.
JP._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JP._ReInit();this.Text.R(A.aaR(A.acf.AGq));this.
JP.T(A.aaR(A.acf.A6f));this.CP();},_Mark:function(D){var B;C.Fs._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.ARS={Y:null,BZ:null,Da:null,CG:null,GQ:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UP:null,Init:function(aArg){A.zX([this,this.AuQ],this.BZ.Q,0);A.zX([
this,this.AM6],this.CG.Q,0);A.zX([this,this.AV4],this.GQ.Q,0);A.zX([this,this.Avt
],this.Da.Q,0);this.Bb(this.BZ);},DE:function(G){C.Fs.DE.call(this,G);this.MS(this
);},Ln:function(){if(!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.
AaE];this.BP.Cf=null;this.BP.B$=null;this.BP.CU(A.jV);this.BP.Cw(null);this.BP.C1(
A.aaL(A.ach.Yy));}return this.BP;},Fk:function(G){var B;this.Ay.My((B=this.Y.Dc(
0x1))[3]-B[1]);this.Ay.MB((B=this.Y.M)[3]-B[1]);this.Ay.Mz(-this.Y.Br[1]);},MS:function(
G){var B;this.Y.Vy(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HI(
this.AV,true,null,null);},AuQ:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.BZ.Q,F[1].call(F[0])));},AV4:function(G){var F;A._GetAutoObject(A.Device.
Device).Nl((F=this.GQ.Q,F[1].call(F[0])));},Avt:function(G){var F;A._GetAutoObject(
A.Device.Device).JU((F=this.Da.Q,F[1].call(F[0])));},AM6:function(G){var F;A._GetAutoObject(
A.Device.Device).N1((F=this.CG.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fs._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AaR._Init.call(this.BZ={
I:this},0);C.AaR._Init.call(this.Da={I:this},0);C.AaR._Init.call(this.CG={I:this
},0);C.AaR._Init.call(this.GQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UQ._Init.call(this.UP={I:
this},0);this.__proto__=C.ARS;var B;this.H(Qc);this.Text.R(A.aaR(A.acf.AjH));this.
Y.H(BaS);this.Y.JT(1);this.BZ.H(Ah1);this.BZ.Ar(true);this.BZ.Aj(true);this.BZ.T(
A.aaR(A.acf.Aft));this.Da.H(Ayn);this.Da.Ar(true);this.Da.Aj(true);this.Da.T(A.aaR(
A.acf.Afo));this.CG.H(Aoo);this.CG.Ar(true);this.CG.Aj(true);this.CG.T(A.aaR(A.acf.
Breed));this.GQ.H(As$);this.GQ.Ar(true);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jh
));this.Ay.H(It);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UP.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.BZ,0);this.J(this.Da,0);this.J(this.CG,0);this.J(
this.GQ,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.BZ.Zs(A.aaL(A.fl.H1));
this.BZ.Zt(A.aaL(A.fl.H1));this.BZ.Au([B=this.AnimalType,B.B_,B.Cb]);this.BZ.CK(
this.AnimalType);this.Da.Zs(A.aaL(A.fl.H1));this.Da.Zt(A.aaL(A.fl.H1));this.Da.Au([
B=this.Gender,B.B_,B.Cb]);this.Da.CK(this.Gender);this.CG.Zs(A.aaL(A.fl.H1));this.
CG.Zt(A.aaL(A.fl.H1));this.CG.Au([B=this.Breed,B.B_,B.Cb]);this.CG.CK(this.Breed
);this.GQ.Zs(A.aaL(A.fl.H1));this.GQ.Zt(A.aaL(A.fl.H1));this.GQ.Au([B=this.UP,B.
B_,B.Cb]);this.GQ.CK(this.UP);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Y._Done();this.BZ._Done();this.Da._Done();this.CG._Done();this.GQ._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UP._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this
);this.Y._ReInit();this.BZ._ReInit();this.Da._ReInit();this.CG._ReInit();this.GQ.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UP._ReInit();this.Text.R(A.aaR(A.acf.AjH));this.BZ.T(A.aaR(
A.acf.Aft));this.Da.T(A.aaR(A.acf.Afo));this.CG.T(A.aaR(A.acf.Breed));this.GQ.T(
A.aaR(A.acf.Jh));},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.BZ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Amw={CB:0,Alv:A.abi(17,0,null),OF:function(HA){return this.Alv.Get(HA);},M$:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alv.Set(
O,0);this.CB=0;},J:function(Aag){if(this.CB>=17)A.ab5("%s",BuB);else{this.Alv.Set(
this.CB,Aag);this.CB=this.CB+1;}},Ci:function(){},E3:function(Ah5){var AJ3=Ah5.indexOf(
String.fromCharCode(0x2C),0);var A1R=A.jV;var O=0;this.CB=0;while(O<17)if(Ah5===
A.jV)O++;else{if(AJ3===-1){A1R=Ah5;Ah5=A.jV;}else{A1R=A.abV(Ah5,AJ3);Ah5=A.ab1(Ah5
,0,AJ3+1);}var Aal=A.abZ(A1R,0,10)|0;if(this.BjX(Aal)){this.Alv.Set(this.CB,Aal);
this.CB=this.CB+1;O++;}AJ3=Ah5.indexOf(String.fromCharCode(0x2C),0);}if(Ah5!==A.
jV)A.ab5("%s",BuC);},toString:function(){var B;var AAn=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAn=AAn+AId;AAn=AAn+(((B=this.Alv.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAn;},Contains:function(Aag){var O;for(O=0;O<this.CB;O=O+1)if(this.Alv.
Get(O)===Aag)return true;return false;},BjX:function(Aag){return true;},_Init:function(
aArg){(this.Alv=[]).__proto__=C.Amw.Alv;this.__proto__=C.Amw;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AMa={AfQ:null,Init:function(aArg){var B;A.
zX([this,this.BeR],[B=A._GetAutoObject(A.Device.Device),B.A8s,B.Ba$],0);A.zX([this
,this.BeS],[B=A._GetAutoObject(A.Device.Device),B.A8t,B.Bba],0);A.pe([this,this.
BeR],this);A.pe([this,this.BeS],this);},Clear:function(){C.Amw.Clear.call(this);
this.AfQ.Clear();},Ci:function(){A._GetAutoObject(A.Device.Device).ArG(this.AfQ.
toString());A._GetAutoObject(A.Device.Device).ArH(this.toString());},BeR:function(
G){this.AfQ.E3(A._GetAutoObject(A.Device.Device).ABH);A.we(this,0);},BeS:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABI);A.we(this,0);},NY:function(Aag
){return this.AfQ.Contains(Aag);},AUK:function(Aag){if(!this.NY(Aag))this.AfQ.J(
Aag);},AOL:function(){return this.AfQ.M$();},_Init:function(aArg){C.Amw._Init.call(
this,aArg);this.__proto__=C.AMa;this.AfQ=A._NewObject(C.Amw,0);this.Init(aArg);}
,_Mark:function(D){var B;C.Amw._Mark.call(this,D);if((B=this.AfQ)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Ams={_Init:function(){C.AMa._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ARY={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hn(10);},Bl:function(aSize){C.Ub.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mo.M[0]));},Ai:function(Ae){var B;C.Ub.
Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FS=A.jb.Aeb;var GY=A.jb.Bm;if(this.Hl){FS=A.jb.Bm;GY=A.jb.Text;}if(!Hf
){this.Background.L(FS);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FS);this.V.L(GY);}this.LI=Hf;this.KG=Fw;this.Qv=GE;},_Init:function(
aArg){C.Ub._Init.call(this,aArg);this.__proto__=C.ARY;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AMZ={YQ:null,Ak_:null,Ln:function(){if(
!this.BP){this.BP=A._NewObject(C.N,0);this.BP.CE=[this,this.AaE];this.BP.Cf=null;
this.BP.B$=null;this.BP.CU(A.jV);this.BP.Cw(null);this.BP.C1(A.aaL(A.ach.Yy));}return this.
BP;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.AaR._Init.call(this.
YQ={I:this},0);C.AEc._Init.call(this.Ak_={I:this},0);this.__proto__=C.AMZ;var B;
this.H(KZ);this.YQ.H(KZ);this.YQ.T(A.aaR(A.acf.Display));this.Ak_.Au(A._GetAutoObject(
A.Device.Device).Aqq);this.J(this.YQ,0);this.YQ.Zs(A.aaL(A.fl.H1));this.YQ.Zt(A.
aaL(A.fl.H1));this.YQ.Au([B=this.Ak_,B.B_,B.Cb]);this.YQ.CK(this.Ak_);this.Ak_.Bnt([
B=A._GetAutoObject(A.Device.Device),B.AEC,B.AIR]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YQ._Done();this.Ak_._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YQ._ReInit();this.Ak_._ReInit(
);this.YQ.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak_)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEc={AbM:null,ListViewScopeToString:null,Du:function(){return 2;},C6:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gl:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BS(aIndex
);},DZ:function(A7){return A7;},H3:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbM)(F=this.AbM,F[2].call(F[0],E));},Bnt:function(E
){if(A.aaZ(this.AbM,E))return;if(!!this.AbM)A.z$([this,this.A3Y],this.AbM,0);this.
AbM=E;if(!!this.AbM)A.zX([this,this.A3Y],this.AbM,0);A.pe([this,this.A3Y],this);
},A3Y:function(G){var F;if(!!this.AbM)this.Q=(F=this.AbM,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEc;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AVn={
ACh:0,ACg:0,Ai:function(Ae){C.OX.Ai.call(this,Ae);this.Background.L(this.ACg);this.
V.L(this.ACh);},Bmj:function(E){if(this.ACh===E)return;this.ACh=E;this.Am();},Bmi:
function(E){if(this.ACg===E)return;this.ACg=E;this.Am();},_Init:function(aArg){C.
OX._Init.call(this,aArg);this.__proto__=C.AVn;this.Ar(false);this.ACh=A.jb.Text;
this.ACg=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AHn={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.Bel],[B=A._GetAutoObject(A.Device.
Device),B.A81,B.Bbs],0);A.pe([this,this.Bel],this);},Du:function(){return 3;},Gl:
function(aIndex){return this.WeightValuePrecisionToString.BS(this.C6(aIndex));},
Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwV(E);},Bel:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OM;A.abo([this,this.B_,this.
Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHn;this.
Ca.Set(0,0);this.Ca.Set(1,1);this.Ca.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cm;this.WeightValuePrecisionToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AUQ={UD:null,A$M:A.jV,Init:function(aArg){},Bl:function(aSize){C.BW.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UD.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BW.Ai.call(this,Ae);this.UD.L(this.
V.AQ);},BnX:function(E){if(this.A$M===E)return;this.A$M=E;this.UD.R(E);},_Init:function(
aArg){C.BW._Init.call(this,aArg);C.CH._Init.call(this.UD={I:this},0);this.__proto__=
C.AUQ;this.H(AcP);this.UD.H(BuD);this.J(this.UD,0);this.UD.S(A.aaL(A.fl.Af));this.
UD.A2(A.aaL(A.fl.Ak));this.UD.Cu(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BW;this.UD._Done();C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(
this);this.UD._ReInit();this.UD.S(A.aaL(A.fl.Af));this.UD.A2(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BW._Mark.call(this,D);if((B=this.UD)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Wk={ABL:null,MassDeregistrationCriterionToString:
null,Du:function(){return 2;},Gl:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A7=this.C6(aIndex);var M1=this.MassDeregistrationCriterionToString.
BS(this.C6(aIndex));if(!!this.ABL&&!A7)M1=A._GetAutoObject(A.Device.Helper).MG(M1
,O8,(F=this.ABL,F[1].call(F[0])).toFixed());return M1;},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Wk;this.Ca.Set(
0,0);this.Ca.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.ABL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.ANT={Vk:null,Wk:null,Y7:null,JQ:null
,Aub:0,AaT:100,Init:function(aArg){this.Bb(this.Y7);},Ai:function(Ae){C.Ej.Ai.call(
this,Ae);var BCA=((A.aaR(A.acf.Aqy)+A.aaR(A.acf.Colon))+CQ)+this.Aub.toFixed();this.
JQ.BnX(BCA);},CC:function(G){C.Ej.CC.call(this,G);A.zX([this,this.ABx],this.JQ.Q
,0);A.pe([this,this.ABx],this);},E4:function(G){C.Ej.E4.call(this,G);A.z$([this,
this.ABx],this.JQ.Q,0);},DJ:function(G){var F;C.Ej.DJ.call(this,G);this.N.Fc(A.jV
);this.N.Cf=null;if((this.AV===this.JQ)&&!!this.JQ.Q){this.N.B$=[this,this.Be7];
switch((F=this.JQ.Q,F[1].call(F[0]))){case 1:if(!this.Aub)this.N.GW.C3(100);else
this.N.GW.C3(255);break;case 0:{this.N.Fc(A.aaR(A.acf.Bib));this.N.Cf=[this,this.
Bzi];if(this.AaT<=1)this.N.GW.C3(100);else this.N.GW.C3(255);this.N.CU(A.aaR(A.acf.
Bic));this.N.B$=[this,this.BAf];if(this.AaT>=2147483647)this.N.GW.C3(100);else this.
N.GW.C3(255);this.N.WJ=true;}break;default:throw new Error(BuE+(F=this.JQ.Q,F[1].
call(F[0])).toFixed());}this.JQ.Ab0(this.N.B$);}},Be7:function(G){if(this.Aub>0)
A._GetAutoObject(A.Device.Device).A3(108,true,this.Aub.toFixed(),0,[this,this.BAN
]);},ABx:function(G){var F;this.Aub=A._GetAutoObject(A.Device.Helper).Bjj((F=this.
JQ.Q,F[1].call(F[0])),this.AaT);this.Am();A.pe([this,this.ML],this);},Be1:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B9()){A._GetAutoObject(A.Device.
Device).A3(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Arg(
)===false){this.Vk=[this,this.Be1];A.zX([this,this.XE],[B=A._GetAutoObject(A.Device.
Device),B.Wz,B.Xg],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,
this.Agi]);return;}A.zX([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).Gf,
B.SE,B.Fb],0);A._GetAutoObject(A.Device.Device).Asp(1,false);},Agi:function(G){var
B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XE],[B=A._GetAutoObject(A.Device.Device),B.Wz,B.Xg],0);this.
Vk=null;}},XE:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.ZZ===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Agi]);A.z$([this
,this.XE],[B=A._GetAutoObject(A.Device.Device),B.Wz,B.Xg],0);if(!!this.Vk)A.pe(this.
Vk,this);this.Vk=null;}},BAN:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BCv],this);},BCv:function(
G){A._GetAutoObject(A.Device.Helper).ByK(this.Wk.Q,this.AaT);A._GetAutoObject(A.
Device.Device).A3(109,true,this.Aub.toFixed(),0,null);A.pe([this,this.ML],this);
A.pe([this,this.ABx],this);},Al2:function(G){var B;switch(A._GetAutoObject(A.Device.
Device).Gf.EV){case 0:A.z$([this,this.Al2],[B=A._GetAutoObject(A.Device.Device).
Gf,B.SE,B.Fb],0);break;case 3:A._GetAutoObject(A.Device.Device).AqC();break;case
4:{A._GetAutoObject(A.Device.Device).A3(88,true,A.jV,0,null);A._GetAutoObject(A.
Device.Device).Gf.E5();}break;default:;}},BAf:function(G){if(this.AaT<2147483647
)this.AS6(this.AaT+1);},Bzi:function(G){if(this.AaT>1)this.AS6(this.AaT-1);},AS6:
function(E){if(this.AaT===E)return;this.AaT=E;A.pe([this,this.ABx],this);this.JQ.
Am();},BkT:function(){return this.AaT;},_Init:function(aArg){C.Ej._Init.call(this
,aArg);C.Wk._Init.call(this.Wk={I:this},0);C.Co._Init.call(this.Y7={I:this},0);C.
AUQ._Init.call(this.JQ={I:this},0);this.__proto__=C.ANT;var B;this.Dr(C.AO5);this.
Y7.H(IV);this.Y7.Aj(true);this.Y7.T(A.aaR(A.acf.A6y));this.Y7.Bi(false);this.JQ.
H(BuF);this.JQ.Aj(true);this.JQ.T(A.aaR(A.acf.A$4));this.JQ.Bi(true);this.JQ.A_J(
A.aaR(A.acf.Ok));this.J(this.Y7,0);this.J(this.JQ,0);this.Wk.ABL=[this,this.BkT,
this.AS6];this.Y7.AR=[this,this.Be1];this.JQ.AR=[this,this.Be7];this.JQ.Ab0(this.
N.B$);this.JQ.Au([B=this.Wk,B.B_,B.Cb]);this.JQ.CK(this.Wk);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wk._Done();this.Y7._Done();this.JQ._Done();C.
Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Wk._ReInit(
);this.Y7._ReInit();this.JQ._ReInit();this.Y7.T(A.aaR(A.acf.A6y));this.JQ.T(A.aaR(
A.acf.A$4));this.JQ.A_J(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ej._Mark.call(
this,D);if((B=this.Vk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wk).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AO5={_Init:function(aArg){C.KP._Init.call(this,aArg);this.__proto__=C.AO5;this.
Text.R(A.aaR(A.acf.AdV));},_ReInit:function(){C.KP._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdV));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.ANW={
Vk:null,Y6:null,AbR:null,Init:function(aArg){this.Bb(this.Y6);A.pe([this,this.ML
],this);},Be0:function(G){var B;var Az8=A._GetAutoObject(A.Device.Device).AD0();
switch(Az8){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A3(91,true,U1,0,[this,this.Bfi]);break;
case 2:{this.Vk=[this,this.Be0];A.zX([this,this.XE],[B=A._GetAutoObject(A.Device.
Device),B.Wz,B.Xg],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV,0,[this,
this.Agi]);}break;default:throw new Error(BaT+Az8.toFixed());}},Agi:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.XE],[B=A._GetAutoObject(A.Device.Device),B.Wz,B.Xg],0);this.
Vk=null;}},XE:function(G){var B;if(A._GetAutoObject(A.Device.Device).P4.ZZ===3){
A._GetAutoObject(A.Device.Device).A3(74,false,A.jV,0,[this,this.Agi]);A.z$([this
,this.XE],[B=A._GetAutoObject(A.Device.Device),B.Wz,B.Xg],0);if(!!this.Vk)A.pe(this.
Vk,this);this.Vk=null;}},Bfk:function(G){var B;var Az8=A._GetAutoObject(A.Device.
Device).AD1();switch(Az8){case 1:A._GetAutoObject(A.Device.Device).A3(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A3(95,true,A.jV,0,[this
,this.BAO]);break;case 2:{this.Vk=[this,this.Bfk];A.zX([this,this.XE],[B=A._GetAutoObject(
A.Device.Device),B.Wz,B.Xg],0);A._GetAutoObject(A.Device.Device).A3(74,true,A.jV
,0,[this,this.Agi]);}break;case 3:A._GetAutoObject(A.Device.Device).A3(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A3(93,true,A.jV,0,null
);break;default:throw new Error(BaT+Az8.toFixed());}},Bfi:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.Bzm],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
Bzo],this);break;default:throw new Error(BuG+As.Id.toFixed());}},Bzm:function(G){
if(A._GetAutoObject(A.Device.Device).ACq()){var A2$=A._GetAutoObject(A.Device.Device
).An.QK();A._GetAutoObject(A.Device.Device).A3(80,true,A2$.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A3(82,true,A.jV,0,null);A.aaS([this,this.BAJ],
this);},Bzo:function(G){if(A._GetAutoObject(A.Device.Device).AGu()){var A2$=A._GetAutoObject(
A.Device.Device).An.QK();A._GetAutoObject(A.Device.Device).A3(81,true,A2$.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A3(83,true,A.jV,0,null);A.aaS([
this,this.BBp],this);},BAO:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.BCw],this);},BCw:function(
G){A._GetAutoObject(A.Device.Device).A3(92,true,U1,0,[this,this.Bfi]);},BBp:function(
G){A._GetAutoObject(A.Device.Device).A3(92,false,A.jV,0,null);},BAJ:function(G){
A._GetAutoObject(A.Device.Device).A3(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ej._Init.call(this,aArg);C.Co._Init.call(this.Y6={I:this},0);C.Co._Init.call(
this.AbR={I:this},0);this.__proto__=C.ANW;this.Dr(C.AO8);this.Y6.H(IV);this.Y6.Aj(
true);this.Y6.T(A.aaR(A.acf.ACq));this.Y6.Bi(false);this.AbR.H(Qd);this.AbR.Aj(true
);this.AbR.T(A.aaR(A.acf.AGu));this.AbR.Bi(true);this.J(this.Y6,-1);this.J(this.
AbR,-1);this.Y6.AR=[this,this.Be0];this.AbR.AR=[this,this.Bfk];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ej;this.Y6._Done();this.AbR._Done();C.Ej._Done.
call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Y6._ReInit();this.AbR.
_ReInit();this.Y6.T(A.aaR(A.acf.ACq));this.AbR.T(A.aaR(A.acf.AGu));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Vk)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AO8={
_Init:function(aArg){C.KP._Init.call(this,aArg);this.__proto__=C.AO8;this.Text.R(
A.aaR(A.acf.ACw));},_ReInit:function(){C.KP._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACw));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.QD={LX:null
,AUk:0,AD3:false,ADZ:false,AD4:false,Agg:function(G){this.A6i(this);},ATr:function(
E){if(this.LX===E)return;this.LX=E;if(!this.LX)return;this.DP.AutoActions=E;A.zV([
this,this.Bgm],this.LX,0);A.zV([this,this.AoA],this.LX,0);A.pe([this,this.Bgm],this
);A.pe([this,this.AoA],this);},AMb:function(){this.AMd(A.aaR(A.acf.Bab),[this,this.
BCM],[this,this.A8V,this.AFm]);this.AMd(A.aaR(A.acf.AGk),[this,this.BCK],[this,this.
A8S,this.AFk]);this.AMd(A.aaR(A.acf.An1),[this,this.BCL],[this,this.A8T,this.AFl
]);A._GetAutoObject(C.BR).Fz();A._GetAutoObject(C.BR).Mj(A.aaR(A.acf.Bot)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BR).Fz();},AMd:function(Bxd,Byn,BxI){if(!this.LX
)return;this.AuI(Bxd,Byn,BxI);},BCM:function(G){this.AFm(!this.AD4);},BCK:function(
G){this.AFk(!this.ADZ);},BCL:function(G){this.AFl(!this.AD3);},A4o:function(Eh,BxH
){if(!this.LX)return;if(BxH)this.LX.Bhh(Eh);else this.LX.BoM(Eh);this.LX.Ci();},
A46:function(Aig,Aih,ByF){A._GetAutoObject(C.BR).ABJ(Aig,Aih,[this,this.A9a,this.
ATD],ByF);},AGH:function(Eh){if(!this.LX)return;this.LX.AGH(Eh);this.LX.Ci();},AFm:
function(E){if(this.AD4===E)return;this.AD4=E;this.A4o(256,E);A.abo([this,this.A8V
,this.AFm],0);},AFk:function(E){if(this.ADZ===E)return;this.ADZ=E;this.A4o(2,E);
A.abo([this,this.A8S,this.AFk],0);},AFl:function(E){if(this.AD3===E)return;this.
AD3=E;this.A4o(1,E);A.abo([this,this.A8T,this.AFl],0);},Bgm:function(G){this.AFm(
this.LX.Contains(256));this.AFk(this.LX.Contains(2));this.AFl(this.LX.Contains(1
));if(this.LX.M$()>0)this.ATD(this.LX.AC6());},ATD:function(E){if(this.AUk===E)return;
this.AUk=E;A.abo([this,this.A9a,this.ATD],0);},A8V:function(){return this.AD4;},
A8S:function(){return this.ADZ;},A8T:function(){return this.AD3;},A9a:function(){
return this.AUk;},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.QD;},_Mark:function(D){var B;C.GJ._Mark.call(this,D);if((B=this.LX)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.AvZ={Q:null,Ci:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},ADX:
function(Eh){switch(Eh){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},IC:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.IC],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.IC],E,
0);if(!!E)A.pe([this,this.IC],this);},AGH:function(Eh){if(this.M$()>0)this.Axy(this.
M$()-1,Eh);},Bhh:function(Eh){if(this.Contains(Eh))return;if(this.CB>=17){A.ab5(
"%s",AIc);return;}var Az1=0;for(;(Az1<=this.M$())&&(this.OF(Az1)<Eh);Az1++);var ABc=
this.M$()-1;this.J(this.OF(ABc));for(;ABc>Az1;ABc--)this.Axy(ABc,this.OF(ABc-1));
this.Axy(Az1,Eh);},BoM:function(Eh){var index=this.DZ(Eh);if(index<0)return;for(;
index<(this.M$()-1);index++)this.Axy(index,this.OF(index+1));this.Axy(index,0);this.
CB--;},AC6:function(){var Tf=0;if(this.M$()>0)Tf=this.OF(this.M$()-1);return Tf;
},_Init:function(aArg){C.Vx._Init.call(this,aArg);this.__proto__=C.AvZ;},_Mark:function(
D){var B;C.Vx._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Av9={_Init:function(){C.AvZ.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A85,B.Bbw
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Av_={
_Init:function(){C.AvZ._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A86,B.Bbx]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Ax6={_Init:function(){C.AvZ._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A9C,B.BbM]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADt={QU:null,AjX:null,_Init:function(aArg){C.Dd._Init.
call(this,aArg);C.CH._Init.call(this.QU={I:this},0);A.acg.Ap._Init.call(this.AjX={
I:this},0);this.__proto__=C.ADt;this.Es.H(BuH);this.DS.H(BuI);this.QU.H(BuJ);this.
QU.R(A.aaR(A.acf.Uh));this.QU.A6(0x11);this.QU.L(A.jb.Text);this.AjX.H(A0e);this.
AjX.L(A.jb.Text);this.J(this.QU,0);this.J(this.AjX,0);this.QU.S(A.aaL(A.fl.Af));
this.QU.A2(A.aaL(A.fl.Ak));this.QU.Cu(A.aaL(A.fl.Bh));this.AjX.Ax(A.aaL(A.ach.AvD
));},_Done:function(){this.__proto__=C.Dd;this.QU._Done();this.AjX._Done();C.Dd.
_Done.call(this);},_ReInit:function(){C.Dd._ReInit.call(this);this.QU._ReInit();
this.AjX._ReInit();this.QU.R(A.aaR(A.acf.Uh));this.QU.S(A.aaL(A.fl.Af));this.QU.
A2(A.aaL(A.fl.Ak));this.QU.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Dd._Mark.
call(this,D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.AB$={
AP:null,SW:null,OY:null,AKw:A.jV,Beu:A.jV,Mh:0,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.OY.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.OY.M[2]-1,0,this.OY.M[2]+1,aSize[1]]);this.
SW.H([this.OY.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);
this.OY.L(this.V.AQ);this.SW.L(this.V.AQ);this.T(this.AKw);this.OY.R(this.Beu);this.
SW.R(this.Mh.toFixed());},Ch:function(Ad){if(!this.AX)return;this.Hs=Ad;if(!!this.
AX){var Ke=this.AX.KO(Ad,26);var A23=A._GetAutoObject(A.Device.Converter).Rj(Ke);
this.AKw=A.abV(A23,A23.length-5);this.Beu=A.ab2(A23,5);if((A._GetAutoObject(A.Device.
Converter).S2(Ke)===10)&&!(Math.trunc(Ke/10000000000)%100))this.AKw=A.ab1(this.AKw
,3,2);this.Mh=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.call(
this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CH._Init.call(this.SW={I:this
},0);C.CH._Init.call(this.OY={I:this},0);this.__proto__=C.AB$;this.V.H(BuK);this.
AP.H(A0h);this.AP.L(A.jb.Bc);this.SW.H(A0i);this.OY.H(BuL);this.J(this.AP,0);this.
J(this.SW,0);this.J(this.OY,0);this.V.S(A.aaL(A.fl.Bh));this.V.A2(A.aaL(A.fl.Bh)
);this.SW.S(A.aaL(A.fl.Ak));this.SW.A2(A.aaL(A.fl.Bh));this.SW.Cu(A.aaL(A.fl.Bh)
);this.OY.S(A.aaL(A.fl.Af));this.OY.A2(A.aaL(A.fl.Bh));this.OY.Cu(A.aaL(A.fl.Bh)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.SW.
_Done();this.OY._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.SW._ReInit();this.OY._ReInit();this.V.S(A.aaL(
A.fl.Bh));this.V.A2(A.aaL(A.fl.Bh));this.SW.S(A.aaL(A.fl.Ak));this.SW.A2(A.aaL(A.
fl.Bh));this.SW.Cu(A.aaL(A.fl.Bh));this.OY.S(A.aaL(A.fl.Af));this.OY.A2(A.aaL(A.
fl.Bh));this.OY.Cu(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListNaisIdAnimalIdItem"
};C.APy={Q:null,Init:function(aArg){var B;this.AA3(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft]);},AEP:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E_(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DL(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Np(FilterCriterion);var Ai5=this.Awj();if((Ai5.length>
0)&&(Ai5!==U1)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai5,0,6,false);Filter.CW(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.AeZ(false);},AA3:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).E_();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DL(26,4))?B:null);if(!!FilterCriterion)Filter.Np(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C4],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C4],E,
0);if(!!E)A.pe([this,this.C4],this);},C4:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATk(A.jV);return;}var Ay3=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DL(26,4))?B:null);if(!Ay3){this.AW.ATk(
U1);this.AW.AeZ(true);}else this.AW.ATk(Ay3.A5);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.APy;this.AW.AwO(0);this.AW.Bnf(true);this.AW.Dj=[
this,this.AEP];this.Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVC={FD:null,C$:null,Dm:null,EL:null,AsO:null,Init:function(aArg){var B;A.zX([
this,this.Bfs],[B=A._GetAutoObject(A.Device.Device),B.AS1,B.A0C],0);A.zX([this,this.
Adx],[B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3],0);A.zX([this,this.Adx],[B=
A._GetAutoObject(A.Device.Device),B.Uk,B.U4],0);A.pe([this,this.Bfs],this);A.pe([
this,this.Adx],this);},Bfs:function(G){var AaL=false;switch(A._GetAutoObject(A.Device.
Device).An6){case 0:AaL=false;break;case 3:AaL=true;break;default:throw new Error(
BuM+A._GetAutoObject(A.Device.Device).An6.toFixed());}A._GetAutoObject(A.Device.
Helper).J0(this.C$,AaL);A._GetAutoObject(A.Device.Helper).J0(this.Dm,AaL);A._GetAutoObject(
A.Device.Helper).J0(this.EL,AaL);},Adx:function(G){var F,Cs;if(((F=this.C$.Q,F[1
].call(F[0]))+(Cs=this.Dm.Q,Cs[1].call(Cs[0])))>12)(Cs=this.Dm.Q,Cs[2].call(Cs[0
],12-(F=this.C$.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cg._Init.call(this
,aArg);C.BW._Init.call(this.FD={I:this},0);C.Ir._Init.call(this.C$={I:this},0);C.
Ir._Init.call(this.Dm={I:this},0);C.Av3._Init.call(this.EL={I:this},0);C.AVB._Init.
call(this.AsO={I:this},0);this.__proto__=C.AVC;var B;this.Ja(A.aaR(A.acf.UnlinkTransponder
));this.FD.H(U0);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqj));this.
FD.Bi(true);this.C$.H(Ali);this.C$.Aj(true);this.C$.Z(true);this.C$.T(A.aaR(A.acf.
AqE));this.C$.Bi(false);this.C$.Ga(2);this.C$.EU(6);this.C$.IQ(A.aaR(A.acf.OD));
this.C$.Jb(A.aaR(A.acf.Ez));this.Dm.H(AcQ);this.Dm.Aj(true);this.Dm.T(A.aaR(A.acf.
Zk));this.Dm.Bi(true);this.Dm.Ga(0);this.Dm.EU(12);this.Dm.IQ(A.aaR(A.acf.OD));this.
Dm.Jb(A.aaR(A.acf.Ez));this.EL.H(Aoq);this.EL.Ar(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar1(A.aaR(A.acf.Aql));this.J(this.FD,0);this.J(this.C$,0);this.
J(this.Dm,0);this.J(this.EL,0);this.FD.Au([B=this.AsO,B.B_,B.Cb]);this.FD.CK(this.
AsO);this.C$.Au([B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3]);this.Dm.Au([B=A.
_GetAutoObject(A.Device.Device),B.Uk,B.U4]);this.EL.DB(A.aaL(A.ach.AjY));this.EL.
OO([B=A._GetAutoObject(A.Device.Device),B.Uj,B.U3]);this.EL.PU([B=A._GetAutoObject(
A.Device.Device),B.Uk,B.U4]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.FD._Done();this.C$._Done();this.Dm._Done();this.EL._Done();this.AsO._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.FD._ReInit(
);this.C$._ReInit();this.Dm._ReInit();this.EL._ReInit();this.AsO._ReInit();this.
Ja(A.aaR(A.acf.UnlinkTransponder));this.FD.T(A.aaR(A.acf.Aqj));this.C$.T(A.aaR(A.
acf.AqE));this.C$.IQ(A.aaR(A.acf.OD));this.C$.Jb(A.aaR(A.acf.Ez));this.Dm.T(A.aaR(
A.acf.Zk));this.Dm.IQ(A.aaR(A.acf.OD));this.Dm.Jb(A.aaR(A.acf.Ez));this.EL.Ar1(A.
aaR(A.acf.Aql));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVB={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.BgV],[B=A._GetAutoObject(A.Device.Device),B.AS1,B.A0C],0);A.pe([
this,this.BgV],this);},Du:function(){return 2;},Gl:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BS(this.C6(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axe(E);},BgV:function(G){this.Q=A._GetAutoObject(A.Device.Device).An6;A.
abo([this,this.B_,this.Cb],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVB;this.Ca.Set(0,0);this.Ca.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMM.__proto__=A.Core.Root;C.AB.__proto__=C.Abh;C.WM.__proto__=
A.Core.P;C.Oy.__proto__=A.Core.P;C.ZA.__proto__=A.acl.Gm;C.Ek.__proto__=A.Core.P;
C.X0.__proto__=C.AB;C.AU4.__proto__=C.AB;C.AvC.__proto__=C.AB;C.Ra.__proto__=C.AB;
C.Fo.__proto__=C.Hi;C.Ay.__proto__=A.Core.P;C.Cg.__proto__=C.AB;C.Aq0.__proto__=
C.BQ;C.BQ.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADl.__proto__=C.Am0;C.AGZ.
__proto__=C.DR;C.Co.__proto__=C.OX;C.Ds.__proto__=C.Eg;C.Ir.__proto__=C.Ds;C.BW.
__proto__=C.Ds;C.SR.__proto__=C.Ds;C.OK.__proto__=C.Cm;C.Rf.__proto__=C.AC;C.AVh.
__proto__=C.Ba;C.Gc.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GJ.__proto__=C.AB;C.
AB_.__proto__=C.Ba;C.Ad$.__proto__=C.AB;C.Mn.__proto__=C.Oy;C.AVc.__proto__=C.AB;
C.AqZ.__proto__=C.ADl;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AUT.__proto__=C.Aco;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.Asu.__proto__=A.Core.P;C.AGL.__proto__=C.Ds;C.CH.__proto__=A.Core.P;C.
AjS.__proto__=C.Ys;C.Amv.__proto__=C.Re;C.AhB.__proto__=A.Core.P;C.Ej.__proto__=
C.AB;C.AT6.__proto__=C.AB;C.Mq.__proto__=C.Co;C.Anj.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abh;C.APO.__proto__=C.OverlayMenu;C.GK.__proto__=A.Core.P;C.Abh.__proto__=
A.Core.P;C.AUY.__proto__=A.acl.Aen;C.Am0.__proto__=C.BQ;C.ADm.__proto__=C.Am0;C.
Km.__proto__=C.AC;C.AUV.__proto__=C.Ds;C.AGl.__proto__=C.AB;C.HY.__proto__=C.AB;
C.Wu.__proto__=C.Ars;C.IK.__proto__=C.ADm;C.I4.__proto__=C.AB;C.AMk.__proto__=C.
AGl;C.AMg.__proto__=C.GJ;C.ANB.__proto__=C.GJ;C.Aer.__proto__=C.Co;C.QF.__proto__=
C.Aer;C.APB.__proto__=C.BQ;C.AjT.__proto__=C.BQ;C.DF.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Gd.__proto__=C.AC;C.Afn.__proto__=C.BW;C.AUl.__proto__=C.AB;C.AbS.__proto__=
C.Co;C.Ub.__proto__=C.Co;C.ANN.__proto__=C.Cg;C.AVj.__proto__=C.Cg;C.AN0.__proto__=
C.Cg;C.AUx.__proto__=C.Cg;C.W1.__proto__=A.Core.P;C.QX.__proto__=C.Fo;C.D2.__proto__=
A.Core.P;C.T9.__proto__=C.AB;C.AVT.__proto__=C.GJ;C.AMl.__proto__=C.Ax4;C.AVE.__proto__=
C.Cg;C.AeQ.__proto__=C.AC;C.Ax4.__proto__=C.AB;C.AV2.__proto__=C.Cg;C.AUU.__proto__=
C.Aco;C.ABF.__proto__=A.Graphics.Hz;C.Aqf.__proto__=C.AB;C.ARP.__proto__=A.Core.
P;C.Fs.__proto__=C.OverlayMenu;C.AaR.__proto__=C.BW;C.Ajk.__proto__=C.Co;C.AL4.__proto__=
C.Fs;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AL_.__proto__=C.Vx;C.AL$.
__proto__=C.Fs;C.Sg.__proto__=C.Ub;C.AMR.__proto__=C.Vx;C.Wm.__proto__=C.Fo;C.Vu.
__proto__=A.Core.P;C.Kx.__proto__=A.Core.P;C.ASb.__proto__=C.HY;C.AUo.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANC.__proto__=C.Amv;C.Hi.__proto__=A.
Core.P;C.AVV.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aa2.
__proto__=C.Gd;C.AxW.__proto__=C.ABF;C.AT1.__proto__=C.OverlayMenu;C.AOF.__proto__=
A.Core.P;C.N3.__proto__=A.Core.P;C.AT2.__proto__=A.Core.P;C.AUX.__proto__=A.acl.
Aen;C.AkV.__proto__=C.Ir;C.Amx.__proto__=C.OverlayMenu;C.ACb.__proto__=C.Ba;C.Yt.
__proto__=C.AjT;C.AqI.__proto__=C.HY;C.Acn.__proto__=C.Ds;C.WeightRecordingScope.
__proto__=C.AC;C.AuN.__proto__=C.AB;C.AUW.__proto__=C.Ir;C.AMi.__proto__=C.AB;C.
Ars.__proto__=C.HY;C.AHi.__proto__=A.Core.P;C.AVY.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeS.__proto__=C.Eg;C.Av4.__proto__=C.AeS;C.SetTransponderScreen.__proto__=
C.Ra;C.ADu.__proto__=C.EB;C.AHm.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mi.__proto__=C.Ra;C.AL2.__proto__=C.Mi;C.ManualActionScanScreen.__proto__=C.Mi;
C.AL3.__proto__=A.Core.P;C.APF.__proto__=C.Dd;C.ADs.__proto__=C.Dd;C.TX.__proto__=
C.Dd;C.APH.__proto__=C.Dd;C.ANg.__proto__=C.Ba;C.M6.__proto__=C.Ba;C.ANe.__proto__=
C.Ba;C.Js.__proto__=A.Core.P;C.ANd.__proto__=C.Ba;C.AmZ.__proto__=C.TH;C.AGb.__proto__=
C.Axo;C.AkI.__proto__=C.Axo;C.Zz.__proto__=C.AkI;C.ANJ.__proto__=C.OX;C.OX.__proto__=
C.Hi;C.APK.__proto__=C.EB;C.DS.__proto__=A.Core.P;C.ANa.__proto__=C.AjD;C.ADo.__proto__=
C.TY;C.Kl.__proto__=A.Core.P;C.AmH.__proto__=C.Mq;C.AO2.__proto__=C.Kq;C.AutoRegistrationMode.
__proto__=C.AC;C.APL.__proto__=C.EB;C.TB.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMw.__proto__=C.R0;C.AMK.__proto__=C.AaY;C.AMF.__proto__=C.AaY;C.AUn.__proto__=
C.Ba;C.APJ.__proto__=C.EB;C.AMz.__proto__=C.AaY;C.IG.__proto__=C.I3;C.RT.__proto__=
C.FA;C.RY.__proto__=C.FA;C.TA.__proto__=C.JK;C.QE.__proto__=C.FA;C.Tz.__proto__=
C.JK;C.AMh.__proto__=C.Aqf;C.ARc.__proto__=C.Cg;C.AaY.__proto__=C.D9;C.Kk.__proto__=
C.Cm;C.ARL.__proto__=C.Cg;C.AMu.__proto__=C.K$;C.AMv.__proto__=C.D9;C.AMs.__proto__=
C.K$;C.AMt.__proto__=C.K$;C.WO.__proto__=C.Eg;C.AUR.__proto__=C.WO;C.RZ.__proto__=
C.FA;C.APA.__proto__=C.IK;C.AND.__proto__=C.AB;C.ANk.__proto__=C.Ad$;C.AMf.__proto__=
C.I4;C.AVS.__proto__=C.I4;C.AO4.__proto__=C.Kq;C.APC.__proto__=C.Kq;C.APG.__proto__=
C.TY;C.ANf.__proto__=C.AjD;C.TY.__proto__=C.Dd;C.Aqt.__proto__=A.acv.ACl;C.AjD.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.AM3.__proto__=C.DR;C.O2.__proto__=C.DR;C.AqX.__proto__=
A.Core.P;C.AMB.__proto__=C.Gc;C.AUr.__proto__=A.Core.P;C.K$.__proto__=C.D9;C.ANK.
__proto__=C.Cg;C.Au$.__proto__=C.Co;C.ADi.__proto__=C.BQ;C.ADj.__proto__=C.BQ;C.
FA.__proto__=C.JK;C.AOI.__proto__=C.GJ;C.AOH.__proto__=C.I4;C.APg.__proto__=C.Kq;
C.ADq.__proto__=C.Dd;C.AB9.__proto__=C.Ba;C.AUm.__proto__=C.AhB;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASn.
__proto__=C.QD;C.ASm.__proto__=C.I4;C.ADk.__proto__=C.Kq;C.ABS.__proto__=C.Gd;C.
AL7.__proto__=C.Fs;C.AMj.__proto__=C.AuN;C.NewAnimalSetTransponderScreen.__proto__=
C.Asz;C.C8.__proto__=C.AC;C.O1.__proto__=A.Core.P;C.RU.__proto__=C.FA;C.RW.__proto__=
C.FA;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.ARW.__proto__=C.OverlayMenu;
C.VQ.__proto__=C.Ub;C.Av3.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.TB;
C.AnimalMultiInfoScreen.__proto__=C.TB;C.AMy.__proto__=C.OverlayMenu;C.I9.__proto__=
A.Core.P;C.AL6.__proto__=C.GJ;C.AL5.__proto__=C.I4;C.APz.__proto__=C.IK;C.AsJ.__proto__=
C.O1;C.Arb.__proto__=C.O1;C.Au7.__proto__=C.AC;C.AMq.__proto__=C.AC;C.AGK.__proto__=
C.Eg;C.G5.__proto__=A.Core.P;C.ARf.__proto__=C.HK;C.AVJ.__proto__=C.X0;C.AR9.__proto__=
C.Wu;C.ADT.__proto__=C.Lg;C.HK.__proto__=C.G5;C.Lg.__proto__=C.G5;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvT.__proto__=C.HK;C.AUP.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.Asz;C.ReasonOfLeaving.__proto__=C.AC;C.OU.__proto__=C.BW;C.AeV.__proto__=
C.El;C.AR2.__proto__=C.El;C.AR1.__proto__=C.El;C.El.__proto__=A.Core.P;C.Rb.__proto__=
C.Eg;C.ARg.__proto__=C.Lg;C.AvS.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.FC.
__proto__=C.AB;C.AOh.__proto__=C.AB;C.AOk.__proto__=C.FC;C.AOl.__proto__=C.FC;C.
AqL.__proto__=C.FC;C.Abt.__proto__=C.AjS;C.Kq.__proto__=C.AjS;C.AvA.__proto__=C.
Abt;C.APe.__proto__=C.Abt;C.APd.__proto__=C.Abt;C.APc.__proto__=C.BQ;C.Aey.__proto__=
C.EB;C.AmP.__proto__=C.Ba;C.Ajs.__proto__=C.IG;C.ACL.__proto__=A.Core.P;C.AkS.__proto__=
A.Core.P;C.Re.__proto__=C.AB;C.AVi.__proto__=C.Re;C.APf.__proto__=C.BQ;C.Dd.__proto__=
C.EB;C.KP.__proto__=C.BQ;C.AO_.__proto__=C.KP;C.APa.__proto__=C.KP;C.Yn.__proto__=
C.AmP;C.Agz.__proto__=C.Hi;C.AN6.__proto__=C.GJ;C.AN5.__proto__=C.I4;C.APb.__proto__=
C.Kq;C.Abo.__proto__=C.Acn;C.AjK.__proto__=C.QF;C.AB3.__proto__=C.QF;C.APE.__proto__=
C.Dd;C.ANc.__proto__=C.Ba;C.RX.__proto__=C.FA;C.AMr.__proto__=C.FA;C.ANY.__proto__=
C.Ej;C.ANZ.__proto__=C.Ej;C.AO$.__proto__=C.KP;C.Nh.__proto__=C.AbS;C.ANU.__proto__=
C.Ej;C.AO6.__proto__=C.KP;C.PQ.__proto__=C.Co;C.Sh.__proto__=C.AB;C.AOi.__proto__=
C.Sh;C.AOj.__proto__=C.Sh;C.AOm.__proto__=C.AqL;C.AOf.__proto__=C.FC;C.AaX.__proto__=
C.IG;C.Po.__proto__=C.IG;C.AMD.__proto__=C.Amx;C.ARJ.__proto__=C.T9;C.ARI.__proto__=
C.T9;C.ASi.__proto__=C.QD;C.ASh.__proto__=C.I4;C.APt.__proto__=C.Kq;C.AkP.__proto__=
C.GJ;C.AUy.__proto__=C.I4;C.Aev.__proto__=C.Ys;C.AB8.__proto__=C.Ba;C.ADp.__proto__=
C.Dd;C.APv.__proto__=C.BQ;C.Aa0.__proto__=C.NI;C.XT.__proto__=C.NI;C.R0.__proto__=
C.D9;C.XU.__proto__=C.R0;C.XR.__proto__=C.IF;C.AaV.__proto__=C.IF;C.XQ.__proto__=
C.IF;C.AaU.__proto__=C.IF;C.AMA.__proto__=C.AB;C.IF.__proto__=C.I3;C.I3.__proto__=
C.Hi;C.NI.__proto__=C.FA;C.Axn.__proto__=C.Zz;C.ANI.__proto__=C.AmH;C.Axp.__proto__=
C.Zz;C.AUc.__proto__=C.Cg;C.AUa.__proto__=C.El;C.ARd.__proto__=C.Lg;C.AUb.__proto__=
C.El;C.NewMenu.__proto__=C.AB;C.AR_.__proto__=C.HY;C.AMC.__proto__=C.Amx;C.AMS.__proto__=
C.Vx;C.JK.__proto__=C.I3;C.APx.__proto__=C.Yt;C.Abn.__proto__=C.Cm;C.API.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Mi;C.APw.__proto__=C.AqZ;C.Jg.__proto__=A.Core.
P;C.APs.__proto__=C.BQ;C.SetSaveNaisIdScreen.__proto__=C.Ra;C.AN7.__proto__=C.AqI;
C.UP.__proto__=C.Cm;C.UQ.__proto__=C.UP;C.AcK.__proto__=C.UP;C.AdW.__proto__=C.AC;
C.AGJ.__proto__=C.Eg;C.ANX.__proto__=C.Ej;C.AO9.__proto__=C.KP;C.ANV.__proto__=C.
Ej;C.AO7.__proto__=C.KP;C.Aq1.__proto__=C.TX;C.APD.__proto__=C.TX;C.Aqu.__proto__=
C.M6;C.ANb.__proto__=C.M6;C.AR3.__proto__=C.AeV;C.Ys.__proto__=C.BQ;C.Aco.__proto__=
C.BW;C.FK.__proto__=C.AC;C.AMG.__proto__=C.FK;C.AMH.__proto__=C.FK;C.AMn.__proto__=
C.I4;C.TH.__proto__=C.BW;C.ASa.__proto__=C.AB;C.Asz.__proto__=C.SetTransponderScreen;
C.ADU.__proto__=C.HK;C.AsA.__proto__=C.OU;C.AxA.__proto__=C.OU;C.Acr.__proto__=C.
Cm;C.AV8.__proto__=C.QD;C.AV7.__proto__=C.I4;C.ARh.__proto__=A.Core.P;C.ARe.__proto__=
C.HK;C.ACQ.__proto__=C.Abo;C.LY.__proto__=A.Core.P;C.AUw.__proto__=C.Cg;C.AUv.__proto__=
C.Cg;C.AVA.__proto__=C.Cg;C.Afs.__proto__=C.Cm;C.Jd.__proto__=A.acn.Jd;C.AVo.__proto__=
C.AB;C.AUe.__proto__=C.AkP;C.ADr.__proto__=C.Dd;C.AM1.__proto__=C.AkP;C.AO3.__proto__=
C.Aev;C.APu.__proto__=C.Aev;C.ACa.__proto__=C.Ba;C.AUO.__proto__=C.SR;C.AUS.__proto__=
C.Rb;C.APr.__proto__=C.BQ;C.ARU.__proto__=C.Fs;C.ART.__proto__=C.Fs;C.ARS.__proto__=
C.Fs;C.AMa.__proto__=C.Amw;C.ARY.__proto__=C.Ub;C.AMZ.__proto__=C.OverlayMenu;C.
AEc.__proto__=C.AC;C.AVn.__proto__=C.OX;C.AHn.__proto__=C.Cm;C.AUQ.__proto__=C.BW;
C.Wk.__proto__=C.Cm;C.ANT.__proto__=C.Ej;C.AO5.__proto__=C.KP;C.ANW.__proto__=C.
Ej;C.AO8.__proto__=C.KP;C.QD.__proto__=C.GJ;C.AvZ.__proto__=C.Vx;C.ADt.__proto__=
C.Dd;C.AB$.__proto__=C.Ba;C.APy.__proto__=C.AjT;C.AVC.__proto__=C.Cg;C.AVB.__proto__=
C.Cm;};C._ReInit=function(){var B;if((B=C.AxE._this))B._ReInit(),C.AxE._ReInit.call(
B);if((B=C.AxF._this))B._ReInit(),C.AxF._ReInit.call(B);if((B=C.A8._this))B._ReInit(
),C.A8._ReInit.call(B);if((B=C.Pn._this))B._ReInit(),C.Pn._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afj._this
))B._ReInit(),C.Afj._ReInit.call(B);if((B=C.BR._this))B._ReInit(),C.BR._ReInit.call(
B);if((B=C.WG._this))B._ReInit(),C.WG._ReInit.call(B);if((B=C.AsB._this))B._ReInit(
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
!=D))B._Done(C.BR._this=null);if((B=C.WG._this)&&(B._cycle!=D))B._Done(C.WG._this=
null);if((B=C.AsB._this)&&(B._cycle!=D))B._Done(C.AsB._this=null);if((B=C.AnW._this
)&&(B._cycle!=D))B._Done(C.AnW._this=null);if((B=C.DP._this)&&(B._cycle!=D))B._Done(
C.DP._this=null);if((B=C.AuV._this)&&(B._cycle!=D))B._Done(C.AuV._this=null);if((
B=C.Ams._this)&&(B._cycle!=D))B._Done(C.Ams._this=null);if((B=C.Av9._this)&&(B._cycle
!=D))B._Done(C.Av9._this=null);if((B=C.Av_._this)&&(B._cycle!=D))B._Done(C.Av_._this=
null);if((B=C.Ax6._this)&&(B._cycle!=D))B._Done(C.Ax6._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */