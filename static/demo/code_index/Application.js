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
,280];var MR=[0,280,116,400];var Tf=[116,280,232,400];var U1=[0,400,116,520];var
Aab=[116,400,232,520];var Xf=[-1,520,115,640];var Ix=[232,40,240,280];var U2=[5,
40,235,120];var Aac=[120,140,210,230];var U3=[20,140,110,230];var Aad=[0,0,116,120
];var Xg=[0,0,120,120];var Aae=[0,0,116,45];var Aaf=[0,0,8,200];var U4=[0,0,8,20
];var Xh=[30,0,210,40];var Pa=[0,0,40,40];var Aag=[7,8,200,40];var Oi=[0,0,200,40
];var Rp=[6,1];var Xi="ERROR: Invalid value for ItemHighlighting";var Xj=[10,10,
40,30];var Tg=[0,0,120,40];var Xk=[60,0,180,40];var Aah=[120,0,240,40];var Xl=[0
,0,100,40];var Xm=[83,0,157,40];var Th=[140,0,240,40];var Ti=[0,0,20,40];var Tj=[
220,0,240,40];var Aai=[0,0,300,30];var Tk=[0,30,300,60];var Aaj=[0,60,300,90];var
AfF=[0,90,300,120];var Aak=[0,100,300,110];var Xn=[0,50,300,60];var Aal=[0,30,300
,40];var Xo="*";var AhX=[40,40];var K3=[0,0,240,80];var AcR=[0,0,240,50];var LB=
"Cap";var AhY=[0,40,40,80];var Aoi=[200,40,240,80];var Oj=[30,40,210,80];var Xp=
"--";var Aam="%d";var AfG="%m";var AhZ="%Y";var AcS=" (";var U5=[0,0,232,80];var
Aoj="Date";var Aok=[48,40,88,78];var Aol=[39,40,79,80];var Aom=[80,44,87,77];var
Ald=".";var As5=[88,44,120,77];var Ayb=[120,44,127,77];var Ayc=[127,44,191,77];var
Pb=[0,0,80,40];var Rq="Text";var Ayd=[430,102,430,102];var U6=[0,0,240,240];var As6=[
232,0,240,240];var Aye=[0,10,240,240];var Ayf="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Ale=[0,80,240,280];var
Ayg="Unhandled option";var AfH="Unhandled animal list action";var Aon="Animal list content not handled.";
var I1=[0,40,240,80];var Aoo="Set Selected";var As7=" %%";var Xq=[0,180,240,220];
var As8=[82,127,167,150];var As9="Group";var As_=[77,91,167,124];var Aop=[0,0,90
,33];var As$=[4,4,18,29];var Alf=[20,4,34,29];var Ayh=[36,4,50,29];var Ayi=[52,4
,66,29];var Ayj=[68,4,82,29];var Ata="ERROR: Unhandled Device::SyncState";var Ayk=
":\n";var Pc="{1}";var Ayl="{2}";var AWn=[0,49,240,109];var AWo=[0,170,240,243];
var AWp=[0,110,240,170];var AWq=[20,243,220,268];var AHD=[30,8];var AHE="\u2265 ";
var AfI=[0,0,240,160];var Aoq=[0,0,0,0];var AWr=[0,0,240,66];var AHF=[10,0,76,66
];var Alg=[33,33];var AHG=[87,0,153,66];var AHH=[164,0,230,66];var AWs="No statistics available";
var AWt="in this environment.";var AHI=" fps";var AWu="CPU: - %%";var AcT=[0,0,240
,120];var AWv=[130,0,237,20];var AWw=[20,0,120,20];var AWx=[0,20,240,40];var AHJ=[
40,20,100,40];var Atb=[100,20,240,40];var AHK=[0,40,240,60];var AHL=[40,40,100,60
];var Aym=[100,40,240,60];var AHM=[0,60,50,80];var Ayn=[100,60,240,80];var AWy=[
0,80,50,100];var AWz=[100,80,240,100];var AWA=[0,100,50,120];var AWB=[100,100,240
,120];var AHN=[5,5,15,15];var AWC="%H";var MS="%M";var Ayo="Time";var AWD=[79,40
,119,78];var AWE=[125,40,164,80];var AWF=[86,40,126,80];var AWG=":";var AWH=[75,
40,115,80];var AHO=[0,0,240,150];var AWI=[60,0,155,40];var Ayp=[30,0,65,40];var AWJ=[
60,0,100,40];var Atc=[88,0,128,40];var Ayq=[60,0,71,40];var AWK=[60,0,74,40];var
AHP=[90,0,123,40];var AWL=[120,0,161,40];var AHQ=[120,0,165,40];var AHR=[60,0,88
,40];var AHS=[60,0,95,40];var AWM="Did not expect iterator bigger than number of records";
var AHT=[20,0,240,20];var AWN=[0,38,240,40];var AWO=[0,0,8,4];var Rr=[0,0,240,280
];var U7=[0,280,240,320];var AWP="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
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
230,40,238,280];var AHY="WARNING: Unhandled filter field: ";var AfJ="Should not happen.";
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
U8=[0,120,232,200];var AXH=[0,40,232,200];var Aao=[0,200,232,280];var AXI=[0,320
,240,400];var AXJ=[0,120,53,200];var Alk=[0,280,232,360];var AfK="%%";var Ah4=[0
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
var Ath="Unhandled popup id";var U9="0";var Ati=";";var AYv=[0,400,230,480];var AYw=[
5,120,235,200];var AYx=[0,640,230,760];var AIo=[0,0,300,200];var AYy=[20,40,220,
80];var AIp=[20,80,220,280];var AYz=[140,0,188,40];var AYA="ERROR: Row containing birth weight could not be loaded";
var AYB=[0,440,230,520];var Atj="ID";var AYC=[40,40,198,70];var AYD="Extra info: ";
var AIq=" -";var AYE=[0,0,230,120];var AYF=[0,0,230,40];var AYG=[0,80,230,120];var
AYH="\xB0Brix";var AcU=[0,320,230,400];var AYI=[0,410,230,490];var AYJ="ERROR: aNumberOfDays can not be < 0 ";
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
"/-1/-2";var AIA=[72,0,144,40];var AcV="\n";var AIB="(";var AZg=[72,0,156,40];var
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
var Atr=[0,0,25,40];var AIS="/^";var BaK="?/?";var Brs=[100,4,180,40];var Brt=[65
,0,99,40];var Bru=[165,0,200,40];var BaL=[0,0,60,40];var BaM="9999/^9999";var Brv=
"Invalid index: ";var Brw="Unknown AnimalIdGenerationMethod: ";var Brx="Invalid gender: ";
var Ats="Invalid input state: ";var Bry="Unhandled AnimalIdGenerationMethod";var
Brz=[42,35,67,75];var BrA=[5,35,39,75];var BrB=[70,40,228,70];var BrC="Invalid direction for setting focus";
var Ah5="Invalid index";var BrD="Unvalid direction";var BrE=[0,0,42,30];var BaN=[
22,0,42,30];var BrF=[20,0,40,30];var BrG=[0,0,158,30];var BaO=[32,0,62,30];var BaP=[
64,0,94,30];var BaQ=[96,0,126,30];var BrH=[128,0,158,30];var BrI=" %% ";var BrJ=[
0,70,240,220];var BrK=[0,237,240,307];var BaR="\n44 %% done";var BrL=[0,0,166,30
];var AIT=[0,0,12,30];var AyS=[14,0,26,30];var A0o=[28,0,40,30];var A0p=[42,0,54
,30];var A0q=[56,0,68,30];var A0r=[70,0,82,30];var A0s=[84,0,96,30];var A0t=[98,
0,110,30];var BaS=[112,0,124,30];var A0u=[126,0,138,30];var BrM=[140,0,152,30];var
BrN=[154,0,166,30];var BaT=[20,0,46,30];var BrO="\u2642";var BrP="{fnt3}\u2642{fnt1}";
var BrQ="\u2640";var BrR="{fnt3}\u2640{fnt1}";var BrS="{parc}";var BrT=[30,30,210
,80];var BrU="Implement in derieved class!";var BrV=[60,4,226,34];var BaU=[30,4,
58,34];var BaV=[4,0,27,40];var BrW=[116,4,228,34];var BrX=[60,4,86,34];var BrY=[
88,4,114,34];var AoC="Implement in derived class!";var BaW="Implement in derived class.";
var BrZ="Invalid nais id view: ";var Br0=[0,35,240,75];var Br1=[0,0,110,30];var Br2=[
0,0,26,30];var Br3="100";var A0v="\n\n";var Br4=[240,240];var Br5=[0,240];var Br6=
"Unknown rated attribute: ";var Br7=[120,80,240,280];var Br8=[0,80,120,280];var AIU=
" %% (";var AyT=" \xB1 ";var AyU=" (n = ";var A0w=[0,80,232,120];var Br9=[0,242,
232,282];var A0x=[0,280,232,320];var Br_=[35,0,200,40];var Br$=[1,0,31,40];var Bsa=[
32,40];var Bsb=[32,0];var Bsc=[3,0,83,40];var BaX=[180,0,240,40];var Bsd=[120,0,
180,40];var Bse=[65,0,125,40];var Bsf=[0,0,120,200];var Bsg=[0,40,120,150];var BaY=[
15,160,60,190];var BaZ=[60,160,105,190];var Bsh=[0,65,240,135];var Bsi=[10,112,170
,192];var Bsj=[178,129,248,173];var Bsk=[0,40,240,110];var Bsl=[10,98,170,178];var
Bsm=[178,112,248,156];var Bsn=[85,190,160,265];var Bso=[89,194,155,260];var Bsp=[
26,190,111,250];var Bsq=[125,181,225,211];var Bsr=[100,220,183,250];var Bss="38.7";
var Bst=[180,220,225,250];var Bsu="\xB0C";var Bsv=[0,99,240,178];var Bsw=[100,280
,140,320];var Bsx=[0,26,240,105];var Ba0=[30,40];var Ba1=[30,0];var Bsy=[149,0,200
,40];var Bsz=[145,40];var BsA=[145,0];var BsB=[38,0,88,40];var A0y=[0,0,35,40];var
BsC=[0,0,50,40];var BsD=[40,0,200,40];var BsE=[95,0,145,40];var BsF=[65,5,223,35
];var A0z=[0,0,15,40];var BsG=[72,0,140,40];var Ba2="\n(";var BsH="%y/%m/%d";var
BsI="%y ";var BsJ=" %m ";var BsK=" %d ";var BsL="20";var BsM=[225,0,240,40];var BsN=[
0,400,232,440];var BsO=[0,440,232,480];var BsP=[0,480,232,520];var BsQ=[0,520,232
,560];var BsR=[0,560,232,600];var BsS=[0,598,232,638];var BsT=[5,0,215,40];var BsU=[
215,8,240,33];var BsV="Implement in dervied class.";var BsW="ERROR: Unhandled temperature unit: ";
var AIV="ERROR: Unhandled mass unit: ";var BsX=[-1,160,115,280];var BsY=[114,160
,230,280];var A0A=[116,40,232,160];var AyV="Unknown weight class index: ";var BsZ=
"< 35";var Bs0="35 - 40";var Bs1="40 - 45";var Bs2="45 - 50";var Bs3="\u2265 50";
var Bs4="< 80";var Bs5="80 - 90";var Bs6="90 - 100";var Bs7="100 - 110";var Bs8=
"\u2265 110";var Ba3="Unknown mass unit";var Bs9=[143,0,193,40];var Ba4=[192,0,240
,40];var Bs_=[44,28,44,28];var Bs$="0 %%";var Bta=[-1,40,115,160];var Btb=[117,40
,233,160];var Btc=[1,160,117,280];var Btd=[114,158,230,278];var Bte=[1,280,117,400
];var Btf=[30,0,155,40];var Ba5="\u2620";var A0B=[380,150,380,190];var Ba6=[105,
0,155,50];var A0C=[190,1,240,41];var Btg=[72,0,108,40];var Bth=[108,0,180,40];var
Bti=[60,0,94,40];var Btj=[94,0,200,40];var Btk="Scroll direction not supported.";
var Btl=[44,0,207,40];var Btm=[207,0,240,40];var Btn="99";var Bto="Unknown birth type";
var Btp=[44,0,189,40];var Btq=[5,0,44,40];var Btr=[44,0,240,40];var Bts=[240,0,240
,40];var Btt="\u25C9";var Ba7="\u25CB";var Btu=[75,4,215,34];var Btv=[47,4,73,34
];var Ba8=[17,4,45,34];var Btw=[0,0,138,30];var Btx=[47,4,215,34];var A0D="Unhandled MotherSelectionFilterMode: ";
var Bty="Read only!";var Btz="actions array too small to hold all actions";var BtA=[
120,40];var BtB=[120,0];var BtC=[5,0,115,40];var BtD=[0,0,205,40];var BtE=[59,4,
170,34];var BtF=[59,1,173,37];var BtG=[175,1,205,37];var BtH=[0,0,37,40];var BtI=[
115,98,205,188];var BtJ=[0,40,235,100];var BtK=[2,200,240,280];var BtL=" 01234";
var BtM=[0,0];var BtN=[33,63];var BtO=[25,56];var BtP="Unknown transponder image type: ";
var AIW=[0,0,82,82];var BtQ=[0,0,81,26];var BtR=[105,120,195,210];var BtS=[10,140
,100,230];var Ba9="Unhandled EartagNrAssignmentMode: ";var BtT="Unhandled Gender";
var BtU=[10,35,35,75];var BtV=[44,40,202,70];var BtW=[204,35,232,75];var BtX="Unvalid FatoryResetScope";
var Ba_=[0,120,240,200];var BtY=[144,0,192,40];var BtZ=[144,0,240,40];var Bt0=[195
,0,245,50];var Bt1=[120,0,120,40];var Bt2=[140,0,240,30];var Bt3=[30,0,232,40];var
Bt4=[60,0,160,40];var Bt5=[160,0,200,40];var Bt6=[150,17,200,40];var Bt7=[155,40
];var Bt8=[155,0];var Bt9=[146,80,240,160];var Bt_=[56,80,146,160];var Bt$=[0,80
,56,160];var Bua=[13,107,47,141];var Bub=[74,109,104,139];var Buc=[50,100,130,150
];var Bud=[55,112,145,140];var Bue=[146,112,236,140];var Buf=[150,86,223,110];var
AIX=[0,40,240,120];var Bug="Menu item for animal table field not found";var Ba$=[
0,360,240,440];var Buh=[0,440,240,520];var Bui=[5,40,235,104];var Buj=[120,108,226
,218];var Buk=[20,120,110,210];var Bul=[5,223,235,280];var Bum=[0,0,64,30];var Bun=[
44,0,64,30];var Buo=[185,5,225,35];var Bup=[170,5,234,35];var Bba=[0,80,240,200];
var Buq="Error!";var Bur="Unhandled number of digits";var Bus=[0,0,126,30];var But=[
22,5,149,35];var Buu=[149,0,232,40];var Bbb=[5,20];var Buv=[5,0];var Buw="Unhandled AnimalIdAutoGenerationMethod: ";
var Bux=[4,440,236,520];var Buy="Unhandled TransponderAssignmentIdChangeMethod: ";
var Buz="\n";var BuA="%";var BuB=[0,0,160,120];var BuC=[2,2,157,117];var BuD=[50
,70];var BuE=[50,50];var BuF=[0,0,168,40];var BuG=[168,0,240,40];var BuH=[0,47,232
,77];var BuI=[65,0,101,40];var BuJ=[135,0,175,40];var BuK=[85,17,135,40];var BuL=[
125,17,175,40];var BuM=[40,0];var Bbc=[0,40,230,280];var BuN="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BuO="ERROR: Received more animal table fields than expected!";
var BuP=[0,80,240,130];var BuQ="Unhandled Device::MassDeregistrationCriterion: ";
var Bbd="Unhandled BackupError: ";var BuR="Unhandled PopupId: ";var BuS=[203,0,240
,40];var BuT=[168,0,203,40];var BuU=[35,0,152,40];var BuV=[0,0,84,40];var BuW=[84
,0,167,40];var BuX="Unhandled TransponderLinkageIdChangeMethod: ";
C.AMW={Device:null,A6x:null,GK:null,Init:function(aArg){},DriveCursorHitting:function(
Tm,BH,Fg){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
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
function(G){var B;if(!!this.ADs)this.Ek.Ab_((C.BR.isPrototypeOf(B=A._NewObject(this.
ADs,0))?B:null));else this.Ek.Ab_(null);},_Init:function(aArg){C.Abs._Init.call(
this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.Ek._Init.call(this.
Ek={I:this},0);this.__proto__=C.AB;this.Background.A1(0x3F);this.Background.H(Cf
);this.Background.L(A.jb.CU);this.Ek.H(BD);this.Ek.As(false);this.J(this.Background
,-1);this.J(this.Ek,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Abs;this.
Background._Done();this.Ek._Done();C.Abs._Done.call(this);},_ReInit:function(){C.
Abs._ReInit.call(this);this.Background._ReInit();this.Ek._ReInit();},_Mark:function(
D){var B;C.Abs._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.WY={In:null,Zv:function(E){var B;if(this.In===E)return;if(!!this.In)this.AqN(
this.In,null,null,null,[B=this.In,B.AyW],null,false);this.In=E;if(!!this.In)this.
AkN(this.In,null,null,null,null,null,null,[B=this.In,B.AIZ],null,false);},AEO:function(
){return this.In;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=
C.WY;this.H([0,0,C.AsF[0],C.AsF[1]]);},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.In)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.OF={Vf:null,Q:null,AnQ:null,ZI:null,NY:null,OD:null,TO:null,TP:null,AGv:255,
Hh:function(G){var F;if(!!this.Q){this.A2H();var Adc=(F=this.Q,F[1].call(F[0]));
if(Adc>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gk);this.OD.L((this.OD.AQ&0x00FFFFFF
)|(this.AlP(Adc,0,30)<<24));this.TO.L((this.TO.AQ&0x00FFFFFF)|(this.AlP(Adc,31,60
)<<24));this.TP.L((this.TP.AQ&0x00FFFFFF)|(this.AlP(Adc,61,100)<<24));}},A0_:function(
s){this.Hh(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.A0_],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.A0_],E,0);if(!!E)A.pe([this,
this.A0_],this);},A3V:function(G){var F;if(!!this.AnQ)this.ZI.As((F=this.AnQ,F[1
].call(F[0])));else this.ZI.As(false);this.A_W(255);},A_P:function(E){if(A.aaZ(this.
AnQ,E))return;if(!!this.AnQ)A.z$([this,this.A3V],this.AnQ,0);this.AnQ=E;if(!!E)A.
zX([this,this.A3V],E,0);if(!!E)A.pe([this,this.A3V],this);},A_W:function(E){if(this.
AGv===E)return;this.AGv=E;if(!!this.Vf)this.Vf.L((this.Vf.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},AlP:function(A1e,BcD,Bx6){if(A1e<BcD)return 0;else if((A1e>=BcD)&&(A1e<
Bx6))return this.AGv&0xFF;else return 255;},A2H:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.Vf=this.TP;else if((F=this.Q,F[1].call(F[0]))>
30)this.Vf=this.TO;else this.Vf=this.OD;}else this.Vf=null;},BlS:function(){return this.
AGv;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);C.ZI._Init.call(this.ZI={
I:this},0);A.acg.Ap._Init.call(this.NY={I:this},0);A.acg.AL._Init.call(this.OD={
I:this},0);A.acg.AL._Init.call(this.TO={I:this},0);A.acg.AL._Init.call(this.TP={
I:this},0);this.__proto__=C.OF;this.H(E8);this.ZI.Fq(2000);this.NY.H(E8);this.NY.
L(A.jb.Text);this.OD.H(Hs);this.OD.L(A.jb.E1);this.TO.H(I0);this.TO.L(A.jb.E1);this.
TP.H(Iw);this.TP.L(A.jb.E1);this.J(this.NY,0);this.J(this.OD,0);this.J(this.TO,0
);this.J(this.TP,0);this.ZI.Q=[this,this.BlS,this.A_W];this.NY.Ax(A.aaL(A.ach.AM6
));},_Done:function(){this.__proto__=A.Core.P;this.ZI._Done();this.NY._Done();this.
OD._Done();this.TO._Done();this.TP._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.ZI._ReInit();this.NY._ReInit();this.OD._ReInit(
);this.TO._ReInit();this.TP._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(
this,D);if((B=this.Vf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnQ)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ZI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.ZI={_Init:function(aArg){A.acl.Gn._Init.call(
this,aArg);this.__proto__=C.ZI;this.AkZ=true;this.B3=0;this.Cx=255;},_className:
"Application::PulseAnimation"};C.Ek={GK:null,AR:null,Background:null,OF:null,Bo:
null,Do:null,La:0,Avt:0,Avu:0,Ao7:0,LN:false,KM:false,Qy:false,Ai:function(Ae){var
B;A.Core.P.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);
var GE=this.Bo.Bw;if(!Hg){this.Ao7=A.jb.CU;this.La=A.jb.Text;}else if(GE){this.Ao7=
this.Avt;this.La=this.Avu;}else if(Fv){this.Ao7=this.Avt;this.La=this.Avu;}else{
this.Ao7=A.jb.CU;this.La=A.jb.Text;}this.Background.L(this.Ao7);if(!!this.GK){this.
GK.WO(this.Ao7);this.GK.Dg(this.La);}this.LN=Hg;this.KM=Fv;this.Qy=GE;},Qx:function(
G){this.Am();A.pe(this.AR,this);},AiS:function(G){if(this.Do.Acp)return;this.Am(
);if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);},Ab_:function(
E){if(this.GK===E)return;if(!!this.GK)this.HR(this.GK);this.GK=E;if(!!this.GK)this.
J(this.GK,0);this.Bb(E);this.Am();},A_x:function(E){if(this.Avt===E)return;this.
Avt=E;this.Am();},A_y:function(E){if(this.Avu===E)return;this.Avu=E;this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);C.OF._Init.call(this.OF={I:this},0);A.Core.Timer._Init.call(this.Bo={
I:this},0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=C.Ek;var B;this.
H(BD);this.Background.A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.CU);
this.OF.H(O$);this.La=A.jb.Text;this.Bo.PZ(0);this.Bo.WQ(50);this.Do.Filter=1;this.
Avt=A.jb.AV;this.Avu=A.jb.Bm;this.Ao7=A.jb.Text;this.J(this.Background,0);this.J(
this.OF,0);this.OF.Au([B=A._GetAutoObject(A.Device.Device),B.Awe,B.AyX]);this.OF.
A_P([B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyY]);this.Bo.MK=[this,this.Qx];
this.Do.BG=[this,this.AiS];},_Done:function(){this.__proto__=A.Core.P;this.Background.
_Done();this.OF._Done();this.Bo._Done();this.Do._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.
OF._ReInit();this.Bo._ReInit();this.Do._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.GK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bo)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.X_={AeR:null,UL:null,CD:function(G){if(this.K&&this.K.CD
)return this.K.CD.apply(this,arguments);else return C.AB.CD.apply(this,arguments
);},E4:function(G){if(this.K&&this.K.E4)return this.K.E4.apply(this,arguments);else
return C.AB.E4.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Ap._Init.call(this.AeR={I:this},0);A.acg.Text._Init.call(this.UL={I:
this},0);this.__proto__=C.X_;this.AeR.H(Qb);this.UL.H(Qc);this.UL.R(A.jV);this.UL.
L(A.jb.Text);this.UL.Z(false);this.J(this.AeR,0);this.J(this.UL,0);this.AeR.Ax(null
);this.UL.S(A.aaL(A.fl.EK));var J_=this._variants();if(J_){this.K={};J_._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.AeR._Done();this.UL._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.AeR._ReInit();this.UL._ReInit();this.UL.S(A.aaL(A.fl.
EK));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.AeR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acq.
X_._variants();},K:null,_className:"Application::BootScreen"};C.AVh={AAS:function(
G){A._GetAutoObject(C.A7).Acf(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AVh;this.Background.L(0xFF000000);this.Ek.Z(false);},_className:
"Application::SleepScreen"};C.AvG={DY:null,Y:null,Yk:null,Yl:null,VS:null,Yb:null
,VT:null,X$:null,Ye:null,TT:null,Yd:null,Ym:null,Ay:null,CQ:function(){this.DK(this
);},Init:function(aArg){var B;A.zX([this,this.DK],[B=A._GetAutoObject(A.Device.Device
),B.ArF,B.Att],0);A._GetAutoObject(A.Device.Helper).AkR();this.Bb(this.VS);this.
N.Ct(A.aaL(A.ach.ADY));A.pe([this,this.DK],this);},Bb:function(E){var B;var A3v=
this.AV;C.AB.Bb.call(this,E);if((this.AV!==A3v)&&(!!this.AV&&((this.AV.U&0x400)===
0x400))){var AKb=A._NewObject(A.acl.AGs,0);AKb.Fq(250);AKb.HQ(1);AKb.WS(6);this.
Y.HK(this.AV,true,AKb,null);}},CD:function(G){this.A41(this);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkR();A._GetAutoObject(A.Device.Helper).Asz();},Fj:function(G){
var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.
Ay.MI(-this.Y.Br[1]);},Il:function(G){var Cy=(C.Fn.isPrototypeOf(G)?G:null);if(!
Cy)return;if(Cy===this.VS)A._GetAutoObject(C.A7).Cb(35);else if(Cy===this.Yb)A._GetAutoObject(
C.A7).Cb(34);else if(Cy===this.Ye)A._GetAutoObject(C.A7).Cb(69);else if(Cy===this.
VT)A._GetAutoObject(C.A7).Cb(8);else if(Cy===this.X$)A._GetAutoObject(C.A7).Cb(50
);else if(Cy===this.TT)A._GetAutoObject(C.A7).Cb(25);else if(Cy===this.Yk)A._GetAutoObject(
C.A7).Cb(77);else if(Cy===this.Yl)A._GetAutoObject(C.A7).Cb(70);else if(Cy===this.
Ym)A._GetAutoObject(C.A7).Cb(6);else if(Cy===this.Yd)A._GetAutoObject(C.A7).Cb(63
);},BBg:function(G){A._GetAutoObject(A.Device.Device).Ae4(!A._GetAutoObject(A.Device.
Device).AmW);},DK:function(G){if(A._GetAutoObject(A.Device.Device).AmW)this.N.Hz((
A.aaR(A.acf.A70)+CR)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hz((A.aaR(A.acf.
A70)+CR)+A.aaR(A.acf.A8F).toLowerCase());},Ady:function(G){A._GetAutoObject(A.Device.
Device).Dw(1);},A41:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).MC());this.VT.ZE(A._GetAutoObject(A.Device.Device).An.B8().toFixed(
));},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={
I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Fn._Init.call(this.Yk={I:this
},0);C.Fn._Init.call(this.Yl={I:this},0);C.Fn._Init.call(this.VS={I:this},0);C.Fn.
_Init.call(this.Yb={I:this},0);C.QZ._Init.call(this.VT={I:this},0);C.Fn._Init.call(
this.X$={I:this},0);C.Fn._Init.call(this.Ye={I:this},0);C.Fn._Init.call(this.TT={
I:this},0);C.Fn._Init.call(this.Yd={I:this},0);C.Fn._Init.call(this.Ym={I:this},
0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AvG;this.Background.L(A.
jb.CU);this.N.As(false);this.N.Z(true);this.Dr(C.Aq8);this.DY.A1(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CK);this.Y.H(L9);this.Y.JZ(9);this.Yk.H(Qd);this.Yk.Aj(true);
this.Yk.T(A.aaR(A.acf.Gs));this.Yl.H(J9);this.Yl.Aj(true);this.Yl.T(A.aaR(A.acf.
A8m));this.VS.H(Oh);this.VS.Aj(true);this.VS.T(A.aaR(A.acf.VE));this.Yb.H(Qe);this.
Yb.Aj(true);this.Yb.T(A.aaR(A.acf.TG));this.VT.H(MR);this.VT.Aj(true);this.VT.T(
A.aaR(A.acf.APV));this.X$.H(Tf);this.X$.Aj(true);this.X$.T(A.aaR(A.acf.Animal));
this.Ye.H(J9);this.Ye.Aj(true);this.Ye.T(A.aaR(A.acf.A73));this.TT.H(U1);this.TT.
As(true);this.TT.Aj(true);this.TT.Z(true);this.TT.T(A.aaR(A.acf.A6N));this.Yd.H(
Aab);this.Yd.Aj(true);this.Yd.T(A.aaR(A.acf.Device));this.Ym.H(Xf);this.Ym.Aj(true
);this.Ym.T(A.aaR(A.acf.Settings));this.Ay.H(Ix);this.J(this.DY,0);this.J(this.Y
,0);this.J(this.Yk,0);this.J(this.Yl,0);this.J(this.VS,0);this.J(this.Yb,0);this.
J(this.VT,0);this.J(this.X$,0);this.J(this.Ye,0);this.J(this.TT,0);this.J(this.Yd
,0);this.J(this.Ym,0);this.J(this.Ay,0);this.N.CF=[this,this.BBg];this.N.Ce=[this
,this.Ady];this.Y.Em=[this,this.Fj];this.Yk.AR=[this,this.Il];this.Yk.DC(A.aaL(A.
ach.AD1));this.Yl.AR=[this,this.Il];this.Yl.DC(A.aaL(A.ach.AD4));this.VS.AR=[this
,this.Il];this.VS.DC(A.aaL(A.ach.AP0));this.Yb.AR=[this,this.Il];this.Yb.DC(A.aaL(
A.ach.AQb));this.VT.AR=[this,this.Il];this.VT.DC(A.aaL(A.ach.AQA));this.X$.AR=[this
,this.Il];this.X$.DC(A.aaL(A.ach.AP4));this.Ye.AR=[this,this.Il];this.Ye.DC(A.aaL(
A.ach.AQK));this.TT.AR=[this,this.Il];this.TT.DC(A.aaL(A.ach.AQp));this.Yd.AR=[this
,this.Il];this.Yd.DC(A.aaL(A.ach.AQm));this.Ym.AR=[this,this.Il];this.Ym.DC(A.aaL(
A.ach.AQ4));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done(
);this.Y._Done();this.Yk._Done();this.Yl._Done();this.VS._Done();this.Yb._Done();
this.VT._Done();this.X$._Done();this.Ye._Done();this.TT._Done();this.Yd._Done();
this.Ym._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Yk._ReInit();this.Yl.
_ReInit();this.VS._ReInit();this.Yb._ReInit();this.VT._ReInit();this.X$._ReInit(
);this.Ye._ReInit();this.TT._ReInit();this.Yd._ReInit();this.Ym._ReInit();this.Ay.
_ReInit();this.Yk.T(A.aaR(A.acf.Gs));this.Yl.T(A.aaR(A.acf.A8m));this.VS.T(A.aaR(
A.acf.VE));this.Yb.T(A.aaR(A.acf.TG));this.VT.T(A.aaR(A.acf.APV));this.X$.T(A.aaR(
A.acf.Animal));this.Ye.T(A.aaR(A.acf.A73));this.TT.T(A.aaR(A.acf.A6N));this.Yd.T(
A.aaR(A.acf.Device));this.Ym.T(A.aaR(A.acf.Settings));this.CQ();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ye
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ym)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeScreen"
};C.Rc={Number:null,Jl:null,IZ:null,TM:null,AsV:0,Init:function(aArg){var B;A.zX([
this,this.Bcf],[B=A._GetAutoObject(A.Device.Device),B.AS4,B.A0Q],0);A.pe([this,this.
Bcf],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Aoa();},CD:function(G){A.
_GetAutoObject(A.Device.Device).AhM();},E4:function(G){A._GetAutoObject(A.Device.
Device).An4();},Al_:function(G){var F;this.Am();this.TM.As(A._GetAutoObject(A.Device.
Device).ScanState===1);if(A._GetAutoObject(A.Device.Device).ScanState===2)A._GetAutoObject(
A.Device.Helper).Aeq.As(true);if(!this.TM.Bw)(F=this.TM.Q,F[2].call(F[0],this.TM.
B3));},Bcf:function(s){this.Al_(s);},Aoa:function(){switch(A._GetAutoObject(A.Device.
Device).ScanState){case 4:this.Background.L(A.jb.Gk);break;case 3:this.Background.
L(A.jb.Ib);break;default:this.Background.L(A.jb.CK);}},AkG:function(E){if(this.AsV===
E)return;this.AsV=E;this.Jl.AkG(E);},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.acg.Text._Init.call(this.Number={I:this},0);C.Jl._Init.call(this.Jl={I:this}
,0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Gn._Init.call(this.TM={I:this}
,0);this.__proto__=C.Rc;var B;this.Background.L(A.jb.CK);this.N.Z(false);this.Number.
H(U2);this.Number.Lv(true);this.Number.L(A.jb.Text);this.Jl.H(Aac);this.Jl.AkG(0
);this.IZ.H(U3);this.IZ.L(A.jb.AV);this.IZ.Zx(true);this.TM.Fq(1750);this.TM.Uy(
750);this.TM.AkB(0);this.TM.As(true);this.TM.B3=3;this.J(this.Number,0);this.J(this.
Jl,0);this.J(this.IZ,0);this.Number.S(A.aaL(A.fl.Af));this.IZ.Ax(A.aaL(A.ach.AD3
));this.TM.Q=[B=this.IZ,B.ASR,B.Cw];this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Number._Done();this.Jl._Done();this.IZ._Done();this.TM._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Number._ReInit();this.
Jl._ReInit();this.IZ._ReInit();this.TM._ReInit();this.Number.S(A.aaL(A.fl.Af));}
,_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Number)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.TM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ScanScreen"};C.Fn={C_:null,ADP:null,AR:null,Bo:null,Do:null,Background:
null,MB:null,OL:null,Q5:null,G$:null,A56:true,LN:false,KM:false,Qy:false,Init:function(
aArg){},Bl:function(aSize){var B;C.Hk.Bl.call(this,aSize);this.MB.H([0,0,(B=this.
M)[2]-B[0],B[3]-B[1]]);this.Q5.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);
this.OL.H(this.Q5.M);this.G$.H([].concat(0,this.G$.M.slice(1,4)));this.G$.H(A.abN(
this.G$.M,aSize[0]));this.G$.H(A.abP(this.G$.M,0));this.G$.H([].concat(this.G$.M.
slice(0,3),47));},Ai:function(Ae){var B;C.Hk.Ai.call(this,Ae);var Hg=((Ae&0x10)===
0x10);var Fv=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!Hg){this.Q5.L(A.jb.Am8);this.
G$.L(A.jb.CK);this.OL.Z(true);this.OL.L(A.jb.ARk);this.MB.Z(false);}else if(GE){
this.Q5.L(A.jb.Bm);this.G$.L(A.jb.Bm);this.OL.Z(false);this.MB.Z(true);}else if(
Fv){this.Q5.L(A.jb.Bm);this.G$.L(A.jb.Bm);this.OL.Z(false);this.MB.Z(true);}else{
this.Q5.L(A.jb.Text);this.G$.L(A.jb.Text);this.OL.Z(true);this.OL.L(A.jb.CU);this.
MB.Z(false);}this.LN=Hg;this.KM=Fv;this.Qy=GE;},Qx:function(G){this.Am();A.pe(this.
AR,this);},AiS:function(G){if(this.Do.Acp)return;this.Am();if(this.Bo.Bw){A.pe(this.
AR,this);this.Bo.As(false);}this.Bo.As(true);},T:function(E){if(this.DL===E)return;
this.DL=E;this.G$.R(E);},DC:function(E){if(this.C_===E)return;this.C_=E;this.Q5.
Ax(E);this.OL.Ax(E);},Ab9:function(E){if(this.A56===E)return;this.A56=E;this.G$.
Z(E);},Aca:function(E){if(this.ADP===E)return;this.ADP=E;this.MB.Ax(E);this.MB.H(
A.abK(this.MB.M,E.FrameSize));},_Init:function(aArg){C.Hk._Init.call(this,aArg);
A.Core.Timer._Init.call(this.Bo={I:this},0);A.Core.BF._Init.call(this.Do={I:this
},0);A.acg.AL._Init.call(this.Background={I:this},0);A.acg.Ap._Init.call(this.MB={
I:this},0);A.acg.Ap._Init.call(this.OL={I:this},0);A.acg.Ap._Init.call(this.Q5={
I:this},0);C.CG._Init.call(this.G$={I:this},0);this.__proto__=C.Fn;this.H(Aad);this.
Bo.PZ(0);this.Bo.WQ(50);this.Do.Filter=1;this.Background.H(Xg);this.Background.Z(
false);this.MB.A1(0x14);this.MB.L(A.jb.AV);this.MB.Cw(0);this.OL.L(A.jb.CU);this.
OL.Cw(1);this.G$.H(Aae);this.J(this.Background,0);this.J(this.MB,0);this.J(this.
OL,0);this.J(this.Q5,0);this.J(this.G$,0);this.Bo.MK=[this,this.Qx];this.Do.BG=[
this,this.AiS];this.MB.Ax(A.aaL(A.ach.N1));this.OL.Ax(A.aaL(A.ach.AvR));this.Q5.
Ax(A.aaL(A.ach.AvR));this.G$.S(A.aaL(A.fl.Af));this.G$.AY(A.aaL(A.fl.Ak));this.G$.
Cm(A.aaL(A.fl.Bh));this.ADP=A.aaL(A.ach.N1);this.Init(aArg);},_Done:function(){this.
__proto__=C.Hk;this.Bo._Done();this.Do._Done();this.Background._Done();this.MB._Done(
);this.OL._Done();this.Q5._Done();this.G$._Done();C.Hk._Done.call(this);},_ReInit:
function(){C.Hk._ReInit.call(this);this.Bo._ReInit();this.Do._ReInit();this.Background.
_ReInit();this.MB._ReInit();this.OL._ReInit();this.Q5._ReInit();this.G$._ReInit(
);this.G$.S(A.aaL(A.fl.Af));this.G$.AY(A.aaL(A.fl.Ak));this.G$.Cm(A.aaL(A.fl.Bh)
);},_Mark:function(D){var B;C.Hk._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.ADP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bo)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.G$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.Ay={Axq:null,Background:null,O7:null,Asq:0,Ak_:10,AjF:100,AQ:0,Ao0:true,Bl:function(
aSize){A.Core.P.Bl.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
O7.H([].concat(2,this.O7.M.slice(1,4)));this.O7.H(A.abN(this.O7.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.P.Ai.call(this,Ae);var XK=this.Ak_<this.AjF;var AJL=(B=
this.M)[3]-B[1];var A3i=10;var Auz=AJL;var A4Y=0;if(10>AJL)A3i=AJL;if(this.Ak_<this.
AjF)Auz=((Auz*this.Ak_)/this.AjF)|0;if(Auz<A3i)Auz=A3i;if(this.Ak_<this.AjF)A4Y=((
this.BlQ()*(AJL-Auz))/(this.AjF-this.Ak_))|0;this.O7.H(A.abP(this.O7.M,A4Y));this.
O7.H([].concat(this.O7.M.slice(0,3),A4Y+Auz));this.O7.Z(XK);this.Background.Z(XK
);if(!!this.Axq&&(this.Ao0!==XK))A.pe(this.Axq,this);this.Ao0=XK;},BlQ:function(
){var E=this.Asq;var HG=this.AjF-this.Ak_;if((HG>0)&&(E>HG))E=HG;if(HG<=0)E=0;return E;
},MI:function(E){if(E<0)E=0;if(this.Asq===E)return;this.Asq=E;this.Am();},MJ:function(
E){if(E<0)E=0;if(this.Ak_===E)return;this.Ak_=E;this.Am();},MH:function(E){if(E<
0)E=0;if(this.AjF===E)return;this.AjF=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.O7.L(E);},BnY:function(E){if(A.aa0(this.Axq,E))return;this.
Axq=E;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(
this.Background={I:this},0);A.acg.AL._Init.call(this.O7={I:this},0);this.__proto__=
C.Ay;this.H(Aaf);this.As(false);this.AQ=A.jb.AV;this.Background.A1(0x0);this.Background.
H(U4);this.Background.L(A.jb.CU);this.O7.A1(0x0);this.O7.H(U4);this.O7.L(A.jb.AV
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
function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[
3]-B[1]);this.Ay.MI(-this.Y.Br[1]);A.pe([this,this.BBE],this);},ABp:function(G){
var B;var G0=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C3(A.
aaL(A.ach.YI));this.N.CF=[this,this.Ew];if(!!G0&&!!G0.Amv){this.N.E6(A.jV);this.
N.JE.CZ(255);this.N.ArX(G0.AqY);this.N.Ct(G0.AvO);this.N.Ce=G0.Amv;}else{this.N.
E6(A.jV);this.N.Ct(null);this.N.Ce=null;}if(!!G0&&!!G0.Agy){this.N.CS(G0.AxV);this.
N.GX.CZ(G0.Axr);this.N.AnE(G0.AmY);this.N.C4(G0.Are);this.N.Ca=G0.Agy;}else{this.
N.CS(A.jV);this.N.C4(null);this.N.Ca=null;}},Jf:function(E){if(this.A7t===E)return;
this.A7t=E;this.Hl.R(E);},Ew:function(G){A._GetAutoObject(C.A7).FB();},BBE:function(
G){var B;var BAy=this.Ay.Background.Fp();var Beu=(BAy?this.M[2]-((B=this.Ay.M)[2
]-B[0]):this.M[2]);var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var Ajg=X;
X=X.Ah;if(((Ajg.U&0x400)===0x400)){if(!!(A.Core.Akh.isPrototypeOf(Ajg)?Ajg:null)
){var BeA=(A.Core.Akh.isPrototypeOf(Ajg)?Ajg:null);BeA.DD([Beu,BeA.ED[1]]);}else
if(!!(A.Core.Eu.isPrototypeOf(Ajg)?Ajg:null)){var Bgu=(A.Core.Eu.isPrototypeOf(Ajg
)?Ajg:null);Bgu.H(A.abN(Bgu.M,Beu));}}}},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.CG._Init.call(this.Hl={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);A.acg.Ap._Init.call(this.Ap={I:this},0);this.
__proto__=C.Cg;this.N.Z(true);this.Hl.H(Xh);this.Hl.As(false);this.Hl.R(A.aaR(A.
acf.Settings));this.Hl.L(A.jb.Text);this.Y.H(Fe);this.Y.JZ(1);this.Ay.H(Ix);this.
Ap.H(Pa);this.Ap.L(A.jb.Text);this.J(this.Hl,0);this.J(this.Y,0);this.J(this.Ay,
0);this.J(this.Ap,0);this.Hl.S(A.aaL(A.fl.Kt));this.Hl.AY(A.aaL(A.fl.HL));this.Y.
Em=[this,this.Fj];this.Ap.Ax(A.aaL(A.ach.ADw));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Hl._Done();this.Y._Done();this.Ay._Done();this.Ap._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Hl._ReInit(
);this.Y._ReInit();this.Ay._ReInit();this.Ap._ReInit();this.Hl.R(A.aaR(A.acf.Settings
));this.Hl.S(A.aaL(A.fl.Kt));this.Hl.AY(A.aaL(A.fl.HL));},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Hl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsScreen"
};C.Aq8={Timer:null,Text:null,Init:function(aArg){var B;A.zX([this,this.Bhq],[B=
A._GetAutoObject(A.Device.Helper),B.U_,B.Vb],0);},Dg:function(E){C.BR.Dg.call(this
,E);this.Text.L(E);},Bhq:function(G){this.Text.R(A._GetAutoObject(A.acj.KR).Bjp(
A._GetAutoObject(A.Device.Helper).Dv()));},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.Core.Timer._Init.call(this.Timer={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.Aq8;this.Timer.WQ(1);this.Timer.As(true);
this.Text.H(Aag);this.Text.R(A.jV);this.J(this.Text,0);this.Timer.MK=[this,this.
Bhq];this.Text.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Timer._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.Timer._ReInit();this.Text._ReInit();this.Text.S(A.
aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Timer
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderTime"};C.BR={KX:0xFFFFFFFF,LX:0,Dg:function(E){if(
this.KX===E)return;this.KX=E;},WO:function(E){if(this.LX===E)return;this.LX=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.BR;this.H(Oi
);},_className:"Application::HeaderContent"};C.N={V7:null,V8:null,V9:null,Ag5:null
,Ag6:null,Ag7:null,CF:null,Ce:null,Ca:null,Background:null,NR:null,Jj:null,JE:null
,GX:null,PF:null,IS:null,Li:null,T8:null,T9:null,An6:A.jV,An7:A.jV,An8:A.jV,Arf:
0,Arg:0,Arh:0,Ahn:0,ZK:false,WW:false,Asw:false,AsL:false,AsK:false,Init:function(
aArg){},Ai:function(Ae){if(!!this.V7)this.Jj.S(this.V7);if(!!this.V8)this.JE.S(this.
V8);if(!!this.V9)this.GX.S(this.V9);switch(this.Ahn){case 0:{this.NR.Z(false);this.
Jj.L(A.jb.Bm);this.JE.L(A.jb.Bm);this.GX.L(A.jb.Bm);this.PF.L(A.jb.Bm);this.IS.L(
A.jb.Bm);this.Li.L(A.jb.Bm);}break;case 1:{if(!this.Ag5)this.NR.H(A.aaT(this.Jj.
ASJ(),Rp));else this.NR.H(this.PF.Dd());this.NR.Z(true);this.Jj.L(A.jb.Text);this.
JE.L(A.jb.Bm);this.GX.L(A.jb.Bm);this.PF.L(A.jb.Text);this.IS.L(A.jb.Bm);this.Li.
L(A.jb.Bm);}break;case 3:{if(!this.Ag7)this.NR.H(A.aaT(this.GX.ASJ(),Rp));else this.
NR.H(this.Li.Dd());this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JE.L(A.jb.Bm);this.GX.
L(A.jb.Text);this.PF.L(A.jb.Bm);this.IS.L(A.jb.Bm);this.Li.L(A.jb.Text);}break;case
2:{if(!this.Ag6)this.NR.H(A.aaT(this.JE.ASJ(),Rp));else this.NR.H(this.IS.Dd());
this.NR.Z(true);this.Jj.L(A.jb.Bm);this.JE.L(A.jb.Text);this.GX.L(A.jb.Bm);this.
PF.L(A.jb.Bm);this.IS.L(A.jb.Text);this.Li.L(A.jb.Bm);}break;default:{this.NR.Z(
false);A.ab5("%s",Xi);}}if(!!this.PF.Al){this.PF.Z(true);this.Jj.Z(false);}else{
this.PF.Z(false);this.Jj.Z(true);}if(this.An7.length<=0){this.IS.Z(true);this.JE.
Z(false);}else{this.IS.Z(false);this.JE.Z(true);}if(!!this.Li.Al){this.Li.Z(true
);this.GX.Z(false);}else{this.Li.Z(false);this.GX.Z(true);}},Hz:function(E){if(this.
An6===E)return;this.An6=E;this.Jj.R(E);this.Am();},E6:function(E){if(this.An7===
E)return;this.An7=E;this.JE.R(E);this.Am();},CS:function(E){if(this.An8===E)return;
this.An8=E;this.GX.R(E);this.Am();},AFB:function(E){if(this.Ahn===E)return;this.
Ahn=E;this.Am();},AFs:function(E){if(this.V7===E)return;this.V7=E;this.Jj.S(E);this.
Am();},ArX:function(E){if(this.V8===E)return;this.V8=E;this.JE.S(E);this.Am();},
AnE:function(E){if(this.V9===E)return;this.V9=E;this.GX.S(E);this.Am();},A3_:function(
G){this.Am();},C3:function(E){if(this.Ag5===E)return;this.Ag5=E;this.PF.Ax(E);this.
Am();},Ct:function(E){if(this.Ag6===E)return;this.Ag6=E;this.IS.Ax(E);this.Am();
},C4:function(E){if(this.Ag7===E)return;this.Ag7=E;this.Li.Ax(E);this.Am();},OW:
function(E){if(this.AsK===E)return;this.AsK=E;this.T8.Z(E);if(E)this.Jj.H([].concat(
this.T8.M[2],this.Jj.M.slice(1,4)));else this.Jj.H([].concat(0,this.Jj.M.slice(1
,4)));this.Am();},OX:function(E){if(this.AsL===E)return;this.AsL=E;this.T9.Z(E);
if(E)this.GX.H(A.abN(this.GX.M,this.T9.M[0]));else this.GX.H(A.abN(this.GX.M,this.
M[2]));this.Am();},Bnk:function(E){if(this.Arf===E)return;this.Arf=E;this.PF.Cw(
E);this.Am();},ATw:function(E){if(this.Arg===E)return;this.Arg=E;this.IS.Cw(E);this.
Am();},A_C:function(E){if(this.Arh===E)return;this.Arh=E;this.Li.Cw(E);this.Am();
},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.AL._Init.call(this.NR={I:this},0);C.CG._Init.call(this.Jj={I:this
},0);C.CG._Init.call(this.JE={I:this},0);C.CG._Init.call(this.GX={I:this},0);A.acg.
Ap._Init.call(this.PF={I:this},0);A.acg.Ap._Init.call(this.IS={I:this},0);A.acg.
Ap._Init.call(this.Li={I:this},0);A.acg.Ap._Init.call(this.T8={I:this},0);A.acg.
Ap._Init.call(this.T9={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.
A1(0x3F);this.Background.H(BD);this.Background.L(A.jb.Aed);this.NR.H(Xj);this.NR.
L(A.jb.CU);this.NR.Z(false);this.Jj.A1(0x14);this.Jj.H(Tg);this.Jj.A6(0x12);this.
JE.A1(0x14);this.JE.H(Xk);this.JE.A6(0x12);this.GX.H(Aah);this.PF.H(Xl);this.IS.
H(Xm);this.Li.H(Th);this.Li.Z(false);this.T8.H(Ti);this.T8.Z(false);this.T9.H(Tj
);this.T9.Z(false);this.J(this.Background,0);this.J(this.NR,0);this.J(this.Jj,0);
this.J(this.JE,0);this.J(this.GX,0);this.J(this.PF,0);this.J(this.IS,0);this.J(this.
Li,0);this.J(this.T8,0);this.J(this.T9,0);this.Jj.S(A.aaL(A.fl.Ak));this.Jj.AY(A.
aaL(A.fl.Bh));this.Jj.Q9([this,this.A3_]);this.JE.S(A.aaL(A.fl.Ak));this.JE.AY(A.
aaL(A.fl.Bh));this.JE.Q9([this,this.A3_]);this.GX.S(A.aaL(A.fl.Ak));this.GX.AY(A.
aaL(A.fl.Bh));this.GX.Q9([this,this.A3_]);this.V7=A.aaL(A.fl.Ak);this.V8=A.aaL(A.
fl.Ak);this.V9=A.aaL(A.fl.Ak);this.PF.Ax(null);this.IS.Ax(null);this.Li.Ax(null);
this.T8.Ax(A.aaL(A.ach.AMZ));this.T9.Ax(A.aaL(A.ach.Aju));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.Background._Done();this.NR._Done();this.
Jj._Done();this.JE._Done();this.GX._Done();this.PF._Done();this.IS._Done();this.
Li._Done();this.T8._Done();this.T9._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();this.NR._ReInit();this.Jj.
_ReInit();this.JE._ReInit();this.GX._ReInit();this.PF._ReInit();this.IS._ReInit(
);this.Li._ReInit();this.T8._ReInit();this.T9._ReInit();this.Jj.S(A.aaL(A.fl.Ak)
);this.Jj.AY(A.aaL(A.fl.Bh));this.JE.S(A.aaL(A.fl.Ak));this.JE.AY(A.aaL(A.fl.Bh)
);this.GX.S(A.aaL(A.fl.Ak));this.GX.AY(A.aaL(A.fl.Bh));this.AFs(A.aaL(A.fl.Ak));
this.ArX(A.aaL(A.fl.Ak));this.AnE(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.V7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
V8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V9)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ag7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NR)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JE).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.PF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Footer"
};C.ADA={Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper),B.ArH,B.AkF],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper)
,B.A9z,B.AFZ],0);A.pe([this,this.Nz],this);},DX:function(G){if(!!A._GetAutoObject(
A.Device.Helper).AhI)this.Ab$(A._GetAutoObject(A.Device.Helper).AhI.AO5());else this.
Ab$(-1);if(!!A._GetAutoObject(A.Device.Helper).UI)this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).Ak8(A._GetAutoObject(A.Device.Helper).UI.Id));else this.OnSetAnimalId(-
1);},_Init:function(aArg){C.Am4._Init.call(this,aArg);this.__proto__=C.ADA;this.
Init(aArg);},_className:"Application::HeaderScannedIds"};C.AG$={Ey:null,Ei:null,
FY:null,X8:null,TN:null,IL:null,IM:null,Init:function(aArg){},WV:function(G){var
B;C.DR.WV.call(this,G);var AK1=this.AzF(A._GetAutoObject(A.Device.Helper).UO.Get(
A._GetAutoObject(A.Device.Helper).W.AnimalType));var ALQ=this.AzF(A._GetAutoObject(
A.Device.Helper).UP.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var BAn=
this.AzF(A._GetAutoObject(A.Device.Device).AcL);this.Ey.H(A.abP(this.Ey.M,0));this.
Ey.H([].concat(this.Ey.M.slice(0,3),((B=this.M)[3]-B[1])-AK1));this.IM.H(A.abO(this.
IM.M,this.Ey.M[3]-((((B=this.IM.M)[3]-B[1])/2)|0)));this.Ei.H(A.abP(this.Ei.M,this.
Ey.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-B[1])-ALQ));this.
IL.H(A.abO(this.IL.M,(this.Ei.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))+2));this.FY.
H(A.abP(this.FY.M,this.Ei.M[3]));this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.
M)[3]-B[1])-BAn));this.TN.H(A.abO(this.TN.M,this.FY.M[3]-((((B=this.TN.M)[3]-B[1
])/2)|0)));this.X8.H(A.abP(this.X8.M,this.FY.M[3]));this.X8.H([].concat(this.X8.
M.slice(0,3),(B=this.M)[3]-B[1]));},AJY:function(AoW){return A._GetAutoObject(A.
Device.Converter).Ak3(AoW);},AKv:function(){return A._GetAutoObject(A.acj.Temperature
).AlQ();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.acg.AL._Init.call(this.
Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.acg.AL._Init.call(this.
FY={I:this},0);A.acg.AL._Init.call(this.X8={I:this},0);A.acg.AL._Init.call(this.
TN={I:this},0);A.acg.AL._Init.call(this.IL={I:this},0);A.acg.AL._Init.call(this.
IM={I:this},0);this.__proto__=C.AG$;this.Ey.A1(0xD);this.Ey.H(Aai);this.Ey.L(A.jb.
Gk);this.Ei.A1(0xD);this.Ei.H(Tk);this.Ei.L(A.jb.Ib);this.FY.A1(0xD);this.FY.H(Aaj
);this.FY.L(A.jb.E1);this.X8.A1(0xD);this.X8.H(AfF);this.X8.L(A.jb.Afy);this.TN.
A1(0xD);this.TN.H(Aak);this.TN.AwD(A.jb.Afy);this.TN.AwE(A.jb.Afy);this.TN.AwG(A.
jb.E1);this.TN.AwF(A.jb.E1);this.IL.A1(0xD);this.IL.H(Xn);this.IL.AwD(A.jb.E1);this.
IL.AwE(A.jb.E1);this.IL.AwG(A.jb.Ib);this.IL.AwF(A.jb.Ib);this.IM.A1(0xD);this.IM.
H(Aal);this.IM.AwD(A.jb.Ib);this.IM.AwE(A.jb.Ib);this.IM.AwG(A.jb.Gk);this.IM.AwF(
A.jb.Gk);this.J(this.Ey,-1);this.J(this.Ei,-1);this.J(this.FY,-1);this.J(this.X8
,-1);this.J(this.TN,-1);this.J(this.IL,-1);this.J(this.IM,-1);this.Init(aArg);},
_Done:function(){this.__proto__=C.DR;this.Ey._Done();this.Ei._Done();this.FY._Done(
);this.X8._Done();this.TN._Done();this.IL._Done();this.IM._Done();C.DR._Done.call(
this);},_ReInit:function(){C.DR._ReInit.call(this);this.Ey._ReInit();this.Ei._ReInit(
);this.FY._ReInit();this.X8._ReInit();this.TN._ReInit();this.IL._ReInit();this.IM.
_ReInit();},_Mark:function(D){var B;C.DR._Mark.call(this,D);if((B=this.Ey)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.TN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureGraph"
};C.Cp={Avv:null,AmY:null,AQw:null,Are:null,AqY:null,AvO:null,AR:null,Agy:null,Amv:
null,N:null,Bo:null,QV:null,AxV:A.jV,AVc:false,AGZ:false,Apm:false,Axr:255,LN:false
,KM:false,Qy:false,Ai:function(Ae){var B;C.O4.Ai.call(this,Ae);var Hg=((Ae&0x10)===
0x10);var Fv=((Ae&0x20)===0x20);var IG=((Ae&0x40)===0x40);var GE=this.Bo.Bw;var FT=
A.jb.CK;var GZ=A.jb.Text;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.Text;}if(!Hg){this.Background.
L(A.jb.CU);this.V.L(A.jb.CK);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else if(IG){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.
Background.L(A.jb.Am8);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ
);}this.LN=Hg;this.KM=Fv;this.Qy=GE;this.Apm=IG;},Qx:function(G){this.Am();A.pe(
this.AR,this);},Bxi:function(s){this.Qx(s);},H1:function(G){if(this.QV.Acp)return;
this.Am();if(this.Bo.Bw){A.pe(this.AR,this);this.Bo.As(false);}this.Bo.As(true);
},Alo:function(s){this.H1(s);},Ab8:function(E){if(A.aa0(this.Agy,E))return;this.
Agy=E;},A_7:function(E){if(this.AxV===E)return;this.AxV=E;},ZA:function(E){if(this.
Avv===E)return;this.Avv=E;},ZB:function(E){if(this.AmY===E)return;this.AmY=E;},A_N:
function(E){if(this.Axr===E)return;this.Axr=E;},Gt:function(E){if(A.aaZ(this.N,E
))return;this.N=E;},T:function(E){if(this.DL===E)return;this.DL=E;this.ALy();},A3H:
function(G){},BG_:function(s){this.A3H(s);},AkA:function(E){if(this.Are===E)return;
this.Are=E;},L5:function(E){if(A.aa0(this.Amv,E))return;this.Amv=E;},Bnd:function(
E){if(this.AqY===E)return;this.AqY=E;},L8:function(E){if(this.AvO===E)return;this.
AvO=E;},ZF:function(E){if(this.AGZ===E)return;this.AGZ=E;this.ALy();},ALy:function(
){var B;var M8=this.DL;if(this.AGZ)M8=M8+A.aaR(A.acf.Colon);if(this.AVc)M8=M8+Xo;
this.V.R(M8);},ATU:function(E){if(this.AVc===E)return;this.AVc=E;this.ALy();},_Init:
function(aArg){C.O4._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bo={I:this
},0);A.Core.BF._Init.call(this.QV={I:this},0);this.__proto__=C.Cp;this.Bo.PZ(0);
this.Bo.WQ(50);this.Bo.As(false);this.QV.Filter=1;this.Bo.MK=[this,this.Bxi];this.
QV.BG=[this,this.Alo];this.Avv=A.aaL(A.fl.Ak);this.AmY=A.aaL(A.fl.Ak);this.AQw=A.
aaL(A.ach.E2);this.AqY=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.O4;this.
Bo._Done();this.QV._Done();C.O4._Done.call(this);},_ReInit:function(){C.O4._ReInit.
call(this);this.Bo._ReInit();this.QV._ReInit();this.ZA(A.aaL(A.fl.Ak));this.ZB(A.
aaL(A.fl.Ak));this.Bnd(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.O4._Mark.call(
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
);},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},AcY:function(
s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AcY],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcY],E,0);if(!!E)A.pe([this,
this.AcY],this);},BfE:function(G){this.FI=7;this.Am();if(this.Bo.Bw){A.pe([this,
this.Ay7],this);this.Bo.As(false);}this.Bo.As(true);},Ki:function(G){this.FI=0;}
,Ay7:function(s){this.Ki(s);},Kd:function(G){this.FI=0;},Ay6:function(s){this.Kd(
s);},Bx:function(E){if(E<this.Gr)E=this.Gr;if(E>this.Ga)E=this.Ga;if(this.AM===E
)return;this.AM=E;this.Am();},BbG:function(Aq){this.Bx(Aq);},Gb:function(E){if(this.
Gr===E)return;this.Gr=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=
E;this.Am();},Ur:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(
this,aArg);A.Core.BF._Init.call(this.Anh={I:this},0);A.Core.BF._Init.call(this.Anj={
I:this},0);A.acg.Ap._Init.call(this.Hy={I:this},0);A.acg.Ap._Init.call(this.H9={
I:this},0);this.__proto__=C.Ds;this.H(K3);this.Anh.Filter=6;this.Anj.Filter=7;this.
Background.H(K3);this.V.H(AcR);this.V.R(LB);this.Hy.H(AhY);this.H9.H(Aoi);this.H9.
Cw(1);this.J(this.Hy,0);this.J(this.H9,0);this.Anh.BG=[this,this.BfD];this.Anh.D1=[
this,this.BfD];this.Anj.BG=[this,this.BfE];this.Anj.D1=[this,this.BfE];this.V.S(
A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(null);this.Hy.Ax(A.aaL(A.ach.
Ajv));this.H9.Ax(A.aaL(A.ach.Ajv));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Anh._Done();this.Anj._Done();this.Hy._Done();this.H9._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Anh._ReInit();this.
Anj._ReInit();this.Hy._ReInit();this.H9._ReInit();this.V.S(A.aaL(A.fl.Af));this.
V.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.
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
C.CG._Init.call(this.BU={I:this},0);this.__proto__=C.Iv;this.H(K3);this.BU.H(Oj);
this.J(this.BU,-1);this.BU.S(A.aaL(A.fl.Af));this.BU.AY(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Ds;this.BU._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.BU._ReInit();this.BU.S(A.aaL(
A.fl.Af));this.BU.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.AxM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BX={AC:
null,DB:null,HP:null,CQ:function(){this.Ai(this.U);},Init:function(aArg){},Bl:function(
aSize){var B;C.Ds.Bl.call(this,aSize);this.DB.H([this.Hy.M[2]-10,this.Hy.M[1],this.
H9.M[0]+10,this.Hy.M[3]]);this.DB.AFC((B=this.DB.M)[2]-B[0]);this.DB.HK(this.DB.
Gu,true,null,null);},Ai:function(Ae){var B;C.Ds.Ai.call(this,Ae);var Fv=((Ae&0x20
)===0x20);var GE=this.Bo.Bw;this.DB.AbN(0,this.DB.A0-1);this.Hy.Z(Fv||GE);this.H9.
Z(Fv||GE);},C5:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.
Q,F[1].call(F[0]))));},Ki:function(G){var F;var BP=this.AM;C.Ds.Ki.call(this,G);
this.Bx(this.AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Kd:function(G){var F;var BP=this.AM;
C.Ds.Kd.call(this,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){
var QD=0;if(E<this.Gr){E=this.Ga;QD=-this.DB.Wm*this.DB.A0;}if(E>this.Ga){E=this.
Gr;QD=this.DB.Wm;}C.Ds.Bx.call(this,E);if(!!QD)this.DB.Gc(QD);this.DB.GU(this.AM
);if(this.DB.Bkk())this.DB.BpR(false,false);this.DB.HK(this.DB.Gu,true,this.HP,null
);},Ho:function(G){var B;var Gh=this.DB.G8;var CA=(C.CG.isPrototypeOf(B=this.DB.
Cj)?B:null);if(!CA)return;CA.S(this.V.B7);CA.Axa(19);CA.AY(this.V.AmX);CA.Bn8(19
);CA.Cm(this.V.AqX);CA.Bn9(19);CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));
else CA.R(Xp);CA.H(A.abK(CA.M,[this.DB.Wm,(B=this.DB.M)[3]-B[1]]));},BwV:function(
s){this.Ho(s);},CL:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.
Gb(0);this.EV(this.AC.Du()-1);this.DB.JD(this.AC.Du());this.DB.AbN(0,this.DB.A0-
1);}},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Core.DB._Init.call(this.
DB={I:this},0);A.acl.Gn._Init.call(this.HP={I:this},0);this.__proto__=C.BX;this.
H(K3);this.DB.N8(C.CG);this.HP.WS(23);this.HP.HQ(1);this.HP.Fq(200);this.J(this.
DB,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.DB.Ho=[this,this.BwV
];this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.DB._Done();this.HP.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
DB._ReInit();this.HP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak)
);this.CQ();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.AC)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.DB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"
};C.SY={FN:null,OO:null,Dm:null,Av:null,JB:null,HO:null,Pz:null,V4:null,Q4:null,
Yu:null,Qa:null,Gy:null,Gx:null,FZ:0,A_:0,Asu:false,Bkg:false,Init:function(aArg
){},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hy.Z(false);this.H9.Z(false);var At4=
A.jV;if(!!this.Dm){this.Pz.R(this.Av.Format(Aam));this.Q4.R(this.Av.Format(AfG));
this.Qa.R(this.Av.Format(AhZ));}if(this.A_===1){this.HO.Z(true);this.HO.H(this.Pz.
M);this.HO.L(this.V.AQ);this.Pz.L(this.Background.AQ);this.Q4.L(this.V.AQ);this.
Qa.L(this.V.AQ);At4=A.aaR(A.acf.A6n);}else if(this.A_===2){this.HO.Z(true);this.
HO.H(this.Q4.M);this.HO.L(this.V.AQ);this.Pz.L(this.V.AQ);this.Q4.L(this.Background.
AQ);this.Qa.L(this.V.AQ);At4=A.aaR(A.acf.Hm);}else if(this.A_===3){this.HO.Z(true
);this.HO.H(this.Qa.M);this.HO.L(this.V.AQ);this.Pz.L(this.V.AQ);this.Q4.L(this.
V.AQ);this.Qa.L(this.Background.AQ);At4=A.aaR(A.acf.Year);}else{this.HO.Z(false);
this.Pz.L(this.V.AQ);this.Yu.L(this.V.AQ);this.Q4.L(this.V.AQ);this.V4.L(this.V.
AQ);this.Qa.L(this.V.AQ);}if(At4.length>0){if(this.AGZ)this.V.R((((this.DL+AcS)+
At4)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else this.V.R(((this.DL+AcS)+
At4)+String.fromCharCode(0x29));}else this.ALy();},Qx:function(G){if(this.FI===1
)A.pe([this,this.Vk],this);else if(this.FI===4)A.pe([this,this.AiI],this);else if(
this.FI===5)A.pe([this,this.Aiu],this);C.Ds.Qx.call(this,G);},Ki:function(G){switch(
this.A_){case 0:C.Ds.Ki.call(this,G);break;case 3:break;default:this.AdA(this);}
},Kd:function(G){switch(this.A_){case 0:C.Ds.Kd.call(this,G);break;default:this.
Ait(this);}},AdC:function(G){var F;if(!!this.Dm)this.Uw((F=this.Dm,F[1].call(F[0
])));},Acc:function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdC
],this.Dm,0);this.Dm=E;if(!!E)A.zX([this,this.AdC],E,0);if(!!E)A.pe([this,this.AdC
],this);},Uw:function(E){if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.
FZ);this.Am();},AdA:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.
Vk],this);this.Bo.As(false);}this.Bo.As(true);},Bcd:function(s){this.AdA(s);},Vk:
function(G){this.Ex(this.A_+1);},Al9:function(G){this.FI=4;this.Am();if(this.Bo.
Bw){A.pe([this,this.AiI],this);this.Bo.As(false);}this.Bo.As(true);},Al8:function(
G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Aiu],this);this.Bo.As(false
);}this.Bo.As(true);},AiI:function(G){var B;var F;var BP=this.FZ;switch(this.A_){
case 1:{if(this.Asu){var ABy=A._NewObject(A.Core.An9,0);ABy.Kq=1;if(this.Av.J(ABy
).JY()>A._GetAutoObject(A.Device.Helper).Dv())return;}if(this.Av.GL<this.Av.Zu()
)this.Av.Lu(this.Av.GL+1);}break;case 2:{if(this.Asu){var ABy=A._NewObject(A.Core.
An9,0);ABy.Kq=this.Av.Zu();if(this.Av.J(ABy).JY()>A._GetAutoObject(A.Device.Helper
).Dv())return;}this.Av.UA(this.Av.Hm+1);if(this.Av.Zu()<this.Av.GL)this.Av.Lu(this.
Av.Zu());}break;case 3:{if(this.Asu){var A15=A._NewObject(A.Core.Bs,0);A15.Initialize(
this.Av.JY());A15.Year+=1;if(A15.JY()>A._GetAutoObject(A.Device.Helper).Dv())return;
}if(this.Av.Year>=2100)return;this.Av.Year=this.Av.Year+1;}break;default:;}this.
Uw(((B=(this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.
Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}},Aiu:function(G){var B;var F;var BP=
this.FZ;if(this.A_===1)this.Av.Lu(this.Av.GL-1);if(this.A_===2){this.Av.UA(this.
Av.Hm-1);if(this.Av.Zu()<this.Av.GL)this.Av.Lu(this.Av.Zu());}if(this.A_===3){if(
this.Av.Year<=2000)return;this.Av.Year=this.Av.Year-1;}this.Uw(((B=(this.Av.JY()|
0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],
this.FZ));A.abo(this.Dm,0);}},DK:function(G){var F;if(!this.N)return;switch(this.
A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[
0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[
0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeE));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vk];}break;case 2:{(F=this.N,F[
1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeE));(F=this.N,F[1].call(F[0])).
CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vk];}break;case 3:{(F=this.N,F[
1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N
,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkS((F=this.N,F[1].call(F[
0])));}},AFX:function(E){if(this.Asu===E)return;this.Asu=E;},FW:function(G){this.
Ex(1);},Hf:function(G){this.Ex(0);},Ex:function(EO){var F;var AAF=this.A_;if(!this.
A_){this.FN.AjC((F=this.N,F[1].call(F[0])));if((EO===1)&&!this.FZ){var BP=this.FZ;
this.Uw(A._GetAutoObject(A.Device.Helper).Dv());if(this.FZ!==BP){if(!!this.Dm)(F=
this.Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}}}this.A_=EO;this.Bkg=true;if((
this.A_<0)||(this.A_>3))this.A_=0;this.DK(this);this.Gy.Bw=!!this.A_;this.Gx.Bw=
!!this.A_;if((!!AAF&&!this.A_)&&!!this.OO)A.pe(this.OO,this);this.Am();},Ait:function(
G){if(this.A_>1)this.Ex(this.A_-1);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Core.Bs._Init.call(this.Av={I:this},0);A.Core.BF._Init.call(this.JB={I:this}
,0);A.acg.AL._Init.call(this.HO={I:this},0);A.acg.Text._Init.call(this.Pz={I:this
},0);A.acg.Text._Init.call(this.V4={I:this},0);A.acg.Text._Init.call(this.Q4={I:
this},0);A.acg.Text._Init.call(this.Yu={I:this},0);A.acg.Text._Init.call(this.Qa={
I:this},0);A.Core.BF._Init.call(this.Gy={I:this},0);A.Core.BF._Init.call(this.Gx={
I:this},0);this.__proto__=C.SY;this.H(U5);this.V.R(Aoj);this.Hy.Z(false);this.H9.
Z(false);this.JB.Filter=1;this.HO.H(Aok);this.HO.L(0x55FFFFFF);this.Pz.H(Aol);this.
Pz.Je(true);this.Pz.A6(0x14);this.V4.H(Aom);this.V4.Je(true);this.V4.A6(0x14);this.
V4.R(Ald);this.Q4.H(As5);this.Q4.Je(true);this.Yu.H(Ayb);this.Yu.Je(true);this.Yu.
R(Ald);this.Qa.H(Ayc);this.Qa.Je(true);this.Qa.A6(0x11);this.Gy.Filter=4;this.Gy.
Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HO,0);this.J(this.Pz,0);this.
J(this.V4,0);this.J(this.Q4,0);this.J(this.Yu,0);this.J(this.Qa,0);this.JB.BG=[this
,this.Bcd];this.Pz.S(A.aaL(A.fl.EK));this.V4.S(A.aaL(A.fl.EK));this.Q4.S(A.aaL(A.
fl.EK));this.Yu.S(A.aaL(A.fl.EK));this.Qa.S(A.aaL(A.fl.EK));this.Gy.BG=[this,this.
Al9];this.Gy.D1=[this,this.AiI];this.Gx.BG=[this,this.Al8];this.Gx.D1=[this,this.
Aiu];this.FN=A._NewObject(C.Aex,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ds;this.Av._Done();this.JB._Done();this.HO._Done();this.Pz._Done();this.V4._Done(
);this.Q4._Done();this.Yu._Done();this.Qa._Done();this.Gy._Done();this.Gx._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit(
);this.JB._ReInit();this.HO._ReInit();this.Pz._ReInit();this.V4._ReInit();this.Q4.
_ReInit();this.Yu._ReInit();this.Qa._ReInit();this.Gy._ReInit();this.Gx._ReInit(
);this.Pz.S(A.aaL(A.fl.EK));this.V4.S(A.aaL(A.fl.EK));this.Q4.S(A.aaL(A.fl.EK));
this.Yu.S(A.aaL(A.fl.EK));this.Qa.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.
Ds._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Q4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OR={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bex],[B=A._GetAutoObject(A.Device.Device),B.A9h,B.BbN],0);
A.pe([this,this.Bex],this);},Du:function(){return 27;},Gm:function(aIndex){return this.
LanguageToString.BT(this.C7(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(
A.Device.Device).AnH(E);},Bex:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cn._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OR;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,5);this.BI.
Set(3,3);this.BI.Set(4,8);this.BI.Set(5,9);this.BI.Set(6,7);this.BI.Set(7,6);this.
BI.Set(8,10);this.BI.Set(9,2);this.BI.Set(10,11);this.BI.Set(11,12);this.BI.Set(
12,13);this.BI.Set(13,14);this.BI.Set(14,15);this.BI.Set(15,16);this.BI.Set(16,18
);this.BI.Set(17,17);this.BI.Set(18,4);this.BI.Set(19,20);this.BI.Set(20,21);this.
BI.Set(21,23);this.BI.Set(22,24);this.BI.Set(23,22);this.BI.Set(24,25);this.BI.Set(
25,26);this.BI.Set(26,27);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;
this.LanguageToString._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.
call(this);this.LanguageToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.
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
AcH:null,KE:null,AP:null,A$:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.
Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.H(A.abN(this.
V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.KE.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A$.H([this.Background.
M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.AjA.H([this.Background.M[2],0,aSize[
0],aSize[1]]);this.AcH.H(this.AjA.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
KE.L(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;this.
Ht=Ad;if(!!this.AX){var AlH=this.AX.Hw(Ad,6);var Ap1=this.AX.CC(Ad,7);var Aui=this.
AX.Ja(Ad,9);this.T(A._GetAutoObject(A.acj.KR).AC$(AlH));this.KE.R(A._GetAutoObject(
A.acj.KR).A64(AlH));this.AcH.R(A._GetAutoObject(A.Device.Converter).Ak3(Ap1));this.
AcH.L(A._GetAutoObject(A.acj.Assessment).XH(Aui));this.AjA.L(A._GetAutoObject(A.
acj.Assessment).Qu(Aui));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,
aArg);A.acg.AL._Init.call(this.AjA={I:this},0);A.acg.Text._Init.call(this.AcH={I:
this},0);A.acg.Text._Init.call(this.KE={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.AVw;this.V.H(
Pb);this.AcH.L(A.jb.Text);this.KE.R(Rq);this.KE.L(A.jb.Text);this.AP.L(A.jb.Bc);
this.A$.H(Ayd);this.A$.L(A.jb.Bc);this.J(this.AjA,0);this.J(this.AcH,0);this.J(this.
KE,0);this.J(this.AP,0);this.J(this.A$,0);this.AcH.S(A.aaL(A.fl.Af));this.KE.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AjA._Done(
);this.AcH._Done();this.KE._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AjA._ReInit();this.AcH._ReInit(
);this.KE._ReInit();this.AP._ReInit();this.A$._ReInit();this.AcH.S(A.aaL(A.fl.Af
));this.KE.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((
B=this.AjA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureListItem"
};C.Gd={AX:null,AR:null,Cr:null,AD:null,Afp:null,NU:null,KS:A.jV,Ln:null,AVU:true
,Ho:function(G){var B;var Gh=this.AD.G8;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cj)?
B:null);if(!Aa)return;Aa.Zy(this.AX);Aa.Ch(Gh);Aa.AR=this.AR;Aa.H(A.abK(Aa.M,[(B=
this.AD.M)[2]-B[0],this.AD.GO]));},N8:function(E){if(E===this.Ln)return;this.Ln=
E;this.AD.N8(E);},Zy:function(E){if(this.AX===E)return;if(!!this.AX)A.z9([this,this.
Ch],this.AX,0);this.AX=E;if(!!E)A.zV([this,this.Ch],E,0);A.pe([this,this.Ch],this
);},Ch:function(G){if(this.AVU===false)return;if(!!this.AX){this.AD.JD(this.AX.B8(
));this.AD.AbN(0,this.AD.A0-1);}else this.AD.JD(0);if((this.AD.A0>0)&&(this.FO()<
0))this.GU(0);if(this.FO()>=this.AD.A0){this.GU(0);this.AD.Gc(0);}if(this.AD.A0<=
0){this.NU.Z(true);this.GU(-1);}else{this.NU.Z(false);this.ABY(null,null);}},Fj:
function(G){var B;this.Afp.MH(this.AD.GO*this.AD.A0);this.Afp.MJ((B=this.AD.M)[3
]-B[1]);this.Afp.MI(-this.AD.Br);},DF:function(G){if(this.AD.A0>0){switch(this.Cr.
CP){case 4:if(this.FO()>0)this.GU(this.FO()-1);break;case 5:if(this.FO()<(this.AD.
A0-1))this.GU(this.FO()+1);break;default:this.Cr.Mx=true;}this.AD.HK(this.FO(),true
,null,null);}else if((this.Cr.CP!==4)&&(this.Cr.CP!==5))this.Cr.Mx=true;},ZC:function(
E){if(A.aa0(this.AR,E))return;this.AR=E;this.AD.AbN(0,this.AD.A0);},GU:function(
E){this.AD.GU(E);this.AD.HK(E,true,null,null);},FO:function(){return this.AD.Gu;
},Dl:function(E){if(this.KS===E)return;this.KS=E;this.NU.R(E);},ABY:function(Ac1
,E9){this.AD.ABY(Ac1,E9);},AT_:function(E){if(this.AVU===E)return;this.AVU=E;if(
E)A.pe([this,this.Ch],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);A.Core.BF._Init.call(this.Cr={I:this},0);A.Core.CM._Init.call(this.AD={I:this}
,0);C.Ay._Init.call(this.Afp={I:this},0);A.acg.Text._Init.call(this.NU={I:this},
0);this.__proto__=C.Gd;this.H(U6);this.Ln=C.Ba;this.Cr.Filter=147;this.AD.A1(0x3F
);this.AD.H(U6);this.AD.Ae_(40);this.Afp.A1(0x3A);this.Afp.H(As6);this.NU.A1(0x3F
);this.NU.H(Aye);this.NU.Hp(10);this.NU.Lv(true);this.NU.A6(0xA);this.NU.L(A.jb.
Text);this.J(this.AD,0);this.J(this.Afp,0);this.J(this.NU,0);this.Cr.BG=[this,this.
DF];this.Cr.D1=[this,this.DF];this.AD.Em=[this,this.Fj];this.AD.Ho=[this,this.Ho
];this.NU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done(
);this.AD._Done();this.Afp._Done();this.NU._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Cr._ReInit();this.AD._ReInit();this.
Afp._ReInit();this.NU._ReInit();this.NU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afp
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NU)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::VertScrollList"};C.Ba={AX:null,Ht:-1,CQ:function(){this.Ch(this.Ht
);},Ai:function(Ae){var B;C.Cp.Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.
Ht%2)===1)this.Background.L(A.jb.CK);else this.Background.L(A.jb.CU);}},Zy:function(
E){if(this.AX===E)return;this.AX=E;},Ch:function(Ad){A.ab5("%s",Ayf);},_Init:function(
aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Cp._ReInit.
call(this);this.CQ();},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.
AX)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GJ={
Bg:null,FE:null,DQ:null,Fm:null,Wa:null,Ko:null,KS:A.jV,AUw:0,AUx:0,ARS:Ale,Afq:
false,CQ:function(){if(A._GetAutoObject(A.Device.Device).OverlayMenu===6){A._GetAutoObject(
A.Device.Device).Dw(0);A.pe([this,this.Bbr],this);}},Init:function(aArg){var B;A.
zX([this,this.Bfb],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI1],0);A.zV([this
,this.Bxg],A._GetAutoObject(A.Device.Device).An,0);A.zV([this,this.Z9],A._GetAutoObject(
A.Device.Device).An,0);A.zX([this,this.BBJ],[B=A._GetAutoObject(A.Device.Helper)
,B.U_,B.Vb],0);A.pe([this,this.Z9],this);A.pe([this,this.A0Z],this);A.pe([this,this.
AxH],this);},WM:function(G){this.Agz();var O;for(O=this.Ko.Du()-1;O>=0;O=O-1)switch(
this.Ko.C7(O)){case 0:this.AdU(A.aaR(A.acf.A5y),[this,this.Bow],0);break;case 14:
this.AdU(A.aaR(A.acf.BhL),[this,this.Box],14);break;case 1:this.AdU(A.aaR(A.acf.
Temperature),[this,this.AUb],1);break;case 2:this.AdU(A.aaR(A.acf.Rating),[this,
this.AUa],2);break;case 3:this.AdU(A.aaR(A.acf.Afz),[this,this.AUc],3);break;default:
A.ab5("%s",Ayg);}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.
BiJ));A._GetAutoObject(A.Device.Device).Dw(6);},Bbr:function(s){this.WM(s);},DF:
function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var Af3=this.Ko.DZ(A._GetAutoObject(
A.Device.Device).Ko);if(this.Afq)return;switch(D5.CP){case 6:{Af3=Af3-1;if(Af3<0
)Af3=this.Ko.Du()-1;A._GetAutoObject(A.Device.Device).Zw(this.Ko.C7(Af3));}break;
case 7:{Af3=Af3+1;if(Af3>=this.Ko.Du())Af3=0;A._GetAutoObject(A.Device.Device).Zw(
this.Ko.C7(Af3));}break;default:D5.Mx=true;}},CD:function(G){if(this.DQ.AAf()){this.
DQ.Ac$();if(this.DQ.AAf()===false)this.Bg.AT_(true);return;}else if(this.Afq)this.
ABg(this);if(!!this.Bg)this.Bg.AT_(true);},E4:function(G){if(!!this.Bg)this.Bg.AT_(
false);},AxH:function(G){var B;if(!!this.Bg)this.HR(this.Bg);this.Bg=A._NewObject(
C.AML,0);this.Bg.H(this.ARS);this.Bg.Zy(A._GetAutoObject(A.Device.Device).An);this.
Bg.ZC([this,this.Aaq]);if(!!this.FE)this.Bg.A96([B=this.FE,B.A9B,B.A_0]);this.A4J(
this);this.J(this.Bg,0);if(this.Afq===false)this.Bb(this.Bg);this.Bfb(this);this.
A$V(this);},A93:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.Dr(this.
A7f());this.Ek.AR=[this,this.Aaq];this.ALD(this);this.Ek.As(true);this.Bb(this.Ek
);this.Afq=true;},Blc:function(G){var B;A._GetAutoObject(A.Device.Device).Dw(0);
if(!this.Bg)return;var Aa=(C.ACn.isPrototypeOf(B=this.Bg.AD.BjV(this.Bg.AD.Gu))?
B:null);if(!!Aa)A._GetAutoObject(A.Device.Helper).GS(Aa.Ht);else A._GetAutoObject(
A.Device.Helper).W.E7();this.Agl();},Agi:function(G){var F;if(!this.Fm)this.A6B(
this);else switch((F=this.Fm,F[1].call(F[0]))){case 19:break;case 0:this.A6B(this
);break;case 1:this.BiK(this);break;case 9:this.A6C(this);break;case 4:this.BiM(
this);break;case 6:this.BiN(this);break;case 8:this.BiP(this);break;case 2:this.
BiQ(this);break;case 3:this.BiR(this);break;case 7:this.BiT(this);break;case 5:this.
BiU(this);break;case 10:this.BiW(this);break;case 11:this.BiL(this);break;case 12:
this.BiO(this);break;case 13:this.A6H(this);break;case 14:this.A6D(this);break;case
18:this.A6E(this);break;case 15:this.A6F(this);break;case 16:this.BiS(this);break;
case 17:this.A6G(this);break;default:A.ab5("%s%e",AfH,(F=this.Fm,F[1].call(F[0])
));}},Aaq:function(s){this.Agi(s);},Bmp:function(G){this.Dr(C.Kv);this.Ek.AR=null;
this.Afq=false;this.Z9(this);this.Bgx();this.N.T8.CZ(255);this.N.T9.CZ(255);this.
Bb(this.Bg);this.Ek.As(false);},Ant:function(G){A._GetAutoObject(C.A7).FB();},Dl:
function(E){if(this.KS===E)return;this.KS=E;this.A4J(this);},AbB:function(){switch(
A._GetAutoObject(A.Device.Device).Ko){case 14:return C.ANk;case 2:return C.ANm;case
1:return C.ANn;case 3:return C.ANp;case 0:case 8:case 9:case 10:case 4:case 5:case
6:return C.AqC;case 7:return C.ACm;case 12:return C.ACp;case 11:return C.ACl;case
13:return C.ACo;default:throw new Error(Aon);}},AbC:function(){switch(A._GetAutoObject(
A.Device.Device).Ko){case 14:return C.APM;case 2:return C.ADH;case 1:return C.APO;
case 3:return C.APQ;case 4:return C.ADD;case 0:case 8:case 9:case 10:case 5:case
6:return C.Aq9;case 7:return C.ADF;case 12:return C.ADG;case 11:return C.ADE;case
13:return C.ADI;default:throw new Error(Aon);}},Bfb:function(G){this.ATN(A._GetAutoObject(
A.Device.Device).Ko);if(!!this.Bg){this.Bg.N8(this.AbB());this.BpH(this);}},BpH:
function(G){var B;if(!!this.FE)this.HR(this.FE);this.FE=(C.De.isPrototypeOf(B=A.
_NewObject(this.AbC(),0))?B:null);this.FE.H(I1);if(!!this.Bg)this.Bg.A96([B=this.
FE,B.A9B,B.A_0]);this.J(this.FE,0);},Bla:function(G){this.Ra(this);A._GetAutoObject(
A.Device.Device).Dw(0);},AUb:function(G){A._GetAutoObject(A.Device.Device).Zw(1);
},AUa:function(G){A._GetAutoObject(A.Device.Device).Zw(2);},AUc:function(G){A._GetAutoObject(
A.Device.Device).Zw(3);},Ra:function(G){A._GetAutoObject(A.Device.Device).An.Bk(
A._GetAutoObject(A.Device.Helper).MC());},A0Z:function(s){this.Ra(s);},HS:function(
G){if(this.Afq){this.ALD(this);return;}this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(
A.ach.ADZ));this.N.C4(A.aaL(A.ach.Options));this.N.CF=[this,this.Ant];this.N.Ce=[
this,this.A93];this.N.Ca=[this,this.Bbr];this.N.Hz(A.jV);this.N.E6(A.jV);this.N.
CS(A.jV);if(!A._GetAutoObject(A.Device.Device).An.B8()){this.N.IS.CZ(100);this.N.
Ce=null;}else this.N.IS.CZ(255);},AoF:function(s){this.HS(s);},AdU:function(Aih,
Aii,AJA){A._GetAutoObject(C.BS).ABX(Aih,Aii,[this,this.A9v,this.ATN],AJA);},AaO:
function(G){this.A4J(this);if(this.Afq)A.pe([this,this.ALD],this);},Bxg:function(
s){this.AaO(s);},Agl:function(){A._GetAutoObject(C.A7).Cb(9);},A4J:function(G){if(
!this.Bg)return;if(!A._GetAutoObject(A.Device.Device).An.QM()||!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bg.Dl(A.aaR(A.acf.AEF));else if(A._GetAutoObject(
A.Device.Helper).Arn(A._GetAutoObject(A.Device.Device).An.Filter))this.Bg.Dl(this.
KS);else if(!A._GetAutoObject(A.Device.Device).An.Filter.DM(1,4)){if(A._GetAutoObject(
A.Device.Helper).ADi(A._GetAutoObject(A.Device.Device).An.Filter)===1)this.Bg.Dl(
A.aaR(A.acf.AOj));else this.Bg.Dl(A.aaR(A.acf.AOi));}else this.Bg.Dl(A.aaR(A.acf.
ASu));},AE6:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],0));},AwX:function(
E){if(A.aaZ(this.Fm,E))return;if(!!this.Fm)A.z$([this,this.A08],this.Fm,0);this.
Fm=E;if(!!E)A.zX([this,this.A08],this.Fm,0);if(!!E)A.pe([this,this.A08],this);},
AFa:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],1));},Aw2:function(
G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],2));},ATR:function(G){var F;if(!
!this.Fm)(F=this.Fm,F[2].call(F[0],3));},AT5:function(G){var F;if(!!this.Fm)(F=this.
Fm,F[2].call(F[0],7));},AT6:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(
F[0],5));},BiQ:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.
Helper).GS(this.Bg.FO());this.DQ.Qs(1);}},I8:function(Aih,Aii,Ao3){A._GetAutoObject(
C.BS).ABX(Aih,Aii,[this,this.A9w,this.ATO],Ao3);},BmA:function(G){var F;if(!!this.
Fm)(F=this.Fm,F[2].call(F[0],4));},BiM:function(G){if(!this.Bg)return;if(this.Nk(
)){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.DQ.BB$();}},BmB:function(
G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],6));},BiN:function(G){if(!this.Bg
)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.DQ.
BCa();}},BiP:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.
Helper).GS(this.Bg.FO());this.DQ.Qs(1024);}},BnL:function(G){var F;if(!!this.Fm)(
F=this.Fm,F[2].call(F[0],8));},Akv:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2
].call(F[0],9));},BiR:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(2);}},A6B:function(G){if(!this.Bg)return;
if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());if(A._GetAutoObject(
A.Device.Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts))A._GetAutoObject(
A.Device.Device).AZ(66,true,A.jV,0,null);else this.BBX();}},BiK:function(G){if(!
this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());
this.DQ.Qs(16);}},BBX:function(){A._GetAutoObject(C.A7).Cb(94);},BiT:function(G){
if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO(
));this.DQ.Qs(4);}},BiU:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(8);}},A6C:function(G){var B;if(!this.
Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());if(this.
Afq){A.zX([this,this.AAH],[B=this.DQ,B.SL,B.E5],0);this.ABg(this);}this.DQ.Ac$();
}},AuN:function(Aih,Aii,ByU){A._GetAutoObject(C.BS).BhG(Aih,Aii,ByU);},ALD:function(
G){this.N.Hz(A.jV);this.N.CS(A.jV);this.N.C3(A.aaL(A.ach.AeD));this.N.CF=[this,this.
Bmp];this.N.T8.CZ(100);this.N.T9.CZ(100);var Gi=A._GetAutoObject(A.Device.Device
).An.B8();if(Gi<=0){this.N.Ct(null);this.N.C4(null);this.N.Ce=null;this.N.Ca=null;
this.N.WW=false;this.N.ZK=false;}else if(Gi===1){this.N.Ct(null);this.N.C4(A.aaL(
A.ach.AeE));this.N.Ce=null;this.N.Ca=[this,this.Aaq];this.N.WW=false;this.N.ZK=false;
}else{this.N.Ct(A.aaL(A.ach.Ard));this.N.C4(A.aaL(A.ach.Arl));this.N.Ce=[this,this.
A33];this.N.Ca=[this,this.A34];this.N.WW=true;this.N.ZK=true;}},A33:function(G){
if(!this.Bg)return;if(this.Bg.FO()<(A._GetAutoObject(A.Device.Device).An.B8()-1)
)this.Bg.GU(this.Bg.FO()+1);},A34:function(G){if(!this.Bg)return;if(this.Bg.FO()>
0)this.Bg.GU(this.Bg.FO()-1);},A$V:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>=0){var Bd=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Bd>=0){this.Bg.GU(Bd);A.ab5("%s",Aoo);}}},Nk:function(){return this.
Bg.FO()>=0;},Aki:function(){return A._GetAutoObject(A.Device.Device).An.B8()>5;}
,Agz:function(){this.BhH();A._GetAutoObject(C.BS).TH(A.aaR(A.acf.AUW),[this,this.
A93]);A._GetAutoObject(C.BS).Fz();},Z9:function(G){if(this.Afq)this.ALD(this);else
this.HS(this);},ABg:function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.
Filter.E$();var Azi=aFilter.DM(1,4);if(!!Azi){aFilter.Nw(Azi);A._GetAutoObject(A.
Device.Device).An.Bk(aFilter);if(!!this.Bg)this.Bg.GU(0);}},BHc:function(s){this.
ABg(s);},AAH:function(G){var B;if(!this.DQ.EN&&this.Afq){A.z$([this,this.AAH],[B=
this.DQ,B.SL,B.E5],0);this.ABg(this);}},Bon:function(G){var F;if(!!this.Fm)(F=this.
Fm,F[2].call(F[0],10));},BiW:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(256);}},A3T:function(G){var F;this.
ATO((F=this.Fm,F[1].call(F[0])));A.pe([this,this.AoF],this);},A08:function(s){this.
A3T(s);},Bmx:function(G){var F;if(!!this.Fm)(F=this.Fm,F[2].call(F[0],11));},BiL:
function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(
this.Bg.FO());this.DQ.Qs(4096);}},BiO:function(G){if(!this.Bg)return;if(this.Nk(
)){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(16384);}},A6H:function(
G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.
FO());this.BBY();}},BBY:function(){A._GetAutoObject(C.A7).Acf(75);},A6D:function(
G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.
FO());this.DQ.Qs(32768);}},A6F:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(65536);}},BiS:function(G){if(!this.
Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.
DQ.Qs(131072);}},BhH:function(){if(!A._GetAutoObject(A.Device.Device).An.Filter||
A._GetAutoObject(A.Device.Helper).Arn(A._GetAutoObject(A.Device.Device).An.Filter
))A._GetAutoObject(C.BS).Aa4(A.aaR(A.acf.ACs));else A._GetAutoObject(C.BS).TH(A.
aaR(A.acf.ACs),[this,this.Bla]);A._GetAutoObject(C.BS).TH(A.aaR(A.acf.AkV),[this
,this.Blc]);A._GetAutoObject(C.BS).Fz();},A6G:function(G){if(!this.Bg)return;if(
this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(128);}}
,BBJ:function(G){var B;if(!this.Bg)return;A.pe([B=this.Bg,B.Ch],this);},A6E:function(
G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(A.Device.Helper).GS(this.Bg.
FO());this.DQ.Qs(524288);}},BiV:function(G){if(!this.Bg)return;if(this.Nk()){A._GetAutoObject(
A.Device.Helper).GS(this.Bg.FO());this.DQ.Qs(262144);}},ATN:function(E){if(this.
AUw===E)return;this.AUw=E;A.abo([this,this.A9v,this.ATN],0);},ATO:function(E){if(
this.AUx===E)return;this.AUx=E;A.abo([this,this.A9w,this.ATO],0);},A7f:function(
){return C.YD;},Bgx:function(){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(
A.Device.Device).An.Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?
B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(A.Device.
Device).An.Bk(Filter);}},Bow:function(G){A._GetAutoObject(A.Device.Device).Zw(0);
},Box:function(G){A._GetAutoObject(A.Device.Device).Zw(14);},A_I:function(E){if(
A.aaY(this.ARS,E))return;this.ARS=E;if(!!this.Bg)this.Bg.H(E);},A9v:function(){return this.
AUw;},A9w:function(){return this.AUx;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.ADH._Init.call(this.Wa={I:this},0);C.Ko._Init.call(this.Ko={I:this},0);
this.__proto__=C.GJ;this.Background.H(Cf);this.N.Z(true);this.N.OW(true);this.N.
OX(true);this.Ek.A_x(A.jb.CU);this.Ek.A_y(A.jb.Text);this.Dr(C.Kv);this.Wa.H(I1);
this.KS=A.aaR(A.acf.AEF);this.J(this.Wa,0);this.DQ=A._GetAutoObject(C.DQ);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.Wa._Done();this.Ko._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Wa._ReInit();
this.Ko._ReInit();this.Dl(A.aaR(A.acf.AEF));this.CQ();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Wa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalListScreen"};C.ACn={AP:null,A$:null,UR:null,AcF:
null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(
A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,
aSize[1]]);this.UR.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[1]]);this.A$.H([
this.UR.M[2]-1,0,this.UR.M[2]+1,aSize[1]]);this.AcF.H([this.UR.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.UR.L(this.V.AQ);this.AcF.L(this.
V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){this.T(this.
AX.CC(Ad,1).toFixed());this.UR.R(this.AX.CC(Ad,2).toFixed());this.AcF.R(this.AX.
CC(Ad,3).toFixed());this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.Text._Init.call(this.UR={I:this},0);A.acg.Text._Init.call(this.AcF={I:this
},0);this.__proto__=C.ACn;this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.UR.L(A.jb.Text
);this.AcF.L(A.jb.Text);this.J(this.AP,0);this.J(this.A$,0);this.J(this.UR,0);this.
J(this.AcF,0);this.UR.S(A.aaL(A.fl.Af));this.AcF.S(A.aaL(A.fl.Af));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done();this.UR.
_Done();this.AcF._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.A$._ReInit();this.UR._ReInit();this.AcF._ReInit(
);this.UR.S(A.aaL(A.fl.Af));this.AcF.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Ba._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Aeb={OH:null,SZ:null,Mu:null,Init:function(aArg){var B;A.zX([this,this.A3A],[
B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyY],0);A.zX([this,this.AdB],[B=A._GetAutoObject(
A.Device.Device),B.Awe,B.AyX],0);A.pe([this,this.AdB],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SZ.R(A._GetAutoObject(A.Device.Device).Abd.toFixed()+As7
);this.OH.Z(A._GetAutoObject(A.Device.Device).AmI);},AdB:function(G){this.Am();}
,M6:function(G){A._GetAutoObject(C.A7).FB();},A3A:function(G){if(A._GetAutoObject(
A.Device.Device).AmI===false){this.OH.Z(false);A._GetAutoObject(C.A7).FB();}else
this.OH.Z(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.OH={I:this},0);A.acg.Text._Init.call(this.SZ={I:this},0);C.Mu._Init.call(
this.Mu={I:this},0);this.__proto__=C.Aeb;var B;this.Background.L(A.jb.CU);this.N.
Z(true);this.N.CS(A.aaR(A.acf.Ok));this.OH.H(Xq);this.OH.R(A.aaR(A.acf.OH));this.
OH.L(A.jb.Text);this.OH.Z(false);this.SZ.H(As8);this.SZ.R(As9);this.SZ.L(A.jb.Text
);this.Mu.H(As_);this.J(this.OH,0);this.J(this.SZ,0);this.J(this.Mu,0);this.N.Ca=[
this,this.M6];this.OH.S(A.aaL(A.fl.Af));this.SZ.S(A.aaL(A.fl.Af));this.Mu.Au([B=
A._GetAutoObject(A.Device.Device),B.Awe,B.AyX]);this.Mu.A_P([B=A._GetAutoObject(
A.Device.Device),B.Awh,B.AyY]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.OH._Done();this.SZ._Done();this.Mu._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.OH._ReInit();this.SZ._ReInit();this.Mu._ReInit(
);this.N.CS(A.aaR(A.acf.Ok));this.OH.R(A.aaR(A.acf.OH));this.OH.S(A.aaL(A.fl.Af)
);this.SZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.OH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mu={Ad8:null,Ad9:null,Hh:function(G){var F;if(!!this.Q){this.A2H();var Adc=(
F=this.Q,F[1].call(F[0]));if(Adc>20)this.OD.L(A.jb.E1);else this.OD.L(A.jb.Gk);this.
OD.L((this.OD.AQ&0x00FFFFFF)|(this.AlP(Adc,0,20)<<24));this.TO.L((this.TO.AQ&0x00FFFFFF
)|(this.AlP(Adc,21,40)<<24));this.TP.L((this.TP.AQ&0x00FFFFFF)|(this.AlP(Adc,41,
60)<<24));this.Ad8.L((this.Ad8.AQ&0x00FFFFFF)|(this.AlP(Adc,61,80)<<24));this.Ad9.
L((this.Ad9.AQ&0x00FFFFFF)|(this.AlP(Adc,81,100)<<24));}},A2H:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.Vf=this.Ad9;else if((F=this.Q,F[
1].call(F[0]))>60)this.Vf=this.Ad8;else if((F=this.Q,F[1].call(F[0]))>40)this.Vf=
this.TP;else if((F=this.Q,F[1].call(F[0]))>20)this.Vf=this.TO;else this.Vf=this.
OD;}else this.Vf=null;},_Init:function(aArg){C.OF._Init.call(this,aArg);A.acg.AL.
_Init.call(this.Ad8={I:this},0);A.acg.AL._Init.call(this.Ad9={I:this},0);this.__proto__=
C.Mu;this.H(Aop);this.NY.H(Aop);this.OD.H(As$);this.TO.H(Alf);this.TP.H(Ayh);this.
Ad8.H(Ayi);this.Ad8.L(A.jb.E1);this.Ad9.H(Ayj);this.Ad9.L(A.jb.E1);this.J(this.Ad8
,0);this.J(this.Ad9,0);this.NY.Ax(A.aaL(A.ach.AM5));},_Done:function(){this.__proto__=
C.OF;this.Ad8._Done();this.Ad9._Done();C.OF._Done.call(this);},_ReInit:function(
){C.OF._ReInit.call(this);this.Ad8._ReInit();this.Ad9._ReInit();},_Mark:function(
D){var B;C.OF._Mark.call(this,D);if((B=this.Ad8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AVr={Od:null,Lx:null,Ak9:null,Z6:null,Z5:null,CQ:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.ApS],[B=A._GetAutoObject(A.Device.Device),B.
AS6,B.A0S],0);A.zX([this,this.ApS],[B=A._GetAutoObject(A.Device.Device),B.AS9,B.
A0U],0);A.zX([this,this.ApS],[B=A._GetAutoObject(A.Device.Device),B.A9L,B.BbY],0
);A.pe([this,this.ApS],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.GH(this
);this.ABK(this);this.BC4(this);this.DK(this);},BBl:function(G){A._GetAutoObject(
A.Device.Device).AsO();},ApS:function(G){this.Am();},GH:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Z6.Z(false);break;case 4:{var A4l;if(!A._GetAutoObject(A.Device.Device).Afv)A4l=
0;else A4l=((A._GetAutoObject(A.Device.Device).AxY*100)/A._GetAutoObject(A.Device.
Device).Afv)|0;this.Z6.Bx(A4l);this.Z6.Z(true);}break;default:A.ab5("%s%e",Ata,A.
_GetAutoObject(A.Device.Device).SyncState);}},BC4:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CK);this.Lx.L(A.jb.Text);this.Od.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.Gk);this.Lx.L(A.jb.Bm);this.Od.L(A.jb.Bm);}break;default:A.ab5(
"%s%e",Ata,A._GetAutoObject(A.Device.Device).SyncState);}},DK:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.C3(null);this.N.CF=null;this.N.CS(A.jV);this.N.Ca=null;}break;
case 7:{this.N.C3(null);this.N.CF=null;this.N.CS(A.aaR(A.acf.Ok));this.N.Ca=[this
,this.BBl];}break;default:A.ab5("%s%e",Ata,A._GetAutoObject(A.Device.Device).SyncState
);}},ABK:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lx.R(A.aaR(A.acf.Bqr));break;case 1:this.Lx.R(A.aaR(A.acf.Bqo));break;
case 2:this.Lx.R(A.aaR(A.acf.Bql));break;case 3:this.Lx.R(A.aaR(A.acf.Bqp));break;
case 4:this.Lx.R((A.aaR(A.acf.Bqn)+Ayk)+A._GetAutoObject(A.Device.Helper).MO(A._GetAutoObject(
A.Device.Helper).MO(A.aaR(A.acf.Bo2),Pc,A._GetAutoObject(A.Device.Device).AxY.toFixed(
)),Ayl,A._GetAutoObject(A.Device.Device).Afv.toFixed()));break;case 5:this.Lx.R(
A.aaR(A.acf.Bqq));break;case 7:this.Lx.R(A.aaR(A.acf.Bqm));break;default:A.ab5("%s%e"
,Ata,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CG._Init.call(this.Od={I:this},0);C.CG._Init.call(this.Lx={I:this
},0);A.acg.Ap._Init.call(this.Ak9={I:this},0);A.acs.ADK._Init.call(this.Z6={I:this
},0);A.acs.ADL._Init.call(this.Z5={I:this},0);this.__proto__=C.AVr;this.N.Z(true
);this.Od.H(AWn);this.Od.R(A.aaR(A.acf.Od));this.Lx.A1(0x3F);this.Lx.H(AWo);this.
Lx.A6(0x12);this.Ak9.H(AWp);this.Ak9.L(A.jb.AV);this.Z6.H(AWq);this.Z6.As(false);
this.Z6.Bx(0);this.Z5.Boh(0);this.Z5.A$b(0);this.Z5.A_$(A.jb.AV);this.Z5.A__(0);
this.Z5.AGj(AHD);this.J(this.Od,0);this.J(this.Lx,0);this.J(this.Ak9,0);this.J(this.
Z6,0);this.Od.S(A.aaL(A.fl.EK));this.Od.AY(A.aaL(A.fl.Af));this.Od.Cm(A.aaL(A.fl.
Ak));this.Lx.S(A.aaL(A.fl.Af));this.Lx.AY(A.aaL(A.fl.Ak));this.Lx.Cm(A.aaL(A.fl.
Bh));this.Ak9.Ax(A.aaL(A.ach.AQ_));this.Z6.OnSetAppearance(this.Z5);this.Z5.A$a(
A.aaL(A.ach.N1));this.Z5.A_9(A.aaL(A.ach.N1));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.Od._Done();this.Lx._Done();this.Ak9._Done();this.Z6._Done(
);this.Z5._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Od._ReInit();this.Lx._ReInit();this.Ak9._ReInit();this.Z6._ReInit();this.
Z5._ReInit();this.Od.R(A.aaR(A.acf.Od));this.Od.S(A.aaL(A.fl.EK));this.Od.AY(A.aaL(
A.fl.Af));this.Od.Cm(A.aaL(A.fl.Ak));this.Lx.S(A.aaL(A.fl.Af));this.Lx.AY(A.aaL(
A.fl.Ak));this.Lx.Cm(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.AB._Mark.
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
this.Af7],[B=this.Animal,B.WK,B.J0],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Af7],[B=this.Animal,B.WK,B.J0],0);A.pe([this,this.Af7],this);},Af7:function(
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
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Acw:null,Du:
function(){return A._GetAutoObject(A.Device.Helper).Ad3.MN;},C7:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Ad3.MN)return-1;return A._GetAutoObject(
A.Device.Helper).Ad3.Get(aIndex);},Gm:function(aIndex){return this.Acw.BT(this.C7(
aIndex));},DZ:function(A8){var O=0;while(O<A._GetAutoObject(A.Device.Helper).Ad3.
MN){if(A._GetAutoObject(A.Device.Helper).Ad3.Get(O)===A8)return O;O=O+1;}return-
1;},H8:function(){var O=0;var max=-1;while(O<A._GetAutoObject(A.Device.Helper).UO.
MN){if(A._GetAutoObject(A.Device.Helper).UO.Get(O)>max)max=A._GetAutoObject(A.Device.
Helper).UO.Get(O);O=O+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.EC(E);},A1Q:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B$,this.Cc],0);},L6:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A1Q],[B=this.Animal,B.PX,B.EC],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A1Q],[B=this.Animal,B.PX,B.EC],0);A.pe([
this,this.A1Q],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acw={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Acw._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Acw._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Acw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AU8={Init:function(aArg){var B;A.pe([this,this.AfL],this);A.zX([this,this.AfL
],[B=A._GetAutoObject(A.Device.Device),B.ArI,B.Atu],0);},A4q:function(G){A._GetAutoObject(
A.Device.Device).AZ(38,true,A.jV,0,[this,this.Bce]);},A31:function(G){var B;var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).AsA(this);},A2e:function(G){var F;if(this.A_===1){var BP=this.D7;
this.D7=this.D7-10;if(this.D7<this.AlX)this.D7=this.AlX;if(this.D7<A._GetAutoObject(
A.Device.Device).AcL)this.D7=A._GetAutoObject(A.Device.Device).AcL;if(this.DW!==
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
PQ;else if(AtA===2)return this.PR;else return null;},_Init:function(aArg){C.Acv.
_Init.call(this,aArg);this.__proto__=C.AU8;this.AlS=5000;this.AlX=3000;this.T(A.
aaR(A.acf.Ary));this.Background.H(AfI);this.V.H(BD);this.V.R(A.aaR(A.acf.AHe));this.
V.A6(0x12);this.Init(aArg);},_ReInit:function(){C.Acv._ReInit.call(this);this.T(
A.aaR(A.acf.Ary));this.V.R(A.aaR(A.acf.AHe));},_className:"Application::SettingsItemThresholdsTemp"
};C.EB={Background:null,_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.
AL._Init.call(this.Background={I:this},0);this.__proto__=C.EB;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CK);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.P;this.Background._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AR:null,Abg:null,Abk:null,Abi:
null,Background:null,Abf:null,Abj:null,Abh:null,AjG:null,ArD:null,VY:null,A5:0,BA3:
function(G){if(this.AjG.CP===6){if(this.A5===1)this.AnN(2);else if(this.A5===2)this.
AnN(3);else this.AnN(1);}else if(this.AjG.CP===7){if(this.A5===3)this.AnN(2);else
if(this.A5===2)this.AnN(1);else this.AnN(3);}},AnN:function(E){if(this.A5===E)return;
this.A5=E;switch(this.A5){case 3:this.Background.H(this.Abf.M);break;case 2:this.
Background.H(this.Abj.M);break;case 1:this.Background.H(this.Abh.M);break;default:
this.Background.H(Aoq);}},H1:function(G){var B;if(!!this.AR)(B=this.AR)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Hq._Init.
call(this.Abg={I:this},0);A.acg.Hq._Init.call(this.Abk={I:this},0);A.acg.Hq._Init.
call(this.Abi={I:this},0);A.acg.Ap._Init.call(this.Background={I:this},0);A.acg.
Aes._Init.call(this.Abf={I:this},0);A.acg.Aes._Init.call(this.Abj={I:this},0);A.
acg.Aes._Init.call(this.Abh={I:this},0);A.Core.BF._Init.call(this.AjG={I:this},0
);A.Core.BF._Init.call(this.ArD={I:this},0);A.Graphics.AMX._Init.call(this.VY={I:
this},0);this.__proto__=C.Rating;this.H(AWr);this.Abg.H(AHF);this.Abg.L(A.jb.Text
);this.Abg.AnL(Alg);this.Abg.Nu(3);this.Abg.Z(true);this.Abk.H(AHG);this.Abk.L(A.
jb.Text);this.Abk.AnL(Alg);this.Abk.Nu(3);this.Abk.Z(true);this.Abi.H(AHH);this.
Abi.L(A.jb.Text);this.Abi.AnL(Alg);this.Abi.Nu(3);this.Abi.Z(true);this.Background.
H(Aoq);this.Background.L(A.jb.AV);this.Abf.H(AHF);this.Abf.L(A.jb.E1);this.Abf.AnL(
Alg);this.Abf.Z(true);this.Abj.H(AHG);this.Abj.L(A.jb.Ib);this.Abj.AnL(Alg);this.
Abj.Z(true);this.Abh.H(AHH);this.Abh.L(A.jb.Gk);this.Abh.AnL(Alg);this.Abh.Z(true
);this.AjG.Filter=147;this.ArD.Filter=1;this.VY.BmQ(360);this.VY.Bn6(22);this.VY.
Bof(2);this.J(this.Abg,0);this.J(this.Abk,0);this.J(this.Abi,0);this.J(this.Background
,0);this.J(this.Abf,0);this.J(this.Abj,0);this.J(this.Abh,0);this.Abg.ZD(this.VY
);this.Abk.ZD(this.VY);this.Abi.ZD(this.VY);this.Background.Ax(A.aaL(A.ach.N0));
this.Abf.ZD(this.VY);this.Abj.ZD(this.VY);this.Abh.ZD(this.VY);this.AjG.BG=[this
,this.BA3];this.ArD.BG=[this,this.H1];},_Done:function(){this.__proto__=A.Core.P;
this.Abg._Done();this.Abk._Done();this.Abi._Done();this.Background._Done();this.
Abf._Done();this.Abj._Done();this.Abh._Done();this.AjG._Done();this.ArD._Done();
this.VY._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Abg._ReInit();this.Abk._ReInit();this.Abi._ReInit();this.Background.
_ReInit();this.Abf._ReInit();this.Abj._ReInit();this.Abh._ReInit();this.AjG._ReInit(
);this.ArD._ReInit();this.VY._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.
call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Abg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Abf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abj).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.AsC={Akk:null,Asm:null,Background:null,T0:null,TW:null,Ab5:null,Ab4:null,Ab3:
null,AcA:null,Acz:null,Acy:null,Acr:null,Acq:null,AbY:null,AbX:null,Ach:null,Acg:
null,AqI:null,Init:function(aArg){},BkO:function(G){this.Ab5.R(AWs);this.Ab4.R(A.
jV);this.Ab3.R(A.jV);this.AcA.R(AWt);this.Acz.R(A.jV);this.Acy.R(A.jV);this.Acr.
R(A.jV);this.Acq.R(A.jV);this.AbY.R(A.jV);this.AbX.R(A.jV);this.Ach.R(A.jV);this.
Acg.R(A.jV);},BoK:function(G){this.TW.Z(true);this.T0.Z(true);var II=this.Iq();if(
!II)return;this.T0.R(II.GetFPS().toFixed()+AHI);this.TW.R(AWu);this.TW.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Akk={I:this},0);A.Core.Timer._Init.call(this.Asm={I:this},0);A.acg.AL._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.T0={I:this},0);A.acg.
Text._Init.call(this.TW={I:this},0);A.acg.Text._Init.call(this.Ab5={I:this},0);A.
acg.Text._Init.call(this.Ab4={I:this},0);A.acg.Text._Init.call(this.Ab3={I:this}
,0);A.acg.Text._Init.call(this.AcA={I:this},0);A.acg.Text._Init.call(this.Acz={I:
this},0);A.acg.Text._Init.call(this.Acy={I:this},0);A.acg.Text._Init.call(this.Acr={
I:this},0);A.acg.Text._Init.call(this.Acq={I:this},0);A.acg.Text._Init.call(this.
AbY={I:this},0);A.acg.Text._Init.call(this.AbX={I:this},0);A.acg.Text._Init.call(
this.Ach={I:this},0);A.acg.Text._Init.call(this.Acg={I:this},0);A.acg.AL._Init.call(
this.AqI={I:this},0);this.__proto__=C.AsC;this.H(AcT);this.As(false);this.Akk.PZ(
2000);this.Akk.WQ(1);this.Akk.As(true);this.Asm.As(true);this.Background.A1(0x3F
);this.Background.H(AcT);this.Background.L(0x78000000);this.T0.H(AWv);this.T0.A6(
0x14);this.T0.R(A.jV);this.T0.L(0xFFFFFC00);this.T0.Z(false);this.TW.H(AWw);this.
TW.A6(0x11);this.TW.R(A.jV);this.TW.Z(false);this.Ab5.H(AWx);this.Ab5.A6(0x11);this.
Ab5.R(A.jV);this.Ab4.H(AHJ);this.Ab4.A6(0x11);this.Ab4.R(A.jV);this.Ab3.H(Atb);this.
Ab3.A6(0x14);this.Ab3.R(A.jV);this.AcA.H(AHK);this.AcA.A6(0x11);this.AcA.R(A.jV);
this.Acz.H(AHL);this.Acz.A6(0x11);this.Acz.R(A.jV);this.Acy.H(Aym);this.Acy.A6(0x14
);this.Acy.R(A.jV);this.Acr.H(AHM);this.Acr.A6(0x11);this.Acr.R(A.jV);this.Acq.H(
Ayn);this.Acq.A6(0x14);this.Acq.R(A.jV);this.AbY.H(AWy);this.AbY.A6(0x11);this.AbY.
R(A.jV);this.AbX.H(AWz);this.AbX.A6(0x14);this.AbX.R(A.jV);this.Ach.H(AWA);this.
Ach.A6(0x11);this.Ach.R(A.jV);this.Acg.H(AWB);this.Acg.A6(0x14);this.Acg.R(A.jV);
this.AqI.H(AHN);this.J(this.Background,0);this.J(this.T0,0);this.J(this.TW,0);this.
J(this.Ab5,0);this.J(this.Ab4,0);this.J(this.Ab3,0);this.J(this.AcA,0);this.J(this.
Acz,0);this.J(this.Acy,0);this.J(this.Acr,0);this.J(this.Acq,0);this.J(this.AbY,
0);this.J(this.AbX,0);this.J(this.Ach,0);this.J(this.Acg,0);this.J(this.AqI,0);this.
Akk.MK=[this,this.BkO];this.Asm.MK=[this,this.BoK];this.T0.S(A.aaL(A.fl.Ak));this.
TW.S(A.aaL(A.fl.Ak));this.Ab5.S(A.aaL(A.fl.Ak));this.Ab4.S(A.aaL(A.fl.Ak));this.
Ab3.S(A.aaL(A.fl.Ak));this.AcA.S(A.aaL(A.fl.Ak));this.Acz.S(A.aaL(A.fl.Ak));this.
Acy.S(A.aaL(A.fl.Ak));this.Acr.S(A.aaL(A.fl.Ak));this.Acq.S(A.aaL(A.fl.Ak));this.
AbY.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.Ach.S(A.aaL(A.fl.Ak));this.
Acg.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;
this.Akk._Done();this.Asm._Done();this.Background._Done();this.T0._Done();this.TW.
_Done();this.Ab5._Done();this.Ab4._Done();this.Ab3._Done();this.AcA._Done();this.
Acz._Done();this.Acy._Done();this.Acr._Done();this.Acq._Done();this.AbY._Done();
this.AbX._Done();this.Ach._Done();this.Acg._Done();this.AqI._Done();A.Core.P._Done.
call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Akk._ReInit();this.
Asm._ReInit();this.Background._ReInit();this.T0._ReInit();this.TW._ReInit();this.
Ab5._ReInit();this.Ab4._ReInit();this.Ab3._ReInit();this.AcA._ReInit();this.Acz.
_ReInit();this.Acy._ReInit();this.Acr._ReInit();this.Acq._ReInit();this.AbY._ReInit(
);this.AbX._ReInit();this.Ach._ReInit();this.Acg._ReInit();this.AqI._ReInit();this.
T0.S(A.aaL(A.fl.Ak));this.TW.S(A.aaL(A.fl.Ak));this.Ab5.S(A.aaL(A.fl.Ak));this.Ab4.
S(A.aaL(A.fl.Ak));this.Ab3.S(A.aaL(A.fl.Ak));this.AcA.S(A.aaL(A.fl.Ak));this.Acz.
S(A.aaL(A.fl.Ak));this.Acy.S(A.aaL(A.fl.Ak));this.Acr.S(A.aaL(A.fl.Ak));this.Acq.
S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.AbX.S(A.aaL(A.fl.Ak));this.Ach.
S(A.aaL(A.fl.Ak));this.Acg.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.P.
_Mark.call(this,D);if((B=this.Akk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Asm).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AcA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acz)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ach)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acg)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AqI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AGX={FN:null,Dm:null,Av:null,JB:null,HO:null,Uo:null,Bc:null,Ss:null,Gy:null
,Gx:null,FZ:0,A_:0,Bkl:false,Init:function(aArg){},Ai:function(Ae){C.Ds.Ai.call(
this,Ae);this.Hy.Z(false);this.H9.Z(false);if(!!this.Dm){this.Ss.R(this.Av.Format(
AWC));this.Uo.R(this.Av.Format(MS));}if(this.A_===1){this.HO.Z(true);this.HO.H(this.
Ss.M);this.HO.L(A.jb.Bm);this.Ss.L(this.Background.AQ);this.Uo.L(A.jb.Bm);}else if(
this.A_===2){this.HO.Z(true);this.HO.H(this.Uo.M);this.HO.L(A.jb.Bm);this.Ss.L(A.
jb.Bm);this.Uo.L(this.Background.AQ);}else{this.HO.Z(false);this.Ss.L(this.V.AQ);
this.Bc.L(this.V.AQ);this.Uo.L(this.V.AQ);}},Qx:function(G){if(this.FI===1)A.pe([
this,this.Vk],this);else if(this.FI===4)A.pe([this,this.AiI],this);else if(this.
FI===5)A.pe([this,this.Aiu],this);C.Ds.Qx.call(this,G);},Ki:function(G){switch(this.
A_){case 0:C.Ds.Ki.call(this,G);break;case 2:break;default:this.AdA(this);}},Kd:
function(G){switch(this.A_){case 0:C.Ds.Kd.call(this,G);break;default:this.Ait(this
);}},AdC:function(G){var F;if(!!this.Dm)this.Uw((F=this.Dm,F[1].call(F[0])));},Acc:
function(E){if(A.aaZ(this.Dm,E))return;if(!!this.Dm)A.z$([this,this.AdC],this.Dm
,0);this.Dm=E;if(!!E)A.zX([this,this.AdC],E,0);if(!!E)A.pe([this,this.AdC],this);
},Uw:function(E){if(this.FZ===E)return;this.FZ=E;this.Av.Initialize(this.FZ);this.
Am();},AdA:function(G){this.FI=1;this.Am();if(this.Bo.Bw){A.pe([this,this.Vk],this
);this.Bo.As(false);}this.Bo.As(true);},Vk:function(G){this.Ex(this.A_+1);},Al9:
function(G){this.FI=4;this.Am();if(this.Bo.Bw){A.pe([this,this.AiI],this);this.Bo.
As(false);}this.Bo.As(true);},Al8:function(G){this.FI=5;this.Am();if(this.Bo.Bw){
A.pe([this,this.Aiu],this);this.Bo.As(false);}this.Bo.As(true);},AiI:function(G){
var B;var F;var BP=this.FZ;if(this.A_===1)this.Av.AnG(this.Av.AjU+1);if(this.A_===
2)this.Av.AnJ(this.Av.Av8+1);this.Av.AnM(0);this.Uw(((B=(this.Av.JY()|0))<0)?B+0x100000000:
B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FZ));A.abo(this.
Dm,0);}},Aiu:function(G){var B;var F;var BP=this.FZ;if(this.A_===1)this.Av.AnG(this.
Av.AjU-1);if(this.A_===2)this.Av.AnJ(this.Av.Av8-1);this.Av.AnM(0);this.Uw(((B=(
this.Av.JY()|0))<0)?B+0x100000000:B);if(this.FZ!==BP){if(!!this.Dm)(F=this.Dm,F[
2].call(F[0],this.FZ));A.abo(this.Dm,0);}},DK:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeE));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vk];}break;case 2:{(F=this.
N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.
N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(A.aaL(A.ach.Am6
));(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=[this,this.
Ait];(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkS((F=this.N,F[1].call(F[
0])));}},FW:function(G){this.Ex(1);},Hf:function(G){this.Ex(0);},Ex:function(EO){
var F;if(!this.A_)this.FN.AjC((F=this.N,F[1].call(F[0])));this.A_=EO;this.Bkl=true;
if((this.A_<0)||(this.A_>2))this.A_=0;this.DK(this);this.Gy.Bw=!!this.A_;this.Gx.
Bw=!!this.A_;this.Am();},Ait:function(G){if(this.A_>1)this.Ex(this.A_-1);},_Init:
function(aArg){C.Ds._Init.call(this,aArg);A.Core.Bs._Init.call(this.Av={I:this},
0);A.Core.BF._Init.call(this.JB={I:this},0);A.acg.AL._Init.call(this.HO={I:this}
,0);A.acg.Text._Init.call(this.Uo={I:this},0);A.acg.Text._Init.call(this.Bc={I:this
},0);A.acg.Text._Init.call(this.Ss={I:this},0);A.Core.BF._Init.call(this.Gy={I:this
},0);A.Core.BF._Init.call(this.Gx={I:this},0);this.__proto__=C.AGX;this.H(U5);this.
V.R(Ayo);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H9.Z(false);this.JB.Filter=1;this.
HO.H(AWD);this.HO.L(0x55FFFFFF);this.Uo.H(AWE);this.Uo.Je(true);this.Bc.H(AWF);this.
Bc.A6(0x14);this.Bc.R(AWG);this.Ss.H(AWH);this.Ss.Je(true);this.Ss.A6(0x14);this.
Gy.Filter=4;this.Gy.Bw=false;this.Gx.Filter=5;this.Gx.Bw=false;this.J(this.HO,0);
this.J(this.Uo,0);this.J(this.Bc,0);this.J(this.Ss,0);this.JB.BG=[this,this.AdA];
this.Uo.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));this.Ss.S(A.aaL(A.fl.EK));this.
Gy.BG=[this,this.Al9];this.Gy.D1=[this,this.AiI];this.Gx.BG=[this,this.Al8];this.
Gx.D1=[this,this.Aiu];this.FN=A._NewObject(C.Aex,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ds;this.Av._Done();this.JB._Done();this.HO._Done();this.Uo._Done(
);this.Bc._Done();this.Ss._Done();this.Gy._Done();this.Gx._Done();C.Ds._Done.call(
this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Av._ReInit();this.JB._ReInit(
);this.HO._ReInit();this.Uo._ReInit();this.Bc._ReInit();this.Ss._ReInit();this.Gy.
_ReInit();this.Gx._ReInit();this.Uo.S(A.aaL(A.fl.EK));this.Bc.S(A.aaL(A.fl.EK));
this.Ss.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((
B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Uo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"
};C.CG={B7:null,AmX:null,AqX:null,Em:null,Text:null,String:A.jV,Bef:A.jV,Kn:0x12
,ALl:0,AQ:0xFFFFFFFF,Oa:0,AUP:0,A$I:0,Beg:true,G6:function(CN){var LO=(A.Core.ARM.
isPrototypeOf(CN)?CN:null);if(!!LO)this.BDd(this);return A.Core.P.G6.call(this,CN
);},Bl:function(aSize){A.Core.P.Bl.call(this,aSize);A.pe([this,this.Ajm],this);}
,Dd:function(aFilter){return A.abh(this.Text.Dd(),this.M.slice(0,2));},R:function(
E){if(this.String===E)return;this.String=E;if(this.Beg){this.Bef=E;this.Beg=false;
}this.ALl=E.length;A.pe([this,this.Ajm],this);},S:function(E){if(this.B7===E)return;
this.B7=E;A.pe([this,this.Ajm],this);},AY:function(E){if(this.AmX===E)return;this.
AmX=E;A.pe([this,this.Ajm],this);},Cm:function(E){if(this.AqX===E)return;this.AqX=
E;A.pe([this,this.Ajm],this);},A6:function(E){if(E===this.Kn)return;this.Kn=E;this.
Text.A6(E);},Ajm:function(G){var B;var ALr=0;if(!this.ALl){this.Text.Z(false);return;
}this.Text.Z(true);this.Text.R(this.String);this.Text.Lv(false);if(!!this.B7){ALr=
this.B7.YB(this.String,0,this.ALl);if(ALr<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)
)){this.Text.S(this.B7);this.Text.Axa(this.Oa);return;}}this.Text.Lv(true);if(!!
this.AmX){ALr=this.AmX.YB(this.String,0,this.ALl);this.Text.S(this.AmX);this.Text.
Axa(this.AUP);if((ALr<(((B=this.M)[2]-B[0])-(2*this.Text.Jh)))&&(((B=this.Text.Dd(
))[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.AqX){this.Text.S(this.AqX);
if(((B=this.Text.Dd())[3]-B[1])>((B=this.M)[3]-B[1]))this.Text.Axa((((this.Text.
B7.Ascent+this.Text.B7.Descent)*75)/100)|0);}},L:function(E){if(E===this.AQ)return;
this.AQ=E;this.Text.L(E);},BDd:function(G){this.R(this.Bef);},Q9:function(E){if(
A.aa0(this.Em,E))return;this.Em=E;this.Text.Q9(E);},ASJ:function(){return A.abh(
this.Text.Dd(),this.M.slice(0,2));},Afj:function(AoR){return A.abf(this.M.slice(
0,2),this.Text.Afj(AoR));},Axa:function(E){if(this.Oa===E)return;this.Oa=E;A.pe([
this,this.Ajm],this);},Bn8:function(E){if(this.AUP===E)return;this.AUP=E;A.pe([this
,this.Ajm],this);},Bn9:function(E){if(this.A$I===E)return;this.A$I=E;A.pe([this,
this.Ajm],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Text={I:this},0);this.__proto__=C.CG;this.H(AHO);this.As(false);
this.Text.A1(0x3F);this.Text.H(AHO);this.Text.R(Rq);this.J(this.Text,0);},_Done:
function(){this.__proto__=A.Core.P;this.Text._Done();A.Core.P._Done.call(this);}
,_ReInit:function(){A.Core.P._ReInit.call(this);this.Text._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AmX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AqX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Em)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"
};C.AjS={Y:null,IR:null,AeP:null,Jb:null,Nh:null,AeJ:null,AeO:null,AeN:null,AeK:
null,AeM:null,AeL:null,Nj:null,N2:null,MD:null,Dg:function(E){C.YC.Dg.call(this,
E);this.IR.L(E);this.AeP.L(E);this.Jb.L(E);this.Nh.L(E);this.MD.L(E);this.AeJ.L(
E);this.Nj.L(E);this.N2.L(E);this.AeO.L(E);this.AeN.L(E);this.AeK.L(E);this.AeM.
L(E);this.AeL.L(E);},DX:function(G){C.YC.DX.call(this,G);this.XV(8,1,this.Nh);this.
XV(12,1,this.MD);this.XV(11,1,this.AeJ);this.XV(7,1,this.Nj);this.XV(14,1,this.N2
);this.XV(1,4,this.IR);this.XV(1,1,this.AeP);this.XV(4,1,this.Jb);this.XV(22,1,this.
AeO);this.XV(26,1,this.AeN);this.XV(30,1,this.AeK);this.XV(19,1,this.AeM);this.XV(
31,1,this.AeL);this.Text.Z(!this.Y.TY(null,0x1));},XV:function(AJB,Eb,AfY){var ABr=
false;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var Adm=A._GetAutoObject(
A.Device.Device).An.Filter.DM(AJB,Eb);if(!!Adm){ABr=true;switch(AJB){case 14:{var
AzH=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Adm)?Adm:null);if(!!AzH)AfY.
Ax(A._GetAutoObject(A.Device.Converter).A5C(AzH.A5));}break;case 7:{var AzH=(A.Device.
GenderFilterCriterion.isPrototypeOf(Adm)?Adm:null);if(!!AzH)AfY.Ax(A._GetAutoObject(
A.Device.Converter).AmZ(AzH.A5));}break;case 1:if(Eb===4)AfY.Ax(A.aaL(A.ach.ADZ)
);else if(Adm.Operator===4)ABr=false;break;case 22:switch(Adm.Operator){case 0:case
3:AfY.Ax(A.aaL(A.ach.AQS));break;default:AfY.Ax(A.aaL(A.ach.AjY));}break;case 26:
switch(Adm.Operator){case 0:case 3:AfY.Ax(A.aaL(A.ach.AQQ));break;default:AfY.Ax(
A.aaL(A.ach.AvH));}break;default:;}}else if((AJB===1)&&(Eb===4)){ABr=true;AfY.Ax(
A.aaL(A.ach.AeF));}}else if((AJB===1)&&(Eb===4)){ABr=true;AfY.Ax(A.aaL(A.ach.AeF
));}AfY.Z(ABr);},_Init:function(aArg){C.YC._Init.call(this,aArg);A.Core.Y._Init.
call(this.Y={I:this},0);A.acg.Ap._Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(
this.AeP={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);A.acg.Ap._Init.call(
this.Nh={I:this},0);A.acg.Ap._Init.call(this.AeJ={I:this},0);A.acg.Ap._Init.call(
this.AeO={I:this},0);A.acg.Ap._Init.call(this.AeN={I:this},0);A.acg.Ap._Init.call(
this.AeK={I:this},0);A.acg.Ap._Init.call(this.AeM={I:this},0);A.acg.Ap._Init.call(
this.AeL={I:this},0);A.acg.Ap._Init.call(this.Nj={I:this},0);A.acg.Ap._Init.call(
this.N2={I:this},0);A.acg.Ap._Init.call(this.MD={I:this},0);this.__proto__=C.AjS;
this.Y.A1(0x3F);this.Y.H(AWI);this.Y.JZ(3);this.IR.H(Ayp);this.AeP.H(AWJ);this.AeP.
Aj(true);this.Jb.H(Atc);this.Jb.Aj(true);this.Nh.H(Ayq);this.Nh.Aj(true);this.AeJ.
H(AWK);this.AeJ.Aj(true);this.AeO.H(AHP);this.AeO.Aj(true);this.AeN.H(AHP);this.
AeN.Aj(true);this.AeK.H(AWL);this.AeK.Aj(true);this.AeM.H(AHQ);this.AeM.Aj(true);
this.AeL.H(AHQ);this.AeL.Aj(true);this.Nj.H(AHR);this.Nj.Aj(true);this.N2.H(AHS);
this.N2.Aj(true);this.Text.R(A.aaR(A.acf.None));this.MD.H(AHR);this.MD.Aj(true);
this.J5(this.Gw,-3);this.J5(this.D2,-3);this.J5(this.A$,-3);this.J5(this.AP,-2);
this.J(this.Y,-2);this.J(this.IR,-2);this.J(this.AeP,-2);this.J(this.Jb,-2);this.
J(this.Nh,-2);this.J(this.AeJ,-2);this.J(this.AeO,-2);this.J(this.AeN,-2);this.J(
this.AeK,-2);this.J(this.AeM,-2);this.J(this.AeL,-2);this.J(this.Nj,-2);this.J(this.
N2,-2);this.J(this.MD,0);this.IR.Ax(A.aaL(A.ach.AeF));this.AeP.Ax(A.aaL(A.ach.AQF
));this.Jb.Ax(A.aaL(A.ach.AP3));this.Nh.Ax(A.aaL(A.ach.ADU));this.AeJ.Ax(A.aaL(A.
ach.Ag8));this.AeO.Ax(A.aaL(A.ach.AjY));this.AeN.Ax(A.aaL(A.ach.AvH));this.AeK.Ax(
A.aaL(A.ach.AQC));this.AeM.Ax(A.aaL(A.ach.AQD));this.AeL.Ax(A.aaL(A.ach.AQB));this.
Nj.Ax(A.aaL(A.ach.ADW));this.N2.Ax(A.aaL(A.ach.AvL));this.MD.Ax(A.aaL(A.ach.AD2)
);},_Done:function(){this.__proto__=C.YC;this.Y._Done();this.IR._Done();this.AeP.
_Done();this.Jb._Done();this.Nh._Done();this.AeJ._Done();this.AeO._Done();this.AeN.
_Done();this.AeK._Done();this.AeM._Done();this.AeL._Done();this.Nj._Done();this.
N2._Done();this.MD._Done();C.YC._Done.call(this);},_ReInit:function(){C.YC._ReInit.
call(this);this.Y._ReInit();this.IR._ReInit();this.AeP._ReInit();this.Jb._ReInit(
);this.Nh._ReInit();this.AeJ._ReInit();this.AeO._ReInit();this.AeN._ReInit();this.
AeK._ReInit();this.AeM._ReInit();this.AeL._ReInit();this.Nj._ReInit();this.N2._ReInit(
);this.MD._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(D){var B;C.YC.
_Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AeP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AeN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AeM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderFilter"};C.Amz={Ia:null,CD:function(G){if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);this.Ia.Gs();this.Ia.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);C.Rg.CD.call(this,G);},Aoa:function(){C.Rg.
Aoa.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
Background.L(A._GetAutoObject(A.acj.Temperature).BAb(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.C_.L(A._GetAutoObject(
A.acj.Temperature).BAe(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Lz));this.JT.L(A._GetAutoObject(A.acj.Temperature).BAc(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.HH.L(A.
_GetAutoObject(A.acj.Temperature).BAd(A._GetAutoObject(A.Device.Helper).W.AnimalType
,A._GetAutoObject(A.Device.Device).Lz));this.MP.L(this.JT.AQ);this.TemperatureUnit.
L(this.JT.AQ);}break;default:;}},Z9:function(){C.Rg.Z9.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.N.Ct(A.aaL(A.ach.AQ3));this.N.C4(A.aaL(
A.ach.Am7));}break;case 4:{this.N.Ct(null);this.N.C4(A.aaL(A.ach.AvT));}break;default:;
}},W3:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
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
3:this.JT.R(A._GetAutoObject(A.acj.Temperature).BAj(A._GetAutoObject(A.Device.Helper
).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));break;default:;}},Ax5:function(
){C.Rg.Ax5.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case
3:{A._GetAutoObject(A.Device.Device).WR(A._GetAutoObject(A.acj.Temperature).BAf(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Lz));this.Jk.As(true);}break;case 4:{A._GetAutoObject(A.Device.Device).WR(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AU2:function(){this.C_.Ax(
A.aaL(A.ach.AvS));this.C_.Cw(A._GetAutoObject(A.acj.Temperature).BAk(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Lz));this.N0.Cw(
0);},_Init:function(aArg){C.Rg._Init.call(this,aArg);this.__proto__=C.Amz;this.Dr(
C.IP);this.Ia=A._NewObject(A.Device.Rating,0);},_Mark:function(D){var B;C.Rg._Mark.
call(this,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalActionTemperatureScreen"
};C.AhC={N$:null,DL:null,Ip:null,Bc:null,AuG:null,String:A.jV,AxS:A.jV,MG:7,Akb:
2,KX:0,AVd:false,Init:function(aArg){},Bl:function(aSize){A.Core.P.Bl.call(this,
aSize);this.DL.H([0,0,aSize[0]-this.Akb,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DL.
S(A.aaL(A.fl.Bh));else this.DL.S(A.aaL(A.fl.Ak));this.Ip.S(this.DL.B7);this.Ip.H(
this.DL.M);this.Bc.H([].concat([0,aSize[1]-2],aSize));A.pe([this,this.WV],this);
},R:function(E){if(this.String===E)return;this.String=E;this.DL.R(E);},Ahx:function(
E){if(this.AxS===E)return;this.AxS=E;this.Ip.R(E);},Acb:function(E){this.MG=E;if(
E<10)this.ATy(2);else if(E<40)this.ATy(1);else this.ATy(0);A.pe([this,this.WV],this
);},WV:function(G){var B;while(!!this.Bc.Ah)this.HR(this.Bc.Ah);if(this.MG>1){var
Adh=this.AO0();var A2C=this.AOY();var Apw=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;
var AAk;var ALf;var Auf;var Ame=null;if(!!this.N$&&(this.N$.A0>0))Ame=this.N$.K5;
while((Adh>=A2C)&&(Adh>0)){var AtS=A._NewObject(C.Ajw,0);x1=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*(((Adh-A2C)/86400)|0))/this.MG)|0;x2=Math.round(((((B=this.
M)[2]-B[0])-this.Akb)*((((Adh-A2C)/86400)|0)+1))/this.MG)|0;while(!!Ame&&(Ame.Timestamp>=
Adh)){if(Ame.Timestamp<(Adh+86400))AtS.OA(Ame.A5,Ame.Timestamp);Ame=Ame.Ah;}var Aur=
0;if(AtS.A0>0)Aur=((((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/AtS.A0
)|0;else if(this.MG<10){Aur=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);
Auf=A._NewObject(A.acg.Text,0);Auf.H([x1,Apw,x2,Apw+Aur]);Auf.S(A.aaL(A.fl.Bh));
Auf.L(A.jb.Text);Auf.R(A.aaR(A.acf.Aff));this.J(Auf,0);}var AJ4=AtS.K5;var O=0;while(
!!AJ4){if(O>=AtS.A0)throw new Error(AWM);AAk=A._NewObject(A.acg.AL,0);AAk.L(A._GetAutoObject(
A.acj.Assessment).Qu(AJ4.A5));if(O===(AtS.A0-1))AAk.H([x1,Apw+(O*Aur),x2,this.Bc.
M[1]]);else AAk.H([x1,Apw+(O*Aur),x2,Apw+((O+1)*Aur)]);this.J(AAk,0);AJ4=AJ4.Ah;
O=O+1;}if(this.AVd){var By1=A._GetAutoObject(A.Device.Helper).Aqx(A._GetAutoObject(
A.Device.Helper).Dv());var By0=A._GetAutoObject(A.Device.Helper).Aqx(Adh);if(By1===
By0){var ALJ=A._NewObject(A.acg.Aes,0);ALJ.L(A.jb.Text);var BeE=(x1+this.Akb)+(((
x2-x1)/2)|0);ALJ.H([BeE-4,this.Bc.M[1]-4,BeE+4,this.Bc.M[1]]);ALJ.ZD(this.AuG);this.
J(ALJ,0);}}Adh=Adh-86400;if(this.Akb>0){ALf=A._NewObject(A.acg.AL,0);ALf.H([x1,Apw
,x1+this.Akb,Apw+((((B=this.M)[3]-B[1])/2)|0)]);ALf.L(A.jb.Bc);this.J(ALf,0);}}}
},Acd:function(E){this.N$=E;A.pe([this,this.WV],this);},ATy:function(E){if(this.
Akb===E)return;this.Akb=E;A.pe([this,this.WV],this);},Dg:function(E){if(this.KX===
E)return;this.KX=E;this.DL.L(E);this.Ip.L(E);},AOY:function(){var B;return this.
AO0()-(((((B=this.MG)<0)?B+0x100000000:B)-1)*86400);},AO0:function(){return A._GetAutoObject(
A.Device.Converter).AhT();},Bob:function(E){if(this.AVd===E)return;this.AVd=E;A.
pe([this,this.WV],this);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.
acg.Text._Init.call(this.DL={I:this},0);A.acg.Text._Init.call(this.Ip={I:this},0
);A.acg.AL._Init.call(this.Bc={I:this},0);C.Ax2._Init.call(this.AuG={I:this},0);
this.__proto__=C.AhC;this.H(BD);this.As(false);this.DL.H(AHT);this.DL.Hp(5);this.
DL.A6(0x11);this.DL.L(A.jb.Text);this.Ip.H(AHT);this.Ip.Hp(5);this.Ip.A6(0x14);this.
Ip.L(A.jb.Text);this.Bc.H(AWN);this.Bc.L(A.jb.Bc);this.KX=A.jb.Text;this.AuG.H(AWO
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
null,_className:"Application::AssessmentRecord"};C.Ajw={K5:null,M4:null,A0:0,OA:
function(A8,Ql){var Hj;Hj=A._NewObject(C.A5I,0);Hj.A5=A8;Hj.Timestamp=Ql;if(!this.
K5){this.K5=Hj;this.M4=Hj;this.A0=1;}else{this.M4.Ah=Hj;this.M4=Hj;this.A0=this.
A0+1;}},_Init:function(aArg){this.__proto__=C.Ajw;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
K5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Ej={Y:null,Ay:null,Init:function(
aArg){A.pe([this,this.MT],this);},DF:function(G){var B;var Fh=0;var X=this.AV;switch(
this.Cr.CP){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;
default:;}X=this.QL(X,Fh,0x414);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))
this.Y.HK(X,true,null,null);this.DK(this);},Al7:function(G){A._GetAutoObject(C.A7
).FB();},ApR:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null).Agy)A.
pe((C.Cp.isPrototypeOf(B=this.AV)?B:null).Agy,this);},Fj:function(G){var B;this.
Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.
Y.Br[1]);},DK:function(G){var B;var G0=(C.Cp.isPrototypeOf(B=this.AV)?B:null);if(
!!G0){this.N.Hz(A.jV);this.N.CS(G0.AxV);this.N.Jj.CZ(255);this.N.GX.CZ(G0.Axr);this.
N.AFs(G0.Avv);this.N.AnE(G0.AmY);this.N.C3(G0.AQw);this.N.C4(G0.Are);G0.A3H(this
);}},MT:function(s){this.DK(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);
A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.
__proto__=C.Ej;this.Background.H(Rr);this.Background.L(A.jb.CU);this.N.H(U7);this.
N.As(false);this.N.Z(true);this.Y.H(Fe);this.Y.JZ(1);this.Ay.H(Ix);this.J(this.Y
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fj];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y._ReInit();this.Ay._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"
};C.AUi={NL:null,ATd:null,Ad7:null,VQ:null,GW:null,PopupTimeout:null,Aci:null,AgJ:
null,PopupIdToString:null,AtN:null,Text:A.jV,AkJ:A.jV,AKm:A.jV,Ak5:0,ALt:-1,AzG:-
1,AKY:0,AUk:0,A2M:false,CQ:function(){this.A_6(this.PopupIdToString.BT(this.AUk)
);},Init:function(aArg){this.BpF(this);},Bhr:function(G){var B;if(this.Ak5>0){this.
A$i((this.Ak5/1000)|0);this.PopupTimeout.WQ(0);this.PopupTimeout.PZ(1000);this.PopupTimeout.
StartTimer(this);}else this.PopupTimeout.AxR(this);},Bhn:function(G){var M8=this.
Text;var Af1=this.AkJ;var AKW=A.abi(16,A.jV,null);var index=0;var AzB=0;while(Af1
!==A.jV){AzB=Af1.indexOf(A.Device.PopupParamSeparator,0);if(AzB!==-1){AKW.Set(index
,A.ab1(Af1,AzB,(Af1.length-AzB)+1));Af1=A.ab1(Af1,0,AzB+1);index=index+1;if(index>=
16){A.ab5("%s",(AWP+Af1)+AWQ);Af1=A.jV;}}else{AKW.Set(index,Af1);Af1=A.jV;}}index=
0;while(index<M8.length){if((M8.charCodeAt(index)||0)===0x7B){var Bee=M8.indexOf(
String.fromCharCode(0x7D),index);if(Bee===-1){A.ab5("%s",(((AWR+M8)+AWS)+index.toFixed(
))+Ald);index=M8.length;}else{var Bf8=(Bee-index)-1;var A4h=A.abW(M8,index+1,Bf8
);var AKV=A.wz(A4h,-1,10);M8=A.ab1(M8,index,Bf8+2);if(A4h===AWT)this.Bot(index);
else if(((AKV>0)&&(AKV<=16))&&(this.AkJ!==A.jV)){M8=A.abU(M8,AKW.Get(AKV-1),index
);if(this.A2M===true)this.Bos(A.wz(AKW.Get(AKV-1),0,10));}else A.ab5("%s",(AWU+A4h
)+AWV);}}index=index+1;}this.Bor(M8);},CD:function(G){A.pe([this,this.Bhr],this);
},Ai:function(Ae){var B;this.Ad7.H(A.aaT(this.GW.Dd(),Ah0));this.VQ.H(A.aaT(this.
GW.Dd(),Ah0));if(!!this.NL){this.NL.H(A.abM(this.NL.M,this.GW.M[0]));this.NL.H(A.
abO(this.NL.M,this.GW.M[3]+10));this.NL.H(A.abL(this.NL.M,(B=this.GW.M)[2]-B[0])
);this.NL.H(A.abI(this.NL.M,8));this.Ad7.H(A.abh(A.aaT(this.GW.Dd(),Ah0),AHU));this.
VQ.H(A.abh(A.aaT(this.GW.Dd(),Ah0),AHU));}else{this.Ad7.H(A.aaT(this.GW.Dd(),Ah0
));this.VQ.H(A.aaT(this.GW.Dd(),Ah0));}},DF:function(G){var JH=(A.Core.BF.isPrototypeOf(
G)?G:null);if((JH.CP===4)&&((this.VQ.M[1]+this.M[1])<this.M[1])){this.GW.H(A.abO(
this.GW.M,this.GW.M[1]+28));this.Am();}else if((JH.CP===5)&&((this.VQ.M[3]+this.
M[1])>this.N.M[1])){this.GW.H(A.abO(this.GW.M,this.GW.M[1]-28));this.Am();}if((JH.
CP===6)&&!!this.D_().CF)this.D_().AFB(1);else if((JH.CP===7)&&!!this.D_().Ca)this.
D_().AFB(3);},H1:function(G){switch(this.D_().Ahn){case 1:this.Al7(this);break;case
3:this.ApR(this);break;case 2:this.AAS(this);break;case 0:break;default:A.ab5("%s%e"
,AWW,this.D_().Ahn);}},Al7:function(G){var B;(B=this.D_().CF)?B[1].call(B[0],this
):null;},ApR:function(G){var B;(B=this.D_().Ca)?B[1].call(B[0],this):null;},AAS:
function(G){var B;(B=this.D_().Ce)?B[1].call(B[0],this):null;},LU:function(G){this.
N.IS.L((this.N.IS.AQ&0x00FFFFFF)|(100<<24));},E4:function(G){var B;this.PopupTimeout.
AxR(this);},A_6:function(E){if(this.Text===E)return;this.Text=E;A.pe([this,this.
Bhn],this);},BBq:function(G){var B;this.A$i(this.AzG-1);if(this.AzG<=0){this.PopupTimeout.
AxR(this);(B=this.ATd)?B[1].call(B[0],this):null;}},A_8:function(E){if(this.Ak5===
E)return;this.Ak5=E;A.pe([this,this.Bhr],this);},A_T:function(E){if(this.AkJ===E
)return;this.AkJ=E;A.pe([this,this.Bhn],this);},Bor:function(E){if(this.AKm===E)
return;this.AKm=E;this.ABK(this);this.By8(this);},ABK:function(G){if((this.AzG!==-
1)&&(this.ALt!==-1)){var BzX=this.AtN.Format(AWX);this.GW.R(A.abU(this.AKm,BzX,this.
ALt));}else this.GW.R(this.AKm);this.GW.H(AHV);},Bot:function(E){if(this.ALt===E
)return;this.ALt=E;this.ABK(this);},A$i:function(E){if(this.AzG===E)return;this.
AzG=E;this.AtN.AF6(E);A.pe([this,this.ABK],this);},By8:function(G){this.GW.Dd();
if(this.GW.M[1]<=this.M[1])this.GW.H(A.abO(this.GW.M,28));this.Am();},A$k:function(
E){if(this.A2M===E)return;this.A2M=E;if(E===true)A.pe([this,this.BB2],this);},BB2:
function(G){if(!this.NL){this.NL=A._NewObject(A.acs.ADK,0);this.NL.Gb(0);this.NL.
EV(100);this.NL.OnSetAppearance(this.Aci);this.J(this.NL,0);this.AhF(this.NL,this.
GW);}this.NL.Bx(this.AKY);},Bos:function(E){if(this.AKY===E)return;this.AKY=E;if(
!!this.NL)this.NL.Bx(this.AKY);},BpF:function(G){var B;this.N.CZ(0);this.AgJ.An1(
this);},Bn2:function(E){if(this.AUk===E)return;this.AUk=E;},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.Ad7={I:this},0);A.acg.BW._Init.
call(this.VQ={I:this},0);A.acg.Text._Init.call(this.GW={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.acs.ADL._Init.call(this.Aci={I:this},
0);A.acl.Gn._Init.call(this.AgJ={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bs._Init.call(this.AtN={I:this},0);this.
__proto__=C.AUi;var B;this.H(Cf);this.Background.H(Fe);this.Background.L(0x88FFFFFF
);this.Background.Z(false);this.Ek.As(false);this.Ek.Z(false);this.Ad7.H(AHW);this.
Ad7.L(A.jb.CK);this.VQ.H(AHW);this.VQ.Nu(2);this.VQ.L(A.jb.Text);this.GW.H(AHV);
this.GW.Hp(10);this.GW.Je(true);this.GW.Bop(0);this.GW.Lv(true);this.GW.L(A.jb.Text
);this.PopupTimeout.PZ(0);this.Aci.A$b(0);this.Aci.A_$(A.jb.AV);this.Aci.A__(0);
this.Aci.AGj(AHD);this.AgJ.HQ(1);this.AgJ.B3=255;this.AgJ.Cx=0;this.J5(this.Ek,-
1);this.J(this.Ad7,0);this.J(this.VQ,0);this.J(this.GW,0);this.GW.S(A.aaL(A.fl.Af
));this.PopupTimeout.MK=[this,this.BBq];this.Aci.A$a(A.aaL(A.ach.N1));this.Aci.A_9(
A.aaL(A.ach.N1));this.AgJ.Q=[B=this.N,B.Aws,B.A0M];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Ad7._Done();this.VQ._Done();this.GW._Done();this.PopupTimeout.
_Done();this.Aci._Done();this.AgJ._Done();this.PopupIdToString._Done();this.AtN.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Ad7._ReInit();this.VQ._ReInit();this.GW._ReInit();this.PopupTimeout._ReInit();this.
Aci._ReInit();this.AgJ._ReInit();this.PopupIdToString._ReInit();this.AtN._ReInit(
);this.GW.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.NL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ATd)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.VQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.PopupTimeout)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aci).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AgJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AtN)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"};C.My={Ai:function(Ae
){C.Cp.Ai.call(this,Ae);var FT=A.jb.CK;var GZ=A.jb.Text;if(this.Hn){FT=A.jb.Text;
GZ=A.jb.Bm;}if(!this.LN){this.Background.L(FT);this.V.L(A.jb.Am8);}else if(this.
Qy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.My;},_className:"Application::DarkThemeMenuItem"
};C.Ann={AdG:0,_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.
Ann;},_className:"Application::MenuItemPopUp"};C.OverlayMenu={AaQ:function(G){A.
_GetAutoObject(A.Device.Device).Dw(0);},Lr:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=[this,this.A3I];this.BQ.Ce=null;this.BQ.CF=[this,this.AaQ];this.
BQ.CS(A.aaR(A.acf.Ok));this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.AeD));}return this.
BQ;},A3I:function(G){var B;if(!!(C.Cp.isPrototypeOf(B=this.AV)?B:null))(C.Cp.isPrototypeOf(
B=this.AV)?B:null).H1(this);},CD:function(G){},AIZ:function(s){this.CD(s);},E4:function(
G){},AyW:function(s){this.E4(s);},_Init:function(aArg){C.Abs._Init.call(this,aArg
);this.__proto__=C.OverlayMenu;},_className:"Application::OverlayMenu"};C.APX={Wj:
null,YY:null,YS:null,Init:function(aArg){this.Bb(this.Wj);},Adx:function(G){var Aa=(
C.Cp.isPrototypeOf(G)?G:null);if(!Aa)return;if(Aa===this.YY)A._GetAutoObject(A.Device.
Device).AZ(6,true,A.jV,0,[this,this.BCe]);else if(Aa===this.Wj)A._GetAutoObject(
A.Device.Device).AZ(9,true,A.jV,0,[this,this.BCz]);else if(Aa===this.YS)A._GetAutoObject(
C.A7).Cb(4);else throw new Error(Ayr);A._GetAutoObject(A.Device.Device).Dw(0);},
BCe:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(
Ar.PopupState===7))A._GetAutoObject(A.Device.Device).AGG();},BCz:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===7))
A._GetAutoObject(A.Device.Device).AxI();},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.My._Init.call(this.Wj={I:this},0);C.My._Init.call(this.YY={I:this
},0);C.My._Init.call(this.YS={I:this},0);this.__proto__=C.APX;this.H(AcT);this.Wj.
H(BD);this.Wj.As(true);this.Wj.T(A.aaR(A.acf.A$0));this.Wj.Bi(true);this.YY.H(I1
);this.YY.As(true);this.YY.T(A.aaR(A.acf.A$H));this.YY.Bi(true);this.YS.H(Qf);this.
YS.As(true);this.YS.T(A.aaR(A.acf.SZ));this.YS.Bi(true);this.J(this.Wj,0);this.J(
this.YY,0);this.J(this.YS,0);this.Wj.AR=[this,this.Adx];this.YY.AR=[this,this.Adx
];this.YS.AR=[this,this.Adx];this.Init(aArg);},_Done:function(){this.__proto__=C.
OverlayMenu;this.Wj._Done();this.YY._Done();this.YS._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Wj._ReInit(
);this.YY._ReInit();this.YS._ReInit();this.Wj.T(A.aaR(A.acf.A$0));this.YY.T(A.aaR(
A.acf.A$H));this.YS.T(A.aaR(A.acf.SZ));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.Wj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeOverlayMenu"};C.GK={AaM:null,OverlayMenu:null,WY:null,A4C:null
,Lf:null,A4g:null,AkL:null,N9:null,AAq:100,Bdb:false,Init:function(aArg){var B;A.
zX([this,this.BfA],[B=A._GetAutoObject(A.Device.Device),B.Awt,B.Ay5],0);A.zX([this
,this.Bfu],[B=A._GetAutoObject(A.Device.Device),B.ASV,B.A0K],0);A.zX([this,this.
A3A],[B=A._GetAutoObject(A.Device.Device),B.Awh,B.AyY],0);A.zX([this,this.BAX],[
B=A._GetAutoObject(A.Device.Device),B.Awe,B.AyX],0);A.zX([this,this.BAY],[B=A._GetAutoObject(
A.Device.Device),B.A82,B.BbE],0);A.zX([this,this.ApS],[B=A._GetAutoObject(A.Device.
Device),B.AS6,B.A0S],0);A.zX([this,this.BfQ],[B=A._GetAutoObject(A.Device.Device
),B.Uu,B.Vc],0);A.pe([this,this.BfA],this);A.pe([this,this.Bfu],this);A.pe([this
,this.ApS],this);A.pe([this,this.BfQ],this);this.A4C.Au([B=this.WY,B.AEO,B.Zv]);
this.J(this.WY,0);this.Bb(this.WY);this.ByL(this);},Ai:function(Ae){},Bfu:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AEA){if(!this.AaM){this.AaM=A._NewObject(
C.AsC,0);this.AaM.H(A.abJ(this.AaM.M,this.WY.M.slice(0,2)));this.AaM.H(A.abO(this.
AaM.M,this.WY.M[3]-((B=this.AaM.M)[3]-B[1])));this.J(this.AaM,1);}}else{if(!!this.
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
B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu){A._GetAutoObject(C.WT).ArO(
null);this.N9.AqN(this.OverlayMenu,A._GetAutoObject(C.AxL),null,null,[B=this.OverlayMenu
,B.AyW],null,true);this.Bb(this.WY);}this.OverlayMenu=E;if(!!this.OverlayMenu){this.
N9.AkN(this.OverlayMenu,A._GetAutoObject(C.AxK),null,null,null,null,null,[B=this.
OverlayMenu,B.AIZ],null,false);this.Bb(this.N9);A._GetAutoObject(C.WT).ArO(this.
OverlayMenu.Lr());}else if(!!this.Lf){this.Bb(this.N9);A._GetAutoObject(C.WT).ArO(
this.Lf.Akr().Lr());}},Ahs:function(E){var B;if(this.Lf===E)return;if(!!this.Lf){
A._GetAutoObject(C.WT).ArO(null);this.N9.AqN(this.Lf.Akr(),A._GetAutoObject(C.Afl
),null,null,[B=this.Lf.Akr(),B.AyW],null,false);this.Bb(this.WY);}this.Lf=E;if(!
!this.Lf){this.N9.AkN(this.Lf.Akr(),A._GetAutoObject(C.Afl),null,null,null,null,
null,[this,this.Bmn],null,false);this.Bb(this.N9);A._GetAutoObject(C.WT).ArO(this.
Lf.Akr().Lr());}else if(!!this.OverlayMenu){this.Bb(this.N9);A._GetAutoObject(C.
WT).ArO(this.OverlayMenu.Lr());}},ByL:function(G){var B;var F;this.J(this.A4g,0);(
F=A._GetAutoObject(C.WT),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.WT).M)[3]-B[1]))));this.ZL(this.N9);},A3A:function(G){if(A._GetAutoObject(A.Device.
Device).AmI)switch(A._GetAutoObject(A.Device.Device).In){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A7).Acf(4);break;default:if(A._GetAutoObject(A.Device.
Device).Abd<98)A._GetAutoObject(C.A7).Cb(4);}else{this.AAq=100;this.Bdl();}},BAX:
function(G){this.Bdl();},Bdl:function(){if(!A._GetAutoObject(A.Device.Device).AmI
){if(A._GetAutoObject(A.Device.Device).Abd<=2){if(this.AAq>2)switch(A._GetAutoObject(
A.Device.Device).In){case 38:break;case 4:case 39:A._GetAutoObject(C.A7).Acf(38);
break;default:A._GetAutoObject(C.A7).Cb(38);}}else if(A._GetAutoObject(A.Device.
Device).Abd<=10){if(this.AAq>10)switch(A._GetAutoObject(A.Device.Device).In){case
39:break;case 4:case 38:A._GetAutoObject(C.A7).Acf(39);break;default:A._GetAutoObject(
C.A7).Cb(39);}}else if(A._GetAutoObject(A.Device.Device).Abd<=20){if(this.AAq>20
)switch(A._GetAutoObject(A.Device.Device).In){case 39:break;case 4:case 38:A._GetAutoObject(
C.A7).Acf(39);break;default:A._GetAutoObject(C.A7).Cb(39);}}else switch(A._GetAutoObject(
A.Device.Device).In){case 38:case 4:case 39:A._GetAutoObject(C.A7).FB();break;default:;
}this.AAq=A._GetAutoObject(A.Device.Device).Abd;}},BAY:function(G){switch(A._GetAutoObject(
A.Device.Device).AqA){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).AZ(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AnB(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).AZ(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AnB(0
);}break;default:A.ab5("%s",AWZ+A._GetAutoObject(A.Device.Device).AqA.toFixed());
}},ApS:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Dw(0);A._GetAutoObject(C.A7).Cb(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).In===5)A._GetAutoObject(C.A7).Acf(3);break;
default:;}},BfQ:function(G){switch(A._GetAutoObject(A.Device.Device).P7.Z8){case
0:case 1:case 2:A._GetAutoObject(A.Device.Device).UB(false);break;case 5:{A._GetAutoObject(
A.Device.Device).WR(65535);A._GetAutoObject(A.Device.Device).UB(true);}break;case
3:{A._GetAutoObject(A.Device.Device).WR(255);A._GetAutoObject(A.Device.Device).UB(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).WR(16776960);A._GetAutoObject(
A.Device.Device).UB(true);}break;case 6:{A._GetAutoObject(A.Device.Device).WR(16711935
);A._GetAutoObject(A.Device.Device).UB(true);}break;default:A.ab5("%s",AW0+A._GetAutoObject(
A.Device.Device).P7.Z8.toFixed());}this.Boq(A._GetAutoObject(A.Device.Helper).ARy(
));},Bmn:function(G){var B;this.Lf.Akr().CD(this);this.Lf.BBo(this);},Boq:function(
E){if(this.Bdb===E)return;this.Bdb=E;if(E){if(A._GetAutoObject(A.Device.Device).
In===3)A._GetAutoObject(C.A7).Cb(27);else if(A._GetAutoObject(A.Device.Device).In
!==27)A._GetAutoObject(A.Device.Device).AZ(111,true,A.jV,0,null);}else if(A._GetAutoObject(
A.Device.Device).In===27)A._GetAutoObject(A.Device.Device).AZ(112,true,A.jV,0,[this
,this.A1y]);},A1y:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if((!!Ar&&(Ar.Id===112))&&(Ar.PopupState===7))A._GetAutoObject(C.A7).Acf(85);}
,Blp:function(){return this.Lf;},_Init:function(aArg){A.Core.P._Init.call(this,aArg
);C.AkL._Init.call(this.AkL={I:this},0);C.N9._Init.call(this.N9={I:this},0);this.
__proto__=C.GK;this.H(Cf);this.N9.H(Rr);this.J(this.N9,0);this.WY=A._NewObject(C.
WY,0);this.A4C=A._GetAutoObject(C.A7);this.AkL.ANO=[this,this.Blp,this.Ahs];this.
A4g=A._GetAutoObject(C.WT);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.AkL._Done();this.N9._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.AkL._ReInit();this.N9._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AaM)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WY)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.A4C)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Lf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A4g)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AkL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
N9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Abs={A$v:
null,BQ:null,N:null,Cr:null,Ane:null,Ang:null,QV:null,Anf:null,Anc:null,Ani:null
,And:null,DF:function(G){var Fh=0;var X=this.AV;switch(this.Cr.CP){case 6:Fh=2;break;
case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(X,Fh,0x14
);if(!!X)this.Bb(X);},Bcc:function(s){this.DF(s);},Al7:function(G){var D5=(A.Core.
BF.isPrototypeOf(G)?G:null);if(D5.Acp&&(this.D_().Asw===false))return;A.pe(this.
D_().CF,this);},AJa:function(s){this.Al7(s);},ApR:function(G){var D5=(A.Core.BF.
isPrototypeOf(G)?G:null);if(D5.Acp&&(this.D_().ZK===false))return;A.pe(this.D_().
Ca,this);},AJc:function(s){this.ApR(s);},H1:function(G){if(this.QV.Acp)return;},
Alo:function(s){this.H1(s);},AAS:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?
G:null);if(D5.Acp&&(this.D_().WW===false))return;A.pe(this.D_().Ce,this);},AJb:function(
s){this.AAS(s);},D_:function(){if(!!this.Lr())return this.BQ;else return this.N;
},Lr:function(){return this.BQ;},GT:function(E){this.A$v=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BF._Init.
call(this.Cr={I:this},0);A.Core.BF._Init.call(this.Ane={I:this},0);A.Core.BF._Init.
call(this.Ang={I:this},0);A.Core.BF._Init.call(this.QV={I:this},0);A.Core.BF._Init.
call(this.Anf={I:this},0);A.Core.BF._Init.call(this.Anc={I:this},0);A.Core.BF._Init.
call(this.Ani={I:this},0);A.Core.BF._Init.call(this.And={I:this},0);this.__proto__=
C.Abs;this.H([0,0,C.AsF[0],C.AsF[1]]);this.N.H(U7);this.N.As(false);this.N.Z(false
);this.Cr.Filter=147;this.Ane.Filter=26;this.Ang.Filter=28;this.QV.Filter=1;this.
Anf.Filter=27;this.Anc.Filter=44;this.Ani.Filter=9;this.And.Filter=42;this.J(this.
N,0);this.Cr.BG=[this,this.Bcc];this.Cr.D1=[this,this.Bcc];this.Ane.BG=[this,this.
AJa];this.Ane.D1=[this,this.AJa];this.Ang.BG=[this,this.AJc];this.Ang.D1=[this,this.
AJc];this.QV.BG=[this,this.Alo];this.QV.D1=[this,this.Alo];this.Anf.BG=[this,this.
AJb];this.Anf.D1=[this,this.AJb];this.Anc.BG=[this,this.AJa];this.Anc.D1=[this,this.
AJa];this.Ani.BG=[this,this.AJc];this.Ani.D1=[this,this.AJc];this.And.BG=[this,this.
AJb];this.And.D1=[this,this.AJb];},_Done:function(){this.__proto__=A.Core.P;this.
N._Done();this.Cr._Done();this.Ane._Done();this.Ang._Done();this.QV._Done();this.
Anf._Done();this.Anc._Done();this.Ani._Done();this.And._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.N._ReInit();this.Cr.
_ReInit();this.Ane._ReInit();this.Ang._ReInit();this.QV._ReInit();this.Anf._ReInit(
);this.Anc._ReInit();this.Ani._ReInit();this.And._ReInit();},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.A$v)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.BQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ane)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ang)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QV
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Anc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ani)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.And)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AxK={_Init:function(){A.acl.AG3._Init.call(this,0);this.Kn=0x22;this.Ad$=true;
this.Au_=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AxL={_Init:function(){A.acl.AG3._Init.call(this,0);this.Kn=0x22;this.Ad$=true;
this.Au_=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AVb={Si:function(){var B;var Ao=(A.acl.Afd.isPrototypeOf(B=A.acl.Aep.Si.call(this
))?B:null);if(!Ao)throw new Error(Atd);Ao.Cq.Cx=100;return Ao;},Sh:function(){var
B;var Ao=(A.acl.Axs.isPrototypeOf(B=A.acl.Aep.Sh.call(this))?B:null);if(!Ao)throw new
Error(Atd);Ao.E0.B3=100;return Ao;},_Init:function(aArg){A.acl.Aep._Init.call(this
,aArg);this.__proto__=C.AVb;},_className:"Application::ShadeTransition"};C.Am4={
Ag$:null,S4:null,HT:null,DS:null,AnimalId:-1,GroupId:-1,ADr:true,Dg:function(E){
C.BR.Dg.call(this,E);this.S4.L(E);this.HT.L(E);this.Ag$.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HT.R(A.aaR(A.acf.Aff)
);else this.HT.R(E.toFixed());},Ab$:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.S4.R(A.aaR(A.acf.Aff));else this.S4.R(E.toFixed());},DX:function(
G){},Nz:function(s){this.DX(s);},A_A:function(E){if(this.ADr===E)return;this.ADr=
E;this.S4.Z(this.ADr);this.Ag$.Z(this.ADr);},_Init:function(aArg){C.BR._Init.call(
this,aArg);A.acg.Ap._Init.call(this.Ag$={I:this},0);A.acg.Text._Init.call(this.S4={
I:this},0);A.acg.Text._Init.call(this.HT={I:this},0);C.DS._Init.call(this.DS={I:
this},0);this.__proto__=C.Am4;this.Ag$.H(AW1);this.S4.H(AW2);this.S4.A6(0x11);this.
S4.R(A.aaR(A.acf.Aff));this.HT.H(AW3);this.HT.A6(0x11);this.HT.R(A.aaR(A.acf.Aff
));this.DS.H(AW4);this.J(this.Ag$,0);this.J(this.S4,0);this.J(this.HT,0);this.J(
this.DS,0);this.Ag$.Ax(A.aaL(A.ach.AQL));this.S4.S(A.aaL(A.fl.Af));this.HT.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.BR;this.Ag$._Done();this.S4._Done(
);this.HT._Done();this.DS._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR.
_ReInit.call(this);this.Ag$._ReInit();this.S4._ReInit();this.HT._ReInit();this.DS.
_ReInit();this.S4.R(A.aaR(A.acf.Aff));this.HT.R(A.aaR(A.acf.Aff));this.S4.S(A.aaL(
A.fl.Af));this.HT.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this
,D);if((B=this.Ag$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ADB={Init:function(
aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.ArK,B.SQ
],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9k,B.AnI],0);
A.zV([this,this.Nz],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nz],[
B=A._GetAutoObject(A.Device.Helper).W,B.PX,B.EC],0);A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Helper).W,B.A9Y,B.Axo],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9b,B.Ae5],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9c,B.Uz],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.
A9f,B.Ae9],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Helper).W,B.A9j,B.
Ae$],0);A.pe([this,this.Nz],this);},Dg:function(E){C.Am4.Dg.call(this,E);this.DS.
Dg(E);},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aq6()){this.Ab$(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Ab$(-1);this.OnSetAnimalId(-1);}this.DS.
EC(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.DS.AFm(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.DS.Ae5(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.DS.Uz(A._GetAutoObject(A.Device.Helper).W.IsFever);this.DS.Ae9(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.DS.Ae$(A._GetAutoObject(A.Device.
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
A.zX([this,this.BBK],[B=A._GetAutoObject(A.Device.Device),B.ArI,B.Atu],0);},Bl:function(
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
this.Bao=E;this.Am();},BBK:function(G){this.Am();},_Init:function(aArg){C.Ds._Init.
call(this,aArg);A.acg.AL._Init.call(this.AmD={I:this},0);C.CG._Init.call(this.BU={
I:this},0);A.acg.AL._Init.call(this.Q_={I:this},0);A.acg.Ap._Init.call(this.QJ={
I:this},0);this.__proto__=C.AU_;this.H(U5);this.Background.H(U5);this.V.H(Ate);this.
V.L(A.jb.Bm);this.AmD.H(AW7);this.AmD.L(A.jb.Afy);this.Hy.H(AW8);this.BU.H(AW9);
this.BU.A6(0x12);this.BU.L(A.jb.Text);this.H9.H(AW_);this.Q_.H(AW$);this.Q_.L(A.
jb.E1);this.QJ.H(AXa);this.J(this.AmD,-2);this.J(this.BU,-1);this.J(this.Q_,0);this.
J(this.QJ,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.BU.S(A.aaL(
A.fl.EK));this.BU.AY(A.aaL(A.fl.Af));this.QJ.Ax(A.aaL(A.ach.ADR));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ds;this.AmD._Done();this.BU._Done();this.Q_.
_Done();this.QJ._Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.
call(this);this.AmD._ReInit();this.BU._ReInit();this.Q_._ReInit();this.QJ._ReInit(
);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.BU.S(A.aaL(A.fl.EK));this.
BU.AY(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
AmD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Q_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.AnX={Q:null
,Ai5:null,Init:function(aArg){var B;A.zX([this,this.Bb$],[B=A._GetAutoObject(A.Device.
Device),B.AEO,B.Bbx],0);A.pe([this,this.Bb$],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Acf:function(Alt){A._GetAutoObject(A.Device.Device).Zv(Alt
);},AKL:function(G){if(this.K&&this.K.AKL)return this.K.AKL.apply(this,arguments
);else return C.AnX.Bcg.apply(this,arguments);},Bcg:function(G){var F;if(!this.Q
){A.ab5("%s",AXb);return;}var By=null;if(this.Ai5.Contains(A._GetAutoObject(A.Device.
Device).In)){By=this.Ai5.A$t();while(!!By&&(By.An$!==A._GetAutoObject(A.Device.Device
).In))By=this.Ai5.A$t();}if(!By)By=this.BAi(A._GetAutoObject(A.Device.Device).In
);(F=this.Q,F[2].call(F[0],By));},Bb$:function(s){this.AKL(s);},BAi:function(Alt
){var By=null;switch(Alt){case 0:case 1:By=A._NewObject(C.AVh,0);break;case 2:By=
A._NewObject(C.X_,0);break;case 3:By=A._NewObject(C.AvG,0);break;case 53:By=A._NewObject(
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
AN3,0);break;case 5:By=A._NewObject(C.AVr,0);break;case 4:By=A._NewObject(C.Aeb,
0);break;case 39:By=A._NewObject(C.ANt,0);break;case 38:By=A._NewObject(C.ANM,0);
break;case 28:By=A._NewObject(C.WG,0);break;case 7:By=A._NewObject(C.AqQ,0);break;
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
))A.ab5("%s",AXd);else this.Ai5.BoT((F=this.Q,F[1].call(F[0])));A._GetAutoObject(
A.Device.Device).Zv(Alt);},FB:function(){var Bgn=3;var Bgm=this.Ai5.BoJ();if(!!Bgm
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
function(){return this;},_this:null};C.AGy={Ia:null,YE:null,Afh:null,AaT:null,ML:
null,AzM:1,RatingMode:0,RatedAttribute:0,CQ:function(){this.YE.R(this.BdT(this.RatedAttribute
));this.AKQ(this);},Ai:function(Ae){this.ML.R(A._GetAutoObject(A.Device.Helper).
MO(A.aaR(A.acf.AR$),Pc,this.AzM.toFixed()));if(this.RatingMode===1)this.ML.Z(true
);else this.ML.Z(false);},CD:function(G){var B;C.AB.CD.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);this.Ia.Gs();this.Ia.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxD(this.
Ia,5);A.zX([this,this.AKQ],[B=A._GetAutoObject(A.Device.Device),B.AS3,B.A0P],0);
A.zX([this,this.AKQ],[B=A._GetAutoObject(A.Device.Helper).W,B.PX,B.EC],0);A.pe([
this,this.AKQ],this);},AsN:function(G){var a=this.AKu(this.RatedAttribute);this.
BgD();this.AzM=this.AzM-1;this.Am();if(!a)this.ASg();else this.SP(a);},W3:function(
G){var a=this.Bd0(this.RatedAttribute);this.BgD();this.AzM=this.AzM+1;this.Am();
if(!a)this.A8k();else this.SP(a);},AKu:function(NB){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(NB){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AHX);},Bd0:function(NB){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(NB){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AHX);},SP:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.YE.R(this.BdT(E));this.
DK(E);this.Afh.AnN(this.Ia.Bjz(E));if(!this.AKu(E)){if(this.ARu())this.N.Ct(A.aaL(
A.ach.AeG));else this.N.Ct(null);}else this.N.Ct(A.aaL(A.ach.AeD));},BdT:function(
NB){return this.AaT.BT(NB);},BAh:function(NB){if(!!NB){var a=this.AKu(NB);if(!a)
return A.jV;else return this.BdU(a);}else return A.jV;},BAg:function(NB){if(!!NB
){var a=this.Bd0(NB);if(!a)return A.jV;else return this.BdU(a);}else return A.jV;
},ASg:function(){},A8k:function(){},A7j:function(){return null;},BdU:function(NB
){return this.AaT.LA(NB);},BgD:function(){if(!!this.RatedAttribute)this.Ia.Bpt(this.
RatedAttribute,this.Afh.A5);},AKQ:function(G){if(this.ARu())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.SP(2);this.DK(this.RatedAttribute
);this.Am();},Ady:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AkY:function(G){var a=this.AKu(this.RatedAttribute);if(!a){if(this.ARu())this.
Ady(this);}else this.ASg();},DK:function(NB){this.N.Hz(this.BAh(NB));if(!!this.N.
An6){this.N.C3(null);this.N.OW(true);}else{this.N.C3(A.aaL(A.ach.AeD));this.N.OW(
false);}this.N.CS(this.BAg(NB));if(!!this.N.An8){this.N.C4(null);this.N.OX(true);
}else{this.N.C4(this.A7j());this.N.OX(false);}},ARu:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Alh,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.YE={
I:this},0);C.Rating._Init.call(this.Afh={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.AaT={I:this},0);A.acg.Text._Init.call(this.ML={I:this},0);this.__proto__=
C.AGy;this.Background.L(A.jb.CK);this.N.Z(true);this.Dr(C.IP);this.YE.H(AXf);this.
YE.Lv(true);this.YE.L(A.jb.Text);this.Afh.H(AXg);this.ML.H(AXh);this.ML.A6(0x14);
this.ML.R(A.aaR(A.acf.AR$));this.ML.L(A.jb.Text);this.J(this.YE,0);this.J(this.Afh
,0);this.J(this.ML,0);this.Bb(this.Afh);this.N.CF=[this,this.AsN];this.N.Ce=[this
,this.AkY];this.N.Ca=[this,this.W3];this.YE.S(A.aaL(A.fl.Af));this.Afh.AR=[this,
this.W3];this.ML.S(A.aaL(A.fl.Af));this.Ia=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.YE._Done();this.Afh._Done();this.AaT._Done();
this.ML._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.YE._ReInit();this.Afh._ReInit();this.AaT._ReInit();this.ML._ReInit();this.
ML.R(A.aaR(A.acf.AR$));this.YE.S(A.aaL(A.fl.Af));this.ML.S(A.aaL(A.fl.Af));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ia)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.YE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ML)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.H3={Y:null,Gender:null,AnimalType:null,Breed:null,Jm:null,Pt:null,As3:null,B0:
null,Db:null,C$:null,CH:null,Go:null,Ay:null,KP:0,Init:function(aArg){A.zX([this
,this.Bca],this.B0.Q,0);A.pe([this,this.Bca],this);A.pe([this,this.ABp],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).ANH(this.
Y);},DF:function(G){var B;var Fh=0;var X=this.AV;switch(this.Cr.CP){case 6:Fh=2;
break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(
X,Fh,0x415);if(!!X)this.Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HK(X,true,null
,null);this.ABp(this);},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},Ae0:function(E){
if(this.KP===E)return;this.KP=E;A.abo([this,this.Awf,this.Ae0],0);},ABp:function(
G){var B;var G0=(C.Cp.isPrototypeOf(B=this.AV)?B:null);this.N.Hz(A.jV);this.N.C3(
A.aaL(A.ach.E2));this.N.CF=[this,this.AI$];if(!!G0&&!!G0.Amv){this.N.E6(A.jV);this.
N.JE.CZ(255);this.N.ArX(G0.AqY);this.N.Ct(G0.AvO);this.N.Ce=G0.Amv;}else{this.N.
E6(A.jV);this.N.Ct(null);this.N.Ce=null;}if(!!G0&&!!G0.Agy){this.N.CS(G0.AxV);this.
N.GX.CZ(G0.Axr);this.N.AnE(G0.AmY);this.N.C4(G0.Are);this.N.Ca=G0.Agy;}else this.
Aut();},Agj:function(G){A.ab5("%s",Ays);},Ay8:function(s){this.Agj(s);},Ew:function(
G){A.ab5("%s",Ays);},AI$:function(s){this.Ew(s);},Aut:function(){A.ab5("%s",Ali);
},AAK:function(G){A.ab5("%s",Ays);},AcW:function(s){this.AAK(s);},JN:function(Ag
){this.Bb(Ag);this.Y.HK(Ag,true,null,null);this.Y.VH(null,null);},ApN:function(G
){var F;this.C$.Ahw(A._GetAutoObject(A.Device.Helper).AbA((F=this.B0.Q,F[1].call(
F[0]))));},Bca:function(s){this.ApN(s);},Awf:function(){return this.KP;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Breed._Init.call(this.Breed={I:this},0);C.UZ._Init.call(this.Jm={I:this},
0);A.Device.Na._Init.call(this.Pt={I:this},0);A.Device.K2._Init.call(this.As3={I:
this},0);C.BX._Init.call(this.B0={I:this},0);C.BX._Init.call(this.Db={I:this},0);
C.AkW._Init.call(this.C$={I:this},0);C.AxG._Init.call(this.CH={I:this},0);C.AsI.
_Init.call(this.Go={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.H3;var B;this.N.Z(true);this.Dr(C.IP);this.Y.H(Fe);this.Y.JZ(1);this.KP=A._GetAutoObject(
A.Device.Helper).AbA(this.AnimalType.Q);this.B0.H(Ah1);this.B0.Aj(true);this.B0.
T(A.aaR(A.acf.Afx));this.Db.H(Ayt);this.Db.Aj(true);this.Db.T(A.aaR(A.acf.Afs));
this.C$.H(Aor);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KP));this.C$.Gb(1000);this.
C$.EV(99000);this.C$.Ahw(A._GetAutoObject(A.Device.Helper).AbA(this.AnimalType.Q
));this.CH.H(Ah2);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Go.H(AXi);
this.Go.Aj(true);this.Go.T(A.aaR(A.acf.Jm));this.Ay.H(Ayu);this.J(this.Y,0);this.
J(this.B0,0);this.J(this.Db,0);this.J(this.C$,0);this.J(this.CH,0);this.J(this.Go
,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fj];this.Gender.L6(A._GetAutoObject(A.
Device.Helper).W);this.AnimalType.L6(A._GetAutoObject(A.Device.Helper).W);this.Breed.
L6(A._GetAutoObject(A.Device.Helper).W);this.Jm.L6(A._GetAutoObject(A.Device.Helper
).W);this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CL(this.AnimalType);this.
Db.Au([B=this.Gender,B.B$,B.Cc]);this.Db.CL(this.Gender);this.C$.Au([this,this.Awf
,this.Ae0]);this.CH.Gt([this,this.D_,this.GT]);this.CH.L5([B=this.CH,B.FW]);this.
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
);this.CH._ReInit();this.Go._ReInit();this.Ay._ReInit();this.B0.T(A.aaR(A.acf.Afx
));this.Db.T(A.aaR(A.acf.Afs));this.C$.T(A.aaR(A.acf.KP));this.CH.T(A.aaR(A.acf.
Breed));this.Go.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.As3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalDataScreen"};C.
WG={Azm:false,LU:function(G){if(A._GetAutoObject(A.Device.Device).An.Ll())A._GetAutoObject(
A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).An.HM().toFixed(),
0,null);A._GetAutoObject(A.Device.Helper).W.Gs();A._GetAutoObject(A.Device.Helper
).Aqo(A._GetAutoObject(A.Device.Helper).W);},Aut:function(){this.N.CS(A.jV);this.
N.C4(A.aaL(A.ach.ADV));this.N.Ca=[this,this.Ay8];},CD:function(G){if(!this.Azm){
this.Azm=true;A.pe([this,this.AcW],this);}else C.ArB.CD.call(this,G);},AAK:function(
G){A._GetAutoObject(C.A7).Cb(49);},_Init:function(aArg){C.ArB._Init.call(this,aArg
);this.__proto__=C.WG;this.J5(this.Ay,-1);},_className:"Application::NewAnimalManualDataScreen"
};C.IP={_Init:function(aArg){C.ADB._Init.call(this,aArg);this.__proto__=C.IP;this.
A_A(false);},_className:"Application::HeaderSelectedAnimalId"};C.I_={Filter:null
,Gender:null,AnimalType:null,Transponder:null,El:null,Y:null,P9:null,Tb:null,Og:
null,Tc:null,Ny:null,OB:null,RW:null,OC:null,RX:null,NO:null,Lh:null,Jw:null,K0:
null,ME:null,Yy:null,Td:null,RY:null,Ay:null,Ax8:0,Ax7:0,AuQ:0,AuP:0,ArA:0,AsU:0
,Avr:0,Avs:0,Am9:true,Amy:false,Aof:false,Init:function(aArg){A.zX([this,this.Avx
],this.Lh.Q,0);A.zX([this,this.AuV],this.Jw.Q,0);A.zX([this,this.BqD],this.K0.Q,
0);A.zX([this,this.BkU],this.ME.Q,0);A.zX([this,this.Bq7],this.Ny.Q,0);A.zX([this
,this.Bq6],this.Og.Q,0);A.zX([this,this.BhJ],this.NO.Q,0);A.zX([this,this.BhI],this.
OC.Q,0);this.Bb(this.P9);},DF:function(G){var Fh=0;var X=this.AV;switch(this.Cr.
CP){case 6:Fh=2;break;case 7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;
}X=this.QL(X,Fh,0x414);if(!!X)this.Bb(X);this.M0(this);},CD:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter)this.Bk(A._GetAutoObject(A.Device.Device).An.Filter.E$(
));else this.Bk(A._NewObject(A.Device.Filter,0));},Ew:function(G){A._GetAutoObject(
C.A7).FB();},A3w:function(G){var EE=(C.Aet.isPrototypeOf(G)?G:null);if(!EE)return;
var Aw=this.Filter.DM(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this
,this.Fo,this.Fs],0);}else{if(EE.Er===11){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===12){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else if(EE.Er===8){Aw=A._NewObject(A.Device.BoolFilterCriterion
,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Aw)?Aw:null).A5=true;}else A.ab5("%s",AHY+EE.Er.toFixed());if(!!Aw){this.Filter.
CX(Aw);A.abo([this,this.Fo,this.Fs],0);}}},BAV:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(this.Filter);A._GetAutoObject(C.A7).FB();},AAI:function(G){var EE=(
C.Am3.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.DM(EE.Er,EE.Operator
);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fo,this.Fs],0);}else{if(EE.Er===7
){Aw=A._NewObject(A.Device.GenderFilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;
}else if(EE.Er===14){Aw=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;}else if((EE.Er===22)||(EE.Er===26)){var A1v=A._NewObject(
A.Device.UInt64FilterCriterion,0);A1v.EJ=EE.Er;A1v.Operator=0;Aw=A1v;}else A.ab5(
"%s",AHY+EE.Er.toFixed());if(!!Aw){this.Filter.CX(Aw);A.abo([this,this.Fo,this.Fs
],0);}}},A_v:function(E){if(this.Avr===E)return;this.Avr=E;A.abo([this,this.Bly,
this.A_v],0);},A_w:function(E){if(this.Avs===E)return;this.Avs=E;A.abo([this,this.
Blz,this.A_w],0);},Avx:function(G){var F;this.A_w((F=this.Lh.Q,F[1].call(F[0])));
var Aw=this.Filter.DM(7,0);if(!!Aw){var Az4=(A.Device.GenderFilterCriterion.isPrototypeOf(
Aw)?Aw:null);if(!!Az4)Az4.A5=this.Avs;else A.ab5("%s",AfJ);}},AuV:function(G){var
F;this.A_v((F=this.Jw.Q,F[1].call(F[0])));var Aw=this.Filter.DM(14,0);if(!!Aw){var
Ve=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ve)Ve.A5=
this.Avr;else A.ab5("%s",AfJ);}},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},A$c:function(
E){if(this.AsU===E)return;this.AsU=E;A.abo([this,this.Bma,this.A$c],0);},BqD:function(
G){var F;this.A$c((F=this.K0.Q,F[1].call(F[0])));var Aw=this.Filter.DM(22,1);if(
!!Aw){var Ajd=(A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!Ajd
)switch(this.AsU){case 1:Ajd.Operator=5;break;case 0:Ajd.Operator=0;break;default:
A.ab5("%s%e",AHZ,this.AsU);}else A.ab5("%s",AfJ);}},A_J:function(E){if(this.ArA===
E)return;this.ArA=E;A.abo([this,this.BlO,this.A_J],0);},BkU:function(G){var F;this.
A_J((F=this.ME.Q,F[1].call(F[0])));var Aw=this.Filter.DM(26,1);if(!!Aw){var At9=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!At9)switch(this.ArA
){case 1:At9.Operator=5;break;case 0:At9.Operator=0;break;default:A.ab5("%s%e",AHZ
,this.ArA);}else A.ab5("%s",AfJ);}},Bk:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.P9.Bk([this,this.Fo,this.Fs]);this.Tb.
Bk([this,this.Fo,this.Fs]);this.Og.Bk([this,this.Fo,this.Fs]);this.Tc.Bk([this,this.
Fo,this.Fs]);this.Ny.Bk([this,this.Fo,this.Fs]);this.OB.Bk([this,this.Fo,this.Fs
]);this.RW.Bk([this,this.Fo,this.Fs]);this.OC.Bk([this,this.Fo,this.Fs]);this.RX.
Bk([this,this.Fo,this.Fs]);this.NO.Bk([this,this.Fo,this.Fs]);this.Lh.Bk([this,this.
Fo,this.Fs]);this.Jw.Bk([this,this.Fo,this.Fs]);this.K0.Bk([this,this.Fo,this.Fs
]);this.ME.Bk([this,this.Fo,this.Fs]);this.Yy.Bk([this,this.Fo,this.Fs]);this.Td.
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
))?B:null);if(!!Az4)this.Lh.Bx(this.Gender.DZ(Az4.A5));var Ve=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DM(14,0))?B:null);if(!!Ve)this.Jw.Bx(this.AnimalType.
DZ(Ve.A5));var Ajd=this.Filter.DM(22,1);if(!!Ajd){if(!Ajd.Operator)this.K0.Bx(0);
else this.K0.Bx(1);}var At9=this.Filter.DM(26,1);if(!!At9){if(!At9.Operator)this.
ME.Bx(0);else this.ME.Bx(1);}},Fs:function(Aq){this.Bk(Aq);},AGg:function(E){if(
this.Ax8===E)return;this.Ax8=E;A.abo([this,this.A9Q,this.AGg],0);},AGf:function(
E){if(this.Ax7===E)return;this.Ax7=E;A.abo([this,this.A9P,this.AGf],0);},Bq7:function(
G){var F;this.AGg((F=this.Ny.Q,F[1].call(F[0])));var Aw=this.Filter.DM(1,3);if(!
!Aw){var ABN=(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!ABN)
ABN.A5=this.Ax8;else A.ab5("%s",AfJ);}},Bq6:function(G){var F;this.AGf((F=this.Og.
Q,F[1].call(F[0])));var Aw=this.Filter.DM(1,2);if(!!Aw){var ABN=(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!ABN)ABN.A5=this.Ax7;else A.ab5("%s",AfJ);}},Be7:
function(G){var EE=(C.AjK.isPrototypeOf(G)?G:null);if(!EE)return;var Aw=this.Filter.
DM(EE.Er,EE.Operator);if(!!Aw){this.Filter.Nw(Aw);A.abo([this,this.Fo,this.Fs],0
);}else{if(EE===this.Tb){Aw=A._NewObject(A.Device.Int32FilterCriterion,0);Aw.EJ=
EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Aw)?Aw:
null).A5=this.Ax7;this.Bb(this.Og);}else if(EE===this.Tc){Aw=A._NewObject(A.Device.
Int32FilterCriterion,0);Aw.EJ=EE.Er;Aw.Operator=EE.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Aw)?Aw:null).A5=this.Ax8;this.Bb(this.Ny);}if(!!Aw){this.Filter.CX(
Aw);A.abo([this,this.Fo,this.Fs],0);}}A.pe([this,this.A47],this);},A47:function(
G){var A3e=!!this.Filter.DM(this.Og.Er,this.Og.Operator);var A48=!!this.Filter.DM(
this.Ny.Er,this.Ny.Operator);A._GetAutoObject(A.Device.Helper).J6(this.Tb,this.Aof
);A._GetAutoObject(A.Device.Helper).J6(this.Tc,this.Aof);A._GetAutoObject(A.Device.
Helper).J6(this.Og,A3e);A._GetAutoObject(A.Device.Helper).J6(this.Ny,A48);},M0:function(
G){var B;this.Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},BBR:function(G){A.pe([this,this.Fj],this);A.pe([this,this.
M0],this);},BAS:function(G){this.Asg(!this.Aof);if(this.Aof===false){var Aw=this.
Filter.DM(this.P9.Er,this.P9.Operator);while(!!Aw){this.Filter.Nw(Aw);Aw=this.Filter.
DM(this.P9.Er,this.P9.Operator);}A.abo([this,this.Fo,this.Fs],0);}},Asg:function(
E){if(this.Aof===E)return;this.Aof=E;A.abo([this,this.A9O,this.Asg],0);A.pe([this
,this.A47],this);},AE9:function(E){if(this.AuQ===E)return;this.AuQ=E;A.abo([this
,this.A8T,this.AE9],0);},AE7:function(E){if(this.AuP===E)return;this.AuP=E;A.abo([
this,this.A8R,this.AE7],0);},BhJ:function(G){var F;this.AE9((F=this.NO.Q,F[1].call(
F[0])));var Aw=this.Filter.DM(4,2);if(!!Aw){var AfW=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Aw)?Aw:null);if(!!AfW){var AaY=A._GetAutoObject(A.Device.Helper).ZY(
this.AuQ-1);AfW.A5=AaY;}else A.ab5("%s",AfJ);}},BhI:function(G){var F;this.AE7((
F=this.OC.Q,F[1].call(F[0])));var Aw=this.Filter.DM(4,3);if(!!Aw){var AfW=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Aw)?Aw:null);if(!!AfW){var AaY=A._GetAutoObject(
A.Device.Helper).ZY(this.AuP);AfW.A5=AaY;}else A.ab5("%s",AfJ);}},ALw:function(G
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
this,this.ALw],this);},BAR:function(G){this.ArR(!this.Amy);if(this.Amy===false){
var Aw=this.Filter.DM(this.OB.Er,this.OB.Operator);while(!!Aw){this.Filter.Nw(Aw
);Aw=this.Filter.DM(this.OB.Er,this.OB.Operator);}A.abo([this,this.Fo,this.Fs],0
);}},Bny:function(E){if(this.Am9===E)return;this.Am9=E;A.pe([this,this.ALw],this
);},Fo:function(){return this.Filter;},Blz:function(){return this.Avs;},Bly:function(
){return this.Avr;},Bma:function(){return this.AsU;},BlO:function(){return this.
ArA;},A9Q:function(){return this.Ax8;},A9P:function(){return this.Ax7;},A9O:function(
){return this.Aof;},A8T:function(){return this.AuQ;},A8R:function(){return this.
AuP;},A8Q:function(){return this.Amy;},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.
AnimalType={I:this},0);C.AB6._Init.call(this.Transponder={I:this},0);C.AB6._Init.
call(this.El={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.ACg._Init.call(
this.P9={I:this},0);C.AjK._Init.call(this.Tb={I:this},0);C.Abz._Init.call(this.Og={
I:this},0);C.AjK._Init.call(this.Tc={I:this},0);C.Abz._Init.call(this.Ny={I:this
},0);C.ACg._Init.call(this.OB={I:this},0);C.AjK._Init.call(this.RW={I:this},0);C.
AC5._Init.call(this.OC={I:this},0);C.AjK._Init.call(this.RX={I:this},0);C.AC5._Init.
call(this.NO={I:this},0);C.Am3._Init.call(this.Lh={I:this},0);C.Am3._Init.call(this.
Jw={I:this},0);C.Am3._Init.call(this.K0={I:this},0);C.Am3._Init.call(this.ME={I:
this},0);C.QH._Init.call(this.Yy={I:this},0);C.QH._Init.call(this.Td={I:this},0);
C.QH._Init.call(this.RY={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.I_;var B;this.N.Z(true);this.N.CS(A.aaR(A.acf.A5G));this.Dr(C.APK);this.Gender.
Au(this.Avs);this.AnimalType.Au(this.Avr);this.Transponder.Au(this.AsU);this.El.
Au(this.ArA);this.Y.H(Fe);this.Y.JZ(1);this.P9.H(I1);this.P9.Aj(true);this.P9.T(
A._GetAutoObject(A.Device.Helper).Am1(0,1));this.P9.Nq(1);this.Tb.H(Qf);this.Tb.
Aj(true);this.Tb.T(A.aaR(A.acf.AEs));this.Tb.Nq(1);this.Tb.OV(2);this.Og.H(Aan);
this.Og.Nq(1);this.Og.OV(2);this.Og.AF_(A.aaR(A.acf.GN));this.Tc.H(Alj);this.Tc.
Aj(true);this.Tc.T(A.aaR(A.acf.AHr));this.Tc.Nq(1);this.Tc.OV(3);this.Ny.H(Aos);
this.Ny.Aj(true);this.Ny.Nq(1);this.Ny.OV(3);this.Ny.AF_(A.aaR(A.acf.GN));this.OB.
H(AXj);this.OB.Aj(true);this.OB.T(A.aaR(A.acf.RU));this.OB.Nq(4);this.RW.H(AXk);
this.RW.Aj(true);this.RW.T(A.aaR(A.acf.AEs));this.RW.Nq(4);this.RW.OV(3);this.OC.
H(AXl);this.OC.Nq(4);this.OC.OV(3);this.OC.A_O(2);this.RX.H(AXm);this.RX.Aj(true
);this.RX.T(A.aaR(A.acf.AHr));this.RX.Nq(4);this.RX.OV(2);this.NO.H(AXn);this.NO.
Aj(true);this.NO.Nq(4);this.NO.OV(2);this.NO.A_O(3);this.Lh.H(Atf);this.Lh.Aj(true
);this.Lh.Nq(7);this.Lh.Ahy(0);this.Lh.OV(0);this.Jw.H(U7);this.Jw.Aj(true);this.
Jw.Nq(14);this.Jw.Ahy(0);this.Jw.OV(0);this.K0.H(U7);this.K0.Aj(true);this.K0.Nq(
22);this.K0.Ahy(0);this.K0.OV(1);this.ME.H(U7);this.ME.Aj(true);this.ME.Nq(26);this.
ME.Ahy(0);this.ME.OV(1);this.Yy.H(U7);this.Yy.Aj(true);this.Yy.Nq(11);this.Yy.Ahy(
0);this.Yy.OV(0);this.Td.H(U7);this.Td.Aj(true);this.Td.Nq(12);this.Td.Ahy(0);this.
Td.OV(0);this.RY.H(U7);this.RY.Aj(true);this.RY.Nq(8);this.RY.Ahy(0);this.RY.OV(
0);this.Ay.H(Ix);this.J(this.Y,0);this.J(this.P9,0);this.J(this.Tb,0);this.J(this.
Og,0);this.J(this.Tc,0);this.J(this.Ny,0);this.J(this.OB,0);this.J(this.RW,0);this.
J(this.OC,0);this.J(this.RX,0);this.J(this.NO,0);this.J(this.Lh,0);this.J(this.Jw
,0);this.J(this.K0,0);this.J(this.ME,0);this.J(this.Yy,0);this.J(this.Td,0);this.
J(this.RY,0);this.J(this.Ay,0);this.N.CF=[this,this.Ew];this.N.Ca=[this,this.BAV
];this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.BBR];this.P9.AR=[this,this.BAS
];this.P9.Au([this,this.A9O,this.Asg]);this.Tb.AR=[this,this.Be7];this.Og.Gt([this
,this.D_,this.GT]);this.Og.Au([this,this.A9P,this.AGf]);this.Tc.AR=[this,this.Be7
];this.Ny.Gt([this,this.D_,this.GT]);this.Ny.Au([this,this.A9Q,this.AGg]);this.OB.
AR=[this,this.BAR];this.OB.Au([this,this.A8Q,this.ArR]);this.RW.AR=[this,this.Be6
];this.OC.Gt([this,this.D_,this.GT]);this.OC.Au([this,this.A8R,this.AE7]);this.RX.
AR=[this,this.Be6];this.NO.Gt([this,this.D_,this.GT]);this.NO.Au([this,this.A8T,
this.AE9]);this.Lh.AR=[this,this.AAI];this.Lh.Au([B=this.Gender,B.B$,B.Cc]);this.
Lh.CL(this.Gender);this.Jw.AR=[this,this.AAI];this.Jw.Au([B=this.AnimalType,B.B$
,B.Cc]);this.Jw.CL(this.AnimalType);this.K0.AR=[this,this.AAI];this.K0.Au([B=this.
Transponder,B.B$,B.Cc]);this.K0.CL(this.Transponder);this.ME.AR=[this,this.AAI];
this.ME.Au([B=this.El,B.B$,B.Cc]);this.ME.CL(this.El);this.Yy.AR=[this,this.A3w];
this.Td.AR=[this,this.A3w];this.RY.AR=[this,this.A3w];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Gender._Done();this.AnimalType._Done();this.Transponder.
_Done();this.El._Done();this.Y._Done();this.P9._Done();this.Tb._Done();this.Og._Done(
);this.Tc._Done();this.Ny._Done();this.OB._Done();this.RW._Done();this.OC._Done(
);this.RX._Done();this.NO._Done();this.Lh._Done();this.Jw._Done();this.K0._Done(
);this.ME._Done();this.Yy._Done();this.Td._Done();this.RY._Done();this.Ay._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.El._ReInit();
this.Y._ReInit();this.P9._ReInit();this.Tb._ReInit();this.Og._ReInit();this.Tc._ReInit(
);this.Ny._ReInit();this.OB._ReInit();this.RW._ReInit();this.OC._ReInit();this.RX.
_ReInit();this.NO._ReInit();this.Lh._ReInit();this.Jw._ReInit();this.K0._ReInit(
);this.ME._ReInit();this.Yy._ReInit();this.Td._ReInit();this.RY._ReInit();this.Ay.
_ReInit();this.N.CS(A.aaR(A.acf.A5G));this.Tb.T(A.aaR(A.acf.AEs));this.Og.AF_(A.
aaR(A.acf.GN));this.Tc.T(A.aaR(A.acf.AHr));this.Ny.AF_(A.aaR(A.acf.GN));this.OB.
T(A.aaR(A.acf.RU));this.RW.T(A.aaR(A.acf.AEs));this.RX.T(A.aaR(A.acf.AHr));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.P9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Og)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ny)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ME)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Td)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A$P={ZZ:null,BoT:
function(Bym){var EF=A._NewObject(C.A$O,0);EF.AB=Bym;EF.MF=this.ZZ;this.ZZ=EF;},
A$t:function(){var Vv=null;if(!!this.ZZ){Vv=this.ZZ.AB;this.ZZ=this.ZZ.MF;}return Vv;
},Contains:function(Alt){var EF=this.ZZ;while(!!EF){if(EF.AB.An$===Alt)return true;
EF=EF.MF;}return false;},BoJ:function(){if(!!this.ZZ)return this.ZZ.AB;else return null;
},_Init:function(aArg){this.__proto__=C.A$P;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.ZZ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A$O={AB:null,
MF:null,_Init:function(aArg){this.__proto__=C.A$O;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MF)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AMu={ASg:function(){A._GetAutoObject(
A.Device.Helper).AxD(this.Ia,0);A._GetAutoObject(C.A7).FB();},A8k:function(){this.
Ia.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A7).FB();},A7j:function(
){return A.aaL(A.ach.Am7);},_Init:function(aArg){C.AGy._Init.call(this,aArg);this.
__proto__=C.AMu;this.Dr(C.IP);},_className:"Application::AnimalActionRateScreen"
};C.AMq={WM:function(G){this.Agz();this.I8(A.aaR(A.acf.AVH),[this,this.AT6],5);this.
I8(A.aaR(A.acf.A59),[this,this.BmA],4);this.I8(A.aaR(A.acf.AGx),[this,this.ATR],
3);this.I8(A.aaR(A.acf.An5),[this,this.Aw2],2);this.I8(A.aaR(A.acf.AdX),[this,this.
AFa],1);this.I8(A.aaR(A.acf.AuL),[this,this.AE6],0);A._GetAutoObject(C.BS).Fz();
A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DF:function(G){},AbB:function(){return C.ANj;},AbC:function(
){return C.ADD;},Ra:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MC();var
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
);}},Ra:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MC();var AzE=A._NewObject(
A.Device.BoolFilterCriterion,0);AzE.Initialize(9,0,true,true);Bf.CX(AzE);A._GetAutoObject(
A.Device.Device).An.Bk(Bf);},HS:function(G){C.GJ.HS.call(this,G);this.N.OW(false
);this.N.OX(false);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.ANK;this.Dr(C.APb);this.Dl(A.aaR(A.acf.A8r));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8r));},_className:"Application::ControlListScreen"
};C.Aet={Filter:null,Er:0,Jh:10,TableId:0,Operator:1,CQ:function(){var F;this.TB((
F=this.Filter,F[1].call(F[0])).DM(this.Er,this.Operator));},Bl:function(aSize){C.
Cp.Bl.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[0]-(2*this.Jh),aSize[1]]));
},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.Filter)A.z$([this,this.
Mj],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mj],E,0);A.pe([this,this.
Mj],this);},Mj:function(G){var F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[
0])))this.TB((F=this.Filter,F[1].call(F[0])).DM(this.Er,this.Operator));else this.
TB(null);},Ahy:function(E){if(this.TableId===E)return;this.TableId=E;A.pe([this,
this.Mj],this);},Nq:function(E){if(this.Er===E)return;this.Er=E;A.pe([this,this.
Mj],this);},TB:function(AI){if(!!AI)this.T(A._GetAutoObject(A.Device.Helper).A7c(
this.TableId,AI));else this.T(A._GetAutoObject(A.Device.Helper).Am1(this.TableId
,this.Er));},OV:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this
,this.Mj],this);},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Aet;this.V.H(AH0);this.V.A6(0x11);},_ReInit:function(){C.Cp._ReInit.call(this);
this.CQ();},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Filter)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"};C.
QH={H$:null,Bl:function(aSize){var B;C.Aet.Bl.call(this,aSize);this.H$.H([(aSize[
0]-((B=this.H$.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.Jh,0,this.
H$.M[0]-this.Jh,aSize[1]]);},TB:function(AI){this.T(A._GetAutoObject(A.Device.Helper
).Am1(this.TableId,this.Er));var Aw=(A.Device.BoolFilterCriterion.isPrototypeOf(
AI)?AI:null);if(!!Aw&&Aw.A5)this.H$.Cw(1);else this.H$.Cw(0);},_Init:function(aArg
){C.Aet._Init.call(this,aArg);A.acg.Ap._Init.call(this.H$={I:this},0);this.__proto__=
C.QH;this.H$.H(AH1);this.H$.Cw(0);this.J(this.H$,0);this.H$.Ax(A.aaL(A.ach.AqW));
},_Done:function(){this.__proto__=C.Aet;this.H$._Done();C.Aet._Done.call(this);}
,_ReInit:function(){C.Aet._ReInit.call(this);this.H$._ReInit();},_Mark:function(
D){var B;C.Aet._Mark.call(this,D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.APK={Ap:null,Text:null,Dg:function(
E){C.BR.Dg.call(this,E);this.Text.L(E);this.Ap.L(E);},_Init:function(aArg){C.BR.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.APK;this.Ap.H(AXo);this.Text.H(AXp);this.
Text.A6(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Ap,0);this.J(this.Text
,0);this.Ap.Ax(A.aaL(A.ach.AeF));this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.BR;this.Ap._Done();this.Text._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.Ap._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR.
_Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AjT={
AW:null,Ub:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zV([this,this.
DX],A._GetAutoObject(A.Device.Device).An,0);A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);A.pe([this,this.DX],this);},Bl:function(aSize){
var B;C.BR.Bl.call(this,aSize);this.Ub.H(A.abJ(this.Ub.M,A.abe(this.AW.M.slice(0
,2),AXq)));this.Ub.H(A.abK(this.Ub.M,A.abf([(B=this.AW.M)[2]-B[0],B[3]-B[1]],AXr
)));},Ai:function(Ae){var B;C.BR.Ai.call(this,Ae);var IG=((Ae&0x40)===0x40)&&(this.
AV===this.AW);if(IG)this.Ub.L(A.jb.AV);else this.Ub.L(A.jb.Am8);},Dg:function(E){
C.BR.Dg.call(this,E);this.Gw.L(E);this.D2.Zz(E);},WO:function(E){C.BR.WO.call(this
,E);this.D2.CV(E);},Akq:function(){return this.AW.Akq();},Awn:function(){return this.
AW.Awn();},DX:function(G){this.D2.T(A._GetAutoObject(A.Device.Device).An.B8().toFixed(
));},_Init:function(aArg){C.BR._Init.call(this,aArg);C.AW._Init.call(this.AW={I:
this},0);A.acg.BW._Init.call(this.Ub={I:this},0);A.acg.Ap._Init.call(this.Gw={I:
this},0);C.D2._Init.call(this.D2={I:this},0);A.acg.C8._Init.call(this.A$={I:this
},0);this.__proto__=C.AjT;this.AW.H(AXs);this.Ub.H(AXt);this.Ub.Nu(2);this.Gw.H(
AXu);this.Gw.L(A.jb.CU);this.D2.A1(0x14);this.D2.H(AXv);this.D2.Zz(A.jb.Bm);this.
D2.CV(A.jb.Rk);this.D2.Hp(2);this.A$.DD(AXw);this.A$.DN(AXx);this.A$.L(A.jb.Bc);
this.J(this.AW,0);this.J(this.Ub,0);this.J(this.Gw,0);this.J(this.D2,0);this.J(this.
A$,0);this.Bb(this.AW);this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.S(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.BR;this.AW._Done();this.Ub._Done(
);this.Gw._Done();this.D2._Done();this.A$._Done();C.BR._Done.call(this);},_ReInit:
function(){C.BR._ReInit.call(this);this.AW._ReInit();this.Ub._ReInit();this.Gw._ReInit(
);this.D2._ReInit();this.A$._ReInit();this.D2.S(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.BR._Mark.call(this,D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ub)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B._cycle=
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
0x40)&&this.Aqz)this.ET.Ae1(true);else this.ET.Ae1(false);},AwT:function(E){var B;
if(E===this.Akq())return;var Agb=E;var DV=this.ET;while(!!DV){if(Agb>0){DV.L7(Agb
%10);Agb=(Agb/10)|0;}else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=this.QL(DV,2,0x11))?
B:null);}},Akq:function(){return A.wz(this.Awn(),-1,10);},Ov:function(G){if(this.
F0.Ez>=0)this.BgP(7);},M6:function(G){if(((this.Akq()>0)||this.ARv)&&(this.Cv.Ez<
0))this.BgP(2);else if(this.Akq()<=0)this.Fb.Mx=true;},Adw:function(G){A.pe(this.
Dk,this);},BgP:function(GA){var B;var ALK=0;var DV=null;switch(GA){case 2:{DV=this.
Cv;ALK=7;}break;case 7:{DV=this.ET;ALK=2;}break;default:throw new Error(AXy);}while(
!!DV){var A3p=(C.DG.isPrototypeOf(B=this.QL(DV,ALK,0x11))?B:null);if(!!A3p)DV.L7(
A3p.Ez);else if(ALK===7)DV.L7(0);else DV.L7(-1);DV=A3p;}A.pe([this,this.Adw],this
);},Ae1:function(E){if(this.Aqz===E)return;this.Aqz=E;this.Am();},Bnz:function(E
){if(this.ARv===E)return;this.ARv=E;},ATv:function(E){var B;if(E===this.Awn())return;
var Agb=E;var DV=this.ET;while(!!DV){if(Agb.length>0){DV.L7(A.wz(A.ab2(Agb,1),-1
,10));Agb=A.abV(Agb,Agb.length-1);}else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=this.
QL(DV,2,0x11))?B:null);}},Awn:function(){var B;var IE=A.jV;var O=0;var B6=this.Cv;
for(;O<6;O=O+1){if(!!B6&&(B6.Ez>=0))IE=IE+B6.Ez.toFixed();B6=(C.DG.isPrototypeOf(
B=this.TY(B6,0x11))?B:null);}return IE;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);C.DG._Init.call(this.Cv={I:this},0);C.DG._Init.call(this.CW={I:this},
0);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG.
_Init.call(this.F0={I:this},0);C.DG._Init.call(this.ET={I:this},0);A.Core.BF._Init.
call(this.Fl={I:this},0);A.Core.BF._Init.call(this.Fb={I:this},0);this.__proto__=
C.AW;this.H(Ayv);this.Cv.A1(0x3);this.Cv.H(AH2);this.CW.A1(0x3);this.CW.H(AH3);this.
Dz.A1(0x3);this.Dz.H(AH4);this.Eq.A1(0x3);this.Eq.H(AH5);this.F0.A1(0x3);this.F0.
H(AH6);this.ET.A1(0x3);this.ET.H(AH7);this.ET.L7(0);this.Fl.Filter=6;this.Fb.Filter=
7;this.Ne=A.jb.CK;this.J(this.Cv,0);this.J(this.CW,0);this.J(this.Dz,0);this.J(this.
Eq,0);this.J(this.F0,0);this.J(this.ET,0);this.Bb(this.ET);this.Cv.Dk=[this,this.
Adw];this.CW.Dk=[this,this.Adw];this.Dz.Dk=[this,this.Adw];this.Eq.Dk=[this,this.
Adw];this.F0.Dk=[this,this.Adw];this.ET.Dk=[this,this.Adw];this.Fl.BG=[this,this.
Ov];this.Fb.BG=[this,this.M6];},_Done:function(){this.__proto__=A.Core.P;this.Cv.
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
"Application::InputID"};C.Bij="a2ad8790";C.BDr={Undefined:0,BEv:1,BDJ:2};C.AkL={
Tz:null,AiX:null,Lf:null,ANO:null,Aoc:null,push:function(MU){if(!this.Tz){MU.AhA=
null;MU.MF=null;this.Tz=MU;this.AiX=this.Tz;}else{MU.AhA=this.AiX;MU.MF=null;this.
AiX.MF=MU;this.AiX=MU;}},BCp:function(MU){var Qo=this.Tz;while(!!Qo){if(Qo.JS.Id===
MU.Id)return Qo;Qo=Qo.MF;}return Qo;},BB_:function(MU){if(MU===this.Tz)this.pop(
);else if(MU===this.AiX){MU=MU.AhA;if(!!MU)MU.MF=null;this.AiX=MU;}else{MU.AhA.MF=
MU.MF;MU.MF.AhA=MU.AhA;}},Ahs:function(E){var F;if(this.Lf===E)return;this.Lf=E;
if(!!this.Lf)this.Lf.AgO(2);(F=this.ANO,F[2].call(F[0],this.Lf));},Vs:function(G
){var Qo=(C.AUj.isPrototypeOf(G)?G:null);if(!!Qo){if(!Qo.JS.PopupState){if(!this.
Lf)this.Ahs(this.top());}else if(Qo.JS.PopupState===4){this.pop();this.Ahs(this.
top());}else if(Qo.JS.PopupState===5){this.pop();this.Ahs(this.top());}else if(Qo.
JS.PopupState===7){this.pop();this.Ahs(this.top());}else if(Qo.JS.PopupState===8
){this.pop();this.Ahs(this.top());}else if(Qo.JS.PopupState===6){if(Qo===this.Lf
){this.pop();this.Ahs(this.top());}else this.BB_(Qo);}else if(Qo.JS.PopupState===
3){this.pop();this.Ahs(this.top());}}},pop:function(){var AK6=null;if(!!this.Tz){
AK6=this.Tz;if(this.Tz===this.AiX){this.Tz=null;this.AiX=null;}else{this.Tz=this.
Tz.MF;if(!this.Tz)throw new Error(AXz);this.Tz.AhA=null;}AK6.AhA=null;AK6.MF=null;
}return AK6;},top:function(){return this.Tz;},BBS:function(G){var B;var At_=(A.Device.
PopupContext.isPrototypeOf(B=this.Aoc.JS)?B:null);if(!!At_){var A4D=this.BCp(At_
);if(!!A4D){A4D.A_k(At_);if(!At_.Show)A4D.AgO(6);}else if(At_.Show){var AKJ=A._NewObject(
C.AUj,0);AKJ.A_k(At_);AKJ.ATc=[this,this.Vs];this.push(AKJ);AKJ.AgO(0);}}},_Init:
function(aArg){A.Core.Bac._Init.call(this.Aoc={I:this},0);this.__proto__=C.AkL;this.
Aoc.ASF=[this,this.BBS];this.Aoc.BmT(A._GetAutoObject(A.Device.Device).AnS);A.h7++;
},_Done:function(){this.__proto__=null;this.Aoc._Done();A.h7--;},_ReInit:function(
){this.Aoc._ReInit();},_Mark:function(D){var B;if((B=this.Tz)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AiX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lf)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ANO)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aoc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AUj={Ro:null,MF:null,AhA:null,JS:null,ATc:null,PopupIdToString:null,Af2:function(
Bxu,Bx3,Byl,Byc,Bye,Byb,BxM){var Vu=A._NewObject(C.AUi,0);Vu.Bn2(this.JS.Id);Vu.
A_6(Bxu);Vu.ATd=Byb;Vu.A_8(this.JS.Ak5);Vu.A_T(this.JS.AkJ);Vu.BQ=A._NewObject(C.
N,0);Vu.Lr().Ca=Bye;Vu.Lr().Ce=null;Vu.Lr().CF=Byc;Vu.Lr().CS(Byl);Vu.Lr().Ct(null
);Vu.Lr().Hz(Bx3);Vu.Lr().AFB(BxM);return Vu;},Akr:function(){if(!this.Ro){var Ags=
this.PopupIdToString.BT(this.JS.Id);switch(this.JS.Id){case 91:case 92:this.Ro=this.
Af2(Ags,A.jV,A.jV,null,null,[this,this.Agd],0);break;case 39:this.Ro=this.Af2(Ags
,A.aaR(A.acf.AmG),A.aaR(A.acf.Ok),[this,this.A3C],[this,this.A3D],[this,this.Agd
],3);break;case 13:this.Ro=this.Af2(Ags,A.aaR(A.acf.AmG),A.aaR(A.acf.Bo5),[this,
this.A3B],[this,this.AKO],[this,this.Agd],3);break;case 25:this.Ro=this.Af2(Ags,
A.aaR(A.acf.AmG),A.aaR(A.acf.Ok),[this,this.A3B],[this,this.AKO],[this,this.Agd]
,3);break;case 16:case 24:case 49:case 74:this.Ro=this.Af2(Ags,A.aaR(A.acf.AmG),
A.jV,[this,this.A3B],null,[this,this.Agd],1);break;case 0:case 1:case 2:case 5:case
27:case 64:case 28:case 30:case 42:case 41:case 50:case 51:case 57:case 52:case 53:
case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:case 116:case 34:case
82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:case 36:case 117:
case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:case 69:
case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:case 98:
case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:case 70:
case 71:case 113:case 100:case 114:case 97:case 88:case 89:case 84:case 93:case 94:
case 87:case 109:case 102:case 101:case 103:this.Ro=this.Af2(Ags,A.jV,A.aaR(A.acf.
Ok),null,[this,this.AKO],[this,this.Agd],3);break;case 58:case 9:case 6:case 29:
case 107:case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:
this.Ro=this.Af2(Ags,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A3C],[this,this.
A3D],[this,this.Agd],3);break;case 110:this.Ro=this.Af2(Ags,A.jV,A.jV,null,null,[
this,this.Agd],1);break;case 46:case 111:this.Ro=this.Af2(Ags,A.jV,A.aaR(A.acf.Ok
),null,[this,this.AKO],[this,this.Agd],1);break;case 4:case 7:case 33:case 115:case
44:case 37:case 38:case 63:case 95:case 108:case 112:this.Ro=this.Af2(Ags,A.aaR(
A.acf.No),A.aaR(A.acf.Yes),[this,this.A3C],[this,this.A3D],[this,this.Agd],1);break;
default:A.ab5("%s",(AXA+this.JS.Id.toFixed())+AXB);}}switch(this.JS.Id){case 16:
case 49:this.Ro.A$k(true);break;case 91:case 92:this.Ro.A$k(false);break;default:;
}return this.Ro;},AKO:function(G){this.AgO(4);},A3B:function(G){this.AgO(5);},A3D:
function(G){this.AgO(7);},A3C:function(G){this.AgO(8);},Agd:function(G){this.AgO(
3);},A_k:function(E){if(this.JS===E)return;this.JS=E;if(!!this.Ro){this.Akr().A_8(
this.JS.Ak5);this.Akr().A_T(this.JS.AkJ);}},AgO:function(Byh){var B;this.JS.Bn3(
Byh);(B=this.ATc)?B[1].call(B[0],this):null;},BBo:function(G){this.AgO(9);},_Init:
function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={I:this}
,0);this.__proto__=C.AUj;A.h7++;},_Done:function(){this.__proto__=null;this.PopupIdToString.
_Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(
D){var B;if((B=this.Ro)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MF)&&(B._cycle
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
};C.Afr={UC:null,Ki:function(G){var F;var BP=this.AM;this.Bx(this.AM+1);if(this.
AM!==BP){if(!!this.UC&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.UC,F[
2].call(F[0],false));break;case 1:(F=this.UC,F[2].call(F[0],true));break;default:;
}A.abo(this.UC,0);}},Kd:function(G){var F;var BP=this.AM;this.Bx(this.AM-1);if(this.
AM!==BP){if(!!this.UC&&!!this.AC)switch(this.AC.C7(this.AM)){case 0:(F=this.UC,F[
2].call(F[0],false));break;case 1:(F=this.UC,F[2].call(F[0],true));break;default:;
}A.abo(this.UC,0);}},AkD:function(E){if(A.aaZ(this.UC,E))return;if(!!this.Q)A.z$([
this,this.A4e],this.UC,0);this.UC=E;if(!!E)A.zX([this,this.A4e],E,0);if(!!E)A.pe([
this,this.A4e],this);},A4e:function(G){var F;if(!!this.UC){if((F=this.UC,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BX._Init.call(this,aArg
);this.__proto__=C.Afr;this.J5(this.V,-1);},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.UC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AUz={Jl:null,O3:null,IZ:null,Gn:null,AL:null,Abr:null,AgU:null,TU:null,Sg:null
,AcI:null,Xb:null,Hl:null,ABM:true,Init:function(aArg){var B;A.zX([this,this.Al_
],[B=A._GetAutoObject(A.Device.Device),B.AS4,B.A0Q],0);A.pe([this,this.Al_],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.ABM)this.N.C4(A.aaL(A.ach.
AQ$));else this.N.C4(A.aaL(A.ach.ARa));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.O3.L(A.jb.Bm);this.Sg.Z(false);this.TU.Z(false);this.IZ.Z(true);this.Gn.
As(false);(F=this.Gn.Q,F[2].call(F[0],this.Gn.B3));this.Background.L(A.jb.Gk);}else
if(this.Abr.Bw){this.O3.L(A.jb.Text);this.Sg.Z(true);this.TU.Z(true);this.IZ.Z(false
);this.Gn.As(false);(F=this.Gn.Q,F[2].call(F[0],this.Gn.B3));this.Background.L(A.
jb.E1);}else{this.O3.L(A.jb.Text);this.Sg.Z(false);this.TU.Z(false);this.IZ.Z(true
);this.Gn.As(true);this.Background.L(A.jb.CK);}if(this.AgU.Bw)this.Xb.Z(true);else
this.Xb.Z(false);},CD:function(G){A._GetAutoObject(A.Device.Device).AhM();},E4:function(
G){A._GetAutoObject(A.Device.Device).An4();A._GetAutoObject(A.Device.Device).Afc(
false);A._GetAutoObject(A.Device.Device).UB(false);},Al_:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
BA6],this);break;case 3:{A.pe([this,this.BfG],this);A.pe([B=this.Abr,B.AxR],this
);A.pe(this.Abr.MK,this);}break;case 4:A.ab5("%s",AXC);break;default:;}},Ew:function(
G){A._GetAutoObject(C.A7).FB();},BBU:function(G){this.Bou(!this.ABM);},Bou:function(
E){if(this.ABM===E)return;this.ABM=E;if(!E)A._GetAutoObject(A.Device.Device).Afc(
false);this.Am();},BA6:function(G){var B;this.BfG(this);if(this.ABM)A._GetAutoObject(
A.Device.Device).Afc(true);A._GetAutoObject(A.Device.Device).WR(65280);A._GetAutoObject(
A.Device.Device).UB(true);A.pe([B=this.Abr,B.StartTimer],this);A.pe([B=this.AgU,
B.StartTimer],this);this.Am();},BA7:function(G){A._GetAutoObject(A.Device.Device
).Afc(false);A._GetAutoObject(A.Device.Device).UB(false);this.Am();},BA9:function(
G){this.Am();},BfG:function(G){A._GetAutoObject(A.Device.Device).AhM();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.Jl._Init.call(this.Jl={I:this},0);C.CG._Init.
call(this.O3={I:this},0);A.acg.Ap._Init.call(this.IZ={I:this},0);A.acl.Gn._Init.
call(this.Gn={I:this},0);A.acg.AL._Init.call(this.AL={I:this},0);A.Core.Timer._Init.
call(this.Abr={I:this},0);A.Core.Timer._Init.call(this.AgU={I:this},0);A.acg.Ap.
_Init.call(this.TU={I:this},0);A.acg.Ap._Init.call(this.Sg={I:this},0);A.acg.Text.
_Init.call(this.AcI={I:this},0);C.Xb._Init.call(this.Xb={I:this},0);C.CG._Init.call(
this.Hl={I:this},0);this.__proto__=C.AUz;var B;this.Background.L(A.jb.CK);this.N.
Z(true);this.Jl.H(AXD);this.Jl.AkG(0);this.O3.H(AXE);this.O3.R(A.aaR(A.acf.Bah));
this.O3.L(A.jb.Text);this.IZ.H(AXF);this.IZ.L(A.jb.AV);this.IZ.Zx(true);this.Gn.
Fq(1750);this.Gn.Uy(750);this.Gn.AkB(0);this.Gn.As(true);this.Gn.B3=3;this.AL.H(
Ayw);this.Abr.PZ(-1);this.Abr.WQ(1000);this.AgU.PZ(-1);this.AgU.WQ(5000);this.TU.
H(AH8);this.Sg.H(AH8);this.Sg.L(A.jb.E1);this.AcI.H(Ayw);this.AcI.R(A.aaR(A.acf.
A$Q));this.AcI.L(A.jb.Text);this.Xb.H(Ayw);this.Hl.H(AXG);this.Hl.As(false);this.
Hl.R(A.aaR(A.acf.RangeTest));this.Hl.L(A.jb.Text);this.J(this.Jl,0);this.J(this.
O3,0);this.J(this.IZ,0);this.J(this.AL,0);this.J(this.TU,0);this.J(this.Sg,0);this.
J(this.AcI,0);this.J(this.Xb,0);this.J(this.Hl,0);this.N.CF=[this,this.Ew];this.
N.Ca=[this,this.BBU];this.N.C3(A.aaL(A.ach.E2));this.O3.S(A.aaL(A.fl.Af));this.O3.
AY(A.aaL(A.fl.Ak));this.O3.Cm(A.aaL(A.fl.Bh));this.IZ.Ax(A.aaL(A.ach.AD3));this.
Gn.Q=[B=this.IZ,B.ASR,B.Cw];this.Abr.MK=[this,this.BA7];this.AgU.MK=[this,this.BA9
];this.TU.Ax(A.aaL(A.ach.TU));this.Sg.Ax(A.aaL(A.ach.Sg));this.AcI.S(A.aaL(A.fl.
Af));this.Xb.Au([B=A._GetAutoObject(A.Device.Device),B.AS5,B.A0R]);this.Hl.S(A.aaL(
A.fl.Kt));this.Hl.AY(A.aaL(A.fl.HL));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Jl._Done();this.O3._Done();this.IZ._Done();this.Gn._Done();this.AL._Done(
);this.Abr._Done();this.AgU._Done();this.TU._Done();this.Sg._Done();this.AcI._Done(
);this.Xb._Done();this.Hl._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Jl._ReInit();this.O3._ReInit();this.IZ._ReInit();this.Gn.
_ReInit();this.AL._ReInit();this.Abr._ReInit();this.AgU._ReInit();this.TU._ReInit(
);this.Sg._ReInit();this.AcI._ReInit();this.Xb._ReInit();this.Hl._ReInit();this.
O3.R(A.aaR(A.acf.Bah));this.AcI.R(A.aaR(A.acf.A$Q));this.Hl.R(A.aaR(A.acf.RangeTest
));this.O3.S(A.aaL(A.fl.Af));this.O3.AY(A.aaL(A.fl.Ak));this.O3.Cm(A.aaL(A.fl.Bh
));this.AcI.S(A.aaL(A.fl.Af));this.Hl.S(A.aaL(A.fl.Kt));this.Hl.AY(A.aaL(A.fl.HL
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Jl)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.O3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Gn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abr)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcI)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Xb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hl).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.Ab1={
ScreenType:0,Ns:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},Nv:
function(G){A._GetAutoObject(C.A7).Cb(this.ScreenType);},_Init:function(aArg){C.
Cp._Init.call(this,aArg);this.__proto__=C.Ab1;},_className:"Application::MenuItemScreen"
};C.Uj={Aea:null,Mv:null,AmH:false,Init:function(aArg){},Ai:function(Ae){C.Cp.Ai.
call(this,Ae);if(this.AmH){this.Mv.Cw(1);this.Mv.L(A.jb.Ib);}else{this.Mv.Cw(0);
if(this.KM)this.Mv.L(A.jb.Bm);else if(this.Hn)this.Mv.L(A.jb.Text);else this.Mv.
L(A.jb.Bm);}},H1:function(G){var F,Cu;if(!!this.Aea){(Cu=this.Aea,Cu[2].call(Cu[
0],!(F=this.Aea,F[1].call(F[0]))));this.AFi((F=this.Aea,F[1].call(F[0])));A.pe([
this,this.DK],this);}},A3H:function(G){this.KM=true;this.DK(this);},AFi:function(
E){if(this.AmH===E)return;this.AmH=E;this.DK(this);this.Am();},A39:function(G){var
F;this.AFi((F=this.Aea,F[1].call(F[0])));},A0$:function(s){this.A39(s);},DK:function(
G){var F;if(!this.N||!this.KM)return;if(this.AmH){(F=this.N,F[1].call(F[0])).CS(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).GX.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).CS(A.aaR(A.acf.A8F));(F=this.N,F[1].call(F[0])).GX.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},ATj:function(E){if(A.aaZ(this.Aea,E))
return;if(!!this.Aea)A.z$([this,this.A0$],this.Aea,0);this.Aea=E;if(!!E)A.zX([this
,this.A0$],E,0);if(!!E)A.pe([this,this.A0$],this);},_Init:function(aArg){C.Cp._Init.
call(this,aArg);A.acg.Ap._Init.call(this.Mv={I:this},0);this.__proto__=C.Uj;this.
V.L(A.jb.Ib);this.Mv.H(AH9);this.Mv.Cw(0);this.J(this.Mv,0);this.Mv.Ax(A.aaL(A.ach.
AqW));this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.Mv._Done();C.Cp.
_Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Mv._ReInit();
},_Mark:function(D){var B;C.Cp._Mark.call(this,D);if((B=this.Aea)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ANW={H_:null,IT:null,_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.SY._Init.call(this.H_={I:this},0);C.AGX._Init.call(this.
IT={I:this},0);this.__proto__=C.ANW;var B;this.Jf(A.aaR(A.acf.ACN));this.H_.H(Ah3
);this.H_.Aj(true);this.H_.T(A.aaR(A.acf.Date));this.H_.Bi(true);this.IT.H(U8);this.
IT.Aj(true);this.IT.T(A.aaR(A.acf.Bs));this.J(this.H_,-1);this.J(this.IT,-1);this.
H_.Ab8([B=this.H_,B.FW]);this.H_.Gt([this,this.D_,this.GT]);this.H_.AkA(A.aaL(A.
ach.Edit));this.H_.Acc([B=A._GetAutoObject(A.Device.Helper),B.U_,B.Vb]);this.IT.
Ab8([B=this.IT,B.FW]);this.IT.Gt([this,this.D_,this.GT]);this.IT.AkA(A.aaL(A.ach.
Edit));this.IT.Acc([B=A._GetAutoObject(A.Device.Helper),B.U_,B.Vb]);},_Done:function(
){this.__proto__=C.Cg;this.H_._Done();this.IT._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.H_._ReInit();this.IT._ReInit();this.Jf(A.
aaR(A.acf.ACN));this.H_.T(A.aaR(A.acf.Date));this.IT.T(A.aaR(A.acf.Bs));},_Mark:
function(D){var B;C.Cg._Mark.call(this,D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AVy={Rh:null,FM:null,B0:null,OQ:null,YT:null,Abb:null,_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.Rh._Init.call(this.Rh={I:this},0);C.AMQ._Init.call(this.
FM={I:this},0);C.AU8._Init.call(this.B0={I:this},0);C.AU_._Init.call(this.OQ={I:
this},0);C.Afr._Init.call(this.YT={I:this},0);C.Abb._Init.call(this.Abb={I:this}
,0);this.__proto__=C.AVy;var B;this.Jf(A.aaR(A.acf.Temperature));this.FM.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.B0.H(AXH);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.
Ary));this.B0.Bi(false);this.OQ.H(Aao);this.OQ.Aj(true);this.OQ.T(A.aaR(A.acf.Undertemperature
));this.OQ.Bi(true);this.OQ.Bx(3800);this.OQ.Gb(3000);this.OQ.EV(5000);this.OQ.A$d(
A.aaR(A.acf.AG_));this.YT.H(AXI);this.YT.Aj(true);this.YT.Z(true);this.YT.T(A.aaR(
A.acf.A5E));this.J(this.B0,0);this.J(this.OQ,0);this.J(this.YT,0);this.B0.Ab8([B=
this.B0,B.FW]);this.B0.Gt([this,this.D_,this.GT]);this.B0.AkA(A.aaL(A.ach.Edit));
this.B0.L5([B=this.B0,B.Ay9]);this.B0.L8(A.aaL(A.ach.AnV));this.B0.Au([B=this.FM
,B.B$,B.Cc]);this.B0.CL(this.FM);this.B0.A_R([B=this.FM,B.ATb,B.A0Y]);this.B0.A_Q([
B=this.FM,B.ATa,B.A0X]);this.OQ.L5([B=this.B0,B.Ay9]);this.OQ.L8(A.aaL(A.ach.AnV
));this.OQ.Au([B=A._GetAutoObject(A.Device.Device),B.A9M,B.BbZ]);this.YT.CL(this.
Abb);this.YT.AkD([B=A._GetAutoObject(A.Device.Device),B.A87,B.BbI]);},_Done:function(
){this.__proto__=C.Cg;this.Rh._Done();this.FM._Done();this.B0._Done();this.OQ._Done(
);this.YT._Done();this.Abb._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.Rh._ReInit();this.FM._ReInit();this.B0._ReInit();this.
OQ._ReInit();this.YT._ReInit();this.Abb._ReInit();this.Jf(A.aaR(A.acf.Temperature
));this.B0.T(A.aaR(A.acf.Ary));this.OQ.T(A.aaR(A.acf.Undertemperature));this.OQ.
A$d(A.aaR(A.acf.AG_));this.YT.T(A.aaR(A.acf.A5E));},_Mark:function(D){var B;C.Cg.
_Mark.call(this,D);if((B=this.Rh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AN9={PO:null,PP:null,Sz:null,Wd:null,SB:null,SA:null,Ge:null,Acx:null,Init:function(
aArg){A.zX([this,this.BpQ],this.PP.Q,0);},BpQ:function(G){var F;A._GetAutoObject(
A.Device.Device).Axc((F=this.PP.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg.
_Init.call(this,aArg);C.Iv._Init.call(this.PO={I:this},0);C.BX._Init.call(this.PP={
I:this},0);C.Afr._Init.call(this.Sz={I:this},0);C.Iv._Init.call(this.Wd={I:this}
,0);C.Afr._Init.call(this.SB={I:this},0);C.Afr._Init.call(this.SA={I:this},0);C.
Ge._Init.call(this.Ge={I:this},0);C.Acx._Init.call(this.Acx={I:this},0);this.__proto__=
C.AN9;var B;this.N.H(U7);this.Jf(A.aaR(A.acf.Device));this.PO.H(Ah3);this.PO.Aj(
true);this.PO.T(A.aaR(A.acf.A$1));this.PO.Bi(false);this.PO.Gb(2);this.PO.EV(60);
this.PO.IW(A.aaR(A.acf.AHo));this.PO.Jg(A.aaR(A.acf.AHo));this.PP.H(AXJ);this.PP.
Aj(true);this.PP.T(A.aaR(A.acf.A$8));this.PP.Bi(true);this.PP.Bx(0);this.PP.Gb(-
1);this.PP.EV(1);this.Sz.H(Aao);this.Sz.Aj(true);this.Sz.T(A.aaR(A.acf.HH));this.
Sz.Bi(false);this.Sz.Bx(0);this.Sz.Gb(-1);this.Sz.EV(1);this.Wd.H(Alk);this.Wd.Aj(
true);this.Wd.T(A.aaR(A.acf.A52));this.Wd.Bi(true);this.Wd.IW(AfK);this.Wd.Jg(AfK
);this.SB.H(Ah4);this.SB.Aj(true);this.SB.T(A.aaR(A.acf.AsZ));this.SB.Bi(false);
this.SB.Bx(1);this.SB.Gb(-1);this.SB.EV(1);this.SA.H(Aot);this.SA.Aj(true);this.
SA.T(A.aaR(A.acf.AsC));this.SA.Bi(true);this.SA.Bx(0);this.SA.Gb(-1);this.SA.EV(
1);this.Acx.Au(A._GetAutoObject(A.Device.Device).AxQ);this.J(this.PO,0);this.J(this.
PP,0);this.J(this.Sz,0);this.J(this.Wd,0);this.J(this.SB,0);this.J(this.SA,0);this.
PO.Au([B=A._GetAutoObject(A.Device.Device),B.A9E,B.BbV]);this.PP.Au([B=this.Acx,
B.B$,B.Cc]);this.PP.CL(this.Acx);this.Sz.CL(this.Ge);this.Sz.AkD([B=A._GetAutoObject(
A.Device.Device),B.AET,B.AI3]);this.Wd.Au([B=A._GetAutoObject(A.Device.Device),B.
A83,B.BbF]);this.SB.CL(this.Ge);this.SB.AkD([B=A._GetAutoObject(A.Device.Device)
,B.A9N,B.Bb0]);this.SA.CL(this.Ge);this.SA.AkD([B=A._GetAutoObject(A.Device.Device
),B.ASV,B.A0K]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.PO._Done(
);this.PP._Done();this.Sz._Done();this.Wd._Done();this.SB._Done();this.SA._Done(
);this.Ge._Done();this.Acx._Done();C.Cg._Done.call(this);},_ReInit:function(){C.
Cg._ReInit.call(this);this.PO._ReInit();this.PP._ReInit();this.Sz._ReInit();this.
Wd._ReInit();this.SB._ReInit();this.SA._ReInit();this.Ge._ReInit();this.Acx._ReInit(
);this.Jf(A.aaR(A.acf.Device));this.PO.T(A.aaR(A.acf.A$1));this.PO.IW(A.aaR(A.acf.
AHo));this.PO.Jg(A.aaR(A.acf.AHo));this.PP.T(A.aaR(A.acf.A$8));this.Sz.T(A.aaR(A.
acf.HH));this.Wd.T(A.aaR(A.acf.A52));this.SB.T(A.aaR(A.acf.AsZ));this.SA.T(A.aaR(
A.acf.AsC));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.PO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Sz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AUL={Wg:null,Wf:
null,QR:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bi7
],this.QR.Q,0);},Bi7:function(G){var F;A._GetAutoObject(A.Device.Device).Akx((F=
this.QR.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
Np._Init.call(this.Wg={I:this},0);C.Np._Init.call(this.Wf={I:this},0);C.AU4._Init.
call(this.QR={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AUL;var B;this.Jf(A.aaR(A.acf.Asv));this.Wg.H(I1);this.
Wg.Aj(true);this.Wg.T(A.aaR(A.acf.AjH));this.Wg.Bi(false);this.Wg.Ns(87);this.Wf.
H(Ayx);this.Wf.Aj(true);this.Wf.T(A.aaR(A.acf.Aqs));this.Wf.Bi(true);this.Wf.Ns(
88);this.QR.H(U8);this.QR.Aj(true);this.QR.T(A.aaR(A.acf.A5J));this.QR.Bi(false);
this.QR.Gb(-1);this.QR.EV(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode);this.J(this.Wg,0);this.J(this.Wf,0);this.J(this.
QR,0);this.Wg.AR=[B=this.Wg,B.Nv];this.Wf.AR=[B=this.Wf,B.Nv];this.QR.Au([B=this.
EartagNrAssignmentMode,B.B$,B.Cc]);this.QR.CL(this.EartagNrAssignmentMode);this.
Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.Wg._Done();this.Wf._Done(
);this.QR._Done();this.EartagNrAssignmentMode._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wg._ReInit();this.Wf._ReInit();this.QR._ReInit(
);this.EartagNrAssignmentMode._ReInit();this.Jf(A.aaR(A.acf.Asv));this.Wg.T(A.aaR(
A.acf.AjH));this.Wf.T(A.aaR(A.acf.Aqs));this.QR.T(A.aaR(A.acf.A5J));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RegistrationSettingsScreen"};C.Xb={Q:null,TransponderProtocolToString:
null,Apv:null,Background:null,Y:null,St:null,GN:null,PU:null,OS:null,Px:null,C9:
null,EN:null,ST:null,N_:null,CountryToString:null,Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Hh],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Hh],E,0);if(!!E)A.pe([this,this.Hh],this);},Hh:function(G){var B;var F;if(!
!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GN.R((F=this.Q,F[1].call(F[0])).
Id.toFixed());var BN=(F=this.Q,F[1].call(F[0])).BjD();if(BN<900){var Kc=A._GetAutoObject(
A.Device.Converter).ANN(BN);if(!!Kc)this.C9.R(((this.CountryToString.LA(Kc)+AcS)+
BN.toFixed())+Pd);else this.C9.R(BN.toFixed());if(Kc===10){var AKr=this.A7y((F=this.
Q,F[1].call(F[0])).Id);this.C9.R(this.C9.String+((((AXK+this.Apv.Bqz(AKr))+AcS)+
A.abl(this.Apv.Bqy(AKr),2,10))+Pd));}this.C9.Z(true);this.Px.Z(true);this.OS.Z(false
);this.PU.Z(false);}else{this.OS.R(((A._GetAutoObject(A.Device.Converter).Bim(BN
)+AcS)+BN.toFixed())+Pd);this.OS.Z(true);this.PU.Z(true);this.C9.Z(false);this.Px.
Z(false);}if(BN===276){this.EN.R(this.Apv.BT(this.A7y((F=this.Q,F[1].call(F[0])).
Id)));this.EN.Z(true);}else this.EN.Z(false);this.N_.R(this.TransponderProtocolToString.
BT((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GN.R(A.jV);this.OS.
R(A.jV);this.EN.R(A.jV);this.C9.R(A.jV);this.N_.R(A.jV);}},A7y:function(Ka){var QC=
0;var Kc=A._GetAutoObject(A.Device.Converter).S9(Ka);switch(Kc){case 10:{var Gj=
A._GetAutoObject(A.Device.Converter).AVP(Ka);QC=A._GetAutoObject(A.Device.Converter
).ADb(Gj);}break;default:;}return QC;},_Init:function(aArg){A.Core.P._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.Apv={I:this},0);A.acg.AL.
_Init.call(this.Background={I:this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.
CG._Init.call(this.St={I:this},0);C.CG._Init.call(this.GN={I:this},0);C.CG._Init.
call(this.PU={I:this},0);C.CG._Init.call(this.OS={I:this},0);C.CG._Init.call(this.
Px={I:this},0);C.CG._Init.call(this.C9={I:this},0);C.CG._Init.call(this.EN={I:this
},0);C.CG._Init.call(this.ST={I:this},0);C.CG._Init.call(this.N_={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.Xb;
this.H(AcT);this.Background.A1(0x3F);this.Background.H(AcT);this.Background.L(A.
jb.CU);this.Y.A1(0x3F);this.Y.H(AcT);this.Y.JZ(9);this.St.H(AH_);this.St.Aj(true
);this.St.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.St.A6(0x11);this.St.L(A.jb.
Text);this.GN.H(AH$);this.GN.Aj(true);this.GN.R(AXL);this.GN.A6(0x14);this.GN.L(
A.jb.Text);this.PU.H(Ayy);this.PU.Aj(true);this.PU.R(A.aaR(A.acf.A$u)+A.aaR(A.acf.
Colon));this.PU.A6(0x11);this.PU.L(A.jb.Text);this.OS.H(AIa);this.OS.Aj(true);this.
OS.R(AXM);this.OS.A6(0x14);this.OS.L(A.jb.Text);this.Px.H(Ayy);this.Px.Aj(true);
this.Px.R(A.aaR(A.acf.C9)+A.aaR(A.acf.Colon));this.Px.A6(0x11);this.Px.L(A.jb.Text
);this.C9.H(AIa);this.C9.Aj(true);this.C9.R(AXN);this.C9.A6(0x14);this.C9.L(A.jb.
Text);this.EN.H(AXO);this.EN.Aj(true);this.EN.R(AXP);this.EN.A6(0x14);this.EN.L(
A.jb.Text);this.ST.H(AXQ);this.ST.Aj(true);this.ST.R(A.aaR(A.acf.N_)+A.aaR(A.acf.
Colon));this.ST.A6(0x11);this.ST.L(A.jb.Text);this.N_.H(AXR);this.N_.Aj(true);this.
N_.R(AXS);this.N_.A6(0x14);this.N_.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Y,0);this.J(this.St,0);this.J(this.GN,0);this.J(this.PU,0);this.J(this.OS,0
);this.J(this.Px,0);this.J(this.C9,0);this.J(this.EN,0);this.J(this.ST,0);this.J(
this.N_,0);this.St.S(A.aaL(A.fl.Ak));this.St.AY(A.aaL(A.fl.Bh));this.GN.S(A.aaL(
A.fl.Ak));this.GN.AY(A.aaL(A.fl.Bh));this.PU.S(A.aaL(A.fl.Ak));this.PU.AY(A.aaL(
A.fl.Bh));this.OS.S(A.aaL(A.fl.Ak));this.OS.AY(A.aaL(A.fl.Bh));this.Px.S(A.aaL(A.
fl.Ak));this.Px.AY(A.aaL(A.fl.Bh));this.C9.S(A.aaL(A.fl.Ak));this.C9.AY(A.aaL(A.
fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.AY(A.aaL(A.fl.Bh));this.ST.S(A.aaL(A.fl.
Ak));this.ST.AY(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Ak));this.N_.AY(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=A.Core.P;this.TransponderProtocolToString.
_Done();this.Apv._Done();this.Background._Done();this.Y._Done();this.St._Done();
this.GN._Done();this.PU._Done();this.OS._Done();this.Px._Done();this.C9._Done();
this.EN._Done();this.ST._Done();this.N_._Done();this.CountryToString._Done();A.Core.
P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.Apv._ReInit();this.Background._ReInit();this.Y._ReInit();this.St.
_ReInit();this.GN._ReInit();this.PU._ReInit();this.OS._ReInit();this.Px._ReInit(
);this.C9._ReInit();this.EN._ReInit();this.ST._ReInit();this.N_._ReInit();this.CountryToString.
_ReInit();this.St.R(A.aaR(A.acf.GN)+A.aaR(A.acf.Colon));this.PU.R(A.aaR(A.acf.A$u
)+A.aaR(A.acf.Colon));this.Px.R(A.aaR(A.acf.C9)+A.aaR(A.acf.Colon));this.ST.R(A.
aaR(A.acf.N_)+A.aaR(A.acf.Colon));this.St.S(A.aaL(A.fl.Ak));this.St.AY(A.aaL(A.fl.
Bh));this.GN.S(A.aaL(A.fl.Ak));this.GN.AY(A.aaL(A.fl.Bh));this.PU.S(A.aaL(A.fl.Ak
));this.PU.AY(A.aaL(A.fl.Bh));this.OS.S(A.aaL(A.fl.Ak));this.OS.AY(A.aaL(A.fl.Bh
));this.Px.S(A.aaL(A.fl.Ak));this.Px.AY(A.aaL(A.fl.Bh));this.C9.S(A.aaL(A.fl.Ak)
);this.C9.AY(A.aaL(A.fl.Bh));this.EN.S(A.aaL(A.fl.Ak));this.EN.AY(A.aaL(A.fl.Bh)
);this.ST.S(A.aaL(A.fl.Ak));this.ST.AY(A.aaL(A.fl.Bh));this.N_.S(A.aaL(A.fl.Ak));
this.N_.AY(A.aaL(A.fl.Bh));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Px)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ST)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QZ={D2:null,A$J:A.jV,Ai:function(Ae){C.Fn.Ai.call(
this,Ae);if(this.MB.Fp())this.D2.CV(A.jb.AV);else this.D2.CV(this.Background.AQ);
this.D2.Zz(this.G$.AQ);},ZE:function(E){if(this.A$J===E)return;this.A$J=E;this.D2.
Text.R(E);this.D2.Z(E!==A.jV);},_Init:function(aArg){C.Fn._Init.call(this,aArg);
C.D2._Init.call(this.D2={I:this},0);this.__proto__=C.QZ;this.Background.H(AXT);this.
MB.H(Xg);this.OL.H(AIb);this.Q5.H(AIb);this.D2.H(AXU);this.D2.Z(false);this.J(this.
D2,0);this.G$.S(A.aaL(A.fl.Af));this.G$.AY(A.aaL(A.fl.Ak));this.G$.Cm(A.aaL(A.fl.
Bh));},_Done:function(){this.__proto__=C.Fn;this.D2._Done();C.Fn._Done.call(this
);},_ReInit:function(){C.Fn._ReInit.call(this);this.D2._ReInit();this.G$.S(A.aaL(
A.fl.Af));this.G$.AY(A.aaL(A.fl.Ak));this.G$.Cm(A.aaL(A.fl.Bh));},_Mark:function(
D){var B;C.Fn._Mark.call(this,D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.D2={B7:null,AeI:null,Ap:null,Text:null
,DL:A.jV,AmU:0,M$:0,Jh:0,A55:0x14,Init:function(aArg){},T:function(E){if(this.DL===
E)return;this.DL=E;this.Text.R(E);},BC7:function(G){this.Ap.H(this.Text.M);this.
AeI.H(this.Text.M);},Zz:function(E){if(this.AmU===E)return;this.AmU=E;this.AeI.L(
E);this.Text.L(E);},CV:function(E){if(this.M$===E)return;this.M$=E;this.Ap.L(E);
},S:function(E){if(this.B7===E)return;this.B7=E;this.Text.S(E);},Hp:function(E){
if(this.Jh===E)return;this.Jh=E;this.Text.Hp(E);},Bmy:function(E){if(this.A55===
E)return;this.A55=E;this.Text.A6(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.NY._Init.call(this.AeI={I:this},0);A.acg.NY._Init.call(this.Ap={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.D2;this.H(AIc);
this.AeI.A1(0x8);this.AeI.L(A.jb.Text);this.Ap.A1(0x8);this.Ap.L(A.jb.CU);this.Text.
A1(0xD);this.Text.H(AIc);this.Text.Hp(5);this.Text.Je(true);this.Text.A6(0x14);this.
Text.L(A.jb.Text);this.J(this.AeI,0);this.J(this.Ap,0);this.J(this.Text,0);this.
AeI.Ax(A.aaL(A.ach.AP9));this.Ap.Ax(A.aaL(A.ach.AP8));this.Text.Q9([this,this.BC7
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.P;this.AeI._Done();this.Ap._Done();this.Text._Done();A.Core.P._Done.call(
this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.AeI._ReInit();this.Ap.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.Uf={DY:null,Y:null,Ay:null,DF:function(G){var B;C.AB.DF.call(this,G);if(!!this.
AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},CD:function(
G){C.AB.CD.call(this,G);this.ALz(this);A._GetAutoObject(A.Device.Device).An.Bk(null
);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(A.Device.Helper
).AkR();A._GetAutoObject(A.Device.Helper).Asz();},Il:function(G){},AcX:function(
s){this.Il(s);},A3Y:function(G){A._GetAutoObject(C.A7).FB();},Fj:function(G){var
B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.
MI(-this.Y.Br[1]);},ALz:function(G){},BHe:function(s){this.ALz(s);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.Uf;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Dr(C.Aq8);this.
DY.A1(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CK);this.Y.H(Fe);this.Y.JZ(9);this.Ay.H(
Ix);this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.N.CF=[this,this.A3Y
];this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fj];},_Done:function(){this.__proto__=
C.AB;this.DY._Done();this.Y._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::ListsScreen"};C.AV9={WM:function(
G){this.Agz();this.I8(A.aaR(A.acf.AVF),[this,this.AT5],7);this.I8(A.aaR(A.acf.Bo_
),[this,this.BmB],6);this.I8(A.aaR(A.acf.AGx),[this,this.ATR],3);this.I8(A.aaR(A.
acf.An5),[this,this.Aw2],2);this.I8(A.aaR(A.acf.AdX),[this,this.AFa],1);this.I8(
A.aaR(A.acf.AuL),[this,this.AE6],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DF:function(G){},AbB:function(){return C.ANo;},AbC:function(){return C.APP;
},Ra:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MC();var ABO=A._NewObject(
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
).K1;var Ts;if(JH.CP===5)Ts=5;else Ts=4;var ABs=A._GetAutoObject(A.acj.DU).Bd3(Bdt
,Ts);var FK=(((Bdt+((ABs/2)|0))/ABs)|0)*ABs;if(JH.CP===4)FK+=ABs;else if(JH.CP===
5)FK-=ABs;if(FK>999900)FK=999900;if(FK<100)FK=100;A._GetAutoObject(A.Device.Device
).UpdateWeightValue(FK);},AsN:function(G){var B;if(A._GetAutoObject(A.Device.Device
).MeasureState===3)A.pe([B=this.O_,B.CF],this);else A._GetAutoObject(C.A7).FB();
},W3:function(G){if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(
A.Device.Device).AsP();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(
this.A$Z()===false){this.Ia.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).K1
);this.Ia.Ci(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A7).FB();}
}else if(A._GetAutoObject(A.Device.Device).MeasureState===3){this.Ia.OnSetBodyWeight(
A._GetAutoObject(A.Device.Device).K1);this.Ia.Ci(A._GetAutoObject(A.Device.Device
).Bt);A._GetAutoObject(C.A7).FB();}},AkY:function(G){var B;if(A._GetAutoObject(A.
Device.Device).MeasureState===3)A.pe([B=this.O_,B.Ca],this);},Bd2:function(){var
ALN=A._GetAutoObject(A.Device.Helper).W.AhW(1);if(ALN>=100000)ALN=(Math.round(ALN
/1000)|0)*1000;return ALN;},_Init:function(aArg){C.Ax_._Init.call(this,aArg);this.
__proto__=C.AMv;},_className:"Application::AnimalActionWeighingScreen"};C.AVT={Wk:
null,YV:null,Rh:null,AeT:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.
BX._Init.call(this.Wk={I:this},0);C.BX._Init.call(this.YV={I:this},0);C.Rh._Init.
call(this.Rh={I:this},0);C.AeT._Init.call(this.AeT={I:this},0);this.__proto__=C.
AVT;var B;this.Jf(A.aaR(A.acf.AHp));this.Wk.H(Ah3);this.Wk.Aj(true);this.Wk.T(A.
aaR(A.acf.Baq));this.Wk.Bi(true);this.Wk.Bx(0);this.YV.H(U8);this.YV.Aj(true);this.
YV.T(A.aaR(A.acf.Bap));this.YV.Bi(false);this.J(this.Wk,0);this.J(this.YV,0);this.
Wk.Au([B=this.Rh,B.B$,B.Cc]);this.Wk.CL(this.Rh);this.YV.Au([B=this.AeT,B.B$,B.Cc
]);this.YV.CL(this.AeT);},_Done:function(){this.__proto__=C.Cg;this.Wk._Done();this.
YV._Done();this.Rh._Done();this.AeT._Done();C.Cg._Done.call(this);},_ReInit:function(
){C.Cg._ReInit.call(this);this.Wk._ReInit();this.YV._ReInit();this.Rh._ReInit();
this.AeT._ReInit();this.Jf(A.aaR(A.acf.AHp));this.Wk.T(A.aaR(A.acf.Baq));this.YV.
T(A.aaR(A.acf.Bap));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.
Wk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeT)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.AeT={MassUnitToString:null
,Du:function(){return 2;},C7:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AwY(E);}
,Init:function(aArg){var B;A.zX([this,this.BeG],[B=A._GetAutoObject(A.Device.Device
),B.ASU,B.A0J],0);A.pe([this,this.BeG],this);},BeG:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.AeT;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Ax_={Ia:null,Ajy:null,MassUnit:null,
K1:null,VJ:null,AnR:null,AcK:null,Z7:null,O_:null,YM:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DU).Af8());A.zX([this,this.AKP],[B=A._GetAutoObject(
A.Device.Device),B.AEW,B.AI6],0);A.zX([this,this.BBV],[B=A._GetAutoObject(A.Device.
Device),B.AE2,B.AI_],0);A.zX([this,this.BBW],[B=this.O_,B.ArG,B.JD],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.Ax3();this.Z9();},H1:function(G){this.W3(this);},
CD:function(G){C.AB.CD.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).AsP();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Ll())A._GetAutoObject(
A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),
0,null);this.Ia.Gs();this.Ia.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AG6();else{var BDk=this.Bd2();this.Z7.Z(true);this.AcK.Z(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BDk);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},E4:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AsP();else A._GetAutoObject(A.Device.Device).AhP(
);},Ax3:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bhs();break;case 3:{this.Bhs();this.Z7.Z(false);this.AcK.Z(false
);if(this.A$Z()){this.VJ.Z(false);this.K1.H(A.abO(this.K1.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.O_.As(true);this.O_.Z(true);this.Bb(this.O_);}}break;
case 4:this.K1.R(A.aaR(A.acu.Akl));break;default:A.ab5("%s%e",AId,A._GetAutoObject(
A.Device.Device).MeasureState);}},Z9:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.C3(A.aaL(A.ach.AeD));this.N.Ct(null);
this.YM.Z(false);this.N.C4(A.aaL(A.ach.Am7));this.N.CS(A.jV);}break;case 3:{if(this.
O_.A0<=1){this.N.C3(null);this.N.Ct(null);this.YM.Z(false);this.N.C4(null);}else{
this.N.C3(A.aaL(A.ach.Am6));this.N.Ct(A.aaL(A.ach.AeE));this.YM.Z(true);this.N.C4(
null);}this.N.CS(A.aaR(A.acf.Ok));}break;case 4:{this.N.C4(A.aaL(A.ach.AvT));this.
N.Ca=[this,this.Bmo];this.N.Ct(null);this.YM.Z(false);this.N.CS(A.jV);}break;default:;
}},AsN:function(G){},Bw$:function(s){this.AsN(s);},W3:function(G){},A01:function(
s){this.W3(s);},Bmo:function(G){this.CD(this);},BBV:function(G){this.Am();},AKP:
function(G){this.Am();},A$Z:function(){var AuC=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(AuC>0)&&!A._GetAutoObject(A.Device.Helper).Bqw(AuC
,this.Ia.Timestamp);},AkY:function(G){},A00:function(s){this.AkY(s);},BBW:function(
G){this.Am();},Bhs:function(){this.K1.R(A._GetAutoObject(A.Device.Converter).Ala(
A._GetAutoObject(A.Device.Device).K1));},Bd2:function(){return A._GetAutoObject(
A.Device.Helper).W.AhW(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AL._Init.call(this.Ajy={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.K1={I:this},0);A.acg.Text._Init.call(this.VJ={I:this
},0);C.Ax2._Init.call(this.AnR={I:this},0);A.acg.Aes._Init.call(this.AcK={I:this
},0);A.acg.Aes._Init.call(this.Z7={I:this},0);C.AWc._Init.call(this.O_={I:this},
0);A.acg.Ap._Init.call(this.YM={I:this},0);this.__proto__=C.Ax_;this.Background.
L(A.jb.CK);this.N.Z(true);this.Dr(C.IP);this.Ajy.A1(0x3F);this.Ajy.H(Ayz);this.Ajy.
L(A.jb.CK);this.MassUnit.H(AXV);this.MassUnit.A6(0x9);this.MassUnit.R(A.aaR(A.acf.
AAn));this.MassUnit.L(A.jb.Text);this.K1.H(AXW);this.K1.A6(0x14);this.K1.R(A.aaR(
A.acu.Akl));this.K1.L(A.jb.Text);this.VJ.H(AXX);this.VJ.R(A.aaR(A.acf.BaB));this.
VJ.L(A.jb.Text);this.VJ.Z(true);this.AnR.H(AXY);this.AcK.H(AXZ);this.AcK.L(A.jb.
Aed);this.AcK.Z(false);this.Z7.H(AX0);this.Z7.L(A.jb.Aed);this.Z7.Bnb(true);this.
Z7.Z(false);this.O_.A1(0x3F);this.O_.H(Ayz);this.O_.As(false);this.O_.Z(false);this.
YM.H(AX1);this.YM.L(A.jb.Bm);this.J(this.Ajy,0);this.J(this.MassUnit,0);this.J(this.
K1,0);this.J(this.VJ,0);this.J(this.AcK,0);this.J(this.Z7,0);this.J(this.O_,0);this.
J(this.YM,0);this.N.CF=[this,this.Bw$];this.N.Ce=[this,this.A00];this.N.Ca=[this
,this.A01];this.MassUnit.S(A.aaL(A.fl.EK));this.K1.S(A.aaL(A.fl.Aew));this.VJ.S(
A.aaL(A.fl.EK));this.AcK.ZD(this.AnR);this.Z7.ZD(this.AnR);this.Ia=A._NewObject(
A.Device.Rating,0);this.O_.L6(A._GetAutoObject(A.Device.Helper).W);this.O_.AkE(this.
Ia);this.YM.Ax(A.aaL(A.ach.AQ5));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ajy._Done();this.MassUnit._Done();this.K1._Done();this.VJ._Done();this.
AnR._Done();this.AcK._Done();this.Z7._Done();this.O_._Done();this.YM._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ajy._ReInit();
this.MassUnit._ReInit();this.K1._ReInit();this.VJ._ReInit();this.AnR._ReInit();this.
AcK._ReInit();this.Z7._ReInit();this.O_._ReInit();this.YM._ReInit();this.MassUnit.
R(A.aaR(A.acf.AAn));this.K1.R(A.aaR(A.acu.Akl));this.VJ.R(A.aaR(A.acf.BaB));this.
MassUnit.S(A.aaL(A.fl.EK));this.K1.S(A.aaL(A.fl.Aew));this.VJ.S(A.aaL(A.fl.EK));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Ia)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ajy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AWg={FM:null
,OT:null,Nl:null,C$:null,L2:null,Uc:null,Init:function(aArg){var B;A.zX([this,this.
GH],[B=this.FM,B.B$,B.Cc],0);A.pe([this,this.GH],this);},CD:function(G){C.Cg.CD.
call(this,G);A.pe([this,this.GH],this);},Bk_:function(G){var F;this.L2.BU.L(this.
L2.V.AQ);if(!!this.L2.Q)this.L2.BU.R((A._GetAutoObject(A.Device.Converter).Te((F=
this.L2.Q,F[1].call(F[0])),2,true)+CR)+A._GetAutoObject(A.acj.DU).AaE());},GH:function(
G){var AJK=true;if(this.FM.Q===1)AJK=false;this.C$.Aj(AJK);this.C$.As(AJK);this.
C$.Z(AJK);A._GetAutoObject(A.Device.Helper).ANH(this.Y);},_Init:function(aArg){C.
Cg._Init.call(this,aArg);C.AMR._Init.call(this.FM={I:this},0);C.AHA._Init.call(this.
OT={I:this},0);C.AU9._Init.call(this.Nl={I:this},0);C.AkW._Init.call(this.C$={I:
this},0);C.Iv._Init.call(this.L2={I:this},0);C.BX._Init.call(this.Uc={I:this},0);
this.__proto__=C.AWg;var B;this.Jf(A.aaR(A.acf.Settings));this.Hl.R(A.aaR(A.acf.
As2));this.FM.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.OT.Au(A._GetAutoObject(
A.Device.Device).OT);this.Nl.H(AX2);this.Nl.Aj(true);this.C$.H(Aou);this.C$.Aj(true
);this.C$.T(A.aaR(A.acf.KP));this.C$.Bi(true);this.C$.Gb(1000);this.C$.EV(99000);
this.L2.H(Atg);this.L2.Aj(true);this.L2.T(A.aaR(A.acf.A5N));this.L2.Gb(50);this.
L2.EV(2000);this.L2.ATx(A._GetAutoObject(A.acj.DU).Az6());this.Uc.H(Ah4);this.Uc.
Aj(true);this.Uc.T(A.aaR(A.acf.A8a));this.Uc.Gb(-1);this.Uc.EV(1);this.J5(this.Y
,-1);this.J5(this.Ay,-1);this.J(this.Nl,0);this.J(this.C$,0);this.J(this.L2,0);this.
J(this.Uc,0);this.Nl.Ab8([B=this.Nl,B.FW]);this.Nl.Gt([this,this.D_,this.GT]);this.
Nl.AkA(A.aaL(A.ach.Edit));this.Nl.L5([B=this.Nl,B.Ay9]);this.Nl.L8(A.aaL(A.ach.AnV
));this.Nl.Au([B=this.FM,B.B$,B.Cc]);this.Nl.CL(this.FM);this.Nl.A_R([B=this.FM,
B.ATb,B.A0Y]);this.Nl.A_Q([B=this.FM,B.ATa,B.A0X]);this.C$.Gt([this,this.D_,this.
GT]);this.C$.L5([B=this.Nl,B.Ay9]);this.C$.L8(A.aaL(A.ach.AnV));this.C$.Au([B=this.
FM,B.A81,B.ATi]);this.L2.Gt([this,this.D_,this.GT]);this.L2.L5([B=this.Nl,B.Ay9]
);this.L2.L8(A.aaL(A.ach.AnV));this.L2.Au([B=this.FM,B.A8Z,B.ATg]);this.L2.A_4([
this,this.Bk_]);this.Uc.Gt([this,this.D_,this.GT]);this.Uc.Au([B=this.OT,B.B$,B.
Cc]);this.Uc.CL(this.OT);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;
this.FM._Done();this.OT._Done();this.Nl._Done();this.C$._Done();this.L2._Done();
this.Uc._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.FM._ReInit();this.OT._ReInit();this.Nl._ReInit();this.C$._ReInit();this.L2.
_ReInit();this.Uc._ReInit();this.Jf(A.aaR(A.acf.Settings));this.Hl.R(A.aaR(A.acf.
As2));this.C$.T(A.aaR(A.acf.KP));this.L2.T(A.aaR(A.acf.A5N));this.Uc.T(A.aaR(A.acf.
A8a));},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.FM)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nl).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.L2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AU9={Y7:null,Init:
function(aArg){var B;A.zX([this,this.AfL],[B=A._GetAutoObject(A.Device.Device),B.
ASU,B.A0J],0);A.pe([this,this.AfL],this);},A4q:function(G){A._GetAutoObject(A.Device.
Device).AZ(37,true,A.jV,0,[this,this.Bce]);},A2e:function(G){var F;if(this.A_===
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
A.Device.Converter).Te(this.D7,2,true));this.PQ.R(AIe+A._GetAutoObject(A.Device.
Converter).Te(this.DW,2,true));this.SE.R(A._GetAutoObject(A.acj.DU).AaE());this.
Y7.R(this.SE.String);},A31:function(G){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).AsB(this
);},A2J:function(AtA){if(AtA===1)return this.PR;else if(AtA===2)return this.PQ;else
return null;},_Init:function(aArg){C.Acv._Init.call(this,aArg);A.acg.Text._Init.
call(this.Y7={I:this},0);this.__proto__=C.AU9;this.T(A.aaR(A.acf.ACI));this.AlS=
2000;this.AlX=20;this.Background.H(K3);this.V.H(BD);this.V.R(A.aaR(A.acf.ACI)+A.
aaR(A.acf.Colon));this.V.A6(0x12);this.AkO.H(AX3);this.AkP.H(AX4);this.Q_.H(AX5);
this.QJ.H(AX6);this.PQ.H(AX7);this.PR.H(AX8);this.SE.H(AIf);this.Y7.H(AX9);this.
Y7.Je(false);this.Y7.A6(0x12);this.Y7.L(0xFF000000);this.J5(this.H9,-8);this.J(this.
Y7,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.Y7.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Acv;this.Y7._Done();C.Acv.
_Done.call(this);},_ReInit:function(){C.Acv._ReInit.call(this);this.Y7._ReInit();
this.T(A.aaR(A.acf.ACI));this.V.R(A.aaR(A.acf.ACI)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.Y7.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Acv._Mark.call(this,D);if((B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.ABT={M:Pa,A7L:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A7L();},_Init:function(
aArg){A.Graphics.HA._Init.call(this,aArg);this.__proto__=C.ABT;},_className:"Application::AbstractPath"
};C.Aql={DQ:null,DY:null,Rm:null,AdT:null,P8:null,AdS:null,AuK:1,A5j:0,Bda:false
,Az2:true,CQ:function(){this.Bho(this);},Init:function(aArg){var B;this.Bb(this.
AdT);A.zX([this,this.Bho],[B=this.AdT,B.A88,B.BbJ],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.AdS.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BiH(this.AuK+this.A5j)));if(this.AuK===1)this.P8.R(A.aaR(A.acf.ANv));else this.
P8.R(A.aaR(A.acf.Bif));},CD:function(G){if(this.Az2)this.Az2=false;else if(this.
DQ.Bdk()===false)A.pe([this,this.A3z],this);else if(this.DQ.AAf())this.DQ.Ac$();
A.zV([this,this.AaO],A._GetAutoObject(A.Device.Device).An,0);},E4:function(G){A.
z9([this,this.AaO],A._GetAutoObject(A.Device.Device).An,0);},A3z:function(G){this.
Bda=true;A._GetAutoObject(C.A7).FB();},Bho:function(G){var B;var BdM=(C.Ww.isPrototypeOf(
B=this.AdT.AV)?B:null);if(!!BdM){var Azn=A._NewObject(A.Device.ActionToString,0);
this.Rm.R(Azn.LA(BdM.Action));}},Il:function(G){var Cy=(C.Ww.isPrototypeOf(G)?G:
null);if(!Cy)return;this.DQ.Qs(Cy.Action);this.Bmr(this.AuK+1);},BBn:function(G){
if(A._GetAutoObject(C.Pr).N3(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bmr:function(E){
if(this.AuK===E)return;this.AuK=E;this.Am();},AaO:function(G){if((this.Bda===false
)&&(this.DQ.Bdk()===false))A.pe([this,this.A3z],this);},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);C.CG._Init.call(this.
Rm={I:this},0);C.AR0._Init.call(this.AdT={I:this},0);C.CG._Init.call(this.P8={I:
this},0);A.acg.Text._Init.call(this.AdS={I:this},0);this.__proto__=C.Aql;this.Background.
L(A.jb.CU);this.N.H(U7);this.N.Z(true);this.Dr(C.IP);this.DY.A1(0x3F);this.DY.H(
Fe);this.DY.L(A.jb.CK);this.Rm.H(AX_);this.Rm.L(A.jb.Text);this.AdT.H(AX$);this.
P8.H(AYa);this.P8.R(A.aaR(A.acf.ANv));this.P8.L(A.jb.Text);this.AdS.H(AYb);this.
AdS.R(AYc);this.AdS.L(A.jb.Text);this.J(this.DY,0);this.J(this.Rm,0);this.J(this.
AdT,0);this.J(this.P8,0);this.J(this.AdS,0);this.N.CF=[this,this.A3z];this.N.Ce=[
this,this.BBn];this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeG));this.Rm.S(
A.aaL(A.fl.EK));this.Rm.AY(A.aaL(A.fl.Af));this.Rm.Cm(A.aaL(A.fl.Ak));this.AdT.A3Z=[
this,this.Il];this.P8.S(A.aaL(A.fl.EK));this.P8.AY(A.aaL(A.fl.Af));this.P8.Cm(A.
aaL(A.fl.Ak));this.AdS.S(A.aaL(A.fl.H6));this.DQ=A._GetAutoObject(C.DQ);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Rm._Done();this.
AdT._Done();this.P8._Done();this.AdS._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DY._ReInit();this.Rm._ReInit();this.AdT._ReInit();
this.P8._ReInit();this.AdS._ReInit();this.P8.R(A.aaR(A.acf.ANv));this.Rm.S(A.aaL(
A.fl.EK));this.Rm.AY(A.aaL(A.fl.Af));this.Rm.Cm(A.aaL(A.fl.Ak));this.P8.S(A.aaL(
A.fl.EK));this.P8.AY(A.aaL(A.fl.Af));this.P8.Cm(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DQ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.AR0={Ig:null,A3Z:null,Cr:null,Y:null,Ay:
null,A4F:0,Init:function(aArg){A.zV([this,this.ABI],this.Ig,0);A.zV([this,this.Bhl
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AuH],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.ABI],this);},Bb:function(E){var A3v=this.AV;
A.Core.P.Bb.call(this,E);if(this.AV!==A3v)A.abo([this,this.A88,this.BbJ],0);},DF:
function(G){var B;var Fh=0;var X=this.AV;switch(this.Cr.CP){case 6:Fh=2;break;case
7:Fh=7;break;case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(X,Fh,0x415);
if((Fh===5)&&!X){var ALp=this.AV;while(!X){ALp=this.QL(ALp,2,0x415);if(!!ALp)X=this.
QL(ALp,Fh,0x415);else break;}}if(!!X)this.Bb(X);var G0=(C.Ww.isPrototypeOf(B=this.
AV)?B:null);if(!!G0)this.A4F=(C.Ww.isPrototypeOf(B=this.AV)?B:null).Action;else this.
A4F=0;A.pe([this,this.M0],this);},A19:function(Eh){var EQ=A._GetAutoObject(C.DQ).
Bds(Eh,this.A3Z);this.J(EQ,0);},Ao8:function(){var B;var X=this.Y.Ah;while(!!X&&
!((X.U&0x200)===0x200)){var AdO=X;X=X.Ah;if(((AdO.U&0x400)===0x400))this.HR(AdO);
}},ABI:function(G){this.Ao8();var O;var CB=A._GetAutoObject(C.Pr).Ng();for(O=0;O<
CB;O=O+1){var Tp=A._GetAutoObject(C.Pr).OM(O);this.A19(Tp);}A.pe([this,this.Bhl]
,this);A.pe([this,this.BqS],this);A.pe([this,this.AuH],this);},BqS:function(G){var
B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var
Aa=(C.Ww.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.As(A._GetAutoObject(
A.Device.Helper).W.Id>=0);}X=X.Ah;}},AuH:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Ww.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.AT0(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.AT0(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.AT0(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ah;}},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((
B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},Bhl:function(G){var B;var X=this.
Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Ww.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.Pr).N3(Aa.Action)&&A._GetAutoObject(C.
DQ).A5i(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.As(true);Aa.Z(true);if(
this.A4F===Aa.Action)this.Bb(Aa);}else{Aa.As(false);Aa.Z(false);}}}X=X.Ah;}A.pe([
this,this.M0],this);},M0:function(G){var B;this.Y.VH(null,null);if(!!this.AV&&((
this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cr={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AR0;this.H(AYd);this.Cr.Filter=147;this.Y.A1(0xB);this.Y.H(AYe);this.Y.JZ(9);this.
Ay.A1(0xA);this.Ay.H(AIg);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BG=[this,this.
DF];this.Cr.D1=[this,this.DF];this.Y.Em=[this,this.Fj];this.Ig=A._GetAutoObject(
C.Pr);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.Y._Done();this.Ay._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit();}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ig)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.A3Z)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.Fr={Ek:null,AL:null,Text:null,Ap:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.AL={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.Ap._Init.call(this.
Ap={I:this},0);this.__proto__=C.Fr;this.N.As(false);this.Ek.H(BD);this.Ek.As(false
);this.AL.H(Fe);this.AL.L(A.jb.Aed);this.Text.H(BD);this.Text.R(AYf);this.Text.L(
0xFF000000);this.Ap.H(Pa);this.Ap.L(A.jb.Text);this.J(this.Ek,0);this.J(this.AL,
0);this.J(this.Text,0);this.J(this.Ap,0);this.N.Ct(A.aaL(A.ach.AeG));this.Text.S(
A.aaL(A.fl.Ak));this.Ap.Ax(A.aaL(A.ach.ADw));},_Done:function(){this.__proto__=C.
OverlayMenu;this.Ek._Done();this.AL._Done();this.Text._Done();this.Ap._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.Ek._ReInit();this.AL._ReInit();this.Text._ReInit();this.Ap._ReInit();this.
Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D
);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"};C.Aa3={Init:
function(aArg){this.V.S(A.aaL(A.fl.Ak));},H1:function(G){},Ai:function(Ae){C.BX.
Ai.call(this,Ae);var FT=A.jb.Aed;var GZ=A.jb.CU;if(this.Hn){FT=A.jb.Text;GZ=A.jb.
Bm;}if(!this.LN){this.Background.L(A.jb.CU);this.V.L(A.jb.CK);}else if(this.Qy){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){this.Background.L(
A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}this.Hy.L(A.
jb.CU);this.H9.L(A.jb.CU);},Ho:function(G){var B;var Gh=this.DB.G8;var CA=(C.CG.
isPrototypeOf(B=this.DB.Cj)?B:null);if(!CA)return;CA.S(A.aaL(A.fl.Ak));CA.AY(A.aaL(
A.fl.Bh));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));else CA.R(Xp);CA.H(A.
abK(CA.M,[this.DB.Wm,(B=this.DB.M)[3]-B[1]]));},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.Aa3;this.DB.AFC(170);this.DB.N8(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.Ajl={C_:null,Init:function(
aArg){this.V.Text.A6(0x11);this.V.Text.Hp(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Cp.Ai.call(this,Ae);var FT=A.jb.Aed;var GZ=A.jb.CU;if(this.Hn){FT=A.jb.Text;
GZ=A.jb.Bm;}if(!this.LN){this.Background.L(A.jb.CU);this.V.L(A.jb.CK);}else if(this.
Qy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}},_Init:function(
aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(this.C_={I:this},0);this.__proto__=
C.Ajl;this.C_.H(AYg);this.C_.Cw(1);this.J(this.C_,0);this.C_.Ax(A.aaL(A.ach.Ajv)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cp;this.C_._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.C_._ReInit();},_Mark:
function(D){var B;C.Cp._Mark.call(this,D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AMc={Y:null,RS:null,TD:null
,TE:null,TF:null,AdR:null,XW:null,VB:null,VC:null,Aa2:null,Ay:null,Init:function(
aArg){this.Bb(this.RS);},DF:function(G){C.Fr.DF.call(this,G);this.M0(this);},H1:
function(G){this.BgC(this);},Lr:function(){if(!this.BQ){this.BQ=A._NewObject(C.N
,0);this.BQ.CF=[this,this.BgC];this.BQ.Ce=null;this.BQ.Ca=null;this.BQ.CS(A.jV);
this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},ABl:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.XW.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.XW.Q))A._GetAutoObject(C.AutoActions).J(this.XW.Q);if(!!this.VB.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.VB.Q))A._GetAutoObject(C.AutoActions
).J(this.VB.Q);if(!!this.VC.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.VC.
Q))A._GetAutoObject(C.AutoActions).J(this.VC.Q);if(!!this.Aa2.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.Aa2.Q))A._GetAutoObject(C.AutoActions).J(this.Aa2.Q
);A._GetAutoObject(C.AutoActions).Ci();},BgC:function(G){if(this.BAu()===true){this.
ABl();this.AaQ(this);}else A._GetAutoObject(A.Device.Device).AZ(27,true,A.jV,0,null
);},BAu:function(){return(!!this.XW.C7(this.XW.Q)||!!this.VB.C7(this.VB.Q))||!!this.
VC.C7(this.VC.Q);},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.
Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},M0:function(G){var B;this.
Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true
,null,null);},BBB:function(G){var B;A._GetAutoObject(A.Device.Device).ResetAutoActions(
this);this.XW.AtH(this);this.VB.AtH(this);this.VC.AtH(this);this.Aa2.AtH(this);}
,_Init:function(aArg){C.Fr._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this
},0);C.Aa3._Init.call(this.RS={I:this},0);C.Aa3._Init.call(this.TD={I:this},0);C.
Aa3._Init.call(this.TE={I:this},0);C.Aa3._Init.call(this.TF={I:this},0);C.Avd._Init.
call(this.AdR={I:this},0);C.AutoAction._Init.call(this.XW={I:this},0);C.AutoAction.
_Init.call(this.VB={I:this},0);C.AutoAction._Init.call(this.VC={I:this},0);C.AutoAction.
_Init.call(this.Aa2={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=
C.AMc;var B;this.H(Rr);this.Text.R(A.aaR(A.acf.TG));this.Y.H(L9);this.Y.JZ(1);this.
RS.H(Ah3);this.RS.As(true);this.RS.Aj(true);this.RS.T(A._GetAutoObject(A.Device.
Helper).MO(A.aaR(A.acf.Ajk),Pc,AIh));this.TD.H(U8);this.TD.As(true);this.TD.Aj(true
);this.TD.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Ajk),Pc,AIi));this.
TE.H(Aao);this.TE.As(true);this.TE.Aj(true);this.TE.T(A._GetAutoObject(A.Device.
Helper).MO(A.aaR(A.acf.Ajk),Pc,AIj));this.TF.H(Alk);this.TF.As(true);this.TF.Aj(
true);this.TF.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Ajk),Pc,AIk));this.
AdR.H(AyA);this.AdR.Aj(true);this.AdR.T(A.aaR(A.acf.A$G));this.VB.Index=1;this.VC.
Index=2;this.Aa2.Index=3;this.Ay.H(Ix);this.J(this.Y,0);this.J(this.RS,0);this.J(
this.TD,0);this.J(this.TE,0);this.J(this.TF,0);this.J(this.AdR,0);this.J(this.Ay
,0);this.Y.Em=[this,this.Fj];this.RS.ZA(A.aaL(A.fl.H6));this.RS.ZB(A.aaL(A.fl.H6
));this.RS.Au([B=this.XW,B.B$,B.Cc]);this.RS.CL(this.XW);this.TD.ZA(A.aaL(A.fl.H6
));this.TD.ZB(A.aaL(A.fl.H6));this.TD.Au([B=this.VB,B.B$,B.Cc]);this.TD.CL(this.
VB);this.TE.ZA(A.aaL(A.fl.H6));this.TE.ZB(A.aaL(A.fl.H6));this.TE.Au([B=this.VC,
B.B$,B.Cc]);this.TE.CL(this.VC);this.TF.ZA(A.aaL(A.fl.H6));this.TF.ZB(A.aaL(A.fl.
H6));this.TF.Au([B=this.Aa2,B.B$,B.Cc]);this.TF.CL(this.Aa2);this.AdR.AR=[this,this.
BBB];this.Init(aArg);},_Done:function(){this.__proto__=C.Fr;this.Y._Done();this.
RS._Done();this.TD._Done();this.TE._Done();this.TF._Done();this.AdR._Done();this.
XW._Done();this.VB._Done();this.VC._Done();this.Aa2._Done();this.Ay._Done();C.Fr.
_Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.Y._ReInit();this.
RS._ReInit();this.TD._ReInit();this.TE._ReInit();this.TF._ReInit();this.AdR._ReInit(
);this.XW._ReInit();this.VB._ReInit();this.VC._ReInit();this.Aa2._ReInit();this.
Ay._ReInit();this.Text.R(A.aaR(A.acf.TG));this.RS.T(A._GetAutoObject(A.Device.Helper
).MO(A.aaR(A.acf.Ajk),Pc,AIh));this.TD.T(A._GetAutoObject(A.Device.Helper).MO(A.
aaR(A.acf.Ajk),Pc,AIi));this.TE.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.
Ajk),Pc,AIj));this.TF.T(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Ajk),Pc
,AIk));this.AdR.T(A.aaR(A.acf.A$G));},_Mark:function(D){var B;C.Fr._Mark.call(this
,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aa2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"};C.Cn={BI:
A.abi(27,0,null),Du:function(){return 16;},C7:function(aIndex){if(aIndex>=27)return-
1;return this.BI.Get(aIndex);},DZ:function(A8){var O=0;while(O<27){if(this.BI.Get(
O)===A8)return O;O=O+1;}return-1;},H8:function(){var O=0;var max=-1;while(O<27){
if(this.BI.Get(O)>max)max=this.BI.Get(O);O=O+1;}return max;},_Init:function(aArg
){C.AC._Init.call(this,aArg);(this.BI=[]).__proto__=C.Cn.BI;this.__proto__=C.Cn;
},_className:"Application::ArraySelection"};C.AutoAction={Ig:null,Ac$:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AtH],this.Ac$,0);A.pe([this,this.
AtH],this);},Du:function(){return this.Ig.Ng();},C7:function(aIndex){if(aIndex>=
this.Du())return-1;return this.Ig.OM(aIndex);},Gm:function(aIndex){return this.ActionToString.
BT(this.C7(aIndex));},DZ:function(A8){var O=0;while(O<this.Du()){if(this.Ig.OM(O
)===A8)return O;O=O+1;}return-1;},H8:function(){var O=0;var max=-1;while(O<this.
Du()){if(this.Ig.OM(O)>max)max=this.Ig.OM(O);O=O+1;}return max;},AtH:function(G){
this.Q=this.Ac$.OM(this.Index);A.abo([this,this.B$,this.Cc],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.Ig=A._GetAutoObject(C.Au0);this.Ac$=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Ig)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ac$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AMi={AtE:0,Init:function(aArg
){var B;A.zX([this,this.Be8],[B=A._GetAutoObject(A.Device.Device),B.A8N,B.Bbu],0
);A.zX([this,this.Be5],[B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0E],0);A.pe([
this,this.Be8],this);A.pe([this,this.Be5],this);},Clear:function(){C.VG.Clear.call(
this);this.AtE=0;},Ci:function(){A._GetAutoObject(A.Device.Device).ArM(this.AtE);
A._GetAutoObject(A.Device.Device).ArN(this.toString());},Be8:function(G){this.AtE=
A._GetAutoObject(A.Device.Device).Pr;A.we(this,0);},Be5:function(G){this.E3(A._GetAutoObject(
A.Device.Device).AuM);A.we(this,0);},N3:function(Eh){if((this.AtE&(((B=Eh)<0)?B+
0x100000000:B))===(((B=Eh)<0)?B+0x100000000:B))return true;return false;},AUZ:function(
Eh){this.AtE=this.AtE|(((B=Eh)<0)?B+0x100000000:B);},_Init:function(aArg){C.VG._Init.
call(this,aArg);this.__proto__=C.AMi;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.Pr={_Init:function(){C.AMi._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AMj={VE:null,Ay:null,Y:null,JV:null,CQ:function(
){this.AiM(this);},Init:function(aArg){A.zV([this,this.AiM],this.VE,0);A.pe([this
,this.AiM],this);},DF:function(G){C.Fr.DF.call(this,G);this.M0(this);},Lr:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.Ew];this.BQ.Ce=[
this,this.A3G];this.BQ.Ca=[this,this.A3$];this.BQ.C4(A.aaL(A.ach.Arl));this.BQ.Ct(
A.aaL(A.ach.Ard));this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},Ew:function(G){if(
this.Bzk()>0){this.ABl();this.AaQ(this);}else A._GetAutoObject(A.Device.Device).
AZ(28,true,A.jV,0,null);},AiM:function(G){this.Ao8();var O;for(O=0;O<this.VE.Ng(
);O=O+1){var Tp=A._GetAutoObject(C.Pr).OM(O);this.A1M(Tp);}this.J(this.JV,0);A.aaS([
this,this.M0],this);},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]
);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},M0:function(G){var
B;this.Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.
AV,true,null,null);},A1M:function(Hb){var Azn=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.Sm,0);Aa.T(Azn.BT(Hb));Aa.Aj(true);Aa.G8=Hb;Aa.A_D(this.
VE.N3(Hb));this.J(Aa,0);this.ZL(Aa);},Ao8:function(){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){var AdO=X;X=X.Ah;if(((AdO.U&0x400)===0x400))this.HR(
AdO);}},ABl:function(){var B;this.VE.Clear();var X=this.Y.Ah;while(!!X&&!((X.U&0x200
)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JV)){var Aa=(C.Sm.isPrototypeOf(
X)?X:null);if(!!Aa){this.VE.J(Aa.G8);if(Aa.ASS())this.VE.AUZ(Aa.G8);}else A.ab5(
"%s",AyB);}X=X.Ah;}this.VE.Ci();},Bzk:function(){var B;var A4G=0;var X=this.Y.Ah;
while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.JV)){var
Aa=(C.Sm.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ASS())A4G=A4G+1;}else A.ab5("%s"
,AyB);}X=X.Ah;}return A4G;},A3G:function(G){var B;var Aa=(C.Sm.isPrototypeOf(B=this.
AV)?B:null);if(!!Aa){var AAB=(C.Sm.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAB){this.
AhF(AAB,Aa);A.pe([this,this.M0],this);}}},A3$:function(G){var B;var Aa=(C.Sm.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AA9=(C.Sm.isPrototypeOf(B=Aa.AJ)?B:null);if(!!AA9
){this.AhF(Aa,AA9);A.pe([this,this.M0],this);}}},AqR:function(G){var B;A._GetAutoObject(
A.Device.Device).ResetActiveActions(this);A.pe([this,this.AiM],this);},_Init:function(
aArg){C.Fr._Init.call(this,aArg);C.Ay._Init.call(this.Ay={I:this},0);A.Core.Y._Init.
call(this.Y={I:this},0);C.Avd._Init.call(this.JV={I:this},0);this.__proto__=C.AMj;
this.H(Rr);this.Text.R(A.aaR(A.acf.AEx));this.Ay.H(Ix);this.Y.H(L9);this.Y.JZ(1);
this.JV.H(AIl);this.JV.Aj(true);this.JV.T(A.aaR(A.acf.AqR));this.J(this.Ay,0);this.
J(this.Y,0);this.J(this.JV,0);this.Y.Em=[this,this.Fj];this.JV.AR=[this,this.AqR
];this.VE=A._GetAutoObject(C.Pr);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fr;this.Ay._Done();this.Y._Done();this.JV._Done();C.Fr._Done.call(this);},_ReInit:
function(){C.Fr._ReInit.call(this);this.Ay._ReInit();this.Y._ReInit();this.JV._ReInit(
);this.Text.R(A.aaR(A.acf.AEx));this.JV.T(A.aaR(A.acf.AqR));this.CQ();},_Mark:function(
D){var B;C.Fr._Mark.call(this,D);if((B=this.VE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"
};C.Sm={G8:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A6(0x11);this.
V.Text.Hp(10);},Bl:function(aSize){C.Uj.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mv.M[0]));},Ai:function(Ae){var B;C.Uj.Ai.call(this,Ae);var Hg=((Ae&0x10
)===0x10);var Fv=((Ae&0x20)===0x20);var GE=this.Bo.Bw;var FT=A.jb.Aed;var GZ=A.jb.
Bm;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.Text;}if(!Hg){this.Background.L(FT);this.V.L(A.
jb.CK);}else if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.
Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);
}this.LN=Hg;this.KM=Fv;this.Qy=GE;},H1:function(G){this.A39(this);},A39:function(
G){this.AFi(!this.AmH);},A_D:function(E){this.AFi(E);},ASS:function(){return this.
AmH;},_Init:function(aArg){C.Uj._Init.call(this,aArg);this.__proto__=C.Sm;this.Mv.
H(AIm);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.VG={CB:0,
Ig:A.abi(17,0,null),OM:function(HC){return this.Ig.Get(HC);},Ng:function(){return this.
CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Ig.Set(O,0);this.CB=0;},J:function(
Eh){if(this.CB>=17)A.ab5("%s",AIn);else{this.Ig.Set(this.CB,Eh);this.CB=this.CB+
1;}},Ci:function(){},E3:function(AcZ){var AJx=AcZ.indexOf(String.fromCharCode(0x2C
),0);var A1_=A.jV;var O=0;this.CB=0;while(O<17)if(AcZ===A.jV){this.Ig.Set(O,0);O++;
}else{if(AJx===-1){A1_=AcZ;AcZ=A.jV;}else{A1_=A.abV(AcZ,AJx);AcZ=A.ab1(AcZ,0,AJx+
1);}var Tp=A.abZ(A1_,0,10)|0;if(this.AEa(Tp)){this.Ig.Set(this.CB,Tp);this.CB=this.
CB+1;O++;}AJx=AcZ.indexOf(String.fromCharCode(0x2C),0);}if(AcZ!==A.jV)A.ab5("%s"
,AyC);},toString:function(){var A3m=(((B=this.Ig.Get(0))<0)?B+0x100000000:B).toFixed(
);var O;for(O=1;O<this.CB;O=O+1)A3m=(A3m+AyD)+(((B=this.Ig.Get(O))<0)?B+0x100000000:
B).toFixed();return A3m;},AxE:function(HC,Eh){if(HC>=this.CB){A.ab5("%s",((((AYh+
HC.toFixed())+AYi)+this.CB.toFixed())+AYj)+AYk);return;}this.Ig.Set(HC,Eh);},Contains:
function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(this.Ig.Get(O)===Eh)return true;return false;
},AEa:function(Eh){return true;},DZ:function(Eh){var O;for(O=0;O<this.CB;O=O+1)if(
this.Ig.Get(O)===Eh)return O;return-1;},_Init:function(aArg){(this.Ig=[]).__proto__=
C.VG.Ig;this.__proto__=C.VG;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.AM1={Init:function(aArg){var B;A.zX([this,this.Bfg],[B=A._GetAutoObject(A.Device.
Device),B.A8Y,B.BbC],0);A.pe([this,this.Bfg],this);},Ci:function(){A._GetAutoObject(
A.Device.Device).Akv(this.toString());},AEa:function(Eh){switch(Eh){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bfg:function(
G){this.E3(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.VG._Init.call(this,aArg);this.__proto__=C.AM1;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.AM1._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
Ww={VD:null,KC:null,A7K:A.jV,Action:0,A5k:false,A$r:false,Baa:false,Bl:function(
aSize){C.Fn.Bl.call(this,aSize);this.Q5.H(this.MB.M);this.OL.H(this.Q5.M);},Ai:function(
Ae){C.Fn.Ai.call(this,Ae);if(!this.LN){this.KC.T7.L(A.jb.Am8);this.KC.QN.Z(true);
this.KC.QN.L(A.jb.ARk);}else if(this.Qy){this.KC.T7.L(A.jb.Bm);this.KC.QN.Z(false
);}else if(this.KM){this.KC.T7.L(A.jb.Bm);this.KC.QN.Z(false);}else{this.KC.T7.L(
A.jb.Text);this.KC.QN.Z(true);this.KC.QN.L(A.jb.CU);}},Bmq:function(E){if(this.Action===
E)return;this.Action=E;},Bnw:function(E){if(this.A7K===E)return;this.A7K=E;this.
VD.Text.R(E);},AT0:function(E){if(this.Baa===E)return;this.Baa=E;this.KC.Boi(!this.
KC.AVn);},AFT:function(E){if(this.A$r===E)return;this.A$r=E;this.KC.Z(!this.KC.Fp(
));},A94:function(E){if(this.A5k===E)return;this.A5k=E;this.VD.Z(E);},_Init:function(
aArg){C.Fn._Init.call(this,aArg);C.VD._Init.call(this.VD={I:this},0);C.KC._Init.
call(this.KC={I:this},0);this.__proto__=C.Ww;this.H(AYl);this.Background.H(AYm);
this.G$.As(false);this.G$.Z(false);this.VD.H(AYn);this.VD.Z(false);this.KC.H(AYo
);this.KC.Z(false);this.J(this.VD,0);this.J(this.KC,0);this.MB.Ax(A.aaL(A.ach.ANw
));},_Done:function(){this.__proto__=C.Fn;this.VD._Done();this.KC._Done();C.Fn._Done.
call(this);},_ReInit:function(){C.Fn._ReInit.call(this);this.VD._ReInit();this.KC.
_ReInit();},_Mark:function(D){var B;C.Fn._Mark.call(this,D);if((B=this.VD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.VD={AL:null,Text:null,BW:null,Init:function(
aArg){this.Text.H(this.M);this.BW.H(this.M);this.AL.H(this.M);},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.AL={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.BW._Init.call(this.BW={I:this},0);this.__proto__=
C.VD;this.AL.H(AYp);this.AL.L(A.jb.Bj9);this.H(AYq);this.Text.H(AYr);this.Text.L(
A.jb.Text);this.BW.H(AYs);this.BW.Nu(1);this.BW.L(A.jb.Text);this.J(this.AL,0);this.
J(this.Text,0);this.J(this.BW,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.P;this.AL._Done();this.Text._Done();this.BW._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AL._ReInit();this.Text._ReInit();this.BW._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BW).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.KC={QN:null
,T7:null,AVn:false,Boi:function(E){if(this.AVn===E)return;this.AVn=E;if(E){this.
T7.Ax(A.aaL(A.ach.ACP));this.QN.Ax(A.aaL(A.ach.ACP));}else{this.T7.Ax(A.aaL(A.ach.
AqL));this.QN.Ax(A.aaL(A.ach.AqL));}},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.Ap._Init.call(this.QN={I:this},0);A.acg.Ap._Init.call(this.T7={I:this
},0);this.__proto__=C.KC;this.H(AyE);this.QN.H(AyE);this.QN.Cw(1);this.T7.H(AyE);
this.T7.Cw(0);this.J(this.QN,0);this.J(this.T7,0);this.QN.Ax(A.aaL(A.ach.AqL));this.
T7.Ax(A.aaL(A.ach.AqL));},_Done:function(){this.__proto__=A.Core.P;this.QN._Done(
);this.T7._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.QN._ReInit();this.T7._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.QN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T7).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ASm={
Gf:null,Cd:null,Dp:null,Dj:null,Kx:null,Zr:10,Aq$:0,AEI:0,ASA:0,Azm:false,L1:false
,Bdj:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).An.Ll(
))A._GetAutoObject(A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).
An.HM().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gs();A._GetAutoObject(
A.Device.Helper).Aqo(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AAQ],this.
Db.Q,0);A.zX([this,this.BBk],this.Dp.Q,0);A.zX([this,this.ABG],this.Dj.Q,0);A.zX([
this,this.ABG],this.Dj.HJ.Q,0);A.zX([this,this.ABG],[this,this.ASZ,this.AFR],0);
A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.A9W,B.Bb6],0);A.zX([this
,this.BfP],this.Cd.Q,0);A.pe([this,this.AAQ],this);A.pe([this,this.GH],this);A.pe([
this,this.ABG],this);A.pe([this,this.BfP],this);},CD:function(G){if(!this.Azm){this.
Azm=true;A.pe([this,this.AcW],this);}else C.H3.CD.call(this,G);},Agj:function(G){
this.ASA=this.Zr;this.Bdr(this);},Ew:function(G){A._GetAutoObject(A.Device.Helper
).W.E7();A._GetAutoObject(C.A7).FB();},Aut:function(){this.N.CS(A.jV);this.N.C4(
A.aaL(A.ach.ADV));this.N.Ca=[this,this.Ay8];},AAK:function(G){A._GetAutoObject(C.
A7).Cb(55);},AFR:function(E){if(this.Zr===E)return;this.Zr=E;A.abo([this,this.ASZ
,this.AFR],0);},Bdr:function(G){var F;if(!this.Zr||(this.Bdj===true)){A._GetAutoObject(
A.Device.Device).AZ(24,false,CR,0,null);if(this.AEI===1)A._GetAutoObject(A.Device.
Device).AZ(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).AZ(23,
true,this.AEI.toFixed(),2000,null);this.Ew(this);return;}this.Gf.Gs();this.Gf.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.Gf.N7(A._GetAutoObject(A.Device.
Helper).W.Breed);this.Gf.Q8(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
Gf.J0(A._GetAutoObject(A.Device.Helper).W.Gender);this.Gf.Nr(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.Gf.P0(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.Gf.SQ(A._GetAutoObject(A.Device.Helper).W.VisualId);var Alx=A._GetAutoObject(
A.Device.Helper).A14(this.Gf,(F=this.Dj.H4.Hv,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).An);if(!Alx)this.Ai2();else{A._GetAutoObject(A.Device.Helper).AKx(
this.Gf,Alx,(F=this.Dj.H4.Hv,F[1].call(F[0])),this.Zr-1,[this,this.ApM]);A._GetAutoObject(
A.Device.Device).AZ(24,false,CR,0,null);}},GH:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).Am_())this.C$.Z(true);else this.C$.Z(false);if(this.L1){this.Dp.
Z(false);this.Cd.T(A.aaR(A.acf.ACW));this.Cd.AFk(A.aaL(A.ach.Afg));}else{this.Dp.
Z(true);this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.AFk(null);}if((this.Y.BjI(this.AV)>=
0)&&(((this.AV.U&0x1)===0x1)===false))this.JN(this.Y.TY(this.AV,0x1));this.Am();
},ATu:function(E){if(this.Aq$===E)return;this.Aq$=E;A.abo([this,this.A9a,this.ATu
],0);},ABG:function(G){var F;var AKj=(F=this.Dj.Q,F[1].call(F[0]));var AAs=-1;switch((
F=this.Dj.H4.Hv,F[1].call(F[0]))){case 0:AAs=AKj+((F=A._GetAutoObject(A.Device.Helper
).BdZ(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Zr-1));break;case 1:AAs=(AKj+this.
Zr)-1;break;case 3:case 2:case 5:case 4:switch(this.Dj.HJ.AC.Q){case 0:AAs=(AKj+
this.Zr)-1;break;case 1:AAs=(AKj-this.Zr)+1;break;default:throw new Error(AYt+this.
Dj.HJ.AC.Q.toFixed());}break;default:throw new Error(AYu+this.Dj.HJ.AC.Q.toFixed(
));}this.ATu(AAs);},BBk:function(G){A.pe([this,this.GH],this);A.pe([this,this.Auc
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
A.Device.Helper).Am_()){if(A._GetAutoObject(A.Device.Device).Bt.Ll()){A._GetAutoObject(
A.Device.Device).AZ(24,false,U9,0,null);A._GetAutoObject(A.Device.Device).AZ(50,
true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),0,null);}else{var Md=A.
_GetAutoObject(A.Device.Device).An.LZ(0,this.Gf.Id);A._GetAutoObject(A.Device.Device
).SX(Md);var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(this.Gf.
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
this.Dj.Kr.V3,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dj.Q,F[2].call(F[0],I3[1].call(I3[0])));
}var XS=100-((this.Zr/this.ASA)*100);A._GetAutoObject(A.Device.Device).AZ(24,true
,(((this.ASA.toFixed()+Ati)+(XS|0).toFixed())+Ati)+(F=this.Dj.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BBu]);this.AFR(this.Zr-1);A.aaS([this,this.Bdr],null);},BBu:
function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.
PopupState===5))this.Bdj=true;},ApN:function(G){var F;C.H3.ApN.call(this,G);var Ao1=
0;switch((F=this.B0.Q,F[1].call(F[0]))){case 0:case 2:Ao1=A._GetAutoObject(A.Device.
Device).AdV;break;case 1:Ao1=730;break;default:A.ab5("%s%e",Alh,(F=this.B0.Q,F[1
].call(F[0])));}A._GetAutoObject(A.Device.Helper).W.Q8(A._GetAutoObject(A.Device.
Helper).Dv()-A._GetAutoObject(A.Device.Helper).AmN(Ao1));(F=this.C$.Q,F[2].call(
F[0],this.C$.An2));switch(this.B0.AC.Q){case 0:{this.Kx.Jg(A.aaR(A.acf.ANr));this.
Kx.IW(A.aaR(A.acf.ANs));}break;case 1:{this.Kx.Jg(A.aaR(A.acf.Bip));this.Kx.IW(A.
aaR(A.acf.Biq));}break;case 2:{this.Kx.Jg(A.aaR(A.acf.Bkv));this.Kx.IW(A.aaR(A.acf.
Bkw));}break;default:throw new Error(Alh);}},Ae6:function(E){if(this.L1===E)return;
this.L1=E;A.abo([this,this.Awo,this.Ae6],0);},Auc:function(G){var F,Cu,Tl;this.Ae6(((
F=this.Cd.Q,F[1].call(F[0]))===(Cu=this.Dp.Q,Cu[1].call(Cu[0])))&&!!(Tl=this.Cd.
Q,Tl[1].call(Tl[0])));A.pe([this,this.GH],this);},BfP:function(G){A.pe([this,this.
Auc],this);},ASZ:function(){return this.Zr;},A9a:function(){return this.Aq$;},Awo:
function(){return this.L1;},_Init:function(aArg){C.H3._Init.call(this,aArg);C.Av7.
_Init.call(this.Cd={I:this},0);C.Rd._Init.call(this.Dp={I:this},0);C.AGW._Init.call(
this.Dj={I:this},0);C.AU$._Init.call(this.Kx={I:this},0);this.__proto__=C.ASm;var
B;this.Dr(C.ADy);this.Cd.H(Aor);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak7));this.
Cd.ArU(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.
aaR(A.acf.Akn));this.Dp.H(AYv);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uq));this.
Dp.Ar_(false);this.Dj.H(AYw);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.A7x));this.Dj.
Bx(0);this.Kx.H(AYx);this.Kx.Aj(true);this.Kx.T(A.aaR(A.acf.A8E));this.Kx.Gb(1);
this.Kx.EV(500);this.Kx.IW(A.aaR(A.acf.ANs));this.Kx.Jg(A.aaR(A.acf.ANr));this.Kx.
A_u(A.aaR(A.acf.Aq$)+A.aaR(A.acf.Colon));this.J(this.Cd,0);this.J(this.Dp,0);this.
J(this.Dj,0);this.J(this.Kx,0);this.Gf=A._NewObject(A.Device.Animal,0);this.Cd.AR=[
this,this.AcW];this.Cd.L5([this,this.AcW]);this.Cd.L8(A.aaL(A.ach.Afg));this.Cd.
Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArJ,B.P0]);this.Cd.OU([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.Cd.PY([B=A._GetAutoObject(A.Device.Device),B.Ut
,B.Va]);this.Cd.Uv([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoD]);this.Cd.Ae6([
this,this.Awo,this.Ae6]);this.Dp.Gt([this,this.D_,this.GT]);this.Dp.L5([this,this.
AcW]);this.Dp.L8(A.aaL(A.ach.Afg));this.Dp.Ux([B=this.Gender.Animal,B.WK,B.J0]);
this.Dp.OU([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.Dp.PY([B=A._GetAutoObject(
A.Device.Device),B.Ut,B.Va]);this.Dp.Uv([B=A._GetAutoObject(A.Device.Device),B.Anu
,B.AoD]);this.Dp.Au([B=A._GetAutoObject(A.Device.Helper).W,B.Any,B.Nr]);this.Dp.
AnA([B=this.AnimalType.Animal,B.PX,B.EC]);this.Dj.Gt([this,this.D_,this.GT]);this.
Dj.L5([B=this.Dj,B.FW]);this.Dj.L8(A.aaL(A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ArK,B.SQ]);this.Dj.A95(A._GetAutoObject(A.Device.Helper).W);
this.Kx.Au([this,this.ASZ,this.AFR]);this.Kx.BmU([this,this.A9a,this.ATu]);this.
Init(aArg);},_Done:function(){this.__proto__=C.H3;this.Cd._Done();this.Dp._Done(
);this.Dj._Done();this.Kx._Done();C.H3._Done.call(this);},_ReInit:function(){C.H3.
_ReInit.call(this);this.Cd._ReInit();this.Dp._ReInit();this.Dj._ReInit();this.Kx.
_ReInit();this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.ArU(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.aaR(A.acf.Akn));this.Dp.T(A.aaR(A.acf.
Uq));this.Dj.T(A.aaR(A.acf.A7x));this.Kx.T(A.aaR(A.acf.A8E));this.Kx.IW(A.aaR(A.
acf.ANs));this.Kx.Jg(A.aaR(A.acf.ANr));this.Kx.A_u(A.aaR(A.acf.Aq$)+A.aaR(A.acf.
Colon));},_Mark:function(D){var B;C.H3._Mark.call(this,D);if((B=this.Gf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Dp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.AUC={BX:null,RatingMode:null,Lr:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Ce=null;this.BQ.CF=[this,this.AaQ];this.BQ.CS(A.jV
);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},_Init:function(
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
BT(this.C7(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Aw$(E);},Bgq:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.BI.Set(0,0);this.BI.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cn;this.RatingModeToString._Done();C.Cn._Done.call(this
);},_ReInit:function(){C.Cn._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ANL={W3:
function(G){C.Amz.W3.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aq6()){
A._GetAutoObject(A.Device.Helper).W.AkC(false);A._GetAutoObject(A.Device.Helper).
W.Ci(A._GetAutoObject(A.Device.Device).An);}},_Init:function(aArg){C.Amz._Init.call(
this,aArg);this.__proto__=C.ANL;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hk={DL:A.jV,T:function(E){if(this.DL===E)return;this.DL=E;},_Init:function(aArg
){A.Core.P._Init.call(this,aArg);this.__proto__=C.Hk;},_className:"Application::BaseItem"
};C.AV$={BX:null,WeightRecordingMode:null,Lr:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.Ca=null;this.BQ.Ce=null;this.BQ.CF=[this,this.AaQ];this.BQ.CS(A.jV
);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},_Init:function(
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
WeightRecordingModeToString.BT(this.C7(aIndex));},Au:function(E){C.Cn.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Axm(E);},Init:function(aArg){var B;A.zX([this
,this.Bhx],[B=A._GetAutoObject(A.Device.Device),B.A9V,B.Bb5],0);A.pe([this,this.
Bhx],this);},Bhx:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.BI.Set(0,0);this.BI.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.WeightRecordingModeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Abb={BooleanToAutoOnOff:null,Gm:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BT(aIndex);},_Init:function(aArg){C.Ge._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Abb;},_Done:function(
){this.__proto__=C.Ge;this.BooleanToAutoOnOff._Done();C.Ge._Done.call(this);},_ReInit:
function(){C.Ge._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Ge._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.Ax2={A7L:function(){var B;this.
AxF(1);this.Jz(0,3);this.VP(0,0,(B=this.M)[3]-B[1]);this.A5n(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A5n(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.VZ(0);},_Init:
function(aArg){C.ABT._Init.call(this,aArg);this.__proto__=C.Ax2;},_className:"Application::Triangle"
};C.AUd={Y:null,Init:function(aArg){this.ByH(this);},ByG:function(Qg){var Aa=A._NewObject(
C.ANS,0);Aa.H(BD);Aa.T(Qg);Aa.Aj(true);Aa.As(false);Aa.Bi(true);this.J(Aa,0);this.
AtG(this);},AtG:function(G){var B;var AlF=1;var A3d=0;var X=this.Y.Ah;var Cy=null;
var K_=null;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.O4.isPrototypeOf(X)?X:null);
if(((X.U&0x400)===0x400)&&!!Cy){var ALs=(B=Cy.V.B7.A7o(Cy.V.String,0,-1))[2]-B[0
];if(!!(C.My.isPrototypeOf(X)?X:null))ALs=ALs+20;if(A3d<ALs)A3d=ALs;Cy.H(A.abL(Cy.
M,120));Cy.H(A.abI(Cy.M,28));Cy.H(A.abM(Cy.M,this.M[0]));Cy.H(A.abO(Cy.M,((B=this.
M)[3]-B[1])-(AlF*28)));AlF=AlF+1;}else{K_=(A.acg.C8.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!K_){var Di=((B=this.M)[3]-B[1])-((AlF-1)*28);K_.DN([this.
M[0],K_.Et[1]]);K_.DN([K_.Et[0],Di]);K_.DD([this.M[0]+120,K_.ED[1]]);K_.DD([K_.ED[
0],Di]);}}X=X.Ah;}this.BCc(A3d,28);},BCc:function(aWidth,BxP){var B;var X=this.Y.
Ah;var Cy=null;var K_=null;aWidth=aWidth+20;if(aWidth>(C.AsF[0]-10))aWidth=C.AsF[
0]-10;while(!!X&&!((X.U&0x200)===0x200)){Cy=(C.O4.isPrototypeOf(X)?X:null);if(((
X.U&0x400)===0x400)&&!!Cy){Cy.V.Text.A6(0x14);Cy.V.Text.Hp(10);Cy.H(A.abL(Cy.M,aWidth
));Cy.H(A.abI(Cy.M,BxP));Cy.H(A.abM(Cy.M,this.M[2]-((B=Cy.M)[2]-B[0])));}else{K_=(
A.acg.C8.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!K_){K_.DN([this.M[
2]-aWidth,K_.Et[1]]);K_.DD([this.M[2],K_.ED[1]]);}}X=X.Ah;}},ByH:function(G){var
Aa=A._GetAutoObject(C.BS).AqV;while(!!Aa){if(!!(C.Axt.isPrototypeOf(Aa)?Aa:null)
){var EF=(C.Axt.isPrototypeOf(Aa)?Aa:null);this.ByF(EF.DL,EF.AR,EF.Bw,EF.ARs);}else
if(!!(C.Axv.isPrototypeOf(Aa)?Aa:null)){var EF=(C.Axv.isPrototypeOf(Aa)?Aa:null);
this.ByM(EF.DL,EF.AR,EF.Bw,EF.WJ,EF.W5);}else if(!!(C.ZH.isPrototypeOf(Aa)?Aa:null
)){var EF=(C.ZH.isPrototypeOf(Aa)?Aa:null);this.ByE(EF.DL,EF.AR,EF.Bw);}else if(
!!(C.AkI.isPrototypeOf(Aa)?Aa:null)){var EF=(C.AkI.isPrototypeOf(Aa)?Aa:null);this.
ByG(EF.DL);}else if(!!(C.AGo.isPrototypeOf(Aa)?Aa:null))this.ByN();Aa=Aa.MF;}A._GetAutoObject(
C.BS).Clear();A.pe([this,this.AtG],this);},ByE:function(Qg,Ac6,Ah8){var Aa=A._NewObject(
C.My,0);Aa.H(BD);Aa.T(Qg);Aa.AR=Ac6;Aa.Aj(true);Aa.As(Ah8);Aa.Bi(true);this.J(Aa
,0);this.AtG(this);},ByN:function(){var K_=A._NewObject(A.acg.C8,0);K_.L(A.jb.Bm
);K_.Aj(true);K_.Nu(3);this.J(K_,0);this.AtG(this);},ByF:function(Qg,Ac6,Ah8,A1n
){var Aa=A._NewObject(C.AmL,0);Aa.H(BD);Aa.T(Qg);Aa.AR=Ac6;Aa.Aj(true);Aa.As(Ah8
);Aa.Bi(true);Aa.Au(A1n);this.J(Aa,0);this.AtG(this);},ByM:function(Qg,Ac6,Ah8,A3u
,Agt){var Aa=A._NewObject(C.ANR,0);Aa.H(BD);Aa.T(Qg);Aa.AR=Ac6;Aa.Aj(true);Aa.As(
Ah8);Aa.Bi(true);Aa.BnU(A3u);Aa.AF5(Agt);this.J(Aa,0);this.AtG(this);},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);
this.__proto__=C.AUd;this.H(Rr);this.Y.H(Rr);this.J(this.Y,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.OverlayMenu;this.Y._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Y._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Y)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Afl={_Init:
function(){A.acl.Afl._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.A$n={AqV:null,Aho:null,Mq:function(Qg){var EF=A._NewObject(
C.AkI,0);EF.DL=Qg;this.J(EF);},Clear:function(){this.AqV=null;this.Aho=null;},Fz:
function(){var K_=A._NewObject(C.AGo,0);this.J(K_);},J:function(BcH){if(!this.AqV
){this.AqV=BcH;this.Aho=this.AqV;}else{this.Aho.MF=BcH;this.Aho=this.Aho.MF;}},TH:
function(Qg,Ac6){var EF=A._NewObject(C.ZH,0);EF.DL=Qg;EF.AR=Ac6;this.J(EF);},BhG:
function(Qg,Ac6,A1n){var EF=A._NewObject(C.Axt,0);EF.DL=Qg;EF.AR=Ac6;EF.ARs=A1n;
this.J(EF);},Aa4:function(Qg){var EF=A._NewObject(C.ZH,0);EF.DL=Qg;EF.Bw=false;this.
J(EF);},ABX:function(Qg,Ac6,A3u,Agt){var EF=A._NewObject(C.Axv,0);EF.DL=Qg;EF.AR=
Ac6;EF.WJ=A3u;EF.W5=Agt;this.J(EF);},_Init:function(aArg){this.__proto__=C.A$n;A.
h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.AqV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aho)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayManagerClass"
};C.BS={_Init:function(){C.A$n._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axu={MF:null,_Init:function(aArg){this.__proto__=
C.Axu;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.MF)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AOO={Amx:null,ArO:function(E){if(this.Amx===
E)return;if(!!this.Ab)this.Ab.ZL(this);if(!!this.Amx)this.AqN(this.Amx,A._GetAutoObject(
C.AsJ),null,null,null,null,false);this.Amx=E;if(!!this.Amx)this.AkN(this.Amx,A._GetAutoObject(
C.AsJ),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);this.__proto__=C.AOO;this.H(BD);},_Mark:function(D){var B;
A.Core.P._Mark.call(this,D);if((B=this.Amx)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.WT={_Init:function(){C.AOO._Init.call(
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
C.AVa={Si:function(){var B;var Ao=(A.acl.Afd.isPrototypeOf(B=A.acl.Aep.Si.call(this
))?B:null);if(!Ao)throw new Error(Atd);Ao.Cq.Cx=255;Ao.Cq.B3=0;return Ao;},Sh:function(
){var B;var Ao=(A.acl.Axs.isPrototypeOf(B=A.acl.Aep.Sh.call(this))?B:null);if(!Ao
)throw new Error(Atd);Ao.E0.Cx=0;Ao.E0.B3=255;Ao.Dt=true;return Ao;},_Init:function(
aArg){A.acl.Aep._Init.call(this,aArg);this.__proto__=C.AVa;},_className:"Application::ShadeOverlayTransition"
};C.An0={_Init:function(){C.AVa._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AkW={An2:0,A2y:false,Init:function(aArg){
},Ai:function(Ae){var F;C.Iv.Ai.call(this,Ae);this.BU.L(this.V.AQ);if(!!this.Q){
var BDl=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BU.R((A.
_GetAutoObject(A.Device.Converter).Ala(BDl)+CR)+A._GetAutoObject(A.acj.DU).Af8()
);else this.BU.R(A.aaR(A.acf.Akn));}},Ki:function(G){var B;var Bhu=(this.A2y===false
)&&(this.AM<=this.Gr);if(Bhu)this.Bx(this.An2);this.A44(this.AM,4);if(Bhu){this.
Bx(this.AM-this.Aj5);this.A2y=true;}C.Iv.Ki.call(this,G);},Kd:function(G){this.A44(
this.AM,5);C.Iv.Kd.call(this,G);},Bx:function(E){this.A44(E,4);E=(((E+((this.Aj5
/2)|0))/this.Aj5)|0)*this.Aj5;if(!E)this.A2y=false;C.Iv.Bx.call(this,E);},Ahw:function(
E){if(this.An2===E)return;this.An2=E;},A44:function(Bxx,GA){this.ATx(A._GetAutoObject(
A.acj.DU).Bd3(Bxx,GA));},_Init:function(aArg){C.Iv._Init.call(this,aArg);this.__proto__=
C.AkW;this.H(K3);this.An2=this.Gr;this.J5(this.H9,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BEL={None:0,Left:1,BFi:2,Right:3};C.AmB={Xz:
null,FE:null,Ek:null,Background:null,Anm:null,Gd:null,KS:A.jV,AEq:null,Init:function(
aArg){var B;A.zV([this,this.AaO],A._GetAutoObject(A.Device.Device).An,0);A.zX([this
,this.A4a],[B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs],0);A.pe([this,this.
LU],this);A.pe([this,this.A4a],this);this.Bb(this.Ek);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DK(this);},Lr:function(){if(!this.BQ)this.BQ=A._NewObject(
C.N,0);return this.BQ;},E4:function(G){C.OverlayMenu.E4.call(this,G);A._GetAutoObject(
A.Device.Device).An.Bk(this.Xz);},CD:function(G){C.OverlayMenu.CD.call(this,G);this.
AK4();},Agi:function(G){var Aa=(C.ACq.isPrototypeOf(G)?G:null);var Ht;if(!!Aa)Ht=
Aa.Ht;else Ht=this.Gd.FO();if(Ht>=A._GetAutoObject(A.Device.Device).An.B8())return;
A._GetAutoObject(A.Device.Helper).GS(Ht);A.pe([this,this.AaQ],this);},AK4:function(
){},AaO:function(G){this.Am();},A33:function(G){if(this.Gd.FO()<(A._GetAutoObject(
A.Device.Device).An.B8()-1))this.Gd.GU(this.Gd.FO()+1);},A34:function(G){if(this.
Gd.FO()>0)this.Gd.GU(this.Gd.FO()-1);},DK:function(G){var Gi=A._GetAutoObject(A.
Device.Device).An.B8();var M3=this.BQ;if(!M3)return;M3.C3(A.aaL(A.ach.AeD));M3.CF=[
this,this.AaQ];if(Gi<=0){M3.Ct(null);M3.C4(null);M3.Ce=null;M3.Ca=null;M3.WW=false;
M3.ZK=false;}else if(Gi===1){M3.Ct(null);M3.C4(A.aaL(A.ach.AeE));M3.Ce=null;M3.Ca=[
this,this.Agi];M3.WW=false;M3.ZK=false;}else{M3.Ct(A.aaL(A.ach.Ard));M3.C4(A.aaL(
A.ach.Arl));M3.Ce=[this,this.A33];M3.Ca=[this,this.A34];M3.WW=true;M3.ZK=true;}}
,LU:function(G){this.BgQ(this);this.Xz=A._GetAutoObject(A.Device.Device).An.Filter;
this.AK4();},BnM:function(E){if(this.AEq===E)return;this.AEq=E;A.pe([this,this.BBh
],this);},BBh:function(G){this.BgQ(this);},BgQ:function(G){var B;if(!!this.FE)this.
HR(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(this.AEq,0))?B:null);if(!
!this.FE){this.FE.H(AYy);this.J(this.FE,0);}},A4a:function(G){if(!!A._GetAutoObject(
A.Device.Device).An.Filter&&!!A._GetAutoObject(A.Device.Device).An.Filter.DM(1,4
))this.Gd.Dl(A.aaR(A.acf.ASu));else this.Gd.Dl(this.KS);},Dl:function(E){if(this.
KS===E)return;this.KS=E;A.pe([this,this.A4a],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ek._Init.call(this.Ek={I:this},0);A.acg.AL._Init.call(this.
Background={I:this},0);A.acg.AL._Init.call(this.Anm={I:this},0);C.Gd._Init.call(
this.Gd={I:this},0);this.__proto__=C.AmB;this.H(Rr);this.Ek.H(BD);this.Ek.A_x(A.
jb.CU);this.Ek.A_y(A.jb.Text);this.Background.H(Fe);this.Background.L(A.jb.Bpq);
this.Anm.H(AIp);this.Anm.L(A.jb.CU);this.Gd.H(AIp);this.Gd.N8(C.ACq);this.AEq=C.
APT;this.KS=A.aaR(A.acf.Av$);this.J(this.Ek,0);this.J(this.Background,0);this.J(
this.Anm,0);this.J(this.Gd,0);this.Ek.AR=[this,this.Agi];this.Ek.Ab_(A._NewObject(
C.YD,0));this.Gd.Zy(A._GetAutoObject(A.Device.Device).An);this.Gd.ZC([this,this.
Agi]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ek._Done(
);this.Background._Done();this.Anm._Done();this.Gd._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ek._ReInit();this.
Background._ReInit();this.Anm._ReInit();this.Gd._ReInit();this.Dl(A.aaR(A.acf.Av$
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Xz)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Anm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gd)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};C.ACq={
AP:null,DS:null,Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.DS.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.DS.Dg(this.V.AQ);},Init:function(aArg){},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;if(!!this.AX){this.T(this.AX.CC(Ad,1).toFixed());this.DS.EC(this.AX.Am0(
Ad,14));this.DS.AFm(this.AX.Ja(Ad,13));this.DS.Ae5(this.AX.H7(Ad,8));this.DS.Uz(
this.AX.H7(Ad,11));this.DS.Ae9(this.AX.H7(Ad,12));this.DS.Ae$(this.AX.CC(Ad,5));
this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.AP={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=C.ACq;this.
H(Oi);this.AP.L(A.jb.Bc);this.DS.H(AYz);this.J(this.AP,0);this.J(this.DS,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.DS._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit(
);this.DS._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListSmallItem"};C.YD={Q:null,Init:function(aArg){var
B;this.ABf(this);this.Au([B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs]);},AE4:
function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,
F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.
Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?B:null);}else{Filter=A._NewObject(
A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.Nw(FilterCriterion
);var Ai6=this.Akq();if(Ai6>0){FilterCriterion=A._NewObject(A.Device.Int32FilterCriterion
,0);FilterCriterion.Initialize(1,4,Ai6,false);Filter.CX(FilterCriterion);}if(!!this.
Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.Ae1(false);},BwW:function(s){this.AE4(
s);},ABf:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(
F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DM(1,4))?B:null);if(!!FilterCriterion
)Filter.Nw(FilterCriterion);(F=this.Q,F[2].call(F[0],Filter));}},BHb:function(s){
this.ABf(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
AcY],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AcY],E,0);if(!!E)A.pe([this,this.
AcY],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[1].call(F[0]))){this.AW.
AwT(-1);return;}var Azi=(A.Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q
,F[1].call(F[0])).DM(1,4))?B:null);if(!Azi){this.AW.AwT(0);this.AW.Ae1(true);}else
this.AW.AwT(Azi.A5);},AcY:function(s){this.C5(s);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.YD;this.AW.AwT(0);this.AW.Dk=[this,this.BwW];this.
Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.AqQ={BirthType:null,EaseOfDelivery:null,Cd:null,Ef:null,AbQ:null,G9:null,Co:
null,AbO:null,AM$:false,Init:function(aArg){this.AM$=A._GetAutoObject(A.Device.Helper
).W.Aro();if(this.AM$)this.Ae0(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.Ae0(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.Cd.
L5([this,this.AcW]);this.Cd.L8(A.aaL(A.ach.Afg));this.Cd.AR=[this,this.AcW];}this.
Ef.Ar_(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.GH],this.Ef.
Q,0);A.zX([this,this.GH],this.Cd.Q,0);A.pe([this,this.GH],this);},Agj:function(G
){if(((this.Ef.Ast===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).ARw(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter).Rl(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Ci(
A._GetAutoObject(A.Device.Device).An);if(this.KP>0){if(this.AM$){var Ad=A._GetAutoObject(
A.Device.Device).Bt.LZ(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ad>=0){var B2=A._NewObject(A.Device.Rating,0);B2.E3(Ad,A._GetAutoObject(A.Device.
Device).Bt);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}else A.ab5("%s%i"
,AYA,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.KP);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A7).FB();},Ew:function(
G){A._GetAutoObject(A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CI
,A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(C.A7).FB();},Aut:function(
){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.Am7));this.N.Ca=[this,this.Ay8];},AAK:function(
G){A._GetAutoObject(C.A7).Cb(32);},GH:function(G){var F;var Js=(F=this.Ef.Q,F[1].
call(F[0]));var ABD=(F=this.Cd.Q,F[1].call(F[0]));var A4Z=true;if(!!Js&&(ABD===Js
))A4Z=false;A._GetAutoObject(A.Device.Helper).J6(this.Cd,A4Z);this.Ef.BmM(!A4Z);
},_Init:function(aArg){C.H3._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Av7._Init.
call(this.Cd={I:this},0);C.Rd._Init.call(this.Ef={I:this},0);C.Acu._Init.call(this.
AbQ={I:this},0);C.BX._Init.call(this.G9={I:this},0);C.SY._Init.call(this.Co={I:this
},0);C.BX._Init.call(this.AbO={I:this},0);this.__proto__=C.AqQ;var B;this.Cd.H(Ah2
);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.ArU(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.aaR(A.acf.Akn));this.Ef.H(Ah2);
this.Ef.Aj(true);this.Ef.T(A.aaR(A.acf.Uq));this.AbQ.H(AYB);this.AbQ.Aj(true);this.
AbQ.T(A.aaR(A.acf.GN));this.G9.H(Ah2);this.G9.Aj(true);this.G9.T(A.aaR(A.acf.Arz
));this.Co.H(Ah2);this.Co.Aj(true);this.Co.T(A.aaR(A.acf.Aei));this.Co.AFX(true);
this.AbO.H(Ah2);this.AbO.Aj(true);this.AbO.T(A.aaR(A.acf.AgM));this.J(this.Cd,-1
);this.J(this.Ef,-1);this.J(this.AbQ,-1);this.J(this.G9,-1);this.J(this.Co,-1);this.
J(this.AbO,-1);this.BirthType.L6(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
L6(A._GetAutoObject(A.Device.Helper).W);this.Cd.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArJ,B.P0]);this.Ef.Gt([this,this.D_,this.GT]);this.Ef.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Any,B.Nr]);this.AbQ.Gt([this,this.D_,this.GT]);this.AbQ.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.ArK,B.SQ]);this.G9.Au([B=this.BirthType,
B.B$,B.Cc]);this.G9.CL(this.BirthType);this.Co.Gt([this,this.D_,this.GT]);this.Co.
L5([B=this.Co,B.FW]);this.Co.L8(A.aaL(A.ach.Edit));this.Co.Acc([B=A._GetAutoObject(
A.Device.Helper).W,B.Awi,B.Q8]);this.AbO.Au([B=this.EaseOfDelivery,B.B$,B.Cc]);this.
AbO.CL(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
H3;this.BirthType._Done();this.EaseOfDelivery._Done();this.Cd._Done();this.Ef._Done(
);this.AbQ._Done();this.G9._Done();this.Co._Done();this.AbO._Done();C.H3._Done.call(
this);},_ReInit:function(){C.H3._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.Cd._ReInit();this.Ef._ReInit();this.AbQ._ReInit();
this.G9._ReInit();this.Co._ReInit();this.AbO._ReInit();this.Cd.T(A.aaR(A.acf.Ak7
));this.Cd.ArU(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.
Cd.ArV(A.aaR(A.acf.Akn));this.Ef.T(A.aaR(A.acf.Uq));this.AbQ.T(A.aaR(A.acf.GN));
this.G9.T(A.aaR(A.acf.Arz));this.Co.T(A.aaR(A.acf.Aei));this.AbO.T(A.aaR(A.acf.AgM
));},_Mark:function(D){var B;C.H3._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G9)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Acu={FN:null,AW:null,A_:0,H1:function(G){C.Ds.H1.call(this,G);if(!this.A_)this.
FW(this);else this.Hf(this);},Ai:function(Ae){C.Ds.Ai.call(this,Ae);this.Hy.Z(false
);this.H9.Z(false);if(this.A_===1){this.Bb(this.AW);if(this.Hn){this.AW.FP(A.jb.
CK);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.
Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hn)this.AW.FP(A.jb.CK);
else this.AW.FP(A.jb.CU);this.Bb(null);}},Bx:function(E){var F;var BP=this.AM;C.
Ds.Bx.call(this,E);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM
));A.abo(this.Q,0);}A.abo([this,this.Ur,this.BbG],0);},DK:function(G){var F;if(!
this.N)return;switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}break;default:this.FN.AkS((F=
this.N,F[1].call(F[0])));}},FW:function(G){this.Ex(1);},Hf:function(G){this.Ex(0
);},Ex:function(EO){var F;if(!this.A_)this.FN.AjC((F=this.N,F[1].call(F[0])));this.
A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>1)this.A_=1;if(this.A_===1)this.AW.
SW(7);this.DK(this);this.Am();},_Init:function(aArg){C.Ds._Init.call(this,aArg);
C.ARq._Init.call(this.AW={I:this},0);this.__proto__=C.Acu;this.H(U5);this.EV(999999
);this.V.R(Atj);this.V.L(A.jb.Bm);this.Hy.Z(false);this.H9.Z(false);this.AW.H(AYC
);this.AW.ATF(6);this.J(this.AW,0);this.AW.Au([this,this.Ur,this.BbG]);this.FN=A.
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
};C.AuS={Y:null,QT:null,N4:null,Ee:null,PN:null,PK:null,PL:null,Ay:null,Ge:null,
ReasonOfLeaving:null,AhD:null,Nc:0,AmP:false,ACu:true,AOH:false,Aso:false,Init:function(
aArg){A.zX([this,this.A92],[this,this.A9s,this.ATI],0);this.Aht(A._GetAutoObject(
A.Device.Helper).W.AhW(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.DZ(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A92],this);},DF:function(G){
var B;var Fh=0;var X=this.AV;switch(this.Cr.CP){case 6:Fh=2;break;case 7:Fh=7;break;
case 4:Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(X,Fh,0x414);if(!!X)this.
Bb(X);if(!!X&&((X.U&0x400)===0x400))this.Y.HK(X,true,null,null);},Al7:function(G
){A._GetAutoObject(C.A7).FB();},ApR:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.
Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}if(this.AmP){A._GetAutoObject(A.Device.Helper).W.Ae7(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A7q(A._GetAutoObject(A.Device.Helper).Dv(),this.Aso);}A._GetAutoObject(A.Device.
Helper).W.AFW(this.ReasonOfLeaving.C7((F=this.N4.Q,F[1].call(F[0]))));if(this.ACu
)A._GetAutoObject(A.Device.Helper).W.P0(0);if(this.Aso)A._GetAutoObject(A.Device.
Helper).W.AwV(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);this.A$Y();},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[
1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},Aht:function(E){
if(this.Nc===E)return;this.Nc=E;},Anv:function(){return this.Nc;},BfR:function(G
){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.PopupState===
4)||(Ar.PopupState===3)){A._GetAutoObject(C.A7).FB();A._GetAutoObject(A.Device.Helper
).Asz();}},A92:function(G){switch(this.Aso){case false:this.Ee.T(A.aaR(A.acf.AWb
));break;case true:this.Ee.T(A.aaR(A.acf.Brq));break;default:;}},ATI:function(E){
if(this.Aso===E)return;this.Aso=E;},A9s:function(){return this.Aso;},A$Y:function(
){A._GetAutoObject(A.Device.Device).AZ(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfR]);},Bna:function(E){if(this.AOH===E)return;
this.AOH=E;},Blw:function(){return this.AOH;},BmC:function(E){if(this.ACu===E)return;
this.ACu=E;},Bll:function(){return this.ACu;},BmK:function(E){if(this.AmP===E)return;
this.AmP=E;},Bls:function(){return this.AmP;},_Init:function(aArg){C.AB._Init.call(
this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Afr._Init.call(this.QT={I:this
},0);C.AsI._Init.call(this.N4={I:this},0);C.AkW._Init.call(this.Ee={I:this},0);C.
Afr._Init.call(this.PN={I:this},0);C.Afr._Init.call(this.PK={I:this},0);C.Afr._Init.
call(this.PL={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Ge._Init.call(this.
Ge={I:this},0);C.ReasonOfLeaving._Init.call(this.ReasonOfLeaving={I:this},0);A.Device.
AhD._Init.call(this.AhD={I:this},0);this.__proto__=C.AuS;var B;this.N.Z(true);this.
N.CS(A.aaR(A.acf.Unregister));this.Dr(C.IP);this.Y.H(Fe);this.Y.JZ(1);this.QT.H(
Aao);this.QT.Aj(true);this.QT.T(A.aaR(A.acf.AmP));this.QT.Bi(true);this.QT.ZF(false
);this.QT.Gb(-1);this.QT.EV(1);this.N4.H(U8);this.N4.Aj(true);this.N4.T(A.aaR(A.
acf.ReasonOfLeaving));this.N4.Bi(true);this.N4.ZF(false);this.Ee.H(Ah1);this.Ee.
Aj(true);this.Ee.T(A.aaR(A.acf.AWb));this.Ee.Bi(false);this.Ee.Gb(1000);this.Ee.
EV(999000);this.PN.H(U8);this.PN.Aj(true);this.PN.T(A.aaR(A.acf.A5A));this.PN.Bi(
true);this.PN.ZF(false);this.PN.Bx(1);this.PN.Gb(-1);this.PN.EV(1);this.PK.H(Aao
);this.PK.Aj(true);this.PK.T(A.aaR(A.acf.A5B));this.PK.Bi(true);this.PK.ZF(false
);this.PK.Bx(1);this.PK.Gb(-1);this.PK.EV(1);this.PL.H(U8);this.PL.Aj(true);this.
PL.T(A.aaR(A.acf.A6b));this.PL.Bi(true);this.PL.ZF(false);this.PL.Bx(1);this.PL.
Gb(-1);this.PL.EV(1);this.Ay.H(Ayu);this.Ge.Au(0);this.J(this.Y,0);this.J(this.QT
,0);this.J(this.N4,0);this.J(this.Ee,0);this.J(this.PN,0);this.J(this.PK,0);this.
J(this.PL,0);this.J(this.Ay,0);this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fj
];this.QT.Au([B=this.Ge,B.B$,B.Cc]);this.QT.CL(this.Ge);this.QT.AkD([this,this.Bls
,this.BmK]);this.N4.Gt([this,this.D_,this.GT]);this.N4.L5([B=this.N4,B.FW]);this.
N4.L8(A.aaL(A.ach.Edit));this.N4.Au([B=this.ReasonOfLeaving,B.B$,B.Cc]);this.N4.
CL(this.ReasonOfLeaving);this.N4.AnD(this.AhD);this.Ee.Au([this,this.Anv,this.Aht
]);this.PN.Au([B=this.Ge,B.B$,B.Cc]);this.PN.CL(this.Ge);this.PN.AkD([this,this.
Blw,this.Bna]);this.PK.Au([B=this.Ge,B.B$,B.Cc]);this.PK.CL(this.Ge);this.PK.AkD([
this,this.A9s,this.ATI]);this.PL.Au([B=this.Ge,B.B$,B.Cc]);this.PL.CL(this.Ge);this.
PL.AkD([this,this.Bll,this.BmC]);this.Init(aArg);},_Done:function(){this.__proto__=
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
G){this.Am();},BmU:function(E){if(A.aaZ(this.AjM,E))return;if(!!this.AjM)A.z$([this
,this.A3L],this.AjM,0);this.AjM=E;if(!!E)A.zX([this,this.A3L],E,0);if(!!E)A.pe([
this,this.A3L],this);},A_u:function(E){if(this.Avf===E)return;this.Avf=E;this.Am(
);},_Init:function(aArg){C.Iv._Init.call(this,aArg);C.CG._Init.call(this.PC={I:this
},0);this.__proto__=C.AU$;this.H(AYE);this.V.H(AYF);this.V.A6(0x12);this.PC.H(AYG
);this.PC.A6(0x12);this.PC.L(A.jb.Bm);this.J(this.PC,0);this.PC.S(A.aaL(A.fl.Af)
);this.PC.AY(A.aaL(A.fl.Ak));this.PC.Cm(null);},_Done:function(){this.__proto__=
C.Iv;this.PC._Done();C.Iv._Done.call(this);},_ReInit:function(){C.Iv._ReInit.call(
this);this.PC._ReInit();this.PC.S(A.aaL(A.fl.Af));this.PC.AY(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Iv._Mark.call(this,D);if((B=this.AjM)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.PC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AMs={Y:null,JU:null,Sy:null,Ay:null,AqE:2500,ANI:24,DF:function(G){var B;var
Fh=0;var X=this.AV;switch(this.Cr.CP){case 6:Fh=2;break;case 7:Fh=7;break;case 4:
Fh=4;break;case 5:Fh=5;break;default:;}X=this.QL(X,Fh,0x414);if(!!X)this.Bb(X);if(
!!X&&((X.U&0x400)===0x400))this.Y.HK(X,true,null,null);},Al7:function(G){A._GetAutoObject(
C.A7).FB();},ApR:function(G){},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1)
)[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},BmF:function(
E){if(this.AqE===E)return;this.AqE=E;},Bln:function(){return this.AqE;},BmG:function(
E){if(this.ANI===E)return;this.ANI=E;},Blo:function(){return this.ANI;},Blb:function(
G){var F,Cu;this.JU.BU.L(this.JU.V.AQ);if(!!this.JU.Q)this.JU.BU.R((((String.fromCharCode(((
F=this.JU.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Ald)+String.fromCharCode(((
Cu=this.JU.Q,Cu[1].call(Cu[0]))+10000).toFixed().charCodeAt(2)||0))+CR)+this.JU.
AHn);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);C.Iv._Init.call(this.JU={I:this},0);C.Iv._Init.call(this.Sy={I:this
},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AMs;this.N.Z(true);this.
Dr(C.IP);this.Y.H(Fe);this.Y.JZ(1);this.JU.H(Ah1);this.JU.Aj(true);this.JU.T(A.aaR(
A.acf.AqE));this.JU.Bi(false);this.JU.Gb(0);this.JU.EV(5000);this.JU.IW(A.aaR(A.
acf.Af$));this.JU.Jg(A.aaR(A.acf.Af$));this.JU.ATx(100);this.Sy.H(U8);this.Sy.Aj(
true);this.Sy.T(A.aaR(A.acf.A$x));this.Sy.Bi(true);this.Sy.Bx(24);this.Sy.Gb(10);
this.Sy.EV(33);this.Sy.IW(AYH);this.Ay.H(Ayu);this.J(this.Y,0);this.J(this.JU,0);
this.J(this.Sy,0);this.J(this.Ay,0);this.N.C3(A.aaL(A.ach.YI));this.Y.Em=[this,this.
Fj];this.JU.Au([this,this.Bln,this.BmF]);this.JU.A_4([this,this.Blb]);this.Sy.Au([
this,this.Blo,this.BmG]);},_Done:function(){this.__proto__=C.AB;this.Y._Done();this.
JU._Done();this.Sy._Done();this.Ay._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.JU._ReInit();this.Sy._ReInit();this.
Ay._ReInit();this.JU.T(A.aaR(A.acf.AqE));this.JU.IW(A.aaR(A.acf.Af$));this.JU.Jg(
A.aaR(A.acf.Af$));this.Sy.T(A.aaR(A.acf.A$x));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JU)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionNewbornCareScreen"
};C.ArB={EaseOfDelivery:null,BirthType:null,Cd:null,Dp:null,Dj:null,Co:null,Ee:null
,G9:null,Lm:null,Nc:0,L1:false,Init:function(aArg){A.zX([this,this.GH],this.Cd.Q
,0);A.zX([this,this.GH],this.Dp.Q,0);A.zX([this,this.AAQ],this.Db.Q,0);A.zX([this
,this.Bfo],this.Co.Dm,0);A.zX([this,this.Bfi],this.C$.Q,0);A.zX([this,this.Auc],
this.Cd.Q,0);A.zX([this,this.Auc],this.Dp.Q,0);A.pe([this,this.AAQ],this);A.pe([
this,this.GH],this);A.pe([this,this.Bfo],this);A.pe([this,this.Bfi],this);A.pe([
this,this.Auc],this);},Ew:function(G){A._GetAutoObject(A.Device.Helper).W.E7();A.
_GetAutoObject(C.A7).FB();},Agj:function(G){var F;A._GetAutoObject(A.Device.Helper
).W.EC((F=this.B0.Q,F[1].call(F[0])));if(!!A._GetAutoObject(A.Device.Helper).AhI
){var AlR=A._GetAutoObject(A.Device.Helper).AhI.AO5();A._GetAutoObject(A.Device.
Helper).W.Ab$(AlR);A._GetAutoObject(A.Device.Helper).W.AnI(AlR);}var Alx=A._GetAutoObject(
A.Device.Helper).A14(A._GetAutoObject(A.Device.Helper).W,(F=this.Dj.H4.Hv,F[1].call(
F[0])),A._GetAutoObject(A.Device.Device).An);if(!Alx){this.Ai2();A.pe([this,this.
Bxj],this);}else A._GetAutoObject(A.Device.Helper).AKx(A._GetAutoObject(A.Device.
Helper).W,Alx,(F=this.Dj.H4.Hv,F[1].call(F[0])),0,[this,this.ApM]);},Aut:function(
){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.AD5));this.N.Ca=[this,this.Ay8];},Ai2:function(
){var B;var F;A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);var Md=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.
Helper).W.Id);A._GetAutoObject(A.Device.Device).SX(Md);var Beh=false;if(A._GetAutoObject(
A.Device.Helper).Am_()){if(A._GetAutoObject(A.Device.Device).Bt.Ll()){Beh=true;A.
_GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.
HM().toFixed(),0,null);}else{var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.
Device).Bt);}}if(A._GetAutoObject(A.Device.Helper).A7R()&&(Beh===false)){if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
this.Nc);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}var I3=null;switch((F=this.
Dj.H4.Hv,F[1].call(F[0]))){case 3:I3=[B=A._GetAutoObject(A.Device.Device),B.Awl,
B.Ay0];break;case 2:I3=[B=A._GetAutoObject(A.Device.Device),B.Awm,B.Ay1];break;case
4:case 5:I3=[B=A._GetAutoObject(A.Device.Device),B.Anx,B.AoE];break;default:;}if(
!!I3)switch((F=this.Dj.Kr.V3,F[1].call(F[0]))){case 1:I3[2].call(I3[0],A._GetAutoObject(
A.Device.Helper).W.VisualId-1);break;case 0:I3[2].call(I3[0],A._GetAutoObject(A.
Device.Helper).W.VisualId+1);break;default:;}A._GetAutoObject(A.Device.Helper).Bas(
A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.Gender.Animal.Gender
,(F=this.Dp.Q,F[1].call(F[0])),this.Dp.AjO(),this.Dp.AjQ());},Ap_:function(G){A.
_GetAutoObject(C.A7).FB();},Bxj:function(s){this.Ap_(s);},AAK:function(G){A._GetAutoObject(
C.A7).Cb(49);},Aht:function(E){if(this.Nc===E)return;this.Nc=E;A.abo([this,this.
Anv,this.Aht],0);},GH:function(G){if(A._GetAutoObject(A.Device.Helper).Am_())this.
C$.Z(true);else this.C$.Z(false);if(A._GetAutoObject(A.Device.Helper).A7R())this.
Ee.Z(true);else this.Ee.Z(false);if(this.L1){this.Dp.Z(false);this.Cd.T(A.aaR(A.
acf.ACW));this.Cd.AFk(A.aaL(A.ach.Afg));}else{this.Dp.Z(true);this.Cd.T(A.aaR(A.
acf.Ak7));this.Cd.AFk(null);}},AAQ:function(G){A._GetAutoObject(A.Device.Helper).
AVV(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,this.L1);},Bfo:function(G){A.pe([this,this.Bhj],this);},Bfi:function(G){A.pe([this
,this.Bhj],this);},Bhj:function(G){var F,Cu,Tl;switch(A._GetAutoObject(A.Device.
Device).WeightRecordingScope){case 0:this.Ee.Ahw(A._GetAutoObject(A.Device.Helper
).AhW(A._GetAutoObject(A.Device.Helper).AbA((F=this.B0.Q,F[1].call(F[0]))),(Cu=this.
Co.Dm,Cu[1].call(Cu[0])),2,(Tl=this.B0.Q,Tl[1].call(Tl[0]))));break;case 2:this.
Ee.Ahw(A._GetAutoObject(A.Device.Helper).AhW(this.KP,(F=this.Co.Dm,F[1].call(F[0
])),2,(Cu=this.B0.Q,Cu[1].call(Cu[0]))));break;default:;}},ApM:function(G){var F;
var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id
){case 22:case 21:switch((F=this.Dj.H4.Hv,F[1].call(F[0]))){case 3:case 2:case 5:
case 4:this.JN(this.Dj);break;case 0:this.JN(this.Dp);break;case 1:this.JN(this.
Cd);break;default:throw new Error(AyF+(F=this.Dj.H4.Hv,F[1].call(F[0])).toFixed(
));}break;case 43:{this.JN(this.Dj);this.JN(this.Dp);}break;case 25:case 42:{this.
JN(this.Dj);this.JN(this.Cd);}break;case 41:break;default:A.ab5("%s%e",Ath,Ar.Id
);}},ApN:function(G){var F;C.H3.ApN.call(this,G);var Ao1=0;switch((F=this.B0.Q,F[
1].call(F[0]))){case 0:case 2:Ao1=A._GetAutoObject(A.Device.Device).AdV;break;case
1:Ao1=730;break;default:A.ab5("%s%e",Alh,(F=this.B0.Q,F[1].call(F[0])));}(F=this.
Co.Dm,F[2].call(F[0],A._GetAutoObject(A.Device.Helper).Dv()-A._GetAutoObject(A.Device.
Helper).AmN(Ao1)));(F=this.C$.Q,F[2].call(F[0],this.C$.An2));this.Ee.Ahw(A._GetAutoObject(
A.Device.Helper).W.AhW(1));},Ae6:function(E){if(this.L1===E)return;this.L1=E;A.abo([
this,this.Awo,this.Ae6],0);},Auc:function(G){var F,Cu,Tl;this.Ae6(((F=this.Cd.Q,
F[1].call(F[0]))===(Cu=this.Dp.Q,Cu[1].call(Cu[0])))&&!!(Tl=this.Cd.Q,Tl[1].call(
Tl[0])));A.pe([this,this.GH],this);},Anv:function(){return this.Nc;},Awo:function(
){return this.L1;},_Init:function(aArg){C.H3._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Av7._Init.call(this.Cd={I:this},0);C.Rd._Init.call(this.Dp={I:this}
,0);C.AGW._Init.call(this.Dj={I:this},0);C.SY._Init.call(this.Co={I:this},0);C.AkW.
_Init.call(this.Ee={I:this},0);C.BX._Init.call(this.G9={I:this},0);C.BX._Init.call(
this.Lm={I:this},0);this.__proto__=C.ArB;var B;this.Dr(C.ADx);this.CH.H(AcU);this.
Cd.H(Aor);this.Cd.Aj(true);this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.ArU(((A.aaR(A.acf.
Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.aaR(A.acf.Akn));this.
Dp.H(Aor);this.Dp.Aj(true);this.Dp.T(A.aaR(A.acf.Uq));this.Dp.Ar_(false);this.Dj.
H(AYI);this.Dj.Aj(true);this.Dj.T(A.aaR(A.acf.GN));this.Dj.Bx(0);this.Co.H(AcU);
this.Co.Aj(true);this.Co.T(A.aaR(A.acf.Aei));this.Co.AFX(true);this.Ee.H(AcU);this.
Ee.Aj(true);this.Ee.T(A.aaR(A.acf.Nc));this.Ee.Gb(1000);this.Ee.EV(999000);this.
G9.H(AcU);this.G9.Aj(true);this.G9.T(A.aaR(A.acf.Arz));this.Lm.H(AcU);this.Lm.Aj(
true);this.Lm.T(A.aaR(A.acf.AgM));this.J(this.Cd,-3);this.J(this.Dp,-3);this.J(this.
Dj,-3);this.J(this.Co,-3);this.J(this.Ee,-2);this.J(this.G9,-1);this.J(this.Lm,-
1);this.EaseOfDelivery.L6(A._GetAutoObject(A.Device.Helper).W);this.BirthType.L6(
A._GetAutoObject(A.Device.Helper).W);this.Cd.AR=[this,this.AcW];this.Cd.L5([this
,this.AcW]);this.Cd.L8(A.aaL(A.ach.Afg));this.Cd.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.ArJ,B.P0]);this.Cd.OU([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$
]);this.Cd.PY([B=A._GetAutoObject(A.Device.Device),B.Ut,B.Va]);this.Cd.Uv([B=A._GetAutoObject(
A.Device.Device),B.Anu,B.AoD]);this.Cd.Ae6([this,this.Awo,this.Ae6]);this.Dp.Gt([
this,this.D_,this.GT]);this.Dp.L5([this,this.AcW]);this.Dp.L8(A.aaL(A.ach.Afg));
this.Dp.Ux([B=this.Gender.Animal,B.WK,B.J0]);this.Dp.OU([B=A._GetAutoObject(A.Device.
Device),B.Us,B.U$]);this.Dp.PY([B=A._GetAutoObject(A.Device.Device),B.Ut,B.Va]);
this.Dp.Uv([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoD]);this.Dp.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.Any,B.Nr]);this.Dp.AnA([B=this.AnimalType.Animal,B.PX,B.EC]
);this.Dj.Gt([this,this.D_,this.GT]);this.Dj.L5([B=this.Dj,B.FW]);this.Dj.L8(A.aaL(
A.ach.Edit));this.Dj.Au([B=A._GetAutoObject(A.Device.Helper).W,B.ArK,B.SQ]);this.
Dj.A95(A._GetAutoObject(A.Device.Helper).W);this.Co.Gt([this,this.D_,this.GT]);this.
Co.L5([B=this.Co,B.FW]);this.Co.L8(A.aaL(A.ach.Edit));this.Co.Acc([B=A._GetAutoObject(
A.Device.Helper).W,B.Awi,B.Q8]);this.Ee.Au([this,this.Anv,this.Aht]);this.G9.Au([
B=this.BirthType,B.B$,B.Cc]);this.G9.CL(this.BirthType);this.Lm.Au([B=this.EaseOfDelivery
,B.B$,B.Cc]);this.Lm.CL(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.H3;this.EaseOfDelivery._Done();this.BirthType._Done();this.Cd._Done(
);this.Dp._Done();this.Dj._Done();this.Co._Done();this.Ee._Done();this.G9._Done(
);this.Lm._Done();C.H3._Done.call(this);},_ReInit:function(){C.H3._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.Cd._ReInit();this.
Dp._ReInit();this.Dj._ReInit();this.Co._ReInit();this.Ee._ReInit();this.G9._ReInit(
);this.Lm._ReInit();this.Cd.T(A.aaR(A.acf.Ak7));this.Cd.ArU(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AsE));this.Cd.ArV(A.aaR(A.acf.Akn));this.Dp.T(
A.aaR(A.acf.Uq));this.Dj.T(A.aaR(A.acf.GN));this.Co.T(A.aaR(A.acf.Aei));this.Ee.
T(A.aaR(A.acf.Nc));this.G9.T(A.aaR(A.acf.Arz));this.Lm.T(A.aaR(A.acf.AgM));},_Mark:
function(D){var B;C.H3._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Cd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AHv={Ia:null,AhN:null,AgX:null,AhO:null,AgY:null,AnimalType:null,Background:
null,N5:null,Rn:null,V:null,T2:null,YL:null,AbL:null,PW:null,DL:A.jV,AGY:true,CQ:
function(){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Aoa();this.
Ax3();},Aoa:function(){var F,Cu;var LK=0;var Aml=0;var AlK=0;var Ih=0;if((((!!this.
AhN&&!!this.AhO)&&!!this.AgX)&&!!this.AgY)&&!!this.AnimalType){Aml=(F=this.AhN,F[
1].call(F[0]));AlK=(F=this.AgX,F[1].call(F[0]));LK=A._GetAutoObject(A.Device.Helper
).Mf((F=this.AhO,F[1].call(F[0])),(Cu=this.AgY,Cu[1].call(Cu[0])));Ih=(F=this.AnimalType
,F[1].call(F[0]));}var La=A.jb.Text;var Azq=A.jb.CU;if(!!LK){var ALM=A._GetAutoObject(
A.acj.DU).AlE(LK,Aml,AlK);Azq=A._GetAutoObject(A.acj.DU).Az5(ALM,Ih);La=A._GetAutoObject(
A.acj.DU).Az7(ALM,Ih);}this.Background.L(Azq);this.T2.L(La);this.Rn.L(La);this.N5.
L(La);this.AbL.L(La);if(La===A.jb.Bm)this.YL.L(La);else this.YL.L(A.jb.CK);this.
V.L(La);this.PW.L(La);},Ax3:function(){var F,Cu;var LK=0;var Aml=0;var AlK=0;if(((
!!this.AhN&&!!this.AhO)&&!!this.AgX)&&!!this.AgY){Aml=(F=this.AhN,F[1].call(F[0]
));AlK=(F=this.AgX,F[1].call(F[0]));LK=A._GetAutoObject(A.Device.Helper).Mf((F=this.
AhO,F[1].call(F[0])),(Cu=this.AgY,Cu[1].call(Cu[0])));}if(!!LK){var ALM=A._GetAutoObject(
A.acj.DU).AlE(LK,Aml,AlK);this.Rn.R(A._GetAutoObject(A.Device.Converter).Te(ALM,
2,true));this.N5.Z(true);this.Rn.Z(true);this.PW.Z(false);}else{this.N5.Z(false);
this.Rn.Z(false);this.PW.Z(true);}this.T2.R(this.BzW(AlK-Aml,LK));this.AbL.Z(this.
AGY);this.YL.Z(this.AGY);this.N5.R(A._GetAutoObject(A.acj.DU).AaE());},BzW:function(
A1J,Ah9){var B;if(Ah9<0){A.ab5("%s",AYJ);return A.jV;}var Iz=(AYK+A._GetAutoObject(
A.acj.DU).Af8())+CR;var FX=A._GetAutoObject(A.Device.Converter).Ala(A1J);if(!A1J
)FX=A.abU(FX,AYL,0);else if(A1J>0)FX=A.abU(FX,AIr,0);Iz=this.Bgy(Iz,AYM,FX);if(Ah9===
1)Iz=Iz+A.aaR(A.acf.Bj5);else{Iz=Iz+A.aaR(A.acf.Bj6);Iz=this.Bgy(Iz,AYN,Ah9.toFixed(
));}return Iz;},Bgy:function(aString,BcM,Byj){if(aString===A.jV){A.ab5("%s",AYO);
return A.jV;}var A3s=aString.indexOf(BcM,0);if(A3s>=0){aString=A.ab1(aString,A3s
,BcM.length);aString=A.abU(aString,Byj,A3s);}return aString;},ATY:function(E){if(
A.aaZ(this.AhN,E))return;if(!!this.AhN)A.z$([this,this.C5],this.AhN,0);this.AhN=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmR:function(
E){if(A.aaZ(this.AgX,E))return;if(!!this.AgX)A.z$([this,this.C5],this.AgX,0);this.
AgX=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},ATZ:function(
E){if(A.aaZ(this.AhO,E))return;if(!!this.AhO)A.z$([this,this.C5],this.AhO,0);this.
AhO=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},BmS:function(
E){if(A.aaZ(this.AgY,E))return;if(!!this.AgY)A.z$([this,this.C5],this.AgY,0);this.
AgY=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(
G){this.Am();},T:function(E){if(this.DL===E)return;this.DL=E;this.V.R(E);},A_3:function(
E){if(this.AGY===E)return;this.AGY=E;this.Am();},EC:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.C5],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.N5={I:this},0);A.acg.Text._Init.call(this.Rn={I:this},
0);C.CG._Init.call(this.V={I:this},0);C.CG._Init.call(this.T2={I:this},0);A.acg.
Ap._Init.call(this.YL={I:this},0);A.acg.Ap._Init.call(this.AbL={I:this},0);C.CG.
_Init.call(this.PW={I:this},0);this.__proto__=C.AHv;this.H(AfI);this.Background.
A1(0x3F);this.Background.H(AfI);this.N5.H(AYP);this.N5.R(A._GetAutoObject(A.acj.
DU).AaE());this.N5.A6(0x9);this.N5.L(A.jb.Text);this.Rn.H(AYQ);this.Rn.A6(0x14);
this.Rn.R(A.aaR(A.acu.Akl));this.Rn.L(A.jb.Text);this.V.A1(0x1D);this.V.H(AYR);this.
V.R(A.aaR(A.acf.AuI));this.V.A6(0x12);this.V.L(A.jb.Text);this.T2.H(Aan);this.YL.
A1(0x14);this.YL.H(AIs);this.YL.Cw(1);this.AbL.A1(0x14);this.AbL.H(AIs);this.AbL.
Cw(0);this.PW.H(AYS);this.PW.R(A.aaR(A.acf.A5h));this.J(this.Background,0);this.
J(this.N5,0);this.J(this.Rn,0);this.J(this.V,0);this.J(this.T2,0);this.J(this.YL
,0);this.J(this.AbL,0);this.J(this.PW,0);this.N5.S(A.aaL(A.fl.EK));this.N5.AY(A.
aaL(A.fl.Af));this.N5.Cm(A.aaL(A.fl.HL));this.Rn.S(A.aaL(A.fl.Aew));this.V.S(A.aaL(
A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.aaL(A.fl.Bh));this.T2.S(A.aaL(A.
fl.Af));this.T2.AY(A.aaL(A.fl.Ak));this.T2.Cm(A.aaL(A.fl.Bh));this.YL.Ax(A.aaL(A.
ach.AB5));this.AbL.Ax(A.aaL(A.ach.AB5));this.Ia=A._NewObject(A.Device.Rating,0);
this.PW.S(A.aaL(A.fl.Af));this.PW.AY(A.aaL(A.fl.Ak));this.PW.Cm(A.aaL(A.fl.Bh));
},_Done:function(){this.__proto__=A.Core.P;this.Background._Done();this.N5._Done(
);this.Rn._Done();this.V._Done();this.T2._Done();this.YL._Done();this.AbL._Done(
);this.PW._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Background._ReInit();this.N5._ReInit();this.Rn._ReInit();this.V.
_ReInit();this.T2._ReInit();this.YL._ReInit();this.AbL._ReInit();this.PW._ReInit(
);this.Rn.R(A.aaR(A.acu.Akl));this.V.R(A.aaR(A.acf.AuI));this.PW.R(A.aaR(A.acf.A5h
));this.N5.S(A.aaL(A.fl.EK));this.N5.AY(A.aaL(A.fl.Af));this.N5.Cm(A.aaL(A.fl.HL
));this.Rn.S(A.aaL(A.fl.Aew));this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));
this.V.Cm(A.aaL(A.fl.Bh));this.T2.S(A.aaL(A.fl.Af));this.T2.AY(A.aaL(A.fl.Ak));this.
T2.Cm(A.aaL(A.fl.Bh));this.PW.S(A.aaL(A.fl.Af));this.PW.AY(A.aaL(A.fl.Ak));this.
PW.Cm(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this
,D);if((B=this.Ia)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AhN)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AgX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AhO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgY)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AWc={Animal:null,Rating:null,Cr:null,AD:null,A0:
0,Ho:function(G){var B;if(!this.Animal||!this.Rating)return;var Gh=this.AD.G8;var
CA=(C.AHv.isPrototypeOf(B=this.AD.Cj)?B:null);if(!CA)return;CA.EC([B=this.Animal
,B.PX,B.EC]);CA.BmR([B=A._GetAutoObject(A.Device.Device),B.AE2,B.AI_]);CA.BmS([B=
this.Rating,B.A9J,B.OnSetTimestamp]);switch(Gh%this.A0){case 1:{CA.ATY([B=this.Animal
,B.A9i,B.AFD]);CA.ATZ([B=this.Animal,B.A9K,B.AF7]);CA.T(A.aaR(A.acf.AuI));}break;
default:if(this.Animal.Aro()){CA.ATY([B=this.Animal,B.ASQ,B.AwQ]);CA.ATZ([B=this.
Animal,B.AS7,B.Axg]);CA.T(A.aaR(A.acf.AL_));}else{CA.ATY([B=this.Animal,B.ASQ,B.
AwQ]);CA.ATZ([B=this.Animal,B.AS7,B.Axg]);CA.T(A.aaR(A.acf.BhB));}}if(this.A0>1)
CA.A_3(true);else CA.A_3(false);CA.H(A.abK(CA.M,[(B=this.AD.M)[2]-B[0],this.AD.GO
]));},DF:function(G){if(this.A0>0)switch(this.Cr.CP){case 6:this.CF(this);break;
case 7:this.Ca(this);break;default:this.Cr.Mx=true;}},L6:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.JD(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.JD(1);else{this.JD(2);this.AD.GU(1);this.
AD.HK(this.AD.Gu,true,null,null);}if(this.A0>0)this.AD.AbN(0,this.A0-1);},AkE:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.A0>0)this.AD.AbN(0,this.A0-1);
},CF:function(G){if(this.AD.Gu>0)this.AD.GU(this.AD.Gu-1);else this.AD.GU(this.A0-
1);this.AD.HK(this.AD.Gu,true,null,null);},Ca:function(G){if(this.AD.Gu<(this.A0-
1))this.AD.GU(this.AD.Gu+1);else this.AD.GU(0);this.AD.HK(this.AD.Gu,true,null,null
);},JD:function(E){if(this.A0===E)return;this.A0=E;this.AD.JD(this.A0);A.abo([this
,this.ArG,this.JD],0);},ArG:function(){return this.A0;},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Cr={I:this},0);A.Core.CM._Init.
call(this.AD={I:this},0);this.__proto__=C.AWc;this.H(AfI);this.Cr.Filter=147;this.
AD.A1(0x3F);this.AD.H(AfI);this.AD.N8(C.AHv);this.AD.Ae_(160);this.AD.GU(0);this.
AD.JD(2);this.J(this.AD,0);this.Cr.BG=[this,this.DF];this.Cr.D1=[this,this.DF];this.
AD.Ho=[this,this.Ho];},_Done:function(){this.__proto__=A.Core.P;this.Cr._Done();
this.AD._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Cr._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
P._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.Eg={Init:function(aArg){},Bl:function(aSize){C.Cp.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Cp.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((
Ae&0x20)===0x20);var GE=this.Bo.Bw;var FT=A.jb.CK;var GZ=A.jb.Text;if(this.Hn){FT=
A.jb.CU;GZ=A.jb.Text;}if(!Hg){this.Background.L(A.jb.CU);this.V.L(A.jb.CK);}else
if(GE){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}this.LN=Hg;
this.KM=Fv;this.Qy=GE;},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=
C.Eg;this.H(K3);this.V.H(BD);this.ZF(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AeV={KQ:null,GK:A.jV,Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.KQ.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.KQ.
L(this.V.AQ);},Init:function(aArg){},Ab_:function(E){if(this.GK===E)return;this.
GK=E;this.KQ.R(E);},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.call(
this.KQ={I:this},0);this.__proto__=C.AeV;this.H(K3);this.Background.H(K3);this.V.
H(AcR);this.V.R(LB);this.KQ.H(I1);this.KQ.R(AYT);this.J(this.KQ,0);this.V.S(A.aaL(
A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(null);this.KQ.S(A.aaL(A.fl.Af));this.
KQ.AY(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.
KQ._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
KQ._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.KQ.S(A.aaL(
A.fl.Af));this.KQ.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Av7={ACy:null,Q:null,A3:null,AF:null,Io:null,L1:null,Ap:null,EM:null,AOk:A.jV
,AOl:A.jV,Bl:function(aSize){C.AeV.Bl.call(this,aSize);if(!this.ACy)this.KQ.H([].
concat(0,this.KQ.M.slice(1,4)));else this.KQ.H([].concat(this.Ap.M[2],this.KQ.M.
slice(1,4)));},Ai:function(Ae){var F,Cu,Tl;C.AeV.Ai.call(this,Ae);var Bdf=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Apm)this.Ab_(this.AOk);else
this.Ab_(this.AOl);}else{this.Ab_(A._GetAutoObject(A.Device.Converter).Rl((F=this.
Q,F[1].call(F[0]))));if((((!!this.Io&&!!this.A3)&&!!this.AF)&&!!this.L1)&&(((F=this.
Io,F[1].call(F[0]))===1)||(!(Cu=this.Io,Cu[1].call(Cu[0]))&&(Tl=this.L1,Tl[1].call(
Tl[0])))))Bdf=true;}}this.EM.Z(Bdf);this.Ap.L(this.V.AQ);A.pe([this,this.Age],this
);},C5:function(G){this.Am();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},AFk:function(E){if(this.ACy===E)return;this.ACy=E;this.
Ap.Ax(E);this.Bka();},OU:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3)A.z$([
this,this.AaP],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.AaP],E,0);if(!!E)A.pe([
this,this.AaP],this);},PY:function(E){if(A.aaZ(this.AF,E))return;if(!!this.AF)A.
z$([this,this.AaR],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.AaR],E,0);if(!!E)
A.pe([this,this.AaR],this);},AaR:function(G){this.Am();},AaP:function(G){this.Am(
);},Uv:function(E){if(A.aaZ(this.Io,E))return;if(!!this.Io)A.z$([this,this.Al5],
this.Io,0);this.Io=E;if(!!E)A.zX([this,this.Al5],E,0);if(!!E)A.pe([this,this.Al5
],this);},Al5:function(G){this.Am();},Age:function(G){var F,Cu;if((!this.Io||!this.
A3)||!this.AF)return;var A2$=this.KQ.Afj([(this.KQ.String.length-(F=this.AF,F[1].
call(F[0])))-(Cu=this.A3,Cu[1].call(Cu[0])),0]);var A4u=this.KQ.Afj([this.KQ.String.
length-(F=this.AF,F[1].call(F[0])),0]);var ABw=this.KQ.Dd(0x0);this.EM.H([A2$[0]-
1,ABw[1],A4u[0]+1,ABw[3]]);},ArU:function(E){if(this.AOk===E)return;this.AOk=E;this.
Am();},ArV:function(E){if(this.AOl===E)return;this.AOl=E;this.Am();},Ae6:function(
E){if(A.aaZ(this.L1,E))return;if(!!this.L1)A.z$([this,this.A3S],this.L1,0);this.
L1=E;if(!!E)A.zX([this,this.A3S],E,0);if(!!E)A.pe([this,this.A3S],this);},A3S:function(
G){this.Am();},_Init:function(aArg){C.AeV._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Ap={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.Av7;
this.Ap.H(AhY);this.EM.H(AYU);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Ap,0);
this.J(this.EM,0);this.KQ.Q9([this,this.Age]);},_Done:function(){this.__proto__=
C.AeV;this.Ap._Done();this.EM._Done();C.AeV._Done.call(this);},_ReInit:function(
){C.AeV._ReInit.call(this);this.Ap._ReInit();this.EM._ReInit();},_Mark:function(
D){var B;C.AeV._Mark.call(this,D);if((B=this.ACy)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Io)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
L1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Im:0,AaN:4,Bel:false,Bet:true,Bes:false,Bdm:true,Bek:false
,Al_:function(G){C.Rc.Al_.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bej(
)){this.Im=A._GetAutoObject(A.Device.Helper).UI.Id;var AiB=A._GetAutoObject(A.Device.
Helper).ARz(this.Im);if(AiB)A._GetAutoObject(A.Device.Device).AZ(107,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.A3W]);else{this.AaN=A._GetAutoObject(
A.Device.Helper).ARA(this.Im);var BeQ=false;if((this.AaN===3)||(this.AaN===2))BeQ=
A._GetAutoObject(A.Device.Helper).A7S(this.Im,A._GetAutoObject(A.Device.Helper).
W);if(BeQ)A._GetAutoObject(A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.
Converter).Rl(this.Im),0,null);else switch(this.AaN){case 2:{var BN=A._GetAutoObject(
A.Device.Converter).Ax1(this.Im);A._GetAutoObject(A.Device.Device).AZ(46,true,BN.
toFixed(),0,[this,this.A3W]);}break;case 3:case 1:case 0:case 4:this.A4K();break;
default:throw new Error(AIt+this.AaN.toFixed());}}}},Ew:function(G){A._GetAutoObject(
C.A7).FB();},AI$:function(s){this.Ew(s);},A4K:function(){if((this.AaN===3)||(this.
AaN===2)){if((this.Bdm&&(A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(
A.Device.Helper).W.NaisId!==this.Im)){A._GetAutoObject(A.Device.Device).AZ(69,true
,A.jV,0,[this,this.A3W]);return;}else this.BCs();}if(this.Bel)A._GetAutoObject(A.
Device.Helper).Bo$(this.Im);A._GetAutoObject(A.Device.Helper).W.P0(this.Im);this.
Bek=true;this.BCu();this.Ew(this);},A3W:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!Ar)switch(Ar.Id){case 46:if(Ar.PopupState===4)this.
A4K();break;case 107:switch(Ar.PopupState){case 7:{this.Bel=true;this.A4K();}break;
case 8:this.Ew(this);break;default:;}break;case 69:if(Ar.PopupState===4)this.Ew(
this);break;default:A.ab5("%s%e",AIu,Ar.Id);}},BCs:function(){A._GetAutoObject(A.
Device.Helper).W.Nr(this.Im);if(this.Bes&&(A._GetAutoObject(A.Device.Converter).
S9(this.Im)===10)){var Bc1=Math.trunc((this.Im%1000000000000)/10000000000);if(!Bc1&&(
A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper
).W.EC(0);else if((Bc1===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2
))A._GetAutoObject(A.Device.Helper).W.EC(2);}},BCu:function(){if(this.Bet){A._GetAutoObject(
A.Device.Helper).W.SQ(A._GetAutoObject(A.Device.Helper).A5z(A._GetAutoObject(A.Device.
Device).Ak6,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device
).Ak6===1)A._GetAutoObject(A.Device.Helper).Bat();}},_Init:function(aArg){C.Rc._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Z(true);this.Dr(C.IP
);this.Number.R(A.aaR(A.acf.O0));this.Jl.H(AYV);this.IZ.H(U3);this.AkG(1);this.N.
CF=[this,this.AI$];this.N.C3(A.aaL(A.ach.E2));},_ReInit:function(){C.Rc._ReInit.
call(this);this.Number.R(A.aaR(A.acf.O0));},_className:"Application::SetTransponderScreen"
};C.ADJ={Gp:null,Lq:null,Ky:null,CQ:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.EB.Ai.call(this,Ae);this.Lq.R(A._GetAutoObject(A.acj.DU
).Af8());this.Ky.R(A._GetAutoObject(A.acj.DU).AaE());},_Init:function(aArg){C.EB.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gp={I:this},0);A.acg.Text._Init.
call(this.Lq={I:this},0);A.acg.Text._Init.call(this.Ky={I:this},0);this.__proto__=
C.ADJ;this.Background.L(A.jb.Text);this.Gp.H(AYW);this.Gp.A6(0x11);this.Gp.R(A.aaR(
A.acf.Date));this.Gp.L(A.jb.Bm);this.Lq.H(AYX);this.Lq.A6(0x11);this.Lq.L(A.jb.Bm
);this.Ky.H(AYY);this.Ky.L(A.jb.Bm);this.J(this.Gp,0);this.J(this.Lq,0);this.J(this.
Ky,0);this.Gp.S(A.aaL(A.fl.Af));this.Lq.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af
));this.Init(aArg);},_Done:function(){this.__proto__=C.EB;this.Gp._Done();this.Lq.
_Done();this.Ky._Done();C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.
call(this);this.Gp._ReInit();this.Lq._ReInit();this.Ky._ReInit();this.Gp.R(A.aaR(
A.acf.Date));this.Gp.S(A.aaL(A.fl.Af));this.Lq.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(
A.fl.Af));this.CQ();},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.
Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ky)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AHz={Mt:null,Hr:null,If:null,AP:null,A$:null,FX:0,Ih:0,AiP:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hr.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hr.M[2]-1,0,this.Hr.M[2]+1,aSize[
1]]);this.Mt.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.If.H(this.Mt.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiP){this.If.R(Rs);this.If.L(A.jb.
Text);this.Mt.L(this.Background.AQ);}else{this.If.R(A._GetAutoObject(A.Device.Converter
).Te(this.FX,2,true));this.If.L(A._GetAutoObject(A.acj.DU).Az7(this.FX,this.Ih));
this.Mt.L(A._GetAutoObject(A.acj.DU).Az5(this.FX,this.Ih));}this.Hr.L(this.V.AQ);
},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var AlH=this.AX.Hw(
Ad,6);var Amd=this.AX.CC(Ad,8);if(this.Ht>0){var Bzt=this.AX.Hw(this.Ht-1,6);var
BB9=this.AX.CC(this.Ht-1,8);var LK=A._GetAutoObject(A.Device.Helper).Mf(Bzt,AlH);
if(!!LK){this.AiP=false;this.FX=A._GetAutoObject(A.acj.DU).AlE(LK,BB9,Amd);}else{
this.AiP=true;this.FX=0;}}else{this.AiP=true;this.FX=0;}this.T(A._GetAutoObject(
A.acj.KR).AC$(AlH));this.Hr.R(A._GetAutoObject(A.Device.Converter).Ala(Amd));this.
Ih=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mt={I:this},0);A.acg.Text.
_Init.call(this.Hr={I:this},0);A.acg.Text._Init.call(this.If={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.AHz;this.V.H(Pb);this.Mt.H(Atk);this.Hr.H(AIv);this.Hr.A6(0x12);this.Hr.R(Rq);
this.Hr.L(A.jb.Text);this.If.H(AIw);this.If.R(Rq);this.If.L(A.jb.Text);this.AP.H(
Aov);this.AP.L(A.jb.Bc);this.A$.H(Aow);this.A$.L(A.jb.Bc);this.J(this.Mt,0);this.
J(this.Hr,0);this.J(this.If,0);this.J(this.AP,0);this.J(this.A$,0);this.Hr.S(A.aaL(
A.fl.Af));this.If.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mt._Done();this.Hr._Done();this.If._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mt._ReInit(
);this.Hr._ReInit();this.If._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hr.
S(A.aaL(A.fl.Af));this.If.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,Wa:null,AhU:null,S7:null
,KS:A.jV,CQ:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var LK=
A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!LK){var FX=A._GetAutoObject(
A.acj.DU).AlE(LK,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var AdQ=A.aaR(A.acf.BhX);AdQ=A._GetAutoObject(
A.Device.Helper).MO(AdQ,Pc,A._GetAutoObject(A.Device.Converter).Te(FX,2,true));AdQ=
A._GetAutoObject(A.Device.Helper).MO(AdQ,Ayl,A._GetAutoObject(A.acj.DU).AaE());this.
S7.R(AdQ);this.AhU.L(A._GetAutoObject(A.acj.DU).Az5(FX,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.S7.L(A._GetAutoObject(A.acj.DU).Az7(FX,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.S7.R(A.aaR(A.acf.AWa));this.AhU.L(A.jb.
ARk);this.S7.L(A.jb.Text);}},CD:function(G){var Fx=A._NewObject(A.Device.Filter,
0);var HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fx.CX(HZ);var Ada=A._NewObject(A.Device.Int32FilterCriterion
,0);Ada.Initialize(8,2,0,true);Fx.CX(Ada);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fx);this.AxH(this);},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null
);},AxH:function(G){this.Bg=A._NewObject(C.Gd,0);this.Bg.N8(C.AHz);this.Bg.H(Ayz
);this.Bg.Zy(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KS);this.J(this.
Bg,0);this.Bb(this.Bg);},Ant:function(G){A._GetAutoObject(C.A7).FB();},Dl:function(
E){if(this.KS===E)return;this.KS=E;if(!!this.Bg)this.Bg.Dl(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ADJ._Init.call(this.Wa={I:this},0);A.acg.AL._Init.
call(this.AhU={I:this},0);A.acg.Text._Init.call(this.S7={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Cf);this.N.Z(true);this.Dr(C.IP);this.Wa.H(
Qf);this.KS=A.aaR(A.acf.Akm);this.AhU.A1(0x1D);this.AhU.H(I1);this.S7.A1(0x1D);this.
S7.H(I1);this.S7.A6(0x12);this.S7.R(Rq);this.J(this.Wa,0);this.J(this.AhU,0);this.
J(this.S7,0);this.N.CF=[this,this.Ant];this.N.C3(A.aaL(A.ach.E2));this.S7.S(A.aaL(
A.fl.Af));},_Done:function(){this.__proto__=C.AB;this.Wa._Done();this.AhU._Done(
);this.S7._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Wa._ReInit();this.AhU._ReInit();this.S7._ReInit();this.Dl(A.aaR(A.acf.Akm
));this.S7.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AhU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S7
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
Mp={DQ:null,AcE:null,AR1:11,EN:0,A5x:true,ACa:false,H1:function(G){if(A._GetAutoObject(
A.Device.Device).An.B8()>0)this.E5(4);else A._GetAutoObject(A.Device.Device).AZ(
30,true,A.jV,0,null);},CD:function(G){if(this.DQ.AAf())this.DQ.Ac$();else if((this.
EN===2)&&A._GetAutoObject(A.Device.Helper).W.Aq6())this.E5(5);else this.E5(1);},
E4:function(G){if(this.EN===1)this.E5(0);},Ew:function(G){this.E5(0);A._GetAutoObject(
C.A7).FB();},BCK:function(){A._GetAutoObject(A.Device.Device).AhM();},A4Q:function(
){A._GetAutoObject(A.Device.Device).An4();},A98:function(E){if(this.ACa===E)return;
this.ACa=E;A.abo([this,this.Blg,this.A98],0);},E5:function(E){var B;if(this.EN===
E)return;this.EN=E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).AkR();A.zX([
this,this.AKM],[B=A._GetAutoObject(A.Device.Helper),B.ArH,B.AkF],0);A.z$([this,this.
AAH],[B=this.DQ,B.SL,B.E5],0);this.BCK();}break;case 3:{A.z$([this,this.AKM],[B=
A._GetAutoObject(A.Device.Helper),B.ArH,B.AkF],0);this.A4Q();this.BAF();}break;case
2:{A._GetAutoObject(A.Device.Helper).Asz();if(!A._GetAutoObject(A.Device.Device).
AutoRegistrationMode&&this.A5x)this.BCv();else this.BCy();}break;case 4:{A.z$([this
,this.AKM],[B=A._GetAutoObject(A.Device.Helper),B.ArH,B.AkF],0);this.A4Q();A._GetAutoObject(
A.Device.Helper).Asz();A.zX([this,this.Bfz],[B=A._GetAutoObject(A.Device.Device)
,B.Awt,B.Ay5],0);A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(this.AR1);}
break;case 5:this.BgU();break;case 6:{A.zX([this,this.AAH],[B=this.DQ,B.SL,B.E5]
,0);this.DQ.Ac$();}break;case 0:{A.z$([this,this.AKM],[B=A._GetAutoObject(A.Device.
Helper),B.ArH,B.AkF],0);this.A4Q();}break;default:throw new Error(AyG);}A.abo([this
,this.SL,this.Bw8],0);},Bw8:function(Aq){this.E5(Aq);},AKM:function(G){if(!!A._GetAutoObject(
A.Device.Helper).UI){if(this.EN===1)this.E5(3);else A.ab5("%s%e",AYZ,this.EN);}else
A.ab5("%s",AIx);},BCv:function(){A._GetAutoObject(A.Device.Device).AZ(13,true,A.
_GetAutoObject(A.Device.Helper).Ak8(A._GetAutoObject(A.Device.Helper).UI.Id).toFixed(
),0,[this,this.BAU]);},BAU:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){if(this.Bdq(false
))A._GetAutoObject(C.A7).Cb(31);else{A._GetAutoObject(A.Device.Helper).AkR();this.
E5(1);}}else if(!!Ar&&(Ar.PopupState===5)){A._GetAutoObject(A.Device.Helper).AkR(
);this.E5(1);}},Bdq:function(Ai2){if(A._GetAutoObject(A.Device.Device).An.Ll()){
A._GetAutoObject(A.Device.Device).AZ(41,true,A._GetAutoObject(A.Device.Device).An.
HM().toFixed(),0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gs();A.
_GetAutoObject(A.Device.Helper).Aqo(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(
A.Device.Helper).W.P0(A._GetAutoObject(A.Device.Helper).UI.Id);if(!!A._GetAutoObject(
A.Device.Helper).AhI){var AlR=A._GetAutoObject(A.Device.Helper).AhI.AO5();A._GetAutoObject(
A.Device.Helper).W.Ab$(AlR);A._GetAutoObject(A.Device.Helper).W.AnI(AlR);}if(A._GetAutoObject(
A.Device.Helper).ARA(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nr(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.SQ(A._GetAutoObject(A.Device.Helper).BhM(A._GetAutoObject(A.Device.
Device).AgC,A._GetAutoObject(A.Device.Helper).W));if(Ai2){A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var Md=A._GetAutoObject(A.Device.
Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).SX(Md);if(A._GetAutoObject(A.Device.Helper).Am_()){if(A._GetAutoObject(A.
Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating
,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);B2.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).AbA(A._GetAutoObject(A.Device.Helper).W.AnimalType
));B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).AgC)A._GetAutoObject(
A.Device.Helper).Bat();}return true;},BAF:function(){if(!!A._GetAutoObject(A.Device.
Helper).UI){var AJC=true;if(A._GetAutoObject(A.Device.Helper).UI.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AJC=A._GetAutoObject(A.Device.Helper).A74(A._GetAutoObject(
A.Device.Helper).UI.Id);if(!AJC&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bdq(true);AJC=A._GetAutoObject(A.Device.Helper).A74(A._GetAutoObject(A.
Device.Helper).UI.Id);}}if(AJC)this.E5(5);else this.E5(2);}else{A.ab5("%s",AIx);
return;}},Bfz:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.AR1){A.z$([this,this.Bfz],[B=A._GetAutoObject(A.Device.Device),B.Awt,B.Ay5
],0);if(A._GetAutoObject(A.Device.Helper).W.Aq6())this.E5(5);else this.E5(1);}},
BgU:function(){if(this.ACa===true)this.E5(6);else A._GetAutoObject(C.A7).Cb(24);
},BCy:function(){A._GetAutoObject(A.Device.Device).AZ(36,true,A.jV,0,[this,this.
BBO]);},BBO:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){A._GetAutoObject(A.Device.Helper
).AkR();this.E5(1);}},AAH:function(G){if(!this.DQ.EN)this.E5(1);},A3K:function(G
){},Bxh:function(s){this.A3K(s);},Blg:function(){return this.ACa;},SL:function(){
return this.EN;},_Init:function(aArg){C.Rc._Init.call(this,aArg);A.acg.Text._Init.
call(this.AcE={I:this},0);this.__proto__=C.Mp;this.N.Z(true);this.Dr(C.Aq7);this.
Number.H(AY0);this.Number.R(A.aaR(A.acf.A$R));this.Jl.H(AY1);this.IZ.H(AY2);this.
AcE.H(AY3);this.AcE.R(AY4);this.AcE.L(A.jb.Text);this.J(this.AcE,0);this.N.CF=[this
,this.Ew];this.N.Ce=[this,this.Bxh];this.N.C3(A.aaL(A.ach.E2));this.Number.S(A.aaL(
A.fl.Af));this.AcE.S(A.aaL(A.fl.H6));this.DQ=A._GetAutoObject(C.DQ);},_Done:function(
){this.__proto__=C.Rc;this.AcE._Done();C.Rc._Done.call(this);},_ReInit:function(
){C.Rc._ReInit.call(this);this.AcE._ReInit();this.Number.R(A.aaR(A.acf.A$R));this.
Number.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Rc._Mark.call(this,D);if((B=
this.DQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AcE)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A5l={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Aph:-1,EN:0,ByI:function(){var Bgz=false;
var Os=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.
Device.Device).Bt.HM().toFixed(),0,null);else if(Os){Bgz=true;var B2=A._NewObject(
A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).AxD(B2,5);B2.OnSetAppearance(3);B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}else{var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AxD(B2
,5);B2.OnSetAppearance(1);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CI,A._GetAutoObject(A.
Device.Device).An);if(Bgz)A._GetAutoObject(A.Device.Helper).W.Uz(false);if(Os)A.
_GetAutoObject(A.Device.Helper).W.AnZ(false);else A._GetAutoObject(A.Device.Helper
).W.AnZ(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).AZ(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M5]);else A._GetAutoObject(A.Device.Device).AZ(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},ByK:function(){A._GetAutoObject(
A.Device.Helper).W.AGU(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).AZ(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);else A._GetAutoObject(
A.Device.Device).AZ(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M5]);},Qs:function(Eh){switch(Eh){case 4:this.ByI();break;case
128:A._GetAutoObject(C.A7).Cb(7);break;case 16:A._GetAutoObject(C.A7).Cb(36);break;
case 1:A._GetAutoObject(C.A7).Cb(10);break;case 2:A._GetAutoObject(C.A7).Cb(11);
break;case 8:this.ByK();break;case 64:A._GetAutoObject(C.A7).Cb(29);break;case 32:
A._GetAutoObject(C.A7).Cb(48);break;case 256:A._GetAutoObject(C.A7).Cb(21);break;
case 512:A._GetAutoObject(C.A7).Cb(30);break;case 1024:this.BAC();break;case 262144:
this.BC0();break;case 2048:this.Ac$();break;case 4096:this.Bdi(false);break;case
8192:this.ByJ();break;case 16384:this.BAB();break;case 32768:this.By9();break;case
524288:this.By_();break;case 65536:this.Bzx();break;case 131072:this.BCn();break;
case 0:break;default:throw new Error(AY5);}},Bds:function(Eh,Byd){var EQ=A._NewObject(
C.Ww,0);EQ.Ab9(false);EQ.Aj(true);EQ.AR=Byd;EQ.Bmq(Eh);switch(Eh){case 1:{EQ.T(A.
aaR(A.acf.An5));EQ.DC(A.aaL(A.ach.AL0));}break;case 2:{EQ.T(A.aaR(A.acf.A$B));EQ.
DC(A.aaL(A.ach.AL1));}break;case 4:{EQ.T(A.aaR(A.acf.Alarm));EQ.DC(A.aaL(A.ach.AL2
));EQ.AFT(true);}break;case 8:{EQ.T(A.aaR(A.acf.Asl));EQ.DC(A.aaL(A.ach.AL3));EQ.
AFT(true);}break;case 16:{EQ.T(A.aaR(A.acf.AMz));EQ.DC(A.aaL(A.ach.AL4));}break;
case 32:{EQ.T(A.aaR(A.acf.AnimalLoss));EQ.DC(A.aaL(A.ach.AL5));}break;case 64:{EQ.
T(A.aaR(A.acf.Unregister));EQ.DC(A.aaL(A.ach.AL6));}break;case 128:{EQ.T(A.aaR(A.
acf.Edit));EQ.DC(A.aaL(A.ach.AL7));}break;case 256:{EQ.T(A.aaR(A.acf.Weighing));
EQ.DC(A._GetAutoObject(A.acj.DU).BAa());}break;case 512:{EQ.T(A.aaR(A.acf.ASo));
EQ.DC(A.aaL(A.ach.ALS));}break;case 1024:{EQ.T(A.aaR(A.acf.LinkTransponder));EQ.
DC(A.aaL(A.ach.ALT));}break;case 262144:{EQ.T(A.aaR(A.acf.UnlinkTransponder));EQ.
DC(A.aaL(A.ach.ALZ));}break;case 2048:{EQ.T(A.aaR(A.acf.TG));EQ.DC(A.aaL(A.ach.ALU
));}break;case 4096:{EQ.T(A.aaR(A.acf.Calving));EQ.DC(A.aaL(A.ach.ALV));}break;case
8192:{EQ.T(A.aaR(A.acf.DryOff));EQ.DC(A.aaL(A.ach.ALW));EQ.AFT(true);}break;case
16384:{EQ.T(A.aaR(A.acf.Bi9));EQ.DC(A.aaL(A.ach.ALX));}break;case 131072:{EQ.T(A.
aaR(A.acf.Bpm));EQ.DC(A.aaL(A.ach.ALY));}break;default:A.ab5("%s",(AY6+Eh.toFixed(
))+AY7);}return EQ;},BzK:function(){this.Aph=this.Aph+1;if(this.Aph>=this.AutoActions.
Ng())this.E5(0);else this.E5(2);},BCb:function(){this.Aph=-1;},AAf:function(){return(
this.Aph>-1)&&!this.BAv();},BAv:function(){return this.Aph>=this.AutoActions.Ng(
);},E5:function(E){if(this.EN===E)return;this.EN=E;switch(E){case 1:this.BzK();break;
case 2:{var Tp=this.AutoActions.OM(this.Aph);if(this.A5i(A._GetAutoObject(A.Device.
Helper).W,Tp))this.Qs(Tp);else A._GetAutoObject(A.Device.Device).AZ(64,true,(this.
ActionToString.LA(Tp)+Ati)+this.AnimalTypeToString.LA(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.M5]);}break;case 0:this.BCb();break;default:throw new
Error(AyG);}A.abo([this,this.SL,this.E5],0);},M5:function(G){var Ar=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!Ar)return;if((Ar.Id===63)&&(Ar.PopupState===7))this.
Bdi(true);if((Ar.Id===32)&&(Ar.PopupState===7))A._GetAutoObject(C.A7).Cb(45);if((((
Ar.PopupState===4)||(Ar.PopupState===3))||(Ar.PopupState===8))&&this.AAf())this.
E5(1);},Bdk:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},BAC:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.A7).Cb(
45);else A._GetAutoObject(A.Device.Device).AZ(32,true,A.jV,0,[this,this.M5]);},Ac$:
function(){this.E5(1);},BB$:function(){var Os=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Os&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Bt.
Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device
).Bt.HM().toFixed(),0,null);else{var B2=A._NewObject(A.Device.Rating,0);B2.Gs();
B2.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).AxD(B2,5);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(
A.Device.Helper).W.E3(A._GetAutoObject(A.Device.Helper).W.CI,A._GetAutoObject(A.
Device.Device).An);A._GetAutoObject(A.Device.Helper).W.Uz(false);if(Os)A._GetAutoObject(
A.Device.Helper).W.AnZ(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},BCa:function(){A._GetAutoObject(
A.Device.Helper).W.AGU(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},Bdi:function(BzO){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(BzO===false))A._GetAutoObject(A.Device.
Device).AZ(63,true,A.jV,0,[this,this.M5]);else A._GetAutoObject(C.A7).Cb(54);},ByJ:
function(){A._GetAutoObject(A.Device.Helper).W.Ar3(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).AZ(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M5]);else A._GetAutoObject(A.Device.Device).AZ(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M5]);},BAB:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.A7).Cb(81);else A._GetAutoObject(A.
Device.Device).AZ(69,true,A.jV,0,[this,this.M5]);},By9:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae7(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(65,true,A.jV,2000,[this,this.M5
]);}else{A._GetAutoObject(A.Device.Helper).W.Ae8(false);A._GetAutoObject(A.Device.
Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.Device
).AZ(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
M5]);}}},Bzx:function(){A._GetAutoObject(A.Device.Helper).W.Ae7(false);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ae7(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(65,true,A.jV,2000,[this,this.M5
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).AZ(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.M5]);else A._GetAutoObject(A.Device.Device).AZ(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.M5]);}},A5i:function(En,Eh
){var QC=false;switch(Eh){case 32768:QC=En.IsRegistrationNoticePending&&!!En.NaisIdMother;
break;case 524288:QC=En.IsRegistrationNoticePending&&!En.NaisIdMother;break;case
4096:case 8192:switch(En.AnimalType){case 1:QC=true;break;default:;}break;case 512:
switch(En.AnimalType){case 0:QC=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:QC=true;break;default:A.ab5("%s",AY8+
Eh.toFixed());}return QC;},BCn:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.A7).Cb(80);else A._GetAutoObject(A.Device.Device).AZ(
69,true,A.jV,0,[this,this.M5]);},BC0:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).AZ(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.M5]);else{A._GetAutoObject(A.
Device.Helper).W.P0(0);A._GetAutoObject(A.Device.Helper).W.SQ(A._GetAutoObject(A.
Device.Helper).A5z(A._GetAutoObject(A.Device.Device).An_,A._GetAutoObject(A.Device.
Helper).W));A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device
).An);A._GetAutoObject(A.Device.Device).AZ(86,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),2000,[this,this.M5]);}},By_:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(A.Device.Helper
).W.Ae8(false);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.
Device).An);A._GetAutoObject(A.Device.Device).AZ(98,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.M5]);}},SL:function(){return this.EN;
},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={I:
this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this}
,0);this.__proto__=C.A5l;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AMa={R6:null,Aqq:null,E5:function(E){if(this.EN===E)return;C.Mp.E5.call(this
,E);switch(E){case 1:this.Dr(C.Aq7);break;case 5:case 6:this.Dr(C.IP);break;case
3:case 4:case 2:case 0:break;default:throw new Error(AyG);}},A3K:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.Mp._Init.call(this
,aArg);C.CG._Init.call(this.R6={I:this},0);C.AMb._Init.call(this.Aqq={I:this},0);
this.__proto__=C.AMa;this.A98(true);this.R6.H(AY9);this.R6.R(A.aaR(A.acf.TG));this.
R6.L(A.jb.Text);this.Aqq.H(AY_);this.J(this.R6,0);this.J(this.Aqq,0);this.N.Ct(A.
aaL(A.ach.AeG));this.R6.S(A.aaL(A.fl.Af));this.R6.AY(A.aaL(A.fl.HL));this.R6.Cm(
A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.Mp;this.R6._Done();this.Aqq.
_Done();C.Mp._Done.call(this);},_ReInit:function(){C.Mp._ReInit.call(this);this.
R6._ReInit();this.Aqq._ReInit();this.R6.R(A.aaR(A.acf.TG));this.R6.S(A.aaL(A.fl.
Af));this.R6.AY(A.aaL(A.fl.HL));this.R6.Cm(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.Mp._Mark.call(this,D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aqq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"
};C.ManualActionScanScreen={Ig:null,J8:null,A3K:function(G){if(this.Ig.N3(2048))
A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(3);},_Init:function(aArg){C.Mp._Init.call(this,aArg);A.
acg.Text._Init.call(this.J8={I:this},0);this.__proto__=C.ManualActionScanScreen;
this.J8.H(AY$);this.J8.Lv(true);this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+
CR)+A.aaR(A.acf.AB0));this.J8.L(A.jb.Text);this.J(this.J8,0);this.N.Ct(A.aaL(A.ach.
AeG));this.J8.S(A.aaL(A.fl.Af));this.Ig=A._GetAutoObject(C.Pr);},_Done:function(
){this.__proto__=C.Mp;this.J8._Done();C.Mp._Done.call(this);},_ReInit:function(){
C.Mp._ReInit.call(this);this.J8._ReInit();this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.
Colon))+CR)+A.aaR(A.acf.AB0));this.J8.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.Mp._Mark.call(this,D);if((B=this.Ig)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.J8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScanScreen"
};C.AMb={Y:null,Init:function(aArg){var B;A.zV([this,this.ABI],A._GetAutoObject(
C.AutoActions),0);A.zV([this,this.AuH],A._GetAutoObject(A.Device.Helper).W,0);A.
pe([this,this.ABI],this);A.pe([this,this.AuH],this);this.H(A.abK(this.M,AZa));this.
Y.H(A.abK(this.Y.M,A.abe([(B=this.M)[2]-B[0],B[3]-B[1]],AZb)));},Bc9:function(G){
var B;var AlF=0;var AzJ=0;var Bdo;var X=this.Y.Ah;var Cy=null;Bdo=((((B=this.M)[
2]-B[0])-(A._GetAutoObject(C.AutoActions).Ng()*58))/2)|0;while(!!X&&!((X.U&0x200
)===0x200)){Cy=(C.Ww.isPrototypeOf(X)?X:null);if(((X.U&0x400)===0x400)&&!!Cy){Cy.
H(A.abK(Cy.M,AZc));Cy.H(A.abM(Cy.M,(AzJ*58)+Bdo));Cy.H(A.abO(Cy.M,AlF*58));if(AzJ>=
3){AlF=AlF+1;AzJ=0;}else AzJ=AzJ+1;}X=X.Ah;}this.Bb(null);},A19:function(Eh){var
EQ=A._GetAutoObject(C.DQ).Bds(Eh,null);this.J(EQ,0);this.Bc9(this);},Ao8:function(
){var B;var X=this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdO=X;X=X.Ah;if(((
AdO.U&0x400)===0x400))this.HR(AdO);}},ABI:function(G){this.Ao8();var O;var CB=A.
_GetAutoObject(C.AutoActions).Ng();for(O=0;O<CB;O=O+1){var Tp=A._GetAutoObject(C.
AutoActions).OM(O);this.A19(Tp);}A.pe([this,this.Bc9],this);A.pe([this,this.AuH]
,this);A.pe([this,this.BC_],this);},AuH:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Ww.isPrototypeOf(
X)?X:null);Aa.AFT(false);}X=X.Ah;}},BC_:function(G){var B;var X=this.Y.Ah;while(
!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)){var Aa=(C.Ww.isPrototypeOf(
X)?X:null);var ByZ=A._GetAutoObject(C.AutoActions).Ng();if(!!Aa){var O;Aa.A94(false
);for(O=0;O<ByZ;O=O+1)if(Aa.Action===A._GetAutoObject(C.AutoActions).OM(O)){Aa.A94(
true);Aa.Bnw(AZd+(O+1).toFixed());}}}X=X.Ah;}},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);this.__proto__=C.AMb;this.
Y.JZ(0);this.J(this.Y,0);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.
P;this.Y._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.
call(this);this.Y._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D
);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainScreenGrid"
};C.DQ={_Init:function(){C.A5l._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.APO={Lp:null,Ud:null,Init:function(aArg){
this.Lp.R(A._GetAutoObject(A.acj.Temperature).AlQ());},_Init:function(aArg){C.De.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Lp={I:this},0);C.CG._Init.call(
this.Ud={I:this},0);this.__proto__=C.APO;this.Lp.H(AZe);this.Lp.A6(0x12);this.Lp.
L(A.jb.Text);this.Ud.H(Aox);this.Ud.R((A.aaR(A.acf.Aho)+AIy)+A.aaR(A.acf.Kq));this.
Ud.A6(0x12);this.Ud.L(A.jb.Text);this.J(this.Lp,0);this.J(this.Ud,0);this.Lp.S(A.
aaL(A.fl.Af));this.Ud.S(A.aaL(A.fl.Ak));this.Ud.AY(A.aaL(A.fl.Bh));this.Init(aArg
);},_Done:function(){this.__proto__=C.De;this.Lp._Done();this.Ud._Done();C.De._Done.
call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lp._ReInit();this.Ud.
_ReInit();this.Ud.R((A.aaR(A.acf.Aho)+AIy)+A.aaR(A.acf.Kq));this.Lp.S(A.aaL(A.fl.
Af));this.Ud.S(A.aaL(A.fl.Ak));this.Ud.AY(A.aaL(A.fl.Bh));},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.Lp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ud)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdTemperatures"
};C.ADH={JC:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.JC={I:this},0);A.acg.Text._Init.call(this.D0={I:this},0);this.__proto__=
C.ADH;this.JC.H(AZf);this.JC.Lv(true);this.JC.A6(0x14);this.JC.R(A.aaR(A.acf.AhT
)+AIz);this.JC.L(A.jb.Text);this.D0.H(Aox);this.D0.Lv(true);this.D0.R(A.aaR(A.acf.
AGp));this.D0.L(A.jb.Text);this.J(this.JC,0);this.J(this.D0,0);this.JC.S(A.aaL(A.
fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.De;this.JC.
_Done();this.D0._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.
call(this);this.JC._ReInit();this.D0._ReInit();this.JC.R(A.aaR(A.acf.AhT)+AIz);this.
D0.R(A.aaR(A.acf.AGp));this.JC.S(A.aaL(A.fl.Ak));this.D0.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.De._Mark.call(this,D);if((B=this.JC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"
};C.T5={Jd:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.call(
this.Jd={I:this},0);this.__proto__=C.T5;this.Jd.H(AIA);this.Jd.R((((A.aaR(A.acf.
RU)+AcV)+AIB)+A.aaR(A.acf.BaH))+Pd);this.Jd.A6(0x12);this.Jd.L(A.jb.Text);this.J(
this.Jd,0);this.Jd.S(A.aaL(A.fl.Af));this.Jd.AY(A.aaL(A.fl.Ak));this.Jd.Cm(A.aaL(
A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.Jd._Done();C.De._Done.call(
this);},_ReInit:function(){C.De._ReInit.call(this);this.Jd._ReInit();this.Jd.R((((
A.aaR(A.acf.RU)+AcV)+AIB)+A.aaR(A.acf.BaH))+Pd);this.Jd.S(A.aaL(A.fl.Af));this.Jd.
AY(A.aaL(A.fl.Ak));this.Jd.Cm(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.APQ={Lq:null,Ky:null,CQ:function(){this.A$T();},Init:function(aArg){this.A$T(
);},A$T:function(){this.Lq.R(A._GetAutoObject(A.acj.DU).Af8());this.Ky.R(A._GetAutoObject(
A.acj.DU).AaE());},_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lq={I:this},0);C.CG._Init.call(this.Ky={I:this},0);this.__proto__=C.APQ;
this.Lq.H(AZg);this.Lq.A6(0x12);this.Lq.L(A.jb.Text);this.Ky.H(Aox);this.Ky.L(A.
jb.Text);this.J(this.Lq,0);this.J(this.Ky,0);this.Lq.S(A.aaL(A.fl.Af));this.Ky.S(
A.aaL(A.fl.Af));this.Ky.AY(A.aaL(A.fl.Ak));this.Ky.Cm(A.aaL(A.fl.Bh));this.Init(
aArg);},_Done:function(){this.__proto__=C.De;this.Lq._Done();this.Ky._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.Lq._ReInit();
this.Ky._ReInit();this.Lq.S(A.aaL(A.fl.Af));this.Ky.S(A.aaL(A.fl.Af));this.Ky.AY(
A.aaL(A.fl.Ak));this.Ky.Cm(A.aaL(A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.
De._Mark.call(this,D);if((B=this.Lq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ky
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ANp={Mt:null,Hr:null,If:null,AP:null,A$:null,FX:0,AaK:0,Ih:0,AiP:false,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hr.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A$.H([this.Hr.M[2]-1,0,this.Hr.M[2]+1,aSize[
1]]);this.Mt.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.If.H(this.Mt.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.AiP){this.If.R(Rs);this.If.L(A.jb.
Text);this.Mt.L(this.Background.AQ);}else{this.If.R(A._GetAutoObject(A.Device.Converter
).Te(this.FX,2,true));this.If.L(A._GetAutoObject(A.acj.DU).Az7(this.FX,this.Ih));
this.Mt.L(A._GetAutoObject(A.acj.DU).Az5(this.FX,this.Ih));}if(this.AaK>0)this.Hr.
R(A._GetAutoObject(A.Device.Converter).Ala(this.AaK));else this.Hr.R(Rs);this.Hr.
L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Mn=
this.AX.CC(Ad,1);var AuC=this.AX.Hw(Ad,24);var AKl=this.AX.CC(Ad,23);var AuD=this.
AX.Hw(Ad,19);this.AaK=this.AX.CC(Ad,18);if((AuC>0)&&(AuC!==AuD)){var LK=A._GetAutoObject(
A.Device.Helper).Mf(AuC,AuD);if(!!LK){this.AiP=false;this.FX=A._GetAutoObject(A.
acj.DU).AlE(LK,AKl,this.AaK);}else{this.AiP=true;this.FX=0;}}else{this.AiP=true;
this.FX=0;}this.T(Mn.toFixed());this.Ih=this.AX.Am0(Ad,14);this.Am();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.Mt={I:this},0);A.acg.Text.
_Init.call(this.Hr={I:this},0);A.acg.Text._Init.call(this.If={I:this},0);A.acg.AL.
_Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=
C.ANp;this.V.H(Pb);this.Mt.H(Atk);this.Hr.H(AIv);this.Hr.A6(0x12);this.Hr.R(Rq);
this.Hr.L(A.jb.Text);this.If.H(AIw);this.If.R(Rq);this.If.L(A.jb.Text);this.AP.H(
Aov);this.AP.L(A.jb.Bc);this.A$.H(Aow);this.A$.L(A.jb.Bc);this.J(this.Mt,0);this.
J(this.Hr,0);this.J(this.If,0);this.J(this.AP,0);this.J(this.A$,0);this.Hr.S(A.aaL(
A.fl.Af));this.If.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mt._Done();this.Hr._Done();this.If._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mt._ReInit(
);this.Hr._ReInit();this.If._ReInit();this.AP._ReInit();this.A$._ReInit();this.Hr.
S(A.aaL(A.fl.Af));this.If.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.Nb={Ms:null,AP:null,A$:null,Gz:null,Xy:0,Init:
function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Ms.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Ms.M);this.Background.H([].concat(this.Ms.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gz.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A$.H([this.Gz.M[2]-1,0,this.
Gz.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gz.L(this.V.AQ
);if(!!this.Xy&&(this.Xy!==5)){this.Ms.L(A._GetAutoObject(A.acj.Assessment).Qu(this.
Xy));this.V.L(A._GetAutoObject(A.acj.Assessment).XH(this.Xy));}else this.Ms.L(this.
Background.AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var
Mn=this.AX.CC(Ad,1);var LW=this.AX.Ja(Ad,13);var AlL=this.AX.Ja(Ad,17);var AlU=this.
AX.H7(Ad,11);var Azr=this.AX.Hw(Ad,4);var AfV=A._GetAutoObject(A.Device.Helper).
Mf(Azr,A._GetAutoObject(A.Device.Helper).Dv());this.Xy=A._GetAutoObject(A.Device.
Helper).AMw(LW,AlU,AlL);this.T(Mn.toFixed());if(AfV<100)this.Gz.R((AfV.toFixed()+
CR)+A.aaR(A.acf.AL$));else this.Gz.R(A._GetAutoObject(A.acj.KR).ADa(Azr,A._GetAutoObject(
A.Device.Helper).Dv(),AIC));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Ms={I:this},0);A.acg.AL._Init.call(this.AP={I:this
},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.Text._Init.call(this.Gz={I:this
},0);this.__proto__=C.Nb;this.Ms.H(Atk);this.Background.H(AZh);this.V.H(Pb);this.
AP.H(Aov);this.AP.L(A.jb.Bc);this.A$.H(Aow);this.A$.L(A.jb.Bc);this.Gz.H(AyH);this.
J(this.Ms,-3);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Gz,0);this.Gz.S(A.
aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Ms._Done(
);this.AP._Done();this.A$._Done();this.Gz._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Ms._ReInit();this.AP._ReInit();this.A$._ReInit(
);this.Gz._ReInit();this.Gz.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ms)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ANn={AjB:null,Of:null,AP:null,A$:null,Jx:null,AKD:0,A2_:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.Of.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AjB.H(this.Of.M);this.A$.H([this.Of.M[2]-1,0,this.Of.M[2]+1,aSize[1]]);
this.Jx.H([this.Of.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jx.Dg(this.V.AQ);if(this.AKD>0){this.AjB.L(A._GetAutoObject(A.acj.Assessment
).Qu(this.A2_));this.Of.L(A._GetAutoObject(A.acj.Assessment).XH(this.A2_));}else{
this.AjB.L(this.Background.AQ);this.Of.L(this.V.AQ);}},Ch:function(Ad){if(!this.
AX)return;this.Ht=Ad;if(!!this.AX){var IE=this.AX.CC(Ad,0);var Mn=this.AX.CC(Ad,
1);this.AKD=this.AX.CC(Ad,5);this.A2_=this.AX.Ja(Ad,17);this.T(Mn.toFixed());if(
this.AKD>0)this.Of.R(A._GetAutoObject(A.Device.Converter).Ak3(this.AKD));else this.
Of.R(Rs);var Xx=A._GetAutoObject(A.Device.Helper).ZY(6);A._GetAutoObject(A.Device.
Device).SX(Ad);var A1h=A._GetAutoObject(A.Device.Helper).Bjx(A._GetAutoObject(A.
Device.Device).Bt,9,IE,Xx,0);this.Jx.A_l(A1h.Get(3));this.Jx.A_n(A1h.Get(2));this.
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
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jx={Afu:null,
ColoredCounterAttrSet:null,ACD:0,ACE:0,ACC:0,KX:0,Ai:function(Ae){var B;A.Core.P.
Ai.call(this,Ae);var AKw;var ALR;var AK2;var Al2=0;if(this.ACC>0){AKw=this.ACC.toFixed(
);Al2+=AKw.length;}else{AKw=AZj;Al2++;}if(this.ACE>0){ALR=this.ACE.toFixed();Al2+=
ALR.length;}else{ALR=AyI;Al2++;}if(this.ACD>0){AK2=this.ACD.toFixed();Al2+=AK2.length;
}else{AK2=AIq;Al2++;}if(Al2<=4)this.ColoredCounterAttrSet.Ahu(A.aaL(A.fl.Af));else
if(Al2<=5)this.ColoredCounterAttrSet.Ahu(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ahu(A.aaL(A.fl.Bh));this.Afu.R(((((AZk+AKw)+AZl)+ALR)+AZm)+AK2);},A_m:function(E
){if(this.ACD===E)return;this.ACD=E;this.Am();},A_n:function(E){if(this.ACE===E)
return;this.ACE=E;this.Am();},A_l:function(E){if(this.ACC===E)return;this.ACC=E;
this.Am();},Dg:function(E){if(this.KX===E)return;this.KX=E;this.ColoredCounterAttrSet.
Ahr(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.AuZ._Init.call(
this.Afu={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jx;this.H(AID);this.Afu.A1(0x3F);this.Afu.H(AID);this.
Afu.R(Rq);this.ColoredCounterAttrSet.BmD(A.jb.E1);this.ColoredCounterAttrSet.A_b(
A.jb.Ib);this.ColoredCounterAttrSet.A_a(A.jb.Gk);this.ColoredCounterAttrSet.Ahr(
A.jb.Text);this.KX=A.jb.Text;this.J(this.Afu,0);this.Afu.A97(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ahu(A.aaL(A.fl.Af));this.ColoredCounterAttrSet.A99(
null);},_Done:function(){this.__proto__=A.Core.P;this.Afu._Done();this.ColoredCounterAttrSet.
_Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this
);this.Afu._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ahu(A.aaL(A.fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=
this.Afu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ANm={AtO:null
,Acj:null,Ack:null,Acl:null,Jx:null,AP:null,A$:null,Ea:null,Ly:null,AcG:null,KY:
null,KZ:null,AJI:0,AJH:0,AJG:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.Acj.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AcG.H(this.
Acj.M);this.A$.H([this.Acj.M[2]-1,0,this.Acj.M[2]+1,aSize[1]]);this.Ack.H([this.
Acj.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KY.H(this.Ack.M);this.Ea.H([this.
Ack.M[2]-1,0,this.Ack.M[2]+1,aSize[1]]);this.Acl.H([this.Ack.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KZ.H(this.Acl.M);this.Ly.H([this.Acl.M[2]-1,0,this.Acl.
M[2]+1,aSize[1]]);this.Jx.H([this.Acl.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jx.Dg(this.V.AQ);this.Acj.L(A._GetAutoObject(A.acj.
Assessment).Qu(this.AJG));this.Ack.L(A._GetAutoObject(A.acj.Assessment).Qu(this.
AJH));this.Acl.L(A._GetAutoObject(A.acj.Assessment).Qu(this.AJI));this.AcG.L(A._GetAutoObject(
A.acj.Assessment).XH(this.AJG));this.KY.L(A._GetAutoObject(A.acj.Assessment).XH(
this.AJH));this.KZ.L(A._GetAutoObject(A.acj.Assessment).XH(this.AJI));this.AcG.Z(
!this.AJG);this.KY.Z(!this.AJH);this.KZ.Z(!this.AJI);this.Jx.A_l(this.AtO.Get(3)
);this.Jx.A_n(this.AtO.Get(2));this.Jx.A_m(this.AtO.Get(1));},Ch:function(Ad){if(
!this.AX)return;this.Ht=Ad;if(!!this.AX){var IE=this.AX.CC(Ad,0);var Mn=this.AX.
CC(Ad,1);this.T(Mn.toFixed());A._GetAutoObject(A.Device.Device).SX(Ad);this.AJG=
A._GetAutoObject(A.Device.Helper).A2K(A._GetAutoObject(A.Device.Device).Bt,IE,0);
this.AJH=A._GetAutoObject(A.Device.Helper).A2K(A._GetAutoObject(A.Device.Device).
Bt,IE,-1);this.AJI=A._GetAutoObject(A.Device.Helper).A2K(A._GetAutoObject(A.Device.
Device).Bt,IE,-2);this.AtO=A._GetAutoObject(A.Device.Helper).A6_(A._GetAutoObject(
A.Device.Device).Bt,IE,0,0);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AL._Init.call(this.Acj={I:this},0);A.acg.AL._Init.call(this.Ack={I:
this},0);A.acg.AL._Init.call(this.Acl={I:this},0);C.Jx._Init.call(this.Jx={I:this
},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.Ly={I:this
},0);A.acg.Text._Init.call(this.AcG={I:this},0);A.acg.Text._Init.call(this.KY={I:
this},0);A.acg.Text._Init.call(this.KZ={I:this},0);this.__proto__=C.ANm;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);this.Ly.L(A.jb.Bc);this.AcG.R(Aoy
);this.KY.R(Aoy);this.KZ.R(Aoy);this.J(this.Acj,0);this.J(this.Ack,0);this.J(this.
Acl,0);this.J(this.Jx,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.Ly,0);this.J(this.AcG,0);this.J(this.KY,0);this.J(this.KZ,0);this.AcG.S(A.
aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.AtO=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Acj._Done();this.Ack._Done();this.Acl._Done();this.Jx._Done();this.AP.
_Done();this.A$._Done();this.Ea._Done();this.Ly._Done();this.AcG._Done();this.KY.
_Done();this.KZ._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.Acj._ReInit();this.Ack._ReInit();this.Acl._ReInit();this.Jx._ReInit(
);this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ly._ReInit();this.AcG.
_ReInit();this.KY._ReInit();this.KZ._ReInit();this.AcG.S(A.aaL(A.fl.Af));this.KY.
S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AtO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acj).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AcG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.Am3={H$:null,XK:false,Bl:function(aSize){var
B;this.H$.H([(aSize[0]-((B=this.H$.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.H$.M[0]-10,40]);C.TQ.Bl.call(this,aSize);},Ai:function(Ae){C.TQ.Ai.call(
this,Ae);if(this.XK)this.H$.Cw(1);else this.H$.Cw(0);},Ki:function(G){if(this.XK
)C.TQ.Ki.call(this,G);},Kd:function(G){if(this.XK)C.TQ.Kd.call(this,G);},TB:function(
AI){C.TQ.TB.call(this,AI);if(!!AI){this.H(A.abI(this.M,80));this.XK=true;this.ZF(
true);}else{this.H(A.abI(this.M,40));this.XK=false;this.ZF(false);}},_Init:function(
aArg){C.TQ._Init.call(this,aArg);A.acg.Ap._Init.call(this.H$={I:this},0);this.__proto__=
C.Am3;this.V.A6(0x11);this.H$.H(AH1);this.H$.Cw(0);this.J(this.H$,0);this.V.Cm(A.
aaL(A.fl.Bh));this.H$.Ax(A.aaL(A.ach.AqW));},_Done:function(){this.__proto__=C.TQ;
this.H$._Done();C.TQ._Done.call(this);},_ReInit:function(){C.TQ._ReInit.call(this
);this.H$._ReInit();this.V.Cm(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.TQ._Mark.
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
J(this.V,0);this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.aaL(A.
fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.Hk;this.Background._Done(
);this.BW._Done();this.V._Done();C.Hk._Done.call(this);},_ReInit:function(){C.Hk.
_ReInit.call(this);this.Background._ReInit();this.BW._ReInit();this.V._ReInit();
this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.V.Cm(A.aaL(A.fl.Bh));},_Mark:
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
"Application::HeadlineStatusSmall"};C.DS={Su:null,Sv:null,AeH:null,Ag9:null,QO:null
,KX:0,LastTemperature:0,AqJ:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.P.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
Su.Ax(A.aaL(A.ach.AvM));this.Sv.Ax(A.aaL(A.ach.AvM));}break;case 2:{this.Su.Ax(A.
aaL(A.ach.AvP));this.Sv.Ax(A.aaL(A.ach.AvP));}break;default:{this.Su.Ax(A.aaL(A.
ach.AeC));this.Sv.Ax(A.aaL(A.ach.AeC));}}this.Su.L(A._GetAutoObject(A.acj.Assessment
).Qu(this.AqJ));var ApT;if(this.IsWatch)ApT=A.aaL(A.ach.AQX);else if(this.IsFever
){ApT=A.aaL(A.ach.AQW);switch(A._GetAutoObject(A.Device.Converter).Ajo(this.LastTemperature
,this.AnimalType)){case 3:this.QO.L(A.jb.Gk);break;case 2:this.QO.L(A.jb.Ib);break;
case 1:this.QO.L(A.jb.E1);break;case 0:this.QO.L(A.jb.Afy);break;default:;}}else
if(this.IsAlarm){ApT=A.aaL(A.ach.AQV);if(!this.AqJ||(this.AqJ===5))this.QO.L(A.jb.
Gk);else this.QO.L(0xFF000000);}else ApT=null;this.AeH.Ax(ApT);this.Ag9.Ax(ApT);
this.QO.Ax(ApT);if(A._GetAutoObject(A.acj.Assessment).Qu(this.AqJ)===A.jb.E1)this.
Sv.L(this.KX);},EC:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AFm:function(E){if(this.AqJ===E)return;this.AqJ=E;this.Am();},Dg:function(
E){if(this.KX===E)return;this.KX=E;this.Am();},Ae9:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Uz:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Ae5:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},Ae$:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},E7:function(){this.EC(0);this.AFm(0);this.Ae5(false);this.Uz(false
);this.Ae9(false);this.Ae$(0);this.Dg(A.jb.Text);},_Init:function(aArg){A.Core.P.
_Init.call(this,aArg);A.acg.Ap._Init.call(this.Su={I:this},0);A.acg.Ap._Init.call(
this.Sv={I:this},0);A.acg.Ap._Init.call(this.AeH={I:this},0);A.acg.Ap._Init.call(
this.Ag9={I:this},0);A.acg.Ap._Init.call(this.QO={I:this},0);this.__proto__=C.DS;
this.H(All);this.Su.A1(0x3F);this.Su.H(All);this.Su.L(A.jb.CK);this.Su.A6(0x12);
this.Su.Cw(0);this.Sv.A1(0x3F);this.Sv.H(All);this.Sv.L(0xFF000000);this.Sv.A6(0x12
);this.Sv.Cw(1);this.AeH.A1(0x3F);this.AeH.H(All);this.AeH.L(0xFF000000);this.AeH.
Cw(0);this.Ag9.A1(0x3F);this.Ag9.H(All);this.Ag9.Cw(1);this.QO.A1(0x3F);this.QO.
H(All);this.QO.L(A.jb.CU);this.QO.Cw(2);this.KX=A.jb.Text;this.J(this.Su,0);this.
J(this.Sv,0);this.J(this.AeH,0);this.J(this.Ag9,0);this.J(this.QO,0);this.Su.Ax(
A.aaL(A.ach.AeC));this.Sv.Ax(A.aaL(A.ach.AeC));},_Done:function(){this.__proto__=
A.Core.P;this.Su._Done();this.Sv._Done();this.AeH._Done();this.Ag9._Done();this.
QO._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(
this);this.Su._ReInit();this.Sv._ReInit();this.AeH._ReInit();this.Ag9._ReInit();
this.QO._ReInit();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.
Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.ANj={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(!!this.AX){var BAz=this.AX.H7(
Ad,12);var ByR=this.AX.Sq(Ad,15);this.Abp.R(A._GetAutoObject(A.Device.Helper).Mf(
ByR,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.Sw.Z(BAz);this.Am();
}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=C.ANj;},_className:
"Application::CalfListAlarmItem"};C.ADD={D0:null,MD:null,_Init:function(aArg){C.
T6._Init.call(this,aArg);A.acg.Text._Init.call(this.D0={I:this},0);A.acg.Ap._Init.
call(this.MD={I:this},0);this.__proto__=C.ADD;this.D0.H(Aox);this.D0.Lv(true);this.
D0.R(A.aaR(A.acf.A6o));this.D0.L(A.jb.Text);this.MD.H(AZo);this.MD.Je(false);this.
MD.L(A.jb.Text);this.MD.A6(0x12);this.J(this.D0,-2);this.J(this.MD,0);this.D0.S(
A.aaL(A.fl.Ak));this.MD.Ax(A.aaL(A.ach.AD2));},_Done:function(){this.__proto__=C.
T6;this.D0._Done();this.MD._Done();C.T6._Done.call(this);},_ReInit:function(){C.
T6._ReInit.call(this);this.D0._ReInit();this.MD._ReInit();this.D0.R(A.aaR(A.acf.
A6o));this.D0.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.T6._Mark.call(this,D
);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MD)._cycle!=D)B._Mark(
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
null,A7P:false,Bl:function(aSize){C.My.Bl.call(this,aSize);this.V.H([].concat(this.
Pw.M[2]-this.V.Text.Jh,this.V.M.slice(1,4)));},Ai:function(Ae){C.My.Ai.call(this
,Ae);this.Pw.L(this.V.AQ);},AwU:function(E){if(this.A7P===E)return;this.A7P=E;if(
E)this.Pw.R(AZp);else this.Pw.R(AIH);},Hh:function(G){var F;if(!!this.Q)this.AwU((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Hh],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hh],E,0);if(!!E)
A.pe([this,this.Hh],this);},_Init:function(aArg){C.My._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pw={I:this},0);this.__proto__=C.AmL;this.Pw.A1(0x34);this.Pw.
H(Ti);this.Pw.R(AIH);this.J(this.Pw,0);this.Pw.S(A.aaL(A.fl.AOM));},_Done:function(
){this.__proto__=C.My;this.Pw._Done();C.My._Done.call(this);},_ReInit:function(){
C.My._ReInit.call(this);this.Pw._ReInit();},_Mark:function(D){var B;C.My._Mark.call(
this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Pw)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"};C.
AO$={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad2(4));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.AO$;
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
};C.APU={Gp:null,Lp:null,Y0:null,Init:function(aArg){this.Lp.R(A._GetAutoObject(
A.acj.Temperature).AlQ());},_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.
Text._Init.call(this.Gp={I:this},0);A.acg.Text._Init.call(this.Lp={I:this},0);A.
acg.Text._Init.call(this.Y0={I:this},0);this.__proto__=C.APU;this.Background.L(A.
jb.Text);this.Gp.H(AII);this.Gp.A6(0x11);this.Gp.R(A.aaR(A.acf.Date));this.Gp.L(
A.jb.Bm);this.Lp.H(AZq);this.Lp.A6(0x12);this.Lp.L(A.jb.Bm);this.Y0.H(AZr);this.
Y0.A6(0x12);this.Y0.R(A.aaR(A.acf.Bs));this.Y0.L(A.jb.Bm);this.J(this.Gp,0);this.
J(this.Lp,0);this.J(this.Y0,0);this.Gp.S(A.aaL(A.fl.Af));this.Lp.S(A.aaL(A.fl.Af
));this.Y0.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
EB;this.Gp._Done();this.Lp._Done();this.Y0._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Gp._ReInit();this.Lp._ReInit();this.Y0._ReInit(
);this.Gp.R(A.aaR(A.acf.Date));this.Y0.R(A.aaR(A.acf.Bs));this.Gp.S(A.aaL(A.fl.Af
));this.Lp.S(A.aaL(A.fl.Af));this.Y0.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;
C.EB._Mark.call(this,D);if((B=this.Gp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Lp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineTemperatures"};C.TK={Lj:null,AjR:false,Init:function(
aArg){var B;A.zX([this,this.Bb9],[B=A._GetAutoObject(A.Device.Device),B.AEP,B.AI0
],0);this.AG0(this);A.pe([this,this.AoF],this);},DF:function(G){var D5=(A.Core.BF.
isPrototypeOf(G)?G:null);switch(D5.CP){case 6:this.Ov(this);break;case 7:this.M6(
this);break;default:D5.Mx=true;}},CD:function(G){var B;if(!!this.Lj)this.Lj.CD(this
);C.AB.CD.call(this,G);},E4:function(G){var B;if(!!this.Lj)this.Lj.E4(this);C.AB.
E4.call(this,G);},Ant:function(G){A._GetAutoObject(C.A7).FB();},AG0:function(G){
var B;if(!!this.Lj){this.Lj.E4(this);this.HR(this.Lj);}if(this.AjR)switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lj=A._NewObject(C.AMD,0);break;case 1:this.Lj=A.
_NewObject(C.AME,0);break;case 3:this.Lj=A._NewObject(C.AMC,0);break;case 2:this.
Lj=A._NewObject(C.AMF,0);break;default:throw new Error(AIJ);}else switch(A._GetAutoObject(
A.Device.Device).D9){case 0:this.Lj=A._NewObject(C.AMG,0);break;case 1:this.Lj=A.
_NewObject(C.AMP,0);break;case 3:this.Lj=A._NewObject(C.AMJ,0);break;case 2:this.
Lj=A._NewObject(C.AMU,0);break;default:throw new Error(AIJ);}this.HS(this);this.
J(this.Lj,0);this.Lj.H(Fe);this.Lj.ZC([this,this.A05]);this.Lj.CD(this);this.Bb(
this.Lj);},Bb9:function(s){this.AG0(s);},Bov:function(G){A._GetAutoObject(A.Device.
Device).AeZ(0);},AUb:function(G){A._GetAutoObject(A.Device.Device).AeZ(1);},AUa:
function(G){A._GetAutoObject(A.Device.Device).AeZ(3);},AUc:function(G){A._GetAutoObject(
A.Device.Device).AeZ(2);},HS:function(G){this.N.C3(A.aaL(A.ach.E2));this.N.Hz(A.
jV);this.N.CF=[this,this.Ant];this.N.AFs(A.aaL(A.fl.Ak));},AoF:function(s){this.
HS(s);},Bnf:function(E){if(this.AjR===E)return;this.AjR=E;A.pe([this,this.Bb9],this
);},A$m:function(G){this.Bnf(!this.AjR);},Boy:function(G){A._GetAutoObject(A.Device.
Device).AZ(31,true,A.jV,0,null);},M6:function(G){},BHa:function(s){this.M6(s);},
Ov:function(G){},BG$:function(s){this.Ov(s);},Bfw:function(G){var FS=A._GetAutoObject(
A.Device.Device).D9;FS=FS+1;if(FS>=4)FS=0;A._GetAutoObject(A.Device.Device).AeZ(
FS);},BBt:function(G){var FS=A._GetAutoObject(A.Device.Device).D9;FS=FS-1;if(FS<
0)FS=3;A._GetAutoObject(A.Device.Device).AeZ(FS);},Agc:function(G){},A05:function(
s){this.Agc(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);this.__proto__=
C.TK;this.Background.H(Cf);this.N.Z(true);this.N.OW(true);this.N.OX(true);this.Dr(
C.APJ);this.Init(aArg);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Lj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.D9={AR:null,AttrSet:null,Do:null,CD:function(G){},AIZ:function(s){this.CD(s);
},E4:function(G){A._GetAutoObject(A.Device.Device).Bt.Bk(null);},AyW:function(s){
this.E4(s);},ZC:function(E){if(A.aa0(this.AR,E))return;this.AR=E;this.Do.BG=E;},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttrSet={I:this},0);A.Core.BF._Init.call(this.Do={I:this},0);this.__proto__=
C.D9;this.H(U6);this.AttrSet.A_b(A.jb.Gk);this.AttrSet.A_a(A.jb.Ib);this.AttrSet.
Ahr(A.jb.Text);this.Do.Filter=1;this.AttrSet.Ahu(A.aaL(A.fl.Ak));this.AttrSet.A99(
null);},_Done:function(){this.__proto__=A.Core.P;this.AttrSet._Done();this.Do._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AttrSet._ReInit();this.Do._ReInit();this.AttrSet.Ahu(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.AR)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AMG={RZ:
null,Aa8:null,TJ:null,TI:null,R3:null,QG:null,R4:null,R1:null,R2:null,R0:null,CQ:
function(){var B;this.RZ.Ch(this);this.Aa8.Ch(this);this.TJ.Ch(this);this.TI.Ch(
this);this.R3.Ch(this);this.QG.Ch(this);this.R4.Ch(this);this.R1.Ch(this);this.R2.
Ch(this);this.R0.Ch(this);},GH:function(G){C.R5.GH.call(this,G);switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:{this.RZ.Z(true);this.Aa8.Z(false);
this.R1.Z(false);this.R2.Z(false);this.R0.Z(false);this.R3.Z(true);this.QG.Z(true
);this.R4.Z(true);}break;case 1:{this.RZ.Z(false);this.Aa8.Z(true);this.R1.Z(true
);this.R2.Z(true);this.R0.Z(true);this.R3.Z(false);this.QG.Z(false);this.R4.Z(false
);}break;default:A.ab5("%s%e",Alh,A._GetAutoObject(A.Device.Helper).W.AnimalType
);}A.pe([this,this.M0],this);},_Init:function(aArg){C.R5._Init.call(this,aArg);C.
RZ._Init.call(this.RZ={I:this},0);C.AMB._Init.call(this.Aa8={I:this},0);C.TJ._Init.
call(this.TJ={I:this},0);C.TI._Init.call(this.TI={I:this},0);C.R3._Init.call(this.
R3={I:this},0);C.QG._Init.call(this.QG={I:this},0);C.R4._Init.call(this.R4={I:this
},0);C.R1._Init.call(this.R1={I:this},0);C.R2._Init.call(this.R2={I:this},0);C.R0.
_Init.call(this.R0={I:this},0);this.__proto__=C.AMG;this.RZ.H(BD);this.RZ.Aj(true
);this.RZ.Bi(false);this.Aa8.H(I1);this.Aa8.Aj(true);this.Aa8.Bi(false);this.TJ.
H(Qf);this.TJ.Aj(true);this.TJ.Bi(true);this.TI.H(Aan);this.TI.Aj(true);this.TI.
Bi(false);this.R3.H(Alj);this.R3.Aj(true);this.R3.Bi(true);this.QG.H(Aos);this.QG.
Aj(true);this.QG.Bi(false);this.R4.H(Atf);this.R4.Aj(true);this.R4.Bi(true);this.
R1.H(U7);this.R1.Aj(true);this.R1.Bi(true);this.R2.H(AZs);this.R2.Aj(true);this.
R2.Bi(false);this.R0.H(AZt);this.R0.Aj(true);this.R0.Bi(true);this.J(this.RZ,0);
this.J(this.Aa8,0);this.J(this.TJ,0);this.J(this.TI,0);this.J(this.R3,0);this.J(
this.QG,0);this.J(this.R4,0);this.J(this.R1,0);this.J(this.R2,0);this.J(this.R0,
0);},_Done:function(){this.__proto__=C.R5;this.RZ._Done();this.Aa8._Done();this.
TJ._Done();this.TI._Done();this.R3._Done();this.QG._Done();this.R4._Done();this.
R1._Done();this.R2._Done();this.R0._Done();C.R5._Done.call(this);},_ReInit:function(
){C.R5._ReInit.call(this);this.RZ._ReInit();this.Aa8._ReInit();this.TJ._ReInit();
this.TI._ReInit();this.R3._ReInit();this.QG._ReInit();this.R4._ReInit();this.R1.
_ReInit();this.R2._ReInit();this.R0._ReInit();this.CQ();},_Mark:function(D){var B;
C.R5._Mark.call(this,D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TJ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.TI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfos"};C.AMU={AkV:function(L_){if(!L_)return;var Fx=A._NewObject(
A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CX(HZ);var Ada=A._NewObject(
A.Device.Int32FilterCriterion,0);Ada.Initialize(8,2,0,true);Fx.CX(Ada);L_.Bk(Fx);
},AEf:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;var RQ=A.
_GetAutoObject(A.Device.Device).Bt.B8();if(RQ<2)return false;var BCU=A._GetAutoObject(
A.Device.Device).Bt.Hw(0,6);var BCV=A._GetAutoObject(A.Device.Device).Bt.Hw(RQ-1
,6);var A2z=A._NewObject(A.Core.Bs,0);A2z.Initialize(BCU);var A4E=A._NewObject(A.
Core.Bs,0);A4E.Initialize(BCV);if((A2z.Ab7()!==A4E.Ab7())||(A2z.Year!==A4E.Year)
)return true;else return false;},_Init:function(aArg){C.Aa_._Init.call(this,aArg
);this.__proto__=C.AMU;this.ATD(C.AHz);this.ATE(C.ADJ);this.ATt(C.QG);this.ArZ(A.
aaR(A.acf.AWa));this.Dl(A.aaR(A.acf.Akm));},_ReInit:function(){C.Aa_._ReInit.call(
this);this.ArZ(A.aaR(A.acf.AWa));this.Dl(A.aaR(A.acf.Akm));},_className:"Application::AnimalWeights"
};C.AMP={AkV:function(L_){if(!L_)return;var Fx=A._NewObject(A.Device.Filter,0);var
HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fx.CX(HZ);var ABv=A._NewObject(A.Device.Int32FilterCriterion
,0);ABv.Initialize(7,2,0,true);Fx.CX(ABv);L_.Bk(Fx);},AEf:function(){return A._GetAutoObject(
A.Device.Device).Bt.B8()>0;},_Init:function(aArg){C.Aa_._Init.call(this,aArg);this.
__proto__=C.AMP;this.ATD(C.AVw);this.ATE(C.APU);this.ATt(C.TJ);this.ArZ(A.aaR(A.
acf.A8b));this.Dl(A.aaR(A.acf.ArC));},_ReInit:function(){C.Aa_._ReInit.call(this
);this.ArZ(A.aaR(A.acf.A8b));this.Dl(A.aaR(A.acf.ArC));},_className:"Application::AnimalTemperatures"
};C.AUB={VM:null,VN:null,X7:null,AgK:null,KE:null,AP:null,A$:null,Ea:null,Ly:null
,AnY:null,KY:null,KZ:null,ZV:null,ZW:null,Init:function(aArg){},Bl:function(aSize
){C.Ba.Bl.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.KE.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A$.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
VM.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.Ea.H([this.
VM.M[2]-1,0,this.VM.M[2]+1,aSize[1]]);this.VN.H([this.VM.M[2],0,this.VM.M[2]+22,
aSize[1]]);this.Ly.H([this.VN.M[2]-1,0,this.VN.M[2]+1,aSize[1]]);this.X7.H([this.
VN.M[2],0,this.VN.M[2]+22,aSize[1]]);this.AnY.H([this.X7.M[2]-1,0,this.X7.M[2]+1
,aSize[1]]);this.AgK.H([this.X7.M[2],0,aSize[0],aSize[1]]);this.KY.H(this.VM.M);
this.KZ.H(this.VN.M);this.ZV.H(this.X7.M);this.ZW.H(this.AgK.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.KE.L(this.V.AQ);},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;if(!!this.AX){var AlH=this.AX.Hw(Ad,6);var A1R=this.AX.Ja(Ad,3);var A2v=
this.AX.Ja(Ad,2);var A2u=this.AX.Ja(Ad,5);var A4s=this.AX.Ja(Ad,4);this.T(A._GetAutoObject(
A.acj.KR).AC$(AlH));this.KE.R(A._GetAutoObject(A.acj.KR).A64(AlH));this.VM.L(A._GetAutoObject(
A.acj.Assessment).Qu(A1R));this.VN.L(A._GetAutoObject(A.acj.Assessment).Qu(A2v));
this.X7.L(A._GetAutoObject(A.acj.Assessment).Qu(A2u));this.AgK.L(A._GetAutoObject(
A.acj.Assessment).Qu(A4s));this.KY.L(A._GetAutoObject(A.acj.Assessment).XH(A1R));
this.KZ.L(A._GetAutoObject(A.acj.Assessment).XH(A2v));this.ZV.L(A._GetAutoObject(
A.acj.Assessment).XH(A2u));this.ZW.L(A._GetAutoObject(A.acj.Assessment).XH(A4s));
this.KY.Z(A1R===5);this.KZ.Z(A2v===5);this.ZV.Z(A2u===5);this.ZW.Z(A4s===5);this.
Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(this.
VM={I:this},0);A.acg.AL._Init.call(this.VN={I:this},0);A.acg.AL._Init.call(this.
X7={I:this},0);A.acg.AL._Init.call(this.AgK={I:this},0);A.acg.Text._Init.call(this.
KE={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.
A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.AL._Init.call(this.
Ly={I:this},0);A.acg.AL._Init.call(this.AnY={I:this},0);A.acg.Text._Init.call(this.
KY={I:this},0);A.acg.Text._Init.call(this.KZ={I:this},0);A.acg.Text._Init.call(this.
ZV={I:this},0);A.acg.Text._Init.call(this.ZW={I:this},0);this.__proto__=C.AUB;this.
V.H(Pb);this.VM.H(AZu);this.VN.H(AZv);this.X7.H(AZw);this.AgK.H(AZx);this.KE.R(Rq
);this.KE.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ly.L(A.jb.Bc);this.AnY.L(A.jb.Bc);this.KY.H(AZy);this.KY.R(Rs);this.KZ.H(AZz
);this.KZ.R(Rs);this.ZV.H(AZA);this.ZV.R(Rs);this.ZW.H(AZB);this.ZW.R(Rs);this.J(
this.VM,0);this.J(this.VN,0);this.J(this.X7,0);this.J(this.AgK,0);this.J(this.KE
,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Ly,0);this.
J(this.AnY,0);this.J(this.KY,0);this.J(this.KZ,0);this.J(this.ZV,0);this.J(this.
ZW,0);this.KE.S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af
));this.ZV.S(A.aaL(A.fl.Af));this.ZW.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.VM._Done();this.VN._Done();this.X7._Done();this.AgK._Done(
);this.KE._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Ly._Done(
);this.AnY._Done();this.KY._Done();this.KZ._Done();this.ZV._Done();this.ZW._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.VM._ReInit(
);this.VN._ReInit();this.X7._ReInit();this.AgK._ReInit();this.KE._ReInit();this.
AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.Ly._ReInit();this.AnY._ReInit(
);this.KY._ReInit();this.KZ._ReInit();this.ZV._ReInit();this.ZW._ReInit();this.KE.
S(A.aaL(A.fl.Af));this.KY.S(A.aaL(A.fl.Af));this.KZ.S(A.aaL(A.fl.Af));this.ZV.S(
A.aaL(A.fl.Af));this.ZW.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.VM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VN)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.APS={Gp:null,Y6:null,Y2:null,Y3:null,Y4:null,Y5:
null,_Init:function(aArg){C.EB._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gp={I:this},0);A.acg.Text._Init.call(this.Y6={I:this},0);A.acg.Text._Init.call(this.
Y2={I:this},0);A.acg.Text._Init.call(this.Y3={I:this},0);A.acg.Text._Init.call(this.
Y4={I:this},0);A.acg.Text._Init.call(this.Y5={I:this},0);this.__proto__=C.APS;this.
Background.L(A.jb.Text);this.Gp.H(AII);this.Gp.A6(0x11);this.Gp.R(A.aaR(A.acf.Date
));this.Gp.L(A.jb.Bm);this.Y6.H(AIA);this.Y6.A6(0x12);this.Y6.R(A.aaR(A.acf.Bs));
this.Y6.L(A.jb.Bm);this.Y2.H(AZC);this.Y2.A6(0x12);this.Y2.R(A.aaR(A.acf.AUD));this.
Y2.L(A.jb.Bm);this.Y3.H(AZD);this.Y3.A6(0x12);this.Y3.R(A.aaR(A.acf.AUE));this.Y3.
L(A.jb.Bm);this.Y4.H(AZE);this.Y4.A6(0x12);this.Y4.R(A.aaR(A.acf.AOI));this.Y4.L(
A.jb.Bm);this.Y5.H(AZF);this.Y5.A6(0x12);this.Y5.R(A.aaR(A.acf.ANJ));this.Y5.L(A.
jb.Bm);this.J(this.Gp,0);this.J(this.Y6,0);this.J(this.Y2,0);this.J(this.Y3,0);this.
J(this.Y4,0);this.J(this.Y5,0);this.Gp.S(A.aaL(A.fl.Af));this.Y6.S(A.aaL(A.fl.Af
));this.Y2.S(A.aaL(A.fl.Af));this.Y3.S(A.aaL(A.fl.Af));this.Y4.S(A.aaL(A.fl.Af));
this.Y5.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.EB;this.Gp._Done();
this.Y6._Done();this.Y2._Done();this.Y3._Done();this.Y4._Done();this.Y5._Done();
C.EB._Done.call(this);},_ReInit:function(){C.EB._ReInit.call(this);this.Gp._ReInit(
);this.Y6._ReInit();this.Y2._ReInit();this.Y3._ReInit();this.Y4._ReInit();this.Y5.
_ReInit();this.Gp.R(A.aaR(A.acf.Date));this.Y6.R(A.aaR(A.acf.Bs));this.Y2.R(A.aaR(
A.acf.AUD));this.Y3.R(A.aaR(A.acf.AUE));this.Y4.R(A.aaR(A.acf.AOI));this.Y5.R(A.
aaR(A.acf.ANJ));this.Gp.S(A.aaL(A.fl.Af));this.Y6.S(A.aaL(A.fl.Af));this.Y2.S(A.
aaL(A.fl.Af));this.Y3.S(A.aaL(A.fl.Af));this.Y4.S(A.aaL(A.fl.Af));this.Y5.S(A.aaL(
A.fl.Af));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Gp)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y5)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AMJ={AkV:function(L_){if(!L_)return;
var Fx=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CX(HZ);var
ABc=A._NewObject(A.Device.AssessmentFilterCriterion,0);ABc.Initialize(3,5,0,true
);Fx.CX(ABc);L_.Bk(Fx);},AEf:function(){if(!A._GetAutoObject(A.Device.Device).Bt
)return false;return A._GetAutoObject(A.Device.Device).Bt.B8()>0;},_Init:function(
aArg){C.Aa_._Init.call(this,aArg);this.__proto__=C.AMJ;this.ATD(C.AUB);this.ATE(
C.APS);this.ATt(C.TI);this.ArZ(A.aaR(A.acf.Axz));this.Dl(A.aaR(A.acf.Ans));},_ReInit:
function(){C.Aa_._ReInit.call(this);this.ArZ(A.aaR(A.acf.Axz));this.Dl(A.aaR(A.acf.
Ans));},_className:"Application::AnimalRatings"};C.IK={B7:null,Y:null,V:null,UD:
5,T:function(E){C.I9.T.call(this,E);this.V.R(E);},Dg:function(E){C.I9.Dg.call(this
,E);this.V.L(E);},S:function(E){if(this.B7===E)return;this.B7=E;this.V.S(this.B7
);},Au2:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dd(0x1))[2]-B[0])>((B=NK.M)[2]-B[0]))this.S(A.aaL(A.fl.HL));},Kz:function(
E){if(this.UD===E)return;this.UD=E;this.Y.H([].concat(E,this.Y.M.slice(1,4)));},
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
D);},_className:"Application::AnimalInfoItem"};C.RZ={AfV:0,Ai:function(Ae){C.FA.
Ai.call(this,Ae);this.T(A.aaR(A.acf.RU));if(this.AfV>=0)this.KB((this.AfV.toFixed(
)+CR)+A.aaR(A.acf.Kq));else this.KB(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.
Ch.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.AfV=-1;
else this.AfV=A._GetAutoObject(A.Device.Helper).W.RU();this.Am();},_Init:function(
aArg){C.FA._Init.call(this,aArg);this.__proto__=C.RZ;},_className:"Application::AnimalInfoItemAge"
};C.R3={A4_:0,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.Afz));if(
this.A4_>0)this.KB((A._GetAutoObject(A.Device.Converter).Ala(this.A4_)+CR)+A._GetAutoObject(
A.acj.DU).Af8());else this.KB(A.aaR(A.acf.Unknown));},Ch:function(G){C.FA.Ch.call(
this,G);this.A4_=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.R3;},_className:
"Application::AnimalInfoItemWeight"};C.TJ={Y:null,Ei:null,Ey:null,Fd:null,P3:null
,Fc:null,P4:null,Ajj:0,Po:0,CQ:function(){this.Am();},Ai:function(Ae){C.JQ.Ai.call(
this,Ae);this.T(A.aaR(A.acf.Biy));this.Fd.R(this.Ajj.toFixed());this.Fc.R(this.Po.
toFixed());if(!!this.Ajj||!!this.Po)this.P4.R(AIK+(this.Ajj+this.Po).toFixed());
else this.P4.R(A.aaR(A.acf.ASz));},Ch:function(G){C.JQ.Ch.call(this,G);var Ak2;Ak2=
A._GetAutoObject(A.Device.Helper).Bjy(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
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
P4={I:this},0);this.__proto__=C.TJ;this.Y.H(AyK);this.Y.Bod(0);this.Y.JZ(3);this.
Ei.H(AZG);this.Ei.L(A.jb.Ib);this.Ey.H(AyH);this.Ey.L(A.jb.Gk);this.Fd.A1(0x34);
this.Fd.H(Aap);this.Fd.Hp(2);this.Fd.Je(true);this.Fd.R(U9);this.Fd.L(A.jb.Text);
this.Fd.Aj(true);this.P3.A1(0x34);this.P3.H(Aap);this.P3.Je(true);this.P3.R(AIr);
this.P3.L(A.jb.Text);this.P3.Aj(true);this.Fc.A1(0x34);this.Fc.H(Aap);this.Fc.Hp(
2);this.Fc.Je(true);this.Fc.R(U9);this.Fc.L(A.jb.Bm);this.Fc.Aj(true);this.P4.A1(
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
this.A2Z){this.KB((A._GetAutoObject(A.Device.Converter).Te(this.FX,2,true)+CR)+A.
_GetAutoObject(A.acj.DU).AaE());this.Background.L(A._GetAutoObject(A.acj.DU).Az5(
this.FX,this.Ih));this.Dg(A._GetAutoObject(A.acj.DU).Az7(this.FX,this.Ih));}else{
this.KB(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CK);this.Dg(A.jb.Text);}},Ch:
function(G){C.FA.Ch.call(this,G);var LK=A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!LK){this.A2Z=true;this.FX=A._GetAutoObject(A.acj.DU).AlE(LK,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A2Z=false;this.FX=0;}this.Ih=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.QG;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.TI={Y:null,FY:null,Ei:
null,Ey:null,MQ:null,Fd:null,Fc:null,O6:null,AaG:0,Ajj:0,Po:0,CQ:function(){this.
Am();},Ai:function(Ae){C.JQ.Ai.call(this,Ae);this.T(A.aaR(A.acf.Axz));this.MQ.R(
this.AaG.toFixed());this.Fd.R(this.Ajj.toFixed());this.Fc.R(this.Po.toFixed());}
,Ch:function(G){C.JQ.Ch.call(this,G);var Ak2;Ak2=A._GetAutoObject(A.Device.Helper
).A6_(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.AaG=Ak2.Get(3);this.Ajj=Ak2.Get(2);this.Po=Ak2.Get(1);this.Am();},AsX:
function(G){if((!!this.AaG||!!this.Ajj)||!!this.Po){this.MQ.Z(true);this.Fd.Z(true
);this.Fc.Z(true);this.O6.Z(false);}else{this.MQ.Z(false);this.Fd.Z(false);this.
Fc.Z(false);this.O6.Z(true);}this.FY.H(this.MQ.M);this.FY.Z(this.MQ.Fp());this.Ei.
H(this.Fd.M);this.Ei.Z(this.Fd.Fp());this.Ey.H(this.Fc.M);this.Ey.Z(this.Fc.Fp()
);},Au2:function(G){var B;var NK=(A.Core.Y.isPrototypeOf(G)?G:null);if(!NK)return;
if(((B=NK.Dd(0x1))[2]-B[0])>((B=NK.M)[2]-B[0])){this.Fc.S(A.aaL(A.fl.Ak));this.Fd.
S(A.aaL(A.fl.Ak));this.MQ.S(A.aaL(A.fl.Ak));}},AA8:function(G){A.pe([this,this.Au2
],this);},_Init:function(aArg){C.JQ._Init.call(this,aArg);A.Core.Y._Init.call(this.
Y={I:this},0);A.acg.AL._Init.call(this.FY={I:this},0);A.acg.AL._Init.call(this.Ei={
I:this},0);A.acg.AL._Init.call(this.Ey={I:this},0);A.acg.Text._Init.call(this.MQ={
I:this},0);A.acg.Text._Init.call(this.Fd={I:this},0);A.acg.Text._Init.call(this.
Fc={I:this},0);A.acg.Text._Init.call(this.O6={I:this},0);this.__proto__=C.TI;this.
Y.A1(0x3F);this.Y.H(AyK);this.Y.A_5(5);this.Y.JZ(3);this.FY.H(AZI);this.FY.L(A.jb.
E1);this.Ei.H(AZJ);this.Ei.L(A.jb.Ib);this.Ey.H(AZK);this.Ey.L(A.jb.Gk);this.MQ.
A1(0x3C);this.MQ.H(Aap);this.MQ.Hp(2);this.MQ.Je(true);this.MQ.R(U9);this.MQ.L(A.
jb.Text);this.MQ.Aj(true);this.Fd.A1(0x3C);this.Fd.H(Aap);this.Fd.Hp(2);this.Fd.
Je(true);this.Fd.R(U9);this.Fd.L(A.jb.Text);this.Fd.Aj(true);this.Fc.A1(0x3C);this.
Fc.H(Aap);this.Fc.Hp(2);this.Fc.Je(true);this.Fc.R(U9);this.Fc.L(A.jb.Bm);this.Fc.
Aj(true);this.O6.A1(0x34);this.O6.H(Aap);this.O6.Je(true);this.O6.A6(0x11);this.
O6.R(A.aaR(A.acf.ASz));this.O6.L(A.jb.Text);this.O6.Aj(true);this.O6.Z(false);this.
J(this.Y,0);this.J(this.FY,0);this.J(this.Ei,0);this.J(this.Ey,0);this.J(this.MQ
,0);this.J(this.Fd,0);this.J(this.Fc,0);this.J(this.O6,0);this.Y.Em=[this,this.AA8
];this.MQ.Q9([this,this.AsX]);this.MQ.S(A.aaL(A.fl.Af));this.Fd.Q9([this,this.AsX
]);this.Fd.S(A.aaL(A.fl.Af));this.Fc.Q9([this,this.AsX]);this.Fc.S(A.aaL(A.fl.Af
));this.O6.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.JQ;this.Y._Done(
);this.FY._Done();this.Ei._Done();this.Ey._Done();this.MQ._Done();this.Fd._Done(
);this.Fc._Done();this.O6._Done();C.JQ._Done.call(this);},_ReInit:function(){C.JQ.
_ReInit.call(this);this.Y._ReInit();this.FY._ReInit();this.Ei._ReInit();this.Ey.
_ReInit();this.MQ._ReInit();this.Fd._ReInit();this.Fc._ReInit();this.O6._ReInit(
);this.O6.R(A.aaR(A.acf.ASz));this.MQ.S(A.aaL(A.fl.Af));this.Fd.S(A.aaL(A.fl.Af)
);this.Fc.S(A.aaL(A.fl.Af));this.O6.S(A.aaL(A.fl.Af));this.CQ();},_Mark:function(
D){var B;C.JQ._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ei)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ey)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Fd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.O6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AMr={_Init:function(aArg){C.Aql._Init.call(
this,aArg);this.__proto__=C.AMr;this.A5j=1;this.Rm.Cm(A.aaL(A.fl.Ak));},_ReInit:
function(){C.Aql._ReInit.call(this);this.Rm.Cm(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.ARl={OR:null,IV:null,H_:null,IT:null,GP:null,Al7:function(G){A.pe([this,this.
BA0],this);},BA0:function(G){A._GetAutoObject(C.A7).Cb(3);},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.OR._Init.call(this.OR={I:this},0);C.BX._Init.call(this.
IV={I:this},0);C.SY._Init.call(this.H_={I:this},0);C.AGX._Init.call(this.IT={I:this
},0);C.Rd._Init.call(this.GP={I:this},0);this.__proto__=C.ARl;var B;this.Jf(A.aaR(
A.acf.A$7));this.IV.H(Ah3);this.IV.Aj(true);this.IV.T(A.aaR(A.acf.Language));this.
IV.A_N(100);this.H_.H(U8);this.H_.Aj(true);this.H_.T(A.aaR(A.acf.Date));this.H_.
Bi(true);this.IT.H(Aao);this.IT.Aj(true);this.IT.T(A.aaR(A.acf.Bs));this.GP.H(Ah2
);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGu));this.GP.Bi(true);
this.GP.Ar_(false);this.GP.A_V(true);this.J5(this.Y,-1);this.J5(this.Ay,-1);this.
J(this.IV,0);this.J(this.H_,0);this.J(this.IT,0);this.J(this.GP,0);this.IV.ZA(A.
aaL(A.fl.H6));this.IV.ZB(A.aaL(A.fl.H6));this.IV.Au([B=this.OR,B.B$,B.Cc]);this.
IV.CL(this.OR);this.H_.Ab8([B=this.H_,B.FW]);this.H_.Gt([this,this.D_,this.GT]);
this.H_.AkA(A.aaL(A.ach.Edit));this.H_.Acc([B=A._GetAutoObject(A.Device.Helper),
B.U_,B.Vb]);this.IT.Ab8([B=this.IT,B.FW]);this.IT.Gt([this,this.D_,this.GT]);this.
IT.AkA(A.aaL(A.ach.Edit));this.IT.Acc([B=A._GetAutoObject(A.Device.Helper),B.U_,
B.Vb]);this.GP.Ab8([B=this.GP,B.FW]);this.GP.Gt([this,this.D_,this.GT]);this.GP.
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
};C.Aa_={Bg:null,FE:null,Am5:null,AmO:null,Sk:null,A7u:A.jV,KS:A.jV,ARQ:null,ARR:
null,ADC:null,CD:function(G){var B;C.D9.CD.call(this,G);A.zX([this,this.A3x],[B=
A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId],0);this.A3x(this);},E4:function(
G){var B;A.z$([this,this.A3x],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId
],0);C.D9.E4.call(this,G);},ZC:function(E){C.D9.ZC.call(this,E);if(A.aa0(this.AR
,E))return;if(!!this.Bg)this.Bg.ZC(E);},ATD:function(E){if(this.ARQ===E)return;this.
ARQ=E;if(!!this.Bg)this.Bg.N8(E);},ATE:function(E){if(this.ARR===E)return;this.ARR=
E;this.BpJ(this);},ATt:function(E){if(this.ADC===E)return;this.ADC=E;A.pe([this,
this.BpI],this);},ArZ:function(E){if(this.A7u===E)return;this.A7u=E;this.Sk.R(E);
},Dl:function(E){if(this.KS===E)return;this.KS=E;if(!!this.Bg)this.Bg.Dl(E);},AkV:
function(L_){A.ab5("%s",AZL);},AEf:function(){A.ab5("%s",Ali);return false;},AxH:
function(G){if(!!this.Bg)this.HR(this.Bg);this.Bg=A._NewObject(C.Gd,0);this.Bg.H(
Atl);this.Bg.Zy(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Dl(this.KS);this.Bg.
N8(this.ARQ);this.Bg.ZC(this.AR);this.J(this.Bg,0);this.Bb(this.Bg);},BpJ:function(
G){var B;if(!!this.FE)this.HR(this.FE);this.FE=(C.EB.isPrototypeOf(B=A._NewObject(
this.ARR,0))?B:null);this.FE.H(I1);this.J(this.FE,0);},BpI:function(G){var B;if(
!!this.Am5)this.HR(this.Am5);if(!!this.ADC&&this.AEf()){this.Am5=(C.I9.isPrototypeOf(
B=A._NewObject(this.ADC,0))?B:null);this.Am5.H(BD);this.Am5.Bi(false);this.J(this.
Am5,0);this.Sk.Z(false);}else this.Sk.Z(true);},A3x:function(G){this.AkV(A._GetAutoObject(
A.Device.Device).Bt);this.AxH(this);},_Init:function(aArg){C.D9._Init.call(this,
aArg);A.acg.AL._Init.call(this.AmO={I:this},0);C.CG._Init.call(this.Sk={I:this},
0);this.__proto__=C.Aa_;this.AmO.H(BD);this.AmO.L(A.jb.CK);this.Sk.H(AH0);this.Sk.
A6(0x11);this.Sk.L(A.jb.Text);this.J(this.AmO,0);this.J(this.Sk,0);this.Sk.S(A.aaL(
A.fl.Kt));this.Sk.AY(A.aaL(A.fl.HL));},_Done:function(){this.__proto__=C.D9;this.
AmO._Done();this.Sk._Done();C.D9._Done.call(this);},_ReInit:function(){C.D9._ReInit.
call(this);this.AmO._ReInit();this.Sk._ReInit();this.Sk.S(A.aaL(A.fl.Kt));this.Sk.
AY(A.aaL(A.fl.HL));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.
Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FE)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Am5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmO)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Sk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Ko={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bc6],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI1],0);A.pe([this,this.Bc6],this
);},Du:function(){return 5;},Gm:function(aIndex){return this.AnimalListContentToString.
BT(this.C7(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Zw(E);},Bc6:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Ko;this.BI.Set(0,0);this.BI.Set(1,14);this.BI.Set(2,
1);this.BI.Set(3,2);this.BI.Set(4,3);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.AnimalListContentToString._Done();C.Cn._Done.call(this);},_ReInit:function(
){C.Cn._ReInit.call(this);this.AnimalListContentToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.AnimalListContentToString)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.ARW={IV:null
,Zf:null,Zo:null,Zl:null,Zp:null,Zg:null,Zj:null,Zm:null,Zn:null,Zi:null,OR:null
,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.BX._Init.call(this.IV={I:this
},0);C.Np._Init.call(this.Zf={I:this},0);C.Np._Init.call(this.Zo={I:this},0);C.Np.
_Init.call(this.Zl={I:this},0);C.Np._Init.call(this.Zp={I:this},0);C.Np._Init.call(
this.Zg={I:this},0);C.Np._Init.call(this.Zj={I:this},0);C.Np._Init.call(this.Zm={
I:this},0);C.Np._Init.call(this.Zn={I:this},0);C.Np._Init.call(this.Zi={I:this},
0);C.OR._Init.call(this.OR={I:this},0);this.__proto__=C.ARW;var B;this.Jf(A.aaR(
A.acf.Settings));this.IV.H(Ah3);this.IV.Aj(true);this.IV.T(A.aaR(A.acf.Language)
);this.IV.A_N(100);this.Zf.H(Atm);this.Zf.Aj(true);this.Zf.T(A.aaR(A.acf.ACN));this.
Zf.Ns(16);this.Zo.H(Atn);this.Zo.Aj(true);this.Zo.T(A.aaR(A.acf.AHp));this.Zo.Ns(
22);this.Zl.H(Ato);this.Zl.Aj(true);this.Zl.T(A.aaR(A.acf.Temperature));this.Zl.
Ns(17);this.Zp.H(AyL);this.Zp.Aj(true);this.Zp.T(A.aaR(A.acf.ACK));this.Zp.Ns(42
);this.Zg.H(AoA);this.Zg.Aj(true);this.Zg.T(A.aaR(A.acf.Device));this.Zg.Ns(18);
this.Zj.H(AoA);this.Zj.Aj(true);this.Zj.T(A.aaR(A.acf.Asv));this.Zj.Ns(19);this.
Zm.H(AZM);this.Zm.Aj(true);this.Zm.T(A.aaR(A.acf.LinkTransponder));this.Zm.Ns(89
);this.Zn.H(AZN);this.Zn.Aj(true);this.Zn.T(A.aaR(A.acf.UnlinkTransponder));this.
Zn.Ns(95);this.Zi.H(AyA);this.Zi.Aj(true);this.Zi.T(A.aaR(A.acf.AC2));this.Zi.Ns(
76);this.J(this.IV,0);this.J(this.Zf,0);this.J(this.Zo,0);this.J(this.Zl,0);this.
J(this.Zp,0);this.J(this.Zg,0);this.J(this.Zj,0);this.J(this.Zm,0);this.J(this.Zn
,0);this.J(this.Zi,0);this.IV.ZA(A.aaL(A.fl.H6));this.IV.ZB(A.aaL(A.fl.H6));this.
IV.Au([B=this.OR,B.B$,B.Cc]);this.IV.CL(this.OR);this.Zf.AR=[B=this.Zf,B.Nv];this.
Zo.AR=[B=this.Zo,B.Nv];this.Zl.AR=[B=this.Zl,B.Nv];this.Zp.AR=[B=this.Zp,B.Nv];this.
Zg.AR=[B=this.Zg,B.Nv];this.Zj.AR=[B=this.Zj,B.Nv];this.Zm.AR=[B=this.Zm,B.Nv];this.
Zn.AR=[B=this.Zn,B.Nv];this.Zi.AR=[B=this.Zi,B.Nv];},_Done:function(){this.__proto__=
C.Cg;this.IV._Done();this.Zf._Done();this.Zo._Done();this.Zl._Done();this.Zp._Done(
);this.Zg._Done();this.Zj._Done();this.Zm._Done();this.Zn._Done();this.Zi._Done(
);this.OR._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this
);this.IV._ReInit();this.Zf._ReInit();this.Zo._ReInit();this.Zl._ReInit();this.Zp.
_ReInit();this.Zg._ReInit();this.Zj._ReInit();this.Zm._ReInit();this.Zn._ReInit(
);this.Zi._ReInit();this.OR._ReInit();this.Jf(A.aaR(A.acf.Settings));this.IV.T(A.
aaR(A.acf.Language));this.Zf.T(A.aaR(A.acf.ACN));this.Zo.T(A.aaR(A.acf.AHp));this.
Zl.T(A.aaR(A.acf.Temperature));this.Zp.T(A.aaR(A.acf.ACK));this.Zg.T(A.aaR(A.acf.
Device));this.Zj.T(A.aaR(A.acf.Asv));this.Zm.T(A.aaR(A.acf.LinkTransponder));this.
Zn.T(A.aaR(A.acf.UnlinkTransponder));this.Zi.T(A.aaR(A.acf.AC2));},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zo)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zj)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"
};C.AME={EU:null,Init:function(aArg){this.EU.Ahx(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag1)));},AUI:function(
){this.EU.Ae2(this.AO6());this.AaI=!this.EU.EZ.A0;},AiY:function(G){this.EU.Ahx(
A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag1)));this.AUI();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dl(A.aaR(A.acf.A8B));else this.Dl(A.aaR(A.acf.ArC));this.Am();},AO6:function(
){var Bz=A._NewObject(C.AqB,0);var Qr=A._GetAutoObject(A.Device.Helper).AOn(A._GetAutoObject(
A.Device.Helper).Dv());var Dx=A._GetAutoObject(A.Device.Helper).Aqx(Qr-(86400*this.
MG));Bz.AnF(AZO);Bz.Q7([].concat(0,Bz.Gl.slice(1,4)));Bz.Q7(A.abN(Bz.Gl,(Qr-Dx)|
0));Bz.Q7(A.abP(Bz.Gl,3400));Bz.Q7([].concat(Bz.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(
A.Device.Device).Bt.B8();Bz.AwZ(Gi);Bz.Yq();if(Gi>0){var O=0;while(O<Gi){var Ap1=
A._GetAutoObject(A.Device.Device).Bt.CC(O,7);var Ap2=A._GetAutoObject(A.Device.Device
).Bt.Hw(O,6)-Dx;if(Ap1>0)Bz.Aqm(Ap2,Ap1);O=O+1;}}return Bz;},_Init:function(aArg
){C.Ld._Init.call(this,aArg);C.Aq5._Init.call(this.EU={I:this},0);this.__proto__=
C.AME;this.EU.H(AZP);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFv(C.AG$);this.
J(this.EU,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Ld;this.EU._Done(
);C.Ld._Done.call(this);},_ReInit:function(){C.Ld._ReInit.call(this);this.EU._ReInit(
);this.EU.T(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.Ld._Mark.call(
this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AMF={Aaa:null,O9:null,AgW:null,AaI:false,Init:function(aArg){this.Aaa.Ahx(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag1)));},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AgW.Z(this.AaI);
},CD:function(G){var B;C.D9.CD.call(this,G);A.zX([this,this.AiY],[B=A._GetAutoObject(
A.Device.Helper),B.U_,B.Vb],0);A.zV([this,this.AiY],A._GetAutoObject(A.Device.Device
).Bt,0);A.zX([this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId
],0);A.pe([this,this.Amj],this);},E4:function(G){var B;A.z$([this,this.AiY],[B=A.
_GetAutoObject(A.Device.Helper),B.U_,B.Vb],0);A.z9([this,this.AiY],A._GetAutoObject(
A.Device.Device).Bt,0);A.z$([this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).
W,B.Q6,B.OnSetId],0);C.D9.E4.call(this,G);},Amj:function(G){var Fx=A._NewObject(
A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(
1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CX(HZ);A._GetAutoObject(A.Device.
Device).Bt.Bk(Fx);},AiY:function(G){this.Aaa.Ahx(A._NewObject(A.Core.Bs,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag1)));this.Bo4();this.
Am();},Bo4:function(){var B;var Gi=A._GetAutoObject(A.Device.Device).Bt.B8();var
Lb=A._NewObject(C.AqB,0);var Vz=A._NewObject(C.AqB,0);var Qr=A._GetAutoObject(A.
Device.Helper).AOn(A._GetAutoObject(A.Device.Helper).Dv());var Dx=A._GetAutoObject(
A.Device.Helper).Aqx(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);Lb.Q7([].concat(
0,Lb.Gl.slice(1,4)));Lb.Q7(A.abN(Lb.Gl,(Qr-Dx)|0));Lb.Q7(A.abP(Lb.Gl,0));Lb.Q7([
].concat(Lb.Gl.slice(0,3),150000));Lb.AnF(AZQ);Vz.Q7([].concat(0,Vz.Gl.slice(1,4
)));Vz.Q7(A.abN(Vz.Gl,(Qr-Dx)|0));Vz.Q7(A.abP(Vz.Gl,0));Vz.Q7([].concat(Vz.Gl.slice(
0,3),1500));Vz.AnF(AZR);Lb.AwZ(Gi);Lb.Yq();Vz.AwZ(Gi);Vz.Yq();if(Gi>0){var O=0;var
AaK=0;var AAu=0;var AKl=0;var A2A=0;var BdK=true;while(O<Gi){var Amd=A._GetAutoObject(
A.Device.Device).Bt.CC(O,8);var AaY=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-
Dx;if(Amd>0){Lb.Aqm(AaY,Amd);if(!A2A){A2A=AaY;AKl=Amd;}if(AAu>0){var LK=A._GetAutoObject(
A.Device.Helper).Mf(AAu,AaY);if(!!LK){var FX=A._GetAutoObject(A.acj.DU).AlE(LK,AaK
,Amd);if(BdK){Vz.Aqm(AAu,FX);BdK=false;}Vz.Aqm(AaY,FX);}}AaK=Amd;AAu=AaY;}O=O+1;
}var AdQ=A.acf.BhA;var FX=A._GetAutoObject(A.Device.Helper).BjA(A2A,AAu,AKl,AaK);
AdQ=A._GetAutoObject(A.Device.Helper).MO(AdQ,Pc,FX.toFixed());AdQ=A._GetAutoObject(
A.Device.Helper).MO(AdQ,Ayl,A._GetAutoObject(A.acj.DU).AaE());this.O9.Ip.R(AdQ);
}this.AaI=!Lb.A0;if(this.AaI)this.O9.Ip.R(A.jV);(C.O9.isPrototypeOf(B=this.O9.EU
)?B:null).AnA([B=A._GetAutoObject(A.Device.Helper).W,B.PX,B.EC]);this.Aaa.Ae2(Lb
);this.O9.Ae2(Vz);},_Init:function(aArg){C.D9._Init.call(this,aArg);C.Aq5._Init.
call(this.Aaa={I:this},0);C.Aq5._Init.call(this.O9={I:this},0);C.AkT._Init.call(
this.AgW={I:this},0);this.__proto__=C.AMF;this.Aaa.H(AZS);this.Aaa.T(A.aaR(A.acf.
Afz));this.Aaa.AFv(C.ANa);this.O9.H(AoB);this.O9.T(A.aaR(A.acf.AHu));this.O9.AFv(
C.O9);this.AgW.H(U6);this.AgW.R(A.aaR(A.acf.Akm));this.J(this.Aaa,0);this.J(this.
O9,0);this.J(this.AgW,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D9;
this.Aaa._Done();this.O9._Done();this.AgW._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Aaa._ReInit();this.O9._ReInit();this.AgW.
_ReInit();this.Aaa.T(A.aaR(A.acf.Afz));this.O9.T(A.aaR(A.acf.AHu));this.AgW.R(A.
aaR(A.acf.Akm));},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Aaa
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoWeightsGraph"
};C.AMC={Avp:null,Avo:null,AxB:null,AuX:null,VL:null,Abx:null,Abw:null,Acs:null,
Afk:null,Init:function(aArg){this.VL.Ahx(A._NewObject(A.Core.Bs,0).Initialize(A.
_GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.Ag1)));},A42:function(G
){this.VL.Acd(this.AuX);this.Abx.Acd(this.Avp);this.Abw.Acd(this.Avo);this.Acs.Acd(
this.AxB);},AxA:function(){var Gi=A._GetAutoObject(A.Device.Device).Bt.B8();this.
AuX=A._NewObject(C.Ajw,0);this.Avp=A._NewObject(C.Ajw,0);this.Avo=A._NewObject(C.
Ajw,0);this.AxB=A._NewObject(C.Ajw,0);if(Gi>0){var O=Gi-1;while(O>=0){var D8=A._GetAutoObject(
A.Device.Device).Bt.Hw(O,6);this.AtF(this.AuX,O,3,D8);this.AtF(this.Avp,O,2,D8);
this.AtF(this.Avo,O,5,D8);this.AtF(this.AxB,O,4,D8);O=O-1;}}this.AaI=!(((this.AuX.
A0+this.Avo.A0)+this.Avp.A0)+this.AxB.A0);A.pe([this,this.A42],this);},AtF:function(
A1A,Ad,A1z,Ql){var AlA=A._GetAutoObject(A.Device.Device).Bt.Ja(Ad,A1z);if(!!AlA)
A1A.OA(AlA,Ql);},Acb:function(E){if(this.MG===E)return;C.Ld.Acb.call(this,E);if(
!!this.VL)this.VL.Acb(E);if(!!this.Abx)this.Abx.Acb(E);if(!!this.Abw)this.Abw.Acb(
E);if(!!this.Acs)this.Acs.Acb(E);this.Afk.Acb(E);},AiY:function(G){this.VL.Ahx(A.
_NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(
A.aaR(A.acf.Ag1)));this.AxA();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dl(A.aaR(A.acf.BkZ));else this.Dl(A.aaR(A.acf.Ans));this.Am();},_Init:function(
aArg){C.Ld._Init.call(this,aArg);C.AhC._Init.call(this.VL={I:this},0);C.AhC._Init.
call(this.Abx={I:this},0);C.AhC._Init.call(this.Abw={I:this},0);C.AhC._Init.call(
this.Acs={I:this},0);C.AUF._Init.call(this.Afk={I:this},0);this.__proto__=C.AMC;
this.Dl(A.aaR(A.acf.Ans));this.VL.H(AZT);this.VL.R(A.aaR(A.acf.AGz));this.Abx.H(
AZU);this.Abx.R(A.aaR(A.acf.Feed));this.Abw.H(AZV);this.Abw.R(A.aaR(A.acf.AGB));
this.Acs.H(AZW);this.Acs.R(A.aaR(A.acf.AGC));this.Afk.H(AZX);this.J(this.VL,-1);
this.J(this.Abx,-1);this.J(this.Abw,-1);this.J(this.Acs,-1);this.J(this.Afk,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.Ld;this.VL._Done();this.Abx.
_Done();this.Abw._Done();this.Acs._Done();this.Afk._Done();C.Ld._Done.call(this);
},_ReInit:function(){C.Ld._ReInit.call(this);this.VL._ReInit();this.Abx._ReInit(
);this.Abw._ReInit();this.Acs._ReInit();this.Afk._ReInit();this.Dl(A.aaR(A.acf.Ans
));this.VL.R(A.aaR(A.acf.AGz));this.Abx.R(A.aaR(A.acf.Feed));this.Abw.R(A.aaR(A.
acf.AGB));this.Acs.R(A.aaR(A.acf.AGC));},_Mark:function(D){var B;C.Ld._Mark.call(
this,D);if((B=this.Avp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Avo)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AxB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AuX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Acs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afk)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AMD={EU:null,WU:null,Aem:null,A2X:false,Init:function(aArg){this.WU.Ahx(A._NewObject(
A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv()).Format(A.aaR(A.acf.
Ag1)));},Bl:function(aSize){C.Ld.Bl.call(this,aSize);this.Aem.H(this.EU.M);},Ai:
function(Ae){C.Ld.Ai.call(this,Ae);var BCw=!this.AaI&&this.A2X;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.Aem.R(A.aaR(A.acf.A8B));else this.
Aem.R(A.aaR(A.acf.ArC));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dl(A.aaR(
A.acf.Bk0));else this.Dl(A.aaR(A.acf.Bk1));this.Aem.Z(BCw);},AiY:function(G){this.
WU.Ahx(A._NewObject(A.Core.Bs,0).Initialize(A._GetAutoObject(A.Device.Helper).Dv(
)).Format(A.aaR(A.acf.Ag1)));this.AaI=true;this.A2X=true;this.AxA();this.AUI();this.
Am();},AUI:function(){this.EU.Ae2(this.AO6());if(!!this.EU.EZ&&(this.EU.EZ.A0>0)
){this.AaI=false;this.A2X=false;}},AO6:function(){var Bz=A._NewObject(C.AqB,0);var
Qr=A._GetAutoObject(A.Device.Helper).AOn(A._GetAutoObject(A.Device.Helper).Dv());
var Dx=A._GetAutoObject(A.Device.Helper).Aqx(Qr-(86400*this.MG));Bz.AnF(AZY);Bz.
Q7([].concat(0,Bz.Gl.slice(1,4)));Bz.Q7(A.abN(Bz.Gl,(Qr-Dx)|0));Bz.Q7(A.abP(Bz.Gl
,3400));Bz.Q7([].concat(Bz.Gl.slice(0,3),4200));var Gi=A._GetAutoObject(A.Device.
Device).Bt.B8();Bz.AwZ(Gi);Bz.Yq();if(Gi>0){var O=0;while(O<Gi){var Ap1=A._GetAutoObject(
A.Device.Device).Bt.CC(O,7);var Ap2=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6)-
Dx;if(Ap1>0)Bz.Aqm(Ap2,Ap1);O=O+1;}}return Bz;},BjP:function(){var Gi=A._GetAutoObject(
A.Device.Device).Bt.B8();if(Gi>0){var Bgr=A._NewObject(C.Ajw,0);var O=Gi-1;while(
O>=0){var D3=A._NewObject(A.Device.Rating,0);D3.E3(O,A._GetAutoObject(A.Device.Device
).Bt);var LW=A._GetAutoObject(A.Device.Helper).ADq(D3);if(!!LW)Bgr.OA(LW,D3.Timestamp
);O=O-1;}return Bgr;}else return null;},AxA:function(){this.WU.Acd(this.BjP());if(
!!this.WU.N$&&(this.WU.N$.A0>0))this.AaI=false;},_Init:function(aArg){C.Ld._Init.
call(this,aArg);C.Aq5._Init.call(this.EU={I:this},0);C.AhC._Init.call(this.WU={I:
this},0);C.AkT._Init.call(this.Aem={I:this},0);this.__proto__=C.AMD;this.EU.H(Atl
);this.EU.T(A.aaR(A.acf.Temperature));this.EU.AFv(C.AG$);this.WU.H(AZZ);this.WU.
R(A.aaR(A.acf.Rating));this.Aem.H(Atl);this.J(this.EU,-2);this.J(this.WU,-2);this.
J(this.Aem,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Ld;this.EU._Done(
);this.WU._Done();this.Aem._Done();C.Ld._Done.call(this);},_ReInit:function(){C.
Ld._ReInit.call(this);this.EU._ReInit();this.WU._ReInit();this.Aem._ReInit();this.
EU.T(A.aaR(A.acf.Temperature));this.WU.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.Ld._Mark.call(this,D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aem)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.W0={Q:null,Gx:null,Gy:null
,QP:null,AM:0,Gr:0,Ga:100,FI:0,Init:function(aArg){},H1:function(G){this.FI=1;C.
Eg.H1.call(this,G);},Bl:function(aSize){C.Eg.Bl.call(this,aSize);this.QP.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);this.QP.Z(this.Gr!==
this.Ga);this.QP.L(this.V.AQ);if((this.FI===4)||(this.FI===5))this.QP.L(A.jb.E1);
},Al8:function(G){this.FI=5;this.Am();if(this.Bo.Bw){A.pe([this,this.Ay6],this);
this.Bo.As(false);}this.Bo.As(true);},Qx:function(G){if(this.FI===5)A.pe([this,this.
Ay6],this);if(this.FI===4)A.pe([this,this.Ay7],this);if(this.FI===1)A.pe(this.AR
,this);this.FI=0;this.Am();},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},AcY:function(s){this.C5(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.AcY],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.AcY],E,0);if(!!E)A.pe([this,this.AcY],this);},Al9:function(G){this.FI=4;this.
Am();if(this.Bo.Bw){A.pe([this,this.Ay7],this);this.Bo.As(false);}this.Bo.As(true
);},Ki:function(G){this.FI=0;},Ay7:function(s){this.Ki(s);},Kd:function(G){this.
FI=0;},Ay6:function(s){this.Kd(s);},Bx:function(E){if(E<this.Gr)E=this.Gr;if(E>this.
Ga)E=this.Ga;if(this.AM===E)return;this.AM=E;this.Am();},Gb:function(E){if(this.
Gr===E)return;this.Gr=E;this.Am();},EV:function(E){if(this.Ga===E)return;this.Ga=
E;this.Am();},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.Core.BF._Init.call(
this.Gx={I:this},0);A.Core.BF._Init.call(this.Gy={I:this},0);A.acg.Ap._Init.call(
this.QP={I:this},0);this.__proto__=C.W0;this.H(K3);this.Gx.Filter=5;this.Gy.Filter=
4;this.Background.H(K3);this.V.H(AcR);this.V.R(LB);this.QP.H(AyM);this.J(this.QP
,0);this.Gx.BG=[this,this.Al8];this.Gx.D1=[this,this.Al8];this.Gy.BG=[this,this.
Al9];this.Gy.D1=[this,this.Al9];this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak
));this.V.Cm(null);this.QP.Ax(A.aaL(A.ach.AM0));this.Init(aArg);},_Done:function(
){this.__proto__=C.Eg;this.Gx._Done();this.Gy._Done();this.QP._Done();C.Eg._Done.
call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.Gx._ReInit();this.Gy.
_ReInit();this.QP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.AU6={AC:null,CM:null,HP:
null,Bl:function(aSize){C.W0.Bl.call(this,aSize);this.CM.H([this.QP.M[2],this.QP.
M[1],this.M[2],this.QP.M[3]]);},Ai:function(Ae){C.W0.Ai.call(this,Ae);this.CM.AbN(
0,this.CM.A0-1);if(this.Gr!==this.Ga)this.QP.Z(true);},Init:function(aArg){},C5:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DZ((F=this.Q,F[1].call(
F[0]))));},Ki:function(G){var F;var BP=this.AM;C.W0.Ki.call(this,G);this.Bx(this.
AM+1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C7(
this.AM)));A.abo(this.Q,0);}},Kd:function(G){var F;var BP=this.AM;C.W0.Kd.call(this
,G);this.Bx(this.AM-1);if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C7(this.AM)));A.abo(this.Q,0);}},Bx:function(E){var QD=0;if(this.Gr
!==this.Ga){if(E<this.Gr){E=this.Ga;QD=-this.CM.GO*this.CM.A0;}if(E>this.Ga){E=this.
Gr;QD=this.CM.GO;}}C.W0.Bx.call(this,E);if(!!QD)this.CM.Gc(QD);this.CM.GU(this.AM
);this.CM.HK(this.CM.Gu,true,this.HP,null);},Ho:function(G){var B;var Gh=this.CM.
G8;var CA=(C.CG.isPrototypeOf(B=this.CM.Cj)?B:null);if(!CA)return;CA.S(this.V.B7
);CA.AY(A.aaL(A.fl.Af));CA.L(this.V.AQ);if(!!this.AC)CA.R(this.AC.Gm(Gh));else CA.
R(Xp);CA.H(A.abK(CA.M,[(B=this.CM.M)[2]-B[0],this.CM.GO]));},CL:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gb(0);this.EV(this.AC.Du()-1);this.CM.
JD(this.AC.Du());this.CM.AbN(0,this.CM.A0-1);}},_Init:function(aArg){C.W0._Init.
call(this,aArg);A.Core.CM._Init.call(this.CM={I:this},0);A.acl.Gn._Init.call(this.
HP={I:this},0);this.__proto__=C.AU6;this.H(K3);this.QP.H(AIL);this.CM.Ae_(40);this.
CM.N8(C.CG);this.HP.WS(23);this.HP.HQ(1);this.HP.Fq(200);this.J(this.CM,0);this.
V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));this.CM.Ho=[this,this.Ho];this.Init(
aArg);},_Done:function(){this.__proto__=C.W0;this.CM._Done();this.HP._Done();C.W0.
_Done.call(this);},_ReInit:function(){C.W0._ReInit.call(this);this.CM._ReInit();
this.HP._ReInit();this.V.S(A.aaL(A.fl.Af));this.V.AY(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.W0._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.R4={ALL:0
,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.AHu));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.KB((A._GetAutoObject(A.Device.Converter).Ala(this.ALL
)+CR)+A._GetAutoObject(A.acj.DU).Af8());else this.KB(A.aaR(A.acf.Unknown));},Ch:
function(G){C.FA.Ch.call(this,G);this.ALL=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.FA._Init.call(this,aArg);this.__proto__=C.R4;},_className:"Application::AnimalInfoItemWeightGain"
};C.APJ={Bc:null,Df:null,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(
A.Device.Device),B.AEP,B.AI0],0);},DX:function(G){C.IP.DX.call(this,G);this.Df.Ax(
A._GetAutoObject(A.Device.Converter).BhP(A._GetAutoObject(A.Device.Device).D9));
},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.C8._Init.call(this.Bc={I:
this},0);A.acg.Ap._Init.call(this.Df={I:this},0);this.__proto__=C.APJ;this.Bc.DD(
Alm);this.Bc.DN(AyN);this.Bc.L(A.jb.Bc);this.Df.H(AZ0);this.Df.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Df,0);this.Df.Ax(A.aaL(A.ach.AjW));this.Init(aArg);},_Done:
function(){this.__proto__=C.IP;this.Bc._Done();this.Df._Done();C.IP._Done.call(this
);},_ReInit:function(){C.IP._ReInit.call(this);this.Bc._ReInit();this.Df._ReInit(
);},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ANM={ZT:null,KF:null,Mu:null,Timer:null,ACB:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.ZT.R(A._GetAutoObject(A.Device.Helper).MO(A.aaR(A.acf.Brl),Pc,this.ACB.
toFixed()));},CD:function(G){this.Timer.As(true);},E4:function(G){this.Timer.As(
false);},BBL:function(G){if(this.ACB>1){this.ACB=this.ACB-1;this.Am();}else{this.
Timer.As(false);A._GetAutoObject(A.Device.Device).AxI();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.ZT={I:this},0);A.acg.Text.
_Init.call(this.KF={I:this},0);A.acg.Ap._Init.call(this.Mu={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ANM;this.Background.L(A.jb.CU
);this.N.Z(true);this.ZT.H(AZ1);this.ZT.Lv(true);this.ZT.R(A.jV);this.ZT.L(A.jb.
Text);this.KF.H(AZ2);this.KF.Lv(true);this.KF.R(A.aaR(A.acf.A5T));this.KF.L(A.jb.
Text);this.Mu.H(AIM);this.J(this.ZT,0);this.J(this.KF,0);this.J(this.Mu,0);this.
ZT.S(A.aaL(A.fl.Af));this.KF.S(A.aaL(A.fl.Af));this.Mu.Ax(A.aaL(A.ach.AB7));this.
Timer.MK=[this,this.BBL];},_Done:function(){this.__proto__=C.AB;this.ZT._Done();
this.KF._Done();this.Mu._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.ZT._ReInit();this.KF._ReInit();this.Mu._ReInit(
);this.Timer._ReInit();this.KF.R(A.aaR(A.acf.A5T));this.ZT.S(A.aaL(A.fl.Af));this.
KF.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
ZT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ANt={KF:null,AmF:null
,QI:null,CQ:function(){this.Am();},Ai:function(Ae){C.Aeb.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Abd<=10)this.KF.R(A.aaR(A.acf.Bh1));else this.KF.R(A.aaR(A.acf.
A5U));},_Init:function(aArg){C.Aeb._Init.call(this,aArg);A.acg.Text._Init.call(this.
KF={I:this},0);A.acg.Ap._Init.call(this.AmF={I:this},0);C.CG._Init.call(this.QI={
I:this},0);this.__proto__=C.ANt;this.SZ.H(AZ3);this.Mu.H(AZ4);this.KF.H(AZ5);this.
KF.Lv(true);this.KF.L(A.jb.Text);this.AmF.H(AIM);this.QI.H(AZ6);this.QI.Z(true);
this.QI.R(A.aaR(A.acf.AUG));this.QI.L(A.jb.Text);this.J(this.KF,0);this.J(this.AmF
,0);this.J(this.QI,0);this.KF.S(A.aaL(A.fl.Af));this.AmF.Ax(A.aaL(A.ach.AB7));this.
QI.S(A.aaL(A.fl.Af));this.QI.AY(A.aaL(A.fl.Ak));this.QI.Cm(A.aaL(A.fl.Bh));},_Done:
function(){this.__proto__=C.Aeb;this.KF._Done();this.AmF._Done();this.QI._Done();
C.Aeb._Done.call(this);},_ReInit:function(){C.Aeb._ReInit.call(this);this.KF._ReInit(
);this.AmF._ReInit();this.QI._ReInit();this.QI.R(A.aaR(A.acf.AUG));this.KF.S(A.aaL(
A.fl.Af));this.QI.S(A.aaL(A.fl.Af));this.QI.AY(A.aaL(A.fl.Ak));this.QI.Cm(A.aaL(
A.fl.Bh));this.CQ();},_Mark:function(D){var B;C.Aeb._Mark.call(this,D);if((B=this.
KF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmF)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AMp={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AMp;this.
RY.As(false);this.RY.Aj(false);this.RY.Z(false);},_className:"Application::AlarmListFilterScreen"
};C.AV8={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AV8;this.
Td.As(false);this.Td.Aj(false);this.Td.Z(false);},_className:"Application::WatchListFilterScreen"
};C.APb={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad2(5));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=
C.APb;},_className:"Application::HeaderControlListFilter"};C.APL={DX:function(G){
C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(6));},_Init:
function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APL;},_className:"Application::HeaderWatchListFilter"
};C.APP={D0:null,Nh:null,_Init:function(aArg){C.T6._Init.call(this,aArg);C.CG._Init.
call(this.D0={I:this},0);A.acg.Ap._Init.call(this.Nh={I:this},0);this.__proto__=
C.APP;this.D0.H(Aox);this.D0.R(A.aaR(A.acf.A6p));this.D0.L(A.jb.Text);this.Nh.H(
AZ7);this.Nh.L(A.jb.Text);this.Nh.A6(0x12);this.J(this.D0,-2);this.J(this.Nh,0);
this.D0.S(A.aaL(A.fl.Ak));this.D0.AY(A.aaL(A.fl.Bh));this.Nh.Ax(A.aaL(A.ach.ADU)
);},_Done:function(){this.__proto__=C.T6;this.D0._Done();this.Nh._Done();C.T6._Done.
call(this);},_ReInit:function(){C.T6._ReInit.call(this);this.D0._ReInit();this.Nh.
_ReInit();this.D0.R(A.aaR(A.acf.A6p));this.D0.S(A.aaL(A.fl.Ak));this.D0.AY(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.T6._Mark.call(this,D);if((B=this.D0)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWatch"};C.ANo={Ch:function(Ad){C.AjD.Ch.call(this,Ad);if(
!!this.AX){var Os=this.AX.H7(Ad,8);var BDi=this.AX.Sq(Ad,21);this.Abp.R(A._GetAutoObject(
A.Device.Helper).Mf(BDi,A._GetAutoObject(A.Device.Helper).Dv()).toFixed());this.
Sw.Z(Os);this.Am();}},_Init:function(aArg){C.AjD._Init.call(this,aArg);this.__proto__=
C.ANo;},_className:"Application::CalfListWatchItem"};C.T6={Aha:null,Ahc:null,_Init:
function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aha={I:this},
0);A.acg.Ap._Init.call(this.Ahc={I:this},0);this.__proto__=C.T6;this.Aha.H(AZ8);
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
};C.AjD={T$:null,WH:null,Ua:null,WI:null,Sw:null,Zq:null,Abp:null,AP:null,A$:null
,Ea:null,Ly:null,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize
);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[
0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T$.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.WH.H(this.T$.M);this.A$.H([this.T$.
M[2]-1,0,this.T$.M[2]+1,aSize[1]]);this.Ua.H([this.T$.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.WI.H(this.Ua.M);this.Ea.H([this.Ua.M[2]-1,0,this.Ua.M[2]+1,aSize[
1]]);this.Sw.H([this.Ua.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Zq.H(this.Sw.
M);this.Ly.H([this.Sw.M[2]-1,0,this.Sw.M[2]+1,aSize[1]]);this.Abp.H([this.Sw.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var La=this.V.AQ;
this.T$.AFe(La);this.WH.L(La);this.Ua.AFe(La);this.WI.L(La);this.Sw.AFe(La);this.
Zq.L(La);this.Abp.L(La);this.Zq.Z(!this.Sw.Fp());},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;var Mn=this.AX.CC(Ad,1);var Ih=this.AX.Am0(Ad,14);var Auy=this.AX.CC(
Ad,5);var LW=this.AX.Ja(Ad,13);this.T(Mn.toFixed());if(!!LW){this.T$.Z(true);this.
T$.AwP(A._GetAutoObject(A.acj.Assessment).BdS(LW));this.WH.Z(false);}else{this.T$.
Z(false);this.WH.Z(true);}if(Auy>0){this.Ua.Z(true);this.Ua.AwP(A._GetAutoObject(
A.acj.Assessment).BdS(A._GetAutoObject(A.Device.Converter).AsQ(Ih,Auy)));this.WI.
Z(false);}else{this.Ua.Z(false);this.WI.Z(true);}this.Am();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.Kp._Init.call(this.T$={I:this},0);A.acg.Text._Init.
call(this.WH={I:this},0);C.Kp._Init.call(this.Ua={I:this},0);A.acg.Text._Init.call(
this.WI={I:this},0);C.Kp._Init.call(this.Sw={I:this},0);A.acg.Text._Init.call(this.
Zq={I:this},0);A.acg.Text._Init.call(this.Abp={I:this},0);A.acg.AL._Init.call(this.
AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.
Ea={I:this},0);A.acg.AL._Init.call(this.Ly={I:this},0);this.__proto__=C.AjD;this.
WH.H(AZ_);this.WH.R(Aoy);this.WI.H(Aoz);this.WI.R(Aoy);this.Sw.AwP(A.jb.Rk);this.
Zq.H(Aoz);this.Zq.R(Rs);this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.L(A.jb.Bc);
this.Ly.L(A.jb.Bc);this.J(this.T$,0);this.J(this.WH,0);this.J(this.Ua,0);this.J(
this.WI,0);this.J(this.Sw,0);this.J(this.Zq,0);this.J(this.Abp,0);this.J(this.AP
,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.Ly,0);this.WH.S(A.aaL(A.fl.Af
));this.WI.S(A.aaL(A.fl.Af));this.Zq.S(A.aaL(A.fl.Af));this.Abp.S(A.aaL(A.fl.Af)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.T$._Done();this.WH.
_Done();this.Ua._Done();this.WI._Done();this.Sw._Done();this.Zq._Done();this.Abp.
_Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.Ly._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.T$._ReInit();this.WH.
_ReInit();this.Ua._ReInit();this.WI._ReInit();this.Sw._ReInit();this.Zq._ReInit(
);this.Abp._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea._ReInit();this.
Ly._ReInit();this.WH.S(A.aaL(A.fl.Af));this.WI.S(A.aaL(A.fl.Af));this.Zq.S(A.aaL(
A.fl.Af));this.Abp.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.T$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ua)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ly)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DR={PA:null,Ank:null
,EZ:null,DR:null,Arv:0,Arw:0,A7T:0,AmR:0,AqO:0,Init:function(aArg){this.ATo(6);this.
ATp(8);this.ATA(A.jb.AV);this.ATB(3);},Ai:function(Ae){var B;A.Core.P.Ai.call(this
,Ae);this.DR.BmH([this.DR.Abl[0],(B=this.DR.M)[3]-B[1]]);this.WV(this);},ATn:function(
E){if(this.PA===E)return;this.PA=E;this.DR.ATn(E);},ATB:function(E){if(this.Arw===
E)return;this.Arw=E;this.DR.ATB(E);},ATA:function(E){if(this.Arv===E)return;this.
Arv=E;this.DR.ATA(E);this.DR.BmL(E);},WV:function(G){var B;while(!!this.DR.Ah)this.
HR(this.DR.Ah);if(!this.EZ)return;this.DR.AnF([((this.EZ.ON[0]*((B=this.M)[2]-B[
0]))/(this.EZ.Gl[2]-this.EZ.Gl[0]))|0,this.DR.ON[1]]);this.DR.AnF([this.DR.ON[0]
,((this.EZ.ON[1]*((B=this.M)[3]-B[1]))/(this.EZ.Gl[3]-this.EZ.Gl[1]))|0]);var O;
var Di=this.DR.ON[1];var D8;var A5b=this.EZ.Gl[1];var BkY=(((B=this.DR.M)[3]-B[1
])/this.DR.ON[1])|0;for(O=0;O<BkY;O=O+1){D8=A._NewObject(A.acg.Text,0);D8.H([0,((((
B=this.M)[3]-B[1])-(O*Di))-(this.Ank.Ascent+this.Ank.Descent))+2,((B=this.M)[2]-
B[0])-this.Arw,(((B=this.M)[3]-B[1])-(O*Di))+2]);D8.L(this.A7T);D8.S(this.Ank);D8.
A6(0x24);if(O>0)D8.R(this.AJY(A5b));else D8.R(this.AKv());A5b=A5b+this.EZ.ON[1];
this.J(D8,0);}},BG0:function(s){this.WV(s);},BnB:function(E){if(this.Ank===E)return;
this.Ank=E;this.Am();},AzF:function(A1f){var B;if(!this.EZ||(this.EZ.Gl[3]===this.
EZ.Gl[1]))return 0;return(((A1f-this.EZ.Gl[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gl[
3]-this.EZ.Gl[1]))|0;},Ae2:function(E){if(this.EZ===E)return;this.EZ=E;if(!E)this.
DR.Ae2(null);else{var Bz=A._NewObject(A.acv.ACA,0);Bz.AwZ(this.EZ.AEv);Bz.Yq();var
JF=E.AlO;while(!!JF){Bz.Aqm(this.Bzi(JF.P_),this.Bzj(JF.P$));JF=JF.Ah;}this.DR.Ae2(
Bz);this.Am();}},Bzi:function(Bxv){var B;if(!this.EZ||(this.EZ.Gl[2]===this.EZ.Gl[
0]))return 0;return((Bxv-this.EZ.Gl[0])*((B=this.M)[2]-B[0]))/(this.EZ.Gl[2]-this.
EZ.Gl[0]);},Bzj:function(A1f){var B;if(!this.EZ||(this.EZ.Gl[3]===this.EZ.Gl[1])
)return 0;return((A1f-this.EZ.Gl[1])*((B=this.M)[3]-B[1]))/(this.EZ.Gl[3]-this.EZ.
Gl[1]);},AJY:function(AoW){return AoW.toFixed();},AKv:function(){return A.jV;},ATp:
function(E){if(this.AmR===E)return;this.AmR=E;this.DR.ATp(E);},ATo:function(E){if(
this.AqO===E)return;this.AqO=E;this.DR.ATo(E);},_Init:function(aArg){A.Core.P._Init.
call(this,aArg);A.acv.DR._Init.call(this.DR={I:this},0);this.__proto__=C.DR;this.
H(AIN);this.A7T=A.jb.Text;this.DR.A1(0x3F);this.DR.H(AIN);this.DR.Bn1(AZ$);this.
DR.Bmv(A.jb.Rk);this.DR.Bni(A.jb.Bc);this.DR.Bom(A.jb.Rk);this.J(this.DR,0);this.
PA=A.aaL(A.acv.ACT);this.Ank=A.aaL(A.fl.Bh);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.P;this.DR._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.DR._ReInit();this.BnB(A.aaL(A.fl.Bh));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.PA)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ank)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EZ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.ANa={AJY:function(AoW){return A._GetAutoObject(
A.Device.Converter).Ax$(AoW,0);},AKv:function(){return A._GetAutoObject(A.acj.DU
).Af8();},_Init:function(aArg){C.DR._Init.call(this,aArg);this.__proto__=C.ANa;}
,_className:"Application::BodyWeightGraph"};C.O9={JR:null,Ey:null,Ei:null,FY:null
,IL:null,IM:null,Init:function(aArg){this.ATn(null);},WV:function(G){var B;var F;
C.DR.WV.call(this,G);var AK1=0;var ALQ=0;if(!!this.JR){AK1=this.AzF(A._GetAutoObject(
A.Device.Helper).ADp((F=this.JR,F[1].call(F[0]))));ALQ=this.AzF(A._GetAutoObject(
A.Device.Helper).ADo((F=this.JR,F[1].call(F[0]))));}this.FY.H(A.abP(this.FY.M,0)
);this.FY.H([].concat(this.FY.M.slice(0,3),((B=this.M)[3]-B[1])-ALQ));this.IL.H(
A.abO(this.IL.M,(this.FY.M[3]-((((B=this.IL.M)[3]-B[1])/2)|0))-2));this.Ei.H(A.abP(
this.Ei.M,this.FY.M[3]));this.Ei.H([].concat(this.Ei.M.slice(0,3),((B=this.M)[3]-
B[1])-AK1));this.IM.H(A.abO(this.IM.M,(this.Ei.M[3]-((((B=this.IM.M)[3]-B[1])/2)|
0))+2));this.Ey.H(A.abP(this.Ey.M,this.Ei.M[3]));this.Ey.H([].concat(this.Ey.M.slice(
0,3),(B=this.M)[3]-B[1]));},AJY:function(AoW){return A._GetAutoObject(A.Device.Converter
).Te(AoW,0,true);},AKv:function(){return A._GetAutoObject(A.acj.DU).AaE();},AnA:
function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([this,this.AiQ],this.JR
,0);this.JR=E;if(!!E)A.zX([this,this.AiQ],E,0);if(!!E)A.pe([this,this.AiQ],this);
},AiQ:function(G){this.Am();},_Init:function(aArg){C.DR._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ey={I:this},0);A.acg.AL._Init.call(this.Ei={I:this},0);A.
acg.AL._Init.call(this.FY={I:this},0);A.acg.AL._Init.call(this.IL={I:this},0);A.
acg.AL._Init.call(this.IM={I:this},0);this.__proto__=C.O9;this.Ey.A1(0xD);this.Ey.
H(Aaj);this.Ey.L(A.jb.Gk);this.Ei.A1(0xD);this.Ei.H(Tk);this.Ei.L(A.jb.Ib);this.
FY.A1(0xD);this.FY.H(Aai);this.FY.L(A.jb.E1);this.IL.A1(0xD);this.IL.H(Aal);this.
IL.AwD(A.jb.Ib);this.IL.AwE(A.jb.Ib);this.IL.AwG(A.jb.E1);this.IL.AwF(A.jb.E1);this.
IM.A1(0xD);this.IM.H(Xn);this.IM.AwD(A.jb.Gk);this.IM.AwE(A.jb.Gk);this.IM.AwG(A.
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
function(E){if(this.AO8===E)return;this.AO8=E;this.BpG(this);},BpG:function(G){var
B;if(!!this.EU)this.HR(this.EU);this.EU=(C.DR.isPrototypeOf(B=A._NewObject(this.
AO8,0))?B:null);if(!!this.EU){this.EU.H(A0a);this.EU.Ae2(this.EZ);this.J(this.EU
,0);}},Ae2:function(E){if(this.EZ===E)return;this.EZ=E;if(!!this.EU)this.EU.Ae2(
E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.
Sf={I:this},0);A.acg.Text._Init.call(this.Ip={I:this},0);A.acg.AL._Init.call(this.
Bc={I:this},0);this.__proto__=C.Aq5;this.H(AcT);this.As(false);this.Sf.H(AIO);this.
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
,P5:null,X5:null,X6:null,MG:0,CQ:function(){this.Am();},Bl:function(aSize){var B;
A.Core.P.Bl.call(this,aSize);this.Ri.H(A.abI(this.Ri.M,(((B=this.M)[3]-B[1])/2)|
0));this.P5.H(A.abI(this.P5.M,(((B=this.M)[3]-B[1])/2)|0));this.Ri.H(A.abO(this.
Ri.M,(((B=this.M)[3]-B[1])/2)|0));this.P5.H(A.abO(this.P5.M,(((B=this.M)[3]-B[1]
)/2)|0));},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.Ri.R(A._GetAutoObject(
A.Device.Helper).MO(A.aaR(A.acf.BkS),Pc,this.MG.toFixed()));},Acb:function(E){if(
this.MG===E)return;this.MG=E;this.BCk(this);},BCk:function(G){var B;var AJ5=(((B=
this.M)[2]-B[0])/this.MG)|0;this.X5.H(A.abM(this.X5.M,(((B=this.M)[2]-B[0])-(this.
MG*AJ5))+(((AJ5/2)-(((B=this.X5.M)[2]-B[0])/2))|0)));this.X6.H(A.abM(this.X6.M,(((
B=this.M)[2]-B[0])-AJ5)+(((AJ5/2)-(((B=this.X6.M)[2]-B[0])/2))|0)));this.Am();},
_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Text._Init.call(this.Ri={
I:this},0);A.acg.Text._Init.call(this.P5={I:this},0);A.acg.Text._Init.call(this.
X5={I:this},0);A.acg.Text._Init.call(this.X6={I:this},0);this.__proto__=C.AUF;this.
H(BD);this.Ri.H(AIP);this.Ri.Hp(5);this.Ri.A6(0x11);this.Ri.L(A.jb.Text);this.P5.
H(A0c);this.P5.Hp(5);this.P5.A6(0x14);this.P5.R(A.aaR(A.acf.AhT));this.P5.L(A.jb.
Text);this.X5.H(A0d);this.X5.R(AyO);this.X5.L(A.jb.Text);this.X6.H(A0e);this.X6.
R(AyO);this.X6.L(A.jb.Text);this.J(this.Ri,0);this.J(this.P5,0);this.J(this.X5,0
);this.J(this.X6,0);this.Ri.S(A.aaL(A.fl.Ak));this.P5.S(A.aaL(A.fl.Ak));this.X5.
S(A.aaL(A.fl.H6));this.X6.S(A.aaL(A.fl.H6));},_Done:function(){this.__proto__=A.
Core.P;this.Ri._Done();this.P5._Done();this.X5._Done();this.X6._Done();A.Core.P.
_Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.Ri._ReInit(
);this.P5._ReInit();this.X5._ReInit();this.X6._ReInit();this.P5.R(A.aaR(A.acf.AhT
));this.Ri.S(A.aaL(A.fl.Ak));this.P5.S(A.aaL(A.fl.Ak));this.CQ();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Ri)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.P5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.Ld={We:null,AjJ:null,KS:A.jV,MG:0,AaI:false,Init:function(aArg){var A2d=A._NewObject(
C.Kq,0);var O;for(O=0;O<3;O=O+1)if(A._GetAutoObject(A.Device.Helper).W.RU()<A2d.
C7(O))A2d.Anr=O+1;this.We.CL(A2d);},Ai:function(Ae){C.D9.Ai.call(this,Ae);this.AjJ.
Z(this.AaI);if(this.AaI)this.Bb(null);else this.Bb(this.We);},CD:function(G){var
B;var F;C.D9.CD.call(this,G);if(!(F=this.We.Q,F[1].call(F[0])))(F=this.We.Q,F[2].
call(F[0],this.We.AC.C7(0)));A.zX([this,this.AJd],[B=A._GetAutoObject(A.Device.Helper
),B.U_,B.Vb],0);A.zV([this,this.AJd],A._GetAutoObject(A.Device.Device).Bt,0);A.zX([
this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId],0);A.pe([this
,this.Amj],this);},E4:function(G){var B;A.z$([this,this.AJd],[B=A._GetAutoObject(
A.Device.Helper),B.U_,B.Vb],0);A.z9([this,this.AJd],A._GetAutoObject(A.Device.Device
).Bt,0);A.z$([this,this.Amj],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId
],0);C.D9.E4.call(this,G);},ZC:function(E){if(A.aa0(this.AR,E))return;C.D9.ZC.call(
this,E);this.We.AR=E;},Acb:function(E){if(this.MG===E)return;this.MG=E;A.pe([this
,this.Amj],this);},Bw4:function(Aq){this.Acb(Aq);},AiY:function(G){},AJd:function(
s){this.AiY(s);},Dl:function(E){if(this.KS===E)return;this.KS=E;this.AjJ.R(E);},
Amj:function(G){var Fx=A._NewObject(A.Device.Filter,0);var AzO=A._NewObject(A.Device.
UInt32FilterCriterion,0);AzO.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AhT()-((this.MG-1)*86400))-1,true);Fx.CX(AzO);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fx.CX(HZ);A._GetAutoObject(
A.Device.Device).Bt.Bk(Fx);},BlP:function(){return this.MG;},_Init:function(aArg
){C.D9._Init.call(this,aArg);C.AU6._Init.call(this.We={I:this},0);C.AkT._Init.call(
this.AjJ={I:this},0);this.__proto__=C.Ld;this.We.H(BD);this.AjJ.H(U6);this.J(this.
We,0);this.J(this.AjJ,0);this.We.Au([this,this.BlP,this.Bw4]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D9;this.We._Done();this.AjJ._Done();C.D9._Done.
call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.We._ReInit();this.AjJ.
_ReInit();},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.We)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ANT={Wl:null,YW:null,RatingMode:null,PM:null,_Init:
function(aArg){C.Cg._Init.call(this,aArg);C.Np._Init.call(this.Wl={I:this},0);C.
BX._Init.call(this.YW={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.Iv._Init.call(this.PM={I:this},0);this.__proto__=C.ANT;var B;this.Hl.R(A.
aaR(A.acf.ACK));this.Jf(A.aaR(A.acf.A6j));this.Wl.H(Atp);this.Wl.Aj(true);this.Wl.
T(A.aaR(A.acf.As2));this.Wl.Bi(true);this.Wl.Ns(23);this.YW.H(A0f);this.YW.Aj(true
);this.YW.T(A.aaR(A.acf.A$C));this.YW.Bi(false);this.PM.H(A0g);this.PM.Aj(true);
this.PM.T(A.aaR(A.acf.A6g));this.PM.Bi(true);this.PM.Gb(3);this.PM.EV(14);this.PM.
IW(A.aaR(A.acf.Kq)+Atq);this.PM.Jg(A.aaR(A.acf.GL)+Atq);this.J(this.Wl,0);this.J(
this.YW,0);this.J(this.PM,0);this.Wl.AR=[B=this.Wl,B.Nv];this.YW.Au([B=this.RatingMode
,B.B$,B.Cc]);this.YW.CL(this.RatingMode);this.PM.Au([B=A._GetAutoObject(A.Device.
Device),B.A8_,B.BbL]);},_Done:function(){this.__proto__=C.Cg;this.Wl._Done();this.
YW._Done();this.RatingMode._Done();this.PM._Done();C.Cg._Done.call(this);},_ReInit:
function(){C.Cg._ReInit.call(this);this.Wl._ReInit();this.YW._ReInit();this.RatingMode.
_ReInit();this.PM._ReInit();this.Hl.R(A.aaR(A.acf.ACK));this.Jf(A.aaR(A.acf.A6j)
);this.Wl.T(A.aaR(A.acf.As2));this.YW.T(A.aaR(A.acf.A$C));this.PM.T(A.aaR(A.acf.
A6g));this.PM.IW(A.aaR(A.acf.Kq)+Atq);this.PM.Jg(A.aaR(A.acf.GL)+Atq);},_Mark:function(
D){var B;C.Cg._Mark.call(this,D);if((B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Avd={Init:function(aArg){this.V.Text.A6(0x11);this.V.Text.Hp(10);},Ai:function(
Ae){var B;C.Cp.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20
);var GE=this.Bo.Bw;var FT=A.jb.Aed;var GZ=A.jb.Bm;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.
Text;}if(!Hg){this.Background.L(FT);this.V.L(A.jb.CK);}else if(GE){this.Background.
L(A.jb.AV);this.V.L(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.AV);this.V.L(A.
jb.Bm);}else{this.Background.L(FT);this.V.L(GZ);}this.LN=Hg;this.KM=Fv;this.Qy=GE;
},_Init:function(aArg){C.Cp._Init.call(this,aArg);this.__proto__=C.Avd;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cp._ReInit.call(this);this.
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
this.BU.L(A.jb.Text);this.J(this.BU,0);this.BU.S(A.aaL(A.fl.Af));this.BU.AY(A.aaL(
A.fl.Ak));this.BU.Cm(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.JQ;this.
BU._Done();C.JQ._Done.call(this);},_ReInit:function(){C.JQ._ReInit.call(this);this.
BU._ReInit();this.BU.S(A.aaL(A.fl.Af));this.BU.AY(A.aaL(A.fl.Ak));this.BU.Cm(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.JQ._Mark.call(this,D);if((B=this.BU)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AOR={WM:function(G){var B;this.Agz();this.AuN(A.aaR(A.acf.Bj1),[this,this.BoC],[
B=A._GetAutoObject(A.Device.Device),B.A8$,B.BbM]);A._GetAutoObject(C.BS).Fz();this.
I8(A.aaR(A.acf.AVH),[this,this.AT6],5);this.I8(A.aaR(A.acf.AVF),[this,this.AT5],
7);this.I8(A.aaR(A.acf.An5),[this,this.Aw2],2);this.I8(A.aaR(A.acf.AdX),[this,this.
AFa],1);this.I8(A.aaR(A.acf.AuL),[this,this.AE6],0);A._GetAutoObject(C.BS).Fz();
A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Dw(6);},DF:function(G){},AbB:function(){return C.ACm;},AbC:function(
){return C.ADF;},Ra:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A7e());},HS:function(G){var F;C.GJ.HS.call(this,G);if(this.Aki(
)===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajs((F=this.Fm,F[1].call(
F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false
);},Agl:function(){A._GetAutoObject(C.A7).Cb(44);},BoC:function(G){A._GetAutoObject(
A.Device.Device).AwS(!A._GetAutoObject(A.Device.Device).Aq0);this.Aob(this);},Aob:
function(G){var Bf=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Aw=Bf.DM(
30,3);if(!!Aw)Bf.Nw(Aw);if(A._GetAutoObject(A.Device.Device).Aq0){var AAt=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A27=A._GetAutoObject(A.Device.Helper).Dv()-
21600;AAt.Initialize(30,3,A27,true);Bf.CX(AAt);}A._GetAutoObject(A.Device.Device
).An.Bk(Bf);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOR;
var B;this.Dr(C.APp);this.Dl(A.aaR(A.acf.A8y));this.AwX([B=A._GetAutoObject(A.Device.
Device),B.A89,B.BbK]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.A8y));},_className:"Application::FreshCowListScreen"};C.AOQ={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AOQ;this.Lh.As(false);this.Lh.
Aj(false);this.Lh.Z(false);this.Jw.As(false);this.Jw.Aj(false);this.Jw.Z(false);
},_className:"Application::FreshCowListFilterScreen"};C.APp={DX:function(G){C.Kv.
DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(7));},_Init:
function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APp;},_className:"Application::HeaderFreshCowListFilter"
};C.ADF={JC:null,D0:null,_Init:function(aArg){C.De._Init.call(this,aArg);C.CG._Init.
call(this.JC={I:this},0);C.CG._Init.call(this.D0={I:this},0);this.__proto__=C.ADF;
this.A_q(1);this.JC.H(A0h);this.JC.R((A.aaR(A.acf.Calving)+AcV)+A.aaR(A.acf.Bae)
);this.JC.L(A.jb.Text);this.D0.H(A0i);this.D0.R(A.aaR(A.acf.AEn));this.D0.L(A.jb.
Text);this.J(this.JC,0);this.J(this.D0,0);this.JC.S(A.aaL(A.fl.Ak));this.JC.AY(A.
aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.AY(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.De;this.JC._Done();this.D0._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.JC._ReInit();this.D0._ReInit();this.JC.R((
A.aaR(A.acf.Calving)+AcV)+A.aaR(A.acf.Bae));this.D0.R(A.aaR(A.acf.AEn));this.JC.
S(A.aaL(A.fl.Ak));this.JC.AY(A.aaL(A.fl.Bh));this.D0.S(A.aaL(A.fl.Ak));this.D0.AY(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.JC).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.D0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.ACm={AHa:null,KV:null,UN:null,AP:null,A$:null
,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.UN.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A$.H([this.UN.M[2]-1,0,this.UN.M[2]+1,aSize[
1]]);this.KV.H([this.UN.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KV.L(this.V.AQ);this.UN.Dg(this.V.AQ);},Ch:function(Ad){if(!this.AX
)return;this.Ht=Ad;if(!!this.AX){var IE=this.AX.CC(Ad,0);var Mn=this.AX.CC(Ad,1);
var A26=this.AX.CC(Ad,29);var AlG=this.AX.Hw(Ad,28);this.T(Mn.toFixed());this.KV.
R(A26.toFixed());this.UN.Acb(A._GetAutoObject(A.Device.Device).AqZ+1);this.UN.Boe(
AlG);this.UN.R(A._GetAutoObject(A.acj.KR).AjN(AlG));A._GetAutoObject(A.Device.Device
).SX(Ad);this.Ap$(IE);this.AxA();A._GetAutoObject(A.Device.Device).Bt.Bk(null);this.
Am();}},A42:function(G){this.UN.Acd(this.AHa);},AxA:function(){var Gi=A._GetAutoObject(
A.Device.Device).Bt.B8();this.AHa=A._NewObject(C.Ajw,0);if(Gi>0){var O=Gi-1;while(
O>=0){var D8=A._GetAutoObject(A.Device.Device).Bt.Hw(O,6);this.AtF(this.AHa,O,9,
D8);O=O-1;}}A.pe([this,this.A42],this);},AtF:function(A1A,Ad,A1z,Ql){var AlA=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ad,A1z);if(!!AlA)A1A.OA(AlA,Ql);},Ap$:function(Ac_){var Fx=
A._NewObject(A.Device.Filter,0);var AzO=A._NewObject(A.Device.UInt32FilterCriterion
,0);AzO.Initialize(6,2,A._GetAutoObject(A.Device.Helper).ZY(A._GetAutoObject(A.Device.
Device).AqZ)-1,true);Fx.CX(AzO);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,Ac_,true);Fx.CX(HZ);A._GetAutoObject(A.Device.Device).Bt.Bk(
Fx);},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.Text._Init.call(this.
KV={I:this},0);C.AUA._Init.call(this.UN={I:this},0);A.acg.AL._Init.call(this.AP={
I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);this.__proto__=C.ACm;this.AP.
L(A.jb.Bc);this.A$.L(A.jb.Bc);this.J(this.KV,0);this.J(this.UN,0);this.J(this.AP
,0);this.J(this.A$,0);this.KV.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.KV._Done();this.UN._Done();this.AP._Done();this.A$._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.KV._ReInit(
);this.UN._ReInit();this.AP._ReInit();this.A$._ReInit();this.KV.S(A.aaL(A.fl.Af)
);},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AHa)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AUA={AVj:0,Init:function(aArg){},AOY:function(){return A._GetAutoObject(A.Device.
Helper).Aqx(this.AVj);},AO0:function(){return this.AOY()+(this.MG*86400);},Boe:function(
E){if(this.AVj===E)return;this.AVj=E;A.pe([this,this.WV],this);},_Init:function(
aArg){C.AhC._Init.call(this,aArg);this.__proto__=C.AUA;this.Bc.H(A0j);this.Bob(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Du:function(){if(this.K&&this.K.Du)return this.K.
Du.apply(this,arguments);else return C.FactoryResetScope.Bu3.apply(this,arguments
);},Bu3:function(){return 3;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=3))return A.
jV;return this.FactoryResetScopeToString.BT(this.C7(aIndex));},_Init:function(aArg
){C.Cn._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.BI.
Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);var J_=this._variants();if(J_){this.K={
};J_._Init.call(this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);
this.__proto__=C.Cn;this.FactoryResetScopeToString._Done();C.Cn._Done.call(this);
},_ReInit:function(){C.Cn._ReInit.call(this);this.FactoryResetScopeToString._ReInit(
);if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Cn._Mark.call(
this,D);if((B=this.FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.
K)this.K._Mark(D);},_variants:function(){return A.acq.FactoryResetScope._variants(
);},K:null,_className:"Application::FactoryResetScope"};C.SetSaveTransponderScreen={
Bhe:false,Init:function(aArg){this.Bhe=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;
},Ew:function(G){if(this.Bek){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);if(this.Bhe)A._GetAutoObject(A.Device.Device).AZ(106,true,A.
_GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(
A.Device.Device).AZ(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),0,null);}C.SetTransponderScreen.Ew.call(this,G);},_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);
},_className:"Application::SetSaveTransponderScreen"};C.ASy={WM:function(G){this.
Agz();A._GetAutoObject(C.BS).TH(A.aaR(A.acf.Settings),[this,this.A37]);A._GetAutoObject(
C.BS).Fz();this.AMl();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.LinkTransponder));A.
_GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.ARN)+A.aaR(A.acf.
Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DF:function(G){},AbB:function(
){return C.AqC;},AbC:function(){return C.Aq9;},Ra:function(G){A._GetAutoObject(A.
Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADh());},HS:function(G){C.
Mo.HS.call(this,G);if(this.Aki()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajs(A._GetAutoObject(A.Device.Converter).AMg(this.L3.ADj())));this.N.Ce=[this,
this.Aaq];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false);},Agl:function(){A.
_GetAutoObject(C.A7).Cb(47);},A37:function(G){A._GetAutoObject(A.Device.Device).
Dw(0);A._GetAutoObject(C.A7).Cb(89);},_Init:function(aArg){C.Mo._Init.call(this,
aArg);this.__proto__=C.ASy;this.Dr(C.ADz);this.Dl(A.aaR(A.acf.A8u));this.ATC(A._GetAutoObject(
C.Awb));},_ReInit:function(){C.Mo._ReInit.call(this);this.Dl(A.aaR(A.acf.A8u));}
,_className:"Application::NoTransponderListScreen"};C.ASx={_Init:function(aArg){
C.I_._Init.call(this,aArg);this.__proto__=C.ASx;this.K0.As(false);this.K0.Aj(false
);this.K0.Z(false);},_className:"Application::NoTransponderListFilterScreen"};C.
ADz={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad2(8));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.ADz;
},_className:"Application::HeaderNoTransponderListFilter"};C.AB6={Au1:null,Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.Au1.BT(aIndex);},_Init:
function(aArg){C.Ge._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.Au1={I:this},0);this.__proto__=C.AB6;},_Done:function(){this.__proto__=
C.Ge;this.Au1._Done();C.Ge._Done.call(this);},_ReInit:function(){C.Ge._ReInit.call(
this);this.Au1._ReInit();},_Mark:function(D){var B;C.Ge._Mark.call(this,D);if((B=
this.Au1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AMf={Cp:null,Ad5:null,Init:function(aArg){this.Bb(this.Cp);},Lr:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.AaQ];this.BQ.Ce=null;
this.BQ.Ca=[this,this.A3I];this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.
ach.AeD));}return this.BQ;},AAJ:function(G){var Aa=(C.Ajl.isPrototypeOf(G)?G:null
);if(Aa===this.Cp)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Ad5)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(AIQ);},_Init:function(aArg){C.Fr._Init.call(this,aArg);C.Ajl._Init.call(this.
Cp={I:this},0);C.Ajl._Init.call(this.Ad5={I:this},0);this.__proto__=C.AMf;this.H(
Rr);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.H(I1);this.Cp.T(A.aaR(A.acf.
AEx));this.Ad5.H(Qf);this.Ad5.T(A.aaR(A.acf.TG));this.J(this.Cp,0);this.J(this.Ad5
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cp.AR=[this,this.AAJ];this.Ad5.AR=[this,this.
AAJ];this.Init(aArg);},_Done:function(){this.__proto__=C.Fr;this.Cp._Done();this.
Ad5._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.
Cp._ReInit();this.Ad5._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cp.
T(A.aaR(A.acf.AEx));this.Ad5.T(A.aaR(A.acf.TG));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BGj={Undefined:0,BGh:1,BGi:2,IdScanned:3,BFd:4,BEj:5,BEZ:6};C.AMt={A$Y:function(
){A._GetAutoObject(A.Device.Device).AZ(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BfR]);},_Init:function(aArg){C.AuS._Init.call(
this,aArg);this.__proto__=C.AMt;this.Ge.Au(1);this.ATI(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aex={V7:null,V8:null,V9:null,Ag5:null,Ag6:null,Ag7:null,CF:null,Ce:null,Ca:null
,An6:A.jV,An7:A.jV,An8:A.jV,Arf:0,Arg:0,Arh:0,Ahn:0,ZK:false,WW:false,Asw:false,
AsL:false,AsK:false,AjC:function(Ff){this.CF=Ff.CF;this.Ce=Ff.Ce;this.Ca=Ff.Ca;this.
An6=Ff.An6;this.An7=Ff.An7;this.An8=Ff.An8;this.Ahn=Ff.Ahn;this.V7=Ff.V7;this.V8=
Ff.V8;this.V9=Ff.V9;this.Ag5=Ff.Ag5;this.Ag6=Ff.Ag6;this.Ag7=Ff.Ag7;this.AsK=Ff.
AsK;this.AsL=Ff.AsL;this.Asw=Ff.Asw;this.WW=Ff.WW;this.ZK=Ff.ZK;this.Arf=Ff.Arf;
this.Arg=Ff.Arg;this.Arh=Ff.Arh;},AkS:function(Ff){Ff.CF=this.CF;Ff.Ce=this.Ce;Ff.
Ca=this.Ca;Ff.Hz(this.An6);Ff.E6(this.An7);Ff.CS(this.An8);Ff.AFB(this.Ahn);Ff.AFs(
this.V7);Ff.ArX(this.V8);Ff.AnE(this.V9);Ff.C3(this.Ag5);Ff.Ct(this.Ag6);Ff.C4(this.
Ag7);Ff.OW(this.AsK);Ff.OX(this.AsL);Ff.Asw=this.Asw;Ff.WW=this.WW;Ff.ZK=this.ZK;
Ff.Bnk(this.Arf);Ff.ATw(this.Arg);Ff.A_C(this.Arh);},_Init:function(aArg){this.__proto__=
C.Aex;this.V7=A.aaL(A.fl.Ak);this.V8=A.aaL(A.fl.Ak);this.V9=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.V7=A.aaL(
A.fl.Ak);this.V8=A.aaL(A.fl.Ak);this.V9=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.V7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.V8)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.V9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ag5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ag7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CF)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ce)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ca)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.AsH._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.ADx);},_className:"Application::NewAnimalSetTransponderScreen"};C.C9={Abm:null
,CountryToString:null,Du:function(){return 40;},C7:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.LA(aIndex);},DZ:function(A8){return A8;
},H8:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
Abm)(F=this.Abm,F[2].call(F[0],E));},A18:function(G){var F;if(!!this.Abm)this.Q=(
F=this.Abm,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$,this.Cc],0);},AFl:
function(E){if(A.aaZ(this.Abm,E))return;if(!!this.Abm)A.z$([this,this.A18],this.
Abm,0);this.Abm=E;if(!!this.Abm)A.zX([this,this.A18],this.Abm,0);A.pe([this,this.
A18],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C9;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abm)&&((B=B[0])._cycle!=D))B._Mark(B.
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
if(!AlG)this.A10=Xp;else this.A10=A._GetAutoObject(A.acj.KR).AjN(AlG);this.Am();
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
,_className:"Application::Breed"};C.AR7={Wh:null,YU:null,AeQ:null,Init:function(
aArg){this.Bb(this.Wh);},Adx:function(G){var Aa=(C.Cp.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.YU)this.ByO();else if(Aa===this.Wh)this.BBA(this);else throw new
Error(Ayr);A._GetAutoObject(A.Device.Device).Dw(0);},BBA:function(G){var B;var F;
var Vv=(C.Amz.isPrototypeOf(B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null
);if(!Vv){A.ab5("%s",A0k);return;}Vv.AKR(this);},ByO:function(){A._GetAutoObject(
A.Device.Helper).W.AGU(true);A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(
A.Device.Device).An);A._GetAutoObject(A.Device.Device).AZ(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.My._Init.call(this.Wh={I:this},0);C.My._Init.call(this.YU={
I:this},0);C.V1._Init.call(this.AeQ={I:this},0);this.__proto__=C.AR7;var B;this.
H(AcT);this.Wh.H(Qf);this.Wh.As(true);this.Wh.T(A.aaR(A.acf.A$E));this.Wh.Bi(true
);this.YU.H(I1);this.YU.As(true);this.YU.T(A.aaR(A.acf.A5q));this.YU.Bi(true);this.
AeQ.H(BD);this.AeQ.T(A.aaR(A.acf.AC7));this.AeQ.Bi(true);this.J(this.Wh,0);this.
J(this.YU,0);this.J(this.AeQ,0);this.Wh.AR=[this,this.Adx];this.YU.AR=[this,this.
Adx];this.AeQ.ATj([B=A._GetAutoObject(A.Device.Device),B.ArF,B.Att]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.Wh._Done();this.YU._Done(
);this.AeQ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Wh._ReInit();this.YU._ReInit();this.AeQ._ReInit();this.Wh.
T(A.aaR(A.acf.A$E));this.YU.T(A.aaR(A.acf.A5q));this.AeQ.T(A.aaR(A.acf.AC7));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Wh)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeQ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.V1={
Ai:function(Ae){C.Uj.Ai.call(this,Ae);var FT=A.jb.CK;var GZ=A.jb.Text;if(this.Hn
){FT=A.jb.Text;GZ=A.jb.Bm;}if(!this.LN){this.Background.L(FT);this.V.L(A.jb.Am8);
}else if(this.Qy){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else if(this.KM){
this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{this.Background.L(FT);this.V.
L(GZ);}if(this.AmH){this.Mv.Cw(1);this.Mv.L(A.jb.Ib);}else{this.Mv.Cw(0);this.Mv.
L(A.jb.Bm);}},_Init:function(aArg){C.Uj._Init.call(this,aArg);this.__proto__=C.V1;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.Av6={C_:null,A3:null,AF:
null,Akj:null,Q0:null,EM:null,ASn:LB,Bl:function(aSize){C.Cp.Bl.call(this,aSize);
var FT=A.jb.CK;var GZ=A.jb.Text;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.Text;}this.Background.
L(FT);this.V.L(GZ);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,Cu;C.Cp.Ai.call(this
,Ae);this.Akj.L(this.V.AQ);this.Q0.L(this.V.AQ);this.Q0.R(A0l);this.T(((this.ASn+
A.aaR(A.acf.Colon))+CR)+A._GetAutoObject(A.Device.Helper).Ak8(840003123456789).toFixed(
));if(!!this.A3&&!!this.AF){var A2$=this.Q0.Afj([(this.Q0.String.length-(F=this.
AF,F[1].call(F[0])))-(Cu=this.A3,Cu[1].call(Cu[0])),0]);var A4u=this.Q0.Afj([this.
Q0.String.length-(F=this.AF,F[1].call(F[0])),0]);var ABw=this.Q0.Dd();this.EM.H([
A2$[0]-1,ABw[1],A4u[0]+1,ABw[3]]);}else this.EM.H(this.Q0.Dd());},DC:function(E){
if(this.C_===E)return;this.C_=E;this.Akj.Ax(E);},OU:function(E){if(A.aaZ(this.A3
,E))return;if(!!this.A3)A.z$([this,this.AaP],this.A3,0);this.A3=E;if(!!E)A.zX([this
,this.AaP],E,0);if(!!E)A.pe([this,this.AaP],this);},PY:function(E){if(A.aaZ(this.
AF,E))return;if(!!this.AF)A.z$([this,this.AaR],this.AF,0);this.AF=E;if(!!E)A.zX([
this,this.AaR],E,0);if(!!E)A.pe([this,this.AaR],this);},AaR:function(G){this.Am(
);},AaP:function(G){this.Am();},Ar9:function(E){if(this.ASn===E)return;this.ASn=
E;this.Am();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.acg.Ap._Init.call(
this.Akj={I:this},0);A.acg.Text._Init.call(this.Q0={I:this},0);A.acg.BW._Init.call(
this.EM={I:this},0);this.__proto__=C.Av6;this.H(K3);this.V.A6(0x11);this.Akj.H(Pa
);this.Q0.H(A0m);this.EM.H(A0n);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.Akj
,0);this.J(this.Q0,0);this.J(this.EM,0);this.Q0.S(A.aaL(A.fl.Af));},_Done:function(
){this.__proto__=C.Cp;this.Akj._Done();this.Q0._Done();this.EM._Done();C.Cp._Done.
call(this);},_ReInit:function(){C.Cp._ReInit.call(this);this.Akj._ReInit();this.
Q0._ReInit();this.EM._ReInit();this.Q0.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.Cp._Mark.call(this,D);if((B=this.C_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AF)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Akj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Q0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={AUv:0,Init:
function(aArg){var B;A.zX([this,this.Bfa],[B=A._GetAutoObject(A.Device.Device),B.
AEP,B.AI0],0);A.pe([this,this.Bfa],this);},HS:function(G){C.TK.HS.call(this,G);if(
this.AjR)this.N.Ct(A.aaL(A.ach.AD));else this.N.Ct(A.aaL(A.ach.ANu));this.N.C4(A.
aaL(A.ach.Options));this.N.E6(A.jV);this.N.CS(A.jV);this.N.Ce=[this,this.A$m];this.
N.Ca=[this,this.WM];this.N.ArX(A.aaL(A.fl.Ak));this.N.AnE(A.aaL(A.fl.Ak));},M6:function(
G){this.Bfw(this);},Ov:function(G){this.BBt(this);},AdU:function(Aih,Aii,BxS){A.
_GetAutoObject(C.BS).ABX(Aih,Aii,[this,this.A9u,this.ATM],BxS);},WM:function(G){
if((A._GetAutoObject(A.Device.Device).D9===3)&&!this.AjR){A._GetAutoObject(C.BS).
TH(A.aaR(A.acf.BiE),[this,this.Boy]);A._GetAutoObject(C.BS).Fz();}this.AdU(A.aaR(
A.acf.Rating),[this,this.AUa],3);this.AdU(A.aaR(A.acf.Afz),[this,this.AUc],2);this.
AdU(A.aaR(A.acf.Temperature),[this,this.AUb],1);this.AdU(A.aaR(A.acf.AdX),[this,
this.Bov],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.BiI
));A._GetAutoObject(A.Device.Device).Dw(6);},ATM:function(E){if(this.AUv===E)return;
this.AUv=E;A.abo([this,this.A9u,this.ATM],0);},Bfa:function(G){this.ATM(A._GetAutoObject(
A.Device.Device).D9);},A9u:function(){return this.AUv;},_Init:function(aArg){C.TK.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;this.Init(aArg);},
_className:"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={VI:null
,Init:function(aArg){var B;A.zX([this,this.AaO],[B=A._GetAutoObject(A.Device.Device
).An,B.Fo,B.Fs],0);A.pe([this,this.Bhk],this);A.pe([this,this.Ra],this);},CD:function(
G){C.TK.CD.call(this,G);A.pe([this,this.Bhp],this);},AG0:function(G){C.TK.AG0.call(
this,G);if(!!this.Lj)this.AhF(this.Lj,this.VI);},HS:function(G){C.TK.HS.call(this
,G);this.N.Ct(A.aaL(A.ach.ARi));this.N.C4(A.aaL(A.ach.ARj));if(this.AjR)this.N.ATw(
0);else this.N.ATw(1);this.N.A_C(A._GetAutoObject(A.Device.Converter).BhO(A._GetAutoObject(
A.Device.Device).D9));this.N.E6(A.jV);this.N.CS(A.jV);this.N.Ce=[this,this.Bml];
this.N.Ca=[this,this.BoA];this.N.ArX(A.aaL(A.fl.Ak));this.N.AnE(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).An.QM()){this.N.IS.CZ(100);this.N.Ce=null;
}else this.N.IS.CZ(255);if(!A._GetAutoObject(A.Device.Device).An.B8()){this.N.Li.
CZ(100);this.N.Ca=null;}else this.N.Li.CZ(255);if(A._GetAutoObject(A.Device.Device
).An.B8()<=1){this.N.T8.CZ(100);this.N.T9.CZ(100);}else{this.N.T8.CZ(255);this.N.
T9.CZ(255);}},M6:function(G){if(A._GetAutoObject(A.Device.Device).An.B8()<=1)return;
var LJ=A._GetAutoObject(A.Device.Helper).W.CI;LJ=LJ+1;if(LJ>=A._GetAutoObject(A.
Device.Device).An.B8())LJ=0;A._GetAutoObject(A.Device.Helper).GS(LJ);},Ov:function(
G){if(A._GetAutoObject(A.Device.Device).An.B8()<=1)return;var LJ=A._GetAutoObject(
A.Device.Helper).W.CI;LJ=LJ-1;if(LJ<0)LJ=A._GetAutoObject(A.Device.Device).An.B8(
)-1;A._GetAutoObject(A.Device.Helper).GS(LJ);},Agc:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>=0)A._GetAutoObject(C.A7).Cb(94);},Bml:function(G){A._GetAutoObject(
A.Device.Device).Dw(10);},BoA:function(G){this.Bfw(this);},Ra:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).MC());A.pe([this,this.Bhp
],this);},Bhk:function(G){if(!A._GetAutoObject(A.Device.Device).An.B8()){this.VI.
Z(true);if(!A._GetAutoObject(A.Device.Device).An.QM()||!A._GetAutoObject(A.Device.
Device).An.Filter)this.VI.R(A.aaR(A.acf.AEF));else if(!A._GetAutoObject(A.Device.
Device).An.Filter.DM(1,4)){if(A._GetAutoObject(A.Device.Helper).ADi(A._GetAutoObject(
A.Device.Device).An.Filter)===1)this.VI.R(A.aaR(A.acf.AOj));else this.VI.R(A.aaR(
A.acf.AOi));}else this.VI.R(A.aaR(A.acf.ASu));}else this.VI.Z(false);},Bhp:function(
G){var BCr=A._GetAutoObject(A.Device.Helper).W.Id;var A4x=A._GetAutoObject(A.Device.
Device).An.LZ(0,BCr);if(!A._GetAutoObject(A.Device.Device).An.B8())A._GetAutoObject(
A.Device.Helper).GS(-1);else if(A4x<0)A._GetAutoObject(A.Device.Helper).GS(0);},
AaO:function(G){this.Bhk(this);this.HS(this);},_Init:function(aArg){C.TK._Init.call(
this,aArg);C.AkT._Init.call(this.VI={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.API);this.VI.H(Fe);this.J(this.VI,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.TK;this.VI._Done();C.TK._Done.call(this);},_ReInit:function(){
C.TK._ReInit.call(this);this.VI._ReInit();},_Mark:function(D){var B;C.TK._Mark.call(
this,D);if((B=this.VI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AMI={QU:null,Wi:null,AbP:null,YX:null,Init:function(aArg){var B;var F;this.Bb(
this.QU);if(!!A._GetAutoObject(C.A7).Q){var Vv=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null);if(!Vv){A.ab5("%s",AyR);
return;}else{if(Vv.AjR)this.QU.T(A.aaR(A.acf.Bg));else this.QU.T(A.aaR(A.acf.EU)
);var AzK=A._GetAutoObject(A.Device.Device).An.Filter;if(!AzK||A._GetAutoObject(
A.Device.Helper).Arn(AzK))this.YX.As(false);else if(!A._GetAutoObject(A.Device.Device
).An.B8()){this.Wi.As(false);this.QU.As(false);}}}},Adx:function(G){var Aa=(C.Cp.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Dw(0);if(
Aa===this.AbP)A._GetAutoObject(C.A7).Cb(9);else if(Aa===this.Wi)A._GetAutoObject(
A.Device.Device).Dw(7);else if(Aa===this.QU)this.BCW();else if(Aa===this.YX)this.
A16();else throw new Error(Ayr);},BCW:function(){var B;var F;var Vv=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null);if(!Vv){A.
ab5("%s",AyR);return;}Vv.A$m(this);},A16:function(){var B;var F;var Vv=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.A7).Q,F[1].call(F[0])))?B:null);if(!Vv){A.
ab5("%s",AyR);return;}Vv.Ra(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.My._Init.call(this.QU={I:this},0);C.My._Init.call(this.Wi={I:this},
0);C.My._Init.call(this.AbP={I:this},0);C.My._Init.call(this.YX={I:this},0);this.
__proto__=C.AMI;this.H(AfI);this.QU.H(Aan);this.QU.As(true);this.QU.T(A.aaR(A.acf.
EU));this.QU.Bi(true);this.Wi.H(Qf);this.Wi.As(true);this.Wi.T(A.aaR(A.acf.AUW));
this.Wi.Bi(true);this.AbP.H(I1);this.AbP.T(A.aaR(A.acf.AkV));this.AbP.Bi(true);this.
YX.H(BD);this.YX.T(A.aaR(A.acf.ACs));this.YX.Bi(true);this.J(this.QU,0);this.J(this.
Wi,0);this.J(this.AbP,0);this.J(this.YX,0);this.QU.AR=[this,this.Adx];this.Wi.AR=[
this,this.Adx];this.AbP.AR=[this,this.Adx];this.YX.AR=[this,this.Adx];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.QU._Done();this.Wi._Done(
);this.AbP._Done();this.YX._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.QU._ReInit();this.Wi._ReInit();this.AbP.
_ReInit();this.YX._ReInit();this.QU.T(A.aaR(A.acf.EU));this.Wi.T(A.aaR(A.acf.AUW
));this.AbP.T(A.aaR(A.acf.AkV));this.YX.T(A.aaR(A.acf.ACs));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.Jc={T_:null,EA:null,Yv:null,Background:null,Ap:null,It:null,Is:null,M$:0,AM:
0,Ai:function(Ae){var B;var F;A.Core.P.Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10
);var IG=((Ae&0x40)===0x40);if(IG){this.Background.L(A.jb.AV);this.Ap.L(A.jb.Bm);
this.CZ(256);}else if(Hg){this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.CZ(
256);}else{this.Background.L(this.M$);this.Ap.L(A.jb.Text);this.CZ(128);}if(!this.
AM)this.Ap.Cw(0);else if(this.AM>0){if(A.aaZ(this.T_,[B=A._GetAutoObject(A.Device.
Device),B.Awq,B.Ay3]))this.Ap.Cw(2);else if(A.aaZ(this.T_,[B=A._GetAutoObject(A.
Device.Device),B.Awp,B.Ay2]))this.Ap.Cw(3);else if(!!this.Yv&&((F=this.Yv,F[1].call(
F[0]))===1))this.Ap.Cw(1);else this.Ap.Cw(0);}else if(A.aaZ(this.T_,[B=A._GetAutoObject(
A.Device.Device),B.Awq,B.Ay3]))this.Ap.Cw(6);else if(A.aaZ(this.T_,[B=A._GetAutoObject(
A.Device.Device),B.Awp,B.Ay2]))this.Ap.Cw(7);else if(!!this.Yv&&((F=this.Yv,F[1].
call(F[0]))===1))this.Ap.Cw(5);else this.Ap.Cw(4);},Agh:function(G){this.Ki(this
);},Agg:function(G){this.Kd(this);},Ki:function(G){this.Bx(1);},Kd:function(G){this.
Bx(-1);},Bnu:function(E){if(A.aaZ(this.T_,E))return;if(!!this.T_)A.z$([this,this.
A3O],this.T_,0);this.T_=E;if(!!E)A.zX([this,this.A3O],this.T_,0);A.pe([this,this.
A3O],this);},Ux:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.
Agf],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Agf],this.EA,0);if(!!E)A.pe([this
,this.Agf],this);},A3O:function(G){var F;if(!!this.T_)this.Bx((F=this.T_,F[1].call(
F[0])));},Agf:function(G){A.pe([this,this.BC9],this);},CV:function(E){if(this.M$===
E)return;this.M$=E;this.Am();},Bx:function(E){var F;if(this.AM===E)return;this.AM=
E;if(!!this.T_)(F=this.T_,F[2].call(F[0],E));this.Am();A.abo([this,this.Ur,this.
Bx],0);},A_s:function(E){if(A.aaZ(this.Yv,E))return;if(!!this.Yv)A.z$([this,this.
Agf],this.Yv,0);this.Yv=E;if(!!E)A.zX([this,this.Agf],this.Yv,0);if(!!E)A.pe([this
,this.Agf],this);},BC9:function(G){var F,Cu;if(!this.Yv||!this.EA)return;this.Bnu(
A._GetAutoObject(A.Device.Helper).BdZ((F=this.Yv,F[1].call(F[0])),(Cu=this.EA,Cu[
1].call(Cu[0]))));this.Am();},Ur:function(){return this.AM;},_Init:function(aArg
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
this.T_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Is).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AMe={WM:function(G){var B;var F;this.Agz();if(!!A._GetAutoObject(A.Device.Helper
).AOW((F=this.Fm,F[1].call(F[0])),0,true))this.AuN(A.aaR(A.acf.A7v),[this,this.BoB
],[B=A._GetAutoObject(A.Device.Device),B.A8M,B.Bbt]);else A._GetAutoObject(C.BS).
Aa4(A.aaR(A.acf.A7v));A._GetAutoObject(C.BS).Fz();this.I8(A.aaR(A.acf.LinkTransponder
),[this,this.BnL],8);this.I8(A.aaR(A.acf.TG),[this,this.Akv],9);this.I8(A.aaR(A.
acf.Baz),[this,this.Bon],10);this.I8(A.aaR(A.acf.AGx),[this,this.ATR],3);this.I8(
A.aaR(A.acf.An5),[this,this.Aw2],2);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},DF:function(G){},AbB:function(){return C.AqC;},AbC:function(){return C.Aq9;
},Ra:function(G){var F;A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(
A.Device.Helper).A67((F=this.Fm,F[1].call(F[0]))));},HS:function(G){var F;C.GJ.HS.
call(this,G);if(this.Aki()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter
).Ajs((F=this.Fm,F[1].call(F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.
N.OW(false);this.N.OX(false);},Agl:function(){A._GetAutoObject(C.A7).Cb(52);},A3T:
function(G){C.GJ.A3T.call(this,G);A.pe([this,this.A0Z],this);},BoB:function(G){A.
_GetAutoObject(A.Device.Device).Aww(!A._GetAutoObject(A.Device.Device).Aqk);this.
Aob(this);},Aob:function(G){var F;var Bf=A._GetAutoObject(A.Device.Device).An.Filter.
E$();A._GetAutoObject(A.Device.Helper).Bo9(Bf);if(A._GetAutoObject(A.Device.Device
).Aqk){var A2N=A._GetAutoObject(A.Device.Helper).AOW((F=this.Fm,F[1].call(F[0]))
,21600,true);Bf.CX(A2N);}A._GetAutoObject(A.Device.Device).An.Bk(Bf);},_Init:function(
aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AMe;var B;this.Dl(A.aaR(A.acf.
Av$));this.AwX([B=A._GetAutoObject(A.Device.Device),B.A8L,B.Bbs]);},_ReInit:function(
){C.GJ._ReInit.call(this);this.Dl(A.aaR(A.acf.Av$));},_className:"Application::ActionListScreen"
};C.AMd={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AMd;},
_className:"Application::ActionListFilterScreen"};C.API={IR:null,IY:null,Bc:null
,ML:A.jV,Init:function(aArg){var B;A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.
Helper).W,B.A9y,B.A_Y],0);A.zX([this,this.Nz],[B=A._GetAutoObject(A.Device.Device
).An,B.Fo,B.Fs],0);},Dg:function(E){C.IP.Dg.call(this,E);this.IY.L(E);},DX:function(
G){C.IP.DX.call(this,G);var AzK=A._GetAutoObject(A.Device.Device).An.Filter;if(!
AzK||A._GetAutoObject(A.Device.Helper).Arn(AzK))this.IR.Z(false);else this.IR.Z(
true);if(A._GetAutoObject(A.Device.Helper).W.Aq6())this.Aw9(((A._GetAutoObject(A.
Device.Helper).W.CI+1).toFixed()+AIS)+A._GetAutoObject(A.Device.Device).An.B8().
toFixed());else this.Aw9(BaK);},Aw9:function(E){if(this.ML===E)return;this.ML=E;
this.IY.R(E);},_Init:function(aArg){C.IP._Init.call(this,aArg);A.acg.Ap._Init.call(
this.IR={I:this},0);A.acg.Text._Init.call(this.IY={I:this},0);A.acg.C8._Init.call(
this.Bc={I:this},0);this.__proto__=C.API;this.HT.H(Brs);this.DS.H(Brt);this.IR.H(
Bru);this.IR.L(A.jb.Text);this.IY.H(BaL);this.IY.Hp(2);this.IY.Lv(true);this.IY.
A6(0x12);this.IY.R(BaM);this.Bc.DD(Alm);this.Bc.DN(AyN);this.Bc.L(A.jb.Bc);this.
J(this.IR,0);this.J(this.IY,0);this.J(this.Bc,0);this.IR.Ax(A.aaL(A.ach.AeF));this.
IY.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IP;this.
IR._Done();this.IY._Done();this.Bc._Done();C.IP._Done.call(this);},_ReInit:function(
){C.IP._ReInit.call(this);this.IR._ReInit();this.IY._ReInit();this.Bc._ReInit();
this.IY.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IP._Mark.call(this,D);if((
B=this.IR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.AsR={Text:null,Bl:function(aSize){C.O8.Bl.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.O8.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(Xp);else this.Text.R(this.AC.Gm((F=this.Q,F[1].call(F[0]
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
C.Au$={V3:null,DirectionOfCountingToString:null,Aek:null,Du:function(){return 2;
},C7:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return aIndex;
},Gm:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return A.jV;return this.
DirectionOfCountingToString.BT(aIndex);},DZ:function(A8){return A8;},H8:function(
){return this.Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.V3)(F=
this.V3,F[2].call(F[0],E));},ADd:function(aIndex){if((aIndex<0)||(aIndex>=this.Du(
)))return null;return this.Aek.AsS(aIndex);},ADf:function(aIndex){if((aIndex<0)||(
aIndex>=this.Du()))return-1;return this.Aek.AsT(aIndex);},A2i:function(G){var F;
if(!!this.V3)this.Q=(F=this.V3,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cc],0);},Ae3:function(E){if(A.aaZ(this.V3,E))return;if(!!this.V3)A.z$([this
,this.A2i],this.V3,0);this.V3=E;if(!!this.V3)A.zX([this,this.A2i],this.V3,0);A.pe([
this,this.A2i],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Aek._Init.call(this.Aek={I:this},0);this.__proto__=C.Au$;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Aek._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Aek._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.V3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AMA={Hv:null,EA:null,AnimalIdGenerationMethodToString:
null,Ad1:null,Du:function(){return 4;},C7:function(aIndex){var F;var A8=-1;if((aIndex<
0)||(aIndex>=this.Du()))return-1;switch(aIndex){case 0:A8=0;break;case 1:A8=1;break;
case 2:A8=this.BzZ((F=this.EA,F[1].call(F[0])));break;case 3:A8=5;break;default:
throw new Error(Brv+aIndex.toFixed());}return A8;},Gm:function(aIndex){if((aIndex<
0)||(aIndex>=this.Du()))return A.jV;return this.AnimalIdGenerationMethodToString.
BT(this.C7(aIndex));},DZ:function(A8){var aIndex=-1;switch(A8){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Brw+A8.toFixed());}return aIndex;},H8:function(){return this.
Du()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hv)(F=this.Hv,F[2].
call(F[0],E));},ADd:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;
return this.Ad1.AsS(this.C7(aIndex));},ADf:function(aIndex){if((aIndex<0)||(aIndex>=
this.Du()))return-1;return this.Ad1.AsT(this.C7(aIndex));},A1O:function(G){var F;
if(!!this.Hv)this.Q=(F=this.Hv,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B$
,this.Cc],0);},Bmt:function(E){if(A.aaZ(this.Hv,E))return;if(!!this.Hv)A.z$([this
,this.A1O],this.Hv,0);this.Hv=E;if(!!this.Hv)A.zX([this,this.A1O],this.Hv,0);A.pe([
this,this.A1O],this);},Ux:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.
z$([this,this.Agf],this.EA,0);this.EA=E;if(!!this.EA)A.zX([this,this.Agf],this.EA
,0);A.pe([this,this.Agf],this);},Agf:function(G){A.pe([this,this.ByQ],this);},BzZ:
function(Ma){var Ru=0;switch(Ma){case 0:Ru=2;break;case 1:Ru=3;break;case 2:Ru=4;
break;default:throw new Error(Brx+Ma.toFixed());}return Ru;},ByQ:function(G){var
BeY=this.C7(this.DZ(this.Q));if(this.Q!==BeY)this.Au(BeY);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.Ad1._Init.call(this.
Ad1={I:this},0);this.__proto__=C.AMA;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.Ad1._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.Ad1._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AGW={FN:null,Aa$:null,Q:null,Fl:null,Fb:null,HJ:null,WE:null,AW:null,H4:null
,Kr:null,A_:0,AM:0,Aly:0,Init:function(aArg){var B;A.zX([this,this.Be$],[B=A._GetAutoObject(
A.Device.Device),B.Anu,B.AoD],0);},Ai:function(Ae){C.Eg.Ai.call(this,Ae);if(this.
A_===1){if(this.Hn){this.AW.FP(A.jb.CK);this.HJ.CV(A.jb.CK);this.WE.CV(A.jb.CK);
this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.AW.FP(A.jb.CU);this.HJ.
CV(A.jb.CU);this.WE.CV(A.jb.CU);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}
}else{if(this.Hn){this.AW.FP(A.jb.CK);this.HJ.CV(A.jb.CK);this.WE.CV(A.jb.CK);}else{
this.AW.FP(A.jb.CU);this.HJ.CV(A.jb.CU);this.WE.CV(A.jb.CU);}this.Bb(null);}},H1:
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
this.AW);else this.Bb(this.WE);if(!this.AM)this.AW.SW(2);else this.AW.SW(7);}break;
default:throw new Error(Ats+this.A_.toFixed());}this.DK(this);this.Am();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},C5:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ur,this.
Bx],0);}},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));},Ov:function(G){this.ABo(2);},M6:function(G){this.ABo(
7);},ABo:function(GA){var B;var AzL=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(
!!AzL){var AAA=(A.Core.P.isPrototypeOf(B=this.QL(AzL,GA,0x15))?B:null);if(!!AAA){
this.Bb(AAA);return true;}}return false;},Ao6:function(G){A.pe([this,this.Be$],this
);},A4I:function(G){var B;var F;if(!this.H4.Hv){this.Kr.Ae3(null);return;}switch((
F=this.H4.Hv,F[1].call(F[0]))){case 0:case 1:this.Kr.Ae3(null);break;case 3:this.
Kr.Ae3([B=A._GetAutoObject(A.Device.Device),B.ASN,B.A0G]);break;case 2:this.Kr.Ae3([
B=A._GetAutoObject(A.Device.Device),B.ASO,B.A0H]);break;case 4:case 5:this.Kr.Ae3([
B=A._GetAutoObject(A.Device.Device),B.AEU,B.AI4]);break;default:throw new Error(
Bry+(F=this.H4.Hv,F[1].call(F[0])).toFixed());}},Be$:function(G){var F;if(!this.
H4.Hv)return;A.pe([this,this.A4I],this);var At7=false;switch((F=this.H4.Hv,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{At7=true;this.AW.A$e(-1);}break;case 0:
case 1:{At7=false;this.AW.A$e(A._GetAutoObject(A.Device.Device).A3);}break;default:
throw new Error(AyF+(F=this.H4.Hv,F[1].call(F[0])).toFixed());}this.AW.As(At7);this.
HJ.As(At7);this.HJ.Z(At7);if(((F=this.H4.Hv,F[1].call(F[0]))!==this.Aly)||(At7===
false)){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.Helper).AMy((F=this.H4.
Hv,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AM!==BP){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).Bkd((F=this.H4.Hv,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.AW.Kz(A._GetAutoObject(A.Device.Device).A3);else this.AW.Kz(0);this.Aly=(
F=this.H4.Hv,F[1].call(F[0]));},A95:function(E){var B;if(this.Aa$===E)return;if(
!!this.Aa$){A.z$([this,this.Ao6],[B=this.Aa$,B.WK,B.J0],0);A.z$([this,this.Ao6],[
B=this.Aa$,B.Any,B.Nr],0);A.z$([this,this.Ao6],[B=this.Aa$,B.ArJ,B.P0],0);this.H4.
Ux(null);}this.Aa$=E;if(!!E){A.zX([this,this.Ao6],[B=this.Aa$,B.WK,B.J0],0);A.zX([
this,this.Ao6],[B=this.Aa$,B.Any,B.Nr],0);A.zX([this,this.Ao6],[B=this.Aa$,B.ArJ
,B.P0],0);this.H4.Ux([B=this.Aa$,B.WK,B.J0]);}if(!!E)A.pe([this,this.Ao6],this);
},Ur:function(){return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);
A.Core.BF._Init.call(this.Fl={I:this},0);A.Core.BF._Init.call(this.Fb={I:this},0
);C.Ark._Init.call(this.HJ={I:this},0);C.Ark._Init.call(this.WE={I:this},0);C.AvW.
_Init.call(this.AW={I:this},0);C.AMA._Init.call(this.H4={I:this},0);C.Au$._Init.
call(this.Kr={I:this},0);this.__proto__=C.AGW;var B;this.H(U5);this.V.As(false);
this.V.R(Atj);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fb.Filter=7;this.HJ.H(Brz);
this.HJ.As(false);this.WE.H(BrA);this.AW.H(BrB);this.AW.As(false);this.J(this.HJ
,0);this.J(this.WE,0);this.J(this.AW,0);this.FN=A._NewObject(C.Aex,0);this.Fl.BG=[
this,this.Ov];this.Fb.BG=[this,this.M6];this.HJ.CL(this.Kr);this.HJ.Au([B=this.Kr
,B.B$,B.Cc]);this.WE.CL(this.H4);this.WE.Au([B=this.H4,B.B$,B.Cc]);this.AW.Au([this
,this.Ur,this.Bx]);this.H4.Bmt([B=A._GetAutoObject(A.Device.Device),B.Anu,B.AoD]
);this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.Fl._Done();this.Fb.
_Done();this.HJ._Done();this.WE._Done();this.AW._Done();this.H4._Done();this.Kr.
_Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.
Fl._ReInit();this.Fb._ReInit();this.HJ._ReInit();this.WE._ReInit();this.AW._ReInit(
);this.H4._ReInit();this.Kr._ReInit();},_Mark:function(D){var B;C.Eg._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aa$)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WE)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Kr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.G7={Az3:null,Fl:null,Fb:null,G3:null,
F_:null,EM:null,Ne:0,ANc:0,ACi:0,UD:0,Baw:-1,ANb:false,Init:function(aArg){A.pe([
this,this.A1a],this);},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.EM.Z(this.
ANb);this.EM.H(A.wC(this.YA(this.ACi).M,this.YA((this.ACi+this.ANc)-1).M));},Ov:
function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var A13=this.BgI(2);if(A13===
false)D5.Mx=true;},M6:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);var
A13=this.BgI(7);if(A13===false)D5.Mx=true;},BgI:function(GA){var B;var DV=(C.DG.
isPrototypeOf(B=this.AV)?B:null);DV=this.Bd1(DV,GA,true);if(!!DV){this.Bb(DV);this.
Az3=(C.DG.isPrototypeOf(B=this.AV)?B:null);return true;}return false;},Adw:function(
G){A.ab5("%s",Ali);},GY:function(s){this.Adw(s);},FP:function(E){if(this.Ne===E)
return;this.Ne=E;this.F_.CV(E);this.G3.CV(E);},SW:function(GA){var B;switch(GA){
case 2:this.Bb(this.G3);break;case 7:this.Bb(this.F_);break;default:A.ab5("%s%e"
,BrC,GA);}this.Az3=(C.DG.isPrototypeOf(B=this.AV)?B:null);},LU:function(G){},A1a:
function(s){this.LU(s);},AFf:function(E){if(this.ANb===E)return;this.ANb=E;this.
Am();},A9$:function(E){if(this.ANc===E)return;this.ANc=E;this.Am();},A9_:function(
E){if(this.ACi===E)return;this.ACi=E;this.Am();},YA:function(HC){var B6=null;switch(
HC){case-1:case 0:B6=this.F_;break;case 1:B6=this.G3;break;default:A.ab5("%s",Ah5
);}return B6;},Kz:function(E){if(this.UD===E)return;this.UD=E;this.Ams();},Ams:function(
){A.ab5("%s",Ali);},Bd1:function(Ac4,GA,LN){var B;if(!!Ac4){var Bf;if(LN)Bf=0x11;
else Bf=0x0;switch(GA){case 2:Ac4=(C.DG.isPrototypeOf(B=this.AqU(Ac4,Bf))?B:null
);break;case 7:Ac4=(C.DG.isPrototypeOf(B=this.TY(Ac4,Bf))?B:null);break;default:
throw new Error(BrD);}}return Ac4;},A$e:function(E){if(this.Baw===E)return;this.
Baw=E;var DV=this.F_;var A2q;while(!!DV){A2q=!!E;DV.As(A2q);DV.Z(A2q);if(DV===this.
Az3)this.Bb(DV);DV=this.Bd1(DV,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
P._Init.call(this,aArg);A.Core.BF._Init.call(this.Fl={I:this},0);A.Core.BF._Init.
call(this.Fb={I:this},0);C.DG._Init.call(this.G3={I:this},0);C.DG._Init.call(this.
F_={I:this},0);A.acg.BW._Init.call(this.EM={I:this},0);this.__proto__=C.G7;this.
H(BrE);this.Fl.Filter=6;this.Fb.Filter=7;this.Ne=A.jb.CK;this.G3.H(E8);this.F_.H(
BaN);this.EM.H(BrF);this.EM.Nu(2);this.EM.L(A.jb.E1);this.J(this.G3,0);this.J(this.
F_,0);this.J(this.EM,0);this.Fl.BG=[this,this.Ov];this.Fl.D1=[this,this.Ov];this.
Fb.BG=[this,this.M6];this.Fb.D1=[this,this.M6];this.Az3=this.F_;this.G3.Dk=[this
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
CV(E);this.Dz.CV(E);},YA:function(HC){var B6=null;switch(HC){case-1:case 0:B6=this.
F_;break;case 1:B6=this.Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;
case 4:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;},_Init:function(aArg
){C.HN._Init.call(this,aArg);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(
this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARo;this.
H(BrG);this.G3.H(Aln);this.Dz.H(BaO);this.CW.H(BaP);this.Cv.H(BaQ);this.F_.H(BrH
);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);this.Dz.Dk=[this,this.
GY];this.CW.Dk=[this,this.GY];this.Cv.Dk=[this,this.GY];},_Done:function(){this.
__proto__=C.HN;this.Dz._Done();this.CW._Done();this.Cv._Done();C.HN._Done.call(this
);},_ReInit:function(){C.HN._ReInit.call(this);this.Dz._ReInit();this.CW._ReInit(
);this.Cv._ReInit();},_Mark:function(D){var B;C.HN._Mark.call(this,D);if((B=this.
Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AVY={Re:null,AcM:null,AVX:0,CD:function(G){this.AcM.As(true);},E4:function(G
){this.AcM.As(false);},Bol:function(E){if(this.AVX===E)return;this.AVX=E;this.Re.
R((((A.aaR(A.acf.AVW)+AcV)+E.toFixed())+BrI)+A.aaR(A.acf.Lg));},Bme:function(){return this.
AVX;},BBQ:function(G){A._GetAutoObject(C.A7).Cb(3);A._GetAutoObject(A.Device.Device
).AnB(1);},_Init:function(aArg){C.X_._Init.call(this,aArg);C.CG._Init.call(this.
Re={I:this},0);A.acl.Gn._Init.call(this.AcM={I:this},0);this.__proto__=C.AVY;this.
AeR.H(BrJ);this.UL.R(A.jV);this.Re.H(BrK);this.Re.R(A.aaR(A.acf.AVW)+BaR);this.Re.
L(A.jb.Text);this.AcM.HQ(1);this.AcM.Fq(5000);this.AcM.B3=100;this.J(this.Re,0);
this.Re.S(A.aaL(A.fl.Af));this.Re.AY(A.aaL(A.fl.Ak));this.Re.Cm(A.aaL(A.fl.Bh));
this.AcM.SJ=[this,this.BBQ];this.AcM.Q=[this,this.Bme,this.Bol];},_Done:function(
){this.__proto__=C.X_;this.Re._Done();this.AcM._Done();C.X_._Done.call(this);},_ReInit:
function(){C.X_._ReInit.call(this);this.Re._ReInit();this.AcM._ReInit();this.Re.
R(A.aaR(A.acf.AVW)+BaR);this.Re.S(A.aaL(A.fl.Af));this.Re.AY(A.aaL(A.fl.Ak));this.
Re.Cm(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.X_._Mark.call(this,D);if((B=this.
Re)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcM)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.ASi={K9:null,Lo:null,BeN:false,Init:
function(aArg){this.Bb(this.Db);},Ew:function(G){var B;if(!!this.K9)this.K9.Ew(this
);C.WG.Ew.call(this,G);},Agj:function(G){var B;if(!!this.K9)this.K9.Agj(this);C.
WG.Agj.call(this,G);},CD:function(G){var B;if(!this.BeN){this.BeN=true;A.pe([this
,this.A4b],this);}else if(!this.K9){this.K9=A._NewObject(C.ASk,0);this.K9.A_o([this
,this.ABd]);this.LU(this);this.K9.LU(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ew(this);else C.WG.CD.call(this,G);}else C.WG.CD.call(this,G
);},Ap_:function(G){var B;if(!!this.K9)this.K9.Ap_(this);},ABd:function(G){var B;
var F;this.LU(this);this.K9.LU(this);A.pe([this,this.AcW],this);var Beo=this.L1;
this.Ae0(A._GetAutoObject(A.Device.Helper).AbA(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AVV(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Beo);if(Beo)A._GetAutoObject(
A.Device.Helper).W.P0(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.SQ(A._GetAutoObject(A.Device.Helper).AMy((F=this.Dj.H4.Hv,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.JN(this.Db);},A4b:function(
G){A._GetAutoObject(C.A7).Cb(79);},_Init:function(aArg){C.WG._Init.call(this,aArg
);C.Rd._Init.call(this.Lo={I:this},0);this.__proto__=C.ASi;var B;this.Lo.H(Ah1);
this.Lo.Aj(true);this.Lo.T(A.aaR(A.acf.ACJ));this.J(this.Lo,-9);this.J5(this.Go,-
1);this.Lo.Gt([this,this.D_,this.GT]);this.Lo.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.ASX,B.AnK]);this.Init(aArg);},_Done:function(){this.__proto__=C.WG;this.Lo.
_Done();C.WG._Done.call(this);},_ReInit:function(){C.WG._ReInit.call(this);this.
Lo._ReInit();this.Lo.T(A.aaR(A.acf.ACJ));},_Mark:function(D){var B;C.WG._Mark.call(
this,D);if((B=this.K9)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
AD8={AgS:null,AgT:null,NT:null,NS:null,ET:null,F0:null,Eq:null,Dz:null,CW:null,Cv:
null,FP:function(E){if(this.Ne===E)return;C.Lk.FP.call(this,E);this.Cv.CV(E);this.
CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);this.NS.CV(E);this.
NT.CV(E);this.AgT.CV(E);this.AgS.CV(E);},YA:function(HC){var B6=null;switch(HC){
case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;case 2:B6=this.CW;break;case
3:B6=this.Dz;break;case 4:B6=this.Eq;break;case 5:B6=this.F0;break;case 6:B6=this.
ET;break;case 7:B6=this.NS;break;case 8:B6=this.NT;break;case 9:B6=this.AgT;break;
case 10:B6=this.AgS;break;case 11:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;
},_Init:function(aArg){C.Lk._Init.call(this,aArg);C.DG._Init.call(this.AgS={I:this
},0);C.DG._Init.call(this.AgT={I:this},0);C.DG._Init.call(this.NT={I:this},0);C.
DG._Init.call(this.NS={I:this},0);C.DG._Init.call(this.ET={I:this},0);C.DG._Init.
call(this.F0={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(this.
Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.AD8;this.H(BrL);this.G3.H(AIT);this.AgS.H(AyS);this.AgT.H(
A0o);this.NT.H(A0p);this.NS.H(A0q);this.ET.H(A0r);this.F0.H(A0s);this.Eq.H(A0t);
this.Dz.H(BaS);this.CW.H(A0u);this.Cv.H(BrM);this.F_.H(BrN);this.J(this.AgS,-2);
this.J(this.AgT,-2);this.J(this.NT,-2);this.J(this.NS,-2);this.J(this.ET,-2);this.
J(this.F0,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.
Cv,-2);this.AgS.Dk=[this,this.GY];this.AgT.Dk=[this,this.GY];this.NT.Dk=[this,this.
GY];this.NS.Dk=[this,this.GY];this.ET.Dk=[this,this.GY];this.F0.Dk=[this,this.GY
];this.Eq.Dk=[this,this.GY];this.Dz.Dk=[this,this.GY];this.CW.Dk=[this,this.GY];
this.Cv.Dk=[this,this.GY];},_Done:function(){this.__proto__=C.Lk;this.AgS._Done(
);this.AgT._Done();this.NT._Done();this.NS._Done();this.ET._Done();this.F0._Done(
);this.Eq._Done();this.Dz._Done();this.CW._Done();this.Cv._Done();C.Lk._Done.call(
this);},_ReInit:function(){C.Lk._ReInit.call(this);this.AgS._ReInit();this.AgT._ReInit(
);this.NT._ReInit();this.NS._ReInit();this.ET._ReInit();this.F0._ReInit();this.Eq.
_ReInit();this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit();},_Mark:function(
D){var B;C.Lk._Mark.call(this,D);if((B=this.AgS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ET)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HN={Q:null,AM:0,Ai:function(Ae){C.G7.Ai.call(this
,Ae);this.Ams();},Adw:function(G){var B;var F;var IE=A.jV;var B6=this.G3;while(!
!B6){if(B6.Ez>0)IE=IE+B6.Ez.toFixed();else IE=IE+String.fromCharCode(0x30);B6=(C.
DG.isPrototypeOf(B=this.TY(B6,0x11))?B:null);}var BP=this.AM;this.Bx(A.wz(IE,-1,
10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},LU:function(G){},Ams:function(){var B;var F;if(!!this.Q){var DV=this.F_;
var AdF=this.UD;var A8=(F=this.Q,F[1].call(F[0]));while(!!DV){if(A8>0){DV.L7(A8%
10);A8=(A8/10)|0;}else if(AdF>0)DV.L7(0);else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=
this.AqU(DV,0x11))?B:null);AdF=AdF-1;}}},C5:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)
A.pe([this,this.C5],this);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.
Am();},_Init:function(aArg){C.G7._Init.call(this,aArg);this.__proto__=C.HN;},_Mark:
function(D){var B;C.G7._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lk={AM:0,Q:null
,Ai:function(Ae){C.G7.Ai.call(this,Ae);this.Ams();},Adw:function(G){var B;var F;
var IE=A.jV;var B6=this.G3;while(!!B6){if(B6.Ez>0)IE=IE+B6.Ez.toFixed();else IE=
IE+String.fromCharCode(0x30);B6=(C.DG.isPrototypeOf(B=this.TY(B6,0x11))?B:null);
}var BP=this.AM;this.Bx(A.ab0(IE,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AM));A.abo(this.Q,0);}},LU:function(G){},Ams:function(){var B;
var F;if(!!this.Q){var DV=this.F_;var AdF=this.UD;var A8=(F=this.Q,F[1].call(F[0
]));while(!!DV){if(A8>0){DV.L7((A8%10)|0);A8=Math.trunc(A8/10);}else if(AdF>0)DV.
L7(0);else DV.L7(-1);DV=(C.DG.isPrototypeOf(B=this.AqU(DV,0x11))?B:null);AdF=AdF-
1;}}},C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Au:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);},Bx:function(
E){if(this.AM===E)return;this.AM=E;this.Am();},_Init:function(aArg){C.G7._Init.call(
this,aArg);this.__proto__=C.Lk;},_Mark:function(D){var B;C.G7._Mark.call(this,D);
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
HN.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);},YA:
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
Bpz(0);this.AttributeSet.BpA(1);this.AttributeSet.BpB(4);},Ai:function(Ae){var B;
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
AC)CA.R(this.BzS(this.AC.Gm(Gh)));else CA.R(Xp);CA.H(A.abK(CA.M,[this.DB.Wm,(B=this.
DB.M)[3]-B[1]]));},BzS:function(Byf){var AAZ=Byf;AAZ=A._GetAutoObject(A.Device.Helper
).MO(AAZ,BrO,BrP);AAZ=A._GetAutoObject(A.Device.Helper).MO(AAZ,BrQ,BrR);return BrS+
AAZ;},_Init:function(aArg){C.BX._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.AU4;this.DB.H(BrT);this.DB.JD(2);
this.DB.N8(A.acg.AuZ);this.AttributeSet.Ahr(this.V.AQ);this.AttributeSet.Bnc(A.aaL(
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
L(A.jb.CK);this.V.L(A.jb.Text);}}},Bx:function(E){C.BX.Bx.call(this,E);var BAN=this.
EnumToCodeset.AmK(this.Number);var BeX=this.AC.C7(this.AM);if(BAN!==BeX){this.AFQ(
this.EnumToCodeset.Aen(BeX));A.abo([this,this.ASY,this.AFQ],0);}},DK:function(G){
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
this.AM;if(!!this.EnumToCodeset){var BzI=this.EnumToCodeset.AmK(E);this.Bx(this.
AC.DZ(BzI));if(this.AM!==BP){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C7(this.AM)));A.abo(this.Q,0);}}},AnD:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},Vk:function(G){this.Ex(this.A_+1);},A2D:function(){A.ab5(
"%s",BrU);},ASY:function(){return this.Number;},_Init:function(aArg){C.BX._Init.
call(this,aArg);A.Core.BF._Init.call(this.JB={I:this},0);this.__proto__=C.O1;this.
JB.Filter=1;this.FN=A._NewObject(C.Aex,0);this.JB.BG=[this,this.Vk];},_Done:function(
){this.__proto__=C.BX;this.JB._Done();C.BX._Done.call(this);},_ReInit:function(){
C.BX._ReInit.call(this);this.JB._ReInit();},_Mark:function(D){var B;C.BX._Mark.call(
this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JB)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AeY={Text:null,Ai:function(
Ae){C.El.Ai.call(this,Ae);this.Text.L(this.AC_);},Bx:function(E){if(this.AM===E)
return;this.AM=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Rl(this.AM));this.
Am();},AaR:function(G){A.pe([this,this.Age],this);},AaP:function(G){A.pe([this,this.
Age],this);},Al5:function(G){A.pe([this,this.Age],this);},Age:function(G){if((!this.
Io||!this.A3)||!this.AF)return;},_Init:function(aArg){C.El._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AeY;this.Text.A1(0x3F
);this.Text.H(Ate);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.El;this.Text._Done();C.El.
_Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Af));},_Mark:function(
D){var B;C.El._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.ASb={GI:0,C9:null,AW:null,Fa:null,
Jc:null,CountryToString:null,Le:0,Mh:false,Init:function(aArg){A.zX([this,this.MT
],[this,this.SK,this.Lt],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.Jc.Z(this.
Aft);this.AW.FP(this.LX);this.Fa.CV(this.LX);this.Jc.CV(this.LX);},DK:function(G
){var F;if(!this.N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(
F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(
F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(
null);(F=this.N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Le));(F=this.N,
F[1].call(F[0])).Ca=null;}break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.
E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Tx=this.
A_;this.A_=EO;if(this.A_<0)this.A_=0;else if(this.A_>this.RN)this.A_=this.RN;if((
this.A_===1)&&!this.Aft)this.A_=2;switch(this.A_){case 0:{this.Bb(null);if(!this.
GI)this.Lt(0);}break;case 1:this.Bb(this.Jc);break;case 2:this.Bb(this.Fa);break;
case 3:{this.Bb(this.AW);if(!this.GI||(Tx>0))this.AW.SW(2);else this.AW.SW(7);}break;
default:throw new Error(Ats+this.A_.toFixed());}C.El.Ex.call(this,this.A_);},Apu:
function(G){this.Jc.Ux(this.EA);},AaR:function(G){var F;this.AW.A9_((F=this.AF,F[
1].call(F[0])));},AaP:function(G){var F;this.AW.A9$((F=this.A3,F[1].call(F[0])));
},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mh=true;this.SN(A._GetAutoObject(
A.Device.Helper).V6(E,0,12));this.Lt(A._GetAutoObject(A.Device.Converter).S9(E));
this.Mh=false;if(!!E)this.AW.Kz(12);else this.AW.Kz(0);this.Am();},Al5:function(
G){A.pe([this,this.Age],this);},FW:function(G){var F;if(!this.AM){var BP=this.AM;
this.Bx(A._GetAutoObject(A.Device.Helper).ADn());if(this.AM!==BP){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(3);},AjO:function(){return this.
GI;},AjQ:function(){return 999999999999;},Lt:function(E){if(this.Le===E)return;this.
Le=E;if(this.Mh===false)A.pe([this,this.Vx],this);A.abo([this,this.SK,this.Lt],0
);},SN:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false)A.pe([this
,this.Vx],this);A.abo([this,this.Ab6,this.SN],0);},Vx:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).AqH(this.Le),3,10)+A.abm(this.GI,12,10
);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Age:function(G){var F;if((!this.Io||
!this.A3)||!this.AF)return;if(!(F=this.Io,F[1].call(F[0])))this.AW.AFf(true);else
this.AW.AFf(false);},SK:function(){return this.Le;},Ab6:function(){return this.GI;
},_Init:function(aArg){C.El._Init.call(this,aArg);C.C9._Init.call(this.C9={I:this
},0);C.AD8._Init.call(this.AW={I:this},0);C.AsR._Init.call(this.Fa={I:this},0);C.
Jc._Init.call(this.Jc={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ASb;var B;this.RN=3;this.AW.H(BrV);this.Fa.H(BaU);this.
Jc.H(BaV);this.J(this.AW,0);this.J(this.Fa,0);this.J(this.Jc,0);this.C9.AFl([this
,this.SK,this.Lt]);this.AW.Au([this,this.Ab6,this.SN]);this.Fa.CL(this.C9);this.
Fa.Au([B=this.C9,B.B$,B.Cc]);this.Jc.A_s([B=A._GetAutoObject(A.Device.Device),B.
Awk,B.AyZ]);this.Init(aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done(
);this.AW._Done();this.Fa._Done();this.Jc._Done();this.CountryToString._Done();C.
El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.Fa._ReInit();this.Jc._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.ASa={GI:0,C9:null,AW:null,YO:null,Kw:null,Fa:null,Jc:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,PD:0,Le:0,Mh:false,Init:function(aArg){A.
zX([this,this.MT],[this,this.PX,this.EC],0);A.zX([this,this.MT],[this,this.SK,this.
Lt],0);A.zX([this,this.MT],[this,this.Anw,this.Ahv],0);},Ai:function(Ae){C.El.Ai.
call(this,Ae);this.Jc.Z(this.Aft);this.AW.FP(this.LX);this.YO.FP(this.LX);this.Kw.
FP(this.LX);this.Fa.CV(this.LX);this.Jc.CV(this.LX);},DK:function(G){var F;if(!this.
N)return;switch(this.A_){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C3(A.aaL(
A.ach.E2));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this
,this.Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV
);(F=this.N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.
N,F[1].call(F[0])).CS(this.CountryToString.BT(this.Le));(F=this.N,F[1].call(F[0]
)).Ca=null;}break;case 3:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.
N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG5)+A.aaR(A.acf.Colon))+AcV)+A.aaR(A.
acf.Bh9));break;case 1:(F=this.N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG5)+A.aaR(A.
acf.Colon))+AcV)+A.aaR(A.acf.BpE));break;case 2:(F=this.N,F[1].call(F[0])).CS(((
A.aaR(A.acf.AG5)+A.aaR(A.acf.Colon))+AcV)+A.aaR(A.acf.Bi$));break;default:(F=this.
N,F[1].call(F[0])).CS(((A.aaR(A.acf.AG5)+A.aaR(A.acf.Colon))+AcV)+A.aaR(A.acf.Unknown
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
A.jV);(F=this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Tx=this.A_;if(EO<
0)EO=0;else if(EO>this.RN)EO=this.RN;if((EO===1)&&!this.Aft)EO=2;switch(EO){case
0:{this.Bb(null);if((!this.GI&&!this.AnimalType)&&!this.PD)this.Lt(0);}break;case
1:this.Bb(this.Jc);break;case 2:this.Bb(this.Fa);break;case 3:if(!Tx)A.pe([this,
this.BB4],this);else this.Bb(this.YO);break;case 4:this.Bb(this.Kw);break;case 5:
if(((Tx===4)&&!this.PD)&&!this.GI)return;else{this.Bb(this.AW);if(!this.GI||(Tx>
0))this.AW.SW(2);else this.AW.SW(7);}break;default:throw new Error(Ats+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,this.A_);},Bx:function(E){if(this.AM===E)return;
this.AM=E;this.Mh=true;this.SN(A._GetAutoObject(A.Device.Helper).V6(E,0,8));this.
Ahv(A._GetAutoObject(A.Device.Converter).Baj(E));this.EC(A._GetAutoObject(A.Device.
Converter).Bai(E));this.Lt(A._GetAutoObject(A.Device.Converter).S9(E));this.Mh=false;
if(!!this.AM){this.YO.Kz(2);this.Kw.Kz(2);this.AW.Kz(8);}else{this.YO.Kz(0);this.
Kw.Kz(0);this.AW.Kz(0);}this.Am();},Apu:function(G){this.Jc.Ux(this.EA);},AaR:function(
G){var F;this.AW.A9_((F=this.AF,F[1].call(F[0])));},AaP:function(G){var F;this.AW.
A9$((F=this.A3,F[1].call(F[0])));},Al5:function(G){A.pe([this,this.Age],this);},
FW:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADn());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(3);}else this.Ex(this.RN);},AjO:function(){return this.GI;
},AjQ:function(){return 99999999;},Lt:function(E){if(this.Le===E)return;this.Le=
E;if(this.Mh===false)A.pe([this,this.Vx],this);A.abo([this,this.SK,this.Lt],0);}
,SN:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false)A.pe([this,this.
Vx],this);A.abo([this,this.Ab6,this.SN],0);},Vx:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).AqH(this.Le),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.PD,2,10))+A.abm(this.GI,8,10);var BP=this.AM;this.Bx(A.ab0(aString
,0,10));if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.
Q,0);}},Age:function(G){var F;if((!this.Io||!this.A3)||!this.AF)return;if(!(F=this.
Io,F[1].call(F[0])))this.AW.AFf(true);else this.AW.AFf(false);},EC:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Mh===false)A.pe([this,this.
Vx],this);A.abo([this,this.PX,this.EC],0);},Ahv:function(E){if(this.PD===E)return;
this.PD=E;if(this.Mh===false)A.pe([this,this.Vx],this);A.abo([this,this.Anw,this.
Ahv],0);},BB4:function(G){var F;if(!!this.JR){var Ih=(F=this.JR,F[1].call(F[0]));
var A1P=0;switch(Ih){case 0:case 1:A1P=0;break;case 2:A1P=1;break;default:A.ab5(
"%s%e",Alh,Ih);}this.EC(A1P);}if(!this.PD)this.Ex(4);else this.Ex(5);},SK:function(
){return this.Le;},Ab6:function(){return this.GI;},PX:function(){return this.AnimalType;
},Anw:function(){return this.PD;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.ARp._Init.call(this.AW={I:this},0);C.AvV.
_Init.call(this.YO={I:this},0);C.AvV._Init.call(this.Kw={I:this},0);C.AsR._Init.
call(this.Fa={I:this},0);C.Jc._Init.call(this.Jc={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ASa;var B;this.RN=5;this.AW.H(
BrW);this.YO.H(BrX);this.YO.EV(2);this.Kw.H(BrY);this.Kw.EV(16);this.Fa.H(BaU);this.
Jc.H(BaV);this.J(this.AW,0);this.J(this.YO,0);this.J(this.Kw,0);this.J(this.Fa,0
);this.J(this.Jc,0);this.C9.AFl([this,this.SK,this.Lt]);this.AW.Au([this,this.Ab6
,this.SN]);this.YO.Au([this,this.PX,this.EC]);this.Kw.Au([this,this.Anw,this.Ahv
]);this.Fa.CL(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cc]);this.Jc.A_s([B=A._GetAutoObject(
A.Device.Device),B.Awk,B.AyZ]);this.Init(aArg);},_Done:function(){this.__proto__=
C.El;this.C9._Done();this.AW._Done();this.YO._Done();this.Kw._Done();this.Fa._Done(
);this.Jc._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.El._Done.call(this);},_ReInit:function(){C.El._ReInit.call(this);this.C9._ReInit(
);this.AW._ReInit();this.YO._ReInit();this.Kw._ReInit();this.Fa._ReInit();this.Jc.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.El._Mark.call(this,D);if((B=this.C9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Kw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.El={AM:0,Awv:null,OO:null,
Q:null,EA:null,A3:null,AF:null,Io:null,N:null,JR:null,Fl:null,Fb:null,AC_:0,LX:0
,A_:0,RN:0,Aft:true,Init:function(aArg){A.pe([this,this.LU],this);},Ai:function(
Ae){A.Core.P.Ai.call(this,Ae);if(!this.A_)this.Bb(null);},Bne:function(E){if(this.
AC_===E)return;this.AC_=E;this.Am();},WO:function(E){if(this.LX===E)return;this.
LX=E;this.Am();},DK:function(G){A.ab5("%s",Ali);},MT:function(s){this.DK(s);},Ex:
function(EO){A.pe([this,this.MT],this);A.pe(this.Awv,this);if(!EO)A.pe(this.OO,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],this);}
,C5:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",AoC);},Ov:function(G){if(this.A_>1)this.Ex(this.A_-1);},M6:function(
G){if((this.A_>0)&&(this.A_<this.RN))this.Ex(this.A_+1);},Ux:function(E){if(A.aaZ(
this.EA,E))return;if(!!this.EA)A.z$([this,this.A03],this.EA,0);this.EA=E;if(!!E)
A.zX([this,this.A03],this.EA,0);A.pe([this,this.A03],this);},Apu:function(G){},A03:
function(s){this.Apu(s);},OU:function(E){if(A.aaZ(this.A3,E))return;if(!!this.A3
)A.z$([this,this.A07],this.A3,0);this.A3=E;if(!!E)A.zX([this,this.A07],E,0);if(!
!E)A.pe([this,this.A07],this);},PY:function(E){if(A.aaZ(this.AF,E))return;if(!!this.
AF)A.z$([this,this.A09],this.AF,0);this.AF=E;if(!!E)A.zX([this,this.A09],E,0);if(
!!E)A.pe([this,this.A09],this);},AaR:function(G){},A09:function(s){this.AaR(s);}
,AaP:function(G){},A07:function(s){this.AaP(s);},Uv:function(E){if(A.aaZ(this.Io
,E))return;if(!!this.Io)A.z$([this,this.A06],this.Io,0);this.Io=E;if(!!E)A.zX([this
,this.A06],E,0);if(!!E)A.pe([this,this.A06],this);},Al5:function(G){},A06:function(
s){this.Al5(s);},FW:function(G){A.ab5("%s",BaW);},BHd:function(s){this.FW(s);},Hf:
function(G){this.Ex(0);},AjO:function(){A.ab5("%s",AoC);return 0;},AjQ:function(
){A.ab5("%s",AoC);return 0;},LU:function(G){},AnA:function(E){if(A.aaZ(this.JR,E
))return;if(!!this.JR)A.z$([this,this.Ao5],this.JR,0);this.JR=E;if(!!E)A.zX([this
,this.Ao5],this.JR,0);A.pe([this,this.Ao5],this);},Ao5:function(G){},AFx:function(
E){if(A.aa0(this.OO,E))return;this.OO=E;},AF2:function(E){if(this.Aft===E)return;
this.Aft=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.Core.
BF._Init.call(this.Fl={I:this},0);A.Core.BF._Init.call(this.Fb={I:this},0);this.
__proto__=C.El;this.H(Ate);this.AC_=A.jb.Text;this.LX=A.jb.CU;this.Fl.Filter=6;this.
Fb.Filter=7;this.Fl.BG=[this,this.Ov];this.Fb.BG=[this,this.M6];this.Init(aArg);
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
null,OO:null,EA:null,A3:null,AF:null,Io:null,Q:null,JR:null,AED:-1,Aft:true,AOh:
false,AUn:false,Ast:true,Init:function(aArg){A.pe([this,this.ABJ],this);},Ai:function(
Ae){C.Eg.Ai.call(this,Ae);if(!this.Dq)return;if(this.Dq.A_>0){if(this.Hn){this.Dq.
WO(A.jb.CK);this.Background.L(A.jb.CU);this.V.L(A.jb.Text);}else{this.Dq.WO(A.jb.
CU);this.Background.L(A.jb.CK);this.V.L(A.jb.Text);}}else{if(this.Hn)this.Dq.WO(
A.jb.CK);else this.Dq.WO(A.jb.CU);this.Dq.Bne(this.V.AQ);}},H1:function(G){C.Eg.
H1.call(this,G);if(!this.Dq)return;if(!this.Dq.A_)this.FW(this);else this.Hf(this
);},Gt:function(E){C.Eg.Gt.call(this,E);if(!!this.Dq)this.Dq.N=E;},Ux:function(E
){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([this,this.Apu],this.EA,0);this.EA=
E;if(!!E)A.zX([this,this.Apu],this.EA,0);A.pe([this,this.Apu],this);},Apu:function(
G){if(!!this.Dq)this.Dq.Ux(this.EA);},OU:function(E){if(A.aaZ(this.A3,E))return;
this.A3=E;if(!!this.Dq)this.Dq.OU(E);},PY:function(E){if(A.aaZ(this.AF,E))return;
this.AF=E;if(!!this.Dq)this.Dq.PY(E);},Uv:function(E){if(A.aaZ(this.Io,E))return;
this.Io=E;if(!!this.Dq)this.Dq.Uv(E);},BCx:function(G){var AAF=0;if(!!this.Dq){AAF=
this.Dq.A_;this.Dq.N=null;this.HR(this.Dq);}switch(this.AED){case 0:this.Dq=A._NewObject(
C.AeY,0);break;case 1:this.Dq=A._NewObject(C.ASb,0);break;case 2:this.Dq=A._NewObject(
C.ASa,0);break;case 3:this.Dq=A._NewObject(C.AUp,0);break;case 4:this.Dq=A._NewObject(
C.AUo,0);break;case 5:this.Dq=A._NewObject(C.ASc,0);break;default:throw new Error(
BrZ+this.AED.toFixed());}this.J(this.Dq,0);this.Dq.AnA(this.JR);this.Dq.H(Br0);this.
Dq.N=this.N;this.Dq.Ux(this.EA);this.Dq.Awv=[this,this.Awv];this.Dq.Au([this,this.
Ur,this.Bx]);this.Dq.Uv(this.Io);this.Dq.OU(this.A3);this.Dq.PY(this.AF);this.Dq.
AFx(this.OO);this.Dq.AF2(this.Aft);if(AAF>0)this.Dq.Ex(AAF);this.Bb(this.Dq);this.
Am();},FW:function(G){var B;var F;if(!!this.Dq){if(!!this.N)this.FN.AjC((F=this.
N,F[1].call(F[0])));else this.FN=A._NewObject(C.Aex,0);this.Dq.FW(this);}},Hf:function(
G){var B;if(!!this.Dq)this.Dq.Hf(this);},AjO:function(){if(!this.Dq)return 0;return this.
Dq.AjO();},AjQ:function(){if(!this.Dq)return 0;return this.Dq.AjQ();},C5:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.Ur,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.C5
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,0);if(!!E)A.pe([this,this.C5],
this);},Bx:function(E){var F;if(this.AM===E)return;this.AM=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);A.pe([this,this.ABJ],this);},BnT:function(
E){if(this.AED===E)return;this.AED=E;A.pe([this,this.BCx],this);},Ar_:function(E
){if(this.Ast===E)return;this.Ast=E;A.pe([this,this.ABJ],this);},ABJ:function(G){
var ApF;if(this.Ast){if(this.AOh)ApF=5;else ApF=0;}else if(this.AUn){if(A._GetAutoObject(
A.Device.Converter).S9(this.AM)===10)ApF=4;else ApF=3;}else if(A._GetAutoObject(
A.Device.Converter).S9(this.AM)===10)ApF=2;else ApF=1;this.BnT(ApF);},Awv:function(
G){var F;if((!!this.N&&!!this.Dq)&&!this.Dq.A_)this.FN.AkS((F=this.N,F[1].call(F[
0])));this.Am();},AnA:function(E){if(A.aaZ(this.JR,E))return;if(!!this.JR)A.z$([
this,this.Ao5],this.JR,0);this.JR=E;if(!!E)A.zX([this,this.Ao5],this.JR,0);A.pe([
this,this.Ao5],this);},Ao5:function(G){if(!!this.Dq)this.Dq.AnA(this.JR);},A_V:function(
E){if(this.AUn===E)return;this.AUn=E;A.pe([this,this.ABJ],this);},BmM:function(E
){if(this.AOh===E)return;this.AOh=E;A.pe([this,this.ABJ],this);},AFx:function(E){
if(A.aa0(this.OO,E))return;this.OO=E;if(!!this.Dq)this.Dq.AFx(E);},AF2:function(
E){if(this.Aft===E)return;this.Aft=E;if(!!this.Dq)this.Dq.AF2(E);},Ur:function(){
return this.AM;},_Init:function(aArg){C.Eg._Init.call(this,aArg);this.__proto__=
C.Rd;this.H(U5);this.V.R(Atj);this.V.L(A.jb.Bm);this.FN=A._NewObject(C.Aex,0);this.
Init(aArg);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Dq)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.OO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EA)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.A3)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AF)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Io
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JR)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.ARp={ET:null,F0:null,Eq:null,Dz:null,CW:null
,Cv:null,FP:function(E){if(this.Ne===E)return;C.Lk.FP.call(this,E);this.Cv.CV(E);
this.CW.CV(E);this.Dz.CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);},YA:function(
HC){var B6=null;switch(HC){case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;
case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;case 5:B6=
this.F0;break;case 6:B6=this.ET;break;case 7:B6=this.G3;break;default:A.ab5("%s"
,Ah5);}return B6;},_Init:function(aArg){C.Lk._Init.call(this,aArg);C.DG._Init.call(
this.ET={I:this},0);C.DG._Init.call(this.F0={I:this},0);C.DG._Init.call(this.Eq={
I:this},0);C.DG._Init.call(this.Dz={I:this},0);C.DG._Init.call(this.CW={I:this},
0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARp;this.H(Br1);this.G3.
H(AIT);this.ET.H(AyS);this.F0.H(A0o);this.Eq.H(A0p);this.Dz.H(A0q);this.CW.H(A0r
);this.Cv.H(A0s);this.F_.H(A0t);this.EM.H(BaT);this.J(this.ET,-2);this.J(this.F0
,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.CW,-2);this.J(this.Cv,-2);
this.ET.Dk=[this,this.GY];this.F0.Dk=[this,this.GY];this.Eq.Dk=[this,this.GY];this.
Dz.Dk=[this,this.GY];this.CW.Dk=[this,this.GY];this.Cv.Dk=[this,this.GY];},_Done:
function(){this.__proto__=C.Lk;this.ET._Done();this.F0._Done();this.Eq._Done();this.
Dz._Done();this.CW._Done();this.Cv._Done();C.Lk._Done.call(this);},_ReInit:function(
){C.Lk._ReInit.call(this);this.ET._ReInit();this.F0._ReInit();this.Eq._ReInit();
this.Dz._ReInit();this.CW._ReInit();this.Cv._ReInit();},_Mark:function(D){var B;
C.Lk._Mark.call(this,D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
F0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AvV={Q:null,G3:null,F_:null,EM:null,It:null,Is:null,Ne:0,UD:0,AM:0,Ga:99,Init:
function(aArg){A.pe([this,this.LU],this);},Ai:function(Ae){var B;A.Core.P.Ai.call(
this,Ae);this.EM.Z(false);this.EM.H(A.wC(this.YA(0).M,this.YA(-1).M));var IG=((Ae&
0x40)===0x40);if(IG){this.BgK(A.jb.AV);this.BgL(A.jb.Bm);}else{this.BgK(this.Ne);
this.BgL(A.jb.Text);}this.Ams();},FP:function(E){if(this.Ne===E)return;this.Ne=E;
this.Am();},LU:function(G){},YA:function(HC){var B6=null;switch(HC){case-1:case 0:
B6=this.F_;break;case 1:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;},Kz:
function(E){if(this.UD===E)return;this.UD=E;this.Ams();},Ams:function(){var B;var
F;if(!!this.Q){var DV=this.F_;var AdF=this.UD;var A8=(F=this.Q,F[1].call(F[0]));
while(!!DV){if(A8>0){DV.L7(A8%10);A8=(A8/10)|0;}else if(AdF>0)DV.L7(0);else DV.L7(-
1);DV=(C.Ez.isPrototypeOf(B=this.AqU(DV,0x11))?B:null);AdF=AdF-1;}}},Agh:function(
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
,0);A.Core.BF._Init.call(this.Is={I:this},0);this.__proto__=C.AvV;this.H(Br2);this.
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
if(this.M$===E)return;this.M$=E;this.Am();},Ae1:function(E){if(this.Aqz===E)return;
this.Aqz=E;this.AgL.As(E);if(E===false)this.Text.Z(true);},Zz:function(E){if(this.
AmU===E)return;this.AmU=E;this.Am();},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acl.TR._Init.call(this.AgL={I:this},0);A.acg.AL._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ez;var B;
this.H(Aln);this.M$=A.jb.CK;this.AgL.Fq(750);this.AgL.Uy(750);this.AgL.AkB(750);
this.AmU=A.jb.Text;this.Background.A1(0x3);this.Background.H(Aln);this.Text.A1(0x3
);this.Text.H(Aln);this.Text.R(Rs);this.J(this.Background,0);this.J(this.Text,0);
this.AgL.Q=[B=this.Text,B.Fp,B.Z];this.Text.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=A.Core.P;this.AgL._Done();this.Background._Done();this.Text._Done(
);A.Core.P._Done.call(this);},_ReInit:function(){A.Core.P._ReInit.call(this);this.
AgL._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Af));},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AgL)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
FC={Y:null,I$:null,AOp:A.jV,ASq:A.jV,Tq:0,AJZ:0,A2t:false,A11:false,Init:function(
aArg){},CD:function(G){var B;C.AB.CD.call(this,G);A.zX([this,this.ABE],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);A.zX([this,this.MT],[B=A._GetAutoObject(A.Device.
Device).An,B.Fo,B.Fs],0);A.pe([this,this.ABE],this);A.pe([this,this.MT],this);},
E4:function(G){var B;C.AB.E4.call(this,G);A.z$([this,this.ABE],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);},ByC:function(Md){A._GetAutoObject(A.Device.Helper
).GS(Md);this.Ap$(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).W.Id);},Ap$:function(L_,Ac0){A.ab5("%s",Ali);},Vs:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===9))A.aaS([
this,this.BzA],this);else if(!!Ar&&(Ar.PopupState===5)){this.A11=true;this.Ew(this
);}},BzA:function(G){if(this.Tq>0){this.A11=false;this.Adr(this);this.A$j(0);}},
Aiz:function(G){if((this.AJZ+1)<this.Tq)this.A$j(this.AJZ+1);else A.aaS([this,this.
Bxa],this);},Bxb:function(s){this.Aiz(s);},A$j:function(E){this.AJZ=E;if(this.A11===
false){this.ByC(E);A.aaS([this,this.Bxb],this);var XS=(this.AJZ/this.Tq)*100;A._GetAutoObject(
A.Device.Device).AZ(49,true,A.abk(XS,0,0),0,[this,this.Vs]);}},Aaz:function(G){A.
_GetAutoObject(A.Device.Device).AZ(49,false,Br3,0,[this,this.Vs]);this.A2t=true;
A.pe([this,this.ALA],this);},Bxa:function(s){this.Aaz(s);},Adr:function(G){this.
I$.Z(true);this.A2t=false;this.ALA(this);},BG9:function(s){this.Adr(s);},AAV:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).A7b();A._GetAutoObject(A.Device.Device
).An.Bk(Bf);},Ew:function(G){A._GetAutoObject(C.A7).FB();},A36:function(G){A._GetAutoObject(
C.A7).Cb(84);},DK:function(G){this.N.Z(true);this.N.C3(A.aaL(A.ach.E2));this.N.CF=[
this,this.Ew];this.N.Ct(A.aaL(A.ach.ADX));if(!A._GetAutoObject(A.Device.Device).
An.Filter||A._GetAutoObject(A.Device.Helper).Arn(A._GetAutoObject(A.Device.Device
).An.Filter)){this.N.Ce=null;this.N.IS.CZ(100);}else{this.N.Ce=[this,this.AAV];this.
N.IS.CZ(255);}this.N.C4(A.aaL(A.ach.AeF));this.N.Ca=[this,this.A36];},MT:function(
s){this.DK(s);},ABE:function(G){this.Tq=A._GetAutoObject(A.Device.Device).An.B8(
);if(this.Tq>0)A._GetAutoObject(A.Device.Device).AZ(49,true,U9,0,[this,this.Vs]);
else{this.Adr(this);this.Aaz(this);}},Akz:function(E){if(this.AOp===E)return;this.
AOp=E;A.pe([this,this.ALA],this);},ALA:function(G){var B;if(this.A2t===false){this.
I$.R(A.jV);return;}var Apg;if(!A._GetAutoObject(A.Device.Device).An.B8()){var Adl=
A._GetAutoObject(A.Device.Device).An.Filter;A.z$([this,this.ABE],[B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs],0);this.AAV(this);if(!A._GetAutoObject(A.Device.Device
).An.QM()||!Adl)Apg=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ADi(A._GetAutoObject(A.Device.Device).An.Filter)===1)Apg=A.aaR(
A.acf.AOj);else Apg=A.aaR(A.acf.AOi);A._GetAutoObject(A.Device.Device).An.Bk(Adl
);A.zX([this,this.ABE],[B=A._GetAutoObject(A.Device.Device).An,B.Fo,B.Fs],0);}else
Apg=this.ASq;Apg=Apg+(A0v+this.AOp);this.I$.R(Apg);},Afa:function(E){if(this.ASq===
E)return;this.ASq=E;A.pe([this,this.ALA],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.AkT._Init.call(this.I$={
I:this},0);this.__proto__=C.FC;this.Dr(C.AbD);this.Y.H(Fe);this.Y.JZ(1);this.I$.
H(Fe);this.J(this.Y,0);this.J(this.I$,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Y._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Y._ReInit();this.I$._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A7M={Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A7M;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AvX={K5:null,M4:null,A0:0,Yq:function(){this.K5=null;this.M4=null;this.A0=0;
},OA:function(A8){var Hj;Hj=A._NewObject(C.A7M,0);Hj.A5=A8;if(!this.K5){this.K5=
Hj;this.M4=Hj;this.A0=1;}else{this.M4.Ah=Hj;this.M4=Hj;this.A0=this.A0+1;}},Am2:
function(){var B;var RR=0;var Op=this.K5;while(!!Op){RR+=Op.A5;Op=Op.Ah;}return RR;
},AjP:function(){if(!this.A0)return 0;return this.Am2()/this.A0;},Aq4:function(){
var B;if(!this.A0)return 0;var A1V=this.AjP();var Adi=0;var Op=this.K5;while(!!Op
){Adi+=Math.pow(Op.A5-A1V,2);Op=Op.Ah;}Adi/=this.A0;Adi=Math.sqrt(Adi);return Adi;
},_Init:function(aArg){this.__proto__=C.AvX;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AOq={Gd:null,AeB:null,Yx:null,C8:null,I$:null,
CQ:function(){this.A46(this);},Init:function(aArg){A.zV([this,this.A46],A._GetAutoObject(
A.Device.Device).Pv,0);A.pe([this,this.A46],this);},Ew:function(G){A._GetAutoObject(
C.A7).FB();},A46:function(G){this.Yx.Ch(-1);this.I$.Z(!this.Gd.AX.B8());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Gd._Init.call(this.Gd={I:this},0);C.
AeB._Init.call(this.AeB={I:this},0);C.Yx._Init.call(this.Yx={I:this},0);A.acg.C8.
_Init.call(this.C8={I:this},0);C.AkT._Init.call(this.I$={I:this},0);this.__proto__=
C.AOq;this.N.Z(true);this.Dr(C.APl);this.Gd.H(Atl);this.Gd.N8(C.AmT);this.AeB.H(
I1);this.Yx.H(Atf);this.C8.DD(Br4);this.C8.DN(Br5);this.C8.Nu(3);this.C8.L(A.jb.
Text);this.I$.H(Ale);this.I$.R((A.aaR(A.acf.A8w)+A0v)+A.aaR(A.acf.A6P));this.J(this.
Gd,0);this.J(this.AeB,0);this.J(this.Yx,0);this.J(this.C8,0);this.J(this.I$,0);this.
N.CF=[this,this.Ew];this.N.C3(A.aaL(A.ach.E2));this.Gd.Zy(A._GetAutoObject(A.Device.
Device).Pv);this.Yx.Zy(A._GetAutoObject(A.Device.Device).Pv);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.Gd._Done();this.AeB._Done();this.Yx._Done();
this.C8._Done();this.I$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Gd._ReInit();this.AeB._ReInit();this.Yx._ReInit();this.C8.
_ReInit();this.I$._ReInit();this.I$.R((A.aaR(A.acf.A8w)+A0v)+A.aaR(A.acf.A6P));this.
CQ();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Gd)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AeB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yx).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.I$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AOt={Auk:null,Auj:null,Aum:null,Aul:null,Auo:null,Aun:null,Auq:null,Aup:null
,AaT:null,YF:null,Abv:null,Abu:null,RatedAttribute:0,Init:function(aArg){this.SP(
2);},DF:function(G){var D5=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D5.CP){case
6:switch(this.RatedAttribute){case 2:this.SP(3);break;case 1:this.SP(2);break;case
4:this.SP(1);break;case 3:this.SP(4);break;default:this.SP(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.SP(1);break;case 1:this.SP(4);break;case 4:this.
SP(3);break;case 3:this.SP(2);break;default:this.SP(0);}break;default:D5.Mx=true;
}},Ap$:function(L_,Ac0){if(!L_)return;var Fx=A._NewObject(A.Device.Filter,0);var
HZ=A._NewObject(A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,Ac0,true);Fx.
CX(HZ);var ABc=A._NewObject(A.Device.AssessmentFilterCriterion,0);ABc.Initialize(
3,5,0,true);Fx.CX(ABc);L_.Bk(Fx);},Aiz:function(G){var Ap9=0;var A4o=A._GetAutoObject(
A.Device.Device).Bt.B8();var B2=A._NewObject(A.Device.Rating,0);while(Ap9<A4o){B2.
E3(Ap9,A._GetAutoObject(A.Device.Device).Bt);this.Bd4(B2,0);var BCT=A._GetAutoObject(
A.Device.Helper).ZY(2);this.Bd4(B2,BCT);Ap9++;}C.FC.Aiz.call(this,G);},Aaz:function(
G){A.pe([this,this.BdH],this);C.FC.Aaz.call(this,G);},Adr:function(G){this.Auk=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aum=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Aun=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Auo=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aup=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auq=A._NewObject(A.Device.Int32ArrayWrapper,0);C.FC.Adr.
call(this,G);},DK:function(G){C.FC.DK.call(this,G);this.N.OW(true);this.N.OX(true
);},Bd4:function(D3,BcC){if(!D3||(D3.Timestamp<BcC))return;if(!BcC){this.Auk.Set(
D3.Appearance,this.Auk.Get(D3.Appearance)+1);this.Aum.Set(D3.Faeces,this.Aum.Get(
D3.Faeces)+1);this.Auo.Set(D3.Feed,this.Auo.Get(D3.Feed)+1);this.Auq.Set(D3.Respiratory
,this.Auq.Get(D3.Respiratory)+1);}else{this.Auj.Set(D3.Appearance,this.Auj.Get(D3.
Appearance)+1);this.Aul.Set(D3.Faeces,this.Aul.Get(D3.Faeces)+1);this.Aun.Set(D3.
Feed,this.Aun.Get(D3.Feed)+1);this.Aup.Set(D3.Respiratory,this.Aup.Get(D3.Respiratory
)+1);}},SP:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
YF.KB(this.AaT.LA(E));A.pe([this,this.BdH],this);},BdH:function(G){var AaU=null;
var AaV=null;switch(this.RatedAttribute){case 2:{AaU=this.Auj;AaV=this.Auk;}break;
case 4:{AaU=this.Aul;AaV=this.Aum;}break;case 1:{AaU=this.Aun;AaV=this.Auo;}break;
case 0:{AaU=A._NewObject(A.Device.Int32ArrayWrapper,0);AaV=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{AaU=this.Aup;AaV=this.Auq;}break;default:throw new
Error(Br6+this.RatedAttribute.toFixed());}var AGE=A._NewObject(A.acv.AUH,0);AGE.
OA(AaU.Get(3),A.jb.E1);AGE.OA(AaU.Get(2),A.jb.Ib);AGE.OA(AaU.Get(1),A.jb.Gk);var
AGF=A._NewObject(A.acv.AUH,0);AGF.OA(AaV.Get(3),A.jb.E1);AGF.OA(AaV.Get(2),A.jb.
Ib);AGF.OA(AaV.Get(1),A.jb.Gk);this.Abu.Acd(AGE);this.Abv.Acd(AGF);var A4S=AaU.Am2(
)-AaU.Get(5);var Bgg=0;var Bge=0;if(A4S>0){Bgg=(AaU.Get(2)/A4S)*100;Bge=(AaU.Get(
1)/A4S)*100;}var ALn=AaV.Am2()-AaV.Get(5);this.I$.Z(!ALn);var Bgh=0;var Bgf=0;if(
ALn>0){Bgh=(AaV.Get(2)/ALn)*100;Bgf=(AaV.Get(1)/ALn)*100;}this.Abu.A$h(A.abk(Bgg
,0,0)+AfK);this.Abu.A_X(A.abk(Bge,0,0)+AfK);this.Abv.A$h(A.abk(Bgh,0,0)+AfK);this.
Abv.A_X(A.abk(Bgf,0,0)+AfK);},_Init:function(aArg){C.FC._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.AaT={I:this},0);C.NP._Init.call(this.
YF={I:this},0);C.AC0._Init.call(this.Abv={I:this},0);C.AC0._Init.call(this.Abu={
I:this},0);this.__proto__=C.AOt;this.Dr(C.APm);this.Akz(A.aaR(A.acf.A6Q));this.Afa(
A.aaR(A.acf.Ans));this.YF.H(I1);this.YF.Aj(true);this.YF.T(A.aaR(A.acf.Axz)+A.aaR(
A.acf.Colon));this.YF.Bi(false);this.YF.BnR(false);this.Abv.H(Br7);this.Abv.T(A.
aaR(A.acf.AGp));this.Abu.H(Br8);this.Abu.T(A.aaR(A.acf.A7V));this.I$.H(Ale);this.
J(this.YF,-1);this.J(this.Abv,-1);this.J(this.Abu,-1);this.Auk=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Auj=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aum=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aul=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Auo=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aun=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Auq=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aup=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.FC;this.AaT._Done();this.YF._Done();this.Abv._Done();this.Abu.
_Done();C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.
AaT._ReInit();this.YF._ReInit();this.Abv._ReInit();this.Abu._ReInit();this.Akz(A.
aaR(A.acf.A6Q));this.Afa(A.aaR(A.acf.Ans));this.YF.T(A.aaR(A.acf.Axz)+A.aaR(A.acf.
Colon));this.Abv.T(A.aaR(A.acf.AGp));this.Abu.T(A.aaR(A.acf.A7V));},_Mark:function(
D){var B;C.FC._Mark.call(this,D);if((B=this.Auk)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Auj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aum)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aul)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Auo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aun)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Auq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aup)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AOu={AeA:null,UW:null,UX:null,Aez:null,UT:null,UU:null,AJ1:0,AJ0:0,AJF:0,AJE:
0,Adk:false,CQ:function(){this.Aaz(this);},Ap$:function(L_,Ac0){if(!L_)return;var
Fx=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,Ac0,true);Fx.CX(HZ);var ABv=A._NewObject(A.Device.Int32FilterCriterion
,0);ABv.Initialize(7,2,0,true);Fx.CX(ABv);L_.Bk(Fx);},Aiz:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AJ1++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AJ0++;var Ap9=0;var A4o=A._GetAutoObject(
A.Device.Device).Bt.B8();var Aui;var ABQ=0;while(Ap9<A4o){this.Adk=true;Aui=A._GetAutoObject(
A.Device.Device).Bt.Ja(Ap9,9);if(Aui===1)ABQ=1;else if((Aui===2)&&(ABQ!==1))ABQ=
2;Ap9++;}if(ABQ===1)this.AJE++;else if(ABQ===2)this.AJF++;C.FC.Aiz.call(this,G);
},Aaz:function(G){var Bgc=0;var Bgd=0;if(this.Tq>0){Bgc=(this.AJ1/this.Tq)*100;Bgd=(
this.AJ0/this.Tq)*100;}this.UW.KB(((((((A.abk(Bgc,0,0)+AIU)+this.AJ1.toFixed())+
CR)+A.aaR(A.acf.AEK))+CR)+this.Tq.toFixed())+Pd);this.UX.KB(((((((A.abk(Bgd,0,0)+
AIU)+this.AJ0.toFixed())+CR)+A.aaR(A.acf.AEK))+CR)+this.Tq.toFixed())+Pd);var Bga=
0;var Bgb=0;if(this.Tq>0){Bga=(this.AJF/this.Tq)*100;Bgb=(this.AJE/this.Tq)*100;
}this.UT.KB(((((((A.abk(Bga,0,0)+AIU)+this.AJF.toFixed())+CR)+A.aaR(A.acf.AEK))+
CR)+this.Tq.toFixed())+Pd);this.UU.KB(((((((A.abk(Bgb,0,0)+AIU)+this.AJE.toFixed(
))+CR)+A.aaR(A.acf.AEK))+CR)+this.Tq.toFixed())+Pd);this.I$.Z(!this.Adk);C.FC.Aaz.
call(this,G);},Adr:function(G){this.AJE=0;this.AJF=0;this.AJ0=0;this.AJ1=0;this.
Adk=false;C.FC.Adr.call(this,G);},_Init:function(aArg){C.FC._Init.call(this,aArg
);C.AgB._Init.call(this.AeA={I:this},0);C.Ajt._Init.call(this.UW={I:this},0);C.Ajt.
_Init.call(this.UX={I:this},0);C.AgB._Init.call(this.Aez={I:this},0);C.Ajt._Init.
call(this.UT={I:this},0);C.Ajt._Init.call(this.UU={I:this},0);this.__proto__=C.AOu;
this.Dr(C.APn);this.Akz(A.aaR(A.acf.A6R));this.Afa(A.aaR(A.acf.ArC));this.AeA.H(
I1);this.AeA.Aj(true);this.AeA.T(A.aaR(A.acf.A6V));this.AeA.Bi(false);this.UW.H(
Qf);this.UW.Aj(true);this.UW.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UW.
Bi(true);this.UW.AkE(2);this.UX.H(Aan);this.UX.Aj(true);this.UX.T(A.aaR(A.acf.AvF
)+A.aaR(A.acf.Colon));this.UX.Bi(true);this.UX.AkE(1);this.Aez.H(Alj);this.Aez.Aj(
true);this.Aez.T(A.aaR(A.acf.A6W));this.Aez.Bi(false);this.UT.H(Aos);this.UT.Aj(
true);this.UT.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UT.Bi(true);this.
UT.AkE(2);this.UU.H(Atf);this.UU.Aj(true);this.UU.T(A.aaR(A.acf.AvF)+A.aaR(A.acf.
Colon));this.UU.Bi(true);this.UU.AkE(1);this.J(this.AeA,0);this.J(this.UW,0);this.
J(this.UX,0);this.J(this.Aez,0);this.J(this.UT,0);this.J(this.UU,0);this.UW.S(A.
aaL(A.fl.Ak));this.UX.S(A.aaL(A.fl.Ak));this.UT.S(A.aaL(A.fl.Ak));this.UU.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.FC;this.AeA._Done();this.UW._Done(
);this.UX._Done();this.Aez._Done();this.UT._Done();this.UU._Done();C.FC._Done.call(
this);},_ReInit:function(){C.FC._ReInit.call(this);this.AeA._ReInit();this.UW._ReInit(
);this.UX._ReInit();this.Aez._ReInit();this.UT._ReInit();this.UU._ReInit();this.
Akz(A.aaR(A.acf.A6R));this.Afa(A.aaR(A.acf.ArC));this.AeA.T(A.aaR(A.acf.A6V));this.
UW.T(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UX.T(A.aaR(A.acf.AvF)+A.aaR(
A.acf.Colon));this.Aez.T(A.aaR(A.acf.A6W));this.UT.T(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.UU.T(A.aaR(A.acf.AvF)+A.aaR(A.acf.Colon));this.UW.S(A.aaL(A.fl.
Ak));this.UX.S(A.aaL(A.fl.Ak));this.UT.S(A.aaL(A.fl.Ak));this.UU.S(A.aaL(A.fl.Ak
));this.CQ();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.AeA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.UW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aez)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UU)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.AqT={Lb:null
,Ajh:null,Aji:null,Amt:null,AbH:null,Xc:null,AbE:null,S$:null,AbF:null,Ta:null,AbI:
null,Xd:null,Ay:null,Adf:0,AAG:0,ApA:0,A28:0,Bez:0,CQ:function(){this.Aaz(this);
},DF:function(G){switch(this.Cr.CP){case 4:{if(this.I$.Fp())return;var QD=this.Y.
Br[1]+80;this.Y.Gc([this.Y.Br[0],QD]);this.Y.VH(null,null);}break;case 5:{if(this.
I$.Fp())return;var QD=this.Y.Br[1]-80;this.Y.Gc([this.Y.Br[0],QD]);this.Y.VH(null
,null);}break;default:C.FC.DF.call(this,G);}},Ap$:function(L_,Ac0){if(!L_)return;
var Fx=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(A.Device.Int32FilterCriterion
,0);HZ.Initialize(1,0,Ac0,true);Fx.CX(HZ);var Ada=A._NewObject(A.Device.Int32FilterCriterion
,0);Ada.Initialize(8,2,0,true);Fx.CX(Ada);L_.Bk(Fx);},Aiz:function(G){if(this.Bep(
)){this.Lb.OA(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Aro()){var Qp=A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(Qp>0){var A2G=A._GetAutoObject(A.acj.DU).AlE(Qp,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.Ajh.
OA(A2G);}}var A3r=A._GetAutoObject(A.Device.Device).Bt.B8()-2;if(A3r>=0){var BAJ=
A._GetAutoObject(A.Device.Device).Bt.ADk(A3r,8);var BAI=A._GetAutoObject(A.Device.
Device).Bt.Hw(A3r,6);var Qp=A._GetAutoObject(A.Device.Helper).Mf(BAI,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(Qp>0){var A2G=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-BAJ)/Qp)|0;this.Aji.OA(A2G);}}if((A._GetAutoObject(
A.Device.Helper).W.Aro()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.RU()<=180)){var ALL=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Ty=A._GetAutoObject(A.Device.
Helper).Mf(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var BB0=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(ALL/Ty);this.Amt.OA(BB0);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.Adf++;this.ApA=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).ZY(7)){this.AAG++;this.A28=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bez=A._GetAutoObject(A.Device.Helper).Mf(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dv());}}C.FC.Aiz.call(
this,G);},Aaz:function(G){var A5d=this.Ajh.AjP()|0;var A5f=this.Aji.AjP()|0;if(this.
Adf>1)A._GetAutoObject(A.Device.Device).AZ(56,true,this.Adf.toFixed(),0,null);if(
this.Adf===1)A._GetAutoObject(A.Device.Device).AZ(53,true,this.ApA.toFixed(),0,null
);if(this.AAG>1)A._GetAutoObject(A.Device.Device).AZ(52,true,this.AAG.toFixed(),
0,null);if(this.AAG===1)A._GetAutoObject(A.Device.Device).AZ(57,true,(this.A28.toFixed(
)+Ati)+this.Bez.toFixed(),0,null);if(this.Lb.A0>0)this.Xc.T(((((((A._GetAutoObject(
A.Device.Converter).Ax$(this.Lb.AjP()|0,1)+AyT)+A._GetAutoObject(A.Device.Converter
).Ax$(this.Lb.Aq4()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af8())+AyU)+this.Lb.A0.
toFixed())+Pd);else this.Xc.T(A.aaR(A.acf.Unknown));if(this.Ajh.A0>0)this.S$.T(((((((
A._GetAutoObject(A.Device.Converter).Te(A5d,2,true)+AyT)+A._GetAutoObject(A.Device.
Converter).Te(this.Ajh.Aq4()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).AaE())+AyU
)+this.Ajh.A0.toFixed())+Pd);else this.S$.T(A.aaR(A.acf.Unknown));if(this.Aji.A0>
0)this.Ta.T(((((((A._GetAutoObject(A.Device.Converter).Te(A5f,2,true)+AyT)+A._GetAutoObject(
A.Device.Converter).Te(this.Aji.Aq4()|0,2,true))+CR)+A._GetAutoObject(A.acj.DU).
AaE())+AyU)+this.Aji.A0.toFixed())+Pd);else this.Ta.T(A.aaR(A.acf.Unknown));if(this.
Amt.A0>0)this.Xd.T(((((((A.abk(this.Amt.AjP(),0,1)+AyT)+A.abk(this.Amt.Aq4(),0,1
))+CR)+A.aaR(A.acf.Bix))+AyU)+this.Amt.A0.toFixed())+Pd);else this.Xd.T(A.aaR(A.
acf.Unknown));var A5e=0;var A5g=0;var Adk=false;if(this.Lb.A0>0)Adk=true;var Ih=
0;if(!!A._GetAutoObject(A.Device.Device).An.Filter){var AKi=A._GetAutoObject(A.Device.
Device).An.Filter.DM(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AKi)?AKi:null))Ih=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AKi)?AKi:null
).A5;}if(this.Ajh.A0>0){Adk=true;A5e=A._GetAutoObject(A.Device.Converter).BaE(A5d
,Ih);}if(this.Aji.A0>0){Adk=true;A5g=A._GetAutoObject(A.Device.Converter).BaE(A5f
,Ih);}this.S$.AkE(A5e);this.Ta.AkE(A5g);this.I$.Z(!Adk);C.FC.Aaz.call(this,G);},
Adr:function(G){this.Lb.Yq();this.Ajh.Yq();this.Aji.Yq();this.Amt.Yq();this.Adf=
0;this.AAG=0;this.ApA=0;this.A28=0;C.FC.Adr.call(this,G);},Fj:function(G){var B;
this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.
MI(-this.Y.Br[1]);},Bep:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},_Init:function(aArg){C.FC._Init.call(this,aArg);C.AgB._Init.call(this.AbH={I:
this},0);C.IK._Init.call(this.Xc={I:this},0);C.AgB._Init.call(this.AbE={I:this},
0);C.Ajt._Init.call(this.S$={I:this},0);C.AgB._Init.call(this.AbF={I:this},0);C.
Ajt._Init.call(this.Ta={I:this},0);C.AgB._Init.call(this.AbI={I:this},0);C.IK._Init.
call(this.Xd={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);this.__proto__=C.AqT;
this.Dr(C.AvE);this.Akz(A.aaR(A.acf.A6S));this.Afa(A.aaR(A.acf.Akm));this.AbH.H(
Atp);this.AbH.Aj(true);this.AbH.T(A.aaR(A.acf.A5O));this.AbH.Bi(false);this.AbH.
Kz(5);this.Xc.H(A0w);this.Xc.Aj(true);this.Xc.T(A.jV);this.Xc.Bi(true);this.AbE.
H(Atm);this.AbE.Aj(true);this.AbE.T(A.aaR(A.acf.AL_));this.AbE.Bi(false);this.AbE.
Kz(5);this.S$.H(Atn);this.S$.Aj(true);this.S$.T(A.jV);this.S$.Bi(true);this.S$.KB(
A.jV);this.AbF.H(Ato);this.AbF.Aj(true);this.AbF.T(A.aaR(A.acf.AuI));this.AbF.Bi(
false);this.AbF.Kz(5);this.Ta.H(Br9);this.Ta.Aj(true);this.Ta.T(A.jV);this.Ta.Bi(
true);this.Ta.KB(A.jV);this.AbI.H(A0x);this.AbI.Aj(true);this.AbI.T(A.aaR(A.acf.
A5W));this.AbI.Bi(false);this.AbI.Kz(5);this.Xd.H(AoA);this.Xd.Aj(true);this.Xd.
T(A.jV);this.Xd.Bi(true);this.Ay.H(Ix);this.J(this.AbH,-1);this.J(this.Xc,-1);this.
J(this.AbE,-1);this.J(this.S$,-1);this.J(this.AbF,-1);this.J(this.Ta,-1);this.J(
this.AbI,-1);this.J(this.Xd,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fj];this.
Lb=A._NewObject(C.AvX,0);this.Ajh=A._NewObject(C.AvX,0);this.Aji=A._NewObject(C.
AvX,0);this.Xc.S(A.aaL(A.fl.Af));this.S$.S(A.aaL(A.fl.Ak));this.Ta.S(A.aaL(A.fl.
Ak));this.Xd.S(A.aaL(A.fl.Ak));this.Amt=A._NewObject(C.A62,0);},_Done:function(){
this.__proto__=C.FC;this.AbH._Done();this.Xc._Done();this.AbE._Done();this.S$._Done(
);this.AbF._Done();this.Ta._Done();this.AbI._Done();this.Xd._Done();this.Ay._Done(
);C.FC._Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.AbH._ReInit(
);this.Xc._ReInit();this.AbE._ReInit();this.S$._ReInit();this.AbF._ReInit();this.
Ta._ReInit();this.AbI._ReInit();this.Xd._ReInit();this.Ay._ReInit();this.Akz(A.aaR(
A.acf.A6S));this.Afa(A.aaR(A.acf.Akm));this.AbH.T(A.aaR(A.acf.A5O));this.AbE.T(A.
aaR(A.acf.AL_));this.AbF.T(A.aaR(A.acf.AuI));this.AbI.T(A.aaR(A.acf.A5W));this.Xc.
S(A.aaL(A.fl.Af));this.S$.S(A.aaL(A.fl.Ak));this.Ta.S(A.aaL(A.fl.Ak));this.Xd.S(
A.aaL(A.fl.Ak));this.CQ();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((
B=this.Lb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ajh)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aji)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amt)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Xc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ta)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.AbD={_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.AbD;this.
Df.Ax(A.aaL(A.ach.ADT));},_className:"Application::HeaderEvaluationFilter"};C.Kv={
CQ:function(){this.Text.R(A.aaR(A.acf.None));},DX:function(G){C.AjS.DX.call(this
,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(A._GetAutoObject(A.Device.
Device).Ko));},_Init:function(aArg){C.AjS._Init.call(this,aArg);this.__proto__=C.
Kv;},_ReInit:function(){C.AjS._ReInit.call(this);this.CQ();},_className:"Application::HeaderListFilter"
};C.AvE={Init:function(aArg){this.Df.Ax(A._GetAutoObject(A.acj.DU).BdX());},_Init:
function(aArg){C.AbD._Init.call(this,aArg);this.__proto__=C.AvE;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.APn={Init:function(
aArg){this.Df.Ax(A.aaL(A.ach.Ag8));},_Init:function(aArg){C.AbD._Init.call(this,
aArg);this.__proto__=C.APn;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.APm={Init:function(aArg){this.Df.Ax(A.aaL(A.ach.Arj));},_Init:function(aArg){
C.AbD._Init.call(this,aArg);this.__proto__=C.APm;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.APl={Sr:null,Df:null,AP:null,CQ:function(){this.Sr.R(A.aaR(A.acf.ANq));},Dg:
function(E){C.BR.Dg.call(this,E);this.Sr.L(E);this.Df.L(E);},_Init:function(aArg
){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Sr={I:this},0);A.acg.Ap._Init.
call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this},0);this.__proto__=
C.APl;this.Sr.H(Br_);this.Sr.R(A.aaR(A.acf.ANq));this.Sr.A6(0x11);this.Df.H(Br$);
this.AP.DD(Bsa);this.AP.DN(Bsb);this.AP.L(A.jb.Bc);this.J(this.Sr,0);this.J(this.
Df,0);this.J(this.AP,0);this.Sr.S(A.aaL(A.fl.Af));this.Sr.AY(A.aaL(A.fl.Ak));this.
Df.Ax(A.aaL(A.ach.AQz));},_Done:function(){this.__proto__=C.BR;this.Sr._Done();this.
Df._Done();this.AP._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.
call(this);this.Sr._ReInit();this.Df._ReInit();this.AP._ReInit();this.Sr.R(A.aaR(
A.acf.ANq));this.Sr.S(A.aaL(A.fl.Af));this.Sr.AY(A.aaL(A.fl.Ak));this.CQ();},_Mark:
function(D){var B;C.BR._Mark.call(this,D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.AeB={T4:null,Aj2:
null,AjZ:null,Aj0:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.T4={I:this},0);A.acg.Ap._Init.call(this.Aj2={I:this},0);A.acg.Ap._Init.
call(this.AjZ={I:this},0);A.acg.Ap._Init.call(this.Aj0={I:this},0);this.__proto__=
C.AeB;this.T4.H(Bsc);this.T4.R(A.aaR(A.acf.Year));this.T4.A6(0x11);this.T4.L(A.jb.
Text);this.Aj2.H(BaX);this.Aj2.L(A.jb.Text);this.AjZ.H(Bsd);this.AjZ.L(A.jb.Text
);this.Aj0.H(Bse);this.Aj0.L(A.jb.Text);this.J(this.T4,0);this.J(this.Aj2,0);this.
J(this.AjZ,0);this.J(this.Aj0,0);this.T4.S(A.aaL(A.fl.Kt));this.T4.AY(A.aaL(A.fl.
HL));this.Aj2.Ax(A.aaL(A.ach.AQN));this.AjZ.Ax(A.aaL(A.ach.AQM));this.Aj0.Ax(A.aaL(
A.ach.AQU));},_Done:function(){this.__proto__=C.EB;this.T4._Done();this.Aj2._Done(
);this.AjZ._Done();this.Aj0._Done();C.EB._Done.call(this);},_ReInit:function(){C.
EB._ReInit.call(this);this.T4._ReInit();this.Aj2._ReInit();this.AjZ._ReInit();this.
Aj0._ReInit();this.T4.R(A.aaR(A.acf.Year));this.T4.S(A.aaL(A.fl.Kt));this.T4.AY(
A.aaL(A.fl.HL));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.T4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aj0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.AmT={Ajz:null,AP:null
,A$:null,Ea:null,UQ:null,S2:null,Gv:null,XS:0,AtT:0,AlI:0,ABR:0,Init:function(aArg
){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.S2.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A$.H([this.S2.M[2]-1,0,this.S2.M[
2]+1,aSize[1]]);this.UQ.H([this.S2.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
Ea.H([this.UQ.M[2]-1,0,this.UQ.M[2]+1,aSize[1]]);this.Gv.H([this.UQ.M[2],0,aSize[
0],aSize[1]]);this.Ajz.H(this.Gv.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
T(this.ABR.toFixed());this.S2.L(this.V.AQ);this.S2.R(this.AlI.toFixed());this.UQ.
L(this.V.AQ);this.UQ.R(this.AtT.toFixed());var B2=this.BBZ(this.XS);this.Gv.L(A.
_GetAutoObject(A.acj.Assessment).XH(B2));this.Ajz.L(A._GetAutoObject(A.acj.Assessment
).Qu(B2));this.Gv.R(A.abk(this.XS,0,0)+AfK);},Ch:function(Ad){if(!this.AX)return;
this.Ht=Ad;Ad=(this.AX.B8()-Ad)-1;if(!!this.AX){this.AlI=this.AX.CC(Ad,1);this.AtT=
this.AX.CC(Ad,2);this.ABR=this.AX.CC(Ad,0);if(this.AlI>0)this.XS=(this.AtT/this.
AlI)*100;else this.XS=0;this.Am();}},BBZ:function(XS){if(XS>=8)return 1;else if(
XS>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AL._Init.call(this.Ajz={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.
acg.AL._Init.call(this.A$={I:this},0);A.acg.AL._Init.call(this.Ea={I:this},0);A.
acg.Text._Init.call(this.UQ={I:this},0);A.acg.Text._Init.call(this.S2={I:this},0
);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.AmT;this.Ajz.H(Aoq);
this.AP.L(A.jb.Bc);this.A$.L(A.jb.Bc);this.Ea.H(Aoq);this.Ea.L(A.jb.Bc);this.UQ.
L(A.jb.Text);this.S2.H(Aoq);this.S2.L(A.jb.Text);this.Gv.L(A.jb.Text);this.J(this.
Ajz,0);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.J(this.UQ,0);this.
J(this.S2,0);this.J(this.Gv,0);this.UQ.S(A.aaL(A.fl.Af));this.S2.S(A.aaL(A.fl.Af
));this.Gv.S(A.aaL(A.fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ajz._Done();this.AP._Done();this.A$._Done();this.Ea._Done();this.UQ._Done(
);this.S2._Done();this.Gv._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ajz._ReInit();this.AP._ReInit();this.A$._ReInit();this.Ea.
_ReInit();this.UQ._ReInit();this.S2._ReInit();this.Gv._ReInit();this.UQ.S(A.aaL(
A.fl.Af));this.S2.S(A.aaL(A.fl.Af));this.Gv.S(A.aaL(A.fl.Af));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ajz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.S2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gv)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ajt={
BU:null,Ax6:A.jV,Rating:0,Ai:function(Ae){C.IK.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qu(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).XH(this.Rating));}this.BU.L(this.V.AQ);},S:function(
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
N$:null,SS:null,V:null,AnU:null,AnT:null,Acn:null,Acm:null,DL:LB,BaJ:A.jV,A$D:A.
jV,Acd:function(E){if(this.N$===E)return;this.N$=E;this.SS.Acd(this.N$);},T:function(
E){if(this.DL===E)return;this.DL=E;this.V.R(E);},A$h:function(E){if(this.BaJ===E
)return;this.BaJ=E;this.Acn.R(E);},A_X:function(E){if(this.A$D===E)return;this.A$D=
E;this.Acm.R(E);},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acv.SS._Init.
call(this.SS={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AL._Init.
call(this.AnU={I:this},0);A.acg.AL._Init.call(this.AnT={I:this},0);A.acg.Text._Init.
call(this.Acn={I:this},0);A.acg.Text._Init.call(this.Acm={I:this},0);this.__proto__=
C.AC0;this.H(Bsf);this.SS.H(Bsg);this.SS.As(false);this.SS.Bn0(360);this.SS.Bn_(
0.5);this.V.A1(0x1D);this.V.H(Tg);this.V.Lv(true);this.V.R(LB);this.V.L(A.jb.Text
);this.AnU.H(BaY);this.AnU.L(A.jb.Ib);this.AnT.H(BaZ);this.AnT.L(A.jb.Gk);this.Acn.
A1(0x1D);this.Acn.H(BaY);this.Acn.L(A.jb.Text);this.Acm.A1(0x1D);this.Acm.H(BaZ);
this.Acm.L(A.jb.CU);this.J(this.SS,0);this.J(this.V,0);this.J(this.AnU,0);this.J(
this.AnT,0);this.J(this.Acn,0);this.J(this.Acm,0);this.SS.Boa(A.aaL(A.acv.AUg));
this.V.S(A.aaL(A.fl.Ak));this.Acn.S(A.aaL(A.fl.Ak));this.Acm.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.P;this.SS._Done();this.V._Done();this.AnU.
_Done();this.AnT._Done();this.Acn._Done();this.Acm._Done();A.Core.P._Done.call(this
);},_ReInit:function(){A.Core.P._ReInit.call(this);this.SS._ReInit();this.V._ReInit(
);this.AnU._ReInit();this.AnT._ReInit();this.Acn._ReInit();this.Acm._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.Acn.S(A.aaL(A.fl.Ak));this.Acm.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.N$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AnU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AkT={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.P._Init.call(this
,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AkT;this.H(U6);this.Background.A1(0x3F);this.Background.
H(U6);this.Background.L(A.jb.Bky);this.Text.A1(0x3F);this.Text.H(U6);this.Text.A6(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.P;this.Background._Done();this.Text._Done();A.Core.P._Done.call(this);},_ReInit:
function(){A.Core.P._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.P._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Rg={Ak4:null,N0:null,C_:null,AcJ:null,JT:null,TemperatureUnit:null,MP:null,P1:
null,So:null,UF:null,Lw:null,Jk:null,Z$:null,Z_:null,Sp:null,HH:null,AjI:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).AlQ());
this.UF.R(A._GetAutoObject(A.acj.Temperature).AlQ());this.Sp.Z(!A._GetAutoObject(
A.Device.Device).AmV);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Aoa();this.Ax3(
);this.Z9();this.Ax4();},H1:function(G){this.W3(this);},CD:function(G){var B;C.AB.
CD.call(this,G);A.zX([this,this.AKP],[B=A._GetAutoObject(A.Device.Device),B.AEW,
B.AI6],0);A.zX([this,this.AAW],[B=A._GetAutoObject(A.Device.Device),B.AE0,B.AI8]
,0);A.zX([this,this.AAW],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0N],0);A.
zX([this,this.A3M],[B=A._GetAutoObject(A.Device.Device),B.ArF,B.Att],0);A.zX([this
,this.A3F],[B=A._GetAutoObject(A.Device.Device),B.AET,B.AI3],0);A._GetAutoObject(
A.Device.Device).AhP();if(A._GetAutoObject(A.Device.Device).AmV)A._GetAutoObject(
A.Device.Device).Ae4(true);A._GetAutoObject(A.Device.Device).AxP();A.pe([this,this.
A3F],this);A.pe([this,this.AAW],this);A.pe([this,this.A3M],this);},E4:function(G
){var B;A._GetAutoObject(A.Device.Device).AhP();A._GetAutoObject(A.Device.Device
).UB(false);A._GetAutoObject(A.Device.Device).Afc(false);A._GetAutoObject(A.Device.
Device).Ae4(false);A.z$([this,this.AKP],[B=A._GetAutoObject(A.Device.Device),B.AEW
,B.AI6],0);A.z$([this,this.AAW],[B=A._GetAutoObject(A.Device.Device),B.AE0,B.AI8
],0);A.z$([this,this.AAW],[B=A._GetAutoObject(A.Device.Device),B.AS0,B.A0N],0);A.
z$([this,this.A3M],[B=A._GetAutoObject(A.Device.Device),B.ArF,B.Att],0);A.z$([this
,this.A3F],[B=A._GetAutoObject(A.Device.Device),B.AET,B.AI3],0);},AAW:function(G
){this.Am();},Aoa:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CK);this.C_.L(A.jb.Gk);this.JT.L(this.C_.AQ);this.
MP.L(this.C_.AQ);this.TemperatureUnit.L(this.C_.AQ);}break;default:{this.Background.
L(A.jb.CK);this.C_.L(A.jb.AV);this.JT.L(A.jb.Text);this.MP.L(this.JT.AQ);this.TemperatureUnit.
L(this.JT.AQ);this.HH.L(A.jb.Gk);}}},Ax3:function(){this.Ak4.As(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JT.R(A.aaR(A.acf.AD_));this.C_.Ax(A.aaL(A.ach.AvQ));this.C_.Cw(0);
this.N0.Cw(0);}break;case 1:{this.AVZ(A._GetAutoObject(A.Device.Device).Lz,false
);this.C_.Ax(A.aaL(A.ach.AvQ));this.N0.Cw(0);}break;case 2:{this.So.R(A._GetAutoObject(
A.Device.Converter).Ak3(A._GetAutoObject(A.Device.Device).AGt));this.AVZ(A._GetAutoObject(
A.Device.Device).Lz,false);this.C_.Ax(null);this.N0.Cw(1);this.AcJ.Z(true);this.
P1.Z(true);this.So.Z(true);this.UF.Z(true);}break;case 3:{this.AU2();this.AVZ(A.
_GetAutoObject(A.Device.Device).Lz,true);this.AcJ.Z(false);this.P1.Z(false);this.
So.Z(false);this.UF.Z(false);}break;case 4:{this.JT.R(A.aaR(A.acf.BkM));this.MP.
R(A.aaR(A.acu.Akl));this.C_.Ax(A.aaL(A.ach.AvS));this.C_.Cw(2);this.N0.Cw(0);}break;
default:A.ab5("%s%e",AId,A._GetAutoObject(A.Device.Device).MeasureState);}},Z9:function(
){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{if((A._GetAutoObject(
A.Device.Device).Lz<=3240)||(A._GetAutoObject(A.Device.Device).Lz>=5460))this.N.
C4(null);else this.N.C4(A.aaL(A.ach.AeE));this.N.Ct(null);}break;default:;}},AsN:
function(G){A._GetAutoObject(C.A7).FB();},W3:function(G){},A01:function(s){this.
W3(s);},AkY:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case
0:case 1:this.BBM(this);break;default:;}},A00:function(s){this.AkY(s);},AVZ:function(
AoT,BAx){if(BAx)this.Lw.L(A.jb.Bm);else this.Lw.L(A.jb.Gk);if(AoT<=3240){this.MP.
Z(false);this.TemperatureUnit.Z(false);this.Lw.Z(true);this.Lw.R(A.aaR(A.acu.AVI
));}else if(AoT>=5460){this.MP.Z(false);this.TemperatureUnit.Z(false);this.Lw.Z(
true);this.Lw.R(A.aaR(A.acu.BqA));}else{this.MP.Z(true);this.TemperatureUnit.Z(true
);this.Lw.Z(false);this.MP.R(A._GetAutoObject(A.Device.Converter).Ak3(AoT));}},Ax4:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:
if((A._GetAutoObject(A.Device.Device).Lz<=3240)||(A._GetAutoObject(A.Device.Device
).Lz>=5460))this.JT.R(A.aaR(A.acf.AD_));else this.JT.R(A.aaR(A.acf.Bq_));break;default:;
}},Ax5:function(){},BqT:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.Z$.As(true);break;case 4:this.Z_.As(true);break;default:{this.Z$.As(
false);this.Z_.As(false);A._GetAutoObject(A.Device.Device).Afc(false);}}},AKP:function(
G){this.Am();this.Ax5();this.BqT();this.BqR();},A3M:function(G){if(A._GetAutoObject(
A.Device.Device).AmW){this.Sp.L(A.jb.Ib);this.Sp.Cw(1);}else{this.Sp.L(A.jb.Bm);
this.Sp.Cw(0);}},BBM:function(G){if(!A._GetAutoObject(A.Device.Device).AmV)A._GetAutoObject(
A.Device.Device).Ae4(!A._GetAutoObject(A.Device.Device).AmW);},BqR:function(){if(
A._GetAutoObject(A.Device.Device).AmV){this.Sp.Z(false);if(A._GetAutoObject(A.Device.
Device).MeasureState===1)A._GetAutoObject(A.Device.Device).Ae4(true);else A._GetAutoObject(
A.Device.Device).Ae4(false);}else if(A._GetAutoObject(A.Device.Device).MeasureState===
1)this.Sp.Z(true);else this.Sp.Z(false);},AKR:function(G){this.CD(this);},AU2:function(
){A.ab5("%s",BaW);},A3F:function(G){if(A._GetAutoObject(A.Device.Device).HH){this.
JT.H(Bsh);this.MP.H(Bsi);this.TemperatureUnit.H(Bsj);}else{this.JT.H(Bsk);this.MP.
H(Bsl);this.TemperatureUnit.H(Bsm);}},_Init:function(aArg){C.AB._Init.call(this,
aArg);A.acl.Gn._Init.call(this.Ak4={I:this},0);A.acg.Ap._Init.call(this.N0={I:this
},0);A.acg.Ap._Init.call(this.C_={I:this},0);A.acg.Ap._Init.call(this.AcJ={I:this
},0);A.acg.Text._Init.call(this.JT={I:this},0);A.acg.Text._Init.call(this.TemperatureUnit={
I:this},0);A.acg.Text._Init.call(this.MP={I:this},0);A.acg.Text._Init.call(this.
P1={I:this},0);A.acg.Text._Init.call(this.So={I:this},0);A.acg.Text._Init.call(this.
UF={I:this},0);C.CG._Init.call(this.Lw={I:this},0);A.Device.TR._Init.call(this.Jk={
I:this},0);A.Device.TR._Init.call(this.Z$={I:this},0);A.Device.TR._Init.call(this.
Z_={I:this},0);A.acg.Ap._Init.call(this.Sp={I:this},0);C.CG._Init.call(this.HH={
I:this},0);A.acl.TR._Init.call(this.AjI={I:this},0);this.__proto__=C.Rg;var B;this.
N.Z(true);this.Ak4.Fq(1000);this.Ak4.B3=2;this.N0.H(Bsn);this.N0.L(A.jb.CU);this.
C_.H(Bso);this.C_.L(A.jb.AV);this.C_.Cw(0);this.C_.Z(true);this.AcJ.H(Bsp);this.
AcJ.L(A.jb.Text);this.AcJ.Z(false);this.JT.Lv(true);this.JT.R(A.aaR(A.acf.AD_));
this.JT.L(A.jb.Text);this.TemperatureUnit.A6(0x9);this.TemperatureUnit.L(A.jb.Text
);this.MP.A6(0x14);this.MP.R(A.aaR(A.acu.Akl));this.MP.L(A.jb.Text);this.P1.H(Bsq
);this.P1.R(A.aaR(A.acf.P1));this.P1.L(A.jb.Text);this.P1.Z(false);this.So.H(Bsr
);this.So.A6(0x14);this.So.R(Bss);this.So.L(A.jb.Text);this.So.Z(false);this.UF.
H(Bst);this.UF.R(Bsu);this.UF.L(A.jb.Text);this.UF.Z(false);this.Lw.H(Bsv);this.
Lw.R(A.aaR(A.acu.AVI));this.Lw.A6(0x12);this.Lw.L(A.jb.Gk);this.Jk.B3=false;this.
Jk.Cx=true;this.Jk.HQ(1);this.Jk.Fq(4000);this.Jk.Uy(0);this.Z$.B3=false;this.Z$.
Cx=true;this.Z$.HQ(2);this.Z$.Fq(400);this.Z$.Uy(200);this.Z_.B3=false;this.Z_.Cx=
true;this.Z_.HQ(3);this.Z_.Fq(500);this.Z_.Uy(250);this.Sp.H(Bsw);this.HH.H(Bsx);
this.HH.Z(A._GetAutoObject(A.Device.Device).HH);this.HH.R(A.aaR(A.acf.HH));this.
HH.A6(0x12);this.HH.L(A.jb.Gk);this.AjI.As(A._GetAutoObject(A.Device.Device).HH);
this.AjI.Fq(500);this.AjI.Uy(1000);this.J(this.N0,0);this.J(this.C_,0);this.J(this.
AcJ,0);this.J(this.JT,0);this.J(this.TemperatureUnit,0);this.J(this.MP,0);this.J(
this.P1,0);this.J(this.So,0);this.J(this.UF,0);this.J(this.Lw,0);this.J(this.Sp,
0);this.J(this.HH,0);this.N.CF=[this,this.AsN];this.N.Ce=[this,this.A00];this.N.
Ca=[this,this.A01];this.N.C3(A.aaL(A.ach.AeD));this.Ak4.Q=[B=this.C_,B.ASR,B.Cw];
this.N0.Ax(A.aaL(A.ach.N0));this.C_.Ax(A.aaL(A.ach.AvQ));this.AcJ.Ax(A.aaL(A.ach.
AQ9));this.JT.S(A.aaL(A.fl.Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MP.S(
A.aaL(A.fl.Aew));this.P1.S(A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.EK));this.UF.S(A.
aaL(A.fl.EK));this.Lw.S(A.aaL(A.fl.Aew));this.Lw.AY(A.aaL(A.fl.EK));this.Lw.Cm(A.
aaL(A.fl.Af));this.Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.AS8,B.A0T];this.Z$.
Q=[B=A._GetAutoObject(A.Device.Device),B.AE1,B.AI9];this.Z_.Q=[B=A._GetAutoObject(
A.Device.Device),B.AE1,B.AI9];this.Sp.Ax(A.aaL(A.ach.AqW));this.HH.S(A.aaL(A.fl.
EK));this.HH.AY(A.aaL(A.fl.Kt));this.HH.Cm(A.aaL(A.fl.HL));this.AjI.Q=[B=this.HH
,B.Fp,B.Z];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ak4._Done(
);this.N0._Done();this.C_._Done();this.AcJ._Done();this.JT._Done();this.TemperatureUnit.
_Done();this.MP._Done();this.P1._Done();this.So._Done();this.UF._Done();this.Lw.
_Done();this.Jk._Done();this.Z$._Done();this.Z_._Done();this.Sp._Done();this.HH.
_Done();this.AjI._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ak4._ReInit();this.N0._ReInit();this.C_._ReInit();this.AcJ._ReInit(
);this.JT._ReInit();this.TemperatureUnit._ReInit();this.MP._ReInit();this.P1._ReInit(
);this.So._ReInit();this.UF._ReInit();this.Lw._ReInit();this.Jk._ReInit();this.Z$.
_ReInit();this.Z_._ReInit();this.Sp._ReInit();this.HH._ReInit();this.AjI._ReInit(
);this.JT.R(A.aaR(A.acf.AD_));this.MP.R(A.aaR(A.acu.Akl));this.P1.R(A.aaR(A.acf.
P1));this.Lw.R(A.aaR(A.acu.AVI));this.HH.R(A.aaR(A.acf.HH));this.JT.S(A.aaL(A.fl.
Af));this.TemperatureUnit.S(A.aaL(A.fl.Af));this.MP.S(A.aaL(A.fl.Aew));this.P1.S(
A.aaL(A.fl.Af));this.So.S(A.aaL(A.fl.EK));this.UF.S(A.aaL(A.fl.EK));this.Lw.S(A.
aaL(A.fl.Aew));this.Lw.AY(A.aaL(A.fl.EK));this.Lw.Cm(A.aaL(A.fl.Af));this.HH.S(A.
aaL(A.fl.EK));this.HH.AY(A.aaL(A.fl.Kt));this.HH.Cm(A.aaL(A.fl.HL));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ak4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AcJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
MP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.So)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Z$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjI)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::TemperatureScreen"};C.AVx={Z9:function(){C.Rg.Z9.call(this
);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:case 4:{this.N.Ct(
null);this.N.C4(A.aaL(A.ach.AvT));}break;default:;}},W3:function(G){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).Lz>3240)&&(A._GetAutoObject(A.Device.Device).Lz<5460)){A._GetAutoObject(A.Device.
Device).AhP();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:case 4:this.AKR(this);break;default:;}},Ax4:function(){C.Rg.Ax4.call(this);switch(
A._GetAutoObject(A.Device.Device).MeasureState){case 3:this.JT.R(A.aaR(A.acf.BkN
));break;default:;}},Ax5:function(){C.Rg.Ax5.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 4:{A._GetAutoObject(A.Device.Device).WR(16711680
);this.Jk.As(true);}break;default:this.Jk.As(false);}},AU2:function(){this.C_.Ax(
A.aaL(A.ach.AvS));this.C_.Cw(0);this.N0.Cw(0);},_Init:function(aArg){C.Rg._Init.
call(this,aArg);this.__proto__=C.AVx;this.Dr(C.APj);},_className:"Application::TemperatureMeasurementScreen"
};C.APo={Df:null,IR:null,N2:null,AP:null,Ag_:null,A$:null,Dg:function(E){C.BR.Dg.
call(this,E);this.Df.L(E);this.IR.L(E);this.N2.L(E);this.Ag_.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.Ap.
_Init.call(this.IR={I:this},0);A.acg.Ap._Init.call(this.N2={I:this},0);A.acg.C8.
_Init.call(this.AP={I:this},0);A.acg.Ap._Init.call(this.Ag_={I:this},0);A.acg.C8.
_Init.call(this.A$={I:this},0);this.__proto__=C.APo;this.Df.H(AyM);this.IR.H(Ayp
);this.N2.H(AHS);this.AP.DD(Ba0);this.AP.DN(Ba1);this.AP.L(A.jb.Bc);this.Ag_.H(Bsy
);this.Ag_.L(A.jb.CU);this.A$.DD(Bsz);this.A$.DN(BsA);this.A$.L(A.jb.Bc);this.J(
this.Df,0);this.J(this.IR,0);this.J(this.N2,0);this.J(this.AP,0);this.J(this.Ag_
,0);this.J(this.A$,0);this.Df.Ax(A.aaL(A.ach.ADT));this.IR.Ax(A.aaL(A.ach.AeF));
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
Ja(Ad,13));this.DS.Ae5(A._GetAutoObject(A.Device.Device).An.H7(Ad,8));this.DS.Uz(
A._GetAutoObject(A.Device.Device).An.H7(Ad,11));this.DS.Ae9(A._GetAutoObject(A.Device.
Device).An.H7(Ad,12));this.DS.Ae$(A._GetAutoObject(A.Device.Device).An.CC(Ad,5));
},A_0:function(E){if(this.AGO===E)return;this.AGO=E;A.pe([this,this.ALx],this);}
,A_q:function(E){if(this.ANY===E)return;this.ANY=E;A.pe([this,this.ALx],this);},
A9B:function(){return this.AGO;},_Init:function(aArg){C.EB._Init.call(this,aArg);
C.CG._Init.call(this.Es={I:this},0);C.DS._Init.call(this.DS={I:this},0);this.__proto__=
C.De;this.Es.H(BsB);this.Es.R(A.aaR(A.acf.GN));this.Es.A6(0x11);this.Es.L(A.jb.Text
);this.DS.H(A0y);this.J(this.Es,0);this.J(this.DS,0);this.Es.S(A.aaL(A.fl.Af));this.
Es.AY(A.aaL(A.fl.Ak));this.Es.Cm(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.EB;this.Es._Done();this.DS._Done();C.EB._Done.call(this);},_ReInit:
function(){C.EB._ReInit.call(this);this.Es._ReInit();this.DS._ReInit();this.Es.R(
A.aaR(A.acf.GN));this.Es.S(A.aaL(A.fl.Af));this.Es.AY(A.aaL(A.fl.Ak));this.Es.Cm(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.EB._Mark.call(this,D);if((B=this.Es).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Ku={AgR:null,Text:null,Afo:null,Dg:function(E
){C.BR.Dg.call(this,E);this.AgR.L(E);this.Text.L(E);this.Afo.L(E);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.AgR={I:this},0);C.CG._Init.
call(this.Text={I:this},0);A.acg.Ap._Init.call(this.Afo={I:this},0);this.__proto__=
C.Ku;this.AgR.H(BsC);this.AgR.L(A.jb.Text);this.Text.H(BsD);this.Text.As(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.Afo.H(BsE);this.Afo.L(A.jb.Text);this.
J(this.AgR,0);this.J(this.Text,0);this.J(this.Afo,0);this.AgR.Ax(A.aaL(A.ach.APq
));this.Text.S(A.aaL(A.fl.Kt));this.Text.AY(A.aaL(A.fl.HL));},_Done:function(){this.
__proto__=C.BR;this.AgR._Done();this.Text._Done();this.Afo._Done();C.BR._Done.call(
this);},_ReInit:function(){C.BR._ReInit.call(this);this.AgR._ReInit();this.Text.
_ReInit();this.Afo._ReInit();this.Text.S(A.aaL(A.fl.Kt));this.Text.AY(A.aaL(A.fl.
HL));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.AgR)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afo
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.APh={
_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APh;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.APj={_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APj;this.J5(this.Afo,-2);this.
Afo.Ax(A.aaL(A.ach.Ag8));},_className:"Application::HeaderDeviceTemperature"};C.
Yx={Ai:function(Ae){C.AmT.Ai.call(this,Ae);this.T(A.aaR(A.acf.BqB)+A.aaR(A.acf.Colon
));},Ch:function(Ad){var B;if(!this.AX)return;this.AlI=0;this.AtT=0;this.XS=0;if(
!!this.AX){var O;for(O=0;O<this.AX.B8();O++){this.AlI+=this.AX.CC(O,1);this.AtT+=
this.AX.CC(O,2);}if(this.AlI>0)this.XS=(this.AtT/this.AlI)*100;this.Am();}},_Init:
function(aArg){C.AmT._Init.call(this,aArg);this.__proto__=C.Yx;this.AP.Z(false);
this.A$.Z(false);this.Ea.Z(false);this.V.S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.
HL));},_ReInit:function(){C.AmT._ReInit.call(this);this.V.S(A.aaL(A.fl.Kt));this.
V.AY(A.aaL(A.fl.HL));},_className:"Application::EvaluationLossesSumItem"};C.A61={
Ah:null,A5:0,_Init:function(aArg){this.__proto__=C.A61;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ah)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A62={K5:null,M4:null,A0:0,Yq:function(){this.K5=null;this.M4=null;this.A0=0;
},OA:function(A8){var Hj;Hj=A._NewObject(C.A61,0);Hj.A5=A8;if(!this.K5){this.K5=
Hj;this.M4=Hj;this.A0=1;}else{this.M4.Ah=Hj;this.M4=Hj;this.A0=this.A0+1;}},Am2:
function(){var B;var RR=0;var Op=this.K5;while(!!Op){RR+=Op.A5;Op=Op.Ah;}return RR;
},AjP:function(){if(!this.A0)return 0;return this.Am2()/this.A0;},Aq4:function(){
var B;if(!this.A0)return 0;var A1V=this.AjP();var Adi=0;var Op=this.K5;while(!!Op
){Adi+=Math.pow(Op.A5-A1V,2);Op=Op.Ah;}Adi/=this.A0;Adi=Math.sqrt(Adi);return Adi;
},_Init:function(aArg){this.__proto__=C.A62;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.K5)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.M4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.AgB={Background:null,V:null,KX:0,UD:5,Hn:false
,Ai:function(Ae){C.Hk.Ai.call(this,Ae);if(this.Hn)this.Background.L(A.jb.Bm);else
this.Background.L(A.jb.CK);},T:function(E){C.Hk.T.call(this,E);this.V.R(E);},Bi:
function(E){if(this.Hn===E)return;this.Hn=E;this.Am();},Kz:function(E){if(this.UD===
E)return;this.UD=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hk._Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);C.CG.
_Init.call(this.V={I:this},0);this.__proto__=C.AgB;this.H(BD);this.Background.A1(
0x3F);this.Background.H(BD);this.V.A1(0x3F);this.V.H(AyJ);this.V.A6(0x11);this.V.
L(A.jb.Text);this.KX=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.HL));this.V.Cm(A.aaL(A.fl.Bh));},_Done:function(
){this.__proto__=C.Hk;this.Background._Done();this.V._Done();C.Hk._Done.call(this
);},_ReInit:function(){C.Hk._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.HL));this.V.Cm(A.aaL(A.fl.
Bh));},_Mark:function(D){var B;C.Hk._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AOd={WM:function(G){this.Agz();this.I8(A.aaR(
A.acf.AVH),[this,this.AT6],5);this.I8(A.aaR(A.acf.AVF),[this,this.AT5],7);this.I8(
A.aaR(A.acf.Calving),[this,this.Bmx],11);this.I8(A.aaR(A.acf.An5),[this,this.Aw2
],2);this.I8(A.aaR(A.acf.AdX),[this,this.AFa],1);this.I8(A.aaR(A.acf.AuL),[this,
this.AE6],0);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Anl
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DF:function(G){}
,AbB:function(){return C.ANl;},AbC:function(){return C.APN;},Ra:function(G){A._GetAutoObject(
A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).ADe());},HS:function(G){
var F;C.GJ.HS.call(this,G);if(this.Aki()===false){this.N.Ct(A._GetAutoObject(A.Device.
Converter).Ajs((F=this.Fm,F[1].call(F[0]))));this.N.Ce=[this,this.Aaq];this.N.E6(
A.jV);}this.N.OW(false);this.N.OX(false);},Agl:function(){A._GetAutoObject(C.A7).
Cb(62);},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=C.AOd;var
B;this.Dr(C.APk);this.Dl(A.aaR(A.acf.ASp));this.AwX([B=A._GetAutoObject(A.Device.
Device),B.A85,B.BbH]);},_ReInit:function(){C.GJ._ReInit.call(this);this.Dl(A.aaR(
A.acf.ASp));},_className:"Application::DryCowListScreen"};C.AOc={_Init:function(
aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AOc;this.Lh.As(false);this.Lh.
Aj(false);this.Lh.Z(false);this.Jw.As(false);this.Jw.Aj(false);this.Jw.Z(false);
},_className:"Application::DryCowListFilterScreen"};C.APk={DX:function(G){C.Kv.DX.
call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(9));},_Init:function(
aArg){C.Kv._Init.call(this,aArg);this.__proto__=C.APk;},_className:"Application::HeaderDryCowListFilter"
};C.Abz={Filter:null,L4:null,AHg:A.jV,Er:0,AGn:1,Operator:1,Bl:function(aSize){C.
Acu.Bl.call(this,aSize);this.V.H([15,0,this.AW.M[0]-15,aSize[1]]);},Ai:function(
Ae){C.Acu.Ai.call(this,Ae);this.L4.L(this.V.AQ);},Bk:function(E){if(A.aaZ(this.Filter
,E))return;if(!!this.Filter)A.z$([this,this.Mj],this.Filter,0);this.Filter=E;if(
!!E)A.zX([this,this.Mj],E,0);A.pe([this,this.Mj],this);},Mj:function(G){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.TB((F=this.Filter,F[1].call(
F[0])).DM(this.Er,this.Operator));else this.TB(null);},Nq:function(E){if(this.Er===
E)return;this.Er=E;A.pe([this,this.Mj],this);},TB:function(AI){if(!!AI){var A2x;
if(this.AGn!==1)A2x=this.AGn;else A2x=AI.Operator;this.T((this.AHg+CR)+A._GetAutoObject(
A.Device.Converter).A6X(A2x));this.ZF(false);}else{this.T(this.AHg);this.ZF(true
);}},OV:function(E){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.
Mj],this);},AF_:function(E){if(this.AHg===E)return;this.AHg=E;A.pe([this,this.Mj
],this);},A_O:function(E){if(this.AGn===E)return;this.AGn=E;A.pe([this,this.Mj],
this);},_Init:function(aArg){C.Acu._Init.call(this,aArg);C.L4._Init.call(this.L4={
I:this},0);this.__proto__=C.Abz;this.H(Ate);this.AW.H(BsF);this.L4.H(A0z);this.J5(
this.V,-1);this.J(this.L4,0);},_Done:function(){this.__proto__=C.Acu;this.L4._Done(
);C.Acu._Done.call(this);},_ReInit:function(){C.Acu._ReInit.call(this);this.L4._ReInit(
);},_Mark:function(D){var B;C.Acu._Mark.call(this,D);if((B=this.Filter)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.L4)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::FilterItemNumeric"};C.AjK={L4:null,Ai:function(Ae){C.QH.
Ai.call(this,Ae);this.L4.L(this.V.AQ);},TB:function(AI){if(!!AI){this.H$.Cw(1);this.
ZF(true);this.L4.A_E(false);}else{this.H$.Cw(0);this.ZF(false);this.L4.A_E(true);
}},_Init:function(aArg){C.QH._Init.call(this,aArg);C.L4._Init.call(this.L4={I:this
},0);this.__proto__=C.AjK;this.Jh=20;this.L4.H(A0z);this.J(this.L4,0);},_Done:function(
){this.__proto__=C.QH;this.L4._Done();C.QH._Done.call(this);},_ReInit:function(){
C.QH._ReInit.call(this);this.L4._ReInit();},_Mark:function(D){var B;C.QH._Mark.call(
this,D);if((B=this.L4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ExistsFilterItem"
};C.ACg={Q:null,CQ:function(){this.T(A._GetAutoObject(A.Device.Helper).Am1(this.
TableId,this.Er));},TB:function(AI){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])
))this.H$.Cw(1);else this.H$.Cw(0);},Hh:function(G){A.pe([this,this.Mj],this);},
Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Hh],this.Q,
0);this.Q=E;if(!!E)A.zX([this,this.Hh],E,0);if(!!E)A.pe([this,this.Hh],this);},_Init:
function(aArg){C.QH._Init.call(this,aArg);this.__proto__=C.ACg;},_ReInit:function(
){C.QH._ReInit.call(this);this.CQ();},_Mark:function(D){var B;C.QH._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"
};C.APN={Y1:null,Jd:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Y1={I:this},0);A.acg.Text._Init.call(this.Jd={I:this},0);this.__proto__=
C.APN;this.A_q(1);this.Y1.H(BsG);this.Y1.Lv(true);this.Y1.R(A.aaR(A.acf.AEn));this.
Y1.L(A.jb.Text);this.Jd.H(Th);this.Jd.R(((A.aaR(A.acf.RU)+Ba2)+A.aaR(A.acf.BaI))+
Pd);this.Jd.L(A.jb.Text);this.J(this.Y1,0);this.J(this.Jd,0);this.Y1.S(A.aaL(A.fl.
Ak));this.Jd.S(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.De;this.Y1._Done(
);this.Jd._Done();C.De._Done.call(this);},_ReInit:function(){C.De._ReInit.call(this
);this.Y1._ReInit();this.Jd._ReInit();this.Y1.R(A.aaR(A.acf.AEn));this.Jd.R(((A.
aaR(A.acf.RU)+Ba2)+A.aaR(A.acf.BaI))+Pd);this.Y1.S(A.aaL(A.fl.Ak));this.Jd.S(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Y1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ANl={Ms:null,KV:null,AdW:null,AP:null,A$:null
,Xy:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Ms.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KV.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A$.H([this.KV.M[2]-1,0,this.
KV.M[2]+1,aSize[1]]);this.AdW.H([this.KV.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KV.L(this.V.AQ);this.AdW.L(this.V.AQ);if(!!this.Xy&&(
this.Xy!==5)){this.Ms.L(A._GetAutoObject(A.acj.Assessment).Qu(this.Xy));this.V.L(
A._GetAutoObject(A.acj.Assessment).XH(this.Xy));}else this.Ms.L(this.Background.
AQ);},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Mn=this.AX.
CC(Ad,1);var A26=this.AX.CC(Ad,29);var Ph=this.AX.Hw(Ad,4);var LW=this.AX.Ja(Ad,
13);var AlL=this.AX.Ja(Ad,17);var AlU=this.AX.H7(Ad,11);this.Xy=A._GetAutoObject(
A.Device.Helper).AMw(LW,AlU,AlL);this.T(Mn.toFixed());this.KV.R(A26.toFixed());this.
AdW.R(A._GetAutoObject(A.acj.KR).ADa(Ph,A._GetAutoObject(A.Device.Helper).Dv(),BsH
));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.call(
this.Ms={I:this},0);A.acg.Text._Init.call(this.KV={I:this},0);A.acg.Text._Init.call(
this.AdW={I:this},0);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(
this.A$={I:this},0);this.__proto__=C.ANl;this.Ms.H(Atk);this.AP.L(A.jb.Bc);this.
A$.L(A.jb.Bc);this.J(this.Ms,-1);this.J(this.KV,0);this.J(this.AdW,0);this.J(this.
AP,0);this.J(this.A$,0);this.KV.S(A.aaL(A.fl.Af));this.AdW.S(A.aaL(A.fl.Af));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Ms._Done();this.KV._Done(
);this.AdW._Done();this.AP._Done();this.A$._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Ms._ReInit();this.KV._ReInit();this.AdW.
_ReInit();this.AP._ReInit();this.A$._ReInit();this.KV.S(A.aaL(A.fl.Af));this.AdW.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Ms
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.R2={AJ3:0,Bem:false,Ai:function(Ae){C.FA.Ai.call(this,Ae);if(this.Bem){this.
T(A.aaR(A.acf.AOa));this.KB(A.jV);}else{this.T(A.aaR(A.acf.Bkt));if(this.AJ3>0)this.
KB(this.AJ3.toFixed());else this.KB(Xp);}},Ch:function(G){C.FA.Ch.call(this,G);this.
Bem=A._GetAutoObject(A.Device.Helper).W.IsDry;var AlG=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(AlG>0)this.AJ3=A._GetAutoObject(A.Device.Helper).
Mf(AlG,A._GetAutoObject(A.Device.Helper).Dv());else this.AJ3=0;this.Am();},_Init:
function(aArg){C.FA._Init.call(this,aArg);this.__proto__=C.R2;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AMB={ALH:A.jV,Ai:function(Ae){C.FA.Ai.call(this,Ae);this.T(A.aaR(A.acf.RU));
this.KB(this.ALH);},Ch:function(G){C.FA.Ch.call(this,G);var Ph=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.ALH=A._GetAutoObject(A.acj.KR).ADa(Ph,A._GetAutoObject(
A.Device.Helper).Dv(),((((BsI+A.aaR(A.acf.BhE))+BsJ)+A.aaR(A.acf.BhD))+BsK)+A.aaR(
A.acf.AL$));this.Am();},_Init:function(aArg){C.FA._Init.call(this,aArg);this.__proto__=
C.AMB;this.ALH=A.aaR(A.acf.Unknown);},_ReInit:function(){C.FA._ReInit.call(this);
this.ALH=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AN7={Um:null,Wy:null,WC:null,WD:null,SF:null,Init:function(aArg){this.Bb(this.
Um);A.pe([this,this.MT],this);},Ady:function(G){A._GetAutoObject(A.Device.Device
).Dw(1);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Np._Init.call(this.Um={
I:this},0);C.Np._Init.call(this.Wy={I:this},0);C.Np._Init.call(this.WC={I:this},
0);C.Ab1._Init.call(this.WD={I:this},0);C.Uj._Init.call(this.SF={I:this},0);this.
__proto__=C.AN7;var B;this.Dr(C.APh);this.Um.H(I1);this.Um.Aj(true);this.Um.T(A.
aaR(A.acf.ACM));this.Um.Bi(false);this.Um.Ns(83);this.Wy.H(Qf);this.Wy.Aj(true);
this.Wy.T(A.aaR(A.acf.Info));this.Wy.Bi(true);this.Wy.Ns(82);this.WC.H(Aan);this.
WC.Aj(true);this.WC.T(A.aaR(A.acf.AGR));this.WC.Bi(false);this.WC.Ns(64);this.WD.
H(Alj);this.WD.Aj(true);this.WD.T(A.aaR(A.acf.TempMeasurement));this.WD.Bi(true);
this.WD.Ns(60);this.SF.H(Aos);this.SF.Aj(true);this.SF.T(A.aaR(A.acf.AC7));this.
SF.Bi(false);this.J(this.Um,-1);this.J(this.Wy,-1);this.J(this.WC,-1);this.J(this.
WD,-1);this.J(this.SF,-1);this.N.Ce=[this,this.Ady];this.N.Ct(A.aaL(A.ach.ADY));
this.Um.AR=[B=this.Um,B.Nv];this.Wy.AR=[B=this.Wy,B.Nv];this.WC.AR=[B=this.WC,B.
Nv];this.WD.AR=[B=this.WD,B.Nv];this.SF.AR=null;this.SF.Ab8([B=this.SF,B.Alo]);this.
SF.Gt([this,this.D_,this.GT]);this.SF.ATj([B=A._GetAutoObject(A.Device.Device),B.
ArF,B.Att]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Um._Done(
);this.Wy._Done();this.WC._Done();this.WD._Done();this.SF._Done();C.Ej._Done.call(
this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Um._ReInit();this.Wy._ReInit(
);this.WC._ReInit();this.WD._ReInit();this.SF._ReInit();this.Um.T(A.aaR(A.acf.ACM
));this.Wy.T(A.aaR(A.acf.Info));this.WC.T(A.aaR(A.acf.AGR));this.WD.T(A.aaR(A.acf.
TempMeasurement));this.SF.T(A.aaR(A.acf.AC7));},_Mark:function(D){var B;C.Ej._Mark.
call(this,D);if((B=this.Um)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.WC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WD
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceMainScreen"};C.AN8={Uk:null,AbZ:null,Wz:null,Init:function(aArg
){this.Bb(this.Uk);},BzM:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).UpdateFirmware(
);},Bk8:function(G){if(A._GetAutoObject(A.Device.Device).Abd<=20)A._GetAutoObject(
A.Device.Device).AZ(76,true,BsL,0,null);else A._GetAutoObject(A.Device.Device).AZ(
39,true,A.jV,0,[this,this.BzM]);},_Init:function(aArg){C.Ej._Init.call(this,aArg
);C.Np._Init.call(this.Uk={I:this},0);C.Cp._Init.call(this.AbZ={I:this},0);C.Ab1.
_Init.call(this.Wz={I:this},0);this.__proto__=C.AN8;var B;this.Dr(C.APi);this.Uk.
H(I1);this.Uk.Aj(true);this.Uk.T(A.aaR(A.acf.A57));this.Uk.Bi(false);this.Uk.Ns(
65);this.AbZ.H(Qf);this.AbZ.Aj(true);this.AbZ.T(A.aaR(A.acf.A6Z));this.AbZ.Bi(true
);this.Wz.H(Aan);this.Wz.Aj(true);this.Wz.T(A.aaR(A.acf.RangeTest));this.Wz.Bi(false
);this.Wz.Ns(15);this.J(this.Uk,-1);this.J(this.AbZ,-1);this.J(this.Wz,-1);this.
Uk.AR=[B=this.Uk,B.Nv];this.AbZ.AR=[this,this.Bk8];this.Wz.AR=[B=this.Wz,B.Nv];this.
Init(aArg);},_Done:function(){this.__proto__=C.Ej;this.Uk._Done();this.AbZ._Done(
);this.Wz._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.Uk._ReInit();this.AbZ._ReInit();this.Wz._ReInit();this.Uk.T(A.aaR(A.acf.A57
));this.AbZ.T(A.aaR(A.acf.A6Z));this.Wz.T(A.aaR(A.acf.RangeTest));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Uk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wz)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceServiceScreen"};C.APi={_Init:function(aArg){
C.Ku._Init.call(this,aArg);this.__proto__=C.APi;this.Text.R(A.aaR(A.acf.AGR));},
_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.AGR));},_className:
"Application::HeaderDeviceServiceMenu"};C.Np={Ni:null,Ai:function(Ae){C.Ab1.Ai.call(
this,Ae);this.Ni.L(this.V.AQ);},_Init:function(aArg){C.Ab1._Init.call(this,aArg);
A.acg.Ap._Init.call(this.Ni={I:this},0);this.__proto__=C.Np;this.Ni.A1(0x38);this.
Ni.H(BsM);this.J(this.Ni,0);this.V.Cm(A.aaL(A.fl.Bh));this.Ni.Ax(A.aaL(A.ach.Aju
));},_Done:function(){this.__proto__=C.Ab1;this.Ni._Done();C.Ab1._Done.call(this
);},_ReInit:function(){C.Ab1._ReInit.call(this);this.Ni._ReInit();this.V.Cm(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.Ab1._Mark.call(this,D);if((B=this.Ni)._cycle
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
Ahe.H(Atp);this.Ahe.Aj(true);this.Ahe.SO(1);this.Ahk.H(A0w);this.Ahk.Aj(true);this.
Ahk.Bi(true);this.Ahk.SO(2);this.Ahm.H(Atm);this.Ahm.Aj(true);this.Ahm.Bi(false);
this.Ahm.SO(3);this.Ahi.H(Atn);this.Ahi.Aj(true);this.Ahi.Bi(true);this.Ahi.SO(4
);this.Aj_.H(AyA);this.Aj_.Aj(true);this.Aj_.SO(5);this.Ahh.H(BsN);this.Ahh.Aj(true
);this.Ahh.Bi(true);this.Ahh.SO(6);this.Ahg.H(Ato);this.Ahg.Aj(true);this.Ahg.Bi(
false);this.Ahg.SO(7);this.Ahf.H(AyL);this.Ahf.Aj(true);this.Ahf.Bi(true);this.Ahf.
SO(8);this.Aj8.H(A0x);this.Aj8.Aj(true);this.Aj8.SO(9);this.Ahd.H(AoA);this.Ahd.
Aj(true);this.Ahd.Bi(true);this.Ahd.SO(10);this.Aj9.H(BsO);this.Aj9.Aj(true);this.
Aj9.SO(11);this.Ahl.H(BsP);this.Ahl.Aj(true);this.Ahl.Bi(true);this.Ahl.SO(12);this.
Aj$.H(BsQ);this.Aj$.Aj(true);this.Aj$.SO(13);this.Ahj.H(BsR);this.Ahj.Aj(true);this.
Ahj.Bi(true);this.Ahj.SO(14);this.Aka.H(BsS);this.Aka.Aj(true);this.Aka.SO(15);this.
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
V.R(this.DeviceComponentToString.BT(this.Au9));},Bl:function(aSize){var B;C.Cp.Bl.
call(this,aSize);this.Kp.H(A.abM(this.Kp.M,aSize[0]-((B=this.Kp.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.Kp.M[0]));},Ai:function(Ae){C.Cp.Ai.call(this,Ae);this.Kp.
AFe(this.V.AQ);if(this.BcX)this.Kp.AwP(A.jb.E1);else this.Kp.AwP(A.jb.Gk);},SO:function(
E){if(this.Au9===E)return;this.Au9=E;this.T(this.DeviceComponentToString.BT(E));
this.DX(this);},DX:function(G){this.BcX=A._GetAutoObject(A.Device.Device).AJU(this.
Au9);this.Am();},_Init:function(aArg){C.Cp._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.Kp._Init.call(this.Kp={I:this
},0);this.__proto__=C.PV;this.V.H(BsT);this.V.A6(0x11);this.Kp.H(BsU);this.J(this.
Kp,0);},_Done:function(){this.__proto__=C.Cp;this.DeviceComponentToString._Done(
);this.Kp._Done();C.Cp._Done.call(this);},_ReInit:function(){C.Cp._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.Kp._ReInit();this.CQ();},_Mark:function(
D){var B;C.Cp._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Sn={Ay:null,DY:null,Y:null,Init:function(aArg){A.pe([this,this.AAV],this);},
Bb:function(E){C.AB.Bb.call(this,E);this.ALC(this);this.DK(this);},CD:function(G
){A.pe([this,this.MT],this);},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[
3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},AAV:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).A7b();A._GetAutoObject(A.Device.Device
).An.Bk(Bf);A.pe([this,this.MT],this);},Ew:function(G){A._GetAutoObject(C.A7).FB(
);},A36:function(G){A._GetAutoObject(C.A7).Cb(84);},DK:function(G){this.N.C3(A.aaL(
A.ach.E2));this.N.CF=[this,this.Ew];this.N.Ct(A.aaL(A.ach.ADX));if(!A._GetAutoObject(
A.Device.Device).An.Filter||A._GetAutoObject(A.Device.Helper).Arn(A._GetAutoObject(
A.Device.Device).An.Filter)){this.N.Ce=null;this.N.IS.CZ(100);}else{this.N.Ce=[this
,this.AAV];this.N.IS.CZ(255);}this.N.C4(A.aaL(A.ach.AeF));this.N.Ca=[this,this.A36
];},MT:function(s){this.DK(s);},ALC:function(G){A.ab5("%s",BsV);},BHf:function(s
){this.ALC(s);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Ay._Init.call(
this.Ay={I:this},0);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(
this.Y={I:this},0);this.__proto__=C.Sn;this.N.As(false);this.N.Z(true);this.Dr(C.
AbD);this.Ay.H(Ix);this.DY.A1(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CK);this.Y.H(L9
);this.Y.JZ(9);this.J(this.Ay,0);this.J(this.DY,0);this.J(this.Y,0);this.Y.Em=[this
,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ay._Done();
this.DY._Done();this.Y._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Ay._ReInit();this.DY._ReInit();this.Y._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuScreen"};C.AOr={Yo:null,Yn:null,Ya:null
,TS:null,DK:function(G){C.Sn.DK.call(this,G);if(this.AV===this.TS){this.N.Ct(null
);this.N.Ce=null;this.N.C4(null);this.N.Ca=null;}},ALC:function(G){if(this.AV===
this.TS)this.Dr(C.APo);else this.Dr(C.AbD);},Bz5:function(){switch(A._GetAutoObject(
A.Device.Device).TemperatureUnit){case 0:return A.aaL(A.ach.AQs);case 1:return A.
aaL(A.ach.AQt);default:A.ab5("%s%s",BsW,A._GetAutoObject(A.Device.Device).TemperatureUnit.
toFixed());}return null;},Bz6:function(){switch(A._GetAutoObject(A.Device.Device
).MassUnit){case 0:return A.aaL(A.ach.AQu);case 1:return A.aaL(A.ach.AQv);default:
A.ab5("%s%s",AIV,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;
},Il:function(G){var Cy=(C.Fn.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.
Yo)A._GetAutoObject(C.A7).Cb(66);else if(Cy===this.Yn)A._GetAutoObject(C.A7).Cb(
56);else if(Cy===this.Ya)A._GetAutoObject(C.A7).Cb(58);else if(Cy===this.TS)A._GetAutoObject(
C.A7).Cb(59);},_Init:function(aArg){C.Sn._Init.call(this,aArg);C.Fn._Init.call(this.
Yo={I:this},0);C.Fn._Init.call(this.Yn={I:this},0);C.Fn._Init.call(this.Ya={I:this
},0);C.Fn._Init.call(this.TS={I:this},0);this.__proto__=C.AOr;this.Yo.H(Qd);this.
Yo.Aj(true);this.Yo.T(A.aaR(A.acf.Afz));this.Yn.H(J9);this.Yn.Aj(true);this.Yn.T(
A.aaR(A.acf.Temperature));this.Ya.H(BsX);this.Ya.Aj(true);this.Ya.T(A.aaR(A.acf.
Rating));this.TS.H(BsY);this.TS.Aj(true);this.TS.T(A.aaR(A.acf.A8h));this.J(this.
Yo,0);this.J(this.Yn,0);this.J(this.Ya,0);this.J(this.TS,0);this.Yo.AR=[this,this.
Il];this.Yo.DC(this.Bz6());this.Yn.AR=[this,this.Il];this.Yn.DC(this.Bz5());this.
Ya.AR=[this,this.Il];this.Ya.DC(A.aaL(A.ach.AQq));this.TS.AR=[this,this.Il];this.
TS.DC(A.aaL(A.ach.AQr));},_Done:function(){this.__proto__=C.Sn;this.Yo._Done();this.
Yn._Done();this.Ya._Done();this.TS._Done();C.Sn._Done.call(this);},_ReInit:function(
){C.Sn._ReInit.call(this);this.Yo._ReInit();this.Yn._ReInit();this.Ya._ReInit();
this.TS._ReInit();this.Yo.T(A.aaR(A.acf.Afz));this.Yn.T(A.aaR(A.acf.Temperature)
);this.Ya.T(A.aaR(A.acf.Rating));this.TS.T(A.aaR(A.acf.A8h));},_Mark:function(D){
var B;C.Sn._Mark.call(this,D);if((B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Yn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuMainScreen"
};C.AOs={VV:null,Yc:null,Yp:null,ALC:function(G){this.Dr(C.AvE);},Bz9:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARe
);case 1:return A.aaL(A.ach.ARf);default:A.ab5("%s%s",AIV,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Il:function(G){var Cy=(C.Fn.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VV)A._GetAutoObject(C.A7).Cb(68);else if(Cy===
this.Yp)A._GetAutoObject(C.A7).Cb(57);else if(Cy===this.Yc)A._GetAutoObject(C.A7
).Cb(67);},Bz8:function(){switch(A._GetAutoObject(A.Device.Device).MassUnit){case
0:return A.aaL(A.ach.AQd);case 1:return A.aaL(A.ach.AQe);default:A.ab5("%s%s",AIV
,A._GetAutoObject(A.Device.Device).MassUnit.toFixed());}return null;},Bz_:function(
){switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.ARg
);case 1:return A.aaL(A.ach.ARh);default:A.ab5("%s%s",AIV,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},_Init:function(aArg){C.Sn._Init.call(
this,aArg);C.Fn._Init.call(this.VV={I:this},0);C.Fn._Init.call(this.Yc={I:this},
0);C.Fn._Init.call(this.Yp={I:this},0);this.__proto__=C.AOs;this.VV.H(Qd);this.VV.
Aj(true);this.VV.T(A.aaR(A.acf.BaA));this.Yc.H(A0A);this.Yc.Aj(true);this.Yc.T(A.
aaR(A.acf.A5X));this.Yp.H(Oh);this.Yp.Aj(true);this.Yp.T(A.aaR(A.acf.BaD));this.
J(this.VV,0);this.J(this.Yc,0);this.J(this.Yp,0);this.VV.AR=[this,this.Il];this.
VV.DC(this.Bz9());this.VV.Aca(A.aaL(A.ach.N1));this.Yc.AR=[this,this.Il];this.Yc.
DC(this.Bz8());this.Yp.AR=[this,this.Il];this.Yp.DC(this.Bz_());},_Done:function(
){this.__proto__=C.Sn;this.VV._Done();this.Yc._Done();this.Yp._Done();C.Sn._Done.
call(this);},_ReInit:function(){C.Sn._ReInit.call(this);this.VV._ReInit();this.Yc.
_ReInit();this.Yp._ReInit();this.VV.T(A.aaR(A.acf.BaA));this.Yc.T(A.aaR(A.acf.A5X
));this.Yp.T(A.aaR(A.acf.BaD));},_Mark:function(D){var B;C.Sn._Mark.call(this,D);
if((B=this.VV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"
};C.AOv={Bep:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).ZY(0));},_Init:function(aArg){C.AqT._Init.call(this,aArg);this.
__proto__=C.AOv;this.Afa(A.aaR(A.acf.A8C));},_ReInit:function(){C.AqT._ReInit.call(
this);this.Afa(A.aaR(A.acf.A8C));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AOo={Ail:null,AbG:null,UV:null,Aa9:null,Ps:null,Ajq:null,AgD:null,Ajr:null,AgE:
null,Ay:null,Aa0:null,Adf:0,ApA:0,DF:function(G){switch(this.Cr.CP){case 4:{if(this.
I$.Fp())return;var QD=this.Y.Br[1]+80;this.Y.Gc([this.Y.Br[0],QD]);this.Y.VH(null
,null);}break;case 5:{if(this.I$.Fp())return;var QD=this.Y.Br[1]-80;this.Y.Gc([this.
Y.Br[0],QD]);this.Y.VH(null,null);}break;default:C.FC.DF.call(this,G);}},Ap$:function(
L_,Ac0){if(!L_)return;var Fx=A._NewObject(A.Device.Filter,0);var HZ=A._NewObject(
A.Device.Int32FilterCriterion,0);HZ.Initialize(1,0,Ac0,true);Fx.CX(HZ);var Ada=A.
_NewObject(A.Device.Int32FilterCriterion,0);Ada.Initialize(8,2,0,true);Fx.CX(Ada
);L_.Bk(Fx);},Aiz:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aro()){this.
Ail.OA(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Azx=this.Bz3(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
Aa0.Set(Azx,this.Aa0.Get(Azx)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.Adf++;this.ApA=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.FC.Aiz.call(
this,G);},Aaz:function(G){if(this.Adf>1)A._GetAutoObject(A.Device.Device).AZ(56,
true,this.Adf.toFixed(),0,null);if(this.Adf===1)A._GetAutoObject(A.Device.Device
).AZ(53,true,this.ApA.toFixed(),0,null);if(this.Ail.A0>0)this.UV.T(((((((A._GetAutoObject(
A.Device.Converter).Ax$(this.Ail.AjP()|0,1)+AyT)+A._GetAutoObject(A.Device.Converter
).Ax$(this.Ail.Aq4()|0,1))+CR)+A._GetAutoObject(A.acj.DU).Af8())+AyU)+this.Ail.A0.
toFixed())+Pd);else this.UV.T(A.aaR(A.acf.Unknown));var RR=this.Aa0.Am2();var O;
for(O=0;O<this.Aa0.MN;O++){var Bd=this.BAm(O);if(!!Bd){var CB=this.Aa0.Get(O);Bd.
BmI(CB);if(!RR)Bd.A_U(0);else Bd.A_U(Math.round((CB*100)/RR)|0);Bd.Boo(this.BAl(
O,A._GetAutoObject(A.Device.Device).MassUnit));}}var Adk=false;if(this.Ail.A0>0)
Adk=true;this.I$.Z(!Adk);C.FC.Aaz.call(this,G);},Adr:function(G){this.Ail.Yq();this.
Aa0.E7();this.Adf=0;this.ApA=0;C.FC.Adr.call(this,G);},BAm:function(aIndex){var Bd=
null;switch(aIndex){case 0:Bd=this.Ps;break;case 1:Bd=this.Ajq;break;case 2:Bd=this.
AgD;break;case 3:Bd=this.Ajr;break;case 4:Bd=this.AgE;break;default:throw new Error(
AyV+aIndex.toFixed());}return Bd;},BAl:function(aIndex,AoO){var B;var TC=A.jV;switch(
AoO){case 0:{switch(aIndex){case 0:TC=BsZ;break;case 1:TC=Bs0;break;case 2:TC=Bs1;
break;case 3:TC=Bs2;break;case 4:TC=Bs3;break;default:throw new Error(AyV+aIndex.
toFixed());}TC=TC+(CR+A.aaR(A.acf.AAn));}break;case 1:{switch(aIndex){case 0:TC=
Bs4;break;case 1:TC=Bs5;break;case 2:TC=Bs6;break;case 3:TC=Bs7;break;case 4:TC=
Bs8;break;default:throw new Error(AyV+aIndex.toFixed());}TC=TC+(CR+A.aaR(A.acf.A7Z
));}break;default:A.ab5("%s%e",Ba3,AoO);}return TC;},Bz4:function(AJe,AoO){var Adb=
0;switch(AoO){case 0:switch(AJe){case 0:Adb=35000;break;case 1:Adb=40000;break;case
2:Adb=45000;break;case 3:Adb=50000;break;case 4:Adb=2147483647;break;default:throw new
Error(AyV+AJe.toFixed());}break;case 1:switch(AJe){case 0:Adb=36287;break;case 1:
Adb=40823;break;case 2:Adb=45359;break;case 3:Adb=49895;break;case 4:Adb=2147483647;
break;default:throw new Error(AyV+AJe.toFixed());}break;default:A.ab5("%s%e",Ba3
,AoO);}return Adb;},Bz3:function(A8,AoO){var Azx=0;var O;for(O=0;O<this.Aa0.MN;O++
)if(A8<this.Bz4(O,AoO)){Azx=O;break;}return Azx;},Fj:function(G){var B;this.Ay.MH((
B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[
1]);},_Init:function(aArg){C.FC._Init.call(this,aArg);C.AgB._Init.call(this.AbG={
I:this},0);C.IK._Init.call(this.UV={I:this},0);C.Aa9._Init.call(this.Aa9={I:this
},0);C.Ps._Init.call(this.Ps={I:this},0);C.Ps._Init.call(this.Ajq={I:this},0);C.
Ps._Init.call(this.AgD={I:this},0);C.Ps._Init.call(this.Ajr={I:this},0);C.Ps._Init.
call(this.AgE={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);A.Device.Int32ArrayWrapper.
_Init.call(this.Aa0={I:this},0);this.__proto__=C.AOo;this.Dr(C.AvE);this.Akz(A.aaR(
A.acf.A6O));this.Afa(A.aaR(A.acf.A8v));this.AbG.H(Atp);this.AbG.Aj(true);this.AbG.
T(A.aaR(A.acf.A5M));this.AbG.Bi(false);this.AbG.Kz(5);this.UV.H(A0w);this.UV.Aj(
true);this.UV.T(A.jV);this.UV.Bi(true);this.UV.Kz(5);this.Aa9.H(Atm);this.Aa9.Aj(
true);this.Ps.H(Atn);this.Ps.Aj(true);this.Ps.Bi(true);this.Ajq.H(Ato);this.Ajq.
Aj(true);this.AgD.H(AyL);this.AgD.Aj(true);this.AgD.Bi(true);this.Ajr.H(A0x);this.
Ajr.Aj(true);this.AgE.H(AoA);this.AgE.Aj(true);this.AgE.Bi(true);this.Ay.H(Ix);this.
Aa0.ZG(5);this.J(this.AbG,-1);this.J(this.UV,-1);this.J(this.Aa9,-1);this.J(this.
Ps,-1);this.J(this.Ajq,-1);this.J(this.AgD,-1);this.J(this.Ajr,-1);this.J(this.AgE
,-1);this.J(this.Ay,-1);this.Y.Em=[this,this.Fj];this.Ail=A._NewObject(C.AvX,0);
this.UV.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=C.FC;this.AbG._Done(
);this.UV._Done();this.Aa9._Done();this.Ps._Done();this.Ajq._Done();this.AgD._Done(
);this.Ajr._Done();this.AgE._Done();this.Ay._Done();this.Aa0._Done();C.FC._Done.
call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.AbG._ReInit();this.
UV._ReInit();this.Aa9._ReInit();this.Ps._ReInit();this.Ajq._ReInit();this.AgD._ReInit(
);this.Ajr._ReInit();this.AgE._ReInit();this.Ay._ReInit();this.Aa0._ReInit();this.
Akz(A.aaR(A.acf.A6O));this.Afa(A.aaR(A.acf.A8v));this.AbG.T(A.aaR(A.acf.A5M));this.
UV.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.
Ail)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AgD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationBirthWeightsScreen"};C.Aa9={Ie:null,Gv:null
,Bl:function(aSize){C.IK.Bl.call(this,aSize);this.Ie.H([((aSize[0]*57)/100)|0,0,((
aSize[0]*80)/100)|0,aSize[1]]);this.Gv.H([this.Ie.M[2],0,aSize[0],aSize[1]]);},Ai:
function(Ae){C.IK.Ai.call(this,Ae);this.Ie.L(this.V.AQ);this.Gv.L(this.V.AQ);},_Init:
function(aArg){C.IK._Init.call(this,aArg);A.acg.Text._Init.call(this.Ie={I:this}
,0);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.Aa9;this.T(A.aaR(
A.acf.AHt));this.Ie.H(Bs9);this.Ie.Lv(true);this.Ie.R(A.aaR(A.acf.AqG));this.Ie.
L(A.jb.Text);this.Gv.H(Ba4);this.Gv.R(AfK);this.Gv.L(A.jb.Text);this.J(this.Ie,0
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
this,Ae);this.P6.L(this.V.AQ);this.Ie.L(this.V.AQ);this.Gv.L(this.V.AQ);},Boo:function(
E){if(this.BaC===E)return;this.BaC=E;this.P6.R(E);},BmI:function(E){if(this.AqG===
E)return;this.AqG=E;this.Ie.R(E.toFixed());},A_U:function(E){if(this.A$q===E)return;
this.A$q=E;this.Gv.R(E.toFixed()+As7);},_Init:function(aArg){C.IK._Init.call(this
,aArg);A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this
},0);A.acg.Text._Init.call(this.P6={I:this},0);A.acg.Text._Init.call(this.Ie={I:
this},0);A.acg.Text._Init.call(this.Gv={I:this},0);this.__proto__=C.Ps;this.AP.L(
A.jb.Bc);this.A$.L(A.jb.Bc);this.P6.H(Bs_);this.P6.R(A.aaR(A.acf.AHt));this.P6.L(
A.jb.Text);this.Ie.R(U9);this.Ie.L(A.jb.Text);this.Gv.R(Bs$);this.Gv.L(A.jb.Text
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
function(){var Bf=A._GetAutoObject(A.Device.Helper).MC();A._GetAutoObject(A.Device.
Device).An.Bk(Bf);},_Init:function(aArg){C.AmB._Init.call(this,aArg);this.__proto__=
C.AMN;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.ARU={R9:null,
Sd:null,R8:null,Sa:null,Pu:null,R$:null,ALz:function(G){A.pe([this,this.BDf],this
);A.pe([this,this.BC5],this);A.pe([this,this.BC1],this);A.pe([this,this.A41],this
);A.pe([this,this.BC8],this);A.pe([this,this.BC6],this);},Il:function(G){var Cy=(
C.QZ.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Sd)A._GetAutoObject(C.A7
).Cb(20);else if(Cy===this.Pu)A._GetAutoObject(C.A7).Cb(14);else if(Cy===this.R9
)A._GetAutoObject(C.A7).Cb(12);else if(Cy===this.Sa)A._GetAutoObject(C.A7).Cb(43
);else if(Cy===this.R8)A._GetAutoObject(C.A7).Cb(51);else if(Cy===this.R$)A._GetAutoObject(
C.A7).Cb(61);},BC5:function(G){var Bf=A._GetAutoObject(A.Device.Helper).MC();var
AzE=A._NewObject(A.Device.BoolFilterCriterion,0);AzE.Initialize(9,0,true,true);Bf.
CX(AzE);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Pu.ZE(A._GetAutoObject(
A.Device.Device).An.B8().toFixed());},BDf:function(G){var Bf=A._GetAutoObject(A.
Device.Helper).MC();var ABO=A._NewObject(A.Device.BoolFilterCriterion,0);ABO.Initialize(
12,0,true,true);Bf.CX(ABO);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Sd.ZE(
A._GetAutoObject(A.Device.Device).An.B8().toFixed());},BC1:function(G){var Bf=A.
_GetAutoObject(A.Device.Helper).MC();var Azk=A._NewObject(A.Device.BoolFilterCriterion
,0);Azk.Initialize(8,0,true,true);Bf.CX(Azk);A._GetAutoObject(A.Device.Device).An.
Bk(Bf);this.R9.ZE(A._GetAutoObject(A.Device.Device).An.B8().toFixed());},A41:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).A67(A._GetAutoObject(A.Device.Device
).ABU);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.R8.ZE(A._GetAutoObject(A.
Device.Device).An.B8().toFixed());},BC8:function(G){var Bf=A._GetAutoObject(A.Device.
Helper).A7e();A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Sa.ZE(A._GetAutoObject(
A.Device.Device).An.B8().toFixed());},BC6:function(G){var Bf=A._GetAutoObject(A.
Device.Helper).ADe();A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.R$.ZE(A._GetAutoObject(
A.Device.Device).An.B8().toFixed());},_Init:function(aArg){C.Uf._Init.call(this,
aArg);C.QZ._Init.call(this.R9={I:this},0);C.QZ._Init.call(this.Sd={I:this},0);C.
QZ._Init.call(this.R8={I:this},0);C.QZ._Init.call(this.Sa={I:this},0);C.QZ._Init.
call(this.Pu={I:this},0);C.QZ._Init.call(this.R$={I:this},0);this.__proto__=C.ARU;
this.R9.H(Qd);this.R9.Aj(true);this.R9.T(A.aaR(A.acf.Alarm));this.R9.Ab9(true);this.
Sd.H(A0A);this.Sd.Aj(true);this.Sd.T(A.aaR(A.acf.Asl));this.Sd.Ab9(true);this.R8.
H(Oh);this.R8.Aj(true);this.R8.T(A.aaR(A.acf.ActionList));this.R8.Ab9(true);this.
Sa.H(Qe);this.Sa.Aj(true);this.Sa.T(A.aaR(A.acf.AOS));this.Sa.Ab9(true);this.Pu.
H(Tf);this.Pu.As(false);this.Pu.Aj(false);this.Pu.Z(false);this.Pu.T(A.aaR(A.acf.
ACz));this.Pu.Ab9(true);this.R$.H(U1);this.R$.Aj(true);this.R$.T(A.aaR(A.acf.A6J
));this.R$.Ab9(true);this.J(this.R9,-1);this.J(this.Sd,-1);this.J(this.R8,-1);this.
J(this.Sa,-1);this.J(this.Pu,-1);this.J(this.R$,-1);this.R9.AR=[this,this.AcX];this.
R9.DC(A.aaL(A.ach.ADO));this.R9.Aca(A.aaL(A.ach.N1));this.Sd.AR=[this,this.AcX];
this.Sd.DC(A.aaL(A.ach.ARb));this.Sd.Aca(A.aaL(A.ach.N1));this.R8.AR=[this,this.
AcX];this.R8.DC(A.aaL(A.ach.APZ));this.R8.Aca(A.aaL(A.ach.N1));this.Sa.AR=[this,
this.AcX];this.Sa.DC(A.aaL(A.ach.AQx));this.Sa.Aca(A.aaL(A.ach.N1));this.Pu.AR=[
this,this.AcX];this.Pu.DC(A.aaL(A.ach.ADO));this.Pu.Aca(A.aaL(A.ach.N1));this.R$.
AR=[this,this.AcX];this.R$.DC(A.aaL(A.ach.AQn));this.R$.Aca(A.aaL(A.ach.N1));},_Done:
function(){this.__proto__=C.Uf;this.R9._Done();this.Sd._Done();this.R8._Done();this.
Sa._Done();this.Pu._Done();this.R$._Done();C.Uf._Done.call(this);},_ReInit:function(
){C.Uf._ReInit.call(this);this.R9._ReInit();this.Sd._ReInit();this.R8._ReInit();
this.Sa._ReInit();this.Pu._ReInit();this.R$._ReInit();this.R9.T(A.aaR(A.acf.Alarm
));this.Sd.T(A.aaR(A.acf.Asl));this.R8.T(A.aaR(A.acf.ActionList));this.Sa.T(A.aaR(
A.acf.AOS));this.Pu.T(A.aaR(A.acf.ACz));this.R$.T(A.aaR(A.acf.A6J));},_Mark:function(
D){var B;C.Uf._Mark.call(this,D);if((B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.ART={Se:null,VU:null,Sb:null,R_:null,Sc:null,ALz:function(G){A.pe([this,this.
BC2],this);A.pe([this,this.BDa],this);A.pe([this,this.BDb],this);A.pe([this,this.
BDg],this);A.pe([this,this.BDc],this);},Il:function(G){var Cy=(C.QZ.isPrototypeOf(
G)?G:null);if(!Cy)return;if(Cy===this.VU)A._GetAutoObject(C.A7).Cb(90);if(Cy===this.
R_)A._GetAutoObject(C.A7).Cb(74);if(Cy===this.Sb)A._GetAutoObject(C.A7).Cb(71);if(
Cy===this.Sc)A._GetAutoObject(C.A7).Cb(46);if(Cy===this.Se)A._GetAutoObject(C.A7
).Cb(85);},BDb:function(G){var Bf=A._GetAutoObject(A.Device.Helper).ADh();A._GetAutoObject(
A.Device.Device).An.Bk(Bf);this.Sc.ZE(A._GetAutoObject(A.Device.Device).An.B8().
toFixed());},BDg:function(G){var Bf=A._GetAutoObject(A.Device.Helper).A7p(Math.max(
A._GetAutoObject(A.Device.Device).Av5,A._GetAutoObject(A.Device.Helper).A7h(A._GetAutoObject(
A.Device.Device).An))+1);A._GetAutoObject(A.Device.Device).An.Bk(Bf);this.Se.ZE(
A._GetAutoObject(A.Device.Device).An.B8().toFixed());},BDa:function(G){var Bf=A.
_GetAutoObject(A.Device.Helper).A7k();A._GetAutoObject(A.Device.Device).An.Bk(Bf
);this.Sb.ZE(A._GetAutoObject(A.Device.Device).An.B8().toFixed());},BC2:function(
G){var Bf=A._GetAutoObject(A.Device.Helper).AOT();A._GetAutoObject(A.Device.Device
).An.Bk(Bf);this.R_.ZE(A._GetAutoObject(A.Device.Device).An.B8().toFixed());},BDc:
function(G){var Bf=A._GetAutoObject(A.Device.Helper).AvA();A._GetAutoObject(A.Device.
Device).An.Bk(Bf);this.VU.ZE(A._GetAutoObject(A.Device.Device).An.B8().toFixed()
);},_Init:function(aArg){C.Uf._Init.call(this,aArg);C.QZ._Init.call(this.Se={I:this
},0);C.QZ._Init.call(this.VU={I:this},0);C.QZ._Init.call(this.Sb={I:this},0);C.QZ.
_Init.call(this.R_={I:this},0);C.QZ._Init.call(this.Sc={I:this},0);this.__proto__=
C.ART;this.Se.H(Bta);this.Se.Aj(true);this.Se.T(A.aaR(A.acf.A8n));this.Se.Ab9(true
);this.VU.H(Btb);this.VU.Aj(true);this.VU.T(A.aaR(A.acf.AGw));this.Sb.H(Btc);this.
Sb.Aj(true);this.Sb.T(A.aaR(A.acf.A8p));this.Sb.Ab9(true);this.R_.H(Btd);this.R_.
Aj(true);this.R_.T(A.aaR(A.acf.ACe));this.R_.Ab9(true);this.Sc.H(Bte);this.Sc.Aj(
true);this.Sc.T(A.aaR(A.acf.ASv));this.Sc.Ab9(true);this.J(this.Se,-1);this.J(this.
VU,-1);this.J(this.Sb,-1);this.J(this.R_,-1);this.J(this.Sc,-1);this.Se.AR=[this
,this.AcX];this.Se.DC(A.aaL(A.ach.AQP));this.Se.Aca(A.aaL(A.ach.N1));this.VU.AR=[
this,this.AcX];this.VU.DC(A.aaL(A.ach.AD4));this.Sb.AR=[this,this.AcX];this.Sb.DC(
A.aaL(A.ach.AQR));this.Sb.Aca(A.aaL(A.ach.N1));this.R_.AR=[this,this.AcX];this.R_.
DC(A.aaL(A.ach.AQi));this.R_.Aca(A.aaL(A.ach.N1));this.Sc.AR=[this,this.AcX];this.
Sc.DC(A.aaL(A.ach.AQT));this.Sc.Aca(A.aaL(A.ach.N1));},_Done:function(){this.__proto__=
C.Uf;this.Se._Done();this.VU._Done();this.Sb._Done();this.R_._Done();this.Sc._Done(
);C.Uf._Done.call(this);},_ReInit:function(){C.Uf._ReInit.call(this);this.Se._ReInit(
);this.VU._ReInit();this.Sb._ReInit();this.R_._ReInit();this.Sc._ReInit();this.Se.
T(A.aaR(A.acf.A8n));this.VU.T(A.aaR(A.acf.AGw));this.Sb.T(A.aaR(A.acf.A8p));this.
R_.T(A.aaR(A.acf.ACe));this.Sc.T(A.aaR(A.acf.ASv));},_Mark:function(D){var B;C.Uf.
_Mark.call(this,D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sc)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::ListsIdManagementScreen"};C.ASt={WM:function(G){this.Agz(
);this.AMl();this.A5o(A.aaR(A.acf.A72),[this,this.Bn5],131072);this.A5o(A.aaR(A.
acf.A71),[this,this.Bn4],16384);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS
).Mq(A.aaR(A.acf.ARN)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6
);},DF:function(G){},AbB:function(){return C.AqC;},AbC:function(){return C.Aq9;}
,Ra:function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.
Helper).A7k());},HS:function(G){C.Mo.HS.call(this,G);if(this.Aki()===false){this.
N.Ct(A._GetAutoObject(A.Device.Converter).Ajs(A._GetAutoObject(A.Device.Converter
).AMg(this.L3.ADj())));this.N.Ce=[this,this.Aaq];this.N.E6(A.jV);}this.N.OW(false
);this.N.OX(false);},Agl:function(){A._GetAutoObject(C.A7).Cb(72);},Bn4:function(
G){this.AGT(16384);},Bn5:function(G){this.AGT(131072);},_Init:function(aArg){C.Mo.
_Init.call(this,aArg);this.__proto__=C.ASt;this.Dr(C.APC);this.Dl(A.aaR(A.acf.A8t
));this.ATC(A._GetAutoObject(C.Awa));},_ReInit:function(){C.Mo._ReInit.call(this
);this.Dl(A.aaR(A.acf.A8t));},_className:"Application::NoNaisIdListScreen"};C.ASs={
_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.ASs;this.ME.As(
false);this.ME.Aj(false);this.ME.Z(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.APC={DX:function(G){C.Kv.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.
Converter).Ad2(10));},_Init:function(aArg){C.Kv._Init.call(this,aArg);this.__proto__=
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
XN],[B=A._GetAutoObject(A.Device.Device),B.Uu,B.Vc],0);},XN:function(G){var B;if(
A._GetAutoObject(A.Device.Device).P7.Z8===3){A._GetAutoObject(A.Device.Device).AZ(
74,false,A.jV,0,[this,this.Agk]);A.z$([this,this.XN],[B=A._GetAutoObject(A.Device.
Device),B.Uu,B.Vc],0);A.pe([this,this.AIY],this);}},AJT:function(){throw new Error(
AoC);},A8J:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A6F(this);},
BoD:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.BiV(this);},Hh:function(
G){},A_r:function(E){if(A.aaZ(this.OJ,E))return;if(!!this.OJ)A.z$([this,this.Hh]
,this.OJ,0);this.OJ=E;if(!!E)A.zX([this,this.Hh],E,0);if(!!E)A.pe([this,this.Hh]
,this);},Bg_:function(G){var F,Cu;if(!this.OJ)return;(Cu=this.OJ,Cu[2].call(Cu[0
],!(F=this.OJ,F[1].call(F[0]))));},_Init:function(aArg){C.GJ._Init.call(this,aArg
);this.__proto__=C.AkQ;this.Dl(A.aaR(A.acf.A8A));},_ReInit:function(){C.GJ._ReInit.
call(this);this.Dl(A.aaR(A.acf.A8A));this.CQ();},_Mark:function(D){var B;C.GJ._Mark.
call(this,D);if((B=this.OJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::RegistrationsListScreen"};C.AUM={_Init:function(aArg){C.I_._Init.call(
this,aArg);this.__proto__=C.AUM;},_className:"Application::RegistrationsListFilterScreen"
};C.Aey={_Init:function(aArg){C.YC._Init.call(this,aArg);this.__proto__=C.Aey;this.
Text.H(Btf);this.Text.R(A.jV);this.Text.A6(0x12);},_className:"Application::HeaderRegistrationsList"
};C.ACl={Js:0,AP:null,A$:null,Ea:null,IQ:null,S5:null,Gz:null,Mn:0,Lc:0,Init:function(
aArg){},Bl:function(aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IQ.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A$.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1,aSize[
1]]);this.S5.H([this.IQ.M[2],0,this.IQ.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
Ea.H([this.S5.M[2]-1,0,this.S5.M[2]+1,aSize[1]]);this.Gz.H([this.S5.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.IQ.L(this.V.AQ);this.
Gz.L(this.V.AQ);this.S5.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).Aj7(this.
Lc)){this.V.S(A.aaL(A.fl.H6));this.T(Ba5);this.S5.R(Rs);}else{this.V.S(A.aaL(A.fl.
Af));this.T(this.Mn.toFixed());this.S5.R(A._GetAutoObject(A.Device.Helper).V6(this.
Js,0,5).toFixed());}},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.AX
){this.Mn=this.AX.CC(Ad,1);this.Lc=this.AX.AO7(Ad,34);var At1=this.AX.AOZ(Ad,7);
this.Js=this.AX.KT(Ad,26);var Azr=this.AX.Hw(Ad,4);var AfV=A._GetAutoObject(A.Device.
Helper).Mf(Azr,A._GetAutoObject(A.Device.Helper).Dv());this.IQ.Ax(A._GetAutoObject(
A.Device.Converter).AmZ(At1));if(AfV<100)this.Gz.R((AfV.toFixed()+CR)+A.aaR(A.acf.
AL$));else this.Gz.R(A._GetAutoObject(A.acj.KR).ADa(Azr,A._GetAutoObject(A.Device.
Helper).Dv(),AIC));this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AL._Init.call(this.AP={I:this},0);A.acg.AL._Init.call(this.A$={I:this},0);
A.acg.AL._Init.call(this.Ea={I:this},0);A.acg.Ap._Init.call(this.IQ={I:this},0);
A.acg.Text._Init.call(this.S5={I:this},0);C.CG._Init.call(this.Gz={I:this},0);this.
__proto__=C.ACl;this.AP.H(Aov);this.AP.L(A.jb.Bc);this.A$.H(Aow);this.A$.L(A.jb.
Bc);this.Ea.H(A0B);this.Ea.L(A.jb.Bc);this.IQ.H(Ba6);this.IQ.L(A.jb.Text);this.S5.
H(AyH);this.Gz.H(A0C);this.J(this.AP,0);this.J(this.A$,0);this.J(this.Ea,0);this.
J(this.IQ,0);this.J(this.S5,0);this.J(this.Gz,0);this.S5.S(A.aaL(A.fl.Af));this.
Gz.S(A.aaL(A.fl.Af));this.Gz.AY(A.aaL(A.fl.Ak));this.Gz.Cm(A.aaL(A.fl.Bh));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.A$._Done(
);this.Ea._Done();this.IQ._Done();this.S5._Done();this.Gz._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.A$._ReInit(
);this.Ea._ReInit();this.IQ._ReInit();this.S5._ReInit();this.Gz._ReInit();this.S5.
S(A.aaL(A.fl.Af));this.Gz.S(A.aaL(A.fl.Af));this.Gz.AY(A.aaL(A.fl.Ak));this.Gz.Cm(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ADE={Aj4:
null,PG:null,Jb:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Aj4={I:this},0);A.acg.Ap._Init.call(this.PG={I:this},0);A.acg.Ap._Init.
call(this.Jb={I:this},0);this.__proto__=C.ADE;this.Aj4.H(Btg);this.Aj4.L(A.jb.Text
);this.PG.H(Bth);this.PG.L(A.jb.Text);this.Jb.H(BaX);this.Jb.L(A.jb.Text);this.J(
this.Aj4,0);this.J(this.PG,0);this.J(this.Jb,0);this.Aj4.Ax(A.aaL(A.ach.AD0));this.
PG.Ax(A.aaL(A.ach.AvN));this.Jb.Ax(A.aaL(A.ach.AvI));},_Done:function(){this.__proto__=
C.De;this.Aj4._Done();this.PG._Done();this.Jb._Done();C.De._Done.call(this);},_ReInit:
function(){C.De._ReInit.call(this);this.Aj4._ReInit();this.PG._ReInit();this.Jb.
_ReInit();},_Mark:function(D){var B;C.De._Mark.call(this,D);if((B=this.Aj4)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
APE={IY:null,Ag3:null,HT:null,Bc:null,ML:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper
).W,B.A9y,B.A_Y],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.
WK,B.J0],0);A.zX([this,this.DX],[B=A._GetAutoObject(A.Device.Helper).W,B.ArK,B.SQ
],0);A.zV([this,this.DX],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
DX],this);},Dg:function(E){C.BR.Dg.call(this,E);this.IY.L(E);this.Ag3.L(E);this.
HT.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HT.R(A.aaR(A.acf.Aff));else this.HT.R(((A.aaR(A.acf.GN)+A.aaR(A.acf.
Colon))+CR)+E.toFixed());},DX:function(G){if(A._GetAutoObject(A.Device.Helper).W.
Aq6()){this.Aw9(((A._GetAutoObject(A.Device.Helper).W.CI+1).toFixed()+AIS)+A._GetAutoObject(
A.Device.Device).An.B8().toFixed());this.J0(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nt(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Aw9(BaK);this.J0(2);
this.OnSetAnimalId(-1);this.Nt(0);}},J0:function(E){if(this.Gender===E)return;this.
Gender=E;this.Ag3.Ax(A._GetAutoObject(A.Device.Converter).AmZ(E));},Aw9:function(
E){if(this.ML===E)return;this.ML=E;this.IY.R(E);},Nt:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Aj7(E))this.HT.
Z(false);else this.HT.Z(true);},_Init:function(aArg){C.BR._Init.call(this,aArg);
A.acg.Text._Init.call(this.IY={I:this},0);A.acg.Ap._Init.call(this.Ag3={I:this},
0);A.acg.Text._Init.call(this.HT={I:this},0);A.acg.C8._Init.call(this.Bc={I:this
},0);this.__proto__=C.APE;this.IY.H(BaL);this.IY.Hp(2);this.IY.Lv(true);this.IY.
A6(0x12);this.IY.R(BaM);this.Ag3.H(Bti);this.HT.H(Btj);this.HT.A6(0x11);this.HT.
R(A.aaR(A.acf.Aff));this.Bc.DD(Alm);this.Bc.DN(AyN);this.Bc.L(A.jb.Bc);this.J(this.
IY,0);this.J(this.Ag3,0);this.J(this.HT,0);this.J(this.Bc,0);this.IY.S(A.aaL(A.fl.
Ak));this.Ag3.Ax(A._GetAutoObject(A.Device.Converter).AmZ(2));this.HT.S(A.aaL(A.
fl.Af));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.IY._Done();this.
Ag3._Done();this.HT._Done();this.Bc._Done();C.BR._Done.call(this);},_ReInit:function(
){C.BR._ReInit.call(this);this.IY._ReInit();this.Ag3._ReInit();this.HT._ReInit();
this.Bc._ReInit();this.HT.R(A.aaR(A.acf.Aff));this.IY.S(A.aaL(A.fl.Ak));this.HT.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.IY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ag3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aba={EaseOfDeliveryToString:
null,AgV:null,Ch:function(G){C.NP.Ch.call(this,G);var AKa=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.KB(this.EaseOfDeliveryToString.LA(AKa));this.G4.R(
this.AgV.Aen(AKa).toFixed());},Dg:function(E){C.NP.Dg.call(this,E);this.G4.L(E);
},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AgV._Init.call(this.
AgV={I:this},0);this.__proto__=C.Aba;this.T(A.aaR(A.acf.AgM));},_Done:function(){
this.__proto__=C.NP;this.EaseOfDeliveryToString._Done();this.AgV._Done();C.NP._Done.
call(this);},_ReInit:function(){C.NP._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.AgV._ReInit();this.T(A.aaR(A.acf.AgM));},_Mark:function(D){var B;
C.NP._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AgV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.X2={WhereAboutsToString:null,K2:null,Ch:function(G){C.NP.Ch.call(this,G);var
Lc=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.KB(this.WhereAboutsToString.
LA(Lc));this.G4.R(this.K2.Aen(Lc).toFixed());},Dg:function(E){C.NP.Dg.call(this,
E);this.G4.L(E);},_Init:function(aArg){C.NP._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.K2._Init.call(this.K2={
I:this},0);this.__proto__=C.X2;this.T(A.aaR(A.acf.Jm));},_Done:function(){this.__proto__=
C.NP;this.WhereAboutsToString._Done();this.K2._Done();C.NP._Done.call(this);},_ReInit:
function(){C.NP._ReInit.call(this);this.WhereAboutsToString._ReInit();this.K2._ReInit(
);this.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.NP._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K2)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.R5={Cr:null,Y:null,Ay:null,Init:function(aArg){},CD:function(G){var B;C.D9.CD.
call(this,G);A.zX([this,this.AfL],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.
OnSetId],0);A.zX([this,this.AfL],[B=A._GetAutoObject(A.Device.Helper),B.U_,B.Vb]
,0);A.pe([this,this.AfL],this);},E4:function(G){var B;C.D9.E4.call(this,G);A.z$([
this,this.AfL],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId],0);A.z$([this
,this.AfL],[B=A._GetAutoObject(A.Device.Helper),B.U_,B.Vb],0);},Fj:function(G){var
B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.
MI(-this.Y.Br[1]);},DF:function(G){switch(this.Cr.CP){case 6:case 7:this.Cr.Mx=true;
break;case 4:this.BgG(4);break;case 5:this.BgG(5);break;default:;}},BgG:function(
GA){var B;switch(GA){case 5:{var CE=this.Y.Br[1]-40;if(CE<-(((B=this.Y.Dd(0x1))[
3]-B[1])-((B=this.Y.M)[3]-B[1])))CE=-(((B=this.Y.Dd(0x1))[3]-B[1])-((B=this.Y.M)[
3]-B[1]));if(CE>0)CE=0;this.Y.Gc([this.Y.Br[0],CE]);}break;case 4:{var CE=this.Y.
Br[1]+40;if(CE>0)CE=0;this.Y.Gc([this.Y.Br[0],CE]);}break;default:throw new Error(
Btk);}},GH:function(G){var B;var X=this.Y.Ah;var Aa;while(!!X&&!((X.U&0x200)===0x200
)){if(((X.U&0x400)===0x400)){Aa=(C.I9.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ch(this
);}X=X.Ah;}},AfL:function(s){this.GH(s);},M0:function(G){var B;this.Y.VH(null,null
);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},
_Init:function(aArg){C.D9._Init.call(this,aArg);A.Core.BF._Init.call(this.Cr={I:
this},0);A.Core.Y._Init.call(this.Y={I:this},0);C.Ay._Init.call(this.Ay={I:this}
,0);this.__proto__=C.R5;this.Cr.Filter=147;this.Y.H(U6);this.Y.JZ(1);this.Ay.H(As6
);this.J(this.Y,0);this.J(this.Ay,0);this.Cr.BG=[this,this.DF];this.Cr.D1=[this,
this.DF];this.Y.Em=[this,this.Fj];this.Init(aArg);},_Done:function(){this.__proto__=
C.D9;this.Cr._Done();this.Y._Done();this.Ay._Done();C.D9._Done.call(this);},_ReInit:
function(){C.D9._ReInit.call(this);this.Cr._ReInit();this.Y._ReInit();this.Ay._ReInit(
);},_Mark:function(D){var B;C.D9._Mark.call(this,D);if((B=this.Cr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.X3={Aa6:null,
XZ:null,Aa7:null,X0:null,Aba:null,X2:null,_Init:function(aArg){C.R5._Init.call(this
,aArg);C.Aa6._Init.call(this.Aa6={I:this},0);C.XZ._Init.call(this.XZ={I:this},0);
C.Aa7._Init.call(this.Aa7={I:this},0);C.X0._Init.call(this.X0={I:this},0);C.Aba.
_Init.call(this.Aba={I:this},0);C.X2._Init.call(this.X2={I:this},0);this.__proto__=
C.X3;this.Aa6.H(BD);this.Aa6.Aj(true);this.XZ.H(I1);this.XZ.Aj(true);this.XZ.Bi(
true);this.Aa7.H(Qf);this.Aa7.Aj(true);this.X0.H(Aan);this.X0.Aj(true);this.X0.Bi(
true);this.Aba.H(Alj);this.Aba.Aj(true);this.X2.H(Aos);this.X2.Aj(true);this.X2.
Bi(true);this.J(this.Aa6,0);this.J(this.XZ,0);this.J(this.Aa7,0);this.J(this.X0,
0);this.J(this.Aba,0);this.J(this.X2,0);},_Done:function(){this.__proto__=C.R5;this.
Aa6._Done();this.XZ._Done();this.Aa7._Done();this.X0._Done();this.Aba._Done();this.
X2._Done();C.R5._Done.call(this);},_ReInit:function(){C.R5._ReInit.call(this);this.
Aa6._ReInit();this.XZ._ReInit();this.Aa7._ReInit();this.X0._ReInit();this.Aba._ReInit(
);this.X2._ReInit();},_Mark:function(D){var B;C.R5._Mark.call(this,D);if((B=this.
Aa6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X2)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfos"};C.X0={
BreedToString:null,G4:null,Na:null,Ch:function(G){C.IJ.Ch.call(this,G);var Bv=A.
_GetAutoObject(A.Device.Helper).W.Breed;this.T(this.BreedToString.BT(Bv));this.G4.
R(this.Na.Aen(Bv).toFixed());},Dg:function(E){C.IJ.Dg.call(this,E);this.G4.L(E);
},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.Device.BreedToString._Init.call(
this.BreedToString={I:this},0);A.acg.Text._Init.call(this.G4={I:this},0);A.Device.
Na._Init.call(this.Na={I:this},0);this.__proto__=C.X0;this.BU.H(Btl);this.G4.H(Btm
);this.G4.Hp(5);this.G4.A6(0x14);this.G4.R(Btn);this.G4.L(A.jb.Text);this.J(this.
G4,0);this.Hx.Ax(A.aaL(A.ach.ADS));this.G4.S(A.aaL(A.fl.Af));},_Done:function(){
this.__proto__=C.IJ;this.BreedToString._Done();this.G4._Done();this.Na._Done();C.
IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.BreedToString.
_ReInit();this.G4._ReInit();this.Na._ReInit();this.G4.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.BreedToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Na)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"};C.Aa7={
Ch:function(G){C.IJ.Ch.call(this,G);var AAy=A._GetAutoObject(A.Device.Helper).W.
NaisIdMother;if(AAy>0)this.T(A._GetAutoObject(A.Device.Converter).Rl(AAy));else this.
T(A.aaR(A.acf.Unknown));},_Init:function(aArg){C.IJ._Init.call(this,aArg);this.__proto__=
C.Aa7;this.Hx.Ax(A.aaL(A.ach.AQo));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.XZ={YH:null,Ch:function(G){C.IJ.Ch.call(this,G);var Ph=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var Af0=A._GetAutoObject(A.Device.Helper).W.BirthType;if(Ph>
0)this.T(A._GetAutoObject(A.acj.KR).AjN(Ph));else this.T(A.aaR(A.acf.Unknown));var
Azt=A.aaL(A.aci.TX);switch(Af0){case 0:Azt=A.aaL(A.ach.ADQ);break;case 1:{Azt=A.
aaL(A.ach.AvJ);this.YH.Cw(0);}break;case 2:{Azt=A.aaL(A.ach.AvJ);this.YH.Cw(1);}
break;case 3:{Azt=A.aaL(A.ach.AvJ);this.YH.Cw(2);}break;default:A.ab5("%s%e",Bto
,Af0);}this.YH.Ax(Azt);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.YH={I:this},0);this.__proto__=C.XZ;this.BU.H(Btp);this.YH.H(AH9);
this.YH.L(A.jb.Text);this.J(this.YH,0);this.Hx.Ax(A.aaL(A.ach.AvI));this.YH.Ax(A.
aaL(A.ach.ADQ));},_Done:function(){this.__proto__=C.IJ;this.YH._Done();C.IJ._Done.
call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.YH._ReInit();},_Mark:
function(D){var B;C.IJ._Mark.call(this,D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoIconItemBirth"};C.Aa6={Js:0,X1:null,Lc:0
,Bl:function(aSize){C.IJ.Bl.call(this,aSize);this.X1.H(this.Hx.M);},Ai:function(
Ae){C.IJ.Ai.call(this,Ae);this.X1.L(this.BU.AQ);if(A._GetAutoObject(A.Device.Helper
).Aj7(this.Lc)){this.T(A.aaR(A.acf.AnimalLoss));this.Hx.Z(false);this.X1.Z(true);
}else if(this.Js>0){this.T(A._GetAutoObject(A.Device.Converter).Rl(this.Js));this.
Hx.Z(true);this.X1.Z(false);}else{this.T(A.aaR(A.acf.Unknown));this.Hx.Z(true);this.
X1.Z(false);}},Ch:function(G){C.IJ.Ch.call(this,G);this.Js=A._GetAutoObject(A.Device.
Helper).W.NaisId;this.Lc=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Am(
);},_Init:function(aArg){C.IJ._Init.call(this,aArg);A.acg.Text._Init.call(this.X1={
I:this},0);this.__proto__=C.Aa6;this.X1.R(Ba5);this.J(this.X1,0);this.Hx.Ax(A.aaL(
A.ach.AvN));this.X1.S(A.aaL(A.fl.H6));},_Done:function(){this.__proto__=C.IJ;this.
X1._Done();C.IJ._Done.call(this);},_ReInit:function(){C.IJ._ReInit.call(this);this.
X1._ReInit();},_Mark:function(D){var B;C.IJ._Mark.call(this,D);if((B=this.X1)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.
AMK={X3:null,Init:function(aArg){var B;A.zX([this,this.AAR],[B=A._GetAutoObject(
A.Device.Device),B.AER,B.AI2],0);A.pe([this,this.AAR],this);},DF:function(G){var
D5=(A.Core.BF.isPrototypeOf(G)?G:null);switch(D5.CP){case 6:this.Ov(this);break;
case 7:this.M6(this);break;default:D5.Mx=true;}},CD:function(G){var B;this.X3.CD(
this);C.AB.CD.call(this,G);},E4:function(G){var B;this.X3.E4(this);C.AB.E4.call(
this,G);},Ant:function(G){A._GetAutoObject(C.A7).FB();},Ady:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(16);},M6:function(G){if(A._GetAutoObject(A.Device.
Device).An.B8()<=1)return;var LJ=A._GetAutoObject(A.Device.Helper).W.CI;LJ=LJ+1;
if(LJ>=A._GetAutoObject(A.Device.Device).An.B8())LJ=0;A._GetAutoObject(A.Device.
Helper).GS(LJ);},Ov:function(G){if(A._GetAutoObject(A.Device.Device).An.B8()<=1)
return;var LJ=A._GetAutoObject(A.Device.Helper).W.CI;LJ=LJ-1;if(LJ<0)LJ=A._GetAutoObject(
A.Device.Device).An.B8()-1;A._GetAutoObject(A.Device.Helper).GS(LJ);},AAR:function(
G){if(!A._GetAutoObject(A.Device.Device).Aqy)A._GetAutoObject(C.A7).Acf(74);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.X3._Init.call(this.X3={I:this},0);this.
__proto__=C.AMK;this.Background.H(Cf);this.N.Z(true);this.N.OW(true);this.N.OX(true
);this.Dr(C.APE);this.X3.H(Fe);this.J(this.X3,0);this.N.CF=[this,this.Ant];this.
N.Ce=[this,this.Ady];this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeG));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.X3._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.X3._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.IJ={Hx:null,BU:null
,T:function(E){C.I9.T.call(this,E);this.BU.R(this.DL);},Dg:function(E){C.I9.Dg.call(
this,E);this.Hx.L(E);this.BU.L(E);},_Init:function(aArg){C.I9._Init.call(this,aArg
);A.acg.Ap._Init.call(this.Hx={I:this},0);C.CG._Init.call(this.BU={I:this},0);this.
__proto__=C.IJ;this.Hx.H(Btq);this.Hx.L(A.jb.Text);this.BU.H(Btr);this.BU.A6(0x11
);this.BU.L(A.jb.Text);this.J(this.Hx,0);this.J(this.BU,0);this.Hx.Ax(A.aaL(A.aci.
TX));this.BU.S(A.aaL(A.fl.Af));this.BU.AY(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.I9;this.Hx._Done();this.BU._Done();C.I9._Done.call(this);},_ReInit:function(
){C.I9._ReInit.call(this);this.Hx._ReInit();this.BU._ReInit();this.BU.S(A.aaL(A.
fl.Af));this.BU.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.I9._Mark.call(this
,D);if((B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BU)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.I9={Background:null
,KX:0,Hn:false,CQ:function(){this.Ch(this);},Init:function(aArg){var B;A.zX([this
,this.Bb_],[B=A._GetAutoObject(A.Device.Helper).W,B.Q6,B.OnSetId],0);A.pe([this,
this.Bb_],this);},Bl:function(aSize){C.Hk.Bl.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hk.Ai.call(this,Ae);if(this.
Hn)this.Background.L(A.jb.Bm);else this.Background.L(A.jb.CK);},Ch:function(G){}
,Bb_:function(s){this.Ch(s);},Bi:function(E){if(this.Hn===E)return;this.Hn=E;this.
Am();},Dg:function(E){if(this.KX===E)return;this.KX=E;},_Init:function(aArg){C.Hk.
_Init.call(this,aArg);A.acg.AL._Init.call(this.Background={I:this},0);this.__proto__=
C.I9;this.H(BD);this.Background.H(AIE);this.KX=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hk;this.Background._Done(
);C.Hk._Done.call(this);},_ReInit:function(){C.Hk._ReInit.call(this);this.Background.
_ReInit();this.CQ();},_Mark:function(D){var B;C.Hk._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.NP={G4:null,BBP:function(G){this.BU.H(A.abN(this.BU.M,this.G4.M[0]));},_Init:
function(aArg){C.FA._Init.call(this,aArg);A.acg.Text._Init.call(this.G4={I:this}
,0);this.__proto__=C.NP;this.G4.A1(0xA);this.G4.H(Bts);this.G4.Hp(5);this.G4.Je(
true);this.G4.A6(0x14);this.G4.R(A.jV);this.G4.L(A.jb.Text);this.J(this.G4,0);this.
G4.Q9([this,this.BBP]);this.G4.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.FA;this.G4._Done();C.FA._Done.call(this);},_ReInit:function(){C.FA._ReInit.call(
this);this.G4._ReInit();this.G4.S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.FA.
_Mark.call(this,D);if((B=this.G4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Axt={ARs:null,_Init:function(aArg){C.ZH._Init.call(this,aArg);this.__proto__=
C.Axt;},_Mark:function(D){var B;C.ZH._Mark.call(this,D);if((B=this.ARs)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayCheckableNode"
};C.ANR={WJ:null,W5:0,AwU:function(E){C.AmL.AwU.call(this,E);if(E)this.Pw.R(Btt);
else this.Pw.R(Ba7);},BnU:function(E){if(A.aaZ(this.WJ,E))return;if(!!this.WJ)A.
z$([this,this.A3U],this.WJ,0);this.WJ=E;if(!!E)A.zX([this,this.A3U],E,0);if(!!E)
A.pe([this,this.A3U],this);},AF5:function(E){var F;if(this.W5===E)return;this.W5=
E;this.AwU(!!this.WJ&&((F=this.WJ,F[1].call(F[0]))===E));},A3U:function(G){var F;
this.AwU(!!this.WJ&&((F=this.WJ,F[1].call(F[0]))===this.W5));},_Init:function(aArg
){C.AmL._Init.call(this,aArg);this.__proto__=C.ANR;this.Pw.R(Ba7);this.Pw.S(A.aaL(
A.fl.H6));},_Mark:function(D){var B;C.AmL._Mark.call(this,D);if((B=this.WJ)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::DarkThemeRadioMenuItem"
};C.Axv={WJ:null,W5:0,_Init:function(aArg){C.ZH._Init.call(this,aArg);this.__proto__=
C.Axv;},_Mark:function(D){var B;C.ZH._Mark.call(this,D);if((B=this.WJ)&&((B=B[0]
)._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayRadioNode"
};C.AUq={GP:null,_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Rd._Init.call(
this.GP={I:this},0);this.__proto__=C.AUq;var B;this.Jf(A.aaR(A.acf.AC2));this.GP.
H(Ah1);this.GP.Aj(true);this.GP.Z(true);this.GP.T(A.aaR(A.acf.AGu));this.GP.Ar_(
false);this.GP.A_V(true);this.J(this.GP,0);this.GP.Ab8([B=this.GP,B.FW]);this.GP.
Gt([this,this.D_,this.GT]);this.GP.AkA(A.aaL(A.ach.Edit));this.GP.Au([B=A._GetAutoObject(
A.Device.Device),B.AS1,B.A0O]);},_Done:function(){this.__proto__=C.Cg;this.GP._Done(
);C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.GP._ReInit(
);this.Jf(A.aaR(A.acf.AC2));this.GP.T(A.aaR(A.acf.AGu));},_Mark:function(D){var B;
C.Cg._Mark.call(this,D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.AUo={GI:0,C9:null,AW:null,Kw:null,Fa:null
,GermanStateToString:null,CountryToString:null,PD:0,Le:0,Mh:false,Init:function(
aArg){A.zX([this,this.MT],[this,this.SK,this.Lt],0);A.zX([this,this.MT],[this,this.
Anw,this.Ahv],0);},Ai:function(Ae){C.El.Ai.call(this,Ae);this.AW.FP(this.LX);this.
Kw.FP(this.LX);this.Fa.CV(this.LX);},DK:function(G){var F;if(!this.N)return;switch(
this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=
this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=
this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[
1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[
0])).CS(this.CountryToString.BT(this.Le));(F=this.N,F[1].call(F[0])).Ca=null;}break;
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
,Ex:function(EO){var Tx=this.A_;if(EO<0)EO=0;else if(EO>this.RN)EO=this.RN;switch(
EO){case 0:{this.Bb(null);if(!this.GI&&!this.PD)this.Lt(0);}break;case 1:this.Bb(
this.Fa);break;case 2:this.Bb(this.Kw);break;case 3:if(((Tx===2)&&!this.PD)&&!this.
GI)return;else{this.Bb(this.AW);if(!this.GI||(Tx>0))this.AW.SW(2);else this.AW.SW(
7);}break;default:throw new Error(Ats+EO.toFixed());}this.A_=EO;C.El.Ex.call(this
,EO);},Bx:function(E){if(this.AM===E)return;this.AM=E;this.Mh=true;this.SN(A._GetAutoObject(
A.Device.Helper).V6(E,0,10));this.Ahv(A._GetAutoObject(A.Device.Helper).V6(E,10,
2)|0);this.Lt(A._GetAutoObject(A.Device.Converter).S9(E));this.Mh=false;if(!!this.
AM){this.Kw.Kz(2);this.AW.Kz(10);}else{this.Kw.Kz(0);this.AW.Kz(0);}this.Am();},
FW:function(G){var F;if(!this.AM){var BP=this.AM;this.Bx(A._GetAutoObject(A.Device.
Helper).ADn());if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.
abo(this.Q,0);}this.Ex(2);}else this.Ex(this.RN);},AjO:function(){return this.GI;
},AjQ:function(){return 9999999999;},Lt:function(E){if(this.Le===E)return;this.Le=
E;if(this.Mh===false)A.pe([this,this.Vx],this);A.abo([this,this.SK,this.Lt],0);}
,SN:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false)A.pe([this,this.
Vx],this);A.abo([this,this.Ab6,this.SN],0);},Vx:function(G){var F;var aString=(A.
abl(A._GetAutoObject(A.Device.Converter).AqH(this.Le),3,10)+A.abl(this.PD,2,10))+
A.abm(this.GI,10,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP
){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},Ahv:function(
E){if(this.PD===E)return;this.PD=E;if(this.Mh===false)A.pe([this,this.Vx],this);
A.abo([this,this.Anw,this.Ahv],0);},SK:function(){return this.Le;},Ab6:function(
){return this.GI;},Anw:function(){return this.PD;},_Init:function(aArg){C.El._Init.
call(this,aArg);C.C9._Init.call(this.C9={I:this},0);C.ARm._Init.call(this.AW={I:
this},0);C.AvV._Init.call(this.Kw={I:this},0);C.AsR._Init.call(this.Fa={I:this},
0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={I:this},0);
A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.AUo;var B;this.RN=3;this.AW.H(Btu);this.Kw.H(Btv);this.Kw.EV(16);this.Fa.H(Ba8
);this.J(this.AW,0);this.J(this.Kw,0);this.J(this.Fa,0);this.C9.AFl([this,this.SK
,this.Lt]);this.AW.Au([this,this.Ab6,this.SN]);this.Kw.Au([this,this.Anw,this.Ahv
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
E){if(this.Ne===E)return;C.Lk.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);this.Dz.
CV(E);this.Eq.CV(E);this.F0.CV(E);this.ET.CV(E);this.NS.CV(E);this.NT.CV(E);},YA:
function(HC){var B6=null;switch(HC){case-1:case 0:B6=this.F_;break;case 1:B6=this.
Cv;break;case 2:B6=this.CW;break;case 3:B6=this.Dz;break;case 4:B6=this.Eq;break;
case 5:B6=this.F0;break;case 6:B6=this.ET;break;case 7:B6=this.NS;break;case 8:B6=
this.NT;break;case 9:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;},_Init:
function(aArg){C.Lk._Init.call(this,aArg);C.DG._Init.call(this.NT={I:this},0);C.
DG._Init.call(this.NS={I:this},0);C.DG._Init.call(this.ET={I:this},0);C.DG._Init.
call(this.F0={I:this},0);C.DG._Init.call(this.Eq={I:this},0);C.DG._Init.call(this.
Dz={I:this},0);C.DG._Init.call(this.CW={I:this},0);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.ARm;this.H(Btw);this.G3.H(AIT);this.NT.H(AyS);this.NS.H(A0o
);this.ET.H(A0p);this.F0.H(A0q);this.Eq.H(A0r);this.Dz.H(A0s);this.CW.H(A0t);this.
Cv.H(BaS);this.F_.H(A0u);this.EM.H(A0u);this.J(this.NT,-2);this.J(this.NS,-2);this.
J(this.ET,-2);this.J(this.F0,-2);this.J(this.Eq,-2);this.J(this.Dz,-2);this.J(this.
CW,-2);this.J(this.Cv,-2);this.NT.Dk=[this,this.GY];this.NS.Dk=[this,this.GY];this.
ET.Dk=[this,this.GY];this.F0.Dk=[this,this.GY];this.Eq.Dk=[this,this.GY];this.Dz.
Dk=[this,this.GY];this.CW.Dk=[this,this.GY];this.Cv.Dk=[this,this.GY];},_Done:function(
){this.__proto__=C.Lk;this.NT._Done();this.NS._Done();this.ET._Done();this.F0._Done(
);this.Eq._Done();this.Dz._Done();this.CW._Done();this.Cv._Done();C.Lk._Done.call(
this);},_ReInit:function(){C.Lk._ReInit.call(this);this.NT._ReInit();this.NS._ReInit(
);this.ET._ReInit();this.F0._ReInit();this.Eq._ReInit();this.Dz._ReInit();this.CW.
_ReInit();this.Cv._ReInit();},_Mark:function(D){var B;C.Lk._Mark.call(this,D);if((
B=this.NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ET)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dz)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AUp={
GI:0,C9:null,AW:null,Fa:null,CountryToString:null,Le:0,Mh:false,Init:function(aArg
){A.zX([this,this.MT],[this,this.SK,this.Lt],0);},Ai:function(Ae){C.El.Ai.call(this
,Ae);this.AW.FP(this.LX);this.Fa.CV(this.LX);},DK:function(G){var F;if(!this.N)return;
switch(this.A_){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2
));(F=this.N,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.
Hf];(F=this.N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.
N,F[1].call(F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(
F[0])).CS(this.CountryToString.BT(this.Le));(F=this.N,F[1].call(F[0])).Ca=null;}
break;default:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N,F[1].call(
F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.N,F[1].call(
F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(F[0])).Ce=
null;(F=this.N,F[1].call(F[0])).C4(null);(F=this.N,F[1].call(F[0])).CS(A.jV);(F=
this.N,F[1].call(F[0])).Ca=null;}}},Ex:function(EO){var Tx=this.A_;if(EO<0)EO=0;
else if(EO>this.RN)EO=this.RN;switch(EO){case 0:{this.Bb(null);if(!this.GI)this.
Lt(0);}break;case 1:this.Bb(this.Fa);break;case 2:{this.Bb(this.AW);if(!this.GI||(
Tx>0))this.AW.SW(2);else this.AW.SW(7);}break;default:throw new Error(Ats+EO.toFixed(
));}this.A_=EO;C.El.Ex.call(this,EO);},Bx:function(E){if(this.AM===E)return;this.
AM=E;this.Mh=true;this.SN(A._GetAutoObject(A.Device.Helper).V6(E,0,12));this.Lt(
A._GetAutoObject(A.Device.Converter).S9(E));this.Mh=false;if(!!this.AM)this.AW.Kz(
12);else this.AW.Kz(0);this.Am();},FW:function(G){var F;if(!this.AM){var BP=this.
AM;this.Bx(A._GetAutoObject(A.Device.Helper).ADn());if(this.AM!==BP){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}}this.Ex(this.RN);},AjO:function(
){return this.GI;},AjQ:function(){return 999999999999;},Lt:function(E){if(this.Le===
E)return;this.Le=E;if(this.Mh===false)A.pe([this,this.Vx],this);A.abo([this,this.
SK,this.Lt],0);},SN:function(E){if(this.GI===E)return;this.GI=E;if(this.Mh===false
)A.pe([this,this.Vx],this);A.abo([this,this.Ab6,this.SN],0);},Vx:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).AqH(this.Le),3,10)+A.abm(
this.GI,12,10);var BP=this.AM;this.Bx(A.ab0(aString,0,10));if(this.AM!==BP){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AM));A.abo(this.Q,0);}},SK:function(){return this.
Le;},Ab6:function(){return this.GI;},_Init:function(aArg){C.El._Init.call(this,aArg
);C.C9._Init.call(this.C9={I:this},0);C.AD8._Init.call(this.AW={I:this},0);C.AsR.
_Init.call(this.Fa={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AUp;var B;this.RN=2;this.AW.H(Btx);this.Fa.H(Ba8);this.
J(this.AW,0);this.J(this.Fa,0);this.C9.AFl([this,this.SK,this.Lt]);this.AW.Au([this
,this.Ab6,this.SN]);this.Fa.CL(this.C9);this.Fa.Au([B=this.C9,B.B$,B.Cc]);this.Init(
aArg);},_Done:function(){this.__proto__=C.El;this.C9._Done();this.AW._Done();this.
Fa._Done();this.CountryToString._Done();C.El._Done.call(this);},_ReInit:function(
){C.El._ReInit.call(this);this.C9._ReInit();this.AW._ReInit();this.Fa._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.El._Mark.call(this,D);
if((B=this.C9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AW)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DY:null,Y:null,Ay:null,Yi:null,Yj:null,Yh:null,Yf:null,Yg:null,DF:function(
G){var B;C.AB.DF.call(this,G);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},CD:function(G){C.AB.CD.call(this,G);A._GetAutoObject(A.
Device.Device).An.Bk(null);A._GetAutoObject(A.Device.Device).Bt.Bk(null);A._GetAutoObject(
A.Device.Helper).AkR();A._GetAutoObject(A.Device.Helper).Asz();},Il:function(G){
var Cy=(C.Fn.isPrototypeOf(G)?G:null);if(!Cy)return;if(Cy===this.Yi)A._GetAutoObject(
C.A7).Cb(28);else if(Cy===this.Yj)A._GetAutoObject(C.A7).Cb(26);else if(Cy===this.
Yh)A._GetAutoObject(C.A7).Cb(54);else if(Cy===this.Yf)A._GetAutoObject(C.A7).Cb(
27);else if(Cy===this.Yg)A._GetAutoObject(C.A7).Cb(78);},A3Y:function(G){A._GetAutoObject(
C.A7).FB();},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.
MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.Y._Init.call(this.
Y={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.Fn._Init.call(this.Yi={I:this
},0);C.Fn._Init.call(this.Yj={I:this},0);C.Fn._Init.call(this.Yh={I:this},0);C.Fn.
_Init.call(this.Yf={I:this},0);C.Fn._Init.call(this.Yg={I:this},0);this.__proto__=
C.NewMenu;this.Background.L(A.jb.CU);this.N.Z(true);this.N.CS(A.jV);this.Ek.As(false
);this.Dr(C.Aq8);this.DY.A1(0x3F);this.DY.H(Fe);this.DY.L(A.jb.CK);this.Y.H(Fe);
this.Y.JZ(9);this.Ay.H(Ix);this.Yi.H(Qd);this.Yi.Aj(true);this.Yi.T(A.aaR(A.acf.
A8l));this.Yj.H(A0A);this.Yj.Aj(true);this.Yj.T(A.aaR(A.acf.NewAnimals));this.Yh.
H(Oh);this.Yh.Aj(true);this.Yh.T(A.aaR(A.acf.Calving));this.Yf.H(Qe);this.Yf.Aj(
true);this.Yf.T(A.aaR(A.acf.ACj));this.Yg.H(MR);this.Yg.Aj(true);this.Yg.T(A.aaR(
A.acf.AnimalLoss));this.J(this.DY,0);this.J(this.Y,0);this.J(this.Ay,0);this.J(this.
Yi,0);this.J(this.Yj,0);this.J(this.Yh,0);this.J(this.Yf,0);this.J(this.Yg,0);this.
N.CF=[this,this.A3Y];this.N.C3(A.aaL(A.ach.E2));this.Y.Em=[this,this.Fj];this.Yi.
AR=[this,this.Il];this.Yi.DC(A.aaL(A.ach.AD1));this.Yj.AR=[this,this.Il];this.Yj.
DC(A.aaL(A.ach.AvR));this.Yh.AR=[this,this.Il];this.Yh.DC(A.aaL(A.ach.AQh));this.
Yf.AR=[this,this.Il];this.Yf.DC(A.aaL(A.ach.AQc));this.Yg.AR=[this,this.Il];this.
Yg.DC(A.aaL(A.ach.AP7));},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.
Y._Done();this.Ay._Done();this.Yi._Done();this.Yj._Done();this.Yh._Done();this.Yf.
_Done();this.Yg._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DY._ReInit();this.Y._ReInit();this.Ay._ReInit();this.Yi._ReInit(
);this.Yj._ReInit();this.Yh._ReInit();this.Yf._ReInit();this.Yg._ReInit();this.Yi.
T(A.aaR(A.acf.A8l));this.Yj.T(A.aaR(A.acf.NewAnimals));this.Yh.T(A.aaR(A.acf.Calving
));this.Yf.T(A.aaR(A.acf.ACj));this.Yg.T(A.aaR(A.acf.AnimalLoss));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewMenu"};C.ASj={K9:null,EaseOfDelivery:null,BirthType:null,AcP:null
,Lo:null,Co:null,G9:null,Lm:null,Az2:true,Init:function(aArg){this.Bb(this.Db);A.
pe([this,this.GH],this);},Ew:function(G){var B;A._GetAutoObject(A.Device.Helper).
W.E7();A._GetAutoObject(C.A7).FB();if(!!this.K9)this.K9.Ew(this);},Agj:function(
G){var B;var F;A._GetAutoObject(A.Device.Helper).W.EC((F=this.B0.Q,F[1].call(F[0
])));A._GetAutoObject(A.Device.Helper).W.AwV(true);if(!!this.K9)this.K9.Agj(this
);if(A._GetAutoObject(A.Device.Device).An.Ll())A._GetAutoObject(A.Device.Helper).
AKx(A._GetAutoObject(A.Device.Helper).W,5,5,0,[this,this.ApM]);else{this.Ai2();A.
pe([this,this.Ap_],this);}},Aut:function(){this.N.CS(A.jV);this.N.C4(A.aaL(A.ach.
AD5));this.N.Ca=[this,this.Ay8];},CD:function(G){var B;C.H3.CD.call(this,G);if(A.
_GetAutoObject(A.Device.Device).An.Ll()){A._GetAutoObject(A.Device.Device).AZ(41
,true,A._GetAutoObject(A.Device.Device).An.HM().toFixed(),0,null);this.Ew(this);
}else if(this.Az2){this.Az2=false;A.pe([this,this.A4b],this);}else if(!this.K9){
this.K9=A._NewObject(C.ASk,0);this.K9.A_o([this,this.ABd]);A._GetAutoObject(A.Device.
Helper).W.Gs();A._GetAutoObject(A.Device.Helper).Aqo(A._GetAutoObject(A.Device.Helper
).W);A._GetAutoObject(A.Device.Helper).W.Nt(this.As3.Aen(6));this.K9.LU(this);if(
!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.Ew(this);}},Ai2:function(
){A._GetAutoObject(A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);var
Md=A._GetAutoObject(A.Device.Device).An.LZ(0,A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Device).SX(Md);if(A._GetAutoObject(A.Device.Helper
).Am_()){if(A._GetAutoObject(A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.
Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),0,null);else{
var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);B2.Ci(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A7q(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Ap_:function(G){var B;if(!!this.K9)this.K9.Ap_(this);},GH:function(G){if(
A._GetAutoObject(A.Device.Helper).Am_())this.C$.Z(true);else this.C$.Z(false);},
ApM:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;
switch(Ar.Id){case 41:break;default:A.ab5("%s%e",Ath,Ar.Id);}},ABd:function(G){this.
LU(this);this.Ae0(A._GetAutoObject(A.Device.Helper).AbA(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.JN(this.Db);},ApN:function(G){var F;C.H3.ApN.call(this
,G);(F=this.C$.Q,F[2].call(F[0],this.C$.An2));},A4b:function(G){A._GetAutoObject(
C.A7).Cb(79);},_Init:function(aArg){C.H3._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AcP._Init.call(this.AcP={I:this},0);C.Rd._Init.call(this.Lo={I:this
},0);C.SY._Init.call(this.Co={I:this},0);C.BX._Init.call(this.G9={I:this},0);C.BX.
_Init.call(this.Lm={I:this},0);this.__proto__=C.ASj;var B;this.Dr(C.APB);this.Lo.
H(Ah1);this.Lo.Aj(true);this.Lo.T(A.aaR(A.acf.ACJ));this.CH.H(AcU);this.Co.H(AcU
);this.Co.Aj(true);this.Co.T(A.aaR(A.acf.Aei));this.Co.AFX(true);this.G9.H(AcU);
this.G9.Aj(true);this.G9.T(A.aaR(A.acf.Arz));this.Lm.H(AcU);this.Lm.Aj(true);this.
Lm.T(A.aaR(A.acf.AgM));this.J(this.Lo,-5);this.J(this.Co,-3);this.J(this.G9,-1);
this.J(this.Lm,-1);this.EaseOfDelivery.L6(A._GetAutoObject(A.Device.Helper).W);this.
BirthType.L6(A._GetAutoObject(A.Device.Helper).W);this.AcP.L6(A._GetAutoObject(A.
Device.Helper).W);this.Lo.Gt([this,this.D_,this.GT]);this.Lo.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.ASX,B.AnK]);this.Co.Gt([this,this.D_,this.GT]);this.Co.L5([
B=this.Co,B.FW]);this.Co.L8(A.aaL(A.ach.Edit));this.Co.Acc([B=A._GetAutoObject(A.
Device.Helper).W,B.Awi,B.Q8]);this.Go.Au([B=this.AcP,B.B$,B.Cc]);this.Go.CL(this.
AcP);this.G9.Au([B=this.BirthType,B.B$,B.Cc]);this.G9.CL(this.BirthType);this.Lm.
Au([B=this.EaseOfDelivery,B.B$,B.Cc]);this.Lm.CL(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.H3;this.EaseOfDelivery._Done();this.BirthType.
_Done();this.AcP._Done();this.Lo._Done();this.Co._Done();this.G9._Done();this.Lm.
_Done();C.H3._Done.call(this);},_ReInit:function(){C.H3._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.AcP._ReInit();this.Lo._ReInit(
);this.Co._ReInit();this.G9._ReInit();this.Lm._ReInit();this.Lo.T(A.aaR(A.acf.ACJ
));this.Co.T(A.aaR(A.acf.Aei));this.G9.T(A.aaR(A.acf.Arz));this.Lm.T(A.aaR(A.acf.
AgM));},_Mark:function(D){var B;C.H3._Mark.call(this,D);if((B=this.K9)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcP)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Lo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"
};C.AMM={Init:function(aArg){var B;A.zX([this,this.ALB],[B=A._GetAutoObject(A.Device.
Device),B.AEY,B.AI7],0);A.pe([this,this.ALB],this);},AK4:function(){var Bf=null;
switch(A._GetAutoObject(A.Device.Device).Ab2){case 0:Bf=A._GetAutoObject(A.Device.
Helper).ADe();break;case 1:Bf=A._GetAutoObject(A.Device.Helper).AOV();break;case
2:Bf=A._GetAutoObject(A.Device.Helper).MC();break;default:throw new Error(A0D+A.
_GetAutoObject(A.Device.Device).Ab2.toFixed());}A._GetAutoObject(A.Device.Device
).An.Bk(Bf);},ALB:function(G){switch(A._GetAutoObject(A.Device.Device).Ab2){case
0:this.Dl(A.aaR(A.acf.ASp));break;case 1:this.Dl(A.aaR(A.acf.BkX));break;case 2:
this.Dl(A.aaR(A.acf.Av$));break;default:A.ab5("%s",A0D+A._GetAutoObject(A.Device.
Device).Ab2.toFixed());}},_Init:function(aArg){C.AmB._Init.call(this,aArg);this.
__proto__=C.AMM;this.BnM(C.APR);this.Ek.Ab_(A._NewObject(C.APG,0));this.Init(aArg
);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ASk={AAy:0,Adl:null
,Au7:null,BeM:0,A4p:0,A3j:0,Init:function(aArg){this.BeM=A._GetAutoObject(A.Device.
Helper).W.Id;this.Adl=A._GetAutoObject(A.Device.Device).An.Filter;this.AAy=A._GetAutoObject(
A.Device.Helper).W.NaisId;this.A3j=A._GetAutoObject(A.Device.Helper).W.AnimalType;
},LU:function(G){A._GetAutoObject(A.Device.Helper).W.AnK(this.AAy);A._GetAutoObject(
A.Device.Helper).W.Ae8(true);switch(this.A3j){case 0:case 1:A._GetAutoObject(A.Device.
Helper).W.EC(0);break;case 2:A._GetAutoObject(A.Device.Helper).W.EC(2);break;default:
A.ab5("%s%e",AyP,this.A3j);}},Ew:function(G){A._GetAutoObject(A.Device.Device).An.
Bk(this.Adl);if(!!this.A4p)this.Bhm();},Agj:function(G){A._GetAutoObject(A.Device.
Device).An.Bk(null);},Bhm:function(){var At8=A._NewObject(A.Device.Animal,0);var
Ad=A._GetAutoObject(A.Device.Device).An.LZ(0,this.BeM);At8.E3(Ad,A._GetAutoObject(
A.Device.Device).An);At8.AwH(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);At8.
Ar3(false);At8.AwW(At8.LactationNumber+1);At8.Ci(A._GetAutoObject(A.Device.Device
).An);},Ap_:function(G){this.A4p++;var ByW=A._GetAutoObject(A.Device.Converter).
Bh6(A._GetAutoObject(A.Device.Helper).W.BirthType);if((this.A4p<ByW)&&(A._GetAutoObject(
A.Device.Helper).Aj7(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).AZ(59,true,A.jV,0,[this,this.Vs]);else this.BdJ(
this);},Vs:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!Ar&&(Ar.PopupState===8))this.BdJ(this);else if(!!Ar&&(Ar.PopupState===7))this.
ABd(this);},ABd:function(G){var B;var Ih=A._GetAutoObject(A.Device.Helper).W.AnimalType;
var Af0=A._GetAutoObject(A.Device.Helper).W.BirthType;var Bv=A._GetAutoObject(A.
Device.Helper).W.Breed;var Ph=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;var
AKa=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;if(!!this.Au7)(B=this.Au7
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).W.EC(Ih);A._GetAutoObject(
A.Device.Helper).W.Akw(Af0);A._GetAutoObject(A.Device.Helper).W.N7(Bv);A._GetAutoObject(
A.Device.Helper).W.Q8(Ph);A._GetAutoObject(A.Device.Helper).W.Aky(AKa);},BdJ:function(
G){this.Bhm();A._GetAutoObject(C.A7).FB();A._GetAutoObject(A.Device.Device).An.Bk(
this.Adl);},A_o:function(E){if(A.aa0(this.Au7,E))return;this.Au7=E;},_Init:function(
aArg){this.__proto__=C.ASk;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Adl)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Au7)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AM2={Init:function(aArg){
var B;A.zX([this,this.Be9],[B=A._GetAutoObject(A.Device.Device),B.ASH,B.A0E],0);
this.Be9(this);},Ci:function(){A.ab5("%s",Bty);},E3:function(AcZ){C.VG.E3.call(this
,AcZ);var O;for(O=16;O>0;O--)this.Ig.Set(O,this.Ig.Get(O-1));this.Ig.Set(0,0);if(
this.CB<17)this.CB++;else A.ab5("%s",Btz);},AEa:function(Eh){switch(Eh){case 2048:
case 8192:case 1024:case 16384:case 131072:return false;default:return true;}},Be9:
function(G){this.E3(A._GetAutoObject(A.Device.Device).AuM);A.we(this,0);},_Init:
function(aArg){C.VG._Init.call(this,aArg);this.__proto__=C.AM2;this.Init(aArg);}
,_className:"Application::AutoActionsSelectableClass"};C.Au0={_Init:function(){C.
AM2._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;}
,_this:null};C.JQ={C8:null,V:null,A8e:true,T:function(E){C.I9.T.call(this,E);this.
V.R(E);},Dg:function(E){C.I9.Dg.call(this,E);this.V.L(E);},BnR:function(E){if(this.
A8e===E)return;this.A8e=E;this.C8.Z(E);},_Init:function(aArg){C.I9._Init.call(this
,aArg);A.acg.C8._Init.call(this.C8={I:this},0);C.CG._Init.call(this.V={I:this},0
);this.__proto__=C.JQ;this.C8.DD(BtA);this.C8.DN(BtB);this.C8.L(A.jb.Bc);this.V.
A1(0x3F);this.V.H(BtC);this.V.A6(0x11);this.V.L(A.jb.Text);this.J(this.C8,0);this.
J(this.V,0);this.V.S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.HL));this.V.Cm(A.aaL(A.
fl.Bh));},_Done:function(){this.__proto__=C.I9;this.C8._Done();this.V._Done();C.
I9._Done.call(this);},_ReInit:function(){C.I9._ReInit.call(this);this.C8._ReInit(
);this.V._ReInit();this.V.S(A.aaL(A.fl.Kt));this.V.AY(A.aaL(A.fl.HL));this.V.Cm(
A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.I9._Mark.call(this,D);if((B=this.C8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.APG={Ag0:null,Df:null,Aby:null,Fl:null,Fb:
null,Init:function(aArg){var B;A.zX([this,this.A43],[B=A._GetAutoObject(A.Device.
Device),B.AEY,B.AI7],0);A.pe([this,this.A43],this);},Dg:function(E){C.YD.Dg.call(
this,E);this.Df.L(E);},AE4:function(G){A.pe([this,this.A43],this);},ABf:function(
G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].
call(F[0])).E$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
Filter.DM(1,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(
A.Device.Device).An.Bk(Filter);}},C5:function(G){var B;var F;C.YD.C5.call(this,G
);if(!(F=this.Q,F[1].call(F[0]))){this.Df.Ax(A.aaL(A.ach.AjW));return;}var BzC=(
A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DM(38,0)
)?B:null);var Bcj=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,
F[1].call(F[0])).DM(14,0))?B:null);if(!!BzC)this.Df.Ax(A.aaL(A.ach.ADt));else if(
!!Bcj&&(Bcj.A5===1))this.Df.Ax(A.aaL(A.ach.AQj));else this.Df.Ax(A.aaL(A.ach.AjW
));},A43:function(G){var F;var Filter=null;var AOJ;switch(A._GetAutoObject(A.Device.
Device).Ab2){case 0:Filter=A._GetAutoObject(A.Device.Helper).ADe();break;case 1:
Filter=A._GetAutoObject(A.Device.Helper).AOV();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).MC();break;default:throw new Error(A0D+A._GetAutoObject(A.Device.
Device).Ab2.toFixed());}var Ai6=this.Akq();if(Ai6>0){AOJ=A._NewObject(A.Device.Int32FilterCriterion
,0);AOJ.Initialize(1,4,Ai6,false);Filter.CX(AOJ);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AW.Ae1(false);},Ov:function(G){if(!this.Akq())this.AW.Ae1(true
);this.Bb(this.AW);this.Am();},M6:function(G){this.AW.Ae1(false);this.Bb(this.Ag0
);this.Am();},_Init:function(aArg){C.YD._Init.call(this,aArg);C.Ark._Init.call(this.
Ag0={I:this},0);A.acg.Ap._Init.call(this.Df={I:this},0);C.Aby._Init.call(this.Aby={
I:this},0);A.Core.BF._Init.call(this.Fl={I:this},0);A.Core.BF._Init.call(this.Fb={
I:this},0);this.__proto__=C.APG;var B;this.H(BtD);this.AW.H(BtE);this.Ub.H(BtF);
this.Gw.Z(false);this.Ag0.H(BtG);this.Df.H(BtH);this.Aby.Au(A._GetAutoObject(A.Device.
Device).Ab2);this.Fl.Filter=6;this.Fb.Filter=7;this.J5(this.A$,-1);this.J(this.Ag0
,-1);this.J(this.Df,-1);this.Ag0.CL(this.Aby);this.Ag0.Au([B=this.Aby,B.B$,B.Cc]
);this.Df.Ax(A.aaL(A.ach.AjW));this.Fl.BG=[this,this.Ov];this.Fb.BG=[this,this.M6
];this.Init(aArg);},_Done:function(){this.__proto__=C.YD;this.Ag0._Done();this.Df.
_Done();this.Aby._Done();this.Fl._Done();this.Fb._Done();C.YD._Done.call(this);}
,_ReInit:function(){C.YD._ReInit.call(this);this.Ag0._ReInit();this.Df._ReInit();
this.Aby._ReInit();this.Fl._ReInit();this.Fb._ReInit();},_Mark:function(D){var B;
C.YD._Mark.call(this,D);if((B=this.Ag0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Fl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"};C.Aby={AeX:null
,Init:function(aArg){var B;A.zX([this,this.BeO],[B=A._GetAutoObject(A.Device.Device
),B.AEY,B.AI7],0);A.pe([this,this.BeO],this);},Du:function(){return 3;},Au:function(
E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw3(E);},ADd:function(
aIndex){if((aIndex<0)||(aIndex>=this.Du()))return null;return this.AeX.AsS(aIndex
);},ADf:function(aIndex){if((aIndex<0)||(aIndex>=this.Du()))return-1;return this.
AeX.AsT(aIndex);},BeO:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ab2;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.AeX._Init.call(this.AeX={I:this},0);this.__proto__=C.Aby;this.BI.Set(0,
0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cn;this.AeX._Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(
this);this.AeX._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=
this.AeX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.APR={Es:null,IU:null,_Init:function(aArg){C.EB._Init.call(this,aArg);C.CG._Init.
call(this.Es={I:this},0);A.acg.Text._Init.call(this.IU={I:this},0);this.__proto__=
C.APR;this.H(Oi);this.Background.H(Oi);this.Es.H(AIF);this.Es.R(A.aaR(A.acf.A7w)
);this.Es.A6(0x12);this.Es.L(A.jb.Text);this.IU.A1(0x3F);this.IU.H(AIG);this.IU.
Hp(5);this.IU.A6(0x14);this.IU.R(A.aaR(A.acf.AG7));this.IU.L(A.jb.Text);this.J(this.
Es,0);this.J(this.IU,0);this.Es.S(A.aaL(A.fl.Af));this.Es.AY(A.aaL(A.fl.HL));this.
Es.Cm(A.aaL(A.fl.Bh));this.IU.S(A.aaL(A.fl.Af));},_Done:function(){this.__proto__=
C.EB;this.Es._Done();this.IU._Done();C.EB._Done.call(this);},_ReInit:function(){
C.EB._ReInit.call(this);this.Es._ReInit();this.IU._ReInit();this.Es.R(A.aaR(A.acf.
A7w));this.IU.R(A.aaR(A.acf.AG7));this.Es.S(A.aaL(A.fl.Af));this.Es.AY(A.aaL(A.fl.
HL));this.Es.Cm(A.aaL(A.fl.Bh));this.IU.S(A.aaL(A.fl.Af));},_Mark:function(D){var
B;C.EB._Mark.call(this,D);if((B=this.Es)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={J8:null,BgU:function(){if(A._GetAutoObject(A.Device.Helper
).W.NaisId>0)this.Bfy(this);else A._GetAutoObject(A.Device.Device).AZ(63,true,A.
jV,0,[this,this.Vs]);},Bfy:function(G){A._GetAutoObject(C.A7).FB();},Vs:function(
G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if((!!Ar&&(Ar.Id===63)
)&&(Ar.PopupState===7))this.Bfy(this);},_Init:function(aArg){C.Mp._Init.call(this
,aArg);A.acg.Text._Init.call(this.J8={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dr(C.APF);this.Jl.H(BtI);this.Jl.AkG(2);this.AcE.Z(false);this.AR1=12;this.
Number.H(BtJ);this.Number.R(A.aaR(A.acf.A$S));this.A5x=false;this.J8.H(BtK);this.
J8.Hp(5);this.J8.Lv(true);this.J8.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.
aaR(A.acf.AB0));this.J8.L(A.jb.Text);this.J5(this.Jl,-1);this.J5(this.IZ,-1);this.
J5(this.AcE,-1);this.J(this.J8,0);this.J8.S(A.aaL(A.fl.Af));},_Done:function(){this.
__proto__=C.Mp;this.J8._Done();C.Mp._Done.call(this);},_ReInit:function(){C.Mp._ReInit.
call(this);this.J8._ReInit();this.Number.R(A.aaR(A.acf.A$S));this.J8.R(((A.aaR(A.
acf.Ok)+A.aaR(A.acf.Colon))+CR)+A.aaR(A.acf.AB0));this.J8.S(A.aaL(A.fl.Af));},_Mark:
function(D){var B;C.Mp._Mark.call(this,D);if((B=this.J8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MotherScanScreen"};C.APF={_Init:function(aArg){C.Aq7.
_Init.call(this,aArg);this.__proto__=C.APF;this.DS.EC(1);},_className:"Application::HeaderScannedCowId"
};C.Jl={AbT:null,AbS:null,AbR:null,QK:null,CountryToString:null,AsV:0,CQ:function(
){this.Am();},Ai:function(Ae){A.Core.P.Ai.call(this,Ae);this.QK.R(this.CountryToString.
LA(A._GetAutoObject(A.Device.Converter).A7U(A._GetAutoObject(A.Device.Device).Language
))+BtL);},AkG:function(E){if(this.AsV===E)return;this.AsV=E;var bitmap=null;var A2n=
BtM;var A2m=null;var A2o=false;switch(E){case 0:bitmap=A.aaL(A.ach.Ari);break;case
1:{bitmap=A.aaL(A.ach.AQY);A2n=BtN;A2m=A.aaL(A.fl.Ak);A2o=true;}break;case 2:{bitmap=
A.aaL(A.ach.AQZ);A2n=BtO;A2m=A.aaL(A.fl.Bh);A2o=true;}break;default:throw new Error(
BtP+E.toFixed());}this.AbR.Ax(bitmap);this.AbS.Ax(bitmap);this.AbT.Ax(bitmap);this.
QK.H(A.abJ(this.QK.M,A2n));this.QK.S(A2m);this.QK.Z(A2o);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.Ap._Init.
call(this.AbT={I:this},0);A.acg.Ap._Init.call(this.AbS={I:this},0);A.acg.Ap._Init.
call(this.AbR={I:this},0);A.acg.Text._Init.call(this.QK={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.Jl;this.H(AIW);this.
AbT.A1(0x3);this.AbT.H(AIW);this.AbT.L(A.jb.Ib);this.AbT.Cw(2);this.AbS.A1(0x3);
this.AbS.H(AIW);this.AbS.L(A.jb.Aed);this.AbS.Cw(1);this.AbR.A1(0x3);this.AbR.H(
AIW);this.AbR.L(A.jb.Text);this.AbR.Cw(0);this.QK.A1(0x14);this.QK.H(BtQ);this.QK.
L(0xFF020202);this.QK.Z(false);this.J(this.AbT,0);this.J(this.AbS,0);this.J(this.
AbR,0);this.J(this.QK,0);this.AbT.Ax(A.aaL(A.ach.Ari));this.AbS.Ax(A.aaL(A.ach.Ari
));this.AbR.Ax(A.aaL(A.ach.Ari));this.QK.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.P;this.AbT._Done();this.AbS._Done();this.AbR._Done();this.QK._Done(
);this.CountryToString._Done();A.Core.P._Done.call(this);},_ReInit:function(){A.
Core.P._ReInit.call(this);this.AbT._ReInit();this.AbS._ReInit();this.AbR._ReInit(
);this.QK._ReInit();this.CountryToString._ReInit();this.QK.S(A.aaL(A.fl.Ak));this.
CQ();},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.AbT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.AsV={Transponder:0,BGJ:1,BGK:2};C.APB={Ap:null,Dg:function(E){C.BR.Dg.call(this
,E);this.Ap.L(E);},_Init:function(aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.
call(this.Ap={I:this},0);this.__proto__=C.APB;this.Ap.H(AyQ);this.J(this.Ap,0);this.
Ap.Ax(A.aaL(A.ach.APs));},_Done:function(){this.__proto__=C.BR;this.Ap._Done();C.
BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Im:0,AaN:4,Al_:function(G){C.Rc.Al_.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bej()){this.Im=A._GetAutoObject(A.Device.Helper).UI.Id;var AiB=A._GetAutoObject(
A.Device.Helper).A7S(this.Im,A._GetAutoObject(A.Device.Helper).W);if(AiB){A._GetAutoObject(
A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter).Rl(this.Im),0,[
this,this.Vs]);return;}AiB=A._GetAutoObject(A.Device.Helper).Bkm(this.Im,A._GetAutoObject(
A.Device.Helper).W);if(AiB&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Im)){A._GetAutoObject(A.Device.Device).AZ(25,true,A._GetAutoObject(A.Device.
Converter).Rl(this.Im),0,[this,this.Vs]);return;}this.AaN=A._GetAutoObject(A.Device.
Helper).ARA(this.Im);switch(this.AaN){case 0:A._GetAutoObject(A.Device.Device).AZ(
45,true,this.Im.toFixed().length.toFixed(),0,[this,this.Vs]);break;case 1:case 2:{
var BN=A._GetAutoObject(A.Device.Converter).Ax1(this.Im);A._GetAutoObject(A.Device.
Device).AZ(46,true,BN.toFixed(),0,[this,this.Vs]);}break;case 3:this.BgM();break;
default:throw new Error(AIt+this.AaN.toFixed());}}},Ew:function(G){A._GetAutoObject(
C.A7).FB();},Vs:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!Ar)switch(Ar.PopupState){case 4:if(this.AaN===2)this.BgM();else A._GetAutoObject(
A.Device.Device).AhM();break;case 5:this.Ew(this);break;default:;}},BgM:function(
){A._GetAutoObject(A.Device.Helper).W.Nr(this.Im);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.P0(this.Im);A._GetAutoObject(
A.Device.Helper).W.Ci(A._GetAutoObject(A.Device.Device).An);A._GetAutoObject(A.Device.
Device).AZ(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ew(this);},_Init:function(aArg){C.Rc._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Z(true);this.Dr(C.IP);this.Number.R(A.aaR(A.acf.A$M
));this.Jl.H(BtR);this.IZ.H(BtS);this.AkG(1);this.N.CF=[this,this.Ew];this.N.C3(
A.aaL(A.ach.E2));},_ReInit:function(){C.Rc._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A$M));},_className:"Application::SetSaveNaisIdScreen"};C.AOe={LU:function(
G){C.AqQ.LU.call(this,G);A.pe([this,this.BCq],this);},BCq:function(G){this.JN(this.
Ef);},_Init:function(aArg){C.AqQ._Init.call(this,aArg);this.__proto__=C.AOe;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UY={Animal:null,WhereAboutsToString:
null,Gm:function(aIndex){return this.WhereAboutsToString.BT(this.C7(aIndex));},Au:
function(E){C.Cn.Au.call(this,E);if(!!this.Animal)this.Animal.Nt(E);},A4$:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B$,this.Cc],0);},L6:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A4$],[B=this.Animal,B.Awu,B.Nt],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A4$],[B=this.Animal,B.Awu,B.Nt],0);A.pe([this,this.A4$],this);}
,_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UY;this.BI.Set(0,1);this.
BI.Set(1,2);this.BI.Set(2,3);this.BI.Set(3,4);this.BI.Set(4,5);},_Done:function(
){this.__proto__=C.Cn;this.WhereAboutsToString._Done();C.Cn._Done.call(this);},_ReInit:
function(){C.Cn._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Cn._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UZ={Du:function(){return 6;},_Init:function(aArg){C.UY._Init.call(this,aArg);
this.__proto__=C.UZ;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);this.BI.Set(
3,3);this.BI.Set(4,4);this.BI.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AcP={Du:function(){return 5;},_Init:function(aArg){C.UY._Init.call(this,aArg
);this.__proto__=C.AcP;this.BI.Set(0,6);this.BI.Set(1,7);this.BI.Set(2,8);this.BI.
Set(3,9);this.BI.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AdY={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bc4],[B=A._GetAutoObject(A.Device.
Device),B.ASI,B.A0F],0);A.pe([this,this.Bc4],this);},Du:function(){return 2;},C7:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BT(aIndex);},DZ:function(A8){return A8;},H8:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awx(E);},Bc4:function(G){
this.Q=A._GetAutoObject(A.Device.Device).AgC;A.abo([this,this.B$,this.Cc],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AdY;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
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
AW);if(!this.AM)this.AW.SW(2);else this.AW.SW(7);}break;default:throw new Error(
Ats+this.A_.toFixed());}this.DK(this);this.Am();},Bx:function(E){if(this.AM===E)
return;this.AM=E;},Ov:function(G){this.ABo(2);},M6:function(G){this.ABo(7);},ABo:
function(GA){var B;var AzL=(A.Core.P.isPrototypeOf(B=this.AV)?B:null);if(!!AzL){
var AAA=(A.Core.P.isPrototypeOf(B=this.QL(AzL,GA,0x15))?B:null);if(!!AAA){this.Bb(
AAA);return true;}}return false;},Af7:function(G){var F;if(!this.EA||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Nj.Ax(
A._GetAutoObject(A.Device.Converter).AmZ(2));break;case 1:this.Nj.Ax(A._GetAutoObject(
A.Device.Converter).AmZ((F=this.EA,F[1].call(F[0]))));break;default:throw new Error(
Ba9+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A4I],this);},A4I:function(G){var B;var F;if(!this.EA||!this.EartagNrAssignmentMode
){this.Kr.Ae3(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Anx,B.AoE]);this.Kr.
Ae3([B=A._GetAutoObject(A.Device.Device),B.AEU,B.AI4]);}break;case 1:switch((F=this.
EA,F[1].call(F[0]))){case 1:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awl
,B.Ay0]);this.Kr.Ae3([B=A._GetAutoObject(A.Device.Device),B.ASN,B.A0G]);}break;case
0:{this.AW.Au([B=A._GetAutoObject(A.Device.Device),B.Awm,B.Ay1]);this.Kr.Ae3([B=
A._GetAutoObject(A.Device.Device),B.ASO,B.A0H]);}break;case 2:{this.AW.Au([B=A._GetAutoObject(
A.Device.Device),B.Anx,B.AoE]);this.Kr.Ae3([B=A._GetAutoObject(A.Device.Device),
B.AEU,B.AI4]);}break;default:throw new Error(BtT+(F=this.EA,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(Ba9+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},Ux:function(E){if(A.aaZ(this.EA,E))return;if(!!this.EA)A.z$([
this,this.Af7],this.EA,0);this.EA=E;if(!!E)A.zX([this,this.Af7],this.EA,0);if(!!
E)A.pe([this,this.Af7],this);},Akx:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Af7],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Af7],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Af7],this);},Ur:function(){return this.AM;},_Init:function(
aArg){C.Eg._Init.call(this,aArg);A.Core.BF._Init.call(this.Fl={I:this},0);A.Core.
BF._Init.call(this.Fb={I:this},0);C.Ark._Init.call(this.HJ={I:this},0);C.AvW._Init.
call(this.AW={I:this},0);C.Au$._Init.call(this.Kr={I:this},0);A.acg.Ap._Init.call(
this.Nj={I:this},0);this.__proto__=C.AGV;var B;this.H(U5);this.V.As(false);this.
V.R(Atj);this.V.L(A.jb.Bm);this.Fl.Filter=6;this.Fb.Filter=7;this.HJ.H(BtU);this.
AW.H(BtV);this.Nj.H(BtW);this.J(this.HJ,0);this.J(this.AW,0);this.J(this.Nj,0);this.
FN=A._NewObject(C.Aex,0);this.Fl.BG=[this,this.Ov];this.Fb.BG=[this,this.M6];this.
HJ.CL(this.Kr);this.HJ.Au([B=this.Kr,B.B$,B.Cc]);this.AW.Au([this,this.Ur,this.Bx
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
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AN6={WA:
null,Zk:null,Zh:null,Ui:null,Init:function(aArg){this.Bb(this.WA);},AEM:function(
G){var BeK=(C.Ann.isPrototypeOf(G)?G:null);if(!!BeK)A._GetAutoObject(A.Device.Device
).AZ(BeK.AdG,true,A.jV,0,null);},DF:function(G){if((this.Cr.CP===7)&&(this.AV===
this.Ui))A._GetAutoObject(A.Device.Device).AZ(10,true,A.jV,0,null);else if((this.
Cr.CP===6)&&(this.AV===this.Ui))A._GetAutoObject(C.A7).Cb(91);C.Ej.DF.call(this,
G);},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.Ann._Init.call(this.WA={I:
this},0);C.Ann._Init.call(this.Zk={I:this},0);C.Ann._Init.call(this.Zh={I:this},
0);C.Ann._Init.call(this.Ui={I:this},0);this.__proto__=C.AN6;this.Dr(C.APg);this.
WA.H(I1);this.WA.Aj(true);this.WA.T(A.aaR(A.acf.AhL));this.WA.Bi(false);this.WA.
AdG=79;this.Zk.H(Qf);this.Zk.Aj(true);this.Zk.T(A.aaR(A.acf.A$5));this.Zk.Bi(true
);this.Zk.AdG=77;this.Zh.H(Aan);this.Zh.Aj(true);this.Zh.T(A.aaR(A.acf.A7r));this.
Zh.Bi(false);this.Zh.AdG=78;this.Ui.H(Alj);this.Ui.Aj(true);this.Ui.T(A.aaR(A.acf.
About));this.Ui.Bi(true);this.Ui.AdG=3;this.J(this.WA,-1);this.J(this.Zk,-1);this.
J(this.Zh,-1);this.J(this.Ui,-1);this.WA.AR=[this,this.AEM];this.Zk.AR=[this,this.
AEM];this.Zh.AR=[this,this.AEM];this.Ui.AR=[this,this.AEM];this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.WA._Done();this.Zk._Done();this.Zh._Done();this.
Ui._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.
WA._ReInit();this.Zk._ReInit();this.Zh._ReInit();this.Ui._ReInit();this.WA.T(A.aaR(
A.acf.AhL));this.Zk.T(A.aaR(A.acf.A$5));this.Zh.T(A.aaR(A.acf.A7r));this.Ui.T(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.WA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ui)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.APg={_Init:function(aArg){C.Ku.
_Init.call(this,aArg);this.__proto__=C.APg;this.Text.R(A.aaR(A.acf.Info));},_ReInit:
function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.Info));},_className:"Application::HeaderDeviceInfoMenu"
};C.AN4={FactoryResetScope:null,Ul:null,Wx:null,Un:null,Init:function(aArg){this.
Bb(this.Ul);A.pe([this,this.MT],this);},Bk7:function(G){switch(this.FactoryResetScope.
C7(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(A.Device.Device).AZ(33,true
,A.jV,0,[this,this.A4r]);break;case 0:A._GetAutoObject(A.Device.Device).AZ(7,true
,A.jV,0,[this,this.A4r]);break;case 2:A._GetAutoObject(A.Device.Device).AZ(115,true
,A.jV,0,[this,this.A4r]);break;default:A.ab5("%s%i",BtX,this.FactoryResetScope.Q
);}},A4r:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!
!Ar&&(Ar.PopupState===7))switch(Ar.Id){case 7:{A._GetAutoObject(A.Device.Device).
Bpc();A._GetAutoObject(A.Device.Device).AZ(8,true,A.jV,0,null);A._GetAutoObject(
C.A7).Cb(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bpb();A._GetAutoObject(
A.Device.Device).Ar0(0);A._GetAutoObject(A.Device.Device).Ar1(0);A._GetAutoObject(
A.Device.Device).Ar2(0);A._GetAutoObject(A.Device.Device).Ar6(0);A._GetAutoObject(
A.Device.Device).Ar7(0);A._GetAutoObject(A.Device.Device).Ar8(0);A._GetAutoObject(
A.Device.Device).Uv(5);A._GetAutoObject(A.Device.Device).AwK(0);A._GetAutoObject(
A.Device.Device).AwL(0);A._GetAutoObject(A.Device.Device).AwM(0);A._GetAutoObject(
A.Device.Device).Aw4(1);A._GetAutoObject(A.Device.Device).Aw5(1);A._GetAutoObject(
A.Device.Device).Aw6(1);A._GetAutoObject(A.Device.Device).AZ(34,true,A.jV,0,null
);}break;case 115:{A._GetAutoObject(A.Device.Device).Bpa();A._GetAutoObject(A.Device.
Device).AZ(116,true,A.jV,0,null);A._GetAutoObject(C.A7).Cb(37);}break;default:A.
ab5("%s%e",AIu,Ar.Id);}},_Init:function(aArg){C.Ej._Init.call(this,aArg);C.FactoryResetScope.
_Init.call(this.FactoryResetScope={I:this},0);C.Np._Init.call(this.Ul={I:this},0
);C.Np._Init.call(this.Wx={I:this},0);C.BX._Init.call(this.Un={I:this},0);this.__proto__=
C.AN4;var B;this.Dr(C.APe);this.Ul.H(I1);this.Ul.Aj(true);this.Ul.T(A.aaR(A.acf.
ACL));this.Ul.Bi(false);this.Ul.Ns(93);this.Wx.H(Qf);this.Wx.Aj(true);this.Wx.T(
A.aaR(A.acf.AdX));this.Wx.Bi(true);this.Wx.Ns(92);this.Un.H(Ba_);this.Un.Aj(true
);this.Un.Bms(true);this.Un.T(A.aaR(A.acf.A6U));this.Un.Bi(false);this.J(this.Ul
,-1);this.J(this.Wx,-1);this.J(this.Un,-1);this.Ul.AR=[B=this.Ul,B.Nv];this.Wx.AR=[
B=this.Wx,B.Nv];this.Un.AR=[this,this.Bk7];this.Un.Au([B=this.FactoryResetScope,
B.B$,B.Cc]);this.Un.CL(this.FactoryResetScope);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ej;this.FactoryResetScope._Done();this.Ul._Done();this.Wx._Done(
);this.Un._Done();C.Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this
);this.FactoryResetScope._ReInit();this.Ul._ReInit();this.Wx._ReInit();this.Un._ReInit(
);this.Ul.T(A.aaR(A.acf.ACL));this.Wx.T(A.aaR(A.acf.AdX));this.Un.T(A.aaR(A.acf.
A6U));},_Mark:function(D){var B;C.Ej._Mark.call(this,D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ul)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Un)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceDataManagementScreen"};C.APe={_Init:function(
aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APe;this.Text.R(A.aaR(A.acf.ACM
));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(A.acf.ACM));},
_className:"Application::HeaderDeviceDatamanagementMenu"};C.Aq9={QX:null,Wn:null
,_Init:function(aArg){C.T5._Init.call(this,aArg);C.CG._Init.call(this.QX={I:this
},0);C.CG._Init.call(this.Wn={I:this},0);this.__proto__=C.Aq9;this.QX.H(BtY);this.
QX.R(A.aaR(A.acf.A$X));this.QX.A6(0x12);this.QX.L(A.jb.Text);this.Wn.H(Ba4);this.
Wn.R(A.aaR(A.acf.An$));this.Wn.L(A.jb.Text);this.J(this.QX,0);this.J(this.Wn,0);
this.QX.S(A.aaL(A.fl.Af));this.QX.AY(A.aaL(A.fl.Ak));this.QX.Cm(A.aaL(A.fl.Bh));
this.Wn.S(A.aaL(A.fl.Af));this.Wn.AY(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
C.T5;this.QX._Done();this.Wn._Done();C.T5._Done.call(this);},_ReInit:function(){
C.T5._ReInit.call(this);this.QX._ReInit();this.Wn._ReInit();this.QX.R(A.aaR(A.acf.
A$X));this.Wn.R(A.aaR(A.acf.An$));this.QX.S(A.aaL(A.fl.Af));this.QX.AY(A.aaL(A.fl.
Ak));this.QX.Cm(A.aaL(A.fl.Bh));this.Wn.S(A.aaL(A.fl.Af));this.Wn.AY(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.T5._Mark.call(this,D);if((B=this.QX)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Wn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"
};C.APM={QY:null,_Init:function(aArg){C.T5._Init.call(this,aArg);C.CG._Init.call(
this.QY={I:this},0);this.__proto__=C.APM;this.QY.H(BtZ);this.QY.R(A.aaR(A.acf.Uq
));this.QY.A6(0x12);this.QY.L(A.jb.Text);this.J(this.QY,0);this.QY.S(A.aaL(A.fl.
Af));this.QY.AY(A.aaL(A.fl.Ak));this.QY.Cm(A.aaL(A.fl.Bh));},_Done:function(){this.
__proto__=C.T5;this.QY._Done();C.T5._Done.call(this);},_ReInit:function(){C.T5._ReInit.
call(this);this.QY._ReInit();this.QY.R(A.aaR(A.acf.Uq));this.QY.S(A.aaL(A.fl.Af)
);this.QY.AY(A.aaL(A.fl.Ak));this.QY.Cm(A.aaL(A.fl.Bh));},_Mark:function(D){var B;
C.T5._Mark.call(this,D);if((B=this.QY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosShortNaisId"};C.AqC={IQ:null,AbK:null,Ea:null
,Bl:function(aSize){C.Nb.Bl.call(this,aSize);this.IQ.H([this.Gz.M[2],0,this.Gz.M[
2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.Ea.H([this.IQ.M[2]-1,0,this.IQ.M[2]+1
,aSize[1]]);this.AbK.H([this.IQ.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Nb.
Ai.call(this,Ae);this.AbK.L(this.Gz.AQ);this.IQ.L(this.Gz.AQ);},Ch:function(Ad){
C.Nb.Ch.call(this,Ad);if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Ih=this.AX.
Am0(Ad,14);var At1=this.AX.AOZ(Ad,7);this.IQ.Ax(A._GetAutoObject(A.Device.Converter
).AmZ(At1));this.AbK.Ax(A._GetAutoObject(A.Device.Converter).A5C(Ih));this.Am();
}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Ap._Init.call(this.IQ={
I:this},0);A.acg.Ap._Init.call(this.AbK={I:this},0);A.acg.AL._Init.call(this.Ea={
I:this},0);this.__proto__=C.AqC;this.IQ.H(Ba6);this.IQ.L(A.jb.Text);this.AbK.H(Bt0
);this.AbK.L(A.jb.Text);this.Ea.H(Bt1);this.Ea.L(A.jb.Bc);this.J(this.IQ,0);this.
J(this.AbK,0);this.J(this.Ea,0);this.IQ.Ax(A.aaL(A.aci.TX));this.AbK.Ax(A.aaL(A.
aci.TX));},_Done:function(){this.__proto__=C.Nb;this.IQ._Done();this.AbK._Done();
this.Ea._Done();C.Nb._Done.call(this);},_ReInit:function(){C.Nb._ReInit.call(this
);this.IQ._ReInit();this.AbK._ReInit();this.Ea._ReInit();},_Mark:function(D){var
B;C.Nb._Mark.call(this,D);if((B=this.IQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ANk={ZX:null,Bl:
function(aSize){C.Nb.Bl.call(this,aSize);this.ZX.H([this.Gz.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.Nb.Ai.call(this,Ae);this.ZX.L(this.Gz.AQ);},Ch:function(
Ad){C.Nb.Ch.call(this,Ad);if(!this.AX)return;this.Ht=Ad;if(!!this.AX){var Js=this.
AX.KT(Ad,26);if(Js>0)this.ZX.R(A.ab2(Js.toFixed(),5));else this.ZX.R(Rs);this.Am(
);}},_Init:function(aArg){C.Nb._Init.call(this,aArg);A.acg.Text._Init.call(this.
ZX={I:this},0);this.__proto__=C.ANk;this.ZX.H(Bt2);this.J(this.ZX,0);this.ZX.S(A.
aaL(A.fl.Af));},_Done:function(){this.__proto__=C.Nb;this.ZX._Done();C.Nb._Done.
call(this);},_ReInit:function(){C.Nb._ReInit.call(this);this.ZX._ReInit();this.ZX.
S(A.aaL(A.fl.Af));},_Mark:function(D){var B;C.Nb._Mark.call(this,D);if((B=this.ZX
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.ASc={Ap:null,Ai:function(Ae){C.AeY.Ai.call(this,Ae);this.Ap.L(this.Text.AQ);
},_Init:function(aArg){C.AeY._Init.call(this,aArg);A.acg.Ap._Init.call(this.Ap={
I:this},0);this.__proto__=C.ASc;this.Text.H(Bt3);this.Ap.H(A0y);this.J(this.Ap,0
);this.Ap.Ax(A.aaL(A.ach.Afg));},_Done:function(){this.__proto__=C.AeY;this.Ap._Done(
);C.AeY._Done.call(this);},_ReInit:function(){C.AeY._ReInit.call(this);this.Ap._ReInit(
);},_Mark:function(D){var B;C.AeY._Mark.call(this,D);if((B=this.Ap)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.YC={Text:
null,Df:null,AP:null,Gw:null,D2:null,A$:null,Init:function(aArg){var B;A.zX([this
,this.Nz],[B=A._GetAutoObject(A.Device.Device),B.AEQ,B.AI1],0);A.zV([this,this.Nz
],A._GetAutoObject(A.Device.Device).An,0);A.pe([this,this.Nz],this);},Dg:function(
E){C.BR.Dg.call(this,E);this.Df.L(E);this.Text.L(E);this.Gw.L(E);this.D2.Zz(E);}
,WO:function(E){C.BR.WO.call(this,E);this.D2.CV(E);},DX:function(G){this.D2.T(A.
_GetAutoObject(A.Device.Device).An.B8().toFixed());},Nz:function(s){this.DX(s);}
,_Init:function(aArg){C.BR._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this
},0);A.acg.Ap._Init.call(this.Df={I:this},0);A.acg.C8._Init.call(this.AP={I:this
},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2._Init.call(this.D2={I:this},0);
A.acg.C8._Init.call(this.A$={I:this},0);this.__proto__=C.YC;this.Text.H(Bt4);this.
Text.A6(0x11);this.Df.H(AyM);this.AP.DD(Ba0);this.AP.DN(Ba1);this.AP.L(A.jb.Bc);
this.Gw.H(Bt5);this.Gw.L(A.jb.CU);this.D2.A1(0x14);this.D2.H(Bt6);this.D2.Zz(A.jb.
Bm);this.D2.CV(A.jb.Rk);this.D2.Hp(2);this.A$.DD(Bt7);this.A$.DN(Bt8);this.A$.L(
A.jb.Bc);this.J(this.Text,0);this.J(this.Df,0);this.J(this.AP,0);this.J(this.Gw,
0);this.J(this.D2,0);this.J(this.A$,0);this.Text.S(A.aaL(A.fl.Af));this.Text.AY(
A.aaL(A.fl.Ak));this.Df.Ax(A.aaL(A.ach.AjW));this.Gw.Ax(A.aaL(A.ach.Gw));this.D2.
S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=C.BR;this.Text.
_Done();this.Df._Done();this.AP._Done();this.Gw._Done();this.D2._Done();this.A$.
_Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this);this.
Text._ReInit();this.Df._ReInit();this.AP._ReInit();this.Gw._ReInit();this.D2._ReInit(
);this.A$._ReInit();this.Text.S(A.aaL(A.fl.Af));this.Text.AY(A.aaL(A.fl.Ak));this.
D2.S(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A$)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Acv={FN:null
,J3:null,J2:null,AkO:null,AkP:null,Q_:null,QJ:null,AbJ:null,Wb:null,PQ:null,PR:null
,SE:null,Gx:null,Gy:null,JB:null,AlS:0,AlX:0,D7:0,DW:0,A_:0,Bl:function(aSize){var
B;this.DB.H([this.Hy.M[2]-10,this.Hy.M[1],this.H9.M[0]+10,this.Hy.M[3]]);this.DB.
AFC((B=this.DB.M)[2]-B[0]);this.DB.HK(this.DB.Gu,true,null,null);},Ai:function(Ae
){var B;C.BX.Ai.call(this,Ae);var Fv=((Ae&0x20)===0x20);var GE=this.Bo.Bw;if(!!this.
Q)this.GH(this);if((this.A_===1)||(this.A_===2)){var A1L=this.A2J(this.A_);if(!!
A1L){this.AbJ.Z(true);this.AbJ.H(A1L.M);this.AbJ.L(this.V.AQ);this.Wb.Z(true);this.
Wb.H(A1L.M);}else{this.AbJ.Z(false);this.Wb.Z(false);}this.Hy.Z(false);this.H9.Z(
false);}else{this.AbJ.Z(false);this.Wb.Z(false);this.Hy.Z(Fv||GE);this.H9.Z(Fv||
GE);}},Qx:function(G){if(!!this.Q){if(this.FI===1)A.pe([this,this.Vk],this);else
if(this.FI===4)A.pe([this,this.A04],this);else if(this.FI===5)A.pe([this,this.A02
],this);}C.BX.Qx.call(this,G);},Ki:function(G){switch(this.A_){case 0:C.BX.Ki.call(
this,G);break;case 2:break;default:this.AdA(this);}},Kd:function(G){switch(this.
A_){case 0:C.BX.Kd.call(this,G);break;default:this.Ait(this);}},A2e:function(G){
var F;if(this.A_===1){var BP=this.D7;this.D7=this.D7-10;if(this.D7<this.AlX)this.
D7=this.AlX;if(this.D7<A._GetAutoObject(A.Device.Device).AcL)this.D7=A._GetAutoObject(
A.Device.Device).AcL;if(this.DW!==BP){if(!!this.J3)(F=this.J3,F[2].call(F[0],this.
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
);return;},Vk:function(G){this.Ex(this.A_+1);},AdA:function(G){this.FI=1;this.Am(
);if(this.Bo.Bw){A.pe([this,this.Vk],this);this.Bo.As(false);}this.Bo.As(true);}
,GH:function(G){},AfL:function(s){this.GH(s);},DK:function(G){var F;if(!this.N)return;
switch(this.A_){case 1:{(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.E2));(F=this.N
,F[1].call(F[0])).Hz(A.jV);(F=this.N,F[1].call(F[0])).CF=[this,this.Hf];(F=this.
N,F[1].call(F[0])).Ct(null);(F=this.N,F[1].call(F[0])).E6(A.jV);(F=this.N,F[1].call(
F[0])).Ce=null;(F=this.N,F[1].call(F[0])).C4(A.aaL(A.ach.AeE));(F=this.N,F[1].call(
F[0])).CS(A.jV);(F=this.N,F[1].call(F[0])).Ca=[this,this.Vk];}break;case 2:{(F=this.
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
this.AbJ={I:this},0);A.acg.BW._Init.call(this.Wb={I:this},0);A.acg.Text._Init.call(
this.PQ={I:this},0);A.acg.Text._Init.call(this.PR={I:this},0);A.acg.Text._Init.call(
this.SE={I:this},0);A.Core.BF._Init.call(this.Gx={I:this},0);A.Core.BF._Init.call(
this.Gy={I:this},0);A.Core.BF._Init.call(this.JB={I:this},0);this.__proto__=C.Acv;
this.H(AfI);this.T(A.aaR(A.acf.Ary));this.Background.H(AfI);this.V.H(BD);this.V.
R(A.aaR(A.acf.AHe));this.V.A6(0x12);this.AkO.H(Bt9);this.AkO.L(A.jb.Gk);this.AkP.
H(Bt_);this.AkP.L(A.jb.Ib);this.Q_.H(Bt$);this.Q_.L(A.jb.E1);this.QJ.H(Bua);this.
AbJ.H(Bub);this.Wb.H(Buc);this.Wb.Nu(3);this.Wb.L(A.jb.AV);this.Wb.Z(false);this.
PQ.H(Bud);this.PQ.Hp(8);this.PQ.Je(true);this.PQ.A6(0x11);this.PQ.L(0xFF000000);
this.PR.H(Bue);this.PR.Hp(8);this.PR.Je(true);this.PR.A6(0x11);this.PR.L(0xFF000000
);this.SE.H(Buf);this.SE.Je(false);this.SE.A6(0x12);this.SE.L(0xFF000000);this.Gx.
Filter=5;this.Gx.Bw=false;this.Gy.Filter=4;this.Gy.Bw=false;this.JB.Filter=1;this.
J5(this.V,-1);this.J5(this.DB,-2);this.J(this.AkO,-1);this.J(this.AkP,-1);this.J(
this.Q_,-1);this.J(this.QJ,-1);this.J(this.AbJ,-1);this.J(this.Wb,-1);this.J(this.
PQ,-1);this.J(this.PR,0);this.J(this.SE,0);this.QJ.Ax(A.aaL(A.ach.ADR));this.PQ.
S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));this.SE.S(A.aaL(A.fl.Ak));this.Gx.BG=[
this,this.Al8];this.Gx.D1=[this,this.A02];this.Gy.BG=[this,this.Al9];this.Gy.D1=[
this,this.A04];this.JB.BG=[this,this.AdA];this.FN=A._NewObject(C.Aex,0);},_Done:
function(){this.__proto__=C.BX;this.AkO._Done();this.AkP._Done();this.Q_._Done();
this.QJ._Done();this.AbJ._Done();this.Wb._Done();this.PQ._Done();this.PR._Done();
this.SE._Done();this.Gx._Done();this.Gy._Done();this.JB._Done();C.BX._Done.call(
this);},_ReInit:function(){C.BX._ReInit.call(this);this.AkO._ReInit();this.AkP._ReInit(
);this.Q_._ReInit();this.QJ._ReInit();this.AbJ._ReInit();this.Wb._ReInit();this.
PQ._ReInit();this.PR._ReInit();this.SE._ReInit();this.Gx._ReInit();this.Gy._ReInit(
);this.JB._ReInit();this.T(A.aaR(A.acf.Ary));this.V.R(A.aaR(A.acf.AHe));this.PQ.
S(A.aaL(A.fl.Af));this.PR.S(A.aaL(A.fl.Af));this.SE.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BX._Mark.call(this,D);if((B=this.FN)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.J3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.J2)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AkP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.SE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.FM={X4:null,Acw:
null,Aod:0,Aoe:0,Du:function(){if(!this.X4)return 0;return this.X4.MN;},C7:function(
aIndex){if(!this.X4||(aIndex>=this.X4.MN))return-1;return this.X4.Get(aIndex);},
Gm:function(aIndex){return this.A7a().BT(this.C7(aIndex));},DZ:function(A8){if(!
this.X4)return-1;return this.X4.Avz(A8);},H8:function(){if(!this.X4)return-1;return this.
X4.H8();},AnO:function(E){if(this.Aod===E)return;this.Aod=E;A.pe([this,this.AV2]
,this);},A0X:function(Aq){this.AnO(Aq);},AnP:function(E){if(this.Aoe===E)return;
this.Aoe=E;A.pe([this,this.AV3],this);},A0Y:function(Aq){this.AnP(Aq);},AV3:function(
G){A.abo([this,this.ATb,this.A0Y],0);},AV2:function(G){A.abo([this,this.ATa,this.
A0X],0);},A7a:function(){return this.Acw;},ATa:function(){return this.Aod;},ATb:
function(){return this.Aoe;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Acw={I:this},0);this.__proto__=C.FM;},_Done:function(
){this.__proto__=C.AC;this.Acw._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Acw._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.X4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Acw)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.AMQ={Init:
function(aArg){A.zV([this,this.BfL],A._GetAutoObject(A.Device.Helper).UP,0);A.zV([
this,this.BfJ],A._GetAutoObject(A.Device.Helper).UO,0);this.BfL(this);this.BfJ(this
);},Au:function(E){C.FM.Au.call(this,E);this.AnP(A._GetAutoObject(A.Device.Helper
).UP.Get(this.DZ(E)));this.AnO(A._GetAutoObject(A.Device.Helper).UO.Get(this.DZ(
E)));},AnO:function(E){if(this.Aod===E)return;C.FM.AnO.call(this,E);A._GetAutoObject(
A.Device.Helper).UO.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UO.
Ci();},AnP:function(E){if(this.Aoe===E)return;C.FM.AnP.call(this,E);A._GetAutoObject(
A.Device.Helper).UP.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).UP.
Ci();},BfL:function(G){this.Aoe=A._GetAutoObject(A.Device.Helper).UP.Get(this.DZ(
this.Q));A.pe([this,this.AV3],this);},BfJ:function(G){this.Aod=A._GetAutoObject(
A.Device.Helper).UO.Get(this.DZ(this.Q));A.pe([this,this.AV2],this);},_Init:function(
aArg){C.FM._Init.call(this,aArg);this.__proto__=C.AMQ;this.X4=A._GetAutoObject(A.
Device.Helper).Ad3;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.AMR={AgH:null,ACd:0,ACb:0,Init:function(aArg){A.zV([this,this.BfY],A._GetAutoObject(
A.Device.Helper).AfC,0);A.zV([this,this.BfW],A._GetAutoObject(A.Device.Helper).AfB
,0);A.zV([this,this.BfU],A._GetAutoObject(A.Device.Helper).AfA,0);A.zV([this,this.
Bf0],A._GetAutoObject(A.Device.Helper).AfD,0);this.BfY(this);this.BfW(this);this.
BfU(this);this.Bf0(this);},Au:function(E){C.FM.Au.call(this,E);this.AnP(A._GetAutoObject(
A.Device.Helper).AfC.Get(this.DZ(E)));this.AnO(A._GetAutoObject(A.Device.Helper).
AfB.Get(this.DZ(E)));this.ATg(A._GetAutoObject(A.Device.Helper).AfA.Get(this.DZ(
E)));this.ATi(A._GetAutoObject(A.Device.Helper).AfD.Get(this.DZ(E)));},AnO:function(
E){if(this.Aod===E)return;C.FM.AnO.call(this,E);A._GetAutoObject(A.Device.Helper
).AfB.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfB.Ci();},AnP:function(
E){if(this.Aoe===E)return;C.FM.AnP.call(this,E);A._GetAutoObject(A.Device.Helper
).AfC.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfC.Ci();},A7a:function(
){return this.AgH;},BfY:function(G){this.Aoe=A._GetAutoObject(A.Device.Helper).AfC.
Get(this.DZ(this.Q));A.pe([this,this.AV3],this);},BfW:function(G){this.Aod=A._GetAutoObject(
A.Device.Helper).AfB.Get(this.DZ(this.Q));A.pe([this,this.AV2],this);},ATi:function(
E){if(this.ACd===E)return;this.ACd=E;A._GetAutoObject(A.Device.Helper).AfD.Set(this.
DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfD.Ci();A.pe([this,this.Bav],this
);},ATg:function(E){if(this.ACb===E)return;this.ACb=E;A._GetAutoObject(A.Device.
Helper).AfA.Set(this.DZ(this.Q),E);A._GetAutoObject(A.Device.Helper).AfA.Ci();A.
pe([this,this.Bau],this);},Bau:function(G){A.abo([this,this.A8Z,this.ATg],0);},Bav:
function(G){A.abo([this,this.A81,this.ATi],0);},BfU:function(G){this.ACb=A._GetAutoObject(
A.Device.Helper).AfA.Get(this.DZ(this.Q));A.pe([this,this.Bau],this);},Bf0:function(
G){this.ACd=A._GetAutoObject(A.Device.Helper).AfD.Get(this.DZ(this.Q));A.pe([this
,this.Bav],this);},A81:function(){return this.ACd;},A8Z:function(){return this.ACb;
},_Init:function(aArg){C.FM._Init.call(this,aArg);A.Device.AgH._Init.call(this.AgH={
I:this},0);this.__proto__=C.AMR;this.X4=A._GetAutoObject(A.Device.Helper).AgI;this.
Init(aArg);},_Done:function(){this.__proto__=C.FM;this.AgH._Done();C.FM._Done.call(
this);},_ReInit:function(){C.FM._ReInit.call(this);this.AgH._ReInit();},_Mark:function(
D){var B;C.FM._Mark.call(this,D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.AMx={RT:null,Init:function(
aArg){var B;A.zX([this,this.AiQ],[B=this.AnimalType,B.B$,B.Cc],0);A.pe([this,this.
AiQ],this);this.Bb(this.RT);},Bk:function(E){C.I_.Bk.call(this,E);this.RT.Bx(this.
Jw.AM);},AiQ:function(G){A._GetAutoObject(A.Device.Device).AwN(this.AnimalType.Q
);},_Init:function(aArg){C.I_._Init.call(this,aArg);C.TQ._Init.call(this.RT={I:this
},0);this.__proto__=C.AMx;var B;this.Jw.As(false);this.Jw.Aj(false);this.Jw.Z(false
);this.RT.H(AIX);this.RT.Aj(true);this.RT.Nq(14);this.RT.Ahy(0);this.RT.OV(0);this.
J(this.RT,-4);this.RT.AR=[this,this.AAI];this.RT.Au([B=this.AnimalType,B.B$,B.Cc
]);this.RT.CL(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.I_;this.RT._Done();C.I_._Done.call(this);},_ReInit:function(){C.I_._ReInit.call(
this);this.RT._ReInit();},_Mark:function(D){var B;C.I_._Mark.call(this,D);if((B=
this.RT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.TQ={Filter:null,Er:0,TableId:0,Operator:1,CQ:function(){var F;this.TB((F=this.
Filter,F[1].call(F[0])).DM(this.Er,this.Operator));},Bl:function(aSize){var B;C.
BX.Bl.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hy.H(AhY
);this.H9.H([aSize[0]-40,40,aSize[0],80]);this.DB.H([this.Hy.M[2]-5,this.Hy.M[1]
,this.H9.M[0]+5,this.Hy.M[3]]);this.DB.AFC((B=this.DB.M)[2]-B[0]);this.DB.HK(this.
DB.Gu,true,null,null);},Bk:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.Mj],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.Mj
],E,0);A.pe([this,this.Mj],this);},Mj:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.TB((F=this.Filter,F[1].call(F[0])).DM(this.Er,this.
Operator));else this.TB(null);},Ahy:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.Mj],this);},Nq:function(E){if(this.Er===E)return;this.
Er=E;A.pe([this,this.Mj],this);},TB:function(AI){this.T(A._GetAutoObject(A.Device.
Helper).Am1(this.TableId,this.Er));this.Am();},OV:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.Mj],this);},_Init:function(aArg){C.BX._Init.
call(this,aArg);this.__proto__=C.TQ;this.H(K3);this.V.A6(0x11);this.V.Cm(A.aaL(A.
fl.Bh));},_ReInit:function(){C.BX._ReInit.call(this);this.V.Cm(A.aaL(A.fl.Bh));this.
CQ();},_Mark:function(D){var B;C.BX._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.ASl={Gf:null,M1:null,DY:null,Y:null,Ef:null,Co:null,CH:null,Db:null,Go:null,
Ee:null,C$:null,B0:null,Ay:null,Breed:null,Jm:null,AnimalType:null,Gender:null,Pt:
null,K2:null,Jk:null,KU:null,Amo:null,KP:0,Nc:0,A4z:false,Init:function(aArg){var
B;A.zX([this,this.BBi],[B=A._GetAutoObject(A.Device.Device),B.AEV,B.AI5],0);A.zV([
this,this.Aub],this.M1,0);A.zX([this,this.Aub],[B=A._GetAutoObject(A.Device.Device
),B.Awt,B.Ay5],0);A.zX([this,this.GH],[B=A._GetAutoObject(A.Device.Device),B.AEV
,B.AI5],0);A.zV([this,this.GH],this.M1,0);A.zX([this,this.AiQ],this.B0.Q,0);A.pe([
this,this.AiQ],this);A.pe([this,this.Bfn],this);A.pe([this,this.Aub],this);A.pe([
this,this.GH],this);A.pe([this,this.A32],this);},Bb:function(E){C.AB.Bb.call(this
,E);A.pe([this,this.Aqc],this);A.pe([this,this.DK],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ef.Q,F[1].call(F[0])))this.Ef.AnC(A.jb.E1);else
this.Ef.AnC(A.jb.Gk);if(A._GetAutoObject(A.Device.Device).AeS){if(!!(F=this.Co.Dm
,F[1].call(F[0])))this.Co.AnC(A.jb.E1);else this.Co.AnC(A.jb.Gk);}else this.Co.AnC(
A.jb.Rk);A.pe([this,this.DK],this);},DF:function(G){var B;C.AB.DF.call(this,G);if(
!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(this.AV,true,null,null);},LU:function(
G){if(A._GetAutoObject(A.Device.Device).An.Ll())A._GetAutoObject(A.Device.Device
).AZ(41,true,A._GetAutoObject(A.Device.Device).An.HM().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).W.Gs();A._GetAutoObject(A.Device.Helper).Aqo(A._GetAutoObject(A.
Device.Helper).W);this.ApG();},CD:function(G){C.AB.CD.call(this,G);A._GetAutoObject(
A.Device.Device).AFJ(0);},E4:function(G){C.AB.E4.call(this,G);this.Jk.As(false);
A._GetAutoObject(A.Device.Device).UB(false);},Ew:function(G){A._GetAutoObject(A.
Device.Helper).W.E7();A._GetAutoObject(C.A7).FB();},Fj:function(G){var B;this.Ay.
MH((B=this.Y.Dd(0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.
Y.Br[1]);},Aub:function(G){var F,Cu;if(!!A._GetAutoObject(A.Device.Device).OverlayMenu
)return;this.Aqc(this);this.Am();if((this.AV===this.Ef)&&!!(F=this.Ef.Q,F[1].call(
F[0]))){if(A._GetAutoObject(A.Device.Device).An.Aeo(26,(F=this.Ef.Q,F[1].call(F[
0])))){A._GetAutoObject(A.Device.Device).AZ(21,true,A._GetAutoObject(A.Device.Converter
).Rl((F=this.Ef.Q,F[1].call(F[0]))),0,[this,this.A3R]);(F=this.Ef.Q,F[2].call(F[
0],0));A.pe([this,this.A3Q],this);return;}else if(A._GetAutoObject(A.Device.Device
).AeS)this.JN(this.Co);}var BeD=!!(F=this.Ef.Q,F[1].call(F[0]))&&(!A._GetAutoObject(
A.Device.Device).AeS||!!(Cu=this.Co.Dm,Cu[1].call(Cu[0])));if(this.M1.AOU()>0){if((
this.AV===this.Co)&&BeD)this.Bb(this.Y.TY(this.Co,0x415));return;}if((A._GetAutoObject(
A.Device.Device).AeS&&(this.AV===this.Co))&&!!(F=this.Co.Dm,F[1].call(F[0])))this.
JN(this.Ef);if(BeD)this.Bdp(this);},Ady:function(G){A._GetAutoObject(A.Device.Device
).Dw(13);},Ai2:function(){var F;this.Gf.Ci(A._GetAutoObject(A.Device.Device).An);
if(this.M1.N3(23)){if(A._GetAutoObject(A.Device.Device).Bt.Ll())A._GetAutoObject(
A.Device.Device).AZ(50,true,A._GetAutoObject(A.Device.Device).Bt.HM().toFixed(),
0,null);else{var Md=A._GetAutoObject(A.Device.Device).An.LZ(0,this.Gf.Id);A._GetAutoObject(
A.Device.Device).SX(Md);var B2=A._NewObject(A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(
this.Gf.Id);B2.OnSetBodyWeight(this.KP);B2.OnSetTimestamp(this.Gf.DateOfBirth);B2.
Ci(A._GetAutoObject(A.Device.Device).Bt);}}if(this.M1.N3(18)){if(A._GetAutoObject(
A.Device.Device).Bt.Ll())A._GetAutoObject(A.Device.Device).AZ(50,true,A._GetAutoObject(
A.Device.Device).Bt.HM().toFixed(),0,null);else{var Md=A._GetAutoObject(A.Device.
Device).An.LZ(0,this.Gf.Id);A._GetAutoObject(A.Device.Device).SX(Md);var B2=A._NewObject(
A.Device.Rating,0);B2.Gs();B2.OnSetAnimalId(this.Gf.Id);B2.OnSetBodyWeight(this.
Nc);B2.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dv());B2.Ci(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Device).WR(65280);this.Jk.As(true
);(F=A._GetAutoObject(A.Device.Device),F.AFJ(F.Av3+1));this.A4z=true;A.pe([this,
this.Aqc],this);this.ApG();},GH:function(G){this.Co.ATU(A._GetAutoObject(A.Device.
Device).AeS);A._GetAutoObject(A.Device.Helper).J6(this.B0,this.M1.N3(14));A._GetAutoObject(
A.Device.Helper).J6(this.C$,this.M1.N3(23));A._GetAutoObject(A.Device.Helper).J6(
this.CH,this.M1.N3(32));A._GetAutoObject(A.Device.Helper).J6(this.Ee,this.M1.N3(
18));A._GetAutoObject(A.Device.Helper).J6(this.Db,this.M1.N3(7));A._GetAutoObject(
A.Device.Helper).J6(this.Go,this.M1.N3(34));this.KU.Z(!this.M1.AOU());var O;var Aa=
null;var Apm=this.AV;for(O=0;O<this.M1.AfU.Ng();O++){Aa=this.Bz$(this.M1.AfU.OM(
O));if(!!Aa)this.ZL(Aa);}this.JN(Apm);A._GetAutoObject(A.Device.Helper).ANH(this.
Y);A.pe([this,this.A32],this);this.Am();},Ae0:function(E){if(this.KP===E)return;
this.KP=E;A.abo([this,this.Awf,this.Ae0],0);},Aht:function(E){if(this.Nc===E)return;
this.Nc=E;A.abo([this,this.Anv,this.Aht],0);},Bdp:function(G){this.Gf.Gs();A._GetAutoObject(
A.Device.Helper).Aqo(this.Gf);this.Gf.Q8(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
);this.Gf.Nr(A._GetAutoObject(A.Device.Helper).W.NaisId);this.Gf.SQ(A._GetAutoObject(
A.Device.Helper).AMy(0,this.Gf));this.Gf.Ae8(true);if(this.M1.N3(14))this.Gf.EC(
A._GetAutoObject(A.Device.Helper).W.AnimalType);if(this.M1.N3(32))this.Gf.N7(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.M1.N3(7))this.Gf.J0(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.M1.N3(34))this.Gf.Nt(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Alx=A._GetAutoObject(A.Device.Helper).A14(this.Gf,0,A._GetAutoObject(
A.Device.Device).An);if(!Alx)this.Ai2();else A._GetAutoObject(A.Device.Helper).AKx(
this.Gf,Alx,0,0,[this,this.ApM]);},ApG:function(){A._GetAutoObject(A.Device.Helper
).W.Nr(0);if(A._GetAutoObject(A.Device.Device).AeS)A._GetAutoObject(A.Device.Helper
).W.Q8(0);this.Ae0(0);this.Aht(0);this.JN(this.Ef);this.Am();},ApM:function(G){var
Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!Ar)return;switch(Ar.Id){case
22:case 21:case 48:this.ApG();break;case 43:this.JN(this.Ef);break;case 41:break;
default:A.ab5("%s%e",Ath,Ar.Id);}},JN:function(Ag){this.Bb(Ag);this.Y.HK(Ag,true
,null,null);this.Y.VH(null,null);},Bfn:function(G){this.Ee.Ahw(A._GetAutoObject(
A.Device.Helper).W.AhW(1));this.Aub(this);},AiQ:function(G){this.C$.Ahw(A._GetAutoObject(
A.Device.Helper).AbA(this.AnimalType.Q));},A32:function(G){var B;var BCo=this.Ay.
Background.Fp();var width=(BCo?((B=this.M)[2]-B[0])-((B=this.Ay.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var XC=this.Y.TY(null,0x401);while(!!XC&&(((B=XC)?B.__proto__:
null)!==A.Core.Y)){Aa=(C.O4.isPrototypeOf(XC)?XC:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));XC=this.Y.TY(XC,0x1);}},Bz$:function(Aar){var Aa=null;switch(Aar){case 14:Aa=
this.B0;break;case 32:Aa=this.CH;break;case 23:Aa=this.C$;break;case 7:Aa=this.Db;
break;case 18:Aa=this.Ee;break;case 34:Aa=this.Go;break;default:A.ab5("%s%e",Bug
,Aar);}return Aa;},BBi:function(G){var F;if(A._GetAutoObject(A.Device.Device).AeS
)A._GetAutoObject(A.Device.Helper).W.Q8(0);else if(!(F=this.Co.Dm,F[1].call(F[0]
)))A._GetAutoObject(A.Device.Helper).W.Q8(A._GetAutoObject(A.Device.Helper).Dv()-
A._GetAutoObject(A.Device.Helper).AmN(A._GetAutoObject(A.Device.Device).AdV));this.
Aub(this);},Aqc:function(G){var B;var AKA=A.jV;var Azq=A.jb.CK;var BdG=A.jb.AV;this.
Amo.AxR(this);if(this.A4z){this.A4z=false;AKA=A._GetAutoObject(A.Device.Helper).
MO(A.aaR(A.acf.Bp9),Pc,A._GetAutoObject(A.Device.Converter).Rl(this.Gf.NaisId));
A.pe([B=this.Amo,B.StartTimer],this);Azq=A.jb.E1;BdG=A.jb.Text;}else if((this.AV===
this.Ef)&&!A._GetAutoObject(A.Device.Helper).W.NaisId)AKA=A.aaR(A.acf.AUT);else if((
this.AV===this.Co)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AKA=A.aaR(A.
acf.Bpn);this.KU.T(AKA);this.KU.BmE(Azq);this.KU.A_e(BdG);},A3R:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X9();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X9();else if(Ar.PopupState===7){A._GetAutoObject(C.A7).Cb(76);A.
_GetAutoObject(A.Device.Device).X9();}}}else A._GetAutoObject(A.Device.Device).X9(
);},A3Q:function(G){A._GetAutoObject(A.Device.Device).Aqw();},DK:function(G){var
B;if(!this.M1.AOU()){this.N.Li.CZ(255);if(this.AV===this.Ef){this.N.C4(A.aaL(A.ach.
Edit));this.N.Ca=[B=this.Ef,B.FW];}else if(this.AV===this.Co){this.N.C4(A.aaL(A.
ach.Edit));this.N.Ca=[B=this.Co,B.FW];}else{this.N.C4(null);this.N.Ca=null;}}else{
this.N.C4(A.aaL(A.ach.Am7));if((this.Ef.AqD===A.jb.Gk)||(this.Co.AqD===A.jb.Gk)){
this.N.Li.CZ(100);this.N.Ca=null;}else{this.N.Li.CZ(255);this.N.Ca=[this,this.Bdp
];}}},Awf:function(){return this.KP;},Anv:function(){return this.Nc;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acg.AL._Init.call(this.DY={I:this},0);A.Core.
Y._Init.call(this.Y={I:this},0);C.AU7._Init.call(this.Ef={I:this},0);C.AU3._Init.
call(this.Co={I:this},0);C.AxG._Init.call(this.CH={I:this},0);C.BX._Init.call(this.
Db={I:this},0);C.AsI._Init.call(this.Go={I:this},0);C.AkW._Init.call(this.Ee={I:
this},0);C.AkW._Init.call(this.C$={I:this},0);C.BX._Init.call(this.B0={I:this},0
);C.Ay._Init.call(this.Ay={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);
C.UZ._Init.call(this.Jm={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this
},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.Na._Init.call(this.Pt={
I:this},0);A.Device.K2._Init.call(this.K2={I:this},0);A.Device.TR._Init.call(this.
Jk={I:this},0);C.AHd._Init.call(this.KU={I:this},0);A.Core.Timer._Init.call(this.
Amo={I:this},0);this.__proto__=C.ASl;var B;this.Background.L(A.jb.CU);this.N.Z(true
);this.Ek.As(false);this.Dr(C.APA);this.DY.A1(0x3F);this.DY.H(Fe);this.DY.L(A.jb.
CK);this.Y.H(Fe);this.Y.JZ(9);this.Ef.H(AIX);this.Ef.Aj(true);this.Ef.T(A.aaR(A.
acf.ACW));this.Ef.ATU(true);this.Ef.AF2(false);this.Co.H(Ba_);this.Co.Aj(true);this.
Co.T(A.aaR(A.acf.Aei));this.Co.ATU(true);this.Co.AFX(true);this.CH.H(Atg);this.CH.
Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.Db.H(Atg);this.Db.Aj(true);this.Db.T(
A.aaR(A.acf.Afs));this.Go.H(Ba$);this.Go.Aj(true);this.Go.T(A.aaR(A.acf.Jm));this.
Ee.H(Buh);this.Ee.Aj(true);this.Ee.T(A.aaR(A.acf.Nc));this.Ee.Gb(1000);this.Ee.EV(
999000);this.Ee.Ahw(A._GetAutoObject(A.Device.Helper).AbA(this.AnimalType.Q));this.
C$.H(Ba$);this.C$.Aj(true);this.C$.T(A.aaR(A.acf.KP));this.C$.Gb(1000);this.C$.EV(
99000);this.C$.Ahw(A._GetAutoObject(A.Device.Helper).AbA(this.AnimalType.Q));this.
B0.H(Aou);this.B0.Aj(true);this.B0.T(A.aaR(A.acf.Afx));this.Ay.H(Ix);this.Jk.B3=
false;this.Jk.Cx=true;this.Jk.HQ(1);this.Jk.Fq(1000);this.Jk.Uy(0);this.KU.H(Aao
);this.KU.Aj(true);this.KU.AnC(A.jb.Text);this.Amo.PZ(3000);this.J(this.DY,0);this.
J(this.Y,0);this.J(this.Ef,0);this.J(this.Co,0);this.J(this.CH,0);this.J(this.Db
,0);this.J(this.Go,0);this.J(this.Ee,0);this.J(this.C$,0);this.J(this.B0,0);this.
J(this.Ay,0);this.J(this.KU,0);this.N.CF=[this,this.Ew];this.N.Ce=[this,this.Ady
];this.N.C3(A.aaL(A.ach.E2));this.N.Ct(A.aaL(A.ach.AeG));this.Y.Em=[this,this.Fj
];this.Ef.Gt([this,this.D_,this.GT]);this.Ef.Au([B=A._GetAutoObject(A.Device.Helper
).W,B.Any,B.Nr]);this.Ef.AFx([this,this.Aub]);this.Ef.ATG([this,this.A3Q]);this.
Ef.ATH([this,this.A3R]);this.Co.Gt([this,this.D_,this.GT]);this.Co.Acc([B=A._GetAutoObject(
A.Device.Helper).W,B.Awi,B.Q8]);this.Co.OO=[this,this.Bfn];this.Co.ATG([this,this.
A3Q]);this.Co.ATH([this,this.A3R]);this.CH.Gt([this,this.D_,this.GT]);this.CH.L5([
B=this.CH,B.FW]);this.CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc
]);this.CH.CL(this.Breed);this.CH.AnD(this.Pt);this.Db.Au([B=this.Gender,B.B$,B.
Cc]);this.Db.CL(this.Gender);this.Go.Gt([this,this.D_,this.GT]);this.Go.L5([B=this.
Go,B.FW]);this.Go.L8(A.aaL(A.ach.Edit));this.Go.Au([B=this.Jm,B.B$,B.Cc]);this.Go.
CL(this.Jm);this.Go.AnD(this.K2);this.Ee.Au([this,this.Anv,this.Aht]);this.C$.Au([
this,this.Awf,this.Ae0]);this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CL(this.
AnimalType);this.Ay.BnY([this,this.A32]);this.Breed.L6(A._GetAutoObject(A.Device.
Helper).W);this.Jm.L6(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.L6(A.
_GetAutoObject(A.Device.Helper).W);this.Gender.L6(A._GetAutoObject(A.Device.Helper
).W);this.Gf=A._NewObject(A.Device.Animal,0);this.M1=A._GetAutoObject(C.Amw);this.
Jk.Q=[B=A._GetAutoObject(A.Device.Device),B.AS8,B.A0T];this.Amo.MK=[this,this.Aqc
];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DY._Done();this.Y.
_Done();this.Ef._Done();this.Co._Done();this.CH._Done();this.Db._Done();this.Go.
_Done();this.Ee._Done();this.C$._Done();this.B0._Done();this.Ay._Done();this.Breed.
_Done();this.Jm._Done();this.AnimalType._Done();this.Gender._Done();this.Pt._Done(
);this.K2._Done();this.Jk._Done();this.KU._Done();this.Amo._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.DY._ReInit();this.Y._ReInit(
);this.Ef._ReInit();this.Co._ReInit();this.CH._ReInit();this.Db._ReInit();this.Go.
_ReInit();this.Ee._ReInit();this.C$._ReInit();this.B0._ReInit();this.Ay._ReInit(
);this.Breed._ReInit();this.Jm._ReInit();this.AnimalType._ReInit();this.Gender._ReInit(
);this.Pt._ReInit();this.K2._ReInit();this.Jk._ReInit();this.KU._ReInit();this.Amo.
_ReInit();this.Ef.T(A.aaR(A.acf.ACW));this.Co.T(A.aaR(A.acf.Aei));this.CH.T(A.aaR(
A.acf.Breed));this.Db.T(A.aaR(A.acf.Afs));this.Go.T(A.aaR(A.acf.Jm));this.Ee.T(A.
aaR(A.acf.Nc));this.C$.T(A.aaR(A.acf.KP));this.B0.T(A.aaR(A.acf.Afx));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Gf)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.M1)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DY)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Y)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Go)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K2)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KU).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Amo)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewAnimalsMassRecording"};C.AsH={SI:null,_Init:function(aArg){C.SetTransponderScreen.
_Init.call(this,aArg);C.CG._Init.call(this.SI={I:this},0);this.__proto__=C.AsH;this.
N.CS(A.aaR(A.acf.A6K));this.Number.H(Bui);this.Jl.H(Buj);this.IZ.H(Buk);this.AkG(
2);this.Bdm=false;this.Bes=true;this.Bet=false;this.SI.H(Bul);this.SI.R(A.aaR(A.
acf.A$4));this.SI.L(A.jb.Text);this.J(this.SI,0);this.N.CF=null;this.N.Ca=[this,
this.AI$];this.N.C3(null);this.SI.S(A.aaL(A.fl.Af));this.SI.AY(A.aaL(A.fl.Ak));this.
SI.Cm(A.aaL(A.fl.Bh));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.
SI._Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.SI._ReInit();this.N.CS(A.aaR(A.acf.A6K));this.SI.R(A.aaR(
A.acf.A$4));this.SI.S(A.aaL(A.fl.Af));this.SI.AY(A.aaL(A.fl.Ak));this.SI.Cm(A.aaL(
A.fl.Bh));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.SI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancellableScreen"
};C.AD9={Cv:null,FP:function(E){if(this.Ne===E)return;C.HN.FP.call(this,E);this.
Cv.CV(E);},YA:function(HC){var B6=null;switch(HC){case-1:case 0:B6=this.F_;break;
case 1:B6=this.Cv;break;case 2:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;
},_Init:function(aArg){C.HN._Init.call(this,aArg);C.DG._Init.call(this.Cv={I:this
},0);this.__proto__=C.AD9;this.H(Bum);this.Cv.H(BaN);this.F_.H(Bun);this.J(this.
Cv,-2);this.Cv.Dk=[this,this.GY];},_Done:function(){this.__proto__=C.HN;this.Cv.
_Done();C.HN._Done.call(this);},_ReInit:function(){C.HN._ReInit.call(this);this.
Cv._ReInit();},_Mark:function(D){var B;C.HN._Mark.call(this,D);if((B=this.Cv)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.AsI={G7:null
,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.V.H(A.abN(this.V.M,this.G7.M[0
]));},Ai:function(Ae){C.O1.Ai.call(this,Ae);if(this.Hn)this.G7.FP(A.jb.CK);else this.
G7.FP(A.jb.CU);},A2D:function(){this.Bb(this.G7);},_Init:function(aArg){C.O1._Init.
call(this,aArg);C.HN._Init.call(this.G7={I:this},0);this.__proto__=C.AsI;this.G7.
H(Buo);this.J(this.G7,0);this.G7.Au([this,this.ASY,this.AFQ]);},_Done:function(){
this.__proto__=C.O1;this.G7._Done();C.O1._Done.call(this);},_ReInit:function(){C.
O1._ReInit.call(this);this.G7._ReInit();},_Mark:function(D){var B;C.O1._Mark.call(
this,D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AxG={G7:null,Bl:function(aSize){C.O1.Bl.call(this,aSize);this.V.H(A.abN(this.
V.M,this.G7.M[0]));},Ai:function(Ae){C.O1.Ai.call(this,Ae);if(this.Hn)this.G7.FP(
A.jb.CK);else this.G7.FP(A.jb.CU);},A2D:function(){this.Bb(this.G7);},_Init:function(
aArg){C.O1._Init.call(this,aArg);C.AD9._Init.call(this.G7={I:this},0);this.__proto__=
C.AxG;this.G7.A1(0x18);this.G7.H(Bup);this.J(this.G7,0);this.G7.Au([this,this.ASY
,this.AFQ]);},_Done:function(){this.__proto__=C.O1;this.G7._Done();C.O1._Done.call(
this);},_ReInit:function(){C.O1._ReInit.call(this);this.G7._ReInit();},_Mark:function(
D){var B;C.O1._Mark.call(this,D);if((B=this.G7)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Acx={ScreenTypeToString:
null,Du:function(){return 4;},Gm:function(aIndex){if((aIndex<0)||(aIndex>=96))return A.
jV;return this.ScreenTypeToString.BT(this.C7(aIndex));},_Init:function(aArg){C.Cn.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Acx;this.BI.Set(0,3);this.BI.Set(1,35);this.BI.Set(2
,34);this.BI.Set(3,43);},_Done:function(){this.__proto__=C.Cn;this.ScreenTypeToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AWm={KU:null,HI:null,LY:null,IN:null,KL:A.jV,Aqt:false,ALu:false,A2W:false,Init:
function(aArg){var B;A.zX([this,this.BfT],[B=A._GetAutoObject(A.Device.Device),B.
Uu,B.Vc],0);A.pe([this,this.BfT],this);A.pe([this,this.Aqc],this);},WM:function(
G){this.Agz();A._GetAutoObject(C.BS).TH(A.aaR(A.acf.Settings),[this,this.A37]);A.
_GetAutoObject(C.BS).Fz();this.AMl();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.LinkTransponder
));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.ARN)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},DF:function(G){},H1:function(
G){if((this.Aqt===false)||!this.KL.length){C.Mo.H1.call(this,G);return;}if(!this.
KL.length)this.LY.Mx=true;var FK=A._GetAutoObject(A.Device.AkK).Bf_(this.KL);this.
KL=A.jV;if(!FK){if((this.KL.length<13)&&!A._GetAutoObject(A.Device.Device).OZ)A.
_GetAutoObject(A.Device.Device).AZ(105,true,A.jV,0,[this,this.SM]);else A._GetAutoObject(
A.Device.Device).AZ(103,true,A.jV,0,[this,this.SM]);A.pe([this,this.WN],this);return;
}if(A._GetAutoObject(A.Device.Helper).BkC(FK)){A.pe([this,this.A$V],this);A.pe([
this,this.Aaq],this);}else{A._GetAutoObject(A.Device.Device).AZ(117,true,A.jV,0,[
this,this.SM]);A.pe([this,this.WN],this);}},CD:function(G){C.Mo.CD.call(this,G);
if(this.A2W){this.A2W=false;A.pe([this,this.A0Z],this);}},Agi:function(G){if(this.
Aqt&&(this.KL.length>0)){A.pe([this,this.Alo],this);return;}C.Mo.Agi.call(this,G
);this.A$l(true);},AbB:function(){return C.ACo;},AbC:function(){return C.ADI;},Ra:
function(G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper
).A7p(Math.max(A._GetAutoObject(A.Device.Device).Av5,A._GetAutoObject(A.Device.Helper
).A7h(A._GetAutoObject(A.Device.Device).An))+1));},HS:function(G){C.Mo.HS.call(this
,G);if((((A._GetAutoObject(A.Device.Converter).S9(A._GetAutoObject(A.Device.Device
).OZ)===10)&&this.ALu)&&!!this.Bg.AX)&&!this.Bg.AX.B8()){this.N.Ct(null);this.N.
E6(A.aaR(A.acf.No));this.N.Ce=[this,this.BBw];this.N.C4(null);this.N.CS(A.aaR(A.
acf.Yes));this.N.Ca=[this,this.BBx];}else if(A._GetAutoObject(A.Device.Helper).ARy(
)){this.N.Ct(A.aaL(A.ach.Arc));this.N.Ce=null;this.N.E6(A.jV);this.N.IS.CZ(100);
}else if(this.Aki()===false){this.N.Ct(A._GetAutoObject(A.Device.Converter).Ajs(
A._GetAutoObject(A.Device.Converter).AMg(this.L3.ADj())));this.N.Ce=[this,this.Aaq
];this.N.E6(A.jV);}this.N.OW(false);this.N.OX(false);},AaO:function(G){C.Mo.AaO.
call(this,G);this.Bhi(this);},Agl:function(){A._GetAutoObject(C.A7).Cb(86);},ABg:
function(G){var aFilter=A._GetAutoObject(A.Device.Device).An.Filter.E$();var Aze=
aFilter.DM(26,4);if(!!Aze){aFilter.Nw(Aze);A._GetAutoObject(A.Device.Device).An.
Bk(aFilter);if(!!this.Bg)this.Bg.GU(0);}},A7f:function(){return C.APH;},Bgx:function(
){var B;var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).An.
Filter){Filter=A._GetAutoObject(A.Device.Device).An.Filter.E$();FilterCriterion=(
A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.DM(26,4))?B:null);if(
!!FilterCriterion)Filter.Nw(FilterCriterion);A._GetAutoObject(A.Device.Device).An.
Bk(Filter);}},A37:function(G){A._GetAutoObject(A.Device.Device).Dw(0);this.A2W=true;
A._GetAutoObject(C.A7).Cb(89);},ALB:function(G){if(A._GetAutoObject(A.Device.Converter
).S9(A._GetAutoObject(A.Device.Device).OZ)===10){if(this.ALu){this.Dl(A.aaR(A.acf.
Bo3));this.Bg.NU.S(A.aaL(A.fl.Bh));}else{this.Dl(A.aaR(A.acf.AEG));this.Bg.NU.S(
A.aaL(A.fl.Af));}}else this.Dl(A.aaR(A.acf.AEG));},A$l:function(E){if(this.ALu===
E)return;this.ALu=E;A.pe([this,this.AoF],this);A.pe([this,this.ALB],this);},BBx:
function(G){A._GetAutoObject(C.A7).Acf(90);},BBw:function(G){this.A$l(false);},BfT:
function(G){this.Bhi(this);},Bmw:function(E){if(this.Aqt===E)return;this.Aqt=E;A.
pe([this,this.Z9],this);A.pe([this,this.Aqc],this);},Aqc:function(G){this.KU.Z(this.
Aqt);if(this.Aqt)this.A_I(Bba);else this.A_I(Ale);},AAO:function(G){if(this.KL.length<
17)this.KL=this.KL+String.fromCharCode(this.HI.Dy);},Awc:function(G){if((this.IN.
Dy===0x0D)||(this.IN.Dy===0x0A))this.H1(this);else this.IN.Mx=true;},WN:function(
G){A._GetAutoObject(A.Device.Device).Aqw();A.ab5("%s",Buq);},SM:function(G){var Ar=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar){if(Ar.PopupState===4)A._GetAutoObject(
A.Device.Device).X9();else if(Ar.Id===105){if(Ar.PopupState===8)A._GetAutoObject(
A.Device.Device).X9();else if(Ar.PopupState===7){A._GetAutoObject(C.A7).Cb(76);A.
_GetAutoObject(A.Device.Device).X9();}}}else A._GetAutoObject(A.Device.Device).X9(
);},Bhi:function(G){this.Bmw(A._GetAutoObject(A.Device.Helper).ARy()&&(A._GetAutoObject(
A.Device.Device).An.B8()>0));},_Init:function(aArg){C.Mo._Init.call(this,aArg);C.
AHd._Init.call(this.KU={I:this},0);A.Core.BF._Init.call(this.HI={I:this},0);A.Core.
BF._Init.call(this.LY={I:this},0);A.Core.BF._Init.call(this.IN={I:this},0);this.
__proto__=C.AWm;this.Dr(C.ADz);this.Dl(A.aaR(A.acf.AEG));this.KU.H(Aou);this.KU.
T(A.aaR(A.acf.AUT));this.KU.AnC(A.jb.Text);this.KU.A_e(A.jb.AV);this.HI.Filter=143;
this.LY.Filter=149;this.IN.Filter=145;this.J(this.KU,0);this.ATC(A._GetAutoObject(
C.Aya));this.HI.BG=[this,this.AAO];this.LY.BG=[this,this.Alo];this.IN.BG=[this,this.
Awc];this.Init(aArg);},_Done:function(){this.__proto__=C.Mo;this.KU._Done();this.
HI._Done();this.LY._Done();this.IN._Done();C.Mo._Done.call(this);},_ReInit:function(
){C.Mo._ReInit.call(this);this.KU._ReInit();this.HI._ReInit();this.LY._ReInit();
this.IN._ReInit();this.Dl(A.aaR(A.acf.AEG));this.KU.T(A.aaR(A.acf.AUT));},_Mark:
function(D){var B;C.Mo._Mark.call(this,D);if((B=this.KU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YoungNoTransponderListScreen"
};C.AWl={_Init:function(aArg){C.I_._Init.call(this,aArg);this.__proto__=C.AWl;this.
K0.As(false);this.K0.Aj(false);this.K0.Z(false);this.Bny(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ARq={Sx:null,Q:null,A8z:0,Ne:0,Init:function(aArg){this.ATF(6);},Au:function(
E){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.Sx)this.Sx.Au(E);},ATF:function(
E){if(this.A8z===E)return;this.A8z=E;var X;switch(E){case 2:X=A._NewObject(C.HN,
0);break;case 3:X=A._NewObject(C.AD9,0);break;case 4:X=A._NewObject(C.ARn,0);break;
case 5:X=A._NewObject(C.ARo,0);break;case 6:X=A._NewObject(C.AvW,0);break;default:{
X=null;A.ab5("%s%i",Bur,E);}}this.Bnx(X);},Bnx:function(E){if(this.Sx===E)return;
if(!!this.Sx){this.Sx.Au(null);this.HR(this.Sx);}this.Sx=E;if(!!this.Sx){this.Sx.
Au(this.Q);this.J(this.Sx,0);}},FP:function(E){if(this.Ne===E)return;this.Ne=E;if(
!!this.Sx)this.Sx.FP(E);},SW:function(GA){if(!!this.Sx)this.Sx.SW(GA);},_Init:function(
aArg){A.Core.P._Init.call(this,aArg);this.__proto__=C.ARq;this.H(Ayv);this.Init(
aArg);},_Mark:function(D){var B;A.Core.P._Mark.call(this,D);if((B=this.Sx)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.ARn={CW:null,Cv:null,FP:function(
E){if(this.Ne===E)return;C.HN.FP.call(this,E);this.Cv.CV(E);this.CW.CV(E);},YA:function(
HC){var B6=null;switch(HC){case-1:case 0:B6=this.F_;break;case 1:B6=this.Cv;break;
case 2:B6=this.CW;break;case 3:B6=this.G3;break;default:A.ab5("%s",Ah5);}return B6;
},_Init:function(aArg){C.HN._Init.call(this,aArg);C.DG._Init.call(this.CW={I:this
},0);C.DG._Init.call(this.Cv={I:this},0);this.__proto__=C.ARn;this.H(Bus);this.G3.
H(Aln);this.CW.H(BaO);this.Cv.H(BaP);this.F_.H(BaQ);this.J(this.CW,-2);this.J(this.
Cv,-2);this.CW.Dk=[this,this.GY];this.Cv.Dk=[this,this.GY];},_Done:function(){this.
__proto__=C.HN;this.CW._Done();this.Cv._Done();C.HN._Done.call(this);},_ReInit:function(
){C.HN._ReInit.call(this);this.CW._ReInit();this.Cv._ReInit();},_Mark:function(D
){var B;C.HN._Mark.call(this,D);if((B=this.CW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.AC5={S_:null,Ai:function(Ae){C.Abz.Ai.call(this,Ae);this.S_.L(this.V.AQ);},_Init:
function(aArg){C.Abz._Init.call(this,aArg);C.CG._Init.call(this.S_={I:this},0);this.
__proto__=C.AC5;this.V.Z(false);this.AW.H(But);this.AW.ATF(4);this.S_.H(Buu);this.
S_.R(A.aaR(A.acf.Kq));this.S_.L(A.jb.Bm);this.J(this.S_,0);this.S_.S(A.aaL(A.fl.
Af));this.S_.AY(A.aaL(A.fl.Ak));this.S_.Cm(null);},_Done:function(){this.__proto__=
C.Abz;this.S_._Done();C.Abz._Done.call(this);},_ReInit:function(){C.Abz._ReInit.
call(this);this.S_._ReInit();this.S_.R(A.aaR(A.acf.Kq));this.S_.S(A.aaL(A.fl.Af)
);this.S_.AY(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Abz._Mark.call(this,D);
if((B=this.S_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.L4={Y8:null,Ue:null,AQ:0,A7Q:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.Y8.L(this.AQ);this.Ue.L(this.AQ);},A_E:function(E){var B;if(this.A7Q===
E)return;this.A7Q=E;if(E){this.Y8.Z(true);this.Ue.DD([this.Ue.ED[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Y8.Z(false);this.Ue.DD([this.Ue.ED[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.P._Init.call(this,aArg);A.acg.C8._Init.call(
this.Y8={I:this},0);A.acg.C8._Init.call(this.Ue={I:this},0);this.__proto__=C.L4;
this.H(A0z);this.Y8.A1(0x2D);this.Y8.DD(Ah0);this.Y8.DN(Bbb);this.Y8.L(A.jb.Text
);this.Ue.A1(0x36);this.Ue.DD(Bbb);this.Ue.DN(Buv);this.Ue.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.Y8,0);this.J(this.Ue,0);},_Done:function(){this.__proto__=
A.Core.P;this.Y8._Done();this.Ue._Done();A.Core.P._Done.call(this);},_ReInit:function(
){A.Core.P._ReInit.call(this);this.Y8._ReInit();this.Ue._ReInit();},_Mark:function(
D){var B;A.Core.P._Mark.call(this,D);if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Ue)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AUK={SC:null,PJ:null,Db:null,B0:null,CH:null,GQ:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pt:null,UZ:null,K2:null,Init:function(aArg){A.zX([this
,this.AuV],this.B0.Q,0);A.zX([this,this.ANd],this.CH.Q,0);A.zX([this,this.Brr],this.
SC.Q,0);A.zX([this,this.Avx],this.Db.Q,0);A.zX([this,this.AWi],this.GQ.Q,0);},AuV:
function(G){var F;A._GetAutoObject(A.Device.Device).EC((F=this.B0.Q,F[1].call(F[
0])));},Brr:function(G){var F;A._GetAutoObject(A.Device.Device).Axn((F=this.SC.Q
,F[1].call(F[0])));},Avx:function(G){var F;A._GetAutoObject(A.Device.Device).J0((
F=this.Db.Q,F[1].call(F[0])));},AWi:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GQ.Q,F[1].call(F[0])));},ANd:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cg._Init.
call(this,aArg);C.BX._Init.call(this.SC={I:this},0);C.Iv._Init.call(this.PJ={I:this
},0);C.BX._Init.call(this.Db={I:this},0);C.BX._Init.call(this.B0={I:this},0);C.AxG.
_Init.call(this.CH={I:this},0);C.AsI._Init.call(this.GQ={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.Na._Init.call(this.Pt={I:this},0);C.UZ._Init.call(this.UZ={I:
this},0);A.Device.K2._Init.call(this.K2={I:this},0);this.__proto__=C.AUK;var B;this.
Jf((A.aaR(A.acf.Asv)+AyI)+A.aaR(A.acf.AjH));this.SC.H(Ah3);this.SC.Aj(true);this.
SC.T(A.aaR(A.acf.BaF));this.SC.Bi(true);this.SC.Bx(0);this.PJ.H(Ayt);this.PJ.Aj(
true);this.PJ.Z(true);this.PJ.T(A.aaR(A.acf.AdV));this.PJ.Gb(0);this.PJ.EV(99);this.
PJ.IW(A.aaR(A.acf.Kq));this.PJ.Jg(A.aaR(A.acf.GL));this.Db.H(Aao);this.Db.Aj(true
);this.Db.T(A.aaR(A.acf.Afs));this.Db.Bi(true);this.Db.Bx(0);this.B0.H(Alk);this.
B0.Aj(true);this.B0.T(A.aaR(A.acf.Afx));this.B0.Bi(true);this.B0.Bx(0);this.CH.H(
Ah4);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.Breed));this.CH.Bi(false);this.GQ.H(
Ah4);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jm));this.GQ.Bi(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.UZ.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.SC,0);this.
J(this.PJ,0);this.J(this.Db,0);this.J(this.B0,0);this.J(this.CH,0);this.J(this.GQ
,0);this.SC.Au([B=this.WeightRecordingScope,B.B$,B.Cc]);this.SC.CL(this.WeightRecordingScope
);this.PJ.Au([B=A._GetAutoObject(A.Device.Device),B.A8S,B.Bby]);this.Db.Au([B=this.
Gender,B.B$,B.Cc]);this.Db.CL(this.Gender);this.B0.Au([B=this.AnimalType,B.B$,B.
Cc]);this.B0.CL(this.AnimalType);this.CH.Gt([this,this.D_,this.GT]);this.CH.L5([
B=this.CH,B.FW]);this.CH.L8(A.aaL(A.ach.Edit));this.CH.Au([B=this.Breed,B.B$,B.Cc
]);this.CH.CL(this.Breed);this.CH.AnD(this.Pt);this.GQ.Gt([this,this.D_,this.GT]
);this.GQ.L5([B=this.GQ,B.FW]);this.GQ.L8(A.aaL(A.ach.Edit));this.GQ.Au([B=this.
UZ,B.B$,B.Cc]);this.GQ.CL(this.UZ);this.GQ.AnD(this.K2);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cg;this.SC._Done();this.PJ._Done();this.Db._Done();this.
B0._Done();this.CH._Done();this.GQ._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pt._Done();this.UZ._Done();this.
K2._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
SC._ReInit();this.PJ._ReInit();this.Db._ReInit();this.B0._ReInit();this.CH._ReInit(
);this.GQ._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pt._ReInit();this.UZ._ReInit();
this.K2._ReInit();this.Jf((A.aaR(A.acf.Asv)+AyI)+A.aaR(A.acf.AjH));this.SC.T(A.aaR(
A.acf.BaF));this.PJ.T(A.aaR(A.acf.AdV));this.PJ.IW(A.aaR(A.acf.Kq));this.PJ.Jg(A.
aaR(A.acf.GL));this.Db.T(A.aaR(A.acf.Afs));this.B0.T(A.aaR(A.acf.Afx));this.CH.T(
A.aaR(A.acf.Breed));this.GQ.T(A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Cg._Mark.
call(this,D);if((B=this.SC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B0
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UZ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.K2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AUJ={QS:null,FD:null,Ir:null,Da:null,Dn:null,EL:null,AutoRegistrationMode:null
,AdY:null,Init:function(aArg){var B;A.zX([this,this.BhW],this.QS.Q,0);A.zX([this
,this.Be_],[B=A._GetAutoObject(A.Device.Device),B.ASI,B.A0F],0);A.zX([this,this.
Adz],[B=A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.zX([this,this.Adz],[B=
A._GetAutoObject(A.Device.Device),B.Ut,B.Va],0);A.pe([this,this.Be_],this);A.pe([
this,this.Adz],this);},BhW:function(G){var F;A._GetAutoObject(A.Device.Device).AwA((
F=this.QS.Q,F[1].call(F[0])));},Be_:function(G){switch(A._GetAutoObject(A.Device.
Device).AgC){case 0:A._GetAutoObject(A.Device.Helper).J6(this.Ir,true);break;case
1:A._GetAutoObject(A.Device.Helper).J6(this.Ir,false);break;default:throw new Error(
Buw+A._GetAutoObject(A.Device.Device).AgC.toFixed());}},Adz:function(G){var F,Cu;
if(((F=this.Da.Q,F[1].call(F[0]))+(Cu=this.Dn.Q,Cu[1].call(Cu[0])))>12)(Cu=this.
Dn.Q,Cu[2].call(Cu[0],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){
C.Cg._Init.call(this,aArg);C.BX._Init.call(this.QS={I:this},0);C.BX._Init.call(this.
FD={I:this},0);C.AGV._Init.call(this.Ir={I:this},0);C.Iv._Init.call(this.Da={I:this
},0);C.Iv._Init.call(this.Dn={I:this},0);C.Av6._Init.call(this.EL={I:this},0);C.
AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.AdY._Init.
call(this.AdY={I:this},0);this.__proto__=C.AUJ;var B;this.Jf(A.aaR(A.acf.Aqs));this.
QS.H(AIX);this.QS.Aj(true);this.QS.T(A.aaR(A.acf.Aqs));this.QS.Bi(false);this.QS.
Gb(-1);this.QS.EV(1);this.FD.H(U8);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.
aaR(A.acf.Aqp));this.FD.Bi(true);this.Ir.H(Aao);this.Ir.Aj(true);this.Ir.Z(true);
this.Ir.T(A.aaR(A.acf.AEE));this.Ir.Bi(true);this.Da.H(Alk);this.Da.Aj(true);this.
Da.Z(true);this.Da.T(A.aaR(A.acf.AqM));this.Da.Bi(false);this.Da.Gb(2);this.Da.EV(
6);this.Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(Ah4);this.Dn.
Aj(true);this.Dn.T(A.aaR(A.acf.Zs));this.Dn.Bi(true);this.Dn.Gb(0);this.Dn.EV(12
);this.Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Bux);this.EL.
As(true);this.EL.Aj(true);this.EL.Bi(false);this.EL.Ar9(A.aaR(A.acf.Aqr));this.AutoRegistrationMode.
Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode);this.J(this.QS,0);this.
J(this.FD,0);this.J(this.Ir,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL
,0);this.QS.Au([B=this.AutoRegistrationMode,B.B$,B.Cc]);this.QS.CL(this.AutoRegistrationMode
);this.FD.Au([B=this.AdY,B.B$,B.Cc]);this.FD.CL(this.AdY);this.Ir.Ux([B=A._GetAutoObject(
A.Device.Device),B.WK,B.A0I]);this.Ir.Akx([B=A._GetAutoObject(A.Device.Device),B.
Awk,B.AyZ]);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.Dn.
Au([B=A._GetAutoObject(A.Device.Device),B.Ut,B.Va]);this.EL.DC(A.aaL(A.ach.AjY));
this.EL.OU([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.EL.PY([B=A._GetAutoObject(
A.Device.Device),B.Ut,B.Va]);this.Init(aArg);},_Done:function(){this.__proto__=C.
Cg;this.QS._Done();this.FD._Done();this.Ir._Done();this.Da._Done();this.Dn._Done(
);this.EL._Done();this.AutoRegistrationMode._Done();this.AdY._Done();C.Cg._Done.
call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.QS._ReInit();this.FD.
_ReInit();this.Ir._ReInit();this.Da._ReInit();this.Dn._ReInit();this.EL._ReInit(
);this.AutoRegistrationMode._ReInit();this.AdY._ReInit();this.Jf(A.aaR(A.acf.Aqs
));this.QS.T(A.aaR(A.acf.Aqs));this.FD.T(A.aaR(A.acf.Aqp));this.Ir.T(A.aaR(A.acf.
AEE));this.Da.T(A.aaR(A.acf.AqM));this.Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.
acf.Ez));this.Dn.T(A.aaR(A.acf.Zs));this.Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(
A.acf.Ez));this.EL.Ar9(A.aaR(A.acf.Aqr));},_Mark:function(D){var B;C.Cg._Mark.call(
this,D);if((B=this.QS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ir)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AVO={OP:null,FD:null,Ir:null,Da:null,Dn:null,EL:null,Afw:null,Init:function(
aArg){var B;A.zX([this,this.BfN],[B=A._GetAutoObject(A.Device.Device),B.AS_,B.A0V
],0);A.zX([this,this.Adz],[B=A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.zX([
this,this.Adz],[B=A._GetAutoObject(A.Device.Device),B.Ut,B.Va],0);A.pe([this,this.
BfN],this);A.pe([this,this.Adz],this);},BfN:function(G){var ALg=false;var AaX=false;
switch(A._GetAutoObject(A.Device.Device).Ak6){case 0:{ALg=false;AaX=false;}break;
case 1:{ALg=true;AaX=false;}break;case 2:{ALg=false;AaX=true;}break;default:throw new
Error(Buy+A._GetAutoObject(A.Device.Device).Ak6.toFixed());}A._GetAutoObject(A.Device.
Helper).J6(this.Ir,ALg);A._GetAutoObject(A.Device.Helper).J6(this.Da,AaX);A._GetAutoObject(
A.Device.Helper).J6(this.Dn,AaX);A._GetAutoObject(A.Device.Helper).J6(this.EL,AaX
);},Adz:function(G){var F,Cu;if(((F=this.Da.Q,F[1].call(F[0]))+(Cu=this.Dn.Q,Cu[
1].call(Cu[0])))>12)(Cu=this.Dn.Q,Cu[2].call(Cu[0],12-(F=this.Da.Q,F[1].call(F[0
]))));},_Init:function(aArg){C.Cg._Init.call(this,aArg);C.Iv._Init.call(this.OP={
I:this},0);C.BX._Init.call(this.FD={I:this},0);C.AGV._Init.call(this.Ir={I:this}
,0);C.Iv._Init.call(this.Da={I:this},0);C.Iv._Init.call(this.Dn={I:this},0);C.Av6.
_Init.call(this.EL={I:this},0);C.Afw._Init.call(this.Afw={I:this},0);this.__proto__=
C.AVO;var B;this.Jf(A.aaR(A.acf.LinkTransponder));this.OP.H(AIX);this.OP.Aj(true
);this.OP.Z(true);this.OP.T(A.aaR(A.acf.A7_));this.OP.Bi(false);this.OP.Gb(1);this.
OP.EV(365);this.OP.IW(A.aaR(A.acf.Kq));this.OP.Jg(A.aaR(A.acf.GL));this.FD.H(U8);
this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqp));this.FD.Bi(true);this.
Ir.H(Aao);this.Ir.Aj(true);this.Ir.Z(true);this.Ir.T(A.aaR(A.acf.AEE));this.Ir.Bi(
false);this.Da.H(Alk);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.AqM
));this.Da.Bi(false);this.Da.Gb(2);this.Da.EV(6);this.Da.IW(A.aaR(A.acf.OK));this.
Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(Ah4);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.Zs)
);this.Dn.Bi(true);this.Dn.Gb(0);this.Dn.EV(12);this.Dn.IW(A.aaR(A.acf.OK));this.
Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Aot);this.EL.As(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar9(A.aaR(A.acf.Aqr));this.J(this.OP,0);this.J(this.FD,0);this.
J(this.Ir,0);this.J(this.Da,0);this.J(this.Dn,0);this.J(this.EL,0);this.OP.Au([B=
A._GetAutoObject(A.Device.Device),B.A9n,B.BbP]);this.FD.Au([B=this.Afw,B.B$,B.Cc
]);this.FD.CL(this.Afw);this.Ir.Ux([B=A._GetAutoObject(A.Device.Device),B.WK,B.A0I
]);this.Ir.Akx([B=A._GetAutoObject(A.Device.Device),B.Awk,B.AyZ]);this.Da.Au([B=
A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.Dn.Au([B=A._GetAutoObject(A.Device.
Device),B.Ut,B.Va]);this.EL.DC(A.aaL(A.ach.AjY));this.EL.OU([B=A._GetAutoObject(
A.Device.Device),B.Us,B.U$]);this.EL.PY([B=A._GetAutoObject(A.Device.Device),B.Ut
,B.Va]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cg;this.OP._Done();this.
FD._Done();this.Ir._Done();this.Da._Done();this.Dn._Done();this.EL._Done();this.
Afw._Done();C.Cg._Done.call(this);},_ReInit:function(){C.Cg._ReInit.call(this);this.
OP._ReInit();this.FD._ReInit();this.Ir._ReInit();this.Da._ReInit();this.Dn._ReInit(
);this.EL._ReInit();this.Afw._ReInit();this.Jf(A.aaR(A.acf.LinkTransponder));this.
OP.T(A.aaR(A.acf.A7_));this.OP.IW(A.aaR(A.acf.Kq));this.OP.Jg(A.aaR(A.acf.GL));this.
FD.T(A.aaR(A.acf.Aqp));this.Ir.T(A.aaR(A.acf.AEE));this.Da.T(A.aaR(A.acf.AqM));this.
Da.IW(A.aaR(A.acf.OK));this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.T(A.aaR(A.acf.Zs));this.
Dn.IW(A.aaR(A.acf.OK));this.Dn.Jg(A.aaR(A.acf.Ez));this.EL.Ar9(A.aaR(A.acf.Aqr));
},_Mark:function(D){var B;C.Cg._Mark.call(this,D);if((B=this.OP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ir)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentSettingsScreen"
};C.Afw={TransponderLinkageIdChangeMethodToString:null,Init:function(aArg){var B;
A.zX([this,this.Bhb],[B=A._GetAutoObject(A.Device.Device),B.AS_,B.A0V],0);A.pe([
this,this.Bhb],this);},Du:function(){return 3;},Gm:function(aIndex){if((aIndex<0
)||(aIndex>=4))return A.jV;return this.TransponderLinkageIdChangeMethodToString.
BT(this.C7(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axi(E);},Bhb:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ak6;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.Afw;this.BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,
2);this.Init(aArg);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.Ji={B7:null,I2:null,Cr:null,AmE:null,Sl:null,Anp:null,AjE:null,Text:null,CY:
null,D6:0,LF:false,Ai:function(Ae){var B;A.acn.Ji.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.I2.As(true);else{this.I2.As(false);this.CY.Z(false);}},A45:function(G
){var B;var Be=this.Text.M;var NG=0;var NH=0;if(this.CY.Et[0]<Be[0])NG=Be[0]-this.
CY.Et[0];if(this.CY.Et[0]>Be[2])NG=Be[2]-this.CY.Et[0];if(this.CY.Et[1]<Be[1])NH=
Be[1]-this.CY.Et[1];if(this.CY.ED[1]>Be[3])NH=Be[3]-this.CY.ED[1];if(!!NG||!!NH)
this.Text.Gc(A.abf(this.Text.Br,[NG,NH]));NG=this.Text.Br[0];NH=this.Text.Br[1];
var C6=[(B=this.Text.Dd())[2]-B[0],B[3]-B[1]];if(C6[0]<=((B=this.Text.M)[2]-B[0]
))NG=0;if(C6[1]<=((B=this.Text.M)[3]-B[1]))NH=0;this.Text.Gc([NG,NH]);},Amr:function(
G){if(!this.B7)return;var A4v=this.Text.AG8(this.D6);var pos=this.Text.Afj(A4v);
this.CY.DN(A.abe(pos,[0,this.B7.Ascent]));this.CY.DD(A.abf(pos,[0,this.B7.Descent
]));if(this.I2.Bw){this.I2.As(false);this.I2.As(true);}if(this.LF){A.pe([this,this.
A45],this);this.LF=false;}},AAM:function(G){if(!this.B7)return;var EH=this.Text.
AG8(this.D6);if(this.Cr.CP===6){EH=[EH[0]-1,EH[1]];if(this.Text.AnW(EH)===this.D6
){EH=[EH[0],EH[1]-1];EH=[this.Text.ADl(EH[1]).length,EH[1]];}}if(this.Cr.CP===7){
EH=[EH[0]+1,EH[1]];if(this.Text.AnW(EH)===this.D6){EH=[EH[0],EH[1]+1];EH=[0,EH[1
]];}}if(this.Cr.CP===4){var pos=this.Text.Afj(EH);var AaW=(this.B7.Ascent+this.B7.
Descent)+this.B7.Leading;EH=this.Text.AUl(A.abe(pos,[0,AaW]));}if(this.Cr.CP===5
){var pos=this.Text.Afj(EH);var AaW=(this.B7.Ascent+this.B7.Descent)+this.B7.Leading;
EH=this.Text.AUl(A.abf(pos,[0,AaW]));}var Vq=this.Text.AnW(EH);var IC=this.Text.
String.charCodeAt(Vq)||0;if(((IC===0x5E)||(IC===0x7E))||(IC===0x25))Vq=Vq-1;if(Vq
!==this.D6){this.D6=Vq;A.pe([this,this.Amr],this);this.LF=true;}},Bfh:function(G
){if(!this.D6)return;var IC=this.Text.String.charCodeAt(this.D6-1)||0;var CB=1;if(((
IC===0x5E)||(IC===0x7E))||(IC===0x25))CB=2;this.Text.R(A.ab1(this.Text.String,this.
D6-CB,CB));this.D6=this.D6-CB;this.LF=true;},AAN:function(G){if(this.D6>=(this.Text.
String.length-1))return;var IC=this.Text.String.charCodeAt(this.D6)||0;var CB=1;
if(IC===0x25)CB=2;this.Text.R(A.ab1(this.Text.String,this.D6,CB));this.LF=true;}
,Bfv:function(G){this.Text.R(A.abU(this.Text.String,Buz,this.D6));this.D6=this.D6+
1;this.LF=true;},Bfj:function(G){var IC=this.AjE.Dy;var Auw=String.fromCharCode(
IC);A.ab5("%c",IC);if((((IC===0x5E)||(IC===0x7E))||(IC===0xAD))||(IC===0x25))Auw=
BuA+String.fromCharCode(IC);this.Text.R(A.abU(this.Text.String,Auw,this.D6));this.
D6=this.D6+Auw.length;this.LF=true;},_Init:function(aArg){A.acn.Ji._Init.call(this
,aArg);A.acl.TR._Init.call(this.I2={I:this},0);A.Core.BF._Init.call(this.Cr={I:this
},0);A.Core.BF._Init.call(this.AmE={I:this},0);A.Core.BF._Init.call(this.Sl={I:this
},0);A.Core.BF._Init.call(this.Anp={I:this},0);A.Core.BF._Init.call(this.AjE={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.C8._Init.call(this.CY={
I:this},0);this.__proto__=C.Ji;var B;this.H(BuB);this.I2.B3=false;this.I2.Cx=true;
this.I2.Fq(500);this.I2.Uy(500);this.Cr.Filter=147;this.Cr.Bw=false;this.AmE.Filter=
151;this.Sl.Filter=44;this.Anp.Filter=149;this.AjE.Filter=145;this.Text.A1(0x3F);
this.Text.H(BuC);this.Text.Lv(true);this.Text.A6(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CY.DD(BuD);this.CY.DN(BuE);this.CY.A$g(2);this.CY.A$f(2);this.
CY.L(0xFF000000);this.CY.Z(false);this.J(this.Text,0);this.J(this.CY,0);this.I2.
Q=[B=this.CY,B.Fp,B.Z];this.Cr.BG=[this,this.AAM];this.Cr.D1=[this,this.AAM];this.
AmE.BG=[this,this.Bfh];this.AmE.D1=[this,this.Bfh];this.Sl.BG=[this,this.AAN];this.
Sl.D1=[this,this.AAN];this.Anp.BG=[this,this.Bfv];this.Anp.D1=[this,this.Bfv];this.
AjE.BG=[this,this.Bfj];this.AjE.D1=[this,this.Bfj];this.Text.Q9([this,this.Amr]);
this.Text.S(A.aaL(A.aci.AC9));this.B7=A.aaL(A.aci.AC9);},_Done:function(){this.__proto__=
A.acn.Ji;this.I2._Done();this.Cr._Done();this.AmE._Done();this.Sl._Done();this.Anp.
_Done();this.AjE._Done();this.Text._Done();this.CY._Done();A.acn.Ji._Done.call(this
);},_ReInit:function(){A.acn.Ji._ReInit.call(this);this.I2._ReInit();this.Cr._ReInit(
);this.AmE._ReInit();this.Sl._ReInit();this.Anp._ReInit();this.AjE._ReInit();this.
Text._ReInit();this.CY._ReInit();},_Mark:function(D){var B;A.acn.Ji._Mark.call(this
,D);if((B=this.B7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I2)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Anp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CY)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AVC={Ji:null,DF:function(G
){switch(this.Cr.CP){case 6:A._GetAutoObject(A.Device.Device).Aqw();break;case 7:
A._GetAutoObject(A.Device.Device).Aqu();break;case 4:A._GetAutoObject(A.Device.Device
).X9();break;case 5:A._GetAutoObject(A.Device.Device).Aqv();break;default:;}},Ew:
function(G){A._GetAutoObject(C.A7).FB();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.Ji._Init.call(this.Ji={I:this},0);this.__proto__=C.AVC;this.H(Cf);this.
N.Z(true);this.Dr(C.Aq8);this.Ji.H(Fe);this.J(this.Ji,0);this.Bb(this.Ji);this.N.
CF=[this,this.Ew];this.N.C3(A.aaL(A.ach.E2));},_Done:function(){this.__proto__=C.
AB;this.Ji._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.Ji._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.Ji)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AUs={WM:function(G){if((!!this.Bg&&!!this.Bg.AX)&&(this.Bg.AX.B8()>0)){A._GetAutoObject(
C.BS).TH(A.aaR(A.acf.ACt),[this,this.Bbo]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TH(A.aaR(A.acf.AHq),[this,this.A8J]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TH(A.aaR(A.acf.A5$),[this,this.Bbn]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).TH(A.aaR(A.acf.UnlinkTransponder),[this,this.BoD]);}else{A._GetAutoObject(
C.BS).Aa4(A.aaR(A.acf.ACt));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Aa4(
A.aaR(A.acf.AHq));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Aa4(A.aaR(A.
acf.A5$));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Aa4(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.A6y)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fz();this.AuN(A.aaR(A.acf.A6q),[this,this.Bg_
],this.OJ);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Options
)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(
A.acf.A6L));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.Anl
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Dw(6);},AbB:function(){return C.
ACp;},AbC:function(){return C.ADG;},Ra:function(G){A._GetAutoObject(A.Device.Device
).An.Bk(A._GetAutoObject(A.Device.Helper).AvA());},HS:function(G){C.AkQ.HS.call(
this,G);this.N.Ct(null);this.N.E6(A.aaR(A.acf.A53));if(this.AJT()){this.N.Ce=[this
,this.AIY];this.N.JE.CZ(255);}else{this.N.Ce=null;this.N.JE.CZ(100);}this.N.C4(A.
aaL(A.ach.Options));this.N.CS(A.jV);this.N.OW(false);this.N.OX(false);this.N.IS.
CZ(255);},ASB:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiZ=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).AZ(96,true,AiZ.toFixed(),0,null);},ASC:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6E(this);},ASG:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).OZ){A._GetAutoObject(A.Device.Device
).AZ(73,true,A.jV,0,[this,this.Bfx]);return;}if(A._GetAutoObject(A.Device.Device
).Arp()===false){A.zX([this,this.XN],[B=A._GetAutoObject(A.Device.Device),B.Uu,B.
Vc],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,this.Agk]);return;
}A.zX([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).Gg,B.SL,B.E5],0);var A4M=
!!this.OJ&&!(F=this.OJ,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asx(2,
A4M);},AJT:function(){if(!this.Bg)return false;var AtR=this.Bg.AX;if(!AtR)return false;
if(!AtR.B8())return false;return true;},Al6:function(G){var B;var F;switch(A._GetAutoObject(
A.Device.Device).Gg.EN){case 0:A.z$([this,this.Al6],[B=A._GetAutoObject(A.Device.
Device).Gg,B.SL,B.E5],0);break;case 3:{if(!!this.OJ&&(F=this.OJ,F[1].call(F[0]))
)A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending();if(A._GetAutoObject(
A.Device.Converter).S9(A._GetAutoObject(A.Device.Device).OZ)===10){this.Dl(A.aaR(
A.acf.Bj2));this.Bg.NU.S(A.aaL(A.fl.Bh));}else this.Dl(A.aaR(A.acf.A$w));A._GetAutoObject(
A.Device.Device).AqK();}break;case 4:{A._GetAutoObject(A.Device.Device).AZ(97,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gg.E7();}break;default:;}A.ab5("%e"
,A._GetAutoObject(A.Device.Device).Gg.EN);},_Init:function(aArg){C.AkQ._Init.call(
this,aArg);this.__proto__=C.AUs;var B;this.Dr(C.APD);this.A_r([B=A._GetAutoObject(
A.Device.Device),B.A9t,B.BbU]);},_className:"Application::PurchasedAnimalsListScreen"
};C.ADG={PG:null,Jb:null,_Init:function(aArg){C.De._Init.call(this,aArg);A.acg.Ap.
_Init.call(this.PG={I:this},0);A.acg.Ap._Init.call(this.Jb={I:this},0);this.__proto__=
C.ADG;this.Es.Z(false);this.DS.Z(false);this.PG.H(BuF);this.PG.L(A.jb.Text);this.
Jb.H(BuG);this.Jb.L(A.jb.Text);this.J(this.PG,0);this.J(this.Jb,0);this.PG.Ax(A.
aaL(A.ach.AvN));this.Jb.Ax(A.aaL(A.ach.AvI));},_Done:function(){this.__proto__=C.
De;this.PG._Done();this.Jb._Done();C.De._Done.call(this);},_ReInit:function(){C.
De._ReInit.call(this);this.PG._ReInit();this.Jb._ReInit();},_Mark:function(D){var
B;C.De._Mark.call(this,D);if((B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AM_={Init:function(aArg){var B;A.zX([this,this.AAR],[B=A._GetAutoObject(A.Device.
Device),B.AER,B.AI2],0);A.pe([this,this.AAR],this);},WM:function(G){if((!!this.Bg&&
!!this.Bg.AX)&&(this.Bg.AX.B8()>0)){if(this.AJT())A._GetAutoObject(C.BS).TH(A.aaR(
A.acf.AOx),[this,this.AIY]);else A._GetAutoObject(C.BS).Aa4(A.aaR(A.acf.AOx));A.
_GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TH(A.aaR(A.acf.ACr),[this,this.
Bbo]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TH(A.aaR(A.acf.AHq),[this
,this.A8J]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).TH(A.aaR(A.acf.A5_
),[this,this.Bbn]);}else{A._GetAutoObject(C.BS).Aa4(A.aaR(A.acf.AOx));A._GetAutoObject(
C.BS).Fz();A._GetAutoObject(C.BS).Aa4(A.aaR(A.acf.ACr));A._GetAutoObject(C.BS).Fz(
);A._GetAutoObject(C.BS).Aa4(A.aaR(A.acf.AHq));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Aa4(A.aaR(A.acf.A5_));}A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).
Mq(A.aaR(A.acf.A6y)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();this.AuN(A.aaR(
A.acf.A6q),[this,this.Bg_],this.OJ);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Options)+A.aaR(A.acf.Colon));A._GetAutoObject(C.BS).Fz();A.
_GetAutoObject(C.BS).Mq(A.aaR(A.acf.A6L));A._GetAutoObject(C.BS).Fz();A._GetAutoObject(
C.BS).Mq(A.aaR(A.acf.Anl)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Dw(6);},AbB:function(){return C.ACl;},AbC:function(){return C.ADE;},Ra:function(
G){A._GetAutoObject(A.Device.Device).An.Bk(A._GetAutoObject(A.Device.Helper).AOT(
));},HS:function(G){C.AkQ.HS.call(this,G);this.N.Ct(A.aaL(A.ach.AeG));this.N.Ce=[
this,this.Ady];this.N.E6(A.jV);this.N.C4(null);this.N.CS((A.aaR(A.acf.A53)+String.
fromCharCode(0x0A))+A.aaR(A.acf.Bh4));this.N.OW(false);this.N.OX(false);this.N.IS.
CZ(255);},ASB:function(G){A._GetAutoObject(A.Device.Device).Dw(0);var AiZ=A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();A._GetAutoObject(A.Device.Device
).AZ(96,true,AiZ.toFixed(),0,null);},ASC:function(G){A._GetAutoObject(A.Device.Device
).Dw(0);this.A6D(this);},ASG:function(G){var B;var F;A._GetAutoObject(A.Device.Device
).Dw(0);if(!A._GetAutoObject(A.Device.Device).OZ){A._GetAutoObject(A.Device.Device
).AZ(73,true,A.jV,0,[this,this.Bfx]);return;}if(A._GetAutoObject(A.Device.Device
).Arp()===false){A.zX([this,this.XN],[B=A._GetAutoObject(A.Device.Device),B.Uu,B.
Vc],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,this.Agk]);return;
}A.zX([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).Gg,B.SL,B.E5],0);var A4M=
!!this.OJ&&!(F=this.OJ,F[1].call(F[0]));A._GetAutoObject(A.Device.Device).Asx(0,
A4M);},AJT:function(){var AtR=this.Bg.AX;if(!AtR)return false;var O;for(O=0;O<AtR.
B8();O++)if(A._GetAutoObject(A.Device.Helper).Aj7(AtR.AO7(O,34))===false)return true;
return false;},Ady:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
16);},AAR:function(G){if(A._GetAutoObject(A.Device.Device).Aqy===1)A.pe([this,this.
A6H],this);},Al6:function(G){var B;var F;switch(A._GetAutoObject(A.Device.Device
).Gg.EN){case 0:A.z$([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).Gg,B.SL
,B.E5],0);break;case 3:{if(!!this.OJ&&(F=this.OJ,F[1].call(F[0])))A._GetAutoObject(
A.Device.Device).BatchResetBirthNoticePending();this.Dl(A.aaR(A.acf.Bh5));A._GetAutoObject(
A.Device.Device).AqK();}break;case 4:{A._GetAutoObject(A.Device.Device).AZ(70,true
,A.jV,0,null);A._GetAutoObject(A.Device.Device).Gg.E7();}break;default:;}},_Init:
function(aArg){C.AkQ._Init.call(this,aArg);this.__proto__=C.AM_;var B;this.Dr(C.
APa);this.A_r([B=A._GetAutoObject(A.Device.Device),B.A80,B.BbD]);this.Init(aArg);
},_className:"Application::BirthRegistrationsListScreen"};C.APa={DX:function(G){
C.Aey.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter).Ad2(11));}
,_Init:function(aArg){C.Aey._Init.call(this,aArg);this.__proto__=C.APa;this.Text.
R(A.aaR(A.acf.ACe));},_ReInit:function(){C.Aey._ReInit.call(this);this.Text.R(A.
aaR(A.acf.ACe));},_className:"Application::HeaderBirthRegistrationsList"};C.APD={
DX:function(G){C.Aey.DX.call(this,G);this.Df.Ax(A._GetAutoObject(A.Device.Converter
).Ad2(12));},_Init:function(aArg){C.Aey._Init.call(this,aArg);this.__proto__=C.APD;
this.Text.R(A.aaR(A.acf.AGw));},_ReInit:function(){C.Aey._ReInit.call(this);this.
Text.R(A.aaR(A.acf.AGw));},_className:"Application::HeaderPurchasedAnimalsList"};
C.ACp={Js:0,AP:null,S1:null,Ph:0,Init:function(aArg){},Bl:function(aSize){C.Ba.Bl.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.S1.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.S1.L(this.V.AQ);this.T(A._GetAutoObject(A.Device.Converter).Rl(this.
Js));this.S1.R(A._GetAutoObject(A.acj.KR).AC$(this.Ph));},Ch:function(Ad){if(!this.
AX)return;this.Ht=Ad;if(!!this.AX){this.Js=this.AX.KT(Ad,26);this.Ph=this.AX.Hw(
Ad,4);this.Am();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AL._Init.
call(this.AP={I:this},0);C.CG._Init.call(this.S1={I:this},0);this.__proto__=C.ACp;
this.AP.H(A0B);this.AP.L(A.jb.Bc);this.S1.H(A0C);this.J(this.AP,0);this.J(this.S1
,0);this.V.S(A.aaL(A.fl.Ak));this.V.AY(A.aaL(A.fl.Bh));this.S1.S(A.aaL(A.fl.Ak));
this.S1.AY(A.aaL(A.fl.Bh));this.S1.Cm(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AP._Done();this.S1._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AP._ReInit();this.S1._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.AY(A.aaL(A.fl.Bh));this.S1.S(A.aaL(A.fl.Ak));this.S1.AY(A.
aaL(A.fl.Bh));this.S1.Cm(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S1)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.AU3={
WN:null,SM:null,TZ:null,HI:null,LY:null,IN:null,KL:A.jV,Ai:function(Ae){var F;C.
SY.Ai.call(this,Ae);this.TZ.L(this.V.AQ);var Apz=false;if((!this.Dm||!(F=this.Dm
,F[1].call(F[0])))&&!this.A_)Apz=true;this.TZ.Z(Apz);this.Pz.Z(!Apz);this.V4.Z(!
Apz);this.Q4.Z(!Apz);this.Yu.Z(!Apz);this.Qa.Z(!Apz);},AdA:function(G){var B;var
F;if(!this.KL.length){C.SY.AdA.call(this,G);return;}var BP=this.FZ;var FK=A._GetAutoObject(
A.Device.AkK).Bf9(this.KL);this.KL=A.jV;if(!FK){A._GetAutoObject(A.Device.Device
).AZ(101,true,A.jV,0,this.SM);A.pe(this.WN,this);return;}if(this.Asu&&(FK>A._GetAutoObject(
A.Device.Helper).Dv())){A._GetAutoObject(A.Device.Device).AZ(102,true,A.jV,0,this.
SM);A.pe(this.WN,this);return;}this.Uw(((B=(FK|0))<0)?B+0x100000000:B);if(this.FZ
!==BP){if(!!this.Dm)(F=this.Dm,F[2].call(F[0],this.FZ));A.abo(this.Dm,0);}if(!!this.
OO)A.pe(this.OO,this);},AAO:function(G){if(this.KL.length<10)this.KL=this.KL+String.
fromCharCode(this.HI.Dy);},Awc:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===
0x0A))this.AdA(this);else this.IN.Mx=true;},ATG:function(E){if(A.aa0(this.WN,E))
return;this.WN=E;},ATH:function(E){if(A.aa0(this.SM,E))return;this.SM=E;},_Init:
function(aArg){C.SY._Init.call(this,aArg);A.acg.Text._Init.call(this.TZ={I:this}
,0);A.Core.BF._Init.call(this.HI={I:this},0);A.Core.BF._Init.call(this.LY={I:this
},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AU3;this.TZ.H(BuH
);this.TZ.Je(true);this.TZ.A6(0x12);this.TZ.R(A.aaR(A.acf.A6l));this.HI.Filter=143;
this.LY.Filter=149;this.IN.Filter=145;this.J(this.TZ,0);this.TZ.S(A.aaL(A.fl.EK)
);this.HI.BG=[this,this.AAO];this.LY.BG=[this,this.Bcd];this.IN.BG=[this,this.Awc
];},_Done:function(){this.__proto__=C.SY;this.TZ._Done();this.HI._Done();this.LY.
_Done();this.IN._Done();C.SY._Done.call(this);},_ReInit:function(){C.SY._ReInit.
call(this);this.TZ._ReInit();this.HI._ReInit();this.LY._ReInit();this.IN._ReInit(
);this.TZ.R(A.aaR(A.acf.A6l));this.TZ.S(A.aaL(A.fl.EK));},_Mark:function(D){var B;
C.SY._Mark.call(this,D);if((B=this.WN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.SM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDateHid"};C.AU7={WN:null,SM:null,HI:null,LY:null,IN:null
,KL:A.jV,H1:function(G){var F;if(!this.KL.length){C.Rd.H1.call(this,G);return;}if(
this.Ast)return;if(!this.KL.length)this.LY.Mx=true;var BP=this.AM;var FK=A._GetAutoObject(
A.Device.AkK).Bf_(this.KL);this.KL=A.jV;if(!FK){if((this.KL.length<13)&&!A._GetAutoObject(
A.Device.Device).OZ)A._GetAutoObject(A.Device.Device).AZ(105,true,A.jV,0,this.SM
);else A._GetAutoObject(A.Device.Device).AZ(103,true,A.jV,0,this.SM);A.pe(this.WN
,this);return;}this.Bx(FK);if(this.AM!==BP){if(!!this.Q)(F=this.Q,F[2].call(F[0]
,this.AM));A.abo(this.Q,0);}if(!!this.OO)A.pe(this.OO,this);},AAO:function(G){if(
this.Ast)return;if(this.KL.length<17)this.KL=this.KL+String.fromCharCode(this.HI.
Dy);},Awc:function(G){if((this.IN.Dy===0x0D)||(this.IN.Dy===0x0A))this.H1(this);
else this.IN.Mx=true;},ATG:function(E){if(A.aa0(this.WN,E))return;this.WN=E;},ATH:
function(E){if(A.aa0(this.SM,E))return;this.SM=E;},_Init:function(aArg){C.Rd._Init.
call(this,aArg);A.Core.BF._Init.call(this.HI={I:this},0);A.Core.BF._Init.call(this.
LY={I:this},0);A.Core.BF._Init.call(this.IN={I:this},0);this.__proto__=C.AU7;this.
Ar_(false);this.HI.Filter=143;this.LY.Filter=149;this.IN.Filter=145;this.HI.BG=[
this,this.AAO];this.LY.BG=[this,this.Alo];this.IN.BG=[this,this.Awc];},_Done:function(
){this.__proto__=C.Rd;this.HI._Done();this.LY._Done();this.IN._Done();C.Rd._Done.
call(this);},_ReInit:function(){C.Rd._ReInit.call(this);this.HI._ReInit();this.LY.
_ReInit();this.IN._ReInit();},_Mark:function(D){var B;C.Rd._Mark.call(this,D);if((
B=this.WN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.SM)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
LY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IN)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemNaisdHid"};C.APA={Aj3:null,Aj1:null,Gw:null
,Rb:null,SV:null,C8:null,Init:function(aArg){var B;A.zX([this,this.DX],[B=A._GetAutoObject(
A.Device.Device),B.A9l,B.AFJ],0);A.pe([this,this.DX],this);},Dg:function(E){C.BR.
Dg.call(this,E);this.Aj3.L(E);this.Aj1.L(E);this.Rb.Zz(E);this.Gw.L(E);this.SV.Zz(
E);},WO:function(E){this.Rb.CV(E);this.SV.CV(E);},DX:function(G){this.Rb.T(A._GetAutoObject(
A.Device.Device).Av3.toFixed());A.pe([this,this.BDe],this);},BDe:function(G){var
Xz=A._GetAutoObject(A.Device.Device).An.Filter;A._GetAutoObject(A.Device.Device).
An.Bk(A._GetAutoObject(A.Device.Helper).AvA());this.SV.T(A._GetAutoObject(A.Device.
Device).An.B8().toFixed());A._GetAutoObject(A.Device.Device).An.Bk(Xz);},_Init:function(
aArg){C.BR._Init.call(this,aArg);A.acg.Ap._Init.call(this.Aj3={I:this},0);A.acg.
Ap._Init.call(this.Aj1={I:this},0);A.acg.Ap._Init.call(this.Gw={I:this},0);C.D2.
_Init.call(this.Rb={I:this},0);C.D2._Init.call(this.SV={I:this},0);A.acg.C8._Init.
call(this.C8={I:this},0);this.__proto__=C.APA;this.Aj3.H(Pa);this.Aj1.H(BuI);this.
Gw.H(BuJ);this.Gw.L(A.jb.CU);this.Rb.A1(0x14);this.Rb.H(BuK);this.Rb.Zz(A.jb.Bm);
this.Rb.CV(A.jb.Rk);this.Rb.Hp(2);this.Rb.Bmy(0x11);this.SV.A1(0x14);this.SV.H(BuL
);this.SV.Zz(A.jb.Bm);this.SV.CV(A.jb.Rk);this.SV.Hp(2);this.C8.DD(AhX);this.C8.
DN(BuM);this.C8.L(A.jb.Bc);this.J(this.Aj3,0);this.J(this.Aj1,0);this.J(this.Gw,
0);this.J(this.Rb,0);this.J(this.SV,0);this.J(this.C8,0);this.Aj3.Ax(A.aaL(A.ach.
Arc));this.Aj1.Ax(A.aaL(A.ach.AP_));this.Gw.Ax(A.aaL(A.ach.Gw));this.Rb.S(A.aaL(
A.fl.Bh));this.SV.S(A.aaL(A.fl.Bh));this.Init(aArg);},_Done:function(){this.__proto__=
C.BR;this.Aj3._Done();this.Aj1._Done();this.Gw._Done();this.Rb._Done();this.SV._Done(
);this.C8._Done();C.BR._Done.call(this);},_ReInit:function(){C.BR._ReInit.call(this
);this.Aj3._ReInit();this.Aj1._ReInit();this.Gw._ReInit();this.Rb._ReInit();this.
SV._ReInit();this.C8._ReInit();this.Rb.S(A.aaL(A.fl.Bh));this.SV.S(A.aaL(A.fl.Bh
));},_Mark:function(D){var B;C.BR._Mark.call(this,D);if((B=this.Aj3)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aj1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
SV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeaderMassRecordings"};C.AR5={Abq:null,Aer:null,V1:null
,Init:function(aArg){this.Bb(this.Abq);},Lr:function(){if(!this.BQ){this.BQ=A._NewObject(
C.N,0);this.BQ.CF=[this,this.AaQ];this.BQ.Ce=null;this.BQ.Ca=[this,this.A3I];this.
BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},AAJ:function(
G){var Aa=(C.Ajl.isPrototypeOf(G)?G:null);if(Aa===this.Abq)A._GetAutoObject(A.Device.
Device).UpdateOverlayMenu(14);else if(Aa===this.Aer)A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(15);else throw new Error(AIQ);},_Init:function(aArg){C.Fr._Init.
call(this,aArg);C.Ajl._Init.call(this.Abq={I:this},0);C.Ajl._Init.call(this.Aer={
I:this},0);C.AR9._Init.call(this.V1={I:this},0);this.__proto__=C.AR5;var B;this.
H(Rr);this.Text.R(A.aaR(A.acf.ACj));this.Abq.H(I1);this.Abq.T(A.aaR(A.acf.AjH));
this.Aer.H(Qf);this.Aer.T(A.aaR(A.acf.AGD));this.V1.H(Aan);this.V1.T(A.aaR(A.acf.
A5V));this.J(this.Abq,0);this.J(this.Aer,0);this.J(this.V1,0);this.Text.S(A.aaL(
A.fl.Ak));this.Abq.AR=[this,this.AAJ];this.Aer.AR=[this,this.AAJ];this.V1.ATj([B=
A._GetAutoObject(A.Device.Device),B.AEV,B.AI5]);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fr;this.Abq._Done();this.Aer._Done();this.V1._Done();C.Fr._Done.
call(this);},_ReInit:function(){C.Fr._ReInit.call(this);this.Abq._ReInit();this.
Aer._ReInit();this.V1._ReInit();this.Text.R(A.aaR(A.acf.ACj));this.Abq.T(A.aaR(A.
acf.AjH));this.Aer.T(A.aaR(A.acf.AGD));this.V1.T(A.aaR(A.acf.A5V));this.Text.S(A.
aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Abq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aer)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingOverlayMenu"
};C.AR4={AnimalTableFields:null,Ay:null,Y:null,JV:null,CQ:function(){this.AiM(this
);},Init:function(aArg){A.zV([this,this.AiM],this.AnimalTableFields,0);A.pe([this
,this.AiM],this);},DF:function(G){C.Fr.DF.call(this,G);this.M0(this);},Lr:function(
){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.Ew];this.BQ.Ce=[
this,this.A3G];this.BQ.Ca=[this,this.A3$];this.BQ.C4(A.aaL(A.ach.Arl));this.BQ.Ct(
A.aaL(A.ach.Ard));this.BQ.C3(A.aaL(A.ach.YI));}return this.BQ;},Ew:function(G){this.
ABl();this.AaQ(this);},AiM:function(G){this.Ao8();var O;for(O=0;O<this.AnimalTableFields.
Ng();O=O+1){var Aaw=A._GetAutoObject(C.Amw).OM(O);this.A1M(Aaw);}this.J(this.JV,
0);A.aaS([this,this.M0],this);},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(0x1
))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},M0:function(
G){var B;this.Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},A1M:function(Hb){var Azn=A._NewObject(A.Device.AnimalTableFieldsToString
,0);var Aa=A._NewObject(C.Sm,0);Aa.T(Azn.BT(Hb));Aa.Aj(true);Aa.G8=Hb;Aa.A_D(this.
AnimalTableFields.N3(Hb));this.J(Aa,0);this.ZL(Aa);},Ao8:function(){var B;var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){var AdO=X;X=X.Ah;if(((AdO.U&0x400)===
0x400))this.HR(AdO);}},ABl:function(){var B;this.AnimalTableFields.Clear();var X=
this.Y.Ah;while(!!X&&!((X.U&0x200)===0x200)){if(((X.U&0x400)===0x400)&&!(X===this.
JV)){var Aa=(C.Sm.isPrototypeOf(X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.
G8);if(Aa.ASS())this.AnimalTableFields.AUZ(Aa.G8);}else A.ab5("%s",AyB);}X=X.Ah;
}this.AnimalTableFields.Ci();},A3G:function(G){var B;var Aa=(C.Sm.isPrototypeOf(
B=this.AV)?B:null);if(!!Aa){var AAB=(C.Sm.isPrototypeOf(B=Aa.Ah)?B:null);if(!!AAB
){this.AhF(AAB,Aa);A.pe([this,this.M0],this);}}},A3$:function(G){var B;var Aa=(C.
Sm.isPrototypeOf(B=this.AV)?B:null);if(!!Aa){var AA9=(C.Sm.isPrototypeOf(B=Aa.AJ
)?B:null);if(!!AA9){this.AhF(Aa,AA9);A.pe([this,this.M0],this);}}},AqR:function(
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
,Breed:null,UY:null,Init:function(aArg){A.zX([this,this.AuV],this.B0.Q,0);A.zX([
this,this.ANd],this.CH.Q,0);A.zX([this,this.AWi],this.GQ.Q,0);A.zX([this,this.Avx
],this.Db.Q,0);this.Bb(this.B0);},DF:function(G){C.Fr.DF.call(this,G);this.M0(this
);},Lr:function(){if(!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.
AaQ];this.BQ.Ce=null;this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(
A.aaL(A.ach.YI));}return this.BQ;},Fj:function(G){var B;this.Ay.MH((B=this.Y.Dd(
0x1))[3]-B[1]);this.Ay.MJ((B=this.Y.M)[3]-B[1]);this.Ay.MI(-this.Y.Br[1]);},M0:function(
G){var B;this.Y.VH(null,null);if(!!this.AV&&((this.AV.U&0x400)===0x400))this.Y.HK(
this.AV,true,null,null);},AuV:function(G){var F;A._GetAutoObject(A.Device.Device
).EC((F=this.B0.Q,F[1].call(F[0])));},AWi:function(G){var F;A._GetAutoObject(A.Device.
Device).Nt((F=this.GQ.Q,F[1].call(F[0])));},Avx:function(G){var F;A._GetAutoObject(
A.Device.Device).J0((F=this.Db.Q,F[1].call(F[0])));},ANd:function(G){var F;A._GetAutoObject(
A.Device.Device).N7((F=this.CH.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fr._Init.
call(this,aArg);A.Core.Y._Init.call(this.Y={I:this},0);C.Aa3._Init.call(this.B0={
I:this},0);C.Aa3._Init.call(this.Db={I:this},0);C.Aa3._Init.call(this.CH={I:this
},0);C.Aa3._Init.call(this.GQ={I:this},0);C.Ay._Init.call(this.Ay={I:this},0);C.
AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.UZ._Init.call(this.UY={I:
this},0);this.__proto__=C.AR3;var B;this.H(Rr);this.Text.R(A.aaR(A.acf.AjH));this.
Y.H(Bbc);this.Y.JZ(1);this.B0.H(Ah1);this.B0.As(true);this.B0.Aj(true);this.B0.T(
A.aaR(A.acf.Afx));this.Db.H(Ayt);this.Db.As(true);this.Db.Aj(true);this.Db.T(A.aaR(
A.acf.Afs));this.CH.H(Aor);this.CH.As(true);this.CH.Aj(true);this.CH.T(A.aaR(A.acf.
Breed));this.GQ.H(Atg);this.GQ.As(true);this.GQ.Aj(true);this.GQ.T(A.aaR(A.acf.Jm
));this.Ay.H(Ix);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType
);this.Gender.Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(
A.Device.Device).Breed);this.UY.Au(A._GetAutoObject(A.Device.Device).WhereAbouts
);this.J(this.Y,0);this.J(this.B0,0);this.J(this.Db,0);this.J(this.CH,0);this.J(
this.GQ,0);this.J(this.Ay,0);this.Y.Em=[this,this.Fj];this.B0.ZA(A.aaL(A.fl.H6));
this.B0.ZB(A.aaL(A.fl.H6));this.B0.Au([B=this.AnimalType,B.B$,B.Cc]);this.B0.CL(
this.AnimalType);this.Db.ZA(A.aaL(A.fl.H6));this.Db.ZB(A.aaL(A.fl.H6));this.Db.Au([
B=this.Gender,B.B$,B.Cc]);this.Db.CL(this.Gender);this.CH.ZA(A.aaL(A.fl.H6));this.
CH.ZB(A.aaL(A.fl.H6));this.CH.Au([B=this.Breed,B.B$,B.Cc]);this.CH.CL(this.Breed
);this.GQ.ZA(A.aaL(A.fl.H6));this.GQ.ZB(A.aaL(A.fl.H6));this.GQ.Au([B=this.UY,B.
B$,B.Cc]);this.GQ.CL(this.UY);this.Init(aArg);},_Done:function(){this.__proto__=
C.Fr;this.Y._Done();this.B0._Done();this.Db._Done();this.CH._Done();this.GQ._Done(
);this.Ay._Done();this.AnimalType._Done();this.Gender._Done();this.Breed._Done();
this.UY._Done();C.Fr._Done.call(this);},_ReInit:function(){C.Fr._ReInit.call(this
);this.Y._ReInit();this.B0._ReInit();this.Db._ReInit();this.CH._ReInit();this.GQ.
_ReInit();this.Ay._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.
Breed._ReInit();this.UY._ReInit();this.Text.R(A.aaR(A.acf.AjH));this.B0.T(A.aaR(
A.acf.Afx));this.Db.T(A.aaR(A.acf.Afs));this.CH.T(A.aaR(A.acf.Breed));this.GQ.T(
A.aaR(A.acf.Jm));},_Mark:function(D){var B;C.Fr._Mark.call(this,D);if((B=this.Y).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.B0)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ay)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.UY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.AmA={CB:0,Alz:A.abi(17,0,null),OM:function(HC){return this.Alz.Get(HC);},Ng:
function(){return this.CB;},Clear:function(){var O;for(O=0;O<17;O=O+1)this.Alz.Set(
O,0);this.CB=0;},J:function(Aar){if(this.CB>=17)A.ab5("%s",BuN);else{this.Alz.Set(
this.CB,Aar);this.CB=this.CB+1;}},Ci:function(){},E3:function(Ah6){var AKc=Ah6.indexOf(
String.fromCharCode(0x2C),0);var A1$=A.jV;var O=0;this.CB=0;while(O<17)if(Ah6===
A.jV)O++;else{if(AKc===-1){A1$=Ah6;Ah6=A.jV;}else{A1$=A.abV(Ah6,AKc);Ah6=A.ab1(Ah6
,0,AKc+1);}var Aaw=A.abZ(A1$,0,10)|0;if(this.Bkh(Aaw)){this.Alz.Set(this.CB,Aaw);
this.CB=this.CB+1;O++;}AKc=Ah6.indexOf(String.fromCharCode(0x2C),0);}if(Ah6!==A.
jV)A.ab5("%s",BuO);},toString:function(){var B;var AAz=A.jV;var O;for(O=0;O<this.
CB;O=O+1){if(O>0)AAz=AAz+AyD;AAz=AAz+(((B=this.Alz.Get(O))<0)?B+0x100000000:B).toFixed(
);}return AAz;},Contains:function(Aar){var O;for(O=0;O<this.CB;O=O+1)if(this.Alz.
Get(O)===Aar)return true;return false;},Bkh:function(Aar){return true;},_Init:function(
aArg){(this.Alz=[]).__proto__=C.AmA.Alz;this.__proto__=C.AmA;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AMk={AfU:null,Init:function(aArg){var B;A.
zX([this,this.Bfc],[B=A._GetAutoObject(A.Device.Device),B.A8O,B.Bbv],0);A.zX([this
,this.Bfd],[B=A._GetAutoObject(A.Device.Device),B.A8P,B.Bbw],0);A.pe([this,this.
Bfc],this);A.pe([this,this.Bfd],this);},Clear:function(){C.AmA.Clear.call(this);
this.AfU.Clear();},Ci:function(){A._GetAutoObject(A.Device.Device).ArP(this.AfU.
toString());A._GetAutoObject(A.Device.Device).ArQ(this.toString());},Bfc:function(
G){this.AfU.E3(A._GetAutoObject(A.Device.Device).ABV);A.we(this,0);},Bfd:function(
G){this.E3(A._GetAutoObject(A.Device.Device).ABW);A.we(this,0);},N3:function(Aar
){return this.AfU.Contains(Aar);},AUZ:function(Aar){if(!this.N3(Aar))this.AfU.J(
Aar);},AOU:function(){return this.AfU.Ng();},_Init:function(aArg){C.AmA._Init.call(
this,aArg);this.__proto__=C.AMk;this.AfU=A._NewObject(C.AmA,0);this.Init(aArg);}
,_Mark:function(D){var B;C.AmA._Mark.call(this,D);if((B=this.AfU)&&(B._cycle!=D)
)B._Mark(B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.
Amw={_Init:function(){C.AMk._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AR9={Init:function(aArg){this.V.S(A.aaL(A.
fl.Ak));this.V.Text.A6(0x11);this.V.Text.Hp(10);},Bl:function(aSize){C.Uj.Bl.call(
this,aSize);this.V.H(A.abN(this.V.M,this.Mv.M[0]));},Ai:function(Ae){var B;C.Uj.
Ai.call(this,Ae);var Hg=((Ae&0x10)===0x10);var Fv=((Ae&0x20)===0x20);var GE=this.
Bo.Bw;var FT=A.jb.Aed;var GZ=A.jb.Bm;if(this.Hn){FT=A.jb.Bm;GZ=A.jb.Text;}if(!Hg
){this.Background.L(FT);this.V.L(A.jb.CK);}else if(GE){this.Background.L(A.jb.AV
);this.V.L(A.jb.Bm);}else if(Fv){this.Background.L(A.jb.AV);this.V.L(A.jb.Bm);}else{
this.Background.L(FT);this.V.L(GZ);}this.LN=Hg;this.KM=Fv;this.Qy=GE;},_Init:function(
aArg){C.Uj._Init.call(this,aArg);this.__proto__=C.AR9;this.Init(aArg);},_className:
"Application::MenuItemCheckBoxOverlay"};C.AM8={YZ:null,Ak$:null,Lr:function(){if(
!this.BQ){this.BQ=A._NewObject(C.N,0);this.BQ.CF=[this,this.AaQ];this.BQ.Ce=null;
this.BQ.Ca=null;this.BQ.CS(A.jV);this.BQ.Ct(null);this.BQ.C3(A.aaL(A.ach.YI));}return this.
BQ;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Aa3._Init.call(this.
YZ={I:this},0);C.AEr._Init.call(this.Ak$={I:this},0);this.__proto__=C.AM8;var B;
this.H(K3);this.YZ.H(K3);this.YZ.T(A.aaR(A.acf.Display));this.Ak$.Au(A._GetAutoObject(
A.Device.Device).Aqy);this.J(this.YZ,0);this.YZ.ZA(A.aaL(A.fl.H6));this.YZ.ZB(A.
aaL(A.fl.H6));this.YZ.Au([B=this.Ak$,B.B$,B.Cc]);this.YZ.CL(this.Ak$);this.Ak$.BnN([
B=A._GetAutoObject(A.Device.Device),B.AER,B.AI2]);},_Done:function(){this.__proto__=
C.OverlayMenu;this.YZ._Done();this.Ak$._Done();C.OverlayMenu._Done.call(this);},
_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.YZ._ReInit();this.Ak$._ReInit(
);this.YZ.T(A.aaR(A.acf.Display));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.YZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak$)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListOverlayMenu"
};C.AEr={AbW:null,ListViewScopeToString:null,Du:function(){return 2;},C7:function(
aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gm:function(aIndex){
if((aIndex<0)||(aIndex>=2))return A.jV;return this.ListViewScopeToString.BT(aIndex
);},DZ:function(A8){return A8;},H8:function(){return 1;},Au:function(E){var F;C.
AC.Au.call(this,E);if(!!this.AbW)(F=this.AbW,F[2].call(F[0],E));},BnN:function(E
){if(A.aaZ(this.AbW,E))return;if(!!this.AbW)A.z$([this,this.A4f],this.AbW,0);this.
AbW=E;if(!!this.AbW)A.zX([this,this.A4f],this.AbW,0);A.pe([this,this.A4f],this);
},A4f:function(G){var F;if(!!this.AbW)this.Q=(F=this.AbW,F[1].call(F[0]));else this.
Q=0;A.abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ListViewScopeToString._Init.call(this.ListViewScopeToString={I:this
},0);this.__proto__=C.AEr;},_Done:function(){this.__proto__=C.AC;this.ListViewScopeToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
ListViewScopeToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D
);if((B=this.AbW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.ListViewScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListViewScope"};C.AHd={
ACw:0,ACv:0,Ai:function(Ae){C.O4.Ai.call(this,Ae);this.Background.L(this.ACv);this.
V.L(this.ACw);},A_e:function(E){if(this.ACw===E)return;this.ACw=E;this.Am();},BmE:
function(E){if(this.ACv===E)return;this.ACv=E;this.Am();},_Init:function(aArg){C.
O4._Init.call(this,aArg);this.__proto__=C.AHd;this.As(false);this.ACw=A.jb.Text;
this.ACv=A.jb.CK;},_className:"Application::TextCaptionItem"};C.AHA={WeightValuePrecisionToString:
null,Init:function(aArg){var B;A.zX([this,this.BeI],[B=A._GetAutoObject(A.Device.
Device),B.A9m,B.BbO],0);A.pe([this,this.BeI],this);},Du:function(){return 3;},Gm:
function(aIndex){return this.WeightValuePrecisionToString.BT(this.C7(aIndex));},
Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.Device).Aw0(E);},BeI:
function(G){this.Q=A._GetAutoObject(A.Device.Device).OT;A.abo([this,this.B$,this.
Cc],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);A.Device.WeightValuePrecisionToString.
_Init.call(this.WeightValuePrecisionToString={I:this},0);this.__proto__=C.AHA;this.
BI.Set(0,0);this.BI.Set(1,1);this.BI.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Cn;this.WeightValuePrecisionToString._Done();C.Cn._Done.call(this
);},_ReInit:function(){C.Cn._ReInit.call(this);this.WeightValuePrecisionToString.
_ReInit();},_Mark:function(D){var B;C.Cn._Mark.call(this,D);if((B=this.WeightValuePrecisionToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightValuePrecision"
};C.AU5={UM:null,A$9:A.jV,Init:function(aArg){},Bl:function(aSize){C.BX.Bl.call(
this,[aSize[0],80]);this.Background.H(A.abK(this.Background.M,aSize));this.UM.H([
0,80,aSize[0],aSize[1]]);},Ai:function(Ae){C.BX.Ai.call(this,Ae);this.UM.L(this.
V.AQ);},Bog:function(E){if(this.A$9===E)return;this.A$9=E;this.UM.R(E);},_Init:function(
aArg){C.BX._Init.call(this,aArg);C.CG._Init.call(this.UM={I:this},0);this.__proto__=
C.AU5;this.H(AcT);this.UM.H(BuP);this.J(this.UM,0);this.UM.S(A.aaL(A.fl.Af));this.
UM.AY(A.aaL(A.fl.Ak));this.UM.Cm(null);this.Init(aArg);},_Done:function(){this.__proto__=
C.BX;this.UM._Done();C.BX._Done.call(this);},_ReInit:function(){C.BX._ReInit.call(
this);this.UM._ReInit();this.UM.S(A.aaL(A.fl.Af));this.UM.AY(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.BX._Mark.call(this,D);if((B=this.UM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSubCaption"};C.Wu={ABZ:null,MassDeregistrationCriterionToString:
null,Du:function(){return 2;},Gm:function(aIndex){var F;if((aIndex<0)||(aIndex>=
2))return A.jV;var A8=this.C7(aIndex);var M8=this.MassDeregistrationCriterionToString.
BT(this.C7(aIndex));if(!!this.ABZ&&!A8)M8=A._GetAutoObject(A.Device.Helper).MO(M8
,Pc,(F=this.ABZ,F[1].call(F[0])).toFixed());return M8;},_Init:function(aArg){C.Cn.
_Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.call(this.
MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.Wu;this.BI.Set(
0,0);this.BI.Set(1,1);},_Done:function(){this.__proto__=C.Cn;this.MassDeregistrationCriterionToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.Cn._Mark.
call(this,D);if((B=this.ABZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassDeregistrationCriterion"};C.AN2={Vt:null,Wu:null,Ze:null,JW:null
,Aug:0,Aa5:100,Init:function(aArg){this.Bb(this.Ze);},Ai:function(Ae){C.Ej.Ai.call(
this,Ae);var BCN=((A.aaR(A.acf.AqG)+A.aaR(A.acf.Colon))+CR)+this.Aug.toFixed();this.
JW.Bog(BCN);},CD:function(G){C.Ej.CD.call(this,G);A.zX([this,this.ABL],this.JW.Q
,0);A.pe([this,this.ABL],this);},E4:function(G){C.Ej.E4.call(this,G);A.z$([this,
this.ABL],this.JW.Q,0);},DK:function(G){var F;C.Ej.DK.call(this,G);this.N.E6(A.jV
);this.N.Ce=null;if((this.AV===this.JW)&&!!this.JW.Q){this.N.Ca=[this,this.Bfs];
switch((F=this.JW.Q,F[1].call(F[0]))){case 1:if(!this.Aug)this.N.GX.CZ(100);else
this.N.GX.CZ(255);break;case 0:{this.N.E6(A.aaR(A.acf.Biz));this.N.Ce=[this,this.
Bzv];if(this.Aa5<=1)this.N.GX.CZ(100);else this.N.GX.CZ(255);this.N.CS(A.aaR(A.acf.
BiA));this.N.Ca=[this,this.BAs];if(this.Aa5>=2147483647)this.N.GX.CZ(100);else this.
N.GX.CZ(255);this.N.WW=true;}break;default:throw new Error(BuQ+(F=this.JW.Q,F[1].
call(F[0])).toFixed());}this.JW.Ab8(this.N.Ca);}},Bfs:function(G){if(this.Aug>0)
A._GetAutoObject(A.Device.Device).AZ(108,true,this.Aug.toFixed(),0,[this,this.BA1
]);},ABL:function(G){var F;this.Aug=A._GetAutoObject(A.Device.Helper).BjG((F=this.
JW.Q,F[1].call(F[0])),this.Aa5);this.Am();A.pe([this,this.MT],this);},Bfm:function(
G){var B;if(!A._GetAutoObject(A.Device.Device).An.B8()){A._GetAutoObject(A.Device.
Device).AZ(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Arp(
)===false){this.Vt=[this,this.Bfm];A.zX([this,this.XN],[B=A._GetAutoObject(A.Device.
Device),B.Uu,B.Vc],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,
this.Agk]);return;}A.zX([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).Gg,
B.SL,B.E5],0);A._GetAutoObject(A.Device.Device).Asx(1,false);},Agk:function(G){var
B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XN],[B=A._GetAutoObject(A.Device.Device),B.Uu,B.Vc],0);this.
Vt=null;}},XN:function(G){var B;if(A._GetAutoObject(A.Device.Device).P7.Z8===3){
A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0,[this,this.Agk]);A.z$([this
,this.XN],[B=A._GetAutoObject(A.Device.Device),B.Uu,B.Vc],0);if(!!this.Vt)A.pe(this.
Vt,this);this.Vt=null;}},BA1:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCI],this);},BCI:function(
G){A._GetAutoObject(A.Device.Helper).ByX(this.Wu.Q,this.Aa5);A._GetAutoObject(A.
Device.Device).AZ(109,true,this.Aug.toFixed(),0,null);A.pe([this,this.MT],this);
A.pe([this,this.ABL],this);},Al6:function(G){var B;switch(A._GetAutoObject(A.Device.
Device).Gg.EN){case 0:A.z$([this,this.Al6],[B=A._GetAutoObject(A.Device.Device).
Gg,B.SL,B.E5],0);break;case 3:A._GetAutoObject(A.Device.Device).AqK();break;case
4:{A._GetAutoObject(A.Device.Device).AZ(88,true,A.jV,0,null);A._GetAutoObject(A.
Device.Device).Gg.E7();}break;default:;}},BAs:function(G){if(this.Aa5<2147483647
)this.ATe(this.Aa5+1);},Bzv:function(G){if(this.Aa5>1)this.ATe(this.Aa5-1);},ATe:
function(E){if(this.Aa5===E)return;this.Aa5=E;A.pe([this,this.ABL],this);this.JW.
Am();},Bld:function(){return this.Aa5;},_Init:function(aArg){C.Ej._Init.call(this
,aArg);C.Wu._Init.call(this.Wu={I:this},0);C.Cp._Init.call(this.Ze={I:this},0);C.
AU5._Init.call(this.JW={I:this},0);this.__proto__=C.AN2;var B;this.Dr(C.APc);this.
Ze.H(I1);this.Ze.Aj(true);this.Ze.T(A.aaR(A.acf.A6T));this.Ze.Bi(false);this.JW.
H(Bba);this.JW.Aj(true);this.JW.T(A.aaR(A.acf.Bar));this.JW.Bi(true);this.JW.A_7(
A.aaR(A.acf.Ok));this.J(this.Ze,0);this.J(this.JW,0);this.Wu.ABZ=[this,this.Bld,
this.ATe];this.Ze.AR=[this,this.Bfm];this.JW.AR=[this,this.Bfs];this.JW.Ab8(this.
N.Ca);this.JW.Au([B=this.Wu,B.B$,B.Cc]);this.JW.CL(this.Wu);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ej;this.Wu._Done();this.Ze._Done();this.JW._Done();C.
Ej._Done.call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Wu._ReInit(
);this.Ze._ReInit();this.JW._ReInit();this.Ze.T(A.aaR(A.acf.A6T));this.JW.T(A.aaR(
A.acf.Bar));this.JW.A_7(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Ej._Mark.call(
this,D);if((B=this.Vt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Wu).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ze)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.APc={_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APc;this.
Text.R(A.aaR(A.acf.AdX));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AdX));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.AN5={
Vt:null,Zd:null,Ab0:null,Init:function(aArg){this.Bb(this.Zd);A.pe([this,this.MT
],this);},Bfl:function(G){var B;var AAj=A._GetAutoObject(A.Device.Device).AEd();
switch(AAj){case 1:A._GetAutoObject(A.Device.Device).AZ(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).AZ(91,true,U9,0,[this,this.BfF]);break;
case 2:{this.Vt=[this,this.Bfl];A.zX([this,this.XN],[B=A._GetAutoObject(A.Device.
Device),B.Uu,B.Vc],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV,0,[this,
this.Agk]);}break;default:throw new Error(Bbd+AAj.toFixed());}},Agk:function(G){
var B;var Ar=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!Ar&&(Ar.PopupState===
5)){A.z$([this,this.XN],[B=A._GetAutoObject(A.Device.Device),B.Uu,B.Vc],0);this.
Vt=null;}},XN:function(G){var B;if(A._GetAutoObject(A.Device.Device).P7.Z8===3){
A._GetAutoObject(A.Device.Device).AZ(74,false,A.jV,0,[this,this.Agk]);A.z$([this
,this.XN],[B=A._GetAutoObject(A.Device.Device),B.Uu,B.Vc],0);if(!!this.Vt)A.pe(this.
Vt,this);this.Vt=null;}},BfH:function(G){var B;var AAj=A._GetAutoObject(A.Device.
Device).AEe();switch(AAj){case 1:A._GetAutoObject(A.Device.Device).AZ(84,true,A.
jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).AZ(95,true,A.jV,0,[this
,this.BA2]);break;case 2:{this.Vt=[this,this.BfH];A.zX([this,this.XN],[B=A._GetAutoObject(
A.Device.Device),B.Uu,B.Vc],0);A._GetAutoObject(A.Device.Device).AZ(74,true,A.jV
,0,[this,this.Agk]);}break;case 3:A._GetAutoObject(A.Device.Device).AZ(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).AZ(93,true,A.jV,0,null
);break;default:throw new Error(Bbd+AAj.toFixed());}},BfF:function(G){var Ar=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(Ar.Id){case 91:if(Ar.PopupState===
9)A.aaS([this,this.Bzz],this);break;case 92:if(Ar.PopupState===9)A.aaS([this,this.
BzB],this);break;default:throw new Error(BuR+Ar.Id.toFixed());}},Bzz:function(G){
if(A._GetAutoObject(A.Device.Device).ACF()){var A3t=A._GetAutoObject(A.Device.Device
).An.QM();A._GetAutoObject(A.Device.Device).AZ(80,true,A3t.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).AZ(82,true,A.jV,0,null);A.aaS([this,this.BAW],
this);},BzB:function(G){if(A._GetAutoObject(A.Device.Device).AGH()){var A3t=A._GetAutoObject(
A.Device.Device).An.QM();A._GetAutoObject(A.Device.Device).AZ(81,true,A3t.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).AZ(83,true,A.jV,0,null);A.aaS([
this,this.BBC],this);},BA2:function(G){var Ar=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!Ar&&(Ar.PopupState===7))A.pe([this,this.BCJ],this);},BCJ:function(
G){A._GetAutoObject(A.Device.Device).AZ(92,true,U9,0,[this,this.BfF]);},BBC:function(
G){A._GetAutoObject(A.Device.Device).AZ(92,false,A.jV,0,null);},BAW:function(G){
A._GetAutoObject(A.Device.Device).AZ(91,false,A.jV,0,null);},_Init:function(aArg
){C.Ej._Init.call(this,aArg);C.Cp._Init.call(this.Zd={I:this},0);C.Cp._Init.call(
this.Ab0={I:this},0);this.__proto__=C.AN5;this.Dr(C.APf);this.Zd.H(I1);this.Zd.Aj(
true);this.Zd.T(A.aaR(A.acf.ACF));this.Zd.Bi(false);this.Ab0.H(Qf);this.Ab0.Aj(true
);this.Ab0.T(A.aaR(A.acf.AGH));this.Ab0.Bi(true);this.J(this.Zd,-1);this.J(this.
Ab0,-1);this.Zd.AR=[this,this.Bfl];this.Ab0.AR=[this,this.BfH];this.Init(aArg);}
,_Done:function(){this.__proto__=C.Ej;this.Zd._Done();this.Ab0._Done();C.Ej._Done.
call(this);},_ReInit:function(){C.Ej._ReInit.call(this);this.Zd._ReInit();this.Ab0.
_ReInit();this.Zd.T(A.aaR(A.acf.ACF));this.Ab0.T(A.aaR(A.acf.AGH));},_Mark:function(
D){var B;C.Ej._Mark.call(this,D);if((B=this.Vt)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab0)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.APf={
_Init:function(aArg){C.Ku._Init.call(this,aArg);this.__proto__=C.APf;this.Text.R(
A.aaR(A.acf.ACL));},_ReInit:function(){C.Ku._ReInit.call(this);this.Text.R(A.aaR(
A.acf.ACL));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Mo={L3:null
,AUy:0,AEg:false,AEc:false,AEh:false,Agi:function(G){this.A6C(this);},ATC:function(
E){if(this.L3===E)return;this.L3=E;if(!this.L3)return;this.DQ.AutoActions=E;A.zV([
this,this.BgJ],this.L3,0);A.zV([this,this.AoF],this.L3,0);A.pe([this,this.BgJ],this
);A.pe([this,this.AoF],this);},AMl:function(){this.AMn(A.aaR(A.acf.Baz),[this,this.
BCZ],[this,this.A9g,this.AFA]);this.AMn(A.aaR(A.acf.AGx),[this,this.BCX],[this,this.
A9d,this.AFy]);this.AMn(A.aaR(A.acf.An5),[this,this.BCY],[this,this.A9e,this.AFz
]);A._GetAutoObject(C.BS).Fz();A._GetAutoObject(C.BS).Mq(A.aaR(A.acf.BoO)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BS).Fz();},AMn:function(Bxp,Byz,BxU){if(!this.L3
)return;this.AuN(Bxp,Byz,BxU);},BCZ:function(G){this.AFA(!this.AEh);},BCX:function(
G){this.AFy(!this.AEc);},BCY:function(G){this.AFz(!this.AEg);},A4H:function(Eh,BxT
){if(!this.L3)return;if(BxT)this.L3.BhF(Eh);else this.L3.Bo7(Eh);this.L3.Ci();},
A5o:function(Aih,Aii,ByS){A._GetAutoObject(C.BS).ABX(Aih,Aii,[this,this.A9x,this.
ATP],ByS);},AGT:function(Eh){if(!this.L3)return;this.L3.AGT(Eh);this.L3.Ci();},AFA:
function(E){if(this.AEh===E)return;this.AEh=E;this.A4H(256,E);A.abo([this,this.A9g
,this.AFA],0);},AFy:function(E){if(this.AEc===E)return;this.AEc=E;this.A4H(2,E);
A.abo([this,this.A9d,this.AFy],0);},AFz:function(E){if(this.AEg===E)return;this.
AEg=E;this.A4H(1,E);A.abo([this,this.A9e,this.AFz],0);},BgJ:function(G){this.AFA(
this.L3.Contains(256));this.AFy(this.L3.Contains(2));this.AFz(this.L3.Contains(1
));if(this.L3.Ng()>0)this.ATP(this.L3.ADj());},ATP:function(E){if(this.AUy===E)return;
this.AUy=E;A.abo([this,this.A9x,this.ATP],0);},A9g:function(){return this.AEh;},
A9d:function(){return this.AEc;},A9e:function(){return this.AEg;},A9x:function(){
return this.AUy;},_Init:function(aArg){C.GJ._Init.call(this,aArg);this.__proto__=
C.Mo;},_Mark:function(D){var B;C.GJ._Mark.call(this,D);if((B=this.L3)&&(B._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::ActionListAnimalListScreen"};
C.Av2={Q:null,Ci:function(){var F;(F=this.Q,F[2].call(F[0],this.toString()));},AEa:
function(Eh){switch(Eh){case 16384:case 131072:case 1024:case 1:case 2:case 256:
return true;default:return false;}},Hh:function(G){var F;if(!!this.Q)this.E3((F=
this.Q,F[1].call(F[0])));A.we(this,0);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Hh],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Hh],E,
0);if(!!E)A.pe([this,this.Hh],this);},AGT:function(Eh){if(this.Ng()>0)this.AxE(this.
Ng()-1,Eh);},BhF:function(Eh){if(this.Contains(Eh))return;if(this.CB>=17){A.ab5(
"%s",AIn);return;}var AAc=0;for(;(AAc<=this.Ng())&&(this.OM(AAc)<Eh);AAc++);var ABq=
this.Ng()-1;this.J(this.OM(ABq));for(;ABq>AAc;ABq--)this.AxE(ABq,this.OM(ABq-1));
this.AxE(AAc,Eh);},Bo7:function(Eh){var index=this.DZ(Eh);if(index<0)return;for(;
index<(this.Ng()-1);index++)this.AxE(index,this.OM(index+1));this.AxE(index,0);this.
CB--;},ADj:function(){var Tp=0;if(this.Ng()>0)Tp=this.OM(this.Ng()-1);return Tp;
},_Init:function(aArg){C.VG._Init.call(this,aArg);this.__proto__=C.Av2;},_Mark:function(
D){var B;C.VG._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::ListActionsListClass"};C.Awa={_Init:function(){C.Av2.
_Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.Device),B.A9q,B.BbS
]);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.Awb={
_Init:function(){C.Av2._Init.call(this,0);var B;this.Au([B=A._GetAutoObject(A.Device.
Device),B.A9r,B.BbT]);},_ReInit:function(){},_variants:function(){return this;},
_this:null};C.Aya={_Init:function(){C.Av2._Init.call(this,0);var B;this.Au([B=A.
_GetAutoObject(A.Device.Device),B.A9Z,B.Bb8]);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.ADI={QW:null,AjX:null,_Init:function(aArg){C.De._Init.
call(this,aArg);C.CG._Init.call(this.QW={I:this},0);A.acg.Ap._Init.call(this.AjX={
I:this},0);this.__proto__=C.ADI;this.Es.H(BuS);this.DS.H(BuT);this.QW.H(BuU);this.
QW.R(A.aaR(A.acf.Uq));this.QW.A6(0x11);this.QW.L(A.jb.Text);this.AjX.H(A0y);this.
AjX.L(A.jb.Text);this.J(this.QW,0);this.J(this.AjX,0);this.QW.S(A.aaL(A.fl.Af));
this.QW.AY(A.aaL(A.fl.Ak));this.QW.Cm(A.aaL(A.fl.Bh));this.AjX.Ax(A.aaL(A.ach.AvH
));},_Done:function(){this.__proto__=C.De;this.QW._Done();this.AjX._Done();C.De.
_Done.call(this);},_ReInit:function(){C.De._ReInit.call(this);this.QW._ReInit();
this.AjX._ReInit();this.QW.R(A.aaR(A.acf.Uq));this.QW.S(A.aaL(A.fl.Af));this.QW.
AY(A.aaL(A.fl.Ak));this.QW.Cm(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.De._Mark.
call(this,D);if((B=this.QW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjX)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineNaisIdAnimalId"};C.ACo={
AP:null,S3:null,O5:null,AKH:A.jV,BeR:A.jV,Mn:0,Init:function(aArg){},Bl:function(
aSize){C.Ba.Bl.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.O5.H([this.V.M[2]-1,0,((aSize[
0]*70)/100)|0,aSize[1]]);this.AP.H([this.O5.M[2]-1,0,this.O5.M[2]+1,aSize[1]]);this.
S3.H([this.O5.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);
this.O5.L(this.V.AQ);this.S3.L(this.V.AQ);this.T(this.AKH);this.O5.R(this.BeR);this.
S3.R(this.Mn.toFixed());},Ch:function(Ad){if(!this.AX)return;this.Ht=Ad;if(!!this.
AX){var Js=this.AX.KT(Ad,26);var A3l=A._GetAutoObject(A.Device.Converter).Rl(Js);
this.AKH=A.abV(A3l,A3l.length-5);this.BeR=A.ab2(A3l,5);if((A._GetAutoObject(A.Device.
Converter).S9(Js)===10)&&!(Math.trunc(Js/10000000000)%100))this.AKH=A.ab1(this.AKH
,3,2);this.Mn=this.AX.CC(Ad,1);this.Am();}},_Init:function(aArg){C.Ba._Init.call(
this,aArg);A.acg.AL._Init.call(this.AP={I:this},0);C.CG._Init.call(this.S3={I:this
},0);C.CG._Init.call(this.O5={I:this},0);this.__proto__=C.ACo;this.V.H(BuV);this.
AP.H(A0B);this.AP.L(A.jb.Bc);this.S3.H(A0C);this.O5.H(BuW);this.J(this.AP,0);this.
J(this.S3,0);this.J(this.O5,0);this.V.S(A.aaL(A.fl.Bh));this.V.AY(A.aaL(A.fl.Bh)
);this.S3.S(A.aaL(A.fl.Ak));this.S3.AY(A.aaL(A.fl.Bh));this.S3.Cm(A.aaL(A.fl.Bh)
);this.O5.S(A.aaL(A.fl.Af));this.O5.AY(A.aaL(A.fl.Bh));this.O5.Cm(A.aaL(A.fl.Bh)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AP._Done();this.S3.
_Done();this.O5._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AP._ReInit();this.S3._ReInit();this.O5._ReInit();this.V.S(A.aaL(
A.fl.Bh));this.V.AY(A.aaL(A.fl.Bh));this.S3.S(A.aaL(A.fl.Ak));this.S3.AY(A.aaL(A.
fl.Bh));this.S3.Cm(A.aaL(A.fl.Bh));this.O5.S(A.aaL(A.fl.Af));this.O5.AY(A.aaL(A.
fl.Bh));this.O5.Cm(A.aaL(A.fl.Bh));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S3)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListNaisIdAnimalIdItem"
};C.APH={Q:null,Init:function(aArg){var B;this.ABf(this);this.Au([B=A._GetAutoObject(
A.Device.Device).An,B.Fo,B.Fs]);},AE4:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).E$(
);FilterCriterion=(A.Device.UInt64PartialFilterCriterion.isPrototypeOf(B=Filter.
DM(26,4))?B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;
}if(!!FilterCriterion)Filter.Nw(FilterCriterion);var Ai6=this.Awn();if((Ai6.length>
0)&&(Ai6!==U9)){FilterCriterion=A._NewObject(A.Device.UInt64PartialFilterCriterion
,0);FilterCriterion.Initialize(26,4,Ai6,0,6,false);Filter.CX(FilterCriterion);}if(
!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.AW.Ae1(false);},ABf:function(G){
var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[
0]))){Filter=(F=this.Q,F[1].call(F[0])).E$();FilterCriterion=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=Filter.DM(26,4))?B:null);if(!!FilterCriterion)Filter.Nw(FilterCriterion
);(F=this.Q,F[2].call(F[0],Filter));}},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.C5],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.C5],E,
0);if(!!E)A.pe([this,this.C5],this);},C5:function(G){var B;var F;if(!(F=this.Q,F[
1].call(F[0]))){this.AW.ATv(A.jV);return;}var Aze=(A.Device.UInt64PartialFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DM(26,4))?B:null);if(!Aze){this.AW.ATv(
U9);this.AW.Ae1(true);}else this.AW.ATv(Aze.A5);},_Init:function(aArg){C.AjT._Init.
call(this,aArg);this.__proto__=C.APH;this.AW.AwT(0);this.AW.Bnz(true);this.AW.Dk=[
this,this.AE4];this.Init(aArg);},_Mark:function(D){var B;C.AjT._Mark.call(this,D
);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchNaisId"
};C.AVR={FD:null,Da:null,Dn:null,EL:null,AsW:null,Init:function(aArg){var B;A.zX([
this,this.BfO],[B=A._GetAutoObject(A.Device.Device),B.AS$,B.A0W],0);A.zX([this,this.
Adz],[B=A._GetAutoObject(A.Device.Device),B.Us,B.U$],0);A.zX([this,this.Adz],[B=
A._GetAutoObject(A.Device.Device),B.Ut,B.Va],0);A.pe([this,this.BfO],this);A.pe([
this,this.Adz],this);},BfO:function(G){var AaX=false;switch(A._GetAutoObject(A.Device.
Device).An_){case 0:AaX=false;break;case 3:AaX=true;break;default:throw new Error(
BuX+A._GetAutoObject(A.Device.Device).An_.toFixed());}A._GetAutoObject(A.Device.
Helper).J6(this.Da,AaX);A._GetAutoObject(A.Device.Helper).J6(this.Dn,AaX);A._GetAutoObject(
A.Device.Helper).J6(this.EL,AaX);},Adz:function(G){var F,Cu;if(((F=this.Da.Q,F[1
].call(F[0]))+(Cu=this.Dn.Q,Cu[1].call(Cu[0])))>12)(Cu=this.Dn.Q,Cu[2].call(Cu[0
],12-(F=this.Da.Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cg._Init.call(this
,aArg);C.BX._Init.call(this.FD={I:this},0);C.Iv._Init.call(this.Da={I:this},0);C.
Iv._Init.call(this.Dn={I:this},0);C.Av6._Init.call(this.EL={I:this},0);C.AVQ._Init.
call(this.AsW={I:this},0);this.__proto__=C.AVR;var B;this.Jf(A.aaR(A.acf.UnlinkTransponder
));this.FD.H(U8);this.FD.Aj(true);this.FD.Z(true);this.FD.T(A.aaR(A.acf.Aqp));this.
FD.Bi(true);this.Da.H(Alk);this.Da.Aj(true);this.Da.Z(true);this.Da.T(A.aaR(A.acf.
AqM));this.Da.Bi(false);this.Da.Gb(2);this.Da.EV(6);this.Da.IW(A.aaR(A.acf.OK));
this.Da.Jg(A.aaR(A.acf.Ez));this.Dn.H(Ah4);this.Dn.Aj(true);this.Dn.T(A.aaR(A.acf.
Zs));this.Dn.Bi(true);this.Dn.Gb(0);this.Dn.EV(12);this.Dn.IW(A.aaR(A.acf.OK));this.
Dn.Jg(A.aaR(A.acf.Ez));this.EL.H(Aot);this.EL.As(true);this.EL.Aj(true);this.EL.
Bi(false);this.EL.Ar9(A.aaR(A.acf.Aqr));this.J(this.FD,0);this.J(this.Da,0);this.
J(this.Dn,0);this.J(this.EL,0);this.FD.Au([B=this.AsW,B.B$,B.Cc]);this.FD.CL(this.
AsW);this.Da.Au([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.Dn.Au([B=A.
_GetAutoObject(A.Device.Device),B.Ut,B.Va]);this.EL.DC(A.aaL(A.ach.AjY));this.EL.
OU([B=A._GetAutoObject(A.Device.Device),B.Us,B.U$]);this.EL.PY([B=A._GetAutoObject(
A.Device.Device),B.Ut,B.Va]);this.Init(aArg);},_Done:function(){this.__proto__=C.
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
BT(this.C7(aIndex));},Au:function(E){C.Cn.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Axj(E);},Bhg:function(G){this.Q=A._GetAutoObject(A.Device.Device).An_;A.
abo([this,this.B$,this.Cc],0);},_Init:function(aArg){C.Cn._Init.call(this,aArg);
A.Device.TransponderLinkageIdChangeMethodToString._Init.call(this.TransponderLinkageIdChangeMethodToString={
I:this},0);this.__proto__=C.AVQ;this.BI.Set(0,0);this.BI.Set(1,3);this.Init(aArg
);},_Done:function(){this.__proto__=C.Cn;this.TransponderLinkageIdChangeMethodToString.
_Done();C.Cn._Done.call(this);},_ReInit:function(){C.Cn._ReInit.call(this);this.
TransponderLinkageIdChangeMethodToString._ReInit();},_Mark:function(D){var B;C.Cn.
_Mark.call(this,D);if((B=this.TransponderLinkageIdChangeMethodToString)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TransponderUnlinkIdChangeMode"};
C._Init=function(){C.AMW.__proto__=A.Core.Root;C.AB.__proto__=C.Abs;C.WY.__proto__=
A.Core.P;C.OF.__proto__=A.Core.P;C.ZI.__proto__=A.acl.Gn;C.Ek.__proto__=A.Core.P;
C.X_.__proto__=C.AB;C.AVh.__proto__=C.AB;C.AvG.__proto__=C.AB;C.Rc.__proto__=C.AB;
C.Fn.__proto__=C.Hk;C.Ay.__proto__=A.Core.P;C.Cg.__proto__=C.AB;C.Aq8.__proto__=
C.BR;C.BR.__proto__=A.Core.P;C.N.__proto__=A.Core.P;C.ADA.__proto__=C.Am4;C.AG$.
__proto__=C.DR;C.Cp.__proto__=C.O4;C.Ds.__proto__=C.Eg;C.Iv.__proto__=C.Ds;C.BX.
__proto__=C.Ds;C.SY.__proto__=C.Ds;C.OR.__proto__=C.Cn;C.Rh.__proto__=C.AC;C.AVw.
__proto__=C.Ba;C.Gd.__proto__=A.Core.P;C.Ba.__proto__=C.Cp;C.GJ.__proto__=C.AB;C.
ACn.__proto__=C.Ba;C.Aeb.__proto__=C.AB;C.Mu.__proto__=C.OF;C.AVr.__proto__=C.AB;
C.Aq7.__proto__=C.ADA;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AU8.__proto__=C.Acv;C.EB.__proto__=A.Core.P;C.Rating.__proto__=
A.Core.P;C.AsC.__proto__=A.Core.P;C.AGX.__proto__=C.Ds;C.CG.__proto__=A.Core.P;C.
AjS.__proto__=C.YC;C.Amz.__proto__=C.Rg;C.AhC.__proto__=A.Core.P;C.Ej.__proto__=
C.AB;C.AUi.__proto__=C.AB;C.My.__proto__=C.Cp;C.Ann.__proto__=C.Cp;C.OverlayMenu.
__proto__=C.Abs;C.APX.__proto__=C.OverlayMenu;C.GK.__proto__=A.Core.P;C.Abs.__proto__=
A.Core.P;C.AVb.__proto__=A.acl.Aep;C.Am4.__proto__=C.BR;C.ADB.__proto__=C.Am4;C.
Kq.__proto__=C.AC;C.AU_.__proto__=C.Ds;C.AGy.__proto__=C.AB;C.H3.__proto__=C.AB;
C.WG.__proto__=C.ArB;C.IP.__proto__=C.ADB;C.I_.__proto__=C.AB;C.AMu.__proto__=C.
AGy;C.AMq.__proto__=C.GJ;C.ANK.__proto__=C.GJ;C.Aet.__proto__=C.Cp;C.QH.__proto__=
C.Aet;C.APK.__proto__=C.BR;C.AjT.__proto__=C.BR;C.DG.__proto__=C.Ez;C.AW.__proto__=
A.Core.P;C.Ge.__proto__=C.AC;C.Afr.__proto__=C.BX;C.AUz.__proto__=C.AB;C.Ab1.__proto__=
C.Cp;C.Uj.__proto__=C.Cp;C.ANW.__proto__=C.Cg;C.AVy.__proto__=C.Cg;C.AN9.__proto__=
C.Cg;C.AUL.__proto__=C.Cg;C.Xb.__proto__=A.Core.P;C.QZ.__proto__=C.Fn;C.D2.__proto__=
A.Core.P;C.Uf.__proto__=C.AB;C.AV9.__proto__=C.GJ;C.AMv.__proto__=C.Ax_;C.AVT.__proto__=
C.Cg;C.AeT.__proto__=C.AC;C.Ax_.__proto__=C.AB;C.AWg.__proto__=C.Cg;C.AU9.__proto__=
C.Acv;C.ABT.__proto__=A.Graphics.HA;C.Aql.__proto__=C.AB;C.AR0.__proto__=A.Core.
P;C.Fr.__proto__=C.OverlayMenu;C.Aa3.__proto__=C.BX;C.Ajl.__proto__=C.Cp;C.AMc.__proto__=
C.Fr;C.Cn.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AMi.__proto__=C.VG;C.AMj.
__proto__=C.Fr;C.Sm.__proto__=C.Uj;C.AM1.__proto__=C.VG;C.Ww.__proto__=C.Fn;C.VD.
__proto__=A.Core.P;C.KC.__proto__=A.Core.P;C.ASm.__proto__=C.H3;C.AUC.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Cn;C.ANL.__proto__=C.Amz;C.Hk.__proto__=A.
Core.P;C.AV$.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Cn;C.Abb.
__proto__=C.Ge;C.Ax2.__proto__=C.ABT;C.AUd.__proto__=C.OverlayMenu;C.AOO.__proto__=
A.Core.P;C.N9.__proto__=A.Core.P;C.AUe.__proto__=A.Core.P;C.AVa.__proto__=A.acl.
Aep;C.AkW.__proto__=C.Iv;C.AmB.__proto__=C.OverlayMenu;C.ACq.__proto__=C.Ba;C.YD.
__proto__=C.AjT;C.AqQ.__proto__=C.H3;C.Acu.__proto__=C.Ds;C.WeightRecordingScope.
__proto__=C.AC;C.AuS.__proto__=C.AB;C.AU$.__proto__=C.Iv;C.AMs.__proto__=C.AB;C.
ArB.__proto__=C.H3;C.AHv.__proto__=A.Core.P;C.AWc.__proto__=A.Core.P;C.Eg.__proto__=
C.Cp;C.AeV.__proto__=C.Eg;C.Av7.__proto__=C.AeV;C.SetTransponderScreen.__proto__=
C.Rc;C.ADJ.__proto__=C.EB;C.AHz.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.Mp.__proto__=C.Rc;C.AMa.__proto__=C.Mp;C.ManualActionScanScreen.__proto__=C.Mp;
C.AMb.__proto__=A.Core.P;C.APO.__proto__=C.De;C.ADH.__proto__=C.De;C.T5.__proto__=
C.De;C.APQ.__proto__=C.De;C.ANp.__proto__=C.Ba;C.Nb.__proto__=C.Ba;C.ANn.__proto__=
C.Ba;C.Jx.__proto__=A.Core.P;C.ANm.__proto__=C.Ba;C.Am3.__proto__=C.TQ;C.AGo.__proto__=
C.Axu;C.AkI.__proto__=C.Axu;C.ZH.__proto__=C.AkI;C.ANS.__proto__=C.O4;C.O4.__proto__=
C.Hk;C.APT.__proto__=C.EB;C.DS.__proto__=A.Core.P;C.ANj.__proto__=C.AjD;C.ADD.__proto__=
C.T6;C.Kp.__proto__=A.Core.P;C.AmL.__proto__=C.My;C.AO$.__proto__=C.Kv;C.AutoRegistrationMode.
__proto__=C.AC;C.APU.__proto__=C.EB;C.TK.__proto__=C.AB;C.D9.__proto__=A.Core.P;
C.AMG.__proto__=C.R5;C.AMU.__proto__=C.Aa_;C.AMP.__proto__=C.Aa_;C.AUB.__proto__=
C.Ba;C.APS.__proto__=C.EB;C.AMJ.__proto__=C.Aa_;C.IK.__proto__=C.I9;C.RZ.__proto__=
C.FA;C.R3.__proto__=C.FA;C.TJ.__proto__=C.JQ;C.QG.__proto__=C.FA;C.TI.__proto__=
C.JQ;C.AMr.__proto__=C.Aql;C.ARl.__proto__=C.Cg;C.Aa_.__proto__=C.D9;C.Ko.__proto__=
C.Cn;C.ARW.__proto__=C.Cg;C.AME.__proto__=C.Ld;C.AMF.__proto__=C.D9;C.AMC.__proto__=
C.Ld;C.AMD.__proto__=C.Ld;C.W0.__proto__=C.Eg;C.AU6.__proto__=C.W0;C.R4.__proto__=
C.FA;C.APJ.__proto__=C.IP;C.ANM.__proto__=C.AB;C.ANt.__proto__=C.Aeb;C.AMp.__proto__=
C.I_;C.AV8.__proto__=C.I_;C.APb.__proto__=C.Kv;C.APL.__proto__=C.Kv;C.APP.__proto__=
C.T6;C.ANo.__proto__=C.AjD;C.T6.__proto__=C.De;C.AqB.__proto__=A.acv.ACA;C.AjD.__proto__=
C.Ba;C.DR.__proto__=A.Core.P;C.ANa.__proto__=C.DR;C.O9.__proto__=C.DR;C.Aq5.__proto__=
A.Core.P;C.AML.__proto__=C.Gd;C.AUF.__proto__=A.Core.P;C.Ld.__proto__=C.D9;C.ANT.
__proto__=C.Cg;C.Avd.__proto__=C.Cp;C.ADx.__proto__=C.BR;C.ADy.__proto__=C.BR;C.
FA.__proto__=C.JQ;C.AOR.__proto__=C.GJ;C.AOQ.__proto__=C.I_;C.APp.__proto__=C.Kv;
C.ADF.__proto__=C.De;C.ACm.__proto__=C.Ba;C.AUA.__proto__=C.AhC;C.FactoryResetScope.
__proto__=C.Cn;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ASy.
__proto__=C.Mo;C.ASx.__proto__=C.I_;C.ADz.__proto__=C.Kv;C.AB6.__proto__=C.Ge;C.
AMf.__proto__=C.Fr;C.AMt.__proto__=C.AuS;C.NewAnimalSetTransponderScreen.__proto__=
C.AsH;C.C9.__proto__=C.AC;C.O8.__proto__=A.Core.P;C.R0.__proto__=C.FA;C.R1.__proto__=
C.FA;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AR7.__proto__=C.OverlayMenu;
C.V1.__proto__=C.Uj;C.Av6.__proto__=C.Cp;C.AnimalSingleInfoScreen.__proto__=C.TK;
C.AnimalMultiInfoScreen.__proto__=C.TK;C.AMI.__proto__=C.OverlayMenu;C.Jc.__proto__=
A.Core.P;C.AMe.__proto__=C.GJ;C.AMd.__proto__=C.I_;C.API.__proto__=C.IP;C.AsR.__proto__=
C.O8;C.Ark.__proto__=C.O8;C.Au$.__proto__=C.AC;C.AMA.__proto__=C.AC;C.AGW.__proto__=
C.Eg;C.G7.__proto__=A.Core.P;C.ARo.__proto__=C.HN;C.AVY.__proto__=C.X_;C.ASi.__proto__=
C.WG;C.AD8.__proto__=C.Lk;C.HN.__proto__=C.G7;C.Lk.__proto__=C.G7;C.EartagNrAssignmentMode.
__proto__=C.AC;C.AvW.__proto__=C.HN;C.AU4.__proto__=C.BX;C.NewAnimalsSetTransponderScreen.
__proto__=C.AsH;C.ReasonOfLeaving.__proto__=C.AC;C.O1.__proto__=C.BX;C.AeY.__proto__=
C.El;C.ASb.__proto__=C.El;C.ASa.__proto__=C.El;C.El.__proto__=A.Core.P;C.Rd.__proto__=
C.Eg;C.ARp.__proto__=C.Lk;C.AvV.__proto__=A.Core.P;C.Ez.__proto__=A.Core.P;C.FC.
__proto__=C.AB;C.AOq.__proto__=C.AB;C.AOt.__proto__=C.FC;C.AOu.__proto__=C.FC;C.
AqT.__proto__=C.FC;C.AbD.__proto__=C.AjS;C.Kv.__proto__=C.AjS;C.AvE.__proto__=C.
AbD;C.APn.__proto__=C.AbD;C.APm.__proto__=C.AbD;C.APl.__proto__=C.BR;C.AeB.__proto__=
C.EB;C.AmT.__proto__=C.Ba;C.Ajt.__proto__=C.IK;C.AC0.__proto__=A.Core.P;C.AkT.__proto__=
A.Core.P;C.Rg.__proto__=C.AB;C.AVx.__proto__=C.Rg;C.APo.__proto__=C.BR;C.De.__proto__=
C.EB;C.Ku.__proto__=C.BR;C.APh.__proto__=C.Ku;C.APj.__proto__=C.Ku;C.Yx.__proto__=
C.AmT;C.AgB.__proto__=C.Hk;C.AOd.__proto__=C.GJ;C.AOc.__proto__=C.I_;C.APk.__proto__=
C.Kv;C.Abz.__proto__=C.Acu;C.AjK.__proto__=C.QH;C.ACg.__proto__=C.QH;C.APN.__proto__=
C.De;C.ANl.__proto__=C.Ba;C.R2.__proto__=C.FA;C.AMB.__proto__=C.FA;C.AN7.__proto__=
C.Ej;C.AN8.__proto__=C.Ej;C.APi.__proto__=C.Ku;C.Np.__proto__=C.Ab1;C.AN3.__proto__=
C.Ej;C.APd.__proto__=C.Ku;C.PV.__proto__=C.Cp;C.Sn.__proto__=C.AB;C.AOr.__proto__=
C.Sn;C.AOs.__proto__=C.Sn;C.AOv.__proto__=C.AqT;C.AOo.__proto__=C.FC;C.Aa9.__proto__=
C.IK;C.Ps.__proto__=C.IK;C.AMN.__proto__=C.AmB;C.ARU.__proto__=C.Uf;C.ART.__proto__=
C.Uf;C.ASt.__proto__=C.Mo;C.ASs.__proto__=C.I_;C.APC.__proto__=C.Kv;C.AkQ.__proto__=
C.GJ;C.AUM.__proto__=C.I_;C.Aey.__proto__=C.YC;C.ACl.__proto__=C.Ba;C.ADE.__proto__=
C.De;C.APE.__proto__=C.BR;C.Aba.__proto__=C.NP;C.X2.__proto__=C.NP;C.R5.__proto__=
C.D9;C.X3.__proto__=C.R5;C.X0.__proto__=C.IJ;C.Aa7.__proto__=C.IJ;C.XZ.__proto__=
C.IJ;C.Aa6.__proto__=C.IJ;C.AMK.__proto__=C.AB;C.IJ.__proto__=C.I9;C.I9.__proto__=
C.Hk;C.NP.__proto__=C.FA;C.Axt.__proto__=C.ZH;C.ANR.__proto__=C.AmL;C.Axv.__proto__=
C.ZH;C.AUq.__proto__=C.Cg;C.AUo.__proto__=C.El;C.ARm.__proto__=C.Lk;C.AUp.__proto__=
C.El;C.NewMenu.__proto__=C.AB;C.ASj.__proto__=C.H3;C.AMM.__proto__=C.AmB;C.AM2.__proto__=
C.VG;C.JQ.__proto__=C.I9;C.APG.__proto__=C.YD;C.Aby.__proto__=C.Cn;C.APR.__proto__=
C.EB;C.MotherScanScreen.__proto__=C.Mp;C.APF.__proto__=C.Aq7;C.Jl.__proto__=A.Core.
P;C.APB.__proto__=C.BR;C.SetSaveNaisIdScreen.__proto__=C.Rc;C.AOe.__proto__=C.AqQ;
C.UY.__proto__=C.Cn;C.UZ.__proto__=C.UY;C.AcP.__proto__=C.UY;C.AdY.__proto__=C.AC;
C.AGV.__proto__=C.Eg;C.AN6.__proto__=C.Ej;C.APg.__proto__=C.Ku;C.AN4.__proto__=C.
Ej;C.APe.__proto__=C.Ku;C.Aq9.__proto__=C.T5;C.APM.__proto__=C.T5;C.AqC.__proto__=
C.Nb;C.ANk.__proto__=C.Nb;C.ASc.__proto__=C.AeY;C.YC.__proto__=C.BR;C.Acv.__proto__=
C.BX;C.FM.__proto__=C.AC;C.AMQ.__proto__=C.FM;C.AMR.__proto__=C.FM;C.AMx.__proto__=
C.I_;C.TQ.__proto__=C.BX;C.ASl.__proto__=C.AB;C.AsH.__proto__=C.SetTransponderScreen;
C.AD9.__proto__=C.HN;C.AsI.__proto__=C.O1;C.AxG.__proto__=C.O1;C.Acx.__proto__=C.
Cn;C.AWm.__proto__=C.Mo;C.AWl.__proto__=C.I_;C.ARq.__proto__=A.Core.P;C.ARn.__proto__=
C.HN;C.AC5.__proto__=C.Abz;C.L4.__proto__=A.Core.P;C.AUK.__proto__=C.Cg;C.AUJ.__proto__=
C.Cg;C.AVO.__proto__=C.Cg;C.Afw.__proto__=C.Cn;C.Ji.__proto__=A.acn.Ji;C.AVC.__proto__=
C.AB;C.AUs.__proto__=C.AkQ;C.ADG.__proto__=C.De;C.AM_.__proto__=C.AkQ;C.APa.__proto__=
C.Aey;C.APD.__proto__=C.Aey;C.ACp.__proto__=C.Ba;C.AU3.__proto__=C.SY;C.AU7.__proto__=
C.Rd;C.APA.__proto__=C.BR;C.AR5.__proto__=C.Fr;C.AR4.__proto__=C.Fr;C.AR3.__proto__=
C.Fr;C.AMk.__proto__=C.AmA;C.AR9.__proto__=C.Uj;C.AM8.__proto__=C.OverlayMenu;C.
AEr.__proto__=C.AC;C.AHd.__proto__=C.O4;C.AHA.__proto__=C.Cn;C.AU5.__proto__=C.BX;
C.Wu.__proto__=C.Cn;C.AN2.__proto__=C.Ej;C.APc.__proto__=C.Ku;C.AN5.__proto__=C.
Ej;C.APf.__proto__=C.Ku;C.Mo.__proto__=C.GJ;C.Av2.__proto__=C.VG;C.ADI.__proto__=
C.De;C.ACo.__proto__=C.Ba;C.APH.__proto__=C.AjT;C.AVR.__proto__=C.Cg;C.AVQ.__proto__=
C.Cn;};C._ReInit=function(){var B;if((B=C.AxK._this))B._ReInit(),C.AxK._ReInit.call(
B);if((B=C.AxL._this))B._ReInit(),C.AxL._ReInit.call(B);if((B=C.A7._this))B._ReInit(
),C.A7._ReInit.call(B);if((B=C.Pr._this))B._ReInit(),C.Pr._ReInit.call(B);if((B=
C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Afl._this
))B._ReInit(),C.Afl._ReInit.call(B);if((B=C.BS._this))B._ReInit(),C.BS._ReInit.call(
B);if((B=C.WT._this))B._ReInit(),C.WT._ReInit.call(B);if((B=C.AsJ._this))B._ReInit(
),C.AsJ._ReInit.call(B);if((B=C.An0._this))B._ReInit(),C.An0._ReInit.call(B);if((
B=C.DQ._this))B._ReInit(),C.DQ._ReInit.call(B);if((B=C.Au0._this))B._ReInit(),C.
Au0._ReInit.call(B);if((B=C.Amw._this))B._ReInit(),C.Amw._ReInit.call(B);if((B=C.
Awa._this))B._ReInit(),C.Awa._ReInit.call(B);if((B=C.Awb._this))B._ReInit(),C.Awb.
_ReInit.call(B);if((B=C.Aya._this))B._ReInit(),C.Aya._ReInit.call(B);};C.DI=function(
D){var B;if((B=C.AxK._this)&&(B._cycle!=D))B._Done(C.AxK._this=null);if((B=C.AxL.
_this)&&(B._cycle!=D))B._Done(C.AxL._this=null);if((B=C.A7._this)&&(B._cycle!=D)
)B._Done(C.A7._this=null);if((B=C.Pr._this)&&(B._cycle!=D))B._Done(C.Pr._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.Afl._this)&&(B._cycle!=D))B._Done(C.Afl._this=null);if((B=C.BS._this)&&(B._cycle
!=D))B._Done(C.BS._this=null);if((B=C.WT._this)&&(B._cycle!=D))B._Done(C.WT._this=
null);if((B=C.AsJ._this)&&(B._cycle!=D))B._Done(C.AsJ._this=null);if((B=C.An0._this
)&&(B._cycle!=D))B._Done(C.An0._this=null);if((B=C.DQ._this)&&(B._cycle!=D))B._Done(
C.DQ._this=null);if((B=C.Au0._this)&&(B._cycle!=D))B._Done(C.Au0._this=null);if((
B=C.Amw._this)&&(B._cycle!=D))B._Done(C.Amw._this=null);if((B=C.Awa._this)&&(B._cycle
!=D))B._Done(C.Awa._this=null);if((B=C.Awb._this)&&(B._cycle!=D))B._Done(C.Awb._this=
null);if((B=C.Aya._this)&&(B._cycle!=D))B._Done(C.Aya._this=null);};return C;})(
);

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2025 */