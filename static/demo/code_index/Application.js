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
var Cf=[0,0,240,320];var BD=[0,0,240,40];var E8=[0,0,20,30];var Hs=[6,21,14,25];var
I0=[6,15,14,19];var Iw=[6,9,14,13];var O$=[209,7,229,37];var Qb=[0,40,240,320];var
Qc=[0,228,240,298];var CR=" ";var Fe=[0,40,240,280];var L9=[0,40,232,280];var Qd=[
0,40,116,160];var J9=[114,40,230,160];var Oh=[0,160,116,280];var Qe=[116,160,232
,280];var MQ=[0,280,116,400];var Te=[116,280,232,400];var U0=[0,400,116,520];var
Aab=[116,400,232,520];var Xe=[-1,520,115,640];var Ix=[232,40,240,280];var U1=[5,
40,235,120];var Aac=[120,140,210,230];var U2=[20,140,110,230];var Aad=[0,0,116,120
];var Xf=[0,0,120,120];var Aae=[0,0,116,45];var Aaf=[0,0,8,200];var U3=[0,0,8,20
];var Xg=[30,0,210,40];var Pa=[0,0,40,40];var Aag=[7,8,200,40];var Oi=[0,0,200,40
];var Rp=[6,1];var Xh="ERROR: Invalid value for ItemHighlighting";var Xi=[10,10,
40,30];var Tf=[0,0,120,40];var Xj=[60,0,180,40];var Aah=[120,0,240,40];var Xk=[0
,0,100,40];var Xl=[83,0,157,40];var Tg=[140,0,240,40];var Th=[0,0,20,40];var Ti=[
220,0,240,40];var Aai=[0,0,300,30];var Tj=[0,30,300,60];var Aaj=[0,60,300,90];var
AfE=[0,90,300,120];var Aak=[0,100,300,110];var Xm=[0,50,300,60];var Aal=[0,30,300
,40];var Xn="*";var AhX=[40,40];var K4=[0,0,240,80];var AcQ=[0,0,240,50];var LB=
"Cap";var AhY=[0,40,40,80];var Aoi=[200,40,240,80];var Oj=[30,40,210,80];var Xo=
"--";var Aam="%d";var AfF="%m";var AhZ="%Y";var AcR=" (";var U4=[0,0,232,80];var
Aoj="Date";var Aok=[48,40,88,78];var Aol=[39,40,79,80];var Aom=[80,44,87,77];var
Ald=".";var As5=[88,44,120,77];var Ayb=[120,44,127,77];var Ayc=[127,44,191,77];var
Pb=[0,0,80,40];var Rq="Text";var Ayd=[430,102,430,102];var U5=[0,0,240,240];var As6=[
232,0,240,240];var Aye=[0,10,240,240];var Ayf="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ale=[0,80,240,280];var
Ayg="Unhandled option";var AfG="Unhandled animal list action";var Aon="Animal list content not handled.";
var I1=[0,40,240,80];var Aoo="Set Selected";var As7=" %%";var Xp=[0,180,240,220];
var As8=[82,127,167,150];var As9="Group";var As_=[77,91,167,124];var Aop=[0,0,90
,33];var As$=[4,4,18,29];var Alf=[20,4,34,29];var Ayh=[36,4,50,29];var Ayi=[52,4
,66,29];var Ayj=[68,4,82,29];var Ata="ERROR: Unhandled Device::SyncState";var Ayk=
":\n";var Pc="{1}";var Ayl="{2}";var AWn=[0,49,240,109];var AWo=[0,170,240,243];
var AWp=[0,110,240,170];var AWq=[20,243,220,268];var AHD=[30,8];var AHE="\u2265 ";
var AfH=[0,0,240,160];var Aoq=[0,0,0,0];var AWr=[0,0,240,66];var AHF=[10,0,76,66
];var Alg=[33,33];var AHG=[87,0,153,66];var AHH=[164,0,230,66];var AWs="No statistics available";
var AWt="in this environment.";var AHI=" fps";var AWu="CPU: - %%";var AcS=[0,0,240
,120];var AWv=[130,0,237,20];var AWw=[20,0,120,20];var AWx=[0,20,240,40];var AHJ=[
40,20,100,40];var Atb=[100,20,240,40];var AHK=[0,40,240,60];var AHL=[40,40,100,60
];var Aym=[100,40,240,60];var AHM=[0,60,50,80];var Ayn=[100,60,240,80];var AWy=[
0,80,50,100];var AWz=[100,80,240,100];var AWA=[0,100,50,120];var AWB=[100,100,240
,120];var AHN=[5,5,15,15];var AWC="%H";var MR="%M";var Ayo="Time";var AWD=[79,40
,119,78];var AWE=[125,40,164,80];var AWF=[86,40,126,80];var AWG=":";var AWH=[75,
40,115,80];var AHO=[0,0,240,150];var AWI=[60,0,155,40];var Ayp=[30,0,65,40];var AWJ=[
60,0,100,40];var Atc=[88,0,128,40];var Ayq=[60,0,71,40];var AWK=[60,0,74,40];var
AHP=[90,0,123,40];var AWL=[120,0,161,40];var AHQ=[120,0,165,40];var AHR=[60,0,88
,40];var AHS=[60,0,95,40];var AWM="Did not expect iterator bigger than number of records";
var AHT=[20,0,240,20];var AWN=[0,38,240,40];var AWO=[0,0,8,4];var Rr=[0,0,240,280
];var U6=[0,280,240,320];var AWP="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWQ="]";var AWR="ERROR: Cannot find closing bracket \'}\' in text [";var AWS=
"] opened at index ";var AWT="#";var AWU="ERROR: Invalid parameter: {";var AWV="}";
var Ah0=[20,20];var AHU=[0,12];var AWW="ERROR: Not expected Application::FooterFocus, ";
var AWX="%M:%S";var AHV=[30,150,207,170];var AHW=[20,70,217,194];var Ayr="Unhandled item.";
var Qf=[0,80,240,120];var AWY="Unhandled Overlay Menu ";var AWZ="Invalid bootloader message: ";
var AW0="Unknown USBState: ";var Atd="Invalid fader";var AW1=[2,4,32,40];var AW2=[
29,4,80,40];var AW3=[120,4,200,40];var AW4=[80,0,114,40];var AW5="-1";var AW6="< ";
var Ate=[0,0,232,40];var AW7=[22,40,180,80];var AW8=[2,40,22,80];var AW9=[23,40,
163,80];var AW_=[210,40,230,80];var AW$=[164,40,210,80];var AXa=[169,43,205,77];
var AXb="ERROR: No outlet assigned";var AXc="Unhandled screen";var AXd="ERROR: Cannot cache null screen.";
var AXe="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHX="Untreated Rating Method type!";var Alh="Unhandled animal type";var AXf=[
5,60,235,140];var AXg=[0,130,240,196];var AXh=[49,240,229,280];var Ays="Implement in derived classes!";
var Ali="Implement in derived class";var Ah1=[0,40,230,120];var Ayt=[0,120,230,200
];var Aor=[0,200,230,280];var Ah2=[0,280,230,360];var AXi=[0,360,230,440];var Ayu=[
230,40,238,280];var AHY="WARNING: Unhandled filter field: ";var AfI="Should not happen.";
var AHZ="Invalid Boolean item";var Aan=[0,120,240,160];var Alj=[0,160,240,200];var
Aos=[0,200,240,240];var AXj=[1152,11,1392,51];var AXk=[1152,51,1392,91];var AXl=[
1152,91,1392,131];var AXm=[1152,131,1392,171];var AXn=[1152,171,1392,211];var Atf=[
0,240,240,280];var AH0=[10,0,240,40];var AH1=[190,0,230,40];var AXo=[60,3,95,39];
var AXp=[95,4,200,40];var AXq=[3,3];var AXr=[6,6];var AXs=[59,5,197,35];var AXt=[
59,2,200,38];var AXu=[3,2,43,42];var AXv=[0,17,43,40];var AXw=[50,40];var AXx=[50
,0];var AXy="Illegal shifting direction";var Ayv=[0,0,160,30];var AH2=[0,0,25,30
];var AH3=[27,0,52,30];var AH4=[54,0,79,30];var AH5=[81,0,106,30];var AH6=[108,0
,133,30];var AH7=[135,0,160,30];var AXz="Internal queue error";var AXA="ERROR: No corresponding Id ";
var AXB=" found.";var AXC="ERROR: Error in range test";var AXD=[120,67,210,157];
var AXE=[0,40,240,70];var AXF=[20,67,110,157];var Ayw=[0,160,240,280];var AH8=[20
,77,90,147];var AXG=[0,0,210,40];var AH9=[195,0,235,40];var Ah3=[0,40,232,120];var
U7=[0,120,232,200];var AXH=[0,40,232,200];var Aao=[0,200,232,280];var AXI=[0,320
,240,400];var AXJ=[0,120,53,200];var Alk=[0,280,232,360];var AfJ="%%";var Ah4=[0
,360,232,440];var Aot=[0,440,232,520];var Ayx=[0,80,207,120];var Pd=")";var AXK=
"/";var AH_=[5,0,88,30];var AH$=[88,0,240,30];var AXL="276000312345678";var Ayy=[
5,30,100,60];var AIa=[100,30,240,60];var AXM="Manufacturer";var AXN="Country";var
AXO=[5,60,240,90];var AXP="Niedersachsen";var AXQ=[5,90,145,120];var AXR=[140,90
,240,120];var AXS="Protocol";var AXT=[0,0,120,100];var AIb=[0,40,116,120];var AXU=[
40,80,92,107];var AIc=[0,0,50,23];var AId="ERROR: Unhandled Device::MeasureState";
var Ayz=[0,120,240,280];var AXV=[178,159,248,203];var AXW=[10,145,170,225];var AXX=[
0,61,240,101];var AXY=[0,0,40,23];var AXZ=[101,113,141,136];var AX0=[101,235,141
,258];var AX1=[69,288,101,313];var AX2=[0,40,240,200];var Aou=[0,200,240,280];var
Atg=[0,280,240,360];var AIe="\u2264 ";var AX3=[0,80,94,160];var AX4=[94,80,184,160
];var AX5=[184,80,240,160];var AX6=[197,105,231,139];var AX7=[105,101,173,127];var
AX8=[7,101,75,127];var AIf=[94,125,184,151];var AX9=[2,125,92,151];var AX_=[0,70
,240,101];var AX$=[0,106,240,280];var AYa=[30,40,240,70];var AYb=[0,40,30,70];var
AYc="\u278B";var AYd=[0,0,240,175];var AYe=[0,0,232,175];var AIg=[232,0,240,175];
var AYf="Text Here !";var AYg=[200,0,240,40];var AIh="1";var AIi="2";var AIj="3";
var AIk="4";var AyA=[0,360,232,400];var AyB="ERROR: invalid item class.";var AIl=[
10,220,250,260];var AIm=[185,0,225,40];var AIn="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AyC="ERROR: Received more actions than expected!";var AyD=", ";var AYh=
"ERROR: Cannot set action at position=";var AYi=". Current elements:";var AYj=", max elements:";
var AYk="17";var AYl=[0,0,58,58];var AYm=[0,0,60,60];var AYn=[30,0,58,20];var AYo=[
7,6,25,24];var AYp=[30,60,130,160];var AYq=[0,0,28,20];var AYr=[4,3,40,24];var AYs=[
0,0,42,27];var AyE=[0,0,17,17];var AYt="Unknown direction of counting enum value: ";
var AYu="Unknown id generation method enum value: ";var AyF="Invalid animal id generation method: ";
var Ath="Unhandled popup id";var U8="0";var Ati=";";var AYv=[0,400,230,480];var AYw=[
5,120,235,200];var AYx=[0,640,230,760];var AIo=[0,0,300,200];var AYy=[20,40,220,
80];var AIp=[20,80,220,280];var AYz=[140,0,188,40];var AYA="ERROR: Row containing birth weight could not be loaded";
var AYB=[0,440,230,520];var Atj="ID";var AYC=[40,40,198,70];var AYD="Extra info: ";
var AIq=" -";var AYE=[0,0,230,120];var AYF=[0,0,230,40];var AYG=[0,80,230,120];var
AYH="\xB0Brix";var AcT=[0,320,230,400];var AYI=[0,410,230,490];var AYJ="ERROR: aNumberOfDays can not be < 0 ";
var AYK="{WEIGHTGAIN} ";var AYL="\xB1";var AIr="+";var AYM="{WEIGHTGAIN}";var AYN=
"{DAYS}";var AYO="ERROR: aString can not be null";var AYP=[166,70,240,114];var AYQ=[
0,60,160,120];var AYR=[30,0,240,60];var AIs=[1,6,29,54];var AYS=[30,60,240,120];
var AYT="Con";var AYU=[70,50,170,70];var AIt="Unhandled Device::NaisIdValidationResult: ";
var AIu="Unhandled PopupId";var AYV=[110,123,230,248];var AYW=[5,0,250,40];var AYX=[
102,0,186,40];var AYY=[153,0,240,40];var Rs="-";var Atk=[170,0,240,40];var AIv=[
220,0,320,30];var AIw=[200,20,300,50];var Aov=[180,0,180,40];var Aow=[170,0,170,
40];var AyG="Untreated state";var AYZ="ERROR: Animal id scanned in an unexpected state : ";
var AIx="ERROR: Null animal id scanned.";var AY0=[40,40,235,100];var AY1=[120,100
,210,190];var AY2=[20,100,110,190];var AY3=[0,40,40,100];var AY4="\u278A";var AY5=
"Action untreated";var AY6="ERROR: No corresponding ";var AY7=" action found!";var
AY8="Unhandled action: ";var AY9=[0,186,240,216];var AY_=[0,220,232,280];var AY$=[
5,190,235,270];var AZa=[232,60];var AZb=[0,2];var AZc=[58,58];var AZd="A";var AZe=[
56,0,156,40];var Aox=[156,0,240,40];var AIy=" 7 ";var AZf=[40,0,156,40];var AIz=
"/-1/-2";var AIA=[72,0,144,40];var AcU="\n";var AIB="(";var AZg=[72,0,156,40];var
AIC="%y/%m";var AZh=[70,0,240,40];var AyH=[70,0,120,40];var AZi=[160,0,245,40];var
AZj="- ";var AyI=" - ";var AZk="{parc}{clr3}";var AZl="{clr0}/^{clr2}";var AZm="{clr0}/^{clr1}";
var AID=[0,0,85,40];var Aoy="?";var AIE=[0,0,120,140];var AZn=[0,0,116,40];var AIF=[
15,0,100,40];var AIG=[110,0,200,40];var All=[0,0,34,34];var AZo=[129,0,157,40];var
Aoz=[0,0,25,25];var AZp="\u2611";var AIH="\u2610";var AII=[5,0,72,40];var AZq=[150
,0,240,40];var AZr=[72,0,139,40];var AIJ="Unvalid content class: ";var AZs=[0,320
,240,360];var AZt=[0,360,240,400];var AZu=[144,0,170,40];var AZv=[187,0,213,40];
var AZw=[207,10,233,50];var AZx=[247,20,273,60];var AZy=[140,0,150,100];var AZz=[
165,0,175,100];var AZA=[185,0,195,100];var AZB=[205,0,215,100];var AZC=[211,0,233
,40];var AZD=[189,0,211,40];var AZE=[167,0,189,40];var AZF=[145,0,167,40];var AyJ=[
5,0,240,40];var Aap=[10,0,10,40];var AIK="= \u2211 ";var AyK=[125,0,240,40];var AZG=[
130,0,170,40];var AZH="\xD8 ";var AZI=[100,10,116,36];var AZJ=[117,10,133,36];var
AZK=[135,10,151,36];var AZL="Implement in derieved class";var Atl=[0,80,240,240];
var Atm=[0,120,232,160];var Atn=[0,160,232,200];var Ato=[0,200,232,240];var AyL=[
0,240,232,280];var AoA=[0,320,232,360];var AZM=[-61,360,232,400];var AZN=[0,400,
32,440];var AZO=[0,100];var AZP=[0,40,240,240];var AZQ=[0,50000];var AZR=[0,500];
var AZS=[0,0,240,105];var AoB=[0,105,240,210];var AZT=[0,40,240,81];var AZU=[0,81
,240,122];var AZV=[0,122,240,163];var AZW=[0,163,240,205];var AZX=[0,205,240,240
];var AZY=[0,200];var AZZ=[0,40,240,73];var AyM=[0,0,30,40];var AIL=[0,40,30,80];
var Alm=[60,40];var AyN=[60,0];var AZ0=[10,0,40,40];var AZ1=[0,190,240,260];var AZ2=[
0,130,240,190];var AIM=[40,40,200,130];var AZ3=[90,230,170,253];var AZ4=[80,190,
170,223];var AZ5=[0,130,240,180];var AZ6=[0,250,240,280];var AZ7=[129,0,156,40];
var AZ8=[72,0,100,40];var AZ9=[100,0,129,40];var AZ_=[78,8,103,33];var AIN=[0,0,
300,120];var AZ$=[1,-1];var A0a=[20,40,240,120];var AIO=[20,0,240,40];var A0b=[0
,118,240,120];var AIP=[0,20,130,40];var A0c=[130,20,240,40];var A0d=[0,0,10,20];
var AyO="\u2191";var A0e=[230,0,240,20];var Atp=[0,40,232,80];var A0f=[0,80,232,
160];var A0g=[0,160,230,240];var Atq=" p. p.";var AyP="Unknown animal type";var AyQ=[
80,0,140,40];var A0h=[50,0,172,40];var A0i=[172,0,240,40];var A0j=[0,90,240,92];
var AIQ="Unhandled menu item";var AIR=[0,0,50,30];var Aln=[0,0,30,30];var A0k="No AnimalActionTemperatureScreen found!";
var A0l="840003123456789";var A0m=[40,0,230,40];var A0n=[50,10,230,30];var AyR="No AnimalMultiInfoScreen found!";
var Atr=[0,0,25,40];var AIS="/^";var BaK="?/?";var Brr=[100,4,180,40];var Brs=[65
,0,99,40];var Brt=[165,0,200,40];var BaL=[0,0,60,40];var BaM="9999/^9999";var Bru=
"Invalid index: ";var Brv="Unknown AnimalIdGenerationMethod: ";var Brw="Invalid gender: ";
var Ats="Invalid input state: ";var Brx="Unhandled AnimalIdGenerationMethod";var
Bry=[42,35,67,75];var Brz=[5,35,39,75];var BrA=[70,40,228,70];var BrB="Invalid direction for setting focus";
var Ah5="Invalid index";var BrC="Unvalid direction";var BrD=[0,0,42,30];var BaN=[
22,0,42,30];var BrE=[20,0,40,30];var BrF=[0,0,158,30];var BaO=[32,0,62,30];var BaP=[
64,0,94,30];var BaQ=[96,0,126,30];var BrG=[128,0,158,30];var BrH=" %% ";var BrI=[
0,70,240,220];var BrJ=[0,237,240,307];var BaR="\n44 %% done";var BrK=[0,0,166,30
];var AIT=[0,0,12,30];var AyS=[14,0,26,30];var A0o=[28,0,40,30];var A0p=[42,0,54
,30];var A0q=[56,0,68,30];var A0r=[70,0,82,30];var A0s=[84,0,96,30];var A0t=[98,
0,110,30];var BaS=[112,0,124,30];var A0u=[126,0,138,30];var BrL=[140,0,152,30];var
BrM=[154,0,166,30];var BaT=[20,0,46,30];var BrN="\u2642";var BrO="{fnt3}\u2642{fnt1}";
var BrP="\u2640";var BrQ="{fnt3}\u2640{fnt1}";var BrR="{parc}";var BrS=[30,30,210
,80];var BrT="Implement in derieved class!";var BrU=[60,4,226,34];var BaU=[30,4,
58,34];var BaV=[4,0,27,40];var BrV=[116,4,228,34];var BrW=[60,4,86,34];var BrX=[
88,4,114,34];var AoC="Implement in derived class!";var BaW="Implement in derived class.";
var BrY="Invalid nais id view: ";var BrZ=[0,35,240,75];var Br0=[0,0,110,30];var Br1=[
0,0,26,30];var Br2="100";var A0v="\n\n";var Br3=[240,240];var Br4=[0,240];var Br5=
"Unknown rated attribute: ";var Br6=[120,80,240,280];var Br7=[0,80,120,280];var AIU=
" %% (";var AyT=" \xB1 ";var AyU=" (n = ";var A0w=[0,80,232,120];var Br8=[0,242,
232,282];var A0x=[0,280,232,320];var Br9=[35,0,200,40];var Br_=[1,0,31,40];var Br$=[
32,40];var Bsa=[32,0];var Bsb=[3,0,83,40];var BaX=[180,0,240,40];var Bsc=[120,0,
180,40];var Bsd=[65,0,125,40];var Bse=[0,0,120,200];var Bsf=[0,40,120,150];var BaY=[
15,160,60,190];var BaZ=[60,160,105,190];var Bsg=[0,65,240,135];var Bsh=[10,112,170
,192];var Bsi=[178,129,248,173];var Bsj=[0,40,240,110];var Bsk=[10,98,170,178];var
Bsl=[178,112,248,156];var Bsm=[85,190,160,265];var Bsn=[89,194,155,260];var Bso=[
26,190,111,250];var Bsp=[125,181,225,211];var Bsq=[100,220,183,250];var Bsr="38.7";
var Bss=[180,220,225,250];var Bst="\xB0C";var Bsu=[0,99,240,178];var Bsv=[100,280
,140,320];var Bsw=[0,26,240,105];var Ba0=[30,40];var Ba1=[30,0];var Bsx=[149,0,200
,40];var Bsy=[145,40];var Bsz=[145,0];var BsA=[38,0,88,40];var A0y=[0,0,35,40];var
BsB=[0,0,50,40];var BsC=[40,0,200,40];var BsD=[95,0,145,40];var BsE=[65,5,223,35
];var A0z=[0,0,15,40];var BsF=[72,0,140,40];var Ba2="\n(";var BsG="%y/%m/%d";var
BsH="%y ";var BsI=" %m ";var BsJ=" %d ";var BsK="20";var BsL=[225,0,240,40];var BsM=[
0,400,232,440];var BsN=[0,440,232,480];var BsO=[0,480,232,520];var BsP=[0,520,232
,560];var BsQ=[0,560,232,600];var BsR=[0,598,232,638];var BsS=[5,0,215,40];var BsT=[
215,8,240,33];var BsU="Implement in dervied class.";var BsV="ERROR: Unhandled temperature unit: ";
var AIV="ERROR: Unhandled mass unit: ";var BsW=[-1,160,115,280];var BsX=[114,160
,230,280];var A0A=[116,40,232,160];var AyV="Unknown weight class index: ";var BsY=
"< 35";var BsZ="35 - 40";var Bs0="40 - 45";var Bs1="45 - 50";var Bs2="\u2265 50";
var Bs3="< 80";var Bs4="80 - 90";var Bs5="90 - 100";var Bs6="100 - 110";var Bs7=
"\u2265 110";var Ba3="Unknown mass unit";var Bs8=[143,0,193,40];var Ba4=[192,0,240
,40];var Bs9=[44,28,44,28];var Bs_="0 %%";var Bs$=[-1,40,115,160];var Bta=[117,40
,233,160];var Btb=[1,160,117,280];var Btc=[114,158,230,278];var Btd=[1,280,117,400
];var Bte=[30,0,155,40];var Ba5="\u2620";var A0B=[380,150,380,190];var Ba6=[105,
0,155,50];var A0C=[190,1,240,41];var Btf=[72,0,108,40];var Btg=[108,0,180,40];var
Bth=[60,0,94,40];var Bti=[94,0,200,40];var Btj="Scroll direction not supported.";
var Btk=[44,0,207,40];var Btl=[207,0,240,40];var Btm="99";var Btn="Unknown birth type";
var Bto=[44,0,189,40];var Btp=[5,0,44,40];var Btq=[44,0,240,40];var Btr=[240,0,240
,40];var Bts="\u25C9";var Ba7="\u25CB";var Btt=[75,4,215,34];var Btu=[47,4,73,34
];var Ba8=[17,4,45,34];var Btv=[0,0,138,30];var Btw=[47,4,215,34];var A0D="Unhandled MotherSelectionFilterMode: ";
var Btx="Read only!";var Bty="actions array too small to hold all actions";var Btz=[
120,40];var BtA=[120,0];var BtB=[5,0,115,40];var BtC=[0,0,205,40];var BtD=[59,4,
170,34];var BtE=[59,1,173,37];var BtF=[175,1,205,37];var BtG=[0,0,37,40];var BtH=[
115,98,205,188];var BtI=[0,40,235,100];var BtJ=[2,200,240,280];var BtK=" 01234";
var BtL=[0,0];var BtM=[33,63];var BtN=[25,56];var BtO="Unknown transponder image type: ";
var AIW=[0,0,82,82];var BtP=[0,0,81,26];var BtQ=[105,120,195,210];var BtR=[10,140
,100,230];var Ba9="Unhandled EartagNrAssignmentMode: ";var BtS="Unhandled Gender";
var BtT=[10,35,35,75];var BtU=[44,40,202,70];var BtV=[204,35,232,75];var BtW="Unvalid FatoryResetScope";
var Ba_=[0,120,240,200];var BtX=[144,0,192,40];var BtY=[144,0,240,40];var BtZ=[195
,0,245,50];var Bt0=[120,0,120,40];var Bt1=[140,0,240,30];var Bt2=[30,0,232,40];var
Bt3=[60,0,160,40];var Bt4=[160,0,200,40];var Bt5=[150,17,200,40];var Bt6=[155,40
];var Bt7=[155,0];var Bt8=[146,80,240,160];var Bt9=[56,80,146,160];var Bt_=[0,80
,56,160];var Bt$=[13,107,47,141];var Bua=[74,109,104,139];var Bub=[50,100,130,150
];var Buc=[55,112,145,140];var Bud=[146,112,236,140];var Bue=[150,86,223,110];var
AIX=[0,40,240,120];var Buf="Menu item for animal table field not found";var Ba$=[
0,360,240,440];var Bug=[0,440,240,520];var Buh=[5,40,235,104];var Bui=[120,108,226
,218];var Buj=[20,120,110,210];var Buk=[5,223,235,280];var Bul=[0,0,64,30];var Bum=[
44,0,64,30];var Bun=[185,5,225,35];var Buo=[170,5,234,35];var Bba=[0,80,240,200];
var Bup="Error!";var Buq="Unhandled number of digits";var Bur=[0,0,126,30];var Bus=[
22,5,149,35];var But=[149,0,232,40];var Bbb=[5,20];var Buu=[5,0];var Buv="Unhandled AnimalIdAutoGenerationMethod: ";
var Buw=[4,440,236,520];var Bux="Unhandled TransponderAssignmentIdChangeMethod: ";
var Buy="\n";var Buz="%";var BuA=[0,0,160,120];var BuB=[2,2,157,117];var BuC=[50
,70];var BuD=[50,50];var BuE=[0,0,168,40];var BuF=[168,0,240,40];var BuG=[0,47,232
,77];var BuH=[65,0,101,40];var BuI=[135,0,175,40];var BuJ=[85,17,135,40];var BuK=[
125,17,175,40];var BuL=[40,0];var Bbc=[0,40,230,280];var BuM="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuN="ERROR: Received more animal table fields than expected!";
var BuO=[0,80,240,130];var BuP="Unhandled Device::MassDeregistrationCriterion: ";
var Bbd="Unhandled BackupError: ";var BuQ="Unhandled PopupId: ";var BuR=[203,0,240
,40];var BuS=[168,0,203,40];var BuT=[35,0,152,40];var BuU=[0,0,84,40];var BuV=[84
,0,167,40];var BuW="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMW={Device:null,A6x:null,GK:null,Init:function(aArg){},DriveCursorHitting:function(
Tl,BH,Fg){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GK._Init.call(this.
GK={I:this},0);this.__proto__=C.AMW;this.H(Cf);this.J(this.GK,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A6x=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J_=
this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GK._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GK.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A6x)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A5F._variants();
},K:null,_className:"Application::Application"};C.AsF=[240,320];C.AB={Background:
null,Ek:null,ADs:null,An$:0,Init:function(aArg){A.pe([this,this.A1a],this);A.pe([
this,this.Bfr],this);},LU:function(G){},A1a:function(s){this.LU(s);},CD:function(
G){},AIZ:function(s){this.CD(s);},E4:function(G){},AyW:function(s){this.E4(s);},
Dr:function(E){if(this.ADs===E)return;this.ADs=E;A.pe([this,this.Bfr],this);},Bfr:
function(G){var B;if(!!this.ADs)this.Ek.Ab9((C.BR.isPrototypeOf(B=A._NewObject(this.
ADs,0))?B:null));else this.Ek.Ab9(null);},_Init:function(aArg){C.Abr._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ek._Init.call(this.
Ek={I:this},0);this.__proto__=C.AB;this.Background.A1(0x3F);this.Background.H(Cf
);this.Background.L(A.jb.CU);this.Ek.H(BD);this.Ek.As(false);this.J(this.Background
,-1);this.J(this.Ek,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abr;this.
Background._Done();this.Ek._Done();C.Abr._Done.call(this);},_ReInit:function(){C.
Abr._ReInit.call(this);this.Background._ReInit();this.Ek._ReInit();},_Mark:function(
D){var B;C.Abr._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WX={In:null,Zv:function(E){var B;if(this.In===E)return;if(!!this.In)this.AqN(
this.In,null,null,null,[B=this.In,B.AyW],null,false);this.In=E;if(!!this.In)this.
AkN(this.In,null,null,null,null,null,null,[B=this.In,B.AIZ],null,false);},AEO:function(
){return this.In;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WX;this.H([0,0,C.AsF[0],C.AsF[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.In)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.OF={Ve:null,Q:null,AnQ:null,ZI:null,NY:null,OD:null,TN:null,TO:null,AGv:255,
Hh:function(G){var F;if(!!this.Q){this.A2H();var Adb=(F=this.Q,F[1].call(F[0]));
if(Adb>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gk);this.OD.L((this.OD.AQ&0x00FFFFFF
)|(this.AlP(Adb,0,30)<<24));this.TN.L((this.TN.AQ&0x00FFFFFF)|(this.AlP(Adb,31,60
)<<24));this.TO.L((this.TO.AQ&0x00FFFFFF)|(this.AlP(Adb,61,100)<<24));}},A0_:function(
s){this.Hh(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0_],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0_],E,0);if(!!E)A.pe([this,
this.A0_],this);},A3V:function(G){var F;if(!!this.AnQ)this.ZI.As((F=this.AnQ,F[1
].call(F[0])));else this.ZI.As(false);this.A_W(255);},A_P:function(E){if(A.aaZ(this.
AnQ,E))return;if(!!this.AnQ)A.z$([this,this.A3V],this.AnQ,0);this.AnQ=E;if(!!E)A.
zX([this,this.A3V],E,0);if(!!E)A.pe([this,this.A3V],this);},A_W:function(E){if(this.
AGv===E)return;this.AGv=E;if(!!this.Ve)this.Ve.L((this.Ve.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlP:function(A1e,BcD,Bx4){if(A1e<BcD)return 0;else if((A1e>=BcD)&&(A1e<
Bx4))return this.AGv&0xFF;else return 255;},A2H:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.Ve=this.TO;else if((F=this.Q,F[1].call(F[0]))>
30)this.Ve=this.TN;else this.Ve=this.OD;}else this.Ve=null;},BlR:function(){return this.
AGv;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZI._Init.call(this.ZI={
I:this},0);A.acg.Ap._Init.call(this.NY={I:this},0);A.acg.AL._Init.call(this.OD={
I:this},0);A.acg.AL._Init.call(this.TN={I:this},0);A.acg.AL._Init.call(this.TO={
I:this},0);this.__proto__=C.OF;this.H(E8);this.ZI.Fq(2000);this.NY.H(E8);this.NY.
L(A.jb.Text);this.OD.H(Hs);this.OD.L(A.jb.E1);this.TN.H(I0);this.TN.L(A.jb.E1);this.
TO.H(Iw);this.TO.L(A.jb.E1);this.J(this.NY,0);this.J(this.OD,0);this.J(this.TN,0
);this.J(this.TO,0);this.ZI.Q=[this,this.BlR,this.A_W];this.NY.Ax(A.aaL(A.ach.AM6
));},_Done:function(){this.__proto__=A.Core.P;this.ZI._Done();this.NY._Done();this.
OD._Done();this.TN._Done();this.TO._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZI._ReInit();this.NY._ReInit();this.OD._ReInit(
);this.TN._ReInit();this.TO._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Ve)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnQ)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZI={_Init:function(aArg){A.acl.Gn._Init.call(
this,aArg);this.__proto__=C.ZI;this.AkZ=true;this.B3=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ek={GK:null,AR:null,Background:null,OF:null,Bo:
null,Do:null,Lb:0,Avt:0,Avu:0,Ao7:0,LN:false,KM:false,Qy:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hg){this.Ao7=A.jb.CU;this.Lb=A.jb.Text;}else if(GE){this.Ao7=
this.Avt;this.Lb=this.Avu;}else if(Fv){this.Ao7=this.Avt;this.Lb=this.Avu;}else{
this.Ao7=A.jb.CU;this.Lb=A.jb.Text;}this.Background.L(this.Ao7);if(!!this.GK){this.
GK.WN(this.Ao7);this.GK.Dg(this.Lb);}this.LN=Hg;this.KM=Fv;this.Qy=GE;},Qx:function(
G){this.Am();A.pe(this.AR,this);},AiS:function(G){if(this.Do.Aco)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);},Ab9:function(
E){if(this.GK===E)return;if(!!this.GK)this.HR(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.Am();},A_x:function(E){if(this.Avt===E)return;this.
Avt=E;this.Am();},A_y:function(E){if(this.Avu===E)return;this.Avu=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.OF._Init.call(this.OF={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=C.Ek;var B;this.
H(BD);this.Background.A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.CU);
this.OF.H(O$);this.Lb=A.jb.Text;this.Bo.PZ(0);this.Bo.WO(50);this.Do.Filter=1;this.
Avt=A.jb.AV;this.Avu=A.jb.Bm;this.Ao7=A.jb.Text;this.J(this.Background,0);this.J(
this.OF,0);this.OF.Au([B=A._GetAutoObject(A.Device.Device),B.Awe,B.AyX]);this.OF.
A_P([B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyY]);this.Bo.MJ=[this,this.Qx];
this.Do.BG=[this,this.AiS];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.OF._Done();this.Bo._Done();this.Do._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
OF._ReInit();this.Bo._ReInit();this.Do._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X9={AeQ:null,UK:null,CD:function(G){if(this.K&&this.K.CD
)return this.K.CD.apply(this,arguments);else return C.AB.CD.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeQ={I:this},0);A.acg.Text._Init.call(this.UK={I:
this},0);this.__proto__=C.X9;this.AeQ.H(Qb);this.UK.H(Qc);this.UK.R(A.jV);this.UK.
L(A.jb.Text);this.UK.Z(false);this.J(this.AeQ,0);this.J(this.UK,0);this.AeQ.Ax(null
);this.UK.S(A.aaL(A.fl.EK));var J_=this._variants();if(J_){this.K={};J_._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeQ._Done();this.UK._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeQ._ReInit();this.UK._ReInit();this.UK.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UK)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.
X9._variants();},K:null,_className:"Application::BootScreen"};C.AVh={AAS:function(
G){A._GetAutoObject(C.A7).Ace(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AVh;this.Background.L(0xFF000000);this.Ek.Z(false);},_className:
"Application::SleepScreen"};C.AvG={DY:null,Y:null,Yj:null,Yk:null,VQ:null,Ya:null
,VS:null,X_:null,Yd:null,TS:null,Yc:null,Yl:null,Ay:null,CQ:function(){this.DK(this
);},Init:function(aArg){var B;A.zX([this,this.DK],[B=A._GetAutoObject(A.Device.Device
),B.ArF,B.Att],0);A._GetAutoObject(A.Device.Helper).AkR();this.Bb(this.VQ);this.
N.Ct(A.aaL(A.ach.ADY));A.pe([this,this.DK],this);},Bb:function(E){var B;var A3v=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A3v)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AKb=A._NewObject(A.acl.AGs,0);AKb.Fq(250);AKb.HQ(1);AKb.WR(6);this.
Y.HK(this.AV,true,AKb,null);}},CD:function(G){this.A41(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkR();A._GetAutoObject(A.Device.Helper).Asz();},Fj:function(G){
var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.
Ay.MH(-this.Y.Br[1]);},Il:function(G){var Cy=(C.Fn.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VQ)A._GetAutoObject(C.A7).Cb(35);else if(Cy===this.Ya)A._GetAutoObject(
C.A7).Cb(34);else if(Cy===this.Yd)A._GetAutoObject(C.A7).Cb(69);else if(Cy===this.
VS)A._GetAutoObject(C.A7).Cb(8);else if(Cy===this.X_)A._GetAutoObject(C.A7).Cb(50
);else if(Cy===this.TS)A._GetAutoObject(C.A7).Cb(25);else if(Cy===this.Yj)A._GetAutoObject(
C.A7).Cb(77);else if(Cy===this.Yk)A._GetAutoObject(C.A7).Cb(70);else if(Cy===this.
Yl)A._GetAutoObject(C.A7).Cb(6);else if(Cy===this.Yc)A._GetAutoObject(C.A7).Cb(63
);},BBe:function(G){A._GetAutoObject(A.Device.Device).Ae3(!A._GetAutoObject(A.Device.
Device).AmW);},DK:function(G){if(A._GetAutoObject(A.Device.Device).AmW)this.N.Hz((
A.aaR(A.acf.A70)+CR)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hz((A.aaR(A.acf.
A70)+CR)+A.aaR(A.acf.A8F).toLowerCase());},Adx:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A41:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).MB());this.VS.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fn._Init.call(this.Yj={I:this
},0);C.Fn._Init.call(this.Yk={I:this},0);C.Fn._Init.call(this.VQ={I:this},0);C.Fn.
_Init.call(this.Ya={I:this},0);C.QZ._Init.call(this.VS={I:this},0);C.Fn._Init.call(
this.X_={I:this},0);C.Fn._Init.call(this.Yd={I:this},0);C.Fn._Init.call(this.TS={
I:this},0);C.Fn._Init.call(this.Yc={I:this},0);C.Fn._Init.call(this.Yl={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AvG;this.Background.L(A.
jb.CU);this.N.As(false);this.N.Z(true);this.Dr(C.Aq8);this.DY.A1(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CK);this.Y.H(L9);this.Y.JZ(9);this.Yj.H(Qd);this.Yj.Aj(true);
this.Yj.T(A.aaR(A.acf.Gs));this.Yk.H(J9);this.Yk.Aj(true);this.Yk.T(A.aaR(A.acf.
A8m));this.VQ.H(Oh);this.VQ.Aj(true);this.VQ.T(A.aaR(A.acf.VD));this.Ya.H(Qe);this.
Ya.Aj(true);this.Ya.T(A.aaR(A.acf.TF));this.VS.H(MQ);this.VS.Aj(true);this.VS.T(
A.aaR(A.acf.APV));this.X_.H(Te);this.X_.Aj(true);this.X_.T(A.aaR(A.acf.Animal));
this.Yd.H(J9);this.Yd.Aj(true);this.Yd.T(A.aaR(A.acf.A73));this.TS.H(U0);this.TS.
As(true);this.TS.Aj(true);this.TS.Z(true);this.TS.T(A.aaR(A.acf.A6N));this.Yc.H(
Aab);this.Yc.Aj(true);this.Yc.T(A.aaR(A.acf.Device));this.Yl.H(Xe);this.Yl.Aj(true
);this.Yl.T(A.aaR(A.acf.Settings));this.Ay.H(Ix);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.Yj,0);this.J(this.Yk,0);this.J(this.VQ,0);this.J(this.Ya,0);this.
J(this.VS,0);this.J(this.X_,0);this.J(this.Yd,0);this.J(this.TS,0);this.J(this.Yc
,0);this.J(this.Yl,0);this.J(this.Ay,0);this.N.CF=[this,this.BBe];this.N.Ce=[this
,this.Adx];this.Y.Em=[this,this.Fj];this.Yj.AR=[this,this.Il];this.Yj.DC(A.aaL(A.
ach.AD1));this.Yk.AR=[this,this.Il];this.Yk.DC(A.aaL(A.ach.AD4));this.VQ.AR=[this
,this.Il];this.VQ.DC(A.aaL(A.ach.AP0));this.Ya.AR=[this,this.Il];this.Ya.DC(A.aaL(
A.ach.AQb));this.VS.AR=[this,this.Il];this.VS.DC(A.aaL(A.ach.AQA));this.X_.AR=[this
,this.Il];this.X_.DC(A.aaL(A.ach.AP4));this.Yd.AR=[this,this.Il];this.Yd.DC(A.aaL(
A.ach.AQK));this.TS.AR=[this,this.Il];this.TS.DC(A.aaL(A.ach.AQp));this.Yc.AR=[this
,this.Il];this.Yc.DC(A.aaL(A.ach.AQm));this.Yl.AR=[this,this.Il];this.Yl.DC(A.aaL(
A.ach.AQ4));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.Yj._Done();this.Yk._Done();this.VQ._Done();this.Ya._Done();
this.VS._Done();this.X_._Done();this.Yd._Done();this.TS._Done();this.Yc._Done();
this.Yl._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Yj._ReInit();this.Yk.
_ReInit();this.VQ._ReInit();this.Ya._ReInit();this.VS._ReInit();this.X_._ReInit(
);this.Yd._ReInit();this.TS._ReInit();this.Yc._ReInit();this.Yl._ReInit();this.Ay.
_ReInit();this.Yj.T(A.aaR(A.acf.Gs));this.Yk.T(A.aaR(A.acf.A8m));this.VQ.T(A.aaR(
A.acf.VD));this.Ya.T(A.aaR(A.acf.TF));this.VS.T(A.aaR(A.acf.APV));this.X_.T(A.aaR(
A.acf.Animal));this.Yd.T(A.aaR(A.acf.A73));this.TS.T(A.aaR(A.acf.A6N));this.Yc.T(
A.aaR(A.acf.Device));this.Yl.T(A.aaR(A.acf.Settings));this.CQ();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Rc={Number:null,Jl:null,IZ:null,TL:null,AsV:0,Init:function(aArg){var B;A.zX([
this,this.Bcf],[B=A._GetAutoObject(A.Device.Device),B.AS4,B.A0Q],0);A.pe([this,this.
Bcf],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Aoa();},CD:function(G){A.
_GetAutoObject(A.Device.Device).AhM();},E4:function(G){A._GetAutoObject(A.Device.
Device).An4();},Al_:function(G){var F;this.Am();this.TL.As(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aep.As(true);if(!this.TL.Bw)(F=this.TL.Q,F[2].call(F[0],this.TL.
B3));},Bcf:function(s){this.Al_(s);},Aoa:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gk);break;case 3:this.Background.
L(A.jb.Ib);break;default:this.Background.L(A.jb.CK);}},AkG:function(E){if(this.AsV===
E)return;this.AsV=E;this.Jl.AkG(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jl._Init.call(this.Jl={I:this}
,0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Gn._Init.call(this.TL={I:this}
,0);this.__proto__=C.Rc;var B;this.Background.L(A.jb.CK);this.N.Z(false);this.Number.
H(U1);this.Number.KX(true);this.Number.L(A.jb.Text);this.Jl.H(Aac);this.Jl.AkG(0
);this.IZ.H(U2);this.IZ.L(A.jb.AV);this.IZ.Zx(true);this.TL.Fq(1750);this.TL.Ux(
750);this.TL.AkB(0);this.TL.As(true);this.TL.B3=3;this.J(this.Number,0);this.J(this.
Jl,0);this.J(this.IZ,0);this.Number.S(A.aaL(A.fl.Af));this.IZ.Ax(A.aaL(A.ach.AD3
));this.TL.Q=[B=this.IZ,B.ASR,B.Cw];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jl._Done();this.IZ._Done();this.TL._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jl._ReInit();this.IZ._ReInit();this.TL._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fn={C_:null,ADP:null,AR:null,Bo:null,Do:null,Background:
null,Mz:null,OL:null,Q5:null,G$:null,A56:true,LN:false,KM:false,Qy:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hk.Bl.call(this,aSize);this.Mz.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q5.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OL.H(this.Q5.M);this.G$.H([].concat(0,this.G$.M.slice(1,4)));this.G$.H(A.abN(
this.G$.M,aSize[0]));this.G$.H(A.abP(this.G$.M,0));this.G$.H([].concat(this.G$.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hk.Ai.call(this,Ae);var Hg=((Ae&0x10)===
0x10);var Fv=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hg){this.Q5.L(A.jb.Am8);this.
G$.L(A.jb.CK);this.OL.Z(true);this.OL.L(A.jb.ARk);this.Mz.Z(false);}else if(GE){
this.Q5.L(A.jb.Bm);this.G$.L(A.jb.Bm);this.OL.Z(false);this.Mz.Z(true);}else if(
Fv){this.Q5.L(A.jb.Bm);this.G$.L(A.jb.Bm);this.OL.Z(false);this.Mz.Z(true);}else{
this.Q5.L(A.jb.Text);this.G$.L(A.jb.Text);this.OL.Z(true);this.OL.L(A.jb.CU);this.
Mz.Z(false);}this.LN=Hg;this.KM=Fv;this.Qy=GE;},Qx:function(G){this.Am();A.pe(this.
AR,this);},AiS:function(G){if(this.Do.Aco)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.As(false);}this.Bo.As(true);},T:function(E){if(this.DL===E)return;
this.DL=E;this.G$.R(E);},DC:function(E){if(this.C_===E)return;this.C_=E;this.Q5.
Ax(E);this.OL.Ax(E);},Ab8:function(E){if(this.A56===E)return;this.A56=E;this.G$.
Z(E);},Ab$:function(E){if(this.ADP===E)return;this.ADP=E;this.Mz.Ax(E);this.Mz.H(
A.abK(this.Mz.M,E.FrameSize));},_Init:function(aArg){C.Hk._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BF._Init.call(this.Do={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mz={
I:this},0);A.acg.Ap._Init.call(this.OL={I:this},0);A.acg.Ap._Init.call(this.Q5={
I:this},0);C.CG._Init.call(this.G$={I:this},0);this.__proto__=C.Fn;this.H(Aad);this.
Bo.PZ(0);this.Bo.WO(50);this.Do.Filter=1;this.Background.H(Xf);this.Background.Z(
false);this.Mz.A1(0x14);this.Mz.L(A.jb.AV);this.Mz.Cw(0);this.OL.L(A.jb.CU);this.
OL.Cw(1);this.G$.H(Aae);this.J(this.Background,0);this.J(this.Mz,0);this.J(this.
OL,0);this.J(this.Q5,0);this.J(this.G$,0);this.Bo.MJ=[this,this.Qx];this.Do.BG=[
this,this.AiS];this.Mz.Ax(A.aaL(A.ach.N1));this.OL.Ax(A.aaL(A.ach.AvR));this.Q5.
Ax(A.aaL(A.ach.AvR));this.G$.S(A.aaL(A.fl.Af));this.G$.A0(A.aaL(A.fl.Ak));this.G$.
Cr(A.aaL(A.fl.Bh));this.ADP=A.aaL(A.ach.N1);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hk;this.Bo._Done();this.Do._Done();this.Background._Done();this.Mz._Done(
);this.OL._Done();this.Q5._Done();this.G$._Done();C.Hk._Done.call(this);},_ReInit:
function(){C.Hk._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit();this.Background.
_ReInit();this.Mz._ReInit();this.OL._ReInit();this.Q5._ReInit();this.G$._ReInit(
);this.G$.S(A.aaL(A.fl.Af));this.G$.A0(A.aaL(A.fl.Ak));this.G$.Cr(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hk._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axq:null,Background:null,O7:null,Asq:0,Ak_:10,AjF:100,AQ:0,Ao0:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O7.H([].concat(2,this.O7.M.slice(1,4)));this.O7.H(A.abN(this.O7.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var XJ=this.Ak_<this.AjF;var AJL=(B=
this.M)[3]-B[1];var A3i=10;var Auz=AJL;var A4Y=0;if(10>AJL)A3i=AJL;if(this.Ak_<this.
AjF)Auz=((Auz*this.Ak_)/this.AjF)|0;if(Auz<A3i)Auz=A3i;if(this.Ak_<this.AjF)A4Y=((
this.BlP()*(AJL-Auz))/(this.AjF-this.Ak_))|0;this.O7.H(A.abP(this.O7.M,A4Y));this.
O7.H([].concat(this.O7.M.slice(0,3),A4Y+Auz));this.O7.Z(XJ);this.Background.Z(XJ
);if(!!this.Axq&&(this.Ao0!==XJ))A.pe(this.Axq,this);this.Ao0=XJ;},BlP:function(
){var E=this.Asq;var HG=this.AjF-this.Ak_;if((HG>0)&&(E>HG))E=HG;if(HG<=0)E=0;return E;
},MH:function(E){if(E<0)E=0;if(this.Asq===E)return;this.Asq=E;this.Am();},MI:function(
E){if(E<0)E=0;if(this.Ak_===E)return;this.Ak_=E;this.Am();},MG:function(E){if(E<
0)E=0;if(this.AjF===E)return;this.AjF=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.O7.L(E);},BnX:function(E){if(A.aa0(this.Axq,E))return;this.
Axq=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.O7={I:this},0);this.__proto__=
C.Ay;this.H(Aaf);this.As(false);this.AQ=A.jb.AV;this.Background.A1(0x0);this.Background.
H(U3);this.Background.L(A.jb.CU);this.O7.A1(0x0);this.O7.H(U3);this.O7.L(A.jb.AV
);this.J(this.Background,0);this.J(this.O7,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.O7._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.O7._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axq)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cg={Hl:null,Y:null,Ay:null,Ap:null,A7t:A.jV,Init:function(aArg){A.pe([this,this.
ABp],this);},DF:function(G){var B;C.AB.DF.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);this.ABp(this);},Al7:
function(G){if(!!this.N.CF)A.pe(this.N.CF,this);},ApR:function(G){if(!!this.N.Ca
)A.pe(this.N.Ca,this);},AAS:function(G){if(!!this.N.Ce)A.pe(this.N.Ce,this);},Fj:
function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[
3]-B[1]);this.Ay.MH(-this.Y.Br[1]);A.pe([this,this.BBC],this);},ABp:function(G){
var B;var G0=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C3(A.
aaL(A.ach.YH));this.N.CF=[this,this.Ew];if(!!G0&&!!G0.Amv){this.N.E6(A.jV);this.
N.JE.CZ(255);this.N.ArX(G0.AqY);this.N.Ct(G0.AvO);this.N.Ce=G0.Amv;}else{this.N.
E6(A.jV);this.N.Ct(null);this.N.Ce=null;}if(!!G0&&!!G0.Agy){this.N.CS(G0.AxV);this.
N.GX.CZ(G0.Axr);this.N.AnE(G0.AmY);this.N.C4(G0.Are);this.N.Ca=G0.Agy;}else{this.
N.CS(A.jV);this.N.C4(null);this.N.Ca=null;}},Jf:function(E){if(this.A7t===E)return;
this.A7t=E;this.Hl.R(E);},Ew:function(G){A._GetAutoObject(C.A7).FB();},BBC:function(
G){var B;var BAw=this.Ay.Background.Fp();var Beu=(BAw?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajg=X;
X=X.Ah;if(((Ajg.U&0x400)===0x400)){if(!!(A.Core.Akh.isPrototypeOf(Ajg)?Ajg:null)
){var BeA=(A.Core.Akh.isPrototypeOf(Ajg)?Ajg:null);BeA.DD([Beu,BeA.ED[1]]);}else
if(!!(A.Core.Eu.isPrototypeOf(Ajg)?Ajg:null)){var Bgu=(A.Core.Eu.isPrototypeOf(Ajg
)?Ajg:null);Bgu.H(A.abN(Bgu.M,Beu));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hl={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cg;this.N.Z(true);this.Hl.H(Xg);this.Hl.As(false);this.Hl.R(A.aaR(A.
acf.Settings));this.Hl.L(A.jb.Text);this.Y.H(Fe);this.Y.JZ(1);this.Ay.H(Ix);this.
Ap.H(Pa);this.Ap.L(A.jb.Text);this.J(this.Hl,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hl.S(A.aaL(A.fl.Kt));this.Hl.A0(A.aaL(A.fl.HL));this.Y.
Em=[this,this.Fj];this.Ap.Ax(A.aaL(A.ach.ADw));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hl._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hl._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hl.R(A.aaR(A.acf.Settings
));this.Hl.S(A.aaL(A.fl.Kt));this.Hl.A0(A.aaL(A.fl.HL));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq8={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bhp],[B=
A._GetAutoObject(A.Device.Helper),B.U9,B.Va],0);},Dg:function(E){C.BR.Dg.call(this
,E);this.Text.L(E);},Bhp:function(G){this.Text.R(A._GetAutoObject(A.acj.KR).Bjo(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq8;this.Timer.WO(1);this.Timer.As(true);
this.Text.H(Aag);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.MJ=[this,this.
Bhp];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KY:0xFFFFFFFF,LX:0,Dg:function(E){if(
this.KY===E)return;this.KY=E;},WN:function(E){if(this.LX===E)return;this.LX=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BR;this.H(Oi
);},_className:"Application::HeaderContent"};C.N={V6:null,V7:null,V8:null,Ag5:null
,Ag6:null,Ag7:null,CF:null,Ce:null,Ca:null,Background:null,NR:null,Jj:null,JE:null
,GX:null,PF:null,IS:null,Lj:null,T7:null,T8:null,An6:A.jV,An7:A.jV,An8:A.jV,Arf:
0,Arg:0,Arh:0,Ahn:0,ZK:false,WV:false,Asw:false,AsL:false,AsK:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.V6)this.Jj.S(this.V6);if(!!this.V7)this.JE.S(this.
V7);if(!!this.V8)this.GX.S(this.V8);switch(this.Ahn){case 0:{this.NR.Z(false);this.
Jj.L(A.jb.Bm);this.JE.L(A.jb.Bm);this.GX.L(A.jb.Bm);this.PF.L(A.jb.Bm);this.IS.L(
A.jb.Bm);this.Lj.L(A.jb.Bm);}break;case 1:{if(!this.Ag5)this.NR.H(A.aaT(this.Jj.
ASJ(),Rp));else this.NR.H(this.PF.Dd());this.NR.Z(true);this.Jj.L(A.jb.Text);this.
JE.L(A.jb.Bm);this.GX.L(A.jb.Bm);this.PF.L(A.jb.Text);this.IS.L(A.jb.Bm);this.Lj.
L(A.jb.Bm);}break;case 3:{if(!this.Ag7)this.NR.H(A.aaT(this.GX.ASJ(),Rp));else this.
NR.H(this.Lj.Dd());this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JE.L(A.jb.Bm);this.GX.
L(A.jb.Text);this.PF.L(A.jb.Bm);this.IS.L(A.jb.Bm);this.Lj.L(A.jb.Text);}break;case
2:{if(!this.Ag6)this.NR.H(A.aaT(this.JE.ASJ(),Rp));else this.NR.H(this.IS.Dd());
this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JE.L(A.jb.Text);this.GX.L(A.jb.Bm);this.
PF.L(A.jb.Bm);this.IS.L(A.jb.Text);this.Lj.L(A.jb.Bm);}break;default:{this.NR.Z(
false);A.ab5("%s",Xh);}}if(!!this.PF.Al){this.PF.Z(true);this.Jj.Z(false);}else{
this.PF.Z(false);this.Jj.Z(true);}if(this.An7.length<=0){this.IS.Z(true);this.JE.
Z(false);}else{this.IS.Z(false);this.JE.Z(true);}if(!!this.Lj.Al){this.Lj.Z(true
);this.GX.Z(false);}else{this.Lj.Z(false);this.GX.Z(true);}},Hz:function(E){if(this.
An6===E)return;this.An6=E;this.Jj.R(E);this.Am();},E6:function(E){if(this.An7===
E)return;this.An7=E;this.JE.R(E);this.Am();},CS:function(E){if(this.An8===E)return;
this.An8=E;this.GX.R(E);this.Am();},AFB:function(E){if(this.Ahn===E)return;this.
Ahn=E;this.Am();},AFs:function(E){if(this.V6===E)return;this.V6=E;this.Jj.S(E);this.
Am();},ArX:function(E){if(this.V7===E)return;this.V7=E;this.JE.S(E);this.Am();},
AnE:function(E){if(this.V8===E)return;this.V8=E;this.GX.S(E);this.Am();},A3_:function(
G){this.Am();},C3:function(E){if(this.Ag5===E)return;this.Ag5=E;this.PF.Ax(E);this.
Am();},Ct:function(E){if(this.Ag6===E)return;this.Ag6=E;this.IS.Ax(E);this.Am();
},C4:function(E){if(this.Ag7===E)return;this.Ag7=E;this.Lj.Ax(E);this.Am();},OW:
function(E){if(this.AsK===E)return;this.AsK=E;this.T7.Z(E);if(E)this.Jj.H([].concat(
this.T7.M[2],this.Jj.M.slice(1,4)));else this.Jj.H([].concat(0,this.Jj.M.slice(1
,4)));this.Am();},OX:function(E){if(this.AsL===E)return;this.AsL=E;this.T8.Z(E);
if(E)this.GX.H(A.abN(this.GX.M,this.T8.M[0]));else this.GX.H(A.abN(this.GX.M,this.
M[2]));this.Am();},Bnj:function(E){if(this.Arf===E)return;this.Arf=E;this.PF.Cw(
E);this.Am();},ATw:function(E){if(this.Arg===E)return;this.Arg=E;this.IS.Cw(E);this.
Am();},A_C:function(E){if(this.Arh===E)return;this.Arh=E;this.Lj.Cw(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NR={I:this},0);C.CG._Init.call(this.Jj={I:this
},0);C.CG._Init.call(this.JE={I:this},0);C.CG._Init.call(this.GX={I:this},0);A.acg.
Ap._Init.call(this.PF={I:this},0);A.acg.Ap._Init.call(this.IS={I:this},0);A.acg.
Ap._Init.call(this.Lj={I:this},0);A.acg.Ap._Init.call(this.T7={I:this},0);A.acg.
Ap._Init.call(this.T8={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.Aec);this.NR.H(Xi);this.NR.
L(A.jb.CU);this.NR.Z(false);this.Jj.A1(0x14);this.Jj.H(Tf);this.Jj.A6(0x12);this.
JE.A1(0x14);this.JE.H(Xj);this.JE.A6(0x12);this.GX.H(Aah);this.PF.H(Xk);this.IS.
H(Xl);this.Lj.H(Tg);this.Lj.Z(false);this.T7.H(Th);this.T7.Z(false);this.T8.H(Ti
);this.T8.Z(false);this.J(this.Background,0);this.J(this.NR,0);this.J(this.Jj,0);
this.J(this.JE,0);this.J(this.GX,0);this.J(this.PF,0);this.J(this.IS,0);this.J(this.
Lj,0);this.J(this.T7,0);this.J(this.T8,0);this.Jj.S(A.aaL(A.fl.Ak));this.Jj.A0(A.
aaL(A.fl.Bh));this.Jj.Q9([this,this.A3_]);this.JE.S(A.aaL(A.fl.Ak));this.JE.A0(A.
aaL(A.fl.Bh));this.JE.Q9([this,this.A3_]);this.GX.S(A.aaL(A.fl.Ak));this.GX.A0(A.
aaL(A.fl.Bh));this.GX.Q9([this,this.A3_]);this.V6=A.aaL(A.fl.Ak);this.V7=A.aaL(A.
fl.Ak);this.V8=A.aaL(A.fl.Ak);this.PF.Ax(null);this.IS.Ax(null);this.Lj.Ax(null);
this.T7.Ax(A.aaL(A.ach.AMZ));this.T8.Ax(A.aaL(A.ach.Aju));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NR._Done();this.
Jj._Done();this.JE._Done();this.GX._Done();this.PF._Done();this.IS._Done();this.
Lj._Done();this.T7._Done();this.T8._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NR._ReInit();this.Jj.
_ReInit();this.JE._ReInit();this.GX._ReInit();this.PF._ReInit();this.IS._ReInit(
);this.Lj._ReInit();this.T7._ReInit();this.T8._ReInit();this.Jj.S(A.aaL(A.fl.Ak)
);this.Jj.A0(A.aaL(A.fl.Bh));this.JE.S(A.aaL(A.fl.Ak));this.JE.A0(A.aaL(A.fl.Bh)
);this.GX.S(A.aaL(A.fl.Ak));this.GX.A0(A.aaL(A.fl.Bh));this.AFs(A.aaL(A.fl.Ak));
this.ArX(A.aaL(A.fl.Ak));this.AnE(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.V6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NR)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JE).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADA={Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper),B.ArH,B.AkF],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper)
,B.A9z,B.AFZ],0);A.pe([this,this.Nz],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhI)this.Ab_(A._GetAutoObject(A.Device.Helper).AhI.AO5());else this.
Ab_(-1);if(!!A._GetAutoObject(A.Device.Helper).UH)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak8(A._GetAutoObject(A.Device.Helper).UH.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.Am4._Init.call(this,aArg);this.__proto__=C.ADA;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AG$={Ey:null,Ei:null,
FY:null,X7:null,TM:null,IL:null,IM:null,Init:function(aArg){},WU:function(G){var
B;C.DR.WU.call(this,G);var AK1=this.AzF(A._GetAutoObject(A.Device.Helper).UN.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALQ=this.AzF(A._GetAutoObject(
A.Device.Helper).UO.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAl=
this.AzF(A._GetAutoObject(A.Device.Device).AcK);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AK1));this.IM.H(A.abO(this.
IM.M,this.Ey.M[3]-((((B=this.IM.M)[3]-B[1])/2)|0)));this.Ei.H(A.abP(this.Ei.M,this.
Ey.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-B[1])-ALQ));this.
IL.H(A.abO(this.IL.M,(this.Ei.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))+2));this.FY.
H(A.abP(this.FY.M,this.Ei.M[3]));this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.
M)[3]-B[1])-BAl));this.TM.H(A.abO(this.TM.M,this.FY.M[3]-((((B=this.TM.M)[3]-B[1
])/2)|0)));this.X7.H(A.abP(this.X7.M,this.FY.M[3]));this.X7.H([].concat(this.X7.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJY:function(AoW){return A._GetAutoObject(A.
Device.Converter).Ak3(AoW);},AKv:function(){return A._GetAutoObject(A.acj.Temperature
).AlQ();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.
FY={I:this},0);A.acg.AL._Init.call(this.X7={I:this},0);A.acg.AL._Init.call(this.
TM={I:this},0);A.acg.AL._Init.call(this.IL={I:this},0);A.acg.AL._Init.call(this.
IM={I:this},0);this.__proto__=C.AG$;this.Ey.A1(0xD);this.Ey.H(Aai);this.Ey.L(A.jb.
Gk);this.Ei.A1(0xD);this.Ei.H(Tj);this.Ei.L(A.jb.Ib);this.FY.A1(0xD);this.FY.H(Aaj
);this.FY.L(A.jb.E1);this.X7.A1(0xD);this.X7.H(AfE);this.X7.L(A.jb.Afx);this.TM.
A1(0xD);this.TM.H(Aak);this.TM.AwD(A.jb.Afx);this.TM.AwE(A.jb.Afx);this.TM.AwG(A.
jb.E1);this.TM.AwF(A.jb.E1);this.IL.A1(0xD);this.IL.H(Xm);this.IL.AwD(A.jb.E1);this.
IL.AwE(A.jb.E1);this.IL.AwG(A.jb.Ib);this.IL.AwF(A.jb.Ib);this.IM.A1(0xD);this.IM.
H(Aal);this.IM.AwD(A.jb.Ib);this.IM.AwE(A.jb.Ib);this.IM.AwG(A.jb.Gk);this.IM.AwF(
A.jb.Gk);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FY,-1);this.J(this.X7
,-1);this.J(this.TM,-1);this.J(this.IL,-1);this.J(this.IM,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FY._Done(
);this.X7._Done();this.TM._Done();this.IL._Done();this.IM._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ey._ReInit();this.Ei._ReInit(
);this.FY._ReInit();this.X7._ReInit();this.TM._ReInit();this.IL._ReInit();this.IM.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ey)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Co={Avv:null,AmY:null,AQw:null,Are:null,AqY:null,AvO:null,AR:null,Agy:null,Amv:
null,N:null,Bo:null,QV:null,AxV:A.jV,AVc:false,AGZ:false,Apm:false,Axr:255,LN:false
,KM:false,Qy:false,Ai:function(Ae){var B;C.O4.Ai.call(this,Ae);var Hg=((Ae&0x10)===
0x10);var Fv=((Ae&0x20)===0x20);var IG=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FT=
A.jb.CK;var GZ=A.jb.Text;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.Text;}if(!Hg){this.Background.
L(A.jb.CU);this.V.L(A.jb.CK);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IG){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.
Background.L(A.jb.Am8);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ
);}this.LN=Hg;this.KM=Fv;this.Qy=GE;this.Apm=IG;},Qx:function(G){this.Am();A.pe(
this.AR,this);},Bxg:function(s){this.Qx(s);},H1:function(G){if(this.QV.Aco)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);
},Alo:function(s){this.H1(s);},Ab7:function(E){if(A.aa0(this.Agy,E))return;this.
Agy=E;},A_7:function(E){if(this.AxV===E)return;this.AxV=E;},ZA:function(E){if(this.
Avv===E)return;this.Avv=E;},ZB:function(E){if(this.AmY===E)return;this.AmY=E;},A_N:
function(E){if(this.Axr===E)return;this.Axr=E;},Gt:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DL===E)return;this.DL=E;this.ALy();},A3H:
function(G){},BG8:function(s){this.A3H(s);},AkA:function(E){if(this.Are===E)return;
this.Are=E;},L5:function(E){if(A.aa0(this.Amv,E))return;this.Amv=E;},Bnc:function(
E){if(this.AqY===E)return;this.AqY=E;},L8:function(E){if(this.AvO===E)return;this.
AvO=E;},ZF:function(E){if(this.AGZ===E)return;this.AGZ=E;this.ALy();},ALy:function(
){var B;var M7=this.DL;if(this.AGZ)M7=M7+A.aaR(A.acf.Colon);if(this.AVc)M7=M7+Xn;
this.V.R(M7);},ATU:function(E){if(this.AVc===E)return;this.AVc=E;this.ALy();},_Init:
function(aArg){C.O4._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BF._Init.call(this.QV={I:this},0);this.__proto__=C.Co;this.Bo.PZ(0);
this.Bo.WO(50);this.Bo.As(false);this.QV.Filter=1;this.Bo.MJ=[this,this.Bxg];this.
QV.BG=[this,this.Alo];this.Avv=A.aaL(A.fl.Ak);this.AmY=A.aaL(A.fl.Ak);this.AQw=A.
aaL(A.ach.E2);this.AqY=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.O4;this.
Bo._Done();this.QV._Done();C.O4._Done.call(this);},_ReInit:function(){C.O4._ReInit.
call(this);this.Bo._ReInit();this.QV._ReInit();this.ZA(A.aaL(A.fl.Ak));this.ZB(A.
aaL(A.fl.Ak));this.Bnc(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.O4._Mark.call(
this,D);if((B=this.Avv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Are)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqY)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agy)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Ds={Q:null,Anh:null,Anj:null,Hy:null,H9:null,AM:0,Gr:0,Ga:100,FI:0,Init:function(
aArg){},H1:function(G){this.FI=1;C.Eg.H1.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hy.H([0,aSize[1]-40,40,aSize[1]]);this.H9.H([].concat(A.
abe(aSize,AhX),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fv=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hy.L(this.V.AQ);this.H9.L(this.V.AQ);this.Hy.
Z((Fv||GE)&&(this.AM>this.Gr));this.H9.Z((Fv||GE)&&(this.AM<this.Ga));if(this.FI===
6)this.Hy.L(A.jb.E1);if(this.FI===7)this.H9.L(A.jb.E1);},BfD:function(G){this.FI=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay6],this);this.Bo.As(false);}this.Bo.
As(true);},Qx:function(G){if(this.FI===6)A.pe([this,this.Ay6],this);if(this.FI===
7)A.pe([this,this.Ay7],this);if(this.FI===1)A.pe(this.AR,this);this.FI=0;this.Am(
);},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcX:function(
s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcX],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcX],E,0);if(!!E)A.pe([this,
this.AcX],this);},BfE:function(G){this.FI=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.Ay7],this);this.Bo.As(false);}this.Bo.As(true);},Ki:function(G){this.FI=0;}
,Ay7:function(s){this.Ki(s);},Kd:function(G){this.FI=0;},Ay6:function(s){this.Kd(
s);},Bx:function(E){if(E<this.Gr)E=this.Gr;if(E>this.Ga)E=this.Ga;if(this.AM===E
)return;this.AM=E;this.Am();},BbG:function(Aq){this.Bx(Aq);},Gb:function(E){if(this.
Gr===E)return;this.Gr=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=
E;this.Am();},Uq:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BF._Init.call(this.Anh={I:this},0);A.Core.BF._Init.call(this.Anj={
I:this},0);A.acg.Ap._Init.call(this.Hy={I:this},0);A.acg.Ap._Init.call(this.H9={
I:this},0);this.__proto__=C.Ds;this.H(K4);this.Anh.Filter=6;this.Anj.Filter=7;this.
Background.H(K4);this.V.H(AcQ);this.V.R(LB);this.Hy.H(AhY);this.H9.H(Aoi);this.H9.
Cw(1);this.J(this.Hy,0);this.J(this.H9,0);this.Anh.BG=[this,this.BfD];this.Anh.D1=[
this,this.BfD];this.Anj.BG=[this,this.BfE];this.Anj.D1=[this,this.BfE];this.V.S(
A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(null);this.Hy.Ax(A.aaL(A.ach.
Ajv));this.H9.Ax(A.aaL(A.ach.Ajv));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Anh._Done();this.Anj._Done();this.Hy._Done();this.H9._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Anh._ReInit();this.
Anj._ReInit();this.Hy._ReInit();this.H9._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Anh)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Anj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hy)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Du:function(){return-1;},C7:function(aIndex){return-1;},Gm:function(
aIndex){return A.jV;},DZ:function(A8){return-1;},H8:function(){return-1;},Au:function(
E){this.Q=E;},Cc:function(Aq){this.Au(Aq);},ADd:function(aIndex){return null;},ADf:
function(aIndex){return 0;},B$:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Iv={AxM:null
,BU:null,AHn:A.jV,AVS:A.jV,Aj5:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Ds.Ai.call(this,Ae);if(!this.AxM){this.BU.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BU.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.
AVS);else this.BU.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.AHn);}}else(B=
this.AxM)?B[1].call(B[0],this):null;},Ki:function(G){var F;var BP=this.AM;C.Ds.Ki.
call(this,G);this.Bx(this.AM+this.Aj5);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},Kd:function(G){var F;var BP=this.AM;C.
Ds.Kd.call(this,G);this.Bx(this.AM-this.Aj5);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IW:function(E){if(this.AHn===E)return;
this.AHn=E;this.Am();},Jg:function(E){if(this.AVS===E)return;this.AVS=E;this.Am(
);},ATx:function(E){if(this.Aj5===E)return;this.Aj5=E;},A_4:function(E){if(A.aa0(
this.AxM,E))return;this.AxM=E;},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.CG._Init.call(this.BU={I:this},0);this.__proto__=C.Iv;this.H(K4);this.BU.H(Oj);
this.J(this.BU,-1);this.BU.S(A.aaL(A.fl.Af));this.BU.A0(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Ds;this.BU._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.BU._ReInit();this.BU.S(A.aaL(
A.fl.Af));this.BU.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.AxM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BX={AC:
null,DB:null,HP:null,CQ:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Ds.Bl.call(this,aSize);this.DB.H([this.Hy.M[2]-10,this.Hy.M[1],this.
H9.M[0]+10,this.Hy.M[3]]);this.DB.AFC((B=this.DB.M)[2]-B[0]);this.DB.HK(this.DB.
Gu,true,null,null);},Ai:function(Ae){var B;C.Ds.Ai.call(this,Ae);var Fv=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.DB.AbM(0,this.DB.AZ-1);this.Hy.Z(Fv||GE);this.H9.
Z(Fv||GE);},C5:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Ki:function(G){var F;var BP=this.AM;C.Ds.Ki.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Kd:function(G){var F;var BP=this.AM;
C.Ds.Kd.call(this,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var QD=0;if(E<this.Gr){E=this.Ga;QD=-this.DB.Wl*this.DB.AZ;}if(E>this.Ga){E=this.
Gr;QD=this.DB.Wl;}C.Ds.Bx.call(this,E);if(!!QD)this.DB.Gc(QD);this.DB.GU(this.AM
);if(this.DB.Bkj())this.DB.BpQ(false,false);this.DB.HK(this.DB.Gu,true,this.HP,null
);},Ho:function(G){var B;var Gh=this.DB.G8;var CA=(C.CG.isPrototypeOf(B=this.DB.
Cj)?B:null);if(!CA)return;CA.S(this.V.B7);CA.Axa(19);CA.A0(this.V.AmX);CA.Bn7(19
);CA.Cr(this.V.AqX);CA.Bn8(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));
else CA.R(Xo);CA.H(A.abK(CA.M,[this.DB.Wl,(B=this.DB.M)[3]-B[1]]));},BwU:function(
s){this.Ho(s);},CL:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Gb(0);this.EV(this.AC.Du()-1);this.DB.JD(this.AC.Du());this.DB.AbM(0,this.DB.AZ-
1);}},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Core.DB._Init.call(this.
DB={I:this},0);A.acl.Gn._Init.call(this.HP={I:this},0);this.__proto__=C.BX;this.
H(K4);this.DB.N8(C.CG);this.HP.WR(23);this.HP.HQ(1);this.HP.Fq(200);this.J(this.
DB,0);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.DB.Ho=[this,this.BwU
];this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.DB._Done();this.HP.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
DB._ReInit();this.HP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak)
);this.CQ();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SX={FN:null,OO:null,Dm:null,Av:null,JB:null,HO:null,Pz:null,V3:null,Q4:null,
Yt:null,Qa:null,Gy:null,Gx:null,FZ:0,A_:0,Asu:false,Bkf:false,Init:function(aArg
){},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hy.Z(false);this.H9.Z(false);var At4=
A.jV;if(!!this.Dm){this.Pz.R(this.Av.Format(Aam));this.Q4.R(this.Av.Format(AfF));
this.Qa.R(this.Av.Format(AhZ));}if(this.A_===1){this.HO.Z(true);this.HO.H(this.Pz.
M);this.HO.L(this.V.AQ);this.Pz.L(this.Background.AQ);this.Q4.L(this.V.AQ);this.
Qa.L(this.V.AQ);At4=A.aaR(A.acf.A6n);}else if(this.A_===2){this.HO.Z(true);this.
HO.H(this.Q4.M);this.HO.L(this.V.AQ);this.Pz.L(this.V.AQ);this.Q4.L(this.Background.
AQ);this.Qa.L(this.V.AQ);At4=A.aaR(A.acf.Hm);}else if(this.A_===3){this.HO.Z(true
);this.HO.H(this.Qa.M);this.HO.L(this.V.AQ);this.Pz.L(this.V.AQ);this.Q4.L(this.
V.AQ);this.Qa.L(this.Background.AQ);At4=A.aaR(A.acf.Year);}else{this.HO.Z(false);
this.Pz.L(this.V.AQ);this.Yt.L(this.V.AQ);this.Q4.L(this.V.AQ);this.V3.L(this.V.
AQ);this.Qa.L(this.V.AQ);}if(At4.length>0){if(this.AGZ)this.V.R((((this.DL+AcR)+
At4)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DL+AcR)+
At4)+String.fromCharCode(0x29));}else this.ALy();},Qx:function(G){if(this.FI===1
)A.pe([this,this.Vj],this);else if(this.FI===4)A.pe([this,this.AiI],this);else if(
this.FI===5)A.pe([this,this.Aiu],this);C.Ds.Qx.call(this,G);},Ki:function(G){switch(
this.A_){case 0:C.Ds.Ki.call(this,G);break;case 3:break;default:this.Adz(this);}
},Kd:function(G){switch(this.A_){case 0:C.Ds.Kd.call(this,G);break;default:this.
Ait(this);}},AdB:function(G){var F;if(!!this.Dm)this.Uv((F=this.Dm,F[1].call(F[0
])));},Acb:function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdB
],this.Dm,0);this.Dm=E;if(!!E)A.zX([this,this.AdB],E,0);if(!!E)A.pe([this,this.AdB
],this);},Uv:function(E){if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.
FZ);this.Am();},Adz:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Vj],this);this.Bo.As(false);}this.Bo.As(true);},Bcd:function(s){this.Adz(s);},Vj:
function(G){this.Ex(this.A_+1);},Al9:function(G){this.FI=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiI],this);this.Bo.As(false);}this.Bo.As(true);},Al8:function(
G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Aiu],this);this.Bo.As(false
);}this.Bo.As(true);},AiI:function(G){var B;var F;var BP=this.FZ;switch(this.A_){
case 1:{if(this.Asu){var ABy=A._NewObject(A.Core.An9,0);ABy.Kq=1;if(this.Av.J(ABy
).JY()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Av.GL<this.Av.Zu()
)this.Av.Lv(this.Av.GL+1);}break;case 2:{if(this.Asu){var ABy=A._NewObject(A.Core.
An9,0);ABy.Kq=this.Av.Zu();if(this.Av.J(ABy).JY()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Av.Uz(this.Av.Hm+1);if(this.Av.Zu()<this.Av.GL)this.Av.Lv(this.
Av.Zu());}break;case 3:{if(this.Asu){var A15=A._NewObject(A.Core.Bs,0);A15.Initialize(
this.Av.JY());A15.Year+=1;if(A15.JY()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Uv(((B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.
Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}},Aiu:function(G){var B;var F;var BP=
this.FZ;if(this.A_===1)this.Av.Lv(this.Av.GL-1);if(this.A_===2){this.Av.Uz(this.
Av.Hm-1);if(this.Av.Zu()<this.Av.GL)this.Av.Lv(this.Av.Zu());}if(this.A_===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Uv(((B=(this.Av.JY()|
0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],
this.FZ));A.abo(this.Dm,0);}},DK:function(G){var F;if(!this.N)return;switch(this.
A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[
0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeD));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vj];}break;case 2:{(F=this.N,F[
1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeD));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vj];}break;case 3:{(F=this.N,F[
1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkS((F=this.N,F[1].call(F[
0])));}},AFX:function(E){if(this.Asu===E)return;this.Asu=E;},FW:function(G){this.
Ex(1);},Hf:function(G){this.Ex(0);},Ex:function(EO){var F;var AAF=this.A_;if(!this.
A_){this.FN.AjC((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FZ){var BP=this.FZ;
this.Uv(A._GetAutoObject(A.Device.Helper).Dv());if(this.FZ!==BP){if(!!this.Dm)(F=
this.Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}}}this.A_=EO;this.Bkf=true;if((
this.A_<0)||(this.A_>3))this.A_=0;this.DK(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=
!!this.A_;if((!!AAF&&!this.A_)&&!!this.OO)A.pe(this.OO,this);this.Am();},Ait:function(
G){if(this.A_>1)this.Ex(this.A_-1);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Av={I:this},0);A.Core.BF._Init.call(this.JB={I:this}
,0);A.acg.AL._Init.call(this.HO={I:this},0);A.acg.Text._Init.call(this.Pz={I:this
},0);A.acg.Text._Init.call(this.V3={I:this},0);A.acg.Text._Init.call(this.Q4={I:
this},0);A.acg.Text._Init.call(this.Yt={I:this},0);A.acg.Text._Init.call(this.Qa={
I:this},0);A.Core.BF._Init.call(this.Gy={I:this},0);A.Core.BF._Init.call(this.Gx={
I:this},0);this.__proto__=C.SX;this.H(U4);this.V.R(Aoj);this.Hy.Z(false);this.H9.
Z(false);this.JB.Filter=1;this.HO.H(Aok);this.HO.L(0x55FFFFFF);this.Pz.H(Aol);this.
Pz.Je(true);this.Pz.A6(0x14);this.V3.H(Aom);this.V3.Je(true);this.V3.A6(0x14);this.
V3.R(Ald);this.Q4.H(As5);this.Q4.Je(true);this.Yt.H(Ayb);this.Yt.Je(true);this.Yt.
R(Ald);this.Qa.H(Ayc);this.Qa.Je(true);this.Qa.A6(0x11);this.Gy.Filter=4;this.Gy.
Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HO,0);this.J(this.Pz,0);this.
J(this.V3,0);this.J(this.Q4,0);this.J(this.Yt,0);this.J(this.Qa,0);this.JB.BG=[this
,this.Bcd];this.Pz.S(A.aaL(A.fl.EK));this.V3.S(A.aaL(A.fl.EK));this.Q4.S(A.aaL(A.
fl.EK));this.Yt.S(A.aaL(A.fl.EK));this.Qa.S(A.aaL(A.fl.EK));this.Gy.BG=[this,this.
Al9];this.Gy.D1=[this,this.AiI];this.Gx.BG=[this,this.Al8];this.Gx.D1=[this,this.
Aiu];this.FN=A._NewObject(C.Aew,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ds;this.Av._Done();this.JB._Done();this.HO._Done();this.Pz._Done();this.V3._Done(
);this.Q4._Done();this.Yt._Done();this.Qa._Done();this.Gy._Done();this.Gx._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit(
);this.JB._ReInit();this.HO._ReInit();this.Pz._ReInit();this.V3._ReInit();this.Q4.
_ReInit();this.Yt._ReInit();this.Qa._ReInit();this.Gy._ReInit();this.Gx._ReInit(
);this.Pz.S(A.aaL(A.fl.EK));this.V3.S(A.aaL(A.fl.EK));this.Q4.S(A.aaL(A.fl.EK));
this.Yt.S(A.aaL(A.fl.EK));this.Qa.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Ds._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OR={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bex],[B=A._GetAutoObject(A.Device.Device),B.A9h,B.BbN],0);
A.pe([this,this.Bex],this);},Du:function(){return 27;},Gm:function(aIndex){return this.
LanguageToString.BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnH(E);},Bex:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OR;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,5);this.BI.
Set(3,3);this.BI.Set(4,8);this.BI.Set(5,9);this.BI.Set(6,7);this.BI.Set(7,6);this.
BI.Set(8,10);this.BI.Set(9,2);this.BI.Set(10,11);this.BI.Set(11,12);this.BI.Set(
12,13);this.BI.Set(13,14);this.BI.Set(14,15);this.BI.Set(15,16);this.BI.Set(16,18
);this.BI.Set(17,17);this.BI.Set(18,4);this.BI.Set(19,20);this.BI.Set(20,21);this.
BI.Set(21,23);this.BI.Set(22,24);this.BI.Set(23,22);this.BI.Set(24,25);this.BI.Set(
25,26);this.BI.Set(26,27);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;
this.LanguageToString._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.
call(this);this.LanguageToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.LanguageToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Languages"};C.Rh={TemperatureUnitToString:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.TemperatureUnitToString.
BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Axe(E);},Init:function(aArg
){var B;A.zX([this,this.Bg5],[B=A._GetAutoObject(A.Device.Device),B.ArI,B.Atu],0
);A.pe([this,this.Bg5],this);},Bg5:function(G){this.Q=A._GetAutoObject(A.Device.
Device).TemperatureUnit;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.TemperatureUnitToString={
I:this},0);this.__proto__=C.Rh;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.TemperatureUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.AVw={AjA:null,
AcG:null,KE:null,AP:null,A$:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.
Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.H(A.abN(this.
V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.KE.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([this.Background.
M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.AjA.H([this.Background.M[2],0,aSize[
0],aSize[1]]);this.AcG.H(this.AjA.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
KE.L(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;this.
Ht=Ad;if(!!this.AX){var AlH=this.AX.Hw(Ad,6);var Ap1=this.AX.CC(Ad,7);var Aui=this.
AX.Ja(Ad,9);this.T(A._GetAutoObject(A.acj.KR).AC$(AlH));this.KE.R(A._GetAutoObject(
A.acj.KR).A64(AlH));this.AcG.R(A._GetAutoObject(A.Device.Converter).Ak3(Ap1));this.
AcG.L(A._GetAutoObject(A.acj.Assessment).XG(Aui));this.AjA.L(A._GetAutoObject(A.
acj.Assessment).Qu(Aui));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,
aArg);A.acg.AL._Init.call(this.AjA={I:this},0);A.acg.Text._Init.call(this.AcG={I:
this},0);A.acg.Text._Init.call(this.KE={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.AVw;this.V.H(
Pb);this.AcG.L(A.jb.Text);this.KE.R(Rq);this.KE.L(A.jb.Text);this.AP.L(A.jb.Bc);
this.A$.H(Ayd);this.A$.L(A.jb.Bc);this.J(this.AjA,0);this.J(this.AcG,0);this.J(this.
KE,0);this.J(this.AP,0);this.J(this.A$,0);this.AcG.S(A.aaL(A.fl.Af));this.KE.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AjA._Done(
);this.AcG._Done();this.KE._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AjA._ReInit();this.AcG._ReInit(
);this.KE._ReInit();this.AP._ReInit();this.A$._ReInit();this.AcG.S(A.aaL(A.fl.Af
));this.KE.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureListItem"
};C.Gd={AX:null,AR:null,Cq:null,AD:null,Afo:null,NU:null,KS:A.jV,Lo:null,AVU:true
,Ho:function(G){var B;var Gh=this.AD.G8;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zy(this.AX);Aa.Ch(Gh);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=
this.AD.M)[2]-B[0],this.AD.GO]));},N8:function(E){if(E===this.Lo)return;this.Lo=
E;this.AD.N8(E);},Zy:function(E){if(this.AX===E)return;if(!!this.AX)A.z9([this,this.
Ch],this.AX,0);this.AX=E;if(!!E)A.zV([this,this.Ch],E,0);A.pe([this,this.Ch],this
);},Ch:function(G){if(this.AVU===false)return;if(!!this.AX){this.AD.JD(this.AX.B_(
));this.AD.AbM(0,this.AD.AZ-1);}else this.AD.JD(0);if((this.AD.AZ>0)&&(this.FO()<
0))this.GU(0);if(this.FO()>=this.AD.AZ){this.GU(0);this.AD.Gc(0);}if(this.AD.AZ<=
0){this.NU.Z(true);this.GU(-1);}else{this.NU.Z(false);this.ABY(null,null);}},Fj:
function(G){var B;this.Afo.MG(this.AD.GO*this.AD.AZ);this.Afo.MI((B=this.AD.M)[3
]-B[1]);this.Afo.MH(-this.AD.Br);},DF:function(G){if(this.AD.AZ>0){switch(this.Cq.
CP){case 4:if(this.FO()>0)this.GU(this.FO()-1);break;case 5:if(this.FO()<(this.AD.
AZ-1))this.GU(this.FO()+1);break;default:this.Cq.Mw=true;}this.AD.HK(this.FO(),true
,null,null);}else if((this.Cq.CP!==4)&&(this.Cq.CP!==5))this.Cq.Mw=true;},ZC:function(
E){if(A.aa0(this.AR,E))return;this.AR=E;this.AD.AbM(0,this.AD.AZ);},GU:function(
E){this.AD.GU(E);this.AD.HK(E,true,null,null);},FO:function(){return this.AD.Gu;
},Dl:function(E){if(this.KS===E)return;this.KS=E;this.NU.R(E);},ABY:function(Ac0
,E9){this.AD.ABY(Ac0,E9);},AT_:function(E){if(this.AVU===E)return;this.AVU=E;if(
E)A.pe([this,this.Ch],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.CM._Init.call(this.AD={I:this}
,0);C.Ay._Init.call(this.Afo={I:this},0);A.acg.Text._Init.call(this.NU={I:this},
0);this.__proto__=C.Gd;this.H(U5);this.Lo=C.Ba;this.Cq.Filter=147;this.AD.A1(0x3F
);this.AD.H(U5);this.AD.Ae9(40);this.Afo.A1(0x3A);this.Afo.H(As6);this.NU.A1(0x3F
);this.NU.H(Aye);this.NU.Hp(10);this.NU.KX(true);this.NU.A6(0xA);this.NU.L(A.jb.
Text);this.J(this.AD,0);this.J(this.Afo,0);this.J(this.NU,0);this.Cq.BG=[this,this.
DF];this.Cq.D1=[this,this.DF];this.AD.Em=[this,this.Fj];this.AD.Ho=[this,this.Ho
];this.NU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done(
);this.AD._Done();this.Afo._Done();this.NU._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Cq._ReInit();this.AD._ReInit();this.
Afo._ReInit();this.NU._ReInit();this.NU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afo
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::VertScrollList"};C.Ba={AX:null,Ht:-1,CQ:function(){this.Ch(this.Ht
);},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.
Ht%2)===1)this.Background.L(A.jb.CK);else this.Background.L(A.jb.CU);}},Zy:function(
E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.ab5("%s",Ayf);},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.
call(this);this.CQ();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.
AX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GJ={
Bg:null,FE:null,DQ:null,Fm:null,V$:null,Ko:null,KS:A.jV,AUw:0,AUx:0,ARS:Ale,Afp:
false,CQ:function(){if(A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(
A.Device.Device).Dw(0);A.pe([this,this.Bbr],this);}},Init:function(aArg){var B;A.
zX([this,this.Bfb],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI1],0);A.zV([this
,this.Agc],A._GetAutoObject(A.Device.Device).An,0);A.zV([this,this.Z9],A._GetAutoObject(
A.Device.Device).An,0);A.zX([this,this.BBH],[B=A._GetAutoObject(A.Device.Helper)
,B.U9,B.Va],0);A.pe([this,this.Z9],this);A.pe([this,this.A0Z],this);A.pe([this,this.
AxH],this);},WK:function(G){this.Agz();var O;for(O=this.Ko.Du()-1;O>=0;O=O-1)switch(
this.Ko.C7(O)){case 0:this.AdT(A.aaR(A.acf.A5y),[this,this.Bov],0);break;case 14:
this.AdT(A.aaR(A.acf.BhK),[this,this.Bow],14);break;case 1:this.AdT(A.aaR(A.acf.
Temperature),[this,this.AUb],1);break;case 2:this.AdT(A.aaR(A.acf.Rating),[this,
this.AUa],2);break;case 3:this.AdT(A.aaR(A.acf.Afy),[this,this.AUc],3);break;default:
A.ab5("%s",Ayg);}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.
BiI));A._GetAutoObject(A.Device.Device).Dw(6);},Bbr:function(s){this.WK(s);},DF:
function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var Af2=this.Ko.DZ(A._GetAutoObject(
A.Device.Device).Ko);if(this.Afp)return;switch(D5.CP){case 6:{Af2=Af2-1;if(Af2<0
)Af2=this.Ko.Du()-1;A._GetAutoObject(A.Device.Device).Zw(this.Ko.C7(Af2));}break;
case 7:{Af2=Af2+1;if(Af2>=this.Ko.Du())Af2=0;A._GetAutoObject(A.Device.Device).Zw(
this.Ko.C7(Af2));}break;default:D5.Mw=true;}},CD:function(G){if(this.DQ.AAf()){this.
DQ.Ac_();if(this.DQ.AAf()===false)this.Bg.AT_(true);return;}else if(this.Afp)this.
ABg(this);if(!!this.Bg)this.Bg.AT_(true);},E4:function(G){if(!!this.Bg)this.Bg.AT_(
false);},AxH:function(G){var B;if(!!this.Bg)this.HR(this.Bg);this.Bg=A._NewObject(
C.AML,0);this.Bg.H(this.ARS);this.Bg.Zy(A._GetAutoObject(A.Device.Device).An);this.
Bg.ZC([this,this.Aaq]);if(!!this.FE)this.Bg.A96([B=this.FE,B.A9B,B.A_0]);this.A4J(
this);this.J(this.Bg,0);if(this.Afp===false)this.Bb(this.Bg);this.Bfb(this);this.
A$V(this);},A93:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Dr(this.
A7f());this.Ek.AR=[this,this.Aaq];this.ALD(this);this.Ek.As(true);this.Bb(this.Ek
);this.Afp=true;},Blb:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);
if(!this.Bg)return;var Aa=(C.ACn.isPrototypeOf(B=this.Bg.AD.BjU(this.Bg.AD.Gu))?
B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).GS(Aa.Ht);else A._GetAutoObject(
A.Device.Helper).W.E7();this.Agl();},Agi:function(G){var F;if(!this.Fm)this.A6B(
this);else switch((F=this.Fm,F[1].call(F[0]))){case 19:break;case 0:this.A6B(this
);break;case 1:this.BiJ(this);break;case 9:this.A6C(this);break;case 4:this.BiL(
this);break;case 6:this.BiM(this);break;case 8:this.BiO(this);break;case 2:this.
BiP(this);break;case 3:this.BiQ(this);break;case 7:this.BiS(this);break;case 5:this.
BiT(this);break;case 10:this.BiV(this);break;case 11:this.BiK(this);break;case 12:
this.BiN(this);break;case 13:this.A6H(this);break;case 14:this.A6D(this);break;case
18:this.A6E(this);break;case 15:this.A6F(this);break;case 16:this.BiR(this);break;
case 17:this.A6G(this);break;default:A.ab5("%s%e",AfG,(F=this.Fm,F[1].call(F[0])
));}},Aaq:function(s){this.Agi(s);},Bmo:function(G){this.Dr(C.Kv);this.Ek.AR=null;
this.Afp=false;this.Z9(this);this.Bgx();this.N.T7.CZ(255);this.N.T8.CZ(255);this.
Bb(this.Bg);this.Ek.As(false);},Ant:function(G){A._GetAutoObject(C.A7).FB();},Dl:
function(E){if(this.KS===E)return;this.KS=E;this.A4J(this);},AbA:function(){switch(
A._GetAutoObject(A.Device.Device).Ko){case 14:return C.ANk;case 2:return C.ANm;case
1:return C.ANn;case 3:return C.ANp;case 0:case 8:case 9:case 10:case 4:case 5:case
6:return C.AqC;case 7:return C.ACm;case 12:return C.ACp;case 11:return C.ACl;case
13:return C.ACo;default:throw new Error(Aon);}},AbB:function(){switch(A._GetAutoObject(
A.Device.Device).Ko){case 14:return C.APM;case 2:return C.ADH;case 1:return C.APO;
case 3:return C.APQ;case 4:return C.ADD;case 0:case 8:case 9:case 10:case 5:case
6:return C.Aq9;case 7:return C.ADF;case 12:return C.ADG;case 11:return C.ADE;case
13:return C.ADI;default:throw new Error(Aon);}},Bfb:function(G){this.ATN(A._GetAutoObject(
A.Device.Device).Ko);if(!!this.Bg){this.Bg.N8(this.AbA());this.BpG(this);}},BpG:
function(G){var B;if(!!this.FE)this.HR(this.FE);this.FE=(C.De.isPrototypeOf(B=A.
_NewObject(this.AbB(),0))?B:null);this.FE.H(I1);if(!!this.Bg)this.Bg.A96([B=this.
FE,B.A9B,B.A_0]);this.J(this.FE,0);},Bk$:function(G){this.Ra(this);A._GetAutoObject(
A.Device.Device).Dw(0);},AUb:function(G){A._GetAutoObject(A.Device.Device).Zw(1);
},AUa:function(G){A._GetAutoObject(A.Device.Device).Zw(2);},AUc:function(G){A._GetAutoObject(
A.Device.Device).Zw(3);},Ra:function(G){A._GetAutoObject(A.Device.Device).An.Bk(
A._GetAutoObject(A.Device.Helper).MB());},A0Z:function(s){this.Ra(s);},HS:function(
G){if(this.Afp){this.ALD(this);return;}this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(
A.ach.ADZ));this.N.C4(A.aaL(A.ach.Options));this.N.CF=[this,this.Ant];this.N.Ce=[
this,this.A93];this.N.Ca=[this,this.Bbr];this.N.Hz(A.jV);this.N.E6(A.jV);this.N.
CS(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B_()){this.N.IS.CZ(100);this.N.
Ce=null;}else this.N.IS.CZ(255);},AoF:function(s){this.HS(s);},AdT:function(Aih,
Aii,AJA){A._GetAutoObject(C.BS).ABX(Aih,Aii,[this,this.A9v,this.ATN],AJA);},Agc:
function(G){this.A4J(this);if(this.Afp)A.pe([this,this.ALD],this);},Agl:function(
){A._GetAutoObject(C.A7).Cb(9);},A4J:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QM()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dl(
A.aaR(A.acf.AEF));else if(A._GetAutoObject(A.Device.Helper).Arn(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dl(this.KS);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DM(1,4)){if(A._GetAutoObject(A.Device.Helper).ADi(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dl(A.aaR(A.acf.AOj));else this.Bg.Dl(A.aaR(
A.acf.AOi));}else this.Bg.Dl(A.aaR(A.acf.ASu));},AE6:function(G){var F;if(!!this.
Fm)(F=this.Fm,F[2].call(F[0],0));},AwX:function(E){if(A.aaZ(this.Fm,E))return;if(
!!this.Fm)A.z$([this,this.A08],this.Fm,0);this.Fm=E;if(!!E)A.zX([this,this.A08],
this.Fm,0);if(!!E)A.pe([this,this.A08],this);},AFa:function(G){var F;if(!!this.Fm
)(F=this.Fm,F[2].call(F[0],1));},Aw2:function(G){var F;if(!!this.Fm)(F=this.Fm,F[
2].call(F[0],2));},ATR:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],
3));},AT5:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],7));},AT6:function(
G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],5));},BiP:function(G){if(!this.Bg
)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.DQ.
Qs(1);}},I8:function(Aih,Aii,Ao3){A._GetAutoObject(C.BS).ABX(Aih,Aii,[this,this.
A9w,this.ATO],Ao3);},Bmz:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0
],4));},BiL:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.
Helper).GS(this.Bg.FO());this.DQ.BB9();}},BmA:function(G){var F;if(!!this.Fm)(F=
this.Fm,F[2].call(F[0],6));},BiM:function(G){if(!this.Bg)return;if(this.Nk()){A.
_GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.DQ.BB_();}},BiO:function(G
){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.
FO());this.DQ.Qs(1024);}},BnK:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(
F[0],8));},Akv:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],9));},BiQ:
function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(
this.Bg.FO());this.DQ.Qs(2);}},A6B:function(G){if(!this.Bg)return;if(this.Nk()){
A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());if(A._GetAutoObject(A.Device.
Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).AY(66,true,A.jV,0,null);else this.BBV();}},BiJ:function(G){if(!this.
Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.
DQ.Qs(16);}},BBV:function(){A._GetAutoObject(C.A7).Cb(94);},BiS:function(G){if(!
this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());
this.DQ.Qs(4);}},BiT:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(8);}},A6C:function(G){var B;if(!this.
Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());if(this.
Afp){A.zX([this,this.AAH],[B=this.DQ,B.SK,B.E5],0);this.ABg(this);}this.DQ.Ac_();
}},AuN:function(Aih,Aii,ByS){A._GetAutoObject(C.BS).BhF(Aih,Aii,ByS);},ALD:function(
G){this.N.Hz(A.jV);this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.AeC));this.N.CF=[this,this.
Bmo];this.N.T7.CZ(100);this.N.T8.CZ(100);var Gi=A._GetAutoObject(A.Device.Device
).An.B_();if(Gi<=0){this.N.Ct(null);this.N.C4(null);this.N.Ce=null;this.N.Ca=null;
this.N.WV=false;this.N.ZK=false;}else if(Gi===1){this.N.Ct(null);this.N.C4(A.aaL(
A.ach.AeD));this.N.Ce=null;this.N.Ca=[this,this.Aaq];this.N.WV=false;this.N.ZK=false;
}else{this.N.Ct(A.aaL(A.ach.Ard));this.N.C4(A.aaL(A.ach.Arl));this.N.Ce=[this,this.
A33];this.N.Ca=[this,this.A34];this.N.WV=true;this.N.ZK=true;}},A33:function(G){
if(!this.Bg)return;if(this.Bg.FO()<(A._GetAutoObject(A.Device.Device).An.B_()-1)
)this.Bg.GU(this.Bg.FO()+1);},A34:function(G){if(!this.Bg)return;if(this.Bg.FO()>
0)this.Bg.GU(this.Bg.FO()-1);},A$V:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>=0){var Bd=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bd>=0){this.Bg.GU(Bd);A.ab5("%s",Aoo);}}},Nk:function(){return this.
Bg.FO()>=0;},Aki:function(){return A._GetAutoObject(A.Device.Device).An.B_()>5;}
,Agz:function(){this.BhG();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.AUW),[this,this.
A93]);A._GetAutoObject(C.BS).Fz();},Z9:function(G){if(this.Afp)this.ALD(this);else
this.HS(this);},ABg:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E$();var Azi=aFilter.DM(1,4);if(!!Azi){aFilter.Nw(Azi);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GU(0);}},BHa:function(s){this.
ABg(s);},AAH:function(G){var B;if(!this.DQ.EN&&this.Afp){A.z$([this,this.AAH],[B=
this.DQ,B.SK,B.E5],0);this.ABg(this);}},Bom:function(G){var F;if(!!this.Fm)(F=this.
Fm,F[2].call(F[0],10));},BiV:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(256);}},A3T:function(G){var F;this.
ATO((F=this.Fm,F[1].call(F[0])));A.pe([this,this.AoF],this);},A08:function(s){this.
A3T(s);},Bmw:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],11));},BiK:
function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(
this.Bg.FO());this.DQ.Qs(4096);}},BiN:function(G){if(!this.Bg)return;if(this.Nk(
)){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(16384);}},A6H:function(
G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.
FO());this.BBW();}},BBW:function(){A._GetAutoObject(C.A7).Ace(75);},A6D:function(
G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.
FO());this.DQ.Qs(32768);}},A6F:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(65536);}},BiR:function(G){if(!this.
Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.
DQ.Qs(131072);}},BhG:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Arn(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.ACs));else A._GetAutoObject(C.BS).TG(A.
aaR(A.acf.ACs),[this,this.Bk$]);A._GetAutoObject(C.BS).TG(A.aaR(A.acf.AkV),[this
,this.Blb]);A._GetAutoObject(C.BS).Fz();},A6G:function(G){if(!this.Bg)return;if(
this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(128);}}
,BBH:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ch],this);},A6E:function(
G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.
FO());this.DQ.Qs(524288);}},BiU:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(262144);}},ATN:function(E){if(this.
AUw===E)return;this.AUw=E;A.abo([this,this.A9v,this.ATN],0);},ATO:function(E){if(
this.AUx===E)return;this.AUx=E;A.abo([this,this.A9w,this.ATO],0);},A7f:function(
){return C.YC;},Bgx:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?
B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bov:function(G){A._GetAutoObject(A.Device.Device).Zw(0);
},Bow:function(G){A._GetAutoObject(A.Device.Device).Zw(14);},A_I:function(E){if(
A.aaY(this.ARS,E))return;this.ARS=E;if(!!this.Bg)this.Bg.H(E);},A9v:function(){return this.
AUw;},A9w:function(){return this.AUx;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADH._Init.call(this.V$={I:this},0);C.Ko._Init.call(this.Ko={I:this},0);
this.__proto__=C.GJ;this.Background.H(Cf);this.N.Z(true);this.N.OW(true);this.N.
OX(true);this.Ek.A_x(A.jb.CU);this.Ek.A_y(A.jb.Text);this.Dr(C.Kv);this.V$.H(I1);
this.KS=A.aaR(A.acf.AEF);this.J(this.V$,0);this.DQ=A._GetAutoObject(C.DQ);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V$._Done();this.Ko._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V$._ReInit();
this.Ko._ReInit();this.Dl(A.aaR(A.acf.AEF));this.CQ();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ACn={AP:null,A$:null,UQ:null,AcE:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UQ.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.UQ.M[2]-1,0,this.UQ.M[2]+1,aSize[1]]);this.AcE.H([this.UQ.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UQ.L(this.V.AQ);this.AcE.L(this.
V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){this.T(this.
AX.CC(Ad,1).toFixed());this.UQ.R(this.AX.CC(Ad,2).toFixed());this.AcE.R(this.AX.
CC(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.UQ={I:this},0);A.acg.Text._Init.call(this.AcE={I:this
},0);this.__proto__=C.ACn;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UQ.L(A.jb.Text
);this.AcE.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UQ,0);this.
J(this.AcE,0);this.UQ.S(A.aaL(A.fl.Af));this.AcE.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UQ.
_Done();this.AcE._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UQ._ReInit();this.AcE._ReInit(
);this.UQ.S(A.aaL(A.fl.Af));this.AcE.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Aea={OH:null,SY:null,Mt:null,Init:function(aArg){var B;A.zX([this,this.A3A],[
B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyY],0);A.zX([this,this.AdA],[B=A._GetAutoObject(
A.Device.Device),B.Awe,B.AyX],0);A.pe([this,this.AdA],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SY.R(A._GetAutoObject(A.Device.Device).Abc.toFixed()+As7
);this.OH.Z(A._GetAutoObject(A.Device.Device).AmI);},AdA:function(G){this.Am();}
,M5:function(G){A._GetAutoObject(C.A7).FB();},A3A:function(G){if(A._GetAutoObject(
A.Device.Device).AmI===false){this.OH.Z(false);A._GetAutoObject(C.A7).FB();}else
this.OH.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OH={I:this},0);A.acg.Text._Init.call(this.SY={I:this},0);C.Mt._Init.call(
this.Mt={I:this},0);this.__proto__=C.Aea;var B;this.Background.L(A.jb.CU);this.N.
Z(true);this.N.CS(A.aaR(A.acf.Ok));this.OH.H(Xp);this.OH.R(A.aaR(A.acf.OH));this.
OH.L(A.jb.Text);this.OH.Z(false);this.SY.H(As8);this.SY.R(As9);this.SY.L(A.jb.Text
);this.Mt.H(As_);this.J(this.OH,0);this.J(this.SY,0);this.J(this.Mt,0);this.N.Ca=[
this,this.M5];this.OH.S(A.aaL(A.fl.Af));this.SY.S(A.aaL(A.fl.Af));this.Mt.Au([B=
A._GetAutoObject(A.Device.Device),B.Awe,B.AyX]);this.Mt.A_P([B=A._GetAutoObject(
A.Device.Device),B.Awh,B.AyY]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OH._Done();this.SY._Done();this.Mt._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OH._ReInit();this.SY._ReInit();this.Mt._ReInit(
);this.N.CS(A.aaR(A.acf.Ok));this.OH.R(A.aaR(A.acf.OH));this.OH.S(A.aaL(A.fl.Af)
);this.SY.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mt={Ad7:null,Ad8:null,Hh:function(G){var F;if(!!this.Q){this.A2H();var Adb=(
F=this.Q,F[1].call(F[0]));if(Adb>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gk);this.
OD.L((this.OD.AQ&0x00FFFFFF)|(this.AlP(Adb,0,20)<<24));this.TN.L((this.TN.AQ&0x00FFFFFF
)|(this.AlP(Adb,21,40)<<24));this.TO.L((this.TO.AQ&0x00FFFFFF)|(this.AlP(Adb,41,
60)<<24));this.Ad7.L((this.Ad7.AQ&0x00FFFFFF)|(this.AlP(Adb,61,80)<<24));this.Ad8.
L((this.Ad8.AQ&0x00FFFFFF)|(this.AlP(Adb,81,100)<<24));}},A2H:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.Ve=this.Ad8;else if((F=this.Q,F[
1].call(F[0]))>60)this.Ve=this.Ad7;else if((F=this.Q,F[1].call(F[0]))>40)this.Ve=
this.TO;else if((F=this.Q,F[1].call(F[0]))>20)this.Ve=this.TN;else this.Ve=this.
OD;}else this.Ve=null;},_Init:function(aArg){C.OF._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad7={I:this},0);A.acg.AL._Init.call(this.Ad8={I:this},0);this.__proto__=
C.Mt;this.H(Aop);this.NY.H(Aop);this.OD.H(As$);this.TN.H(Alf);this.TO.H(Ayh);this.
Ad7.H(Ayi);this.Ad7.L(A.jb.E1);this.Ad8.H(Ayj);this.Ad8.L(A.jb.E1);this.J(this.Ad7
,0);this.J(this.Ad8,0);this.NY.Ax(A.aaL(A.ach.AM5));},_Done:function(){this.__proto__=
C.OF;this.Ad7._Done();this.Ad8._Done();C.OF._Done.call(this);},_ReInit:function(
){C.OF._ReInit.call(this);this.Ad7._ReInit();this.Ad8._ReInit();},_Mark:function(
D){var B;C.OF._Mark.call(this,D);if((B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVr={Od:null,Lx:null,Ak9:null,Z6:null,Z5:null,CQ:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApS],[B=A._GetAutoObject(A.Device.Device),B.
AS6,B.A0S],0);A.zX([this,this.ApS],[B=A._GetAutoObject(A.Device.Device),B.AS9,B.
A0U],0);A.zX([this,this.ApS],[B=A._GetAutoObject(A.Device.Device),B.A9L,B.BbY],0
);A.pe([this,this.ApS],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABK(this);this.BC2(this);this.DK(this);},BBj:function(G){A._GetAutoObject(
A.Device.Device).AsO();},ApS:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Z6.Z(false);break;case 4:{var A4l;if(!A._GetAutoObject(A.Device.Device).Afu)A4l=
0;else A4l=((A._GetAutoObject(A.Device.Device).AxY*100)/A._GetAutoObject(A.Device.
Device).Afu)|0;this.Z6.Bx(A4l);this.Z6.Z(true);}break;default:A.ab5("%s%e",Ata,A.
_GetAutoObject(A.Device.Device).SyncState);}},BC2:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CK);this.Lx.L(A.jb.Text);this.Od.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gk);this.Lx.L(A.jb.Bm);this.Od.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",Ata,A._GetAutoObject(A.Device.Device).SyncState);}},DK:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C3(null);this.N.CF=null;this.N.CS(A.jV);this.N.Ca=null;}break;
case 7:{this.N.C3(null);this.N.CF=null;this.N.CS(A.aaR(A.acf.Ok));this.N.Ca=[this
,this.BBj];}break;default:A.ab5("%s%e",Ata,A._GetAutoObject(A.Device.Device).SyncState
);}},ABK:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lx.R(A.aaR(A.acf.Bqq));break;case 1:this.Lx.R(A.aaR(A.acf.Bqn));break;
case 2:this.Lx.R(A.aaR(A.acf.Bqk));break;case 3:this.Lx.R(A.aaR(A.acf.Bqo));break;
case 4:this.Lx.R((A.aaR(A.acf.Bqm)+Ayk)+A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).MN(A.aaR(A.acf.Bo1),Pc,A._GetAutoObject(A.Device.Device).AxY.toFixed(
)),Ayl,A._GetAutoObject(A.Device.Device).Afu.toFixed()));break;case 5:this.Lx.R(
A.aaR(A.acf.Bqp));break;case 7:this.Lx.R(A.aaR(A.acf.Bql));break;default:A.ab5("%s%e"
,Ata,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.Od={I:this},0);C.CG._Init.call(this.Lx={I:this
},0);A.acg.Ap._Init.call(this.Ak9={I:this},0);A.acs.ADK._Init.call(this.Z6={I:this
},0);A.acs.ADL._Init.call(this.Z5={I:this},0);this.__proto__=C.AVr;this.N.Z(true
);this.Od.H(AWn);this.Od.R(A.aaR(A.acf.Od));this.Lx.A1(0x3F);this.Lx.H(AWo);this.
Lx.A6(0x12);this.Ak9.H(AWp);this.Ak9.L(A.jb.AV);this.Z6.H(AWq);this.Z6.As(false);
this.Z6.Bx(0);this.Z5.Bog(0);this.Z5.A$b(0);this.Z5.A_$(A.jb.AV);this.Z5.A__(0);
this.Z5.AGj(AHD);this.J(this.Od,0);this.J(this.Lx,0);this.J(this.Ak9,0);this.J(this.
Z6,0);this.Od.S(A.aaL(A.fl.EK));this.Od.A0(A.aaL(A.fl.Af));this.Od.Cr(A.aaL(A.fl.
Ak));this.Lx.S(A.aaL(A.fl.Af));this.Lx.A0(A.aaL(A.fl.Ak));this.Lx.Cr(A.aaL(A.fl.
Bh));this.Ak9.Ax(A.aaL(A.ach.AQ_));this.Z6.OnSetAppearance(this.Z5);this.Z5.A$a(
A.aaL(A.ach.N1));this.Z5.A_9(A.aaL(A.ach.N1));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.Od._Done();this.Lx._Done();this.Ak9._Done();this.Z6._Done(
);this.Z5._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Od._ReInit();this.Lx._ReInit();this.Ak9._ReInit();this.Z6._ReInit();this.
Z5._ReInit();this.Od.R(A.aaR(A.acf.Od));this.Od.S(A.aaL(A.fl.EK));this.Od.A0(A.aaL(
A.fl.Af));this.Od.Cr(A.aaL(A.fl.Ak));this.Lx.S(A.aaL(A.fl.Af));this.Lx.A0(A.aaL(
A.fl.Ak));this.Lx.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Od)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z5)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aq7={_Init:function(aArg){C.ADA._Init.call(this,aArg
);this.__proto__=C.Aq7;this.A_A(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,BI:A.abi(3,0,{0:2,2:1}),Du:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.BI.Get(aIndex
);},Gm:function(aIndex){return this.GenderToString.BT(this.C7(aIndex));},DZ:function(
A8){var O=0;while(O<3){if(this.BI.Get(O)===A8)return O;O=O+1;}return-1;},H8:function(
){var O=0;var max=-1;while(O<3){if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.J0(
E);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af6],[B=this.Animal,B.WJ,B.J0],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af6],[B=this.Animal,B.WJ,B.J0],0);A.pe([this,this.Af6],this);},Af6:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B$,
this.Cc],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.BI=[]).__proto__=C.Gender.BI;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,BI:A.abi(4,0,{1:1,2:2,3:3}),Du:function(){return 4;},C7:function(aIndex){if(
aIndex>=4)return-1;return this.BI.Get(aIndex);},Gm:function(aIndex){return this.
BirthTypeToString.BT(this.C7(aIndex));},DZ:function(A8){var O=0;while(O<4){if(this.
BI.Get(O)===A8)return O;O=O+1;}return-1;},H8:function(){var O=0;var max=-1;while(
O<4){if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}return max;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akw(E);},A1X:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B$,this.
Cc],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1X],[B=this.Animal,B.ASL,B.Akw],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1X],[B=this.Animal,B.ASL,B.Akw],0);A.pe([this,this.A1X],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.BI=[]).__proto__=C.BirthType.BI;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acv:null,Du:
function(){return A._GetAutoObject(A.Device.Helper).Ad2.MM;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Ad2.MM)return-1;return A._GetAutoObject(
A.Device.Helper).Ad2.Get(aIndex);},Gm:function(aIndex){return this.Acv.BT(this.C7(
aIndex));},DZ:function(A8){var O=0;while(O<A._GetAutoObject(A.Device.Helper).Ad2.
MM){if(A._GetAutoObject(A.Device.Helper).Ad2.Get(O)===A8)return O;O=O+1;}return-
1;},H8:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UN.
MM){if(A._GetAutoObject(A.Device.Helper).UN.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UN.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.EC(E);},A1Q:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B$,this.Cc],0);},L6:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1Q],[B=this.Animal,B.PX,B.EC],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1Q],[B=this.Animal,B.PX,B.EC],0);A.pe([
this,this.A1Q],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acv={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acv._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acv._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AU8={Init:function(aArg){var B;A.pe([this,this.AfK],this);A.zX([this,this.AfK
],[B=A._GetAutoObject(A.Device.Device),B.ArI,B.Atu],0);},A4q:function(G){A._GetAutoObject(
A.Device.Device).AY(38,true,A.jV,0,[this,this.Bce]);},A31:function(G){var B;var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).AsA(this);},A2e:function(G){var F;if(this.A_===1){var BP=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlX)this.D7=this.AlX;if(this.D7<A._GetAutoObject(
A.Device.Device).AcK)this.D7=A._GetAutoObject(A.Device.Device).AcK;if(this.DW!==
BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.
A_===2){var BP=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);
}}this.DK(this);this.Am();},A2Q:function(G){var F;if(this.A_===1){var BP=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP){if(!!this.
J3)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.A_===2){var BP=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlS)this.DW=this.AlS;if(this.DW!==BP){
if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);}}this.DK(this
);this.Am();},GH:function(G){this.PQ.R(AHE+A._GetAutoObject(A.Device.Converter).
Ak3(this.D7));this.PR.R(AHE+A._GetAutoObject(A.Device.Converter).Ak3(this.DW));this.
SE.R(A._GetAutoObject(A.acj.Temperature).AlQ());},A2J:function(AtA){if(AtA===1)return this.
PQ;else if(AtA===2)return this.PR;else return null;},_Init:function(aArg){C.Acu.
_Init.call(this,aArg);this.__proto__=C.AU8;this.AlS=5000;this.AlX=3000;this.T(A.
aaR(A.acf.Ary));this.Background.H(AfH);this.V.H(BD);this.V.R(A.aaR(A.acf.AHe));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Acu._ReInit.call(this);this.T(
A.aaR(A.acf.Ary));this.V.R(A.aaR(A.acf.AHe));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CK);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Abf:null,Abj:null,Abh:
null,Background:null,Abe:null,Abi:null,Abg:null,AjG:null,ArD:null,VX:null,A5:0,BA1:
function(G){if(this.AjG.CP===6){if(this.A5===1)this.AnN(2);else if(this.A5===2)this.
AnN(3);else this.AnN(1);}else if(this.AjG.CP===7){if(this.A5===3)this.AnN(2);else
if(this.A5===2)this.AnN(1);else this.AnN(3);}},AnN:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.Abe.M);break;case 2:this.
Background.H(this.Abi.M);break;case 1:this.Background.H(this.Abg.M);break;default:
this.Background.H(Aoq);}},H1:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hq._Init.
call(this.Abf={I:this},0);A.acg.Hq._Init.call(this.Abj={I:this},0);A.acg.Hq._Init.
call(this.Abh={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aer._Init.call(this.Abe={I:this},0);A.acg.Aer._Init.call(this.Abi={I:this},0);A.
acg.Aer._Init.call(this.Abg={I:this},0);A.Core.BF._Init.call(this.AjG={I:this},0
);A.Core.BF._Init.call(this.ArD={I:this},0);A.Graphics.AMX._Init.call(this.VX={I:
this},0);this.__proto__=C.Rating;this.H(AWr);this.Abf.H(AHF);this.Abf.L(A.jb.Text
);this.Abf.AnL(Alg);this.Abf.Nu(3);this.Abf.Z(true);this.Abj.H(AHG);this.Abj.L(A.
jb.Text);this.Abj.AnL(Alg);this.Abj.Nu(3);this.Abj.Z(true);this.Abh.H(AHH);this.
Abh.L(A.jb.Text);this.Abh.AnL(Alg);this.Abh.Nu(3);this.Abh.Z(true);this.Background.
H(Aoq);this.Background.L(A.jb.AV);this.Abe.H(AHF);this.Abe.L(A.jb.E1);this.Abe.AnL(
Alg);this.Abe.Z(true);this.Abi.H(AHG);this.Abi.L(A.jb.Ib);this.Abi.AnL(Alg);this.
Abi.Z(true);this.Abg.H(AHH);this.Abg.L(A.jb.Gk);this.Abg.AnL(Alg);this.Abg.Z(true
);this.AjG.Filter=147;this.ArD.Filter=1;this.VX.BmP(360);this.VX.Bn5(22);this.VX.
Boe(2);this.J(this.Abf,0);this.J(this.Abj,0);this.J(this.Abh,0);this.J(this.Background
,0);this.J(this.Abe,0);this.J(this.Abi,0);this.J(this.Abg,0);this.Abf.ZD(this.VX
);this.Abj.ZD(this.VX);this.Abh.ZD(this.VX);this.Background.Ax(A.aaL(A.ach.N0));
this.Abe.ZD(this.VX);this.Abi.ZD(this.VX);this.Abg.ZD(this.VX);this.AjG.BG=[this
,this.BA1];this.ArD.BG=[this,this.H1];},_Done:function(){this.__proto__=A.Core.P;
this.Abf._Done();this.Abj._Done();this.Abh._Done();this.Background._Done();this.
Abe._Done();this.Abi._Done();this.Abg._Done();this.AjG._Done();this.ArD._Done();
this.VX._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Abf._ReInit();this.Abj._ReInit();this.Abh._ReInit();this.Background.
_ReInit();this.Abe._ReInit();this.Abi._ReInit();this.Abg._ReInit();this.AjG._ReInit(
);this.ArD._ReInit();this.VX._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Abf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abj)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.AsC={Akk:null,Asm:null,Background:null,TZ:null,TU:null,Ab4:null,Ab3:null,Ab2:
null,Acz:null,Acy:null,Acx:null,Acq:null,Acp:null,AbX:null,AbW:null,Acg:null,Acf:
null,AqI:null,Init:function(aArg){},BkN:function(G){this.Ab4.R(AWs);this.Ab3.R(A.
jV);this.Ab2.R(A.jV);this.Acz.R(AWt);this.Acy.R(A.jV);this.Acx.R(A.jV);this.Acq.
R(A.jV);this.Acp.R(A.jV);this.AbX.R(A.jV);this.AbW.R(A.jV);this.Acg.R(A.jV);this.
Acf.R(A.jV);},BoJ:function(G){this.TU.Z(true);this.TZ.Z(true);var II=this.Iq();if(
!II)return;this.TZ.R(II.GetFPS().toFixed()+AHI);this.TU.R(AWu);this.TU.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akk={I:this},0);A.Core.Timer._Init.call(this.Asm={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TZ={I:this},0);A.acg.
Text._Init.call(this.TU={I:this},0);A.acg.Text._Init.call(this.Ab4={I:this},0);A.
acg.Text._Init.call(this.Ab3={I:this},0);A.acg.Text._Init.call(this.Ab2={I:this}
,0);A.acg.Text._Init.call(this.Acz={I:this},0);A.acg.Text._Init.call(this.Acy={I:
this},0);A.acg.Text._Init.call(this.Acx={I:this},0);A.acg.Text._Init.call(this.Acq={
I:this},0);A.acg.Text._Init.call(this.Acp={I:this},0);A.acg.Text._Init.call(this.
AbX={I:this},0);A.acg.Text._Init.call(this.AbW={I:this},0);A.acg.Text._Init.call(
this.Acg={I:this},0);A.acg.Text._Init.call(this.Acf={I:this},0);A.acg.AL._Init.call(
this.AqI={I:this},0);this.__proto__=C.AsC;this.H(AcS);this.As(false);this.Akk.PZ(
2000);this.Akk.WO(1);this.Akk.As(true);this.Asm.As(true);this.Background.A1(0x3F
);this.Background.H(AcS);this.Background.L(0x78000000);this.TZ.H(AWv);this.TZ.A6(
0x14);this.TZ.R(A.jV);this.TZ.L(0xFFFFFC00);this.TZ.Z(false);this.TU.H(AWw);this.
TU.A6(0x11);this.TU.R(A.jV);this.TU.Z(false);this.Ab4.H(AWx);this.Ab4.A6(0x11);this.
Ab4.R(A.jV);this.Ab3.H(AHJ);this.Ab3.A6(0x11);this.Ab3.R(A.jV);this.Ab2.H(Atb);this.
Ab2.A6(0x14);this.Ab2.R(A.jV);this.Acz.H(AHK);this.Acz.A6(0x11);this.Acz.R(A.jV);
this.Acy.H(AHL);this.Acy.A6(0x11);this.Acy.R(A.jV);this.Acx.H(Aym);this.Acx.A6(0x14
);this.Acx.R(A.jV);this.Acq.H(AHM);this.Acq.A6(0x11);this.Acq.R(A.jV);this.Acp.H(
Ayn);this.Acp.A6(0x14);this.Acp.R(A.jV);this.AbX.H(AWy);this.AbX.A6(0x11);this.AbX.
R(A.jV);this.AbW.H(AWz);this.AbW.A6(0x14);this.AbW.R(A.jV);this.Acg.H(AWA);this.
Acg.A6(0x11);this.Acg.R(A.jV);this.Acf.H(AWB);this.Acf.A6(0x14);this.Acf.R(A.jV);
this.AqI.H(AHN);this.J(this.Background,0);this.J(this.TZ,0);this.J(this.TU,0);this.
J(this.Ab4,0);this.J(this.Ab3,0);this.J(this.Ab2,0);this.J(this.Acz,0);this.J(this.
Acy,0);this.J(this.Acx,0);this.J(this.Acq,0);this.J(this.Acp,0);this.J(this.AbX,
0);this.J(this.AbW,0);this.J(this.Acg,0);this.J(this.Acf,0);this.J(this.AqI,0);this.
Akk.MJ=[this,this.BkN];this.Asm.MJ=[this,this.BoJ];this.TZ.S(A.aaL(A.fl.Ak));this.
TU.S(A.aaL(A.fl.Ak));this.Ab4.S(A.aaL(A.fl.Ak));this.Ab3.S(A.aaL(A.fl.Ak));this.
Ab2.S(A.aaL(A.fl.Ak));this.Acz.S(A.aaL(A.fl.Ak));this.Acy.S(A.aaL(A.fl.Ak));this.
Acx.S(A.aaL(A.fl.Ak));this.Acq.S(A.aaL(A.fl.Ak));this.Acp.S(A.aaL(A.fl.Ak));this.
AbX.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));this.
Acf.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akk._Done();this.Asm._Done();this.Background._Done();this.TZ._Done();this.TU.
_Done();this.Ab4._Done();this.Ab3._Done();this.Ab2._Done();this.Acz._Done();this.
Acy._Done();this.Acx._Done();this.Acq._Done();this.Acp._Done();this.AbX._Done();
this.AbW._Done();this.Acg._Done();this.Acf._Done();this.AqI._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akk._ReInit();this.
Asm._ReInit();this.Background._ReInit();this.TZ._ReInit();this.TU._ReInit();this.
Ab4._ReInit();this.Ab3._ReInit();this.Ab2._ReInit();this.Acz._ReInit();this.Acy.
_ReInit();this.Acx._ReInit();this.Acq._ReInit();this.Acp._ReInit();this.AbX._ReInit(
);this.AbW._ReInit();this.Acg._ReInit();this.Acf._ReInit();this.AqI._ReInit();this.
TZ.S(A.aaL(A.fl.Ak));this.TU.S(A.aaL(A.fl.Ak));this.Ab4.S(A.aaL(A.fl.Ak));this.Ab3.
S(A.aaL(A.fl.Ak));this.Ab2.S(A.aaL(A.fl.Ak));this.Acz.S(A.aaL(A.fl.Ak));this.Acy.
S(A.aaL(A.fl.Ak));this.Acx.S(A.aaL(A.fl.Ak));this.Acq.S(A.aaL(A.fl.Ak));this.Acp.
S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.Acg.
S(A.aaL(A.fl.Ak));this.Acf.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asm).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab3)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Acg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acf)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGX={FN:null,Dm:null,Av:null,JB:null,HO:null,Un:null,Bc:null,Ss:null,Gy:null
,Gx:null,FZ:0,A_:0,Bkk:false,Init:function(aArg){},Ai:function(Ae){C.Ds.Ai.call(
this,Ae);this.Hy.Z(false);this.H9.Z(false);if(!!this.Dm){this.Ss.R(this.Av.Format(
AWC));this.Un.R(this.Av.Format(MR));}if(this.A_===1){this.HO.Z(true);this.HO.H(this.
Ss.M);this.HO.L(A.jb.Bm);this.Ss.L(this.Background.AQ);this.Un.L(A.jb.Bm);}else if(
this.A_===2){this.HO.Z(true);this.HO.H(this.Un.M);this.HO.L(A.jb.Bm);this.Ss.L(A.
jb.Bm);this.Un.L(this.Background.AQ);}else{this.HO.Z(false);this.Ss.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Un.L(this.V.AQ);}},Qx:function(G){if(this.FI===1)A.pe([
this,this.Vj],this);else if(this.FI===4)A.pe([this,this.AiI],this);else if(this.
FI===5)A.pe([this,this.Aiu],this);C.Ds.Qx.call(this,G);},Ki:function(G){switch(this.
A_){case 0:C.Ds.Ki.call(this,G);break;case 2:break;default:this.Adz(this);}},Kd:
function(G){switch(this.A_){case 0:C.Ds.Kd.call(this,G);break;default:this.Ait(this
);}},AdB:function(G){var F;if(!!this.Dm)this.Uv((F=this.Dm,F[1].call(F[0])));},Acb:
function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdB],this.Dm
,0);this.Dm=E;if(!!E)A.zX([this,this.AdB],E,0);if(!!E)A.pe([this,this.AdB],this);
},Uv:function(E){if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.FZ);this.
Am();},Adz:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Vj],this
);this.Bo.As(false);}this.Bo.As(true);},Vj:function(G){this.Ex(this.A_+1);},Al9:
function(G){this.FI=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiI],this);this.Bo.
As(false);}this.Bo.As(true);},Al8:function(G){this.FI=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Aiu],this);this.Bo.As(false);}this.Bo.As(true);},AiI:function(G){
var B;var F;var BP=this.FZ;if(this.A_===1)this.Av.AnG(this.Av.AjU+1);if(this.A_===
2)this.Av.AnJ(this.Av.Av8+1);this.Av.AnM(0);this.Uv(((B=(this.Av.JY()|0))<0)?B+0x100000000:
B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FZ));A.abo(this.
Dm,0);}},Aiu:function(G){var B;var F;var BP=this.FZ;if(this.A_===1)this.Av.AnG(this.
Av.AjU-1);if(this.A_===2)this.Av.AnJ(this.Av.Av8-1);this.Av.AnM(0);this.Uv(((B=(
this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[
2].call(F[0],this.FZ));A.abo(this.Dm,0);}},DK:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeD));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vj];}break;case 2:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkS((F=this.N,F[1].call(F[
0])));}},FW:function(G){this.Ex(1);},Hf:function(G){this.Ex(0);},Ex:function(EO){
var F;if(!this.A_)this.FN.AjC((F=this.N,F[1].call(F[0])));this.A_=EO;this.Bkk=true;
if((this.A_<0)||(this.A_>2))this.A_=0;this.DK(this);this.Gy.Bw=!!this.A_;this.Gx.
Bw=!!this.A_;this.Am();},Ait:function(G){if(this.A_>1)this.Ex(this.A_-1);},_Init:
function(aArg){C.Ds._Init.call(this,aArg);A.Core.Bs._Init.call(this.Av={I:this},
0);A.Core.BF._Init.call(this.JB={I:this},0);A.acg.AL._Init.call(this.HO={I:this}
,0);A.acg.Text._Init.call(this.Un={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Ss={I:this},0);A.Core.BF._Init.call(this.Gy={I:this
},0);A.Core.BF._Init.call(this.Gx={I:this},0);this.__proto__=C.AGX;this.H(U4);this.
V.R(Ayo);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H9.Z(false);this.JB.Filter=1;this.
HO.H(AWD);this.HO.L(0x55FFFFFF);this.Un.H(AWE);this.Un.Je(true);this.Bc.H(AWF);this.
Bc.A6(0x14);this.Bc.R(AWG);this.Ss.H(AWH);this.Ss.Je(true);this.Ss.A6(0x14);this.
Gy.Filter=4;this.Gy.Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HO,0);
this.J(this.Un,0);this.J(this.Bc,0);this.J(this.Ss,0);this.JB.BG=[this,this.Adz];
this.Un.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Ss.S(A.aaL(A.fl.EK));this.
Gy.BG=[this,this.Al9];this.Gy.D1=[this,this.AiI];this.Gx.BG=[this,this.Al8];this.
Gx.D1=[this,this.Aiu];this.FN=A._NewObject(C.Aew,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ds;this.Av._Done();this.JB._Done();this.HO._Done();this.Un._Done(
);this.Bc._Done();this.Ss._Done();this.Gy._Done();this.Gx._Done();C.Ds._Done.call(
this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit();this.JB._ReInit(
);this.HO._ReInit();this.Un._ReInit();this.Bc._ReInit();this.Ss._ReInit();this.Gy.
_ReInit();this.Gx._ReInit();this.Un.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.Ss.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((
B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Un)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CG={B7:null,AmX:null,AqX:null,Em:null,Text:null,String:A.jV,Bef:A.jV,Kn:0x12
,ALl:0,AQ:0xFFFFFFFF,Oa:0,AUP:0,A$I:0,Beg:true,G6:function(CN){var LO=(A.Core.ARM.
isPrototypeOf(CN)?CN:null);if(!!LO)this.BDb(this);return A.Core.P.G6.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajm],this);}
,Dd:function(aFilter){return A.abh(this.Text.Dd(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Beg){this.Bef=E;this.Beg=false;
}this.ALl=E.length;A.pe([this,this.Ajm],this);},S:function(E){if(this.B7===E)return;
this.B7=E;A.pe([this,this.Ajm],this);},A0:function(E){if(this.AmX===E)return;this.
AmX=E;A.pe([this,this.Ajm],this);},Cr:function(E){if(this.AqX===E)return;this.AqX=
E;A.pe([this,this.Ajm],this);},A6:function(E){if(E===this.Kn)return;this.Kn=E;this.
Text.A6(E);},Ajm:function(G){var B;var ALr=0;if(!this.ALl){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KX(false);if(!!this.B7){ALr=
this.B7.YA(this.String,0,this.ALl);if(ALr<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)
)){this.Text.S(this.B7);this.Text.Axa(this.Oa);return;}}this.Text.KX(true);if(!!
this.AmX){ALr=this.AmX.YA(this.String,0,this.ALl);this.Text.S(this.AmX);this.Text.
Axa(this.AUP);if((ALr<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)))&&(((B=this.Text.Dd(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqX){this.Text.S(this.AqX);
if(((B=this.Text.Dd())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Axa((((this.Text.
B7.Ascent+this.Text.B7.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BDb:function(G){this.R(this.Bef);},Q9:function(E){if(
A.aa0(this.Em,E))return;this.Em=E;this.Text.Q9(E);},ASJ:function(){return A.abh(
this.Text.Dd(),this.M.slice(0,2));},Afi:function(AoR){return A.abf(this.M.slice(
0,2),this.Text.Afi(AoR));},Axa:function(E){if(this.Oa===E)return;this.Oa=E;A.pe([
this,this.Ajm],this);},Bn7:function(E){if(this.AUP===E)return;this.AUP=E;A.pe([this
,this.Ajm],this);},Bn8:function(E){if(this.A$I===E)return;this.A$I=E;A.pe([this,
this.Ajm],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CG;this.H(AHO);this.As(false);
this.Text.A1(0x3F);this.Text.H(AHO);this.Text.R(Rq);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjS={Y:null,IR:null,AeO:null,Jb:null,Nh:null,AeI:null,AeN:null,AeM:null,AeJ:
null,AeL:null,AeK:null,Nj:null,N2:null,MC:null,Dg:function(E){C.YB.Dg.call(this,
E);this.IR.L(E);this.AeO.L(E);this.Jb.L(E);this.Nh.L(E);this.MC.L(E);this.AeI.L(
E);this.Nj.L(E);this.N2.L(E);this.AeN.L(E);this.AeM.L(E);this.AeJ.L(E);this.AeL.
L(E);this.AeK.L(E);},DX:function(G){C.YB.DX.call(this,G);this.XU(8,1,this.Nh);this.
XU(12,1,this.MC);this.XU(11,1,this.AeI);this.XU(7,1,this.Nj);this.XU(14,1,this.N2
);this.XU(1,4,this.IR);this.XU(1,1,this.AeO);this.XU(4,1,this.Jb);this.XU(22,1,this.
AeN);this.XU(26,1,this.AeM);this.XU(30,1,this.AeJ);this.XU(19,1,this.AeL);this.XU(
31,1,this.AeK);this.Text.Z(!this.Y.TX(null,0x1));},XU:function(AJB,Eb,AfX){var ABr=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adl=A._GetAutoObject(
A.Device.Device).An.Filter.DM(AJB,Eb);if(!!Adl){ABr=true;switch(AJB){case 14:{var
AzH=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adl)?Adl:null);if(!!AzH)AfX.
Ax(A._GetAutoObject(A.Device.Converter).A5C(AzH.A5));}break;case 7:{var AzH=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adl)?Adl:null);if(!!AzH)AfX.Ax(A._GetAutoObject(
A.Device.Converter).AmZ(AzH.A5));}break;case 1:if(Eb===4)AfX.Ax(A.aaL(A.ach.ADZ)
);else if(Adl.Operator===4)ABr=false;break;case 22:switch(Adl.Operator){case 0:case
3:AfX.Ax(A.aaL(A.ach.AQS));break;default:AfX.Ax(A.aaL(A.ach.AjY));}break;case 26:
switch(Adl.Operator){case 0:case 3:AfX.Ax(A.aaL(A.ach.AQQ));break;default:AfX.Ax(
A.aaL(A.ach.AvH));}break;default:;}}else if((AJB===1)&&(Eb===4)){ABr=true;AfX.Ax(
A.aaL(A.ach.AeE));}}else if((AJB===1)&&(Eb===4)){ABr=true;AfX.Ax(A.aaL(A.ach.AeE
));}AfX.Z(ABr);},_Init:function(aArg){C.YB._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(
this.AeO={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);A.acg.Ap._Init.call(
this.Nh={I:this},0);A.acg.Ap._Init.call(this.AeI={I:this},0);A.acg.Ap._Init.call(
this.AeN={I:this},0);A.acg.Ap._Init.call(this.AeM={I:this},0);A.acg.Ap._Init.call(
this.AeJ={I:this},0);A.acg.Ap._Init.call(this.AeL={I:this},0);A.acg.Ap._Init.call(
this.AeK={I:this},0);A.acg.Ap._Init.call(this.Nj={I:this},0);A.acg.Ap._Init.call(
this.N2={I:this},0);A.acg.Ap._Init.call(this.MC={I:this},0);this.__proto__=C.AjS;
this.Y.A1(0x3F);this.Y.H(AWI);this.Y.JZ(3);this.IR.H(Ayp);this.AeO.H(AWJ);this.AeO.
Aj(true);this.Jb.H(Atc);this.Jb.Aj(true);this.Nh.H(Ayq);this.Nh.Aj(true);this.AeI.
H(AWK);this.AeI.Aj(true);this.AeN.H(AHP);this.AeN.Aj(true);this.AeM.H(AHP);this.
AeM.Aj(true);this.AeJ.H(AWL);this.AeJ.Aj(true);this.AeL.H(AHQ);this.AeL.Aj(true);
this.AeK.H(AHQ);this.AeK.Aj(true);this.Nj.H(AHR);this.Nj.Aj(true);this.N2.H(AHS);
this.N2.Aj(true);this.Text.R(A.aaR(A.acf.None));this.MC.H(AHR);this.MC.Aj(true);
this.J5(this.Gw,-3);this.J5(this.D2,-3);this.J5(this.A$,-3);this.J5(this.AP,-2);
this.J(this.Y,-2);this.J(this.IR,-2);this.J(this.AeO,-2);this.J(this.Jb,-2);this.
J(this.Nh,-2);this.J(this.AeI,-2);this.J(this.AeN,-2);this.J(this.AeM,-2);this.J(
this.AeJ,-2);this.J(this.AeL,-2);this.J(this.AeK,-2);this.J(this.Nj,-2);this.J(this.
N2,-2);this.J(this.MC,0);this.IR.Ax(A.aaL(A.ach.AeE));this.AeO.Ax(A.aaL(A.ach.AQF
));this.Jb.Ax(A.aaL(A.ach.AP3));this.Nh.Ax(A.aaL(A.ach.ADU));this.AeI.Ax(A.aaL(A.
ach.Ag8));this.AeN.Ax(A.aaL(A.ach.AjY));this.AeM.Ax(A.aaL(A.ach.AvH));this.AeJ.Ax(
A.aaL(A.ach.AQC));this.AeL.Ax(A.aaL(A.ach.AQD));this.AeK.Ax(A.aaL(A.ach.AQB));this.
Nj.Ax(A.aaL(A.ach.ADW));this.N2.Ax(A.aaL(A.ach.AvL));this.MC.Ax(A.aaL(A.ach.AD2)
);},_Done:function(){this.__proto__=C.YB;this.Y._Done();this.IR._Done();this.AeO.
_Done();this.Jb._Done();this.Nh._Done();this.AeI._Done();this.AeN._Done();this.AeM.
_Done();this.AeJ._Done();this.AeL._Done();this.AeK._Done();this.Nj._Done();this.
N2._Done();this.MC._Done();C.YB._Done.call(this);},_ReInit:function(){C.YB._ReInit.
call(this);this.Y._ReInit();this.IR._ReInit();this.AeO._ReInit();this.Jb._ReInit(
);this.Nh._ReInit();this.AeI._ReInit();this.AeN._ReInit();this.AeM._ReInit();this.
AeJ._ReInit();this.AeL._ReInit();this.AeK._ReInit();this.Nj._ReInit();this.N2._ReInit(
);this.MC._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.YB.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amz={Ia:null,CD:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);this.Ia.Gs();this.Ia.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Rg.CD.call(this,G);},Aoa:function(){C.Rg.
Aoa.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).Bz$(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.C_.L(A._GetAutoObject(
A.acj.Temperature).BAc(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lz));this.JT.L(A._GetAutoObject(A.acj.Temperature).BAa(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.HH.L(A.
_GetAutoObject(A.acj.Temperature).BAb(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lz));this.MO.L(this.JT.AQ);this.TemperatureUnit.
L(this.JT.AQ);}break;default:;}},Z9:function(){C.Rg.Z9.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Ct(A.aaL(A.ach.AQ3));this.N.C4(A.aaL(
A.ach.Am7));}break;case 4:{this.N.Ct(null);this.N.C4(A.aaL(A.ach.AvT));}break;default:;
}},W2:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lz>3240)&&(A._GetAutoObject(A.Device.
Device).Lz<5460)){A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.Ia.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lz);var B2=A._GetAutoObject(A.Device.Converter).AsQ(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz);this.Ia.OnSetRatingTemperature(
B2);this.Ia.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A7).FB();
}break;case 4:this.AKR(this);break;default:;}},AkY:function(G){C.Rg.AkY.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKR(this);break;default:;}},Ax4:function(
){C.Rg.Ax4.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JT.R(A._GetAutoObject(A.acj.Temperature).BAh(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));break;default:;}},Ax5:function(
){C.Rg.Ax5.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WQ(A._GetAutoObject(A.acj.Temperature).BAd(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lz));this.Jk.As(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WQ(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AU2:function(){this.C_.Ax(
A.aaL(A.ach.AvS));this.C_.Cw(A._GetAutoObject(A.acj.Temperature).BAi(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.N0.Cw(
0);},_Init:function(aArg){C.Rg._Init.call(this,aArg);this.__proto__=C.Amz;this.Dr(
C.IP);this.Ia=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Rg._Mark.
call(this,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.AhC={N$:null,DL:null,Ip:null,Bc:null,AuG:null,String:A.jV,AxS:A.jV,MF:7,Akb:
2,KY:0,AVd:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DL.H([0,0,aSize[0]-this.Akb,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DL.
S(A.aaL(A.fl.Bh));else this.DL.S(A.aaL(A.fl.Ak));this.Ip.S(this.DL.B7);this.Ip.H(
this.DL.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WU],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DL.R(E);},Ahx:function(
E){if(this.AxS===E)return;this.AxS=E;this.Ip.R(E);},Aca:function(E){this.MF=E;if(
E<10)this.ATy(2);else if(E<40)this.ATy(1);else this.ATy(0);A.pe([this,this.WU],this
);},WU:function(G){var B;while(!!this.Bc.Ah)this.HR(this.Bc.Ah);if(this.MF>1){var
Adg=this.AO0();var A2C=this.AOY();var Apw=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AAk;var ALf;var Auf;var Ame=null;if(!!this.N$&&(this.N$.AZ>0))Ame=this.N$.K6;
while((Adg>=A2C)&&(Adg>0)){var AtS=A._NewObject(C.Ajw,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*(((Adg-A2C)/86400)|0))/this.MF)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*((((Adg-A2C)/86400)|0)+1))/this.MF)|0;while(!!Ame&&(Ame.Timestamp>=
Adg)){if(Ame.Timestamp<(Adg+86400))AtS.OA(Ame.A5,Ame.Timestamp);Ame=Ame.Ah;}var Aur=
0;if(AtS.AZ>0)Aur=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtS.AZ
)|0;else if(this.MF<10){Aur=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
Auf=A._NewObject(A.acg.Text,0);Auf.H([x1,Apw,x2,Apw+Aur]);Auf.S(A.aaL(A.fl.Bh));
Auf.L(A.jb.Text);Auf.R(A.aaR(A.acf.Afe));this.J(Auf,0);}var AJ4=AtS.K6;var O=0;while(
!!AJ4){if(O>=AtS.AZ)throw new Error(AWM);AAk=A._NewObject(A.acg.AL,0);AAk.L(A._GetAutoObject(
A.acj.Assessment).Qu(AJ4.A5));if(O===(AtS.AZ-1))AAk.H([x1,Apw+(O*Aur),x2,this.Bc.
M[1]]);else AAk.H([x1,Apw+(O*Aur),x2,Apw+((O+1)*Aur)]);this.J(AAk,0);AJ4=AJ4.Ah;
O=O+1;}if(this.AVd){var ByZ=A._GetAutoObject(A.Device.Helper).Aqx(A._GetAutoObject(
A.Device.Helper).Dv());var ByY=A._GetAutoObject(A.Device.Helper).Aqx(Adg);if(ByZ===
ByY){var ALJ=A._NewObject(A.acg.Aer,0);ALJ.L(A.jb.Text);var BeE=(x1+this.Akb)+(((
x2-x1)/2)|0);ALJ.H([BeE-4,this.Bc.M[1]-4,BeE+4,this.Bc.M[1]]);ALJ.ZD(this.AuG);this.
J(ALJ,0);}}Adg=Adg-86400;if(this.Akb>0){ALf=A._NewObject(A.acg.AL,0);ALf.H([x1,Apw
,x1+this.Akb,Apw+((((B=this.M)[3]-B[1])/2)|0)]);ALf.L(A.jb.Bc);this.J(ALf,0);}}}
},Acc:function(E){this.N$=E;A.pe([this,this.WU],this);},ATy:function(E){if(this.
Akb===E)return;this.Akb=E;A.pe([this,this.WU],this);},Dg:function(E){if(this.KY===
E)return;this.KY=E;this.DL.L(E);this.Ip.L(E);},AOY:function(){var B;return this.
AO0()-(((((B=this.MF)<0)?B+0x100000000:B)-1)*86400);},AO0:function(){return A._GetAutoObject(
A.Device.Converter).AhT();},Boa:function(E){if(this.AVd===E)return;this.AVd=E;A.
pe([this,this.WU],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DL={I:this},0);A.acg.Text._Init.call(this.Ip={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.Ax2._Init.call(this.AuG={I:this},0);
this.__proto__=C.AhC;this.H(BD);this.As(false);this.DL.H(AHT);this.DL.Hp(5);this.
DL.A6(0x11);this.DL.L(A.jb.Text);this.Ip.H(AHT);this.Ip.Hp(5);this.Ip.A6(0x14);this.
Ip.L(A.jb.Text);this.Bc.H(AWN);this.Bc.L(A.jb.Bc);this.KY=A.jb.Text;this.AuG.H(AWO
);this.J(this.DL,0);this.J(this.Ip,0);this.J(this.Bc,0);this.DL.S(A.aaL(A.fl.Ak)
);this.Ip.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DL._Done();this.Ip._Done();this.Bc._Done();this.AuG._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DL._ReInit(
);this.Ip._ReInit();this.Bc._ReInit();this.AuG._ReInit();this.DL.S(A.aaL(A.fl.Ak
));this.Ip.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AuG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A5I={Ah:null,Timestamp:0,A5:0,_Init:function(
aArg){this.__proto__=C.A5I;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajw={K6:null,M3:null,AZ:0,OA:
function(A8,Ql){var Hj;Hj=A._NewObject(C.A5I,0);Hj.A5=A8;Hj.Timestamp=Ql;if(!this.
K6){this.K6=Hj;this.M3=Hj;this.AZ=1;}else{this.M3.Ah=Hj;this.M3=Hj;this.AZ=this.
AZ+1;}},_Init:function(aArg){this.__proto__=C.Ajw;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ej={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MS],this);},DF:function(G){var B;var Fh=0;var X=this.AV;switch(
this.Cq.CP){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;
default:;}X=this.QL(X,Fh,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HK(X,true,null,null);this.DK(this);},Al7:function(G){A._GetAutoObject(C.A7
).FB();},ApR:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Agy)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Agy,this);},Fj:function(G){var B;this.
Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.
Y.Br[1]);},DK:function(G){var B;var G0=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!G0){this.N.Hz(A.jV);this.N.CS(G0.AxV);this.N.Jj.CZ(255);this.N.GX.CZ(G0.Axr);this.
N.AFs(G0.Avv);this.N.AnE(G0.AmY);this.N.C3(G0.AQw);this.N.C4(G0.Are);G0.A3H(this
);}},MS:function(s){this.DK(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ej;this.Background.H(Rr);this.Background.L(A.jb.CU);this.N.H(U6);this.
N.As(false);this.N.Z(true);this.Y.H(Fe);this.Y.JZ(1);this.Ay.H(Ix);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fj];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AUi={NL:null,ATd:null,Ad6:null,VP:null,GW:null,PopupTimeout:null,Ach:null,AgJ:
null,PopupIdToString:null,AtN:null,Text:A.jV,AkJ:A.jV,AKm:A.jV,Ak5:0,ALt:-1,AzG:-
1,AKY:0,AUk:0,A2M:false,CQ:function(){this.A_6(this.PopupIdToString.BT(this.AUk)
);},Init:function(aArg){this.BpE(this);},Bhq:function(G){var B;if(this.Ak5>0){this.
A$i((this.Ak5/1000)|0);this.PopupTimeout.WO(0);this.PopupTimeout.PZ(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxR(this);},Bhm:function(G){var M7=this.
Text;var Af0=this.AkJ;var AKW=A.abi(16,A.jV,null);var index=0;var AzB=0;while(Af0
!==A.jV){AzB=Af0.indexOf(A.Device.PopupParamSeparator,0);if(AzB!==-1){AKW.Set(index
,A.ab1(Af0,AzB,(Af0.length-AzB)+1));Af0=A.ab1(Af0,0,AzB+1);index=index+1;if(index>=
16){A.ab5("%s",(AWP+Af0)+AWQ);Af0=A.jV;}}else{AKW.Set(index,Af0);Af0=A.jV;}}index=
0;while(index<M7.length){if((M7.charCodeAt(index)||0)===0x7B){var Bee=M7.indexOf(
String.fromCharCode(0x7D),index);if(Bee===-1){A.ab5("%s",(((AWR+M7)+AWS)+index.toFixed(
))+Ald);index=M7.length;}else{var Bf8=(Bee-index)-1;var A4h=A.abW(M7,index+1,Bf8
);var AKV=A.wz(A4h,-1,10);M7=A.ab1(M7,index,Bf8+2);if(A4h===AWT)this.Bos(index);
else if(((AKV>0)&&(AKV<=16))&&(this.AkJ!==A.jV)){M7=A.abU(M7,AKW.Get(AKV-1),index
);if(this.A2M===true)this.Bor(A.wz(AKW.Get(AKV-1),0,10));}else A.ab5("%s",(AWU+A4h
)+AWV);}}index=index+1;}this.Boq(M7);},CD:function(G){A.pe([this,this.Bhq],this);
},Ai:function(Ae){var B;this.Ad6.H(A.aaT(this.GW.Dd(),Ah0));this.VP.H(A.aaT(this.
GW.Dd(),Ah0));if(!!this.NL){this.NL.H(A.abM(this.NL.M,this.GW.M[0]));this.NL.H(A.
abO(this.NL.M,this.GW.M[3]+10));this.NL.H(A.abL(this.NL.M,(B=this.GW.M)[2]-B[0])
);this.NL.H(A.abI(this.NL.M,8));this.Ad6.H(A.abh(A.aaT(this.GW.Dd(),Ah0),AHU));this.
VP.H(A.abh(A.aaT(this.GW.Dd(),Ah0),AHU));}else{this.Ad6.H(A.aaT(this.GW.Dd(),Ah0
));this.VP.H(A.aaT(this.GW.Dd(),Ah0));}},DF:function(G){var JH=(A.Core.BF.isPrototypeOf(
G)?G:null);if((JH.CP===4)&&((this.VP.M[1]+this.M[1])<this.M[1])){this.GW.H(A.abO(
this.GW.M,this.GW.M[1]+28));this.Am();}else if((JH.CP===5)&&((this.VP.M[3]+this.
M[1])>this.N.M[1])){this.GW.H(A.abO(this.GW.M,this.GW.M[1]-28));this.Am();}if((JH.
CP===6)&&!!this.D_().CF)this.D_().AFB(1);else if((JH.CP===7)&&!!this.D_().Ca)this.
D_().AFB(3);},H1:function(G){switch(this.D_().Ahn){case 1:this.Al7(this);break;case
3:this.ApR(this);break;case 2:this.AAS(this);break;case 0:break;default:A.ab5("%s%e"
,AWW,this.D_().Ahn);}},Al7:function(G){var B;(B=this.D_().CF)?B[1].call(B[0],this
):null;},ApR:function(G){var B;(B=this.D_().Ca)?B[1].call(B[0],this):null;},AAS:
function(G){var B;(B=this.D_().Ce)?B[1].call(B[0],this):null;},LU:function(G){this.
N.IS.L((this.N.IS.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
AxR(this);},A_6:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bhm],this);},BBo:function(G){var B;this.A$i(this.AzG-1);if(this.AzG<=0){this.PopupTimeout.
AxR(this);(B=this.ATd)?B[1].call(B[0],this):null;}},A_8:function(E){if(this.Ak5===
E)return;this.Ak5=E;A.pe([this,this.Bhq],this);},A_T:function(E){if(this.AkJ===E
)return;this.AkJ=E;A.pe([this,this.Bhm],this);},Boq:function(E){if(this.AKm===E)
return;this.AKm=E;this.ABK(this);this.By6(this);},ABK:function(G){if((this.AzG!==-
1)&&(this.ALt!==-1)){var BzV=this.AtN.Format(AWX);this.GW.R(A.abU(this.AKm,BzV,this.
ALt));}else this.GW.R(this.AKm);this.GW.H(AHV);},Bos:function(E){if(this.ALt===E
)return;this.ALt=E;this.ABK(this);},A$i:function(E){if(this.AzG===E)return;this.
AzG=E;this.AtN.AF6(E);A.pe([this,this.ABK],this);},By6:function(G){this.GW.Dd();
if(this.GW.M[1]<=this.M[1])this.GW.H(A.abO(this.GW.M,28));this.Am();},A$k:function(
E){if(this.A2M===E)return;this.A2M=E;if(E===true)A.pe([this,this.BB0],this);},BB0:
function(G){if(!this.NL){this.NL=A._NewObject(A.acs.ADK,0);this.NL.Gb(0);this.NL.
EV(100);this.NL.OnSetAppearance(this.Ach);this.J(this.NL,0);this.AhF(this.NL,this.
GW);}this.NL.Bx(this.AKY);},Bor:function(E){if(this.AKY===E)return;this.AKY=E;if(
!!this.NL)this.NL.Bx(this.AKY);},BpE:function(G){var B;this.N.CZ(0);this.AgJ.An1(
this);},Bn1:function(E){if(this.AUk===E)return;this.AUk=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad6={I:this},0);A.acg.BW._Init.
call(this.VP={I:this},0);A.acg.Text._Init.call(this.GW={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acs.ADL._Init.call(this.Ach={I:this},
0);A.acl.Gn._Init.call(this.AgJ={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtN={I:this},0);this.
__proto__=C.AUi;var B;this.H(Cf);this.Background.H(Fe);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ek.As(false);this.Ek.Z(false);this.Ad6.H(AHW);this.
Ad6.L(A.jb.CK);this.VP.H(AHW);this.VP.Nu(2);this.VP.L(A.jb.Text);this.GW.H(AHV);
this.GW.Hp(10);this.GW.Je(true);this.GW.Boo(0);this.GW.KX(true);this.GW.L(A.jb.Text
);this.PopupTimeout.PZ(0);this.Ach.A$b(0);this.Ach.A_$(A.jb.AV);this.Ach.A__(0);
this.Ach.AGj(AHD);this.AgJ.HQ(1);this.AgJ.B3=255;this.AgJ.Cx=0;this.J5(this.Ek,-
1);this.J(this.Ad6,0);this.J(this.VP,0);this.J(this.GW,0);this.GW.S(A.aaL(A.fl.Af
));this.PopupTimeout.MJ=[this,this.BBo];this.Ach.A$a(A.aaL(A.ach.N1));this.Ach.A_9(
A.aaL(A.ach.N1));this.AgJ.Q=[B=this.N,B.Aws,B.A0M];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad6._Done();this.VP._Done();this.GW._Done();this.PopupTimeout.
_Done();this.Ach._Done();this.AgJ._Done();this.PopupIdToString._Done();this.AtN.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad6._ReInit();this.VP._ReInit();this.GW._ReInit();this.PopupTimeout._ReInit();this.
Ach._ReInit();this.AgJ._ReInit();this.PopupIdToString._ReInit();this.AtN._ReInit(
);this.GW.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATd)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad6)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ach).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtN)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mx={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FT=A.jb.CK;var GZ=A.jb.Text;if(this.Hn){FT=A.jb.Text;
GZ=A.jb.Bm;}if(!this.LN){this.Background.L(FT);this.V.L(A.jb.Am8);}else if(this.
Qy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Mx;},_className:"Application::DarkThemeMenuItem"
};C.Ann={AdF:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Ann;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaP:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Ls:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=[this,this.A3I];this.BQ.Ce=null;this.BQ.CF=[this,this.AaP];this.
BQ.CS(A.aaR(A.acf.Ok));this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.AeC));}return this.
BQ;},A3I:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).H1(this);},CD:function(G){},AIZ:function(s){this.CD(s);},E4:function(
G){},AyW:function(s){this.E4(s);},_Init:function(aArg){C.Abr._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APX={Wi:
null,YX:null,YR:null,Init:function(aArg){this.Bb(this.Wi);},Adw:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YX)A._GetAutoObject(A.Device.
Device).AY(6,true,A.jV,0,[this,this.BCc]);else if(Aa===this.Wi)A._GetAutoObject(
A.Device.Device).AY(9,true,A.jV,0,[this,this.BCx]);else if(Aa===this.YR)A._GetAutoObject(
C.A7).Cb(4);else throw new Error(Ayr);A._GetAutoObject(A.Device.Device).Dw(0);},
BCc:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(
Ar.PopupState===7))A._GetAutoObject(A.Device.Device).AGG();},BCx:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))
A._GetAutoObject(A.Device.Device).AxI();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mx._Init.call(this.Wi={I:this},0);C.Mx._Init.call(this.YX={I:this
},0);C.Mx._Init.call(this.YR={I:this},0);this.__proto__=C.APX;this.H(AcS);this.Wi.
H(BD);this.Wi.As(true);this.Wi.T(A.aaR(A.acf.A$0));this.Wi.Bi(true);this.YX.H(I1
);this.YX.As(true);this.YX.T(A.aaR(A.acf.A$H));this.YX.Bi(true);this.YR.H(Qf);this.
YR.As(true);this.YR.T(A.aaR(A.acf.SY));this.YR.Bi(true);this.J(this.Wi,0);this.J(
this.YX,0);this.J(this.YR,0);this.Wi.AR=[this,this.Adw];this.YX.AR=[this,this.Adw
];this.YR.AR=[this,this.Adw];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.Wi._Done();this.YX._Done();this.YR._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Wi._ReInit(
);this.YX._ReInit();this.YR._ReInit();this.Wi.T(A.aaR(A.acf.A$0));this.YX.T(A.aaR(
A.acf.A$H));this.YR.T(A.aaR(A.acf.SY));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Wi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GK={AaM:null,OverlayMenu:null,WX:null,A4C:null
,Lg:null,A4g:null,AkL:null,N9:null,AAq:100,Bdb:false,Init:function(aArg){var B;A.
zX([this,this.BfA],[B=A._GetAutoObject(A.Device.Device),B.Awt,B.Ay5],0);A.zX([this
,this.Bfu],[B=A._GetAutoObject(A.Device.Device),B.ASV,B.A0K],0);A.zX([this,this.
A3A],[B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyY],0);A.zX([this,this.BAV],[
B=A._GetAutoObject(A.Device.Device),B.Awe,B.AyX],0);A.zX([this,this.BAW],[B=A._GetAutoObject(
A.Device.Device),B.A82,B.BbE],0);A.zX([this,this.ApS],[B=A._GetAutoObject(A.Device.
Device),B.AS6,B.A0S],0);A.zX([this,this.BfQ],[B=A._GetAutoObject(A.Device.Device
),B.Ut,B.Vb],0);A.pe([this,this.BfA],this);A.pe([this,this.Bfu],this);A.pe([this
,this.ApS],this);A.pe([this,this.BfQ],this);this.A4C.Au([B=this.WX,B.AEO,B.Zv]);
this.J(this.WX,0);this.Bb(this.WX);this.ByJ(this);},Ai:function(Ae){},Bfu:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEA){if(!this.AaM){this.AaM=A._NewObject(
C.AsC,0);this.AaM.H(A.abJ(this.AaM.M,this.WX.M.slice(0,2)));this.AaM.H(A.abO(this.
AaM.M,this.WX.M[3]-((B=this.AaM.M)[3]-B[1])));this.J(this.AaM,1);}}else{if(!!this.
AaM)this.HR(this.AaM);this.AaM=null;}},BfA:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APX,0));break;case 8:this.Dw(A._NewObject(C.AMf,0));break;case 2:this.Dw(A._NewObject(
C.AMc,0));break;case 3:this.Dw(A._NewObject(C.AMj,0));break;case 4:this.Dw(A._NewObject(
C.AUC,0));break;case 5:this.Dw(A._NewObject(C.AV$,0));break;case 6:this.Dw(A._NewObject(
C.AUd,0));break;case 7:this.Dw(A._NewObject(C.AmB,0));break;case 11:this.Dw(A._NewObject(
C.AMN,0));break;case 12:this.Dw(A._NewObject(C.AMM,0));break;case 9:this.Dw(A._NewObject(
C.AR7,0));break;case 10:this.Dw(A._NewObject(C.AMI,0));break;case 14:this.Dw(A._NewObject(
C.AR3,0));break;case 15:this.Dw(A._NewObject(C.AR4,0));break;case 13:this.Dw(A._NewObject(
C.AR5,0));break;case 16:this.Dw(A._NewObject(C.AM8,0));break;default:throw new Error(
AWY+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WS).ArO(
null);this.N9.AqN(this.OverlayMenu,A._GetAutoObject(C.AxL),null,null,[B=this.OverlayMenu
,B.AyW],null,true);this.Bb(this.WX);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N9.AkN(this.OverlayMenu,A._GetAutoObject(C.AxK),null,null,null,null,null,[B=this.
OverlayMenu,B.AIZ],null,false);this.Bb(this.N9);A._GetAutoObject(C.WS).ArO(this.
OverlayMenu.Ls());}else if(!!this.Lg){this.Bb(this.N9);A._GetAutoObject(C.WS).ArO(
this.Lg.Akr().Ls());}},Ahs:function(E){var B;if(this.Lg===E)return;if(!!this.Lg){
A._GetAutoObject(C.WS).ArO(null);this.N9.AqN(this.Lg.Akr(),A._GetAutoObject(C.Afk
),null,null,[B=this.Lg.Akr(),B.AyW],null,false);this.Bb(this.WX);}this.Lg=E;if(!
!this.Lg){this.N9.AkN(this.Lg.Akr(),A._GetAutoObject(C.Afk),null,null,null,null,
null,[this,this.Bmm],null,false);this.Bb(this.N9);A._GetAutoObject(C.WS).ArO(this.
Lg.Akr().Ls());}else if(!!this.OverlayMenu){this.Bb(this.N9);A._GetAutoObject(C.
WS).ArO(this.OverlayMenu.Ls());}},ByJ:function(G){var B;var F;this.J(this.A4g,0);(
F=A._GetAutoObject(C.WS),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WS).M)[3]-B[1]))));this.ZL(this.N9);},A3A:function(G){if(A._GetAutoObject(A.Device.
Device).AmI)switch(A._GetAutoObject(A.Device.Device).In){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A7).Ace(4);break;default:if(A._GetAutoObject(A.Device.
Device).Abc<98)A._GetAutoObject(C.A7).Cb(4);}else{this.AAq=100;this.Bdl();}},BAV:
function(G){this.Bdl();},Bdl:function(){if(!A._GetAutoObject(A.Device.Device).AmI
){if(A._GetAutoObject(A.Device.Device).Abc<=2){if(this.AAq>2)switch(A._GetAutoObject(
A.Device.Device).In){case 38:break;case 4:case 39:A._GetAutoObject(C.A7).Ace(38);
break;default:A._GetAutoObject(C.A7).Cb(38);}}else if(A._GetAutoObject(A.Device.
Device).Abc<=10){if(this.AAq>10)switch(A._GetAutoObject(A.Device.Device).In){case
39:break;case 4:case 38:A._GetAutoObject(C.A7).Ace(39);break;default:A._GetAutoObject(
C.A7).Cb(39);}}else if(A._GetAutoObject(A.Device.Device).Abc<=20){if(this.AAq>20
)switch(A._GetAutoObject(A.Device.Device).In){case 39:break;case 4:case 38:A._GetAutoObject(
C.A7).Ace(39);break;default:A._GetAutoObject(C.A7).Cb(39);}}else switch(A._GetAutoObject(
A.Device.Device).In){case 38:case 4:case 39:A._GetAutoObject(C.A7).FB();break;default:;
}this.AAq=A._GetAutoObject(A.Device.Device).Abc;}},BAW:function(G){switch(A._GetAutoObject(
A.Device.Device).AqA){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).AY(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AnB(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).AY(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AnB(0
);}break;default:A.ab5("%s",AWZ+A._GetAutoObject(A.Device.Device).AqA.toFixed());
}},ApS:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A7).Cb(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).In===5)A._GetAutoObject(C.A7).Ace(3);break;
default:;}},BfQ:function(G){switch(A._GetAutoObject(A.Device.Device).P7.Z8){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).UA(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WQ(65535);A._GetAutoObject(A.Device.Device).UA(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WQ(255);A._GetAutoObject(A.Device.Device).UA(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WQ(16776960);A._GetAutoObject(
A.Device.Device).UA(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WQ(16711935
);A._GetAutoObject(A.Device.Device).UA(true);}break;default:A.ab5("%s",AW0+A._GetAutoObject(
A.Device.Device).P7.Z8.toFixed());}this.Bop(A._GetAutoObject(A.Device.Helper).ARy(
));},Bmm:function(G){var B;this.Lg.Akr().CD(this);this.Lg.BBm(this);},Bop:function(
E){if(this.Bdb===E)return;this.Bdb=E;if(E){if(A._GetAutoObject(A.Device.Device).
In===3)A._GetAutoObject(C.A7).Cb(27);else if(A._GetAutoObject(A.Device.Device).In
!==27)A._GetAutoObject(A.Device.Device).AY(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).In===27)A._GetAutoObject(A.Device.Device).AY(112,true,A.jV,0,[this
,this.A1y]);},A1y:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!Ar&&(Ar.Id===112))&&(Ar.PopupState===7))A._GetAutoObject(C.A7).Ace(85);}
,Blo:function(){return this.Lg;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkL._Init.call(this.AkL={I:this},0);C.N9._Init.call(this.N9={I:this},0);this.
__proto__=C.GK;this.H(Cf);this.N9.H(Rr);this.J(this.N9,0);this.WX=A._NewObject(C.
WX,0);this.A4C=A._GetAutoObject(C.A7);this.AkL.ANO=[this,this.Blo,this.Ahs];this.
A4g=A._GetAutoObject(C.WS);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkL._Done();this.N9._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkL._ReInit();this.N9._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WX)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4C)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Lg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A4g)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abr={A$v:
null,BQ:null,N:null,Cq:null,Ane:null,Ang:null,QV:null,Anf:null,Anc:null,Ani:null
,And:null,DF:function(G){var Fh=0;var X=this.AV;switch(this.Cq.CP){case 6:Fh=2;break;
case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(X,Fh,0x14
);if(!!X)this.Bb(X);},Bcc:function(s){this.DF(s);},Al7:function(G){var D5=(A.Core.
BF.isPrototypeOf(G)?G:null);if(D5.Aco&&(this.D_().Asw===false))return;A.pe(this.
D_().CF,this);},AJa:function(s){this.Al7(s);},ApR:function(G){var D5=(A.Core.BF.
isPrototypeOf(G)?G:null);if(D5.Aco&&(this.D_().ZK===false))return;A.pe(this.D_().
Ca,this);},AJc:function(s){this.ApR(s);},H1:function(G){if(this.QV.Aco)return;},
Alo:function(s){this.H1(s);},AAS:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?
G:null);if(D5.Aco&&(this.D_().WV===false))return;A.pe(this.D_().Ce,this);},AJb:function(
s){this.AAS(s);},D_:function(){if(!!this.Ls())return this.BQ;else return this.N;
},Ls:function(){return this.BQ;},GT:function(E){this.A$v=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BF._Init.
call(this.Cq={I:this},0);A.Core.BF._Init.call(this.Ane={I:this},0);A.Core.BF._Init.
call(this.Ang={I:this},0);A.Core.BF._Init.call(this.QV={I:this},0);A.Core.BF._Init.
call(this.Anf={I:this},0);A.Core.BF._Init.call(this.Anc={I:this},0);A.Core.BF._Init.
call(this.Ani={I:this},0);A.Core.BF._Init.call(this.And={I:this},0);this.__proto__=
C.Abr;this.H([0,0,C.AsF[0],C.AsF[1]]);this.N.H(U6);this.N.As(false);this.N.Z(false
);this.Cq.Filter=147;this.Ane.Filter=26;this.Ang.Filter=28;this.QV.Filter=1;this.
Anf.Filter=27;this.Anc.Filter=44;this.Ani.Filter=9;this.And.Filter=42;this.J(this.
N,0);this.Cq.BG=[this,this.Bcc];this.Cq.D1=[this,this.Bcc];this.Ane.BG=[this,this.
AJa];this.Ane.D1=[this,this.AJa];this.Ang.BG=[this,this.AJc];this.Ang.D1=[this,this.
AJc];this.QV.BG=[this,this.Alo];this.QV.D1=[this,this.Alo];this.Anf.BG=[this,this.
AJb];this.Anf.D1=[this,this.AJb];this.Anc.BG=[this,this.AJa];this.Anc.D1=[this,this.
AJa];this.Ani.BG=[this,this.AJc];this.Ani.D1=[this,this.AJc];this.And.BG=[this,this.
AJb];this.And.D1=[this,this.AJb];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Ane._Done();this.Ang._Done();this.QV._Done();this.
Anf._Done();this.Anc._Done();this.Ani._Done();this.And._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Ane._ReInit();this.Ang._ReInit();this.QV._ReInit();this.Anf._ReInit(
);this.Anc._ReInit();this.Ani._ReInit();this.And._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A$v)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ang)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.And)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxK={_Init:function(){A.acl.AG3._Init.call(this,0);this.Kn=0x22;this.Ad_=true;
this.Au_=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxL={_Init:function(){A.acl.AG3._Init.call(this,0);this.Kn=0x22;this.Ad_=true;
this.Au_=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AVb={Si:function(){var B;var Ao=(A.acl.Afc.isPrototypeOf(B=A.acl.Aeo.Si.call(this
))?B:null);if(!Ao)throw new Error(Atd);Ao.Cp.Cx=100;return Ao;},Sh:function(){var
B;var Ao=(A.acl.Axs.isPrototypeOf(B=A.acl.Aeo.Sh.call(this))?B:null);if(!Ao)throw new
Error(Atd);Ao.E0.B3=100;return Ao;},_Init:function(aArg){A.acl.Aeo._Init.call(this
,aArg);this.__proto__=C.AVb;},_className:"Application::ShadeTransition"};C.Am4={
Ag$:null,S3:null,HT:null,DS:null,AnimalId:-1,GroupId:-1,ADr:true,Dg:function(E){
C.BR.Dg.call(this,E);this.S3.L(E);this.HT.L(E);this.Ag$.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HT.R(A.aaR(A.acf.Afe)
);else this.HT.R(E.toFixed());},Ab_:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.S3.R(A.aaR(A.acf.Afe));else this.S3.R(E.toFixed());},DX:function(
G){},Nz:function(s){this.DX(s);},A_A:function(E){if(this.ADr===E)return;this.ADr=
E;this.S3.Z(this.ADr);this.Ag$.Z(this.ADr);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag$={I:this},0);A.acg.Text._Init.call(this.S3={
I:this},0);A.acg.Text._Init.call(this.HT={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.Am4;this.Ag$.H(AW1);this.S3.H(AW2);this.S3.A6(0x11);this.
S3.R(A.aaR(A.acf.Afe));this.HT.H(AW3);this.HT.A6(0x11);this.HT.R(A.aaR(A.acf.Afe
));this.DS.H(AW4);this.J(this.Ag$,0);this.J(this.S3,0);this.J(this.HT,0);this.J(
this.DS,0);this.Ag$.Ax(A.aaL(A.ach.AQL));this.S3.S(A.aaL(A.fl.Af));this.HT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.Ag$._Done();this.S3._Done(
);this.HT._Done();this.DS._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.Ag$._ReInit();this.S3._ReInit();this.HT._ReInit();this.DS.
_ReInit();this.S3.R(A.aaR(A.acf.Afe));this.HT.R(A.aaR(A.acf.Afe));this.S3.S(A.aaL(
A.fl.Af));this.HT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADB={Init:function(
aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.ArK,B.SP
],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9k,B.AnI],0);
A.zV([this,this.Nz],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nz],[
B=A._GetAutoObject(A.Device.Helper).W,B.PX,B.EC],0);A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9Y,B.Axo],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9b,B.Ae4],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9c,B.Uy],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.
A9f,B.Ae8],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9j,B.
Ae_],0);A.pe([this,this.Nz],this);},Dg:function(E){C.Am4.Dg.call(this,E);this.DS.
Dg(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq6()){this.Ab_(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab_(-1);this.OnSetAnimalId(-1);}this.DS.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AFm(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae4(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uy(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae8(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae_(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Am4._Init.call(this,aArg);this.
__proto__=C.ADB;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kq={AhQ:A.abi(3,A.jV,null),BI:A.abi(3,0,{0:7,1:30,2:90}),Anr:3,Du:function(){
if(this.Anr<3)return this.Anr;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Anr))return-1;return this.BI.Get(aIndex);},Gm:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Anr))return AW5;return this.AhQ.Get(aIndex);},DZ:function(
A8){var O=0;while((O<3)&&(O<=this.Anr)){if(this.BI.Get(O)===A8)return O;O=O+1;}return-
1;},H8:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Anr)){if(this.BI.Get(
O)>max)max=this.BI.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhQ=[]).__proto__=C.Kq.AhQ;(this.BI=[]).__proto__=C.Kq.BI;this.
__proto__=C.Kq;this.AhQ.Set(0,A.aaR(A.acf.A7Y));this.AhQ.Set(1,A.aaR(A.acf.A7W));
this.AhQ.Set(2,A.aaR(A.acf.A7X));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhQ.Set(0,A.aaR(A.acf.A7Y));this.AhQ.Set(1,A.aaR(A.acf.A7W));this.AhQ.Set(2,A.aaR(
A.acf.A7X));},_className:"Application::Days"};C.AU_={AmD:null,BU:null,Q_:null,QJ:
null,Bao:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BBI],[B=A._GetAutoObject(A.Device.Device),B.ArI,B.Atu],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Ds.Ai.call(this,Ae);var Fv=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BU.L(A.jb.Bm);if(!!this.Q)this.BU.R(((AW6+A._GetAutoObject(
A.Device.Converter).Ak3((F=this.Q,F[1].call(F[0]))))+CR)+A._GetAutoObject(A.acj.
Temperature).AlQ());this.H9.Z((this.AM<A._GetAutoObject(A.Device.Helper).A7i())&&(
Fv||GE));},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Ki:function(G){var F;var BP=this.AM;C.Ds.Ki.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A7i()){this.Bx(this.AM+10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},Kd:function(G){var F;var BP=this.
AM;C.Ds.Kd.call(this,G);this.Bx(this.AM-10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A$d:function(E){if(this.Bao===E)return;
this.Bao=E;this.Am();},BBI:function(G){this.Am();},_Init:function(aArg){C.Ds._Init.
call(this,aArg);A.acg.AL._Init.call(this.AmD={I:this},0);C.CG._Init.call(this.BU={
I:this},0);A.acg.AL._Init.call(this.Q_={I:this},0);A.acg.Ap._Init.call(this.QJ={
I:this},0);this.__proto__=C.AU_;this.H(U4);this.Background.H(U4);this.V.H(Ate);this.
V.L(A.jb.Bm);this.AmD.H(AW7);this.AmD.L(A.jb.Afx);this.Hy.H(AW8);this.BU.H(AW9);
this.BU.A6(0x12);this.BU.L(A.jb.Text);this.H9.H(AW_);this.Q_.H(AW$);this.Q_.L(A.
jb.E1);this.QJ.H(AXa);this.J(this.AmD,-2);this.J(this.BU,-1);this.J(this.Q_,0);this.
J(this.QJ,0);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.BU.S(A.aaL(
A.fl.EK));this.BU.A0(A.aaL(A.fl.Af));this.QJ.Ax(A.aaL(A.ach.ADR));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ds;this.AmD._Done();this.BU._Done();this.Q_.
_Done();this.QJ._Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.
call(this);this.AmD._ReInit();this.BU._ReInit();this.Q_._ReInit();this.QJ._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.BU.S(A.aaL(A.fl.EK));this.
BU.A0(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
AmD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnX={Q:null
,Ai5:null,Init:function(aArg){var B;A.zX([this,this.Bb$],[B=A._GetAutoObject(A.Device.
Device),B.AEO,B.Bbx],0);A.pe([this,this.Bb$],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ace:function(Alt){A._GetAutoObject(A.Device.Device).Zv(Alt
);},AKL:function(G){if(this.K&&this.K.AKL)return this.K.AKL.apply(this,arguments
);else return C.AnX.Bcg.apply(this,arguments);},Bcg:function(G){var F;if(!this.Q
){A.ab5("%s",AXb);return;}var By=null;if(this.Ai5.Contains(A._GetAutoObject(A.Device.
Device).In)){By=this.Ai5.A$t();while(!!By&&(By.An$!==A._GetAutoObject(A.Device.Device
).In))By=this.Ai5.A$t();}if(!By)By=this.BAg(A._GetAutoObject(A.Device.Device).In
);(F=this.Q,F[2].call(F[0],By));},Bb$:function(s){this.AKL(s);},BAg:function(Alt
){var By=null;switch(Alt){case 0:case 1:By=A._NewObject(C.AVh,0);break;case 2:By=
A._NewObject(C.X9,0);break;case 3:By=A._NewObject(C.AvG,0);break;case 53:By=A._NewObject(
C.AVY,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.ASl,0);break;case 6:By=A._NewObject(C.ARW,0);break;case 16:By=A._NewObject(C.ANW
,0);break;case 22:By=A._NewObject(C.AVT,0);break;case 17:By=A._NewObject(C.AVy,0
);break;case 42:By=A._NewObject(C.ANT,0);break;case 87:By=A._NewObject(C.AUK,0);
break;case 88:By=A._NewObject(C.AUJ,0);break;case 89:By=A._NewObject(C.AVO,0);break;
case 95:By=A._NewObject(C.AVR,0);break;case 23:By=A._NewObject(C.AWg,0);break;case
18:By=A._NewObject(C.AN9,0);break;case 19:By=A._NewObject(C.AUL,0);break;case 37:
By=A._NewObject(C.ARl,0);break;case 76:By=A._NewObject(C.AUq,0);break;case 63:By=
A._NewObject(C.AN7,0);break;case 64:By=A._NewObject(C.AN8,0);break;case 82:By=A.
_NewObject(C.AN6,0);break;case 83:By=A._NewObject(C.AN4,0);break;case 92:By=A._NewObject(
C.AN2,0);break;case 93:By=A._NewObject(C.AN5,0);break;case 65:By=A._NewObject(C.
AN3,0);break;case 5:By=A._NewObject(C.AVr,0);break;case 4:By=A._NewObject(C.Aea,
0);break;case 39:By=A._NewObject(C.ANt,0);break;case 38:By=A._NewObject(C.ANM,0);
break;case 28:By=A._NewObject(C.WF,0);break;case 7:By=A._NewObject(C.AqQ,0);break;
case 81:By=A._NewObject(C.AOe,0);break;case 31:By=A._NewObject(C.ArB,0);break;case
78:By=A._NewObject(C.ASj,0);break;case 34:By=A._NewObject(C.AMa,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GJ,0);break;case 9:By=A._NewObject(C.I_,0);break;case 24:By=A._NewObject(C.AMr
,0);break;case 10:By=A._NewObject(C.Amz,0);break;case 21:By=A._NewObject(C.AMv,0
);break;case 11:By=A._NewObject(C.AMu,0);break;case 29:By=A._NewObject(C.AuS,0);
break;case 48:By=A._NewObject(C.AMt,0);break;case 30:By=A._NewObject(C.AMs,0);break;
case 12:By=A._NewObject(C.AMq,0);break;case 40:By=A._NewObject(C.AMp,0);break;case
14:By=A._NewObject(C.ANK,0);break;case 13:By=A._NewObject(C.ANL,0);break;case 20:
By=A._NewObject(C.AV9,0);break;case 41:By=A._NewObject(C.AV8,0);break;case 43:By=
A._NewObject(C.AOR,0);break;case 44:By=A._NewObject(C.AOQ,0);break;case 61:By=A.
_NewObject(C.AOd,0);break;case 62:By=A._NewObject(C.AOc,0);break;case 46:By=A._NewObject(
C.ASy,0);break;case 47:By=A._NewObject(C.ASx,0);break;case 85:By=A._NewObject(C.
AWm,0);break;case 86:By=A._NewObject(C.AWl,0);break;case 71:By=A._NewObject(C.ASt
,0);break;case 72:By=A._NewObject(C.ASs,0);break;case 74:By=A._NewObject(C.AM_,0
);break;case 90:By=A._NewObject(C.AUs,0);break;case 73:By=A._NewObject(C.AUM,0);
break;case 51:By=A._NewObject(C.AMe,0);break;case 52:By=A._NewObject(C.AMd,0);break;
case 15:By=A._NewObject(C.AUz,0);break;case 60:By=A._NewObject(C.AVx,0);break;case
69:By=A._NewObject(C.ARU,0);break;case 70:By=A._NewObject(C.ART,0);break;case 26:
By=A._NewObject(C.ASm,0);break;case 54:By=A._NewObject(C.ASi,0);break;case 25:By=
A._NewObject(C.AOr,0);break;case 66:By=A._NewObject(C.AOs,0);break;case 59:By=A.
_NewObject(C.AOq,0);break;case 58:By=A._NewObject(C.AOt,0);break;case 56:By=A._NewObject(
C.AOu,0);break;case 57:By=A._NewObject(C.AqT,0);break;case 68:By=A._NewObject(C.
AOv,0);break;case 67:By=A._NewObject(C.AOo,0);break;case 84:By=A._NewObject(C.AMx
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AMK,0);break;case 91:By=A._NewObject(C.AVC,0
);break;case 94:By=A._NewObject(C.Aql,0);break;default:throw new Error(AXc);}if(
!!By)By.An$=Alt;return By;},Cb:function(Alt){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AXd);else this.Ai5.BoS((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zv(Alt);},FB:function(){var Bgn=3;var Bgm=this.Ai5.BoI();if(!!Bgm
)Bgn=Bgm.An$;else A.ab5("%s",AXe);A._GetAutoObject(A.Device.Device).Zv(Bgn);},_Init:
function(aArg){C.A$P._Init.call(this.Ai5={I:this},0);this.__proto__=C.AnX;this.Init(
aArg);var J_=this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai5.
_Done();A.h7--;},_ReInit:function(){this.Ai5._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnX._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A7={_Init:function(){C.AnX._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGy={Ia:null,YD:null,Afg:null,AaS:null,MK:
null,AzM:1,RatingMode:0,RatedAttribute:0,CQ:function(){this.YD.R(this.BdT(this.RatedAttribute
));this.AKQ(this);},Ai:function(Ae){this.MK.R(A._GetAutoObject(A.Device.Helper).
MN(A.aaR(A.acf.AR$),Pc,this.AzM.toFixed()));if(this.RatingMode===1)this.MK.Z(true
);else this.MK.Z(false);},CD:function(G){var B;C.AB.CD.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);this.Ia.Gs();this.Ia.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxD(this.
Ia,5);A.zX([this,this.AKQ],[B=A._GetAutoObject(A.Device.Device),B.AS3,B.A0P],0);
A.zX([this,this.AKQ],[B=A._GetAutoObject(A.Device.Helper).W,B.PX,B.EC],0);A.pe([
this,this.AKQ],this);},AsN:function(G){var a=this.AKu(this.RatedAttribute);this.
BgD();this.AzM=this.AzM-1;this.Am();if(!a)this.ASg();else this.SO(a);},W2:function(
G){var a=this.Bd0(this.RatedAttribute);this.BgD();this.AzM=this.AzM+1;this.Am();
if(!a)this.A8k();else this.SO(a);},AKu:function(NB){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(NB){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHX);},Bd0:function(NB){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(NB){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHX);},SO:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.YD.R(this.BdT(E));this.
DK(E);this.Afg.AnN(this.Ia.Bjy(E));if(!this.AKu(E)){if(this.ARu())this.N.Ct(A.aaL(
A.ach.AeF));else this.N.Ct(null);}else this.N.Ct(A.aaL(A.ach.AeC));},BdT:function(
NB){return this.AaS.BT(NB);},BAf:function(NB){if(!!NB){var a=this.AKu(NB);if(!a)
return A.jV;else return this.BdU(a);}else return A.jV;},BAe:function(NB){if(!!NB
){var a=this.Bd0(NB);if(!a)return A.jV;else return this.BdU(a);}else return A.jV;
},ASg:function(){},A8k:function(){},A7j:function(){return null;},BdU:function(NB
){return this.AaS.LA(NB);},BgD:function(){if(!!this.RatedAttribute)this.Ia.Bps(this.
RatedAttribute,this.Afg.A5);},AKQ:function(G){if(this.ARu())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SO(2);this.DK(this.RatedAttribute
);this.Am();},Adx:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkY:function(G){var a=this.AKu(this.RatedAttribute);if(!a){if(this.ARu())this.
Adx(this);}else this.ASg();},DK:function(NB){this.N.Hz(this.BAf(NB));if(!!this.N.
An6){this.N.C3(null);this.N.OW(true);}else{this.N.C3(A.aaL(A.ach.AeC));this.N.OW(
false);}this.N.CS(this.BAe(NB));if(!!this.N.An8){this.N.C4(null);this.N.OX(true);
}else{this.N.C4(this.A7j());this.N.OX(false);}},ARu:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alh,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.YD={
I:this},0);C.Rating._Init.call(this.Afg={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaS={I:this},0);A.acg.Text._Init.call(this.MK={I:this},0);this.__proto__=
C.AGy;this.Background.L(A.jb.CK);this.N.Z(true);this.Dr(C.IP);this.YD.H(AXf);this.
YD.KX(true);this.YD.L(A.jb.Text);this.Afg.H(AXg);this.MK.H(AXh);this.MK.A6(0x14);
this.MK.R(A.aaR(A.acf.AR$));this.MK.L(A.jb.Text);this.J(this.YD,0);this.J(this.Afg
,0);this.J(this.MK,0);this.Bb(this.Afg);this.N.CF=[this,this.AsN];this.N.Ce=[this
,this.AkY];this.N.Ca=[this,this.W2];this.YD.S(A.aaL(A.fl.Af));this.Afg.AR=[this,
this.W2];this.MK.S(A.aaL(A.fl.Af));this.Ia=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.YD._Done();this.Afg._Done();this.AaS._Done();
this.MK._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.YD._ReInit();this.Afg._ReInit();this.AaS._ReInit();this.MK._ReInit();this.
MK.R(A.aaR(A.acf.AR$));this.YD.S(A.aaL(A.fl.Af));this.MK.S(A.aaL(A.fl.Af));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ia)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.MK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.H3={Y:null,Gender:null,AnimalType:null,Breed:null,Jm:null,Pt:null,As3:null,B0:
null,Db:null,C$:null,CH:null,Go:null,Ay:null,KP:0,Init:function(aArg){A.zX([this
,this.Bca],this.B0.Q,0);A.pe([this,this.Bca],this);A.pe([this,this.ABp],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANH(this.
Y);},DF:function(G){var B;var Fh=0;var X=this.AV;switch(this.Cq.CP){case 6:Fh=2;
break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(
X,Fh,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HK(X,true,null
,null);this.ABp(this);},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},AeZ:function(E){
if(this.KP===E)return;this.KP=E;A.abo([this,this.Awf,this.AeZ],0);},ABp:function(
G){var B;var G0=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C3(
A.aaL(A.ach.E2));this.N.CF=[this,this.AI$];if(!!G0&&!!G0.Amv){this.N.E6(A.jV);this.
N.JE.CZ(255);this.N.ArX(G0.AqY);this.N.Ct(G0.AvO);this.N.Ce=G0.Amv;}else{this.N.
E6(A.jV);this.N.Ct(null);this.N.Ce=null;}if(!!G0&&!!G0.Agy){this.N.CS(G0.AxV);this.
N.GX.CZ(G0.Axr);this.N.AnE(G0.AmY);this.N.C4(G0.Are);this.N.Ca=G0.Agy;}else this.
Aut();},Agj:function(G){A.ab5("%s",Ays);},Ay8:function(s){this.Agj(s);},Ew:function(
G){A.ab5("%s",Ays);},AI$:function(s){this.Ew(s);},Aut:function(){A.ab5("%s",Ali);
},AAK:function(G){A.ab5("%s",Ays);},AcV:function(s){this.AAK(s);},JN:function(Ag
){this.Bb(Ag);this.Y.HK(Ag,true,null,null);this.Y.VG(null,null);},ApN:function(G
){var F;this.C$.Ahw(A._GetAutoObject(A.Device.Helper).Abz((F=this.B0.Q,F[1].call(
F[0]))));},Bca:function(s){this.ApN(s);},Awf:function(){return this.KP;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UY._Init.call(this.Jm={I:this},
0);A.Device.Na._Init.call(this.Pt={I:this},0);A.Device.K3._Init.call(this.As3={I:
this},0);C.BX._Init.call(this.B0={I:this},0);C.BX._Init.call(this.Db={I:this},0);
C.AkW._Init.call(this.C$={I:this},0);C.AxG._Init.call(this.CH={I:this},0);C.AsI.
_Init.call(this.Go={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.H3;var B;this.N.Z(true);this.Dr(C.IP);this.Y.H(Fe);this.Y.JZ(1);this.KP=A._GetAutoObject(
A.Device.Helper).Abz(this.AnimalType.Q);this.B0.H(Ah1);this.B0.Aj(true);this.B0.
T(A.aaR(A.acf.Afw));this.Db.H(Ayt);this.Db.Aj(true);this.Db.T(A.aaR(A.acf.Afr));
this.C$.H(Aor);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KP));this.C$.Gb(1000);this.
C$.EV(99000);this.C$.Ahw(A._GetAutoObject(A.Device.Helper).Abz(this.AnimalType.Q
));this.CH.H(Ah2);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Go.H(AXi);
this.Go.Aj(true);this.Go.T(A.aaR(A.acf.Jm));this.Ay.H(Ayu);this.J(this.Y,0);this.
J(this.B0,0);this.J(this.Db,0);this.J(this.C$,0);this.J(this.CH,0);this.J(this.Go
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fj];this.Gender.L6(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L6(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L6(A._GetAutoObject(A.Device.Helper).W);this.Jm.L6(A._GetAutoObject(A.Device.Helper
).W);this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CL(this.AnimalType);this.
Db.Au([B=this.Gender,B.B$,B.Cc]);this.Db.CL(this.Gender);this.C$.Au([this,this.Awf
,this.AeZ]);this.CH.Gt([this,this.D_,this.GT]);this.CH.L5([B=this.CH,B.FW]);this.
CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc]);this.CH.CL(this.Breed
);this.CH.AnD(this.Pt);this.Go.Gt([this,this.D_,this.GT]);this.Go.L5([B=this.Go,
B.FW]);this.Go.L8(A.aaL(A.ach.Edit));this.Go.Au([B=this.Jm,B.B$,B.Cc]);this.Go.CL(
this.Jm);this.Go.AnD(this.As3);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Jm._Done();this.Pt._Done();this.As3._Done();this.B0._Done();this.Db._Done(
);this.C$._Done();this.CH._Done();this.Go._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jm._ReInit();this.
Pt._ReInit();this.As3._ReInit();this.B0._ReInit();this.Db._ReInit();this.C$._ReInit(
);this.CH._ReInit();this.Go._ReInit();this.Ay._ReInit();this.B0.T(A.aaR(A.acf.Afw
));this.Db.T(A.aaR(A.acf.Afr));this.C$.T(A.aaR(A.acf.KP));this.CH.T(A.aaR(A.acf.
Breed));this.Go.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.As3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
WF={Azm:false,LU:function(G){if(A._GetAutoObject(A.Device.Device).An.Lm())A._GetAutoObject(
A.Device.Device).AY(41,true,A._GetAutoObject(A.Device.Device).An.HM().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gs();A._GetAutoObject(A.Device.Helper
).Aqo(A._GetAutoObject(A.Device.Helper).W);},Aut:function(){this.N.CS(A.jV);this.
N.C4(A.aaL(A.ach.ADV));this.N.Ca=[this,this.Ay8];},CD:function(G){if(!this.Azm){
this.Azm=true;A.pe([this,this.AcV],this);}else C.ArB.CD.call(this,G);},AAK:function(
G){A._GetAutoObject(C.A7).Cb(49);},_Init:function(aArg){C.ArB._Init.call(this,aArg
);this.__proto__=C.WF;this.J5(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IP={_Init:function(aArg){C.ADB._Init.call(this,aArg);this.__proto__=C.IP;this.
A_A(false);},_className:"Application::HeaderSelectedAnimalId"};C.I_={Filter:null
,Gender:null,AnimalType:null,Transponder:null,El:null,Y:null,P9:null,Ta:null,Og:
null,Tb:null,Ny:null,OB:null,RW:null,OC:null,RX:null,NO:null,Li:null,Jw:null,K1:
null,MD:null,Yx:null,Tc:null,RY:null,Ay:null,Ax8:0,Ax7:0,AuQ:0,AuP:0,ArA:0,AsU:0
,Avr:0,Avs:0,Am9:true,Amy:false,Aof:false,Init:function(aArg){A.zX([this,this.Avx
],this.Li.Q,0);A.zX([this,this.AuV],this.Jw.Q,0);A.zX([this,this.BqC],this.K1.Q,
0);A.zX([this,this.BkT],this.MD.Q,0);A.zX([this,this.Bq6],this.Ny.Q,0);A.zX([this
,this.Bq5],this.Og.Q,0);A.zX([this,this.BhI],this.NO.Q,0);A.zX([this,this.BhH],this.
OC.Q,0);this.Bb(this.P9);},DF:function(G){var Fh=0;var X=this.AV;switch(this.Cq.
CP){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;
}X=this.QL(X,Fh,0x414);if(!!X)this.Bb(X);this.MZ(this);},CD:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E$(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A7).FB();},A3w:function(G){var EE=(C.Aes.isPrototypeOf(G)?G:null);if(!EE)return;
var Aw=this.Filter.DM(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this
,this.Fo,this.Fs],0);}else{if(EE.Er===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else A.ab5("%s",AHY+EE.Er.toFixed());if(!!Aw){this.Filter.
CX(Aw);A.abo([this,this.Fo,this.Fs],0);}}},BAT:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A7).FB();},AAI:function(G){var EE=(
C.Am3.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.DM(EE.Er,EE.Operator
);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fo,this.Fs],0);}else{if(EE.Er===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;
}else if(EE.Er===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;}else if((EE.Er===22)||(EE.Er===26)){var A1v=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1v.EJ=EE.Er;A1v.Operator=0;Aw=A1v;}else A.ab5(
"%s",AHY+EE.Er.toFixed());if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fo,this.Fs
],0);}}},A_v:function(E){if(this.Avr===E)return;this.Avr=E;A.abo([this,this.Blx,
this.A_v],0);},A_w:function(E){if(this.Avs===E)return;this.Avs=E;A.abo([this,this.
Bly,this.A_w],0);},Avx:function(G){var F;this.A_w((F=this.Li.Q,F[1].call(F[0])));
var Aw=this.Filter.DM(7,0);if(!!Aw){var Az4=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!Az4)Az4.A5=this.Avs;else A.ab5("%s",AfI);}},AuV:function(G){var
F;this.A_v((F=this.Jw.Q,F[1].call(F[0])));var Aw=this.Filter.DM(14,0);if(!!Aw){var
Vd=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Vd)Vd.A5=
this.Avr;else A.ab5("%s",AfI);}},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},A$c:function(
E){if(this.AsU===E)return;this.AsU=E;A.abo([this,this.Bl$,this.A$c],0);},BqC:function(
G){var F;this.A$c((F=this.K1.Q,F[1].call(F[0])));var Aw=this.Filter.DM(22,1);if(
!!Aw){var Ajd=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ajd
)switch(this.AsU){case 1:Ajd.Operator=5;break;case 0:Ajd.Operator=0;break;default:
A.ab5("%s%e",AHZ,this.AsU);}else A.ab5("%s",AfI);}},A_J:function(E){if(this.ArA===
E)return;this.ArA=E;A.abo([this,this.BlN,this.A_J],0);},BkT:function(G){var F;this.
A_J((F=this.MD.Q,F[1].call(F[0])));var Aw=this.Filter.DM(26,1);if(!!Aw){var At9=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At9)switch(this.ArA
){case 1:At9.Operator=5;break;case 0:At9.Operator=0;break;default:A.ab5("%s%e",AHZ
,this.ArA);}else A.ab5("%s",AfI);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P9.Bk([this,this.Fo,this.Fs]);this.Ta.
Bk([this,this.Fo,this.Fs]);this.Og.Bk([this,this.Fo,this.Fs]);this.Tb.Bk([this,this.
Fo,this.Fs]);this.Ny.Bk([this,this.Fo,this.Fs]);this.OB.Bk([this,this.Fo,this.Fs
]);this.RW.Bk([this,this.Fo,this.Fs]);this.OC.Bk([this,this.Fo,this.Fs]);this.RX.
Bk([this,this.Fo,this.Fs]);this.NO.Bk([this,this.Fo,this.Fs]);this.Li.Bk([this,this.
Fo,this.Fs]);this.Jw.Bk([this,this.Fo,this.Fs]);this.K1.Bk([this,this.Fo,this.Fs
]);this.MD.Bk([this,this.Fo,this.Fs]);this.Yx.Bk([this,this.Fo,this.Fs]);this.Tc.
Bk([this,this.Fo,this.Fs]);this.RY.Bk([this,this.Fo,this.Fs]);this.Asg(false);A.
pe([this,this.A47],this);var BeC=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DM(1,2))?B:null);if(!!BeC){this.Asg(true);this.AGf(BeC.A5);}var Bd6=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DM(1,3))?B:null);if(!!
Bd6){this.Asg(true);this.AGg(Bd6.A5);}this.ArR(false);A.pe([this,this.ALw],this);
var BeB=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DM(4,3))?B:null
);if(!!BeB){this.ArR(true);this.AE7(A._GetAutoObject(A.Device.Helper).Mf(BeB.A5,
A._GetAutoObject(A.Device.Helper).Dv()));}var Bd5=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DM(4,2))?B:null);if(!!Bd5){this.ArR(true);this.AE9(A.
_GetAutoObject(A.Device.Helper).Mf(Bd5.A5,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var Az4=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DM(7,0
))?B:null);if(!!Az4)this.Li.Bx(this.Gender.DZ(Az4.A5));var Vd=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DM(14,0))?B:null);if(!!Vd)this.Jw.Bx(this.AnimalType.
DZ(Vd.A5));var Ajd=this.Filter.DM(22,1);if(!!Ajd){if(!Ajd.Operator)this.K1.Bx(0);
else this.K1.Bx(1);}var At9=this.Filter.DM(26,1);if(!!At9){if(!At9.Operator)this.
MD.Bx(0);else this.MD.Bx(1);}},Fs:function(Aq){this.Bk(Aq);},AGg:function(E){if(
this.Ax8===E)return;this.Ax8=E;A.abo([this,this.A9Q,this.AGg],0);},AGf:function(
E){if(this.Ax7===E)return;this.Ax7=E;A.abo([this,this.A9P,this.AGf],0);},Bq6:function(
G){var F;this.AGg((F=this.Ny.Q,F[1].call(F[0])));var Aw=this.Filter.DM(1,3);if(!
!Aw){var ABN=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABN)
ABN.A5=this.Ax8;else A.ab5("%s",AfI);}},Bq5:function(G){var F;this.AGf((F=this.Og.
Q,F[1].call(F[0])));var Aw=this.Filter.DM(1,2);if(!!Aw){var ABN=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABN)ABN.A5=this.Ax7;else A.ab5("%s",AfI);}},Be7:
function(G){var EE=(C.AjK.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.
DM(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fo,this.Fs],0
);}else{if(EE===this.Ta){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A5=this.Ax7;this.Bb(this.Og);}else if(EE===this.Tb){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=this.Ax8;this.Bb(this.Ny);}if(!!Aw){this.Filter.CX(
Aw);A.abo([this,this.Fo,this.Fs],0);}}A.pe([this,this.A47],this);},A47:function(
G){var A3e=!!this.Filter.DM(this.Og.Er,this.Og.Operator);var A48=!!this.Filter.DM(
this.Ny.Er,this.Ny.Operator);A._GetAutoObject(A.Device.Helper).J6(this.Ta,this.Aof
);A._GetAutoObject(A.Device.Helper).J6(this.Tb,this.Aof);A._GetAutoObject(A.Device.
Helper).J6(this.Og,A3e);A._GetAutoObject(A.Device.Helper).J6(this.Ny,A48);},MZ:function(
G){var B;this.Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},BBP:function(G){A.pe([this,this.Fj],this);A.pe([this,this.
MZ],this);},BAQ:function(G){this.Asg(!this.Aof);if(this.Aof===false){var Aw=this.
Filter.DM(this.P9.Er,this.P9.Operator);while(!!Aw){this.Filter.Nw(Aw);Aw=this.Filter.
DM(this.P9.Er,this.P9.Operator);}A.abo([this,this.Fo,this.Fs],0);}},Asg:function(
E){if(this.Aof===E)return;this.Aof=E;A.abo([this,this.A9O,this.Asg],0);A.pe([this
,this.A47],this);},AE9:function(E){if(this.AuQ===E)return;this.AuQ=E;A.abo([this
,this.A8T,this.AE9],0);},AE7:function(E){if(this.AuP===E)return;this.AuP=E;A.abo([
this,this.A8R,this.AE7],0);},BhI:function(G){var F;this.AE9((F=this.NO.Q,F[1].call(
F[0])));var Aw=this.Filter.DM(4,2);if(!!Aw){var AfV=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfV){var AaX=A._GetAutoObject(A.Device.Helper).ZY(
this.AuQ-1);AfV.A5=AaX;}else A.ab5("%s",AfI);}},BhH:function(G){var F;this.AE7((
F=this.OC.Q,F[1].call(F[0])));var Aw=this.Filter.DM(4,3);if(!!Aw){var AfV=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfV){var AaX=A._GetAutoObject(
A.Device.Helper).ZY(this.AuP);AfV.A5=AaX;}else A.ab5("%s",AfI);}},ALw:function(G
){var A3e=this.Am9&&!!this.Filter.DM(this.OC.Er,this.OC.Operator);var A48=this.Am9&&
!!this.Filter.DM(this.NO.Er,this.NO.Operator);A._GetAutoObject(A.Device.Helper).
J6(this.OB,this.Am9);A._GetAutoObject(A.Device.Helper).J6(this.RW,this.Am9&&this.
Amy);A._GetAutoObject(A.Device.Helper).J6(this.RX,this.Am9&&this.Amy);A._GetAutoObject(
A.Device.Helper).J6(this.OC,A3e);A._GetAutoObject(A.Device.Helper).J6(this.NO,A48
);},ArR:function(E){if(this.Amy===E)return;this.Amy=E;A.abo([this,this.A8Q,this.
ArR],0);A.pe([this,this.ALw],this);},Be6:function(G){var EE=(C.AjK.isPrototypeOf(
G)?G:null);if(!EE)return;var Aw=this.Filter.DM(EE.Er,EE.Operator);if(!!Aw){this.
Filter.Nw(Aw);A.abo([this,this.Fo,this.Fs],0);}else{if(EE===this.RW){Aw=A._NewObject(
A.Device.UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper
).ZY(this.AuP);this.Bb(this.OC);}else if(EE===this.RX){Aw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper).ZY(this.AuQ-1);this.
Bb(this.NO);}if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fo,this.Fs],0);}}A.pe([
this,this.ALw],this);},BAP:function(G){this.ArR(!this.Amy);if(this.Amy===false){
var Aw=this.Filter.DM(this.OB.Er,this.OB.Operator);while(!!Aw){this.Filter.Nw(Aw
);Aw=this.Filter.DM(this.OB.Er,this.OB.Operator);}A.abo([this,this.Fo,this.Fs],0
);}},Bnx:function(E){if(this.Am9===E)return;this.Am9=E;A.pe([this,this.ALw],this
);},Fo:function(){return this.Filter;},Bly:function(){return this.Avs;},Blx:function(
){return this.Avr;},Bl$:function(){return this.AsU;},BlN:function(){return this.
ArA;},A9Q:function(){return this.Ax8;},A9P:function(){return this.Ax7;},A9O:function(
){return this.Aof;},A8T:function(){return this.AuQ;},A8R:function(){return this.
AuP;},A8Q:function(){return this.Amy;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.AB6._Init.call(this.Transponder={I:this},0);C.AB6._Init.
call(this.El={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ACg._Init.call(
this.P9={I:this},0);C.AjK._Init.call(this.Ta={I:this},0);C.Aby._Init.call(this.Og={
I:this},0);C.AjK._Init.call(this.Tb={I:this},0);C.Aby._Init.call(this.Ny={I:this
},0);C.ACg._Init.call(this.OB={I:this},0);C.AjK._Init.call(this.RW={I:this},0);C.
AC5._Init.call(this.OC={I:this},0);C.AjK._Init.call(this.RX={I:this},0);C.AC5._Init.
call(this.NO={I:this},0);C.Am3._Init.call(this.Li={I:this},0);C.Am3._Init.call(this.
Jw={I:this},0);C.Am3._Init.call(this.K1={I:this},0);C.Am3._Init.call(this.MD={I:
this},0);C.QH._Init.call(this.Yx={I:this},0);C.QH._Init.call(this.Tc={I:this},0);
C.QH._Init.call(this.RY={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I_;var B;this.N.Z(true);this.N.CS(A.aaR(A.acf.A5G));this.Dr(C.APK);this.Gender.
Au(this.Avs);this.AnimalType.Au(this.Avr);this.Transponder.Au(this.AsU);this.El.
Au(this.ArA);this.Y.H(Fe);this.Y.JZ(1);this.P9.H(I1);this.P9.Aj(true);this.P9.T(
A._GetAutoObject(A.Device.Helper).Am1(0,1));this.P9.Nq(1);this.Ta.H(Qf);this.Ta.
Aj(true);this.Ta.T(A.aaR(A.acf.AEs));this.Ta.Nq(1);this.Ta.OV(2);this.Og.H(Aan);
this.Og.Nq(1);this.Og.OV(2);this.Og.AF_(A.aaR(A.acf.GN));this.Tb.H(Alj);this.Tb.
Aj(true);this.Tb.T(A.aaR(A.acf.AHr));this.Tb.Nq(1);this.Tb.OV(3);this.Ny.H(Aos);
this.Ny.Aj(true);this.Ny.Nq(1);this.Ny.OV(3);this.Ny.AF_(A.aaR(A.acf.GN));this.OB.
H(AXj);this.OB.Aj(true);this.OB.T(A.aaR(A.acf.RU));this.OB.Nq(4);this.RW.H(AXk);
this.RW.Aj(true);this.RW.T(A.aaR(A.acf.AEs));this.RW.Nq(4);this.RW.OV(3);this.OC.
H(AXl);this.OC.Nq(4);this.OC.OV(3);this.OC.A_O(2);this.RX.H(AXm);this.RX.Aj(true
);this.RX.T(A.aaR(A.acf.AHr));this.RX.Nq(4);this.RX.OV(2);this.NO.H(AXn);this.NO.
Aj(true);this.NO.Nq(4);this.NO.OV(2);this.NO.A_O(3);this.Li.H(Atf);this.Li.Aj(true
);this.Li.Nq(7);this.Li.Ahy(0);this.Li.OV(0);this.Jw.H(U6);this.Jw.Aj(true);this.
Jw.Nq(14);this.Jw.Ahy(0);this.Jw.OV(0);this.K1.H(U6);this.K1.Aj(true);this.K1.Nq(
22);this.K1.Ahy(0);this.K1.OV(1);this.MD.H(U6);this.MD.Aj(true);this.MD.Nq(26);this.
MD.Ahy(0);this.MD.OV(1);this.Yx.H(U6);this.Yx.Aj(true);this.Yx.Nq(11);this.Yx.Ahy(
0);this.Yx.OV(0);this.Tc.H(U6);this.Tc.Aj(true);this.Tc.Nq(12);this.Tc.Ahy(0);this.
Tc.OV(0);this.RY.H(U6);this.RY.Aj(true);this.RY.Nq(8);this.RY.Ahy(0);this.RY.OV(
0);this.Ay.H(Ix);this.J(this.Y,0);this.J(this.P9,0);this.J(this.Ta,0);this.J(this.
Og,0);this.J(this.Tb,0);this.J(this.Ny,0);this.J(this.OB,0);this.J(this.RW,0);this.
J(this.OC,0);this.J(this.RX,0);this.J(this.NO,0);this.J(this.Li,0);this.J(this.Jw
,0);this.J(this.K1,0);this.J(this.MD,0);this.J(this.Yx,0);this.J(this.Tc,0);this.
J(this.RY,0);this.J(this.Ay,0);this.N.CF=[this,this.Ew];this.N.Ca=[this,this.BAT
];this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.BBP];this.P9.AR=[this,this.BAQ
];this.P9.Au([this,this.A9O,this.Asg]);this.Ta.AR=[this,this.Be7];this.Og.Gt([this
,this.D_,this.GT]);this.Og.Au([this,this.A9P,this.AGf]);this.Tb.AR=[this,this.Be7
];this.Ny.Gt([this,this.D_,this.GT]);this.Ny.Au([this,this.A9Q,this.AGg]);this.OB.
AR=[this,this.BAP];this.OB.Au([this,this.A8Q,this.ArR]);this.RW.AR=[this,this.Be6
];this.OC.Gt([this,this.D_,this.GT]);this.OC.Au([this,this.A8R,this.AE7]);this.RX.
AR=[this,this.Be6];this.NO.Gt([this,this.D_,this.GT]);this.NO.Au([this,this.A8T,
this.AE9]);this.Li.AR=[this,this.AAI];this.Li.Au([B=this.Gender,B.B$,B.Cc]);this.
Li.CL(this.Gender);this.Jw.AR=[this,this.AAI];this.Jw.Au([B=this.AnimalType,B.B$
,B.Cc]);this.Jw.CL(this.AnimalType);this.K1.AR=[this,this.AAI];this.K1.Au([B=this.
Transponder,B.B$,B.Cc]);this.K1.CL(this.Transponder);this.MD.AR=[this,this.AAI];
this.MD.Au([B=this.El,B.B$,B.Cc]);this.MD.CL(this.El);this.Yx.AR=[this,this.A3w];
this.Tc.AR=[this,this.A3w];this.RY.AR=[this,this.A3w];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.El._Done();this.Y._Done();this.P9._Done();this.Ta._Done();this.Og._Done(
);this.Tb._Done();this.Ny._Done();this.OB._Done();this.RW._Done();this.OC._Done(
);this.RX._Done();this.NO._Done();this.Li._Done();this.Jw._Done();this.K1._Done(
);this.MD._Done();this.Yx._Done();this.Tc._Done();this.RY._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.El._ReInit();
this.Y._ReInit();this.P9._ReInit();this.Ta._ReInit();this.Og._ReInit();this.Tb._ReInit(
);this.Ny._ReInit();this.OB._ReInit();this.RW._ReInit();this.OC._ReInit();this.RX.
_ReInit();this.NO._ReInit();this.Li._ReInit();this.Jw._ReInit();this.K1._ReInit(
);this.MD._ReInit();this.Yx._ReInit();this.Tc._ReInit();this.RY._ReInit();this.Ay.
_ReInit();this.N.CS(A.aaR(A.acf.A5G));this.Ta.T(A.aaR(A.acf.AEs));this.Og.AF_(A.
aaR(A.acf.GN));this.Tb.T(A.aaR(A.acf.AHr));this.Ny.AF_(A.aaR(A.acf.GN));this.OB.
T(A.aaR(A.acf.RU));this.RW.T(A.aaR(A.acf.AEs));this.RX.T(A.aaR(A.acf.AHr));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ta)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Og)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ny)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Li)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$P={ZZ:null,BoS:
function(Byk){var EF=A._NewObject(C.A$O,0);EF.AB=Byk;EF.ME=this.ZZ;this.ZZ=EF;},
A$t:function(){var Vu=null;if(!!this.ZZ){Vu=this.ZZ.AB;this.ZZ=this.ZZ.ME;}return Vu;
},Contains:function(Alt){var EF=this.ZZ;while(!!EF){if(EF.AB.An$===Alt)return true;
EF=EF.ME;}return false;},BoI:function(){if(!!this.ZZ)return this.ZZ.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$P;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$O={AB:null,
ME:null,_Init:function(aArg){this.__proto__=C.A$O;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ME)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMu={ASg:function(){A._GetAutoObject(
A.Device.Helper).AxD(this.Ia,0);A._GetAutoObject(C.A7).FB();},A8k:function(){this.
Ia.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A7).FB();},A7j:function(
){return A.aaL(A.ach.Am7);},_Init:function(aArg){C.AGy._Init.call(this,aArg);this.
__proto__=C.AMu;this.Dr(C.IP);},_className:"Application::AnimalActionRateScreen"
};C.AMq={WK:function(G){this.Agz();this.I8(A.aaR(A.acf.AVH),[this,this.AT6],5);this.
I8(A.aaR(A.acf.A59),[this,this.Bmz],4);this.I8(A.aaR(A.acf.AGx),[this,this.ATR],
3);this.I8(A.aaR(A.acf.An5),[this,this.Aw2],2);this.I8(A.aaR(A.acf.AdW),[this,this.
AFa],1);this.I8(A.aaR(A.acf.AuL),[this,this.AE6],0);A._GetAutoObject(C.BS).Fz();
A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DF:function(G){},AbA:function(){return C.ANj;},AbB:function(
){return C.ADD;},Ra:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MB();var
Azk=A._NewObject(A.Device.BoolFilterCriterion,0);Azk.Initialize(8,0,true,true);Bf.
CX(Azk);A._GetAutoObject(A.Device.Device).An.Bk(Bf);},HS:function(G){var F;C.GJ.
HS.call(this,G);if(this.Aki()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajs((F=this.Fm,F[1].call(F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.
N.OW(false);this.N.OX(false);},Agl:function(){A._GetAutoObject(C.A7).Cb(40);},_Init:
function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AMq;var B;this.Dr(C.AO$
);this.Dl(A.aaR(A.acf.A8q));this.AwX([B=A._GetAutoObject(A.Device.Device),B.A8U,
B.Bbz]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.A8q));}
,_className:"Application::AlarmListScreen"};C.ANK={DF:function(G){},Agi:function(
G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gu);var Aa=(C.ACn.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).GS(Aa.Ht);A._GetAutoObject(C.A7).Cb(13
);}},Ra:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MB();var AzE=A._NewObject(
A.Device.BoolFilterCriterion,0);AzE.Initialize(9,0,true,true);Bf.CX(AzE);A._GetAutoObject(
A.Device.Device).An.Bk(Bf);},HS:function(G){C.GJ.HS.call(this,G);this.N.OW(false
);this.N.OX(false);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.ANK;this.Dr(C.APb);this.Dl(A.aaR(A.acf.A8r));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8r));},_className:"Application::ControlListScreen"
};C.Aes={Filter:null,Er:0,Jh:10,TableId:0,Operator:1,CQ:function(){var F;this.TA((
F=this.Filter,F[1].call(F[0])).DM(this.Er,this.Operator));},Bl:function(aSize){C.
Co.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jh),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mj],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mj],E,0);A.pe([this,this.
Mj],this);},Mj:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.TA((F=this.Filter,F[1].call(F[0])).DM(this.Er,this.Operator));else this.
TA(null);},Ahy:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mj],this);},Nq:function(E){if(this.Er===E)return;this.Er=E;A.pe([this,this.
Mj],this);},TA:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A7c(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).Am1(this.TableId
,this.Er));},OV:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mj],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aes;this.V.H(AH0);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CQ();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QH={H$:null,Bl:function(aSize){var B;C.Aes.Bl.call(this,aSize);this.H$.H([(aSize[
0]-((B=this.H$.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jh,0,this.
H$.M[0]-this.Jh,aSize[1]]);},TA:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).Am1(this.TableId,this.Er));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Aw&&Aw.A5)this.H$.Cw(1);else this.H$.Cw(0);},_Init:function(aArg
){C.Aes._Init.call(this,aArg);A.acg.Ap._Init.call(this.H$={I:this},0);this.__proto__=
C.QH;this.H$.H(AH1);this.H$.Cw(0);this.J(this.H$,0);this.H$.Ax(A.aaL(A.ach.AqW));
},_Done:function(){this.__proto__=C.Aes;this.H$._Done();C.Aes._Done.call(this);}
,_ReInit:function(){C.Aes._ReInit.call(this);this.H$._ReInit();},_Mark:function(
D){var B;C.Aes._Mark.call(this,D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APK={Ap:null,Text:null,Dg:function(
E){C.BR.Dg.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APK;this.Ap.H(AXo);this.Text.H(AXp);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeE));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Ap._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjT={
AW:null,Ua:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BR.Bl.call(this,aSize);this.Ua.H(A.abJ(this.Ua.M,A.abe(this.AW.M.slice(0
,2),AXq)));this.Ua.H(A.abK(this.Ua.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXr
)));},Ai:function(Ae){var B;C.BR.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IG)this.Ua.L(A.jb.AV);else this.Ua.L(A.jb.Am8);},Dg:function(E){
C.BR.Dg.call(this,E);this.Gw.L(E);this.D2.Zz(E);},WN:function(E){C.BR.WN.call(this
,E);this.D2.CV(E);},Akq:function(){return this.AW.Akq();},Awn:function(){return this.
AW.Awn();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B_().toFixed(
));},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BW._Init.call(this.Ua={I:this},0);A.acg.Ap._Init.call(this.Gw={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C8._Init.call(this.A$={I:this
},0);this.__proto__=C.AjT;this.AW.H(AXs);this.Ua.H(AXt);this.Ua.Nu(2);this.Gw.H(
AXu);this.Gw.L(A.jb.CU);this.D2.A1(0x14);this.D2.H(AXv);this.D2.Zz(A.jb.Bm);this.
D2.CV(A.jb.Rk);this.D2.Hp(2);this.A$.DD(AXw);this.A$.DN(AXx);this.A$.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.Ua,0);this.J(this.Gw,0);this.J(this.D2,0);this.J(this.
A$,0);this.Bb(this.AW);this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BR;this.AW._Done();this.Ua._Done(
);this.Gw._Done();this.D2._Done();this.A$._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.AW._ReInit();this.Ua._ReInit();this.Gw._ReInit(
);this.D2._ReInit();this.A$._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BR._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSearch"};C.DG={Dk:null,It:null,Is:null
,Agh:function(G){if(this.Ez<0)this.L7(1);else if(this.Ez===9)this.L7(0);else this.
L7(this.Ez+1);A.pe(this.Dk,this);},Ai:function(Ae){var B;C.Ez.Ai.call(this,Ae);var
Hg=((Ae&0x10)===0x10);var IG=((Ae&0x40)===0x40);if(IG){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.CZ(256);}else if(Hg){this.Background.L(this.M$);this.
Text.L(A.jb.Text);this.CZ(256);}else{this.Background.L(this.M$);this.Text.L(A.jb.
Text);this.CZ(128);}},Agg:function(G){if(this.Ez<=0)this.L7(9);else this.L7(this.
Ez-1);A.pe(this.Dk,this);},_Init:function(aArg){C.Ez._Init.call(this,aArg);A.Core.
BF._Init.call(this.It={I:this},0);A.Core.BF._Init.call(this.Is={I:this},0);this.
__proto__=C.DG;this.It.Filter=4;this.Is.Filter=5;this.It.BG=[this,this.Agh];this.
It.D1=[this,this.Agh];this.Is.BG=[this,this.Agg];this.Is.D1=[this,this.Agg];},_Done:
function(){this.__proto__=C.Ez;this.It._Done();this.Is._Done();C.Ez._Done.call(this
);},_ReInit:function(){C.Ez._ReInit.call(this);this.It._ReInit();this.Is._ReInit(
);},_Mark:function(D){var B;C.Ez._Mark.call(this,D);if((B=this.Dk)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Is)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Dk:null,Cv:null,CW:null,Dz:null,Eq:null,F0:null,ET:null,Fl:null,Fb:null,Ne:0,ARv:
false,Aqz:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.Aqz)this.ET.Ae0(true);else this.ET.Ae0(false);},AwT:function(E){var B;
if(E===this.Akq())return;var Aga=E;var DV=this.ET;while(!!DV){if(Aga>0){DV.L7(Aga
%10);Aga=(Aga/10)|0;}else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=this.QL(DV,2,0x11))?
B:null);}},Akq:function(){return A.wz(this.Awn(),-1,10);},Ov:function(G){if(this.
F0.Ez>=0)this.BgP(7);},M5:function(G){if(((this.Akq()>0)||this.ARv)&&(this.Cv.Ez<
0))this.BgP(2);else if(this.Akq()<=0)this.Fb.Mw=true;},Adv:function(G){A.pe(this.
Dk,this);},BgP:function(GA){var B;var ALK=0;var DV=null;switch(GA){case 2:{DV=this.
Cv;ALK=7;}break;case 7:{DV=this.ET;ALK=2;}break;default:throw new Error(AXy);}while(
!!DV){var A3p=(C.DG.isPrototypeOf(B=this.QL(DV,ALK,0x11))?B:null);if(!!A3p)DV.L7(
A3p.Ez);else if(ALK===7)DV.L7(0);else DV.L7(-1);DV=A3p;}A.pe([this,this.Adv],this
);},Ae0:function(E){if(this.Aqz===E)return;this.Aqz=E;this.Am();},Bny:function(E
){if(this.ARv===E)return;this.ARv=E;},ATv:function(E){var B;if(E===this.Awn())return;
var Aga=E;var DV=this.ET;while(!!DV){if(Aga.length>0){DV.L7(A.wz(A.ab2(Aga,1),-1
,10));Aga=A.abV(Aga,Aga.length-1);}else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=this.
QL(DV,2,0x11))?B:null);}},Awn:function(){var B;var IE=A.jV;var O=0;var B6=this.Cv;
for(;O<6;O=O+1){if(!!B6&&(B6.Ez>=0))IE=IE+B6.Ez.toFixed();B6=(C.DG.isPrototypeOf(
B=this.TX(B6,0x11))?B:null);}return IE;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DG._Init.call(this.Cv={I:this},0);C.DG._Init.call(this.CW={I:this},
0);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG.
_Init.call(this.F0={I:this},0);C.DG._Init.call(this.ET={I:this},0);A.Core.BF._Init.
call(this.Fl={I:this},0);A.Core.BF._Init.call(this.Fb={I:this},0);this.__proto__=
C.AW;this.H(Ayv);this.Cv.A1(0x3);this.Cv.H(AH2);this.CW.A1(0x3);this.CW.H(AH3);this.
Dz.A1(0x3);this.Dz.H(AH4);this.Eq.A1(0x3);this.Eq.H(AH5);this.F0.A1(0x3);this.F0.
H(AH6);this.ET.A1(0x3);this.ET.H(AH7);this.ET.L7(0);this.Fl.Filter=6;this.Fb.Filter=
7;this.Ne=A.jb.CK;this.J(this.Cv,0);this.J(this.CW,0);this.J(this.Dz,0);this.J(this.
Eq,0);this.J(this.F0,0);this.J(this.ET,0);this.Bb(this.ET);this.Cv.Dk=[this,this.
Adv];this.CW.Dk=[this,this.Adv];this.Dz.Dk=[this,this.Adv];this.Eq.Dk=[this,this.
Adv];this.F0.Dk=[this,this.Adv];this.ET.Dk=[this,this.Adv];this.Fl.BG=[this,this.
Ov];this.Fb.BG=[this,this.M5];},_Done:function(){this.__proto__=A.Core.P;this.Cv.
_Done();this.CW._Done();this.Dz._Done();this.Eq._Done();this.F0._Done();this.ET.
_Done();this.Fl._Done();this.Fb._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cv._ReInit();this.CW._ReInit();this.Dz._ReInit(
);this.Eq._ReInit();this.F0._ReInit();this.ET._ReInit();this.Fl._ReInit();this.Fb.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Dk)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bii="7ab39e7a";C.BDp={Undefined:0,BEt:1,BDH:2};C.AkL={
Ty:null,AiX:null,Lg:null,ANO:null,Aoc:null,push:function(MT){if(!this.Ty){MT.AhA=
null;MT.ME=null;this.Ty=MT;this.AiX=this.Ty;}else{MT.AhA=this.AiX;MT.ME=null;this.
AiX.ME=MT;this.AiX=MT;}},BCn:function(MT){var Qo=this.Ty;while(!!Qo){if(Qo.JS.Id===
MT.Id)return Qo;Qo=Qo.ME;}return Qo;},BB8:function(MT){if(MT===this.Ty)this.pop(
);else if(MT===this.AiX){MT=MT.AhA;if(!!MT)MT.ME=null;this.AiX=MT;}else{MT.AhA.ME=
MT.ME;MT.ME.AhA=MT.AhA;}},Ahs:function(E){var F;if(this.Lg===E)return;this.Lg=E;
if(!!this.Lg)this.Lg.AgO(2);(F=this.ANO,F[2].call(F[0],this.Lg));},Vr:function(G
){var Qo=(C.AUj.isPrototypeOf(G)?G:null);if(!!Qo){if(!Qo.JS.PopupState){if(!this.
Lg)this.Ahs(this.top());}else if(Qo.JS.PopupState===4){this.pop();this.Ahs(this.
top());}else if(Qo.JS.PopupState===5){this.pop();this.Ahs(this.top());}else if(Qo.
JS.PopupState===7){this.pop();this.Ahs(this.top());}else if(Qo.JS.PopupState===8
){this.pop();this.Ahs(this.top());}else if(Qo.JS.PopupState===6){if(Qo===this.Lg
){this.pop();this.Ahs(this.top());}else this.BB8(Qo);}else if(Qo.JS.PopupState===
3){this.pop();this.Ahs(this.top());}}},pop:function(){var AK6=null;if(!!this.Ty){
AK6=this.Ty;if(this.Ty===this.AiX){this.Ty=null;this.AiX=null;}else{this.Ty=this.
Ty.ME;if(!this.Ty)throw new Error(AXz);this.Ty.AhA=null;}AK6.AhA=null;AK6.ME=null;
}return AK6;},top:function(){return this.Ty;},BBQ:function(G){var B;var At_=(A.Device.
PopupContext.isPrototypeOf(B=this.Aoc.JS)?B:null);if(!!At_){var A4D=this.BCn(At_
);if(!!A4D){A4D.A_k(At_);if(!At_.Show)A4D.AgO(6);}else if(At_.Show){var AKJ=A._NewObject(
C.AUj,0);AKJ.A_k(At_);AKJ.ATc=[this,this.Vr];this.push(AKJ);AKJ.AgO(0);}}},_Init:
function(aArg){A.Core.Bac._Init.call(this.Aoc={I:this},0);this.__proto__=C.AkL;this.
Aoc.ASF=[this,this.BBQ];this.Aoc.BmS(A._GetAutoObject(A.Device.Device).AnS);A.h7++;
},_Done:function(){this.__proto__=null;this.Aoc._Done();A.h7--;},_ReInit:function(
){this.Aoc._ReInit();},_Mark:function(D){var B;if((B=this.Ty)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lg)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANO)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aoc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AUj={Ro:null,ME:null,AhA:null,JS:null,ATc:null,PopupIdToString:null,Af1:function(
Bxs,Bx1,Byj,Bya,Byc,Bx$,BxK){var Vt=A._NewObject(C.AUi,0);Vt.Bn1(this.JS.Id);Vt.
A_6(Bxs);Vt.ATd=Bx$;Vt.A_8(this.JS.Ak5);Vt.A_T(this.JS.AkJ);Vt.BQ=A._NewObject(C.
N,0);Vt.Ls().Ca=Byc;Vt.Ls().Ce=null;Vt.Ls().CF=Bya;Vt.Ls().CS(Byj);Vt.Ls().Ct(null
);Vt.Ls().Hz(Bx1);Vt.Ls().AFB(BxK);return Vt;},Akr:function(){if(!this.Ro){var Ags=
this.PopupIdToString.BT(this.JS.Id);switch(this.JS.Id){case 91:case 92:this.Ro=this.
Af1(Ags,A.jV,A.jV,null,null,[this,this.Agd],0);break;case 39:this.Ro=this.Af1(Ags
,A.aaR(A.acf.AmG),A.aaR(A.acf.Ok),[this,this.A3C],[this,this.A3D],[this,this.Agd
],3);break;case 13:this.Ro=this.Af1(Ags,A.aaR(A.acf.AmG),A.aaR(A.acf.Bo4),[this,
this.A3B],[this,this.AKO],[this,this.Agd],3);break;case 25:this.Ro=this.Af1(Ags,
A.aaR(A.acf.AmG),A.aaR(A.acf.Ok),[this,this.A3B],[this,this.AKO],[this,this.Agd]
,3);break;case 16:case 24:case 49:case 74:this.Ro=this.Af1(Ags,A.aaR(A.acf.AmG),
A.jV,[this,this.A3B],null,[this,this.Agd],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 116:case 34:case
82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 117:
case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:
case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:
case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:
case 71:case 113:case 100:case 114:case 97:case 88:case 89:case 84:case 93:case 94:
case 87:case 109:case 102:case 101:case 103:this.Ro=this.Af1(Ags,A.jV,A.aaR(A.acf.
Ok),null,[this,this.AKO],[this,this.Agd],3);break;case 58:case 9:case 6:case 29:
case 107:case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:
this.Ro=this.Af1(Ags,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3C],[this,this.
A3D],[this,this.Agd],3);break;case 110:this.Ro=this.Af1(Ags,A.jV,A.jV,null,null,[
this,this.Agd],1);break;case 46:case 111:this.Ro=this.Af1(Ags,A.jV,A.aaR(A.acf.Ok
),null,[this,this.AKO],[this,this.Agd],1);break;case 4:case 7:case 33:case 115:case
44:case 37:case 38:case 63:case 95:case 108:case 112:this.Ro=this.Af1(Ags,A.aaR(
A.acf.No),A.aaR(A.acf.Yes),[this,this.A3C],[this,this.A3D],[this,this.Agd],1);break;
default:A.ab5("%s",(AXA+this.JS.Id.toFixed())+AXB);}}switch(this.JS.Id){case 16:
case 49:this.Ro.A$k(true);break;case 91:case 92:this.Ro.A$k(false);break;default:;
}return this.Ro;},AKO:function(G){this.AgO(4);},A3B:function(G){this.AgO(5);},A3D:
function(G){this.AgO(7);},A3C:function(G){this.AgO(8);},Agd:function(G){this.AgO(
3);},A_k:function(E){if(this.JS===E)return;this.JS=E;if(!!this.Ro){this.Akr().A_8(
this.JS.Ak5);this.Akr().A_T(this.JS.AkJ);}},AgO:function(Byf){var B;this.JS.Bn2(
Byf);(B=this.ATc)?B[1].call(B[0],this):null;},BBm:function(G){this.AgO(9);},_Init:
function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={I:this}
,0);this.__proto__=C.AUj;A.h7++;},_Done:function(){this.__proto__=null;this.PopupIdToString.
_Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(
D){var B;if((B=this.Ro)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ME)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AhA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.JS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATc)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Application::PopupEntry"};C.Ge={BooleanToYesNo:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.BT(aIndex
);},DZ:function(A8){return A8;},H8:function(){return 1;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Ge;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Afq={UB:null,Ki:function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.
AM!==BP){if(!!this.UB&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.UB,F[
2].call(F[0],false));break;case 1:(F=this.UB,F[2].call(F[0],true));break;default:;
}A.abo(this.UB,0);}},Kd:function(G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.
AM!==BP){if(!!this.UB&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.UB,F[
2].call(F[0],false));break;case 1:(F=this.UB,F[2].call(F[0],true));break;default:;
}A.abo(this.UB,0);}},AkD:function(E){if(A.aaZ(this.UB,E))return;if(!!this.Q)A.z$([
this,this.A4e],this.UB,0);this.UB=E;if(!!E)A.zX([this,this.A4e],E,0);if(!!E)A.pe([
this,this.A4e],this);},A4e:function(G){var F;if(!!this.UB){if((F=this.UB,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BX._Init.call(this,aArg
);this.__proto__=C.Afq;this.J5(this.V,-1);},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.UB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUz={Jl:null,O3:null,IZ:null,Gn:null,AL:null,Abq:null,AgU:null,TT:null,Sg:null
,AcH:null,Xa:null,Hl:null,ABM:true,Init:function(aArg){var B;A.zX([this,this.Al_
],[B=A._GetAutoObject(A.Device.Device),B.AS4,B.A0Q],0);A.pe([this,this.Al_],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABM)this.N.C4(A.aaL(A.ach.
AQ$));else this.N.C4(A.aaL(A.ach.ARa));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.O3.L(A.jb.Bm);this.Sg.Z(false);this.TT.Z(false);this.IZ.Z(true);this.Gn.
As(false);(F=this.Gn.Q,F[2].call(F[0],this.Gn.B3));this.Background.L(A.jb.Gk);}else
if(this.Abq.Bw){this.O3.L(A.jb.Text);this.Sg.Z(true);this.TT.Z(true);this.IZ.Z(false
);this.Gn.As(false);(F=this.Gn.Q,F[2].call(F[0],this.Gn.B3));this.Background.L(A.
jb.E1);}else{this.O3.L(A.jb.Text);this.Sg.Z(false);this.TT.Z(false);this.IZ.Z(true
);this.Gn.As(true);this.Background.L(A.jb.CK);}if(this.AgU.Bw)this.Xa.Z(true);else
this.Xa.Z(false);},CD:function(G){A._GetAutoObject(A.Device.Device).AhM();},E4:function(
G){A._GetAutoObject(A.Device.Device).An4();A._GetAutoObject(A.Device.Device).Afb(
false);A._GetAutoObject(A.Device.Device).UA(false);},Al_:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BA4],this);break;case 3:{A.pe([this,this.BfG],this);A.pe([B=this.Abq,B.AxR],this
);A.pe(this.Abq.MJ,this);}break;case 4:A.ab5("%s",AXC);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A7).FB();},BBS:function(G){this.Bot(!this.ABM);},Bot:function(
E){if(this.ABM===E)return;this.ABM=E;if(!E)A._GetAutoObject(A.Device.Device).Afb(
false);this.Am();},BA4:function(G){var B;this.BfG(this);if(this.ABM)A._GetAutoObject(
A.Device.Device).Afb(true);A._GetAutoObject(A.Device.Device).WQ(65280);A._GetAutoObject(
A.Device.Device).UA(true);A.pe([B=this.Abq,B.StartTimer],this);A.pe([B=this.AgU,
B.StartTimer],this);this.Am();},BA5:function(G){A._GetAutoObject(A.Device.Device
).Afb(false);A._GetAutoObject(A.Device.Device).UA(false);this.Am();},BA7:function(
G){this.Am();},BfG:function(G){A._GetAutoObject(A.Device.Device).AhM();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jl._Init.call(this.Jl={I:this},0);C.CG._Init.
call(this.O3={I:this},0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Gn._Init.
call(this.Gn={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abq={I:this},0);A.Core.Timer._Init.call(this.AgU={I:this},0);A.acg.Ap.
_Init.call(this.TT={I:this},0);A.acg.Ap._Init.call(this.Sg={I:this},0);A.acg.Text.
_Init.call(this.AcH={I:this},0);C.Xa._Init.call(this.Xa={I:this},0);C.CG._Init.call(
this.Hl={I:this},0);this.__proto__=C.AUz;var B;this.Background.L(A.jb.CK);this.N.
Z(true);this.Jl.H(AXD);this.Jl.AkG(0);this.O3.H(AXE);this.O3.R(A.aaR(A.acf.Bah));
this.O3.L(A.jb.Text);this.IZ.H(AXF);this.IZ.L(A.jb.AV);this.IZ.Zx(true);this.Gn.
Fq(1750);this.Gn.Ux(750);this.Gn.AkB(0);this.Gn.As(true);this.Gn.B3=3;this.AL.H(
Ayw);this.Abq.PZ(-1);this.Abq.WO(1000);this.AgU.PZ(-1);this.AgU.WO(5000);this.TT.
H(AH8);this.Sg.H(AH8);this.Sg.L(A.jb.E1);this.AcH.H(Ayw);this.AcH.R(A.aaR(A.acf.
A$Q));this.AcH.L(A.jb.Text);this.Xa.H(Ayw);this.Hl.H(AXG);this.Hl.As(false);this.
Hl.R(A.aaR(A.acf.RangeTest));this.Hl.L(A.jb.Text);this.J(this.Jl,0);this.J(this.
O3,0);this.J(this.IZ,0);this.J(this.AL,0);this.J(this.TT,0);this.J(this.Sg,0);this.
J(this.AcH,0);this.J(this.Xa,0);this.J(this.Hl,0);this.N.CF=[this,this.Ew];this.
N.Ca=[this,this.BBS];this.N.C3(A.aaL(A.ach.E2));this.O3.S(A.aaL(A.fl.Af));this.O3.
A0(A.aaL(A.fl.Ak));this.O3.Cr(A.aaL(A.fl.Bh));this.IZ.Ax(A.aaL(A.ach.AD3));this.
Gn.Q=[B=this.IZ,B.ASR,B.Cw];this.Abq.MJ=[this,this.BA5];this.AgU.MJ=[this,this.BA7
];this.TT.Ax(A.aaL(A.ach.TT));this.Sg.Ax(A.aaL(A.ach.Sg));this.AcH.S(A.aaL(A.fl.
Af));this.Xa.Au([B=A._GetAutoObject(A.Device.Device),B.AS5,B.A0R]);this.Hl.S(A.aaL(
A.fl.Kt));this.Hl.A0(A.aaL(A.fl.HL));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jl._Done();this.O3._Done();this.IZ._Done();this.Gn._Done();this.AL._Done(
);this.Abq._Done();this.AgU._Done();this.TT._Done();this.Sg._Done();this.AcH._Done(
);this.Xa._Done();this.Hl._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jl._ReInit();this.O3._ReInit();this.IZ._ReInit();this.Gn.
_ReInit();this.AL._ReInit();this.Abq._ReInit();this.AgU._ReInit();this.TT._ReInit(
);this.Sg._ReInit();this.AcH._ReInit();this.Xa._ReInit();this.Hl._ReInit();this.
O3.R(A.aaR(A.acf.Bah));this.AcH.R(A.aaR(A.acf.A$Q));this.Hl.R(A.aaR(A.acf.RangeTest
));this.O3.S(A.aaL(A.fl.Af));this.O3.A0(A.aaL(A.fl.Ak));this.O3.Cr(A.aaL(A.fl.Bh
));this.AcH.S(A.aaL(A.fl.Af));this.Hl.S(A.aaL(A.fl.Kt));this.Hl.A0(A.aaL(A.fl.HL
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jl)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.O3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abq)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Xa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hl).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.Ab0={
ScreenType:0,Ns:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nv:
function(G){A._GetAutoObject(C.A7).Cb(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.Ab0;},_className:"Application::MenuItemScreen"
};C.Ui={Ad$:null,Mu:null,AmH:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmH){this.Mu.Cw(1);this.Mu.L(A.jb.Ib);}else{this.Mu.Cw(0);
if(this.KM)this.Mu.L(A.jb.Bm);else if(this.Hn)this.Mu.L(A.jb.Text);else this.Mu.
L(A.jb.Bm);}},H1:function(G){var F,Cu;if(!!this.Ad$){(Cu=this.Ad$,Cu[2].call(Cu[
0],!(F=this.Ad$,F[1].call(F[0]))));this.AFi((F=this.Ad$,F[1].call(F[0])));A.pe([
this,this.DK],this);}},A3H:function(G){this.KM=true;this.DK(this);},AFi:function(
E){if(this.AmH===E)return;this.AmH=E;this.DK(this);this.Am();},A39:function(G){var
F;this.AFi((F=this.Ad$,F[1].call(F[0])));},A0$:function(s){this.A39(s);},DK:function(
G){var F;if(!this.N||!this.KM)return;if(this.AmH){(F=this.N,F[1].call(F[0])).CS(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GX.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CS(A.aaR(A.acf.A8F));(F=this.N,F[1].call(F[0])).GX.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ATj:function(E){if(A.aaZ(this.Ad$,E))
return;if(!!this.Ad$)A.z$([this,this.A0$],this.Ad$,0);this.Ad$=E;if(!!E)A.zX([this
,this.A0$],E,0);if(!!E)A.pe([this,this.A0$],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mu={I:this},0);this.__proto__=C.Ui;this.
V.L(A.jb.Ib);this.Mu.H(AH9);this.Mu.Cw(0);this.J(this.Mu,0);this.Mu.Ax(A.aaL(A.ach.
AqW));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mu._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mu._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Ad$)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANW={H_:null,IT:null,_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.SX._Init.call(this.H_={I:this},0);C.AGX._Init.call(this.
IT={I:this},0);this.__proto__=C.ANW;var B;this.Jf(A.aaR(A.acf.ACN));this.H_.H(Ah3
);this.H_.Aj(true);this.H_.T(A.aaR(A.acf.Date));this.H_.Bi(true);this.IT.H(U7);this.
IT.Aj(true);this.IT.T(A.aaR(A.acf.Bs));this.J(this.H_,-1);this.J(this.IT,-1);this.
H_.Ab7([B=this.H_,B.FW]);this.H_.Gt([this,this.D_,this.GT]);this.H_.AkA(A.aaL(A.
ach.Edit));this.H_.Acb([B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]);this.IT.
Ab7([B=this.IT,B.FW]);this.IT.Gt([this,this.D_,this.GT]);this.IT.AkA(A.aaL(A.ach.
Edit));this.IT.Acb([B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]);},_Done:function(
){this.__proto__=C.Cg;this.H_._Done();this.IT._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.H_._ReInit();this.IT._ReInit();this.Jf(A.
aaR(A.acf.ACN));this.H_.T(A.aaR(A.acf.Date));this.IT.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cg._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVy={Rh:null,FM:null,B0:null,OQ:null,YS:null,Aba:null,_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.Rh._Init.call(this.Rh={I:this},0);C.AMQ._Init.call(this.
FM={I:this},0);C.AU8._Init.call(this.B0={I:this},0);C.AU_._Init.call(this.OQ={I:
this},0);C.Afq._Init.call(this.YS={I:this},0);C.Aba._Init.call(this.Aba={I:this}
,0);this.__proto__=C.AVy;var B;this.Jf(A.aaR(A.acf.Temperature));this.FM.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.B0.H(AXH);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.
Ary));this.B0.Bi(false);this.OQ.H(Aao);this.OQ.Aj(true);this.OQ.T(A.aaR(A.acf.Undertemperature
));this.OQ.Bi(true);this.OQ.Bx(3800);this.OQ.Gb(3000);this.OQ.EV(5000);this.OQ.A$d(
A.aaR(A.acf.AG_));this.YS.H(AXI);this.YS.Aj(true);this.YS.Z(true);this.YS.T(A.aaR(
A.acf.A5E));this.J(this.B0,0);this.J(this.OQ,0);this.J(this.YS,0);this.B0.Ab7([B=
this.B0,B.FW]);this.B0.Gt([this,this.D_,this.GT]);this.B0.AkA(A.aaL(A.ach.Edit));
this.B0.L5([B=this.B0,B.Ay9]);this.B0.L8(A.aaL(A.ach.AnV));this.B0.Au([B=this.FM
,B.B$,B.Cc]);this.B0.CL(this.FM);this.B0.A_R([B=this.FM,B.ATb,B.A0Y]);this.B0.A_Q([
B=this.FM,B.ATa,B.A0X]);this.OQ.L5([B=this.B0,B.Ay9]);this.OQ.L8(A.aaL(A.ach.AnV
));this.OQ.Au([B=A._GetAutoObject(A.Device.Device),B.A9M,B.BbZ]);this.YS.CL(this.
Aba);this.YS.AkD([B=A._GetAutoObject(A.Device.Device),B.A87,B.BbI]);},_Done:function(
){this.__proto__=C.Cg;this.Rh._Done();this.FM._Done();this.B0._Done();this.OQ._Done(
);this.YS._Done();this.Aba._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.Rh._ReInit();this.FM._ReInit();this.B0._ReInit();this.
OQ._ReInit();this.YS._ReInit();this.Aba._ReInit();this.Jf(A.aaR(A.acf.Temperature
));this.B0.T(A.aaR(A.acf.Ary));this.OQ.T(A.aaR(A.acf.Undertemperature));this.OQ.
A$d(A.aaR(A.acf.AG_));this.YS.T(A.aaR(A.acf.A5E));},_Mark:function(D){var B;C.Cg.
_Mark.call(this,D);if((B=this.Rh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AN9={PO:null,PP:null,Sz:null,Wc:null,SB:null,SA:null,Ge:null,Acw:null,Init:function(
aArg){A.zX([this,this.BpP],this.PP.Q,0);},BpP:function(G){var F;A._GetAutoObject(
A.Device.Device).Axc((F=this.PP.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.Iv._Init.call(this.PO={I:this},0);C.BX._Init.call(this.PP={
I:this},0);C.Afq._Init.call(this.Sz={I:this},0);C.Iv._Init.call(this.Wc={I:this}
,0);C.Afq._Init.call(this.SB={I:this},0);C.Afq._Init.call(this.SA={I:this},0);C.
Ge._Init.call(this.Ge={I:this},0);C.Acw._Init.call(this.Acw={I:this},0);this.__proto__=
C.AN9;var B;this.N.H(U6);this.Jf(A.aaR(A.acf.Device));this.PO.H(Ah3);this.PO.Aj(
true);this.PO.T(A.aaR(A.acf.A$1));this.PO.Bi(false);this.PO.Gb(2);this.PO.EV(60);
this.PO.IW(A.aaR(A.acf.AHo));this.PO.Jg(A.aaR(A.acf.AHo));this.PP.H(AXJ);this.PP.
Aj(true);this.PP.T(A.aaR(A.acf.A$8));this.PP.Bi(true);this.PP.Bx(0);this.PP.Gb(-
1);this.PP.EV(1);this.Sz.H(Aao);this.Sz.Aj(true);this.Sz.T(A.aaR(A.acf.HH));this.
Sz.Bi(false);this.Sz.Bx(0);this.Sz.Gb(-1);this.Sz.EV(1);this.Wc.H(Alk);this.Wc.Aj(
true);this.Wc.T(A.aaR(A.acf.A52));this.Wc.Bi(true);this.Wc.IW(AfJ);this.Wc.Jg(AfJ
);this.SB.H(Ah4);this.SB.Aj(true);this.SB.T(A.aaR(A.acf.AsZ));this.SB.Bi(false);
this.SB.Bx(1);this.SB.Gb(-1);this.SB.EV(1);this.SA.H(Aot);this.SA.Aj(true);this.
SA.T(A.aaR(A.acf.AsC));this.SA.Bi(true);this.SA.Bx(0);this.SA.Gb(-1);this.SA.EV(
1);this.Acw.Au(A._GetAutoObject(A.Device.Device).AxQ);this.J(this.PO,0);this.J(this.
PP,0);this.J(this.Sz,0);this.J(this.Wc,0);this.J(this.SB,0);this.J(this.SA,0);this.
PO.Au([B=A._GetAutoObject(A.Device.Device),B.A9E,B.BbV]);this.PP.Au([B=this.Acw,
B.B$,B.Cc]);this.PP.CL(this.Acw);this.Sz.CL(this.Ge);this.Sz.AkD([B=A._GetAutoObject(
A.Device.Device),B.AET,B.AI3]);this.Wc.Au([B=A._GetAutoObject(A.Device.Device),B.
A83,B.BbF]);this.SB.CL(this.Ge);this.SB.AkD([B=A._GetAutoObject(A.Device.Device)
,B.A9N,B.Bb0]);this.SA.CL(this.Ge);this.SA.AkD([B=A._GetAutoObject(A.Device.Device
),B.ASV,B.A0K]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.PO._Done(
);this.PP._Done();this.Sz._Done();this.Wc._Done();this.SB._Done();this.SA._Done(
);this.Ge._Done();this.Acw._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.PO._ReInit();this.PP._ReInit();this.Sz._ReInit();this.
Wc._ReInit();this.SB._ReInit();this.SA._ReInit();this.Ge._ReInit();this.Acw._ReInit(
);this.Jf(A.aaR(A.acf.Device));this.PO.T(A.aaR(A.acf.A$1));this.PO.IW(A.aaR(A.acf.
AHo));this.PO.Jg(A.aaR(A.acf.AHo));this.PP.T(A.aaR(A.acf.A$8));this.Sz.T(A.aaR(A.
acf.HH));this.Wc.T(A.aaR(A.acf.A52));this.SB.T(A.aaR(A.acf.AsZ));this.SA.T(A.aaR(
A.acf.AsC));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.PO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acw)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUL={Wf:null,We:
null,QR:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bi6
],this.QR.Q,0);},Bi6:function(G){var F;A._GetAutoObject(A.Device.Device).Akx((F=
this.QR.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
Np._Init.call(this.Wf={I:this},0);C.Np._Init.call(this.We={I:this},0);C.AU4._Init.
call(this.QR={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUL;var B;this.Jf(A.aaR(A.acf.Asv));this.Wf.H(I1);this.
Wf.Aj(true);this.Wf.T(A.aaR(A.acf.AjH));this.Wf.Bi(false);this.Wf.Ns(87);this.We.
H(Ayx);this.We.Aj(true);this.We.T(A.aaR(A.acf.Aqs));this.We.Bi(true);this.We.Ns(
88);this.QR.H(U7);this.QR.Aj(true);this.QR.T(A.aaR(A.acf.A5J));this.QR.Bi(false);
this.QR.Gb(-1);this.QR.EV(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.Wf,0);this.J(this.We,0);this.J(this.
QR,0);this.Wf.AR=[B=this.Wf,B.Nv];this.We.AR=[B=this.We,B.Nv];this.QR.Au([B=this.
EartagNrAssignmentMode,B.B$,B.Cc]);this.QR.CL(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.Wf._Done();this.We._Done(
);this.QR._Done();this.EartagNrAssignmentMode._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wf._ReInit();this.We._ReInit();this.QR._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Jf(A.aaR(A.acf.Asv));this.Wf.T(A.aaR(
A.acf.AjH));this.We.T(A.aaR(A.acf.Aqs));this.QR.T(A.aaR(A.acf.A5J));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.We)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.Xa={Q:null,TransponderProtocolToString:
null,Apv:null,Background:null,Y:null,St:null,GN:null,PU:null,OS:null,Px:null,C9:
null,EN:null,SS:null,N_:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Hh],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Hh],E,0);if(!!E)A.pe([this,this.Hh],this);},Hh:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GN.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BN=(F=this.Q,F[1].call(F[0])).BjC();if(BN<900){var Kc=A._GetAutoObject(
A.Device.Converter).ANN(BN);if(!!Kc)this.C9.R(((this.CountryToString.LA(Kc)+AcR)+
BN.toFixed())+Pd);else this.C9.R(BN.toFixed());if(Kc===10){var AKr=this.A7y((F=this.
Q,F[1].call(F[0])).Id);this.C9.R(this.C9.String+((((AXK+this.Apv.Bqy(AKr))+AcR)+
A.abl(this.Apv.Bqx(AKr),2,10))+Pd));}this.C9.Z(true);this.Px.Z(true);this.OS.Z(false
);this.PU.Z(false);}else{this.OS.R(((A._GetAutoObject(A.Device.Converter).Bil(BN
)+AcR)+BN.toFixed())+Pd);this.OS.Z(true);this.PU.Z(true);this.C9.Z(false);this.Px.
Z(false);}if(BN===276){this.EN.R(this.Apv.BT(this.A7y((F=this.Q,F[1].call(F[0])).
Id)));this.EN.Z(true);}else this.EN.Z(false);this.N_.R(this.TransponderProtocolToString.
BT((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GN.R(A.jV);this.OS.
R(A.jV);this.EN.R(A.jV);this.C9.R(A.jV);this.N_.R(A.jV);}},A7y:function(Ka){var QC=
0;var Kc=A._GetAutoObject(A.Device.Converter).S8(Ka);switch(Kc){case 10:{var Gj=
A._GetAutoObject(A.Device.Converter).AVP(Ka);QC=A._GetAutoObject(A.Device.Converter
).ADb(Gj);}break;default:;}return QC;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apv={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.St={I:this},0);C.CG._Init.call(this.GN={I:this},0);C.CG._Init.
call(this.PU={I:this},0);C.CG._Init.call(this.OS={I:this},0);C.CG._Init.call(this.
Px={I:this},0);C.CG._Init.call(this.C9={I:this},0);C.CG._Init.call(this.EN={I:this
},0);C.CG._Init.call(this.SS={I:this},0);C.CG._Init.call(this.N_={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.Xa;
this.H(AcS);this.Background.A1(0x3F);this.Background.H(AcS);this.Background.L(A.
jb.CU);this.Y.A1(0x3F);this.Y.H(AcS);this.Y.JZ(9);this.St.H(AH_);this.St.Aj(true
);this.St.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.St.A6(0x11);this.St.L(A.jb.
Text);this.GN.H(AH$);this.GN.Aj(true);this.GN.R(AXL);this.GN.A6(0x14);this.GN.L(
A.jb.Text);this.PU.H(Ayy);this.PU.Aj(true);this.PU.R(A.aaR(A.acf.A$u)+A.aaR(A.acf.
Colon));this.PU.A6(0x11);this.PU.L(A.jb.Text);this.OS.H(AIa);this.OS.Aj(true);this.
OS.R(AXM);this.OS.A6(0x14);this.OS.L(A.jb.Text);this.Px.H(Ayy);this.Px.Aj(true);
this.Px.R(A.aaR(A.acf.C9)+A.aaR(A.acf.Colon));this.Px.A6(0x11);this.Px.L(A.jb.Text
);this.C9.H(AIa);this.C9.Aj(true);this.C9.R(AXN);this.C9.A6(0x14);this.C9.L(A.jb.
Text);this.EN.H(AXO);this.EN.Aj(true);this.EN.R(AXP);this.EN.A6(0x14);this.EN.L(
A.jb.Text);this.SS.H(AXQ);this.SS.Aj(true);this.SS.R(A.aaR(A.acf.N_)+A.aaR(A.acf.
Colon));this.SS.A6(0x11);this.SS.L(A.jb.Text);this.N_.H(AXR);this.N_.Aj(true);this.
N_.R(AXS);this.N_.A6(0x14);this.N_.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.St,0);this.J(this.GN,0);this.J(this.PU,0);this.J(this.OS,0
);this.J(this.Px,0);this.J(this.C9,0);this.J(this.EN,0);this.J(this.SS,0);this.J(
this.N_,0);this.St.S(A.aaL(A.fl.Ak));this.St.A0(A.aaL(A.fl.Bh));this.GN.S(A.aaL(
A.fl.Ak));this.GN.A0(A.aaL(A.fl.Bh));this.PU.S(A.aaL(A.fl.Ak));this.PU.A0(A.aaL(
A.fl.Bh));this.OS.S(A.aaL(A.fl.Ak));this.OS.A0(A.aaL(A.fl.Bh));this.Px.S(A.aaL(A.
fl.Ak));this.Px.A0(A.aaL(A.fl.Bh));this.C9.S(A.aaL(A.fl.Ak));this.C9.A0(A.aaL(A.
fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.A0(A.aaL(A.fl.Bh));this.SS.S(A.aaL(A.fl.
Ak));this.SS.A0(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Ak));this.N_.A0(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apv._Done();this.Background._Done();this.Y._Done();this.St._Done();
this.GN._Done();this.PU._Done();this.OS._Done();this.Px._Done();this.C9._Done();
this.EN._Done();this.SS._Done();this.N_._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apv._ReInit();this.Background._ReInit();this.Y._ReInit();this.St.
_ReInit();this.GN._ReInit();this.PU._ReInit();this.OS._ReInit();this.Px._ReInit(
);this.C9._ReInit();this.EN._ReInit();this.SS._ReInit();this.N_._ReInit();this.CountryToString.
_ReInit();this.St.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.PU.R(A.aaR(A.acf.A$u
)+A.aaR(A.acf.Colon));this.Px.R(A.aaR(A.acf.C9)+A.aaR(A.acf.Colon));this.SS.R(A.
aaR(A.acf.N_)+A.aaR(A.acf.Colon));this.St.S(A.aaL(A.fl.Ak));this.St.A0(A.aaL(A.fl.
Bh));this.GN.S(A.aaL(A.fl.Ak));this.GN.A0(A.aaL(A.fl.Bh));this.PU.S(A.aaL(A.fl.Ak
));this.PU.A0(A.aaL(A.fl.Bh));this.OS.S(A.aaL(A.fl.Ak));this.OS.A0(A.aaL(A.fl.Bh
));this.Px.S(A.aaL(A.fl.Ak));this.Px.A0(A.aaL(A.fl.Bh));this.C9.S(A.aaL(A.fl.Ak)
);this.C9.A0(A.aaL(A.fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.A0(A.aaL(A.fl.Bh)
);this.SS.S(A.aaL(A.fl.Ak));this.SS.A0(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Ak));
this.N_.A0(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QZ={D2:null,A$J:A.jV,Ai:function(Ae){C.Fn.Ai.call(
this,Ae);if(this.Mz.Fp())this.D2.CV(A.jb.AV);else this.D2.CV(this.Background.AQ);
this.D2.Zz(this.G$.AQ);},ZE:function(E){if(this.A$J===E)return;this.A$J=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fn._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QZ;this.Background.H(AXT);this.
Mz.H(Xf);this.OL.H(AIb);this.Q5.H(AIb);this.D2.H(AXU);this.D2.Z(false);this.J(this.
D2,0);this.G$.S(A.aaL(A.fl.Af));this.G$.A0(A.aaL(A.fl.Ak));this.G$.Cr(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fn;this.D2._Done();C.Fn._Done.call(this
);},_ReInit:function(){C.Fn._ReInit.call(this);this.D2._ReInit();this.G$.S(A.aaL(
A.fl.Af));this.G$.A0(A.aaL(A.fl.Ak));this.G$.Cr(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fn._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B7:null,AeH:null,Ap:null,Text:null
,DL:A.jV,AmU:0,M$:0,Jh:0,A55:0x14,Init:function(aArg){},T:function(E){if(this.DL===
E)return;this.DL=E;this.Text.R(E);},BC5:function(G){this.Ap.H(this.Text.M);this.
AeH.H(this.Text.M);},Zz:function(E){if(this.AmU===E)return;this.AmU=E;this.AeH.L(
E);this.Text.L(E);},CV:function(E){if(this.M$===E)return;this.M$=E;this.Ap.L(E);
},S:function(E){if(this.B7===E)return;this.B7=E;this.Text.S(E);},Hp:function(E){
if(this.Jh===E)return;this.Jh=E;this.Text.Hp(E);},Bmx:function(E){if(this.A55===
E)return;this.A55=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NY._Init.call(this.AeH={I:this},0);A.acg.NY._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AIc);
this.AeH.A1(0x8);this.AeH.L(A.jb.Text);this.Ap.A1(0x8);this.Ap.L(A.jb.CU);this.Text.
A1(0xD);this.Text.H(AIc);this.Text.Hp(5);this.Text.Je(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeH,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeH.Ax(A.aaL(A.ach.AP9));this.Ap.Ax(A.aaL(A.ach.AP8));this.Text.Q9([this,this.BC5
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeH._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeH._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.Ue={DY:null,Y:null,Ay:null,DF:function(G){var B;C.AB.DF.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},CD:function(
G){C.AB.CD.call(this,G);this.ALz(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkR();A._GetAutoObject(A.Device.Helper).Asz();},Il:function(G){},AcW:function(
s){this.Il(s);},A3Y:function(G){A._GetAutoObject(C.A7).FB();},Fj:function(G){var
B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.
MH(-this.Y.Br[1]);},ALz:function(G){},BHc:function(s){this.ALz(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.Ue;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Dr(C.Aq8);this.
DY.A1(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CK);this.Y.H(Fe);this.Y.JZ(9);this.Ay.H(
Ix);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CF=[this,this.A3Y
];this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fj];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AV9={WK:function(
G){this.Agz();this.I8(A.aaR(A.acf.AVF),[this,this.AT5],7);this.I8(A.aaR(A.acf.Bo9
),[this,this.BmA],6);this.I8(A.aaR(A.acf.AGx),[this,this.ATR],3);this.I8(A.aaR(A.
acf.An5),[this,this.Aw2],2);this.I8(A.aaR(A.acf.AdW),[this,this.AFa],1);this.I8(
A.aaR(A.acf.AuL),[this,this.AE6],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mp(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DF:function(G){},AbA:function(){return C.ANo;},AbB:function(){return C.APP;
},Ra:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MB();var ABO=A._NewObject(
A.Device.BoolFilterCriterion,0);ABO.Initialize(12,0,true,true);Bf.CX(ABO);A._GetAutoObject(
A.Device.Device).An.Bk(Bf);},HS:function(G){var F;C.GJ.HS.call(this,G);if(this.Aki(
)===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajs((F=this.Fm,F[1].call(
F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false
);},Agl:function(){A._GetAutoObject(C.A7).Cb(41);},_Init:function(aArg){C.GJ._Init.
call(this,aArg);this.__proto__=C.AV9;var B;this.Dr(C.APL);this.Dl(A.aaR(A.acf.A8s
));this.AwX([B=A._GetAutoObject(A.Device.Device),B.A9R,B.Bb1]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.A8s));},_className:"Application::WatchListScreen"
};C.AMv={DF:function(G){var B;var JH=(A.Core.BF.isPrototypeOf(G)?G:null);if(((JH.
CP===4)||(JH.CP===5))===false){C.Ax_.DF.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var Bdt=A._GetAutoObject(A.Device.Device
).K2;var Tr;if(JH.CP===5)Tr=5;else Tr=4;var ABs=A._GetAutoObject(A.acj.DU).Bd3(Bdt
,Tr);var FK=(((Bdt+((ABs/2)|0))/ABs)|0)*ABs;if(JH.CP===4)FK+=ABs;else if(JH.CP===
5)FK-=ABs;if(FK>999900)FK=999900;if(FK<100)FK=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(FK);},AsN:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O_,B.CF],this);else A._GetAutoObject(C.A7).FB();
},W2:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsP();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$Z()===false){this.Ia.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).K2
);this.Ia.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A7).FB();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.Ia.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).K2);this.Ia.Ci(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A7).FB();}},AkY:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O_,B.Ca],this);},Bd2:function(){var
ALN=A._GetAutoObject(A.Device.Helper).W.AhW(1);if(ALN>=100000)ALN=(Math.round(ALN
/1000)|0)*1000;return ALN;},_Init:function(aArg){C.Ax_._Init.call(this,aArg);this.
__proto__=C.AMv;},_className:"Application::AnimalActionWeighingScreen"};C.AVT={Wj:
null,YU:null,Rh:null,AeS:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
BX._Init.call(this.Wj={I:this},0);C.BX._Init.call(this.YU={I:this},0);C.Rh._Init.
call(this.Rh={I:this},0);C.AeS._Init.call(this.AeS={I:this},0);this.__proto__=C.
AVT;var B;this.Jf(A.aaR(A.acf.AHp));this.Wj.H(Ah3);this.Wj.Aj(true);this.Wj.T(A.
aaR(A.acf.Baq));this.Wj.Bi(true);this.Wj.Bx(0);this.YU.H(U7);this.YU.Aj(true);this.
YU.T(A.aaR(A.acf.Bap));this.YU.Bi(false);this.J(this.Wj,0);this.J(this.YU,0);this.
Wj.Au([B=this.Rh,B.B$,B.Cc]);this.Wj.CL(this.Rh);this.YU.Au([B=this.AeS,B.B$,B.Cc
]);this.YU.CL(this.AeS);},_Done:function(){this.__proto__=C.Cg;this.Wj._Done();this.
YU._Done();this.Rh._Done();this.AeS._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.Wj._ReInit();this.YU._ReInit();this.Rh._ReInit();
this.AeS._ReInit();this.Jf(A.aaR(A.acf.AHp));this.Wj.T(A.aaR(A.acf.Baq));this.YU.
T(A.aaR(A.acf.Bap));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.
Wj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeS)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeS={MassUnitToString:null
,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwY(E);}
,Init:function(aArg){var B;A.zX([this,this.BeG],[B=A._GetAutoObject(A.Device.Device
),B.ASU,B.A0J],0);A.pe([this,this.BeG],this);},BeG:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeS;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax_={Ia:null,Ajy:null,MassUnit:null,
K2:null,VI:null,AnR:null,AcJ:null,Z7:null,O_:null,YL:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af7());A.zX([this,this.AKP],[B=A._GetAutoObject(
A.Device.Device),B.AEW,B.AI6],0);A.zX([this,this.BBT],[B=A._GetAutoObject(A.Device.
Device),B.AE2,B.AI_],0);A.zX([this,this.BBU],[B=this.O_,B.ArG,B.JD],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.Ax3();this.Z9();},H1:function(G){this.W2(this);},
CD:function(G){C.AB.CD.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsP();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lm())A._GetAutoObject(
A.Device.Device).AY(50,true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),
0,null);this.Ia.Gs();this.Ia.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AG6();else{var BDi=this.Bd2();this.Z7.Z(true);this.AcJ.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BDi);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsP();else A._GetAutoObject(A.Device.Device).AhP(
);},Ax3:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bhr();break;case 3:{this.Bhr();this.Z7.Z(false);this.AcJ.Z(false
);if(this.A$Z()){this.VI.Z(false);this.K2.H(A.abO(this.K2.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O_.As(true);this.O_.Z(true);this.Bb(this.O_);}}break;
case 4:this.K2.R(A.aaR(A.acu.Akl));break;default:A.ab5("%s%e",AId,A._GetAutoObject(
A.Device.Device).MeasureState);}},Z9:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C3(A.aaL(A.ach.AeC));this.N.Ct(null);
this.YL.Z(false);this.N.C4(A.aaL(A.ach.Am7));this.N.CS(A.jV);}break;case 3:{if(this.
O_.AZ<=1){this.N.C3(null);this.N.Ct(null);this.YL.Z(false);this.N.C4(null);}else{
this.N.C3(A.aaL(A.ach.Am6));this.N.Ct(A.aaL(A.ach.AeD));this.YL.Z(true);this.N.C4(
null);}this.N.CS(A.aaR(A.acf.Ok));}break;case 4:{this.N.C4(A.aaL(A.ach.AvT));this.
N.Ca=[this,this.Bmn];this.N.Ct(null);this.YL.Z(false);this.N.CS(A.jV);}break;default:;
}},AsN:function(G){},Bw_:function(s){this.AsN(s);},W2:function(G){},A01:function(
s){this.W2(s);},Bmn:function(G){this.CD(this);},BBT:function(G){this.Am();},AKP:
function(G){this.Am();},A$Z:function(){var AuC=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(AuC>0)&&!A._GetAutoObject(A.Device.Helper).Bqv(AuC
,this.Ia.Timestamp);},AkY:function(G){},A00:function(s){this.AkY(s);},BBU:function(
G){this.Am();},Bhr:function(){this.K2.R(A._GetAutoObject(A.Device.Converter).Ala(
A._GetAutoObject(A.Device.Device).K2));},Bd2:function(){return A._GetAutoObject(
A.Device.Helper).W.AhW(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Ajy={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.K2={I:this},0);A.acg.Text._Init.call(this.VI={I:this
},0);C.Ax2._Init.call(this.AnR={I:this},0);A.acg.Aer._Init.call(this.AcJ={I:this
},0);A.acg.Aer._Init.call(this.Z7={I:this},0);C.AWc._Init.call(this.O_={I:this},
0);A.acg.Ap._Init.call(this.YL={I:this},0);this.__proto__=C.Ax_;this.Background.
L(A.jb.CK);this.N.Z(true);this.Dr(C.IP);this.Ajy.A1(0x3F);this.Ajy.H(Ayz);this.Ajy.
L(A.jb.CK);this.MassUnit.H(AXV);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
AAn));this.MassUnit.L(A.jb.Text);this.K2.H(AXW);this.K2.A6(0x14);this.K2.R(A.aaR(
A.acu.Akl));this.K2.L(A.jb.Text);this.VI.H(AXX);this.VI.R(A.aaR(A.acf.BaB));this.
VI.L(A.jb.Text);this.VI.Z(true);this.AnR.H(AXY);this.AcJ.H(AXZ);this.AcJ.L(A.jb.
Aec);this.AcJ.Z(false);this.Z7.H(AX0);this.Z7.L(A.jb.Aec);this.Z7.Bna(true);this.
Z7.Z(false);this.O_.A1(0x3F);this.O_.H(Ayz);this.O_.As(false);this.O_.Z(false);this.
YL.H(AX1);this.YL.L(A.jb.Bm);this.J(this.Ajy,0);this.J(this.MassUnit,0);this.J(this.
K2,0);this.J(this.VI,0);this.J(this.AcJ,0);this.J(this.Z7,0);this.J(this.O_,0);this.
J(this.YL,0);this.N.CF=[this,this.Bw_];this.N.Ce=[this,this.A00];this.N.Ca=[this
,this.A01];this.MassUnit.S(A.aaL(A.fl.EK));this.K2.S(A.aaL(A.fl.Aev));this.VI.S(
A.aaL(A.fl.EK));this.AcJ.ZD(this.AnR);this.Z7.ZD(this.AnR);this.Ia=A._NewObject(
A.Device.Rating,0);this.O_.L6(A._GetAutoObject(A.Device.Helper).W);this.O_.AkE(this.
Ia);this.YL.Ax(A.aaL(A.ach.AQ5));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajy._Done();this.MassUnit._Done();this.K2._Done();this.VI._Done();this.
AnR._Done();this.AcJ._Done();this.Z7._Done();this.O_._Done();this.YL._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajy._ReInit();
this.MassUnit._ReInit();this.K2._ReInit();this.VI._ReInit();this.AnR._ReInit();this.
AcJ._ReInit();this.Z7._ReInit();this.O_._ReInit();this.YL._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAn));this.K2.R(A.aaR(A.acu.Akl));this.VI.R(A.aaR(A.acf.BaB));this.
MassUnit.S(A.aaL(A.fl.EK));this.K2.S(A.aaL(A.fl.Aev));this.VI.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AWg={FM:null
,OT:null,Nl:null,C$:null,L2:null,Ub:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FM,B.B$,B.Cc],0);A.pe([this,this.GH],this);},CD:function(G){C.Cg.CD.
call(this,G);A.pe([this,this.GH],this);},Bk9:function(G){var F;this.L2.BU.L(this.
L2.V.AQ);if(!!this.L2.Q)this.L2.BU.R((A._GetAutoObject(A.Device.Converter).Td((F=
this.L2.Q,F[1].call(F[0])),2,true)+CR)+A._GetAutoObject(A.acj.DU).AaE());},GH:function(
G){var AJK=true;if(this.FM.Q===1)AJK=false;this.C$.Aj(AJK);this.C$.As(AJK);this.
C$.Z(AJK);A._GetAutoObject(A.Device.Helper).ANH(this.Y);},_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.AMR._Init.call(this.FM={I:this},0);C.AHA._Init.call(this.
OT={I:this},0);C.AU9._Init.call(this.Nl={I:this},0);C.AkW._Init.call(this.C$={I:
this},0);C.Iv._Init.call(this.L2={I:this},0);C.BX._Init.call(this.Ub={I:this},0);
this.__proto__=C.AWg;var B;this.Jf(A.aaR(A.acf.Settings));this.Hl.R(A.aaR(A.acf.
As2));this.FM.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.OT.Au(A._GetAutoObject(
A.Device.Device).OT);this.Nl.H(AX2);this.Nl.Aj(true);this.C$.H(Aou);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.KP));this.C$.Bi(true);this.C$.Gb(1000);this.C$.EV(99000);
this.L2.H(Atg);this.L2.Aj(true);this.L2.T(A.aaR(A.acf.A5N));this.L2.Gb(50);this.
L2.EV(2000);this.L2.ATx(A._GetAutoObject(A.acj.DU).Az6());this.Ub.H(Ah4);this.Ub.
Aj(true);this.Ub.T(A.aaR(A.acf.A8a));this.Ub.Gb(-1);this.Ub.EV(1);this.J5(this.Y
,-1);this.J5(this.Ay,-1);this.J(this.Nl,0);this.J(this.C$,0);this.J(this.L2,0);this.
J(this.Ub,0);this.Nl.Ab7([B=this.Nl,B.FW]);this.Nl.Gt([this,this.D_,this.GT]);this.
Nl.AkA(A.aaL(A.ach.Edit));this.Nl.L5([B=this.Nl,B.Ay9]);this.Nl.L8(A.aaL(A.ach.AnV
));this.Nl.Au([B=this.FM,B.B$,B.Cc]);this.Nl.CL(this.FM);this.Nl.A_R([B=this.FM,
B.ATb,B.A0Y]);this.Nl.A_Q([B=this.FM,B.ATa,B.A0X]);this.C$.Gt([this,this.D_,this.
GT]);this.C$.L5([B=this.Nl,B.Ay9]);this.C$.L8(A.aaL(A.ach.AnV));this.C$.Au([B=this.
FM,B.A81,B.ATi]);this.L2.Gt([this,this.D_,this.GT]);this.L2.L5([B=this.Nl,B.Ay9]
);this.L2.L8(A.aaL(A.ach.AnV));this.L2.Au([B=this.FM,B.A8Z,B.ATg]);this.L2.A_4([
this,this.Bk9]);this.Ub.Gt([this,this.D_,this.GT]);this.Ub.Au([B=this.OT,B.B$,B.
Cc]);this.Ub.CL(this.OT);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;
this.FM._Done();this.OT._Done();this.Nl._Done();this.C$._Done();this.L2._Done();
this.Ub._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.FM._ReInit();this.OT._ReInit();this.Nl._ReInit();this.C$._ReInit();this.L2.
_ReInit();this.Ub._ReInit();this.Jf(A.aaR(A.acf.Settings));this.Hl.R(A.aaR(A.acf.
As2));this.C$.T(A.aaR(A.acf.KP));this.L2.T(A.aaR(A.acf.A5N));this.Ub.T(A.aaR(A.acf.
A8a));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FM)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.L2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ub)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AU9={Y6:null,Init:
function(aArg){var B;A.zX([this,this.AfK],[B=A._GetAutoObject(A.Device.Device),B.
ASU,B.A0J],0);A.pe([this,this.AfK],this);},A4q:function(G){A._GetAutoObject(A.Device.
Device).AY(37,true,A.jV,0,[this,this.Bce]);},A2e:function(G){var F;if(this.A_===
1){var BP=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).Az6();if(this.D7<this.
AlX)this.D7=this.AlX;if(this.DW!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.
D7));A.abo(this.J3,0);}}if(this.A_===2){var BP=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).Az6();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BP){if(!!this.J2
)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);}}this.DK(this);this.Am();
},A2Q:function(G){var F;if(this.A_===1){var BP=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).Az6();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP){if(!!this.J3
)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.A_===2){var BP=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).Az6();if(this.DW>this.AlS)this.DW=
this.AlS;if(this.DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(
this.J2,0);}}this.DK(this);this.Am();},GH:function(G){this.PR.R(AIe+A._GetAutoObject(
A.Device.Converter).Td(this.D7,2,true));this.PQ.R(AIe+A._GetAutoObject(A.Device.
Converter).Td(this.DW,2,true));this.SE.R(A._GetAutoObject(A.acj.DU).AaE());this.
Y6.R(this.SE.String);},A31:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).AsB(this
);},A2J:function(AtA){if(AtA===1)return this.PR;else if(AtA===2)return this.PQ;else
return null;},_Init:function(aArg){C.Acu._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y6={I:this},0);this.__proto__=C.AU9;this.T(A.aaR(A.acf.ACI));this.AlS=
2000;this.AlX=20;this.Background.H(K4);this.V.H(BD);this.V.R(A.aaR(A.acf.ACI)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkO.H(AX3);this.AkP.H(AX4);this.Q_.H(AX5);
this.QJ.H(AX6);this.PQ.H(AX7);this.PR.H(AX8);this.SE.H(AIf);this.Y6.H(AX9);this.
Y6.Je(false);this.Y6.A6(0x12);this.Y6.L(0xFF000000);this.J5(this.H9,-8);this.J(this.
Y6,0);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.Y6.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acu;this.Y6._Done();C.Acu.
_Done.call(this);},_ReInit:function(){C.Acu._ReInit.call(this);this.Y6._ReInit();
this.T(A.aaR(A.acf.ACI));this.V.R(A.aaR(A.acf.ACI)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.Y6.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acu._Mark.call(this,D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABT={M:Pa,A7L:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7L();},_Init:function(
aArg){A.Graphics.HA._Init.call(this,aArg);this.__proto__=C.ABT;},_className:"Application::AbstractPath"
};C.Aql={DQ:null,DY:null,Rm:null,AdS:null,P8:null,AdR:null,AuK:1,A5j:0,Bda:false
,Az2:true,CQ:function(){this.Bhn(this);},Init:function(aArg){var B;this.Bb(this.
AdS);A.zX([this,this.Bhn],[B=this.AdS,B.A88,B.BbJ],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdR.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BiG(this.AuK+this.A5j)));if(this.AuK===1)this.P8.R(A.aaR(A.acf.ANv));else this.
P8.R(A.aaR(A.acf.Bie));},CD:function(G){if(this.Az2)this.Az2=false;else if(this.
DQ.Bdk()===false)A.pe([this,this.A3z],this);else if(this.DQ.AAf())this.DQ.Ac_();
A.zV([this,this.Agc],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.Agc],A._GetAutoObject(A.Device.Device).An,0);},A3z:function(G){this.
Bda=true;A._GetAutoObject(C.A7).FB();},Bhn:function(G){var B;var BdM=(C.Wv.isPrototypeOf(
B=this.AdS.AV)?B:null);if(!!BdM){var Azn=A._NewObject(A.Device.ActionToString,0);
this.Rm.R(Azn.LA(BdM.Action));}},Il:function(G){var Cy=(C.Wv.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DQ.Qs(Cy.Action);this.Bmq(this.AuK+1);},BBl:function(G){
if(A._GetAutoObject(C.Pr).N3(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bmq:function(E){
if(this.AuK===E)return;this.AuK=E;this.Am();},Agc:function(G){if((this.Bda===false
)&&(this.DQ.Bdk()===false))A.pe([this,this.A3z],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);C.CG._Init.call(this.
Rm={I:this},0);C.AR0._Init.call(this.AdS={I:this},0);C.CG._Init.call(this.P8={I:
this},0);A.acg.Text._Init.call(this.AdR={I:this},0);this.__proto__=C.Aql;this.Background.
L(A.jb.CU);this.N.H(U6);this.N.Z(true);this.Dr(C.IP);this.DY.A1(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CK);this.Rm.H(AX_);this.Rm.L(A.jb.Text);this.AdS.H(AX$);this.
P8.H(AYa);this.P8.R(A.aaR(A.acf.ANv));this.P8.L(A.jb.Text);this.AdR.H(AYb);this.
AdR.R(AYc);this.AdR.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rm,0);this.J(this.
AdS,0);this.J(this.P8,0);this.J(this.AdR,0);this.N.CF=[this,this.A3z];this.N.Ce=[
this,this.BBl];this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeF));this.Rm.S(
A.aaL(A.fl.EK));this.Rm.A0(A.aaL(A.fl.Af));this.Rm.Cr(A.aaL(A.fl.Ak));this.AdS.A3Z=[
this,this.Il];this.P8.S(A.aaL(A.fl.EK));this.P8.A0(A.aaL(A.fl.Af));this.P8.Cr(A.
aaL(A.fl.Ak));this.AdR.S(A.aaL(A.fl.H6));this.DQ=A._GetAutoObject(C.DQ);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rm._Done();this.
AdS._Done();this.P8._Done();this.AdR._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rm._ReInit();this.AdS._ReInit();
this.P8._ReInit();this.AdR._ReInit();this.P8.R(A.aaR(A.acf.ANv));this.Rm.S(A.aaL(
A.fl.EK));this.Rm.A0(A.aaL(A.fl.Af));this.Rm.Cr(A.aaL(A.fl.Ak));this.P8.S(A.aaL(
A.fl.EK));this.P8.A0(A.aaL(A.fl.Af));this.P8.Cr(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.AR0={Ig:null,A3Z:null,Cq:null,Y:null,Ay:
null,A4F:0,Init:function(aArg){A.zV([this,this.ABI],this.Ig,0);A.zV([this,this.Bhk
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AuH],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABI],this);},Bb:function(E){var A3v=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A3v)A.abo([this,this.A88,this.BbJ],0);},DF:
function(G){var B;var Fh=0;var X=this.AV;switch(this.Cq.CP){case 6:Fh=2;break;case
7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(X,Fh,0x415);
if((Fh===5)&&!X){var ALp=this.AV;while(!X){ALp=this.QL(ALp,2,0x415);if(!!ALp)X=this.
QL(ALp,Fh,0x415);else break;}}if(!!X)this.Bb(X);var G0=(C.Wv.isPrototypeOf(B=this.
AV)?B:null);if(!!G0)this.A4F=(C.Wv.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4F=0;A.pe([this,this.MZ],this);},A19:function(Eh){var EQ=A._GetAutoObject(C.DQ).
Bds(Eh,this.A3Z);this.J(EQ,0);},Ao8:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdN=X;X=X.Ah;if(((AdN.U&0x400)===0x400))this.HR(AdN);
}},ABI:function(G){this.Ao8();var O;var CB=A._GetAutoObject(C.Pr).Ng();for(O=0;O<
CB;O=O+1){var To=A._GetAutoObject(C.Pr).OM(O);this.A19(To);}A.pe([this,this.Bhk]
,this);A.pe([this,this.BqR],this);A.pe([this,this.AuH],this);},BqR:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Wv.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.As(A._GetAutoObject(
A.Device.Helper).W.Id>=0);}X=X.Ah;}},AuH:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wv.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.AT0(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.AT0(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.AT0(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((
B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},Bhk:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wv.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pr).N3(Aa.Action)&&A._GetAutoObject(C.
DQ).A5i(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.As(true);Aa.Z(true);if(
this.A4F===Aa.Action)this.Bb(Aa);}else{Aa.As(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MZ],this);},MZ:function(G){var B;this.Y.VG(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AR0;this.H(AYd);this.Cq.Filter=147;this.Y.A1(0xB);this.Y.H(AYe);this.Y.JZ(9);this.
Ay.A1(0xA);this.Ay.H(AIg);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BG=[this,this.
DF];this.Cq.D1=[this,this.DF];this.Y.Em=[this,this.Fj];this.Ig=A._GetAutoObject(
C.Pr);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ig)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3Z)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fr={Ek:null,AL:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fr;this.N.As(false);this.Ek.H(BD);this.Ek.As(false
);this.AL.H(Fe);this.AL.L(A.jb.Aec);this.Text.H(BD);this.Text.R(AYf);this.Text.L(
0xFF000000);this.Ap.H(Pa);this.Ap.L(A.jb.Text);this.J(this.Ek,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Ct(A.aaL(A.ach.AeF));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADw));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ek._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ek._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.Aa2={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},H1:function(G){},Ai:function(Ae){C.BX.
Ai.call(this,Ae);var FT=A.jb.Aec;var GZ=A.jb.CU;if(this.Hn){FT=A.jb.Text;GZ=A.jb.
Bm;}if(!this.LN){this.Background.L(A.jb.CU);this.V.L(A.jb.CK);}else if(this.Qy){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}this.Hy.L(A.
jb.CU);this.H9.L(A.jb.CU);},Ho:function(G){var B;var Gh=this.DB.G8;var CA=(C.CG.
isPrototypeOf(B=this.DB.Cj)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.A0(A.aaL(
A.fl.Bh));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));else CA.R(Xo);CA.H(A.
abK(CA.M,[this.DB.Wl,(B=this.DB.M)[3]-B[1]]));},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.Aa2;this.DB.AFC(170);this.DB.N8(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajl={C_:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hp(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FT=A.jb.Aec;var GZ=A.jb.CU;if(this.Hn){FT=A.jb.Text;
GZ=A.jb.Bm;}if(!this.LN){this.Background.L(A.jb.CU);this.V.L(A.jb.CK);}else if(this.
Qy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ajl;this.C_.H(AYg);this.C_.Cw(1);this.J(this.C_,0);this.C_.Ax(A.aaL(A.ach.Ajv)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C_._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C_._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AMc={Y:null,RS:null,TC:null
,TD:null,TE:null,AdQ:null,XV:null,VA:null,VB:null,Aa1:null,Ay:null,Init:function(
aArg){this.Bb(this.RS);},DF:function(G){C.Fr.DF.call(this,G);this.MZ(this);},H1:
function(G){this.BgC(this);},Ls:function(){if(!this.BQ){this.BQ=A._NewObject(C.N
,0);this.BQ.CF=[this,this.BgC];this.BQ.Ce=null;this.BQ.Ca=null;this.BQ.CS(A.jV);
this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},ABl:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XV.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XV.Q))A._GetAutoObject(C.AutoActions).J(this.XV.Q);if(!!this.VA.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.VA.Q))A._GetAutoObject(C.AutoActions
).J(this.VA.Q);if(!!this.VB.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.VB.
Q))A._GetAutoObject(C.AutoActions).J(this.VB.Q);if(!!this.Aa1.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.Aa1.Q))A._GetAutoObject(C.AutoActions).J(this.Aa1.Q
);A._GetAutoObject(C.AutoActions).Ci();},BgC:function(G){if(this.BAs()===true){this.
ABl();this.AaP(this);}else A._GetAutoObject(A.Device.Device).AY(27,true,A.jV,0,null
);},BAs:function(){return(!!this.XV.C7(this.XV.Q)||!!this.VA.C7(this.VA.Q))||!!this.
VB.C7(this.VB.Q);},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.
Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},MZ:function(G){var B;this.
Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true
,null,null);},BBz:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XV.AtH(this);this.VA.AtH(this);this.VB.AtH(this);this.Aa1.AtH(this);}
,_Init:function(aArg){C.Fr._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.Aa2._Init.call(this.RS={I:this},0);C.Aa2._Init.call(this.TC={I:this},0);C.
Aa2._Init.call(this.TD={I:this},0);C.Aa2._Init.call(this.TE={I:this},0);C.Avd._Init.
call(this.AdQ={I:this},0);C.AutoAction._Init.call(this.XV={I:this},0);C.AutoAction.
_Init.call(this.VA={I:this},0);C.AutoAction._Init.call(this.VB={I:this},0);C.AutoAction.
_Init.call(this.Aa1={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AMc;var B;this.H(Rr);this.Text.R(A.aaR(A.acf.TF));this.Y.H(L9);this.Y.JZ(1);this.
RS.H(Ah3);this.RS.As(true);this.RS.Aj(true);this.RS.T(A._GetAutoObject(A.Device.
Helper).MN(A.aaR(A.acf.Ajk),Pc,AIh));this.TC.H(U7);this.TC.As(true);this.TC.Aj(true
);this.TC.T(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.Ajk),Pc,AIi));this.
TD.H(Aao);this.TD.As(true);this.TD.Aj(true);this.TD.T(A._GetAutoObject(A.Device.
Helper).MN(A.aaR(A.acf.Ajk),Pc,AIj));this.TE.H(Alk);this.TE.As(true);this.TE.Aj(
true);this.TE.T(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.Ajk),Pc,AIk));this.
AdQ.H(AyA);this.AdQ.Aj(true);this.AdQ.T(A.aaR(A.acf.A$G));this.VA.Index=1;this.VB.
Index=2;this.Aa1.Index=3;this.Ay.H(Ix);this.J(this.Y,0);this.J(this.RS,0);this.J(
this.TC,0);this.J(this.TD,0);this.J(this.TE,0);this.J(this.AdQ,0);this.J(this.Ay
,0);this.Y.Em=[this,this.Fj];this.RS.ZA(A.aaL(A.fl.H6));this.RS.ZB(A.aaL(A.fl.H6
));this.RS.Au([B=this.XV,B.B$,B.Cc]);this.RS.CL(this.XV);this.TC.ZA(A.aaL(A.fl.H6
));this.TC.ZB(A.aaL(A.fl.H6));this.TC.Au([B=this.VA,B.B$,B.Cc]);this.TC.CL(this.
VA);this.TD.ZA(A.aaL(A.fl.H6));this.TD.ZB(A.aaL(A.fl.H6));this.TD.Au([B=this.VB,
B.B$,B.Cc]);this.TD.CL(this.VB);this.TE.ZA(A.aaL(A.fl.H6));this.TE.ZB(A.aaL(A.fl.
H6));this.TE.Au([B=this.Aa1,B.B$,B.Cc]);this.TE.CL(this.Aa1);this.AdQ.AR=[this,this.
BBz];this.Init(aArg);},_Done:function(){this.__proto__=C.Fr;this.Y._Done();this.
RS._Done();this.TC._Done();this.TD._Done();this.TE._Done();this.AdQ._Done();this.
XV._Done();this.VA._Done();this.VB._Done();this.Aa1._Done();this.Ay._Done();C.Fr.
_Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.Y._ReInit();this.
RS._ReInit();this.TC._ReInit();this.TD._ReInit();this.TE._ReInit();this.AdQ._ReInit(
);this.XV._ReInit();this.VA._ReInit();this.VB._ReInit();this.Aa1._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.TF));this.RS.T(A._GetAutoObject(A.Device.Helper
).MN(A.aaR(A.acf.Ajk),Pc,AIh));this.TC.T(A._GetAutoObject(A.Device.Helper).MN(A.
aaR(A.acf.Ajk),Pc,AIi));this.TD.T(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.
Ajk),Pc,AIj));this.TE.T(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.Ajk),Pc
,AIk));this.AdQ.T(A.aaR(A.acf.A$G));},_Mark:function(D){var B;C.Fr._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={BI:
A.abi(27,0,null),Du:function(){return 16;},C7:function(aIndex){if(aIndex>=27)return-
1;return this.BI.Get(aIndex);},DZ:function(A8){var O=0;while(O<27){if(this.BI.Get(
O)===A8)return O;O=O+1;}return-1;},H8:function(){var O=0;var max=-1;while(O<27){
if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.BI=[]).__proto__=C.Cm.BI;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={Ig:null,Ac_:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AtH],this.Ac_,0);A.pe([this,this.
AtH],this);},Du:function(){return this.Ig.Ng();},C7:function(aIndex){if(aIndex>=
this.Du())return-1;return this.Ig.OM(aIndex);},Gm:function(aIndex){return this.ActionToString.
BT(this.C7(aIndex));},DZ:function(A8){var O=0;while(O<this.Du()){if(this.Ig.OM(O
)===A8)return O;O=O+1;}return-1;},H8:function(){var O=0;var max=-1;while(O<this.
Du()){if(this.Ig.OM(O)>max)max=this.Ig.OM(O);O=O+1;}return max;},AtH:function(G){
this.Q=this.Ac_.OM(this.Index);A.abo([this,this.B$,this.Cc],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ig=A._GetAutoObject(C.Au0);this.Ac_=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ig)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AMi={AtE:0,Init:function(aArg
){var B;A.zX([this,this.Be8],[B=A._GetAutoObject(A.Device.Device),B.A8N,B.Bbu],0
);A.zX([this,this.Be5],[B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0E],0);A.pe([
this,this.Be8],this);A.pe([this,this.Be5],this);},Clear:function(){C.VF.Clear.call(
this);this.AtE=0;},Ci:function(){A._GetAutoObject(A.Device.Device).ArM(this.AtE);
A._GetAutoObject(A.Device.Device).ArN(this.toString());},Be8:function(G){this.AtE=
A._GetAutoObject(A.Device.Device).Pr;A.we(this,0);},Be5:function(G){this.E3(A._GetAutoObject(
A.Device.Device).AuM);A.we(this,0);},N3:function(Eh){if((this.AtE&(((B=Eh)<0)?B+
0x100000000:B))===(((B=Eh)<0)?B+0x100000000:B))return true;return false;},AUZ:function(
Eh){this.AtE=this.AtE|(((B=Eh)<0)?B+0x100000000:B);},_Init:function(aArg){C.VF._Init.
call(this,aArg);this.__proto__=C.AMi;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pr={_Init:function(){C.AMi._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AMj={VD:null,Ay:null,Y:null,JV:null,CQ:function(
){this.AiM(this);},Init:function(aArg){A.zV([this,this.AiM],this.VD,0);A.pe([this
,this.AiM],this);},DF:function(G){C.Fr.DF.call(this,G);this.MZ(this);},Ls:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.Ew];this.BQ.Ce=[
this,this.A3G];this.BQ.Ca=[this,this.A3$];this.BQ.C4(A.aaL(A.ach.Arl));this.BQ.Ct(
A.aaL(A.ach.Ard));this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},Ew:function(G){if(
this.Bzi()>0){this.ABl();this.AaP(this);}else A._GetAutoObject(A.Device.Device).
AY(28,true,A.jV,0,null);},AiM:function(G){this.Ao8();var O;for(O=0;O<this.VD.Ng(
);O=O+1){var To=A._GetAutoObject(C.Pr).OM(O);this.A1M(To);}this.J(this.JV,0);A.aaS([
this,this.MZ],this);},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]
);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},MZ:function(G){var
B;this.Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.
AV,true,null,null);},A1M:function(Hb){var Azn=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sm,0);Aa.T(Azn.BT(Hb));Aa.Aj(true);Aa.G8=Hb;Aa.A_D(this.
VD.N3(Hb));this.J(Aa,0);this.ZL(Aa);},Ao8:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdN=X;X=X.Ah;if(((AdN.U&0x400)===0x400))this.HR(
AdN);}},ABl:function(){var B;this.VD.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JV)){var Aa=(C.Sm.isPrototypeOf(
X)?X:null);if(!!Aa){this.VD.J(Aa.G8);if(Aa.ASS())this.VD.AUZ(Aa.G8);}else A.ab5(
"%s",AyB);}X=X.Ah;}this.VD.Ci();},Bzi:function(){var B;var A4G=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JV)){var
Aa=(C.Sm.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASS())A4G=A4G+1;}else A.ab5("%s"
,AyB);}X=X.Ah;}return A4G;},A3G:function(G){var B;var Aa=(C.Sm.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAB=(C.Sm.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAB){this.
AhF(AAB,Aa);A.pe([this,this.MZ],this);}}},A3$:function(G){var B;var Aa=(C.Sm.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AA9=(C.Sm.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AA9
){this.AhF(Aa,AA9);A.pe([this,this.MZ],this);}}},AqR:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiM],this);},_Init:function(
aArg){C.Fr._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Avd._Init.call(this.JV={I:this},0);this.__proto__=C.AMj;
this.H(Rr);this.Text.R(A.aaR(A.acf.AEx));this.Ay.H(Ix);this.Y.H(L9);this.Y.JZ(1);
this.JV.H(AIl);this.JV.Aj(true);this.JV.T(A.aaR(A.acf.AqR));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JV,0);this.Y.Em=[this,this.Fj];this.JV.AR=[this,this.AqR
];this.VD=A._GetAutoObject(C.Pr);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fr;this.Ay._Done();this.Y._Done();this.JV._Done();C.Fr._Done.call(this);},_ReInit:
function(){C.Fr._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JV._ReInit(
);this.Text.R(A.aaR(A.acf.AEx));this.JV.T(A.aaR(A.acf.AqR));this.CQ();},_Mark:function(
D){var B;C.Fr._Mark.call(this,D);if((B=this.VD)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sm={G8:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hp(10);},Bl:function(aSize){C.Ui.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mu.M[0]));},Ai:function(Ae){var B;C.Ui.Ai.call(this,Ae);var Hg=((Ae&0x10
)===0x10);var Fv=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FT=A.jb.Aec;var GZ=A.jb.
Bm;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.Text;}if(!Hg){this.Background.L(FT);this.V.L(A.
jb.CK);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);
}this.LN=Hg;this.KM=Fv;this.Qy=GE;},H1:function(G){this.A39(this);},A39:function(
G){this.AFi(!this.AmH);},A_D:function(E){this.AFi(E);},ASS:function(){return this.
AmH;},_Init:function(aArg){C.Ui._Init.call(this,aArg);this.__proto__=C.Sm;this.Mu.
H(AIm);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.VF={CB:0,
Ig:A.abi(17,0,null),OM:function(HC){return this.Ig.Get(HC);},Ng:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ig.Set(O,0);this.CB=0;},J:function(
Eh){if(this.CB>=17)A.ab5("%s",AIn);else{this.Ig.Set(this.CB,Eh);this.CB=this.CB+
1;}},Ci:function(){},E3:function(AcY){var AJx=AcY.indexOf(String.fromCharCode(0x2C
),0);var A1_=A.jV;var O=0;this.CB=0;while(O<17)if(AcY===A.jV){this.Ig.Set(O,0);O++;
}else{if(AJx===-1){A1_=AcY;AcY=A.jV;}else{A1_=A.abV(AcY,AJx);AcY=A.ab1(AcY,0,AJx+
1);}var To=A.abZ(A1_,0,10)|0;if(this.AEa(To)){this.Ig.Set(this.CB,To);this.CB=this.
CB+1;O++;}AJx=AcY.indexOf(String.fromCharCode(0x2C),0);}if(AcY!==A.jV)A.ab5("%s"
,AyC);},toString:function(){var A3m=(((B=this.Ig.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A3m=(A3m+AyD)+(((B=this.Ig.Get(O))<0)?B+0x100000000:
B).toFixed();return A3m;},AxE:function(HC,Eh){if(HC>=this.CB){A.ab5("%s",((((AYh+
HC.toFixed())+AYi)+this.CB.toFixed())+AYj)+AYk);return;}this.Ig.Set(HC,Eh);},Contains:
function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(this.Ig.Get(O)===Eh)return true;return false;
},AEa:function(Eh){return true;},DZ:function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(
this.Ig.Get(O)===Eh)return O;return-1;},_Init:function(aArg){(this.Ig=[]).__proto__=
C.VF.Ig;this.__proto__=C.VF;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AM1={Init:function(aArg){var B;A.zX([this,this.Bfg],[B=A._GetAutoObject(A.Device.
Device),B.A8Y,B.BbC],0);A.pe([this,this.Bfg],this);},Ci:function(){A._GetAutoObject(
A.Device.Device).Akv(this.toString());},AEa:function(Eh){switch(Eh){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bfg:function(
G){this.E3(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.VF._Init.call(this,aArg);this.__proto__=C.AM1;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AM1._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Wv={VC:null,KC:null,A7K:A.jV,Action:0,A5k:false,A$r:false,Baa:false,Bl:function(
aSize){C.Fn.Bl.call(this,aSize);this.Q5.H(this.Mz.M);this.OL.H(this.Q5.M);},Ai:function(
Ae){C.Fn.Ai.call(this,Ae);if(!this.LN){this.KC.T6.L(A.jb.Am8);this.KC.QN.Z(true);
this.KC.QN.L(A.jb.ARk);}else if(this.Qy){this.KC.T6.L(A.jb.Bm);this.KC.QN.Z(false
);}else if(this.KM){this.KC.T6.L(A.jb.Bm);this.KC.QN.Z(false);}else{this.KC.T6.L(
A.jb.Text);this.KC.QN.Z(true);this.KC.QN.L(A.jb.CU);}},Bmp:function(E){if(this.Action===
E)return;this.Action=E;},Bnv:function(E){if(this.A7K===E)return;this.A7K=E;this.
VC.Text.R(E);},AT0:function(E){if(this.Baa===E)return;this.Baa=E;this.KC.Boh(!this.
KC.AVn);},AFT:function(E){if(this.A$r===E)return;this.A$r=E;this.KC.Z(!this.KC.Fp(
));},A94:function(E){if(this.A5k===E)return;this.A5k=E;this.VC.Z(E);},_Init:function(
aArg){C.Fn._Init.call(this,aArg);C.VC._Init.call(this.VC={I:this},0);C.KC._Init.
call(this.KC={I:this},0);this.__proto__=C.Wv;this.H(AYl);this.Background.H(AYm);
this.G$.As(false);this.G$.Z(false);this.VC.H(AYn);this.VC.Z(false);this.KC.H(AYo
);this.KC.Z(false);this.J(this.VC,0);this.J(this.KC,0);this.Mz.Ax(A.aaL(A.ach.ANw
));},_Done:function(){this.__proto__=C.Fn;this.VC._Done();this.KC._Done();C.Fn._Done.
call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.VC._ReInit();this.KC.
_ReInit();},_Mark:function(D){var B;C.Fn._Mark.call(this,D);if((B=this.VC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.VC={AL:null,Text:null,BW:null,Init:function(
aArg){this.Text.H(this.M);this.BW.H(this.M);this.AL.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BW._Init.call(this.BW={I:this},0);this.__proto__=
C.VC;this.AL.H(AYp);this.AL.L(A.jb.Bj8);this.H(AYq);this.Text.H(AYr);this.Text.L(
A.jb.Text);this.BW.H(AYs);this.BW.Nu(1);this.BW.L(A.jb.Text);this.J(this.AL,0);this.
J(this.Text,0);this.J(this.BW,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AL._Done();this.Text._Done();this.BW._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AL._ReInit();this.Text._ReInit();this.BW._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.KC={QN:null
,T6:null,AVn:false,Boh:function(E){if(this.AVn===E)return;this.AVn=E;if(E){this.
T6.Ax(A.aaL(A.ach.ACP));this.QN.Ax(A.aaL(A.ach.ACP));}else{this.T6.Ax(A.aaL(A.ach.
AqL));this.QN.Ax(A.aaL(A.ach.AqL));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QN={I:this},0);A.acg.Ap._Init.call(this.T6={I:this
},0);this.__proto__=C.KC;this.H(AyE);this.QN.H(AyE);this.QN.Cw(1);this.T6.H(AyE);
this.T6.Cw(0);this.J(this.QN,0);this.J(this.T6,0);this.QN.Ax(A.aaL(A.ach.AqL));this.
T6.Ax(A.aaL(A.ach.AqL));},_Done:function(){this.__proto__=A.Core.P;this.QN._Done(
);this.T6._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QN._ReInit();this.T6._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T6).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASm={
Gf:null,Cd:null,Dp:null,Dj:null,Kx:null,Zr:10,Aq$:0,AEI:0,ASA:0,Azm:false,L1:false
,Bdj:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Lm(
))A._GetAutoObject(A.Device.Device).AY(41,true,A._GetAutoObject(A.Device.Device).
An.HM().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gs();A._GetAutoObject(
A.Device.Helper).Aqo(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAQ],this.
Db.Q,0);A.zX([this,this.BBi],this.Dp.Q,0);A.zX([this,this.ABG],this.Dj.Q,0);A.zX([
this,this.ABG],this.Dj.HJ.Q,0);A.zX([this,this.ABG],[this,this.ASZ,this.AFR],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A9W,B.Bb6],0);A.zX([this
,this.BfP],this.Cd.Q,0);A.pe([this,this.AAQ],this);A.pe([this,this.GH],this);A.pe([
this,this.ABG],this);A.pe([this,this.BfP],this);},CD:function(G){if(!this.Azm){this.
Azm=true;A.pe([this,this.AcV],this);}else C.H3.CD.call(this,G);},Agj:function(G){
this.ASA=this.Zr;this.Bdr(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.E7();A._GetAutoObject(C.A7).FB();},Aut:function(){this.N.CS(A.jV);this.N.C4(
A.aaL(A.ach.ADV));this.N.Ca=[this,this.Ay8];},AAK:function(G){A._GetAutoObject(C.
A7).Cb(55);},AFR:function(E){if(this.Zr===E)return;this.Zr=E;A.abo([this,this.ASZ
,this.AFR],0);},Bdr:function(G){var F;if(!this.Zr||(this.Bdj===true)){A._GetAutoObject(
A.Device.Device).AY(24,false,CR,0,null);if(this.AEI===1)A._GetAutoObject(A.Device.
Device).AY(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).AY(23,
true,this.AEI.toFixed(),2000,null);this.Ew(this);return;}this.Gf.Gs();this.Gf.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gf.N7(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gf.Q8(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gf.J0(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gf.Nr(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gf.P0(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gf.SP(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alx=A._GetAutoObject(
A.Device.Helper).A14(this.Gf,(F=this.Dj.H4.Hv,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alx)this.Ai2();else{A._GetAutoObject(A.Device.Helper).AKx(
this.Gf,Alx,(F=this.Dj.H4.Hv,F[1].call(F[0])),this.Zr-1,[this,this.ApM]);A._GetAutoObject(
A.Device.Device).AY(24,false,CR,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am_())this.C$.Z(true);else this.C$.Z(false);if(this.L1){this.Dp.
Z(false);this.Cd.T(A.aaR(A.acf.ACW));this.Cd.AFk(A.aaL(A.ach.Aff));}else{this.Dp.
Z(true);this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.AFk(null);}if((this.Y.BjH(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JN(this.Y.TX(this.AV,0x1));this.Am();
},ATu:function(E){if(this.Aq$===E)return;this.Aq$=E;A.abo([this,this.A9a,this.ATu
],0);},ABG:function(G){var F;var AKj=(F=this.Dj.Q,F[1].call(F[0]));var AAs=-1;switch((
F=this.Dj.H4.Hv,F[1].call(F[0]))){case 0:AAs=AKj+((F=A._GetAutoObject(A.Device.Helper
).BdZ(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zr-1));break;case 1:AAs=(AKj+this.
Zr)-1;break;case 3:case 2:case 5:case 4:switch(this.Dj.HJ.AC.Q){case 0:AAs=(AKj+
this.Zr)-1;break;case 1:AAs=(AKj-this.Zr)+1;break;default:throw new Error(AYt+this.
Dj.HJ.AC.Q.toFixed());}break;default:throw new Error(AYu+this.Dj.HJ.AC.Q.toFixed(
));}this.ATu(AAs);},BBi:function(G){A.pe([this,this.GH],this);A.pe([this,this.Auc
],this);},AAQ:function(G){A._GetAutoObject(A.Device.Helper).AVV(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
L1);A.pe([this,this.ABG],this);},ApM:function(G){var F;var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case 22:case 21:case 48:if((
Ar.Id===48)&&(Ar.PopupState===7))this.ApG();else switch((F=this.Dj.H4.Hv,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JN(this.Dj);break;case 0:this.JN(this.Dp
);break;case 1:this.JN(this.Cd);break;default:throw new Error(AyF+(F=this.Dj.H4.
Hv,F[1].call(F[0])).toFixed());}break;case 25:this.JN(this.Cd);break;case 47:if(
Ar.PopupState===7)this.ApG();else{this.JN(this.Dj);this.JN(this.Cd);}break;case 43:{
this.JN(this.Dj);this.JN(this.Dp);}break;case 42:{this.JN(this.Dj);this.JN(this.
Cd);}break;case 41:break;default:A.ab5("%s%e",Ath,Ar.Id);}},Ai2:function(){this.
Gf.Ci(A._GetAutoObject(A.Device.Device).An);this.AEI=this.AEI+1;if(A._GetAutoObject(
A.Device.Helper).Am_()){if(A._GetAutoObject(A.Device.Device).Bt.Lm()){A._GetAutoObject(
A.Device.Device).AY(24,false,U8,0,null);A._GetAutoObject(A.Device.Device).AY(50,
true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),0,null);}else{var Md=A.
_GetAutoObject(A.Device.Device).An.LZ(0,this.Gf.Id);A._GetAutoObject(A.Device.Device
).SW(Md);var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(this.Gf.
Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(this.Gf.DateOfBirth);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApG();},ApG:function(){var B;var F,Cu;if(!!(F=this.Cd.
Q,F[1].call(F[0]))){(F=this.Cd.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.L1)(
Cu=this.Dp.Q,Cu[2].call(Cu[0],(F=this.Cd.Q,F[1].call(F[0]))));}if(!this.L1)(Cu=this.
Dp.Q,Cu[2].call(Cu[0],A._GetAutoObject(A.Device.Helper).Bas(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjO(),this.Dp.AjQ())));var I3=null;switch((F=this.Dj.H4.Hv,F[1].call(
F[0]))){case 3:I3=[B=A._GetAutoObject(A.Device.Device),B.Awl,B.Ay0];break;case 2:
I3=[B=A._GetAutoObject(A.Device.Device),B.Awm,B.Ay1];break;case 4:case 5:I3=[B=A.
_GetAutoObject(A.Device.Device),B.Anx,B.AoE];break;default:;}if(!!I3){switch((F=
this.Dj.Kr.V2,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dj.Q,F[2].call(F[0],I3[1].call(I3[0])));
}var XR=100-((this.Zr/this.ASA)*100);A._GetAutoObject(A.Device.Device).AY(24,true
,(((this.ASA.toFixed()+Ati)+(XR|0).toFixed())+Ati)+(F=this.Dj.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBs]);this.AFR(this.Zr-1);A.aaS([this,this.Bdr],null);},BBs:
function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.
PopupState===5))this.Bdj=true;},ApN:function(G){var F;C.H3.ApN.call(this,G);var Ao1=
0;switch((F=this.B0.Q,F[1].call(F[0]))){case 0:case 2:Ao1=A._GetAutoObject(A.Device.
Device).AdU;break;case 1:Ao1=730;break;default:A.ab5("%s%e",Alh,(F=this.B0.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q8(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmN(Ao1));(F=this.C$.Q,F[2].call(
F[0],this.C$.An2));switch(this.B0.AC.Q){case 0:{this.Kx.Jg(A.aaR(A.acf.ANr));this.
Kx.IW(A.aaR(A.acf.ANs));}break;case 1:{this.Kx.Jg(A.aaR(A.acf.Bio));this.Kx.IW(A.
aaR(A.acf.Bip));}break;case 2:{this.Kx.Jg(A.aaR(A.acf.Bku));this.Kx.IW(A.aaR(A.acf.
Bkv));}break;default:throw new Error(Alh);}},Ae5:function(E){if(this.L1===E)return;
this.L1=E;A.abo([this,this.Awo,this.Ae5],0);},Auc:function(G){var F,Cu,Tk;this.Ae5(((
F=this.Cd.Q,F[1].call(F[0]))===(Cu=this.Dp.Q,Cu[1].call(Cu[0])))&&!!(Tk=this.Cd.
Q,Tk[1].call(Tk[0])));A.pe([this,this.GH],this);},BfP:function(G){A.pe([this,this.
Auc],this);},ASZ:function(){return this.Zr;},A9a:function(){return this.Aq$;},Awo:
function(){return this.L1;},_Init:function(aArg){C.H3._Init.call(this,aArg);C.Av7.
_Init.call(this.Cd={I:this},0);C.Rd._Init.call(this.Dp={I:this},0);C.AGW._Init.call(
this.Dj={I:this},0);C.AU$._Init.call(this.Kx={I:this},0);this.__proto__=C.ASm;var
B;this.Dr(C.ADy);this.Cd.H(Aor);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak7));this.
Cd.ArU(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.
aaR(A.acf.Akn));this.Dp.H(AYv);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uo));this.
Dp.Ar_(false);this.Dj.H(AYw);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.A7x));this.Dj.
Bx(0);this.Kx.H(AYx);this.Kx.Aj(true);this.Kx.T(A.aaR(A.acf.A8E));this.Kx.Gb(1);
this.Kx.EV(500);this.Kx.IW(A.aaR(A.acf.ANs));this.Kx.Jg(A.aaR(A.acf.ANr));this.Kx.
A_u(A.aaR(A.acf.Aq$)+A.aaR(A.acf.Colon));this.J(this.Cd,0);this.J(this.Dp,0);this.
J(this.Dj,0);this.J(this.Kx,0);this.Gf=A._NewObject(A.Device.Animal,0);this.Cd.AR=[
this,this.AcV];this.Cd.L5([this,this.AcV]);this.Cd.L8(A.aaL(A.ach.Aff));this.Cd.
Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArJ,B.P0]);this.Cd.OU([B=A._GetAutoObject(
A.Device.Device),B.Ur,B.U_]);this.Cd.PY([B=A._GetAutoObject(A.Device.Device),B.Us
,B.U$]);this.Cd.Uu([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoD]);this.Cd.Ae5([
this,this.Awo,this.Ae5]);this.Dp.Gt([this,this.D_,this.GT]);this.Dp.L5([this,this.
AcV]);this.Dp.L8(A.aaL(A.ach.Aff));this.Dp.Uw([B=this.Gender.Animal,B.WJ,B.J0]);
this.Dp.OU([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.Dp.PY([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Dp.Uu([B=A._GetAutoObject(A.Device.Device),B.Anu
,B.AoD]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Any,B.Nr]);this.Dp.
AnA([B=this.AnimalType.Animal,B.PX,B.EC]);this.Dj.Gt([this,this.D_,this.GT]);this.
Dj.L5([B=this.Dj,B.FW]);this.Dj.L8(A.aaL(A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArK,B.SP]);this.Dj.A95(A._GetAutoObject(A.Device.Helper).W);
this.Kx.Au([this,this.ASZ,this.AFR]);this.Kx.BmT([this,this.A9a,this.ATu]);this.
Init(aArg);},_Done:function(){this.__proto__=C.H3;this.Cd._Done();this.Dp._Done(
);this.Dj._Done();this.Kx._Done();C.H3._Done.call(this);},_ReInit:function(){C.H3.
_ReInit.call(this);this.Cd._ReInit();this.Dp._ReInit();this.Dj._ReInit();this.Kx.
_ReInit();this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.ArU(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.aaR(A.acf.Akn));this.Dp.T(A.aaR(A.acf.
Uo));this.Dj.T(A.aaR(A.acf.A7x));this.Kx.T(A.aaR(A.acf.A8E));this.Kx.IW(A.aaR(A.
acf.ANs));this.Kx.Jg(A.aaR(A.acf.ANr));this.Kx.A_u(A.aaR(A.acf.Aq$)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.H3._Mark.call(this,D);if((B=this.Gf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUC={BX:null,RatingMode:null,Ls:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Ce=null;this.BQ.CF=[this,this.AaP];this.BQ.CS(A.jV
);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUC;var B;this.
H(Rr);this.BX.H(Aou);this.BX.T(A.aaR(A.acf.Bak));this.J(this.BX,0);this.BX.Au([B=
this.RatingMode,B.B$,B.Cc]);this.BX.CL(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BX._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit(
);this.RatingMode._ReInit();this.BX.T(A.aaR(A.acf.Bak));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bgq],[B=A._GetAutoObject(A.Device.Device),B.AS3,B.A0P],0);A.pe([this,this.Bgq],this
);},Du:function(){return 2;},Gm:function(aIndex){return this.RatingModeToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Aw$(E);},Bgq:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.BI.Set(0,0);this.BI.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANL={W2:
function(G){C.Amz.W2.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aq6()){
A._GetAutoObject(A.Device.Helper).W.AkC(false);A._GetAutoObject(A.Device.Helper).
W.Ci(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amz._Init.call(
this,aArg);this.__proto__=C.ANL;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hk={DL:A.jV,T:function(E){if(this.DL===E)return;this.DL=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hk;},_className:"Application::BaseItem"
};C.AV$={BX:null,WeightRecordingMode:null,Ls:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Ce=null;this.BQ.CF=[this,this.AaP];this.BQ.CS(A.jV
);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AV$;var B;this.H(Rr);this.BX.H(Aou);this.BX.T(A.aaR(A.acf.As2));this.BX.EV(1);
this.J(this.BX,0);this.BX.Au([B=this.WeightRecordingMode,B.B$,B.Cc]);this.BX.CL(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BX.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit();this.WeightRecordingMode.
_ReInit();this.BX.T(A.aaR(A.acf.As2));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Du:function(){return 2;},Gm:function(aIndex){return this.
WeightRecordingModeToString.BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Axm(E);},Init:function(aArg){var B;A.zX([this
,this.Bhw],[B=A._GetAutoObject(A.Device.Device),B.A9V,B.Bb5],0);A.pe([this,this.
Bhw],this);},Bhw:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.BI.Set(0,0);this.BI.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.WeightRecordingModeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aba={BooleanToAutoOnOff:null,Gm:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BT(aIndex);},_Init:function(aArg){C.Ge._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aba;},_Done:function(
){this.__proto__=C.Ge;this.BooleanToAutoOnOff._Done();C.Ge._Done.call(this);},_ReInit:
function(){C.Ge._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Ge._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.Ax2={A7L:function(){var B;this.
AxF(1);this.Jz(0,3);this.VO(0,0,(B=this.M)[3]-B[1]);this.A5n(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A5n(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VY(0);},_Init:
function(aArg){C.ABT._Init.call(this,aArg);this.__proto__=C.Ax2;},_className:"Application::Triangle"
};C.AUd={Y:null,Init:function(aArg){this.ByF(this);},ByE:function(Qg){var Aa=A._NewObject(
C.ANS,0);Aa.H(BD);Aa.T(Qg);Aa.Aj(true);Aa.As(false);Aa.Bi(true);this.J(Aa,0);this.
AtG(this);},AtG:function(G){var B;var AlF=1;var A3d=0;var X=this.Y.Ah;var Cy=null;
var K$=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.O4.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALs=(B=Cy.V.B7.A7o(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.Mx.isPrototypeOf(X)?X:null))ALs=ALs+20;if(A3d<ALs)A3d=ALs;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(AlF*28)));AlF=AlF+1;}else{K$=(A.acg.C8.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K$){var Di=((B=this.M)[3]-B[1])-((AlF-1)*28);K$.DN([this.
M[0],K$.Et[1]]);K$.DN([K$.Et[0],Di]);K$.DD([this.M[0]+120,K$.ED[1]]);K$.DD([K$.ED[
0],Di]);}}X=X.Ah;}this.BCa(A3d,28);},BCa:function(aWidth,BxN){var B;var X=this.Y.
Ah;var Cy=null;var K$=null;aWidth=aWidth+20;if(aWidth>(C.AsF[0]-10))aWidth=C.AsF[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.O4.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A6(0x14);Cy.V.Text.Hp(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,BxN));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K$=(
A.acg.C8.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K$){K$.DN([this.M[
2]-aWidth,K$.Et[1]]);K$.DD([this.M[2],K$.ED[1]]);}}X=X.Ah;}},ByF:function(G){var
Aa=A._GetAutoObject(C.BS).AqV;while(!!Aa){if(!!(C.Axt.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axt.isPrototypeOf(Aa)?Aa:null);this.ByD(EF.DL,EF.AR,EF.Bw,EF.ARs);}else
if(!!(C.Axv.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axv.isPrototypeOf(Aa)?Aa:null);
this.ByK(EF.DL,EF.AR,EF.Bw,EF.WI,EF.W4);}else if(!!(C.ZH.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.ZH.isPrototypeOf(Aa)?Aa:null);this.ByC(EF.DL,EF.AR,EF.Bw);}else if(
!!(C.AkI.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkI.isPrototypeOf(Aa)?Aa:null);this.
ByE(EF.DL);}else if(!!(C.AGo.isPrototypeOf(Aa)?Aa:null))this.ByL();Aa=Aa.ME;}A._GetAutoObject(
C.BS).Clear();A.pe([this,this.AtG],this);},ByC:function(Qg,Ac5,Ah8){var Aa=A._NewObject(
C.Mx,0);Aa.H(BD);Aa.T(Qg);Aa.AR=Ac5;Aa.Aj(true);Aa.As(Ah8);Aa.Bi(true);this.J(Aa
,0);this.AtG(this);},ByL:function(){var K$=A._NewObject(A.acg.C8,0);K$.L(A.jb.Bm
);K$.Aj(true);K$.Nu(3);this.J(K$,0);this.AtG(this);},ByD:function(Qg,Ac5,Ah8,A1n
){var Aa=A._NewObject(C.AmL,0);Aa.H(BD);Aa.T(Qg);Aa.AR=Ac5;Aa.Aj(true);Aa.As(Ah8
);Aa.Bi(true);Aa.Au(A1n);this.J(Aa,0);this.AtG(this);},ByK:function(Qg,Ac5,Ah8,A3u
,Agt){var Aa=A._NewObject(C.ANR,0);Aa.H(BD);Aa.T(Qg);Aa.AR=Ac5;Aa.Aj(true);Aa.As(
Ah8);Aa.Bi(true);Aa.BnT(A3u);Aa.AF5(Agt);this.J(Aa,0);this.AtG(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AUd;this.H(Rr);this.Y.H(Rr);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afk={_Init:
function(){A.acl.Afk._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A$n={AqV:null,Aho:null,Mp:function(Qg){var EF=A._NewObject(
C.AkI,0);EF.DL=Qg;this.J(EF);},Clear:function(){this.AqV=null;this.Aho=null;},Fz:
function(){var K$=A._NewObject(C.AGo,0);this.J(K$);},J:function(BcH){if(!this.AqV
){this.AqV=BcH;this.Aho=this.AqV;}else{this.Aho.ME=BcH;this.Aho=this.Aho.ME;}},TG:
function(Qg,Ac5){var EF=A._NewObject(C.ZH,0);EF.DL=Qg;EF.AR=Ac5;this.J(EF);},BhF:
function(Qg,Ac5,A1n){var EF=A._NewObject(C.Axt,0);EF.DL=Qg;EF.AR=Ac5;EF.ARs=A1n;
this.J(EF);},Aa3:function(Qg){var EF=A._NewObject(C.ZH,0);EF.DL=Qg;EF.Bw=false;this.
J(EF);},ABX:function(Qg,Ac5,A3u,Agt){var EF=A._NewObject(C.Axv,0);EF.DL=Qg;EF.AR=
Ac5;EF.WI=A3u;EF.W4=Agt;this.J(EF);},_Init:function(aArg){this.__proto__=C.A$n;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aho)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BS={_Init:function(){C.A$n._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axu={ME:null,_Init:function(aArg){this.__proto__=
C.Axu;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.ME)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOO={Amx:null,ArO:function(E){if(this.Amx===
E)return;if(!!this.Ab)this.Ab.ZL(this);if(!!this.Amx)this.AqN(this.Amx,A._GetAutoObject(
C.AsJ),null,null,null,null,false);this.Amx=E;if(!!this.Amx)this.AkN(this.Amx,A._GetAutoObject(
C.AsJ),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOO;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amx)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WS={_Init:function(){C.AOO._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N9={Init:function(aArg){var C2=A._NewObject(C.AUe,0);C2.H(this.M);this.AkN(C2,A.
_GetAutoObject(C.An0),null,A._GetAutoObject(C.An0),A._GetAutoObject(C.An0),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N9;this.H(Rr);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsJ={_Init:function(){C.AVb._Init.call(this,0);this.ACU=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AUe={AL:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.AUe;this.H(AIo);this.CZ(0);this.AL.A1(0x3F);this.AL.H(AIo);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.P;this.AL.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AVa={Si:function(){var B;var Ao=(A.acl.Afc.isPrototypeOf(B=A.acl.Aeo.Si.call(this
))?B:null);if(!Ao)throw new Error(Atd);Ao.Cp.Cx=255;Ao.Cp.B3=0;return Ao;},Sh:function(
){var B;var Ao=(A.acl.Axs.isPrototypeOf(B=A.acl.Aeo.Sh.call(this))?B:null);if(!Ao
)throw new Error(Atd);Ao.E0.Cx=0;Ao.E0.B3=255;Ao.Dt=true;return Ao;},_Init:function(
aArg){A.acl.Aeo._Init.call(this,aArg);this.__proto__=C.AVa;},_className:"Application::ShadeOverlayTransition"
};C.An0={_Init:function(){C.AVa._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkW={An2:0,A2y:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Iv.Ai.call(this,Ae);this.BU.L(this.V.AQ);if(!!this.Q){
var BDj=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BU.R((A.
_GetAutoObject(A.Device.Converter).Ala(BDj)+CR)+A._GetAutoObject(A.acj.DU).Af7()
);else this.BU.R(A.aaR(A.acf.Akn));}},Ki:function(G){var B;var Bht=(this.A2y===false
)&&(this.AM<=this.Gr);if(Bht)this.Bx(this.An2);this.A44(this.AM,4);if(Bht){this.
Bx(this.AM-this.Aj5);this.A2y=true;}C.Iv.Ki.call(this,G);},Kd:function(G){this.A44(
this.AM,5);C.Iv.Kd.call(this,G);},Bx:function(E){this.A44(E,4);E=(((E+((this.Aj5
/2)|0))/this.Aj5)|0)*this.Aj5;if(!E)this.A2y=false;C.Iv.Bx.call(this,E);},Ahw:function(
E){if(this.An2===E)return;this.An2=E;},A44:function(Bxv,GA){this.ATx(A._GetAutoObject(
A.acj.DU).Bd3(Bxv,GA));},_Init:function(aArg){C.Iv._Init.call(this,aArg);this.__proto__=
C.AkW;this.H(K4);this.An2=this.Gr;this.J5(this.H9,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEJ={None:0,Left:1,BFg:2,Right:3};C.AmB={Xy:
null,FE:null,Ek:null,Background:null,Anm:null,Gd:null,KS:A.jV,AEq:null,Init:function(
aArg){var B;A.zV([this,this.Agc],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A4a],[B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs],0);A.pe([this,this.
LU],this);A.pe([this,this.A4a],this);this.Bb(this.Ek);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DK(this);},Ls:function(){if(!this.BQ)this.BQ=A._NewObject(
C.N,0);return this.BQ;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xy);},CD:function(G){C.OverlayMenu.CD.call(this,G);this.
AK4();},Agi:function(G){var Aa=(C.ACq.isPrototypeOf(G)?G:null);var Ht;if(!!Aa)Ht=
Aa.Ht;else Ht=this.Gd.FO();if(Ht>=A._GetAutoObject(A.Device.Device).An.B_())return;
A._GetAutoObject(A.Device.Helper).GS(Ht);A.pe([this,this.AaP],this);},AK4:function(
){},Agc:function(G){this.Am();},A33:function(G){if(this.Gd.FO()<(A._GetAutoObject(
A.Device.Device).An.B_()-1))this.Gd.GU(this.Gd.FO()+1);},A34:function(G){if(this.
Gd.FO()>0)this.Gd.GU(this.Gd.FO()-1);},DK:function(G){var Gi=A._GetAutoObject(A.
Device.Device).An.B_();var M2=this.BQ;if(!M2)return;M2.C3(A.aaL(A.ach.AeC));M2.CF=[
this,this.AaP];if(Gi<=0){M2.Ct(null);M2.C4(null);M2.Ce=null;M2.Ca=null;M2.WV=false;
M2.ZK=false;}else if(Gi===1){M2.Ct(null);M2.C4(A.aaL(A.ach.AeD));M2.Ce=null;M2.Ca=[
this,this.Agi];M2.WV=false;M2.ZK=false;}else{M2.Ct(A.aaL(A.ach.Ard));M2.C4(A.aaL(
A.ach.Arl));M2.Ce=[this,this.A33];M2.Ca=[this,this.A34];M2.WV=true;M2.ZK=true;}}
,LU:function(G){this.BgQ(this);this.Xy=A._GetAutoObject(A.Device.Device).An.Filter;
this.AK4();},BnL:function(E){if(this.AEq===E)return;this.AEq=E;A.pe([this,this.BBf
],this);},BBf:function(G){this.BgQ(this);},BgQ:function(G){var B;if(!!this.FE)this.
HR(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(this.AEq,0))?B:null);if(!
!this.FE){this.FE.H(AYy);this.J(this.FE,0);}},A4a:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DM(1,4
))this.Gd.Dl(A.aaR(A.acf.ASu));else this.Gd.Dl(this.KS);},Dl:function(E){if(this.
KS===E)return;this.KS=E;A.pe([this,this.A4a],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Anm={I:this},0);C.Gd._Init.call(
this.Gd={I:this},0);this.__proto__=C.AmB;this.H(Rr);this.Ek.H(BD);this.Ek.A_x(A.
jb.CU);this.Ek.A_y(A.jb.Text);this.Background.H(Fe);this.Background.L(A.jb.Bpp);
this.Anm.H(AIp);this.Anm.L(A.jb.CU);this.Gd.H(AIp);this.Gd.N8(C.ACq);this.AEq=C.
APT;this.KS=A.aaR(A.acf.Av$);this.J(this.Ek,0);this.J(this.Background,0);this.J(
this.Anm,0);this.J(this.Gd,0);this.Ek.AR=[this,this.Agi];this.Ek.Ab9(A._NewObject(
C.YC,0));this.Gd.Zy(A._GetAutoObject(A.Device.Device).An);this.Gd.ZC([this,this.
Agi]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ek._Done(
);this.Background._Done();this.Anm._Done();this.Gd._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ek._ReInit();this.
Background._ReInit();this.Anm._ReInit();this.Gd._ReInit();this.Dl(A.aaR(A.acf.Av$
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xy)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Anm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACq={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.Dg(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;if(!!this.AX){this.T(this.AX.CC(Ad,1).toFixed());this.DS.EC(this.AX.Am0(
Ad,14));this.DS.AFm(this.AX.Ja(Ad,13));this.DS.Ae4(this.AX.H7(Ad,8));this.DS.Uy(
this.AX.H7(Ad,11));this.DS.Ae8(this.AX.H7(Ad,12));this.DS.Ae_(this.AX.CC(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.ACq;this.
H(Oi);this.AP.L(A.jb.Bc);this.DS.H(AYz);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.YC={Q:null,Init:function(aArg){var
B;this.ABf(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs]);},AE4:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Nw(FilterCriterion
);var Ai6=this.Akq();if(Ai6>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai6,false);Filter.CX(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.Ae0(false);},BwV:function(s){this.AE4(
s);},ABf:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?B:null);if(!!FilterCriterion
)Filter.Nw(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BG$:function(s){
this.ABf(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcX],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcX],E,0);if(!!E)A.pe([this,this.
AcX],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwT(-1);return;}var Azi=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DM(1,4))?B:null);if(!Azi){this.AW.AwT(0);this.AW.Ae0(true);}else
this.AW.AwT(Azi.A5);},AcX:function(s){this.C5(s);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.YC;this.AW.AwT(0);this.AW.Dk=[this,this.BwV];this.
Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqQ={BirthType:null,EaseOfDelivery:null,Cd:null,Ef:null,AbP:null,G9:null,Cn:
null,AbN:null,AM$:false,Init:function(aArg){this.AM$=A._GetAutoObject(A.Device.Helper
).W.Aro();if(this.AM$)this.AeZ(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.AeZ(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cd.
L5([this,this.AcV]);this.Cd.L8(A.aaL(A.ach.Aff));this.Cd.AR=[this,this.AcV];}this.
Ef.Ar_(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Cd.Q,0);A.pe([this,this.GH],this);},Agj:function(G
){if(((this.Ef.Ast===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARw(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).AY(21,true,A._GetAutoObject(A.Device.Converter).Rl(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ci(
A._GetAutoObject(A.Device.Device).An);if(this.KP>0){if(this.AM$){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LZ(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B2=A._NewObject(A.Device.Rating,0);B2.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYA,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.KP);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A7).FB();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CI
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A7).FB();},Aut:function(
){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.Am7));this.N.Ca=[this,this.Ay8];},AAK:function(
G){A._GetAutoObject(C.A7).Cb(32);},GH:function(G){var F;var Js=(F=this.Ef.Q,F[1].
call(F[0]));var ABD=(F=this.Cd.Q,F[1].call(F[0]));var A4Z=true;if(!!Js&&(ABD===Js
))A4Z=false;A._GetAutoObject(A.Device.Helper).J6(this.Cd,A4Z);this.Ef.BmL(!A4Z);
},_Init:function(aArg){C.H3._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Av7._Init.
call(this.Cd={I:this},0);C.Rd._Init.call(this.Ef={I:this},0);C.Act._Init.call(this.
AbP={I:this},0);C.BX._Init.call(this.G9={I:this},0);C.SX._Init.call(this.Cn={I:this
},0);C.BX._Init.call(this.AbN={I:this},0);this.__proto__=C.AqQ;var B;this.Cd.H(Ah2
);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.ArU(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.aaR(A.acf.Akn));this.Ef.H(Ah2);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Uo));this.AbP.H(AYB);this.AbP.Aj(true);this.
AbP.T(A.aaR(A.acf.GN));this.G9.H(Ah2);this.G9.Aj(true);this.G9.T(A.aaR(A.acf.Arz
));this.Cn.H(Ah2);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeh));this.Cn.AFX(true);
this.AbN.H(Ah2);this.AbN.Aj(true);this.AbN.T(A.aaR(A.acf.AgM));this.J(this.Cd,-1
);this.J(this.Ef,-1);this.J(this.AbP,-1);this.J(this.G9,-1);this.J(this.Cn,-1);this.
J(this.AbN,-1);this.BirthType.L6(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
L6(A._GetAutoObject(A.Device.Helper).W);this.Cd.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArJ,B.P0]);this.Ef.Gt([this,this.D_,this.GT]);this.Ef.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Any,B.Nr]);this.AbP.Gt([this,this.D_,this.GT]);this.AbP.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.ArK,B.SP]);this.G9.Au([B=this.BirthType,
B.B$,B.Cc]);this.G9.CL(this.BirthType);this.Cn.Gt([this,this.D_,this.GT]);this.Cn.
L5([B=this.Cn,B.FW]);this.Cn.L8(A.aaL(A.ach.Edit));this.Cn.Acb([B=A._GetAutoObject(
A.Device.Helper).W,B.Awi,B.Q8]);this.AbN.Au([B=this.EaseOfDelivery,B.B$,B.Cc]);this.
AbN.CL(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
H3;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cd._Done();this.Ef._Done(
);this.AbP._Done();this.G9._Done();this.Cn._Done();this.AbN._Done();C.H3._Done.call(
this);},_ReInit:function(){C.H3._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cd._ReInit();this.Ef._ReInit();this.AbP._ReInit();
this.G9._ReInit();this.Cn._ReInit();this.AbN._ReInit();this.Cd.T(A.aaR(A.acf.Ak7
));this.Cd.ArU(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.
Cd.ArV(A.aaR(A.acf.Akn));this.Ef.T(A.aaR(A.acf.Uo));this.AbP.T(A.aaR(A.acf.GN));
this.G9.T(A.aaR(A.acf.Arz));this.Cn.T(A.aaR(A.acf.Aeh));this.AbN.T(A.aaR(A.acf.AgM
));},_Mark:function(D){var B;C.H3._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G9)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbN
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Act={FN:null,AW:null,A_:0,H1:function(G){C.Ds.H1.call(this,G);if(!this.A_)this.
FW(this);else this.Hf(this);},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hy.Z(false
);this.H9.Z(false);if(this.A_===1){this.Bb(this.AW);if(this.Hn){this.AW.FP(A.jb.
CK);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.
Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hn)this.AW.FP(A.jb.CK);
else this.AW.FP(A.jb.CU);this.Bb(null);}},Bx:function(E){var F;var BP=this.AM;C.
Ds.Bx.call(this,E);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Uq,this.BbG],0);},DK:function(G){var F;if(!
this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkS((F=
this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},Hf:function(G){this.Ex(0
);},Ex:function(EO){var F;if(!this.A_)this.FN.AjC((F=this.N,F[1].call(F[0])));this.
A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.A_=1;if(this.A_===1)this.AW.
SV(7);this.DK(this);this.Am();},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.ARq._Init.call(this.AW={I:this},0);this.__proto__=C.Act;this.H(U4);this.EV(999999
);this.V.R(Atj);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H9.Z(false);this.AW.H(AYC
);this.AW.ATF(6);this.J(this.AW,0);this.AW.Au([this,this.Uq,this.BbG]);this.FN=A.
_NewObject(C.Aew,0);},_Done:function(){this.__proto__=C.Ds;this.AW._Done();C.Ds.
_Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.AW._ReInit();
},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Du:function(){return 4;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AuS={Y:null,QT:null,N4:null,Ee:null,PN:null,PK:null,PL:null,Ay:null,Ge:null,
ReasonOfLeaving:null,AhD:null,Nc:0,AmP:false,ACu:true,AOH:false,Aso:false,Init:function(
aArg){A.zX([this,this.A92],[this,this.A9s,this.ATI],0);this.Aht(A._GetAutoObject(
A.Device.Helper).W.AhW(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A92],this);},DF:function(G){
var B;var Fh=0;var X=this.AV;switch(this.Cq.CP){case 6:Fh=2;break;case 7:Fh=7;break;
case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(X,Fh,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HK(X,true,null,null);},Al7:function(G
){A._GetAutoObject(C.A7).FB();},ApR:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(A.
Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmP){A._GetAutoObject(A.Device.Helper).W.Ae6(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A7q(A._GetAutoObject(A.Device.Helper).Dv(),this.Aso);}A._GetAutoObject(A.Device.
Helper).W.AFW(this.ReasonOfLeaving.C7((F=this.N4.Q,F[1].call(F[0]))));if(this.ACu
)A._GetAutoObject(A.Device.Helper).W.P0(0);if(this.Aso)A._GetAutoObject(A.Device.
Helper).W.AwV(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);this.A$Y();},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},Aht:function(E){
if(this.Nc===E)return;this.Nc=E;},Anv:function(){return this.Nc;},BfR:function(G
){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.PopupState===
4)||(Ar.PopupState===3)){A._GetAutoObject(C.A7).FB();A._GetAutoObject(A.Device.Helper
).Asz();}},A92:function(G){switch(this.Aso){case false:this.Ee.T(A.aaR(A.acf.AWb
));break;case true:this.Ee.T(A.aaR(A.acf.Brp));break;default:;}},ATI:function(E){
if(this.Aso===E)return;this.Aso=E;},A9s:function(){return this.Aso;},A$Y:function(
){A._GetAutoObject(A.Device.Device).AY(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfR]);},Bm$:function(E){if(this.AOH===E)return;
this.AOH=E;},Blv:function(){return this.AOH;},BmB:function(E){if(this.ACu===E)return;
this.ACu=E;},Blk:function(){return this.ACu;},BmJ:function(E){if(this.AmP===E)return;
this.AmP=E;},Blr:function(){return this.AmP;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afq._Init.call(this.QT={I:this
},0);C.AsI._Init.call(this.N4={I:this},0);C.AkW._Init.call(this.Ee={I:this},0);C.
Afq._Init.call(this.PN={I:this},0);C.Afq._Init.call(this.PK={I:this},0);C.Afq._Init.
call(this.PL={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Ge._Init.call(this.
Ge={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
AhD._Init.call(this.AhD={I:this},0);this.__proto__=C.AuS;var B;this.N.Z(true);this.
N.CS(A.aaR(A.acf.Unregister));this.Dr(C.IP);this.Y.H(Fe);this.Y.JZ(1);this.QT.H(
Aao);this.QT.Aj(true);this.QT.T(A.aaR(A.acf.AmP));this.QT.Bi(true);this.QT.ZF(false
);this.QT.Gb(-1);this.QT.EV(1);this.N4.H(U7);this.N4.Aj(true);this.N4.T(A.aaR(A.
acf.ReasonOfLeaving));this.N4.Bi(true);this.N4.ZF(false);this.Ee.H(Ah1);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AWb));this.Ee.Bi(false);this.Ee.Gb(1000);this.Ee.
EV(999000);this.PN.H(U7);this.PN.Aj(true);this.PN.T(A.aaR(A.acf.A5A));this.PN.Bi(
true);this.PN.ZF(false);this.PN.Bx(1);this.PN.Gb(-1);this.PN.EV(1);this.PK.H(Aao
);this.PK.Aj(true);this.PK.T(A.aaR(A.acf.A5B));this.PK.Bi(true);this.PK.ZF(false
);this.PK.Bx(1);this.PK.Gb(-1);this.PK.EV(1);this.PL.H(U7);this.PL.Aj(true);this.
PL.T(A.aaR(A.acf.A6b));this.PL.Bi(true);this.PL.ZF(false);this.PL.Bx(1);this.PL.
Gb(-1);this.PL.EV(1);this.Ay.H(Ayu);this.Ge.Au(0);this.J(this.Y,0);this.J(this.QT
,0);this.J(this.N4,0);this.J(this.Ee,0);this.J(this.PN,0);this.J(this.PK,0);this.
J(this.PL,0);this.J(this.Ay,0);this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fj
];this.QT.Au([B=this.Ge,B.B$,B.Cc]);this.QT.CL(this.Ge);this.QT.AkD([this,this.Blr
,this.BmJ]);this.N4.Gt([this,this.D_,this.GT]);this.N4.L5([B=this.N4,B.FW]);this.
N4.L8(A.aaL(A.ach.Edit));this.N4.Au([B=this.ReasonOfLeaving,B.B$,B.Cc]);this.N4.
CL(this.ReasonOfLeaving);this.N4.AnD(this.AhD);this.Ee.Au([this,this.Anv,this.Aht
]);this.PN.Au([B=this.Ge,B.B$,B.Cc]);this.PN.CL(this.Ge);this.PN.AkD([this,this.
Blv,this.Bm$]);this.PK.Au([B=this.Ge,B.B$,B.Cc]);this.PK.CL(this.Ge);this.PK.AkD([
this,this.A9s,this.ATI]);this.PL.Au([B=this.Ge,B.B$,B.Cc]);this.PL.CL(this.Ge);this.
PL.AkD([this,this.Blk,this.BmB]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QT._Done();this.N4._Done();this.Ee._Done();this.PN._Done(
);this.PK._Done();this.PL._Done();this.Ay._Done();this.Ge._Done();this.ReasonOfLeaving.
_Done();this.AhD._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QT._ReInit();this.N4._ReInit();this.Ee._ReInit(
);this.PN._ReInit();this.PK._ReInit();this.PL._ReInit();this.Ay._ReInit();this.Ge.
_ReInit();this.ReasonOfLeaving._ReInit();this.AhD._ReInit();this.N.CS(A.aaR(A.acf.
Unregister));this.QT.T(A.aaR(A.acf.AmP));this.N4.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AWb));this.PN.T(A.aaR(A.acf.A5A));this.PK.T(A.aaR(A.acf.A5B
));this.PL.T(A.aaR(A.acf.A6b));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhD)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AU$={AjM:null,PC:null,Avf:AYD,Bl:function(aSize){C.Iv.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BU.H([0,40,aSize[0],80]);this.Hy.H([0,this.BU.M[1],40,
this.BU.M[3]]);this.H9.H([aSize[0]-40,this.BU.M[1],aSize[0],this.BU.M[3]]);},Ai:
function(Ae){var F;C.Iv.Ai.call(this,Ae);this.PC.L(this.V.AQ);if(!!this.AjM){if((
F=this.AjM,F[1].call(F[0]))===-1)this.PC.R(this.Avf+AIq);else this.PC.R((this.Avf+
CR)+(F=this.AjM,F[1].call(F[0])).toFixed());}else this.PC.R(this.Avf);},A3L:function(
G){this.Am();},BmT:function(E){if(A.aaZ(this.AjM,E))return;if(!!this.AjM)A.z$([this
,this.A3L],this.AjM,0);this.AjM=E;if(!!E)A.zX([this,this.A3L],E,0);if(!!E)A.pe([
this,this.A3L],this);},A_u:function(E){if(this.Avf===E)return;this.Avf=E;this.Am(
);},_Init:function(aArg){C.Iv._Init.call(this,aArg);C.CG._Init.call(this.PC={I:this
},0);this.__proto__=C.AU$;this.H(AYE);this.V.H(AYF);this.V.A6(0x12);this.PC.H(AYG
);this.PC.A6(0x12);this.PC.L(A.jb.Bm);this.J(this.PC,0);this.PC.S(A.aaL(A.fl.Af)
);this.PC.A0(A.aaL(A.fl.Ak));this.PC.Cr(null);},_Done:function(){this.__proto__=
C.Iv;this.PC._Done();C.Iv._Done.call(this);},_ReInit:function(){C.Iv._ReInit.call(
this);this.PC._ReInit();this.PC.S(A.aaL(A.fl.Af));this.PC.A0(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Iv._Mark.call(this,D);if((B=this.AjM)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMs={Y:null,JU:null,Sy:null,Ay:null,AqE:2500,ANI:24,DF:function(G){var B;var
Fh=0;var X=this.AV;switch(this.Cq.CP){case 6:Fh=2;break;case 7:Fh=7;break;case 4:
Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(X,Fh,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HK(X,true,null,null);},Al7:function(G){A._GetAutoObject(
C.A7).FB();},ApR:function(G){},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1)
)[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},BmE:function(
E){if(this.AqE===E)return;this.AqE=E;},Blm:function(){return this.AqE;},BmF:function(
E){if(this.ANI===E)return;this.ANI=E;},Bln:function(){return this.ANI;},Bla:function(
G){var F,Cu;this.JU.BU.L(this.JU.V.AQ);if(!!this.JU.Q)this.JU.BU.R((((String.fromCharCode(((
F=this.JU.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Ald)+String.fromCharCode(((
Cu=this.JU.Q,Cu[1].call(Cu[0]))+10000).toFixed().charCodeAt(2)||0))+CR)+this.JU.
AHn);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Iv._Init.call(this.JU={I:this},0);C.Iv._Init.call(this.Sy={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMs;this.N.Z(true);this.
Dr(C.IP);this.Y.H(Fe);this.Y.JZ(1);this.JU.H(Ah1);this.JU.Aj(true);this.JU.T(A.aaR(
A.acf.AqE));this.JU.Bi(false);this.JU.Gb(0);this.JU.EV(5000);this.JU.IW(A.aaR(A.
acf.Af_));this.JU.Jg(A.aaR(A.acf.Af_));this.JU.ATx(100);this.Sy.H(U7);this.Sy.Aj(
true);this.Sy.T(A.aaR(A.acf.A$x));this.Sy.Bi(true);this.Sy.Bx(24);this.Sy.Gb(10);
this.Sy.EV(33);this.Sy.IW(AYH);this.Ay.H(Ayu);this.J(this.Y,0);this.J(this.JU,0);
this.J(this.Sy,0);this.J(this.Ay,0);this.N.C3(A.aaL(A.ach.YH));this.Y.Em=[this,this.
Fj];this.JU.Au([this,this.Blm,this.BmE]);this.JU.A_4([this,this.Bla]);this.Sy.Au([
this,this.Bln,this.BmF]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JU._Done();this.Sy._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JU._ReInit();this.Sy._ReInit();this.
Ay._ReInit();this.JU.T(A.aaR(A.acf.AqE));this.JU.IW(A.aaR(A.acf.Af_));this.JU.Jg(
A.aaR(A.acf.Af_));this.Sy.T(A.aaR(A.acf.A$x));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.ArB={EaseOfDelivery:null,BirthType:null,Cd:null,Dp:null,Dj:null,Cn:null,Ee:null
,G9:null,Ln:null,Nc:0,L1:false,Init:function(aArg){A.zX([this,this.GH],this.Cd.Q
,0);A.zX([this,this.GH],this.Dp.Q,0);A.zX([this,this.AAQ],this.Db.Q,0);A.zX([this
,this.Bfo],this.Cn.Dm,0);A.zX([this,this.Bfi],this.C$.Q,0);A.zX([this,this.Auc],
this.Cd.Q,0);A.zX([this,this.Auc],this.Dp.Q,0);A.pe([this,this.AAQ],this);A.pe([
this,this.GH],this);A.pe([this,this.Bfo],this);A.pe([this,this.Bfi],this);A.pe([
this,this.Auc],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.E7();A.
_GetAutoObject(C.A7).FB();},Agj:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.B0.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhI
){var AlR=A._GetAutoObject(A.Device.Helper).AhI.AO5();A._GetAutoObject(A.Device.
Helper).W.Ab_(AlR);A._GetAutoObject(A.Device.Helper).W.AnI(AlR);}var Alx=A._GetAutoObject(
A.Device.Helper).A14(A._GetAutoObject(A.Device.Helper).W,(F=this.Dj.H4.Hv,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alx){this.Ai2();A.pe([this,this.
Bxh],this);}else A._GetAutoObject(A.Device.Helper).AKx(A._GetAutoObject(A.Device.
Helper).W,Alx,(F=this.Dj.H4.Hv,F[1].call(F[0])),0,[this,this.ApM]);},Aut:function(
){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.AD5));this.N.Ca=[this,this.Ay8];},Ai2:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);var Md=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SW(Md);var Beh=false;if(A._GetAutoObject(
A.Device.Helper).Am_()){if(A._GetAutoObject(A.Device.Device).Bt.Lm()){Beh=true;A.
_GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(A.Device.Device).Bt.
HM().toFixed(),0,null);}else{var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7R()&&(Beh===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}var I3=null;switch((F=this.
Dj.H4.Hv,F[1].call(F[0]))){case 3:I3=[B=A._GetAutoObject(A.Device.Device),B.Awl,
B.Ay0];break;case 2:I3=[B=A._GetAutoObject(A.Device.Device),B.Awm,B.Ay1];break;case
4:case 5:I3=[B=A._GetAutoObject(A.Device.Device),B.Anx,B.AoE];break;default:;}if(
!!I3)switch((F=this.Dj.Kr.V2,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).Bas(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjO(),this.Dp.AjQ());},Ap_:function(G){A.
_GetAutoObject(C.A7).FB();},Bxh:function(s){this.Ap_(s);},AAK:function(G){A._GetAutoObject(
C.A7).Cb(49);},Aht:function(E){if(this.Nc===E)return;this.Nc=E;A.abo([this,this.
Anv,this.Aht],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am_())this.
C$.Z(true);else this.C$.Z(false);if(A._GetAutoObject(A.Device.Helper).A7R())this.
Ee.Z(true);else this.Ee.Z(false);if(this.L1){this.Dp.Z(false);this.Cd.T(A.aaR(A.
acf.ACW));this.Cd.AFk(A.aaL(A.ach.Aff));}else{this.Dp.Z(true);this.Cd.T(A.aaR(A.
acf.Ak7));this.Cd.AFk(null);}},AAQ:function(G){A._GetAutoObject(A.Device.Helper).
AVV(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.L1);},Bfo:function(G){A.pe([this,this.Bhi],this);},Bfi:function(G){A.pe([this
,this.Bhi],this);},Bhi:function(G){var F,Cu,Tk;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahw(A._GetAutoObject(A.Device.Helper
).AhW(A._GetAutoObject(A.Device.Helper).Abz((F=this.B0.Q,F[1].call(F[0]))),(Cu=this.
Cn.Dm,Cu[1].call(Cu[0])),2,(Tk=this.B0.Q,Tk[1].call(Tk[0]))));break;case 2:this.
Ee.Ahw(A._GetAutoObject(A.Device.Helper).AhW(this.KP,(F=this.Cn.Dm,F[1].call(F[0
])),2,(Cu=this.B0.Q,Cu[1].call(Cu[0]))));break;default:;}},ApM:function(G){var F;
var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id
){case 22:case 21:switch((F=this.Dj.H4.Hv,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JN(this.Dj);break;case 0:this.JN(this.Dp);break;case 1:this.JN(this.
Cd);break;default:throw new Error(AyF+(F=this.Dj.H4.Hv,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JN(this.Dj);this.JN(this.Dp);}break;case 25:case 42:{this.
JN(this.Dj);this.JN(this.Cd);}break;case 41:break;default:A.ab5("%s%e",Ath,Ar.Id
);}},ApN:function(G){var F;C.H3.ApN.call(this,G);var Ao1=0;switch((F=this.B0.Q,F[
1].call(F[0]))){case 0:case 2:Ao1=A._GetAutoObject(A.Device.Device).AdU;break;case
1:Ao1=730;break;default:A.ab5("%s%e",Alh,(F=this.B0.Q,F[1].call(F[0])));}(F=this.
Cn.Dm,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmN(Ao1)));(F=this.C$.Q,F[2].call(F[0],this.C$.An2));this.Ee.Ahw(A._GetAutoObject(
A.Device.Helper).W.AhW(1));},Ae5:function(E){if(this.L1===E)return;this.L1=E;A.abo([
this,this.Awo,this.Ae5],0);},Auc:function(G){var F,Cu,Tk;this.Ae5(((F=this.Cd.Q,
F[1].call(F[0]))===(Cu=this.Dp.Q,Cu[1].call(Cu[0])))&&!!(Tk=this.Cd.Q,Tk[1].call(
Tk[0])));A.pe([this,this.GH],this);},Anv:function(){return this.Nc;},Awo:function(
){return this.L1;},_Init:function(aArg){C.H3._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Av7._Init.call(this.Cd={I:this},0);C.Rd._Init.call(this.Dp={I:this}
,0);C.AGW._Init.call(this.Dj={I:this},0);C.SX._Init.call(this.Cn={I:this},0);C.AkW.
_Init.call(this.Ee={I:this},0);C.BX._Init.call(this.G9={I:this},0);C.BX._Init.call(
this.Ln={I:this},0);this.__proto__=C.ArB;var B;this.Dr(C.ADx);this.CH.H(AcT);this.
Cd.H(Aor);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.ArU(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.aaR(A.acf.Akn));this.
Dp.H(Aor);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uo));this.Dp.Ar_(false);this.Dj.
H(AYI);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.GN));this.Dj.Bx(0);this.Cn.H(AcT);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeh));this.Cn.AFX(true);this.Ee.H(AcT);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.Nc));this.Ee.Gb(1000);this.Ee.EV(999000);this.
G9.H(AcT);this.G9.Aj(true);this.G9.T(A.aaR(A.acf.Arz));this.Ln.H(AcT);this.Ln.Aj(
true);this.Ln.T(A.aaR(A.acf.AgM));this.J(this.Cd,-3);this.J(this.Dp,-3);this.J(this.
Dj,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G9,-1);this.J(this.Ln,-
1);this.EaseOfDelivery.L6(A._GetAutoObject(A.Device.Helper).W);this.BirthType.L6(
A._GetAutoObject(A.Device.Helper).W);this.Cd.AR=[this,this.AcV];this.Cd.L5([this
,this.AcV]);this.Cd.L8(A.aaL(A.ach.Aff));this.Cd.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArJ,B.P0]);this.Cd.OU([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_
]);this.Cd.PY([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.Cd.Uu([B=A._GetAutoObject(
A.Device.Device),B.Anu,B.AoD]);this.Cd.Ae5([this,this.Awo,this.Ae5]);this.Dp.Gt([
this,this.D_,this.GT]);this.Dp.L5([this,this.AcV]);this.Dp.L8(A.aaL(A.ach.Aff));
this.Dp.Uw([B=this.Gender.Animal,B.WJ,B.J0]);this.Dp.OU([B=A._GetAutoObject(A.Device.
Device),B.Ur,B.U_]);this.Dp.PY([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);
this.Dp.Uu([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoD]);this.Dp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Any,B.Nr]);this.Dp.AnA([B=this.AnimalType.Animal,B.PX,B.EC]
);this.Dj.Gt([this,this.D_,this.GT]);this.Dj.L5([B=this.Dj,B.FW]);this.Dj.L8(A.aaL(
A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArK,B.SP]);this.
Dj.A95(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gt([this,this.D_,this.GT]);this.
Cn.L5([B=this.Cn,B.FW]);this.Cn.L8(A.aaL(A.ach.Edit));this.Cn.Acb([B=A._GetAutoObject(
A.Device.Helper).W,B.Awi,B.Q8]);this.Ee.Au([this,this.Anv,this.Aht]);this.G9.Au([
B=this.BirthType,B.B$,B.Cc]);this.G9.CL(this.BirthType);this.Ln.Au([B=this.EaseOfDelivery
,B.B$,B.Cc]);this.Ln.CL(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.H3;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cd._Done(
);this.Dp._Done();this.Dj._Done();this.Cn._Done();this.Ee._Done();this.G9._Done(
);this.Ln._Done();C.H3._Done.call(this);},_ReInit:function(){C.H3._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cd._ReInit();this.
Dp._ReInit();this.Dj._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G9._ReInit(
);this.Ln._ReInit();this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.ArU(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.aaR(A.acf.Akn));this.Dp.T(
A.aaR(A.acf.Uo));this.Dj.T(A.aaR(A.acf.GN));this.Cn.T(A.aaR(A.acf.Aeh));this.Ee.
T(A.aaR(A.acf.Nc));this.G9.T(A.aaR(A.acf.Arz));this.Ln.T(A.aaR(A.acf.AgM));},_Mark:
function(D){var B;C.H3._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ln)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHv={Ia:null,AhN:null,AgX:null,AhO:null,AgY:null,AnimalType:null,Background:
null,N5:null,Rn:null,V:null,T1:null,YK:null,AbK:null,PW:null,DL:A.jV,AGY:true,CQ:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Aoa();this.
Ax3();},Aoa:function(){var F,Cu;var LK=0;var Aml=0;var AlK=0;var Ih=0;if((((!!this.
AhN&&!!this.AhO)&&!!this.AgX)&&!!this.AgY)&&!!this.AnimalType){Aml=(F=this.AhN,F[
1].call(F[0]));AlK=(F=this.AgX,F[1].call(F[0]));LK=A._GetAutoObject(A.Device.Helper
).Mf((F=this.AhO,F[1].call(F[0])),(Cu=this.AgY,Cu[1].call(Cu[0])));Ih=(F=this.AnimalType
,F[1].call(F[0]));}var Lb=A.jb.Text;var Azq=A.jb.CU;if(!!LK){var ALM=A._GetAutoObject(
A.acj.DU).AlE(LK,Aml,AlK);Azq=A._GetAutoObject(A.acj.DU).Az5(ALM,Ih);Lb=A._GetAutoObject(
A.acj.DU).Az7(ALM,Ih);}this.Background.L(Azq);this.T1.L(Lb);this.Rn.L(Lb);this.N5.
L(Lb);this.AbK.L(Lb);if(Lb===A.jb.Bm)this.YK.L(Lb);else this.YK.L(A.jb.CK);this.
V.L(Lb);this.PW.L(Lb);},Ax3:function(){var F,Cu;var LK=0;var Aml=0;var AlK=0;if(((
!!this.AhN&&!!this.AhO)&&!!this.AgX)&&!!this.AgY){Aml=(F=this.AhN,F[1].call(F[0]
));AlK=(F=this.AgX,F[1].call(F[0]));LK=A._GetAutoObject(A.Device.Helper).Mf((F=this.
AhO,F[1].call(F[0])),(Cu=this.AgY,Cu[1].call(Cu[0])));}if(!!LK){var ALM=A._GetAutoObject(
A.acj.DU).AlE(LK,Aml,AlK);this.Rn.R(A._GetAutoObject(A.Device.Converter).Td(ALM,
2,true));this.N5.Z(true);this.Rn.Z(true);this.PW.Z(false);}else{this.N5.Z(false);
this.Rn.Z(false);this.PW.Z(true);}this.T1.R(this.BzU(AlK-Aml,LK));this.AbK.Z(this.
AGY);this.YK.Z(this.AGY);this.N5.R(A._GetAutoObject(A.acj.DU).AaE());},BzU:function(
A1J,Ah9){var B;if(Ah9<0){A.ab5("%s",AYJ);return A.jV;}var Iz=(AYK+A._GetAutoObject(
A.acj.DU).Af7())+CR;var FX=A._GetAutoObject(A.Device.Converter).Ala(A1J);if(!A1J
)FX=A.abU(FX,AYL,0);else if(A1J>0)FX=A.abU(FX,AIr,0);Iz=this.Bgy(Iz,AYM,FX);if(Ah9===
1)Iz=Iz+A.aaR(A.acf.Bj4);else{Iz=Iz+A.aaR(A.acf.Bj5);Iz=this.Bgy(Iz,AYN,Ah9.toFixed(
));}return Iz;},Bgy:function(aString,BcM,Byh){if(aString===A.jV){A.ab5("%s",AYO);
return A.jV;}var A3s=aString.indexOf(BcM,0);if(A3s>=0){aString=A.ab1(aString,A3s
,BcM.length);aString=A.abU(aString,Byh,A3s);}return aString;},ATY:function(E){if(
A.aaZ(this.AhN,E))return;if(!!this.AhN)A.z$([this,this.C5],this.AhN,0);this.AhN=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmQ:function(
E){if(A.aaZ(this.AgX,E))return;if(!!this.AgX)A.z$([this,this.C5],this.AgX,0);this.
AgX=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},ATZ:function(
E){if(A.aaZ(this.AhO,E))return;if(!!this.AhO)A.z$([this,this.C5],this.AhO,0);this.
AhO=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmR:function(
E){if(A.aaZ(this.AgY,E))return;if(!!this.AgY)A.z$([this,this.C5],this.AgY,0);this.
AgY=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(
G){this.Am();},T:function(E){if(this.DL===E)return;this.DL=E;this.V.R(E);},A_3:function(
E){if(this.AGY===E)return;this.AGY=E;this.Am();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C5],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.N5={I:this},0);A.acg.Text._Init.call(this.Rn={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.T1={I:this},0);A.acg.
Ap._Init.call(this.YK={I:this},0);A.acg.Ap._Init.call(this.AbK={I:this},0);C.CG.
_Init.call(this.PW={I:this},0);this.__proto__=C.AHv;this.H(AfH);this.Background.
A1(0x3F);this.Background.H(AfH);this.N5.H(AYP);this.N5.R(A._GetAutoObject(A.acj.
DU).AaE());this.N5.A6(0x9);this.N5.L(A.jb.Text);this.Rn.H(AYQ);this.Rn.A6(0x14);
this.Rn.R(A.aaR(A.acu.Akl));this.Rn.L(A.jb.Text);this.V.A1(0x1D);this.V.H(AYR);this.
V.R(A.aaR(A.acf.AuI));this.V.A6(0x12);this.V.L(A.jb.Text);this.T1.H(Aan);this.YK.
A1(0x14);this.YK.H(AIs);this.YK.Cw(1);this.AbK.A1(0x14);this.AbK.H(AIs);this.AbK.
Cw(0);this.PW.H(AYS);this.PW.R(A.aaR(A.acf.A5h));this.J(this.Background,0);this.
J(this.N5,0);this.J(this.Rn,0);this.J(this.V,0);this.J(this.T1,0);this.J(this.YK
,0);this.J(this.AbK,0);this.J(this.PW,0);this.N5.S(A.aaL(A.fl.EK));this.N5.A0(A.
aaL(A.fl.Af));this.N5.Cr(A.aaL(A.fl.HL));this.Rn.S(A.aaL(A.fl.Aev));this.V.S(A.aaL(
A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));this.T1.S(A.aaL(A.
fl.Af));this.T1.A0(A.aaL(A.fl.Ak));this.T1.Cr(A.aaL(A.fl.Bh));this.YK.Ax(A.aaL(A.
ach.AB5));this.AbK.Ax(A.aaL(A.ach.AB5));this.Ia=A._NewObject(A.Device.Rating,0);
this.PW.S(A.aaL(A.fl.Af));this.PW.A0(A.aaL(A.fl.Ak));this.PW.Cr(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N5._Done(
);this.Rn._Done();this.V._Done();this.T1._Done();this.YK._Done();this.AbK._Done(
);this.PW._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N5._ReInit();this.Rn._ReInit();this.V.
_ReInit();this.T1._ReInit();this.YK._ReInit();this.AbK._ReInit();this.PW._ReInit(
);this.Rn.R(A.aaR(A.acu.Akl));this.V.R(A.aaR(A.acf.AuI));this.PW.R(A.aaR(A.acf.A5h
));this.N5.S(A.aaL(A.fl.EK));this.N5.A0(A.aaL(A.fl.Af));this.N5.Cr(A.aaL(A.fl.HL
));this.Rn.S(A.aaL(A.fl.Aev));this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));
this.V.Cr(A.aaL(A.fl.Bh));this.T1.S(A.aaL(A.fl.Af));this.T1.A0(A.aaL(A.fl.Ak));this.
T1.Cr(A.aaL(A.fl.Bh));this.PW.S(A.aaL(A.fl.Af));this.PW.A0(A.aaL(A.fl.Ak));this.
PW.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhN)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgY)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AWc={Animal:null,Rating:null,Cq:null,AD:null,AZ:
0,Ho:function(G){var B;if(!this.Animal||!this.Rating)return;var Gh=this.AD.G8;var
CA=(C.AHv.isPrototypeOf(B=this.AD.Cj)?B:null);if(!CA)return;CA.EC([B=this.Animal
,B.PX,B.EC]);CA.BmQ([B=A._GetAutoObject(A.Device.Device),B.AE2,B.AI_]);CA.BmR([B=
this.Rating,B.A9J,B.OnSetTimestamp]);switch(Gh%this.AZ){case 1:{CA.ATY([B=this.Animal
,B.A9i,B.AFD]);CA.ATZ([B=this.Animal,B.A9K,B.AF7]);CA.T(A.aaR(A.acf.AuI));}break;
default:if(this.Animal.Aro()){CA.ATY([B=this.Animal,B.ASQ,B.AwQ]);CA.ATZ([B=this.
Animal,B.AS7,B.Axg]);CA.T(A.aaR(A.acf.AL_));}else{CA.ATY([B=this.Animal,B.ASQ,B.
AwQ]);CA.ATZ([B=this.Animal,B.AS7,B.Axg]);CA.T(A.aaR(A.acf.BhA));}}if(this.AZ>1)
CA.A_3(true);else CA.A_3(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GO
]));},DF:function(G){if(this.AZ>0)switch(this.Cq.CP){case 6:this.CF(this);break;
case 7:this.Ca(this);break;default:this.Cq.Mw=true;}},L6:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.JD(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.JD(1);else{this.JD(2);this.AD.GU(1);this.
AD.HK(this.AD.Gu,true,null,null);}if(this.AZ>0)this.AD.AbM(0,this.AZ-1);},AkE:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AZ>0)this.AD.AbM(0,this.AZ-1);
},CF:function(G){if(this.AD.Gu>0)this.AD.GU(this.AD.Gu-1);else this.AD.GU(this.AZ-
1);this.AD.HK(this.AD.Gu,true,null,null);},Ca:function(G){if(this.AD.Gu<(this.AZ-
1))this.AD.GU(this.AD.Gu+1);else this.AD.GU(0);this.AD.HK(this.AD.Gu,true,null,null
);},JD:function(E){if(this.AZ===E)return;this.AZ=E;this.AD.JD(this.AZ);A.abo([this
,this.ArG,this.JD],0);},ArG:function(){return this.AZ;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AWc;this.H(AfH);this.Cq.Filter=147;this.
AD.A1(0x3F);this.AD.H(AfH);this.AD.N8(C.AHv);this.AD.Ae9(160);this.AD.GU(0);this.
AD.JD(2);this.J(this.AD,0);this.Cq.BG=[this,this.DF];this.Cq.D1=[this,this.DF];this.
AD.Ho=[this,this.Ho];},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cq._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bl:function(aSize){C.Co.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((
Ae&0x20)===0x20);var GE=this.Bo.Bw;var FT=A.jb.CK;var GZ=A.jb.Text;if(this.Hn){FT=
A.jb.CU;GZ=A.jb.Text;}if(!Hg){this.Background.L(A.jb.CU);this.V.L(A.jb.CK);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}this.LN=Hg;
this.KM=Fv;this.Qy=GE;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(K4);this.V.H(BD);this.ZF(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeU={KQ:null,GK:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KQ.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KQ.
L(this.V.AQ);},Init:function(aArg){},Ab9:function(E){if(this.GK===E)return;this.
GK=E;this.KQ.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.call(
this.KQ={I:this},0);this.__proto__=C.AeU;this.H(K4);this.Background.H(K4);this.V.
H(AcQ);this.V.R(LB);this.KQ.H(I1);this.KQ.R(AYT);this.J(this.KQ,0);this.V.S(A.aaL(
A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(null);this.KQ.S(A.aaL(A.fl.Af));this.
KQ.A0(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KQ._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KQ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.KQ.S(A.aaL(
A.fl.Af));this.KQ.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Av7={ACy:null,Q:null,A3:null,AF:null,Io:null,L1:null,Ap:null,EM:null,AOk:A.jV
,AOl:A.jV,Bl:function(aSize){C.AeU.Bl.call(this,aSize);if(!this.ACy)this.KQ.H([].
concat(0,this.KQ.M.slice(1,4)));else this.KQ.H([].concat(this.Ap.M[2],this.KQ.M.
slice(1,4)));},Ai:function(Ae){var F,Cu,Tk;C.AeU.Ai.call(this,Ae);var Bdf=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apm)this.Ab9(this.AOk);else
this.Ab9(this.AOl);}else{this.Ab9(A._GetAutoObject(A.Device.Converter).Rl((F=this.
Q,F[1].call(F[0]))));if((((!!this.Io&&!!this.A3)&&!!this.AF)&&!!this.L1)&&(((F=this.
Io,F[1].call(F[0]))===1)||(!(Cu=this.Io,Cu[1].call(Cu[0]))&&(Tk=this.L1,Tk[1].call(
Tk[0])))))Bdf=true;}}this.EM.Z(Bdf);this.Ap.L(this.V.AQ);A.pe([this,this.Age],this
);},C5:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},AFk:function(E){if(this.ACy===E)return;this.ACy=E;this.
Ap.Ax(E);this.Bj$();},OU:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3)A.z$([
this,this.AaO],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.AaO],E,0);if(!!E)A.pe([
this,this.AaO],this);},PY:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaQ],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaQ],E,0);if(!!E)
A.pe([this,this.AaQ],this);},AaQ:function(G){this.Am();},AaO:function(G){this.Am(
);},Uu:function(E){if(A.aaZ(this.Io,E))return;if(!!this.Io)A.z$([this,this.Al5],
this.Io,0);this.Io=E;if(!!E)A.zX([this,this.Al5],E,0);if(!!E)A.pe([this,this.Al5
],this);},Al5:function(G){this.Am();},Age:function(G){var F,Cu;if((!this.Io||!this.
A3)||!this.AF)return;var A2$=this.KQ.Afi([(this.KQ.String.length-(F=this.AF,F[1].
call(F[0])))-(Cu=this.A3,Cu[1].call(Cu[0])),0]);var A4u=this.KQ.Afi([this.KQ.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABw=this.KQ.Dd(0x0);this.EM.H([A2$[0]-
1,ABw[1],A4u[0]+1,ABw[3]]);},ArU:function(E){if(this.AOk===E)return;this.AOk=E;this.
Am();},ArV:function(E){if(this.AOl===E)return;this.AOl=E;this.Am();},Ae5:function(
E){if(A.aaZ(this.L1,E))return;if(!!this.L1)A.z$([this,this.A3S],this.L1,0);this.
L1=E;if(!!E)A.zX([this,this.A3S],E,0);if(!!E)A.pe([this,this.A3S],this);},A3S:function(
G){this.Am();},_Init:function(aArg){C.AeU._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.Av7;
this.Ap.H(AhY);this.EM.H(AYU);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KQ.Q9([this,this.Age]);},_Done:function(){this.__proto__=
C.AeU;this.Ap._Done();this.EM._Done();C.AeU._Done.call(this);},_ReInit:function(
){C.AeU._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeU._Mark.call(this,D);if((B=this.ACy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Io)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
L1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Im:0,AaN:4,Bel:false,Bet:true,Bes:false,Bdm:true,Bek:false
,Al_:function(G){C.Rc.Al_.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bej(
)){this.Im=A._GetAutoObject(A.Device.Helper).UH.Id;var AiB=A._GetAutoObject(A.Device.
Helper).ARz(this.Im);if(AiB)A._GetAutoObject(A.Device.Device).AY(107,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.A3W]);else{this.AaN=A._GetAutoObject(
A.Device.Helper).ARA(this.Im);var BeQ=false;if((this.AaN===3)||(this.AaN===2))BeQ=
A._GetAutoObject(A.Device.Helper).A7S(this.Im,A._GetAutoObject(A.Device.Helper).
W);if(BeQ)A._GetAutoObject(A.Device.Device).AY(21,true,A._GetAutoObject(A.Device.
Converter).Rl(this.Im),0,null);else switch(this.AaN){case 2:{var BN=A._GetAutoObject(
A.Device.Converter).Ax1(this.Im);A._GetAutoObject(A.Device.Device).AY(46,true,BN.
toFixed(),0,[this,this.A3W]);}break;case 3:case 1:case 0:case 4:this.A4K();break;
default:throw new Error(AIt+this.AaN.toFixed());}}}},Ew:function(G){A._GetAutoObject(
C.A7).FB();},AI$:function(s){this.Ew(s);},A4K:function(){if((this.AaN===3)||(this.
AaN===2)){if((this.Bdm&&(A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(
A.Device.Helper).W.NaisId!==this.Im)){A._GetAutoObject(A.Device.Device).AY(69,true
,A.jV,0,[this,this.A3W]);return;}else this.BCq();}if(this.Bel)A._GetAutoObject(A.
Device.Helper).Bo_(this.Im);A._GetAutoObject(A.Device.Helper).W.P0(this.Im);this.
Bek=true;this.BCs();this.Ew(this);},A3W:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!Ar)switch(Ar.Id){case 46:if(Ar.PopupState===4)this.
A4K();break;case 107:switch(Ar.PopupState){case 7:{this.Bel=true;this.A4K();}break;
case 8:this.Ew(this);break;default:;}break;case 69:if(Ar.PopupState===4)this.Ew(
this);break;default:A.ab5("%s%e",AIu,Ar.Id);}},BCq:function(){A._GetAutoObject(A.
Device.Helper).W.Nr(this.Im);if(this.Bes&&(A._GetAutoObject(A.Device.Converter).
S8(this.Im)===10)){var Bc1=Math.trunc((this.Im%1000000000000)/10000000000);if(!Bc1&&(
A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper
).W.EC(0);else if((Bc1===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2
))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BCs:function(){if(this.Bet){A._GetAutoObject(
A.Device.Helper).W.SP(A._GetAutoObject(A.Device.Helper).A5z(A._GetAutoObject(A.Device.
Device).Ak6,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device
).Ak6===1)A._GetAutoObject(A.Device.Helper).Bat();}},_Init:function(aArg){C.Rc._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Z(true);this.Dr(C.IP
);this.Number.R(A.aaR(A.acf.O0));this.Jl.H(AYV);this.IZ.H(U2);this.AkG(1);this.N.
CF=[this,this.AI$];this.N.C3(A.aaL(A.ach.E2));},_ReInit:function(){C.Rc._ReInit.
call(this);this.Number.R(A.aaR(A.acf.O0));},_className:"Application::SetTransponderScreen"
};C.ADJ={Gp:null,Lr:null,Ky:null,CQ:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EB.Ai.call(this,Ae);this.Lr.R(A._GetAutoObject(A.acj.DU
).Af7());this.Ky.R(A._GetAutoObject(A.acj.DU).AaE());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gp={I:this},0);A.acg.Text._Init.
call(this.Lr={I:this},0);A.acg.Text._Init.call(this.Ky={I:this},0);this.__proto__=
C.ADJ;this.Background.L(A.jb.Text);this.Gp.H(AYW);this.Gp.A6(0x11);this.Gp.R(A.aaR(
A.acf.Date));this.Gp.L(A.jb.Bm);this.Lr.H(AYX);this.Lr.A6(0x11);this.Lr.L(A.jb.Bm
);this.Ky.H(AYY);this.Ky.L(A.jb.Bm);this.J(this.Gp,0);this.J(this.Lr,0);this.J(this.
Ky,0);this.Gp.S(A.aaL(A.fl.Af));this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Gp._Done();this.Lr.
_Done();this.Ky._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Gp._ReInit();this.Lr._ReInit();this.Ky._ReInit();this.Gp.R(A.aaR(
A.acf.Date));this.Gp.S(A.aaL(A.fl.Af));this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(
A.fl.Af));this.CQ();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHz={Ms:null,Hr:null,If:null,AP:null,A$:null,FX:0,Ih:0,AiP:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hr.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hr.M[2]-1,0,this.Hr.M[2]+1,aSize[
1]]);this.Ms.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.If.H(this.Ms.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiP){this.If.R(Rs);this.If.L(A.jb.
Text);this.Ms.L(this.Background.AQ);}else{this.If.R(A._GetAutoObject(A.Device.Converter
).Td(this.FX,2,true));this.If.L(A._GetAutoObject(A.acj.DU).Az7(this.FX,this.Ih));
this.Ms.L(A._GetAutoObject(A.acj.DU).Az5(this.FX,this.Ih));}this.Hr.L(this.V.AQ);
},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var AlH=this.AX.Hw(
Ad,6);var Amd=this.AX.CC(Ad,8);if(this.Ht>0){var Bzr=this.AX.Hw(this.Ht-1,6);var
BB7=this.AX.CC(this.Ht-1,8);var LK=A._GetAutoObject(A.Device.Helper).Mf(Bzr,AlH);
if(!!LK){this.AiP=false;this.FX=A._GetAutoObject(A.acj.DU).AlE(LK,BB7,Amd);}else{
this.AiP=true;this.FX=0;}}else{this.AiP=true;this.FX=0;}this.T(A._GetAutoObject(
A.acj.KR).AC$(AlH));this.Hr.R(A._GetAutoObject(A.Device.Converter).Ala(Amd));this.
Ih=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Ms={I:this},0);A.acg.Text.
_Init.call(this.Hr={I:this},0);A.acg.Text._Init.call(this.If={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AHz;this.V.H(Pb);this.Ms.H(Atk);this.Hr.H(AIv);this.Hr.A6(0x12);this.Hr.R(Rq);
this.Hr.L(A.jb.Text);this.If.H(AIw);this.If.R(Rq);this.If.L(A.jb.Text);this.AP.H(
Aov);this.AP.L(A.jb.Bc);this.A$.H(Aow);this.A$.L(A.jb.Bc);this.J(this.Ms,0);this.
J(this.Hr,0);this.J(this.If,0);this.J(this.AP,0);this.J(this.A$,0);this.Hr.S(A.aaL(
A.fl.Af));this.If.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ms._Done();this.Hr._Done();this.If._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ms._ReInit(
);this.Hr._ReInit();this.If._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hr.
S(A.aaL(A.fl.Af));this.If.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,V$:null,AhU:null,S6:null
,KS:A.jV,CQ:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LK=
A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LK){var FX=A._GetAutoObject(
A.acj.DU).AlE(LK,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdP=A.aaR(A.acf.BhW);AdP=A._GetAutoObject(
A.Device.Helper).MN(AdP,Pc,A._GetAutoObject(A.Device.Converter).Td(FX,2,true));AdP=
A._GetAutoObject(A.Device.Helper).MN(AdP,Ayl,A._GetAutoObject(A.acj.DU).AaE());this.
S6.R(AdP);this.AhU.L(A._GetAutoObject(A.acj.DU).Az5(FX,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S6.L(A._GetAutoObject(A.acj.DU).Az7(FX,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S6.R(A.aaR(A.acf.AWa));this.AhU.L(A.jb.
ARk);this.S6.L(A.jb.Text);}},CD:function(G){var Fx=A._NewObject(A.Device.Filter,
0);var HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fx.CX(HZ);var Ac$=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac$.Initialize(8,2,0,true);Fx.CX(Ac$);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fx);this.AxH(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},AxH:function(G){this.Bg=A._NewObject(C.Gd,0);this.Bg.N8(C.AHz);this.Bg.H(Ayz
);this.Bg.Zy(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KS);this.J(this.
Bg,0);this.Bb(this.Bg);},Ant:function(G){A._GetAutoObject(C.A7).FB();},Dl:function(
E){if(this.KS===E)return;this.KS=E;if(!!this.Bg)this.Bg.Dl(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADJ._Init.call(this.V$={I:this},0);A.acg.AL._Init.
call(this.AhU={I:this},0);A.acg.Text._Init.call(this.S6={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cf);this.N.Z(true);this.Dr(C.IP);this.V$.H(
Qf);this.KS=A.aaR(A.acf.Akm);this.AhU.A1(0x1D);this.AhU.H(I1);this.S6.A1(0x1D);this.
S6.H(I1);this.S6.A6(0x12);this.S6.R(Rq);this.J(this.V$,0);this.J(this.AhU,0);this.
J(this.S6,0);this.N.CF=[this,this.Ant];this.N.C3(A.aaL(A.ach.E2));this.S6.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V$._Done();this.AhU._Done(
);this.S6._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V$._ReInit();this.AhU._ReInit();this.S6._ReInit();this.Dl(A.aaR(A.acf.Akm
));this.S6.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mo={DQ:null,AcD:null,AR1:11,EN:0,A5x:true,ACa:false,H1:function(G){if(A._GetAutoObject(
A.Device.Device).An.B_()>0)this.E5(4);else A._GetAutoObject(A.Device.Device).AY(
30,true,A.jV,0,null);},CD:function(G){if(this.DQ.AAf())this.DQ.Ac_();else if((this.
EN===2)&&A._GetAutoObject(A.Device.Helper).W.Aq6())this.E5(5);else this.E5(1);},
E4:function(G){if(this.EN===1)this.E5(0);},Ew:function(G){this.E5(0);A._GetAutoObject(
C.A7).FB();},BCI:function(){A._GetAutoObject(A.Device.Device).AhM();},A4Q:function(
){A._GetAutoObject(A.Device.Device).An4();},A98:function(E){if(this.ACa===E)return;
this.ACa=E;A.abo([this,this.Blf,this.A98],0);},E5:function(E){var B;if(this.EN===
E)return;this.EN=E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkR();A.zX([
this,this.AKM],[B=A._GetAutoObject(A.Device.Helper),B.ArH,B.AkF],0);A.z$([this,this.
AAH],[B=this.DQ,B.SK,B.E5],0);this.BCI();}break;case 3:{A.z$([this,this.AKM],[B=
A._GetAutoObject(A.Device.Helper),B.ArH,B.AkF],0);this.A4Q();this.BAD();}break;case
2:{A._GetAutoObject(A.Device.Helper).Asz();if(!A._GetAutoObject(A.Device.Device).
AutoRegistrationMode&&this.A5x)this.BCt();else this.BCw();}break;case 4:{A.z$([this
,this.AKM],[B=A._GetAutoObject(A.Device.Helper),B.ArH,B.AkF],0);this.A4Q();A._GetAutoObject(
A.Device.Helper).Asz();A.zX([this,this.Bfz],[B=A._GetAutoObject(A.Device.Device)
,B.Awt,B.Ay5],0);A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(this.AR1);}
break;case 5:this.BgU();break;case 6:{A.zX([this,this.AAH],[B=this.DQ,B.SK,B.E5]
,0);this.DQ.Ac_();}break;case 0:{A.z$([this,this.AKM],[B=A._GetAutoObject(A.Device.
Helper),B.ArH,B.AkF],0);this.A4Q();}break;default:throw new Error(AyG);}A.abo([this
,this.SK,this.Bw7],0);},Bw7:function(Aq){this.E5(Aq);},AKM:function(G){if(!!A._GetAutoObject(
A.Device.Helper).UH){if(this.EN===1)this.E5(3);else A.ab5("%s%e",AYZ,this.EN);}else
A.ab5("%s",AIx);},BCt:function(){A._GetAutoObject(A.Device.Device).AY(13,true,A.
_GetAutoObject(A.Device.Helper).Ak8(A._GetAutoObject(A.Device.Helper).UH.Id).toFixed(
),0,[this,this.BAS]);},BAS:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){if(this.Bdq(false
))A._GetAutoObject(C.A7).Cb(31);else{A._GetAutoObject(A.Device.Helper).AkR();this.
E5(1);}}else if(!!Ar&&(Ar.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkR(
);this.E5(1);}},Bdq:function(Ai2){if(A._GetAutoObject(A.Device.Device).An.Lm()){
A._GetAutoObject(A.Device.Device).AY(41,true,A._GetAutoObject(A.Device.Device).An.
HM().toFixed(),0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gs();A.
_GetAutoObject(A.Device.Helper).Aqo(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(
A.Device.Helper).W.P0(A._GetAutoObject(A.Device.Helper).UH.Id);if(!!A._GetAutoObject(
A.Device.Helper).AhI){var AlR=A._GetAutoObject(A.Device.Helper).AhI.AO5();A._GetAutoObject(
A.Device.Helper).W.Ab_(AlR);A._GetAutoObject(A.Device.Helper).W.AnI(AlR);}if(A._GetAutoObject(
A.Device.Helper).ARA(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nr(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SP(A._GetAutoObject(A.Device.Helper).BhL(A._GetAutoObject(A.Device.
Device).AgC,A._GetAutoObject(A.Device.Helper).W));if(Ai2){A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var Md=A._GetAutoObject(A.Device.
Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SW(Md);if(A._GetAutoObject(A.Device.Helper).Am_()){if(A._GetAutoObject(A.
Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abz(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).AgC)A._GetAutoObject(
A.Device.Helper).Bat();}return true;},BAD:function(){if(!!A._GetAutoObject(A.Device.
Helper).UH){var AJC=true;if(A._GetAutoObject(A.Device.Helper).UH.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJC=A._GetAutoObject(A.Device.Helper).A74(A._GetAutoObject(
A.Device.Helper).UH.Id);if(!AJC&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bdq(true);AJC=A._GetAutoObject(A.Device.Helper).A74(A._GetAutoObject(A.
Device.Helper).UH.Id);}}if(AJC)this.E5(5);else this.E5(2);}else{A.ab5("%s",AIx);
return;}},Bfz:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.AR1){A.z$([this,this.Bfz],[B=A._GetAutoObject(A.Device.Device),B.Awt,B.Ay5
],0);if(A._GetAutoObject(A.Device.Helper).W.Aq6())this.E5(5);else this.E5(1);}},
BgU:function(){if(this.ACa===true)this.E5(6);else A._GetAutoObject(C.A7).Cb(24);
},BCw:function(){A._GetAutoObject(A.Device.Device).AY(36,true,A.jV,0,[this,this.
BBM]);},BBM:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkR();this.E5(1);}},AAH:function(G){if(!this.DQ.EN)this.E5(1);},A3K:function(G
){},Bxf:function(s){this.A3K(s);},Blf:function(){return this.ACa;},SK:function(){
return this.EN;},_Init:function(aArg){C.Rc._Init.call(this,aArg);A.acg.Text._Init.
call(this.AcD={I:this},0);this.__proto__=C.Mo;this.N.Z(true);this.Dr(C.Aq7);this.
Number.H(AY0);this.Number.R(A.aaR(A.acf.A$R));this.Jl.H(AY1);this.IZ.H(AY2);this.
AcD.H(AY3);this.AcD.R(AY4);this.AcD.L(A.jb.Text);this.J(this.AcD,0);this.N.CF=[this
,this.Ew];this.N.Ce=[this,this.Bxf];this.N.C3(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.AcD.S(A.aaL(A.fl.H6));this.DQ=A._GetAutoObject(C.DQ);},_Done:function(
){this.__proto__=C.Rc;this.AcD._Done();C.Rc._Done.call(this);},_ReInit:function(
){C.Rc._ReInit.call(this);this.AcD._ReInit();this.Number.R(A.aaR(A.acf.A$R));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Rc._Mark.call(this,D);if((B=
this.DQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A5l={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Aph:-1,EN:0,ByG:function(){var Bgz=false;
var Os=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(A.
Device.Device).Bt.HM().toFixed(),0,null);else if(Os){Bgz=true;var B2=A._NewObject(
A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).AxD(B2,5);B2.OnSetAppearance(3);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}else{var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxD(B2
,5);B2.OnSetAppearance(1);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CI,A._GetAutoObject(A.
Device.Device).An);if(Bgz)A._GetAutoObject(A.Device.Helper).W.Uy(false);if(Os)A.
_GetAutoObject(A.Device.Helper).W.AnZ(false);else A._GetAutoObject(A.Device.Helper
).W.AnZ(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).AY(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M4]);else A._GetAutoObject(A.Device.Device).AY(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M4]);},ByI:function(){A._GetAutoObject(
A.Device.Helper).W.AGU(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).AY(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M4]);else A._GetAutoObject(
A.Device.Device).AY(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M4]);},Qs:function(Eh){switch(Eh){case 4:this.ByG();break;case
128:A._GetAutoObject(C.A7).Cb(7);break;case 16:A._GetAutoObject(C.A7).Cb(36);break;
case 1:A._GetAutoObject(C.A7).Cb(10);break;case 2:A._GetAutoObject(C.A7).Cb(11);
break;case 8:this.ByI();break;case 64:A._GetAutoObject(C.A7).Cb(29);break;case 32:
A._GetAutoObject(C.A7).Cb(48);break;case 256:A._GetAutoObject(C.A7).Cb(21);break;
case 512:A._GetAutoObject(C.A7).Cb(30);break;case 1024:this.BAA();break;case 262144:
this.BCY();break;case 2048:this.Ac_();break;case 4096:this.Bdi(false);break;case
8192:this.ByH();break;case 16384:this.BAz();break;case 32768:this.By7();break;case
524288:this.By8();break;case 65536:this.Bzv();break;case 131072:this.BCl();break;
case 0:break;default:throw new Error(AY5);}},Bds:function(Eh,Byb){var EQ=A._NewObject(
C.Wv,0);EQ.Ab8(false);EQ.Aj(true);EQ.AR=Byb;EQ.Bmp(Eh);switch(Eh){case 1:{EQ.T(A.
aaR(A.acf.An5));EQ.DC(A.aaL(A.ach.AL0));}break;case 2:{EQ.T(A.aaR(A.acf.A$B));EQ.
DC(A.aaL(A.ach.AL1));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DC(A.aaL(A.ach.AL2
));EQ.AFT(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asl));EQ.DC(A.aaL(A.ach.AL3));EQ.
AFT(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMz));EQ.DC(A.aaL(A.ach.AL4));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DC(A.aaL(A.ach.AL5));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DC(A.aaL(A.ach.AL6));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DC(A.aaL(A.ach.AL7));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DC(A._GetAutoObject(A.acj.DU).Bz_());}break;case 512:{EQ.T(A.aaR(A.acf.ASo));
EQ.DC(A.aaL(A.ach.ALS));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DC(A.aaL(A.ach.ALT));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DC(A.aaL(A.ach.ALZ));}break;case 2048:{EQ.T(A.aaR(A.acf.TF));EQ.DC(A.aaL(A.ach.ALU
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DC(A.aaL(A.ach.ALV));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DC(A.aaL(A.ach.ALW));EQ.AFT(true);}break;case
16384:{EQ.T(A.aaR(A.acf.Bi8));EQ.DC(A.aaL(A.ach.ALX));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bpl));EQ.DC(A.aaL(A.ach.ALY));}break;default:A.ab5("%s",(AY6+Eh.toFixed(
))+AY7);}return EQ;},BzI:function(){this.Aph=this.Aph+1;if(this.Aph>=this.AutoActions.
Ng())this.E5(0);else this.E5(2);},BB$:function(){this.Aph=-1;},AAf:function(){return(
this.Aph>-1)&&!this.BAt();},BAt:function(){return this.Aph>=this.AutoActions.Ng(
);},E5:function(E){if(this.EN===E)return;this.EN=E;switch(E){case 1:this.BzI();break;
case 2:{var To=this.AutoActions.OM(this.Aph);if(this.A5i(A._GetAutoObject(A.Device.
Helper).W,To))this.Qs(To);else A._GetAutoObject(A.Device.Device).AY(64,true,(this.
ActionToString.LA(To)+Ati)+this.AnimalTypeToString.LA(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.M4]);}break;case 0:this.BB$();break;default:throw new
Error(AyG);}A.abo([this,this.SK,this.E5],0);},M4:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.Id===63)&&(Ar.PopupState===7))this.
Bdi(true);if((Ar.Id===32)&&(Ar.PopupState===7))A._GetAutoObject(C.A7).Cb(45);if((((
Ar.PopupState===4)||(Ar.PopupState===3))||(Ar.PopupState===8))&&this.AAf())this.
E5(1);},Bdk:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAA:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A7).Cb(
45);else A._GetAutoObject(A.Device.Device).AY(32,true,A.jV,0,[this,this.M4]);},Ac_:
function(){this.E5(1);},BB9:function(){var Os=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Os&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(A.Device.Device
).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating,0);B2.Gs();
B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).AxD(B2,5);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CI,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uy(false);if(Os)A._GetAutoObject(
A.Device.Helper).W.AnZ(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AY(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M4]);},BB_:function(){A._GetAutoObject(
A.Device.Helper).W.AGU(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AY(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M4]);},Bdi:function(BzM){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BzM===false))A._GetAutoObject(A.Device.
Device).AY(63,true,A.jV,0,[this,this.M4]);else A._GetAutoObject(C.A7).Cb(54);},ByH:
function(){A._GetAutoObject(A.Device.Helper).W.Ar3(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).AY(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M4]);else A._GetAutoObject(A.Device.Device).AY(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M4]);},BAz:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A7).Cb(81);else A._GetAutoObject(A.
Device.Device).AY(69,true,A.jV,0,[this,this.M4]);},By7:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae6(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AY(65,true,A.jV,2000,[this,this.M4
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae7(false);A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).AY(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M4]);}}},Bzv:function(){A._GetAutoObject(A.Device.Helper).W.Ae6(false);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae6(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AY(65,true,A.jV,2000,[this,this.M4
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).AY(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M4]);else A._GetAutoObject(A.Device.Device).AY(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M4]);}},A5i:function(En,Eh
){var QC=false;switch(Eh){case 32768:QC=En.IsRegistrationNoticePending&&!!En.NaisIdMother;
break;case 524288:QC=En.IsRegistrationNoticePending&&!En.NaisIdMother;break;case
4096:case 8192:switch(En.AnimalType){case 1:QC=true;break;default:;}break;case 512:
switch(En.AnimalType){case 0:QC=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:QC=true;break;default:A.ab5("%s",AY8+
Eh.toFixed());}return QC;},BCl:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A7).Cb(80);else A._GetAutoObject(A.Device.Device).AY(
69,true,A.jV,0,[this,this.M4]);},BCY:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).AY(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.M4]);else{A._GetAutoObject(A.
Device.Helper).W.P0(0);A._GetAutoObject(A.Device.Helper).W.SP(A._GetAutoObject(A.
Device.Helper).A5z(A._GetAutoObject(A.Device.Device).An_,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).AY(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.M4]);}},By8:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae7(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AY(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M4]);}},SK:function(){return this.EN;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A5l;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AMa={R6:null,Aqq:null,E5:function(E){if(this.EN===E)return;C.Mo.E5.call(this
,E);switch(E){case 1:this.Dr(C.Aq7);break;case 5:case 6:this.Dr(C.IP);break;case
3:case 4:case 2:case 0:break;default:throw new Error(AyG);}},A3K:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mo._Init.call(this
,aArg);C.CG._Init.call(this.R6={I:this},0);C.AMb._Init.call(this.Aqq={I:this},0);
this.__proto__=C.AMa;this.A98(true);this.R6.H(AY9);this.R6.R(A.aaR(A.acf.TF));this.
R6.L(A.jb.Text);this.Aqq.H(AY_);this.J(this.R6,0);this.J(this.Aqq,0);this.N.Ct(A.
aaL(A.ach.AeF));this.R6.S(A.aaL(A.fl.Af));this.R6.A0(A.aaL(A.fl.HL));this.R6.Cr(
A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Mo;this.R6._Done();this.Aqq.
_Done();C.Mo._Done.call(this);},_ReInit:function(){C.Mo._ReInit.call(this);this.
R6._ReInit();this.Aqq._ReInit();this.R6.R(A.aaR(A.acf.TF));this.R6.S(A.aaL(A.fl.
Af));this.R6.A0(A.aaL(A.fl.HL));this.R6.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Mo._Mark.call(this,D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aqq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"
};C.ManualActionScanScreen={Ig:null,J8:null,A3K:function(G){if(this.Ig.N3(2048))
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(3);},_Init:function(aArg){C.Mo._Init.call(this,aArg);A.
acg.Text._Init.call(this.J8={I:this},0);this.__proto__=C.ManualActionScanScreen;
this.J8.H(AY$);this.J8.KX(true);this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+
CR)+A.aaR(A.acf.AB0));this.J8.L(A.jb.Text);this.J(this.J8,0);this.N.Ct(A.aaL(A.ach.
AeF));this.J8.S(A.aaL(A.fl.Af));this.Ig=A._GetAutoObject(C.Pr);},_Done:function(
){this.__proto__=C.Mo;this.J8._Done();C.Mo._Done.call(this);},_ReInit:function(){
C.Mo._ReInit.call(this);this.J8._ReInit();this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.AB0));this.J8.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Mo._Mark.call(this,D);if((B=this.Ig)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.J8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScanScreen"
};C.AMb={Y:null,Init:function(aArg){var B;A.zV([this,this.ABI],A._GetAutoObject(
C.AutoActions),0);A.zV([this,this.AuH],A._GetAutoObject(A.Device.Helper).W,0);A.
pe([this,this.ABI],this);A.pe([this,this.AuH],this);this.H(A.abK(this.M,AZa));this.
Y.H(A.abK(this.Y.M,A.abe([(B=this.M)[2]-B[0],B[3]-B[1]],AZb)));},Bc9:function(G){
var B;var AlF=0;var AzJ=0;var Bdo;var X=this.Y.Ah;var Cy=null;Bdo=((((B=this.M)[
2]-B[0])-(A._GetAutoObject(C.AutoActions).Ng()*58))/2)|0;while(!!X&&!((X.U&0x200
)===0x200)){Cy=(C.Wv.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.
H(A.abK(Cy.M,AZc));Cy.H(A.abM(Cy.M,(AzJ*58)+Bdo));Cy.H(A.abO(Cy.M,AlF*58));if(AzJ>=
3){AlF=AlF+1;AzJ=0;}else AzJ=AzJ+1;}X=X.Ah;}this.Bb(null);},A19:function(Eh){var
EQ=A._GetAutoObject(C.DQ).Bds(Eh,null);this.J(EQ,0);this.Bc9(this);},Ao8:function(
){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdN=X;X=X.Ah;if(((
AdN.U&0x400)===0x400))this.HR(AdN);}},ABI:function(G){this.Ao8();var O;var CB=A.
_GetAutoObject(C.AutoActions).Ng();for(O=0;O<CB;O=O+1){var To=A._GetAutoObject(C.
AutoActions).OM(O);this.A19(To);}A.pe([this,this.Bc9],this);A.pe([this,this.AuH]
,this);A.pe([this,this.BC8],this);},AuH:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wv.isPrototypeOf(
X)?X:null);Aa.AFT(false);}X=X.Ah;}},BC8:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wv.isPrototypeOf(
X)?X:null);var ByX=A._GetAutoObject(C.AutoActions).Ng();if(!!Aa){var O;Aa.A94(false
);for(O=0;O<ByX;O=O+1)if(Aa.Action===A._GetAutoObject(C.AutoActions).OM(O)){Aa.A94(
true);Aa.Bnv(AZd+(O+1).toFixed());}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);this.__proto__=C.AMb;this.
Y.JZ(0);this.J(this.Y,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.Y._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Y._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScreenGrid"
};C.DQ={_Init:function(){C.A5l._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.APO={Lq:null,Uc:null,Init:function(aArg){
this.Lq.R(A._GetAutoObject(A.acj.Temperature).AlQ());},_Init:function(aArg){C.De.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Lq={I:this},0);C.CG._Init.call(
this.Uc={I:this},0);this.__proto__=C.APO;this.Lq.H(AZe);this.Lq.A6(0x12);this.Lq.
L(A.jb.Text);this.Uc.H(Aox);this.Uc.R((A.aaR(A.acf.Aho)+AIy)+A.aaR(A.acf.Kq));this.
Uc.A6(0x12);this.Uc.L(A.jb.Text);this.J(this.Lq,0);this.J(this.Uc,0);this.Lq.S(A.
aaL(A.fl.Af));this.Uc.S(A.aaL(A.fl.Ak));this.Uc.A0(A.aaL(A.fl.Bh));this.Init(aArg
);},_Done:function(){this.__proto__=C.De;this.Lq._Done();this.Uc._Done();C.De._Done.
call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lq._ReInit();this.Uc.
_ReInit();this.Uc.R((A.aaR(A.acf.Aho)+AIy)+A.aaR(A.acf.Kq));this.Lq.S(A.aaL(A.fl.
Af));this.Uc.S(A.aaL(A.fl.Ak));this.Uc.A0(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Uc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdTemperatures"
};C.ADH={JC:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.JC={I:this},0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=
C.ADH;this.JC.H(AZf);this.JC.KX(true);this.JC.A6(0x14);this.JC.R(A.aaR(A.acf.AhT
)+AIz);this.JC.L(A.jb.Text);this.D0.H(Aox);this.D0.KX(true);this.D0.R(A.aaR(A.acf.
AGp));this.D0.L(A.jb.Text);this.J(this.JC,0);this.J(this.D0,0);this.JC.S(A.aaL(A.
fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.De;this.JC.
_Done();this.D0._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.
call(this);this.JC._ReInit();this.D0._ReInit();this.JC.R(A.aaR(A.acf.AhT)+AIz);this.
D0.R(A.aaR(A.acf.AGp));this.JC.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.De._Mark.call(this,D);if((B=this.JC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"
};C.T4={Jd:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.call(
this.Jd={I:this},0);this.__proto__=C.T4;this.Jd.H(AIA);this.Jd.R((((A.aaR(A.acf.
RU)+AcU)+AIB)+A.aaR(A.acf.BaH))+Pd);this.Jd.A6(0x12);this.Jd.L(A.jb.Text);this.J(
this.Jd,0);this.Jd.S(A.aaL(A.fl.Af));this.Jd.A0(A.aaL(A.fl.Ak));this.Jd.Cr(A.aaL(
A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.Jd._Done();C.De._Done.call(
this);},_ReInit:function(){C.De._ReInit.call(this);this.Jd._ReInit();this.Jd.R((((
A.aaR(A.acf.RU)+AcU)+AIB)+A.aaR(A.acf.BaH))+Pd);this.Jd.S(A.aaL(A.fl.Af));this.Jd.
A0(A.aaL(A.fl.Ak));this.Jd.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APQ={Lr:null,Ky:null,CQ:function(){this.A$T();},Init:function(aArg){this.A$T(
);},A$T:function(){this.Lr.R(A._GetAutoObject(A.acj.DU).Af7());this.Ky.R(A._GetAutoObject(
A.acj.DU).AaE());},_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lr={I:this},0);C.CG._Init.call(this.Ky={I:this},0);this.__proto__=C.APQ;
this.Lr.H(AZg);this.Lr.A6(0x12);this.Lr.L(A.jb.Text);this.Ky.H(Aox);this.Ky.L(A.
jb.Text);this.J(this.Lr,0);this.J(this.Ky,0);this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(
A.aaL(A.fl.Af));this.Ky.A0(A.aaL(A.fl.Ak));this.Ky.Cr(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.De;this.Lr._Done();this.Ky._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lr._ReInit();
this.Ky._ReInit();this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));this.Ky.A0(
A.aaL(A.fl.Ak));this.Ky.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.
De._Mark.call(this,D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANp={Ms:null,Hr:null,If:null,AP:null,A$:null,FX:0,AaK:0,Ih:0,AiP:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hr.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hr.M[2]-1,0,this.Hr.M[2]+1,aSize[
1]]);this.Ms.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.If.H(this.Ms.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiP){this.If.R(Rs);this.If.L(A.jb.
Text);this.Ms.L(this.Background.AQ);}else{this.If.R(A._GetAutoObject(A.Device.Converter
).Td(this.FX,2,true));this.If.L(A._GetAutoObject(A.acj.DU).Az7(this.FX,this.Ih));
this.Ms.L(A._GetAutoObject(A.acj.DU).Az5(this.FX,this.Ih));}if(this.AaK>0)this.Hr.
R(A._GetAutoObject(A.Device.Converter).Ala(this.AaK));else this.Hr.R(Rs);this.Hr.
L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Mn=
this.AX.CC(Ad,1);var AuC=this.AX.Hw(Ad,24);var AKl=this.AX.CC(Ad,23);var AuD=this.
AX.Hw(Ad,19);this.AaK=this.AX.CC(Ad,18);if((AuC>0)&&(AuC!==AuD)){var LK=A._GetAutoObject(
A.Device.Helper).Mf(AuC,AuD);if(!!LK){this.AiP=false;this.FX=A._GetAutoObject(A.
acj.DU).AlE(LK,AKl,this.AaK);}else{this.AiP=true;this.FX=0;}}else{this.AiP=true;
this.FX=0;}this.T(Mn.toFixed());this.Ih=this.AX.Am0(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Ms={I:this},0);A.acg.Text.
_Init.call(this.Hr={I:this},0);A.acg.Text._Init.call(this.If={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.ANp;this.V.H(Pb);this.Ms.H(Atk);this.Hr.H(AIv);this.Hr.A6(0x12);this.Hr.R(Rq);
this.Hr.L(A.jb.Text);this.If.H(AIw);this.If.R(Rq);this.If.L(A.jb.Text);this.AP.H(
Aov);this.AP.L(A.jb.Bc);this.A$.H(Aow);this.A$.L(A.jb.Bc);this.J(this.Ms,0);this.
J(this.Hr,0);this.J(this.If,0);this.J(this.AP,0);this.J(this.A$,0);this.Hr.S(A.aaL(
A.fl.Af));this.If.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ms._Done();this.Hr._Done();this.If._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ms._ReInit(
);this.Hr._ReInit();this.If._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hr.
S(A.aaL(A.fl.Af));this.If.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.Nb={Mr:null,AP:null,A$:null,Gz:null,Xx:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Mr.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mr.M);this.Background.H([].concat(this.Mr.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gz.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gz.M[2]-1,0,this.
Gz.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gz.L(this.V.AQ
);if(!!this.Xx&&(this.Xx!==5)){this.Mr.L(A._GetAutoObject(A.acj.Assessment).Qu(this.
Xx));this.V.L(A._GetAutoObject(A.acj.Assessment).XG(this.Xx));}else this.Mr.L(this.
Background.AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var
Mn=this.AX.CC(Ad,1);var LW=this.AX.Ja(Ad,13);var AlL=this.AX.Ja(Ad,17);var AlU=this.
AX.H7(Ad,11);var Azr=this.AX.Hw(Ad,4);var AfU=A._GetAutoObject(A.Device.Helper).
Mf(Azr,A._GetAutoObject(A.Device.Helper).Dv());this.Xx=A._GetAutoObject(A.Device.
Helper).AMw(LW,AlU,AlL);this.T(Mn.toFixed());if(AfU<100)this.Gz.R((AfU.toFixed()+
CR)+A.aaR(A.acf.AL$));else this.Gz.R(A._GetAutoObject(A.acj.KR).ADa(Azr,A._GetAutoObject(
A.Device.Helper).Dv(),AIC));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Mr={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gz={I:this
},0);this.__proto__=C.Nb;this.Mr.H(Atk);this.Background.H(AZh);this.V.H(Pb);this.
AP.H(Aov);this.AP.L(A.jb.Bc);this.A$.H(Aow);this.A$.L(A.jb.Bc);this.Gz.H(AyH);this.
J(this.Mr,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gz,0);this.Gz.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mr._Done(
);this.AP._Done();this.A$._Done();this.Gz._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mr._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gz._ReInit();this.Gz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ANn={AjB:null,Of:null,AP:null,A$:null,Jx:null,AKD:0,A2_:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.Of.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AjB.H(this.Of.M);this.A$.H([this.Of.M[2]-1,0,this.Of.M[2]+1,aSize[1]]);
this.Jx.H([this.Of.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jx.Dg(this.V.AQ);if(this.AKD>0){this.AjB.L(A._GetAutoObject(A.acj.Assessment
).Qu(this.A2_));this.Of.L(A._GetAutoObject(A.acj.Assessment).XG(this.A2_));}else{
this.AjB.L(this.Background.AQ);this.Of.L(this.V.AQ);}},Ch:function(Ad){if(!this.
AX)return;this.Ht=Ad;if(!!this.AX){var IE=this.AX.CC(Ad,0);var Mn=this.AX.CC(Ad,
1);this.AKD=this.AX.CC(Ad,5);this.A2_=this.AX.Ja(Ad,17);this.T(Mn.toFixed());if(
this.AKD>0)this.Of.R(A._GetAutoObject(A.Device.Converter).Ak3(this.AKD));else this.
Of.R(Rs);var Xw=A._GetAutoObject(A.Device.Helper).ZY(6);A._GetAutoObject(A.Device.
Device).SW(Ad);var A1h=A._GetAutoObject(A.Device.Helper).Bjw(A._GetAutoObject(A.
Device.Device).Bt,9,IE,Xw,0);this.Jx.A_l(A1h.Get(3));this.Jx.A_n(A1h.Get(2));this.
Jx.A_m(A1h.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AjB={I:this},0);A.acg.Text._Init.call(this.Of={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},
0);C.Jx._Init.call(this.Jx={I:this},0);this.__proto__=C.ANn;this.Of.A6(0x12);this.
Of.R(Rq);this.Of.L(A.jb.Text);this.AP.H(Aov);this.AP.L(A.jb.Bc);this.A$.H(Aow);this.
A$.L(A.jb.Bc);this.Jx.H(AZi);this.J(this.AjB,0);this.J(this.Of,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Jx,0);this.Of.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AjB._Done();this.Of._Done();this.AP.
_Done();this.A$._Done();this.Jx._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AjB._ReInit();this.Of._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Jx._ReInit();this.Of.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.AjB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Of)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jx={Aft:null,
ColoredCounterAttrSet:null,ACD:0,ACE:0,ACC:0,KY:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKw;var ALR;var AK2;var Al2=0;if(this.ACC>0){AKw=this.ACC.toFixed(
);Al2+=AKw.length;}else{AKw=AZj;Al2++;}if(this.ACE>0){ALR=this.ACE.toFixed();Al2+=
ALR.length;}else{ALR=AyI;Al2++;}if(this.ACD>0){AK2=this.ACD.toFixed();Al2+=AK2.length;
}else{AK2=AIq;Al2++;}if(Al2<=4)this.ColoredCounterAttrSet.Ahu(A.aaL(A.fl.Af));else
if(Al2<=5)this.ColoredCounterAttrSet.Ahu(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahu(A.aaL(A.fl.Bh));this.Aft.R(((((AZk+AKw)+AZl)+ALR)+AZm)+AK2);},A_m:function(E
){if(this.ACD===E)return;this.ACD=E;this.Am();},A_n:function(E){if(this.ACE===E)
return;this.ACE=E;this.Am();},A_l:function(E){if(this.ACC===E)return;this.ACC=E;
this.Am();},Dg:function(E){if(this.KY===E)return;this.KY=E;this.ColoredCounterAttrSet.
Ahr(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuZ._Init.call(
this.Aft={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jx;this.H(AID);this.Aft.A1(0x3F);this.Aft.H(AID);this.
Aft.R(Rq);this.ColoredCounterAttrSet.BmC(A.jb.E1);this.ColoredCounterAttrSet.A_b(
A.jb.Ib);this.ColoredCounterAttrSet.A_a(A.jb.Gk);this.ColoredCounterAttrSet.Ahr(
A.jb.Text);this.KY=A.jb.Text;this.J(this.Aft,0);this.Aft.A97(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahu(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A99(
null);},_Done:function(){this.__proto__=A.Core.P;this.Aft._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Aft._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahu(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Aft)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANm={AtO:null
,Aci:null,Acj:null,Ack:null,Jx:null,AP:null,A$:null,Ea:null,Ly:null,AcF:null,KZ:
null,K0:null,AJI:0,AJH:0,AJG:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Aci.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcF.H(this.
Aci.M);this.A$.H([this.Aci.M[2]-1,0,this.Aci.M[2]+1,aSize[1]]);this.Acj.H([this.
Aci.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KZ.H(this.Acj.M);this.Ea.H([this.
Acj.M[2]-1,0,this.Acj.M[2]+1,aSize[1]]);this.Ack.H([this.Acj.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.K0.H(this.Ack.M);this.Ly.H([this.Ack.M[2]-1,0,this.Ack.
M[2]+1,aSize[1]]);this.Jx.H([this.Ack.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jx.Dg(this.V.AQ);this.Aci.L(A._GetAutoObject(A.acj.
Assessment).Qu(this.AJG));this.Acj.L(A._GetAutoObject(A.acj.Assessment).Qu(this.
AJH));this.Ack.L(A._GetAutoObject(A.acj.Assessment).Qu(this.AJI));this.AcF.L(A._GetAutoObject(
A.acj.Assessment).XG(this.AJG));this.KZ.L(A._GetAutoObject(A.acj.Assessment).XG(
this.AJH));this.K0.L(A._GetAutoObject(A.acj.Assessment).XG(this.AJI));this.AcF.Z(
!this.AJG);this.KZ.Z(!this.AJH);this.K0.Z(!this.AJI);this.Jx.A_l(this.AtO.Get(3)
);this.Jx.A_n(this.AtO.Get(2));this.Jx.A_m(this.AtO.Get(1));},Ch:function(Ad){if(
!this.AX)return;this.Ht=Ad;if(!!this.AX){var IE=this.AX.CC(Ad,0);var Mn=this.AX.
CC(Ad,1);this.T(Mn.toFixed());A._GetAutoObject(A.Device.Device).SW(Ad);this.AJG=
A._GetAutoObject(A.Device.Helper).A2K(A._GetAutoObject(A.Device.Device).Bt,IE,0);
this.AJH=A._GetAutoObject(A.Device.Helper).A2K(A._GetAutoObject(A.Device.Device).
Bt,IE,-1);this.AJI=A._GetAutoObject(A.Device.Helper).A2K(A._GetAutoObject(A.Device.
Device).Bt,IE,-2);this.AtO=A._GetAutoObject(A.Device.Helper).A6_(A._GetAutoObject(
A.Device.Device).Bt,IE,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Aci={I:this},0);A.acg.AL._Init.call(this.Acj={I:
this},0);A.acg.AL._Init.call(this.Ack={I:this},0);C.Jx._Init.call(this.Jx={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Ly={I:this
},0);A.acg.Text._Init.call(this.AcF={I:this},0);A.acg.Text._Init.call(this.KZ={I:
this},0);A.acg.Text._Init.call(this.K0={I:this},0);this.__proto__=C.ANm;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Ly.L(A.jb.Bc);this.AcF.R(Aoy
);this.KZ.R(Aoy);this.K0.R(Aoy);this.J(this.Aci,0);this.J(this.Acj,0);this.J(this.
Ack,0);this.J(this.Jx,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.Ly,0);this.J(this.AcF,0);this.J(this.KZ,0);this.J(this.K0,0);this.AcF.S(A.
aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af));this.AtO=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Aci._Done();this.Acj._Done();this.Ack._Done();this.Jx._Done();this.AP.
_Done();this.A$._Done();this.Ea._Done();this.Ly._Done();this.AcF._Done();this.KZ.
_Done();this.K0._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Aci._ReInit();this.Acj._ReInit();this.Ack._ReInit();this.Jx._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ly._ReInit();this.AcF.
_ReInit();this.KZ._ReInit();this.K0._ReInit();this.AcF.S(A.aaL(A.fl.Af));this.KZ.
S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aci).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.Am3={H$:null,XJ:false,Bl:function(aSize){var
B;this.H$.H([(aSize[0]-((B=this.H$.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H$.M[0]-10,40]);C.TP.Bl.call(this,aSize);},Ai:function(Ae){C.TP.Ai.call(
this,Ae);if(this.XJ)this.H$.Cw(1);else this.H$.Cw(0);},Ki:function(G){if(this.XJ
)C.TP.Ki.call(this,G);},Kd:function(G){if(this.XJ)C.TP.Kd.call(this,G);},TA:function(
AI){C.TP.TA.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.XJ=true;this.ZF(
true);}else{this.H(A.abI(this.M,40));this.XJ=false;this.ZF(false);}},_Init:function(
aArg){C.TP._Init.call(this,aArg);A.acg.Ap._Init.call(this.H$={I:this},0);this.__proto__=
C.Am3;this.V.A6(0x11);this.H$.H(AH1);this.H$.Cw(0);this.J(this.H$,0);this.V.Cr(A.
aaL(A.fl.Bh));this.H$.Ax(A.aaL(A.ach.AqW));},_Done:function(){this.__proto__=C.TP;
this.H$._Done();C.TP._Done.call(this);},_ReInit:function(){C.TP._ReInit.call(this
);this.H$._ReInit();this.V.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TP._Mark.
call(this,D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AGo={_Init:function(aArg){C.Axu._Init.call(this,aArg);this.__proto__=C.AGo;}
,_className:"Application::OptionsOverlaySeparator"};C.AkI={DL:A.jV,Bw:true,_Init:
function(aArg){C.Axu._Init.call(this,aArg);this.__proto__=C.AkI;},_className:"Application::OptionsOverlayNode"
};C.ZH={AR:null,_Init:function(aArg){C.AkI._Init.call(this,aArg);this.__proto__=
C.ZH;},_Mark:function(D){var B;C.AkI._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANS={Ai:function(Ae){C.O4.Ai.call(this,Ae);var FT=A.jb.CK;var GZ=A.jb.Text;if(
this.Hn){FT=A.jb.Text;GZ=A.jb.Bm;}this.Background.L(FT);this.V.L(GZ);},_Init:function(
aArg){C.O4._Init.call(this,aArg);this.__proto__=C.ANS;},_className:"Application::DarkThemeTextItem"
};C.O4={Background:null,BW:null,V:null,AqD:0,Hn:false,Init:function(aArg){},Bl:function(
aSize){C.Hk.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BW.H(A.abK(this.BW.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hk.Ai.call(this,Ae);this.BW.L(this.AqD);},T:function(E){if(this.DL===E)return;
this.DL=E;this.V.R(E);},Bi:function(E){if(this.Hn===E)return;this.Hn=E;this.Am();
},AnC:function(E){if(this.AqD===E)return;this.AqD=E;this.Am();},_Init:function(aArg
){C.Hk._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
BW._Init.call(this.BW={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.O4;this.H(BD);this.Background.H(AIE);this.BW.H(BD);this.BW.Nu(2);this.BW.L(A.jb.
Rk);this.V.H(AZn);this.AqD=A.jb.Rk;this.J(this.Background,0);this.J(this.BW,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hk;this.Background._Done(
);this.BW._Done();this.V._Done();C.Hk._Done.call(this);},_ReInit:function(){C.Hk.
_ReInit.call(this);this.Background._ReInit();this.BW._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hk._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APT={Es:null,IU:null
,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.Es={
I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);this.__proto__=C.APT;this.H(
Oi);this.Background.H(Oi);this.Es.H(AIF);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11
);this.Es.L(A.jb.Text);this.IU.A1(0x3F);this.IU.H(AIG);this.IU.Hp(5);this.IU.A6(
0x14);this.IU.R(A.aaR(A.acf.AG7));this.IU.L(A.jb.Text);this.J(this.Es,0);this.J(
this.IU,0);this.Es.S(A.aaL(A.fl.Af));this.IU.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.IU._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.IU._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.IU.R(A.aaR(A.acf.AG7));this.Es.S(A.aaL(A.fl.Af));this.IU.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Su:null,Sv:null,AeG:null,Ag9:null,QO:null
,KY:0,LastTemperature:0,AqJ:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Su.Ax(A.aaL(A.ach.AvM));this.Sv.Ax(A.aaL(A.ach.AvM));}break;case 2:{this.Su.Ax(A.
aaL(A.ach.AvP));this.Sv.Ax(A.aaL(A.ach.AvP));}break;default:{this.Su.Ax(A.aaL(A.
ach.AeB));this.Sv.Ax(A.aaL(A.ach.AeB));}}this.Su.L(A._GetAutoObject(A.acj.Assessment
).Qu(this.AqJ));var ApT;if(this.IsWatch)ApT=A.aaL(A.ach.AQX);else if(this.IsFever
){ApT=A.aaL(A.ach.AQW);switch(A._GetAutoObject(A.Device.Converter).Ajo(this.LastTemperature
,this.AnimalType)){case 3:this.QO.L(A.jb.Gk);break;case 2:this.QO.L(A.jb.Ib);break;
case 1:this.QO.L(A.jb.E1);break;case 0:this.QO.L(A.jb.Afx);break;default:;}}else
if(this.IsAlarm){ApT=A.aaL(A.ach.AQV);if(!this.AqJ||(this.AqJ===5))this.QO.L(A.jb.
Gk);else this.QO.L(0xFF000000);}else ApT=null;this.AeG.Ax(ApT);this.Ag9.Ax(ApT);
this.QO.Ax(ApT);if(A._GetAutoObject(A.acj.Assessment).Qu(this.AqJ)===A.jb.E1)this.
Sv.L(this.KY);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AFm:function(E){if(this.AqJ===E)return;this.AqJ=E;this.Am();},Dg:function(
E){if(this.KY===E)return;this.KY=E;this.Am();},Ae8:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uy:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae4:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae_:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E7:function(){this.EC(0);this.AFm(0);this.Ae4(false);this.Uy(false
);this.Ae8(false);this.Ae_(0);this.Dg(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Su={I:this},0);A.acg.Ap._Init.call(
this.Sv={I:this},0);A.acg.Ap._Init.call(this.AeG={I:this},0);A.acg.Ap._Init.call(
this.Ag9={I:this},0);A.acg.Ap._Init.call(this.QO={I:this},0);this.__proto__=C.DS;
this.H(All);this.Su.A1(0x3F);this.Su.H(All);this.Su.L(A.jb.CK);this.Su.A6(0x12);
this.Su.Cw(0);this.Sv.A1(0x3F);this.Sv.H(All);this.Sv.L(0xFF000000);this.Sv.A6(0x12
);this.Sv.Cw(1);this.AeG.A1(0x3F);this.AeG.H(All);this.AeG.L(0xFF000000);this.AeG.
Cw(0);this.Ag9.A1(0x3F);this.Ag9.H(All);this.Ag9.Cw(1);this.QO.A1(0x3F);this.QO.
H(All);this.QO.L(A.jb.CU);this.QO.Cw(2);this.KY=A.jb.Text;this.J(this.Su,0);this.
J(this.Sv,0);this.J(this.AeG,0);this.J(this.Ag9,0);this.J(this.QO,0);this.Su.Ax(
A.aaL(A.ach.AeB));this.Sv.Ax(A.aaL(A.ach.AeB));},_Done:function(){this.__proto__=
A.Core.P;this.Su._Done();this.Sv._Done();this.AeG._Done();this.Ag9._Done();this.
QO._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Su._ReInit();this.Sv._ReInit();this.AeG._ReInit();this.Ag9._ReInit();
this.QO._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.ANj={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(!!this.AX){var BAx=this.AX.H7(
Ad,12);var ByP=this.AX.Sq(Ad,15);this.Abo.R(A._GetAutoObject(A.Device.Helper).Mf(
ByP,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sw.Z(BAx);this.Am();
}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=C.ANj;},_className:
"Application::CalfListAlarmItem"};C.ADD={D0:null,MC:null,_Init:function(aArg){C.
T5._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.MC={I:this},0);this.__proto__=C.ADD;this.D0.H(Aox);this.D0.KX(true);this.
D0.R(A.aaR(A.acf.A6o));this.D0.L(A.jb.Text);this.MC.H(AZo);this.MC.Je(false);this.
MC.L(A.jb.Text);this.MC.A6(0x12);this.J(this.D0,-2);this.J(this.MC,0);this.D0.S(
A.aaL(A.fl.Ak));this.MC.Ax(A.aaL(A.ach.AD2));},_Done:function(){this.__proto__=C.
T5;this.D0._Done();this.MC._Done();C.T5._Done.call(this);},_ReInit:function(){C.
T5._ReInit.call(this);this.D0._ReInit();this.MC._ReInit();this.D0.R(A.aaR(A.acf.
A6o));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.T5._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MC)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kp={Background:null,BW:
null,AC4:0,ACh:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
AC4);this.BW.L(this.ACh);},AwP:function(E){if(this.AC4===E)return;this.AC4=E;this.
Am();},AFe:function(E){if(this.ACh===E)return;this.ACh=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BW={I:this},0);this.__proto__=C.Kp;this.H(Aoz);this.
Background.A1(0x3C);this.Background.H(Aoz);this.Background.Cw(1);this.BW.A1(0x3C
);this.BW.H(Aoz);this.AC4=A.jb.E1;this.ACh=A.jb.Text;this.J(this.Background,0);this.
J(this.BW,0);this.Background.Ax(A.aaL(A.ach.Kp));this.BW.Ax(A.aaL(A.ach.Kp));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BW._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BW._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmL={Q:null,Pw:
null,A7P:false,Bl:function(aSize){C.Mx.Bl.call(this,aSize);this.V.H([].concat(this.
Pw.M[2]-this.V.Text.Jh,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mx.Ai.call(this
,Ae);this.Pw.L(this.V.AQ);},AwU:function(E){if(this.A7P===E)return;this.A7P=E;if(
E)this.Pw.R(AZp);else this.Pw.R(AIH);},Hh:function(G){var F;if(!!this.Q)this.AwU((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Hh],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hh],E,0);if(!!E)
A.pe([this,this.Hh],this);},_Init:function(aArg){C.Mx._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pw={I:this},0);this.__proto__=C.AmL;this.Pw.A1(0x34);this.Pw.
H(Th);this.Pw.R(AIH);this.J(this.Pw,0);this.Pw.S(A.aaL(A.fl.AOM));},_Done:function(
){this.__proto__=C.Mx;this.Pw._Done();C.Mx._Done.call(this);},_ReInit:function(){
C.Mx._ReInit.call(this);this.Pw._ReInit();},_Mark:function(D){var B;C.Mx._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pw)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AO$={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad1(4));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.AO$;
},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={AutoRegistrationModeToString:
null,Du:function(){return 3;},C7:function(aIndex){if((aIndex<0)||(aIndex>=3))return-
1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.
AutoRegistrationModeToString.BT(aIndex);},DZ:function(A8){return A8;},H8:function(
){return 2;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString.
_Init.call(this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.APU={Gp:null,Lq:null,YZ:null,Init:function(aArg){this.Lq.R(A._GetAutoObject(
A.acj.Temperature).AlQ());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gp={I:this},0);A.acg.Text._Init.call(this.Lq={I:this},0);A.
acg.Text._Init.call(this.YZ={I:this},0);this.__proto__=C.APU;this.Background.L(A.
jb.Text);this.Gp.H(AII);this.Gp.A6(0x11);this.Gp.R(A.aaR(A.acf.Date));this.Gp.L(
A.jb.Bm);this.Lq.H(AZq);this.Lq.A6(0x12);this.Lq.L(A.jb.Bm);this.YZ.H(AZr);this.
YZ.A6(0x12);this.YZ.R(A.aaR(A.acf.Bs));this.YZ.L(A.jb.Bm);this.J(this.Gp,0);this.
J(this.Lq,0);this.J(this.YZ,0);this.Gp.S(A.aaL(A.fl.Af));this.Lq.S(A.aaL(A.fl.Af
));this.YZ.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Gp._Done();this.Lq._Done();this.YZ._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Gp._ReInit();this.Lq._ReInit();this.YZ._ReInit(
);this.Gp.R(A.aaR(A.acf.Date));this.YZ.R(A.aaR(A.acf.Bs));this.Gp.S(A.aaL(A.fl.Af
));this.Lq.S(A.aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TJ={Lk:null,AjR:false,Init:function(
aArg){var B;A.zX([this,this.Bb9],[B=A._GetAutoObject(A.Device.Device),B.AEP,B.AI0
],0);this.AG0(this);A.pe([this,this.AoF],this);},DF:function(G){var D5=(A.Core.BF.
isPrototypeOf(G)?G:null);switch(D5.CP){case 6:this.Ov(this);break;case 7:this.M5(
this);break;default:D5.Mw=true;}},CD:function(G){var B;if(!!this.Lk)this.Lk.CD(this
);C.AB.CD.call(this,G);},E4:function(G){var B;if(!!this.Lk)this.Lk.E4(this);C.AB.
E4.call(this,G);},Ant:function(G){A._GetAutoObject(C.A7).FB();},AG0:function(G){
var B;if(!!this.Lk){this.Lk.E4(this);this.HR(this.Lk);}if(this.AjR)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lk=A._NewObject(C.AMD,0);break;case 1:this.Lk=A.
_NewObject(C.AME,0);break;case 3:this.Lk=A._NewObject(C.AMC,0);break;case 2:this.
Lk=A._NewObject(C.AMF,0);break;default:throw new Error(AIJ);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lk=A._NewObject(C.AMG,0);break;case 1:this.Lk=A.
_NewObject(C.AMP,0);break;case 3:this.Lk=A._NewObject(C.AMJ,0);break;case 2:this.
Lk=A._NewObject(C.AMU,0);break;default:throw new Error(AIJ);}this.HS(this);this.
J(this.Lk,0);this.Lk.H(Fe);this.Lk.ZC([this,this.A05]);this.Lk.CD(this);this.Bb(
this.Lk);},Bb9:function(s){this.AG0(s);},Bou:function(G){A._GetAutoObject(A.Device.
Device).AeY(0);},AUb:function(G){A._GetAutoObject(A.Device.Device).AeY(1);},AUa:
function(G){A._GetAutoObject(A.Device.Device).AeY(3);},AUc:function(G){A._GetAutoObject(
A.Device.Device).AeY(2);},HS:function(G){this.N.C3(A.aaL(A.ach.E2));this.N.Hz(A.
jV);this.N.CF=[this,this.Ant];this.N.AFs(A.aaL(A.fl.Ak));},AoF:function(s){this.
HS(s);},Bne:function(E){if(this.AjR===E)return;this.AjR=E;A.pe([this,this.Bb9],this
);},A$m:function(G){this.Bne(!this.AjR);},Box:function(G){A._GetAutoObject(A.Device.
Device).AY(31,true,A.jV,0,null);},M5:function(G){},BG_:function(s){this.M5(s);},
Ov:function(G){},BG9:function(s){this.Ov(s);},Bfw:function(G){var FS=A._GetAutoObject(
A.Device.Device).D9;FS=FS+1;if(FS>=4)FS=0;A._GetAutoObject(A.Device.Device).AeY(
FS);},BBr:function(G){var FS=A._GetAutoObject(A.Device.Device).D9;FS=FS-1;if(FS<
0)FS=3;A._GetAutoObject(A.Device.Device).AeY(FS);},Agb:function(G){},A05:function(
s){this.Agb(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TJ;this.Background.H(Cf);this.N.Z(true);this.N.OW(true);this.N.OX(true);this.Dr(
C.APJ);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lk)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Do:null,CD:function(G){},AIZ:function(s){this.CD(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyW:function(s){
this.E4(s);},ZC:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Do.BG=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=
C.D9;this.H(U5);this.AttrSet.A_b(A.jb.Gk);this.AttrSet.A_a(A.jb.Ib);this.AttrSet.
Ahr(A.jb.Text);this.Do.Filter=1;this.AttrSet.Ahu(A.aaL(A.fl.Ak));this.AttrSet.A99(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Do._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Do._ReInit();this.AttrSet.Ahu(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMG={RZ:
null,Aa7:null,TI:null,TH:null,R3:null,QG:null,R4:null,R1:null,R2:null,R0:null,CQ:
function(){var B;this.RZ.Ch(this);this.Aa7.Ch(this);this.TI.Ch(this);this.TH.Ch(
this);this.R3.Ch(this);this.QG.Ch(this);this.R4.Ch(this);this.R1.Ch(this);this.R2.
Ch(this);this.R0.Ch(this);},GH:function(G){C.R5.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RZ.Z(true);this.Aa7.Z(false);
this.R1.Z(false);this.R2.Z(false);this.R0.Z(false);this.R3.Z(true);this.QG.Z(true
);this.R4.Z(true);}break;case 1:{this.RZ.Z(false);this.Aa7.Z(true);this.R1.Z(true
);this.R2.Z(true);this.R0.Z(true);this.R3.Z(false);this.QG.Z(false);this.R4.Z(false
);}break;default:A.ab5("%s%e",Alh,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MZ],this);},_Init:function(aArg){C.R5._Init.call(this,aArg);C.
RZ._Init.call(this.RZ={I:this},0);C.AMB._Init.call(this.Aa7={I:this},0);C.TI._Init.
call(this.TI={I:this},0);C.TH._Init.call(this.TH={I:this},0);C.R3._Init.call(this.
R3={I:this},0);C.QG._Init.call(this.QG={I:this},0);C.R4._Init.call(this.R4={I:this
},0);C.R1._Init.call(this.R1={I:this},0);C.R2._Init.call(this.R2={I:this},0);C.R0.
_Init.call(this.R0={I:this},0);this.__proto__=C.AMG;this.RZ.H(BD);this.RZ.Aj(true
);this.RZ.Bi(false);this.Aa7.H(I1);this.Aa7.Aj(true);this.Aa7.Bi(false);this.TI.
H(Qf);this.TI.Aj(true);this.TI.Bi(true);this.TH.H(Aan);this.TH.Aj(true);this.TH.
Bi(false);this.R3.H(Alj);this.R3.Aj(true);this.R3.Bi(true);this.QG.H(Aos);this.QG.
Aj(true);this.QG.Bi(false);this.R4.H(Atf);this.R4.Aj(true);this.R4.Bi(true);this.
R1.H(U6);this.R1.Aj(true);this.R1.Bi(true);this.R2.H(AZs);this.R2.Aj(true);this.
R2.Bi(false);this.R0.H(AZt);this.R0.Aj(true);this.R0.Bi(true);this.J(this.RZ,0);
this.J(this.Aa7,0);this.J(this.TI,0);this.J(this.TH,0);this.J(this.R3,0);this.J(
this.QG,0);this.J(this.R4,0);this.J(this.R1,0);this.J(this.R2,0);this.J(this.R0,
0);},_Done:function(){this.__proto__=C.R5;this.RZ._Done();this.Aa7._Done();this.
TI._Done();this.TH._Done();this.R3._Done();this.QG._Done();this.R4._Done();this.
R1._Done();this.R2._Done();this.R0._Done();C.R5._Done.call(this);},_ReInit:function(
){C.R5._ReInit.call(this);this.RZ._ReInit();this.Aa7._ReInit();this.TI._ReInit();
this.TH._ReInit();this.R3._ReInit();this.QG._ReInit();this.R4._ReInit();this.R1.
_ReInit();this.R2._ReInit();this.R0._ReInit();this.CQ();},_Mark:function(D){var B;
C.R5._Mark.call(this,D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMU={AkV:function(L_){if(!L_)return;var Fx=A._NewObject(
A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CX(HZ);var Ac$=A._NewObject(
A.Device.Int32FilterCriterion,0);Ac$.Initialize(8,2,0,true);Fx.CX(Ac$);L_.Bk(Fx);
},AEf:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var RQ=A.
_GetAutoObject(A.Device.Device).Bt.B_();if(RQ<2)return false;var BCS=A._GetAutoObject(
A.Device.Device).Bt.Hw(0,6);var BCT=A._GetAutoObject(A.Device.Device).Bt.Hw(RQ-1
,6);var A2z=A._NewObject(A.Core.Bs,0);A2z.Initialize(BCS);var A4E=A._NewObject(A.
Core.Bs,0);A4E.Initialize(BCT);if((A2z.Ab6()!==A4E.Ab6())||(A2z.Year!==A4E.Year)
)return true;else return false;},_Init:function(aArg){C.Aa9._Init.call(this,aArg
);this.__proto__=C.AMU;this.ATD(C.AHz);this.ATE(C.ADJ);this.ATt(C.QG);this.ArZ(A.
aaR(A.acf.AWa));this.Dl(A.aaR(A.acf.Akm));},_ReInit:function(){C.Aa9._ReInit.call(
this);this.ArZ(A.aaR(A.acf.AWa));this.Dl(A.aaR(A.acf.Akm));},_className:"Application::AnimalWeights"
};C.AMP={AkV:function(L_){if(!L_)return;var Fx=A._NewObject(A.Device.Filter,0);var
HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fx.CX(HZ);var ABv=A._NewObject(A.Device.Int32FilterCriterion
,0);ABv.Initialize(7,2,0,true);Fx.CX(ABv);L_.Bk(Fx);},AEf:function(){return A._GetAutoObject(
A.Device.Device).Bt.B_()>0;},_Init:function(aArg){C.Aa9._Init.call(this,aArg);this.
__proto__=C.AMP;this.ATD(C.AVw);this.ATE(C.APU);this.ATt(C.TI);this.ArZ(A.aaR(A.
acf.A8b));this.Dl(A.aaR(A.acf.ArC));},_ReInit:function(){C.Aa9._ReInit.call(this
);this.ArZ(A.aaR(A.acf.A8b));this.Dl(A.aaR(A.acf.ArC));},_className:"Application::AnimalTemperatures"
};C.AUB={VL:null,VM:null,X6:null,AgK:null,KE:null,AP:null,A$:null,Ea:null,Ly:null
,AnY:null,KZ:null,K0:null,ZV:null,ZW:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.KE.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VL.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VL.M[2]-1,0,this.VL.M[2]+1,aSize[1]]);this.VM.H([this.VL.M[2],0,this.VL.M[2]+22,
aSize[1]]);this.Ly.H([this.VM.M[2]-1,0,this.VM.M[2]+1,aSize[1]]);this.X6.H([this.
VM.M[2],0,this.VM.M[2]+22,aSize[1]]);this.AnY.H([this.X6.M[2]-1,0,this.X6.M[2]+1
,aSize[1]]);this.AgK.H([this.X6.M[2],0,aSize[0],aSize[1]]);this.KZ.H(this.VL.M);
this.K0.H(this.VM.M);this.ZV.H(this.X6.M);this.ZW.H(this.AgK.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.KE.L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;if(!!this.AX){var AlH=this.AX.Hw(Ad,6);var A1R=this.AX.Ja(Ad,3);var A2v=
this.AX.Ja(Ad,2);var A2u=this.AX.Ja(Ad,5);var A4s=this.AX.Ja(Ad,4);this.T(A._GetAutoObject(
A.acj.KR).AC$(AlH));this.KE.R(A._GetAutoObject(A.acj.KR).A64(AlH));this.VL.L(A._GetAutoObject(
A.acj.Assessment).Qu(A1R));this.VM.L(A._GetAutoObject(A.acj.Assessment).Qu(A2v));
this.X6.L(A._GetAutoObject(A.acj.Assessment).Qu(A2u));this.AgK.L(A._GetAutoObject(
A.acj.Assessment).Qu(A4s));this.KZ.L(A._GetAutoObject(A.acj.Assessment).XG(A1R));
this.K0.L(A._GetAutoObject(A.acj.Assessment).XG(A2v));this.ZV.L(A._GetAutoObject(
A.acj.Assessment).XG(A2u));this.ZW.L(A._GetAutoObject(A.acj.Assessment).XG(A4s));
this.KZ.Z(A1R===5);this.K0.Z(A2v===5);this.ZV.Z(A2u===5);this.ZW.Z(A4s===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
VL={I:this},0);A.acg.AL._Init.call(this.VM={I:this},0);A.acg.AL._Init.call(this.
X6={I:this},0);A.acg.AL._Init.call(this.AgK={I:this},0);A.acg.Text._Init.call(this.
KE={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Ly={I:this},0);A.acg.AL._Init.call(this.AnY={I:this},0);A.acg.Text._Init.call(this.
KZ={I:this},0);A.acg.Text._Init.call(this.K0={I:this},0);A.acg.Text._Init.call(this.
ZV={I:this},0);A.acg.Text._Init.call(this.ZW={I:this},0);this.__proto__=C.AUB;this.
V.H(Pb);this.VL.H(AZu);this.VM.H(AZv);this.X6.H(AZw);this.AgK.H(AZx);this.KE.R(Rq
);this.KE.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ly.L(A.jb.Bc);this.AnY.L(A.jb.Bc);this.KZ.H(AZy);this.KZ.R(Rs);this.K0.H(AZz
);this.K0.R(Rs);this.ZV.H(AZA);this.ZV.R(Rs);this.ZW.H(AZB);this.ZW.R(Rs);this.J(
this.VL,0);this.J(this.VM,0);this.J(this.X6,0);this.J(this.AgK,0);this.J(this.KE
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Ly,0);this.
J(this.AnY,0);this.J(this.KZ,0);this.J(this.K0,0);this.J(this.ZV,0);this.J(this.
ZW,0);this.KE.S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af
));this.ZV.S(A.aaL(A.fl.Af));this.ZW.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VL._Done();this.VM._Done();this.X6._Done();this.AgK._Done(
);this.KE._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Ly._Done(
);this.AnY._Done();this.KZ._Done();this.K0._Done();this.ZV._Done();this.ZW._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VL._ReInit(
);this.VM._ReInit();this.X6._ReInit();this.AgK._ReInit();this.KE._ReInit();this.
AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ly._ReInit();this.AnY._ReInit(
);this.KZ._ReInit();this.K0._ReInit();this.ZV._ReInit();this.ZW._ReInit();this.KE.
S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af));this.ZV.S(
A.aaL(A.fl.Af));this.ZW.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VM)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APS={Gp:null,Y5:null,Y1:null,Y2:null,Y3:null,Y4:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gp={I:this},0);A.acg.Text._Init.call(this.Y5={I:this},0);A.acg.Text._Init.call(this.
Y1={I:this},0);A.acg.Text._Init.call(this.Y2={I:this},0);A.acg.Text._Init.call(this.
Y3={I:this},0);A.acg.Text._Init.call(this.Y4={I:this},0);this.__proto__=C.APS;this.
Background.L(A.jb.Text);this.Gp.H(AII);this.Gp.A6(0x11);this.Gp.R(A.aaR(A.acf.Date
));this.Gp.L(A.jb.Bm);this.Y5.H(AIA);this.Y5.A6(0x12);this.Y5.R(A.aaR(A.acf.Bs));
this.Y5.L(A.jb.Bm);this.Y1.H(AZC);this.Y1.A6(0x12);this.Y1.R(A.aaR(A.acf.AUD));this.
Y1.L(A.jb.Bm);this.Y2.H(AZD);this.Y2.A6(0x12);this.Y2.R(A.aaR(A.acf.AUE));this.Y2.
L(A.jb.Bm);this.Y3.H(AZE);this.Y3.A6(0x12);this.Y3.R(A.aaR(A.acf.AOI));this.Y3.L(
A.jb.Bm);this.Y4.H(AZF);this.Y4.A6(0x12);this.Y4.R(A.aaR(A.acf.ANJ));this.Y4.L(A.
jb.Bm);this.J(this.Gp,0);this.J(this.Y5,0);this.J(this.Y1,0);this.J(this.Y2,0);this.
J(this.Y3,0);this.J(this.Y4,0);this.Gp.S(A.aaL(A.fl.Af));this.Y5.S(A.aaL(A.fl.Af
));this.Y1.S(A.aaL(A.fl.Af));this.Y2.S(A.aaL(A.fl.Af));this.Y3.S(A.aaL(A.fl.Af));
this.Y4.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Gp._Done();
this.Y5._Done();this.Y1._Done();this.Y2._Done();this.Y3._Done();this.Y4._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Gp._ReInit(
);this.Y5._ReInit();this.Y1._ReInit();this.Y2._ReInit();this.Y3._ReInit();this.Y4.
_ReInit();this.Gp.R(A.aaR(A.acf.Date));this.Y5.R(A.aaR(A.acf.Bs));this.Y1.R(A.aaR(
A.acf.AUD));this.Y2.R(A.aaR(A.acf.AUE));this.Y3.R(A.aaR(A.acf.AOI));this.Y4.R(A.
aaR(A.acf.ANJ));this.Gp.S(A.aaL(A.fl.Af));this.Y5.S(A.aaL(A.fl.Af));this.Y1.S(A.
aaL(A.fl.Af));this.Y2.S(A.aaL(A.fl.Af));this.Y3.S(A.aaL(A.fl.Af));this.Y4.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Gp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMJ={AkV:function(L_){if(!L_)return;
var Fx=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CX(HZ);var
ABc=A._NewObject(A.Device.AssessmentFilterCriterion,0);ABc.Initialize(3,5,0,true
);Fx.CX(ABc);L_.Bk(Fx);},AEf:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B_()>0;},_Init:function(
aArg){C.Aa9._Init.call(this,aArg);this.__proto__=C.AMJ;this.ATD(C.AUB);this.ATE(
C.APS);this.ATt(C.TH);this.ArZ(A.aaR(A.acf.Axz));this.Dl(A.aaR(A.acf.Ans));},_ReInit:
function(){C.Aa9._ReInit.call(this);this.ArZ(A.aaR(A.acf.Axz));this.Dl(A.aaR(A.acf.
Ans));},_className:"Application::AnimalRatings"};C.IK={B7:null,Y:null,V:null,UC:
5,T:function(E){C.I9.T.call(this,E);this.V.R(E);},Dg:function(E){C.I9.Dg.call(this
,E);this.V.L(E);},S:function(E){if(this.B7===E)return;this.B7=E;this.V.S(this.B7
);},Au2:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dd(0x1))[2]-B[0])>((B=NK.M)[2]-B[0]))this.S(A.aaL(A.fl.HL));},Kz:function(
E){if(this.UC===E)return;this.UC=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AA8:function(G){A.pe([this,this.Au2],this);},_Init:function(aArg){C.I9._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IK;this.Y.A1(0x3F);this.Y.H(AyJ);this.Y.A_5(5);this.
Y.JZ(3);this.V.A1(0x34);this.V.H(Aap);this.V.Je(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.Em=[this,this.
AA8];this.V.S(A.aaL(A.fl.Kt));},_Done:function(){this.__proto__=C.I9;this.Y._Done(
);this.V._Done();C.I9._Done.call(this);},_ReInit:function(){C.I9._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kt));},_Mark:function(D){
var B;C.I9._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RZ={AfU:0,Ai:function(Ae){C.FA.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RU));if(this.AfU>=0)this.KB((this.AfU.toFixed(
)+CR)+A.aaR(A.acf.Kq));else this.KB(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.
Ch.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfU=-1;
else this.AfU=A._GetAutoObject(A.Device.Helper).W.RU();this.Am();},_Init:function(
aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RZ;},_className:"Application::AnimalInfoItemAge"
};C.R3={A4_:0,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afy));if(
this.A4_>0)this.KB((A._GetAutoObject(A.Device.Converter).Ala(this.A4_)+CR)+A._GetAutoObject(
A.acj.DU).Af7());else this.KB(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(
this,G);this.A4_=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.R3;},_className:
"Application::AnimalInfoItemWeight"};C.TI={Y:null,Ei:null,Ey:null,Fd:null,P3:null
,Fc:null,P4:null,Ajj:0,Po:0,CQ:function(){this.Am();},Ai:function(Ae){C.JQ.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Bix));this.Fd.R(this.Ajj.toFixed());this.Fc.R(this.Po.
toFixed());if(!!this.Ajj||!!this.Po)this.P4.R(AIK+(this.Ajj+this.Po).toFixed());
else this.P4.R(A.aaR(A.acf.ASz));},Ch:function(G){C.JQ.Ch.call(this,G);var Ak2;Ak2=
A._GetAutoObject(A.Device.Helper).Bjx(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajj=Ak2.Get(2);this.Po=Ak2.Get(1);this.Am();},Dg:
function(E){C.JQ.Dg.call(this,E);this.P3.L(E);this.P4.L(E);},AsX:function(G){if(
!!this.Ajj||!!this.Po){this.Fd.Z(true);this.P3.Z(true);this.Fc.Z(true);}else{this.
Fd.Z(false);this.P3.Z(false);this.Fc.Z(false);}this.Ei.H(this.Fd.M);this.Ei.Z(this.
Fd.Fp());this.Ey.H(this.Fc.M);this.Ey.Z(this.Fc.Fp());},Au2:function(G){var B;var
NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;if(((B=NK.Dd(0x1))[2]-B[0])>((
B=NK.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.P3.S(A.aaL(A.fl.Ak));this.Fd.S(
A.aaL(A.fl.Ak));this.P4.S(A.aaL(A.fl.Ak));}},AA8:function(G){A.pe([this,this.Au2
],this);},_Init:function(aArg){C.JQ._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.Ey={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
P3={I:this},0);A.acg.Text._Init.call(this.Fc={I:this},0);A.acg.Text._Init.call(this.
P4={I:this},0);this.__proto__=C.TI;this.Y.H(AyK);this.Y.Boc(0);this.Y.JZ(3);this.
Ei.H(AZG);this.Ei.L(A.jb.Ib);this.Ey.H(AyH);this.Ey.L(A.jb.Gk);this.Fd.A1(0x34);
this.Fd.H(Aap);this.Fd.Hp(2);this.Fd.Je(true);this.Fd.R(U8);this.Fd.L(A.jb.Text);
this.Fd.Aj(true);this.P3.A1(0x34);this.P3.H(Aap);this.P3.Je(true);this.P3.R(AIr);
this.P3.L(A.jb.Text);this.P3.Aj(true);this.Fc.A1(0x34);this.Fc.H(Aap);this.Fc.Hp(
2);this.Fc.Je(true);this.Fc.R(U8);this.Fc.L(A.jb.Bm);this.Fc.Aj(true);this.P4.A1(
0x34);this.P4.H(Aap);this.P4.Je(true);this.P4.R(Rq);this.P4.L(A.jb.Text);this.P4.
Aj(true);this.J(this.Y,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.Fd,0);
this.J(this.P3,0);this.J(this.Fc,0);this.J(this.P4,0);this.Y.Em=[this,this.AA8];
this.Fd.Q9([this,this.AsX]);this.Fd.S(A.aaL(A.fl.Af));this.P3.S(A.aaL(A.fl.Af));
this.Fc.Q9([this,this.AsX]);this.Fc.S(A.aaL(A.fl.Af));this.P4.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JQ;this.Y._Done();this.Ei._Done();this.Ey._Done(
);this.Fd._Done();this.P3._Done();this.Fc._Done();this.P4._Done();C.JQ._Done.call(
this);},_ReInit:function(){C.JQ._ReInit.call(this);this.Y._ReInit();this.Ei._ReInit(
);this.Ey._ReInit();this.Fd._ReInit();this.P3._ReInit();this.Fc._ReInit();this.P4.
_ReInit();this.Fd.S(A.aaL(A.fl.Af));this.P3.S(A.aaL(A.fl.Af));this.Fc.S(A.aaL(A.
fl.Af));this.P4.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.JQ._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QG={FX:0,Ih:0
,A2Z:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(AZH+A.aaR(A.acf.AHu));if(
this.A2Z){this.KB((A._GetAutoObject(A.Device.Converter).Td(this.FX,2,true)+CR)+A.
_GetAutoObject(A.acj.DU).AaE());this.Background.L(A._GetAutoObject(A.acj.DU).Az5(
this.FX,this.Ih));this.Dg(A._GetAutoObject(A.acj.DU).Az7(this.FX,this.Ih));}else{
this.KB(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CK);this.Dg(A.jb.Text);}},Ch:
function(G){C.FA.Ch.call(this,G);var LK=A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LK){this.A2Z=true;this.FX=A._GetAutoObject(A.acj.DU).AlE(LK,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2Z=false;this.FX=0;}this.Ih=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.QG;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.TH={Y:null,FY:null,Ei:
null,Ey:null,MP:null,Fd:null,Fc:null,O6:null,AaG:0,Ajj:0,Po:0,CQ:function(){this.
Am();},Ai:function(Ae){C.JQ.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axz));this.MP.R(
this.AaG.toFixed());this.Fd.R(this.Ajj.toFixed());this.Fc.R(this.Po.toFixed());}
,Ch:function(G){C.JQ.Ch.call(this,G);var Ak2;Ak2=A._GetAutoObject(A.Device.Helper
).A6_(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.AaG=Ak2.Get(3);this.Ajj=Ak2.Get(2);this.Po=Ak2.Get(1);this.Am();},AsX:
function(G){if((!!this.AaG||!!this.Ajj)||!!this.Po){this.MP.Z(true);this.Fd.Z(true
);this.Fc.Z(true);this.O6.Z(false);}else{this.MP.Z(false);this.Fd.Z(false);this.
Fc.Z(false);this.O6.Z(true);}this.FY.H(this.MP.M);this.FY.Z(this.MP.Fp());this.Ei.
H(this.Fd.M);this.Ei.Z(this.Fd.Fp());this.Ey.H(this.Fc.M);this.Ey.Z(this.Fc.Fp()
);},Au2:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dd(0x1))[2]-B[0])>((B=NK.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.Fd.
S(A.aaL(A.fl.Ak));this.MP.S(A.aaL(A.fl.Ak));}},AA8:function(G){A.pe([this,this.Au2
],this);},_Init:function(aArg){C.JQ._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FY={I:this},0);A.acg.AL._Init.call(this.Ei={
I:this},0);A.acg.AL._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MP={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
Fc={I:this},0);A.acg.Text._Init.call(this.O6={I:this},0);this.__proto__=C.TH;this.
Y.A1(0x3F);this.Y.H(AyK);this.Y.A_5(5);this.Y.JZ(3);this.FY.H(AZI);this.FY.L(A.jb.
E1);this.Ei.H(AZJ);this.Ei.L(A.jb.Ib);this.Ey.H(AZK);this.Ey.L(A.jb.Gk);this.MP.
A1(0x3C);this.MP.H(Aap);this.MP.Hp(2);this.MP.Je(true);this.MP.R(U8);this.MP.L(A.
jb.Text);this.MP.Aj(true);this.Fd.A1(0x3C);this.Fd.H(Aap);this.Fd.Hp(2);this.Fd.
Je(true);this.Fd.R(U8);this.Fd.L(A.jb.Text);this.Fd.Aj(true);this.Fc.A1(0x3C);this.
Fc.H(Aap);this.Fc.Hp(2);this.Fc.Je(true);this.Fc.R(U8);this.Fc.L(A.jb.Bm);this.Fc.
Aj(true);this.O6.A1(0x34);this.O6.H(Aap);this.O6.Je(true);this.O6.A6(0x11);this.
O6.R(A.aaR(A.acf.ASz));this.O6.L(A.jb.Text);this.O6.Aj(true);this.O6.Z(false);this.
J(this.Y,0);this.J(this.FY,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.MP
,0);this.J(this.Fd,0);this.J(this.Fc,0);this.J(this.O6,0);this.Y.Em=[this,this.AA8
];this.MP.Q9([this,this.AsX]);this.MP.S(A.aaL(A.fl.Af));this.Fd.Q9([this,this.AsX
]);this.Fd.S(A.aaL(A.fl.Af));this.Fc.Q9([this,this.AsX]);this.Fc.S(A.aaL(A.fl.Af
));this.O6.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JQ;this.Y._Done(
);this.FY._Done();this.Ei._Done();this.Ey._Done();this.MP._Done();this.Fd._Done(
);this.Fc._Done();this.O6._Done();C.JQ._Done.call(this);},_ReInit:function(){C.JQ.
_ReInit.call(this);this.Y._ReInit();this.FY._ReInit();this.Ei._ReInit();this.Ey.
_ReInit();this.MP._ReInit();this.Fd._ReInit();this.Fc._ReInit();this.O6._ReInit(
);this.O6.R(A.aaR(A.acf.ASz));this.MP.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.fl.Af)
);this.Fc.S(A.aaL(A.fl.Af));this.O6.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(
D){var B;C.JQ._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.O6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMr={_Init:function(aArg){C.Aql._Init.call(
this,aArg);this.__proto__=C.AMr;this.A5j=1;this.Rm.Cr(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aql._ReInit.call(this);this.Rm.Cr(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARl={OR:null,IV:null,H_:null,IT:null,GP:null,Al7:function(G){A.pe([this,this.
BAX],this);},BAX:function(G){A._GetAutoObject(C.A7).Cb(3);},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.OR._Init.call(this.OR={I:this},0);C.BX._Init.call(this.
IV={I:this},0);C.SX._Init.call(this.H_={I:this},0);C.AGX._Init.call(this.IT={I:this
},0);C.Rd._Init.call(this.GP={I:this},0);this.__proto__=C.ARl;var B;this.Jf(A.aaR(
A.acf.A$7));this.IV.H(Ah3);this.IV.Aj(true);this.IV.T(A.aaR(A.acf.Language));this.
IV.A_N(100);this.H_.H(U7);this.H_.Aj(true);this.H_.T(A.aaR(A.acf.Date));this.H_.
Bi(true);this.IT.H(Aao);this.IT.Aj(true);this.IT.T(A.aaR(A.acf.Bs));this.GP.H(Ah2
);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGu));this.GP.Bi(true);
this.GP.Ar_(false);this.GP.A_V(true);this.J5(this.Y,-1);this.J5(this.Ay,-1);this.
J(this.IV,0);this.J(this.H_,0);this.J(this.IT,0);this.J(this.GP,0);this.IV.ZA(A.
aaL(A.fl.H6));this.IV.ZB(A.aaL(A.fl.H6));this.IV.Au([B=this.OR,B.B$,B.Cc]);this.
IV.CL(this.OR);this.H_.Ab7([B=this.H_,B.FW]);this.H_.Gt([this,this.D_,this.GT]);
this.H_.AkA(A.aaL(A.ach.Edit));this.H_.Acb([B=A._GetAutoObject(A.Device.Helper),
B.U9,B.Va]);this.IT.Ab7([B=this.IT,B.FW]);this.IT.Gt([this,this.D_,this.GT]);this.
IT.AkA(A.aaL(A.ach.Edit));this.IT.Acb([B=A._GetAutoObject(A.Device.Helper),B.U9,
B.Va]);this.GP.Ab7([B=this.GP,B.FW]);this.GP.Gt([this,this.D_,this.GT]);this.GP.
AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(A.Device.Device),B.AS1,B.A0O
]);},_Done:function(){this.__proto__=C.Cg;this.OR._Done();this.IV._Done();this.H_.
_Done();this.IT._Done();this.GP._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.OR._ReInit();this.IV._ReInit();this.H_._ReInit();
this.IT._ReInit();this.GP._ReInit();this.Jf(A.aaR(A.acf.A$7));this.IV.T(A.aaR(A.
acf.Language));this.H_.T(A.aaR(A.acf.Date));this.IT.T(A.aaR(A.acf.Bs));this.GP.T(
A.aaR(A.acf.AGu));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aa9={Bg:null,FE:null,Am5:null,AmO:null,Sk:null,A7u:A.jV,KS:A.jV,ARQ:null,ARR:
null,ADC:null,CD:function(G){var B;C.D9.CD.call(this,G);A.zX([this,this.A3x],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId],0);this.A3x(this);},E4:function(
G){var B;A.z$([this,this.A3x],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId
],0);C.D9.E4.call(this,G);},ZC:function(E){C.D9.ZC.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.ZC(E);},ATD:function(E){if(this.ARQ===E)return;this.
ARQ=E;if(!!this.Bg)this.Bg.N8(E);},ATE:function(E){if(this.ARR===E)return;this.ARR=
E;this.BpI(this);},ATt:function(E){if(this.ADC===E)return;this.ADC=E;A.pe([this,
this.BpH],this);},ArZ:function(E){if(this.A7u===E)return;this.A7u=E;this.Sk.R(E);
},Dl:function(E){if(this.KS===E)return;this.KS=E;if(!!this.Bg)this.Bg.Dl(E);},AkV:
function(L_){A.ab5("%s",AZL);},AEf:function(){A.ab5("%s",Ali);return false;},AxH:
function(G){if(!!this.Bg)this.HR(this.Bg);this.Bg=A._NewObject(C.Gd,0);this.Bg.H(
Atl);this.Bg.Zy(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KS);this.Bg.
N8(this.ARQ);this.Bg.ZC(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},BpI:function(
G){var B;if(!!this.FE)this.HR(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(
this.ARR,0))?B:null);this.FE.H(I1);this.J(this.FE,0);},BpH:function(G){var B;if(
!!this.Am5)this.HR(this.Am5);if(!!this.ADC&&this.AEf()){this.Am5=(C.I9.isPrototypeOf(
B=A._NewObject(this.ADC,0))?B:null);this.Am5.H(BD);this.Am5.Bi(false);this.J(this.
Am5,0);this.Sk.Z(false);}else this.Sk.Z(true);},A3x:function(G){this.AkV(A._GetAutoObject(
A.Device.Device).Bt);this.AxH(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmO={I:this},0);C.CG._Init.call(this.Sk={I:this},
0);this.__proto__=C.Aa9;this.AmO.H(BD);this.AmO.L(A.jb.CK);this.Sk.H(AH0);this.Sk.
A6(0x11);this.Sk.L(A.jb.Text);this.J(this.AmO,0);this.J(this.Sk,0);this.Sk.S(A.aaL(
A.fl.Kt));this.Sk.A0(A.aaL(A.fl.HL));},_Done:function(){this.__proto__=C.D9;this.
AmO._Done();this.Sk._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmO._ReInit();this.Sk._ReInit();this.Sk.S(A.aaL(A.fl.Kt));this.Sk.
A0(A.aaL(A.fl.HL));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmO)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Ko={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bc6],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI1],0);A.pe([this,this.Bc6],this
);},Du:function(){return 5;},Gm:function(aIndex){return this.AnimalListContentToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zw(E);},Bc6:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Ko;this.BI.Set(0,0);this.BI.Set(1,14);this.BI.Set(2,
1);this.BI.Set(3,2);this.BI.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARW={IV:null
,Ze:null,Zn:null,Zk:null,Zo:null,Zf:null,Zi:null,Zl:null,Zm:null,Zh:null,OR:null
,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.BX._Init.call(this.IV={I:this
},0);C.Np._Init.call(this.Ze={I:this},0);C.Np._Init.call(this.Zn={I:this},0);C.Np.
_Init.call(this.Zk={I:this},0);C.Np._Init.call(this.Zo={I:this},0);C.Np._Init.call(
this.Zf={I:this},0);C.Np._Init.call(this.Zi={I:this},0);C.Np._Init.call(this.Zl={
I:this},0);C.Np._Init.call(this.Zm={I:this},0);C.Np._Init.call(this.Zh={I:this},
0);C.OR._Init.call(this.OR={I:this},0);this.__proto__=C.ARW;var B;this.Jf(A.aaR(
A.acf.Settings));this.IV.H(Ah3);this.IV.Aj(true);this.IV.T(A.aaR(A.acf.Language)
);this.IV.A_N(100);this.Ze.H(Atm);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.ACN));this.
Ze.Ns(16);this.Zn.H(Atn);this.Zn.Aj(true);this.Zn.T(A.aaR(A.acf.AHp));this.Zn.Ns(
22);this.Zk.H(Ato);this.Zk.Aj(true);this.Zk.T(A.aaR(A.acf.Temperature));this.Zk.
Ns(17);this.Zo.H(AyL);this.Zo.Aj(true);this.Zo.T(A.aaR(A.acf.ACK));this.Zo.Ns(42
);this.Zf.H(AoA);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.Device));this.Zf.Ns(18);
this.Zi.H(AoA);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.Asv));this.Zi.Ns(19);this.
Zl.H(AZM);this.Zl.Aj(true);this.Zl.T(A.aaR(A.acf.LinkTransponder));this.Zl.Ns(89
);this.Zm.H(AZN);this.Zm.Aj(true);this.Zm.T(A.aaR(A.acf.UnlinkTransponder));this.
Zm.Ns(95);this.Zh.H(AyA);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.AC2));this.Zh.Ns(
76);this.J(this.IV,0);this.J(this.Ze,0);this.J(this.Zn,0);this.J(this.Zk,0);this.
J(this.Zo,0);this.J(this.Zf,0);this.J(this.Zi,0);this.J(this.Zl,0);this.J(this.Zm
,0);this.J(this.Zh,0);this.IV.ZA(A.aaL(A.fl.H6));this.IV.ZB(A.aaL(A.fl.H6));this.
IV.Au([B=this.OR,B.B$,B.Cc]);this.IV.CL(this.OR);this.Ze.AR=[B=this.Ze,B.Nv];this.
Zn.AR=[B=this.Zn,B.Nv];this.Zk.AR=[B=this.Zk,B.Nv];this.Zo.AR=[B=this.Zo,B.Nv];this.
Zf.AR=[B=this.Zf,B.Nv];this.Zi.AR=[B=this.Zi,B.Nv];this.Zl.AR=[B=this.Zl,B.Nv];this.
Zm.AR=[B=this.Zm,B.Nv];this.Zh.AR=[B=this.Zh,B.Nv];},_Done:function(){this.__proto__=
C.Cg;this.IV._Done();this.Ze._Done();this.Zn._Done();this.Zk._Done();this.Zo._Done(
);this.Zf._Done();this.Zi._Done();this.Zl._Done();this.Zm._Done();this.Zh._Done(
);this.OR._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.IV._ReInit();this.Ze._ReInit();this.Zn._ReInit();this.Zk._ReInit();this.Zo.
_ReInit();this.Zf._ReInit();this.Zi._ReInit();this.Zl._ReInit();this.Zm._ReInit(
);this.Zh._ReInit();this.OR._ReInit();this.Jf(A.aaR(A.acf.Settings));this.IV.T(A.
aaR(A.acf.Language));this.Ze.T(A.aaR(A.acf.ACN));this.Zn.T(A.aaR(A.acf.AHp));this.
Zk.T(A.aaR(A.acf.Temperature));this.Zo.T(A.aaR(A.acf.ACK));this.Zf.T(A.aaR(A.acf.
Device));this.Zi.T(A.aaR(A.acf.Asv));this.Zl.T(A.aaR(A.acf.LinkTransponder));this.
Zm.T(A.aaR(A.acf.UnlinkTransponder));this.Zh.T(A.aaR(A.acf.AC2));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AME={EU:null,Init:function(aArg){this.EU.Ahx(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag1)));},AUI:function(
){this.EU.Ae1(this.AO6());this.AaI=!this.EU.EZ.AZ;},AiY:function(G){this.EU.Ahx(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag1)));this.AUI();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dl(A.aaR(A.acf.A8B));else this.Dl(A.aaR(A.acf.ArC));this.Am();},AO6:function(
){var Bz=A._NewObject(C.AqB,0);var Qr=A._GetAutoObject(A.Device.Helper).AOn(A._GetAutoObject(
A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqx(Qr-(86400*this.
MF));Bz.AnF(AZO);Bz.Q7([].concat(0,Bz.Gl.slice(1,4)));Bz.Q7(A.abN(Bz.Gl,(Qr-Dx)|
0));Bz.Q7(A.abP(Bz.Gl,3400));Bz.Q7([].concat(Bz.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(
A.Device.Device).Bt.B_();Bz.AwZ(Gi);Bz.Yp();if(Gi>0){var O=0;while(O<Gi){var Ap1=
A._GetAutoObject(A.Device.Device).Bt.CC(O,7);var Ap2=A._GetAutoObject(A.Device.Device
).Bt.Hw(O,6)-Dx;if(Ap1>0)Bz.Aqm(Ap2,Ap1);O=O+1;}}return Bz;},_Init:function(aArg
){C.Le._Init.call(this,aArg);C.Aq5._Init.call(this.EU={I:this},0);this.__proto__=
C.AME;this.EU.H(AZP);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFv(C.AG$);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Le;this.EU._Done(
);C.Le._Done.call(this);},_ReInit:function(){C.Le._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.Le._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMF={Aaa:null,O9:null,AgW:null,AaI:false,Init:function(aArg){this.Aaa.Ahx(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag1)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgW.Z(this.AaI);
},CD:function(G){var B;C.D9.CD.call(this,G);A.zX([this,this.AiY],[B=A._GetAutoObject(
A.Device.Helper),B.U9,B.Va],0);A.zV([this,this.AiY],A._GetAutoObject(A.Device.Device
).Bt,0);A.zX([this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId
],0);A.pe([this,this.Amj],this);},E4:function(G){var B;A.z$([this,this.AiY],[B=A.
_GetAutoObject(A.Device.Helper),B.U9,B.Va],0);A.z9([this,this.AiY],A._GetAutoObject(
A.Device.Device).Bt,0);A.z$([this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).
W,B.Q6,B.OnSetId],0);C.D9.E4.call(this,G);},Amj:function(G){var Fx=A._NewObject(
A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CX(HZ);A._GetAutoObject(A.Device.
Device).Bt.Bk(Fx);},AiY:function(G){this.Aaa.Ahx(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag1)));this.Bo3();this.
Am();},Bo3:function(){var B;var Gi=A._GetAutoObject(A.Device.Device).Bt.B_();var
Lc=A._NewObject(C.AqB,0);var Vy=A._NewObject(C.AqB,0);var Qr=A._GetAutoObject(A.
Device.Helper).AOn(A._GetAutoObject(A.Device.Helper).Dv());var Dx=A._GetAutoObject(
A.Device.Helper).Aqx(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);Lc.Q7([].concat(
0,Lc.Gl.slice(1,4)));Lc.Q7(A.abN(Lc.Gl,(Qr-Dx)|0));Lc.Q7(A.abP(Lc.Gl,0));Lc.Q7([
].concat(Lc.Gl.slice(0,3),150000));Lc.AnF(AZQ);Vy.Q7([].concat(0,Vy.Gl.slice(1,4
)));Vy.Q7(A.abN(Vy.Gl,(Qr-Dx)|0));Vy.Q7(A.abP(Vy.Gl,0));Vy.Q7([].concat(Vy.Gl.slice(
0,3),1500));Vy.AnF(AZR);Lc.AwZ(Gi);Lc.Yp();Vy.AwZ(Gi);Vy.Yp();if(Gi>0){var O=0;var
AaK=0;var AAu=0;var AKl=0;var A2A=0;var BdK=true;while(O<Gi){var Amd=A._GetAutoObject(
A.Device.Device).Bt.CC(O,8);var AaX=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-
Dx;if(Amd>0){Lc.Aqm(AaX,Amd);if(!A2A){A2A=AaX;AKl=Amd;}if(AAu>0){var LK=A._GetAutoObject(
A.Device.Helper).Mf(AAu,AaX);if(!!LK){var FX=A._GetAutoObject(A.acj.DU).AlE(LK,AaK
,Amd);if(BdK){Vy.Aqm(AAu,FX);BdK=false;}Vy.Aqm(AaX,FX);}}AaK=Amd;AAu=AaX;}O=O+1;
}var AdP=A.acf.Bhz;var FX=A._GetAutoObject(A.Device.Helper).Bjz(A2A,AAu,AKl,AaK);
AdP=A._GetAutoObject(A.Device.Helper).MN(AdP,Pc,FX.toFixed());AdP=A._GetAutoObject(
A.Device.Helper).MN(AdP,Ayl,A._GetAutoObject(A.acj.DU).AaE());this.O9.Ip.R(AdP);
}this.AaI=!Lc.AZ;if(this.AaI)this.O9.Ip.R(A.jV);(C.O9.isPrototypeOf(B=this.O9.EU
)?B:null).AnA([B=A._GetAutoObject(A.Device.Helper).W,B.PX,B.EC]);this.Aaa.Ae1(Lc
);this.O9.Ae1(Vy);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.Aq5._Init.
call(this.Aaa={I:this},0);C.Aq5._Init.call(this.O9={I:this},0);C.AkT._Init.call(
this.AgW={I:this},0);this.__proto__=C.AMF;this.Aaa.H(AZS);this.Aaa.T(A.aaR(A.acf.
Afy));this.Aaa.AFv(C.ANa);this.O9.H(AoB);this.O9.T(A.aaR(A.acf.AHu));this.O9.AFv(
C.O9);this.AgW.H(U5);this.AgW.R(A.aaR(A.acf.Akm));this.J(this.Aaa,0);this.J(this.
O9,0);this.J(this.AgW,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;
this.Aaa._Done();this.O9._Done();this.AgW._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Aaa._ReInit();this.O9._ReInit();this.AgW.
_ReInit();this.Aaa.T(A.aaR(A.acf.Afy));this.O9.T(A.aaR(A.acf.AHu));this.AgW.R(A.
aaR(A.acf.Akm));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Aaa
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"
};C.AMC={Avp:null,Avo:null,AxB:null,AuX:null,VK:null,Abw:null,Abv:null,Acr:null,
Afj:null,Init:function(aArg){this.VK.Ahx(A._NewObject(A.Core.Bs,0).Initialize(A.
_GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag1)));},A42:function(G
){this.VK.Acc(this.AuX);this.Abw.Acc(this.Avp);this.Abv.Acc(this.Avo);this.Acr.Acc(
this.AxB);},AxA:function(){var Gi=A._GetAutoObject(A.Device.Device).Bt.B_();this.
AuX=A._NewObject(C.Ajw,0);this.Avp=A._NewObject(C.Ajw,0);this.Avo=A._NewObject(C.
Ajw,0);this.AxB=A._NewObject(C.Ajw,0);if(Gi>0){var O=Gi-1;while(O>=0){var D8=A._GetAutoObject(
A.Device.Device).Bt.Hw(O,6);this.AtF(this.AuX,O,3,D8);this.AtF(this.Avp,O,2,D8);
this.AtF(this.Avo,O,5,D8);this.AtF(this.AxB,O,4,D8);O=O-1;}}this.AaI=!(((this.AuX.
AZ+this.Avo.AZ)+this.Avp.AZ)+this.AxB.AZ);A.pe([this,this.A42],this);},AtF:function(
A1A,Ad,A1z,Ql){var AlA=A._GetAutoObject(A.Device.Device).Bt.Ja(Ad,A1z);if(!!AlA)
A1A.OA(AlA,Ql);},Aca:function(E){if(this.MF===E)return;C.Le.Aca.call(this,E);if(
!!this.VK)this.VK.Aca(E);if(!!this.Abw)this.Abw.Aca(E);if(!!this.Abv)this.Abv.Aca(
E);if(!!this.Acr)this.Acr.Aca(E);this.Afj.Aca(E);},AiY:function(G){this.VK.Ahx(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag1)));this.AxA();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dl(A.aaR(A.acf.BkY));else this.Dl(A.aaR(A.acf.Ans));this.Am();},_Init:function(
aArg){C.Le._Init.call(this,aArg);C.AhC._Init.call(this.VK={I:this},0);C.AhC._Init.
call(this.Abw={I:this},0);C.AhC._Init.call(this.Abv={I:this},0);C.AhC._Init.call(
this.Acr={I:this},0);C.AUF._Init.call(this.Afj={I:this},0);this.__proto__=C.AMC;
this.Dl(A.aaR(A.acf.Ans));this.VK.H(AZT);this.VK.R(A.aaR(A.acf.AGz));this.Abw.H(
AZU);this.Abw.R(A.aaR(A.acf.Feed));this.Abv.H(AZV);this.Abv.R(A.aaR(A.acf.AGB));
this.Acr.H(AZW);this.Acr.R(A.aaR(A.acf.AGC));this.Afj.H(AZX);this.J(this.VK,-1);
this.J(this.Abw,-1);this.J(this.Abv,-1);this.J(this.Acr,-1);this.J(this.Afj,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.Le;this.VK._Done();this.Abw.
_Done();this.Abv._Done();this.Acr._Done();this.Afj._Done();C.Le._Done.call(this);
},_ReInit:function(){C.Le._ReInit.call(this);this.VK._ReInit();this.Abw._ReInit(
);this.Abv._ReInit();this.Acr._ReInit();this.Afj._ReInit();this.Dl(A.aaR(A.acf.Ans
));this.VK.R(A.aaR(A.acf.AGz));this.Abw.R(A.aaR(A.acf.Feed));this.Abv.R(A.aaR(A.
acf.AGB));this.Acr.R(A.aaR(A.acf.AGC));},_Mark:function(D){var B;C.Le._Mark.call(
this,D);if((B=this.Avp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avo)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AxB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMD={EU:null,WT:null,Ael:null,A2X:false,Init:function(aArg){this.WT.Ahx(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag1)));},Bl:function(aSize){C.Le.Bl.call(this,aSize);this.Ael.H(this.EU.M);},Ai:
function(Ae){C.Le.Ai.call(this,Ae);var BCu=!this.AaI&&this.A2X;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Ael.R(A.aaR(A.acf.A8B));else this.
Ael.R(A.aaR(A.acf.ArC));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dl(A.aaR(
A.acf.BkZ));else this.Dl(A.aaR(A.acf.Bk0));this.Ael.Z(BCu);},AiY:function(G){this.
WT.Ahx(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.Ag1)));this.AaI=true;this.A2X=true;this.AxA();this.AUI();this.
Am();},AUI:function(){this.EU.Ae1(this.AO6());if(!!this.EU.EZ&&(this.EU.EZ.AZ>0)
){this.AaI=false;this.A2X=false;}},AO6:function(){var Bz=A._NewObject(C.AqB,0);var
Qr=A._GetAutoObject(A.Device.Helper).AOn(A._GetAutoObject(A.Device.Helper).Dv());
var Dx=A._GetAutoObject(A.Device.Helper).Aqx(Qr-(86400*this.MF));Bz.AnF(AZY);Bz.
Q7([].concat(0,Bz.Gl.slice(1,4)));Bz.Q7(A.abN(Bz.Gl,(Qr-Dx)|0));Bz.Q7(A.abP(Bz.Gl
,3400));Bz.Q7([].concat(Bz.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(A.Device.
Device).Bt.B_();Bz.AwZ(Gi);Bz.Yp();if(Gi>0){var O=0;while(O<Gi){var Ap1=A._GetAutoObject(
A.Device.Device).Bt.CC(O,7);var Ap2=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-
Dx;if(Ap1>0)Bz.Aqm(Ap2,Ap1);O=O+1;}}return Bz;},BjO:function(){var Gi=A._GetAutoObject(
A.Device.Device).Bt.B_();if(Gi>0){var Bgr=A._NewObject(C.Ajw,0);var O=Gi-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LW=A._GetAutoObject(A.Device.Helper).ADq(D3);if(!!LW)Bgr.OA(LW,D3.Timestamp
);O=O-1;}return Bgr;}else return null;},AxA:function(){this.WT.Acc(this.BjO());if(
!!this.WT.N$&&(this.WT.N$.AZ>0))this.AaI=false;},_Init:function(aArg){C.Le._Init.
call(this,aArg);C.Aq5._Init.call(this.EU={I:this},0);C.AhC._Init.call(this.WT={I:
this},0);C.AkT._Init.call(this.Ael={I:this},0);this.__proto__=C.AMD;this.EU.H(Atl
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFv(C.AG$);this.WT.H(AZZ);this.WT.
R(A.aaR(A.acf.Rating));this.Ael.H(Atl);this.J(this.EU,-2);this.J(this.WT,-2);this.
J(this.Ael,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Le;this.EU._Done(
);this.WT._Done();this.Ael._Done();C.Le._Done.call(this);},_ReInit:function(){C.
Le._ReInit.call(this);this.EU._ReInit();this.WT._ReInit();this.Ael._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WT.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.Le._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ael)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WZ={Q:null,Gx:null,Gy:null
,QP:null,AM:0,Gr:0,Ga:100,FI:0,Init:function(aArg){},H1:function(G){this.FI=1;C.
Eg.H1.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QP.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QP.Z(this.Gr!==
this.Ga);this.QP.L(this.V.AQ);if((this.FI===4)||(this.FI===5))this.QP.L(A.jb.E1);
},Al8:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay6],this);
this.Bo.As(false);}this.Bo.As(true);},Qx:function(G){if(this.FI===5)A.pe([this,this.
Ay6],this);if(this.FI===4)A.pe([this,this.Ay7],this);if(this.FI===1)A.pe(this.AR
,this);this.FI=0;this.Am();},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcX:function(s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcX],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcX],E,0);if(!!E)A.pe([this,this.AcX],this);},Al9:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.Ay7],this);this.Bo.As(false);}this.Bo.As(true
);},Ki:function(G){this.FI=0;},Ay7:function(s){this.Ki(s);},Kd:function(G){this.
FI=0;},Ay6:function(s){this.Kd(s);},Bx:function(E){if(E<this.Gr)E=this.Gr;if(E>this.
Ga)E=this.Ga;if(this.AM===E)return;this.AM=E;this.Am();},Gb:function(E){if(this.
Gr===E)return;this.Gr=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BF._Init.call(
this.Gx={I:this},0);A.Core.BF._Init.call(this.Gy={I:this},0);A.acg.Ap._Init.call(
this.QP={I:this},0);this.__proto__=C.WZ;this.H(K4);this.Gx.Filter=5;this.Gy.Filter=
4;this.Background.H(K4);this.V.H(AcQ);this.V.R(LB);this.QP.H(AyM);this.J(this.QP
,0);this.Gx.BG=[this,this.Al8];this.Gx.D1=[this,this.Al8];this.Gy.BG=[this,this.
Al9];this.Gy.D1=[this,this.Al9];this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak
));this.V.Cr(null);this.QP.Ax(A.aaL(A.ach.AM0));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gx._Done();this.Gy._Done();this.QP._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gx._ReInit();this.Gy.
_ReInit();this.QP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AU6={AC:null,CM:null,HP:
null,Bl:function(aSize){C.WZ.Bl.call(this,aSize);this.CM.H([this.QP.M[2],this.QP.
M[1],this.M[2],this.QP.M[3]]);},Ai:function(Ae){C.WZ.Ai.call(this,Ae);this.CM.AbM(
0,this.CM.AZ-1);if(this.Gr!==this.Ga)this.QP.Z(true);},Init:function(aArg){},C5:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Ki:function(G){var F;var BP=this.AM;C.WZ.Ki.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},Kd:function(G){var F;var BP=this.AM;C.WZ.Kd.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var QD=0;if(this.Gr
!==this.Ga){if(E<this.Gr){E=this.Ga;QD=-this.CM.GO*this.CM.AZ;}if(E>this.Ga){E=this.
Gr;QD=this.CM.GO;}}C.WZ.Bx.call(this,E);if(!!QD)this.CM.Gc(QD);this.CM.GU(this.AM
);this.CM.HK(this.CM.Gu,true,this.HP,null);},Ho:function(G){var B;var Gh=this.CM.
G8;var CA=(C.CG.isPrototypeOf(B=this.CM.Cj)?B:null);if(!CA)return;CA.S(this.V.B7
);CA.A0(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));else CA.
R(Xo);CA.H(A.abK(CA.M,[(B=this.CM.M)[2]-B[0],this.CM.GO]));},CL:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gb(0);this.EV(this.AC.Du()-1);this.CM.
JD(this.AC.Du());this.CM.AbM(0,this.CM.AZ-1);}},_Init:function(aArg){C.WZ._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gn._Init.call(this.
HP={I:this},0);this.__proto__=C.AU6;this.H(K4);this.QP.H(AIL);this.CM.Ae9(40);this.
CM.N8(C.CG);this.HP.WR(23);this.HP.HQ(1);this.HP.Fq(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.CM.Ho=[this,this.Ho];this.Init(
aArg);},_Done:function(){this.__proto__=C.WZ;this.CM._Done();this.HP._Done();C.WZ.
_Done.call(this);},_ReInit:function(){C.WZ._ReInit.call(this);this.CM._ReInit();
this.HP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WZ._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.R4={ALL:0
,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.AHu));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.KB((A._GetAutoObject(A.Device.Converter).Ala(this.ALL
)+CR)+A._GetAutoObject(A.acj.DU).Af7());else this.KB(A.aaR(A.acf.Unknown));},Ch:
function(G){C.FA.Ch.call(this,G);this.ALL=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.FA._Init.call(this,aArg);this.__proto__=C.R4;},_className:"Application::AnimalInfoItemWeightGain"
};C.APJ={Bc:null,Df:null,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Device),B.AEP,B.AI0],0);},DX:function(G){C.IP.DX.call(this,G);this.Df.Ax(
A._GetAutoObject(A.Device.Converter).BhO(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.C8._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Df={I:this},0);this.__proto__=C.APJ;this.Bc.DD(
Alm);this.Bc.DN(AyN);this.Bc.L(A.jb.Bc);this.Df.H(AZ0);this.Df.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Df,0);this.Df.Ax(A.aaL(A.ach.AjW));this.Init(aArg);},_Done:
function(){this.__proto__=C.IP;this.Bc._Done();this.Df._Done();C.IP._Done.call(this
);},_ReInit:function(){C.IP._ReInit.call(this);this.Bc._ReInit();this.Df._ReInit(
);},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANM={ZT:null,KF:null,Mt:null,Timer:null,ACB:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZT.R(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.Brk),Pc,this.ACB.
toFixed()));},CD:function(G){this.Timer.As(true);},E4:function(G){this.Timer.As(
false);},BBJ:function(G){if(this.ACB>1){this.ACB=this.ACB-1;this.Am();}else{this.
Timer.As(false);A._GetAutoObject(A.Device.Device).AxI();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZT={I:this},0);A.acg.Text.
_Init.call(this.KF={I:this},0);A.acg.Ap._Init.call(this.Mt={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANM;this.Background.L(A.jb.CU
);this.N.Z(true);this.ZT.H(AZ1);this.ZT.KX(true);this.ZT.R(A.jV);this.ZT.L(A.jb.
Text);this.KF.H(AZ2);this.KF.KX(true);this.KF.R(A.aaR(A.acf.A5T));this.KF.L(A.jb.
Text);this.Mt.H(AIM);this.J(this.ZT,0);this.J(this.KF,0);this.J(this.Mt,0);this.
ZT.S(A.aaL(A.fl.Af));this.KF.S(A.aaL(A.fl.Af));this.Mt.Ax(A.aaL(A.ach.AB7));this.
Timer.MJ=[this,this.BBJ];},_Done:function(){this.__proto__=C.AB;this.ZT._Done();
this.KF._Done();this.Mt._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZT._ReInit();this.KF._ReInit();this.Mt._ReInit(
);this.Timer._ReInit();this.KF.R(A.aaR(A.acf.A5T));this.ZT.S(A.aaL(A.fl.Af));this.
KF.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANt={KF:null,AmF:null
,QI:null,CQ:function(){this.Am();},Ai:function(Ae){C.Aea.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Abc<=10)this.KF.R(A.aaR(A.acf.Bh0));else this.KF.R(A.aaR(A.acf.
A5U));},_Init:function(aArg){C.Aea._Init.call(this,aArg);A.acg.Text._Init.call(this.
KF={I:this},0);A.acg.Ap._Init.call(this.AmF={I:this},0);C.CG._Init.call(this.QI={
I:this},0);this.__proto__=C.ANt;this.SY.H(AZ3);this.Mt.H(AZ4);this.KF.H(AZ5);this.
KF.KX(true);this.KF.L(A.jb.Text);this.AmF.H(AIM);this.QI.H(AZ6);this.QI.Z(true);
this.QI.R(A.aaR(A.acf.AUG));this.QI.L(A.jb.Text);this.J(this.KF,0);this.J(this.AmF
,0);this.J(this.QI,0);this.KF.S(A.aaL(A.fl.Af));this.AmF.Ax(A.aaL(A.ach.AB7));this.
QI.S(A.aaL(A.fl.Af));this.QI.A0(A.aaL(A.fl.Ak));this.QI.Cr(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Aea;this.KF._Done();this.AmF._Done();this.QI._Done();
C.Aea._Done.call(this);},_ReInit:function(){C.Aea._ReInit.call(this);this.KF._ReInit(
);this.AmF._ReInit();this.QI._ReInit();this.QI.R(A.aaR(A.acf.AUG));this.KF.S(A.aaL(
A.fl.Af));this.QI.S(A.aaL(A.fl.Af));this.QI.A0(A.aaL(A.fl.Ak));this.QI.Cr(A.aaL(
A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.Aea._Mark.call(this,D);if((B=this.
KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmF)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMp={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AMp;this.
RY.As(false);this.RY.Aj(false);this.RY.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AV8={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AV8;this.
Tc.As(false);this.Tc.Aj(false);this.Tc.Z(false);},_className:"Application::WatchListFilterScreen"
};C.APb={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad1(5));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=
C.APb;},_className:"Application::HeaderControlListFilter"};C.APL={DX:function(G){
C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad1(6));},_Init:
function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APL;},_className:"Application::HeaderWatchListFilter"
};C.APP={D0:null,Nh:null,_Init:function(aArg){C.T5._Init.call(this,aArg);C.CG._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.Nh={I:this},0);this.__proto__=
C.APP;this.D0.H(Aox);this.D0.R(A.aaR(A.acf.A6p));this.D0.L(A.jb.Text);this.Nh.H(
AZ7);this.Nh.L(A.jb.Text);this.Nh.A6(0x12);this.J(this.D0,-2);this.J(this.Nh,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A0(A.aaL(A.fl.Bh));this.Nh.Ax(A.aaL(A.ach.ADU)
);},_Done:function(){this.__proto__=C.T5;this.D0._Done();this.Nh._Done();C.T5._Done.
call(this);},_ReInit:function(){C.T5._ReInit.call(this);this.D0._ReInit();this.Nh.
_ReInit();this.D0.R(A.aaR(A.acf.A6p));this.D0.S(A.aaL(A.fl.Ak));this.D0.A0(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.T5._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANo={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(
!!this.AX){var Os=this.AX.H7(Ad,8);var BDg=this.AX.Sq(Ad,21);this.Abo.R(A._GetAutoObject(
A.Device.Helper).Mf(BDg,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sw.Z(Os);this.Am();}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=
C.ANo;},_className:"Application::CalfListWatchItem"};C.T5={Aha:null,Ahc:null,_Init:
function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aha={I:this},
0);A.acg.Ap._Init.call(this.Ahc={I:this},0);this.__proto__=C.T5;this.Aha.H(AZ8);
this.Aha.L(A.jb.Text);this.Aha.A6(0x12);this.Ahc.H(AZ9);this.Ahc.L(A.jb.Text);this.
Ahc.A6(0x12);this.J5(this.DS,-1);this.J(this.Aha,0);this.J(this.Ahc,0);this.Aha.
Ax(A.aaL(A.ach.Arj));this.Ahc.Ax(A.aaL(A.ach.Ag8));},_Done:function(){this.__proto__=
C.De;this.Aha._Done();this.Ahc._Done();C.De._Done.call(this);},_ReInit:function(
){C.De._ReInit.call(this);this.Aha._ReInit();this.Ahc._ReInit();},_Mark:function(
D){var B;C.De._Mark.call(this,D);if((B=this.Aha)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.AqB={Gl:A.wg,ON:A.wf,Q7:function(E){if(A.aaY(this.Gl,E))return;this.Gl=E;},AnF:
function(E){if(A.aaX(this.ON,E))return;this.ON=E;},_Init:function(aArg){A.acv.ACA.
_Init.call(this,aArg);this.__proto__=C.AqB;},_className:"Application::BoundCoordList"
};C.AjD={T_:null,WG:null,T$:null,WH:null,Sw:null,Zp:null,Abo:null,AP:null,A$:null
,Ea:null,Ly:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T_.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.WG.H(this.T_.M);this.A$.H([this.T_.
M[2]-1,0,this.T_.M[2]+1,aSize[1]]);this.T$.H([this.T_.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.WH.H(this.T$.M);this.Ea.H([this.T$.M[2]-1,0,this.T$.M[2]+1,aSize[
1]]);this.Sw.H([this.T$.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zp.H(this.Sw.
M);this.Ly.H([this.Sw.M[2]-1,0,this.Sw.M[2]+1,aSize[1]]);this.Abo.H([this.Sw.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var Lb=this.V.AQ;
this.T_.AFe(Lb);this.WG.L(Lb);this.T$.AFe(Lb);this.WH.L(Lb);this.Sw.AFe(Lb);this.
Zp.L(Lb);this.Abo.L(Lb);this.Zp.Z(!this.Sw.Fp());},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;var Mn=this.AX.CC(Ad,1);var Ih=this.AX.Am0(Ad,14);var Auy=this.AX.CC(
Ad,5);var LW=this.AX.Ja(Ad,13);this.T(Mn.toFixed());if(!!LW){this.T_.Z(true);this.
T_.AwP(A._GetAutoObject(A.acj.Assessment).BdS(LW));this.WG.Z(false);}else{this.T_.
Z(false);this.WG.Z(true);}if(Auy>0){this.T$.Z(true);this.T$.AwP(A._GetAutoObject(
A.acj.Assessment).BdS(A._GetAutoObject(A.Device.Converter).AsQ(Ih,Auy)));this.WH.
Z(false);}else{this.T$.Z(false);this.WH.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kp._Init.call(this.T_={I:this},0);A.acg.Text._Init.
call(this.WG={I:this},0);C.Kp._Init.call(this.T$={I:this},0);A.acg.Text._Init.call(
this.WH={I:this},0);C.Kp._Init.call(this.Sw={I:this},0);A.acg.Text._Init.call(this.
Zp={I:this},0);A.acg.Text._Init.call(this.Abo={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Ly={I:this},0);this.__proto__=C.AjD;this.
WG.H(AZ_);this.WG.R(Aoy);this.WH.H(Aoz);this.WH.R(Aoy);this.Sw.AwP(A.jb.Rk);this.
Zp.H(Aoz);this.Zp.R(Rs);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ly.L(A.jb.Bc);this.J(this.T_,0);this.J(this.WG,0);this.J(this.T$,0);this.J(
this.WH,0);this.J(this.Sw,0);this.J(this.Zp,0);this.J(this.Abo,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Ly,0);this.WG.S(A.aaL(A.fl.Af
));this.WH.S(A.aaL(A.fl.Af));this.Zp.S(A.aaL(A.fl.Af));this.Abo.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.T_._Done();this.WG.
_Done();this.T$._Done();this.WH._Done();this.Sw._Done();this.Zp._Done();this.Abo.
_Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Ly._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.T_._ReInit();this.WG.
_ReInit();this.T$._ReInit();this.WH._ReInit();this.Sw._ReInit();this.Zp._ReInit(
);this.Abo._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.
Ly._ReInit();this.WG.S(A.aaL(A.fl.Af));this.WH.S(A.aaL(A.fl.Af));this.Zp.S(A.aaL(
A.fl.Af));this.Abo.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.T_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zp
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={PA:null,Ank:null
,EZ:null,DR:null,Arv:0,Arw:0,A7T:0,AmR:0,AqO:0,Init:function(aArg){this.ATo(6);this.
ATp(8);this.ATA(A.jb.AV);this.ATB(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.BmG([this.DR.Abk[0],(B=this.DR.M)[3]-B[1]]);this.WU(this);},ATn:function(
E){if(this.PA===E)return;this.PA=E;this.DR.ATn(E);},ATB:function(E){if(this.Arw===
E)return;this.Arw=E;this.DR.ATB(E);},ATA:function(E){if(this.Arv===E)return;this.
Arv=E;this.DR.ATA(E);this.DR.BmK(E);},WU:function(G){var B;while(!!this.DR.Ah)this.
HR(this.DR.Ah);if(!this.EZ)return;this.DR.AnF([((this.EZ.ON[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gl[2]-this.EZ.Gl[0]))|0,this.DR.ON[1]]);this.DR.AnF([this.DR.ON[0]
,((this.EZ.ON[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gl[3]-this.EZ.Gl[1]))|0]);var O;
var Di=this.DR.ON[1];var D8;var A5b=this.EZ.Gl[1];var BkX=(((B=this.DR.M)[3]-B[1
])/this.DR.ON[1])|0;for(O=0;O<BkX;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Di))-(this.Ank.Ascent+this.Ank.Descent))+2,((B=this.M)[2]-
B[0])-this.Arw,(((B=this.M)[3]-B[1])-(O*Di))+2]);D8.L(this.A7T);D8.S(this.Ank);D8.
A6(0x24);if(O>0)D8.R(this.AJY(A5b));else D8.R(this.AKv());A5b=A5b+this.EZ.ON[1];
this.J(D8,0);}},BGY:function(s){this.WU(s);},BnA:function(E){if(this.Ank===E)return;
this.Ank=E;this.Am();},AzF:function(A1f){var B;if(!this.EZ||(this.EZ.Gl[3]===this.
EZ.Gl[1]))return 0;return(((A1f-this.EZ.Gl[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gl[
3]-this.EZ.Gl[1]))|0;},Ae1:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.Ae1(null);else{var Bz=A._NewObject(A.acv.ACA,0);Bz.AwZ(this.EZ.AEv);Bz.Yp();var
JF=E.AlO;while(!!JF){Bz.Aqm(this.Bzg(JF.P_),this.Bzh(JF.P$));JF=JF.Ah;}this.DR.Ae1(
Bz);this.Am();}},Bzg:function(Bxt){var B;if(!this.EZ||(this.EZ.Gl[2]===this.EZ.Gl[
0]))return 0;return((Bxt-this.EZ.Gl[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gl[2]-this.
EZ.Gl[0]);},Bzh:function(A1f){var B;if(!this.EZ||(this.EZ.Gl[3]===this.EZ.Gl[1])
)return 0;return((A1f-this.EZ.Gl[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gl[3]-this.EZ.
Gl[1]);},AJY:function(AoW){return AoW.toFixed();},AKv:function(){return A.jV;},ATp:
function(E){if(this.AmR===E)return;this.AmR=E;this.DR.ATp(E);},ATo:function(E){if(
this.AqO===E)return;this.AqO=E;this.DR.ATo(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIN);this.A7T=A.jb.Text;this.DR.A1(0x3F);this.DR.H(AIN);this.DR.Bn0(AZ$);this.
DR.Bmu(A.jb.Rk);this.DR.Bnh(A.jb.Bc);this.DR.Bol(A.jb.Rk);this.J(this.DR,0);this.
PA=A.aaL(A.acv.ACT);this.Ank=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.BnA(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.PA)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ank)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.ANa={AJY:function(AoW){return A._GetAutoObject(
A.Device.Converter).Ax$(AoW,0);},AKv:function(){return A._GetAutoObject(A.acj.DU
).Af7();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.ANa;}
,_className:"Application::BodyWeightGraph"};C.O9={JR:null,Ey:null,Ei:null,FY:null
,IL:null,IM:null,Init:function(aArg){this.ATn(null);},WU:function(G){var B;var F;
C.DR.WU.call(this,G);var AK1=0;var ALQ=0;if(!!this.JR){AK1=this.AzF(A._GetAutoObject(
A.Device.Helper).ADp((F=this.JR,F[1].call(F[0]))));ALQ=this.AzF(A._GetAutoObject(
A.Device.Helper).ADo((F=this.JR,F[1].call(F[0]))));}this.FY.H(A.abP(this.FY.M,0)
);this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.M)[3]-B[1])-ALQ));this.IL.H(
A.abO(this.IL.M,(this.FY.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))-2));this.Ei.H(A.abP(
this.Ei.M,this.FY.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-
B[1])-AK1));this.IM.H(A.abO(this.IM.M,(this.Ei.M[3]-((((B=this.IM.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Ei.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJY:function(AoW){return A._GetAutoObject(A.Device.Converter
).Td(AoW,0,true);},AKv:function(){return A._GetAutoObject(A.acj.DU).AaE();},AnA:
function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([this,this.AiQ],this.JR
,0);this.JR=E;if(!!E)A.zX([this,this.AiQ],E,0);if(!!E)A.pe([this,this.AiQ],this);
},AiQ:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.
acg.AL._Init.call(this.FY={I:this},0);A.acg.AL._Init.call(this.IL={I:this},0);A.
acg.AL._Init.call(this.IM={I:this},0);this.__proto__=C.O9;this.Ey.A1(0xD);this.Ey.
H(Aaj);this.Ey.L(A.jb.Gk);this.Ei.A1(0xD);this.Ei.H(Tj);this.Ei.L(A.jb.Ib);this.
FY.A1(0xD);this.FY.H(Aai);this.FY.L(A.jb.E1);this.IL.A1(0xD);this.IL.H(Aal);this.
IL.AwD(A.jb.Ib);this.IL.AwE(A.jb.Ib);this.IL.AwG(A.jb.E1);this.IL.AwF(A.jb.E1);this.
IM.A1(0xD);this.IM.H(Xm);this.IM.AwD(A.jb.Gk);this.IM.AwE(A.jb.Gk);this.IM.AwG(A.
jb.Ib);this.IM.AwF(A.jb.Ib);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FY
,-1);this.J(this.IL,-1);this.J(this.IM,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FY._Done();this.IL._Done();this.
IM._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ey._ReInit();this.Ei._ReInit();this.FY._ReInit();this.IL._ReInit();this.IM._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JR)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.Aq5={EU:null,EZ:null,Sf:null,Ip:
null,Bc:null,AxS:A.jV,DL:A.jV,AO8:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.Sf.
H([30,0,aSize[0]-2,30]);this.Ip.H(this.Sf.M);if(!!this.EU)this.EU.H([30,this.Sf.
M[3],aSize[0],this.Bc.M[1]]);},Ahx:function(E){if(this.AxS===E)return;this.AxS=E;
this.Ip.R(E);},T:function(E){if(this.DL===E)return;this.DL=E;this.Sf.R(E);},AFv:
function(E){if(this.AO8===E)return;this.AO8=E;this.BpF(this);},BpF:function(G){var
B;if(!!this.EU)this.HR(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AO8,0))?B:null);if(!!this.EU){this.EU.H(A0a);this.EU.Ae1(this.EZ);this.J(this.EU
,0);}},Ae1:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.Ae1(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Sf={I:this},0);A.acg.Text._Init.call(this.Ip={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.Aq5;this.H(AcS);this.As(false);this.Sf.H(AIO);this.
Sf.A6(0x11);this.Sf.R(LB);this.Sf.L(A.jb.Text);this.Ip.A6(0x14);this.Ip.R(A.jV);
this.Ip.L(A.jb.Text);this.Bc.H(A0b);this.Bc.L(A.jb.Bc);this.J(this.Sf,0);this.J(
this.Ip,0);this.J(this.Bc,0);this.Sf.S(A.aaL(A.fl.Ak));this.Ip.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Sf._Done();this.
Ip._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.Sf._ReInit();this.Ip._ReInit();this.Bc._ReInit();this.
Sf.S(A.aaL(A.fl.Ak));this.Ip.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AML={AgF:null,GU:function(E
){var F;C.Gd.GU.call(this,E);if(!!this.AgF)(F=this.AgF,F[2].call(F[0],E));},A96:
function(E){if(A.aaZ(this.AgF,E))return;if(!!this.AgF)A.z$([this,this.A3y],this.
AgF,0);this.AgF=E;if(!!E)A.zX([this,this.A3y],E,0);if(!!E)A.pe([this,this.A3y],this
);},A3y:function(G){var F;if(!this.AgF)return;(F=this.AgF,F[2].call(F[0],this.FO(
)));},_Init:function(aArg){C.Gd._Init.call(this,aArg);this.__proto__=C.AML;},_Mark:
function(D){var B;C.Gd._Mark.call(this,D);if((B=this.AgF)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUF={Ri:null
,P5:null,X4:null,X5:null,MF:0,CQ:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Ri.H(A.abI(this.Ri.M,(((B=this.M)[3]-B[1])/2)|
0));this.P5.H(A.abI(this.P5.M,(((B=this.M)[3]-B[1])/2)|0));this.Ri.H(A.abO(this.
Ri.M,(((B=this.M)[3]-B[1])/2)|0));this.P5.H(A.abO(this.P5.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Ri.R(A._GetAutoObject(
A.Device.Helper).MN(A.aaR(A.acf.BkR),Pc,this.MF.toFixed()));},Aca:function(E){if(
this.MF===E)return;this.MF=E;this.BCi(this);},BCi:function(G){var B;var AJ5=(((B=
this.M)[2]-B[0])/this.MF)|0;this.X4.H(A.abM(this.X4.M,(((B=this.M)[2]-B[0])-(this.
MF*AJ5))+(((AJ5/2)-(((B=this.X4.M)[2]-B[0])/2))|0)));this.X5.H(A.abM(this.X5.M,(((
B=this.M)[2]-B[0])-AJ5)+(((AJ5/2)-(((B=this.X5.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Ri={
I:this},0);A.acg.Text._Init.call(this.P5={I:this},0);A.acg.Text._Init.call(this.
X4={I:this},0);A.acg.Text._Init.call(this.X5={I:this},0);this.__proto__=C.AUF;this.
H(BD);this.Ri.H(AIP);this.Ri.Hp(5);this.Ri.A6(0x11);this.Ri.L(A.jb.Text);this.P5.
H(A0c);this.P5.Hp(5);this.P5.A6(0x14);this.P5.R(A.aaR(A.acf.AhT));this.P5.L(A.jb.
Text);this.X4.H(A0d);this.X4.R(AyO);this.X4.L(A.jb.Text);this.X5.H(A0e);this.X5.
R(AyO);this.X5.L(A.jb.Text);this.J(this.Ri,0);this.J(this.P5,0);this.J(this.X4,0
);this.J(this.X5,0);this.Ri.S(A.aaL(A.fl.Ak));this.P5.S(A.aaL(A.fl.Ak));this.X4.
S(A.aaL(A.fl.H6));this.X5.S(A.aaL(A.fl.H6));},_Done:function(){this.__proto__=A.
Core.P;this.Ri._Done();this.P5._Done();this.X4._Done();this.X5._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ri._ReInit(
);this.P5._ReInit();this.X4._ReInit();this.X5._ReInit();this.P5.R(A.aaR(A.acf.AhT
));this.Ri.S(A.aaL(A.fl.Ak));this.P5.S(A.aaL(A.fl.Ak));this.CQ();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ri)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.Le={Wd:null,AjJ:null,KS:A.jV,MF:0,AaI:false,Init:function(aArg){var A2d=A._NewObject(
C.Kq,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RU()<A2d.
C7(O))A2d.Anr=O+1;this.Wd.CL(A2d);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjJ.
Z(this.AaI);if(this.AaI)this.Bb(null);else this.Bb(this.Wd);},CD:function(G){var
B;var F;C.D9.CD.call(this,G);if(!(F=this.Wd.Q,F[1].call(F[0])))(F=this.Wd.Q,F[2].
call(F[0],this.Wd.AC.C7(0)));A.zX([this,this.AJd],[B=A._GetAutoObject(A.Device.Helper
),B.U9,B.Va],0);A.zV([this,this.AJd],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId],0);A.pe([this
,this.Amj],this);},E4:function(G){var B;A.z$([this,this.AJd],[B=A._GetAutoObject(
A.Device.Helper),B.U9,B.Va],0);A.z9([this,this.AJd],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId
],0);C.D9.E4.call(this,G);},ZC:function(E){if(A.aa0(this.AR,E))return;C.D9.ZC.call(
this,E);this.Wd.AR=E;},Aca:function(E){if(this.MF===E)return;this.MF=E;A.pe([this
,this.Amj],this);},Bw3:function(Aq){this.Aca(Aq);},AiY:function(G){},AJd:function(
s){this.AiY(s);},Dl:function(E){if(this.KS===E)return;this.KS=E;this.AjJ.R(E);},
Amj:function(G){var Fx=A._NewObject(A.Device.Filter,0);var AzO=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzO.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhT()-((this.MF-1)*86400))-1,true);Fx.CX(AzO);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CX(HZ);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fx);},BlO:function(){return this.MF;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AU6._Init.call(this.Wd={I:this},0);C.AkT._Init.call(
this.AjJ={I:this},0);this.__proto__=C.Le;this.Wd.H(BD);this.AjJ.H(U5);this.J(this.
Wd,0);this.J(this.AjJ,0);this.Wd.Au([this,this.BlO,this.Bw3]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.Wd._Done();this.AjJ._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.Wd._ReInit();this.AjJ.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Wd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANT={Wk:null,YV:null,RatingMode:null,PM:null,_Init:
function(aArg){C.Cg._Init.call(this,aArg);C.Np._Init.call(this.Wk={I:this},0);C.
BX._Init.call(this.YV={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Iv._Init.call(this.PM={I:this},0);this.__proto__=C.ANT;var B;this.Hl.R(A.
aaR(A.acf.ACK));this.Jf(A.aaR(A.acf.A6j));this.Wk.H(Atp);this.Wk.Aj(true);this.Wk.
T(A.aaR(A.acf.As2));this.Wk.Bi(true);this.Wk.Ns(23);this.YV.H(A0f);this.YV.Aj(true
);this.YV.T(A.aaR(A.acf.A$C));this.YV.Bi(false);this.PM.H(A0g);this.PM.Aj(true);
this.PM.T(A.aaR(A.acf.A6g));this.PM.Bi(true);this.PM.Gb(3);this.PM.EV(14);this.PM.
IW(A.aaR(A.acf.Kq)+Atq);this.PM.Jg(A.aaR(A.acf.GL)+Atq);this.J(this.Wk,0);this.J(
this.YV,0);this.J(this.PM,0);this.Wk.AR=[B=this.Wk,B.Nv];this.YV.Au([B=this.RatingMode
,B.B$,B.Cc]);this.YV.CL(this.RatingMode);this.PM.Au([B=A._GetAutoObject(A.Device.
Device),B.A8_,B.BbL]);},_Done:function(){this.__proto__=C.Cg;this.Wk._Done();this.
YV._Done();this.RatingMode._Done();this.PM._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wk._ReInit();this.YV._ReInit();this.RatingMode.
_ReInit();this.PM._ReInit();this.Hl.R(A.aaR(A.acf.ACK));this.Jf(A.aaR(A.acf.A6j)
);this.Wk.T(A.aaR(A.acf.As2));this.YV.T(A.aaR(A.acf.A$C));this.PM.T(A.aaR(A.acf.
A6g));this.PM.IW(A.aaR(A.acf.Kq)+Atq);this.PM.Jg(A.aaR(A.acf.GL)+Atq);},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Avd={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hp(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FT=A.jb.Aec;var GZ=A.jb.Bm;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.
Text;}if(!Hg){this.Background.L(FT);this.V.L(A.jb.CK);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}this.LN=Hg;this.KM=Fv;this.Qy=GE;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Avd;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADx={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PX,B.EC],0);A.pe([this,this.DX],this);},Dg:function(E){C.BR.Dg.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.ADu));break;case 1:this.Ap.Ax(A.aaL(A.ach.APt));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APv));break;default:A.ab5("%s%e",AyP,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADx;this.Ap.H(AyQ);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADu));this.Init(aArg);},_Done:function(){this.
__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADy={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PX,B.EC],0);A.pe([this,this.DX],this);},Dg:function(E){C.BR.
Dg.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADv));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APu));break;case 2:this.Ap.Ax(A.aaL(A.ach.APw));break;default:A.ab5("%s%e"
,AyP,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADy;
this.Ap.H(AyQ);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADv));this.Init(aArg);},
_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.FA={BU:null,Ax6:A.jV,Dg:function(E){C.JQ.Dg.call(
this,E);this.BU.L(E);},KB:function(E){if(this.Ax6===E)return;this.Ax6=E;this.BU.
R(E);},_Init:function(aArg){C.JQ._Init.call(this,aArg);C.CG._Init.call(this.BU={
I:this},0);this.__proto__=C.FA;this.BU.A1(0x34);this.BU.H(AyK);this.BU.A6(0x11);
this.BU.L(A.jb.Text);this.J(this.BU,0);this.BU.S(A.aaL(A.fl.Af));this.BU.A0(A.aaL(
A.fl.Ak));this.BU.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JQ;this.
BU._Done();C.JQ._Done.call(this);},_ReInit:function(){C.JQ._ReInit.call(this);this.
BU._ReInit();this.BU.S(A.aaL(A.fl.Af));this.BU.A0(A.aaL(A.fl.Ak));this.BU.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JQ._Mark.call(this,D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOR={WK:function(G){var B;this.Agz();this.AuN(A.aaR(A.acf.Bj0),[this,this.BoB],[
B=A._GetAutoObject(A.Device.Device),B.A8$,B.BbM]);A._GetAutoObject(C.BS).Fz();this.
I8(A.aaR(A.acf.AVH),[this,this.AT6],5);this.I8(A.aaR(A.acf.AVF),[this,this.AT5],
7);this.I8(A.aaR(A.acf.An5),[this,this.Aw2],2);this.I8(A.aaR(A.acf.AdW),[this,this.
AFa],1);this.I8(A.aaR(A.acf.AuL),[this,this.AE6],0);A._GetAutoObject(C.BS).Fz();
A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DF:function(G){},AbA:function(){return C.ACm;},AbB:function(
){return C.ADF;},Ra:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A7e());},HS:function(G){var F;C.GJ.HS.call(this,G);if(this.Aki(
)===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajs((F=this.Fm,F[1].call(
F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false
);},Agl:function(){A._GetAutoObject(C.A7).Cb(44);},BoB:function(G){A._GetAutoObject(
A.Device.Device).AwS(!A._GetAutoObject(A.Device.Device).Aq0);this.Aob(this);},Aob:
function(G){var Bf=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Aw=Bf.DM(
30,3);if(!!Aw)Bf.Nw(Aw);if(A._GetAutoObject(A.Device.Device).Aq0){var AAt=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A27=A._GetAutoObject(A.Device.Helper).Dv()-
21600;AAt.Initialize(30,3,A27,true);Bf.CX(AAt);}A._GetAutoObject(A.Device.Device
).An.Bk(Bf);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOR;
var B;this.Dr(C.APp);this.Dl(A.aaR(A.acf.A8y));this.AwX([B=A._GetAutoObject(A.Device.
Device),B.A89,B.BbK]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.A8y));},_className:"Application::FreshCowListScreen"};C.AOQ={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AOQ;this.Li.As(false);this.Li.
Aj(false);this.Li.Z(false);this.Jw.As(false);this.Jw.Aj(false);this.Jw.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APp={DX:function(G){C.Kv.
DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad1(7));},_Init:
function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APp;},_className:"Application::HeaderFreshCowListFilter"
};C.ADF={JC:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.
call(this.JC={I:this},0);C.CG._Init.call(this.D0={I:this},0);this.__proto__=C.ADF;
this.A_q(1);this.JC.H(A0h);this.JC.R((A.aaR(A.acf.Calving)+AcU)+A.aaR(A.acf.Bae)
);this.JC.L(A.jb.Text);this.D0.H(A0i);this.D0.R(A.aaR(A.acf.AEn));this.D0.L(A.jb.
Text);this.J(this.JC,0);this.J(this.D0,0);this.JC.S(A.aaL(A.fl.Ak));this.JC.A0(A.
aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A0(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.De;this.JC._Done();this.D0._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.JC._ReInit();this.D0._ReInit();this.JC.R((
A.aaR(A.acf.Calving)+AcU)+A.aaR(A.acf.Bae));this.D0.R(A.aaR(A.acf.AEn));this.JC.
S(A.aaL(A.fl.Ak));this.JC.A0(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A0(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.JC).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.ACm={AHa:null,KV:null,UM:null,AP:null,A$:null
,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UM.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A$.H([this.UM.M[2]-1,0,this.UM.M[2]+1,aSize[
1]]);this.KV.H([this.UM.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KV.L(this.V.AQ);this.UM.Dg(this.V.AQ);},Ch:function(Ad){if(!this.AX
)return;this.Ht=Ad;if(!!this.AX){var IE=this.AX.CC(Ad,0);var Mn=this.AX.CC(Ad,1);
var A26=this.AX.CC(Ad,29);var AlG=this.AX.Hw(Ad,28);this.T(Mn.toFixed());this.KV.
R(A26.toFixed());this.UM.Aca(A._GetAutoObject(A.Device.Device).AqZ+1);this.UM.Bod(
AlG);this.UM.R(A._GetAutoObject(A.acj.KR).AjN(AlG));A._GetAutoObject(A.Device.Device
).SW(Ad);this.Ap$(IE);this.AxA();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A42:function(G){this.UM.Acc(this.AHa);},AxA:function(){var Gi=A._GetAutoObject(
A.Device.Device).Bt.B_();this.AHa=A._NewObject(C.Ajw,0);if(Gi>0){var O=Gi-1;while(
O>=0){var D8=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6);this.AtF(this.AHa,O,9,
D8);O=O-1;}}A.pe([this,this.A42],this);},AtF:function(A1A,Ad,A1z,Ql){var AlA=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ad,A1z);if(!!AlA)A1A.OA(AlA,Ql);},Ap$:function(Ac9){var Fx=
A._NewObject(A.Device.Filter,0);var AzO=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzO.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZY(A._GetAutoObject(A.Device.
Device).AqZ)-1,true);Fx.CX(AzO);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,Ac9,true);Fx.CX(HZ);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fx);},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.Text._Init.call(this.
KV={I:this},0);C.AUA._Init.call(this.UM={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.ACm;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(this.KV,0);this.J(this.UM,0);this.J(this.AP
,0);this.J(this.A$,0);this.KV.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.KV._Done();this.UM._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.KV._ReInit(
);this.UM._ReInit();this.AP._ReInit();this.A$._ReInit();this.KV.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AHa)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUA={AVj:0,Init:function(aArg){},AOY:function(){return A._GetAutoObject(A.Device.
Helper).Aqx(this.AVj);},AO0:function(){return this.AOY()+(this.MF*86400);},Bod:function(
E){if(this.AVj===E)return;this.AVj=E;A.pe([this,this.WU],this);},_Init:function(
aArg){C.AhC._Init.call(this,aArg);this.__proto__=C.AUA;this.Bc.H(A0j);this.Boa(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Du:function(){if(this.K&&this.K.Du)return this.K.
Du.apply(this,arguments);else return C.FactoryResetScope.Bu2.apply(this,arguments
);},Bu2:function(){return 3;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
jV;return this.FactoryResetScopeToString.BT(this.C7(aIndex));},_Init:function(aArg
){C.Cm._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.BI.
Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);var J_=this._variants();if(J_){this.K={
};J_._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);
this.__proto__=C.Cm;this.FactoryResetScopeToString._Done();C.Cm._Done.call(this);
},_ReInit:function(){C.Cm._ReInit.call(this);this.FactoryResetScopeToString._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Cm._Mark.call(
this,D);if((B=this.FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acq.FactoryResetScope._variants(
);},K:null,_className:"Application::FactoryResetScope"};C.SetSaveTransponderScreen={
Bhe:false,Init:function(aArg){this.Bhe=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ew:function(G){if(this.Bek){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);if(this.Bhe)A._GetAutoObject(A.Device.Device).AY(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).AY(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASy={WK:function(G){this.
Agz();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.Settings),[this,this.A37]);A._GetAutoObject(
C.BS).Fz();this.AMl();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.ARN)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DF:function(G){},AbA:function(
){return C.AqC;},AbB:function(){return C.Aq9;},Ra:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADh());},HS:function(G){C.
M_.HS.call(this,G);if(this.Aki()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajs(A._GetAutoObject(A.Device.Converter).AMg(this.L3.ADj())));this.N.Ce=[this,
this.Aaq];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false);},Agl:function(){A.
_GetAutoObject(C.A7).Cb(47);},A37:function(G){A._GetAutoObject(A.Device.Device).
Dw(0);A._GetAutoObject(C.A7).Cb(89);},_Init:function(aArg){C.M_._Init.call(this,
aArg);this.__proto__=C.ASy;this.Dr(C.ADz);this.Dl(A.aaR(A.acf.A8u));this.ATC(A._GetAutoObject(
C.Awb));},_ReInit:function(){C.M_._ReInit.call(this);this.Dl(A.aaR(A.acf.A8u));}
,_className:"Application::NoTransponderListScreen"};C.ASx={_Init:function(aArg){
C.I_._Init.call(this,aArg);this.__proto__=C.ASx;this.K1.As(false);this.K1.Aj(false
);this.K1.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADz={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad1(8));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.ADz;
},_className:"Application::HeaderNoTransponderListFilter"};C.AB6={Au1:null,Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.Au1.BT(aIndex);},_Init:
function(aArg){C.Ge._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.Au1={I:this},0);this.__proto__=C.AB6;},_Done:function(){this.__proto__=
C.Ge;this.Au1._Done();C.Ge._Done.call(this);},_ReInit:function(){C.Ge._ReInit.call(
this);this.Au1._ReInit();},_Mark:function(D){var B;C.Ge._Mark.call(this,D);if((B=
this.Au1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AMf={Co:null,Ad4:null,Init:function(aArg){this.Bb(this.Co);},Ls:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.AaP];this.BQ.Ce=null;
this.BQ.Ca=[this,this.A3I];this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.
ach.AeC));}return this.BQ;},AAJ:function(G){var Aa=(C.Ajl.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad4)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(AIQ);},_Init:function(aArg){C.Fr._Init.call(this,aArg);C.Ajl._Init.call(this.
Co={I:this},0);C.Ajl._Init.call(this.Ad4={I:this},0);this.__proto__=C.AMf;this.H(
Rr);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(I1);this.Co.T(A.aaR(A.acf.
AEx));this.Ad4.H(Qf);this.Ad4.T(A.aaR(A.acf.TF));this.J(this.Co,0);this.J(this.Ad4
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAJ];this.Ad4.AR=[this,this.
AAJ];this.Init(aArg);},_Done:function(){this.__proto__=C.Fr;this.Co._Done();this.
Ad4._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.
Co._ReInit();this.Ad4._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AEx));this.Ad4.T(A.aaR(A.acf.TF));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BGh={Undefined:0,BGf:1,BGg:2,IdScanned:3,BFb:4,BEh:5,BEX:6};C.AMt={A$Y:function(
){A._GetAutoObject(A.Device.Device).AY(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfR]);},_Init:function(aArg){C.AuS._Init.call(
this,aArg);this.__proto__=C.AMt;this.Ge.Au(1);this.ATI(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aew={V6:null,V7:null,V8:null,Ag5:null,Ag6:null,Ag7:null,CF:null,Ce:null,Ca:null
,An6:A.jV,An7:A.jV,An8:A.jV,Arf:0,Arg:0,Arh:0,Ahn:0,ZK:false,WV:false,Asw:false,
AsL:false,AsK:false,AjC:function(Ff){this.CF=Ff.CF;this.Ce=Ff.Ce;this.Ca=Ff.Ca;this.
An6=Ff.An6;this.An7=Ff.An7;this.An8=Ff.An8;this.Ahn=Ff.Ahn;this.V6=Ff.V6;this.V7=
Ff.V7;this.V8=Ff.V8;this.Ag5=Ff.Ag5;this.Ag6=Ff.Ag6;this.Ag7=Ff.Ag7;this.AsK=Ff.
AsK;this.AsL=Ff.AsL;this.Asw=Ff.Asw;this.WV=Ff.WV;this.ZK=Ff.ZK;this.Arf=Ff.Arf;
this.Arg=Ff.Arg;this.Arh=Ff.Arh;},AkS:function(Ff){Ff.CF=this.CF;Ff.Ce=this.Ce;Ff.
Ca=this.Ca;Ff.Hz(this.An6);Ff.E6(this.An7);Ff.CS(this.An8);Ff.AFB(this.Ahn);Ff.AFs(
this.V6);Ff.ArX(this.V7);Ff.AnE(this.V8);Ff.C3(this.Ag5);Ff.Ct(this.Ag6);Ff.C4(this.
Ag7);Ff.OW(this.AsK);Ff.OX(this.AsL);Ff.Asw=this.Asw;Ff.WV=this.WV;Ff.ZK=this.ZK;
Ff.Bnj(this.Arf);Ff.ATw(this.Arg);Ff.A_C(this.Arh);},_Init:function(aArg){this.__proto__=
C.Aew;this.V6=A.aaL(A.fl.Ak);this.V7=A.aaL(A.fl.Ak);this.V8=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.V6=A.aaL(
A.fl.Ak);this.V7=A.aaL(A.fl.Ak);this.V8=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.V6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V7)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.V8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CF)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.AsH._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.ADx);},_className:"Application::NewAnimalSetTransponderScreen"};C.C9={Abl:null
,CountryToString:null,Du:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.LA(aIndex);},DZ:function(A8){return A8;
},H8:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abl)(F=this.Abl,F[2].call(F[0],E));},A18:function(G){var F;if(!!this.Abl)this.Q=(
F=this.Abl,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Cc],0);},AFl:
function(E){if(A.aaZ(this.Abl,E))return;if(!!this.Abl)A.z$([this,this.A18],this.
Abl,0);this.Abl=E;if(!!this.Abl)A.zX([this,this.A18],this.Abl,0);A.pe([this,this.
A18],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C9;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abl)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.O8={AC:null,Q:null,Background:null,It:null,Is:null,M$:
0,AM:0,Gr:0,Ga:0,Agh:function(G){this.Ki(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40);if(IG){this.Background.
L(A.jb.AV);this.CZ(256);}else{this.Background.L(this.M$);this.CZ(256);}},Agg:function(
G){this.Kd(this);},CL:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A35],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A35],E,0);if(!!E)A.pe([this
,this.A35],this);},CV:function(E){if(this.M$===E)return;this.M$=E;this.Am();},Ki:
function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Kd:function(
G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gr)E=this.Ga;if(E>this.Ga)E=this.Gr;if(this.AM===E)return;this.AM=E;
this.Am();},Gb:function(E){if(this.Gr===E)return;this.Gr=E;this.Am();},EV:function(
E){if(this.Ga===E)return;this.Ga=E;this.Am();},C5:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},A35:function(G){var F;if(!!this.
AC){this.Gb(0);this.EV(this.AC.H8());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BF._Init.call(this.It={
I:this},0);A.Core.BF._Init.call(this.Is={I:this},0);this.__proto__=C.O8;this.H(AIR
);this.Background.H(Aln);this.It.Filter=4;this.Is.Filter=5;this.M$=A.jb.CK;this.
J(this.Background,0);this.It.BG=[this,this.Agh];this.It.D1=[this,this.Agh];this.
Is.BG=[this,this.Agg];this.Is.D1=[this,this.Agg];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.It._Done();this.Is._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.It._ReInit();this.Is._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.R0={A10:A.jV,Ai:function(
Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.A54));this.KB(this.A10);},Ch:function(
G){C.FA.Ch.call(this,G);var AlG=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlG)this.A10=Xo;else this.A10=A._GetAutoObject(A.acj.KR).AjN(AlG);this.Am();
},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.R0;},_className:
"Application::AnimalInfoItemCalvingDate"};C.R1={A25:0,Ai:function(Ae){C.FA.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARL));if(this.A25>0)this.KB(this.A25.toFixed());else
this.KB(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(this,G);this.A25=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.FA._Init.call(
this,aArg);this.__proto__=C.R1;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Du:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Aky(E);},A2p:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B$,
this.Cc],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A2p],[B=this.Animal,B.ASP,B.Aky],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A2p],[B=this.Animal,B.ASP,B.Aky],0);A.pe([this,this.A2p],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Du:function(){return 99;},C7:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BT(aIndex);},DZ:function(A8){return A8;
},H8:function(){return 98;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal
)this.Animal.N7(E);},A1Y:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B$,this.Cc],0);},L6:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1Y],[B=this.Animal,B.Awg,B.N7],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1Y],[B=this.Animal,B.Awg,B.N7],0);A.pe([
this,this.A1Y],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AR7={Wg:null,YT:null,AeP:null,Init:function(
aArg){this.Bb(this.Wg);},Adw:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YT)this.ByM();else if(Aa===this.Wg)this.BBy(this);else throw new
Error(Ayr);A._GetAutoObject(A.Device.Device).Dw(0);},BBy:function(G){var B;var F;
var Vu=(C.Amz.isPrototypeOf(B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null
);if(!Vu){A.ab5("%s",A0k);return;}Vu.AKR(this);},ByM:function(){A._GetAutoObject(
A.Device.Helper).W.AGU(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AY(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mx._Init.call(this.Wg={I:this},0);C.Mx._Init.call(this.YT={
I:this},0);C.V0._Init.call(this.AeP={I:this},0);this.__proto__=C.AR7;var B;this.
H(AcS);this.Wg.H(Qf);this.Wg.As(true);this.Wg.T(A.aaR(A.acf.A$E));this.Wg.Bi(true
);this.YT.H(I1);this.YT.As(true);this.YT.T(A.aaR(A.acf.A5q));this.YT.Bi(true);this.
AeP.H(BD);this.AeP.T(A.aaR(A.acf.AC7));this.AeP.Bi(true);this.J(this.Wg,0);this.
J(this.YT,0);this.J(this.AeP,0);this.Wg.AR=[this,this.Adw];this.YT.AR=[this,this.
Adw];this.AeP.ATj([B=A._GetAutoObject(A.Device.Device),B.ArF,B.Att]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.Wg._Done();this.YT._Done(
);this.AeP._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Wg._ReInit();this.YT._ReInit();this.AeP._ReInit();this.Wg.
T(A.aaR(A.acf.A$E));this.YT.T(A.aaR(A.acf.A5q));this.AeP.T(A.aaR(A.acf.AC7));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Wg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeP)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.V0={
Ai:function(Ae){C.Ui.Ai.call(this,Ae);var FT=A.jb.CK;var GZ=A.jb.Text;if(this.Hn
){FT=A.jb.Text;GZ=A.jb.Bm;}if(!this.LN){this.Background.L(FT);this.V.L(A.jb.Am8);
}else if(this.Qy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.
L(GZ);}if(this.AmH){this.Mu.Cw(1);this.Mu.L(A.jb.Ib);}else{this.Mu.Cw(0);this.Mu.
L(A.jb.Bm);}},_Init:function(aArg){C.Ui._Init.call(this,aArg);this.__proto__=C.V0;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.Av6={C_:null,A3:null,AF:
null,Akj:null,Q0:null,EM:null,ASn:LB,Bl:function(aSize){C.Co.Bl.call(this,aSize);
var FT=A.jb.CK;var GZ=A.jb.Text;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.Text;}this.Background.
L(FT);this.V.L(GZ);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,Cu;C.Co.Ai.call(this
,Ae);this.Akj.L(this.V.AQ);this.Q0.L(this.V.AQ);this.Q0.R(A0l);this.T(((this.ASn+
A.aaR(A.acf.Colon))+CR)+A._GetAutoObject(A.Device.Helper).Ak8(840003123456789).toFixed(
));if(!!this.A3&&!!this.AF){var A2$=this.Q0.Afi([(this.Q0.String.length-(F=this.
AF,F[1].call(F[0])))-(Cu=this.A3,Cu[1].call(Cu[0])),0]);var A4u=this.Q0.Afi([this.
Q0.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABw=this.Q0.Dd();this.EM.H([
A2$[0]-1,ABw[1],A4u[0]+1,ABw[3]]);}else this.EM.H(this.Q0.Dd());},DC:function(E){
if(this.C_===E)return;this.C_=E;this.Akj.Ax(E);},OU:function(E){if(A.aaZ(this.A3
,E))return;if(!!this.A3)A.z$([this,this.AaO],this.A3,0);this.A3=E;if(!!E)A.zX([this
,this.AaO],E,0);if(!!E)A.pe([this,this.AaO],this);},PY:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaQ],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaQ],E,0);if(!!E)A.pe([this,this.AaQ],this);},AaQ:function(G){this.Am(
);},AaO:function(G){this.Am();},Ar9:function(E){if(this.ASn===E)return;this.ASn=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akj={I:this},0);A.acg.Text._Init.call(this.Q0={I:this},0);A.acg.BW._Init.call(
this.EM={I:this},0);this.__proto__=C.Av6;this.H(K4);this.V.A6(0x11);this.Akj.H(Pa
);this.Q0.H(A0m);this.EM.H(A0n);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Akj
,0);this.J(this.Q0,0);this.J(this.EM,0);this.Q0.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akj._Done();this.Q0._Done();this.EM._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akj._ReInit();this.
Q0._ReInit();this.EM._ReInit();this.Q0.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Q0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUv:0,Init:
function(aArg){var B;A.zX([this,this.Bfa],[B=A._GetAutoObject(A.Device.Device),B.
AEP,B.AI0],0);A.pe([this,this.Bfa],this);},HS:function(G){C.TJ.HS.call(this,G);if(
this.AjR)this.N.Ct(A.aaL(A.ach.AD));else this.N.Ct(A.aaL(A.ach.ANu));this.N.C4(A.
aaL(A.ach.Options));this.N.E6(A.jV);this.N.CS(A.jV);this.N.Ce=[this,this.A$m];this.
N.Ca=[this,this.WK];this.N.ArX(A.aaL(A.fl.Ak));this.N.AnE(A.aaL(A.fl.Ak));},M5:function(
G){this.Bfw(this);},Ov:function(G){this.BBr(this);},AdT:function(Aih,Aii,BxQ){A.
_GetAutoObject(C.BS).ABX(Aih,Aii,[this,this.A9u,this.ATM],BxQ);},WK:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjR){A._GetAutoObject(C.BS).
TG(A.aaR(A.acf.BiD),[this,this.Box]);A._GetAutoObject(C.BS).Fz();}this.AdT(A.aaR(
A.acf.Rating),[this,this.AUa],3);this.AdT(A.aaR(A.acf.Afy),[this,this.AUc],2);this.
AdT(A.aaR(A.acf.Temperature),[this,this.AUb],1);this.AdT(A.aaR(A.acf.AdW),[this,
this.Bou],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.BiH
));A._GetAutoObject(A.Device.Device).Dw(6);},ATM:function(E){if(this.AUv===E)return;
this.AUv=E;A.abo([this,this.A9u,this.ATM],0);},Bfa:function(G){this.ATM(A._GetAutoObject(
A.Device.Device).D9);},A9u:function(){return this.AUv;},_Init:function(aArg){C.TJ.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={VH:null
,Init:function(aArg){var B;A.zX([this,this.Agc],[B=A._GetAutoObject(A.Device.Device
).An,B.Fo,B.Fs],0);A.pe([this,this.Bhj],this);A.pe([this,this.Ra],this);},CD:function(
G){C.TJ.CD.call(this,G);A.pe([this,this.Bho],this);},AG0:function(G){C.TJ.AG0.call(
this,G);if(!!this.Lk)this.AhF(this.Lk,this.VH);},HS:function(G){C.TJ.HS.call(this
,G);this.N.Ct(A.aaL(A.ach.ARi));this.N.C4(A.aaL(A.ach.ARj));if(this.AjR)this.N.ATw(
0);else this.N.ATw(1);this.N.A_C(A._GetAutoObject(A.Device.Converter).BhN(A._GetAutoObject(
A.Device.Device).D9));this.N.E6(A.jV);this.N.CS(A.jV);this.N.Ce=[this,this.Bmk];
this.N.Ca=[this,this.Boz];this.N.ArX(A.aaL(A.fl.Ak));this.N.AnE(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QM()){this.N.IS.CZ(100);this.N.Ce=null;
}else this.N.IS.CZ(255);if(!A._GetAutoObject(A.Device.Device).An.B_()){this.N.Lj.
CZ(100);this.N.Ca=null;}else this.N.Lj.CZ(255);if(A._GetAutoObject(A.Device.Device
).An.B_()<=1){this.N.T7.CZ(100);this.N.T8.CZ(100);}else{this.N.T7.CZ(255);this.N.
T8.CZ(255);}},M5:function(G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)return;
var LJ=A._GetAutoObject(A.Device.Helper).W.CI;LJ=LJ+1;if(LJ>=A._GetAutoObject(A.
Device.Device).An.B_())LJ=0;A._GetAutoObject(A.Device.Helper).GS(LJ);},Ov:function(
G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)return;var LJ=A._GetAutoObject(
A.Device.Helper).W.CI;LJ=LJ-1;if(LJ<0)LJ=A._GetAutoObject(A.Device.Device).An.B_(
)-1;A._GetAutoObject(A.Device.Helper).GS(LJ);},Agb:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>=0)A._GetAutoObject(C.A7).Cb(94);},Bmk:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},Boz:function(G){this.Bfw(this);},Ra:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).MB());A.pe([this,this.Bho
],this);},Bhj:function(G){if(!A._GetAutoObject(A.Device.Device).An.B_()){this.VH.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QM()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.VH.R(A.aaR(A.acf.AEF));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DM(1,4)){if(A._GetAutoObject(A.Device.Helper).ADi(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.VH.R(A.aaR(A.acf.AOj));else this.VH.R(A.aaR(
A.acf.AOi));}else this.VH.R(A.aaR(A.acf.ASu));}else this.VH.Z(false);},Bho:function(
G){var BCp=A._GetAutoObject(A.Device.Helper).W.Id;var A4x=A._GetAutoObject(A.Device.
Device).An.LZ(0,BCp);if(!A._GetAutoObject(A.Device.Device).An.B_())A._GetAutoObject(
A.Device.Helper).GS(-1);else if(A4x<0)A._GetAutoObject(A.Device.Helper).GS(0);},
Agc:function(G){this.Bhj(this);this.HS(this);},_Init:function(aArg){C.TJ._Init.call(
this,aArg);C.AkT._Init.call(this.VH={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.API);this.VH.H(Fe);this.J(this.VH,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TJ;this.VH._Done();C.TJ._Done.call(this);},_ReInit:function(){
C.TJ._ReInit.call(this);this.VH._ReInit();},_Mark:function(D){var B;C.TJ._Mark.call(
this,D);if((B=this.VH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMI={QU:null,Wh:null,AbO:null,YW:null,Init:function(aArg){var B;var F;this.Bb(
this.QU);if(!!A._GetAutoObject(C.A7).Q){var Vu=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null);if(!Vu){A.ab5("%s",AyR);
return;}else{if(Vu.AjR)this.QU.T(A.aaR(A.acf.Bg));else this.QU.T(A.aaR(A.acf.EU)
);var AzK=A._GetAutoObject(A.Device.Device).An.Filter;if(!AzK||A._GetAutoObject(
A.Device.Helper).Arn(AzK))this.YW.As(false);else if(!A._GetAutoObject(A.Device.Device
).An.B_()){this.Wh.As(false);this.QU.As(false);}}}},Adw:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbO)A._GetAutoObject(C.A7).Cb(9);else if(Aa===this.Wh)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QU)this.BCU();else if(Aa===this.YW)this.
A16();else throw new Error(Ayr);},BCU:function(){var B;var F;var Vu=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null);if(!Vu){A.
ab5("%s",AyR);return;}Vu.A$m(this);},A16:function(){var B;var F;var Vu=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null);if(!Vu){A.
ab5("%s",AyR);return;}Vu.Ra(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mx._Init.call(this.QU={I:this},0);C.Mx._Init.call(this.Wh={I:this},
0);C.Mx._Init.call(this.AbO={I:this},0);C.Mx._Init.call(this.YW={I:this},0);this.
__proto__=C.AMI;this.H(AfH);this.QU.H(Aan);this.QU.As(true);this.QU.T(A.aaR(A.acf.
EU));this.QU.Bi(true);this.Wh.H(Qf);this.Wh.As(true);this.Wh.T(A.aaR(A.acf.AUW));
this.Wh.Bi(true);this.AbO.H(I1);this.AbO.T(A.aaR(A.acf.AkV));this.AbO.Bi(true);this.
YW.H(BD);this.YW.T(A.aaR(A.acf.ACs));this.YW.Bi(true);this.J(this.QU,0);this.J(this.
Wh,0);this.J(this.AbO,0);this.J(this.YW,0);this.QU.AR=[this,this.Adw];this.Wh.AR=[
this,this.Adw];this.AbO.AR=[this,this.Adw];this.YW.AR=[this,this.Adw];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QU._Done();this.Wh._Done(
);this.AbO._Done();this.YW._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QU._ReInit();this.Wh._ReInit();this.AbO.
_ReInit();this.YW._ReInit();this.QU.T(A.aaR(A.acf.EU));this.Wh.T(A.aaR(A.acf.AUW
));this.AbO.T(A.aaR(A.acf.AkV));this.YW.T(A.aaR(A.acf.ACs));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.Jc={T9:null,EA:null,Yu:null,Background:null,Ap:null,It:null,Is:null,M$:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10
);var IG=((Ae&0x40)===0x40);if(IG){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.CZ(256);}else if(Hg){this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.CZ(
256);}else{this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.CZ(128);}if(!this.
AM)this.Ap.Cw(0);else if(this.AM>0){if(A.aaZ(this.T9,[B=A._GetAutoObject(A.Device.
Device),B.Awq,B.Ay3]))this.Ap.Cw(2);else if(A.aaZ(this.T9,[B=A._GetAutoObject(A.
Device.Device),B.Awp,B.Ay2]))this.Ap.Cw(3);else if(!!this.Yu&&((F=this.Yu,F[1].call(
F[0]))===1))this.Ap.Cw(1);else this.Ap.Cw(0);}else if(A.aaZ(this.T9,[B=A._GetAutoObject(
A.Device.Device),B.Awq,B.Ay3]))this.Ap.Cw(6);else if(A.aaZ(this.T9,[B=A._GetAutoObject(
A.Device.Device),B.Awp,B.Ay2]))this.Ap.Cw(7);else if(!!this.Yu&&((F=this.Yu,F[1].
call(F[0]))===1))this.Ap.Cw(5);else this.Ap.Cw(4);},Agh:function(G){this.Ki(this
);},Agg:function(G){this.Kd(this);},Ki:function(G){this.Bx(1);},Kd:function(G){this.
Bx(-1);},Bnt:function(E){if(A.aaZ(this.T9,E))return;if(!!this.T9)A.z$([this,this.
A3O],this.T9,0);this.T9=E;if(!!E)A.zX([this,this.A3O],this.T9,0);A.pe([this,this.
A3O],this);},Uw:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Agf],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Agf],this.EA,0);if(!!E)A.pe([this
,this.Agf],this);},A3O:function(G){var F;if(!!this.T9)this.Bx((F=this.T9,F[1].call(
F[0])));},Agf:function(G){A.pe([this,this.BC7],this);},CV:function(E){if(this.M$===
E)return;this.M$=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T9)(F=this.T9,F[2].call(F[0],E));this.Am();A.abo([this,this.Uq,this.
Bx],0);},A_s:function(E){if(A.aaZ(this.Yu,E))return;if(!!this.Yu)A.z$([this,this.
Agf],this.Yu,0);this.Yu=E;if(!!E)A.zX([this,this.Agf],this.Yu,0);if(!!E)A.pe([this
,this.Agf],this);},BC7:function(G){var F,Cu;if(!this.Yu||!this.EA)return;this.Bnt(
A._GetAutoObject(A.Device.Helper).BdZ((F=this.Yu,F[1].call(F[0])),(Cu=this.EA,Cu[
1].call(Cu[0]))));this.Am();},Uq:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BF._Init.call(this.It={I:this},0);
A.Core.BF._Init.call(this.Is={I:this},0);this.__proto__=C.Jc;this.H(Atr);this.Background.
A1(0x3F);this.Background.H(Atr);this.Ap.A1(0x3C);this.Ap.H(Atr);this.It.Filter=4;
this.Is.Filter=5;this.M$=A.jb.CK;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AVl));this.It.BG=[this,this.Agh];this.Is.BG=[this,this.Agg];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.It._Done();this.Is._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.It._ReInit(
);this.Is._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Is).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AMe={WK:function(G){var B;var F;this.Agz();if(!!A._GetAutoObject(A.Device.Helper
).AOW((F=this.Fm,F[1].call(F[0])),0,true))this.AuN(A.aaR(A.acf.A7v),[this,this.BoA
],[B=A._GetAutoObject(A.Device.Device),B.A8M,B.Bbt]);else A._GetAutoObject(C.BS).
Aa3(A.aaR(A.acf.A7v));A._GetAutoObject(C.BS).Fz();this.I8(A.aaR(A.acf.LinkTransponder
),[this,this.BnK],8);this.I8(A.aaR(A.acf.TF),[this,this.Akv],9);this.I8(A.aaR(A.
acf.Baz),[this,this.Bom],10);this.I8(A.aaR(A.acf.AGx),[this,this.ATR],3);this.I8(
A.aaR(A.acf.An5),[this,this.Aw2],2);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mp(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DF:function(G){},AbA:function(){return C.AqC;},AbB:function(){return C.Aq9;
},Ra:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A67((F=this.Fm,F[1].call(F[0]))));},HS:function(G){var F;C.GJ.HS.
call(this,G);if(this.Aki()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajs((F=this.Fm,F[1].call(F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.
N.OW(false);this.N.OX(false);},Agl:function(){A._GetAutoObject(C.A7).Cb(52);},A3T:
function(G){C.GJ.A3T.call(this,G);A.pe([this,this.A0Z],this);},BoA:function(G){A.
_GetAutoObject(A.Device.Device).Aww(!A._GetAutoObject(A.Device.Device).Aqk);this.
Aob(this);},Aob:function(G){var F;var Bf=A._GetAutoObject(A.Device.Device).An.Filter.
E$();A._GetAutoObject(A.Device.Helper).Bo8(Bf);if(A._GetAutoObject(A.Device.Device
).Aqk){var A2N=A._GetAutoObject(A.Device.Helper).AOW((F=this.Fm,F[1].call(F[0]))
,21600,true);Bf.CX(A2N);}A._GetAutoObject(A.Device.Device).An.Bk(Bf);},_Init:function(
aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AMe;var B;this.Dl(A.aaR(A.acf.
Av$));this.AwX([B=A._GetAutoObject(A.Device.Device),B.A8L,B.Bbs]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.Av$));},_className:"Application::ActionListScreen"
};C.AMd={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AMd;},
_className:"Application::ActionListFilterScreen"};C.API={IR:null,IY:null,Bc:null
,MK:A.jV,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9y,B.A_Y],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Device
).An,B.Fo,B.Fs],0);},Dg:function(E){C.IP.Dg.call(this,E);this.IY.L(E);},DX:function(
G){C.IP.DX.call(this,G);var AzK=A._GetAutoObject(A.Device.Device).An.Filter;if(!
AzK||A._GetAutoObject(A.Device.Helper).Arn(AzK))this.IR.Z(false);else this.IR.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.Aq6())this.Aw9(((A._GetAutoObject(A.
Device.Helper).W.CI+1).toFixed()+AIS)+A._GetAutoObject(A.Device.Device).An.B_().
toFixed());else this.Aw9(BaK);},Aw9:function(E){if(this.MK===E)return;this.MK=E;
this.IY.R(E);},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IR={I:this},0);A.acg.Text._Init.call(this.IY={I:this},0);A.acg.C8._Init.call(
this.Bc={I:this},0);this.__proto__=C.API;this.HT.H(Brr);this.DS.H(Brs);this.IR.H(
Brt);this.IR.L(A.jb.Text);this.IY.H(BaL);this.IY.Hp(2);this.IY.KX(true);this.IY.
A6(0x12);this.IY.R(BaM);this.Bc.DD(Alm);this.Bc.DN(AyN);this.Bc.L(A.jb.Bc);this.
J(this.IR,0);this.J(this.IY,0);this.J(this.Bc,0);this.IR.Ax(A.aaL(A.ach.AeE));this.
IY.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IP;this.
IR._Done();this.IY._Done();this.Bc._Done();C.IP._Done.call(this);},_ReInit:function(
){C.IP._ReInit.call(this);this.IR._ReInit();this.IY._ReInit();this.Bc._ReInit();
this.IY.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((
B=this.IR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsR={Text:null,Bl:function(aSize){C.O8.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.O8.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xo);else this.Text.R(this.AC.Gm((F=this.Q,F[1].call(F[0]
))));var IG=((Ae&0x40)===0x40);if(IG)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.O8._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsR;this.Text.R(Rs);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.O8;this.Text._Done();C.O8.
_Done.call(this);},_ReInit:function(){C.O8._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.O8._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Ark={C_:null,Bl:function(aSize){C.O8.Bl.call(this,aSize);this.C_.H(A.abK(this.
C_.M,aSize));},Ai:function(Ae){var B;var F;C.O8.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C_.Ax(null);else{this.C_.Ax(this.AC.ADd(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C_.Cw(this.AC.ADf(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IG=((
Ae&0x40)===0x40);if(IG)this.C_.L(A.jb.Bm);else this.C_.L(A.jb.Text);},_Init:function(
aArg){C.O8._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ark;this.H(Atr);this.C_.H(AIR);this.J(this.C_,0);},_Done:function(){this.__proto__=
C.O8;this.C_._Done();C.O8._Done.call(this);},_ReInit:function(){C.O8._ReInit.call(
this);this.C_._ReInit();},_Mark:function(D){var B;C.O8._Mark.call(this,D);if((B=
this.C_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Au$={V2:null,DirectionOfCountingToString:null,Aej:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},Gm:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jV;return this.
DirectionOfCountingToString.BT(aIndex);},DZ:function(A8){return A8;},H8:function(
){return this.Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.V2)(F=
this.V2,F[2].call(F[0],E));},ADd:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Aej.AsS(aIndex);},ADf:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Aej.AsT(aIndex);},A2i:function(G){var F;
if(!!this.V2)this.Q=(F=this.V2,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cc],0);},Ae2:function(E){if(A.aaZ(this.V2,E))return;if(!!this.V2)A.z$([this
,this.A2i],this.V2,0);this.V2=E;if(!!this.V2)A.zX([this,this.A2i],this.V2,0);A.pe([
this,this.A2i],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aej._Init.call(this.Aej={I:this},0);this.__proto__=C.Au$;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aej._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aej._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.V2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aej)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMA={Hv:null,EA:null,AnimalIdGenerationMethodToString:
null,Ad0:null,Du:function(){return 4;},C7:function(aIndex){var F;var A8=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A8=0;break;case 1:A8=1;break;
case 2:A8=this.BzX((F=this.EA,F[1].call(F[0])));break;case 3:A8=5;break;default:
throw new Error(Bru+aIndex.toFixed());}return A8;},Gm:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jV;return this.AnimalIdGenerationMethodToString.
BT(this.C7(aIndex));},DZ:function(A8){var aIndex=-1;switch(A8){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Brv+A8.toFixed());}return aIndex;},H8:function(){return this.
Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hv)(F=this.Hv,F[2].
call(F[0],E));},ADd:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.Ad0.AsS(this.C7(aIndex));},ADf:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.Ad0.AsT(this.C7(aIndex));},A1O:function(G){var F;
if(!!this.Hv)this.Q=(F=this.Hv,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cc],0);},Bms:function(E){if(A.aaZ(this.Hv,E))return;if(!!this.Hv)A.z$([this
,this.A1O],this.Hv,0);this.Hv=E;if(!!this.Hv)A.zX([this,this.A1O],this.Hv,0);A.pe([
this,this.A1O],this);},Uw:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Agf],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Agf],this.EA
,0);A.pe([this,this.Agf],this);},Agf:function(G){A.pe([this,this.ByO],this);},BzX:
function(Ma){var Ru=0;switch(Ma){case 0:Ru=2;break;case 1:Ru=3;break;case 2:Ru=4;
break;default:throw new Error(Brw+Ma.toFixed());}return Ru;},ByO:function(G){var
BeY=this.C7(this.DZ(this.Q));if(this.Q!==BeY)this.Au(BeY);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.Ad0._Init.call(this.
Ad0={I:this},0);this.__proto__=C.AMA;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.Ad0._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.Ad0._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGW={FN:null,Aa_:null,Q:null,Fl:null,Fb:null,HJ:null,WD:null,AW:null,H4:null
,Kr:null,A_:0,AM:0,Aly:0,Init:function(aArg){var B;A.zX([this,this.Be$],[B=A._GetAutoObject(
A.Device.Device),B.Anu,B.AoD],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hn){this.AW.FP(A.jb.CK);this.HJ.CV(A.jb.CK);this.WD.CV(A.jb.CK);
this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.HJ.
CV(A.jb.CU);this.WD.CV(A.jb.CU);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}
}else{if(this.Hn){this.AW.FP(A.jb.CK);this.HJ.CV(A.jb.CK);this.WD.CV(A.jb.CK);}else{
this.AW.FP(A.jb.CU);this.HJ.CV(A.jb.CU);this.WD.CV(A.jb.CU);}this.Bb(null);}},H1:
function(G){C.Eg.H1.call(this,G);if(!this.A_)this.FW(this);else this.Hf(this);},
DK:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(
F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;
default:this.FN.AkS((F=this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},Hf:
function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)this.FN.AjC((
F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.
A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{if(this.AW.A86())this.Bb(
this.AW);else this.Bb(this.WD);if(!this.AM)this.AW.SV(2);else this.AW.SV(7);}break;
default:throw new Error(Ats+this.A_.toFixed());}this.DK(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uq,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Ov:function(G){this.ABo(2);},M5:function(G){this.ABo(
7);},ABo:function(GA){var B;var AzL=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!AzL){var AAA=(A.Core.P.isPrototypeOf(B=this.QL(AzL,GA,0x15))?B:null);if(!!AAA){
this.Bb(AAA);return true;}}return false;},Ao6:function(G){A.pe([this,this.Be$],this
);},A4I:function(G){var B;var F;if(!this.H4.Hv){this.Kr.Ae2(null);return;}switch((
F=this.H4.Hv,F[1].call(F[0]))){case 0:case 1:this.Kr.Ae2(null);break;case 3:this.
Kr.Ae2([B=A._GetAutoObject(A.Device.Device),B.ASN,B.A0G]);break;case 2:this.Kr.Ae2([
B=A._GetAutoObject(A.Device.Device),B.ASO,B.A0H]);break;case 4:case 5:this.Kr.Ae2([
B=A._GetAutoObject(A.Device.Device),B.AEU,B.AI4]);break;default:throw new Error(
Brx+(F=this.H4.Hv,F[1].call(F[0])).toFixed());}},Be$:function(G){var F;if(!this.
H4.Hv)return;A.pe([this,this.A4I],this);var At7=false;switch((F=this.H4.Hv,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{At7=true;this.AW.A$e(-1);}break;case 0:
case 1:{At7=false;this.AW.A$e(A._GetAutoObject(A.Device.Device).A3);}break;default:
throw new Error(AyF+(F=this.H4.Hv,F[1].call(F[0])).toFixed());}this.AW.As(At7);this.
HJ.As(At7);this.HJ.Z(At7);if(((F=this.H4.Hv,F[1].call(F[0]))!==this.Aly)||(At7===
false)){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMy((F=this.H4.
Hv,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BP){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bkc((F=this.H4.Hv,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kz(A._GetAutoObject(A.Device.Device).A3);else this.AW.Kz(0);this.Aly=(
F=this.H4.Hv,F[1].call(F[0]));},A95:function(E){var B;if(this.Aa_===E)return;if(
!!this.Aa_){A.z$([this,this.Ao6],[B=this.Aa_,B.WJ,B.J0],0);A.z$([this,this.Ao6],[
B=this.Aa_,B.Any,B.Nr],0);A.z$([this,this.Ao6],[B=this.Aa_,B.ArJ,B.P0],0);this.H4.
Uw(null);}this.Aa_=E;if(!!E){A.zX([this,this.Ao6],[B=this.Aa_,B.WJ,B.J0],0);A.zX([
this,this.Ao6],[B=this.Aa_,B.Any,B.Nr],0);A.zX([this,this.Ao6],[B=this.Aa_,B.ArJ
,B.P0],0);this.H4.Uw([B=this.Aa_,B.WJ,B.J0]);}if(!!E)A.pe([this,this.Ao6],this);
},Uq:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BF._Init.call(this.Fl={I:this},0);A.Core.BF._Init.call(this.Fb={I:this},0
);C.Ark._Init.call(this.HJ={I:this},0);C.Ark._Init.call(this.WD={I:this},0);C.AvW.
_Init.call(this.AW={I:this},0);C.AMA._Init.call(this.H4={I:this},0);C.Au$._Init.
call(this.Kr={I:this},0);this.__proto__=C.AGW;var B;this.H(U4);this.V.As(false);
this.V.R(Atj);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fb.Filter=7;this.HJ.H(Bry);
this.HJ.As(false);this.WD.H(Brz);this.AW.H(BrA);this.AW.As(false);this.J(this.HJ
,0);this.J(this.WD,0);this.J(this.AW,0);this.FN=A._NewObject(C.Aew,0);this.Fl.BG=[
this,this.Ov];this.Fb.BG=[this,this.M5];this.HJ.CL(this.Kr);this.HJ.Au([B=this.Kr
,B.B$,B.Cc]);this.WD.CL(this.H4);this.WD.Au([B=this.H4,B.B$,B.Cc]);this.AW.Au([this
,this.Uq,this.Bx]);this.H4.Bms([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoD]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fl._Done();this.Fb.
_Done();this.HJ._Done();this.WD._Done();this.AW._Done();this.H4._Done();this.Kr.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fl._ReInit();this.Fb._ReInit();this.HJ._ReInit();this.WD._ReInit();this.AW._ReInit(
);this.H4._ReInit();this.Kr._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa_)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WD)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G7={Az3:null,Fl:null,Fb:null,G3:null,
F_:null,EM:null,Ne:0,ANc:0,ACi:0,UC:0,Baw:-1,ANb:false,Init:function(aArg){A.pe([
this,this.A1a],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
ANb);this.EM.H(A.wC(this.Yz(this.ACi).M,this.Yz((this.ACi+this.ANc)-1).M));},Ov:
function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var A13=this.BgI(2);if(A13===
false)D5.Mw=true;},M5:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var
A13=this.BgI(7);if(A13===false)D5.Mw=true;},BgI:function(GA){var B;var DV=(C.DG.
isPrototypeOf(B=this.AV)?B:null);DV=this.Bd1(DV,GA,true);if(!!DV){this.Bb(DV);this.
Az3=(C.DG.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adv:function(
G){A.ab5("%s",Ali);},GY:function(s){this.Adv(s);},FP:function(E){if(this.Ne===E)
return;this.Ne=E;this.F_.CV(E);this.G3.CV(E);},SV:function(GA){var B;switch(GA){
case 2:this.Bb(this.G3);break;case 7:this.Bb(this.F_);break;default:A.ab5("%s%e"
,BrB,GA);}this.Az3=(C.DG.isPrototypeOf(B=this.AV)?B:null);},LU:function(G){},A1a:
function(s){this.LU(s);},AFf:function(E){if(this.ANb===E)return;this.ANb=E;this.
Am();},A9$:function(E){if(this.ANc===E)return;this.ANc=E;this.Am();},A9_:function(
E){if(this.ACi===E)return;this.ACi=E;this.Am();},Yz:function(HC){var B6=null;switch(
HC){case-1:case 0:B6=this.F_;break;case 1:B6=this.G3;break;default:A.ab5("%s",Ah5
);}return B6;},Kz:function(E){if(this.UC===E)return;this.UC=E;this.Ams();},Ams:function(
){A.ab5("%s",Ali);},Bd1:function(Ac3,GA,LN){var B;if(!!Ac3){var Bf;if(LN)Bf=0x11;
else Bf=0x0;switch(GA){case 2:Ac3=(C.DG.isPrototypeOf(B=this.AqU(Ac3,Bf))?B:null
);break;case 7:Ac3=(C.DG.isPrototypeOf(B=this.TX(Ac3,Bf))?B:null);break;default:
throw new Error(BrC);}}return Ac3;},A$e:function(E){if(this.Baw===E)return;this.
Baw=E;var DV=this.F_;var A2q;while(!!DV){A2q=!!E;DV.As(A2q);DV.Z(A2q);if(DV===this.
Az3)this.Bb(DV);DV=this.Bd1(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Fl={I:this},0);A.Core.BF._Init.
call(this.Fb={I:this},0);C.DG._Init.call(this.G3={I:this},0);C.DG._Init.call(this.
F_={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.G7;this.
H(BrD);this.Fl.Filter=6;this.Fb.Filter=7;this.Ne=A.jb.CK;this.G3.H(E8);this.F_.H(
BaN);this.EM.H(BrE);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.G3,0);this.J(this.
F_,0);this.J(this.EM,0);this.Fl.BG=[this,this.Ov];this.Fl.D1=[this,this.Ov];this.
Fb.BG=[this,this.M5];this.Fb.D1=[this,this.M5];this.Az3=this.F_;this.G3.Dk=[this
,this.GY];this.F_.Dk=[this,this.GY];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fl._Done();this.Fb._Done();this.G3._Done();this.F_._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fl._ReInit();this.Fb._ReInit();this.G3._ReInit();this.F_._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Az3)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.ARo={Dz:null,CW:null,Cv:null
,FP:function(E){if(this.Ne===E)return;C.HN.FP.call(this,E);this.Cv.CV(E);this.CW.
CV(E);this.Dz.CV(E);},Yz:function(HC){var B6=null;switch(HC){case-1:case 0:B6=this.
F_;break;case 1:B6=this.Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;
case 4:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;},_Init:function(aArg
){C.HN._Init.call(this,aArg);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(
this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARo;this.
H(BrF);this.G3.H(Aln);this.Dz.H(BaO);this.CW.H(BaP);this.Cv.H(BaQ);this.F_.H(BrG
);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);this.Dz.Dk=[this,this.
GY];this.CW.Dk=[this,this.GY];this.Cv.Dk=[this,this.GY];},_Done:function(){this.
__proto__=C.HN;this.Dz._Done();this.CW._Done();this.Cv._Done();C.HN._Done.call(this
);},_ReInit:function(){C.HN._ReInit.call(this);this.Dz._ReInit();this.CW._ReInit(
);this.Cv._ReInit();},_Mark:function(D){var B;C.HN._Mark.call(this,D);if((B=this.
Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVY={Re:null,AcL:null,AVX:0,CD:function(G){this.AcL.As(true);},E4:function(G
){this.AcL.As(false);},Bok:function(E){if(this.AVX===E)return;this.AVX=E;this.Re.
R((((A.aaR(A.acf.AVW)+AcU)+E.toFixed())+BrH)+A.aaR(A.acf.Lh));},Bmd:function(){return this.
AVX;},BBO:function(G){A._GetAutoObject(C.A7).Cb(3);A._GetAutoObject(A.Device.Device
).AnB(1);},_Init:function(aArg){C.X9._Init.call(this,aArg);C.CG._Init.call(this.
Re={I:this},0);A.acl.Gn._Init.call(this.AcL={I:this},0);this.__proto__=C.AVY;this.
AeQ.H(BrI);this.UK.R(A.jV);this.Re.H(BrJ);this.Re.R(A.aaR(A.acf.AVW)+BaR);this.Re.
L(A.jb.Text);this.AcL.HQ(1);this.AcL.Fq(5000);this.AcL.B3=100;this.J(this.Re,0);
this.Re.S(A.aaL(A.fl.Af));this.Re.A0(A.aaL(A.fl.Ak));this.Re.Cr(A.aaL(A.fl.Bh));
this.AcL.SI=[this,this.BBO];this.AcL.Q=[this,this.Bmd,this.Bok];},_Done:function(
){this.__proto__=C.X9;this.Re._Done();this.AcL._Done();C.X9._Done.call(this);},_ReInit:
function(){C.X9._ReInit.call(this);this.Re._ReInit();this.AcL._ReInit();this.Re.
R(A.aaR(A.acf.AVW)+BaR);this.Re.S(A.aaL(A.fl.Af));this.Re.A0(A.aaL(A.fl.Ak));this.
Re.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X9._Mark.call(this,D);if((B=this.
Re)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcL)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ASi={K_:null,Lp:null,BeN:false,Init:
function(aArg){this.Bb(this.Db);},Ew:function(G){var B;if(!!this.K_)this.K_.Ew(this
);C.WF.Ew.call(this,G);},Agj:function(G){var B;if(!!this.K_)this.K_.Agj(this);C.
WF.Agj.call(this,G);},CD:function(G){var B;if(!this.BeN){this.BeN=true;A.pe([this
,this.A4b],this);}else if(!this.K_){this.K_=A._NewObject(C.ASk,0);this.K_.A_o([this
,this.ABd]);this.LU(this);this.K_.LU(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.WF.CD.call(this,G);}else C.WF.CD.call(this,G
);},Ap_:function(G){var B;if(!!this.K_)this.K_.Ap_(this);},ABd:function(G){var B;
var F;this.LU(this);this.K_.LU(this);A.pe([this,this.AcV],this);var Beo=this.L1;
this.AeZ(A._GetAutoObject(A.Device.Helper).Abz(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVV(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Beo);if(Beo)A._GetAutoObject(
A.Device.Helper).W.P0(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SP(A._GetAutoObject(A.Device.Helper).AMy((F=this.Dj.H4.Hv,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JN(this.Db);},A4b:function(
G){A._GetAutoObject(C.A7).Cb(79);},_Init:function(aArg){C.WF._Init.call(this,aArg
);C.Rd._Init.call(this.Lp={I:this},0);this.__proto__=C.ASi;var B;this.Lp.H(Ah1);
this.Lp.Aj(true);this.Lp.T(A.aaR(A.acf.ACJ));this.J(this.Lp,-9);this.J5(this.Go,-
1);this.Lp.Gt([this,this.D_,this.GT]);this.Lp.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASX,B.AnK]);this.Init(aArg);},_Done:function(){this.__proto__=C.WF;this.Lp.
_Done();C.WF._Done.call(this);},_ReInit:function(){C.WF._ReInit.call(this);this.
Lp._ReInit();this.Lp.T(A.aaR(A.acf.ACJ));},_Mark:function(D){var B;C.WF._Mark.call(
this,D);if((B=this.K_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
AD8={AgS:null,AgT:null,NT:null,NS:null,ET:null,F0:null,Eq:null,Dz:null,CW:null,Cv:
null,FP:function(E){if(this.Ne===E)return;C.Ll.FP.call(this,E);this.Cv.CV(E);this.
CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);this.NS.CV(E);this.
NT.CV(E);this.AgT.CV(E);this.AgS.CV(E);},Yz:function(HC){var B6=null;switch(HC){
case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;case 2:B6=this.CW;break;case
3:B6=this.Dz;break;case 4:B6=this.Eq;break;case 5:B6=this.F0;break;case 6:B6=this.
ET;break;case 7:B6=this.NS;break;case 8:B6=this.NT;break;case 9:B6=this.AgT;break;
case 10:B6=this.AgS;break;case 11:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;
},_Init:function(aArg){C.Ll._Init.call(this,aArg);C.DG._Init.call(this.AgS={I:this
},0);C.DG._Init.call(this.AgT={I:this},0);C.DG._Init.call(this.NT={I:this},0);C.
DG._Init.call(this.NS={I:this},0);C.DG._Init.call(this.ET={I:this},0);C.DG._Init.
call(this.F0={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(this.
Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.AD8;this.H(BrK);this.G3.H(AIT);this.AgS.H(AyS);this.AgT.H(
A0o);this.NT.H(A0p);this.NS.H(A0q);this.ET.H(A0r);this.F0.H(A0s);this.Eq.H(A0t);
this.Dz.H(BaS);this.CW.H(A0u);this.Cv.H(BrL);this.F_.H(BrM);this.J(this.AgS,-2);
this.J(this.AgT,-2);this.J(this.NT,-2);this.J(this.NS,-2);this.J(this.ET,-2);this.
J(this.F0,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.
Cv,-2);this.AgS.Dk=[this,this.GY];this.AgT.Dk=[this,this.GY];this.NT.Dk=[this,this.
GY];this.NS.Dk=[this,this.GY];this.ET.Dk=[this,this.GY];this.F0.Dk=[this,this.GY
];this.Eq.Dk=[this,this.GY];this.Dz.Dk=[this,this.GY];this.CW.Dk=[this,this.GY];
this.Cv.Dk=[this,this.GY];},_Done:function(){this.__proto__=C.Ll;this.AgS._Done(
);this.AgT._Done();this.NT._Done();this.NS._Done();this.ET._Done();this.F0._Done(
);this.Eq._Done();this.Dz._Done();this.CW._Done();this.Cv._Done();C.Ll._Done.call(
this);},_ReInit:function(){C.Ll._ReInit.call(this);this.AgS._ReInit();this.AgT._ReInit(
);this.NT._ReInit();this.NS._ReInit();this.ET._ReInit();this.F0._ReInit();this.Eq.
_ReInit();this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit();},_Mark:function(
D){var B;C.Ll._Mark.call(this,D);if((B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HN={Q:null,AM:0,Ai:function(Ae){C.G7.Ai.call(this
,Ae);this.Ams();},Adv:function(G){var B;var F;var IE=A.jV;var B6=this.G3;while(!
!B6){if(B6.Ez>0)IE=IE+B6.Ez.toFixed();else IE=IE+String.fromCharCode(0x30);B6=(C.
DG.isPrototypeOf(B=this.TX(B6,0x11))?B:null);}var BP=this.AM;this.Bx(A.wz(IE,-1,
10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LU:function(G){},Ams:function(){var B;var F;if(!!this.Q){var DV=this.F_;
var AdE=this.UC;var A8=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A8>0){DV.L7(A8%
10);A8=(A8/10)|0;}else if(AdE>0)DV.L7(0);else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=
this.AqU(DV,0x11))?B:null);AdE=AdE-1;}}},C5:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G7._Init.call(this,aArg);this.__proto__=C.HN;},_Mark:
function(D){var B;C.G7._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Ll={AM:0,Q:null
,Ai:function(Ae){C.G7.Ai.call(this,Ae);this.Ams();},Adv:function(G){var B;var F;
var IE=A.jV;var B6=this.G3;while(!!B6){if(B6.Ez>0)IE=IE+B6.Ez.toFixed();else IE=
IE+String.fromCharCode(0x30);B6=(C.DG.isPrototypeOf(B=this.TX(B6,0x11))?B:null);
}var BP=this.AM;this.Bx(A.ab0(IE,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LU:function(G){},Ams:function(){var B;
var F;if(!!this.Q){var DV=this.F_;var AdE=this.UC;var A8=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A8>0){DV.L7((A8%10)|0);A8=Math.trunc(A8/10);}else if(AdE>0)DV.
L7(0);else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=this.AqU(DV,0x11))?B:null);AdE=AdE-
1;}}},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Au:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G7._Init.call(
this,aArg);this.__proto__=C.Ll;},_Mark:function(D){var B;C.G7._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AvW={Eq:null,Dz:null,CW:null,Cv:null,FP:function(E){if(this.Ne===E)return;C.
HN.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);},Yz:
function(HC){var B6=null;switch(HC){case-1:case 0:B6=this.F_;break;case 1:B6=this.
Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;
case 5:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;},_Init:function(aArg
){C.HN._Init.call(this,aArg);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(
this.Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={
I:this},0);this.__proto__=C.AvW;this.H(Ayv);this.G3.H(AH2);this.Eq.H(AH3);this.Dz.
H(AH4);this.CW.H(AH5);this.Cv.H(AH6);this.F_.H(AH7);this.EM.H(BaT);this.J(this.Eq
,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);this.Eq.Dk=[this,this.
GY];this.Dz.Dk=[this,this.GY];this.CW.Dk=[this,this.GY];this.Cv.Dk=[this,this.GY
];},_Done:function(){this.__proto__=C.HN;this.Eq._Done();this.Dz._Done();this.CW.
_Done();this.Cv._Done();C.HN._Done.call(this);},_ReInit:function(){C.HN._ReInit.
call(this);this.Eq._ReInit();this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit(
);},_Mark:function(D){var B;C.HN._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AU4={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bpy(0);this.AttributeSet.Bpz(1);this.AttributeSet.BpA(4);},Ai:function(Ae){var B;
C.BX.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var IG=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FT=A.jb.CK;var GZ=A.jb.Text;if(this.Hn){FT=
A.jb.Bm;GZ=A.jb.Text;}if(!Hg){this.Background.L(A.jb.CU);this.V.L(A.jb.CK);this.
AttributeSet.Ahr(A.jb.CK);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahr(A.jb.Bm);}else if(IG){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahr(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.
Am8);this.V.L(A.jb.Bm);this.AttributeSet.Ahr(A.jb.Bm);}else{this.Background.L(FT
);this.V.L(GZ);this.AttributeSet.Ahr(GZ);}this.LN=Hg;this.KM=Fv;this.Qy=GE;this.
Apm=IG;},Ho:function(G){var B;var Gh=this.DB.G8;var CA=(A.acg.AuZ.isPrototypeOf(
B=this.DB.Cj)?B:null);CA.A97(this.AttributeSet);CA.A6(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.BzQ(this.AC.Gm(Gh)));else CA.R(Xo);CA.H(A.abK(CA.M,[this.DB.Wl,(B=this.
DB.M)[3]-B[1]]));},BzQ:function(Byd){var AAZ=Byd;AAZ=A._GetAutoObject(A.Device.Helper
).MN(AAZ,BrN,BrO);AAZ=A._GetAutoObject(A.Device.Helper).MN(AAZ,BrP,BrQ);return BrR+
AAZ;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AU4;this.DB.H(BrS);this.DB.JD(2);
this.DB.N8(A.acg.AuZ);this.AttributeSet.Ahr(this.V.AQ);this.AttributeSet.Bnb(A.aaL(
A.fl.AON));this.AttributeSet.A_z(A.aaL(A.fl.Ak));this.AttributeSet.Ahu(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BX;this.AttributeSet._Done(
);C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A_z(A.aaL(A.fl.Ak));this.AttributeSet.Ahu(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.AsH._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dr(C.ADy);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Du:function(){return 14;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},Gm:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BT(aIndex
);},DZ:function(A8){return A8;},H8:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.O1={FN:null,EnumToCodeset:
null,JB:null,A_:0,Number:0,Ai:function(Ae){C.BX.Ai.call(this,Ae);if(this.A_===1){
if(this.Hn){this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}},Bx:function(E){C.BX.Bx.call(this,E);var BAL=this.
EnumToCodeset.AmK(this.Number);var BeX=this.AC.C7(this.AM);if(BAL!==BeX){this.AFQ(
this.EnumToCodeset.Aem(BeX));A.abo([this,this.ASY,this.AFQ],0);}},DK:function(G){
var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[
this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(
A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=
this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:
this.FN.AkS((F=this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},Hf:function(
G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_)this.FN.AjC((F=this.N,F[1].call(
F[0])));this.A_=EO;if((this.A_<0)||(this.A_>1))this.A_=0;this.DK(this);if(!this.
A_)this.Bb(null);else this.A2D();this.Am();},AFQ:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.Aq2()>E)E=this.EnumToCodeset.
Aq2();if(this.EnumToCodeset.H8()<E)E=this.EnumToCodeset.H8();}this.Number=E;var BP=
this.AM;if(!!this.EnumToCodeset){var BzG=this.EnumToCodeset.AmK(E);this.Bx(this.
AC.DZ(BzG));if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},AnD:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Vj:function(G){this.Ex(this.A_+1);},A2D:function(){A.ab5(
"%s",BrT);},ASY:function(){return this.Number;},_Init:function(aArg){C.BX._Init.
call(this,aArg);A.Core.BF._Init.call(this.JB={I:this},0);this.__proto__=C.O1;this.
JB.Filter=1;this.FN=A._NewObject(C.Aew,0);this.JB.BG=[this,this.Vj];},_Done:function(
){this.__proto__=C.BX;this.JB._Done();C.BX._Done.call(this);},_ReInit:function(){
C.BX._ReInit.call(this);this.JB._ReInit();},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JB)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeX={Text:null,Ai:function(
Ae){C.El.Ai.call(this,Ae);this.Text.L(this.AC_);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rl(this.AM));this.
Am();},AaQ:function(G){A.pe([this,this.Age],this);},AaO:function(G){A.pe([this,this.
Age],this);},Al5:function(G){A.pe([this,this.Age],this);},Age:function(G){if((!this.
Io||!this.A3)||!this.AF)return;},_Init:function(aArg){C.El._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeX;this.Text.A1(0x3F
);this.Text.H(Ate);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.El;this.Text._Done();C.El.
_Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ASb={GI:0,C9:null,AW:null,Fa:null,
Jc:null,CountryToString:null,Lf:0,Mh:false,Init:function(aArg){A.zX([this,this.MS
],[this,this.SJ,this.Lu],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.Jc.Z(this.
Afs);this.AW.FP(this.LX);this.Fa.CV(this.LX);this.Jc.CV(this.LX);},DK:function(G
){var F;if(!this.N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(
null);(F=this.N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Lf));(F=this.N,
F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Tw=this.
A_;this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>this.RN)this.A_=this.RN;if((
this.A_===1)&&!this.Afs)this.A_=2;switch(this.A_){case 0:{this.Bb(null);if(!this.
GI)this.Lu(0);}break;case 1:this.Bb(this.Jc);break;case 2:this.Bb(this.Fa);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Tw>0))this.AW.SV(2);else this.AW.SV(7);}break;
default:throw new Error(Ats+this.A_.toFixed());}C.El.Ex.call(this,this.A_);},Apu:
function(G){this.Jc.Uw(this.EA);},AaQ:function(G){var F;this.AW.A9_((F=this.AF,F[
1].call(F[0])));},AaO:function(G){var F;this.AW.A9$((F=this.A3,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mh=true;this.SM(A._GetAutoObject(
A.Device.Helper).V5(E,0,12));this.Lu(A._GetAutoObject(A.Device.Converter).S8(E));
this.Mh=false;if(!!E)this.AW.Kz(12);else this.AW.Kz(0);this.Am();},Al5:function(
G){A.pe([this,this.Age],this);},FW:function(G){var F;if(!this.AM){var BP=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ADn());if(this.AM!==BP){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjO:function(){return this.
GI;},AjQ:function(){return 999999999999;},Lu:function(E){if(this.Lf===E)return;this.
Lf=E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.SJ,this.Lu],0
);},SM:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false)A.pe([this
,this.Vw],this);A.abo([this,this.Ab5,this.SM],0);},Vw:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).AqH(this.Lf),3,10)+A.abm(this.GI,12,10
);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Age:function(G){var F;if((!this.Io||
!this.A3)||!this.AF)return;if(!(F=this.Io,F[1].call(F[0])))this.AW.AFf(true);else
this.AW.AFf(false);},SJ:function(){return this.Lf;},Ab5:function(){return this.GI;
},_Init:function(aArg){C.El._Init.call(this,aArg);C.C9._Init.call(this.C9={I:this
},0);C.AD8._Init.call(this.AW={I:this},0);C.AsR._Init.call(this.Fa={I:this},0);C.
Jc._Init.call(this.Jc={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ASb;var B;this.RN=3;this.AW.H(BrU);this.Fa.H(BaU);this.
Jc.H(BaV);this.J(this.AW,0);this.J(this.Fa,0);this.J(this.Jc,0);this.C9.AFl([this
,this.SJ,this.Lu]);this.AW.Au([this,this.Ab5,this.SM]);this.Fa.CL(this.C9);this.
Fa.Au([B=this.C9,B.B$,B.Cc]);this.Jc.A_s([B=A._GetAutoObject(A.Device.Device),B.
Awk,B.AyZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done(
);this.AW._Done();this.Fa._Done();this.Jc._Done();this.CountryToString._Done();C.
El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.Fa._ReInit();this.Jc._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ASa={GI:0,C9:null,AW:null,YN:null,Kw:null,Fa:null,Jc:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,PD:0,Lf:0,Mh:false,Init:function(aArg){A.
zX([this,this.MS],[this,this.PX,this.EC],0);A.zX([this,this.MS],[this,this.SJ,this.
Lu],0);A.zX([this,this.MS],[this,this.Anw,this.Ahv],0);},Ai:function(Ae){C.El.Ai.
call(this,Ae);this.Jc.Z(this.Afs);this.AW.FP(this.LX);this.YN.FP(this.LX);this.Kw.
FP(this.LX);this.Fa.CV(this.LX);this.Jc.CV(this.LX);},DK:function(G){var F;if(!this.
N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C3(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this
,this.Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV
);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.
N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Lf));(F=this.N,F[1].call(F[0]
)).Ca=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG5)+A.aaR(A.acf.Colon))+AcU)+A.aaR(A.
acf.Bh8));break;case 1:(F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG5)+A.aaR(A.
acf.Colon))+AcU)+A.aaR(A.acf.BpD));break;case 2:(F=this.N,F[1].call(F[0])).CS(((
A.aaR(A.acf.AG5)+A.aaR(A.acf.Colon))+AcU)+A.aaR(A.acf.Bi_));break;default:(F=this.
N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG5)+A.aaR(A.acf.Colon))+AcU)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Ca=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0]
)).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0
])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null
);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EN)+Ayk)+this.GermanStateToString.LA(
A._GetAutoObject(A.Device.Converter).ADb(this.PD)));(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[
1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(
A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Tw=this.A_;if(EO<
0)EO=0;else if(EO>this.RN)EO=this.RN;if((EO===1)&&!this.Afs)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.PD)this.Lu(0);}break;case
1:this.Bb(this.Jc);break;case 2:this.Bb(this.Fa);break;case 3:if(!Tw)A.pe([this,
this.BB2],this);else this.Bb(this.YN);break;case 4:this.Bb(this.Kw);break;case 5:
if(((Tw===4)&&!this.PD)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Tw>
0))this.AW.SV(2);else this.AW.SV(7);}break;default:throw new Error(Ats+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,this.A_);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.Mh=true;this.SM(A._GetAutoObject(A.Device.Helper).V5(E,0,8));this.
Ahv(A._GetAutoObject(A.Device.Converter).Baj(E));this.EC(A._GetAutoObject(A.Device.
Converter).Bai(E));this.Lu(A._GetAutoObject(A.Device.Converter).S8(E));this.Mh=false;
if(!!this.AM){this.YN.Kz(2);this.Kw.Kz(2);this.AW.Kz(8);}else{this.YN.Kz(0);this.
Kw.Kz(0);this.AW.Kz(0);}this.Am();},Apu:function(G){this.Jc.Uw(this.EA);},AaQ:function(
G){var F;this.AW.A9_((F=this.AF,F[1].call(F[0])));},AaO:function(G){var F;this.AW.
A9$((F=this.A3,F[1].call(F[0])));},Al5:function(G){A.pe([this,this.Age],this);},
FW:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADn());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RN);},AjO:function(){return this.GI;
},AjQ:function(){return 99999999;},Lu:function(E){if(this.Lf===E)return;this.Lf=
E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.SJ,this.Lu],0);}
,SM:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false)A.pe([this,this.
Vw],this);A.abo([this,this.Ab5,this.SM],0);},Vw:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).AqH(this.Lf),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.PD,2,10))+A.abm(this.GI,8,10);var BP=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Age:function(G){var F;if((!this.Io||!this.A3)||!this.AF)return;if(!(F=this.
Io,F[1].call(F[0])))this.AW.AFf(true);else this.AW.AFf(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Mh===false)A.pe([this,this.
Vw],this);A.abo([this,this.PX,this.EC],0);},Ahv:function(E){if(this.PD===E)return;
this.PD=E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.Anw,this.
Ahv],0);},BB2:function(G){var F;if(!!this.JR){var Ih=(F=this.JR,F[1].call(F[0]));
var A1P=0;switch(Ih){case 0:case 1:A1P=0;break;case 2:A1P=1;break;default:A.ab5(
"%s%e",Alh,Ih);}this.EC(A1P);}if(!this.PD)this.Ex(4);else this.Ex(5);},SJ:function(
){return this.Lf;},Ab5:function(){return this.GI;},PX:function(){return this.AnimalType;
},Anw:function(){return this.PD;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.ARp._Init.call(this.AW={I:this},0);C.AvV.
_Init.call(this.YN={I:this},0);C.AvV._Init.call(this.Kw={I:this},0);C.AsR._Init.
call(this.Fa={I:this},0);C.Jc._Init.call(this.Jc={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ASa;var B;this.RN=5;this.AW.H(
BrV);this.YN.H(BrW);this.YN.EV(2);this.Kw.H(BrX);this.Kw.EV(16);this.Fa.H(BaU);this.
Jc.H(BaV);this.J(this.AW,0);this.J(this.YN,0);this.J(this.Kw,0);this.J(this.Fa,0
);this.J(this.Jc,0);this.C9.AFl([this,this.SJ,this.Lu]);this.AW.Au([this,this.Ab5
,this.SM]);this.YN.Au([this,this.PX,this.EC]);this.Kw.Au([this,this.Anw,this.Ahv
]);this.Fa.CL(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cc]);this.Jc.A_s([B=A._GetAutoObject(
A.Device.Device),B.Awk,B.AyZ]);this.Init(aArg);},_Done:function(){this.__proto__=
C.El;this.C9._Done();this.AW._Done();this.YN._Done();this.Kw._Done();this.Fa._Done(
);this.Jc._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.YN._ReInit();this.Kw._ReInit();this.Fa._ReInit();this.Jc.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.El={AM:0,Awv:null,OO:null,
Q:null,EA:null,A3:null,AF:null,Io:null,N:null,JR:null,Fl:null,Fb:null,AC_:0,LX:0
,A_:0,RN:0,Afs:true,Init:function(aArg){A.pe([this,this.LU],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A_)this.Bb(null);},Bnd:function(E){if(this.
AC_===E)return;this.AC_=E;this.Am();},WN:function(E){if(this.LX===E)return;this.
LX=E;this.Am();},DK:function(G){A.ab5("%s",Ali);},MS:function(s){this.DK(s);},Ex:
function(EO){A.pe([this,this.MS],this);A.pe(this.Awv,this);if(!EO)A.pe(this.OO,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);}
,C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",AoC);},Ov:function(G){if(this.A_>1)this.Ex(this.A_-1);},M5:function(
G){if((this.A_>0)&&(this.A_<this.RN))this.Ex(this.A_+1);},Uw:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A03],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A03],this.EA,0);A.pe([this,this.A03],this);},Apu:function(G){},A03:
function(s){this.Apu(s);},OU:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3
)A.z$([this,this.A07],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.A07],E,0);if(!
!E)A.pe([this,this.A07],this);},PY:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A09],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A09],E,0);if(
!!E)A.pe([this,this.A09],this);},AaQ:function(G){},A09:function(s){this.AaQ(s);}
,AaO:function(G){},A07:function(s){this.AaO(s);},Uu:function(E){if(A.aaZ(this.Io
,E))return;if(!!this.Io)A.z$([this,this.A06],this.Io,0);this.Io=E;if(!!E)A.zX([this
,this.A06],E,0);if(!!E)A.pe([this,this.A06],this);},Al5:function(G){},A06:function(
s){this.Al5(s);},FW:function(G){A.ab5("%s",BaW);},BHb:function(s){this.FW(s);},Hf:
function(G){this.Ex(0);},AjO:function(){A.ab5("%s",AoC);return 0;},AjQ:function(
){A.ab5("%s",AoC);return 0;},LU:function(G){},AnA:function(E){if(A.aaZ(this.JR,E
))return;if(!!this.JR)A.z$([this,this.Ao5],this.JR,0);this.JR=E;if(!!E)A.zX([this
,this.Ao5],this.JR,0);A.pe([this,this.Ao5],this);},Ao5:function(G){},AFx:function(
E){if(A.aa0(this.OO,E))return;this.OO=E;},AF2:function(E){if(this.Afs===E)return;
this.Afs=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BF._Init.call(this.Fl={I:this},0);A.Core.BF._Init.call(this.Fb={I:this},0);this.
__proto__=C.El;this.H(Ate);this.AC_=A.jb.Text;this.LX=A.jb.CU;this.Fl.Filter=6;this.
Fb.Filter=7;this.Fl.BG=[this,this.Ov];this.Fb.BG=[this,this.M5];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fl._Done();this.Fb._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fl._ReInit(
);this.Fb._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Awv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OO)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Io)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Rd={AM:0,Dq:null,FN:
null,OO:null,EA:null,A3:null,AF:null,Io:null,Q:null,JR:null,AED:-1,Afs:true,AOh:
false,AUn:false,Ast:true,Init:function(aArg){A.pe([this,this.ABJ],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dq)return;if(this.Dq.A_>0){if(this.Hn){this.Dq.
WN(A.jb.CK);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Dq.WN(A.jb.
CU);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hn)this.Dq.WN(
A.jb.CK);else this.Dq.WN(A.jb.CU);this.Dq.Bnd(this.V.AQ);}},H1:function(G){C.Eg.
H1.call(this,G);if(!this.Dq)return;if(!this.Dq.A_)this.FW(this);else this.Hf(this
);},Gt:function(E){C.Eg.Gt.call(this,E);if(!!this.Dq)this.Dq.N=E;},Uw:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.Apu],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.Apu],this.EA,0);A.pe([this,this.Apu],this);},Apu:function(
G){if(!!this.Dq)this.Dq.Uw(this.EA);},OU:function(E){if(A.aaZ(this.A3,E))return;
this.A3=E;if(!!this.Dq)this.Dq.OU(E);},PY:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PY(E);},Uu:function(E){if(A.aaZ(this.Io,E))return;
this.Io=E;if(!!this.Dq)this.Dq.Uu(E);},BCv:function(G){var AAF=0;if(!!this.Dq){AAF=
this.Dq.A_;this.Dq.N=null;this.HR(this.Dq);}switch(this.AED){case 0:this.Dq=A._NewObject(
C.AeX,0);break;case 1:this.Dq=A._NewObject(C.ASb,0);break;case 2:this.Dq=A._NewObject(
C.ASa,0);break;case 3:this.Dq=A._NewObject(C.AUp,0);break;case 4:this.Dq=A._NewObject(
C.AUo,0);break;case 5:this.Dq=A._NewObject(C.ASc,0);break;default:throw new Error(
BrY+this.AED.toFixed());}this.J(this.Dq,0);this.Dq.AnA(this.JR);this.Dq.H(BrZ);this.
Dq.N=this.N;this.Dq.Uw(this.EA);this.Dq.Awv=[this,this.Awv];this.Dq.Au([this,this.
Uq,this.Bx]);this.Dq.Uu(this.Io);this.Dq.OU(this.A3);this.Dq.PY(this.AF);this.Dq.
AFx(this.OO);this.Dq.AF2(this.Afs);if(AAF>0)this.Dq.Ex(AAF);this.Bb(this.Dq);this.
Am();},FW:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FN.AjC((F=this.
N,F[1].call(F[0])));else this.FN=A._NewObject(C.Aew,0);this.Dq.FW(this);}},Hf:function(
G){var B;if(!!this.Dq)this.Dq.Hf(this);},AjO:function(){if(!this.Dq)return 0;return this.
Dq.AjO();},AjQ:function(){if(!this.Dq)return 0;return this.Dq.AjQ();},C5:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uq,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABJ],this);},BnS:function(
E){if(this.AED===E)return;this.AED=E;A.pe([this,this.BCv],this);},Ar_:function(E
){if(this.Ast===E)return;this.Ast=E;A.pe([this,this.ABJ],this);},ABJ:function(G){
var ApF;if(this.Ast){if(this.AOh)ApF=5;else ApF=0;}else if(this.AUn){if(A._GetAutoObject(
A.Device.Converter).S8(this.AM)===10)ApF=4;else ApF=3;}else if(A._GetAutoObject(
A.Device.Converter).S8(this.AM)===10)ApF=2;else ApF=1;this.BnS(ApF);},Awv:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A_)this.FN.AkS((F=this.N,F[1].call(F[
0])));this.Am();},AnA:function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([
this,this.Ao5],this.JR,0);this.JR=E;if(!!E)A.zX([this,this.Ao5],this.JR,0);A.pe([
this,this.Ao5],this);},Ao5:function(G){if(!!this.Dq)this.Dq.AnA(this.JR);},A_V:function(
E){if(this.AUn===E)return;this.AUn=E;A.pe([this,this.ABJ],this);},BmL:function(E
){if(this.AOh===E)return;this.AOh=E;A.pe([this,this.ABJ],this);},AFx:function(E){
if(A.aa0(this.OO,E))return;this.OO=E;if(!!this.Dq)this.Dq.AFx(E);},AF2:function(
E){if(this.Afs===E)return;this.Afs=E;if(!!this.Dq)this.Dq.AF2(E);},Uq:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Rd;this.H(U4);this.V.R(Atj);this.V.L(A.jb.Bm);this.FN=A._NewObject(C.Aew,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Io
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARp={ET:null,F0:null,Eq:null,Dz:null,CW:null
,Cv:null,FP:function(E){if(this.Ne===E)return;C.Ll.FP.call(this,E);this.Cv.CV(E);
this.CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);},Yz:function(
HC){var B6=null;switch(HC){case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;
case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;case 5:B6=
this.F0;break;case 6:B6=this.ET;break;case 7:B6=this.G3;break;default:A.ab5("%s"
,Ah5);}return B6;},_Init:function(aArg){C.Ll._Init.call(this,aArg);C.DG._Init.call(
this.ET={I:this},0);C.DG._Init.call(this.F0={I:this},0);C.DG._Init.call(this.Eq={
I:this},0);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(this.CW={I:this},
0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARp;this.H(Br0);this.G3.
H(AIT);this.ET.H(AyS);this.F0.H(A0o);this.Eq.H(A0p);this.Dz.H(A0q);this.CW.H(A0r
);this.Cv.H(A0s);this.F_.H(A0t);this.EM.H(BaT);this.J(this.ET,-2);this.J(this.F0
,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);
this.ET.Dk=[this,this.GY];this.F0.Dk=[this,this.GY];this.Eq.Dk=[this,this.GY];this.
Dz.Dk=[this,this.GY];this.CW.Dk=[this,this.GY];this.Cv.Dk=[this,this.GY];},_Done:
function(){this.__proto__=C.Ll;this.ET._Done();this.F0._Done();this.Eq._Done();this.
Dz._Done();this.CW._Done();this.Cv._Done();C.Ll._Done.call(this);},_ReInit:function(
){C.Ll._ReInit.call(this);this.ET._ReInit();this.F0._ReInit();this.Eq._ReInit();
this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit();},_Mark:function(D){var B;
C.Ll._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvV={Q:null,G3:null,F_:null,EM:null,It:null,Is:null,Ne:0,UC:0,AM:0,Ga:99,Init:
function(aArg){A.pe([this,this.LU],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Yz(0).M,this.Yz(-1).M));var IG=((Ae&
0x40)===0x40);if(IG){this.BgK(A.jb.AV);this.BgL(A.jb.Bm);}else{this.BgK(this.Ne);
this.BgL(A.jb.Text);}this.Ams();},FP:function(E){if(this.Ne===E)return;this.Ne=E;
this.Am();},LU:function(G){},Yz:function(HC){var B6=null;switch(HC){case-1:case 0:
B6=this.F_;break;case 1:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;},Kz:
function(E){if(this.UC===E)return;this.UC=E;this.Ams();},Ams:function(){var B;var
F;if(!!this.Q){var DV=this.F_;var AdE=this.UC;var A8=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A8>0){DV.L7(A8%10);A8=(A8/10)|0;}else if(AdE>0)DV.L7(0);else DV.L7(-
1);DV=(C.Ez.isPrototypeOf(B=this.AqU(DV,0x11))?B:null);AdE=AdE-1;}}},Agh:function(
G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agg:function(G){var F;var BP=this.
AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5
],this);},Bx:function(E){if(E<0)E=0;if(E>this.Ga)E=this.Ga;if(this.AM===E)return;
this.AM=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=E;this.Am();}
,BgK:function(aColor){this.F_.CV(aColor);this.G3.CV(aColor);},BgL:function(aColor
){this.F_.Zz(aColor);this.G3.Zz(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ez._Init.call(this.G3={I:this},0);C.Ez._Init.call(this.F_={I:this},
0);A.acg.BW._Init.call(this.EM={I:this},0);A.Core.BF._Init.call(this.It={I:this}
,0);A.Core.BF._Init.call(this.Is={I:this},0);this.__proto__=C.AvV;this.H(Br1);this.
Ne=A.jb.CK;this.G3.H(AIT);this.F_.H(AyS);this.EM.H(AyS);this.EM.Nu(2);this.EM.L(
A.jb.E1);this.It.Filter=4;this.Is.Filter=5;this.J(this.G3,0);this.J(this.F_,0);this.
J(this.EM,0);this.It.BG=[this,this.Agh];this.It.D1=[this,this.Agh];this.Is.BG=[this
,this.Agg];this.Is.D1=[this,this.Agg];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G3._Done();this.F_._Done();this.EM._Done();this.It._Done();this.Is.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G3._ReInit();this.F_._ReInit();this.EM._ReInit();this.It._ReInit();this.Is.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Is)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ez={AgL:
null,Background:null,Text:null,Ez:-1,M$:0,AmU:0,Aqz:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ez<0)this.Text.R(Rs);else this.Text.R(this.Ez.toFixed(
));this.Background.L(this.M$);this.Text.L(this.AmU);},L7:function(E){if(this.Ez===
E)return;var B6=E;if((B6<0)||(B6>9))B6=-1;this.Ez=B6;this.Am();},CV:function(E){
if(this.M$===E)return;this.M$=E;this.Am();},Ae0:function(E){if(this.Aqz===E)return;
this.Aqz=E;this.AgL.As(E);if(E===false)this.Text.Z(true);},Zz:function(E){if(this.
AmU===E)return;this.AmU=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TQ._Init.call(this.AgL={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(Aln);this.M$=A.jb.CK;this.AgL.Fq(750);this.AgL.Ux(750);this.AgL.AkB(750);
this.AmU=A.jb.Text;this.Background.A1(0x3);this.Background.H(Aln);this.Text.A1(0x3
);this.Text.H(Aln);this.Text.R(Rs);this.J(this.Background,0);this.J(this.Text,0);
this.AgL.Q=[B=this.Text,B.Fp,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgL._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgL._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FC={Y:null,I$:null,AOp:A.jV,ASq:A.jV,Tp:0,AJZ:0,A2t:false,A11:false,Init:function(
aArg){},CD:function(G){var B;C.AB.CD.call(this,G);A.zX([this,this.ABE],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);A.zX([this,this.MS],[B=A._GetAutoObject(A.Device.
Device).An,B.Fo,B.Fs],0);A.pe([this,this.ABE],this);A.pe([this,this.MS],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABE],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);},ByA:function(Md){A._GetAutoObject(A.Device.Helper
).GS(Md);this.Ap$(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap$:function(L_,AcZ){A.ab5("%s",Ali);},Vr:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))A.aaS([
this,this.Bzy],this);else if(!!Ar&&(Ar.PopupState===5)){this.A11=true;this.Ew(this
);}},Bzy:function(G){if(this.Tp>0){this.A11=false;this.Adq(this);this.A$j(0);}},
Aiz:function(G){if((this.AJZ+1)<this.Tp)this.A$j(this.AJZ+1);else A.aaS([this,this.
Bw$],this);},Bxa:function(s){this.Aiz(s);},A$j:function(E){this.AJZ=E;if(this.A11===
false){this.ByA(E);A.aaS([this,this.Bxa],this);var XR=(this.AJZ/this.Tp)*100;A._GetAutoObject(
A.Device.Device).AY(49,true,A.abk(XR,0,0),0,[this,this.Vr]);}},Aaz:function(G){A.
_GetAutoObject(A.Device.Device).AY(49,false,Br2,0,[this,this.Vr]);this.A2t=true;
A.pe([this,this.ALA],this);},Bw$:function(s){this.Aaz(s);},Adq:function(G){this.
I$.Z(true);this.A2t=false;this.ALA(this);},BG7:function(s){this.Adq(s);},AAV:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).A7b();A._GetAutoObject(A.Device.Device
).An.Bk(Bf);},Ew:function(G){A._GetAutoObject(C.A7).FB();},A36:function(G){A._GetAutoObject(
C.A7).Cb(84);},DK:function(G){this.N.Z(true);this.N.C3(A.aaL(A.ach.E2));this.N.CF=[
this,this.Ew];this.N.Ct(A.aaL(A.ach.ADX));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Arn(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Ce=null;this.N.IS.CZ(100);}else{this.N.Ce=[this,this.AAV];this.
N.IS.CZ(255);}this.N.C4(A.aaL(A.ach.AeE));this.N.Ca=[this,this.A36];},MS:function(
s){this.DK(s);},ABE:function(G){this.Tp=A._GetAutoObject(A.Device.Device).An.B_(
);if(this.Tp>0)A._GetAutoObject(A.Device.Device).AY(49,true,U8,0,[this,this.Vr]);
else{this.Adq(this);this.Aaz(this);}},Akz:function(E){if(this.AOp===E)return;this.
AOp=E;A.pe([this,this.ALA],this);},ALA:function(G){var B;if(this.A2t===false){this.
I$.R(A.jV);return;}var Apg;if(!A._GetAutoObject(A.Device.Device).An.B_()){var Adk=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABE],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);this.AAV(this);if(!A._GetAutoObject(A.Device.Device
).An.QM()||!Adk)Apg=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ADi(A._GetAutoObject(A.Device.Device).An.Filter)===1)Apg=A.aaR(
A.acf.AOj);else Apg=A.aaR(A.acf.AOi);A._GetAutoObject(A.Device.Device).An.Bk(Adk
);A.zX([this,this.ABE],[B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs],0);}else
Apg=this.ASq;Apg=Apg+(A0v+this.AOp);this.I$.R(Apg);},Ae$:function(E){if(this.ASq===
E)return;this.ASq=E;A.pe([this,this.ALA],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkT._Init.call(this.I$={
I:this},0);this.__proto__=C.FC;this.Dr(C.AbC);this.Y.H(Fe);this.Y.JZ(1);this.I$.
H(Fe);this.J(this.Y,0);this.J(this.I$,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I$._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7M={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A7M;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvX={K6:null,M3:null,AZ:0,Yp:function(){this.K6=null;this.M3=null;this.AZ=0;
},OA:function(A8){var Hj;Hj=A._NewObject(C.A7M,0);Hj.A5=A8;if(!this.K6){this.K6=
Hj;this.M3=Hj;this.AZ=1;}else{this.M3.Ah=Hj;this.M3=Hj;this.AZ=this.AZ+1;}},Am2:
function(){var B;var RR=0;var Op=this.K6;while(!!Op){RR+=Op.A5;Op=Op.Ah;}return RR;
},AjP:function(){if(!this.AZ)return 0;return this.Am2()/this.AZ;},Aq4:function(){
var B;if(!this.AZ)return 0;var A1V=this.AjP();var Adh=0;var Op=this.K6;while(!!Op
){Adh+=Math.pow(Op.A5-A1V,2);Op=Op.Ah;}Adh/=this.AZ;Adh=Math.sqrt(Adh);return Adh;
},_Init:function(aArg){this.__proto__=C.AvX;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOq={Gd:null,AeA:null,Yw:null,C8:null,I$:null,
CQ:function(){this.A46(this);},Init:function(aArg){A.zV([this,this.A46],A._GetAutoObject(
A.Device.Device).Pv,0);A.pe([this,this.A46],this);},Ew:function(G){A._GetAutoObject(
C.A7).FB();},A46:function(G){this.Yw.Ch(-1);this.I$.Z(!this.Gd.AX.B_());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gd._Init.call(this.Gd={I:this},0);C.
AeA._Init.call(this.AeA={I:this},0);C.Yw._Init.call(this.Yw={I:this},0);A.acg.C8.
_Init.call(this.C8={I:this},0);C.AkT._Init.call(this.I$={I:this},0);this.__proto__=
C.AOq;this.N.Z(true);this.Dr(C.APl);this.Gd.H(Atl);this.Gd.N8(C.AmT);this.AeA.H(
I1);this.Yw.H(Atf);this.C8.DD(Br3);this.C8.DN(Br4);this.C8.Nu(3);this.C8.L(A.jb.
Text);this.I$.H(Ale);this.I$.R((A.aaR(A.acf.A8w)+A0v)+A.aaR(A.acf.A6P));this.J(this.
Gd,0);this.J(this.AeA,0);this.J(this.Yw,0);this.J(this.C8,0);this.J(this.I$,0);this.
N.CF=[this,this.Ew];this.N.C3(A.aaL(A.ach.E2));this.Gd.Zy(A._GetAutoObject(A.Device.
Device).Pv);this.Yw.Zy(A._GetAutoObject(A.Device.Device).Pv);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gd._Done();this.AeA._Done();this.Yw._Done();
this.C8._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gd._ReInit();this.AeA._ReInit();this.Yw._ReInit();this.C8.
_ReInit();this.I$._ReInit();this.I$.R((A.aaR(A.acf.A8w)+A0v)+A.aaR(A.acf.A6P));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gd)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AeA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOt={Auk:null,Auj:null,Aum:null,Aul:null,Auo:null,Aun:null,Auq:null,Aup:null
,AaS:null,YE:null,Abu:null,Abt:null,RatedAttribute:0,Init:function(aArg){this.SO(
2);},DF:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D5.CP){case
6:switch(this.RatedAttribute){case 2:this.SO(3);break;case 1:this.SO(2);break;case
4:this.SO(1);break;case 3:this.SO(4);break;default:this.SO(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SO(1);break;case 1:this.SO(4);break;case 4:this.
SO(3);break;case 3:this.SO(2);break;default:this.SO(0);}break;default:D5.Mw=true;
}},Ap$:function(L_,AcZ){if(!L_)return;var Fx=A._NewObject(A.Device.Filter,0);var
HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,AcZ,true);Fx.
CX(HZ);var ABc=A._NewObject(A.Device.AssessmentFilterCriterion,0);ABc.Initialize(
3,5,0,true);Fx.CX(ABc);L_.Bk(Fx);},Aiz:function(G){var Ap9=0;var A4o=A._GetAutoObject(
A.Device.Device).Bt.B_();var B2=A._NewObject(A.Device.Rating,0);while(Ap9<A4o){B2.
E3(Ap9,A._GetAutoObject(A.Device.Device).Bt);this.Bd4(B2,0);var BCR=A._GetAutoObject(
A.Device.Helper).ZY(2);this.Bd4(B2,BCR);Ap9++;}C.FC.Aiz.call(this,G);},Aaz:function(
G){A.pe([this,this.BdH],this);C.FC.Aaz.call(this,G);},Adq:function(G){this.Auk=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aum=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aun=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auo=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aup=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auq=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FC.Adq.
call(this,G);},DK:function(G){C.FC.DK.call(this,G);this.N.OW(true);this.N.OX(true
);},Bd4:function(D3,BcC){if(!D3||(D3.Timestamp<BcC))return;if(!BcC){this.Auk.Set(
D3.Appearance,this.Auk.Get(D3.Appearance)+1);this.Aum.Set(D3.Faeces,this.Aum.Get(
D3.Faeces)+1);this.Auo.Set(D3.Feed,this.Auo.Get(D3.Feed)+1);this.Auq.Set(D3.Respiratory
,this.Auq.Get(D3.Respiratory)+1);}else{this.Auj.Set(D3.Appearance,this.Auj.Get(D3.
Appearance)+1);this.Aul.Set(D3.Faeces,this.Aul.Get(D3.Faeces)+1);this.Aun.Set(D3.
Feed,this.Aun.Get(D3.Feed)+1);this.Aup.Set(D3.Respiratory,this.Aup.Get(D3.Respiratory
)+1);}},SO:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
YE.KB(this.AaS.LA(E));A.pe([this,this.BdH],this);},BdH:function(G){var AaT=null;
var AaU=null;switch(this.RatedAttribute){case 2:{AaT=this.Auj;AaU=this.Auk;}break;
case 4:{AaT=this.Aul;AaU=this.Aum;}break;case 1:{AaT=this.Aun;AaU=this.Auo;}break;
case 0:{AaT=A._NewObject(A.Device.Int32ArrayWrapper,0);AaU=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaT=this.Aup;AaU=this.Auq;}break;default:throw new
Error(Br5+this.RatedAttribute.toFixed());}var AGE=A._NewObject(A.acv.AUH,0);AGE.
OA(AaT.Get(3),A.jb.E1);AGE.OA(AaT.Get(2),A.jb.Ib);AGE.OA(AaT.Get(1),A.jb.Gk);var
AGF=A._NewObject(A.acv.AUH,0);AGF.OA(AaU.Get(3),A.jb.E1);AGF.OA(AaU.Get(2),A.jb.
Ib);AGF.OA(AaU.Get(1),A.jb.Gk);this.Abt.Acc(AGE);this.Abu.Acc(AGF);var A4S=AaT.Am2(
)-AaT.Get(5);var Bgg=0;var Bge=0;if(A4S>0){Bgg=(AaT.Get(2)/A4S)*100;Bge=(AaT.Get(
1)/A4S)*100;}var ALn=AaU.Am2()-AaU.Get(5);this.I$.Z(!ALn);var Bgh=0;var Bgf=0;if(
ALn>0){Bgh=(AaU.Get(2)/ALn)*100;Bgf=(AaU.Get(1)/ALn)*100;}this.Abt.A$h(A.abk(Bgg
,0,0)+AfJ);this.Abt.A_X(A.abk(Bge,0,0)+AfJ);this.Abu.A$h(A.abk(Bgh,0,0)+AfJ);this.
Abu.A_X(A.abk(Bgf,0,0)+AfJ);},_Init:function(aArg){C.FC._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaS={I:this},0);C.NP._Init.call(this.
YE={I:this},0);C.AC0._Init.call(this.Abu={I:this},0);C.AC0._Init.call(this.Abt={
I:this},0);this.__proto__=C.AOt;this.Dr(C.APm);this.Akz(A.aaR(A.acf.A6Q));this.Ae$(
A.aaR(A.acf.Ans));this.YE.H(I1);this.YE.Aj(true);this.YE.T(A.aaR(A.acf.Axz)+A.aaR(
A.acf.Colon));this.YE.Bi(false);this.YE.BnQ(false);this.Abu.H(Br6);this.Abu.T(A.
aaR(A.acf.AGp));this.Abt.H(Br7);this.Abt.T(A.aaR(A.acf.A7V));this.I$.H(Ale);this.
J(this.YE,-1);this.J(this.Abu,-1);this.J(this.Abt,-1);this.Auk=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aum=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auo=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aun=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auq=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aup=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FC;this.AaS._Done();this.YE._Done();this.Abu._Done();this.Abt.
_Done();C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.
AaS._ReInit();this.YE._ReInit();this.Abu._ReInit();this.Abt._ReInit();this.Akz(A.
aaR(A.acf.A6Q));this.Ae$(A.aaR(A.acf.Ans));this.YE.T(A.aaR(A.acf.Axz)+A.aaR(A.acf.
Colon));this.Abu.T(A.aaR(A.acf.AGp));this.Abt.T(A.aaR(A.acf.A7V));},_Mark:function(
D){var B;C.FC._Mark.call(this,D);if((B=this.Auk)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aum)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aul)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Auo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aun)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Auq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aup)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOu={Aez:null,UV:null,UW:null,Aey:null,US:null,UT:null,AJ1:0,AJ0:0,AJF:0,AJE:
0,Adj:false,CQ:function(){this.Aaz(this);},Ap$:function(L_,AcZ){if(!L_)return;var
Fx=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,AcZ,true);Fx.CX(HZ);var ABv=A._NewObject(A.Device.Int32FilterCriterion
,0);ABv.Initialize(7,2,0,true);Fx.CX(ABv);L_.Bk(Fx);},Aiz:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJ1++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJ0++;var Ap9=0;var A4o=A._GetAutoObject(
A.Device.Device).Bt.B_();var Aui;var ABQ=0;while(Ap9<A4o){this.Adj=true;Aui=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ap9,9);if(Aui===1)ABQ=1;else if((Aui===2)&&(ABQ!==1))ABQ=
2;Ap9++;}if(ABQ===1)this.AJE++;else if(ABQ===2)this.AJF++;C.FC.Aiz.call(this,G);
},Aaz:function(G){var Bgc=0;var Bgd=0;if(this.Tp>0){Bgc=(this.AJ1/this.Tp)*100;Bgd=(
this.AJ0/this.Tp)*100;}this.UV.KB(((((((A.abk(Bgc,0,0)+AIU)+this.AJ1.toFixed())+
CR)+A.aaR(A.acf.AEK))+CR)+this.Tp.toFixed())+Pd);this.UW.KB(((((((A.abk(Bgd,0,0)+
AIU)+this.AJ0.toFixed())+CR)+A.aaR(A.acf.AEK))+CR)+this.Tp.toFixed())+Pd);var Bga=
0;var Bgb=0;if(this.Tp>0){Bga=(this.AJF/this.Tp)*100;Bgb=(this.AJE/this.Tp)*100;
}this.US.KB(((((((A.abk(Bga,0,0)+AIU)+this.AJF.toFixed())+CR)+A.aaR(A.acf.AEK))+
CR)+this.Tp.toFixed())+Pd);this.UT.KB(((((((A.abk(Bgb,0,0)+AIU)+this.AJE.toFixed(
))+CR)+A.aaR(A.acf.AEK))+CR)+this.Tp.toFixed())+Pd);this.I$.Z(!this.Adj);C.FC.Aaz.
call(this,G);},Adq:function(G){this.AJE=0;this.AJF=0;this.AJ0=0;this.AJ1=0;this.
Adj=false;C.FC.Adq.call(this,G);},_Init:function(aArg){C.FC._Init.call(this,aArg
);C.AgB._Init.call(this.Aez={I:this},0);C.Ajt._Init.call(this.UV={I:this},0);C.Ajt.
_Init.call(this.UW={I:this},0);C.AgB._Init.call(this.Aey={I:this},0);C.Ajt._Init.
call(this.US={I:this},0);C.Ajt._Init.call(this.UT={I:this},0);this.__proto__=C.AOu;
this.Dr(C.APn);this.Akz(A.aaR(A.acf.A6R));this.Ae$(A.aaR(A.acf.ArC));this.Aez.H(
I1);this.Aez.Aj(true);this.Aez.T(A.aaR(A.acf.A6V));this.Aez.Bi(false);this.UV.H(
Qf);this.UV.Aj(true);this.UV.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UV.
Bi(true);this.UV.AkE(2);this.UW.H(Aan);this.UW.Aj(true);this.UW.T(A.aaR(A.acf.AvF
)+A.aaR(A.acf.Colon));this.UW.Bi(true);this.UW.AkE(1);this.Aey.H(Alj);this.Aey.Aj(
true);this.Aey.T(A.aaR(A.acf.A6W));this.Aey.Bi(false);this.US.H(Aos);this.US.Aj(
true);this.US.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.US.Bi(true);this.
US.AkE(2);this.UT.H(Atf);this.UT.Aj(true);this.UT.T(A.aaR(A.acf.AvF)+A.aaR(A.acf.
Colon));this.UT.Bi(true);this.UT.AkE(1);this.J(this.Aez,0);this.J(this.UV,0);this.
J(this.UW,0);this.J(this.Aey,0);this.J(this.US,0);this.J(this.UT,0);this.UV.S(A.
aaL(A.fl.Ak));this.UW.S(A.aaL(A.fl.Ak));this.US.S(A.aaL(A.fl.Ak));this.UT.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FC;this.Aez._Done();this.UV._Done(
);this.UW._Done();this.Aey._Done();this.US._Done();this.UT._Done();C.FC._Done.call(
this);},_ReInit:function(){C.FC._ReInit.call(this);this.Aez._ReInit();this.UV._ReInit(
);this.UW._ReInit();this.Aey._ReInit();this.US._ReInit();this.UT._ReInit();this.
Akz(A.aaR(A.acf.A6R));this.Ae$(A.aaR(A.acf.ArC));this.Aez.T(A.aaR(A.acf.A6V));this.
UV.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UW.T(A.aaR(A.acf.AvF)+A.aaR(
A.acf.Colon));this.Aey.T(A.aaR(A.acf.A6W));this.US.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UT.T(A.aaR(A.acf.AvF)+A.aaR(A.acf.Colon));this.UV.S(A.aaL(A.fl.
Ak));this.UW.S(A.aaL(A.fl.Ak));this.US.S(A.aaL(A.fl.Ak));this.UT.S(A.aaL(A.fl.Ak
));this.CQ();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.Aez)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aey)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.US)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UT)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqT={Lc:null
,Ajh:null,Aji:null,Amt:null,AbG:null,Xb:null,AbD:null,S_:null,AbE:null,S$:null,AbH:
null,Xc:null,Ay:null,Ade:0,AAG:0,ApA:0,A28:0,Bez:0,CQ:function(){this.Aaz(this);
},DF:function(G){switch(this.Cq.CP){case 4:{if(this.I$.Fp())return;var QD=this.Y.
Br[1]+80;this.Y.Gc([this.Y.Br[0],QD]);this.Y.VG(null,null);}break;case 5:{if(this.
I$.Fp())return;var QD=this.Y.Br[1]-80;this.Y.Gc([this.Y.Br[0],QD]);this.Y.VG(null
,null);}break;default:C.FC.DF.call(this,G);}},Ap$:function(L_,AcZ){if(!L_)return;
var Fx=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,AcZ,true);Fx.CX(HZ);var Ac$=A._NewObject(A.Device.Int32FilterCriterion
,0);Ac$.Initialize(8,2,0,true);Fx.CX(Ac$);L_.Bk(Fx);},Aiz:function(G){if(this.Bep(
)){this.Lc.OA(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Aro()){var Qp=A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qp>0){var A2G=A._GetAutoObject(A.acj.DU).AlE(Qp,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajh.
OA(A2G);}}var A3r=A._GetAutoObject(A.Device.Device).Bt.B_()-2;if(A3r>=0){var BAH=
A._GetAutoObject(A.Device.Device).Bt.ADk(A3r,8);var BAG=A._GetAutoObject(A.Device.
Device).Bt.Hw(A3r,6);var Qp=A._GetAutoObject(A.Device.Helper).Mf(BAG,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qp>0){var A2G=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAH)/Qp)|0;this.Aji.OA(A2G);}}if((A._GetAutoObject(
A.Device.Helper).W.Aro()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RU()<=180)){var ALL=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tx=A._GetAutoObject(A.Device.
Helper).Mf(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BBY=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALL/Tx);this.Amt.OA(BBY);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Ade++;this.ApA=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZY(7)){this.AAG++;this.A28=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bez=A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.FC.Aiz.call(
this,G);},Aaz:function(G){var A5d=this.Ajh.AjP()|0;var A5f=this.Aji.AjP()|0;if(this.
Ade>1)A._GetAutoObject(A.Device.Device).AY(56,true,this.Ade.toFixed(),0,null);if(
this.Ade===1)A._GetAutoObject(A.Device.Device).AY(53,true,this.ApA.toFixed(),0,null
);if(this.AAG>1)A._GetAutoObject(A.Device.Device).AY(52,true,this.AAG.toFixed(),
0,null);if(this.AAG===1)A._GetAutoObject(A.Device.Device).AY(57,true,(this.A28.toFixed(
)+Ati)+this.Bez.toFixed(),0,null);if(this.Lc.AZ>0)this.Xb.T(((((((A._GetAutoObject(
A.Device.Converter).Ax$(this.Lc.AjP()|0,1)+AyT)+A._GetAutoObject(A.Device.Converter
).Ax$(this.Lc.Aq4()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af7())+AyU)+this.Lc.AZ.
toFixed())+Pd);else this.Xb.T(A.aaR(A.acf.Unknown));if(this.Ajh.AZ>0)this.S_.T(((((((
A._GetAutoObject(A.Device.Converter).Td(A5d,2,true)+AyT)+A._GetAutoObject(A.Device.
Converter).Td(this.Ajh.Aq4()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).AaE())+AyU
)+this.Ajh.AZ.toFixed())+Pd);else this.S_.T(A.aaR(A.acf.Unknown));if(this.Aji.AZ>
0)this.S$.T(((((((A._GetAutoObject(A.Device.Converter).Td(A5f,2,true)+AyT)+A._GetAutoObject(
A.Device.Converter).Td(this.Aji.Aq4()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).
AaE())+AyU)+this.Aji.AZ.toFixed())+Pd);else this.S$.T(A.aaR(A.acf.Unknown));if(this.
Amt.AZ>0)this.Xc.T(((((((A.abk(this.Amt.AjP(),0,1)+AyT)+A.abk(this.Amt.Aq4(),0,1
))+CR)+A.aaR(A.acf.Biw))+AyU)+this.Amt.AZ.toFixed())+Pd);else this.Xc.T(A.aaR(A.
acf.Unknown));var A5e=0;var A5g=0;var Adj=false;if(this.Lc.AZ>0)Adj=true;var Ih=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AKi=A._GetAutoObject(A.Device.
Device).An.Filter.DM(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AKi)?AKi:null))Ih=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AKi)?AKi:null
).A5;}if(this.Ajh.AZ>0){Adj=true;A5e=A._GetAutoObject(A.Device.Converter).BaE(A5d
,Ih);}if(this.Aji.AZ>0){Adj=true;A5g=A._GetAutoObject(A.Device.Converter).BaE(A5f
,Ih);}this.S_.AkE(A5e);this.S$.AkE(A5g);this.I$.Z(!Adj);C.FC.Aaz.call(this,G);},
Adq:function(G){this.Lc.Yp();this.Ajh.Yp();this.Aji.Yp();this.Amt.Yp();this.Ade=
0;this.AAG=0;this.ApA=0;this.A28=0;C.FC.Adq.call(this,G);},Fj:function(G){var B;
this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.
MH(-this.Y.Br[1]);},Bep:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FC._Init.call(this,aArg);C.AgB._Init.call(this.AbG={I:
this},0);C.IK._Init.call(this.Xb={I:this},0);C.AgB._Init.call(this.AbD={I:this},
0);C.Ajt._Init.call(this.S_={I:this},0);C.AgB._Init.call(this.AbE={I:this},0);C.
Ajt._Init.call(this.S$={I:this},0);C.AgB._Init.call(this.AbH={I:this},0);C.IK._Init.
call(this.Xc={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqT;
this.Dr(C.AvE);this.Akz(A.aaR(A.acf.A6S));this.Ae$(A.aaR(A.acf.Akm));this.AbG.H(
Atp);this.AbG.Aj(true);this.AbG.T(A.aaR(A.acf.A5O));this.AbG.Bi(false);this.AbG.
Kz(5);this.Xb.H(A0w);this.Xb.Aj(true);this.Xb.T(A.jV);this.Xb.Bi(true);this.AbD.
H(Atm);this.AbD.Aj(true);this.AbD.T(A.aaR(A.acf.AL_));this.AbD.Bi(false);this.AbD.
Kz(5);this.S_.H(Atn);this.S_.Aj(true);this.S_.T(A.jV);this.S_.Bi(true);this.S_.KB(
A.jV);this.AbE.H(Ato);this.AbE.Aj(true);this.AbE.T(A.aaR(A.acf.AuI));this.AbE.Bi(
false);this.AbE.Kz(5);this.S$.H(Br8);this.S$.Aj(true);this.S$.T(A.jV);this.S$.Bi(
true);this.S$.KB(A.jV);this.AbH.H(A0x);this.AbH.Aj(true);this.AbH.T(A.aaR(A.acf.
A5W));this.AbH.Bi(false);this.AbH.Kz(5);this.Xc.H(AoA);this.Xc.Aj(true);this.Xc.
T(A.jV);this.Xc.Bi(true);this.Ay.H(Ix);this.J(this.AbG,-1);this.J(this.Xb,-1);this.
J(this.AbD,-1);this.J(this.S_,-1);this.J(this.AbE,-1);this.J(this.S$,-1);this.J(
this.AbH,-1);this.J(this.Xc,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fj];this.
Lc=A._NewObject(C.AvX,0);this.Ajh=A._NewObject(C.AvX,0);this.Aji=A._NewObject(C.
AvX,0);this.Xb.S(A.aaL(A.fl.Af));this.S_.S(A.aaL(A.fl.Ak));this.S$.S(A.aaL(A.fl.
Ak));this.Xc.S(A.aaL(A.fl.Ak));this.Amt=A._NewObject(C.A62,0);},_Done:function(){
this.__proto__=C.FC;this.AbG._Done();this.Xb._Done();this.AbD._Done();this.S_._Done(
);this.AbE._Done();this.S$._Done();this.AbH._Done();this.Xc._Done();this.Ay._Done(
);C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.AbG._ReInit(
);this.Xb._ReInit();this.AbD._ReInit();this.S_._ReInit();this.AbE._ReInit();this.
S$._ReInit();this.AbH._ReInit();this.Xc._ReInit();this.Ay._ReInit();this.Akz(A.aaR(
A.acf.A6S));this.Ae$(A.aaR(A.acf.Akm));this.AbG.T(A.aaR(A.acf.A5O));this.AbD.T(A.
aaR(A.acf.AL_));this.AbE.T(A.aaR(A.acf.AuI));this.AbH.T(A.aaR(A.acf.A5W));this.Xb.
S(A.aaL(A.fl.Af));this.S_.S(A.aaL(A.fl.Ak));this.S$.S(A.aaL(A.fl.Ak));this.Xc.S(
A.aaL(A.fl.Ak));this.CQ();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((
B=this.Lc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajh)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aji)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amt)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Xb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.AbC={_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.AbC;this.
Df.Ax(A.aaL(A.ach.ADT));},_className:"Application::HeaderEvaluationFilter"};C.Kv={
CQ:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjS.DX.call(this
,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad1(A._GetAutoObject(A.Device.
Device).Ko));},_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.
Kv;},_ReInit:function(){C.AjS._ReInit.call(this);this.CQ();},_className:"Application::HeaderListFilter"
};C.AvE={Init:function(aArg){this.Df.Ax(A._GetAutoObject(A.acj.DU).BdX());},_Init:
function(aArg){C.AbC._Init.call(this,aArg);this.__proto__=C.AvE;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APn={Init:function(
aArg){this.Df.Ax(A.aaL(A.ach.Ag8));},_Init:function(aArg){C.AbC._Init.call(this,
aArg);this.__proto__=C.APn;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APm={Init:function(aArg){this.Df.Ax(A.aaL(A.ach.Arj));},_Init:function(aArg){
C.AbC._Init.call(this,aArg);this.__proto__=C.APm;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APl={Sr:null,Df:null,AP:null,CQ:function(){this.Sr.R(A.aaR(A.acf.ANq));},Dg:
function(E){C.BR.Dg.call(this,E);this.Sr.L(E);this.Df.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Sr={I:this},0);A.acg.Ap._Init.
call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this},0);this.__proto__=
C.APl;this.Sr.H(Br9);this.Sr.R(A.aaR(A.acf.ANq));this.Sr.A6(0x11);this.Df.H(Br_);
this.AP.DD(Br$);this.AP.DN(Bsa);this.AP.L(A.jb.Bc);this.J(this.Sr,0);this.J(this.
Df,0);this.J(this.AP,0);this.Sr.S(A.aaL(A.fl.Af));this.Sr.A0(A.aaL(A.fl.Ak));this.
Df.Ax(A.aaL(A.ach.AQz));},_Done:function(){this.__proto__=C.BR;this.Sr._Done();this.
Df._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Sr._ReInit();this.Df._ReInit();this.AP._ReInit();this.Sr.R(A.aaR(
A.acf.ANq));this.Sr.S(A.aaL(A.fl.Af));this.Sr.A0(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.AeA={T3:null,Aj2:
null,AjZ:null,Aj0:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.T3={I:this},0);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.
call(this.AjZ={I:this},0);A.acg.Ap._Init.call(this.Aj0={I:this},0);this.__proto__=
C.AeA;this.T3.H(Bsb);this.T3.R(A.aaR(A.acf.Year));this.T3.A6(0x11);this.T3.L(A.jb.
Text);this.Aj2.H(BaX);this.Aj2.L(A.jb.Text);this.AjZ.H(Bsc);this.AjZ.L(A.jb.Text
);this.Aj0.H(Bsd);this.Aj0.L(A.jb.Text);this.J(this.T3,0);this.J(this.Aj2,0);this.
J(this.AjZ,0);this.J(this.Aj0,0);this.T3.S(A.aaL(A.fl.Kt));this.T3.A0(A.aaL(A.fl.
HL));this.Aj2.Ax(A.aaL(A.ach.AQN));this.AjZ.Ax(A.aaL(A.ach.AQM));this.Aj0.Ax(A.aaL(
A.ach.AQU));},_Done:function(){this.__proto__=C.EB;this.T3._Done();this.Aj2._Done(
);this.AjZ._Done();this.Aj0._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.T3._ReInit();this.Aj2._ReInit();this.AjZ._ReInit();this.
Aj0._ReInit();this.T3.R(A.aaR(A.acf.Year));this.T3.S(A.aaL(A.fl.Kt));this.T3.A0(
A.aaL(A.fl.HL));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.T3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmT={Ajz:null,AP:null
,A$:null,Ea:null,UP:null,S1:null,Gv:null,XR:0,AtT:0,AlI:0,ABR:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.S1.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.S1.M[2]-1,0,this.S1.M[
2]+1,aSize[1]]);this.UP.H([this.S1.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UP.M[2]-1,0,this.UP.M[2]+1,aSize[1]]);this.Gv.H([this.UP.M[2],0,aSize[
0],aSize[1]]);this.Ajz.H(this.Gv.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABR.toFixed());this.S1.L(this.V.AQ);this.S1.R(this.AlI.toFixed());this.UP.
L(this.V.AQ);this.UP.R(this.AtT.toFixed());var B2=this.BBX(this.XR);this.Gv.L(A.
_GetAutoObject(A.acj.Assessment).XG(B2));this.Ajz.L(A._GetAutoObject(A.acj.Assessment
).Qu(B2));this.Gv.R(A.abk(this.XR,0,0)+AfJ);},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;Ad=(this.AX.B_()-Ad)-1;if(!!this.AX){this.AlI=this.AX.CC(Ad,1);this.AtT=
this.AX.CC(Ad,2);this.ABR=this.AX.CC(Ad,0);if(this.AlI>0)this.XR=(this.AtT/this.
AlI)*100;else this.XR=0;this.Am();}},BBX:function(XR){if(XR>=8)return 1;else if(
XR>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajz={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UP={I:this},0);A.acg.Text._Init.call(this.S1={I:this},0
);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.AmT;this.Ajz.H(Aoq);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.H(Aoq);this.Ea.L(A.jb.Bc);this.UP.
L(A.jb.Text);this.S1.H(Aoq);this.S1.L(A.jb.Text);this.Gv.L(A.jb.Text);this.J(this.
Ajz,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.UP,0);this.
J(this.S1,0);this.J(this.Gv,0);this.UP.S(A.aaL(A.fl.Af));this.S1.S(A.aaL(A.fl.Af
));this.Gv.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajz._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.UP._Done(
);this.S1._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajz._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea.
_ReInit();this.UP._ReInit();this.S1._ReInit();this.Gv._ReInit();this.UP.S(A.aaL(
A.fl.Af));this.S1.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajt={
BU:null,Ax6:A.jV,Rating:0,Ai:function(Ae){C.IK.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qu(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XG(this.Rating));}this.BU.L(this.V.AQ);},S:function(
E){C.IK.S.call(this,E);if((E===A.aaL(A.fl.Kt))||(E===A.aaL(A.fl.Af)))this.BU.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.HL))||(E===A.aaL(A.fl.Ak)))this.BU.S(A.aaL(
A.fl.Ak));else this.BU.S(E);},KB:function(E){if(this.Ax6===E)return;this.Ax6=E;this.
BU.R(E);},AkE:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.BU={I:this}
,0);this.__proto__=C.Ajt;this.BU.A1(0x34);this.BU.H(Aap);this.BU.Je(true);this.BU.
A6(0x11);this.BU.L(A.jb.Text);this.BU.Aj(true);this.J(this.BU,0);this.BU.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IK;this.BU._Done();C.IK._Done.call(
this);},_ReInit:function(){C.IK._ReInit.call(this);this.BU._ReInit();this.BU.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IK._Mark.call(this,D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.AC0={
N$:null,SR:null,V:null,AnU:null,AnT:null,Acm:null,Acl:null,DL:LB,BaJ:A.jV,A$D:A.
jV,Acc:function(E){if(this.N$===E)return;this.N$=E;this.SR.Acc(this.N$);},T:function(
E){if(this.DL===E)return;this.DL=E;this.V.R(E);},A$h:function(E){if(this.BaJ===E
)return;this.BaJ=E;this.Acm.R(E);},A_X:function(E){if(this.A$D===E)return;this.A$D=
E;this.Acl.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SR._Init.
call(this.SR={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnU={I:this},0);A.acg.AL._Init.call(this.AnT={I:this},0);A.acg.Text._Init.
call(this.Acm={I:this},0);A.acg.Text._Init.call(this.Acl={I:this},0);this.__proto__=
C.AC0;this.H(Bse);this.SR.H(Bsf);this.SR.As(false);this.SR.BnZ(360);this.SR.Bn9(
0.5);this.V.A1(0x1D);this.V.H(Tf);this.V.KX(true);this.V.R(LB);this.V.L(A.jb.Text
);this.AnU.H(BaY);this.AnU.L(A.jb.Ib);this.AnT.H(BaZ);this.AnT.L(A.jb.Gk);this.Acm.
A1(0x1D);this.Acm.H(BaY);this.Acm.L(A.jb.Text);this.Acl.A1(0x1D);this.Acl.H(BaZ);
this.Acl.L(A.jb.CU);this.J(this.SR,0);this.J(this.V,0);this.J(this.AnU,0);this.J(
this.AnT,0);this.J(this.Acm,0);this.J(this.Acl,0);this.SR.Bn$(A.aaL(A.acv.AUg));
this.V.S(A.aaL(A.fl.Ak));this.Acm.S(A.aaL(A.fl.Ak));this.Acl.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SR._Done();this.V._Done();this.AnU.
_Done();this.AnT._Done();this.Acm._Done();this.Acl._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SR._ReInit();this.V._ReInit(
);this.AnU._ReInit();this.AnT._ReInit();this.Acm._ReInit();this.Acl._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acm.S(A.aaL(A.fl.Ak));this.Acl.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkT={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkT;this.H(U5);this.Background.A1(0x3F);this.Background.
H(U5);this.Background.L(A.jb.Bkx);this.Text.A1(0x3F);this.Text.H(U5);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A0(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Rg={Ak4:null,N0:null,C_:null,AcI:null,JT:null,TemperatureUnit:null,MO:null,P1:
null,So:null,UE:null,Lw:null,Jk:null,Z$:null,Z_:null,Sp:null,HH:null,AjI:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlQ());
this.UE.R(A._GetAutoObject(A.acj.Temperature).AlQ());this.Sp.Z(!A._GetAutoObject(
A.Device.Device).AmV);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Aoa();this.Ax3(
);this.Z9();this.Ax4();},H1:function(G){this.W2(this);},CD:function(G){var B;C.AB.
CD.call(this,G);A.zX([this,this.AKP],[B=A._GetAutoObject(A.Device.Device),B.AEW,
B.AI6],0);A.zX([this,this.AAW],[B=A._GetAutoObject(A.Device.Device),B.AE0,B.AI8]
,0);A.zX([this,this.AAW],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0N],0);A.
zX([this,this.A3M],[B=A._GetAutoObject(A.Device.Device),B.ArF,B.Att],0);A.zX([this
,this.A3F],[B=A._GetAutoObject(A.Device.Device),B.AET,B.AI3],0);A._GetAutoObject(
A.Device.Device).AhP();if(A._GetAutoObject(A.Device.Device).AmV)A._GetAutoObject(
A.Device.Device).Ae3(true);A._GetAutoObject(A.Device.Device).AxP();A.pe([this,this.
A3F],this);A.pe([this,this.AAW],this);A.pe([this,this.A3M],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).UA(false);A._GetAutoObject(A.Device.Device).Afb(false);A._GetAutoObject(A.Device.
Device).Ae3(false);A.z$([this,this.AKP],[B=A._GetAutoObject(A.Device.Device),B.AEW
,B.AI6],0);A.z$([this,this.AAW],[B=A._GetAutoObject(A.Device.Device),B.AE0,B.AI8
],0);A.z$([this,this.AAW],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0N],0);A.
z$([this,this.A3M],[B=A._GetAutoObject(A.Device.Device),B.ArF,B.Att],0);A.z$([this
,this.A3F],[B=A._GetAutoObject(A.Device.Device),B.AET,B.AI3],0);},AAW:function(G
){this.Am();},Aoa:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CK);this.C_.L(A.jb.Gk);this.JT.L(this.C_.AQ);this.
MO.L(this.C_.AQ);this.TemperatureUnit.L(this.C_.AQ);}break;default:{this.Background.
L(A.jb.CK);this.C_.L(A.jb.AV);this.JT.L(A.jb.Text);this.MO.L(this.JT.AQ);this.TemperatureUnit.
L(this.JT.AQ);this.HH.L(A.jb.Gk);}}},Ax3:function(){this.Ak4.As(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JT.R(A.aaR(A.acf.AD_));this.C_.Ax(A.aaL(A.ach.AvQ));this.C_.Cw(0);
this.N0.Cw(0);}break;case 1:{this.AVZ(A._GetAutoObject(A.Device.Device).Lz,false
);this.C_.Ax(A.aaL(A.ach.AvQ));this.N0.Cw(0);}break;case 2:{this.So.R(A._GetAutoObject(
A.Device.Converter).Ak3(A._GetAutoObject(A.Device.Device).AGt));this.AVZ(A._GetAutoObject(
A.Device.Device).Lz,false);this.C_.Ax(null);this.N0.Cw(1);this.AcI.Z(true);this.
P1.Z(true);this.So.Z(true);this.UE.Z(true);}break;case 3:{this.AU2();this.AVZ(A.
_GetAutoObject(A.Device.Device).Lz,true);this.AcI.Z(false);this.P1.Z(false);this.
So.Z(false);this.UE.Z(false);}break;case 4:{this.JT.R(A.aaR(A.acf.BkL));this.MO.
R(A.aaR(A.acu.Akl));this.C_.Ax(A.aaL(A.ach.AvS));this.C_.Cw(2);this.N0.Cw(0);}break;
default:A.ab5("%s%e",AId,A._GetAutoObject(A.Device.Device).MeasureState);}},Z9:function(
){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{if((A._GetAutoObject(
A.Device.Device).Lz<=3240)||(A._GetAutoObject(A.Device.Device).Lz>=5460))this.N.
C4(null);else this.N.C4(A.aaL(A.ach.AeD));this.N.Ct(null);}break;default:;}},AsN:
function(G){A._GetAutoObject(C.A7).FB();},W2:function(G){},A01:function(s){this.
W2(s);},AkY:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case
0:case 1:this.BBK(this);break;default:;}},A00:function(s){this.AkY(s);},AVZ:function(
AoT,BAv){if(BAv)this.Lw.L(A.jb.Bm);else this.Lw.L(A.jb.Gk);if(AoT<=3240){this.MO.
Z(false);this.TemperatureUnit.Z(false);this.Lw.Z(true);this.Lw.R(A.aaR(A.acu.AVI
));}else if(AoT>=5460){this.MO.Z(false);this.TemperatureUnit.Z(false);this.Lw.Z(
true);this.Lw.R(A.aaR(A.acu.Bqz));}else{this.MO.Z(true);this.TemperatureUnit.Z(true
);this.Lw.Z(false);this.MO.R(A._GetAutoObject(A.Device.Converter).Ak3(AoT));}},Ax4:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:
if((A._GetAutoObject(A.Device.Device).Lz<=3240)||(A._GetAutoObject(A.Device.Device
).Lz>=5460))this.JT.R(A.aaR(A.acf.AD_));else this.JT.R(A.aaR(A.acf.Bq9));break;default:;
}},Ax5:function(){},BqS:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.Z$.As(true);break;case 4:this.Z_.As(true);break;default:{this.Z$.As(
false);this.Z_.As(false);A._GetAutoObject(A.Device.Device).Afb(false);}}},AKP:function(
G){this.Am();this.Ax5();this.BqS();this.BqQ();},A3M:function(G){if(A._GetAutoObject(
A.Device.Device).AmW){this.Sp.L(A.jb.Ib);this.Sp.Cw(1);}else{this.Sp.L(A.jb.Bm);
this.Sp.Cw(0);}},BBK:function(G){if(!A._GetAutoObject(A.Device.Device).AmV)A._GetAutoObject(
A.Device.Device).Ae3(!A._GetAutoObject(A.Device.Device).AmW);},BqQ:function(){if(
A._GetAutoObject(A.Device.Device).AmV){this.Sp.Z(false);if(A._GetAutoObject(A.Device.
Device).MeasureState===1)A._GetAutoObject(A.Device.Device).Ae3(true);else A._GetAutoObject(
A.Device.Device).Ae3(false);}else if(A._GetAutoObject(A.Device.Device).MeasureState===
1)this.Sp.Z(true);else this.Sp.Z(false);},AKR:function(G){this.CD(this);},AU2:function(
){A.ab5("%s",BaW);},A3F:function(G){if(A._GetAutoObject(A.Device.Device).HH){this.
JT.H(Bsg);this.MO.H(Bsh);this.TemperatureUnit.H(Bsi);}else{this.JT.H(Bsj);this.MO.
H(Bsk);this.TemperatureUnit.H(Bsl);}},_Init:function(aArg){C.AB._Init.call(this,
aArg);A.acl.Gn._Init.call(this.Ak4={I:this},0);A.acg.Ap._Init.call(this.N0={I:this
},0);A.acg.Ap._Init.call(this.C_={I:this},0);A.acg.Ap._Init.call(this.AcI={I:this
},0);A.acg.Text._Init.call(this.JT={I:this},0);A.acg.Text._Init.call(this.TemperatureUnit={
I:this},0);A.acg.Text._Init.call(this.MO={I:this},0);A.acg.Text._Init.call(this.
P1={I:this},0);A.acg.Text._Init.call(this.So={I:this},0);A.acg.Text._Init.call(this.
UE={I:this},0);C.CG._Init.call(this.Lw={I:this},0);A.Device.TQ._Init.call(this.Jk={
I:this},0);A.Device.TQ._Init.call(this.Z$={I:this},0);A.Device.TQ._Init.call(this.
Z_={I:this},0);A.acg.Ap._Init.call(this.Sp={I:this},0);C.CG._Init.call(this.HH={
I:this},0);A.acl.TQ._Init.call(this.AjI={I:this},0);this.__proto__=C.Rg;var B;this.
N.Z(true);this.Ak4.Fq(1000);this.Ak4.B3=2;this.N0.H(Bsm);this.N0.L(A.jb.CU);this.
C_.H(Bsn);this.C_.L(A.jb.AV);this.C_.Cw(0);this.C_.Z(true);this.AcI.H(Bso);this.
AcI.L(A.jb.Text);this.AcI.Z(false);this.JT.KX(true);this.JT.R(A.aaR(A.acf.AD_));
this.JT.L(A.jb.Text);this.TemperatureUnit.A6(0x9);this.TemperatureUnit.L(A.jb.Text
);this.MO.A6(0x14);this.MO.R(A.aaR(A.acu.Akl));this.MO.L(A.jb.Text);this.P1.H(Bsp
);this.P1.R(A.aaR(A.acf.P1));this.P1.L(A.jb.Text);this.P1.Z(false);this.So.H(Bsq
);this.So.A6(0x14);this.So.R(Bsr);this.So.L(A.jb.Text);this.So.Z(false);this.UE.
H(Bss);this.UE.R(Bst);this.UE.L(A.jb.Text);this.UE.Z(false);this.Lw.H(Bsu);this.
Lw.R(A.aaR(A.acu.AVI));this.Lw.A6(0x12);this.Lw.L(A.jb.Gk);this.Jk.B3=false;this.
Jk.Cx=true;this.Jk.HQ(1);this.Jk.Fq(4000);this.Jk.Ux(0);this.Z$.B3=false;this.Z$.
Cx=true;this.Z$.HQ(2);this.Z$.Fq(400);this.Z$.Ux(200);this.Z_.B3=false;this.Z_.Cx=
true;this.Z_.HQ(3);this.Z_.Fq(500);this.Z_.Ux(250);this.Sp.H(Bsv);this.HH.H(Bsw);
this.HH.Z(A._GetAutoObject(A.Device.Device).HH);this.HH.R(A.aaR(A.acf.HH));this.
HH.A6(0x12);this.HH.L(A.jb.Gk);this.AjI.As(A._GetAutoObject(A.Device.Device).HH);
this.AjI.Fq(500);this.AjI.Ux(1000);this.J(this.N0,0);this.J(this.C_,0);this.J(this.
AcI,0);this.J(this.JT,0);this.J(this.TemperatureUnit,0);this.J(this.MO,0);this.J(
this.P1,0);this.J(this.So,0);this.J(this.UE,0);this.J(this.Lw,0);this.J(this.Sp,
0);this.J(this.HH,0);this.N.CF=[this,this.AsN];this.N.Ce=[this,this.A00];this.N.
Ca=[this,this.A01];this.N.C3(A.aaL(A.ach.AeC));this.Ak4.Q=[B=this.C_,B.ASR,B.Cw];
this.N0.Ax(A.aaL(A.ach.N0));this.C_.Ax(A.aaL(A.ach.AvQ));this.AcI.Ax(A.aaL(A.ach.
AQ9));this.JT.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MO.S(
A.aaL(A.fl.Aev));this.P1.S(A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.EK));this.UE.S(A.
aaL(A.fl.EK));this.Lw.S(A.aaL(A.fl.Aev));this.Lw.A0(A.aaL(A.fl.EK));this.Lw.Cr(A.
aaL(A.fl.Af));this.Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.AS8,B.A0T];this.Z$.
Q=[B=A._GetAutoObject(A.Device.Device),B.AE1,B.AI9];this.Z_.Q=[B=A._GetAutoObject(
A.Device.Device),B.AE1,B.AI9];this.Sp.Ax(A.aaL(A.ach.AqW));this.HH.S(A.aaL(A.fl.
EK));this.HH.A0(A.aaL(A.fl.Kt));this.HH.Cr(A.aaL(A.fl.HL));this.AjI.Q=[B=this.HH
,B.Fp,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ak4._Done(
);this.N0._Done();this.C_._Done();this.AcI._Done();this.JT._Done();this.TemperatureUnit.
_Done();this.MO._Done();this.P1._Done();this.So._Done();this.UE._Done();this.Lw.
_Done();this.Jk._Done();this.Z$._Done();this.Z_._Done();this.Sp._Done();this.HH.
_Done();this.AjI._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ak4._ReInit();this.N0._ReInit();this.C_._ReInit();this.AcI._ReInit(
);this.JT._ReInit();this.TemperatureUnit._ReInit();this.MO._ReInit();this.P1._ReInit(
);this.So._ReInit();this.UE._ReInit();this.Lw._ReInit();this.Jk._ReInit();this.Z$.
_ReInit();this.Z_._ReInit();this.Sp._ReInit();this.HH._ReInit();this.AjI._ReInit(
);this.JT.R(A.aaR(A.acf.AD_));this.MO.R(A.aaR(A.acu.Akl));this.P1.R(A.aaR(A.acf.
P1));this.Lw.R(A.aaR(A.acu.AVI));this.HH.R(A.aaR(A.acf.HH));this.JT.S(A.aaL(A.fl.
Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MO.S(A.aaL(A.fl.Aev));this.P1.S(
A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.EK));this.UE.S(A.aaL(A.fl.EK));this.Lw.S(A.
aaL(A.fl.Aev));this.Lw.A0(A.aaL(A.fl.EK));this.Lw.Cr(A.aaL(A.fl.Af));this.HH.S(A.
aaL(A.fl.EK));this.HH.A0(A.aaL(A.fl.Kt));this.HH.Cr(A.aaL(A.fl.HL));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ak4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
MO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Z$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjI)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::TemperatureScreen"};C.AVx={Z9:function(){C.Rg.Z9.call(this
);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:case 4:{this.N.Ct(
null);this.N.C4(A.aaL(A.ach.AvT));}break;default:;}},W2:function(G){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).Lz>3240)&&(A._GetAutoObject(A.Device.Device).Lz<5460)){A._GetAutoObject(A.Device.
Device).AhP();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:case 4:this.AKR(this);break;default:;}},Ax4:function(){C.Rg.Ax4.call(this);switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 3:this.JT.R(A.aaR(A.acf.BkM
));break;default:;}},Ax5:function(){C.Rg.Ax5.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 4:{A._GetAutoObject(A.Device.Device).WQ(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AU2:function(){this.C_.Ax(
A.aaL(A.ach.AvS));this.C_.Cw(0);this.N0.Cw(0);},_Init:function(aArg){C.Rg._Init.
call(this,aArg);this.__proto__=C.AVx;this.Dr(C.APj);},_className:"Application::TemperatureMeasurementScreen"
};C.APo={Df:null,IR:null,N2:null,AP:null,Ag_:null,A$:null,Dg:function(E){C.BR.Dg.
call(this,E);this.Df.L(E);this.IR.L(E);this.N2.L(E);this.Ag_.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.Ap.
_Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(this.N2={I:this},0);A.acg.C8.
_Init.call(this.AP={I:this},0);A.acg.Ap._Init.call(this.Ag_={I:this},0);A.acg.C8.
_Init.call(this.A$={I:this},0);this.__proto__=C.APo;this.Df.H(AyM);this.IR.H(Ayp
);this.N2.H(AHS);this.AP.DD(Ba0);this.AP.DN(Ba1);this.AP.L(A.jb.Bc);this.Ag_.H(Bsx
);this.Ag_.L(A.jb.CU);this.A$.DD(Bsy);this.A$.DN(Bsz);this.A$.L(A.jb.Bc);this.J(
this.Df,0);this.J(this.IR,0);this.J(this.N2,0);this.J(this.AP,0);this.J(this.Ag_
,0);this.J(this.A$,0);this.Df.Ax(A.aaL(A.ach.ADT));this.IR.Ax(A.aaL(A.ach.AeE));
this.N2.Ax(A.aaL(A.ach.AvL));this.Ag_.Ax(A.aaL(A.ach.AQy));},_Done:function(){this.
__proto__=C.BR;this.Df._Done();this.IR._Done();this.N2._Done();this.AP._Done();this.
Ag_._Done();this.A$._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Df._ReInit();this.IR._ReInit();this.N2._ReInit();this.AP._ReInit(
);this.Ag_._ReInit();this.A$._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(
this,D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.N2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilterCalfLosses"
};C.De={Es:null,DS:null,AGO:0,ANY:0,Init:function(aArg){A.zV([this,this.ALx],A._GetAutoObject(
A.Device.Device).An,0);A.pe([this,this.ALx],this);},ALx:function(G){var Ad=this.
AGO;if(Ad<0){this.DS.E7();this.DS.EC(this.ANY);return;}this.DS.EC(A._GetAutoObject(
A.Device.Device).An.Am0(Ad,14));this.DS.AFm(A._GetAutoObject(A.Device.Device).An.
Ja(Ad,13));this.DS.Ae4(A._GetAutoObject(A.Device.Device).An.H7(Ad,8));this.DS.Uy(
A._GetAutoObject(A.Device.Device).An.H7(Ad,11));this.DS.Ae8(A._GetAutoObject(A.Device.
Device).An.H7(Ad,12));this.DS.Ae_(A._GetAutoObject(A.Device.Device).An.CC(Ad,5));
},A_0:function(E){if(this.AGO===E)return;this.AGO=E;A.pe([this,this.ALx],this);}
,A_q:function(E){if(this.ANY===E)return;this.ANY=E;A.pe([this,this.ALx],this);},
A9B:function(){return this.AGO;},_Init:function(aArg){C.EB._Init.call(this,aArg);
C.CG._Init.call(this.Es={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=
C.De;this.Es.H(BsA);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11);this.Es.L(A.jb.Text
);this.DS.H(A0y);this.J(this.Es,0);this.J(this.DS,0);this.Es.S(A.aaL(A.fl.Af));this.
Es.A0(A.aaL(A.fl.Ak));this.Es.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.DS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.DS._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.Es.S(A.aaL(A.fl.Af));this.Es.A0(A.aaL(A.fl.Ak));this.Es.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Ku={AgR:null,Text:null,Afn:null,Dg:function(E
){C.BR.Dg.call(this,E);this.AgR.L(E);this.Text.L(E);this.Afn.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgR={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afn={I:this},0);this.__proto__=
C.Ku;this.AgR.H(BsB);this.AgR.L(A.jb.Text);this.Text.H(BsC);this.Text.As(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afn.H(BsD);this.Afn.L(A.jb.Text);this.
J(this.AgR,0);this.J(this.Text,0);this.J(this.Afn,0);this.AgR.Ax(A.aaL(A.ach.APq
));this.Text.S(A.aaL(A.fl.Kt));this.Text.A0(A.aaL(A.fl.HL));},_Done:function(){this.
__proto__=C.BR;this.AgR._Done();this.Text._Done();this.Afn._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.AgR._ReInit();this.Text.
_ReInit();this.Afn._ReInit();this.Text.S(A.aaL(A.fl.Kt));this.Text.A0(A.aaL(A.fl.
HL));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AgR)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afn
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.APh={
_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APh;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.APj={_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APj;this.J5(this.Afn,-2);this.
Afn.Ax(A.aaL(A.ach.Ag8));},_className:"Application::HeaderDeviceTemperature"};C.
Yw={Ai:function(Ae){C.AmT.Ai.call(this,Ae);this.T(A.aaR(A.acf.BqA)+A.aaR(A.acf.Colon
));},Ch:function(Ad){var B;if(!this.AX)return;this.AlI=0;this.AtT=0;this.XR=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B_();O++){this.AlI+=this.AX.CC(O,1);this.AtT+=
this.AX.CC(O,2);}if(this.AlI>0)this.XR=(this.AtT/this.AlI)*100;this.Am();}},_Init:
function(aArg){C.AmT._Init.call(this,aArg);this.__proto__=C.Yw;this.AP.Z(false);
this.A$.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.
HL));},_ReInit:function(){C.AmT._ReInit.call(this);this.V.S(A.aaL(A.fl.Kt));this.
V.A0(A.aaL(A.fl.HL));},_className:"Application::EvaluationLossesSumItem"};C.A61={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A61;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A62={K6:null,M3:null,AZ:0,Yp:function(){this.K6=null;this.M3=null;this.AZ=0;
},OA:function(A8){var Hj;Hj=A._NewObject(C.A61,0);Hj.A5=A8;if(!this.K6){this.K6=
Hj;this.M3=Hj;this.AZ=1;}else{this.M3.Ah=Hj;this.M3=Hj;this.AZ=this.AZ+1;}},Am2:
function(){var B;var RR=0;var Op=this.K6;while(!!Op){RR+=Op.A5;Op=Op.Ah;}return RR;
},AjP:function(){if(!this.AZ)return 0;return this.Am2()/this.AZ;},Aq4:function(){
var B;if(!this.AZ)return 0;var A1V=this.AjP();var Adh=0;var Op=this.K6;while(!!Op
){Adh+=Math.pow(Op.A5-A1V,2);Op=Op.Ah;}Adh/=this.AZ;Adh=Math.sqrt(Adh);return Adh;
},_Init:function(aArg){this.__proto__=C.A62;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.AgB={Background:null,V:null,KY:0,UC:5,Hn:false
,Ai:function(Ae){C.Hk.Ai.call(this,Ae);if(this.Hn)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CK);},T:function(E){C.Hk.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hn===E)return;this.Hn=E;this.Am();},Kz:function(E){if(this.UC===
E)return;this.UC=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hk._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.AgB;this.H(BD);this.Background.A1(
0x3F);this.Background.H(BD);this.V.A1(0x3F);this.V.H(AyJ);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KY=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.HL));this.V.Cr(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hk;this.Background._Done();this.V._Done();C.Hk._Done.call(this
);},_ReInit:function(){C.Hk._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.HL));this.V.Cr(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hk._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AOd={WK:function(G){this.Agz();this.I8(A.aaR(
A.acf.AVH),[this,this.AT6],5);this.I8(A.aaR(A.acf.AVF),[this,this.AT5],7);this.I8(
A.aaR(A.acf.Calving),[this,this.Bmw],11);this.I8(A.aaR(A.acf.An5),[this,this.Aw2
],2);this.I8(A.aaR(A.acf.AdW),[this,this.AFa],1);this.I8(A.aaR(A.acf.AuL),[this,
this.AE6],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Anl
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DF:function(G){}
,AbA:function(){return C.ANl;},AbB:function(){return C.APN;},Ra:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADe());},HS:function(G){
var F;C.GJ.HS.call(this,G);if(this.Aki()===false){this.N.Ct(A._GetAutoObject(A.Device.
Converter).Ajs((F=this.Fm,F[1].call(F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(
A.jV);}this.N.OW(false);this.N.OX(false);},Agl:function(){A._GetAutoObject(C.A7).
Cb(62);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOd;var
B;this.Dr(C.APk);this.Dl(A.aaR(A.acf.ASp));this.AwX([B=A._GetAutoObject(A.Device.
Device),B.A85,B.BbH]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.ASp));},_className:"Application::DryCowListScreen"};C.AOc={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AOc;this.Li.As(false);this.Li.
Aj(false);this.Li.Z(false);this.Jw.As(false);this.Jw.Aj(false);this.Jw.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APk={DX:function(G){C.Kv.DX.
call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad1(9));},_Init:function(
aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APk;},_className:"Application::HeaderDryCowListFilter"
};C.Aby={Filter:null,L4:null,AHg:A.jV,Er:0,AGn:1,Operator:1,Bl:function(aSize){C.
Act.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(
Ae){C.Act.Ai.call(this,Ae);this.L4.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Mj],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Mj],E,0);A.pe([this,this.Mj],this);},Mj:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.TA((F=this.Filter,F[1].call(
F[0])).DM(this.Er,this.Operator));else this.TA(null);},Nq:function(E){if(this.Er===
E)return;this.Er=E;A.pe([this,this.Mj],this);},TA:function(AI){if(!!AI){var A2x;
if(this.AGn!==1)A2x=this.AGn;else A2x=AI.Operator;this.T((this.AHg+CR)+A._GetAutoObject(
A.Device.Converter).A6X(A2x));this.ZF(false);}else{this.T(this.AHg);this.ZF(true
);}},OV:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Mj],this);},AF_:function(E){if(this.AHg===E)return;this.AHg=E;A.pe([this,this.Mj
],this);},A_O:function(E){if(this.AGn===E)return;this.AGn=E;A.pe([this,this.Mj],
this);},_Init:function(aArg){C.Act._Init.call(this,aArg);C.L4._Init.call(this.L4={
I:this},0);this.__proto__=C.Aby;this.H(Ate);this.AW.H(BsE);this.L4.H(A0z);this.J5(
this.V,-1);this.J(this.L4,0);},_Done:function(){this.__proto__=C.Act;this.L4._Done(
);C.Act._Done.call(this);},_ReInit:function(){C.Act._ReInit.call(this);this.L4._ReInit(
);},_Mark:function(D){var B;C.Act._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.L4)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjK={L4:null,Ai:function(Ae){C.QH.
Ai.call(this,Ae);this.L4.L(this.V.AQ);},TA:function(AI){if(!!AI){this.H$.Cw(1);this.
ZF(true);this.L4.A_E(false);}else{this.H$.Cw(0);this.ZF(false);this.L4.A_E(true);
}},_Init:function(aArg){C.QH._Init.call(this,aArg);C.L4._Init.call(this.L4={I:this
},0);this.__proto__=C.AjK;this.Jh=20;this.L4.H(A0z);this.J(this.L4,0);},_Done:function(
){this.__proto__=C.QH;this.L4._Done();C.QH._Done.call(this);},_ReInit:function(){
C.QH._ReInit.call(this);this.L4._ReInit();},_Mark:function(D){var B;C.QH._Mark.call(
this,D);if((B=this.L4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.ACg={Q:null,CQ:function(){this.T(A._GetAutoObject(A.Device.Helper).Am1(this.
TableId,this.Er));},TA:function(AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H$.Cw(1);else this.H$.Cw(0);},Hh:function(G){A.pe([this,this.Mj],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hh],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.Hh],E,0);if(!!E)A.pe([this,this.Hh],this);},_Init:
function(aArg){C.QH._Init.call(this,aArg);this.__proto__=C.ACg;},_ReInit:function(
){C.QH._ReInit.call(this);this.CQ();},_Mark:function(D){var B;C.QH._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APN={Y0:null,Jd:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Y0={I:this},0);A.acg.Text._Init.call(this.Jd={I:this},0);this.__proto__=
C.APN;this.A_q(1);this.Y0.H(BsF);this.Y0.KX(true);this.Y0.R(A.aaR(A.acf.AEn));this.
Y0.L(A.jb.Text);this.Jd.H(Tg);this.Jd.R(((A.aaR(A.acf.RU)+Ba2)+A.aaR(A.acf.BaI))+
Pd);this.Jd.L(A.jb.Text);this.J(this.Y0,0);this.J(this.Jd,0);this.Y0.S(A.aaL(A.fl.
Ak));this.Jd.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.Y0._Done(
);this.Jd._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.call(this
);this.Y0._ReInit();this.Jd._ReInit();this.Y0.R(A.aaR(A.acf.AEn));this.Jd.R(((A.
aaR(A.acf.RU)+Ba2)+A.aaR(A.acf.BaI))+Pd);this.Y0.S(A.aaL(A.fl.Ak));this.Jd.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Y0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANl={Mr:null,KV:null,AdV:null,AP:null,A$:null
,Xx:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mr.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KV.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KV.M[2]-1,0,this.
KV.M[2]+1,aSize[1]]);this.AdV.H([this.KV.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KV.L(this.V.AQ);this.AdV.L(this.V.AQ);if(!!this.Xx&&(
this.Xx!==5)){this.Mr.L(A._GetAutoObject(A.acj.Assessment).Qu(this.Xx));this.V.L(
A._GetAutoObject(A.acj.Assessment).XG(this.Xx));}else this.Mr.L(this.Background.
AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Mn=this.AX.
CC(Ad,1);var A26=this.AX.CC(Ad,29);var Ph=this.AX.Hw(Ad,4);var LW=this.AX.Ja(Ad,
13);var AlL=this.AX.Ja(Ad,17);var AlU=this.AX.H7(Ad,11);this.Xx=A._GetAutoObject(
A.Device.Helper).AMw(LW,AlU,AlL);this.T(Mn.toFixed());this.KV.R(A26.toFixed());this.
AdV.R(A._GetAutoObject(A.acj.KR).ADa(Ph,A._GetAutoObject(A.Device.Helper).Dv(),BsG
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Mr={I:this},0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(
this.AdV={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.ANl;this.Mr.H(Atk);this.AP.L(A.jb.Bc);this.
A$.L(A.jb.Bc);this.J(this.Mr,-1);this.J(this.KV,0);this.J(this.AdV,0);this.J(this.
AP,0);this.J(this.A$,0);this.KV.S(A.aaL(A.fl.Af));this.AdV.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mr._Done();this.KV._Done(
);this.AdV._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mr._ReInit();this.KV._ReInit();this.AdV.
_ReInit();this.AP._ReInit();this.A$._ReInit();this.KV.S(A.aaL(A.fl.Af));this.AdV.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.R2={AJ3:0,Bem:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);if(this.Bem){this.
T(A.aaR(A.acf.AOa));this.KB(A.jV);}else{this.T(A.aaR(A.acf.Bks));if(this.AJ3>0)this.
KB(this.AJ3.toFixed());else this.KB(Xo);}},Ch:function(G){C.FA.Ch.call(this,G);this.
Bem=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlG=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlG>0)this.AJ3=A._GetAutoObject(A.Device.Helper).
Mf(AlG,A._GetAutoObject(A.Device.Helper).Dv());else this.AJ3=0;this.Am();},_Init:
function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.R2;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMB={ALH:A.jV,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.RU));
this.KB(this.ALH);},Ch:function(G){C.FA.Ch.call(this,G);var Ph=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALH=A._GetAutoObject(A.acj.KR).ADa(Ph,A._GetAutoObject(
A.Device.Helper).Dv(),((((BsH+A.aaR(A.acf.BhD))+BsI)+A.aaR(A.acf.BhC))+BsJ)+A.aaR(
A.acf.AL$));this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=
C.AMB;this.ALH=A.aaR(A.acf.Unknown);},_ReInit:function(){C.FA._ReInit.call(this);
this.ALH=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AN7={Ul:null,Wx:null,WA:null,WC:null,SF:null,Init:function(aArg){this.Bb(this.
Ul);A.pe([this,this.MS],this);},Adx:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Np._Init.call(this.Ul={
I:this},0);C.Np._Init.call(this.Wx={I:this},0);C.Np._Init.call(this.WA={I:this},
0);C.Ab0._Init.call(this.WC={I:this},0);C.Ui._Init.call(this.SF={I:this},0);this.
__proto__=C.AN7;var B;this.Dr(C.APh);this.Ul.H(I1);this.Ul.Aj(true);this.Ul.T(A.
aaR(A.acf.ACM));this.Ul.Bi(false);this.Ul.Ns(83);this.Wx.H(Qf);this.Wx.Aj(true);
this.Wx.T(A.aaR(A.acf.Info));this.Wx.Bi(true);this.Wx.Ns(82);this.WA.H(Aan);this.
WA.Aj(true);this.WA.T(A.aaR(A.acf.AGR));this.WA.Bi(false);this.WA.Ns(64);this.WC.
H(Alj);this.WC.Aj(true);this.WC.T(A.aaR(A.acf.TempMeasurement));this.WC.Bi(true);
this.WC.Ns(60);this.SF.H(Aos);this.SF.Aj(true);this.SF.T(A.aaR(A.acf.AC7));this.
SF.Bi(false);this.J(this.Ul,-1);this.J(this.Wx,-1);this.J(this.WA,-1);this.J(this.
WC,-1);this.J(this.SF,-1);this.N.Ce=[this,this.Adx];this.N.Ct(A.aaL(A.ach.ADY));
this.Ul.AR=[B=this.Ul,B.Nv];this.Wx.AR=[B=this.Wx,B.Nv];this.WA.AR=[B=this.WA,B.
Nv];this.WC.AR=[B=this.WC,B.Nv];this.SF.AR=null;this.SF.Ab7([B=this.SF,B.Alo]);this.
SF.Gt([this,this.D_,this.GT]);this.SF.ATj([B=A._GetAutoObject(A.Device.Device),B.
ArF,B.Att]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ul._Done(
);this.Wx._Done();this.WA._Done();this.WC._Done();this.SF._Done();C.Ej._Done.call(
this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Ul._ReInit();this.Wx._ReInit(
);this.WA._ReInit();this.WC._ReInit();this.SF._ReInit();this.Ul.T(A.aaR(A.acf.ACM
));this.Wx.T(A.aaR(A.acf.Info));this.WA.T(A.aaR(A.acf.AGR));this.WC.T(A.aaR(A.acf.
TempMeasurement));this.SF.T(A.aaR(A.acf.AC7));},_Mark:function(D){var B;C.Ej._Mark.
call(this,D);if((B=this.Ul)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WC
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceMainScreen"};C.AN8={Uj:null,AbY:null,Wy:null,Init:function(aArg
){this.Bb(this.Uj);},BzK:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).UpdateFirmware(
);},Bk7:function(G){if(A._GetAutoObject(A.Device.Device).Abc<=20)A._GetAutoObject(
A.Device.Device).AY(76,true,BsK,0,null);else A._GetAutoObject(A.Device.Device).AY(
39,true,A.jV,0,[this,this.BzK]);},_Init:function(aArg){C.Ej._Init.call(this,aArg
);C.Np._Init.call(this.Uj={I:this},0);C.Co._Init.call(this.AbY={I:this},0);C.Ab0.
_Init.call(this.Wy={I:this},0);this.__proto__=C.AN8;var B;this.Dr(C.APi);this.Uj.
H(I1);this.Uj.Aj(true);this.Uj.T(A.aaR(A.acf.A57));this.Uj.Bi(false);this.Uj.Ns(
65);this.AbY.H(Qf);this.AbY.Aj(true);this.AbY.T(A.aaR(A.acf.A6Z));this.AbY.Bi(true
);this.Wy.H(Aan);this.Wy.Aj(true);this.Wy.T(A.aaR(A.acf.RangeTest));this.Wy.Bi(false
);this.Wy.Ns(15);this.J(this.Uj,-1);this.J(this.AbY,-1);this.J(this.Wy,-1);this.
Uj.AR=[B=this.Uj,B.Nv];this.AbY.AR=[this,this.Bk7];this.Wy.AR=[B=this.Wy,B.Nv];this.
Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Uj._Done();this.AbY._Done(
);this.Wy._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.Uj._ReInit();this.AbY._ReInit();this.Wy._ReInit();this.Uj.T(A.aaR(A.acf.A57
));this.AbY.T(A.aaR(A.acf.A6Z));this.Wy.T(A.aaR(A.acf.RangeTest));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Uj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceServiceScreen"};C.APi={_Init:function(aArg){
C.Ku._Init.call(this,aArg);this.__proto__=C.APi;this.Text.R(A.aaR(A.acf.AGR));},
_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.AGR));},_className:
"Application::HeaderDeviceServiceMenu"};C.Np={Ni:null,Ai:function(Ae){C.Ab0.Ai.call(
this,Ae);this.Ni.L(this.V.AQ);},_Init:function(aArg){C.Ab0._Init.call(this,aArg);
A.acg.Ap._Init.call(this.Ni={I:this},0);this.__proto__=C.Np;this.Ni.A1(0x38);this.
Ni.H(BsL);this.J(this.Ni,0);this.V.Cr(A.aaL(A.fl.Bh));this.Ni.Ax(A.aaL(A.ach.Aju
));},_Done:function(){this.__proto__=C.Ab0;this.Ni._Done();C.Ab0._Done.call(this
);},_ReInit:function(){C.Ab0._ReInit.call(this);this.Ni._ReInit();this.V.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Ab0._Mark.call(this,D);if((B=this.Ni)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"};C.AN3={Ahe:
null,Ahk:null,Ahm:null,Ahi:null,Aj_:null,Ahh:null,Ahg:null,Ahf:null,Aj8:null,Ahd:
null,Aj9:null,Ahl:null,Aj$:null,Ahj:null,Aka:null,Init:function(aArg){this.Bb(this.
Ahe);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.PV._Init.call(this.Ahe={
I:this},0);C.PV._Init.call(this.Ahk={I:this},0);C.PV._Init.call(this.Ahm={I:this
},0);C.PV._Init.call(this.Ahi={I:this},0);C.PV._Init.call(this.Aj_={I:this},0);C.
PV._Init.call(this.Ahh={I:this},0);C.PV._Init.call(this.Ahg={I:this},0);C.PV._Init.
call(this.Ahf={I:this},0);C.PV._Init.call(this.Aj8={I:this},0);C.PV._Init.call(this.
Ahd={I:this},0);C.PV._Init.call(this.Aj9={I:this},0);C.PV._Init.call(this.Ahl={I:
this},0);C.PV._Init.call(this.Aj$={I:this},0);C.PV._Init.call(this.Ahj={I:this},
0);C.PV._Init.call(this.Aka={I:this},0);this.__proto__=C.AN3;this.Dr(C.APd);this.
Ahe.H(Atp);this.Ahe.Aj(true);this.Ahe.SN(1);this.Ahk.H(A0w);this.Ahk.Aj(true);this.
Ahk.Bi(true);this.Ahk.SN(2);this.Ahm.H(Atm);this.Ahm.Aj(true);this.Ahm.Bi(false);
this.Ahm.SN(3);this.Ahi.H(Atn);this.Ahi.Aj(true);this.Ahi.Bi(true);this.Ahi.SN(4
);this.Aj_.H(AyA);this.Aj_.Aj(true);this.Aj_.SN(5);this.Ahh.H(BsM);this.Ahh.Aj(true
);this.Ahh.Bi(true);this.Ahh.SN(6);this.Ahg.H(Ato);this.Ahg.Aj(true);this.Ahg.Bi(
false);this.Ahg.SN(7);this.Ahf.H(AyL);this.Ahf.Aj(true);this.Ahf.Bi(true);this.Ahf.
SN(8);this.Aj8.H(A0x);this.Aj8.Aj(true);this.Aj8.SN(9);this.Ahd.H(AoA);this.Ahd.
Aj(true);this.Ahd.Bi(true);this.Ahd.SN(10);this.Aj9.H(BsN);this.Aj9.Aj(true);this.
Aj9.SN(11);this.Ahl.H(BsO);this.Ahl.Aj(true);this.Ahl.Bi(true);this.Ahl.SN(12);this.
Aj$.H(BsP);this.Aj$.Aj(true);this.Aj$.SN(13);this.Ahj.H(BsQ);this.Ahj.Aj(true);this.
Ahj.Bi(true);this.Ahj.SN(14);this.Aka.H(BsR);this.Aka.Aj(true);this.Aka.SN(15);this.
J(this.Ahe,-1);this.J(this.Ahk,-1);this.J(this.Ahm,-1);this.J(this.Ahi,-1);this.
J(this.Aj_,-1);this.J(this.Ahh,-1);this.J(this.Ahg,-1);this.J(this.Ahf,-1);this.
J(this.Aj8,-1);this.J(this.Ahd,-1);this.J(this.Aj9,-1);this.J(this.Ahl,-1);this.
J(this.Aj$,-1);this.J(this.Ahj,-1);this.J(this.Aka,-1);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.Ahe._Done();this.Ahk._Done();this.Ahm._Done();this.Ahi.
_Done();this.Aj_._Done();this.Ahh._Done();this.Ahg._Done();this.Ahf._Done();this.
Aj8._Done();this.Ahd._Done();this.Aj9._Done();this.Ahl._Done();this.Aj$._Done();
this.Ahj._Done();this.Aka._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej.
_ReInit.call(this);this.Ahe._ReInit();this.Ahk._ReInit();this.Ahm._ReInit();this.
Ahi._ReInit();this.Aj_._ReInit();this.Ahh._ReInit();this.Ahg._ReInit();this.Ahf.
_ReInit();this.Aj8._ReInit();this.Ahd._ReInit();this.Aj9._ReInit();this.Ahl._ReInit(
);this.Aj$._ReInit();this.Ahj._ReInit();this.Aka._ReInit();},_Mark:function(D){var
B;C.Ej._Mark.call(this,D);if((B=this.Ahe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ahk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahm)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ahi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahg)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ahf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahj)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aka)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.APd={_Init:function(aArg){C.Ku._Init.call(this
,aArg);this.__proto__=C.APd;this.Text.R(A.aaR(A.acf.A6w));},_ReInit:function(){C.
Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.A6w));},_className:"Application::HeaderDeviceCheck"
};C.PV={DeviceComponentToString:null,Kp:null,Au9:0,BcX:false,CQ:function(){this.
V.R(this.DeviceComponentToString.BT(this.Au9));},Bl:function(aSize){var B;C.Co.Bl.
call(this,aSize);this.Kp.H(A.abM(this.Kp.M,aSize[0]-((B=this.Kp.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kp.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kp.
AFe(this.V.AQ);if(this.BcX)this.Kp.AwP(A.jb.E1);else this.Kp.AwP(A.jb.Gk);},SN:function(
E){if(this.Au9===E)return;this.Au9=E;this.T(this.DeviceComponentToString.BT(E));
this.DX(this);},DX:function(G){this.BcX=A._GetAutoObject(A.Device.Device).AJU(this.
Au9);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kp._Init.call(this.Kp={I:this
},0);this.__proto__=C.PV;this.V.H(BsS);this.V.A6(0x11);this.Kp.H(BsT);this.J(this.
Kp,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kp._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kp._ReInit();this.CQ();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sn={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAV],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALC(this);this.DK(this);},CD:function(G
){A.pe([this,this.MS],this);},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[
3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},AAV:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).A7b();A._GetAutoObject(A.Device.Device
).An.Bk(Bf);A.pe([this,this.MS],this);},Ew:function(G){A._GetAutoObject(C.A7).FB(
);},A36:function(G){A._GetAutoObject(C.A7).Cb(84);},DK:function(G){this.N.C3(A.aaL(
A.ach.E2));this.N.CF=[this,this.Ew];this.N.Ct(A.aaL(A.ach.ADX));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Arn(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Ce=null;this.N.IS.CZ(100);}else{this.N.Ce=[this
,this.AAV];this.N.IS.CZ(255);}this.N.C4(A.aaL(A.ach.AeE));this.N.Ca=[this,this.A36
];},MS:function(s){this.DK(s);},ALC:function(G){A.ab5("%s",BsU);},BHd:function(s
){this.ALC(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sn;this.N.As(false);this.N.Z(true);this.Dr(C.
AbC);this.Ay.H(Ix);this.DY.A1(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CK);this.Y.H(L9
);this.Y.JZ(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.Em=[this
,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOr={Yn:null,Ym:null,X$:null
,TR:null,DK:function(G){C.Sn.DK.call(this,G);if(this.AV===this.TR){this.N.Ct(null
);this.N.Ce=null;this.N.C4(null);this.N.Ca=null;}},ALC:function(G){if(this.AV===
this.TR)this.Dr(C.APo);else this.Dr(C.AbC);},Bz3:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQs);case 1:return A.
aaL(A.ach.AQt);default:A.ab5("%s%s",BsV,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},Bz4:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQu);case 1:return A.aaL(A.ach.AQv);default:
A.ab5("%s%s",AIV,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Il:function(G){var Cy=(C.Fn.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Yn)A._GetAutoObject(C.A7).Cb(66);else if(Cy===this.Ym)A._GetAutoObject(C.A7).Cb(
56);else if(Cy===this.X$)A._GetAutoObject(C.A7).Cb(58);else if(Cy===this.TR)A._GetAutoObject(
C.A7).Cb(59);},_Init:function(aArg){C.Sn._Init.call(this,aArg);C.Fn._Init.call(this.
Yn={I:this},0);C.Fn._Init.call(this.Ym={I:this},0);C.Fn._Init.call(this.X$={I:this
},0);C.Fn._Init.call(this.TR={I:this},0);this.__proto__=C.AOr;this.Yn.H(Qd);this.
Yn.Aj(true);this.Yn.T(A.aaR(A.acf.Afy));this.Ym.H(J9);this.Ym.Aj(true);this.Ym.T(
A.aaR(A.acf.Temperature));this.X$.H(BsW);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.
Rating));this.TR.H(BsX);this.TR.Aj(true);this.TR.T(A.aaR(A.acf.A8h));this.J(this.
Yn,0);this.J(this.Ym,0);this.J(this.X$,0);this.J(this.TR,0);this.Yn.AR=[this,this.
Il];this.Yn.DC(this.Bz4());this.Ym.AR=[this,this.Il];this.Ym.DC(this.Bz3());this.
X$.AR=[this,this.Il];this.X$.DC(A.aaL(A.ach.AQq));this.TR.AR=[this,this.Il];this.
TR.DC(A.aaL(A.ach.AQr));},_Done:function(){this.__proto__=C.Sn;this.Yn._Done();this.
Ym._Done();this.X$._Done();this.TR._Done();C.Sn._Done.call(this);},_ReInit:function(
){C.Sn._ReInit.call(this);this.Yn._ReInit();this.Ym._ReInit();this.X$._ReInit();
this.TR._ReInit();this.Yn.T(A.aaR(A.acf.Afy));this.Ym.T(A.aaR(A.acf.Temperature)
);this.X$.T(A.aaR(A.acf.Rating));this.TR.T(A.aaR(A.acf.A8h));},_Mark:function(D){
var B;C.Sn._Mark.call(this,D);if((B=this.Yn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ym)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOs={VU:null,Yb:null,Yo:null,ALC:function(G){this.Dr(C.AvE);},Bz7:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARe
);case 1:return A.aaL(A.ach.ARf);default:A.ab5("%s%s",AIV,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Il:function(G){var Cy=(C.Fn.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VU)A._GetAutoObject(C.A7).Cb(68);else if(Cy===
this.Yo)A._GetAutoObject(C.A7).Cb(57);else if(Cy===this.Yb)A._GetAutoObject(C.A7
).Cb(67);},Bz6:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AQd);case 1:return A.aaL(A.ach.AQe);default:A.ab5("%s%s",AIV
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},Bz8:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARg
);case 1:return A.aaL(A.ach.ARh);default:A.ab5("%s%s",AIV,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sn._Init.call(
this,aArg);C.Fn._Init.call(this.VU={I:this},0);C.Fn._Init.call(this.Yb={I:this},
0);C.Fn._Init.call(this.Yo={I:this},0);this.__proto__=C.AOs;this.VU.H(Qd);this.VU.
Aj(true);this.VU.T(A.aaR(A.acf.BaA));this.Yb.H(A0A);this.Yb.Aj(true);this.Yb.T(A.
aaR(A.acf.A5X));this.Yo.H(Oh);this.Yo.Aj(true);this.Yo.T(A.aaR(A.acf.BaD));this.
J(this.VU,0);this.J(this.Yb,0);this.J(this.Yo,0);this.VU.AR=[this,this.Il];this.
VU.DC(this.Bz7());this.VU.Ab$(A.aaL(A.ach.N1));this.Yb.AR=[this,this.Il];this.Yb.
DC(this.Bz6());this.Yo.AR=[this,this.Il];this.Yo.DC(this.Bz8());},_Done:function(
){this.__proto__=C.Sn;this.VU._Done();this.Yb._Done();this.Yo._Done();C.Sn._Done.
call(this);},_ReInit:function(){C.Sn._ReInit.call(this);this.VU._ReInit();this.Yb.
_ReInit();this.Yo._ReInit();this.VU.T(A.aaR(A.acf.BaA));this.Yb.T(A.aaR(A.acf.A5X
));this.Yo.T(A.aaR(A.acf.BaD));},_Mark:function(D){var B;C.Sn._Mark.call(this,D);
if((B=this.VU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOv={Bep:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZY(0));},_Init:function(aArg){C.AqT._Init.call(this,aArg);this.
__proto__=C.AOv;this.Ae$(A.aaR(A.acf.A8C));},_ReInit:function(){C.AqT._ReInit.call(
this);this.Ae$(A.aaR(A.acf.A8C));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOo={Ail:null,AbF:null,UU:null,Aa8:null,Ps:null,Ajq:null,AgD:null,Ajr:null,AgE:
null,Ay:null,AaZ:null,Ade:0,ApA:0,DF:function(G){switch(this.Cq.CP){case 4:{if(this.
I$.Fp())return;var QD=this.Y.Br[1]+80;this.Y.Gc([this.Y.Br[0],QD]);this.Y.VG(null
,null);}break;case 5:{if(this.I$.Fp())return;var QD=this.Y.Br[1]-80;this.Y.Gc([this.
Y.Br[0],QD]);this.Y.VG(null,null);}break;default:C.FC.DF.call(this,G);}},Ap$:function(
L_,AcZ){if(!L_)return;var Fx=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(
A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,AcZ,true);Fx.CX(HZ);var Ac$=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ac$.Initialize(8,2,0,true);Fx.CX(Ac$
);L_.Bk(Fx);},Aiz:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aro()){this.
Ail.OA(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azx=this.Bz1(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaZ.Set(Azx,this.AaZ.Get(Azx)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Ade++;this.ApA=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FC.Aiz.call(
this,G);},Aaz:function(G){if(this.Ade>1)A._GetAutoObject(A.Device.Device).AY(56,
true,this.Ade.toFixed(),0,null);if(this.Ade===1)A._GetAutoObject(A.Device.Device
).AY(53,true,this.ApA.toFixed(),0,null);if(this.Ail.AZ>0)this.UU.T(((((((A._GetAutoObject(
A.Device.Converter).Ax$(this.Ail.AjP()|0,1)+AyT)+A._GetAutoObject(A.Device.Converter
).Ax$(this.Ail.Aq4()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af7())+AyU)+this.Ail.AZ.
toFixed())+Pd);else this.UU.T(A.aaR(A.acf.Unknown));var RR=this.AaZ.Am2();var O;
for(O=0;O<this.AaZ.MM;O++){var Bd=this.BAk(O);if(!!Bd){var CB=this.AaZ.Get(O);Bd.
BmH(CB);if(!RR)Bd.A_U(0);else Bd.A_U(Math.round((CB*100)/RR)|0);Bd.Bon(this.BAj(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adj=false;if(this.Ail.AZ>0)
Adj=true;this.I$.Z(!Adj);C.FC.Aaz.call(this,G);},Adq:function(G){this.Ail.Yp();this.
AaZ.E7();this.Ade=0;this.ApA=0;C.FC.Adq.call(this,G);},BAk:function(aIndex){var Bd=
null;switch(aIndex){case 0:Bd=this.Ps;break;case 1:Bd=this.Ajq;break;case 2:Bd=this.
AgD;break;case 3:Bd=this.Ajr;break;case 4:Bd=this.AgE;break;default:throw new Error(
AyV+aIndex.toFixed());}return Bd;},BAj:function(aIndex,AoO){var B;var TB=A.jV;switch(
AoO){case 0:{switch(aIndex){case 0:TB=BsY;break;case 1:TB=BsZ;break;case 2:TB=Bs0;
break;case 3:TB=Bs1;break;case 4:TB=Bs2;break;default:throw new Error(AyV+aIndex.
toFixed());}TB=TB+(CR+A.aaR(A.acf.AAn));}break;case 1:{switch(aIndex){case 0:TB=
Bs3;break;case 1:TB=Bs4;break;case 2:TB=Bs5;break;case 3:TB=Bs6;break;case 4:TB=
Bs7;break;default:throw new Error(AyV+aIndex.toFixed());}TB=TB+(CR+A.aaR(A.acf.A7Z
));}break;default:A.ab5("%s%e",Ba3,AoO);}return TB;},Bz2:function(AJe,AoO){var Ada=
0;switch(AoO){case 0:switch(AJe){case 0:Ada=35000;break;case 1:Ada=40000;break;case
2:Ada=45000;break;case 3:Ada=50000;break;case 4:Ada=2147483647;break;default:throw new
Error(AyV+AJe.toFixed());}break;case 1:switch(AJe){case 0:Ada=36287;break;case 1:
Ada=40823;break;case 2:Ada=45359;break;case 3:Ada=49895;break;case 4:Ada=2147483647;
break;default:throw new Error(AyV+AJe.toFixed());}break;default:A.ab5("%s%e",Ba3
,AoO);}return Ada;},Bz1:function(A8,AoO){var Azx=0;var O;for(O=0;O<this.AaZ.MM;O++
)if(A8<this.Bz2(O,AoO)){Azx=O;break;}return Azx;},Fj:function(G){var B;this.Ay.MG((
B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[
1]);},_Init:function(aArg){C.FC._Init.call(this,aArg);C.AgB._Init.call(this.AbF={
I:this},0);C.IK._Init.call(this.UU={I:this},0);C.Aa8._Init.call(this.Aa8={I:this
},0);C.Ps._Init.call(this.Ps={I:this},0);C.Ps._Init.call(this.Ajq={I:this},0);C.
Ps._Init.call(this.AgD={I:this},0);C.Ps._Init.call(this.Ajr={I:this},0);C.Ps._Init.
call(this.AgE={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaZ={I:this},0);this.__proto__=C.AOo;this.Dr(C.AvE);this.Akz(A.aaR(
A.acf.A6O));this.Ae$(A.aaR(A.acf.A8v));this.AbF.H(Atp);this.AbF.Aj(true);this.AbF.
T(A.aaR(A.acf.A5M));this.AbF.Bi(false);this.AbF.Kz(5);this.UU.H(A0w);this.UU.Aj(
true);this.UU.T(A.jV);this.UU.Bi(true);this.UU.Kz(5);this.Aa8.H(Atm);this.Aa8.Aj(
true);this.Ps.H(Atn);this.Ps.Aj(true);this.Ps.Bi(true);this.Ajq.H(Ato);this.Ajq.
Aj(true);this.AgD.H(AyL);this.AgD.Aj(true);this.AgD.Bi(true);this.Ajr.H(A0x);this.
Ajr.Aj(true);this.AgE.H(AoA);this.AgE.Aj(true);this.AgE.Bi(true);this.Ay.H(Ix);this.
AaZ.ZG(5);this.J(this.AbF,-1);this.J(this.UU,-1);this.J(this.Aa8,-1);this.J(this.
Ps,-1);this.J(this.Ajq,-1);this.J(this.AgD,-1);this.J(this.Ajr,-1);this.J(this.AgE
,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fj];this.Ail=A._NewObject(C.AvX,0);
this.UU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FC;this.AbF._Done(
);this.UU._Done();this.Aa8._Done();this.Ps._Done();this.Ajq._Done();this.AgD._Done(
);this.Ajr._Done();this.AgE._Done();this.Ay._Done();this.AaZ._Done();C.FC._Done.
call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.AbF._ReInit();this.
UU._ReInit();this.Aa8._ReInit();this.Ps._ReInit();this.Ajq._ReInit();this.AgD._ReInit(
);this.Ajr._ReInit();this.AgE._ReInit();this.Ay._ReInit();this.AaZ._ReInit();this.
Akz(A.aaR(A.acf.A6O));this.Ae$(A.aaR(A.acf.A8v));this.AbF.T(A.aaR(A.acf.A5M));this.
UU.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.
Ail)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AgD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.Aa8={Ie:null,Gv:null
,Bl:function(aSize){C.IK.Bl.call(this,aSize);this.Ie.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gv.H([this.Ie.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IK.Ai.call(this,Ae);this.Ie.L(this.V.AQ);this.Gv.L(this.V.AQ);},_Init:
function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.Ie={I:this}
,0);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.Aa8;this.T(A.aaR(
A.acf.AHt));this.Ie.H(Bs8);this.Ie.KX(true);this.Ie.R(A.aaR(A.acf.AqG));this.Ie.
L(A.jb.Text);this.Gv.H(Ba4);this.Gv.R(AfJ);this.Gv.L(A.jb.Text);this.J(this.Ie,0
);this.J(this.Gv,0);this.V.S(A.aaL(A.fl.HL));this.Ie.S(A.aaL(A.fl.HL));this.Gv.S(
A.aaL(A.fl.Kt));},_Done:function(){this.__proto__=C.IK;this.Ie._Done();this.Gv._Done(
);C.IK._Done.call(this);},_ReInit:function(){C.IK._ReInit.call(this);this.Ie._ReInit(
);this.Gv._ReInit();this.T(A.aaR(A.acf.AHt));this.Ie.R(A.aaR(A.acf.AqG));this.V.
S(A.aaL(A.fl.HL));this.Ie.S(A.aaL(A.fl.HL));this.Gv.S(A.aaL(A.fl.Kt));},_Mark:function(
D){var B;C.IK._Mark.call(this,D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Ps={AP:null,A$:null,P6:null,Ie:null,Gv:null,BaC:A.jV,AqG:0,A$q:0,Bl:function(
aSize){C.IK.Bl.call(this,aSize);this.P6.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P6.M[2]-1,0,this.P6.M[2]+1,aSize[1]]);this.Ie.H([this.P6.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.Ie.M[2]-1,0,this.Ie.M[2]+1,aSize[
1]]);this.Gv.H([this.Ie.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IK.Ai.call(
this,Ae);this.P6.L(this.V.AQ);this.Ie.L(this.V.AQ);this.Gv.L(this.V.AQ);},Bon:function(
E){if(this.BaC===E)return;this.BaC=E;this.P6.R(E);},BmH:function(E){if(this.AqG===
E)return;this.AqG=E;this.Ie.R(E.toFixed());},A_U:function(E){if(this.A$q===E)return;
this.A$q=E;this.Gv.R(E.toFixed()+As7);},_Init:function(aArg){C.IK._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.P6={I:this},0);A.acg.Text._Init.call(this.Ie={I:
this},0);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.Ps;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.P6.H(Bs9);this.P6.R(A.aaR(A.acf.AHt));this.P6.L(
A.jb.Text);this.Ie.R(U8);this.Ie.L(A.jb.Text);this.Gv.R(Bs_);this.Gv.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.P6,0);this.J(this.Ie,0);this.J(
this.Gv,0);this.P6.S(A.aaL(A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IK;this.AP._Done();this.A$._Done();this.
P6._Done();this.Ie._Done();this.Gv._Done();C.IK._Done.call(this);},_ReInit:function(
){C.IK._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.P6._ReInit();
this.Ie._ReInit();this.Gv._ReInit();this.P6.R(A.aaR(A.acf.AHt));this.P6.S(A.aaL(
A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IK._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMN={AK4:
function(){var Bf=A._GetAutoObject(A.Device.Helper).MB();A._GetAutoObject(A.Device.
Device).An.Bk(Bf);},_Init:function(aArg){C.AmB._Init.call(this,aArg);this.__proto__=
C.AMN;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARU={R9:null,
Sd:null,R8:null,Sa:null,Pu:null,R$:null,ALz:function(G){A.pe([this,this.BDd],this
);A.pe([this,this.BC3],this);A.pe([this,this.BCZ],this);A.pe([this,this.A41],this
);A.pe([this,this.BC6],this);A.pe([this,this.BC4],this);},Il:function(G){var Cy=(
C.QZ.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Sd)A._GetAutoObject(C.A7
).Cb(20);else if(Cy===this.Pu)A._GetAutoObject(C.A7).Cb(14);else if(Cy===this.R9
)A._GetAutoObject(C.A7).Cb(12);else if(Cy===this.Sa)A._GetAutoObject(C.A7).Cb(43
);else if(Cy===this.R8)A._GetAutoObject(C.A7).Cb(51);else if(Cy===this.R$)A._GetAutoObject(
C.A7).Cb(61);},BC3:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MB();var
AzE=A._NewObject(A.Device.BoolFilterCriterion,0);AzE.Initialize(9,0,true,true);Bf.
CX(AzE);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Pu.ZE(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},BDd:function(G){var Bf=A._GetAutoObject(A.
Device.Helper).MB();var ABO=A._NewObject(A.Device.BoolFilterCriterion,0);ABO.Initialize(
12,0,true,true);Bf.CX(ABO);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Sd.ZE(
A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BCZ:function(G){var Bf=A.
_GetAutoObject(A.Device.Helper).MB();var Azk=A._NewObject(A.Device.BoolFilterCriterion
,0);Azk.Initialize(8,0,true,true);Bf.CX(Azk);A._GetAutoObject(A.Device.Device).An.
Bk(Bf);this.R9.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},A41:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).A67(A._GetAutoObject(A.Device.Device
).ABU);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.R8.ZE(A._GetAutoObject(A.
Device.Device).An.B_().toFixed());},BC6:function(G){var Bf=A._GetAutoObject(A.Device.
Helper).A7e();A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Sa.ZE(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},BC4:function(G){var Bf=A._GetAutoObject(A.
Device.Helper).ADe();A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.R$.ZE(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},_Init:function(aArg){C.Ue._Init.call(this,
aArg);C.QZ._Init.call(this.R9={I:this},0);C.QZ._Init.call(this.Sd={I:this},0);C.
QZ._Init.call(this.R8={I:this},0);C.QZ._Init.call(this.Sa={I:this},0);C.QZ._Init.
call(this.Pu={I:this},0);C.QZ._Init.call(this.R$={I:this},0);this.__proto__=C.ARU;
this.R9.H(Qd);this.R9.Aj(true);this.R9.T(A.aaR(A.acf.Alarm));this.R9.Ab8(true);this.
Sd.H(A0A);this.Sd.Aj(true);this.Sd.T(A.aaR(A.acf.Asl));this.Sd.Ab8(true);this.R8.
H(Oh);this.R8.Aj(true);this.R8.T(A.aaR(A.acf.ActionList));this.R8.Ab8(true);this.
Sa.H(Qe);this.Sa.Aj(true);this.Sa.T(A.aaR(A.acf.AOS));this.Sa.Ab8(true);this.Pu.
H(Te);this.Pu.As(false);this.Pu.Aj(false);this.Pu.Z(false);this.Pu.T(A.aaR(A.acf.
ACz));this.Pu.Ab8(true);this.R$.H(U0);this.R$.Aj(true);this.R$.T(A.aaR(A.acf.A6J
));this.R$.Ab8(true);this.J(this.R9,-1);this.J(this.Sd,-1);this.J(this.R8,-1);this.
J(this.Sa,-1);this.J(this.Pu,-1);this.J(this.R$,-1);this.R9.AR=[this,this.AcW];this.
R9.DC(A.aaL(A.ach.ADO));this.R9.Ab$(A.aaL(A.ach.N1));this.Sd.AR=[this,this.AcW];
this.Sd.DC(A.aaL(A.ach.ARb));this.Sd.Ab$(A.aaL(A.ach.N1));this.R8.AR=[this,this.
AcW];this.R8.DC(A.aaL(A.ach.APZ));this.R8.Ab$(A.aaL(A.ach.N1));this.Sa.AR=[this,
this.AcW];this.Sa.DC(A.aaL(A.ach.AQx));this.Sa.Ab$(A.aaL(A.ach.N1));this.Pu.AR=[
this,this.AcW];this.Pu.DC(A.aaL(A.ach.ADO));this.Pu.Ab$(A.aaL(A.ach.N1));this.R$.
AR=[this,this.AcW];this.R$.DC(A.aaL(A.ach.AQn));this.R$.Ab$(A.aaL(A.ach.N1));},_Done:
function(){this.__proto__=C.Ue;this.R9._Done();this.Sd._Done();this.R8._Done();this.
Sa._Done();this.Pu._Done();this.R$._Done();C.Ue._Done.call(this);},_ReInit:function(
){C.Ue._ReInit.call(this);this.R9._ReInit();this.Sd._ReInit();this.R8._ReInit();
this.Sa._ReInit();this.Pu._ReInit();this.R$._ReInit();this.R9.T(A.aaR(A.acf.Alarm
));this.Sd.T(A.aaR(A.acf.Asl));this.R8.T(A.aaR(A.acf.ActionList));this.Sa.T(A.aaR(
A.acf.AOS));this.Pu.T(A.aaR(A.acf.ACz));this.R$.T(A.aaR(A.acf.A6J));},_Mark:function(
D){var B;C.Ue._Mark.call(this,D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ART={Se:null,VT:null,Sb:null,R_:null,Sc:null,ALz:function(G){A.pe([this,this.
BC0],this);A.pe([this,this.BC_],this);A.pe([this,this.BC$],this);A.pe([this,this.
BDe],this);A.pe([this,this.BDa],this);},Il:function(G){var Cy=(C.QZ.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VT)A._GetAutoObject(C.A7).Cb(90);if(Cy===this.
R_)A._GetAutoObject(C.A7).Cb(74);if(Cy===this.Sb)A._GetAutoObject(C.A7).Cb(71);if(
Cy===this.Sc)A._GetAutoObject(C.A7).Cb(46);if(Cy===this.Se)A._GetAutoObject(C.A7
).Cb(85);},BC$:function(G){var Bf=A._GetAutoObject(A.Device.Helper).ADh();A._GetAutoObject(
A.Device.Device).An.Bk(Bf);this.Sc.ZE(A._GetAutoObject(A.Device.Device).An.B_().
toFixed());},BDe:function(G){var Bf=A._GetAutoObject(A.Device.Helper).A7p(Math.max(
A._GetAutoObject(A.Device.Device).Av5,A._GetAutoObject(A.Device.Helper).A7h(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Se.ZE(
A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BC_:function(G){var Bf=A.
_GetAutoObject(A.Device.Helper).A7k();A._GetAutoObject(A.Device.Device).An.Bk(Bf
);this.Sb.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BC0:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).AOT();A._GetAutoObject(A.Device.Device
).An.Bk(Bf);this.R_.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BDa:
function(G){var Bf=A._GetAutoObject(A.Device.Helper).AvA();A._GetAutoObject(A.Device.
Device).An.Bk(Bf);this.VT.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed()
);},_Init:function(aArg){C.Ue._Init.call(this,aArg);C.QZ._Init.call(this.Se={I:this
},0);C.QZ._Init.call(this.VT={I:this},0);C.QZ._Init.call(this.Sb={I:this},0);C.QZ.
_Init.call(this.R_={I:this},0);C.QZ._Init.call(this.Sc={I:this},0);this.__proto__=
C.ART;this.Se.H(Bs$);this.Se.Aj(true);this.Se.T(A.aaR(A.acf.A8n));this.Se.Ab8(true
);this.VT.H(Bta);this.VT.Aj(true);this.VT.T(A.aaR(A.acf.AGw));this.Sb.H(Btb);this.
Sb.Aj(true);this.Sb.T(A.aaR(A.acf.A8p));this.Sb.Ab8(true);this.R_.H(Btc);this.R_.
Aj(true);this.R_.T(A.aaR(A.acf.ACe));this.R_.Ab8(true);this.Sc.H(Btd);this.Sc.Aj(
true);this.Sc.T(A.aaR(A.acf.ASv));this.Sc.Ab8(true);this.J(this.Se,-1);this.J(this.
VT,-1);this.J(this.Sb,-1);this.J(this.R_,-1);this.J(this.Sc,-1);this.Se.AR=[this
,this.AcW];this.Se.DC(A.aaL(A.ach.AQP));this.Se.Ab$(A.aaL(A.ach.N1));this.VT.AR=[
this,this.AcW];this.VT.DC(A.aaL(A.ach.AD4));this.Sb.AR=[this,this.AcW];this.Sb.DC(
A.aaL(A.ach.AQR));this.Sb.Ab$(A.aaL(A.ach.N1));this.R_.AR=[this,this.AcW];this.R_.
DC(A.aaL(A.ach.AQi));this.R_.Ab$(A.aaL(A.ach.N1));this.Sc.AR=[this,this.AcW];this.
Sc.DC(A.aaL(A.ach.AQT));this.Sc.Ab$(A.aaL(A.ach.N1));},_Done:function(){this.__proto__=
C.Ue;this.Se._Done();this.VT._Done();this.Sb._Done();this.R_._Done();this.Sc._Done(
);C.Ue._Done.call(this);},_ReInit:function(){C.Ue._ReInit.call(this);this.Se._ReInit(
);this.VT._ReInit();this.Sb._ReInit();this.R_._ReInit();this.Sc._ReInit();this.Se.
T(A.aaR(A.acf.A8n));this.VT.T(A.aaR(A.acf.AGw));this.Sb.T(A.aaR(A.acf.A8p));this.
R_.T(A.aaR(A.acf.ACe));this.Sc.T(A.aaR(A.acf.ASv));},_Mark:function(D){var B;C.Ue.
_Mark.call(this,D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASt={WK:function(G){this.Agz(
);this.AMl();this.A5o(A.aaR(A.acf.A72),[this,this.Bn4],131072);this.A5o(A.aaR(A.
acf.A71),[this,this.Bn3],16384);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS
).Mp(A.aaR(A.acf.ARN)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DF:function(G){},AbA:function(){return C.AqC;},AbB:function(){return C.Aq9;}
,Ra:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A7k());},HS:function(G){C.M_.HS.call(this,G);if(this.Aki()===false){this.
N.Ct(A._GetAutoObject(A.Device.Converter).Ajs(A._GetAutoObject(A.Device.Converter
).AMg(this.L3.ADj())));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.N.OW(false
);this.N.OX(false);},Agl:function(){A._GetAutoObject(C.A7).Cb(72);},Bn3:function(
G){this.AGT(16384);},Bn4:function(G){this.AGT(131072);},_Init:function(aArg){C.M_.
_Init.call(this,aArg);this.__proto__=C.ASt;this.Dr(C.APC);this.Dl(A.aaR(A.acf.A8t
));this.ATC(A._GetAutoObject(C.Awa));},_ReInit:function(){C.M_._ReInit.call(this
);this.Dl(A.aaR(A.acf.A8t));},_className:"Application::NoNaisIdListScreen"};C.ASs={
_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.ASs;this.MD.As(
false);this.MD.Aj(false);this.MD.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APC={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad1(10));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=
C.APC;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkQ={OJ:null,Bgl:false
,CQ:function(){A.pe([this,this.AoF],this);},DF:function(G){},CD:function(G){C.GJ.
CD.call(this,G);if(this.Bgl&&(A._GetAutoObject(A.Device.Device).OZ>0))A.pe([this
,this.AIY],this);},Agi:function(G){this.A6G(this);},Agl:function(){A._GetAutoObject(
C.A7).Cb(73);},ASB:function(G){throw new Error(AoC);},Bbn:function(s){this.ASB(s
);},ASC:function(G){throw new Error(AoC);},Bbo:function(s){this.ASC(s);},ASG:function(
G){throw new Error(AoC);},AIY:function(s){this.ASG(s);},Bfx:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7)){this.
Bgl=true;A._GetAutoObject(C.A7).Cb(76);}},Agk:function(G){var B;var Ar=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===5))A.z$([this,this.
XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);},XM:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P7.Z8===3){A._GetAutoObject(A.Device.Device).AY(
74,false,A.jV,0,[this,this.Agk]);A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Vb],0);A.pe([this,this.AIY],this);}},AJT:function(){throw new Error(
AoC);},A8J:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A6F(this);},
BoC:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.BiU(this);},Hh:function(
G){},A_r:function(E){if(A.aaZ(this.OJ,E))return;if(!!this.OJ)A.z$([this,this.Hh]
,this.OJ,0);this.OJ=E;if(!!E)A.zX([this,this.Hh],E,0);if(!!E)A.pe([this,this.Hh]
,this);},Bg_:function(G){var F,Cu;if(!this.OJ)return;(Cu=this.OJ,Cu[2].call(Cu[0
],!(F=this.OJ,F[1].call(F[0]))));},_Init:function(aArg){C.GJ._Init.call(this,aArg
);this.__proto__=C.AkQ;this.Dl(A.aaR(A.acf.A8A));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8A));this.CQ();},_Mark:function(D){var B;C.GJ._Mark.
call(this,D);if((B=this.OJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::RegistrationsListScreen"};C.AUM={_Init:function(aArg){C.I_._Init.call(
this,aArg);this.__proto__=C.AUM;},_className:"Application::RegistrationsListFilterScreen"
};C.Aex={_Init:function(aArg){C.YB._Init.call(this,aArg);this.__proto__=C.Aex;this.
Text.H(Bte);this.Text.R(A.jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"
};C.ACl={Js:0,AP:null,A$:null,Ea:null,IQ:null,S4:null,Gz:null,Mn:0,Ld:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IQ.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A$.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1,aSize[
1]]);this.S4.H([this.IQ.M[2],0,this.IQ.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.S4.M[2]-1,0,this.S4.M[2]+1,aSize[1]]);this.Gz.H([this.S4.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IQ.L(this.V.AQ);this.
Gz.L(this.V.AQ);this.S4.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj7(this.
Ld)){this.V.S(A.aaL(A.fl.H6));this.T(Ba5);this.S4.R(Rs);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mn.toFixed());this.S4.R(A._GetAutoObject(A.Device.Helper).V5(this.
Js,0,5).toFixed());}},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX
){this.Mn=this.AX.CC(Ad,1);this.Ld=this.AX.AO7(Ad,34);var At1=this.AX.AOZ(Ad,7);
this.Js=this.AX.KT(Ad,26);var Azr=this.AX.Hw(Ad,4);var AfU=A._GetAutoObject(A.Device.
Helper).Mf(Azr,A._GetAutoObject(A.Device.Helper).Dv());this.IQ.Ax(A._GetAutoObject(
A.Device.Converter).AmZ(At1));if(AfU<100)this.Gz.R((AfU.toFixed()+CR)+A.aaR(A.acf.
AL$));else this.Gz.R(A._GetAutoObject(A.acj.KR).ADa(Azr,A._GetAutoObject(A.Device.
Helper).Dv(),AIC));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IQ={I:this},0);
A.acg.Text._Init.call(this.S4={I:this},0);C.CG._Init.call(this.Gz={I:this},0);this.
__proto__=C.ACl;this.AP.H(Aov);this.AP.L(A.jb.Bc);this.A$.H(Aow);this.A$.L(A.jb.
Bc);this.Ea.H(A0B);this.Ea.L(A.jb.Bc);this.IQ.H(Ba6);this.IQ.L(A.jb.Text);this.S4.
H(AyH);this.Gz.H(A0C);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.IQ,0);this.J(this.S4,0);this.J(this.Gz,0);this.S4.S(A.aaL(A.fl.Af));this.
Gz.S(A.aaL(A.fl.Af));this.Gz.A0(A.aaL(A.fl.Ak));this.Gz.Cr(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done(
);this.Ea._Done();this.IQ._Done();this.S4._Done();this.Gz._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.A$._ReInit(
);this.Ea._ReInit();this.IQ._ReInit();this.S4._ReInit();this.Gz._ReInit();this.S4.
S(A.aaL(A.fl.Af));this.Gz.S(A.aaL(A.fl.Af));this.Gz.A0(A.aaL(A.fl.Ak));this.Gz.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADE={Aj4:
null,PG:null,Jb:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj4={I:this},0);A.acg.Ap._Init.call(this.PG={I:this},0);A.acg.Ap._Init.
call(this.Jb={I:this},0);this.__proto__=C.ADE;this.Aj4.H(Btf);this.Aj4.L(A.jb.Text
);this.PG.H(Btg);this.PG.L(A.jb.Text);this.Jb.H(BaX);this.Jb.L(A.jb.Text);this.J(
this.Aj4,0);this.J(this.PG,0);this.J(this.Jb,0);this.Aj4.Ax(A.aaL(A.ach.AD0));this.
PG.Ax(A.aaL(A.ach.AvN));this.Jb.Ax(A.aaL(A.ach.AvI));},_Done:function(){this.__proto__=
C.De;this.Aj4._Done();this.PG._Done();this.Jb._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.Aj4._ReInit();this.PG._ReInit();this.Jb.
_ReInit();},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Aj4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APE={IY:null,Ag3:null,HT:null,Bc:null,MK:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9y,B.A_Y],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
WJ,B.J0],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.ArK,B.SP
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},Dg:function(E){C.BR.Dg.call(this,E);this.IY.L(E);this.Ag3.L(E);this.
HT.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HT.R(A.aaR(A.acf.Afe));else this.HT.R(((A.aaR(A.acf.GN)+A.aaR(A.acf.
Colon))+CR)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
Aq6()){this.Aw9(((A._GetAutoObject(A.Device.Helper).W.CI+1).toFixed()+AIS)+A._GetAutoObject(
A.Device.Device).An.B_().toFixed());this.J0(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nt(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Aw9(BaK);this.J0(2);
this.OnSetAnimalId(-1);this.Nt(0);}},J0:function(E){if(this.Gender===E)return;this.
Gender=E;this.Ag3.Ax(A._GetAutoObject(A.Device.Converter).AmZ(E));},Aw9:function(
E){if(this.MK===E)return;this.MK=E;this.IY.R(E);},Nt:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj7(E))this.HT.
Z(false);else this.HT.Z(true);},_Init:function(aArg){C.BR._Init.call(this,aArg);
A.acg.Text._Init.call(this.IY={I:this},0);A.acg.Ap._Init.call(this.Ag3={I:this},
0);A.acg.Text._Init.call(this.HT={I:this},0);A.acg.C8._Init.call(this.Bc={I:this
},0);this.__proto__=C.APE;this.IY.H(BaL);this.IY.Hp(2);this.IY.KX(true);this.IY.
A6(0x12);this.IY.R(BaM);this.Ag3.H(Bth);this.HT.H(Bti);this.HT.A6(0x11);this.HT.
R(A.aaR(A.acf.Afe));this.Bc.DD(Alm);this.Bc.DN(AyN);this.Bc.L(A.jb.Bc);this.J(this.
IY,0);this.J(this.Ag3,0);this.J(this.HT,0);this.J(this.Bc,0);this.IY.S(A.aaL(A.fl.
Ak));this.Ag3.Ax(A._GetAutoObject(A.Device.Converter).AmZ(2));this.HT.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.IY._Done();this.
Ag3._Done();this.HT._Done();this.Bc._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.IY._ReInit();this.Ag3._ReInit();this.HT._ReInit();
this.Bc._ReInit();this.HT.R(A.aaR(A.acf.Afe));this.IY.S(A.aaL(A.fl.Ak));this.HT.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.IY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aa$={EaseOfDeliveryToString:
null,AgV:null,Ch:function(G){C.NP.Ch.call(this,G);var AKa=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.KB(this.EaseOfDeliveryToString.LA(AKa));this.G4.R(
this.AgV.Aem(AKa).toFixed());},Dg:function(E){C.NP.Dg.call(this,E);this.G4.L(E);
},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgV._Init.call(this.
AgV={I:this},0);this.__proto__=C.Aa$;this.T(A.aaR(A.acf.AgM));},_Done:function(){
this.__proto__=C.NP;this.EaseOfDeliveryToString._Done();this.AgV._Done();C.NP._Done.
call(this);},_ReInit:function(){C.NP._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgV._ReInit();this.T(A.aaR(A.acf.AgM));},_Mark:function(D){var B;
C.NP._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.X1={WhereAboutsToString:null,K3:null,Ch:function(G){C.NP.Ch.call(this,G);var
Ld=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.KB(this.WhereAboutsToString.
LA(Ld));this.G4.R(this.K3.Aem(Ld).toFixed());},Dg:function(E){C.NP.Dg.call(this,
E);this.G4.L(E);},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.K3._Init.call(this.K3={
I:this},0);this.__proto__=C.X1;this.T(A.aaR(A.acf.Jm));},_Done:function(){this.__proto__=
C.NP;this.WhereAboutsToString._Done();this.K3._Done();C.NP._Done.call(this);},_ReInit:
function(){C.NP._ReInit.call(this);this.WhereAboutsToString._ReInit();this.K3._ReInit(
);this.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.NP._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K3)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R5={Cq:null,Y:null,Ay:null,Init:function(aArg){},CD:function(G){var B;C.D9.CD.
call(this,G);A.zX([this,this.AfK],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.
OnSetId],0);A.zX([this,this.AfK],[B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]
,0);A.pe([this,this.AfK],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfK],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId],0);A.z$([this
,this.AfK],[B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va],0);},Fj:function(G){var
B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.
MH(-this.Y.Br[1]);},DF:function(G){switch(this.Cq.CP){case 6:case 7:this.Cq.Mw=true;
break;case 4:this.BgG(4);break;case 5:this.BgG(5);break;default:;}},BgG:function(
GA){var B;switch(GA){case 5:{var CE=this.Y.Br[1]-40;if(CE<-(((B=this.Y.Dd(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CE=-(((B=this.Y.Dd(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CE>0)CE=0;this.Y.Gc([this.Y.Br[0],CE]);}break;case 4:{var CE=this.Y.
Br[1]+40;if(CE>0)CE=0;this.Y.Gc([this.Y.Br[0],CE]);}break;default:throw new Error(
Btj);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I9.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ch(this
);}X=X.Ah;}},AfK:function(s){this.GH(s);},MZ:function(G){var B;this.Y.VG(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BF._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R5;this.Cq.Filter=147;this.Y.H(U5);this.Y.JZ(1);this.Ay.H(As6
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BG=[this,this.DF];this.Cq.D1=[this,
this.DF];this.Y.Em=[this,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cq._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.X2={Aa5:null,
XY:null,Aa6:null,XZ:null,Aa$:null,X1:null,_Init:function(aArg){C.R5._Init.call(this
,aArg);C.Aa5._Init.call(this.Aa5={I:this},0);C.XY._Init.call(this.XY={I:this},0);
C.Aa6._Init.call(this.Aa6={I:this},0);C.XZ._Init.call(this.XZ={I:this},0);C.Aa$.
_Init.call(this.Aa$={I:this},0);C.X1._Init.call(this.X1={I:this},0);this.__proto__=
C.X2;this.Aa5.H(BD);this.Aa5.Aj(true);this.XY.H(I1);this.XY.Aj(true);this.XY.Bi(
true);this.Aa6.H(Qf);this.Aa6.Aj(true);this.XZ.H(Aan);this.XZ.Aj(true);this.XZ.Bi(
true);this.Aa$.H(Alj);this.Aa$.Aj(true);this.X1.H(Aos);this.X1.Aj(true);this.X1.
Bi(true);this.J(this.Aa5,0);this.J(this.XY,0);this.J(this.Aa6,0);this.J(this.XZ,
0);this.J(this.Aa$,0);this.J(this.X1,0);},_Done:function(){this.__proto__=C.R5;this.
Aa5._Done();this.XY._Done();this.Aa6._Done();this.XZ._Done();this.Aa$._Done();this.
X1._Done();C.R5._Done.call(this);},_ReInit:function(){C.R5._ReInit.call(this);this.
Aa5._ReInit();this.XY._ReInit();this.Aa6._ReInit();this.XZ._ReInit();this.Aa$._ReInit(
);this.X1._ReInit();},_Mark:function(D){var B;C.R5._Mark.call(this,D);if((B=this.
Aa5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X1)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.XZ={
BreedToString:null,G4:null,Na:null,Ch:function(G){C.IJ.Ch.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BT(Bv));this.G4.
R(this.Na.Aem(Bv).toFixed());},Dg:function(E){C.IJ.Dg.call(this,E);this.G4.L(E);
},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G4={I:this},0);A.Device.
Na._Init.call(this.Na={I:this},0);this.__proto__=C.XZ;this.BU.H(Btk);this.G4.H(Btl
);this.G4.Hp(5);this.G4.A6(0x14);this.G4.R(Btm);this.G4.L(A.jb.Text);this.J(this.
G4,0);this.Hx.Ax(A.aaL(A.ach.ADS));this.G4.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IJ;this.BreedToString._Done();this.G4._Done();this.Na._Done();C.
IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.BreedToString.
_ReInit();this.G4._ReInit();this.Na._ReInit();this.G4.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.Aa6={
Ch:function(G){C.IJ.Ch.call(this,G);var AAy=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAy>0)this.T(A._GetAutoObject(A.Device.Converter).Rl(AAy));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IJ._Init.call(this,aArg);this.__proto__=
C.Aa6;this.Hx.Ax(A.aaL(A.ach.AQo));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XY={YG:null,Ch:function(G){C.IJ.Ch.call(this,G);var Ph=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AfZ=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Ph>
0)this.T(A._GetAutoObject(A.acj.KR).AjN(Ph));else this.T(A.aaR(A.acf.Unknown));var
Azt=A.aaL(A.aci.TW);switch(AfZ){case 0:Azt=A.aaL(A.ach.ADQ);break;case 1:{Azt=A.
aaL(A.ach.AvJ);this.YG.Cw(0);}break;case 2:{Azt=A.aaL(A.ach.AvJ);this.YG.Cw(1);}
break;case 3:{Azt=A.aaL(A.ach.AvJ);this.YG.Cw(2);}break;default:A.ab5("%s%e",Btn
,AfZ);}this.YG.Ax(Azt);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.YG={I:this},0);this.__proto__=C.XY;this.BU.H(Bto);this.YG.H(AH9);
this.YG.L(A.jb.Text);this.J(this.YG,0);this.Hx.Ax(A.aaL(A.ach.AvI));this.YG.Ax(A.
aaL(A.ach.ADQ));},_Done:function(){this.__proto__=C.IJ;this.YG._Done();C.IJ._Done.
call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.YG._ReInit();},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.Aa5={Js:0,X0:null,Ld:0
,Bl:function(aSize){C.IJ.Bl.call(this,aSize);this.X0.H(this.Hx.M);},Ai:function(
Ae){C.IJ.Ai.call(this,Ae);this.X0.L(this.BU.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj7(this.Ld)){this.T(A.aaR(A.acf.AnimalLoss));this.Hx.Z(false);this.X0.Z(true);
}else if(this.Js>0){this.T(A._GetAutoObject(A.Device.Converter).Rl(this.Js));this.
Hx.Z(true);this.X0.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hx.Z(true);this.
X0.Z(false);}},Ch:function(G){C.IJ.Ch.call(this,G);this.Js=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.Ld=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Text._Init.call(this.X0={
I:this},0);this.__proto__=C.Aa5;this.X0.R(Ba5);this.J(this.X0,0);this.Hx.Ax(A.aaL(
A.ach.AvN));this.X0.S(A.aaL(A.fl.H6));},_Done:function(){this.__proto__=C.IJ;this.
X0._Done();C.IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.
X0._ReInit();},_Mark:function(D){var B;C.IJ._Mark.call(this,D);if((B=this.X0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMK={X2:null,Init:function(aArg){var B;A.zX([this,this.AAR],[B=A._GetAutoObject(
A.Device.Device),B.AER,B.AI2],0);A.pe([this,this.AAR],this);},DF:function(G){var
D5=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D5.CP){case 6:this.Ov(this);break;
case 7:this.M5(this);break;default:D5.Mw=true;}},CD:function(G){var B;this.X2.CD(
this);C.AB.CD.call(this,G);},E4:function(G){var B;this.X2.E4(this);C.AB.E4.call(
this,G);},Ant:function(G){A._GetAutoObject(C.A7).FB();},Adx:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},M5:function(G){if(A._GetAutoObject(A.Device.
Device).An.B_()<=1)return;var LJ=A._GetAutoObject(A.Device.Helper).W.CI;LJ=LJ+1;
if(LJ>=A._GetAutoObject(A.Device.Device).An.B_())LJ=0;A._GetAutoObject(A.Device.
Helper).GS(LJ);},Ov:function(G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)
return;var LJ=A._GetAutoObject(A.Device.Helper).W.CI;LJ=LJ-1;if(LJ<0)LJ=A._GetAutoObject(
A.Device.Device).An.B_()-1;A._GetAutoObject(A.Device.Helper).GS(LJ);},AAR:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqy)A._GetAutoObject(C.A7).Ace(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.X2._Init.call(this.X2={I:this},0);this.
__proto__=C.AMK;this.Background.H(Cf);this.N.Z(true);this.N.OW(true);this.N.OX(true
);this.Dr(C.APE);this.X2.H(Fe);this.J(this.X2,0);this.N.CF=[this,this.Ant];this.
N.Ce=[this,this.Adx];this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeF));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.X2._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.X2._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IJ={Hx:null,BU:null
,T:function(E){C.I9.T.call(this,E);this.BU.R(this.DL);},Dg:function(E){C.I9.Dg.call(
this,E);this.Hx.L(E);this.BU.L(E);},_Init:function(aArg){C.I9._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hx={I:this},0);C.CG._Init.call(this.BU={I:this},0);this.
__proto__=C.IJ;this.Hx.H(Btp);this.Hx.L(A.jb.Text);this.BU.H(Btq);this.BU.A6(0x11
);this.BU.L(A.jb.Text);this.J(this.Hx,0);this.J(this.BU,0);this.Hx.Ax(A.aaL(A.aci.
TW));this.BU.S(A.aaL(A.fl.Af));this.BU.A0(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I9;this.Hx._Done();this.BU._Done();C.I9._Done.call(this);},_ReInit:function(
){C.I9._ReInit.call(this);this.Hx._ReInit();this.BU._ReInit();this.BU.S(A.aaL(A.
fl.Af));this.BU.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I9._Mark.call(this
,D);if((B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I9={Background:null
,KY:0,Hn:false,CQ:function(){this.Ch(this);},Init:function(aArg){var B;A.zX([this
,this.Bb_],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId],0);A.pe([this,
this.Bb_],this);},Bl:function(aSize){C.Hk.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hk.Ai.call(this,Ae);if(this.
Hn)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CK);},Ch:function(G){}
,Bb_:function(s){this.Ch(s);},Bi:function(E){if(this.Hn===E)return;this.Hn=E;this.
Am();},Dg:function(E){if(this.KY===E)return;this.KY=E;},_Init:function(aArg){C.Hk.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.I9;this.H(BD);this.Background.H(AIE);this.KY=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hk;this.Background._Done(
);C.Hk._Done.call(this);},_ReInit:function(){C.Hk._ReInit.call(this);this.Background.
_ReInit();this.CQ();},_Mark:function(D){var B;C.Hk._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NP={G4:null,BBN:function(G){this.BU.H(A.abN(this.BU.M,this.G4.M[0]));},_Init:
function(aArg){C.FA._Init.call(this,aArg);A.acg.Text._Init.call(this.G4={I:this}
,0);this.__proto__=C.NP;this.G4.A1(0xA);this.G4.H(Btr);this.G4.Hp(5);this.G4.Je(
true);this.G4.A6(0x14);this.G4.R(A.jV);this.G4.L(A.jb.Text);this.J(this.G4,0);this.
G4.Q9([this,this.BBN]);this.G4.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.FA;this.G4._Done();C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(
this);this.G4._ReInit();this.G4.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FA.
_Mark.call(this,D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axt={ARs:null,_Init:function(aArg){C.ZH._Init.call(this,aArg);this.__proto__=
C.Axt;},_Mark:function(D){var B;C.ZH._Mark.call(this,D);if((B=this.ARs)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANR={WI:null,W4:0,AwU:function(E){C.AmL.AwU.call(this,E);if(E)this.Pw.R(Bts);
else this.Pw.R(Ba7);},BnT:function(E){if(A.aaZ(this.WI,E))return;if(!!this.WI)A.
z$([this,this.A3U],this.WI,0);this.WI=E;if(!!E)A.zX([this,this.A3U],E,0);if(!!E)
A.pe([this,this.A3U],this);},AF5:function(E){var F;if(this.W4===E)return;this.W4=
E;this.AwU(!!this.WI&&((F=this.WI,F[1].call(F[0]))===E));},A3U:function(G){var F;
this.AwU(!!this.WI&&((F=this.WI,F[1].call(F[0]))===this.W4));},_Init:function(aArg
){C.AmL._Init.call(this,aArg);this.__proto__=C.ANR;this.Pw.R(Ba7);this.Pw.S(A.aaL(
A.fl.H6));},_Mark:function(D){var B;C.AmL._Mark.call(this,D);if((B=this.WI)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axv={WI:null,W4:0,_Init:function(aArg){C.ZH._Init.call(this,aArg);this.__proto__=
C.Axv;},_Mark:function(D){var B;C.ZH._Mark.call(this,D);if((B=this.WI)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUq={GP:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Rd._Init.call(
this.GP={I:this},0);this.__proto__=C.AUq;var B;this.Jf(A.aaR(A.acf.AC2));this.GP.
H(Ah1);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGu));this.GP.Ar_(
false);this.GP.A_V(true);this.J(this.GP,0);this.GP.Ab7([B=this.GP,B.FW]);this.GP.
Gt([this,this.D_,this.GT]);this.GP.AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(
A.Device.Device),B.AS1,B.A0O]);},_Done:function(){this.__proto__=C.Cg;this.GP._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.GP._ReInit(
);this.Jf(A.aaR(A.acf.AC2));this.GP.T(A.aaR(A.acf.AGu));},_Mark:function(D){var B;
C.Cg._Mark.call(this,D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.AUo={GI:0,C9:null,AW:null,Kw:null,Fa:null
,GermanStateToString:null,CountryToString:null,PD:0,Lf:0,Mh:false,Init:function(
aArg){A.zX([this,this.MS],[this,this.SJ,this.Lu],0);A.zX([this,this.MS],[this,this.
Anw,this.Ahv],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.AW.FP(this.LX);this.
Kw.FP(this.LX);this.Fa.CV(this.LX);},DK:function(G){var F;if(!this.N)return;switch(
this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=
this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[
1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[
0])).CS(this.CountryToString.BT(this.Lf));(F=this.N,F[1].call(F[0])).Ca=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0]
)).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(
F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EN
)+Ayk)+this.GermanStateToString.LA(A._GetAutoObject(A.Device.Converter).ADb(this.
PD)));(F=this.N,F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0
])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}}
,Ex:function(EO){var Tw=this.A_;if(EO<0)EO=0;else if(EO>this.RN)EO=this.RN;switch(
EO){case 0:{this.Bb(null);if(!this.GI&&!this.PD)this.Lu(0);}break;case 1:this.Bb(
this.Fa);break;case 2:this.Bb(this.Kw);break;case 3:if(((Tw===2)&&!this.PD)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Tw>0))this.AW.SV(2);else this.AW.SV(
7);}break;default:throw new Error(Ats+EO.toFixed());}this.A_=EO;C.El.Ex.call(this
,EO);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mh=true;this.SM(A._GetAutoObject(
A.Device.Helper).V5(E,0,10));this.Ahv(A._GetAutoObject(A.Device.Helper).V5(E,10,
2)|0);this.Lu(A._GetAutoObject(A.Device.Converter).S8(E));this.Mh=false;if(!!this.
AM){this.Kw.Kz(2);this.AW.Kz(10);}else{this.Kw.Kz(0);this.AW.Kz(0);}this.Am();},
FW:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADn());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RN);},AjO:function(){return this.GI;
},AjQ:function(){return 9999999999;},Lu:function(E){if(this.Lf===E)return;this.Lf=
E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.SJ,this.Lu],0);}
,SM:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false)A.pe([this,this.
Vw],this);A.abo([this,this.Ab5,this.SM],0);},Vw:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).AqH(this.Lf),3,10)+A.abl(this.PD,2,10))+
A.abm(this.GI,10,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahv:function(
E){if(this.PD===E)return;this.PD=E;if(this.Mh===false)A.pe([this,this.Vw],this);
A.abo([this,this.Anw,this.Ahv],0);},SJ:function(){return this.Lf;},Ab5:function(
){return this.GI;},Anw:function(){return this.PD;},_Init:function(aArg){C.El._Init.
call(this,aArg);C.C9._Init.call(this.C9={I:this},0);C.ARm._Init.call(this.AW={I:
this},0);C.AvV._Init.call(this.Kw={I:this},0);C.AsR._Init.call(this.Fa={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AUo;var B;this.RN=3;this.AW.H(Btt);this.Kw.H(Btu);this.Kw.EV(16);this.Fa.H(Ba8
);this.J(this.AW,0);this.J(this.Kw,0);this.J(this.Fa,0);this.C9.AFl([this,this.SJ
,this.Lu]);this.AW.Au([this,this.Ab5,this.SM]);this.Kw.Au([this,this.Anw,this.Ahv
]);this.Fa.CL(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cc]);this.Init(aArg);},_Done:
function(){this.__proto__=C.El;this.C9._Done();this.AW._Done();this.Kw._Done();this.
Fa._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.El._Done.
call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit();this.AW.
_ReInit();this.Kw._ReInit();this.Fa._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.ARm={NT:null,NS:null,ET:null,F0:null,Eq:null,Dz:null,CW:null,Cv:null,FP:function(
E){if(this.Ne===E)return;C.Ll.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);this.Dz.
CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);this.NS.CV(E);this.NT.CV(E);},Yz:
function(HC){var B6=null;switch(HC){case-1:case 0:B6=this.F_;break;case 1:B6=this.
Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;
case 5:B6=this.F0;break;case 6:B6=this.ET;break;case 7:B6=this.NS;break;case 8:B6=
this.NT;break;case 9:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;},_Init:
function(aArg){C.Ll._Init.call(this,aArg);C.DG._Init.call(this.NT={I:this},0);C.
DG._Init.call(this.NS={I:this},0);C.DG._Init.call(this.ET={I:this},0);C.DG._Init.
call(this.F0={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(this.
Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.ARm;this.H(Btv);this.G3.H(AIT);this.NT.H(AyS);this.NS.H(A0o
);this.ET.H(A0p);this.F0.H(A0q);this.Eq.H(A0r);this.Dz.H(A0s);this.CW.H(A0t);this.
Cv.H(BaS);this.F_.H(A0u);this.EM.H(A0u);this.J(this.NT,-2);this.J(this.NS,-2);this.
J(this.ET,-2);this.J(this.F0,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.
CW,-2);this.J(this.Cv,-2);this.NT.Dk=[this,this.GY];this.NS.Dk=[this,this.GY];this.
ET.Dk=[this,this.GY];this.F0.Dk=[this,this.GY];this.Eq.Dk=[this,this.GY];this.Dz.
Dk=[this,this.GY];this.CW.Dk=[this,this.GY];this.Cv.Dk=[this,this.GY];},_Done:function(
){this.__proto__=C.Ll;this.NT._Done();this.NS._Done();this.ET._Done();this.F0._Done(
);this.Eq._Done();this.Dz._Done();this.CW._Done();this.Cv._Done();C.Ll._Done.call(
this);},_ReInit:function(){C.Ll._ReInit.call(this);this.NT._ReInit();this.NS._ReInit(
);this.ET._ReInit();this.F0._ReInit();this.Eq._ReInit();this.Dz._ReInit();this.CW.
_ReInit();this.Cv._ReInit();},_Mark:function(D){var B;C.Ll._Mark.call(this,D);if((
B=this.NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUp={
GI:0,C9:null,AW:null,Fa:null,CountryToString:null,Lf:0,Mh:false,Init:function(aArg
){A.zX([this,this.MS],[this,this.SJ,this.Lu],0);},Ai:function(Ae){C.El.Ai.call(this
,Ae);this.AW.FP(this.LX);this.Fa.CV(this.LX);},DK:function(G){var F;if(!this.N)return;
switch(this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(this.CountryToString.BT(this.Lf));(F=this.N,F[1].call(F[0])).Ca=null;}
break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(
F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Tw=this.A_;if(EO<0)EO=0;
else if(EO>this.RN)EO=this.RN;switch(EO){case 0:{this.Bb(null);if(!this.GI)this.
Lu(0);}break;case 1:this.Bb(this.Fa);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Tw>0))this.AW.SV(2);else this.AW.SV(7);}break;default:throw new Error(Ats+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,EO);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.Mh=true;this.SM(A._GetAutoObject(A.Device.Helper).V5(E,0,12));this.Lu(
A._GetAutoObject(A.Device.Converter).S8(E));this.Mh=false;if(!!this.AM)this.AW.Kz(
12);else this.AW.Kz(0);this.Am();},FW:function(G){var F;if(!this.AM){var BP=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ADn());if(this.AM!==BP){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RN);},AjO:function(
){return this.GI;},AjQ:function(){return 999999999999;},Lu:function(E){if(this.Lf===
E)return;this.Lf=E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.
SJ,this.Lu],0);},SM:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false
)A.pe([this,this.Vw],this);A.abo([this,this.Ab5,this.SM],0);},Vw:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).AqH(this.Lf),3,10)+A.abm(
this.GI,12,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SJ:function(){return this.
Lf;},Ab5:function(){return this.GI;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.AD8._Init.call(this.AW={I:this},0);C.AsR.
_Init.call(this.Fa={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUp;var B;this.RN=2;this.AW.H(Btw);this.Fa.H(Ba8);this.
J(this.AW,0);this.J(this.Fa,0);this.C9.AFl([this,this.SJ,this.Lu]);this.AW.Au([this
,this.Ab5,this.SM]);this.Fa.CL(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cc]);this.Init(
aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done();this.AW._Done();this.
Fa._Done();this.CountryToString._Done();C.El._Done.call(this);},_ReInit:function(
){C.El._ReInit.call(this);this.C9._ReInit();this.AW._ReInit();this.Fa._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,Yh:null,Yi:null,Yg:null,Ye:null,Yf:null,DF:function(
G){var B;C.AB.DF.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},CD:function(G){C.AB.CD.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkR();A._GetAutoObject(A.Device.Helper).Asz();},Il:function(G){
var Cy=(C.Fn.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Yh)A._GetAutoObject(
C.A7).Cb(28);else if(Cy===this.Yi)A._GetAutoObject(C.A7).Cb(26);else if(Cy===this.
Yg)A._GetAutoObject(C.A7).Cb(54);else if(Cy===this.Ye)A._GetAutoObject(C.A7).Cb(
27);else if(Cy===this.Yf)A._GetAutoObject(C.A7).Cb(78);},A3Y:function(G){A._GetAutoObject(
C.A7).FB();},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.
MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fn._Init.call(this.Yh={I:this
},0);C.Fn._Init.call(this.Yi={I:this},0);C.Fn._Init.call(this.Yg={I:this},0);C.Fn.
_Init.call(this.Ye={I:this},0);C.Fn._Init.call(this.Yf={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Ek.As(false
);this.Dr(C.Aq8);this.DY.A1(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CK);this.Y.H(Fe);
this.Y.JZ(9);this.Ay.H(Ix);this.Yh.H(Qd);this.Yh.Aj(true);this.Yh.T(A.aaR(A.acf.
A8l));this.Yi.H(A0A);this.Yi.Aj(true);this.Yi.T(A.aaR(A.acf.NewAnimals));this.Yg.
H(Oh);this.Yg.Aj(true);this.Yg.T(A.aaR(A.acf.Calving));this.Ye.H(Qe);this.Ye.Aj(
true);this.Ye.T(A.aaR(A.acf.ACj));this.Yf.H(MQ);this.Yf.Aj(true);this.Yf.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Yh,0);this.J(this.Yi,0);this.J(this.Yg,0);this.J(this.Ye,0);this.J(this.Yf,0);this.
N.CF=[this,this.A3Y];this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fj];this.Yh.
AR=[this,this.Il];this.Yh.DC(A.aaL(A.ach.AD1));this.Yi.AR=[this,this.Il];this.Yi.
DC(A.aaL(A.ach.AvR));this.Yg.AR=[this,this.Il];this.Yg.DC(A.aaL(A.ach.AQh));this.
Ye.AR=[this,this.Il];this.Ye.DC(A.aaL(A.ach.AQc));this.Yf.AR=[this,this.Il];this.
Yf.DC(A.aaL(A.ach.AP7));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.Yh._Done();this.Yi._Done();this.Yg._Done();this.Ye.
_Done();this.Yf._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Yh._ReInit(
);this.Yi._ReInit();this.Yg._ReInit();this.Ye._ReInit();this.Yf._ReInit();this.Yh.
T(A.aaR(A.acf.A8l));this.Yi.T(A.aaR(A.acf.NewAnimals));this.Yg.T(A.aaR(A.acf.Calving
));this.Ye.T(A.aaR(A.acf.ACj));this.Yf.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ye)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ASj={K_:null,EaseOfDelivery:null,BirthType:null,AcO:null
,Lp:null,Cn:null,G9:null,Ln:null,Az2:true,Init:function(aArg){this.Bb(this.Db);A.
pe([this,this.GH],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E7();A._GetAutoObject(C.A7).FB();if(!!this.K_)this.K_.Ew(this);},Agj:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.B0.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwV(true);if(!!this.K_)this.K_.Agj(this
);if(A._GetAutoObject(A.Device.Device).An.Lm())A._GetAutoObject(A.Device.Helper).
AKx(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApM]);else{this.Ai2();A.
pe([this,this.Ap_],this);}},Aut:function(){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.
AD5));this.N.Ca=[this,this.Ay8];},CD:function(G){var B;C.H3.CD.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lm()){A._GetAutoObject(A.Device.Device).AY(41
,true,A._GetAutoObject(A.Device.Device).An.HM().toFixed(),0,null);this.Ew(this);
}else if(this.Az2){this.Az2=false;A.pe([this,this.A4b],this);}else if(!this.K_){
this.K_=A._NewObject(C.ASk,0);this.K_.A_o([this,this.ABd]);A._GetAutoObject(A.Device.
Helper).W.Gs();A._GetAutoObject(A.Device.Helper).Aqo(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nt(this.As3.Aem(6));this.K_.LU(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},Ai2:function(
){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var
Md=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SW(Md);if(A._GetAutoObject(A.Device.Helper
).Am_()){if(A._GetAutoObject(A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.
Device).AY(50,true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),0,null);else{
var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A7q(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap_:function(G){var B;if(!!this.K_)this.K_.Ap_(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am_())this.C$.Z(true);else this.C$.Z(false);},
ApM:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;
switch(Ar.Id){case 41:break;default:A.ab5("%s%e",Ath,Ar.Id);}},ABd:function(G){this.
LU(this);this.AeZ(A._GetAutoObject(A.Device.Helper).Abz(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JN(this.Db);},ApN:function(G){var F;C.H3.ApN.call(this
,G);(F=this.C$.Q,F[2].call(F[0],this.C$.An2));},A4b:function(G){A._GetAutoObject(
C.A7).Cb(79);},_Init:function(aArg){C.H3._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcO._Init.call(this.AcO={I:this},0);C.Rd._Init.call(this.Lp={I:this
},0);C.SX._Init.call(this.Cn={I:this},0);C.BX._Init.call(this.G9={I:this},0);C.BX.
_Init.call(this.Ln={I:this},0);this.__proto__=C.ASj;var B;this.Dr(C.APB);this.Lp.
H(Ah1);this.Lp.Aj(true);this.Lp.T(A.aaR(A.acf.ACJ));this.CH.H(AcT);this.Cn.H(AcT
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aeh));this.Cn.AFX(true);this.G9.H(AcT);
this.G9.Aj(true);this.G9.T(A.aaR(A.acf.Arz));this.Ln.H(AcT);this.Ln.Aj(true);this.
Ln.T(A.aaR(A.acf.AgM));this.J(this.Lp,-5);this.J(this.Cn,-3);this.J(this.G9,-1);
this.J(this.Ln,-1);this.EaseOfDelivery.L6(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.L6(A._GetAutoObject(A.Device.Helper).W);this.AcO.L6(A._GetAutoObject(A.
Device.Helper).W);this.Lp.Gt([this,this.D_,this.GT]);this.Lp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ASX,B.AnK]);this.Cn.Gt([this,this.D_,this.GT]);this.Cn.L5([
B=this.Cn,B.FW]);this.Cn.L8(A.aaL(A.ach.Edit));this.Cn.Acb([B=A._GetAutoObject(A.
Device.Helper).W,B.Awi,B.Q8]);this.Go.Au([B=this.AcO,B.B$,B.Cc]);this.Go.CL(this.
AcO);this.G9.Au([B=this.BirthType,B.B$,B.Cc]);this.G9.CL(this.BirthType);this.Ln.
Au([B=this.EaseOfDelivery,B.B$,B.Cc]);this.Ln.CL(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.H3;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcO._Done();this.Lp._Done();this.Cn._Done();this.G9._Done();this.Ln.
_Done();C.H3._Done.call(this);},_ReInit:function(){C.H3._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcO._ReInit();this.Lp._ReInit(
);this.Cn._ReInit();this.G9._ReInit();this.Ln._ReInit();this.Lp.T(A.aaR(A.acf.ACJ
));this.Cn.T(A.aaR(A.acf.Aeh));this.G9.T(A.aaR(A.acf.Arz));this.Ln.T(A.aaR(A.acf.
AgM));},_Mark:function(D){var B;C.H3._Mark.call(this,D);if((B=this.K_)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcO)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ln)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMM={Init:function(aArg){var B;A.zX([this,this.ALB],[B=A._GetAutoObject(A.Device.
Device),B.AEY,B.AI7],0);A.pe([this,this.ALB],this);},AK4:function(){var Bf=null;
switch(A._GetAutoObject(A.Device.Device).Ab1){case 0:Bf=A._GetAutoObject(A.Device.
Helper).ADe();break;case 1:Bf=A._GetAutoObject(A.Device.Helper).AOV();break;case
2:Bf=A._GetAutoObject(A.Device.Helper).MB();break;default:throw new Error(A0D+A.
_GetAutoObject(A.Device.Device).Ab1.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Bf);},ALB:function(G){switch(A._GetAutoObject(A.Device.Device).Ab1){case
0:this.Dl(A.aaR(A.acf.ASp));break;case 1:this.Dl(A.aaR(A.acf.BkW));break;case 2:
this.Dl(A.aaR(A.acf.Av$));break;default:A.ab5("%s",A0D+A._GetAutoObject(A.Device.
Device).Ab1.toFixed());}},_Init:function(aArg){C.AmB._Init.call(this,aArg);this.
__proto__=C.AMM;this.BnL(C.APR);this.Ek.Ab9(A._NewObject(C.APG,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ASk={AAy:0,Adk:null
,Au7:null,BeM:0,A4p:0,A3j:0,Init:function(aArg){this.BeM=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adk=A._GetAutoObject(A.Device.Device).An.Filter;this.AAy=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A3j=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LU:function(G){A._GetAutoObject(A.Device.Helper).W.AnK(this.AAy);A._GetAutoObject(
A.Device.Helper).W.Ae7(true);switch(this.A3j){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AyP,this.A3j);}},Ew:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adk);if(!!this.A4p)this.Bhl();},Agj:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bhl:function(){var At8=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LZ(0,this.BeM);At8.E3(Ad,A._GetAutoObject(
A.Device.Device).An);At8.AwH(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At8.
Ar3(false);At8.AwW(At8.LactationNumber+1);At8.Ci(A._GetAutoObject(A.Device.Device
).An);},Ap_:function(G){this.A4p++;var ByU=A._GetAutoObject(A.Device.Converter).
Bh5(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A4p<ByU)&&(A._GetAutoObject(
A.Device.Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).AY(59,true,A.jV,0,[this,this.Vr]);else this.BdJ(
this);},Vr:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&(Ar.PopupState===8))this.BdJ(this);else if(!!Ar&&(Ar.PopupState===7))this.
ABd(this);},ABd:function(G){var B;var Ih=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var AfZ=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Ph=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AKa=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Au7)(B=this.Au7
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(Ih);A._GetAutoObject(
A.Device.Helper).W.Akw(AfZ);A._GetAutoObject(A.Device.Helper).W.N7(Bv);A._GetAutoObject(
A.Device.Helper).W.Q8(Ph);A._GetAutoObject(A.Device.Helper).W.Aky(AKa);},BdJ:function(
G){this.Bhl();A._GetAutoObject(C.A7).FB();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adk);},A_o:function(E){if(A.aa0(this.Au7,E))return;this.Au7=E;},_Init:function(
aArg){this.__proto__=C.ASk;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adk)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AM2={Init:function(aArg){
var B;A.zX([this,this.Be9],[B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0E],0);
this.Be9(this);},Ci:function(){A.ab5("%s",Btx);},E3:function(AcY){C.VF.E3.call(this
,AcY);var O;for(O=16;O>0;O--)this.Ig.Set(O,this.Ig.Get(O-1));this.Ig.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Bty);},AEa:function(Eh){switch(Eh){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Be9:
function(G){this.E3(A._GetAutoObject(A.Device.Device).AuM);A.we(this,0);},_Init:
function(aArg){C.VF._Init.call(this,aArg);this.__proto__=C.AM2;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.Au0={_Init:function(){C.
AM2._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JQ={C8:null,V:null,A8e:true,T:function(E){C.I9.T.call(this,E);this.
V.R(E);},Dg:function(E){C.I9.Dg.call(this,E);this.V.L(E);},BnQ:function(E){if(this.
A8e===E)return;this.A8e=E;this.C8.Z(E);},_Init:function(aArg){C.I9._Init.call(this
,aArg);A.acg.C8._Init.call(this.C8={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JQ;this.C8.DD(Btz);this.C8.DN(BtA);this.C8.L(A.jb.Bc);this.V.
A1(0x3F);this.V.H(BtB);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C8,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.HL));this.V.Cr(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I9;this.C8._Done();this.V._Done();C.
I9._Done.call(this);},_ReInit:function(){C.I9._ReInit.call(this);this.C8._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.HL));this.V.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I9._Mark.call(this,D);if((B=this.C8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APG={Ag0:null,Df:null,Abx:null,Fl:null,Fb:
null,Init:function(aArg){var B;A.zX([this,this.A43],[B=A._GetAutoObject(A.Device.
Device),B.AEY,B.AI7],0);A.pe([this,this.A43],this);},Dg:function(E){C.YC.Dg.call(
this,E);this.Df.L(E);},AE4:function(G){A.pe([this,this.A43],this);},ABf:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DM(1,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C5:function(G){var B;var F;C.YC.C5.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Df.Ax(A.aaL(A.ach.AjW));return;}var BzA=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DM(38,0)
)?B:null);var Bcj=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DM(14,0))?B:null);if(!!BzA)this.Df.Ax(A.aaL(A.ach.ADt));else if(
!!Bcj&&(Bcj.A5===1))this.Df.Ax(A.aaL(A.ach.AQj));else this.Df.Ax(A.aaL(A.ach.AjW
));},A43:function(G){var F;var Filter=null;var AOJ;switch(A._GetAutoObject(A.Device.
Device).Ab1){case 0:Filter=A._GetAutoObject(A.Device.Helper).ADe();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOV();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).MB();break;default:throw new Error(A0D+A._GetAutoObject(A.Device.
Device).Ab1.toFixed());}var Ai6=this.Akq();if(Ai6>0){AOJ=A._NewObject(A.Device.Int32FilterCriterion
,0);AOJ.Initialize(1,4,Ai6,false);Filter.CX(AOJ);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.Ae0(false);},Ov:function(G){if(!this.Akq())this.AW.Ae0(true
);this.Bb(this.AW);this.Am();},M5:function(G){this.AW.Ae0(false);this.Bb(this.Ag0
);this.Am();},_Init:function(aArg){C.YC._Init.call(this,aArg);C.Ark._Init.call(this.
Ag0={I:this},0);A.acg.Ap._Init.call(this.Df={I:this},0);C.Abx._Init.call(this.Abx={
I:this},0);A.Core.BF._Init.call(this.Fl={I:this},0);A.Core.BF._Init.call(this.Fb={
I:this},0);this.__proto__=C.APG;var B;this.H(BtC);this.AW.H(BtD);this.Ua.H(BtE);
this.Gw.Z(false);this.Ag0.H(BtF);this.Df.H(BtG);this.Abx.Au(A._GetAutoObject(A.Device.
Device).Ab1);this.Fl.Filter=6;this.Fb.Filter=7;this.J5(this.A$,-1);this.J(this.Ag0
,-1);this.J(this.Df,-1);this.Ag0.CL(this.Abx);this.Ag0.Au([B=this.Abx,B.B$,B.Cc]
);this.Df.Ax(A.aaL(A.ach.AjW));this.Fl.BG=[this,this.Ov];this.Fb.BG=[this,this.M5
];this.Init(aArg);},_Done:function(){this.__proto__=C.YC;this.Ag0._Done();this.Df.
_Done();this.Abx._Done();this.Fl._Done();this.Fb._Done();C.YC._Done.call(this);}
,_ReInit:function(){C.YC._ReInit.call(this);this.Ag0._ReInit();this.Df._ReInit();
this.Abx._ReInit();this.Fl._ReInit();this.Fb._ReInit();},_Mark:function(D){var B;
C.YC._Mark.call(this,D);if((B=this.Ag0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abx={AeW:null
,Init:function(aArg){var B;A.zX([this,this.BeO],[B=A._GetAutoObject(A.Device.Device
),B.AEY,B.AI7],0);A.pe([this,this.BeO],this);},Du:function(){return 3;},Au:function(
E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw3(E);},ADd:function(
aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.AeW.AsS(aIndex
);},ADf:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return this.
AeW.AsT(aIndex);},BeO:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ab1;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeW._Init.call(this.AeW={I:this},0);this.__proto__=C.Abx;this.BI.Set(0,
0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeW._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeW._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APR={Es:null,IU:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.Es={I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);this.__proto__=
C.APR;this.H(Oi);this.Background.H(Oi);this.Es.H(AIF);this.Es.R(A.aaR(A.acf.A7w)
);this.Es.A6(0x12);this.Es.L(A.jb.Text);this.IU.A1(0x3F);this.IU.H(AIG);this.IU.
Hp(5);this.IU.A6(0x14);this.IU.R(A.aaR(A.acf.AG7));this.IU.L(A.jb.Text);this.J(this.
Es,0);this.J(this.IU,0);this.Es.S(A.aaL(A.fl.Af));this.Es.A0(A.aaL(A.fl.HL));this.
Es.Cr(A.aaL(A.fl.Bh));this.IU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Es._Done();this.IU._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Es._ReInit();this.IU._ReInit();this.Es.R(A.aaR(A.acf.
A7w));this.IU.R(A.aaR(A.acf.AG7));this.Es.S(A.aaL(A.fl.Af));this.Es.A0(A.aaL(A.fl.
HL));this.Es.Cr(A.aaL(A.fl.Bh));this.IU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J8:null,BgU:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bfy(this);else A._GetAutoObject(A.Device.Device).AY(63,true,A.
jV,0,[this,this.Vr]);},Bfy:function(G){A._GetAutoObject(C.A7).FB();},Vr:function(
G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!Ar&&(Ar.Id===63)
)&&(Ar.PopupState===7))this.Bfy(this);},_Init:function(aArg){C.Mo._Init.call(this
,aArg);A.acg.Text._Init.call(this.J8={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APF);this.Jl.H(BtH);this.Jl.AkG(2);this.AcD.Z(false);this.AR1=12;this.
Number.H(BtI);this.Number.R(A.aaR(A.acf.A$S));this.A5x=false;this.J8.H(BtJ);this.
J8.Hp(5);this.J8.KX(true);this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.
aaR(A.acf.AB0));this.J8.L(A.jb.Text);this.J5(this.Jl,-1);this.J5(this.IZ,-1);this.
J5(this.AcD,-1);this.J(this.J8,0);this.J8.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mo;this.J8._Done();C.Mo._Done.call(this);},_ReInit:function(){C.Mo._ReInit.
call(this);this.J8._ReInit();this.Number.R(A.aaR(A.acf.A$S));this.J8.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AB0));this.J8.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mo._Mark.call(this,D);if((B=this.J8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APF={_Init:function(aArg){C.Aq7.
_Init.call(this,aArg);this.__proto__=C.APF;this.DS.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Jl={AbS:null,AbR:null,AbQ:null,QK:null,CountryToString:null,AsV:0,CQ:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QK.R(this.CountryToString.
LA(A._GetAutoObject(A.Device.Converter).A7U(A._GetAutoObject(A.Device.Device).Language
))+BtK);},AkG:function(E){if(this.AsV===E)return;this.AsV=E;var bitmap=null;var A2n=
BtL;var A2m=null;var A2o=false;switch(E){case 0:bitmap=A.aaL(A.ach.Ari);break;case
1:{bitmap=A.aaL(A.ach.AQY);A2n=BtM;A2m=A.aaL(A.fl.Ak);A2o=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQZ);A2n=BtN;A2m=A.aaL(A.fl.Bh);A2o=true;}break;default:throw new Error(
BtO+E.toFixed());}this.AbQ.Ax(bitmap);this.AbR.Ax(bitmap);this.AbS.Ax(bitmap);this.
QK.H(A.abJ(this.QK.M,A2n));this.QK.S(A2m);this.QK.Z(A2o);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbS={I:this},0);A.acg.Ap._Init.call(this.AbR={I:this},0);A.acg.Ap._Init.
call(this.AbQ={I:this},0);A.acg.Text._Init.call(this.QK={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jl;this.H(AIW);this.
AbS.A1(0x3);this.AbS.H(AIW);this.AbS.L(A.jb.Ib);this.AbS.Cw(2);this.AbR.A1(0x3);
this.AbR.H(AIW);this.AbR.L(A.jb.Aec);this.AbR.Cw(1);this.AbQ.A1(0x3);this.AbQ.H(
AIW);this.AbQ.L(A.jb.Text);this.AbQ.Cw(0);this.QK.A1(0x14);this.QK.H(BtP);this.QK.
L(0xFF020202);this.QK.Z(false);this.J(this.AbS,0);this.J(this.AbR,0);this.J(this.
AbQ,0);this.J(this.QK,0);this.AbS.Ax(A.aaL(A.ach.Ari));this.AbR.Ax(A.aaL(A.ach.Ari
));this.AbQ.Ax(A.aaL(A.ach.Ari));this.QK.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbS._Done();this.AbR._Done();this.AbQ._Done();this.QK._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbS._ReInit();this.AbR._ReInit();this.AbQ._ReInit(
);this.QK._ReInit();this.CountryToString._ReInit();this.QK.S(A.aaL(A.fl.Ak));this.
CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsV={Transponder:0,BGH:1,BGI:2};C.APB={Ap:null,Dg:function(E){C.BR.Dg.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APB;this.Ap.H(AyQ);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APs));},_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Im:0,AaN:4,Al_:function(G){C.Rc.Al_.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bej()){this.Im=A._GetAutoObject(A.Device.Helper).UH.Id;var AiB=A._GetAutoObject(
A.Device.Helper).A7S(this.Im,A._GetAutoObject(A.Device.Helper).W);if(AiB){A._GetAutoObject(
A.Device.Device).AY(21,true,A._GetAutoObject(A.Device.Converter).Rl(this.Im),0,[
this,this.Vr]);return;}AiB=A._GetAutoObject(A.Device.Helper).Bkl(this.Im,A._GetAutoObject(
A.Device.Helper).W);if(AiB&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Im)){A._GetAutoObject(A.Device.Device).AY(25,true,A._GetAutoObject(A.Device.
Converter).Rl(this.Im),0,[this,this.Vr]);return;}this.AaN=A._GetAutoObject(A.Device.
Helper).ARA(this.Im);switch(this.AaN){case 0:A._GetAutoObject(A.Device.Device).AY(
45,true,this.Im.toFixed().length.toFixed(),0,[this,this.Vr]);break;case 1:case 2:{
var BN=A._GetAutoObject(A.Device.Converter).Ax1(this.Im);A._GetAutoObject(A.Device.
Device).AY(46,true,BN.toFixed(),0,[this,this.Vr]);}break;case 3:this.BgM();break;
default:throw new Error(AIt+this.AaN.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A7).FB();},Vr:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!Ar)switch(Ar.PopupState){case 4:if(this.AaN===2)this.BgM();else A._GetAutoObject(
A.Device.Device).AhM();break;case 5:this.Ew(this);break;default:;}},BgM:function(
){A._GetAutoObject(A.Device.Helper).W.Nr(this.Im);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.P0(this.Im);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).AY(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.IP);this.Number.R(A.aaR(A.acf.A$M
));this.Jl.H(BtQ);this.IZ.H(BtR);this.AkG(1);this.N.CF=[this,this.Ew];this.N.C3(
A.aaL(A.ach.E2));},_ReInit:function(){C.Rc._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$M));},_className:"Application::SetSaveNaisIdScreen"};C.AOe={LU:function(
G){C.AqQ.LU.call(this,G);A.pe([this,this.BCo],this);},BCo:function(G){this.JN(this.
Ef);},_Init:function(aArg){C.AqQ._Init.call(this,aArg);this.__proto__=C.AOe;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UX={Animal:null,WhereAboutsToString:
null,Gm:function(aIndex){return this.WhereAboutsToString.BT(this.C7(aIndex));},Au:
function(E){C.Cm.Au.call(this,E);if(!!this.Animal)this.Animal.Nt(E);},A4$:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B$,this.Cc],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4$],[B=this.Animal,B.Awu,B.Nt],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4$],[B=this.Animal,B.Awu,B.Nt],0);A.pe([this,this.A4$],this);}
,_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UX;this.BI.Set(0,1);this.
BI.Set(1,2);this.BI.Set(2,3);this.BI.Set(3,4);this.BI.Set(4,5);},_Done:function(
){this.__proto__=C.Cm;this.WhereAboutsToString._Done();C.Cm._Done.call(this);},_ReInit:
function(){C.Cm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UY={Du:function(){return 6;},_Init:function(aArg){C.UX._Init.call(this,aArg);
this.__proto__=C.UY;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);this.BI.Set(
3,3);this.BI.Set(4,4);this.BI.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcO={Du:function(){return 5;},_Init:function(aArg){C.UX._Init.call(this,aArg
);this.__proto__=C.AcO;this.BI.Set(0,6);this.BI.Set(1,7);this.BI.Set(2,8);this.BI.
Set(3,9);this.BI.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdX={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bc4],[B=A._GetAutoObject(A.Device.
Device),B.ASI,B.A0F],0);A.pe([this,this.Bc4],this);},Du:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awx(E);},Bc4:function(G){
this.Q=A._GetAutoObject(A.Device.Device).AgC;A.abo([this,this.B$,this.Cc],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdX;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGV={FN:null
,EA:null,EartagNrAssignmentMode:null,Fl:null,Fb:null,HJ:null,AW:null,Kr:null,Nj:
null,A_:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hn){this.AW.FP(A.jb.CK);this.HJ.CV(A.jb.CK);this.Background.L(A.
jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.HJ.CV(A.jb.CU);this.Background.
L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hn){this.AW.FP(A.jb.CK);this.HJ.CV(
A.jb.CK);}else{this.AW.FP(A.jb.CU);this.HJ.CV(A.jb.CU);}this.Bb(null);}this.Nj.L(
this.V.AQ);},H1:function(G){C.Eg.H1.call(this,G);if(!this.A_)this.FW(this);else this.
Hf(this);},DK:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.
N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(
F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:this.FN.AkS((F=this.N,F[1].call(F[0])));}},FW:function(G){this.
Ex(1);},Hf:function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)
this.FN.AjC((F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(
this.A_>1)this.A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SV(2);else this.AW.SV(7);}break;default:throw new Error(
Ats+this.A_.toFixed());}this.DK(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Ov:function(G){this.ABo(2);},M5:function(G){this.ABo(7);},ABo:
function(GA){var B;var AzL=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!AzL){
var AAA=(A.Core.P.isPrototypeOf(B=this.QL(AzL,GA,0x15))?B:null);if(!!AAA){this.Bb(
AAA);return true;}}return false;},Af6:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nj.Ax(
A._GetAutoObject(A.Device.Converter).AmZ(2));break;case 1:this.Nj.Ax(A._GetAutoObject(
A.Device.Converter).AmZ((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
Ba9+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4I],this);},A4I:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kr.Ae2(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Anx,B.AoE]);this.Kr.
Ae2([B=A._GetAutoObject(A.Device.Device),B.AEU,B.AI4]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awl
,B.Ay0]);this.Kr.Ae2([B=A._GetAutoObject(A.Device.Device),B.ASN,B.A0G]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awm,B.Ay1]);this.Kr.Ae2([B=
A._GetAutoObject(A.Device.Device),B.ASO,B.A0H]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Anx,B.AoE]);this.Kr.Ae2([B=A._GetAutoObject(A.Device.Device),
B.AEU,B.AI4]);}break;default:throw new Error(BtS+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Ba9+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Uw:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.Af6],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af6],this.EA,0);if(!!
E)A.pe([this,this.Af6],this);},Akx:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af6],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af6],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af6],this);},Uq:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BF._Init.call(this.Fl={I:this},0);A.Core.
BF._Init.call(this.Fb={I:this},0);C.Ark._Init.call(this.HJ={I:this},0);C.AvW._Init.
call(this.AW={I:this},0);C.Au$._Init.call(this.Kr={I:this},0);A.acg.Ap._Init.call(
this.Nj={I:this},0);this.__proto__=C.AGV;var B;this.H(U4);this.V.As(false);this.
V.R(Atj);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fb.Filter=7;this.HJ.H(BtT);this.
AW.H(BtU);this.Nj.H(BtV);this.J(this.HJ,0);this.J(this.AW,0);this.J(this.Nj,0);this.
FN=A._NewObject(C.Aew,0);this.Fl.BG=[this,this.Ov];this.Fb.BG=[this,this.M5];this.
HJ.CL(this.Kr);this.HJ.Au([B=this.Kr,B.B$,B.Cc]);this.AW.Au([this,this.Uq,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fl._Done();this.Fb.
_Done();this.HJ._Done();this.AW._Done();this.Kr._Done();this.Nj._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fl._ReInit();this.Fb.
_ReInit();this.HJ._ReInit();this.AW._ReInit();this.Kr._ReInit();this.Nj._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AN6={Wz:
null,Zj:null,Zg:null,Uh:null,Init:function(aArg){this.Bb(this.Wz);},AEM:function(
G){var BeK=(C.Ann.isPrototypeOf(G)?G:null);if(!!BeK)A._GetAutoObject(A.Device.Device
).AY(BeK.AdF,true,A.jV,0,null);},DF:function(G){if((this.Cq.CP===7)&&(this.AV===
this.Uh))A._GetAutoObject(A.Device.Device).AY(10,true,A.jV,0,null);else if((this.
Cq.CP===6)&&(this.AV===this.Uh))A._GetAutoObject(C.A7).Cb(91);C.Ej.DF.call(this,
G);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Ann._Init.call(this.Wz={I:
this},0);C.Ann._Init.call(this.Zj={I:this},0);C.Ann._Init.call(this.Zg={I:this},
0);C.Ann._Init.call(this.Uh={I:this},0);this.__proto__=C.AN6;this.Dr(C.APg);this.
Wz.H(I1);this.Wz.Aj(true);this.Wz.T(A.aaR(A.acf.AhL));this.Wz.Bi(false);this.Wz.
AdF=79;this.Zj.H(Qf);this.Zj.Aj(true);this.Zj.T(A.aaR(A.acf.A$5));this.Zj.Bi(true
);this.Zj.AdF=77;this.Zg.H(Aan);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.A7r));this.
Zg.Bi(false);this.Zg.AdF=78;this.Uh.H(Alj);this.Uh.Aj(true);this.Uh.T(A.aaR(A.acf.
About));this.Uh.Bi(true);this.Uh.AdF=3;this.J(this.Wz,-1);this.J(this.Zj,-1);this.
J(this.Zg,-1);this.J(this.Uh,-1);this.Wz.AR=[this,this.AEM];this.Zj.AR=[this,this.
AEM];this.Zg.AR=[this,this.AEM];this.Uh.AR=[this,this.AEM];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wz._Done();this.Zj._Done();this.Zg._Done();this.
Uh._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.
Wz._ReInit();this.Zj._ReInit();this.Zg._ReInit();this.Uh._ReInit();this.Wz.T(A.aaR(
A.acf.AhL));this.Zj.T(A.aaR(A.acf.A$5));this.Zg.T(A.aaR(A.acf.A7r));this.Uh.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.Wz
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uh)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.APg={_Init:function(aArg){C.Ku.
_Init.call(this,aArg);this.__proto__=C.APg;this.Text.R(A.aaR(A.acf.Info));},_ReInit:
function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.Info));},_className:"Application::HeaderDeviceInfoMenu"
};C.AN4={FactoryResetScope:null,Uk:null,Ww:null,Um:null,Init:function(aArg){this.
Bb(this.Uk);A.pe([this,this.MS],this);},Bk6:function(G){switch(this.FactoryResetScope.
C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).AY(33,true
,A.jV,0,[this,this.A4r]);break;case 0:A._GetAutoObject(A.Device.Device).AY(7,true
,A.jV,0,[this,this.A4r]);break;case 2:A._GetAutoObject(A.Device.Device).AY(115,true
,A.jV,0,[this,this.A4r]);break;default:A.ab5("%s%i",BtW,this.FactoryResetScope.Q
);}},A4r:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!Ar&&(Ar.PopupState===7))switch(Ar.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bpb();A._GetAutoObject(A.Device.Device).AY(8,true,A.jV,0,null);A._GetAutoObject(
C.A7).Cb(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bpa();A._GetAutoObject(
A.Device.Device).Ar0(0);A._GetAutoObject(A.Device.Device).Ar1(0);A._GetAutoObject(
A.Device.Device).Ar2(0);A._GetAutoObject(A.Device.Device).Ar6(0);A._GetAutoObject(
A.Device.Device).Ar7(0);A._GetAutoObject(A.Device.Device).Ar8(0);A._GetAutoObject(
A.Device.Device).Uu(5);A._GetAutoObject(A.Device.Device).AwK(0);A._GetAutoObject(
A.Device.Device).AwL(0);A._GetAutoObject(A.Device.Device).AwM(0);A._GetAutoObject(
A.Device.Device).Aw4(1);A._GetAutoObject(A.Device.Device).Aw5(1);A._GetAutoObject(
A.Device.Device).Aw6(1);A._GetAutoObject(A.Device.Device).AY(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).Bo$();A._GetAutoObject(A.Device.
Device).AY(116,true,A.jV,0,null);A._GetAutoObject(C.A7).Cb(37);}break;default:A.
ab5("%s%e",AIu,Ar.Id);}},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Np._Init.call(this.Uk={I:this},0
);C.Np._Init.call(this.Ww={I:this},0);C.BX._Init.call(this.Um={I:this},0);this.__proto__=
C.AN4;var B;this.Dr(C.APe);this.Uk.H(I1);this.Uk.Aj(true);this.Uk.T(A.aaR(A.acf.
ACL));this.Uk.Bi(false);this.Uk.Ns(93);this.Ww.H(Qf);this.Ww.Aj(true);this.Ww.T(
A.aaR(A.acf.AdW));this.Ww.Bi(true);this.Ww.Ns(92);this.Um.H(Ba_);this.Um.Aj(true
);this.Um.Bmr(true);this.Um.T(A.aaR(A.acf.A6U));this.Um.Bi(false);this.J(this.Uk
,-1);this.J(this.Ww,-1);this.J(this.Um,-1);this.Uk.AR=[B=this.Uk,B.Nv];this.Ww.AR=[
B=this.Ww,B.Nv];this.Um.AR=[this,this.Bk6];this.Um.Au([B=this.FactoryResetScope,
B.B$,B.Cc]);this.Um.CL(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.FactoryResetScope._Done();this.Uk._Done();this.Ww._Done(
);this.Um._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Uk._ReInit();this.Ww._ReInit();this.Um._ReInit(
);this.Uk.T(A.aaR(A.acf.ACL));this.Ww.T(A.aaR(A.acf.AdW));this.Um.T(A.aaR(A.acf.
A6U));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ww)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Um)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.APe={_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APe;this.Text.R(A.aaR(A.acf.ACM
));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACM));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq9={QX:null,Wm:null
,_Init:function(aArg){C.T4._Init.call(this,aArg);C.CG._Init.call(this.QX={I:this
},0);C.CG._Init.call(this.Wm={I:this},0);this.__proto__=C.Aq9;this.QX.H(BtX);this.
QX.R(A.aaR(A.acf.A$X));this.QX.A6(0x12);this.QX.L(A.jb.Text);this.Wm.H(Ba4);this.
Wm.R(A.aaR(A.acf.An$));this.Wm.L(A.jb.Text);this.J(this.QX,0);this.J(this.Wm,0);
this.QX.S(A.aaL(A.fl.Af));this.QX.A0(A.aaL(A.fl.Ak));this.QX.Cr(A.aaL(A.fl.Bh));
this.Wm.S(A.aaL(A.fl.Af));this.Wm.A0(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.T4;this.QX._Done();this.Wm._Done();C.T4._Done.call(this);},_ReInit:function(){
C.T4._ReInit.call(this);this.QX._ReInit();this.Wm._ReInit();this.QX.R(A.aaR(A.acf.
A$X));this.Wm.R(A.aaR(A.acf.An$));this.QX.S(A.aaL(A.fl.Af));this.QX.A0(A.aaL(A.fl.
Ak));this.QX.Cr(A.aaL(A.fl.Bh));this.Wm.S(A.aaL(A.fl.Af));this.Wm.A0(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.T4._Mark.call(this,D);if((B=this.QX)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APM={QY:null,_Init:function(aArg){C.T4._Init.call(this,aArg);C.CG._Init.call(
this.QY={I:this},0);this.__proto__=C.APM;this.QY.H(BtY);this.QY.R(A.aaR(A.acf.Uo
));this.QY.A6(0x12);this.QY.L(A.jb.Text);this.J(this.QY,0);this.QY.S(A.aaL(A.fl.
Af));this.QY.A0(A.aaL(A.fl.Ak));this.QY.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.
__proto__=C.T4;this.QY._Done();C.T4._Done.call(this);},_ReInit:function(){C.T4._ReInit.
call(this);this.QY._ReInit();this.QY.R(A.aaR(A.acf.Uo));this.QY.S(A.aaL(A.fl.Af)
);this.QY.A0(A.aaL(A.fl.Ak));this.QY.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;
C.T4._Mark.call(this,D);if((B=this.QY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.AqC={IQ:null,AbJ:null,Ea:null
,Bl:function(aSize){C.Nb.Bl.call(this,aSize);this.IQ.H([this.Gz.M[2],0,this.Gz.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1
,aSize[1]]);this.AbJ.H([this.IQ.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Nb.
Ai.call(this,Ae);this.AbJ.L(this.Gz.AQ);this.IQ.L(this.Gz.AQ);},Ch:function(Ad){
C.Nb.Ch.call(this,Ad);if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Ih=this.AX.
Am0(Ad,14);var At1=this.AX.AOZ(Ad,7);this.IQ.Ax(A._GetAutoObject(A.Device.Converter
).AmZ(At1));this.AbJ.Ax(A._GetAutoObject(A.Device.Converter).A5C(Ih));this.Am();
}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Ap._Init.call(this.IQ={
I:this},0);A.acg.Ap._Init.call(this.AbJ={I:this},0);A.acg.AL._Init.call(this.Ea={
I:this},0);this.__proto__=C.AqC;this.IQ.H(Ba6);this.IQ.L(A.jb.Text);this.AbJ.H(BtZ
);this.AbJ.L(A.jb.Text);this.Ea.H(Bt0);this.Ea.L(A.jb.Bc);this.J(this.IQ,0);this.
J(this.AbJ,0);this.J(this.Ea,0);this.IQ.Ax(A.aaL(A.aci.TW));this.AbJ.Ax(A.aaL(A.
aci.TW));},_Done:function(){this.__proto__=C.Nb;this.IQ._Done();this.AbJ._Done();
this.Ea._Done();C.Nb._Done.call(this);},_ReInit:function(){C.Nb._ReInit.call(this
);this.IQ._ReInit();this.AbJ._ReInit();this.Ea._ReInit();},_Mark:function(D){var
B;C.Nb._Mark.call(this,D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANk={ZX:null,Bl:
function(aSize){C.Nb.Bl.call(this,aSize);this.ZX.H([this.Gz.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Nb.Ai.call(this,Ae);this.ZX.L(this.Gz.AQ);},Ch:function(
Ad){C.Nb.Ch.call(this,Ad);if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Js=this.
AX.KT(Ad,26);if(Js>0)this.ZX.R(A.ab2(Js.toFixed(),5));else this.ZX.R(Rs);this.Am(
);}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZX={I:this},0);this.__proto__=C.ANk;this.ZX.H(Bt1);this.J(this.ZX,0);this.ZX.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Nb;this.ZX._Done();C.Nb._Done.
call(this);},_ReInit:function(){C.Nb._ReInit.call(this);this.ZX._ReInit();this.ZX.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Nb._Mark.call(this,D);if((B=this.ZX
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ASc={Ap:null,Ai:function(Ae){C.AeX.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeX._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ASc;this.Text.H(Bt2);this.Ap.H(A0y);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Aff));},_Done:function(){this.__proto__=C.AeX;this.Ap._Done(
);C.AeX._Done.call(this);},_ReInit:function(){C.AeX._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeX._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.YB={Text:
null,Df:null,AP:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Nz],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI1],0);A.zV([this,this.Nz
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nz],this);},Dg:function(
E){C.BR.Dg.call(this,E);this.Df.L(E);this.Text.L(E);this.Gw.L(E);this.D2.Zz(E);}
,WN:function(E){C.BR.WN.call(this,E);this.D2.CV(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B_().toFixed());},Nz:function(s){this.DX(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C8._Init.call(this.A$={I:this},0);this.__proto__=C.YB;this.Text.H(Bt3);this.
Text.A6(0x11);this.Df.H(AyM);this.AP.DD(Ba0);this.AP.DN(Ba1);this.AP.L(A.jb.Bc);
this.Gw.H(Bt4);this.Gw.L(A.jb.CU);this.D2.A1(0x14);this.D2.H(Bt5);this.D2.Zz(A.jb.
Bm);this.D2.CV(A.jb.Rk);this.D2.Hp(2);this.A$.DD(Bt6);this.A$.DN(Bt7);this.A$.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Df,0);this.J(this.AP,0);this.J(this.Gw,
0);this.J(this.D2,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A0(
A.aaL(A.fl.Ak));this.Df.Ax(A.aaL(A.ach.AjW));this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.Df._Done();this.AP._Done();this.Gw._Done();this.D2._Done();this.A$.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.Df._ReInit();this.AP._ReInit();this.Gw._ReInit();this.D2._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A0(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acu={FN:null
,J3:null,J2:null,AkO:null,AkP:null,Q_:null,QJ:null,AbI:null,Wa:null,PQ:null,PR:null
,SE:null,Gx:null,Gy:null,JB:null,AlS:0,AlX:0,D7:0,DW:0,A_:0,Bl:function(aSize){var
B;this.DB.H([this.Hy.M[2]-10,this.Hy.M[1],this.H9.M[0]+10,this.Hy.M[3]]);this.DB.
AFC((B=this.DB.M)[2]-B[0]);this.DB.HK(this.DB.Gu,true,null,null);},Ai:function(Ae
){var B;C.BX.Ai.call(this,Ae);var Fv=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A_===1)||(this.A_===2)){var A1L=this.A2J(this.A_);if(!!
A1L){this.AbI.Z(true);this.AbI.H(A1L.M);this.AbI.L(this.V.AQ);this.Wa.Z(true);this.
Wa.H(A1L.M);}else{this.AbI.Z(false);this.Wa.Z(false);}this.Hy.Z(false);this.H9.Z(
false);}else{this.AbI.Z(false);this.Wa.Z(false);this.Hy.Z(Fv||GE);this.H9.Z(Fv||
GE);}},Qx:function(G){if(!!this.Q){if(this.FI===1)A.pe([this,this.Vj],this);else
if(this.FI===4)A.pe([this,this.A04],this);else if(this.FI===5)A.pe([this,this.A02
],this);}C.BX.Qx.call(this,G);},Ki:function(G){switch(this.A_){case 0:C.BX.Ki.call(
this,G);break;case 2:break;default:this.Adz(this);}},Kd:function(G){switch(this.
A_){case 0:C.BX.Kd.call(this,G);break;default:this.Ait(this);}},A2e:function(G){
var F;if(this.A_===1){var BP=this.D7;this.D7=this.D7-10;if(this.D7<this.AlX)this.
D7=this.AlX;if(this.D7<A._GetAutoObject(A.Device.Device).AcK)this.D7=A._GetAutoObject(
A.Device.Device).AcK;if(this.DW!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.
D7));A.abo(this.J3,0);}}if(this.A_===2){var BP=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[
0],this.DW));A.abo(this.J2,0);}}this.DK(this);this.Am();},A02:function(s){this.A2e(
s);},Al8:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A02],this
);this.Bo.As(false);}this.Bo.As(true);},A2Q:function(G){var F;if(this.A_===1){var
BP=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP
){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.A_===
2){var BP=this.DW;this.DW=this.DW+10;if(this.DW>this.AlS)this.DW=this.AlS;if(this.
DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);}}this.
DK(this);this.Am();},A04:function(s){this.A2Q(s);},Al9:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A04],this);this.Bo.As(false);}this.Bo.As(true
);return;},Vj:function(G){this.Ex(this.A_+1);},Adz:function(G){this.FI=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Vj],this);this.Bo.As(false);}this.Bo.As(true);}
,GH:function(G){},AfK:function(s){this.GH(s);},DK:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeD));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vj];}break;case 2:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkS((F=this.N,F[1].call(F[
0])));}},A_R:function(E){if(A.aaZ(this.J3,E))return;if(!!this.J3)A.z$([this,this.
A4d],this.J3,0);this.J3=E;if(!!this.J3)A.zX([this,this.A4d],this.J3,0);A.pe([this
,this.A4d],this);},A4d:function(G){var F;this.D7=(F=this.J3,F[1].call(F[0]));this.
Am();},A_Q:function(E){if(A.aaZ(this.J2,E))return;if(!!this.J2)A.z$([this,this.A4c
],this.J2,0);this.J2=E;if(!!this.J2)A.zX([this,this.A4c],this.J2,0);A.pe([this,this.
A4c],this);},A4c:function(G){var F;this.DW=(F=this.J2,F[1].call(F[0]));this.Am();
},FW:function(G){this.Ex(1);},Hf:function(G){this.Ex(0);},Ex:function(EO){var F;
if(!this.A_)this.FN.AjC((F=this.N,F[1].call(F[0])));this.A_=EO;if((this.A_<0)||(
this.A_>2))this.A_=0;this.DK(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=!!this.A_;this.
Am();},Ait:function(G){if(this.A_>1)this.Ex(this.A_-1);},A4q:function(G){},Ay9:function(
s){this.A4q(s);},A31:function(G){},Bce:function(s){this.A31(s);},A2J:function(AtA
){return null;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkO={I:this},0);A.acg.AL._Init.call(this.AkP={I:this},0);A.acg.AL._Init.call(
this.Q_={I:this},0);A.acg.Ap._Init.call(this.QJ={I:this},0);A.acg.AL._Init.call(
this.AbI={I:this},0);A.acg.BW._Init.call(this.Wa={I:this},0);A.acg.Text._Init.call(
this.PQ={I:this},0);A.acg.Text._Init.call(this.PR={I:this},0);A.acg.Text._Init.call(
this.SE={I:this},0);A.Core.BF._Init.call(this.Gx={I:this},0);A.Core.BF._Init.call(
this.Gy={I:this},0);A.Core.BF._Init.call(this.JB={I:this},0);this.__proto__=C.Acu;
this.H(AfH);this.T(A.aaR(A.acf.Ary));this.Background.H(AfH);this.V.H(BD);this.V.
R(A.aaR(A.acf.AHe));this.V.A6(0x12);this.AkO.H(Bt8);this.AkO.L(A.jb.Gk);this.AkP.
H(Bt9);this.AkP.L(A.jb.Ib);this.Q_.H(Bt_);this.Q_.L(A.jb.E1);this.QJ.H(Bt$);this.
AbI.H(Bua);this.Wa.H(Bub);this.Wa.Nu(3);this.Wa.L(A.jb.AV);this.Wa.Z(false);this.
PQ.H(Buc);this.PQ.Hp(8);this.PQ.Je(true);this.PQ.A6(0x11);this.PQ.L(0xFF000000);
this.PR.H(Bud);this.PR.Hp(8);this.PR.Je(true);this.PR.A6(0x11);this.PR.L(0xFF000000
);this.SE.H(Bue);this.SE.Je(false);this.SE.A6(0x12);this.SE.L(0xFF000000);this.Gx.
Filter=5;this.Gx.Bw=false;this.Gy.Filter=4;this.Gy.Bw=false;this.JB.Filter=1;this.
J5(this.V,-1);this.J5(this.DB,-2);this.J(this.AkO,-1);this.J(this.AkP,-1);this.J(
this.Q_,-1);this.J(this.QJ,-1);this.J(this.AbI,-1);this.J(this.Wa,-1);this.J(this.
PQ,-1);this.J(this.PR,0);this.J(this.SE,0);this.QJ.Ax(A.aaL(A.ach.ADR));this.PQ.
S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));this.SE.S(A.aaL(A.fl.Ak));this.Gx.BG=[
this,this.Al8];this.Gx.D1=[this,this.A02];this.Gy.BG=[this,this.Al9];this.Gy.D1=[
this,this.A04];this.JB.BG=[this,this.Adz];this.FN=A._NewObject(C.Aew,0);},_Done:
function(){this.__proto__=C.BX;this.AkO._Done();this.AkP._Done();this.Q_._Done();
this.QJ._Done();this.AbI._Done();this.Wa._Done();this.PQ._Done();this.PR._Done();
this.SE._Done();this.Gx._Done();this.Gy._Done();this.JB._Done();C.BX._Done.call(
this);},_ReInit:function(){C.BX._ReInit.call(this);this.AkO._ReInit();this.AkP._ReInit(
);this.Q_._ReInit();this.QJ._ReInit();this.AbI._ReInit();this.Wa._ReInit();this.
PQ._ReInit();this.PR._ReInit();this.SE._ReInit();this.Gx._ReInit();this.Gy._ReInit(
);this.JB._ReInit();this.T(A.aaR(A.acf.Ary));this.V.R(A.aaR(A.acf.AHe));this.PQ.
S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));this.SE.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BX._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.J3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.J2)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FM={X3:null,Acv:
null,Aod:0,Aoe:0,Du:function(){if(!this.X3)return 0;return this.X3.MM;},C7:function(
aIndex){if(!this.X3||(aIndex>=this.X3.MM))return-1;return this.X3.Get(aIndex);},
Gm:function(aIndex){return this.A7a().BT(this.C7(aIndex));},DZ:function(A8){if(!
this.X3)return-1;return this.X3.Avz(A8);},H8:function(){if(!this.X3)return-1;return this.
X3.H8();},AnO:function(E){if(this.Aod===E)return;this.Aod=E;A.pe([this,this.AV2]
,this);},A0X:function(Aq){this.AnO(Aq);},AnP:function(E){if(this.Aoe===E)return;
this.Aoe=E;A.pe([this,this.AV3],this);},A0Y:function(Aq){this.AnP(Aq);},AV3:function(
G){A.abo([this,this.ATb,this.A0Y],0);},AV2:function(G){A.abo([this,this.ATa,this.
A0X],0);},A7a:function(){return this.Acv;},ATa:function(){return this.Aod;},ATb:
function(){return this.Aoe;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acv={I:this},0);this.__proto__=C.FM;},_Done:function(
){this.__proto__=C.AC;this.Acv._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acv._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.X3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acv)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMQ={Init:
function(aArg){A.zV([this,this.BfL],A._GetAutoObject(A.Device.Helper).UO,0);A.zV([
this,this.BfJ],A._GetAutoObject(A.Device.Helper).UN,0);this.BfL(this);this.BfJ(this
);},Au:function(E){C.FM.Au.call(this,E);this.AnP(A._GetAutoObject(A.Device.Helper
).UO.Get(this.DZ(E)));this.AnO(A._GetAutoObject(A.Device.Helper).UN.Get(this.DZ(
E)));},AnO:function(E){if(this.Aod===E)return;C.FM.AnO.call(this,E);A._GetAutoObject(
A.Device.Helper).UN.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UN.
Ci();},AnP:function(E){if(this.Aoe===E)return;C.FM.AnP.call(this,E);A._GetAutoObject(
A.Device.Helper).UO.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UO.
Ci();},BfL:function(G){this.Aoe=A._GetAutoObject(A.Device.Helper).UO.Get(this.DZ(
this.Q));A.pe([this,this.AV3],this);},BfJ:function(G){this.Aod=A._GetAutoObject(
A.Device.Helper).UN.Get(this.DZ(this.Q));A.pe([this,this.AV2],this);},_Init:function(
aArg){C.FM._Init.call(this,aArg);this.__proto__=C.AMQ;this.X3=A._GetAutoObject(A.
Device.Helper).Ad2;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMR={AgH:null,ACd:0,ACb:0,Init:function(aArg){A.zV([this,this.BfY],A._GetAutoObject(
A.Device.Helper).AfB,0);A.zV([this,this.BfW],A._GetAutoObject(A.Device.Helper).AfA
,0);A.zV([this,this.BfU],A._GetAutoObject(A.Device.Helper).Afz,0);A.zV([this,this.
Bf0],A._GetAutoObject(A.Device.Helper).AfC,0);this.BfY(this);this.BfW(this);this.
BfU(this);this.Bf0(this);},Au:function(E){C.FM.Au.call(this,E);this.AnP(A._GetAutoObject(
A.Device.Helper).AfB.Get(this.DZ(E)));this.AnO(A._GetAutoObject(A.Device.Helper).
AfA.Get(this.DZ(E)));this.ATg(A._GetAutoObject(A.Device.Helper).Afz.Get(this.DZ(
E)));this.ATi(A._GetAutoObject(A.Device.Helper).AfC.Get(this.DZ(E)));},AnO:function(
E){if(this.Aod===E)return;C.FM.AnO.call(this,E);A._GetAutoObject(A.Device.Helper
).AfA.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfA.Ci();},AnP:function(
E){if(this.Aoe===E)return;C.FM.AnP.call(this,E);A._GetAutoObject(A.Device.Helper
).AfB.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfB.Ci();},A7a:function(
){return this.AgH;},BfY:function(G){this.Aoe=A._GetAutoObject(A.Device.Helper).AfB.
Get(this.DZ(this.Q));A.pe([this,this.AV3],this);},BfW:function(G){this.Aod=A._GetAutoObject(
A.Device.Helper).AfA.Get(this.DZ(this.Q));A.pe([this,this.AV2],this);},ATi:function(
E){if(this.ACd===E)return;this.ACd=E;A._GetAutoObject(A.Device.Helper).AfC.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfC.Ci();A.pe([this,this.Bav],this
);},ATg:function(E){if(this.ACb===E)return;this.ACb=E;A._GetAutoObject(A.Device.
Helper).Afz.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).Afz.Ci();A.
pe([this,this.Bau],this);},Bau:function(G){A.abo([this,this.A8Z,this.ATg],0);},Bav:
function(G){A.abo([this,this.A81,this.ATi],0);},BfU:function(G){this.ACb=A._GetAutoObject(
A.Device.Helper).Afz.Get(this.DZ(this.Q));A.pe([this,this.Bau],this);},Bf0:function(
G){this.ACd=A._GetAutoObject(A.Device.Helper).AfC.Get(this.DZ(this.Q));A.pe([this
,this.Bav],this);},A81:function(){return this.ACd;},A8Z:function(){return this.ACb;
},_Init:function(aArg){C.FM._Init.call(this,aArg);A.Device.AgH._Init.call(this.AgH={
I:this},0);this.__proto__=C.AMR;this.X3=A._GetAutoObject(A.Device.Helper).AgI;this.
Init(aArg);},_Done:function(){this.__proto__=C.FM;this.AgH._Done();C.FM._Done.call(
this);},_ReInit:function(){C.FM._ReInit.call(this);this.AgH._ReInit();},_Mark:function(
D){var B;C.FM._Mark.call(this,D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMx={RT:null,Init:function(
aArg){var B;A.zX([this,this.AiQ],[B=this.AnimalType,B.B$,B.Cc],0);A.pe([this,this.
AiQ],this);this.Bb(this.RT);},Bk:function(E){C.I_.Bk.call(this,E);this.RT.Bx(this.
Jw.AM);},AiQ:function(G){A._GetAutoObject(A.Device.Device).AwN(this.AnimalType.Q
);},_Init:function(aArg){C.I_._Init.call(this,aArg);C.TP._Init.call(this.RT={I:this
},0);this.__proto__=C.AMx;var B;this.Jw.As(false);this.Jw.Aj(false);this.Jw.Z(false
);this.RT.H(AIX);this.RT.Aj(true);this.RT.Nq(14);this.RT.Ahy(0);this.RT.OV(0);this.
J(this.RT,-4);this.RT.AR=[this,this.AAI];this.RT.Au([B=this.AnimalType,B.B$,B.Cc
]);this.RT.CL(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I_;this.RT._Done();C.I_._Done.call(this);},_ReInit:function(){C.I_._ReInit.call(
this);this.RT._ReInit();},_Mark:function(D){var B;C.I_._Mark.call(this,D);if((B=
this.RT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TP={Filter:null,Er:0,TableId:0,Operator:1,CQ:function(){var F;this.TA((F=this.
Filter,F[1].call(F[0])).DM(this.Er,this.Operator));},Bl:function(aSize){var B;C.
BX.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hy.H(AhY
);this.H9.H([aSize[0]-40,40,aSize[0],80]);this.DB.H([this.Hy.M[2]-5,this.Hy.M[1]
,this.H9.M[0]+5,this.Hy.M[3]]);this.DB.AFC((B=this.DB.M)[2]-B[0]);this.DB.HK(this.
DB.Gu,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mj],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mj
],E,0);A.pe([this,this.Mj],this);},Mj:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.TA((F=this.Filter,F[1].call(F[0])).DM(this.Er,this.
Operator));else this.TA(null);},Ahy:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mj],this);},Nq:function(E){if(this.Er===E)return;this.
Er=E;A.pe([this,this.Mj],this);},TA:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).Am1(this.TableId,this.Er));this.Am();},OV:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mj],this);},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.TP;this.H(K4);this.V.A6(0x11);this.V.Cr(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BX._ReInit.call(this);this.V.Cr(A.aaL(A.fl.Bh));this.
CQ();},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ASl={Gf:null,M0:null,DY:null,Y:null,Ef:null,Cn:null,CH:null,Db:null,Go:null,
Ee:null,C$:null,B0:null,Ay:null,Breed:null,Jm:null,AnimalType:null,Gender:null,Pt:
null,K3:null,Jk:null,KU:null,Amo:null,KP:0,Nc:0,A4z:false,Init:function(aArg){var
B;A.zX([this,this.BBg],[B=A._GetAutoObject(A.Device.Device),B.AEV,B.AI5],0);A.zV([
this,this.Aub],this.M0,0);A.zX([this,this.Aub],[B=A._GetAutoObject(A.Device.Device
),B.Awt,B.Ay5],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEV
,B.AI5],0);A.zV([this,this.GH],this.M0,0);A.zX([this,this.AiQ],this.B0.Q,0);A.pe([
this,this.AiQ],this);A.pe([this,this.Bfn],this);A.pe([this,this.Aub],this);A.pe([
this,this.GH],this);A.pe([this,this.A32],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.Aqc],this);A.pe([this,this.DK],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.AnC(A.jb.E1);else
this.Ef.AnC(A.jb.Gk);if(A._GetAutoObject(A.Device.Device).AeR){if(!!(F=this.Cn.Dm
,F[1].call(F[0])))this.Cn.AnC(A.jb.E1);else this.Cn.AnC(A.jb.Gk);}else this.Cn.AnC(
A.jb.Rk);A.pe([this,this.DK],this);},DF:function(G){var B;C.AB.DF.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},LU:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lm())A._GetAutoObject(A.Device.Device
).AY(41,true,A._GetAutoObject(A.Device.Device).An.HM().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gs();A._GetAutoObject(A.Device.Helper).Aqo(A._GetAutoObject(A.
Device.Helper).W);this.ApG();},CD:function(G){C.AB.CD.call(this,G);A._GetAutoObject(
A.Device.Device).AFJ(0);},E4:function(G){C.AB.E4.call(this,G);this.Jk.As(false);
A._GetAutoObject(A.Device.Device).UA(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.E7();A._GetAutoObject(C.A7).FB();},Fj:function(G){var B;this.Ay.
MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.
Y.Br[1]);},Aub:function(G){var F,Cu;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.Aqc(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aen(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).AY(21,true,A._GetAutoObject(A.Device.Converter
).Rl((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A3R]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A3Q],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeR)this.JN(this.Cn);}var BeD=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeR||!!(Cu=this.Cn.Dm,Cu[1].call(Cu[0])));if(this.M0.AOU()>0){if((
this.AV===this.Cn)&&BeD)this.Bb(this.Y.TX(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeR&&(this.AV===this.Cn))&&!!(F=this.Cn.Dm,F[1].call(F[0])))this.
JN(this.Ef);if(BeD)this.Bdp(this);},Adx:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},Ai2:function(){var F;this.Gf.Ci(A._GetAutoObject(A.Device.Device).An);
if(this.M0.N3(23)){if(A._GetAutoObject(A.Device.Device).Bt.Lm())A._GetAutoObject(
A.Device.Device).AY(50,true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),
0,null);else{var Md=A._GetAutoObject(A.Device.Device).An.LZ(0,this.Gf.Id);A._GetAutoObject(
A.Device.Device).SW(Md);var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(
this.Gf.Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(this.Gf.DateOfBirth);B2.
Ci(A._GetAutoObject(A.Device.Device).Bt);}}if(this.M0.N3(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var Md=A._GetAutoObject(A.Device.
Device).An.LZ(0,this.Gf.Id);A._GetAutoObject(A.Device.Device).SW(Md);var B2=A._NewObject(
A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(this.Gf.Id);B2.OnSetBodyWeight(this.
Nc);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WQ(65280);this.Jk.As(true
);(F=A._GetAutoObject(A.Device.Device),F.AFJ(F.Av3+1));this.A4z=true;A.pe([this,
this.Aqc],this);this.ApG();},GH:function(G){this.Cn.ATU(A._GetAutoObject(A.Device.
Device).AeR);A._GetAutoObject(A.Device.Helper).J6(this.B0,this.M0.N3(14));A._GetAutoObject(
A.Device.Helper).J6(this.C$,this.M0.N3(23));A._GetAutoObject(A.Device.Helper).J6(
this.CH,this.M0.N3(32));A._GetAutoObject(A.Device.Helper).J6(this.Ee,this.M0.N3(
18));A._GetAutoObject(A.Device.Helper).J6(this.Db,this.M0.N3(7));A._GetAutoObject(
A.Device.Helper).J6(this.Go,this.M0.N3(34));this.KU.Z(!this.M0.AOU());var O;var Aa=
null;var Apm=this.AV;for(O=0;O<this.M0.AfT.Ng();O++){Aa=this.Bz9(this.M0.AfT.OM(
O));if(!!Aa)this.ZL(Aa);}this.JN(Apm);A._GetAutoObject(A.Device.Helper).ANH(this.
Y);A.pe([this,this.A32],this);this.Am();},AeZ:function(E){if(this.KP===E)return;
this.KP=E;A.abo([this,this.Awf,this.AeZ],0);},Aht:function(E){if(this.Nc===E)return;
this.Nc=E;A.abo([this,this.Anv,this.Aht],0);},Bdp:function(G){this.Gf.Gs();A._GetAutoObject(
A.Device.Helper).Aqo(this.Gf);this.Gf.Q8(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gf.Nr(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gf.SP(A._GetAutoObject(
A.Device.Helper).AMy(0,this.Gf));this.Gf.Ae7(true);if(this.M0.N3(14))this.Gf.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.M0.N3(32))this.Gf.N7(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.M0.N3(7))this.Gf.J0(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.M0.N3(34))this.Gf.Nt(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alx=A._GetAutoObject(A.Device.Helper).A14(this.Gf,0,A._GetAutoObject(
A.Device.Device).An);if(!Alx)this.Ai2();else A._GetAutoObject(A.Device.Helper).AKx(
this.Gf,Alx,0,0,[this,this.ApM]);},ApG:function(){A._GetAutoObject(A.Device.Helper
).W.Nr(0);if(A._GetAutoObject(A.Device.Device).AeR)A._GetAutoObject(A.Device.Helper
).W.Q8(0);this.AeZ(0);this.Aht(0);this.JN(this.Ef);this.Am();},ApM:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case
22:case 21:case 48:this.ApG();break;case 43:this.JN(this.Ef);break;case 41:break;
default:A.ab5("%s%e",Ath,Ar.Id);}},JN:function(Ag){this.Bb(Ag);this.Y.HK(Ag,true
,null,null);this.Y.VG(null,null);},Bfn:function(G){this.Ee.Ahw(A._GetAutoObject(
A.Device.Helper).W.AhW(1));this.Aub(this);},AiQ:function(G){this.C$.Ahw(A._GetAutoObject(
A.Device.Helper).Abz(this.AnimalType.Q));},A32:function(G){var B;var BCm=this.Ay.
Background.Fp();var width=(BCm?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var XB=this.Y.TX(null,0x401);while(!!XB&&(((B=XB)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.O4.isPrototypeOf(XB)?XB:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));XB=this.Y.TX(XB,0x1);}},Bz9:function(Aar){var Aa=null;switch(Aar){case 14:Aa=
this.B0;break;case 32:Aa=this.CH;break;case 23:Aa=this.C$;break;case 7:Aa=this.Db;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Go;break;default:A.ab5("%s%e",Buf
,Aar);}return Aa;},BBg:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeR
)A._GetAutoObject(A.Device.Helper).W.Q8(0);else if(!(F=this.Cn.Dm,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q8(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmN(A._GetAutoObject(A.Device.Device).AdU));this.
Aub(this);},Aqc:function(G){var B;var AKA=A.jV;var Azq=A.jb.CK;var BdG=A.jb.AV;this.
Amo.AxR(this);if(this.A4z){this.A4z=false;AKA=A._GetAutoObject(A.Device.Helper).
MN(A.aaR(A.acf.Bp8),Pc,A._GetAutoObject(A.Device.Converter).Rl(this.Gf.NaisId));
A.pe([B=this.Amo,B.StartTimer],this);Azq=A.jb.E1;BdG=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKA=A.aaR(A.acf.AUT);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKA=A.aaR(A.
acf.Bpm);this.KU.T(AKA);this.KU.BmD(Azq);this.KU.A_e(BdG);},A3R:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X8();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X8();else if(Ar.PopupState===7){A._GetAutoObject(C.A7).Cb(76);A.
_GetAutoObject(A.Device.Device).X8();}}}else A._GetAutoObject(A.Device.Device).X8(
);},A3Q:function(G){A._GetAutoObject(A.Device.Device).Aqw();},DK:function(G){var
B;if(!this.M0.AOU()){this.N.Lj.CZ(255);if(this.AV===this.Ef){this.N.C4(A.aaL(A.ach.
Edit));this.N.Ca=[B=this.Ef,B.FW];}else if(this.AV===this.Cn){this.N.C4(A.aaL(A.
ach.Edit));this.N.Ca=[B=this.Cn,B.FW];}else{this.N.C4(null);this.N.Ca=null;}}else{
this.N.C4(A.aaL(A.ach.Am7));if((this.Ef.AqD===A.jb.Gk)||(this.Cn.AqD===A.jb.Gk)){
this.N.Lj.CZ(100);this.N.Ca=null;}else{this.N.Lj.CZ(255);this.N.Ca=[this,this.Bdp
];}}},Awf:function(){return this.KP;},Anv:function(){return this.Nc;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.AU7._Init.call(this.Ef={I:this},0);C.AU3._Init.
call(this.Cn={I:this},0);C.AxG._Init.call(this.CH={I:this},0);C.BX._Init.call(this.
Db={I:this},0);C.AsI._Init.call(this.Go={I:this},0);C.AkW._Init.call(this.Ee={I:
this},0);C.AkW._Init.call(this.C$={I:this},0);C.BX._Init.call(this.B0={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);
C.UY._Init.call(this.Jm={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.Na._Init.call(this.Pt={
I:this},0);A.Device.K3._Init.call(this.K3={I:this},0);A.Device.TQ._Init.call(this.
Jk={I:this},0);C.AHd._Init.call(this.KU={I:this},0);A.Core.Timer._Init.call(this.
Amo={I:this},0);this.__proto__=C.ASl;var B;this.Background.L(A.jb.CU);this.N.Z(true
);this.Ek.As(false);this.Dr(C.APA);this.DY.A1(0x3F);this.DY.H(Fe);this.DY.L(A.jb.
CK);this.Y.H(Fe);this.Y.JZ(9);this.Ef.H(AIX);this.Ef.Aj(true);this.Ef.T(A.aaR(A.
acf.ACW));this.Ef.ATU(true);this.Ef.AF2(false);this.Cn.H(Ba_);this.Cn.Aj(true);this.
Cn.T(A.aaR(A.acf.Aeh));this.Cn.ATU(true);this.Cn.AFX(true);this.CH.H(Atg);this.CH.
Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Db.H(Atg);this.Db.Aj(true);this.Db.T(
A.aaR(A.acf.Afr));this.Go.H(Ba$);this.Go.Aj(true);this.Go.T(A.aaR(A.acf.Jm));this.
Ee.H(Bug);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.Nc));this.Ee.Gb(1000);this.Ee.EV(
999000);this.Ee.Ahw(A._GetAutoObject(A.Device.Helper).Abz(this.AnimalType.Q));this.
C$.H(Ba$);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KP));this.C$.Gb(1000);this.C$.EV(
99000);this.C$.Ahw(A._GetAutoObject(A.Device.Helper).Abz(this.AnimalType.Q));this.
B0.H(Aou);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.Afw));this.Ay.H(Ix);this.Jk.B3=
false;this.Jk.Cx=true;this.Jk.HQ(1);this.Jk.Fq(1000);this.Jk.Ux(0);this.KU.H(Aao
);this.KU.Aj(true);this.KU.AnC(A.jb.Text);this.Amo.PZ(3000);this.J(this.DY,0);this.
J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CH,0);this.J(this.Db
,0);this.J(this.Go,0);this.J(this.Ee,0);this.J(this.C$,0);this.J(this.B0,0);this.
J(this.Ay,0);this.J(this.KU,0);this.N.CF=[this,this.Ew];this.N.Ce=[this,this.Adx
];this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeF));this.Y.Em=[this,this.Fj
];this.Ef.Gt([this,this.D_,this.GT]);this.Ef.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.Any,B.Nr]);this.Ef.AFx([this,this.Aub]);this.Ef.ATG([this,this.A3Q]);this.
Ef.ATH([this,this.A3R]);this.Cn.Gt([this,this.D_,this.GT]);this.Cn.Acb([B=A._GetAutoObject(
A.Device.Helper).W,B.Awi,B.Q8]);this.Cn.OO=[this,this.Bfn];this.Cn.ATG([this,this.
A3Q]);this.Cn.ATH([this,this.A3R]);this.CH.Gt([this,this.D_,this.GT]);this.CH.L5([
B=this.CH,B.FW]);this.CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc
]);this.CH.CL(this.Breed);this.CH.AnD(this.Pt);this.Db.Au([B=this.Gender,B.B$,B.
Cc]);this.Db.CL(this.Gender);this.Go.Gt([this,this.D_,this.GT]);this.Go.L5([B=this.
Go,B.FW]);this.Go.L8(A.aaL(A.ach.Edit));this.Go.Au([B=this.Jm,B.B$,B.Cc]);this.Go.
CL(this.Jm);this.Go.AnD(this.K3);this.Ee.Au([this,this.Anv,this.Aht]);this.C$.Au([
this,this.Awf,this.AeZ]);this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CL(this.
AnimalType);this.Ay.BnX([this,this.A32]);this.Breed.L6(A._GetAutoObject(A.Device.
Helper).W);this.Jm.L6(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.L6(A.
_GetAutoObject(A.Device.Helper).W);this.Gender.L6(A._GetAutoObject(A.Device.Helper
).W);this.Gf=A._NewObject(A.Device.Animal,0);this.M0=A._GetAutoObject(C.Amw);this.
Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.AS8,B.A0T];this.Amo.MJ=[this,this.Aqc
];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Y.
_Done();this.Ef._Done();this.Cn._Done();this.CH._Done();this.Db._Done();this.Go.
_Done();this.Ee._Done();this.C$._Done();this.B0._Done();this.Ay._Done();this.Breed.
_Done();this.Jm._Done();this.AnimalType._Done();this.Gender._Done();this.Pt._Done(
);this.K3._Done();this.Jk._Done();this.KU._Done();this.Amo._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit(
);this.Ef._ReInit();this.Cn._ReInit();this.CH._ReInit();this.Db._ReInit();this.Go.
_ReInit();this.Ee._ReInit();this.C$._ReInit();this.B0._ReInit();this.Ay._ReInit(
);this.Breed._ReInit();this.Jm._ReInit();this.AnimalType._ReInit();this.Gender._ReInit(
);this.Pt._ReInit();this.K3._ReInit();this.Jk._ReInit();this.KU._ReInit();this.Amo.
_ReInit();this.Ef.T(A.aaR(A.acf.ACW));this.Cn.T(A.aaR(A.acf.Aeh));this.CH.T(A.aaR(
A.acf.Breed));this.Db.T(A.aaR(A.acf.Afr));this.Go.T(A.aaR(A.acf.Jm));this.Ee.T(A.
aaR(A.acf.Nc));this.C$.T(A.aaR(A.acf.KP));this.B0.T(A.aaR(A.acf.Afw));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Gf)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.M0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DY)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K3)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Amo)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewAnimalsMassRecording"};C.AsH={Zq:null,_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Zq={I:this},0);this.__proto__=C.
AsH;this.N.CS(A.aaR(A.acf.A6K));this.Number.H(Buh);this.Jl.H(Bui);this.IZ.H(Buj);
this.AkG(2);this.Bdm=false;this.Bes=true;this.Bet=false;this.Zq.H(Buk);this.Zq.KX(
true);this.Zq.R(A.aaR(A.acf.A$4));this.Zq.L(A.jb.Text);this.J(this.Zq,0);this.N.
CF=null;this.N.Ca=[this,this.AI$];this.N.C3(null);this.Zq.S(A.aaL(A.fl.Af));},_Done:
function(){this.__proto__=C.SetTransponderScreen;this.Zq._Done();C.SetTransponderScreen.
_Done.call(this);},_ReInit:function(){C.SetTransponderScreen._ReInit.call(this);
this.Zq._ReInit();this.N.CS(A.aaR(A.acf.A6K));this.Zq.R(A.aaR(A.acf.A$4));this.Zq.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this
,D);if((B=this.Zq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.AD9={Cv:null,FP:function(E){if(this.Ne===E)return;C.HN.FP.call(this,E);this.
Cv.CV(E);},Yz:function(HC){var B6=null;switch(HC){case-1:case 0:B6=this.F_;break;
case 1:B6=this.Cv;break;case 2:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;
},_Init:function(aArg){C.HN._Init.call(this,aArg);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.AD9;this.H(Bul);this.Cv.H(BaN);this.F_.H(Bum);this.J(this.
Cv,-2);this.Cv.Dk=[this,this.GY];},_Done:function(){this.__proto__=C.HN;this.Cv.
_Done();C.HN._Done.call(this);},_ReInit:function(){C.HN._ReInit.call(this);this.
Cv._ReInit();},_Mark:function(D){var B;C.HN._Mark.call(this,D);if((B=this.Cv)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsI={G7:null
,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G7.M[0
]));},Ai:function(Ae){C.O1.Ai.call(this,Ae);if(this.Hn)this.G7.FP(A.jb.CK);else this.
G7.FP(A.jb.CU);},A2D:function(){this.Bb(this.G7);},_Init:function(aArg){C.O1._Init.
call(this,aArg);C.HN._Init.call(this.G7={I:this},0);this.__proto__=C.AsI;this.G7.
H(Bun);this.J(this.G7,0);this.G7.Au([this,this.ASY,this.AFQ]);},_Done:function(){
this.__proto__=C.O1;this.G7._Done();C.O1._Done.call(this);},_ReInit:function(){C.
O1._ReInit.call(this);this.G7._ReInit();},_Mark:function(D){var B;C.O1._Mark.call(
this,D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AxG={G7:null,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G7.M[0]));},Ai:function(Ae){C.O1.Ai.call(this,Ae);if(this.Hn)this.G7.FP(
A.jb.CK);else this.G7.FP(A.jb.CU);},A2D:function(){this.Bb(this.G7);},_Init:function(
aArg){C.O1._Init.call(this,aArg);C.AD9._Init.call(this.G7={I:this},0);this.__proto__=
C.AxG;this.G7.A1(0x18);this.G7.H(Buo);this.J(this.G7,0);this.G7.Au([this,this.ASY
,this.AFQ]);},_Done:function(){this.__proto__=C.O1;this.G7._Done();C.O1._Done.call(
this);},_ReInit:function(){C.O1._ReInit.call(this);this.G7._ReInit();},_Mark:function(
D){var B;C.O1._Mark.call(this,D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acw={ScreenTypeToString:
null,Du:function(){return 4;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BT(this.C7(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acw;this.BI.Set(0,3);this.BI.Set(1,35);this.BI.Set(2
,34);this.BI.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AWm={KU:null,HI:null,LY:null,IN:null,KL:A.jV,Aqt:false,ALu:false,A2W:false,Init:
function(aArg){var B;A.zX([this,this.BfT],[B=A._GetAutoObject(A.Device.Device),B.
Ut,B.Vb],0);A.pe([this,this.BfT],this);A.pe([this,this.Aqc],this);},WK:function(
G){this.Agz();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.Settings),[this,this.A37]);A.
_GetAutoObject(C.BS).Fz();this.AMl();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.LinkTransponder
));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.ARN)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DF:function(G){},H1:function(
G){if((this.Aqt===false)||!this.KL.length){C.M_.H1.call(this,G);return;}if(!this.
KL.length)this.LY.Mw=true;var FK=A._GetAutoObject(A.Device.AkK).Bf_(this.KL);this.
KL=A.jV;if(!FK){if((this.KL.length<13)&&!A._GetAutoObject(A.Device.Device).OZ)A.
_GetAutoObject(A.Device.Device).AY(105,true,A.jV,0,[this,this.SL]);else A._GetAutoObject(
A.Device.Device).AY(103,true,A.jV,0,[this,this.SL]);A.pe([this,this.WM],this);return;
}if(A._GetAutoObject(A.Device.Helper).BkB(FK)){A.pe([this,this.A$V],this);A.pe([
this,this.Aaq],this);}else{A._GetAutoObject(A.Device.Device).AY(117,true,A.jV,0,[
this,this.SL]);A.pe([this,this.WM],this);}},CD:function(G){C.M_.CD.call(this,G);
if(this.A2W){this.A2W=false;A.pe([this,this.A0Z],this);}},Agi:function(G){if(this.
Aqt&&(this.KL.length>0)){A.pe([this,this.Alo],this);return;}C.M_.Agi.call(this,G
);this.A$l(true);},AbA:function(){return C.ACo;},AbB:function(){return C.ADI;},Ra:
function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper
).A7p(Math.max(A._GetAutoObject(A.Device.Device).Av5,A._GetAutoObject(A.Device.Helper
).A7h(A._GetAutoObject(A.Device.Device).An))+1));},HS:function(G){C.M_.HS.call(this
,G);if((((A._GetAutoObject(A.Device.Converter).S8(A._GetAutoObject(A.Device.Device
).OZ)===10)&&this.ALu)&&!!this.Bg.AX)&&!this.Bg.AX.B_()){this.N.Ct(null);this.N.
E6(A.aaR(A.acf.No));this.N.Ce=[this,this.BBu];this.N.C4(null);this.N.CS(A.aaR(A.
acf.Yes));this.N.Ca=[this,this.BBv];}else if(A._GetAutoObject(A.Device.Helper).ARy(
)){this.N.Ct(A.aaL(A.ach.Arc));this.N.Ce=null;this.N.E6(A.jV);this.N.IS.CZ(100);
}else if(this.Aki()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajs(
A._GetAutoObject(A.Device.Converter).AMg(this.L3.ADj())));this.N.Ce=[this,this.Aaq
];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false);},Agl:function(){A._GetAutoObject(
C.A7).Cb(86);},ABg:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E$();var Aze=aFilter.DM(26,4);if(!!Aze){aFilter.Nw(Aze);A._GetAutoObject(
A.Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GU(0);}},A7f:function(){return C.
APH;},Bgx:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DM(26,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},A37:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A2W=true;A._GetAutoObject(C.A7).Cb(89);},ALB:function(G){if(A._GetAutoObject(
A.Device.Converter).S8(A._GetAutoObject(A.Device.Device).OZ)===10){if(this.ALu){
this.Dl(A.aaR(A.acf.Bo2));this.Bg.NU.S(A.aaL(A.fl.Bh));}else{this.Dl(A.aaR(A.acf.
AEG));this.Bg.NU.S(A.aaL(A.fl.Af));}}else this.Dl(A.aaR(A.acf.AEG));},A$l:function(
E){if(this.ALu===E)return;this.ALu=E;A.pe([this,this.AoF],this);A.pe([this,this.
ALB],this);},BBv:function(G){A._GetAutoObject(C.A7).Ace(90);},BBu:function(G){this.
A$l(false);},BfT:function(G){this.Bmv(A._GetAutoObject(A.Device.Helper).ARy());}
,Bmv:function(E){if(this.Aqt===E)return;this.Aqt=E;A.pe([this,this.Z9],this);A.pe([
this,this.Aqc],this);},Aqc:function(G){this.KU.Z(this.Aqt);if(this.Aqt)this.A_I(
Bba);else this.A_I(Ale);},AAO:function(G){if(this.KL.length<17)this.KL=this.KL+String.
fromCharCode(this.HI.Dy);},Awc:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===
0x0A))this.H1(this);else this.IN.Mw=true;},WM:function(G){A._GetAutoObject(A.Device.
Device).Aqw();A.ab5("%s",Bup);},SL:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(A.Device.Device).X8();
else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(A.Device.Device).X8();
else if(Ar.PopupState===7){A._GetAutoObject(C.A7).Cb(76);A._GetAutoObject(A.Device.
Device).X8();}}}else A._GetAutoObject(A.Device.Device).X8();},_Init:function(aArg
){C.M_._Init.call(this,aArg);C.AHd._Init.call(this.KU={I:this},0);A.Core.BF._Init.
call(this.HI={I:this},0);A.Core.BF._Init.call(this.LY={I:this},0);A.Core.BF._Init.
call(this.IN={I:this},0);this.__proto__=C.AWm;this.Dr(C.ADz);this.Dl(A.aaR(A.acf.
AEG));this.KU.H(Aou);this.KU.T(A.aaR(A.acf.AUT));this.KU.AnC(A.jb.Text);this.KU.
A_e(A.jb.AV);this.HI.Filter=143;this.LY.Filter=149;this.IN.Filter=145;this.J(this.
KU,0);this.ATC(A._GetAutoObject(C.Aya));this.HI.BG=[this,this.AAO];this.LY.BG=[this
,this.Alo];this.IN.BG=[this,this.Awc];this.Init(aArg);},_Done:function(){this.__proto__=
C.M_;this.KU._Done();this.HI._Done();this.LY._Done();this.IN._Done();C.M_._Done.
call(this);},_ReInit:function(){C.M_._ReInit.call(this);this.KU._ReInit();this.HI.
_ReInit();this.LY._ReInit();this.IN._ReInit();this.Dl(A.aaR(A.acf.AEG));this.KU.
T(A.aaR(A.acf.AUT));},_Mark:function(D){var B;C.M_._Mark.call(this,D);if((B=this.
KU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.LY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::YoungNoTransponderListScreen"};C.AWl={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AWl;this.K1.As(false);this.K1.
Aj(false);this.K1.Z(false);this.Bnx(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARq={Sx:null,Q:null,A8z:0,Ne:0,Init:function(aArg){this.ATF(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sx)this.Sx.Au(E);},ATF:function(
E){if(this.A8z===E)return;this.A8z=E;var X;switch(E){case 2:X=A._NewObject(C.HN,
0);break;case 3:X=A._NewObject(C.AD9,0);break;case 4:X=A._NewObject(C.ARn,0);break;
case 5:X=A._NewObject(C.ARo,0);break;case 6:X=A._NewObject(C.AvW,0);break;default:{
X=null;A.ab5("%s%i",Buq,E);}}this.Bnw(X);},Bnw:function(E){if(this.Sx===E)return;
if(!!this.Sx){this.Sx.Au(null);this.HR(this.Sx);}this.Sx=E;if(!!this.Sx){this.Sx.
Au(this.Q);this.J(this.Sx,0);}},FP:function(E){if(this.Ne===E)return;this.Ne=E;if(
!!this.Sx)this.Sx.FP(E);},SV:function(GA){if(!!this.Sx)this.Sx.SV(GA);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARq;this.H(Ayv);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sx)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARn={CW:null,Cv:null,FP:function(
E){if(this.Ne===E)return;C.HN.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);},Yz:function(
HC){var B6=null;switch(HC){case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;
case 2:B6=this.CW;break;case 3:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;
},_Init:function(aArg){C.HN._Init.call(this,aArg);C.DG._Init.call(this.CW={I:this
},0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARn;this.H(Bur);this.G3.
H(Aln);this.CW.H(BaO);this.Cv.H(BaP);this.F_.H(BaQ);this.J(this.CW,-2);this.J(this.
Cv,-2);this.CW.Dk=[this,this.GY];this.Cv.Dk=[this,this.GY];},_Done:function(){this.
__proto__=C.HN;this.CW._Done();this.Cv._Done();C.HN._Done.call(this);},_ReInit:function(
){C.HN._ReInit.call(this);this.CW._ReInit();this.Cv._ReInit();},_Mark:function(D
){var B;C.HN._Mark.call(this,D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.AC5={S9:null,Ai:function(Ae){C.Aby.Ai.call(this,Ae);this.S9.L(this.V.AQ);},_Init:
function(aArg){C.Aby._Init.call(this,aArg);C.CG._Init.call(this.S9={I:this},0);this.
__proto__=C.AC5;this.V.Z(false);this.AW.H(Bus);this.AW.ATF(4);this.S9.H(But);this.
S9.R(A.aaR(A.acf.Kq));this.S9.L(A.jb.Bm);this.J(this.S9,0);this.S9.S(A.aaL(A.fl.
Af));this.S9.A0(A.aaL(A.fl.Ak));this.S9.Cr(null);},_Done:function(){this.__proto__=
C.Aby;this.S9._Done();C.Aby._Done.call(this);},_ReInit:function(){C.Aby._ReInit.
call(this);this.S9._ReInit();this.S9.R(A.aaR(A.acf.Kq));this.S9.S(A.aaL(A.fl.Af)
);this.S9.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Aby._Mark.call(this,D);
if((B=this.S9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.L4={Y7:null,Ud:null,AQ:0,A7Q:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y7.L(this.AQ);this.Ud.L(this.AQ);},A_E:function(E){var B;if(this.A7Q===
E)return;this.A7Q=E;if(E){this.Y7.Z(true);this.Ud.DD([this.Ud.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y7.Z(false);this.Ud.DD([this.Ud.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C8._Init.call(
this.Y7={I:this},0);A.acg.C8._Init.call(this.Ud={I:this},0);this.__proto__=C.L4;
this.H(A0z);this.Y7.A1(0x2D);this.Y7.DD(Ah0);this.Y7.DN(Bbb);this.Y7.L(A.jb.Text
);this.Ud.A1(0x36);this.Ud.DD(Bbb);this.Ud.DN(Buu);this.Ud.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y7,0);this.J(this.Ud,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y7._Done();this.Ud._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y7._ReInit();this.Ud._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Ud)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUK={SC:null,PJ:null,Db:null,B0:null,CH:null,GQ:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pt:null,UY:null,K3:null,Init:function(aArg){A.zX([this
,this.AuV],this.B0.Q,0);A.zX([this,this.ANd],this.CH.Q,0);A.zX([this,this.Brq],this.
SC.Q,0);A.zX([this,this.Avx],this.Db.Q,0);A.zX([this,this.AWi],this.GQ.Q,0);},AuV:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.B0.Q,F[1].call(F[
0])));},Brq:function(G){var F;A._GetAutoObject(A.Device.Device).Axn((F=this.SC.Q
,F[1].call(F[0])));},Avx:function(G){var F;A._GetAutoObject(A.Device.Device).J0((
F=this.Db.Q,F[1].call(F[0])));},AWi:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GQ.Q,F[1].call(F[0])));},ANd:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.
call(this,aArg);C.BX._Init.call(this.SC={I:this},0);C.Iv._Init.call(this.PJ={I:this
},0);C.BX._Init.call(this.Db={I:this},0);C.BX._Init.call(this.B0={I:this},0);C.AxG.
_Init.call(this.CH={I:this},0);C.AsI._Init.call(this.GQ={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.Na._Init.call(this.Pt={I:this},0);C.UY._Init.call(this.UY={I:
this},0);A.Device.K3._Init.call(this.K3={I:this},0);this.__proto__=C.AUK;var B;this.
Jf((A.aaR(A.acf.Asv)+AyI)+A.aaR(A.acf.AjH));this.SC.H(Ah3);this.SC.Aj(true);this.
SC.T(A.aaR(A.acf.BaF));this.SC.Bi(true);this.SC.Bx(0);this.PJ.H(Ayt);this.PJ.Aj(
true);this.PJ.Z(true);this.PJ.T(A.aaR(A.acf.AdU));this.PJ.Gb(0);this.PJ.EV(99);this.
PJ.IW(A.aaR(A.acf.Kq));this.PJ.Jg(A.aaR(A.acf.GL));this.Db.H(Aao);this.Db.Aj(true
);this.Db.T(A.aaR(A.acf.Afr));this.Db.Bi(true);this.Db.Bx(0);this.B0.H(Alk);this.
B0.Aj(true);this.B0.T(A.aaR(A.acf.Afw));this.B0.Bi(true);this.B0.Bx(0);this.CH.H(
Ah4);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.CH.Bi(false);this.GQ.H(
Ah4);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jm));this.GQ.Bi(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.UY.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.SC,0);this.
J(this.PJ,0);this.J(this.Db,0);this.J(this.B0,0);this.J(this.CH,0);this.J(this.GQ
,0);this.SC.Au([B=this.WeightRecordingScope,B.B$,B.Cc]);this.SC.CL(this.WeightRecordingScope
);this.PJ.Au([B=A._GetAutoObject(A.Device.Device),B.A8S,B.Bby]);this.Db.Au([B=this.
Gender,B.B$,B.Cc]);this.Db.CL(this.Gender);this.B0.Au([B=this.AnimalType,B.B$,B.
Cc]);this.B0.CL(this.AnimalType);this.CH.Gt([this,this.D_,this.GT]);this.CH.L5([
B=this.CH,B.FW]);this.CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc
]);this.CH.CL(this.Breed);this.CH.AnD(this.Pt);this.GQ.Gt([this,this.D_,this.GT]
);this.GQ.L5([B=this.GQ,B.FW]);this.GQ.L8(A.aaL(A.ach.Edit));this.GQ.Au([B=this.
UY,B.B$,B.Cc]);this.GQ.CL(this.UY);this.GQ.AnD(this.K3);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cg;this.SC._Done();this.PJ._Done();this.Db._Done();this.
B0._Done();this.CH._Done();this.GQ._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pt._Done();this.UY._Done();this.
K3._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
SC._ReInit();this.PJ._ReInit();this.Db._ReInit();this.B0._ReInit();this.CH._ReInit(
);this.GQ._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pt._ReInit();this.UY._ReInit();
this.K3._ReInit();this.Jf((A.aaR(A.acf.Asv)+AyI)+A.aaR(A.acf.AjH));this.SC.T(A.aaR(
A.acf.BaF));this.PJ.T(A.aaR(A.acf.AdU));this.PJ.IW(A.aaR(A.acf.Kq));this.PJ.Jg(A.
aaR(A.acf.GL));this.Db.T(A.aaR(A.acf.Afr));this.B0.T(A.aaR(A.acf.Afw));this.CH.T(
A.aaR(A.acf.Breed));this.GQ.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Cg._Mark.
call(this,D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UY)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.K3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUJ={QS:null,FD:null,Ir:null,Da:null,Dn:null,EL:null,AutoRegistrationMode:null
,AdX:null,Init:function(aArg){var B;A.zX([this,this.BhV],this.QS.Q,0);A.zX([this
,this.Be_],[B=A._GetAutoObject(A.Device.Device),B.ASI,B.A0F],0);A.zX([this,this.
Ady],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_],0);A.zX([this,this.Ady],[B=
A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.pe([this,this.Be_],this);A.pe([
this,this.Ady],this);},BhV:function(G){var F;A._GetAutoObject(A.Device.Device).AwA((
F=this.QS.Q,F[1].call(F[0])));},Be_:function(G){switch(A._GetAutoObject(A.Device.
Device).AgC){case 0:A._GetAutoObject(A.Device.Helper).J6(this.Ir,true);break;case
1:A._GetAutoObject(A.Device.Helper).J6(this.Ir,false);break;default:throw new Error(
Buv+A._GetAutoObject(A.Device.Device).AgC.toFixed());}},Ady:function(G){var F,Cu;
if(((F=this.Da.Q,F[1].call(F[0]))+(Cu=this.Dn.Q,Cu[1].call(Cu[0])))>12)(Cu=this.
Dn.Q,Cu[2].call(Cu[0],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.BX._Init.call(this.QS={I:this},0);C.BX._Init.call(this.
FD={I:this},0);C.AGV._Init.call(this.Ir={I:this},0);C.Iv._Init.call(this.Da={I:this
},0);C.Iv._Init.call(this.Dn={I:this},0);C.Av6._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdX._Init.
call(this.AdX={I:this},0);this.__proto__=C.AUJ;var B;this.Jf(A.aaR(A.acf.Aqs));this.
QS.H(AIX);this.QS.Aj(true);this.QS.T(A.aaR(A.acf.Aqs));this.QS.Bi(false);this.QS.
Gb(-1);this.QS.EV(1);this.FD.H(U7);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.
aaR(A.acf.Aqp));this.FD.Bi(true);this.Ir.H(Aao);this.Ir.Aj(true);this.Ir.Z(true);
this.Ir.T(A.aaR(A.acf.AEE));this.Ir.Bi(true);this.Da.H(Alk);this.Da.Aj(true);this.
Da.Z(true);this.Da.T(A.aaR(A.acf.AqM));this.Da.Bi(false);this.Da.Gb(2);this.Da.EV(
6);this.Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(Ah4);this.Dn.
Aj(true);this.Dn.T(A.aaR(A.acf.Zs));this.Dn.Bi(true);this.Dn.Gb(0);this.Dn.EV(12
);this.Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Buw);this.EL.
As(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.Ar9(A.aaR(A.acf.Aqr));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QS,0);this.
J(this.FD,0);this.J(this.Ir,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL
,0);this.QS.Au([B=this.AutoRegistrationMode,B.B$,B.Cc]);this.QS.CL(this.AutoRegistrationMode
);this.FD.Au([B=this.AdX,B.B$,B.Cc]);this.FD.CL(this.AdX);this.Ir.Uw([B=A._GetAutoObject(
A.Device.Device),B.WJ,B.A0I]);this.Ir.Akx([B=A._GetAutoObject(A.Device.Device),B.
Awk,B.AyZ]);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.Dn.
Au([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.EL.DC(A.aaL(A.ach.AjY));
this.EL.OU([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.EL.PY([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.QS._Done();this.FD._Done();this.Ir._Done();this.Da._Done();this.Dn._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdX._Done();C.Cg._Done.
call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.QS._ReInit();this.FD.
_ReInit();this.Ir._ReInit();this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdX._ReInit();this.Jf(A.aaR(A.acf.Aqs
));this.QS.T(A.aaR(A.acf.Aqs));this.FD.T(A.aaR(A.acf.Aqp));this.Ir.T(A.aaR(A.acf.
AEE));this.Da.T(A.aaR(A.acf.AqM));this.Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.
acf.Ez));this.Dn.T(A.aaR(A.acf.Zs));this.Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(
A.acf.Ez));this.EL.Ar9(A.aaR(A.acf.Aqr));},_Mark:function(D){var B;C.Cg._Mark.call(
this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ir)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVO={OP:null,FD:null,Ir:null,Da:null,Dn:null,EL:null,Afv:null,Init:function(
aArg){var B;A.zX([this,this.BfN],[B=A._GetAutoObject(A.Device.Device),B.AS_,B.A0V
],0);A.zX([this,this.Ady],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_],0);A.zX([
this,this.Ady],[B=A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.pe([this,this.
BfN],this);A.pe([this,this.Ady],this);},BfN:function(G){var ALg=false;var AaW=false;
switch(A._GetAutoObject(A.Device.Device).Ak6){case 0:{ALg=false;AaW=false;}break;
case 1:{ALg=true;AaW=false;}break;case 2:{ALg=false;AaW=true;}break;default:throw new
Error(Bux+A._GetAutoObject(A.Device.Device).Ak6.toFixed());}A._GetAutoObject(A.Device.
Helper).J6(this.Ir,ALg);A._GetAutoObject(A.Device.Helper).J6(this.Da,AaW);A._GetAutoObject(
A.Device.Helper).J6(this.Dn,AaW);A._GetAutoObject(A.Device.Helper).J6(this.EL,AaW
);},Ady:function(G){var F,Cu;if(((F=this.Da.Q,F[1].call(F[0]))+(Cu=this.Dn.Q,Cu[
1].call(Cu[0])))>12)(Cu=this.Dn.Q,Cu[2].call(Cu[0],12-(F=this.Da.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Iv._Init.call(this.OP={
I:this},0);C.BX._Init.call(this.FD={I:this},0);C.AGV._Init.call(this.Ir={I:this}
,0);C.Iv._Init.call(this.Da={I:this},0);C.Iv._Init.call(this.Dn={I:this},0);C.Av6.
_Init.call(this.EL={I:this},0);C.Afv._Init.call(this.Afv={I:this},0);this.__proto__=
C.AVO;var B;this.Jf(A.aaR(A.acf.LinkTransponder));this.OP.H(AIX);this.OP.Aj(true
);this.OP.Z(true);this.OP.T(A.aaR(A.acf.A7_));this.OP.Bi(false);this.OP.Gb(1);this.
OP.EV(365);this.OP.IW(A.aaR(A.acf.Kq));this.OP.Jg(A.aaR(A.acf.GL));this.FD.H(U7);
this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqp));this.FD.Bi(true);this.
Ir.H(Aao);this.Ir.Aj(true);this.Ir.Z(true);this.Ir.T(A.aaR(A.acf.AEE));this.Ir.Bi(
false);this.Da.H(Alk);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.AqM
));this.Da.Bi(false);this.Da.Gb(2);this.Da.EV(6);this.Da.IW(A.aaR(A.acf.OK));this.
Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(Ah4);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.Zs)
);this.Dn.Bi(true);this.Dn.Gb(0);this.Dn.EV(12);this.Dn.IW(A.aaR(A.acf.OK));this.
Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Aot);this.EL.As(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar9(A.aaR(A.acf.Aqr));this.J(this.OP,0);this.J(this.FD,0);this.
J(this.Ir,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL,0);this.OP.Au([B=
A._GetAutoObject(A.Device.Device),B.A9n,B.BbP]);this.FD.Au([B=this.Afv,B.B$,B.Cc
]);this.FD.CL(this.Afv);this.Ir.Uw([B=A._GetAutoObject(A.Device.Device),B.WJ,B.A0I
]);this.Ir.Akx([B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyZ]);this.Da.Au([B=
A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.Dn.Au([B=A._GetAutoObject(A.Device.
Device),B.Us,B.U$]);this.EL.DC(A.aaL(A.ach.AjY));this.EL.OU([B=A._GetAutoObject(
A.Device.Device),B.Ur,B.U_]);this.EL.PY([B=A._GetAutoObject(A.Device.Device),B.Us
,B.U$]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.OP._Done();this.
FD._Done();this.Ir._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.
Afv._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
OP._ReInit();this.FD._ReInit();this.Ir._ReInit();this.Da._ReInit();this.Dn._ReInit(
);this.EL._ReInit();this.Afv._ReInit();this.Jf(A.aaR(A.acf.LinkTransponder));this.
OP.T(A.aaR(A.acf.A7_));this.OP.IW(A.aaR(A.acf.Kq));this.OP.Jg(A.aaR(A.acf.GL));this.
FD.T(A.aaR(A.acf.Aqp));this.Ir.T(A.aaR(A.acf.AEE));this.Da.T(A.aaR(A.acf.AqM));this.
Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(A.acf.Zs));this.
Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.Ar9(A.aaR(A.acf.Aqr));
},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afv={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bhb],[B=A._GetAutoObject(A.Device.Device),B.AS_,B.A0V],0);A.pe([
this,this.Bhb],this);},Du:function(){return 3;},Gm:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axi(E);},Bhb:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak6;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afv;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Ji={B7:null,I2:null,Cq:null,AmE:null,Sl:null,Anp:null,AjE:null,Text:null,CY:
null,D6:0,LF:false,Ai:function(Ae){var B;A.acn.Ji.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.I2.As(true);else{this.I2.As(false);this.CY.Z(false);}},A45:function(G
){var B;var Be=this.Text.M;var NG=0;var NH=0;if(this.CY.Et[0]<Be[0])NG=Be[0]-this.
CY.Et[0];if(this.CY.Et[0]>Be[2])NG=Be[2]-this.CY.Et[0];if(this.CY.Et[1]<Be[1])NH=
Be[1]-this.CY.Et[1];if(this.CY.ED[1]>Be[3])NH=Be[3]-this.CY.ED[1];if(!!NG||!!NH)
this.Text.Gc(A.abf(this.Text.Br,[NG,NH]));NG=this.Text.Br[0];NH=this.Text.Br[1];
var C6=[(B=this.Text.Dd())[2]-B[0],B[3]-B[1]];if(C6[0]<=((B=this.Text.M)[2]-B[0]
))NG=0;if(C6[1]<=((B=this.Text.M)[3]-B[1]))NH=0;this.Text.Gc([NG,NH]);},Amr:function(
G){if(!this.B7)return;var A4v=this.Text.AG8(this.D6);var pos=this.Text.Afi(A4v);
this.CY.DN(A.abe(pos,[0,this.B7.Ascent]));this.CY.DD(A.abf(pos,[0,this.B7.Descent
]));if(this.I2.Bw){this.I2.As(false);this.I2.As(true);}if(this.LF){A.pe([this,this.
A45],this);this.LF=false;}},AAM:function(G){if(!this.B7)return;var EH=this.Text.
AG8(this.D6);if(this.Cq.CP===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnW(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ADl(EH[1]).length,EH[1]];}}if(this.Cq.CP===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnW(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CP===4){var pos=this.Text.Afi(EH);var AaV=(this.B7.Ascent+this.B7.
Descent)+this.B7.Leading;EH=this.Text.AUl(A.abe(pos,[0,AaV]));}if(this.Cq.CP===5
){var pos=this.Text.Afi(EH);var AaV=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;
EH=this.Text.AUl(A.abf(pos,[0,AaV]));}var Vp=this.Text.AnW(EH);var IC=this.Text.
String.charCodeAt(Vp)||0;if(((IC===0x5E)||(IC===0x7E))||(IC===0x25))Vp=Vp-1;if(Vp
!==this.D6){this.D6=Vp;A.pe([this,this.Amr],this);this.LF=true;}},Bfh:function(G
){if(!this.D6)return;var IC=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
IC===0x5E)||(IC===0x7E))||(IC===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.LF=true;},AAN:function(G){if(this.D6>=(this.Text.
String.length-1))return;var IC=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(IC===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.LF=true;}
,Bfv:function(G){this.Text.R(A.abU(this.Text.String,Buy,this.D6));this.D6=this.D6+
1;this.LF=true;},Bfj:function(G){var IC=this.AjE.Dy;var Auw=String.fromCharCode(
IC);A.ab5("%c",IC);if((((IC===0x5E)||(IC===0x7E))||(IC===0xAD))||(IC===0x25))Auw=
Buz+String.fromCharCode(IC);this.Text.R(A.abU(this.Text.String,Auw,this.D6));this.
D6=this.D6+Auw.length;this.LF=true;},_Init:function(aArg){A.acn.Ji._Init.call(this
,aArg);A.acl.TQ._Init.call(this.I2={I:this},0);A.Core.BF._Init.call(this.Cq={I:this
},0);A.Core.BF._Init.call(this.AmE={I:this},0);A.Core.BF._Init.call(this.Sl={I:this
},0);A.Core.BF._Init.call(this.Anp={I:this},0);A.Core.BF._Init.call(this.AjE={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C8._Init.call(this.CY={
I:this},0);this.__proto__=C.Ji;var B;this.H(BuA);this.I2.B3=false;this.I2.Cx=true;
this.I2.Fq(500);this.I2.Ux(500);this.Cq.Filter=147;this.Cq.Bw=false;this.AmE.Filter=
151;this.Sl.Filter=44;this.Anp.Filter=149;this.AjE.Filter=145;this.Text.A1(0x3F);
this.Text.H(BuB);this.Text.KX(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CY.DD(BuC);this.CY.DN(BuD);this.CY.A$g(2);this.CY.A$f(2);this.
CY.L(0xFF000000);this.CY.Z(false);this.J(this.Text,0);this.J(this.CY,0);this.I2.
Q=[B=this.CY,B.Fp,B.Z];this.Cq.BG=[this,this.AAM];this.Cq.D1=[this,this.AAM];this.
AmE.BG=[this,this.Bfh];this.AmE.D1=[this,this.Bfh];this.Sl.BG=[this,this.AAN];this.
Sl.D1=[this,this.AAN];this.Anp.BG=[this,this.Bfv];this.Anp.D1=[this,this.Bfv];this.
AjE.BG=[this,this.Bfj];this.AjE.D1=[this,this.Bfj];this.Text.Q9([this,this.Amr]);
this.Text.S(A.aaL(A.aci.AC9));this.B7=A.aaL(A.aci.AC9);},_Done:function(){this.__proto__=
A.acn.Ji;this.I2._Done();this.Cq._Done();this.AmE._Done();this.Sl._Done();this.Anp.
_Done();this.AjE._Done();this.Text._Done();this.CY._Done();A.acn.Ji._Done.call(this
);},_ReInit:function(){A.acn.Ji._ReInit.call(this);this.I2._ReInit();this.Cq._ReInit(
);this.AmE._ReInit();this.Sl._ReInit();this.Anp._ReInit();this.AjE._ReInit();this.
Text._ReInit();this.CY._ReInit();},_Mark:function(D){var B;A.acn.Ji._Mark.call(this
,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I2)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVC={Ji:null,DF:function(G
){switch(this.Cq.CP){case 6:A._GetAutoObject(A.Device.Device).Aqw();break;case 7:
A._GetAutoObject(A.Device.Device).Aqu();break;case 4:A._GetAutoObject(A.Device.Device
).X8();break;case 5:A._GetAutoObject(A.Device.Device).Aqv();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A7).FB();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Ji._Init.call(this.Ji={I:this},0);this.__proto__=C.AVC;this.H(Cf);this.
N.Z(true);this.Dr(C.Aq8);this.Ji.H(Fe);this.J(this.Ji,0);this.Bb(this.Ji);this.N.
CF=[this,this.Ew];this.N.C3(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Ji._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Ji._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Ji)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUs={WK:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B_()>0)){A._GetAutoObject(
C.BS).TG(A.aaR(A.acf.ACt),[this,this.Bbo]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TG(A.aaR(A.acf.AHq),[this,this.A8J]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TG(A.aaR(A.acf.A5$),[this,this.Bbn]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TG(A.aaR(A.acf.UnlinkTransponder),[this,this.BoC]);}else{A._GetAutoObject(
C.BS).Aa3(A.aaR(A.acf.ACt));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Aa3(
A.aaR(A.acf.AHq));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Aa3(A.aaR(A.
acf.A5$));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.A6y)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fz();this.AuN(A.aaR(A.acf.A6q),[this,this.Bg_
],this.OJ);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(
A.acf.A6L));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Anl
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},AbA:function(){return C.
ACp;},AbB:function(){return C.ADG;},Ra:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).AvA());},HS:function(G){C.AkQ.HS.call(
this,G);this.N.Ct(null);this.N.E6(A.aaR(A.acf.A53));if(this.AJT()){this.N.Ce=[this
,this.AIY];this.N.JE.CZ(255);}else{this.N.Ce=null;this.N.JE.CZ(100);}this.N.C4(A.
aaL(A.ach.Options));this.N.CS(A.jV);this.N.OW(false);this.N.OX(false);this.N.IS.
CZ(255);},ASB:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiZ=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).AY(96,true,AiZ.toFixed(),0,null);},ASC:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6E(this);},ASG:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).OZ){A._GetAutoObject(A.Device.Device
).AY(73,true,A.jV,0,[this,this.Bfx]);return;}if(A._GetAutoObject(A.Device.Device
).Arp()===false){A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.
Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV,0,[this,this.Agk]);return;
}A.zX([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).Gg,B.SK,B.E5],0);var A4M=
!!this.OJ&&!(F=this.OJ,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asx(2,
A4M);},AJT:function(){if(!this.Bg)return false;var AtR=this.Bg.AX;if(!AtR)return false;
if(!AtR.B_())return false;return true;},Al6:function(G){var B;var F;switch(A._GetAutoObject(
A.Device.Device).Gg.EN){case 0:A.z$([this,this.Al6],[B=A._GetAutoObject(A.Device.
Device).Gg,B.SK,B.E5],0);break;case 3:{if(!!this.OJ&&(F=this.OJ,F[1].call(F[0]))
)A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(
A.Device.Converter).S8(A._GetAutoObject(A.Device.Device).OZ)===10){this.Dl(A.aaR(
A.acf.Bj1));this.Bg.NU.S(A.aaL(A.fl.Bh));}else this.Dl(A.aaR(A.acf.A$w));A._GetAutoObject(
A.Device.Device).AqK();}break;case 4:{A._GetAutoObject(A.Device.Device).AY(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gg.E7();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).Gg.EN);},_Init:function(aArg){C.AkQ._Init.call(
this,aArg);this.__proto__=C.AUs;var B;this.Dr(C.APD);this.A_r([B=A._GetAutoObject(
A.Device.Device),B.A9t,B.BbU]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADG={PG:null,Jb:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PG={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);this.__proto__=
C.ADG;this.Es.Z(false);this.DS.Z(false);this.PG.H(BuE);this.PG.L(A.jb.Text);this.
Jb.H(BuF);this.Jb.L(A.jb.Text);this.J(this.PG,0);this.J(this.Jb,0);this.PG.Ax(A.
aaL(A.ach.AvN));this.Jb.Ax(A.aaL(A.ach.AvI));},_Done:function(){this.__proto__=C.
De;this.PG._Done();this.Jb._Done();C.De._Done.call(this);},_ReInit:function(){C.
De._ReInit.call(this);this.PG._ReInit();this.Jb._ReInit();},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AM_={Init:function(aArg){var B;A.zX([this,this.AAR],[B=A._GetAutoObject(A.Device.
Device),B.AER,B.AI2],0);A.pe([this,this.AAR],this);},WK:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B_()>0)){if(this.AJT())A._GetAutoObject(C.BS).TG(A.aaR(
A.acf.AOx),[this,this.AIY]);else A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.AOx));A.
_GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.ACr),[this,this.
Bbo]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.AHq),[this
,this.A8J]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.A5_
),[this,this.Bbn]);}else{A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.AOx));A._GetAutoObject(
C.BS).Fz();A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.ACr));A._GetAutoObject(C.BS).Fz(
);A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.AHq));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Aa3(A.aaR(A.acf.A5_));}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).
Mp(A.aaR(A.acf.A6y)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();this.AuN(A.aaR(
A.acf.A6q),[this,this.Bg_],this.OJ);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mp(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();A.
_GetAutoObject(C.BS).Mp(A.aaR(A.acf.A6L));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mp(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},AbA:function(){return C.ACl;},AbB:function(){return C.ADE;},Ra:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOT(
));},HS:function(G){C.AkQ.HS.call(this,G);this.N.Ct(A.aaL(A.ach.AeF));this.N.Ce=[
this,this.Adx];this.N.E6(A.jV);this.N.C4(null);this.N.CS((A.aaR(A.acf.A53)+String.
fromCharCode(0x0A))+A.aaR(A.acf.Bh3));this.N.OW(false);this.N.OX(false);this.N.IS.
CZ(255);},ASB:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiZ=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).AY(96,true,AiZ.toFixed(),0,null);},ASC:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6D(this);},ASG:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).OZ){A._GetAutoObject(A.Device.Device
).AY(73,true,A.jV,0,[this,this.Bfx]);return;}if(A._GetAutoObject(A.Device.Device
).Arp()===false){A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.
Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV,0,[this,this.Agk]);return;
}A.zX([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).Gg,B.SK,B.E5],0);var A4M=
!!this.OJ&&!(F=this.OJ,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asx(0,
A4M);},AJT:function(){var AtR=this.Bg.AX;if(!AtR)return false;var O;for(O=0;O<AtR.
B_();O++)if(A._GetAutoObject(A.Device.Helper).Aj7(AtR.AO7(O,34))===false)return true;
return false;},Adx:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAR:function(G){if(A._GetAutoObject(A.Device.Device).Aqy===1)A.pe([this,this.
A6H],this);},Al6:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device
).Gg.EN){case 0:A.z$([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).Gg,B.SK
,B.E5],0);break;case 3:{if(!!this.OJ&&(F=this.OJ,F[1].call(F[0])))A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dl(A.aaR(A.acf.Bh4));A._GetAutoObject(
A.Device.Device).AqK();}break;case 4:{A._GetAutoObject(A.Device.Device).AY(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gg.E7();}break;default:;}},_Init:
function(aArg){C.AkQ._Init.call(this,aArg);this.__proto__=C.AM_;var B;this.Dr(C.
APa);this.A_r([B=A._GetAutoObject(A.Device.Device),B.A80,B.BbD]);this.Init(aArg);
},_className:"Application::BirthRegistrationsListScreen"};C.APa={DX:function(G){
C.Aex.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad1(11));}
,_Init:function(aArg){C.Aex._Init.call(this,aArg);this.__proto__=C.APa;this.Text.
R(A.aaR(A.acf.ACe));},_ReInit:function(){C.Aex._ReInit.call(this);this.Text.R(A.
aaR(A.acf.ACe));},_className:"Application::HeaderBirthRegistrationsList"};C.APD={
DX:function(G){C.Aex.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad1(12));},_Init:function(aArg){C.Aex._Init.call(this,aArg);this.__proto__=C.APD;
this.Text.R(A.aaR(A.acf.AGw));},_ReInit:function(){C.Aex._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AGw));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ACp={Js:0,AP:null,S0:null,Ph:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.S0.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.S0.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rl(this.
Js));this.S0.R(A._GetAutoObject(A.acj.KR).AC$(this.Ph));},Ch:function(Ad){if(!this.
AX)return;this.Ht=Ad;if(!!this.AX){this.Js=this.AX.KT(Ad,26);this.Ph=this.AX.Hw(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.S0={I:this},0);this.__proto__=C.ACp;
this.AP.H(A0B);this.AP.L(A.jb.Bc);this.S0.H(A0C);this.J(this.AP,0);this.J(this.S0
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A0(A.aaL(A.fl.Bh));this.S0.S(A.aaL(A.fl.Ak));
this.S0.A0(A.aaL(A.fl.Bh));this.S0.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.S0._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.S0._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A0(A.aaL(A.fl.Bh));this.S0.S(A.aaL(A.fl.Ak));this.S0.A0(A.
aaL(A.fl.Bh));this.S0.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S0)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AU3={
WM:null,SL:null,TY:null,HI:null,LY:null,IN:null,KL:A.jV,Ai:function(Ae){var F;C.
SX.Ai.call(this,Ae);this.TY.L(this.V.AQ);var Apz=false;if((!this.Dm||!(F=this.Dm
,F[1].call(F[0])))&&!this.A_)Apz=true;this.TY.Z(Apz);this.Pz.Z(!Apz);this.V3.Z(!
Apz);this.Q4.Z(!Apz);this.Yt.Z(!Apz);this.Qa.Z(!Apz);},Adz:function(G){var B;var
F;if(!this.KL.length){C.SX.Adz.call(this,G);return;}var BP=this.FZ;var FK=A._GetAutoObject(
A.Device.AkK).Bf9(this.KL);this.KL=A.jV;if(!FK){A._GetAutoObject(A.Device.Device
).AY(101,true,A.jV,0,this.SL);A.pe(this.WM,this);return;}if(this.Asu&&(FK>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).AY(102,true,A.jV,0,this.
SL);A.pe(this.WM,this);return;}this.Uv(((B=(FK|0))<0)?B+0x100000000:B);if(this.FZ
!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}if(!!this.
OO)A.pe(this.OO,this);},AAO:function(G){if(this.KL.length<10)this.KL=this.KL+String.
fromCharCode(this.HI.Dy);},Awc:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===
0x0A))this.Adz(this);else this.IN.Mw=true;},ATG:function(E){if(A.aa0(this.WM,E))
return;this.WM=E;},ATH:function(E){if(A.aa0(this.SL,E))return;this.SL=E;},_Init:
function(aArg){C.SX._Init.call(this,aArg);A.acg.Text._Init.call(this.TY={I:this}
,0);A.Core.BF._Init.call(this.HI={I:this},0);A.Core.BF._Init.call(this.LY={I:this
},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AU3;this.TY.H(BuG
);this.TY.Je(true);this.TY.A6(0x12);this.TY.R(A.aaR(A.acf.A6l));this.HI.Filter=143;
this.LY.Filter=149;this.IN.Filter=145;this.J(this.TY,0);this.TY.S(A.aaL(A.fl.EK)
);this.HI.BG=[this,this.AAO];this.LY.BG=[this,this.Bcd];this.IN.BG=[this,this.Awc
];},_Done:function(){this.__proto__=C.SX;this.TY._Done();this.HI._Done();this.LY.
_Done();this.IN._Done();C.SX._Done.call(this);},_ReInit:function(){C.SX._ReInit.
call(this);this.TY._ReInit();this.HI._ReInit();this.LY._ReInit();this.IN._ReInit(
);this.TY.R(A.aaR(A.acf.A6l));this.TY.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SX._Mark.call(this,D);if((B=this.WM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.SL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDateHid"};C.AU7={WM:null,SL:null,HI:null,LY:null,IN:null
,KL:A.jV,H1:function(G){var F;if(!this.KL.length){C.Rd.H1.call(this,G);return;}if(
this.Ast)return;if(!this.KL.length)this.LY.Mw=true;var BP=this.AM;var FK=A._GetAutoObject(
A.Device.AkK).Bf_(this.KL);this.KL=A.jV;if(!FK){if((this.KL.length<13)&&!A._GetAutoObject(
A.Device.Device).OZ)A._GetAutoObject(A.Device.Device).AY(105,true,A.jV,0,this.SL
);else A._GetAutoObject(A.Device.Device).AY(103,true,A.jV,0,this.SL);A.pe(this.WM
,this);return;}this.Bx(FK);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0]
,this.AM));A.abo(this.Q,0);}if(!!this.OO)A.pe(this.OO,this);},AAO:function(G){if(
this.Ast)return;if(this.KL.length<17)this.KL=this.KL+String.fromCharCode(this.HI.
Dy);},Awc:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===0x0A))this.H1(this);
else this.IN.Mw=true;},ATG:function(E){if(A.aa0(this.WM,E))return;this.WM=E;},ATH:
function(E){if(A.aa0(this.SL,E))return;this.SL=E;},_Init:function(aArg){C.Rd._Init.
call(this,aArg);A.Core.BF._Init.call(this.HI={I:this},0);A.Core.BF._Init.call(this.
LY={I:this},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AU7;this.
Ar_(false);this.HI.Filter=143;this.LY.Filter=149;this.IN.Filter=145;this.HI.BG=[
this,this.AAO];this.LY.BG=[this,this.Alo];this.IN.BG=[this,this.Awc];},_Done:function(
){this.__proto__=C.Rd;this.HI._Done();this.LY._Done();this.IN._Done();C.Rd._Done.
call(this);},_ReInit:function(){C.Rd._ReInit.call(this);this.HI._ReInit();this.LY.
_ReInit();this.IN._ReInit();},_Mark:function(D){var B;C.Rd._Mark.call(this,D);if((
B=this.WM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SL)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
LY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemNaisdHid"};C.APA={Aj3:null,Aj1:null,Gw:null
,Rb:null,SU:null,C8:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device),B.A9l,B.AFJ],0);A.pe([this,this.DX],this);},Dg:function(E){C.BR.
Dg.call(this,E);this.Aj3.L(E);this.Aj1.L(E);this.Rb.Zz(E);this.Gw.L(E);this.SU.Zz(
E);},WN:function(E){this.Rb.CV(E);this.SU.CV(E);},DX:function(G){this.Rb.T(A._GetAutoObject(
A.Device.Device).Av3.toFixed());A.pe([this,this.BDc],this);},BDc:function(G){var
Xy=A._GetAutoObject(A.Device.Device).An.Filter;A._GetAutoObject(A.Device.Device).
An.Bk(A._GetAutoObject(A.Device.Helper).AvA());this.SU.T(A._GetAutoObject(A.Device.
Device).An.B_().toFixed());A._GetAutoObject(A.Device.Device).An.Bk(Xy);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},0);A.acg.
Ap._Init.call(this.Aj1={I:this},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2.
_Init.call(this.Rb={I:this},0);C.D2._Init.call(this.SU={I:this},0);A.acg.C8._Init.
call(this.C8={I:this},0);this.__proto__=C.APA;this.Aj3.H(Pa);this.Aj1.H(BuH);this.
Gw.H(BuI);this.Gw.L(A.jb.CU);this.Rb.A1(0x14);this.Rb.H(BuJ);this.Rb.Zz(A.jb.Bm);
this.Rb.CV(A.jb.Rk);this.Rb.Hp(2);this.Rb.Bmx(0x11);this.SU.A1(0x14);this.SU.H(BuK
);this.SU.Zz(A.jb.Bm);this.SU.CV(A.jb.Rk);this.SU.Hp(2);this.C8.DD(AhX);this.C8.
DN(BuL);this.C8.L(A.jb.Bc);this.J(this.Aj3,0);this.J(this.Aj1,0);this.J(this.Gw,
0);this.J(this.Rb,0);this.J(this.SU,0);this.J(this.C8,0);this.Aj3.Ax(A.aaL(A.ach.
Arc));this.Aj1.Ax(A.aaL(A.ach.AP_));this.Gw.Ax(A.aaL(A.ach.Gw));this.Rb.S(A.aaL(
A.fl.Bh));this.SU.S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Aj3._Done();this.Aj1._Done();this.Gw._Done();this.Rb._Done();this.SU._Done(
);this.C8._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this
);this.Aj3._ReInit();this.Aj1._ReInit();this.Gw._ReInit();this.Rb._ReInit();this.
SU._ReInit();this.C8._ReInit();this.Rb.S(A.aaL(A.fl.Bh));this.SU.S(A.aaL(A.fl.Bh
));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
SU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderMassRecordings"};C.AR5={Abp:null,Aeq:null,V0:null
,Init:function(aArg){this.Bb(this.Abp);},Ls:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.CF=[this,this.AaP];this.BQ.Ce=null;this.BQ.Ca=[this,this.A3I];this.
BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},AAJ:function(
G){var Aa=(C.Ajl.isPrototypeOf(G)?G:null);if(Aa===this.Abp)A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(14);else if(Aa===this.Aeq)A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(15);else throw new Error(AIQ);},_Init:function(aArg){C.Fr._Init.
call(this,aArg);C.Ajl._Init.call(this.Abp={I:this},0);C.Ajl._Init.call(this.Aeq={
I:this},0);C.AR9._Init.call(this.V0={I:this},0);this.__proto__=C.AR5;var B;this.
H(Rr);this.Text.R(A.aaR(A.acf.ACj));this.Abp.H(I1);this.Abp.T(A.aaR(A.acf.AjH));
this.Aeq.H(Qf);this.Aeq.T(A.aaR(A.acf.AGD));this.V0.H(Aan);this.V0.T(A.aaR(A.acf.
A5V));this.J(this.Abp,0);this.J(this.Aeq,0);this.J(this.V0,0);this.Text.S(A.aaL(
A.fl.Ak));this.Abp.AR=[this,this.AAJ];this.Aeq.AR=[this,this.AAJ];this.V0.ATj([B=
A._GetAutoObject(A.Device.Device),B.AEV,B.AI5]);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fr;this.Abp._Done();this.Aeq._Done();this.V0._Done();C.Fr._Done.
call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.Abp._ReInit();this.
Aeq._ReInit();this.V0._ReInit();this.Text.R(A.aaR(A.acf.ACj));this.Abp.T(A.aaR(A.
acf.AjH));this.Aeq.T(A.aaR(A.acf.AGD));this.V0.T(A.aaR(A.acf.A5V));this.Text.S(A.
aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Abp).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingOverlayMenu"
};C.AR4={AnimalTableFields:null,Ay:null,Y:null,JV:null,CQ:function(){this.AiM(this
);},Init:function(aArg){A.zV([this,this.AiM],this.AnimalTableFields,0);A.pe([this
,this.AiM],this);},DF:function(G){C.Fr.DF.call(this,G);this.MZ(this);},Ls:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.Ew];this.BQ.Ce=[
this,this.A3G];this.BQ.Ca=[this,this.A3$];this.BQ.C4(A.aaL(A.ach.Arl));this.BQ.Ct(
A.aaL(A.ach.Ard));this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},Ew:function(G){this.
ABl();this.AaP(this);},AiM:function(G){this.Ao8();var O;for(O=0;O<this.AnimalTableFields.
Ng();O=O+1){var Aaw=A._GetAutoObject(C.Amw).OM(O);this.A1M(Aaw);}this.J(this.JV,
0);A.aaS([this,this.MZ],this);},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},MZ:function(
G){var B;this.Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},A1M:function(Hb){var Azn=A._NewObject(A.Device.AnimalTableFieldsToString
,0);var Aa=A._NewObject(C.Sm,0);Aa.T(Azn.BT(Hb));Aa.Aj(true);Aa.G8=Hb;Aa.A_D(this.
AnimalTableFields.N3(Hb));this.J(Aa,0);this.ZL(Aa);},Ao8:function(){var B;var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdN=X;X=X.Ah;if(((AdN.U&0x400)===
0x400))this.HR(AdN);}},ABl:function(){var B;this.AnimalTableFields.Clear();var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.
JV)){var Aa=(C.Sm.isPrototypeOf(X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.
G8);if(Aa.ASS())this.AnimalTableFields.AUZ(Aa.G8);}else A.ab5("%s",AyB);}X=X.Ah;
}this.AnimalTableFields.Ci();},A3G:function(G){var B;var Aa=(C.Sm.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAB=(C.Sm.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAB
){this.AhF(AAB,Aa);A.pe([this,this.MZ],this);}}},A3$:function(G){var B;var Aa=(C.
Sm.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AA9=(C.Sm.isPrototypeOf(B=Aa.AJ
)?B:null);if(!!AA9){this.AhF(Aa,AA9);A.pe([this,this.MZ],this);}}},AqR:function(
G){var B;A._GetAutoObject(A.Device.Device).Asy(this);A.pe([this,this.AiM],this);
},_Init:function(aArg){C.Fr._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Avd._Init.call(this.JV={I:this},0);
this.__proto__=C.AR4;this.H(Rr);this.Text.R(A.aaR(A.acf.AGD));this.Ay.H(Ix);this.
Y.H(Bbc);this.Y.JZ(1);this.JV.H(AIl);this.JV.Aj(true);this.JV.T(A.aaR(A.acf.A6z)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JV,0);this.Y.Em=[this,this.Fj];
this.JV.AR=[this,this.AqR];this.AnimalTableFields=A._GetAutoObject(C.Amw);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fr;this.Ay._Done();this.Y._Done();this.
JV._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JV._ReInit();this.Text.R(A.aaR(A.acf.AGD));this.
JV.T(A.aaR(A.acf.A6z));this.CQ();},_Mark:function(D){var B;C.Fr._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.AR3={Y:null,B0:null,Db:null,CH:null,GQ:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UX:null,Init:function(aArg){A.zX([this,this.AuV],this.B0.Q,0);A.zX([
this,this.ANd],this.CH.Q,0);A.zX([this,this.AWi],this.GQ.Q,0);A.zX([this,this.Avx
],this.Db.Q,0);this.Bb(this.B0);},DF:function(G){C.Fr.DF.call(this,G);this.MZ(this
);},Ls:function(){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.
AaP];this.BQ.Ce=null;this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(
A.aaL(A.ach.YH));}return this.BQ;},Fj:function(G){var B;this.Ay.MG((B=this.Y.Dd(
0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},MZ:function(
G){var B;this.Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},AuV:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.B0.Q,F[1].call(F[0])));},AWi:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GQ.Q,F[1].call(F[0])));},Avx:function(G){var F;A._GetAutoObject(
A.Device.Device).J0((F=this.Db.Q,F[1].call(F[0])));},ANd:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fr._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Aa2._Init.call(this.B0={
I:this},0);C.Aa2._Init.call(this.Db={I:this},0);C.Aa2._Init.call(this.CH={I:this
},0);C.Aa2._Init.call(this.GQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UY._Init.call(this.UX={I:
this},0);this.__proto__=C.AR3;var B;this.H(Rr);this.Text.R(A.aaR(A.acf.AjH));this.
Y.H(Bbc);this.Y.JZ(1);this.B0.H(Ah1);this.B0.As(true);this.B0.Aj(true);this.B0.T(
A.aaR(A.acf.Afw));this.Db.H(Ayt);this.Db.As(true);this.Db.Aj(true);this.Db.T(A.aaR(
A.acf.Afr));this.CH.H(Aor);this.CH.As(true);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.
Breed));this.GQ.H(Atg);this.GQ.As(true);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jm
));this.Ay.H(Ix);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UX.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.B0,0);this.J(this.Db,0);this.J(this.CH,0);this.J(
this.GQ,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fj];this.B0.ZA(A.aaL(A.fl.H6));
this.B0.ZB(A.aaL(A.fl.H6));this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CL(
this.AnimalType);this.Db.ZA(A.aaL(A.fl.H6));this.Db.ZB(A.aaL(A.fl.H6));this.Db.Au([
B=this.Gender,B.B$,B.Cc]);this.Db.CL(this.Gender);this.CH.ZA(A.aaL(A.fl.H6));this.
CH.ZB(A.aaL(A.fl.H6));this.CH.Au([B=this.Breed,B.B$,B.Cc]);this.CH.CL(this.Breed
);this.GQ.ZA(A.aaL(A.fl.H6));this.GQ.ZB(A.aaL(A.fl.H6));this.GQ.Au([B=this.UX,B.
B$,B.Cc]);this.GQ.CL(this.UX);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fr;this.Y._Done();this.B0._Done();this.Db._Done();this.CH._Done();this.GQ._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UX._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this
);this.Y._ReInit();this.B0._ReInit();this.Db._ReInit();this.CH._ReInit();this.GQ.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UX._ReInit();this.Text.R(A.aaR(A.acf.AjH));this.B0.T(A.aaR(
A.acf.Afw));this.Db.T(A.aaR(A.acf.Afr));this.CH.T(A.aaR(A.acf.Breed));this.GQ.T(
A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.AmA={CB:0,Alz:A.abi(17,0,null),OM:function(HC){return this.Alz.Get(HC);},Ng:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alz.Set(
O,0);this.CB=0;},J:function(Aar){if(this.CB>=17)A.ab5("%s",BuM);else{this.Alz.Set(
this.CB,Aar);this.CB=this.CB+1;}},Ci:function(){},E3:function(Ah6){var AKc=Ah6.indexOf(
String.fromCharCode(0x2C),0);var A1$=A.jV;var O=0;this.CB=0;while(O<17)if(Ah6===
A.jV)O++;else{if(AKc===-1){A1$=Ah6;Ah6=A.jV;}else{A1$=A.abV(Ah6,AKc);Ah6=A.ab1(Ah6
,0,AKc+1);}var Aaw=A.abZ(A1$,0,10)|0;if(this.Bkg(Aaw)){this.Alz.Set(this.CB,Aaw);
this.CB=this.CB+1;O++;}AKc=Ah6.indexOf(String.fromCharCode(0x2C),0);}if(Ah6!==A.
jV)A.ab5("%s",BuN);},toString:function(){var B;var AAz=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAz=AAz+AyD;AAz=AAz+(((B=this.Alz.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAz;},Contains:function(Aar){var O;for(O=0;O<this.CB;O=O+1)if(this.Alz.
Get(O)===Aar)return true;return false;},Bkg:function(Aar){return true;},_Init:function(
aArg){(this.Alz=[]).__proto__=C.AmA.Alz;this.__proto__=C.AmA;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AMk={AfT:null,Init:function(aArg){var B;A.
zX([this,this.Bfc],[B=A._GetAutoObject(A.Device.Device),B.A8O,B.Bbv],0);A.zX([this
,this.Bfd],[B=A._GetAutoObject(A.Device.Device),B.A8P,B.Bbw],0);A.pe([this,this.
Bfc],this);A.pe([this,this.Bfd],this);},Clear:function(){C.AmA.Clear.call(this);
this.AfT.Clear();},Ci:function(){A._GetAutoObject(A.Device.Device).ArP(this.AfT.
toString());A._GetAutoObject(A.Device.Device).ArQ(this.toString());},Bfc:function(
G){this.AfT.E3(A._GetAutoObject(A.Device.Device).ABV);A.we(this,0);},Bfd:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABW);A.we(this,0);},N3:function(Aar
){return this.AfT.Contains(Aar);},AUZ:function(Aar){if(!this.N3(Aar))this.AfT.J(
Aar);},AOU:function(){return this.AfT.Ng();},_Init:function(aArg){C.AmA._Init.call(
this,aArg);this.__proto__=C.AMk;this.AfT=A._NewObject(C.AmA,0);this.Init(aArg);}
,_Mark:function(D){var B;C.AmA._Mark.call(this,D);if((B=this.AfT)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amw={_Init:function(){C.AMk._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AR9={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hp(10);},Bl:function(aSize){C.Ui.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mu.M[0]));},Ai:function(Ae){var B;C.Ui.
Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FT=A.jb.Aec;var GZ=A.jb.Bm;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.Text;}if(!Hg
){this.Background.L(FT);this.V.L(A.jb.CK);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FT);this.V.L(GZ);}this.LN=Hg;this.KM=Fv;this.Qy=GE;},_Init:function(
aArg){C.Ui._Init.call(this,aArg);this.__proto__=C.AR9;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AM8={YY:null,Ak$:null,Ls:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.AaP];this.BQ.Ce=null;
this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.
BQ;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Aa2._Init.call(this.
YY={I:this},0);C.AEr._Init.call(this.Ak$={I:this},0);this.__proto__=C.AM8;var B;
this.H(K4);this.YY.H(K4);this.YY.T(A.aaR(A.acf.Display));this.Ak$.Au(A._GetAutoObject(
A.Device.Device).Aqy);this.J(this.YY,0);this.YY.ZA(A.aaL(A.fl.H6));this.YY.ZB(A.
aaL(A.fl.H6));this.YY.Au([B=this.Ak$,B.B$,B.Cc]);this.YY.CL(this.Ak$);this.Ak$.BnM([
B=A._GetAutoObject(A.Device.Device),B.AER,B.AI2]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YY._Done();this.Ak$._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YY._ReInit();this.Ak$._ReInit(
);this.YY.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak$)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEr={AbV:null,ListViewScopeToString:null,Du:function(){return 2;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BT(aIndex
);},DZ:function(A8){return A8;},H8:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbV)(F=this.AbV,F[2].call(F[0],E));},BnM:function(E
){if(A.aaZ(this.AbV,E))return;if(!!this.AbV)A.z$([this,this.A4f],this.AbV,0);this.
AbV=E;if(!!this.AbV)A.zX([this,this.A4f],this.AbV,0);A.pe([this,this.A4f],this);
},A4f:function(G){var F;if(!!this.AbV)this.Q=(F=this.AbV,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEr;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AHd={
ACw:0,ACv:0,Ai:function(Ae){C.O4.Ai.call(this,Ae);this.Background.L(this.ACv);this.
V.L(this.ACw);},A_e:function(E){if(this.ACw===E)return;this.ACw=E;this.Am();},BmD:
function(E){if(this.ACv===E)return;this.ACv=E;this.Am();},_Init:function(aArg){C.
O4._Init.call(this,aArg);this.__proto__=C.AHd;this.As(false);this.ACw=A.jb.Text;
this.ACv=A.jb.CK;},_className:"Application::TextCaptionItem"};C.AHA={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.BeI],[B=A._GetAutoObject(A.Device.
Device),B.A9m,B.BbO],0);A.pe([this,this.BeI],this);},Du:function(){return 3;},Gm:
function(aIndex){return this.WeightValuePrecisionToString.BT(this.C7(aIndex));},
Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw0(E);},BeI:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OT;A.abo([this,this.B$,this.
Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHA;this.
BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cm;this.WeightValuePrecisionToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AU5={UL:null,A$9:A.jV,Init:function(aArg){},Bl:function(aSize){C.BX.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UL.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BX.Ai.call(this,Ae);this.UL.L(this.
V.AQ);},Bof:function(E){if(this.A$9===E)return;this.A$9=E;this.UL.R(E);},_Init:function(
aArg){C.BX._Init.call(this,aArg);C.CG._Init.call(this.UL={I:this},0);this.__proto__=
C.AU5;this.H(AcS);this.UL.H(BuO);this.J(this.UL,0);this.UL.S(A.aaL(A.fl.Af));this.
UL.A0(A.aaL(A.fl.Ak));this.UL.Cr(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BX;this.UL._Done();C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(
this);this.UL._ReInit();this.UL.S(A.aaL(A.fl.Af));this.UL.A0(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BX._Mark.call(this,D);if((B=this.UL)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Wt={ABZ:null,MassDeregistrationCriterionToString:
null,Du:function(){return 2;},Gm:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A8=this.C7(aIndex);var M7=this.MassDeregistrationCriterionToString.
BT(this.C7(aIndex));if(!!this.ABZ&&!A8)M7=A._GetAutoObject(A.Device.Helper).MN(M7
,Pc,(F=this.ABZ,F[1].call(F[0])).toFixed());return M7;},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Wt;this.BI.Set(
0,0);this.BI.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.ABZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.AN2={Vs:null,Wt:null,Zd:null,JW:null
,Aug:0,Aa4:100,Init:function(aArg){this.Bb(this.Zd);},Ai:function(Ae){C.Ej.Ai.call(
this,Ae);var BCL=((A.aaR(A.acf.AqG)+A.aaR(A.acf.Colon))+CR)+this.Aug.toFixed();this.
JW.Bof(BCL);},CD:function(G){C.Ej.CD.call(this,G);A.zX([this,this.ABL],this.JW.Q
,0);A.pe([this,this.ABL],this);},E4:function(G){C.Ej.E4.call(this,G);A.z$([this,
this.ABL],this.JW.Q,0);},DK:function(G){var F;C.Ej.DK.call(this,G);this.N.E6(A.jV
);this.N.Ce=null;if((this.AV===this.JW)&&!!this.JW.Q){this.N.Ca=[this,this.Bfs];
switch((F=this.JW.Q,F[1].call(F[0]))){case 1:if(!this.Aug)this.N.GX.CZ(100);else
this.N.GX.CZ(255);break;case 0:{this.N.E6(A.aaR(A.acf.Biy));this.N.Ce=[this,this.
Bzt];if(this.Aa4<=1)this.N.GX.CZ(100);else this.N.GX.CZ(255);this.N.CS(A.aaR(A.acf.
Biz));this.N.Ca=[this,this.BAq];if(this.Aa4>=2147483647)this.N.GX.CZ(100);else this.
N.GX.CZ(255);this.N.WV=true;}break;default:throw new Error(BuP+(F=this.JW.Q,F[1].
call(F[0])).toFixed());}this.JW.Ab7(this.N.Ca);}},Bfs:function(G){if(this.Aug>0)
A._GetAutoObject(A.Device.Device).AY(108,true,this.Aug.toFixed(),0,[this,this.BAY
]);},ABL:function(G){var F;this.Aug=A._GetAutoObject(A.Device.Helper).BjF((F=this.
JW.Q,F[1].call(F[0])),this.Aa4);this.Am();A.pe([this,this.MS],this);},Bfm:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B_()){A._GetAutoObject(A.Device.
Device).AY(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Arp(
)===false){this.Vs=[this,this.Bfm];A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV,0,[this,
this.Agk]);return;}A.zX([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).Gg,
B.SK,B.E5],0);A._GetAutoObject(A.Device.Device).Asx(1,false);},Agk:function(G){var
B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);this.
Vs=null;}},XM:function(G){var B;if(A._GetAutoObject(A.Device.Device).P7.Z8===3){
A._GetAutoObject(A.Device.Device).AY(74,false,A.jV,0,[this,this.Agk]);A.z$([this
,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);if(!!this.Vs)A.pe(this.
Vs,this);this.Vs=null;}},BAY:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCG],this);},BCG:function(
G){A._GetAutoObject(A.Device.Helper).ByV(this.Wt.Q,this.Aa4);A._GetAutoObject(A.
Device.Device).AY(109,true,this.Aug.toFixed(),0,null);A.pe([this,this.MS],this);
A.pe([this,this.ABL],this);},Al6:function(G){var B;switch(A._GetAutoObject(A.Device.
Device).Gg.EN){case 0:A.z$([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).
Gg,B.SK,B.E5],0);break;case 3:A._GetAutoObject(A.Device.Device).AqK();break;case
4:{A._GetAutoObject(A.Device.Device).AY(88,true,A.jV,0,null);A._GetAutoObject(A.
Device.Device).Gg.E7();}break;default:;}},BAq:function(G){if(this.Aa4<2147483647
)this.ATe(this.Aa4+1);},Bzt:function(G){if(this.Aa4>1)this.ATe(this.Aa4-1);},ATe:
function(E){if(this.Aa4===E)return;this.Aa4=E;A.pe([this,this.ABL],this);this.JW.
Am();},Blc:function(){return this.Aa4;},_Init:function(aArg){C.Ej._Init.call(this
,aArg);C.Wt._Init.call(this.Wt={I:this},0);C.Co._Init.call(this.Zd={I:this},0);C.
AU5._Init.call(this.JW={I:this},0);this.__proto__=C.AN2;var B;this.Dr(C.APc);this.
Zd.H(I1);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.A6T));this.Zd.Bi(false);this.JW.
H(Bba);this.JW.Aj(true);this.JW.T(A.aaR(A.acf.Bar));this.JW.Bi(true);this.JW.A_7(
A.aaR(A.acf.Ok));this.J(this.Zd,0);this.J(this.JW,0);this.Wt.ABZ=[this,this.Blc,
this.ATe];this.Zd.AR=[this,this.Bfm];this.JW.AR=[this,this.Bfs];this.JW.Ab7(this.
N.Ca);this.JW.Au([B=this.Wt,B.B$,B.Cc]);this.JW.CL(this.Wt);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wt._Done();this.Zd._Done();this.JW._Done();C.
Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Wt._ReInit(
);this.Zd._ReInit();this.JW._ReInit();this.Zd.T(A.aaR(A.acf.A6T));this.JW.T(A.aaR(
A.acf.Bar));this.JW.A_7(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ej._Mark.call(
this,D);if((B=this.Vs)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wt).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.APc={_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APc;this.
Text.R(A.aaR(A.acf.AdW));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdW));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.AN5={
Vs:null,Zc:null,AbZ:null,Init:function(aArg){this.Bb(this.Zc);A.pe([this,this.MS
],this);},Bfl:function(G){var B;var AAj=A._GetAutoObject(A.Device.Device).AEd();
switch(AAj){case 1:A._GetAutoObject(A.Device.Device).AY(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).AY(91,true,U8,0,[this,this.BfF]);break;
case 2:{this.Vs=[this,this.Bfl];A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV,0,[this,
this.Agk]);}break;default:throw new Error(Bbd+AAj.toFixed());}},Agk:function(G){
var B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);this.
Vs=null;}},XM:function(G){var B;if(A._GetAutoObject(A.Device.Device).P7.Z8===3){
A._GetAutoObject(A.Device.Device).AY(74,false,A.jV,0,[this,this.Agk]);A.z$([this
,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);if(!!this.Vs)A.pe(this.
Vs,this);this.Vs=null;}},BfH:function(G){var B;var AAj=A._GetAutoObject(A.Device.
Device).AEe();switch(AAj){case 1:A._GetAutoObject(A.Device.Device).AY(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).AY(95,true,A.jV,0,[this
,this.BA0]);break;case 2:{this.Vs=[this,this.BfH];A.zX([this,this.XM],[B=A._GetAutoObject(
A.Device.Device),B.Ut,B.Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV
,0,[this,this.Agk]);}break;case 3:A._GetAutoObject(A.Device.Device).AY(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).AY(93,true,A.jV,0,null
);break;default:throw new Error(Bbd+AAj.toFixed());}},BfF:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(Ar.Id){case 91:if(Ar.PopupState===
9)A.aaS([this,this.Bzx],this);break;case 92:if(Ar.PopupState===9)A.aaS([this,this.
Bzz],this);break;default:throw new Error(BuQ+Ar.Id.toFixed());}},Bzx:function(G){
if(A._GetAutoObject(A.Device.Device).ACF()){var A3t=A._GetAutoObject(A.Device.Device
).An.QM();A._GetAutoObject(A.Device.Device).AY(80,true,A3t.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).AY(82,true,A.jV,0,null);A.aaS([this,this.BAU],
this);},Bzz:function(G){if(A._GetAutoObject(A.Device.Device).AGH()){var A3t=A._GetAutoObject(
A.Device.Device).An.QM();A._GetAutoObject(A.Device.Device).AY(81,true,A3t.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).AY(83,true,A.jV,0,null);A.aaS([
this,this.BBA],this);},BA0:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCH],this);},BCH:function(
G){A._GetAutoObject(A.Device.Device).AY(92,true,U8,0,[this,this.BfF]);},BBA:function(
G){A._GetAutoObject(A.Device.Device).AY(92,false,A.jV,0,null);},BAU:function(G){
A._GetAutoObject(A.Device.Device).AY(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ej._Init.call(this,aArg);C.Co._Init.call(this.Zc={I:this},0);C.Co._Init.call(
this.AbZ={I:this},0);this.__proto__=C.AN5;this.Dr(C.APf);this.Zc.H(I1);this.Zc.Aj(
true);this.Zc.T(A.aaR(A.acf.ACF));this.Zc.Bi(false);this.AbZ.H(Qf);this.AbZ.Aj(true
);this.AbZ.T(A.aaR(A.acf.AGH));this.AbZ.Bi(true);this.J(this.Zc,-1);this.J(this.
AbZ,-1);this.Zc.AR=[this,this.Bfl];this.AbZ.AR=[this,this.BfH];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ej;this.Zc._Done();this.AbZ._Done();C.Ej._Done.
call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Zc._ReInit();this.AbZ.
_ReInit();this.Zc.T(A.aaR(A.acf.ACF));this.AbZ.T(A.aaR(A.acf.AGH));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Vs)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbZ)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.APf={
_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APf;this.Text.R(
A.aaR(A.acf.ACL));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACL));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.M_={L3:null
,AUy:0,AEg:false,AEc:false,AEh:false,Agi:function(G){this.A6C(this);},ATC:function(
E){if(this.L3===E)return;this.L3=E;if(!this.L3)return;this.DQ.AutoActions=E;A.zV([
this,this.BgJ],this.L3,0);A.zV([this,this.AoF],this.L3,0);A.pe([this,this.BgJ],this
);A.pe([this,this.AoF],this);},AMl:function(){this.AMn(A.aaR(A.acf.Baz),[this,this.
BCX],[this,this.A9g,this.AFA]);this.AMn(A.aaR(A.acf.AGx),[this,this.BCV],[this,this.
A9d,this.AFy]);this.AMn(A.aaR(A.acf.An5),[this,this.BCW],[this,this.A9e,this.AFz
]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.BoN)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fz();},AMn:function(Bxn,Byx,BxS){if(!this.L3
)return;this.AuN(Bxn,Byx,BxS);},BCX:function(G){this.AFA(!this.AEh);},BCV:function(
G){this.AFy(!this.AEc);},BCW:function(G){this.AFz(!this.AEg);},A4H:function(Eh,BxR
){if(!this.L3)return;if(BxR)this.L3.BhE(Eh);else this.L3.Bo6(Eh);this.L3.Ci();},
A5o:function(Aih,Aii,ByQ){A._GetAutoObject(C.BS).ABX(Aih,Aii,[this,this.A9x,this.
ATP],ByQ);},AGT:function(Eh){if(!this.L3)return;this.L3.AGT(Eh);this.L3.Ci();},AFA:
function(E){if(this.AEh===E)return;this.AEh=E;this.A4H(256,E);A.abo([this,this.A9g
,this.AFA],0);},AFy:function(E){if(this.AEc===E)return;this.AEc=E;this.A4H(2,E);
A.abo([this,this.A9d,this.AFy],0);},AFz:function(E){if(this.AEg===E)return;this.
AEg=E;this.A4H(1,E);A.abo([this,this.A9e,this.AFz],0);},BgJ:function(G){this.AFA(
this.L3.Contains(256));this.AFy(this.L3.Contains(2));this.AFz(this.L3.Contains(1
));if(this.L3.Ng()>0)this.ATP(this.L3.ADj());},ATP:function(E){if(this.AUy===E)return;
this.AUy=E;A.abo([this,this.A9x,this.ATP],0);},A9g:function(){return this.AEh;},
A9d:function(){return this.AEc;},A9e:function(){return this.AEg;},A9x:function(){
return this.AUy;},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.M_;},_Mark:function(D){var B;C.GJ._Mark.call(this,D);if((B=this.L3)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.Av2={Q:null,Ci:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},AEa:
function(Eh){switch(Eh){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Hh:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Hh],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hh],E,
0);if(!!E)A.pe([this,this.Hh],this);},AGT:function(Eh){if(this.Ng()>0)this.AxE(this.
Ng()-1,Eh);},BhE:function(Eh){if(this.Contains(Eh))return;if(this.CB>=17){A.ab5(
"%s",AIn);return;}var AAc=0;for(;(AAc<=this.Ng())&&(this.OM(AAc)<Eh);AAc++);var ABq=
this.Ng()-1;this.J(this.OM(ABq));for(;ABq>AAc;ABq--)this.AxE(ABq,this.OM(ABq-1));
this.AxE(AAc,Eh);},Bo6:function(Eh){var index=this.DZ(Eh);if(index<0)return;for(;
index<(this.Ng()-1);index++)this.AxE(index,this.OM(index+1));this.AxE(index,0);this.
CB--;},ADj:function(){var To=0;if(this.Ng()>0)To=this.OM(this.Ng()-1);return To;
},_Init:function(aArg){C.VF._Init.call(this,aArg);this.__proto__=C.Av2;},_Mark:function(
D){var B;C.VF._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Awa={_Init:function(){C.Av2.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A9q,B.BbS
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Awb={
_Init:function(){C.Av2._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A9r,B.BbT]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Aya={_Init:function(){C.Av2._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A9Z,B.Bb8]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADI={QW:null,AjX:null,_Init:function(aArg){C.De._Init.
call(this,aArg);C.CG._Init.call(this.QW={I:this},0);A.acg.Ap._Init.call(this.AjX={
I:this},0);this.__proto__=C.ADI;this.Es.H(BuR);this.DS.H(BuS);this.QW.H(BuT);this.
QW.R(A.aaR(A.acf.Uo));this.QW.A6(0x11);this.QW.L(A.jb.Text);this.AjX.H(A0y);this.
AjX.L(A.jb.Text);this.J(this.QW,0);this.J(this.AjX,0);this.QW.S(A.aaL(A.fl.Af));
this.QW.A0(A.aaL(A.fl.Ak));this.QW.Cr(A.aaL(A.fl.Bh));this.AjX.Ax(A.aaL(A.ach.AvH
));},_Done:function(){this.__proto__=C.De;this.QW._Done();this.AjX._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.QW._ReInit();
this.AjX._ReInit();this.QW.R(A.aaR(A.acf.Uo));this.QW.S(A.aaL(A.fl.Af));this.QW.
A0(A.aaL(A.fl.Ak));this.QW.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.ACo={
AP:null,S2:null,O5:null,AKH:A.jV,BeR:A.jV,Mn:0,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.O5.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.O5.M[2]-1,0,this.O5.M[2]+1,aSize[1]]);this.
S2.H([this.O5.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);
this.O5.L(this.V.AQ);this.S2.L(this.V.AQ);this.T(this.AKH);this.O5.R(this.BeR);this.
S2.R(this.Mn.toFixed());},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.
AX){var Js=this.AX.KT(Ad,26);var A3l=A._GetAutoObject(A.Device.Converter).Rl(Js);
this.AKH=A.abV(A3l,A3l.length-5);this.BeR=A.ab2(A3l,5);if((A._GetAutoObject(A.Device.
Converter).S8(Js)===10)&&!(Math.trunc(Js/10000000000)%100))this.AKH=A.ab1(this.AKH
,3,2);this.Mn=this.AX.CC(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.call(
this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CG._Init.call(this.S2={I:this
},0);C.CG._Init.call(this.O5={I:this},0);this.__proto__=C.ACo;this.V.H(BuU);this.
AP.H(A0B);this.AP.L(A.jb.Bc);this.S2.H(A0C);this.O5.H(BuV);this.J(this.AP,0);this.
J(this.S2,0);this.J(this.O5,0);this.V.S(A.aaL(A.fl.Bh));this.V.A0(A.aaL(A.fl.Bh)
);this.S2.S(A.aaL(A.fl.Ak));this.S2.A0(A.aaL(A.fl.Bh));this.S2.Cr(A.aaL(A.fl.Bh)
);this.O5.S(A.aaL(A.fl.Af));this.O5.A0(A.aaL(A.fl.Bh));this.O5.Cr(A.aaL(A.fl.Bh)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.S2.
_Done();this.O5._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.S2._ReInit();this.O5._ReInit();this.V.S(A.aaL(
A.fl.Bh));this.V.A0(A.aaL(A.fl.Bh));this.S2.S(A.aaL(A.fl.Ak));this.S2.A0(A.aaL(A.
fl.Bh));this.S2.Cr(A.aaL(A.fl.Bh));this.O5.S(A.aaL(A.fl.Af));this.O5.A0(A.aaL(A.
fl.Bh));this.O5.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListNaisIdAnimalIdItem"
};C.APH={Q:null,Init:function(aArg){var B;this.ABf(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs]);},AE4:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DM(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Nw(FilterCriterion);var Ai6=this.Awn();if((Ai6.length>
0)&&(Ai6!==U8)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai6,0,6,false);Filter.CX(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.Ae0(false);},ABf:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DM(26,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,
0);if(!!E)A.pe([this,this.C5],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATv(A.jV);return;}var Aze=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DM(26,4))?B:null);if(!Aze){this.AW.ATv(
U8);this.AW.Ae0(true);}else this.AW.ATv(Aze.A5);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.APH;this.AW.AwT(0);this.AW.Bny(true);this.AW.Dk=[
this,this.AE4];this.Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVR={FD:null,Da:null,Dn:null,EL:null,AsW:null,Init:function(aArg){var B;A.zX([
this,this.BfO],[B=A._GetAutoObject(A.Device.Device),B.AS$,B.A0W],0);A.zX([this,this.
Ady],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_],0);A.zX([this,this.Ady],[B=
A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.pe([this,this.BfO],this);A.pe([
this,this.Ady],this);},BfO:function(G){var AaW=false;switch(A._GetAutoObject(A.Device.
Device).An_){case 0:AaW=false;break;case 3:AaW=true;break;default:throw new Error(
BuW+A._GetAutoObject(A.Device.Device).An_.toFixed());}A._GetAutoObject(A.Device.
Helper).J6(this.Da,AaW);A._GetAutoObject(A.Device.Helper).J6(this.Dn,AaW);A._GetAutoObject(
A.Device.Helper).J6(this.EL,AaW);},Ady:function(G){var F,Cu;if(((F=this.Da.Q,F[1
].call(F[0]))+(Cu=this.Dn.Q,Cu[1].call(Cu[0])))>12)(Cu=this.Dn.Q,Cu[2].call(Cu[0
],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cg._Init.call(this
,aArg);C.BX._Init.call(this.FD={I:this},0);C.Iv._Init.call(this.Da={I:this},0);C.
Iv._Init.call(this.Dn={I:this},0);C.Av6._Init.call(this.EL={I:this},0);C.AVQ._Init.
call(this.AsW={I:this},0);this.__proto__=C.AVR;var B;this.Jf(A.aaR(A.acf.UnlinkTransponder
));this.FD.H(U7);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqp));this.
FD.Bi(true);this.Da.H(Alk);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.
AqM));this.Da.Bi(false);this.Da.Gb(2);this.Da.EV(6);this.Da.IW(A.aaR(A.acf.OK));
this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(Ah4);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.
Zs));this.Dn.Bi(true);this.Dn.Gb(0);this.Dn.EV(12);this.Dn.IW(A.aaR(A.acf.OK));this.
Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Aot);this.EL.As(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar9(A.aaR(A.acf.Aqr));this.J(this.FD,0);this.J(this.Da,0);this.
J(this.Dn,0);this.J(this.EL,0);this.FD.Au([B=this.AsW,B.B$,B.Cc]);this.FD.CL(this.
AsW);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.Dn.Au([B=A.
_GetAutoObject(A.Device.Device),B.Us,B.U$]);this.EL.DC(A.aaL(A.ach.AjY));this.EL.
OU([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.EL.PY([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.FD._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.AsW._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.FD._ReInit(
);this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit();this.AsW._ReInit();this.
Jf(A.aaR(A.acf.UnlinkTransponder));this.FD.T(A.aaR(A.acf.Aqp));this.Da.T(A.aaR(A.
acf.AqM));this.Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(
A.acf.Zs));this.Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.Ar9(A.
aaR(A.acf.Aqr));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVQ={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bhg],[B=A._GetAutoObject(A.Device.Device),B.AS$,B.A0W],0);A.pe([
this,this.Bhg],this);},Du:function(){return 2;},Gm:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axj(E);},Bhg:function(G){this.Q=A._GetAutoObject(A.Device.Device).An_;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVQ;this.BI.Set(0,0);this.BI.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMW.__proto__=A.Core.Root;C.AB.__proto__=C.Abr;C.WX.__proto__=
A.Core.P;C.OF.__proto__=A.Core.P;C.ZI.__proto__=A.acl.Gn;C.Ek.__proto__=A.Core.P;
C.X9.__proto__=C.AB;C.AVh.__proto__=C.AB;C.AvG.__proto__=C.AB;C.Rc.__proto__=C.AB;
C.Fn.__proto__=C.Hk;C.Ay.__proto__=A.Core.P;C.Cg.__proto__=C.AB;C.Aq8.__proto__=
C.BR;C.BR.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADA.__proto__=C.Am4;C.AG$.
__proto__=C.DR;C.Co.__proto__=C.O4;C.Ds.__proto__=C.Eg;C.Iv.__proto__=C.Ds;C.BX.
__proto__=C.Ds;C.SX.__proto__=C.Ds;C.OR.__proto__=C.Cm;C.Rh.__proto__=C.AC;C.AVw.
__proto__=C.Ba;C.Gd.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GJ.__proto__=C.AB;C.
ACn.__proto__=C.Ba;C.Aea.__proto__=C.AB;C.Mt.__proto__=C.OF;C.AVr.__proto__=C.AB;
C.Aq7.__proto__=C.ADA;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AU8.__proto__=C.Acu;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.AsC.__proto__=A.Core.P;C.AGX.__proto__=C.Ds;C.CG.__proto__=A.Core.P;C.
AjS.__proto__=C.YB;C.Amz.__proto__=C.Rg;C.AhC.__proto__=A.Core.P;C.Ej.__proto__=
C.AB;C.AUi.__proto__=C.AB;C.Mx.__proto__=C.Co;C.Ann.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abr;C.APX.__proto__=C.OverlayMenu;C.GK.__proto__=A.Core.P;C.Abr.__proto__=
A.Core.P;C.AVb.__proto__=A.acl.Aeo;C.Am4.__proto__=C.BR;C.ADB.__proto__=C.Am4;C.
Kq.__proto__=C.AC;C.AU_.__proto__=C.Ds;C.AGy.__proto__=C.AB;C.H3.__proto__=C.AB;
C.WF.__proto__=C.ArB;C.IP.__proto__=C.ADB;C.I_.__proto__=C.AB;C.AMu.__proto__=C.
AGy;C.AMq.__proto__=C.GJ;C.ANK.__proto__=C.GJ;C.Aes.__proto__=C.Co;C.QH.__proto__=
C.Aes;C.APK.__proto__=C.BR;C.AjT.__proto__=C.BR;C.DG.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Ge.__proto__=C.AC;C.Afq.__proto__=C.BX;C.AUz.__proto__=C.AB;C.Ab0.__proto__=
C.Co;C.Ui.__proto__=C.Co;C.ANW.__proto__=C.Cg;C.AVy.__proto__=C.Cg;C.AN9.__proto__=
C.Cg;C.AUL.__proto__=C.Cg;C.Xa.__proto__=A.Core.P;C.QZ.__proto__=C.Fn;C.D2.__proto__=
A.Core.P;C.Ue.__proto__=C.AB;C.AV9.__proto__=C.GJ;C.AMv.__proto__=C.Ax_;C.AVT.__proto__=
C.Cg;C.AeS.__proto__=C.AC;C.Ax_.__proto__=C.AB;C.AWg.__proto__=C.Cg;C.AU9.__proto__=
C.Acu;C.ABT.__proto__=A.Graphics.HA;C.Aql.__proto__=C.AB;C.AR0.__proto__=A.Core.
P;C.Fr.__proto__=C.OverlayMenu;C.Aa2.__proto__=C.BX;C.Ajl.__proto__=C.Co;C.AMc.__proto__=
C.Fr;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AMi.__proto__=C.VF;C.AMj.
__proto__=C.Fr;C.Sm.__proto__=C.Ui;C.AM1.__proto__=C.VF;C.Wv.__proto__=C.Fn;C.VC.
__proto__=A.Core.P;C.KC.__proto__=A.Core.P;C.ASm.__proto__=C.H3;C.AUC.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANL.__proto__=C.Amz;C.Hk.__proto__=A.
Core.P;C.AV$.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aba.
__proto__=C.Ge;C.Ax2.__proto__=C.ABT;C.AUd.__proto__=C.OverlayMenu;C.AOO.__proto__=
A.Core.P;C.N9.__proto__=A.Core.P;C.AUe.__proto__=A.Core.P;C.AVa.__proto__=A.acl.
Aeo;C.AkW.__proto__=C.Iv;C.AmB.__proto__=C.OverlayMenu;C.ACq.__proto__=C.Ba;C.YC.
__proto__=C.AjT;C.AqQ.__proto__=C.H3;C.Act.__proto__=C.Ds;C.WeightRecordingScope.
__proto__=C.AC;C.AuS.__proto__=C.AB;C.AU$.__proto__=C.Iv;C.AMs.__proto__=C.AB;C.
ArB.__proto__=C.H3;C.AHv.__proto__=A.Core.P;C.AWc.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeU.__proto__=C.Eg;C.Av7.__proto__=C.AeU;C.SetTransponderScreen.__proto__=
C.Rc;C.ADJ.__proto__=C.EB;C.AHz.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mo.__proto__=C.Rc;C.AMa.__proto__=C.Mo;C.ManualActionScanScreen.__proto__=C.Mo;
C.AMb.__proto__=A.Core.P;C.APO.__proto__=C.De;C.ADH.__proto__=C.De;C.T4.__proto__=
C.De;C.APQ.__proto__=C.De;C.ANp.__proto__=C.Ba;C.Nb.__proto__=C.Ba;C.ANn.__proto__=
C.Ba;C.Jx.__proto__=A.Core.P;C.ANm.__proto__=C.Ba;C.Am3.__proto__=C.TP;C.AGo.__proto__=
C.Axu;C.AkI.__proto__=C.Axu;C.ZH.__proto__=C.AkI;C.ANS.__proto__=C.O4;C.O4.__proto__=
C.Hk;C.APT.__proto__=C.EB;C.DS.__proto__=A.Core.P;C.ANj.__proto__=C.AjD;C.ADD.__proto__=
C.T5;C.Kp.__proto__=A.Core.P;C.AmL.__proto__=C.Mx;C.AO$.__proto__=C.Kv;C.AutoRegistrationMode.
__proto__=C.AC;C.APU.__proto__=C.EB;C.TJ.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMG.__proto__=C.R5;C.AMU.__proto__=C.Aa9;C.AMP.__proto__=C.Aa9;C.AUB.__proto__=
C.Ba;C.APS.__proto__=C.EB;C.AMJ.__proto__=C.Aa9;C.IK.__proto__=C.I9;C.RZ.__proto__=
C.FA;C.R3.__proto__=C.FA;C.TI.__proto__=C.JQ;C.QG.__proto__=C.FA;C.TH.__proto__=
C.JQ;C.AMr.__proto__=C.Aql;C.ARl.__proto__=C.Cg;C.Aa9.__proto__=C.D9;C.Ko.__proto__=
C.Cm;C.ARW.__proto__=C.Cg;C.AME.__proto__=C.Le;C.AMF.__proto__=C.D9;C.AMC.__proto__=
C.Le;C.AMD.__proto__=C.Le;C.WZ.__proto__=C.Eg;C.AU6.__proto__=C.WZ;C.R4.__proto__=
C.FA;C.APJ.__proto__=C.IP;C.ANM.__proto__=C.AB;C.ANt.__proto__=C.Aea;C.AMp.__proto__=
C.I_;C.AV8.__proto__=C.I_;C.APb.__proto__=C.Kv;C.APL.__proto__=C.Kv;C.APP.__proto__=
C.T5;C.ANo.__proto__=C.AjD;C.T5.__proto__=C.De;C.AqB.__proto__=A.acv.ACA;C.AjD.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.ANa.__proto__=C.DR;C.O9.__proto__=C.DR;C.Aq5.__proto__=
A.Core.P;C.AML.__proto__=C.Gd;C.AUF.__proto__=A.Core.P;C.Le.__proto__=C.D9;C.ANT.
__proto__=C.Cg;C.Avd.__proto__=C.Co;C.ADx.__proto__=C.BR;C.ADy.__proto__=C.BR;C.
FA.__proto__=C.JQ;C.AOR.__proto__=C.GJ;C.AOQ.__proto__=C.I_;C.APp.__proto__=C.Kv;
C.ADF.__proto__=C.De;C.ACm.__proto__=C.Ba;C.AUA.__proto__=C.AhC;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASy.
__proto__=C.M_;C.ASx.__proto__=C.I_;C.ADz.__proto__=C.Kv;C.AB6.__proto__=C.Ge;C.
AMf.__proto__=C.Fr;C.AMt.__proto__=C.AuS;C.NewAnimalSetTransponderScreen.__proto__=
C.AsH;C.C9.__proto__=C.AC;C.O8.__proto__=A.Core.P;C.R0.__proto__=C.FA;C.R1.__proto__=
C.FA;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AR7.__proto__=C.OverlayMenu;
C.V0.__proto__=C.Ui;C.Av6.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.TJ;
C.AnimalMultiInfoScreen.__proto__=C.TJ;C.AMI.__proto__=C.OverlayMenu;C.Jc.__proto__=
A.Core.P;C.AMe.__proto__=C.GJ;C.AMd.__proto__=C.I_;C.API.__proto__=C.IP;C.AsR.__proto__=
C.O8;C.Ark.__proto__=C.O8;C.Au$.__proto__=C.AC;C.AMA.__proto__=C.AC;C.AGW.__proto__=
C.Eg;C.G7.__proto__=A.Core.P;C.ARo.__proto__=C.HN;C.AVY.__proto__=C.X9;C.ASi.__proto__=
C.WF;C.AD8.__proto__=C.Ll;C.HN.__proto__=C.G7;C.Ll.__proto__=C.G7;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvW.__proto__=C.HN;C.AU4.__proto__=C.BX;C.NewAnimalsSetTransponderScreen.
__proto__=C.AsH;C.ReasonOfLeaving.__proto__=C.AC;C.O1.__proto__=C.BX;C.AeX.__proto__=
C.El;C.ASb.__proto__=C.El;C.ASa.__proto__=C.El;C.El.__proto__=A.Core.P;C.Rd.__proto__=
C.Eg;C.ARp.__proto__=C.Ll;C.AvV.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.FC.
__proto__=C.AB;C.AOq.__proto__=C.AB;C.AOt.__proto__=C.FC;C.AOu.__proto__=C.FC;C.
AqT.__proto__=C.FC;C.AbC.__proto__=C.AjS;C.Kv.__proto__=C.AjS;C.AvE.__proto__=C.
AbC;C.APn.__proto__=C.AbC;C.APm.__proto__=C.AbC;C.APl.__proto__=C.BR;C.AeA.__proto__=
C.EB;C.AmT.__proto__=C.Ba;C.Ajt.__proto__=C.IK;C.AC0.__proto__=A.Core.P;C.AkT.__proto__=
A.Core.P;C.Rg.__proto__=C.AB;C.AVx.__proto__=C.Rg;C.APo.__proto__=C.BR;C.De.__proto__=
C.EB;C.Ku.__proto__=C.BR;C.APh.__proto__=C.Ku;C.APj.__proto__=C.Ku;C.Yw.__proto__=
C.AmT;C.AgB.__proto__=C.Hk;C.AOd.__proto__=C.GJ;C.AOc.__proto__=C.I_;C.APk.__proto__=
C.Kv;C.Aby.__proto__=C.Act;C.AjK.__proto__=C.QH;C.ACg.__proto__=C.QH;C.APN.__proto__=
C.De;C.ANl.__proto__=C.Ba;C.R2.__proto__=C.FA;C.AMB.__proto__=C.FA;C.AN7.__proto__=
C.Ej;C.AN8.__proto__=C.Ej;C.APi.__proto__=C.Ku;C.Np.__proto__=C.Ab0;C.AN3.__proto__=
C.Ej;C.APd.__proto__=C.Ku;C.PV.__proto__=C.Co;C.Sn.__proto__=C.AB;C.AOr.__proto__=
C.Sn;C.AOs.__proto__=C.Sn;C.AOv.__proto__=C.AqT;C.AOo.__proto__=C.FC;C.Aa8.__proto__=
C.IK;C.Ps.__proto__=C.IK;C.AMN.__proto__=C.AmB;C.ARU.__proto__=C.Ue;C.ART.__proto__=
C.Ue;C.ASt.__proto__=C.M_;C.ASs.__proto__=C.I_;C.APC.__proto__=C.Kv;C.AkQ.__proto__=
C.GJ;C.AUM.__proto__=C.I_;C.Aex.__proto__=C.YB;C.ACl.__proto__=C.Ba;C.ADE.__proto__=
C.De;C.APE.__proto__=C.BR;C.Aa$.__proto__=C.NP;C.X1.__proto__=C.NP;C.R5.__proto__=
C.D9;C.X2.__proto__=C.R5;C.XZ.__proto__=C.IJ;C.Aa6.__proto__=C.IJ;C.XY.__proto__=
C.IJ;C.Aa5.__proto__=C.IJ;C.AMK.__proto__=C.AB;C.IJ.__proto__=C.I9;C.I9.__proto__=
C.Hk;C.NP.__proto__=C.FA;C.Axt.__proto__=C.ZH;C.ANR.__proto__=C.AmL;C.Axv.__proto__=
C.ZH;C.AUq.__proto__=C.Cg;C.AUo.__proto__=C.El;C.ARm.__proto__=C.Ll;C.AUp.__proto__=
C.El;C.NewMenu.__proto__=C.AB;C.ASj.__proto__=C.H3;C.AMM.__proto__=C.AmB;C.AM2.__proto__=
C.VF;C.JQ.__proto__=C.I9;C.APG.__proto__=C.YC;C.Abx.__proto__=C.Cm;C.APR.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Mo;C.APF.__proto__=C.Aq7;C.Jl.__proto__=A.Core.
P;C.APB.__proto__=C.BR;C.SetSaveNaisIdScreen.__proto__=C.Rc;C.AOe.__proto__=C.AqQ;
C.UX.__proto__=C.Cm;C.UY.__proto__=C.UX;C.AcO.__proto__=C.UX;C.AdX.__proto__=C.AC;
C.AGV.__proto__=C.Eg;C.AN6.__proto__=C.Ej;C.APg.__proto__=C.Ku;C.AN4.__proto__=C.
Ej;C.APe.__proto__=C.Ku;C.Aq9.__proto__=C.T4;C.APM.__proto__=C.T4;C.AqC.__proto__=
C.Nb;C.ANk.__proto__=C.Nb;C.ASc.__proto__=C.AeX;C.YB.__proto__=C.BR;C.Acu.__proto__=
C.BX;C.FM.__proto__=C.AC;C.AMQ.__proto__=C.FM;C.AMR.__proto__=C.FM;C.AMx.__proto__=
C.I_;C.TP.__proto__=C.BX;C.ASl.__proto__=C.AB;C.AsH.__proto__=C.SetTransponderScreen;
C.AD9.__proto__=C.HN;C.AsI.__proto__=C.O1;C.AxG.__proto__=C.O1;C.Acw.__proto__=C.
Cm;C.AWm.__proto__=C.M_;C.AWl.__proto__=C.I_;C.ARq.__proto__=A.Core.P;C.ARn.__proto__=
C.HN;C.AC5.__proto__=C.Aby;C.L4.__proto__=A.Core.P;C.AUK.__proto__=C.Cg;C.AUJ.__proto__=
C.Cg;C.AVO.__proto__=C.Cg;C.Afv.__proto__=C.Cm;C.Ji.__proto__=A.acn.Ji;C.AVC.__proto__=
C.AB;C.AUs.__proto__=C.AkQ;C.ADG.__proto__=C.De;C.AM_.__proto__=C.AkQ;C.APa.__proto__=
C.Aex;C.APD.__proto__=C.Aex;C.ACp.__proto__=C.Ba;C.AU3.__proto__=C.SX;C.AU7.__proto__=
C.Rd;C.APA.__proto__=C.BR;C.AR5.__proto__=C.Fr;C.AR4.__proto__=C.Fr;C.AR3.__proto__=
C.Fr;C.AMk.__proto__=C.AmA;C.AR9.__proto__=C.Ui;C.AM8.__proto__=C.OverlayMenu;C.
AEr.__proto__=C.AC;C.AHd.__proto__=C.O4;C.AHA.__proto__=C.Cm;C.AU5.__proto__=C.BX;
C.Wt.__proto__=C.Cm;C.AN2.__proto__=C.Ej;C.APc.__proto__=C.Ku;C.AN5.__proto__=C.
Ej;C.APf.__proto__=C.Ku;C.M_.__proto__=C.GJ;C.Av2.__proto__=C.VF;C.ADI.__proto__=
C.De;C.ACo.__proto__=C.Ba;C.APH.__proto__=C.AjT;C.AVR.__proto__=C.Cg;C.AVQ.__proto__=
C.Cm;};C._ReInit=function(){var B;if((B=C.AxK._this))B._ReInit(),C.AxK._ReInit.call(
B);if((B=C.AxL._this))B._ReInit(),C.AxL._ReInit.call(B);if((B=C.A7._this))B._ReInit(
),C.A7._ReInit.call(B);if((B=C.Pr._this))B._ReInit(),C.Pr._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afk._this
))B._ReInit(),C.Afk._ReInit.call(B);if((B=C.BS._this))B._ReInit(),C.BS._ReInit.call(
B);if((B=C.WS._this))B._ReInit(),C.WS._ReInit.call(B);if((B=C.AsJ._this))B._ReInit(
),C.AsJ._ReInit.call(B);if((B=C.An0._this))B._ReInit(),C.An0._ReInit.call(B);if((
B=C.DQ._this))B._ReInit(),C.DQ._ReInit.call(B);if((B=C.Au0._this))B._ReInit(),C.
Au0._ReInit.call(B);if((B=C.Amw._this))B._ReInit(),C.Amw._ReInit.call(B);if((B=C.
Awa._this))B._ReInit(),C.Awa._ReInit.call(B);if((B=C.Awb._this))B._ReInit(),C.Awb.
_ReInit.call(B);if((B=C.Aya._this))B._ReInit(),C.Aya._ReInit.call(B);};C.DI=function(
D){var B;if((B=C.AxK._this)&&(B._cycle!=D))B._Done(C.AxK._this=null);if((B=C.AxL.
_this)&&(B._cycle!=D))B._Done(C.AxL._this=null);if((B=C.A7._this)&&(B._cycle!=D)
)B._Done(C.A7._this=null);if((B=C.Pr._this)&&(B._cycle!=D))B._Done(C.Pr._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afk._this)&&(B._cycle!=D))B._Done(C.Afk._this=null);if((B=C.BS._this)&&(B._cycle
!=D))B._Done(C.BS._this=null);if((B=C.WS._this)&&(B._cycle!=D))B._Done(C.WS._this=
null);if((B=C.AsJ._this)&&(B._cycle!=D))B._Done(C.AsJ._this=null);if((B=C.An0._this
)&&(B._cycle!=D))B._Done(C.An0._this=null);if((B=C.DQ._this)&&(B._cycle!=D))B._Done(
C.DQ._this=null);if((B=C.Au0._this)&&(B._cycle!=D))B._Done(C.Au0._this=null);if((
B=C.Amw._this)&&(B._cycle!=D))B._Done(C.Amw._this=null);if((B=C.Awa._this)&&(B._cycle
!=D))B._Done(C.Awa._this=null);if((B=C.Awb._this)&&(B._cycle!=D))B._Done(C.Awb._this=
null);if((B=C.Aya._this)&&(B._cycle!=D))B._Done(C.Aya._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */