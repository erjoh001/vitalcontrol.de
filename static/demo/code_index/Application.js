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
I0=[6,15,14,19];var Iw=[6,9,14,13];var O$=[209,7,229,37];var Qc=[0,40,240,320];var
Qd=[0,228,240,298];var CR=" ";var Ff=[0,40,240,280];var L9=[0,40,232,280];var Qe=[
0,40,116,160];var J9=[114,40,230,160];var Oh=[0,160,116,280];var Qf=[116,160,232
,280];var MQ=[0,280,116,400];var Te=[116,280,232,400];var U0=[0,400,116,520];var
Aab=[116,400,232,520];var Xe=[-1,520,115,640];var Ix=[232,40,240,280];var U1=[5,
40,235,120];var Aac=[120,140,210,230];var U2=[20,140,110,230];var Aad=[0,0,116,120
];var Xf=[0,0,120,120];var Aae=[0,0,116,45];var Aaf=[0,0,8,200];var U3=[0,0,8,20
];var Xg=[30,0,210,40];var Pa=[0,0,40,40];var Aag=[7,8,200,40];var Oi=[0,0,200,40
];var Rq=[6,1];var Xh="ERROR: Invalid value for ItemHighlighting";var Xi=[10,10,
40,30];var Tf=[0,0,120,40];var Xj=[60,0,180,40];var Aah=[120,0,240,40];var Xk=[0
,0,100,40];var Xl=[83,0,157,40];var Tg=[140,0,240,40];var Th=[0,0,20,40];var Ti=[
220,0,240,40];var Aai=[0,0,300,30];var Tj=[0,30,300,60];var Aaj=[0,60,300,90];var
AfF=[0,90,300,120];var Aak=[0,100,300,110];var Xm=[0,50,300,60];var Aal=[0,30,300
,40];var Xn="*";var AhY=[40,40];var K4=[0,0,240,80];var AcR=[0,0,240,50];var LB=
"Cap";var AhZ=[0,40,40,80];var Aoj=[200,40,240,80];var Oj=[30,40,210,80];var Xo=
"--";var Aam="%d";var AfG="%m";var Ah0="%Y";var AcS=" (";var U4=[0,0,232,80];var
Aok="Date";var Aol=[48,40,88,78];var Aom=[39,40,79,80];var Aon=[80,44,87,77];var
Ale=".";var As6=[88,44,120,77];var Ayc=[120,44,127,77];var Ayd=[127,44,191,77];var
Pb=[0,0,80,40];var Rr="Text";var Aye=[430,102,430,102];var U5=[0,0,240,240];var As7=[
232,0,240,240];var Ayf=[0,10,240,240];var Ayg="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Alf=[0,80,240,280];var
Ayh="Unhandled option";var AfH="Unhandled animal list action";var Aoo="Animal list content not handled.";
var I1=[0,40,240,80];var Aop="Set Selected";var As8=" %%";var Xp=[0,180,240,220];
var As9=[82,127,167,150];var As_="Group";var As$=[77,91,167,124];var Aoq=[0,0,90
,33];var Ata=[4,4,18,29];var Alg=[20,4,34,29];var Ayi=[36,4,50,29];var Ayj=[52,4
,66,29];var Ayk=[68,4,82,29];var Atb="ERROR: Unhandled Device::SyncState";var Ayl=
":\n";var Pc="{1}";var Aym="{2}";var AWp=[0,49,240,109];var AWq=[0,170,240,243];
var AWr=[0,110,240,170];var AWs=[20,243,220,268];var AHF=[30,8];var AHG="\u2265 ";
var AfI=[0,0,240,160];var Aor=[0,0,0,0];var AWt=[0,0,240,66];var AHH=[10,0,76,66
];var Alh=[33,33];var AHI=[87,0,153,66];var AHJ=[164,0,230,66];var AWu="No statistics available";
var AWv="in this environment.";var AHK=" fps";var AWw="CPU: - %%";var AcT=[0,0,240
,120];var AWx=[130,0,237,20];var AWy=[20,0,120,20];var AWz=[0,20,240,40];var AHL=[
40,20,100,40];var Atc=[100,20,240,40];var AHM=[0,40,240,60];var AHN=[40,40,100,60
];var Ayn=[100,40,240,60];var AHO=[0,60,50,80];var Ayo=[100,60,240,80];var AWA=[
0,80,50,100];var AWB=[100,80,240,100];var AWC=[0,100,50,120];var AWD=[100,100,240
,120];var AHP=[5,5,15,15];var AWE="%H";var MR="%M";var Ayp="Time";var AWF=[79,40
,119,78];var AWG=[125,40,164,80];var AWH=[86,40,126,80];var AWI=":";var AWJ=[75,
40,115,80];var AHQ=[0,0,240,150];var AWK=[60,0,155,40];var Ayq=[30,0,65,40];var AWL=[
60,0,100,40];var Atd=[88,0,128,40];var Ayr=[60,0,71,40];var AWM=[60,0,74,40];var
AHR=[90,0,123,40];var AWN=[120,0,161,40];var AHS=[120,0,165,40];var AHT=[60,0,88
,40];var AHU=[60,0,95,40];var AWO="Did not expect iterator bigger than number of records";
var AHV=[20,0,240,20];var AWP=[0,38,240,40];var AWQ=[0,0,8,4];var Rs=[0,0,240,280
];var U6=[0,280,240,320];var AWR="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AWS="]";var AWT="ERROR: Cannot find closing bracket \'}\' in text [";var AWU=
"] opened at index ";var AWV="#";var AWW="ERROR: Invalid parameter: {";var AWX="}";
var Ah1=[20,20];var AHW=[0,12];var AWY="ERROR: Not expected Application::FooterFocus, ";
var AWZ="%M:%S";var AHX=[30,150,207,170];var AHY=[20,70,217,194];var Ays="Unhandled item.";
var Qg=[0,80,240,120];var AW0="Unhandled Overlay Menu ";var AW1="Invalid bootloader message: ";
var AW2="Unknown USBState: ";var Ate="Invalid fader";var AW3=[2,4,32,40];var AW4=[
29,4,80,40];var AW5=[120,4,200,40];var AW6=[80,0,114,40];var AW7="-1";var AW8="< ";
var Atf=[0,0,232,40];var AW9=[22,40,180,80];var AW_=[2,40,22,80];var AW$=[23,40,
163,80];var AXa=[210,40,230,80];var AXb=[164,40,210,80];var AXc=[169,43,205,77];
var AXd="ERROR: No outlet assigned";var AXe="Unhandled screen";var AXf="ERROR: Cannot cache null screen.";
var AXg="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AHZ="Untreated Rating Method type!";var Ali="Unhandled animal type";var AXh=[
5,60,235,140];var AXi=[0,130,240,196];var AXj=[49,240,229,280];var Ayt="Implement in derived classes!";
var Alj="Implement in derived class";var Ah2=[0,40,230,120];var Ayu=[0,120,230,200
];var Aos=[0,200,230,280];var Ah3=[0,280,230,360];var AXk=[0,360,230,440];var Ayv=[
230,40,238,280];var AH0="WARNING: Unhandled filter field: ";var AfJ="Should not happen.";
var AH1="Invalid Boolean item";var Aan=[0,120,240,160];var Alk=[0,160,240,200];var
Aot=[0,200,240,240];var AXl=[1152,11,1392,51];var AXm=[1152,51,1392,91];var AXn=[
1152,91,1392,131];var AXo=[1152,131,1392,171];var AXp=[1152,171,1392,211];var Atg=[
0,240,240,280];var AH2=[10,0,240,40];var AH3=[190,0,230,40];var AXq=[60,3,95,39];
var AXr=[95,4,200,40];var AXs=[3,3];var AXt=[6,6];var AXu=[59,5,197,35];var AXv=[
59,2,200,38];var AXw=[3,2,43,42];var AXx=[0,17,43,40];var AXy=[50,40];var AXz=[50
,0];var AXA="Illegal shifting direction";var Ayw=[0,0,160,30];var AH4=[0,0,25,30
];var AH5=[27,0,52,30];var AH6=[54,0,79,30];var AH7=[81,0,106,30];var AH8=[108,0
,133,30];var AH9=[135,0,160,30];var AXB="Internal queue error";var AXC="ERROR: No corresponding Id ";
var AXD=" found.";var AXE="ERROR: Error in range test";var AXF=[120,67,210,157];
var AXG=[0,40,240,70];var AXH=[20,67,110,157];var Ayx=[0,160,240,280];var AH_=[20
,77,90,147];var AXI=[0,0,210,40];var AH$=[195,0,235,40];var Ah4=[0,40,232,120];var
U7=[0,120,232,200];var AXJ=[0,40,232,200];var Aao=[0,200,232,280];var AXK=[0,320
,240,400];var AXL=[0,120,53,200];var All=[0,280,232,360];var AfK="%%";var Ah5=[0
,360,232,440];var Aou=[0,440,232,520];var Ayy=[0,80,207,120];var Pd=")";var AXM=
"/";var AIa=[5,0,88,30];var AIb=[88,0,240,30];var AXN="276000312345678";var Ayz=[
5,30,100,60];var AIc=[100,30,240,60];var AXO="Manufacturer";var AXP="Country";var
AXQ=[5,60,240,90];var AXR="Niedersachsen";var AXS=[5,90,145,120];var AXT=[140,90
,240,120];var AXU="Protocol";var AXV=[0,0,120,100];var AId=[0,40,116,120];var AXW=[
40,80,92,107];var AIe=[0,0,50,23];var AIf="ERROR: Unhandled Device::MeasureState";
var AyA=[0,120,240,280];var AXX=[178,159,248,203];var AXY=[10,145,170,225];var AXZ=[
0,61,240,101];var AX0=[0,0,40,23];var AX1=[101,113,141,136];var AX2=[101,235,141
,258];var AX3=[69,288,101,313];var AX4=[0,40,240,200];var Aov=[0,200,240,280];var
Ath=[0,280,240,360];var AIg="\u2264 ";var AX5=[0,80,94,160];var AX6=[94,80,184,160
];var AX7=[184,80,240,160];var AX8=[197,105,231,139];var AX9=[105,101,173,127];var
AX_=[7,101,75,127];var AIh=[94,125,184,151];var AX$=[2,125,92,151];var AYa=[0,70
,240,101];var AYb=[0,106,240,280];var AYc=[30,40,240,70];var AYd=[0,40,30,70];var
AYe="\u278B";var AYf=[0,0,240,175];var AYg=[0,0,232,175];var AIi=[232,0,240,175];
var AYh="Text Here !";var AYi=[200,0,240,40];var AIj="1";var AIk="2";var AIl="3";
var AIm="4";var AyB=[0,360,232,400];var AyC="ERROR: invalid item class.";var AIn=[
10,220,250,260];var AIo=[185,0,225,40];var AIp="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AyD="ERROR: Received more actions than expected!";var AyE=", ";var AYj=
"ERROR: Cannot set action at position=";var AYk=". Current elements:";var AYl=", max elements:";
var AYm="17";var AYn=[0,0,58,58];var AYo=[0,0,60,60];var AYp=[30,0,58,20];var AYq=[
7,6,25,24];var AYr=[30,60,130,160];var AYs=[0,0,28,20];var AYt=[4,3,40,24];var AYu=[
0,0,42,27];var AyF=[0,0,17,17];var AYv="Unknown direction of counting enum value: ";
var AYw="Unknown id generation method enum value: ";var AyG="Invalid animal id generation method: ";
var Ati="Unhandled popup id";var U8="0";var Atj=";";var AYx=[0,400,230,480];var AYy=[
5,120,235,200];var AYz=[0,640,230,760];var AIq=[0,0,300,200];var AYA=[20,40,220,
80];var AIr=[20,80,220,280];var AYB=[140,0,188,40];var AYC="ERROR: Row containing birth weight could not be loaded";
var AYD=[0,440,230,520];var Atk="ID";var AYE=[40,40,198,70];var AYF="Extra info: ";
var AIs=" -";var AYG=[0,0,230,120];var AYH=[0,0,230,40];var AYI=[0,80,230,120];var
AYJ="\xB0Brix";var AcU=[0,320,230,400];var AYK=[0,410,230,490];var AYL="ERROR: aNumberOfDays can not be < 0 ";
var AYM="{WEIGHTGAIN} ";var AYN="\xB1";var AIt="+";var AYO="{WEIGHTGAIN}";var AYP=
"{DAYS}";var AYQ="ERROR: aString can not be null";var AYR=[166,70,240,114];var AYS=[
0,60,160,120];var AYT=[30,0,240,60];var AIu=[1,6,29,54];var AYU=[30,60,240,120];
var AYV="Con";var AYW=[70,50,170,70];var AIv="Unhandled Device::NaisIdValidationResult: ";
var AIw="Unhandled PopupId";var AYX=[110,123,230,248];var AYY=[5,0,250,40];var AYZ=[
102,0,186,40];var AY0=[153,0,240,40];var Rt="-";var Atl=[170,0,240,40];var AIx=[
220,0,320,30];var AIy=[200,20,300,50];var Aow=[180,0,180,40];var Aox=[170,0,170,
40];var AyH="Untreated state";var AY1="ERROR: Animal id scanned in an unexpected state : ";
var AIz="ERROR: Null animal id scanned.";var AY2=[40,40,235,100];var AY3=[120,100
,210,190];var AY4=[20,100,110,190];var AY5=[0,40,40,100];var AY6="\u278A";var AY7=
"Action untreated";var AY8="ERROR: No corresponding ";var AY9=" action found!";var
AY_="Unhandled action: ";var AY$=[0,186,240,216];var AZa=[0,220,232,280];var AZb=[
5,190,235,270];var AZc=[232,60];var AZd=[0,2];var AZe=[58,58];var AZf="A";var AZg=[
56,0,156,40];var Aoy=[156,0,240,40];var AIA=" 7 ";var AZh=[40,0,156,40];var AIB=
"/-1/-2";var AIC=[72,0,144,40];var AcV="\n";var AID="(";var AZi=[72,0,156,40];var
AIE="%y/%m";var AZj=[70,0,240,40];var AyI=[70,0,120,40];var AZk=[160,0,245,40];var
AZl="- ";var AyJ=" - ";var AZm="{parc}{clr3}";var AZn="{clr0}/^{clr2}";var AZo="{clr0}/^{clr1}";
var AIF=[0,0,85,40];var Aoz="?";var AIG=[0,0,120,140];var AZp=[0,0,116,40];var AIH=[
15,0,100,40];var AII=[110,0,200,40];var Alm=[0,0,34,34];var AZq=[129,0,157,40];var
AoA=[0,0,25,25];var AZr="\u2611";var AIJ="\u2610";var AIK=[5,0,72,40];var AZs=[150
,0,240,40];var AZt=[72,0,139,40];var AIL="Unvalid content class: ";var AZu=[0,320
,240,360];var AZv=[0,360,240,400];var AZw=[144,0,170,40];var AZx=[187,0,213,40];
var AZy=[207,10,233,50];var AZz=[247,20,273,60];var AZA=[140,0,150,100];var AZB=[
165,0,175,100];var AZC=[185,0,195,100];var AZD=[205,0,215,100];var AZE=[211,0,233
,40];var AZF=[189,0,211,40];var AZG=[167,0,189,40];var AZH=[145,0,167,40];var AyK=[
5,0,240,40];var Aap=[10,0,10,40];var AIM="= \u2211 ";var AyL=[125,0,240,40];var AZI=[
130,0,170,40];var AZJ="\xD8 ";var AZK=[100,10,116,36];var AZL=[117,10,133,36];var
AZM=[135,10,151,36];var AZN="Implement in derieved class";var Atm=[0,80,240,240];
var Atn=[0,120,232,160];var Ato=[0,160,232,200];var Atp=[0,200,232,240];var AyM=[
0,240,232,280];var AoB=[0,320,232,360];var AZO=[-61,360,232,400];var AZP=[0,400,
32,440];var AZQ=[0,100];var AZR=[0,40,240,240];var AZS=[0,50000];var AZT=[0,500];
var AZU=[0,0,240,105];var AoC=[0,105,240,210];var AZV=[0,40,240,81];var AZW=[0,81
,240,122];var AZX=[0,122,240,163];var AZY=[0,163,240,205];var AZZ=[0,205,240,240
];var AZ0=[0,200];var AZ1=[0,40,240,73];var AyN=[0,0,30,40];var AIN=[0,40,30,80];
var Aln=[60,40];var AyO=[60,0];var AZ2=[10,0,40,40];var AZ3=[0,190,240,260];var AZ4=[
0,130,240,190];var AIO=[40,40,200,130];var AZ5=[90,230,170,253];var AZ6=[80,190,
170,223];var AZ7=[0,130,240,180];var AZ8=[0,250,240,280];var AZ9=[129,0,156,40];
var AZ_=[72,0,100,40];var AZ$=[100,0,129,40];var A0a=[78,8,103,33];var AIP=[0,0,
300,120];var A0b=[1,-1];var A0c=[20,40,240,120];var AIQ=[20,0,240,40];var A0d=[0
,118,240,120];var AIR=[0,20,130,40];var A0e=[130,20,240,40];var A0f=[0,0,10,20];
var AyP="\u2191";var A0g=[230,0,240,20];var Atq=[0,40,232,80];var A0h=[0,80,232,
160];var A0i=[0,160,230,240];var Atr=" p. p.";var AyQ="Unknown animal type";var AyR=[
80,0,140,40];var A0j=[50,0,172,40];var A0k=[172,0,240,40];var A0l=[0,90,240,92];
var AIS="Unhandled menu item";var AIT=[0,0,50,30];var Alo=[0,0,30,30];var A0m="No AnimalActionTemperatureScreen found!";
var A0n="840003123456789";var A0o=[40,0,230,40];var A0p=[50,10,230,30];var AyS="No AnimalMultiInfoScreen found!";
var Ats=[0,0,25,40];var AIU="/^";var BaM="?/?";var Brt=[100,4,180,40];var Bru=[65
,0,99,40];var Brv=[165,0,200,40];var BaN=[0,0,60,40];var BaO="9999/^9999";var Brw=
"Invalid index: ";var Brx="Unknown AnimalIdGenerationMethod: ";var Bry="Invalid gender: ";
var Att="Invalid input state: ";var Brz="Unhandled AnimalIdGenerationMethod";var
BrA=[42,35,67,75];var BrB=[5,35,39,75];var BrC=[70,40,228,70];var BrD="Invalid direction for setting focus";
var Ah6="Invalid index";var BrE="Unvalid direction";var BrF=[0,0,42,30];var BaP=[
22,0,42,30];var BrG=[20,0,40,30];var BrH=[0,0,158,30];var BaQ=[32,0,62,30];var BaR=[
64,0,94,30];var BaS=[96,0,126,30];var BrI=[128,0,158,30];var BrJ=" %% ";var BrK=[
0,70,240,220];var BrL=[0,237,240,307];var BaT="\n44 %% done";var BrM=[0,0,166,30
];var AIV=[0,0,12,30];var AyT=[14,0,26,30];var A0q=[28,0,40,30];var A0r=[42,0,54
,30];var A0s=[56,0,68,30];var A0t=[70,0,82,30];var A0u=[84,0,96,30];var A0v=[98,
0,110,30];var BaU=[112,0,124,30];var A0w=[126,0,138,30];var BrN=[140,0,152,30];var
BrO=[154,0,166,30];var BaV=[20,0,46,30];var BrP="\u2642";var BrQ="{fnt3}\u2642{fnt1}";
var BrR="\u2640";var BrS="{fnt3}\u2640{fnt1}";var BrT="{parc}";var BrU=[30,30,210
,80];var BrV="Implement in derieved class!";var BrW=[60,4,226,34];var BaW=[30,4,
58,34];var BaX=[4,0,27,40];var BrX=[116,4,228,34];var BrY=[60,4,86,34];var BrZ=[
88,4,114,34];var AoD="Implement in derived class!";var BaY="Implement in derived class.";
var Br0="Invalid nais id view: ";var Br1=[0,35,240,75];var Br2=[0,0,110,30];var Br3=[
0,0,26,30];var Br4="100";var A0x="\n\n";var Br5=[240,240];var Br6=[0,240];var Br7=
"Unknown rated attribute: ";var Br8=[120,80,240,280];var Br9=[0,80,120,280];var AIW=
" %% (";var AyU=" \xB1 ";var AyV=" (n = ";var A0y=[0,80,232,120];var Br_=[0,242,
232,282];var A0z=[0,280,232,320];var Br$=[35,0,200,40];var Bsa=[1,0,31,40];var Bsb=[
32,40];var Bsc=[32,0];var Bsd=[3,0,83,40];var BaZ=[180,0,240,40];var Bse=[120,0,
180,40];var Bsf=[65,0,125,40];var Bsg=[0,0,120,200];var Bsh=[0,40,120,150];var Ba0=[
15,160,60,190];var Ba1=[60,160,105,190];var Bsi=[0,65,240,135];var Bsj=[10,112,170
,192];var Bsk=[178,129,248,173];var Bsl=[0,40,240,110];var Bsm=[10,98,170,178];var
Bsn=[178,112,248,156];var Bso=[85,190,160,265];var Bsp=[89,194,155,260];var Bsq=[
26,190,111,250];var Bsr=[125,181,225,211];var Bss=[100,220,183,250];var Bst="38.7";
var Bsu=[180,220,225,250];var Bsv="\xB0C";var Bsw=[0,99,240,178];var Bsx=[100,280
,140,320];var Bsy=[0,26,240,105];var Ba2=[30,40];var Ba3=[30,0];var Bsz=[149,0,200
,40];var BsA=[145,40];var BsB=[145,0];var BsC=[38,0,88,40];var A0A=[0,0,35,40];var
BsD=[0,0,50,40];var BsE=[40,0,200,40];var BsF=[95,0,145,40];var BsG=[65,5,223,35
];var A0B=[0,0,15,40];var BsH=[72,0,140,40];var Ba4="\n(";var BsI="%y/%m/%d";var
BsJ="%y ";var BsK=" %m ";var BsL=" %d ";var BsM="20";var BsN=[225,0,240,40];var BsO=[
0,400,232,440];var BsP=[0,440,232,480];var BsQ=[0,480,232,520];var BsR=[0,520,232
,560];var BsS=[0,560,232,600];var BsT=[0,598,232,638];var BsU=[5,0,215,40];var BsV=[
215,8,240,33];var BsW="Implement in dervied class.";var BsX="ERROR: Unhandled temperature unit: ";
var AIX="ERROR: Unhandled mass unit: ";var BsY=[-1,160,115,280];var BsZ=[114,160
,230,280];var A0C=[116,40,232,160];var AyW="Unknown weight class index: ";var Bs0=
"< 35";var Bs1="35 - 40";var Bs2="40 - 45";var Bs3="45 - 50";var Bs4="\u2265 50";
var Bs5="< 80";var Bs6="80 - 90";var Bs7="90 - 100";var Bs8="100 - 110";var Bs9=
"\u2265 110";var Ba5="Unknown mass unit";var Bs_=[143,0,193,40];var Ba6=[192,0,240
,40];var Bs$=[44,28,44,28];var Bta="0 %%";var Btb=[-1,40,115,160];var Btc=[117,40
,233,160];var Btd=[1,160,117,280];var Bte=[114,158,230,278];var Btf=[1,280,117,400
];var Btg=[30,0,155,40];var Ba7="\u2620";var A0D=[380,150,380,190];var Ba8=[105,
0,155,50];var A0E=[190,1,240,41];var Bth=[72,0,108,40];var Bti=[108,0,180,40];var
Btj=[60,0,94,40];var Btk=[94,0,200,40];var Btl="Scroll direction not supported.";
var Btm=[44,0,207,40];var Btn=[207,0,240,40];var Bto="99";var Btp="Unknown birth type";
var Btq=[44,0,189,40];var Btr=[5,0,44,40];var Bts=[44,0,240,40];var Btt=[240,0,240
,40];var Btu="\u25C9";var Ba9="\u25CB";var Btv=[75,4,215,34];var Btw=[47,4,73,34
];var Ba_=[17,4,45,34];var Btx=[0,0,138,30];var Bty=[47,4,215,34];var A0F="Unhandled MotherSelectionFilterMode: ";
var Btz="Read only!";var BtA="actions array too small to hold all actions";var BtB=[
120,40];var BtC=[120,0];var BtD=[5,0,115,40];var BtE=[0,0,205,40];var BtF=[59,4,
170,34];var BtG=[59,1,173,37];var BtH=[175,1,205,37];var BtI=[0,0,37,40];var BtJ=[
115,98,205,188];var BtK=[0,40,235,100];var BtL=[2,200,240,280];var BtM=" 01234";
var BtN=[0,0];var BtO=[33,63];var BtP=[25,56];var BtQ="Unknown transponder image type: ";
var AIY=[0,0,82,82];var BtR=[0,0,81,26];var BtS=[105,120,195,210];var BtT=[10,140
,100,230];var Ba$="Unhandled EartagNrAssignmentMode: ";var BtU="Unhandled Gender";
var BtV=[10,35,35,75];var BtW=[44,40,202,70];var BtX=[204,35,232,75];var BtY="Unvalid FatoryResetScope";
var Bba=[0,120,240,200];var BtZ=[144,0,192,40];var Bt0=[144,0,240,40];var Bt1=[195
,0,245,50];var Bt2=[120,0,120,40];var Bt3=[140,0,240,30];var Bt4=[30,0,232,40];var
Bt5=[60,0,160,40];var Bt6=[160,0,200,40];var Bt7=[150,17,200,40];var Bt8=[155,40
];var Bt9=[155,0];var Bt_=[146,80,240,160];var Bt$=[56,80,146,160];var Bua=[0,80
,56,160];var Bub=[13,107,47,141];var Buc=[74,109,104,139];var Bud=[50,100,130,150
];var Bue=[55,112,145,140];var Buf=[146,112,236,140];var Bug=[150,86,223,110];var
AIZ=[0,40,240,120];var Buh="Menu item for animal table field not found";var Bbb=[
0,360,240,440];var Bui=[0,440,240,520];var Buj=[5,40,235,104];var Buk=[120,108,226
,218];var Bul=[20,120,110,210];var Bum=[5,223,235,280];var Bun=[0,0,64,30];var Buo=[
44,0,64,30];var Bup=[185,5,225,35];var Buq=[170,5,234,35];var Bbc=[0,80,240,200];
var Bur="Error!";var Bus="Unhandled number of digits";var But=[0,0,126,30];var Buu=[
22,5,149,35];var Buv=[149,0,232,40];var Bbd=[5,20];var Buw=[5,0];var Bux="Unhandled AnimalIdAutoGenerationMethod: ";
var Buy=[4,440,236,520];var Buz="Unhandled TransponderAssignmentIdChangeMethod: ";
var BuA="\n";var BuB="%";var BuC=[0,0,160,120];var BuD=[2,2,157,117];var BuE=[50
,70];var BuF=[50,50];var BuG=[0,0,168,40];var BuH=[168,0,240,40];var BuI=[0,47,232
,77];var BuJ=[65,0,101,40];var BuK=[135,0,175,40];var BuL=[85,17,135,40];var BuM=[
125,17,175,40];var BuN=[40,0];var Bbe=[0,40,230,280];var BuO="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuP="ERROR: Received more animal table fields than expected!";
var BuQ=[0,80,240,130];var BuR="Unhandled Device::MassDeregistrationCriterion: ";
var Bbf="Unhandled BackupError: ";var BuS="Unhandled PopupId: ";var BuT=[203,0,240
,40];var BuU=[168,0,203,40];var BuV=[35,0,152,40];var BuW=[0,0,84,40];var BuX=[84
,0,167,40];var BuY="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMY={Device:null,A6z:null,GK:null,Init:function(aArg){},DriveCursorHitting:function(
Tl,BH,Fh){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.GK._Init.call(this.
GK={I:this},0);this.__proto__=C.AMY;this.H(Cf);this.J(this.GK,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A6z=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var J_=
this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.GK._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.GK.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A6z)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.aco.A5H._variants();
},K:null,_className:"Application::Application"};C.AsG=[240,320];C.AB={Background:
null,Ek:null,ADu:null,Aoa:0,Init:function(aArg){A.pe([this,this.A1c],this);A.pe([
this,this.Bft],this);},LU:function(G){},A1c:function(s){this.LU(s);},CC:function(
G){},AI1:function(s){this.CC(s);},E4:function(G){},AyX:function(s){this.E4(s);},
Dr:function(E){if(this.ADu===E)return;this.ADu=E;A.pe([this,this.Bft],this);},Bft:
function(G){var B;if(!!this.ADu)this.Ek.Ab_((C.BR.isPrototypeOf(B=A._NewObject(this.
ADu,0))?B:null));else this.Ek.Ab_(null);},_Init:function(aArg){C.Abr._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ek._Init.call(this.
Ek={I:this},0);this.__proto__=C.AB;this.Background.A1(0x3F);this.Background.H(Cf
);this.Background.L(A.jb.CU);this.Ek.H(BD);this.Ek.As(false);this.J(this.Background
,-1);this.J(this.Ek,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abr;this.
Background._Done();this.Ek._Done();C.Abr._Done.call(this);},_ReInit:function(){C.
Abr._ReInit.call(this);this.Background._ReInit();this.Ek._ReInit();},_Mark:function(
D){var B;C.Abr._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WX={In:null,Zv:function(E){var B;if(this.In===E)return;if(!!this.In)this.AqO(
this.In,null,null,null,[B=this.In,B.AyX],null,false);this.In=E;if(!!this.In)this.
AkO(this.In,null,null,null,null,null,null,[B=this.In,B.AI1],null,false);},AEQ:function(
){return this.In;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WX;this.H([0,0,C.AsG[0],C.AsG[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.In)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.OF={Ve:null,Q:null,AnR:null,ZI:null,NY:null,OD:null,TN:null,TO:null,AGx:255,
Hg:function(G){var F;if(!!this.Q){this.A2J();var Adc=(F=this.Q,F[1].call(F[0]));
if(Adc>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gk);this.OD.L((this.OD.AQ&0x00FFFFFF
)|(this.AlQ(Adc,0,30)<<24));this.TN.L((this.TN.AQ&0x00FFFFFF)|(this.AlQ(Adc,31,60
)<<24));this.TO.L((this.TO.AQ&0x00FFFFFF)|(this.AlQ(Adc,61,100)<<24));}},A1a:function(
s){this.Hg(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A1a],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A1a],E,0);if(!!E)A.pe([this,
this.A1a],this);},A3X:function(G){var F;if(!!this.AnR)this.ZI.As((F=this.AnR,F[1
].call(F[0])));else this.ZI.As(false);this.A_Y(255);},A_R:function(E){if(A.aaZ(this.
AnR,E))return;if(!!this.AnR)A.z$([this,this.A3X],this.AnR,0);this.AnR=E;if(!!E)A.
zX([this,this.A3X],E,0);if(!!E)A.pe([this,this.A3X],this);},A_Y:function(E){if(this.
AGx===E)return;this.AGx=E;if(!!this.Ve)this.Ve.L((this.Ve.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlQ:function(A1g,BcF,Bx6){if(A1g<BcF)return 0;else if((A1g>=BcF)&&(A1g<
Bx6))return this.AGx&0xFF;else return 255;},A2J:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.Ve=this.TO;else if((F=this.Q,F[1].call(F[0]))>
30)this.Ve=this.TN;else this.Ve=this.OD;}else this.Ve=null;},BlT:function(){return this.
AGx;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZI._Init.call(this.ZI={
I:this},0);A.acg.Ap._Init.call(this.NY={I:this},0);A.acg.AL._Init.call(this.OD={
I:this},0);A.acg.AL._Init.call(this.TN={I:this},0);A.acg.AL._Init.call(this.TO={
I:this},0);this.__proto__=C.OF;this.H(E8);this.ZI.Fr(2000);this.NY.H(E8);this.NY.
L(A.jb.Text);this.OD.H(Hs);this.OD.L(A.jb.E1);this.TN.H(I0);this.TN.L(A.jb.E1);this.
TO.H(Iw);this.TO.L(A.jb.E1);this.J(this.NY,0);this.J(this.OD,0);this.J(this.TN,0
);this.J(this.TO,0);this.ZI.Q=[this,this.BlT,this.A_Y];this.NY.Ax(A.aaL(A.ach.AM8
));},_Done:function(){this.__proto__=A.Core.P;this.ZI._Done();this.NY._Done();this.
OD._Done();this.TN._Done();this.TO._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZI._ReInit();this.NY._ReInit();this.OD._ReInit(
);this.TN._ReInit();this.TO._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Ve)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZI={_Init:function(aArg){A.acl.Gn._Init.call(
this,aArg);this.__proto__=C.ZI;this.Ak0=true;this.B3=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ek={GK:null,AR:null,Background:null,OF:null,Bo:
null,Do:null,Lb:0,Avu:0,Avv:0,Ao8:0,LN:false,KM:false,Qz:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hf){this.Ao8=A.jb.CU;this.Lb=A.jb.Text;}else if(GE){this.Ao8=
this.Avu;this.Lb=this.Avv;}else if(Fw){this.Ao8=this.Avu;this.Lb=this.Avv;}else{
this.Ao8=A.jb.CU;this.Lb=A.jb.Text;}this.Background.L(this.Ao8);if(!!this.GK){this.
GK.WN(this.Ao8);this.GK.Dg(this.Lb);}this.LN=Hf;this.KM=Fw;this.Qz=GE;},Qy:function(
G){this.Am();A.pe(this.AR,this);},AiT:function(G){if(this.Do.Acp)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);},Ab_:function(
E){if(this.GK===E)return;if(!!this.GK)this.HR(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.Am();},A_z:function(E){if(this.Avu===E)return;this.
Avu=E;this.Am();},A_A:function(E){if(this.Avv===E)return;this.Avv=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.OF._Init.call(this.OF={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=C.Ek;var B;this.
H(BD);this.Background.A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.CU);
this.OF.H(O$);this.Lb=A.jb.Text;this.Bo.P0(0);this.Bo.WO(50);this.Do.Filter=1;this.
Avu=A.jb.AV;this.Avv=A.jb.Bm;this.Ao8=A.jb.Text;this.J(this.Background,0);this.J(
this.OF,0);this.OF.Au([B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyY]);this.OF.
A_R([B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyZ]);this.Bo.MJ=[this,this.Qy];
this.Do.BG=[this,this.AiT];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.OF._Done();this.Bo._Done();this.Do._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
OF._ReInit();this.Bo._ReInit();this.Do._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X9={AeR:null,UK:null,CC:function(G){if(this.K&&this.K.CC
)return this.K.CC.apply(this,arguments);else return C.AB.CC.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeR={I:this},0);A.acg.Text._Init.call(this.UK={I:
this},0);this.__proto__=C.X9;this.AeR.H(Qc);this.UK.H(Qd);this.UK.R(A.jV);this.UK.
L(A.jb.Text);this.UK.Z(false);this.J(this.AeR,0);this.J(this.UK,0);this.AeR.Ax(null
);this.UK.S(A.aaL(A.fl.EK));var J_=this._variants();if(J_){this.K={};J_._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeR._Done();this.UK._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeR._ReInit();this.UK._ReInit();this.UK.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UK)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.
X9._variants();},K:null,_className:"Application::BootScreen"};C.AVj={AAU:function(
G){A._GetAutoObject(C.A7).Acf(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AVj;this.Background.L(0xFF000000);this.Ek.Z(false);},_className:
"Application::SleepScreen"};C.AvH={DY:null,Y:null,Yj:null,Yk:null,VQ:null,Ya:null
,VS:null,X_:null,Yd:null,TS:null,Yc:null,Yl:null,Ay:null,CQ:function(){this.DK(this
);},Init:function(aArg){var B;A.zX([this,this.DK],[B=A._GetAutoObject(A.Device.Device
),B.ArG,B.Atu],0);A._GetAutoObject(A.Device.Helper).AkS();this.Bb(this.VQ);this.
N.Ct(A.aaL(A.ach.AD0));A.pe([this,this.DK],this);},Bb:function(E){var B;var A3x=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A3x)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AKd=A._NewObject(A.acl.AGu,0);AKd.Fr(250);AKd.HQ(1);AKd.WR(6);this.
Y.HK(this.AV,true,AKd,null);}},CC:function(G){this.A43(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkS();A._GetAutoObject(A.Device.Helper).AsA();},Fk:function(G){
var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.
Ay.MH(-this.Y.Br[1]);},Il:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VQ)A._GetAutoObject(C.A7).Cb(35);else if(Cy===this.Ya)A._GetAutoObject(
C.A7).Cb(34);else if(Cy===this.Yd)A._GetAutoObject(C.A7).Cb(69);else if(Cy===this.
VS)A._GetAutoObject(C.A7).Cb(8);else if(Cy===this.X_)A._GetAutoObject(C.A7).Cb(50
);else if(Cy===this.TS)A._GetAutoObject(C.A7).Cb(25);else if(Cy===this.Yj)A._GetAutoObject(
C.A7).Cb(77);else if(Cy===this.Yk)A._GetAutoObject(C.A7).Cb(70);else if(Cy===this.
Yl)A._GetAutoObject(C.A7).Cb(6);else if(Cy===this.Yc)A._GetAutoObject(C.A7).Cb(63
);},BBg:function(G){A._GetAutoObject(A.Device.Device).Ae4(!A._GetAutoObject(A.Device.
Device).AmX);},DK:function(G){if(A._GetAutoObject(A.Device.Device).AmX)this.N.Hz((
A.aaR(A.acf.A72)+CR)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hz((A.aaR(A.acf.
A72)+CR)+A.aaR(A.acf.A8H).toLowerCase());},Ady:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A43:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).MB());this.VS.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fo._Init.call(this.Yj={I:this
},0);C.Fo._Init.call(this.Yk={I:this},0);C.Fo._Init.call(this.VQ={I:this},0);C.Fo.
_Init.call(this.Ya={I:this},0);C.Q0._Init.call(this.VS={I:this},0);C.Fo._Init.call(
this.X_={I:this},0);C.Fo._Init.call(this.Yd={I:this},0);C.Fo._Init.call(this.TS={
I:this},0);C.Fo._Init.call(this.Yc={I:this},0);C.Fo._Init.call(this.Yl={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AvH;this.Background.L(A.
jb.CU);this.N.As(false);this.N.Z(true);this.Dr(C.Aq9);this.DY.A1(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Y.H(L9);this.Y.JZ(9);this.Yj.H(Qe);this.Yj.Aj(true);
this.Yj.T(A.aaR(A.acf.Gs));this.Yk.H(J9);this.Yk.Aj(true);this.Yk.T(A.aaR(A.acf.
A8o));this.VQ.H(Oh);this.VQ.Aj(true);this.VQ.T(A.aaR(A.acf.VD));this.Ya.H(Qf);this.
Ya.Aj(true);this.Ya.T(A.aaR(A.acf.TF));this.VS.H(MQ);this.VS.Aj(true);this.VS.T(
A.aaR(A.acf.APX));this.X_.H(Te);this.X_.Aj(true);this.X_.T(A.aaR(A.acf.Animal));
this.Yd.H(J9);this.Yd.Aj(true);this.Yd.T(A.aaR(A.acf.A75));this.TS.H(U0);this.TS.
As(true);this.TS.Aj(true);this.TS.Z(true);this.TS.T(A.aaR(A.acf.A6P));this.Yc.H(
Aab);this.Yc.Aj(true);this.Yc.T(A.aaR(A.acf.Device));this.Yl.H(Xe);this.Yl.Aj(true
);this.Yl.T(A.aaR(A.acf.Settings));this.Ay.H(Ix);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.Yj,0);this.J(this.Yk,0);this.J(this.VQ,0);this.J(this.Ya,0);this.
J(this.VS,0);this.J(this.X_,0);this.J(this.Yd,0);this.J(this.TS,0);this.J(this.Yc
,0);this.J(this.Yl,0);this.J(this.Ay,0);this.N.CE=[this,this.BBg];this.N.Ce=[this
,this.Ady];this.Y.Em=[this,this.Fk];this.Yj.AR=[this,this.Il];this.Yj.DC(A.aaL(A.
ach.AD3));this.Yk.AR=[this,this.Il];this.Yk.DC(A.aaL(A.ach.AD6));this.VQ.AR=[this
,this.Il];this.VQ.DC(A.aaL(A.ach.AP2));this.Ya.AR=[this,this.Il];this.Ya.DC(A.aaL(
A.ach.AQd));this.VS.AR=[this,this.Il];this.VS.DC(A.aaL(A.ach.AQC));this.X_.AR=[this
,this.Il];this.X_.DC(A.aaL(A.ach.AP6));this.Yd.AR=[this,this.Il];this.Yd.DC(A.aaL(
A.ach.AQM));this.TS.AR=[this,this.Il];this.TS.DC(A.aaL(A.ach.AQr));this.Yc.AR=[this
,this.Il];this.Yc.DC(A.aaL(A.ach.AQo));this.Yl.AR=[this,this.Il];this.Yl.DC(A.aaL(
A.ach.AQ6));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.Yj._Done();this.Yk._Done();this.VQ._Done();this.Ya._Done();
this.VS._Done();this.X_._Done();this.Yd._Done();this.TS._Done();this.Yc._Done();
this.Yl._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Yj._ReInit();this.Yk.
_ReInit();this.VQ._ReInit();this.Ya._ReInit();this.VS._ReInit();this.X_._ReInit(
);this.Yd._ReInit();this.TS._ReInit();this.Yc._ReInit();this.Yl._ReInit();this.Ay.
_ReInit();this.Yj.T(A.aaR(A.acf.Gs));this.Yk.T(A.aaR(A.acf.A8o));this.VQ.T(A.aaR(
A.acf.VD));this.Ya.T(A.aaR(A.acf.TF));this.VS.T(A.aaR(A.acf.APX));this.X_.T(A.aaR(
A.acf.Animal));this.Yd.T(A.aaR(A.acf.A75));this.TS.T(A.aaR(A.acf.A6P));this.Yc.T(
A.aaR(A.acf.Device));this.Yl.T(A.aaR(A.acf.Settings));this.CQ();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Rd={Number:null,Jl:null,IZ:null,TL:null,AsW:0,Init:function(aArg){var B;A.zX([
this,this.Bch],[B=A._GetAutoObject(A.Device.Device),B.AS6,B.A0S],0);A.pe([this,this.
Bch],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Aob();},CC:function(G){A.
_GetAutoObject(A.Device.Device).AhN();},E4:function(G){A._GetAutoObject(A.Device.
Device).An5();},Al$:function(G){var F;this.Am();this.TL.As(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aeq.As(true);if(!this.TL.Bw)(F=this.TL.Q,F[2].call(F[0],this.TL.
B3));},Bch:function(s){this.Al$(s);},Aob:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gk);break;case 3:this.Background.
L(A.jb.Ib);break;default:this.Background.L(A.jb.CJ);}},AkH:function(E){if(this.AsW===
E)return;this.AsW=E;this.Jl.AkH(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jl._Init.call(this.Jl={I:this}
,0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Gn._Init.call(this.TL={I:this}
,0);this.__proto__=C.Rd;var B;this.Background.L(A.jb.CJ);this.N.Z(false);this.Number.
H(U1);this.Number.KX(true);this.Number.L(A.jb.Text);this.Jl.H(Aac);this.Jl.AkH(0
);this.IZ.H(U2);this.IZ.L(A.jb.AV);this.IZ.Zx(true);this.TL.Fr(1750);this.TL.Ux(
750);this.TL.AkC(0);this.TL.As(true);this.TL.B3=3;this.J(this.Number,0);this.J(this.
Jl,0);this.J(this.IZ,0);this.Number.S(A.aaL(A.fl.Af));this.IZ.Ax(A.aaL(A.ach.AD5
));this.TL.Q=[B=this.IZ,B.AST,B.Cw];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jl._Done();this.IZ._Done();this.TL._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jl._ReInit();this.IZ._ReInit();this.TL._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fo={C_:null,ADR:null,AR:null,Bo:null,Do:null,Background:
null,Mz:null,OL:null,Q6:null,G_:null,A58:true,LN:false,KM:false,Qz:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hj.Bl.call(this,aSize);this.Mz.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q6.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OL.H(this.Q6.M);this.G_.H([].concat(0,this.G_.M.slice(1,4)));this.G_.H(A.abN(
this.G_.M,aSize[0]));this.G_.H(A.abP(this.G_.M,0));this.G_.H([].concat(this.G_.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hj.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hf){this.Q6.L(A.jb.Am9);this.
G_.L(A.jb.CJ);this.OL.Z(true);this.OL.L(A.jb.ARm);this.Mz.Z(false);}else if(GE){
this.Q6.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OL.Z(false);this.Mz.Z(true);}else if(
Fw){this.Q6.L(A.jb.Bm);this.G_.L(A.jb.Bm);this.OL.Z(false);this.Mz.Z(true);}else{
this.Q6.L(A.jb.Text);this.G_.L(A.jb.Text);this.OL.Z(true);this.OL.L(A.jb.CU);this.
Mz.Z(false);}this.LN=Hf;this.KM=Fw;this.Qz=GE;},Qy:function(G){this.Am();A.pe(this.
AR,this);},AiT:function(G){if(this.Do.Acp)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.As(false);}this.Bo.As(true);},T:function(E){if(this.DL===E)return;
this.DL=E;this.G_.R(E);},DC:function(E){if(this.C_===E)return;this.C_=E;this.Q6.
Ax(E);this.OL.Ax(E);},Ab9:function(E){if(this.A58===E)return;this.A58=E;this.G_.
Z(E);},Aca:function(E){if(this.ADR===E)return;this.ADR=E;this.Mz.Ax(E);this.Mz.H(
A.abK(this.Mz.M,E.FrameSize));},_Init:function(aArg){C.Hj._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BF._Init.call(this.Do={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.Mz={
I:this},0);A.acg.Ap._Init.call(this.OL={I:this},0);A.acg.Ap._Init.call(this.Q6={
I:this},0);C.CG._Init.call(this.G_={I:this},0);this.__proto__=C.Fo;this.H(Aad);this.
Bo.P0(0);this.Bo.WO(50);this.Do.Filter=1;this.Background.H(Xf);this.Background.Z(
false);this.Mz.A1(0x14);this.Mz.L(A.jb.AV);this.Mz.Cw(0);this.OL.L(A.jb.CU);this.
OL.Cw(1);this.G_.H(Aae);this.J(this.Background,0);this.J(this.Mz,0);this.J(this.
OL,0);this.J(this.Q6,0);this.J(this.G_,0);this.Bo.MJ=[this,this.Qy];this.Do.BG=[
this,this.AiT];this.Mz.Ax(A.aaL(A.ach.N1));this.OL.Ax(A.aaL(A.ach.AvS));this.Q6.
Ax(A.aaL(A.ach.AvS));this.G_.S(A.aaL(A.fl.Af));this.G_.A0(A.aaL(A.fl.Ak));this.G_.
Cr(A.aaL(A.fl.Bh));this.ADR=A.aaL(A.ach.N1);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hj;this.Bo._Done();this.Do._Done();this.Background._Done();this.Mz._Done(
);this.OL._Done();this.Q6._Done();this.G_._Done();C.Hj._Done.call(this);},_ReInit:
function(){C.Hj._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit();this.Background.
_ReInit();this.Mz._ReInit();this.OL._ReInit();this.Q6._ReInit();this.G_._ReInit(
);this.G_.S(A.aaL(A.fl.Af));this.G_.A0(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hj._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Mz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axr:null,Background:null,O7:null,Asr:0,Ak$:10,AjG:100,AQ:0,Ao1:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O7.H([].concat(2,this.O7.M.slice(1,4)));this.O7.H(A.abN(this.O7.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var XJ=this.Ak$<this.AjG;var AJN=(B=
this.M)[3]-B[1];var A3k=10;var AuA=AJN;var A40=0;if(10>AJN)A3k=AJN;if(this.Ak$<this.
AjG)AuA=((AuA*this.Ak$)/this.AjG)|0;if(AuA<A3k)AuA=A3k;if(this.Ak$<this.AjG)A40=((
this.BlR()*(AJN-AuA))/(this.AjG-this.Ak$))|0;this.O7.H(A.abP(this.O7.M,A40));this.
O7.H([].concat(this.O7.M.slice(0,3),A40+AuA));this.O7.Z(XJ);this.Background.Z(XJ
);if(!!this.Axr&&(this.Ao1!==XJ))A.pe(this.Axr,this);this.Ao1=XJ;},BlR:function(
){var E=this.Asr;var HF=this.AjG-this.Ak$;if((HF>0)&&(E>HF))E=HF;if(HF<=0)E=0;return E;
},MH:function(E){if(E<0)E=0;if(this.Asr===E)return;this.Asr=E;this.Am();},MI:function(
E){if(E<0)E=0;if(this.Ak$===E)return;this.Ak$=E;this.Am();},MG:function(E){if(E<
0)E=0;if(this.AjG===E)return;this.AjG=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.O7.L(E);},BnZ:function(E){if(A.aa0(this.Axr,E))return;this.
Axr=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.O7={I:this},0);this.__proto__=
C.Ay;this.H(Aaf);this.As(false);this.AQ=A.jb.AV;this.Background.A1(0x0);this.Background.
H(U3);this.Background.L(A.jb.CU);this.O7.A1(0x0);this.O7.H(U3);this.O7.L(A.jb.AV
);this.J(this.Background,0);this.J(this.O7,0);},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.O7._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.O7._ReInit(
);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Axr)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.O7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cg={Hk:null,Y:null,Ay:null,Ap:null,A7v:A.jV,Init:function(aArg){A.pe([this,this.
ABr],this);},DF:function(G){var B;C.AB.DF.call(this,G);this.Am();if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);this.ABr(this);},Al8:
function(G){if(!!this.N.CE)A.pe(this.N.CE,this);},ApS:function(G){if(!!this.N.Ca
)A.pe(this.N.Ca,this);},AAU:function(G){if(!!this.N.Ce)A.pe(this.N.Ce,this);},Fk:
function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[
3]-B[1]);this.Ay.MH(-this.Y.Br[1]);A.pe([this,this.BBE],this);},ABr:function(G){
var B;var G1=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C3(A.
aaL(A.ach.YH));this.N.CE=[this,this.Ew];if(!!G1&&!!G1.Amw){this.N.E6(A.jV);this.
N.JE.CZ(255);this.N.ArY(G1.AqZ);this.N.Ct(G1.AvP);this.N.Ce=G1.Amw;}else{this.N.
E6(A.jV);this.N.Ct(null);this.N.Ce=null;}if(!!G1&&!!G1.Agz){this.N.CS(G1.AxW);this.
N.GY.CZ(G1.Axs);this.N.AnF(G1.AmZ);this.N.C4(G1.Arf);this.N.Ca=G1.Agz;}else{this.
N.CS(A.jV);this.N.C4(null);this.N.Ca=null;}},Jf:function(E){if(this.A7v===E)return;
this.A7v=E;this.Hk.R(E);},Ew:function(G){A._GetAutoObject(C.A7).FB();},BBE:function(
G){var B;var BAy=this.Ay.Background.Fq();var Bew=(BAy?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajh=X;
X=X.Ah;if(((Ajh.U&0x400)===0x400)){if(!!(A.Core.Aki.isPrototypeOf(Ajh)?Ajh:null)
){var BeC=(A.Core.Aki.isPrototypeOf(Ajh)?Ajh:null);BeC.DD([Bew,BeC.ED[1]]);}else
if(!!(A.Core.Eu.isPrototypeOf(Ajh)?Ajh:null)){var Bgw=(A.Core.Eu.isPrototypeOf(Ajh
)?Ajh:null);Bgw.H(A.abN(Bgw.M,Bew));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hk={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cg;this.N.Z(true);this.Hk.H(Xg);this.Hk.As(false);this.Hk.R(A.aaR(A.
acf.Settings));this.Hk.L(A.jb.Text);this.Y.H(Ff);this.Y.JZ(1);this.Ay.H(Ix);this.
Ap.H(Pa);this.Ap.L(A.jb.Text);this.J(this.Hk,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hk.S(A.aaL(A.fl.Kt));this.Hk.A0(A.aaL(A.fl.HL));this.Y.
Em=[this,this.Fk];this.Ap.Ax(A.aaL(A.ach.ADy));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hk._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hk._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hk.R(A.aaR(A.acf.Settings
));this.Hk.S(A.aaL(A.fl.Kt));this.Hk.A0(A.aaL(A.fl.HL));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq9={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bhr],[B=
A._GetAutoObject(A.Device.Helper),B.U9,B.Va],0);},Dg:function(E){C.BR.Dg.call(this
,E);this.Text.L(E);},Bhr:function(G){this.Text.R(A._GetAutoObject(A.acj.KR).Bjq(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq9;this.Timer.WO(1);this.Timer.As(true);
this.Text.H(Aag);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.MJ=[this,this.
Bhr];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KY:0xFFFFFFFF,LX:0,Dg:function(E){if(
this.KY===E)return;this.KY=E;},WN:function(E){if(this.LX===E)return;this.LX=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BR;this.H(Oi
);},_className:"Application::HeaderContent"};C.N={V6:null,V7:null,V8:null,Ag6:null
,Ag7:null,Ag8:null,CE:null,Ce:null,Ca:null,Background:null,NR:null,Jj:null,JE:null
,GY:null,PG:null,IS:null,Lj:null,T7:null,T8:null,An7:A.jV,An8:A.jV,An9:A.jV,Arg:
0,Arh:0,Ari:0,Aho:0,ZK:false,WV:false,Asx:false,AsM:false,AsL:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.V6)this.Jj.S(this.V6);if(!!this.V7)this.JE.S(this.
V7);if(!!this.V8)this.GY.S(this.V8);switch(this.Aho){case 0:{this.NR.Z(false);this.
Jj.L(A.jb.Bm);this.JE.L(A.jb.Bm);this.GY.L(A.jb.Bm);this.PG.L(A.jb.Bm);this.IS.L(
A.jb.Bm);this.Lj.L(A.jb.Bm);}break;case 1:{if(!this.Ag6)this.NR.H(A.aaT(this.Jj.
ASL(),Rq));else this.NR.H(this.PG.Dd());this.NR.Z(true);this.Jj.L(A.jb.Text);this.
JE.L(A.jb.Bm);this.GY.L(A.jb.Bm);this.PG.L(A.jb.Text);this.IS.L(A.jb.Bm);this.Lj.
L(A.jb.Bm);}break;case 3:{if(!this.Ag8)this.NR.H(A.aaT(this.GY.ASL(),Rq));else this.
NR.H(this.Lj.Dd());this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JE.L(A.jb.Bm);this.GY.
L(A.jb.Text);this.PG.L(A.jb.Bm);this.IS.L(A.jb.Bm);this.Lj.L(A.jb.Text);}break;case
2:{if(!this.Ag7)this.NR.H(A.aaT(this.JE.ASL(),Rq));else this.NR.H(this.IS.Dd());
this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JE.L(A.jb.Text);this.GY.L(A.jb.Bm);this.
PG.L(A.jb.Bm);this.IS.L(A.jb.Text);this.Lj.L(A.jb.Bm);}break;default:{this.NR.Z(
false);A.ab5("%s",Xh);}}if(!!this.PG.Al){this.PG.Z(true);this.Jj.Z(false);}else{
this.PG.Z(false);this.Jj.Z(true);}if(this.An8.length<=0){this.IS.Z(true);this.JE.
Z(false);}else{this.IS.Z(false);this.JE.Z(true);}if(!!this.Lj.Al){this.Lj.Z(true
);this.GY.Z(false);}else{this.Lj.Z(false);this.GY.Z(true);}},Hz:function(E){if(this.
An7===E)return;this.An7=E;this.Jj.R(E);this.Am();},E6:function(E){if(this.An8===
E)return;this.An8=E;this.JE.R(E);this.Am();},CS:function(E){if(this.An9===E)return;
this.An9=E;this.GY.R(E);this.Am();},AFD:function(E){if(this.Aho===E)return;this.
Aho=E;this.Am();},AFu:function(E){if(this.V6===E)return;this.V6=E;this.Jj.S(E);this.
Am();},ArY:function(E){if(this.V7===E)return;this.V7=E;this.JE.S(E);this.Am();},
AnF:function(E){if(this.V8===E)return;this.V8=E;this.GY.S(E);this.Am();},A4a:function(
G){this.Am();},C3:function(E){if(this.Ag6===E)return;this.Ag6=E;this.PG.Ax(E);this.
Am();},Ct:function(E){if(this.Ag7===E)return;this.Ag7=E;this.IS.Ax(E);this.Am();
},C4:function(E){if(this.Ag8===E)return;this.Ag8=E;this.Lj.Ax(E);this.Am();},OW:
function(E){if(this.AsL===E)return;this.AsL=E;this.T7.Z(E);if(E)this.Jj.H([].concat(
this.T7.M[2],this.Jj.M.slice(1,4)));else this.Jj.H([].concat(0,this.Jj.M.slice(1
,4)));this.Am();},OX:function(E){if(this.AsM===E)return;this.AsM=E;this.T8.Z(E);
if(E)this.GY.H(A.abN(this.GY.M,this.T8.M[0]));else this.GY.H(A.abN(this.GY.M,this.
M[2]));this.Am();},Bnl:function(E){if(this.Arg===E)return;this.Arg=E;this.PG.Cw(
E);this.Am();},ATy:function(E){if(this.Arh===E)return;this.Arh=E;this.IS.Cw(E);this.
Am();},A_E:function(E){if(this.Ari===E)return;this.Ari=E;this.Lj.Cw(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NR={I:this},0);C.CG._Init.call(this.Jj={I:this
},0);C.CG._Init.call(this.JE={I:this},0);C.CG._Init.call(this.GY={I:this},0);A.acg.
Ap._Init.call(this.PG={I:this},0);A.acg.Ap._Init.call(this.IS={I:this},0);A.acg.
Ap._Init.call(this.Lj={I:this},0);A.acg.Ap._Init.call(this.T7={I:this},0);A.acg.
Ap._Init.call(this.T8={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.Aed);this.NR.H(Xi);this.NR.
L(A.jb.CU);this.NR.Z(false);this.Jj.A1(0x14);this.Jj.H(Tf);this.Jj.A6(0x12);this.
JE.A1(0x14);this.JE.H(Xj);this.JE.A6(0x12);this.GY.H(Aah);this.PG.H(Xk);this.IS.
H(Xl);this.Lj.H(Tg);this.Lj.Z(false);this.T7.H(Th);this.T7.Z(false);this.T8.H(Ti
);this.T8.Z(false);this.J(this.Background,0);this.J(this.NR,0);this.J(this.Jj,0);
this.J(this.JE,0);this.J(this.GY,0);this.J(this.PG,0);this.J(this.IS,0);this.J(this.
Lj,0);this.J(this.T7,0);this.J(this.T8,0);this.Jj.S(A.aaL(A.fl.Ak));this.Jj.A0(A.
aaL(A.fl.Bh));this.Jj.Q_([this,this.A4a]);this.JE.S(A.aaL(A.fl.Ak));this.JE.A0(A.
aaL(A.fl.Bh));this.JE.Q_([this,this.A4a]);this.GY.S(A.aaL(A.fl.Ak));this.GY.A0(A.
aaL(A.fl.Bh));this.GY.Q_([this,this.A4a]);this.V6=A.aaL(A.fl.Ak);this.V7=A.aaL(A.
fl.Ak);this.V8=A.aaL(A.fl.Ak);this.PG.Ax(null);this.IS.Ax(null);this.Lj.Ax(null);
this.T7.Ax(A.aaL(A.ach.AM1));this.T8.Ax(A.aaL(A.ach.Ajv));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NR._Done();this.
Jj._Done();this.JE._Done();this.GY._Done();this.PG._Done();this.IS._Done();this.
Lj._Done();this.T7._Done();this.T8._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NR._ReInit();this.Jj.
_ReInit();this.JE._ReInit();this.GY._ReInit();this.PG._ReInit();this.IS._ReInit(
);this.Lj._ReInit();this.T7._ReInit();this.T8._ReInit();this.Jj.S(A.aaL(A.fl.Ak)
);this.Jj.A0(A.aaL(A.fl.Bh));this.JE.S(A.aaL(A.fl.Ak));this.JE.A0(A.aaL(A.fl.Bh)
);this.GY.S(A.aaL(A.fl.Ak));this.GY.A0(A.aaL(A.fl.Bh));this.AFu(A.aaL(A.fl.Ak));
this.ArY(A.aaL(A.fl.Ak));this.AnF(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.V6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V8)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NR)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JE).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GY)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADC={Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper),B.ArI,B.AkG],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper)
,B.A9B,B.AF1],0);A.pe([this,this.Nz],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhJ)this.Ab$(A._GetAutoObject(A.Device.Helper).AhJ.AO7());else this.
Ab$(-1);if(!!A._GetAutoObject(A.Device.Helper).UH)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak9(A._GetAutoObject(A.Device.Helper).UH.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.Am5._Init.call(this,aArg);this.__proto__=C.ADC;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AHb={Ey:null,Ei:null,
FY:null,X7:null,TM:null,IL:null,IM:null,Init:function(aArg){},WU:function(G){var
B;C.DR.WU.call(this,G);var AK3=this.AzG(A._GetAutoObject(A.Device.Helper).UN.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALS=this.AzG(A._GetAutoObject(
A.Device.Helper).UO.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAn=
this.AzG(A._GetAutoObject(A.Device.Device).AcL);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AK3));this.IM.H(A.abO(this.
IM.M,this.Ey.M[3]-((((B=this.IM.M)[3]-B[1])/2)|0)));this.Ei.H(A.abP(this.Ei.M,this.
Ey.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-B[1])-ALS));this.
IL.H(A.abO(this.IL.M,(this.Ei.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))+2));this.FY.
H(A.abP(this.FY.M,this.Ei.M[3]));this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.
M)[3]-B[1])-BAn));this.TM.H(A.abO(this.TM.M,this.FY.M[3]-((((B=this.TM.M)[3]-B[1
])/2)|0)));this.X7.H(A.abP(this.X7.M,this.FY.M[3]));this.X7.H([].concat(this.X7.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJ0:function(AoX){return A._GetAutoObject(A.
Device.Converter).Ak4(AoX);},AKx:function(){return A._GetAutoObject(A.acj.Temperature
).AlR();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.
FY={I:this},0);A.acg.AL._Init.call(this.X7={I:this},0);A.acg.AL._Init.call(this.
TM={I:this},0);A.acg.AL._Init.call(this.IL={I:this},0);A.acg.AL._Init.call(this.
IM={I:this},0);this.__proto__=C.AHb;this.Ey.A1(0xD);this.Ey.H(Aai);this.Ey.L(A.jb.
Gk);this.Ei.A1(0xD);this.Ei.H(Tj);this.Ei.L(A.jb.Ib);this.FY.A1(0xD);this.FY.H(Aaj
);this.FY.L(A.jb.E1);this.X7.A1(0xD);this.X7.H(AfF);this.X7.L(A.jb.Afy);this.TM.
A1(0xD);this.TM.H(Aak);this.TM.AwE(A.jb.Afy);this.TM.AwF(A.jb.Afy);this.TM.AwH(A.
jb.E1);this.TM.AwG(A.jb.E1);this.IL.A1(0xD);this.IL.H(Xm);this.IL.AwE(A.jb.E1);this.
IL.AwF(A.jb.E1);this.IL.AwH(A.jb.Ib);this.IL.AwG(A.jb.Ib);this.IM.A1(0xD);this.IM.
H(Aal);this.IM.AwE(A.jb.Ib);this.IM.AwF(A.jb.Ib);this.IM.AwH(A.jb.Gk);this.IM.AwG(
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
};C.Co={Avw:null,AmZ:null,AQy:null,Arf:null,AqZ:null,AvP:null,AR:null,Agz:null,Amw:
null,N:null,Bo:null,QW:null,AxW:A.jV,AVe:false,AG1:false,Apn:false,Axs:255,LN:false
,KM:false,Qz:false,Ai:function(Ae){var B;C.O4.Ai.call(this,Ae);var Hf=((Ae&0x10)===
0x10);var Fw=((Ae&0x20)===0x20);var IG=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FT=
A.jb.CJ;var G0=A.jb.Text;if(this.Hm){FT=A.jb.Bm;G0=A.jb.Text;}if(!Hf){this.Background.
L(A.jb.CU);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IG){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.Am9);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(G0
);}this.LN=Hf;this.KM=Fw;this.Qz=GE;this.Apn=IG;},Qy:function(G){this.Am();A.pe(
this.AR,this);},Bxi:function(s){this.Qy(s);},H1:function(G){if(this.QW.Acp)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);
},Alp:function(s){this.H1(s);},Ab8:function(E){if(A.aa0(this.Agz,E))return;this.
Agz=E;},A_9:function(E){if(this.AxW===E)return;this.AxW=E;},ZA:function(E){if(this.
Avw===E)return;this.Avw=E;},ZB:function(E){if(this.AmZ===E)return;this.AmZ=E;},A_P:
function(E){if(this.Axs===E)return;this.Axs=E;},Gt:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DL===E)return;this.DL=E;this.ALA();},A3J:
function(G){},BG_:function(s){this.A3J(s);},AkB:function(E){if(this.Arf===E)return;
this.Arf=E;},L5:function(E){if(A.aa0(this.Amw,E))return;this.Amw=E;},Bne:function(
E){if(this.AqZ===E)return;this.AqZ=E;},L8:function(E){if(this.AvP===E)return;this.
AvP=E;},ZF:function(E){if(this.AG1===E)return;this.AG1=E;this.ALA();},ALA:function(
){var B;var M7=this.DL;if(this.AG1)M7=M7+A.aaR(A.acf.Colon);if(this.AVe)M7=M7+Xn;
this.V.R(M7);},ATW:function(E){if(this.AVe===E)return;this.AVe=E;this.ALA();},_Init:
function(aArg){C.O4._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BF._Init.call(this.QW={I:this},0);this.__proto__=C.Co;this.Bo.P0(0);
this.Bo.WO(50);this.Bo.As(false);this.QW.Filter=1;this.Bo.MJ=[this,this.Bxi];this.
QW.BG=[this,this.Alp];this.Avw=A.aaL(A.fl.Ak);this.AmZ=A.aaL(A.fl.Ak);this.AQy=A.
aaL(A.ach.E2);this.AqZ=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.O4;this.
Bo._Done();this.QW._Done();C.O4._Done.call(this);},_ReInit:function(){C.O4._ReInit.
call(this);this.Bo._ReInit();this.QW._ReInit();this.ZA(A.aaL(A.fl.Ak));this.ZB(A.
aaL(A.fl.Ak));this.Bne(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.O4._Mark.call(
this,D);if((B=this.Avw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AQy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Arf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqZ)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AvP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agz)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Amw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Ds={Q:null,Ani:null,Ank:null,Hy:null,H9:null,AM:0,Gr:0,Ga:100,FI:0,Init:function(
aArg){},H1:function(G){this.FI=1;C.Eg.H1.call(this,G);},Bl:function(aSize){C.Eg.
Bl.call(this,aSize);this.Hy.H([0,aSize[1]-40,40,aSize[1]]);this.H9.H([].concat(A.
abe(aSize,AhY),aSize));},Ai:function(Ae){var B;C.Eg.Ai.call(this,Ae);var Fw=((Ae&
0x20)===0x20);var GE=this.Bo.Bw;this.Hy.L(this.V.AQ);this.H9.L(this.V.AQ);this.Hy.
Z((Fw||GE)&&(this.AM>this.Gr));this.H9.Z((Fw||GE)&&(this.AM<this.Ga));if(this.FI===
6)this.Hy.L(A.jb.E1);if(this.FI===7)this.H9.L(A.jb.E1);},BfF:function(G){this.FI=
6;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay7],this);this.Bo.As(false);}this.Bo.
As(true);},Qy:function(G){if(this.FI===6)A.pe([this,this.Ay7],this);if(this.FI===
7)A.pe([this,this.Ay8],this);if(this.FI===1)A.pe(this.AR,this);this.FI=0;this.Am(
);},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcY:function(
s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcY],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcY],E,0);if(!!E)A.pe([this,
this.AcY],this);},BfG:function(G){this.FI=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.Ay8],this);this.Bo.As(false);}this.Bo.As(true);},Ki:function(G){this.FI=0;}
,Ay8:function(s){this.Ki(s);},Kd:function(G){this.FI=0;},Ay7:function(s){this.Kd(
s);},Bx:function(E){if(E<this.Gr)E=this.Gr;if(E>this.Ga)E=this.Ga;if(this.AM===E
)return;this.AM=E;this.Am();},BbI:function(Aq){this.Bx(Aq);},Gb:function(E){if(this.
Gr===E)return;this.Gr=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=
E;this.Am();},Uq:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BF._Init.call(this.Ani={I:this},0);A.Core.BF._Init.call(this.Ank={
I:this},0);A.acg.Ap._Init.call(this.Hy={I:this},0);A.acg.Ap._Init.call(this.H9={
I:this},0);this.__proto__=C.Ds;this.H(K4);this.Ani.Filter=6;this.Ank.Filter=7;this.
Background.H(K4);this.V.H(AcR);this.V.R(LB);this.Hy.H(AhZ);this.H9.H(Aoj);this.H9.
Cw(1);this.J(this.Hy,0);this.J(this.H9,0);this.Ani.BG=[this,this.BfF];this.Ani.D1=[
this,this.BfF];this.Ank.BG=[this,this.BfG];this.Ank.D1=[this,this.BfG];this.V.S(
A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(null);this.Hy.Ax(A.aaL(A.ach.
Ajw));this.H9.Ax(A.aaL(A.ach.Ajw));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Ani._Done();this.Ank._Done();this.Hy._Done();this.H9._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Ani._ReInit();this.
Ank._ReInit();this.Hy._ReInit();this.H9._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ank)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hy)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.H9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Du:function(){return-1;},C7:function(aIndex){return-1;},Gm:function(
aIndex){return A.jV;},DZ:function(A8){return-1;},H8:function(){return-1;},Au:function(
E){this.Q=E;},Cc:function(Aq){this.Au(Aq);},ADf:function(aIndex){return null;},ADh:
function(aIndex){return 0;},B$:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.Iv={AxN:null
,BU:null,AHp:A.jV,AVU:A.jV,Aj6:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Ds.Ai.call(this,Ae);if(!this.AxN){this.BU.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BU.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.
AVU);else this.BU.R(((F=this.Q,F[1].call(F[0])).toFixed()+CR)+this.AHp);}}else(B=
this.AxN)?B[1].call(B[0],this):null;},Ki:function(G){var F;var BP=this.AM;C.Ds.Ki.
call(this,G);this.Bx(this.AM+this.Aj6);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},Kd:function(G){var F;var BP=this.AM;C.
Ds.Kd.call(this,G);this.Bx(this.AM-this.Aj6);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},IW:function(E){if(this.AHp===E)return;
this.AHp=E;this.Am();},Jg:function(E){if(this.AVU===E)return;this.AVU=E;this.Am(
);},ATz:function(E){if(this.Aj6===E)return;this.Aj6=E;},A_6:function(E){if(A.aa0(
this.AxN,E))return;this.AxN=E;},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.CG._Init.call(this.BU={I:this},0);this.__proto__=C.Iv;this.H(K4);this.BU.H(Oj);
this.J(this.BU,-1);this.BU.S(A.aaL(A.fl.Af));this.BU.A0(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Ds;this.BU._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.BU._ReInit();this.BU.S(A.aaL(
A.fl.Af));this.BU.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.AxN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BX={AC:
null,DB:null,HP:null,CQ:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Ds.Bl.call(this,aSize);this.DB.H([this.Hy.M[2]-10,this.Hy.M[1],this.
H9.M[0]+10,this.Hy.M[3]]);this.DB.AFE((B=this.DB.M)[2]-B[0]);this.DB.HK(this.DB.
Gu,true,null,null);},Ai:function(Ae){var B;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.DB.AbN(0,this.DB.AZ-1);this.Hy.Z(Fw||GE);this.H9.
Z(Fw||GE);},C5:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Ki:function(G){var F;var BP=this.AM;C.Ds.Ki.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Kd:function(G){var F;var BP=this.AM;
C.Ds.Kd.call(this,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var QE=0;if(E<this.Gr){E=this.Ga;QE=-this.DB.Wl*this.DB.AZ;}if(E>this.Ga){E=this.
Gr;QE=this.DB.Wl;}C.Ds.Bx.call(this,E);if(!!QE)this.DB.Gc(QE);this.DB.GW(this.AM
);if(this.DB.Bkl())this.DB.BpS(false,false);this.DB.HK(this.DB.Gu,true,this.HP,null
);},Hn:function(G){var B;var Gh=this.DB.G7;var CA=(C.CG.isPrototypeOf(B=this.DB.
Cj)?B:null);if(!CA)return;CA.S(this.V.B7);CA.Axb(19);CA.A0(this.V.AmY);CA.Bn9(19
);CA.Cr(this.V.AqY);CA.Bn_(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));
else CA.R(Xo);CA.H(A.abK(CA.M,[this.DB.Wl,(B=this.DB.M)[3]-B[1]]));},BwW:function(
s){this.Hn(s);},CK:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Gb(0);this.EV(this.AC.Du()-1);this.DB.JD(this.AC.Du());this.DB.AbN(0,this.DB.AZ-
1);}},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Core.DB._Init.call(this.
DB={I:this},0);A.acl.Gn._Init.call(this.HP={I:this},0);this.__proto__=C.BX;this.
H(K4);this.DB.N8(C.CG);this.HP.WR(23);this.HP.HQ(1);this.HP.Fr(200);this.J(this.
DB,0);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.DB.Hn=[this,this.BwW
];this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.DB._Done();this.HP.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
DB._ReInit();this.HP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak)
);this.CQ();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SX={FN:null,OO:null,Dm:null,Av:null,JB:null,HO:null,PA:null,V3:null,Q5:null,
Yt:null,Qb:null,Gy:null,Gx:null,FZ:0,A_:0,Asv:false,Bkh:false,Init:function(aArg
){},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hy.Z(false);this.H9.Z(false);var At5=
A.jV;if(!!this.Dm){this.PA.R(this.Av.Format(Aam));this.Q5.R(this.Av.Format(AfG));
this.Qb.R(this.Av.Format(Ah0));}if(this.A_===1){this.HO.Z(true);this.HO.H(this.PA.
M);this.HO.L(this.V.AQ);this.PA.L(this.Background.AQ);this.Q5.L(this.V.AQ);this.
Qb.L(this.V.AQ);At5=A.aaR(A.acf.A6p);}else if(this.A_===2){this.HO.Z(true);this.
HO.H(this.Q5.M);this.HO.L(this.V.AQ);this.PA.L(this.V.AQ);this.Q5.L(this.Background.
AQ);this.Qb.L(this.V.AQ);At5=A.aaR(A.acf.Hl);}else if(this.A_===3){this.HO.Z(true
);this.HO.H(this.Qb.M);this.HO.L(this.V.AQ);this.PA.L(this.V.AQ);this.Q5.L(this.
V.AQ);this.Qb.L(this.Background.AQ);At5=A.aaR(A.acf.Year);}else{this.HO.Z(false);
this.PA.L(this.V.AQ);this.Yt.L(this.V.AQ);this.Q5.L(this.V.AQ);this.V3.L(this.V.
AQ);this.Qb.L(this.V.AQ);}if(At5.length>0){if(this.AG1)this.V.R((((this.DL+AcS)+
At5)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DL+AcS)+
At5)+String.fromCharCode(0x29));}else this.ALA();},Qy:function(G){if(this.FI===1
)A.pe([this,this.Vj],this);else if(this.FI===4)A.pe([this,this.AiJ],this);else if(
this.FI===5)A.pe([this,this.Aiv],this);C.Ds.Qy.call(this,G);},Ki:function(G){switch(
this.A_){case 0:C.Ds.Ki.call(this,G);break;case 3:break;default:this.AdA(this);}
},Kd:function(G){switch(this.A_){case 0:C.Ds.Kd.call(this,G);break;default:this.
Aiu(this);}},AdC:function(G){var F;if(!!this.Dm)this.Uv((F=this.Dm,F[1].call(F[0
])));},Acc:function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdC
],this.Dm,0);this.Dm=E;if(!!E)A.zX([this,this.AdC],E,0);if(!!E)A.pe([this,this.AdC
],this);},Uv:function(E){if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.
FZ);this.Am();},AdA:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Vj],this);this.Bo.As(false);}this.Bo.As(true);},Bcf:function(s){this.AdA(s);},Vj:
function(G){this.Ex(this.A_+1);},Al_:function(G){this.FI=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiJ],this);this.Bo.As(false);}this.Bo.As(true);},Al9:function(
G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Aiv],this);this.Bo.As(false
);}this.Bo.As(true);},AiJ:function(G){var B;var F;var BP=this.FZ;switch(this.A_){
case 1:{if(this.Asv){var ABA=A._NewObject(A.Core.An_,0);ABA.Kq=1;if(this.Av.J(ABA
).JY()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Av.GL<this.Av.Zu()
)this.Av.Lv(this.Av.GL+1);}break;case 2:{if(this.Asv){var ABA=A._NewObject(A.Core.
An_,0);ABA.Kq=this.Av.Zu();if(this.Av.J(ABA).JY()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Av.Uz(this.Av.Hl+1);if(this.Av.Zu()<this.Av.GL)this.Av.Lv(this.
Av.Zu());}break;case 3:{if(this.Asv){var A17=A._NewObject(A.Core.Bs,0);A17.Initialize(
this.Av.JY());A17.Year+=1;if(A17.JY()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Uv(((B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.
Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}},Aiv:function(G){var B;var F;var BP=
this.FZ;if(this.A_===1)this.Av.Lv(this.Av.GL-1);if(this.A_===2){this.Av.Uz(this.
Av.Hl-1);if(this.Av.Zu()<this.Av.GL)this.Av.Lv(this.Av.Zu());}if(this.A_===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Uv(((B=(this.Av.JY()|
0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],
this.FZ));A.abo(this.Dm,0);}},DK:function(G){var F;if(!this.N)return;switch(this.
A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[
0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeE));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vj];}break;case 2:{(F=this.N,F[
1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am7
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Aiu];(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeE));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vj];}break;case 3:{(F=this.N,F[
1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am7
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Aiu];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkT((F=this.N,F[1].call(F[
0])));}},AFZ:function(E){if(this.Asv===E)return;this.Asv=E;},FW:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;var AAH=this.A_;if(!this.
A_){this.FN.AjD((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FZ){var BP=this.FZ;
this.Uv(A._GetAutoObject(A.Device.Helper).Dv());if(this.FZ!==BP){if(!!this.Dm)(F=
this.Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}}}this.A_=EO;this.Bkh=true;if((
this.A_<0)||(this.A_>3))this.A_=0;this.DK(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=
!!this.A_;if((!!AAH&&!this.A_)&&!!this.OO)A.pe(this.OO,this);this.Am();},Aiu:function(
G){if(this.A_>1)this.Ex(this.A_-1);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Av={I:this},0);A.Core.BF._Init.call(this.JB={I:this}
,0);A.acg.AL._Init.call(this.HO={I:this},0);A.acg.Text._Init.call(this.PA={I:this
},0);A.acg.Text._Init.call(this.V3={I:this},0);A.acg.Text._Init.call(this.Q5={I:
this},0);A.acg.Text._Init.call(this.Yt={I:this},0);A.acg.Text._Init.call(this.Qb={
I:this},0);A.Core.BF._Init.call(this.Gy={I:this},0);A.Core.BF._Init.call(this.Gx={
I:this},0);this.__proto__=C.SX;this.H(U4);this.V.R(Aok);this.Hy.Z(false);this.H9.
Z(false);this.JB.Filter=1;this.HO.H(Aol);this.HO.L(0x55FFFFFF);this.PA.H(Aom);this.
PA.Je(true);this.PA.A6(0x14);this.V3.H(Aon);this.V3.Je(true);this.V3.A6(0x14);this.
V3.R(Ale);this.Q5.H(As6);this.Q5.Je(true);this.Yt.H(Ayc);this.Yt.Je(true);this.Yt.
R(Ale);this.Qb.H(Ayd);this.Qb.Je(true);this.Qb.A6(0x11);this.Gy.Filter=4;this.Gy.
Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HO,0);this.J(this.PA,0);this.
J(this.V3,0);this.J(this.Q5,0);this.J(this.Yt,0);this.J(this.Qb,0);this.JB.BG=[this
,this.Bcf];this.PA.S(A.aaL(A.fl.EK));this.V3.S(A.aaL(A.fl.EK));this.Q5.S(A.aaL(A.
fl.EK));this.Yt.S(A.aaL(A.fl.EK));this.Qb.S(A.aaL(A.fl.EK));this.Gy.BG=[this,this.
Al_];this.Gy.D1=[this,this.AiJ];this.Gx.BG=[this,this.Al9];this.Gx.D1=[this,this.
Aiv];this.FN=A._NewObject(C.Aex,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ds;this.Av._Done();this.JB._Done();this.HO._Done();this.PA._Done();this.V3._Done(
);this.Q5._Done();this.Yt._Done();this.Qb._Done();this.Gy._Done();this.Gx._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit(
);this.JB._ReInit();this.HO._ReInit();this.PA._ReInit();this.V3._ReInit();this.Q5.
_ReInit();this.Yt._ReInit();this.Qb._ReInit();this.Gy._ReInit();this.Gx._ReInit(
);this.PA.S(A.aaL(A.fl.EK));this.V3.S(A.aaL(A.fl.EK));this.Q5.S(A.aaL(A.fl.EK));
this.Yt.S(A.aaL(A.fl.EK));this.Qb.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Ds._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OR={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bez],[B=A._GetAutoObject(A.Device.Device),B.A9j,B.BbP],0);
A.pe([this,this.Bez],this);},Du:function(){return 27;},Gm:function(aIndex){return this.
LanguageToString.BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnI(E);},Bez:function(G){this.Q=A._GetAutoObject(A.Device.Device
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
"Application::Languages"};C.Ri={TemperatureUnitToString:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.TemperatureUnitToString.
BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Axf(E);},Init:function(aArg
){var B;A.zX([this,this.Bg7],[B=A._GetAutoObject(A.Device.Device),B.ArJ,B.Atv],0
);A.pe([this,this.Bg7],this);},Bg7:function(G){this.Q=A._GetAutoObject(A.Device.
Device).TemperatureUnit;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.TemperatureUnitToString={
I:this},0);this.__proto__=C.Ri;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.TemperatureUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.AVy={AjB:null,
AcH:null,KE:null,AP:null,A$:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.
Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.H(A.abN(this.
V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.KE.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([this.Background.
M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.AjB.H([this.Background.M[2],0,aSize[
0],aSize[1]]);this.AcH.H(this.AjB.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
KE.L(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;this.
Ht=Ad;if(!!this.AX){var AlI=this.AX.Hw(Ad,6);var Ap2=this.AX.CF(Ad,7);var Auj=this.
AX.Ja(Ad,9);this.T(A._GetAutoObject(A.acj.KR).ADb(AlI));this.KE.R(A._GetAutoObject(
A.acj.KR).A66(AlI));this.AcH.R(A._GetAutoObject(A.Device.Converter).Ak4(Ap2));this.
AcH.L(A._GetAutoObject(A.acj.Assessment).XG(Auj));this.AjB.L(A._GetAutoObject(A.
acj.Assessment).Qv(Auj));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,
aArg);A.acg.AL._Init.call(this.AjB={I:this},0);A.acg.Text._Init.call(this.AcH={I:
this},0);A.acg.Text._Init.call(this.KE={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.AVy;this.V.H(
Pb);this.AcH.L(A.jb.Text);this.KE.R(Rr);this.KE.L(A.jb.Text);this.AP.L(A.jb.Bc);
this.A$.H(Aye);this.A$.L(A.jb.Bc);this.J(this.AjB,0);this.J(this.AcH,0);this.J(this.
KE,0);this.J(this.AP,0);this.J(this.A$,0);this.AcH.S(A.aaL(A.fl.Af));this.KE.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AjB._Done(
);this.AcH._Done();this.KE._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AjB._ReInit();this.AcH._ReInit(
);this.KE._ReInit();this.AP._ReInit();this.A$._ReInit();this.AcH.S(A.aaL(A.fl.Af
));this.KE.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.AjB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureListItem"
};C.Gd={AX:null,AR:null,Cq:null,AD:null,Afp:null,NU:null,KS:A.jV,Lo:null,AVW:true
,Hn:function(G){var B;var Gh=this.AD.G7;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zy(this.AX);Aa.Ch(Gh);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=
this.AD.M)[2]-B[0],this.AD.GP]));},N8:function(E){if(E===this.Lo)return;this.Lo=
E;this.AD.N8(E);},Zy:function(E){if(this.AX===E)return;if(!!this.AX)A.z9([this,this.
Ch],this.AX,0);this.AX=E;if(!!E)A.zV([this,this.Ch],E,0);A.pe([this,this.Ch],this
);},Ch:function(G){if(this.AVW===false)return;if(!!this.AX){this.AD.JD(this.AX.B_(
));this.AD.AbN(0,this.AD.AZ-1);}else this.AD.JD(0);if((this.AD.AZ>0)&&(this.FO()<
0))this.GW(0);if(this.FO()>=this.AD.AZ){this.GW(0);this.AD.Gc(0);}if(this.AD.AZ<=
0){this.NU.Z(true);this.GW(-1);}else{this.NU.Z(false);this.AB0(null,null);}},Fk:
function(G){var B;this.Afp.MG(this.AD.GP*this.AD.AZ);this.Afp.MI((B=this.AD.M)[3
]-B[1]);this.Afp.MH(-this.AD.Br);},DF:function(G){if(this.AD.AZ>0){switch(this.Cq.
CP){case 4:if(this.FO()>0)this.GW(this.FO()-1);break;case 5:if(this.FO()<(this.AD.
AZ-1))this.GW(this.FO()+1);break;default:this.Cq.Mw=true;}this.AD.HK(this.FO(),true
,null,null);}else if((this.Cq.CP!==4)&&(this.Cq.CP!==5))this.Cq.Mw=true;},ZC:function(
E){if(A.aa0(this.AR,E))return;this.AR=E;this.AD.AbN(0,this.AD.AZ);},GW:function(
E){this.AD.GW(E);this.AD.HK(E,true,null,null);},FO:function(){return this.AD.Gu;
},Dl:function(E){if(this.KS===E)return;this.KS=E;this.NU.R(E);},AB0:function(Ac1
,E9){this.AD.AB0(Ac1,E9);},AUa:function(E){if(this.AVW===E)return;this.AVW=E;if(
E)A.pe([this,this.Ch],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.CM._Init.call(this.AD={I:this}
,0);C.Ay._Init.call(this.Afp={I:this},0);A.acg.Text._Init.call(this.NU={I:this},
0);this.__proto__=C.Gd;this.H(U5);this.Lo=C.Ba;this.Cq.Filter=147;this.AD.A1(0x3F
);this.AD.H(U5);this.AD.Ae_(40);this.Afp.A1(0x3A);this.Afp.H(As7);this.NU.A1(0x3F
);this.NU.H(Ayf);this.NU.Ho(10);this.NU.KX(true);this.NU.A6(0xA);this.NU.L(A.jb.
Text);this.J(this.AD,0);this.J(this.Afp,0);this.J(this.NU,0);this.Cq.BG=[this,this.
DF];this.Cq.D1=[this,this.DF];this.AD.Em=[this,this.Fk];this.AD.Hn=[this,this.Hn
];this.NU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done(
);this.AD._Done();this.Afp._Done();this.NU._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Cq._ReInit();this.AD._ReInit();this.
Afp._ReInit();this.NU._ReInit();this.NU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afp
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::VertScrollList"};C.Ba={AX:null,Ht:-1,CQ:function(){this.Ch(this.Ht
);},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.
Ht%2)===1)this.Background.L(A.jb.CJ);else this.Background.L(A.jb.CU);}},Zy:function(
E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.ab5("%s",Ayg);},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Co._ReInit.
call(this);this.CQ();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.
AX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GJ={
Bg:null,FE:null,DQ:null,Fn:null,V$:null,Ko:null,KS:A.jV,AUy:0,AUz:0,ARU:Alf,Afq:
false,CQ:function(){if(A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(
A.Device.Device).Dw(0);A.pe([this,this.Bbt],this);}},Init:function(aArg){var B;A.
zX([this,this.Bfd],[B=A._GetAutoObject(A.Device.Device),B.AES,B.AI3],0);A.zV([this
,this.Agd],A._GetAutoObject(A.Device.Device).An,0);A.zV([this,this.Z9],A._GetAutoObject(
A.Device.Device).An,0);A.zX([this,this.BBJ],[B=A._GetAutoObject(A.Device.Helper)
,B.U9,B.Va],0);A.pe([this,this.Z9],this);A.pe([this,this.A01],this);A.pe([this,this.
AxI],this);},WK:function(G){this.AgA();var O;for(O=this.Ko.Du()-1;O>=0;O=O-1)switch(
this.Ko.C7(O)){case 0:this.AdU(A.aaR(A.acf.A5A),[this,this.Box],0);break;case 14:
this.AdU(A.aaR(A.acf.BhM),[this,this.Boy],14);break;case 1:this.AdU(A.aaR(A.acf.
Temperature),[this,this.AUd],1);break;case 2:this.AdU(A.aaR(A.acf.Rating),[this,
this.AUc],2);break;case 3:this.AdU(A.aaR(A.acf.Afz),[this,this.AUe],3);break;default:
A.ab5("%s",Ayh);}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.
BiK));A._GetAutoObject(A.Device.Device).Dw(6);},Bbt:function(s){this.WK(s);},DF:
function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var Af3=this.Ko.DZ(A._GetAutoObject(
A.Device.Device).Ko);if(this.Afq)return;switch(D5.CP){case 6:{Af3=Af3-1;if(Af3<0
)Af3=this.Ko.Du()-1;A._GetAutoObject(A.Device.Device).Zw(this.Ko.C7(Af3));}break;
case 7:{Af3=Af3+1;if(Af3>=this.Ko.Du())Af3=0;A._GetAutoObject(A.Device.Device).Zw(
this.Ko.C7(Af3));}break;default:D5.Mw=true;}},CC:function(G){if(this.DQ.AAg()){this.
DQ.Ac$();if(this.DQ.AAg()===false)this.Bg.AUa(true);return;}else if(this.Afq)this.
ABi(this);if(!!this.Bg)this.Bg.AUa(true);},E4:function(G){if(!!this.Bg)this.Bg.AUa(
false);},AxI:function(G){var B;if(!!this.Bg)this.HR(this.Bg);this.Bg=A._NewObject(
C.AMN,0);this.Bg.H(this.ARU);this.Bg.Zy(A._GetAutoObject(A.Device.Device).An);this.
Bg.ZC([this,this.Aaq]);if(!!this.FE)this.Bg.A98([B=this.FE,B.A9D,B.A_2]);this.A4L(
this);this.J(this.Bg,0);if(this.Afq===false)this.Bb(this.Bg);this.Bfd(this);this.
A$X(this);},A95:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Dr(this.
A7h());this.Ek.AR=[this,this.Aaq];this.ALF(this);this.Ek.As(true);this.Bb(this.Ek
);this.Afq=true;},Bld:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);
if(!this.Bg)return;var Aa=(C.ACp.isPrototypeOf(B=this.Bg.AD.BjW(this.Bg.AD.Gu))?
B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).GT(Aa.Ht);else A._GetAutoObject(
A.Device.Helper).W.E7();this.Agm();},Agj:function(G){var F;if(!this.Fn)this.A6D(
this);else switch((F=this.Fn,F[1].call(F[0]))){case 19:break;case 0:this.A6D(this
);break;case 1:this.BiL(this);break;case 9:this.A6E(this);break;case 4:this.BiN(
this);break;case 6:this.BiO(this);break;case 8:this.BiQ(this);break;case 2:this.
BiR(this);break;case 3:this.BiS(this);break;case 7:this.BiU(this);break;case 5:this.
BiV(this);break;case 10:this.BiX(this);break;case 11:this.BiM(this);break;case 12:
this.BiP(this);break;case 13:this.A6J(this);break;case 14:this.A6F(this);break;case
18:this.A6G(this);break;case 15:this.A6H(this);break;case 16:this.BiT(this);break;
case 17:this.A6I(this);break;default:A.ab5("%s%e",AfH,(F=this.Fn,F[1].call(F[0])
));}},Aaq:function(s){this.Agj(s);},Bmq:function(G){this.Dr(C.Kv);this.Ek.AR=null;
this.Afq=false;this.Z9(this);this.Bgz();this.N.T7.CZ(255);this.N.T8.CZ(255);this.
Bb(this.Bg);this.Ek.As(false);},Anu:function(G){A._GetAutoObject(C.A7).FB();},Dl:
function(E){if(this.KS===E)return;this.KS=E;this.A4L(this);},AbB:function(){switch(
A._GetAutoObject(A.Device.Device).Ko){case 14:return C.ANm;case 2:return C.ANo;case
1:return C.ANp;case 3:return C.ANr;case 0:case 8:case 9:case 10:case 4:case 5:case
6:return C.AqD;case 7:return C.ACo;case 12:return C.ACr;case 11:return C.ACn;case
13:return C.ACq;default:throw new Error(Aoo);}},AbC:function(){switch(A._GetAutoObject(
A.Device.Device).Ko){case 14:return C.APO;case 2:return C.ADJ;case 1:return C.APQ;
case 3:return C.APS;case 4:return C.ADF;case 0:case 8:case 9:case 10:case 5:case
6:return C.Aq_;case 7:return C.ADH;case 12:return C.ADI;case 11:return C.ADG;case
13:return C.ADK;default:throw new Error(Aoo);}},Bfd:function(G){this.ATP(A._GetAutoObject(
A.Device.Device).Ko);if(!!this.Bg){this.Bg.N8(this.AbB());this.BpI(this);}},BpI:
function(G){var B;if(!!this.FE)this.HR(this.FE);this.FE=(C.De.isPrototypeOf(B=A.
_NewObject(this.AbC(),0))?B:null);this.FE.H(I1);if(!!this.Bg)this.Bg.A98([B=this.
FE,B.A9D,B.A_2]);this.J(this.FE,0);},Blb:function(G){this.Rb(this);A._GetAutoObject(
A.Device.Device).Dw(0);},AUd:function(G){A._GetAutoObject(A.Device.Device).Zw(1);
},AUc:function(G){A._GetAutoObject(A.Device.Device).Zw(2);},AUe:function(G){A._GetAutoObject(
A.Device.Device).Zw(3);},Rb:function(G){A._GetAutoObject(A.Device.Device).An.Bk(
A._GetAutoObject(A.Device.Helper).MB());},A01:function(s){this.Rb(s);},HS:function(
G){if(this.Afq){this.ALF(this);return;}this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(
A.ach.AD1));this.N.C4(A.aaL(A.ach.Options));this.N.CE=[this,this.Anu];this.N.Ce=[
this,this.A95];this.N.Ca=[this,this.Bbt];this.N.Hz(A.jV);this.N.E6(A.jV);this.N.
CS(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B_()){this.N.IS.CZ(100);this.N.
Ce=null;}else this.N.IS.CZ(255);},AoG:function(s){this.HS(s);},AdU:function(Aii,
Aij,AJC){A._GetAutoObject(C.BS).ABZ(Aii,Aij,[this,this.A9x,this.ATP],AJC);},Agd:
function(G){this.A4L(this);if(this.Afq)A.pe([this,this.ALF],this);},Agm:function(
){A._GetAutoObject(C.A7).Cb(9);},A4L:function(G){if(!this.Bg)return;if(!A._GetAutoObject(
A.Device.Device).An.QN()||!A._GetAutoObject(A.Device.Device).An.Filter)this.Bg.Dl(
A.aaR(A.acf.AEH));else if(A._GetAutoObject(A.Device.Helper).Aro(A._GetAutoObject(
A.Device.Device).An.Filter))this.Bg.Dl(this.KS);else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DM(1,4)){if(A._GetAutoObject(A.Device.Helper).ADk(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.Bg.Dl(A.aaR(A.acf.AOl));else this.Bg.Dl(A.aaR(
A.acf.AOk));}else this.Bg.Dl(A.aaR(A.acf.ASw));},AE8:function(G){var F;if(!!this.
Fn)(F=this.Fn,F[2].call(F[0],0));},AwY:function(E){if(A.aaZ(this.Fn,E))return;if(
!!this.Fn)A.z$([this,this.A0_],this.Fn,0);this.Fn=E;if(!!E)A.zX([this,this.A0_],
this.Fn,0);if(!!E)A.pe([this,this.A0_],this);},AFc:function(G){var F;if(!!this.Fn
)(F=this.Fn,F[2].call(F[0],1));},Aw3:function(G){var F;if(!!this.Fn)(F=this.Fn,F[
2].call(F[0],2));},ATT:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],
3));},AT7:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],7));},AT8:function(
G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],5));},BiR:function(G){if(!this.Bg
)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.FO());this.DQ.
Qt(1);}},I8:function(Aii,Aij,Ao4){A._GetAutoObject(C.BS).ABZ(Aii,Aij,[this,this.
A9y,this.ATQ],Ao4);},BmB:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0
],4));},BiN:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.
Helper).GT(this.Bg.FO());this.DQ.BB$();}},BmC:function(G){var F;if(!!this.Fn)(F=
this.Fn,F[2].call(F[0],6));},BiO:function(G){if(!this.Bg)return;if(this.Nk()){A.
_GetAutoObject(A.Device.Helper).GT(this.Bg.FO());this.DQ.BCa();}},BiQ:function(G
){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.
FO());this.DQ.Qt(1024);}},BnM:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(
F[0],8));},Akw:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],9));},BiS:
function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(
this.Bg.FO());this.DQ.Qt(2);}},A6D:function(G){if(!this.Bg)return;if(this.Nk()){
A._GetAutoObject(A.Device.Helper).GT(this.Bg.FO());if(A._GetAutoObject(A.Device.
Helper).Aj8(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.
Device.Device).AY(66,true,A.jV,0,null);else this.BBX();}},BiL:function(G){if(!this.
Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.FO());this.
DQ.Qt(16);}},BBX:function(){A._GetAutoObject(C.A7).Cb(94);},BiU:function(G){if(!
this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.FO());
this.DQ.Qt(4);}},BiV:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GT(this.Bg.FO());this.DQ.Qt(8);}},A6E:function(G){var B;if(!this.
Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.FO());if(this.
Afq){A.zX([this,this.AAJ],[B=this.DQ,B.SK,B.E5],0);this.ABi(this);}this.DQ.Ac$();
}},AuO:function(Aii,Aij,ByU){A._GetAutoObject(C.BS).BhH(Aii,Aij,ByU);},ALF:function(
G){this.N.Hz(A.jV);this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.AeD));this.N.CE=[this,this.
Bmq];this.N.T7.CZ(100);this.N.T8.CZ(100);var Gi=A._GetAutoObject(A.Device.Device
).An.B_();if(Gi<=0){this.N.Ct(null);this.N.C4(null);this.N.Ce=null;this.N.Ca=null;
this.N.WV=false;this.N.ZK=false;}else if(Gi===1){this.N.Ct(null);this.N.C4(A.aaL(
A.ach.AeE));this.N.Ce=null;this.N.Ca=[this,this.Aaq];this.N.WV=false;this.N.ZK=false;
}else{this.N.Ct(A.aaL(A.ach.Are));this.N.C4(A.aaL(A.ach.Arm));this.N.Ce=[this,this.
A35];this.N.Ca=[this,this.A36];this.N.WV=true;this.N.ZK=true;}},A35:function(G){
if(!this.Bg)return;if(this.Bg.FO()<(A._GetAutoObject(A.Device.Device).An.B_()-1)
)this.Bg.GW(this.Bg.FO()+1);},A36:function(G){if(!this.Bg)return;if(this.Bg.FO()>
0)this.Bg.GW(this.Bg.FO()-1);},A$X:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>=0){var Bd=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bd>=0){this.Bg.GW(Bd);A.ab5("%s",Aop);}}},Nk:function(){return this.
Bg.FO()>=0;},Akj:function(){return A._GetAutoObject(A.Device.Device).An.B_()>5;}
,AgA:function(){this.BhI();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.AUY),[this,this.
A95]);A._GetAutoObject(C.BS).Fz();},Z9:function(G){if(this.Afq)this.ALF(this);else
this.HS(this);},ABi:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.Fa();var Azj=aFilter.DM(1,4);if(!!Azj){aFilter.Nw(Azj);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GW(0);}},BHc:function(s){this.
ABi(s);},AAJ:function(G){var B;if(!this.DQ.EN&&this.Afq){A.z$([this,this.AAJ],[B=
this.DQ,B.SK,B.E5],0);this.ABi(this);}},Boo:function(G){var F;if(!!this.Fn)(F=this.
Fn,F[2].call(F[0],10));},BiX:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GT(this.Bg.FO());this.DQ.Qt(256);}},A3V:function(G){var F;this.
ATQ((F=this.Fn,F[1].call(F[0])));A.pe([this,this.AoG],this);},A0_:function(s){this.
A3V(s);},Bmy:function(G){var F;if(!!this.Fn)(F=this.Fn,F[2].call(F[0],11));},BiM:
function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(
this.Bg.FO());this.DQ.Qt(4096);}},BiP:function(G){if(!this.Bg)return;if(this.Nk(
)){A._GetAutoObject(A.Device.Helper).GT(this.Bg.FO());this.DQ.Qt(16384);}},A6J:function(
G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.
FO());this.BBY();}},BBY:function(){A._GetAutoObject(C.A7).Acf(75);},A6F:function(
G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.
FO());this.DQ.Qt(32768);}},A6H:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GT(this.Bg.FO());this.DQ.Qt(65536);}},BiT:function(G){if(!this.
Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.FO());this.
DQ.Qt(131072);}},BhI:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Aro(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.ACu));else A._GetAutoObject(C.BS).TG(A.
aaR(A.acf.ACu),[this,this.Blb]);A._GetAutoObject(C.BS).TG(A.aaR(A.acf.AkW),[this
,this.Bld]);A._GetAutoObject(C.BS).Fz();},A6I:function(G){if(!this.Bg)return;if(
this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.FO());this.DQ.Qt(128);}}
,BBJ:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ch],this);},A6G:function(
G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GT(this.Bg.
FO());this.DQ.Qt(524288);}},BiW:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GT(this.Bg.FO());this.DQ.Qt(262144);}},ATP:function(E){if(this.
AUy===E)return;this.AUy=E;A.abo([this,this.A9x,this.ATP],0);},ATQ:function(E){if(
this.AUz===E)return;this.AUz=E;A.abo([this,this.A9y,this.ATQ],0);},A7h:function(
){return C.YC;},Bgz:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.Fa(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?
B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Box:function(G){A._GetAutoObject(A.Device.Device).Zw(0);
},Boy:function(G){A._GetAutoObject(A.Device.Device).Zw(14);},A_K:function(E){if(
A.aaY(this.ARU,E))return;this.ARU=E;if(!!this.Bg)this.Bg.H(E);},A9x:function(){return this.
AUy;},A9y:function(){return this.AUz;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADJ._Init.call(this.V$={I:this},0);C.Ko._Init.call(this.Ko={I:this},0);
this.__proto__=C.GJ;this.Background.H(Cf);this.N.Z(true);this.N.OW(true);this.N.
OX(true);this.Ek.A_z(A.jb.CU);this.Ek.A_A(A.jb.Text);this.Dr(C.Kv);this.V$.H(I1);
this.KS=A.aaR(A.acf.AEH);this.J(this.V$,0);this.DQ=A._GetAutoObject(C.DQ);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.V$._Done();this.Ko._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.V$._ReInit();
this.Ko._ReInit();this.Dl(A.aaR(A.acf.AEH));this.CQ();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ACp={AP:null,A$:null,UQ:null,AcF:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UQ.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.UQ.M[2]-1,0,this.UQ.M[2]+1,aSize[1]]);this.AcF.H([this.UQ.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UQ.L(this.V.AQ);this.AcF.L(this.
V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){this.T(this.
AX.CF(Ad,1).toFixed());this.UQ.R(this.AX.CF(Ad,2).toFixed());this.AcF.R(this.AX.
CF(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.UQ={I:this},0);A.acg.Text._Init.call(this.AcF={I:this
},0);this.__proto__=C.ACp;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UQ.L(A.jb.Text
);this.AcF.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UQ,0);this.
J(this.AcF,0);this.UQ.S(A.aaL(A.fl.Af));this.AcF.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UQ.
_Done();this.AcF._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UQ._ReInit();this.AcF._ReInit(
);this.UQ.S(A.aaL(A.fl.Af));this.AcF.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Aeb={OH:null,SY:null,Mt:null,Init:function(aArg){var B;A.zX([this,this.A3C],[
B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyZ],0);A.zX([this,this.AdB],[B=A._GetAutoObject(
A.Device.Device),B.Awf,B.AyY],0);A.pe([this,this.AdB],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SY.R(A._GetAutoObject(A.Device.Device).Abc.toFixed()+As8
);this.OH.Z(A._GetAutoObject(A.Device.Device).AmJ);},AdB:function(G){this.Am();}
,M5:function(G){A._GetAutoObject(C.A7).FB();},A3C:function(G){if(A._GetAutoObject(
A.Device.Device).AmJ===false){this.OH.Z(false);A._GetAutoObject(C.A7).FB();}else
this.OH.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OH={I:this},0);A.acg.Text._Init.call(this.SY={I:this},0);C.Mt._Init.call(
this.Mt={I:this},0);this.__proto__=C.Aeb;var B;this.Background.L(A.jb.CU);this.N.
Z(true);this.N.CS(A.aaR(A.acf.Ok));this.OH.H(Xp);this.OH.R(A.aaR(A.acf.OH));this.
OH.L(A.jb.Text);this.OH.Z(false);this.SY.H(As9);this.SY.R(As_);this.SY.L(A.jb.Text
);this.Mt.H(As$);this.J(this.OH,0);this.J(this.SY,0);this.J(this.Mt,0);this.N.Ca=[
this,this.M5];this.OH.S(A.aaL(A.fl.Af));this.SY.S(A.aaL(A.fl.Af));this.Mt.Au([B=
A._GetAutoObject(A.Device.Device),B.Awf,B.AyY]);this.Mt.A_R([B=A._GetAutoObject(
A.Device.Device),B.Awi,B.AyZ]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OH._Done();this.SY._Done();this.Mt._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OH._ReInit();this.SY._ReInit();this.Mt._ReInit(
);this.N.CS(A.aaR(A.acf.Ok));this.OH.R(A.aaR(A.acf.OH));this.OH.S(A.aaL(A.fl.Af)
);this.SY.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mt={Ad8:null,Ad9:null,Hg:function(G){var F;if(!!this.Q){this.A2J();var Adc=(
F=this.Q,F[1].call(F[0]));if(Adc>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gk);this.
OD.L((this.OD.AQ&0x00FFFFFF)|(this.AlQ(Adc,0,20)<<24));this.TN.L((this.TN.AQ&0x00FFFFFF
)|(this.AlQ(Adc,21,40)<<24));this.TO.L((this.TO.AQ&0x00FFFFFF)|(this.AlQ(Adc,41,
60)<<24));this.Ad8.L((this.Ad8.AQ&0x00FFFFFF)|(this.AlQ(Adc,61,80)<<24));this.Ad9.
L((this.Ad9.AQ&0x00FFFFFF)|(this.AlQ(Adc,81,100)<<24));}},A2J:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.Ve=this.Ad9;else if((F=this.Q,F[
1].call(F[0]))>60)this.Ve=this.Ad8;else if((F=this.Q,F[1].call(F[0]))>40)this.Ve=
this.TO;else if((F=this.Q,F[1].call(F[0]))>20)this.Ve=this.TN;else this.Ve=this.
OD;}else this.Ve=null;},_Init:function(aArg){C.OF._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad8={I:this},0);A.acg.AL._Init.call(this.Ad9={I:this},0);this.__proto__=
C.Mt;this.H(Aoq);this.NY.H(Aoq);this.OD.H(Ata);this.TN.H(Alg);this.TO.H(Ayi);this.
Ad8.H(Ayj);this.Ad8.L(A.jb.E1);this.Ad9.H(Ayk);this.Ad9.L(A.jb.E1);this.J(this.Ad8
,0);this.J(this.Ad9,0);this.NY.Ax(A.aaL(A.ach.AM7));},_Done:function(){this.__proto__=
C.OF;this.Ad8._Done();this.Ad9._Done();C.OF._Done.call(this);},_ReInit:function(
){C.OF._ReInit.call(this);this.Ad8._ReInit();this.Ad9._ReInit();},_Mark:function(
D){var B;C.OF._Mark.call(this,D);if((B=this.Ad8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVt={Od:null,Lx:null,Ak_:null,Z6:null,Z5:null,CQ:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApT],[B=A._GetAutoObject(A.Device.Device),B.
AS8,B.A0U],0);A.zX([this,this.ApT],[B=A._GetAutoObject(A.Device.Device),B.AS$,B.
A0W],0);A.zX([this,this.ApT],[B=A._GetAutoObject(A.Device.Device),B.A9N,B.Bb0],0
);A.pe([this,this.ApT],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABM(this);this.BC4(this);this.DK(this);},BBl:function(G){A._GetAutoObject(
A.Device.Device).AsP();},ApT:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Z6.Z(false);break;case 4:{var A4n;if(!A._GetAutoObject(A.Device.Device).Afv)A4n=
0;else A4n=((A._GetAutoObject(A.Device.Device).AxZ*100)/A._GetAutoObject(A.Device.
Device).Afv)|0;this.Z6.Bx(A4n);this.Z6.Z(true);}break;default:A.ab5("%s%e",Atb,A.
_GetAutoObject(A.Device.Device).SyncState);}},BC4:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CJ);this.Lx.L(A.jb.Text);this.Od.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gk);this.Lx.L(A.jb.Bm);this.Od.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",Atb,A._GetAutoObject(A.Device.Device).SyncState);}},DK:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C3(null);this.N.CE=null;this.N.CS(A.jV);this.N.Ca=null;}break;
case 7:{this.N.C3(null);this.N.CE=null;this.N.CS(A.aaR(A.acf.Ok));this.N.Ca=[this
,this.BBl];}break;default:A.ab5("%s%e",Atb,A._GetAutoObject(A.Device.Device).SyncState
);}},ABM:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lx.R(A.aaR(A.acf.Bqs));break;case 1:this.Lx.R(A.aaR(A.acf.Bqp));break;
case 2:this.Lx.R(A.aaR(A.acf.Bqm));break;case 3:this.Lx.R(A.aaR(A.acf.Bqq));break;
case 4:this.Lx.R((A.aaR(A.acf.Bqo)+Ayl)+A._GetAutoObject(A.Device.Helper).MN(A._GetAutoObject(
A.Device.Helper).MN(A.aaR(A.acf.Bo3),Pc,A._GetAutoObject(A.Device.Device).AxZ.toFixed(
)),Aym,A._GetAutoObject(A.Device.Device).Afv.toFixed()));break;case 5:this.Lx.R(
A.aaR(A.acf.Bqr));break;case 7:this.Lx.R(A.aaR(A.acf.Bqn));break;default:A.ab5("%s%e"
,Atb,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.Od={I:this},0);C.CG._Init.call(this.Lx={I:this
},0);A.acg.Ap._Init.call(this.Ak_={I:this},0);A.acs.ADM._Init.call(this.Z6={I:this
},0);A.acs.ADN._Init.call(this.Z5={I:this},0);this.__proto__=C.AVt;this.N.Z(true
);this.Od.H(AWp);this.Od.R(A.aaR(A.acf.Od));this.Lx.A1(0x3F);this.Lx.H(AWq);this.
Lx.A6(0x12);this.Ak_.H(AWr);this.Ak_.L(A.jb.AV);this.Z6.H(AWs);this.Z6.As(false);
this.Z6.Bx(0);this.Z5.Boi(0);this.Z5.A$d(0);this.Z5.A$b(A.jb.AV);this.Z5.A$a(0);
this.Z5.AGl(AHF);this.J(this.Od,0);this.J(this.Lx,0);this.J(this.Ak_,0);this.J(this.
Z6,0);this.Od.S(A.aaL(A.fl.EK));this.Od.A0(A.aaL(A.fl.Af));this.Od.Cr(A.aaL(A.fl.
Ak));this.Lx.S(A.aaL(A.fl.Af));this.Lx.A0(A.aaL(A.fl.Ak));this.Lx.Cr(A.aaL(A.fl.
Bh));this.Ak_.Ax(A.aaL(A.ach.ARa));this.Z6.OnSetAppearance(this.Z5);this.Z5.A$c(
A.aaL(A.ach.N1));this.Z5.A_$(A.aaL(A.ach.N1));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.Od._Done();this.Lx._Done();this.Ak_._Done();this.Z6._Done(
);this.Z5._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Od._ReInit();this.Lx._ReInit();this.Ak_._ReInit();this.Z6._ReInit();this.
Z5._ReInit();this.Od.R(A.aaR(A.acf.Od));this.Od.S(A.aaL(A.fl.EK));this.Od.A0(A.aaL(
A.fl.Af));this.Od.Cr(A.aaL(A.fl.Ak));this.Lx.S(A.aaL(A.fl.Af));this.Lx.A0(A.aaL(
A.fl.Ak));this.Lx.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Od)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ak_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z5)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aq8={_Init:function(aArg){C.ADC._Init.call(this,aArg
);this.__proto__=C.Aq8;this.A_C(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,BI:A.abi(3,0,{0:2,2:1}),Du:function(
){return 3;},C7:function(aIndex){if(aIndex>=3)return-1;return this.BI.Get(aIndex
);},Gm:function(aIndex){return this.GenderToString.BT(this.C7(aIndex));},DZ:function(
A8){var O=0;while(O<3){if(this.BI.Get(O)===A8)return O;O=O+1;}return-1;},H8:function(
){var O=0;var max=-1;while(O<3){if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.J0(
E);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Af7],[B=this.Animal,B.WJ,B.J0],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af7],[B=this.Animal,B.WJ,B.J0],0);A.pe([this,this.Af7],this);},Af7:function(
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
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akx(E);},A1Z:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B$,this.
Cc],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A1Z],[B=this.Animal,B.ASN,B.Akx],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A1Z],[B=this.Animal,B.ASN,B.Akx],0);A.pe([this,this.A1Z],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.BI=[]).__proto__=C.BirthType.BI;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acw:null,Du:
function(){return A._GetAutoObject(A.Device.Helper).Ad3.MM;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Ad3.MM)return-1;return A._GetAutoObject(
A.Device.Helper).Ad3.Get(aIndex);},Gm:function(aIndex){return this.Acw.BT(this.C7(
aIndex));},DZ:function(A8){var O=0;while(O<A._GetAutoObject(A.Device.Helper).Ad3.
MM){if(A._GetAutoObject(A.Device.Helper).Ad3.Get(O)===A8)return O;O=O+1;}return-
1;},H8:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UN.
MM){if(A._GetAutoObject(A.Device.Helper).UN.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UN.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.EC(E);},A1S:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B$,this.Cc],0);},L6:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1S],[B=this.Animal,B.PY,B.EC],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1S],[B=this.Animal,B.PY,B.EC],0);A.pe([
this,this.A1S],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acw={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acw._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acw._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AU_={Init:function(aArg){var B;A.pe([this,this.AfL],this);A.zX([this,this.AfL
],[B=A._GetAutoObject(A.Device.Device),B.ArJ,B.Atv],0);},A4s:function(G){A._GetAutoObject(
A.Device.Device).AY(38,true,A.jV,0,[this,this.Bcg]);},A33:function(G){var B;var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).AsB(this);},A2g:function(G){var F;if(this.A_===1){var BP=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlY)this.D7=this.AlY;if(this.D7<A._GetAutoObject(
A.Device.Device).AcL)this.D7=A._GetAutoObject(A.Device.Device).AcL;if(this.DW!==
BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.
A_===2){var BP=this.DW;this.DW=this.DW-10;if(this.DW<this.D7)this.DW=this.D7;if(
this.DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);
}}this.DK(this);this.Am();},A2S:function(G){var F;if(this.A_===1){var BP=this.D7;
this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP){if(!!this.
J3)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.A_===2){var BP=
this.DW;this.DW=this.DW+10;if(this.DW>this.AlT)this.DW=this.AlT;if(this.DW!==BP){
if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);}}this.DK(this
);this.Am();},GH:function(G){this.PR.R(AHG+A._GetAutoObject(A.Device.Converter).
Ak4(this.D7));this.PT.R(AHG+A._GetAutoObject(A.Device.Converter).Ak4(this.DW));this.
SE.R(A._GetAutoObject(A.acj.Temperature).AlR());},A2L:function(AtB){if(AtB===1)return this.
PR;else if(AtB===2)return this.PT;else return null;},_Init:function(aArg){C.Acv.
_Init.call(this,aArg);this.__proto__=C.AU_;this.AlT=5000;this.AlY=3000;this.T(A.
aaR(A.acf.Arz));this.Background.H(AfI);this.V.H(BD);this.V.R(A.aaR(A.acf.AHg));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Acv._ReInit.call(this);this.T(
A.aaR(A.acf.Arz));this.V.R(A.aaR(A.acf.AHg));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CJ);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Abf:null,Abj:null,Abh:
null,Background:null,Abe:null,Abi:null,Abg:null,AjH:null,ArE:null,VX:null,A5:0,BA3:
function(G){if(this.AjH.CP===6){if(this.A5===1)this.AnO(2);else if(this.A5===2)this.
AnO(3);else this.AnO(1);}else if(this.AjH.CP===7){if(this.A5===3)this.AnO(2);else
if(this.A5===2)this.AnO(1);else this.AnO(3);}},AnO:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.Abe.M);break;case 2:this.
Background.H(this.Abi.M);break;case 1:this.Background.H(this.Abg.M);break;default:
this.Background.H(Aor);}},H1:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hq._Init.
call(this.Abf={I:this},0);A.acg.Hq._Init.call(this.Abj={I:this},0);A.acg.Hq._Init.
call(this.Abh={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aes._Init.call(this.Abe={I:this},0);A.acg.Aes._Init.call(this.Abi={I:this},0);A.
acg.Aes._Init.call(this.Abg={I:this},0);A.Core.BF._Init.call(this.AjH={I:this},0
);A.Core.BF._Init.call(this.ArE={I:this},0);A.Graphics.AMZ._Init.call(this.VX={I:
this},0);this.__proto__=C.Rating;this.H(AWt);this.Abf.H(AHH);this.Abf.L(A.jb.Text
);this.Abf.AnM(Alh);this.Abf.Nu(3);this.Abf.Z(true);this.Abj.H(AHI);this.Abj.L(A.
jb.Text);this.Abj.AnM(Alh);this.Abj.Nu(3);this.Abj.Z(true);this.Abh.H(AHJ);this.
Abh.L(A.jb.Text);this.Abh.AnM(Alh);this.Abh.Nu(3);this.Abh.Z(true);this.Background.
H(Aor);this.Background.L(A.jb.AV);this.Abe.H(AHH);this.Abe.L(A.jb.E1);this.Abe.AnM(
Alh);this.Abe.Z(true);this.Abi.H(AHI);this.Abi.L(A.jb.Ib);this.Abi.AnM(Alh);this.
Abi.Z(true);this.Abg.H(AHJ);this.Abg.L(A.jb.Gk);this.Abg.AnM(Alh);this.Abg.Z(true
);this.AjH.Filter=147;this.ArE.Filter=1;this.VX.BmR(360);this.VX.Bn7(22);this.VX.
Bog(2);this.J(this.Abf,0);this.J(this.Abj,0);this.J(this.Abh,0);this.J(this.Background
,0);this.J(this.Abe,0);this.J(this.Abi,0);this.J(this.Abg,0);this.Abf.ZD(this.VX
);this.Abj.ZD(this.VX);this.Abh.ZD(this.VX);this.Background.Ax(A.aaL(A.ach.N0));
this.Abe.ZD(this.VX);this.Abi.ZD(this.VX);this.Abg.ZD(this.VX);this.AjH.BG=[this
,this.BA3];this.ArE.BG=[this,this.H1];},_Done:function(){this.__proto__=A.Core.P;
this.Abf._Done();this.Abj._Done();this.Abh._Done();this.Background._Done();this.
Abe._Done();this.Abi._Done();this.Abg._Done();this.AjH._Done();this.ArE._Done();
this.VX._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Abf._ReInit();this.Abj._ReInit();this.Abh._ReInit();this.Background.
_ReInit();this.Abe._ReInit();this.Abi._ReInit();this.Abg._ReInit();this.AjH._ReInit(
);this.ArE._ReInit();this.VX._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Abf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abj)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.AsD={Akl:null,Asn:null,Background:null,TZ:null,TU:null,Ab5:null,Ab4:null,Ab3:
null,AcA:null,Acz:null,Acy:null,Acr:null,Acq:null,AbY:null,AbX:null,Ach:null,Acg:
null,AqJ:null,Init:function(aArg){},BkP:function(G){this.Ab5.R(AWu);this.Ab4.R(A.
jV);this.Ab3.R(A.jV);this.AcA.R(AWv);this.Acz.R(A.jV);this.Acy.R(A.jV);this.Acr.
R(A.jV);this.Acq.R(A.jV);this.AbY.R(A.jV);this.AbX.R(A.jV);this.Ach.R(A.jV);this.
Acg.R(A.jV);},BoL:function(G){this.TU.Z(true);this.TZ.Z(true);var II=this.Iq();if(
!II)return;this.TZ.R(II.GetFPS().toFixed()+AHK);this.TU.R(AWw);this.TU.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akl={I:this},0);A.Core.Timer._Init.call(this.Asn={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TZ={I:this},0);A.acg.
Text._Init.call(this.TU={I:this},0);A.acg.Text._Init.call(this.Ab5={I:this},0);A.
acg.Text._Init.call(this.Ab4={I:this},0);A.acg.Text._Init.call(this.Ab3={I:this}
,0);A.acg.Text._Init.call(this.AcA={I:this},0);A.acg.Text._Init.call(this.Acz={I:
this},0);A.acg.Text._Init.call(this.Acy={I:this},0);A.acg.Text._Init.call(this.Acr={
I:this},0);A.acg.Text._Init.call(this.Acq={I:this},0);A.acg.Text._Init.call(this.
AbY={I:this},0);A.acg.Text._Init.call(this.AbX={I:this},0);A.acg.Text._Init.call(
this.Ach={I:this},0);A.acg.Text._Init.call(this.Acg={I:this},0);A.acg.AL._Init.call(
this.AqJ={I:this},0);this.__proto__=C.AsD;this.H(AcT);this.As(false);this.Akl.P0(
2000);this.Akl.WO(1);this.Akl.As(true);this.Asn.As(true);this.Background.A1(0x3F
);this.Background.H(AcT);this.Background.L(0x78000000);this.TZ.H(AWx);this.TZ.A6(
0x14);this.TZ.R(A.jV);this.TZ.L(0xFFFFFC00);this.TZ.Z(false);this.TU.H(AWy);this.
TU.A6(0x11);this.TU.R(A.jV);this.TU.Z(false);this.Ab5.H(AWz);this.Ab5.A6(0x11);this.
Ab5.R(A.jV);this.Ab4.H(AHL);this.Ab4.A6(0x11);this.Ab4.R(A.jV);this.Ab3.H(Atc);this.
Ab3.A6(0x14);this.Ab3.R(A.jV);this.AcA.H(AHM);this.AcA.A6(0x11);this.AcA.R(A.jV);
this.Acz.H(AHN);this.Acz.A6(0x11);this.Acz.R(A.jV);this.Acy.H(Ayn);this.Acy.A6(0x14
);this.Acy.R(A.jV);this.Acr.H(AHO);this.Acr.A6(0x11);this.Acr.R(A.jV);this.Acq.H(
Ayo);this.Acq.A6(0x14);this.Acq.R(A.jV);this.AbY.H(AWA);this.AbY.A6(0x11);this.AbY.
R(A.jV);this.AbX.H(AWB);this.AbX.A6(0x14);this.AbX.R(A.jV);this.Ach.H(AWC);this.
Ach.A6(0x11);this.Ach.R(A.jV);this.Acg.H(AWD);this.Acg.A6(0x14);this.Acg.R(A.jV);
this.AqJ.H(AHP);this.J(this.Background,0);this.J(this.TZ,0);this.J(this.TU,0);this.
J(this.Ab5,0);this.J(this.Ab4,0);this.J(this.Ab3,0);this.J(this.AcA,0);this.J(this.
Acz,0);this.J(this.Acy,0);this.J(this.Acr,0);this.J(this.Acq,0);this.J(this.AbY,
0);this.J(this.AbX,0);this.J(this.Ach,0);this.J(this.Acg,0);this.J(this.AqJ,0);this.
Akl.MJ=[this,this.BkP];this.Asn.MJ=[this,this.BoL];this.TZ.S(A.aaL(A.fl.Ak));this.
TU.S(A.aaL(A.fl.Ak));this.Ab5.S(A.aaL(A.fl.Ak));this.Ab4.S(A.aaL(A.fl.Ak));this.
Ab3.S(A.aaL(A.fl.Ak));this.AcA.S(A.aaL(A.fl.Ak));this.Acz.S(A.aaL(A.fl.Ak));this.
Acy.S(A.aaL(A.fl.Ak));this.Acr.S(A.aaL(A.fl.Ak));this.Acq.S(A.aaL(A.fl.Ak));this.
AbY.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.
Acg.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akl._Done();this.Asn._Done();this.Background._Done();this.TZ._Done();this.TU.
_Done();this.Ab5._Done();this.Ab4._Done();this.Ab3._Done();this.AcA._Done();this.
Acz._Done();this.Acy._Done();this.Acr._Done();this.Acq._Done();this.AbY._Done();
this.AbX._Done();this.Ach._Done();this.Acg._Done();this.AqJ._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akl._ReInit();this.
Asn._ReInit();this.Background._ReInit();this.TZ._ReInit();this.TU._ReInit();this.
Ab5._ReInit();this.Ab4._ReInit();this.Ab3._ReInit();this.AcA._ReInit();this.Acz.
_ReInit();this.Acy._ReInit();this.Acr._ReInit();this.Acq._ReInit();this.AbY._ReInit(
);this.AbX._ReInit();this.Ach._ReInit();this.Acg._ReInit();this.AqJ._ReInit();this.
TZ.S(A.aaL(A.fl.Ak));this.TU.S(A.aaL(A.fl.Ak));this.Ab5.S(A.aaL(A.fl.Ak));this.Ab4.
S(A.aaL(A.fl.Ak));this.Ab3.S(A.aaL(A.fl.Ak));this.AcA.S(A.aaL(A.fl.Ak));this.Acz.
S(A.aaL(A.fl.Ak));this.Acy.S(A.aaL(A.fl.Ak));this.Acr.S(A.aaL(A.fl.Ak));this.Acq.
S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.Ach.
S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AcA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ach)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGZ={FN:null,Dm:null,Av:null,JB:null,HO:null,Un:null,Bc:null,Ss:null,Gy:null
,Gx:null,FZ:0,A_:0,Bkm:false,Init:function(aArg){},Ai:function(Ae){C.Ds.Ai.call(
this,Ae);this.Hy.Z(false);this.H9.Z(false);if(!!this.Dm){this.Ss.R(this.Av.Format(
AWE));this.Un.R(this.Av.Format(MR));}if(this.A_===1){this.HO.Z(true);this.HO.H(this.
Ss.M);this.HO.L(A.jb.Bm);this.Ss.L(this.Background.AQ);this.Un.L(A.jb.Bm);}else if(
this.A_===2){this.HO.Z(true);this.HO.H(this.Un.M);this.HO.L(A.jb.Bm);this.Ss.L(A.
jb.Bm);this.Un.L(this.Background.AQ);}else{this.HO.Z(false);this.Ss.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Un.L(this.V.AQ);}},Qy:function(G){if(this.FI===1)A.pe([
this,this.Vj],this);else if(this.FI===4)A.pe([this,this.AiJ],this);else if(this.
FI===5)A.pe([this,this.Aiv],this);C.Ds.Qy.call(this,G);},Ki:function(G){switch(this.
A_){case 0:C.Ds.Ki.call(this,G);break;case 2:break;default:this.AdA(this);}},Kd:
function(G){switch(this.A_){case 0:C.Ds.Kd.call(this,G);break;default:this.Aiu(this
);}},AdC:function(G){var F;if(!!this.Dm)this.Uv((F=this.Dm,F[1].call(F[0])));},Acc:
function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdC],this.Dm
,0);this.Dm=E;if(!!E)A.zX([this,this.AdC],E,0);if(!!E)A.pe([this,this.AdC],this);
},Uv:function(E){if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.FZ);this.
Am();},AdA:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Vj],this
);this.Bo.As(false);}this.Bo.As(true);},Vj:function(G){this.Ex(this.A_+1);},Al_:
function(G){this.FI=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiJ],this);this.Bo.
As(false);}this.Bo.As(true);},Al9:function(G){this.FI=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Aiv],this);this.Bo.As(false);}this.Bo.As(true);},AiJ:function(G){
var B;var F;var BP=this.FZ;if(this.A_===1)this.Av.AnH(this.Av.AjV+1);if(this.A_===
2)this.Av.AnK(this.Av.Av9+1);this.Av.AnN(0);this.Uv(((B=(this.Av.JY()|0))<0)?B+0x100000000:
B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FZ));A.abo(this.
Dm,0);}},Aiv:function(G){var B;var F;var BP=this.FZ;if(this.A_===1)this.Av.AnH(this.
Av.AjV-1);if(this.A_===2)this.Av.AnK(this.Av.Av9-1);this.Av.AnN(0);this.Uv(((B=(
this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[
2].call(F[0],this.FZ));A.abo(this.Dm,0);}},DK:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeE));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vj];}break;case 2:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am7
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Aiu];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkT((F=this.N,F[1].call(F[
0])));}},FW:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){
var F;if(!this.A_)this.FN.AjD((F=this.N,F[1].call(F[0])));this.A_=EO;this.Bkm=true;
if((this.A_<0)||(this.A_>2))this.A_=0;this.DK(this);this.Gy.Bw=!!this.A_;this.Gx.
Bw=!!this.A_;this.Am();},Aiu:function(G){if(this.A_>1)this.Ex(this.A_-1);},_Init:
function(aArg){C.Ds._Init.call(this,aArg);A.Core.Bs._Init.call(this.Av={I:this},
0);A.Core.BF._Init.call(this.JB={I:this},0);A.acg.AL._Init.call(this.HO={I:this}
,0);A.acg.Text._Init.call(this.Un={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Ss={I:this},0);A.Core.BF._Init.call(this.Gy={I:this
},0);A.Core.BF._Init.call(this.Gx={I:this},0);this.__proto__=C.AGZ;this.H(U4);this.
V.R(Ayp);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H9.Z(false);this.JB.Filter=1;this.
HO.H(AWF);this.HO.L(0x55FFFFFF);this.Un.H(AWG);this.Un.Je(true);this.Bc.H(AWH);this.
Bc.A6(0x14);this.Bc.R(AWI);this.Ss.H(AWJ);this.Ss.Je(true);this.Ss.A6(0x14);this.
Gy.Filter=4;this.Gy.Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HO,0);
this.J(this.Un,0);this.J(this.Bc,0);this.J(this.Ss,0);this.JB.BG=[this,this.AdA];
this.Un.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Ss.S(A.aaL(A.fl.EK));this.
Gy.BG=[this,this.Al_];this.Gy.D1=[this,this.AiJ];this.Gx.BG=[this,this.Al9];this.
Gx.D1=[this,this.Aiv];this.FN=A._NewObject(C.Aex,0);this.Init(aArg);},_Done:function(
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
};C.CG={B7:null,AmY:null,AqY:null,Em:null,Text:null,String:A.jV,Beh:A.jV,Kn:0x12
,ALn:0,AQ:0xFFFFFFFF,Oa:0,AUR:0,A$K:0,Bei:true,G5:function(CN){var LO=(A.Core.ARO.
isPrototypeOf(CN)?CN:null);if(!!LO)this.BDd(this);return A.Core.P.G5.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajn],this);}
,Dd:function(aFilter){return A.abh(this.Text.Dd(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Bei){this.Beh=E;this.Bei=false;
}this.ALn=E.length;A.pe([this,this.Ajn],this);},S:function(E){if(this.B7===E)return;
this.B7=E;A.pe([this,this.Ajn],this);},A0:function(E){if(this.AmY===E)return;this.
AmY=E;A.pe([this,this.Ajn],this);},Cr:function(E){if(this.AqY===E)return;this.AqY=
E;A.pe([this,this.Ajn],this);},A6:function(E){if(E===this.Kn)return;this.Kn=E;this.
Text.A6(E);},Ajn:function(G){var B;var ALt=0;if(!this.ALn){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.KX(false);if(!!this.B7){ALt=
this.B7.YA(this.String,0,this.ALn);if(ALt<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)
)){this.Text.S(this.B7);this.Text.Axb(this.Oa);return;}}this.Text.KX(true);if(!!
this.AmY){ALt=this.AmY.YA(this.String,0,this.ALn);this.Text.S(this.AmY);this.Text.
Axb(this.AUR);if((ALt<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)))&&(((B=this.Text.Dd(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqY){this.Text.S(this.AqY);
if(((B=this.Text.Dd())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Axb((((this.Text.
B7.Ascent+this.Text.B7.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BDd:function(G){this.R(this.Beh);},Q_:function(E){if(
A.aa0(this.Em,E))return;this.Em=E;this.Text.Q_(E);},ASL:function(){return A.abh(
this.Text.Dd(),this.M.slice(0,2));},Afj:function(AoS){return A.abf(this.M.slice(
0,2),this.Text.Afj(AoS));},Axb:function(E){if(this.Oa===E)return;this.Oa=E;A.pe([
this,this.Ajn],this);},Bn9:function(E){if(this.AUR===E)return;this.AUR=E;A.pe([this
,this.Ajn],this);},Bn_:function(E){if(this.A$K===E)return;this.A$K=E;A.pe([this,
this.Ajn],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CG;this.H(AHQ);this.As(false);
this.Text.A1(0x3F);this.Text.H(AHQ);this.Text.R(Rr);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjT={Y:null,IR:null,AeP:null,Jb:null,Nh:null,AeJ:null,AeO:null,AeN:null,AeK:
null,AeM:null,AeL:null,Nj:null,N2:null,MC:null,Dg:function(E){C.YB.Dg.call(this,
E);this.IR.L(E);this.AeP.L(E);this.Jb.L(E);this.Nh.L(E);this.MC.L(E);this.AeJ.L(
E);this.Nj.L(E);this.N2.L(E);this.AeO.L(E);this.AeN.L(E);this.AeK.L(E);this.AeM.
L(E);this.AeL.L(E);},DX:function(G){C.YB.DX.call(this,G);this.XU(8,1,this.Nh);this.
XU(12,1,this.MC);this.XU(11,1,this.AeJ);this.XU(7,1,this.Nj);this.XU(14,1,this.N2
);this.XU(1,4,this.IR);this.XU(1,1,this.AeP);this.XU(4,1,this.Jb);this.XU(22,1,this.
AeO);this.XU(26,1,this.AeN);this.XU(30,1,this.AeK);this.XU(19,1,this.AeM);this.XU(
31,1,this.AeL);this.Text.Z(!this.Y.TX(null,0x1));},XU:function(AJD,Eb,AfY){var ABt=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adm=A._GetAutoObject(
A.Device.Device).An.Filter.DM(AJD,Eb);if(!!Adm){ABt=true;switch(AJD){case 14:{var
AzI=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adm)?Adm:null);if(!!AzI)AfY.
Ax(A._GetAutoObject(A.Device.Converter).A5E(AzI.A5));}break;case 7:{var AzI=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adm)?Adm:null);if(!!AzI)AfY.Ax(A._GetAutoObject(
A.Device.Converter).Am0(AzI.A5));}break;case 1:if(Eb===4)AfY.Ax(A.aaL(A.ach.AD1)
);else if(Adm.Operator===4)ABt=false;break;case 22:switch(Adm.Operator){case 0:case
3:AfY.Ax(A.aaL(A.ach.AQU));break;default:AfY.Ax(A.aaL(A.ach.AjZ));}break;case 26:
switch(Adm.Operator){case 0:case 3:AfY.Ax(A.aaL(A.ach.AQS));break;default:AfY.Ax(
A.aaL(A.ach.AvI));}break;default:;}}else if((AJD===1)&&(Eb===4)){ABt=true;AfY.Ax(
A.aaL(A.ach.AeF));}}else if((AJD===1)&&(Eb===4)){ABt=true;AfY.Ax(A.aaL(A.ach.AeF
));}AfY.Z(ABt);},_Init:function(aArg){C.YB._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(
this.AeP={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);A.acg.Ap._Init.call(
this.Nh={I:this},0);A.acg.Ap._Init.call(this.AeJ={I:this},0);A.acg.Ap._Init.call(
this.AeO={I:this},0);A.acg.Ap._Init.call(this.AeN={I:this},0);A.acg.Ap._Init.call(
this.AeK={I:this},0);A.acg.Ap._Init.call(this.AeM={I:this},0);A.acg.Ap._Init.call(
this.AeL={I:this},0);A.acg.Ap._Init.call(this.Nj={I:this},0);A.acg.Ap._Init.call(
this.N2={I:this},0);A.acg.Ap._Init.call(this.MC={I:this},0);this.__proto__=C.AjT;
this.Y.A1(0x3F);this.Y.H(AWK);this.Y.JZ(3);this.IR.H(Ayq);this.AeP.H(AWL);this.AeP.
Aj(true);this.Jb.H(Atd);this.Jb.Aj(true);this.Nh.H(Ayr);this.Nh.Aj(true);this.AeJ.
H(AWM);this.AeJ.Aj(true);this.AeO.H(AHR);this.AeO.Aj(true);this.AeN.H(AHR);this.
AeN.Aj(true);this.AeK.H(AWN);this.AeK.Aj(true);this.AeM.H(AHS);this.AeM.Aj(true);
this.AeL.H(AHS);this.AeL.Aj(true);this.Nj.H(AHT);this.Nj.Aj(true);this.N2.H(AHU);
this.N2.Aj(true);this.Text.R(A.aaR(A.acf.None));this.MC.H(AHT);this.MC.Aj(true);
this.J5(this.Gw,-3);this.J5(this.D2,-3);this.J5(this.A$,-3);this.J5(this.AP,-2);
this.J(this.Y,-2);this.J(this.IR,-2);this.J(this.AeP,-2);this.J(this.Jb,-2);this.
J(this.Nh,-2);this.J(this.AeJ,-2);this.J(this.AeO,-2);this.J(this.AeN,-2);this.J(
this.AeK,-2);this.J(this.AeM,-2);this.J(this.AeL,-2);this.J(this.Nj,-2);this.J(this.
N2,-2);this.J(this.MC,0);this.IR.Ax(A.aaL(A.ach.AeF));this.AeP.Ax(A.aaL(A.ach.AQH
));this.Jb.Ax(A.aaL(A.ach.AP5));this.Nh.Ax(A.aaL(A.ach.ADW));this.AeJ.Ax(A.aaL(A.
ach.Ag9));this.AeO.Ax(A.aaL(A.ach.AjZ));this.AeN.Ax(A.aaL(A.ach.AvI));this.AeK.Ax(
A.aaL(A.ach.AQE));this.AeM.Ax(A.aaL(A.ach.AQF));this.AeL.Ax(A.aaL(A.ach.AQD));this.
Nj.Ax(A.aaL(A.ach.ADY));this.N2.Ax(A.aaL(A.ach.AvM));this.MC.Ax(A.aaL(A.ach.AD4)
);},_Done:function(){this.__proto__=C.YB;this.Y._Done();this.IR._Done();this.AeP.
_Done();this.Jb._Done();this.Nh._Done();this.AeJ._Done();this.AeO._Done();this.AeN.
_Done();this.AeK._Done();this.AeM._Done();this.AeL._Done();this.Nj._Done();this.
N2._Done();this.MC._Done();C.YB._Done.call(this);},_ReInit:function(){C.YB._ReInit.
call(this);this.Y._ReInit();this.IR._ReInit();this.AeP._ReInit();this.Jb._ReInit(
);this.Nh._ReInit();this.AeJ._ReInit();this.AeO._ReInit();this.AeN._ReInit();this.
AeK._ReInit();this.AeM._ReInit();this.AeL._ReInit();this.Nj._ReInit();this.N2._ReInit(
);this.MC._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.YB.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.AmA={Ia:null,CC:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);this.Ia.Gs();this.Ia.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Rh.CC.call(this,G);},Aob:function(){C.Rh.
Aob.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).BAb(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.C_.L(A._GetAutoObject(
A.acj.Temperature).BAe(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lz));this.JT.L(A._GetAutoObject(A.acj.Temperature).BAc(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.HH.L(A.
_GetAutoObject(A.acj.Temperature).BAd(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lz));this.MO.L(this.JT.AQ);this.TemperatureUnit.
L(this.JT.AQ);}break;default:;}},Z9:function(){C.Rh.Z9.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Ct(A.aaL(A.ach.AQ5));this.N.C4(A.aaL(
A.ach.Am8));}break;case 4:{this.N.Ct(null);this.N.C4(A.aaL(A.ach.AvU));}break;default:;
}},W2:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Lz>3240)&&(A._GetAutoObject(A.Device.
Device).Lz<5460)){A._GetAutoObject(A.Device.Device).AhQ();A._GetAutoObject(A.Device.
Device).UpdateMeasureState(3);}break;case 3:{this.Ia.OnSetTemperature(A._GetAutoObject(
A.Device.Device).Lz);var B2=A._GetAutoObject(A.Device.Converter).AsR(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz);this.Ia.OnSetRatingTemperature(
B2);this.Ia.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A7).FB();
}break;case 4:this.AKT(this);break;default:;}},AkZ:function(G){C.Rh.AkZ.call(this
,G);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:A._GetAutoObject(
A.Device.Device).Dw(9);break;case 4:this.AKT(this);break;default:;}},Ax5:function(
){C.Rh.Ax5.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:this.JT.R(A._GetAutoObject(A.acj.Temperature).BAj(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));break;default:;}},Ax6:function(
){C.Rh.Ax6.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WQ(A._GetAutoObject(A.acj.Temperature).BAf(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lz));this.Jk.As(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WQ(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AU4:function(){this.C_.Ax(
A.aaL(A.ach.AvT));this.C_.Cw(A._GetAutoObject(A.acj.Temperature).BAk(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.N0.Cw(
0);},_Init:function(aArg){C.Rh._Init.call(this,aArg);this.__proto__=C.AmA;this.Dr(
C.IP);this.Ia=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Rh._Mark.
call(this,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.AhD={N$:null,DL:null,Ip:null,Bc:null,AuH:null,String:A.jV,AxT:A.jV,MF:7,Akc:
2,KY:0,AVf:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DL.H([0,0,aSize[0]-this.Akc,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DL.
S(A.aaL(A.fl.Bh));else this.DL.S(A.aaL(A.fl.Ak));this.Ip.S(this.DL.B7);this.Ip.H(
this.DL.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WU],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DL.R(E);},Ahy:function(
E){if(this.AxT===E)return;this.AxT=E;this.Ip.R(E);},Acb:function(E){this.MF=E;if(
E<10)this.ATA(2);else if(E<40)this.ATA(1);else this.ATA(0);A.pe([this,this.WU],this
);},WU:function(G){var B;while(!!this.Bc.Ah)this.HR(this.Bc.Ah);if(this.MF>1){var
Adh=this.AO2();var A2E=this.AO0();var Apx=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AAl;var ALh;var Aug;var Amf=null;if(!!this.N$&&(this.N$.AZ>0))Amf=this.N$.K6;
while((Adh>=A2E)&&(Adh>0)){var AtT=A._NewObject(C.Ajx,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Akc)*(((Adh-A2E)/86400)|0))/this.MF)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Akc)*((((Adh-A2E)/86400)|0)+1))/this.MF)|0;while(!!Amf&&(Amf.Timestamp>=
Adh)){if(Amf.Timestamp<(Adh+86400))AtT.OA(Amf.A5,Amf.Timestamp);Amf=Amf.Ah;}var Aus=
0;if(AtT.AZ>0)Aus=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtT.AZ
)|0;else if(this.MF<10){Aus=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
Aug=A._NewObject(A.acg.Text,0);Aug.H([x1,Apx,x2,Apx+Aus]);Aug.S(A.aaL(A.fl.Bh));
Aug.L(A.jb.Text);Aug.R(A.aaR(A.acf.Aff));this.J(Aug,0);}var AJ6=AtT.K6;var O=0;while(
!!AJ6){if(O>=AtT.AZ)throw new Error(AWO);AAl=A._NewObject(A.acg.AL,0);AAl.L(A._GetAutoObject(
A.acj.Assessment).Qv(AJ6.A5));if(O===(AtT.AZ-1))AAl.H([x1,Apx+(O*Aus),x2,this.Bc.
M[1]]);else AAl.H([x1,Apx+(O*Aus),x2,Apx+((O+1)*Aus)]);this.J(AAl,0);AJ6=AJ6.Ah;
O=O+1;}if(this.AVf){var By1=A._GetAutoObject(A.Device.Helper).Aqy(A._GetAutoObject(
A.Device.Helper).Dv());var By0=A._GetAutoObject(A.Device.Helper).Aqy(Adh);if(By1===
By0){var ALL=A._NewObject(A.acg.Aes,0);ALL.L(A.jb.Text);var BeG=(x1+this.Akc)+(((
x2-x1)/2)|0);ALL.H([BeG-4,this.Bc.M[1]-4,BeG+4,this.Bc.M[1]]);ALL.ZD(this.AuH);this.
J(ALL,0);}}Adh=Adh-86400;if(this.Akc>0){ALh=A._NewObject(A.acg.AL,0);ALh.H([x1,Apx
,x1+this.Akc,Apx+((((B=this.M)[3]-B[1])/2)|0)]);ALh.L(A.jb.Bc);this.J(ALh,0);}}}
},Acd:function(E){this.N$=E;A.pe([this,this.WU],this);},ATA:function(E){if(this.
Akc===E)return;this.Akc=E;A.pe([this,this.WU],this);},Dg:function(E){if(this.KY===
E)return;this.KY=E;this.DL.L(E);this.Ip.L(E);},AO0:function(){var B;return this.
AO2()-(((((B=this.MF)<0)?B+0x100000000:B)-1)*86400);},AO2:function(){return A._GetAutoObject(
A.Device.Converter).AhU();},Boc:function(E){if(this.AVf===E)return;this.AVf=E;A.
pe([this,this.WU],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DL={I:this},0);A.acg.Text._Init.call(this.Ip={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.Ax3._Init.call(this.AuH={I:this},0);
this.__proto__=C.AhD;this.H(BD);this.As(false);this.DL.H(AHV);this.DL.Ho(5);this.
DL.A6(0x11);this.DL.L(A.jb.Text);this.Ip.H(AHV);this.Ip.Ho(5);this.Ip.A6(0x14);this.
Ip.L(A.jb.Text);this.Bc.H(AWP);this.Bc.L(A.jb.Bc);this.KY=A.jb.Text;this.AuH.H(AWQ
);this.J(this.DL,0);this.J(this.Ip,0);this.J(this.Bc,0);this.DL.S(A.aaL(A.fl.Ak)
);this.Ip.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.P;this.DL._Done();this.Ip._Done();this.Bc._Done();this.AuH._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.DL._ReInit(
);this.Ip._ReInit();this.Bc._ReInit();this.AuH._ReInit();this.DL.S(A.aaL(A.fl.Ak
));this.Ip.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P._Mark.call(this,
D);if((B=this.N$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AuH)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A5K={Ah:null,Timestamp:0,A5:0,_Init:function(
aArg){this.__proto__=C.A5K;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ah)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ajx={K6:null,M3:null,AZ:0,OA:
function(A8,Qm){var Hi;Hi=A._NewObject(C.A5K,0);Hi.A5=A8;Hi.Timestamp=Qm;if(!this.
K6){this.K6=Hi;this.M3=Hi;this.AZ=1;}else{this.M3.Ah=Hi;this.M3=Hi;this.AZ=this.
AZ+1;}},_Init:function(aArg){this.__proto__=C.Ajx;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ej={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MS],this);},DF:function(G){var B;var Fi=0;var X=this.AV;switch(
this.Cq.CP){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;
default:;}X=this.QM(X,Fi,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HK(X,true,null,null);this.DK(this);},Al8:function(G){A._GetAutoObject(C.A7
).FB();},ApS:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null).Agz)A.
pe((C.Co.isPrototypeOf(B=this.AV)?B:null).Agz,this);},Fk:function(G){var B;this.
Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.
Y.Br[1]);},DK:function(G){var B;var G1=(C.Co.isPrototypeOf(B=this.AV)?B:null);if(
!!G1){this.N.Hz(A.jV);this.N.CS(G1.AxW);this.N.Jj.CZ(255);this.N.GY.CZ(G1.Axs);this.
N.AFu(G1.Avw);this.N.AnF(G1.AmZ);this.N.C3(G1.AQy);this.N.C4(G1.Arf);G1.A3J(this
);}},MS:function(s){this.DK(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ej;this.Background.H(Rs);this.Background.L(A.jb.CU);this.N.H(U6);this.
N.As(false);this.N.Z(true);this.Y.H(Ff);this.Y.JZ(1);this.Ay.H(Ix);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AUk={NL:null,ATf:null,Ad7:null,VP:null,GX:null,PopupTimeout:null,Aci:null,AgK:
null,PopupIdToString:null,AtO:null,Text:A.jV,AkK:A.jV,AKo:A.jV,Ak6:0,ALv:-1,AzH:-
1,AK0:0,AUm:0,A2O:false,CQ:function(){this.A_8(this.PopupIdToString.BT(this.AUm)
);},Init:function(aArg){this.BpG(this);},Bhs:function(G){var B;if(this.Ak6>0){this.
A$k((this.Ak6/1000)|0);this.PopupTimeout.WO(0);this.PopupTimeout.P0(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxS(this);},Bho:function(G){var M7=this.
Text;var Af1=this.AkK;var AKY=A.abi(16,A.jV,null);var index=0;var AzC=0;while(Af1
!==A.jV){AzC=Af1.indexOf(A.Device.PopupParamSeparator,0);if(AzC!==-1){AKY.Set(index
,A.ab1(Af1,AzC,(Af1.length-AzC)+1));Af1=A.ab1(Af1,0,AzC+1);index=index+1;if(index>=
16){A.ab5("%s",(AWR+Af1)+AWS);Af1=A.jV;}}else{AKY.Set(index,Af1);Af1=A.jV;}}index=
0;while(index<M7.length){if((M7.charCodeAt(index)||0)===0x7B){var Beg=M7.indexOf(
String.fromCharCode(0x7D),index);if(Beg===-1){A.ab5("%s",(((AWT+M7)+AWU)+index.toFixed(
))+Ale);index=M7.length;}else{var Bf_=(Beg-index)-1;var A4j=A.abW(M7,index+1,Bf_
);var AKX=A.wz(A4j,-1,10);M7=A.ab1(M7,index,Bf_+2);if(A4j===AWV)this.Bou(index);
else if(((AKX>0)&&(AKX<=16))&&(this.AkK!==A.jV)){M7=A.abU(M7,AKY.Get(AKX-1),index
);if(this.A2O===true)this.Bot(A.wz(AKY.Get(AKX-1),0,10));}else A.ab5("%s",(AWW+A4j
)+AWX);}}index=index+1;}this.Bos(M7);},CC:function(G){A.pe([this,this.Bhs],this);
},Ai:function(Ae){var B;this.Ad7.H(A.aaT(this.GX.Dd(),Ah1));this.VP.H(A.aaT(this.
GX.Dd(),Ah1));if(!!this.NL){this.NL.H(A.abM(this.NL.M,this.GX.M[0]));this.NL.H(A.
abO(this.NL.M,this.GX.M[3]+10));this.NL.H(A.abL(this.NL.M,(B=this.GX.M)[2]-B[0])
);this.NL.H(A.abI(this.NL.M,8));this.Ad7.H(A.abh(A.aaT(this.GX.Dd(),Ah1),AHW));this.
VP.H(A.abh(A.aaT(this.GX.Dd(),Ah1),AHW));}else{this.Ad7.H(A.aaT(this.GX.Dd(),Ah1
));this.VP.H(A.aaT(this.GX.Dd(),Ah1));}},DF:function(G){var JH=(A.Core.BF.isPrototypeOf(
G)?G:null);if((JH.CP===4)&&((this.VP.M[1]+this.M[1])<this.M[1])){this.GX.H(A.abO(
this.GX.M,this.GX.M[1]+28));this.Am();}else if((JH.CP===5)&&((this.VP.M[3]+this.
M[1])>this.N.M[1])){this.GX.H(A.abO(this.GX.M,this.GX.M[1]-28));this.Am();}if((JH.
CP===6)&&!!this.D_().CE)this.D_().AFD(1);else if((JH.CP===7)&&!!this.D_().Ca)this.
D_().AFD(3);},H1:function(G){switch(this.D_().Aho){case 1:this.Al8(this);break;case
3:this.ApS(this);break;case 2:this.AAU(this);break;case 0:break;default:A.ab5("%s%e"
,AWY,this.D_().Aho);}},Al8:function(G){var B;(B=this.D_().CE)?B[1].call(B[0],this
):null;},ApS:function(G){var B;(B=this.D_().Ca)?B[1].call(B[0],this):null;},AAU:
function(G){var B;(B=this.D_().Ce)?B[1].call(B[0],this):null;},LU:function(G){this.
N.IS.L((this.N.IS.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
AxS(this);},A_8:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bho],this);},BBq:function(G){var B;this.A$k(this.AzH-1);if(this.AzH<=0){this.PopupTimeout.
AxS(this);(B=this.ATf)?B[1].call(B[0],this):null;}},A__:function(E){if(this.Ak6===
E)return;this.Ak6=E;A.pe([this,this.Bhs],this);},A_V:function(E){if(this.AkK===E
)return;this.AkK=E;A.pe([this,this.Bho],this);},Bos:function(E){if(this.AKo===E)
return;this.AKo=E;this.ABM(this);this.By8(this);},ABM:function(G){if((this.AzH!==-
1)&&(this.ALv!==-1)){var BzX=this.AtO.Format(AWZ);this.GX.R(A.abU(this.AKo,BzX,this.
ALv));}else this.GX.R(this.AKo);this.GX.H(AHX);},Bou:function(E){if(this.ALv===E
)return;this.ALv=E;this.ABM(this);},A$k:function(E){if(this.AzH===E)return;this.
AzH=E;this.AtO.AF8(E);A.pe([this,this.ABM],this);},By8:function(G){this.GX.Dd();
if(this.GX.M[1]<=this.M[1])this.GX.H(A.abO(this.GX.M,28));this.Am();},A$m:function(
E){if(this.A2O===E)return;this.A2O=E;if(E===true)A.pe([this,this.BB2],this);},BB2:
function(G){if(!this.NL){this.NL=A._NewObject(A.acs.ADM,0);this.NL.Gb(0);this.NL.
EV(100);this.NL.OnSetAppearance(this.Aci);this.J(this.NL,0);this.AhG(this.NL,this.
GX);}this.NL.Bx(this.AK0);},Bot:function(E){if(this.AK0===E)return;this.AK0=E;if(
!!this.NL)this.NL.Bx(this.AK0);},BpG:function(G){var B;this.N.CZ(0);this.AgK.An2(
this);},Bn3:function(E){if(this.AUm===E)return;this.AUm=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad7={I:this},0);A.acg.BW._Init.
call(this.VP={I:this},0);A.acg.Text._Init.call(this.GX={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acs.ADN._Init.call(this.Aci={I:this},
0);A.acl.Gn._Init.call(this.AgK={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtO={I:this},0);this.
__proto__=C.AUk;var B;this.H(Cf);this.Background.H(Ff);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ek.As(false);this.Ek.Z(false);this.Ad7.H(AHY);this.
Ad7.L(A.jb.CJ);this.VP.H(AHY);this.VP.Nu(2);this.VP.L(A.jb.Text);this.GX.H(AHX);
this.GX.Ho(10);this.GX.Je(true);this.GX.Boq(0);this.GX.KX(true);this.GX.L(A.jb.Text
);this.PopupTimeout.P0(0);this.Aci.A$d(0);this.Aci.A$b(A.jb.AV);this.Aci.A$a(0);
this.Aci.AGl(AHF);this.AgK.HQ(1);this.AgK.B3=255;this.AgK.Cx=0;this.J5(this.Ek,-
1);this.J(this.Ad7,0);this.J(this.VP,0);this.J(this.GX,0);this.GX.S(A.aaL(A.fl.Af
));this.PopupTimeout.MJ=[this,this.BBq];this.Aci.A$c(A.aaL(A.ach.N1));this.Aci.A_$(
A.aaL(A.ach.N1));this.AgK.Q=[B=this.N,B.Awt,B.A0O];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad7._Done();this.VP._Done();this.GX._Done();this.PopupTimeout.
_Done();this.Aci._Done();this.AgK._Done();this.PopupIdToString._Done();this.AtO.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad7._ReInit();this.VP._ReInit();this.GX._ReInit();this.PopupTimeout._ReInit();this.
Aci._ReInit();this.AgK._ReInit();this.PopupIdToString._ReInit();this.AtO._ReInit(
);this.GX.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATf)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aci).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtO)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.Mx={Ai:function(Ae
){C.Co.Ai.call(this,Ae);var FT=A.jb.CJ;var G0=A.jb.Text;if(this.Hm){FT=A.jb.Text;
G0=A.jb.Bm;}if(!this.LN){this.Background.L(FT);this.V.L(A.jb.Am9);}else if(this.
Qz){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(G0);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Mx;},_className:"Application::DarkThemeMenuItem"
};C.Ano={AdG:0,_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.
Ano;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaP:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Ls:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=[this,this.A3K];this.BQ.Ce=null;this.BQ.CE=[this,this.AaP];this.
BQ.CS(A.aaR(A.acf.Ok));this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.AeD));}return this.
BQ;},A3K:function(G){var B;if(!!(C.Co.isPrototypeOf(B=this.AV)?B:null))(C.Co.isPrototypeOf(
B=this.AV)?B:null).H1(this);},CC:function(G){},AI1:function(s){this.CC(s);},E4:function(
G){},AyX:function(s){this.E4(s);},_Init:function(aArg){C.Abr._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APZ={Wi:
null,YX:null,YR:null,Init:function(aArg){this.Bb(this.Wi);},Adx:function(G){var Aa=(
C.Co.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YX)A._GetAutoObject(A.Device.
Device).AY(6,true,A.jV,0,[this,this.BCe]);else if(Aa===this.Wi)A._GetAutoObject(
A.Device.Device).AY(9,true,A.jV,0,[this,this.BCz]);else if(Aa===this.YR)A._GetAutoObject(
C.A7).Cb(4);else throw new Error(Ays);A._GetAutoObject(A.Device.Device).Dw(0);},
BCe:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(
Ar.PopupState===7))A._GetAutoObject(A.Device.Device).AGI();},BCz:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))
A._GetAutoObject(A.Device.Device).AxJ();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Mx._Init.call(this.Wi={I:this},0);C.Mx._Init.call(this.YX={I:this
},0);C.Mx._Init.call(this.YR={I:this},0);this.__proto__=C.APZ;this.H(AcT);this.Wi.
H(BD);this.Wi.As(true);this.Wi.T(A.aaR(A.acf.A$2));this.Wi.Bi(true);this.YX.H(I1
);this.YX.As(true);this.YX.T(A.aaR(A.acf.A$J));this.YX.Bi(true);this.YR.H(Qg);this.
YR.As(true);this.YR.T(A.aaR(A.acf.SY));this.YR.Bi(true);this.J(this.Wi,0);this.J(
this.YX,0);this.J(this.YR,0);this.Wi.AR=[this,this.Adx];this.YX.AR=[this,this.Adx
];this.YR.AR=[this,this.Adx];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.Wi._Done();this.YX._Done();this.YR._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Wi._ReInit(
);this.YX._ReInit();this.YR._ReInit();this.Wi.T(A.aaR(A.acf.A$2));this.YX.T(A.aaR(
A.acf.A$J));this.YR.T(A.aaR(A.acf.SY));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Wi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GK={AaM:null,OverlayMenu:null,WX:null,A4E:null
,Lg:null,A4i:null,AkM:null,N9:null,AAr:100,Bdd:false,Init:function(aArg){var B;A.
zX([this,this.BfC],[B=A._GetAutoObject(A.Device.Device),B.Awu,B.Ay6],0);A.zX([this
,this.Bfw],[B=A._GetAutoObject(A.Device.Device),B.ASX,B.A0M],0);A.zX([this,this.
A3C],[B=A._GetAutoObject(A.Device.Device),B.Awi,B.AyZ],0);A.zX([this,this.BAX],[
B=A._GetAutoObject(A.Device.Device),B.Awf,B.AyY],0);A.zX([this,this.BAY],[B=A._GetAutoObject(
A.Device.Device),B.A84,B.BbG],0);A.zX([this,this.ApT],[B=A._GetAutoObject(A.Device.
Device),B.AS8,B.A0U],0);A.zX([this,this.BfS],[B=A._GetAutoObject(A.Device.Device
),B.Ut,B.Vb],0);A.pe([this,this.BfC],this);A.pe([this,this.Bfw],this);A.pe([this
,this.ApT],this);A.pe([this,this.BfS],this);this.A4E.Au([B=this.WX,B.AEQ,B.Zv]);
this.J(this.WX,0);this.Bb(this.WX);this.ByL(this);},Ai:function(Ae){},Bfw:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEC){if(!this.AaM){this.AaM=A._NewObject(
C.AsD,0);this.AaM.H(A.abJ(this.AaM.M,this.WX.M.slice(0,2)));this.AaM.H(A.abO(this.
AaM.M,this.WX.M[3]-((B=this.AaM.M)[3]-B[1])));this.J(this.AaM,1);}}else{if(!!this.
AaM)this.HR(this.AaM);this.AaM=null;}},BfC:function(G){switch(A._GetAutoObject(A.
Device.Device).OverlayMenu){case 0:this.Dw(null);break;case 1:this.Dw(A._NewObject(
C.APZ,0));break;case 8:this.Dw(A._NewObject(C.AMh,0));break;case 2:this.Dw(A._NewObject(
C.AMe,0));break;case 3:this.Dw(A._NewObject(C.AMl,0));break;case 4:this.Dw(A._NewObject(
C.AUE,0));break;case 5:this.Dw(A._NewObject(C.AWb,0));break;case 6:this.Dw(A._NewObject(
C.AUf,0));break;case 7:this.Dw(A._NewObject(C.AmC,0));break;case 11:this.Dw(A._NewObject(
C.AMP,0));break;case 12:this.Dw(A._NewObject(C.AMO,0));break;case 9:this.Dw(A._NewObject(
C.AR9,0));break;case 10:this.Dw(A._NewObject(C.AMK,0));break;case 14:this.Dw(A._NewObject(
C.AR5,0));break;case 15:this.Dw(A._NewObject(C.AR6,0));break;case 13:this.Dw(A._NewObject(
C.AR7,0));break;case 16:this.Dw(A._NewObject(C.AM_,0));break;default:throw new Error(
AW0+A._GetAutoObject(A.Device.Device).OverlayMenu.toFixed());}},Dw:function(E){var
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WS).ArP(
null);this.N9.AqO(this.OverlayMenu,A._GetAutoObject(C.AxM),null,null,[B=this.OverlayMenu
,B.AyX],null,true);this.Bb(this.WX);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N9.AkO(this.OverlayMenu,A._GetAutoObject(C.AxL),null,null,null,null,null,[B=this.
OverlayMenu,B.AI1],null,false);this.Bb(this.N9);A._GetAutoObject(C.WS).ArP(this.
OverlayMenu.Ls());}else if(!!this.Lg){this.Bb(this.N9);A._GetAutoObject(C.WS).ArP(
this.Lg.Aks().Ls());}},Aht:function(E){var B;if(this.Lg===E)return;if(!!this.Lg){
A._GetAutoObject(C.WS).ArP(null);this.N9.AqO(this.Lg.Aks(),A._GetAutoObject(C.Afl
),null,null,[B=this.Lg.Aks(),B.AyX],null,false);this.Bb(this.WX);}this.Lg=E;if(!
!this.Lg){this.N9.AkO(this.Lg.Aks(),A._GetAutoObject(C.Afl),null,null,null,null,
null,[this,this.Bmo],null,false);this.Bb(this.N9);A._GetAutoObject(C.WS).ArP(this.
Lg.Aks().Ls());}else if(!!this.OverlayMenu){this.Bb(this.N9);A._GetAutoObject(C.
WS).ArP(this.OverlayMenu.Ls());}},ByL:function(G){var B;var F;this.J(this.A4i,0);(
F=A._GetAutoObject(C.WS),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WS).M)[3]-B[1]))));this.ZL(this.N9);},A3C:function(G){if(A._GetAutoObject(A.Device.
Device).AmJ)switch(A._GetAutoObject(A.Device.Device).In){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A7).Acf(4);break;default:if(A._GetAutoObject(A.Device.
Device).Abc<98)A._GetAutoObject(C.A7).Cb(4);}else{this.AAr=100;this.Bdn();}},BAX:
function(G){this.Bdn();},Bdn:function(){if(!A._GetAutoObject(A.Device.Device).AmJ
){if(A._GetAutoObject(A.Device.Device).Abc<=2){if(this.AAr>2)switch(A._GetAutoObject(
A.Device.Device).In){case 38:break;case 4:case 39:A._GetAutoObject(C.A7).Acf(38);
break;default:A._GetAutoObject(C.A7).Cb(38);}}else if(A._GetAutoObject(A.Device.
Device).Abc<=10){if(this.AAr>10)switch(A._GetAutoObject(A.Device.Device).In){case
39:break;case 4:case 38:A._GetAutoObject(C.A7).Acf(39);break;default:A._GetAutoObject(
C.A7).Cb(39);}}else if(A._GetAutoObject(A.Device.Device).Abc<=20){if(this.AAr>20
)switch(A._GetAutoObject(A.Device.Device).In){case 39:break;case 4:case 38:A._GetAutoObject(
C.A7).Acf(39);break;default:A._GetAutoObject(C.A7).Cb(39);}}else switch(A._GetAutoObject(
A.Device.Device).In){case 38:case 4:case 39:A._GetAutoObject(C.A7).FB();break;default:;
}this.AAr=A._GetAutoObject(A.Device.Device).Abc;}},BAY:function(G){switch(A._GetAutoObject(
A.Device.Device).AqB){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).AY(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AnC(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).AY(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AnC(0
);}break;default:A.ab5("%s",AW1+A._GetAutoObject(A.Device.Device).AqB.toFixed());
}},ApT:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A7).Cb(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).In===5)A._GetAutoObject(C.A7).Acf(3);break;
default:;}},BfS:function(G){switch(A._GetAutoObject(A.Device.Device).P8.Z8){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).UA(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WQ(65535);A._GetAutoObject(A.Device.Device).UA(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WQ(255);A._GetAutoObject(A.Device.Device).UA(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WQ(16776960);A._GetAutoObject(
A.Device.Device).UA(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WQ(16711935
);A._GetAutoObject(A.Device.Device).UA(true);}break;default:A.ab5("%s",AW2+A._GetAutoObject(
A.Device.Device).P8.Z8.toFixed());}this.Bor(A._GetAutoObject(A.Device.Helper).ARA(
));},Bmo:function(G){var B;this.Lg.Aks().CC(this);this.Lg.BBo(this);},Bor:function(
E){if(this.Bdd===E)return;this.Bdd=E;if(E){if(A._GetAutoObject(A.Device.Device).
In===3)A._GetAutoObject(C.A7).Cb(27);else if(A._GetAutoObject(A.Device.Device).In
!==27)A._GetAutoObject(A.Device.Device).AY(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).In===27)A._GetAutoObject(A.Device.Device).AY(112,true,A.jV,0,[this
,this.A1A]);},A1A:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!Ar&&(Ar.Id===112))&&(Ar.PopupState===7))A._GetAutoObject(C.A7).Acf(85);}
,Blq:function(){return this.Lg;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkM._Init.call(this.AkM={I:this},0);C.N9._Init.call(this.N9={I:this},0);this.
__proto__=C.GK;this.H(Cf);this.N9.H(Rs);this.J(this.N9,0);this.WX=A._NewObject(C.
WX,0);this.A4E=A._GetAutoObject(C.A7);this.AkM.ANQ=[this,this.Blq,this.Aht];this.
A4i=A._GetAutoObject(C.WS);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkM._Done();this.N9._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkM._ReInit();this.N9._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WX)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4E)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Lg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A4i)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abr={A$x:
null,BQ:null,N:null,Cq:null,Anf:null,Anh:null,QW:null,Ang:null,And:null,Anj:null
,Ane:null,DF:function(G){var Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;break;
case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QM(X,Fi,0x14
);if(!!X)this.Bb(X);},Bce:function(s){this.DF(s);},Al8:function(G){var D5=(A.Core.
BF.isPrototypeOf(G)?G:null);if(D5.Acp&&(this.D_().Asx===false))return;A.pe(this.
D_().CE,this);},AJc:function(s){this.Al8(s);},ApS:function(G){var D5=(A.Core.BF.
isPrototypeOf(G)?G:null);if(D5.Acp&&(this.D_().ZK===false))return;A.pe(this.D_().
Ca,this);},AJe:function(s){this.ApS(s);},H1:function(G){if(this.QW.Acp)return;},
Alp:function(s){this.H1(s);},AAU:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?
G:null);if(D5.Acp&&(this.D_().WV===false))return;A.pe(this.D_().Ce,this);},AJd:function(
s){this.AAU(s);},D_:function(){if(!!this.Ls())return this.BQ;else return this.N;
},Ls:function(){return this.BQ;},GU:function(E){this.A$x=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BF._Init.
call(this.Cq={I:this},0);A.Core.BF._Init.call(this.Anf={I:this},0);A.Core.BF._Init.
call(this.Anh={I:this},0);A.Core.BF._Init.call(this.QW={I:this},0);A.Core.BF._Init.
call(this.Ang={I:this},0);A.Core.BF._Init.call(this.And={I:this},0);A.Core.BF._Init.
call(this.Anj={I:this},0);A.Core.BF._Init.call(this.Ane={I:this},0);this.__proto__=
C.Abr;this.H([0,0,C.AsG[0],C.AsG[1]]);this.N.H(U6);this.N.As(false);this.N.Z(false
);this.Cq.Filter=147;this.Anf.Filter=26;this.Anh.Filter=28;this.QW.Filter=1;this.
Ang.Filter=27;this.And.Filter=44;this.Anj.Filter=9;this.Ane.Filter=42;this.J(this.
N,0);this.Cq.BG=[this,this.Bce];this.Cq.D1=[this,this.Bce];this.Anf.BG=[this,this.
AJc];this.Anf.D1=[this,this.AJc];this.Anh.BG=[this,this.AJe];this.Anh.D1=[this,this.
AJe];this.QW.BG=[this,this.Alp];this.QW.D1=[this,this.Alp];this.Ang.BG=[this,this.
AJd];this.Ang.D1=[this,this.AJd];this.And.BG=[this,this.AJc];this.And.D1=[this,this.
AJc];this.Anj.BG=[this,this.AJe];this.Anj.D1=[this,this.AJe];this.Ane.BG=[this,this.
AJd];this.Ane.D1=[this,this.AJd];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cq._Done();this.Anf._Done();this.Anh._Done();this.QW._Done();this.
Ang._Done();this.And._Done();this.Anj._Done();this.Ane._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cq.
_ReInit();this.Anf._ReInit();this.Anh._ReInit();this.QW._ReInit();this.Ang._ReInit(
);this.And._ReInit();this.Anj._ReInit();this.Ane._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A$x)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anf)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Anh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ang)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.And)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ane)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxL={_Init:function(){A.acl.AG5._Init.call(this,0);this.Kn=0x22;this.Ad$=true;
this.Au$=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxM={_Init:function(){A.acl.AG5._Init.call(this,0);this.Kn=0x22;this.Ad$=true;
this.Au$=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AVd={Si:function(){var B;var Ao=(A.acl.Afd.isPrototypeOf(B=A.acl.Aep.Si.call(this
))?B:null);if(!Ao)throw new Error(Ate);Ao.Cp.Cx=100;return Ao;},Sh:function(){var
B;var Ao=(A.acl.Axt.isPrototypeOf(B=A.acl.Aep.Sh.call(this))?B:null);if(!Ao)throw new
Error(Ate);Ao.E0.B3=100;return Ao;},_Init:function(aArg){A.acl.Aep._Init.call(this
,aArg);this.__proto__=C.AVd;},_className:"Application::ShadeTransition"};C.Am5={
Aha:null,S3:null,HT:null,DS:null,AnimalId:-1,GroupId:-1,ADt:true,Dg:function(E){
C.BR.Dg.call(this,E);this.S3.L(E);this.HT.L(E);this.Aha.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HT.R(A.aaR(A.acf.Aff)
);else this.HT.R(E.toFixed());},Ab$:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.S3.R(A.aaR(A.acf.Aff));else this.S3.R(E.toFixed());},DX:function(
G){},Nz:function(s){this.DX(s);},A_C:function(E){if(this.ADt===E)return;this.ADt=
E;this.S3.Z(this.ADt);this.Aha.Z(this.ADt);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Aha={I:this},0);A.acg.Text._Init.call(this.S3={
I:this},0);A.acg.Text._Init.call(this.HT={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.Am5;this.Aha.H(AW3);this.S3.H(AW4);this.S3.A6(0x11);this.
S3.R(A.aaR(A.acf.Aff));this.HT.H(AW5);this.HT.A6(0x11);this.HT.R(A.aaR(A.acf.Aff
));this.DS.H(AW6);this.J(this.Aha,0);this.J(this.S3,0);this.J(this.HT,0);this.J(
this.DS,0);this.Aha.Ax(A.aaL(A.ach.AQN));this.S3.S(A.aaL(A.fl.Af));this.HT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.Aha._Done();this.S3._Done(
);this.HT._Done();this.DS._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.Aha._ReInit();this.S3._ReInit();this.HT._ReInit();this.DS.
_ReInit();this.S3.R(A.aaR(A.acf.Aff));this.HT.R(A.aaR(A.acf.Aff));this.S3.S(A.aaL(
A.fl.Af));this.HT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.Aha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADD={Init:function(
aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.ArL,B.SP
],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9m,B.AnJ],0);
A.zV([this,this.Nz],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nz],[
B=A._GetAutoObject(A.Device.Helper).W,B.PY,B.EC],0);A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Helper).W,B.A90,B.Axp],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9d,B.Ae5],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9e,B.Uy],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.
A9h,B.Ae9],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9l,B.
Ae$],0);A.pe([this,this.Nz],this);},Dg:function(E){C.Am5.Dg.call(this,E);this.DS.
Dg(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq7()){this.Ab$(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab$(-1);this.OnSetAnimalId(-1);}this.DS.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AFo(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae5(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uy(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae9(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae$(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Am5._Init.call(this,aArg);this.
__proto__=C.ADD;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.Kq={AhR:A.abi(3,A.jV,null),BI:A.abi(3,0,{0:7,1:30,2:90}),Ans:3,Du:function(){
if(this.Ans<3)return this.Ans;else return 3;},C7:function(aIndex){if((aIndex>=3)||(
aIndex>=this.Ans))return-1;return this.BI.Get(aIndex);},Gm:function(aIndex){if((
aIndex>=3)||(aIndex>=this.Ans))return AW7;return this.AhR.Get(aIndex);},DZ:function(
A8){var O=0;while((O<3)&&(O<=this.Ans)){if(this.BI.Get(O)===A8)return O;O=O+1;}return-
1;},H8:function(){var O=0;var max=-1;while((O<3)&&(O<=this.Ans)){if(this.BI.Get(
O)>max)max=this.BI.Get(O);O=O+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.AhR=[]).__proto__=C.Kq.AhR;(this.BI=[]).__proto__=C.Kq.BI;this.
__proto__=C.Kq;this.AhR.Set(0,A.aaR(A.acf.A70));this.AhR.Set(1,A.aaR(A.acf.A7Y));
this.AhR.Set(2,A.aaR(A.acf.A7Z));},_ReInit:function(){C.AC._ReInit.call(this);this.
AhR.Set(0,A.aaR(A.acf.A70));this.AhR.Set(1,A.aaR(A.acf.A7Y));this.AhR.Set(2,A.aaR(
A.acf.A7Z));},_className:"Application::Days"};C.AVa={AmE:null,BU:null,Q$:null,QK:
null,Baq:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BBK],[B=A._GetAutoObject(A.Device.Device),B.ArJ,B.Atv],0);},Bl:function(
aSize){},Ai:function(Ae){var B;var F;C.Ds.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;this.BU.L(A.jb.Bm);if(!!this.Q)this.BU.R(((AW8+A._GetAutoObject(
A.Device.Converter).Ak4((F=this.Q,F[1].call(F[0]))))+CR)+A._GetAutoObject(A.acj.
Temperature).AlR());this.H9.Z((this.AM<A._GetAutoObject(A.Device.Helper).A7k())&&(
Fw||GE));},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},Ki:function(G){var F;var BP=this.AM;C.Ds.Ki.call(this,G);if(this.AM<A._GetAutoObject(
A.Device.Helper).A7k()){this.Bx(this.AM+10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}},Kd:function(G){var F;var BP=this.
AM;C.Ds.Kd.call(this,G);this.Bx(this.AM-10);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},A$f:function(E){if(this.Baq===E)return;
this.Baq=E;this.Am();},BBK:function(G){this.Am();},_Init:function(aArg){C.Ds._Init.
call(this,aArg);A.acg.AL._Init.call(this.AmE={I:this},0);C.CG._Init.call(this.BU={
I:this},0);A.acg.AL._Init.call(this.Q$={I:this},0);A.acg.Ap._Init.call(this.QK={
I:this},0);this.__proto__=C.AVa;this.H(U4);this.Background.H(U4);this.V.H(Atf);this.
V.L(A.jb.Bm);this.AmE.H(AW9);this.AmE.L(A.jb.Afy);this.Hy.H(AW_);this.BU.H(AW$);
this.BU.A6(0x12);this.BU.L(A.jb.Text);this.H9.H(AXa);this.Q$.H(AXb);this.Q$.L(A.
jb.E1);this.QK.H(AXc);this.J(this.AmE,-2);this.J(this.BU,-1);this.J(this.Q$,0);this.
J(this.QK,0);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.BU.S(A.aaL(
A.fl.EK));this.BU.A0(A.aaL(A.fl.Af));this.QK.Ax(A.aaL(A.ach.ADT));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ds;this.AmE._Done();this.BU._Done();this.Q$.
_Done();this.QK._Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.
call(this);this.AmE._ReInit();this.BU._ReInit();this.Q$._ReInit();this.QK._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.BU.S(A.aaL(A.fl.EK));this.
BU.A0(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
AmE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QK)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnY={Q:null
,Ai6:null,Init:function(aArg){var B;A.zX([this,this.Bcb],[B=A._GetAutoObject(A.Device.
Device),B.AEQ,B.Bbz],0);A.pe([this,this.Bcb],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Acf:function(Alu){A._GetAutoObject(A.Device.Device).Zv(Alu
);},AKN:function(G){if(this.K&&this.K.AKN)return this.K.AKN.apply(this,arguments
);else return C.AnY.Bci.apply(this,arguments);},Bci:function(G){var F;if(!this.Q
){A.ab5("%s",AXd);return;}var By=null;if(this.Ai6.Contains(A._GetAutoObject(A.Device.
Device).In)){By=this.Ai6.A$v();while(!!By&&(By.Aoa!==A._GetAutoObject(A.Device.Device
).In))By=this.Ai6.A$v();}if(!By)By=this.BAi(A._GetAutoObject(A.Device.Device).In
);(F=this.Q,F[2].call(F[0],By));},Bcb:function(s){this.AKN(s);},BAi:function(Alu
){var By=null;switch(Alu){case 0:case 1:By=A._NewObject(C.AVj,0);break;case 2:By=
A._NewObject(C.X9,0);break;case 3:By=A._NewObject(C.AvH,0);break;case 53:By=A._NewObject(
C.AV0,0);break;case 77:By=A._NewObject(C.NewMenu,0);break;case 27:By=A._NewObject(
C.ASn,0);break;case 6:By=A._NewObject(C.ARY,0);break;case 16:By=A._NewObject(C.ANY
,0);break;case 22:By=A._NewObject(C.AVV,0);break;case 17:By=A._NewObject(C.AVA,0
);break;case 42:By=A._NewObject(C.ANV,0);break;case 87:By=A._NewObject(C.AUM,0);
break;case 88:By=A._NewObject(C.AUL,0);break;case 89:By=A._NewObject(C.AVQ,0);break;
case 95:By=A._NewObject(C.AVT,0);break;case 23:By=A._NewObject(C.AWi,0);break;case
18:By=A._NewObject(C.AN$,0);break;case 19:By=A._NewObject(C.AUN,0);break;case 37:
By=A._NewObject(C.ARn,0);break;case 76:By=A._NewObject(C.AUs,0);break;case 63:By=
A._NewObject(C.AN9,0);break;case 64:By=A._NewObject(C.AN_,0);break;case 82:By=A.
_NewObject(C.AN8,0);break;case 83:By=A._NewObject(C.AN6,0);break;case 92:By=A._NewObject(
C.AN4,0);break;case 93:By=A._NewObject(C.AN7,0);break;case 65:By=A._NewObject(C.
AN5,0);break;case 5:By=A._NewObject(C.AVt,0);break;case 4:By=A._NewObject(C.Aeb,
0);break;case 39:By=A._NewObject(C.ANv,0);break;case 38:By=A._NewObject(C.ANO,0);
break;case 28:By=A._NewObject(C.WF,0);break;case 7:By=A._NewObject(C.AqR,0);break;
case 81:By=A._NewObject(C.AOg,0);break;case 31:By=A._NewObject(C.ArC,0);break;case
78:By=A._NewObject(C.ASl,0);break;case 34:By=A._NewObject(C.AMc,0);break;case 35:
By=A._NewObject(C.ManualActionScanScreen,0);break;case 32:By=A._NewObject(C.SetTransponderScreen
,0);break;case 45:By=A._NewObject(C.SetSaveTransponderScreen,0);break;case 49:By=
A._NewObject(C.NewAnimalSetTransponderScreen,0);break;case 55:By=A._NewObject(C.
NewAnimalsSetTransponderScreen,0);break;case 79:By=A._NewObject(C.MotherScanScreen
,0);break;case 80:By=A._NewObject(C.SetSaveNaisIdScreen,0);break;case 8:By=A._NewObject(
C.GJ,0);break;case 9:By=A._NewObject(C.I_,0);break;case 24:By=A._NewObject(C.AMt
,0);break;case 10:By=A._NewObject(C.AmA,0);break;case 21:By=A._NewObject(C.AMx,0
);break;case 11:By=A._NewObject(C.AMw,0);break;case 29:By=A._NewObject(C.AuT,0);
break;case 48:By=A._NewObject(C.AMv,0);break;case 30:By=A._NewObject(C.AMu,0);break;
case 12:By=A._NewObject(C.AMs,0);break;case 40:By=A._NewObject(C.AMr,0);break;case
14:By=A._NewObject(C.ANM,0);break;case 13:By=A._NewObject(C.ANN,0);break;case 20:
By=A._NewObject(C.AV$,0);break;case 41:By=A._NewObject(C.AV_,0);break;case 43:By=
A._NewObject(C.AOT,0);break;case 44:By=A._NewObject(C.AOS,0);break;case 61:By=A.
_NewObject(C.AOf,0);break;case 62:By=A._NewObject(C.AOe,0);break;case 46:By=A._NewObject(
C.ASA,0);break;case 47:By=A._NewObject(C.ASz,0);break;case 85:By=A._NewObject(C.
AWo,0);break;case 86:By=A._NewObject(C.AWn,0);break;case 71:By=A._NewObject(C.ASv
,0);break;case 72:By=A._NewObject(C.ASu,0);break;case 74:By=A._NewObject(C.ANa,0
);break;case 90:By=A._NewObject(C.AUu,0);break;case 73:By=A._NewObject(C.AUO,0);
break;case 51:By=A._NewObject(C.AMg,0);break;case 52:By=A._NewObject(C.AMf,0);break;
case 15:By=A._NewObject(C.AUB,0);break;case 60:By=A._NewObject(C.AVz,0);break;case
69:By=A._NewObject(C.ARW,0);break;case 70:By=A._NewObject(C.ARV,0);break;case 26:
By=A._NewObject(C.ASo,0);break;case 54:By=A._NewObject(C.ASk,0);break;case 25:By=
A._NewObject(C.AOt,0);break;case 66:By=A._NewObject(C.AOu,0);break;case 59:By=A.
_NewObject(C.AOs,0);break;case 58:By=A._NewObject(C.AOv,0);break;case 56:By=A._NewObject(
C.AOw,0);break;case 57:By=A._NewObject(C.AqU,0);break;case 68:By=A._NewObject(C.
AOx,0);break;case 67:By=A._NewObject(C.AOq,0);break;case 84:By=A._NewObject(C.AMz
,0);break;case 33:By=A._NewObject(C.WeightListScreen,0);break;case 36:By=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 50:By=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 75:By=A._NewObject(C.AMM,0);break;case 91:By=A._NewObject(C.AVE,0
);break;case 94:By=A._NewObject(C.Aqm,0);break;default:throw new Error(AXe);}if(
!!By)By.Aoa=Alu;return By;},Cb:function(Alu){var F;if(!(F=this.Q,F[1].call(F[0])
))A.ab5("%s",AXf);else this.Ai6.BoU((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zv(Alu);},FB:function(){var Bgp=3;var Bgo=this.Ai6.BoK();if(!!Bgo
)Bgp=Bgo.Aoa;else A.ab5("%s",AXg);A._GetAutoObject(A.Device.Device).Zv(Bgp);},_Init:
function(aArg){C.A$R._Init.call(this.Ai6={I:this},0);this.__proto__=C.AnY;this.Init(
aArg);var J_=this._variants();if(J_){this.K={};J_._Init.call(this,aArg);}A.h7++;
},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=null;this.Ai6.
_Done();A.h7--;},_ReInit:function(){this.Ai6._ReInit();if(this.K)this.K._ReInit.
call(this);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ai6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.
aco.AnY._variants();},K:null,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A7={_Init:function(){C.AnY._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AGA={Ia:null,YD:null,Afh:null,AaS:null,MK:
null,AzN:1,RatingMode:0,RatedAttribute:0,CQ:function(){this.YD.R(this.BdV(this.RatedAttribute
));this.AKS(this);},Ai:function(Ae){this.MK.R(A._GetAutoObject(A.Device.Helper).
MN(A.aaR(A.acf.ASb),Pc,this.AzN.toFixed()));if(this.RatingMode===1)this.MK.Z(true
);else this.MK.Z(false);},CC:function(G){var B;C.AB.CC.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);this.Ia.Gs();this.Ia.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxE(this.
Ia,5);A.zX([this,this.AKS],[B=A._GetAutoObject(A.Device.Device),B.AS5,B.A0R],0);
A.zX([this,this.AKS],[B=A._GetAutoObject(A.Device.Helper).W,B.PY,B.EC],0);A.pe([
this,this.AKS],this);},AsO:function(G){var a=this.AKw(this.RatedAttribute);this.
BgF();this.AzN=this.AzN-1;this.Am();if(!a)this.ASi();else this.SO(a);},W2:function(
G){var a=this.Bd2(this.RatedAttribute);this.BgF();this.AzN=this.AzN+1;this.Am();
if(!a)this.A8m();else this.SO(a);},AKw:function(NB){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(NB){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHZ);},Bd2:function(NB){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(NB){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHZ);},SO:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.YD.R(this.BdV(E));this.
DK(E);this.Afh.AnO(this.Ia.BjA(E));if(!this.AKw(E)){if(this.ARw())this.N.Ct(A.aaL(
A.ach.AeG));else this.N.Ct(null);}else this.N.Ct(A.aaL(A.ach.AeD));},BdV:function(
NB){return this.AaS.BT(NB);},BAh:function(NB){if(!!NB){var a=this.AKw(NB);if(!a)
return A.jV;else return this.BdW(a);}else return A.jV;},BAg:function(NB){if(!!NB
){var a=this.Bd2(NB);if(!a)return A.jV;else return this.BdW(a);}else return A.jV;
},ASi:function(){},A8m:function(){},A7l:function(){return null;},BdW:function(NB
){return this.AaS.LA(NB);},BgF:function(){if(!!this.RatedAttribute)this.Ia.Bpu(this.
RatedAttribute,this.Afh.A5);},AKS:function(G){if(this.ARw())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SO(2);this.DK(this.RatedAttribute
);this.Am();},Ady:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkZ:function(G){var a=this.AKw(this.RatedAttribute);if(!a){if(this.ARw())this.
Ady(this);}else this.ASi();},DK:function(NB){this.N.Hz(this.BAh(NB));if(!!this.N.
An7){this.N.C3(null);this.N.OW(true);}else{this.N.C3(A.aaL(A.ach.AeD));this.N.OW(
false);}this.N.CS(this.BAg(NB));if(!!this.N.An9){this.N.C4(null);this.N.OX(true);
}else{this.N.C4(this.A7l());this.N.OX(false);}},ARw:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Ali,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.YD={
I:this},0);C.Rating._Init.call(this.Afh={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaS={I:this},0);A.acg.Text._Init.call(this.MK={I:this},0);this.__proto__=
C.AGA;this.Background.L(A.jb.CJ);this.N.Z(true);this.Dr(C.IP);this.YD.H(AXh);this.
YD.KX(true);this.YD.L(A.jb.Text);this.Afh.H(AXi);this.MK.H(AXj);this.MK.A6(0x14);
this.MK.R(A.aaR(A.acf.ASb));this.MK.L(A.jb.Text);this.J(this.YD,0);this.J(this.Afh
,0);this.J(this.MK,0);this.Bb(this.Afh);this.N.CE=[this,this.AsO];this.N.Ce=[this
,this.AkZ];this.N.Ca=[this,this.W2];this.YD.S(A.aaL(A.fl.Af));this.Afh.AR=[this,
this.W2];this.MK.S(A.aaL(A.fl.Af));this.Ia=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.YD._Done();this.Afh._Done();this.AaS._Done();
this.MK._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.YD._ReInit();this.Afh._ReInit();this.AaS._ReInit();this.MK._ReInit();this.
MK.R(A.aaR(A.acf.ASb));this.YD.S(A.aaL(A.fl.Af));this.MK.S(A.aaL(A.fl.Af));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ia)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.MK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.H3={Y:null,Gender:null,AnimalType:null,Breed:null,Jm:null,Pu:null,As4:null,B0:
null,Db:null,C$:null,CH:null,Go:null,Ay:null,KP:0,Init:function(aArg){A.zX([this
,this.Bcc],this.B0.Q,0);A.pe([this,this.Bcc],this);A.pe([this,this.ABr],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANJ(this.
Y);},DF:function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;
break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QM(
X,Fi,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HK(X,true,null
,null);this.ABr(this);},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},Ae0:function(E){
if(this.KP===E)return;this.KP=E;A.abo([this,this.Awg,this.Ae0],0);},ABr:function(
G){var B;var G1=(C.Co.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C3(
A.aaL(A.ach.E2));this.N.CE=[this,this.AJb];if(!!G1&&!!G1.Amw){this.N.E6(A.jV);this.
N.JE.CZ(255);this.N.ArY(G1.AqZ);this.N.Ct(G1.AvP);this.N.Ce=G1.Amw;}else{this.N.
E6(A.jV);this.N.Ct(null);this.N.Ce=null;}if(!!G1&&!!G1.Agz){this.N.CS(G1.AxW);this.
N.GY.CZ(G1.Axs);this.N.AnF(G1.AmZ);this.N.C4(G1.Arf);this.N.Ca=G1.Agz;}else this.
Auu();},Agk:function(G){A.ab5("%s",Ayt);},Ay9:function(s){this.Agk(s);},Ew:function(
G){A.ab5("%s",Ayt);},AJb:function(s){this.Ew(s);},Auu:function(){A.ab5("%s",Alj);
},AAM:function(G){A.ab5("%s",Ayt);},AcW:function(s){this.AAM(s);},JN:function(Ag
){this.Bb(Ag);this.Y.HK(Ag,true,null,null);this.Y.VG(null,null);},ApO:function(G
){var F;this.C$.Ahx(A._GetAutoObject(A.Device.Helper).Abz((F=this.B0.Q,F[1].call(
F[0]))));},Bcc:function(s){this.ApO(s);},Awg:function(){return this.KP;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UY._Init.call(this.Jm={I:this},
0);A.Device.Na._Init.call(this.Pu={I:this},0);A.Device.K3._Init.call(this.As4={I:
this},0);C.BX._Init.call(this.B0={I:this},0);C.BX._Init.call(this.Db={I:this},0);
C.AkX._Init.call(this.C$={I:this},0);C.AxH._Init.call(this.CH={I:this},0);C.AsJ.
_Init.call(this.Go={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.H3;var B;this.N.Z(true);this.Dr(C.IP);this.Y.H(Ff);this.Y.JZ(1);this.KP=A._GetAutoObject(
A.Device.Helper).Abz(this.AnimalType.Q);this.B0.H(Ah2);this.B0.Aj(true);this.B0.
T(A.aaR(A.acf.Afx));this.Db.H(Ayu);this.Db.Aj(true);this.Db.T(A.aaR(A.acf.Afs));
this.C$.H(Aos);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KP));this.C$.Gb(1000);this.
C$.EV(99000);this.C$.Ahx(A._GetAutoObject(A.Device.Helper).Abz(this.AnimalType.Q
));this.CH.H(Ah3);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Go.H(AXk);
this.Go.Aj(true);this.Go.T(A.aaR(A.acf.Jm));this.Ay.H(Ayv);this.J(this.Y,0);this.
J(this.B0,0);this.J(this.Db,0);this.J(this.C$,0);this.J(this.CH,0);this.J(this.Go
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.Gender.L6(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L6(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L6(A._GetAutoObject(A.Device.Helper).W);this.Jm.L6(A._GetAutoObject(A.Device.Helper
).W);this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CK(this.AnimalType);this.
Db.Au([B=this.Gender,B.B$,B.Cc]);this.Db.CK(this.Gender);this.C$.Au([this,this.Awg
,this.Ae0]);this.CH.Gt([this,this.D_,this.GU]);this.CH.L5([B=this.CH,B.FW]);this.
CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc]);this.CH.CK(this.Breed
);this.CH.AnE(this.Pu);this.Go.Gt([this,this.D_,this.GU]);this.Go.L5([B=this.Go,
B.FW]);this.Go.L8(A.aaL(A.ach.Edit));this.Go.Au([B=this.Jm,B.B$,B.Cc]);this.Go.CK(
this.Jm);this.Go.AnE(this.As4);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.Gender._Done();this.AnimalType._Done();this.Breed._Done(
);this.Jm._Done();this.Pu._Done();this.As4._Done();this.B0._Done();this.Db._Done(
);this.C$._Done();this.CH._Done();this.Go._Done();this.Ay._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Gender.
_ReInit();this.AnimalType._ReInit();this.Breed._ReInit();this.Jm._ReInit();this.
Pu._ReInit();this.As4._ReInit();this.B0._ReInit();this.Db._ReInit();this.C$._ReInit(
);this.CH._ReInit();this.Go._ReInit();this.Ay._ReInit();this.B0.T(A.aaR(A.acf.Afx
));this.Db.T(A.aaR(A.acf.Afs));this.C$.T(A.aaR(A.acf.KP));this.CH.T(A.aaR(A.acf.
Breed));this.Go.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.As4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
WF={Azn:false,LU:function(G){if(A._GetAutoObject(A.Device.Device).An.Lm())A._GetAutoObject(
A.Device.Device).AY(41,true,A._GetAutoObject(A.Device.Device).An.HM().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gs();A._GetAutoObject(A.Device.Helper
).Aqp(A._GetAutoObject(A.Device.Helper).W);},Auu:function(){this.N.CS(A.jV);this.
N.C4(A.aaL(A.ach.ADX));this.N.Ca=[this,this.Ay9];},CC:function(G){if(!this.Azn){
this.Azn=true;A.pe([this,this.AcW],this);}else C.ArC.CC.call(this,G);},AAM:function(
G){A._GetAutoObject(C.A7).Cb(49);},_Init:function(aArg){C.ArC._Init.call(this,aArg
);this.__proto__=C.WF;this.J5(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IP={_Init:function(aArg){C.ADD._Init.call(this,aArg);this.__proto__=C.IP;this.
A_C(false);},_className:"Application::HeaderSelectedAnimalId"};C.I_={Filter:null
,Gender:null,AnimalType:null,Transponder:null,El:null,Y:null,P_:null,Ta:null,Og:
null,Tb:null,Ny:null,OB:null,RW:null,OC:null,RX:null,NO:null,Li:null,Jw:null,K1:
null,MD:null,Yx:null,Tc:null,RY:null,Ay:null,Ax9:0,Ax8:0,AuR:0,AuQ:0,ArB:0,AsV:0
,Avs:0,Avt:0,Am_:true,Amz:false,Aog:false,Init:function(aArg){A.zX([this,this.Avy
],this.Li.Q,0);A.zX([this,this.AuW],this.Jw.Q,0);A.zX([this,this.BqE],this.K1.Q,
0);A.zX([this,this.BkV],this.MD.Q,0);A.zX([this,this.Bq8],this.Ny.Q,0);A.zX([this
,this.Bq7],this.Og.Q,0);A.zX([this,this.BhK],this.NO.Q,0);A.zX([this,this.BhJ],this.
OC.Q,0);this.Bb(this.P_);},DF:function(G){var Fi=0;var X=this.AV;switch(this.Cq.
CP){case 6:Fi=2;break;case 7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;
}X=this.QM(X,Fi,0x414);if(!!X)this.Bb(X);this.MZ(this);},CC:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.Fa(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A7).FB();},A3y:function(G){var EE=(C.Aet.isPrototypeOf(G)?G:null);if(!EE)return;
var Aw=this.Filter.DM(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this
,this.Fp,this.Ft],0);}else{if(EE.Er===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else A.ab5("%s",AH0+EE.Er.toFixed());if(!!Aw){this.Filter.
CX(Aw);A.abo([this,this.Fp,this.Ft],0);}}},BAV:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A7).FB();},AAK:function(G){var EE=(
C.Am4.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.DM(EE.Er,EE.Operator
);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE.Er===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;
}else if(EE.Er===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;}else if((EE.Er===22)||(EE.Er===26)){var A1x=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1x.EJ=EE.Er;A1x.Operator=0;Aw=A1x;}else A.ab5(
"%s",AH0+EE.Er.toFixed());if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fp,this.Ft
],0);}}},A_x:function(E){if(this.Avs===E)return;this.Avs=E;A.abo([this,this.Blz,
this.A_x],0);},A_y:function(E){if(this.Avt===E)return;this.Avt=E;A.abo([this,this.
BlA,this.A_y],0);},Avy:function(G){var F;this.A_y((F=this.Li.Q,F[1].call(F[0])));
var Aw=this.Filter.DM(7,0);if(!!Aw){var Az5=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!Az5)Az5.A5=this.Avt;else A.ab5("%s",AfJ);}},AuW:function(G){var
F;this.A_x((F=this.Jw.Q,F[1].call(F[0])));var Aw=this.Filter.DM(14,0);if(!!Aw){var
Vd=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Vd)Vd.A5=
this.Avs;else A.ab5("%s",AfJ);}},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},A$e:function(
E){if(this.AsV===E)return;this.AsV=E;A.abo([this,this.Bmb,this.A$e],0);},BqE:function(
G){var F;this.A$e((F=this.K1.Q,F[1].call(F[0])));var Aw=this.Filter.DM(22,1);if(
!!Aw){var Aje=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Aje
)switch(this.AsV){case 1:Aje.Operator=5;break;case 0:Aje.Operator=0;break;default:
A.ab5("%s%e",AH1,this.AsV);}else A.ab5("%s",AfJ);}},A_L:function(E){if(this.ArB===
E)return;this.ArB=E;A.abo([this,this.BlP,this.A_L],0);},BkV:function(G){var F;this.
A_L((F=this.MD.Q,F[1].call(F[0])));var Aw=this.Filter.DM(26,1);if(!!Aw){var At_=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At_)switch(this.ArB
){case 1:At_.Operator=5;break;case 0:At_.Operator=0;break;default:A.ab5("%s%e",AH1
,this.ArB);}else A.ab5("%s",AfJ);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P_.Bk([this,this.Fp,this.Ft]);this.Ta.
Bk([this,this.Fp,this.Ft]);this.Og.Bk([this,this.Fp,this.Ft]);this.Tb.Bk([this,this.
Fp,this.Ft]);this.Ny.Bk([this,this.Fp,this.Ft]);this.OB.Bk([this,this.Fp,this.Ft
]);this.RW.Bk([this,this.Fp,this.Ft]);this.OC.Bk([this,this.Fp,this.Ft]);this.RX.
Bk([this,this.Fp,this.Ft]);this.NO.Bk([this,this.Fp,this.Ft]);this.Li.Bk([this,this.
Fp,this.Ft]);this.Jw.Bk([this,this.Fp,this.Ft]);this.K1.Bk([this,this.Fp,this.Ft
]);this.MD.Bk([this,this.Fp,this.Ft]);this.Yx.Bk([this,this.Fp,this.Ft]);this.Tc.
Bk([this,this.Fp,this.Ft]);this.RY.Bk([this,this.Fp,this.Ft]);this.Ash(false);A.
pe([this,this.A49],this);var BeE=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DM(1,2))?B:null);if(!!BeE){this.Ash(true);this.AGh(BeE.A5);}var Bd8=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DM(1,3))?B:null);if(!!
Bd8){this.Ash(true);this.AGi(Bd8.A5);}this.ArS(false);A.pe([this,this.ALy],this);
var BeD=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DM(4,3))?B:null
);if(!!BeD){this.ArS(true);this.AE9(A._GetAutoObject(A.Device.Helper).Mf(BeD.A5,
A._GetAutoObject(A.Device.Helper).Dv()));}var Bd7=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DM(4,2))?B:null);if(!!Bd7){this.ArS(true);this.AE$(A.
_GetAutoObject(A.Device.Helper).Mf(Bd7.A5,A._GetAutoObject(A.Device.Helper).Dv()
)+1);}var Az5=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DM(7,0
))?B:null);if(!!Az5)this.Li.Bx(this.Gender.DZ(Az5.A5));var Vd=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DM(14,0))?B:null);if(!!Vd)this.Jw.Bx(this.AnimalType.
DZ(Vd.A5));var Aje=this.Filter.DM(22,1);if(!!Aje){if(!Aje.Operator)this.K1.Bx(0);
else this.K1.Bx(1);}var At_=this.Filter.DM(26,1);if(!!At_){if(!At_.Operator)this.
MD.Bx(0);else this.MD.Bx(1);}},Ft:function(Aq){this.Bk(Aq);},AGi:function(E){if(
this.Ax9===E)return;this.Ax9=E;A.abo([this,this.A9S,this.AGi],0);},AGh:function(
E){if(this.Ax8===E)return;this.Ax8=E;A.abo([this,this.A9R,this.AGh],0);},Bq8:function(
G){var F;this.AGi((F=this.Ny.Q,F[1].call(F[0])));var Aw=this.Filter.DM(1,3);if(!
!Aw){var ABP=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABP)
ABP.A5=this.Ax9;else A.ab5("%s",AfJ);}},Bq7:function(G){var F;this.AGh((F=this.Og.
Q,F[1].call(F[0])));var Aw=this.Filter.DM(1,2);if(!!Aw){var ABP=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABP)ABP.A5=this.Ax8;else A.ab5("%s",AfJ);}},Be9:
function(G){var EE=(C.AjL.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.
DM(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fp,this.Ft],0
);}else{if(EE===this.Ta){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A5=this.Ax8;this.Bb(this.Og);}else if(EE===this.Tb){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=this.Ax9;this.Bb(this.Ny);}if(!!Aw){this.Filter.CX(
Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([this,this.A49],this);},A49:function(
G){var A3g=!!this.Filter.DM(this.Og.Er,this.Og.Operator);var A4_=!!this.Filter.DM(
this.Ny.Er,this.Ny.Operator);A._GetAutoObject(A.Device.Helper).J6(this.Ta,this.Aog
);A._GetAutoObject(A.Device.Helper).J6(this.Tb,this.Aog);A._GetAutoObject(A.Device.
Helper).J6(this.Og,A3g);A._GetAutoObject(A.Device.Helper).J6(this.Ny,A4_);},MZ:function(
G){var B;this.Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},BBR:function(G){A.pe([this,this.Fk],this);A.pe([this,this.
MZ],this);},BAS:function(G){this.Ash(!this.Aog);if(this.Aog===false){var Aw=this.
Filter.DM(this.P_.Er,this.P_.Operator);while(!!Aw){this.Filter.Nw(Aw);Aw=this.Filter.
DM(this.P_.Er,this.P_.Operator);}A.abo([this,this.Fp,this.Ft],0);}},Ash:function(
E){if(this.Aog===E)return;this.Aog=E;A.abo([this,this.A9Q,this.Ash],0);A.pe([this
,this.A49],this);},AE$:function(E){if(this.AuR===E)return;this.AuR=E;A.abo([this
,this.A8V,this.AE$],0);},AE9:function(E){if(this.AuQ===E)return;this.AuQ=E;A.abo([
this,this.A8T,this.AE9],0);},BhK:function(G){var F;this.AE$((F=this.NO.Q,F[1].call(
F[0])));var Aw=this.Filter.DM(4,2);if(!!Aw){var AfW=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfW){var AaX=A._GetAutoObject(A.Device.Helper).ZY(
this.AuR-1);AfW.A5=AaX;}else A.ab5("%s",AfJ);}},BhJ:function(G){var F;this.AE9((
F=this.OC.Q,F[1].call(F[0])));var Aw=this.Filter.DM(4,3);if(!!Aw){var AfW=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfW){var AaX=A._GetAutoObject(
A.Device.Helper).ZY(this.AuQ);AfW.A5=AaX;}else A.ab5("%s",AfJ);}},ALy:function(G
){var A3g=this.Am_&&!!this.Filter.DM(this.OC.Er,this.OC.Operator);var A4_=this.Am_&&
!!this.Filter.DM(this.NO.Er,this.NO.Operator);A._GetAutoObject(A.Device.Helper).
J6(this.OB,this.Am_);A._GetAutoObject(A.Device.Helper).J6(this.RW,this.Am_&&this.
Amz);A._GetAutoObject(A.Device.Helper).J6(this.RX,this.Am_&&this.Amz);A._GetAutoObject(
A.Device.Helper).J6(this.OC,A3g);A._GetAutoObject(A.Device.Helper).J6(this.NO,A4_
);},ArS:function(E){if(this.Amz===E)return;this.Amz=E;A.abo([this,this.A8S,this.
ArS],0);A.pe([this,this.ALy],this);},Be8:function(G){var EE=(C.AjL.isPrototypeOf(
G)?G:null);if(!EE)return;var Aw=this.Filter.DM(EE.Er,EE.Operator);if(!!Aw){this.
Filter.Nw(Aw);A.abo([this,this.Fp,this.Ft],0);}else{if(EE===this.RW){Aw=A._NewObject(
A.Device.UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper
).ZY(this.AuQ);this.Bb(this.OC);}else if(EE===this.RX){Aw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=A._GetAutoObject(A.Device.Helper).ZY(this.AuR-1);this.
Bb(this.NO);}if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fp,this.Ft],0);}}A.pe([
this,this.ALy],this);},BAR:function(G){this.ArS(!this.Amz);if(this.Amz===false){
var Aw=this.Filter.DM(this.OB.Er,this.OB.Operator);while(!!Aw){this.Filter.Nw(Aw
);Aw=this.Filter.DM(this.OB.Er,this.OB.Operator);}A.abo([this,this.Fp,this.Ft],0
);}},Bnz:function(E){if(this.Am_===E)return;this.Am_=E;A.pe([this,this.ALy],this
);},Fp:function(){return this.Filter;},BlA:function(){return this.Avt;},Blz:function(
){return this.Avs;},Bmb:function(){return this.AsV;},BlP:function(){return this.
ArB;},A9S:function(){return this.Ax9;},A9R:function(){return this.Ax8;},A9Q:function(
){return this.Aog;},A8V:function(){return this.AuR;},A8T:function(){return this.
AuQ;},A8S:function(){return this.Amz;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.AB8._Init.call(this.Transponder={I:this},0);C.AB8._Init.
call(this.El={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ACi._Init.call(
this.P_={I:this},0);C.AjL._Init.call(this.Ta={I:this},0);C.Aby._Init.call(this.Og={
I:this},0);C.AjL._Init.call(this.Tb={I:this},0);C.Aby._Init.call(this.Ny={I:this
},0);C.ACi._Init.call(this.OB={I:this},0);C.AjL._Init.call(this.RW={I:this},0);C.
AC7._Init.call(this.OC={I:this},0);C.AjL._Init.call(this.RX={I:this},0);C.AC7._Init.
call(this.NO={I:this},0);C.Am4._Init.call(this.Li={I:this},0);C.Am4._Init.call(this.
Jw={I:this},0);C.Am4._Init.call(this.K1={I:this},0);C.Am4._Init.call(this.MD={I:
this},0);C.QI._Init.call(this.Yx={I:this},0);C.QI._Init.call(this.Tc={I:this},0);
C.QI._Init.call(this.RY={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I_;var B;this.N.Z(true);this.N.CS(A.aaR(A.acf.A5I));this.Dr(C.APM);this.Gender.
Au(this.Avt);this.AnimalType.Au(this.Avs);this.Transponder.Au(this.AsV);this.El.
Au(this.ArB);this.Y.H(Ff);this.Y.JZ(1);this.P_.H(I1);this.P_.Aj(true);this.P_.T(
A._GetAutoObject(A.Device.Helper).Am2(0,1));this.P_.Nq(1);this.Ta.H(Qg);this.Ta.
Aj(true);this.Ta.T(A.aaR(A.acf.AEu));this.Ta.Nq(1);this.Ta.OV(2);this.Og.H(Aan);
this.Og.Nq(1);this.Og.OV(2);this.Og.AGa(A.aaR(A.acf.GO));this.Tb.H(Alk);this.Tb.
Aj(true);this.Tb.T(A.aaR(A.acf.AHt));this.Tb.Nq(1);this.Tb.OV(3);this.Ny.H(Aot);
this.Ny.Aj(true);this.Ny.Nq(1);this.Ny.OV(3);this.Ny.AGa(A.aaR(A.acf.GO));this.OB.
H(AXl);this.OB.Aj(true);this.OB.T(A.aaR(A.acf.RU));this.OB.Nq(4);this.RW.H(AXm);
this.RW.Aj(true);this.RW.T(A.aaR(A.acf.AEu));this.RW.Nq(4);this.RW.OV(3);this.OC.
H(AXn);this.OC.Nq(4);this.OC.OV(3);this.OC.A_Q(2);this.RX.H(AXo);this.RX.Aj(true
);this.RX.T(A.aaR(A.acf.AHt));this.RX.Nq(4);this.RX.OV(2);this.NO.H(AXp);this.NO.
Aj(true);this.NO.Nq(4);this.NO.OV(2);this.NO.A_Q(3);this.Li.H(Atg);this.Li.Aj(true
);this.Li.Nq(7);this.Li.Ahz(0);this.Li.OV(0);this.Jw.H(U6);this.Jw.Aj(true);this.
Jw.Nq(14);this.Jw.Ahz(0);this.Jw.OV(0);this.K1.H(U6);this.K1.Aj(true);this.K1.Nq(
22);this.K1.Ahz(0);this.K1.OV(1);this.MD.H(U6);this.MD.Aj(true);this.MD.Nq(26);this.
MD.Ahz(0);this.MD.OV(1);this.Yx.H(U6);this.Yx.Aj(true);this.Yx.Nq(11);this.Yx.Ahz(
0);this.Yx.OV(0);this.Tc.H(U6);this.Tc.Aj(true);this.Tc.Nq(12);this.Tc.Ahz(0);this.
Tc.OV(0);this.RY.H(U6);this.RY.Aj(true);this.RY.Nq(8);this.RY.Ahz(0);this.RY.OV(
0);this.Ay.H(Ix);this.J(this.Y,0);this.J(this.P_,0);this.J(this.Ta,0);this.J(this.
Og,0);this.J(this.Tb,0);this.J(this.Ny,0);this.J(this.OB,0);this.J(this.RW,0);this.
J(this.OC,0);this.J(this.RX,0);this.J(this.NO,0);this.J(this.Li,0);this.J(this.Jw
,0);this.J(this.K1,0);this.J(this.MD,0);this.J(this.Yx,0);this.J(this.Tc,0);this.
J(this.RY,0);this.J(this.Ay,0);this.N.CE=[this,this.Ew];this.N.Ca=[this,this.BAV
];this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.BBR];this.P_.AR=[this,this.BAS
];this.P_.Au([this,this.A9Q,this.Ash]);this.Ta.AR=[this,this.Be9];this.Og.Gt([this
,this.D_,this.GU]);this.Og.Au([this,this.A9R,this.AGh]);this.Tb.AR=[this,this.Be9
];this.Ny.Gt([this,this.D_,this.GU]);this.Ny.Au([this,this.A9S,this.AGi]);this.OB.
AR=[this,this.BAR];this.OB.Au([this,this.A8S,this.ArS]);this.RW.AR=[this,this.Be8
];this.OC.Gt([this,this.D_,this.GU]);this.OC.Au([this,this.A8T,this.AE9]);this.RX.
AR=[this,this.Be8];this.NO.Gt([this,this.D_,this.GU]);this.NO.Au([this,this.A8V,
this.AE$]);this.Li.AR=[this,this.AAK];this.Li.Au([B=this.Gender,B.B$,B.Cc]);this.
Li.CK(this.Gender);this.Jw.AR=[this,this.AAK];this.Jw.Au([B=this.AnimalType,B.B$
,B.Cc]);this.Jw.CK(this.AnimalType);this.K1.AR=[this,this.AAK];this.K1.Au([B=this.
Transponder,B.B$,B.Cc]);this.K1.CK(this.Transponder);this.MD.AR=[this,this.AAK];
this.MD.Au([B=this.El,B.B$,B.Cc]);this.MD.CK(this.El);this.Yx.AR=[this,this.A3y];
this.Tc.AR=[this,this.A3y];this.RY.AR=[this,this.A3y];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.El._Done();this.Y._Done();this.P_._Done();this.Ta._Done();this.Og._Done(
);this.Tb._Done();this.Ny._Done();this.OB._Done();this.RW._Done();this.OC._Done(
);this.RX._Done();this.NO._Done();this.Li._Done();this.Jw._Done();this.K1._Done(
);this.MD._Done();this.Yx._Done();this.Tc._Done();this.RY._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.El._ReInit();
this.Y._ReInit();this.P_._ReInit();this.Ta._ReInit();this.Og._ReInit();this.Tb._ReInit(
);this.Ny._ReInit();this.OB._ReInit();this.RW._ReInit();this.OC._ReInit();this.RX.
_ReInit();this.NO._ReInit();this.Li._ReInit();this.Jw._ReInit();this.K1._ReInit(
);this.MD._ReInit();this.Yx._ReInit();this.Tc._ReInit();this.RY._ReInit();this.Ay.
_ReInit();this.N.CS(A.aaR(A.acf.A5I));this.Ta.T(A.aaR(A.acf.AEu));this.Og.AGa(A.
aaR(A.acf.GO));this.Tb.T(A.aaR(A.acf.AHt));this.Ny.AGa(A.aaR(A.acf.GO));this.OB.
T(A.aaR(A.acf.RU));this.RW.T(A.aaR(A.acf.AEu));this.RX.T(A.aaR(A.acf.AHt));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ta)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Og)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ny)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Li)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$R={ZZ:null,BoU:
function(Bym){var EF=A._NewObject(C.A$Q,0);EF.AB=Bym;EF.ME=this.ZZ;this.ZZ=EF;},
A$v:function(){var Vu=null;if(!!this.ZZ){Vu=this.ZZ.AB;this.ZZ=this.ZZ.ME;}return Vu;
},Contains:function(Alu){var EF=this.ZZ;while(!!EF){if(EF.AB.Aoa===Alu)return true;
EF=EF.ME;}return false;},BoK:function(){if(!!this.ZZ)return this.ZZ.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$R;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$Q={AB:null,
ME:null,_Init:function(aArg){this.__proto__=C.A$Q;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ME)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMw={ASi:function(){A._GetAutoObject(
A.Device.Helper).AxE(this.Ia,0);A._GetAutoObject(C.A7).FB();},A8m:function(){this.
Ia.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A7).FB();},A7l:function(
){return A.aaL(A.ach.Am8);},_Init:function(aArg){C.AGA._Init.call(this,aArg);this.
__proto__=C.AMw;this.Dr(C.IP);},_className:"Application::AnimalActionRateScreen"
};C.AMs={WK:function(G){this.AgA();this.I8(A.aaR(A.acf.AVJ),[this,this.AT8],5);this.
I8(A.aaR(A.acf.A5$),[this,this.BmB],4);this.I8(A.aaR(A.acf.AGz),[this,this.ATT],
3);this.I8(A.aaR(A.acf.An6),[this,this.Aw3],2);this.I8(A.aaR(A.acf.AdX),[this,this.
AFc],1);this.I8(A.aaR(A.acf.AuM),[this,this.AE8],0);A._GetAutoObject(C.BS).Fz();
A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Anm)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DF:function(G){},AbB:function(){return C.ANl;},AbC:function(
){return C.ADF;},Rb:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MB();var
Azl=A._NewObject(A.Device.BoolFilterCriterion,0);Azl.Initialize(8,0,true,true);Bf.
CX(Azl);A._GetAutoObject(A.Device.Device).An.Bk(Bf);},HS:function(G){var F;C.GJ.
HS.call(this,G);if(this.Akj()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajt((F=this.Fn,F[1].call(F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.
N.OW(false);this.N.OX(false);},Agm:function(){A._GetAutoObject(C.A7).Cb(40);},_Init:
function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AMs;var B;this.Dr(C.APb
);this.Dl(A.aaR(A.acf.A8s));this.AwY([B=A._GetAutoObject(A.Device.Device),B.A8W,
B.BbB]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.A8s));}
,_className:"Application::AlarmListScreen"};C.ANM={DF:function(G){},Agj:function(
G){if(!!this.Bg)A.ab5("%i",this.Bg.AD.Gu);var Aa=(C.ACp.isPrototypeOf(G)?G:null);
if(!!Aa){A._GetAutoObject(A.Device.Helper).GT(Aa.Ht);A._GetAutoObject(C.A7).Cb(13
);}},Rb:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MB();var AzF=A._NewObject(
A.Device.BoolFilterCriterion,0);AzF.Initialize(9,0,true,true);Bf.CX(AzF);A._GetAutoObject(
A.Device.Device).An.Bk(Bf);},HS:function(G){C.GJ.HS.call(this,G);this.N.OW(false
);this.N.OX(false);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.ANM;this.Dr(C.APd);this.Dl(A.aaR(A.acf.A8t));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8t));},_className:"Application::ControlListScreen"
};C.Aet={Filter:null,Er:0,Jh:10,TableId:0,Operator:1,CQ:function(){var F;this.TA((
F=this.Filter,F[1].call(F[0])).DM(this.Er,this.Operator));},Bl:function(aSize){C.
Co.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jh),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mj],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mj],E,0);A.pe([this,this.
Mj],this);},Mj:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.TA((F=this.Filter,F[1].call(F[0])).DM(this.Er,this.Operator));else this.
TA(null);},Ahz:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mj],this);},Nq:function(E){if(this.Er===E)return;this.Er=E;A.pe([this,this.
Mj],this);},TA:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A7e(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).Am2(this.TableId
,this.Er));},OV:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mj],this);},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Aet;this.V.H(AH2);this.V.A6(0x11);},_ReInit:function(){C.Co._ReInit.call(this);
this.CQ();},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QI={H$:null,Bl:function(aSize){var B;C.Aet.Bl.call(this,aSize);this.H$.H([(aSize[
0]-((B=this.H$.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jh,0,this.
H$.M[0]-this.Jh,aSize[1]]);},TA:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).Am2(this.TableId,this.Er));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Aw&&Aw.A5)this.H$.Cw(1);else this.H$.Cw(0);},_Init:function(aArg
){C.Aet._Init.call(this,aArg);A.acg.Ap._Init.call(this.H$={I:this},0);this.__proto__=
C.QI;this.H$.H(AH3);this.H$.Cw(0);this.J(this.H$,0);this.H$.Ax(A.aaL(A.ach.AqX));
},_Done:function(){this.__proto__=C.Aet;this.H$._Done();C.Aet._Done.call(this);}
,_ReInit:function(){C.Aet._ReInit.call(this);this.H$._ReInit();},_Mark:function(
D){var B;C.Aet._Mark.call(this,D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APM={Ap:null,Text:null,Dg:function(
E){C.BR.Dg.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APM;this.Ap.H(AXq);this.Text.H(AXr);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeF));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Ap._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjU={
AW:null,Ua:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BR.Bl.call(this,aSize);this.Ua.H(A.abJ(this.Ua.M,A.abe(this.AW.M.slice(0
,2),AXs)));this.Ua.H(A.abK(this.Ua.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXt
)));},Ai:function(Ae){var B;C.BR.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IG)this.Ua.L(A.jb.AV);else this.Ua.L(A.jb.Am9);},Dg:function(E){
C.BR.Dg.call(this,E);this.Gw.L(E);this.D2.Zz(E);},WN:function(E){C.BR.WN.call(this
,E);this.D2.CV(E);},Akr:function(){return this.AW.Akr();},Awo:function(){return this.
AW.Awo();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B_().toFixed(
));},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BW._Init.call(this.Ua={I:this},0);A.acg.Ap._Init.call(this.Gw={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C8._Init.call(this.A$={I:this
},0);this.__proto__=C.AjU;this.AW.H(AXu);this.Ua.H(AXv);this.Ua.Nu(2);this.Gw.H(
AXw);this.Gw.L(A.jb.CU);this.D2.A1(0x14);this.D2.H(AXx);this.D2.Zz(A.jb.Bm);this.
D2.CV(A.jb.Rl);this.D2.Ho(2);this.A$.DD(AXy);this.A$.DN(AXz);this.A$.L(A.jb.Bc);
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
,Agi:function(G){if(this.Ez<0)this.L7(1);else if(this.Ez===9)this.L7(0);else this.
L7(this.Ez+1);A.pe(this.Dk,this);},Ai:function(Ae){var B;C.Ez.Ai.call(this,Ae);var
Hf=((Ae&0x10)===0x10);var IG=((Ae&0x40)===0x40);if(IG){this.Background.L(A.jb.AV
);this.Text.L(A.jb.Bm);this.CZ(256);}else if(Hf){this.Background.L(this.M$);this.
Text.L(A.jb.Text);this.CZ(256);}else{this.Background.L(this.M$);this.Text.L(A.jb.
Text);this.CZ(128);}},Agh:function(G){if(this.Ez<=0)this.L7(9);else this.L7(this.
Ez-1);A.pe(this.Dk,this);},_Init:function(aArg){C.Ez._Init.call(this,aArg);A.Core.
BF._Init.call(this.It={I:this},0);A.Core.BF._Init.call(this.Is={I:this},0);this.
__proto__=C.DG;this.It.Filter=4;this.Is.Filter=5;this.It.BG=[this,this.Agi];this.
It.D1=[this,this.Agi];this.Is.BG=[this,this.Agh];this.Is.D1=[this,this.Agh];},_Done:
function(){this.__proto__=C.Ez;this.It._Done();this.Is._Done();C.Ez._Done.call(this
);},_ReInit:function(){C.Ez._ReInit.call(this);this.It._ReInit();this.Is._ReInit(
);},_Mark:function(D){var B;C.Ez._Mark.call(this,D);if((B=this.Dk)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Is)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"};C.AW={
Dk:null,Cv:null,CW:null,Dz:null,Eq:null,F0:null,ET:null,Fm:null,Fc:null,Ne:0,ARx:
false,AqA:false,Ai:function(Ae){var B;A.Core.P.Ai.call(this,Ae);if(((Ae&0x40)===
0x40)&&this.AqA)this.ET.Ae1(true);else this.ET.Ae1(false);},AwU:function(E){var B;
if(E===this.Akr())return;var Agb=E;var DV=this.ET;while(!!DV){if(Agb>0){DV.L7(Agb
%10);Agb=(Agb/10)|0;}else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=this.QM(DV,2,0x11))?
B:null);}},Akr:function(){return A.wz(this.Awo(),-1,10);},Ov:function(G){if(this.
F0.Ez>=0)this.BgR(7);},M5:function(G){if(((this.Akr()>0)||this.ARx)&&(this.Cv.Ez<
0))this.BgR(2);else if(this.Akr()<=0)this.Fc.Mw=true;},Adw:function(G){A.pe(this.
Dk,this);},BgR:function(GA){var B;var ALM=0;var DV=null;switch(GA){case 2:{DV=this.
Cv;ALM=7;}break;case 7:{DV=this.ET;ALM=2;}break;default:throw new Error(AXA);}while(
!!DV){var A3r=(C.DG.isPrototypeOf(B=this.QM(DV,ALM,0x11))?B:null);if(!!A3r)DV.L7(
A3r.Ez);else if(ALM===7)DV.L7(0);else DV.L7(-1);DV=A3r;}A.pe([this,this.Adw],this
);},Ae1:function(E){if(this.AqA===E)return;this.AqA=E;this.Am();},BnA:function(E
){if(this.ARx===E)return;this.ARx=E;},ATx:function(E){var B;if(E===this.Awo())return;
var Agb=E;var DV=this.ET;while(!!DV){if(Agb.length>0){DV.L7(A.wz(A.ab2(Agb,1),-1
,10));Agb=A.abV(Agb,Agb.length-1);}else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=this.
QM(DV,2,0x11))?B:null);}},Awo:function(){var B;var IE=A.jV;var O=0;var B6=this.Cv;
for(;O<6;O=O+1){if(!!B6&&(B6.Ez>=0))IE=IE+B6.Ez.toFixed();B6=(C.DG.isPrototypeOf(
B=this.TX(B6,0x11))?B:null);}return IE;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DG._Init.call(this.Cv={I:this},0);C.DG._Init.call(this.CW={I:this},
0);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG.
_Init.call(this.F0={I:this},0);C.DG._Init.call(this.ET={I:this},0);A.Core.BF._Init.
call(this.Fm={I:this},0);A.Core.BF._Init.call(this.Fc={I:this},0);this.__proto__=
C.AW;this.H(Ayw);this.Cv.A1(0x3);this.Cv.H(AH4);this.CW.A1(0x3);this.CW.H(AH5);this.
Dz.A1(0x3);this.Dz.H(AH6);this.Eq.A1(0x3);this.Eq.H(AH7);this.F0.A1(0x3);this.F0.
H(AH8);this.ET.A1(0x3);this.ET.H(AH9);this.ET.L7(0);this.Fm.Filter=6;this.Fc.Filter=
7;this.Ne=A.jb.CJ;this.J(this.Cv,0);this.J(this.CW,0);this.J(this.Dz,0);this.J(this.
Eq,0);this.J(this.F0,0);this.J(this.ET,0);this.Bb(this.ET);this.Cv.Dk=[this,this.
Adw];this.CW.Dk=[this,this.Adw];this.Dz.Dk=[this,this.Adw];this.Eq.Dk=[this,this.
Adw];this.F0.Dk=[this,this.Adw];this.ET.Dk=[this,this.Adw];this.Fm.BG=[this,this.
Ov];this.Fc.BG=[this,this.M5];},_Done:function(){this.__proto__=A.Core.P;this.Cv.
_Done();this.CW._Done();this.Dz._Done();this.Eq._Done();this.F0._Done();this.ET.
_Done();this.Fm._Done();this.Fc._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Cv._ReInit();this.CW._ReInit();this.Dz._ReInit(
);this.Eq._ReInit();this.F0._ReInit();this.ET._ReInit();this.Fm._ReInit();this.Fc.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Dk)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bik="7ab39e7a";C.BDr={Undefined:0,BEv:1,BDJ:2};C.AkM={
Ty:null,AiY:null,Lg:null,ANQ:null,Aod:null,push:function(MT){if(!this.Ty){MT.AhB=
null;MT.ME=null;this.Ty=MT;this.AiY=this.Ty;}else{MT.AhB=this.AiY;MT.ME=null;this.
AiY.ME=MT;this.AiY=MT;}},BCp:function(MT){var Qp=this.Ty;while(!!Qp){if(Qp.JS.Id===
MT.Id)return Qp;Qp=Qp.ME;}return Qp;},BB_:function(MT){if(MT===this.Ty)this.pop(
);else if(MT===this.AiY){MT=MT.AhB;if(!!MT)MT.ME=null;this.AiY=MT;}else{MT.AhB.ME=
MT.ME;MT.ME.AhB=MT.AhB;}},Aht:function(E){var F;if(this.Lg===E)return;this.Lg=E;
if(!!this.Lg)this.Lg.AgP(2);(F=this.ANQ,F[2].call(F[0],this.Lg));},Vr:function(G
){var Qp=(C.AUl.isPrototypeOf(G)?G:null);if(!!Qp){if(!Qp.JS.PopupState){if(!this.
Lg)this.Aht(this.top());}else if(Qp.JS.PopupState===4){this.pop();this.Aht(this.
top());}else if(Qp.JS.PopupState===5){this.pop();this.Aht(this.top());}else if(Qp.
JS.PopupState===7){this.pop();this.Aht(this.top());}else if(Qp.JS.PopupState===8
){this.pop();this.Aht(this.top());}else if(Qp.JS.PopupState===6){if(Qp===this.Lg
){this.pop();this.Aht(this.top());}else this.BB_(Qp);}else if(Qp.JS.PopupState===
3){this.pop();this.Aht(this.top());}}},pop:function(){var AK8=null;if(!!this.Ty){
AK8=this.Ty;if(this.Ty===this.AiY){this.Ty=null;this.AiY=null;}else{this.Ty=this.
Ty.ME;if(!this.Ty)throw new Error(AXB);this.Ty.AhB=null;}AK8.AhB=null;AK8.ME=null;
}return AK8;},top:function(){return this.Ty;},BBS:function(G){var B;var At$=(A.Device.
PopupContext.isPrototypeOf(B=this.Aod.JS)?B:null);if(!!At$){var A4F=this.BCp(At$
);if(!!A4F){A4F.A_m(At$);if(!At$.Show)A4F.AgP(6);}else if(At$.Show){var AKL=A._NewObject(
C.AUl,0);AKL.A_m(At$);AKL.ATe=[this,this.Vr];this.push(AKL);AKL.AgP(0);}}},_Init:
function(aArg){A.Core.Bae._Init.call(this.Aod={I:this},0);this.__proto__=C.AkM;this.
Aod.ASH=[this,this.BBS];this.Aod.BmU(A._GetAutoObject(A.Device.Device).AnT);A.h7++;
},_Done:function(){this.__proto__=null;this.Aod._Done();A.h7--;},_ReInit:function(
){this.Aod._ReInit();},_Mark:function(D){var B;if((B=this.Ty)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lg)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANQ)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aod)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AUl={Rp:null,ME:null,AhB:null,JS:null,ATe:null,PopupIdToString:null,Af2:function(
Bxu,Bx3,Byl,Byc,Bye,Byb,BxM){var Vt=A._NewObject(C.AUk,0);Vt.Bn3(this.JS.Id);Vt.
A_8(Bxu);Vt.ATf=Byb;Vt.A__(this.JS.Ak6);Vt.A_V(this.JS.AkK);Vt.BQ=A._NewObject(C.
N,0);Vt.Ls().Ca=Bye;Vt.Ls().Ce=null;Vt.Ls().CE=Byc;Vt.Ls().CS(Byl);Vt.Ls().Ct(null
);Vt.Ls().Hz(Bx3);Vt.Ls().AFD(BxM);return Vt;},Aks:function(){if(!this.Rp){var Agt=
this.PopupIdToString.BT(this.JS.Id);switch(this.JS.Id){case 91:case 92:this.Rp=this.
Af2(Agt,A.jV,A.jV,null,null,[this,this.Age],0);break;case 39:this.Rp=this.Af2(Agt
,A.aaR(A.acf.AmH),A.aaR(A.acf.Ok),[this,this.A3E],[this,this.A3F],[this,this.Age
],3);break;case 13:this.Rp=this.Af2(Agt,A.aaR(A.acf.AmH),A.aaR(A.acf.Bo6),[this,
this.A3D],[this,this.AKQ],[this,this.Age],3);break;case 25:this.Rp=this.Af2(Agt,
A.aaR(A.acf.AmH),A.aaR(A.acf.Ok),[this,this.A3D],[this,this.AKQ],[this,this.Age]
,3);break;case 16:case 24:case 49:case 74:this.Rp=this.Af2(Agt,A.aaR(A.acf.AmH),
A.jV,[this,this.A3D],null,[this,this.Age],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 116:case 34:case
82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 117:
case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:
case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:
case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:
case 71:case 113:case 100:case 114:case 97:case 88:case 89:case 84:case 93:case 94:
case 87:case 109:case 102:case 101:case 103:this.Rp=this.Af2(Agt,A.jV,A.aaR(A.acf.
Ok),null,[this,this.AKQ],[this,this.Age],3);break;case 58:case 9:case 6:case 29:
case 107:case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:
this.Rp=this.Af2(Agt,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3E],[this,this.
A3F],[this,this.Age],3);break;case 110:this.Rp=this.Af2(Agt,A.jV,A.jV,null,null,[
this,this.Age],1);break;case 46:case 111:this.Rp=this.Af2(Agt,A.jV,A.aaR(A.acf.Ok
),null,[this,this.AKQ],[this,this.Age],1);break;case 4:case 7:case 33:case 115:case
44:case 37:case 38:case 63:case 95:case 108:case 112:this.Rp=this.Af2(Agt,A.aaR(
A.acf.No),A.aaR(A.acf.Yes),[this,this.A3E],[this,this.A3F],[this,this.Age],1);break;
default:A.ab5("%s",(AXC+this.JS.Id.toFixed())+AXD);}}switch(this.JS.Id){case 16:
case 49:this.Rp.A$m(true);break;case 91:case 92:this.Rp.A$m(false);break;default:;
}return this.Rp;},AKQ:function(G){this.AgP(4);},A3D:function(G){this.AgP(5);},A3F:
function(G){this.AgP(7);},A3E:function(G){this.AgP(8);},Age:function(G){this.AgP(
3);},A_m:function(E){if(this.JS===E)return;this.JS=E;if(!!this.Rp){this.Aks().A__(
this.JS.Ak6);this.Aks().A_V(this.JS.AkK);}},AgP:function(Byh){var B;this.JS.Bn4(
Byh);(B=this.ATe)?B[1].call(B[0],this):null;},BBo:function(G){this.AgP(9);},_Init:
function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={I:this}
,0);this.__proto__=C.AUl;A.h7++;},_Done:function(){this.__proto__=null;this.PopupIdToString.
_Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(
D){var B;if((B=this.Rp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ME)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AhB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.JS)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATe)&&((B=B[0])._cycle!=
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
};C.Afr={UB:null,Ki:function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.
AM!==BP){if(!!this.UB&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.UB,F[
2].call(F[0],false));break;case 1:(F=this.UB,F[2].call(F[0],true));break;default:;
}A.abo(this.UB,0);}},Kd:function(G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.
AM!==BP){if(!!this.UB&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.UB,F[
2].call(F[0],false));break;case 1:(F=this.UB,F[2].call(F[0],true));break;default:;
}A.abo(this.UB,0);}},AkE:function(E){if(A.aaZ(this.UB,E))return;if(!!this.Q)A.z$([
this,this.A4g],this.UB,0);this.UB=E;if(!!E)A.zX([this,this.A4g],E,0);if(!!E)A.pe([
this,this.A4g],this);},A4g:function(G){var F;if(!!this.UB){if((F=this.UB,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BX._Init.call(this,aArg
);this.__proto__=C.Afr;this.J5(this.V,-1);},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.UB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUB={Jl:null,O3:null,IZ:null,Gn:null,AL:null,Abq:null,AgV:null,TT:null,Sg:null
,AcI:null,Xa:null,Hk:null,ABO:true,Init:function(aArg){var B;A.zX([this,this.Al$
],[B=A._GetAutoObject(A.Device.Device),B.AS6,B.A0S],0);A.pe([this,this.Al$],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABO)this.N.C4(A.aaL(A.ach.
ARb));else this.N.C4(A.aaL(A.ach.ARc));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.O3.L(A.jb.Bm);this.Sg.Z(false);this.TT.Z(false);this.IZ.Z(true);this.Gn.
As(false);(F=this.Gn.Q,F[2].call(F[0],this.Gn.B3));this.Background.L(A.jb.Gk);}else
if(this.Abq.Bw){this.O3.L(A.jb.Text);this.Sg.Z(true);this.TT.Z(true);this.IZ.Z(false
);this.Gn.As(false);(F=this.Gn.Q,F[2].call(F[0],this.Gn.B3));this.Background.L(A.
jb.E1);}else{this.O3.L(A.jb.Text);this.Sg.Z(false);this.TT.Z(false);this.IZ.Z(true
);this.Gn.As(true);this.Background.L(A.jb.CJ);}if(this.AgV.Bw)this.Xa.Z(true);else
this.Xa.Z(false);},CC:function(G){A._GetAutoObject(A.Device.Device).AhN();},E4:function(
G){A._GetAutoObject(A.Device.Device).An5();A._GetAutoObject(A.Device.Device).Afc(
false);A._GetAutoObject(A.Device.Device).UA(false);},Al$:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BA6],this);break;case 3:{A.pe([this,this.BfI],this);A.pe([B=this.Abq,B.AxS],this
);A.pe(this.Abq.MJ,this);}break;case 4:A.ab5("%s",AXE);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A7).FB();},BBU:function(G){this.Bov(!this.ABO);},Bov:function(
E){if(this.ABO===E)return;this.ABO=E;if(!E)A._GetAutoObject(A.Device.Device).Afc(
false);this.Am();},BA6:function(G){var B;this.BfI(this);if(this.ABO)A._GetAutoObject(
A.Device.Device).Afc(true);A._GetAutoObject(A.Device.Device).WQ(65280);A._GetAutoObject(
A.Device.Device).UA(true);A.pe([B=this.Abq,B.StartTimer],this);A.pe([B=this.AgV,
B.StartTimer],this);this.Am();},BA7:function(G){A._GetAutoObject(A.Device.Device
).Afc(false);A._GetAutoObject(A.Device.Device).UA(false);this.Am();},BA9:function(
G){this.Am();},BfI:function(G){A._GetAutoObject(A.Device.Device).AhN();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jl._Init.call(this.Jl={I:this},0);C.CG._Init.
call(this.O3={I:this},0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Gn._Init.
call(this.Gn={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abq={I:this},0);A.Core.Timer._Init.call(this.AgV={I:this},0);A.acg.Ap.
_Init.call(this.TT={I:this},0);A.acg.Ap._Init.call(this.Sg={I:this},0);A.acg.Text.
_Init.call(this.AcI={I:this},0);C.Xa._Init.call(this.Xa={I:this},0);C.CG._Init.call(
this.Hk={I:this},0);this.__proto__=C.AUB;var B;this.Background.L(A.jb.CJ);this.N.
Z(true);this.Jl.H(AXF);this.Jl.AkH(0);this.O3.H(AXG);this.O3.R(A.aaR(A.acf.Baj));
this.O3.L(A.jb.Text);this.IZ.H(AXH);this.IZ.L(A.jb.AV);this.IZ.Zx(true);this.Gn.
Fr(1750);this.Gn.Ux(750);this.Gn.AkC(0);this.Gn.As(true);this.Gn.B3=3;this.AL.H(
Ayx);this.Abq.P0(-1);this.Abq.WO(1000);this.AgV.P0(-1);this.AgV.WO(5000);this.TT.
H(AH_);this.Sg.H(AH_);this.Sg.L(A.jb.E1);this.AcI.H(Ayx);this.AcI.R(A.aaR(A.acf.
A$S));this.AcI.L(A.jb.Text);this.Xa.H(Ayx);this.Hk.H(AXI);this.Hk.As(false);this.
Hk.R(A.aaR(A.acf.RangeTest));this.Hk.L(A.jb.Text);this.J(this.Jl,0);this.J(this.
O3,0);this.J(this.IZ,0);this.J(this.AL,0);this.J(this.TT,0);this.J(this.Sg,0);this.
J(this.AcI,0);this.J(this.Xa,0);this.J(this.Hk,0);this.N.CE=[this,this.Ew];this.
N.Ca=[this,this.BBU];this.N.C3(A.aaL(A.ach.E2));this.O3.S(A.aaL(A.fl.Af));this.O3.
A0(A.aaL(A.fl.Ak));this.O3.Cr(A.aaL(A.fl.Bh));this.IZ.Ax(A.aaL(A.ach.AD5));this.
Gn.Q=[B=this.IZ,B.AST,B.Cw];this.Abq.MJ=[this,this.BA7];this.AgV.MJ=[this,this.BA9
];this.TT.Ax(A.aaL(A.ach.TT));this.Sg.Ax(A.aaL(A.ach.Sg));this.AcI.S(A.aaL(A.fl.
Af));this.Xa.Au([B=A._GetAutoObject(A.Device.Device),B.AS7,B.A0T]);this.Hk.S(A.aaL(
A.fl.Kt));this.Hk.A0(A.aaL(A.fl.HL));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jl._Done();this.O3._Done();this.IZ._Done();this.Gn._Done();this.AL._Done(
);this.Abq._Done();this.AgV._Done();this.TT._Done();this.Sg._Done();this.AcI._Done(
);this.Xa._Done();this.Hk._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jl._ReInit();this.O3._ReInit();this.IZ._ReInit();this.Gn.
_ReInit();this.AL._ReInit();this.Abq._ReInit();this.AgV._ReInit();this.TT._ReInit(
);this.Sg._ReInit();this.AcI._ReInit();this.Xa._ReInit();this.Hk._ReInit();this.
O3.R(A.aaR(A.acf.Baj));this.AcI.R(A.aaR(A.acf.A$S));this.Hk.R(A.aaR(A.acf.RangeTest
));this.O3.S(A.aaL(A.fl.Af));this.O3.A0(A.aaL(A.fl.Ak));this.O3.Cr(A.aaL(A.fl.Bh
));this.AcI.S(A.aaL(A.fl.Af));this.Hk.S(A.aaL(A.fl.Kt));this.Hk.A0(A.aaL(A.fl.HL
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jl)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.O3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abq)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcI)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Xa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hk).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.Ab1={
ScreenType:0,Ns:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nv:
function(G){A._GetAutoObject(C.A7).Cb(this.ScreenType);},_Init:function(aArg){C.
Co._Init.call(this,aArg);this.__proto__=C.Ab1;},_className:"Application::MenuItemScreen"
};C.Ui={Aea:null,Mu:null,AmI:false,Init:function(aArg){},Ai:function(Ae){C.Co.Ai.
call(this,Ae);if(this.AmI){this.Mu.Cw(1);this.Mu.L(A.jb.Ib);}else{this.Mu.Cw(0);
if(this.KM)this.Mu.L(A.jb.Bm);else if(this.Hm)this.Mu.L(A.jb.Text);else this.Mu.
L(A.jb.Bm);}},H1:function(G){var F,Cu;if(!!this.Aea){(Cu=this.Aea,Cu[2].call(Cu[
0],!(F=this.Aea,F[1].call(F[0]))));this.AFk((F=this.Aea,F[1].call(F[0])));A.pe([
this,this.DK],this);}},A3J:function(G){this.KM=true;this.DK(this);},AFk:function(
E){if(this.AmI===E)return;this.AmI=E;this.DK(this);this.Am();},A3$:function(G){var
F;this.AFk((F=this.Aea,F[1].call(F[0])));},A1b:function(s){this.A3$(s);},DK:function(
G){var F;if(!this.N||!this.KM)return;if(this.AmI){(F=this.N,F[1].call(F[0])).CS(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GY.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CS(A.aaR(A.acf.A8H));(F=this.N,F[1].call(F[0])).GY.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ATl:function(E){if(A.aaZ(this.Aea,E))
return;if(!!this.Aea)A.z$([this,this.A1b],this.Aea,0);this.Aea=E;if(!!E)A.zX([this
,this.A1b],E,0);if(!!E)A.pe([this,this.A1b],this);},_Init:function(aArg){C.Co._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mu={I:this},0);this.__proto__=C.Ui;this.
V.L(A.jb.Ib);this.Mu.H(AH$);this.Mu.Cw(0);this.J(this.Mu,0);this.Mu.Ax(A.aaL(A.ach.
AqX));this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.Mu._Done();C.Co.
_Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Mu._ReInit();
},_Mark:function(D){var B;C.Co._Mark.call(this,D);if((B=this.Aea)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANY={H_:null,IT:null,_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.SX._Init.call(this.H_={I:this},0);C.AGZ._Init.call(this.
IT={I:this},0);this.__proto__=C.ANY;var B;this.Jf(A.aaR(A.acf.ACP));this.H_.H(Ah4
);this.H_.Aj(true);this.H_.T(A.aaR(A.acf.Date));this.H_.Bi(true);this.IT.H(U7);this.
IT.Aj(true);this.IT.T(A.aaR(A.acf.Bs));this.J(this.H_,-1);this.J(this.IT,-1);this.
H_.Ab8([B=this.H_,B.FW]);this.H_.Gt([this,this.D_,this.GU]);this.H_.AkB(A.aaL(A.
ach.Edit));this.H_.Acc([B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]);this.IT.
Ab8([B=this.IT,B.FW]);this.IT.Gt([this,this.D_,this.GU]);this.IT.AkB(A.aaL(A.ach.
Edit));this.IT.Acc([B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]);},_Done:function(
){this.__proto__=C.Cg;this.H_._Done();this.IT._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.H_._ReInit();this.IT._ReInit();this.Jf(A.
aaR(A.acf.ACP));this.H_.T(A.aaR(A.acf.Date));this.IT.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cg._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVA={Ri:null,FM:null,B0:null,OQ:null,YS:null,Aba:null,_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.Ri._Init.call(this.Ri={I:this},0);C.AMS._Init.call(this.
FM={I:this},0);C.AU_._Init.call(this.B0={I:this},0);C.AVa._Init.call(this.OQ={I:
this},0);C.Afr._Init.call(this.YS={I:this},0);C.Aba._Init.call(this.Aba={I:this}
,0);this.__proto__=C.AVA;var B;this.Jf(A.aaR(A.acf.Temperature));this.FM.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.B0.H(AXJ);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.
Arz));this.B0.Bi(false);this.OQ.H(Aao);this.OQ.Aj(true);this.OQ.T(A.aaR(A.acf.Undertemperature
));this.OQ.Bi(true);this.OQ.Bx(3800);this.OQ.Gb(3000);this.OQ.EV(5000);this.OQ.A$f(
A.aaR(A.acf.AHa));this.YS.H(AXK);this.YS.Aj(true);this.YS.Z(true);this.YS.T(A.aaR(
A.acf.A5G));this.J(this.B0,0);this.J(this.OQ,0);this.J(this.YS,0);this.B0.Ab8([B=
this.B0,B.FW]);this.B0.Gt([this,this.D_,this.GU]);this.B0.AkB(A.aaL(A.ach.Edit));
this.B0.L5([B=this.B0,B.Ay_]);this.B0.L8(A.aaL(A.ach.AnW));this.B0.Au([B=this.FM
,B.B$,B.Cc]);this.B0.CK(this.FM);this.B0.A_T([B=this.FM,B.ATd,B.A00]);this.B0.A_S([
B=this.FM,B.ATc,B.A0Z]);this.OQ.L5([B=this.B0,B.Ay_]);this.OQ.L8(A.aaL(A.ach.AnW
));this.OQ.Au([B=A._GetAutoObject(A.Device.Device),B.A9O,B.Bb1]);this.YS.CK(this.
Aba);this.YS.AkE([B=A._GetAutoObject(A.Device.Device),B.A89,B.BbK]);},_Done:function(
){this.__proto__=C.Cg;this.Ri._Done();this.FM._Done();this.B0._Done();this.OQ._Done(
);this.YS._Done();this.Aba._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.Ri._ReInit();this.FM._ReInit();this.B0._ReInit();this.
OQ._ReInit();this.YS._ReInit();this.Aba._ReInit();this.Jf(A.aaR(A.acf.Temperature
));this.B0.T(A.aaR(A.acf.Arz));this.OQ.T(A.aaR(A.acf.Undertemperature));this.OQ.
A$f(A.aaR(A.acf.AHa));this.YS.T(A.aaR(A.acf.A5G));},_Mark:function(D){var B;C.Cg.
_Mark.call(this,D);if((B=this.Ri)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AN$={PP:null,PQ:null,Sz:null,Wc:null,SB:null,SA:null,Ge:null,Acx:null,Init:function(
aArg){A.zX([this,this.BpR],this.PQ.Q,0);},BpR:function(G){var F;A._GetAutoObject(
A.Device.Device).Axd((F=this.PQ.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.Iv._Init.call(this.PP={I:this},0);C.BX._Init.call(this.PQ={
I:this},0);C.Afr._Init.call(this.Sz={I:this},0);C.Iv._Init.call(this.Wc={I:this}
,0);C.Afr._Init.call(this.SB={I:this},0);C.Afr._Init.call(this.SA={I:this},0);C.
Ge._Init.call(this.Ge={I:this},0);C.Acx._Init.call(this.Acx={I:this},0);this.__proto__=
C.AN$;var B;this.N.H(U6);this.Jf(A.aaR(A.acf.Device));this.PP.H(Ah4);this.PP.Aj(
true);this.PP.T(A.aaR(A.acf.A$3));this.PP.Bi(false);this.PP.Gb(2);this.PP.EV(60);
this.PP.IW(A.aaR(A.acf.AHq));this.PP.Jg(A.aaR(A.acf.AHq));this.PQ.H(AXL);this.PQ.
Aj(true);this.PQ.T(A.aaR(A.acf.A$_));this.PQ.Bi(true);this.PQ.Bx(0);this.PQ.Gb(-
1);this.PQ.EV(1);this.Sz.H(Aao);this.Sz.Aj(true);this.Sz.T(A.aaR(A.acf.HH));this.
Sz.Bi(false);this.Sz.Bx(0);this.Sz.Gb(-1);this.Sz.EV(1);this.Wc.H(All);this.Wc.Aj(
true);this.Wc.T(A.aaR(A.acf.A54));this.Wc.Bi(true);this.Wc.IW(AfK);this.Wc.Jg(AfK
);this.SB.H(Ah5);this.SB.Aj(true);this.SB.T(A.aaR(A.acf.As0));this.SB.Bi(false);
this.SB.Bx(1);this.SB.Gb(-1);this.SB.EV(1);this.SA.H(Aou);this.SA.Aj(true);this.
SA.T(A.aaR(A.acf.AsD));this.SA.Bi(true);this.SA.Bx(0);this.SA.Gb(-1);this.SA.EV(
1);this.Acx.Au(A._GetAutoObject(A.Device.Device).AxR);this.J(this.PP,0);this.J(this.
PQ,0);this.J(this.Sz,0);this.J(this.Wc,0);this.J(this.SB,0);this.J(this.SA,0);this.
PP.Au([B=A._GetAutoObject(A.Device.Device),B.A9G,B.BbX]);this.PQ.Au([B=this.Acx,
B.B$,B.Cc]);this.PQ.CK(this.Acx);this.Sz.CK(this.Ge);this.Sz.AkE([B=A._GetAutoObject(
A.Device.Device),B.AEV,B.AI5]);this.Wc.Au([B=A._GetAutoObject(A.Device.Device),B.
A85,B.BbH]);this.SB.CK(this.Ge);this.SB.AkE([B=A._GetAutoObject(A.Device.Device)
,B.A9P,B.Bb2]);this.SA.CK(this.Ge);this.SA.AkE([B=A._GetAutoObject(A.Device.Device
),B.ASX,B.A0M]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.PP._Done(
);this.PQ._Done();this.Sz._Done();this.Wc._Done();this.SB._Done();this.SA._Done(
);this.Ge._Done();this.Acx._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.PP._ReInit();this.PQ._ReInit();this.Sz._ReInit();this.
Wc._ReInit();this.SB._ReInit();this.SA._ReInit();this.Ge._ReInit();this.Acx._ReInit(
);this.Jf(A.aaR(A.acf.Device));this.PP.T(A.aaR(A.acf.A$3));this.PP.IW(A.aaR(A.acf.
AHq));this.PP.Jg(A.aaR(A.acf.AHq));this.PQ.T(A.aaR(A.acf.A$_));this.Sz.T(A.aaR(A.
acf.HH));this.Wc.T(A.aaR(A.acf.A54));this.SB.T(A.aaR(A.acf.As0));this.SA.T(A.aaR(
A.acf.AsD));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.PP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUN={Wf:null,We:
null,QS:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bi8
],this.QS.Q,0);},Bi8:function(G){var F;A._GetAutoObject(A.Device.Device).Aky((F=
this.QS.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
Np._Init.call(this.Wf={I:this},0);C.Np._Init.call(this.We={I:this},0);C.AU6._Init.
call(this.QS={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUN;var B;this.Jf(A.aaR(A.acf.Asw));this.Wf.H(I1);this.
Wf.Aj(true);this.Wf.T(A.aaR(A.acf.AjI));this.Wf.Bi(false);this.Wf.Ns(87);this.We.
H(Ayy);this.We.Aj(true);this.We.T(A.aaR(A.acf.Aqt));this.We.Bi(true);this.We.Ns(
88);this.QS.H(U7);this.QS.Aj(true);this.QS.T(A.aaR(A.acf.A5L));this.QS.Bi(false);
this.QS.Gb(-1);this.QS.EV(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.Wf,0);this.J(this.We,0);this.J(this.
QS,0);this.Wf.AR=[B=this.Wf,B.Nv];this.We.AR=[B=this.We,B.Nv];this.QS.Au([B=this.
EartagNrAssignmentMode,B.B$,B.Cc]);this.QS.CK(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.Wf._Done();this.We._Done(
);this.QS._Done();this.EartagNrAssignmentMode._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wf._ReInit();this.We._ReInit();this.QS._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Jf(A.aaR(A.acf.Asw));this.Wf.T(A.aaR(
A.acf.AjI));this.We.T(A.aaR(A.acf.Aqt));this.QS.T(A.aaR(A.acf.A5L));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.We)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.Xa={Q:null,TransponderProtocolToString:
null,Apw:null,Background:null,Y:null,St:null,GO:null,PV:null,OS:null,Py:null,C9:
null,EN:null,SS:null,N_:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);},Hg:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GO.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BN=(F=this.Q,F[1].call(F[0])).BjE();if(BN<900){var Kc=A._GetAutoObject(
A.Device.Converter).ANP(BN);if(!!Kc)this.C9.R(((this.CountryToString.LA(Kc)+AcS)+
BN.toFixed())+Pd);else this.C9.R(BN.toFixed());if(Kc===10){var AKt=this.A7A((F=this.
Q,F[1].call(F[0])).Id);this.C9.R(this.C9.String+((((AXM+this.Apw.BqA(AKt))+AcS)+
A.abl(this.Apw.Bqz(AKt),2,10))+Pd));}this.C9.Z(true);this.Py.Z(true);this.OS.Z(false
);this.PV.Z(false);}else{this.OS.R(((A._GetAutoObject(A.Device.Converter).Bin(BN
)+AcS)+BN.toFixed())+Pd);this.OS.Z(true);this.PV.Z(true);this.C9.Z(false);this.Py.
Z(false);}if(BN===276){this.EN.R(this.Apw.BT(this.A7A((F=this.Q,F[1].call(F[0])).
Id)));this.EN.Z(true);}else this.EN.Z(false);this.N_.R(this.TransponderProtocolToString.
BT((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GO.R(A.jV);this.OS.
R(A.jV);this.EN.R(A.jV);this.C9.R(A.jV);this.N_.R(A.jV);}},A7A:function(Ka){var QD=
0;var Kc=A._GetAutoObject(A.Device.Converter).S8(Ka);switch(Kc){case 10:{var Gj=
A._GetAutoObject(A.Device.Converter).AVR(Ka);QD=A._GetAutoObject(A.Device.Converter
).ADd(Gj);}break;default:;}return QD;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apw={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.St={I:this},0);C.CG._Init.call(this.GO={I:this},0);C.CG._Init.
call(this.PV={I:this},0);C.CG._Init.call(this.OS={I:this},0);C.CG._Init.call(this.
Py={I:this},0);C.CG._Init.call(this.C9={I:this},0);C.CG._Init.call(this.EN={I:this
},0);C.CG._Init.call(this.SS={I:this},0);C.CG._Init.call(this.N_={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.Xa;
this.H(AcT);this.Background.A1(0x3F);this.Background.H(AcT);this.Background.L(A.
jb.CU);this.Y.A1(0x3F);this.Y.H(AcT);this.Y.JZ(9);this.St.H(AIa);this.St.Aj(true
);this.St.R(A.aaR(A.acf.GO)+A.aaR(A.acf.Colon));this.St.A6(0x11);this.St.L(A.jb.
Text);this.GO.H(AIb);this.GO.Aj(true);this.GO.R(AXN);this.GO.A6(0x14);this.GO.L(
A.jb.Text);this.PV.H(Ayz);this.PV.Aj(true);this.PV.R(A.aaR(A.acf.A$w)+A.aaR(A.acf.
Colon));this.PV.A6(0x11);this.PV.L(A.jb.Text);this.OS.H(AIc);this.OS.Aj(true);this.
OS.R(AXO);this.OS.A6(0x14);this.OS.L(A.jb.Text);this.Py.H(Ayz);this.Py.Aj(true);
this.Py.R(A.aaR(A.acf.C9)+A.aaR(A.acf.Colon));this.Py.A6(0x11);this.Py.L(A.jb.Text
);this.C9.H(AIc);this.C9.Aj(true);this.C9.R(AXP);this.C9.A6(0x14);this.C9.L(A.jb.
Text);this.EN.H(AXQ);this.EN.Aj(true);this.EN.R(AXR);this.EN.A6(0x14);this.EN.L(
A.jb.Text);this.SS.H(AXS);this.SS.Aj(true);this.SS.R(A.aaR(A.acf.N_)+A.aaR(A.acf.
Colon));this.SS.A6(0x11);this.SS.L(A.jb.Text);this.N_.H(AXT);this.N_.Aj(true);this.
N_.R(AXU);this.N_.A6(0x14);this.N_.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.St,0);this.J(this.GO,0);this.J(this.PV,0);this.J(this.OS,0
);this.J(this.Py,0);this.J(this.C9,0);this.J(this.EN,0);this.J(this.SS,0);this.J(
this.N_,0);this.St.S(A.aaL(A.fl.Ak));this.St.A0(A.aaL(A.fl.Bh));this.GO.S(A.aaL(
A.fl.Ak));this.GO.A0(A.aaL(A.fl.Bh));this.PV.S(A.aaL(A.fl.Ak));this.PV.A0(A.aaL(
A.fl.Bh));this.OS.S(A.aaL(A.fl.Ak));this.OS.A0(A.aaL(A.fl.Bh));this.Py.S(A.aaL(A.
fl.Ak));this.Py.A0(A.aaL(A.fl.Bh));this.C9.S(A.aaL(A.fl.Ak));this.C9.A0(A.aaL(A.
fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.A0(A.aaL(A.fl.Bh));this.SS.S(A.aaL(A.fl.
Ak));this.SS.A0(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Ak));this.N_.A0(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apw._Done();this.Background._Done();this.Y._Done();this.St._Done();
this.GO._Done();this.PV._Done();this.OS._Done();this.Py._Done();this.C9._Done();
this.EN._Done();this.SS._Done();this.N_._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apw._ReInit();this.Background._ReInit();this.Y._ReInit();this.St.
_ReInit();this.GO._ReInit();this.PV._ReInit();this.OS._ReInit();this.Py._ReInit(
);this.C9._ReInit();this.EN._ReInit();this.SS._ReInit();this.N_._ReInit();this.CountryToString.
_ReInit();this.St.R(A.aaR(A.acf.GO)+A.aaR(A.acf.Colon));this.PV.R(A.aaR(A.acf.A$w
)+A.aaR(A.acf.Colon));this.Py.R(A.aaR(A.acf.C9)+A.aaR(A.acf.Colon));this.SS.R(A.
aaR(A.acf.N_)+A.aaR(A.acf.Colon));this.St.S(A.aaL(A.fl.Ak));this.St.A0(A.aaL(A.fl.
Bh));this.GO.S(A.aaL(A.fl.Ak));this.GO.A0(A.aaL(A.fl.Bh));this.PV.S(A.aaL(A.fl.Ak
));this.PV.A0(A.aaL(A.fl.Bh));this.OS.S(A.aaL(A.fl.Ak));this.OS.A0(A.aaL(A.fl.Bh
));this.Py.S(A.aaL(A.fl.Ak));this.Py.A0(A.aaL(A.fl.Bh));this.C9.S(A.aaL(A.fl.Ak)
);this.C9.A0(A.aaL(A.fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.A0(A.aaL(A.fl.Bh)
);this.SS.S(A.aaL(A.fl.Ak));this.SS.A0(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Ak));
this.N_.A0(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Py)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.Q0={D2:null,A$L:A.jV,Ai:function(Ae){C.Fo.Ai.call(
this,Ae);if(this.Mz.Fq())this.D2.CV(A.jb.AV);else this.D2.CV(this.Background.AQ);
this.D2.Zz(this.G_.AQ);},ZE:function(E){if(this.A$L===E)return;this.A$L=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fo._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.Q0;this.Background.H(AXV);this.
Mz.H(Xf);this.OL.H(AId);this.Q6.H(AId);this.D2.H(AXW);this.D2.Z(false);this.J(this.
D2,0);this.G_.S(A.aaL(A.fl.Af));this.G_.A0(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fo;this.D2._Done();C.Fo._Done.call(this
);},_ReInit:function(){C.Fo._ReInit.call(this);this.D2._ReInit();this.G_.S(A.aaL(
A.fl.Af));this.G_.A0(A.aaL(A.fl.Ak));this.G_.Cr(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fo._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B7:null,AeI:null,Ap:null,Text:null
,DL:A.jV,AmV:0,M$:0,Jh:0,A57:0x14,Init:function(aArg){},T:function(E){if(this.DL===
E)return;this.DL=E;this.Text.R(E);},BC7:function(G){this.Ap.H(this.Text.M);this.
AeI.H(this.Text.M);},Zz:function(E){if(this.AmV===E)return;this.AmV=E;this.AeI.L(
E);this.Text.L(E);},CV:function(E){if(this.M$===E)return;this.M$=E;this.Ap.L(E);
},S:function(E){if(this.B7===E)return;this.B7=E;this.Text.S(E);},Ho:function(E){
if(this.Jh===E)return;this.Jh=E;this.Text.Ho(E);},Bmz:function(E){if(this.A57===
E)return;this.A57=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NY._Init.call(this.AeI={I:this},0);A.acg.NY._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AIe);
this.AeI.A1(0x8);this.AeI.L(A.jb.Text);this.Ap.A1(0x8);this.Ap.L(A.jb.CU);this.Text.
A1(0xD);this.Text.H(AIe);this.Text.Ho(5);this.Text.Je(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeI,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeI.Ax(A.aaL(A.ach.AP$));this.Ap.Ax(A.aaL(A.ach.AP_));this.Text.Q_([this,this.BC7
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeI._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeI._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.Ue={DY:null,Y:null,Ay:null,DF:function(G){var B;C.AB.DF.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},CC:function(
G){C.AB.CC.call(this,G);this.ALB(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkS();A._GetAutoObject(A.Device.Helper).AsA();},Il:function(G){},AcX:function(
s){this.Il(s);},A30:function(G){A._GetAutoObject(C.A7).FB();},Fk:function(G){var
B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.
MH(-this.Y.Br[1]);},ALB:function(G){},BHe:function(s){this.ALB(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.Ue;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Dr(C.Aq9);this.
DY.A1(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);this.Y.JZ(9);this.Ay.H(
Ix);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CE=[this,this.A30
];this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AV$={WK:function(
G){this.AgA();this.I8(A.aaR(A.acf.AVH),[this,this.AT7],7);this.I8(A.aaR(A.acf.Bo$
),[this,this.BmC],6);this.I8(A.aaR(A.acf.AGz),[this,this.ATT],3);this.I8(A.aaR(A.
acf.An6),[this,this.Aw3],2);this.I8(A.aaR(A.acf.AdX),[this,this.AFc],1);this.I8(
A.aaR(A.acf.AuM),[this,this.AE8],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mp(A.aaR(A.acf.Anm)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DF:function(G){},AbB:function(){return C.ANq;},AbC:function(){return C.APR;
},Rb:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MB();var ABQ=A._NewObject(
A.Device.BoolFilterCriterion,0);ABQ.Initialize(12,0,true,true);Bf.CX(ABQ);A._GetAutoObject(
A.Device.Device).An.Bk(Bf);},HS:function(G){var F;C.GJ.HS.call(this,G);if(this.Akj(
)===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajt((F=this.Fn,F[1].call(
F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false
);},Agm:function(){A._GetAutoObject(C.A7).Cb(41);},_Init:function(aArg){C.GJ._Init.
call(this,aArg);this.__proto__=C.AV$;var B;this.Dr(C.APN);this.Dl(A.aaR(A.acf.A8u
));this.AwY([B=A._GetAutoObject(A.Device.Device),B.A9T,B.Bb3]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.A8u));},_className:"Application::WatchListScreen"
};C.AMx={DF:function(G){var B;var JH=(A.Core.BF.isPrototypeOf(G)?G:null);if(((JH.
CP===4)||(JH.CP===5))===false){C.Ax$.DF.call(this,G);return;}if(A._GetAutoObject(
A.Device.Device).MeasureState!==1)return;var Bdv=A._GetAutoObject(A.Device.Device
).K2;var Tr;if(JH.CP===5)Tr=5;else Tr=4;var ABu=A._GetAutoObject(A.acj.DU).Bd5(Bdv
,Tr);var FK=(((Bdv+((ABu/2)|0))/ABu)|0)*ABu;if(JH.CP===4)FK+=ABu;else if(JH.CP===
5)FK-=ABu;if(FK>999900)FK=999900;if(FK<100)FK=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(FK);},AsO:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O_,B.CE],this);else A._GetAutoObject(C.A7).FB();
},W2:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsQ();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$1()===false){this.Ia.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).K2
);this.Ia.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A7).FB();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.Ia.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).K2);this.Ia.Ci(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A7).FB();}},AkZ:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O_,B.Ca],this);},Bd4:function(){var
ALP=A._GetAutoObject(A.Device.Helper).W.AhX(1);if(ALP>=100000)ALP=(Math.round(ALP
/1000)|0)*1000;return ALP;},_Init:function(aArg){C.Ax$._Init.call(this,aArg);this.
__proto__=C.AMx;},_className:"Application::AnimalActionWeighingScreen"};C.AVV={Wj:
null,YU:null,Ri:null,AeT:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
BX._Init.call(this.Wj={I:this},0);C.BX._Init.call(this.YU={I:this},0);C.Ri._Init.
call(this.Ri={I:this},0);C.AeT._Init.call(this.AeT={I:this},0);this.__proto__=C.
AVV;var B;this.Jf(A.aaR(A.acf.AHr));this.Wj.H(Ah4);this.Wj.Aj(true);this.Wj.T(A.
aaR(A.acf.Bas));this.Wj.Bi(true);this.Wj.Bx(0);this.YU.H(U7);this.YU.Aj(true);this.
YU.T(A.aaR(A.acf.Bar));this.YU.Bi(false);this.J(this.Wj,0);this.J(this.YU,0);this.
Wj.Au([B=this.Ri,B.B$,B.Cc]);this.Wj.CK(this.Ri);this.YU.Au([B=this.AeT,B.B$,B.Cc
]);this.YU.CK(this.AeT);},_Done:function(){this.__proto__=C.Cg;this.Wj._Done();this.
YU._Done();this.Ri._Done();this.AeT._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.Wj._ReInit();this.YU._ReInit();this.Ri._ReInit();
this.AeT._ReInit();this.Jf(A.aaR(A.acf.AHr));this.Wj.T(A.aaR(A.acf.Bas));this.YU.
T(A.aaR(A.acf.Bar));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.
Wj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ri)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeT)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeT={MassUnitToString:null
,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwZ(E);}
,Init:function(aArg){var B;A.zX([this,this.BeI],[B=A._GetAutoObject(A.Device.Device
),B.ASW,B.A0L],0);A.pe([this,this.BeI],this);},BeI:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeT;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax$={Ia:null,Ajz:null,MassUnit:null,
K2:null,VI:null,AnS:null,AcK:null,Z7:null,O_:null,YL:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af8());A.zX([this,this.AKR],[B=A._GetAutoObject(
A.Device.Device),B.AEY,B.AI8],0);A.zX([this,this.BBV],[B=A._GetAutoObject(A.Device.
Device),B.AE4,B.AJa],0);A.zX([this,this.BBW],[B=this.O_,B.ArH,B.JD],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.Ax4();this.Z9();},H1:function(G){this.W2(this);},
CC:function(G){C.AB.CC.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsQ();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Lm())A._GetAutoObject(
A.Device.Device).AY(50,true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),
0,null);this.Ia.Gs();this.Ia.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AG8();else{var BDk=this.Bd4();this.Z7.Z(true);this.AcK.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BDk);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsQ();else A._GetAutoObject(A.Device.Device).AhQ(
);},Ax4:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bht();break;case 3:{this.Bht();this.Z7.Z(false);this.AcK.Z(false
);if(this.A$1()){this.VI.Z(false);this.K2.H(A.abO(this.K2.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O_.As(true);this.O_.Z(true);this.Bb(this.O_);}}break;
case 4:this.K2.R(A.aaR(A.acu.Akm));break;default:A.ab5("%s%e",AIf,A._GetAutoObject(
A.Device.Device).MeasureState);}},Z9:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C3(A.aaL(A.ach.AeD));this.N.Ct(null);
this.YL.Z(false);this.N.C4(A.aaL(A.ach.Am8));this.N.CS(A.jV);}break;case 3:{if(this.
O_.AZ<=1){this.N.C3(null);this.N.Ct(null);this.YL.Z(false);this.N.C4(null);}else{
this.N.C3(A.aaL(A.ach.Am7));this.N.Ct(A.aaL(A.ach.AeE));this.YL.Z(true);this.N.C4(
null);}this.N.CS(A.aaR(A.acf.Ok));}break;case 4:{this.N.C4(A.aaL(A.ach.AvU));this.
N.Ca=[this,this.Bmp];this.N.Ct(null);this.YL.Z(false);this.N.CS(A.jV);}break;default:;
}},AsO:function(G){},Bxa:function(s){this.AsO(s);},W2:function(G){},A03:function(
s){this.W2(s);},Bmp:function(G){this.CC(this);},BBV:function(G){this.Am();},AKR:
function(G){this.Am();},A$1:function(){var AuD=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(AuD>0)&&!A._GetAutoObject(A.Device.Helper).Bqx(AuD
,this.Ia.Timestamp);},AkZ:function(G){},A02:function(s){this.AkZ(s);},BBW:function(
G){this.Am();},Bht:function(){this.K2.R(A._GetAutoObject(A.Device.Converter).Alb(
A._GetAutoObject(A.Device.Device).K2));},Bd4:function(){return A._GetAutoObject(
A.Device.Helper).W.AhX(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Ajz={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.K2={I:this},0);A.acg.Text._Init.call(this.VI={I:this
},0);C.Ax3._Init.call(this.AnS={I:this},0);A.acg.Aes._Init.call(this.AcK={I:this
},0);A.acg.Aes._Init.call(this.Z7={I:this},0);C.AWe._Init.call(this.O_={I:this},
0);A.acg.Ap._Init.call(this.YL={I:this},0);this.__proto__=C.Ax$;this.Background.
L(A.jb.CJ);this.N.Z(true);this.Dr(C.IP);this.Ajz.A1(0x3F);this.Ajz.H(AyA);this.Ajz.
L(A.jb.CJ);this.MassUnit.H(AXX);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
AAo));this.MassUnit.L(A.jb.Text);this.K2.H(AXY);this.K2.A6(0x14);this.K2.R(A.aaR(
A.acu.Akm));this.K2.L(A.jb.Text);this.VI.H(AXZ);this.VI.R(A.aaR(A.acf.BaD));this.
VI.L(A.jb.Text);this.VI.Z(true);this.AnS.H(AX0);this.AcK.H(AX1);this.AcK.L(A.jb.
Aed);this.AcK.Z(false);this.Z7.H(AX2);this.Z7.L(A.jb.Aed);this.Z7.Bnc(true);this.
Z7.Z(false);this.O_.A1(0x3F);this.O_.H(AyA);this.O_.As(false);this.O_.Z(false);this.
YL.H(AX3);this.YL.L(A.jb.Bm);this.J(this.Ajz,0);this.J(this.MassUnit,0);this.J(this.
K2,0);this.J(this.VI,0);this.J(this.AcK,0);this.J(this.Z7,0);this.J(this.O_,0);this.
J(this.YL,0);this.N.CE=[this,this.Bxa];this.N.Ce=[this,this.A02];this.N.Ca=[this
,this.A03];this.MassUnit.S(A.aaL(A.fl.EK));this.K2.S(A.aaL(A.fl.Aew));this.VI.S(
A.aaL(A.fl.EK));this.AcK.ZD(this.AnS);this.Z7.ZD(this.AnS);this.Ia=A._NewObject(
A.Device.Rating,0);this.O_.L6(A._GetAutoObject(A.Device.Helper).W);this.O_.AkF(this.
Ia);this.YL.Ax(A.aaL(A.ach.AQ7));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajz._Done();this.MassUnit._Done();this.K2._Done();this.VI._Done();this.
AnS._Done();this.AcK._Done();this.Z7._Done();this.O_._Done();this.YL._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajz._ReInit();
this.MassUnit._ReInit();this.K2._ReInit();this.VI._ReInit();this.AnS._ReInit();this.
AcK._ReInit();this.Z7._ReInit();this.O_._ReInit();this.YL._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAo));this.K2.R(A.aaR(A.acu.Akm));this.VI.R(A.aaR(A.acf.BaD));this.
MassUnit.S(A.aaL(A.fl.EK));this.K2.S(A.aaL(A.fl.Aew));this.VI.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YL)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AWi={FM:null
,OT:null,Nl:null,C$:null,L2:null,Ub:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FM,B.B$,B.Cc],0);A.pe([this,this.GH],this);},CC:function(G){C.Cg.CC.
call(this,G);A.pe([this,this.GH],this);},Bk$:function(G){var F;this.L2.BU.L(this.
L2.V.AQ);if(!!this.L2.Q)this.L2.BU.R((A._GetAutoObject(A.Device.Converter).Td((F=
this.L2.Q,F[1].call(F[0])),2,true)+CR)+A._GetAutoObject(A.acj.DU).AaE());},GH:function(
G){var AJM=true;if(this.FM.Q===1)AJM=false;this.C$.Aj(AJM);this.C$.As(AJM);this.
C$.Z(AJM);A._GetAutoObject(A.Device.Helper).ANJ(this.Y);},_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.AMT._Init.call(this.FM={I:this},0);C.AHC._Init.call(this.
OT={I:this},0);C.AU$._Init.call(this.Nl={I:this},0);C.AkX._Init.call(this.C$={I:
this},0);C.Iv._Init.call(this.L2={I:this},0);C.BX._Init.call(this.Ub={I:this},0);
this.__proto__=C.AWi;var B;this.Jf(A.aaR(A.acf.Settings));this.Hk.R(A.aaR(A.acf.
As3));this.FM.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.OT.Au(A._GetAutoObject(
A.Device.Device).OT);this.Nl.H(AX4);this.Nl.Aj(true);this.C$.H(Aov);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.KP));this.C$.Bi(true);this.C$.Gb(1000);this.C$.EV(99000);
this.L2.H(Ath);this.L2.Aj(true);this.L2.T(A.aaR(A.acf.A5P));this.L2.Gb(50);this.
L2.EV(2000);this.L2.ATz(A._GetAutoObject(A.acj.DU).Az7());this.Ub.H(Ah5);this.Ub.
Aj(true);this.Ub.T(A.aaR(A.acf.A8c));this.Ub.Gb(-1);this.Ub.EV(1);this.J5(this.Y
,-1);this.J5(this.Ay,-1);this.J(this.Nl,0);this.J(this.C$,0);this.J(this.L2,0);this.
J(this.Ub,0);this.Nl.Ab8([B=this.Nl,B.FW]);this.Nl.Gt([this,this.D_,this.GU]);this.
Nl.AkB(A.aaL(A.ach.Edit));this.Nl.L5([B=this.Nl,B.Ay_]);this.Nl.L8(A.aaL(A.ach.AnW
));this.Nl.Au([B=this.FM,B.B$,B.Cc]);this.Nl.CK(this.FM);this.Nl.A_T([B=this.FM,
B.ATd,B.A00]);this.Nl.A_S([B=this.FM,B.ATc,B.A0Z]);this.C$.Gt([this,this.D_,this.
GU]);this.C$.L5([B=this.Nl,B.Ay_]);this.C$.L8(A.aaL(A.ach.AnW));this.C$.Au([B=this.
FM,B.A83,B.ATk]);this.L2.Gt([this,this.D_,this.GU]);this.L2.L5([B=this.Nl,B.Ay_]
);this.L2.L8(A.aaL(A.ach.AnW));this.L2.Au([B=this.FM,B.A81,B.ATi]);this.L2.A_6([
this,this.Bk$]);this.Ub.Gt([this,this.D_,this.GU]);this.Ub.Au([B=this.OT,B.B$,B.
Cc]);this.Ub.CK(this.OT);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;
this.FM._Done();this.OT._Done();this.Nl._Done();this.C$._Done();this.L2._Done();
this.Ub._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.FM._ReInit();this.OT._ReInit();this.Nl._ReInit();this.C$._ReInit();this.L2.
_ReInit();this.Ub._ReInit();this.Jf(A.aaR(A.acf.Settings));this.Hk.R(A.aaR(A.acf.
As3));this.C$.T(A.aaR(A.acf.KP));this.L2.T(A.aaR(A.acf.A5P));this.Ub.T(A.aaR(A.acf.
A8c));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FM)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.L2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ub)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AU$={Y6:null,Init:
function(aArg){var B;A.zX([this,this.AfL],[B=A._GetAutoObject(A.Device.Device),B.
ASW,B.A0L],0);A.pe([this,this.AfL],this);},A4s:function(G){A._GetAutoObject(A.Device.
Device).AY(37,true,A.jV,0,[this,this.Bcg]);},A2g:function(G){var F;if(this.A_===
1){var BP=this.D7;this.D7=this.D7-A._GetAutoObject(A.acj.DU).Az7();if(this.D7<this.
AlY)this.D7=this.AlY;if(this.DW!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.
D7));A.abo(this.J3,0);}}if(this.A_===2){var BP=this.DW;this.DW=this.DW-A._GetAutoObject(
A.acj.DU).Az7();if(this.DW<this.D7)this.DW=this.D7;if(this.DW!==BP){if(!!this.J2
)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);}}this.DK(this);this.Am();
},A2S:function(G){var F;if(this.A_===1){var BP=this.D7;this.D7=this.D7+A._GetAutoObject(
A.acj.DU).Az7();if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP){if(!!this.J3
)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.A_===2){var BP=this.
DW;this.DW=this.DW+A._GetAutoObject(A.acj.DU).Az7();if(this.DW>this.AlT)this.DW=
this.AlT;if(this.DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(
this.J2,0);}}this.DK(this);this.Am();},GH:function(G){this.PT.R(AIg+A._GetAutoObject(
A.Device.Converter).Td(this.D7,2,true));this.PR.R(AIg+A._GetAutoObject(A.Device.
Converter).Td(this.DW,2,true));this.SE.R(A._GetAutoObject(A.acj.DU).AaE());this.
Y6.R(this.SE.String);},A33:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).AsC(this
);},A2L:function(AtB){if(AtB===1)return this.PT;else if(AtB===2)return this.PR;else
return null;},_Init:function(aArg){C.Acv._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y6={I:this},0);this.__proto__=C.AU$;this.T(A.aaR(A.acf.ACK));this.AlT=
2000;this.AlY=20;this.Background.H(K4);this.V.H(BD);this.V.R(A.aaR(A.acf.ACK)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkP.H(AX5);this.AkQ.H(AX6);this.Q$.H(AX7);
this.QK.H(AX8);this.PR.H(AX9);this.PT.H(AX_);this.SE.H(AIh);this.Y6.H(AX$);this.
Y6.Je(false);this.Y6.A6(0x12);this.Y6.L(0xFF000000);this.J5(this.H9,-8);this.J(this.
Y6,0);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.Y6.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acv;this.Y6._Done();C.Acv.
_Done.call(this);},_ReInit:function(){C.Acv._ReInit.call(this);this.Y6._ReInit();
this.T(A.aaR(A.acf.ACK));this.V.R(A.aaR(A.acf.ACK)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.Y6.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acv._Mark.call(this,D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABV={M:Pa,A7N:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7N();},_Init:function(
aArg){A.Graphics.HA._Init.call(this,aArg);this.__proto__=C.ABV;},_className:"Application::AbstractPath"
};C.Aqm={DQ:null,DY:null,Rn:null,AdT:null,P9:null,AdS:null,AuL:1,A5l:0,Bdc:false
,Az3:true,CQ:function(){this.Bhp(this);},Init:function(aArg){var B;this.Bb(this.
AdT);A.zX([this,this.Bhp],[B=this.AdT,B.A8_,B.BbL],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdS.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BiI(this.AuL+this.A5l)));if(this.AuL===1)this.P9.R(A.aaR(A.acf.ANx));else this.
P9.R(A.aaR(A.acf.Big));},CC:function(G){if(this.Az3)this.Az3=false;else if(this.
DQ.Bdm()===false)A.pe([this,this.A3B],this);else if(this.DQ.AAg())this.DQ.Ac$();
A.zV([this,this.Agd],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.Agd],A._GetAutoObject(A.Device.Device).An,0);},A3B:function(G){this.
Bdc=true;A._GetAutoObject(C.A7).FB();},Bhp:function(G){var B;var BdO=(C.Wv.isPrototypeOf(
B=this.AdT.AV)?B:null);if(!!BdO){var Azo=A._NewObject(A.Device.ActionToString,0);
this.Rn.R(Azo.LA(BdO.Action));}},Il:function(G){var Cy=(C.Wv.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DQ.Qt(Cy.Action);this.Bms(this.AuL+1);},BBn:function(G){
if(A._GetAutoObject(C.Ps).N3(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bms:function(E){
if(this.AuL===E)return;this.AuL=E;this.Am();},Agd:function(G){if((this.Bdc===false
)&&(this.DQ.Bdm()===false))A.pe([this,this.A3B],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);C.CG._Init.call(this.
Rn={I:this},0);C.AR2._Init.call(this.AdT={I:this},0);C.CG._Init.call(this.P9={I:
this},0);A.acg.Text._Init.call(this.AdS={I:this},0);this.__proto__=C.Aqm;this.Background.
L(A.jb.CU);this.N.H(U6);this.N.Z(true);this.Dr(C.IP);this.DY.A1(0x3F);this.DY.H(
Ff);this.DY.L(A.jb.CJ);this.Rn.H(AYa);this.Rn.L(A.jb.Text);this.AdT.H(AYb);this.
P9.H(AYc);this.P9.R(A.aaR(A.acf.ANx));this.P9.L(A.jb.Text);this.AdS.H(AYd);this.
AdS.R(AYe);this.AdS.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rn,0);this.J(this.
AdT,0);this.J(this.P9,0);this.J(this.AdS,0);this.N.CE=[this,this.A3B];this.N.Ce=[
this,this.BBn];this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeG));this.Rn.S(
A.aaL(A.fl.EK));this.Rn.A0(A.aaL(A.fl.Af));this.Rn.Cr(A.aaL(A.fl.Ak));this.AdT.A31=[
this,this.Il];this.P9.S(A.aaL(A.fl.EK));this.P9.A0(A.aaL(A.fl.Af));this.P9.Cr(A.
aaL(A.fl.Ak));this.AdS.S(A.aaL(A.fl.H6));this.DQ=A._GetAutoObject(C.DQ);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rn._Done();this.
AdT._Done();this.P9._Done();this.AdS._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rn._ReInit();this.AdT._ReInit();
this.P9._ReInit();this.AdS._ReInit();this.P9.R(A.aaR(A.acf.ANx));this.Rn.S(A.aaL(
A.fl.EK));this.Rn.A0(A.aaL(A.fl.Af));this.Rn.Cr(A.aaL(A.fl.Ak));this.P9.S(A.aaL(
A.fl.EK));this.P9.A0(A.aaL(A.fl.Af));this.P9.Cr(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.AR2={Ig:null,A31:null,Cq:null,Y:null,Ay:
null,A4H:0,Init:function(aArg){A.zV([this,this.ABK],this.Ig,0);A.zV([this,this.Bhm
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AuI],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABK],this);},Bb:function(E){var A3x=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A3x)A.abo([this,this.A8_,this.BbL],0);},DF:
function(G){var B;var Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;break;case
7:Fi=7;break;case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QM(X,Fi,0x415);
if((Fi===5)&&!X){var ALr=this.AV;while(!X){ALr=this.QM(ALr,2,0x415);if(!!ALr)X=this.
QM(ALr,Fi,0x415);else break;}}if(!!X)this.Bb(X);var G1=(C.Wv.isPrototypeOf(B=this.
AV)?B:null);if(!!G1)this.A4H=(C.Wv.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4H=0;A.pe([this,this.MZ],this);},A1$:function(Eh){var EQ=A._GetAutoObject(C.DQ).
Bdu(Eh,this.A31);this.J(EQ,0);},Ao9:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdO=X;X=X.Ah;if(((AdO.U&0x400)===0x400))this.HR(AdO);
}},ABK:function(G){this.Ao9();var O;var CB=A._GetAutoObject(C.Ps).Ng();for(O=0;O<
CB;O=O+1){var To=A._GetAutoObject(C.Ps).OM(O);this.A1$(To);}A.pe([this,this.Bhm]
,this);A.pe([this,this.BqT],this);A.pe([this,this.AuI],this);},BqT:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Wv.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.As(A._GetAutoObject(
A.Device.Helper).W.Id>=0);}X=X.Ah;}},AuI:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wv.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.AT2(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.AT2(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.AT2(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((
B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},Bhm:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wv.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Ps).N3(Aa.Action)&&A._GetAutoObject(C.
DQ).A5k(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.As(true);Aa.Z(true);if(
this.A4H===Aa.Action)this.Bb(Aa);}else{Aa.As(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.MZ],this);},MZ:function(G){var B;this.Y.VG(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AR2;this.H(AYf);this.Cq.Filter=147;this.Y.A1(0xB);this.Y.H(AYg);this.Y.JZ(9);this.
Ay.A1(0xA);this.Ay.H(AIi);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BG=[this,this.
DF];this.Cq.D1=[this,this.DF];this.Y.Em=[this,this.Fk];this.Ig=A._GetAutoObject(
C.Ps);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cq._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ig)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A31)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fs={Ek:null,AL:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fs;this.N.As(false);this.Ek.H(BD);this.Ek.As(false
);this.AL.H(Ff);this.AL.L(A.jb.Aed);this.Text.H(BD);this.Text.R(AYh);this.Text.L(
0xFF000000);this.Ap.H(Pa);this.Ap.L(A.jb.Text);this.J(this.Ek,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Ct(A.aaL(A.ach.AeG));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADy));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ek._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ek._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.Aa2={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},H1:function(G){},Ai:function(Ae){C.BX.
Ai.call(this,Ae);var FT=A.jb.Aed;var G0=A.jb.CU;if(this.Hm){FT=A.jb.Text;G0=A.jb.
Bm;}if(!this.LN){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);}else if(this.Qz){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(G0);}this.Hy.L(A.
jb.CU);this.H9.L(A.jb.CU);},Hn:function(G){var B;var Gh=this.DB.G7;var CA=(C.CG.
isPrototypeOf(B=this.DB.Cj)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.A0(A.aaL(
A.fl.Bh));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));else CA.R(Xo);CA.H(A.
abK(CA.M,[this.DB.Wl,(B=this.DB.M)[3]-B[1]]));},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.Aa2;this.DB.AFE(170);this.DB.N8(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajm={C_:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Ho(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Co.Ai.call(this,Ae);var FT=A.jb.Aed;var G0=A.jb.CU;if(this.Hm){FT=A.jb.Text;
G0=A.jb.Bm;}if(!this.LN){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);}else if(this.
Qz){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(G0);}},_Init:function(
aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ajm;this.C_.H(AYi);this.C_.Cw(1);this.J(this.C_,0);this.C_.Ax(A.aaL(A.ach.Ajw)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Co;this.C_._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.C_._ReInit();},_Mark:
function(D){var B;C.Co._Mark.call(this,D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AMe={Y:null,RS:null,TC:null
,TD:null,TE:null,AdR:null,XV:null,VA:null,VB:null,Aa1:null,Ay:null,Init:function(
aArg){this.Bb(this.RS);},DF:function(G){C.Fs.DF.call(this,G);this.MZ(this);},H1:
function(G){this.BgE(this);},Ls:function(){if(!this.BQ){this.BQ=A._NewObject(C.N
,0);this.BQ.CE=[this,this.BgE];this.BQ.Ce=null;this.BQ.Ca=null;this.BQ.CS(A.jV);
this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},ABn:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XV.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XV.Q))A._GetAutoObject(C.AutoActions).J(this.XV.Q);if(!!this.VA.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.VA.Q))A._GetAutoObject(C.AutoActions
).J(this.VA.Q);if(!!this.VB.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.VB.
Q))A._GetAutoObject(C.AutoActions).J(this.VB.Q);if(!!this.Aa1.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.Aa1.Q))A._GetAutoObject(C.AutoActions).J(this.Aa1.Q
);A._GetAutoObject(C.AutoActions).Ci();},BgE:function(G){if(this.BAu()===true){this.
ABn();this.AaP(this);}else A._GetAutoObject(A.Device.Device).AY(27,true,A.jV,0,null
);},BAu:function(){return(!!this.XV.C7(this.XV.Q)||!!this.VA.C7(this.VA.Q))||!!this.
VB.C7(this.VB.Q);},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.
Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},MZ:function(G){var B;this.
Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true
,null,null);},BBB:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XV.AtI(this);this.VA.AtI(this);this.VB.AtI(this);this.Aa1.AtI(this);}
,_Init:function(aArg){C.Fs._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.Aa2._Init.call(this.RS={I:this},0);C.Aa2._Init.call(this.TC={I:this},0);C.
Aa2._Init.call(this.TD={I:this},0);C.Aa2._Init.call(this.TE={I:this},0);C.Ave._Init.
call(this.AdR={I:this},0);C.AutoAction._Init.call(this.XV={I:this},0);C.AutoAction.
_Init.call(this.VA={I:this},0);C.AutoAction._Init.call(this.VB={I:this},0);C.AutoAction.
_Init.call(this.Aa1={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AMe;var B;this.H(Rs);this.Text.R(A.aaR(A.acf.TF));this.Y.H(L9);this.Y.JZ(1);this.
RS.H(Ah4);this.RS.As(true);this.RS.Aj(true);this.RS.T(A._GetAutoObject(A.Device.
Helper).MN(A.aaR(A.acf.Ajl),Pc,AIj));this.TC.H(U7);this.TC.As(true);this.TC.Aj(true
);this.TC.T(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.Ajl),Pc,AIk));this.
TD.H(Aao);this.TD.As(true);this.TD.Aj(true);this.TD.T(A._GetAutoObject(A.Device.
Helper).MN(A.aaR(A.acf.Ajl),Pc,AIl));this.TE.H(All);this.TE.As(true);this.TE.Aj(
true);this.TE.T(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.Ajl),Pc,AIm));this.
AdR.H(AyB);this.AdR.Aj(true);this.AdR.T(A.aaR(A.acf.A$I));this.VA.Index=1;this.VB.
Index=2;this.Aa1.Index=3;this.Ay.H(Ix);this.J(this.Y,0);this.J(this.RS,0);this.J(
this.TC,0);this.J(this.TD,0);this.J(this.TE,0);this.J(this.AdR,0);this.J(this.Ay
,0);this.Y.Em=[this,this.Fk];this.RS.ZA(A.aaL(A.fl.H6));this.RS.ZB(A.aaL(A.fl.H6
));this.RS.Au([B=this.XV,B.B$,B.Cc]);this.RS.CK(this.XV);this.TC.ZA(A.aaL(A.fl.H6
));this.TC.ZB(A.aaL(A.fl.H6));this.TC.Au([B=this.VA,B.B$,B.Cc]);this.TC.CK(this.
VA);this.TD.ZA(A.aaL(A.fl.H6));this.TD.ZB(A.aaL(A.fl.H6));this.TD.Au([B=this.VB,
B.B$,B.Cc]);this.TD.CK(this.VB);this.TE.ZA(A.aaL(A.fl.H6));this.TE.ZB(A.aaL(A.fl.
H6));this.TE.Au([B=this.Aa1,B.B$,B.Cc]);this.TE.CK(this.Aa1);this.AdR.AR=[this,this.
BBB];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Y._Done();this.
RS._Done();this.TC._Done();this.TD._Done();this.TE._Done();this.AdR._Done();this.
XV._Done();this.VA._Done();this.VB._Done();this.Aa1._Done();this.Ay._Done();C.Fs.
_Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.Y._ReInit();this.
RS._ReInit();this.TC._ReInit();this.TD._ReInit();this.TE._ReInit();this.AdR._ReInit(
);this.XV._ReInit();this.VA._ReInit();this.VB._ReInit();this.Aa1._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.TF));this.RS.T(A._GetAutoObject(A.Device.Helper
).MN(A.aaR(A.acf.Ajl),Pc,AIj));this.TC.T(A._GetAutoObject(A.Device.Helper).MN(A.
aaR(A.acf.Ajl),Pc,AIk));this.TD.T(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.
Ajl),Pc,AIl));this.TE.T(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.Ajl),Pc
,AIm));this.AdR.T(A.aaR(A.acf.A$I));},_Mark:function(D){var B;C.Fs._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aa1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cm={BI:
A.abi(27,0,null),Du:function(){return 16;},C7:function(aIndex){if(aIndex>=27)return-
1;return this.BI.Get(aIndex);},DZ:function(A8){var O=0;while(O<27){if(this.BI.Get(
O)===A8)return O;O=O+1;}return-1;},H8:function(){var O=0;var max=-1;while(O<27){
if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.BI=[]).__proto__=C.Cm.BI;this.__proto__=C.Cm;
},_className:"Application::ArraySelection"};C.AutoAction={Ig:null,Ac$:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AtI],this.Ac$,0);A.pe([this,this.
AtI],this);},Du:function(){return this.Ig.Ng();},C7:function(aIndex){if(aIndex>=
this.Du())return-1;return this.Ig.OM(aIndex);},Gm:function(aIndex){return this.ActionToString.
BT(this.C7(aIndex));},DZ:function(A8){var O=0;while(O<this.Du()){if(this.Ig.OM(O
)===A8)return O;O=O+1;}return-1;},H8:function(){var O=0;var max=-1;while(O<this.
Du()){if(this.Ig.OM(O)>max)max=this.Ig.OM(O);O=O+1;}return max;},AtI:function(G){
this.Q=this.Ac$.OM(this.Index);A.abo([this,this.B$,this.Cc],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ig=A._GetAutoObject(C.Au1);this.Ac$=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ig)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AMk={AtF:0,Init:function(aArg
){var B;A.zX([this,this.Be_],[B=A._GetAutoObject(A.Device.Device),B.A8P,B.Bbw],0
);A.zX([this,this.Be7],[B=A._GetAutoObject(A.Device.Device),B.ASJ,B.A0G],0);A.pe([
this,this.Be_],this);A.pe([this,this.Be7],this);},Clear:function(){C.VF.Clear.call(
this);this.AtF=0;},Ci:function(){A._GetAutoObject(A.Device.Device).ArN(this.AtF);
A._GetAutoObject(A.Device.Device).ArO(this.toString());},Be_:function(G){this.AtF=
A._GetAutoObject(A.Device.Device).Ps;A.we(this,0);},Be7:function(G){this.E3(A._GetAutoObject(
A.Device.Device).AuN);A.we(this,0);},N3:function(Eh){if((this.AtF&(((B=Eh)<0)?B+
0x100000000:B))===(((B=Eh)<0)?B+0x100000000:B))return true;return false;},AU1:function(
Eh){this.AtF=this.AtF|(((B=Eh)<0)?B+0x100000000:B);},_Init:function(aArg){C.VF._Init.
call(this,aArg);this.__proto__=C.AMk;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Ps={_Init:function(){C.AMk._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AMl={VD:null,Ay:null,Y:null,JV:null,CQ:function(
){this.AiN(this);},Init:function(aArg){A.zV([this,this.AiN],this.VD,0);A.pe([this
,this.AiN],this);},DF:function(G){C.Fs.DF.call(this,G);this.MZ(this);},Ls:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.Ew];this.BQ.Ce=[
this,this.A3I];this.BQ.Ca=[this,this.A4b];this.BQ.C4(A.aaL(A.ach.Arm));this.BQ.Ct(
A.aaL(A.ach.Are));this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},Ew:function(G){if(
this.Bzk()>0){this.ABn();this.AaP(this);}else A._GetAutoObject(A.Device.Device).
AY(28,true,A.jV,0,null);},AiN:function(G){this.Ao9();var O;for(O=0;O<this.VD.Ng(
);O=O+1){var To=A._GetAutoObject(C.Ps).OM(O);this.A1O(To);}this.J(this.JV,0);A.aaS([
this,this.MZ],this);},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]
);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},MZ:function(G){var
B;this.Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.
AV,true,null,null);},A1O:function(Ha){var Azo=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sm,0);Aa.T(Azo.BT(Ha));Aa.Aj(true);Aa.G7=Ha;Aa.A_F(this.
VD.N3(Ha));this.J(Aa,0);this.ZL(Aa);},Ao9:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdO=X;X=X.Ah;if(((AdO.U&0x400)===0x400))this.HR(
AdO);}},ABn:function(){var B;this.VD.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JV)){var Aa=(C.Sm.isPrototypeOf(
X)?X:null);if(!!Aa){this.VD.J(Aa.G7);if(Aa.ASU())this.VD.AU1(Aa.G7);}else A.ab5(
"%s",AyC);}X=X.Ah;}this.VD.Ci();},Bzk:function(){var B;var A4I=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JV)){var
Aa=(C.Sm.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASU())A4I=A4I+1;}else A.ab5("%s"
,AyC);}X=X.Ah;}return A4I;},A3I:function(G){var B;var Aa=(C.Sm.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAD=(C.Sm.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAD){this.
AhG(AAD,Aa);A.pe([this,this.MZ],this);}}},A4b:function(G){var B;var Aa=(C.Sm.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AA$=(C.Sm.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AA$
){this.AhG(Aa,AA$);A.pe([this,this.MZ],this);}}},AqS:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiN],this);},_Init:function(
aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Ave._Init.call(this.JV={I:this},0);this.__proto__=C.AMl;
this.H(Rs);this.Text.R(A.aaR(A.acf.AEz));this.Ay.H(Ix);this.Y.H(L9);this.Y.JZ(1);
this.JV.H(AIn);this.JV.Aj(true);this.JV.T(A.aaR(A.acf.AqS));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JV,0);this.Y.Em=[this,this.Fk];this.JV.AR=[this,this.AqS
];this.VD=A._GetAutoObject(C.Ps);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Ay._Done();this.Y._Done();this.JV._Done();C.Fs._Done.call(this);},_ReInit:
function(){C.Fs._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JV._ReInit(
);this.Text.R(A.aaR(A.acf.AEz));this.JV.T(A.aaR(A.acf.AqS));this.CQ();},_Mark:function(
D){var B;C.Fs._Mark.call(this,D);if((B=this.VD)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sm={G7:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Ho(10);},Bl:function(aSize){C.Ui.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mu.M[0]));},Ai:function(Ae){var B;C.Ui.Ai.call(this,Ae);var Hf=((Ae&0x10
)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FT=A.jb.Aed;var G0=A.jb.
Bm;if(this.Hm){FT=A.jb.Bm;G0=A.jb.Text;}if(!Hf){this.Background.L(FT);this.V.L(A.
jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(G0);
}this.LN=Hf;this.KM=Fw;this.Qz=GE;},H1:function(G){this.A3$(this);},A3$:function(
G){this.AFk(!this.AmI);},A_F:function(E){this.AFk(E);},ASU:function(){return this.
AmI;},_Init:function(aArg){C.Ui._Init.call(this,aArg);this.__proto__=C.Sm;this.Mu.
H(AIo);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.VF={CB:0,
Ig:A.abi(17,0,null),OM:function(HB){return this.Ig.Get(HB);},Ng:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ig.Set(O,0);this.CB=0;},J:function(
Eh){if(this.CB>=17)A.ab5("%s",AIp);else{this.Ig.Set(this.CB,Eh);this.CB=this.CB+
1;}},Ci:function(){},E3:function(AcZ){var AJz=AcZ.indexOf(String.fromCharCode(0x2C
),0);var A2a=A.jV;var O=0;this.CB=0;while(O<17)if(AcZ===A.jV){this.Ig.Set(O,0);O++;
}else{if(AJz===-1){A2a=AcZ;AcZ=A.jV;}else{A2a=A.abV(AcZ,AJz);AcZ=A.ab1(AcZ,0,AJz+
1);}var To=A.abZ(A2a,0,10)|0;if(this.AEc(To)){this.Ig.Set(this.CB,To);this.CB=this.
CB+1;O++;}AJz=AcZ.indexOf(String.fromCharCode(0x2C),0);}if(AcZ!==A.jV)A.ab5("%s"
,AyD);},toString:function(){var A3o=(((B=this.Ig.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A3o=(A3o+AyE)+(((B=this.Ig.Get(O))<0)?B+0x100000000:
B).toFixed();return A3o;},AxF:function(HB,Eh){if(HB>=this.CB){A.ab5("%s",((((AYj+
HB.toFixed())+AYk)+this.CB.toFixed())+AYl)+AYm);return;}this.Ig.Set(HB,Eh);},Contains:
function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(this.Ig.Get(O)===Eh)return true;return false;
},AEc:function(Eh){return true;},DZ:function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(
this.Ig.Get(O)===Eh)return O;return-1;},_Init:function(aArg){(this.Ig=[]).__proto__=
C.VF.Ig;this.__proto__=C.VF;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AM3={Init:function(aArg){var B;A.zX([this,this.Bfi],[B=A._GetAutoObject(A.Device.
Device),B.A80,B.BbE],0);A.pe([this,this.Bfi],this);},Ci:function(){A._GetAutoObject(
A.Device.Device).Akw(this.toString());},AEc:function(Eh){switch(Eh){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bfi:function(
G){this.E3(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.VF._Init.call(this,aArg);this.__proto__=C.AM3;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AM3._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Wv={VC:null,KC:null,A7M:A.jV,Action:0,A5m:false,A$t:false,Bac:false,Bl:function(
aSize){C.Fo.Bl.call(this,aSize);this.Q6.H(this.Mz.M);this.OL.H(this.Q6.M);},Ai:function(
Ae){C.Fo.Ai.call(this,Ae);if(!this.LN){this.KC.T6.L(A.jb.Am9);this.KC.QO.Z(true);
this.KC.QO.L(A.jb.ARm);}else if(this.Qz){this.KC.T6.L(A.jb.Bm);this.KC.QO.Z(false
);}else if(this.KM){this.KC.T6.L(A.jb.Bm);this.KC.QO.Z(false);}else{this.KC.T6.L(
A.jb.Text);this.KC.QO.Z(true);this.KC.QO.L(A.jb.CU);}},Bmr:function(E){if(this.Action===
E)return;this.Action=E;},Bnx:function(E){if(this.A7M===E)return;this.A7M=E;this.
VC.Text.R(E);},AT2:function(E){if(this.Bac===E)return;this.Bac=E;this.KC.Boj(!this.
KC.AVp);},AFV:function(E){if(this.A$t===E)return;this.A$t=E;this.KC.Z(!this.KC.Fq(
));},A96:function(E){if(this.A5m===E)return;this.A5m=E;this.VC.Z(E);},_Init:function(
aArg){C.Fo._Init.call(this,aArg);C.VC._Init.call(this.VC={I:this},0);C.KC._Init.
call(this.KC={I:this},0);this.__proto__=C.Wv;this.H(AYn);this.Background.H(AYo);
this.G_.As(false);this.G_.Z(false);this.VC.H(AYp);this.VC.Z(false);this.KC.H(AYq
);this.KC.Z(false);this.J(this.VC,0);this.J(this.KC,0);this.Mz.Ax(A.aaL(A.ach.ANy
));},_Done:function(){this.__proto__=C.Fo;this.VC._Done();this.KC._Done();C.Fo._Done.
call(this);},_ReInit:function(){C.Fo._ReInit.call(this);this.VC._ReInit();this.KC.
_ReInit();},_Mark:function(D){var B;C.Fo._Mark.call(this,D);if((B=this.VC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.VC={AL:null,Text:null,BW:null,Init:function(
aArg){this.Text.H(this.M);this.BW.H(this.M);this.AL.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BW._Init.call(this.BW={I:this},0);this.__proto__=
C.VC;this.AL.H(AYr);this.AL.L(A.jb.Bj_);this.H(AYs);this.Text.H(AYt);this.Text.L(
A.jb.Text);this.BW.H(AYu);this.BW.Nu(1);this.BW.L(A.jb.Text);this.J(this.AL,0);this.
J(this.Text,0);this.J(this.BW,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AL._Done();this.Text._Done();this.BW._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AL._ReInit();this.Text._ReInit();this.BW._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.KC={QO:null
,T6:null,AVp:false,Boj:function(E){if(this.AVp===E)return;this.AVp=E;if(E){this.
T6.Ax(A.aaL(A.ach.ACR));this.QO.Ax(A.aaL(A.ach.ACR));}else{this.T6.Ax(A.aaL(A.ach.
AqM));this.QO.Ax(A.aaL(A.ach.AqM));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QO={I:this},0);A.acg.Ap._Init.call(this.T6={I:this
},0);this.__proto__=C.KC;this.H(AyF);this.QO.H(AyF);this.QO.Cw(1);this.T6.H(AyF);
this.T6.Cw(0);this.J(this.QO,0);this.J(this.T6,0);this.QO.Ax(A.aaL(A.ach.AqM));this.
T6.Ax(A.aaL(A.ach.AqM));},_Done:function(){this.__proto__=A.Core.P;this.QO._Done(
);this.T6._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QO._ReInit();this.T6._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T6).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASo={
Gf:null,Cd:null,Dp:null,Dj:null,Kx:null,Zr:10,Ara:0,AEK:0,ASC:0,Azn:false,L1:false
,Bdl:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Lm(
))A._GetAutoObject(A.Device.Device).AY(41,true,A._GetAutoObject(A.Device.Device).
An.HM().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gs();A._GetAutoObject(
A.Device.Helper).Aqp(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAS],this.
Db.Q,0);A.zX([this,this.BBk],this.Dp.Q,0);A.zX([this,this.ABI],this.Dj.Q,0);A.zX([
this,this.ABI],this.Dj.HJ.Q,0);A.zX([this,this.ABI],[this,this.AS1,this.AFT],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A9Y,B.Bb8],0);A.zX([this
,this.BfR],this.Cd.Q,0);A.pe([this,this.AAS],this);A.pe([this,this.GH],this);A.pe([
this,this.ABI],this);A.pe([this,this.BfR],this);},CC:function(G){if(!this.Azn){this.
Azn=true;A.pe([this,this.AcW],this);}else C.H3.CC.call(this,G);},Agk:function(G){
this.ASC=this.Zr;this.Bdt(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.E7();A._GetAutoObject(C.A7).FB();},Auu:function(){this.N.CS(A.jV);this.N.C4(
A.aaL(A.ach.ADX));this.N.Ca=[this,this.Ay9];},AAM:function(G){A._GetAutoObject(C.
A7).Cb(55);},AFT:function(E){if(this.Zr===E)return;this.Zr=E;A.abo([this,this.AS1
,this.AFT],0);},Bdt:function(G){var F;if(!this.Zr||(this.Bdl===true)){A._GetAutoObject(
A.Device.Device).AY(24,false,CR,0,null);if(this.AEK===1)A._GetAutoObject(A.Device.
Device).AY(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).AY(23,
true,this.AEK.toFixed(),2000,null);this.Ew(this);return;}this.Gf.Gs();this.Gf.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gf.N7(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gf.Q9(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gf.J0(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gf.Nr(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gf.P1(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gf.SP(A._GetAutoObject(A.Device.Helper).W.VisualId);var Aly=A._GetAutoObject(
A.Device.Helper).A16(this.Gf,(F=this.Dj.H4.Hv,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Aly)this.Ai3();else{A._GetAutoObject(A.Device.Helper).AKz(
this.Gf,Aly,(F=this.Dj.H4.Hv,F[1].call(F[0])),this.Zr-1,[this,this.ApN]);A._GetAutoObject(
A.Device.Device).AY(24,false,CR,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am$())this.C$.Z(true);else this.C$.Z(false);if(this.L1){this.Dp.
Z(false);this.Cd.T(A.aaR(A.acf.ACY));this.Cd.AFm(A.aaL(A.ach.Afg));}else{this.Dp.
Z(true);this.Cd.T(A.aaR(A.acf.Ak8));this.Cd.AFm(null);}if((this.Y.BjJ(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JN(this.Y.TX(this.AV,0x1));this.Am();
},ATw:function(E){if(this.Ara===E)return;this.Ara=E;A.abo([this,this.A9c,this.ATw
],0);},ABI:function(G){var F;var AKl=(F=this.Dj.Q,F[1].call(F[0]));var AAu=-1;switch((
F=this.Dj.H4.Hv,F[1].call(F[0]))){case 0:AAu=AKl+((F=A._GetAutoObject(A.Device.Helper
).Bd1(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zr-1));break;case 1:AAu=(AKl+this.
Zr)-1;break;case 3:case 2:case 5:case 4:switch(this.Dj.HJ.AC.Q){case 0:AAu=(AKl+
this.Zr)-1;break;case 1:AAu=(AKl-this.Zr)+1;break;default:throw new Error(AYv+this.
Dj.HJ.AC.Q.toFixed());}break;default:throw new Error(AYw+this.Dj.HJ.AC.Q.toFixed(
));}this.ATw(AAu);},BBk:function(G){A.pe([this,this.GH],this);A.pe([this,this.Aud
],this);},AAS:function(G){A._GetAutoObject(A.Device.Helper).AVX(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
L1);A.pe([this,this.ABI],this);},ApN:function(G){var F;var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case 22:case 21:case 48:if((
Ar.Id===48)&&(Ar.PopupState===7))this.ApH();else switch((F=this.Dj.H4.Hv,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.JN(this.Dj);break;case 0:this.JN(this.Dp
);break;case 1:this.JN(this.Cd);break;default:throw new Error(AyG+(F=this.Dj.H4.
Hv,F[1].call(F[0])).toFixed());}break;case 25:this.JN(this.Cd);break;case 47:if(
Ar.PopupState===7)this.ApH();else{this.JN(this.Dj);this.JN(this.Cd);}break;case 43:{
this.JN(this.Dj);this.JN(this.Dp);}break;case 42:{this.JN(this.Dj);this.JN(this.
Cd);}break;case 41:break;default:A.ab5("%s%e",Ati,Ar.Id);}},Ai3:function(){this.
Gf.Ci(A._GetAutoObject(A.Device.Device).An);this.AEK=this.AEK+1;if(A._GetAutoObject(
A.Device.Helper).Am$()){if(A._GetAutoObject(A.Device.Device).Bt.Lm()){A._GetAutoObject(
A.Device.Device).AY(24,false,U8,0,null);A._GetAutoObject(A.Device.Device).AY(50,
true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),0,null);}else{var Md=A.
_GetAutoObject(A.Device.Device).An.LZ(0,this.Gf.Id);A._GetAutoObject(A.Device.Device
).SW(Md);var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(this.Gf.
Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(this.Gf.DateOfBirth);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}this.ApH();},ApH:function(){var B;var F,Cu;if(!!(F=this.Cd.
Q,F[1].call(F[0]))){(F=this.Cd.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.L1)(
Cu=this.Dp.Q,Cu[2].call(Cu[0],(F=this.Cd.Q,F[1].call(F[0]))));}if(!this.L1)(Cu=this.
Dp.Q,Cu[2].call(Cu[0],A._GetAutoObject(A.Device.Helper).Bau(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dp.Q,F[1].call(
F[0])),this.Dp.AjP(),this.Dp.AjR())));var I3=null;switch((F=this.Dj.H4.Hv,F[1].call(
F[0]))){case 3:I3=[B=A._GetAutoObject(A.Device.Device),B.Awm,B.Ay1];break;case 2:
I3=[B=A._GetAutoObject(A.Device.Device),B.Awn,B.Ay2];break;case 4:case 5:I3=[B=A.
_GetAutoObject(A.Device.Device),B.Any,B.AoF];break;default:;}if(!!I3){switch((F=
this.Dj.Kr.V2,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dj.Q,F[2].call(F[0],I3[1].call(I3[0])));
}var XR=100-((this.Zr/this.ASC)*100);A._GetAutoObject(A.Device.Device).AY(24,true
,(((this.ASC.toFixed()+Atj)+(XR|0).toFixed())+Atj)+(F=this.Dj.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBu]);this.AFT(this.Zr-1);A.aaS([this,this.Bdt],null);},BBu:
function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.
PopupState===5))this.Bdl=true;},ApO:function(G){var F;C.H3.ApO.call(this,G);var Ao2=
0;switch((F=this.B0.Q,F[1].call(F[0]))){case 0:case 2:Ao2=A._GetAutoObject(A.Device.
Device).AdV;break;case 1:Ao2=730;break;default:A.ab5("%s%e",Ali,(F=this.B0.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q9(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmO(Ao2));(F=this.C$.Q,F[2].call(
F[0],this.C$.An3));switch(this.B0.AC.Q){case 0:{this.Kx.Jg(A.aaR(A.acf.ANt));this.
Kx.IW(A.aaR(A.acf.ANu));}break;case 1:{this.Kx.Jg(A.aaR(A.acf.Biq));this.Kx.IW(A.
aaR(A.acf.Bir));}break;case 2:{this.Kx.Jg(A.aaR(A.acf.Bkw));this.Kx.IW(A.aaR(A.acf.
Bkx));}break;default:throw new Error(Ali);}},Ae6:function(E){if(this.L1===E)return;
this.L1=E;A.abo([this,this.Awp,this.Ae6],0);},Aud:function(G){var F,Cu,Tk;this.Ae6(((
F=this.Cd.Q,F[1].call(F[0]))===(Cu=this.Dp.Q,Cu[1].call(Cu[0])))&&!!(Tk=this.Cd.
Q,Tk[1].call(Tk[0])));A.pe([this,this.GH],this);},BfR:function(G){A.pe([this,this.
Aud],this);},AS1:function(){return this.Zr;},A9c:function(){return this.Ara;},Awp:
function(){return this.L1;},_Init:function(aArg){C.H3._Init.call(this,aArg);C.Av8.
_Init.call(this.Cd={I:this},0);C.Re._Init.call(this.Dp={I:this},0);C.AGY._Init.call(
this.Dj={I:this},0);C.AVb._Init.call(this.Kx={I:this},0);this.__proto__=C.ASo;var
B;this.Dr(C.ADA);this.Cd.H(Aos);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak8));this.
Cd.ArV(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsF));this.Cd.ArW(A.
aaR(A.acf.Ako));this.Dp.H(AYx);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uo));this.
Dp.Ar$(false);this.Dj.H(AYy);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.A7z));this.Dj.
Bx(0);this.Kx.H(AYz);this.Kx.Aj(true);this.Kx.T(A.aaR(A.acf.A8G));this.Kx.Gb(1);
this.Kx.EV(500);this.Kx.IW(A.aaR(A.acf.ANu));this.Kx.Jg(A.aaR(A.acf.ANt));this.Kx.
A_w(A.aaR(A.acf.Ara)+A.aaR(A.acf.Colon));this.J(this.Cd,0);this.J(this.Dp,0);this.
J(this.Dj,0);this.J(this.Kx,0);this.Gf=A._NewObject(A.Device.Animal,0);this.Cd.AR=[
this,this.AcW];this.Cd.L5([this,this.AcW]);this.Cd.L8(A.aaL(A.ach.Afg));this.Cd.
Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArK,B.P1]);this.Cd.OU([B=A._GetAutoObject(
A.Device.Device),B.Ur,B.U_]);this.Cd.PZ([B=A._GetAutoObject(A.Device.Device),B.Us
,B.U$]);this.Cd.Uu([B=A._GetAutoObject(A.Device.Device),B.Anv,B.AoE]);this.Cd.Ae6([
this,this.Awp,this.Ae6]);this.Dp.Gt([this,this.D_,this.GU]);this.Dp.L5([this,this.
AcW]);this.Dp.L8(A.aaL(A.ach.Afg));this.Dp.Uw([B=this.Gender.Animal,B.WJ,B.J0]);
this.Dp.OU([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.Dp.PZ([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Dp.Uu([B=A._GetAutoObject(A.Device.Device),B.Anv
,B.AoE]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Anz,B.Nr]);this.Dp.
AnB([B=this.AnimalType.Animal,B.PY,B.EC]);this.Dj.Gt([this,this.D_,this.GU]);this.
Dj.L5([B=this.Dj,B.FW]);this.Dj.L8(A.aaL(A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArL,B.SP]);this.Dj.A97(A._GetAutoObject(A.Device.Helper).W);
this.Kx.Au([this,this.AS1,this.AFT]);this.Kx.BmV([this,this.A9c,this.ATw]);this.
Init(aArg);},_Done:function(){this.__proto__=C.H3;this.Cd._Done();this.Dp._Done(
);this.Dj._Done();this.Kx._Done();C.H3._Done.call(this);},_ReInit:function(){C.H3.
_ReInit.call(this);this.Cd._ReInit();this.Dp._ReInit();this.Dj._ReInit();this.Kx.
_ReInit();this.Cd.T(A.aaR(A.acf.Ak8));this.Cd.ArV(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.AsF));this.Cd.ArW(A.aaR(A.acf.Ako));this.Dp.T(A.aaR(A.acf.
Uo));this.Dj.T(A.aaR(A.acf.A7z));this.Kx.T(A.aaR(A.acf.A8G));this.Kx.IW(A.aaR(A.
acf.ANu));this.Kx.Jg(A.aaR(A.acf.ANt));this.Kx.A_w(A.aaR(A.acf.Ara)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.H3._Mark.call(this,D);if((B=this.Gf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUE={BX:null,RatingMode:null,Ls:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Ce=null;this.BQ.CE=[this,this.AaP];this.BQ.CS(A.jV
);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.AUE;var B;this.
H(Rs);this.BX.H(Aov);this.BX.T(A.aaR(A.acf.Bam));this.J(this.BX,0);this.BX.Au([B=
this.RatingMode,B.B$,B.Cc]);this.BX.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.BX._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit(
);this.RatingMode._ReInit();this.BX.T(A.aaR(A.acf.Bam));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bgs],[B=A._GetAutoObject(A.Device.Device),B.AS5,B.A0R],0);A.pe([this,this.Bgs],this
);},Du:function(){return 2;},Gm:function(aIndex){return this.RatingModeToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axa(E);},Bgs:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.BI.Set(0,0);this.BI.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cm;this.RatingModeToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANN={W2:
function(G){C.AmA.W2.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aq7()){
A._GetAutoObject(A.Device.Helper).W.AkD(false);A._GetAutoObject(A.Device.Helper).
W.Ci(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.AmA._Init.call(
this,aArg);this.__proto__=C.ANN;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hj={DL:A.jV,T:function(E){if(this.DL===E)return;this.DL=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hj;},_className:"Application::BaseItem"
};C.AWb={BX:null,WeightRecordingMode:null,Ls:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Ce=null;this.BQ.CE=[this,this.AaP];this.BQ.CS(A.jV
);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BX._Init.call(this.BX={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AWb;var B;this.H(Rs);this.BX.H(Aov);this.BX.T(A.aaR(A.acf.As3));this.BX.EV(1);
this.J(this.BX,0);this.BX.Au([B=this.WeightRecordingMode,B.B$,B.Cc]);this.BX.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BX.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BX._ReInit();this.WeightRecordingMode.
_ReInit();this.BX.T(A.aaR(A.acf.As3));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Du:function(){return 2;},Gm:function(aIndex){return this.
WeightRecordingModeToString.BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Axn(E);},Init:function(aArg){var B;A.zX([this
,this.Bhy],[B=A._GetAutoObject(A.Device.Device),B.A9X,B.Bb7],0);A.pe([this,this.
Bhy],this);},Bhy:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
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
B._cycle=D);},_className:"Application::AutoOnOff"};C.Ax3={A7N:function(){var B;this.
AxG(1);this.Jz(0,3);this.VO(0,0,(B=this.M)[3]-B[1]);this.A5p(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A5p(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VY(0);},_Init:
function(aArg){C.ABV._Init.call(this,aArg);this.__proto__=C.Ax3;},_className:"Application::Triangle"
};C.AUf={Y:null,Init:function(aArg){this.ByH(this);},ByG:function(Qh){var Aa=A._NewObject(
C.ANU,0);Aa.H(BD);Aa.T(Qh);Aa.Aj(true);Aa.As(false);Aa.Bi(true);this.J(Aa,0);this.
AtH(this);},AtH:function(G){var B;var AlG=1;var A3f=0;var X=this.Y.Ah;var Cy=null;
var K$=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.O4.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALu=(B=Cy.V.B7.A7q(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.Mx.isPrototypeOf(X)?X:null))ALu=ALu+20;if(A3f<ALu)A3f=ALu;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(AlG*28)));AlG=AlG+1;}else{K$=(A.acg.C8.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K$){var Di=((B=this.M)[3]-B[1])-((AlG-1)*28);K$.DN([this.
M[0],K$.Et[1]]);K$.DN([K$.Et[0],Di]);K$.DD([this.M[0]+120,K$.ED[1]]);K$.DD([K$.ED[
0],Di]);}}X=X.Ah;}this.BCc(A3f,28);},BCc:function(aWidth,BxP){var B;var X=this.Y.
Ah;var Cy=null;var K$=null;aWidth=aWidth+20;if(aWidth>(C.AsG[0]-10))aWidth=C.AsG[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.O4.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A6(0x14);Cy.V.Text.Ho(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,BxP));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K$=(
A.acg.C8.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K$){K$.DN([this.M[
2]-aWidth,K$.Et[1]]);K$.DD([this.M[2],K$.ED[1]]);}}X=X.Ah;}},ByH:function(G){var
Aa=A._GetAutoObject(C.BS).AqW;while(!!Aa){if(!!(C.Axu.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axu.isPrototypeOf(Aa)?Aa:null);this.ByF(EF.DL,EF.AR,EF.Bw,EF.ARu);}else
if(!!(C.Axw.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axw.isPrototypeOf(Aa)?Aa:null);
this.ByM(EF.DL,EF.AR,EF.Bw,EF.WI,EF.W4);}else if(!!(C.ZH.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.ZH.isPrototypeOf(Aa)?Aa:null);this.ByE(EF.DL,EF.AR,EF.Bw);}else if(
!!(C.AkJ.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkJ.isPrototypeOf(Aa)?Aa:null);this.
ByG(EF.DL);}else if(!!(C.AGq.isPrototypeOf(Aa)?Aa:null))this.ByN();Aa=Aa.ME;}A._GetAutoObject(
C.BS).Clear();A.pe([this,this.AtH],this);},ByE:function(Qh,Ac6,Ah9){var Aa=A._NewObject(
C.Mx,0);Aa.H(BD);Aa.T(Qh);Aa.AR=Ac6;Aa.Aj(true);Aa.As(Ah9);Aa.Bi(true);this.J(Aa
,0);this.AtH(this);},ByN:function(){var K$=A._NewObject(A.acg.C8,0);K$.L(A.jb.Bm
);K$.Aj(true);K$.Nu(3);this.J(K$,0);this.AtH(this);},ByF:function(Qh,Ac6,Ah9,A1p
){var Aa=A._NewObject(C.AmM,0);Aa.H(BD);Aa.T(Qh);Aa.AR=Ac6;Aa.Aj(true);Aa.As(Ah9
);Aa.Bi(true);Aa.Au(A1p);this.J(Aa,0);this.AtH(this);},ByM:function(Qh,Ac6,Ah9,A3w
,Agu){var Aa=A._NewObject(C.ANT,0);Aa.H(BD);Aa.T(Qh);Aa.AR=Ac6;Aa.Aj(true);Aa.As(
Ah9);Aa.Bi(true);Aa.BnV(A3w);Aa.AF7(Agu);this.J(Aa,0);this.AtH(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AUf;this.H(Rs);this.Y.H(Rs);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afl={_Init:
function(){A.acl.Afl._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A$p={AqW:null,Ahp:null,Mp:function(Qh){var EF=A._NewObject(
C.AkJ,0);EF.DL=Qh;this.J(EF);},Clear:function(){this.AqW=null;this.Ahp=null;},Fz:
function(){var K$=A._NewObject(C.AGq,0);this.J(K$);},J:function(BcJ){if(!this.AqW
){this.AqW=BcJ;this.Ahp=this.AqW;}else{this.Ahp.ME=BcJ;this.Ahp=this.Ahp.ME;}},TG:
function(Qh,Ac6){var EF=A._NewObject(C.ZH,0);EF.DL=Qh;EF.AR=Ac6;this.J(EF);},BhH:
function(Qh,Ac6,A1p){var EF=A._NewObject(C.Axu,0);EF.DL=Qh;EF.AR=Ac6;EF.ARu=A1p;
this.J(EF);},Aa3:function(Qh){var EF=A._NewObject(C.ZH,0);EF.DL=Qh;EF.Bw=false;this.
J(EF);},ABZ:function(Qh,Ac6,A3w,Agu){var EF=A._NewObject(C.Axw,0);EF.DL=Qh;EF.AR=
Ac6;EF.WI=A3w;EF.W4=Agu;this.J(EF);},_Init:function(aArg){this.__proto__=C.A$p;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ahp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BS={_Init:function(){C.A$p._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axv={ME:null,_Init:function(aArg){this.__proto__=
C.Axv;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.ME)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOQ={Amy:null,ArP:function(E){if(this.Amy===
E)return;if(!!this.Ab)this.Ab.ZL(this);if(!!this.Amy)this.AqO(this.Amy,A._GetAutoObject(
C.AsK),null,null,null,null,false);this.Amy=E;if(!!this.Amy)this.AkO(this.Amy,A._GetAutoObject(
C.AsK),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOQ;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amy)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WS={_Init:function(){C.AOQ._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
N9={Init:function(aArg){var C2=A._NewObject(C.AUg,0);C2.H(this.M);this.AkO(C2,A.
_GetAutoObject(C.An1),null,A._GetAutoObject(C.An1),A._GetAutoObject(C.An1),null,
null,null,null,false);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.
__proto__=C.N9;this.H(Rs);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.AsK={_Init:function(){C.AVd._Init.call(this,0);this.ACW=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AUg={AL:null,_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);this.
__proto__=C.AUg;this.H(AIq);this.CZ(0);this.AL.A1(0x3F);this.AL.H(AIq);this.AL.L(
0xAAFFFFFF);this.J(this.AL,0);},_Done:function(){this.__proto__=A.Core.P;this.AL.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.AL._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.AL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AVc={Si:function(){var B;var Ao=(A.acl.Afd.isPrototypeOf(B=A.acl.Aep.Si.call(this
))?B:null);if(!Ao)throw new Error(Ate);Ao.Cp.Cx=255;Ao.Cp.B3=0;return Ao;},Sh:function(
){var B;var Ao=(A.acl.Axt.isPrototypeOf(B=A.acl.Aep.Sh.call(this))?B:null);if(!Ao
)throw new Error(Ate);Ao.E0.Cx=0;Ao.E0.B3=255;Ao.Dt=true;return Ao;},_Init:function(
aArg){A.acl.Aep._Init.call(this,aArg);this.__proto__=C.AVc;},_className:"Application::ShadeOverlayTransition"
};C.An1={_Init:function(){C.AVc._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkX={An3:0,A2A:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Iv.Ai.call(this,Ae);this.BU.L(this.V.AQ);if(!!this.Q){
var BDl=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BU.R((A.
_GetAutoObject(A.Device.Converter).Alb(BDl)+CR)+A._GetAutoObject(A.acj.DU).Af8()
);else this.BU.R(A.aaR(A.acf.Ako));}},Ki:function(G){var B;var Bhv=(this.A2A===false
)&&(this.AM<=this.Gr);if(Bhv)this.Bx(this.An3);this.A46(this.AM,4);if(Bhv){this.
Bx(this.AM-this.Aj6);this.A2A=true;}C.Iv.Ki.call(this,G);},Kd:function(G){this.A46(
this.AM,5);C.Iv.Kd.call(this,G);},Bx:function(E){this.A46(E,4);E=(((E+((this.Aj6
/2)|0))/this.Aj6)|0)*this.Aj6;if(!E)this.A2A=false;C.Iv.Bx.call(this,E);},Ahx:function(
E){if(this.An3===E)return;this.An3=E;},A46:function(Bxx,GA){this.ATz(A._GetAutoObject(
A.acj.DU).Bd5(Bxx,GA));},_Init:function(aArg){C.Iv._Init.call(this,aArg);this.__proto__=
C.AkX;this.H(K4);this.An3=this.Gr;this.J5(this.H9,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEL={None:0,Left:1,BFi:2,Right:3};C.AmC={Xy:
null,FE:null,Ek:null,Background:null,Ann:null,Gd:null,KS:A.jV,AEs:null,Init:function(
aArg){var B;A.zV([this,this.Agd],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A4c],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);A.pe([this,this.
LU],this);A.pe([this,this.A4c],this);this.Bb(this.Ek);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DK(this);},Ls:function(){if(!this.BQ)this.BQ=A._NewObject(
C.N,0);return this.BQ;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xy);},CC:function(G){C.OverlayMenu.CC.call(this,G);this.
AK6();},Agj:function(G){var Aa=(C.ACs.isPrototypeOf(G)?G:null);var Ht;if(!!Aa)Ht=
Aa.Ht;else Ht=this.Gd.FO();if(Ht>=A._GetAutoObject(A.Device.Device).An.B_())return;
A._GetAutoObject(A.Device.Helper).GT(Ht);A.pe([this,this.AaP],this);},AK6:function(
){},Agd:function(G){this.Am();},A35:function(G){if(this.Gd.FO()<(A._GetAutoObject(
A.Device.Device).An.B_()-1))this.Gd.GW(this.Gd.FO()+1);},A36:function(G){if(this.
Gd.FO()>0)this.Gd.GW(this.Gd.FO()-1);},DK:function(G){var Gi=A._GetAutoObject(A.
Device.Device).An.B_();var M2=this.BQ;if(!M2)return;M2.C3(A.aaL(A.ach.AeD));M2.CE=[
this,this.AaP];if(Gi<=0){M2.Ct(null);M2.C4(null);M2.Ce=null;M2.Ca=null;M2.WV=false;
M2.ZK=false;}else if(Gi===1){M2.Ct(null);M2.C4(A.aaL(A.ach.AeE));M2.Ce=null;M2.Ca=[
this,this.Agj];M2.WV=false;M2.ZK=false;}else{M2.Ct(A.aaL(A.ach.Are));M2.C4(A.aaL(
A.ach.Arm));M2.Ce=[this,this.A35];M2.Ca=[this,this.A36];M2.WV=true;M2.ZK=true;}}
,LU:function(G){this.BgS(this);this.Xy=A._GetAutoObject(A.Device.Device).An.Filter;
this.AK6();},BnN:function(E){if(this.AEs===E)return;this.AEs=E;A.pe([this,this.BBh
],this);},BBh:function(G){this.BgS(this);},BgS:function(G){var B;if(!!this.FE)this.
HR(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(this.AEs,0))?B:null);if(!
!this.FE){this.FE.H(AYA);this.J(this.FE,0);}},A4c:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DM(1,4
))this.Gd.Dl(A.aaR(A.acf.ASw));else this.Gd.Dl(this.KS);},Dl:function(E){if(this.
KS===E)return;this.KS=E;A.pe([this,this.A4c],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Ann={I:this},0);C.Gd._Init.call(
this.Gd={I:this},0);this.__proto__=C.AmC;this.H(Rs);this.Ek.H(BD);this.Ek.A_z(A.
jb.CU);this.Ek.A_A(A.jb.Text);this.Background.H(Ff);this.Background.L(A.jb.Bpr);
this.Ann.H(AIr);this.Ann.L(A.jb.CU);this.Gd.H(AIr);this.Gd.N8(C.ACs);this.AEs=C.
APV;this.KS=A.aaR(A.acf.Awa);this.J(this.Ek,0);this.J(this.Background,0);this.J(
this.Ann,0);this.J(this.Gd,0);this.Ek.AR=[this,this.Agj];this.Ek.Ab_(A._NewObject(
C.YC,0));this.Gd.Zy(A._GetAutoObject(A.Device.Device).An);this.Gd.ZC([this,this.
Agj]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ek._Done(
);this.Background._Done();this.Ann._Done();this.Gd._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ek._ReInit();this.
Background._ReInit();this.Ann._ReInit();this.Gd._ReInit();this.Dl(A.aaR(A.acf.Awa
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xy)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ann)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACs={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.Dg(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;if(!!this.AX){this.T(this.AX.CF(Ad,1).toFixed());this.DS.EC(this.AX.Am1(
Ad,14));this.DS.AFo(this.AX.Ja(Ad,13));this.DS.Ae5(this.AX.H7(Ad,8));this.DS.Uy(
this.AX.H7(Ad,11));this.DS.Ae9(this.AX.H7(Ad,12));this.DS.Ae$(this.AX.CF(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.ACs;this.
H(Oi);this.AP.L(A.jb.Bc);this.DS.H(AYB);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.YC={Q:null,Init:function(aArg){var
B;this.ABh(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft]);},AE6:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fa();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Nw(FilterCriterion
);var Ai7=this.Akr();if(Ai7>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai7,false);Filter.CX(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.Ae1(false);},BwX:function(s){this.AE6(
s);},ABh:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fa();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?B:null);if(!!FilterCriterion
)Filter.Nw(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BHb:function(s){
this.ABh(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcY],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcY],E,0);if(!!E)A.pe([this,this.
AcY],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwU(-1);return;}var Azj=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DM(1,4))?B:null);if(!Azj){this.AW.AwU(0);this.AW.Ae1(true);}else
this.AW.AwU(Azj.A5);},AcY:function(s){this.C5(s);},_Init:function(aArg){C.AjU._Init.
call(this,aArg);this.__proto__=C.YC;this.AW.AwU(0);this.AW.Dk=[this,this.BwX];this.
Init(aArg);},_Mark:function(D){var B;C.AjU._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqR={BirthType:null,EaseOfDelivery:null,Cd:null,Ef:null,AbQ:null,G8:null,Cn:
null,AbO:null,ANb:false,Init:function(aArg){this.ANb=A._GetAutoObject(A.Device.Helper
).W.Arp();if(this.ANb)this.Ae0(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.Ae0(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cd.
L5([this,this.AcW]);this.Cd.L8(A.aaL(A.ach.Afg));this.Cd.AR=[this,this.AcW];}this.
Ef.Ar$(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Cd.Q,0);A.pe([this,this.GH],this);},Agk:function(G
){if(((this.Ef.Asu===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARy(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).AY(21,true,A._GetAutoObject(A.Device.Converter).Rm(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ci(
A._GetAutoObject(A.Device.Device).An);if(this.KP>0){if(this.ANb){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LZ(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B2=A._NewObject(A.Device.Rating,0);B2.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYC,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.KP);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A7).FB();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A7).FB();},Auu:function(
){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.Am8));this.N.Ca=[this,this.Ay9];},AAM:function(
G){A._GetAutoObject(C.A7).Cb(32);},GH:function(G){var F;var Js=(F=this.Ef.Q,F[1].
call(F[0]));var ABF=(F=this.Cd.Q,F[1].call(F[0]));var A41=true;if(!!Js&&(ABF===Js
))A41=false;A._GetAutoObject(A.Device.Helper).J6(this.Cd,A41);this.Ef.BmN(!A41);
},_Init:function(aArg){C.H3._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Av8._Init.
call(this.Cd={I:this},0);C.Re._Init.call(this.Ef={I:this},0);C.Acu._Init.call(this.
AbQ={I:this},0);C.BX._Init.call(this.G8={I:this},0);C.SX._Init.call(this.Cn={I:this
},0);C.BX._Init.call(this.AbO={I:this},0);this.__proto__=C.AqR;var B;this.Cd.H(Ah3
);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak8));this.Cd.ArV(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CR)+A.aaR(A.acf.AsF));this.Cd.ArW(A.aaR(A.acf.Ako));this.Ef.H(Ah3);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Uo));this.AbQ.H(AYD);this.AbQ.Aj(true);this.
AbQ.T(A.aaR(A.acf.GO));this.G8.H(Ah3);this.G8.Aj(true);this.G8.T(A.aaR(A.acf.ArA
));this.Cn.H(Ah3);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aei));this.Cn.AFZ(true);
this.AbO.H(Ah3);this.AbO.Aj(true);this.AbO.T(A.aaR(A.acf.AgN));this.J(this.Cd,-1
);this.J(this.Ef,-1);this.J(this.AbQ,-1);this.J(this.G8,-1);this.J(this.Cn,-1);this.
J(this.AbO,-1);this.BirthType.L6(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
L6(A._GetAutoObject(A.Device.Helper).W);this.Cd.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArK,B.P1]);this.Ef.Gt([this,this.D_,this.GU]);this.Ef.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anz,B.Nr]);this.AbQ.Gt([this,this.D_,this.GU]);this.AbQ.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.ArL,B.SP]);this.G8.Au([B=this.BirthType,
B.B$,B.Cc]);this.G8.CK(this.BirthType);this.Cn.Gt([this,this.D_,this.GU]);this.Cn.
L5([B=this.Cn,B.FW]);this.Cn.L8(A.aaL(A.ach.Edit));this.Cn.Acc([B=A._GetAutoObject(
A.Device.Helper).W,B.Awj,B.Q9]);this.AbO.Au([B=this.EaseOfDelivery,B.B$,B.Cc]);this.
AbO.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
H3;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cd._Done();this.Ef._Done(
);this.AbQ._Done();this.G8._Done();this.Cn._Done();this.AbO._Done();C.H3._Done.call(
this);},_ReInit:function(){C.H3._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cd._ReInit();this.Ef._ReInit();this.AbQ._ReInit();
this.G8._ReInit();this.Cn._ReInit();this.AbO._ReInit();this.Cd.T(A.aaR(A.acf.Ak8
));this.Cd.ArV(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsF));this.
Cd.ArW(A.aaR(A.acf.Ako));this.Ef.T(A.aaR(A.acf.Uo));this.AbQ.T(A.aaR(A.acf.GO));
this.G8.T(A.aaR(A.acf.ArA));this.Cn.T(A.aaR(A.acf.Aei));this.AbO.T(A.aaR(A.acf.AgN
));},_Mark:function(D){var B;C.H3._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G8)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acu={FN:null,AW:null,A_:0,H1:function(G){C.Ds.H1.call(this,G);if(!this.A_)this.
FW(this);else this.He(this);},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hy.Z(false
);this.H9.Z(false);if(this.A_===1){this.Bb(this.AW);if(this.Hm){this.AW.FP(A.jb.
CJ);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.
Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hm)this.AW.FP(A.jb.CJ);
else this.AW.FP(A.jb.CU);this.Bb(null);}},Bx:function(E){var F;var BP=this.AM;C.
Ds.Bx.call(this,E);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Uq,this.BbI],0);},DK:function(G){var F;if(!
this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkT((F=
this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},He:function(G){this.Ex(0
);},Ex:function(EO){var F;if(!this.A_)this.FN.AjD((F=this.N,F[1].call(F[0])));this.
A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.A_=1;if(this.A_===1)this.AW.
SV(7);this.DK(this);this.Am();},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.ARs._Init.call(this.AW={I:this},0);this.__proto__=C.Acu;this.H(U4);this.EV(999999
);this.V.R(Atk);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H9.Z(false);this.AW.H(AYE
);this.AW.ATH(6);this.J(this.AW,0);this.AW.Au([this,this.Uq,this.BbI]);this.FN=A.
_NewObject(C.Aex,0);},_Done:function(){this.__proto__=C.Ds;this.AW._Done();C.Ds.
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
};C.AuT={Y:null,QU:null,N4:null,Ee:null,PO:null,PL:null,PM:null,Ay:null,Ge:null,
ReasonOfLeaving:null,AhE:null,Nc:0,AmQ:false,ACw:true,AOJ:false,Asp:false,Init:function(
aArg){A.zX([this,this.A94],[this,this.A9u,this.ATK],0);this.Ahu(A._GetAutoObject(
A.Device.Helper).W.AhX(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A94],this);},DF:function(G){
var B;var Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;break;case 7:Fi=7;break;
case 4:Fi=4;break;case 5:Fi=5;break;default:;}X=this.QM(X,Fi,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HK(X,true,null,null);},Al8:function(G
){A._GetAutoObject(C.A7).FB();},ApS:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(A.
Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmQ){A._GetAutoObject(A.Device.Helper).W.Ae7(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A7s(A._GetAutoObject(A.Device.Helper).Dv(),this.Asp);}A._GetAutoObject(A.Device.
Helper).W.AFY(this.ReasonOfLeaving.C7((F=this.N4.Q,F[1].call(F[0]))));if(this.ACw
)A._GetAutoObject(A.Device.Helper).W.P1(0);if(this.Asp)A._GetAutoObject(A.Device.
Helper).W.AwW(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);this.A$0();},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},Ahu:function(E){
if(this.Nc===E)return;this.Nc=E;},Anw:function(){return this.Nc;},BfT:function(G
){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.PopupState===
4)||(Ar.PopupState===3)){A._GetAutoObject(C.A7).FB();A._GetAutoObject(A.Device.Helper
).AsA();}},A94:function(G){switch(this.Asp){case false:this.Ee.T(A.aaR(A.acf.AWd
));break;case true:this.Ee.T(A.aaR(A.acf.Brr));break;default:;}},ATK:function(E){
if(this.Asp===E)return;this.Asp=E;},A9u:function(){return this.Asp;},A$0:function(
){A._GetAutoObject(A.Device.Device).AY(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfT]);},Bnb:function(E){if(this.AOJ===E)return;
this.AOJ=E;},Blx:function(){return this.AOJ;},BmD:function(E){if(this.ACw===E)return;
this.ACw=E;},Blm:function(){return this.ACw;},BmL:function(E){if(this.AmQ===E)return;
this.AmQ=E;},Blt:function(){return this.AmQ;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afr._Init.call(this.QU={I:this
},0);C.AsJ._Init.call(this.N4={I:this},0);C.AkX._Init.call(this.Ee={I:this},0);C.
Afr._Init.call(this.PO={I:this},0);C.Afr._Init.call(this.PL={I:this},0);C.Afr._Init.
call(this.PM={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Ge._Init.call(this.
Ge={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
AhE._Init.call(this.AhE={I:this},0);this.__proto__=C.AuT;var B;this.N.Z(true);this.
N.CS(A.aaR(A.acf.Unregister));this.Dr(C.IP);this.Y.H(Ff);this.Y.JZ(1);this.QU.H(
Aao);this.QU.Aj(true);this.QU.T(A.aaR(A.acf.AmQ));this.QU.Bi(true);this.QU.ZF(false
);this.QU.Gb(-1);this.QU.EV(1);this.N4.H(U7);this.N4.Aj(true);this.N4.T(A.aaR(A.
acf.ReasonOfLeaving));this.N4.Bi(true);this.N4.ZF(false);this.Ee.H(Ah2);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AWd));this.Ee.Bi(false);this.Ee.Gb(1000);this.Ee.
EV(999000);this.PO.H(U7);this.PO.Aj(true);this.PO.T(A.aaR(A.acf.A5C));this.PO.Bi(
true);this.PO.ZF(false);this.PO.Bx(1);this.PO.Gb(-1);this.PO.EV(1);this.PL.H(Aao
);this.PL.Aj(true);this.PL.T(A.aaR(A.acf.A5D));this.PL.Bi(true);this.PL.ZF(false
);this.PL.Bx(1);this.PL.Gb(-1);this.PL.EV(1);this.PM.H(U7);this.PM.Aj(true);this.
PM.T(A.aaR(A.acf.A6d));this.PM.Bi(true);this.PM.ZF(false);this.PM.Bx(1);this.PM.
Gb(-1);this.PM.EV(1);this.Ay.H(Ayv);this.Ge.Au(0);this.J(this.Y,0);this.J(this.QU
,0);this.J(this.N4,0);this.J(this.Ee,0);this.J(this.PO,0);this.J(this.PL,0);this.
J(this.PM,0);this.J(this.Ay,0);this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk
];this.QU.Au([B=this.Ge,B.B$,B.Cc]);this.QU.CK(this.Ge);this.QU.AkE([this,this.Blt
,this.BmL]);this.N4.Gt([this,this.D_,this.GU]);this.N4.L5([B=this.N4,B.FW]);this.
N4.L8(A.aaL(A.ach.Edit));this.N4.Au([B=this.ReasonOfLeaving,B.B$,B.Cc]);this.N4.
CK(this.ReasonOfLeaving);this.N4.AnE(this.AhE);this.Ee.Au([this,this.Anw,this.Ahu
]);this.PO.Au([B=this.Ge,B.B$,B.Cc]);this.PO.CK(this.Ge);this.PO.AkE([this,this.
Blx,this.Bnb]);this.PL.Au([B=this.Ge,B.B$,B.Cc]);this.PL.CK(this.Ge);this.PL.AkE([
this,this.A9u,this.ATK]);this.PM.Au([B=this.Ge,B.B$,B.Cc]);this.PM.CK(this.Ge);this.
PM.AkE([this,this.Blm,this.BmD]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Y._Done();this.QU._Done();this.N4._Done();this.Ee._Done();this.PO._Done(
);this.PL._Done();this.PM._Done();this.Ay._Done();this.Ge._Done();this.ReasonOfLeaving.
_Done();this.AhE._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Y._ReInit();this.QU._ReInit();this.N4._ReInit();this.Ee._ReInit(
);this.PO._ReInit();this.PL._ReInit();this.PM._ReInit();this.Ay._ReInit();this.Ge.
_ReInit();this.ReasonOfLeaving._ReInit();this.AhE._ReInit();this.N.CS(A.aaR(A.acf.
Unregister));this.QU.T(A.aaR(A.acf.AmQ));this.N4.T(A.aaR(A.acf.ReasonOfLeaving));
this.Ee.T(A.aaR(A.acf.AWd));this.PO.T(A.aaR(A.acf.A5C));this.PL.T(A.aaR(A.acf.A5D
));this.PM.T(A.aaR(A.acf.A6d));},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.N4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhE)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"};C.
AVb={AjN:null,PD:null,Avg:AYF,Bl:function(aSize){C.Iv.Bl.call(this,aSize);this.V.
H([0,0,aSize[0],40]);this.BU.H([0,40,aSize[0],80]);this.Hy.H([0,this.BU.M[1],40,
this.BU.M[3]]);this.H9.H([aSize[0]-40,this.BU.M[1],aSize[0],this.BU.M[3]]);},Ai:
function(Ae){var F;C.Iv.Ai.call(this,Ae);this.PD.L(this.V.AQ);if(!!this.AjN){if((
F=this.AjN,F[1].call(F[0]))===-1)this.PD.R(this.Avg+AIs);else this.PD.R((this.Avg+
CR)+(F=this.AjN,F[1].call(F[0])).toFixed());}else this.PD.R(this.Avg);},A3N:function(
G){this.Am();},BmV:function(E){if(A.aaZ(this.AjN,E))return;if(!!this.AjN)A.z$([this
,this.A3N],this.AjN,0);this.AjN=E;if(!!E)A.zX([this,this.A3N],E,0);if(!!E)A.pe([
this,this.A3N],this);},A_w:function(E){if(this.Avg===E)return;this.Avg=E;this.Am(
);},_Init:function(aArg){C.Iv._Init.call(this,aArg);C.CG._Init.call(this.PD={I:this
},0);this.__proto__=C.AVb;this.H(AYG);this.V.H(AYH);this.V.A6(0x12);this.PD.H(AYI
);this.PD.A6(0x12);this.PD.L(A.jb.Bm);this.J(this.PD,0);this.PD.S(A.aaL(A.fl.Af)
);this.PD.A0(A.aaL(A.fl.Ak));this.PD.Cr(null);},_Done:function(){this.__proto__=
C.Iv;this.PD._Done();C.Iv._Done.call(this);},_ReInit:function(){C.Iv._ReInit.call(
this);this.PD._ReInit();this.PD.S(A.aaL(A.fl.Af));this.PD.A0(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Iv._Mark.call(this,D);if((B=this.AjN)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMu={Y:null,JU:null,Sy:null,Ay:null,AqF:2500,ANK:24,DF:function(G){var B;var
Fi=0;var X=this.AV;switch(this.Cq.CP){case 6:Fi=2;break;case 7:Fi=7;break;case 4:
Fi=4;break;case 5:Fi=5;break;default:;}X=this.QM(X,Fi,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HK(X,true,null,null);},Al8:function(G){A._GetAutoObject(
C.A7).FB();},ApS:function(G){},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1)
)[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},BmG:function(
E){if(this.AqF===E)return;this.AqF=E;},Blo:function(){return this.AqF;},BmH:function(
E){if(this.ANK===E)return;this.ANK=E;},Blp:function(){return this.ANK;},Blc:function(
G){var F,Cu;this.JU.BU.L(this.JU.V.AQ);if(!!this.JU.Q)this.JU.BU.R((((String.fromCharCode(((
F=this.JU.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Ale)+String.fromCharCode(((
Cu=this.JU.Q,Cu[1].call(Cu[0]))+10000).toFixed().charCodeAt(2)||0))+CR)+this.JU.
AHp);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Iv._Init.call(this.JU={I:this},0);C.Iv._Init.call(this.Sy={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMu;this.N.Z(true);this.
Dr(C.IP);this.Y.H(Ff);this.Y.JZ(1);this.JU.H(Ah2);this.JU.Aj(true);this.JU.T(A.aaR(
A.acf.AqF));this.JU.Bi(false);this.JU.Gb(0);this.JU.EV(5000);this.JU.IW(A.aaR(A.
acf.Af$));this.JU.Jg(A.aaR(A.acf.Af$));this.JU.ATz(100);this.Sy.H(U7);this.Sy.Aj(
true);this.Sy.T(A.aaR(A.acf.A$z));this.Sy.Bi(true);this.Sy.Bx(24);this.Sy.Gb(10);
this.Sy.EV(33);this.Sy.IW(AYJ);this.Ay.H(Ayv);this.J(this.Y,0);this.J(this.JU,0);
this.J(this.Sy,0);this.J(this.Ay,0);this.N.C3(A.aaL(A.ach.YH));this.Y.Em=[this,this.
Fk];this.JU.Au([this,this.Blo,this.BmG]);this.JU.A_6([this,this.Blc]);this.Sy.Au([
this,this.Blp,this.BmH]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JU._Done();this.Sy._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JU._ReInit();this.Sy._ReInit();this.
Ay._ReInit();this.JU.T(A.aaR(A.acf.AqF));this.JU.IW(A.aaR(A.acf.Af$));this.JU.Jg(
A.aaR(A.acf.Af$));this.Sy.T(A.aaR(A.acf.A$z));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.ArC={EaseOfDelivery:null,BirthType:null,Cd:null,Dp:null,Dj:null,Cn:null,Ee:null
,G8:null,Ln:null,Nc:0,L1:false,Init:function(aArg){A.zX([this,this.GH],this.Cd.Q
,0);A.zX([this,this.GH],this.Dp.Q,0);A.zX([this,this.AAS],this.Db.Q,0);A.zX([this
,this.Bfq],this.Cn.Dm,0);A.zX([this,this.Bfk],this.C$.Q,0);A.zX([this,this.Aud],
this.Cd.Q,0);A.zX([this,this.Aud],this.Dp.Q,0);A.pe([this,this.AAS],this);A.pe([
this,this.GH],this);A.pe([this,this.Bfq],this);A.pe([this,this.Bfk],this);A.pe([
this,this.Aud],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.E7();A.
_GetAutoObject(C.A7).FB();},Agk:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.B0.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhJ
){var AlS=A._GetAutoObject(A.Device.Helper).AhJ.AO7();A._GetAutoObject(A.Device.
Helper).W.Ab$(AlS);A._GetAutoObject(A.Device.Helper).W.AnJ(AlS);}var Aly=A._GetAutoObject(
A.Device.Helper).A16(A._GetAutoObject(A.Device.Helper).W,(F=this.Dj.H4.Hv,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Aly){this.Ai3();A.pe([this,this.
Bxj],this);}else A._GetAutoObject(A.Device.Helper).AKz(A._GetAutoObject(A.Device.
Helper).W,Aly,(F=this.Dj.H4.Hv,F[1].call(F[0])),0,[this,this.ApN]);},Auu:function(
){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.AD7));this.N.Ca=[this,this.Ay9];},Ai3:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);var Md=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SW(Md);var Bej=false;if(A._GetAutoObject(
A.Device.Helper).Am$()){if(A._GetAutoObject(A.Device.Device).Bt.Lm()){Bej=true;A.
_GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(A.Device.Device).Bt.
HM().toFixed(),0,null);}else{var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7T()&&(Bej===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}var I3=null;switch((F=this.
Dj.H4.Hv,F[1].call(F[0]))){case 3:I3=[B=A._GetAutoObject(A.Device.Device),B.Awm,
B.Ay1];break;case 2:I3=[B=A._GetAutoObject(A.Device.Device),B.Awn,B.Ay2];break;case
4:case 5:I3=[B=A._GetAutoObject(A.Device.Device),B.Any,B.AoF];break;default:;}if(
!!I3)switch((F=this.Dj.Kr.V2,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).Bau(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjP(),this.Dp.AjR());},Ap$:function(G){A.
_GetAutoObject(C.A7).FB();},Bxj:function(s){this.Ap$(s);},AAM:function(G){A._GetAutoObject(
C.A7).Cb(49);},Ahu:function(E){if(this.Nc===E)return;this.Nc=E;A.abo([this,this.
Anw,this.Ahu],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am$())this.
C$.Z(true);else this.C$.Z(false);if(A._GetAutoObject(A.Device.Helper).A7T())this.
Ee.Z(true);else this.Ee.Z(false);if(this.L1){this.Dp.Z(false);this.Cd.T(A.aaR(A.
acf.ACY));this.Cd.AFm(A.aaL(A.ach.Afg));}else{this.Dp.Z(true);this.Cd.T(A.aaR(A.
acf.Ak8));this.Cd.AFm(null);}},AAS:function(G){A._GetAutoObject(A.Device.Helper).
AVX(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.L1);},Bfq:function(G){A.pe([this,this.Bhk],this);},Bfk:function(G){A.pe([this
,this.Bhk],this);},Bhk:function(G){var F,Cu,Tk;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahx(A._GetAutoObject(A.Device.Helper
).AhX(A._GetAutoObject(A.Device.Helper).Abz((F=this.B0.Q,F[1].call(F[0]))),(Cu=this.
Cn.Dm,Cu[1].call(Cu[0])),2,(Tk=this.B0.Q,Tk[1].call(Tk[0]))));break;case 2:this.
Ee.Ahx(A._GetAutoObject(A.Device.Helper).AhX(this.KP,(F=this.Cn.Dm,F[1].call(F[0
])),2,(Cu=this.B0.Q,Cu[1].call(Cu[0]))));break;default:;}},ApN:function(G){var F;
var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id
){case 22:case 21:switch((F=this.Dj.H4.Hv,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JN(this.Dj);break;case 0:this.JN(this.Dp);break;case 1:this.JN(this.
Cd);break;default:throw new Error(AyG+(F=this.Dj.H4.Hv,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JN(this.Dj);this.JN(this.Dp);}break;case 25:case 42:{this.
JN(this.Dj);this.JN(this.Cd);}break;case 41:break;default:A.ab5("%s%e",Ati,Ar.Id
);}},ApO:function(G){var F;C.H3.ApO.call(this,G);var Ao2=0;switch((F=this.B0.Q,F[
1].call(F[0]))){case 0:case 2:Ao2=A._GetAutoObject(A.Device.Device).AdV;break;case
1:Ao2=730;break;default:A.ab5("%s%e",Ali,(F=this.B0.Q,F[1].call(F[0])));}(F=this.
Cn.Dm,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmO(Ao2)));(F=this.C$.Q,F[2].call(F[0],this.C$.An3));this.Ee.Ahx(A._GetAutoObject(
A.Device.Helper).W.AhX(1));},Ae6:function(E){if(this.L1===E)return;this.L1=E;A.abo([
this,this.Awp,this.Ae6],0);},Aud:function(G){var F,Cu,Tk;this.Ae6(((F=this.Cd.Q,
F[1].call(F[0]))===(Cu=this.Dp.Q,Cu[1].call(Cu[0])))&&!!(Tk=this.Cd.Q,Tk[1].call(
Tk[0])));A.pe([this,this.GH],this);},Anw:function(){return this.Nc;},Awp:function(
){return this.L1;},_Init:function(aArg){C.H3._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Av8._Init.call(this.Cd={I:this},0);C.Re._Init.call(this.Dp={I:this}
,0);C.AGY._Init.call(this.Dj={I:this},0);C.SX._Init.call(this.Cn={I:this},0);C.AkX.
_Init.call(this.Ee={I:this},0);C.BX._Init.call(this.G8={I:this},0);C.BX._Init.call(
this.Ln={I:this},0);this.__proto__=C.ArC;var B;this.Dr(C.ADz);this.CH.H(AcU);this.
Cd.H(Aos);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak8));this.Cd.ArV(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsF));this.Cd.ArW(A.aaR(A.acf.Ako));this.
Dp.H(Aos);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uo));this.Dp.Ar$(false);this.Dj.
H(AYK);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.GO));this.Dj.Bx(0);this.Cn.H(AcU);
this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aei));this.Cn.AFZ(true);this.Ee.H(AcU);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.Nc));this.Ee.Gb(1000);this.Ee.EV(999000);this.
G8.H(AcU);this.G8.Aj(true);this.G8.T(A.aaR(A.acf.ArA));this.Ln.H(AcU);this.Ln.Aj(
true);this.Ln.T(A.aaR(A.acf.AgN));this.J(this.Cd,-3);this.J(this.Dp,-3);this.J(this.
Dj,-3);this.J(this.Cn,-3);this.J(this.Ee,-2);this.J(this.G8,-1);this.J(this.Ln,-
1);this.EaseOfDelivery.L6(A._GetAutoObject(A.Device.Helper).W);this.BirthType.L6(
A._GetAutoObject(A.Device.Helper).W);this.Cd.AR=[this,this.AcW];this.Cd.L5([this
,this.AcW]);this.Cd.L8(A.aaL(A.ach.Afg));this.Cd.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArK,B.P1]);this.Cd.OU([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_
]);this.Cd.PZ([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.Cd.Uu([B=A._GetAutoObject(
A.Device.Device),B.Anv,B.AoE]);this.Cd.Ae6([this,this.Awp,this.Ae6]);this.Dp.Gt([
this,this.D_,this.GU]);this.Dp.L5([this,this.AcW]);this.Dp.L8(A.aaL(A.ach.Afg));
this.Dp.Uw([B=this.Gender.Animal,B.WJ,B.J0]);this.Dp.OU([B=A._GetAutoObject(A.Device.
Device),B.Ur,B.U_]);this.Dp.PZ([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);
this.Dp.Uu([B=A._GetAutoObject(A.Device.Device),B.Anv,B.AoE]);this.Dp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Anz,B.Nr]);this.Dp.AnB([B=this.AnimalType.Animal,B.PY,B.EC]
);this.Dj.Gt([this,this.D_,this.GU]);this.Dj.L5([B=this.Dj,B.FW]);this.Dj.L8(A.aaL(
A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArL,B.SP]);this.
Dj.A97(A._GetAutoObject(A.Device.Helper).W);this.Cn.Gt([this,this.D_,this.GU]);this.
Cn.L5([B=this.Cn,B.FW]);this.Cn.L8(A.aaL(A.ach.Edit));this.Cn.Acc([B=A._GetAutoObject(
A.Device.Helper).W,B.Awj,B.Q9]);this.Ee.Au([this,this.Anw,this.Ahu]);this.G8.Au([
B=this.BirthType,B.B$,B.Cc]);this.G8.CK(this.BirthType);this.Ln.Au([B=this.EaseOfDelivery
,B.B$,B.Cc]);this.Ln.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.H3;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cd._Done(
);this.Dp._Done();this.Dj._Done();this.Cn._Done();this.Ee._Done();this.G8._Done(
);this.Ln._Done();C.H3._Done.call(this);},_ReInit:function(){C.H3._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cd._ReInit();this.
Dp._ReInit();this.Dj._ReInit();this.Cn._ReInit();this.Ee._ReInit();this.G8._ReInit(
);this.Ln._ReInit();this.Cd.T(A.aaR(A.acf.Ak8));this.Cd.ArV(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsF));this.Cd.ArW(A.aaR(A.acf.Ako));this.Dp.T(
A.aaR(A.acf.Uo));this.Dj.T(A.aaR(A.acf.GO));this.Cn.T(A.aaR(A.acf.Aei));this.Ee.
T(A.aaR(A.acf.Nc));this.G8.T(A.aaR(A.acf.ArA));this.Ln.T(A.aaR(A.acf.AgN));},_Mark:
function(D){var B;C.H3._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ln)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHx={Ia:null,AhO:null,AgY:null,AhP:null,AgZ:null,AnimalType:null,Background:
null,N5:null,Ro:null,V:null,T1:null,YK:null,AbL:null,PX:null,DL:A.jV,AG0:true,CQ:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Aob();this.
Ax4();},Aob:function(){var F,Cu;var LK=0;var Amm=0;var AlL=0;var Ih=0;if((((!!this.
AhO&&!!this.AhP)&&!!this.AgY)&&!!this.AgZ)&&!!this.AnimalType){Amm=(F=this.AhO,F[
1].call(F[0]));AlL=(F=this.AgY,F[1].call(F[0]));LK=A._GetAutoObject(A.Device.Helper
).Mf((F=this.AhP,F[1].call(F[0])),(Cu=this.AgZ,Cu[1].call(Cu[0])));Ih=(F=this.AnimalType
,F[1].call(F[0]));}var Lb=A.jb.Text;var Azr=A.jb.CU;if(!!LK){var ALO=A._GetAutoObject(
A.acj.DU).AlF(LK,Amm,AlL);Azr=A._GetAutoObject(A.acj.DU).Az6(ALO,Ih);Lb=A._GetAutoObject(
A.acj.DU).Az8(ALO,Ih);}this.Background.L(Azr);this.T1.L(Lb);this.Ro.L(Lb);this.N5.
L(Lb);this.AbL.L(Lb);if(Lb===A.jb.Bm)this.YK.L(Lb);else this.YK.L(A.jb.CJ);this.
V.L(Lb);this.PX.L(Lb);},Ax4:function(){var F,Cu;var LK=0;var Amm=0;var AlL=0;if(((
!!this.AhO&&!!this.AhP)&&!!this.AgY)&&!!this.AgZ){Amm=(F=this.AhO,F[1].call(F[0]
));AlL=(F=this.AgY,F[1].call(F[0]));LK=A._GetAutoObject(A.Device.Helper).Mf((F=this.
AhP,F[1].call(F[0])),(Cu=this.AgZ,Cu[1].call(Cu[0])));}if(!!LK){var ALO=A._GetAutoObject(
A.acj.DU).AlF(LK,Amm,AlL);this.Ro.R(A._GetAutoObject(A.Device.Converter).Td(ALO,
2,true));this.N5.Z(true);this.Ro.Z(true);this.PX.Z(false);}else{this.N5.Z(false);
this.Ro.Z(false);this.PX.Z(true);}this.T1.R(this.BzW(AlL-Amm,LK));this.AbL.Z(this.
AG0);this.YK.Z(this.AG0);this.N5.R(A._GetAutoObject(A.acj.DU).AaE());},BzW:function(
A1L,Ah_){var B;if(Ah_<0){A.ab5("%s",AYL);return A.jV;}var Iz=(AYM+A._GetAutoObject(
A.acj.DU).Af8())+CR;var FX=A._GetAutoObject(A.Device.Converter).Alb(A1L);if(!A1L
)FX=A.abU(FX,AYN,0);else if(A1L>0)FX=A.abU(FX,AIt,0);Iz=this.BgA(Iz,AYO,FX);if(Ah_===
1)Iz=Iz+A.aaR(A.acf.Bj6);else{Iz=Iz+A.aaR(A.acf.Bj7);Iz=this.BgA(Iz,AYP,Ah_.toFixed(
));}return Iz;},BgA:function(aString,BcO,Byj){if(aString===A.jV){A.ab5("%s",AYQ);
return A.jV;}var A3u=aString.indexOf(BcO,0);if(A3u>=0){aString=A.ab1(aString,A3u
,BcO.length);aString=A.abU(aString,Byj,A3u);}return aString;},AT0:function(E){if(
A.aaZ(this.AhO,E))return;if(!!this.AhO)A.z$([this,this.C5],this.AhO,0);this.AhO=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmS:function(
E){if(A.aaZ(this.AgY,E))return;if(!!this.AgY)A.z$([this,this.C5],this.AgY,0);this.
AgY=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},AT1:function(
E){if(A.aaZ(this.AhP,E))return;if(!!this.AhP)A.z$([this,this.C5],this.AhP,0);this.
AhP=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmT:function(
E){if(A.aaZ(this.AgZ,E))return;if(!!this.AgZ)A.z$([this,this.C5],this.AgZ,0);this.
AgZ=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(
G){this.Am();},T:function(E){if(this.DL===E)return;this.DL=E;this.V.R(E);},A_5:function(
E){if(this.AG0===E)return;this.AG0=E;this.Am();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C5],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.N5={I:this},0);A.acg.Text._Init.call(this.Ro={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.T1={I:this},0);A.acg.
Ap._Init.call(this.YK={I:this},0);A.acg.Ap._Init.call(this.AbL={I:this},0);C.CG.
_Init.call(this.PX={I:this},0);this.__proto__=C.AHx;this.H(AfI);this.Background.
A1(0x3F);this.Background.H(AfI);this.N5.H(AYR);this.N5.R(A._GetAutoObject(A.acj.
DU).AaE());this.N5.A6(0x9);this.N5.L(A.jb.Text);this.Ro.H(AYS);this.Ro.A6(0x14);
this.Ro.R(A.aaR(A.acu.Akm));this.Ro.L(A.jb.Text);this.V.A1(0x1D);this.V.H(AYT);this.
V.R(A.aaR(A.acf.AuJ));this.V.A6(0x12);this.V.L(A.jb.Text);this.T1.H(Aan);this.YK.
A1(0x14);this.YK.H(AIu);this.YK.Cw(1);this.AbL.A1(0x14);this.AbL.H(AIu);this.AbL.
Cw(0);this.PX.H(AYU);this.PX.R(A.aaR(A.acf.A5j));this.J(this.Background,0);this.
J(this.N5,0);this.J(this.Ro,0);this.J(this.V,0);this.J(this.T1,0);this.J(this.YK
,0);this.J(this.AbL,0);this.J(this.PX,0);this.N5.S(A.aaL(A.fl.EK));this.N5.A0(A.
aaL(A.fl.Af));this.N5.Cr(A.aaL(A.fl.HL));this.Ro.S(A.aaL(A.fl.Aew));this.V.S(A.aaL(
A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));this.T1.S(A.aaL(A.
fl.Af));this.T1.A0(A.aaL(A.fl.Ak));this.T1.Cr(A.aaL(A.fl.Bh));this.YK.Ax(A.aaL(A.
ach.AB7));this.AbL.Ax(A.aaL(A.ach.AB7));this.Ia=A._NewObject(A.Device.Rating,0);
this.PX.S(A.aaL(A.fl.Af));this.PX.A0(A.aaL(A.fl.Ak));this.PX.Cr(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N5._Done(
);this.Ro._Done();this.V._Done();this.T1._Done();this.YK._Done();this.AbL._Done(
);this.PX._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N5._ReInit();this.Ro._ReInit();this.V.
_ReInit();this.T1._ReInit();this.YK._ReInit();this.AbL._ReInit();this.PX._ReInit(
);this.Ro.R(A.aaR(A.acu.Akm));this.V.R(A.aaR(A.acf.AuJ));this.PX.R(A.aaR(A.acf.A5j
));this.N5.S(A.aaL(A.fl.EK));this.N5.A0(A.aaL(A.fl.Af));this.N5.Cr(A.aaL(A.fl.HL
));this.Ro.S(A.aaL(A.fl.Aew));this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));
this.V.Cr(A.aaL(A.fl.Bh));this.T1.S(A.aaL(A.fl.Af));this.T1.A0(A.aaL(A.fl.Ak));this.
T1.Cr(A.aaL(A.fl.Bh));this.PX.S(A.aaL(A.fl.Af));this.PX.A0(A.aaL(A.fl.Ak));this.
PX.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhO)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgZ)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ro)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AWe={Animal:null,Rating:null,Cq:null,AD:null,AZ:
0,Hn:function(G){var B;if(!this.Animal||!this.Rating)return;var Gh=this.AD.G7;var
CA=(C.AHx.isPrototypeOf(B=this.AD.Cj)?B:null);if(!CA)return;CA.EC([B=this.Animal
,B.PY,B.EC]);CA.BmS([B=A._GetAutoObject(A.Device.Device),B.AE4,B.AJa]);CA.BmT([B=
this.Rating,B.A9L,B.OnSetTimestamp]);switch(Gh%this.AZ){case 1:{CA.AT0([B=this.Animal
,B.A9k,B.AFF]);CA.AT1([B=this.Animal,B.A9M,B.AF9]);CA.T(A.aaR(A.acf.AuJ));}break;
default:if(this.Animal.Arp()){CA.AT0([B=this.Animal,B.ASS,B.AwR]);CA.AT1([B=this.
Animal,B.AS9,B.Axh]);CA.T(A.aaR(A.acf.AMa));}else{CA.AT0([B=this.Animal,B.ASS,B.
AwR]);CA.AT1([B=this.Animal,B.AS9,B.Axh]);CA.T(A.aaR(A.acf.BhC));}}if(this.AZ>1)
CA.A_5(true);else CA.A_5(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GP
]));},DF:function(G){if(this.AZ>0)switch(this.Cq.CP){case 6:this.CE(this);break;
case 7:this.Ca(this);break;default:this.Cq.Mw=true;}},L6:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.JD(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.JD(1);else{this.JD(2);this.AD.GW(1);this.
AD.HK(this.AD.Gu,true,null,null);}if(this.AZ>0)this.AD.AbN(0,this.AZ-1);},AkF:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AZ>0)this.AD.AbN(0,this.AZ-1);
},CE:function(G){if(this.AD.Gu>0)this.AD.GW(this.AD.Gu-1);else this.AD.GW(this.AZ-
1);this.AD.HK(this.AD.Gu,true,null,null);},Ca:function(G){if(this.AD.Gu<(this.AZ-
1))this.AD.GW(this.AD.Gu+1);else this.AD.GW(0);this.AD.HK(this.AD.Gu,true,null,null
);},JD:function(E){if(this.AZ===E)return;this.AZ=E;this.AD.JD(this.AZ);A.abo([this
,this.ArH,this.JD],0);},ArH:function(){return this.AZ;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cq={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AWe;this.H(AfI);this.Cq.Filter=147;this.
AD.A1(0x3F);this.AD.H(AfI);this.AD.N8(C.AHx);this.AD.Ae_(160);this.AD.GW(0);this.
AD.JD(2);this.J(this.AD,0);this.Cq.BG=[this,this.DF];this.Cq.D1=[this,this.DF];this.
AD.Hn=[this,this.Hn];},_Done:function(){this.__proto__=A.Core.P;this.Cq._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cq._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bl:function(aSize){C.Co.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Co.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((
Ae&0x20)===0x20);var GE=this.Bo.Bw;var FT=A.jb.CJ;var G0=A.jb.Text;if(this.Hm){FT=
A.jb.CU;G0=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(G0);}this.LN=Hf;
this.KM=Fw;this.Qz=GE;},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(K4);this.V.H(BD);this.ZF(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeV={KQ:null,GK:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KQ.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KQ.
L(this.V.AQ);},Init:function(aArg){},Ab_:function(E){if(this.GK===E)return;this.
GK=E;this.KQ.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.call(
this.KQ={I:this},0);this.__proto__=C.AeV;this.H(K4);this.Background.H(K4);this.V.
H(AcR);this.V.R(LB);this.KQ.H(I1);this.KQ.R(AYV);this.J(this.KQ,0);this.V.S(A.aaL(
A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(null);this.KQ.S(A.aaL(A.fl.Af));this.
KQ.A0(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KQ._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KQ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.KQ.S(A.aaL(
A.fl.Af));this.KQ.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Av8={ACA:null,Q:null,A3:null,AF:null,Io:null,L1:null,Ap:null,EM:null,AOm:A.jV
,AOn:A.jV,Bl:function(aSize){C.AeV.Bl.call(this,aSize);if(!this.ACA)this.KQ.H([].
concat(0,this.KQ.M.slice(1,4)));else this.KQ.H([].concat(this.Ap.M[2],this.KQ.M.
slice(1,4)));},Ai:function(Ae){var F,Cu,Tk;C.AeV.Ai.call(this,Ae);var Bdh=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apn)this.Ab_(this.AOm);else
this.Ab_(this.AOn);}else{this.Ab_(A._GetAutoObject(A.Device.Converter).Rm((F=this.
Q,F[1].call(F[0]))));if((((!!this.Io&&!!this.A3)&&!!this.AF)&&!!this.L1)&&(((F=this.
Io,F[1].call(F[0]))===1)||(!(Cu=this.Io,Cu[1].call(Cu[0]))&&(Tk=this.L1,Tk[1].call(
Tk[0])))))Bdh=true;}}this.EM.Z(Bdh);this.Ap.L(this.V.AQ);A.pe([this,this.Agf],this
);},C5:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},AFm:function(E){if(this.ACA===E)return;this.ACA=E;this.
Ap.Ax(E);this.Bkb();},OU:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3)A.z$([
this,this.AaO],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.AaO],E,0);if(!!E)A.pe([
this,this.AaO],this);},PZ:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaQ],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaQ],E,0);if(!!E)
A.pe([this,this.AaQ],this);},AaQ:function(G){this.Am();},AaO:function(G){this.Am(
);},Uu:function(E){if(A.aaZ(this.Io,E))return;if(!!this.Io)A.z$([this,this.Al6],
this.Io,0);this.Io=E;if(!!E)A.zX([this,this.Al6],E,0);if(!!E)A.pe([this,this.Al6
],this);},Al6:function(G){this.Am();},Agf:function(G){var F,Cu;if((!this.Io||!this.
A3)||!this.AF)return;var A3b=this.KQ.Afj([(this.KQ.String.length-(F=this.AF,F[1].
call(F[0])))-(Cu=this.A3,Cu[1].call(Cu[0])),0]);var A4w=this.KQ.Afj([this.KQ.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABy=this.KQ.Dd(0x0);this.EM.H([A3b[0]-
1,ABy[1],A4w[0]+1,ABy[3]]);},ArV:function(E){if(this.AOm===E)return;this.AOm=E;this.
Am();},ArW:function(E){if(this.AOn===E)return;this.AOn=E;this.Am();},Ae6:function(
E){if(A.aaZ(this.L1,E))return;if(!!this.L1)A.z$([this,this.A3U],this.L1,0);this.
L1=E;if(!!E)A.zX([this,this.A3U],E,0);if(!!E)A.pe([this,this.A3U],this);},A3U:function(
G){this.Am();},_Init:function(aArg){C.AeV._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.Av8;
this.Ap.H(AhZ);this.EM.H(AYW);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KQ.Q_([this,this.Agf]);},_Done:function(){this.__proto__=
C.AeV;this.Ap._Done();this.EM._Done();C.AeV._Done.call(this);},_ReInit:function(
){C.AeV._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeV._Mark.call(this,D);if((B=this.ACA)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Io)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
L1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Im:0,AaN:4,Ben:false,Bev:true,Beu:false,Bdo:true,Bem:false
,Al$:function(G){C.Rd.Al$.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bel(
)){this.Im=A._GetAutoObject(A.Device.Helper).UH.Id;var AiC=A._GetAutoObject(A.Device.
Helper).ARB(this.Im);if(AiC)A._GetAutoObject(A.Device.Device).AY(107,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.A3Y]);else{this.AaN=A._GetAutoObject(
A.Device.Helper).ARC(this.Im);var BeS=false;if((this.AaN===3)||(this.AaN===2))BeS=
A._GetAutoObject(A.Device.Helper).A7U(this.Im,A._GetAutoObject(A.Device.Helper).
W);if(BeS)A._GetAutoObject(A.Device.Device).AY(21,true,A._GetAutoObject(A.Device.
Converter).Rm(this.Im),0,null);else switch(this.AaN){case 2:{var BN=A._GetAutoObject(
A.Device.Converter).Ax2(this.Im);A._GetAutoObject(A.Device.Device).AY(46,true,BN.
toFixed(),0,[this,this.A3Y]);}break;case 3:case 1:case 0:case 4:this.A4M();break;
default:throw new Error(AIv+this.AaN.toFixed());}}}},Ew:function(G){A._GetAutoObject(
C.A7).FB();},AJb:function(s){this.Ew(s);},A4M:function(){if((this.AaN===3)||(this.
AaN===2)){if((this.Bdo&&(A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(
A.Device.Helper).W.NaisId!==this.Im)){A._GetAutoObject(A.Device.Device).AY(69,true
,A.jV,0,[this,this.A3Y]);return;}else this.BCs();}if(this.Ben)A._GetAutoObject(A.
Device.Helper).Bpa(this.Im);A._GetAutoObject(A.Device.Helper).W.P1(this.Im);this.
Bem=true;this.BCu();this.Ew(this);},A3Y:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!Ar)switch(Ar.Id){case 46:if(Ar.PopupState===4)this.
A4M();break;case 107:switch(Ar.PopupState){case 7:{this.Ben=true;this.A4M();}break;
case 8:this.Ew(this);break;default:;}break;case 69:if(Ar.PopupState===4)this.Ew(
this);break;default:A.ab5("%s%e",AIw,Ar.Id);}},BCs:function(){A._GetAutoObject(A.
Device.Helper).W.Nr(this.Im);if(this.Beu&&(A._GetAutoObject(A.Device.Converter).
S8(this.Im)===10)){var Bc3=Math.trunc((this.Im%1000000000000)/10000000000);if(!Bc3&&(
A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper
).W.EC(0);else if((Bc3===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2
))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BCu:function(){if(this.Bev){A._GetAutoObject(
A.Device.Helper).W.SP(A._GetAutoObject(A.Device.Helper).A5B(A._GetAutoObject(A.Device.
Device).Ak7,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device
).Ak7===1)A._GetAutoObject(A.Device.Helper).Bav();}},_Init:function(aArg){C.Rd._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Z(true);this.Dr(C.IP
);this.Number.R(A.aaR(A.acf.O0));this.Jl.H(AYX);this.IZ.H(U2);this.AkH(1);this.N.
CE=[this,this.AJb];this.N.C3(A.aaL(A.ach.E2));},_ReInit:function(){C.Rd._ReInit.
call(this);this.Number.R(A.aaR(A.acf.O0));},_className:"Application::SetTransponderScreen"
};C.ADL={Gp:null,Lr:null,Ky:null,CQ:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EB.Ai.call(this,Ae);this.Lr.R(A._GetAutoObject(A.acj.DU
).Af8());this.Ky.R(A._GetAutoObject(A.acj.DU).AaE());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gp={I:this},0);A.acg.Text._Init.
call(this.Lr={I:this},0);A.acg.Text._Init.call(this.Ky={I:this},0);this.__proto__=
C.ADL;this.Background.L(A.jb.Text);this.Gp.H(AYY);this.Gp.A6(0x11);this.Gp.R(A.aaR(
A.acf.Date));this.Gp.L(A.jb.Bm);this.Lr.H(AYZ);this.Lr.A6(0x11);this.Lr.L(A.jb.Bm
);this.Ky.H(AY0);this.Ky.L(A.jb.Bm);this.J(this.Gp,0);this.J(this.Lr,0);this.J(this.
Ky,0);this.Gp.S(A.aaL(A.fl.Af));this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Gp._Done();this.Lr.
_Done();this.Ky._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Gp._ReInit();this.Lr._ReInit();this.Ky._ReInit();this.Gp.R(A.aaR(
A.acf.Date));this.Gp.S(A.aaL(A.fl.Af));this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(
A.fl.Af));this.CQ();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHB={Ms:null,Hr:null,If:null,AP:null,A$:null,FX:0,Ih:0,AiQ:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hr.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hr.M[2]-1,0,this.Hr.M[2]+1,aSize[
1]]);this.Ms.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.If.H(this.Ms.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiQ){this.If.R(Rt);this.If.L(A.jb.
Text);this.Ms.L(this.Background.AQ);}else{this.If.R(A._GetAutoObject(A.Device.Converter
).Td(this.FX,2,true));this.If.L(A._GetAutoObject(A.acj.DU).Az8(this.FX,this.Ih));
this.Ms.L(A._GetAutoObject(A.acj.DU).Az6(this.FX,this.Ih));}this.Hr.L(this.V.AQ);
},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var AlI=this.AX.Hw(
Ad,6);var Ame=this.AX.CF(Ad,8);if(this.Ht>0){var Bzt=this.AX.Hw(this.Ht-1,6);var
BB9=this.AX.CF(this.Ht-1,8);var LK=A._GetAutoObject(A.Device.Helper).Mf(Bzt,AlI);
if(!!LK){this.AiQ=false;this.FX=A._GetAutoObject(A.acj.DU).AlF(LK,BB9,Ame);}else{
this.AiQ=true;this.FX=0;}}else{this.AiQ=true;this.FX=0;}this.T(A._GetAutoObject(
A.acj.KR).ADb(AlI));this.Hr.R(A._GetAutoObject(A.Device.Converter).Alb(Ame));this.
Ih=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Ms={I:this},0);A.acg.Text.
_Init.call(this.Hr={I:this},0);A.acg.Text._Init.call(this.If={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AHB;this.V.H(Pb);this.Ms.H(Atl);this.Hr.H(AIx);this.Hr.A6(0x12);this.Hr.R(Rr);
this.Hr.L(A.jb.Text);this.If.H(AIy);this.If.R(Rr);this.If.L(A.jb.Text);this.AP.H(
Aow);this.AP.L(A.jb.Bc);this.A$.H(Aox);this.A$.L(A.jb.Bc);this.J(this.Ms,0);this.
J(this.Hr,0);this.J(this.If,0);this.J(this.AP,0);this.J(this.A$,0);this.Hr.S(A.aaL(
A.fl.Af));this.If.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ms._Done();this.Hr._Done();this.If._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ms._ReInit(
);this.Hr._ReInit();this.If._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hr.
S(A.aaL(A.fl.Af));this.If.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,V$:null,AhV:null,S6:null
,KS:A.jV,CQ:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LK=
A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LK){var FX=A._GetAutoObject(
A.acj.DU).AlF(LK,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdQ=A.aaR(A.acf.BhY);AdQ=A._GetAutoObject(
A.Device.Helper).MN(AdQ,Pc,A._GetAutoObject(A.Device.Converter).Td(FX,2,true));AdQ=
A._GetAutoObject(A.Device.Helper).MN(AdQ,Aym,A._GetAutoObject(A.acj.DU).AaE());this.
S6.R(AdQ);this.AhV.L(A._GetAutoObject(A.acj.DU).Az6(FX,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S6.L(A._GetAutoObject(A.acj.DU).Az8(FX,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S6.R(A.aaR(A.acf.AWc));this.AhV.L(A.jb.
ARm);this.S6.L(A.jb.Text);}},CC:function(G){var Fy=A._NewObject(A.Device.Filter,
0);var HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CX(HZ);var Ada=A._NewObject(A.Device.Int32FilterCriterion
,0);Ada.Initialize(8,2,0,true);Fy.CX(Ada);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);this.AxI(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},AxI:function(G){this.Bg=A._NewObject(C.Gd,0);this.Bg.N8(C.AHB);this.Bg.H(AyA
);this.Bg.Zy(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KS);this.J(this.
Bg,0);this.Bb(this.Bg);},Anu:function(G){A._GetAutoObject(C.A7).FB();},Dl:function(
E){if(this.KS===E)return;this.KS=E;if(!!this.Bg)this.Bg.Dl(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADL._Init.call(this.V$={I:this},0);A.acg.AL._Init.
call(this.AhV={I:this},0);A.acg.Text._Init.call(this.S6={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cf);this.N.Z(true);this.Dr(C.IP);this.V$.H(
Qg);this.KS=A.aaR(A.acf.Akn);this.AhV.A1(0x1D);this.AhV.H(I1);this.S6.A1(0x1D);this.
S6.H(I1);this.S6.A6(0x12);this.S6.R(Rr);this.J(this.V$,0);this.J(this.AhV,0);this.
J(this.S6,0);this.N.CE=[this,this.Anu];this.N.C3(A.aaL(A.ach.E2));this.S6.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.V$._Done();this.AhV._Done(
);this.S6._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.V$._ReInit();this.AhV._ReInit();this.S6._ReInit();this.Dl(A.aaR(A.acf.Akn
));this.S6.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mo={DQ:null,AcE:null,AR3:11,EN:0,A5z:true,ACc:false,H1:function(G){if(A._GetAutoObject(
A.Device.Device).An.B_()>0)this.E5(4);else A._GetAutoObject(A.Device.Device).AY(
30,true,A.jV,0,null);},CC:function(G){if(this.DQ.AAg())this.DQ.Ac$();else if((this.
EN===2)&&A._GetAutoObject(A.Device.Helper).W.Aq7())this.E5(5);else this.E5(1);},
E4:function(G){if(this.EN===1)this.E5(0);},Ew:function(G){this.E5(0);A._GetAutoObject(
C.A7).FB();},BCK:function(){A._GetAutoObject(A.Device.Device).AhN();},A4S:function(
){A._GetAutoObject(A.Device.Device).An5();},A9_:function(E){if(this.ACc===E)return;
this.ACc=E;A.abo([this,this.Blh,this.A9_],0);},E5:function(E){var B;if(this.EN===
E)return;this.EN=E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkS();A.zX([
this,this.AKO],[B=A._GetAutoObject(A.Device.Helper),B.ArI,B.AkG],0);A.z$([this,this.
AAJ],[B=this.DQ,B.SK,B.E5],0);this.BCK();}break;case 3:{A.z$([this,this.AKO],[B=
A._GetAutoObject(A.Device.Helper),B.ArI,B.AkG],0);this.A4S();this.BAF();}break;case
2:{A._GetAutoObject(A.Device.Helper).AsA();if(!A._GetAutoObject(A.Device.Device).
AutoRegistrationMode&&this.A5z)this.BCv();else this.BCy();}break;case 4:{A.z$([this
,this.AKO],[B=A._GetAutoObject(A.Device.Helper),B.ArI,B.AkG],0);this.A4S();A._GetAutoObject(
A.Device.Helper).AsA();A.zX([this,this.BfB],[B=A._GetAutoObject(A.Device.Device)
,B.Awu,B.Ay6],0);A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(this.AR3);}
break;case 5:this.BgW();break;case 6:{A.zX([this,this.AAJ],[B=this.DQ,B.SK,B.E5]
,0);this.DQ.Ac$();}break;case 0:{A.z$([this,this.AKO],[B=A._GetAutoObject(A.Device.
Helper),B.ArI,B.AkG],0);this.A4S();}break;default:throw new Error(AyH);}A.abo([this
,this.SK,this.Bw9],0);},Bw9:function(Aq){this.E5(Aq);},AKO:function(G){if(!!A._GetAutoObject(
A.Device.Helper).UH){if(this.EN===1)this.E5(3);else A.ab5("%s%e",AY1,this.EN);}else
A.ab5("%s",AIz);},BCv:function(){A._GetAutoObject(A.Device.Device).AY(13,true,A.
_GetAutoObject(A.Device.Helper).Ak9(A._GetAutoObject(A.Device.Helper).UH.Id).toFixed(
),0,[this,this.BAU]);},BAU:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){if(this.Bds(false
))A._GetAutoObject(C.A7).Cb(31);else{A._GetAutoObject(A.Device.Helper).AkS();this.
E5(1);}}else if(!!Ar&&(Ar.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkS(
);this.E5(1);}},Bds:function(Ai3){if(A._GetAutoObject(A.Device.Device).An.Lm()){
A._GetAutoObject(A.Device.Device).AY(41,true,A._GetAutoObject(A.Device.Device).An.
HM().toFixed(),0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gs();A.
_GetAutoObject(A.Device.Helper).Aqp(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(
A.Device.Helper).W.P1(A._GetAutoObject(A.Device.Helper).UH.Id);if(!!A._GetAutoObject(
A.Device.Helper).AhJ){var AlS=A._GetAutoObject(A.Device.Helper).AhJ.AO7();A._GetAutoObject(
A.Device.Helper).W.Ab$(AlS);A._GetAutoObject(A.Device.Helper).W.AnJ(AlS);}if(A._GetAutoObject(
A.Device.Helper).ARC(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nr(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SP(A._GetAutoObject(A.Device.Helper).BhN(A._GetAutoObject(A.Device.
Device).AgD,A._GetAutoObject(A.Device.Helper).W));if(Ai3){A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var Md=A._GetAutoObject(A.Device.
Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SW(Md);if(A._GetAutoObject(A.Device.Helper).Am$()){if(A._GetAutoObject(A.
Device.Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Abz(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).AgD)A._GetAutoObject(
A.Device.Helper).Bav();}return true;},BAF:function(){if(!!A._GetAutoObject(A.Device.
Helper).UH){var AJE=true;if(A._GetAutoObject(A.Device.Helper).UH.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJE=A._GetAutoObject(A.Device.Helper).A76(A._GetAutoObject(
A.Device.Helper).UH.Id);if(!AJE&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bds(true);AJE=A._GetAutoObject(A.Device.Helper).A76(A._GetAutoObject(A.
Device.Helper).UH.Id);}}if(AJE)this.E5(5);else this.E5(2);}else{A.ab5("%s",AIz);
return;}},BfB:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.AR3){A.z$([this,this.BfB],[B=A._GetAutoObject(A.Device.Device),B.Awu,B.Ay6
],0);if(A._GetAutoObject(A.Device.Helper).W.Aq7())this.E5(5);else this.E5(1);}},
BgW:function(){if(this.ACc===true)this.E5(6);else A._GetAutoObject(C.A7).Cb(24);
},BCy:function(){A._GetAutoObject(A.Device.Device).AY(36,true,A.jV,0,[this,this.
BBO]);},BBO:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkS();this.E5(1);}},AAJ:function(G){if(!this.DQ.EN)this.E5(1);},A3M:function(G
){},Bxh:function(s){this.A3M(s);},Blh:function(){return this.ACc;},SK:function(){
return this.EN;},_Init:function(aArg){C.Rd._Init.call(this,aArg);A.acg.Text._Init.
call(this.AcE={I:this},0);this.__proto__=C.Mo;this.N.Z(true);this.Dr(C.Aq8);this.
Number.H(AY2);this.Number.R(A.aaR(A.acf.A$T));this.Jl.H(AY3);this.IZ.H(AY4);this.
AcE.H(AY5);this.AcE.R(AY6);this.AcE.L(A.jb.Text);this.J(this.AcE,0);this.N.CE=[this
,this.Ew];this.N.Ce=[this,this.Bxh];this.N.C3(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.AcE.S(A.aaL(A.fl.H6));this.DQ=A._GetAutoObject(C.DQ);},_Done:function(
){this.__proto__=C.Rd;this.AcE._Done();C.Rd._Done.call(this);},_ReInit:function(
){C.Rd._ReInit.call(this);this.AcE._ReInit();this.Number.R(A.aaR(A.acf.A$T));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Rd._Mark.call(this,D);if((B=
this.DQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AcE)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A5n={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Api:-1,EN:0,ByI:function(){var BgB=false;
var Os=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(A.
Device.Device).Bt.HM().toFixed(),0,null);else if(Os){BgB=true;var B2=A._NewObject(
A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).AxE(B2,5);B2.OnSetAppearance(3);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}else{var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxE(B2
,5);B2.OnSetAppearance(1);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);if(BgB)A._GetAutoObject(A.Device.Helper).W.Uy(false);if(Os)A.
_GetAutoObject(A.Device.Helper).W.An0(false);else A._GetAutoObject(A.Device.Helper
).W.An0(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).AY(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M4]);else A._GetAutoObject(A.Device.Device).AY(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M4]);},ByK:function(){A._GetAutoObject(
A.Device.Helper).W.AGW(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).AY(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M4]);else A._GetAutoObject(
A.Device.Device).AY(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M4]);},Qt:function(Eh){switch(Eh){case 4:this.ByI();break;case
128:A._GetAutoObject(C.A7).Cb(7);break;case 16:A._GetAutoObject(C.A7).Cb(36);break;
case 1:A._GetAutoObject(C.A7).Cb(10);break;case 2:A._GetAutoObject(C.A7).Cb(11);
break;case 8:this.ByK();break;case 64:A._GetAutoObject(C.A7).Cb(29);break;case 32:
A._GetAutoObject(C.A7).Cb(48);break;case 256:A._GetAutoObject(C.A7).Cb(21);break;
case 512:A._GetAutoObject(C.A7).Cb(30);break;case 1024:this.BAC();break;case 262144:
this.BC0();break;case 2048:this.Ac$();break;case 4096:this.Bdk(false);break;case
8192:this.ByJ();break;case 16384:this.BAB();break;case 32768:this.By9();break;case
524288:this.By_();break;case 65536:this.Bzx();break;case 131072:this.BCn();break;
case 0:break;default:throw new Error(AY7);}},Bdu:function(Eh,Byd){var EQ=A._NewObject(
C.Wv,0);EQ.Ab9(false);EQ.Aj(true);EQ.AR=Byd;EQ.Bmr(Eh);switch(Eh){case 1:{EQ.T(A.
aaR(A.acf.An6));EQ.DC(A.aaL(A.ach.AL2));}break;case 2:{EQ.T(A.aaR(A.acf.A$D));EQ.
DC(A.aaL(A.ach.AL3));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DC(A.aaL(A.ach.AL4
));EQ.AFV(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asm));EQ.DC(A.aaL(A.ach.AL5));EQ.
AFV(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMB));EQ.DC(A.aaL(A.ach.AL6));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DC(A.aaL(A.ach.AL7));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DC(A.aaL(A.ach.AL8));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DC(A.aaL(A.ach.AL9));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DC(A._GetAutoObject(A.acj.DU).BAa());}break;case 512:{EQ.T(A.aaR(A.acf.ASq));
EQ.DC(A.aaL(A.ach.ALU));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DC(A.aaL(A.ach.ALV));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DC(A.aaL(A.ach.AL1));}break;case 2048:{EQ.T(A.aaR(A.acf.TF));EQ.DC(A.aaL(A.ach.ALW
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DC(A.aaL(A.ach.ALX));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DC(A.aaL(A.ach.ALY));EQ.AFV(true);}break;case
16384:{EQ.T(A.aaR(A.acf.Bi_));EQ.DC(A.aaL(A.ach.ALZ));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bpn));EQ.DC(A.aaL(A.ach.AL0));}break;default:A.ab5("%s",(AY8+Eh.toFixed(
))+AY9);}return EQ;},BzK:function(){this.Api=this.Api+1;if(this.Api>=this.AutoActions.
Ng())this.E5(0);else this.E5(2);},BCb:function(){this.Api=-1;},AAg:function(){return(
this.Api>-1)&&!this.BAv();},BAv:function(){return this.Api>=this.AutoActions.Ng(
);},E5:function(E){if(this.EN===E)return;this.EN=E;switch(E){case 1:this.BzK();break;
case 2:{var To=this.AutoActions.OM(this.Api);if(this.A5k(A._GetAutoObject(A.Device.
Helper).W,To))this.Qt(To);else A._GetAutoObject(A.Device.Device).AY(64,true,(this.
ActionToString.LA(To)+Atj)+this.AnimalTypeToString.LA(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.M4]);}break;case 0:this.BCb();break;default:throw new
Error(AyH);}A.abo([this,this.SK,this.E5],0);},M4:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.Id===63)&&(Ar.PopupState===7))this.
Bdk(true);if((Ar.Id===32)&&(Ar.PopupState===7))A._GetAutoObject(C.A7).Cb(45);if((((
Ar.PopupState===4)||(Ar.PopupState===3))||(Ar.PopupState===8))&&this.AAg())this.
E5(1);},Bdm:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAC:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A7).Cb(
45);else A._GetAutoObject(A.Device.Device).AY(32,true,A.jV,0,[this,this.M4]);},Ac$:
function(){this.E5(1);},BB$:function(){var Os=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Os&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Lm())A._GetAutoObject(A.Device.Device).AY(50,true,A._GetAutoObject(A.Device.Device
).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating,0);B2.Gs();
B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).AxE(B2,5);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CL,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uy(false);if(Os)A._GetAutoObject(
A.Device.Helper).W.An0(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AY(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M4]);},BCa:function(){A._GetAutoObject(
A.Device.Helper).W.AGW(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AY(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M4]);},Bdk:function(BzO){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BzO===false))A._GetAutoObject(A.Device.
Device).AY(63,true,A.jV,0,[this,this.M4]);else A._GetAutoObject(C.A7).Cb(54);},ByJ:
function(){A._GetAutoObject(A.Device.Helper).W.Ar4(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).AY(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M4]);else A._GetAutoObject(A.Device.Device).AY(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M4]);},BAB:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A7).Cb(81);else A._GetAutoObject(A.
Device.Device).AY(69,true,A.jV,0,[this,this.M4]);},By9:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj8(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae7(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AY(65,true,A.jV,2000,[this,this.M4
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae8(false);A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).AY(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M4]);}}},Bzx:function(){A._GetAutoObject(A.Device.Helper).W.Ae7(false);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj8(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae7(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AY(65,true,A.jV,2000,[this,this.M4
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).AY(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M4]);else A._GetAutoObject(A.Device.Device).AY(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M4]);}},A5k:function(En,Eh
){var QD=false;switch(Eh){case 32768:QD=En.IsRegistrationNoticePending&&!!En.NaisIdMother;
break;case 524288:QD=En.IsRegistrationNoticePending&&!En.NaisIdMother;break;case
4096:case 8192:switch(En.AnimalType){case 1:QD=true;break;default:;}break;case 512:
switch(En.AnimalType){case 0:QD=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:QD=true;break;default:A.ab5("%s",AY_+
Eh.toFixed());}return QD;},BCn:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A7).Cb(80);else A._GetAutoObject(A.Device.Device).AY(
69,true,A.jV,0,[this,this.M4]);},BC0:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).AY(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.M4]);else{A._GetAutoObject(A.
Device.Helper).W.P1(0);A._GetAutoObject(A.Device.Helper).W.SP(A._GetAutoObject(A.
Device.Helper).A5B(A._GetAutoObject(A.Device.Device).An$,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).AY(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.M4]);}},By_:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae8(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AY(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M4]);}},SK:function(){return this.EN;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A5n;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AMc={R6:null,Aqr:null,E5:function(E){if(this.EN===E)return;C.Mo.E5.call(this
,E);switch(E){case 1:this.Dr(C.Aq8);break;case 5:case 6:this.Dr(C.IP);break;case
3:case 4:case 2:case 0:break;default:throw new Error(AyH);}},A3M:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mo._Init.call(this
,aArg);C.CG._Init.call(this.R6={I:this},0);C.AMd._Init.call(this.Aqr={I:this},0);
this.__proto__=C.AMc;this.A9_(true);this.R6.H(AY$);this.R6.R(A.aaR(A.acf.TF));this.
R6.L(A.jb.Text);this.Aqr.H(AZa);this.J(this.R6,0);this.J(this.Aqr,0);this.N.Ct(A.
aaL(A.ach.AeG));this.R6.S(A.aaL(A.fl.Af));this.R6.A0(A.aaL(A.fl.HL));this.R6.Cr(
A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Mo;this.R6._Done();this.Aqr.
_Done();C.Mo._Done.call(this);},_ReInit:function(){C.Mo._ReInit.call(this);this.
R6._ReInit();this.Aqr._ReInit();this.R6.R(A.aaR(A.acf.TF));this.R6.S(A.aaL(A.fl.
Af));this.R6.A0(A.aaL(A.fl.HL));this.R6.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Mo._Mark.call(this,D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aqr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"
};C.ManualActionScanScreen={Ig:null,J8:null,A3M:function(G){if(this.Ig.N3(2048))
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(3);},_Init:function(aArg){C.Mo._Init.call(this,aArg);A.
acg.Text._Init.call(this.J8={I:this},0);this.__proto__=C.ManualActionScanScreen;
this.J8.H(AZb);this.J8.KX(true);this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+
CR)+A.aaR(A.acf.AB2));this.J8.L(A.jb.Text);this.J(this.J8,0);this.N.Ct(A.aaL(A.ach.
AeG));this.J8.S(A.aaL(A.fl.Af));this.Ig=A._GetAutoObject(C.Ps);},_Done:function(
){this.__proto__=C.Mo;this.J8._Done();C.Mo._Done.call(this);},_ReInit:function(){
C.Mo._ReInit.call(this);this.J8._ReInit();this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.AB2));this.J8.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Mo._Mark.call(this,D);if((B=this.Ig)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.J8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScanScreen"
};C.AMd={Y:null,Init:function(aArg){var B;A.zV([this,this.ABK],A._GetAutoObject(
C.AutoActions),0);A.zV([this,this.AuI],A._GetAutoObject(A.Device.Helper).W,0);A.
pe([this,this.ABK],this);A.pe([this,this.AuI],this);this.H(A.abK(this.M,AZc));this.
Y.H(A.abK(this.Y.M,A.abe([(B=this.M)[2]-B[0],B[3]-B[1]],AZd)));},Bc$:function(G){
var B;var AlG=0;var AzK=0;var Bdq;var X=this.Y.Ah;var Cy=null;Bdq=((((B=this.M)[
2]-B[0])-(A._GetAutoObject(C.AutoActions).Ng()*58))/2)|0;while(!!X&&!((X.U&0x200
)===0x200)){Cy=(C.Wv.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.
H(A.abK(Cy.M,AZe));Cy.H(A.abM(Cy.M,(AzK*58)+Bdq));Cy.H(A.abO(Cy.M,AlG*58));if(AzK>=
3){AlG=AlG+1;AzK=0;}else AzK=AzK+1;}X=X.Ah;}this.Bb(null);},A1$:function(Eh){var
EQ=A._GetAutoObject(C.DQ).Bdu(Eh,null);this.J(EQ,0);this.Bc$(this);},Ao9:function(
){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdO=X;X=X.Ah;if(((
AdO.U&0x400)===0x400))this.HR(AdO);}},ABK:function(G){this.Ao9();var O;var CB=A.
_GetAutoObject(C.AutoActions).Ng();for(O=0;O<CB;O=O+1){var To=A._GetAutoObject(C.
AutoActions).OM(O);this.A1$(To);}A.pe([this,this.Bc$],this);A.pe([this,this.AuI]
,this);A.pe([this,this.BC_],this);},AuI:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wv.isPrototypeOf(
X)?X:null);Aa.AFV(false);}X=X.Ah;}},BC_:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Wv.isPrototypeOf(
X)?X:null);var ByZ=A._GetAutoObject(C.AutoActions).Ng();if(!!Aa){var O;Aa.A96(false
);for(O=0;O<ByZ;O=O+1)if(Aa.Action===A._GetAutoObject(C.AutoActions).OM(O)){Aa.A96(
true);Aa.Bnx(AZf+(O+1).toFixed());}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);this.__proto__=C.AMd;this.
Y.JZ(0);this.J(this.Y,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.Y._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Y._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScreenGrid"
};C.DQ={_Init:function(){C.A5n._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.APQ={Lq:null,Uc:null,Init:function(aArg){
this.Lq.R(A._GetAutoObject(A.acj.Temperature).AlR());},_Init:function(aArg){C.De.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Lq={I:this},0);C.CG._Init.call(
this.Uc={I:this},0);this.__proto__=C.APQ;this.Lq.H(AZg);this.Lq.A6(0x12);this.Lq.
L(A.jb.Text);this.Uc.H(Aoy);this.Uc.R((A.aaR(A.acf.Ahp)+AIA)+A.aaR(A.acf.Kq));this.
Uc.A6(0x12);this.Uc.L(A.jb.Text);this.J(this.Lq,0);this.J(this.Uc,0);this.Lq.S(A.
aaL(A.fl.Af));this.Uc.S(A.aaL(A.fl.Ak));this.Uc.A0(A.aaL(A.fl.Bh));this.Init(aArg
);},_Done:function(){this.__proto__=C.De;this.Lq._Done();this.Uc._Done();C.De._Done.
call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lq._ReInit();this.Uc.
_ReInit();this.Uc.R((A.aaR(A.acf.Ahp)+AIA)+A.aaR(A.acf.Kq));this.Lq.S(A.aaL(A.fl.
Af));this.Uc.S(A.aaL(A.fl.Ak));this.Uc.A0(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Uc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdTemperatures"
};C.ADJ={JC:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.JC={I:this},0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=
C.ADJ;this.JC.H(AZh);this.JC.KX(true);this.JC.A6(0x14);this.JC.R(A.aaR(A.acf.AhU
)+AIB);this.JC.L(A.jb.Text);this.D0.H(Aoy);this.D0.KX(true);this.D0.R(A.aaR(A.acf.
AGr));this.D0.L(A.jb.Text);this.J(this.JC,0);this.J(this.D0,0);this.JC.S(A.aaL(A.
fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.De;this.JC.
_Done();this.D0._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.
call(this);this.JC._ReInit();this.D0._ReInit();this.JC.R(A.aaR(A.acf.AhU)+AIB);this.
D0.R(A.aaR(A.acf.AGr));this.JC.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.De._Mark.call(this,D);if((B=this.JC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"
};C.T4={Jd:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.call(
this.Jd={I:this},0);this.__proto__=C.T4;this.Jd.H(AIC);this.Jd.R((((A.aaR(A.acf.
RU)+AcV)+AID)+A.aaR(A.acf.BaJ))+Pd);this.Jd.A6(0x12);this.Jd.L(A.jb.Text);this.J(
this.Jd,0);this.Jd.S(A.aaL(A.fl.Af));this.Jd.A0(A.aaL(A.fl.Ak));this.Jd.Cr(A.aaL(
A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.Jd._Done();C.De._Done.call(
this);},_ReInit:function(){C.De._ReInit.call(this);this.Jd._ReInit();this.Jd.R((((
A.aaR(A.acf.RU)+AcV)+AID)+A.aaR(A.acf.BaJ))+Pd);this.Jd.S(A.aaL(A.fl.Af));this.Jd.
A0(A.aaL(A.fl.Ak));this.Jd.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APS={Lr:null,Ky:null,CQ:function(){this.A$V();},Init:function(aArg){this.A$V(
);},A$V:function(){this.Lr.R(A._GetAutoObject(A.acj.DU).Af8());this.Ky.R(A._GetAutoObject(
A.acj.DU).AaE());},_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lr={I:this},0);C.CG._Init.call(this.Ky={I:this},0);this.__proto__=C.APS;
this.Lr.H(AZi);this.Lr.A6(0x12);this.Lr.L(A.jb.Text);this.Ky.H(Aoy);this.Ky.L(A.
jb.Text);this.J(this.Lr,0);this.J(this.Ky,0);this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(
A.aaL(A.fl.Af));this.Ky.A0(A.aaL(A.fl.Ak));this.Ky.Cr(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.De;this.Lr._Done();this.Ky._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lr._ReInit();
this.Ky._ReInit();this.Lr.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));this.Ky.A0(
A.aaL(A.fl.Ak));this.Ky.Cr(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.
De._Mark.call(this,D);if((B=this.Lr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANr={Ms:null,Hr:null,If:null,AP:null,A$:null,FX:0,AaK:0,Ih:0,AiQ:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hr.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hr.M[2]-1,0,this.Hr.M[2]+1,aSize[
1]]);this.Ms.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.If.H(this.Ms.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiQ){this.If.R(Rt);this.If.L(A.jb.
Text);this.Ms.L(this.Background.AQ);}else{this.If.R(A._GetAutoObject(A.Device.Converter
).Td(this.FX,2,true));this.If.L(A._GetAutoObject(A.acj.DU).Az8(this.FX,this.Ih));
this.Ms.L(A._GetAutoObject(A.acj.DU).Az6(this.FX,this.Ih));}if(this.AaK>0)this.Hr.
R(A._GetAutoObject(A.Device.Converter).Alb(this.AaK));else this.Hr.R(Rt);this.Hr.
L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Mn=
this.AX.CF(Ad,1);var AuD=this.AX.Hw(Ad,24);var AKn=this.AX.CF(Ad,23);var AuE=this.
AX.Hw(Ad,19);this.AaK=this.AX.CF(Ad,18);if((AuD>0)&&(AuD!==AuE)){var LK=A._GetAutoObject(
A.Device.Helper).Mf(AuD,AuE);if(!!LK){this.AiQ=false;this.FX=A._GetAutoObject(A.
acj.DU).AlF(LK,AKn,this.AaK);}else{this.AiQ=true;this.FX=0;}}else{this.AiQ=true;
this.FX=0;}this.T(Mn.toFixed());this.Ih=this.AX.Am1(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Ms={I:this},0);A.acg.Text.
_Init.call(this.Hr={I:this},0);A.acg.Text._Init.call(this.If={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.ANr;this.V.H(Pb);this.Ms.H(Atl);this.Hr.H(AIx);this.Hr.A6(0x12);this.Hr.R(Rr);
this.Hr.L(A.jb.Text);this.If.H(AIy);this.If.R(Rr);this.If.L(A.jb.Text);this.AP.H(
Aow);this.AP.L(A.jb.Bc);this.A$.H(Aox);this.A$.L(A.jb.Bc);this.J(this.Ms,0);this.
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
);if(!!this.Xx&&(this.Xx!==5)){this.Mr.L(A._GetAutoObject(A.acj.Assessment).Qv(this.
Xx));this.V.L(A._GetAutoObject(A.acj.Assessment).XG(this.Xx));}else this.Mr.L(this.
Background.AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var
Mn=this.AX.CF(Ad,1);var LW=this.AX.Ja(Ad,13);var AlM=this.AX.Ja(Ad,17);var AlV=this.
AX.H7(Ad,11);var Azs=this.AX.Hw(Ad,4);var AfV=A._GetAutoObject(A.Device.Helper).
Mf(Azs,A._GetAutoObject(A.Device.Helper).Dv());this.Xx=A._GetAutoObject(A.Device.
Helper).AMy(LW,AlV,AlM);this.T(Mn.toFixed());if(AfV<100)this.Gz.R((AfV.toFixed()+
CR)+A.aaR(A.acf.AMb));else this.Gz.R(A._GetAutoObject(A.acj.KR).ADc(Azs,A._GetAutoObject(
A.Device.Helper).Dv(),AIE));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Mr={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gz={I:this
},0);this.__proto__=C.Nb;this.Mr.H(Atl);this.Background.H(AZj);this.V.H(Pb);this.
AP.H(Aow);this.AP.L(A.jb.Bc);this.A$.H(Aox);this.A$.L(A.jb.Bc);this.Gz.H(AyI);this.
J(this.Mr,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gz,0);this.Gz.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mr._Done(
);this.AP._Done();this.A$._Done();this.Gz._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mr._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gz._ReInit();this.Gz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ANp={AjC:null,Of:null,AP:null,A$:null,Jx:null,AKF:0,A3a:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.Of.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AjC.H(this.Of.M);this.A$.H([this.Of.M[2]-1,0,this.Of.M[2]+1,aSize[1]]);
this.Jx.H([this.Of.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jx.Dg(this.V.AQ);if(this.AKF>0){this.AjC.L(A._GetAutoObject(A.acj.Assessment
).Qv(this.A3a));this.Of.L(A._GetAutoObject(A.acj.Assessment).XG(this.A3a));}else{
this.AjC.L(this.Background.AQ);this.Of.L(this.V.AQ);}},Ch:function(Ad){if(!this.
AX)return;this.Ht=Ad;if(!!this.AX){var IE=this.AX.CF(Ad,0);var Mn=this.AX.CF(Ad,
1);this.AKF=this.AX.CF(Ad,5);this.A3a=this.AX.Ja(Ad,17);this.T(Mn.toFixed());if(
this.AKF>0)this.Of.R(A._GetAutoObject(A.Device.Converter).Ak4(this.AKF));else this.
Of.R(Rt);var Xw=A._GetAutoObject(A.Device.Helper).ZY(6);A._GetAutoObject(A.Device.
Device).SW(Ad);var A1j=A._GetAutoObject(A.Device.Helper).Bjy(A._GetAutoObject(A.
Device.Device).Bt,9,IE,Xw,0);this.Jx.A_n(A1j.Get(3));this.Jx.A_p(A1j.Get(2));this.
Jx.A_o(A1j.Get(1));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AjC={I:this},0);A.acg.Text._Init.call(this.Of={I:this},
0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},
0);C.Jx._Init.call(this.Jx={I:this},0);this.__proto__=C.ANp;this.Of.A6(0x12);this.
Of.R(Rr);this.Of.L(A.jb.Text);this.AP.H(Aow);this.AP.L(A.jb.Bc);this.A$.H(Aox);this.
A$.L(A.jb.Bc);this.Jx.H(AZk);this.J(this.AjC,0);this.J(this.Of,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Jx,0);this.Of.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AjC._Done();this.Of._Done();this.AP.
_Done();this.A$._Done();this.Jx._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.AjC._ReInit();this.Of._ReInit();this.AP._ReInit();
this.A$._ReInit();this.Jx._ReInit();this.Of.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.AjC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Of)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jx={Afu:null,
ColoredCounterAttrSet:null,ACF:0,ACG:0,ACE:0,KY:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKy;var ALT;var AK4;var Al3=0;if(this.ACE>0){AKy=this.ACE.toFixed(
);Al3+=AKy.length;}else{AKy=AZl;Al3++;}if(this.ACG>0){ALT=this.ACG.toFixed();Al3+=
ALT.length;}else{ALT=AyJ;Al3++;}if(this.ACF>0){AK4=this.ACF.toFixed();Al3+=AK4.length;
}else{AK4=AIs;Al3++;}if(Al3<=4)this.ColoredCounterAttrSet.Ahv(A.aaL(A.fl.Af));else
if(Al3<=5)this.ColoredCounterAttrSet.Ahv(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahv(A.aaL(A.fl.Bh));this.Afu.R(((((AZm+AKy)+AZn)+ALT)+AZo)+AK4);},A_o:function(E
){if(this.ACF===E)return;this.ACF=E;this.Am();},A_p:function(E){if(this.ACG===E)
return;this.ACG=E;this.Am();},A_n:function(E){if(this.ACE===E)return;this.ACE=E;
this.Am();},Dg:function(E){if(this.KY===E)return;this.KY=E;this.ColoredCounterAttrSet.
Ahs(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Au0._Init.call(
this.Afu={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jx;this.H(AIF);this.Afu.A1(0x3F);this.Afu.H(AIF);this.
Afu.R(Rr);this.ColoredCounterAttrSet.BmE(A.jb.E1);this.ColoredCounterAttrSet.A_d(
A.jb.Ib);this.ColoredCounterAttrSet.A_c(A.jb.Gk);this.ColoredCounterAttrSet.Ahs(
A.jb.Text);this.KY=A.jb.Text;this.J(this.Afu,0);this.Afu.A99(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahv(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A9$(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afu._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afu._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahv(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANo={AtP:null
,Acj:null,Ack:null,Acl:null,Jx:null,AP:null,A$:null,Ea:null,Ly:null,AcG:null,KZ:
null,K0:null,AJK:0,AJJ:0,AJI:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acj.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcG.H(this.
Acj.M);this.A$.H([this.Acj.M[2]-1,0,this.Acj.M[2]+1,aSize[1]]);this.Ack.H([this.
Acj.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KZ.H(this.Ack.M);this.Ea.H([this.
Ack.M[2]-1,0,this.Ack.M[2]+1,aSize[1]]);this.Acl.H([this.Ack.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.K0.H(this.Acl.M);this.Ly.H([this.Acl.M[2]-1,0,this.Acl.
M[2]+1,aSize[1]]);this.Jx.H([this.Acl.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jx.Dg(this.V.AQ);this.Acj.L(A._GetAutoObject(A.acj.
Assessment).Qv(this.AJI));this.Ack.L(A._GetAutoObject(A.acj.Assessment).Qv(this.
AJJ));this.Acl.L(A._GetAutoObject(A.acj.Assessment).Qv(this.AJK));this.AcG.L(A._GetAutoObject(
A.acj.Assessment).XG(this.AJI));this.KZ.L(A._GetAutoObject(A.acj.Assessment).XG(
this.AJJ));this.K0.L(A._GetAutoObject(A.acj.Assessment).XG(this.AJK));this.AcG.Z(
!this.AJI);this.KZ.Z(!this.AJJ);this.K0.Z(!this.AJK);this.Jx.A_n(this.AtP.Get(3)
);this.Jx.A_p(this.AtP.Get(2));this.Jx.A_o(this.AtP.Get(1));},Ch:function(Ad){if(
!this.AX)return;this.Ht=Ad;if(!!this.AX){var IE=this.AX.CF(Ad,0);var Mn=this.AX.
CF(Ad,1);this.T(Mn.toFixed());A._GetAutoObject(A.Device.Device).SW(Ad);this.AJI=
A._GetAutoObject(A.Device.Helper).A2M(A._GetAutoObject(A.Device.Device).Bt,IE,0);
this.AJJ=A._GetAutoObject(A.Device.Helper).A2M(A._GetAutoObject(A.Device.Device).
Bt,IE,-1);this.AJK=A._GetAutoObject(A.Device.Helper).A2M(A._GetAutoObject(A.Device.
Device).Bt,IE,-2);this.AtP=A._GetAutoObject(A.Device.Helper).A7a(A._GetAutoObject(
A.Device.Device).Bt,IE,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Acj={I:this},0);A.acg.AL._Init.call(this.Ack={I:
this},0);A.acg.AL._Init.call(this.Acl={I:this},0);C.Jx._Init.call(this.Jx={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Ly={I:this
},0);A.acg.Text._Init.call(this.AcG={I:this},0);A.acg.Text._Init.call(this.KZ={I:
this},0);A.acg.Text._Init.call(this.K0={I:this},0);this.__proto__=C.ANo;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Ly.L(A.jb.Bc);this.AcG.R(Aoz
);this.KZ.R(Aoz);this.K0.R(Aoz);this.J(this.Acj,0);this.J(this.Ack,0);this.J(this.
Acl,0);this.J(this.Jx,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.Ly,0);this.J(this.AcG,0);this.J(this.KZ,0);this.J(this.K0,0);this.AcG.S(A.
aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af));this.AtP=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acj._Done();this.Ack._Done();this.Acl._Done();this.Jx._Done();this.AP.
_Done();this.A$._Done();this.Ea._Done();this.Ly._Done();this.AcG._Done();this.KZ.
_Done();this.K0._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acj._ReInit();this.Ack._ReInit();this.Acl._ReInit();this.Jx._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ly._ReInit();this.AcG.
_ReInit();this.KZ._ReInit();this.K0._ReInit();this.AcG.S(A.aaL(A.fl.Af));this.KZ.
S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acj).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.Am4={H$:null,XJ:false,Bl:function(aSize){var
B;this.H$.H([(aSize[0]-((B=this.H$.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H$.M[0]-10,40]);C.TP.Bl.call(this,aSize);},Ai:function(Ae){C.TP.Ai.call(
this,Ae);if(this.XJ)this.H$.Cw(1);else this.H$.Cw(0);},Ki:function(G){if(this.XJ
)C.TP.Ki.call(this,G);},Kd:function(G){if(this.XJ)C.TP.Kd.call(this,G);},TA:function(
AI){C.TP.TA.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.XJ=true;this.ZF(
true);}else{this.H(A.abI(this.M,40));this.XJ=false;this.ZF(false);}},_Init:function(
aArg){C.TP._Init.call(this,aArg);A.acg.Ap._Init.call(this.H$={I:this},0);this.__proto__=
C.Am4;this.V.A6(0x11);this.H$.H(AH3);this.H$.Cw(0);this.J(this.H$,0);this.V.Cr(A.
aaL(A.fl.Bh));this.H$.Ax(A.aaL(A.ach.AqX));},_Done:function(){this.__proto__=C.TP;
this.H$._Done();C.TP._Done.call(this);},_ReInit:function(){C.TP._ReInit.call(this
);this.H$._ReInit();this.V.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TP._Mark.
call(this,D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AGq={_Init:function(aArg){C.Axv._Init.call(this,aArg);this.__proto__=C.AGq;}
,_className:"Application::OptionsOverlaySeparator"};C.AkJ={DL:A.jV,Bw:true,_Init:
function(aArg){C.Axv._Init.call(this,aArg);this.__proto__=C.AkJ;},_className:"Application::OptionsOverlayNode"
};C.ZH={AR:null,_Init:function(aArg){C.AkJ._Init.call(this,aArg);this.__proto__=
C.ZH;},_Mark:function(D){var B;C.AkJ._Mark.call(this,D);if((B=this.AR)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ANU={Ai:function(Ae){C.O4.Ai.call(this,Ae);var FT=A.jb.CJ;var G0=A.jb.Text;if(
this.Hm){FT=A.jb.Text;G0=A.jb.Bm;}this.Background.L(FT);this.V.L(G0);},_Init:function(
aArg){C.O4._Init.call(this,aArg);this.__proto__=C.ANU;},_className:"Application::DarkThemeTextItem"
};C.O4={Background:null,BW:null,V:null,AqE:0,Hm:false,Init:function(aArg){},Bl:function(
aSize){C.Hj.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.BW.H(A.abK(this.BW.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.Hj.Ai.call(this,Ae);this.BW.L(this.AqE);},T:function(E){if(this.DL===E)return;
this.DL=E;this.V.R(E);},Bi:function(E){if(this.Hm===E)return;this.Hm=E;this.Am();
},AnD:function(E){if(this.AqE===E)return;this.AqE=E;this.Am();},_Init:function(aArg
){C.Hj._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.
BW._Init.call(this.BW={I:this},0);C.CG._Init.call(this.V={I:this},0);this.__proto__=
C.O4;this.H(BD);this.Background.H(AIG);this.BW.H(BD);this.BW.Nu(2);this.BW.L(A.jb.
Rl);this.V.H(AZp);this.AqE=A.jb.Rl;this.J(this.Background,0);this.J(this.BW,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hj;this.Background._Done(
);this.BW._Done();this.V._Done();C.Hj._Done.call(this);},_ReInit:function(){C.Hj.
_ReInit.call(this);this.Background._ReInit();this.BW._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.V.Cr(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;C.Hj._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.APV={Es:null,IU:null
,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.Es={
I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);this.__proto__=C.APV;this.H(
Oi);this.Background.H(Oi);this.Es.H(AIH);this.Es.R(A.aaR(A.acf.GO));this.Es.A6(0x11
);this.Es.L(A.jb.Text);this.IU.A1(0x3F);this.IU.H(AII);this.IU.Ho(5);this.IU.A6(
0x14);this.IU.R(A.aaR(A.acf.AG9));this.IU.L(A.jb.Text);this.J(this.Es,0);this.J(
this.IU,0);this.Es.S(A.aaL(A.fl.Af));this.IU.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.IU._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.IU._ReInit();this.Es.R(
A.aaR(A.acf.GO));this.IU.R(A.aaR(A.acf.AG9));this.Es.S(A.aaL(A.fl.Af));this.IU.S(
A.aaL(A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.DS={Su:null,Sv:null,AeH:null,Ag_:null,QP:null
,KY:0,LastTemperature:0,AqK:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Su.Ax(A.aaL(A.ach.AvN));this.Sv.Ax(A.aaL(A.ach.AvN));}break;case 2:{this.Su.Ax(A.
aaL(A.ach.AvQ));this.Sv.Ax(A.aaL(A.ach.AvQ));}break;default:{this.Su.Ax(A.aaL(A.
ach.AeC));this.Sv.Ax(A.aaL(A.ach.AeC));}}this.Su.L(A._GetAutoObject(A.acj.Assessment
).Qv(this.AqK));var ApU;if(this.IsWatch)ApU=A.aaL(A.ach.AQZ);else if(this.IsFever
){ApU=A.aaL(A.ach.AQY);switch(A._GetAutoObject(A.Device.Converter).Ajp(this.LastTemperature
,this.AnimalType)){case 3:this.QP.L(A.jb.Gk);break;case 2:this.QP.L(A.jb.Ib);break;
case 1:this.QP.L(A.jb.E1);break;case 0:this.QP.L(A.jb.Afy);break;default:;}}else
if(this.IsAlarm){ApU=A.aaL(A.ach.AQX);if(!this.AqK||(this.AqK===5))this.QP.L(A.jb.
Gk);else this.QP.L(0xFF000000);}else ApU=null;this.AeH.Ax(ApU);this.Ag_.Ax(ApU);
this.QP.Ax(ApU);if(A._GetAutoObject(A.acj.Assessment).Qv(this.AqK)===A.jb.E1)this.
Sv.L(this.KY);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AFo:function(E){if(this.AqK===E)return;this.AqK=E;this.Am();},Dg:function(
E){if(this.KY===E)return;this.KY=E;this.Am();},Ae9:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uy:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae5:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae$:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E7:function(){this.EC(0);this.AFo(0);this.Ae5(false);this.Uy(false
);this.Ae9(false);this.Ae$(0);this.Dg(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Su={I:this},0);A.acg.Ap._Init.call(
this.Sv={I:this},0);A.acg.Ap._Init.call(this.AeH={I:this},0);A.acg.Ap._Init.call(
this.Ag_={I:this},0);A.acg.Ap._Init.call(this.QP={I:this},0);this.__proto__=C.DS;
this.H(Alm);this.Su.A1(0x3F);this.Su.H(Alm);this.Su.L(A.jb.CJ);this.Su.A6(0x12);
this.Su.Cw(0);this.Sv.A1(0x3F);this.Sv.H(Alm);this.Sv.L(0xFF000000);this.Sv.A6(0x12
);this.Sv.Cw(1);this.AeH.A1(0x3F);this.AeH.H(Alm);this.AeH.L(0xFF000000);this.AeH.
Cw(0);this.Ag_.A1(0x3F);this.Ag_.H(Alm);this.Ag_.Cw(1);this.QP.A1(0x3F);this.QP.
H(Alm);this.QP.L(A.jb.CU);this.QP.Cw(2);this.KY=A.jb.Text;this.J(this.Su,0);this.
J(this.Sv,0);this.J(this.AeH,0);this.J(this.Ag_,0);this.J(this.QP,0);this.Su.Ax(
A.aaL(A.ach.AeC));this.Sv.Ax(A.aaL(A.ach.AeC));},_Done:function(){this.__proto__=
A.Core.P;this.Su._Done();this.Sv._Done();this.AeH._Done();this.Ag_._Done();this.
QP._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Su._ReInit();this.Sv._ReInit();this.AeH._ReInit();this.Ag_._ReInit();
this.QP._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.ANl={Ch:function(Ad){C.AjE.Ch.call(this,Ad);if(!!this.AX){var BAz=this.AX.H7(
Ad,12);var ByR=this.AX.Sq(Ad,15);this.Abo.R(A._GetAutoObject(A.Device.Helper).Mf(
ByR,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sw.Z(BAz);this.Am();
}},_Init:function(aArg){C.AjE._Init.call(this,aArg);this.__proto__=C.ANl;},_className:
"Application::CalfListAlarmItem"};C.ADF={D0:null,MC:null,_Init:function(aArg){C.
T5._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.MC={I:this},0);this.__proto__=C.ADF;this.D0.H(Aoy);this.D0.KX(true);this.
D0.R(A.aaR(A.acf.A6q));this.D0.L(A.jb.Text);this.MC.H(AZq);this.MC.Je(false);this.
MC.L(A.jb.Text);this.MC.A6(0x12);this.J(this.D0,-2);this.J(this.MC,0);this.D0.S(
A.aaL(A.fl.Ak));this.MC.Ax(A.aaL(A.ach.AD4));},_Done:function(){this.__proto__=C.
T5;this.D0._Done();this.MC._Done();C.T5._Done.call(this);},_ReInit:function(){C.
T5._ReInit.call(this);this.D0._ReInit();this.MC._ReInit();this.D0.R(A.aaR(A.acf.
A6q));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.T5._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MC)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.Kp={Background:null,BW:
null,AC6:0,ACj:0,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Background.L(this.
AC6);this.BW.L(this.ACj);},AwQ:function(E){if(this.AC6===E)return;this.AC6=E;this.
Am();},AFg:function(E){if(this.ACj===E)return;this.ACj=E;this.Am();},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.call(this.Background={I:this
},0);A.acg.Ap._Init.call(this.BW={I:this},0);this.__proto__=C.Kp;this.H(AoA);this.
Background.A1(0x3C);this.Background.H(AoA);this.Background.Cw(1);this.BW.A1(0x3C
);this.BW.H(AoA);this.AC6=A.jb.E1;this.ACj=A.jb.Text;this.J(this.Background,0);this.
J(this.BW,0);this.Background.Ax(A.aaL(A.ach.Kp));this.BW.Ax(A.aaL(A.ach.Kp));},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.BW._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background.
_ReInit();this.BW._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.AmM={Q:null,Px:
null,A7R:false,Bl:function(aSize){C.Mx.Bl.call(this,aSize);this.V.H([].concat(this.
Px.M[2]-this.V.Text.Jh,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mx.Ai.call(this
,Ae);this.Px.L(this.V.AQ);},AwV:function(E){if(this.A7R===E)return;this.A7R=E;if(
E)this.Px.R(AZr);else this.Px.R(AIJ);},Hg:function(G){var F;if(!!this.Q)this.AwV((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)
A.pe([this,this.Hg],this);},_Init:function(aArg){C.Mx._Init.call(this,aArg);A.acg.
Text._Init.call(this.Px={I:this},0);this.__proto__=C.AmM;this.Px.A1(0x34);this.Px.
H(Th);this.Px.R(AIJ);this.J(this.Px,0);this.Px.S(A.aaL(A.fl.AOO));},_Done:function(
){this.__proto__=C.Mx;this.Px._Done();C.Mx._Done.call(this);},_ReInit:function(){
C.Mx._ReInit.call(this);this.Px._ReInit();},_Mark:function(D){var B;C.Mx._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Px)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
APb={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad2(4));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APb;
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
};C.APW={Gp:null,Lq:null,YZ:null,Init:function(aArg){this.Lq.R(A._GetAutoObject(
A.acj.Temperature).AlR());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gp={I:this},0);A.acg.Text._Init.call(this.Lq={I:this},0);A.
acg.Text._Init.call(this.YZ={I:this},0);this.__proto__=C.APW;this.Background.L(A.
jb.Text);this.Gp.H(AIK);this.Gp.A6(0x11);this.Gp.R(A.aaR(A.acf.Date));this.Gp.L(
A.jb.Bm);this.Lq.H(AZs);this.Lq.A6(0x12);this.Lq.L(A.jb.Bm);this.YZ.H(AZt);this.
YZ.A6(0x12);this.YZ.R(A.aaR(A.acf.Bs));this.YZ.L(A.jb.Bm);this.J(this.Gp,0);this.
J(this.Lq,0);this.J(this.YZ,0);this.Gp.S(A.aaL(A.fl.Af));this.Lq.S(A.aaL(A.fl.Af
));this.YZ.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Gp._Done();this.Lq._Done();this.YZ._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Gp._ReInit();this.Lq._ReInit();this.YZ._ReInit(
);this.Gp.R(A.aaR(A.acf.Date));this.YZ.R(A.aaR(A.acf.Bs));this.Gp.S(A.aaL(A.fl.Af
));this.Lq.S(A.aaL(A.fl.Af));this.YZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TJ={Lk:null,AjS:false,Init:function(
aArg){var B;A.zX([this,this.Bb$],[B=A._GetAutoObject(A.Device.Device),B.AER,B.AI2
],0);this.AG2(this);A.pe([this,this.AoG],this);},DF:function(G){var D5=(A.Core.BF.
isPrototypeOf(G)?G:null);switch(D5.CP){case 6:this.Ov(this);break;case 7:this.M5(
this);break;default:D5.Mw=true;}},CC:function(G){var B;if(!!this.Lk)this.Lk.CC(this
);C.AB.CC.call(this,G);},E4:function(G){var B;if(!!this.Lk)this.Lk.E4(this);C.AB.
E4.call(this,G);},Anu:function(G){A._GetAutoObject(C.A7).FB();},AG2:function(G){
var B;if(!!this.Lk){this.Lk.E4(this);this.HR(this.Lk);}if(this.AjS)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lk=A._NewObject(C.AMF,0);break;case 1:this.Lk=A.
_NewObject(C.AMG,0);break;case 3:this.Lk=A._NewObject(C.AME,0);break;case 2:this.
Lk=A._NewObject(C.AMH,0);break;default:throw new Error(AIL);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lk=A._NewObject(C.AMI,0);break;case 1:this.Lk=A.
_NewObject(C.AMR,0);break;case 3:this.Lk=A._NewObject(C.AML,0);break;case 2:this.
Lk=A._NewObject(C.AMW,0);break;default:throw new Error(AIL);}this.HS(this);this.
J(this.Lk,0);this.Lk.H(Ff);this.Lk.ZC([this,this.A07]);this.Lk.CC(this);this.Bb(
this.Lk);},Bb$:function(s){this.AG2(s);},Bow:function(G){A._GetAutoObject(A.Device.
Device).AeZ(0);},AUd:function(G){A._GetAutoObject(A.Device.Device).AeZ(1);},AUc:
function(G){A._GetAutoObject(A.Device.Device).AeZ(3);},AUe:function(G){A._GetAutoObject(
A.Device.Device).AeZ(2);},HS:function(G){this.N.C3(A.aaL(A.ach.E2));this.N.Hz(A.
jV);this.N.CE=[this,this.Anu];this.N.AFu(A.aaL(A.fl.Ak));},AoG:function(s){this.
HS(s);},Bng:function(E){if(this.AjS===E)return;this.AjS=E;A.pe([this,this.Bb$],this
);},A$o:function(G){this.Bng(!this.AjS);},Boz:function(G){A._GetAutoObject(A.Device.
Device).AY(31,true,A.jV,0,null);},M5:function(G){},BHa:function(s){this.M5(s);},
Ov:function(G){},BG$:function(s){this.Ov(s);},Bfy:function(G){var FS=A._GetAutoObject(
A.Device.Device).D9;FS=FS+1;if(FS>=4)FS=0;A._GetAutoObject(A.Device.Device).AeZ(
FS);},BBt:function(G){var FS=A._GetAutoObject(A.Device.Device).D9;FS=FS-1;if(FS<
0)FS=3;A._GetAutoObject(A.Device.Device).AeZ(FS);},Agc:function(G){},A07:function(
s){this.Agc(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TJ;this.Background.H(Cf);this.N.Z(true);this.N.OW(true);this.N.OX(true);this.Dr(
C.APL);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lk)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Do:null,CC:function(G){},AI1:function(s){this.CC(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyX:function(s){
this.E4(s);},ZC:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Do.BG=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=
C.D9;this.H(U5);this.AttrSet.A_d(A.jb.Gk);this.AttrSet.A_c(A.jb.Ib);this.AttrSet.
Ahs(A.jb.Text);this.Do.Filter=1;this.AttrSet.Ahv(A.aaL(A.fl.Ak));this.AttrSet.A9$(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Do._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Do._ReInit();this.AttrSet.Ahv(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMI={RZ:
null,Aa7:null,TI:null,TH:null,R3:null,QH:null,R4:null,R1:null,R2:null,R0:null,CQ:
function(){var B;this.RZ.Ch(this);this.Aa7.Ch(this);this.TI.Ch(this);this.TH.Ch(
this);this.R3.Ch(this);this.QH.Ch(this);this.R4.Ch(this);this.R1.Ch(this);this.R2.
Ch(this);this.R0.Ch(this);},GH:function(G){C.R5.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RZ.Z(true);this.Aa7.Z(false);
this.R1.Z(false);this.R2.Z(false);this.R0.Z(false);this.R3.Z(true);this.QH.Z(true
);this.R4.Z(true);}break;case 1:{this.RZ.Z(false);this.Aa7.Z(true);this.R1.Z(true
);this.R2.Z(true);this.R0.Z(true);this.R3.Z(false);this.QH.Z(false);this.R4.Z(false
);}break;default:A.ab5("%s%e",Ali,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.MZ],this);},_Init:function(aArg){C.R5._Init.call(this,aArg);C.
RZ._Init.call(this.RZ={I:this},0);C.AMD._Init.call(this.Aa7={I:this},0);C.TI._Init.
call(this.TI={I:this},0);C.TH._Init.call(this.TH={I:this},0);C.R3._Init.call(this.
R3={I:this},0);C.QH._Init.call(this.QH={I:this},0);C.R4._Init.call(this.R4={I:this
},0);C.R1._Init.call(this.R1={I:this},0);C.R2._Init.call(this.R2={I:this},0);C.R0.
_Init.call(this.R0={I:this},0);this.__proto__=C.AMI;this.RZ.H(BD);this.RZ.Aj(true
);this.RZ.Bi(false);this.Aa7.H(I1);this.Aa7.Aj(true);this.Aa7.Bi(false);this.TI.
H(Qg);this.TI.Aj(true);this.TI.Bi(true);this.TH.H(Aan);this.TH.Aj(true);this.TH.
Bi(false);this.R3.H(Alk);this.R3.Aj(true);this.R3.Bi(true);this.QH.H(Aot);this.QH.
Aj(true);this.QH.Bi(false);this.R4.H(Atg);this.R4.Aj(true);this.R4.Bi(true);this.
R1.H(U6);this.R1.Aj(true);this.R1.Bi(true);this.R2.H(AZu);this.R2.Aj(true);this.
R2.Bi(false);this.R0.H(AZv);this.R0.Aj(true);this.R0.Bi(true);this.J(this.RZ,0);
this.J(this.Aa7,0);this.J(this.TI,0);this.J(this.TH,0);this.J(this.R3,0);this.J(
this.QH,0);this.J(this.R4,0);this.J(this.R1,0);this.J(this.R2,0);this.J(this.R0,
0);},_Done:function(){this.__proto__=C.R5;this.RZ._Done();this.Aa7._Done();this.
TI._Done();this.TH._Done();this.R3._Done();this.QH._Done();this.R4._Done();this.
R1._Done();this.R2._Done();this.R0._Done();C.R5._Done.call(this);},_ReInit:function(
){C.R5._ReInit.call(this);this.RZ._ReInit();this.Aa7._ReInit();this.TI._ReInit();
this.TH._ReInit();this.R3._ReInit();this.QH._ReInit();this.R4._ReInit();this.R1.
_ReInit();this.R2._ReInit();this.R0._ReInit();this.CQ();},_Mark:function(D){var B;
C.R5._Mark.call(this,D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TI)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.TH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMW={AkW:function(L_){if(!L_)return;var Fy=A._NewObject(
A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HZ);var Ada=A._NewObject(
A.Device.Int32FilterCriterion,0);Ada.Initialize(8,2,0,true);Fy.CX(Ada);L_.Bk(Fy);
},AEh:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var Pp=A.
_GetAutoObject(A.Device.Device).Bt.B_();if(Pp<2)return false;var BCU=A._GetAutoObject(
A.Device.Device).Bt.Hw(0,6);var BCV=A._GetAutoObject(A.Device.Device).Bt.Hw(Pp-1
,6);var A2B=A._NewObject(A.Core.Bs,0);A2B.Initialize(BCU);var A4G=A._NewObject(A.
Core.Bs,0);A4G.Initialize(BCV);if((A2B.Ab7()!==A4G.Ab7())||(A2B.Year!==A4G.Year)
)return true;else return false;},_Init:function(aArg){C.Aa9._Init.call(this,aArg
);this.__proto__=C.AMW;this.ATF(C.AHB);this.ATG(C.ADL);this.ATv(C.QH);this.Ar0(A.
aaR(A.acf.AWc));this.Dl(A.aaR(A.acf.Akn));},_ReInit:function(){C.Aa9._ReInit.call(
this);this.Ar0(A.aaR(A.acf.AWc));this.Dl(A.aaR(A.acf.Akn));},_className:"Application::AnimalWeights"
};C.AMR={AkW:function(L_){if(!L_)return;var Fy=A._NewObject(A.Device.Filter,0);var
HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fy.CX(HZ);var ABx=A._NewObject(A.Device.Int32FilterCriterion
,0);ABx.Initialize(7,2,0,true);Fy.CX(ABx);L_.Bk(Fy);},AEh:function(){return A._GetAutoObject(
A.Device.Device).Bt.B_()>0;},_Init:function(aArg){C.Aa9._Init.call(this,aArg);this.
__proto__=C.AMR;this.ATF(C.AVy);this.ATG(C.APW);this.ATv(C.TI);this.Ar0(A.aaR(A.
acf.A8d));this.Dl(A.aaR(A.acf.ArD));},_ReInit:function(){C.Aa9._ReInit.call(this
);this.Ar0(A.aaR(A.acf.A8d));this.Dl(A.aaR(A.acf.ArD));},_className:"Application::AnimalTemperatures"
};C.AUD={VL:null,VM:null,X6:null,AgL:null,KE:null,AP:null,A$:null,Ea:null,Ly:null
,AnZ:null,KZ:null,K0:null,ZV:null,ZW:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.KE.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VL.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VL.M[2]-1,0,this.VL.M[2]+1,aSize[1]]);this.VM.H([this.VL.M[2],0,this.VL.M[2]+22,
aSize[1]]);this.Ly.H([this.VM.M[2]-1,0,this.VM.M[2]+1,aSize[1]]);this.X6.H([this.
VM.M[2],0,this.VM.M[2]+22,aSize[1]]);this.AnZ.H([this.X6.M[2]-1,0,this.X6.M[2]+1
,aSize[1]]);this.AgL.H([this.X6.M[2],0,aSize[0],aSize[1]]);this.KZ.H(this.VL.M);
this.K0.H(this.VM.M);this.ZV.H(this.X6.M);this.ZW.H(this.AgL.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.KE.L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;if(!!this.AX){var AlI=this.AX.Hw(Ad,6);var A1T=this.AX.Ja(Ad,3);var A2x=
this.AX.Ja(Ad,2);var A2w=this.AX.Ja(Ad,5);var A4u=this.AX.Ja(Ad,4);this.T(A._GetAutoObject(
A.acj.KR).ADb(AlI));this.KE.R(A._GetAutoObject(A.acj.KR).A66(AlI));this.VL.L(A._GetAutoObject(
A.acj.Assessment).Qv(A1T));this.VM.L(A._GetAutoObject(A.acj.Assessment).Qv(A2x));
this.X6.L(A._GetAutoObject(A.acj.Assessment).Qv(A2w));this.AgL.L(A._GetAutoObject(
A.acj.Assessment).Qv(A4u));this.KZ.L(A._GetAutoObject(A.acj.Assessment).XG(A1T));
this.K0.L(A._GetAutoObject(A.acj.Assessment).XG(A2x));this.ZV.L(A._GetAutoObject(
A.acj.Assessment).XG(A2w));this.ZW.L(A._GetAutoObject(A.acj.Assessment).XG(A4u));
this.KZ.Z(A1T===5);this.K0.Z(A2x===5);this.ZV.Z(A2w===5);this.ZW.Z(A4u===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
VL={I:this},0);A.acg.AL._Init.call(this.VM={I:this},0);A.acg.AL._Init.call(this.
X6={I:this},0);A.acg.AL._Init.call(this.AgL={I:this},0);A.acg.Text._Init.call(this.
KE={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Ly={I:this},0);A.acg.AL._Init.call(this.AnZ={I:this},0);A.acg.Text._Init.call(this.
KZ={I:this},0);A.acg.Text._Init.call(this.K0={I:this},0);A.acg.Text._Init.call(this.
ZV={I:this},0);A.acg.Text._Init.call(this.ZW={I:this},0);this.__proto__=C.AUD;this.
V.H(Pb);this.VL.H(AZw);this.VM.H(AZx);this.X6.H(AZy);this.AgL.H(AZz);this.KE.R(Rr
);this.KE.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ly.L(A.jb.Bc);this.AnZ.L(A.jb.Bc);this.KZ.H(AZA);this.KZ.R(Rt);this.K0.H(AZB
);this.K0.R(Rt);this.ZV.H(AZC);this.ZV.R(Rt);this.ZW.H(AZD);this.ZW.R(Rt);this.J(
this.VL,0);this.J(this.VM,0);this.J(this.X6,0);this.J(this.AgL,0);this.J(this.KE
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Ly,0);this.
J(this.AnZ,0);this.J(this.KZ,0);this.J(this.K0,0);this.J(this.ZV,0);this.J(this.
ZW,0);this.KE.S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af
));this.ZV.S(A.aaL(A.fl.Af));this.ZW.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VL._Done();this.VM._Done();this.X6._Done();this.AgL._Done(
);this.KE._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Ly._Done(
);this.AnZ._Done();this.KZ._Done();this.K0._Done();this.ZV._Done();this.ZW._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VL._ReInit(
);this.VM._ReInit();this.X6._ReInit();this.AgL._ReInit();this.KE._ReInit();this.
AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ly._ReInit();this.AnZ._ReInit(
);this.KZ._ReInit();this.K0._ReInit();this.ZV._ReInit();this.ZW._ReInit();this.KE.
S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.K0.S(A.aaL(A.fl.Af));this.ZV.S(
A.aaL(A.fl.Af));this.ZW.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VM)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.K0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APU={Gp:null,Y5:null,Y1:null,Y2:null,Y3:null,Y4:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gp={I:this},0);A.acg.Text._Init.call(this.Y5={I:this},0);A.acg.Text._Init.call(this.
Y1={I:this},0);A.acg.Text._Init.call(this.Y2={I:this},0);A.acg.Text._Init.call(this.
Y3={I:this},0);A.acg.Text._Init.call(this.Y4={I:this},0);this.__proto__=C.APU;this.
Background.L(A.jb.Text);this.Gp.H(AIK);this.Gp.A6(0x11);this.Gp.R(A.aaR(A.acf.Date
));this.Gp.L(A.jb.Bm);this.Y5.H(AIC);this.Y5.A6(0x12);this.Y5.R(A.aaR(A.acf.Bs));
this.Y5.L(A.jb.Bm);this.Y1.H(AZE);this.Y1.A6(0x12);this.Y1.R(A.aaR(A.acf.AUF));this.
Y1.L(A.jb.Bm);this.Y2.H(AZF);this.Y2.A6(0x12);this.Y2.R(A.aaR(A.acf.AUG));this.Y2.
L(A.jb.Bm);this.Y3.H(AZG);this.Y3.A6(0x12);this.Y3.R(A.aaR(A.acf.AOK));this.Y3.L(
A.jb.Bm);this.Y4.H(AZH);this.Y4.A6(0x12);this.Y4.R(A.aaR(A.acf.ANL));this.Y4.L(A.
jb.Bm);this.J(this.Gp,0);this.J(this.Y5,0);this.J(this.Y1,0);this.J(this.Y2,0);this.
J(this.Y3,0);this.J(this.Y4,0);this.Gp.S(A.aaL(A.fl.Af));this.Y5.S(A.aaL(A.fl.Af
));this.Y1.S(A.aaL(A.fl.Af));this.Y2.S(A.aaL(A.fl.Af));this.Y3.S(A.aaL(A.fl.Af));
this.Y4.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Gp._Done();
this.Y5._Done();this.Y1._Done();this.Y2._Done();this.Y3._Done();this.Y4._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Gp._ReInit(
);this.Y5._ReInit();this.Y1._ReInit();this.Y2._ReInit();this.Y3._ReInit();this.Y4.
_ReInit();this.Gp.R(A.aaR(A.acf.Date));this.Y5.R(A.aaR(A.acf.Bs));this.Y1.R(A.aaR(
A.acf.AUF));this.Y2.R(A.aaR(A.acf.AUG));this.Y3.R(A.aaR(A.acf.AOK));this.Y4.R(A.
aaR(A.acf.ANL));this.Gp.S(A.aaL(A.fl.Af));this.Y5.S(A.aaL(A.fl.Af));this.Y1.S(A.
aaL(A.fl.Af));this.Y2.S(A.aaL(A.fl.Af));this.Y3.S(A.aaL(A.fl.Af));this.Y4.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Gp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AML={AkW:function(L_){if(!L_)return;
var Fy=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HZ);var
ABe=A._NewObject(A.Device.AssessmentFilterCriterion,0);ABe.Initialize(3,5,0,true
);Fy.CX(ABe);L_.Bk(Fy);},AEh:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B_()>0;},_Init:function(
aArg){C.Aa9._Init.call(this,aArg);this.__proto__=C.AML;this.ATF(C.AUD);this.ATG(
C.APU);this.ATv(C.TH);this.Ar0(A.aaR(A.acf.AxA));this.Dl(A.aaR(A.acf.Ant));},_ReInit:
function(){C.Aa9._ReInit.call(this);this.Ar0(A.aaR(A.acf.AxA));this.Dl(A.aaR(A.acf.
Ant));},_className:"Application::AnimalRatings"};C.IK={B7:null,Y:null,V:null,UC:
5,T:function(E){C.I9.T.call(this,E);this.V.R(E);},Dg:function(E){C.I9.Dg.call(this
,E);this.V.L(E);},S:function(E){if(this.B7===E)return;this.B7=E;this.V.S(this.B7
);},Au3:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dd(0x1))[2]-B[0])>((B=NK.M)[2]-B[0]))this.S(A.aaL(A.fl.HL));},Kz:function(
E){if(this.UC===E)return;this.UC=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
AA_:function(G){A.pe([this,this.Au3],this);},_Init:function(aArg){C.I9._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.IK;this.Y.A1(0x3F);this.Y.H(AyK);this.Y.A_7(5);this.
Y.JZ(3);this.V.A1(0x34);this.V.H(Aap);this.V.Je(true);this.V.A6(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Y,0);this.J(this.V,0);this.Y.Em=[this,this.
AA_];this.V.S(A.aaL(A.fl.Kt));},_Done:function(){this.__proto__=C.I9;this.Y._Done(
);this.V._Done();C.I9._Done.call(this);},_ReInit:function(){C.I9._ReInit.call(this
);this.Y._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Kt));},_Mark:function(D){
var B;C.I9._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RZ={AfV:0,Ai:function(Ae){C.FA.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RU));if(this.AfV>=0)this.KB((this.AfV.toFixed(
)+CR)+A.aaR(A.acf.Kq));else this.KB(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.
Ch.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfV=-1;
else this.AfV=A._GetAutoObject(A.Device.Helper).W.RU();this.Am();},_Init:function(
aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RZ;},_className:"Application::AnimalInfoItemAge"
};C.R3={A5a:0,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afz));if(
this.A5a>0)this.KB((A._GetAutoObject(A.Device.Converter).Alb(this.A5a)+CR)+A._GetAutoObject(
A.acj.DU).Af8());else this.KB(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(
this,G);this.A5a=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.R3;},_className:
"Application::AnimalInfoItemWeight"};C.TI={Y:null,Ei:null,Ey:null,Fe:null,P4:null
,Fd:null,P5:null,Ajk:0,Po:0,CQ:function(){this.Am();},Ai:function(Ae){C.JQ.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Biz));this.Fe.R(this.Ajk.toFixed());this.Fd.R(this.Po.
toFixed());if(!!this.Ajk||!!this.Po)this.P5.R(AIM+(this.Ajk+this.Po).toFixed());
else this.P5.R(A.aaR(A.acf.ASB));},Ch:function(G){C.JQ.Ch.call(this,G);var Ak3;Ak3=
A._GetAutoObject(A.Device.Helper).Bjz(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.Ajk=Ak3.Get(2);this.Po=Ak3.Get(1);this.Am();},Dg:
function(E){C.JQ.Dg.call(this,E);this.P4.L(E);this.P5.L(E);},AsY:function(G){if(
!!this.Ajk||!!this.Po){this.Fe.Z(true);this.P4.Z(true);this.Fd.Z(true);}else{this.
Fe.Z(false);this.P4.Z(false);this.Fd.Z(false);}this.Ei.H(this.Fe.M);this.Ei.Z(this.
Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq());},Au3:function(G){var B;var
NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;if(((B=NK.Dd(0x1))[2]-B[0])>((
B=NK.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.P4.S(A.aaL(A.fl.Ak));this.Fe.S(
A.aaL(A.fl.Ak));this.P5.S(A.aaL(A.fl.Ak));}},AA_:function(G){A.pe([this,this.Au3
],this);},_Init:function(aArg){C.JQ._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.Ey={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
P4={I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
P5={I:this},0);this.__proto__=C.TI;this.Y.H(AyL);this.Y.Boe(0);this.Y.JZ(3);this.
Ei.H(AZI);this.Ei.L(A.jb.Ib);this.Ey.H(AyI);this.Ey.L(A.jb.Gk);this.Fe.A1(0x34);
this.Fe.H(Aap);this.Fe.Ho(2);this.Fe.Je(true);this.Fe.R(U8);this.Fe.L(A.jb.Text);
this.Fe.Aj(true);this.P4.A1(0x34);this.P4.H(Aap);this.P4.Je(true);this.P4.R(AIt);
this.P4.L(A.jb.Text);this.P4.Aj(true);this.Fd.A1(0x34);this.Fd.H(Aap);this.Fd.Ho(
2);this.Fd.Je(true);this.Fd.R(U8);this.Fd.L(A.jb.Bm);this.Fd.Aj(true);this.P5.A1(
0x34);this.P5.H(Aap);this.P5.Je(true);this.P5.R(Rr);this.P5.L(A.jb.Text);this.P5.
Aj(true);this.J(this.Y,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.Fe,0);
this.J(this.P4,0);this.J(this.Fd,0);this.J(this.P5,0);this.Y.Em=[this,this.AA_];
this.Fe.Q_([this,this.AsY]);this.Fe.S(A.aaL(A.fl.Af));this.P4.S(A.aaL(A.fl.Af));
this.Fd.Q_([this,this.AsY]);this.Fd.S(A.aaL(A.fl.Af));this.P5.S(A.aaL(A.fl.Af));
},_Done:function(){this.__proto__=C.JQ;this.Y._Done();this.Ei._Done();this.Ey._Done(
);this.Fe._Done();this.P4._Done();this.Fd._Done();this.P5._Done();C.JQ._Done.call(
this);},_ReInit:function(){C.JQ._ReInit.call(this);this.Y._ReInit();this.Ei._ReInit(
);this.Ey._ReInit();this.Fe._ReInit();this.P4._ReInit();this.Fd._ReInit();this.P5.
_ReInit();this.Fe.S(A.aaL(A.fl.Af));this.P4.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.
fl.Af));this.P5.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.JQ._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fe
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.QH={FX:0,Ih:0
,A21:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(AZJ+A.aaR(A.acf.AHw));if(
this.A21){this.KB((A._GetAutoObject(A.Device.Converter).Td(this.FX,2,true)+CR)+A.
_GetAutoObject(A.acj.DU).AaE());this.Background.L(A._GetAutoObject(A.acj.DU).Az6(
this.FX,this.Ih));this.Dg(A._GetAutoObject(A.acj.DU).Az8(this.FX,this.Ih));}else{
this.KB(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CJ);this.Dg(A.jb.Text);}},Ch:
function(G){C.FA.Ch.call(this,G);var LK=A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LK){this.A21=true;this.FX=A._GetAutoObject(A.acj.DU).AlF(LK,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A21=false;this.FX=0;}this.Ih=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.QH;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.TH={Y:null,FY:null,Ei:
null,Ey:null,MP:null,Fe:null,Fd:null,O6:null,AaG:0,Ajk:0,Po:0,CQ:function(){this.
Am();},Ai:function(Ae){C.JQ.Ai.call(this,Ae);this.T(A.aaR(A.acf.AxA));this.MP.R(
this.AaG.toFixed());this.Fe.R(this.Ajk.toFixed());this.Fd.R(this.Po.toFixed());}
,Ch:function(G){C.JQ.Ch.call(this,G);var Ak3;Ak3=A._GetAutoObject(A.Device.Helper
).A7a(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.AaG=Ak3.Get(3);this.Ajk=Ak3.Get(2);this.Po=Ak3.Get(1);this.Am();},AsY:
function(G){if((!!this.AaG||!!this.Ajk)||!!this.Po){this.MP.Z(true);this.Fe.Z(true
);this.Fd.Z(true);this.O6.Z(false);}else{this.MP.Z(false);this.Fe.Z(false);this.
Fd.Z(false);this.O6.Z(true);}this.FY.H(this.MP.M);this.FY.Z(this.MP.Fq());this.Ei.
H(this.Fe.M);this.Ei.Z(this.Fe.Fq());this.Ey.H(this.Fd.M);this.Ey.Z(this.Fd.Fq()
);},Au3:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dd(0x1))[2]-B[0])>((B=NK.M)[2]-B[0])){this.Fd.S(A.aaL(A.fl.Ak));this.Fe.
S(A.aaL(A.fl.Ak));this.MP.S(A.aaL(A.fl.Ak));}},AA_:function(G){A.pe([this,this.Au3
],this);},_Init:function(aArg){C.JQ._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FY={I:this},0);A.acg.AL._Init.call(this.Ei={
I:this},0);A.acg.AL._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MP={
I:this},0);A.acg.Text._Init.call(this.Fe={I:this},0);A.acg.Text._Init.call(this.
Fd={I:this},0);A.acg.Text._Init.call(this.O6={I:this},0);this.__proto__=C.TH;this.
Y.A1(0x3F);this.Y.H(AyL);this.Y.A_7(5);this.Y.JZ(3);this.FY.H(AZK);this.FY.L(A.jb.
E1);this.Ei.H(AZL);this.Ei.L(A.jb.Ib);this.Ey.H(AZM);this.Ey.L(A.jb.Gk);this.MP.
A1(0x3C);this.MP.H(Aap);this.MP.Ho(2);this.MP.Je(true);this.MP.R(U8);this.MP.L(A.
jb.Text);this.MP.Aj(true);this.Fe.A1(0x3C);this.Fe.H(Aap);this.Fe.Ho(2);this.Fe.
Je(true);this.Fe.R(U8);this.Fe.L(A.jb.Text);this.Fe.Aj(true);this.Fd.A1(0x3C);this.
Fd.H(Aap);this.Fd.Ho(2);this.Fd.Je(true);this.Fd.R(U8);this.Fd.L(A.jb.Bm);this.Fd.
Aj(true);this.O6.A1(0x34);this.O6.H(Aap);this.O6.Je(true);this.O6.A6(0x11);this.
O6.R(A.aaR(A.acf.ASB));this.O6.L(A.jb.Text);this.O6.Aj(true);this.O6.Z(false);this.
J(this.Y,0);this.J(this.FY,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.MP
,0);this.J(this.Fe,0);this.J(this.Fd,0);this.J(this.O6,0);this.Y.Em=[this,this.AA_
];this.MP.Q_([this,this.AsY]);this.MP.S(A.aaL(A.fl.Af));this.Fe.Q_([this,this.AsY
]);this.Fe.S(A.aaL(A.fl.Af));this.Fd.Q_([this,this.AsY]);this.Fd.S(A.aaL(A.fl.Af
));this.O6.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JQ;this.Y._Done(
);this.FY._Done();this.Ei._Done();this.Ey._Done();this.MP._Done();this.Fe._Done(
);this.Fd._Done();this.O6._Done();C.JQ._Done.call(this);},_ReInit:function(){C.JQ.
_ReInit.call(this);this.Y._ReInit();this.FY._ReInit();this.Ei._ReInit();this.Ey.
_ReInit();this.MP._ReInit();this.Fe._ReInit();this.Fd._ReInit();this.O6._ReInit(
);this.O6.R(A.aaR(A.acf.ASB));this.MP.S(A.aaL(A.fl.Af));this.Fe.S(A.aaL(A.fl.Af)
);this.Fd.S(A.aaL(A.fl.Af));this.O6.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(
D){var B;C.JQ._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.O6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMt={_Init:function(aArg){C.Aqm._Init.call(
this,aArg);this.__proto__=C.AMt;this.A5l=1;this.Rn.Cr(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aqm._ReInit.call(this);this.Rn.Cr(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARn={OR:null,IV:null,H_:null,IT:null,GQ:null,Al8:function(G){A.pe([this,this.
BA0],this);},BA0:function(G){A._GetAutoObject(C.A7).Cb(3);},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.OR._Init.call(this.OR={I:this},0);C.BX._Init.call(this.
IV={I:this},0);C.SX._Init.call(this.H_={I:this},0);C.AGZ._Init.call(this.IT={I:this
},0);C.Re._Init.call(this.GQ={I:this},0);this.__proto__=C.ARn;var B;this.Jf(A.aaR(
A.acf.A$9));this.IV.H(Ah4);this.IV.Aj(true);this.IV.T(A.aaR(A.acf.Language));this.
IV.A_P(100);this.H_.H(U7);this.H_.Aj(true);this.H_.T(A.aaR(A.acf.Date));this.H_.
Bi(true);this.IT.H(Aao);this.IT.Aj(true);this.IT.T(A.aaR(A.acf.Bs));this.GQ.H(Ah3
);this.GQ.Aj(true);this.GQ.Z(true);this.GQ.T(A.aaR(A.acf.AGw));this.GQ.Bi(true);
this.GQ.Ar$(false);this.GQ.A_X(true);this.J5(this.Y,-1);this.J5(this.Ay,-1);this.
J(this.IV,0);this.J(this.H_,0);this.J(this.IT,0);this.J(this.GQ,0);this.IV.ZA(A.
aaL(A.fl.H6));this.IV.ZB(A.aaL(A.fl.H6));this.IV.Au([B=this.OR,B.B$,B.Cc]);this.
IV.CK(this.OR);this.H_.Ab8([B=this.H_,B.FW]);this.H_.Gt([this,this.D_,this.GU]);
this.H_.AkB(A.aaL(A.ach.Edit));this.H_.Acc([B=A._GetAutoObject(A.Device.Helper),
B.U9,B.Va]);this.IT.Ab8([B=this.IT,B.FW]);this.IT.Gt([this,this.D_,this.GU]);this.
IT.AkB(A.aaL(A.ach.Edit));this.IT.Acc([B=A._GetAutoObject(A.Device.Helper),B.U9,
B.Va]);this.GQ.Ab8([B=this.GQ,B.FW]);this.GQ.Gt([this,this.D_,this.GU]);this.GQ.
AkB(A.aaL(A.ach.Edit));this.GQ.Au([B=A._GetAutoObject(A.Device.Device),B.AS3,B.A0Q
]);},_Done:function(){this.__proto__=C.Cg;this.OR._Done();this.IV._Done();this.H_.
_Done();this.IT._Done();this.GQ._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.OR._ReInit();this.IV._ReInit();this.H_._ReInit();
this.IT._ReInit();this.GQ._ReInit();this.Jf(A.aaR(A.acf.A$9));this.IV.T(A.aaR(A.
acf.Language));this.H_.T(A.aaR(A.acf.Date));this.IT.T(A.aaR(A.acf.Bs));this.GQ.T(
A.aaR(A.acf.AGw));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aa9={Bg:null,FE:null,Am6:null,AmP:null,Sk:null,A7w:A.jV,KS:A.jV,ARS:null,ART:
null,ADE:null,CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.A3z],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q7,B.OnSetId],0);this.A3z(this);},E4:function(
G){var B;A.z$([this,this.A3z],[B=A._GetAutoObject(A.Device.Helper).W,B.Q7,B.OnSetId
],0);C.D9.E4.call(this,G);},ZC:function(E){C.D9.ZC.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.ZC(E);},ATF:function(E){if(this.ARS===E)return;this.
ARS=E;if(!!this.Bg)this.Bg.N8(E);},ATG:function(E){if(this.ART===E)return;this.ART=
E;this.BpK(this);},ATv:function(E){if(this.ADE===E)return;this.ADE=E;A.pe([this,
this.BpJ],this);},Ar0:function(E){if(this.A7w===E)return;this.A7w=E;this.Sk.R(E);
},Dl:function(E){if(this.KS===E)return;this.KS=E;if(!!this.Bg)this.Bg.Dl(E);},AkW:
function(L_){A.ab5("%s",AZN);},AEh:function(){A.ab5("%s",Alj);return false;},AxI:
function(G){if(!!this.Bg)this.HR(this.Bg);this.Bg=A._NewObject(C.Gd,0);this.Bg.H(
Atm);this.Bg.Zy(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KS);this.Bg.
N8(this.ARS);this.Bg.ZC(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},BpK:function(
G){var B;if(!!this.FE)this.HR(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(
this.ART,0))?B:null);this.FE.H(I1);this.J(this.FE,0);},BpJ:function(G){var B;if(
!!this.Am6)this.HR(this.Am6);if(!!this.ADE&&this.AEh()){this.Am6=(C.I9.isPrototypeOf(
B=A._NewObject(this.ADE,0))?B:null);this.Am6.H(BD);this.Am6.Bi(false);this.J(this.
Am6,0);this.Sk.Z(false);}else this.Sk.Z(true);},A3z:function(G){this.AkW(A._GetAutoObject(
A.Device.Device).Bt);this.AxI(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmP={I:this},0);C.CG._Init.call(this.Sk={I:this},
0);this.__proto__=C.Aa9;this.AmP.H(BD);this.AmP.L(A.jb.CJ);this.Sk.H(AH2);this.Sk.
A6(0x11);this.Sk.L(A.jb.Text);this.J(this.AmP,0);this.J(this.Sk,0);this.Sk.S(A.aaL(
A.fl.Kt));this.Sk.A0(A.aaL(A.fl.HL));},_Done:function(){this.__proto__=C.D9;this.
AmP._Done();this.Sk._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmP._ReInit();this.Sk._ReInit();this.Sk.S(A.aaL(A.fl.Kt));this.Sk.
A0(A.aaL(A.fl.HL));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmP)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Ko={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bc8],[B=A._GetAutoObject(A.Device.Device),B.AES,B.AI3],0);A.pe([this,this.Bc8],this
);},Du:function(){return 5;},Gm:function(aIndex){return this.AnimalListContentToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zw(E);},Bc8:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Ko;this.BI.Set(0,0);this.BI.Set(1,14);this.BI.Set(2,
1);this.BI.Set(3,2);this.BI.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AnimalListContentToString._Done();C.Cm._Done.call(this);},_ReInit:function(
){C.Cm._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cm._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARY={IV:null
,Ze:null,Zn:null,Zk:null,Zo:null,Zf:null,Zi:null,Zl:null,Zm:null,Zh:null,OR:null
,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.BX._Init.call(this.IV={I:this
},0);C.Np._Init.call(this.Ze={I:this},0);C.Np._Init.call(this.Zn={I:this},0);C.Np.
_Init.call(this.Zk={I:this},0);C.Np._Init.call(this.Zo={I:this},0);C.Np._Init.call(
this.Zf={I:this},0);C.Np._Init.call(this.Zi={I:this},0);C.Np._Init.call(this.Zl={
I:this},0);C.Np._Init.call(this.Zm={I:this},0);C.Np._Init.call(this.Zh={I:this},
0);C.OR._Init.call(this.OR={I:this},0);this.__proto__=C.ARY;var B;this.Jf(A.aaR(
A.acf.Settings));this.IV.H(Ah4);this.IV.Aj(true);this.IV.T(A.aaR(A.acf.Language)
);this.IV.A_P(100);this.Ze.H(Atn);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.ACP));this.
Ze.Ns(16);this.Zn.H(Ato);this.Zn.Aj(true);this.Zn.T(A.aaR(A.acf.AHr));this.Zn.Ns(
22);this.Zk.H(Atp);this.Zk.Aj(true);this.Zk.T(A.aaR(A.acf.Temperature));this.Zk.
Ns(17);this.Zo.H(AyM);this.Zo.Aj(true);this.Zo.T(A.aaR(A.acf.ACM));this.Zo.Ns(42
);this.Zf.H(AoB);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.Device));this.Zf.Ns(18);
this.Zi.H(AoB);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.Asw));this.Zi.Ns(19);this.
Zl.H(AZO);this.Zl.Aj(true);this.Zl.T(A.aaR(A.acf.LinkTransponder));this.Zl.Ns(89
);this.Zm.H(AZP);this.Zm.Aj(true);this.Zm.T(A.aaR(A.acf.UnlinkTransponder));this.
Zm.Ns(95);this.Zh.H(AyB);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.AC4));this.Zh.Ns(
76);this.J(this.IV,0);this.J(this.Ze,0);this.J(this.Zn,0);this.J(this.Zk,0);this.
J(this.Zo,0);this.J(this.Zf,0);this.J(this.Zi,0);this.J(this.Zl,0);this.J(this.Zm
,0);this.J(this.Zh,0);this.IV.ZA(A.aaL(A.fl.H6));this.IV.ZB(A.aaL(A.fl.H6));this.
IV.Au([B=this.OR,B.B$,B.Cc]);this.IV.CK(this.OR);this.Ze.AR=[B=this.Ze,B.Nv];this.
Zn.AR=[B=this.Zn,B.Nv];this.Zk.AR=[B=this.Zk,B.Nv];this.Zo.AR=[B=this.Zo,B.Nv];this.
Zf.AR=[B=this.Zf,B.Nv];this.Zi.AR=[B=this.Zi,B.Nv];this.Zl.AR=[B=this.Zl,B.Nv];this.
Zm.AR=[B=this.Zm,B.Nv];this.Zh.AR=[B=this.Zh,B.Nv];},_Done:function(){this.__proto__=
C.Cg;this.IV._Done();this.Ze._Done();this.Zn._Done();this.Zk._Done();this.Zo._Done(
);this.Zf._Done();this.Zi._Done();this.Zl._Done();this.Zm._Done();this.Zh._Done(
);this.OR._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.IV._ReInit();this.Ze._ReInit();this.Zn._ReInit();this.Zk._ReInit();this.Zo.
_ReInit();this.Zf._ReInit();this.Zi._ReInit();this.Zl._ReInit();this.Zm._ReInit(
);this.Zh._ReInit();this.OR._ReInit();this.Jf(A.aaR(A.acf.Settings));this.IV.T(A.
aaR(A.acf.Language));this.Ze.T(A.aaR(A.acf.ACP));this.Zn.T(A.aaR(A.acf.AHr));this.
Zk.T(A.aaR(A.acf.Temperature));this.Zo.T(A.aaR(A.acf.ACM));this.Zf.T(A.aaR(A.acf.
Device));this.Zi.T(A.aaR(A.acf.Asw));this.Zl.T(A.aaR(A.acf.LinkTransponder));this.
Zm.T(A.aaR(A.acf.UnlinkTransponder));this.Zh.T(A.aaR(A.acf.AC4));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zo)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AMG={EU:null,Init:function(aArg){this.EU.Ahy(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag2)));},AUK:function(
){this.EU.Ae2(this.AO8());this.AaI=!this.EU.EZ.AZ;},AiZ:function(G){this.EU.Ahy(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag2)));this.AUK();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dl(A.aaR(A.acf.A8D));else this.Dl(A.aaR(A.acf.ArD));this.Am();},AO8:function(
){var Bz=A._NewObject(C.AqC,0);var Qs=A._GetAutoObject(A.Device.Helper).AOp(A._GetAutoObject(
A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqy(Qs-(86400*this.
MF));Bz.AnG(AZQ);Bz.Q8([].concat(0,Bz.Gl.slice(1,4)));Bz.Q8(A.abN(Bz.Gl,(Qs-Dx)|
0));Bz.Q8(A.abP(Bz.Gl,3400));Bz.Q8([].concat(Bz.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(
A.Device.Device).Bt.B_();Bz.Aw0(Gi);Bz.Yp();if(Gi>0){var O=0;while(O<Gi){var Ap2=
A._GetAutoObject(A.Device.Device).Bt.CF(O,7);var Ap3=A._GetAutoObject(A.Device.Device
).Bt.Hw(O,6)-Dx;if(Ap2>0)Bz.Aqn(Ap3,Ap2);O=O+1;}}return Bz;},_Init:function(aArg
){C.Le._Init.call(this,aArg);C.Aq6._Init.call(this.EU={I:this},0);this.__proto__=
C.AMG;this.EU.H(AZR);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFx(C.AHb);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Le;this.EU._Done(
);C.Le._Done.call(this);},_ReInit:function(){C.Le._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.Le._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMH={Aaa:null,O9:null,AgX:null,AaI:false,Init:function(aArg){this.Aaa.Ahy(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag2)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgX.Z(this.AaI);
},CC:function(G){var B;C.D9.CC.call(this,G);A.zX([this,this.AiZ],[B=A._GetAutoObject(
A.Device.Helper),B.U9,B.Va],0);A.zV([this,this.AiZ],A._GetAutoObject(A.Device.Device
).Bt,0);A.zX([this,this.Amk],[B=A._GetAutoObject(A.Device.Helper).W,B.Q7,B.OnSetId
],0);A.pe([this,this.Amk],this);},E4:function(G){var B;A.z$([this,this.AiZ],[B=A.
_GetAutoObject(A.Device.Helper),B.U9,B.Va],0);A.z9([this,this.AiZ],A._GetAutoObject(
A.Device.Device).Bt,0);A.z$([this,this.Amk],[B=A._GetAutoObject(A.Device.Helper).
W,B.Q7,B.OnSetId],0);C.D9.E4.call(this,G);},Amk:function(G){var Fy=A._NewObject(
A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HZ);A._GetAutoObject(A.Device.
Device).Bt.Bk(Fy);},AiZ:function(G){this.Aaa.Ahy(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag2)));this.Bo5();this.
Am();},Bo5:function(){var B;var Gi=A._GetAutoObject(A.Device.Device).Bt.B_();var
Lc=A._NewObject(C.AqC,0);var Vy=A._NewObject(C.AqC,0);var Qs=A._GetAutoObject(A.
Device.Helper).AOp(A._GetAutoObject(A.Device.Helper).Dv());var Dx=A._GetAutoObject(
A.Device.Helper).Aqy(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);Lc.Q8([].concat(
0,Lc.Gl.slice(1,4)));Lc.Q8(A.abN(Lc.Gl,(Qs-Dx)|0));Lc.Q8(A.abP(Lc.Gl,0));Lc.Q8([
].concat(Lc.Gl.slice(0,3),150000));Lc.AnG(AZS);Vy.Q8([].concat(0,Vy.Gl.slice(1,4
)));Vy.Q8(A.abN(Vy.Gl,(Qs-Dx)|0));Vy.Q8(A.abP(Vy.Gl,0));Vy.Q8([].concat(Vy.Gl.slice(
0,3),1500));Vy.AnG(AZT);Lc.Aw0(Gi);Lc.Yp();Vy.Aw0(Gi);Vy.Yp();if(Gi>0){var O=0;var
AaK=0;var AAw=0;var AKn=0;var A2C=0;var BdM=true;while(O<Gi){var Ame=A._GetAutoObject(
A.Device.Device).Bt.CF(O,8);var AaX=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-
Dx;if(Ame>0){Lc.Aqn(AaX,Ame);if(!A2C){A2C=AaX;AKn=Ame;}if(AAw>0){var LK=A._GetAutoObject(
A.Device.Helper).Mf(AAw,AaX);if(!!LK){var FX=A._GetAutoObject(A.acj.DU).AlF(LK,AaK
,Ame);if(BdM){Vy.Aqn(AAw,FX);BdM=false;}Vy.Aqn(AaX,FX);}}AaK=Ame;AAw=AaX;}O=O+1;
}var AdQ=A.acf.BhB;var FX=A._GetAutoObject(A.Device.Helper).BjB(A2C,AAw,AKn,AaK);
AdQ=A._GetAutoObject(A.Device.Helper).MN(AdQ,Pc,FX.toFixed());AdQ=A._GetAutoObject(
A.Device.Helper).MN(AdQ,Aym,A._GetAutoObject(A.acj.DU).AaE());this.O9.Ip.R(AdQ);
}this.AaI=!Lc.AZ;if(this.AaI)this.O9.Ip.R(A.jV);(C.O9.isPrototypeOf(B=this.O9.EU
)?B:null).AnB([B=A._GetAutoObject(A.Device.Helper).W,B.PY,B.EC]);this.Aaa.Ae2(Lc
);this.O9.Ae2(Vy);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.Aq6._Init.
call(this.Aaa={I:this},0);C.Aq6._Init.call(this.O9={I:this},0);C.AkU._Init.call(
this.AgX={I:this},0);this.__proto__=C.AMH;this.Aaa.H(AZU);this.Aaa.T(A.aaR(A.acf.
Afz));this.Aaa.AFx(C.ANc);this.O9.H(AoC);this.O9.T(A.aaR(A.acf.AHw));this.O9.AFx(
C.O9);this.AgX.H(U5);this.AgX.R(A.aaR(A.acf.Akn));this.J(this.Aaa,0);this.J(this.
O9,0);this.J(this.AgX,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;
this.Aaa._Done();this.O9._Done();this.AgX._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Aaa._ReInit();this.O9._ReInit();this.AgX.
_ReInit();this.Aaa.T(A.aaR(A.acf.Afz));this.O9.T(A.aaR(A.acf.AHw));this.AgX.R(A.
aaR(A.acf.Akn));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Aaa
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"
};C.AME={Avq:null,Avp:null,AxC:null,AuY:null,VK:null,Abw:null,Abv:null,Acs:null,
Afk:null,Init:function(aArg){this.VK.Ahy(A._NewObject(A.Core.Bs,0).Initialize(A.
_GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag2)));},A44:function(G
){this.VK.Acd(this.AuY);this.Abw.Acd(this.Avq);this.Abv.Acd(this.Avp);this.Acs.Acd(
this.AxC);},AxB:function(){var Gi=A._GetAutoObject(A.Device.Device).Bt.B_();this.
AuY=A._NewObject(C.Ajx,0);this.Avq=A._NewObject(C.Ajx,0);this.Avp=A._NewObject(C.
Ajx,0);this.AxC=A._NewObject(C.Ajx,0);if(Gi>0){var O=Gi-1;while(O>=0){var D8=A._GetAutoObject(
A.Device.Device).Bt.Hw(O,6);this.AtG(this.AuY,O,3,D8);this.AtG(this.Avq,O,2,D8);
this.AtG(this.Avp,O,5,D8);this.AtG(this.AxC,O,4,D8);O=O-1;}}this.AaI=!(((this.AuY.
AZ+this.Avp.AZ)+this.Avq.AZ)+this.AxC.AZ);A.pe([this,this.A44],this);},AtG:function(
A1C,Ad,A1B,Qm){var AlB=A._GetAutoObject(A.Device.Device).Bt.Ja(Ad,A1B);if(!!AlB)
A1C.OA(AlB,Qm);},Acb:function(E){if(this.MF===E)return;C.Le.Acb.call(this,E);if(
!!this.VK)this.VK.Acb(E);if(!!this.Abw)this.Abw.Acb(E);if(!!this.Abv)this.Abv.Acb(
E);if(!!this.Acs)this.Acs.Acb(E);this.Afk.Acb(E);},AiZ:function(G){this.VK.Ahy(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag2)));this.AxB();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dl(A.aaR(A.acf.Bk0));else this.Dl(A.aaR(A.acf.Ant));this.Am();},_Init:function(
aArg){C.Le._Init.call(this,aArg);C.AhD._Init.call(this.VK={I:this},0);C.AhD._Init.
call(this.Abw={I:this},0);C.AhD._Init.call(this.Abv={I:this},0);C.AhD._Init.call(
this.Acs={I:this},0);C.AUH._Init.call(this.Afk={I:this},0);this.__proto__=C.AME;
this.Dl(A.aaR(A.acf.Ant));this.VK.H(AZV);this.VK.R(A.aaR(A.acf.AGB));this.Abw.H(
AZW);this.Abw.R(A.aaR(A.acf.Feed));this.Abv.H(AZX);this.Abv.R(A.aaR(A.acf.AGD));
this.Acs.H(AZY);this.Acs.R(A.aaR(A.acf.AGE));this.Afk.H(AZZ);this.J(this.VK,-1);
this.J(this.Abw,-1);this.J(this.Abv,-1);this.J(this.Acs,-1);this.J(this.Afk,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.Le;this.VK._Done();this.Abw.
_Done();this.Abv._Done();this.Acs._Done();this.Afk._Done();C.Le._Done.call(this);
},_ReInit:function(){C.Le._ReInit.call(this);this.VK._ReInit();this.Abw._ReInit(
);this.Abv._ReInit();this.Acs._ReInit();this.Afk._ReInit();this.Dl(A.aaR(A.acf.Ant
));this.VK.R(A.aaR(A.acf.AGB));this.Abw.R(A.aaR(A.acf.Feed));this.Abv.R(A.aaR(A.
acf.AGD));this.Acs.R(A.aaR(A.acf.AGE));},_Mark:function(D){var B;C.Le._Mark.call(
this,D);if((B=this.Avq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avp)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AxC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMF={EU:null,WT:null,Aem:null,A2Z:false,Init:function(aArg){this.WT.Ahy(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag2)));},Bl:function(aSize){C.Le.Bl.call(this,aSize);this.Aem.H(this.EU.M);},Ai:
function(Ae){C.Le.Ai.call(this,Ae);var BCw=!this.AaI&&this.A2Z;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aem.R(A.aaR(A.acf.A8D));else this.
Aem.R(A.aaR(A.acf.ArD));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dl(A.aaR(
A.acf.Bk1));else this.Dl(A.aaR(A.acf.Bk2));this.Aem.Z(BCw);},AiZ:function(G){this.
WT.Ahy(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.Ag2)));this.AaI=true;this.A2Z=true;this.AxB();this.AUK();this.
Am();},AUK:function(){this.EU.Ae2(this.AO8());if(!!this.EU.EZ&&(this.EU.EZ.AZ>0)
){this.AaI=false;this.A2Z=false;}},AO8:function(){var Bz=A._NewObject(C.AqC,0);var
Qs=A._GetAutoObject(A.Device.Helper).AOp(A._GetAutoObject(A.Device.Helper).Dv());
var Dx=A._GetAutoObject(A.Device.Helper).Aqy(Qs-(86400*this.MF));Bz.AnG(AZ0);Bz.
Q8([].concat(0,Bz.Gl.slice(1,4)));Bz.Q8(A.abN(Bz.Gl,(Qs-Dx)|0));Bz.Q8(A.abP(Bz.Gl
,3400));Bz.Q8([].concat(Bz.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(A.Device.
Device).Bt.B_();Bz.Aw0(Gi);Bz.Yp();if(Gi>0){var O=0;while(O<Gi){var Ap2=A._GetAutoObject(
A.Device.Device).Bt.CF(O,7);var Ap3=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-
Dx;if(Ap2>0)Bz.Aqn(Ap3,Ap2);O=O+1;}}return Bz;},BjQ:function(){var Gi=A._GetAutoObject(
A.Device.Device).Bt.B_();if(Gi>0){var Bgt=A._NewObject(C.Ajx,0);var O=Gi-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LW=A._GetAutoObject(A.Device.Helper).ADs(D3);if(!!LW)Bgt.OA(LW,D3.Timestamp
);O=O-1;}return Bgt;}else return null;},AxB:function(){this.WT.Acd(this.BjQ());if(
!!this.WT.N$&&(this.WT.N$.AZ>0))this.AaI=false;},_Init:function(aArg){C.Le._Init.
call(this,aArg);C.Aq6._Init.call(this.EU={I:this},0);C.AhD._Init.call(this.WT={I:
this},0);C.AkU._Init.call(this.Aem={I:this},0);this.__proto__=C.AMF;this.EU.H(Atm
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFx(C.AHb);this.WT.H(AZ1);this.WT.
R(A.aaR(A.acf.Rating));this.Aem.H(Atm);this.J(this.EU,-2);this.J(this.WT,-2);this.
J(this.Aem,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Le;this.EU._Done(
);this.WT._Done();this.Aem._Done();C.Le._Done.call(this);},_ReInit:function(){C.
Le._ReInit.call(this);this.EU._ReInit();this.WT._ReInit();this.Aem._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WT.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.Le._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aem)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.WZ={Q:null,Gx:null,Gy:null
,QQ:null,AM:0,Gr:0,Ga:100,FI:0,Init:function(aArg){},H1:function(G){this.FI=1;C.
Eg.H1.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QQ.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QQ.Z(this.Gr!==
this.Ga);this.QQ.L(this.V.AQ);if((this.FI===4)||(this.FI===5))this.QQ.L(A.jb.E1);
},Al9:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay7],this);
this.Bo.As(false);}this.Bo.As(true);},Qy:function(G){if(this.FI===5)A.pe([this,this.
Ay7],this);if(this.FI===4)A.pe([this,this.Ay8],this);if(this.FI===1)A.pe(this.AR
,this);this.FI=0;this.Am();},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcY:function(s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcY],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcY],E,0);if(!!E)A.pe([this,this.AcY],this);},Al_:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.Ay8],this);this.Bo.As(false);}this.Bo.As(true
);},Ki:function(G){this.FI=0;},Ay8:function(s){this.Ki(s);},Kd:function(G){this.
FI=0;},Ay7:function(s){this.Kd(s);},Bx:function(E){if(E<this.Gr)E=this.Gr;if(E>this.
Ga)E=this.Ga;if(this.AM===E)return;this.AM=E;this.Am();},Gb:function(E){if(this.
Gr===E)return;this.Gr=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BF._Init.call(
this.Gx={I:this},0);A.Core.BF._Init.call(this.Gy={I:this},0);A.acg.Ap._Init.call(
this.QQ={I:this},0);this.__proto__=C.WZ;this.H(K4);this.Gx.Filter=5;this.Gy.Filter=
4;this.Background.H(K4);this.V.H(AcR);this.V.R(LB);this.QQ.H(AyN);this.J(this.QQ
,0);this.Gx.BG=[this,this.Al9];this.Gx.D1=[this,this.Al9];this.Gy.BG=[this,this.
Al_];this.Gy.D1=[this,this.Al_];this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak
));this.V.Cr(null);this.QQ.Ax(A.aaL(A.ach.AM2));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gx._Done();this.Gy._Done();this.QQ._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gx._ReInit();this.Gy.
_ReInit();this.QQ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AU8={AC:null,CM:null,HP:
null,Bl:function(aSize){C.WZ.Bl.call(this,aSize);this.CM.H([this.QQ.M[2],this.QQ.
M[1],this.M[2],this.QQ.M[3]]);},Ai:function(Ae){C.WZ.Ai.call(this,Ae);this.CM.AbN(
0,this.CM.AZ-1);if(this.Gr!==this.Ga)this.QQ.Z(true);},Init:function(aArg){},C5:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Ki:function(G){var F;var BP=this.AM;C.WZ.Ki.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},Kd:function(G){var F;var BP=this.AM;C.WZ.Kd.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var QE=0;if(this.Gr
!==this.Ga){if(E<this.Gr){E=this.Ga;QE=-this.CM.GP*this.CM.AZ;}if(E>this.Ga){E=this.
Gr;QE=this.CM.GP;}}C.WZ.Bx.call(this,E);if(!!QE)this.CM.Gc(QE);this.CM.GW(this.AM
);this.CM.HK(this.CM.Gu,true,this.HP,null);},Hn:function(G){var B;var Gh=this.CM.
G7;var CA=(C.CG.isPrototypeOf(B=this.CM.Cj)?B:null);if(!CA)return;CA.S(this.V.B7
);CA.A0(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));else CA.
R(Xo);CA.H(A.abK(CA.M,[(B=this.CM.M)[2]-B[0],this.CM.GP]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gb(0);this.EV(this.AC.Du()-1);this.CM.
JD(this.AC.Du());this.CM.AbN(0,this.CM.AZ-1);}},_Init:function(aArg){C.WZ._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gn._Init.call(this.
HP={I:this},0);this.__proto__=C.AU8;this.H(K4);this.QQ.H(AIN);this.CM.Ae_(40);this.
CM.N8(C.CG);this.HP.WR(23);this.HP.HQ(1);this.HP.Fr(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));this.CM.Hn=[this,this.Hn];this.Init(
aArg);},_Done:function(){this.__proto__=C.WZ;this.CM._Done();this.HP._Done();C.WZ.
_Done.call(this);},_ReInit:function(){C.WZ._ReInit.call(this);this.CM._ReInit();
this.HP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.A0(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.WZ._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.R4={ALN:0
,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.AHw));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.KB((A._GetAutoObject(A.Device.Converter).Alb(this.ALN
)+CR)+A._GetAutoObject(A.acj.DU).Af8());else this.KB(A.aaR(A.acf.Unknown));},Ch:
function(G){C.FA.Ch.call(this,G);this.ALN=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.FA._Init.call(this,aArg);this.__proto__=C.R4;},_className:"Application::AnimalInfoItemWeightGain"
};C.APL={Bc:null,Df:null,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Device),B.AER,B.AI2],0);},DX:function(G){C.IP.DX.call(this,G);this.Df.Ax(
A._GetAutoObject(A.Device.Converter).BhQ(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.C8._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Df={I:this},0);this.__proto__=C.APL;this.Bc.DD(
Aln);this.Bc.DN(AyO);this.Bc.L(A.jb.Bc);this.Df.H(AZ2);this.Df.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Df,0);this.Df.Ax(A.aaL(A.ach.AjX));this.Init(aArg);},_Done:
function(){this.__proto__=C.IP;this.Bc._Done();this.Df._Done();C.IP._Done.call(this
);},_ReInit:function(){C.IP._ReInit.call(this);this.Bc._ReInit();this.Df._ReInit(
);},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANO={ZT:null,KF:null,Mt:null,Timer:null,ACD:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZT.R(A._GetAutoObject(A.Device.Helper).MN(A.aaR(A.acf.Brm),Pc,this.ACD.
toFixed()));},CC:function(G){this.Timer.As(true);},E4:function(G){this.Timer.As(
false);},BBL:function(G){if(this.ACD>1){this.ACD=this.ACD-1;this.Am();}else{this.
Timer.As(false);A._GetAutoObject(A.Device.Device).AxJ();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZT={I:this},0);A.acg.Text.
_Init.call(this.KF={I:this},0);A.acg.Ap._Init.call(this.Mt={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANO;this.Background.L(A.jb.CU
);this.N.Z(true);this.ZT.H(AZ3);this.ZT.KX(true);this.ZT.R(A.jV);this.ZT.L(A.jb.
Text);this.KF.H(AZ4);this.KF.KX(true);this.KF.R(A.aaR(A.acf.A5V));this.KF.L(A.jb.
Text);this.Mt.H(AIO);this.J(this.ZT,0);this.J(this.KF,0);this.J(this.Mt,0);this.
ZT.S(A.aaL(A.fl.Af));this.KF.S(A.aaL(A.fl.Af));this.Mt.Ax(A.aaL(A.ach.AB9));this.
Timer.MJ=[this,this.BBL];},_Done:function(){this.__proto__=C.AB;this.ZT._Done();
this.KF._Done();this.Mt._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZT._ReInit();this.KF._ReInit();this.Mt._ReInit(
);this.Timer._ReInit();this.KF.R(A.aaR(A.acf.A5V));this.ZT.S(A.aaL(A.fl.Af));this.
KF.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANv={KF:null,AmG:null
,QJ:null,CQ:function(){this.Am();},Ai:function(Ae){C.Aeb.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Abc<=10)this.KF.R(A.aaR(A.acf.Bh2));else this.KF.R(A.aaR(A.acf.
A5W));},_Init:function(aArg){C.Aeb._Init.call(this,aArg);A.acg.Text._Init.call(this.
KF={I:this},0);A.acg.Ap._Init.call(this.AmG={I:this},0);C.CG._Init.call(this.QJ={
I:this},0);this.__proto__=C.ANv;this.SY.H(AZ5);this.Mt.H(AZ6);this.KF.H(AZ7);this.
KF.KX(true);this.KF.L(A.jb.Text);this.AmG.H(AIO);this.QJ.H(AZ8);this.QJ.Z(true);
this.QJ.R(A.aaR(A.acf.AUI));this.QJ.L(A.jb.Text);this.J(this.KF,0);this.J(this.AmG
,0);this.J(this.QJ,0);this.KF.S(A.aaL(A.fl.Af));this.AmG.Ax(A.aaL(A.ach.AB9));this.
QJ.S(A.aaL(A.fl.Af));this.QJ.A0(A.aaL(A.fl.Ak));this.QJ.Cr(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Aeb;this.KF._Done();this.AmG._Done();this.QJ._Done();
C.Aeb._Done.call(this);},_ReInit:function(){C.Aeb._ReInit.call(this);this.KF._ReInit(
);this.AmG._ReInit();this.QJ._ReInit();this.QJ.R(A.aaR(A.acf.AUI));this.KF.S(A.aaL(
A.fl.Af));this.QJ.S(A.aaL(A.fl.Af));this.QJ.A0(A.aaL(A.fl.Ak));this.QJ.Cr(A.aaL(
A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.Aeb._Mark.call(this,D);if((B=this.
KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmG)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMr={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AMr;this.
RY.As(false);this.RY.Aj(false);this.RY.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AV_={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AV_;this.
Tc.As(false);this.Tc.Aj(false);this.Tc.Z(false);},_className:"Application::WatchListFilterScreen"
};C.APd={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad2(5));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=
C.APd;},_className:"Application::HeaderControlListFilter"};C.APN={DX:function(G){
C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(6));},_Init:
function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APN;},_className:"Application::HeaderWatchListFilter"
};C.APR={D0:null,Nh:null,_Init:function(aArg){C.T5._Init.call(this,aArg);C.CG._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.Nh={I:this},0);this.__proto__=
C.APR;this.D0.H(Aoy);this.D0.R(A.aaR(A.acf.A6r));this.D0.L(A.jb.Text);this.Nh.H(
AZ9);this.Nh.L(A.jb.Text);this.Nh.A6(0x12);this.J(this.D0,-2);this.J(this.Nh,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.A0(A.aaL(A.fl.Bh));this.Nh.Ax(A.aaL(A.ach.ADW)
);},_Done:function(){this.__proto__=C.T5;this.D0._Done();this.Nh._Done();C.T5._Done.
call(this);},_ReInit:function(){C.T5._ReInit.call(this);this.D0._ReInit();this.Nh.
_ReInit();this.D0.R(A.aaR(A.acf.A6r));this.D0.S(A.aaL(A.fl.Ak));this.D0.A0(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.T5._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANq={Ch:function(Ad){C.AjE.Ch.call(this,Ad);if(
!!this.AX){var Os=this.AX.H7(Ad,8);var BDi=this.AX.Sq(Ad,21);this.Abo.R(A._GetAutoObject(
A.Device.Helper).Mf(BDi,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sw.Z(Os);this.Am();}},_Init:function(aArg){C.AjE._Init.call(this,aArg);this.__proto__=
C.ANq;},_className:"Application::CalfListWatchItem"};C.T5={Ahb:null,Ahd:null,_Init:
function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ahb={I:this},
0);A.acg.Ap._Init.call(this.Ahd={I:this},0);this.__proto__=C.T5;this.Ahb.H(AZ_);
this.Ahb.L(A.jb.Text);this.Ahb.A6(0x12);this.Ahd.H(AZ$);this.Ahd.L(A.jb.Text);this.
Ahd.A6(0x12);this.J5(this.DS,-1);this.J(this.Ahb,0);this.J(this.Ahd,0);this.Ahb.
Ax(A.aaL(A.ach.Ark));this.Ahd.Ax(A.aaL(A.ach.Ag9));},_Done:function(){this.__proto__=
C.De;this.Ahb._Done();this.Ahd._Done();C.De._Done.call(this);},_ReInit:function(
){C.De._ReInit.call(this);this.Ahb._ReInit();this.Ahd._ReInit();},_Mark:function(
D){var B;C.De._Mark.call(this,D);if((B=this.Ahb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"
};C.AqC={Gl:A.wg,ON:A.wf,Q8:function(E){if(A.aaY(this.Gl,E))return;this.Gl=E;},AnG:
function(E){if(A.aaX(this.ON,E))return;this.ON=E;},_Init:function(aArg){A.acv.ACC.
_Init.call(this,aArg);this.__proto__=C.AqC;},_className:"Application::BoundCoordList"
};C.AjE={T_:null,WG:null,T$:null,WH:null,Sw:null,Zp:null,Abo:null,AP:null,A$:null
,Ea:null,Ly:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T_.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.WG.H(this.T_.M);this.A$.H([this.T_.
M[2]-1,0,this.T_.M[2]+1,aSize[1]]);this.T$.H([this.T_.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.WH.H(this.T$.M);this.Ea.H([this.T$.M[2]-1,0,this.T$.M[2]+1,aSize[
1]]);this.Sw.H([this.T$.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zp.H(this.Sw.
M);this.Ly.H([this.Sw.M[2]-1,0,this.Sw.M[2]+1,aSize[1]]);this.Abo.H([this.Sw.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var Lb=this.V.AQ;
this.T_.AFg(Lb);this.WG.L(Lb);this.T$.AFg(Lb);this.WH.L(Lb);this.Sw.AFg(Lb);this.
Zp.L(Lb);this.Abo.L(Lb);this.Zp.Z(!this.Sw.Fq());},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;var Mn=this.AX.CF(Ad,1);var Ih=this.AX.Am1(Ad,14);var Auz=this.AX.CF(
Ad,5);var LW=this.AX.Ja(Ad,13);this.T(Mn.toFixed());if(!!LW){this.T_.Z(true);this.
T_.AwQ(A._GetAutoObject(A.acj.Assessment).BdU(LW));this.WG.Z(false);}else{this.T_.
Z(false);this.WG.Z(true);}if(Auz>0){this.T$.Z(true);this.T$.AwQ(A._GetAutoObject(
A.acj.Assessment).BdU(A._GetAutoObject(A.Device.Converter).AsR(Ih,Auz)));this.WH.
Z(false);}else{this.T$.Z(false);this.WH.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kp._Init.call(this.T_={I:this},0);A.acg.Text._Init.
call(this.WG={I:this},0);C.Kp._Init.call(this.T$={I:this},0);A.acg.Text._Init.call(
this.WH={I:this},0);C.Kp._Init.call(this.Sw={I:this},0);A.acg.Text._Init.call(this.
Zp={I:this},0);A.acg.Text._Init.call(this.Abo={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Ly={I:this},0);this.__proto__=C.AjE;this.
WG.H(A0a);this.WG.R(Aoz);this.WH.H(AoA);this.WH.R(Aoz);this.Sw.AwQ(A.jb.Rl);this.
Zp.H(AoA);this.Zp.R(Rt);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
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
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={PB:null,Anl:null
,EZ:null,DR:null,Arw:0,Arx:0,A7V:0,AmS:0,AqP:0,Init:function(aArg){this.ATq(6);this.
ATr(8);this.ATC(A.jb.AV);this.ATD(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.BmI([this.DR.Abk[0],(B=this.DR.M)[3]-B[1]]);this.WU(this);},ATp:function(
E){if(this.PB===E)return;this.PB=E;this.DR.ATp(E);},ATD:function(E){if(this.Arx===
E)return;this.Arx=E;this.DR.ATD(E);},ATC:function(E){if(this.Arw===E)return;this.
Arw=E;this.DR.ATC(E);this.DR.BmM(E);},WU:function(G){var B;while(!!this.DR.Ah)this.
HR(this.DR.Ah);if(!this.EZ)return;this.DR.AnG([((this.EZ.ON[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gl[2]-this.EZ.Gl[0]))|0,this.DR.ON[1]]);this.DR.AnG([this.DR.ON[0]
,((this.EZ.ON[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gl[3]-this.EZ.Gl[1]))|0]);var O;
var Di=this.DR.ON[1];var D8;var A5d=this.EZ.Gl[1];var BkZ=(((B=this.DR.M)[3]-B[1
])/this.DR.ON[1])|0;for(O=0;O<BkZ;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Di))-(this.Anl.Ascent+this.Anl.Descent))+2,((B=this.M)[2]-
B[0])-this.Arx,(((B=this.M)[3]-B[1])-(O*Di))+2]);D8.L(this.A7V);D8.S(this.Anl);D8.
A6(0x24);if(O>0)D8.R(this.AJ0(A5d));else D8.R(this.AKx());A5d=A5d+this.EZ.ON[1];
this.J(D8,0);}},BG0:function(s){this.WU(s);},BnC:function(E){if(this.Anl===E)return;
this.Anl=E;this.Am();},AzG:function(A1h){var B;if(!this.EZ||(this.EZ.Gl[3]===this.
EZ.Gl[1]))return 0;return(((A1h-this.EZ.Gl[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gl[
3]-this.EZ.Gl[1]))|0;},Ae2:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.Ae2(null);else{var Bz=A._NewObject(A.acv.ACC,0);Bz.Aw0(this.EZ.AEx);Bz.Yp();var
JF=E.AlP;while(!!JF){Bz.Aqn(this.Bzi(JF.P$),this.Bzj(JF.Qa));JF=JF.Ah;}this.DR.Ae2(
Bz);this.Am();}},Bzi:function(Bxv){var B;if(!this.EZ||(this.EZ.Gl[2]===this.EZ.Gl[
0]))return 0;return((Bxv-this.EZ.Gl[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gl[2]-this.
EZ.Gl[0]);},Bzj:function(A1h){var B;if(!this.EZ||(this.EZ.Gl[3]===this.EZ.Gl[1])
)return 0;return((A1h-this.EZ.Gl[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gl[3]-this.EZ.
Gl[1]);},AJ0:function(AoX){return AoX.toFixed();},AKx:function(){return A.jV;},ATr:
function(E){if(this.AmS===E)return;this.AmS=E;this.DR.ATr(E);},ATq:function(E){if(
this.AqP===E)return;this.AqP=E;this.DR.ATq(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIP);this.A7V=A.jb.Text;this.DR.A1(0x3F);this.DR.H(AIP);this.DR.Bn2(A0b);this.
DR.Bmw(A.jb.Rl);this.DR.Bnj(A.jb.Bc);this.DR.Bon(A.jb.Rl);this.J(this.DR,0);this.
PB=A.aaL(A.acv.ACV);this.Anl=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.BnC(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.PB)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Anl)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.ANc={AJ0:function(AoX){return A._GetAutoObject(
A.Device.Converter).Aya(AoX,0);},AKx:function(){return A._GetAutoObject(A.acj.DU
).Af8();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.ANc;}
,_className:"Application::BodyWeightGraph"};C.O9={JR:null,Ey:null,Ei:null,FY:null
,IL:null,IM:null,Init:function(aArg){this.ATp(null);},WU:function(G){var B;var F;
C.DR.WU.call(this,G);var AK3=0;var ALS=0;if(!!this.JR){AK3=this.AzG(A._GetAutoObject(
A.Device.Helper).ADr((F=this.JR,F[1].call(F[0]))));ALS=this.AzG(A._GetAutoObject(
A.Device.Helper).ADq((F=this.JR,F[1].call(F[0]))));}this.FY.H(A.abP(this.FY.M,0)
);this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.M)[3]-B[1])-ALS));this.IL.H(
A.abO(this.IL.M,(this.FY.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))-2));this.Ei.H(A.abP(
this.Ei.M,this.FY.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-
B[1])-AK3));this.IM.H(A.abO(this.IM.M,(this.Ei.M[3]-((((B=this.IM.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Ei.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJ0:function(AoX){return A._GetAutoObject(A.Device.Converter
).Td(AoX,0,true);},AKx:function(){return A._GetAutoObject(A.acj.DU).AaE();},AnB:
function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([this,this.AiR],this.JR
,0);this.JR=E;if(!!E)A.zX([this,this.AiR],E,0);if(!!E)A.pe([this,this.AiR],this);
},AiR:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.
acg.AL._Init.call(this.FY={I:this},0);A.acg.AL._Init.call(this.IL={I:this},0);A.
acg.AL._Init.call(this.IM={I:this},0);this.__proto__=C.O9;this.Ey.A1(0xD);this.Ey.
H(Aaj);this.Ey.L(A.jb.Gk);this.Ei.A1(0xD);this.Ei.H(Tj);this.Ei.L(A.jb.Ib);this.
FY.A1(0xD);this.FY.H(Aai);this.FY.L(A.jb.E1);this.IL.A1(0xD);this.IL.H(Aal);this.
IL.AwE(A.jb.Ib);this.IL.AwF(A.jb.Ib);this.IL.AwH(A.jb.E1);this.IL.AwG(A.jb.E1);this.
IM.A1(0xD);this.IM.H(Xm);this.IM.AwE(A.jb.Gk);this.IM.AwF(A.jb.Gk);this.IM.AwH(A.
jb.Ib);this.IM.AwG(A.jb.Ib);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FY
,-1);this.J(this.IL,-1);this.J(this.IM,-1);this.Init(aArg);},_Done:function(){this.
__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FY._Done();this.IL._Done();this.
IM._Done();C.DR._Done.call(this);},_ReInit:function(){C.DR._ReInit.call(this);this.
Ey._ReInit();this.Ei._ReInit();this.FY._ReInit();this.IL._ReInit();this.IM._ReInit(
);},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.JR)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainGraph"};C.Aq6={EU:null,EZ:null,Sf:null,Ip:
null,Bc:null,AxT:A.jV,DL:A.jV,AO_:null,Init:function(aArg){},Bl:function(aSize){
A.Core.P.Bl.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.Sf.
H([30,0,aSize[0]-2,30]);this.Ip.H(this.Sf.M);if(!!this.EU)this.EU.H([30,this.Sf.
M[3],aSize[0],this.Bc.M[1]]);},Ahy:function(E){if(this.AxT===E)return;this.AxT=E;
this.Ip.R(E);},T:function(E){if(this.DL===E)return;this.DL=E;this.Sf.R(E);},AFx:
function(E){if(this.AO_===E)return;this.AO_=E;this.BpH(this);},BpH:function(G){var
B;if(!!this.EU)this.HR(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AO_,0))?B:null);if(!!this.EU){this.EU.H(A0c);this.EU.Ae2(this.EZ);this.J(this.EU
,0);}},Ae2:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.Ae2(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Sf={I:this},0);A.acg.Text._Init.call(this.Ip={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.Aq6;this.H(AcT);this.As(false);this.Sf.H(AIQ);this.
Sf.A6(0x11);this.Sf.R(LB);this.Sf.L(A.jb.Text);this.Ip.A6(0x14);this.Ip.R(A.jV);
this.Ip.L(A.jb.Text);this.Bc.H(A0d);this.Bc.L(A.jb.Bc);this.J(this.Sf,0);this.J(
this.Ip,0);this.J(this.Bc,0);this.Sf.S(A.aaL(A.fl.Ak));this.Ip.S(A.aaL(A.fl.Ak));
this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Sf._Done();this.
Ip._Done();this.Bc._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.
P._ReInit.call(this);this.Sf._ReInit();this.Ip._ReInit();this.Bc._ReInit();this.
Sf.S(A.aaL(A.fl.Ak));this.Ip.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.EU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::GraphItem"};C.AMN={AgG:null,GW:function(E
){var F;C.Gd.GW.call(this,E);if(!!this.AgG)(F=this.AgG,F[2].call(F[0],E));},A98:
function(E){if(A.aaZ(this.AgG,E))return;if(!!this.AgG)A.z$([this,this.A3A],this.
AgG,0);this.AgG=E;if(!!E)A.zX([this,this.A3A],E,0);if(!!E)A.pe([this,this.A3A],this
);},A3A:function(G){var F;if(!this.AgG)return;(F=this.AgG,F[2].call(F[0],this.FO(
)));},_Init:function(aArg){C.Gd._Init.call(this,aArg);this.__proto__=C.AMN;},_Mark:
function(D){var B;C.Gd._Mark.call(this,D);if((B=this.AgG)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.AUH={Rj:null
,P6:null,X4:null,X5:null,MF:0,CQ:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Rj.H(A.abI(this.Rj.M,(((B=this.M)[3]-B[1])/2)|
0));this.P6.H(A.abI(this.P6.M,(((B=this.M)[3]-B[1])/2)|0));this.Rj.H(A.abO(this.
Rj.M,(((B=this.M)[3]-B[1])/2)|0));this.P6.H(A.abO(this.P6.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Rj.R(A._GetAutoObject(
A.Device.Helper).MN(A.aaR(A.acf.BkT),Pc,this.MF.toFixed()));},Acb:function(E){if(
this.MF===E)return;this.MF=E;this.BCk(this);},BCk:function(G){var B;var AJ7=(((B=
this.M)[2]-B[0])/this.MF)|0;this.X4.H(A.abM(this.X4.M,(((B=this.M)[2]-B[0])-(this.
MF*AJ7))+(((AJ7/2)-(((B=this.X4.M)[2]-B[0])/2))|0)));this.X5.H(A.abM(this.X5.M,(((
B=this.M)[2]-B[0])-AJ7)+(((AJ7/2)-(((B=this.X5.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Rj={
I:this},0);A.acg.Text._Init.call(this.P6={I:this},0);A.acg.Text._Init.call(this.
X4={I:this},0);A.acg.Text._Init.call(this.X5={I:this},0);this.__proto__=C.AUH;this.
H(BD);this.Rj.H(AIR);this.Rj.Ho(5);this.Rj.A6(0x11);this.Rj.L(A.jb.Text);this.P6.
H(A0e);this.P6.Ho(5);this.P6.A6(0x14);this.P6.R(A.aaR(A.acf.AhU));this.P6.L(A.jb.
Text);this.X4.H(A0f);this.X4.R(AyP);this.X4.L(A.jb.Text);this.X5.H(A0g);this.X5.
R(AyP);this.X5.L(A.jb.Text);this.J(this.Rj,0);this.J(this.P6,0);this.J(this.X4,0
);this.J(this.X5,0);this.Rj.S(A.aaL(A.fl.Ak));this.P6.S(A.aaL(A.fl.Ak));this.X4.
S(A.aaL(A.fl.H6));this.X5.S(A.aaL(A.fl.H6));},_Done:function(){this.__proto__=A.
Core.P;this.Rj._Done();this.P6._Done();this.X4._Done();this.X5._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Rj._ReInit(
);this.P6._ReInit();this.X4._ReInit();this.X5._ReInit();this.P6.R(A.aaR(A.acf.AhU
));this.Rj.S(A.aaL(A.fl.Ak));this.P6.S(A.aaL(A.fl.Ak));this.CQ();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Rj)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.Le={Wd:null,AjK:null,KS:A.jV,MF:0,AaI:false,Init:function(aArg){var A2f=A._NewObject(
C.Kq,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RU()<A2f.
C7(O))A2f.Ans=O+1;this.Wd.CK(A2f);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjK.
Z(this.AaI);if(this.AaI)this.Bb(null);else this.Bb(this.Wd);},CC:function(G){var
B;var F;C.D9.CC.call(this,G);if(!(F=this.Wd.Q,F[1].call(F[0])))(F=this.Wd.Q,F[2].
call(F[0],this.Wd.AC.C7(0)));A.zX([this,this.AJf],[B=A._GetAutoObject(A.Device.Helper
),B.U9,B.Va],0);A.zV([this,this.AJf],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amk],[B=A._GetAutoObject(A.Device.Helper).W,B.Q7,B.OnSetId],0);A.pe([this
,this.Amk],this);},E4:function(G){var B;A.z$([this,this.AJf],[B=A._GetAutoObject(
A.Device.Helper),B.U9,B.Va],0);A.z9([this,this.AJf],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amk],[B=A._GetAutoObject(A.Device.Helper).W,B.Q7,B.OnSetId
],0);C.D9.E4.call(this,G);},ZC:function(E){if(A.aa0(this.AR,E))return;C.D9.ZC.call(
this,E);this.Wd.AR=E;},Acb:function(E){if(this.MF===E)return;this.MF=E;A.pe([this
,this.Amk],this);},Bw5:function(Aq){this.Acb(Aq);},AiZ:function(G){},AJf:function(
s){this.AiZ(s);},Dl:function(E){if(this.KS===E)return;this.KS=E;this.AjK.R(E);},
Amk:function(G){var Fy=A._NewObject(A.Device.Filter,0);var AzP=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzP.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhU()-((this.MF-1)*86400))-1,true);Fy.CX(AzP);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fy.CX(HZ);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fy);},BlQ:function(){return this.MF;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AU8._Init.call(this.Wd={I:this},0);C.AkU._Init.call(
this.AjK={I:this},0);this.__proto__=C.Le;this.Wd.H(BD);this.AjK.H(U5);this.J(this.
Wd,0);this.J(this.AjK,0);this.Wd.Au([this,this.BlQ,this.Bw5]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.Wd._Done();this.AjK._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.Wd._ReInit();this.AjK.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Wd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjK)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANV={Wk:null,YV:null,RatingMode:null,PN:null,_Init:
function(aArg){C.Cg._Init.call(this,aArg);C.Np._Init.call(this.Wk={I:this},0);C.
BX._Init.call(this.YV={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Iv._Init.call(this.PN={I:this},0);this.__proto__=C.ANV;var B;this.Hk.R(A.
aaR(A.acf.ACM));this.Jf(A.aaR(A.acf.A6l));this.Wk.H(Atq);this.Wk.Aj(true);this.Wk.
T(A.aaR(A.acf.As3));this.Wk.Bi(true);this.Wk.Ns(23);this.YV.H(A0h);this.YV.Aj(true
);this.YV.T(A.aaR(A.acf.A$E));this.YV.Bi(false);this.PN.H(A0i);this.PN.Aj(true);
this.PN.T(A.aaR(A.acf.A6i));this.PN.Bi(true);this.PN.Gb(3);this.PN.EV(14);this.PN.
IW(A.aaR(A.acf.Kq)+Atr);this.PN.Jg(A.aaR(A.acf.GL)+Atr);this.J(this.Wk,0);this.J(
this.YV,0);this.J(this.PN,0);this.Wk.AR=[B=this.Wk,B.Nv];this.YV.Au([B=this.RatingMode
,B.B$,B.Cc]);this.YV.CK(this.RatingMode);this.PN.Au([B=A._GetAutoObject(A.Device.
Device),B.A9a,B.BbN]);},_Done:function(){this.__proto__=C.Cg;this.Wk._Done();this.
YV._Done();this.RatingMode._Done();this.PN._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wk._ReInit();this.YV._ReInit();this.RatingMode.
_ReInit();this.PN._ReInit();this.Hk.R(A.aaR(A.acf.ACM));this.Jf(A.aaR(A.acf.A6l)
);this.Wk.T(A.aaR(A.acf.As3));this.YV.T(A.aaR(A.acf.A$E));this.PN.T(A.aaR(A.acf.
A6i));this.PN.IW(A.aaR(A.acf.Kq)+Atr);this.PN.Jg(A.aaR(A.acf.GL)+Atr);},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Ave={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Ho(10);},Ai:function(
Ae){var B;C.Co.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FT=A.jb.Aed;var G0=A.jb.Bm;if(this.Hm){FT=A.jb.Bm;G0=A.jb.
Text;}if(!Hf){this.Background.L(FT);this.V.L(A.jb.CJ);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FT);this.V.L(G0);}this.LN=Hf;this.KM=Fw;this.Qz=GE;
},_Init:function(aArg){C.Co._Init.call(this,aArg);this.__proto__=C.Ave;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Co._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ADz={Ap:null,Init:
function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,
B.PY,B.EC],0);A.pe([this,this.DX],this);},Dg:function(E){C.BR.Dg.call(this,E);this.
Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Ap.Ax(A.aaL(A.ach.ADw));break;case 1:this.Ap.Ax(A.aaL(A.ach.APv));break;
case 2:this.Ap.Ax(A.aaL(A.ach.APx));break;default:A.ab5("%s%e",AyQ,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADz;this.Ap.H(AyR);this.
J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADw));this.Init(aArg);},_Done:function(){this.
__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ADA={Ap:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Helper).W,B.PY,B.EC],0);A.pe([this,this.DX],this);},Dg:function(E){C.BR.
Dg.call(this,E);this.Ap.L(E);},DX:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Ap.Ax(A.aaL(A.ach.ADx));break;case 1:this.Ap.Ax(A.aaL(
A.ach.APw));break;case 2:this.Ap.Ax(A.aaL(A.ach.APy));break;default:A.ab5("%s%e"
,AyQ,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);this.__proto__=C.ADA;
this.Ap.H(AyR);this.J(this.Ap,0);this.Ap.Ax(A.aaL(A.ach.ADx));this.Init(aArg);},
_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();},_Mark:function(D){var B;C.
BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.FA={BU:null,Ax7:A.jV,Dg:function(E){C.JQ.Dg.call(
this,E);this.BU.L(E);},KB:function(E){if(this.Ax7===E)return;this.Ax7=E;this.BU.
R(E);},_Init:function(aArg){C.JQ._Init.call(this,aArg);C.CG._Init.call(this.BU={
I:this},0);this.__proto__=C.FA;this.BU.A1(0x34);this.BU.H(AyL);this.BU.A6(0x11);
this.BU.L(A.jb.Text);this.J(this.BU,0);this.BU.S(A.aaL(A.fl.Af));this.BU.A0(A.aaL(
A.fl.Ak));this.BU.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JQ;this.
BU._Done();C.JQ._Done.call(this);},_ReInit:function(){C.JQ._ReInit.call(this);this.
BU._ReInit();this.BU.S(A.aaL(A.fl.Af));this.BU.A0(A.aaL(A.fl.Ak));this.BU.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JQ._Mark.call(this,D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOT={WK:function(G){var B;this.AgA();this.AuO(A.aaR(A.acf.Bj2),[this,this.BoD],[
B=A._GetAutoObject(A.Device.Device),B.A9b,B.BbO]);A._GetAutoObject(C.BS).Fz();this.
I8(A.aaR(A.acf.AVJ),[this,this.AT8],5);this.I8(A.aaR(A.acf.AVH),[this,this.AT7],
7);this.I8(A.aaR(A.acf.An6),[this,this.Aw3],2);this.I8(A.aaR(A.acf.AdX),[this,this.
AFc],1);this.I8(A.aaR(A.acf.AuM),[this,this.AE8],0);A._GetAutoObject(C.BS).Fz();
A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Anm)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DF:function(G){},AbB:function(){return C.ACo;},AbC:function(
){return C.ADH;},Rb:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A7g());},HS:function(G){var F;C.GJ.HS.call(this,G);if(this.Akj(
)===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajt((F=this.Fn,F[1].call(
F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false
);},Agm:function(){A._GetAutoObject(C.A7).Cb(44);},BoD:function(G){A._GetAutoObject(
A.Device.Device).AwT(!A._GetAutoObject(A.Device.Device).Aq1);this.Aoc(this);},Aoc:
function(G){var Bf=A._GetAutoObject(A.Device.Device).An.Filter.Fa();var Aw=Bf.DM(
30,3);if(!!Aw)Bf.Nw(Aw);if(A._GetAutoObject(A.Device.Device).Aq1){var AAv=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A29=A._GetAutoObject(A.Device.Helper).Dv()-
21600;AAv.Initialize(30,3,A29,true);Bf.CX(AAv);}A._GetAutoObject(A.Device.Device
).An.Bk(Bf);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOT;
var B;this.Dr(C.APr);this.Dl(A.aaR(A.acf.A8A));this.AwY([B=A._GetAutoObject(A.Device.
Device),B.A8$,B.BbM]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.A8A));},_className:"Application::FreshCowListScreen"};C.AOS={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AOS;this.Li.As(false);this.Li.
Aj(false);this.Li.Z(false);this.Jw.As(false);this.Jw.Aj(false);this.Jw.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APr={DX:function(G){C.Kv.
DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(7));},_Init:
function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APr;},_className:"Application::HeaderFreshCowListFilter"
};C.ADH={JC:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.
call(this.JC={I:this},0);C.CG._Init.call(this.D0={I:this},0);this.__proto__=C.ADH;
this.A_s(1);this.JC.H(A0j);this.JC.R((A.aaR(A.acf.Calving)+AcV)+A.aaR(A.acf.Bag)
);this.JC.L(A.jb.Text);this.D0.H(A0k);this.D0.R(A.aaR(A.acf.AEp));this.D0.L(A.jb.
Text);this.J(this.JC,0);this.J(this.D0,0);this.JC.S(A.aaL(A.fl.Ak));this.JC.A0(A.
aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A0(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.De;this.JC._Done();this.D0._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.JC._ReInit();this.D0._ReInit();this.JC.R((
A.aaR(A.acf.Calving)+AcV)+A.aaR(A.acf.Bag));this.D0.R(A.aaR(A.acf.AEp));this.JC.
S(A.aaL(A.fl.Ak));this.JC.A0(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.A0(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.JC).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.ACo={AHc:null,KV:null,UM:null,AP:null,A$:null
,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UM.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A$.H([this.UM.M[2]-1,0,this.UM.M[2]+1,aSize[
1]]);this.KV.H([this.UM.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KV.L(this.V.AQ);this.UM.Dg(this.V.AQ);},Ch:function(Ad){if(!this.AX
)return;this.Ht=Ad;if(!!this.AX){var IE=this.AX.CF(Ad,0);var Mn=this.AX.CF(Ad,1);
var A28=this.AX.CF(Ad,29);var AlH=this.AX.Hw(Ad,28);this.T(Mn.toFixed());this.KV.
R(A28.toFixed());this.UM.Acb(A._GetAutoObject(A.Device.Device).Aq0+1);this.UM.Bof(
AlH);this.UM.R(A._GetAutoObject(A.acj.KR).AjO(AlH));A._GetAutoObject(A.Device.Device
).SW(Ad);this.Aqa(IE);this.AxB();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A44:function(G){this.UM.Acd(this.AHc);},AxB:function(){var Gi=A._GetAutoObject(
A.Device.Device).Bt.B_();this.AHc=A._NewObject(C.Ajx,0);if(Gi>0){var O=Gi-1;while(
O>=0){var D8=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6);this.AtG(this.AHc,O,9,
D8);O=O-1;}}A.pe([this,this.A44],this);},AtG:function(A1C,Ad,A1B,Qm){var AlB=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ad,A1B);if(!!AlB)A1C.OA(AlB,Qm);},Aqa:function(Ac_){var Fy=
A._NewObject(A.Device.Filter,0);var AzP=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzP.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZY(A._GetAutoObject(A.Device.
Device).Aq0)-1,true);Fy.CX(AzP);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,Ac_,true);Fy.CX(HZ);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fy);},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.Text._Init.call(this.
KV={I:this},0);C.AUC._Init.call(this.UM={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.ACo;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(this.KV,0);this.J(this.UM,0);this.J(this.AP
,0);this.J(this.A$,0);this.KV.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.KV._Done();this.UM._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.KV._ReInit(
);this.UM._ReInit();this.AP._ReInit();this.A$._ReInit();this.KV.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AHc)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUC={AVl:0,Init:function(aArg){},AO0:function(){return A._GetAutoObject(A.Device.
Helper).Aqy(this.AVl);},AO2:function(){return this.AO0()+(this.MF*86400);},Bof:function(
E){if(this.AVl===E)return;this.AVl=E;A.pe([this,this.WU],this);},_Init:function(
aArg){C.AhD._Init.call(this,aArg);this.__proto__=C.AUC;this.Bc.H(A0l);this.Boc(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Du:function(){if(this.K&&this.K.Du)return this.K.
Du.apply(this,arguments);else return C.FactoryResetScope.Bu4.apply(this,arguments
);},Bu4:function(){return 3;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
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
Bhg:false,Init:function(aArg){this.Bhg=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ew:function(G){if(this.Bem){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);if(this.Bhg)A._GetAutoObject(A.Device.Device).AY(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).AY(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASA={WK:function(G){this.
AgA();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.Settings),[this,this.A39]);A._GetAutoObject(
C.BS).Fz();this.AMn();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.ARP)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DF:function(G){},AbB:function(
){return C.AqD;},AbC:function(){return C.Aq_;},Rb:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADj());},HS:function(G){C.
M_.HS.call(this,G);if(this.Akj()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajt(A._GetAutoObject(A.Device.Converter).AMi(this.L3.ADl())));this.N.Ce=[this,
this.Aaq];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false);},Agm:function(){A.
_GetAutoObject(C.A7).Cb(47);},A39:function(G){A._GetAutoObject(A.Device.Device).
Dw(0);A._GetAutoObject(C.A7).Cb(89);},_Init:function(aArg){C.M_._Init.call(this,
aArg);this.__proto__=C.ASA;this.Dr(C.ADB);this.Dl(A.aaR(A.acf.A8w));this.ATE(A._GetAutoObject(
C.Awc));},_ReInit:function(){C.M_._ReInit.call(this);this.Dl(A.aaR(A.acf.A8w));}
,_className:"Application::NoTransponderListScreen"};C.ASz={_Init:function(aArg){
C.I_._Init.call(this,aArg);this.__proto__=C.ASz;this.K1.As(false);this.K1.Aj(false
);this.K1.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADB={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad2(8));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.ADB;
},_className:"Application::HeaderNoTransponderListFilter"};C.AB8={Au2:null,Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.Au2.BT(aIndex);},_Init:
function(aArg){C.Ge._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.Au2={I:this},0);this.__proto__=C.AB8;},_Done:function(){this.__proto__=
C.Ge;this.Au2._Done();C.Ge._Done.call(this);},_ReInit:function(){C.Ge._ReInit.call(
this);this.Au2._ReInit();},_Mark:function(D){var B;C.Ge._Mark.call(this,D);if((B=
this.Au2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AMh={Co:null,Ad5:null,Init:function(aArg){this.Bb(this.Co);},Ls:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.AaP];this.BQ.Ce=null;
this.BQ.Ca=[this,this.A3K];this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.
ach.AeD));}return this.BQ;},AAL:function(G){var Aa=(C.Ajm.isPrototypeOf(G)?G:null
);if(Aa===this.Co)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad5)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(AIS);},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ajm._Init.call(this.
Co={I:this},0);C.Ajm._Init.call(this.Ad5={I:this},0);this.__proto__=C.AMh;this.H(
Rs);this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.H(I1);this.Co.T(A.aaR(A.acf.
AEz));this.Ad5.H(Qg);this.Ad5.T(A.aaR(A.acf.TF));this.J(this.Co,0);this.J(this.Ad5
,0);this.Text.S(A.aaL(A.fl.Ak));this.Co.AR=[this,this.AAL];this.Ad5.AR=[this,this.
AAL];this.Init(aArg);},_Done:function(){this.__proto__=C.Fs;this.Co._Done();this.
Ad5._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Co._ReInit();this.Ad5._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Co.
T(A.aaR(A.acf.AEz));this.Ad5.T(A.aaR(A.acf.TF));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BGj={Undefined:0,BGh:1,BGi:2,IdScanned:3,BFd:4,BEj:5,BEZ:6};C.AMv={A$0:function(
){A._GetAutoObject(A.Device.Device).AY(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfT]);},_Init:function(aArg){C.AuT._Init.call(
this,aArg);this.__proto__=C.AMv;this.Ge.Au(1);this.ATK(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aex={V6:null,V7:null,V8:null,Ag6:null,Ag7:null,Ag8:null,CE:null,Ce:null,Ca:null
,An7:A.jV,An8:A.jV,An9:A.jV,Arg:0,Arh:0,Ari:0,Aho:0,ZK:false,WV:false,Asx:false,
AsM:false,AsL:false,AjD:function(Fg){this.CE=Fg.CE;this.Ce=Fg.Ce;this.Ca=Fg.Ca;this.
An7=Fg.An7;this.An8=Fg.An8;this.An9=Fg.An9;this.Aho=Fg.Aho;this.V6=Fg.V6;this.V7=
Fg.V7;this.V8=Fg.V8;this.Ag6=Fg.Ag6;this.Ag7=Fg.Ag7;this.Ag8=Fg.Ag8;this.AsL=Fg.
AsL;this.AsM=Fg.AsM;this.Asx=Fg.Asx;this.WV=Fg.WV;this.ZK=Fg.ZK;this.Arg=Fg.Arg;
this.Arh=Fg.Arh;this.Ari=Fg.Ari;},AkT:function(Fg){Fg.CE=this.CE;Fg.Ce=this.Ce;Fg.
Ca=this.Ca;Fg.Hz(this.An7);Fg.E6(this.An8);Fg.CS(this.An9);Fg.AFD(this.Aho);Fg.AFu(
this.V6);Fg.ArY(this.V7);Fg.AnF(this.V8);Fg.C3(this.Ag6);Fg.Ct(this.Ag7);Fg.C4(this.
Ag8);Fg.OW(this.AsL);Fg.OX(this.AsM);Fg.Asx=this.Asx;Fg.WV=this.WV;Fg.ZK=this.ZK;
Fg.Bnl(this.Arg);Fg.ATy(this.Arh);Fg.A_E(this.Ari);},_Init:function(aArg){this.__proto__=
C.Aex;this.V6=A.aaL(A.fl.Ak);this.V7=A.aaL(A.fl.Ak);this.V8=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.V6=A.aaL(
A.fl.Ak);this.V7=A.aaL(A.fl.Ak);this.V8=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.V6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V7)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.V8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag7)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CE)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.AsI._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.ADz);},_className:"Application::NewAnimalSetTransponderScreen"};C.C9={Abl:null
,CountryToString:null,Du:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.LA(aIndex);},DZ:function(A8){return A8;
},H8:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abl)(F=this.Abl,F[2].call(F[0],E));},A1_:function(G){var F;if(!!this.Abl)this.Q=(
F=this.Abl,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Cc],0);},AFn:
function(E){if(A.aaZ(this.Abl,E))return;if(!!this.Abl)A.z$([this,this.A1_],this.
Abl,0);this.Abl=E;if(!!this.Abl)A.zX([this,this.A1_],this.Abl,0);A.pe([this,this.
A1_],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C9;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abl)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.O8={AC:null,Q:null,Background:null,It:null,Is:null,M$:
0,AM:0,Gr:0,Ga:0,Agi:function(G){this.Ki(this);},Bl:function(aSize){A.Core.P.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.P.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40);if(IG){this.Background.
L(A.jb.AV);this.CZ(256);}else{this.Background.L(this.M$);this.CZ(256);}},Agh:function(
G){this.Kd(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A37],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A37],E,0);if(!!E)A.pe([this
,this.A37],this);},CV:function(E){if(this.M$===E)return;this.M$=E;this.Am();},Ki:
function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Kd:function(
G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Gr)E=this.Ga;if(E>this.Ga)E=this.Gr;if(this.AM===E)return;this.AM=E;
this.Am();},Gb:function(E){if(this.Gr===E)return;this.Gr=E;this.Am();},EV:function(
E){if(this.Ga===E)return;this.Ga=E;this.Am();},C5:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DZ((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},A37:function(G){var F;if(!!this.
AC){this.Gb(0);this.EV(this.AC.H8());if(!!this.Q)this.Bx(this.AC.DZ((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.acg.AL._Init.call(this.Background={I:this},0);A.Core.BF._Init.call(this.It={
I:this},0);A.Core.BF._Init.call(this.Is={I:this},0);this.__proto__=C.O8;this.H(AIT
);this.Background.H(Alo);this.It.Filter=4;this.Is.Filter=5;this.M$=A.jb.CJ;this.
J(this.Background,0);this.It.BG=[this,this.Agi];this.It.D1=[this,this.Agi];this.
Is.BG=[this,this.Agh];this.Is.D1=[this,this.Agh];},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.It._Done();this.Is._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit(
);this.It._ReInit();this.Is._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Is)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.R0={A12:A.jV,Ai:function(
Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.A56));this.KB(this.A12);},Ch:function(
G){C.FA.Ch.call(this,G);var AlH=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!AlH)this.A12=Xo;else this.A12=A._GetAutoObject(A.acj.KR).AjO(AlH);this.Am();
},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.R0;},_className:
"Application::AnimalInfoItemCalvingDate"};C.R1={A27:0,Ai:function(Ae){C.FA.Ai.call(
this,Ae);this.T(A.aaR(A.acf.ARN));if(this.A27>0)this.KB(this.A27.toFixed());else
this.KB(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(this,G);this.A27=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.FA._Init.call(
this,aArg);this.__proto__=C.R1;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Du:function(){return 5;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Akz(E);},A2r:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B$,
this.Cc],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A2r],[B=this.Animal,B.ASR,B.Akz],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A2r],[B=this.Animal,B.ASR,B.Akz],0);A.pe([this,this.A2r],this);
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
)this.Animal.N7(E);},A10:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B$,this.Cc],0);},L6:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A10],[B=this.Animal,B.Awh,B.N7],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A10],[B=this.Animal,B.Awh,B.N7],0);A.pe([
this,this.A10],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AR9={Wg:null,YT:null,AeQ:null,Init:function(
aArg){this.Bb(this.Wg);},Adx:function(G){var Aa=(C.Co.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YT)this.ByO();else if(Aa===this.Wg)this.BBA(this);else throw new
Error(Ays);A._GetAutoObject(A.Device.Device).Dw(0);},BBA:function(G){var B;var F;
var Vu=(C.AmA.isPrototypeOf(B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null
);if(!Vu){A.ab5("%s",A0m);return;}Vu.AKT(this);},ByO:function(){A._GetAutoObject(
A.Device.Helper).W.AGW(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AY(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mx._Init.call(this.Wg={I:this},0);C.Mx._Init.call(this.YT={
I:this},0);C.V0._Init.call(this.AeQ={I:this},0);this.__proto__=C.AR9;var B;this.
H(AcT);this.Wg.H(Qg);this.Wg.As(true);this.Wg.T(A.aaR(A.acf.A$G));this.Wg.Bi(true
);this.YT.H(I1);this.YT.As(true);this.YT.T(A.aaR(A.acf.A5s));this.YT.Bi(true);this.
AeQ.H(BD);this.AeQ.T(A.aaR(A.acf.AC9));this.AeQ.Bi(true);this.J(this.Wg,0);this.
J(this.YT,0);this.J(this.AeQ,0);this.Wg.AR=[this,this.Adx];this.YT.AR=[this,this.
Adx];this.AeQ.ATl([B=A._GetAutoObject(A.Device.Device),B.ArG,B.Atu]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.Wg._Done();this.YT._Done(
);this.AeQ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Wg._ReInit();this.YT._ReInit();this.AeQ._ReInit();this.Wg.
T(A.aaR(A.acf.A$G));this.YT.T(A.aaR(A.acf.A5s));this.AeQ.T(A.aaR(A.acf.AC9));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Wg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.V0={
Ai:function(Ae){C.Ui.Ai.call(this,Ae);var FT=A.jb.CJ;var G0=A.jb.Text;if(this.Hm
){FT=A.jb.Text;G0=A.jb.Bm;}if(!this.LN){this.Background.L(FT);this.V.L(A.jb.Am9);
}else if(this.Qz){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.
L(G0);}if(this.AmI){this.Mu.Cw(1);this.Mu.L(A.jb.Ib);}else{this.Mu.Cw(0);this.Mu.
L(A.jb.Bm);}},_Init:function(aArg){C.Ui._Init.call(this,aArg);this.__proto__=C.V0;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.Av7={C_:null,A3:null,AF:
null,Akk:null,Q1:null,EM:null,ASp:LB,Bl:function(aSize){C.Co.Bl.call(this,aSize);
var FT=A.jb.CJ;var G0=A.jb.Text;if(this.Hm){FT=A.jb.Bm;G0=A.jb.Text;}this.Background.
L(FT);this.V.L(G0);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,Cu;C.Co.Ai.call(this
,Ae);this.Akk.L(this.V.AQ);this.Q1.L(this.V.AQ);this.Q1.R(A0n);this.T(((this.ASp+
A.aaR(A.acf.Colon))+CR)+A._GetAutoObject(A.Device.Helper).Ak9(840003123456789).toFixed(
));if(!!this.A3&&!!this.AF){var A3b=this.Q1.Afj([(this.Q1.String.length-(F=this.
AF,F[1].call(F[0])))-(Cu=this.A3,Cu[1].call(Cu[0])),0]);var A4w=this.Q1.Afj([this.
Q1.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABy=this.Q1.Dd();this.EM.H([
A3b[0]-1,ABy[1],A4w[0]+1,ABy[3]]);}else this.EM.H(this.Q1.Dd());},DC:function(E){
if(this.C_===E)return;this.C_=E;this.Akk.Ax(E);},OU:function(E){if(A.aaZ(this.A3
,E))return;if(!!this.A3)A.z$([this,this.AaO],this.A3,0);this.A3=E;if(!!E)A.zX([this
,this.AaO],E,0);if(!!E)A.pe([this,this.AaO],this);},PZ:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaQ],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaQ],E,0);if(!!E)A.pe([this,this.AaQ],this);},AaQ:function(G){this.Am(
);},AaO:function(G){this.Am();},Ar_:function(E){if(this.ASp===E)return;this.ASp=
E;this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akk={I:this},0);A.acg.Text._Init.call(this.Q1={I:this},0);A.acg.BW._Init.call(
this.EM={I:this},0);this.__proto__=C.Av7;this.H(K4);this.V.A6(0x11);this.Akk.H(Pa
);this.Q1.H(A0o);this.EM.H(A0p);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Akk
,0);this.J(this.Q1,0);this.J(this.EM,0);this.Q1.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Co;this.Akk._Done();this.Q1._Done();this.EM._Done();C.Co._Done.
call(this);},_ReInit:function(){C.Co._ReInit.call(this);this.Akk._ReInit();this.
Q1._ReInit();this.EM._ReInit();this.Q1.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Co._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Q1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUx:0,Init:
function(aArg){var B;A.zX([this,this.Bfc],[B=A._GetAutoObject(A.Device.Device),B.
AER,B.AI2],0);A.pe([this,this.Bfc],this);},HS:function(G){C.TJ.HS.call(this,G);if(
this.AjS)this.N.Ct(A.aaL(A.ach.AD));else this.N.Ct(A.aaL(A.ach.ANw));this.N.C4(A.
aaL(A.ach.Options));this.N.E6(A.jV);this.N.CS(A.jV);this.N.Ce=[this,this.A$o];this.
N.Ca=[this,this.WK];this.N.ArY(A.aaL(A.fl.Ak));this.N.AnF(A.aaL(A.fl.Ak));},M5:function(
G){this.Bfy(this);},Ov:function(G){this.BBt(this);},AdU:function(Aii,Aij,BxS){A.
_GetAutoObject(C.BS).ABZ(Aii,Aij,[this,this.A9w,this.ATO],BxS);},WK:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjS){A._GetAutoObject(C.BS).
TG(A.aaR(A.acf.BiF),[this,this.Boz]);A._GetAutoObject(C.BS).Fz();}this.AdU(A.aaR(
A.acf.Rating),[this,this.AUc],3);this.AdU(A.aaR(A.acf.Afz),[this,this.AUe],2);this.
AdU(A.aaR(A.acf.Temperature),[this,this.AUd],1);this.AdU(A.aaR(A.acf.AdX),[this,
this.Bow],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.BiJ
));A._GetAutoObject(A.Device.Device).Dw(6);},ATO:function(E){if(this.AUx===E)return;
this.AUx=E;A.abo([this,this.A9w,this.ATO],0);},Bfc:function(G){this.ATO(A._GetAutoObject(
A.Device.Device).D9);},A9w:function(){return this.AUx;},_Init:function(aArg){C.TJ.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={VH:null
,Init:function(aArg){var B;A.zX([this,this.Agd],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);A.pe([this,this.Bhl],this);A.pe([this,this.Rb],this);},CC:function(
G){C.TJ.CC.call(this,G);A.pe([this,this.Bhq],this);},AG2:function(G){C.TJ.AG2.call(
this,G);if(!!this.Lk)this.AhG(this.Lk,this.VH);},HS:function(G){C.TJ.HS.call(this
,G);this.N.Ct(A.aaL(A.ach.ARk));this.N.C4(A.aaL(A.ach.ARl));if(this.AjS)this.N.ATy(
0);else this.N.ATy(1);this.N.A_E(A._GetAutoObject(A.Device.Converter).BhP(A._GetAutoObject(
A.Device.Device).D9));this.N.E6(A.jV);this.N.CS(A.jV);this.N.Ce=[this,this.Bmm];
this.N.Ca=[this,this.BoB];this.N.ArY(A.aaL(A.fl.Ak));this.N.AnF(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QN()){this.N.IS.CZ(100);this.N.Ce=null;
}else this.N.IS.CZ(255);if(!A._GetAutoObject(A.Device.Device).An.B_()){this.N.Lj.
CZ(100);this.N.Ca=null;}else this.N.Lj.CZ(255);if(A._GetAutoObject(A.Device.Device
).An.B_()<=1){this.N.T7.CZ(100);this.N.T8.CZ(100);}else{this.N.T7.CZ(255);this.N.
T8.CZ(255);}},M5:function(G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)return;
var LJ=A._GetAutoObject(A.Device.Helper).W.CL;LJ=LJ+1;if(LJ>=A._GetAutoObject(A.
Device.Device).An.B_())LJ=0;A._GetAutoObject(A.Device.Helper).GT(LJ);},Ov:function(
G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)return;var LJ=A._GetAutoObject(
A.Device.Helper).W.CL;LJ=LJ-1;if(LJ<0)LJ=A._GetAutoObject(A.Device.Device).An.B_(
)-1;A._GetAutoObject(A.Device.Helper).GT(LJ);},Agc:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>=0)A._GetAutoObject(C.A7).Cb(94);},Bmm:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},BoB:function(G){this.Bfy(this);},Rb:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).MB());A.pe([this,this.Bhq
],this);},Bhl:function(G){if(!A._GetAutoObject(A.Device.Device).An.B_()){this.VH.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QN()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.VH.R(A.aaR(A.acf.AEH));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DM(1,4)){if(A._GetAutoObject(A.Device.Helper).ADk(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.VH.R(A.aaR(A.acf.AOl));else this.VH.R(A.aaR(
A.acf.AOk));}else this.VH.R(A.aaR(A.acf.ASw));}else this.VH.Z(false);},Bhq:function(
G){var BCr=A._GetAutoObject(A.Device.Helper).W.Id;var A4z=A._GetAutoObject(A.Device.
Device).An.LZ(0,BCr);if(!A._GetAutoObject(A.Device.Device).An.B_())A._GetAutoObject(
A.Device.Helper).GT(-1);else if(A4z<0)A._GetAutoObject(A.Device.Helper).GT(0);},
Agd:function(G){this.Bhl(this);this.HS(this);},_Init:function(aArg){C.TJ._Init.call(
this,aArg);C.AkU._Init.call(this.VH={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.APK);this.VH.H(Ff);this.J(this.VH,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TJ;this.VH._Done();C.TJ._Done.call(this);},_ReInit:function(){
C.TJ._ReInit.call(this);this.VH._ReInit();},_Mark:function(D){var B;C.TJ._Mark.call(
this,D);if((B=this.VH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMK={QV:null,Wh:null,AbP:null,YW:null,Init:function(aArg){var B;var F;this.Bb(
this.QV);if(!!A._GetAutoObject(C.A7).Q){var Vu=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null);if(!Vu){A.ab5("%s",AyS);
return;}else{if(Vu.AjS)this.QV.T(A.aaR(A.acf.Bg));else this.QV.T(A.aaR(A.acf.EU)
);var AzL=A._GetAutoObject(A.Device.Device).An.Filter;if(!AzL||A._GetAutoObject(
A.Device.Helper).Aro(AzL))this.YW.As(false);else if(!A._GetAutoObject(A.Device.Device
).An.B_()){this.Wh.As(false);this.QV.As(false);}}}},Adx:function(G){var Aa=(C.Co.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbP)A._GetAutoObject(C.A7).Cb(9);else if(Aa===this.Wh)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QV)this.BCW();else if(Aa===this.YW)this.
A18();else throw new Error(Ays);},BCW:function(){var B;var F;var Vu=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null);if(!Vu){A.
ab5("%s",AyS);return;}Vu.A$o(this);},A18:function(){var B;var F;var Vu=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null);if(!Vu){A.
ab5("%s",AyS);return;}Vu.Rb(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mx._Init.call(this.QV={I:this},0);C.Mx._Init.call(this.Wh={I:this},
0);C.Mx._Init.call(this.AbP={I:this},0);C.Mx._Init.call(this.YW={I:this},0);this.
__proto__=C.AMK;this.H(AfI);this.QV.H(Aan);this.QV.As(true);this.QV.T(A.aaR(A.acf.
EU));this.QV.Bi(true);this.Wh.H(Qg);this.Wh.As(true);this.Wh.T(A.aaR(A.acf.AUY));
this.Wh.Bi(true);this.AbP.H(I1);this.AbP.T(A.aaR(A.acf.AkW));this.AbP.Bi(true);this.
YW.H(BD);this.YW.T(A.aaR(A.acf.ACu));this.YW.Bi(true);this.J(this.QV,0);this.J(this.
Wh,0);this.J(this.AbP,0);this.J(this.YW,0);this.QV.AR=[this,this.Adx];this.Wh.AR=[
this,this.Adx];this.AbP.AR=[this,this.Adx];this.YW.AR=[this,this.Adx];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QV._Done();this.Wh._Done(
);this.AbP._Done();this.YW._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QV._ReInit();this.Wh._ReInit();this.AbP.
_ReInit();this.YW._ReInit();this.QV.T(A.aaR(A.acf.EU));this.Wh.T(A.aaR(A.acf.AUY
));this.AbP.T(A.aaR(A.acf.AkW));this.YW.T(A.aaR(A.acf.ACu));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.Jc={T9:null,EA:null,Yu:null,Background:null,Ap:null,It:null,Is:null,M$:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10
);var IG=((Ae&0x40)===0x40);if(IG){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.CZ(256);}else if(Hf){this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.CZ(
256);}else{this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.CZ(128);}if(!this.
AM)this.Ap.Cw(0);else if(this.AM>0){if(A.aaZ(this.T9,[B=A._GetAutoObject(A.Device.
Device),B.Awr,B.Ay4]))this.Ap.Cw(2);else if(A.aaZ(this.T9,[B=A._GetAutoObject(A.
Device.Device),B.Awq,B.Ay3]))this.Ap.Cw(3);else if(!!this.Yu&&((F=this.Yu,F[1].call(
F[0]))===1))this.Ap.Cw(1);else this.Ap.Cw(0);}else if(A.aaZ(this.T9,[B=A._GetAutoObject(
A.Device.Device),B.Awr,B.Ay4]))this.Ap.Cw(6);else if(A.aaZ(this.T9,[B=A._GetAutoObject(
A.Device.Device),B.Awq,B.Ay3]))this.Ap.Cw(7);else if(!!this.Yu&&((F=this.Yu,F[1].
call(F[0]))===1))this.Ap.Cw(5);else this.Ap.Cw(4);},Agi:function(G){this.Ki(this
);},Agh:function(G){this.Kd(this);},Ki:function(G){this.Bx(1);},Kd:function(G){this.
Bx(-1);},Bnv:function(E){if(A.aaZ(this.T9,E))return;if(!!this.T9)A.z$([this,this.
A3Q],this.T9,0);this.T9=E;if(!!E)A.zX([this,this.A3Q],this.T9,0);A.pe([this,this.
A3Q],this);},Uw:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Agg],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Agg],this.EA,0);if(!!E)A.pe([this
,this.Agg],this);},A3Q:function(G){var F;if(!!this.T9)this.Bx((F=this.T9,F[1].call(
F[0])));},Agg:function(G){A.pe([this,this.BC9],this);},CV:function(E){if(this.M$===
E)return;this.M$=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T9)(F=this.T9,F[2].call(F[0],E));this.Am();A.abo([this,this.Uq,this.
Bx],0);},A_u:function(E){if(A.aaZ(this.Yu,E))return;if(!!this.Yu)A.z$([this,this.
Agg],this.Yu,0);this.Yu=E;if(!!E)A.zX([this,this.Agg],this.Yu,0);if(!!E)A.pe([this
,this.Agg],this);},BC9:function(G){var F,Cu;if(!this.Yu||!this.EA)return;this.Bnv(
A._GetAutoObject(A.Device.Helper).Bd1((F=this.Yu,F[1].call(F[0])),(Cu=this.EA,Cu[
1].call(Cu[0]))));this.Am();},Uq:function(){return this.AM;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);
A.acg.Ap._Init.call(this.Ap={I:this},0);A.Core.BF._Init.call(this.It={I:this},0);
A.Core.BF._Init.call(this.Is={I:this},0);this.__proto__=C.Jc;this.H(Ats);this.Background.
A1(0x3F);this.Background.H(Ats);this.Ap.A1(0x3C);this.Ap.H(Ats);this.It.Filter=4;
this.Is.Filter=5;this.M$=A.jb.CJ;this.J(this.Background,0);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.AVn));this.It.BG=[this,this.Agi];this.Is.BG=[this,this.Agh];},
_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.Ap._Done();
this.It._Done();this.Is._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Background._ReInit();this.Ap._ReInit();this.It._ReInit(
);this.Is._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.T9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Is).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AMg={WK:function(G){var B;var F;this.AgA();if(!!A._GetAutoObject(A.Device.Helper
).AOY((F=this.Fn,F[1].call(F[0])),0,true))this.AuO(A.aaR(A.acf.A7x),[this,this.BoC
],[B=A._GetAutoObject(A.Device.Device),B.A8O,B.Bbv]);else A._GetAutoObject(C.BS).
Aa3(A.aaR(A.acf.A7x));A._GetAutoObject(C.BS).Fz();this.I8(A.aaR(A.acf.LinkTransponder
),[this,this.BnM],8);this.I8(A.aaR(A.acf.TF),[this,this.Akw],9);this.I8(A.aaR(A.
acf.BaB),[this,this.Boo],10);this.I8(A.aaR(A.acf.AGz),[this,this.ATT],3);this.I8(
A.aaR(A.acf.An6),[this,this.Aw3],2);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mp(A.aaR(A.acf.Anm)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DF:function(G){},AbB:function(){return C.AqD;},AbC:function(){return C.Aq_;
},Rb:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A69((F=this.Fn,F[1].call(F[0]))));},HS:function(G){var F;C.GJ.HS.
call(this,G);if(this.Akj()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajt((F=this.Fn,F[1].call(F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.
N.OW(false);this.N.OX(false);},Agm:function(){A._GetAutoObject(C.A7).Cb(52);},A3V:
function(G){C.GJ.A3V.call(this,G);A.pe([this,this.A01],this);},BoC:function(G){A.
_GetAutoObject(A.Device.Device).Awx(!A._GetAutoObject(A.Device.Device).Aql);this.
Aoc(this);},Aoc:function(G){var F;var Bf=A._GetAutoObject(A.Device.Device).An.Filter.
Fa();A._GetAutoObject(A.Device.Helper).Bo_(Bf);if(A._GetAutoObject(A.Device.Device
).Aql){var A2P=A._GetAutoObject(A.Device.Helper).AOY((F=this.Fn,F[1].call(F[0]))
,21600,true);Bf.CX(A2P);}A._GetAutoObject(A.Device.Device).An.Bk(Bf);},_Init:function(
aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AMg;var B;this.Dl(A.aaR(A.acf.
Awa));this.AwY([B=A._GetAutoObject(A.Device.Device),B.A8N,B.Bbu]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.Awa));},_className:"Application::ActionListScreen"
};C.AMf={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AMf;},
_className:"Application::ActionListFilterScreen"};C.APK={IR:null,IY:null,Bc:null
,MK:A.jV,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9A,B.A_0],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Device
).An,B.Fp,B.Ft],0);},Dg:function(E){C.IP.Dg.call(this,E);this.IY.L(E);},DX:function(
G){C.IP.DX.call(this,G);var AzL=A._GetAutoObject(A.Device.Device).An.Filter;if(!
AzL||A._GetAutoObject(A.Device.Helper).Aro(AzL))this.IR.Z(false);else this.IR.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.Aq7())this.Aw_(((A._GetAutoObject(A.
Device.Helper).W.CL+1).toFixed()+AIU)+A._GetAutoObject(A.Device.Device).An.B_().
toFixed());else this.Aw_(BaM);},Aw_:function(E){if(this.MK===E)return;this.MK=E;
this.IY.R(E);},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IR={I:this},0);A.acg.Text._Init.call(this.IY={I:this},0);A.acg.C8._Init.call(
this.Bc={I:this},0);this.__proto__=C.APK;this.HT.H(Brt);this.DS.H(Bru);this.IR.H(
Brv);this.IR.L(A.jb.Text);this.IY.H(BaN);this.IY.Ho(2);this.IY.KX(true);this.IY.
A6(0x12);this.IY.R(BaO);this.Bc.DD(Aln);this.Bc.DN(AyO);this.Bc.L(A.jb.Bc);this.
J(this.IR,0);this.J(this.IY,0);this.J(this.Bc,0);this.IR.Ax(A.aaL(A.ach.AeF));this.
IY.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IP;this.
IR._Done();this.IY._Done();this.Bc._Done();C.IP._Done.call(this);},_ReInit:function(
){C.IP._ReInit.call(this);this.IR._ReInit();this.IY._ReInit();this.Bc._ReInit();
this.IY.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((
B=this.IR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsS={Text:null,Bl:function(aSize){C.O8.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.O8.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xo);else this.Text.R(this.AC.Gm((F=this.Q,F[1].call(F[0]
))));var IG=((Ae&0x40)===0x40);if(IG)this.Text.L(A.jb.Bm);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.O8._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.AsS;this.Text.R(Rt);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.O8;this.Text._Done();C.O8.
_Done.call(this);},_ReInit:function(){C.O8._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.O8._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Arl={C_:null,Bl:function(aSize){C.O8.Bl.call(this,aSize);this.C_.H(A.abK(this.
C_.M,aSize));},Ai:function(Ae){var B;var F;C.O8.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C_.Ax(null);else{this.C_.Ax(this.AC.ADf(this.AC.DZ((F=this.Q,F[1].call(F[
0])))));this.C_.Cw(this.AC.ADh(this.AC.DZ((F=this.Q,F[1].call(F[0])))));}var IG=((
Ae&0x40)===0x40);if(IG)this.C_.L(A.jb.Bm);else this.C_.L(A.jb.Text);},_Init:function(
aArg){C.O8._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Arl;this.H(Ats);this.C_.H(AIT);this.J(this.C_,0);},_Done:function(){this.__proto__=
C.O8;this.C_._Done();C.O8._Done.call(this);},_ReInit:function(){C.O8._ReInit.call(
this);this.C_._ReInit();},_Mark:function(D){var B;C.O8._Mark.call(this,D);if((B=
this.C_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Ava={V2:null,DirectionOfCountingToString:null,Aek:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},Gm:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jV;return this.
DirectionOfCountingToString.BT(aIndex);},DZ:function(A8){return A8;},H8:function(
){return this.Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.V2)(F=
this.V2,F[2].call(F[0],E));},ADf:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Aek.AsT(aIndex);},ADh:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Aek.AsU(aIndex);},A2k:function(G){var F;
if(!!this.V2)this.Q=(F=this.V2,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cc],0);},Ae3:function(E){if(A.aaZ(this.V2,E))return;if(!!this.V2)A.z$([this
,this.A2k],this.V2,0);this.V2=E;if(!!this.V2)A.zX([this,this.A2k],this.V2,0);A.pe([
this,this.A2k],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aek._Init.call(this.Aek={I:this},0);this.__proto__=C.Ava;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aek._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aek._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.V2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMC={Hv:null,EA:null,AnimalIdGenerationMethodToString:
null,Ad1:null,Du:function(){return 4;},C7:function(aIndex){var F;var A8=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A8=0;break;case 1:A8=1;break;
case 2:A8=this.BzZ((F=this.EA,F[1].call(F[0])));break;case 3:A8=5;break;default:
throw new Error(Brw+aIndex.toFixed());}return A8;},Gm:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jV;return this.AnimalIdGenerationMethodToString.
BT(this.C7(aIndex));},DZ:function(A8){var aIndex=-1;switch(A8){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Brx+A8.toFixed());}return aIndex;},H8:function(){return this.
Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hv)(F=this.Hv,F[2].
call(F[0],E));},ADf:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.Ad1.AsT(this.C7(aIndex));},ADh:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.Ad1.AsU(this.C7(aIndex));},A1Q:function(G){var F;
if(!!this.Hv)this.Q=(F=this.Hv,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cc],0);},Bmu:function(E){if(A.aaZ(this.Hv,E))return;if(!!this.Hv)A.z$([this
,this.A1Q],this.Hv,0);this.Hv=E;if(!!this.Hv)A.zX([this,this.A1Q],this.Hv,0);A.pe([
this,this.A1Q],this);},Uw:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Agg],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Agg],this.EA
,0);A.pe([this,this.Agg],this);},Agg:function(G){A.pe([this,this.ByQ],this);},BzZ:
function(Ma){var Rv=0;switch(Ma){case 0:Rv=2;break;case 1:Rv=3;break;case 2:Rv=4;
break;default:throw new Error(Bry+Ma.toFixed());}return Rv;},ByQ:function(G){var
Be0=this.C7(this.DZ(this.Q));if(this.Q!==Be0)this.Au(Be0);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.Ad1._Init.call(this.
Ad1={I:this},0);this.__proto__=C.AMC;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.Ad1._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.Ad1._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGY={FN:null,Aa_:null,Q:null,Fm:null,Fc:null,HJ:null,WD:null,AW:null,H4:null
,Kr:null,A_:0,AM:0,Alz:0,Init:function(aArg){var B;A.zX([this,this.Bfb],[B=A._GetAutoObject(
A.Device.Device),B.Anv,B.AoE],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hm){this.AW.FP(A.jb.CJ);this.HJ.CV(A.jb.CJ);this.WD.CV(A.jb.CJ);
this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.HJ.
CV(A.jb.CU);this.WD.CV(A.jb.CU);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}
}else{if(this.Hm){this.AW.FP(A.jb.CJ);this.HJ.CV(A.jb.CJ);this.WD.CV(A.jb.CJ);}else{
this.AW.FP(A.jb.CU);this.HJ.CV(A.jb.CU);this.WD.CV(A.jb.CU);}this.Bb(null);}},H1:
function(G){C.Eg.H1.call(this,G);if(!this.A_)this.FW(this);else this.He(this);},
DK:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(
F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;
default:this.FN.AkT((F=this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},He:
function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)this.FN.AjD((
F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.
A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{if(this.AW.A88())this.Bb(
this.AW);else this.Bb(this.WD);if(!this.AM)this.AW.SV(2);else this.AW.SV(7);}break;
default:throw new Error(Att+this.A_.toFixed());}this.DK(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uq,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Ov:function(G){this.ABq(2);},M5:function(G){this.ABq(
7);},ABq:function(GA){var B;var AzM=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!AzM){var AAC=(A.Core.P.isPrototypeOf(B=this.QM(AzM,GA,0x15))?B:null);if(!!AAC){
this.Bb(AAC);return true;}}return false;},Ao7:function(G){A.pe([this,this.Bfb],this
);},A4K:function(G){var B;var F;if(!this.H4.Hv){this.Kr.Ae3(null);return;}switch((
F=this.H4.Hv,F[1].call(F[0]))){case 0:case 1:this.Kr.Ae3(null);break;case 3:this.
Kr.Ae3([B=A._GetAutoObject(A.Device.Device),B.ASP,B.A0I]);break;case 2:this.Kr.Ae3([
B=A._GetAutoObject(A.Device.Device),B.ASQ,B.A0J]);break;case 4:case 5:this.Kr.Ae3([
B=A._GetAutoObject(A.Device.Device),B.AEW,B.AI6]);break;default:throw new Error(
Brz+(F=this.H4.Hv,F[1].call(F[0])).toFixed());}},Bfb:function(G){var F;if(!this.
H4.Hv)return;A.pe([this,this.A4K],this);var At8=false;switch((F=this.H4.Hv,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{At8=true;this.AW.A$g(-1);}break;case 0:
case 1:{At8=false;this.AW.A$g(A._GetAutoObject(A.Device.Device).A3);}break;default:
throw new Error(AyG+(F=this.H4.Hv,F[1].call(F[0])).toFixed());}this.AW.As(At8);this.
HJ.As(At8);this.HJ.Z(At8);if(((F=this.H4.Hv,F[1].call(F[0]))!==this.Alz)||(At8===
false)){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMA((F=this.H4.
Hv,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BP){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bke((F=this.H4.Hv,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kz(A._GetAutoObject(A.Device.Device).A3);else this.AW.Kz(0);this.Alz=(
F=this.H4.Hv,F[1].call(F[0]));},A97:function(E){var B;if(this.Aa_===E)return;if(
!!this.Aa_){A.z$([this,this.Ao7],[B=this.Aa_,B.WJ,B.J0],0);A.z$([this,this.Ao7],[
B=this.Aa_,B.Anz,B.Nr],0);A.z$([this,this.Ao7],[B=this.Aa_,B.ArK,B.P1],0);this.H4.
Uw(null);}this.Aa_=E;if(!!E){A.zX([this,this.Ao7],[B=this.Aa_,B.WJ,B.J0],0);A.zX([
this,this.Ao7],[B=this.Aa_,B.Anz,B.Nr],0);A.zX([this,this.Ao7],[B=this.Aa_,B.ArK
,B.P1],0);this.H4.Uw([B=this.Aa_,B.WJ,B.J0]);}if(!!E)A.pe([this,this.Ao7],this);
},Uq:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BF._Init.call(this.Fm={I:this},0);A.Core.BF._Init.call(this.Fc={I:this},0
);C.Arl._Init.call(this.HJ={I:this},0);C.Arl._Init.call(this.WD={I:this},0);C.AvX.
_Init.call(this.AW={I:this},0);C.AMC._Init.call(this.H4={I:this},0);C.Ava._Init.
call(this.Kr={I:this},0);this.__proto__=C.AGY;var B;this.H(U4);this.V.As(false);
this.V.R(Atk);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fc.Filter=7;this.HJ.H(BrA);
this.HJ.As(false);this.WD.H(BrB);this.AW.H(BrC);this.AW.As(false);this.J(this.HJ
,0);this.J(this.WD,0);this.J(this.AW,0);this.FN=A._NewObject(C.Aex,0);this.Fm.BG=[
this,this.Ov];this.Fc.BG=[this,this.M5];this.HJ.CK(this.Kr);this.HJ.Au([B=this.Kr
,B.B$,B.Cc]);this.WD.CK(this.H4);this.WD.Au([B=this.H4,B.B$,B.Cc]);this.AW.Au([this
,this.Uq,this.Bx]);this.H4.Bmu([B=A._GetAutoObject(A.Device.Device),B.Anv,B.AoE]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fc.
_Done();this.HJ._Done();this.WD._Done();this.AW._Done();this.H4._Done();this.Kr.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fm._ReInit();this.Fc._ReInit();this.HJ._ReInit();this.WD._ReInit();this.AW._ReInit(
);this.H4._ReInit();this.Kr._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa_)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WD)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G6={Az4:null,Fm:null,Fc:null,G3:null,
F_:null,EM:null,Ne:0,ANe:0,ACk:0,UC:0,Bay:-1,ANd:false,Init:function(aArg){A.pe([
this,this.A1c],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
ANd);this.EM.H(A.wC(this.Yz(this.ACk).M,this.Yz((this.ACk+this.ANe)-1).M));},Ov:
function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var A15=this.BgK(2);if(A15===
false)D5.Mw=true;},M5:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var
A15=this.BgK(7);if(A15===false)D5.Mw=true;},BgK:function(GA){var B;var DV=(C.DG.
isPrototypeOf(B=this.AV)?B:null);DV=this.Bd3(DV,GA,true);if(!!DV){this.Bb(DV);this.
Az4=(C.DG.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adw:function(
G){A.ab5("%s",Alj);},GZ:function(s){this.Adw(s);},FP:function(E){if(this.Ne===E)
return;this.Ne=E;this.F_.CV(E);this.G3.CV(E);},SV:function(GA){var B;switch(GA){
case 2:this.Bb(this.G3);break;case 7:this.Bb(this.F_);break;default:A.ab5("%s%e"
,BrD,GA);}this.Az4=(C.DG.isPrototypeOf(B=this.AV)?B:null);},LU:function(G){},A1c:
function(s){this.LU(s);},AFh:function(E){if(this.ANd===E)return;this.ANd=E;this.
Am();},A_b:function(E){if(this.ANe===E)return;this.ANe=E;this.Am();},A_a:function(
E){if(this.ACk===E)return;this.ACk=E;this.Am();},Yz:function(HB){var B6=null;switch(
HB){case-1:case 0:B6=this.F_;break;case 1:B6=this.G3;break;default:A.ab5("%s",Ah6
);}return B6;},Kz:function(E){if(this.UC===E)return;this.UC=E;this.Amt();},Amt:function(
){A.ab5("%s",Alj);},Bd3:function(Ac4,GA,LN){var B;if(!!Ac4){var Bf;if(LN)Bf=0x11;
else Bf=0x0;switch(GA){case 2:Ac4=(C.DG.isPrototypeOf(B=this.AqV(Ac4,Bf))?B:null
);break;case 7:Ac4=(C.DG.isPrototypeOf(B=this.TX(Ac4,Bf))?B:null);break;default:
throw new Error(BrE);}}return Ac4;},A$g:function(E){if(this.Bay===E)return;this.
Bay=E;var DV=this.F_;var A2s;while(!!DV){A2s=!!E;DV.As(A2s);DV.Z(A2s);if(DV===this.
Az4)this.Bb(DV);DV=this.Bd3(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Fm={I:this},0);A.Core.BF._Init.
call(this.Fc={I:this},0);C.DG._Init.call(this.G3={I:this},0);C.DG._Init.call(this.
F_={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.G6;this.
H(BrF);this.Fm.Filter=6;this.Fc.Filter=7;this.Ne=A.jb.CJ;this.G3.H(E8);this.F_.H(
BaP);this.EM.H(BrG);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.G3,0);this.J(this.
F_,0);this.J(this.EM,0);this.Fm.BG=[this,this.Ov];this.Fm.D1=[this,this.Ov];this.
Fc.BG=[this,this.M5];this.Fc.D1=[this,this.M5];this.Az4=this.F_;this.G3.Dk=[this
,this.GZ];this.F_.Dk=[this,this.GZ];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.Fm._Done();this.Fc._Done();this.G3._Done();this.F_._Done();this.EM.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Fm._ReInit();this.Fc._ReInit();this.G3._ReInit();this.F_._ReInit();this.EM.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Az4)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.ARq={Dz:null,CW:null,Cv:null
,FP:function(E){if(this.Ne===E)return;C.HN.FP.call(this,E);this.Cv.CV(E);this.CW.
CV(E);this.Dz.CV(E);},Yz:function(HB){var B6=null;switch(HB){case-1:case 0:B6=this.
F_;break;case 1:B6=this.Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;
case 4:B6=this.G3;break;default:A.ab5("%s",Ah6);}return B6;},_Init:function(aArg
){C.HN._Init.call(this,aArg);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(
this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARq;this.
H(BrH);this.G3.H(Alo);this.Dz.H(BaQ);this.CW.H(BaR);this.Cv.H(BaS);this.F_.H(BrI
);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);this.Dz.Dk=[this,this.
GZ];this.CW.Dk=[this,this.GZ];this.Cv.Dk=[this,this.GZ];},_Done:function(){this.
__proto__=C.HN;this.Dz._Done();this.CW._Done();this.Cv._Done();C.HN._Done.call(this
);},_ReInit:function(){C.HN._ReInit.call(this);this.Dz._ReInit();this.CW._ReInit(
);this.Cv._ReInit();},_Mark:function(D){var B;C.HN._Mark.call(this,D);if((B=this.
Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AV0={Rf:null,AcM:null,AVZ:0,CC:function(G){this.AcM.As(true);},E4:function(G
){this.AcM.As(false);},Bom:function(E){if(this.AVZ===E)return;this.AVZ=E;this.Rf.
R((((A.aaR(A.acf.AVY)+AcV)+E.toFixed())+BrJ)+A.aaR(A.acf.Lh));},Bmf:function(){return this.
AVZ;},BBQ:function(G){A._GetAutoObject(C.A7).Cb(3);A._GetAutoObject(A.Device.Device
).AnC(1);},_Init:function(aArg){C.X9._Init.call(this,aArg);C.CG._Init.call(this.
Rf={I:this},0);A.acl.Gn._Init.call(this.AcM={I:this},0);this.__proto__=C.AV0;this.
AeR.H(BrK);this.UK.R(A.jV);this.Rf.H(BrL);this.Rf.R(A.aaR(A.acf.AVY)+BaT);this.Rf.
L(A.jb.Text);this.AcM.HQ(1);this.AcM.Fr(5000);this.AcM.B3=100;this.J(this.Rf,0);
this.Rf.S(A.aaL(A.fl.Af));this.Rf.A0(A.aaL(A.fl.Ak));this.Rf.Cr(A.aaL(A.fl.Bh));
this.AcM.SI=[this,this.BBQ];this.AcM.Q=[this,this.Bmf,this.Bom];},_Done:function(
){this.__proto__=C.X9;this.Rf._Done();this.AcM._Done();C.X9._Done.call(this);},_ReInit:
function(){C.X9._ReInit.call(this);this.Rf._ReInit();this.AcM._ReInit();this.Rf.
R(A.aaR(A.acf.AVY)+BaT);this.Rf.S(A.aaL(A.fl.Af));this.Rf.A0(A.aaL(A.fl.Ak));this.
Rf.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X9._Mark.call(this,D);if((B=this.
Rf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcM)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ASk={K_:null,Lp:null,BeP:false,Init:
function(aArg){this.Bb(this.Db);},Ew:function(G){var B;if(!!this.K_)this.K_.Ew(this
);C.WF.Ew.call(this,G);},Agk:function(G){var B;if(!!this.K_)this.K_.Agk(this);C.
WF.Agk.call(this,G);},CC:function(G){var B;if(!this.BeP){this.BeP=true;A.pe([this
,this.A4d],this);}else if(!this.K_){this.K_=A._NewObject(C.ASm,0);this.K_.A_q([this
,this.ABf]);this.LU(this);this.K_.LU(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.WF.CC.call(this,G);}else C.WF.CC.call(this,G
);},Ap$:function(G){var B;if(!!this.K_)this.K_.Ap$(this);},ABf:function(G){var B;
var F;this.LU(this);this.K_.LU(this);A.pe([this,this.AcW],this);var Beq=this.L1;
this.Ae0(A._GetAutoObject(A.Device.Helper).Abz(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVX(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Beq);if(Beq)A._GetAutoObject(
A.Device.Helper).W.P1(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SP(A._GetAutoObject(A.Device.Helper).AMA((F=this.Dj.H4.Hv,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JN(this.Db);},A4d:function(
G){A._GetAutoObject(C.A7).Cb(79);},_Init:function(aArg){C.WF._Init.call(this,aArg
);C.Re._Init.call(this.Lp={I:this},0);this.__proto__=C.ASk;var B;this.Lp.H(Ah2);
this.Lp.Aj(true);this.Lp.T(A.aaR(A.acf.ACL));this.J(this.Lp,-9);this.J5(this.Go,-
1);this.Lp.Gt([this,this.D_,this.GU]);this.Lp.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASZ,B.AnL]);this.Init(aArg);},_Done:function(){this.__proto__=C.WF;this.Lp.
_Done();C.WF._Done.call(this);},_ReInit:function(){C.WF._ReInit.call(this);this.
Lp._ReInit();this.Lp.T(A.aaR(A.acf.ACL));},_Mark:function(D){var B;C.WF._Mark.call(
this,D);if((B=this.K_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
AD_={AgT:null,AgU:null,NT:null,NS:null,ET:null,F0:null,Eq:null,Dz:null,CW:null,Cv:
null,FP:function(E){if(this.Ne===E)return;C.Ll.FP.call(this,E);this.Cv.CV(E);this.
CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);this.NS.CV(E);this.
NT.CV(E);this.AgU.CV(E);this.AgT.CV(E);},Yz:function(HB){var B6=null;switch(HB){
case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;case 2:B6=this.CW;break;case
3:B6=this.Dz;break;case 4:B6=this.Eq;break;case 5:B6=this.F0;break;case 6:B6=this.
ET;break;case 7:B6=this.NS;break;case 8:B6=this.NT;break;case 9:B6=this.AgU;break;
case 10:B6=this.AgT;break;case 11:B6=this.G3;break;default:A.ab5("%s",Ah6);}return B6;
},_Init:function(aArg){C.Ll._Init.call(this,aArg);C.DG._Init.call(this.AgT={I:this
},0);C.DG._Init.call(this.AgU={I:this},0);C.DG._Init.call(this.NT={I:this},0);C.
DG._Init.call(this.NS={I:this},0);C.DG._Init.call(this.ET={I:this},0);C.DG._Init.
call(this.F0={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(this.
Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.AD_;this.H(BrM);this.G3.H(AIV);this.AgT.H(AyT);this.AgU.H(
A0q);this.NT.H(A0r);this.NS.H(A0s);this.ET.H(A0t);this.F0.H(A0u);this.Eq.H(A0v);
this.Dz.H(BaU);this.CW.H(A0w);this.Cv.H(BrN);this.F_.H(BrO);this.J(this.AgT,-2);
this.J(this.AgU,-2);this.J(this.NT,-2);this.J(this.NS,-2);this.J(this.ET,-2);this.
J(this.F0,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.
Cv,-2);this.AgT.Dk=[this,this.GZ];this.AgU.Dk=[this,this.GZ];this.NT.Dk=[this,this.
GZ];this.NS.Dk=[this,this.GZ];this.ET.Dk=[this,this.GZ];this.F0.Dk=[this,this.GZ
];this.Eq.Dk=[this,this.GZ];this.Dz.Dk=[this,this.GZ];this.CW.Dk=[this,this.GZ];
this.Cv.Dk=[this,this.GZ];},_Done:function(){this.__proto__=C.Ll;this.AgT._Done(
);this.AgU._Done();this.NT._Done();this.NS._Done();this.ET._Done();this.F0._Done(
);this.Eq._Done();this.Dz._Done();this.CW._Done();this.Cv._Done();C.Ll._Done.call(
this);},_ReInit:function(){C.Ll._ReInit.call(this);this.AgT._ReInit();this.AgU._ReInit(
);this.NT._ReInit();this.NS._ReInit();this.ET._ReInit();this.F0._ReInit();this.Eq.
_ReInit();this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit();},_Mark:function(
D){var B;C.Ll._Mark.call(this,D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HN={Q:null,AM:0,Ai:function(Ae){C.G6.Ai.call(this
,Ae);this.Amt();},Adw:function(G){var B;var F;var IE=A.jV;var B6=this.G3;while(!
!B6){if(B6.Ez>0)IE=IE+B6.Ez.toFixed();else IE=IE+String.fromCharCode(0x30);B6=(C.
DG.isPrototypeOf(B=this.TX(B6,0x11))?B:null);}var BP=this.AM;this.Bx(A.wz(IE,-1,
10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LU:function(G){},Amt:function(){var B;var F;if(!!this.Q){var DV=this.F_;
var AdF=this.UC;var A8=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A8>0){DV.L7(A8%
10);A8=(A8/10)|0;}else if(AdF>0)DV.L7(0);else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=
this.AqV(DV,0x11))?B:null);AdF=AdF-1;}}},C5:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G6._Init.call(this,aArg);this.__proto__=C.HN;},_Mark:
function(D){var B;C.G6._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Ll={AM:0,Q:null
,Ai:function(Ae){C.G6.Ai.call(this,Ae);this.Amt();},Adw:function(G){var B;var F;
var IE=A.jV;var B6=this.G3;while(!!B6){if(B6.Ez>0)IE=IE+B6.Ez.toFixed();else IE=
IE+String.fromCharCode(0x30);B6=(C.DG.isPrototypeOf(B=this.TX(B6,0x11))?B:null);
}var BP=this.AM;this.Bx(A.ab0(IE,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LU:function(G){},Amt:function(){var B;
var F;if(!!this.Q){var DV=this.F_;var AdF=this.UC;var A8=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A8>0){DV.L7((A8%10)|0);A8=Math.trunc(A8/10);}else if(AdF>0)DV.
L7(0);else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=this.AqV(DV,0x11))?B:null);AdF=AdF-
1;}}},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Au:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G6._Init.call(
this,aArg);this.__proto__=C.Ll;},_Mark:function(D){var B;C.G6._Mark.call(this,D);
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
};C.AvX={Eq:null,Dz:null,CW:null,Cv:null,FP:function(E){if(this.Ne===E)return;C.
HN.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);},Yz:
function(HB){var B6=null;switch(HB){case-1:case 0:B6=this.F_;break;case 1:B6=this.
Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;
case 5:B6=this.G3;break;default:A.ab5("%s",Ah6);}return B6;},_Init:function(aArg
){C.HN._Init.call(this,aArg);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(
this.Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={
I:this},0);this.__proto__=C.AvX;this.H(Ayw);this.G3.H(AH4);this.Eq.H(AH5);this.Dz.
H(AH6);this.CW.H(AH7);this.Cv.H(AH8);this.F_.H(AH9);this.EM.H(BaV);this.J(this.Eq
,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);this.Eq.Dk=[this,this.
GZ];this.Dz.Dk=[this,this.GZ];this.CW.Dk=[this,this.GZ];this.Cv.Dk=[this,this.GZ
];},_Done:function(){this.__proto__=C.HN;this.Eq._Done();this.Dz._Done();this.CW.
_Done();this.Cv._Done();C.HN._Done.call(this);},_ReInit:function(){C.HN._ReInit.
call(this);this.Eq._ReInit();this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit(
);},_Mark:function(D){var B;C.HN._Mark.call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.AU6={AttributeSet:null,Init:function(aArg){this.AttributeSet.
BpA(0);this.AttributeSet.BpB(1);this.AttributeSet.BpC(4);},Ai:function(Ae){var B;
C.BX.Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var IG=((
Ae&0x40)===0x40);var GE=this.Bo.Bw;var FT=A.jb.CJ;var G0=A.jb.Text;if(this.Hm){FT=
A.jb.Bm;G0=A.jb.Text;}if(!Hf){this.Background.L(A.jb.CU);this.V.L(A.jb.CJ);this.
AttributeSet.Ahs(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.
Bm);this.AttributeSet.Ahs(A.jb.Bm);}else if(IG){this.Background.L(A.jb.AV);this.
V.L(A.jb.Bm);this.AttributeSet.Ahs(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.
Am9);this.V.L(A.jb.Bm);this.AttributeSet.Ahs(A.jb.Bm);}else{this.Background.L(FT
);this.V.L(G0);this.AttributeSet.Ahs(G0);}this.LN=Hf;this.KM=Fw;this.Qz=GE;this.
Apn=IG;},Hn:function(G){var B;var Gh=this.DB.G7;var CA=(A.acg.Au0.isPrototypeOf(
B=this.DB.Cj)?B:null);CA.A99(this.AttributeSet);CA.A6(0x12);if(!CA)return;if(!!this.
AC)CA.R(this.BzS(this.AC.Gm(Gh)));else CA.R(Xo);CA.H(A.abK(CA.M,[this.DB.Wl,(B=this.
DB.M)[3]-B[1]]));},BzS:function(Byf){var AA1=Byf;AA1=A._GetAutoObject(A.Device.Helper
).MN(AA1,BrP,BrQ);AA1=A._GetAutoObject(A.Device.Helper).MN(AA1,BrR,BrS);return BrT+
AA1;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AU6;this.DB.H(BrU);this.DB.JD(2);
this.DB.N8(A.acg.Au0);this.AttributeSet.Ahs(this.V.AQ);this.AttributeSet.Bnd(A.aaL(
A.fl.AOP));this.AttributeSet.A_B(A.aaL(A.fl.Ak));this.AttributeSet.Ahv(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BX;this.AttributeSet._Done(
);C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A_B(A.aaL(A.fl.Ak));this.AttributeSet.Ahv(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.AsI._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dr(C.ADA);},_className:"Application::NewAnimalsSetTransponderScreen"
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
if(this.Hm){this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}},Bx:function(E){C.BX.Bx.call(this,E);var BAN=this.
EnumToCodeset.AmL(this.Number);var BeZ=this.AC.C7(this.AM);if(BAN!==BeZ){this.AFS(
this.EnumToCodeset.Aen(BeZ));A.abo([this,this.AS0,this.AFS],0);}},DK:function(G){
var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.
aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[
this,this.He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(
A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=
this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:
this.FN.AkT((F=this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},He:function(
G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_)this.FN.AjD((F=this.N,F[1].call(
F[0])));this.A_=EO;if((this.A_<0)||(this.A_>1))this.A_=0;this.DK(this);if(!this.
A_)this.Bb(null);else this.A2F();this.Am();},AFS:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.Aq3()>E)E=this.EnumToCodeset.
Aq3();if(this.EnumToCodeset.H8()<E)E=this.EnumToCodeset.H8();}this.Number=E;var BP=
this.AM;if(!!this.EnumToCodeset){var BzI=this.EnumToCodeset.AmL(E);this.Bx(this.
AC.DZ(BzI));if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},AnE:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Vj:function(G){this.Ex(this.A_+1);},A2F:function(){A.ab5(
"%s",BrV);},AS0:function(){return this.Number;},_Init:function(aArg){C.BX._Init.
call(this,aArg);A.Core.BF._Init.call(this.JB={I:this},0);this.__proto__=C.O1;this.
JB.Filter=1;this.FN=A._NewObject(C.Aex,0);this.JB.BG=[this,this.Vj];},_Done:function(
){this.__proto__=C.BX;this.JB._Done();C.BX._Done.call(this);},_ReInit:function(){
C.BX._ReInit.call(this);this.JB._ReInit();},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JB)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeY={Text:null,Ai:function(
Ae){C.El.Ai.call(this,Ae);this.Text.L(this.ADa);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rm(this.AM));this.
Am();},AaQ:function(G){A.pe([this,this.Agf],this);},AaO:function(G){A.pe([this,this.
Agf],this);},Al6:function(G){A.pe([this,this.Agf],this);},Agf:function(G){if((!this.
Io||!this.A3)||!this.AF)return;},_Init:function(aArg){C.El._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeY;this.Text.A1(0x3F
);this.Text.H(Atf);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.El;this.Text._Done();C.El.
_Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ASd={GI:0,C9:null,AW:null,Fb:null,
Jc:null,CountryToString:null,Lf:0,Mh:false,Init:function(aArg){A.zX([this,this.MS
],[this,this.SJ,this.Lu],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.Jc.Z(this.
Aft);this.AW.FP(this.LX);this.Fb.CV(this.LX);this.Jc.CV(this.LX);},DK:function(G
){var F;if(!this.N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(
null);(F=this.N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Lf));(F=this.N,
F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Tw=this.
A_;this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>this.RO)this.A_=this.RO;if((
this.A_===1)&&!this.Aft)this.A_=2;switch(this.A_){case 0:{this.Bb(null);if(!this.
GI)this.Lu(0);}break;case 1:this.Bb(this.Jc);break;case 2:this.Bb(this.Fb);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Tw>0))this.AW.SV(2);else this.AW.SV(7);}break;
default:throw new Error(Att+this.A_.toFixed());}C.El.Ex.call(this,this.A_);},Apv:
function(G){this.Jc.Uw(this.EA);},AaQ:function(G){var F;this.AW.A_a((F=this.AF,F[
1].call(F[0])));},AaO:function(G){var F;this.AW.A_b((F=this.A3,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mh=true;this.SM(A._GetAutoObject(
A.Device.Helper).V5(E,0,12));this.Lu(A._GetAutoObject(A.Device.Converter).S8(E));
this.Mh=false;if(!!E)this.AW.Kz(12);else this.AW.Kz(0);this.Am();},Al6:function(
G){A.pe([this,this.Agf],this);},FW:function(G){var F;if(!this.AM){var BP=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ADp());if(this.AM!==BP){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjP:function(){return this.
GI;},AjR:function(){return 999999999999;},Lu:function(E){if(this.Lf===E)return;this.
Lf=E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.SJ,this.Lu],0
);},SM:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false)A.pe([this
,this.Vw],this);A.abo([this,this.Ab6,this.SM],0);},Vw:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).AqI(this.Lf),3,10)+A.abm(this.GI,12,10
);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agf:function(G){var F;if((!this.Io||
!this.A3)||!this.AF)return;if(!(F=this.Io,F[1].call(F[0])))this.AW.AFh(true);else
this.AW.AFh(false);},SJ:function(){return this.Lf;},Ab6:function(){return this.GI;
},_Init:function(aArg){C.El._Init.call(this,aArg);C.C9._Init.call(this.C9={I:this
},0);C.AD_._Init.call(this.AW={I:this},0);C.AsS._Init.call(this.Fb={I:this},0);C.
Jc._Init.call(this.Jc={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ASd;var B;this.RO=3;this.AW.H(BrW);this.Fb.H(BaW);this.
Jc.H(BaX);this.J(this.AW,0);this.J(this.Fb,0);this.J(this.Jc,0);this.C9.AFn([this
,this.SJ,this.Lu]);this.AW.Au([this,this.Ab6,this.SM]);this.Fb.CK(this.C9);this.
Fb.Au([B=this.C9,B.B$,B.Cc]);this.Jc.A_u([B=A._GetAutoObject(A.Device.Device),B.
Awl,B.Ay0]);this.Init(aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done(
);this.AW._Done();this.Fb._Done();this.Jc._Done();this.CountryToString._Done();C.
El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.Fb._ReInit();this.Jc._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ASc={GI:0,C9:null,AW:null,YN:null,Kw:null,Fb:null,Jc:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,PE:0,Lf:0,Mh:false,Init:function(aArg){A.
zX([this,this.MS],[this,this.PY,this.EC],0);A.zX([this,this.MS],[this,this.SJ,this.
Lu],0);A.zX([this,this.MS],[this,this.Anx,this.Ahw],0);},Ai:function(Ae){C.El.Ai.
call(this,Ae);this.Jc.Z(this.Aft);this.AW.FP(this.LX);this.YN.FP(this.LX);this.Kw.
FP(this.LX);this.Fb.CV(this.LX);this.Jc.CV(this.LX);},DK:function(G){var F;if(!this.
N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C3(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this
,this.He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV
);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.
N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Lf));(F=this.N,F[1].call(F[0]
)).Ca=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG7)+A.aaR(A.acf.Colon))+AcV)+A.aaR(A.
acf.Bh_));break;case 1:(F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG7)+A.aaR(A.
acf.Colon))+AcV)+A.aaR(A.acf.BpF));break;case 2:(F=this.N,F[1].call(F[0])).CS(((
A.aaR(A.acf.AG7)+A.aaR(A.acf.Colon))+AcV)+A.aaR(A.acf.Bja));break;default:(F=this.
N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG7)+A.aaR(A.acf.Colon))+AcV)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Ca=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0]
)).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0
])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null
);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EN)+Ayl)+this.GermanStateToString.LA(
A._GetAutoObject(A.Device.Converter).ADd(this.PE)));(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[
1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[
1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(
A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Tw=this.A_;if(EO<
0)EO=0;else if(EO>this.RO)EO=this.RO;if((EO===1)&&!this.Aft)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.PE)this.Lu(0);}break;case
1:this.Bb(this.Jc);break;case 2:this.Bb(this.Fb);break;case 3:if(!Tw)A.pe([this,
this.BB4],this);else this.Bb(this.YN);break;case 4:this.Bb(this.Kw);break;case 5:
if(((Tw===4)&&!this.PE)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Tw>
0))this.AW.SV(2);else this.AW.SV(7);}break;default:throw new Error(Att+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,this.A_);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.Mh=true;this.SM(A._GetAutoObject(A.Device.Helper).V5(E,0,8));this.
Ahw(A._GetAutoObject(A.Device.Converter).Bal(E));this.EC(A._GetAutoObject(A.Device.
Converter).Bak(E));this.Lu(A._GetAutoObject(A.Device.Converter).S8(E));this.Mh=false;
if(!!this.AM){this.YN.Kz(2);this.Kw.Kz(2);this.AW.Kz(8);}else{this.YN.Kz(0);this.
Kw.Kz(0);this.AW.Kz(0);}this.Am();},Apv:function(G){this.Jc.Uw(this.EA);},AaQ:function(
G){var F;this.AW.A_a((F=this.AF,F[1].call(F[0])));},AaO:function(G){var F;this.AW.
A_b((F=this.A3,F[1].call(F[0])));},Al6:function(G){A.pe([this,this.Agf],this);},
FW:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADp());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RO);},AjP:function(){return this.GI;
},AjR:function(){return 99999999;},Lu:function(E){if(this.Lf===E)return;this.Lf=
E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.SJ,this.Lu],0);}
,SM:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false)A.pe([this,this.
Vw],this);A.abo([this,this.Ab6,this.SM],0);},Vw:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).AqI(this.Lf),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.PE,2,10))+A.abm(this.GI,8,10);var BP=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Agf:function(G){var F;if((!this.Io||!this.A3)||!this.AF)return;if(!(F=this.
Io,F[1].call(F[0])))this.AW.AFh(true);else this.AW.AFh(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Mh===false)A.pe([this,this.
Vw],this);A.abo([this,this.PY,this.EC],0);},Ahw:function(E){if(this.PE===E)return;
this.PE=E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.Anx,this.
Ahw],0);},BB4:function(G){var F;if(!!this.JR){var Ih=(F=this.JR,F[1].call(F[0]));
var A1R=0;switch(Ih){case 0:case 1:A1R=0;break;case 2:A1R=1;break;default:A.ab5(
"%s%e",Ali,Ih);}this.EC(A1R);}if(!this.PE)this.Ex(4);else this.Ex(5);},SJ:function(
){return this.Lf;},Ab6:function(){return this.GI;},PY:function(){return this.AnimalType;
},Anx:function(){return this.PE;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.ARr._Init.call(this.AW={I:this},0);C.AvW.
_Init.call(this.YN={I:this},0);C.AvW._Init.call(this.Kw={I:this},0);C.AsS._Init.
call(this.Fb={I:this},0);C.Jc._Init.call(this.Jc={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ASc;var B;this.RO=5;this.AW.H(
BrX);this.YN.H(BrY);this.YN.EV(2);this.Kw.H(BrZ);this.Kw.EV(16);this.Fb.H(BaW);this.
Jc.H(BaX);this.J(this.AW,0);this.J(this.YN,0);this.J(this.Kw,0);this.J(this.Fb,0
);this.J(this.Jc,0);this.C9.AFn([this,this.SJ,this.Lu]);this.AW.Au([this,this.Ab6
,this.SM]);this.YN.Au([this,this.PY,this.EC]);this.Kw.Au([this,this.Anx,this.Ahw
]);this.Fb.CK(this.C9);this.Fb.Au([B=this.C9,B.B$,B.Cc]);this.Jc.A_u([B=A._GetAutoObject(
A.Device.Device),B.Awl,B.Ay0]);this.Init(aArg);},_Done:function(){this.__proto__=
C.El;this.C9._Done();this.AW._Done();this.YN._Done();this.Kw._Done();this.Fb._Done(
);this.Jc._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.YN._ReInit();this.Kw._ReInit();this.Fb._ReInit();this.Jc.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.El={AM:0,Aww:null,OO:null,
Q:null,EA:null,A3:null,AF:null,Io:null,N:null,JR:null,Fm:null,Fc:null,ADa:0,LX:0
,A_:0,RO:0,Aft:true,Init:function(aArg){A.pe([this,this.LU],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A_)this.Bb(null);},Bnf:function(E){if(this.
ADa===E)return;this.ADa=E;this.Am();},WN:function(E){if(this.LX===E)return;this.
LX=E;this.Am();},DK:function(G){A.ab5("%s",Alj);},MS:function(s){this.DK(s);},Ex:
function(EO){A.pe([this,this.MS],this);A.pe(this.Aww,this);if(!EO)A.pe(this.OO,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);}
,C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",AoD);},Ov:function(G){if(this.A_>1)this.Ex(this.A_-1);},M5:function(
G){if((this.A_>0)&&(this.A_<this.RO))this.Ex(this.A_+1);},Uw:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A05],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A05],this.EA,0);A.pe([this,this.A05],this);},Apv:function(G){},A05:
function(s){this.Apv(s);},OU:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3
)A.z$([this,this.A09],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.A09],E,0);if(!
!E)A.pe([this,this.A09],this);},PZ:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A0$],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A0$],E,0);if(
!!E)A.pe([this,this.A0$],this);},AaQ:function(G){},A0$:function(s){this.AaQ(s);}
,AaO:function(G){},A09:function(s){this.AaO(s);},Uu:function(E){if(A.aaZ(this.Io
,E))return;if(!!this.Io)A.z$([this,this.A08],this.Io,0);this.Io=E;if(!!E)A.zX([this
,this.A08],E,0);if(!!E)A.pe([this,this.A08],this);},Al6:function(G){},A08:function(
s){this.Al6(s);},FW:function(G){A.ab5("%s",BaY);},BHd:function(s){this.FW(s);},He:
function(G){this.Ex(0);},AjP:function(){A.ab5("%s",AoD);return 0;},AjR:function(
){A.ab5("%s",AoD);return 0;},LU:function(G){},AnB:function(E){if(A.aaZ(this.JR,E
))return;if(!!this.JR)A.z$([this,this.Ao6],this.JR,0);this.JR=E;if(!!E)A.zX([this
,this.Ao6],this.JR,0);A.pe([this,this.Ao6],this);},Ao6:function(G){},AFz:function(
E){if(A.aa0(this.OO,E))return;this.OO=E;},AF4:function(E){if(this.Aft===E)return;
this.Aft=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BF._Init.call(this.Fm={I:this},0);A.Core.BF._Init.call(this.Fc={I:this},0);this.
__proto__=C.El;this.H(Atf);this.ADa=A.jb.Text;this.LX=A.jb.CU;this.Fm.Filter=6;this.
Fc.Filter=7;this.Fm.BG=[this,this.Ov];this.Fc.BG=[this,this.M5];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.P;this.Fm._Done();this.Fc._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Fm._ReInit(
);this.Fc._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Aww)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.OO)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Io)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Re={AM:0,Dq:null,FN:
null,OO:null,EA:null,A3:null,AF:null,Io:null,Q:null,JR:null,AEF:-1,Aft:true,AOj:
false,AUp:false,Asu:true,Init:function(aArg){A.pe([this,this.ABL],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dq)return;if(this.Dq.A_>0){if(this.Hm){this.Dq.
WN(A.jb.CJ);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Dq.WN(A.jb.
CU);this.Background.L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hm)this.Dq.WN(
A.jb.CJ);else this.Dq.WN(A.jb.CU);this.Dq.Bnf(this.V.AQ);}},H1:function(G){C.Eg.
H1.call(this,G);if(!this.Dq)return;if(!this.Dq.A_)this.FW(this);else this.He(this
);},Gt:function(E){C.Eg.Gt.call(this,E);if(!!this.Dq)this.Dq.N=E;},Uw:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.Apv],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.Apv],this.EA,0);A.pe([this,this.Apv],this);},Apv:function(
G){if(!!this.Dq)this.Dq.Uw(this.EA);},OU:function(E){if(A.aaZ(this.A3,E))return;
this.A3=E;if(!!this.Dq)this.Dq.OU(E);},PZ:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PZ(E);},Uu:function(E){if(A.aaZ(this.Io,E))return;
this.Io=E;if(!!this.Dq)this.Dq.Uu(E);},BCx:function(G){var AAH=0;if(!!this.Dq){AAH=
this.Dq.A_;this.Dq.N=null;this.HR(this.Dq);}switch(this.AEF){case 0:this.Dq=A._NewObject(
C.AeY,0);break;case 1:this.Dq=A._NewObject(C.ASd,0);break;case 2:this.Dq=A._NewObject(
C.ASc,0);break;case 3:this.Dq=A._NewObject(C.AUr,0);break;case 4:this.Dq=A._NewObject(
C.AUq,0);break;case 5:this.Dq=A._NewObject(C.ASe,0);break;default:throw new Error(
Br0+this.AEF.toFixed());}this.J(this.Dq,0);this.Dq.AnB(this.JR);this.Dq.H(Br1);this.
Dq.N=this.N;this.Dq.Uw(this.EA);this.Dq.Aww=[this,this.Aww];this.Dq.Au([this,this.
Uq,this.Bx]);this.Dq.Uu(this.Io);this.Dq.OU(this.A3);this.Dq.PZ(this.AF);this.Dq.
AFz(this.OO);this.Dq.AF4(this.Aft);if(AAH>0)this.Dq.Ex(AAH);this.Bb(this.Dq);this.
Am();},FW:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FN.AjD((F=this.
N,F[1].call(F[0])));else this.FN=A._NewObject(C.Aex,0);this.Dq.FW(this);}},He:function(
G){var B;if(!!this.Dq)this.Dq.He(this);},AjP:function(){if(!this.Dq)return 0;return this.
Dq.AjP();},AjR:function(){if(!this.Dq)return 0;return this.Dq.AjR();},C5:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Uq,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABL],this);},BnU:function(
E){if(this.AEF===E)return;this.AEF=E;A.pe([this,this.BCx],this);},Ar$:function(E
){if(this.Asu===E)return;this.Asu=E;A.pe([this,this.ABL],this);},ABL:function(G){
var ApG;if(this.Asu){if(this.AOj)ApG=5;else ApG=0;}else if(this.AUp){if(A._GetAutoObject(
A.Device.Converter).S8(this.AM)===10)ApG=4;else ApG=3;}else if(A._GetAutoObject(
A.Device.Converter).S8(this.AM)===10)ApG=2;else ApG=1;this.BnU(ApG);},Aww:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A_)this.FN.AkT((F=this.N,F[1].call(F[
0])));this.Am();},AnB:function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([
this,this.Ao6],this.JR,0);this.JR=E;if(!!E)A.zX([this,this.Ao6],this.JR,0);A.pe([
this,this.Ao6],this);},Ao6:function(G){if(!!this.Dq)this.Dq.AnB(this.JR);},A_X:function(
E){if(this.AUp===E)return;this.AUp=E;A.pe([this,this.ABL],this);},BmN:function(E
){if(this.AOj===E)return;this.AOj=E;A.pe([this,this.ABL],this);},AFz:function(E){
if(A.aa0(this.OO,E))return;this.OO=E;if(!!this.Dq)this.Dq.AFz(E);},AF4:function(
E){if(this.Aft===E)return;this.Aft=E;if(!!this.Dq)this.Dq.AF4(E);},Uq:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Re;this.H(U4);this.V.R(Atk);this.V.L(A.jb.Bm);this.FN=A._NewObject(C.Aex,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Io
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARr={ET:null,F0:null,Eq:null,Dz:null,CW:null
,Cv:null,FP:function(E){if(this.Ne===E)return;C.Ll.FP.call(this,E);this.Cv.CV(E);
this.CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);},Yz:function(
HB){var B6=null;switch(HB){case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;
case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;case 5:B6=
this.F0;break;case 6:B6=this.ET;break;case 7:B6=this.G3;break;default:A.ab5("%s"
,Ah6);}return B6;},_Init:function(aArg){C.Ll._Init.call(this,aArg);C.DG._Init.call(
this.ET={I:this},0);C.DG._Init.call(this.F0={I:this},0);C.DG._Init.call(this.Eq={
I:this},0);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(this.CW={I:this},
0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARr;this.H(Br2);this.G3.
H(AIV);this.ET.H(AyT);this.F0.H(A0q);this.Eq.H(A0r);this.Dz.H(A0s);this.CW.H(A0t
);this.Cv.H(A0u);this.F_.H(A0v);this.EM.H(BaV);this.J(this.ET,-2);this.J(this.F0
,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);
this.ET.Dk=[this,this.GZ];this.F0.Dk=[this,this.GZ];this.Eq.Dk=[this,this.GZ];this.
Dz.Dk=[this,this.GZ];this.CW.Dk=[this,this.GZ];this.Cv.Dk=[this,this.GZ];},_Done:
function(){this.__proto__=C.Ll;this.ET._Done();this.F0._Done();this.Eq._Done();this.
Dz._Done();this.CW._Done();this.Cv._Done();C.Ll._Done.call(this);},_ReInit:function(
){C.Ll._ReInit.call(this);this.ET._ReInit();this.F0._ReInit();this.Eq._ReInit();
this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit();},_Mark:function(D){var B;
C.Ll._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvW={Q:null,G3:null,F_:null,EM:null,It:null,Is:null,Ne:0,UC:0,AM:0,Ga:99,Init:
function(aArg){A.pe([this,this.LU],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.Yz(0).M,this.Yz(-1).M));var IG=((Ae&
0x40)===0x40);if(IG){this.BgM(A.jb.AV);this.BgN(A.jb.Bm);}else{this.BgM(this.Ne);
this.BgN(A.jb.Text);}this.Amt();},FP:function(E){if(this.Ne===E)return;this.Ne=E;
this.Am();},LU:function(G){},Yz:function(HB){var B6=null;switch(HB){case-1:case 0:
B6=this.F_;break;case 1:B6=this.G3;break;default:A.ab5("%s",Ah6);}return B6;},Kz:
function(E){if(this.UC===E)return;this.UC=E;this.Amt();},Amt:function(){var B;var
F;if(!!this.Q){var DV=this.F_;var AdF=this.UC;var A8=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A8>0){DV.L7(A8%10);A8=(A8/10)|0;}else if(AdF>0)DV.L7(0);else DV.L7(-
1);DV=(C.Ez.isPrototypeOf(B=this.AqV(DV,0x11))?B:null);AdF=AdF-1;}}},Agi:function(
G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Agh:function(G){var F;var BP=this.
AM;this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AM));A.abo(this.Q,0);}},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5
],this);},Bx:function(E){if(E<0)E=0;if(E>this.Ga)E=this.Ga;if(this.AM===E)return;
this.AM=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=E;this.Am();}
,BgM:function(aColor){this.F_.CV(aColor);this.G3.CV(aColor);},BgN:function(aColor
){this.F_.Zz(aColor);this.G3.Zz(aColor);},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.Ez._Init.call(this.G3={I:this},0);C.Ez._Init.call(this.F_={I:this},
0);A.acg.BW._Init.call(this.EM={I:this},0);A.Core.BF._Init.call(this.It={I:this}
,0);A.Core.BF._Init.call(this.Is={I:this},0);this.__proto__=C.AvW;this.H(Br3);this.
Ne=A.jb.CJ;this.G3.H(AIV);this.F_.H(AyT);this.EM.H(AyT);this.EM.Nu(2);this.EM.L(
A.jb.E1);this.It.Filter=4;this.Is.Filter=5;this.J(this.G3,0);this.J(this.F_,0);this.
J(this.EM,0);this.It.BG=[this,this.Agi];this.It.D1=[this,this.Agi];this.Is.BG=[this
,this.Agh];this.Is.D1=[this,this.Agh];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.G3._Done();this.F_._Done();this.EM._Done();this.It._Done();this.Is.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.G3._ReInit();this.F_._ReInit();this.EM._ReInit();this.It._ReInit();this.Is.
_ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.G3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Is)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.Ez={AgM:
null,Background:null,Text:null,Ez:-1,M$:0,AmV:0,AqA:false,Ai:function(Ae){A.Core.
P.Ai.call(this,Ae);if(this.Ez<0)this.Text.R(Rt);else this.Text.R(this.Ez.toFixed(
));this.Background.L(this.M$);this.Text.L(this.AmV);},L7:function(E){if(this.Ez===
E)return;var B6=E;if((B6<0)||(B6>9))B6=-1;this.Ez=B6;this.Am();},CV:function(E){
if(this.M$===E)return;this.M$=E;this.Am();},Ae1:function(E){if(this.AqA===E)return;
this.AqA=E;this.AgM.As(E);if(E===false)this.Text.Z(true);},Zz:function(E){if(this.
AmV===E)return;this.AmV=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TQ._Init.call(this.AgM={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(Alo);this.M$=A.jb.CJ;this.AgM.Fr(750);this.AgM.Ux(750);this.AgM.AkC(750);
this.AmV=A.jb.Text;this.Background.A1(0x3);this.Background.H(Alo);this.Text.A1(0x3
);this.Text.H(Alo);this.Text.R(Rt);this.J(this.Background,0);this.J(this.Text,0);
this.AgM.Q=[B=this.Text,B.Fq,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgM._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgM._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FC={Y:null,I$:null,AOr:A.jV,ASs:A.jV,Tp:0,AJ1:0,A2v:false,A13:false,Init:function(
aArg){},CC:function(G){var B;C.AB.CC.call(this,G);A.zX([this,this.ABG],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);A.zX([this,this.MS],[B=A._GetAutoObject(A.Device.
Device).An,B.Fp,B.Ft],0);A.pe([this,this.ABG],this);A.pe([this,this.MS],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABG],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);},ByC:function(Md){A._GetAutoObject(A.Device.Helper
).GT(Md);this.Aqa(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Aqa:function(L_,Ac0){A.ab5("%s",Alj);},Vr:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))A.aaS([
this,this.BzA],this);else if(!!Ar&&(Ar.PopupState===5)){this.A13=true;this.Ew(this
);}},BzA:function(G){if(this.Tp>0){this.A13=false;this.Adr(this);this.A$l(0);}},
AiA:function(G){if((this.AJ1+1)<this.Tp)this.A$l(this.AJ1+1);else A.aaS([this,this.
Bxb],this);},Bxc:function(s){this.AiA(s);},A$l:function(E){this.AJ1=E;if(this.A13===
false){this.ByC(E);A.aaS([this,this.Bxc],this);var XR=(this.AJ1/this.Tp)*100;A._GetAutoObject(
A.Device.Device).AY(49,true,A.abk(XR,0,0),0,[this,this.Vr]);}},Aaz:function(G){A.
_GetAutoObject(A.Device.Device).AY(49,false,Br4,0,[this,this.Vr]);this.A2v=true;
A.pe([this,this.ALC],this);},Bxb:function(s){this.Aaz(s);},Adr:function(G){this.
I$.Z(true);this.A2v=false;this.ALC(this);},BG9:function(s){this.Adr(s);},AAX:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).A7d();A._GetAutoObject(A.Device.Device
).An.Bk(Bf);},Ew:function(G){A._GetAutoObject(C.A7).FB();},A38:function(G){A._GetAutoObject(
C.A7).Cb(84);},DK:function(G){this.N.Z(true);this.N.C3(A.aaL(A.ach.E2));this.N.CE=[
this,this.Ew];this.N.Ct(A.aaL(A.ach.ADZ));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Aro(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Ce=null;this.N.IS.CZ(100);}else{this.N.Ce=[this,this.AAX];this.
N.IS.CZ(255);}this.N.C4(A.aaL(A.ach.AeF));this.N.Ca=[this,this.A38];},MS:function(
s){this.DK(s);},ABG:function(G){this.Tp=A._GetAutoObject(A.Device.Device).An.B_(
);if(this.Tp>0)A._GetAutoObject(A.Device.Device).AY(49,true,U8,0,[this,this.Vr]);
else{this.Adr(this);this.Aaz(this);}},AkA:function(E){if(this.AOr===E)return;this.
AOr=E;A.pe([this,this.ALC],this);},ALC:function(G){var B;if(this.A2v===false){this.
I$.R(A.jV);return;}var Aph;if(!A._GetAutoObject(A.Device.Device).An.B_()){var Adl=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABG],[B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft],0);this.AAX(this);if(!A._GetAutoObject(A.Device.Device
).An.QN()||!Adl)Aph=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ADk(A._GetAutoObject(A.Device.Device).An.Filter)===1)Aph=A.aaR(
A.acf.AOl);else Aph=A.aaR(A.acf.AOk);A._GetAutoObject(A.Device.Device).An.Bk(Adl
);A.zX([this,this.ABG],[B=A._GetAutoObject(A.Device.Device).An,B.Fp,B.Ft],0);}else
Aph=this.ASs;Aph=Aph+(A0x+this.AOr);this.I$.R(Aph);},Afa:function(E){if(this.ASs===
E)return;this.ASs=E;A.pe([this,this.ALC],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkU._Init.call(this.I$={
I:this},0);this.__proto__=C.FC;this.Dr(C.AbD);this.Y.H(Ff);this.Y.JZ(1);this.I$.
H(Ff);this.J(this.Y,0);this.J(this.I$,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I$._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7O={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A7O;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvY={K6:null,M3:null,AZ:0,Yp:function(){this.K6=null;this.M3=null;this.AZ=0;
},OA:function(A8){var Hi;Hi=A._NewObject(C.A7O,0);Hi.A5=A8;if(!this.K6){this.K6=
Hi;this.M3=Hi;this.AZ=1;}else{this.M3.Ah=Hi;this.M3=Hi;this.AZ=this.AZ+1;}},Am3:
function(){var B;var RR=0;var Op=this.K6;while(!!Op){RR+=Op.A5;Op=Op.Ah;}return RR;
},AjQ:function(){if(!this.AZ)return 0;return this.Am3()/this.AZ;},Aq5:function(){
var B;if(!this.AZ)return 0;var A1X=this.AjQ();var Adi=0;var Op=this.K6;while(!!Op
){Adi+=Math.pow(Op.A5-A1X,2);Op=Op.Ah;}Adi/=this.AZ;Adi=Math.sqrt(Adi);return Adi;
},_Init:function(aArg){this.__proto__=C.AvY;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOs={Gd:null,AeB:null,Yw:null,C8:null,I$:null,
CQ:function(){this.A48(this);},Init:function(aArg){A.zV([this,this.A48],A._GetAutoObject(
A.Device.Device).Pw,0);A.pe([this,this.A48],this);},Ew:function(G){A._GetAutoObject(
C.A7).FB();},A48:function(G){this.Yw.Ch(-1);this.I$.Z(!this.Gd.AX.B_());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gd._Init.call(this.Gd={I:this},0);C.
AeB._Init.call(this.AeB={I:this},0);C.Yw._Init.call(this.Yw={I:this},0);A.acg.C8.
_Init.call(this.C8={I:this},0);C.AkU._Init.call(this.I$={I:this},0);this.__proto__=
C.AOs;this.N.Z(true);this.Dr(C.APn);this.Gd.H(Atm);this.Gd.N8(C.AmU);this.AeB.H(
I1);this.Yw.H(Atg);this.C8.DD(Br5);this.C8.DN(Br6);this.C8.Nu(3);this.C8.L(A.jb.
Text);this.I$.H(Alf);this.I$.R((A.aaR(A.acf.A8y)+A0x)+A.aaR(A.acf.A6R));this.J(this.
Gd,0);this.J(this.AeB,0);this.J(this.Yw,0);this.J(this.C8,0);this.J(this.I$,0);this.
N.CE=[this,this.Ew];this.N.C3(A.aaL(A.ach.E2));this.Gd.Zy(A._GetAutoObject(A.Device.
Device).Pw);this.Yw.Zy(A._GetAutoObject(A.Device.Device).Pw);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gd._Done();this.AeB._Done();this.Yw._Done();
this.C8._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gd._ReInit();this.AeB._ReInit();this.Yw._ReInit();this.C8.
_ReInit();this.I$._ReInit();this.I$.R((A.aaR(A.acf.A8y)+A0x)+A.aaR(A.acf.A6R));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gd)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AeB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOv={Aul:null,Auk:null,Aun:null,Aum:null,Aup:null,Auo:null,Aur:null,Auq:null
,AaS:null,YE:null,Abu:null,Abt:null,RatedAttribute:0,Init:function(aArg){this.SO(
2);},DF:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D5.CP){case
6:switch(this.RatedAttribute){case 2:this.SO(3);break;case 1:this.SO(2);break;case
4:this.SO(1);break;case 3:this.SO(4);break;default:this.SO(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SO(1);break;case 1:this.SO(4);break;case 4:this.
SO(3);break;case 3:this.SO(2);break;default:this.SO(0);}break;default:D5.Mw=true;
}},Aqa:function(L_,Ac0){if(!L_)return;var Fy=A._NewObject(A.Device.Filter,0);var
HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,Ac0,true);Fy.
CX(HZ);var ABe=A._NewObject(A.Device.AssessmentFilterCriterion,0);ABe.Initialize(
3,5,0,true);Fy.CX(ABe);L_.Bk(Fy);},AiA:function(G){var Ap_=0;var A4q=A._GetAutoObject(
A.Device.Device).Bt.B_();var B2=A._NewObject(A.Device.Rating,0);while(Ap_<A4q){B2.
E3(Ap_,A._GetAutoObject(A.Device.Device).Bt);this.Bd6(B2,0);var BCT=A._GetAutoObject(
A.Device.Helper).ZY(2);this.Bd6(B2,BCT);Ap_++;}C.FC.AiA.call(this,G);},Aaz:function(
G){A.pe([this,this.BdJ],this);C.FC.Aaz.call(this,G);},Adr:function(G){this.Aul=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Auk=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aum=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aun=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auo=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aup=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auq=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aur=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FC.Adr.
call(this,G);},DK:function(G){C.FC.DK.call(this,G);this.N.OW(true);this.N.OX(true
);},Bd6:function(D3,BcE){if(!D3||(D3.Timestamp<BcE))return;if(!BcE){this.Aul.Set(
D3.Appearance,this.Aul.Get(D3.Appearance)+1);this.Aun.Set(D3.Faeces,this.Aun.Get(
D3.Faeces)+1);this.Aup.Set(D3.Feed,this.Aup.Get(D3.Feed)+1);this.Aur.Set(D3.Respiratory
,this.Aur.Get(D3.Respiratory)+1);}else{this.Auk.Set(D3.Appearance,this.Auk.Get(D3.
Appearance)+1);this.Aum.Set(D3.Faeces,this.Aum.Get(D3.Faeces)+1);this.Auo.Set(D3.
Feed,this.Auo.Get(D3.Feed)+1);this.Auq.Set(D3.Respiratory,this.Auq.Get(D3.Respiratory
)+1);}},SO:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
YE.KB(this.AaS.LA(E));A.pe([this,this.BdJ],this);},BdJ:function(G){var AaT=null;
var AaU=null;switch(this.RatedAttribute){case 2:{AaT=this.Auk;AaU=this.Aul;}break;
case 4:{AaT=this.Aum;AaU=this.Aun;}break;case 1:{AaT=this.Auo;AaU=this.Aup;}break;
case 0:{AaT=A._NewObject(A.Device.Int32ArrayWrapper,0);AaU=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaT=this.Auq;AaU=this.Aur;}break;default:throw new
Error(Br7+this.RatedAttribute.toFixed());}var AGG=A._NewObject(A.acv.AUJ,0);AGG.
OA(AaT.Get(3),A.jb.E1);AGG.OA(AaT.Get(2),A.jb.Ib);AGG.OA(AaT.Get(1),A.jb.Gk);var
AGH=A._NewObject(A.acv.AUJ,0);AGH.OA(AaU.Get(3),A.jb.E1);AGH.OA(AaU.Get(2),A.jb.
Ib);AGH.OA(AaU.Get(1),A.jb.Gk);this.Abt.Acd(AGG);this.Abu.Acd(AGH);var A4U=AaT.Am3(
)-AaT.Get(5);var Bgi=0;var Bgg=0;if(A4U>0){Bgi=(AaT.Get(2)/A4U)*100;Bgg=(AaT.Get(
1)/A4U)*100;}var ALp=AaU.Am3()-AaU.Get(5);this.I$.Z(!ALp);var Bgj=0;var Bgh=0;if(
ALp>0){Bgj=(AaU.Get(2)/ALp)*100;Bgh=(AaU.Get(1)/ALp)*100;}this.Abt.A$j(A.abk(Bgi
,0,0)+AfK);this.Abt.A_Z(A.abk(Bgg,0,0)+AfK);this.Abu.A$j(A.abk(Bgj,0,0)+AfK);this.
Abu.A_Z(A.abk(Bgh,0,0)+AfK);},_Init:function(aArg){C.FC._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaS={I:this},0);C.NP._Init.call(this.
YE={I:this},0);C.AC2._Init.call(this.Abu={I:this},0);C.AC2._Init.call(this.Abt={
I:this},0);this.__proto__=C.AOv;this.Dr(C.APo);this.AkA(A.aaR(A.acf.A6S));this.Afa(
A.aaR(A.acf.Ant));this.YE.H(I1);this.YE.Aj(true);this.YE.T(A.aaR(A.acf.AxA)+A.aaR(
A.acf.Colon));this.YE.Bi(false);this.YE.BnS(false);this.Abu.H(Br8);this.Abu.T(A.
aaR(A.acf.AGr));this.Abt.H(Br9);this.Abt.T(A.aaR(A.acf.A7X));this.I$.H(Alf);this.
J(this.YE,-1);this.J(this.Abu,-1);this.J(this.Abt,-1);this.Aul=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auk=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aun=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aum=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aup=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Auo=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aur=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auq=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FC;this.AaS._Done();this.YE._Done();this.Abu._Done();this.Abt.
_Done();C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.
AaS._ReInit();this.YE._ReInit();this.Abu._ReInit();this.Abt._ReInit();this.AkA(A.
aaR(A.acf.A6S));this.Afa(A.aaR(A.acf.Ant));this.YE.T(A.aaR(A.acf.AxA)+A.aaR(A.acf.
Colon));this.Abu.T(A.aaR(A.acf.AGr));this.Abt.T(A.aaR(A.acf.A7X));},_Mark:function(
D){var B;C.FC._Mark.call(this,D);if((B=this.Aul)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aun)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aum)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aup)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Auo)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aur)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Auq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOw={AeA:null,UV:null,UW:null,Aez:null,US:null,UT:null,AJ3:0,AJ2:0,AJH:0,AJG:
0,Adk:false,CQ:function(){this.Aaz(this);},Aqa:function(L_,Ac0){if(!L_)return;var
Fy=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,Ac0,true);Fy.CX(HZ);var ABx=A._NewObject(A.Device.Int32FilterCriterion
,0);ABx.Initialize(7,2,0,true);Fy.CX(ABx);L_.Bk(Fy);},AiA:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJ3++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJ2++;var Ap_=0;var A4q=A._GetAutoObject(
A.Device.Device).Bt.B_();var Auj;var ABS=0;while(Ap_<A4q){this.Adk=true;Auj=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ap_,9);if(Auj===1)ABS=1;else if((Auj===2)&&(ABS!==1))ABS=
2;Ap_++;}if(ABS===1)this.AJG++;else if(ABS===2)this.AJH++;C.FC.AiA.call(this,G);
},Aaz:function(G){var Bge=0;var Bgf=0;if(this.Tp>0){Bge=(this.AJ3/this.Tp)*100;Bgf=(
this.AJ2/this.Tp)*100;}this.UV.KB(((((((A.abk(Bge,0,0)+AIW)+this.AJ3.toFixed())+
CR)+A.aaR(A.acf.AEM))+CR)+this.Tp.toFixed())+Pd);this.UW.KB(((((((A.abk(Bgf,0,0)+
AIW)+this.AJ2.toFixed())+CR)+A.aaR(A.acf.AEM))+CR)+this.Tp.toFixed())+Pd);var Bgc=
0;var Bgd=0;if(this.Tp>0){Bgc=(this.AJH/this.Tp)*100;Bgd=(this.AJG/this.Tp)*100;
}this.US.KB(((((((A.abk(Bgc,0,0)+AIW)+this.AJH.toFixed())+CR)+A.aaR(A.acf.AEM))+
CR)+this.Tp.toFixed())+Pd);this.UT.KB(((((((A.abk(Bgd,0,0)+AIW)+this.AJG.toFixed(
))+CR)+A.aaR(A.acf.AEM))+CR)+this.Tp.toFixed())+Pd);this.I$.Z(!this.Adk);C.FC.Aaz.
call(this,G);},Adr:function(G){this.AJG=0;this.AJH=0;this.AJ2=0;this.AJ3=0;this.
Adk=false;C.FC.Adr.call(this,G);},_Init:function(aArg){C.FC._Init.call(this,aArg
);C.AgC._Init.call(this.AeA={I:this},0);C.Aju._Init.call(this.UV={I:this},0);C.Aju.
_Init.call(this.UW={I:this},0);C.AgC._Init.call(this.Aez={I:this},0);C.Aju._Init.
call(this.US={I:this},0);C.Aju._Init.call(this.UT={I:this},0);this.__proto__=C.AOw;
this.Dr(C.APp);this.AkA(A.aaR(A.acf.A6T));this.Afa(A.aaR(A.acf.ArD));this.AeA.H(
I1);this.AeA.Aj(true);this.AeA.T(A.aaR(A.acf.A6X));this.AeA.Bi(false);this.UV.H(
Qg);this.UV.Aj(true);this.UV.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UV.
Bi(true);this.UV.AkF(2);this.UW.H(Aan);this.UW.Aj(true);this.UW.T(A.aaR(A.acf.AvG
)+A.aaR(A.acf.Colon));this.UW.Bi(true);this.UW.AkF(1);this.Aez.H(Alk);this.Aez.Aj(
true);this.Aez.T(A.aaR(A.acf.A6Y));this.Aez.Bi(false);this.US.H(Aot);this.US.Aj(
true);this.US.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.US.Bi(true);this.
US.AkF(2);this.UT.H(Atg);this.UT.Aj(true);this.UT.T(A.aaR(A.acf.AvG)+A.aaR(A.acf.
Colon));this.UT.Bi(true);this.UT.AkF(1);this.J(this.AeA,0);this.J(this.UV,0);this.
J(this.UW,0);this.J(this.Aez,0);this.J(this.US,0);this.J(this.UT,0);this.UV.S(A.
aaL(A.fl.Ak));this.UW.S(A.aaL(A.fl.Ak));this.US.S(A.aaL(A.fl.Ak));this.UT.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FC;this.AeA._Done();this.UV._Done(
);this.UW._Done();this.Aez._Done();this.US._Done();this.UT._Done();C.FC._Done.call(
this);},_ReInit:function(){C.FC._ReInit.call(this);this.AeA._ReInit();this.UV._ReInit(
);this.UW._ReInit();this.Aez._ReInit();this.US._ReInit();this.UT._ReInit();this.
AkA(A.aaR(A.acf.A6T));this.Afa(A.aaR(A.acf.ArD));this.AeA.T(A.aaR(A.acf.A6X));this.
UV.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UW.T(A.aaR(A.acf.AvG)+A.aaR(
A.acf.Colon));this.Aez.T(A.aaR(A.acf.A6Y));this.US.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UT.T(A.aaR(A.acf.AvG)+A.aaR(A.acf.Colon));this.UV.S(A.aaL(A.fl.
Ak));this.UW.S(A.aaL(A.fl.Ak));this.US.S(A.aaL(A.fl.Ak));this.UT.S(A.aaL(A.fl.Ak
));this.CQ();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.AeA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aez)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.US)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UT)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqU={Lc:null
,Aji:null,Ajj:null,Amu:null,AbH:null,Xb:null,AbE:null,S_:null,AbF:null,S$:null,AbI:
null,Xc:null,Ay:null,Adf:0,AAI:0,ApB:0,A2_:0,BeB:0,CQ:function(){this.Aaz(this);
},DF:function(G){switch(this.Cq.CP){case 4:{if(this.I$.Fq())return;var QE=this.Y.
Br[1]+80;this.Y.Gc([this.Y.Br[0],QE]);this.Y.VG(null,null);}break;case 5:{if(this.
I$.Fq())return;var QE=this.Y.Br[1]-80;this.Y.Gc([this.Y.Br[0],QE]);this.Y.VG(null
,null);}break;default:C.FC.DF.call(this,G);}},Aqa:function(L_,Ac0){if(!L_)return;
var Fy=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,Ac0,true);Fy.CX(HZ);var Ada=A._NewObject(A.Device.Int32FilterCriterion
,0);Ada.Initialize(8,2,0,true);Fy.CX(Ada);L_.Bk(Fy);},AiA:function(G){if(this.Ber(
)){this.Lc.OA(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Arp()){var Qq=A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qq>0){var A2I=A._GetAutoObject(A.acj.DU).AlF(Qq,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Aji.
OA(A2I);}}var A3t=A._GetAutoObject(A.Device.Device).Bt.B_()-2;if(A3t>=0){var BAJ=
A._GetAutoObject(A.Device.Device).Bt.ADm(A3t,8);var BAI=A._GetAutoObject(A.Device.
Device).Bt.Hw(A3t,6);var Qq=A._GetAutoObject(A.Device.Helper).Mf(BAI,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qq>0){var A2I=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAJ)/Qq)|0;this.Ajj.OA(A2I);}}if((A._GetAutoObject(
A.Device.Helper).W.Arp()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RU()<=180)){var ALN=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Tx=A._GetAutoObject(A.Device.
Helper).Mf(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BB0=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALN/Tx);this.Amu.OA(BB0);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Adf++;this.ApB=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZY(7)){this.AAI++;this.A2_=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BeB=A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.FC.AiA.call(
this,G);},Aaz:function(G){var A5f=this.Aji.AjQ()|0;var A5h=this.Ajj.AjQ()|0;if(this.
Adf>1)A._GetAutoObject(A.Device.Device).AY(56,true,this.Adf.toFixed(),0,null);if(
this.Adf===1)A._GetAutoObject(A.Device.Device).AY(53,true,this.ApB.toFixed(),0,null
);if(this.AAI>1)A._GetAutoObject(A.Device.Device).AY(52,true,this.AAI.toFixed(),
0,null);if(this.AAI===1)A._GetAutoObject(A.Device.Device).AY(57,true,(this.A2_.toFixed(
)+Atj)+this.BeB.toFixed(),0,null);if(this.Lc.AZ>0)this.Xb.T(((((((A._GetAutoObject(
A.Device.Converter).Aya(this.Lc.AjQ()|0,1)+AyU)+A._GetAutoObject(A.Device.Converter
).Aya(this.Lc.Aq5()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af8())+AyV)+this.Lc.AZ.
toFixed())+Pd);else this.Xb.T(A.aaR(A.acf.Unknown));if(this.Aji.AZ>0)this.S_.T(((((((
A._GetAutoObject(A.Device.Converter).Td(A5f,2,true)+AyU)+A._GetAutoObject(A.Device.
Converter).Td(this.Aji.Aq5()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).AaE())+AyV
)+this.Aji.AZ.toFixed())+Pd);else this.S_.T(A.aaR(A.acf.Unknown));if(this.Ajj.AZ>
0)this.S$.T(((((((A._GetAutoObject(A.Device.Converter).Td(A5h,2,true)+AyU)+A._GetAutoObject(
A.Device.Converter).Td(this.Ajj.Aq5()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).
AaE())+AyV)+this.Ajj.AZ.toFixed())+Pd);else this.S$.T(A.aaR(A.acf.Unknown));if(this.
Amu.AZ>0)this.Xc.T(((((((A.abk(this.Amu.AjQ(),0,1)+AyU)+A.abk(this.Amu.Aq5(),0,1
))+CR)+A.aaR(A.acf.Biy))+AyV)+this.Amu.AZ.toFixed())+Pd);else this.Xc.T(A.aaR(A.
acf.Unknown));var A5g=0;var A5i=0;var Adk=false;if(this.Lc.AZ>0)Adk=true;var Ih=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AKk=A._GetAutoObject(A.Device.
Device).An.Filter.DM(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AKk)?AKk:null))Ih=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AKk)?AKk:null
).A5;}if(this.Aji.AZ>0){Adk=true;A5g=A._GetAutoObject(A.Device.Converter).BaG(A5f
,Ih);}if(this.Ajj.AZ>0){Adk=true;A5i=A._GetAutoObject(A.Device.Converter).BaG(A5h
,Ih);}this.S_.AkF(A5g);this.S$.AkF(A5i);this.I$.Z(!Adk);C.FC.Aaz.call(this,G);},
Adr:function(G){this.Lc.Yp();this.Aji.Yp();this.Ajj.Yp();this.Amu.Yp();this.Adf=
0;this.AAI=0;this.ApB=0;this.A2_=0;C.FC.Adr.call(this,G);},Fk:function(G){var B;
this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.
MH(-this.Y.Br[1]);},Ber:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FC._Init.call(this,aArg);C.AgC._Init.call(this.AbH={I:
this},0);C.IK._Init.call(this.Xb={I:this},0);C.AgC._Init.call(this.AbE={I:this},
0);C.Aju._Init.call(this.S_={I:this},0);C.AgC._Init.call(this.AbF={I:this},0);C.
Aju._Init.call(this.S$={I:this},0);C.AgC._Init.call(this.AbI={I:this},0);C.IK._Init.
call(this.Xc={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqU;
this.Dr(C.AvF);this.AkA(A.aaR(A.acf.A6U));this.Afa(A.aaR(A.acf.Akn));this.AbH.H(
Atq);this.AbH.Aj(true);this.AbH.T(A.aaR(A.acf.A5Q));this.AbH.Bi(false);this.AbH.
Kz(5);this.Xb.H(A0y);this.Xb.Aj(true);this.Xb.T(A.jV);this.Xb.Bi(true);this.AbE.
H(Atn);this.AbE.Aj(true);this.AbE.T(A.aaR(A.acf.AMa));this.AbE.Bi(false);this.AbE.
Kz(5);this.S_.H(Ato);this.S_.Aj(true);this.S_.T(A.jV);this.S_.Bi(true);this.S_.KB(
A.jV);this.AbF.H(Atp);this.AbF.Aj(true);this.AbF.T(A.aaR(A.acf.AuJ));this.AbF.Bi(
false);this.AbF.Kz(5);this.S$.H(Br_);this.S$.Aj(true);this.S$.T(A.jV);this.S$.Bi(
true);this.S$.KB(A.jV);this.AbI.H(A0z);this.AbI.Aj(true);this.AbI.T(A.aaR(A.acf.
A5Y));this.AbI.Bi(false);this.AbI.Kz(5);this.Xc.H(AoB);this.Xc.Aj(true);this.Xc.
T(A.jV);this.Xc.Bi(true);this.Ay.H(Ix);this.J(this.AbH,-1);this.J(this.Xb,-1);this.
J(this.AbE,-1);this.J(this.S_,-1);this.J(this.AbF,-1);this.J(this.S$,-1);this.J(
this.AbI,-1);this.J(this.Xc,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.
Lc=A._NewObject(C.AvY,0);this.Aji=A._NewObject(C.AvY,0);this.Ajj=A._NewObject(C.
AvY,0);this.Xb.S(A.aaL(A.fl.Af));this.S_.S(A.aaL(A.fl.Ak));this.S$.S(A.aaL(A.fl.
Ak));this.Xc.S(A.aaL(A.fl.Ak));this.Amu=A._NewObject(C.A64,0);},_Done:function(){
this.__proto__=C.FC;this.AbH._Done();this.Xb._Done();this.AbE._Done();this.S_._Done(
);this.AbF._Done();this.S$._Done();this.AbI._Done();this.Xc._Done();this.Ay._Done(
);C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.AbH._ReInit(
);this.Xb._ReInit();this.AbE._ReInit();this.S_._ReInit();this.AbF._ReInit();this.
S$._ReInit();this.AbI._ReInit();this.Xc._ReInit();this.Ay._ReInit();this.AkA(A.aaR(
A.acf.A6U));this.Afa(A.aaR(A.acf.Akn));this.AbH.T(A.aaR(A.acf.A5Q));this.AbE.T(A.
aaR(A.acf.AMa));this.AbF.T(A.aaR(A.acf.AuJ));this.AbI.T(A.aaR(A.acf.A5Y));this.Xb.
S(A.aaL(A.fl.Af));this.S_.S(A.aaL(A.fl.Ak));this.S$.S(A.aaL(A.fl.Ak));this.Xc.S(
A.aaL(A.fl.Ak));this.CQ();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((
B=this.Lc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aji)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ajj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amu)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Xb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.AbD={_Init:function(aArg){C.AjT._Init.call(this,aArg);this.__proto__=C.AbD;this.
Df.Ax(A.aaL(A.ach.ADV));},_className:"Application::HeaderEvaluationFilter"};C.Kv={
CQ:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjT.DX.call(this
,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(A._GetAutoObject(A.Device.
Device).Ko));},_Init:function(aArg){C.AjT._Init.call(this,aArg);this.__proto__=C.
Kv;},_ReInit:function(){C.AjT._ReInit.call(this);this.CQ();},_className:"Application::HeaderListFilter"
};C.AvF={Init:function(aArg){this.Df.Ax(A._GetAutoObject(A.acj.DU).BdZ());},_Init:
function(aArg){C.AbD._Init.call(this,aArg);this.__proto__=C.AvF;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APp={Init:function(
aArg){this.Df.Ax(A.aaL(A.ach.Ag9));},_Init:function(aArg){C.AbD._Init.call(this,
aArg);this.__proto__=C.APp;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APo={Init:function(aArg){this.Df.Ax(A.aaL(A.ach.Ark));},_Init:function(aArg){
C.AbD._Init.call(this,aArg);this.__proto__=C.APo;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APn={Sr:null,Df:null,AP:null,CQ:function(){this.Sr.R(A.aaR(A.acf.ANs));},Dg:
function(E){C.BR.Dg.call(this,E);this.Sr.L(E);this.Df.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Sr={I:this},0);A.acg.Ap._Init.
call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this},0);this.__proto__=
C.APn;this.Sr.H(Br$);this.Sr.R(A.aaR(A.acf.ANs));this.Sr.A6(0x11);this.Df.H(Bsa);
this.AP.DD(Bsb);this.AP.DN(Bsc);this.AP.L(A.jb.Bc);this.J(this.Sr,0);this.J(this.
Df,0);this.J(this.AP,0);this.Sr.S(A.aaL(A.fl.Af));this.Sr.A0(A.aaL(A.fl.Ak));this.
Df.Ax(A.aaL(A.ach.AQB));},_Done:function(){this.__proto__=C.BR;this.Sr._Done();this.
Df._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Sr._ReInit();this.Df._ReInit();this.AP._ReInit();this.Sr.R(A.aaR(
A.acf.ANs));this.Sr.S(A.aaL(A.fl.Af));this.Sr.A0(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.AeB={T3:null,Aj3:
null,Aj0:null,Aj1:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.T3={I:this},0);A.acg.Ap._Init.call(this.Aj3={I:this},0);A.acg.Ap._Init.
call(this.Aj0={I:this},0);A.acg.Ap._Init.call(this.Aj1={I:this},0);this.__proto__=
C.AeB;this.T3.H(Bsd);this.T3.R(A.aaR(A.acf.Year));this.T3.A6(0x11);this.T3.L(A.jb.
Text);this.Aj3.H(BaZ);this.Aj3.L(A.jb.Text);this.Aj0.H(Bse);this.Aj0.L(A.jb.Text
);this.Aj1.H(Bsf);this.Aj1.L(A.jb.Text);this.J(this.T3,0);this.J(this.Aj3,0);this.
J(this.Aj0,0);this.J(this.Aj1,0);this.T3.S(A.aaL(A.fl.Kt));this.T3.A0(A.aaL(A.fl.
HL));this.Aj3.Ax(A.aaL(A.ach.AQP));this.Aj0.Ax(A.aaL(A.ach.AQO));this.Aj1.Ax(A.aaL(
A.ach.AQW));},_Done:function(){this.__proto__=C.EB;this.T3._Done();this.Aj3._Done(
);this.Aj0._Done();this.Aj1._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.T3._ReInit();this.Aj3._ReInit();this.Aj0._ReInit();this.
Aj1._ReInit();this.T3.R(A.aaR(A.acf.Year));this.T3.S(A.aaL(A.fl.Kt));this.T3.A0(
A.aaL(A.fl.HL));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.T3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aj0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmU={AjA:null,AP:null
,A$:null,Ea:null,UP:null,S1:null,Gv:null,XR:0,AtU:0,AlJ:0,ABT:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.S1.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.S1.M[2]-1,0,this.S1.M[
2]+1,aSize[1]]);this.UP.H([this.S1.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UP.M[2]-1,0,this.UP.M[2]+1,aSize[1]]);this.Gv.H([this.UP.M[2],0,aSize[
0],aSize[1]]);this.AjA.H(this.Gv.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABT.toFixed());this.S1.L(this.V.AQ);this.S1.R(this.AlJ.toFixed());this.UP.
L(this.V.AQ);this.UP.R(this.AtU.toFixed());var B2=this.BBZ(this.XR);this.Gv.L(A.
_GetAutoObject(A.acj.Assessment).XG(B2));this.AjA.L(A._GetAutoObject(A.acj.Assessment
).Qv(B2));this.Gv.R(A.abk(this.XR,0,0)+AfK);},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;Ad=(this.AX.B_()-Ad)-1;if(!!this.AX){this.AlJ=this.AX.CF(Ad,1);this.AtU=
this.AX.CF(Ad,2);this.ABT=this.AX.CF(Ad,0);if(this.AlJ>0)this.XR=(this.AtU/this.
AlJ)*100;else this.XR=0;this.Am();}},BBZ:function(XR){if(XR>=8)return 1;else if(
XR>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.AjA={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UP={I:this},0);A.acg.Text._Init.call(this.S1={I:this},0
);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.AmU;this.AjA.H(Aor);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.H(Aor);this.Ea.L(A.jb.Bc);this.UP.
L(A.jb.Text);this.S1.H(Aor);this.S1.L(A.jb.Text);this.Gv.L(A.jb.Text);this.J(this.
AjA,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.UP,0);this.
J(this.S1,0);this.J(this.Gv,0);this.UP.S(A.aaL(A.fl.Af));this.S1.S(A.aaL(A.fl.Af
));this.Gv.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.AjA._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.UP._Done(
);this.S1._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.AjA._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea.
_ReInit();this.UP._ReInit();this.S1._ReInit();this.Gv._ReInit();this.UP.S(A.aaL(
A.fl.Af));this.S1.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Aju={
BU:null,Ax7:A.jV,Rating:0,Ai:function(Ae){C.IK.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qv(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XG(this.Rating));}this.BU.L(this.V.AQ);},S:function(
E){C.IK.S.call(this,E);if((E===A.aaL(A.fl.Kt))||(E===A.aaL(A.fl.Af)))this.BU.S(A.
aaL(A.fl.Af));else if((E===A.aaL(A.fl.HL))||(E===A.aaL(A.fl.Ak)))this.BU.S(A.aaL(
A.fl.Ak));else this.BU.S(E);},KB:function(E){if(this.Ax7===E)return;this.Ax7=E;this.
BU.R(E);},AkF:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.BU={I:this}
,0);this.__proto__=C.Aju;this.BU.A1(0x34);this.BU.H(Aap);this.BU.Je(true);this.BU.
A6(0x11);this.BU.L(A.jb.Text);this.BU.Aj(true);this.J(this.BU,0);this.BU.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.IK;this.BU._Done();C.IK._Done.call(
this);},_ReInit:function(){C.IK._ReInit.call(this);this.BU._ReInit();this.BU.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.IK._Mark.call(this,D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.AC2={
N$:null,SR:null,V:null,AnV:null,AnU:null,Acn:null,Acm:null,DL:LB,BaL:A.jV,A$F:A.
jV,Acd:function(E){if(this.N$===E)return;this.N$=E;this.SR.Acd(this.N$);},T:function(
E){if(this.DL===E)return;this.DL=E;this.V.R(E);},A$j:function(E){if(this.BaL===E
)return;this.BaL=E;this.Acn.R(E);},A_Z:function(E){if(this.A$F===E)return;this.A$F=
E;this.Acm.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SR._Init.
call(this.SR={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnV={I:this},0);A.acg.AL._Init.call(this.AnU={I:this},0);A.acg.Text._Init.
call(this.Acn={I:this},0);A.acg.Text._Init.call(this.Acm={I:this},0);this.__proto__=
C.AC2;this.H(Bsg);this.SR.H(Bsh);this.SR.As(false);this.SR.Bn1(360);this.SR.Bn$(
0.5);this.V.A1(0x1D);this.V.H(Tf);this.V.KX(true);this.V.R(LB);this.V.L(A.jb.Text
);this.AnV.H(Ba0);this.AnV.L(A.jb.Ib);this.AnU.H(Ba1);this.AnU.L(A.jb.Gk);this.Acn.
A1(0x1D);this.Acn.H(Ba0);this.Acn.L(A.jb.Text);this.Acm.A1(0x1D);this.Acm.H(Ba1);
this.Acm.L(A.jb.CU);this.J(this.SR,0);this.J(this.V,0);this.J(this.AnV,0);this.J(
this.AnU,0);this.J(this.Acn,0);this.J(this.Acm,0);this.SR.Bob(A.aaL(A.acv.AUi));
this.V.S(A.aaL(A.fl.Ak));this.Acn.S(A.aaL(A.fl.Ak));this.Acm.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SR._Done();this.V._Done();this.AnV.
_Done();this.AnU._Done();this.Acn._Done();this.Acm._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SR._ReInit();this.V._ReInit(
);this.AnV._ReInit();this.AnU._ReInit();this.Acn._ReInit();this.Acm._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acn.S(A.aaL(A.fl.Ak));this.Acm.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkU={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkU;this.H(U5);this.Background.A1(0x3F);this.Background.
H(U5);this.Background.L(A.jb.Bkz);this.Text.A1(0x3F);this.Text.H(U5);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.A0(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Rh={Ak5:null,N0:null,C_:null,AcJ:null,JT:null,TemperatureUnit:null,MO:null,P2:
null,So:null,UE:null,Lw:null,Jk:null,Z$:null,Z_:null,Sp:null,HH:null,AjJ:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlR());
this.UE.R(A._GetAutoObject(A.acj.Temperature).AlR());this.Sp.Z(!A._GetAutoObject(
A.Device.Device).AmW);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Aob();this.Ax4(
);this.Z9();this.Ax5();},H1:function(G){this.W2(this);},CC:function(G){var B;C.AB.
CC.call(this,G);A.zX([this,this.AKR],[B=A._GetAutoObject(A.Device.Device),B.AEY,
B.AI8],0);A.zX([this,this.AAY],[B=A._GetAutoObject(A.Device.Device),B.AE2,B.AI_]
,0);A.zX([this,this.AAY],[B=A._GetAutoObject(A.Device.Device),B.AS2,B.A0P],0);A.
zX([this,this.A3O],[B=A._GetAutoObject(A.Device.Device),B.ArG,B.Atu],0);A.zX([this
,this.A3H],[B=A._GetAutoObject(A.Device.Device),B.AEV,B.AI5],0);A._GetAutoObject(
A.Device.Device).AhQ();if(A._GetAutoObject(A.Device.Device).AmW)A._GetAutoObject(
A.Device.Device).Ae4(true);A._GetAutoObject(A.Device.Device).AxQ();A.pe([this,this.
A3H],this);A.pe([this,this.AAY],this);A.pe([this,this.A3O],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhQ();A._GetAutoObject(A.Device.Device
).UA(false);A._GetAutoObject(A.Device.Device).Afc(false);A._GetAutoObject(A.Device.
Device).Ae4(false);A.z$([this,this.AKR],[B=A._GetAutoObject(A.Device.Device),B.AEY
,B.AI8],0);A.z$([this,this.AAY],[B=A._GetAutoObject(A.Device.Device),B.AE2,B.AI_
],0);A.z$([this,this.AAY],[B=A._GetAutoObject(A.Device.Device),B.AS2,B.A0P],0);A.
z$([this,this.A3O],[B=A._GetAutoObject(A.Device.Device),B.ArG,B.Atu],0);A.z$([this
,this.A3H],[B=A._GetAutoObject(A.Device.Device),B.AEV,B.AI5],0);},AAY:function(G
){this.Am();},Aob:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CJ);this.C_.L(A.jb.Gk);this.JT.L(this.C_.AQ);this.
MO.L(this.C_.AQ);this.TemperatureUnit.L(this.C_.AQ);}break;default:{this.Background.
L(A.jb.CJ);this.C_.L(A.jb.AV);this.JT.L(A.jb.Text);this.MO.L(this.JT.AQ);this.TemperatureUnit.
L(this.JT.AQ);this.HH.L(A.jb.Gk);}}},Ax4:function(){this.Ak5.As(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JT.R(A.aaR(A.acf.AEa));this.C_.Ax(A.aaL(A.ach.AvR));this.C_.Cw(0);
this.N0.Cw(0);}break;case 1:{this.AV1(A._GetAutoObject(A.Device.Device).Lz,false
);this.C_.Ax(A.aaL(A.ach.AvR));this.N0.Cw(0);}break;case 2:{this.So.R(A._GetAutoObject(
A.Device.Converter).Ak4(A._GetAutoObject(A.Device.Device).AGv));this.AV1(A._GetAutoObject(
A.Device.Device).Lz,false);this.C_.Ax(null);this.N0.Cw(1);this.AcJ.Z(true);this.
P2.Z(true);this.So.Z(true);this.UE.Z(true);}break;case 3:{this.AU4();this.AV1(A.
_GetAutoObject(A.Device.Device).Lz,true);this.AcJ.Z(false);this.P2.Z(false);this.
So.Z(false);this.UE.Z(false);}break;case 4:{this.JT.R(A.aaR(A.acf.BkN));this.MO.
R(A.aaR(A.acu.Akm));this.C_.Ax(A.aaL(A.ach.AvT));this.C_.Cw(2);this.N0.Cw(0);}break;
default:A.ab5("%s%e",AIf,A._GetAutoObject(A.Device.Device).MeasureState);}},Z9:function(
){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{if((A._GetAutoObject(
A.Device.Device).Lz<=3240)||(A._GetAutoObject(A.Device.Device).Lz>=5460))this.N.
C4(null);else this.N.C4(A.aaL(A.ach.AeE));this.N.Ct(null);}break;default:;}},AsO:
function(G){A._GetAutoObject(C.A7).FB();},W2:function(G){},A03:function(s){this.
W2(s);},AkZ:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case
0:case 1:this.BBM(this);break;default:;}},A02:function(s){this.AkZ(s);},AV1:function(
AoU,BAx){if(BAx)this.Lw.L(A.jb.Bm);else this.Lw.L(A.jb.Gk);if(AoU<=3240){this.MO.
Z(false);this.TemperatureUnit.Z(false);this.Lw.Z(true);this.Lw.R(A.aaR(A.acu.AVK
));}else if(AoU>=5460){this.MO.Z(false);this.TemperatureUnit.Z(false);this.Lw.Z(
true);this.Lw.R(A.aaR(A.acu.BqB));}else{this.MO.Z(true);this.TemperatureUnit.Z(true
);this.Lw.Z(false);this.MO.R(A._GetAutoObject(A.Device.Converter).Ak4(AoU));}},Ax5:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:
if((A._GetAutoObject(A.Device.Device).Lz<=3240)||(A._GetAutoObject(A.Device.Device
).Lz>=5460))this.JT.R(A.aaR(A.acf.AEa));else this.JT.R(A.aaR(A.acf.Bq$));break;default:;
}},Ax6:function(){},BqU:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.Z$.As(true);break;case 4:this.Z_.As(true);break;default:{this.Z$.As(
false);this.Z_.As(false);A._GetAutoObject(A.Device.Device).Afc(false);}}},AKR:function(
G){this.Am();this.Ax6();this.BqU();this.BqS();},A3O:function(G){if(A._GetAutoObject(
A.Device.Device).AmX){this.Sp.L(A.jb.Ib);this.Sp.Cw(1);}else{this.Sp.L(A.jb.Bm);
this.Sp.Cw(0);}},BBM:function(G){if(!A._GetAutoObject(A.Device.Device).AmW)A._GetAutoObject(
A.Device.Device).Ae4(!A._GetAutoObject(A.Device.Device).AmX);},BqS:function(){if(
A._GetAutoObject(A.Device.Device).AmW){this.Sp.Z(false);if(A._GetAutoObject(A.Device.
Device).MeasureState===1)A._GetAutoObject(A.Device.Device).Ae4(true);else A._GetAutoObject(
A.Device.Device).Ae4(false);}else if(A._GetAutoObject(A.Device.Device).MeasureState===
1)this.Sp.Z(true);else this.Sp.Z(false);},AKT:function(G){this.CC(this);},AU4:function(
){A.ab5("%s",BaY);},A3H:function(G){if(A._GetAutoObject(A.Device.Device).HH){this.
JT.H(Bsi);this.MO.H(Bsj);this.TemperatureUnit.H(Bsk);}else{this.JT.H(Bsl);this.MO.
H(Bsm);this.TemperatureUnit.H(Bsn);}},_Init:function(aArg){C.AB._Init.call(this,
aArg);A.acl.Gn._Init.call(this.Ak5={I:this},0);A.acg.Ap._Init.call(this.N0={I:this
},0);A.acg.Ap._Init.call(this.C_={I:this},0);A.acg.Ap._Init.call(this.AcJ={I:this
},0);A.acg.Text._Init.call(this.JT={I:this},0);A.acg.Text._Init.call(this.TemperatureUnit={
I:this},0);A.acg.Text._Init.call(this.MO={I:this},0);A.acg.Text._Init.call(this.
P2={I:this},0);A.acg.Text._Init.call(this.So={I:this},0);A.acg.Text._Init.call(this.
UE={I:this},0);C.CG._Init.call(this.Lw={I:this},0);A.Device.TQ._Init.call(this.Jk={
I:this},0);A.Device.TQ._Init.call(this.Z$={I:this},0);A.Device.TQ._Init.call(this.
Z_={I:this},0);A.acg.Ap._Init.call(this.Sp={I:this},0);C.CG._Init.call(this.HH={
I:this},0);A.acl.TQ._Init.call(this.AjJ={I:this},0);this.__proto__=C.Rh;var B;this.
N.Z(true);this.Ak5.Fr(1000);this.Ak5.B3=2;this.N0.H(Bso);this.N0.L(A.jb.CU);this.
C_.H(Bsp);this.C_.L(A.jb.AV);this.C_.Cw(0);this.C_.Z(true);this.AcJ.H(Bsq);this.
AcJ.L(A.jb.Text);this.AcJ.Z(false);this.JT.KX(true);this.JT.R(A.aaR(A.acf.AEa));
this.JT.L(A.jb.Text);this.TemperatureUnit.A6(0x9);this.TemperatureUnit.L(A.jb.Text
);this.MO.A6(0x14);this.MO.R(A.aaR(A.acu.Akm));this.MO.L(A.jb.Text);this.P2.H(Bsr
);this.P2.R(A.aaR(A.acf.P2));this.P2.L(A.jb.Text);this.P2.Z(false);this.So.H(Bss
);this.So.A6(0x14);this.So.R(Bst);this.So.L(A.jb.Text);this.So.Z(false);this.UE.
H(Bsu);this.UE.R(Bsv);this.UE.L(A.jb.Text);this.UE.Z(false);this.Lw.H(Bsw);this.
Lw.R(A.aaR(A.acu.AVK));this.Lw.A6(0x12);this.Lw.L(A.jb.Gk);this.Jk.B3=false;this.
Jk.Cx=true;this.Jk.HQ(1);this.Jk.Fr(4000);this.Jk.Ux(0);this.Z$.B3=false;this.Z$.
Cx=true;this.Z$.HQ(2);this.Z$.Fr(400);this.Z$.Ux(200);this.Z_.B3=false;this.Z_.Cx=
true;this.Z_.HQ(3);this.Z_.Fr(500);this.Z_.Ux(250);this.Sp.H(Bsx);this.HH.H(Bsy);
this.HH.Z(A._GetAutoObject(A.Device.Device).HH);this.HH.R(A.aaR(A.acf.HH));this.
HH.A6(0x12);this.HH.L(A.jb.Gk);this.AjJ.As(A._GetAutoObject(A.Device.Device).HH);
this.AjJ.Fr(500);this.AjJ.Ux(1000);this.J(this.N0,0);this.J(this.C_,0);this.J(this.
AcJ,0);this.J(this.JT,0);this.J(this.TemperatureUnit,0);this.J(this.MO,0);this.J(
this.P2,0);this.J(this.So,0);this.J(this.UE,0);this.J(this.Lw,0);this.J(this.Sp,
0);this.J(this.HH,0);this.N.CE=[this,this.AsO];this.N.Ce=[this,this.A02];this.N.
Ca=[this,this.A03];this.N.C3(A.aaL(A.ach.AeD));this.Ak5.Q=[B=this.C_,B.AST,B.Cw];
this.N0.Ax(A.aaL(A.ach.N0));this.C_.Ax(A.aaL(A.ach.AvR));this.AcJ.Ax(A.aaL(A.ach.
AQ$));this.JT.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MO.S(
A.aaL(A.fl.Aew));this.P2.S(A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.EK));this.UE.S(A.
aaL(A.fl.EK));this.Lw.S(A.aaL(A.fl.Aew));this.Lw.A0(A.aaL(A.fl.EK));this.Lw.Cr(A.
aaL(A.fl.Af));this.Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.AS_,B.A0V];this.Z$.
Q=[B=A._GetAutoObject(A.Device.Device),B.AE3,B.AI$];this.Z_.Q=[B=A._GetAutoObject(
A.Device.Device),B.AE3,B.AI$];this.Sp.Ax(A.aaL(A.ach.AqX));this.HH.S(A.aaL(A.fl.
EK));this.HH.A0(A.aaL(A.fl.Kt));this.HH.Cr(A.aaL(A.fl.HL));this.AjJ.Q=[B=this.HH
,B.Fq,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ak5._Done(
);this.N0._Done();this.C_._Done();this.AcJ._Done();this.JT._Done();this.TemperatureUnit.
_Done();this.MO._Done();this.P2._Done();this.So._Done();this.UE._Done();this.Lw.
_Done();this.Jk._Done();this.Z$._Done();this.Z_._Done();this.Sp._Done();this.HH.
_Done();this.AjJ._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ak5._ReInit();this.N0._ReInit();this.C_._ReInit();this.AcJ._ReInit(
);this.JT._ReInit();this.TemperatureUnit._ReInit();this.MO._ReInit();this.P2._ReInit(
);this.So._ReInit();this.UE._ReInit();this.Lw._ReInit();this.Jk._ReInit();this.Z$.
_ReInit();this.Z_._ReInit();this.Sp._ReInit();this.HH._ReInit();this.AjJ._ReInit(
);this.JT.R(A.aaR(A.acf.AEa));this.MO.R(A.aaR(A.acu.Akm));this.P2.R(A.aaR(A.acf.
P2));this.Lw.R(A.aaR(A.acu.AVK));this.HH.R(A.aaR(A.acf.HH));this.JT.S(A.aaL(A.fl.
Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MO.S(A.aaL(A.fl.Aew));this.P2.S(
A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.EK));this.UE.S(A.aaL(A.fl.EK));this.Lw.S(A.
aaL(A.fl.Aew));this.Lw.A0(A.aaL(A.fl.EK));this.Lw.Cr(A.aaL(A.fl.Af));this.HH.S(A.
aaL(A.fl.EK));this.HH.A0(A.aaL(A.fl.Kt));this.HH.Cr(A.aaL(A.fl.HL));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ak5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
MO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Z$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::TemperatureScreen"};C.AVz={Z9:function(){C.Rh.Z9.call(this
);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:case 4:{this.N.Ct(
null);this.N.C4(A.aaL(A.ach.AvU));}break;default:;}},W2:function(G){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).Lz>3240)&&(A._GetAutoObject(A.Device.Device).Lz<5460)){A._GetAutoObject(A.Device.
Device).AhQ();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:case 4:this.AKT(this);break;default:;}},Ax5:function(){C.Rh.Ax5.call(this);switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 3:this.JT.R(A.aaR(A.acf.BkO
));break;default:;}},Ax6:function(){C.Rh.Ax6.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 4:{A._GetAutoObject(A.Device.Device).WQ(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AU4:function(){this.C_.Ax(
A.aaL(A.ach.AvT));this.C_.Cw(0);this.N0.Cw(0);},_Init:function(aArg){C.Rh._Init.
call(this,aArg);this.__proto__=C.AVz;this.Dr(C.APl);},_className:"Application::TemperatureMeasurementScreen"
};C.APq={Df:null,IR:null,N2:null,AP:null,Ag$:null,A$:null,Dg:function(E){C.BR.Dg.
call(this,E);this.Df.L(E);this.IR.L(E);this.N2.L(E);this.Ag$.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.Ap.
_Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(this.N2={I:this},0);A.acg.C8.
_Init.call(this.AP={I:this},0);A.acg.Ap._Init.call(this.Ag$={I:this},0);A.acg.C8.
_Init.call(this.A$={I:this},0);this.__proto__=C.APq;this.Df.H(AyN);this.IR.H(Ayq
);this.N2.H(AHU);this.AP.DD(Ba2);this.AP.DN(Ba3);this.AP.L(A.jb.Bc);this.Ag$.H(Bsz
);this.Ag$.L(A.jb.CU);this.A$.DD(BsA);this.A$.DN(BsB);this.A$.L(A.jb.Bc);this.J(
this.Df,0);this.J(this.IR,0);this.J(this.N2,0);this.J(this.AP,0);this.J(this.Ag$
,0);this.J(this.A$,0);this.Df.Ax(A.aaL(A.ach.ADV));this.IR.Ax(A.aaL(A.ach.AeF));
this.N2.Ax(A.aaL(A.ach.AvM));this.Ag$.Ax(A.aaL(A.ach.AQA));},_Done:function(){this.
__proto__=C.BR;this.Df._Done();this.IR._Done();this.N2._Done();this.AP._Done();this.
Ag$._Done();this.A$._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Df._ReInit();this.IR._ReInit();this.N2._ReInit();this.AP._ReInit(
);this.Ag$._ReInit();this.A$._ReInit();},_Mark:function(D){var B;C.BR._Mark.call(
this,D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.N2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilterCalfLosses"
};C.De={Es:null,DS:null,AGQ:0,AN0:0,Init:function(aArg){A.zV([this,this.ALz],A._GetAutoObject(
A.Device.Device).An,0);A.pe([this,this.ALz],this);},ALz:function(G){var Ad=this.
AGQ;if(Ad<0){this.DS.E7();this.DS.EC(this.AN0);return;}this.DS.EC(A._GetAutoObject(
A.Device.Device).An.Am1(Ad,14));this.DS.AFo(A._GetAutoObject(A.Device.Device).An.
Ja(Ad,13));this.DS.Ae5(A._GetAutoObject(A.Device.Device).An.H7(Ad,8));this.DS.Uy(
A._GetAutoObject(A.Device.Device).An.H7(Ad,11));this.DS.Ae9(A._GetAutoObject(A.Device.
Device).An.H7(Ad,12));this.DS.Ae$(A._GetAutoObject(A.Device.Device).An.CF(Ad,5));
},A_2:function(E){if(this.AGQ===E)return;this.AGQ=E;A.pe([this,this.ALz],this);}
,A_s:function(E){if(this.AN0===E)return;this.AN0=E;A.pe([this,this.ALz],this);},
A9D:function(){return this.AGQ;},_Init:function(aArg){C.EB._Init.call(this,aArg);
C.CG._Init.call(this.Es={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=
C.De;this.Es.H(BsC);this.Es.R(A.aaR(A.acf.GO));this.Es.A6(0x11);this.Es.L(A.jb.Text
);this.DS.H(A0A);this.J(this.Es,0);this.J(this.DS,0);this.Es.S(A.aaL(A.fl.Af));this.
Es.A0(A.aaL(A.fl.Ak));this.Es.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.DS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.DS._ReInit();this.Es.R(
A.aaR(A.acf.GO));this.Es.S(A.aaL(A.fl.Af));this.Es.A0(A.aaL(A.fl.Ak));this.Es.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Ku={AgS:null,Text:null,Afo:null,Dg:function(E
){C.BR.Dg.call(this,E);this.AgS.L(E);this.Text.L(E);this.Afo.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgS={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afo={I:this},0);this.__proto__=
C.Ku;this.AgS.H(BsD);this.AgS.L(A.jb.Text);this.Text.H(BsE);this.Text.As(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afo.H(BsF);this.Afo.L(A.jb.Text);this.
J(this.AgS,0);this.J(this.Text,0);this.J(this.Afo,0);this.AgS.Ax(A.aaL(A.ach.APs
));this.Text.S(A.aaL(A.fl.Kt));this.Text.A0(A.aaL(A.fl.HL));},_Done:function(){this.
__proto__=C.BR;this.AgS._Done();this.Text._Done();this.Afo._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.AgS._ReInit();this.Text.
_ReInit();this.Afo._ReInit();this.Text.S(A.aaL(A.fl.Kt));this.Text.A0(A.aaL(A.fl.
HL));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AgS)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afo
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.APj={
_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APj;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.APl={_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APl;this.J5(this.Afo,-2);this.
Afo.Ax(A.aaL(A.ach.Ag9));},_className:"Application::HeaderDeviceTemperature"};C.
Yw={Ai:function(Ae){C.AmU.Ai.call(this,Ae);this.T(A.aaR(A.acf.BqC)+A.aaR(A.acf.Colon
));},Ch:function(Ad){var B;if(!this.AX)return;this.AlJ=0;this.AtU=0;this.XR=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B_();O++){this.AlJ+=this.AX.CF(O,1);this.AtU+=
this.AX.CF(O,2);}if(this.AlJ>0)this.XR=(this.AtU/this.AlJ)*100;this.Am();}},_Init:
function(aArg){C.AmU._Init.call(this,aArg);this.__proto__=C.Yw;this.AP.Z(false);
this.A$.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.
HL));},_ReInit:function(){C.AmU._ReInit.call(this);this.V.S(A.aaL(A.fl.Kt));this.
V.A0(A.aaL(A.fl.HL));},_className:"Application::EvaluationLossesSumItem"};C.A63={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A63;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A64={K6:null,M3:null,AZ:0,Yp:function(){this.K6=null;this.M3=null;this.AZ=0;
},OA:function(A8){var Hi;Hi=A._NewObject(C.A63,0);Hi.A5=A8;if(!this.K6){this.K6=
Hi;this.M3=Hi;this.AZ=1;}else{this.M3.Ah=Hi;this.M3=Hi;this.AZ=this.AZ+1;}},Am3:
function(){var B;var RR=0;var Op=this.K6;while(!!Op){RR+=Op.A5;Op=Op.Ah;}return RR;
},AjQ:function(){if(!this.AZ)return 0;return this.Am3()/this.AZ;},Aq5:function(){
var B;if(!this.AZ)return 0;var A1X=this.AjQ();var Adi=0;var Op=this.K6;while(!!Op
){Adi+=Math.pow(Op.A5-A1X,2);Op=Op.Ah;}Adi/=this.AZ;Adi=Math.sqrt(Adi);return Adi;
},_Init:function(aArg){this.__proto__=C.A64;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.AgC={Background:null,V:null,KY:0,UC:5,Hm:false
,Ai:function(Ae){C.Hj.Ai.call(this,Ae);if(this.Hm)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CJ);},T:function(E){C.Hj.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hm===E)return;this.Hm=E;this.Am();},Kz:function(E){if(this.UC===
E)return;this.UC=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hj._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.AgC;this.H(BD);this.Background.A1(
0x3F);this.Background.H(BD);this.V.A1(0x3F);this.V.H(AyK);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KY=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.HL));this.V.Cr(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hj;this.Background._Done();this.V._Done();C.Hj._Done.call(this
);},_ReInit:function(){C.Hj._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.HL));this.V.Cr(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hj._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AOf={WK:function(G){this.AgA();this.I8(A.aaR(
A.acf.AVJ),[this,this.AT8],5);this.I8(A.aaR(A.acf.AVH),[this,this.AT7],7);this.I8(
A.aaR(A.acf.Calving),[this,this.Bmy],11);this.I8(A.aaR(A.acf.An6),[this,this.Aw3
],2);this.I8(A.aaR(A.acf.AdX),[this,this.AFc],1);this.I8(A.aaR(A.acf.AuM),[this,
this.AE8],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Anm
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DF:function(G){}
,AbB:function(){return C.ANn;},AbC:function(){return C.APP;},Rb:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADg());},HS:function(G){
var F;C.GJ.HS.call(this,G);if(this.Akj()===false){this.N.Ct(A._GetAutoObject(A.Device.
Converter).Ajt((F=this.Fn,F[1].call(F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(
A.jV);}this.N.OW(false);this.N.OX(false);},Agm:function(){A._GetAutoObject(C.A7).
Cb(62);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOf;var
B;this.Dr(C.APm);this.Dl(A.aaR(A.acf.ASr));this.AwY([B=A._GetAutoObject(A.Device.
Device),B.A87,B.BbJ]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.ASr));},_className:"Application::DryCowListScreen"};C.AOe={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AOe;this.Li.As(false);this.Li.
Aj(false);this.Li.Z(false);this.Jw.As(false);this.Jw.Aj(false);this.Jw.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APm={DX:function(G){C.Kv.DX.
call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(9));},_Init:function(
aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APm;},_className:"Application::HeaderDryCowListFilter"
};C.Aby={Filter:null,L4:null,AHi:A.jV,Er:0,AGp:1,Operator:1,Bl:function(aSize){C.
Acu.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(
Ae){C.Acu.Ai.call(this,Ae);this.L4.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Mj],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Mj],E,0);A.pe([this,this.Mj],this);},Mj:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.TA((F=this.Filter,F[1].call(
F[0])).DM(this.Er,this.Operator));else this.TA(null);},Nq:function(E){if(this.Er===
E)return;this.Er=E;A.pe([this,this.Mj],this);},TA:function(AI){if(!!AI){var A2z;
if(this.AGp!==1)A2z=this.AGp;else A2z=AI.Operator;this.T((this.AHi+CR)+A._GetAutoObject(
A.Device.Converter).A6Z(A2z));this.ZF(false);}else{this.T(this.AHi);this.ZF(true
);}},OV:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Mj],this);},AGa:function(E){if(this.AHi===E)return;this.AHi=E;A.pe([this,this.Mj
],this);},A_Q:function(E){if(this.AGp===E)return;this.AGp=E;A.pe([this,this.Mj],
this);},_Init:function(aArg){C.Acu._Init.call(this,aArg);C.L4._Init.call(this.L4={
I:this},0);this.__proto__=C.Aby;this.H(Atf);this.AW.H(BsG);this.L4.H(A0B);this.J5(
this.V,-1);this.J(this.L4,0);},_Done:function(){this.__proto__=C.Acu;this.L4._Done(
);C.Acu._Done.call(this);},_ReInit:function(){C.Acu._ReInit.call(this);this.L4._ReInit(
);},_Mark:function(D){var B;C.Acu._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.L4)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjL={L4:null,Ai:function(Ae){C.QI.
Ai.call(this,Ae);this.L4.L(this.V.AQ);},TA:function(AI){if(!!AI){this.H$.Cw(1);this.
ZF(true);this.L4.A_G(false);}else{this.H$.Cw(0);this.ZF(false);this.L4.A_G(true);
}},_Init:function(aArg){C.QI._Init.call(this,aArg);C.L4._Init.call(this.L4={I:this
},0);this.__proto__=C.AjL;this.Jh=20;this.L4.H(A0B);this.J(this.L4,0);},_Done:function(
){this.__proto__=C.QI;this.L4._Done();C.QI._Done.call(this);},_ReInit:function(){
C.QI._ReInit.call(this);this.L4._ReInit();},_Mark:function(D){var B;C.QI._Mark.call(
this,D);if((B=this.L4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.ACi={Q:null,CQ:function(){this.T(A._GetAutoObject(A.Device.Helper).Am2(this.
TableId,this.Er));},TA:function(AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H$.Cw(1);else this.H$.Cw(0);},Hg:function(G){A.pe([this,this.Mj],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hg],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)A.pe([this,this.Hg],this);},_Init:
function(aArg){C.QI._Init.call(this,aArg);this.__proto__=C.ACi;},_ReInit:function(
){C.QI._ReInit.call(this);this.CQ();},_Mark:function(D){var B;C.QI._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APP={Y0:null,Jd:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Y0={I:this},0);A.acg.Text._Init.call(this.Jd={I:this},0);this.__proto__=
C.APP;this.A_s(1);this.Y0.H(BsH);this.Y0.KX(true);this.Y0.R(A.aaR(A.acf.AEp));this.
Y0.L(A.jb.Text);this.Jd.H(Tg);this.Jd.R(((A.aaR(A.acf.RU)+Ba4)+A.aaR(A.acf.BaK))+
Pd);this.Jd.L(A.jb.Text);this.J(this.Y0,0);this.J(this.Jd,0);this.Y0.S(A.aaL(A.fl.
Ak));this.Jd.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.Y0._Done(
);this.Jd._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.call(this
);this.Y0._ReInit();this.Jd._ReInit();this.Y0.R(A.aaR(A.acf.AEp));this.Jd.R(((A.
aaR(A.acf.RU)+Ba4)+A.aaR(A.acf.BaK))+Pd);this.Y0.S(A.aaL(A.fl.Ak));this.Jd.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Y0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANn={Mr:null,KV:null,AdW:null,AP:null,A$:null
,Xx:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mr.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KV.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KV.M[2]-1,0,this.
KV.M[2]+1,aSize[1]]);this.AdW.H([this.KV.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KV.L(this.V.AQ);this.AdW.L(this.V.AQ);if(!!this.Xx&&(
this.Xx!==5)){this.Mr.L(A._GetAutoObject(A.acj.Assessment).Qv(this.Xx));this.V.L(
A._GetAutoObject(A.acj.Assessment).XG(this.Xx));}else this.Mr.L(this.Background.
AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Mn=this.AX.
CF(Ad,1);var A28=this.AX.CF(Ad,29);var Ph=this.AX.Hw(Ad,4);var LW=this.AX.Ja(Ad,
13);var AlM=this.AX.Ja(Ad,17);var AlV=this.AX.H7(Ad,11);this.Xx=A._GetAutoObject(
A.Device.Helper).AMy(LW,AlV,AlM);this.T(Mn.toFixed());this.KV.R(A28.toFixed());this.
AdW.R(A._GetAutoObject(A.acj.KR).ADc(Ph,A._GetAutoObject(A.Device.Helper).Dv(),BsI
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Mr={I:this},0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(
this.AdW={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.ANn;this.Mr.H(Atl);this.AP.L(A.jb.Bc);this.
A$.L(A.jb.Bc);this.J(this.Mr,-1);this.J(this.KV,0);this.J(this.AdW,0);this.J(this.
AP,0);this.J(this.A$,0);this.KV.S(A.aaL(A.fl.Af));this.AdW.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Mr._Done();this.KV._Done(
);this.AdW._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Mr._ReInit();this.KV._ReInit();this.AdW.
_ReInit();this.AP._ReInit();this.A$._ReInit();this.KV.S(A.aaL(A.fl.Af));this.AdW.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Mr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.R2={AJ5:0,Beo:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);if(this.Beo){this.
T(A.aaR(A.acf.AOc));this.KB(A.jV);}else{this.T(A.aaR(A.acf.Bku));if(this.AJ5>0)this.
KB(this.AJ5.toFixed());else this.KB(Xo);}},Ch:function(G){C.FA.Ch.call(this,G);this.
Beo=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlH=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlH>0)this.AJ5=A._GetAutoObject(A.Device.Helper).
Mf(AlH,A._GetAutoObject(A.Device.Helper).Dv());else this.AJ5=0;this.Am();},_Init:
function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.R2;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMD={ALJ:A.jV,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.RU));
this.KB(this.ALJ);},Ch:function(G){C.FA.Ch.call(this,G);var Ph=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALJ=A._GetAutoObject(A.acj.KR).ADc(Ph,A._GetAutoObject(
A.Device.Helper).Dv(),((((BsJ+A.aaR(A.acf.BhF))+BsK)+A.aaR(A.acf.BhE))+BsL)+A.aaR(
A.acf.AMb));this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=
C.AMD;this.ALJ=A.aaR(A.acf.Unknown);},_ReInit:function(){C.FA._ReInit.call(this);
this.ALJ=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AN9={Ul:null,Wx:null,WA:null,WC:null,SF:null,Init:function(aArg){this.Bb(this.
Ul);A.pe([this,this.MS],this);},Ady:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Np._Init.call(this.Ul={
I:this},0);C.Np._Init.call(this.Wx={I:this},0);C.Np._Init.call(this.WA={I:this},
0);C.Ab1._Init.call(this.WC={I:this},0);C.Ui._Init.call(this.SF={I:this},0);this.
__proto__=C.AN9;var B;this.Dr(C.APj);this.Ul.H(I1);this.Ul.Aj(true);this.Ul.T(A.
aaR(A.acf.ACO));this.Ul.Bi(false);this.Ul.Ns(83);this.Wx.H(Qg);this.Wx.Aj(true);
this.Wx.T(A.aaR(A.acf.Info));this.Wx.Bi(true);this.Wx.Ns(82);this.WA.H(Aan);this.
WA.Aj(true);this.WA.T(A.aaR(A.acf.AGT));this.WA.Bi(false);this.WA.Ns(64);this.WC.
H(Alk);this.WC.Aj(true);this.WC.T(A.aaR(A.acf.TempMeasurement));this.WC.Bi(true);
this.WC.Ns(60);this.SF.H(Aot);this.SF.Aj(true);this.SF.T(A.aaR(A.acf.AC9));this.
SF.Bi(false);this.J(this.Ul,-1);this.J(this.Wx,-1);this.J(this.WA,-1);this.J(this.
WC,-1);this.J(this.SF,-1);this.N.Ce=[this,this.Ady];this.N.Ct(A.aaL(A.ach.AD0));
this.Ul.AR=[B=this.Ul,B.Nv];this.Wx.AR=[B=this.Wx,B.Nv];this.WA.AR=[B=this.WA,B.
Nv];this.WC.AR=[B=this.WC,B.Nv];this.SF.AR=null;this.SF.Ab8([B=this.SF,B.Alp]);this.
SF.Gt([this,this.D_,this.GU]);this.SF.ATl([B=A._GetAutoObject(A.Device.Device),B.
ArG,B.Atu]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Ul._Done(
);this.Wx._Done();this.WA._Done();this.WC._Done();this.SF._Done();C.Ej._Done.call(
this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Ul._ReInit();this.Wx._ReInit(
);this.WA._ReInit();this.WC._ReInit();this.SF._ReInit();this.Ul.T(A.aaR(A.acf.ACO
));this.Wx.T(A.aaR(A.acf.Info));this.WA.T(A.aaR(A.acf.AGT));this.WC.T(A.aaR(A.acf.
TempMeasurement));this.SF.T(A.aaR(A.acf.AC9));},_Mark:function(D){var B;C.Ej._Mark.
call(this,D);if((B=this.Ul)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WC
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceMainScreen"};C.AN_={Uj:null,AbZ:null,Wy:null,Init:function(aArg
){this.Bb(this.Uj);},BzM:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).UpdateFirmware(
);},Bk9:function(G){if(A._GetAutoObject(A.Device.Device).Abc<=20)A._GetAutoObject(
A.Device.Device).AY(76,true,BsM,0,null);else A._GetAutoObject(A.Device.Device).AY(
39,true,A.jV,0,[this,this.BzM]);},_Init:function(aArg){C.Ej._Init.call(this,aArg
);C.Np._Init.call(this.Uj={I:this},0);C.Co._Init.call(this.AbZ={I:this},0);C.Ab1.
_Init.call(this.Wy={I:this},0);this.__proto__=C.AN_;var B;this.Dr(C.APk);this.Uj.
H(I1);this.Uj.Aj(true);this.Uj.T(A.aaR(A.acf.A59));this.Uj.Bi(false);this.Uj.Ns(
65);this.AbZ.H(Qg);this.AbZ.Aj(true);this.AbZ.T(A.aaR(A.acf.A61));this.AbZ.Bi(true
);this.Wy.H(Aan);this.Wy.Aj(true);this.Wy.T(A.aaR(A.acf.RangeTest));this.Wy.Bi(false
);this.Wy.Ns(15);this.J(this.Uj,-1);this.J(this.AbZ,-1);this.J(this.Wy,-1);this.
Uj.AR=[B=this.Uj,B.Nv];this.AbZ.AR=[this,this.Bk9];this.Wy.AR=[B=this.Wy,B.Nv];this.
Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Uj._Done();this.AbZ._Done(
);this.Wy._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.Uj._ReInit();this.AbZ._ReInit();this.Wy._ReInit();this.Uj.T(A.aaR(A.acf.A59
));this.AbZ.T(A.aaR(A.acf.A61));this.Wy.T(A.aaR(A.acf.RangeTest));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Uj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wy)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceServiceScreen"};C.APk={_Init:function(aArg){
C.Ku._Init.call(this,aArg);this.__proto__=C.APk;this.Text.R(A.aaR(A.acf.AGT));},
_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.AGT));},_className:
"Application::HeaderDeviceServiceMenu"};C.Np={Ni:null,Ai:function(Ae){C.Ab1.Ai.call(
this,Ae);this.Ni.L(this.V.AQ);},_Init:function(aArg){C.Ab1._Init.call(this,aArg);
A.acg.Ap._Init.call(this.Ni={I:this},0);this.__proto__=C.Np;this.Ni.A1(0x38);this.
Ni.H(BsN);this.J(this.Ni,0);this.V.Cr(A.aaL(A.fl.Bh));this.Ni.Ax(A.aaL(A.ach.Ajv
));},_Done:function(){this.__proto__=C.Ab1;this.Ni._Done();C.Ab1._Done.call(this
);},_ReInit:function(){C.Ab1._ReInit.call(this);this.Ni._ReInit();this.V.Cr(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Ab1._Mark.call(this,D);if((B=this.Ni)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"};C.AN5={Ahf:
null,Ahl:null,Ahn:null,Ahj:null,Aj$:null,Ahi:null,Ahh:null,Ahg:null,Aj9:null,Ahe:
null,Aj_:null,Ahm:null,Aka:null,Ahk:null,Akb:null,Init:function(aArg){this.Bb(this.
Ahf);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.PW._Init.call(this.Ahf={
I:this},0);C.PW._Init.call(this.Ahl={I:this},0);C.PW._Init.call(this.Ahn={I:this
},0);C.PW._Init.call(this.Ahj={I:this},0);C.PW._Init.call(this.Aj$={I:this},0);C.
PW._Init.call(this.Ahi={I:this},0);C.PW._Init.call(this.Ahh={I:this},0);C.PW._Init.
call(this.Ahg={I:this},0);C.PW._Init.call(this.Aj9={I:this},0);C.PW._Init.call(this.
Ahe={I:this},0);C.PW._Init.call(this.Aj_={I:this},0);C.PW._Init.call(this.Ahm={I:
this},0);C.PW._Init.call(this.Aka={I:this},0);C.PW._Init.call(this.Ahk={I:this},
0);C.PW._Init.call(this.Akb={I:this},0);this.__proto__=C.AN5;this.Dr(C.APf);this.
Ahf.H(Atq);this.Ahf.Aj(true);this.Ahf.SN(1);this.Ahl.H(A0y);this.Ahl.Aj(true);this.
Ahl.Bi(true);this.Ahl.SN(2);this.Ahn.H(Atn);this.Ahn.Aj(true);this.Ahn.Bi(false);
this.Ahn.SN(3);this.Ahj.H(Ato);this.Ahj.Aj(true);this.Ahj.Bi(true);this.Ahj.SN(4
);this.Aj$.H(AyB);this.Aj$.Aj(true);this.Aj$.SN(5);this.Ahi.H(BsO);this.Ahi.Aj(true
);this.Ahi.Bi(true);this.Ahi.SN(6);this.Ahh.H(Atp);this.Ahh.Aj(true);this.Ahh.Bi(
false);this.Ahh.SN(7);this.Ahg.H(AyM);this.Ahg.Aj(true);this.Ahg.Bi(true);this.Ahg.
SN(8);this.Aj9.H(A0z);this.Aj9.Aj(true);this.Aj9.SN(9);this.Ahe.H(AoB);this.Ahe.
Aj(true);this.Ahe.Bi(true);this.Ahe.SN(10);this.Aj_.H(BsP);this.Aj_.Aj(true);this.
Aj_.SN(11);this.Ahm.H(BsQ);this.Ahm.Aj(true);this.Ahm.Bi(true);this.Ahm.SN(12);this.
Aka.H(BsR);this.Aka.Aj(true);this.Aka.SN(13);this.Ahk.H(BsS);this.Ahk.Aj(true);this.
Ahk.Bi(true);this.Ahk.SN(14);this.Akb.H(BsT);this.Akb.Aj(true);this.Akb.SN(15);this.
J(this.Ahf,-1);this.J(this.Ahl,-1);this.J(this.Ahn,-1);this.J(this.Ahj,-1);this.
J(this.Aj$,-1);this.J(this.Ahi,-1);this.J(this.Ahh,-1);this.J(this.Ahg,-1);this.
J(this.Aj9,-1);this.J(this.Ahe,-1);this.J(this.Aj_,-1);this.J(this.Ahm,-1);this.
J(this.Aka,-1);this.J(this.Ahk,-1);this.J(this.Akb,-1);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.Ahf._Done();this.Ahl._Done();this.Ahn._Done();this.Ahj.
_Done();this.Aj$._Done();this.Ahi._Done();this.Ahh._Done();this.Ahg._Done();this.
Aj9._Done();this.Ahe._Done();this.Aj_._Done();this.Ahm._Done();this.Aka._Done();
this.Ahk._Done();this.Akb._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej.
_ReInit.call(this);this.Ahf._ReInit();this.Ahl._ReInit();this.Ahn._ReInit();this.
Ahj._ReInit();this.Aj$._ReInit();this.Ahi._ReInit();this.Ahh._ReInit();this.Ahg.
_ReInit();this.Aj9._ReInit();this.Ahe._ReInit();this.Aj_._ReInit();this.Ahm._ReInit(
);this.Aka._ReInit();this.Ahk._ReInit();this.Akb._ReInit();},_Mark:function(D){var
B;C.Ej._Mark.call(this,D);if((B=this.Ahf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ahl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahn)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ahj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ahg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aj9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahe)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aj_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aka)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Akb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.APf={_Init:function(aArg){C.Ku._Init.call(this
,aArg);this.__proto__=C.APf;this.Text.R(A.aaR(A.acf.A6y));},_ReInit:function(){C.
Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.A6y));},_className:"Application::HeaderDeviceCheck"
};C.PW={DeviceComponentToString:null,Kp:null,Au_:0,BcZ:false,CQ:function(){this.
V.R(this.DeviceComponentToString.BT(this.Au_));},Bl:function(aSize){var B;C.Co.Bl.
call(this,aSize);this.Kp.H(A.abM(this.Kp.M,aSize[0]-((B=this.Kp.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kp.M[0]));},Ai:function(Ae){C.Co.Ai.call(this,Ae);this.Kp.
AFg(this.V.AQ);if(this.BcZ)this.Kp.AwQ(A.jb.E1);else this.Kp.AwQ(A.jb.Gk);},SN:function(
E){if(this.Au_===E)return;this.Au_=E;this.T(this.DeviceComponentToString.BT(E));
this.DX(this);},DX:function(G){this.BcZ=A._GetAutoObject(A.Device.Device).AJW(this.
Au_);this.Am();},_Init:function(aArg){C.Co._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kp._Init.call(this.Kp={I:this
},0);this.__proto__=C.PW;this.V.H(BsU);this.V.A6(0x11);this.Kp.H(BsV);this.J(this.
Kp,0);},_Done:function(){this.__proto__=C.Co;this.DeviceComponentToString._Done(
);this.Kp._Done();C.Co._Done.call(this);},_ReInit:function(){C.Co._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kp._ReInit();this.CQ();},_Mark:function(
D){var B;C.Co._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sn={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAX],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALE(this);this.DK(this);},CC:function(G
){A.pe([this,this.MS],this);},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[
3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},AAX:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).A7d();A._GetAutoObject(A.Device.Device
).An.Bk(Bf);A.pe([this,this.MS],this);},Ew:function(G){A._GetAutoObject(C.A7).FB(
);},A38:function(G){A._GetAutoObject(C.A7).Cb(84);},DK:function(G){this.N.C3(A.aaL(
A.ach.E2));this.N.CE=[this,this.Ew];this.N.Ct(A.aaL(A.ach.ADZ));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Aro(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Ce=null;this.N.IS.CZ(100);}else{this.N.Ce=[this
,this.AAX];this.N.IS.CZ(255);}this.N.C4(A.aaL(A.ach.AeF));this.N.Ca=[this,this.A38
];},MS:function(s){this.DK(s);},ALE:function(G){A.ab5("%s",BsW);},BHf:function(s
){this.ALE(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sn;this.N.As(false);this.N.Z(true);this.Dr(C.
AbD);this.Ay.H(Ix);this.DY.A1(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(L9
);this.Y.JZ(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.Em=[this
,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOt={Yn:null,Ym:null,X$:null
,TR:null,DK:function(G){C.Sn.DK.call(this,G);if(this.AV===this.TR){this.N.Ct(null
);this.N.Ce=null;this.N.C4(null);this.N.Ca=null;}},ALE:function(G){if(this.AV===
this.TR)this.Dr(C.APq);else this.Dr(C.AbD);},Bz5:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQu);case 1:return A.
aaL(A.ach.AQv);default:A.ab5("%s%s",BsX,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},Bz6:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQw);case 1:return A.aaL(A.ach.AQx);default:
A.ab5("%s%s",AIX,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Il:function(G){var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Yn)A._GetAutoObject(C.A7).Cb(66);else if(Cy===this.Ym)A._GetAutoObject(C.A7).Cb(
56);else if(Cy===this.X$)A._GetAutoObject(C.A7).Cb(58);else if(Cy===this.TR)A._GetAutoObject(
C.A7).Cb(59);},_Init:function(aArg){C.Sn._Init.call(this,aArg);C.Fo._Init.call(this.
Yn={I:this},0);C.Fo._Init.call(this.Ym={I:this},0);C.Fo._Init.call(this.X$={I:this
},0);C.Fo._Init.call(this.TR={I:this},0);this.__proto__=C.AOt;this.Yn.H(Qe);this.
Yn.Aj(true);this.Yn.T(A.aaR(A.acf.Afz));this.Ym.H(J9);this.Ym.Aj(true);this.Ym.T(
A.aaR(A.acf.Temperature));this.X$.H(BsY);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.
Rating));this.TR.H(BsZ);this.TR.Aj(true);this.TR.T(A.aaR(A.acf.A8j));this.J(this.
Yn,0);this.J(this.Ym,0);this.J(this.X$,0);this.J(this.TR,0);this.Yn.AR=[this,this.
Il];this.Yn.DC(this.Bz6());this.Ym.AR=[this,this.Il];this.Ym.DC(this.Bz5());this.
X$.AR=[this,this.Il];this.X$.DC(A.aaL(A.ach.AQs));this.TR.AR=[this,this.Il];this.
TR.DC(A.aaL(A.ach.AQt));},_Done:function(){this.__proto__=C.Sn;this.Yn._Done();this.
Ym._Done();this.X$._Done();this.TR._Done();C.Sn._Done.call(this);},_ReInit:function(
){C.Sn._ReInit.call(this);this.Yn._ReInit();this.Ym._ReInit();this.X$._ReInit();
this.TR._ReInit();this.Yn.T(A.aaR(A.acf.Afz));this.Ym.T(A.aaR(A.acf.Temperature)
);this.X$.T(A.aaR(A.acf.Rating));this.TR.T(A.aaR(A.acf.A8j));},_Mark:function(D){
var B;C.Sn._Mark.call(this,D);if((B=this.Yn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ym)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOu={VU:null,Yb:null,Yo:null,ALE:function(G){this.Dr(C.AvF);},Bz9:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARg
);case 1:return A.aaL(A.ach.ARh);default:A.ab5("%s%s",AIX,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Il:function(G){var Cy=(C.Fo.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VU)A._GetAutoObject(C.A7).Cb(68);else if(Cy===
this.Yo)A._GetAutoObject(C.A7).Cb(57);else if(Cy===this.Yb)A._GetAutoObject(C.A7
).Cb(67);},Bz8:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AQf);case 1:return A.aaL(A.ach.AQg);default:A.ab5("%s%s",AIX
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},Bz_:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARi
);case 1:return A.aaL(A.ach.ARj);default:A.ab5("%s%s",AIX,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sn._Init.call(
this,aArg);C.Fo._Init.call(this.VU={I:this},0);C.Fo._Init.call(this.Yb={I:this},
0);C.Fo._Init.call(this.Yo={I:this},0);this.__proto__=C.AOu;this.VU.H(Qe);this.VU.
Aj(true);this.VU.T(A.aaR(A.acf.BaC));this.Yb.H(A0C);this.Yb.Aj(true);this.Yb.T(A.
aaR(A.acf.A5Z));this.Yo.H(Oh);this.Yo.Aj(true);this.Yo.T(A.aaR(A.acf.BaF));this.
J(this.VU,0);this.J(this.Yb,0);this.J(this.Yo,0);this.VU.AR=[this,this.Il];this.
VU.DC(this.Bz9());this.VU.Aca(A.aaL(A.ach.N1));this.Yb.AR=[this,this.Il];this.Yb.
DC(this.Bz8());this.Yo.AR=[this,this.Il];this.Yo.DC(this.Bz_());},_Done:function(
){this.__proto__=C.Sn;this.VU._Done();this.Yb._Done();this.Yo._Done();C.Sn._Done.
call(this);},_ReInit:function(){C.Sn._ReInit.call(this);this.VU._ReInit();this.Yb.
_ReInit();this.Yo._ReInit();this.VU.T(A.aaR(A.acf.BaC));this.Yb.T(A.aaR(A.acf.A5Z
));this.Yo.T(A.aaR(A.acf.BaF));},_Mark:function(D){var B;C.Sn._Mark.call(this,D);
if((B=this.VU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOx={Ber:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZY(0));},_Init:function(aArg){C.AqU._Init.call(this,aArg);this.
__proto__=C.AOx;this.Afa(A.aaR(A.acf.A8E));},_ReInit:function(){C.AqU._ReInit.call(
this);this.Afa(A.aaR(A.acf.A8E));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOq={Aim:null,AbG:null,UU:null,Aa8:null,Pt:null,Ajr:null,AgE:null,Ajs:null,AgF:
null,Ay:null,AaZ:null,Adf:0,ApB:0,DF:function(G){switch(this.Cq.CP){case 4:{if(this.
I$.Fq())return;var QE=this.Y.Br[1]+80;this.Y.Gc([this.Y.Br[0],QE]);this.Y.VG(null
,null);}break;case 5:{if(this.I$.Fq())return;var QE=this.Y.Br[1]-80;this.Y.Gc([this.
Y.Br[0],QE]);this.Y.VG(null,null);}break;default:C.FC.DF.call(this,G);}},Aqa:function(
L_,Ac0){if(!L_)return;var Fy=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(
A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,Ac0,true);Fy.CX(HZ);var Ada=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ada.Initialize(8,2,0,true);Fy.CX(Ada
);L_.Bk(Fy);},AiA:function(G){if(A._GetAutoObject(A.Device.Helper).W.Arp()){this.
Aim.OA(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azy=this.Bz3(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
AaZ.Set(Azy,this.AaZ.Get(Azy)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Adf++;this.ApB=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FC.AiA.call(
this,G);},Aaz:function(G){if(this.Adf>1)A._GetAutoObject(A.Device.Device).AY(56,
true,this.Adf.toFixed(),0,null);if(this.Adf===1)A._GetAutoObject(A.Device.Device
).AY(53,true,this.ApB.toFixed(),0,null);if(this.Aim.AZ>0)this.UU.T(((((((A._GetAutoObject(
A.Device.Converter).Aya(this.Aim.AjQ()|0,1)+AyU)+A._GetAutoObject(A.Device.Converter
).Aya(this.Aim.Aq5()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af8())+AyV)+this.Aim.AZ.
toFixed())+Pd);else this.UU.T(A.aaR(A.acf.Unknown));var RR=this.AaZ.Am3();var O;
for(O=0;O<this.AaZ.MM;O++){var Bd=this.BAm(O);if(!!Bd){var CB=this.AaZ.Get(O);Bd.
BmJ(CB);if(!RR)Bd.A_W(0);else Bd.A_W(Math.round((CB*100)/RR)|0);Bd.Bop(this.BAl(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adk=false;if(this.Aim.AZ>0)
Adk=true;this.I$.Z(!Adk);C.FC.Aaz.call(this,G);},Adr:function(G){this.Aim.Yp();this.
AaZ.E7();this.Adf=0;this.ApB=0;C.FC.Adr.call(this,G);},BAm:function(aIndex){var Bd=
null;switch(aIndex){case 0:Bd=this.Pt;break;case 1:Bd=this.Ajr;break;case 2:Bd=this.
AgE;break;case 3:Bd=this.Ajs;break;case 4:Bd=this.AgF;break;default:throw new Error(
AyW+aIndex.toFixed());}return Bd;},BAl:function(aIndex,AoP){var B;var TB=A.jV;switch(
AoP){case 0:{switch(aIndex){case 0:TB=Bs0;break;case 1:TB=Bs1;break;case 2:TB=Bs2;
break;case 3:TB=Bs3;break;case 4:TB=Bs4;break;default:throw new Error(AyW+aIndex.
toFixed());}TB=TB+(CR+A.aaR(A.acf.AAo));}break;case 1:{switch(aIndex){case 0:TB=
Bs5;break;case 1:TB=Bs6;break;case 2:TB=Bs7;break;case 3:TB=Bs8;break;case 4:TB=
Bs9;break;default:throw new Error(AyW+aIndex.toFixed());}TB=TB+(CR+A.aaR(A.acf.A71
));}break;default:A.ab5("%s%e",Ba5,AoP);}return TB;},Bz4:function(AJg,AoP){var Adb=
0;switch(AoP){case 0:switch(AJg){case 0:Adb=35000;break;case 1:Adb=40000;break;case
2:Adb=45000;break;case 3:Adb=50000;break;case 4:Adb=2147483647;break;default:throw new
Error(AyW+AJg.toFixed());}break;case 1:switch(AJg){case 0:Adb=36287;break;case 1:
Adb=40823;break;case 2:Adb=45359;break;case 3:Adb=49895;break;case 4:Adb=2147483647;
break;default:throw new Error(AyW+AJg.toFixed());}break;default:A.ab5("%s%e",Ba5
,AoP);}return Adb;},Bz3:function(A8,AoP){var Azy=0;var O;for(O=0;O<this.AaZ.MM;O++
)if(A8<this.Bz4(O,AoP)){Azy=O;break;}return Azy;},Fk:function(G){var B;this.Ay.MG((
B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[
1]);},_Init:function(aArg){C.FC._Init.call(this,aArg);C.AgC._Init.call(this.AbG={
I:this},0);C.IK._Init.call(this.UU={I:this},0);C.Aa8._Init.call(this.Aa8={I:this
},0);C.Pt._Init.call(this.Pt={I:this},0);C.Pt._Init.call(this.Ajr={I:this},0);C.
Pt._Init.call(this.AgE={I:this},0);C.Pt._Init.call(this.Ajs={I:this},0);C.Pt._Init.
call(this.AgF={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.AaZ={I:this},0);this.__proto__=C.AOq;this.Dr(C.AvF);this.AkA(A.aaR(
A.acf.A6Q));this.Afa(A.aaR(A.acf.A8x));this.AbG.H(Atq);this.AbG.Aj(true);this.AbG.
T(A.aaR(A.acf.A5O));this.AbG.Bi(false);this.AbG.Kz(5);this.UU.H(A0y);this.UU.Aj(
true);this.UU.T(A.jV);this.UU.Bi(true);this.UU.Kz(5);this.Aa8.H(Atn);this.Aa8.Aj(
true);this.Pt.H(Ato);this.Pt.Aj(true);this.Pt.Bi(true);this.Ajr.H(Atp);this.Ajr.
Aj(true);this.AgE.H(AyM);this.AgE.Aj(true);this.AgE.Bi(true);this.Ajs.H(A0z);this.
Ajs.Aj(true);this.AgF.H(AoB);this.AgF.Aj(true);this.AgF.Bi(true);this.Ay.H(Ix);this.
AaZ.ZG(5);this.J(this.AbG,-1);this.J(this.UU,-1);this.J(this.Aa8,-1);this.J(this.
Pt,-1);this.J(this.Ajr,-1);this.J(this.AgE,-1);this.J(this.Ajs,-1);this.J(this.AgF
,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fk];this.Aim=A._NewObject(C.AvY,0);
this.UU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FC;this.AbG._Done(
);this.UU._Done();this.Aa8._Done();this.Pt._Done();this.Ajr._Done();this.AgE._Done(
);this.Ajs._Done();this.AgF._Done();this.Ay._Done();this.AaZ._Done();C.FC._Done.
call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.AbG._ReInit();this.
UU._ReInit();this.Aa8._ReInit();this.Pt._ReInit();this.Ajr._ReInit();this.AgE._ReInit(
);this.Ajs._ReInit();this.AgF._ReInit();this.Ay._ReInit();this.AaZ._ReInit();this.
AkA(A.aaR(A.acf.A6Q));this.Afa(A.aaR(A.acf.A8x));this.AbG.T(A.aaR(A.acf.A5O));this.
UU.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.
Aim)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajs
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.Aa8={Ie:null,Gv:null
,Bl:function(aSize){C.IK.Bl.call(this,aSize);this.Ie.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gv.H([this.Ie.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IK.Ai.call(this,Ae);this.Ie.L(this.V.AQ);this.Gv.L(this.V.AQ);},_Init:
function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.Ie={I:this}
,0);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.Aa8;this.T(A.aaR(
A.acf.AHv));this.Ie.H(Bs_);this.Ie.KX(true);this.Ie.R(A.aaR(A.acf.AqH));this.Ie.
L(A.jb.Text);this.Gv.H(Ba6);this.Gv.R(AfK);this.Gv.L(A.jb.Text);this.J(this.Ie,0
);this.J(this.Gv,0);this.V.S(A.aaL(A.fl.HL));this.Ie.S(A.aaL(A.fl.HL));this.Gv.S(
A.aaL(A.fl.Kt));},_Done:function(){this.__proto__=C.IK;this.Ie._Done();this.Gv._Done(
);C.IK._Done.call(this);},_ReInit:function(){C.IK._ReInit.call(this);this.Ie._ReInit(
);this.Gv._ReInit();this.T(A.aaR(A.acf.AHv));this.Ie.R(A.aaR(A.acf.AqH));this.V.
S(A.aaL(A.fl.HL));this.Ie.S(A.aaL(A.fl.HL));this.Gv.S(A.aaL(A.fl.Kt));},_Mark:function(
D){var B;C.IK._Mark.call(this,D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"
};C.Pt={AP:null,A$:null,P7:null,Ie:null,Gv:null,BaE:A.jV,AqH:0,A$s:0,Bl:function(
aSize){C.IK.Bl.call(this,aSize);this.P7.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);
this.AP.H([this.P7.M[2]-1,0,this.P7.M[2]+1,aSize[1]]);this.Ie.H([this.P7.M[2],0,((
aSize[0]*75)/100)|0,aSize[1]]);this.A$.H([this.Ie.M[2]-1,0,this.Ie.M[2]+1,aSize[
1]]);this.Gv.H([this.Ie.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.IK.Ai.call(
this,Ae);this.P7.L(this.V.AQ);this.Ie.L(this.V.AQ);this.Gv.L(this.V.AQ);},Bop:function(
E){if(this.BaE===E)return;this.BaE=E;this.P7.R(E);},BmJ:function(E){if(this.AqH===
E)return;this.AqH=E;this.Ie.R(E.toFixed());},A_W:function(E){if(this.A$s===E)return;
this.A$s=E;this.Gv.R(E.toFixed()+As8);},_Init:function(aArg){C.IK._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.P7={I:this},0);A.acg.Text._Init.call(this.Ie={I:
this},0);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.Pt;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.P7.H(Bs$);this.P7.R(A.aaR(A.acf.AHv));this.P7.L(
A.jb.Text);this.Ie.R(U8);this.Ie.L(A.jb.Text);this.Gv.R(Bta);this.Gv.L(A.jb.Text
);this.J(this.AP,0);this.J(this.A$,0);this.J(this.P7,0);this.J(this.Ie,0);this.J(
this.Gv,0);this.P7.S(A.aaL(A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.
fl.Af));},_Done:function(){this.__proto__=C.IK;this.AP._Done();this.A$._Done();this.
P7._Done();this.Ie._Done();this.Gv._Done();C.IK._Done.call(this);},_ReInit:function(
){C.IK._ReInit.call(this);this.AP._ReInit();this.A$._ReInit();this.P7._ReInit();
this.Ie._ReInit();this.Gv._ReInit();this.P7.R(A.aaR(A.acf.AHv));this.P7.S(A.aaL(
A.fl.Af));this.Ie.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.IK._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"};C.AMP={AK6:
function(){var Bf=A._GetAutoObject(A.Device.Helper).MB();A._GetAutoObject(A.Device.
Device).An.Bk(Bf);},_Init:function(aArg){C.AmC._Init.call(this,aArg);this.__proto__=
C.AMP;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARW={R9:null,
Sd:null,R8:null,Sa:null,Pv:null,R$:null,ALB:function(G){A.pe([this,this.BDf],this
);A.pe([this,this.BC5],this);A.pe([this,this.BC1],this);A.pe([this,this.A43],this
);A.pe([this,this.BC8],this);A.pe([this,this.BC6],this);},Il:function(G){var Cy=(
C.Q0.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Sd)A._GetAutoObject(C.A7
).Cb(20);else if(Cy===this.Pv)A._GetAutoObject(C.A7).Cb(14);else if(Cy===this.R9
)A._GetAutoObject(C.A7).Cb(12);else if(Cy===this.Sa)A._GetAutoObject(C.A7).Cb(43
);else if(Cy===this.R8)A._GetAutoObject(C.A7).Cb(51);else if(Cy===this.R$)A._GetAutoObject(
C.A7).Cb(61);},BC5:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MB();var
AzF=A._NewObject(A.Device.BoolFilterCriterion,0);AzF.Initialize(9,0,true,true);Bf.
CX(AzF);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Pv.ZE(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},BDf:function(G){var Bf=A._GetAutoObject(A.
Device.Helper).MB();var ABQ=A._NewObject(A.Device.BoolFilterCriterion,0);ABQ.Initialize(
12,0,true,true);Bf.CX(ABQ);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Sd.ZE(
A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BC1:function(G){var Bf=A.
_GetAutoObject(A.Device.Helper).MB();var Azl=A._NewObject(A.Device.BoolFilterCriterion
,0);Azl.Initialize(8,0,true,true);Bf.CX(Azl);A._GetAutoObject(A.Device.Device).An.
Bk(Bf);this.R9.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},A43:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).A69(A._GetAutoObject(A.Device.Device
).ABW);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.R8.ZE(A._GetAutoObject(A.
Device.Device).An.B_().toFixed());},BC8:function(G){var Bf=A._GetAutoObject(A.Device.
Helper).A7g();A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Sa.ZE(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},BC6:function(G){var Bf=A._GetAutoObject(A.
Device.Helper).ADg();A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.R$.ZE(A._GetAutoObject(
A.Device.Device).An.B_().toFixed());},_Init:function(aArg){C.Ue._Init.call(this,
aArg);C.Q0._Init.call(this.R9={I:this},0);C.Q0._Init.call(this.Sd={I:this},0);C.
Q0._Init.call(this.R8={I:this},0);C.Q0._Init.call(this.Sa={I:this},0);C.Q0._Init.
call(this.Pv={I:this},0);C.Q0._Init.call(this.R$={I:this},0);this.__proto__=C.ARW;
this.R9.H(Qe);this.R9.Aj(true);this.R9.T(A.aaR(A.acf.Alarm));this.R9.Ab9(true);this.
Sd.H(A0C);this.Sd.Aj(true);this.Sd.T(A.aaR(A.acf.Asm));this.Sd.Ab9(true);this.R8.
H(Oh);this.R8.Aj(true);this.R8.T(A.aaR(A.acf.ActionList));this.R8.Ab9(true);this.
Sa.H(Qf);this.Sa.Aj(true);this.Sa.T(A.aaR(A.acf.AOU));this.Sa.Ab9(true);this.Pv.
H(Te);this.Pv.As(false);this.Pv.Aj(false);this.Pv.Z(false);this.Pv.T(A.aaR(A.acf.
ACB));this.Pv.Ab9(true);this.R$.H(U0);this.R$.Aj(true);this.R$.T(A.aaR(A.acf.A6L
));this.R$.Ab9(true);this.J(this.R9,-1);this.J(this.Sd,-1);this.J(this.R8,-1);this.
J(this.Sa,-1);this.J(this.Pv,-1);this.J(this.R$,-1);this.R9.AR=[this,this.AcX];this.
R9.DC(A.aaL(A.ach.ADQ));this.R9.Aca(A.aaL(A.ach.N1));this.Sd.AR=[this,this.AcX];
this.Sd.DC(A.aaL(A.ach.ARd));this.Sd.Aca(A.aaL(A.ach.N1));this.R8.AR=[this,this.
AcX];this.R8.DC(A.aaL(A.ach.AP1));this.R8.Aca(A.aaL(A.ach.N1));this.Sa.AR=[this,
this.AcX];this.Sa.DC(A.aaL(A.ach.AQz));this.Sa.Aca(A.aaL(A.ach.N1));this.Pv.AR=[
this,this.AcX];this.Pv.DC(A.aaL(A.ach.ADQ));this.Pv.Aca(A.aaL(A.ach.N1));this.R$.
AR=[this,this.AcX];this.R$.DC(A.aaL(A.ach.AQp));this.R$.Aca(A.aaL(A.ach.N1));},_Done:
function(){this.__proto__=C.Ue;this.R9._Done();this.Sd._Done();this.R8._Done();this.
Sa._Done();this.Pv._Done();this.R$._Done();C.Ue._Done.call(this);},_ReInit:function(
){C.Ue._ReInit.call(this);this.R9._ReInit();this.Sd._ReInit();this.R8._ReInit();
this.Sa._ReInit();this.Pv._ReInit();this.R$._ReInit();this.R9.T(A.aaR(A.acf.Alarm
));this.Sd.T(A.aaR(A.acf.Asm));this.R8.T(A.aaR(A.acf.ActionList));this.Sa.T(A.aaR(
A.acf.AOU));this.Pv.T(A.aaR(A.acf.ACB));this.R$.T(A.aaR(A.acf.A6L));},_Mark:function(
D){var B;C.Ue._Mark.call(this,D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ARV={Se:null,VT:null,Sb:null,R_:null,Sc:null,ALB:function(G){A.pe([this,this.
BC2],this);A.pe([this,this.BDa],this);A.pe([this,this.BDb],this);A.pe([this,this.
BDg],this);A.pe([this,this.BDc],this);},Il:function(G){var Cy=(C.Q0.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VT)A._GetAutoObject(C.A7).Cb(90);if(Cy===this.
R_)A._GetAutoObject(C.A7).Cb(74);if(Cy===this.Sb)A._GetAutoObject(C.A7).Cb(71);if(
Cy===this.Sc)A._GetAutoObject(C.A7).Cb(46);if(Cy===this.Se)A._GetAutoObject(C.A7
).Cb(85);},BDb:function(G){var Bf=A._GetAutoObject(A.Device.Helper).ADj();A._GetAutoObject(
A.Device.Device).An.Bk(Bf);this.Sc.ZE(A._GetAutoObject(A.Device.Device).An.B_().
toFixed());},BDg:function(G){var Bf=A._GetAutoObject(A.Device.Helper).A7r(Math.max(
A._GetAutoObject(A.Device.Device).Av6,A._GetAutoObject(A.Device.Helper).A7j(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Se.ZE(
A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BDa:function(G){var Bf=A.
_GetAutoObject(A.Device.Helper).A7m();A._GetAutoObject(A.Device.Device).An.Bk(Bf
);this.Sb.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BC2:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).AOV();A._GetAutoObject(A.Device.Device
).An.Bk(Bf);this.R_.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed());},BDc:
function(G){var Bf=A._GetAutoObject(A.Device.Helper).AvB();A._GetAutoObject(A.Device.
Device).An.Bk(Bf);this.VT.ZE(A._GetAutoObject(A.Device.Device).An.B_().toFixed()
);},_Init:function(aArg){C.Ue._Init.call(this,aArg);C.Q0._Init.call(this.Se={I:this
},0);C.Q0._Init.call(this.VT={I:this},0);C.Q0._Init.call(this.Sb={I:this},0);C.Q0.
_Init.call(this.R_={I:this},0);C.Q0._Init.call(this.Sc={I:this},0);this.__proto__=
C.ARV;this.Se.H(Btb);this.Se.Aj(true);this.Se.T(A.aaR(A.acf.A8p));this.Se.Ab9(true
);this.VT.H(Btc);this.VT.Aj(true);this.VT.T(A.aaR(A.acf.AGy));this.Sb.H(Btd);this.
Sb.Aj(true);this.Sb.T(A.aaR(A.acf.A8r));this.Sb.Ab9(true);this.R_.H(Bte);this.R_.
Aj(true);this.R_.T(A.aaR(A.acf.ACg));this.R_.Ab9(true);this.Sc.H(Btf);this.Sc.Aj(
true);this.Sc.T(A.aaR(A.acf.ASx));this.Sc.Ab9(true);this.J(this.Se,-1);this.J(this.
VT,-1);this.J(this.Sb,-1);this.J(this.R_,-1);this.J(this.Sc,-1);this.Se.AR=[this
,this.AcX];this.Se.DC(A.aaL(A.ach.AQR));this.Se.Aca(A.aaL(A.ach.N1));this.VT.AR=[
this,this.AcX];this.VT.DC(A.aaL(A.ach.AD6));this.Sb.AR=[this,this.AcX];this.Sb.DC(
A.aaL(A.ach.AQT));this.Sb.Aca(A.aaL(A.ach.N1));this.R_.AR=[this,this.AcX];this.R_.
DC(A.aaL(A.ach.AQk));this.R_.Aca(A.aaL(A.ach.N1));this.Sc.AR=[this,this.AcX];this.
Sc.DC(A.aaL(A.ach.AQV));this.Sc.Aca(A.aaL(A.ach.N1));},_Done:function(){this.__proto__=
C.Ue;this.Se._Done();this.VT._Done();this.Sb._Done();this.R_._Done();this.Sc._Done(
);C.Ue._Done.call(this);},_ReInit:function(){C.Ue._ReInit.call(this);this.Se._ReInit(
);this.VT._ReInit();this.Sb._ReInit();this.R_._ReInit();this.Sc._ReInit();this.Se.
T(A.aaR(A.acf.A8p));this.VT.T(A.aaR(A.acf.AGy));this.Sb.T(A.aaR(A.acf.A8r));this.
R_.T(A.aaR(A.acf.ACg));this.Sc.T(A.aaR(A.acf.ASx));},_Mark:function(D){var B;C.Ue.
_Mark.call(this,D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASv={WK:function(G){this.AgA(
);this.AMn();this.A5q(A.aaR(A.acf.A74),[this,this.Bn6],131072);this.A5q(A.aaR(A.
acf.A73),[this,this.Bn5],16384);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS
).Mp(A.aaR(A.acf.ARP)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DF:function(G){},AbB:function(){return C.AqD;},AbC:function(){return C.Aq_;}
,Rb:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A7m());},HS:function(G){C.M_.HS.call(this,G);if(this.Akj()===false){this.
N.Ct(A._GetAutoObject(A.Device.Converter).Ajt(A._GetAutoObject(A.Device.Converter
).AMi(this.L3.ADl())));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.N.OW(false
);this.N.OX(false);},Agm:function(){A._GetAutoObject(C.A7).Cb(72);},Bn5:function(
G){this.AGV(16384);},Bn6:function(G){this.AGV(131072);},_Init:function(aArg){C.M_.
_Init.call(this,aArg);this.__proto__=C.ASv;this.Dr(C.APE);this.Dl(A.aaR(A.acf.A8v
));this.ATE(A._GetAutoObject(C.Awb));},_ReInit:function(){C.M_._ReInit.call(this
);this.Dl(A.aaR(A.acf.A8v));},_className:"Application::NoNaisIdListScreen"};C.ASu={
_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.ASu;this.MD.As(
false);this.MD.Aj(false);this.MD.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APE={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad2(10));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=
C.APE;},_className:"Application::HeaderNoNaisIdListFilter"};C.AkR={OJ:null,Bgn:false
,CQ:function(){A.pe([this,this.AoG],this);},DF:function(G){},CC:function(G){C.GJ.
CC.call(this,G);if(this.Bgn&&(A._GetAutoObject(A.Device.Device).OZ>0))A.pe([this
,this.AI0],this);},Agj:function(G){this.A6I(this);},Agm:function(){A._GetAutoObject(
C.A7).Cb(73);},ASD:function(G){throw new Error(AoD);},Bbp:function(s){this.ASD(s
);},ASE:function(G){throw new Error(AoD);},Bbq:function(s){this.ASE(s);},ASI:function(
G){throw new Error(AoD);},AI0:function(s){this.ASI(s);},Bfz:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7)){this.
Bgn=true;A._GetAutoObject(C.A7).Cb(76);}},Agl:function(G){var B;var Ar=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===5))A.z$([this,this.
XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);},XM:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P8.Z8===3){A._GetAutoObject(A.Device.Device).AY(
74,false,A.jV,0,[this,this.Agl]);A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Vb],0);A.pe([this,this.AI0],this);}},AJV:function(){throw new Error(
AoD);},A8L:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A6H(this);},
BoE:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.BiW(this);},Hg:function(
G){},A_t:function(E){if(A.aaZ(this.OJ,E))return;if(!!this.OJ)A.z$([this,this.Hg]
,this.OJ,0);this.OJ=E;if(!!E)A.zX([this,this.Hg],E,0);if(!!E)A.pe([this,this.Hg]
,this);},Bha:function(G){var F,Cu;if(!this.OJ)return;(Cu=this.OJ,Cu[2].call(Cu[0
],!(F=this.OJ,F[1].call(F[0]))));},_Init:function(aArg){C.GJ._Init.call(this,aArg
);this.__proto__=C.AkR;this.Dl(A.aaR(A.acf.A8C));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8C));this.CQ();},_Mark:function(D){var B;C.GJ._Mark.
call(this,D);if((B=this.OJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::RegistrationsListScreen"};C.AUO={_Init:function(aArg){C.I_._Init.call(
this,aArg);this.__proto__=C.AUO;},_className:"Application::RegistrationsListFilterScreen"
};C.Aey={_Init:function(aArg){C.YB._Init.call(this,aArg);this.__proto__=C.Aey;this.
Text.H(Btg);this.Text.R(A.jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"
};C.ACn={Js:0,AP:null,A$:null,Ea:null,IQ:null,S4:null,Gz:null,Mn:0,Ld:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IQ.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A$.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1,aSize[
1]]);this.S4.H([this.IQ.M[2],0,this.IQ.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.S4.M[2]-1,0,this.S4.M[2]+1,aSize[1]]);this.Gz.H([this.S4.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IQ.L(this.V.AQ);this.
Gz.L(this.V.AQ);this.S4.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj8(this.
Ld)){this.V.S(A.aaL(A.fl.H6));this.T(Ba7);this.S4.R(Rt);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mn.toFixed());this.S4.R(A._GetAutoObject(A.Device.Helper).V5(this.
Js,0,5).toFixed());}},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX
){this.Mn=this.AX.CF(Ad,1);this.Ld=this.AX.AO9(Ad,34);var At2=this.AX.AO1(Ad,7);
this.Js=this.AX.KT(Ad,26);var Azs=this.AX.Hw(Ad,4);var AfV=A._GetAutoObject(A.Device.
Helper).Mf(Azs,A._GetAutoObject(A.Device.Helper).Dv());this.IQ.Ax(A._GetAutoObject(
A.Device.Converter).Am0(At2));if(AfV<100)this.Gz.R((AfV.toFixed()+CR)+A.aaR(A.acf.
AMb));else this.Gz.R(A._GetAutoObject(A.acj.KR).ADc(Azs,A._GetAutoObject(A.Device.
Helper).Dv(),AIE));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IQ={I:this},0);
A.acg.Text._Init.call(this.S4={I:this},0);C.CG._Init.call(this.Gz={I:this},0);this.
__proto__=C.ACn;this.AP.H(Aow);this.AP.L(A.jb.Bc);this.A$.H(Aox);this.A$.L(A.jb.
Bc);this.Ea.H(A0D);this.Ea.L(A.jb.Bc);this.IQ.H(Ba8);this.IQ.L(A.jb.Text);this.S4.
H(AyI);this.Gz.H(A0E);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
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
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADG={Aj5:
null,PH:null,Jb:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj5={I:this},0);A.acg.Ap._Init.call(this.PH={I:this},0);A.acg.Ap._Init.
call(this.Jb={I:this},0);this.__proto__=C.ADG;this.Aj5.H(Bth);this.Aj5.L(A.jb.Text
);this.PH.H(Bti);this.PH.L(A.jb.Text);this.Jb.H(BaZ);this.Jb.L(A.jb.Text);this.J(
this.Aj5,0);this.J(this.PH,0);this.J(this.Jb,0);this.Aj5.Ax(A.aaL(A.ach.AD2));this.
PH.Ax(A.aaL(A.ach.AvO));this.Jb.Ax(A.aaL(A.ach.AvJ));},_Done:function(){this.__proto__=
C.De;this.Aj5._Done();this.PH._Done();this.Jb._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.Aj5._ReInit();this.PH._ReInit();this.Jb.
_ReInit();},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Aj5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APG={IY:null,Ag4:null,HT:null,Bc:null,MK:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9A,B.A_0],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
WJ,B.J0],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.ArL,B.SP
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},Dg:function(E){C.BR.Dg.call(this,E);this.IY.L(E);this.Ag4.L(E);this.
HT.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HT.R(A.aaR(A.acf.Aff));else this.HT.R(((A.aaR(A.acf.GO)+A.aaR(A.acf.
Colon))+CR)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
Aq7()){this.Aw_(((A._GetAutoObject(A.Device.Helper).W.CL+1).toFixed()+AIU)+A._GetAutoObject(
A.Device.Device).An.B_().toFixed());this.J0(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nt(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Aw_(BaM);this.J0(2);
this.OnSetAnimalId(-1);this.Nt(0);}},J0:function(E){if(this.Gender===E)return;this.
Gender=E;this.Ag4.Ax(A._GetAutoObject(A.Device.Converter).Am0(E));},Aw_:function(
E){if(this.MK===E)return;this.MK=E;this.IY.R(E);},Nt:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj8(E))this.HT.
Z(false);else this.HT.Z(true);},_Init:function(aArg){C.BR._Init.call(this,aArg);
A.acg.Text._Init.call(this.IY={I:this},0);A.acg.Ap._Init.call(this.Ag4={I:this},
0);A.acg.Text._Init.call(this.HT={I:this},0);A.acg.C8._Init.call(this.Bc={I:this
},0);this.__proto__=C.APG;this.IY.H(BaN);this.IY.Ho(2);this.IY.KX(true);this.IY.
A6(0x12);this.IY.R(BaO);this.Ag4.H(Btj);this.HT.H(Btk);this.HT.A6(0x11);this.HT.
R(A.aaR(A.acf.Aff));this.Bc.DD(Aln);this.Bc.DN(AyO);this.Bc.L(A.jb.Bc);this.J(this.
IY,0);this.J(this.Ag4,0);this.J(this.HT,0);this.J(this.Bc,0);this.IY.S(A.aaL(A.fl.
Ak));this.Ag4.Ax(A._GetAutoObject(A.Device.Converter).Am0(2));this.HT.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.IY._Done();this.
Ag4._Done();this.HT._Done();this.Bc._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.IY._ReInit();this.Ag4._ReInit();this.HT._ReInit();
this.Bc._ReInit();this.HT.R(A.aaR(A.acf.Aff));this.IY.S(A.aaL(A.fl.Ak));this.HT.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.IY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aa$={EaseOfDeliveryToString:
null,AgW:null,Ch:function(G){C.NP.Ch.call(this,G);var AKc=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.KB(this.EaseOfDeliveryToString.LA(AKc));this.G4.R(
this.AgW.Aen(AKc).toFixed());},Dg:function(E){C.NP.Dg.call(this,E);this.G4.L(E);
},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgW._Init.call(this.
AgW={I:this},0);this.__proto__=C.Aa$;this.T(A.aaR(A.acf.AgN));},_Done:function(){
this.__proto__=C.NP;this.EaseOfDeliveryToString._Done();this.AgW._Done();C.NP._Done.
call(this);},_ReInit:function(){C.NP._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgW._ReInit();this.T(A.aaR(A.acf.AgN));},_Mark:function(D){var B;
C.NP._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.X1={WhereAboutsToString:null,K3:null,Ch:function(G){C.NP.Ch.call(this,G);var
Ld=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.KB(this.WhereAboutsToString.
LA(Ld));this.G4.R(this.K3.Aen(Ld).toFixed());},Dg:function(E){C.NP.Dg.call(this,
E);this.G4.L(E);},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.K3._Init.call(this.K3={
I:this},0);this.__proto__=C.X1;this.T(A.aaR(A.acf.Jm));},_Done:function(){this.__proto__=
C.NP;this.WhereAboutsToString._Done();this.K3._Done();C.NP._Done.call(this);},_ReInit:
function(){C.NP._ReInit.call(this);this.WhereAboutsToString._ReInit();this.K3._ReInit(
);this.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.NP._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K3)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R5={Cq:null,Y:null,Ay:null,Init:function(aArg){},CC:function(G){var B;C.D9.CC.
call(this,G);A.zX([this,this.AfL],[B=A._GetAutoObject(A.Device.Helper).W,B.Q7,B.
OnSetId],0);A.zX([this,this.AfL],[B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va]
,0);A.pe([this,this.AfL],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfL],[B=A._GetAutoObject(A.Device.Helper).W,B.Q7,B.OnSetId],0);A.z$([this
,this.AfL],[B=A._GetAutoObject(A.Device.Helper),B.U9,B.Va],0);},Fk:function(G){var
B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.
MH(-this.Y.Br[1]);},DF:function(G){switch(this.Cq.CP){case 6:case 7:this.Cq.Mw=true;
break;case 4:this.BgI(4);break;case 5:this.BgI(5);break;default:;}},BgI:function(
GA){var B;switch(GA){case 5:{var CD=this.Y.Br[1]-40;if(CD<-(((B=this.Y.Dd(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CD=-(((B=this.Y.Dd(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CD>0)CD=0;this.Y.Gc([this.Y.Br[0],CD]);}break;case 4:{var CD=this.Y.
Br[1]+40;if(CD>0)CD=0;this.Y.Gc([this.Y.Br[0],CD]);}break;default:throw new Error(
Btl);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I9.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ch(this
);}X=X.Ah;}},AfL:function(s){this.GH(s);},MZ:function(G){var B;this.Y.VG(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BF._Init.call(this.Cq={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R5;this.Cq.Filter=147;this.Y.H(U5);this.Y.JZ(1);this.Ay.H(As7
);this.J(this.Y,0);this.J(this.Ay,0);this.Cq.BG=[this,this.DF];this.Cq.D1=[this,
this.DF];this.Y.Em=[this,this.Fk];this.Init(aArg);},_Done:function(){this.__proto__=
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
true);this.Aa6.H(Qg);this.Aa6.Aj(true);this.XZ.H(Aan);this.XZ.Aj(true);this.XZ.Bi(
true);this.Aa$.H(Alk);this.Aa$.Aj(true);this.X1.H(Aot);this.X1.Aj(true);this.X1.
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
R(this.Na.Aen(Bv).toFixed());},Dg:function(E){C.IJ.Dg.call(this,E);this.G4.L(E);
},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G4={I:this},0);A.Device.
Na._Init.call(this.Na={I:this},0);this.__proto__=C.XZ;this.BU.H(Btm);this.G4.H(Btn
);this.G4.Ho(5);this.G4.A6(0x14);this.G4.R(Bto);this.G4.L(A.jb.Text);this.J(this.
G4,0);this.Hx.Ax(A.aaL(A.ach.ADU));this.G4.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IJ;this.BreedToString._Done();this.G4._Done();this.Na._Done();C.
IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.BreedToString.
_ReInit();this.G4._ReInit();this.Na._ReInit();this.G4.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.Aa6={
Ch:function(G){C.IJ.Ch.call(this,G);var AAA=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAA>0)this.T(A._GetAutoObject(A.Device.Converter).Rm(AAA));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IJ._Init.call(this,aArg);this.__proto__=
C.Aa6;this.Hx.Ax(A.aaL(A.ach.AQq));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XY={YG:null,Ch:function(G){C.IJ.Ch.call(this,G);var Ph=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var Af0=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Ph>
0)this.T(A._GetAutoObject(A.acj.KR).AjO(Ph));else this.T(A.aaR(A.acf.Unknown));var
Azu=A.aaL(A.aci.TW);switch(Af0){case 0:Azu=A.aaL(A.ach.ADS);break;case 1:{Azu=A.
aaL(A.ach.AvK);this.YG.Cw(0);}break;case 2:{Azu=A.aaL(A.ach.AvK);this.YG.Cw(1);}
break;case 3:{Azu=A.aaL(A.ach.AvK);this.YG.Cw(2);}break;default:A.ab5("%s%e",Btp
,Af0);}this.YG.Ax(Azu);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.YG={I:this},0);this.__proto__=C.XY;this.BU.H(Btq);this.YG.H(AH$);
this.YG.L(A.jb.Text);this.J(this.YG,0);this.Hx.Ax(A.aaL(A.ach.AvJ));this.YG.Ax(A.
aaL(A.ach.ADS));},_Done:function(){this.__proto__=C.IJ;this.YG._Done();C.IJ._Done.
call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.YG._ReInit();},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.Aa5={Js:0,X0:null,Ld:0
,Bl:function(aSize){C.IJ.Bl.call(this,aSize);this.X0.H(this.Hx.M);},Ai:function(
Ae){C.IJ.Ai.call(this,Ae);this.X0.L(this.BU.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj8(this.Ld)){this.T(A.aaR(A.acf.AnimalLoss));this.Hx.Z(false);this.X0.Z(true);
}else if(this.Js>0){this.T(A._GetAutoObject(A.Device.Converter).Rm(this.Js));this.
Hx.Z(true);this.X0.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hx.Z(true);this.
X0.Z(false);}},Ch:function(G){C.IJ.Ch.call(this,G);this.Js=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.Ld=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Text._Init.call(this.X0={
I:this},0);this.__proto__=C.Aa5;this.X0.R(Ba7);this.J(this.X0,0);this.Hx.Ax(A.aaL(
A.ach.AvO));this.X0.S(A.aaL(A.fl.H6));},_Done:function(){this.__proto__=C.IJ;this.
X0._Done();C.IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.
X0._ReInit();},_Mark:function(D){var B;C.IJ._Mark.call(this,D);if((B=this.X0)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMM={X2:null,Init:function(aArg){var B;A.zX([this,this.AAT],[B=A._GetAutoObject(
A.Device.Device),B.AET,B.AI4],0);A.pe([this,this.AAT],this);},DF:function(G){var
D5=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D5.CP){case 6:this.Ov(this);break;
case 7:this.M5(this);break;default:D5.Mw=true;}},CC:function(G){var B;this.X2.CC(
this);C.AB.CC.call(this,G);},E4:function(G){var B;this.X2.E4(this);C.AB.E4.call(
this,G);},Anu:function(G){A._GetAutoObject(C.A7).FB();},Ady:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},M5:function(G){if(A._GetAutoObject(A.Device.
Device).An.B_()<=1)return;var LJ=A._GetAutoObject(A.Device.Helper).W.CL;LJ=LJ+1;
if(LJ>=A._GetAutoObject(A.Device.Device).An.B_())LJ=0;A._GetAutoObject(A.Device.
Helper).GT(LJ);},Ov:function(G){if(A._GetAutoObject(A.Device.Device).An.B_()<=1)
return;var LJ=A._GetAutoObject(A.Device.Helper).W.CL;LJ=LJ-1;if(LJ<0)LJ=A._GetAutoObject(
A.Device.Device).An.B_()-1;A._GetAutoObject(A.Device.Helper).GT(LJ);},AAT:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqz)A._GetAutoObject(C.A7).Acf(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.X2._Init.call(this.X2={I:this},0);this.
__proto__=C.AMM;this.Background.H(Cf);this.N.Z(true);this.N.OW(true);this.N.OX(true
);this.Dr(C.APG);this.X2.H(Ff);this.J(this.X2,0);this.N.CE=[this,this.Anu];this.
N.Ce=[this,this.Ady];this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeG));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.X2._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.X2._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IJ={Hx:null,BU:null
,T:function(E){C.I9.T.call(this,E);this.BU.R(this.DL);},Dg:function(E){C.I9.Dg.call(
this,E);this.Hx.L(E);this.BU.L(E);},_Init:function(aArg){C.I9._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hx={I:this},0);C.CG._Init.call(this.BU={I:this},0);this.
__proto__=C.IJ;this.Hx.H(Btr);this.Hx.L(A.jb.Text);this.BU.H(Bts);this.BU.A6(0x11
);this.BU.L(A.jb.Text);this.J(this.Hx,0);this.J(this.BU,0);this.Hx.Ax(A.aaL(A.aci.
TW));this.BU.S(A.aaL(A.fl.Af));this.BU.A0(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I9;this.Hx._Done();this.BU._Done();C.I9._Done.call(this);},_ReInit:function(
){C.I9._ReInit.call(this);this.Hx._ReInit();this.BU._ReInit();this.BU.S(A.aaL(A.
fl.Af));this.BU.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I9._Mark.call(this
,D);if((B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I9={Background:null
,KY:0,Hm:false,CQ:function(){this.Ch(this);},Init:function(aArg){var B;A.zX([this
,this.Bca],[B=A._GetAutoObject(A.Device.Helper).W,B.Q7,B.OnSetId],0);A.pe([this,
this.Bca],this);},Bl:function(aSize){C.Hj.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hj.Ai.call(this,Ae);if(this.
Hm)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CJ);},Ch:function(G){}
,Bca:function(s){this.Ch(s);},Bi:function(E){if(this.Hm===E)return;this.Hm=E;this.
Am();},Dg:function(E){if(this.KY===E)return;this.KY=E;},_Init:function(aArg){C.Hj.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.I9;this.H(BD);this.Background.H(AIG);this.KY=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hj;this.Background._Done(
);C.Hj._Done.call(this);},_ReInit:function(){C.Hj._ReInit.call(this);this.Background.
_ReInit();this.CQ();},_Mark:function(D){var B;C.Hj._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NP={G4:null,BBP:function(G){this.BU.H(A.abN(this.BU.M,this.G4.M[0]));},_Init:
function(aArg){C.FA._Init.call(this,aArg);A.acg.Text._Init.call(this.G4={I:this}
,0);this.__proto__=C.NP;this.G4.A1(0xA);this.G4.H(Btt);this.G4.Ho(5);this.G4.Je(
true);this.G4.A6(0x14);this.G4.R(A.jV);this.G4.L(A.jb.Text);this.J(this.G4,0);this.
G4.Q_([this,this.BBP]);this.G4.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.FA;this.G4._Done();C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(
this);this.G4._ReInit();this.G4.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FA.
_Mark.call(this,D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axu={ARu:null,_Init:function(aArg){C.ZH._Init.call(this,aArg);this.__proto__=
C.Axu;},_Mark:function(D){var B;C.ZH._Mark.call(this,D);if((B=this.ARu)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANT={WI:null,W4:0,AwV:function(E){C.AmM.AwV.call(this,E);if(E)this.Px.R(Btu);
else this.Px.R(Ba9);},BnV:function(E){if(A.aaZ(this.WI,E))return;if(!!this.WI)A.
z$([this,this.A3W],this.WI,0);this.WI=E;if(!!E)A.zX([this,this.A3W],E,0);if(!!E)
A.pe([this,this.A3W],this);},AF7:function(E){var F;if(this.W4===E)return;this.W4=
E;this.AwV(!!this.WI&&((F=this.WI,F[1].call(F[0]))===E));},A3W:function(G){var F;
this.AwV(!!this.WI&&((F=this.WI,F[1].call(F[0]))===this.W4));},_Init:function(aArg
){C.AmM._Init.call(this,aArg);this.__proto__=C.ANT;this.Px.R(Ba9);this.Px.S(A.aaL(
A.fl.H6));},_Mark:function(D){var B;C.AmM._Mark.call(this,D);if((B=this.WI)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axw={WI:null,W4:0,_Init:function(aArg){C.ZH._Init.call(this,aArg);this.__proto__=
C.Axw;},_Mark:function(D){var B;C.ZH._Mark.call(this,D);if((B=this.WI)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUs={GQ:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Re._Init.call(
this.GQ={I:this},0);this.__proto__=C.AUs;var B;this.Jf(A.aaR(A.acf.AC4));this.GQ.
H(Ah2);this.GQ.Aj(true);this.GQ.Z(true);this.GQ.T(A.aaR(A.acf.AGw));this.GQ.Ar$(
false);this.GQ.A_X(true);this.J(this.GQ,0);this.GQ.Ab8([B=this.GQ,B.FW]);this.GQ.
Gt([this,this.D_,this.GU]);this.GQ.AkB(A.aaL(A.ach.Edit));this.GQ.Au([B=A._GetAutoObject(
A.Device.Device),B.AS3,B.A0Q]);},_Done:function(){this.__proto__=C.Cg;this.GQ._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.GQ._ReInit(
);this.Jf(A.aaR(A.acf.AC4));this.GQ.T(A.aaR(A.acf.AGw));},_Mark:function(D){var B;
C.Cg._Mark.call(this,D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.AUq={GI:0,C9:null,AW:null,Kw:null,Fb:null
,GermanStateToString:null,CountryToString:null,PE:0,Lf:0,Mh:false,Init:function(
aArg){A.zX([this,this.MS],[this,this.SJ,this.Lu],0);A.zX([this,this.MS],[this,this.
Anx,this.Ahw],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.AW.FP(this.LX);this.
Kw.FP(this.LX);this.Fb.CV(this.LX);},DK:function(G){var F;if(!this.N)return;switch(
this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=
this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[
1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[
0])).CS(this.CountryToString.BT(this.Lf));(F=this.N,F[1].call(F[0])).Ca=null;}break;
case 2:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])
).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0]
)).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(
F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS((A.aaR(A.acf.EN
)+Ayl)+this.GermanStateToString.LA(A._GetAutoObject(A.Device.Converter).ADd(this.
PE)));(F=this.N,F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0
])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(
null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}}
,Ex:function(EO){var Tw=this.A_;if(EO<0)EO=0;else if(EO>this.RO)EO=this.RO;switch(
EO){case 0:{this.Bb(null);if(!this.GI&&!this.PE)this.Lu(0);}break;case 1:this.Bb(
this.Fb);break;case 2:this.Bb(this.Kw);break;case 3:if(((Tw===2)&&!this.PE)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Tw>0))this.AW.SV(2);else this.AW.SV(
7);}break;default:throw new Error(Att+EO.toFixed());}this.A_=EO;C.El.Ex.call(this
,EO);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mh=true;this.SM(A._GetAutoObject(
A.Device.Helper).V5(E,0,10));this.Ahw(A._GetAutoObject(A.Device.Helper).V5(E,10,
2)|0);this.Lu(A._GetAutoObject(A.Device.Converter).S8(E));this.Mh=false;if(!!this.
AM){this.Kw.Kz(2);this.AW.Kz(10);}else{this.Kw.Kz(0);this.AW.Kz(0);}this.Am();},
FW:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADp());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RO);},AjP:function(){return this.GI;
},AjR:function(){return 9999999999;},Lu:function(E){if(this.Lf===E)return;this.Lf=
E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.SJ,this.Lu],0);}
,SM:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false)A.pe([this,this.
Vw],this);A.abo([this,this.Ab6,this.SM],0);},Vw:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).AqI(this.Lf),3,10)+A.abl(this.PE,2,10))+
A.abm(this.GI,10,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahw:function(
E){if(this.PE===E)return;this.PE=E;if(this.Mh===false)A.pe([this,this.Vw],this);
A.abo([this,this.Anx,this.Ahw],0);},SJ:function(){return this.Lf;},Ab6:function(
){return this.GI;},Anx:function(){return this.PE;},_Init:function(aArg){C.El._Init.
call(this,aArg);C.C9._Init.call(this.C9={I:this},0);C.ARo._Init.call(this.AW={I:
this},0);C.AvW._Init.call(this.Kw={I:this},0);C.AsS._Init.call(this.Fb={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AUq;var B;this.RO=3;this.AW.H(Btv);this.Kw.H(Btw);this.Kw.EV(16);this.Fb.H(Ba_
);this.J(this.AW,0);this.J(this.Kw,0);this.J(this.Fb,0);this.C9.AFn([this,this.SJ
,this.Lu]);this.AW.Au([this,this.Ab6,this.SM]);this.Kw.Au([this,this.Anx,this.Ahw
]);this.Fb.CK(this.C9);this.Fb.Au([B=this.C9,B.B$,B.Cc]);this.Init(aArg);},_Done:
function(){this.__proto__=C.El;this.C9._Done();this.AW._Done();this.Kw._Done();this.
Fb._Done();this.GermanStateToString._Done();this.CountryToString._Done();C.El._Done.
call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit();this.AW.
_ReInit();this.Kw._ReInit();this.Fb._ReInit();this.GermanStateToString._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.ARo={NT:null,NS:null,ET:null,F0:null,Eq:null,Dz:null,CW:null,Cv:null,FP:function(
E){if(this.Ne===E)return;C.Ll.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);this.Dz.
CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);this.NS.CV(E);this.NT.CV(E);},Yz:
function(HB){var B6=null;switch(HB){case-1:case 0:B6=this.F_;break;case 1:B6=this.
Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;
case 5:B6=this.F0;break;case 6:B6=this.ET;break;case 7:B6=this.NS;break;case 8:B6=
this.NT;break;case 9:B6=this.G3;break;default:A.ab5("%s",Ah6);}return B6;},_Init:
function(aArg){C.Ll._Init.call(this,aArg);C.DG._Init.call(this.NT={I:this},0);C.
DG._Init.call(this.NS={I:this},0);C.DG._Init.call(this.ET={I:this},0);C.DG._Init.
call(this.F0={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(this.
Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.ARo;this.H(Btx);this.G3.H(AIV);this.NT.H(AyT);this.NS.H(A0q
);this.ET.H(A0r);this.F0.H(A0s);this.Eq.H(A0t);this.Dz.H(A0u);this.CW.H(A0v);this.
Cv.H(BaU);this.F_.H(A0w);this.EM.H(A0w);this.J(this.NT,-2);this.J(this.NS,-2);this.
J(this.ET,-2);this.J(this.F0,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.
CW,-2);this.J(this.Cv,-2);this.NT.Dk=[this,this.GZ];this.NS.Dk=[this,this.GZ];this.
ET.Dk=[this,this.GZ];this.F0.Dk=[this,this.GZ];this.Eq.Dk=[this,this.GZ];this.Dz.
Dk=[this,this.GZ];this.CW.Dk=[this,this.GZ];this.Cv.Dk=[this,this.GZ];},_Done:function(
){this.__proto__=C.Ll;this.NT._Done();this.NS._Done();this.ET._Done();this.F0._Done(
);this.Eq._Done();this.Dz._Done();this.CW._Done();this.Cv._Done();C.Ll._Done.call(
this);},_ReInit:function(){C.Ll._ReInit.call(this);this.NT._ReInit();this.NS._ReInit(
);this.ET._ReInit();this.F0._ReInit();this.Eq._ReInit();this.Dz._ReInit();this.CW.
_ReInit();this.Cv._ReInit();},_Mark:function(D){var B;C.Ll._Mark.call(this,D);if((
B=this.NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUr={
GI:0,C9:null,AW:null,Fb:null,CountryToString:null,Lf:0,Mh:false,Init:function(aArg
){A.zX([this,this.MS],[this,this.SJ,this.Lu],0);},Ai:function(Ae){C.El.Ai.call(this
,Ae);this.AW.FP(this.LX);this.Fb.CV(this.LX);},DK:function(G){var F;if(!this.N)return;
switch(this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.
He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(this.CountryToString.BT(this.Lf));(F=this.N,F[1].call(F[0])).Ca=null;}
break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(
F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Tw=this.A_;if(EO<0)EO=0;
else if(EO>this.RO)EO=this.RO;switch(EO){case 0:{this.Bb(null);if(!this.GI)this.
Lu(0);}break;case 1:this.Bb(this.Fb);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Tw>0))this.AW.SV(2);else this.AW.SV(7);}break;default:throw new Error(Att+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,EO);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.Mh=true;this.SM(A._GetAutoObject(A.Device.Helper).V5(E,0,12));this.Lu(
A._GetAutoObject(A.Device.Converter).S8(E));this.Mh=false;if(!!this.AM)this.AW.Kz(
12);else this.AW.Kz(0);this.Am();},FW:function(G){var F;if(!this.AM){var BP=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ADp());if(this.AM!==BP){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RO);},AjP:function(
){return this.GI;},AjR:function(){return 999999999999;},Lu:function(E){if(this.Lf===
E)return;this.Lf=E;if(this.Mh===false)A.pe([this,this.Vw],this);A.abo([this,this.
SJ,this.Lu],0);},SM:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false
)A.pe([this,this.Vw],this);A.abo([this,this.Ab6,this.SM],0);},Vw:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).AqI(this.Lf),3,10)+A.abm(
this.GI,12,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SJ:function(){return this.
Lf;},Ab6:function(){return this.GI;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.AD_._Init.call(this.AW={I:this},0);C.AsS.
_Init.call(this.Fb={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUr;var B;this.RO=2;this.AW.H(Bty);this.Fb.H(Ba_);this.
J(this.AW,0);this.J(this.Fb,0);this.C9.AFn([this,this.SJ,this.Lu]);this.AW.Au([this
,this.Ab6,this.SM]);this.Fb.CK(this.C9);this.Fb.Au([B=this.C9,B.B$,B.Cc]);this.Init(
aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done();this.AW._Done();this.
Fb._Done();this.CountryToString._Done();C.El._Done.call(this);},_ReInit:function(
){C.El._ReInit.call(this);this.C9._ReInit();this.AW._ReInit();this.Fb._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,Yh:null,Yi:null,Yg:null,Ye:null,Yf:null,DF:function(
G){var B;C.AB.DF.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkS();A._GetAutoObject(A.Device.Helper).AsA();},Il:function(G){
var Cy=(C.Fo.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Yh)A._GetAutoObject(
C.A7).Cb(28);else if(Cy===this.Yi)A._GetAutoObject(C.A7).Cb(26);else if(Cy===this.
Yg)A._GetAutoObject(C.A7).Cb(54);else if(Cy===this.Ye)A._GetAutoObject(C.A7).Cb(
27);else if(Cy===this.Yf)A._GetAutoObject(C.A7).Cb(78);},A30:function(G){A._GetAutoObject(
C.A7).FB();},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.
MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fo._Init.call(this.Yh={I:this
},0);C.Fo._Init.call(this.Yi={I:this},0);C.Fo._Init.call(this.Yg={I:this},0);C.Fo.
_Init.call(this.Ye={I:this},0);C.Fo._Init.call(this.Yf={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Ek.As(false
);this.Dr(C.Aq9);this.DY.A1(0x3F);this.DY.H(Ff);this.DY.L(A.jb.CJ);this.Y.H(Ff);
this.Y.JZ(9);this.Ay.H(Ix);this.Yh.H(Qe);this.Yh.Aj(true);this.Yh.T(A.aaR(A.acf.
A8n));this.Yi.H(A0C);this.Yi.Aj(true);this.Yi.T(A.aaR(A.acf.NewAnimals));this.Yg.
H(Oh);this.Yg.Aj(true);this.Yg.T(A.aaR(A.acf.Calving));this.Ye.H(Qf);this.Ye.Aj(
true);this.Ye.T(A.aaR(A.acf.ACl));this.Yf.H(MQ);this.Yf.Aj(true);this.Yf.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Yh,0);this.J(this.Yi,0);this.J(this.Yg,0);this.J(this.Ye,0);this.J(this.Yf,0);this.
N.CE=[this,this.A30];this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fk];this.Yh.
AR=[this,this.Il];this.Yh.DC(A.aaL(A.ach.AD3));this.Yi.AR=[this,this.Il];this.Yi.
DC(A.aaL(A.ach.AvS));this.Yg.AR=[this,this.Il];this.Yg.DC(A.aaL(A.ach.AQj));this.
Ye.AR=[this,this.Il];this.Ye.DC(A.aaL(A.ach.AQe));this.Yf.AR=[this,this.Il];this.
Yf.DC(A.aaL(A.ach.AP9));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.Yh._Done();this.Yi._Done();this.Yg._Done();this.Ye.
_Done();this.Yf._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Yh._ReInit(
);this.Yi._ReInit();this.Yg._ReInit();this.Ye._ReInit();this.Yf._ReInit();this.Yh.
T(A.aaR(A.acf.A8n));this.Yi.T(A.aaR(A.acf.NewAnimals));this.Yg.T(A.aaR(A.acf.Calving
));this.Ye.T(A.aaR(A.acf.ACl));this.Yf.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ye)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ASl={K_:null,EaseOfDelivery:null,BirthType:null,AcP:null
,Lp:null,Cn:null,G8:null,Ln:null,Az3:true,Init:function(aArg){this.Bb(this.Db);A.
pe([this,this.GH],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E7();A._GetAutoObject(C.A7).FB();if(!!this.K_)this.K_.Ew(this);},Agk:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.B0.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwW(true);if(!!this.K_)this.K_.Agk(this
);if(A._GetAutoObject(A.Device.Device).An.Lm())A._GetAutoObject(A.Device.Helper).
AKz(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApN]);else{this.Ai3();A.
pe([this,this.Ap$],this);}},Auu:function(){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.
AD7));this.N.Ca=[this,this.Ay9];},CC:function(G){var B;C.H3.CC.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Lm()){A._GetAutoObject(A.Device.Device).AY(41
,true,A._GetAutoObject(A.Device.Device).An.HM().toFixed(),0,null);this.Ew(this);
}else if(this.Az3){this.Az3=false;A.pe([this,this.A4d],this);}else if(!this.K_){
this.K_=A._NewObject(C.ASm,0);this.K_.A_q([this,this.ABf]);A._GetAutoObject(A.Device.
Helper).W.Gs();A._GetAutoObject(A.Device.Helper).Aqp(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nt(this.As4.Aen(6));this.K_.LU(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},Ai3:function(
){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var
Md=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SW(Md);if(A._GetAutoObject(A.Device.Helper
).Am$()){if(A._GetAutoObject(A.Device.Device).Bt.Lm())A._GetAutoObject(A.Device.
Device).AY(50,true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),0,null);else{
var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A7s(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap$:function(G){var B;if(!!this.K_)this.K_.Ap$(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am$())this.C$.Z(true);else this.C$.Z(false);},
ApN:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;
switch(Ar.Id){case 41:break;default:A.ab5("%s%e",Ati,Ar.Id);}},ABf:function(G){this.
LU(this);this.Ae0(A._GetAutoObject(A.Device.Helper).Abz(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JN(this.Db);},ApO:function(G){var F;C.H3.ApO.call(this
,G);(F=this.C$.Q,F[2].call(F[0],this.C$.An3));},A4d:function(G){A._GetAutoObject(
C.A7).Cb(79);},_Init:function(aArg){C.H3._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcP._Init.call(this.AcP={I:this},0);C.Re._Init.call(this.Lp={I:this
},0);C.SX._Init.call(this.Cn={I:this},0);C.BX._Init.call(this.G8={I:this},0);C.BX.
_Init.call(this.Ln={I:this},0);this.__proto__=C.ASl;var B;this.Dr(C.APD);this.Lp.
H(Ah2);this.Lp.Aj(true);this.Lp.T(A.aaR(A.acf.ACL));this.CH.H(AcU);this.Cn.H(AcU
);this.Cn.Aj(true);this.Cn.T(A.aaR(A.acf.Aei));this.Cn.AFZ(true);this.G8.H(AcU);
this.G8.Aj(true);this.G8.T(A.aaR(A.acf.ArA));this.Ln.H(AcU);this.Ln.Aj(true);this.
Ln.T(A.aaR(A.acf.AgN));this.J(this.Lp,-5);this.J(this.Cn,-3);this.J(this.G8,-1);
this.J(this.Ln,-1);this.EaseOfDelivery.L6(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.L6(A._GetAutoObject(A.Device.Helper).W);this.AcP.L6(A._GetAutoObject(A.
Device.Helper).W);this.Lp.Gt([this,this.D_,this.GU]);this.Lp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ASZ,B.AnL]);this.Cn.Gt([this,this.D_,this.GU]);this.Cn.L5([
B=this.Cn,B.FW]);this.Cn.L8(A.aaL(A.ach.Edit));this.Cn.Acc([B=A._GetAutoObject(A.
Device.Helper).W,B.Awj,B.Q9]);this.Go.Au([B=this.AcP,B.B$,B.Cc]);this.Go.CK(this.
AcP);this.G8.Au([B=this.BirthType,B.B$,B.Cc]);this.G8.CK(this.BirthType);this.Ln.
Au([B=this.EaseOfDelivery,B.B$,B.Cc]);this.Ln.CK(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.H3;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcP._Done();this.Lp._Done();this.Cn._Done();this.G8._Done();this.Ln.
_Done();C.H3._Done.call(this);},_ReInit:function(){C.H3._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcP._ReInit();this.Lp._ReInit(
);this.Cn._ReInit();this.G8._ReInit();this.Ln._ReInit();this.Lp.T(A.aaR(A.acf.ACL
));this.Cn.T(A.aaR(A.acf.Aei));this.G8.T(A.aaR(A.acf.ArA));this.Ln.T(A.aaR(A.acf.
AgN));},_Mark:function(D){var B;C.H3._Mark.call(this,D);if((B=this.K_)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcP)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ln)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMO={Init:function(aArg){var B;A.zX([this,this.ALD],[B=A._GetAutoObject(A.Device.
Device),B.AE0,B.AI9],0);A.pe([this,this.ALD],this);},AK6:function(){var Bf=null;
switch(A._GetAutoObject(A.Device.Device).Ab2){case 0:Bf=A._GetAutoObject(A.Device.
Helper).ADg();break;case 1:Bf=A._GetAutoObject(A.Device.Helper).AOX();break;case
2:Bf=A._GetAutoObject(A.Device.Helper).MB();break;default:throw new Error(A0F+A.
_GetAutoObject(A.Device.Device).Ab2.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Bf);},ALD:function(G){switch(A._GetAutoObject(A.Device.Device).Ab2){case
0:this.Dl(A.aaR(A.acf.ASr));break;case 1:this.Dl(A.aaR(A.acf.BkY));break;case 2:
this.Dl(A.aaR(A.acf.Awa));break;default:A.ab5("%s",A0F+A._GetAutoObject(A.Device.
Device).Ab2.toFixed());}},_Init:function(aArg){C.AmC._Init.call(this,aArg);this.
__proto__=C.AMO;this.BnN(C.APT);this.Ek.Ab_(A._NewObject(C.API,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ASm={AAA:0,Adl:null
,Au8:null,BeO:0,A4r:0,A3l:0,Init:function(aArg){this.BeO=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adl=A._GetAutoObject(A.Device.Device).An.Filter;this.AAA=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A3l=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LU:function(G){A._GetAutoObject(A.Device.Helper).W.AnL(this.AAA);A._GetAutoObject(
A.Device.Helper).W.Ae8(true);switch(this.A3l){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AyQ,this.A3l);}},Ew:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adl);if(!!this.A4r)this.Bhn();},Agk:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bhn:function(){var At9=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LZ(0,this.BeO);At9.E3(Ad,A._GetAutoObject(
A.Device.Device).An);At9.AwI(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At9.
Ar4(false);At9.AwX(At9.LactationNumber+1);At9.Ci(A._GetAutoObject(A.Device.Device
).An);},Ap$:function(G){this.A4r++;var ByW=A._GetAutoObject(A.Device.Converter).
Bh7(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A4r<ByW)&&(A._GetAutoObject(
A.Device.Helper).Aj8(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).AY(59,true,A.jV,0,[this,this.Vr]);else this.BdL(
this);},Vr:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&(Ar.PopupState===8))this.BdL(this);else if(!!Ar&&(Ar.PopupState===7))this.
ABf(this);},ABf:function(G){var B;var Ih=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var Af0=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Ph=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AKc=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Au8)(B=this.Au8
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(Ih);A._GetAutoObject(
A.Device.Helper).W.Akx(Af0);A._GetAutoObject(A.Device.Helper).W.N7(Bv);A._GetAutoObject(
A.Device.Helper).W.Q9(Ph);A._GetAutoObject(A.Device.Helper).W.Akz(AKc);},BdL:function(
G){this.Bhn();A._GetAutoObject(C.A7).FB();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adl);},A_q:function(E){if(A.aa0(this.Au8,E))return;this.Au8=E;},_Init:function(
aArg){this.__proto__=C.ASm;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adl)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au8)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AM4={Init:function(aArg){
var B;A.zX([this,this.Be$],[B=A._GetAutoObject(A.Device.Device),B.ASJ,B.A0G],0);
this.Be$(this);},Ci:function(){A.ab5("%s",Btz);},E3:function(AcZ){C.VF.E3.call(this
,AcZ);var O;for(O=16;O>0;O--)this.Ig.Set(O,this.Ig.Get(O-1));this.Ig.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",BtA);},AEc:function(Eh){switch(Eh){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Be$:
function(G){this.E3(A._GetAutoObject(A.Device.Device).AuN);A.we(this,0);},_Init:
function(aArg){C.VF._Init.call(this,aArg);this.__proto__=C.AM4;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.Au1={_Init:function(){C.
AM4._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JQ={C8:null,V:null,A8g:true,T:function(E){C.I9.T.call(this,E);this.
V.R(E);},Dg:function(E){C.I9.Dg.call(this,E);this.V.L(E);},BnS:function(E){if(this.
A8g===E)return;this.A8g=E;this.C8.Z(E);},_Init:function(aArg){C.I9._Init.call(this
,aArg);A.acg.C8._Init.call(this.C8={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JQ;this.C8.DD(BtB);this.C8.DN(BtC);this.C8.L(A.jb.Bc);this.V.
A1(0x3F);this.V.H(BtD);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C8,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.HL));this.V.Cr(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I9;this.C8._Done();this.V._Done();C.
I9._Done.call(this);},_ReInit:function(){C.I9._ReInit.call(this);this.C8._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kt));this.V.A0(A.aaL(A.fl.HL));this.V.Cr(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I9._Mark.call(this,D);if((B=this.C8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.API={Ag1:null,Df:null,Abx:null,Fm:null,Fc:
null,Init:function(aArg){var B;A.zX([this,this.A45],[B=A._GetAutoObject(A.Device.
Device),B.AE0,B.AI9],0);A.pe([this,this.A45],this);},Dg:function(E){C.YC.Dg.call(
this,E);this.Df.L(E);},AE6:function(G){A.pe([this,this.A45],this);},ABh:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).Fa();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DM(1,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C5:function(G){var B;var F;C.YC.C5.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Df.Ax(A.aaL(A.ach.AjX));return;}var BzC=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DM(38,0)
)?B:null);var Bcl=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DM(14,0))?B:null);if(!!BzC)this.Df.Ax(A.aaL(A.ach.ADv));else if(
!!Bcl&&(Bcl.A5===1))this.Df.Ax(A.aaL(A.ach.AQl));else this.Df.Ax(A.aaL(A.ach.AjX
));},A45:function(G){var F;var Filter=null;var AOL;switch(A._GetAutoObject(A.Device.
Device).Ab2){case 0:Filter=A._GetAutoObject(A.Device.Helper).ADg();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOX();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).MB();break;default:throw new Error(A0F+A._GetAutoObject(A.Device.
Device).Ab2.toFixed());}var Ai7=this.Akr();if(Ai7>0){AOL=A._NewObject(A.Device.Int32FilterCriterion
,0);AOL.Initialize(1,4,Ai7,false);Filter.CX(AOL);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.Ae1(false);},Ov:function(G){if(!this.Akr())this.AW.Ae1(true
);this.Bb(this.AW);this.Am();},M5:function(G){this.AW.Ae1(false);this.Bb(this.Ag1
);this.Am();},_Init:function(aArg){C.YC._Init.call(this,aArg);C.Arl._Init.call(this.
Ag1={I:this},0);A.acg.Ap._Init.call(this.Df={I:this},0);C.Abx._Init.call(this.Abx={
I:this},0);A.Core.BF._Init.call(this.Fm={I:this},0);A.Core.BF._Init.call(this.Fc={
I:this},0);this.__proto__=C.API;var B;this.H(BtE);this.AW.H(BtF);this.Ua.H(BtG);
this.Gw.Z(false);this.Ag1.H(BtH);this.Df.H(BtI);this.Abx.Au(A._GetAutoObject(A.Device.
Device).Ab2);this.Fm.Filter=6;this.Fc.Filter=7;this.J5(this.A$,-1);this.J(this.Ag1
,-1);this.J(this.Df,-1);this.Ag1.CK(this.Abx);this.Ag1.Au([B=this.Abx,B.B$,B.Cc]
);this.Df.Ax(A.aaL(A.ach.AjX));this.Fm.BG=[this,this.Ov];this.Fc.BG=[this,this.M5
];this.Init(aArg);},_Done:function(){this.__proto__=C.YC;this.Ag1._Done();this.Df.
_Done();this.Abx._Done();this.Fm._Done();this.Fc._Done();C.YC._Done.call(this);}
,_ReInit:function(){C.YC._ReInit.call(this);this.Ag1._ReInit();this.Df._ReInit();
this.Abx._ReInit();this.Fm._ReInit();this.Fc._ReInit();},_Mark:function(D){var B;
C.YC._Mark.call(this,D);if((B=this.Ag1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Abx={AeX:null
,Init:function(aArg){var B;A.zX([this,this.BeQ],[B=A._GetAutoObject(A.Device.Device
),B.AE0,B.AI9],0);A.pe([this,this.BeQ],this);},Du:function(){return 3;},Au:function(
E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw4(E);},ADf:function(
aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.AeX.AsT(aIndex
);},ADh:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return this.
AeX.AsU(aIndex);},BeQ:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ab2;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.AeX._Init.call(this.AeX={I:this},0);this.__proto__=C.Abx;this.BI.Set(0,
0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cm;this.AeX._Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(
this);this.AeX._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=
this.AeX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APT={Es:null,IU:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.Es={I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);this.__proto__=
C.APT;this.H(Oi);this.Background.H(Oi);this.Es.H(AIH);this.Es.R(A.aaR(A.acf.A7y)
);this.Es.A6(0x12);this.Es.L(A.jb.Text);this.IU.A1(0x3F);this.IU.H(AII);this.IU.
Ho(5);this.IU.A6(0x14);this.IU.R(A.aaR(A.acf.AG9));this.IU.L(A.jb.Text);this.J(this.
Es,0);this.J(this.IU,0);this.Es.S(A.aaL(A.fl.Af));this.Es.A0(A.aaL(A.fl.HL));this.
Es.Cr(A.aaL(A.fl.Bh));this.IU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Es._Done();this.IU._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Es._ReInit();this.IU._ReInit();this.Es.R(A.aaR(A.acf.
A7y));this.IU.R(A.aaR(A.acf.AG9));this.Es.S(A.aaL(A.fl.Af));this.Es.A0(A.aaL(A.fl.
HL));this.Es.Cr(A.aaL(A.fl.Bh));this.IU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J8:null,BgW:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.BfA(this);else A._GetAutoObject(A.Device.Device).AY(63,true,A.
jV,0,[this,this.Vr]);},BfA:function(G){A._GetAutoObject(C.A7).FB();},Vr:function(
G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!Ar&&(Ar.Id===63)
)&&(Ar.PopupState===7))this.BfA(this);},_Init:function(aArg){C.Mo._Init.call(this
,aArg);A.acg.Text._Init.call(this.J8={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APH);this.Jl.H(BtJ);this.Jl.AkH(2);this.AcE.Z(false);this.AR3=12;this.
Number.H(BtK);this.Number.R(A.aaR(A.acf.A$U));this.A5z=false;this.J8.H(BtL);this.
J8.Ho(5);this.J8.KX(true);this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.
aaR(A.acf.AB2));this.J8.L(A.jb.Text);this.J5(this.Jl,-1);this.J5(this.IZ,-1);this.
J5(this.AcE,-1);this.J(this.J8,0);this.J8.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mo;this.J8._Done();C.Mo._Done.call(this);},_ReInit:function(){C.Mo._ReInit.
call(this);this.J8._ReInit();this.Number.R(A.aaR(A.acf.A$U));this.J8.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AB2));this.J8.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mo._Mark.call(this,D);if((B=this.J8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APH={_Init:function(aArg){C.Aq8.
_Init.call(this,aArg);this.__proto__=C.APH;this.DS.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Jl={AbT:null,AbS:null,AbR:null,QL:null,CountryToString:null,AsW:0,CQ:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QL.R(this.CountryToString.
LA(A._GetAutoObject(A.Device.Converter).A7W(A._GetAutoObject(A.Device.Device).Language
))+BtM);},AkH:function(E){if(this.AsW===E)return;this.AsW=E;var bitmap=null;var A2p=
BtN;var A2o=null;var A2q=false;switch(E){case 0:bitmap=A.aaL(A.ach.Arj);break;case
1:{bitmap=A.aaL(A.ach.AQ0);A2p=BtO;A2o=A.aaL(A.fl.Ak);A2q=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQ1);A2p=BtP;A2o=A.aaL(A.fl.Bh);A2q=true;}break;default:throw new Error(
BtQ+E.toFixed());}this.AbR.Ax(bitmap);this.AbS.Ax(bitmap);this.AbT.Ax(bitmap);this.
QL.H(A.abJ(this.QL.M,A2p));this.QL.S(A2o);this.QL.Z(A2q);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbT={I:this},0);A.acg.Ap._Init.call(this.AbS={I:this},0);A.acg.Ap._Init.
call(this.AbR={I:this},0);A.acg.Text._Init.call(this.QL={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jl;this.H(AIY);this.
AbT.A1(0x3);this.AbT.H(AIY);this.AbT.L(A.jb.Ib);this.AbT.Cw(2);this.AbS.A1(0x3);
this.AbS.H(AIY);this.AbS.L(A.jb.Aed);this.AbS.Cw(1);this.AbR.A1(0x3);this.AbR.H(
AIY);this.AbR.L(A.jb.Text);this.AbR.Cw(0);this.QL.A1(0x14);this.QL.H(BtR);this.QL.
L(0xFF020202);this.QL.Z(false);this.J(this.AbT,0);this.J(this.AbS,0);this.J(this.
AbR,0);this.J(this.QL,0);this.AbT.Ax(A.aaL(A.ach.Arj));this.AbS.Ax(A.aaL(A.ach.Arj
));this.AbR.Ax(A.aaL(A.ach.Arj));this.QL.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbT._Done();this.AbS._Done();this.AbR._Done();this.QL._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbT._ReInit();this.AbS._ReInit();this.AbR._ReInit(
);this.QL._ReInit();this.CountryToString._ReInit();this.QL.S(A.aaL(A.fl.Ak));this.
CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsW={Transponder:0,BGJ:1,BGK:2};C.APD={Ap:null,Dg:function(E){C.BR.Dg.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APD;this.Ap.H(AyR);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APu));},_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Im:0,AaN:4,Al$:function(G){C.Rd.Al$.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bel()){this.Im=A._GetAutoObject(A.Device.Helper).UH.Id;var AiC=A._GetAutoObject(
A.Device.Helper).A7U(this.Im,A._GetAutoObject(A.Device.Helper).W);if(AiC){A._GetAutoObject(
A.Device.Device).AY(21,true,A._GetAutoObject(A.Device.Converter).Rm(this.Im),0,[
this,this.Vr]);return;}AiC=A._GetAutoObject(A.Device.Helper).Bkn(this.Im,A._GetAutoObject(
A.Device.Helper).W);if(AiC&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Im)){A._GetAutoObject(A.Device.Device).AY(25,true,A._GetAutoObject(A.Device.
Converter).Rm(this.Im),0,[this,this.Vr]);return;}this.AaN=A._GetAutoObject(A.Device.
Helper).ARC(this.Im);switch(this.AaN){case 0:A._GetAutoObject(A.Device.Device).AY(
45,true,this.Im.toFixed().length.toFixed(),0,[this,this.Vr]);break;case 1:case 2:{
var BN=A._GetAutoObject(A.Device.Converter).Ax2(this.Im);A._GetAutoObject(A.Device.
Device).AY(46,true,BN.toFixed(),0,[this,this.Vr]);}break;case 3:this.BgO();break;
default:throw new Error(AIv+this.AaN.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A7).FB();},Vr:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!Ar)switch(Ar.PopupState){case 4:if(this.AaN===2)this.BgO();else A._GetAutoObject(
A.Device.Device).AhN();break;case 5:this.Ew(this);break;default:;}},BgO:function(
){A._GetAutoObject(A.Device.Helper).W.Nr(this.Im);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.P1(this.Im);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).AY(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Rd._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.IP);this.Number.R(A.aaR(A.acf.A$O
));this.Jl.H(BtS);this.IZ.H(BtT);this.AkH(1);this.N.CE=[this,this.Ew];this.N.C3(
A.aaL(A.ach.E2));},_ReInit:function(){C.Rd._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$O));},_className:"Application::SetSaveNaisIdScreen"};C.AOg={LU:function(
G){C.AqR.LU.call(this,G);A.pe([this,this.BCq],this);},BCq:function(G){this.JN(this.
Ef);},_Init:function(aArg){C.AqR._Init.call(this,aArg);this.__proto__=C.AOg;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UX={Animal:null,WhereAboutsToString:
null,Gm:function(aIndex){return this.WhereAboutsToString.BT(this.C7(aIndex));},Au:
function(E){C.Cm.Au.call(this,E);if(!!this.Animal)this.Animal.Nt(E);},A5b:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B$,this.Cc],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A5b],[B=this.Animal,B.Awv,B.Nt],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A5b],[B=this.Animal,B.Awv,B.Nt],0);A.pe([this,this.A5b],this);}
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
};C.AcP={Du:function(){return 5;},_Init:function(aArg){C.UX._Init.call(this,aArg
);this.__proto__=C.AcP;this.BI.Set(0,6);this.BI.Set(1,7);this.BI.Set(2,8);this.BI.
Set(3,9);this.BI.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdY={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bc6],[B=A._GetAutoObject(A.Device.
Device),B.ASK,B.A0H],0);A.pe([this,this.Bc6],this);},Du:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awy(E);},Bc6:function(G){
this.Q=A._GetAutoObject(A.Device.Device).AgD;A.abo([this,this.B$,this.Cc],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdY;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AGX={FN:null
,EA:null,EartagNrAssignmentMode:null,Fm:null,Fc:null,HJ:null,AW:null,Kr:null,Nj:
null,A_:0,AM:0,Init:function(aArg){},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hm){this.AW.FP(A.jb.CJ);this.HJ.CV(A.jb.CJ);this.Background.L(A.
jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.HJ.CV(A.jb.CU);this.Background.
L(A.jb.CJ);this.V.L(A.jb.Text);}}else{if(this.Hm){this.AW.FP(A.jb.CJ);this.HJ.CV(
A.jb.CJ);}else{this.AW.FP(A.jb.CU);this.HJ.CV(A.jb.CU);}this.Bb(null);}this.Nj.L(
this.V.AQ);},H1:function(G){C.Eg.H1.call(this,G);if(!this.A_)this.FW(this);else this.
He(this);},DK:function(G){var F;if(!this.N)return;switch(this.A_){case 1:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.
N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(
F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=
null;}break;default:this.FN.AkT((F=this.N,F[1].call(F[0])));}},FW:function(G){this.
Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;if(!this.A_&&!!this.N)
this.FN.AjD((F=this.N,F[1].call(F[0])));this.A_=EO;if(this.A_<0)this.A_=0;else if(
this.A_>1)this.A_=1;switch(this.A_){case 0:this.Bb(null);break;case 1:{this.Bb(this.
AW);if(!this.AM)this.AW.SV(2);else this.AW.SV(7);}break;default:throw new Error(
Att+this.A_.toFixed());}this.DK(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Ov:function(G){this.ABq(2);},M5:function(G){this.ABq(7);},ABq:
function(GA){var B;var AzM=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!AzM){
var AAC=(A.Core.P.isPrototypeOf(B=this.QM(AzM,GA,0x15))?B:null);if(!!AAC){this.Bb(
AAC);return true;}}return false;},Af7:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nj.Ax(
A._GetAutoObject(A.Device.Converter).Am0(2));break;case 1:this.Nj.Ax(A._GetAutoObject(
A.Device.Converter).Am0((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
Ba$+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4K],this);},A4K:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kr.Ae3(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Any,B.AoF]);this.Kr.
Ae3([B=A._GetAutoObject(A.Device.Device),B.AEW,B.AI6]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awm
,B.Ay1]);this.Kr.Ae3([B=A._GetAutoObject(A.Device.Device),B.ASP,B.A0I]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awn,B.Ay2]);this.Kr.Ae3([B=
A._GetAutoObject(A.Device.Device),B.ASQ,B.A0J]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Any,B.AoF]);this.Kr.Ae3([B=A._GetAutoObject(A.Device.Device),
B.AEW,B.AI6]);}break;default:throw new Error(BtU+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Ba$+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Uw:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.Af7],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af7],this.EA,0);if(!!
E)A.pe([this,this.Af7],this);},Aky:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af7],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af7],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af7],this);},Uq:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BF._Init.call(this.Fm={I:this},0);A.Core.
BF._Init.call(this.Fc={I:this},0);C.Arl._Init.call(this.HJ={I:this},0);C.AvX._Init.
call(this.AW={I:this},0);C.Ava._Init.call(this.Kr={I:this},0);A.acg.Ap._Init.call(
this.Nj={I:this},0);this.__proto__=C.AGX;var B;this.H(U4);this.V.As(false);this.
V.R(Atk);this.V.L(A.jb.Bm);this.Fm.Filter=6;this.Fc.Filter=7;this.HJ.H(BtV);this.
AW.H(BtW);this.Nj.H(BtX);this.J(this.HJ,0);this.J(this.AW,0);this.J(this.Nj,0);this.
FN=A._NewObject(C.Aex,0);this.Fm.BG=[this,this.Ov];this.Fc.BG=[this,this.M5];this.
HJ.CK(this.Kr);this.HJ.Au([B=this.Kr,B.B$,B.Cc]);this.AW.Au([this,this.Uq,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fm._Done();this.Fc.
_Done();this.HJ._Done();this.AW._Done();this.Kr._Done();this.Nj._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Fm._ReInit();this.Fc.
_ReInit();this.HJ._ReInit();this.AW._ReInit();this.Kr._ReInit();this.Nj._ReInit(
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AN8={Wz:
null,Zj:null,Zg:null,Uh:null,Init:function(aArg){this.Bb(this.Wz);},AEO:function(
G){var BeM=(C.Ano.isPrototypeOf(G)?G:null);if(!!BeM)A._GetAutoObject(A.Device.Device
).AY(BeM.AdG,true,A.jV,0,null);},DF:function(G){if((this.Cq.CP===7)&&(this.AV===
this.Uh))A._GetAutoObject(A.Device.Device).AY(10,true,A.jV,0,null);else if((this.
Cq.CP===6)&&(this.AV===this.Uh))A._GetAutoObject(C.A7).Cb(91);C.Ej.DF.call(this,
G);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Ano._Init.call(this.Wz={I:
this},0);C.Ano._Init.call(this.Zj={I:this},0);C.Ano._Init.call(this.Zg={I:this},
0);C.Ano._Init.call(this.Uh={I:this},0);this.__proto__=C.AN8;this.Dr(C.APi);this.
Wz.H(I1);this.Wz.Aj(true);this.Wz.T(A.aaR(A.acf.AhM));this.Wz.Bi(false);this.Wz.
AdG=79;this.Zj.H(Qg);this.Zj.Aj(true);this.Zj.T(A.aaR(A.acf.A$7));this.Zj.Bi(true
);this.Zj.AdG=77;this.Zg.H(Aan);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.A7t));this.
Zg.Bi(false);this.Zg.AdG=78;this.Uh.H(Alk);this.Uh.Aj(true);this.Uh.T(A.aaR(A.acf.
About));this.Uh.Bi(true);this.Uh.AdG=3;this.J(this.Wz,-1);this.J(this.Zj,-1);this.
J(this.Zg,-1);this.J(this.Uh,-1);this.Wz.AR=[this,this.AEO];this.Zj.AR=[this,this.
AEO];this.Zg.AR=[this,this.AEO];this.Uh.AR=[this,this.AEO];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wz._Done();this.Zj._Done();this.Zg._Done();this.
Uh._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.
Wz._ReInit();this.Zj._ReInit();this.Zg._ReInit();this.Uh._ReInit();this.Wz.T(A.aaR(
A.acf.AhM));this.Zj.T(A.aaR(A.acf.A$7));this.Zg.T(A.aaR(A.acf.A7t));this.Uh.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.Wz
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uh)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.APi={_Init:function(aArg){C.Ku.
_Init.call(this,aArg);this.__proto__=C.APi;this.Text.R(A.aaR(A.acf.Info));},_ReInit:
function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.Info));},_className:"Application::HeaderDeviceInfoMenu"
};C.AN6={FactoryResetScope:null,Uk:null,Ww:null,Um:null,Init:function(aArg){this.
Bb(this.Uk);A.pe([this,this.MS],this);},Bk8:function(G){switch(this.FactoryResetScope.
C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).AY(33,true
,A.jV,0,[this,this.A4t]);break;case 0:A._GetAutoObject(A.Device.Device).AY(7,true
,A.jV,0,[this,this.A4t]);break;case 2:A._GetAutoObject(A.Device.Device).AY(115,true
,A.jV,0,[this,this.A4t]);break;default:A.ab5("%s%i",BtY,this.FactoryResetScope.Q
);}},A4t:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!Ar&&(Ar.PopupState===7))switch(Ar.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bpd();A._GetAutoObject(A.Device.Device).AY(8,true,A.jV,0,null);A._GetAutoObject(
C.A7).Cb(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bpc();A._GetAutoObject(
A.Device.Device).Ar1(0);A._GetAutoObject(A.Device.Device).Ar2(0);A._GetAutoObject(
A.Device.Device).Ar3(0);A._GetAutoObject(A.Device.Device).Ar7(0);A._GetAutoObject(
A.Device.Device).Ar8(0);A._GetAutoObject(A.Device.Device).Ar9(0);A._GetAutoObject(
A.Device.Device).Uu(5);A._GetAutoObject(A.Device.Device).AwL(0);A._GetAutoObject(
A.Device.Device).AwM(0);A._GetAutoObject(A.Device.Device).AwN(0);A._GetAutoObject(
A.Device.Device).Aw5(1);A._GetAutoObject(A.Device.Device).Aw6(1);A._GetAutoObject(
A.Device.Device).Aw7(1);A._GetAutoObject(A.Device.Device).AY(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).Bpb();A._GetAutoObject(A.Device.
Device).AY(116,true,A.jV,0,null);A._GetAutoObject(C.A7).Cb(37);}break;default:A.
ab5("%s%e",AIw,Ar.Id);}},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Np._Init.call(this.Uk={I:this},0
);C.Np._Init.call(this.Ww={I:this},0);C.BX._Init.call(this.Um={I:this},0);this.__proto__=
C.AN6;var B;this.Dr(C.APg);this.Uk.H(I1);this.Uk.Aj(true);this.Uk.T(A.aaR(A.acf.
ACN));this.Uk.Bi(false);this.Uk.Ns(93);this.Ww.H(Qg);this.Ww.Aj(true);this.Ww.T(
A.aaR(A.acf.AdX));this.Ww.Bi(true);this.Ww.Ns(92);this.Um.H(Bba);this.Um.Aj(true
);this.Um.Bmt(true);this.Um.T(A.aaR(A.acf.A6W));this.Um.Bi(false);this.J(this.Uk
,-1);this.J(this.Ww,-1);this.J(this.Um,-1);this.Uk.AR=[B=this.Uk,B.Nv];this.Ww.AR=[
B=this.Ww,B.Nv];this.Um.AR=[this,this.Bk8];this.Um.Au([B=this.FactoryResetScope,
B.B$,B.Cc]);this.Um.CK(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.FactoryResetScope._Done();this.Uk._Done();this.Ww._Done(
);this.Um._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Uk._ReInit();this.Ww._ReInit();this.Um._ReInit(
);this.Uk.T(A.aaR(A.acf.ACN));this.Ww.T(A.aaR(A.acf.AdX));this.Um.T(A.aaR(A.acf.
A6W));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ww)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Um)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.APg={_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APg;this.Text.R(A.aaR(A.acf.ACO
));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACO));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq_={QY:null,Wm:null
,_Init:function(aArg){C.T4._Init.call(this,aArg);C.CG._Init.call(this.QY={I:this
},0);C.CG._Init.call(this.Wm={I:this},0);this.__proto__=C.Aq_;this.QY.H(BtZ);this.
QY.R(A.aaR(A.acf.A$Z));this.QY.A6(0x12);this.QY.L(A.jb.Text);this.Wm.H(Ba6);this.
Wm.R(A.aaR(A.acf.Aoa));this.Wm.L(A.jb.Text);this.J(this.QY,0);this.J(this.Wm,0);
this.QY.S(A.aaL(A.fl.Af));this.QY.A0(A.aaL(A.fl.Ak));this.QY.Cr(A.aaL(A.fl.Bh));
this.Wm.S(A.aaL(A.fl.Af));this.Wm.A0(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.T4;this.QY._Done();this.Wm._Done();C.T4._Done.call(this);},_ReInit:function(){
C.T4._ReInit.call(this);this.QY._ReInit();this.Wm._ReInit();this.QY.R(A.aaR(A.acf.
A$Z));this.Wm.R(A.aaR(A.acf.Aoa));this.QY.S(A.aaL(A.fl.Af));this.QY.A0(A.aaL(A.fl.
Ak));this.QY.Cr(A.aaL(A.fl.Bh));this.Wm.S(A.aaL(A.fl.Af));this.Wm.A0(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.T4._Mark.call(this,D);if((B=this.QY)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APO={QZ:null,_Init:function(aArg){C.T4._Init.call(this,aArg);C.CG._Init.call(
this.QZ={I:this},0);this.__proto__=C.APO;this.QZ.H(Bt0);this.QZ.R(A.aaR(A.acf.Uo
));this.QZ.A6(0x12);this.QZ.L(A.jb.Text);this.J(this.QZ,0);this.QZ.S(A.aaL(A.fl.
Af));this.QZ.A0(A.aaL(A.fl.Ak));this.QZ.Cr(A.aaL(A.fl.Bh));},_Done:function(){this.
__proto__=C.T4;this.QZ._Done();C.T4._Done.call(this);},_ReInit:function(){C.T4._ReInit.
call(this);this.QZ._ReInit();this.QZ.R(A.aaR(A.acf.Uo));this.QZ.S(A.aaL(A.fl.Af)
);this.QZ.A0(A.aaL(A.fl.Ak));this.QZ.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;
C.T4._Mark.call(this,D);if((B=this.QZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.AqD={IQ:null,AbK:null,Ea:null
,Bl:function(aSize){C.Nb.Bl.call(this,aSize);this.IQ.H([this.Gz.M[2],0,this.Gz.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1
,aSize[1]]);this.AbK.H([this.IQ.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Nb.
Ai.call(this,Ae);this.AbK.L(this.Gz.AQ);this.IQ.L(this.Gz.AQ);},Ch:function(Ad){
C.Nb.Ch.call(this,Ad);if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Ih=this.AX.
Am1(Ad,14);var At2=this.AX.AO1(Ad,7);this.IQ.Ax(A._GetAutoObject(A.Device.Converter
).Am0(At2));this.AbK.Ax(A._GetAutoObject(A.Device.Converter).A5E(Ih));this.Am();
}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Ap._Init.call(this.IQ={
I:this},0);A.acg.Ap._Init.call(this.AbK={I:this},0);A.acg.AL._Init.call(this.Ea={
I:this},0);this.__proto__=C.AqD;this.IQ.H(Ba8);this.IQ.L(A.jb.Text);this.AbK.H(Bt1
);this.AbK.L(A.jb.Text);this.Ea.H(Bt2);this.Ea.L(A.jb.Bc);this.J(this.IQ,0);this.
J(this.AbK,0);this.J(this.Ea,0);this.IQ.Ax(A.aaL(A.aci.TW));this.AbK.Ax(A.aaL(A.
aci.TW));},_Done:function(){this.__proto__=C.Nb;this.IQ._Done();this.AbK._Done();
this.Ea._Done();C.Nb._Done.call(this);},_ReInit:function(){C.Nb._ReInit.call(this
);this.IQ._ReInit();this.AbK._ReInit();this.Ea._ReInit();},_Mark:function(D){var
B;C.Nb._Mark.call(this,D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANm={ZX:null,Bl:
function(aSize){C.Nb.Bl.call(this,aSize);this.ZX.H([this.Gz.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Nb.Ai.call(this,Ae);this.ZX.L(this.Gz.AQ);},Ch:function(
Ad){C.Nb.Ch.call(this,Ad);if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Js=this.
AX.KT(Ad,26);if(Js>0)this.ZX.R(A.ab2(Js.toFixed(),5));else this.ZX.R(Rt);this.Am(
);}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZX={I:this},0);this.__proto__=C.ANm;this.ZX.H(Bt3);this.J(this.ZX,0);this.ZX.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Nb;this.ZX._Done();C.Nb._Done.
call(this);},_ReInit:function(){C.Nb._ReInit.call(this);this.ZX._ReInit();this.ZX.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Nb._Mark.call(this,D);if((B=this.ZX
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ASe={Ap:null,Ai:function(Ae){C.AeY.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeY._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ASe;this.Text.H(Bt4);this.Ap.H(A0A);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afg));},_Done:function(){this.__proto__=C.AeY;this.Ap._Done(
);C.AeY._Done.call(this);},_ReInit:function(){C.AeY._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeY._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.YB={Text:
null,Df:null,AP:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Nz],[B=A._GetAutoObject(A.Device.Device),B.AES,B.AI3],0);A.zV([this,this.Nz
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nz],this);},Dg:function(
E){C.BR.Dg.call(this,E);this.Df.L(E);this.Text.L(E);this.Gw.L(E);this.D2.Zz(E);}
,WN:function(E){C.BR.WN.call(this,E);this.D2.CV(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B_().toFixed());},Nz:function(s){this.DX(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C8._Init.call(this.A$={I:this},0);this.__proto__=C.YB;this.Text.H(Bt5);this.
Text.A6(0x11);this.Df.H(AyN);this.AP.DD(Ba2);this.AP.DN(Ba3);this.AP.L(A.jb.Bc);
this.Gw.H(Bt6);this.Gw.L(A.jb.CU);this.D2.A1(0x14);this.D2.H(Bt7);this.D2.Zz(A.jb.
Bm);this.D2.CV(A.jb.Rl);this.D2.Ho(2);this.A$.DD(Bt8);this.A$.DN(Bt9);this.A$.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Df,0);this.J(this.AP,0);this.J(this.Gw,
0);this.J(this.D2,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.A0(
A.aaL(A.fl.Ak));this.Df.Ax(A.aaL(A.ach.AjX));this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.Df._Done();this.AP._Done();this.Gw._Done();this.D2._Done();this.A$.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.Df._ReInit();this.AP._ReInit();this.Gw._ReInit();this.D2._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.A0(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acv={FN:null
,J3:null,J2:null,AkP:null,AkQ:null,Q$:null,QK:null,AbJ:null,Wa:null,PR:null,PT:null
,SE:null,Gx:null,Gy:null,JB:null,AlT:0,AlY:0,D7:0,DW:0,A_:0,Bl:function(aSize){var
B;this.DB.H([this.Hy.M[2]-10,this.Hy.M[1],this.H9.M[0]+10,this.Hy.M[3]]);this.DB.
AFE((B=this.DB.M)[2]-B[0]);this.DB.HK(this.DB.Gu,true,null,null);},Ai:function(Ae
){var B;C.BX.Ai.call(this,Ae);var Fw=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A_===1)||(this.A_===2)){var A1N=this.A2L(this.A_);if(!!
A1N){this.AbJ.Z(true);this.AbJ.H(A1N.M);this.AbJ.L(this.V.AQ);this.Wa.Z(true);this.
Wa.H(A1N.M);}else{this.AbJ.Z(false);this.Wa.Z(false);}this.Hy.Z(false);this.H9.Z(
false);}else{this.AbJ.Z(false);this.Wa.Z(false);this.Hy.Z(Fw||GE);this.H9.Z(Fw||
GE);}},Qy:function(G){if(!!this.Q){if(this.FI===1)A.pe([this,this.Vj],this);else
if(this.FI===4)A.pe([this,this.A06],this);else if(this.FI===5)A.pe([this,this.A04
],this);}C.BX.Qy.call(this,G);},Ki:function(G){switch(this.A_){case 0:C.BX.Ki.call(
this,G);break;case 2:break;default:this.AdA(this);}},Kd:function(G){switch(this.
A_){case 0:C.BX.Kd.call(this,G);break;default:this.Aiu(this);}},A2g:function(G){
var F;if(this.A_===1){var BP=this.D7;this.D7=this.D7-10;if(this.D7<this.AlY)this.
D7=this.AlY;if(this.D7<A._GetAutoObject(A.Device.Device).AcL)this.D7=A._GetAutoObject(
A.Device.Device).AcL;if(this.DW!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.
D7));A.abo(this.J3,0);}}if(this.A_===2){var BP=this.DW;this.DW=this.DW-10;if(this.
DW<this.D7)this.DW=this.D7;if(this.DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[
0],this.DW));A.abo(this.J2,0);}}this.DK(this);this.Am();},A04:function(s){this.A2g(
s);},Al9:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.A04],this
);this.Bo.As(false);}this.Bo.As(true);},A2S:function(G){var F;if(this.A_===1){var
BP=this.D7;this.D7=this.D7+10;if(this.D7>this.DW)this.D7=this.DW;if(this.D7!==BP
){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.D7));A.abo(this.J3,0);}}if(this.A_===
2){var BP=this.DW;this.DW=this.DW+10;if(this.DW>this.AlT)this.DW=this.AlT;if(this.
DW!==BP){if(!!this.J2)(F=this.J2,F[2].call(F[0],this.DW));A.abo(this.J2,0);}}this.
DK(this);this.Am();},A06:function(s){this.A2S(s);},Al_:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.A06],this);this.Bo.As(false);}this.Bo.As(true
);return;},Vj:function(G){this.Ex(this.A_+1);},AdA:function(G){this.FI=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Vj],this);this.Bo.As(false);}this.Bo.As(true);}
,GH:function(G){},AfL:function(s){this.GH(s);},DK:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CE=[this,this.He];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeE));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vj];}break;case 2:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CE=[this,this.He];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am7
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Aiu];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkT((F=this.N,F[1].call(F[
0])));}},A_T:function(E){if(A.aaZ(this.J3,E))return;if(!!this.J3)A.z$([this,this.
A4f],this.J3,0);this.J3=E;if(!!this.J3)A.zX([this,this.A4f],this.J3,0);A.pe([this
,this.A4f],this);},A4f:function(G){var F;this.D7=(F=this.J3,F[1].call(F[0]));this.
Am();},A_S:function(E){if(A.aaZ(this.J2,E))return;if(!!this.J2)A.z$([this,this.A4e
],this.J2,0);this.J2=E;if(!!this.J2)A.zX([this,this.A4e],this.J2,0);A.pe([this,this.
A4e],this);},A4e:function(G){var F;this.DW=(F=this.J2,F[1].call(F[0]));this.Am();
},FW:function(G){this.Ex(1);},He:function(G){this.Ex(0);},Ex:function(EO){var F;
if(!this.A_)this.FN.AjD((F=this.N,F[1].call(F[0])));this.A_=EO;if((this.A_<0)||(
this.A_>2))this.A_=0;this.DK(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=!!this.A_;this.
Am();},Aiu:function(G){if(this.A_>1)this.Ex(this.A_-1);},A4s:function(G){},Ay_:function(
s){this.A4s(s);},A33:function(G){},Bcg:function(s){this.A33(s);},A2L:function(AtB
){return null;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.acg.AL._Init.call(
this.AkP={I:this},0);A.acg.AL._Init.call(this.AkQ={I:this},0);A.acg.AL._Init.call(
this.Q$={I:this},0);A.acg.Ap._Init.call(this.QK={I:this},0);A.acg.AL._Init.call(
this.AbJ={I:this},0);A.acg.BW._Init.call(this.Wa={I:this},0);A.acg.Text._Init.call(
this.PR={I:this},0);A.acg.Text._Init.call(this.PT={I:this},0);A.acg.Text._Init.call(
this.SE={I:this},0);A.Core.BF._Init.call(this.Gx={I:this},0);A.Core.BF._Init.call(
this.Gy={I:this},0);A.Core.BF._Init.call(this.JB={I:this},0);this.__proto__=C.Acv;
this.H(AfI);this.T(A.aaR(A.acf.Arz));this.Background.H(AfI);this.V.H(BD);this.V.
R(A.aaR(A.acf.AHg));this.V.A6(0x12);this.AkP.H(Bt_);this.AkP.L(A.jb.Gk);this.AkQ.
H(Bt$);this.AkQ.L(A.jb.Ib);this.Q$.H(Bua);this.Q$.L(A.jb.E1);this.QK.H(Bub);this.
AbJ.H(Buc);this.Wa.H(Bud);this.Wa.Nu(3);this.Wa.L(A.jb.AV);this.Wa.Z(false);this.
PR.H(Bue);this.PR.Ho(8);this.PR.Je(true);this.PR.A6(0x11);this.PR.L(0xFF000000);
this.PT.H(Buf);this.PT.Ho(8);this.PT.Je(true);this.PT.A6(0x11);this.PT.L(0xFF000000
);this.SE.H(Bug);this.SE.Je(false);this.SE.A6(0x12);this.SE.L(0xFF000000);this.Gx.
Filter=5;this.Gx.Bw=false;this.Gy.Filter=4;this.Gy.Bw=false;this.JB.Filter=1;this.
J5(this.V,-1);this.J5(this.DB,-2);this.J(this.AkP,-1);this.J(this.AkQ,-1);this.J(
this.Q$,-1);this.J(this.QK,-1);this.J(this.AbJ,-1);this.J(this.Wa,-1);this.J(this.
PR,-1);this.J(this.PT,0);this.J(this.SE,0);this.QK.Ax(A.aaL(A.ach.ADT));this.PR.
S(A.aaL(A.fl.Af));this.PT.S(A.aaL(A.fl.Af));this.SE.S(A.aaL(A.fl.Ak));this.Gx.BG=[
this,this.Al9];this.Gx.D1=[this,this.A04];this.Gy.BG=[this,this.Al_];this.Gy.D1=[
this,this.A06];this.JB.BG=[this,this.AdA];this.FN=A._NewObject(C.Aex,0);},_Done:
function(){this.__proto__=C.BX;this.AkP._Done();this.AkQ._Done();this.Q$._Done();
this.QK._Done();this.AbJ._Done();this.Wa._Done();this.PR._Done();this.PT._Done();
this.SE._Done();this.Gx._Done();this.Gy._Done();this.JB._Done();C.BX._Done.call(
this);},_ReInit:function(){C.BX._ReInit.call(this);this.AkP._ReInit();this.AkQ._ReInit(
);this.Q$._ReInit();this.QK._ReInit();this.AbJ._ReInit();this.Wa._ReInit();this.
PR._ReInit();this.PT._ReInit();this.SE._ReInit();this.Gx._ReInit();this.Gy._ReInit(
);this.JB._ReInit();this.T(A.aaR(A.acf.Arz));this.V.R(A.aaR(A.acf.AHg));this.PR.
S(A.aaL(A.fl.Af));this.PT.S(A.aaL(A.fl.Af));this.SE.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BX._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.J3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.J2)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FM={X3:null,Acw:
null,Aoe:0,Aof:0,Du:function(){if(!this.X3)return 0;return this.X3.MM;},C7:function(
aIndex){if(!this.X3||(aIndex>=this.X3.MM))return-1;return this.X3.Get(aIndex);},
Gm:function(aIndex){return this.A7c().BT(this.C7(aIndex));},DZ:function(A8){if(!
this.X3)return-1;return this.X3.AvA(A8);},H8:function(){if(!this.X3)return-1;return this.
X3.H8();},AnP:function(E){if(this.Aoe===E)return;this.Aoe=E;A.pe([this,this.AV4]
,this);},A0Z:function(Aq){this.AnP(Aq);},AnQ:function(E){if(this.Aof===E)return;
this.Aof=E;A.pe([this,this.AV5],this);},A00:function(Aq){this.AnQ(Aq);},AV5:function(
G){A.abo([this,this.ATd,this.A00],0);},AV4:function(G){A.abo([this,this.ATc,this.
A0Z],0);},A7c:function(){return this.Acw;},ATc:function(){return this.Aoe;},ATd:
function(){return this.Aof;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acw={I:this},0);this.__proto__=C.FM;},_Done:function(
){this.__proto__=C.AC;this.Acw._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acw._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.X3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acw)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMS={Init:
function(aArg){A.zV([this,this.BfN],A._GetAutoObject(A.Device.Helper).UO,0);A.zV([
this,this.BfL],A._GetAutoObject(A.Device.Helper).UN,0);this.BfN(this);this.BfL(this
);},Au:function(E){C.FM.Au.call(this,E);this.AnQ(A._GetAutoObject(A.Device.Helper
).UO.Get(this.DZ(E)));this.AnP(A._GetAutoObject(A.Device.Helper).UN.Get(this.DZ(
E)));},AnP:function(E){if(this.Aoe===E)return;C.FM.AnP.call(this,E);A._GetAutoObject(
A.Device.Helper).UN.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UN.
Ci();},AnQ:function(E){if(this.Aof===E)return;C.FM.AnQ.call(this,E);A._GetAutoObject(
A.Device.Helper).UO.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UO.
Ci();},BfN:function(G){this.Aof=A._GetAutoObject(A.Device.Helper).UO.Get(this.DZ(
this.Q));A.pe([this,this.AV5],this);},BfL:function(G){this.Aoe=A._GetAutoObject(
A.Device.Helper).UN.Get(this.DZ(this.Q));A.pe([this,this.AV4],this);},_Init:function(
aArg){C.FM._Init.call(this,aArg);this.__proto__=C.AMS;this.X3=A._GetAutoObject(A.
Device.Helper).Ad3;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMT={AgI:null,ACf:0,ACd:0,Init:function(aArg){A.zV([this,this.Bf0],A._GetAutoObject(
A.Device.Helper).AfC,0);A.zV([this,this.BfY],A._GetAutoObject(A.Device.Helper).AfB
,0);A.zV([this,this.BfW],A._GetAutoObject(A.Device.Helper).AfA,0);A.zV([this,this.
Bf2],A._GetAutoObject(A.Device.Helper).AfD,0);this.Bf0(this);this.BfY(this);this.
BfW(this);this.Bf2(this);},Au:function(E){C.FM.Au.call(this,E);this.AnQ(A._GetAutoObject(
A.Device.Helper).AfC.Get(this.DZ(E)));this.AnP(A._GetAutoObject(A.Device.Helper).
AfB.Get(this.DZ(E)));this.ATi(A._GetAutoObject(A.Device.Helper).AfA.Get(this.DZ(
E)));this.ATk(A._GetAutoObject(A.Device.Helper).AfD.Get(this.DZ(E)));},AnP:function(
E){if(this.Aoe===E)return;C.FM.AnP.call(this,E);A._GetAutoObject(A.Device.Helper
).AfB.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfB.Ci();},AnQ:function(
E){if(this.Aof===E)return;C.FM.AnQ.call(this,E);A._GetAutoObject(A.Device.Helper
).AfC.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfC.Ci();},A7c:function(
){return this.AgI;},Bf0:function(G){this.Aof=A._GetAutoObject(A.Device.Helper).AfC.
Get(this.DZ(this.Q));A.pe([this,this.AV5],this);},BfY:function(G){this.Aoe=A._GetAutoObject(
A.Device.Helper).AfB.Get(this.DZ(this.Q));A.pe([this,this.AV4],this);},ATk:function(
E){if(this.ACf===E)return;this.ACf=E;A._GetAutoObject(A.Device.Helper).AfD.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfD.Ci();A.pe([this,this.Bax],this
);},ATi:function(E){if(this.ACd===E)return;this.ACd=E;A._GetAutoObject(A.Device.
Helper).AfA.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfA.Ci();A.
pe([this,this.Baw],this);},Baw:function(G){A.abo([this,this.A81,this.ATi],0);},Bax:
function(G){A.abo([this,this.A83,this.ATk],0);},BfW:function(G){this.ACd=A._GetAutoObject(
A.Device.Helper).AfA.Get(this.DZ(this.Q));A.pe([this,this.Baw],this);},Bf2:function(
G){this.ACf=A._GetAutoObject(A.Device.Helper).AfD.Get(this.DZ(this.Q));A.pe([this
,this.Bax],this);},A83:function(){return this.ACf;},A81:function(){return this.ACd;
},_Init:function(aArg){C.FM._Init.call(this,aArg);A.Device.AgI._Init.call(this.AgI={
I:this},0);this.__proto__=C.AMT;this.X3=A._GetAutoObject(A.Device.Helper).AgJ;this.
Init(aArg);},_Done:function(){this.__proto__=C.FM;this.AgI._Done();C.FM._Done.call(
this);},_ReInit:function(){C.FM._ReInit.call(this);this.AgI._ReInit();},_Mark:function(
D){var B;C.FM._Mark.call(this,D);if((B=this.AgI)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMz={RT:null,Init:function(
aArg){var B;A.zX([this,this.AiR],[B=this.AnimalType,B.B$,B.Cc],0);A.pe([this,this.
AiR],this);this.Bb(this.RT);},Bk:function(E){C.I_.Bk.call(this,E);this.RT.Bx(this.
Jw.AM);},AiR:function(G){A._GetAutoObject(A.Device.Device).AwO(this.AnimalType.Q
);},_Init:function(aArg){C.I_._Init.call(this,aArg);C.TP._Init.call(this.RT={I:this
},0);this.__proto__=C.AMz;var B;this.Jw.As(false);this.Jw.Aj(false);this.Jw.Z(false
);this.RT.H(AIZ);this.RT.Aj(true);this.RT.Nq(14);this.RT.Ahz(0);this.RT.OV(0);this.
J(this.RT,-4);this.RT.AR=[this,this.AAK];this.RT.Au([B=this.AnimalType,B.B$,B.Cc
]);this.RT.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I_;this.RT._Done();C.I_._Done.call(this);},_ReInit:function(){C.I_._ReInit.call(
this);this.RT._ReInit();},_Mark:function(D){var B;C.I_._Mark.call(this,D);if((B=
this.RT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TP={Filter:null,Er:0,TableId:0,Operator:1,CQ:function(){var F;this.TA((F=this.
Filter,F[1].call(F[0])).DM(this.Er,this.Operator));},Bl:function(aSize){var B;C.
BX.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hy.H(AhZ
);this.H9.H([aSize[0]-40,40,aSize[0],80]);this.DB.H([this.Hy.M[2]-5,this.Hy.M[1]
,this.H9.M[0]+5,this.Hy.M[3]]);this.DB.AFE((B=this.DB.M)[2]-B[0]);this.DB.HK(this.
DB.Gu,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mj],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mj
],E,0);A.pe([this,this.Mj],this);},Mj:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.TA((F=this.Filter,F[1].call(F[0])).DM(this.Er,this.
Operator));else this.TA(null);},Ahz:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mj],this);},Nq:function(E){if(this.Er===E)return;this.
Er=E;A.pe([this,this.Mj],this);},TA:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).Am2(this.TableId,this.Er));this.Am();},OV:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mj],this);},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.TP;this.H(K4);this.V.A6(0x11);this.V.Cr(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BX._ReInit.call(this);this.V.Cr(A.aaL(A.fl.Bh));this.
CQ();},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ASn={Gf:null,M0:null,DY:null,Y:null,Ef:null,Cn:null,CH:null,Db:null,Go:null,
Ee:null,C$:null,B0:null,Ay:null,Breed:null,Jm:null,AnimalType:null,Gender:null,Pu:
null,K3:null,Jk:null,KU:null,Amp:null,KP:0,Nc:0,A4B:false,Init:function(aArg){var
B;A.zX([this,this.BBi],[B=A._GetAutoObject(A.Device.Device),B.AEX,B.AI7],0);A.zV([
this,this.Auc],this.M0,0);A.zX([this,this.Auc],[B=A._GetAutoObject(A.Device.Device
),B.Awu,B.Ay6],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEX
,B.AI7],0);A.zV([this,this.GH],this.M0,0);A.zX([this,this.AiR],this.B0.Q,0);A.pe([
this,this.AiR],this);A.pe([this,this.Bfp],this);A.pe([this,this.Auc],this);A.pe([
this,this.GH],this);A.pe([this,this.A34],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.Aqd],this);A.pe([this,this.DK],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.AnD(A.jb.E1);else
this.Ef.AnD(A.jb.Gk);if(A._GetAutoObject(A.Device.Device).AeS){if(!!(F=this.Cn.Dm
,F[1].call(F[0])))this.Cn.AnD(A.jb.E1);else this.Cn.AnD(A.jb.Gk);}else this.Cn.AnD(
A.jb.Rl);A.pe([this,this.DK],this);},DF:function(G){var B;C.AB.DF.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},LU:function(
G){if(A._GetAutoObject(A.Device.Device).An.Lm())A._GetAutoObject(A.Device.Device
).AY(41,true,A._GetAutoObject(A.Device.Device).An.HM().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gs();A._GetAutoObject(A.Device.Helper).Aqp(A._GetAutoObject(A.
Device.Helper).W);this.ApH();},CC:function(G){C.AB.CC.call(this,G);A._GetAutoObject(
A.Device.Device).AFL(0);},E4:function(G){C.AB.E4.call(this,G);this.Jk.As(false);
A._GetAutoObject(A.Device.Device).UA(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.E7();A._GetAutoObject(C.A7).FB();},Fk:function(G){var B;this.Ay.
MG((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.
Y.Br[1]);},Auc:function(G){var F,Cu;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.Aqd(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aeo(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).AY(21,true,A._GetAutoObject(A.Device.Converter
).Rm((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A3T]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A3S],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeS)this.JN(this.Cn);}var BeF=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeS||!!(Cu=this.Cn.Dm,Cu[1].call(Cu[0])));if(this.M0.AOW()>0){if((
this.AV===this.Cn)&&BeF)this.Bb(this.Y.TX(this.Cn,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeS&&(this.AV===this.Cn))&&!!(F=this.Cn.Dm,F[1].call(F[0])))this.
JN(this.Ef);if(BeF)this.Bdr(this);},Ady:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},Ai3:function(){var F;this.Gf.Ci(A._GetAutoObject(A.Device.Device).An);
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
);(F=A._GetAutoObject(A.Device.Device),F.AFL(F.Av4+1));this.A4B=true;A.pe([this,
this.Aqd],this);this.ApH();},GH:function(G){this.Cn.ATW(A._GetAutoObject(A.Device.
Device).AeS);A._GetAutoObject(A.Device.Helper).J6(this.B0,this.M0.N3(14));A._GetAutoObject(
A.Device.Helper).J6(this.C$,this.M0.N3(23));A._GetAutoObject(A.Device.Helper).J6(
this.CH,this.M0.N3(32));A._GetAutoObject(A.Device.Helper).J6(this.Ee,this.M0.N3(
18));A._GetAutoObject(A.Device.Helper).J6(this.Db,this.M0.N3(7));A._GetAutoObject(
A.Device.Helper).J6(this.Go,this.M0.N3(34));this.KU.Z(!this.M0.AOW());var O;var Aa=
null;var Apn=this.AV;for(O=0;O<this.M0.AfU.Ng();O++){Aa=this.Bz$(this.M0.AfU.OM(
O));if(!!Aa)this.ZL(Aa);}this.JN(Apn);A._GetAutoObject(A.Device.Helper).ANJ(this.
Y);A.pe([this,this.A34],this);this.Am();},Ae0:function(E){if(this.KP===E)return;
this.KP=E;A.abo([this,this.Awg,this.Ae0],0);},Ahu:function(E){if(this.Nc===E)return;
this.Nc=E;A.abo([this,this.Anw,this.Ahu],0);},Bdr:function(G){this.Gf.Gs();A._GetAutoObject(
A.Device.Helper).Aqp(this.Gf);this.Gf.Q9(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gf.Nr(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gf.SP(A._GetAutoObject(
A.Device.Helper).AMA(0,this.Gf));this.Gf.Ae8(true);if(this.M0.N3(14))this.Gf.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.M0.N3(32))this.Gf.N7(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.M0.N3(7))this.Gf.J0(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.M0.N3(34))this.Gf.Nt(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Aly=A._GetAutoObject(A.Device.Helper).A16(this.Gf,0,A._GetAutoObject(
A.Device.Device).An);if(!Aly)this.Ai3();else A._GetAutoObject(A.Device.Helper).AKz(
this.Gf,Aly,0,0,[this,this.ApN]);},ApH:function(){A._GetAutoObject(A.Device.Helper
).W.Nr(0);if(A._GetAutoObject(A.Device.Device).AeS)A._GetAutoObject(A.Device.Helper
).W.Q9(0);this.Ae0(0);this.Ahu(0);this.JN(this.Ef);this.Am();},ApN:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case
22:case 21:case 48:this.ApH();break;case 43:this.JN(this.Ef);break;case 41:break;
default:A.ab5("%s%e",Ati,Ar.Id);}},JN:function(Ag){this.Bb(Ag);this.Y.HK(Ag,true
,null,null);this.Y.VG(null,null);},Bfp:function(G){this.Ee.Ahx(A._GetAutoObject(
A.Device.Helper).W.AhX(1));this.Auc(this);},AiR:function(G){this.C$.Ahx(A._GetAutoObject(
A.Device.Helper).Abz(this.AnimalType.Q));},A34:function(G){var B;var BCo=this.Ay.
Background.Fq();var width=(BCo?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var XB=this.Y.TX(null,0x401);while(!!XB&&(((B=XB)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.O4.isPrototypeOf(XB)?XB:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));XB=this.Y.TX(XB,0x1);}},Bz$:function(Aar){var Aa=null;switch(Aar){case 14:Aa=
this.B0;break;case 32:Aa=this.CH;break;case 23:Aa=this.C$;break;case 7:Aa=this.Db;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Go;break;default:A.ab5("%s%e",Buh
,Aar);}return Aa;},BBi:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeS
)A._GetAutoObject(A.Device.Helper).W.Q9(0);else if(!(F=this.Cn.Dm,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q9(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmO(A._GetAutoObject(A.Device.Device).AdV));this.
Auc(this);},Aqd:function(G){var B;var AKC=A.jV;var Azr=A.jb.CJ;var BdI=A.jb.AV;this.
Amp.AxS(this);if(this.A4B){this.A4B=false;AKC=A._GetAutoObject(A.Device.Helper).
MN(A.aaR(A.acf.Bp_),Pc,A._GetAutoObject(A.Device.Converter).Rm(this.Gf.NaisId));
A.pe([B=this.Amp,B.StartTimer],this);Azr=A.jb.E1;BdI=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKC=A.aaR(A.acf.AUV);else if((
this.AV===this.Cn)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKC=A.aaR(A.
acf.Bpo);this.KU.T(AKC);this.KU.BmF(Azr);this.KU.A_g(BdI);},A3T:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X8();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X8();else if(Ar.PopupState===7){A._GetAutoObject(C.A7).Cb(76);A.
_GetAutoObject(A.Device.Device).X8();}}}else A._GetAutoObject(A.Device.Device).X8(
);},A3S:function(G){A._GetAutoObject(A.Device.Device).Aqx();},DK:function(G){var
B;if(!this.M0.AOW()){this.N.Lj.CZ(255);if(this.AV===this.Ef){this.N.C4(A.aaL(A.ach.
Edit));this.N.Ca=[B=this.Ef,B.FW];}else if(this.AV===this.Cn){this.N.C4(A.aaL(A.
ach.Edit));this.N.Ca=[B=this.Cn,B.FW];}else{this.N.C4(null);this.N.Ca=null;}}else{
this.N.C4(A.aaL(A.ach.Am8));if((this.Ef.AqE===A.jb.Gk)||(this.Cn.AqE===A.jb.Gk)){
this.N.Lj.CZ(100);this.N.Ca=null;}else{this.N.Lj.CZ(255);this.N.Ca=[this,this.Bdr
];}}},Awg:function(){return this.KP;},Anw:function(){return this.Nc;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.AU9._Init.call(this.Ef={I:this},0);C.AU5._Init.
call(this.Cn={I:this},0);C.AxH._Init.call(this.CH={I:this},0);C.BX._Init.call(this.
Db={I:this},0);C.AsJ._Init.call(this.Go={I:this},0);C.AkX._Init.call(this.Ee={I:
this},0);C.AkX._Init.call(this.C$={I:this},0);C.BX._Init.call(this.B0={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);
C.UY._Init.call(this.Jm={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.Na._Init.call(this.Pu={
I:this},0);A.Device.K3._Init.call(this.K3={I:this},0);A.Device.TQ._Init.call(this.
Jk={I:this},0);C.AHf._Init.call(this.KU={I:this},0);A.Core.Timer._Init.call(this.
Amp={I:this},0);this.__proto__=C.ASn;var B;this.Background.L(A.jb.CU);this.N.Z(true
);this.Ek.As(false);this.Dr(C.APC);this.DY.A1(0x3F);this.DY.H(Ff);this.DY.L(A.jb.
CJ);this.Y.H(Ff);this.Y.JZ(9);this.Ef.H(AIZ);this.Ef.Aj(true);this.Ef.T(A.aaR(A.
acf.ACY));this.Ef.ATW(true);this.Ef.AF4(false);this.Cn.H(Bba);this.Cn.Aj(true);this.
Cn.T(A.aaR(A.acf.Aei));this.Cn.ATW(true);this.Cn.AFZ(true);this.CH.H(Ath);this.CH.
Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Db.H(Ath);this.Db.Aj(true);this.Db.T(
A.aaR(A.acf.Afs));this.Go.H(Bbb);this.Go.Aj(true);this.Go.T(A.aaR(A.acf.Jm));this.
Ee.H(Bui);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.Nc));this.Ee.Gb(1000);this.Ee.EV(
999000);this.Ee.Ahx(A._GetAutoObject(A.Device.Helper).Abz(this.AnimalType.Q));this.
C$.H(Bbb);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KP));this.C$.Gb(1000);this.C$.EV(
99000);this.C$.Ahx(A._GetAutoObject(A.Device.Helper).Abz(this.AnimalType.Q));this.
B0.H(Aov);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.Afx));this.Ay.H(Ix);this.Jk.B3=
false;this.Jk.Cx=true;this.Jk.HQ(1);this.Jk.Fr(1000);this.Jk.Ux(0);this.KU.H(Aao
);this.KU.Aj(true);this.KU.AnD(A.jb.Text);this.Amp.P0(3000);this.J(this.DY,0);this.
J(this.Y,0);this.J(this.Ef,0);this.J(this.Cn,0);this.J(this.CH,0);this.J(this.Db
,0);this.J(this.Go,0);this.J(this.Ee,0);this.J(this.C$,0);this.J(this.B0,0);this.
J(this.Ay,0);this.J(this.KU,0);this.N.CE=[this,this.Ew];this.N.Ce=[this,this.Ady
];this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeG));this.Y.Em=[this,this.Fk
];this.Ef.Gt([this,this.D_,this.GU]);this.Ef.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.Anz,B.Nr]);this.Ef.AFz([this,this.Auc]);this.Ef.ATI([this,this.A3S]);this.
Ef.ATJ([this,this.A3T]);this.Cn.Gt([this,this.D_,this.GU]);this.Cn.Acc([B=A._GetAutoObject(
A.Device.Helper).W,B.Awj,B.Q9]);this.Cn.OO=[this,this.Bfp];this.Cn.ATI([this,this.
A3S]);this.Cn.ATJ([this,this.A3T]);this.CH.Gt([this,this.D_,this.GU]);this.CH.L5([
B=this.CH,B.FW]);this.CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc
]);this.CH.CK(this.Breed);this.CH.AnE(this.Pu);this.Db.Au([B=this.Gender,B.B$,B.
Cc]);this.Db.CK(this.Gender);this.Go.Gt([this,this.D_,this.GU]);this.Go.L5([B=this.
Go,B.FW]);this.Go.L8(A.aaL(A.ach.Edit));this.Go.Au([B=this.Jm,B.B$,B.Cc]);this.Go.
CK(this.Jm);this.Go.AnE(this.K3);this.Ee.Au([this,this.Anw,this.Ahu]);this.C$.Au([
this,this.Awg,this.Ae0]);this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CK(this.
AnimalType);this.Ay.BnZ([this,this.A34]);this.Breed.L6(A._GetAutoObject(A.Device.
Helper).W);this.Jm.L6(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.L6(A.
_GetAutoObject(A.Device.Helper).W);this.Gender.L6(A._GetAutoObject(A.Device.Helper
).W);this.Gf=A._NewObject(A.Device.Animal,0);this.M0=A._GetAutoObject(C.Amx);this.
Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.AS_,B.A0V];this.Amp.MJ=[this,this.Aqd
];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Y.
_Done();this.Ef._Done();this.Cn._Done();this.CH._Done();this.Db._Done();this.Go.
_Done();this.Ee._Done();this.C$._Done();this.B0._Done();this.Ay._Done();this.Breed.
_Done();this.Jm._Done();this.AnimalType._Done();this.Gender._Done();this.Pu._Done(
);this.K3._Done();this.Jk._Done();this.KU._Done();this.Amp._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit(
);this.Ef._ReInit();this.Cn._ReInit();this.CH._ReInit();this.Db._ReInit();this.Go.
_ReInit();this.Ee._ReInit();this.C$._ReInit();this.B0._ReInit();this.Ay._ReInit(
);this.Breed._ReInit();this.Jm._ReInit();this.AnimalType._ReInit();this.Gender._ReInit(
);this.Pu._ReInit();this.K3._ReInit();this.Jk._ReInit();this.KU._ReInit();this.Amp.
_ReInit();this.Ef.T(A.aaR(A.acf.ACY));this.Cn.T(A.aaR(A.acf.Aei));this.CH.T(A.aaR(
A.acf.Breed));this.Db.T(A.aaR(A.acf.Afs));this.Go.T(A.aaR(A.acf.Jm));this.Ee.T(A.
aaR(A.acf.Nc));this.C$.T(A.aaR(A.acf.KP));this.B0.T(A.aaR(A.acf.Afx));},_Mark:function(
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
_cycle=D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K3)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Amp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewAnimalsMassRecording"};C.AsI={Zq:null,_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Zq={I:this},0);this.__proto__=C.
AsI;this.N.CS(A.aaR(A.acf.A6M));this.Number.H(Buj);this.Jl.H(Buk);this.IZ.H(Bul);
this.AkH(2);this.Bdo=false;this.Beu=true;this.Bev=false;this.Zq.H(Bum);this.Zq.KX(
true);this.Zq.R(A.aaR(A.acf.A$6));this.Zq.L(A.jb.Text);this.J(this.Zq,0);this.N.
CE=null;this.N.Ca=[this,this.AJb];this.N.C3(null);this.Zq.S(A.aaL(A.fl.Af));},_Done:
function(){this.__proto__=C.SetTransponderScreen;this.Zq._Done();C.SetTransponderScreen.
_Done.call(this);},_ReInit:function(){C.SetTransponderScreen._ReInit.call(this);
this.Zq._ReInit();this.N.CS(A.aaR(A.acf.A6M));this.Zq.R(A.aaR(A.acf.A$6));this.Zq.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this
,D);if((B=this.Zq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.AD$={Cv:null,FP:function(E){if(this.Ne===E)return;C.HN.FP.call(this,E);this.
Cv.CV(E);},Yz:function(HB){var B6=null;switch(HB){case-1:case 0:B6=this.F_;break;
case 1:B6=this.Cv;break;case 2:B6=this.G3;break;default:A.ab5("%s",Ah6);}return B6;
},_Init:function(aArg){C.HN._Init.call(this,aArg);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.AD$;this.H(Bun);this.Cv.H(BaP);this.F_.H(Buo);this.J(this.
Cv,-2);this.Cv.Dk=[this,this.GZ];},_Done:function(){this.__proto__=C.HN;this.Cv.
_Done();C.HN._Done.call(this);},_ReInit:function(){C.HN._ReInit.call(this);this.
Cv._ReInit();},_Mark:function(D){var B;C.HN._Mark.call(this,D);if((B=this.Cv)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsJ={G6:null
,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G6.M[0
]));},Ai:function(Ae){C.O1.Ai.call(this,Ae);if(this.Hm)this.G6.FP(A.jb.CJ);else this.
G6.FP(A.jb.CU);},A2F:function(){this.Bb(this.G6);},_Init:function(aArg){C.O1._Init.
call(this,aArg);C.HN._Init.call(this.G6={I:this},0);this.__proto__=C.AsJ;this.G6.
H(Bup);this.J(this.G6,0);this.G6.Au([this,this.AS0,this.AFS]);},_Done:function(){
this.__proto__=C.O1;this.G6._Done();C.O1._Done.call(this);},_ReInit:function(){C.
O1._ReInit.call(this);this.G6._ReInit();},_Mark:function(D){var B;C.O1._Mark.call(
this,D);if((B=this.G6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AxH={G6:null,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G6.M[0]));},Ai:function(Ae){C.O1.Ai.call(this,Ae);if(this.Hm)this.G6.FP(
A.jb.CJ);else this.G6.FP(A.jb.CU);},A2F:function(){this.Bb(this.G6);},_Init:function(
aArg){C.O1._Init.call(this,aArg);C.AD$._Init.call(this.G6={I:this},0);this.__proto__=
C.AxH;this.G6.A1(0x18);this.G6.H(Buq);this.J(this.G6,0);this.G6.Au([this,this.AS0
,this.AFS]);},_Done:function(){this.__proto__=C.O1;this.G6._Done();C.O1._Done.call(
this);},_ReInit:function(){C.O1._ReInit.call(this);this.G6._ReInit();},_Mark:function(
D){var B;C.O1._Mark.call(this,D);if((B=this.G6)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acx={ScreenTypeToString:
null,Du:function(){return 4;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BT(this.C7(aIndex));},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acx;this.BI.Set(0,3);this.BI.Set(1,35);this.BI.Set(2
,34);this.BI.Set(3,43);},_Done:function(){this.__proto__=C.Cm;this.ScreenTypeToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AWo={KU:null,HI:null,LY:null,IN:null,KL:A.jV,Aqu:false,ALw:false,A2Y:false,Init:
function(aArg){var B;A.zX([this,this.BfV],[B=A._GetAutoObject(A.Device.Device),B.
Ut,B.Vb],0);A.pe([this,this.BfV],this);A.pe([this,this.Aqd],this);},WK:function(
G){this.AgA();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.Settings),[this,this.A39]);A.
_GetAutoObject(C.BS).Fz();this.AMn();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.LinkTransponder
));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.ARP)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DF:function(G){},H1:function(
G){if((this.Aqu===false)||!this.KL.length){C.M_.H1.call(this,G);return;}if(!this.
KL.length)this.LY.Mw=true;var FK=A._GetAutoObject(A.Device.AkL).Bga(this.KL);this.
KL=A.jV;if(!FK){if((this.KL.length<13)&&!A._GetAutoObject(A.Device.Device).OZ)A.
_GetAutoObject(A.Device.Device).AY(105,true,A.jV,0,[this,this.SL]);else A._GetAutoObject(
A.Device.Device).AY(103,true,A.jV,0,[this,this.SL]);A.pe([this,this.WM],this);return;
}if(A._GetAutoObject(A.Device.Helper).BkD(FK)){A.pe([this,this.A$X],this);A.pe([
this,this.Aaq],this);}else{A._GetAutoObject(A.Device.Device).AY(117,true,A.jV,0,[
this,this.SL]);A.pe([this,this.WM],this);}},CC:function(G){C.M_.CC.call(this,G);
if(this.A2Y){this.A2Y=false;A.pe([this,this.A01],this);}},Agj:function(G){if(this.
Aqu&&(this.KL.length>0)){A.pe([this,this.Alp],this);return;}C.M_.Agj.call(this,G
);this.A$n(true);},AbB:function(){return C.ACq;},AbC:function(){return C.ADK;},Rb:
function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper
).A7r(Math.max(A._GetAutoObject(A.Device.Device).Av6,A._GetAutoObject(A.Device.Helper
).A7j(A._GetAutoObject(A.Device.Device).An))+1));},HS:function(G){C.M_.HS.call(this
,G);if((((A._GetAutoObject(A.Device.Converter).S8(A._GetAutoObject(A.Device.Device
).OZ)===10)&&this.ALw)&&!!this.Bg.AX)&&!this.Bg.AX.B_()){this.N.Ct(null);this.N.
E6(A.aaR(A.acf.No));this.N.Ce=[this,this.BBw];this.N.C4(null);this.N.CS(A.aaR(A.
acf.Yes));this.N.Ca=[this,this.BBx];}else if(A._GetAutoObject(A.Device.Helper).ARA(
)){this.N.Ct(A.aaL(A.ach.Ard));this.N.Ce=null;this.N.E6(A.jV);this.N.IS.CZ(100);
}else if(this.Akj()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajt(
A._GetAutoObject(A.Device.Converter).AMi(this.L3.ADl())));this.N.Ce=[this,this.Aaq
];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false);},Agm:function(){A._GetAutoObject(
C.A7).Cb(86);},ABi:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.Fa();var Azf=aFilter.DM(26,4);if(!!Azf){aFilter.Nw(Azf);A._GetAutoObject(
A.Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GW(0);}},A7h:function(){return C.
APJ;},Bgz:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.Fa(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DM(26,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},A39:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A2Y=true;A._GetAutoObject(C.A7).Cb(89);},ALD:function(G){if(A._GetAutoObject(
A.Device.Converter).S8(A._GetAutoObject(A.Device.Device).OZ)===10){if(this.ALw){
this.Dl(A.aaR(A.acf.Bo4));this.Bg.NU.S(A.aaL(A.fl.Bh));}else{this.Dl(A.aaR(A.acf.
AEI));this.Bg.NU.S(A.aaL(A.fl.Af));}}else this.Dl(A.aaR(A.acf.AEI));},A$n:function(
E){if(this.ALw===E)return;this.ALw=E;A.pe([this,this.AoG],this);A.pe([this,this.
ALD],this);},BBx:function(G){A._GetAutoObject(C.A7).Acf(90);},BBw:function(G){this.
A$n(false);},BfV:function(G){this.Bmx(A._GetAutoObject(A.Device.Helper).ARA());}
,Bmx:function(E){if(this.Aqu===E)return;this.Aqu=E;A.pe([this,this.Z9],this);A.pe([
this,this.Aqd],this);},Aqd:function(G){this.KU.Z(this.Aqu);if(this.Aqu)this.A_K(
Bbc);else this.A_K(Alf);},AAQ:function(G){if(this.KL.length<17)this.KL=this.KL+String.
fromCharCode(this.HI.Dy);},Awd:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===
0x0A))this.H1(this);else this.IN.Mw=true;},WM:function(G){A._GetAutoObject(A.Device.
Device).Aqx();A.ab5("%s",Bur);},SL:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(A.Device.Device).X8();
else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(A.Device.Device).X8();
else if(Ar.PopupState===7){A._GetAutoObject(C.A7).Cb(76);A._GetAutoObject(A.Device.
Device).X8();}}}else A._GetAutoObject(A.Device.Device).X8();},_Init:function(aArg
){C.M_._Init.call(this,aArg);C.AHf._Init.call(this.KU={I:this},0);A.Core.BF._Init.
call(this.HI={I:this},0);A.Core.BF._Init.call(this.LY={I:this},0);A.Core.BF._Init.
call(this.IN={I:this},0);this.__proto__=C.AWo;this.Dr(C.ADB);this.Dl(A.aaR(A.acf.
AEI));this.KU.H(Aov);this.KU.T(A.aaR(A.acf.AUV));this.KU.AnD(A.jb.Text);this.KU.
A_g(A.jb.AV);this.HI.Filter=143;this.LY.Filter=149;this.IN.Filter=145;this.J(this.
KU,0);this.ATE(A._GetAutoObject(C.Ayb));this.HI.BG=[this,this.AAQ];this.LY.BG=[this
,this.Alp];this.IN.BG=[this,this.Awd];this.Init(aArg);},_Done:function(){this.__proto__=
C.M_;this.KU._Done();this.HI._Done();this.LY._Done();this.IN._Done();C.M_._Done.
call(this);},_ReInit:function(){C.M_._ReInit.call(this);this.KU._ReInit();this.HI.
_ReInit();this.LY._ReInit();this.IN._ReInit();this.Dl(A.aaR(A.acf.AEI));this.KU.
T(A.aaR(A.acf.AUV));},_Mark:function(D){var B;C.M_._Mark.call(this,D);if((B=this.
KU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.LY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::YoungNoTransponderListScreen"};C.AWn={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AWn;this.K1.As(false);this.K1.
Aj(false);this.K1.Z(false);this.Bnz(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARs={Sx:null,Q:null,A8B:0,Ne:0,Init:function(aArg){this.ATH(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sx)this.Sx.Au(E);},ATH:function(
E){if(this.A8B===E)return;this.A8B=E;var X;switch(E){case 2:X=A._NewObject(C.HN,
0);break;case 3:X=A._NewObject(C.AD$,0);break;case 4:X=A._NewObject(C.ARp,0);break;
case 5:X=A._NewObject(C.ARq,0);break;case 6:X=A._NewObject(C.AvX,0);break;default:{
X=null;A.ab5("%s%i",Bus,E);}}this.Bny(X);},Bny:function(E){if(this.Sx===E)return;
if(!!this.Sx){this.Sx.Au(null);this.HR(this.Sx);}this.Sx=E;if(!!this.Sx){this.Sx.
Au(this.Q);this.J(this.Sx,0);}},FP:function(E){if(this.Ne===E)return;this.Ne=E;if(
!!this.Sx)this.Sx.FP(E);},SV:function(GA){if(!!this.Sx)this.Sx.SV(GA);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARs;this.H(Ayw);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sx)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARp={CW:null,Cv:null,FP:function(
E){if(this.Ne===E)return;C.HN.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);},Yz:function(
HB){var B6=null;switch(HB){case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;
case 2:B6=this.CW;break;case 3:B6=this.G3;break;default:A.ab5("%s",Ah6);}return B6;
},_Init:function(aArg){C.HN._Init.call(this,aArg);C.DG._Init.call(this.CW={I:this
},0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARp;this.H(But);this.G3.
H(Alo);this.CW.H(BaQ);this.Cv.H(BaR);this.F_.H(BaS);this.J(this.CW,-2);this.J(this.
Cv,-2);this.CW.Dk=[this,this.GZ];this.Cv.Dk=[this,this.GZ];},_Done:function(){this.
__proto__=C.HN;this.CW._Done();this.Cv._Done();C.HN._Done.call(this);},_ReInit:function(
){C.HN._ReInit.call(this);this.CW._ReInit();this.Cv._ReInit();},_Mark:function(D
){var B;C.HN._Mark.call(this,D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.AC7={S9:null,Ai:function(Ae){C.Aby.Ai.call(this,Ae);this.S9.L(this.V.AQ);},_Init:
function(aArg){C.Aby._Init.call(this,aArg);C.CG._Init.call(this.S9={I:this},0);this.
__proto__=C.AC7;this.V.Z(false);this.AW.H(Buu);this.AW.ATH(4);this.S9.H(Buv);this.
S9.R(A.aaR(A.acf.Kq));this.S9.L(A.jb.Bm);this.J(this.S9,0);this.S9.S(A.aaL(A.fl.
Af));this.S9.A0(A.aaL(A.fl.Ak));this.S9.Cr(null);},_Done:function(){this.__proto__=
C.Aby;this.S9._Done();C.Aby._Done.call(this);},_ReInit:function(){C.Aby._ReInit.
call(this);this.S9._ReInit();this.S9.R(A.aaR(A.acf.Kq));this.S9.S(A.aaL(A.fl.Af)
);this.S9.A0(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Aby._Mark.call(this,D);
if((B=this.S9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.L4={Y7:null,Ud:null,AQ:0,A7S:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y7.L(this.AQ);this.Ud.L(this.AQ);},A_G:function(E){var B;if(this.A7S===
E)return;this.A7S=E;if(E){this.Y7.Z(true);this.Ud.DD([this.Ud.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y7.Z(false);this.Ud.DD([this.Ud.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C8._Init.call(
this.Y7={I:this},0);A.acg.C8._Init.call(this.Ud={I:this},0);this.__proto__=C.L4;
this.H(A0B);this.Y7.A1(0x2D);this.Y7.DD(Ah1);this.Y7.DN(Bbd);this.Y7.L(A.jb.Text
);this.Ud.A1(0x36);this.Ud.DD(Bbd);this.Ud.DN(Buw);this.Ud.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y7,0);this.J(this.Ud,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y7._Done();this.Ud._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y7._ReInit();this.Ud._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Ud)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUM={SC:null,PK:null,Db:null,B0:null,CH:null,GS:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pu:null,UY:null,K3:null,Init:function(aArg){A.zX([this
,this.AuW],this.B0.Q,0);A.zX([this,this.ANf],this.CH.Q,0);A.zX([this,this.Brs],this.
SC.Q,0);A.zX([this,this.Avy],this.Db.Q,0);A.zX([this,this.AWk],this.GS.Q,0);},AuW:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.B0.Q,F[1].call(F[
0])));},Brs:function(G){var F;A._GetAutoObject(A.Device.Device).Axo((F=this.SC.Q
,F[1].call(F[0])));},Avy:function(G){var F;A._GetAutoObject(A.Device.Device).J0((
F=this.Db.Q,F[1].call(F[0])));},AWk:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GS.Q,F[1].call(F[0])));},ANf:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.
call(this,aArg);C.BX._Init.call(this.SC={I:this},0);C.Iv._Init.call(this.PK={I:this
},0);C.BX._Init.call(this.Db={I:this},0);C.BX._Init.call(this.B0={I:this},0);C.AxH.
_Init.call(this.CH={I:this},0);C.AsJ._Init.call(this.GS={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.Na._Init.call(this.Pu={I:this},0);C.UY._Init.call(this.UY={I:
this},0);A.Device.K3._Init.call(this.K3={I:this},0);this.__proto__=C.AUM;var B;this.
Jf((A.aaR(A.acf.Asw)+AyJ)+A.aaR(A.acf.AjI));this.SC.H(Ah4);this.SC.Aj(true);this.
SC.T(A.aaR(A.acf.BaH));this.SC.Bi(true);this.SC.Bx(0);this.PK.H(Ayu);this.PK.Aj(
true);this.PK.Z(true);this.PK.T(A.aaR(A.acf.AdV));this.PK.Gb(0);this.PK.EV(99);this.
PK.IW(A.aaR(A.acf.Kq));this.PK.Jg(A.aaR(A.acf.GL));this.Db.H(Aao);this.Db.Aj(true
);this.Db.T(A.aaR(A.acf.Afs));this.Db.Bi(true);this.Db.Bx(0);this.B0.H(All);this.
B0.Aj(true);this.B0.T(A.aaR(A.acf.Afx));this.B0.Bi(true);this.B0.Bx(0);this.CH.H(
Ah5);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.CH.Bi(false);this.GS.H(
Ah5);this.GS.Aj(true);this.GS.T(A.aaR(A.acf.Jm));this.GS.Bi(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.UY.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.SC,0);this.
J(this.PK,0);this.J(this.Db,0);this.J(this.B0,0);this.J(this.CH,0);this.J(this.GS
,0);this.SC.Au([B=this.WeightRecordingScope,B.B$,B.Cc]);this.SC.CK(this.WeightRecordingScope
);this.PK.Au([B=A._GetAutoObject(A.Device.Device),B.A8U,B.BbA]);this.Db.Au([B=this.
Gender,B.B$,B.Cc]);this.Db.CK(this.Gender);this.B0.Au([B=this.AnimalType,B.B$,B.
Cc]);this.B0.CK(this.AnimalType);this.CH.Gt([this,this.D_,this.GU]);this.CH.L5([
B=this.CH,B.FW]);this.CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc
]);this.CH.CK(this.Breed);this.CH.AnE(this.Pu);this.GS.Gt([this,this.D_,this.GU]
);this.GS.L5([B=this.GS,B.FW]);this.GS.L8(A.aaL(A.ach.Edit));this.GS.Au([B=this.
UY,B.B$,B.Cc]);this.GS.CK(this.UY);this.GS.AnE(this.K3);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cg;this.SC._Done();this.PK._Done();this.Db._Done();this.
B0._Done();this.CH._Done();this.GS._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pu._Done();this.UY._Done();this.
K3._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
SC._ReInit();this.PK._ReInit();this.Db._ReInit();this.B0._ReInit();this.CH._ReInit(
);this.GS._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pu._ReInit();this.UY._ReInit();
this.K3._ReInit();this.Jf((A.aaR(A.acf.Asw)+AyJ)+A.aaR(A.acf.AjI));this.SC.T(A.aaR(
A.acf.BaH));this.PK.T(A.aaR(A.acf.AdV));this.PK.IW(A.aaR(A.acf.Kq));this.PK.Jg(A.
aaR(A.acf.GL));this.Db.T(A.aaR(A.acf.Afs));this.B0.T(A.aaR(A.acf.Afx));this.CH.T(
A.aaR(A.acf.Breed));this.GS.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Cg._Mark.
call(this,D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UY)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.K3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUL={QT:null,FD:null,Ir:null,Da:null,Dn:null,EL:null,AutoRegistrationMode:null
,AdY:null,Init:function(aArg){var B;A.zX([this,this.BhX],this.QT.Q,0);A.zX([this
,this.Bfa],[B=A._GetAutoObject(A.Device.Device),B.ASK,B.A0H],0);A.zX([this,this.
Adz],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_],0);A.zX([this,this.Adz],[B=
A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.pe([this,this.Bfa],this);A.pe([
this,this.Adz],this);},BhX:function(G){var F;A._GetAutoObject(A.Device.Device).AwB((
F=this.QT.Q,F[1].call(F[0])));},Bfa:function(G){switch(A._GetAutoObject(A.Device.
Device).AgD){case 0:A._GetAutoObject(A.Device.Helper).J6(this.Ir,true);break;case
1:A._GetAutoObject(A.Device.Helper).J6(this.Ir,false);break;default:throw new Error(
Bux+A._GetAutoObject(A.Device.Device).AgD.toFixed());}},Adz:function(G){var F,Cu;
if(((F=this.Da.Q,F[1].call(F[0]))+(Cu=this.Dn.Q,Cu[1].call(Cu[0])))>12)(Cu=this.
Dn.Q,Cu[2].call(Cu[0],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.BX._Init.call(this.QT={I:this},0);C.BX._Init.call(this.
FD={I:this},0);C.AGX._Init.call(this.Ir={I:this},0);C.Iv._Init.call(this.Da={I:this
},0);C.Iv._Init.call(this.Dn={I:this},0);C.Av7._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdY._Init.
call(this.AdY={I:this},0);this.__proto__=C.AUL;var B;this.Jf(A.aaR(A.acf.Aqt));this.
QT.H(AIZ);this.QT.Aj(true);this.QT.T(A.aaR(A.acf.Aqt));this.QT.Bi(false);this.QT.
Gb(-1);this.QT.EV(1);this.FD.H(U7);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.
aaR(A.acf.Aqq));this.FD.Bi(true);this.Ir.H(Aao);this.Ir.Aj(true);this.Ir.Z(true);
this.Ir.T(A.aaR(A.acf.AEG));this.Ir.Bi(true);this.Da.H(All);this.Da.Aj(true);this.
Da.Z(true);this.Da.T(A.aaR(A.acf.AqN));this.Da.Bi(false);this.Da.Gb(2);this.Da.EV(
6);this.Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(Ah5);this.Dn.
Aj(true);this.Dn.T(A.aaR(A.acf.Zs));this.Dn.Bi(true);this.Dn.Gb(0);this.Dn.EV(12
);this.Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Buy);this.EL.
As(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.Ar_(A.aaR(A.acf.Aqs));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QT,0);this.
J(this.FD,0);this.J(this.Ir,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL
,0);this.QT.Au([B=this.AutoRegistrationMode,B.B$,B.Cc]);this.QT.CK(this.AutoRegistrationMode
);this.FD.Au([B=this.AdY,B.B$,B.Cc]);this.FD.CK(this.AdY);this.Ir.Uw([B=A._GetAutoObject(
A.Device.Device),B.WJ,B.A0K]);this.Ir.Aky([B=A._GetAutoObject(A.Device.Device),B.
Awl,B.Ay0]);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.Dn.
Au([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.EL.DC(A.aaL(A.ach.AjZ));
this.EL.OU([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.EL.PZ([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.QT._Done();this.FD._Done();this.Ir._Done();this.Da._Done();this.Dn._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdY._Done();C.Cg._Done.
call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.QT._ReInit();this.FD.
_ReInit();this.Ir._ReInit();this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdY._ReInit();this.Jf(A.aaR(A.acf.Aqt
));this.QT.T(A.aaR(A.acf.Aqt));this.FD.T(A.aaR(A.acf.Aqq));this.Ir.T(A.aaR(A.acf.
AEG));this.Da.T(A.aaR(A.acf.AqN));this.Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.
acf.Ez));this.Dn.T(A.aaR(A.acf.Zs));this.Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(
A.acf.Ez));this.EL.Ar_(A.aaR(A.acf.Aqs));},_Mark:function(D){var B;C.Cg._Mark.call(
this,D);if((B=this.QT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ir)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVQ={OP:null,FD:null,Ir:null,Da:null,Dn:null,EL:null,Afw:null,Init:function(
aArg){var B;A.zX([this,this.BfP],[B=A._GetAutoObject(A.Device.Device),B.ATa,B.A0X
],0);A.zX([this,this.Adz],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_],0);A.zX([
this,this.Adz],[B=A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.pe([this,this.
BfP],this);A.pe([this,this.Adz],this);},BfP:function(G){var ALi=false;var AaW=false;
switch(A._GetAutoObject(A.Device.Device).Ak7){case 0:{ALi=false;AaW=false;}break;
case 1:{ALi=true;AaW=false;}break;case 2:{ALi=false;AaW=true;}break;default:throw new
Error(Buz+A._GetAutoObject(A.Device.Device).Ak7.toFixed());}A._GetAutoObject(A.Device.
Helper).J6(this.Ir,ALi);A._GetAutoObject(A.Device.Helper).J6(this.Da,AaW);A._GetAutoObject(
A.Device.Helper).J6(this.Dn,AaW);A._GetAutoObject(A.Device.Helper).J6(this.EL,AaW
);},Adz:function(G){var F,Cu;if(((F=this.Da.Q,F[1].call(F[0]))+(Cu=this.Dn.Q,Cu[
1].call(Cu[0])))>12)(Cu=this.Dn.Q,Cu[2].call(Cu[0],12-(F=this.Da.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Iv._Init.call(this.OP={
I:this},0);C.BX._Init.call(this.FD={I:this},0);C.AGX._Init.call(this.Ir={I:this}
,0);C.Iv._Init.call(this.Da={I:this},0);C.Iv._Init.call(this.Dn={I:this},0);C.Av7.
_Init.call(this.EL={I:this},0);C.Afw._Init.call(this.Afw={I:this},0);this.__proto__=
C.AVQ;var B;this.Jf(A.aaR(A.acf.LinkTransponder));this.OP.H(AIZ);this.OP.Aj(true
);this.OP.Z(true);this.OP.T(A.aaR(A.acf.A8a));this.OP.Bi(false);this.OP.Gb(1);this.
OP.EV(365);this.OP.IW(A.aaR(A.acf.Kq));this.OP.Jg(A.aaR(A.acf.GL));this.FD.H(U7);
this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqq));this.FD.Bi(true);this.
Ir.H(Aao);this.Ir.Aj(true);this.Ir.Z(true);this.Ir.T(A.aaR(A.acf.AEG));this.Ir.Bi(
false);this.Da.H(All);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.AqN
));this.Da.Bi(false);this.Da.Gb(2);this.Da.EV(6);this.Da.IW(A.aaR(A.acf.OK));this.
Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(Ah5);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.Zs)
);this.Dn.Bi(true);this.Dn.Gb(0);this.Dn.EV(12);this.Dn.IW(A.aaR(A.acf.OK));this.
Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Aou);this.EL.As(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar_(A.aaR(A.acf.Aqs));this.J(this.OP,0);this.J(this.FD,0);this.
J(this.Ir,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL,0);this.OP.Au([B=
A._GetAutoObject(A.Device.Device),B.A9p,B.BbR]);this.FD.Au([B=this.Afw,B.B$,B.Cc
]);this.FD.CK(this.Afw);this.Ir.Uw([B=A._GetAutoObject(A.Device.Device),B.WJ,B.A0K
]);this.Ir.Aky([B=A._GetAutoObject(A.Device.Device),B.Awl,B.Ay0]);this.Da.Au([B=
A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.Dn.Au([B=A._GetAutoObject(A.Device.
Device),B.Us,B.U$]);this.EL.DC(A.aaL(A.ach.AjZ));this.EL.OU([B=A._GetAutoObject(
A.Device.Device),B.Ur,B.U_]);this.EL.PZ([B=A._GetAutoObject(A.Device.Device),B.Us
,B.U$]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.OP._Done();this.
FD._Done();this.Ir._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.
Afw._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
OP._ReInit();this.FD._ReInit();this.Ir._ReInit();this.Da._ReInit();this.Dn._ReInit(
);this.EL._ReInit();this.Afw._ReInit();this.Jf(A.aaR(A.acf.LinkTransponder));this.
OP.T(A.aaR(A.acf.A8a));this.OP.IW(A.aaR(A.acf.Kq));this.OP.Jg(A.aaR(A.acf.GL));this.
FD.T(A.aaR(A.acf.Aqq));this.Ir.T(A.aaR(A.acf.AEG));this.Da.T(A.aaR(A.acf.AqN));this.
Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(A.acf.Zs));this.
Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.Ar_(A.aaR(A.acf.Aqs));
},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afw={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bhd],[B=A._GetAutoObject(A.Device.Device),B.ATa,B.A0X],0);A.pe([
this,this.Bhd],this);},Du:function(){return 3;},Gm:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axj(E);},Bhd:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak7;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afw;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Ji={B7:null,I2:null,Cq:null,AmF:null,Sl:null,Anq:null,AjF:null,Text:null,CY:
null,D6:0,LF:false,Ai:function(Ae){var B;A.acn.Ji.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.I2.As(true);else{this.I2.As(false);this.CY.Z(false);}},A47:function(G
){var B;var Be=this.Text.M;var NG=0;var NH=0;if(this.CY.Et[0]<Be[0])NG=Be[0]-this.
CY.Et[0];if(this.CY.Et[0]>Be[2])NG=Be[2]-this.CY.Et[0];if(this.CY.Et[1]<Be[1])NH=
Be[1]-this.CY.Et[1];if(this.CY.ED[1]>Be[3])NH=Be[3]-this.CY.ED[1];if(!!NG||!!NH)
this.Text.Gc(A.abf(this.Text.Br,[NG,NH]));NG=this.Text.Br[0];NH=this.Text.Br[1];
var C6=[(B=this.Text.Dd())[2]-B[0],B[3]-B[1]];if(C6[0]<=((B=this.Text.M)[2]-B[0]
))NG=0;if(C6[1]<=((B=this.Text.M)[3]-B[1]))NH=0;this.Text.Gc([NG,NH]);},Ams:function(
G){if(!this.B7)return;var A4x=this.Text.AG_(this.D6);var pos=this.Text.Afj(A4x);
this.CY.DN(A.abe(pos,[0,this.B7.Ascent]));this.CY.DD(A.abf(pos,[0,this.B7.Descent
]));if(this.I2.Bw){this.I2.As(false);this.I2.As(true);}if(this.LF){A.pe([this,this.
A47],this);this.LF=false;}},AAO:function(G){if(!this.B7)return;var EH=this.Text.
AG_(this.D6);if(this.Cq.CP===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnX(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ADn(EH[1]).length,EH[1]];}}if(this.Cq.CP===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnX(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cq.CP===4){var pos=this.Text.Afj(EH);var AaV=(this.B7.Ascent+this.B7.
Descent)+this.B7.Leading;EH=this.Text.AUn(A.abe(pos,[0,AaV]));}if(this.Cq.CP===5
){var pos=this.Text.Afj(EH);var AaV=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;
EH=this.Text.AUn(A.abf(pos,[0,AaV]));}var Vp=this.Text.AnX(EH);var IC=this.Text.
String.charCodeAt(Vp)||0;if(((IC===0x5E)||(IC===0x7E))||(IC===0x25))Vp=Vp-1;if(Vp
!==this.D6){this.D6=Vp;A.pe([this,this.Ams],this);this.LF=true;}},Bfj:function(G
){if(!this.D6)return;var IC=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
IC===0x5E)||(IC===0x7E))||(IC===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.LF=true;},AAP:function(G){if(this.D6>=(this.Text.
String.length-1))return;var IC=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(IC===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.LF=true;}
,Bfx:function(G){this.Text.R(A.abU(this.Text.String,BuA,this.D6));this.D6=this.D6+
1;this.LF=true;},Bfl:function(G){var IC=this.AjF.Dy;var Aux=String.fromCharCode(
IC);A.ab5("%c",IC);if((((IC===0x5E)||(IC===0x7E))||(IC===0xAD))||(IC===0x25))Aux=
BuB+String.fromCharCode(IC);this.Text.R(A.abU(this.Text.String,Aux,this.D6));this.
D6=this.D6+Aux.length;this.LF=true;},_Init:function(aArg){A.acn.Ji._Init.call(this
,aArg);A.acl.TQ._Init.call(this.I2={I:this},0);A.Core.BF._Init.call(this.Cq={I:this
},0);A.Core.BF._Init.call(this.AmF={I:this},0);A.Core.BF._Init.call(this.Sl={I:this
},0);A.Core.BF._Init.call(this.Anq={I:this},0);A.Core.BF._Init.call(this.AjF={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C8._Init.call(this.CY={
I:this},0);this.__proto__=C.Ji;var B;this.H(BuC);this.I2.B3=false;this.I2.Cx=true;
this.I2.Fr(500);this.I2.Ux(500);this.Cq.Filter=147;this.Cq.Bw=false;this.AmF.Filter=
151;this.Sl.Filter=44;this.Anq.Filter=149;this.AjF.Filter=145;this.Text.A1(0x3F);
this.Text.H(BuD);this.Text.KX(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CY.DD(BuE);this.CY.DN(BuF);this.CY.A$i(2);this.CY.A$h(2);this.
CY.L(0xFF000000);this.CY.Z(false);this.J(this.Text,0);this.J(this.CY,0);this.I2.
Q=[B=this.CY,B.Fq,B.Z];this.Cq.BG=[this,this.AAO];this.Cq.D1=[this,this.AAO];this.
AmF.BG=[this,this.Bfj];this.AmF.D1=[this,this.Bfj];this.Sl.BG=[this,this.AAP];this.
Sl.D1=[this,this.AAP];this.Anq.BG=[this,this.Bfx];this.Anq.D1=[this,this.Bfx];this.
AjF.BG=[this,this.Bfl];this.AjF.D1=[this,this.Bfl];this.Text.Q_([this,this.Ams]);
this.Text.S(A.aaL(A.aci.AC$));this.B7=A.aaL(A.aci.AC$);},_Done:function(){this.__proto__=
A.acn.Ji;this.I2._Done();this.Cq._Done();this.AmF._Done();this.Sl._Done();this.Anq.
_Done();this.AjF._Done();this.Text._Done();this.CY._Done();A.acn.Ji._Done.call(this
);},_ReInit:function(){A.acn.Ji._ReInit.call(this);this.I2._ReInit();this.Cq._ReInit(
);this.AmF._ReInit();this.Sl._ReInit();this.Anq._ReInit();this.AjF._ReInit();this.
Text._ReInit();this.CY._ReInit();},_Mark:function(D){var B;A.acn.Ji._Mark.call(this
,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I2)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjF)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVE={Ji:null,DF:function(G
){switch(this.Cq.CP){case 6:A._GetAutoObject(A.Device.Device).Aqx();break;case 7:
A._GetAutoObject(A.Device.Device).Aqv();break;case 4:A._GetAutoObject(A.Device.Device
).X8();break;case 5:A._GetAutoObject(A.Device.Device).Aqw();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A7).FB();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Ji._Init.call(this.Ji={I:this},0);this.__proto__=C.AVE;this.H(Cf);this.
N.Z(true);this.Dr(C.Aq9);this.Ji.H(Ff);this.J(this.Ji,0);this.Bb(this.Ji);this.N.
CE=[this,this.Ew];this.N.C3(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Ji._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Ji._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Ji)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUu={WK:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B_()>0)){A._GetAutoObject(
C.BS).TG(A.aaR(A.acf.ACv),[this,this.Bbq]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TG(A.aaR(A.acf.AHs),[this,this.A8L]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TG(A.aaR(A.acf.A6b),[this,this.Bbp]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TG(A.aaR(A.acf.UnlinkTransponder),[this,this.BoE]);}else{A._GetAutoObject(
C.BS).Aa3(A.aaR(A.acf.ACv));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Aa3(
A.aaR(A.acf.AHs));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Aa3(A.aaR(A.
acf.A6b));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.A6A)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fz();this.AuO(A.aaR(A.acf.A6s),[this,this.Bha
],this.OJ);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(
A.acf.A6N));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.Anm
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},AbB:function(){return C.
ACr;},AbC:function(){return C.ADI;},Rb:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).AvB());},HS:function(G){C.AkR.HS.call(
this,G);this.N.Ct(null);this.N.E6(A.aaR(A.acf.A55));if(this.AJV()){this.N.Ce=[this
,this.AI0];this.N.JE.CZ(255);}else{this.N.Ce=null;this.N.JE.CZ(100);}this.N.C4(A.
aaL(A.ach.Options));this.N.CS(A.jV);this.N.OW(false);this.N.OX(false);this.N.IS.
CZ(255);},ASD:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var Ai0=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).AY(96,true,Ai0.toFixed(),0,null);},ASE:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6G(this);},ASI:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).OZ){A._GetAutoObject(A.Device.Device
).AY(73,true,A.jV,0,[this,this.Bfz]);return;}if(A._GetAutoObject(A.Device.Device
).Arq()===false){A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.
Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV,0,[this,this.Agl]);return;
}A.zX([this,this.Al7],[B=A._GetAutoObject(A.Device.Device).Gg,B.SK,B.E5],0);var A4O=
!!this.OJ&&!(F=this.OJ,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asy(2,
A4O);},AJV:function(){if(!this.Bg)return false;var AtS=this.Bg.AX;if(!AtS)return false;
if(!AtS.B_())return false;return true;},Al7:function(G){var B;var F;switch(A._GetAutoObject(
A.Device.Device).Gg.EN){case 0:A.z$([this,this.Al7],[B=A._GetAutoObject(A.Device.
Device).Gg,B.SK,B.E5],0);break;case 3:{if(!!this.OJ&&(F=this.OJ,F[1].call(F[0]))
)A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(
A.Device.Converter).S8(A._GetAutoObject(A.Device.Device).OZ)===10){this.Dl(A.aaR(
A.acf.Bj3));this.Bg.NU.S(A.aaL(A.fl.Bh));}else this.Dl(A.aaR(A.acf.A$y));A._GetAutoObject(
A.Device.Device).AqL();}break;case 4:{A._GetAutoObject(A.Device.Device).AY(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gg.E7();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).Gg.EN);},_Init:function(aArg){C.AkR._Init.call(
this,aArg);this.__proto__=C.AUu;var B;this.Dr(C.APF);this.A_t([B=A._GetAutoObject(
A.Device.Device),B.A9v,B.BbW]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADI={PH:null,Jb:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PH={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);this.__proto__=
C.ADI;this.Es.Z(false);this.DS.Z(false);this.PH.H(BuG);this.PH.L(A.jb.Text);this.
Jb.H(BuH);this.Jb.L(A.jb.Text);this.J(this.PH,0);this.J(this.Jb,0);this.PH.Ax(A.
aaL(A.ach.AvO));this.Jb.Ax(A.aaL(A.ach.AvJ));},_Done:function(){this.__proto__=C.
De;this.PH._Done();this.Jb._Done();C.De._Done.call(this);},_ReInit:function(){C.
De._ReInit.call(this);this.PH._ReInit();this.Jb._ReInit();},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.ANa={Init:function(aArg){var B;A.zX([this,this.AAT],[B=A._GetAutoObject(A.Device.
Device),B.AET,B.AI4],0);A.pe([this,this.AAT],this);},WK:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B_()>0)){if(this.AJV())A._GetAutoObject(C.BS).TG(A.aaR(
A.acf.AOz),[this,this.AI0]);else A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.AOz));A.
_GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.ACt),[this,this.
Bbq]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.AHs),[this
,this.A8L]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TG(A.aaR(A.acf.A6a
),[this,this.Bbp]);}else{A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.AOz));A._GetAutoObject(
C.BS).Fz();A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.ACt));A._GetAutoObject(C.BS).Fz(
);A._GetAutoObject(C.BS).Aa3(A.aaR(A.acf.AHs));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Aa3(A.aaR(A.acf.A6a));}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).
Mp(A.aaR(A.acf.A6A)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();this.AuO(A.aaR(
A.acf.A6s),[this,this.Bha],this.OJ);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mp(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();A.
_GetAutoObject(C.BS).Mp(A.aaR(A.acf.A6N));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mp(A.aaR(A.acf.Anm)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},AbB:function(){return C.ACn;},AbC:function(){return C.ADG;},Rb:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOV(
));},HS:function(G){C.AkR.HS.call(this,G);this.N.Ct(A.aaL(A.ach.AeG));this.N.Ce=[
this,this.Ady];this.N.E6(A.jV);this.N.C4(null);this.N.CS((A.aaR(A.acf.A55)+String.
fromCharCode(0x0A))+A.aaR(A.acf.Bh5));this.N.OW(false);this.N.OX(false);this.N.IS.
CZ(255);},ASD:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var Ai0=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).AY(96,true,Ai0.toFixed(),0,null);},ASE:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6F(this);},ASI:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).OZ){A._GetAutoObject(A.Device.Device
).AY(73,true,A.jV,0,[this,this.Bfz]);return;}if(A._GetAutoObject(A.Device.Device
).Arq()===false){A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.
Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV,0,[this,this.Agl]);return;
}A.zX([this,this.Al7],[B=A._GetAutoObject(A.Device.Device).Gg,B.SK,B.E5],0);var A4O=
!!this.OJ&&!(F=this.OJ,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asy(0,
A4O);},AJV:function(){var AtS=this.Bg.AX;if(!AtS)return false;var O;for(O=0;O<AtS.
B_();O++)if(A._GetAutoObject(A.Device.Helper).Aj8(AtS.AO9(O,34))===false)return true;
return false;},Ady:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAT:function(G){if(A._GetAutoObject(A.Device.Device).Aqz===1)A.pe([this,this.
A6J],this);},Al7:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device
).Gg.EN){case 0:A.z$([this,this.Al7],[B=A._GetAutoObject(A.Device.Device).Gg,B.SK
,B.E5],0);break;case 3:{if(!!this.OJ&&(F=this.OJ,F[1].call(F[0])))A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dl(A.aaR(A.acf.Bh6));A._GetAutoObject(
A.Device.Device).AqL();}break;case 4:{A._GetAutoObject(A.Device.Device).AY(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gg.E7();}break;default:;}},_Init:
function(aArg){C.AkR._Init.call(this,aArg);this.__proto__=C.ANa;var B;this.Dr(C.
APc);this.A_t([B=A._GetAutoObject(A.Device.Device),B.A82,B.BbF]);this.Init(aArg);
},_className:"Application::BirthRegistrationsListScreen"};C.APc={DX:function(G){
C.Aey.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(11));}
,_Init:function(aArg){C.Aey._Init.call(this,aArg);this.__proto__=C.APc;this.Text.
R(A.aaR(A.acf.ACg));},_ReInit:function(){C.Aey._ReInit.call(this);this.Text.R(A.
aaR(A.acf.ACg));},_className:"Application::HeaderBirthRegistrationsList"};C.APF={
DX:function(G){C.Aey.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad2(12));},_Init:function(aArg){C.Aey._Init.call(this,aArg);this.__proto__=C.APF;
this.Text.R(A.aaR(A.acf.AGy));},_ReInit:function(){C.Aey._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AGy));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ACr={Js:0,AP:null,S0:null,Ph:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.S0.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.S0.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rm(this.
Js));this.S0.R(A._GetAutoObject(A.acj.KR).ADb(this.Ph));},Ch:function(Ad){if(!this.
AX)return;this.Ht=Ad;if(!!this.AX){this.Js=this.AX.KT(Ad,26);this.Ph=this.AX.Hw(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.S0={I:this},0);this.__proto__=C.ACr;
this.AP.H(A0D);this.AP.L(A.jb.Bc);this.S0.H(A0E);this.J(this.AP,0);this.J(this.S0
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A0(A.aaL(A.fl.Bh));this.S0.S(A.aaL(A.fl.Ak));
this.S0.A0(A.aaL(A.fl.Bh));this.S0.Cr(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.S0._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.S0._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A0(A.aaL(A.fl.Bh));this.S0.S(A.aaL(A.fl.Ak));this.S0.A0(A.
aaL(A.fl.Bh));this.S0.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S0)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AU5={
WM:null,SL:null,TY:null,HI:null,LY:null,IN:null,KL:A.jV,Ai:function(Ae){var F;C.
SX.Ai.call(this,Ae);this.TY.L(this.V.AQ);var ApA=false;if((!this.Dm||!(F=this.Dm
,F[1].call(F[0])))&&!this.A_)ApA=true;this.TY.Z(ApA);this.PA.Z(!ApA);this.V3.Z(!
ApA);this.Q5.Z(!ApA);this.Yt.Z(!ApA);this.Qb.Z(!ApA);},AdA:function(G){var B;var
F;if(!this.KL.length){C.SX.AdA.call(this,G);return;}var BP=this.FZ;var FK=A._GetAutoObject(
A.Device.AkL).Bf$(this.KL);this.KL=A.jV;if(!FK){A._GetAutoObject(A.Device.Device
).AY(101,true,A.jV,0,this.SL);A.pe(this.WM,this);return;}if(this.Asv&&(FK>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).AY(102,true,A.jV,0,this.
SL);A.pe(this.WM,this);return;}this.Uv(((B=(FK|0))<0)?B+0x100000000:B);if(this.FZ
!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}if(!!this.
OO)A.pe(this.OO,this);},AAQ:function(G){if(this.KL.length<10)this.KL=this.KL+String.
fromCharCode(this.HI.Dy);},Awd:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===
0x0A))this.AdA(this);else this.IN.Mw=true;},ATI:function(E){if(A.aa0(this.WM,E))
return;this.WM=E;},ATJ:function(E){if(A.aa0(this.SL,E))return;this.SL=E;},_Init:
function(aArg){C.SX._Init.call(this,aArg);A.acg.Text._Init.call(this.TY={I:this}
,0);A.Core.BF._Init.call(this.HI={I:this},0);A.Core.BF._Init.call(this.LY={I:this
},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AU5;this.TY.H(BuI
);this.TY.Je(true);this.TY.A6(0x12);this.TY.R(A.aaR(A.acf.A6n));this.HI.Filter=143;
this.LY.Filter=149;this.IN.Filter=145;this.J(this.TY,0);this.TY.S(A.aaL(A.fl.EK)
);this.HI.BG=[this,this.AAQ];this.LY.BG=[this,this.Bcf];this.IN.BG=[this,this.Awd
];},_Done:function(){this.__proto__=C.SX;this.TY._Done();this.HI._Done();this.LY.
_Done();this.IN._Done();C.SX._Done.call(this);},_ReInit:function(){C.SX._ReInit.
call(this);this.TY._ReInit();this.HI._ReInit();this.LY._ReInit();this.IN._ReInit(
);this.TY.R(A.aaR(A.acf.A6n));this.TY.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SX._Mark.call(this,D);if((B=this.WM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.SL)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDateHid"};C.AU9={WM:null,SL:null,HI:null,LY:null,IN:null
,KL:A.jV,H1:function(G){var F;if(!this.KL.length){C.Re.H1.call(this,G);return;}if(
this.Asu)return;if(!this.KL.length)this.LY.Mw=true;var BP=this.AM;var FK=A._GetAutoObject(
A.Device.AkL).Bga(this.KL);this.KL=A.jV;if(!FK){if((this.KL.length<13)&&!A._GetAutoObject(
A.Device.Device).OZ)A._GetAutoObject(A.Device.Device).AY(105,true,A.jV,0,this.SL
);else A._GetAutoObject(A.Device.Device).AY(103,true,A.jV,0,this.SL);A.pe(this.WM
,this);return;}this.Bx(FK);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0]
,this.AM));A.abo(this.Q,0);}if(!!this.OO)A.pe(this.OO,this);},AAQ:function(G){if(
this.Asu)return;if(this.KL.length<17)this.KL=this.KL+String.fromCharCode(this.HI.
Dy);},Awd:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===0x0A))this.H1(this);
else this.IN.Mw=true;},ATI:function(E){if(A.aa0(this.WM,E))return;this.WM=E;},ATJ:
function(E){if(A.aa0(this.SL,E))return;this.SL=E;},_Init:function(aArg){C.Re._Init.
call(this,aArg);A.Core.BF._Init.call(this.HI={I:this},0);A.Core.BF._Init.call(this.
LY={I:this},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AU9;this.
Ar$(false);this.HI.Filter=143;this.LY.Filter=149;this.IN.Filter=145;this.HI.BG=[
this,this.AAQ];this.LY.BG=[this,this.Alp];this.IN.BG=[this,this.Awd];},_Done:function(
){this.__proto__=C.Re;this.HI._Done();this.LY._Done();this.IN._Done();C.Re._Done.
call(this);},_ReInit:function(){C.Re._ReInit.call(this);this.HI._ReInit();this.LY.
_ReInit();this.IN._ReInit();},_Mark:function(D){var B;C.Re._Mark.call(this,D);if((
B=this.WM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SL)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
LY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemNaisdHid"};C.APC={Aj4:null,Aj2:null,Gw:null
,Rc:null,SU:null,C8:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device),B.A9n,B.AFL],0);A.pe([this,this.DX],this);},Dg:function(E){C.BR.
Dg.call(this,E);this.Aj4.L(E);this.Aj2.L(E);this.Rc.Zz(E);this.Gw.L(E);this.SU.Zz(
E);},WN:function(E){this.Rc.CV(E);this.SU.CV(E);},DX:function(G){this.Rc.T(A._GetAutoObject(
A.Device.Device).Av4.toFixed());A.pe([this,this.BDe],this);},BDe:function(G){var
Xy=A._GetAutoObject(A.Device.Device).An.Filter;A._GetAutoObject(A.Device.Device).
An.Bk(A._GetAutoObject(A.Device.Helper).AvB());this.SU.T(A._GetAutoObject(A.Device.
Device).An.B_().toFixed());A._GetAutoObject(A.Device.Device).An.Bk(Xy);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj4={I:this},0);A.acg.
Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2.
_Init.call(this.Rc={I:this},0);C.D2._Init.call(this.SU={I:this},0);A.acg.C8._Init.
call(this.C8={I:this},0);this.__proto__=C.APC;this.Aj4.H(Pa);this.Aj2.H(BuJ);this.
Gw.H(BuK);this.Gw.L(A.jb.CU);this.Rc.A1(0x14);this.Rc.H(BuL);this.Rc.Zz(A.jb.Bm);
this.Rc.CV(A.jb.Rl);this.Rc.Ho(2);this.Rc.Bmz(0x11);this.SU.A1(0x14);this.SU.H(BuM
);this.SU.Zz(A.jb.Bm);this.SU.CV(A.jb.Rl);this.SU.Ho(2);this.C8.DD(AhY);this.C8.
DN(BuN);this.C8.L(A.jb.Bc);this.J(this.Aj4,0);this.J(this.Aj2,0);this.J(this.Gw,
0);this.J(this.Rc,0);this.J(this.SU,0);this.J(this.C8,0);this.Aj4.Ax(A.aaL(A.ach.
Ard));this.Aj2.Ax(A.aaL(A.ach.AQa));this.Gw.Ax(A.aaL(A.ach.Gw));this.Rc.S(A.aaL(
A.fl.Bh));this.SU.S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Aj4._Done();this.Aj2._Done();this.Gw._Done();this.Rc._Done();this.SU._Done(
);this.C8._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this
);this.Aj4._ReInit();this.Aj2._ReInit();this.Gw._ReInit();this.Rc._ReInit();this.
SU._ReInit();this.C8._ReInit();this.Rc.S(A.aaL(A.fl.Bh));this.SU.S(A.aaL(A.fl.Bh
));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Aj4)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Rc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
SU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderMassRecordings"};C.AR7={Abp:null,Aer:null,V0:null
,Init:function(aArg){this.Bb(this.Abp);},Ls:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.CE=[this,this.AaP];this.BQ.Ce=null;this.BQ.Ca=[this,this.A3K];this.
BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},AAL:function(
G){var Aa=(C.Ajm.isPrototypeOf(G)?G:null);if(Aa===this.Abp)A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(14);else if(Aa===this.Aer)A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(15);else throw new Error(AIS);},_Init:function(aArg){C.Fs._Init.
call(this,aArg);C.Ajm._Init.call(this.Abp={I:this},0);C.Ajm._Init.call(this.Aer={
I:this},0);C.AR$._Init.call(this.V0={I:this},0);this.__proto__=C.AR7;var B;this.
H(Rs);this.Text.R(A.aaR(A.acf.ACl));this.Abp.H(I1);this.Abp.T(A.aaR(A.acf.AjI));
this.Aer.H(Qg);this.Aer.T(A.aaR(A.acf.AGF));this.V0.H(Aan);this.V0.T(A.aaR(A.acf.
A5X));this.J(this.Abp,0);this.J(this.Aer,0);this.J(this.V0,0);this.Text.S(A.aaL(
A.fl.Ak));this.Abp.AR=[this,this.AAL];this.Aer.AR=[this,this.AAL];this.V0.ATl([B=
A._GetAutoObject(A.Device.Device),B.AEX,B.AI7]);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fs;this.Abp._Done();this.Aer._Done();this.V0._Done();C.Fs._Done.
call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.Abp._ReInit();this.
Aer._ReInit();this.V0._ReInit();this.Text.R(A.aaR(A.acf.ACl));this.Abp.T(A.aaR(A.
acf.AjI));this.Aer.T(A.aaR(A.acf.AGF));this.V0.T(A.aaR(A.acf.A5X));this.Text.S(A.
aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Abp).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aer)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingOverlayMenu"
};C.AR6={AnimalTableFields:null,Ay:null,Y:null,JV:null,CQ:function(){this.AiN(this
);},Init:function(aArg){A.zV([this,this.AiN],this.AnimalTableFields,0);A.pe([this
,this.AiN],this);},DF:function(G){C.Fs.DF.call(this,G);this.MZ(this);},Ls:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.Ew];this.BQ.Ce=[
this,this.A3I];this.BQ.Ca=[this,this.A4b];this.BQ.C4(A.aaL(A.ach.Arm));this.BQ.Ct(
A.aaL(A.ach.Are));this.BQ.C3(A.aaL(A.ach.YH));}return this.BQ;},Ew:function(G){this.
ABn();this.AaP(this);},AiN:function(G){this.Ao9();var O;for(O=0;O<this.AnimalTableFields.
Ng();O=O+1){var Aaw=A._GetAutoObject(C.Amx).OM(O);this.A1O(Aaw);}this.J(this.JV,
0);A.aaS([this,this.MZ],this);},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},MZ:function(
G){var B;this.Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},A1O:function(Ha){var Azo=A._NewObject(A.Device.AnimalTableFieldsToString
,0);var Aa=A._NewObject(C.Sm,0);Aa.T(Azo.BT(Ha));Aa.Aj(true);Aa.G7=Ha;Aa.A_F(this.
AnimalTableFields.N3(Ha));this.J(Aa,0);this.ZL(Aa);},Ao9:function(){var B;var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdO=X;X=X.Ah;if(((AdO.U&0x400)===
0x400))this.HR(AdO);}},ABn:function(){var B;this.AnimalTableFields.Clear();var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.
JV)){var Aa=(C.Sm.isPrototypeOf(X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.
G7);if(Aa.ASU())this.AnimalTableFields.AU1(Aa.G7);}else A.ab5("%s",AyC);}X=X.Ah;
}this.AnimalTableFields.Ci();},A3I:function(G){var B;var Aa=(C.Sm.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAD=(C.Sm.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAD
){this.AhG(AAD,Aa);A.pe([this,this.MZ],this);}}},A4b:function(G){var B;var Aa=(C.
Sm.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AA$=(C.Sm.isPrototypeOf(B=Aa.AJ
)?B:null);if(!!AA$){this.AhG(Aa,AA$);A.pe([this,this.MZ],this);}}},AqS:function(
G){var B;A._GetAutoObject(A.Device.Device).Asz(this);A.pe([this,this.AiN],this);
},_Init:function(aArg){C.Fs._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this
},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ave._Init.call(this.JV={I:this},0);
this.__proto__=C.AR6;this.H(Rs);this.Text.R(A.aaR(A.acf.AGF));this.Ay.H(Ix);this.
Y.H(Bbe);this.Y.JZ(1);this.JV.H(AIn);this.JV.Aj(true);this.JV.T(A.aaR(A.acf.A6B)
);this.J(this.Ay,0);this.J(this.Y,0);this.J(this.JV,0);this.Y.Em=[this,this.Fk];
this.JV.AR=[this,this.AqS];this.AnimalTableFields=A._GetAutoObject(C.Amx);this.Init(
aArg);},_Done:function(){this.__proto__=C.Fs;this.Ay._Done();this.Y._Done();this.
JV._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this);this.
Ay._ReInit();this.Y._ReInit();this.JV._ReInit();this.Text.R(A.aaR(A.acf.AGF));this.
JV.T(A.aaR(A.acf.A6B));this.CQ();},_Mark:function(D){var B;C.Fs._Mark.call(this,
D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingFieldSettingsMenu"
};C.AR5={Y:null,B0:null,Db:null,CH:null,GS:null,Ay:null,AnimalType:null,Gender:null
,Breed:null,UX:null,Init:function(aArg){A.zX([this,this.AuW],this.B0.Q,0);A.zX([
this,this.ANf],this.CH.Q,0);A.zX([this,this.AWk],this.GS.Q,0);A.zX([this,this.Avy
],this.Db.Q,0);this.Bb(this.B0);},DF:function(G){C.Fs.DF.call(this,G);this.MZ(this
);},Ls:function(){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.
AaP];this.BQ.Ce=null;this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(
A.aaL(A.ach.YH));}return this.BQ;},Fk:function(G){var B;this.Ay.MG((B=this.Y.Dd(
0x1))[3]-B[1]);this.Ay.MI((B=this.Y.M)[3]-B[1]);this.Ay.MH(-this.Y.Br[1]);},MZ:function(
G){var B;this.Y.VG(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},AuW:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.B0.Q,F[1].call(F[0])));},AWk:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GS.Q,F[1].call(F[0])));},Avy:function(G){var F;A._GetAutoObject(
A.Device.Device).J0((F=this.Db.Q,F[1].call(F[0])));},ANf:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fs._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Aa2._Init.call(this.B0={
I:this},0);C.Aa2._Init.call(this.Db={I:this},0);C.Aa2._Init.call(this.CH={I:this
},0);C.Aa2._Init.call(this.GS={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UY._Init.call(this.UX={I:
this},0);this.__proto__=C.AR5;var B;this.H(Rs);this.Text.R(A.aaR(A.acf.AjI));this.
Y.H(Bbe);this.Y.JZ(1);this.B0.H(Ah2);this.B0.As(true);this.B0.Aj(true);this.B0.T(
A.aaR(A.acf.Afx));this.Db.H(Ayu);this.Db.As(true);this.Db.Aj(true);this.Db.T(A.aaR(
A.acf.Afs));this.CH.H(Aos);this.CH.As(true);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.
Breed));this.GS.H(Ath);this.GS.As(true);this.GS.Aj(true);this.GS.T(A.aaR(A.acf.Jm
));this.Ay.H(Ix);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UX.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.B0,0);this.J(this.Db,0);this.J(this.CH,0);this.J(
this.GS,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fk];this.B0.ZA(A.aaL(A.fl.H6));
this.B0.ZB(A.aaL(A.fl.H6));this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CK(
this.AnimalType);this.Db.ZA(A.aaL(A.fl.H6));this.Db.ZB(A.aaL(A.fl.H6));this.Db.Au([
B=this.Gender,B.B$,B.Cc]);this.Db.CK(this.Gender);this.CH.ZA(A.aaL(A.fl.H6));this.
CH.ZB(A.aaL(A.fl.H6));this.CH.Au([B=this.Breed,B.B$,B.Cc]);this.CH.CK(this.Breed
);this.GS.ZA(A.aaL(A.fl.H6));this.GS.ZB(A.aaL(A.fl.H6));this.GS.Au([B=this.UX,B.
B$,B.Cc]);this.GS.CK(this.UX);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fs;this.Y._Done();this.B0._Done();this.Db._Done();this.CH._Done();this.GS._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UX._Done();C.Fs._Done.call(this);},_ReInit:function(){C.Fs._ReInit.call(this
);this.Y._ReInit();this.B0._ReInit();this.Db._ReInit();this.CH._ReInit();this.GS.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UX._ReInit();this.Text.R(A.aaR(A.acf.AjI));this.B0.T(A.aaR(
A.acf.Afx));this.Db.T(A.aaR(A.acf.Afs));this.CH.T(A.aaR(A.acf.Breed));this.GS.T(
A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Fs._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.AmB={CB:0,AlA:A.abi(17,0,null),OM:function(HB){return this.AlA.Get(HB);},Ng:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.AlA.Set(
O,0);this.CB=0;},J:function(Aar){if(this.CB>=17)A.ab5("%s",BuO);else{this.AlA.Set(
this.CB,Aar);this.CB=this.CB+1;}},Ci:function(){},E3:function(Ah7){var AKe=Ah7.indexOf(
String.fromCharCode(0x2C),0);var A2b=A.jV;var O=0;this.CB=0;while(O<17)if(Ah7===
A.jV)O++;else{if(AKe===-1){A2b=Ah7;Ah7=A.jV;}else{A2b=A.abV(Ah7,AKe);Ah7=A.ab1(Ah7
,0,AKe+1);}var Aaw=A.abZ(A2b,0,10)|0;if(this.Bki(Aaw)){this.AlA.Set(this.CB,Aaw);
this.CB=this.CB+1;O++;}AKe=Ah7.indexOf(String.fromCharCode(0x2C),0);}if(Ah7!==A.
jV)A.ab5("%s",BuP);},toString:function(){var B;var AAB=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAB=AAB+AyE;AAB=AAB+(((B=this.AlA.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAB;},Contains:function(Aar){var O;for(O=0;O<this.CB;O=O+1)if(this.AlA.
Get(O)===Aar)return true;return false;},Bki:function(Aar){return true;},_Init:function(
aArg){(this.AlA=[]).__proto__=C.AmB.AlA;this.__proto__=C.AmB;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AMm={AfU:null,Init:function(aArg){var B;A.
zX([this,this.Bfe],[B=A._GetAutoObject(A.Device.Device),B.A8Q,B.Bbx],0);A.zX([this
,this.Bff],[B=A._GetAutoObject(A.Device.Device),B.A8R,B.Bby],0);A.pe([this,this.
Bfe],this);A.pe([this,this.Bff],this);},Clear:function(){C.AmB.Clear.call(this);
this.AfU.Clear();},Ci:function(){A._GetAutoObject(A.Device.Device).ArQ(this.AfU.
toString());A._GetAutoObject(A.Device.Device).ArR(this.toString());},Bfe:function(
G){this.AfU.E3(A._GetAutoObject(A.Device.Device).ABX);A.we(this,0);},Bff:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABY);A.we(this,0);},N3:function(Aar
){return this.AfU.Contains(Aar);},AU1:function(Aar){if(!this.N3(Aar))this.AfU.J(
Aar);},AOW:function(){return this.AfU.Ng();},_Init:function(aArg){C.AmB._Init.call(
this,aArg);this.__proto__=C.AMm;this.AfU=A._NewObject(C.AmB,0);this.Init(aArg);}
,_Mark:function(D){var B;C.AmB._Mark.call(this,D);if((B=this.AfU)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amx={_Init:function(){C.AMm._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AR$={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Ho(10);},Bl:function(aSize){C.Ui.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mu.M[0]));},Ai:function(Ae){var B;C.Ui.
Ai.call(this,Ae);var Hf=((Ae&0x10)===0x10);var Fw=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FT=A.jb.Aed;var G0=A.jb.Bm;if(this.Hm){FT=A.jb.Bm;G0=A.jb.Text;}if(!Hf
){this.Background.L(FT);this.V.L(A.jb.CJ);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fw){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FT);this.V.L(G0);}this.LN=Hf;this.KM=Fw;this.Qz=GE;},_Init:function(
aArg){C.Ui._Init.call(this,aArg);this.__proto__=C.AR$;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AM_={YY:null,Ala:null,Ls:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CE=[this,this.AaP];this.BQ.Ce=null;
this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YH));}return this.
BQ;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Aa2._Init.call(this.
YY={I:this},0);C.AEt._Init.call(this.Ala={I:this},0);this.__proto__=C.AM_;var B;
this.H(K4);this.YY.H(K4);this.YY.T(A.aaR(A.acf.Display));this.Ala.Au(A._GetAutoObject(
A.Device.Device).Aqz);this.J(this.YY,0);this.YY.ZA(A.aaL(A.fl.H6));this.YY.ZB(A.
aaL(A.fl.H6));this.YY.Au([B=this.Ala,B.B$,B.Cc]);this.YY.CK(this.Ala);this.Ala.BnO([
B=A._GetAutoObject(A.Device.Device),B.AET,B.AI4]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YY._Done();this.Ala._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YY._ReInit();this.Ala._ReInit(
);this.YY.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ala)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEt={AbW:null,ListViewScopeToString:null,Du:function(){return 2;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BT(aIndex
);},DZ:function(A8){return A8;},H8:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbW)(F=this.AbW,F[2].call(F[0],E));},BnO:function(E
){if(A.aaZ(this.AbW,E))return;if(!!this.AbW)A.z$([this,this.A4h],this.AbW,0);this.
AbW=E;if(!!this.AbW)A.zX([this,this.A4h],this.AbW,0);A.pe([this,this.A4h],this);
},A4h:function(G){var F;if(!!this.AbW)this.Q=(F=this.AbW,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEt;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AHf={
ACy:0,ACx:0,Ai:function(Ae){C.O4.Ai.call(this,Ae);this.Background.L(this.ACx);this.
V.L(this.ACy);},A_g:function(E){if(this.ACy===E)return;this.ACy=E;this.Am();},BmF:
function(E){if(this.ACx===E)return;this.ACx=E;this.Am();},_Init:function(aArg){C.
O4._Init.call(this,aArg);this.__proto__=C.AHf;this.As(false);this.ACy=A.jb.Text;
this.ACx=A.jb.CJ;},_className:"Application::TextCaptionItem"};C.AHC={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.BeK],[B=A._GetAutoObject(A.Device.
Device),B.A9o,B.BbQ],0);A.pe([this,this.BeK],this);},Du:function(){return 3;},Gm:
function(aIndex){return this.WeightValuePrecisionToString.BT(this.C7(aIndex));},
Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw1(E);},BeK:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OT;A.abo([this,this.B$,this.
Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHC;this.
BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cm;this.WeightValuePrecisionToString._Done();C.Cm._Done.call(this
);},_ReInit:function(){C.Cm._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cm._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AU7={UL:null,A$$:A.jV,Init:function(aArg){},Bl:function(aSize){C.BX.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UL.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BX.Ai.call(this,Ae);this.UL.L(this.
V.AQ);},Boh:function(E){if(this.A$$===E)return;this.A$$=E;this.UL.R(E);},_Init:function(
aArg){C.BX._Init.call(this,aArg);C.CG._Init.call(this.UL={I:this},0);this.__proto__=
C.AU7;this.H(AcT);this.UL.H(BuQ);this.J(this.UL,0);this.UL.S(A.aaL(A.fl.Af));this.
UL.A0(A.aaL(A.fl.Ak));this.UL.Cr(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BX;this.UL._Done();C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(
this);this.UL._ReInit();this.UL.S(A.aaL(A.fl.Af));this.UL.A0(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BX._Mark.call(this,D);if((B=this.UL)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Wt={AB1:null,MassDeregistrationCriterionToString:
null,Du:function(){return 2;},Gm:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A8=this.C7(aIndex);var M7=this.MassDeregistrationCriterionToString.
BT(this.C7(aIndex));if(!!this.AB1&&!A8)M7=A._GetAutoObject(A.Device.Helper).MN(M7
,Pc,(F=this.AB1,F[1].call(F[0])).toFixed());return M7;},_Init:function(aArg){C.Cm.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Wt;this.BI.Set(
0,0);this.BI.Set(1,1);},_Done:function(){this.__proto__=C.Cm;this.MassDeregistrationCriterionToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cm._Mark.
call(this,D);if((B=this.AB1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.AN4={Vs:null,Wt:null,Zd:null,JW:null
,Auh:0,Aa4:100,Init:function(aArg){this.Bb(this.Zd);},Ai:function(Ae){C.Ej.Ai.call(
this,Ae);var BCN=((A.aaR(A.acf.AqH)+A.aaR(A.acf.Colon))+CR)+this.Auh.toFixed();this.
JW.Boh(BCN);},CC:function(G){C.Ej.CC.call(this,G);A.zX([this,this.ABN],this.JW.Q
,0);A.pe([this,this.ABN],this);},E4:function(G){C.Ej.E4.call(this,G);A.z$([this,
this.ABN],this.JW.Q,0);},DK:function(G){var F;C.Ej.DK.call(this,G);this.N.E6(A.jV
);this.N.Ce=null;if((this.AV===this.JW)&&!!this.JW.Q){this.N.Ca=[this,this.Bfu];
switch((F=this.JW.Q,F[1].call(F[0]))){case 1:if(!this.Auh)this.N.GY.CZ(100);else
this.N.GY.CZ(255);break;case 0:{this.N.E6(A.aaR(A.acf.BiA));this.N.Ce=[this,this.
Bzv];if(this.Aa4<=1)this.N.GY.CZ(100);else this.N.GY.CZ(255);this.N.CS(A.aaR(A.acf.
BiB));this.N.Ca=[this,this.BAs];if(this.Aa4>=2147483647)this.N.GY.CZ(100);else this.
N.GY.CZ(255);this.N.WV=true;}break;default:throw new Error(BuR+(F=this.JW.Q,F[1].
call(F[0])).toFixed());}this.JW.Ab8(this.N.Ca);}},Bfu:function(G){if(this.Auh>0)
A._GetAutoObject(A.Device.Device).AY(108,true,this.Auh.toFixed(),0,[this,this.BA1
]);},ABN:function(G){var F;this.Auh=A._GetAutoObject(A.Device.Helper).BjH((F=this.
JW.Q,F[1].call(F[0])),this.Aa4);this.Am();A.pe([this,this.MS],this);},Bfo:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B_()){A._GetAutoObject(A.Device.
Device).AY(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Arq(
)===false){this.Vs=[this,this.Bfo];A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV,0,[this,
this.Agl]);return;}A.zX([this,this.Al7],[B=A._GetAutoObject(A.Device.Device).Gg,
B.SK,B.E5],0);A._GetAutoObject(A.Device.Device).Asy(1,false);},Agl:function(G){var
B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);this.
Vs=null;}},XM:function(G){var B;if(A._GetAutoObject(A.Device.Device).P8.Z8===3){
A._GetAutoObject(A.Device.Device).AY(74,false,A.jV,0,[this,this.Agl]);A.z$([this
,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);if(!!this.Vs)A.pe(this.
Vs,this);this.Vs=null;}},BA1:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCI],this);},BCI:function(
G){A._GetAutoObject(A.Device.Helper).ByX(this.Wt.Q,this.Aa4);A._GetAutoObject(A.
Device.Device).AY(109,true,this.Auh.toFixed(),0,null);A.pe([this,this.MS],this);
A.pe([this,this.ABN],this);},Al7:function(G){var B;switch(A._GetAutoObject(A.Device.
Device).Gg.EN){case 0:A.z$([this,this.Al7],[B=A._GetAutoObject(A.Device.Device).
Gg,B.SK,B.E5],0);break;case 3:A._GetAutoObject(A.Device.Device).AqL();break;case
4:{A._GetAutoObject(A.Device.Device).AY(88,true,A.jV,0,null);A._GetAutoObject(A.
Device.Device).Gg.E7();}break;default:;}},BAs:function(G){if(this.Aa4<2147483647
)this.ATg(this.Aa4+1);},Bzv:function(G){if(this.Aa4>1)this.ATg(this.Aa4-1);},ATg:
function(E){if(this.Aa4===E)return;this.Aa4=E;A.pe([this,this.ABN],this);this.JW.
Am();},Ble:function(){return this.Aa4;},_Init:function(aArg){C.Ej._Init.call(this
,aArg);C.Wt._Init.call(this.Wt={I:this},0);C.Co._Init.call(this.Zd={I:this},0);C.
AU7._Init.call(this.JW={I:this},0);this.__proto__=C.AN4;var B;this.Dr(C.APe);this.
Zd.H(I1);this.Zd.Aj(true);this.Zd.T(A.aaR(A.acf.A6V));this.Zd.Bi(false);this.JW.
H(Bbc);this.JW.Aj(true);this.JW.T(A.aaR(A.acf.Bat));this.JW.Bi(true);this.JW.A_9(
A.aaR(A.acf.Ok));this.J(this.Zd,0);this.J(this.JW,0);this.Wt.AB1=[this,this.Ble,
this.ATg];this.Zd.AR=[this,this.Bfo];this.JW.AR=[this,this.Bfu];this.JW.Ab8(this.
N.Ca);this.JW.Au([B=this.Wt,B.B$,B.Cc]);this.JW.CK(this.Wt);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wt._Done();this.Zd._Done();this.JW._Done();C.
Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Wt._ReInit(
);this.Zd._ReInit();this.JW._ReInit();this.Zd.T(A.aaR(A.acf.A6V));this.JW.T(A.aaR(
A.acf.Bat));this.JW.A_9(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ej._Mark.call(
this,D);if((B=this.Vs)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wt).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.APe={_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APe;this.
Text.R(A.aaR(A.acf.AdX));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdX));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.AN7={
Vs:null,Zc:null,Ab0:null,Init:function(aArg){this.Bb(this.Zc);A.pe([this,this.MS
],this);},Bfn:function(G){var B;var AAk=A._GetAutoObject(A.Device.Device).AEf();
switch(AAk){case 1:A._GetAutoObject(A.Device.Device).AY(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).AY(91,true,U8,0,[this,this.BfH]);break;
case 2:{this.Vs=[this,this.Bfn];A.zX([this,this.XM],[B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV,0,[this,
this.Agl]);}break;default:throw new Error(Bbf+AAk.toFixed());}},Agl:function(G){
var B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);this.
Vs=null;}},XM:function(G){var B;if(A._GetAutoObject(A.Device.Device).P8.Z8===3){
A._GetAutoObject(A.Device.Device).AY(74,false,A.jV,0,[this,this.Agl]);A.z$([this
,this.XM],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Vb],0);if(!!this.Vs)A.pe(this.
Vs,this);this.Vs=null;}},BfJ:function(G){var B;var AAk=A._GetAutoObject(A.Device.
Device).AEg();switch(AAk){case 1:A._GetAutoObject(A.Device.Device).AY(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).AY(95,true,A.jV,0,[this
,this.BA2]);break;case 2:{this.Vs=[this,this.BfJ];A.zX([this,this.XM],[B=A._GetAutoObject(
A.Device.Device),B.Ut,B.Vb],0);A._GetAutoObject(A.Device.Device).AY(74,true,A.jV
,0,[this,this.Agl]);}break;case 3:A._GetAutoObject(A.Device.Device).AY(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).AY(93,true,A.jV,0,null
);break;default:throw new Error(Bbf+AAk.toFixed());}},BfH:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(Ar.Id){case 91:if(Ar.PopupState===
9)A.aaS([this,this.Bzz],this);break;case 92:if(Ar.PopupState===9)A.aaS([this,this.
BzB],this);break;default:throw new Error(BuS+Ar.Id.toFixed());}},Bzz:function(G){
if(A._GetAutoObject(A.Device.Device).ACH()){var A3v=A._GetAutoObject(A.Device.Device
).An.QN();A._GetAutoObject(A.Device.Device).AY(80,true,A3v.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).AY(82,true,A.jV,0,null);A.aaS([this,this.BAW],
this);},BzB:function(G){if(A._GetAutoObject(A.Device.Device).AGJ()){var A3v=A._GetAutoObject(
A.Device.Device).An.QN();A._GetAutoObject(A.Device.Device).AY(81,true,A3v.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).AY(83,true,A.jV,0,null);A.aaS([
this,this.BBC],this);},BA2:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCJ],this);},BCJ:function(
G){A._GetAutoObject(A.Device.Device).AY(92,true,U8,0,[this,this.BfH]);},BBC:function(
G){A._GetAutoObject(A.Device.Device).AY(92,false,A.jV,0,null);},BAW:function(G){
A._GetAutoObject(A.Device.Device).AY(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ej._Init.call(this,aArg);C.Co._Init.call(this.Zc={I:this},0);C.Co._Init.call(
this.Ab0={I:this},0);this.__proto__=C.AN7;this.Dr(C.APh);this.Zc.H(I1);this.Zc.Aj(
true);this.Zc.T(A.aaR(A.acf.ACH));this.Zc.Bi(false);this.Ab0.H(Qg);this.Ab0.Aj(true
);this.Ab0.T(A.aaR(A.acf.AGJ));this.Ab0.Bi(true);this.J(this.Zc,-1);this.J(this.
Ab0,-1);this.Zc.AR=[this,this.Bfn];this.Ab0.AR=[this,this.BfJ];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ej;this.Zc._Done();this.Ab0._Done();C.Ej._Done.
call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Zc._ReInit();this.Ab0.
_ReInit();this.Zc.T(A.aaR(A.acf.ACH));this.Ab0.T(A.aaR(A.acf.AGJ));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Vs)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab0)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.APh={
_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APh;this.Text.R(
A.aaR(A.acf.ACN));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACN));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.M_={L3:null
,AUA:0,AEi:false,AEe:false,AEj:false,Agj:function(G){this.A6E(this);},ATE:function(
E){if(this.L3===E)return;this.L3=E;if(!this.L3)return;this.DQ.AutoActions=E;A.zV([
this,this.BgL],this.L3,0);A.zV([this,this.AoG],this.L3,0);A.pe([this,this.BgL],this
);A.pe([this,this.AoG],this);},AMn:function(){this.AMp(A.aaR(A.acf.BaB),[this,this.
BCZ],[this,this.A9i,this.AFC]);this.AMp(A.aaR(A.acf.AGz),[this,this.BCX],[this,this.
A9f,this.AFA]);this.AMp(A.aaR(A.acf.An6),[this,this.BCY],[this,this.A9g,this.AFB
]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mp(A.aaR(A.acf.BoP)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fz();},AMp:function(Bxp,Byz,BxU){if(!this.L3
)return;this.AuO(Bxp,Byz,BxU);},BCZ:function(G){this.AFC(!this.AEj);},BCX:function(
G){this.AFA(!this.AEe);},BCY:function(G){this.AFB(!this.AEi);},A4J:function(Eh,BxT
){if(!this.L3)return;if(BxT)this.L3.BhG(Eh);else this.L3.Bo8(Eh);this.L3.Ci();},
A5q:function(Aii,Aij,ByS){A._GetAutoObject(C.BS).ABZ(Aii,Aij,[this,this.A9z,this.
ATR],ByS);},AGV:function(Eh){if(!this.L3)return;this.L3.AGV(Eh);this.L3.Ci();},AFC:
function(E){if(this.AEj===E)return;this.AEj=E;this.A4J(256,E);A.abo([this,this.A9i
,this.AFC],0);},AFA:function(E){if(this.AEe===E)return;this.AEe=E;this.A4J(2,E);
A.abo([this,this.A9f,this.AFA],0);},AFB:function(E){if(this.AEi===E)return;this.
AEi=E;this.A4J(1,E);A.abo([this,this.A9g,this.AFB],0);},BgL:function(G){this.AFC(
this.L3.Contains(256));this.AFA(this.L3.Contains(2));this.AFB(this.L3.Contains(1
));if(this.L3.Ng()>0)this.ATR(this.L3.ADl());},ATR:function(E){if(this.AUA===E)return;
this.AUA=E;A.abo([this,this.A9z,this.ATR],0);},A9i:function(){return this.AEj;},
A9f:function(){return this.AEe;},A9g:function(){return this.AEi;},A9z:function(){
return this.AUA;},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.M_;},_Mark:function(D){var B;C.GJ._Mark.call(this,D);if((B=this.L3)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.Av3={Q:null,Ci:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},AEc:
function(Eh){switch(Eh){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Hg:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Hg],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hg],E,
0);if(!!E)A.pe([this,this.Hg],this);},AGV:function(Eh){if(this.Ng()>0)this.AxF(this.
Ng()-1,Eh);},BhG:function(Eh){if(this.Contains(Eh))return;if(this.CB>=17){A.ab5(
"%s",AIp);return;}var AAd=0;for(;(AAd<=this.Ng())&&(this.OM(AAd)<Eh);AAd++);var ABs=
this.Ng()-1;this.J(this.OM(ABs));for(;ABs>AAd;ABs--)this.AxF(ABs,this.OM(ABs-1));
this.AxF(AAd,Eh);},Bo8:function(Eh){var index=this.DZ(Eh);if(index<0)return;for(;
index<(this.Ng()-1);index++)this.AxF(index,this.OM(index+1));this.AxF(index,0);this.
CB--;},ADl:function(){var To=0;if(this.Ng()>0)To=this.OM(this.Ng()-1);return To;
},_Init:function(aArg){C.VF._Init.call(this,aArg);this.__proto__=C.Av3;},_Mark:function(
D){var B;C.VF._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Awb={_Init:function(){C.Av3.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A9s,B.BbU
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Awc={
_Init:function(){C.Av3._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A9t,B.BbV]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Ayb={_Init:function(){C.Av3._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A91,B.Bb_]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADK={QX:null,AjY:null,_Init:function(aArg){C.De._Init.
call(this,aArg);C.CG._Init.call(this.QX={I:this},0);A.acg.Ap._Init.call(this.AjY={
I:this},0);this.__proto__=C.ADK;this.Es.H(BuT);this.DS.H(BuU);this.QX.H(BuV);this.
QX.R(A.aaR(A.acf.Uo));this.QX.A6(0x11);this.QX.L(A.jb.Text);this.AjY.H(A0A);this.
AjY.L(A.jb.Text);this.J(this.QX,0);this.J(this.AjY,0);this.QX.S(A.aaL(A.fl.Af));
this.QX.A0(A.aaL(A.fl.Ak));this.QX.Cr(A.aaL(A.fl.Bh));this.AjY.Ax(A.aaL(A.ach.AvI
));},_Done:function(){this.__proto__=C.De;this.QX._Done();this.AjY._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.QX._ReInit();
this.AjY._ReInit();this.QX.R(A.aaR(A.acf.Uo));this.QX.S(A.aaL(A.fl.Af));this.QX.
A0(A.aaL(A.fl.Ak));this.QX.Cr(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.QX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjY)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.ACq={
AP:null,S2:null,O5:null,AKJ:A.jV,BeT:A.jV,Mn:0,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.O5.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.O5.M[2]-1,0,this.O5.M[2]+1,aSize[1]]);this.
S2.H([this.O5.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);
this.O5.L(this.V.AQ);this.S2.L(this.V.AQ);this.T(this.AKJ);this.O5.R(this.BeT);this.
S2.R(this.Mn.toFixed());},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.
AX){var Js=this.AX.KT(Ad,26);var A3n=A._GetAutoObject(A.Device.Converter).Rm(Js);
this.AKJ=A.abV(A3n,A3n.length-5);this.BeT=A.ab2(A3n,5);if((A._GetAutoObject(A.Device.
Converter).S8(Js)===10)&&!(Math.trunc(Js/10000000000)%100))this.AKJ=A.ab1(this.AKJ
,3,2);this.Mn=this.AX.CF(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.call(
this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CG._Init.call(this.S2={I:this
},0);C.CG._Init.call(this.O5={I:this},0);this.__proto__=C.ACq;this.V.H(BuW);this.
AP.H(A0D);this.AP.L(A.jb.Bc);this.S2.H(A0E);this.O5.H(BuX);this.J(this.AP,0);this.
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
};C.APJ={Q:null,Init:function(aArg){var B;this.ABh(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fp,B.Ft]);},AE6:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Fa(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DM(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Nw(FilterCriterion);var Ai7=this.Awo();if((Ai7.length>
0)&&(Ai7!==U8)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai7,0,6,false);Filter.CX(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.Ae1(false);},ABh:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).Fa();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DM(26,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,
0);if(!!E)A.pe([this,this.C5],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATx(A.jV);return;}var Azf=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DM(26,4))?B:null);if(!Azf){this.AW.ATx(
U8);this.AW.Ae1(true);}else this.AW.ATx(Azf.A5);},_Init:function(aArg){C.AjU._Init.
call(this,aArg);this.__proto__=C.APJ;this.AW.AwU(0);this.AW.BnA(true);this.AW.Dk=[
this,this.AE6];this.Init(aArg);},_Mark:function(D){var B;C.AjU._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVT={FD:null,Da:null,Dn:null,EL:null,AsX:null,Init:function(aArg){var B;A.zX([
this,this.BfQ],[B=A._GetAutoObject(A.Device.Device),B.ATb,B.A0Y],0);A.zX([this,this.
Adz],[B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_],0);A.zX([this,this.Adz],[B=
A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.pe([this,this.BfQ],this);A.pe([
this,this.Adz],this);},BfQ:function(G){var AaW=false;switch(A._GetAutoObject(A.Device.
Device).An$){case 0:AaW=false;break;case 3:AaW=true;break;default:throw new Error(
BuY+A._GetAutoObject(A.Device.Device).An$.toFixed());}A._GetAutoObject(A.Device.
Helper).J6(this.Da,AaW);A._GetAutoObject(A.Device.Helper).J6(this.Dn,AaW);A._GetAutoObject(
A.Device.Helper).J6(this.EL,AaW);},Adz:function(G){var F,Cu;if(((F=this.Da.Q,F[1
].call(F[0]))+(Cu=this.Dn.Q,Cu[1].call(Cu[0])))>12)(Cu=this.Dn.Q,Cu[2].call(Cu[0
],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cg._Init.call(this
,aArg);C.BX._Init.call(this.FD={I:this},0);C.Iv._Init.call(this.Da={I:this},0);C.
Iv._Init.call(this.Dn={I:this},0);C.Av7._Init.call(this.EL={I:this},0);C.AVS._Init.
call(this.AsX={I:this},0);this.__proto__=C.AVT;var B;this.Jf(A.aaR(A.acf.UnlinkTransponder
));this.FD.H(U7);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqq));this.
FD.Bi(true);this.Da.H(All);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.
AqN));this.Da.Bi(false);this.Da.Gb(2);this.Da.EV(6);this.Da.IW(A.aaR(A.acf.OK));
this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(Ah5);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.
Zs));this.Dn.Bi(true);this.Dn.Gb(0);this.Dn.EV(12);this.Dn.IW(A.aaR(A.acf.OK));this.
Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Aou);this.EL.As(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar_(A.aaR(A.acf.Aqs));this.J(this.FD,0);this.J(this.Da,0);this.
J(this.Dn,0);this.J(this.EL,0);this.FD.Au([B=this.AsX,B.B$,B.Cc]);this.FD.CK(this.
AsX);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.Dn.Au([B=A.
_GetAutoObject(A.Device.Device),B.Us,B.U$]);this.EL.DC(A.aaL(A.ach.AjZ));this.EL.
OU([B=A._GetAutoObject(A.Device.Device),B.Ur,B.U_]);this.EL.PZ([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.FD._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.AsX._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.FD._ReInit(
);this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit();this.AsX._ReInit();this.
Jf(A.aaR(A.acf.UnlinkTransponder));this.FD.T(A.aaR(A.acf.Aqq));this.Da.T(A.aaR(A.
acf.AqN));this.Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(
A.acf.Zs));this.Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.Ar_(A.
aaR(A.acf.Aqs));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AsX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkSettingsScreen"
};C.AVS={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bhi],[B=A._GetAutoObject(A.Device.Device),B.ATb,B.A0Y],0);A.pe([
this,this.Bhi],this);},Du:function(){return 2;},Gm:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C7(aIndex));},Au:function(E){C.Cm.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axk(E);},Bhi:function(G){this.Q=A._GetAutoObject(A.Device.Device).An$;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cm._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVS;this.BI.Set(0,0);this.BI.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cm;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cm._Done.call(this);},_ReInit:function(){C.Cm._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cm.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMY.__proto__=A.Core.Root;C.AB.__proto__=C.Abr;C.WX.__proto__=
A.Core.P;C.OF.__proto__=A.Core.P;C.ZI.__proto__=A.acl.Gn;C.Ek.__proto__=A.Core.P;
C.X9.__proto__=C.AB;C.AVj.__proto__=C.AB;C.AvH.__proto__=C.AB;C.Rd.__proto__=C.AB;
C.Fo.__proto__=C.Hj;C.Ay.__proto__=A.Core.P;C.Cg.__proto__=C.AB;C.Aq9.__proto__=
C.BR;C.BR.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADC.__proto__=C.Am5;C.AHb.
__proto__=C.DR;C.Co.__proto__=C.O4;C.Ds.__proto__=C.Eg;C.Iv.__proto__=C.Ds;C.BX.
__proto__=C.Ds;C.SX.__proto__=C.Ds;C.OR.__proto__=C.Cm;C.Ri.__proto__=C.AC;C.AVy.
__proto__=C.Ba;C.Gd.__proto__=A.Core.P;C.Ba.__proto__=C.Co;C.GJ.__proto__=C.AB;C.
ACp.__proto__=C.Ba;C.Aeb.__proto__=C.AB;C.Mt.__proto__=C.OF;C.AVt.__proto__=C.AB;
C.Aq8.__proto__=C.ADC;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AU_.__proto__=C.Acv;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.AsD.__proto__=A.Core.P;C.AGZ.__proto__=C.Ds;C.CG.__proto__=A.Core.P;C.
AjT.__proto__=C.YB;C.AmA.__proto__=C.Rh;C.AhD.__proto__=A.Core.P;C.Ej.__proto__=
C.AB;C.AUk.__proto__=C.AB;C.Mx.__proto__=C.Co;C.Ano.__proto__=C.Co;C.OverlayMenu.
__proto__=C.Abr;C.APZ.__proto__=C.OverlayMenu;C.GK.__proto__=A.Core.P;C.Abr.__proto__=
A.Core.P;C.AVd.__proto__=A.acl.Aep;C.Am5.__proto__=C.BR;C.ADD.__proto__=C.Am5;C.
Kq.__proto__=C.AC;C.AVa.__proto__=C.Ds;C.AGA.__proto__=C.AB;C.H3.__proto__=C.AB;
C.WF.__proto__=C.ArC;C.IP.__proto__=C.ADD;C.I_.__proto__=C.AB;C.AMw.__proto__=C.
AGA;C.AMs.__proto__=C.GJ;C.ANM.__proto__=C.GJ;C.Aet.__proto__=C.Co;C.QI.__proto__=
C.Aet;C.APM.__proto__=C.BR;C.AjU.__proto__=C.BR;C.DG.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Ge.__proto__=C.AC;C.Afr.__proto__=C.BX;C.AUB.__proto__=C.AB;C.Ab1.__proto__=
C.Co;C.Ui.__proto__=C.Co;C.ANY.__proto__=C.Cg;C.AVA.__proto__=C.Cg;C.AN$.__proto__=
C.Cg;C.AUN.__proto__=C.Cg;C.Xa.__proto__=A.Core.P;C.Q0.__proto__=C.Fo;C.D2.__proto__=
A.Core.P;C.Ue.__proto__=C.AB;C.AV$.__proto__=C.GJ;C.AMx.__proto__=C.Ax$;C.AVV.__proto__=
C.Cg;C.AeT.__proto__=C.AC;C.Ax$.__proto__=C.AB;C.AWi.__proto__=C.Cg;C.AU$.__proto__=
C.Acv;C.ABV.__proto__=A.Graphics.HA;C.Aqm.__proto__=C.AB;C.AR2.__proto__=A.Core.
P;C.Fs.__proto__=C.OverlayMenu;C.Aa2.__proto__=C.BX;C.Ajm.__proto__=C.Co;C.AMe.__proto__=
C.Fs;C.Cm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AMk.__proto__=C.VF;C.AMl.
__proto__=C.Fs;C.Sm.__proto__=C.Ui;C.AM3.__proto__=C.VF;C.Wv.__proto__=C.Fo;C.VC.
__proto__=A.Core.P;C.KC.__proto__=A.Core.P;C.ASo.__proto__=C.H3;C.AUE.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cm;C.ANN.__proto__=C.AmA;C.Hj.__proto__=A.
Core.P;C.AWb.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cm;C.Aba.
__proto__=C.Ge;C.Ax3.__proto__=C.ABV;C.AUf.__proto__=C.OverlayMenu;C.AOQ.__proto__=
A.Core.P;C.N9.__proto__=A.Core.P;C.AUg.__proto__=A.Core.P;C.AVc.__proto__=A.acl.
Aep;C.AkX.__proto__=C.Iv;C.AmC.__proto__=C.OverlayMenu;C.ACs.__proto__=C.Ba;C.YC.
__proto__=C.AjU;C.AqR.__proto__=C.H3;C.Acu.__proto__=C.Ds;C.WeightRecordingScope.
__proto__=C.AC;C.AuT.__proto__=C.AB;C.AVb.__proto__=C.Iv;C.AMu.__proto__=C.AB;C.
ArC.__proto__=C.H3;C.AHx.__proto__=A.Core.P;C.AWe.__proto__=A.Core.P;C.Eg.__proto__=
C.Co;C.AeV.__proto__=C.Eg;C.Av8.__proto__=C.AeV;C.SetTransponderScreen.__proto__=
C.Rd;C.ADL.__proto__=C.EB;C.AHB.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mo.__proto__=C.Rd;C.AMc.__proto__=C.Mo;C.ManualActionScanScreen.__proto__=C.Mo;
C.AMd.__proto__=A.Core.P;C.APQ.__proto__=C.De;C.ADJ.__proto__=C.De;C.T4.__proto__=
C.De;C.APS.__proto__=C.De;C.ANr.__proto__=C.Ba;C.Nb.__proto__=C.Ba;C.ANp.__proto__=
C.Ba;C.Jx.__proto__=A.Core.P;C.ANo.__proto__=C.Ba;C.Am4.__proto__=C.TP;C.AGq.__proto__=
C.Axv;C.AkJ.__proto__=C.Axv;C.ZH.__proto__=C.AkJ;C.ANU.__proto__=C.O4;C.O4.__proto__=
C.Hj;C.APV.__proto__=C.EB;C.DS.__proto__=A.Core.P;C.ANl.__proto__=C.AjE;C.ADF.__proto__=
C.T5;C.Kp.__proto__=A.Core.P;C.AmM.__proto__=C.Mx;C.APb.__proto__=C.Kv;C.AutoRegistrationMode.
__proto__=C.AC;C.APW.__proto__=C.EB;C.TJ.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMI.__proto__=C.R5;C.AMW.__proto__=C.Aa9;C.AMR.__proto__=C.Aa9;C.AUD.__proto__=
C.Ba;C.APU.__proto__=C.EB;C.AML.__proto__=C.Aa9;C.IK.__proto__=C.I9;C.RZ.__proto__=
C.FA;C.R3.__proto__=C.FA;C.TI.__proto__=C.JQ;C.QH.__proto__=C.FA;C.TH.__proto__=
C.JQ;C.AMt.__proto__=C.Aqm;C.ARn.__proto__=C.Cg;C.Aa9.__proto__=C.D9;C.Ko.__proto__=
C.Cm;C.ARY.__proto__=C.Cg;C.AMG.__proto__=C.Le;C.AMH.__proto__=C.D9;C.AME.__proto__=
C.Le;C.AMF.__proto__=C.Le;C.WZ.__proto__=C.Eg;C.AU8.__proto__=C.WZ;C.R4.__proto__=
C.FA;C.APL.__proto__=C.IP;C.ANO.__proto__=C.AB;C.ANv.__proto__=C.Aeb;C.AMr.__proto__=
C.I_;C.AV_.__proto__=C.I_;C.APd.__proto__=C.Kv;C.APN.__proto__=C.Kv;C.APR.__proto__=
C.T5;C.ANq.__proto__=C.AjE;C.T5.__proto__=C.De;C.AqC.__proto__=A.acv.ACC;C.AjE.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.ANc.__proto__=C.DR;C.O9.__proto__=C.DR;C.Aq6.__proto__=
A.Core.P;C.AMN.__proto__=C.Gd;C.AUH.__proto__=A.Core.P;C.Le.__proto__=C.D9;C.ANV.
__proto__=C.Cg;C.Ave.__proto__=C.Co;C.ADz.__proto__=C.BR;C.ADA.__proto__=C.BR;C.
FA.__proto__=C.JQ;C.AOT.__proto__=C.GJ;C.AOS.__proto__=C.I_;C.APr.__proto__=C.Kv;
C.ADH.__proto__=C.De;C.ACo.__proto__=C.Ba;C.AUC.__proto__=C.AhD;C.FactoryResetScope.
__proto__=C.Cm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASA.
__proto__=C.M_;C.ASz.__proto__=C.I_;C.ADB.__proto__=C.Kv;C.AB8.__proto__=C.Ge;C.
AMh.__proto__=C.Fs;C.AMv.__proto__=C.AuT;C.NewAnimalSetTransponderScreen.__proto__=
C.AsI;C.C9.__proto__=C.AC;C.O8.__proto__=A.Core.P;C.R0.__proto__=C.FA;C.R1.__proto__=
C.FA;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AR9.__proto__=C.OverlayMenu;
C.V0.__proto__=C.Ui;C.Av7.__proto__=C.Co;C.AnimalSingleInfoScreen.__proto__=C.TJ;
C.AnimalMultiInfoScreen.__proto__=C.TJ;C.AMK.__proto__=C.OverlayMenu;C.Jc.__proto__=
A.Core.P;C.AMg.__proto__=C.GJ;C.AMf.__proto__=C.I_;C.APK.__proto__=C.IP;C.AsS.__proto__=
C.O8;C.Arl.__proto__=C.O8;C.Ava.__proto__=C.AC;C.AMC.__proto__=C.AC;C.AGY.__proto__=
C.Eg;C.G6.__proto__=A.Core.P;C.ARq.__proto__=C.HN;C.AV0.__proto__=C.X9;C.ASk.__proto__=
C.WF;C.AD_.__proto__=C.Ll;C.HN.__proto__=C.G6;C.Ll.__proto__=C.G6;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvX.__proto__=C.HN;C.AU6.__proto__=C.BX;C.NewAnimalsSetTransponderScreen.
__proto__=C.AsI;C.ReasonOfLeaving.__proto__=C.AC;C.O1.__proto__=C.BX;C.AeY.__proto__=
C.El;C.ASd.__proto__=C.El;C.ASc.__proto__=C.El;C.El.__proto__=A.Core.P;C.Re.__proto__=
C.Eg;C.ARr.__proto__=C.Ll;C.AvW.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.FC.
__proto__=C.AB;C.AOs.__proto__=C.AB;C.AOv.__proto__=C.FC;C.AOw.__proto__=C.FC;C.
AqU.__proto__=C.FC;C.AbD.__proto__=C.AjT;C.Kv.__proto__=C.AjT;C.AvF.__proto__=C.
AbD;C.APp.__proto__=C.AbD;C.APo.__proto__=C.AbD;C.APn.__proto__=C.BR;C.AeB.__proto__=
C.EB;C.AmU.__proto__=C.Ba;C.Aju.__proto__=C.IK;C.AC2.__proto__=A.Core.P;C.AkU.__proto__=
A.Core.P;C.Rh.__proto__=C.AB;C.AVz.__proto__=C.Rh;C.APq.__proto__=C.BR;C.De.__proto__=
C.EB;C.Ku.__proto__=C.BR;C.APj.__proto__=C.Ku;C.APl.__proto__=C.Ku;C.Yw.__proto__=
C.AmU;C.AgC.__proto__=C.Hj;C.AOf.__proto__=C.GJ;C.AOe.__proto__=C.I_;C.APm.__proto__=
C.Kv;C.Aby.__proto__=C.Acu;C.AjL.__proto__=C.QI;C.ACi.__proto__=C.QI;C.APP.__proto__=
C.De;C.ANn.__proto__=C.Ba;C.R2.__proto__=C.FA;C.AMD.__proto__=C.FA;C.AN9.__proto__=
C.Ej;C.AN_.__proto__=C.Ej;C.APk.__proto__=C.Ku;C.Np.__proto__=C.Ab1;C.AN5.__proto__=
C.Ej;C.APf.__proto__=C.Ku;C.PW.__proto__=C.Co;C.Sn.__proto__=C.AB;C.AOt.__proto__=
C.Sn;C.AOu.__proto__=C.Sn;C.AOx.__proto__=C.AqU;C.AOq.__proto__=C.FC;C.Aa8.__proto__=
C.IK;C.Pt.__proto__=C.IK;C.AMP.__proto__=C.AmC;C.ARW.__proto__=C.Ue;C.ARV.__proto__=
C.Ue;C.ASv.__proto__=C.M_;C.ASu.__proto__=C.I_;C.APE.__proto__=C.Kv;C.AkR.__proto__=
C.GJ;C.AUO.__proto__=C.I_;C.Aey.__proto__=C.YB;C.ACn.__proto__=C.Ba;C.ADG.__proto__=
C.De;C.APG.__proto__=C.BR;C.Aa$.__proto__=C.NP;C.X1.__proto__=C.NP;C.R5.__proto__=
C.D9;C.X2.__proto__=C.R5;C.XZ.__proto__=C.IJ;C.Aa6.__proto__=C.IJ;C.XY.__proto__=
C.IJ;C.Aa5.__proto__=C.IJ;C.AMM.__proto__=C.AB;C.IJ.__proto__=C.I9;C.I9.__proto__=
C.Hj;C.NP.__proto__=C.FA;C.Axu.__proto__=C.ZH;C.ANT.__proto__=C.AmM;C.Axw.__proto__=
C.ZH;C.AUs.__proto__=C.Cg;C.AUq.__proto__=C.El;C.ARo.__proto__=C.Ll;C.AUr.__proto__=
C.El;C.NewMenu.__proto__=C.AB;C.ASl.__proto__=C.H3;C.AMO.__proto__=C.AmC;C.AM4.__proto__=
C.VF;C.JQ.__proto__=C.I9;C.API.__proto__=C.YC;C.Abx.__proto__=C.Cm;C.APT.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Mo;C.APH.__proto__=C.Aq8;C.Jl.__proto__=A.Core.
P;C.APD.__proto__=C.BR;C.SetSaveNaisIdScreen.__proto__=C.Rd;C.AOg.__proto__=C.AqR;
C.UX.__proto__=C.Cm;C.UY.__proto__=C.UX;C.AcP.__proto__=C.UX;C.AdY.__proto__=C.AC;
C.AGX.__proto__=C.Eg;C.AN8.__proto__=C.Ej;C.APi.__proto__=C.Ku;C.AN6.__proto__=C.
Ej;C.APg.__proto__=C.Ku;C.Aq_.__proto__=C.T4;C.APO.__proto__=C.T4;C.AqD.__proto__=
C.Nb;C.ANm.__proto__=C.Nb;C.ASe.__proto__=C.AeY;C.YB.__proto__=C.BR;C.Acv.__proto__=
C.BX;C.FM.__proto__=C.AC;C.AMS.__proto__=C.FM;C.AMT.__proto__=C.FM;C.AMz.__proto__=
C.I_;C.TP.__proto__=C.BX;C.ASn.__proto__=C.AB;C.AsI.__proto__=C.SetTransponderScreen;
C.AD$.__proto__=C.HN;C.AsJ.__proto__=C.O1;C.AxH.__proto__=C.O1;C.Acx.__proto__=C.
Cm;C.AWo.__proto__=C.M_;C.AWn.__proto__=C.I_;C.ARs.__proto__=A.Core.P;C.ARp.__proto__=
C.HN;C.AC7.__proto__=C.Aby;C.L4.__proto__=A.Core.P;C.AUM.__proto__=C.Cg;C.AUL.__proto__=
C.Cg;C.AVQ.__proto__=C.Cg;C.Afw.__proto__=C.Cm;C.Ji.__proto__=A.acn.Ji;C.AVE.__proto__=
C.AB;C.AUu.__proto__=C.AkR;C.ADI.__proto__=C.De;C.ANa.__proto__=C.AkR;C.APc.__proto__=
C.Aey;C.APF.__proto__=C.Aey;C.ACr.__proto__=C.Ba;C.AU5.__proto__=C.SX;C.AU9.__proto__=
C.Re;C.APC.__proto__=C.BR;C.AR7.__proto__=C.Fs;C.AR6.__proto__=C.Fs;C.AR5.__proto__=
C.Fs;C.AMm.__proto__=C.AmB;C.AR$.__proto__=C.Ui;C.AM_.__proto__=C.OverlayMenu;C.
AEt.__proto__=C.AC;C.AHf.__proto__=C.O4;C.AHC.__proto__=C.Cm;C.AU7.__proto__=C.BX;
C.Wt.__proto__=C.Cm;C.AN4.__proto__=C.Ej;C.APe.__proto__=C.Ku;C.AN7.__proto__=C.
Ej;C.APh.__proto__=C.Ku;C.M_.__proto__=C.GJ;C.Av3.__proto__=C.VF;C.ADK.__proto__=
C.De;C.ACq.__proto__=C.Ba;C.APJ.__proto__=C.AjU;C.AVT.__proto__=C.Cg;C.AVS.__proto__=
C.Cm;};C._ReInit=function(){var B;if((B=C.AxL._this))B._ReInit(),C.AxL._ReInit.call(
B);if((B=C.AxM._this))B._ReInit(),C.AxM._ReInit.call(B);if((B=C.A7._this))B._ReInit(
),C.A7._ReInit.call(B);if((B=C.Ps._this))B._ReInit(),C.Ps._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afl._this
))B._ReInit(),C.Afl._ReInit.call(B);if((B=C.BS._this))B._ReInit(),C.BS._ReInit.call(
B);if((B=C.WS._this))B._ReInit(),C.WS._ReInit.call(B);if((B=C.AsK._this))B._ReInit(
),C.AsK._ReInit.call(B);if((B=C.An1._this))B._ReInit(),C.An1._ReInit.call(B);if((
B=C.DQ._this))B._ReInit(),C.DQ._ReInit.call(B);if((B=C.Au1._this))B._ReInit(),C.
Au1._ReInit.call(B);if((B=C.Amx._this))B._ReInit(),C.Amx._ReInit.call(B);if((B=C.
Awb._this))B._ReInit(),C.Awb._ReInit.call(B);if((B=C.Awc._this))B._ReInit(),C.Awc.
_ReInit.call(B);if((B=C.Ayb._this))B._ReInit(),C.Ayb._ReInit.call(B);};C.DI=function(
D){var B;if((B=C.AxL._this)&&(B._cycle!=D))B._Done(C.AxL._this=null);if((B=C.AxM.
_this)&&(B._cycle!=D))B._Done(C.AxM._this=null);if((B=C.A7._this)&&(B._cycle!=D)
)B._Done(C.A7._this=null);if((B=C.Ps._this)&&(B._cycle!=D))B._Done(C.Ps._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afl._this)&&(B._cycle!=D))B._Done(C.Afl._this=null);if((B=C.BS._this)&&(B._cycle
!=D))B._Done(C.BS._this=null);if((B=C.WS._this)&&(B._cycle!=D))B._Done(C.WS._this=
null);if((B=C.AsK._this)&&(B._cycle!=D))B._Done(C.AsK._this=null);if((B=C.An1._this
)&&(B._cycle!=D))B._Done(C.An1._this=null);if((B=C.DQ._this)&&(B._cycle!=D))B._Done(
C.DQ._this=null);if((B=C.Au1._this)&&(B._cycle!=D))B._Done(C.Au1._this=null);if((
B=C.Amx._this)&&(B._cycle!=D))B._Done(C.Amx._this=null);if((B=C.Awb._this)&&(B._cycle
!=D))B._Done(C.Awb._this=null);if((B=C.Awc._this)&&(B._cycle!=D))B._Done(C.Awc._this=
null);if((B=C.Ayb._this)&&(B._cycle!=D))B._Done(C.Ayb._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */