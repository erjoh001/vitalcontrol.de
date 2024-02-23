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
* Version  : 13.00
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.kR)throw new Error("The unit file 'Application.js' included twice!");
index.kR=(function(){var A=index;var C={};
var Ca=[0,0,240,320];var BD=[0,0,240,40];var EW=[0,0,20,30];var Hh=[6,21,14,25];var
I8=[6,15,14,19];var IJ=[6,9,14,13];var OT=[209,7,229,37];var PV=[0,40,240,320];var
PW=[0,228,240,298];var CM=" ";var E4=[0,40,240,280];var Lp=[0,40,232,280];var PX=[
0,40,116,160];var Kq=[114,40,230,160];var N6=[0,160,116,280];var PY=[116,160,232
,280];var MC=[0,280,116,400];var SV=[116,280,232,400];var UE=[0,400,116,520];var
ZD=[116,400,232,520];var WG=[-1,520,115,640];var IK=[232,40,240,280];var UF=[5,40
,235,120];var ZE=[120,140,210,230];var WH=[20,140,110,230];var ZF=[0,0,116,120];
var WI=[0,0,120,120];var ZG=[0,0,116,45];var ZH=[0,0,8,200];var UG=[0,0,8,20];var
WJ=[30,0,210,40];var Q9=[0,0,40,40];var ZI=[7,8,200,40];var OU=[0,0,200,40];var Q_=[
6,1];var WK="ERROR: Invalid value for ItemHighlighting";var WM=[10,10,40,30];var
WN=[0,0,120,40];var WO=[60,0,180,40];var ZJ=[120,0,240,40];var WQ=[0,0,100,40];var
WR=[83,0,157,40];var SW=[140,0,240,40];var ZK=[0,0,20,40];var ZL=[220,0,240,40];
var Acp=[0,0,300,30];var UH=[0,30,300,60];var ZM=[0,60,300,90];var Afb=[0,90,300
,120];var ZN=[0,100,300,110];var WS=[0,50,300,60];var ZO=[0,30,300,40];var ZP="*";
var Afc=[40,40];var JQ=[0,0,240,80];var Acq=[0,0,240,50];var Lq="Cap";var Ahw=[0
,40,40,80];var AnO=[200,40,240,80];var N7=[30,40,210,80];var WT="--";var AnP="%d";
var Ahx="%m";var Ahy="%Y";var Acr=" (";var UI=[0,0,232,80];var AnQ="Date";var AnR=[
48,40,88,78];var AnS=[39,40,79,80];var AnT=[80,44,87,77];var Afd=".";var AnU=[88
,44,120,77];var Afe=[120,44,127,77];var Ash=[127,44,191,77];var OV=[0,0,80,40];var
SX="Text";var Axl=[430,102,430,102];var SY=[0,0,240,240];var Asi=[232,0,240,240];
var Axm=[0,10,240,240];var Axn="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Axo="Unhandled option";
var AnV=[0,80,240,280];var Axp="Unhandled animal list action";var Asj="Animal list content not handled.";
var JR=[0,40,240,80];var Axq="Set Selected";var Acs="Unhandled AnimalListInfoItemMode ";
var Axr=" %%";var AGy=[0,180,240,220];var AGz=[82,127,167,150];var AGA="Group";var
AGB=[77,91,167,124];var Axs=[0,0,90,33];var AUT=[4,4,18,29];var AUU=[20,4,34,29];
var AUV=[36,4,50,29];var AUW=[52,4,66,29];var AUX=[68,4,82,29];var Ask="ERROR: Unhandled Device::SyncState";
var Axt=":\n";var PZ="{1}";var Axu="{2}";var AUY=[0,49,240,109];var AUZ=[0,170,240
,243];var AU0=[0,110,240,170];var AU1=[20,243,220,268];var AGC=[30,8];var AGD="\u2265 ";
var Aff=[0,0,240,160];var AnW=[0,0,0,0];var AU2=[0,0,240,66];var AGE=[10,0,76,66
];var AkN=[33,33];var AGF=[87,0,153,66];var AGG=[164,0,230,66];var AGH="No statistics available";
var AU3="in this environment.";var AU4=" fps";var AU5="CPU: - %%";var Act=[0,0,240
,120];var AGI=[130,0,237,20];var Asl=[20,0,120,20];var AGJ=[0,20,240,40];var AGK=[
40,20,100,40];var Axv=[100,20,240,40];var AGL=[0,40,240,60];var Axw=[40,40,100,60
];var AU6=[100,40,240,60];var AU7=[0,60,50,80];var AU8=[100,60,240,80];var AU9=[
0,80,50,100];var AGM=[100,80,240,100];var AU_=[0,100,50,120];var OW=[100,100,240
,120];var Axx=[5,5,15,15];var AU$="%H";var AVa="%M";var AVb="Time";var AVc=[79,40
,119,78];var AVd=[125,40,164,80];var AVe=[86,40,126,80];var AVf=":";var AGN=[75,
40,115,80];var AnX=[0,0,240,150];var Axy=[60,0,155,40];var AGO=[30,0,65,40];var AVg=[
60,0,100,40];var AVh=[88,0,128,40];var AVi=[60,0,71,40];var AVj=[60,0,74,40];var
AGP=[90,0,123,40];var AVk=[120,0,161,40];var AGQ=[120,0,165,40];var AGR=[60,0,88
,40];var AGS=[60,0,95,40];var AVl="Did not expect iterator bigger than number of records";
var Axz=[20,0,240,20];var AVm=[0,38,240,40];var AVn=[0,0,8,4];var Q$=[0,0,240,280
];var WU=[0,280,240,320];var AVo="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AVp="]";var AVq="ERROR: Cannot find closing bracket \'}\' in text [";var AVr=
"] opened at index ";var AVs="#";var AVt="ERROR: Invalid parameter: {";var AVu="}";
var Ahz=[20,20];var AGT=[0,12];var AVv="ERROR: Not expected Application::FooterFocus, ";
var AVw="%M:%S";var AGU=[30,150,207,170];var AGV=[20,70,217,194];var AxA="Unhandled item.";
var P0=[0,80,240,120];var AVx="Unhandled Overlay Menu ";var AVy="Invalid bootloader message: ";
var AVz="Unknown USBState: ";var Asm="Invalid fader";var AVA=[2,4,32,40];var AVB=[
29,4,80,40];var AVC=[120,4,200,40];var AVD=[80,0,114,40];var AVE="-1";var AVF="< ";
var Asn=[0,0,232,40];var AVG=[22,40,180,80];var AVH=[2,40,22,80];var AVI=[23,40,
163,80];var AVJ=[210,40,230,80];var AVK=[164,40,210,80];var AVL=[169,43,205,77];
var AVM="ERROR: No outlet assigned";var AVN="Unhandled screen";var AVO="ERROR: Cannot cache null screen.";
var AVP="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AGW="Untreated Rating Method type!";var Aso="Unhandled animal type";var AVQ=[
5,60,235,140];var AVR=[0,130,240,196];var AVS=[49,240,229,280];var AxB="Implement in derived classes!";
var AkO="Implement in derived class";var AhA=[0,40,230,120];var AxC=[0,120,230,200
];var AnY=[0,200,230,280];var AhB=[0,280,230,360];var AVT=[0,360,230,440];var AxD=[
230,40,238,280];var AGX="WARNING: Unhandled filter field: ";var Afg="Should not happen.";
var AGY="Invalid Boolean item";var ZQ=[0,120,240,160];var AkP=[0,160,240,200];var
AnZ=[0,200,240,240];var AVU=[1152,11,1392,51];var AVV=[1152,51,1392,91];var AVW=[
1152,91,1392,131];var AVX=[1152,131,1392,171];var AVY=[1152,171,1392,211];var Asp=[
0,240,240,280];var AGZ=[10,0,240,40];var AG0=[190,0,230,40];var AVZ=[60,3,95,39];
var AV0=[95,4,200,40];var AV1=[3,3];var AV2=[6,6];var AV3=[0,4,40,40];var AV4=[39
,5,197,35];var AG1=[40,0,200,40];var AV5="Illegal shifting direction";var AxE=[0
,0,160,30];var AG2=[0,0,25,30];var AG3=[27,0,52,30];var AG4=[54,0,79,30];var AG5=[
81,0,106,30];var AG6=[108,0,133,30];var AG7=[135,0,160,30];var AV6="Internal queue error";
var AV7="ERROR: No corresponding Id ";var AV8=" found.";var AV9="ERROR: Error in range test";
var AV_=[120,67,210,157];var AV$=[0,40,240,70];var AWa=[20,67,110,157];var AxF=[
0,160,240,280];var AG8=[20,77,90,147];var AWb=[0,0,210,40];var AG9=[195,0,235,40
];var AhC=[0,40,232,120];var WV=[0,120,232,200];var AWc=[0,40,232,200];var ZR=[0
,200,232,280];var AWd=[0,320,240,400];var AWe=[0,120,53,200];var An0=[0,280,232,
360];var Afh="%%";var AkQ=[0,360,232,440];var AG_=[0,440,232,520];var AWf=[0,80,
207,120];var OX=")";var AWg="/";var AWh=[5,0,88,30];var AWi=[88,0,240,30];var AWj=
"276000312345678";var AG$=[5,30,100,60];var AHa=[100,30,240,60];var AWk="Manufacturer";
var AxG="Country";var AxH=[5,60,240,90];var AWl="Niedersachsen";var AWm=[5,90,145
,120];var AHb=[140,90,240,120];var AHc="Protocol";var AWn=[0,0,120,100];var AxI=[
0,40,116,120];var AWo=[40,80,92,107];var AHd=[0,0,50,23];var AHe="ERROR: Unhandled Device::MeasureState";
var AxJ=[0,120,240,280];var AWp=[178,159,248,203];var AWq=[10,145,170,225];var AWr=[
0,61,240,101];var AWs=[0,0,40,23];var AWt=[101,113,141,136];var AWu=[101,235,141
,258];var AWv=[69,288,101,313];var AWw=[0,40,240,200];var Asq=[0,200,240,280];var
Asr=[0,280,240,360];var AHf="\u2264 ";var AWx=[0,80,94,160];var AWy=[94,80,184,160
];var AWz=[184,80,240,160];var AWA=[197,105,231,139];var AWB=[105,101,173,127];var
AHg=[7,101,75,127];var AWC=[94,125,184,151];var AWD=[2,125,92,151];var AWE=[0,70
,240,101];var AWF=[0,106,240,280];var AWG=[30,40,240,70];var AWH=[0,40,30,70];var
AWI="\u278B";var AWJ=[0,0,240,175];var AWK=[0,0,232,175];var AWL=[232,0,240,175];
var AWM="Text Here !";var AWN=[200,0,240,40];var AHh="1";var AHi="2";var AxK="3";
var AHj="4";var An1=[0,360,232,400];var Ass="ERROR: invalid item class.";var AHk=[
10,220,250,260];var AWO=[185,0,225,40];var AHl="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AWP="ERROR: Received more actions than expected!";var AHm=", ";var AWQ=
"ERROR: Cannot set action at position=";var AWR=". Current elements:";var AWS=", max elements:";
var AWT="17";var AWU=[0,0,58,58];var AWV=[0,0,60,60];var AWW=[30,0,58,20];var AWX=[
7,6,25,24];var AWY=[30,60,130,160];var AWZ=[0,0,28,20];var AW0=[4,3,40,24];var AW1=[
0,0,42,27];var AxL=[0,0,17,17];var AW2="Unknown direction of counting enum value: ";
var AW3="Unknown id generation method enum value: ";var AxM="Invalid animal id generation method: ";
var Ast="Unhandled popup id";var ZS="0";var Asu=";";var AW4=[0,400,230,480];var AW5=[
5,120,235,200];var AW6=[0,640,230,760];var AHn=[0,0,300,200];var AW7=[20,40,220,
80];var AHo=[20,80,220,280];var AW8=[140,0,188,40];var AW9="ERROR: Row containing birth weight could not be loaded";
var AW_=[0,440,230,520];var Asv="ID";var AW$=[40,40,198,70];var AXa="Extra info: ";
var AHp=" -";var AXb=[0,0,230,120];var AXc=[0,0,230,40];var AXd=[0,80,230,120];var
AXe="\xB0Brix";var Acu=[0,320,230,400];var AXf=[0,410,230,490];var AXg="ERROR: aNumberOfDays can not be < 0 ";
var AXh="{WEIGHTGAIN} ";var AXi="\xB1";var AHq="+";var AXj="{WEIGHTGAIN}";var AXk=
"{DAYS}";var AXl="ERROR: aString can not be null";var AXm=[166,70,240,114];var AXn=[
0,60,160,120];var AXo=[30,0,240,60];var AHr=[1,6,29,54];var AXp=[30,60,240,120];
var AXq="Con";var AXr=[70,50,170,70];var AHs="Unhandled Device::NaisIdValidationResult: ";
var AHt="Unhandled PopupId";var AXs=[110,123,230,248];var AXt=[5,0,250,40];var AXu=[
102,0,186,40];var AXv=[153,0,240,40];var Ra="-";var Asw=[170,0,240,40];var AHu=[
220,0,320,30];var AHv=[200,20,300,50];var An2=[180,0,180,40];var An3=[170,0,170,
40];var AxN="Untreated state";var AXw="ERROR: Animal id scanned in an unexpected state : ";
var AHw="ERROR: Null animal id scanned.";var AXx=[40,40,235,100];var AXy=[120,100
,210,190];var AXz=[20,100,110,190];var AXA=[0,40,40,100];var AXB="\u278A";var AXC=
"Action untreated";var AXD="ERROR: No corresponding ";var AXE=" action found!";var
AXF="Unhandled action: ";var AXG=[0,190,240,220];var AXH=[0,220,232,280];var AXI=[
5,190,235,270];var AXJ=[232,60];var AXK=[0,2];var AXL=[58,58];var AXM="A";var AXN=[
56,0,156,40];var An4=[156,0,240,40];var AHx=" 7 ";var AXO=[40,0,156,40];var AHy=
"/-1/-2";var AHz=[72,0,144,40];var ZT="\n";var AHA="(";var AXP=[72,0,156,40];var
AHB="%y/%m";var AXQ=[70,0,240,40];var AxO=[70,0,120,40];var AXR=[160,0,245,40];var
AXS="- ";var AxP=" - ";var AXT="{parc}{clr3}";var AXU="{clr0}/^{clr2}";var AXV="{clr0}/^{clr1}";
var AHC=[0,0,85,40];var An5="?";var AHD=[0,0,120,140];var AXW=[0,0,116,40];var AHE=[
15,0,100,40];var AHF=[110,0,200,40];var AkR=[0,0,34,34];var AXX=[129,0,157,40];var
An6=[0,0,25,25];var AXY="\u2611";var AHG="\u2610";var AHH=[5,0,72,40];var AXZ=[150
,0,240,40];var AX0=[72,0,139,40];var AHI="Unvalid content class: ";var AX1=[0,320
,240,360];var AHJ=[0,360,240,400];var AX2=[144,0,170,40];var AHK=[187,0,213,40];
var AX3=[207,10,233,50];var AX4=[247,20,273,60];var AX5=[140,0,150,100];var AX6=[
165,0,175,100];var AX7=[185,0,195,100];var AX8=[205,0,215,100];var AX9=[211,0,233
,40];var AX_=[189,0,211,40];var AX$=[167,0,189,40];var AYa=[145,0,167,40];var AHL=[
5,0,240,40];var ZU=[10,0,10,40];var AYb="= \u2211 ";var AxQ=[125,0,240,40];var AYc=[
130,0,170,40];var AYd="\xD8 ";var AYe=[100,10,116,36];var An7=[117,10,133,36];var
AYf=[135,10,151,36];var AYg="Implement in derieved class";var Asx=[0,80,240,240];
var Asy=[0,120,232,160];var Asz=[0,160,232,200];var AsA=[0,200,232,240];var AxR=[
0,240,232,280];var An8=[0,320,232,360];var AHM=[-61,360,232,400];var AsB=[0,100];
var AYh=[0,40,240,240];var AYi=[0,50000];var AYj=[0,500];var AYk=[0,0,240,105];var
AYl=[0,105,240,210];var AYm=[0,40,240,81];var AYn=[0,81,240,122];var AYo=[0,122,
240,163];var AYp=[0,163,240,205];var AYq=[0,205,240,240];var AYr=[0,200];var AYs=[
0,40,240,73];var AxS=[0,0,30,40];var AYt=[0,40,30,80];var AxT=[60,40];var AxU=[60
,0];var AYu=[10,0,40,40];var AHN=[0,190,240,260];var AYv=[0,130,240,190];var AxV=[
40,40,200,130];var AYw=[90,230,170,253];var AYx=[80,190,170,223];var AHO=[0,130,
240,180];var AYy=[0,250,240,280];var AYz=[129,0,156,40];var AYA=[72,0,100,40];var
AYB=[100,0,129,40];var AYC=[78,8,103,33];var AHP=[0,0,300,120];var AYD=[1,-1];var
AYE=[20,40,240,120];var AYF=[20,0,240,40];var AYG=[0,118,240,120];var AYH=[0,20,
130,40];var AYI=[130,20,240,40];var AYJ=[0,0,10,20];var AHQ="\u2191";var AYK=[230
,0,240,20];var AsC=[0,40,232,80];var AYL=[0,80,232,160];var AYM=[0,160,230,240];
var AsD=" p. p.";var AxW="Unknown animal type";var AsE=[80,0,140,40];var Bo1=[50
,0,172,40];var Bo2=[172,0,240,40];var Bo3=[0,90,240,92];var A_Q="Unhandled menu item";
var A_R=[0,0,50,30];var AsF=[0,0,30,30];var Bo4="No AnimalActionTemperatureScreen found!";
var Bo5="840003123456789";var Bo6=[40,0,230,40];var Bo7=[50,10,230,30];var AYN="No AnimalMultiInfoScreen found!";
var AHR=[0,0,25,40];var A_S="/^";var A_T="?/?";var Bo8=[100,4,180,40];var Bo9=[65
,0,99,40];var Bo_=[165,0,200,40];var A_U=[0,0,60,40];var A_V="9999/^9999";var Bo$=
"Invalid index: ";var Bpa="Unknown AnimalIdGenerationMethod: ";var Bpb="Invalid gender: ";
var AsG="Invalid input state: ";var Bpc="Unhandled AnimalIdGenerationMethod";var
Bpd=[42,35,67,75];var Bpe=[5,35,39,75];var Bpf=[70,40,228,70];var Bpg="Invalid direction for setting focus";
var AhD="Invalid index";var Bph="Unvalid direction";var Bpi=[0,0,42,30];var A_W=[
22,0,42,30];var Bpj=[20,0,40,30];var Bpk=[0,0,158,30];var A_X=[32,0,62,30];var A_Y=[
64,0,94,30];var A_Z=[96,0,126,30];var Bpl=[128,0,158,30];var Bpm=" %% ";var Bpn=[
0,70,240,220];var Bpo=[0,237,240,307];var A_0="\n44 %% done";var Bpp=[0,0,166,30
];var AHS=[0,0,12,30];var AxX=[14,0,26,30];var AYO=[28,0,40,30];var AYP=[42,0,54
,30];var AYQ=[56,0,68,30];var AYR=[70,0,82,30];var AYS=[84,0,96,30];var AYT=[98,
0,110,30];var A_1=[112,0,124,30];var AYU=[126,0,138,30];var Bpq=[140,0,152,30];var
Bpr=[154,0,166,30];var A_2=[20,0,46,30];var Bps="\u2642";var Bpt="{fnt3}\u2642{fnt1}";
var Bpu="\u2640";var Bpv="{fnt3}\u2640{fnt1}";var Bpw="{parc}";var Bpx=[30,30,210
,80];var Bpy="Implement in derieved class!";var Bpz=[60,4,226,34];var A_3=[30,4,
58,34];var A_4=[4,0,27,40];var BpA=[116,4,228,34];var BpB=[60,4,86,34];var BpC=[
88,4,114,34];var An9="Implement in derived class!";var A_5="Implement in derived class.";
var BpD="Invalid nais id view: ";var BpE=[0,35,240,75];var BpF=[0,0,110,30];var BpG=[
0,0,26,30];var BpH="100";var AYV="\n\n";var BpI=[240,240];var BpJ=[0,240];var BpK=
"Unknown rated attribute: ";var BpL=[120,80,240,280];var BpM=[0,80,120,280];var AHT=
" %% (";var AxY=" \xB1 ";var AxZ=" (n = ";var AYW=[0,80,232,120];var BpN=[0,242,
232,282];var AYX=[0,280,232,320];var BpO=[35,0,200,40];var BpP=[1,0,31,40];var BpQ=[
32,40];var BpR=[32,0];var BpS=[3,0,83,40];var A_6=[180,0,240,40];var BpT=[120,0,
180,40];var BpU=[65,0,125,40];var BpV=[0,0,120,200];var BpW=[0,40,120,150];var A_7=[
15,160,60,190];var A_8=[60,160,105,190];var BpX=[0,65,240,135];var BpY=[10,112,170
,192];var BpZ=[178,129,248,173];var Bp0=[0,40,240,110];var Bp1=[10,98,170,178];var
Bp2=[178,112,248,156];var Bp3=[85,190,160,265];var Bp4=[89,194,155,260];var Bp5=[
26,190,111,250];var Bp6=[125,181,225,211];var Bp7=[100,220,183,250];var Bp8="38.7";
var Bp9=[180,220,225,250];var Bp_="\xB0C";var Bp$=[0,99,240,178];var Bqa=[100,280
,140,320];var Bqb=[0,26,240,105];var A_9=[30,40];var A__=[30,0];var Bqc=[149,0,200
,40];var Bqd=[145,40];var Bqe=[145,0];var Bqf=[38,0,88,40];var A_$=[0,0,35,40];var
Bqg=[0,0,50,40];var Bqh=[95,0,145,40];var Bqi=[65,5,223,35];var AYY=[0,0,15,40];
var Bqj=[72,0,140,40];var A$a="\n(";var Bqk="%y/%m/%d";var Bql="%y ";var Bqm=" %m ";
var Bqn=" %d ";var Bqo="20";var Bqp=[225,0,240,40];var Bqq=[0,400,232,440];var Bqr=[
0,440,232,480];var Bqs=[0,480,232,520];var Bqt=[0,520,232,560];var Bqu=[0,560,232
,600];var Bqv=[0,598,232,638];var Bqw=[5,0,215,40];var Bqx=[215,8,240,33];var Bqy=
"Implement in dervied class.";var Bqz="ERROR: Unhandled temperature unit: ";var AHU=
"ERROR: Unhandled mass unit: ";var BqA=[-1,160,115,280];var BqB=[114,160,230,280
];var AYZ=[116,40,232,160];var Ax0="Unknown weight class index: ";var BqC="< 35";
var BqD="35 - 40";var BqE="40 - 45";var BqF="45 - 50";var BqG="\u2265 50";var BqH=
"< 80";var BqI="80 - 90";var BqJ="90 - 100";var BqK="100 - 110";var BqL="\u2265 110";
var A$b="Unknown mass unit";var BqM=[143,0,193,40];var A$c=[192,0,240,40];var BqN=[
44,28,44,28];var BqO="0 %%";var BqP=[-1,40,115,160];var BqQ=[117,40,233,160];var
BqR=[1,160,117,280];var BqS=[114,158,230,278];var BqT=[1,280,117,400];var BqU=[30
,0,155,40];var A$d="\u2620";var A$e=[380,150,380,190];var A$f=[105,0,155,50];var
A$g=[190,1,240,41];var BqV=[72,0,108,40];var BqW=[108,0,180,40];var BqX=[60,0,94
,40];var BqY=[94,0,200,40];var BqZ="Scroll direction not supported.";var Bq0=[44
,0,207,40];var Bq1=[207,0,240,40];var Bq2="99";var Bq3="Unknown birth type";var Bq4=[
44,0,189,40];var Bq5=[5,0,44,40];var Bq6=[44,0,240,40];var Bq7=[240,0,240,40];var
Bq8="\u25C9";var A$h="\u25CB";var Bq9=[75,4,215,34];var Bq_=[47,4,73,34];var A$i=[
17,4,45,34];var Bq$=[0,0,138,30];var Bra=[47,4,215,34];var AY0="Unhandled MotherSelectionFilterMode: ";
var Brb="Read only!";var Brc="actions array too small to hold all actions";var Brd=[
120,40];var Bre=[120,0];var Brf=[5,0,115,40];var Brg=[0,0,205,40];var Brh=[0,1,37
,37];var Bri=[40,4,170,34];var Brj=[175,1,205,37];var Brk=[0,0,37,40];var Brl=[115
,98,205,188];var Brm=[0,40,235,100];var Brn=[2,200,240,280];var Bro=" 01234";var
Brp=[0,0];var Brq=[33,63];var Brr=[25,56];var Brs="Unknown transponder image type: ";
var AHV=[0,0,82,82];var Brt=[0,0,81,26];var Bru=[105,120,195,210];var Brv=[10,140
,100,230];var A$j="Unhandled EartagNrAssignmentMode: ";var Brw="Unhandled Gender";
var Brx=[10,35,35,75];var Bry=[44,40,202,70];var Brz=[204,35,232,75];var BrA="Unvalid FatoryResetScope";
var A$k=[0,120,240,200];var BrB=[144,0,192,40];var BrC=[144,0,240,40];var BrD=[195
,0,245,50];var BrE=[120,0,120,40];var BrF=[140,0,240,30];var BrG=[30,0,232,40];var
BrH=[60,0,160,40];var BrI=[160,0,200,40];var BrJ=[150,17,200,40];var BrK=[155,40
];var BrL=[155,0];var BrM=[146,80,240,160];var BrN=[56,80,146,160];var BrO=[0,80
,56,160];var BrP=[13,107,47,141];var BrQ=[74,109,104,139];var BrR=[50,100,130,150
];var BrS=[55,112,145,140];var BrT=[146,112,236,140];var BrU=[150,86,223,110];var
AHW=[0,40,240,120];var BrV="Menu item for animal table field not found";var A$l=[
0,360,240,440];var BrW=[0,440,240,520];var BrX=[5,40,235,104];var BrY=[120,108,226
,218];var BrZ=[20,120,110,210];var Br0=[5,223,235,280];var Br1=[0,0,64,30];var Br2=[
44,0,64,30];var Br3=[185,5,225,35];var Br4=[170,5,234,35];var Br5="Unhandled number of digits";
var Br6=[0,0,126,30];var Br7=[22,5,149,35];var Br8=[149,0,232,40];var A$m=[5,20];
var Br9=[5,0];var Br_="Unhandled AnimalIdAutoGenerationMethod: ";var Br$=[4,440,
236,520];var Bsa="Unhandled TransponderAssignmentIdChangeMethod: ";var Bsb="\n";
var Bsc="%";var Bsd=[0,0,160,120];var Bse=[2,2,157,117];var Bsf=[50,70];var Bsg=[
50,50];var Bsh="Unhandled data export destination ";var Bsi=[0,0,168,40];var Bsj=[
168,0,240,40];var Bsk=[0,47,232,77];var Bsl=[121,17,171,40];var A$n=[0,40,230,280
];var Bsm="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var Bsn="ERROR: Received more animal table fields than expected!";
var Bso=[0,80,240,130];var Bsp=[0,80,240,200];var A$o="Unhandled BackupError: ";
var Bsq="Unhandled PopupId: ";
C.ALU={Device:null,A4Z:null,Gz:null,Init:function(aArg){},DriveCursorHitting:function(
S0,BF,E6){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.Gz._Init.call(this.
Gz={I:this},0);this.__proto__=C.ALU;this.H(Ca);this.J(this.Gz,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A4Z=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lr=
this._variants();if(Lr){this.K={};Lr._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.Gz._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.Gz.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A4Z)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gz)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acp.A3W._variants();
},K:null,_className:"Application::Application"};C.ArU=[240,320];C.AB={Background:
null,Ec:null,ACr:null,AnF:0,Init:function(aArg){A.pe([this,this.AZy],this);A.pe([
this,this.Bdm],this);},LI:function(G){},AZy:function(s){this.LI(s);},Cx:function(
G){},AHY:function(s){this.Cx(s);},EV:function(G){},Ax1:function(s){this.EV(s);},
Dl:function(E){if(this.ACr===E)return;this.ACr=E;A.pe([this,this.Bdm],this);},Bdm:
function(G){var B;if(!!this.ACr)this.Ec.AbI((C.BQ.isPrototypeOf(B=A._NewObject(this.
ACr,0))?B:null));else this.Ec.AbI(null);},_Init:function(aArg){C.AaU._Init.call(
this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);C.Ec._Init.call(this.
Ec={I:this},0);this.__proto__=C.AB;this.Background.AX(0x3F);this.Background.H(Ca
);this.Background.L(A.jb.C1);this.Ec.H(BD);this.Ec.Ar(false);this.J(this.Background
,-1);this.J(this.Ec,0);this.Init(aArg);},_Done:function(){this.__proto__=C.AaU;this.
Background._Done();this.Ec._Done();C.AaU._Done.call(this);},_ReInit:function(){C.
AaU._ReInit.call(this);this.Background._ReInit();this.Ec._ReInit();},_Mark:function(
D){var B;C.AaU._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.Wo={KA:null,Y4:function(E){var B;if(this.KA===E)return;if(!!this.KA)this.Ap9(
this.KA,null,null,null,[B=this.KA,B.Ax1],null,false);this.KA=E;if(!!this.KA)this.
Akn(this.KA,null,null,null,null,null,null,[B=this.KA,B.AHY],null,false);},ADK:function(
){return this.KA;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Wo;this.H([0,0,C.ArU[0],C.ArU[1]]);},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.KA)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Os={UN:null,Q:null,Ank:null,Za:null,NJ:null,Oq:null,Tt:null,Tu:null,AFq:255,
L6:function(G){var F;if(!!this.Q){this.A03();var AcO=(F=this.Q,F[1].call(F[0]));
if(AcO>20)this.Oq.L(A.jb.ET);else this.Oq.L(A.jb.FZ);this.Oq.L((this.Oq.AQ&0x00FFFFFF
)|(this.Alg(AcO,0,30)<<24));this.Tt.L((this.Tt.AQ&0x00FFFFFF)|(this.Alg(AcO,31,60
)<<24));this.Tu.L((this.Tu.AQ&0x00FFFFFF)|(this.Alg(AcO,61,100)<<24));}},AZw:function(
s){this.L6(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AZw],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AZw],E,0);if(!!E)A.pe([this,
this.AZw],this);},A2c:function(G){var F;if(!!this.Ank)this.Za.Ar((F=this.Ank,F[1
].call(F[0])));else this.Za.Ar(false);this.A88(255);},A81:function(E){if(A.aaZ(this.
Ank,E))return;if(!!this.Ank)A.z$([this,this.A2c],this.Ank,0);this.Ank=E;if(!!E)A.
zX([this,this.A2c],E,0);if(!!E)A.pe([this,this.A2c],this);},A88:function(E){if(this.
AFq===E)return;this.AFq=E;if(!!this.UN)this.UN.L((this.UN.AQ&0x00FFFFFF)|((E&0xFF
)<<24));},Alg:function(AZC,BaG,Bvx){if(AZC<BaG)return 0;else if((AZC>=BaG)&&(AZC<
Bvx))return this.AFq&0xFF;else return 255;},A03:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.UN=this.Tu;else if((F=this.Q,F[1].call(F[0]))>
30)this.UN=this.Tt;else this.UN=this.Oq;}else this.UN=null;},Bjt:function(){return this.
AFq;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.Za._Init.call(this.Za={
I:this},0);A.acg.An._Init.call(this.NJ={I:this},0);A.acg.AJ._Init.call(this.Oq={
I:this},0);A.acg.AJ._Init.call(this.Tt={I:this},0);A.acg.AJ._Init.call(this.Tu={
I:this},0);this.__proto__=C.Os;this.H(EW);this.Za.Fe(2000);this.NJ.H(EW);this.NJ.
L(A.jb.Text);this.Oq.H(Hh);this.Oq.L(A.jb.ET);this.Tt.H(I8);this.Tt.L(A.jb.ET);this.
Tu.H(IJ);this.Tu.L(A.jb.ET);this.J(this.NJ,0);this.J(this.Oq,0);this.J(this.Tt,0
);this.J(this.Tu,0);this.Za.Q=[this,this.Bjt,this.A88];this.NJ.Ay(A.aaL(A.ach.AL5
));},_Done:function(){this.__proto__=A.Core.O;this.Za._Done();this.NJ._Done();this.
Oq._Done();this.Tt._Done();this.Tu._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Za._ReInit();this.NJ._ReInit();this.Oq._ReInit(
);this.Tt._ReInit();this.Tu._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.UN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ank)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Za)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Oq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tt
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tu)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Za={_Init:function(aArg){A.acl.Ga._Init.call(
this,aArg);this.__proto__=C.Za;this.Aky=true;this.B0=0;this.Cs=255;},_className:
"Application::PulseAnimation"};C.Ec={Gz:null,AN:null,Background:null,Os:null,Bl:
null,Dg:null,K1:0,AuL:0,AuM:0,Aoy:0,LA:false,Kx:false,Qh:false,Ai:function(Ae){var
B;A.Core.O.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20);
var Gt=this.Bl.Bv;if(!G6){this.Aoy=A.jb.C1;this.K1=A.jb.Text;}else if(Gt){this.Aoy=
this.AuL;this.K1=this.AuM;}else if(Fh){this.Aoy=this.AuL;this.K1=this.AuM;}else{
this.Aoy=A.jb.C1;this.K1=A.jb.Text;}this.Background.L(this.Aoy);if(!!this.Gz){this.
Gz.AbG(this.Aoy);this.Gz.C9(this.K1);}this.LA=G6;this.Kx=Fh;this.Qh=Gt;},Qg:function(
G){this.Am();A.pe(this.AN,this);},Ais:function(G){if(this.Dg.AbY)return;this.Am(
);if(this.Bl.Bv){A.pe(this.AN,this);this.Bl.Ar(false);}this.Bl.Ar(true);},AbI:function(
E){if(this.Gz===E)return;if(!!this.Gz)this.HI(this.Gz);this.Gz=E;if(!!this.Gz)this.
J(this.Gz,0);this.A8(E);this.Am();},A8K:function(E){if(this.AuL===E)return;this.
AuL=E;this.Am();},A8L:function(E){if(this.AuM===E)return;this.AuM=E;this.Am();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={
I:this},0);C.Os._Init.call(this.Os={I:this},0);A.Core.Timer._Init.call(this.Bl={
I:this},0);A.Core.BK._Init.call(this.Dg={I:this},0);this.__proto__=C.Ec;var B;this.
H(BD);this.Background.AX(0x3F);this.Background.H(BD);this.Background.L(A.jb.C1);
this.Os.H(OT);this.K1=A.jb.Text;this.Bl.PJ(0);this.Bl.Wf(50);this.Dg.Filter=1;this.
AuL=A.jb.AR;this.AuM=A.jb.Bi;this.Aoy=A.jb.Text;this.J(this.Background,0);this.J(
this.Os,0);this.Os.At([B=A._GetAutoObject(A.Device.Device),B.Avu,B.Ax2]);this.Os.
A81([B=A._GetAutoObject(A.Device.Device),B.Avx,B.Ax3]);this.Bl.Mt=[this,this.Qg];
this.Dg.BL=[this,this.Ais];},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Os._Done();this.Bl._Done();this.Dg._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.
Os._ReInit();this.Bl._ReInit();this.Dg._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Gz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Os)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bl)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.XI={Aek:null,Un:null,Cx:function(G){if(this.K&&this.K.Cx
)return this.K.Cx.apply(this,arguments);else return C.AB.Cx.apply(this,arguments
);},EV:function(G){if(this.K&&this.K.EV)return this.K.EV.apply(this,arguments);else
return C.AB.EV.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.An._Init.call(this.Aek={I:this},0);A.acg.Text._Init.call(this.Un={I:
this},0);this.__proto__=C.XI;this.Aek.H(PV);this.Un.H(PW);this.Un.R(A.jV);this.Un.
L(A.jb.Text);this.Un.Y(false);this.J(this.Aek,0);this.J(this.Un,0);this.Aek.Ay(null
);this.Un.S(A.aaL(A.fl.EA));var Lr=this._variants();if(Lr){this.K={};Lr._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.Aek._Done();this.Un._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.Aek._ReInit();this.Un._ReInit();this.Un.S(A.aaL(A.fl.
EA));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Aek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Un)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.
XI._variants();},K:null,_className:"Application::BootScreen"};C.ATQ={AzW:function(
G){A._GetAutoObject(C.AW).Ag9(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.ATQ;this.Background.L(0xFF000000);this.Ec.Y(false);},_className:
"Application::SleepScreen"};C.AuY={DP:null,Z:null,XU:null,XV:null,Vl:null,XL:null
,Vm:null,XJ:null,XO:null,Ty:null,XN:null,XW:null,Aw:null,CU:function(){this.DC(this
);},Init:function(aArg){var B;A.zX([this,this.DC],[B=A._GetAutoObject(A.Device.Device
),B.AqW,B.AsH],0);A._GetAutoObject(A.Device.Helper).Akq();this.A8(this.Vl);this.
N.Cn(A.aaL(A.ach.ACW));A.pe([this,this.DC],this);},A8:function(E){var B;var A1N=
this.AR;C.AB.A8.call(this,E);if((this.AR!==A1N)&&(!!this.AR&&((this.AR.T&0x400)===
0x400))){var AJa=A._NewObject(A.acl.AFn,0);AJa.Fe(250);AJa.HG(1);AJa.Wj(6);this.
Z.Hy(this.AR,true,AJa,null);}},Cx:function(G){this.A3g(this);A._GetAutoObject(A.
Device.Device).Ap.Bh(null);A._GetAutoObject(A.Device.Device).Br.Bh(null);A._GetAutoObject(
A.Device.Helper).Akq();A._GetAutoObject(A.Device.Helper).ArO();},E9:function(G){
var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.
Aw.Mr(-this.Z.Bq[1]);},Ia:function(G){var Ct=(C.Fc.isPrototypeOf(G)?G:null);if(!
Ct)return;if(Ct===this.Vl)A._GetAutoObject(C.AW).BS(35);else if(Ct===this.XL)A._GetAutoObject(
C.AW).BS(34);else if(Ct===this.XO)A._GetAutoObject(C.AW).BS(78);else if(Ct===this.
Vm)A._GetAutoObject(C.AW).BS(8);else if(Ct===this.XJ)A._GetAutoObject(C.AW).BS(56
);else if(Ct===this.Ty)A._GetAutoObject(C.AW).BS(25);else if(Ct===this.XU)A._GetAutoObject(
C.AW).BS(88);else if(Ct===this.XV)A._GetAutoObject(C.AW).BS(79);else if(Ct===this.
XW)A._GetAutoObject(C.AW).BS(6);else if(Ct===this.XN)A._GetAutoObject(C.AW).BS(72
);},ByE:function(G){A._GetAutoObject(A.Device.Device).Aey(!A._GetAutoObject(A.Device.
Device).Amp);},DC:function(G){if(A._GetAutoObject(A.Device.Device).Amp)this.N.Ho((
A.aaR(A.acf.A6s)+CM)+A.aaR(A.acf.Off).toLowerCase());else this.N.Ho((A.aaR(A.acf.
A6s)+CM)+A.aaR(A.acf.A6_).toLowerCase());},Xj:function(G){A._GetAutoObject(A.Device.
Device).Cd(1);},A3g:function(G){A._GetAutoObject(A.Device.Device).Ap.Bh(A._GetAutoObject(
A.Device.Helper).Mk());this.Vm.Y9(A._GetAutoObject(A.Device.Device).Ap.Cb().toFixed(
));},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AJ._Init.call(this.DP={I:this},0);A.Core.Z._Init.call(this.
Z={I:this},0);C.Fc._Init.call(this.XU={I:this},0);C.Fc._Init.call(this.XV={I:this
},0);C.Fc._Init.call(this.Vl={I:this},0);C.Fc._Init.call(this.XL={I:this},0);C.QJ.
_Init.call(this.Vm={I:this},0);C.Fc._Init.call(this.XJ={I:this},0);C.Fc._Init.call(
this.XO={I:this},0);C.Fc._Init.call(this.Ty={I:this},0);C.Fc._Init.call(this.XN={
I:this},0);C.Fc._Init.call(this.XW={I:this},0);C.Aw._Init.call(this.Aw={I:this},
0);this.__proto__=C.AuY;this.Background.L(A.jb.C1);this.N.Ar(false);this.N.Y(true
);this.Dl(C.Aqp);this.DP.AX(0x3F);this.DP.H(E4);this.DP.L(A.jb.CG);this.Z.H(Lp);
this.Z.Kd(9);this.XU.H(PX);this.XU.Aj(true);this.XU.U(A.aaR(A.acf.Gf));this.XV.H(
Kq);this.XV.Aj(true);this.XV.U(A.aaR(A.acf.A6P));this.Vl.H(N6);this.Vl.Aj(true);
this.Vl.U(A.aaR(A.acf.Tm));this.XL.H(PY);this.XL.Aj(true);this.XL.U(A.aaR(A.acf.
Tl));this.Vm.H(MC);this.Vm.Aj(true);this.Vm.U(A.aaR(A.acf.AOY));this.XJ.H(SV);this.
XJ.Aj(true);this.XJ.U(A.aaR(A.acf.Animal));this.XO.H(Kq);this.XO.Aj(true);this.XO.
U(A.aaR(A.acf.A6v));this.Ty.H(UE);this.Ty.Ar(true);this.Ty.Aj(true);this.Ty.Y(true
);this.Ty.U(A.aaR(A.acf.A5h));this.XN.H(ZD);this.XN.Aj(true);this.XN.U(A.aaR(A.acf.
Device));this.XW.H(WG);this.XW.Aj(true);this.XW.U(A.aaR(A.acf.Settings));this.Aw.
H(IK);this.J(this.DP,0);this.J(this.Z,0);this.J(this.XU,0);this.J(this.XV,0);this.
J(this.Vl,0);this.J(this.XL,0);this.J(this.Vm,0);this.J(this.XJ,0);this.J(this.XO
,0);this.J(this.Ty,0);this.J(this.XN,0);this.J(this.XW,0);this.J(this.Aw,0);this.
N.Cw=[this,this.ByE];this.N.Ci=[this,this.Xj];this.Z.Ej=[this,this.G8];this.XU.AN=[
this,this.Ia];this.XU.Dy(A.aaL(A.ach.AC0));this.XV.AN=[this,this.Ia];this.XV.Dy(
A.aaL(A.ach.AC3));this.Vl.AN=[this,this.Ia];this.Vl.Dy(A.aaL(A.ach.AO2));this.XL.
AN=[this,this.Ia];this.XL.Dy(A.aaL(A.ach.APa));this.Vm.AN=[this,this.Ia];this.Vm.
Dy(A.aaL(A.ach.APA));this.XJ.AN=[this,this.Ia];this.XJ.Dy(A.aaL(A.ach.AO5));this.
XO.AN=[this,this.Ia];this.XO.Dy(A.aaL(A.ach.APH));this.Ty.AN=[this,this.Ia];this.
Ty.Dy(A.aaL(A.ach.APp));this.XN.AN=[this,this.Ia];this.XN.Dy(A.aaL(A.ach.APm));this.
XW.AN=[this,this.Ia];this.XW.Dy(A.aaL(A.ach.APZ));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.DP._Done();this.Z._Done();this.XU._Done();this.XV._Done(
);this.Vl._Done();this.XL._Done();this.Vm._Done();this.XJ._Done();this.XO._Done(
);this.Ty._Done();this.XN._Done();this.XW._Done();this.Aw._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.DP._ReInit();this.Z._ReInit(
);this.XU._ReInit();this.XV._ReInit();this.Vl._ReInit();this.XL._ReInit();this.Vm.
_ReInit();this.XJ._ReInit();this.XO._ReInit();this.Ty._ReInit();this.XN._ReInit(
);this.XW._ReInit();this.Aw._ReInit();this.XU.U(A.aaR(A.acf.Gf));this.XV.U(A.aaR(
A.acf.A6P));this.Vl.U(A.aaR(A.acf.Tm));this.XL.U(A.aaR(A.acf.Tl));this.Vm.U(A.aaR(
A.acf.AOY));this.XJ.U(A.aaR(A.acf.Animal));this.XO.U(A.aaR(A.acf.A6v));this.Ty.U(
A.aaR(A.acf.A5h));this.XN.U(A.aaR(A.acf.Device));this.XW.U(A.aaR(A.acf.Settings)
);this.CU();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XV)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Vm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XJ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeScreen"};C.QZ={Number:null,I6:null,II:null,Tr:null,Ar$:0,Init:
function(aArg){var B;A.zX([this,this.Bak],[B=A._GetAutoObject(A.Device.Device),B.
ARS,B.AZd],0);A.pe([this,this.Bak],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);
this.AnG();},Cx:function(G){A._GetAutoObject(A.Device.Device).Ahj();},EV:function(
G){A._GetAutoObject(A.Device.Device).Any();},AlB:function(G){var F;this.Am();this.
Tr.Ar(A._GetAutoObject(A.Device.Device).ScanState===1);if(A._GetAutoObject(A.Device.
Device).ScanState===2)A._GetAutoObject(A.Device.Helper).AdY.Ar(true);if(!this.Tr.
Bv)(F=this.Tr.Q,F[2].call(F[0],this.Tr.B0));},Bak:function(s){this.AlB(s);},AnG:
function(){switch(A._GetAutoObject(A.Device.Device).ScanState){case 4:this.Background.
L(A.jb.FZ);break;case 3:this.Background.L(A.jb.H1);break;default:this.Background.
L(A.jb.CG);}},Akh:function(E){if(this.Ar$===E)return;this.Ar$=E;this.I6.Akh(E);}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Number={
I:this},0);C.I6._Init.call(this.I6={I:this},0);A.acg.An._Init.call(this.II={I:this
},0);A.acl.Ga._Init.call(this.Tr={I:this},0);this.__proto__=C.QZ;var B;this.Background.
L(A.jb.CG);this.N.Y(false);this.Number.H(UF);this.Number.KL(true);this.Number.L(
A.jb.Text);this.I6.H(ZE);this.I6.Akh(0);this.II.H(WH);this.II.L(A.jb.AR);this.II.
Y5(true);this.Tr.Fe(1750);this.Tr.T$(750);this.Tr.Akc(0);this.Tr.Ar(true);this.Tr.
B0=3;this.J(this.Number,0);this.J(this.I6,0);this.J(this.II,0);this.Number.S(A.aaL(
A.fl.Ah));this.II.Ay(A.aaL(A.ach.AC2));this.Tr.Q=[B=this.II,B.ARF,B.Cv];this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.Number._Done();this.I6._Done();
this.II._Done();this.Tr._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Number._ReInit();this.I6._ReInit();this.II._ReInit();this.
Tr._ReInit();this.Number.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Number)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Tr)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScanScreen"};C.Fc={
C6:null,ACN:null,AN:null,Bl:null,Dg:null,Background:null,Mj:null,Ow:null,QP:null
,GZ:null,A4w:true,LA:false,Kx:false,Qh:false,Init:function(aArg){},Bg:function(aSize
){var B;C.G_.Bg.call(this,aSize);this.Mj.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.
QP.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);this.Ow.H(this.QP.M);this.GZ.
H([].concat(0,this.GZ.M.slice(1,4)));this.GZ.H(A.abN(this.GZ.M,aSize[0]));this.GZ.
H(A.abP(this.GZ.M,0));this.GZ.H([].concat(this.GZ.M.slice(0,3),47));},Ai:function(
Ae){var B;C.G_.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20
);var Gt=this.Bl.Bv;if(!G6){this.QP.L(A.jb.AmE);this.GZ.L(A.jb.CG);this.Ow.Y(true
);this.Ow.L(A.jb.AQa);this.Mj.Y(false);}else if(Gt){this.QP.L(A.jb.Bi);this.GZ.L(
A.jb.Bi);this.Ow.Y(false);this.Mj.Y(true);}else if(Fh){this.QP.L(A.jb.Bi);this.GZ.
L(A.jb.Bi);this.Ow.Y(false);this.Mj.Y(true);}else{this.QP.L(A.jb.Text);this.GZ.L(
A.jb.Text);this.Ow.Y(true);this.Ow.L(A.jb.C1);this.Mj.Y(false);}this.LA=G6;this.
Kx=Fh;this.Qh=Gt;},Qg:function(G){this.Am();A.pe(this.AN,this);},Ais:function(G){
if(this.Dg.AbY)return;this.Am();if(this.Bl.Bv){A.pe(this.AN,this);this.Bl.Ar(false
);}this.Bl.Ar(true);},U:function(E){if(this.DD===E)return;this.DD=E;this.GZ.R(E);
},Dy:function(E){if(this.C6===E)return;this.C6=E;this.QP.Ay(E);this.Ow.Ay(E);},AbH:
function(E){if(this.A4w===E)return;this.A4w=E;this.GZ.Y(E);},AbK:function(E){if(
this.ACN===E)return;this.ACN=E;this.Mj.Ay(E);this.Mj.H(A.abK(this.Mj.M,E.FrameSize
));},_Init:function(aArg){C.G_._Init.call(this,aArg);A.Core.Timer._Init.call(this.
Bl={I:this},0);A.Core.BK._Init.call(this.Dg={I:this},0);A.acg.AJ._Init.call(this.
Background={I:this},0);A.acg.An._Init.call(this.Mj={I:this},0);A.acg.An._Init.call(
this.Ow={I:this},0);A.acg.An._Init.call(this.QP={I:this},0);C.CP._Init.call(this.
GZ={I:this},0);this.__proto__=C.Fc;this.H(ZF);this.Bl.PJ(0);this.Bl.Wf(50);this.
Dg.Filter=1;this.Background.H(WI);this.Background.Y(false);this.Mj.AX(0x14);this.
Mj.L(A.jb.AR);this.Mj.Cv(0);this.Ow.L(A.jb.C1);this.Ow.Cv(1);this.GZ.H(ZG);this.
J(this.Background,0);this.J(this.Mj,0);this.J(this.Ow,0);this.J(this.QP,0);this.
J(this.GZ,0);this.Bl.Mt=[this,this.Qg];this.Dg.BL=[this,this.Ais];this.Mj.Ay(A.aaL(
A.ach.NM));this.Ow.Ay(A.aaL(A.ach.Au9));this.QP.Ay(A.aaL(A.ach.Au9));this.GZ.S(A.
aaL(A.fl.Ah));this.GZ.A7(A.aaL(A.fl.Ak));this.GZ.CB(A.aaL(A.fl.By));this.ACN=A.aaL(
A.ach.NM);this.Init(aArg);},_Done:function(){this.__proto__=C.G_;this.Bl._Done();
this.Dg._Done();this.Background._Done();this.Mj._Done();this.Ow._Done();this.QP.
_Done();this.GZ._Done();C.G_._Done.call(this);},_ReInit:function(){C.G_._ReInit.
call(this);this.Bl._ReInit();this.Dg._ReInit();this.Background._ReInit();this.Mj.
_ReInit();this.Ow._ReInit();this.QP._ReInit();this.GZ._ReInit();this.GZ.S(A.aaL(
A.fl.Ah));this.GZ.A7(A.aaL(A.fl.Ak));this.GZ.CB(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.G_._Mark.call(this,D);if((B=this.C6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.ACN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Bl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ow)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.QP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GZ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"};C.
Aw={Awz:null,Background:null,OP:null,ArE:0,AkI:10,Ajg:100,AQ:0,Aos:true,Bg:function(
aSize){A.Core.O.Bg.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OP.H([].concat(2,this.OP.M.slice(1,4)));this.OP.H(A.abN(this.OP.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.O.Ai.call(this,Ae);var AfF=this.AkI<this.Ajg;var AIJ=(
B=this.M)[3]-B[1];var A1C=10;var AtO=AIJ;var A3b=0;if(10>AIJ)A1C=AIJ;if(this.AkI<
this.Ajg)AtO=((AtO*this.AkI)/this.Ajg)|0;if(AtO<A1C)AtO=A1C;if(this.AkI<this.Ajg
)A3b=((this.Bjs()*(AIJ-AtO))/(this.Ajg-this.AkI))|0;this.OP.H(A.abP(this.OP.M,A3b
));this.OP.H([].concat(this.OP.M.slice(0,3),A3b+AtO));this.OP.Y(AfF);this.Background.
Y(AfF);if(!!this.Awz&&(this.Aos!==AfF))A.pe(this.Awz,this);this.Aos=AfF;},Bjs:function(
){var E=this.ArE;var Ht=this.Ajg-this.AkI;if((Ht>0)&&(E>Ht))E=Ht;if(Ht<=0)E=0;return E;
},Mr:function(E){if(E<0)E=0;if(this.ArE===E)return;this.ArE=E;this.Am();},Ms:function(
E){if(E<0)E=0;if(this.AkI===E)return;this.AkI=E;this.Am();},Mq:function(E){if(E<
0)E=0;if(this.Ajg===E)return;this.Ajg=E;this.Am();},L:function(E){if(this.AQ===E
)return;this.AQ=E;this.OP.L(E);},BlB:function(E){if(A.aa0(this.Awz,E))return;this.
Awz=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(
this.Background={I:this},0);A.acg.AJ._Init.call(this.OP={I:this},0);this.__proto__=
C.Aw;this.H(ZH);this.Ar(false);this.AQ=A.jb.AR;this.Background.AX(0x0);this.Background.
H(UG);this.Background.L(A.jb.C1);this.OP.AX(0x0);this.OP.H(UG);this.OP.L(A.jb.AR
);this.J(this.Background,0);this.J(this.OP,0);},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.OP._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.OP._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Awz)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cr={G$:null,Z:null,Aw:null,An:null,A5X:A.jV,Init:function(aArg){A.pe([this,this.
AAs],this);},Dv:function(G){var B;C.AB.Dv.call(this,G);this.Am();if(!!this.AR&&((
this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);this.AAs(this);},Alx:
function(G){if(!!this.N.Cw)A.pe(this.N.Cw,this);},Apj:function(G){if(!!this.N.Cc
)A.pe(this.N.Cc,this);},AzW:function(G){if(!!this.N.Ci)A.pe(this.N.Ci,this);},E9:
function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[
3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);A.pe([this,this.By0],this);},AAs:function(G){
var B;var GL=(C.Cj.isPrototypeOf(B=this.AR)?B:null);this.N.Ho(A.jV);this.N.CT(A.
aaL(A.ach.VG));this.N.Cw=[this,this.Eo];if(!!GL&&!!GL.AlX){this.N.FC(A.jV);this.
N.Kn.Dm(255);this.N.Arc(GL.Aqh);this.N.Cn(GL.Au6);this.N.Ci=GL.AlX;}else{this.N.
FC(A.jV);this.N.Cn(null);this.N.Ci=null;}if(!!GL&&!!GL.Af3){this.N.BZ(GL.Aw6);this.
N.HL.Dm(GL.AwA);this.N.Am_(GL.Amr);this.N.C3(GL.Aqv);this.N.Cc=GL.Af3;}else{this.
N.BZ(A.jV);this.N.C3(null);this.N.Cc=null;}},JK:function(E){if(this.A5X===E)return;
this.A5X=E;this.G$.R(E);},Eo:function(G){A._GetAutoObject(C.AW).Fl();},By0:function(
G){var B;var BxY=this.Aw.Background.Fd();var Bcs=(BxY?this.M[2]-((B=this.Aw.M)[2
]-B[0]):this.M[2]);var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){var AiS=X;
X=X.Ag;if(((AiS.T&0x400)===0x400)){if(!!(A.Core.AjU.isPrototypeOf(AiS)?AiS:null)
){var Bcy=(A.Core.AjU.isPrototypeOf(AiS)?AiS:null);Bcy.DM([Bcs,Bcy.Ev[1]]);}else
if(!!(A.Core.El.isPrototypeOf(AiS)?AiS:null)){var Bek=(A.Core.El.isPrototypeOf(AiS
)?AiS:null);Bek.H(A.abN(Bek.M,Bcs));}}}},G8:function(G){A.pe([this,this.E9],this
);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.CP._Init.call(this.G$={I:this
},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Aw._Init.call(this.Aw={I:this},0);
A.acg.An._Init.call(this.An={I:this},0);this.__proto__=C.Cr;this.N.Y(true);this.
G$.H(WJ);this.G$.Ar(false);this.G$.R(A.aaR(A.acf.Settings));this.G$.L(A.jb.Text);
this.Z.H(E4);this.Z.Kd(1);this.Aw.H(IK);this.An.H(Q9);this.An.L(A.jb.Text);this.
J(this.G$,0);this.J(this.Z,0);this.J(this.Aw,0);this.J(this.An,0);this.G$.S(A.aaL(
A.fl.J_));this.G$.A7(A.aaL(A.fl.Ie));this.Z.Ej=[this,this.G8];this.An.Ay(A.aaL(A.
ach.ACv));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.G$._Done();
this.Z._Done();this.Aw._Done();this.An._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.G$._ReInit();this.Z._ReInit();this.Aw._ReInit();this.
An._ReInit();this.G$.R(A.aaR(A.acf.Settings));this.G$.S(A.aaL(A.fl.J_));this.G$.
A7(A.aaL(A.fl.Ie));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsScreen"};C.Aqp={Timer:null,Text:null,Init:
function(aArg){var B;A.zX([this,this.Be$],[B=A._GetAutoObject(A.Device.Helper),B.
UJ,B.UK],0);},C9:function(E){C.BQ.C9.call(this,E);this.Text.L(E);},Be$:function(
G){this.Text.R(A._GetAutoObject(A.acj.KD).BgZ(A._GetAutoObject(A.Device.Helper).
DF()));},_Init:function(aArg){C.BQ._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Timer={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=
C.Aqp;this.Timer.Wf(1);this.Timer.Ar(true);this.Text.H(ZI);this.Text.R(A.jV);this.
J(this.Text,0);this.Timer.Mt=[this,this.Be$];this.Text.S(A.aaL(A.fl.Ah));this.Init(
aArg);},_Done:function(){this.__proto__=C.BQ;this.Timer._Done();this.Text._Done(
);C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Timer.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var
B;C.BQ._Mark.call(this,D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderTime"};
C.BQ={KM:0xFFFFFFFF,LL:0,C9:function(E){if(this.KM===E)return;this.KM=E;},AbG:function(
E){if(this.LL===E)return;this.LL=E;},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.BQ;this.H(OU);},_className:"Application::HeaderContent"};
C.N={Vy:null,Vz:null,VA:null,AgA:null,AgB:null,AgC:null,Cw:null,Ci:null,Cc:null,
Background:null,NB:null,I4:null,Kn:null,HL:null,Pq:null,IX:null,K$:null,TO:null,
TP:null,AnB:A.jV,AnC:A.jV,AnD:A.jV,Aqw:0,Aqx:0,Aqy:0,AgU:0,Zd:false,Zc:false,ArK:
false,Ar0:false,ArZ:false,Init:function(aArg){},Ai:function(Ae){if(!!this.Vy)this.
I4.S(this.Vy);if(!!this.Vz)this.Kn.S(this.Vz);if(!!this.VA)this.HL.S(this.VA);switch(
this.AgU){case 0:{this.NB.Y(false);this.I4.L(A.jb.Bi);this.Kn.L(A.jb.Bi);this.HL.
L(A.jb.Bi);this.Pq.L(A.jb.Bi);this.IX.L(A.jb.Bi);this.K$.L(A.jb.Bi);}break;case 1:{
if(!this.AgA)this.NB.H(A.aaT(this.I4.ARw(),Q_));else this.NB.H(this.Pq.Db());this.
NB.Y(true);this.I4.L(A.jb.Text);this.Kn.L(A.jb.Bi);this.HL.L(A.jb.Bi);this.Pq.L(
A.jb.Text);this.IX.L(A.jb.Bi);this.K$.L(A.jb.Bi);}break;case 3:{if(!this.AgC)this.
NB.H(A.aaT(this.HL.ARw(),Q_));else this.NB.H(this.K$.Db());this.NB.Y(true);this.
I4.L(A.jb.Bi);this.Kn.L(A.jb.Bi);this.HL.L(A.jb.Text);this.Pq.L(A.jb.Bi);this.IX.
L(A.jb.Bi);this.K$.L(A.jb.Text);}break;case 2:{if(!this.AgB)this.NB.H(A.aaT(this.
Kn.ARw(),Q_));else this.NB.H(this.IX.Db());this.NB.Y(true);this.I4.L(A.jb.Bi);this.
Kn.L(A.jb.Text);this.HL.L(A.jb.Bi);this.Pq.L(A.jb.Bi);this.IX.L(A.jb.Text);this.
K$.L(A.jb.Bi);}break;default:{this.NB.Y(false);A.ab5("%s",WK);}}if(!!this.Pq.Al){
this.Pq.Y(true);this.I4.Y(false);}else{this.Pq.Y(false);this.I4.Y(true);}if(this.
AnC.length<=0){this.IX.Y(true);this.Kn.Y(false);}else{this.IX.Y(false);this.Kn.Y(
true);}if(!!this.K$.Al){this.K$.Y(true);this.HL.Y(false);}else{this.K$.Y(false);
this.HL.Y(true);}},Ho:function(E){if(this.AnB===E)return;this.AnB=E;this.I4.R(E);
this.Am();},FC:function(E){if(this.AnC===E)return;this.AnC=E;this.Kn.R(E);this.Am(
);},BZ:function(E){if(this.AnD===E)return;this.AnD=E;this.HL.R(E);this.Am();},AEv:
function(E){if(this.AgU===E)return;this.AgU=E;this.Am();},AEn:function(E){if(this.
Vy===E)return;this.Vy=E;this.I4.S(E);this.Am();},Arc:function(E){if(this.Vz===E)
return;this.Vz=E;this.Kn.S(E);this.Am();},Am_:function(E){if(this.VA===E)return;
this.VA=E;this.HL.S(E);this.Am();},A2q:function(G){this.Am();},CT:function(E){if(
this.AgA===E)return;this.AgA=E;this.Pq.Ay(E);this.Am();},Cn:function(E){if(this.
AgB===E)return;this.AgB=E;this.IX.Ay(E);this.Am();},C3:function(E){if(this.AgC===
E)return;this.AgC=E;this.K$.Ay(E);this.Am();},OG:function(E){if(this.ArZ===E)return;
this.ArZ=E;this.TO.Y(E);if(E)this.I4.H([].concat(this.TO.M[2],this.I4.M.slice(1,
4)));else this.I4.H([].concat(0,this.I4.M.slice(1,4)));this.Am();},OH:function(E
){if(this.Ar0===E)return;this.Ar0=E;this.TP.Y(E);if(E)this.HL.H(A.abN(this.HL.M,
this.TP.M[0]));else this.HL.H(A.abN(this.HL.M,this.M[2]));this.Am();},Bk3:function(
E){if(this.Aqw===E)return;this.Aqw=E;this.Pq.Cv(E);this.Am();},ASf:function(E){if(
this.Aqx===E)return;this.Aqx=E;this.IX.Cv(E);this.Am();},A8P:function(E){if(this.
Aqy===E)return;this.Aqy=E;this.K$.Cv(E);this.Am();},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);A.acg.AJ.
_Init.call(this.NB={I:this},0);C.CP._Init.call(this.I4={I:this},0);C.CP._Init.call(
this.Kn={I:this},0);C.CP._Init.call(this.HL={I:this},0);A.acg.An._Init.call(this.
Pq={I:this},0);A.acg.An._Init.call(this.IX={I:this},0);A.acg.An._Init.call(this.
K$={I:this},0);A.acg.An._Init.call(this.TO={I:this},0);A.acg.An._Init.call(this.
TP={I:this},0);this.__proto__=C.N;this.H(BD);this.Background.AX(0x3F);this.Background.
H(BD);this.Background.L(A.jb.AdL);this.NB.H(WM);this.NB.L(A.jb.C1);this.NB.Y(false
);this.I4.AX(0x14);this.I4.H(WN);this.I4.A3(0x12);this.Kn.AX(0x14);this.Kn.H(WO);
this.Kn.A3(0x12);this.HL.H(ZJ);this.Pq.H(WQ);this.IX.H(WR);this.K$.H(SW);this.K$.
Y(false);this.TO.H(ZK);this.TO.Y(false);this.TP.H(ZL);this.TP.Y(false);this.J(this.
Background,0);this.J(this.NB,0);this.J(this.I4,0);this.J(this.Kn,0);this.J(this.
HL,0);this.J(this.Pq,0);this.J(this.IX,0);this.J(this.K$,0);this.J(this.TO,0);this.
J(this.TP,0);this.I4.S(A.aaL(A.fl.Ak));this.I4.A7(A.aaL(A.fl.By));this.I4.QT([this
,this.A2q]);this.Kn.S(A.aaL(A.fl.Ak));this.Kn.A7(A.aaL(A.fl.By));this.Kn.QT([this
,this.A2q]);this.HL.S(A.aaL(A.fl.Ak));this.HL.A7(A.aaL(A.fl.By));this.HL.QT([this
,this.A2q]);this.Vy=A.aaL(A.fl.Ak);this.Vz=A.aaL(A.fl.Ak);this.VA=A.aaL(A.fl.Ak);
this.Pq.Ay(null);this.IX.Ay(null);this.K$.Ay(null);this.TO.Ay(A.aaL(A.ach.ALX));
this.TP.Ay(A.aaL(A.ach.Ai6));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.Background._Done();this.NB._Done();this.I4._Done();this.Kn._Done();this.
HL._Done();this.Pq._Done();this.IX._Done();this.K$._Done();this.TO._Done();this.
TP._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Background._ReInit();this.NB._ReInit();this.I4._ReInit();this.Kn._ReInit(
);this.HL._ReInit();this.Pq._ReInit();this.IX._ReInit();this.K$._ReInit();this.TO.
_ReInit();this.TP._ReInit();this.I4.S(A.aaL(A.fl.Ak));this.I4.A7(A.aaL(A.fl.By));
this.Kn.S(A.aaL(A.fl.Ak));this.Kn.A7(A.aaL(A.fl.By));this.HL.S(A.aaL(A.fl.Ak));this.
HL.A7(A.aaL(A.fl.By));this.AEn(A.aaL(A.fl.Ak));this.Arc(A.aaL(A.fl.Ak));this.Am_(
A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
Vy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vz)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.VA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgA)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AgB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.AgC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cw)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ci)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Cc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.NB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TP)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::Footer"};C.ACz={Init:function(aArg
){var B;A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper),B.AqY,B.Akg],0);
A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper),B.A7T,B.AEU],0);A.pe([this
,this.Ng],this);},Eq:function(G){if(!!A._GetAutoObject(A.Device.Helper).Ahf)this.
AbJ(A._GetAutoObject(A.Device.Helper).Ahf.AN8());else this.AbJ(-1);if(!!A._GetAutoObject(
A.Device.Helper).Ul)this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).AkG(A._GetAutoObject(
A.Device.Helper).Ul.Id));else this.OnSetAnimalId(-1);},_Init:function(aArg){C.Amy.
_Init.call(this,aArg);this.__proto__=C.ACz;this.Init(aArg);},_className:"Application::HeaderScannedIds"
};C.AF6={Er:null,Ea:null,FM:null,XH:null,Ts:null,Iw:null,Ix:null,Init:function(aArg
){},Wm:function(G){var B;C.DL.Wm.call(this,G);var AJ0=this.AyI(A._GetAutoObject(
A.Device.Helper).Ur.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var AKM=
this.AyI(A._GetAutoObject(A.Device.Helper).Us.Get(A._GetAutoObject(A.Device.Helper
).W.AnimalType));var BxQ=this.AyI(A._GetAutoObject(A.Device.Device).Zz);this.Er.
H(A.abP(this.Er.M,0));this.Er.H([].concat(this.Er.M.slice(0,3),((B=this.M)[3]-B[
1])-AJ0));this.Ix.H(A.abO(this.Ix.M,this.Er.M[3]-((((B=this.Ix.M)[3]-B[1])/2)|0)
));this.Ea.H(A.abP(this.Ea.M,this.Er.M[3]));this.Ea.H([].concat(this.Ea.M.slice(
0,3),((B=this.M)[3]-B[1])-AKM));this.Iw.H(A.abO(this.Iw.M,(this.Ea.M[3]-((((B=this.
Iw.M)[3]-B[1])/2)|0))+2));this.FM.H(A.abP(this.FM.M,this.Ea.M[3]));this.FM.H([].
concat(this.FM.M.slice(0,3),((B=this.M)[3]-B[1])-BxQ));this.Ts.H(A.abO(this.Ts.M
,this.FM.M[3]-((((B=this.Ts.M)[3]-B[1])/2)|0)));this.XH.H(A.abP(this.XH.M,this.FM.
M[3]));this.XH.H([].concat(this.XH.M.slice(0,3),(B=this.M)[3]-B[1]));},AIW:function(
Aoo){return A._GetAutoObject(A.Device.Converter).AkC(Aoo);},AJu:function(){return A.
_GetAutoObject(A.acj.Temperature).Alh();},_Init:function(aArg){C.DL._Init.call(this
,aArg);A.acg.AJ._Init.call(this.Er={I:this},0);A.acg.AJ._Init.call(this.Ea={I:this
},0);A.acg.AJ._Init.call(this.FM={I:this},0);A.acg.AJ._Init.call(this.XH={I:this
},0);A.acg.AJ._Init.call(this.Ts={I:this},0);A.acg.AJ._Init.call(this.Iw={I:this
},0);A.acg.AJ._Init.call(this.Ix={I:this},0);this.__proto__=C.AF6;this.Er.AX(0xD
);this.Er.H(Acp);this.Er.L(A.jb.FZ);this.Ea.AX(0xD);this.Ea.H(UH);this.Ea.L(A.jb.
H1);this.FM.AX(0xD);this.FM.H(ZM);this.FM.L(A.jb.ET);this.XH.AX(0xD);this.XH.H(Afb
);this.XH.L(A.jb.Ae6);this.Ts.AX(0xD);this.Ts.H(ZN);this.Ts.AvR(A.jb.Ae6);this.Ts.
AvS(A.jb.Ae6);this.Ts.AvU(A.jb.ET);this.Ts.AvT(A.jb.ET);this.Iw.AX(0xD);this.Iw.
H(WS);this.Iw.AvR(A.jb.ET);this.Iw.AvS(A.jb.ET);this.Iw.AvU(A.jb.H1);this.Iw.AvT(
A.jb.H1);this.Ix.AX(0xD);this.Ix.H(ZO);this.Ix.AvR(A.jb.H1);this.Ix.AvS(A.jb.H1);
this.Ix.AvU(A.jb.FZ);this.Ix.AvT(A.jb.FZ);this.J(this.Er,-1);this.J(this.Ea,-1);
this.J(this.FM,-1);this.J(this.XH,-1);this.J(this.Ts,-1);this.J(this.Iw,-1);this.
J(this.Ix,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.DL;this.Er._Done(
);this.Ea._Done();this.FM._Done();this.XH._Done();this.Ts._Done();this.Iw._Done(
);this.Ix._Done();C.DL._Done.call(this);},_ReInit:function(){C.DL._ReInit.call(this
);this.Er._ReInit();this.Ea._ReInit();this.FM._ReInit();this.XH._ReInit();this.Ts.
_ReInit();this.Iw._ReInit();this.Ix._ReInit();},_Mark:function(D){var B;C.DL._Mark.
call(this,D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.FM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ts)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Iw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ix)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TemperatureGraph"};C.Cj={AuN:null,Amr:null,APw:null
,Aqv:null,Aqh:null,Au6:null,AN:null,Af3:null,AlX:null,N:null,Bl:null,QG:null,Aw6:
A.jV,ATM:false,AFU:false,AoQ:false,AwA:255,LA:false,Kx:false,Qh:false,Ai:function(
Ae){var B;C.ON.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20
);var Ir=((Ae&0x40)===0x40);var Gt=this.Bl.Bv;var FG=A.jb.CG;var GJ=A.jb.Text;if(
this.Hb){FG=A.jb.Bi;GJ=A.jb.Text;}if(!G6){this.Background.L(A.jb.C1);this.V.L(A.
jb.CG);}else if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else if(Ir){this.
Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else if(Fh){this.Background.L(A.jb.AmE);
this.V.L(A.jb.Bi);}else{this.Background.L(FG);this.V.L(GJ);}this.LA=G6;this.Kx=Fh;
this.Qh=Gt;this.AoQ=Ir;},Qg:function(G){this.Am();A.pe(this.AN,this);},BuN:function(
s){this.Qg(s);},IP:function(G){if(this.QG.AbY)return;this.Am();if(this.Bl.Bv){A.
pe(this.AN,this);this.Bl.Ar(false);}this.Bl.Ar(true);},AsJ:function(s){this.IP(s
);},Aet:function(E){if(A.aa0(this.Af3,E))return;this.Af3=E;},A9h:function(E){if(
this.Aw6===E)return;this.Aw6=E;},Wg:function(E){if(this.AuN===E)return;this.AuN=
E;},Wh:function(E){if(this.Amr===E)return;this.Amr=E;},A8Z:function(E){if(this.AwA===
E)return;this.AwA=E;},Gg:function(E){if(A.aaZ(this.N,E))return;this.N=E;},U:function(
E){if(this.DD===E)return;this.DD=E;this.AKv();},A11:function(G){},BEn:function(s
){this.A11(s);},Akb:function(E){if(this.Aqv===E)return;this.Aqv=E;},LT:function(
E){if(A.aa0(this.AlX,E))return;this.AlX=E;},BkW:function(E){if(this.Aqh===E)return;
this.Aqh=E;},LV:function(E){if(this.Au6===E)return;this.Au6=E;},Y_:function(E){if(
this.AFU===E)return;this.AFU=E;this.AKv();},AKv:function(){var B;var Qn=this.DD;
if(this.AFU)Qn=Qn+A.aaR(A.acf.Colon);if(this.ATM)Qn=Qn+ZP;this.V.R(Qn);},ASy:function(
E){if(this.ATM===E)return;this.ATM=E;this.AKv();},_Init:function(aArg){C.ON._Init.
call(this,aArg);A.Core.Timer._Init.call(this.Bl={I:this},0);A.Core.BK._Init.call(
this.QG={I:this},0);this.__proto__=C.Cj;this.Bl.PJ(0);this.Bl.Wf(50);this.Bl.Ar(
false);this.QG.Filter=1;this.Bl.Mt=[this,this.BuN];this.QG.BL=[this,this.AsJ];this.
AuN=A.aaL(A.fl.Ak);this.Amr=A.aaL(A.fl.Ak);this.APw=A.aaL(A.ach.EU);this.Aqh=A.aaL(
A.fl.Ak);},_Done:function(){this.__proto__=C.ON;this.Bl._Done();this.QG._Done();
C.ON._Done.call(this);},_ReInit:function(){C.ON._ReInit.call(this);this.Bl._ReInit(
);this.QG._ReInit();this.Wg(A.aaL(A.fl.Ak));this.Wh(A.aaL(A.fl.Ak));this.BkW(A.aaL(
A.fl.Ak));},_Mark:function(D){var B;C.ON._Mark.call(this,D);if((B=this.AuN)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Amr)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.APw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aqv)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Aqh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Au6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Af3)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AlX)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"};C.
Dn={Q:null,AmO:null,AmQ:null,Hn:null,HX:null,AK:0,Ge:0,FS:100,Fs:0,Init:function(
aArg){},IP:function(G){this.Fs=1;C.D_.IP.call(this,G);},Bg:function(aSize){C.D_.
Bg.call(this,aSize);this.Hn.H([0,aSize[1]-40,40,aSize[1]]);this.HX.H([].concat(A.
abe(aSize,Afc),aSize));},Ai:function(Ae){var B;C.D_.Ai.call(this,Ae);var Fh=((Ae&
0x20)===0x20);var Gt=this.Bl.Bv;this.Hn.L(this.V.AQ);this.HX.L(this.V.AQ);this.Hn.
Y((Fh||Gt)&&(this.AK>this.Ge));this.HX.Y((Fh||Gt)&&(this.AK<this.FS));if(this.Fs===
6)this.Hn.L(A.jb.ET);if(this.Fs===7)this.HX.L(A.jb.ET);},Bdy:function(G){this.Fs=
6;this.Am();if(this.Bl.Bv){A.pe([this,this.Ax$],this);this.Bl.Ar(false);}this.Bl.
Ar(true);},Qg:function(G){if(this.Fs===6)A.pe([this,this.Ax$],this);if(this.Fs===
7)A.pe([this,this.Aya],this);if(this.Fs===1)A.pe(this.AN,this);this.Fs=0;this.Am(
);},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Acz:function(
s){this.De(s);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.Acz],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Acz],E,0);if(!!E)A.pe([this,
this.Acz],this);},Bdz:function(G){this.Fs=7;this.Am();if(this.Bl.Bv){A.pe([this,
this.Aya],this);this.Bl.Ar(false);}this.Bl.Ar(true);},J0:function(G){this.Fs=0;}
,Aya:function(s){this.J0(s);},JV:function(G){this.Fs=0;},Ax$:function(s){this.JV(
s);},Bx:function(E){if(E<this.Ge)E=this.Ge;if(E>this.FS)E=this.FS;if(this.AK===E
)return;this.AK=E;this.Am();},A$P:function(Aq){this.Bx(Aq);},Gn:function(E){if(this.
Ge===E)return;this.Ge=E;this.Am();},E1:function(E){if(this.FS===E)return;this.FS=
E;this.Am();},T7:function(){return this.AK;},_Init:function(aArg){C.D_._Init.call(
this,aArg);A.Core.BK._Init.call(this.AmO={I:this},0);A.Core.BK._Init.call(this.AmQ={
I:this},0);A.acg.An._Init.call(this.Hn={I:this},0);A.acg.An._Init.call(this.HX={
I:this},0);this.__proto__=C.Dn;this.H(JQ);this.AmO.Filter=6;this.AmQ.Filter=7;this.
Background.H(JQ);this.V.H(Acq);this.V.R(Lq);this.Hn.H(Ahw);this.HX.H(AnO);this.HX.
Cv(1);this.J(this.Hn,0);this.J(this.HX,0);this.AmO.BL=[this,this.Bdy];this.AmO.DS=[
this,this.Bdy];this.AmQ.BL=[this,this.Bdz];this.AmQ.DS=[this,this.Bdz];this.V.S(
A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.V.CB(null);this.Hn.Ay(A.aaL(A.ach.
Al8));this.HX.Ay(A.aaL(A.ach.Al8));this.Init(aArg);},_Done:function(){this.__proto__=
C.D_;this.AmO._Done();this.AmQ._Done();this.Hn._Done();this.HX._Done();C.D_._Done.
call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.AmO._ReInit();this.
AmQ._ReInit();this.Hn._ReInit();this.HX._ReInit();this.V.S(A.aaL(A.fl.Ah));this.
V.A7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmO)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AmQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hn)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.HX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dp:function(){return-1;},C5:function(aIndex){return-1;},F$:function(
aIndex){return A.jV;},DK:function(A2){return-1;},Hl:function(){return-1;},At:function(
E){this.Q=E;},B_:function(Aq){this.At(Aq);},ACc:function(aIndex){return null;},ACe:
function(aIndex){return 0;},B9:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.I2={AwY:null
,BR:null,AGi:A.jV,AUn:A.jV,AjH:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dn.Ai.call(this,Ae);if(!this.AwY){this.BR.L(this.V.AQ);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BR.R(((F=this.Q,F[1].call(F[0])).toFixed()+CM)+this.
AUn);else this.BR.R(((F=this.Q,F[1].call(F[0])).toFixed()+CM)+this.AGi);}}else(B=
this.AwY)?B[1].call(B[0],this):null;},J0:function(G){var F;var BO=this.AK;C.Dn.J0.
call(this,G);this.Bx(this.AK+this.AjH);if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AK));A.abo(this.Q,0);}},JV:function(G){var F;var BO=this.AK;C.
Dn.JV.call(this,G);this.Bx(this.AK-this.AjH);if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},Kh:function(E){if(this.AGi===E)return;
this.AGi=E;this.Am();},KK:function(E){if(this.AUn===E)return;this.AUn=E;this.Am(
);},ASg:function(E){if(this.AjH===E)return;this.AjH=E;},A9d:function(E){if(A.aa0(
this.AwY,E))return;this.AwY=E;},_Init:function(aArg){C.Dn._Init.call(this,aArg);
C.CP._Init.call(this.BR={I:this},0);this.__proto__=C.I2;this.H(JQ);this.BR.H(N7);
this.J(this.BR,-1);this.BR.S(A.aaL(A.fl.Ah));this.BR.A7(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dn;this.BR._Done();C.Dn._Done.call(this
);},_ReInit:function(){C.Dn._ReInit.call(this);this.BR._ReInit();this.BR.S(A.aaL(
A.fl.Ah));this.BR.A7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dn._Mark.call(this
,D);if((B=this.AwY)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BR)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.BW={AC:
null,Ds:null,HD:null,CU:function(){this.Ai(this.T);},Init:function(aArg){},Bg:function(
aSize){var B;C.Dn.Bg.call(this,aSize);this.Ds.H([this.Hn.M[2]-10,this.Hn.M[1],this.
HX.M[0]+10,this.Hn.M[3]]);this.Ds.AEw((B=this.Ds.M)[2]-B[0]);this.Ds.Hy(this.Ds.
Gi,true,null,null);},Ai:function(Ae){var B;C.Dn.Ai.call(this,Ae);var Fh=((Ae&0x20
)===0x20);var Gt=this.Bl.Bv;this.Ds.Abg(0,this.Ds.AV-1);this.Hn.Y(Fh||Gt);this.HX.
Y(Fh||Gt);},De:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DK((F=this.
Q,F[1].call(F[0]))));},J0:function(G){var F;var BO=this.AK;C.Dn.J0.call(this,G);
this.Bx(this.AK+1);if(this.AK!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C5(this.AK)));A.abo(this.Q,0);}},JV:function(G){var F;var BO=this.AK;
C.Dn.JV.call(this,G);this.Bx(this.AK-1);if(this.AK!==BO){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C5(this.AK)));A.abo(this.Q,0);}},Bx:function(E){
var Qm=0;if(E<this.Ge){E=this.FS;Qm=-this.Ds.VT*this.Ds.AV;}if(E>this.FS){E=this.
Ge;Qm=this.Ds.VT;}C.Dn.Bx.call(this,E);if(!!Qm)this.Ds.Gh(Qm);this.Ds.GX(this.AK
);if(this.Ds.BhV())this.Ds.Bnm(false,false);this.Ds.Hy(this.Ds.Gi,true,this.HD,null
);},Hc:function(G){var B;var FW=this.Ds.GT;var Cy=(C.CP.isPrototypeOf(B=this.Ds.
Cf)?B:null);if(!Cy)return;Cy.S(this.V.B4);Cy.A7(this.V.Amq);Cy.CB(this.V.Aqg);Cy.
L(this.V.AQ);if(!!this.AC)Cy.R(this.AC.F$(FW));else Cy.R(WT);Cy.H(A.abK(Cy.M,[this.
Ds.VT,(B=this.Ds.M)[3]-B[1]]));},Bum:function(s){this.Hc(s);},CH:function(E){if(
this.AC===E)return;this.AC=E;if(!!this.AC){this.Gn(0);this.E1(this.AC.Dp()-1);this.
Ds.Jn(this.AC.Dp());this.Ds.Abg(0,this.Ds.AV-1);}},_Init:function(aArg){C.Dn._Init.
call(this,aArg);A.Core.Ds._Init.call(this.Ds={I:this},0);A.acl.Ga._Init.call(this.
HD={I:this},0);this.__proto__=C.BW;this.H(JQ);this.Ds.NS(C.CP);this.HD.Wj(23);this.
HD.HG(1);this.HD.Fe(200);this.J(this.Ds,0);this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.
aaL(A.fl.Ak));this.Ds.Hc=[this,this.Bum];this.Init(aArg);},_Done:function(){this.
__proto__=C.Dn;this.Ds._Done();this.HD._Done();C.Dn._Done.call(this);},_ReInit:function(
){C.Dn._ReInit.call(this);this.Ds._ReInit();this.HD._ReInit();this.V.S(A.aaL(A.fl.
Ah));this.V.A7(A.aaL(A.fl.Ak));this.CU();},_Mark:function(D){var B;C.Dn._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ds)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroup"};C.SA={Fw:null,Oy:null,Dh:null,Au:null,Jl:null,
HC:null,Pi:null,Vv:null,QO:null,X4:null,PU:null,Gm:null,Gl:null,FN:0,A4:0,ArH:false
,BhR:false,Init:function(aArg){},Ai:function(Ae){C.Dn.Ai.call(this,Ae);this.Hn.Y(
false);this.HX.Y(false);var Atf=A.jV;if(!!this.Dh){this.Pi.R(this.Au.Format(AnP)
);this.QO.R(this.Au.Format(Ahx));this.PU.R(this.Au.Format(Ahy));}if(this.A4===1){
this.HC.Y(true);this.HC.H(this.Pi.M);this.HC.L(this.V.AQ);this.Pi.L(this.Background.
AQ);this.QO.L(this.V.AQ);this.PU.L(this.V.AQ);Atf=A.aaR(A.acf.A4Q);}else if(this.
A4===2){this.HC.Y(true);this.HC.H(this.QO.M);this.HC.L(this.V.AQ);this.Pi.L(this.
V.AQ);this.QO.L(this.Background.AQ);this.PU.L(this.V.AQ);Atf=A.aaR(A.acf.Ha);}else
if(this.A4===3){this.HC.Y(true);this.HC.H(this.PU.M);this.HC.L(this.V.AQ);this.Pi.
L(this.V.AQ);this.QO.L(this.V.AQ);this.PU.L(this.Background.AQ);Atf=A.aaR(A.acf.
Year);}else{this.HC.Y(false);this.Pi.L(this.V.AQ);this.X4.L(this.V.AQ);this.QO.L(
this.V.AQ);this.Vv.L(this.V.AQ);this.PU.L(this.V.AQ);}if(Atf.length>0){if(this.AFU
)this.V.R((((this.DD+Acr)+Atf)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else
this.V.R(((this.DD+Acr)+Atf)+String.fromCharCode(0x29));}else this.AKv();},Qg:function(
G){if(this.Fs===1)A.pe([this,this.US],this);else if(this.Fs===4)A.pe([this,this.
Aig],this);else if(this.Fs===5)A.pe([this,this.Ah4],this);C.Dn.Qg.call(this,G);}
,J0:function(G){switch(this.A4){case 0:C.Dn.J0.call(this,G);break;case 3:break;default:
this.Ac_(this);}},JV:function(G){switch(this.A4){case 0:C.Dn.JV.call(this,G);break;
default:this.Ah3(this);}},Ada:function(G){var F;if(!!this.Dh)this.T9((F=this.Dh,
F[1].call(F[0])));},AbM:function(E){if(A.aaZ(this.Dh,E))return;if(!!this.Dh)A.z$([
this,this.Ada],this.Dh,0);this.Dh=E;if(!!E)A.zX([this,this.Ada],E,0);if(!!E)A.pe([
this,this.Ada],this);},T9:function(E){if(this.FN===E)return;this.FN=E;this.Au.Initialize(
this.FN);this.Am();},Ac_:function(G){this.Fs=1;this.Am();if(this.Bl.Bv){A.pe([this
,this.US],this);this.Bl.Ar(false);}this.Bl.Ar(true);},Bai:function(s){this.Ac_(s
);},US:function(G){this.Ep(this.A4+1);},AlA:function(G){this.Fs=4;this.Am();if(this.
Bl.Bv){A.pe([this,this.Aig],this);this.Bl.Ar(false);}this.Bl.Ar(true);},Alz:function(
G){this.Fs=5;this.Am();if(this.Bl.Bv){A.pe([this,this.Ah4],this);this.Bl.Ar(false
);}this.Bl.Ar(true);},Aig:function(G){var B;var F;var BO=this.FN;switch(this.A4){
case 1:{if(this.ArH){var AAC=A._NewObject(A.Core.AnE,0);AAC.J7=1;if(this.Au.J(AAC
).JI()>A._GetAutoObject(A.Device.Helper).DF())return;}if(this.Au.GB<this.Au.Y3()
)this.Au.Lk(this.Au.GB+1);}break;case 2:{if(this.ArH){var AAC=A._NewObject(A.Core.
AnE,0);AAC.J7=this.Au.Y3();if(this.Au.J(AAC).JI()>A._GetAutoObject(A.Device.Helper
).DF())return;}this.Au.Ub(this.Au.Ha+1);if(this.Au.Y3()<this.Au.GB)this.Au.Lk(this.
Au.Y3());}break;case 3:{if(this.ArH){var A0q=A._NewObject(A.Core.Bt,0);A0q.Initialize(
this.Au.JI());A0q.Year+=1;if(A0q.JI()>A._GetAutoObject(A.Device.Helper).DF())return;
}if(this.Au.Year>=2100)return;this.Au.Year=this.Au.Year+1;}break;default:;}this.
T9(((B=(this.Au.JI()|0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dh)(F=this.
Dh,F[2].call(F[0],this.FN));A.abo(this.Dh,0);}},Ah4:function(G){var B;var F;var BO=
this.FN;if(this.A4===1)this.Au.Lk(this.Au.GB-1);if(this.A4===2){this.Au.Ub(this.
Au.Ha-1);if(this.Au.Y3()<this.Au.GB)this.Au.Lk(this.Au.Y3());}if(this.A4===3){if(
this.Au.Year<=2000)return;this.Au.Year=this.Au.Year-1;}this.T9(((B=(this.Au.JI()|
0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],
this.FN));A.abo(this.Dh,0);}},DC:function(G){var F;if(!this.N)return;switch(this.
A4){case 1:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[
0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(F[
0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=
null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.Ad_));(F=this.N,F[1].call(F[0])).
BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.US];}break;case 2:{(F=this.N,F[
1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N
,F[1].call(F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(A.aaL(A.ach.AmA
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=[this,this.
Ah3];(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.Ad_));(F=this.N,F[1].call(F[0])).
BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.US];}break;case 3:{(F=this.N,F[
1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N
,F[1].call(F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(A.aaL(A.ach.AmA
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=[this,this.
Ah3];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).BZ(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}break;default:this.Fw.Akr((F=this.N,F[1].call(F[
0])));}},AES:function(E){if(this.ArH===E)return;this.ArH=E;},FJ:function(G){this.
Ep(1);},G5:function(G){this.Ep(0);},Ep:function(EE){var F;var AzK=this.A4;if(!this.
A4){this.Fw.Ajb((F=this.N,F[1].call(F[0])));if((EE===1)&&!this.FN){var BO=this.FN;
this.T9(A._GetAutoObject(A.Device.Helper).DF());if(this.FN!==BO){if(!!this.Dh)(F=
this.Dh,F[2].call(F[0],this.FN));A.abo(this.Dh,0);}}}this.A4=EE;this.BhR=true;if((
this.A4<0)||(this.A4>3))this.A4=0;this.DC(this);this.Gm.Bv=!!this.A4;this.Gl.Bv=
!!this.A4;if((!!AzK&&!this.A4)&&!!this.Oy)A.pe(this.Oy,this);this.Am();},Ah3:function(
G){if(this.A4>1)this.Ep(this.A4-1);},_Init:function(aArg){C.Dn._Init.call(this,aArg
);A.Core.Bt._Init.call(this.Au={I:this},0);A.Core.BK._Init.call(this.Jl={I:this}
,0);A.acg.AJ._Init.call(this.HC={I:this},0);A.acg.Text._Init.call(this.Pi={I:this
},0);A.acg.Text._Init.call(this.Vv={I:this},0);A.acg.Text._Init.call(this.QO={I:
this},0);A.acg.Text._Init.call(this.X4={I:this},0);A.acg.Text._Init.call(this.PU={
I:this},0);A.Core.BK._Init.call(this.Gm={I:this},0);A.Core.BK._Init.call(this.Gl={
I:this},0);this.__proto__=C.SA;this.H(UI);this.V.R(AnQ);this.Hn.Y(false);this.HX.
Y(false);this.Jl.Filter=1;this.HC.H(AnR);this.HC.L(0x55FFFFFF);this.Pi.H(AnS);this.
Pi.I0(true);this.Pi.A3(0x14);this.Vv.H(AnT);this.Vv.I0(true);this.Vv.A3(0x14);this.
Vv.R(Afd);this.QO.H(AnU);this.QO.I0(true);this.X4.H(Afe);this.X4.I0(true);this.X4.
R(Afd);this.PU.H(Ash);this.PU.I0(true);this.PU.A3(0x11);this.Gm.Filter=4;this.Gm.
Bv=false;this.Gl.Filter=5;this.Gl.Bv=false;this.J(this.HC,0);this.J(this.Pi,0);this.
J(this.Vv,0);this.J(this.QO,0);this.J(this.X4,0);this.J(this.PU,0);this.Jl.BL=[this
,this.Bai];this.Pi.S(A.aaL(A.fl.EA));this.Vv.S(A.aaL(A.fl.EA));this.QO.S(A.aaL(A.
fl.EA));this.X4.S(A.aaL(A.fl.EA));this.PU.S(A.aaL(A.fl.EA));this.Gm.BL=[this,this.
AlA];this.Gm.DS=[this,this.Aig];this.Gl.BL=[this,this.Alz];this.Gl.DS=[this,this.
Ah4];this.Fw=A._NewObject(C.Ad4,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dn;this.Au._Done();this.Jl._Done();this.HC._Done();this.Pi._Done();this.Vv._Done(
);this.QO._Done();this.X4._Done();this.PU._Done();this.Gm._Done();this.Gl._Done(
);C.Dn._Done.call(this);},_ReInit:function(){C.Dn._ReInit.call(this);this.Au._ReInit(
);this.Jl._ReInit();this.HC._ReInit();this.Pi._ReInit();this.Vv._ReInit();this.QO.
_ReInit();this.X4._ReInit();this.PU._ReInit();this.Gm._ReInit();this.Gl._ReInit(
);this.Pi.S(A.aaL(A.fl.EA));this.Vv.S(A.aaL(A.fl.EA));this.QO.S(A.aaL(A.fl.EA));
this.X4.S(A.aaL(A.fl.EA));this.PU.S(A.aaL(A.fl.EA));},_Mark:function(D){var B;C.
Dn._Mark.call(this,D);if((B=this.Fw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Oy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dh)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.OB={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Bcv],[B=A._GetAutoObject(A.Device.Device),B.A7G,B.A$V],0);
A.pe([this,this.Bcv],this);},Dp:function(){return 16;},F$:function(aIndex){return this.
LanguageToString.BP(this.C5(aIndex));},At:function(E){C.CO.At.call(this,E);A._GetAutoObject(
A.Device.Device).Anb(E);},Bcv:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){C.CO._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.OB;this.Co.Set(0,0);this.Co.Set(1,1);this.Co.Set(2,5);this.Co.
Set(3,3);this.Co.Set(4,8);this.Co.Set(5,9);this.Co.Set(6,7);this.Co.Set(7,6);this.
Co.Set(8,10);this.Co.Set(9,2);this.Co.Set(10,11);this.Co.Set(11,12);this.Co.Set(
12,13);this.Co.Set(13,14);this.Co.Set(14,15);this.Co.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.CO;this.LanguageToString._Done();C.CO._Done.
call(this);},_ReInit:function(){C.CO._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.CO._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.Q4={TemperatureUnitToString:
null,Dp:function(){return 2;},C5:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BP(aIndex);},DK:function(A2){return A2;},Hl:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Awp(E);}
,Init:function(aArg){var B;A.zX([this,this.BeQ],[B=A._GetAutoObject(A.Device.Device
),B.AqZ,B.AsI],0);A.pe([this,this.BeQ],this);},BeQ:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B9,this.B_],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.Q4;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
AT5={Ai$:null,Acd:null,Ko:null,AP:null,A9:null,Bg:function(aSize){C.Bb.Bg.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Ko.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A9.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ai$.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.Acd.H(this.Ai$.M);},Ai:function(Ae){C.Bb.Ai.call(
this,Ae);this.Ko.L(this.V.AQ);},Init:function(aArg){},Ce:function(Ac){if(!this.AY
)return;this.Hu=Ac;if(!!this.AY){var Ak_=this.AY.Hz(Ac,6);var Apt=this.AY.CD(Ac,
7);var Atv=this.AY.IV(Ac,9);this.U(A._GetAutoObject(A.acj.KD).AB$(Ak_));this.Ko.
R(A._GetAutoObject(A.acj.KD).A5y(Ak_));this.Acd.R(A._GetAutoObject(A.Device.Converter
).AkC(Apt));this.Acd.L(A._GetAutoObject(A.acj.Assessment).Xd(Atv));this.Ai$.L(A.
_GetAutoObject(A.acj.Assessment).Qd(Atv));this.Am();}},_Init:function(aArg){C.Bb.
_Init.call(this,aArg);A.acg.AJ._Init.call(this.Ai$={I:this},0);A.acg.Text._Init.
call(this.Acd={I:this},0);A.acg.Text._Init.call(this.Ko={I:this},0);A.acg.AJ._Init.
call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A9={I:this},0);this.__proto__=
C.AT5;this.V.H(OV);this.Acd.L(A.jb.Text);this.Ko.R(SX);this.Ko.L(A.jb.Text);this.
AP.L(A.jb.Bc);this.A9.H(Axl);this.A9.L(A.jb.Bc);this.J(this.Ai$,0);this.J(this.Acd
,0);this.J(this.Ko,0);this.J(this.AP,0);this.J(this.A9,0);this.Acd.S(A.aaL(A.fl.
Ah));this.Ko.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.Bb;this.Ai$._Done();this.Acd._Done();this.Ko._Done();this.AP._Done();this.A9._Done(
);C.Bb._Done.call(this);},_ReInit:function(){C.Bb._ReInit.call(this);this.Ai$._ReInit(
);this.Acd._ReInit();this.Ko._ReInit();this.AP._ReInit();this.A9._ReInit();this.
Acd.S(A.aaL(A.fl.Ah));this.Ko.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bb._Mark.
call(this,D);if((B=this.Ai$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.FT={AY:null,AN:null,Cm:null,AD:
null,AeU:null,Qw:null,KF:A.jV,Le:null,AUp:true,Hc:function(G){var B;var FW=this.
AD.GT;var Aa=(C.Bb.isPrototypeOf(B=this.AD.Cf)?B:null);if(!Aa)return;Aa.Y6(this.
AY);Aa.Ce(FW);Aa.AN=this.AN;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GW]));
},NS:function(E){if(E===this.Le)return;this.Le=E;this.AD.NS(E);},Y6:function(E){
if(this.AY===E)return;if(!!this.AY)A.z9([this,this.Ce],this.AY,0);this.AY=E;if(!
!E)A.zV([this,this.Ce],E,0);A.pe([this,this.Ce],this);},Ce:function(G){if(this.AUp===
false)return;if(!!this.AY){this.AD.Jn(this.AY.Cb());this.AD.Abg(0,this.AD.AV-1);
}else this.AD.Jn(0);if((this.AD.AV>0)&&(this.FA()<0))this.GX(0);if(this.FA()>=this.
AD.AV){this.GX(0);this.AD.Gh(0);}if(this.AD.AV<=0){this.Qw.Y(true);this.GX(-1);}
else{this.Qw.Y(false);this.AAY(null,null);}},E9:function(G){var B;this.AeU.Mq(this.
AD.GW*this.AD.AV);this.AeU.Ms((B=this.AD.M)[3]-B[1]);this.AeU.Mr(-this.AD.Bq);},
Dv:function(G){if(this.AD.AV>0){switch(this.Cm.CL){case 4:if(this.FA()>0)this.GX(
this.FA()-1);break;case 5:if(this.FA()<(this.AD.AV-1))this.GX(this.FA()+1);break;
default:this.Cm.NC=true;}this.AD.Hy(this.FA(),true,null,null);}else if((this.Cm.
CL!==4)&&(this.Cm.CL!==5))this.Cm.NC=true;},Y7:function(E){if(A.aa0(this.AN,E))return;
this.AN=E;this.AD.Abg(0,this.AD.AV);},GX:function(E){this.AD.GX(E);this.AD.Hy(E,
true,null,null);},FA:function(){return this.AD.Gi;},Dt:function(E){if(this.KF===
E)return;this.KF=E;this.Qw.R(E);},AAY:function(AcC,EX){this.AD.AAY(AcC,EX);},ASN:
function(E){if(this.AUp===E)return;this.AUp=E;if(E)A.pe([this,this.Ce],this);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Core.BK._Init.call(this.Cm={I:this
},0);A.Core.CJ._Init.call(this.AD={I:this},0);C.Aw._Init.call(this.AeU={I:this},
0);A.acg.Text._Init.call(this.Qw={I:this},0);this.__proto__=C.FT;this.H(SY);this.
Le=C.Bb;this.Cm.Filter=147;this.AD.AX(0x3F);this.AD.H(SY);this.AD.AeD(40);this.AeU.
AX(0x3A);this.AeU.H(Asi);this.Qw.AX(0x3F);this.Qw.H(Axm);this.Qw.HH(10);this.Qw.
KL(true);this.Qw.A3(0xA);this.Qw.L(A.jb.Text);this.J(this.AD,0);this.J(this.AeU,
0);this.J(this.Qw,0);this.Cm.BL=[this,this.Dv];this.Cm.DS=[this,this.Dv];this.AD.
Ej=[this,this.E9];this.AD.Hc=[this,this.Hc];this.Qw.S(A.aaL(A.fl.Ah));},_Done:function(
){this.__proto__=A.Core.O;this.Cm._Done();this.AD._Done();this.AeU._Done();this.
Qw._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Cm._ReInit();this.AD._ReInit();this.AeU._ReInit();this.Qw._ReInit();this.
Qw.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AN)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AeU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Qw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Bb={AY:null,Hu:-1,CU:function(){this.Ce(this.Hu);},Ai:function(Ae){var B;C.Cj.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hu%2)===1)this.Background.L(A.
jb.CG);else this.Background.L(A.jb.C1);}},Y6:function(E){if(this.AY===E)return;this.
AY=E;},Ce:function(Ac){A.ab5("%s",Axn);},_Init:function(aArg){C.Cj._Init.call(this
,aArg);this.__proto__=C.Bb;},_ReInit:function(){C.Cj._ReInit.call(this);this.CU(
);},_Mark:function(D){var B;C.Cj._Mark.call(this,D);if((B=this.AY)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.GN={Be:null,Fo:null
,DI:null,Fn:null,VE:null,JB:null,KF:A.jV,AeV:false,Init:function(aArg){var B;A.zX([
this,this.A1Q],[B=A._GetAutoObject(A.Device.Device),B.ADL,B.AHZ],0);A.zX([this,this.
A1Q],[B=A._GetAutoObject(A.Device.Device),B.A7n,B.A$J],0);A.zV([this,this.AfJ],A.
_GetAutoObject(A.Device.Device).Ap,0);A.zV([this,this.Acj],A._GetAutoObject(A.Device.
Device).Ap,0);A.zX([this,this.By5],[B=A._GetAutoObject(A.Device.Helper),B.UJ,B.UK
],0);A.pe([this,this.Acj],this);A.pe([this,this.AZl],this);A.pe([this,this.AwT],
this);},We:function(G){this.Af5();if(!A._GetAutoObject(A.Device.Device).JB){this.
A3F(A.aaR(A.acf.Bh8),[this,this.BiJ],1);this.A3F(A.aaR(A.acf.Bm_),[this,this.BiI
],0);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.BhH));A._GetAutoObject(
C.Bz).Fu();}var P;for(P=this.JB.Dp()-1;P>=0;P=P-1)switch(this.JB.C5(P)){case 0:this.
Af4(A.aaR(A.acf.Xw),[this,this.ASO],0);break;case 1:this.Af4(A.aaR(A.acf.Temperature
),[this,this.ASQ],1);break;case 2:this.Af4(A.aaR(A.acf.Rating),[this,this.ASP],2
);break;case 3:this.Af4(A.aaR(A.acf.Ae7),[this,this.ASR],3);break;default:A.ab5(
"%s",Axo);}A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.A41
));A._GetAutoObject(A.Device.Device).Cd(6);},Bun:function(s){this.We(s);},Dv:function(
G){var DW=(A.Core.BK.isPrototypeOf(G)?G:null);var Afy=this.JB.DK(A._GetAutoObject(
A.Device.Device).JB);if(this.AeV)return;switch(DW.CL){case 6:{Afy=Afy-1;if(Afy<0
)Afy=this.JB.Dp()-1;A._GetAutoObject(A.Device.Device).AbF(this.JB.C5(Afy));}break;
case 7:{Afy=Afy+1;if(Afy>=this.JB.Dp())Afy=0;A._GetAutoObject(A.Device.Device).AbF(
this.JB.C5(Afy));}break;default:DW.NC=true;}},Cx:function(G){if(this.DI.Azj()){this.
DI.AcL();if(this.DI.Azj()===false)this.Be.ASN(true);return;}else if(this.AeV)this.
A2I(this);if(!!this.Be)this.Be.ASN(true);},EV:function(G){if(!!this.Be)this.Be.ASN(
false);},AwT:function(G){var B;if(!!this.Be)this.HI(this.Be);this.Be=A._NewObject(
C.ALJ,0);this.Be.H(AnV);this.Be.Y6(A._GetAutoObject(A.Device.Device).Ap);this.Be.
Y7([this,this.AIa]);if(!!this.Fo)this.Be.A8p([B=this.Fo,B.A7V,B.A8$]);this.A20(this
);this.J(this.Be,0);if(this.AeV===false)this.A8(this.Be);this.A1Q(this);this.Bm8(
this);},A8l:function(G){A._GetAutoObject(A.Device.Device).Cd(0);this.Dl(C.Ya);this.
Ec.AN=[this,this.AIa];this.AKA(this);this.Ec.Ar(true);this.A8(this.Ec);this.AeV=
true;},BiP:function(G){var B;A._GetAutoObject(A.Device.Device).Cd(0);if(!this.Be
)return;var Aa=(C.ABn.isPrototypeOf(B=this.Be.AD.Bht(this.Be.AD.Gi))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).HF(Aa.Hu);else A._GetAutoObject(A.Device.
Helper).W.Hd();this.AfR();},Aly:function(G){var F;if(!this.Fn)this.A42(this);else
switch((F=this.Fn,F[1].call(F[0]))){case 0:this.A42(this);break;case 1:this.Bgp(
this);break;case 9:this.A43(this);break;case 4:this.A45(this);break;case 6:this.
A48(this);break;case 8:this.AM_(this);break;case 2:this.A5a(this);break;case 3:this.
Bgq(this);break;case 7:this.Bgr(this);break;case 5:this.Bgs(this);break;case 10:
this.Bgu(this);break;case 11:this.A44(this);break;case 12:this.A4$(this);break;case
13:this.A5b(this);break;case 14:this.A46(this);break;case 18:this.A47(this);break;
case 15:this.A49(this);break;case 16:this.A5c(this);break;case 17:this.A4_(this);
break;default:A.ab5("%s%e",Axp,(F=this.Fn,F[1].call(F[0])));}},AIa:function(s){this.
Aly(s);},BjZ:function(G){var B;this.Dl(C.J$);this.Ec.AN=null;this.AeV=false;this.
Acj(this);var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).
Ap.Filter){Filter=A._GetAutoObject(A.Device.Device).Ap.Filter.GA();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DX(1,4))?B:null);if(!!FilterCriterion
)Filter.QW(FilterCriterion);A._GetAutoObject(A.Device.Device).Ap.Bh(Filter);}this.
N.TO.Dm(255);this.N.TP.Dm(255);this.A8(this.Be);this.Ec.Ar(false);},AmZ:function(
G){A._GetAutoObject(C.AW).Fl();},Dt:function(E){if(this.KF===E)return;this.KF=E;
this.A20(this);},Aa3:function(){switch(A._GetAutoObject(A.Device.Device).JB){case
0:return this.BfA(A._GetAutoObject(A.Device.Device).Al5);case 2:return C.AMl;case
1:return C.AMm;case 3:return C.AMo;case 8:case 9:case 10:case 4:case 5:case 6:return C.
Ajd;case 7:return C.ABm;case 11:return C.ABl;default:throw new Error(Asj);}},Aa4:
function(){switch(A._GetAutoObject(A.Device.Device).JB){case 0:return this.BfB(A.
_GetAutoObject(A.Device.Device).Al5);case 2:return C.ACF;case 1:return C.AOR;case
3:return C.AOT;case 4:return C.ACC;case 8:case 9:case 10:case 5:case 6:return C.
Ajz;case 7:return C.ACE;case 11:return C.ACD;default:throw new Error(Asj);}},A1Q:
function(G){if(!!this.Be){this.Be.NS(this.Aa3());this.Bnc(this);}},Bnc:function(
G){var B;if(!!this.Fo)this.HI(this.Fo);this.Fo=(C.Dw.isPrototypeOf(B=A._NewObject(
this.Aa4(),0))?B:null);this.Fo.H(JR);if(!!this.Be)this.Be.A8p([B=this.Fo,B.A7V,B.
A8$]);this.J(this.Fo,0);},BiN:function(G){this.QY(this);A._GetAutoObject(A.Device.
Device).Cd(0);},ASO:function(G){A._GetAutoObject(A.Device.Device).Cd(0);A._GetAutoObject(
A.Device.Device).AbF(0);},ASQ:function(G){A._GetAutoObject(A.Device.Device).Cd(0
);A._GetAutoObject(A.Device.Device).AbF(1);},ASP:function(G){A._GetAutoObject(A.
Device.Device).Cd(0);A._GetAutoObject(A.Device.Device).AbF(2);},ASR:function(G){
A._GetAutoObject(A.Device.Device).Cd(0);A._GetAutoObject(A.Device.Device).AbF(3);
},QY:function(G){A._GetAutoObject(A.Device.Device).Ap.Bh(A._GetAutoObject(A.Device.
Helper).Mk());},AZl:function(s){this.QY(s);},HJ:function(G){if(this.AeV){this.AKA(
this);return;}this.N.CT(A.aaL(A.ach.EU));this.N.Cn(A.aaL(A.ach.ACY));this.N.C3(A.
aaL(A.ach.Options));this.N.Cw=[this,this.AmZ];this.N.Ci=[this,this.A8l];this.N.Cc=[
this,this.Bun];this.N.Ho(A.jV);this.N.FC(A.jV);this.N.BZ(A.jV);if(!A._GetAutoObject(
A.Device.Device).Ap.Cb()){this.N.IX.Dm(100);this.N.Ci=null;}else this.N.IX.Dm(255
);},AH9:function(s){this.HJ(s);},Af4:function(P5,P6,AIx){if(A._GetAutoObject(A.Device.
Device).JB===AIx)A._GetAutoObject(C.Bz).Adt(P5,P6,true);else A._GetAutoObject(C.
Bz).Adt(P5,P6,false);},AfJ:function(G){this.A20(this);if(this.AeV)A.pe([this,this.
AKA],this);},AfR:function(){A._GetAutoObject(C.AW).BS(9);},A20:function(G){if(!this.
Be)return;if(!A._GetAutoObject(A.Device.Device).Ap.Qx()||!A._GetAutoObject(A.Device.
Device).Ap.Filter)this.Be.Dt(A.aaR(A.acf.ADB));else if(A._GetAutoObject(A.Device.
Helper).AqD(A._GetAutoObject(A.Device.Device).Ap.Filter))this.Be.Dt(this.KF);else
if(!A._GetAutoObject(A.Device.Device).Ap.Filter.DX(1,4)){if(A._GetAutoObject(A.Device.
Helper).ACh(A._GetAutoObject(A.Device.Device).Ap.Filter)===1)this.Be.Dt(A.aaR(A.
acf.ANj));else this.Be.Dt(A.aaR(A.acf.ANi));}else this.Be.Dt(A.aaR(A.acf.ARf));}
,ADZ:function(G){var F;A._GetAutoObject(A.Device.Device).Cd(0);if(!!this.Fn)(F=this.
Fn,F[2].call(F[0],0));},Av8:function(E){if(A.aaZ(this.Fn,E))return;if(!!this.Fn)
A.z$([this,this.AZu],this.Fn,0);this.Fn=E;if(!!E)A.zX([this,this.AZu],this.Fn,0);
if(!!E)A.pe([this,this.AZu],this);},AD5:function(G){var F;A._GetAutoObject(A.Device.
Device).Cd(0);if(!!this.Fn)(F=this.Fn,F[2].call(F[0],1));},Awc:function(G){var F;
A._GetAutoObject(A.Device.Device).Cd(0);if(!!this.Fn)(F=this.Fn,F[2].call(F[0],2
));},ASv:function(G){var F;A._GetAutoObject(A.Device.Device).Cd(0);if(!!this.Fn)(
F=this.Fn,F[2].call(F[0],3));},ASJ:function(G){var F;A._GetAutoObject(A.Device.Device
).Cd(0);if(!!this.Fn)(F=this.Fn,F[2].call(F[0],7));},ASK:function(G){var F;A._GetAutoObject(
A.Device.Device).Cd(0);if(!!this.Fn)(F=this.Fn,F[2].call(F[0],5));},A5a:function(
G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(A.Device.Helper).HF(this.Be.
FA());this.DI.Qb(1);}},IR:function(P5,P6,Aou){var F;if(!!this.Fn&&((F=this.Fn,F[
1].call(F[0]))===Aou))A._GetAutoObject(C.Bz).Adt(P5,P6,true);else A._GetAutoObject(
C.Bz).Adt(P5,P6,false);},Bj9:function(G){var F;A._GetAutoObject(A.Device.Device).
Cd(0);if(!!this.Fn)(F=this.Fn,F[2].call(F[0],4));},A45:function(G){if(!this.Be)return;
if(this.M7()){A._GetAutoObject(A.Device.Helper).HF(this.Be.FA());this.DI.Bzw();}
},Bj_:function(G){var F;A._GetAutoObject(A.Device.Device).Cd(0);if(!!this.Fn)(F=
this.Fn,F[2].call(F[0],6));},A48:function(G){if(!this.Be)return;if(this.M7()){A.
_GetAutoObject(A.Device.Helper).HF(this.Be.FA());this.DI.Bzx();}},AM_:function(G
){if(!this.Be)return;if(this.M7()){A._GetAutoObject(A.Device.Helper).HF(this.Be.
FA());this.DI.Qb(1024);}},Blq:function(G){var F;A._GetAutoObject(A.Device.Device
).Cd(0);if(!!this.Fn)(F=this.Fn,F[2].call(F[0],8));},Aj6:function(G){var F;A._GetAutoObject(
A.Device.Device).Cd(0);if(!!this.Fn)(F=this.Fn,F[2].call(F[0],9));},Bgq:function(
G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(A.Device.Helper).HF(this.Be.
FA());this.DI.Qb(2);}},A42:function(G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(
A.Device.Helper).HF(this.Be.FA());if(A._GetAutoObject(A.Device.Helper).AjJ(A._GetAutoObject(
A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.Device.Device).A5(66,true,A.jV
,0,null);else this.AfQ();}},Bgp:function(G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(
A.Device.Helper).HF(this.Be.FA());this.DI.Qb(16);}},AfQ:function(){A._GetAutoObject(
C.AW).BS(37);},Bgr:function(G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(
A.Device.Helper).HF(this.Be.FA());this.DI.Qb(4);}},Bgs:function(G){if(!this.Be)return;
if(this.M7()){A._GetAutoObject(A.Device.Helper).HF(this.Be.FA());this.DI.Qb(8);}
},A43:function(G){var B;if(!this.Be)return;if(this.M7()){A._GetAutoObject(A.Device.
Helper).HF(this.Be.FA());if(this.AeV){A.zX([this,this.AzM],[B=this.DI,B.Am6,B.Jo
],0);this.A2I(this);}this.DI.AcL();}},ALj:function(P5,P6,Bwl){if(Bwl)A._GetAutoObject(
C.Bz).A3D(P5,P6,true);else A._GetAutoObject(C.Bz).A3D(P5,P6,false);},AKA:function(
G){this.N.Ho(A.jV);this.N.BZ(A.jV);this.N.CT(A.aaL(A.ach.Ad9));this.N.Cw=[this,this.
BjZ];this.N.TO.Dm(100);this.N.TP.Dm(100);var FX=A._GetAutoObject(A.Device.Device
).Ap.Cb();if(FX<=0){this.N.Cn(null);this.N.C3(null);this.N.Ci=null;this.N.Cc=null;
this.N.Zc=false;this.N.Zd=false;}else if(FX===1){this.N.Cn(null);this.N.C3(A.aaL(
A.ach.Ad_));this.N.Ci=null;this.N.Cc=[this,this.AIa];this.N.Zc=false;this.N.Zd=false;
}else{this.N.Cn(A.aaL(A.ach.Aqu));this.N.C3(A.aaL(A.ach.AqB));this.N.Ci=[this,this.
A2j];this.N.Cc=[this,this.A2k];this.N.Zc=true;this.N.Zd=true;}},A2j:function(G){
if(!this.Be)return;if(this.Be.FA()<(A._GetAutoObject(A.Device.Device).Ap.Cb()-1)
)this.Be.GX(this.Be.FA()+1);},A2k:function(G){if(!this.Be)return;if(this.Be.FA()>
0)this.Be.GX(this.Be.FA()-1);},Bm8:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var Ba=A._GetAutoObject(A.Device.Device).Ap.K9(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(Ba>=0){this.Be.GX(Ba);A.ab5("%s",Axq);}}},M7:function(){return this.
Be.FA()>=0;},AjV:function(){return A._GetAutoObject(A.Device.Device).Ap.Cb()>5;}
,Af5:function(){this.Bfp();A._GetAutoObject(C.Bz).Qq(A.aaR(A.acf.ATu),[this,this.
A8l]);A._GetAutoObject(C.Bz).Fu();},Acj:function(G){if(this.AeV)this.AKA(this);else
this.HJ(this);},A2I:function(G){var aFilter=A._GetAutoObject(A.Device.Device).Ap.
Filter.GA();var Ayl=aFilter.DX(1,4);if(!!Ayl){aFilter.QW(Ayl);A._GetAutoObject(A.
Device.Device).Ap.Bh(aFilter);if(!!this.Be)this.Be.GX(0);}},AzM:function(G){var B;
if(!this.DI.Go&&this.AeV){A.z$([this,this.AzM],[B=this.DI,B.Am6,B.Jo],0);this.A2I(
this);}},Bl0:function(G){var F;A._GetAutoObject(A.Device.Device).Cd(0);if(!!this.
Fn)(F=this.Fn,F[2].call(F[0],10));},Bgu:function(G){if(!this.Be)return;if(this.M7(
)){A._GetAutoObject(A.Device.Helper).HF(this.Be.FA());this.DI.Qb(256);}},A2b:function(
G){A.pe([this,this.AH9],this);},AZu:function(s){this.A2b(s);},Bj6:function(G){var
F;A._GetAutoObject(A.Device.Device).Cd(0);if(!!this.Fn)(F=this.Fn,F[2].call(F[0]
,11));},A44:function(G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(A.Device.
Helper).HF(this.Be.FA());this.DI.Qb(4096);}},A4$:function(G){if(!this.Be)return;
if(this.M7()){A._GetAutoObject(A.Device.Helper).HF(this.Be.FA());this.DI.Qb(16384
);}},A5b:function(G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(A.Device.
Helper).HF(this.Be.FA());this.Bzg();}},Bzg:function(){A._GetAutoObject(C.AW).Ag9(
86);},A46:function(G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(A.Device.
Helper).HF(this.Be.FA());this.DI.Qb(32768);}},A49:function(G){if(!this.Be)return;
if(this.M7()){A._GetAutoObject(A.Device.Helper).HF(this.Be.FA());this.DI.Qb(65536
);}},A5c:function(G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(A.Device.
Helper).HF(this.Be.FA());this.DI.Qb(131072);}},Bfp:function(){if(!A._GetAutoObject(
A.Device.Device).Ap.Filter||A._GetAutoObject(A.Device.Helper).AqD(A._GetAutoObject(
A.Device.Device).Ap.Filter))A._GetAutoObject(C.Bz).Xv(A.aaR(A.acf.ABq));else A._GetAutoObject(
C.Bz).Qq(A.aaR(A.acf.ABq),[this,this.BiN]);A._GetAutoObject(C.Bz).Qq(A.aaR(A.acf.
Aku),[this,this.BiP]);A._GetAutoObject(C.Bz).Fu();},BfB:function(Aoa){switch(Aoa
){case 0:return C.Ajz;case 1:return C.AOO;default:throw new Error(Acs+Aoa.toFixed(
));}},BfA:function(Aoa){switch(Aoa){case 0:return C.Ajd;case 1:return C.AMi;default:
throw new Error(Acs+Aoa.toFixed());}},BiI:function(G){A._GetAutoObject(A.Device.
Device).Cd(0);A._GetAutoObject(A.Device.Device).Aq8(0);},BiJ:function(G){A._GetAutoObject(
A.Device.Device).Cd(0);A._GetAutoObject(A.Device.Device).Aq8(1);},A3F:function(P5
,P6,Aoa){if(A._GetAutoObject(A.Device.Device).Al5===Aoa)A._GetAutoObject(C.Bz).Adt(
P5,P6,true);else A._GetAutoObject(C.Bz).Adt(P5,P6,false);},A4_:function(G){if(!this.
Be)return;if(this.M7()){A._GetAutoObject(A.Device.Helper).HF(this.Be.FA());this.
DI.Qb(128);}},By5:function(G){var B;if(!this.Be)return;A.pe([B=this.Be,B.Ce],this
);},A47:function(G){if(!this.Be)return;if(this.M7()){A._GetAutoObject(A.Device.Helper
).HF(this.Be.FA());this.DI.Qb(524288);}},Bgt:function(G){if(!this.Be)return;if(this.
M7()){A._GetAutoObject(A.Device.Helper).HF(this.Be.FA());this.DI.Qb(262144);}},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.ACF._Init.call(this.VE={I:this},0);C.
JB._Init.call(this.JB={I:this},0);this.__proto__=C.GN;this.Background.H(Ca);this.
N.Y(true);this.N.OG(true);this.N.OH(true);this.Ec.A8K(A.jb.C1);this.Ec.A8L(A.jb.
Text);this.Dl(C.J$);this.VE.H(JR);this.KF=A.aaR(A.acf.ADB);this.J(this.VE,0);this.
DI=A._GetAutoObject(C.DI);this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.VE._Done();this.JB._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.VE._ReInit();this.JB._ReInit();this.Dt(A.aaR(A.acf.ADB));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Be)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Fo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fn)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.VE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JB)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalListScreen"};C.ABn={AP:null
,A9:null,Uu:null,Acb:null,Init:function(aArg){},Bg:function(aSize){C.Bb.Bg.call(
this,aSize);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Uu.H([this.V.M[2],0,((aSize[0]*80)/100)|0,aSize[
1]]);this.A9.H([this.Uu.M[2]-1,0,this.Uu.M[2]+1,aSize[1]]);this.Acb.H([this.Uu.M[
2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bb.Ai.call(this,Ae);this.Uu.L(this.
V.AQ);this.Acb.L(this.V.AQ);},Ce:function(Ac){if(!this.AY)return;this.Hu=Ac;if(!
!this.AY){this.U(this.AY.CD(Ac,1).toFixed());this.Uu.R(this.AY.CD(Ac,2).toFixed(
));this.Acb.R(this.AY.CD(Ac,3).toFixed());this.Am();}},_Init:function(aArg){C.Bb.
_Init.call(this,aArg);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(
this.A9={I:this},0);A.acg.Text._Init.call(this.Uu={I:this},0);A.acg.Text._Init.call(
this.Acb={I:this},0);this.__proto__=C.ABn;this.AP.L(A.jb.Bc);this.A9.L(A.jb.Bc);
this.Uu.L(A.jb.Text);this.Acb.L(A.jb.Text);this.J(this.AP,0);this.J(this.A9,0);this.
J(this.Uu,0);this.J(this.Acb,0);this.Uu.S(A.aaL(A.fl.Ah));this.Acb.S(A.aaL(A.fl.
Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.Bb;this.AP._Done();this.
A9._Done();this.Uu._Done();this.Acb._Done();C.Bb._Done.call(this);},_ReInit:function(
){C.Bb._ReInit.call(this);this.AP._ReInit();this.A9._ReInit();this.Uu._ReInit();
this.Acb._ReInit();this.Uu.S(A.aaL(A.fl.Ah));this.Acb.S(A.aaL(A.fl.Ah));},_Mark:
function(D){var B;C.Bb._Mark.call(this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Acb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.AdJ={Ou:null,SB:null,Me:null,Init:function(aArg){var B;A.zX([this,this.A1T],[
B=A._GetAutoObject(A.Device.Device),B.Avx,B.Ax3],0);A.zX([this,this.Ac$],[B=A._GetAutoObject(
A.Device.Device),B.Avu,B.Ax2],0);A.pe([this,this.Ac$],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.SB.R(A._GetAutoObject(A.Device.Device).AaE.toFixed()+Axr
);this.Ou.Y(A._GetAutoObject(A.Device.Device).Amc);},Ac$:function(G){this.Am();}
,MT:function(G){A._GetAutoObject(C.AW).Fl();},A1T:function(G){if(A._GetAutoObject(
A.Device.Device).Amc===false){this.Ou.Y(false);A._GetAutoObject(C.AW).Fl();}else
this.Ou.Y(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Ou={I:this},0);A.acg.Text._Init.call(this.SB={I:this},0);C.Me._Init.call(
this.Me={I:this},0);this.__proto__=C.AdJ;var B;this.Background.L(A.jb.C1);this.N.
Y(true);this.N.BZ(A.aaR(A.acf.Ok));this.Ou.H(AGy);this.Ou.R(A.aaR(A.acf.Ou));this.
Ou.L(A.jb.Text);this.Ou.Y(false);this.SB.H(AGz);this.SB.R(AGA);this.SB.L(A.jb.Text
);this.Me.H(AGB);this.J(this.Ou,0);this.J(this.SB,0);this.J(this.Me,0);this.N.Cc=[
this,this.MT];this.Ou.S(A.aaL(A.fl.Ah));this.SB.S(A.aaL(A.fl.Ah));this.Me.At([B=
A._GetAutoObject(A.Device.Device),B.Avu,B.Ax2]);this.Me.A81([B=A._GetAutoObject(
A.Device.Device),B.Avx,B.Ax3]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ou._Done();this.SB._Done();this.Me._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Ou._ReInit();this.SB._ReInit();this.Me._ReInit(
);this.N.BZ(A.aaR(A.acf.Ok));this.Ou.R(A.aaR(A.acf.Ou));this.Ou.S(A.aaL(A.fl.Ah)
);this.SB.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Me)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Me={AdE:null,AdF:null,L6:function(G){var F;if(!!this.Q){this.A03();var AcO=(
F=this.Q,F[1].call(F[0]));if(AcO>20)this.Oq.L(A.jb.ET);else this.Oq.L(A.jb.FZ);this.
Oq.L((this.Oq.AQ&0x00FFFFFF)|(this.Alg(AcO,0,20)<<24));this.Tt.L((this.Tt.AQ&0x00FFFFFF
)|(this.Alg(AcO,21,40)<<24));this.Tu.L((this.Tu.AQ&0x00FFFFFF)|(this.Alg(AcO,41,
60)<<24));this.AdE.L((this.AdE.AQ&0x00FFFFFF)|(this.Alg(AcO,61,80)<<24));this.AdF.
L((this.AdF.AQ&0x00FFFFFF)|(this.Alg(AcO,81,100)<<24));}},A03:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.UN=this.AdF;else if((F=this.Q,F[
1].call(F[0]))>60)this.UN=this.AdE;else if((F=this.Q,F[1].call(F[0]))>40)this.UN=
this.Tu;else if((F=this.Q,F[1].call(F[0]))>20)this.UN=this.Tt;else this.UN=this.
Oq;}else this.UN=null;},_Init:function(aArg){C.Os._Init.call(this,aArg);A.acg.AJ.
_Init.call(this.AdE={I:this},0);A.acg.AJ._Init.call(this.AdF={I:this},0);this.__proto__=
C.Me;this.H(Axs);this.NJ.H(Axs);this.Oq.H(AUT);this.Tt.H(AUU);this.Tu.H(AUV);this.
AdE.H(AUW);this.AdE.L(A.jb.ET);this.AdF.H(AUX);this.AdF.L(A.jb.ET);this.J(this.AdE
,0);this.J(this.AdF,0);this.NJ.Ay(A.aaL(A.ach.AL4));},_Done:function(){this.__proto__=
C.Os;this.AdE._Done();this.AdF._Done();C.Os._Done.call(this);},_ReInit:function(
){C.Os._ReInit.call(this);this.AdE._ReInit();this.AdF._ReInit();},_Mark:function(
D){var B;C.Os._Mark.call(this,D);if((B=this.AdE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.AT0={N1:null,Lm:null,AkH:null,Zx:null,Zw:null,CU:function(){this.Am();},Init:
function(aArg){var B;A.zX([this,this.Apk],[B=A._GetAutoObject(A.Device.Device),B.
ARU,B.AZf],0);A.zX([this,this.Apk],[B=A._GetAutoObject(A.Device.Device),B.ARX,B.
AZh],0);A.zX([this,this.Apk],[B=A._GetAutoObject(A.Device.Device),B.A75,B.A$5],0
);A.pe([this,this.Apk],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Gw(this
);this.AAM(this);this.BAn(this);this.DC(this);},ByJ:function(G){A._GetAutoObject(
A.Device.Device).Ar3();},Apk:function(G){this.Am();},Gw:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Zx.Y(false);break;case 4:{var A2C;if(!A._GetAutoObject(A.Device.Device).Ae2)A2C=
0;else A2C=((A._GetAutoObject(A.Device.Device).Aw9*100)/A._GetAutoObject(A.Device.
Device).Ae2)|0;this.Zx.Bx(A2C);this.Zx.Y(true);}break;default:A.ab5("%s%e",Ask,A.
_GetAutoObject(A.Device.Device).SyncState);}},BAn:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CG);this.Lm.L(A.jb.Text);this.N1.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.FZ);this.Lm.L(A.jb.Bi);this.N1.L(A.jb.Bi);}break;default:A.ab5(
"%s%e",Ask,A._GetAutoObject(A.Device.Device).SyncState);}},DC:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CT(null);this.N.Cw=null;this.N.BZ(A.jV);this.N.Cc=null;}break;
case 7:{this.N.CT(null);this.N.Cw=null;this.N.BZ(A.aaR(A.acf.Ok));this.N.Cc=[this
,this.ByJ];}break;default:A.ab5("%s%e",Ask,A._GetAutoObject(A.Device.Device).SyncState
);}},AAM:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lm.R(A.aaR(A.acf.BnZ));break;case 1:this.Lm.R(A.aaR(A.acf.BnW));break;
case 2:this.Lm.R(A.aaR(A.acf.BnT));break;case 3:this.Lm.R(A.aaR(A.acf.BnX));break;
case 4:this.Lm.R((A.aaR(A.acf.BnV)+Axt)+A._GetAutoObject(A.Device.Helper).Ne(A._GetAutoObject(
A.Device.Helper).Ne(A.aaR(A.acf.Bmz),PZ,A._GetAutoObject(A.Device.Device).Aw9.toFixed(
)),Axu,A._GetAutoObject(A.Device.Device).Ae2.toFixed()));break;case 5:this.Lm.R(
A.aaR(A.acf.BnY));break;case 7:this.Lm.R(A.aaR(A.acf.BnU));break;default:A.ab5("%s%e"
,Ask,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CP._Init.call(this.N1={I:this},0);C.CP._Init.call(this.Lm={I:this
},0);A.acg.An._Init.call(this.AkH={I:this},0);A.acq.ACH._Init.call(this.Zx={I:this
},0);A.acq.ACI._Init.call(this.Zw={I:this},0);this.__proto__=C.AT0;this.N.Y(true
);this.N1.H(AUY);this.N1.R(A.aaR(A.acf.N1));this.Lm.AX(0x3F);this.Lm.H(AUZ);this.
Lm.A3(0x12);this.AkH.H(AU0);this.AkH.L(A.jb.AR);this.Zx.H(AU1);this.Zx.Ar(false);
this.Zx.Bx(0);this.Zw.BlU(0);this.Zw.A9n(0);this.Zw.A9l(A.jb.AR);this.Zw.A9k(0);
this.Zw.AFe(AGC);this.J(this.N1,0);this.J(this.Lm,0);this.J(this.AkH,0);this.J(this.
Zx,0);this.N1.S(A.aaL(A.fl.EA));this.N1.A7(A.aaL(A.fl.Ah));this.N1.CB(A.aaL(A.fl.
Ak));this.Lm.S(A.aaL(A.fl.Ah));this.Lm.A7(A.aaL(A.fl.Ak));this.Lm.CB(A.aaL(A.fl.
By));this.AkH.Ay(A.aaL(A.ach.AP2));this.Zx.OnSetAppearance(this.Zw);this.Zw.A9m(
A.aaL(A.ach.NM));this.Zw.A9j(A.aaL(A.ach.NM));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.N1._Done();this.Lm._Done();this.AkH._Done();this.Zx._Done(
);this.Zw._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.N1._ReInit();this.Lm._ReInit();this.AkH._ReInit();this.Zx._ReInit();this.
Zw._ReInit();this.N1.R(A.aaR(A.acf.N1));this.N1.S(A.aaL(A.fl.EA));this.N1.A7(A.aaL(
A.fl.Ah));this.N1.CB(A.aaL(A.fl.Ak));this.Lm.S(A.aaL(A.fl.Ah));this.Lm.A7(A.aaL(
A.fl.Ak));this.Lm.CB(A.aaL(A.fl.By));this.CU();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.N1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AkH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aqo={_Init:function(aArg){C.ACz._Init.call(this,aArg
);this.__proto__=C.Aqo;this.A8N(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Co:A.abi(3,0,{0:2,2:1}),Dp:function(
){return 3;},C5:function(aIndex){if(aIndex>=3)return-1;return this.Co.Get(aIndex
);},F$:function(aIndex){return this.GenderToString.BP(this.C5(aIndex));},DK:function(
A2){var P=0;while(P<3){if(this.Co.Get(P)===A2)return P;P=P+1;}return-1;},Hl:function(
){var P=0;var max=-1;while(P<3){if(this.Co.Get(P)>max)max=this.Co.Get(P);P=P+1;}
return max;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal)this.Animal.JJ(
E);},LU:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.AfD],[B=this.Animal,B.Wc,B.JJ],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AfD],[B=this.Animal,B.Wc,B.JJ],0);A.pe([this,this.AfD],this);},AfD:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B9,
this.B_],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Co=[]).__proto__=C.Gender.Co;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Co:A.abi(4,0,{1:1,2:2,3:3}),Dp:function(){return 4;},C5:function(aIndex){if(
aIndex>=4)return-1;return this.Co.Get(aIndex);},F$:function(aIndex){return this.
BirthTypeToString.BP(this.C5(aIndex));},DK:function(A2){var P=0;while(P<4){if(this.
Co.Get(P)===A2)return P;P=P+1;}return-1;},Hl:function(){var P=0;var max=-1;while(
P<4){if(this.Co.Get(P)>max)max=this.Co.Get(P);P=P+1;}return max;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Aj7(E);},A0i:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B9,this.
B_],0);},LU:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.A0i],[B=this.Animal,B.ARy,B.Aj7],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.A0i],[B=this.Animal,B.ARy,B.Aj7],0);A.pe([this,this.A0i],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Co=[]).__proto__=C.BirthType.Co;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Ab6:null,Dp:
function(){return A._GetAutoObject(A.Device.Helper).Adz.My;},C5:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Adz.My)return-1;return A._GetAutoObject(
A.Device.Helper).Adz.Get(aIndex);},F$:function(aIndex){return this.Ab6.BP(this.C5(
aIndex));},DK:function(A2){var P=0;while(P<A._GetAutoObject(A.Device.Helper).Adz.
My){if(A._GetAutoObject(A.Device.Helper).Adz.Get(P)===A2)return P;P=P+1;}return-
1;},Hl:function(){var P=0;var max=-1;while(P<A._GetAutoObject(A.Device.Helper).Ur.
My){if(A._GetAutoObject(A.Device.Helper).Ur.Get(P)>max)max=A._GetAutoObject(A.Device.
Helper).Ur.Get(P);P=P+1;}return max;},At:function(E){C.AC.At.call(this,E);if(!!this.
Animal)this.Animal.DT(E);},A0b:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B9,this.B_],0);},LU:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0b],[B=this.Animal,B.PG,B.DT],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0b],[B=this.Animal,B.PG,B.DT],0);A.pe([
this,this.A0b],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Ab6={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Ab6._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Ab6._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ab6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.ATG={Init:function(aArg){var B;A.pe([this,this.Afi],this);A.zX([this,this.Afi
],[B=A._GetAutoObject(A.Device.Device),B.AqZ,B.AsI],0);},A2J:function(G){A._GetAutoObject(
A.Device.Device).A5(38,true,A.jV,0,[this,this.Baj]);},A2i:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).ArP(this);},A0B:function(G){var F;if(this.A4===1){var BO=this.D0;
this.D0=this.D0-10;if(this.D0<this.Alo)this.D0=this.Alo;if(this.D0<A._GetAutoObject(
A.Device.Device).Zz)this.D0=A._GetAutoObject(A.Device.Device).Zz;if(this.DO!==BO
){if(!!this.JM)(F=this.JM,F[2].call(F[0],this.D0));A.abo(this.JM,0);}}if(this.A4===
2){var BO=this.DO;this.DO=this.DO-10;if(this.DO<this.D0)this.DO=this.D0;if(this.
DO!==BO){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.DO));A.abo(this.JL,0);}}this.
DC(this);this.Am();},A1a:function(G){var F;if(this.A4===1){var BO=this.D0;this.D0=
this.D0+10;if(this.D0>this.DO)this.D0=this.DO;if(this.D0!==BO){if(!!this.JM)(F=this.
JM,F[2].call(F[0],this.D0));A.abo(this.JM,0);}}if(this.A4===2){var BO=this.DO;this.
DO=this.DO+10;if(this.DO>this.Alj)this.DO=this.Alj;if(this.DO!==BO){if(!!this.JL
)(F=this.JL,F[2].call(F[0],this.DO));A.abo(this.JL,0);}}this.DC(this);this.Am();
},Gw:function(G){this.PA.R(AGD+A._GetAutoObject(A.Device.Converter).AkC(this.D0)
);this.PB.R(AGD+A._GetAutoObject(A.Device.Converter).AkC(this.DO));this.Si.R(A._GetAutoObject(
A.acj.Temperature).Alh());},A05:function(AsP){if(AsP===1)return this.PA;else if(
AsP===2)return this.PB;else return null;},_Init:function(aArg){C.Ab4._Init.call(
this,aArg);this.__proto__=C.ATG;this.Alj=5000;this.Alo=3000;this.U(A.aaR(A.acf.AqO
));this.Background.H(Aff);this.V.H(BD);this.V.R(A.aaR(A.acf.AF_));this.V.A3(0x12
);this.Init(aArg);},_ReInit:function(){C.Ab4._ReInit.call(this);this.U(A.aaR(A.acf.
AqO));this.V.R(A.aaR(A.acf.AF_));},_className:"Application::SettingsItemThresholdsTemp"
};C.Eu={Background:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.
AJ._Init.call(this.Background={I:this},0);this.__proto__=C.Eu;this.H(BD);this.Background.
H(BD);this.Background.L(A.jb.CG);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AN:null,AaH:null,AaL:null,AaJ:
null,Background:null,AaG:null,AaK:null,AaI:null,Ajh:null,AqU:null,Vq:null,A6:0,Byp:
function(G){if(this.Ajh.CL===6){if(this.A6===1)this.Anh(2);else if(this.A6===2)this.
Anh(3);else this.Anh(1);}else if(this.Ajh.CL===7){if(this.A6===3)this.Anh(2);else
if(this.A6===2)this.Anh(1);else this.Anh(3);}},Anh:function(E){if(this.A6===E)return;
this.A6=E;switch(this.A6){case 3:this.Background.H(this.AaG.M);break;case 2:this.
Background.H(this.AaK.M);break;case 1:this.Background.H(this.AaI.M);break;default:
this.Background.H(AnW);}},IP:function(G){var B;if(!!this.AN)(B=this.AN)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Hf._Init.
call(this.AaH={I:this},0);A.acg.Hf._Init.call(this.AaL={I:this},0);A.acg.Hf._Init.
call(this.AaJ={I:this},0);A.acg.An._Init.call(this.Background={I:this},0);A.acg.
Ad0._Init.call(this.AaG={I:this},0);A.acg.Ad0._Init.call(this.AaK={I:this},0);A.
acg.Ad0._Init.call(this.AaI={I:this},0);A.Core.BK._Init.call(this.Ajh={I:this},0
);A.Core.BK._Init.call(this.AqU={I:this},0);A.Graphics.ALV._Init.call(this.Vq={I:
this},0);this.__proto__=C.Rating;this.H(AU2);this.AaH.H(AGE);this.AaH.L(A.jb.Text
);this.AaH.Anf(AkN);this.AaH.NV(3);this.AaH.Y(true);this.AaL.H(AGF);this.AaL.L(A.
jb.Text);this.AaL.Anf(AkN);this.AaL.NV(3);this.AaL.Y(true);this.AaJ.H(AGG);this.
AaJ.L(A.jb.Text);this.AaJ.Anf(AkN);this.AaJ.NV(3);this.AaJ.Y(true);this.Background.
H(AnW);this.Background.L(A.jb.AR);this.AaG.H(AGE);this.AaG.L(A.jb.ET);this.AaG.Anf(
AkN);this.AaG.Y(true);this.AaK.H(AGF);this.AaK.L(A.jb.H1);this.AaK.Anf(AkN);this.
AaK.Y(true);this.AaI.H(AGG);this.AaI.L(A.jb.FZ);this.AaI.Anf(AkN);this.AaI.Y(true
);this.Ajh.Filter=147;this.AqU.Filter=1;this.Vq.Bkx(360);this.Vq.BlJ(22);this.Vq.
BlS(2);this.J(this.AaH,0);this.J(this.AaL,0);this.J(this.AaJ,0);this.J(this.Background
,0);this.J(this.AaG,0);this.J(this.AaK,0);this.J(this.AaI,0);this.AaH.Y8(this.Vq
);this.AaL.Y8(this.Vq);this.AaJ.Y8(this.Vq);this.Background.Ay(A.aaL(A.ach.NL));
this.AaG.Y8(this.Vq);this.AaK.Y8(this.Vq);this.AaI.Y8(this.Vq);this.Ajh.BL=[this
,this.Byp];this.AqU.BL=[this,this.IP];},_Done:function(){this.__proto__=A.Core.O;
this.AaH._Done();this.AaL._Done();this.AaJ._Done();this.Background._Done();this.
AaG._Done();this.AaK._Done();this.AaI._Done();this.Ajh._Done();this.AqU._Done();
this.Vq._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.AaH._ReInit();this.AaL._ReInit();this.AaJ._ReInit();this.Background.
_ReInit();this.AaG._ReInit();this.AaK._ReInit();this.AaI._ReInit();this.Ajh._ReInit(
);this.AqU._ReInit();this.Vq._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AaH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AaG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaK).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AaI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ajh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Vq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.ArR={AjX:null,ArA:null,Background:null,TF:null,TA:null,Abz:null,Aby:null,Abx:
null,Ab_:null,Ab9:null,Ab8:null,Ab0:null,AbZ:null,Abs:null,Abr:null,AbQ:null,AbP:
null,Ap4:null,Init:function(aArg){},Bin:function(G){this.Abz.R(AGH);this.Aby.R(A.
jV);this.Abx.R(A.jV);this.Ab_.R(AU3);this.Ab9.R(A.jV);this.Ab8.R(A.jV);this.Ab0.
R(A.jV);this.AbZ.R(A.jV);this.Abs.R(A.jV);this.Abr.R(A.jV);this.AbQ.R(A.jV);this.
AbP.R(A.jV);},Bmh:function(G){this.TA.Y(true);this.TF.Y(true);var It=this.If();if(
!It)return;this.TF.R(It.GetFPS().toFixed()+AU4);this.TA.R(AU5);this.TA.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(
this.AjX={I:this},0);A.Core.Timer._Init.call(this.ArA={I:this},0);A.acg.AJ._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.TF={I:this},0);A.acg.
Text._Init.call(this.TA={I:this},0);A.acg.Text._Init.call(this.Abz={I:this},0);A.
acg.Text._Init.call(this.Aby={I:this},0);A.acg.Text._Init.call(this.Abx={I:this}
,0);A.acg.Text._Init.call(this.Ab_={I:this},0);A.acg.Text._Init.call(this.Ab9={I:
this},0);A.acg.Text._Init.call(this.Ab8={I:this},0);A.acg.Text._Init.call(this.Ab0={
I:this},0);A.acg.Text._Init.call(this.AbZ={I:this},0);A.acg.Text._Init.call(this.
Abs={I:this},0);A.acg.Text._Init.call(this.Abr={I:this},0);A.acg.Text._Init.call(
this.AbQ={I:this},0);A.acg.Text._Init.call(this.AbP={I:this},0);A.acg.AJ._Init.call(
this.Ap4={I:this},0);this.__proto__=C.ArR;this.H(Act);this.Ar(false);this.AjX.PJ(
2000);this.AjX.Wf(1);this.AjX.Ar(true);this.ArA.Ar(true);this.Background.AX(0x3F
);this.Background.H(Act);this.Background.L(0x78000000);this.TF.H(AGI);this.TF.A3(
0x14);this.TF.R(A.jV);this.TF.L(0xFFFFFC00);this.TF.Y(false);this.TA.H(Asl);this.
TA.A3(0x11);this.TA.R(A.jV);this.TA.Y(false);this.Abz.H(AGJ);this.Abz.A3(0x11);this.
Abz.R(A.jV);this.Aby.H(AGK);this.Aby.A3(0x11);this.Aby.R(A.jV);this.Abx.H(Axv);this.
Abx.A3(0x14);this.Abx.R(A.jV);this.Ab_.H(AGL);this.Ab_.A3(0x11);this.Ab_.R(A.jV);
this.Ab9.H(Axw);this.Ab9.A3(0x11);this.Ab9.R(A.jV);this.Ab8.H(AU6);this.Ab8.A3(0x14
);this.Ab8.R(A.jV);this.Ab0.H(AU7);this.Ab0.A3(0x11);this.Ab0.R(A.jV);this.AbZ.H(
AU8);this.AbZ.A3(0x14);this.AbZ.R(A.jV);this.Abs.H(AU9);this.Abs.A3(0x11);this.Abs.
R(A.jV);this.Abr.H(AGM);this.Abr.A3(0x14);this.Abr.R(A.jV);this.AbQ.H(AU_);this.
AbQ.A3(0x11);this.AbQ.R(A.jV);this.AbP.H(OW);this.AbP.A3(0x14);this.AbP.R(A.jV);
this.Ap4.H(Axx);this.J(this.Background,0);this.J(this.TF,0);this.J(this.TA,0);this.
J(this.Abz,0);this.J(this.Aby,0);this.J(this.Abx,0);this.J(this.Ab_,0);this.J(this.
Ab9,0);this.J(this.Ab8,0);this.J(this.Ab0,0);this.J(this.AbZ,0);this.J(this.Abs,
0);this.J(this.Abr,0);this.J(this.AbQ,0);this.J(this.AbP,0);this.J(this.Ap4,0);this.
AjX.Mt=[this,this.Bin];this.ArA.Mt=[this,this.Bmh];this.TF.S(A.aaL(A.fl.Ak));this.
TA.S(A.aaL(A.fl.Ak));this.Abz.S(A.aaL(A.fl.Ak));this.Aby.S(A.aaL(A.fl.Ak));this.
Abx.S(A.aaL(A.fl.Ak));this.Ab_.S(A.aaL(A.fl.Ak));this.Ab9.S(A.aaL(A.fl.Ak));this.
Ab8.S(A.aaL(A.fl.Ak));this.Ab0.S(A.aaL(A.fl.Ak));this.AbZ.S(A.aaL(A.fl.Ak));this.
Abs.S(A.aaL(A.fl.Ak));this.Abr.S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.
AbP.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;
this.AjX._Done();this.ArA._Done();this.Background._Done();this.TF._Done();this.TA.
_Done();this.Abz._Done();this.Aby._Done();this.Abx._Done();this.Ab_._Done();this.
Ab9._Done();this.Ab8._Done();this.Ab0._Done();this.AbZ._Done();this.Abs._Done();
this.Abr._Done();this.AbQ._Done();this.AbP._Done();this.Ap4._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AjX._ReInit();this.
ArA._ReInit();this.Background._ReInit();this.TF._ReInit();this.TA._ReInit();this.
Abz._ReInit();this.Aby._ReInit();this.Abx._ReInit();this.Ab_._ReInit();this.Ab9.
_ReInit();this.Ab8._ReInit();this.Ab0._ReInit();this.AbZ._ReInit();this.Abs._ReInit(
);this.Abr._ReInit();this.AbQ._ReInit();this.AbP._ReInit();this.Ap4._ReInit();this.
TF.S(A.aaL(A.fl.Ak));this.TA.S(A.aaL(A.fl.Ak));this.Abz.S(A.aaL(A.fl.Ak));this.Aby.
S(A.aaL(A.fl.Ak));this.Abx.S(A.aaL(A.fl.Ak));this.Ab_.S(A.aaL(A.fl.Ak));this.Ab9.
S(A.aaL(A.fl.Ak));this.Ab8.S(A.aaL(A.fl.Ak));this.Ab0.S(A.aaL(A.fl.Ak));this.AbZ.
S(A.aaL(A.fl.Ak));this.Abs.S(A.aaL(A.fl.Ak));this.Abr.S(A.aaL(A.fl.Ak));this.AbQ.
S(A.aaL(A.fl.Ak));this.AbP.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.AjX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ArA).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.TF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aby)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab9)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ab8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abs)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbP)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ap4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AFS={Fw:null,Dh:null,Au:null,Jl:null,HC:null,T6:null,Bc:null,R9:null,Gm:null
,Gl:null,FN:0,A4:0,BhW:false,Init:function(aArg){},Ai:function(Ae){C.Dn.Ai.call(
this,Ae);this.Hn.Y(false);this.HX.Y(false);if(!!this.Dh){this.R9.R(this.Au.Format(
AU$));this.T6.R(this.Au.Format(AVa));}if(this.A4===1){this.HC.Y(true);this.HC.H(
this.R9.M);this.HC.L(A.jb.Bi);this.R9.L(this.Background.AQ);this.T6.L(A.jb.Bi);}
else if(this.A4===2){this.HC.Y(true);this.HC.H(this.T6.M);this.HC.L(A.jb.Bi);this.
R9.L(A.jb.Bi);this.T6.L(this.Background.AQ);}else{this.HC.Y(false);this.R9.L(this.
V.AQ);this.Bc.L(this.V.AQ);this.T6.L(this.V.AQ);}},Qg:function(G){if(this.Fs===1
)A.pe([this,this.US],this);else if(this.Fs===4)A.pe([this,this.Aig],this);else if(
this.Fs===5)A.pe([this,this.Ah4],this);C.Dn.Qg.call(this,G);},J0:function(G){switch(
this.A4){case 0:C.Dn.J0.call(this,G);break;case 2:break;default:this.Ac_(this);}
},JV:function(G){switch(this.A4){case 0:C.Dn.JV.call(this,G);break;default:this.
Ah3(this);}},Ada:function(G){var F;if(!!this.Dh)this.T9((F=this.Dh,F[1].call(F[0
])));},AbM:function(E){if(A.aaZ(this.Dh,E))return;if(!!this.Dh)A.z$([this,this.Ada
],this.Dh,0);this.Dh=E;if(!!E)A.zX([this,this.Ada],E,0);if(!!E)A.pe([this,this.Ada
],this);},T9:function(E){if(this.FN===E)return;this.FN=E;this.Au.Initialize(this.
FN);this.Am();},Ac_:function(G){this.Fs=1;this.Am();if(this.Bl.Bv){A.pe([this,this.
US],this);this.Bl.Ar(false);}this.Bl.Ar(true);},US:function(G){this.Ep(this.A4+1
);},AlA:function(G){this.Fs=4;this.Am();if(this.Bl.Bv){A.pe([this,this.Aig],this
);this.Bl.Ar(false);}this.Bl.Ar(true);},Alz:function(G){this.Fs=5;this.Am();if(this.
Bl.Bv){A.pe([this,this.Ah4],this);this.Bl.Ar(false);}this.Bl.Ar(true);},Aig:function(
G){var B;var F;var BO=this.FN;if(this.A4===1)this.Au.Ana(this.Au.AjA+1);if(this.
A4===2)this.Au.And(this.Au.Avn+1);this.Au.Ang(0);this.T9(((B=(this.Au.JI()|0))<0
)?B+0x100000000:B);if(this.FN!==BO){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],this.
FN));A.abo(this.Dh,0);}},Ah4:function(G){var B;var F;var BO=this.FN;if(this.A4===
1)this.Au.Ana(this.Au.AjA-1);if(this.A4===2)this.Au.And(this.Au.Avn-1);this.Au.Ang(
0);this.T9(((B=(this.Au.JI()|0))<0)?B+0x100000000:B);if(this.FN!==BO){if(!!this.
Dh)(F=this.Dh,F[2].call(F[0],this.FN));A.abo(this.Dh,0);}},DC:function(G){var F;
if(!this.N)return;switch(this.A4){case 1:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.
ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this
,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV
);(F=this.N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.Ad_
));(F=this.N,F[1].call(F[0])).BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.
US];}break;case 2:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].
call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G5];(F=this.N,F[1].
call(F[0])).Cn(A.aaL(A.ach.AmA));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[
1].call(F[0])).Ci=[this,this.Ah3];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,
F[1].call(F[0])).BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;default:this.
Fw.Akr((F=this.N,F[1].call(F[0])));}},FJ:function(G){this.Ep(1);},G5:function(G){
this.Ep(0);},Ep:function(EE){var F;if(!this.A4)this.Fw.Ajb((F=this.N,F[1].call(F[
0])));this.A4=EE;this.BhW=true;if((this.A4<0)||(this.A4>2))this.A4=0;this.DC(this
);this.Gm.Bv=!!this.A4;this.Gl.Bv=!!this.A4;this.Am();},Ah3:function(G){if(this.
A4>1)this.Ep(this.A4-1);},_Init:function(aArg){C.Dn._Init.call(this,aArg);A.Core.
Bt._Init.call(this.Au={I:this},0);A.Core.BK._Init.call(this.Jl={I:this},0);A.acg.
AJ._Init.call(this.HC={I:this},0);A.acg.Text._Init.call(this.T6={I:this},0);A.acg.
Text._Init.call(this.Bc={I:this},0);A.acg.Text._Init.call(this.R9={I:this},0);A.
Core.BK._Init.call(this.Gm={I:this},0);A.Core.BK._Init.call(this.Gl={I:this},0);
this.__proto__=C.AFS;this.H(UI);this.V.R(AVb);this.V.L(A.jb.Bi);this.Hn.Y(false);
this.HX.Y(false);this.Jl.Filter=1;this.HC.H(AVc);this.HC.L(0x55FFFFFF);this.T6.H(
AVd);this.T6.I0(true);this.Bc.H(AVe);this.Bc.A3(0x14);this.Bc.R(AVf);this.R9.H(AGN
);this.R9.I0(true);this.R9.A3(0x14);this.Gm.Filter=4;this.Gm.Bv=false;this.Gl.Filter=
5;this.Gl.Bv=false;this.J(this.HC,0);this.J(this.T6,0);this.J(this.Bc,0);this.J(
this.R9,0);this.Jl.BL=[this,this.Ac_];this.T6.S(A.aaL(A.fl.EA));this.Bc.S(A.aaL(
A.fl.EA));this.R9.S(A.aaL(A.fl.EA));this.Gm.BL=[this,this.AlA];this.Gm.DS=[this,
this.Aig];this.Gl.BL=[this,this.Alz];this.Gl.DS=[this,this.Ah4];this.Fw=A._NewObject(
C.Ad4,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Dn;this.Au._Done();
this.Jl._Done();this.HC._Done();this.T6._Done();this.Bc._Done();this.R9._Done();
this.Gm._Done();this.Gl._Done();C.Dn._Done.call(this);},_ReInit:function(){C.Dn.
_ReInit.call(this);this.Au._ReInit();this.Jl._ReInit();this.HC._ReInit();this.T6.
_ReInit();this.Bc._ReInit();this.R9._ReInit();this.Gm._ReInit();this.Gl._ReInit(
);this.T6.S(A.aaL(A.fl.EA));this.Bc.S(A.aaL(A.fl.EA));this.R9.S(A.aaL(A.fl.EA));
},_Mark:function(D){var B;C.Dn._Mark.call(this,D);if((B=this.Fw)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Dh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gl
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"};C.
CP={B4:null,Amq:null,Aqg:null,Ej:null,Text:null,String:A.jV,Bce:A.jV,J5:0x12,AKj:
0,AQ:0xFFFFFFFF,Bcf:true,GQ:function(CK){var LB=(A.Core.AQz.isPrototypeOf(CK)?CK:
null);if(!!LB)this.BAy(this);return A.Core.O.GQ.call(this,CK);},Bg:function(aSize
){A.Core.O.Bg.call(this,aSize);A.pe([this,this.At2],this);},Db:function(aFilter){
return A.abh(this.Text.Db(),this.M.slice(0,2));},R:function(E){if(this.String===
E)return;this.String=E;if(this.Bcf){this.Bce=E;this.Bcf=false;}this.AKj=E.length;
A.pe([this,this.At2],this);},S:function(E){if(this.B4===E)return;this.B4=E;A.pe([
this,this.At2],this);},A7:function(E){if(this.Amq===E)return;this.Amq=E;A.pe([this
,this.At2],this);},CB:function(E){if(this.Aqg===E)return;this.Aqg=E;A.pe([this,this.
At2],this);},A3:function(E){if(E===this.J5)return;this.J5=E;this.Text.A3(E);},At2:
function(G){var B;var AKp=0;if(!this.AKj){this.Text.Y(false);return;}this.Text.Y(
true);this.Text.R(this.String);this.Text.KL(false);if(!!this.B4){AKp=this.B4.X$(
this.String,0,this.AKj);if(AKp<(((B=this.M)[2]-B[0])-(2*this.Text.I1))){this.Text.
S(this.B4);return;}}this.Text.KL(true);if(!!this.Amq){AKp=this.Amq.X$(this.String
,0,this.AKj);this.Text.S(this.Amq);if((AKp<(((B=this.M)[2]-B[0])-(2*this.Text.I1
)))&&(((B=this.Text.Db())[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.Aqg){
this.Text.S(this.Aqg);if(((B=this.Text.Db())[3]-B[1])>((B=this.M)[3]-B[1]))this.
Text.BlL((((this.Text.B4.Ascent+this.Text.B4.Descent)*75)/100)|0);}},L:function(
E){if(E===this.AQ)return;this.AQ=E;this.Text.L(E);},BAy:function(G){this.R(this.
Bce);},QT:function(E){if(A.aa0(this.Ej,E))return;this.Ej=E;this.Text.QT(E);},ARw:
function(){return A.abh(this.Text.Db(),this.M.slice(0,2));},AeP:function(Aoj){return A.
abf(this.M.slice(0,2),this.Text.AeP(Aoj));},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.CP;
this.H(AnX);this.Ar(false);this.Text.AX(0x3F);this.Text.H(AnX);this.Text.R(SX);this.
J(this.Text,0);},_Done:function(){this.__proto__=A.Core.O;this.Text._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Text._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.B4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Amq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aqg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ej)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AutoSizeText"};C.Ajx={Z:null,IC:null,Aei:null,IW:null,M5:null,Aec:
null,Aeh:null,Aeg:null,Aed:null,Aef:null,Aee:null,M6:null,NN:null,Ml:null,C9:function(
E){C.VD.C9.call(this,E);this.IC.L(E);this.Aei.L(E);this.IW.L(E);this.M5.L(E);this.
Ml.L(E);this.Aec.L(E);this.M6.L(E);this.NN.L(E);this.Aeh.L(E);this.Aeg.L(E);this.
Aed.L(E);this.Aef.L(E);this.Aee.L(E);},Eq:function(G){C.VD.Eq.call(this,G);this.
Xs(8,1,this.M5);this.Xs(12,1,this.Ml);this.Xs(11,1,this.Aec);this.Xs(7,1,this.M6
);this.Xs(14,1,this.NN);this.Xs(1,4,this.IC);this.Xs(1,1,this.Aei);this.Xs(4,1,this.
IW);this.Xs(22,1,this.Aeh);this.Xs(26,1,this.Aeg);this.Xs(30,1,this.Aed);this.Xs(
19,1,this.Aef);this.Xs(31,1,this.Aee);this.Text.Y(!this.Z.Vx(null,0x1));},Xs:function(
AIy,EF,Afu){var AAu=false;if(!!A._GetAutoObject(A.Device.Device).Ap.Filter){var AcY=
A._GetAutoObject(A.Device.Device).Ap.Filter.DX(AIy,EF);if(!!AcY){AAu=true;switch(
AIy){case 14:{var AyK=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AcY)?AcY:
null);if(!!AyK)Afu.Ay(A._GetAutoObject(A.Device.Converter).A3T(AyK.A6));}break;case
7:{var AyK=(A.Device.GenderFilterCriterion.isPrototypeOf(AcY)?AcY:null);if(!!AyK
)Afu.Ay(A._GetAutoObject(A.Device.Converter).Amt(AyK.A6));}break;case 1:if(EF===
4)Afu.Ay(A.aaL(A.ach.ACY));else if(AcY.Operator===4)AAu=false;break;case 22:switch(
AcY.Operator){case 0:case 3:Afu.Ay(A.aaL(A.ach.APP));break;default:Afu.Ay(A.aaL(
A.ach.AmD));}break;case 26:switch(AcY.Operator){case 0:case 3:Afu.Ay(A.aaL(A.ach.
APN));break;default:Afu.Ay(A.aaL(A.ach.ACM));}break;default:;}}else if((AIy===1)&&(
EF===4)){AAu=true;Afu.Ay(A.aaL(A.ach.Ad$));}}else if((AIy===1)&&(EF===4)){AAu=true;
Afu.Ay(A.aaL(A.ach.Ad$));}Afu.Y(AAu);},_Init:function(aArg){C.VD._Init.call(this
,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.An._Init.call(this.IC={I:this
},0);A.acg.An._Init.call(this.Aei={I:this},0);A.acg.An._Init.call(this.IW={I:this
},0);A.acg.An._Init.call(this.M5={I:this},0);A.acg.An._Init.call(this.Aec={I:this
},0);A.acg.An._Init.call(this.Aeh={I:this},0);A.acg.An._Init.call(this.Aeg={I:this
},0);A.acg.An._Init.call(this.Aed={I:this},0);A.acg.An._Init.call(this.Aef={I:this
},0);A.acg.An._Init.call(this.Aee={I:this},0);A.acg.An._Init.call(this.M6={I:this
},0);A.acg.An._Init.call(this.NN={I:this},0);A.acg.An._Init.call(this.Ml={I:this
},0);this.__proto__=C.Ajx;this.Z.AX(0x3F);this.Z.H(Axy);this.Z.Kd(3);this.IC.H(AGO
);this.Aei.H(AVg);this.Aei.Aj(true);this.IW.H(AVh);this.IW.Aj(true);this.M5.H(AVi
);this.M5.Aj(true);this.Aec.H(AVj);this.Aec.Aj(true);this.Aeh.H(AGP);this.Aeh.Aj(
true);this.Aeg.H(AGP);this.Aeg.Aj(true);this.Aed.H(AVk);this.Aed.Aj(true);this.Aef.
H(AGQ);this.Aef.Aj(true);this.Aee.H(AGQ);this.Aee.Aj(true);this.M6.H(AGR);this.M6.
Aj(true);this.NN.H(AGS);this.NN.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Ml.
H(AGR);this.Ml.Aj(true);this.Kl(this.TM,-3);this.Kl(this.DZ,-3);this.Kl(this.A9,-
3);this.Kl(this.AP,-2);this.J(this.Z,-2);this.J(this.IC,-2);this.J(this.Aei,-2);
this.J(this.IW,-2);this.J(this.M5,-2);this.J(this.Aec,-2);this.J(this.Aeh,-2);this.
J(this.Aeg,-2);this.J(this.Aed,-2);this.J(this.Aef,-2);this.J(this.Aee,-2);this.
J(this.M6,-2);this.J(this.NN,-2);this.J(this.Ml,0);this.IC.Ay(A.aaL(A.ach.Ad$));
this.Aei.Ay(A.aaL(A.ach.APE));this.IW.Ay(A.aaL(A.ach.AO4));this.M5.Ay(A.aaL(A.ach.
ACS));this.Aec.Ay(A.aaL(A.ach.Abc));this.Aeh.Ay(A.aaL(A.ach.AmD));this.Aeg.Ay(A.
aaL(A.ach.ACM));this.Aed.Ay(A.aaL(A.ach.APC));this.Aef.Ay(A.aaL(A.ach.APD));this.
Aee.Ay(A.aaL(A.ach.APB));this.M6.Ay(A.aaL(A.ach.ACU));this.NN.Ay(A.aaL(A.ach.Au3
));this.Ml.Ay(A.aaL(A.ach.AC1));},_Done:function(){this.__proto__=C.VD;this.Z._Done(
);this.IC._Done();this.Aei._Done();this.IW._Done();this.M5._Done();this.Aec._Done(
);this.Aeh._Done();this.Aeg._Done();this.Aed._Done();this.Aef._Done();this.Aee._Done(
);this.M6._Done();this.NN._Done();this.Ml._Done();C.VD._Done.call(this);},_ReInit:
function(){C.VD._ReInit.call(this);this.Z._ReInit();this.IC._ReInit();this.Aei._ReInit(
);this.IW._ReInit();this.M5._ReInit();this.Aec._ReInit();this.Aeh._ReInit();this.
Aeg._ReInit();this.Aed._ReInit();this.Aef._ReInit();this.Aee._ReInit();this.M6._ReInit(
);this.NN._ReInit();this.Ml._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(
D){var B;C.VD._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aei)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aec)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aeg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aef)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.NN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ml)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderFilter"};C.Al3={H0:null,Cx:
function(G){if(A._GetAutoObject(A.Device.Device).Br.Lc())A._GetAutoObject(A.Device.
Device).A5(50,true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),0,null);this.
H0.Gf();this.H0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);C.Q3.Cx.call(
this,G);},AnG:function(){C.Q3.AnG.call(this);switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:{this.Background.L(A._GetAutoObject(A.acj.Temperature).BxE(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Km));this.C6.L(A._GetAutoObject(A.acj.Temperature).BxH(A._GetAutoObject(A.Device.
Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Km));this.JE.L(A._GetAutoObject(
A.acj.Temperature).BxF(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Km));this.Hw.L(A._GetAutoObject(A.acj.Temperature).BxG(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Km));this.Mz.L(this.
JE.AQ);this.TemperatureUnit.L(this.JE.AQ);}break;default:;}},Acj:function(){C.Q3.
Acj.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
N.Cn(A.aaL(A.ach.APX));this.N.C3(A.aaL(A.ach.AmC));}break;case 4:{this.N.Cn(null
);this.N.C3(A.aaL(A.ach.Au$));}break;default:;}},Ws:function(G){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).Km>3240)&&(A._GetAutoObject(A.Device.Device).Km<5460)){A._GetAutoObject(A.Device.
Device).Ahm();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:{this.H0.OnSetTemperature(A._GetAutoObject(A.Device.Device).Km);var BY=A._GetAutoObject(
A.Device.Converter).Ar6(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Km);this.H0.OnSetRatingTemperature(BY);this.H0.Cl(A._GetAutoObject(
A.Device.Device).Br);A._GetAutoObject(C.AW).Fl();}break;case 4:this.AJQ(this);break;
default:;}},Akx:function(G){C.Q3.Akx.call(this,G);switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 3:A._GetAutoObject(A.Device.Device).Cd(9);break;case 4:
this.AJQ(this);break;default:;}},Axc:function(){C.Q3.Axc.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:this.JE.R(A._GetAutoObject(A.acj.Temperature
).BxM(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device
).Km));break;default:;}},Axd:function(){C.Q3.Axd.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{A._GetAutoObject(A.Device.Device).Wi(A._GetAutoObject(
A.acj.Temperature).BxI(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Km));this.I5.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.
Device).Wi(16711680);this.I5.Ar(true);}break;default:this.I5.Ar(false);}},ATA:function(
){this.C6.Ay(A.aaL(A.ach.Au_));this.C6.Cv(A._GetAutoObject(A.acj.Temperature).BxN(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Km));this.NL.Cv(0);},_Init:function(aArg){C.Q3._Init.call(this,aArg);this.__proto__=
C.Al3;this.Dl(C.IA);this.H0=A._NewObject(A.Device.Rating,0);},_Mark:function(D){
var B;C.Q3._Mark.call(this,D);if((B=this.H0)&&(B._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::AnimalActionTemperatureScreen"};C.Ahb={NZ:null,DD:null
,Ic:null,Bc:null,AtV:null,String:A.jV,Aw3:A.jV,Mp:7,AjP:2,KM:0,ATN:false,Init:function(
aArg){},Bg:function(aSize){A.Core.O.Bg.call(this,aSize);this.DD.H([0,0,aSize[0]-
this.AjP,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DD.S(A.aaL(A.fl.By));else this.DD.
S(A.aaL(A.fl.Ak));this.Ic.S(this.DD.B4);this.Ic.H(this.DD.M);this.Bc.H([].concat([
0,aSize[1]-2],aSize));A.pe([this,this.Wm],this);},R:function(E){if(this.String===
E)return;this.String=E;this.DD.R(E);},Ag7:function(E){if(this.Aw3===E)return;this.
Aw3=E;this.Ic.R(E);},AbL:function(E){this.Mp=E;if(E<10)this.ASh(2);else if(E<40)
this.ASh(1);else this.ASh(0);A.pe([this,this.Wm],this);},Wm:function(G){var B;while(
!!this.Bc.Ag)this.HI(this.Bc.Ag);if(this.Mp>1){var AcS=this.AN2();var A0Z=this.AN0(
);var AoZ=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;var Azo;var AKc;var Ats;var AlH=
null;if(!!this.NZ&&(this.NZ.AV>0))AlH=this.NZ.KT;while((AcS>=A0Z)&&(AcS>0)){var As5=
A._NewObject(C.Ai7,0);x1=Math.round(((((B=this.M)[2]-B[0])-this.AjP)*(((AcS-A0Z)
/86400)|0))/this.Mp)|0;x2=Math.round(((((B=this.M)[2]-B[0])-this.AjP)*((((AcS-A0Z
)/86400)|0)+1))/this.Mp)|0;while(!!AlH&&(AlH.Timestamp>=AcS)){if(AlH.Timestamp<(
AcS+86400))As5.Oo(AlH.A6,AlH.Timestamp);AlH=AlH.Ag;}var AtE=0;if(As5.AV>0)AtE=((((((
B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]))/As5.AV)|0;else if(this.Mp<10){
AtE=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bc.M)[3]-B[1]);Ats=A._NewObject(A.acg.
Text,0);Ats.H([x1,AoZ,x2,AoZ+AtE]);Ats.S(A.aaL(A.fl.By));Ats.L(A.jb.Text);Ats.R(
A.aaR(A.acf.AeL));this.J(Ats,0);}var AI3=As5.KT;var P=0;while(!!AI3){if(P>=As5.AV
)throw new Error(AVl);Azo=A._NewObject(A.acg.AJ,0);Azo.L(A._GetAutoObject(A.acj.
Assessment).Qd(AI3.A6));if(P===(As5.AV-1))Azo.H([x1,AoZ+(P*AtE),x2,this.Bc.M[1]]
);else Azo.H([x1,AoZ+(P*AtE),x2,AoZ+((P+1)*AtE)]);this.J(Azo,0);AI3=AI3.Ag;P=P+1;
}if(this.ATN){var Bws=A._GetAutoObject(A.Device.Helper).ApU(A._GetAutoObject(A.Device.
Helper).DF());var Bwr=A._GetAutoObject(A.Device.Helper).ApU(AcS);if(Bws===Bwr){var
AKF=A._NewObject(A.acg.Ad0,0);AKF.L(A.jb.Text);var BcB=(x1+this.AjP)+(((x2-x1)/2
)|0);AKF.H([BcB-4,this.Bc.M[1]-4,BcB+4,this.Bc.M[1]]);AKF.Y8(this.AtV);this.J(AKF
,0);}}AcS=AcS-86400;if(this.AjP>0){AKc=A._NewObject(A.acg.AJ,0);AKc.H([x1,AoZ,x1+
this.AjP,AoZ+((((B=this.M)[3]-B[1])/2)|0)]);AKc.L(A.jb.Bc);this.J(AKc,0);}}}},AbN:
function(E){this.NZ=E;A.pe([this,this.Wm],this);},ASh:function(E){if(this.AjP===
E)return;this.AjP=E;A.pe([this,this.Wm],this);},C9:function(E){if(this.KM===E)return;
this.KM=E;this.DD.L(E);this.Ic.L(E);},AN0:function(){var B;return this.AN2()-(((((
B=this.Mp)<0)?B+0x100000000:B)-1)*86400);},AN2:function(){return A._GetAutoObject(
A.Device.Converter).Ahq();},BlO:function(E){if(this.ATN===E)return;this.ATN=E;A.
pe([this,this.Wm],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.
acg.Text._Init.call(this.DD={I:this},0);A.acg.Text._Init.call(this.Ic={I:this},0
);A.acg.AJ._Init.call(this.Bc={I:this},0);C.Axa._Init.call(this.AtV={I:this},0);
this.__proto__=C.Ahb;this.H(BD);this.Ar(false);this.DD.H(Axz);this.DD.HH(5);this.
DD.A3(0x11);this.DD.L(A.jb.Text);this.Ic.H(Axz);this.Ic.HH(5);this.Ic.A3(0x14);this.
Ic.L(A.jb.Text);this.Bc.H(AVm);this.Bc.L(A.jb.Bc);this.KM=A.jb.Text;this.AtV.H(AVn
);this.J(this.DD,0);this.J(this.Ic,0);this.J(this.Bc,0);this.DD.S(A.aaL(A.fl.Ak)
);this.Ic.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.DD._Done();this.Ic._Done();this.Bc._Done();this.AtV._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.DD._ReInit(
);this.Ic._ReInit();this.Bc._ReInit();this.AtV._ReInit();this.DD.S(A.aaL(A.fl.Ak
));this.Ic.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.NZ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AtV)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A3Z={Ag:null,Timestamp:0,A6:0,_Init:function(
aArg){this.__proto__=C.A3Z;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.Ai7={KT:null,MQ:null,AV:0,Oo:
function(A2,P4){var G9;G9=A._NewObject(C.A3Z,0);G9.A6=A2;G9.Timestamp=P4;if(!this.
KT){this.KT=G9;this.MQ=G9;this.AV=1;}else{this.MQ.Ag=G9;this.MQ=G9;this.AV=this.
AV+1;}},_Init:function(aArg){this.__proto__=C.Ai7;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
KT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MQ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Eb={Z:null,Aw:null,Init:function(
aArg){A.pe([this,this.MD],this);},Dv:function(G){var B;var E7=0;var X=this.AR;switch(
this.Cm.CL){case 6:E7=2;break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;
default:;}X=this.R5(X,E7,0x414);if(!!X)this.A8(X);if(!!X&&((X.T&0x400)===0x400))
this.Z.Hy(X,true,null,null);this.DC(this);},Alx:function(G){A._GetAutoObject(C.AW
).Fl();},Apj:function(G){var B;if(!!(C.Cj.isPrototypeOf(B=this.AR)?B:null).Af3)A.
pe((C.Cj.isPrototypeOf(B=this.AR)?B:null).Af3,this);},E9:function(G){var B;this.
Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.
Z.Bq[1]);},DC:function(G){var B;var GL=(C.Cj.isPrototypeOf(B=this.AR)?B:null);if(
!!GL){this.N.Ho(A.jV);this.N.BZ(GL.Aw6);this.N.I4.Dm(255);this.N.HL.Dm(GL.AwA);this.
N.AEn(GL.AuN);this.N.Am_(GL.Amr);this.N.CT(GL.APw);this.N.C3(GL.Aqv);GL.A11(this
);}},MD:function(s){this.DC(s);},G8:function(G){A.pe([this,this.E9],this);},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);
C.Aw._Init.call(this.Aw={I:this},0);this.__proto__=C.Eb;this.Background.H(Q$);this.
Background.L(A.jb.C1);this.N.H(WU);this.N.Ar(false);this.N.Y(true);this.Z.H(E4);
this.Z.Kd(1);this.Aw.H(IK);this.J(this.Z,0);this.J(this.Aw,0);this.Z.Ej=[this,this.
G8];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.Aw.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
Z._ReInit();this.Aw._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceScreen"};C.ASX={Nu:null,AR2:null,AdD:null,Vk:
null,GH:null,PopupTimeout:null,AbR:null,Age:null,PopupIdToString:null,As1:null,Text:
A.jV,Akk:A.jV,AJl:A.jV,AkE:0,AKr:-1,AyJ:-1,AJX:0,ASZ:0,A08:false,CU:function(){this.
A9g(this.PopupIdToString.BP(this.ASZ));},Init:function(aArg){this.Bna(this);},Bfa:
function(G){var B;if(this.AkE>0){this.A9u((this.AkE/1000)|0);this.PopupTimeout.Wf(
0);this.PopupTimeout.PJ(1000);this.PopupTimeout.StartTimer(this);}else this.PopupTimeout.
Aw2(this);},Be8:function(G){var Qn=this.Text;var Afx=this.Akk;var AJV=A.abi(16,A.
jV,null);var index=0;var AyE=0;while(Afx!==A.jV){AyE=Afx.indexOf(A.Device.PopupParamSeparator
,0);if(AyE!==-1){AJV.Set(index,A.ab1(Afx,AyE,(Afx.length-AyE)+1));Afx=A.ab1(Afx,
0,AyE+1);index=index+1;if(index>=16){A.ab5("%s",(AVo+Afx)+AVp);Afx=A.jV;}}else{AJV.
Set(index,Afx);Afx=A.jV;}}index=0;while(index<Qn.length){if((Qn.charCodeAt(index
)||0)===0x7B){var Bcd=Qn.indexOf(String.fromCharCode(0x7D),index);if(Bcd===-1){A.
ab5("%s",(((AVq+Qn)+AVr)+index.toFixed())+Afd);index=Qn.length;}else{var Bd1=(Bcd-
index)-1;var A2y=A.abW(Qn,index+1,Bd1);var AJU=A.wz(A2y,-1,10);Qn=A.ab1(Qn,index
,Bd1+2);if(A2y===AVs)this.Bl5(index);else if(((AJU>0)&&(AJU<=16))&&(this.Akk!==A.
jV)){Qn=A.abU(Qn,AJV.Get(AJU-1),index);if(this.A08===true)this.Bl4(A.wz(AJV.Get(
AJU-1),0,10));}else A.ab5("%s",(AVt+A2y)+AVu);}}index=index+1;}this.Bl3(Qn);},Cx:
function(G){A.pe([this,this.Bfa],this);},Ai:function(Ae){var B;this.AdD.H(A.aaT(
this.GH.Db(),Ahz));this.Vk.H(A.aaT(this.GH.Db(),Ahz));if(!!this.Nu){this.Nu.H(A.
abM(this.Nu.M,this.GH.M[0]));this.Nu.H(A.abO(this.Nu.M,this.GH.M[3]+10));this.Nu.
H(A.abL(this.Nu.M,(B=this.GH.M)[2]-B[0]));this.Nu.H(A.abI(this.Nu.M,8));this.AdD.
H(A.abh(A.aaT(this.GH.Db(),Ahz),AGT));this.Vk.H(A.abh(A.aaT(this.GH.Db(),Ahz),AGT
));}else{this.AdD.H(A.aaT(this.GH.Db(),Ahz));this.Vk.H(A.aaT(this.GH.Db(),Ahz));
}},Dv:function(G){var Jr=(A.Core.BK.isPrototypeOf(G)?G:null);if((Jr.CL===4)&&((this.
Vk.M[1]+this.M[1])<this.M[1])){this.GH.H(A.abO(this.GH.M,this.GH.M[1]+28));this.
Am();}else if((Jr.CL===5)&&((this.Vk.M[3]+this.M[1])>this.N.M[1])){this.GH.H(A.abO(
this.GH.M,this.GH.M[1]-28));this.Am();}if((Jr.CL===6)&&!!this.D3().Cw)this.D3().
AEv(1);else if((Jr.CL===7)&&!!this.D3().Cc)this.D3().AEv(3);},IP:function(G){switch(
this.D3().AgU){case 1:this.Alx(this);break;case 3:this.Apj(this);break;case 2:this.
AzW(this);break;case 0:break;default:A.ab5("%s%e",AVv,this.D3().AgU);}},Alx:function(
G){var B;(B=this.D3().Cw)?B[1].call(B[0],this):null;},Apj:function(G){var B;(B=this.
D3().Cc)?B[1].call(B[0],this):null;},AzW:function(G){var B;(B=this.D3().Ci)?B[1].
call(B[0],this):null;},LI:function(G){this.N.IX.L((this.N.IX.AQ&0x00FFFFFF)|(100<<
24));},EV:function(G){var B;this.PopupTimeout.Aw2(this);},A9g:function(E){if(this.
Text===E)return;this.Text=E;A.pe([this,this.Be8],this);},ByO:function(G){var B;this.
A9u(this.AyJ-1);if(this.AyJ<=0){this.PopupTimeout.Aw2(this);(B=this.AR2)?B[1].call(
B[0],this):null;}},A9i:function(E){if(this.AkE===E)return;this.AkE=E;A.pe([this,
this.Bfa],this);},A85:function(E){if(this.Akk===E)return;this.Akk=E;A.pe([this,this.
Be8],this);},Bl3:function(E){if(this.AJl===E)return;this.AJl=E;this.AAM(this);this.
Bwz(this);},AAM:function(G){if((this.AyJ!==-1)&&(this.AKr!==-1)){var Bxo=this.As1.
Format(AVw);this.GH.R(A.abU(this.AJl,Bxo,this.AKr));}else this.GH.R(this.AJl);this.
GH.H(AGU);},Bl5:function(E){if(this.AKr===E)return;this.AKr=E;this.AAM(this);},A9u:
function(E){if(this.AyJ===E)return;this.AyJ=E;this.As1.AE0(E);A.pe([this,this.AAM
],this);},Bwz:function(G){this.GH.Db();if(this.GH.M[1]<=this.M[1])this.GH.H(A.abO(
this.GH.M,28));this.Am();},A9w:function(E){if(this.A08===E)return;this.A08=E;if(
E===true)A.pe([this,this.Bzn],this);},Bzn:function(G){if(!this.Nu){this.Nu=A._NewObject(
A.acq.ACH,0);this.Nu.Gn(0);this.Nu.E1(100);this.Nu.OnSetAppearance(this.AbR);this.
J(this.Nu,0);this.Ahe(this.Nu,this.GH);}this.Nu.Bx(this.AJX);},Bl4:function(E){if(
this.AJX===E)return;this.AJX=E;if(!!this.Nu)this.Nu.Bx(this.AJX);},Bna:function(
G){var B;this.N.Dm(0);this.Age.Anv(this);},BlF:function(E){if(this.ASZ===E)return;
this.ASZ=E;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AJ._Init.call(
this.AdD={I:this},0);A.acg.CA._Init.call(this.Vk={I:this},0);A.acg.Text._Init.call(
this.GH={I:this},0);A.Core.Timer._Init.call(this.PopupTimeout={I:this},0);A.acq.
ACI._Init.call(this.AbR={I:this},0);A.acl.Ga._Init.call(this.Age={I:this},0);A.Device.
PopupIdToString._Init.call(this.PopupIdToString={I:this},0);A.Core.Bt._Init.call(
this.As1={I:this},0);this.__proto__=C.ASX;var B;this.H(Ca);this.Background.H(E4);
this.Background.L(0x88FFFFFF);this.Background.Y(false);this.Ec.Ar(false);this.Ec.
Y(false);this.AdD.H(AGV);this.AdD.L(A.jb.CG);this.Vk.H(AGV);this.Vk.NV(2);this.Vk.
L(A.jb.Text);this.GH.H(AGU);this.GH.HH(10);this.GH.I0(true);this.GH.Bl2(0);this.
GH.KL(true);this.GH.L(A.jb.Text);this.PopupTimeout.PJ(0);this.AbR.A9n(0);this.AbR.
A9l(A.jb.AR);this.AbR.A9k(0);this.AbR.AFe(AGC);this.Age.HG(1);this.Age.B0=255;this.
Age.Cs=0;this.Kl(this.Ec,-1);this.J(this.AdD,0);this.J(this.Vk,0);this.J(this.GH
,0);this.GH.S(A.aaL(A.fl.Ah));this.PopupTimeout.Mt=[this,this.ByO];this.AbR.A9m(
A.aaL(A.ach.NM));this.AbR.A9j(A.aaL(A.ach.NM));this.Age.Q=[B=this.N,B.AvH,B.AY$];
this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.AdD._Done();this.Vk.
_Done();this.GH._Done();this.PopupTimeout._Done();this.AbR._Done();this.Age._Done(
);this.PopupIdToString._Done();this.As1._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.AdD._ReInit();this.Vk._ReInit();this.GH.
_ReInit();this.PopupTimeout._ReInit();this.AbR._ReInit();this.Age._ReInit();this.
PopupIdToString._ReInit();this.As1._ReInit();this.GH.S(A.aaL(A.fl.Ah));this.CU();
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Nu)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AR2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AdD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupTimeout)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Age
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.As1)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"
};C.Mh={Ai:function(Ae){C.Cj.Ai.call(this,Ae);var FG=A.jb.CG;var GJ=A.jb.Text;if(
this.Hb){FG=A.jb.Text;GJ=A.jb.Bi;}if(!this.LA){this.Background.L(FG);this.V.L(A.
jb.AmE);}else if(this.Qh){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else if(
this.Kx){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else{this.Background.L(FG
);this.V.L(GJ);}},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=
C.Mh;},_className:"Application::DarkThemeMenuItem"};C.AmT={Ade:0,_Init:function(
aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.AmT;},_className:"Application::MenuItemPopUp"
};C.OverlayMenu={Xi:function(G){A._GetAutoObject(A.Device.Device).Cd(0);},KJ:function(
){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cc=[this,this.A12];this.Bw.Ci=
null;this.Bw.Cw=[this,this.Xi];this.Bw.BZ(A.aaR(A.acf.Ok));this.Bw.Cn(null);this.
Bw.CT(A.aaL(A.ach.Ad9));}return this.Bw;},A12:function(G){var B;if(!!(C.Cj.isPrototypeOf(
B=this.AR)?B:null))(C.Cj.isPrototypeOf(B=this.AR)?B:null).IP(this);},Cx:function(
G){},AHY:function(s){this.Cx(s);},EV:function(G){},Ax1:function(s){this.EV(s);},
_Init:function(aArg){C.AaU._Init.call(this,aArg);this.__proto__=C.OverlayMenu;},
_className:"Application::OverlayMenu"};C.AO0={VP:null,Yt:null,Ym:null,Init:function(
aArg){this.A8(this.VP);},Ac9:function(G){var Aa=(C.Cj.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.Yt)A._GetAutoObject(A.Device.Device).A5(6,true,A.jV,0,[this
,this.BzB]);else if(Aa===this.VP)A._GetAutoObject(A.Device.Device).A5(9,true,A.jV
,0,[this,this.BzX]);else if(Aa===this.Ym)A._GetAutoObject(C.AW).BS(4);else throw new
Error(AxA);A._GetAutoObject(A.Device.Device).Cd(0);},BzB:function(G){var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).AFC();},BzX:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).AwU();
},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Mh._Init.call(this.
VP={I:this},0);C.Mh._Init.call(this.Yt={I:this},0);C.Mh._Init.call(this.Ym={I:this
},0);this.__proto__=C.AO0;this.H(Act);this.VP.H(BD);this.VP.Ar(true);this.VP.U(A.
aaR(A.acf.A9_));this.VP.Bf(true);this.Yt.H(JR);this.Yt.Ar(true);this.Yt.U(A.aaR(
A.acf.A9R));this.Yt.Bf(true);this.Ym.H(P0);this.Ym.Ar(true);this.Ym.U(A.aaR(A.acf.
SB));this.Ym.Bf(true);this.J(this.VP,0);this.J(this.Yt,0);this.J(this.Ym,0);this.
VP.AN=[this,this.Ac9];this.Yt.AN=[this,this.Ac9];this.Ym.AN=[this,this.Ac9];this.
Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.VP._Done();this.
Yt._Done();this.Ym._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.
OverlayMenu._ReInit.call(this);this.VP._ReInit();this.Yt._ReInit();this.Ym._ReInit(
);this.VP.U(A.aaR(A.acf.A9_));this.Yt.U(A.aaR(A.acf.A9R));this.Ym.U(A.aaR(A.acf.
SB));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Yt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ym)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeOverlayMenu"};C.
Gz={Aaf:null,OverlayMenu:null,Wo:null,A2U:null,K6:null,A2x:null,Akl:null,NX:null
,Azu:100,Init:function(aArg){var B;A.zX([this,this.Bdv],[B=A._GetAutoObject(A.Device.
Device),B.AvI,B.Ax_],0);A.zX([this,this.Bdp],[B=A._GetAutoObject(A.Device.Device
),B.ARJ,B.AY9],0);A.zX([this,this.A1T],[B=A._GetAutoObject(A.Device.Device),B.Avx
,B.Ax3],0);A.zX([this,this.Byk],[B=A._GetAutoObject(A.Device.Device),B.Avu,B.Ax2
],0);A.zX([this,this.Byl],[B=A._GetAutoObject(A.Device.Device),B.A7u,B.A$N],0);A.
zX([this,this.Apk],[B=A._GetAutoObject(A.Device.Device),B.ARU,B.AZf],0);A.zX([this
,this.BdL],[B=A._GetAutoObject(A.Device.Device),B.Wd,B.WW],0);A.pe([this,this.Bdv
],this);A.pe([this,this.Bdp],this);A.pe([this,this.Apk],this);A.pe([this,this.BdL
],this);this.A2U.At([B=this.Wo,B.ADK,B.Y4]);this.J(this.Wo,0);this.A8(this.Wo);this.
Bwc(this);},Ai:function(Ae){},Bdp:function(G){var B;if(A._GetAutoObject(A.Device.
Device).ADw){if(!this.Aaf){this.Aaf=A._NewObject(C.ArR,0);this.Aaf.H(A.abJ(this.
Aaf.M,this.Wo.M.slice(0,2)));this.Aaf.H(A.abO(this.Aaf.M,this.Wo.M[3]-((B=this.Aaf.
M)[3]-B[1])));this.J(this.Aaf,1);}}else{if(!!this.Aaf)this.HI(this.Aaf);this.Aaf=
null;}},Bdv:function(G){switch(A._GetAutoObject(A.Device.Device).OverlayMenu){case
0:this.Cd(null);break;case 1:this.Cd(A._NewObject(C.AO0,0));break;case 8:this.Cd(
A._NewObject(C.ALc,0));break;case 2:this.Cd(A._NewObject(C.AK_,0));break;case 3:
this.Cd(A._NewObject(C.ALf,0));break;case 4:this.Cd(A._NewObject(C.ATb,0));break;
case 5:this.Cd(A._NewObject(C.AUF,0));break;case 6:this.Cd(A._NewObject(C.ASS,0)
);break;case 7:this.Cd(A._NewObject(C.Al6,0));break;case 11:this.Cd(A._NewObject(
C.ALL,0));break;case 12:this.Cd(A._NewObject(C.ALK,0));break;case 9:this.Cd(A._NewObject(
C.AQS,0));break;case 10:this.Cd(A._NewObject(C.ALG,0));break;case 14:this.Cd(A._NewObject(
C.AQO,0));break;case 15:this.Cd(A._NewObject(C.AQP,0));break;case 13:this.Cd(A._NewObject(
C.AQQ,0));break;case 16:this.Cd(A._NewObject(C.AS7,0));break;case 17:this.Cd(A._NewObject(
C.AL7,0));break;default:throw new Error(AVx+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Cd:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.Wk).Aq4(null);this.NX.Ap9(this.OverlayMenu,A._GetAutoObject(
C.AwX),null,null,[B=this.OverlayMenu,B.Ax1],null,true);this.A8(this.Wo);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.NX.Akn(this.OverlayMenu,A._GetAutoObject(C.AwW),null
,null,null,null,null,[B=this.OverlayMenu,B.AHY],null,false);this.A8(this.NX);A._GetAutoObject(
C.Wk).Aq4(this.OverlayMenu.KJ());}else if(!!this.K6){this.A8(this.NX);A._GetAutoObject(
C.Wk).Aq4(this.K6.Aj4().KJ());}},Ag1:function(E){var B;if(this.K6===E)return;if(
!!this.K6){A._GetAutoObject(C.Wk).Aq4(null);this.NX.Ap9(this.K6.Aj4(),A._GetAutoObject(
C.AeR),null,null,[B=this.K6.Aj4(),B.Ax1],null,false);this.A8(this.Wo);}this.K6=E;
if(!!this.K6){this.NX.Akn(this.K6.Aj4(),A._GetAutoObject(C.AeR),null,null,null,null
,null,[this,this.BjX],null,false);this.A8(this.NX);A._GetAutoObject(C.Wk).Aq4(this.
K6.Aj4().KJ());}else if(!!this.OverlayMenu){this.A8(this.NX);A._GetAutoObject(C.
Wk).Aq4(this.OverlayMenu.KJ());}},Bwc:function(G){var B;var F;this.J(this.A2x,0);(
F=A._GetAutoObject(C.Wk),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.Wk).M)[3]-B[1]))));this.Ze(this.NX);},A1T:function(G){if(A._GetAutoObject(A.Device.
Device).Amc)switch(A._GetAutoObject(A.Device.Device).KA){case 4:case 39:case 5:break;
case 40:A._GetAutoObject(C.AW).Ag9(4);break;default:if(A._GetAutoObject(A.Device.
Device).AaE<98)A._GetAutoObject(C.AW).BS(4);}else{this.Azu=100;this.Bbl();}},Byk:
function(G){this.Bbl();},Bbl:function(){if(!A._GetAutoObject(A.Device.Device).Amc
){if(A._GetAutoObject(A.Device.Device).AaE<=2){if(this.Azu>2)switch(A._GetAutoObject(
A.Device.Device).KA){case 39:break;case 4:case 40:A._GetAutoObject(C.AW).Ag9(39);
break;default:A._GetAutoObject(C.AW).BS(39);}}else if(A._GetAutoObject(A.Device.
Device).AaE<=10){if(this.Azu>10)switch(A._GetAutoObject(A.Device.Device).KA){case
40:break;case 4:case 39:A._GetAutoObject(C.AW).Ag9(40);break;default:A._GetAutoObject(
C.AW).BS(40);}}else if(A._GetAutoObject(A.Device.Device).AaE<=20){if(this.Azu>20
)switch(A._GetAutoObject(A.Device.Device).KA){case 40:break;case 4:case 39:A._GetAutoObject(
C.AW).Ag9(40);break;default:A._GetAutoObject(C.AW).BS(40);}}else switch(A._GetAutoObject(
A.Device.Device).KA){case 39:case 4:case 40:A._GetAutoObject(C.AW).Fl();break;default:;
}this.Azu=A._GetAutoObject(A.Device.Device).AaE;}},Byl:function(G){switch(A._GetAutoObject(
A.Device.Device).ApX){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A5(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Am8(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A5(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Am8(0
);}break;default:A.ab5("%s",AVy+A._GetAutoObject(A.Device.Device).ApX.toFixed());
}},Apk:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Cd(0);A._GetAutoObject(C.AW).BS(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).KA===5)A._GetAutoObject(C.AW).Ag9(3);break;
default:;}},BdL:function(G){switch(A._GetAutoObject(A.Device.Device).Aht){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).Uc(false);break;case 5:{A._GetAutoObject(
A.Device.Device).Wi(65535);A._GetAutoObject(A.Device.Device).Uc(true);}break;case
3:{A._GetAutoObject(A.Device.Device).Wi(255);A._GetAutoObject(A.Device.Device).Uc(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).Wi(16776960);A._GetAutoObject(
A.Device.Device).Uc(true);}break;case 6:{A._GetAutoObject(A.Device.Device).Wi(16711935
);A._GetAutoObject(A.Device.Device).Uc(true);}break;default:A.ab5("%s",AVz+A._GetAutoObject(
A.Device.Device).Aht.toFixed());}},BjX:function(G){var B;this.K6.Aj4().Cx(this);
this.K6.ByM(this);},Bi2:function(){return this.K6;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);C.Akl._Init.call(this.Akl={I:this},0);C.NX._Init.call(this.
NX={I:this},0);this.__proto__=C.Gz;this.H(Ca);this.NX.H(Q$);this.J(this.NX,0);this.
Wo=A._NewObject(C.Wo,0);this.A2U=A._GetAutoObject(C.AW);this.Akl.AMN=[this,this.
Bi2,this.Ag1];this.A2x=A._GetAutoObject(C.Wk);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.O;this.Akl._Done();this.NX._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Akl._ReInit();this.NX._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Aaf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Wo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2U)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.K6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A2x)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.AaU={A9G:null,Bw:null,N:null,Cm:null,AmL:null,AmN:null,QG:null,AmM:null,AmJ:
null,AmP:null,AmK:null,Dv:function(G){var E7=0;var X=this.AR;switch(this.Cm.CL){
case 6:E7=2;break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;
}X=this.R5(X,E7,0x14);if(!!X)this.A8(X);},Bah:function(s){this.Dv(s);},Alx:function(
G){var DW=(A.Core.BK.isPrototypeOf(G)?G:null);if(DW.AbY&&(this.D3().ArK===false)
)return;A.pe(this.D3().Cw,this);},AH$:function(s){this.Alx(s);},Apj:function(G){
var DW=(A.Core.BK.isPrototypeOf(G)?G:null);if(DW.AbY&&(this.D3().Zd===false))return;
A.pe(this.D3().Cc,this);},AIc:function(s){this.Apj(s);},IP:function(G){if(this.QG.
AbY)return;},AsJ:function(s){this.IP(s);},AzW:function(G){var DW=(A.Core.BK.isPrototypeOf(
G)?G:null);if(DW.AbY&&(this.D3().Zc===false))return;A.pe(this.D3().Ci,this);},AIb:
function(s){this.AzW(s);},D3:function(){if(!!this.KJ())return this.Bw;else return this.
N;},KJ:function(){return this.Bw;},GG:function(E){this.A9G=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BK._Init.
call(this.Cm={I:this},0);A.Core.BK._Init.call(this.AmL={I:this},0);A.Core.BK._Init.
call(this.AmN={I:this},0);A.Core.BK._Init.call(this.QG={I:this},0);A.Core.BK._Init.
call(this.AmM={I:this},0);A.Core.BK._Init.call(this.AmJ={I:this},0);A.Core.BK._Init.
call(this.AmP={I:this},0);A.Core.BK._Init.call(this.AmK={I:this},0);this.__proto__=
C.AaU;this.H([0,0,C.ArU[0],C.ArU[1]]);this.N.H(WU);this.N.Ar(false);this.N.Y(false
);this.Cm.Filter=147;this.AmL.Filter=26;this.AmN.Filter=28;this.QG.Filter=1;this.
AmM.Filter=27;this.AmJ.Filter=44;this.AmP.Filter=9;this.AmK.Filter=42;this.J(this.
N,0);this.Cm.BL=[this,this.Bah];this.Cm.DS=[this,this.Bah];this.AmL.BL=[this,this.
AH$];this.AmL.DS=[this,this.AH$];this.AmN.BL=[this,this.AIc];this.AmN.DS=[this,this.
AIc];this.QG.BL=[this,this.AsJ];this.QG.DS=[this,this.AsJ];this.AmM.BL=[this,this.
AIb];this.AmM.DS=[this,this.AIb];this.AmJ.BL=[this,this.AH$];this.AmJ.DS=[this,this.
AH$];this.AmP.BL=[this,this.AIc];this.AmP.DS=[this,this.AIc];this.AmK.BL=[this,this.
AIb];this.AmK.DS=[this,this.AIb];},_Done:function(){this.__proto__=A.Core.O;this.
N._Done();this.Cm._Done();this.AmL._Done();this.AmN._Done();this.QG._Done();this.
AmM._Done();this.AmJ._Done();this.AmP._Done();this.AmK._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.N._ReInit();this.Cm.
_ReInit();this.AmL._ReInit();this.AmN._ReInit();this.QG._ReInit();this.AmM._ReInit(
);this.AmJ._ReInit();this.AmP._ReInit();this.AmK._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.A9G)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmL)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AmN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QG
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AmK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AwW={_Init:function(){A.acl.AFY._Init.call(this,0);this.J5=0x22;this.AdH=true;
this.Auq=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AwX={_Init:function(){A.acl.AFY._Init.call(this,0);this.J5=0x22;this.AdH=true;
this.Auq=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.ATL={RY:function(){var B;var Ao=(A.acl.AeJ.isPrototypeOf(B=A.acl.AdX.RY.call(this
))?B:null);if(!Ao)throw new Error(Asm);Ao.Ck.Cs=100;return Ao;},RX:function(){var
B;var Ao=(A.acl.AwB.isPrototypeOf(B=A.acl.AdX.RX.call(this))?B:null);if(!Ao)throw new
Error(Asm);Ao.ER.B0=100;return Ao;},_Init:function(aArg){A.acl.AdX._Init.call(this
,aArg);this.__proto__=C.ATL;},_className:"Application::ShadeTransition"};C.Amy={
AgG:null,SG:null,HK:null,CZ:null,AnimalId:-1,GroupId:-1,ACq:true,C9:function(E){
C.BQ.C9.call(this,E);this.SG.L(E);this.HK.L(E);this.AgG.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HK.R(A.aaR(A.acf.AeL)
);else this.HK.R(E.toFixed());},AbJ:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.SG.R(A.aaR(A.acf.AeL));else this.SG.R(E.toFixed());},Eq:function(
G){},Ng:function(s){this.Eq(s);},A8N:function(E){if(this.ACq===E)return;this.ACq=
E;this.SG.Y(this.ACq);this.AgG.Y(this.ACq);},_Init:function(aArg){C.BQ._Init.call(
this,aArg);A.acg.An._Init.call(this.AgG={I:this},0);A.acg.Text._Init.call(this.SG={
I:this},0);A.acg.Text._Init.call(this.HK={I:this},0);C.CZ._Init.call(this.CZ={I:
this},0);this.__proto__=C.Amy;this.AgG.H(AVA);this.SG.H(AVB);this.SG.A3(0x11);this.
SG.R(A.aaR(A.acf.AeL));this.HK.H(AVC);this.HK.A3(0x11);this.HK.R(A.aaR(A.acf.AeL
));this.CZ.H(AVD);this.J(this.AgG,0);this.J(this.SG,0);this.J(this.HK,0);this.J(
this.CZ,0);this.AgG.Ay(A.aaL(A.ach.API));this.SG.S(A.aaL(A.fl.Ah));this.HK.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.BQ;this.AgG._Done();this.SG._Done(
);this.HK._Done();this.CZ._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ.
_ReInit.call(this);this.AgG._ReInit();this.SG._ReInit();this.HK._ReInit();this.CZ.
_ReInit();this.SG.R(A.aaR(A.acf.AeL));this.HK.R(A.aaR(A.acf.AeL));this.SG.S(A.aaL(
A.fl.Ah));this.HK.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BQ._Mark.call(this
,D);if((B=this.AgG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CZ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ACA={Init:function(
aArg){var B;A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper).W,B.Aq0,B.Ud
],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper).W,B.A7J,B.Anc],0);
A.zV([this,this.Ng],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Ng],[
B=A._GetAutoObject(A.Device.Helper).W,B.PG,B.DT],0);A.zX([this,this.Ng],[B=A._GetAutoObject(
A.Device.Helper).W,B.A8g,B.Awx],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.
Helper).W,B.A7D,B.Aez],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper
).W,B.A7E,B.Ua],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper).W,B.
A7F,B.AeC],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.Helper).W,B.A7I,B.
AeE],0);A.pe([this,this.Ng],this);},C9:function(E){C.Amy.C9.call(this,E);this.CZ.
C9(E);},Eq:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aqn()){this.AbJ(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.AbJ(-1);this.OnSetAnimalId(-1);}this.CZ.
DT(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.CZ.AEf(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.CZ.Aez(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.CZ.Ua(A._GetAutoObject(A.Device.Helper).W.IsFever);this.CZ.AeC(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.CZ.AeE(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Amy._Init.call(this,aArg);this.
__proto__=C.ACA;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.J7={Ahn:A.abi(3,A.jV,null),Co:A.abi(3,0,{0:7,1:30,2:90}),AmX:3,Dp:function(){
if(this.AmX<3)return this.AmX;else return 3;},C5:function(aIndex){if((aIndex>=3)||(
aIndex>=this.AmX))return-1;return this.Co.Get(aIndex);},F$:function(aIndex){if((
aIndex>=3)||(aIndex>=this.AmX))return AVE;return this.Ahn.Get(aIndex);},DK:function(
A2){var P=0;while((P<3)&&(P<=this.AmX)){if(this.Co.Get(P)===A2)return P;P=P+1;}return-
1;},Hl:function(){var P=0;var max=-1;while((P<3)&&(P<=this.AmX)){if(this.Co.Get(
P)>max)max=this.Co.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.Ahn=[]).__proto__=C.J7.Ahn;(this.Co=[]).__proto__=C.J7.Co;this.
__proto__=C.J7;this.Ahn.Set(0,A.aaR(A.acf.A6q));this.Ahn.Set(1,A.aaR(A.acf.A6o));
this.Ahn.Set(2,A.aaR(A.acf.A6p));},_ReInit:function(){C.AC._ReInit.call(this);this.
Ahn.Set(0,A.aaR(A.acf.A6q));this.Ahn.Set(1,A.aaR(A.acf.A6o));this.Ahn.Set(2,A.aaR(
A.acf.A6p));},_className:"Application::Days"};C.ATI={Al9:null,BR:null,QU:null,Qu:
null,A_u:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.By6],[B=A._GetAutoObject(A.Device.Device),B.AqZ,B.AsI],0);},Bg:function(
aSize){},Ai:function(Ae){var B;var F;C.Dn.Ai.call(this,Ae);var Fh=((Ae&0x20)===0x20
);var Gt=this.Bl.Bv;this.BR.L(A.jb.Bi);if(!!this.Q)this.BR.R(((AVF+A._GetAutoObject(
A.Device.Converter).AkC((F=this.Q,F[1].call(F[0]))))+CM)+A._GetAutoObject(A.acj.
Temperature).Alh());this.HX.Y((this.AK<A._GetAutoObject(A.Device.Helper).A5M())&&(
Fh||Gt));},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},J0:function(G){var F;var BO=this.AK;C.Dn.J0.call(this,G);if(this.AK<A._GetAutoObject(
A.Device.Helper).A5M()){this.Bx(this.AK+10);if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}},JV:function(G){var F;var BO=this.
AK;C.Dn.JV.call(this,G);this.Bx(this.AK-10);if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},A9p:function(E){if(this.A_u===E)return;
this.A_u=E;this.Am();},By6:function(G){this.Am();},_Init:function(aArg){C.Dn._Init.
call(this,aArg);A.acg.AJ._Init.call(this.Al9={I:this},0);C.CP._Init.call(this.BR={
I:this},0);A.acg.AJ._Init.call(this.QU={I:this},0);A.acg.An._Init.call(this.Qu={
I:this},0);this.__proto__=C.ATI;this.H(UI);this.Background.H(UI);this.V.H(Asn);this.
V.L(A.jb.Bi);this.Al9.H(AVG);this.Al9.L(A.jb.Ae6);this.Hn.H(AVH);this.BR.H(AVI);
this.BR.A3(0x12);this.BR.L(A.jb.Text);this.HX.H(AVJ);this.QU.H(AVK);this.QU.L(A.
jb.ET);this.Qu.H(AVL);this.J(this.Al9,-2);this.J(this.BR,-1);this.J(this.QU,0);this.
J(this.Qu,0);this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.BR.S(A.aaL(
A.fl.EA));this.BR.A7(A.aaL(A.fl.Ah));this.Qu.Ay(A.aaL(A.ach.ACP));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dn;this.Al9._Done();this.BR._Done();this.QU.
_Done();this.Qu._Done();C.Dn._Done.call(this);},_ReInit:function(){C.Dn._ReInit.
call(this);this.Al9._ReInit();this.BR._ReInit();this.QU._ReInit();this.Qu._ReInit(
);this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.BR.S(A.aaL(A.fl.EA));this.
BR.A7(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Dn._Mark.call(this,D);if((B=this.
Al9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BR)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qu)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A9X={Q:null
,AiG:null,Init:function(aArg){var B;A.zX([this,this.Bc6],[B=A._GetAutoObject(A.Device.
Device),B.ADK,B.A$G],0);A.pe([this,this.Bc6],this);},At:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},Ag9:function(AkW){A._GetAutoObject(A.Device.Device).Y4(AkW
);},Bc6:function(G){var F;if(!this.Q){A.ab5("%s",AVM);return;}var Bm=null;if(this.
AiG.Contains(A._GetAutoObject(A.Device.Device).KA)){Bm=this.AiG.A9E();while(!!Bm&&(
Bm.AnF!==A._GetAutoObject(A.Device.Device).KA))Bm=this.AiG.A9E();}if(!Bm)Bm=this.
BxL(A._GetAutoObject(A.Device.Device).KA);(F=this.Q,F[2].call(F[0],Bm));},BxL:function(
AkW){var Bm=null;switch(AkW){case 0:case 1:Bm=A._NewObject(C.ATQ,0);break;case 2:
Bm=A._NewObject(C.XI,0);break;case 3:Bm=A._NewObject(C.AuY,0);break;case 61:Bm=A.
_NewObject(C.AUt,0);break;case 88:Bm=A._NewObject(C.NewMenu,0);break;case 27:Bm=
A._NewObject(C.AQ8,0);break;case 6:Bm=A._NewObject(C.AQH,0);break;case 16:Bm=A._NewObject(
C.AMT,0);break;case 22:Bm=A._NewObject(C.AUo,0);break;case 17:Bm=A._NewObject(C.
AT7,0);break;case 46:Bm=A._NewObject(C.AMR,0);break;case 99:Bm=A._NewObject(C.ATj
,0);break;case 100:Bm=A._NewObject(C.ATi,0);break;case 101:Bm=A._NewObject(C.AUm
,0);break;case 23:Bm=A._NewObject(C.AUM,0);break;case 18:Bm=A._NewObject(C.AM7,0
);break;case 19:Bm=A._NewObject(C.ATk,0);break;case 38:Bm=A._NewObject(C.AQb,0);
break;case 87:Bm=A._NewObject(C.AS5,0);break;case 72:Bm=A._NewObject(C.AM5,0);break;
case 73:Bm=A._NewObject(C.AM6,0);break;case 93:Bm=A._NewObject(C.AM4,0);break;case
94:Bm=A._NewObject(C.AM2,0);break;case 104:Bm=A._NewObject(C.AM0,0);break;case 105:
Bm=A._NewObject(C.AM3,0);break;case 74:Bm=A._NewObject(C.AM1,0);break;case 5:Bm=
A._NewObject(C.AT0,0);break;case 4:Bm=A._NewObject(C.AdJ,0);break;case 40:Bm=A._NewObject(
C.AMs,0);break;case 39:Bm=A._NewObject(C.AML,0);break;case 28:Bm=A._NewObject(C.
V$,0);break;case 7:Bm=A._NewObject(C.Aqa,0);break;case 92:Bm=A._NewObject(C.ANe,
0);break;case 31:Bm=A._NewObject(C.AqR,0);break;case 89:Bm=A._NewObject(C.AQ6,0);
break;case 34:Bm=A._NewObject(C.AK8,0);break;case 35:Bm=A._NewObject(C.ManualActionScanScreen
,0);break;case 32:Bm=A._NewObject(C.SetTransponderScreen,0);break;case 50:Bm=A._NewObject(
C.SetSaveTransponderScreen,0);break;case 55:Bm=A._NewObject(C.NewAnimalSetTransponderScreen
,0);break;case 63:Bm=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case
90:Bm=A._NewObject(C.MotherScanScreen,0);break;case 91:Bm=A._NewObject(C.SetSaveNaisIdScreen
,0);break;case 8:Bm=A._NewObject(C.GN,0);break;case 9:Bm=A._NewObject(C.IT,0);break;
case 24:Bm=A._NewObject(C.ALp,0);break;case 10:Bm=A._NewObject(C.Al3,0);break;case
21:Bm=A._NewObject(C.ALt,0);break;case 11:Bm=A._NewObject(C.ALs,0);break;case 29:
Bm=A._NewObject(C.At7,0);break;case 54:Bm=A._NewObject(C.ALr,0);break;case 30:Bm=
A._NewObject(C.ALq,0);break;case 37:Bm=A._NewObject(C.Gy,0);break;case 12:Bm=A._NewObject(
C.ALo,0);break;case 41:Bm=A._NewObject(C.ALn,0);break;case 43:Bm=A._NewObject(C.
ALm,0);break;case 14:Bm=A._NewObject(C.AMJ,0);break;case 13:Bm=A._NewObject(C.AMK
,0);break;case 44:Bm=A._NewObject(C.AMI,0);break;case 20:Bm=A._NewObject(C.AUD,0
);break;case 42:Bm=A._NewObject(C.AUC,0);break;case 45:Bm=A._NewObject(C.AUB,0);
break;case 47:Bm=A._NewObject(C.ANT,0);break;case 48:Bm=A._NewObject(C.ANS,0);break;
case 49:Bm=A._NewObject(C.ANR,0);break;case 69:Bm=A._NewObject(C.ANd,0);break;case
70:Bm=A._NewObject(C.ANc,0);break;case 71:Bm=A._NewObject(C.ANb,0);break;case 51:
Bm=A._NewObject(C.ARj,0);break;case 52:Bm=A._NewObject(C.ARi,0);break;case 53:Bm=
A._NewObject(C.ARh,0);break;case 96:Bm=A._NewObject(C.AUS,0);break;case 97:Bm=A.
_NewObject(C.AUR,0);break;case 98:Bm=A._NewObject(C.AUQ,0);break;case 80:Bm=A._NewObject(
C.ARe,0);break;case 81:Bm=A._NewObject(C.ARd,0);break;case 82:Bm=A._NewObject(C.
ARc,0);break;case 85:Bm=A._NewObject(C.AL8,0);break;case 102:Bm=A._NewObject(C.AS8
,0);break;case 83:Bm=A._NewObject(C.ATm,0);break;case 84:Bm=A._NewObject(C.ATl,0
);break;case 58:Bm=A._NewObject(C.ALb,0);break;case 59:Bm=A._NewObject(C.ALa,0);
break;case 60:Bm=A._NewObject(C.AK$,0);break;case 15:Bm=A._NewObject(C.AS_,0);break;
case 68:Bm=A._NewObject(C.AT6,0);break;case 78:Bm=A._NewObject(C.AQF,0);break;case
79:Bm=A._NewObject(C.AQE,0);break;case 26:Bm=A._NewObject(C.AQ9,0);break;case 62:
Bm=A._NewObject(C.AQ5,0);break;case 25:Bm=A._NewObject(C.ANr,0);break;case 75:Bm=
A._NewObject(C.ANs,0);break;case 67:Bm=A._NewObject(C.ANq,0);break;case 66:Bm=A.
_NewObject(C.ANt,0);break;case 64:Bm=A._NewObject(C.ANu,0);break;case 65:Bm=A._NewObject(
C.Aqc,0);break;case 77:Bm=A._NewObject(C.ANv,0);break;case 76:Bm=A._NewObject(C.
ANo,0);break;case 95:Bm=A._NewObject(C.ALv,0);break;case 33:Bm=A._NewObject(C.WeightListScreen
,0);break;case 36:Bm=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 56:Bm=A.
_NewObject(C.AnimalMultiInfoScreen,0);break;case 57:Bm=A._NewObject(C.MultiInfoActionsScreen
,0);break;case 86:Bm=A._NewObject(C.ALI,0);break;case 103:Bm=A._NewObject(C.AUa,
0);break;default:throw new Error(AVN);}if(!!Bm)Bm.AnF=AkW;return Bm;},BS:function(
AkW){var F;if(!(F=this.Q,F[1].call(F[0])))A.ab5("%s",AVO);else this.AiG.Bmq((F=this.
Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Device).Y4(AkW);},Fl:function(){var
Bed=3;var Bec=this.AiG.Bmg();if(!!Bec)Bed=Bec.AnF;else A.ab5("%s",AVP);A._GetAutoObject(
A.Device.Device).Y4(Bed);},_Init:function(aArg){C.A9Z._Init.call(this.AiG={I:this
},0);this.__proto__=C.A9X;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;this.AiG._Done();A.h7--;},_ReInit:function(){this.AiG._ReInit();},_Mark:function(
D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiG).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"};C.
AW={_Init:function(){C.A9X._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.AFt={H0:null,Yb:null,AeN:null,Aak:null,Mu:null,AyP:
1,RatingMode:0,RatedAttribute:0,CU:function(){this.Yb.R(this.BbS(this.RatedAttribute
));this.AJP(this);},Ai:function(Ae){this.Mu.R(A._GetAutoObject(A.Device.Helper).
Ne(A.aaR(A.acf.AQW),PZ,this.AyP.toFixed()));if(this.RatingMode===1)this.Mu.Y(true
);else this.Mu.Y(false);},Cx:function(G){var B;C.AB.Cx.call(this,G);if(A._GetAutoObject(
A.Device.Device).Br.Lc())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Br.HA().toFixed(),0,null);this.H0.Gf();this.H0.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AwP(this.
H0,5);A.zX([this,this.AJP],[B=A._GetAutoObject(A.Device.Device),B.ARR,B.AZc],0);
A.zX([this,this.AJP],[B=A._GetAutoObject(A.Device.Helper).W,B.PG,B.DT],0);A.pe([
this,this.AJP],this);},Ar2:function(G){var a=this.AJt(this.RatedAttribute);this.
Bet();this.AyP=this.AyP-1;this.Am();if(!a)this.AQ3();else this.Sr(a);},Ws:function(
G){var a=this.BbZ(this.RatedAttribute);this.Bet();this.AyP=this.AyP+1;this.Am();
if(!a)this.A6N();else this.Sr(a);},AJt:function(Ni){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Ni){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AGW);},BbZ:function(Ni){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Ni){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AGW);},Sr:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.Yb.R(this.BbS(E));this.
DC(E);this.AeN.Anh(this.H0.Bg9(E));if(!this.AJt(E)){if(this.AQj())this.N.Cn(A.aaL(
A.ach.Abb));else this.N.Cn(null);}else this.N.Cn(A.aaL(A.ach.Ad9));},BbS:function(
Ni){return this.Aak.BP(Ni);},BxK:function(Ni){if(!!Ni){var a=this.AJt(Ni);if(!a)
return A.jV;else return this.BbT(a);}else return A.jV;},BxJ:function(Ni){if(!!Ni
){var a=this.BbZ(Ni);if(!a)return A.jV;else return this.BbT(a);}else return A.jV;
},AQ3:function(){},A6N:function(){},A5N:function(){return null;},BbT:function(Ni
){return this.Aak.Lo(Ni);},Bet:function(){if(!!this.RatedAttribute)this.H0.BmY(this.
RatedAttribute,this.AeN.A6);},AJP:function(G){if(this.AQj())this.RatingMode=A._GetAutoObject(
A.Device.Device).RatingMode;else this.RatingMode=0;this.Sr(2);this.DC(this.RatedAttribute
);this.Am();},Xj:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},Akx:function(G){var a=this.AJt(this.RatedAttribute);if(!a){if(this.AQj())this.
Xj(this);}else this.AQ3();},DC:function(Ni){this.N.Ho(this.BxK(Ni));if(!!this.N.
AnB){this.N.CT(null);this.N.OG(true);}else{this.N.CT(A.aaL(A.ach.Ad9));this.N.OG(
false);}this.N.BZ(this.BxJ(Ni));if(!!this.N.AnD){this.N.C3(null);this.N.OH(true);
}else{this.N.C3(this.A5N());this.N.OH(false);}},AQj:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Aso,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Yb={
I:this},0);C.Rating._Init.call(this.AeN={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.Aak={I:this},0);A.acg.Text._Init.call(this.Mu={I:this},0);this.__proto__=
C.AFt;this.Background.L(A.jb.CG);this.N.Y(true);this.Dl(C.IA);this.Yb.H(AVQ);this.
Yb.KL(true);this.Yb.L(A.jb.Text);this.AeN.H(AVR);this.Mu.H(AVS);this.Mu.A3(0x14);
this.Mu.R(A.aaR(A.acf.AQW));this.Mu.L(A.jb.Text);this.J(this.Yb,0);this.J(this.AeN
,0);this.J(this.Mu,0);this.A8(this.AeN);this.N.Cw=[this,this.Ar2];this.N.Ci=[this
,this.Akx];this.N.Cc=[this,this.Ws];this.Yb.S(A.aaL(A.fl.Ah));this.AeN.AN=[this,
this.Ws];this.Mu.S(A.aaL(A.fl.Ah));this.H0=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.Yb._Done();this.AeN._Done();this.Aak._Done();
this.Mu._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Yb._ReInit();this.AeN._ReInit();this.Aak._ReInit();this.Mu._ReInit();this.
Mu.R(A.aaR(A.acf.AQW));this.Yb.S(A.aaL(A.fl.Ah));this.Mu.S(A.aaL(A.fl.Ah));this.
CU();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H0)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aak)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HT={Z:null,Gender:null,AnimalType:null,Breed:null,I7:null,Pc:null,Asf:null,B5:
null,C8:null,C7:null,CE:null,Gb:null,Aw:null,KB:0,Init:function(aArg){A.zX([this
,this.Bag],this.B5.Q,0);A.pe([this,this.Bag],this);A.pe([this,this.AAs],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).AMF(this.
Z);},Dv:function(G){var B;var E7=0;var X=this.AR;switch(this.Cm.CL){case 6:E7=2;
break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;}X=this.R5(
X,E7,0x415);if(!!X)this.A8(X);if(!!X&&((X.T&0x400)===0x400))this.Z.Hy(X,true,null
,null);this.AAs(this);},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[
1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},Aev:function(E){
if(this.KB===E)return;this.KB=E;A.abo([this,this.Avv,this.Aev],0);},AAs:function(
G){var B;var GL=(C.Cj.isPrototypeOf(B=this.AR)?B:null);this.N.Ho(A.jV);this.N.CT(
A.aaL(A.ach.EU));this.N.Cw=[this,this.AH_];if(!!GL&&!!GL.AlX){this.N.FC(A.jV);this.
N.Kn.Dm(255);this.N.Arc(GL.Aqh);this.N.Cn(GL.Au6);this.N.Ci=GL.AlX;}else{this.N.
FC(A.jV);this.N.Cn(null);this.N.Ci=null;}if(!!GL&&!!GL.Af3){this.N.BZ(GL.Aw6);this.
N.HL.Dm(GL.AwA);this.N.Am_(GL.Amr);this.N.C3(GL.Aqv);this.N.Cc=GL.Af3;}else this.
AtG();},AfO:function(G){A.ab5("%s",AxB);},Ayb:function(s){this.AfO(s);},Eo:function(
G){A.ab5("%s",AxB);},AH_:function(s){this.Eo(s);},AtG:function(){A.ab5("%s",AkO);
},AzP:function(G){A.ab5("%s",AxB);},Acx:function(s){this.AzP(s);},Jx:function(Af
){this.A8(Af);this.Z.Hy(Af,true,null,null);this.Z.Vc(null,null);},Ape:function(G
){var F;this.C7.Ag6(A._GetAutoObject(A.Device.Helper).Aa1((F=this.B5.Q,F[1].call(
F[0]))));},Bag:function(s){this.Ape(s);},G8:function(G){A.pe([this,this.E9],this
);},Avv:function(){return this.KB;},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.Gender._Init.call(this.Gender={I:this
},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.Breed._Init.call(this.
Breed={I:this},0);C.UC._Init.call(this.I7={I:this},0);A.Device.MZ._Init.call(this.
Pc={I:this},0);A.Device.KR._Init.call(this.Asf={I:this},0);C.BW._Init.call(this.
B5={I:this},0);C.BW._Init.call(this.C8={I:this},0);C.Akv._Init.call(this.C7={I:this
},0);C.AwS._Init.call(this.CE={I:this},0);C.ArX._Init.call(this.Gb={I:this},0);C.
Aw._Init.call(this.Aw={I:this},0);this.__proto__=C.HT;var B;this.N.Y(true);this.
Dl(C.IA);this.Z.H(E4);this.Z.Kd(1);this.KB=A._GetAutoObject(A.Device.Helper).Aa1(
this.AnimalType.Q);this.B5.H(AhA);this.B5.Aj(true);this.B5.U(A.aaR(A.acf.Ae5));this.
C8.H(AxC);this.C8.Aj(true);this.C8.U(A.aaR(A.acf.AeX));this.C7.H(AnY);this.C7.Aj(
true);this.C7.U(A.aaR(A.acf.KB));this.C7.Gn(1000);this.C7.E1(99000);this.C7.Ag6(
A._GetAutoObject(A.Device.Helper).Aa1(this.AnimalType.Q));this.CE.H(AhB);this.CE.
Aj(true);this.CE.U(A.aaR(A.acf.Breed));this.Gb.H(AVT);this.Gb.Aj(true);this.Gb.U(
A.aaR(A.acf.I7));this.Aw.H(AxD);this.J(this.Z,0);this.J(this.B5,0);this.J(this.C8
,0);this.J(this.C7,0);this.J(this.CE,0);this.J(this.Gb,0);this.J(this.Aw,0);this.
Z.Ej=[this,this.G8];this.Gender.LU(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LU(A._GetAutoObject(A.Device.Helper).W);this.Breed.LU(A._GetAutoObject(A.Device.
Helper).W);this.I7.LU(A._GetAutoObject(A.Device.Helper).W);this.B5.At([B=this.AnimalType
,B.B9,B.B_]);this.B5.CH(this.AnimalType);this.C8.At([B=this.Gender,B.B9,B.B_]);this.
C8.CH(this.Gender);this.C7.At([this,this.Avv,this.Aev]);this.CE.Gg([this,this.D3
,this.GG]);this.CE.LT([B=this.CE,B.FJ]);this.CE.LV(A.aaL(A.ach.Edit));this.CE.At([
B=this.Breed,B.B9,B.B_]);this.CE.CH(this.Breed);this.CE.Am9(this.Pc);this.Gb.Gg([
this,this.D3,this.GG]);this.Gb.LT([B=this.Gb,B.FJ]);this.Gb.LV(A.aaL(A.ach.Edit)
);this.Gb.At([B=this.I7,B.B9,B.B_]);this.Gb.CH(this.I7);this.Gb.Am9(this.Asf);this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.Gender._Done(
);this.AnimalType._Done();this.Breed._Done();this.I7._Done();this.Pc._Done();this.
Asf._Done();this.B5._Done();this.C8._Done();this.C7._Done();this.CE._Done();this.
Gb._Done();this.Aw._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Z._ReInit();this.Gender._ReInit();this.AnimalType._ReInit();this.
Breed._ReInit();this.I7._ReInit();this.Pc._ReInit();this.Asf._ReInit();this.B5._ReInit(
);this.C8._ReInit();this.C7._ReInit();this.CE._ReInit();this.Gb._ReInit();this.Aw.
_ReInit();this.B5.U(A.aaR(A.acf.Ae5));this.C8.U(A.aaR(A.acf.AeX));this.C7.U(A.aaR(
A.acf.KB));this.CE.U(A.aaR(A.acf.Breed));this.Gb.U(A.aaR(A.acf.I7));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Pc)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Asf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalDataScreen"};C.V$={Ayp:false,LI:function(G){if(A._GetAutoObject(
A.Device.Device).Ap.Lc())A._GetAutoObject(A.Device.Device).A5(41,true,A._GetAutoObject(
A.Device.Device).Ap.HA().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gf(
);A._GetAutoObject(A.Device.Helper).ApP(A._GetAutoObject(A.Device.Helper).W);},AtG:
function(){this.N.BZ(A.jV);this.N.C3(A.aaL(A.ach.ACT));this.N.Cc=[this,this.Ayb];
},Cx:function(G){if(!this.Ayp){this.Ayp=true;A.pe([this,this.Acx],this);}else C.
AqR.Cx.call(this,G);},AzP:function(G){A._GetAutoObject(C.AW).BS(55);},_Init:function(
aArg){C.AqR._Init.call(this,aArg);this.__proto__=C.V$;this.Kl(this.Aw,-1);},_className:
"Application::NewAnimalManualDataScreen"};C.IA={_Init:function(aArg){C.ACA._Init.
call(this,aArg);this.__proto__=C.IA;this.A8N(false);},_className:"Application::HeaderSelectedAnimalId"
};C.IT={Filter:null,Gender:null,AnimalType:null,Transponder:null,Ed:null,Z:null,
PQ:null,SQ:null,N5:null,SR:null,Nf:null,Pa:null,RA:null,Op:null,RB:null,Ny:null,
K_:null,Jf:null,KP:null,Mn:null,X8:null,SS:null,RC:null,Aw:null,Axg:0,Axf:0,At5:
0,At4:0,AqQ:0,Ar_:0,AuJ:0,AuK:0,Al2:false,AnL:false,Init:function(aArg){A.zX([this
,this.AuP],this.K_.Q,0);A.zX([this,this.At_],this.Jf.Q,0);A.zX([this,this.Bn$],this.
KP.Q,0);A.zX([this,this.Bit],this.Mn.Q,0);A.zX([this,this.BoF],this.Nf.Q,0);A.zX([
this,this.BoE],this.N5.Q,0);A.zX([this,this.Bfs],this.Ny.Q,0);A.zX([this,this.Bfr
],this.Op.Q,0);this.A8(this.PQ);},Dv:function(G){var E7=0;var X=this.AR;switch(this.
Cm.CL){case 6:E7=2;break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;
}X=this.R5(X,E7,0x414);if(!!X)this.A8(X);this.MM(this);},Cx:function(G){if(!!A._GetAutoObject(
A.Device.Device).Ap.Filter)this.Bh(A._GetAutoObject(A.Device.Device).Ap.Filter.GA(
));else this.Bh(A._NewObject(A.Device.Filter,0));},Eo:function(G){A._GetAutoObject(
C.AW).Fl();},A1O:function(G){var Ew=(C.Ad1.isPrototypeOf(G)?G:null);if(!Ew)return;
var Az=this.Filter.DX(Ew.Ei,Ew.Operator);if(!!Az){this.Filter.QW(Az);A.abo([this
,this.Fz,this.FD],0);}else{if(Ew.Ei===11){Az=A._NewObject(A.Device.BoolFilterCriterion
,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Az)?Az:null).A6=true;}else if(Ew.Ei===12){Az=A._NewObject(A.Device.BoolFilterCriterion
,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Az)?Az:null).A6=true;}else if(Ew.Ei===8){Az=A._NewObject(A.Device.BoolFilterCriterion
,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Az)?Az:null).A6=true;}else A.ab5("%s",AGX+Ew.Ei.toFixed());if(!!Az){this.Filter.
CY(Az);A.abo([this,this.Fz,this.FD],0);}}},Byi:function(G){A._GetAutoObject(A.Device.
Device).Ap.Bh(this.Filter);A._GetAutoObject(C.AW).Fl();},AzN:function(G){var Ew=(
C.Amx.isPrototypeOf(G)?G:null);if(!Ew)return;var Az=this.Filter.DX(Ew.Ei,Ew.Operator
);if(!!Az){this.Filter.QW(Az);A.abo([this,this.Fz,this.FD],0);}else{if(Ew.Ei===7
){Az=A._NewObject(A.Device.GenderFilterCriterion,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;
}else if(Ew.Ei===14){Az=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Az.ES=
Ew.Ei;Az.Operator=Ew.Operator;}else if((Ew.Ei===22)||(Ew.Ei===26)){var AZT=A._NewObject(
A.Device.UInt64FilterCriterion,0);AZT.ES=Ew.Ei;AZT.Operator=0;Az=AZT;}else A.ab5(
"%s",AGX+Ew.Ei.toFixed());if(!!Az){this.Filter.CY(Az);A.abo([this,this.Fz,this.FD
],0);}}},A8I:function(E){if(this.AuJ===E)return;this.AuJ=E;A.abo([this,this.Bi$,
this.A8I],0);},A8J:function(E){if(this.AuK===E)return;this.AuK=E;A.abo([this,this.
Bja,this.A8J],0);},AuP:function(G){var F;this.A8J((F=this.K_.Q,F[1].call(F[0])));
var Az=this.Filter.DX(7,0);if(!!Az){var Ay9=(A.Device.GenderFilterCriterion.isPrototypeOf(
Az)?Az:null);if(!!Ay9)Ay9.A6=this.AuK;else A.ab5("%s",Afg);}},At_:function(G){var
F;this.A8I((F=this.Jf.Q,F[1].call(F[0])));var Az=this.Filter.DX(14,0);if(!!Az){var
UM=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Az)?Az:null);if(!!UM)UM.A6=
this.AuJ;else A.ab5("%s",Afg);}},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1
))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},A9o:function(
E){if(this.Ar_===E)return;this.Ar_=E;A.abo([this,this.BjM,this.A9o],0);},Bn$:function(
G){var F;this.A9o((F=this.KP.Q,F[1].call(F[0])));var Az=this.Filter.DX(22,1);if(
!!Az){var AiP=(A.Device.UInt64FilterCriterion.isPrototypeOf(Az)?Az:null);if(!!AiP
)switch(this.Ar_){case 1:AiP.Operator=5;break;case 0:AiP.Operator=0;break;default:
A.ab5("%s%e",AGY,this.Ar_);}else A.ab5("%s",Afg);}},A8V:function(E){if(this.AqQ===
E)return;this.AqQ=E;A.abo([this,this.Bjq,this.A8V],0);},Bit:function(G){var F;this.
A8V((F=this.Mn.Q,F[1].call(F[0])));var Az=this.Filter.DX(26,1);if(!!Az){var Atk=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Az)?Az:null);if(!!Atk)switch(this.AqQ
){case 1:Atk.Operator=5;break;case 0:Atk.Operator=0;break;default:A.ab5("%s%e",AGY
,this.AqQ);}else A.ab5("%s",Afg);}},Bh:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PQ.Bh([this,this.Fz,this.FD]);this.SQ.
Bh([this,this.Fz,this.FD]);this.N5.Bh([this,this.Fz,this.FD]);this.SR.Bh([this,this.
Fz,this.FD]);this.Nf.Bh([this,this.Fz,this.FD]);this.Pa.Bh([this,this.Fz,this.FD
]);this.RA.Bh([this,this.Fz,this.FD]);this.Op.Bh([this,this.Fz,this.FD]);this.RB.
Bh([this,this.Fz,this.FD]);this.Ny.Bh([this,this.Fz,this.FD]);this.K_.Bh([this,this.
Fz,this.FD]);this.Jf.Bh([this,this.Fz,this.FD]);this.KP.Bh([this,this.Fz,this.FD
]);this.Mn.Bh([this,this.Fz,this.FD]);this.X8.Bh([this,this.Fz,this.FD]);this.SS.
Bh([this,this.Fz,this.FD]);this.RC.Bh([this,this.Fz,this.FD]);this.Art(false);A.
pe([this,this.A3m],this);var BcA=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DX(1,2))?B:null);if(!!BcA){this.Art(true);this.AFa(BcA.A6);}var Bb5=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DX(1,3))?B:null);if(!!
Bb5){this.Art(true);this.AFb(Bb5.A6);}this.Aq7(false);A.pe([this,this.A3f],this);
var Bcz=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DX(4,3))?B:null
);if(!!Bcz){this.Aq7(true);this.AD0(A._GetAutoObject(A.Device.Helper).ML(Bcz.A6,
A._GetAutoObject(A.Device.Helper).DF()));}var Bb4=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DX(4,2))?B:null);if(!!Bb4){this.Aq7(true);this.AD2(A.
_GetAutoObject(A.Device.Helper).ML(Bb4.A6,A._GetAutoObject(A.Device.Helper).DF()
)+1);}var Ay9=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DX(7,0
))?B:null);if(!!Ay9)this.K_.Bx(this.Gender.DK(Ay9.A6));var UM=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DX(14,0))?B:null);if(!!UM)this.Jf.Bx(this.AnimalType.
DK(UM.A6));var AiP=this.Filter.DX(22,1);if(!!AiP){if(!AiP.Operator)this.KP.Bx(0);
else this.KP.Bx(1);}var Atk=this.Filter.DX(26,1);if(!!Atk){if(!Atk.Operator)this.
Mn.Bx(0);else this.Mn.Bx(1);}},FD:function(Aq){this.Bh(Aq);},AFb:function(E){if(
this.Axg===E)return;this.Axg=E;A.abo([this,this.A7_,this.AFb],0);},AFa:function(
E){if(this.Axf===E)return;this.Axf=E;A.abo([this,this.A79,this.AFa],0);},BoF:function(
G){var F;this.AFb((F=this.Nf.Q,F[1].call(F[0])));var Az=this.Filter.DX(1,3);if(!
!Az){var AAO=(A.Device.Int32FilterCriterion.isPrototypeOf(Az)?Az:null);if(!!AAO)
AAO.A6=this.Axg;else A.ab5("%s",Afg);}},BoE:function(G){var F;this.AFa((F=this.N5.
Q,F[1].call(F[0])));var Az=this.Filter.DX(1,2);if(!!Az){var AAO=(A.Device.Int32FilterCriterion.
isPrototypeOf(Az)?Az:null);if(!!AAO)AAO.A6=this.Axf;else A.ab5("%s",Afg);}},Bc3:
function(G){var Ew=(C.Ajo.isPrototypeOf(G)?G:null);if(!Ew)return;var Az=this.Filter.
DX(Ew.Ei,Ew.Operator);if(!!Az){this.Filter.QW(Az);A.abo([this,this.Fz,this.FD],0
);}else{if(Ew===this.SQ){Az=A._NewObject(A.Device.Int32FilterCriterion,0);Az.ES=
Ew.Ei;Az.Operator=Ew.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Az)?Az:
null).A6=this.Axf;this.A8(this.N5);}else if(Ew===this.SR){Az=A._NewObject(A.Device.
Int32FilterCriterion,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Az)?Az:null).A6=this.Axg;this.A8(this.Nf);}if(!!Az){this.Filter.CY(
Az);A.abo([this,this.Fz,this.FD],0);}}A.pe([this,this.A3m],this);},A3m:function(
G){var A1z=!!this.Filter.DX(this.N5.Ei,this.N5.Operator);var A3n=!!this.Filter.DX(
this.Nf.Ei,this.Nf.Operator);A._GetAutoObject(A.Device.Helper).Mx(this.SQ,this.AnL
);A._GetAutoObject(A.Device.Helper).Mx(this.SR,this.AnL);A._GetAutoObject(A.Device.
Helper).Mx(this.N5,A1z);A._GetAutoObject(A.Device.Helper).Mx(this.Nf,A3n);},MM:function(
G){var B;this.Z.Vc(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(
this.AR,true,null,null);},Bzb:function(G){A.pe([this,this.E9],this);A.pe([this,this.
MM],this);},Byf:function(G){this.Art(!this.AnL);if(this.AnL===false){var Az=this.
Filter.DX(this.PQ.Ei,this.PQ.Operator);while(!!Az){this.Filter.QW(Az);Az=this.Filter.
DX(this.PQ.Ei,this.PQ.Operator);}A.abo([this,this.Fz,this.FD],0);}},Art:function(
E){if(this.AnL===E)return;this.AnL=E;A.abo([this,this.A78,this.Art],0);A.pe([this
,this.A3m],this);},AD2:function(E){if(this.At5===E)return;this.At5=E;A.abo([this
,this.A7l,this.AD2],0);},AD0:function(E){if(this.At4===E)return;this.At4=E;A.abo([
this,this.A7j,this.AD0],0);},Bfs:function(G){var F;this.AD2((F=this.Ny.Q,F[1].call(
F[0])));var Az=this.Filter.DX(4,2);if(!!Az){var Afs=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Az)?Az:null);if(!!Afs){var Aao=A._GetAutoObject(A.Device.Helper).Zp(
this.At5-1);Afs.A6=Aao;}else A.ab5("%s",Afg);}},Bfr:function(G){var F;this.AD0((
F=this.Op.Q,F[1].call(F[0])));var Az=this.Filter.DX(4,3);if(!!Az){var Afs=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Az)?Az:null);if(!!Afs){var Aao=A._GetAutoObject(
A.Device.Helper).Zp(this.At4);Afs.A6=Aao;}else A.ab5("%s",Afg);}},A3f:function(G
){var A1z=!!this.Filter.DX(this.Op.Ei,this.Op.Operator);var A3n=!!this.Filter.DX(
this.Ny.Ei,this.Ny.Operator);A._GetAutoObject(A.Device.Helper).Mx(this.RA,this.Al2
);A._GetAutoObject(A.Device.Helper).Mx(this.RB,this.Al2);A._GetAutoObject(A.Device.
Helper).Mx(this.Op,A1z);A._GetAutoObject(A.Device.Helper).Mx(this.Ny,A3n);},Aq7:
function(E){if(this.Al2===E)return;this.Al2=E;A.abo([this,this.A7i,this.Aq7],0);
A.pe([this,this.A3f],this);},Bc2:function(G){var Ew=(C.Ajo.isPrototypeOf(G)?G:null
);if(!Ew)return;var Az=this.Filter.DX(Ew.Ei,Ew.Operator);if(!!Az){this.Filter.QW(
Az);A.abo([this,this.Fz,this.FD],0);}else{if(Ew===this.RA){Az=A._NewObject(A.Device.
UInt32FilterCriterion,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Az)?Az:null).A6=A._GetAutoObject(A.Device.Helper).Zp(this.At4);this.
A8(this.Op);}else if(Ew===this.RB){Az=A._NewObject(A.Device.UInt32FilterCriterion
,0);Az.ES=Ew.Ei;Az.Operator=Ew.Operator;(A.Device.UInt32FilterCriterion.isPrototypeOf(
Az)?Az:null).A6=A._GetAutoObject(A.Device.Helper).Zp(this.At5-1);this.A8(this.Ny
);}if(!!Az){this.Filter.CY(Az);A.abo([this,this.Fz,this.FD],0);}}A.pe([this,this.
A3f],this);},Bye:function(G){this.Aq7(!this.Al2);if(this.Al2===false){var Az=this.
Filter.DX(this.Pa.Ei,this.Pa.Operator);while(!!Az){this.Filter.QW(Az);Az=this.Filter.
DX(this.Pa.Ei,this.Pa.Operator);}A.abo([this,this.Fz,this.FD],0);}},Fz:function(
){return this.Filter;},Bja:function(){return this.AuK;},Bi$:function(){return this.
AuJ;},BjM:function(){return this.Ar_;},Bjq:function(){return this.AqQ;},A7_:function(
){return this.Axg;},A79:function(){return this.Axf;},A78:function(){return this.
AnL;},A7l:function(){return this.At5;},A7j:function(){return this.At4;},A7i:function(
){return this.Al2;},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Gender._Init.
call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);
C.AA5._Init.call(this.Transponder={I:this},0);C.AA5._Init.call(this.Ed={I:this},
0);A.Core.Z._Init.call(this.Z={I:this},0);C.ABg._Init.call(this.PQ={I:this},0);C.
Ajo._Init.call(this.SQ={I:this},0);C.Aa0._Init.call(this.N5={I:this},0);C.Ajo._Init.
call(this.SR={I:this},0);C.Aa0._Init.call(this.Nf={I:this},0);C.ABg._Init.call(this.
Pa={I:this},0);C.Ajo._Init.call(this.RA={I:this},0);C.AB5._Init.call(this.Op={I:
this},0);C.Ajo._Init.call(this.RB={I:this},0);C.AB5._Init.call(this.Ny={I:this},
0);C.Amx._Init.call(this.K_={I:this},0);C.Amx._Init.call(this.Jf={I:this},0);C.Amx.
_Init.call(this.KP={I:this},0);C.Amx._Init.call(this.Mn={I:this},0);C.Qs._Init.call(
this.X8={I:this},0);C.Qs._Init.call(this.SS={I:this},0);C.Qs._Init.call(this.RC={
I:this},0);C.Aw._Init.call(this.Aw={I:this},0);this.__proto__=C.IT;var B;this.N.
Y(true);this.N.BZ(A.aaR(A.acf.A3X));this.Dl(C.AOM);this.Gender.At(this.AuK);this.
AnimalType.At(this.AuJ);this.Transponder.At(this.Ar_);this.Ed.At(this.AqQ);this.
Z.H(E4);this.Z.Kd(1);this.PQ.H(JR);this.PQ.Aj(true);this.PQ.U(A._GetAutoObject(A.
Device.Helper).Amv(0,1));this.PQ.Na(1);this.SQ.H(P0);this.SQ.Aj(true);this.SQ.U(
A.aaR(A.acf.ADm));this.SQ.Na(1);this.SQ.OF(2);this.N5.H(ZQ);this.N5.Na(1);this.N5.
OF(2);this.N5.AE4(A.aaR(A.acf.GD));this.SR.H(AkP);this.SR.Aj(true);this.SR.U(A.aaR(
A.acf.AGm));this.SR.Na(1);this.SR.OF(3);this.Nf.H(AnZ);this.Nf.Aj(true);this.Nf.
Na(1);this.Nf.OF(3);this.Nf.AE4(A.aaR(A.acf.GD));this.Pa.H(AVU);this.Pa.Aj(true);
this.Pa.U(A.aaR(A.acf.Rz));this.Pa.Na(4);this.RA.H(AVV);this.RA.Aj(true);this.RA.
U(A.aaR(A.acf.ADm));this.RA.Na(4);this.RA.OF(3);this.Op.H(AVW);this.Op.Na(4);this.
Op.OF(3);this.Op.A80(2);this.RB.H(AVX);this.RB.Aj(true);this.RB.U(A.aaR(A.acf.AGm
));this.RB.Na(4);this.RB.OF(2);this.Ny.H(AVY);this.Ny.Aj(true);this.Ny.Na(4);this.
Ny.OF(2);this.Ny.A80(3);this.K_.H(Asp);this.K_.Aj(true);this.K_.Na(7);this.K_.Ag8(
0);this.K_.OF(0);this.Jf.H(WU);this.Jf.Aj(true);this.Jf.Na(14);this.Jf.Ag8(0);this.
Jf.OF(0);this.KP.H(WU);this.KP.Aj(true);this.KP.Na(22);this.KP.Ag8(0);this.KP.OF(
1);this.Mn.H(WU);this.Mn.Aj(true);this.Mn.Na(26);this.Mn.Ag8(0);this.Mn.OF(1);this.
X8.H(WU);this.X8.Aj(true);this.X8.Na(11);this.X8.Ag8(0);this.X8.OF(0);this.SS.H(
WU);this.SS.Aj(true);this.SS.Na(12);this.SS.Ag8(0);this.SS.OF(0);this.RC.H(WU);this.
RC.Aj(true);this.RC.Na(8);this.RC.Ag8(0);this.RC.OF(0);this.Aw.H(IK);this.J(this.
Z,0);this.J(this.PQ,0);this.J(this.SQ,0);this.J(this.N5,0);this.J(this.SR,0);this.
J(this.Nf,0);this.J(this.Pa,0);this.J(this.RA,0);this.J(this.Op,0);this.J(this.RB
,0);this.J(this.Ny,0);this.J(this.K_,0);this.J(this.Jf,0);this.J(this.KP,0);this.
J(this.Mn,0);this.J(this.X8,0);this.J(this.SS,0);this.J(this.RC,0);this.J(this.Aw
,0);this.N.Cw=[this,this.Eo];this.N.Cc=[this,this.Byi];this.N.CT(A.aaL(A.ach.EU)
);this.Z.Ej=[this,this.Bzb];this.PQ.AN=[this,this.Byf];this.PQ.At([this,this.A78
,this.Art]);this.SQ.AN=[this,this.Bc3];this.N5.Gg([this,this.D3,this.GG]);this.N5.
At([this,this.A79,this.AFa]);this.SR.AN=[this,this.Bc3];this.Nf.Gg([this,this.D3
,this.GG]);this.Nf.At([this,this.A7_,this.AFb]);this.Pa.AN=[this,this.Bye];this.
Pa.At([this,this.A7i,this.Aq7]);this.RA.AN=[this,this.Bc2];this.Op.Gg([this,this.
D3,this.GG]);this.Op.At([this,this.A7j,this.AD0]);this.RB.AN=[this,this.Bc2];this.
Ny.Gg([this,this.D3,this.GG]);this.Ny.At([this,this.A7l,this.AD2]);this.K_.AN=[this
,this.AzN];this.K_.At([B=this.Gender,B.B9,B.B_]);this.K_.CH(this.Gender);this.Jf.
AN=[this,this.AzN];this.Jf.At([B=this.AnimalType,B.B9,B.B_]);this.Jf.CH(this.AnimalType
);this.KP.AN=[this,this.AzN];this.KP.At([B=this.Transponder,B.B9,B.B_]);this.KP.
CH(this.Transponder);this.Mn.AN=[this,this.AzN];this.Mn.At([B=this.Ed,B.B9,B.B_]
);this.Mn.CH(this.Ed);this.X8.AN=[this,this.A1O];this.SS.AN=[this,this.A1O];this.
RC.AN=[this,this.A1O];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.
Gender._Done();this.AnimalType._Done();this.Transponder._Done();this.Ed._Done();
this.Z._Done();this.PQ._Done();this.SQ._Done();this.N5._Done();this.SR._Done();this.
Nf._Done();this.Pa._Done();this.RA._Done();this.Op._Done();this.RB._Done();this.
Ny._Done();this.K_._Done();this.Jf._Done();this.KP._Done();this.Mn._Done();this.
X8._Done();this.SS._Done();this.RC._Done();this.Aw._Done();C.AB._Done.call(this);
},_ReInit:function(){C.AB._ReInit.call(this);this.Gender._ReInit();this.AnimalType.
_ReInit();this.Transponder._ReInit();this.Ed._ReInit();this.Z._ReInit();this.PQ.
_ReInit();this.SQ._ReInit();this.N5._ReInit();this.SR._ReInit();this.Nf._ReInit(
);this.Pa._ReInit();this.RA._ReInit();this.Op._ReInit();this.RB._ReInit();this.Ny.
_ReInit();this.K_._ReInit();this.Jf._ReInit();this.KP._ReInit();this.Mn._ReInit(
);this.X8._ReInit();this.SS._ReInit();this.RC._ReInit();this.Aw._ReInit();this.N.
BZ(A.aaR(A.acf.A3X));this.SQ.U(A.aaR(A.acf.ADm));this.N5.AE4(A.aaR(A.acf.GD));this.
SR.U(A.aaR(A.acf.AGm));this.Nf.AE4(A.aaR(A.acf.GD));this.Pa.U(A.aaR(A.acf.Rz));this.
RA.U(A.aaR(A.acf.ADm));this.RB.U(A.aaR(A.acf.AGm));},_Mark:function(D){var B;C.AB.
_Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ed)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Nf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pa)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Op)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.RB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ny
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RC)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListFilterScreen"};C.A9Z={Zq:null,Bmq:function(BvQ){var EM=A.
_NewObject(C.A9Y,0);EM.AB=BvQ;EM.Mo=this.Zq;this.Zq=EM;},A9E:function(){var U3=null;
if(!!this.Zq){U3=this.Zq.AB;this.Zq=this.Zq.Mo;}return U3;},Contains:function(AkW
){var EM=this.Zq;while(!!EM){if(EM.AB.AnF===AkW)return true;EM=EM.Mo;}return false;
},Bmg:function(){if(!!this.Zq)return this.Zq.AB;else return null;},_Init:function(
aArg){this.__proto__=C.A9Z;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Zq)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenStack"};C.A9Y={AB:null,Mo:null,_Init:function(
aArg){this.__proto__=C.A9Y;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AB)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Mo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ScreenNode"
};C.ALs={AQ3:function(){A._GetAutoObject(A.Device.Helper).AwP(this.H0,0);A._GetAutoObject(
C.AW).Fl();},A6N:function(){this.H0.Cl(A._GetAutoObject(A.Device.Device).Br);A._GetAutoObject(
C.AW).Fl();},A5N:function(){return A.aaL(A.ach.AmC);},_Init:function(aArg){C.AFt.
_Init.call(this,aArg);this.__proto__=C.ALs;this.Dl(C.IA);},_className:"Application::AnimalActionRateScreen"
};C.ALo={We:function(G){this.Af5();this.IR(A.aaR(A.acf.AUf),[this,this.ASK],5);this.
IR(A.aaR(A.acf.A4z),[this,this.Bj9],4);this.IR(A.aaR(A.acf.AFs),[this,this.ASv],
3);this.IR(A.aaR(A.acf.AnA),[this,this.Awc],2);this.IR(A.aaR(A.acf.Xw),[this,this.
AD5],1);this.IR(A.aaR(A.acf.At0),[this,this.ADZ],0);A._GetAutoObject(C.Bz).Fu();
A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.AlZ)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Cd(6);},Dv:function(G){},Aa3:function(){return C.AMh;},Aa4:function(
){return C.ACC;},QY:function(G){var A$=A._GetAutoObject(A.Device.Helper).Mk();var
Ayn=A._NewObject(A.Device.BoolFilterCriterion,0);Ayn.Initialize(8,0,true,true);A$.
CY(Ayn);A._GetAutoObject(A.Device.Device).Ap.Bh(A$);},HJ:function(G){C.GN.HJ.call(
this,G);if(this.AjV()===false){this.N.Cn(A.aaL(A.ach.AFB));this.N.Ci=[this,this.
A45];this.N.FC(A.jV);}this.N.OG(false);this.N.OH(false);},AfR:function(){A._GetAutoObject(
C.AW).BS(41);},AfQ:function(){A._GetAutoObject(C.AW).BS(43);},_Init:function(aArg
){C.GN._Init.call(this,aArg);this.__proto__=C.ALo;var B;this.Dl(C.AOc);this.Dt(A.
aaR(A.acf.A6U));this.Av8([B=A._GetAutoObject(A.Device.Device),B.A7m,B.A$I]);},_ReInit:
function(){C.GN._ReInit.call(this);this.Dt(A.aaR(A.acf.A6U));},_className:"Application::AlarmListScreen"
};C.AMJ={Dv:function(G){},Aly:function(G){if(!!this.Be)A.ab5("%i",this.Be.AD.Gi);
var Aa=(C.ABn.isPrototypeOf(G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper
).HF(Aa.Hu);A._GetAutoObject(C.AW).BS(13);}},QY:function(G){var A$=A._GetAutoObject(
A.Device.Helper).Mk();var AyH=A._NewObject(A.Device.BoolFilterCriterion,0);AyH.Initialize(
9,0,true,true);A$.CY(AyH);A._GetAutoObject(A.Device.Device).Ap.Bh(A$);},HJ:function(
G){C.GN.HJ.call(this,G);this.N.OG(false);this.N.OH(false);},_Init:function(aArg){
C.GN._Init.call(this,aArg);this.__proto__=C.AMJ;this.Dl(C.AOe);this.Dt(A.aaR(A.acf.
A6V));},_ReInit:function(){C.GN._ReInit.call(this);this.Dt(A.aaR(A.acf.A6V));},_className:
"Application::ControlListScreen"};C.Ad1={Filter:null,Ei:0,I1:10,TableId:0,Operator:
1,CU:function(){var F;this.Tg((F=this.Filter,F[1].call(F[0])).DX(this.Ei,this.Operator
));},Bg:function(aSize){C.Cj.Bg.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[
0]-(2*this.I1),aSize[1]]));},Bh:function(E){if(A.aaZ(this.Filter,E))return;if(!!
this.Filter)A.z$([this,this.L7],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.
L7],E,0);A.pe([this,this.L7],this);},L7:function(G){var F;if(!!this.Filter&&!!(F=
this.Filter,F[1].call(F[0])))this.Tg((F=this.Filter,F[1].call(F[0])).DX(this.Ei,
this.Operator));else this.Tg(null);},Ag8:function(E){if(this.TableId===E)return;
this.TableId=E;A.pe([this,this.L7],this);},Na:function(E){if(this.Ei===E)return;
this.Ei=E;A.pe([this,this.L7],this);},Tg:function(AM){if(!!AM)this.U(A._GetAutoObject(
A.Device.Helper).A5I(this.TableId,AM));else this.U(A._GetAutoObject(A.Device.Helper
).Amv(this.TableId,this.Ei));},OF:function(E){if(this.Operator===E)return;this.Operator=
E;A.pe([this,this.L7],this);},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.
__proto__=C.Ad1;this.V.H(AGZ);this.V.A3(0x11);},_ReInit:function(){C.Cj._ReInit.
call(this);this.CU();},_Mark:function(D){var B;C.Cj._Mark.call(this,D);if((B=this.
Filter)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"
};C.Qs={HZ:null,Bg:function(aSize){var B;C.Ad1.Bg.call(this,aSize);this.HZ.H([(aSize[
0]-((B=this.HZ.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.I1,0,this.
HZ.M[0]-this.I1,aSize[1]]);},Tg:function(AM){this.U(A._GetAutoObject(A.Device.Helper
).Amv(this.TableId,this.Ei));var Az=(A.Device.BoolFilterCriterion.isPrototypeOf(
AM)?AM:null);if(!!Az&&Az.A6)this.HZ.Cv(1);else this.HZ.Cv(0);},_Init:function(aArg
){C.Ad1._Init.call(this,aArg);A.acg.An._Init.call(this.HZ={I:this},0);this.__proto__=
C.Qs;this.HZ.H(AG0);this.HZ.Cv(0);this.J(this.HZ,0);this.HZ.Ay(A.aaL(A.ach.Aqf));
},_Done:function(){this.__proto__=C.Ad1;this.HZ._Done();C.Ad1._Done.call(this);}
,_ReInit:function(){C.Ad1._ReInit.call(this);this.HZ._ReInit();},_Mark:function(
D){var B;C.Ad1._Mark.call(this,D);if((B=this.HZ)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.AOM={An:null,Text:null,C9:function(
E){C.BQ.C9.call(this,E);this.Text.L(E);this.An.L(E);},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.An._Init.call(this.An={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AOM;this.An.H(AVZ);this.Text.H(AV0);this.
Text.A3(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.An,0);this.J(this.Text
,0);this.An.Ay(A.aaL(A.ach.Ad$));this.Text.S(A.aaL(A.fl.Ah));},_Done:function(){
this.__proto__=C.BQ;this.An._Done();this.Text._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.An._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BQ.
_Mark.call(this,D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AuW={
CZ:null,A0:null,VI:null,Bg:function(aSize){var B;C.BQ.Bg.call(this,aSize);this.VI.
H(A.abJ(this.VI.M,A.abe(this.A0.M.slice(0,2),AV1)));this.VI.H(A.abK(this.VI.M,A.
abf([(B=this.A0.M)[2]-B[0],B[3]-B[1]],AV2)));},Ai:function(Ae){var B;C.BQ.Ai.call(
this,Ae);var Ir=((Ae&0x40)===0x40)&&(this.AR===this.A0);if(Ir)this.VI.L(A.jb.AR);
else this.VI.L(A.jb.AmE);},C9:function(E){C.BQ.C9.call(this,E);this.CZ.C9(E);},AgX:
function(){return this.A0.AgX();},DT:function(E){this.CZ.DT(E);},_Init:function(
aArg){C.BQ._Init.call(this,aArg);C.CZ._Init.call(this.CZ={I:this},0);C.A0._Init.
call(this.A0={I:this},0);A.acg.CA._Init.call(this.VI={I:this},0);this.__proto__=
C.AuW;this.CZ.H(AV3);this.CZ.DT(0);this.A0.H(AV4);this.VI.H(AG1);this.VI.NV(2);this.
J(this.CZ,0);this.J(this.A0,0);this.J(this.VI,0);this.A8(this.A0);},_Done:function(
){this.__proto__=C.BQ;this.CZ._Done();this.A0._Done();this.VI._Done();C.BQ._Done.
call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.CZ._ReInit();this.A0.
_ReInit();this.VI._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((
B=this.CZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearch"
};C.DE={Dk:null,Ij:null,Ii:null,AfN:function(G){if(this.E$<0)this.M$(1);else if(
this.E$===9)this.M$(0);else this.M$(this.E$+1);A.pe(this.Dk,this);},Ai:function(
Ae){var B;C.E$.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Ir=((Ae&0x40)===0x40
);if(Ir){this.Background.L(A.jb.AR);this.Text.L(A.jb.Bi);this.Dm(256);}else if(G6
){this.Background.L(this.MY);this.Text.L(A.jb.Text);this.Dm(256);}else{this.Background.
L(this.MY);this.Text.L(A.jb.Text);this.Dm(128);}},AfM:function(G){if(this.E$<=0)
this.M$(9);else this.M$(this.E$-1);A.pe(this.Dk,this);},_Init:function(aArg){C.E$.
_Init.call(this,aArg);A.Core.BK._Init.call(this.Ij={I:this},0);A.Core.BK._Init.call(
this.Ii={I:this},0);this.__proto__=C.DE;this.Ij.Filter=4;this.Ii.Filter=5;this.Ij.
BL=[this,this.AfN];this.Ij.DS=[this,this.AfN];this.Ii.BL=[this,this.AfM];this.Ii.
DS=[this,this.AfM];},_Done:function(){this.__proto__=C.E$;this.Ij._Done();this.Ii.
_Done();C.E$._Done.call(this);},_ReInit:function(){C.E$._ReInit.call(this);this.
Ij._ReInit();this.Ii._ReInit();},_Mark:function(D){var B;C.E$._Mark.call(this,D);
if((B=this.Dk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ij)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputDigit"};C.A0={Dk:null,Cp:null,CR:null,Dr:null,Eh:null,F_:null
,EQ:null,Fb:null,E0:null,M3:0,ApW:false,Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);if(((Ae&0x40)===0x40)&&this.ApW)this.EQ.Aj8(true);else this.EQ.Aj8(false);}
,AEs:function(E){var B;if(E===this.AgX())return;var AJK=E;var Em=this.EQ;while(!
!Em){if(AJK>0){Em.M$(AJK%10);AJK=(AJK/10)|0;}else Em.M$(-1);Em=(C.DE.isPrototypeOf(
B=this.R5(Em,2,0x11))?B:null);}},AgX:function(){var B;var KV=A.jV;var P=0;var B3=
this.Cp;for(;P<6;P=P+1){if(!!B3&&(B3.E$>=0))KV=KV+B3.E$.toFixed();B3=(C.DE.isPrototypeOf(
B=this.Vx(B3,0x11))?B:null);}return A.wz(KV,-1,10);},Og:function(G){if(this.AgX(
)>=10)this.BeE(7);},MT:function(G){if((this.AgX()>0)&&(this.Cp.E$<0))this.BeE(2);
else if(this.AgX()<=0)this.E0.NC=true;},Ac8:function(G){A.pe(this.Dk,this);},BeE:
function(Gq){var B;var AKG=0;var Em=null;switch(Gq){case 2:{Em=this.Cp;AKG=7;}break;
case 7:{Em=this.EQ;AKG=2;}break;default:throw new Error(AV5);}while(!!Em){var A1I=(
C.DE.isPrototypeOf(B=this.R5(Em,AKG,0x11))?B:null);if(!!A1I)Em.M$(A1I.E$);else if(
AKG===7)Em.M$(0);else Em.M$(-1);Em=A1I;}A.pe([this,this.Ac8],this);},Aj8:function(
E){if(this.ApW===E)return;this.ApW=E;this.Am();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.DE._Init.call(this.Cp={I:this},0);C.DE._Init.call(this.CR={I:this
},0);C.DE._Init.call(this.Dr={I:this},0);C.DE._Init.call(this.Eh={I:this},0);C.DE.
_Init.call(this.F_={I:this},0);C.DE._Init.call(this.EQ={I:this},0);A.Core.BK._Init.
call(this.Fb={I:this},0);A.Core.BK._Init.call(this.E0={I:this},0);this.__proto__=
C.A0;this.H(AxE);this.Cp.AX(0x3);this.Cp.H(AG2);this.CR.AX(0x3);this.CR.H(AG3);this.
Dr.AX(0x3);this.Dr.H(AG4);this.Eh.AX(0x3);this.Eh.H(AG5);this.F_.AX(0x3);this.F_.
H(AG6);this.EQ.AX(0x3);this.EQ.H(AG7);this.EQ.M$(0);this.Fb.Filter=6;this.E0.Filter=
7;this.M3=A.jb.CG;this.J(this.Cp,0);this.J(this.CR,0);this.J(this.Dr,0);this.J(this.
Eh,0);this.J(this.F_,0);this.J(this.EQ,0);this.A8(this.EQ);this.Cp.Dk=[this,this.
Ac8];this.CR.Dk=[this,this.Ac8];this.Dr.Dk=[this,this.Ac8];this.Eh.Dk=[this,this.
Ac8];this.F_.Dk=[this,this.Ac8];this.EQ.Dk=[this,this.Ac8];this.Fb.BL=[this,this.
Og];this.E0.BL=[this,this.MT];},_Done:function(){this.__proto__=A.Core.O;this.Cp.
_Done();this.CR._Done();this.Dr._Done();this.Eh._Done();this.F_._Done();this.EQ.
_Done();this.Fb._Done();this.E0._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Cp._ReInit();this.CR._ReInit();this.Dr._ReInit(
);this.Eh._ReInit();this.F_._ReInit();this.EQ._ReInit();this.Fb._ReInit();this.E0.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Dk)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bf4="f8b39c50";C.BAL={Undefined:0,BBO:1,BA3:2};C.Akl={
Te:null,Aiy:null,K6:null,AMN:null,AnI:null,push:function(MF){if(!this.Te){MF.Ag$=
null;MF.Mo=null;this.Te=MF;this.Aiy=this.Te;}else{MF.Ag$=this.Aiy;MF.Mo=null;this.
Aiy.Mo=MF;this.Aiy=MF;}},BzN:function(MF){var P9=this.Te;while(!!P9){if(P9.JD.Id===
MF.Id)return P9;P9=P9.Mo;}return P9;},Bzv:function(MF){if(MF===this.Te)this.pop(
);else if(MF===this.Aiy){MF=MF.Ag$;if(!!MF)MF.Mo=null;this.Aiy=MF;}else{MF.Ag$.Mo=
MF.Mo;MF.Mo.Ag$=MF.Ag$;}},Ag1:function(E){var F;if(this.K6===E)return;this.K6=E;
if(!!this.K6)this.K6.Agj(2);(F=this.AMN,F[2].call(F[0],this.K6));},U0:function(G
){var P9=(C.ASY.isPrototypeOf(G)?G:null);if(!!P9){if(!P9.JD.PopupState){if(!this.
K6)this.Ag1(this.top());}else if(P9.JD.PopupState===4){this.pop();this.Ag1(this.
top());}else if(P9.JD.PopupState===5){this.pop();this.Ag1(this.top());}else if(P9.
JD.PopupState===7){this.pop();this.Ag1(this.top());}else if(P9.JD.PopupState===8
){this.pop();this.Ag1(this.top());}else if(P9.JD.PopupState===6){if(P9===this.K6
){this.pop();this.Ag1(this.top());}else this.Bzv(P9);}else if(P9.JD.PopupState===
3){this.pop();this.Ag1(this.top());}}},pop:function(){var AJ5=null;if(!!this.Te){
AJ5=this.Te;if(this.Te===this.Aiy){this.Te=null;this.Aiy=null;}else{this.Te=this.
Te.Mo;if(!this.Te)throw new Error(AV6);this.Te.Ag$=null;}AJ5.Ag$=null;AJ5.Mo=null;
}return AJ5;},top:function(){return this.Te;},Bzc:function(G){var B;var Atl=(A.Device.
PopupContext.isPrototypeOf(B=this.AnI.JD)?B:null);if(!!Atl){var A2V=this.BzN(Atl
);if(!!A2V){A2V.A8z(Atl);if(!Atl.Show)A2V.Agj(6);}else if(Atl.Show){var AJI=A._NewObject(
C.ASY,0);AJI.A8z(Atl);AJI.AR1=[this,this.U0];this.push(AJI);AJI.Agj(0);}}},_Init:
function(aArg){A.Core.A_k._Init.call(this.AnI={I:this},0);this.__proto__=C.Akl;this.
AnI.ARr=[this,this.Bzc];this.AnI.BkA(A._GetAutoObject(A.Device.Device).Anm);A.h7++;
},_Done:function(){this.__proto__=null;this.AnI._Done();A.h7--;},_ReInit:function(
){this.AnI._ReInit();},_Mark:function(D){var B;if((B=this.Te)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aiy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K6)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AMN)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AnI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ASY={SU:null,Mo:null,Ag$:null,JD:null,AR1:null,PopupIdToString:null,AhZ:function(
BuX,Bvu,BvP,BvF,BvH,BvE,Bvd){var U2=A._NewObject(C.ASX,0);U2.BlF(this.JD.Id);U2.
A9g(BuX);U2.AR2=BvE;U2.A9i(this.JD.AkE);U2.A85(this.JD.Akk);U2.Bw=A._NewObject(C.
N,0);U2.KJ().Cc=BvH;U2.KJ().Ci=null;U2.KJ().Cw=BvF;U2.KJ().BZ(BvP);U2.KJ().Cn(null
);U2.KJ().Ho(Bvu);U2.KJ().AEv(Bvd);return U2;},Aj4:function(){if(!this.SU){var Aiw=
this.PopupIdToString.BP(this.JD.Id);switch(this.JD.Id){case 46:this.SU=this.AhZ(
Aiw,A.jV,A.aaR(A.acf.Ok),null,[this,this.AJN],[this,this.Aiq],1);break;case 91:case
92:this.SU=this.AhZ(Aiw,A.jV,A.jV,null,null,[this,this.Aiq],0);break;case 39:this.
SU=this.AhZ(Aiw,A.aaR(A.acf.Ama),A.aaR(A.acf.Ok),[this,this.A1V],[this,this.A1W]
,[this,this.Aiq],3);break;case 13:this.SU=this.AhZ(Aiw,A.aaR(A.acf.Ama),A.aaR(A.
acf.BmB),[this,this.A1U],[this,this.AJN],[this,this.Aiq],3);break;case 25:this.SU=
this.AhZ(Aiw,A.aaR(A.acf.Ama),A.aaR(A.acf.Ok),[this,this.A1U],[this,this.AJN],[this
,this.Aiq],3);break;case 16:case 24:case 49:case 74:this.SU=this.AhZ(Aiw,A.aaR(A.
acf.Ama),A.jV,[this,this.A1U],null,[this,this.Aiq],1);break;case 4:case 7:case 33:
case 44:case 37:case 38:case 63:case 95:case 108:this.SU=this.AhZ(Aiw,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A1V],[this,this.A1W],[this,this.Aiq],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 42:case 41:case 50:case
51:case 57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:
case 8:case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case
12:case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 96:case 60:
case 98:case 65:case 66:case 61:case 104:case 31:case 67:case 106:case 86:case 68:
case 70:case 71:case 100:case 97:case 88:case 89:case 84:case 93:case 94:case 87:
case 109:case 102:case 101:case 103:this.SU=this.AhZ(Aiw,A.jV,A.aaR(A.acf.Ok),null
,[this,this.AJN],[this,this.Aiq],3);break;case 58:case 9:case 6:case 29:case 107:
case 32:case 47:case 48:case 59:case 72:case 99:case 90:case 73:case 105:this.SU=
this.AhZ(Aiw,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A1V],[this,this.A1W],[this
,this.Aiq],3);break;default:A.ab5("%s",(AV7+this.JD.Id.toFixed())+AV8);}}switch(
this.JD.Id){case 16:case 49:this.SU.A9w(true);break;case 91:case 92:this.SU.A9w(
false);break;default:;}return this.SU;},AJN:function(G){this.Agj(4);},A1U:function(
G){this.Agj(5);},A1W:function(G){this.Agj(7);},A1V:function(G){this.Agj(8);},Aiq:
function(G){this.Agj(3);},A8z:function(E){if(this.JD===E)return;this.JD=E;if(!!this.
SU){this.Aj4().A9i(this.JD.AkE);this.Aj4().A85(this.JD.Akk);}},Agj:function(BvK){
var B;this.JD.BlG(BvK);(B=this.AR1)?B[1].call(B[0],this):null;},ByM:function(G){
this.Agj(9);},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ASY;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.SU)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Mo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AR1)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.FU={BooleanToYesNo:null,Dp:function(
){return 2;},C5:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BP(aIndex);},DK:function(A2){return A2;},Hl:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.FU;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.AeW={Ue:null,J0:function(G){var F;var BO=this.AK;this.Bx(this.AK+1);if(this.
AK!==BO){if(!!this.Ue&&!!this.AC)switch(this.AC.C5(this.AK)){case 0:(F=this.Ue,F[
2].call(F[0],false));break;case 1:(F=this.Ue,F[2].call(F[0],true));break;default:;
}A.abo(this.Ue,0);}},JV:function(G){var F;var BO=this.AK;this.Bx(this.AK-1);if(this.
AK!==BO){if(!!this.Ue&&!!this.AC)switch(this.AC.C5(this.AK)){case 0:(F=this.Ue,F[
2].call(F[0],false));break;case 1:(F=this.Ue,F[2].call(F[0],true));break;default:;
}A.abo(this.Ue,0);}},Ake:function(E){if(A.aaZ(this.Ue,E))return;if(!!this.Q)A.z$([
this,this.A2w],this.Ue,0);this.Ue=E;if(!!E)A.zX([this,this.A2w],E,0);if(!!E)A.pe([
this,this.A2w],this);},A2w:function(G){var F;if(!!this.Ue){if((F=this.Ue,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.BW._Init.call(this,aArg
);this.__proto__=C.AeW;this.Kl(this.V,-1);},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Ue)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.AS_={I6:null,OM:null,II:null,Ga:null,AJ:null,AaT:null,Ago:null,Tz:null,RW:null
,Acg:null,WC:null,G$:null,AAN:true,Init:function(aArg){var B;A.zX([this,this.AlB
],[B=A._GetAutoObject(A.Device.Device),B.ARS,B.AZd],0);A.pe([this,this.AlB],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.AAN)this.N.C3(A.aaL(A.ach.
AP3));else this.N.C3(A.aaL(A.ach.AP4));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OM.L(A.jb.Bi);this.RW.Y(false);this.Tz.Y(false);this.II.Y(true);this.Ga.
Ar(false);(F=this.Ga.Q,F[2].call(F[0],this.Ga.B0));this.Background.L(A.jb.FZ);}else
if(this.AaT.Bv){this.OM.L(A.jb.Text);this.RW.Y(true);this.Tz.Y(true);this.II.Y(false
);this.Ga.Ar(false);(F=this.Ga.Q,F[2].call(F[0],this.Ga.B0));this.Background.L(A.
jb.ET);}else{this.OM.L(A.jb.Text);this.RW.Y(false);this.Tz.Y(false);this.II.Y(true
);this.Ga.Ar(true);this.Background.L(A.jb.CG);}if(this.Ago.Bv)this.WC.Y(true);else
this.WC.Y(false);},Cx:function(G){A._GetAutoObject(A.Device.Device).Ahj();},EV:function(
G){A._GetAutoObject(A.Device.Device).Any();A._GetAutoObject(A.Device.Device).AeH(
false);A._GetAutoObject(A.Device.Device).Uc(false);},AlB:function(G){var B;this.
Am();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
Byr],this);break;case 3:{A.pe([this,this.BdB],this);A.pe([B=this.AaT,B.Aw2],this
);A.pe(this.AaT.Mt,this);}break;case 4:A.ab5("%s",AV9);break;default:;}},Eo:function(
G){A._GetAutoObject(C.AW).Fl();},Bzd:function(G){this.Bl6(!this.AAN);},Bl6:function(
E){if(this.AAN===E)return;this.AAN=E;if(!E)A._GetAutoObject(A.Device.Device).AeH(
false);this.Am();},Byr:function(G){var B;this.BdB(this);if(this.AAN)A._GetAutoObject(
A.Device.Device).AeH(true);A._GetAutoObject(A.Device.Device).Wi(65280);A._GetAutoObject(
A.Device.Device).Uc(true);A.pe([B=this.AaT,B.StartTimer],this);A.pe([B=this.Ago,
B.StartTimer],this);this.Am();},Bys:function(G){A._GetAutoObject(A.Device.Device
).AeH(false);A._GetAutoObject(A.Device.Device).Uc(false);this.Am();},Byu:function(
G){this.Am();},BdB:function(G){A._GetAutoObject(A.Device.Device).Ahj();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.I6._Init.call(this.I6={I:this},0);C.CP._Init.
call(this.OM={I:this},0);A.acg.An._Init.call(this.II={I:this},0);A.acl.Ga._Init.
call(this.Ga={I:this},0);A.acg.AJ._Init.call(this.AJ={I:this},0);A.Core.Timer._Init.
call(this.AaT={I:this},0);A.Core.Timer._Init.call(this.Ago={I:this},0);A.acg.An.
_Init.call(this.Tz={I:this},0);A.acg.An._Init.call(this.RW={I:this},0);A.acg.Text.
_Init.call(this.Acg={I:this},0);C.WC._Init.call(this.WC={I:this},0);C.CP._Init.call(
this.G$={I:this},0);this.__proto__=C.AS_;var B;this.Background.L(A.jb.CG);this.N.
Y(true);this.I6.H(AV_);this.I6.Akh(0);this.OM.H(AV$);this.OM.R(A.aaR(A.acf.A_p));
this.OM.L(A.jb.Text);this.II.H(AWa);this.II.L(A.jb.AR);this.II.Y5(true);this.Ga.
Fe(1750);this.Ga.T$(750);this.Ga.Akc(0);this.Ga.Ar(true);this.Ga.B0=3;this.AJ.H(
AxF);this.AaT.PJ(-1);this.AaT.Wf(1000);this.Ago.PJ(-1);this.Ago.Wf(5000);this.Tz.
H(AG8);this.RW.H(AG8);this.RW.L(A.jb.ET);this.Acg.H(AxF);this.Acg.R(A.aaR(A.acf.
A90));this.Acg.L(A.jb.Text);this.WC.H(AxF);this.G$.H(AWb);this.G$.Ar(false);this.
G$.R(A.aaR(A.acf.RangeTest));this.G$.L(A.jb.Text);this.J(this.I6,0);this.J(this.
OM,0);this.J(this.II,0);this.J(this.AJ,0);this.J(this.Tz,0);this.J(this.RW,0);this.
J(this.Acg,0);this.J(this.WC,0);this.J(this.G$,0);this.N.Cw=[this,this.Eo];this.
N.Cc=[this,this.Bzd];this.N.CT(A.aaL(A.ach.EU));this.OM.S(A.aaL(A.fl.Ah));this.OM.
A7(A.aaL(A.fl.Ak));this.OM.CB(A.aaL(A.fl.By));this.II.Ay(A.aaL(A.ach.AC2));this.
Ga.Q=[B=this.II,B.ARF,B.Cv];this.AaT.Mt=[this,this.Bys];this.Ago.Mt=[this,this.Byu
];this.Tz.Ay(A.aaL(A.ach.Tz));this.RW.Ay(A.aaL(A.ach.RW));this.Acg.S(A.aaL(A.fl.
Ah));this.WC.At([B=A._GetAutoObject(A.Device.Device),B.ART,B.AZe]);this.G$.S(A.aaL(
A.fl.J_));this.G$.A7(A.aaL(A.fl.Ie));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.I6._Done();this.OM._Done();this.II._Done();this.Ga._Done();this.AJ._Done(
);this.AaT._Done();this.Ago._Done();this.Tz._Done();this.RW._Done();this.Acg._Done(
);this.WC._Done();this.G$._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.I6._ReInit();this.OM._ReInit();this.II._ReInit();this.Ga.
_ReInit();this.AJ._ReInit();this.AaT._ReInit();this.Ago._ReInit();this.Tz._ReInit(
);this.RW._ReInit();this.Acg._ReInit();this.WC._ReInit();this.G$._ReInit();this.
OM.R(A.aaR(A.acf.A_p));this.Acg.R(A.aaR(A.acf.A90));this.G$.R(A.aaR(A.acf.RangeTest
));this.OM.S(A.aaL(A.fl.Ah));this.OM.A7(A.aaL(A.fl.Ak));this.OM.CB(A.aaL(A.fl.By
));this.Acg.S(A.aaL(A.fl.Ah));this.G$.S(A.aaL(A.fl.J_));this.G$.A7(A.aaL(A.fl.Ie
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.I6)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.II)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ga)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ago)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tz)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.RW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acg)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.WC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G$).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.Abv={
ScreenType:0,NT:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},NW:
function(G){A._GetAutoObject(C.AW).BS(this.ScreenType);},_Init:function(aArg){C.
Cj._Init.call(this,aArg);this.__proto__=C.Abv;},_className:"Application::MenuItemScreen"
};C.T1={AdI:null,Mf:null,Amb:false,Init:function(aArg){},Ai:function(Ae){C.Cj.Ai.
call(this,Ae);if(this.Amb){this.Mf.Cv(1);this.Mf.L(A.jb.H1);}else{this.Mf.Cv(0);
if(this.Kx)this.Mf.L(A.jb.Bi);else if(this.Hb)this.Mf.L(A.jb.Text);else this.Mf.
L(A.jb.Bi);}},IP:function(G){var F,CN;if(!!this.AdI){(CN=this.AdI,CN[2].call(CN[
0],!(F=this.AdI,F[1].call(F[0]))));this.AEb((F=this.AdI,F[1].call(F[0])));A.pe([
this,this.DC],this);}},A11:function(G){this.Kx=true;this.DC(this);},AEb:function(
E){if(this.Amb===E)return;this.Amb=E;this.DC(this);this.Am();},A2p:function(G){var
F;this.AEb((F=this.AdI,F[1].call(F[0])));},AZx:function(s){this.A2p(s);},DC:function(
G){var F;if(!this.N||!this.Kx)return;if(this.Amb){(F=this.N,F[1].call(F[0])).BZ(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).HL.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).BZ(A.aaR(A.acf.A6_));(F=this.N,F[1].call(F[0])).HL.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).Am();},AR7:function(E){if(A.aaZ(this.AdI,E))
return;if(!!this.AdI)A.z$([this,this.AZx],this.AdI,0);this.AdI=E;if(!!E)A.zX([this
,this.AZx],E,0);if(!!E)A.pe([this,this.AZx],this);},_Init:function(aArg){C.Cj._Init.
call(this,aArg);A.acg.An._Init.call(this.Mf={I:this},0);this.__proto__=C.T1;this.
V.L(A.jb.H1);this.Mf.H(AG9);this.Mf.Cv(0);this.J(this.Mf,0);this.Mf.Ay(A.aaL(A.ach.
Aqf));this.Init(aArg);},_Done:function(){this.__proto__=C.Cj;this.Mf._Done();C.Cj.
_Done.call(this);},_ReInit:function(){C.Cj._ReInit.call(this);this.Mf._ReInit();
},_Mark:function(D){var B;C.Cj._Mark.call(this,D);if((B=this.AdI)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Mf)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.AMT={HY:null,ID:null,_Init:function(aArg){C.Cr.
_Init.call(this,aArg);C.SA._Init.call(this.HY={I:this},0);C.AFS._Init.call(this.
ID={I:this},0);this.__proto__=C.AMT;var B;this.JK(A.aaR(A.acf.ABM));this.HY.H(AhC
);this.HY.Aj(true);this.HY.U(A.aaR(A.acf.Date));this.HY.Bf(true);this.ID.H(WV);this.
ID.Aj(true);this.ID.U(A.aaR(A.acf.Bt));this.J(this.HY,0);this.J(this.ID,0);this.
HY.Aet([B=this.HY,B.FJ]);this.HY.Gg([this,this.D3,this.GG]);this.HY.Akb(A.aaL(A.
ach.Edit));this.HY.AbM([B=A._GetAutoObject(A.Device.Helper),B.UJ,B.UK]);this.ID.
Aet([B=this.ID,B.FJ]);this.ID.Gg([this,this.D3,this.GG]);this.ID.Akb(A.aaL(A.ach.
Edit));this.ID.AbM([B=A._GetAutoObject(A.Device.Helper),B.UJ,B.UK]);},_Done:function(
){this.__proto__=C.Cr;this.HY._Done();this.ID._Done();C.Cr._Done.call(this);},_ReInit:
function(){C.Cr._ReInit.call(this);this.HY._ReInit();this.ID._ReInit();this.JK(A.
aaR(A.acf.ABM));this.HY.U(A.aaR(A.acf.Date));this.ID.U(A.aaR(A.acf.Bt));},_Mark:
function(D){var B;C.Cr._Mark.call(this,D);if((B=this.HY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.AT7={Q4:null,Fv:null,B5:null,OA:null,Yo:null,AaC:null,_Init:function(aArg){C.
Cr._Init.call(this,aArg);C.Q4._Init.call(this.Q4={I:this},0);C.ALO._Init.call(this.
Fv={I:this},0);C.ATG._Init.call(this.B5={I:this},0);C.ATI._Init.call(this.OA={I:
this},0);C.AeW._Init.call(this.Yo={I:this},0);C.AaC._Init.call(this.AaC={I:this}
,0);this.__proto__=C.AT7;var B;this.JK(A.aaR(A.acf.Temperature));this.Fv.At(A._GetAutoObject(
A.Device.Device).AnimalType);this.B5.H(AWc);this.B5.Aj(true);this.B5.U(A.aaR(A.acf.
AqO));this.B5.Bf(false);this.OA.H(ZR);this.OA.Aj(true);this.OA.U(A.aaR(A.acf.Undertemperature
));this.OA.Bf(true);this.OA.Bx(3800);this.OA.Gn(3000);this.OA.E1(5000);this.OA.A9p(
A.aaR(A.acf.AF5));this.Yo.H(AWd);this.Yo.Aj(true);this.Yo.Y(true);this.Yo.U(A.aaR(
A.acf.A3V));this.J(this.B5,0);this.J(this.OA,0);this.J(this.Yo,0);this.B5.Aet([B=
this.B5,B.FJ]);this.B5.Gg([this,this.D3,this.GG]);this.B5.Akb(A.aaL(A.ach.Edit));
this.B5.LT([B=this.B5,B.Ayc]);this.B5.LV(A.aaL(A.ach.Anp));this.B5.At([B=this.Fv
,B.B9,B.B_]);this.B5.CH(this.Fv);this.B5.A83([B=this.Fv,B.AR0,B.AZk]);this.B5.A82([
B=this.Fv,B.ARZ,B.AZj]);this.OA.LT([B=this.B5,B.Ayc]);this.OA.LV(A.aaL(A.ach.Anp
));this.OA.At([B=A._GetAutoObject(A.Device.Device),B.A76,B.A$6]);this.Yo.CH(this.
AaC);this.Yo.Ake([B=A._GetAutoObject(A.Device.Device),B.A7y,B.A$R]);},_Done:function(
){this.__proto__=C.Cr;this.Q4._Done();this.Fv._Done();this.B5._Done();this.OA._Done(
);this.Yo._Done();this.AaC._Done();C.Cr._Done.call(this);},_ReInit:function(){C.
Cr._ReInit.call(this);this.Q4._ReInit();this.Fv._ReInit();this.B5._ReInit();this.
OA._ReInit();this.Yo._ReInit();this.AaC._ReInit();this.JK(A.aaR(A.acf.Temperature
));this.B5.U(A.aaR(A.acf.AqO));this.OA.U(A.aaR(A.acf.Undertemperature));this.OA.
A9p(A.aaR(A.acf.AF5));this.Yo.U(A.aaR(A.acf.A3V));},_Mark:function(D){var B;C.Cr.
_Mark.call(this,D);if((B=this.Q4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
OA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yo)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AM7={Py:null,Pz:null,Se:null,VJ:null,Sg:null,Sf:null,FU:null,Ab7:null,Init:function(
aArg){A.zX([this,this.Bnl],this.Pz.Q,0);},Bnl:function(G){var F;A._GetAutoObject(
A.Device.Device).Awn((F=this.Pz.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cr.
_Init.call(this,aArg);C.I2._Init.call(this.Py={I:this},0);C.BW._Init.call(this.Pz={
I:this},0);C.AeW._Init.call(this.Se={I:this},0);C.I2._Init.call(this.VJ={I:this}
,0);C.AeW._Init.call(this.Sg={I:this},0);C.AeW._Init.call(this.Sf={I:this},0);C.
FU._Init.call(this.FU={I:this},0);C.Ab7._Init.call(this.Ab7={I:this},0);this.__proto__=
C.AM7;var B;this.N.H(WU);this.JK(A.aaR(A.acf.Device));this.Py.H(AhC);this.Py.Aj(
true);this.Py.U(A.aaR(A.acf.A9$));this.Py.Bf(false);this.Py.Gn(2);this.Py.E1(60);
this.Py.Kh(A.aaR(A.acf.AGj));this.Py.KK(A.aaR(A.acf.AGj));this.Pz.H(AWe);this.Pz.
Aj(true);this.Pz.U(A.aaR(A.acf.A_g));this.Pz.Bf(true);this.Pz.Bx(0);this.Pz.Gn(-
1);this.Pz.E1(1);this.Se.H(ZR);this.Se.Aj(true);this.Se.U(A.aaR(A.acf.Hw));this.
Se.Bf(false);this.Se.Bx(0);this.Se.Gn(-1);this.Se.E1(1);this.VJ.H(An0);this.VJ.Aj(
true);this.VJ.U(A.aaR(A.acf.A4s));this.VJ.Bf(true);this.VJ.Kh(Afh);this.VJ.KK(Afh
);this.Sg.H(AkQ);this.Sg.Aj(true);this.Sg.U(A.aaR(A.acf.Asb));this.Sg.Bf(false);
this.Sg.Bx(1);this.Sg.Gn(-1);this.Sg.E1(1);this.Sf.H(AG_);this.Sf.Aj(true);this.
Sf.U(A.aaR(A.acf.ArR));this.Sf.Bf(true);this.Sf.Bx(0);this.Sf.Gn(-1);this.Sf.E1(
1);this.Ab7.At(A._GetAutoObject(A.Device.Device).Aw1);this.J(this.Py,0);this.J(this.
Pz,0);this.J(this.Se,0);this.J(this.VJ,0);this.J(this.Sg,0);this.J(this.Sf,0);this.
Py.At([B=A._GetAutoObject(A.Device.Device),B.A7Y,B.A$2]);this.Pz.At([B=this.Ab7,
B.B9,B.B_]);this.Pz.CH(this.Ab7);this.Se.CH(this.FU);this.Se.Ake([B=A._GetAutoObject(
A.Device.Device),B.ADO,B.AH1]);this.VJ.At([B=A._GetAutoObject(A.Device.Device),B.
A7v,B.A$O]);this.Sg.CH(this.FU);this.Sg.Ake([B=A._GetAutoObject(A.Device.Device)
,B.A77,B.A$7]);this.Sf.CH(this.FU);this.Sf.Ake([B=A._GetAutoObject(A.Device.Device
),B.ARJ,B.AY9]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cr;this.Py._Done(
);this.Pz._Done();this.Se._Done();this.VJ._Done();this.Sg._Done();this.Sf._Done(
);this.FU._Done();this.Ab7._Done();C.Cr._Done.call(this);},_ReInit:function(){C.
Cr._ReInit.call(this);this.Py._ReInit();this.Pz._ReInit();this.Se._ReInit();this.
VJ._ReInit();this.Sg._ReInit();this.Sf._ReInit();this.FU._ReInit();this.Ab7._ReInit(
);this.JK(A.aaR(A.acf.Device));this.Py.U(A.aaR(A.acf.A9$));this.Py.Kh(A.aaR(A.acf.
AGj));this.Py.KK(A.aaR(A.acf.AGj));this.Pz.U(A.aaR(A.acf.A_g));this.Se.U(A.aaR(A.
acf.Hw));this.VJ.U(A.aaR(A.acf.A4s));this.Sg.U(A.aaR(A.acf.Asb));this.Sf.U(A.aaR(
A.acf.ArR));},_Mark:function(D){var B;C.Cr._Mark.call(this,D);if((B=this.Py)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Se)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab7)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.ATk={VM:null,VL:
null,QC:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BgG
],this.QC.Q,0);},BgG:function(G){var F;A._GetAutoObject(A.Device.Device).Aj9((F=
this.QC.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cr._Init.call(this,aArg);C.
NQ._Init.call(this.VM={I:this},0);C.NQ._Init.call(this.VL={I:this},0);C.ATC._Init.
call(this.QC={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.ATk;var B;this.JK(A.aaR(A.acf.ArI));this.VM.H(JR);this.
VM.Aj(true);this.VM.U(A.aaR(A.acf.Ajj));this.VM.Bf(false);this.VM.NT(99);this.VL.
H(AWf);this.VL.Aj(true);this.VL.U(A.aaR(A.acf.ApR));this.VL.Bf(true);this.VL.NT(
100);this.QC.H(WV);this.QC.Aj(true);this.QC.U(A.aaR(A.acf.A30));this.QC.Bf(false
);this.QC.Gn(-1);this.QC.E1(1);this.EartagNrAssignmentMode.At(A._GetAutoObject(A.
Device.Device).EartagNrAssignmentMode);this.J(this.VM,0);this.J(this.VL,0);this.
J(this.QC,0);this.VM.AN=[B=this.VM,B.NW];this.VL.AN=[B=this.VL,B.NW];this.QC.At([
B=this.EartagNrAssignmentMode,B.B9,B.B_]);this.QC.CH(this.EartagNrAssignmentMode
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cr;this.VM._Done();this.VL.
_Done();this.QC._Done();this.EartagNrAssignmentMode._Done();C.Cr._Done.call(this
);},_ReInit:function(){C.Cr._ReInit.call(this);this.VM._ReInit();this.VL._ReInit(
);this.QC._ReInit();this.EartagNrAssignmentMode._ReInit();this.JK(A.aaR(A.acf.ArI
));this.VM.U(A.aaR(A.acf.Ajj));this.VL.U(A.aaR(A.acf.ApR));this.QC.U(A.aaR(A.acf.
A30));},_Mark:function(D){var B;C.Cr._Mark.call(this,D);if((B=this.VM)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.VL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QC).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::RegistrationSettingsScreen"};C.WC={Q:null
,TransponderProtocolToString:null,AoY:null,Background:null,Z:null,R_:null,GD:null
,PD:null,OC:null,Pg:null,C4:null,Go:null,Su:null,NY:null,CountryToString:null,At:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.L6],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.L6],E,0);if(!!E)A.pe([this,this.L6],this);},L6:function(
G){var B;var F;if(!!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GD.R((F=this.
Q,F[1].call(F[0])).Id.toFixed());var BM=(F=this.Q,F[1].call(F[0])).Bhb();if(BM<900
){var JU=A._GetAutoObject(A.Device.Converter).AMM(BM);if(!!JU)this.C4.R(((this.CountryToString.
Lo(JU)+Acr)+BM.toFixed())+OX);else this.C4.R(BM.toFixed());if(JU===10){var AJq=this.
A52((F=this.Q,F[1].call(F[0])).Id);this.C4.R(this.C4.String+((((AWg+this.AoY.Bn7(
AJq))+Acr)+A.abl(this.AoY.Bn6(AJq),2,10))+OX));}this.C4.Y(true);this.Pg.Y(true);
this.OC.Y(false);this.PD.Y(false);}else{this.OC.R(((A._GetAutoObject(A.Device.Converter
).Bf7(BM)+Acr)+BM.toFixed())+OX);this.OC.Y(true);this.PD.Y(true);this.C4.Y(false
);this.Pg.Y(false);}if(BM===276){this.Go.R(this.AoY.BP(this.A52((F=this.Q,F[1].call(
F[0])).Id)));this.Go.Y(true);}else this.Go.Y(false);this.NY.R(this.TransponderProtocolToString.
BP((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GD.R(A.jV);this.OC.
R(A.jV);this.Go.R(A.jV);this.C4.R(A.jV);this.NY.R(A.jV);}},A52:function(Kt){var Ql=
0;var JU=A._GetAutoObject(A.Device.Converter).Acf(Kt);switch(JU){case 10:{var FY=
A._GetAutoObject(A.Device.Helper).TD(Kt,8,2)|0;Ql=A._GetAutoObject(A.Device.Converter
).ACb(FY);}break;default:;}return Ql;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.AoY={I:this},0);A.acg.AJ.
_Init.call(this.Background={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.
CP._Init.call(this.R_={I:this},0);C.CP._Init.call(this.GD={I:this},0);C.CP._Init.
call(this.PD={I:this},0);C.CP._Init.call(this.OC={I:this},0);C.CP._Init.call(this.
Pg={I:this},0);C.CP._Init.call(this.C4={I:this},0);C.CP._Init.call(this.Go={I:this
},0);C.CP._Init.call(this.Su={I:this},0);C.CP._Init.call(this.NY={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.WC;
this.H(Act);this.Background.AX(0x3F);this.Background.H(Act);this.Background.L(A.
jb.C1);this.Z.AX(0x3F);this.Z.H(Act);this.Z.Kd(9);this.R_.H(AWh);this.R_.Aj(true
);this.R_.R(A.aaR(A.acf.GD)+A.aaR(A.acf.Colon));this.R_.A3(0x11);this.R_.L(A.jb.
Text);this.GD.H(AWi);this.GD.Aj(true);this.GD.R(AWj);this.GD.A3(0x14);this.GD.L(
A.jb.Text);this.PD.H(AG$);this.PD.Aj(true);this.PD.R(A.aaR(A.acf.A9F)+A.aaR(A.acf.
Colon));this.PD.A3(0x11);this.PD.L(A.jb.Text);this.OC.H(AHa);this.OC.Aj(true);this.
OC.R(AWk);this.OC.A3(0x14);this.OC.L(A.jb.Text);this.Pg.H(AG$);this.Pg.Aj(true);
this.Pg.R(A.aaR(A.acf.C4)+A.aaR(A.acf.Colon));this.Pg.A3(0x11);this.Pg.L(A.jb.Text
);this.C4.H(AHa);this.C4.Aj(true);this.C4.R(AxG);this.C4.A3(0x14);this.C4.L(A.jb.
Text);this.Go.H(AxH);this.Go.Aj(true);this.Go.R(AWl);this.Go.A3(0x14);this.Go.L(
A.jb.Text);this.Su.H(AWm);this.Su.Aj(true);this.Su.R(A.aaR(A.acf.NY)+A.aaR(A.acf.
Colon));this.Su.A3(0x11);this.Su.L(A.jb.Text);this.NY.H(AHb);this.NY.Aj(true);this.
NY.R(AHc);this.NY.A3(0x14);this.NY.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Z,0);this.J(this.R_,0);this.J(this.GD,0);this.J(this.PD,0);this.J(this.OC,0
);this.J(this.Pg,0);this.J(this.C4,0);this.J(this.Go,0);this.J(this.Su,0);this.J(
this.NY,0);this.R_.S(A.aaL(A.fl.Ak));this.R_.A7(A.aaL(A.fl.By));this.GD.S(A.aaL(
A.fl.Ak));this.GD.A7(A.aaL(A.fl.By));this.PD.S(A.aaL(A.fl.Ak));this.PD.A7(A.aaL(
A.fl.By));this.OC.S(A.aaL(A.fl.Ak));this.OC.A7(A.aaL(A.fl.By));this.Pg.S(A.aaL(A.
fl.Ak));this.Pg.A7(A.aaL(A.fl.By));this.C4.S(A.aaL(A.fl.Ak));this.C4.A7(A.aaL(A.
fl.By));this.Go.S(A.aaL(A.fl.Ak));this.Go.A7(A.aaL(A.fl.By));this.Su.S(A.aaL(A.fl.
Ak));this.Su.A7(A.aaL(A.fl.By));this.NY.S(A.aaL(A.fl.Ak));this.NY.A7(A.aaL(A.fl.
By));},_Done:function(){this.__proto__=A.Core.O;this.TransponderProtocolToString.
_Done();this.AoY._Done();this.Background._Done();this.Z._Done();this.R_._Done();
this.GD._Done();this.PD._Done();this.OC._Done();this.Pg._Done();this.C4._Done();
this.Go._Done();this.Su._Done();this.NY._Done();this.CountryToString._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.AoY._ReInit();this.Background._ReInit();this.Z._ReInit();this.R_.
_ReInit();this.GD._ReInit();this.PD._ReInit();this.OC._ReInit();this.Pg._ReInit(
);this.C4._ReInit();this.Go._ReInit();this.Su._ReInit();this.NY._ReInit();this.CountryToString.
_ReInit();this.R_.R(A.aaR(A.acf.GD)+A.aaR(A.acf.Colon));this.PD.R(A.aaR(A.acf.A9F
)+A.aaR(A.acf.Colon));this.Pg.R(A.aaR(A.acf.C4)+A.aaR(A.acf.Colon));this.Su.R(A.
aaR(A.acf.NY)+A.aaR(A.acf.Colon));this.R_.S(A.aaL(A.fl.Ak));this.R_.A7(A.aaL(A.fl.
By));this.GD.S(A.aaL(A.fl.Ak));this.GD.A7(A.aaL(A.fl.By));this.PD.S(A.aaL(A.fl.Ak
));this.PD.A7(A.aaL(A.fl.By));this.OC.S(A.aaL(A.fl.Ak));this.OC.A7(A.aaL(A.fl.By
));this.Pg.S(A.aaL(A.fl.Ak));this.Pg.A7(A.aaL(A.fl.By));this.C4.S(A.aaL(A.fl.Ak)
);this.C4.A7(A.aaL(A.fl.By));this.Go.S(A.aaL(A.fl.Ak));this.Go.A7(A.aaL(A.fl.By)
);this.Su.S(A.aaL(A.fl.Ak));this.Su.A7(A.aaL(A.fl.By));this.NY.S(A.aaL(A.fl.Ak));
this.NY.A7(A.aaL(A.fl.By));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AoY)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OC
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Go)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QJ={DZ:null,A9S:A.jV,Ai:function(Ae){C.Fc.Ai.call(
this,Ae);if(this.Mj.Fd())this.DZ.C2(A.jb.AR);else this.DZ.C2(this.Background.AQ);
this.DZ.Aka(this.GZ.AQ);},Y9:function(E){if(this.A9S===E)return;this.A9S=E;this.
DZ.Text.R(E);this.DZ.Y(E!==A.jV);},_Init:function(aArg){C.Fc._Init.call(this,aArg
);C.DZ._Init.call(this.DZ={I:this},0);this.__proto__=C.QJ;this.Background.H(AWn);
this.Mj.H(WI);this.Ow.H(AxI);this.QP.H(AxI);this.DZ.H(AWo);this.DZ.Y(false);this.
J(this.DZ,0);this.GZ.S(A.aaL(A.fl.Ah));this.GZ.A7(A.aaL(A.fl.Ak));this.GZ.CB(A.aaL(
A.fl.By));},_Done:function(){this.__proto__=C.Fc;this.DZ._Done();C.Fc._Done.call(
this);},_ReInit:function(){C.Fc._ReInit.call(this);this.DZ._ReInit();this.GZ.S(A.
aaL(A.fl.Ah));this.GZ.A7(A.aaL(A.fl.Ak));this.GZ.CB(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.Fc._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.DZ={B4:null,Aeb:null,An:null,Text:null
,DD:A.jV,Amn:0,MY:0,I1:0,A4v:0x14,Init:function(aArg){},U:function(E){if(this.DD===
E)return;this.DD=E;this.Text.R(E);},BAq:function(G){this.An.H(this.Text.M);this.
Aeb.H(this.Text.M);},Aka:function(E){if(this.Amn===E)return;this.Amn=E;this.Aeb.
L(E);this.Text.L(E);},C2:function(E){if(this.MY===E)return;this.MY=E;this.An.L(E
);},S:function(E){if(this.B4===E)return;this.B4=E;this.Text.S(E);},HH:function(E
){if(this.I1===E)return;this.I1=E;this.Text.HH(E);},Bj7:function(E){if(this.A4v===
E)return;this.A4v=E;this.Text.A3(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.NJ._Init.call(this.Aeb={I:this},0);A.acg.NJ._Init.call(this.An={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.DZ;this.H(AHd);
this.Aeb.AX(0x8);this.Aeb.L(A.jb.Text);this.An.AX(0x8);this.An.L(A.jb.C1);this.Text.
AX(0xD);this.Text.H(AHd);this.Text.HH(5);this.Text.I0(true);this.Text.A3(0x14);this.
Text.L(A.jb.Text);this.J(this.Aeb,0);this.J(this.An,0);this.J(this.Text,0);this.
Aeb.Ay(A.aaL(A.ach.AO_));this.An.Ay(A.aaL(A.ach.AO9));this.Text.QT([this,this.BAq
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Aeb._Done();this.An._Done();this.Text._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aeb._ReInit();this.An.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Aeb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.TX={DP:null,Z:null,Aw:null,Dv:function(G){var B;C.AB.Dv.call(this,G);if(!!this.
AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},Cx:function(
G){C.AB.Cx.call(this,G);this.AKw(this);A._GetAutoObject(A.Device.Device).Ap.Bh(null
);A._GetAutoObject(A.Device.Device).Br.Bh(null);A._GetAutoObject(A.Device.Helper
).Akq();A._GetAutoObject(A.Device.Helper).ArO();},Ia:function(G){},Acy:function(
s){this.Ia(s);},A2f:function(G){A._GetAutoObject(C.AW).Fl();},E9:function(G){var
B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.
Mr(-this.Z.Bq[1]);},AKw:function(G){},BEs:function(s){this.AKw(s);},G8:function(
G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.
acg.AJ._Init.call(this.DP={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Aw.
_Init.call(this.Aw={I:this},0);this.__proto__=C.TX;this.Background.L(A.jb.C1);this.
N.Y(true);this.N.BZ(A.jV);this.Dl(C.Aqp);this.DP.AX(0x3F);this.DP.H(E4);this.DP.
L(A.jb.CG);this.Z.H(E4);this.Z.Kd(9);this.Aw.H(IK);this.J(this.DP,0);this.J(this.
Z,0);this.J(this.Aw,0);this.N.Cw=[this,this.A2f];this.N.CT(A.aaL(A.ach.EU));this.
Z.Ej=[this,this.G8];},_Done:function(){this.__proto__=C.AB;this.DP._Done();this.
Z._Done();this.Aw._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DP._ReInit();this.Z._ReInit();this.Aw._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ListsScreen"};C.AUD={We:function(G){this.Af5();this.
IR(A.aaR(A.acf.AUd),[this,this.ASJ],7);this.IR(A.aaR(A.acf.ArJ),[this,this.Bj_],
6);this.IR(A.aaR(A.acf.AFs),[this,this.ASv],3);this.IR(A.aaR(A.acf.AnA),[this,this.
Awc],2);this.IR(A.aaR(A.acf.Xw),[this,this.AD5],1);this.IR(A.aaR(A.acf.At0),[this
,this.ADZ],0);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.
AlZ)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cd(6);},Dv:function(G
){},Aa3:function(){return C.AMn;},Aa4:function(){return C.AOS;},QY:function(G){var
A$=A._GetAutoObject(A.Device.Helper).Mk();var AAP=A._NewObject(A.Device.BoolFilterCriterion
,0);AAP.Initialize(12,0,true,true);A$.CY(AAP);A._GetAutoObject(A.Device.Device).
Ap.Bh(A$);},HJ:function(G){C.GN.HJ.call(this,G);if(this.AjV()===false){this.N.Cn(
A.aaL(A.ach.ArJ));this.N.Ci=[this,this.A48];this.N.FC(A.jV);}this.N.OG(false);this.
N.OH(false);},AfR:function(){A._GetAutoObject(C.AW).BS(42);},AfQ:function(){A._GetAutoObject(
C.AW).BS(45);},_Init:function(aArg){C.GN._Init.call(this,aArg);this.__proto__=C.
AUD;var B;this.Dl(C.AON);this.Dt(A.aaR(A.acf.A6W));this.Av8([B=A._GetAutoObject(
A.Device.Device),B.A7$,B.A$8]);},_ReInit:function(){C.GN._ReInit.call(this);this.
Dt(A.aaR(A.acf.A6W));},_className:"Application::WatchListScreen"};C.ALt={Dv:function(
G){var B;var Jr=(A.Core.BK.isPrototypeOf(G)?G:null);if(((Jr.CL===4)||(Jr.CL===5)
)===false){C.Axi.Dv.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState
!==1)return;var Bbt=A._GetAutoObject(A.Device.Device).KQ;var S8;if(Jr.CL===5)S8=
5;else S8=4;var AAw=A._GetAutoObject(A.acj.DN).Bb2(Bbt,S8);var GK=(((Bbt+((AAw/2
)|0))/AAw)|0)*AAw;if(Jr.CL===4)GK+=AAw;else if(Jr.CL===5)GK-=AAw;if(GK>999900)GK=
999900;if(GK<100)GK=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(GK);
},Ar2:function(G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.
pe([B=this.OS,B.Cw],this);else A._GetAutoObject(C.AW).Fl();},Ws:function(G){if(A.
_GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device
).Ar4();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(this.A99()===
false){this.H0.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KQ);this.H0.Cl(
A._GetAutoObject(A.Device.Device).Br);A._GetAutoObject(C.AW).Fl();}}else if(A._GetAutoObject(
A.Device.Device).MeasureState===3){this.H0.OnSetBodyWeight(A._GetAutoObject(A.Device.
Device).KQ);this.H0.Cl(A._GetAutoObject(A.Device.Device).Br);A._GetAutoObject(C.
AW).Fl();}},Akx:function(G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===
3)A.pe([B=this.OS,B.Cc],this);},Bb1:function(){var AKJ=A._GetAutoObject(A.Device.
Helper).W.Ahv(1);if(AKJ>=100000)AKJ=(Math.round(AKJ/1000)|0)*1000;return AKJ;},_Init:
function(aArg){C.Axi._Init.call(this,aArg);this.__proto__=C.ALt;},_className:"Application::AnimalActionWeighingScreen"
};C.AUo={VQ:null,Yq:null,Q4:null,Aem:null,_Init:function(aArg){C.Cr._Init.call(this
,aArg);C.BW._Init.call(this.VQ={I:this},0);C.BW._Init.call(this.Yq={I:this},0);C.
Q4._Init.call(this.Q4={I:this},0);C.Aem._Init.call(this.Aem={I:this},0);this.__proto__=
C.AUo;var B;this.JK(A.aaR(A.acf.AGk));this.VQ.H(AhC);this.VQ.Aj(true);this.VQ.U(
A.aaR(A.acf.A_w));this.VQ.Bf(true);this.VQ.Bx(0);this.Yq.H(WV);this.Yq.Aj(true);
this.Yq.U(A.aaR(A.acf.A_v));this.Yq.Bf(false);this.J(this.VQ,0);this.J(this.Yq,0
);this.VQ.At([B=this.Q4,B.B9,B.B_]);this.VQ.CH(this.Q4);this.Yq.At([B=this.Aem,B.
B9,B.B_]);this.Yq.CH(this.Aem);},_Done:function(){this.__proto__=C.Cr;this.VQ._Done(
);this.Yq._Done();this.Q4._Done();this.Aem._Done();C.Cr._Done.call(this);},_ReInit:
function(){C.Cr._ReInit.call(this);this.VQ._ReInit();this.Yq._ReInit();this.Q4._ReInit(
);this.Aem._ReInit();this.JK(A.aaR(A.acf.AGk));this.VQ.U(A.aaR(A.acf.A_w));this.
Yq.U(A.aaR(A.acf.A_v));},_Mark:function(D){var B;C.Cr._Mark.call(this,D);if((B=this.
VQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Q4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aem)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.Aem={MassUnitToString:null
,Dp:function(){return 2;},C5:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BP(aIndex);},DK:function(A2){return A2;},Hl:function(){return 1;
},At:function(E){C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Av_(E);}
,Init:function(aArg){var B;A.zX([this,this.BcD],[B=A._GetAutoObject(A.Device.Device
),B.ARI,B.AY8],0);A.pe([this,this.BcD],this);},BcD:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.Aem;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Axi={H0:null,Ai9:null,MassUnit:null,
KQ:null,Ve:null,Anl:null,Aci:null,Zy:null,OS:null,Yg:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DN).AfE());A.zX([this,this.AJO],[B=A._GetAutoObject(
A.Device.Device),B.ADR,B.AH4],0);A.zX([this,this.Bze],[B=A._GetAutoObject(A.Device.
Device),B.ADW,B.AH8],0);A.zX([this,this.Bzf],[B=this.OS,B.AqX,B.Jn],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.Axb();this.Acj();},IP:function(G){this.Ws(this);}
,Cx:function(G){C.AB.Cx.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).Ar4();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Br.Lc())A._GetAutoObject(
A.Device.Device).A5(50,true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),
0,null);this.H0.Gf();this.H0.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AF1();else{var BAE=this.Bb1();this.Zy.Y(true);this.Aci.Y(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(BAE);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},EV:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).Ar4();else A._GetAutoObject(A.Device.Device).Ahm(
);},Axb:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Bfb();break;case 3:{this.Bfb();this.Zy.Y(false);this.Aci.Y(false
);if(this.A99()){this.Ve.Y(false);this.KQ.H(A.abO(this.KQ.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.OS.Ar(true);this.OS.Y(true);this.A8(this.OS);}}break;
case 4:this.KQ.R(A.aaR(A.act.AjZ));break;default:A.ab5("%s%e",AHe,A._GetAutoObject(
A.Device.Device).MeasureState);}},Acj:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CT(A.aaL(A.ach.Ad9));this.N.Cn(null);
this.Yg.Y(false);this.N.C3(A.aaL(A.ach.AmC));this.N.BZ(A.jV);}break;case 3:{if(this.
OS.AV<=1){this.N.CT(null);this.N.Cn(null);this.Yg.Y(false);this.N.C3(null);}else{
this.N.CT(A.aaL(A.ach.AmA));this.N.Cn(A.aaL(A.ach.Ad_));this.Yg.Y(true);this.N.C3(
null);}this.N.BZ(A.aaR(A.acf.Ok));}break;case 4:{this.N.C3(A.aaL(A.ach.Au$));this.
N.Cc=[this,this.BjY];this.N.Cn(null);this.Yg.Y(false);this.N.BZ(A.jV);}break;default:;
}},Ar2:function(G){},BuF:function(s){this.Ar2(s);},Ws:function(G){},AZn:function(
s){this.Ws(s);},BjY:function(G){this.Cx(this);},Bze:function(G){this.Am();},AJO:
function(G){this.Am();},A99:function(){var AtR=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(AtR>0)&&!A._GetAutoObject(A.Device.Helper).Bn4(AtR
,this.H0.Timestamp);},Akx:function(G){},AZm:function(s){this.Akx(s);},Bzf:function(
G){this.Am();},Bfb:function(){this.KQ.R(A._GetAutoObject(A.Device.Converter).AkK(
A._GetAutoObject(A.Device.Device).KQ));},Bb1:function(){return A._GetAutoObject(
A.Device.Helper).W.Ahv(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AJ._Init.call(this.Ai9={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KQ={I:this},0);A.acg.Text._Init.call(this.Ve={I:this
},0);C.Axa._Init.call(this.Anl={I:this},0);A.acg.Ad0._Init.call(this.Aci={I:this
},0);A.acg.Ad0._Init.call(this.Zy={I:this},0);C.AUI._Init.call(this.OS={I:this},
0);A.acg.An._Init.call(this.Yg={I:this},0);this.__proto__=C.Axi;this.Background.
L(A.jb.CG);this.N.Y(true);this.Dl(C.IA);this.Ai9.AX(0x3F);this.Ai9.H(AxJ);this.Ai9.
L(A.jb.CG);this.MassUnit.H(AWp);this.MassUnit.A3(0x9);this.MassUnit.R(A.aaR(A.acf.
Azr));this.MassUnit.L(A.jb.Text);this.KQ.H(AWq);this.KQ.A3(0x14);this.KQ.R(A.aaR(
A.act.AjZ));this.KQ.L(A.jb.Text);this.Ve.H(AWr);this.Ve.R(A.aaR(A.acf.A_H));this.
Ve.L(A.jb.Text);this.Ve.Y(true);this.Anl.H(AWs);this.Aci.H(AWt);this.Aci.L(A.jb.
AdL);this.Aci.Y(false);this.Zy.H(AWu);this.Zy.L(A.jb.AdL);this.Zy.BkU(true);this.
Zy.Y(false);this.OS.AX(0x3F);this.OS.H(AxJ);this.OS.Ar(false);this.OS.Y(false);this.
Yg.H(AWv);this.Yg.L(A.jb.Bi);this.J(this.Ai9,0);this.J(this.MassUnit,0);this.J(this.
KQ,0);this.J(this.Ve,0);this.J(this.Aci,0);this.J(this.Zy,0);this.J(this.OS,0);this.
J(this.Yg,0);this.N.Cw=[this,this.BuF];this.N.Ci=[this,this.AZm];this.N.Cc=[this
,this.AZn];this.MassUnit.S(A.aaL(A.fl.EA));this.KQ.S(A.aaL(A.fl.Ad3));this.Ve.S(
A.aaL(A.fl.EA));this.Aci.Y8(this.Anl);this.Zy.Y8(this.Anl);this.H0=A._NewObject(
A.Device.Rating,0);this.OS.LU(A._GetAutoObject(A.Device.Helper).W);this.OS.Akf(this.
H0);this.Yg.Ay(A.aaL(A.ach.AP0));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Ai9._Done();this.MassUnit._Done();this.KQ._Done();this.Ve._Done();this.
Anl._Done();this.Aci._Done();this.Zy._Done();this.OS._Done();this.Yg._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Ai9._ReInit();
this.MassUnit._ReInit();this.KQ._ReInit();this.Ve._ReInit();this.Anl._ReInit();this.
Aci._ReInit();this.Zy._ReInit();this.OS._ReInit();this.Yg._ReInit();this.MassUnit.
R(A.aaR(A.acf.Azr));this.KQ.R(A.aaR(A.act.AjZ));this.Ve.R(A.aaR(A.acf.A_H));this.
MassUnit.S(A.aaL(A.fl.EA));this.KQ.S(A.aaL(A.fl.Ad3));this.Ve.S(A.aaL(A.fl.EA));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.H0)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Ai9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ve)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aci)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zy)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yg)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AUM={Fv:null
,OD:null,M8:null,C7:null,LQ:null,TT:null,Init:function(aArg){var B;A.zX([this,this.
Gw],[B=this.Fv,B.B9,B.B_],0);A.pe([this,this.Gw],this);},Cx:function(G){C.Cr.Cx.
call(this,G);A.pe([this,this.Gw],this);},BiL:function(G){var F;this.LQ.BR.L(this.
LQ.V.AQ);if(!!this.LQ.Q)this.LQ.BR.R((A._GetAutoObject(A.Device.Converter).ST((F=
this.LQ.Q,F[1].call(F[0])),2,true)+CM)+A._GetAutoObject(A.acj.DN).Z9());},Gw:function(
G){var AII=true;if(this.Fv.Q===1)AII=false;this.C7.Aj(AII);this.C7.Ar(AII);this.
C7.Y(AII);A._GetAutoObject(A.Device.Helper).AMF(this.Z);},_Init:function(aArg){C.
Cr._Init.call(this,aArg);C.ALP._Init.call(this.Fv={I:this},0);C.AGv._Init.call(this.
OD={I:this},0);C.ATH._Init.call(this.M8={I:this},0);C.Akv._Init.call(this.C7={I:
this},0);C.I2._Init.call(this.LQ={I:this},0);C.BW._Init.call(this.TT={I:this},0);
this.__proto__=C.AUM;var B;this.JK(A.aaR(A.acf.Settings));this.G$.R(A.aaR(A.acf.
Ase));this.Fv.At(A._GetAutoObject(A.Device.Device).AnimalType);this.OD.At(A._GetAutoObject(
A.Device.Device).OD);this.M8.H(AWw);this.M8.Aj(true);this.C7.H(Asq);this.C7.Aj(true
);this.C7.U(A.aaR(A.acf.KB));this.C7.Bf(true);this.C7.Gn(1000);this.C7.E1(99000);
this.LQ.H(Asr);this.LQ.Aj(true);this.LQ.U(A.aaR(A.acf.A34));this.LQ.Gn(50);this.
LQ.E1(2000);this.LQ.ASg(A._GetAutoObject(A.acj.DN).Ay$());this.TT.H(AkQ);this.TT.
Aj(true);this.TT.U(A.aaR(A.acf.A6D));this.TT.Gn(-1);this.TT.E1(1);this.Kl(this.Z
,-1);this.Kl(this.Aw,-1);this.J(this.M8,0);this.J(this.C7,0);this.J(this.LQ,0);this.
J(this.TT,0);this.M8.Aet([B=this.M8,B.FJ]);this.M8.Gg([this,this.D3,this.GG]);this.
M8.Akb(A.aaL(A.ach.Edit));this.M8.LT([B=this.M8,B.Ayc]);this.M8.LV(A.aaL(A.ach.Anp
));this.M8.At([B=this.Fv,B.B9,B.B_]);this.M8.CH(this.Fv);this.M8.A83([B=this.Fv,
B.AR0,B.AZk]);this.M8.A82([B=this.Fv,B.ARZ,B.AZj]);this.C7.Gg([this,this.D3,this.
GG]);this.C7.LT([B=this.M8,B.Ayc]);this.C7.LV(A.aaL(A.ach.Anp));this.C7.At([B=this.
Fv,B.A7t,B.AR6]);this.LQ.Gg([this,this.D3,this.GG]);this.LQ.LT([B=this.M8,B.Ayc]
);this.LQ.LV(A.aaL(A.ach.Anp));this.LQ.At([B=this.Fv,B.A7s,B.AR4]);this.LQ.A9d([
this,this.BiL]);this.TT.Gg([this,this.D3,this.GG]);this.TT.At([B=this.OD,B.B9,B.
B_]);this.TT.CH(this.OD);this.Init(aArg);},_Done:function(){this.__proto__=C.Cr;
this.Fv._Done();this.OD._Done();this.M8._Done();this.C7._Done();this.LQ._Done();
this.TT._Done();C.Cr._Done.call(this);},_ReInit:function(){C.Cr._ReInit.call(this
);this.Fv._ReInit();this.OD._ReInit();this.M8._ReInit();this.C7._ReInit();this.LQ.
_ReInit();this.TT._ReInit();this.JK(A.aaR(A.acf.Settings));this.G$.R(A.aaR(A.acf.
Ase));this.C7.U(A.aaR(A.acf.KB));this.LQ.U(A.aaR(A.acf.A34));this.TT.U(A.aaR(A.acf.
A6D));},_Mark:function(D){var B;C.Cr._Mark.call(this,D);if((B=this.Fv)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.OD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.ATH={YC:null,Init:
function(aArg){var B;A.zX([this,this.Afi],[B=A._GetAutoObject(A.Device.Device),B.
ARI,B.AY8],0);A.pe([this,this.Afi],this);},A2J:function(G){A._GetAutoObject(A.Device.
Device).A5(37,true,A.jV,0,[this,this.Baj]);},A0B:function(G){var F;if(this.A4===
1){var BO=this.D0;this.D0=this.D0-A._GetAutoObject(A.acj.DN).Ay$();if(this.D0<this.
Alo)this.D0=this.Alo;if(this.DO!==BO){if(!!this.JM)(F=this.JM,F[2].call(F[0],this.
D0));A.abo(this.JM,0);}}if(this.A4===2){var BO=this.DO;this.DO=this.DO-A._GetAutoObject(
A.acj.DN).Ay$();if(this.DO<this.D0)this.DO=this.D0;if(this.DO!==BO){if(!!this.JL
)(F=this.JL,F[2].call(F[0],this.DO));A.abo(this.JL,0);}}this.DC(this);this.Am();
},A1a:function(G){var F;if(this.A4===1){var BO=this.D0;this.D0=this.D0+A._GetAutoObject(
A.acj.DN).Ay$();if(this.D0>this.DO)this.D0=this.DO;if(this.D0!==BO){if(!!this.JM
)(F=this.JM,F[2].call(F[0],this.D0));A.abo(this.JM,0);}}if(this.A4===2){var BO=this.
DO;this.DO=this.DO+A._GetAutoObject(A.acj.DN).Ay$();if(this.DO>this.Alj)this.DO=
this.Alj;if(this.DO!==BO){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.DO));A.abo(
this.JL,0);}}this.DC(this);this.Am();},Gw:function(G){this.PB.R(AHf+A._GetAutoObject(
A.Device.Converter).ST(this.D0,2,true));this.PA.R(AHf+A._GetAutoObject(A.Device.
Converter).ST(this.DO,2,true));this.Si.R(A._GetAutoObject(A.acj.DN).Z9());this.YC.
R(this.Si.String);},A2i:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).ArQ(this
);},A05:function(AsP){if(AsP===1)return this.PB;else if(AsP===2)return this.PA;else
return null;},_Init:function(aArg){C.Ab4._Init.call(this,aArg);A.acg.Text._Init.
call(this.YC={I:this},0);this.__proto__=C.ATH;this.U(A.aaR(A.acf.ABG));this.Alj=
2000;this.Alo=20;this.Background.H(JQ);this.V.H(BD);this.V.R(A.aaR(A.acf.ABG)+A.
aaR(A.acf.Colon));this.V.A3(0x12);this.Ako.H(AWx);this.Akp.H(AWy);this.QU.H(AWz);
this.Qu.H(AWA);this.PA.H(AWB);this.PB.H(AHg);this.Si.H(AWC);this.YC.H(AWD);this.
YC.I0(false);this.YC.A3(0x12);this.YC.L(0xFF000000);this.Kl(this.HX,-8);this.J(this.
YC,0);this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.YC.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.Ab4;this.YC._Done();C.Ab4.
_Done.call(this);},_ReInit:function(){C.Ab4._ReInit.call(this);this.YC._ReInit();
this.U(A.aaR(A.acf.ABG));this.V.R(A.aaR(A.acf.ABG)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.YC.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Ab4._Mark.call(this,D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.AAU={M:Q9,A6d:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A6d();},_Init:function(
aArg){A.Graphics.Hp._Init.call(this,aArg);this.__proto__=C.AAU;},_className:"Application::AbstractPath"
};C.AiX={DI:null,DP:null,Q7:null,Ads:null,N4:null,Adr:null,AtZ:1,A3A:0,Bbb:false
,Ay7:true,CU:function(){this.Be9(this);},Init:function(aArg){var B;this.A8(this.
Ads);A.zX([this,this.Be9],[B=this.Ads,B.A7z,B.A$S],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.Adr.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Bgo(this.AtZ+this.A3A)));if(this.AtZ===1)this.N4.R(A.aaR(A.acf.Auj));else this.
N4.R(A.aaR(A.acf.Bf1));},Cx:function(G){if(this.Ay7)this.Ay7=false;else if(this.
DI.Bbk()===false)A.pe([this,this.A1S],this);else if(this.DI.Azj())this.DI.AcL();
A.zV([this,this.AfJ],A._GetAutoObject(A.Device.Device).Ap,0);},EV:function(G){A.
z9([this,this.AfJ],A._GetAutoObject(A.Device.Device).Ap,0);},A1S:function(G){this.
Bbb=true;A._GetAutoObject(C.AW).Fl();},Be9:function(G){var B;var BbL=(C.V3.isPrototypeOf(
B=this.Ads.AR)?B:null);if(!!BbL){var Ayq=A._NewObject(A.Device.ActionToString,0);
this.Q7.R(Ayq.Lo(BbL.Action));}},Ia:function(G){var Ct=(C.V3.isPrototypeOf(G)?G:
null);if(!Ct)return;this.DI.Qb(Ct.Action);this.Bj1(this.AtZ+1);},ByL:function(G){
if(A._GetAutoObject(C.O$).LO(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},ByA:function(G){
A._GetAutoObject(C.AW).BS(3);},Bj1:function(E){if(this.AtZ===E)return;this.AtZ=E;
this.Am();},AfJ:function(G){if((this.Bbb===false)&&(this.DI.Bbk()===false))A.pe([
this,this.A1S],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AJ.
_Init.call(this.DP={I:this},0);C.CP._Init.call(this.Q7={I:this},0);C.AQL._Init.call(
this.Ads={I:this},0);C.CP._Init.call(this.N4={I:this},0);A.acg.Text._Init.call(this.
Adr={I:this},0);this.__proto__=C.AiX;this.Background.L(A.jb.C1);this.N.H(WU);this.
N.Y(true);this.Dl(C.IA);this.DP.AX(0x3F);this.DP.H(E4);this.DP.L(A.jb.CG);this.Q7.
H(AWE);this.Q7.L(A.jb.Text);this.Ads.H(AWF);this.N4.H(AWG);this.N4.R(A.aaR(A.acf.
Auj));this.N4.L(A.jb.Text);this.Adr.H(AWH);this.Adr.R(AWI);this.Adr.L(A.jb.Text);
this.J(this.DP,0);this.J(this.Q7,0);this.J(this.Ads,0);this.J(this.N4,0);this.J(
this.Adr,0);this.N.Cw=[this,this.ByA];this.N.Ci=[this,this.ByL];this.N.Cc=[this,
this.A1S];this.N.CT(A.aaL(A.ach.EU));this.N.Cn(A.aaL(A.ach.Abb));this.Q7.S(A.aaL(
A.fl.EA));this.Q7.A7(A.aaL(A.fl.Ah));this.Q7.CB(A.aaL(A.fl.Ak));this.Ads.A2g=[this
,this.Ia];this.N4.S(A.aaL(A.fl.EA));this.N4.A7(A.aaL(A.fl.Ah));this.N4.CB(A.aaL(
A.fl.Ak));this.Adr.S(A.aaL(A.fl.Hk));this.DI=A._GetAutoObject(C.DI);this.Init(aArg
);},_Done:function(){this.__proto__=C.AB;this.DP._Done();this.Q7._Done();this.Ads.
_Done();this.N4._Done();this.Adr._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DP._ReInit();this.Q7._ReInit();this.Ads._ReInit();
this.N4._ReInit();this.Adr._ReInit();this.N4.R(A.aaR(A.acf.Auj));this.Q7.S(A.aaL(
A.fl.EA));this.Q7.A7(A.aaL(A.fl.Ah));this.Q7.CB(A.aaL(A.fl.Ak));this.N4.S(A.aaL(
A.fl.EA));this.N4.A7(A.aaL(A.fl.Ah));this.N4.CB(A.aaL(A.fl.Ak));this.CU();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DI)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ads)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N4
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adr)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.AQL={H7:null,A2g:null,Cm:null,Z:null,Aw:
null,A2X:0,Init:function(aArg){A.zV([this,this.AAK],this.H7,0);A.zV([this,this.Be6
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AtW],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.AAK],this);},A8:function(E){var A1N=this.AR;
A.Core.O.A8.call(this,E);if(this.AR!==A1N)A.abo([this,this.A7z,this.A$S],0);},Dv:
function(G){var B;var E7=0;var X=this.AR;switch(this.Cm.CL){case 6:E7=2;break;case
7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;}X=this.R5(X,E7,0x415);
if((E7===5)&&!X){var AKn=this.AR;while(!X){AKn=this.R5(AKn,2,0x415);if(!!AKn)X=this.
R5(AKn,E7,0x415);else break;}}if(!!X)this.A8(X);var GL=(C.V3.isPrototypeOf(B=this.
AR)?B:null);if(!!GL)this.A2X=(C.V3.isPrototypeOf(B=this.AR)?B:null).Action;else this.
A2X=0;A.pe([this,this.MM],this);},A0u:function(D$){var EH=A._GetAutoObject(C.DI).
Bbs(D$,this.A2g);this.J(EH,0);},Aoz:function(){var B;var X=this.Z.Ag;while(!!X&&
!((X.T&0x200)===0x200)){var Adn=X;X=X.Ag;if(((Adn.T&0x400)===0x400))this.HI(Adn);
}},AAK:function(G){this.Aoz();var P;var CC=A._GetAutoObject(C.O$).Po();for(P=0;P<
CC;P=P+1){var Z0=A._GetAutoObject(C.O$).Pn(P);this.A0u(Z0);}A.pe([this,this.Be6]
,this);A.pe([this,this.Boq],this);A.pe([this,this.AtW],this);},Boq:function(G){var
B;var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var
Aa=(C.V3.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ag;}},AtW:function(G){var B;var X=this.Z.Ag;while(!!
X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var Aa=(C.V3.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.ASE(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.ASE(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.ASE(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ag;}},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((
B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},Be6:function(G){var B;var X=this.
Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var Aa=(C.V3.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.O$).LO(Aa.Action)&&A._GetAutoObject(C.
DI).A3z(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Y(true);if(
this.A2X===Aa.Action)this.A8(Aa);}else{Aa.Ar(false);Aa.Y(false);}}}X=X.Ag;}A.pe([
this,this.MM],this);},MM:function(G){var B;this.Z.Vc(null,null);if(!!this.AR&&((
this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},G8:function(G){A.pe([
this,this.E9],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
BK._Init.call(this.Cm={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Aw._Init.
call(this.Aw={I:this},0);this.__proto__=C.AQL;this.H(AWJ);this.Cm.Filter=147;this.
Z.AX(0xB);this.Z.H(AWK);this.Z.Kd(9);this.Aw.AX(0xA);this.Aw.H(AWL);this.J(this.
Z,0);this.J(this.Aw,0);this.Cm.BL=[this,this.Dv];this.Cm.DS=[this,this.Dv];this.
Z.Ej=[this,this.G8];this.H7=A._GetAutoObject(C.O$);this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.O;this.Cm._Done();this.Z._Done();this.Aw._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Cm._ReInit(
);this.Z._ReInit();this.Aw._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2g)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ManualActionScreenGrid"};C.Ff={Ec:null,AJ:null,Text:
null,An:null,_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Ec._Init.
call(this.Ec={I:this},0);A.acg.AJ._Init.call(this.AJ={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.An._Init.call(this.An={I:this},0);this.__proto__=
C.Ff;this.N.Ar(false);this.Ec.H(BD);this.Ec.Ar(false);this.AJ.H(E4);this.AJ.L(A.
jb.AdL);this.Text.H(BD);this.Text.R(AWM);this.Text.L(0xFF000000);this.An.H(Q9);this.
An.L(A.jb.Text);this.J(this.Ec,0);this.J(this.AJ,0);this.J(this.Text,0);this.J(this.
An,0);this.N.Cn(A.aaL(A.ach.Abb));this.Text.S(A.aaL(A.fl.Ak));this.An.Ay(A.aaL(A.
ach.ACv));},_Done:function(){this.__proto__=C.OverlayMenu;this.Ec._Done();this.AJ.
_Done();this.Text._Done();this.An._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.Ec._ReInit();this.AJ._ReInit();
this.Text._ReInit();this.An._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"
};C.Xu={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));},IP:function(G){},Ai:function(
Ae){C.BW.Ai.call(this,Ae);var FG=A.jb.AdL;var GJ=A.jb.C1;if(this.Hb){FG=A.jb.Text;
GJ=A.jb.Bi;}if(!this.LA){this.Background.L(A.jb.C1);this.V.L(A.jb.CG);}else if(this.
Qh){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else if(this.Kx){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bi);}else{this.Background.L(FG);this.V.L(GJ);}this.Hn.L(
A.jb.C1);this.HX.L(A.jb.C1);},Hc:function(G){var B;var FW=this.Ds.GT;var Cy=(C.CP.
isPrototypeOf(B=this.Ds.Cf)?B:null);if(!Cy)return;Cy.S(A.aaL(A.fl.Ak));Cy.A7(A.aaL(
A.fl.By));Cy.L(this.V.AQ);if(!!this.AC)Cy.R(this.AC.F$(FW));else Cy.R(WT);Cy.H(A.
abK(Cy.M,[this.Ds.VT,(B=this.Ds.M)[3]-B[1]]));},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.Xu;this.Ds.AEw(170);this.Ds.NS(C.CP);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.AiY={C6:null,Init:function(
aArg){this.V.Text.A3(0x11);this.V.Text.HH(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Cj.Ai.call(this,Ae);var FG=A.jb.AdL;var GJ=A.jb.C1;if(this.Hb){FG=A.jb.Text;
GJ=A.jb.Bi;}if(!this.LA){this.Background.L(A.jb.C1);this.V.L(A.jb.CG);}else if(this.
Qh){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else if(this.Kx){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bi);}else{this.Background.L(FG);this.V.L(GJ);}},_Init:function(
aArg){C.Cj._Init.call(this,aArg);A.acg.An._Init.call(this.C6={I:this},0);this.__proto__=
C.AiY;this.C6.H(AWN);this.C6.Cv(1);this.J(this.C6,0);this.C6.Ay(A.aaL(A.ach.Al8)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cj;this.C6._Done();C.Cj._Done.
call(this);},_ReInit:function(){C.Cj._ReInit.call(this);this.C6._ReInit();},_Mark:
function(D){var B;C.Cj._Mark.call(this,D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AK_={Z:null,Rw:null,Ti:null
,Tj:null,Tk:null,Adq:null,Xt:null,U9:null,U_:null,Aas:null,Aw:null,Init:function(
aArg){this.A8(this.Rw);},Dv:function(G){C.Ff.Dv.call(this,G);this.MM(this);},IP:
function(G){this.Bes(this);},KJ:function(){if(!this.Bw){this.Bw=A._NewObject(C.N
,0);this.Bw.Cw=[this,this.Bes];this.Bw.Ci=null;this.Bw.Cc=null;this.Bw.BZ(A.jV);
this.Bw.Cn(null);this.Bw.CT(A.aaL(A.ach.VG));}return this.Bw;},AAn:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.Xt.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.Xt.Q))A._GetAutoObject(C.AutoActions).J(this.Xt.Q);if(!!this.U9.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.U9.Q))A._GetAutoObject(C.AutoActions
).J(this.U9.Q);if(!!this.U_.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.U_.
Q))A._GetAutoObject(C.AutoActions).J(this.U_.Q);if(!!this.Aas.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.Aas.Q))A._GetAutoObject(C.AutoActions).J(this.Aas.Q
);A._GetAutoObject(C.AutoActions).Cl();},Bes:function(G){if(this.BxU()===true){this.
AAn();this.Xi(this);}else A._GetAutoObject(A.Device.Device).A5(27,true,A.jV,0,null
);},BxU:function(){return(!!this.Xt.C5(this.Xt.Q)||!!this.U9.C5(this.U9.Q))||!!this.
U_.C5(this.U_.Q);},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.
Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},MM:function(G){var B;this.
Z.Vc(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true
,null,null);},ByX:function(G){var B;A._GetAutoObject(A.Device.Device).ArN(this);
this.Xt.AsW(this);this.U9.AsW(this);this.U_.AsW(this);this.Aas.AsW(this);},G8:function(
G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Ff._Init.call(this,aArg);A.
Core.Z._Init.call(this.Z={I:this},0);C.Xu._Init.call(this.Rw={I:this},0);C.Xu._Init.
call(this.Ti={I:this},0);C.Xu._Init.call(this.Tj={I:this},0);C.Xu._Init.call(this.
Tk={I:this},0);C.Auv._Init.call(this.Adq={I:this},0);C.AutoAction._Init.call(this.
Xt={I:this},0);C.AutoAction._Init.call(this.U9={I:this},0);C.AutoAction._Init.call(
this.U_={I:this},0);C.AutoAction._Init.call(this.Aas={I:this},0);C.Aw._Init.call(
this.Aw={I:this},0);this.__proto__=C.AK_;var B;this.H(Q$);this.Text.R(A.aaR(A.acf.
Tl));this.Z.H(Lp);this.Z.Kd(1);this.Rw.H(AhC);this.Rw.Ar(true);this.Rw.Aj(true);
this.Rw.U(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.AiW),PZ,AHh));this.Ti.
H(WV);this.Ti.Ar(true);this.Ti.Aj(true);this.Ti.U(A._GetAutoObject(A.Device.Helper
).Ne(A.aaR(A.acf.AiW),PZ,AHi));this.Tj.H(ZR);this.Tj.Ar(true);this.Tj.Aj(true);this.
Tj.U(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.AiW),PZ,AxK));this.Tk.H(An0
);this.Tk.Ar(true);this.Tk.Aj(true);this.Tk.U(A._GetAutoObject(A.Device.Helper).
Ne(A.aaR(A.acf.AiW),PZ,AHj));this.Adq.H(An1);this.Adq.Aj(true);this.Adq.U(A.aaR(
A.acf.A9Q));this.U9.Index=1;this.U_.Index=2;this.Aas.Index=3;this.Aw.H(IK);this.
J(this.Z,0);this.J(this.Rw,0);this.J(this.Ti,0);this.J(this.Tj,0);this.J(this.Tk
,0);this.J(this.Adq,0);this.J(this.Aw,0);this.Z.Ej=[this,this.G8];this.Rw.Wg(A.aaL(
A.fl.Hk));this.Rw.Wh(A.aaL(A.fl.Hk));this.Rw.At([B=this.Xt,B.B9,B.B_]);this.Rw.CH(
this.Xt);this.Ti.Wg(A.aaL(A.fl.Hk));this.Ti.Wh(A.aaL(A.fl.Hk));this.Ti.At([B=this.
U9,B.B9,B.B_]);this.Ti.CH(this.U9);this.Tj.Wg(A.aaL(A.fl.Hk));this.Tj.Wh(A.aaL(A.
fl.Hk));this.Tj.At([B=this.U_,B.B9,B.B_]);this.Tj.CH(this.U_);this.Tk.Wg(A.aaL(A.
fl.Hk));this.Tk.Wh(A.aaL(A.fl.Hk));this.Tk.At([B=this.Aas,B.B9,B.B_]);this.Tk.CH(
this.Aas);this.Adq.AN=[this,this.ByX];this.Init(aArg);},_Done:function(){this.__proto__=
C.Ff;this.Z._Done();this.Rw._Done();this.Ti._Done();this.Tj._Done();this.Tk._Done(
);this.Adq._Done();this.Xt._Done();this.U9._Done();this.U_._Done();this.Aas._Done(
);this.Aw._Done();C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.call(this
);this.Z._ReInit();this.Rw._ReInit();this.Ti._ReInit();this.Tj._ReInit();this.Tk.
_ReInit();this.Adq._ReInit();this.Xt._ReInit();this.U9._ReInit();this.U_._ReInit(
);this.Aas._ReInit();this.Aw._ReInit();this.Text.R(A.aaR(A.acf.Tl));this.Rw.U(A.
_GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.AiW),PZ,AHh));this.Ti.U(A._GetAutoObject(
A.Device.Helper).Ne(A.aaR(A.acf.AiW),PZ,AHi));this.Tj.U(A._GetAutoObject(A.Device.
Helper).Ne(A.aaR(A.acf.AiW),PZ,AxK));this.Tk.U(A._GetAutoObject(A.Device.Helper).
Ne(A.aaR(A.acf.AiW),PZ,AHj));this.Adq.U(A.aaR(A.acf.A9Q));},_Mark:function(D){var
B;C.Ff._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Rw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ti)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Tj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Adq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aas)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"
};C.CO={Co:A.abi(16,0,null),Dp:function(){return 16;},C5:function(aIndex){if(aIndex>=
16)return-1;return this.Co.Get(aIndex);},DK:function(A2){var P=0;while(P<16){if(
this.Co.Get(P)===A2)return P;P=P+1;}return-1;},Hl:function(){var P=0;var max=-1;
while(P<16){if(this.Co.Get(P)>max)max=this.Co.Get(P);P=P+1;}return max;},_Init:function(
aArg){C.AC._Init.call(this,aArg);(this.Co=[]).__proto__=C.CO.Co;this.__proto__=C.
CO;},_className:"Application::ArraySelection"};C.AutoAction={H7:null,AcL:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AsW],this.AcL,0);A.pe([this,this.
AsW],this);},Dp:function(){return this.H7.Po();},C5:function(aIndex){if(aIndex>=
this.Dp())return-1;return this.H7.Pn(aIndex);},F$:function(aIndex){return this.ActionToString.
BP(this.C5(aIndex));},DK:function(A2){var P=0;while(P<this.Dp()){if(this.H7.Pn(P
)===A2)return P;P=P+1;}return-1;},Hl:function(){var P=0;var max=-1;while(P<this.
Dp()){if(this.H7.Pn(P)>max)max=this.H7.Pn(P);P=P+1;}return max;},AsW:function(G){
this.Q=this.AcL.Pn(this.Index);A.abo([this,this.B9,this.B_],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.H7=A._GetAutoObject(C.Aud);this.AcL=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AcL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.ALe={AsT:0,Init:function(aArg
){var B;A.zX([this,this.Bc4],[B=A._GetAutoObject(A.Device.Device),B.A7f,B.A$D],0
);A.zX([this,this.Bc1],[B=A._GetAutoObject(A.Device.Device),B.ARt,B.AY1],0);A.pe([
this,this.Bc4],this);A.pe([this,this.Bc1],this);},Clear:function(){C.Vb.Clear.call(
this);this.AsT=0;},Cl:function(){A._GetAutoObject(A.Device.Device).Aq2(this.AsT);
A._GetAutoObject(A.Device.Device).Aq3(this.toString());},Bc4:function(G){this.AsT=
A._GetAutoObject(A.Device.Device).O$;A.we(this,0);},Bc1:function(G){this.EB(A._GetAutoObject(
A.Device.Device).At1);A.we(this,0);},LO:function(D$){if((this.AsT&(((B=D$)<0)?B+
0x100000000:B))===(((B=D$)<0)?B+0x100000000:B))return true;return false;},ATx:function(
D$){this.AsT=this.AsT|(((B=D$)<0)?B+0x100000000:B);},_Init:function(aArg){C.Vb._Init.
call(this,aArg);this.__proto__=C.ALe;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.O$={_Init:function(){C.ALe._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.ALf={Tm:null,Aw:null,Z:null,JG:null,CU:function(
){this.Aik(this);},Init:function(aArg){A.zV([this,this.Aik],this.Tm,0);A.pe([this
,this.Aik],this);},Dv:function(G){C.Ff.Dv.call(this,G);this.MM(this);},KJ:function(
){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cw=[this,this.Eo];this.Bw.Ci=[
this,this.A10];this.Bw.Cc=[this,this.A2r];this.Bw.C3(A.aaL(A.ach.AqB));this.Bw.Cn(
A.aaL(A.ach.Aqu));this.Bw.CT(A.aaL(A.ach.VG));}return this.Bw;},Eo:function(G){if(
this.BwM()>0){this.AAn();this.Xi(this);}else A._GetAutoObject(A.Device.Device).A5(
28,true,A.jV,0,null);},Aik:function(G){this.Aoz();var P;for(P=0;P<this.Tm.Po();P=
P+1){var Z0=A._GetAutoObject(C.O$).Pn(P);this.AZ9(Z0);}this.J(this.JG,0);A.aaS([
this,this.MM],this);},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]
);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},MM:function(G){var
B;this.Z.Vc(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.
AR,true,null,null);},AZ9:function(G1){var Ayq=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.R2,0);Aa.U(Ayq.BP(G1));Aa.Aj(true);Aa.GT=G1;Aa.A8Q(this.
Tm.LO(G1));this.J(Aa,0);this.Ze(Aa);},Aoz:function(){var B;var X=this.Z.Ag;while(
!!X&&!((X.T&0x200)===0x200)){var Adn=X;X=X.Ag;if(((Adn.T&0x400)===0x400))this.HI(
Adn);}},AAn:function(){var B;this.Tm.Clear();var X=this.Z.Ag;while(!!X&&!((X.T&0x200
)===0x200)){if(((X.T&0x400)===0x400)&&!(X===this.JG)){var Aa=(C.R2.isPrototypeOf(
X)?X:null);if(!!Aa){this.Tm.J(Aa.GT);if(Aa.ARG())this.Tm.ATx(Aa.GT);}else A.ab5(
"%s",Ass);}X=X.Ag;}this.Tm.Cl();},BwM:function(){var B;var A2Y=0;var X=this.Z.Ag;
while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)&&!(X===this.JG)){var
Aa=(C.R2.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.ARG())A2Y=A2Y+1;}else A.ab5("%s"
,Ass);}X=X.Ag;}return A2Y;},A10:function(G){var B;var Aa=(C.R2.isPrototypeOf(B=this.
AR)?B:null);if(!!Aa){var AzG=(C.R2.isPrototypeOf(B=Aa.Ag)?B:null);if(!!AzG){this.
Ahe(AzG,Aa);A.pe([this,this.MM],this);}}},A2r:function(G){var B;var Aa=(C.R2.isPrototypeOf(
B=this.AR)?B:null);if(!!Aa){var AAb=(C.R2.isPrototypeOf(B=Aa.AH)?B:null);if(!!AAb
){this.Ahe(Aa,AAb);A.pe([this,this.MM],this);}}},Ajn:function(G){var B;A._GetAutoObject(
A.Device.Device).ArL(this);A.pe([this,this.Aik],this);},G8:function(G){A.pe([this
,this.E9],this);},_Init:function(aArg){C.Ff._Init.call(this,aArg);C.Aw._Init.call(
this.Aw={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Auv._Init.call(this.
JG={I:this},0);this.__proto__=C.ALf;this.H(Q$);this.Text.R(A.aaR(A.acf.ADt));this.
Aw.H(IK);this.Z.H(Lp);this.Z.Kd(1);this.JG.H(AHk);this.JG.Aj(true);this.JG.U(A.aaR(
A.acf.Ajn));this.J(this.Aw,0);this.J(this.Z,0);this.J(this.JG,0);this.Z.Ej=[this
,this.G8];this.JG.AN=[this,this.Ajn];this.Tm=A._GetAutoObject(C.O$);this.Init(aArg
);},_Done:function(){this.__proto__=C.Ff;this.Aw._Done();this.Z._Done();this.JG.
_Done();C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.call(this);this.
Aw._ReInit();this.Z._ReInit();this.JG._ReInit();this.Text.R(A.aaR(A.acf.ADt));this.
JG.U(A.aaR(A.acf.Ajn));this.CU();},_Mark:function(D){var B;C.Ff._Mark.call(this,
D);if((B=this.Tm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JG)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"};C.
R2={GT:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A3(0x11);this.
V.Text.HH(10);},Bg:function(aSize){C.T1.Bg.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Mf.M[0]));},Ai:function(Ae){var B;C.T1.Ai.call(this,Ae);var G6=((Ae&0x10
)===0x10);var Fh=((Ae&0x20)===0x20);var Gt=this.Bl.Bv;var FG=A.jb.AdL;var GJ=A.jb.
Bi;if(this.Hb){FG=A.jb.Bi;GJ=A.jb.Text;}if(!G6){this.Background.L(FG);this.V.L(A.
jb.CG);}else if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else if(Fh){this.
Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else{this.Background.L(FG);this.V.L(GJ);
}this.LA=G6;this.Kx=Fh;this.Qh=Gt;},IP:function(G){this.A2p(this);},A2p:function(
G){this.AEb(!this.Amb);},A8Q:function(E){this.AEb(E);},ARG:function(){return this.
Amb;},_Init:function(aArg){C.T1._Init.call(this,aArg);this.__proto__=C.R2;this.Mf.
H(AWO);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Vb={CC:0,
H7:A.abi(17,0,null),Pn:function(Hq){return this.H7.Get(Hq);},Po:function(){return this.
CC;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.H7.Set(P,0);this.CC=0;},J:function(
D$){if(this.CC>=17)A.ab5("%s",AHl);else{this.H7.Set(this.CC,D$);this.CC=this.CC+
1;}},Cl:function(){},EB:function(AcA){var AIu=AcA.indexOf(String.fromCharCode(0x2C
),0);var A0v=A.jV;var P=0;this.CC=0;while(P<17)if(AcA===A.jV){this.H7.Set(P,0);P++;
}else{if(AIu===-1){A0v=AcA;AcA=A.jV;}else{A0v=A.abV(AcA,AIu);AcA=A.ab1(AcA,0,AIu+
1);}var Z0=A.abZ(A0v,0,10)|0;if(this.AC9(Z0)){this.H7.Set(this.CC,Z0);this.CC=this.
CC+1;P++;}AIu=AcA.indexOf(String.fromCharCode(0x2C),0);}if(AcA!==A.jV)A.ab5("%s"
,AWP);},toString:function(){var A1F=(((B=this.H7.Get(0))<0)?B+0x100000000:B).toFixed(
);var P;for(P=1;P<this.CC;P=P+1)A1F=(A1F+AHm)+(((B=this.H7.Get(P))<0)?B+0x100000000:
B).toFixed();return A1F;},AwQ:function(Hq,D$){if(Hq>=this.CC){A.ab5("%s",((((AWQ+
Hq.toFixed())+AWR)+this.CC.toFixed())+AWS)+AWT);return;}this.H7.Set(Hq,D$);},Contains:
function(D$){var P;for(P=0;P<this.CC;P=P+1)if(this.H7.Get(P)===D$)return true;return false;
},AC9:function(D$){return true;},DK:function(D$){var P;for(P=0;P<this.CC;P=P+1)if(
this.H7.Get(P)===D$)return P;return-1;},_Init:function(aArg){(this.H7=[]).__proto__=
C.Vb.H7;this.__proto__=C.Vb;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsList"
};C.ALZ={Init:function(aArg){var B;A.zX([this,this.Bdb],[B=A._GetAutoObject(A.Device.
Device),B.A7r,B.A$M],0);A.pe([this,this.Bdb],this);},Cl:function(){A._GetAutoObject(
A.Device.Device).Aj6(this.toString());},AC9:function(D$){switch(D$){case 2048:case
8192:case 1024:case 16384:case 131072:return false;default:return true;}},Bdb:function(
G){this.EB(A._GetAutoObject(A.Device.Device).AutoActions);A.we(this,0);},_Init:function(
aArg){C.Vb._Init.call(this,aArg);this.__proto__=C.ALZ;this.Init(aArg);},_className:
"Application::AutoActionsClass"};C.AutoActions={_Init:function(){C.ALZ._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
V3={U$:null,Kj:null,A6c:A.jV,Action:0,A3B:false,A9C:false,A_i:false,Bg:function(
aSize){C.Fc.Bg.call(this,aSize);this.QP.H(this.Mj.M);this.Ow.H(this.QP.M);},Ai:function(
Ae){C.Fc.Ai.call(this,Ae);if(!this.LA){this.Kj.TN.L(A.jb.AmE);this.Kj.Qy.Y(true);
this.Kj.Qy.L(A.jb.AQa);}else if(this.Qh){this.Kj.TN.L(A.jb.Bi);this.Kj.Qy.Y(false
);}else if(this.Kx){this.Kj.TN.L(A.jb.Bi);this.Kj.Qy.Y(false);}else{this.Kj.TN.L(
A.jb.Text);this.Kj.Qy.Y(true);this.Kj.Qy.L(A.jb.C1);}},Bj0:function(E){if(this.Action===
E)return;this.Action=E;},Bld:function(E){if(this.A6c===E)return;this.A6c=E;this.
U$.Text.R(E);},ASE:function(E){if(this.A_i===E)return;this.A_i=E;this.Kj.BlV(!this.
Kj.ATW);},AEP:function(E){if(this.A9C===E)return;this.A9C=E;this.Kj.Y(!this.Kj.Fd(
));},A8n:function(E){if(this.A3B===E)return;this.A3B=E;this.U$.Y(E);},_Init:function(
aArg){C.Fc._Init.call(this,aArg);C.U$._Init.call(this.U$={I:this},0);C.Kj._Init.
call(this.Kj={I:this},0);this.__proto__=C.V3;this.H(AWU);this.Background.H(AWV);
this.GZ.Ar(false);this.GZ.Y(false);this.U$.H(AWW);this.U$.Y(false);this.Kj.H(AWX
);this.Kj.Y(false);this.J(this.U$,0);this.J(this.Kj,0);this.Mj.Ay(A.aaL(A.ach.AMu
));},_Done:function(){this.__proto__=C.Fc;this.U$._Done();this.Kj._Done();C.Fc._Done.
call(this);},_ReInit:function(){C.Fc._ReInit.call(this);this.U$._ReInit();this.Kj.
_ReInit();},_Mark:function(D){var B;C.Fc._Mark.call(this,D);if((B=this.U$)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemActionScreen"};C.U$={AJ:null,Text:null,CA:null,Init:function(
aArg){this.Text.H(this.M);this.CA.H(this.M);this.AJ.H(this.M);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.AJ={I:this},0);A.acg.Text.
_Init.call(this.Text={I:this},0);A.acg.CA._Init.call(this.CA={I:this},0);this.__proto__=
C.U$;this.AJ.H(AWY);this.AJ.L(A.jb.BhI);this.H(AWZ);this.Text.H(AW0);this.Text.L(
A.jb.Text);this.CA.H(AW1);this.CA.NV(1);this.CA.L(A.jb.Text);this.J(this.AJ,0);this.
J(this.Text,0);this.J(this.CA,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:
function(){this.__proto__=A.Core.O;this.AJ._Done();this.Text._Done();this.CA._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AJ._ReInit();this.Text._ReInit();this.CA._ReInit();this.Text.S(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AJ)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CA).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.Kj={Qy:null
,TN:null,ATW:false,BlV:function(E){if(this.ATW===E)return;this.ATW=E;if(E){this.
TN.Ay(A.aaL(A.ach.ABO));this.Qy.Ay(A.aaL(A.ach.ABO));}else{this.TN.Ay(A.aaL(A.ach.
Ap8));this.Qy.Ay(A.aaL(A.ach.Ap8));}},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.An._Init.call(this.Qy={I:this},0);A.acg.An._Init.call(this.TN={I:this
},0);this.__proto__=C.Kj;this.H(AxL);this.Qy.H(AxL);this.Qy.Cv(1);this.TN.H(AxL);
this.TN.Cv(0);this.J(this.Qy,0);this.J(this.TN,0);this.Qy.Ay(A.aaL(A.ach.Ap8));this.
TN.Ay(A.aaL(A.ach.Ap8));},_Done:function(){this.__proto__=A.Core.O;this.Qy._Done(
);this.TN._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Qy._ReInit();this.TN._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Qy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TN).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.AQ9={
FV:null,B$:null,Df:null,Dd:null,Kb:null,Y1:10,Aqr:0,ADD:0,ARl:0,Ayp:false,LP:false
,Bbj:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).Ap.Lc(
))A._GetAutoObject(A.Device.Device).A5(41,true,A._GetAutoObject(A.Device.Device).
Ap.HA().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gf();A._GetAutoObject(
A.Device.Helper).ApP(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.AzU],this.
C8.Q,0);A.zX([this,this.ByI],this.Df.Q,0);A.zX([this,this.AAI],this.Dd.Q,0);A.zX([
this,this.AAI],this.Dd.Hx.Q,0);A.zX([this,this.AAI],[this,this.ARN,this.AEN],0);
A.zX([this,this.Gw],[B=A._GetAutoObject(A.Device.Device),B.A8e,B.Bab],0);A.zX([this
,this.BdK],this.B$.Q,0);A.pe([this,this.AzU],this);A.pe([this,this.Gw],this);A.pe([
this,this.AAI],this);A.pe([this,this.BdK],this);},Cx:function(G){if(!this.Ayp){this.
Ayp=true;A.pe([this,this.Acx],this);}else C.HT.Cx.call(this,G);},AfO:function(G){
this.ARl=this.Y1;this.Bbr(this);},Eo:function(G){A._GetAutoObject(A.Device.Helper
).W.Hd();A._GetAutoObject(C.AW).Fl();},AtG:function(){this.N.BZ(A.jV);this.N.C3(
A.aaL(A.ach.ACT));this.N.Cc=[this,this.Ayb];},AzP:function(G){A._GetAutoObject(C.
AW).BS(63);},AEN:function(E){if(this.Y1===E)return;this.Y1=E;A.abo([this,this.ARN
,this.AEN],0);},Bbr:function(G){var F;if(!this.Y1||(this.Bbj===true)){A._GetAutoObject(
A.Device.Device).A5(24,false,CM,0,null);if(this.ADD===1)A._GetAutoObject(A.Device.
Device).A5(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A5(23,
true,this.ADD.toFixed(),2000,null);this.Eo(this);return;}this.FV.Gf();this.FV.DT(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.FV.NR(A._GetAutoObject(A.Device.
Helper).W.Breed);this.FV.Sp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
FV.JJ(A._GetAutoObject(A.Device.Helper).W.Gender);this.FV.Nb(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.FV.NU(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.FV.Ud(A._GetAutoObject(A.Device.Helper).W.VisualId);var Ak0=A._GetAutoObject(
A.Device.Helper).A0p(this.FV,(F=this.Dd.HU.Hj,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Ap);if(!Ak0)this.AiD();else{A._GetAutoObject(A.Device.Helper).AJw(
this.FV,Ak0,(F=this.Dd.HU.Hj,F[1].call(F[0])),this.Y1-1,[this,this.Apd]);A._GetAutoObject(
A.Device.Device).A5(24,false,CM,0,null);}},Gw:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).AmF())this.C7.Y(true);else this.C7.Y(false);if(this.LP){this.Df.
Y(false);this.B$.U(A.aaR(A.acf.ABW));this.B$.AEd(A.aaL(A.ach.AeM));}else{this.Df.
Y(true);this.B$.U(A.aaR(A.acf.AkF));this.B$.AEd(null);}if((this.Z.Bhg(this.AR)>=
0)&&(((this.AR.T&0x1)===0x1)===false))this.Jx(this.Z.Vx(this.AR,0x1));this.Am();
},ASe:function(E){if(this.Aqr===E)return;this.Aqr=E;A.abo([this,this.A7C,this.ASe
],0);},AAI:function(G){var F;var AJh=(F=this.Dd.Q,F[1].call(F[0]));var Azx=-1;switch((
F=this.Dd.HU.Hj,F[1].call(F[0]))){case 0:Azx=AJh+((F=A._GetAutoObject(A.Device.Helper
).BbY(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.Y1-1));break;case 1:Azx=(AJh+this.
Y1)-1;break;case 3:case 2:case 5:case 4:switch(this.Dd.Hx.AC.Q){case 0:Azx=(AJh+
this.Y1)-1;break;case 1:Azx=(AJh-this.Y1)+1;break;default:throw new Error(AW2+this.
Dd.Hx.AC.Q.toFixed());}break;default:throw new Error(AW3+this.Dd.Hx.AC.Q.toFixed(
));}this.ASe(Azx);},ByI:function(G){A.pe([this,this.Gw],this);A.pe([this,this.Atp
],this);},AzU:function(G){A._GetAutoObject(A.Device.Helper).AUq(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LP);A.pe([this,this.AAI],this);},Apd:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.Ao9();else switch((F=this.Dd.HU.Hj,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.Jx(this.Dd);break;case 0:this.Jx(this.Df
);break;case 1:this.Jx(this.B$);break;default:throw new Error(AxM+(F=this.Dd.HU.
Hj,F[1].call(F[0])).toFixed());}break;case 25:this.Jx(this.B$);break;case 47:if(
As.PopupState===7)this.Ao9();else{this.Jx(this.Dd);this.Jx(this.B$);}break;case 43:{
this.Jx(this.Dd);this.Jx(this.Df);}break;case 42:{this.Jx(this.Dd);this.Jx(this.
B$);}break;case 41:break;default:A.ab5("%s%e",Ast,As.Id);}},AiD:function(){this.
FV.Cl(A._GetAutoObject(A.Device.Device).Ap);this.ADD=this.ADD+1;if(A._GetAutoObject(
A.Device.Helper).AmF()){if(A._GetAutoObject(A.Device.Device).Br.Lc()){A._GetAutoObject(
A.Device.Device).A5(24,false,ZS,0,null);A._GetAutoObject(A.Device.Device).A5(50,
true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),0,null);}else{var L1=A.
_GetAutoObject(A.Device.Device).Ap.K9(0,this.FV.Id);A._GetAutoObject(A.Device.Device
).Sy(L1);var BY=A._NewObject(A.Device.Rating,0);BY.Gf();BY.OnSetAnimalId(this.FV.
Id);BY.OnSetBodyWeight(this.KB);BY.OnSetTimestamp(this.FV.DateOfBirth);BY.Cl(A._GetAutoObject(
A.Device.Device).Br);}}this.Ao9();},Ao9:function(){var B;var F,CN;if(!!(F=this.B$.
Q,F[1].call(F[0]))){(F=this.B$.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LP)(
CN=this.Df.Q,CN[2].call(CN[0],(F=this.B$.Q,F[1].call(F[0]))));}if(!this.LP)(CN=this.
Df.Q,CN[2].call(CN[0],A._GetAutoObject(A.Device.Helper).A_y(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Df.Q,F[1].call(
F[0])),this.Df.Ajt(),this.Df.Ajv())));var IM=null;switch((F=this.Dd.HU.Hj,F[1].call(
F[0]))){case 3:IM=[B=A._GetAutoObject(A.Device.Device),B.AvB,B.Ax5];break;case 2:
IM=[B=A._GetAutoObject(A.Device.Device),B.AvC,B.Ax6];break;case 4:case 5:IM=[B=A.
_GetAutoObject(A.Device.Device),B.Am3,B.An$];break;default:;}if(!!IM){switch((F=
this.Dd.J8.Vu,F[1].call(F[0]))){case 1:IM[2].call(IM[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IM[2].call(IM[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dd.Q,F[2].call(F[0],IM[1].call(IM[0])));
}var Xp=100-((this.Y1/this.ARl)*100);A._GetAutoObject(A.Device.Device).A5(24,true
,(((this.ARl.toFixed()+Asu)+(Xp|0).toFixed())+Asu)+(F=this.Dd.Q,F[1].call(F[0])).
toFixed(),0,[this,this.ByS]);this.AEN(this.Y1-1);A.aaS([this,this.Bbr],null);},ByS:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.Bbj=true;},Ape:function(G){var F;C.HT.Ape.call(this,G);(F=this.
C7.Q,F[2].call(F[0],this.C7.Anw));switch(this.B5.AC.Q){case 0:{this.Kb.KK(A.aaR(
A.acf.AMq));this.Kb.Kh(A.aaR(A.acf.AMr));}break;case 1:{this.Kb.KK(A.aaR(A.acf.Bf_
));this.Kb.Kh(A.aaR(A.acf.Bf$));}break;case 2:{this.Kb.KK(A.aaR(A.acf.Bh6));this.
Kb.Kh(A.aaR(A.acf.Bh7));}break;default:throw new Error(Aso);}},AeA:function(E){if(
this.LP===E)return;this.LP=E;A.abo([this,this.AvD,this.AeA],0);},Atp:function(G){
var F,CN,SZ;this.AeA(((F=this.B$.Q,F[1].call(F[0]))===(CN=this.Df.Q,CN[1].call(CN[
0])))&&!!(SZ=this.B$.Q,SZ[1].call(SZ[0])));A.pe([this,this.Gw],this);},BdK:function(
G){A.pe([this,this.Atp],this);},ARN:function(){return this.Y1;},A7C:function(){return this.
Aqr;},AvD:function(){return this.LP;},_Init:function(aArg){C.HT._Init.call(this,
aArg);C.Avm._Init.call(this.B$={I:this},0);C.Q0._Init.call(this.Df={I:this},0);C.
AFR._Init.call(this.Dd={I:this},0);C.ATJ._Init.call(this.Kb={I:this},0);this.__proto__=
C.AQ9;var B;this.Dl(C.ACx);this.B$.H(AnY);this.B$.Aj(true);this.B$.U(A.aaR(A.acf.
AkF));this.B$.Ara(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CM)+A.aaR(A.acf.ArT));this.
B$.Arb(A.aaR(A.acf.Aj1));this.Df.H(AW4);this.Df.Aj(true);this.Df.U(A.aaR(A.acf.YY
));this.Df.Arm(false);this.Dd.H(AW5);this.Dd.Aj(true);this.Dd.U(A.aaR(A.acf.A51)
);this.Dd.Bx(0);this.Kb.H(AW6);this.Kb.Aj(true);this.Kb.U(A.aaR(A.acf.A69));this.
Kb.Gn(1);this.Kb.E1(500);this.Kb.Kh(A.aaR(A.acf.AMr));this.Kb.KK(A.aaR(A.acf.AMq
));this.Kb.A8H(A.aaR(A.acf.Aqr)+A.aaR(A.acf.Colon));this.J(this.B$,0);this.J(this.
Df,0);this.J(this.Dd,0);this.J(this.Kb,0);this.FV=A._NewObject(A.Device.Animal,0
);this.B$.AN=[this,this.Acx];this.B$.LT([this,this.Acx]);this.B$.LV(A.aaL(A.ach.
AeM));this.B$.At([B=A._GetAutoObject(A.Device.Helper).W,B.Aj3,B.NU]);this.B$.PH([
B=A._GetAutoObject(A.Device.Device),B.AbC,B.Acv]);this.B$.QS([B=A._GetAutoObject(
A.Device.Device),B.AbD,B.Acw]);this.B$.T8([B=A._GetAutoObject(A.Device.Device),B.
Am0,B.An_]);this.B$.AeA([this,this.AvD,this.AeA]);this.Df.Gg([this,this.D3,this.
GG]);this.Df.LT([this,this.Acx]);this.Df.LV(A.aaL(A.ach.AeM));this.Df.T_([B=this.
Gender.Animal,B.Wc,B.JJ]);this.Df.PH([B=A._GetAutoObject(A.Device.Device),B.AbC,
B.Acv]);this.Df.QS([B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw]);this.Df.T8([
B=A._GetAutoObject(A.Device.Device),B.Am0,B.An_]);this.Df.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Am4,B.Nb]);this.Df.Am7([B=this.AnimalType.Animal,B.PG,B.DT]
);this.Dd.Gg([this,this.D3,this.GG]);this.Dd.LT([B=this.Dd,B.FJ]);this.Dd.LV(A.aaL(
A.ach.Edit));this.Dd.At([B=A._GetAutoObject(A.Device.Helper).W,B.Aq0,B.Ud]);this.
Dd.A8o(A._GetAutoObject(A.Device.Helper).W);this.Kb.At([this,this.ARN,this.AEN]);
this.Kb.BkB([this,this.A7C,this.ASe]);this.Init(aArg);},_Done:function(){this.__proto__=
C.HT;this.B$._Done();this.Df._Done();this.Dd._Done();this.Kb._Done();C.HT._Done.
call(this);},_ReInit:function(){C.HT._ReInit.call(this);this.B$._ReInit();this.Df.
_ReInit();this.Dd._ReInit();this.Kb._ReInit();this.B$.U(A.aaR(A.acf.AkF));this.B$.
Ara(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CM)+A.aaR(A.acf.ArT));this.B$.Arb(A.aaR(
A.acf.Aj1));this.Df.U(A.aaR(A.acf.YY));this.Dd.U(A.aaR(A.acf.A51));this.Kb.U(A.aaR(
A.acf.A69));this.Kb.Kh(A.aaR(A.acf.AMr));this.Kb.KK(A.aaR(A.acf.AMq));this.Kb.A8H(
A.aaR(A.acf.Aqr)+A.aaR(A.acf.Colon));},_Mark:function(D){var B;C.HT._Mark.call(this
,D);if((B=this.FV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B$)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewAnimalsScreen"};C.ATb={BW:null,RatingMode:null,KJ:function(){if(
!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cc=null;this.Bw.Ci=null;this.Bw.Cw=[
this,this.Xi];this.Bw.BZ(A.jV);this.Bw.Cn(null);this.Bw.CT(A.aaL(A.ach.VG));}return this.
Bw;},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.
BW={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=
C.ATb;var B;this.H(Q$);this.BW.H(Asq);this.BW.U(A.aaR(A.acf.A_q));this.J(this.BW
,0);this.BW.At([B=this.RatingMode,B.B9,B.B_]);this.BW.CH(this.RatingMode);},_Done:
function(){this.__proto__=C.OverlayMenu;this.BW._Done();this.RatingMode._Done();
C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.BW._ReInit();this.RatingMode._ReInit();this.BW.U(A.aaR(A.acf.A_q));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.BW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Beg],[B=A._GetAutoObject(A.Device.Device),B.ARR,B.AZc],0);A.pe([this,this.Beg],this
);},Dp:function(){return 2;},F$:function(aIndex){return this.RatingModeToString.
BP(this.C5(aIndex));},At:function(E){C.CO.At.call(this,E);A._GetAutoObject(A.Device.
Device).Awl(E);},Beg:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){C.CO._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Co.Set(0,0);this.Co.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.CO;this.RatingModeToString._Done();C.CO._Done.call(this
);},_ReInit:function(){C.CO._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.CO._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.AMK={Ws:
function(G){C.Al3.Ws.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aqn()){
A._GetAutoObject(A.Device.Helper).W.Akd(false);A._GetAutoObject(A.Device.Helper).
W.Cl(A._GetAutoObject(A.Device.Device).Ap);}},_Init:function(aArg){C.Al3._Init.call(
this,aArg);this.__proto__=C.AMK;},_className:"Application::ControlMeasureTemperatureScreen"
};C.G_={DD:A.jV,U:function(E){if(this.DD===E)return;this.DD=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.G_;},_className:"Application::BaseItem"
};C.AUF={BW:null,WeightRecordingMode:null,KJ:function(){if(!this.Bw){this.Bw=A._NewObject(
C.N,0);this.Bw.Cc=null;this.Bw.Ci=null;this.Bw.Cw=[this,this.Xi];this.Bw.BZ(A.jV
);this.Bw.Cn(null);this.Bw.CT(A.aaL(A.ach.VG));}return this.Bw;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.BW._Init.call(this.BW={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AUF;var B;this.H(Q$);this.BW.H(Asq);this.BW.U(A.aaR(A.acf.Ase));this.BW.E1(1);
this.J(this.BW,0);this.BW.At([B=this.WeightRecordingMode,B.B9,B.B_]);this.BW.CH(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.BW.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.BW._ReInit();this.WeightRecordingMode.
_ReInit();this.BW.U(A.aaR(A.acf.Ase));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.BW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dp:function(){return 2;},F$:function(aIndex){return this.
WeightRecordingModeToString.BP(this.C5(aIndex));},At:function(E){C.CO.At.call(this
,E);A._GetAutoObject(A.Device.Device).Awv(E);},Init:function(aArg){var B;A.zX([this
,this.Bfg],[B=A._GetAutoObject(A.Device.Device),B.A8d,B.Baa],0);A.pe([this,this.
Bfg],this);},Bfg:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){C.CO._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Co.Set(0,0);this.Co.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.CO;this.WeightRecordingModeToString.
_Done();C.CO._Done.call(this);},_ReInit:function(){C.CO._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.CO._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.AaC={BooleanToAutoOnOff:null,F$:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BP(aIndex);},_Init:function(aArg){C.FU._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.AaC;},_Done:function(
){this.__proto__=C.FU;this.BooleanToAutoOnOff._Done();C.FU._Done.call(this);},_ReInit:
function(){C.FU._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.FU._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.Axa={A6d:function(){var B;this.
AwR(1);this.Ji(0,3);this.Vj(0,0,(B=this.M)[3]-B[1]);this.A3G(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A3G(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.Vr(0);},_Init:
function(aArg){C.AAU._Init.call(this,aArg);this.__proto__=C.Axa;},_className:"Application::Triangle"
};C.ASS={Z:null,Init:function(aArg){this.Bv_(this);},Bv9:function(P1){var Aa=A._NewObject(
C.AMQ,0);Aa.H(BD);Aa.U(P1);Aa.Aj(true);Aa.Ar(false);Aa.Bf(true);this.J(Aa,0);this.
AsV(this);},AsV:function(G){var B;var Ak8=1;var A1y=0;var X=this.Z.Ag;var Ct=null;
var KZ=null;while(!!X&&!((X.T&0x200)===0x200)){Ct=(C.ON.isPrototypeOf(X)?X:null);
if(((X.T&0x400)===0x400)&&!!Ct){var AKq=(B=Ct.V.B4.A5S(Ct.V.String,0,-1))[2]-B[0
];if(!!(C.Mh.isPrototypeOf(X)?X:null))AKq=AKq+20;if(A1y<AKq)A1y=AKq;Ct.H(A.abL(Ct.
M,120));Ct.H(A.abI(Ct.M,28));Ct.H(A.abM(Ct.M,this.M[0]));Ct.H(A.abO(Ct.M,((B=this.
M)[3]-B[1])-(Ak8*28)));Ak8=Ak8+1;}else{KZ=(A.acg.DR.isPrototypeOf(X)?X:null);if(((
X.T&0x400)===0x400)&&!!KZ){var Da=((B=this.M)[3]-B[1])-((Ak8-1)*28);KZ.DY([this.
M[0],KZ.Ek[1]]);KZ.DY([KZ.Ek[0],Da]);KZ.DM([this.M[0]+120,KZ.Ev[1]]);KZ.DM([KZ.Ev[
0],Da]);}}X=X.Ag;}this.Bzz(A1y,28);},Bzz:function(aWidth,Bvg){var B;var X=this.Z.
Ag;var Ct=null;var KZ=null;aWidth=aWidth+20;if(aWidth>(C.ArU[0]-10))aWidth=C.ArU[
0]-10;while(!!X&&!((X.T&0x200)===0x200)){Ct=(C.ON.isPrototypeOf(X)?X:null);if(((
X.T&0x400)===0x400)&&!!Ct){Ct.V.Text.A3(0x14);Ct.V.Text.HH(10);Ct.H(A.abL(Ct.M,aWidth
));Ct.H(A.abI(Ct.M,Bvg));Ct.H(A.abM(Ct.M,this.M[2]-((B=Ct.M)[2]-B[0])));}else{KZ=(
A.acg.DR.isPrototypeOf(X)?X:null);if(((X.T&0x400)===0x400)&&!!KZ){KZ.DY([this.M[
2]-aWidth,KZ.Ek[1]]);KZ.DM([this.M[2],KZ.Ev[1]]);}}X=X.Ag;}},Bv_:function(G){var
Aa=A._GetAutoObject(C.Bz).Aqe;while(!!Aa){if(!!(C.AwC.isPrototypeOf(Aa)?Aa:null)
){var EM=(C.AwC.isPrototypeOf(Aa)?Aa:null);this.Bv8(EM.DD,EM.AN,EM.Bv,EM.A97);}else
if(!!(C.AwE.isPrototypeOf(Aa)?Aa:null)){var EM=(C.AwE.isPrototypeOf(Aa)?Aa:null);
this.Bwd(EM.DD,EM.AN,EM.Bv,EM.LO);}else if(!!(C.AeI.isPrototypeOf(Aa)?Aa:null)){
var EM=(C.AeI.isPrototypeOf(Aa)?Aa:null);this.Bv7(EM.DD,EM.AN,EM.Bv);}else if(!!(
C.Akj.isPrototypeOf(Aa)?Aa:null)){var EM=(C.Akj.isPrototypeOf(Aa)?Aa:null);this.
Bv9(EM.DD);}else if(!!(C.AFj.isPrototypeOf(Aa)?Aa:null))this.Bwe();Aa=Aa.Mo;}A._GetAutoObject(
C.Bz).Clear();A.pe([this,this.AsV],this);},Bv7:function(P1,AcG,AhH){var Aa=A._NewObject(
C.Mh,0);Aa.H(BD);Aa.U(P1);Aa.AN=AcG;Aa.Aj(true);Aa.Ar(AhH);Aa.Bf(true);this.J(Aa
,0);this.AsV(this);},Bwe:function(){var KZ=A._NewObject(A.acg.DR,0);KZ.L(A.jb.Bi
);KZ.Aj(true);KZ.NV(3);this.J(KZ,0);this.AsV(this);},Bv8:function(P1,AcG,AhH,A1g
){var Aa=A._NewObject(C.Ap6,0);Aa.H(BD);Aa.U(P1);Aa.AN=AcG;Aa.Aj(true);Aa.Ar(AhH
);Aa.Bf(true);Aa.AEu(A1g);this.J(Aa,0);this.AsV(this);},Bwd:function(P1,AcG,AhH,
A1g){var Aa=A._NewObject(C.AMP,0);Aa.H(BD);Aa.U(P1);Aa.AN=AcG;Aa.Aj(true);Aa.Ar(
AhH);Aa.Bf(true);Aa.AEu(A1g);this.J(Aa,0);this.AsV(this);},_Init:function(aArg){
C.OverlayMenu._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);this.
__proto__=C.ASS;this.H(Q$);this.Z.H(Q$);this.J(this.Z,0);this.Init(aArg);},_Done:
function(){this.__proto__=C.OverlayMenu;this.Z._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Z._ReInit();},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.AeR={_Init:function(
){A.acl.AeR._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A9y={Aqe:null,AgV:null,Nx:function(P1){var EM=A._NewObject(C.Akj
,0);EM.DD=P1;this.J(EM);},Clear:function(){this.Aqe=null;this.AgV=null;},Fu:function(
){var KZ=A._NewObject(C.AFj,0);this.J(KZ);},J:function(BaK){if(!this.Aqe){this.Aqe=
BaK;this.AgV=this.Aqe;}else{this.AgV.Mo=BaK;this.AgV=this.AgV.Mo;}},Qq:function(
P1,AcG){var EM=A._NewObject(C.AeI,0);EM.DD=P1;EM.AN=AcG;this.J(EM);},A3D:function(
P1,AcG,Bvm){var EM=A._NewObject(C.AwC,0);EM.DD=P1;EM.AN=AcG;EM.A97=Bvm;this.J(EM
);},Xv:function(P1){var EM=A._NewObject(C.AeI,0);EM.DD=P1;EM.Bv=false;this.J(EM);
},Adt:function(P1,AcG,Bvk){var EM=A._NewObject(C.AwE,0);EM.DD=P1;EM.AN=AcG;EM.LO=
Bvk;this.J(EM);},_Init:function(aArg){this.__proto__=C.A9y;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Aqe)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgV)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Application::OptionsOverlayManagerClass"};C.Bz={_Init:
function(){C.A9y._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.AwD={Mo:null,_Init:function(aArg){this.__proto__=C.AwD;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Mo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.ANP={Al1:null,Aq4:function(E){if(this.Al1===
E)return;if(!!this.Ab)this.Ab.Ze(this);if(!!this.Al1)this.Ap9(this.Al1,A._GetAutoObject(
C.ArY),null,null,null,null,false);this.Al1=E;if(!!this.Al1)this.Akn(this.Al1,A._GetAutoObject(
C.ArY),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);this.__proto__=C.ANP;this.H(BD);},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Al1)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.Wk={_Init:function(){C.ANP._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
NX={Init:function(aArg){var CX=A._NewObject(C.AST,0);CX.H(this.M);this.Akn(CX,A.
_GetAutoObject(C.Ant),null,A._GetAutoObject(C.Ant),A._GetAutoObject(C.Ant),null,
null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.
__proto__=C.NX;this.H(Q$);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.ArY={_Init:function(){C.ATL._Init.call(this,0);this.ABU=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.AST={AJ:null,_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.AJ={I:this},0);this.
__proto__=C.AST;this.H(AHn);this.Dm(0);this.AJ.AX(0x3F);this.AJ.H(AHn);this.AJ.L(
0xAAFFFFFF);this.J(this.AJ,0);},_Done:function(){this.__proto__=A.Core.O;this.AJ.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AJ._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.ATK={RY:function(){var B;var Ao=(A.acl.AeJ.isPrototypeOf(B=A.acl.AdX.RY.call(this
))?B:null);if(!Ao)throw new Error(Asm);Ao.Ck.Cs=255;Ao.Ck.B0=0;return Ao;},RX:function(
){var B;var Ao=(A.acl.AwB.isPrototypeOf(B=A.acl.AdX.RX.call(this))?B:null);if(!Ao
)throw new Error(Asm);Ao.ER.Cs=0;Ao.ER.B0=255;Ao.Do=true;return Ao;},_Init:function(
aArg){A.acl.AdX._Init.call(this,aArg);this.__proto__=C.ATK;},_className:"Application::ShadeOverlayTransition"
};C.Ant={_Init:function(){C.ATK._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Akv={Anw:0,A0V:false,Init:function(aArg){
},Ai:function(Ae){var F;C.I2.Ai.call(this,Ae);this.BR.L(this.V.AQ);if(!!this.Q){
var BAF=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BR.R((A.
_GetAutoObject(A.Device.Converter).AkK(BAF)+CM)+A._GetAutoObject(A.acj.DN).AfE()
);else this.BR.R(A.aaR(A.acf.Aj1));}},J0:function(G){var B;var Bfd=(this.A0V===false
)&&(this.AK<=this.Ge);if(Bfd)this.Bx(this.Anw);this.A3j(this.AK,4);if(Bfd){this.
Bx(this.AK-this.AjH);this.A0V=true;}C.I2.J0.call(this,G);},JV:function(G){this.A3j(
this.AK,5);C.I2.JV.call(this,G);},Bx:function(E){this.A3j(E,4);E=(((E+((this.AjH
/2)|0))/this.AjH)|0)*this.AjH;if(!E)this.A0V=false;C.I2.Bx.call(this,E);},Ag6:function(
E){if(this.Anw===E)return;this.Anw=E;},A3j:function(Bu1,Gq){this.ASg(A._GetAutoObject(
A.acj.DN).Bb2(Bu1,Gq));},_Init:function(aArg){C.I2._Init.call(this,aArg);this.__proto__=
C.Akv;this.H(JQ);this.Anw=this.Ge;this.Kl(this.HX,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BB4={None:0,Left:1,BCG:2,Right:3};C.Al6={AhU:
null,Fo:null,Ec:null,Background:null,AmS:null,FT:null,KF:A.jV,ADk:null,Init:function(
aArg){var B;A.zV([this,this.AfJ],A._GetAutoObject(A.Device.Device).Ap,0);A.zX([this
,this.A2s],[B=A._GetAutoObject(A.Device.Device).Ap,B.Fz,B.FD],0);A.pe([this,this.
LI],this);A.pe([this,this.A2s],this);this.A8(this.Ec);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DC(this);},KJ:function(){if(!this.Bw)this.Bw=A._NewObject(
C.N,0);return this.Bw;},EV:function(G){C.OverlayMenu.EV.call(this,G);A._GetAutoObject(
A.Device.Device).Ap.Bh(this.AhU);},Cx:function(G){C.OverlayMenu.Cx.call(this,G);
this.AJ3();},Aly:function(G){var Aa=(C.ABo.isPrototypeOf(G)?G:null);var Hu;if(!!
Aa)Hu=Aa.Hu;else Hu=this.FT.FA();if(Hu>=A._GetAutoObject(A.Device.Device).Ap.Cb(
))return;A._GetAutoObject(A.Device.Helper).HF(Hu);A.pe([this,this.Xi],this);},AJ3:
function(){},AfJ:function(G){this.Am();},A2j:function(G){if(this.FT.FA()<(A._GetAutoObject(
A.Device.Device).Ap.Cb()-1))this.FT.GX(this.FT.FA()+1);},A2k:function(G){if(this.
FT.FA()>0)this.FT.GX(this.FT.FA()-1);},DC:function(G){var FX=A._GetAutoObject(A.
Device.Device).Ap.Cb();var MP=this.Bw;if(!MP)return;MP.CT(A.aaL(A.ach.Ad9));MP.Cw=[
this,this.Xi];if(FX<=0){MP.Cn(null);MP.C3(null);MP.Ci=null;MP.Cc=null;MP.Zc=false;
MP.Zd=false;}else if(FX===1){MP.Cn(null);MP.C3(A.aaL(A.ach.Ad_));MP.Ci=null;MP.Cc=[
this,this.Aly];MP.Zc=false;MP.Zd=false;}else{MP.Cn(A.aaL(A.ach.Aqu));MP.C3(A.aaL(
A.ach.AqB));MP.Ci=[this,this.A2j];MP.Cc=[this,this.A2k];MP.Zc=true;MP.Zd=true;}}
,LI:function(G){this.BeF(this);this.AhU=A._GetAutoObject(A.Device.Device).Ap.Filter;
this.AJ3();},Blr:function(E){if(this.ADk===E)return;this.ADk=E;A.pe([this,this.ByF
],this);},ByF:function(G){this.BeF(this);},BeF:function(G){var B;if(!!this.Fo)this.
HI(this.Fo);this.Fo=(C.Eu.isPrototypeOf(B=A._NewObject(this.ADk,0))?B:null);if(!
!this.Fo){this.Fo.H(AW7);this.J(this.Fo,0);}},A2s:function(G){if(!!A._GetAutoObject(
A.Device.Device).Ap.Filter&&!!A._GetAutoObject(A.Device.Device).Ap.Filter.DX(1,4
))this.FT.Dt(A.aaR(A.acf.ARf));else this.FT.Dt(this.KF);},Dt:function(E){if(this.
KF===E)return;this.KF=E;A.pe([this,this.A2s],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Ec._Init.call(this.Ec={I:this},0);A.acg.AJ._Init.call(this.
Background={I:this},0);A.acg.AJ._Init.call(this.AmS={I:this},0);C.FT._Init.call(
this.FT={I:this},0);this.__proto__=C.Al6;this.H(Q$);this.Ec.H(BD);this.Ec.A8K(A.
jb.C1);this.Ec.A8L(A.jb.Text);this.Background.H(E4);this.Background.L(A.jb.BmV);
this.AmS.H(AHo);this.AmS.L(A.jb.C1);this.FT.H(AHo);this.FT.NS(C.ABo);this.ADk=C.
AOW;this.KF=A.aaR(A.acf.Avq);this.J(this.Ec,0);this.J(this.Background,0);this.J(
this.AmS,0);this.J(this.FT,0);this.Ec.AN=[this,this.Aly];this.Ec.AbI(A._NewObject(
C.Ya,0));this.FT.Y6(A._GetAutoObject(A.Device.Device).Ap);this.FT.Y7([this,this.
Aly]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ec._Done(
);this.Background._Done();this.AmS._Done();this.FT._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ec._ReInit();this.
Background._ReInit();this.AmS._ReInit();this.FT._ReInit();this.Dt(A.aaR(A.acf.Avq
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.AhU)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fo)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ec)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AmS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FT
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};
C.ABo={AP:null,CZ:null,Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.V.H(A.abN(
this.V.M,((aSize[0]*65)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.CZ.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bb.Ai.call(
this,Ae);this.CZ.C9(this.V.AQ);},Init:function(aArg){},Ce:function(Ac){if(!this.
AY)return;this.Hu=Ac;if(!!this.AY){this.U(this.AY.CD(Ac,1).toFixed());this.CZ.DT(
this.AY.Amu(Ac,14));this.CZ.AEf(this.AY.IV(Ac,13));this.CZ.Aez(this.AY.HW(Ac,8));
this.CZ.Ua(this.AY.HW(Ac,11));this.CZ.AeC(this.AY.HW(Ac,12));this.CZ.AeE(this.AY.
CD(Ac,5));this.Am();}},_Init:function(aArg){C.Bb._Init.call(this,aArg);A.acg.AJ.
_Init.call(this.AP={I:this},0);C.CZ._Init.call(this.CZ={I:this},0);this.__proto__=
C.ABo;this.H(OU);this.AP.L(A.jb.Bc);this.CZ.H(AW8);this.J(this.AP,0);this.J(this.
CZ,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Bb;this.AP._Done();this.
CZ._Done();C.Bb._Done.call(this);},_ReInit:function(){C.Bb._ReInit.call(this);this.
AP._ReInit();this.CZ._ReInit();},_Mark:function(D){var B;C.Bb._Mark.call(this,D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CZ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::CalfListSmallItem"};C.Ya={Q:null,Init:function(
aArg){var B;this.A2H(this);this.At([B=A._GetAutoObject(A.Device.Device).Ap,B.Fz,
B.FD]);},A8m:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&
!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).GA();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DX(1,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
QW(FilterCriterion);var AAq=this.AgX();if(AAq>0){FilterCriterion=A._NewObject(A.
Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,AAq,false);Filter.
CY(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.A0.Aj8(false
);},Buo:function(s){this.A8m(s);},A2H:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).GA(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DX(1,4))?
B:null);if(!!FilterCriterion)Filter.QW(FilterCriterion);(F=this.Q,F[2].call(F[0]
,Filter));}},BEq:function(s){this.A2H(s);},At:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Acz],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Acz],
E,0);if(!!E)A.pe([this,this.Acz],this);},De:function(G){var B;var F;if(!(F=this.
Q,F[1].call(F[0]))){this.A0.AEs(-1);this.DT(0);return;}var Ayl=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DX(1,4))?B:null);if(!Ayl){this.A0.AEs(
0);this.A0.Aj8(true);}else this.A0.AEs(Ayl.A6);var Aye=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DX(14,0))?B:null);if(!!Aye)this.DT(Aye.
A6);else this.DT(0);},Acz:function(s){this.De(s);},_Init:function(aArg){C.AuW._Init.
call(this,aArg);this.__proto__=C.Ya;this.A0.AEs(0);this.A0.Dk=[this,this.Buo];this.
Init(aArg);},_Mark:function(D){var B;C.AuW._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.Aqa={BirthType:null,EaseOfDelivery:null,B$:null,D9:null,Abk:null,GU:null,Cq:
null,Abi:null,AL9:false,Init:function(aArg){this.AL9=A._GetAutoObject(A.Device.Helper
).W.AqE();if(this.AL9)this.Aev(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.Aev(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.B$.
LT([this,this.Acx]);this.B$.LV(A.aaL(A.ach.AeM));this.B$.AN=[this,this.Acx];}this.
D9.Arm(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.Gw],this.D9.
Q,0);A.zX([this,this.Gw],this.B$.Q,0);A.pe([this,this.Gw],this);},AfO:function(G
){if(((this.D9.ArG===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).AQk(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A5(21,true,A._GetAutoObject(A.Device.Converter).SM(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cl(
A._GetAutoObject(A.Device.Device).Ap);if(this.KB>0){if(this.AL9){var Ac=A._GetAutoObject(
A.Device.Device).Br.K9(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ac>=0){var BY=A._NewObject(A.Device.Rating,0);BY.EB(Ac,A._GetAutoObject(A.Device.
Device).Br);BY.OnSetBodyWeight(this.KB);BY.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);BY.Cl(A._GetAutoObject(A.Device.Device).Br);}else A.ab5("%s%i"
,AW9,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Br.Lc())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Br.HA().toFixed(),0,null);else{var BY=A._NewObject(A.Device.Rating
,0);BY.Gf();BY.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BY.OnSetBodyWeight(
this.KB);BY.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);BY.Cl(
A._GetAutoObject(A.Device.Device).Br);}}A._GetAutoObject(C.AW).Fl();},Eo:function(
G){A._GetAutoObject(A.Device.Helper).W.EB(A._GetAutoObject(A.Device.Helper).W.CI
,A._GetAutoObject(A.Device.Device).Ap);A._GetAutoObject(C.AW).Fl();},AtG:function(
){this.N.BZ(A.jV);this.N.C3(A.aaL(A.ach.AmC));this.N.Cc=[this,this.Ayb];},AzP:function(
G){A._GetAutoObject(C.AW).BS(32);},Gw:function(G){var F;var MR=(F=this.D9.Q,F[1].
call(F[0]));var AfZ=(F=this.B$.Q,F[1].call(F[0]));var A3d=true;if(!!MR&&(AfZ===MR
))A3d=false;A._GetAutoObject(A.Device.Helper).Mx(this.B$,A3d);this.D9.Bkt(!A3d);
},_Init:function(aArg){C.HT._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Avm._Init.
call(this.B$={I:this},0);C.Q0._Init.call(this.D9={I:this},0);C.Ab3._Init.call(this.
Abk={I:this},0);C.BW._Init.call(this.GU={I:this},0);C.SA._Init.call(this.Cq={I:this
},0);C.BW._Init.call(this.Abi={I:this},0);this.__proto__=C.Aqa;var B;this.B$.H(AhB
);this.B$.Aj(true);this.B$.U(A.aaR(A.acf.AkF));this.B$.Ara(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CM)+A.aaR(A.acf.ArT));this.B$.Arb(A.aaR(A.acf.Aj1));this.D9.H(AhB);
this.D9.Aj(true);this.D9.U(A.aaR(A.acf.YY));this.Abk.H(AW_);this.Abk.Aj(true);this.
Abk.U(A.aaR(A.acf.GD));this.GU.H(AhB);this.GU.Aj(true);this.GU.U(A.aaR(A.acf.AqP
));this.Cq.H(AhB);this.Cq.Aj(true);this.Cq.U(A.aaR(A.acf.AdQ));this.Cq.AES(true);
this.Abi.H(AhB);this.Abi.Aj(true);this.Abi.U(A.aaR(A.acf.Agh));this.J(this.B$,0);
this.J(this.D9,0);this.J(this.Abk,0);this.J(this.GU,0);this.J(this.Cq,0);this.J(
this.Abi,0);this.BirthType.LU(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LU(A._GetAutoObject(A.Device.Helper).W);this.B$.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Aj3,B.NU]);this.D9.Gg([this,this.D3,this.GG]);this.D9.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Am4,B.Nb]);this.Abk.Gg([this,this.D3,this.GG]);this.Abk.At([
B=A._GetAutoObject(A.Device.Helper).W,B.Aq0,B.Ud]);this.GU.At([B=this.BirthType,
B.B9,B.B_]);this.GU.CH(this.BirthType);this.Cq.Gg([this,this.D3,this.GG]);this.Cq.
LT([B=this.Cq,B.FJ]);this.Cq.LV(A.aaL(A.ach.Edit));this.Cq.AbM([B=A._GetAutoObject(
A.Device.Helper).W,B.Avy,B.Sp]);this.Abi.At([B=this.EaseOfDelivery,B.B9,B.B_]);this.
Abi.CH(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HT;this.BirthType._Done();this.EaseOfDelivery._Done();this.B$._Done();this.D9._Done(
);this.Abk._Done();this.GU._Done();this.Cq._Done();this.Abi._Done();C.HT._Done.call(
this);},_ReInit:function(){C.HT._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.B$._ReInit();this.D9._ReInit();this.Abk._ReInit();
this.GU._ReInit();this.Cq._ReInit();this.Abi._ReInit();this.B$.U(A.aaR(A.acf.AkF
));this.B$.Ara(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CM)+A.aaR(A.acf.ArT));this.
B$.Arb(A.aaR(A.acf.Aj1));this.D9.U(A.aaR(A.acf.YY));this.Abk.U(A.aaR(A.acf.GD));
this.GU.U(A.aaR(A.acf.AqP));this.Cq.U(A.aaR(A.acf.AdQ));this.Abi.U(A.aaR(A.acf.Agh
));},_Mark:function(D){var B;C.HT._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.B$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D9)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Abk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Ab3={Fw:null,A0:null,A4:0,IP:function(G){C.Dn.IP.call(this,G);if(!this.A4)this.
FJ(this);else this.G5(this);},Ai:function(Ae){C.Dn.Ai.call(this,Ae);this.Hn.Y(false
);this.HX.Y(false);if(this.A4===1){this.A8(this.A0);if(this.Hb){this.A0.FB(A.jb.
CG);this.Background.L(A.jb.C1);this.V.L(A.jb.Text);}else{this.A0.FB(A.jb.C1);this.
Background.L(A.jb.CG);this.V.L(A.jb.Text);}}else{if(this.Hb)this.A0.FB(A.jb.CG);
else this.A0.FB(A.jb.C1);this.A8(null);}},Bx:function(E){var F;var BO=this.AK;C.
Dn.Bx.call(this,E);if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK
));A.abo(this.Q,0);}A.abo([this,this.T7,this.A$P],0);},DC:function(G){var F;if(!
this.N)return;switch(this.A4){case 1:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.
EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.
G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;default:this.Fw.Akr((F=
this.N,F[1].call(F[0])));}},FJ:function(G){this.Ep(1);},G5:function(G){this.Ep(0
);},Ep:function(EE){var F;if(!this.A4)this.Fw.Ajb((F=this.N,F[1].call(F[0])));this.
A4=EE;if(this.A4<0)this.A4=0;else if(this.A4>1)this.A4=1;if(this.A4===1)this.A0.
Sx(7);this.DC(this);this.Am();},_Init:function(aArg){C.Dn._Init.call(this,aArg);
C.AQg._Init.call(this.A0={I:this},0);this.__proto__=C.Ab3;this.H(UI);this.E1(999999
);this.V.R(Asv);this.V.L(A.jb.Bi);this.Hn.Y(false);this.HX.Y(false);this.A0.H(AW$
);this.A0.ASo(6);this.J(this.A0,0);this.A0.At([this,this.T7,this.A$P]);this.Fw=A.
_NewObject(C.Ad4,0);},_Done:function(){this.__proto__=C.Dn;this.A0._Done();C.Dn.
_Done.call(this);},_ReInit:function(){C.Dn._ReInit.call(this);this.A0._ReInit();
},_Mark:function(D){var B;C.Dn._Mark.call(this,D);if((B=this.Fw)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dp:function(){return 4;
},C5:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BP(aIndex);},DK:function(A2){return A2;},Hl:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.At7={Z:null,QE:null,NO:null,D8:null,Px:null,Pu:null,Pv:null,Aw:null,FU:null,
ReasonOfLeaving:null,Ahc:null,M1:0,Ami:false,ABs:true,ANI:false,ArC:false,Init:function(
aArg){A.zX([this,this.A8k],[this,this.A7R,this.ASr],0);this.Ag2(A._GetAutoObject(
A.Device.Helper).W.Ahv(2));this.ReasonOfLeaving.At(this.ReasonOfLeaving.DK(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A8k],this);},Dv:function(G){
var B;var E7=0;var X=this.AR;switch(this.Cm.CL){case 6:E7=2;break;case 7:E7=7;break;
case 4:E7=4;break;case 5:E7=5;break;default:;}X=this.R5(X,E7,0x414);if(!!X)this.
A8(X);if(!!X&&((X.T&0x400)===0x400))this.Z.Hy(X,true,null,null);},Alx:function(G
){A._GetAutoObject(C.AW).Fl();},Apj:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Br.Lc())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(A.
Device.Device).Br.HA().toFixed(),0,null);else{var BY=A._NewObject(A.Device.Rating
,0);BY.Gf();BY.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BY.OnSetBodyWeight(
this.M1);BY.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).DF());BY.Cl(A._GetAutoObject(
A.Device.Device).Br);}if(this.Ami){A._GetAutoObject(A.Device.Helper).W.Ag5(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A5U(A._GetAutoObject(A.Device.Helper).DF(),this.ArC);}A._GetAutoObject(A.Device.
Helper).W.AER(this.ReasonOfLeaving.C5((F=this.NO.Q,F[1].call(F[0]))));if(this.ABs
)A._GetAutoObject(A.Device.Helper).W.NU(0);if(this.ArC)A._GetAutoObject(A.Device.
Helper).W.Av6(true);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(A.Device.
Device).Ap);this.A98();},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[
1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},Ag2:function(E){
if(this.M1===E)return;this.M1=E;},Am1:function(){return this.M1;},BdM:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.AW).Fl();A._GetAutoObject(A.Device.Helper
).ArO();}},A8k:function(G){switch(this.ArC){case false:this.D8.U(A.aaR(A.acf.AUH
));break;case true:this.D8.U(A.aaR(A.acf.BoZ));break;default:;}},ASr:function(E){
if(this.ArC===E)return;this.ArC=E;},A7R:function(){return this.ArC;},A98:function(
){A._GetAutoObject(A.Device.Device).A5(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BdM]);},BkT:function(E){if(this.ANI===E)return;
this.ANI=E;},Bi9:function(){return this.ANI;},Bj$:function(E){if(this.ABs===E)return;
this.ABs=E;},BiY:function(){return this.ABs;},Bkr:function(E){if(this.Ami===E)return;
this.Ami=E;},Bi5:function(){return this.Ami;},G8:function(G){A.pe([this,this.E9]
,this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);C.AeW._Init.call(this.QE={I:this},0);C.ArX._Init.call(this.NO={I:this
},0);C.Akv._Init.call(this.D8={I:this},0);C.AeW._Init.call(this.Px={I:this},0);C.
AeW._Init.call(this.Pu={I:this},0);C.AeW._Init.call(this.Pv={I:this},0);C.Aw._Init.
call(this.Aw={I:this},0);C.FU._Init.call(this.FU={I:this},0);C.ReasonOfLeaving._Init.
call(this.ReasonOfLeaving={I:this},0);A.Device.Ahc._Init.call(this.Ahc={I:this},
0);this.__proto__=C.At7;var B;this.N.Y(true);this.N.BZ(A.aaR(A.acf.Unregister));
this.Dl(C.IA);this.Z.H(E4);this.Z.Kd(1);this.QE.H(ZR);this.QE.Aj(true);this.QE.U(
A.aaR(A.acf.Ami));this.QE.Bf(true);this.QE.Y_(false);this.QE.Gn(-1);this.QE.E1(1
);this.NO.H(WV);this.NO.Aj(true);this.NO.U(A.aaR(A.acf.ReasonOfLeaving));this.NO.
Bf(true);this.NO.Y_(false);this.D8.H(AhA);this.D8.Aj(true);this.D8.U(A.aaR(A.acf.
AUH));this.D8.Bf(false);this.D8.Gn(1000);this.D8.E1(999000);this.Px.H(WV);this.Px.
Aj(true);this.Px.U(A.aaR(A.acf.A3R));this.Px.Bf(true);this.Px.Y_(false);this.Px.
Bx(1);this.Px.Gn(-1);this.Px.E1(1);this.Pu.H(ZR);this.Pu.Aj(true);this.Pu.U(A.aaR(
A.acf.A3S));this.Pu.Bf(true);this.Pu.Y_(false);this.Pu.Bx(1);this.Pu.Gn(-1);this.
Pu.E1(1);this.Pv.H(WV);this.Pv.Aj(true);this.Pv.U(A.aaR(A.acf.A4D));this.Pv.Bf(true
);this.Pv.Y_(false);this.Pv.Bx(1);this.Pv.Gn(-1);this.Pv.E1(1);this.Aw.H(AxD);this.
FU.At(0);this.J(this.Z,0);this.J(this.QE,0);this.J(this.NO,0);this.J(this.D8,0);
this.J(this.Px,0);this.J(this.Pu,0);this.J(this.Pv,0);this.J(this.Aw,0);this.N.CT(
A.aaL(A.ach.EU));this.Z.Ej=[this,this.G8];this.QE.At([B=this.FU,B.B9,B.B_]);this.
QE.CH(this.FU);this.QE.Ake([this,this.Bi5,this.Bkr]);this.NO.Gg([this,this.D3,this.
GG]);this.NO.LT([B=this.NO,B.FJ]);this.NO.LV(A.aaL(A.ach.Edit));this.NO.At([B=this.
ReasonOfLeaving,B.B9,B.B_]);this.NO.CH(this.ReasonOfLeaving);this.NO.Am9(this.Ahc
);this.D8.At([this,this.Am1,this.Ag2]);this.Px.At([B=this.FU,B.B9,B.B_]);this.Px.
CH(this.FU);this.Px.Ake([this,this.Bi9,this.BkT]);this.Pu.At([B=this.FU,B.B9,B.B_
]);this.Pu.CH(this.FU);this.Pu.Ake([this,this.A7R,this.ASr]);this.Pv.At([B=this.
FU,B.B9,B.B_]);this.Pv.CH(this.FU);this.Pv.Ake([this,this.BiY,this.Bj$]);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.QE._Done();this.
NO._Done();this.D8._Done();this.Px._Done();this.Pu._Done();this.Pv._Done();this.
Aw._Done();this.FU._Done();this.ReasonOfLeaving._Done();this.Ahc._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Z._ReInit();this.QE.
_ReInit();this.NO._ReInit();this.D8._ReInit();this.Px._ReInit();this.Pu._ReInit(
);this.Pv._ReInit();this.Aw._ReInit();this.FU._ReInit();this.ReasonOfLeaving._ReInit(
);this.Ahc._ReInit();this.N.BZ(A.aaR(A.acf.Unregister));this.QE.U(A.aaR(A.acf.Ami
));this.NO.U(A.aaR(A.acf.ReasonOfLeaving));this.D8.U(A.aaR(A.acf.AUH));this.Px.U(
A.aaR(A.acf.A3R));this.Pu.U(A.aaR(A.acf.A3S));this.Pv.U(A.aaR(A.acf.A4D));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Px)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pv
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ReasonOfLeaving)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ahc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"
};C.ATJ={Ajr:null,Pl:null,Aux:AXa,Bg:function(aSize){C.I2.Bg.call(this,aSize);this.
V.H([0,0,aSize[0],40]);this.BR.H([0,40,aSize[0],80]);this.Hn.H([0,this.BR.M[1],40
,this.BR.M[3]]);this.HX.H([aSize[0]-40,this.BR.M[1],aSize[0],this.BR.M[3]]);},Ai:
function(Ae){var F;C.I2.Ai.call(this,Ae);this.Pl.L(this.V.AQ);if(!!this.Ajr){if((
F=this.Ajr,F[1].call(F[0]))===-1)this.Pl.R(this.Aux+AHp);else this.Pl.R((this.Aux+
CM)+(F=this.Ajr,F[1].call(F[0])).toFixed());}else this.Pl.R(this.Aux);},A15:function(
G){this.Am();},BkB:function(E){if(A.aaZ(this.Ajr,E))return;if(!!this.Ajr)A.z$([this
,this.A15],this.Ajr,0);this.Ajr=E;if(!!E)A.zX([this,this.A15],E,0);if(!!E)A.pe([
this,this.A15],this);},A8H:function(E){if(this.Aux===E)return;this.Aux=E;this.Am(
);},_Init:function(aArg){C.I2._Init.call(this,aArg);C.CP._Init.call(this.Pl={I:this
},0);this.__proto__=C.ATJ;this.H(AXb);this.V.H(AXc);this.V.A3(0x12);this.Pl.H(AXd
);this.Pl.A3(0x12);this.Pl.L(A.jb.Bi);this.J(this.Pl,0);this.Pl.S(A.aaL(A.fl.Ah)
);this.Pl.A7(A.aaL(A.fl.Ak));this.Pl.CB(null);},_Done:function(){this.__proto__=
C.I2;this.Pl._Done();C.I2._Done.call(this);},_ReInit:function(){C.I2._ReInit.call(
this);this.Pl._ReInit();this.Pl.S(A.aaL(A.fl.Ah));this.Pl.A7(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.I2._Mark.call(this,D);if((B=this.Ajr)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.ALq={Z:null,JF:null,Sd:null,Aw:null,Ap0:2500,AMG:24,Dv:function(G){var B;var
E7=0;var X=this.AR;switch(this.Cm.CL){case 6:E7=2;break;case 7:E7=7;break;case 4:
E7=4;break;case 5:E7=5;break;default:;}X=this.R5(X,E7,0x414);if(!!X)this.A8(X);if(
!!X&&((X.T&0x400)===0x400))this.Z.Hy(X,true,null,null);},Alx:function(G){A._GetAutoObject(
C.AW).Fl();},Apj:function(G){},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1)
)[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},Bkk:function(
E){if(this.Ap0===E)return;this.Ap0=E;},Bi0:function(){return this.Ap0;},Bkl:function(
E){if(this.AMG===E)return;this.AMG=E;},Bi1:function(){return this.AMG;},BiO:function(
G){var F,CN;this.JF.BR.L(this.JF.V.AQ);if(!!this.JF.Q)this.JF.BR.R((((String.fromCharCode(((
F=this.JF.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Afd)+String.fromCharCode(((
CN=this.JF.Q,CN[1].call(CN[0]))+10000).toFixed().charCodeAt(2)||0))+CM)+this.JF.
AGi);},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.I2._Init.call(this.JF={
I:this},0);C.I2._Init.call(this.Sd={I:this},0);C.Aw._Init.call(this.Aw={I:this},
0);this.__proto__=C.ALq;this.N.Y(true);this.Dl(C.IA);this.Z.H(E4);this.Z.Kd(1);this.
JF.H(AhA);this.JF.Aj(true);this.JF.U(A.aaR(A.acf.Ap0));this.JF.Bf(false);this.JF.
Gn(0);this.JF.E1(5000);this.JF.Kh(A.aaR(A.acf.AfH));this.JF.KK(A.aaR(A.acf.AfH));
this.JF.ASg(100);this.Sd.H(WV);this.Sd.Aj(true);this.Sd.U(A.aaR(A.acf.A9H));this.
Sd.Bf(true);this.Sd.Bx(24);this.Sd.Gn(10);this.Sd.E1(33);this.Sd.Kh(AXe);this.Aw.
H(AxD);this.J(this.Z,0);this.J(this.JF,0);this.J(this.Sd,0);this.J(this.Aw,0);this.
N.CT(A.aaL(A.ach.VG));this.Z.Ej=[this,this.G8];this.JF.At([this,this.Bi0,this.Bkk
]);this.JF.A9d([this,this.BiO]);this.Sd.At([this,this.Bi1,this.Bkl]);},_Done:function(
){this.__proto__=C.AB;this.Z._Done();this.JF._Done();this.Sd._Done();this.Aw._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Z._ReInit(
);this.JF._ReInit();this.Sd._ReInit();this.Aw._ReInit();this.JF.U(A.aaR(A.acf.Ap0
));this.JF.Kh(A.aaR(A.acf.AfH));this.JF.KK(A.aaR(A.acf.AfH));this.Sd.U(A.aaR(A.acf.
A9H));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.JF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sd).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalActionNewbornCareScreen"};C.AqR={EaseOfDelivery:null,BirthType:
null,B$:null,Df:null,Dd:null,Cq:null,D8:null,GU:null,Ld:null,M1:0,LP:false,Init:
function(aArg){A.zX([this,this.Gw],this.B$.Q,0);A.zX([this,this.Gw],this.Df.Q,0);
A.zX([this,this.AzU],this.C8.Q,0);A.zX([this,this.Bdj],this.Cq.Dh,0);A.zX([this,
this.Bdd],this.C7.Q,0);A.zX([this,this.Atp],this.B$.Q,0);A.zX([this,this.Atp],this.
Df.Q,0);A.pe([this,this.AzU],this);A.pe([this,this.Gw],this);A.pe([this,this.Bdj
],this);A.pe([this,this.Bdd],this);A.pe([this,this.Atp],this);},Eo:function(G){A.
_GetAutoObject(A.Device.Helper).W.Hd();A._GetAutoObject(C.AW).Fl();},AfO:function(
G){var F;A._GetAutoObject(A.Device.Helper).W.DT((F=this.B5.Q,F[1].call(F[0])));if(
!!A._GetAutoObject(A.Device.Helper).Ahf){var Ali=A._GetAutoObject(A.Device.Helper
).Ahf.AN8();A._GetAutoObject(A.Device.Helper).W.AbJ(Ali);A._GetAutoObject(A.Device.
Helper).W.Anc(Ali);}var Ak0=A._GetAutoObject(A.Device.Helper).A0p(A._GetAutoObject(
A.Device.Helper).W,(F=this.Dd.HU.Hj,F[1].call(F[0])),A._GetAutoObject(A.Device.Device
).Ap);if(!Ak0){this.AiD();A.pe([this,this.BuO],this);}else A._GetAutoObject(A.Device.
Helper).AJw(A._GetAutoObject(A.Device.Helper).W,Ak0,(F=this.Dd.HU.Hj,F[1].call(F[
0])),0,[this,this.Apd]);},AtG:function(){this.N.BZ(A.jV);this.N.C3(A.aaL(A.ach.AC4
));this.N.Cc=[this,this.Ayb];},AiD:function(){var B;var F;A._GetAutoObject(A.Device.
Helper).W.Cl(A._GetAutoObject(A.Device.Device).Ap);var L1=A._GetAutoObject(A.Device.
Device).Ap.K9(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).Sy(L1);var Bcg=false;if(A._GetAutoObject(A.Device.Helper).AmF()){if(A._GetAutoObject(
A.Device.Device).Br.Lc()){Bcg=true;A._GetAutoObject(A.Device.Device).A5(50,true,
A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),0,null);}else{var BY=A._NewObject(
A.Device.Rating,0);BY.Gf();BY.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);BY.OnSetBodyWeight(this.KB);BY.OnSetTimestamp(A._GetAutoObject(A.Device.Helper
).W.DateOfBirth);BY.Cl(A._GetAutoObject(A.Device.Device).Br);}}if(A._GetAutoObject(
A.Device.Helper).A6j()&&(Bcg===false)){if(A._GetAutoObject(A.Device.Device).Br.Lc(
))A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(A.Device.Device).
Br.HA().toFixed(),0,null);else{var BY=A._NewObject(A.Device.Rating,0);BY.Gf();BY.
OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BY.OnSetBodyWeight(this.M1
);BY.Cl(A._GetAutoObject(A.Device.Device).Br);}}var IM=null;switch((F=this.Dd.HU.
Hj,F[1].call(F[0]))){case 3:IM=[B=A._GetAutoObject(A.Device.Device),B.AvB,B.Ax5];
break;case 2:IM=[B=A._GetAutoObject(A.Device.Device),B.AvC,B.Ax6];break;case 4:case
5:IM=[B=A._GetAutoObject(A.Device.Device),B.Am3,B.An$];break;default:;}if(!!IM)switch((
F=this.Dd.J8.Vu,F[1].call(F[0]))){case 1:IM[2].call(IM[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IM[2].call(IM[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}if(!!(F=this.Df.Q,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).A_y(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
Gender.Animal.Gender,(F=this.Df.Q,F[1].call(F[0])),this.Df.Ajt(),this.Df.Ajv());
},ApC:function(G){A._GetAutoObject(C.AW).Fl();},BuO:function(s){this.ApC(s);},AzP:
function(G){A._GetAutoObject(C.AW).BS(55);},Ag2:function(E){if(this.M1===E)return;
this.M1=E;A.abo([this,this.Am1,this.Ag2],0);},Gw:function(G){if(A._GetAutoObject(
A.Device.Helper).AmF())this.C7.Y(true);else this.C7.Y(false);if(A._GetAutoObject(
A.Device.Helper).A6j())this.D8.Y(true);else this.D8.Y(false);if(this.LP){this.Df.
Y(false);this.B$.U(A.aaR(A.acf.ABW));this.B$.AEd(A.aaL(A.ach.AeM));}else{this.Df.
Y(true);this.B$.U(A.aaR(A.acf.AkF));this.B$.AEd(null);}},AzU:function(G){A._GetAutoObject(
A.Device.Helper).AUq(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.LP);},Bdj:function(G){A.pe([this,this.Be3],this
);},Bdd:function(G){A.pe([this,this.Be3],this);},Be3:function(G){var F,CN,SZ;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.D8.Ag6(A._GetAutoObject(
A.Device.Helper).Ahv(A._GetAutoObject(A.Device.Helper).Aa1((F=this.B5.Q,F[1].call(
F[0]))),(CN=this.Cq.Dh,CN[1].call(CN[0])),2,(SZ=this.B5.Q,SZ[1].call(SZ[0]))));break;
case 2:this.D8.Ag6(A._GetAutoObject(A.Device.Helper).Ahv(this.KB,(F=this.Cq.Dh,F[
1].call(F[0])),2,(CN=this.B5.Q,CN[1].call(CN[0]))));break;default:;}},Apd:function(
G){var F;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(
As.Id){case 22:case 21:switch((F=this.Dd.HU.Hj,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.Jx(this.Dd);break;case 0:this.Jx(this.Df);break;case 1:this.Jx(this.
B$);break;default:throw new Error(AxM+(F=this.Dd.HU.Hj,F[1].call(F[0])).toFixed(
));}break;case 43:{this.Jx(this.Dd);this.Jx(this.Df);}break;case 25:case 42:{this.
Jx(this.Dd);this.Jx(this.B$);}break;case 41:break;default:A.ab5("%s%e",Ast,As.Id
);}},Ape:function(G){var F;C.HT.Ape.call(this,G);(F=this.C7.Q,F[2].call(F[0],this.
C7.Anw));this.D8.Ag6(A._GetAutoObject(A.Device.Helper).W.Ahv(1));},AeA:function(
E){if(this.LP===E)return;this.LP=E;A.abo([this,this.AvD,this.AeA],0);},Atp:function(
G){var F,CN,SZ;this.AeA(((F=this.B$.Q,F[1].call(F[0]))===(CN=this.Df.Q,CN[1].call(
CN[0])))&&!!(SZ=this.B$.Q,SZ[1].call(SZ[0])));A.pe([this,this.Gw],this);},Am1:function(
){return this.M1;},AvD:function(){return this.LP;},_Init:function(aArg){C.HT._Init.
call(this,aArg);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.BirthType.
_Init.call(this.BirthType={I:this},0);C.Avm._Init.call(this.B$={I:this},0);C.Q0.
_Init.call(this.Df={I:this},0);C.AFR._Init.call(this.Dd={I:this},0);C.SA._Init.call(
this.Cq={I:this},0);C.Akv._Init.call(this.D8={I:this},0);C.BW._Init.call(this.GU={
I:this},0);C.BW._Init.call(this.Ld={I:this},0);this.__proto__=C.AqR;var B;this.Dl(
C.ACw);this.CE.H(Acu);this.B$.H(AnY);this.B$.Aj(true);this.B$.U(A.aaR(A.acf.AkF)
);this.B$.Ara(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CM)+A.aaR(A.acf.ArT));this.B$.
Arb(A.aaR(A.acf.Aj1));this.Df.H(AnY);this.Df.Aj(true);this.Df.U(A.aaR(A.acf.YY));
this.Df.Arm(false);this.Dd.H(AXf);this.Dd.Aj(true);this.Dd.U(A.aaR(A.acf.GD));this.
Dd.Bx(0);this.Cq.H(Acu);this.Cq.Aj(true);this.Cq.U(A.aaR(A.acf.AdQ));this.Cq.AES(
true);this.D8.H(Acu);this.D8.Aj(true);this.D8.U(A.aaR(A.acf.M1));this.D8.Gn(1000
);this.D8.E1(999000);this.GU.H(Acu);this.GU.Aj(true);this.GU.U(A.aaR(A.acf.AqP));
this.Ld.H(Acu);this.Ld.Aj(true);this.Ld.U(A.aaR(A.acf.Agh));this.J(this.B$,-2);this.
J(this.Df,-2);this.J(this.Dd,-2);this.J(this.Cq,-2);this.J(this.D8,-1);this.J(this.
GU,0);this.J(this.Ld,0);this.EaseOfDelivery.LU(A._GetAutoObject(A.Device.Helper).
W);this.BirthType.LU(A._GetAutoObject(A.Device.Helper).W);this.B$.AN=[this,this.
Acx];this.B$.LT([this,this.Acx]);this.B$.LV(A.aaL(A.ach.AeM));this.B$.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Aj3,B.NU]);this.B$.PH([B=A._GetAutoObject(A.Device.Device),
B.AbC,B.Acv]);this.B$.QS([B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw]);this.
B$.T8([B=A._GetAutoObject(A.Device.Device),B.Am0,B.An_]);this.B$.AeA([this,this.
AvD,this.AeA]);this.Df.Gg([this,this.D3,this.GG]);this.Df.LT([this,this.Acx]);this.
Df.LV(A.aaL(A.ach.AeM));this.Df.T_([B=this.Gender.Animal,B.Wc,B.JJ]);this.Df.PH([
B=A._GetAutoObject(A.Device.Device),B.AbC,B.Acv]);this.Df.QS([B=A._GetAutoObject(
A.Device.Device),B.AbD,B.Acw]);this.Df.T8([B=A._GetAutoObject(A.Device.Device),B.
Am0,B.An_]);this.Df.At([B=A._GetAutoObject(A.Device.Helper).W,B.Am4,B.Nb]);this.
Df.Am7([B=this.AnimalType.Animal,B.PG,B.DT]);this.Dd.Gg([this,this.D3,this.GG]);
this.Dd.LT([B=this.Dd,B.FJ]);this.Dd.LV(A.aaL(A.ach.Edit));this.Dd.At([B=A._GetAutoObject(
A.Device.Helper).W,B.Aq0,B.Ud]);this.Dd.A8o(A._GetAutoObject(A.Device.Helper).W);
this.Cq.Gg([this,this.D3,this.GG]);this.Cq.LT([B=this.Cq,B.FJ]);this.Cq.LV(A.aaL(
A.ach.Edit));this.Cq.AbM([B=A._GetAutoObject(A.Device.Helper).W,B.Avy,B.Sp]);this.
D8.At([this,this.Am1,this.Ag2]);this.GU.At([B=this.BirthType,B.B9,B.B_]);this.GU.
CH(this.BirthType);this.Ld.At([B=this.EaseOfDelivery,B.B9,B.B_]);this.Ld.CH(this.
EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.HT;this.EaseOfDelivery.
_Done();this.BirthType._Done();this.B$._Done();this.Df._Done();this.Dd._Done();this.
Cq._Done();this.D8._Done();this.GU._Done();this.Ld._Done();C.HT._Done.call(this);
},_ReInit:function(){C.HT._ReInit.call(this);this.EaseOfDelivery._ReInit();this.
BirthType._ReInit();this.B$._ReInit();this.Df._ReInit();this.Dd._ReInit();this.Cq.
_ReInit();this.D8._ReInit();this.GU._ReInit();this.Ld._ReInit();this.B$.U(A.aaR(
A.acf.AkF));this.B$.Ara(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CM)+A.aaR(A.acf.ArT
));this.B$.Arb(A.aaR(A.acf.Aj1));this.Df.U(A.aaR(A.acf.YY));this.Dd.U(A.aaR(A.acf.
GD));this.Cq.U(A.aaR(A.acf.AdQ));this.D8.U(A.aaR(A.acf.M1));this.GU.U(A.aaR(A.acf.
AqP));this.Ld.U(A.aaR(A.acf.Agh));},_Mark:function(D){var B;C.HT._Mark.call(this
,D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ld)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AGq={H0:null,Ahk:null,Agr:null,Ahl:null,Ags:null,AnimalType:null,Background:
null,NP:null,Q8:null,V:null,TH:null,Yf:null,Abe:null,PF:null,DD:A.jV,AFT:true,CU:
function(){this.Am();},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.AnG();this.
Axb();},AnG:function(){var F,CN;var Lx=0;var AlN=0;var Alb=0;var H8=0;if((((!!this.
Ahk&&!!this.Ahl)&&!!this.Agr)&&!!this.Ags)&&!!this.AnimalType){AlN=(F=this.Ahk,F[
1].call(F[0]));Alb=(F=this.Agr,F[1].call(F[0]));Lx=A._GetAutoObject(A.Device.Helper
).ML((F=this.Ahl,F[1].call(F[0])),(CN=this.Ags,CN[1].call(CN[0])));H8=(F=this.AnimalType
,F[1].call(F[0]));}var K1=A.jb.Text;var Ayt=A.jb.C1;if(!!Lx){var AKI=A._GetAutoObject(
A.acj.DN).Ak7(Lx,AlN,Alb);Ayt=A._GetAutoObject(A.acj.DN).Ay_(AKI,H8);K1=A._GetAutoObject(
A.acj.DN).Aza(AKI,H8);}this.Background.L(Ayt);this.TH.L(K1);this.Q8.L(K1);this.NP.
L(K1);this.Abe.L(K1);if(K1===A.jb.Bi)this.Yf.L(K1);else this.Yf.L(A.jb.CG);this.
V.L(K1);this.PF.L(K1);},Axb:function(){var F,CN;var Lx=0;var AlN=0;var Alb=0;if(((
!!this.Ahk&&!!this.Ahl)&&!!this.Agr)&&!!this.Ags){AlN=(F=this.Ahk,F[1].call(F[0]
));Alb=(F=this.Agr,F[1].call(F[0]));Lx=A._GetAutoObject(A.Device.Helper).ML((F=this.
Ahl,F[1].call(F[0])),(CN=this.Ags,CN[1].call(CN[0])));}if(!!Lx){var AKI=A._GetAutoObject(
A.acj.DN).Ak7(Lx,AlN,Alb);this.Q8.R(A._GetAutoObject(A.Device.Converter).ST(AKI,
2,true));this.NP.Y(true);this.Q8.Y(true);this.PF.Y(false);}else{this.NP.Y(false);
this.Q8.Y(false);this.PF.Y(true);}this.TH.R(this.Bxn(Alb-AlN,Lx));this.Abe.Y(this.
AFT);this.Yf.Y(this.AFT);this.NP.R(A._GetAutoObject(A.acj.DN).Z9());},Bxn:function(
AZ6,AhI){var B;if(AhI<0){A.ab5("%s",AXg);return A.jV;}var Im=(AXh+A._GetAutoObject(
A.acj.DN).AfE())+CM;var FK=A._GetAutoObject(A.Device.Converter).AkK(AZ6);if(!AZ6
)FK=A.abU(FK,AXi,0);else if(AZ6>0)FK=A.abU(FK,AHq,0);Im=this.Ben(Im,AXj,FK);if(AhI===
1)Im=Im+A.aaR(A.acf.BhD);else{Im=Im+A.aaR(A.acf.BhE);Im=this.Ben(Im,AXk,AhI.toFixed(
));}return Im;},Ben:function(aString,BaO,BvN){if(aString===A.jV){A.ab5("%s",AXl);
return A.jV;}var A1L=aString.indexOf(BaO,0);if(A1L>=0){aString=A.ab1(aString,A1L
,BaO.length);aString=A.abU(aString,BvN,A1L);}return aString;},ASC:function(E){if(
A.aaZ(this.Ahk,E))return;if(!!this.Ahk)A.z$([this,this.De],this.Ahk,0);this.Ahk=
E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},Bky:function(
E){if(A.aaZ(this.Agr,E))return;if(!!this.Agr)A.z$([this,this.De],this.Agr,0);this.
Agr=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},ASD:function(
E){if(A.aaZ(this.Ahl,E))return;if(!!this.Ahl)A.z$([this,this.De],this.Ahl,0);this.
Ahl=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},Bkz:function(
E){if(A.aaZ(this.Ags,E))return;if(!!this.Ags)A.z$([this,this.De],this.Ags,0);this.
Ags=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},De:function(
G){this.Am();},U:function(E){if(this.DD===E)return;this.DD=E;this.V.R(E);},A9c:function(
E){if(this.AFT===E)return;this.AFT=E;this.Am();},DT:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.De],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this
},0);C.CP._Init.call(this.NP={I:this},0);A.acg.Text._Init.call(this.Q8={I:this},
0);C.CP._Init.call(this.V={I:this},0);C.CP._Init.call(this.TH={I:this},0);A.acg.
An._Init.call(this.Yf={I:this},0);A.acg.An._Init.call(this.Abe={I:this},0);C.CP.
_Init.call(this.PF={I:this},0);this.__proto__=C.AGq;this.H(Aff);this.Background.
AX(0x3F);this.Background.H(Aff);this.NP.H(AXm);this.NP.R(A._GetAutoObject(A.acj.
DN).Z9());this.NP.A3(0x9);this.NP.L(A.jb.Text);this.Q8.H(AXn);this.Q8.A3(0x14);this.
Q8.R(A.aaR(A.act.AjZ));this.Q8.L(A.jb.Text);this.V.AX(0x1D);this.V.H(AXo);this.V.
R(A.aaR(A.acf.AtX));this.V.A3(0x12);this.V.L(A.jb.Text);this.TH.H(ZQ);this.Yf.AX(
0x14);this.Yf.H(AHr);this.Yf.Cv(1);this.Abe.AX(0x14);this.Abe.H(AHr);this.Abe.Cv(
0);this.PF.H(AXp);this.PF.R(A.aaR(A.acf.A3y));this.J(this.Background,0);this.J(this.
NP,0);this.J(this.Q8,0);this.J(this.V,0);this.J(this.TH,0);this.J(this.Yf,0);this.
J(this.Abe,0);this.J(this.PF,0);this.NP.S(A.aaL(A.fl.EA));this.NP.A7(A.aaL(A.fl.
Ah));this.NP.CB(A.aaL(A.fl.Ie));this.Q8.S(A.aaL(A.fl.Ad3));this.V.S(A.aaL(A.fl.Ah
));this.V.A7(A.aaL(A.fl.Ak));this.V.CB(A.aaL(A.fl.By));this.TH.S(A.aaL(A.fl.Ah));
this.TH.A7(A.aaL(A.fl.Ak));this.TH.CB(A.aaL(A.fl.By));this.Yf.Ay(A.aaL(A.ach.AA4
));this.Abe.Ay(A.aaL(A.ach.AA4));this.H0=A._NewObject(A.Device.Rating,0);this.PF.
S(A.aaL(A.fl.Ah));this.PF.A7(A.aaL(A.fl.Ak));this.PF.CB(A.aaL(A.fl.By));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.NP._Done();this.
Q8._Done();this.V._Done();this.TH._Done();this.Yf._Done();this.Abe._Done();this.
PF._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Background._ReInit();this.NP._ReInit();this.Q8._ReInit();this.V._ReInit(
);this.TH._ReInit();this.Yf._ReInit();this.Abe._ReInit();this.PF._ReInit();this.
Q8.R(A.aaR(A.act.AjZ));this.V.R(A.aaR(A.acf.AtX));this.PF.R(A.aaR(A.acf.A3y));this.
NP.S(A.aaL(A.fl.EA));this.NP.A7(A.aaL(A.fl.Ah));this.NP.CB(A.aaL(A.fl.Ie));this.
Q8.S(A.aaL(A.fl.Ad3));this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.V.
CB(A.aaL(A.fl.By));this.TH.S(A.aaL(A.fl.Ah));this.TH.A7(A.aaL(A.fl.Ak));this.TH.
CB(A.aaL(A.fl.By));this.PF.S(A.aaL(A.fl.Ah));this.PF.A7(A.aaL(A.fl.Ak));this.PF.
CB(A.aaL(A.fl.By));this.CU();},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.H0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ahk)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Agr)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ahl)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ags)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AUI={Animal:null,Rating:null,Cm:null,AD:null,AV:
0,Hc:function(G){var B;if(!this.Animal||!this.Rating)return;var FW=this.AD.GT;var
Cy=(C.AGq.isPrototypeOf(B=this.AD.Cf)?B:null);if(!Cy)return;Cy.DT([B=this.Animal
,B.PG,B.DT]);Cy.Bky([B=A._GetAutoObject(A.Device.Device),B.ADW,B.AH8]);Cy.Bkz([B=
this.Rating,B.A73,B.OnSetTimestamp]);switch(FW%this.AV){case 1:{Cy.ASC([B=this.Animal
,B.A7H,B.AEx]);Cy.ASD([B=this.Animal,B.A74,B.AE1]);Cy.U(A.aaR(A.acf.AtX));}break;
default:if(this.Animal.AqE()){Cy.ASC([B=this.Animal,B.ARE,B.Av4]);Cy.ASD([B=this.
Animal,B.ARV,B.Awr]);Cy.U(A.aaR(A.acf.AK6));}else{Cy.ASC([B=this.Animal,B.ARE,B.
Av4]);Cy.ASD([B=this.Animal,B.ARV,B.Awr]);Cy.U(A.aaR(A.acf.Bfk));}}if(this.AV>1)
Cy.A9c(true);else Cy.A9c(false);Cy.H(A.abK(Cy.M,[(B=this.AD.M)[2]-B[0],this.AD.GW
]));},Dv:function(G){if(this.AV>0)switch(this.Cm.CL){case 6:this.Cw(this);break;
case 7:this.Cc(this);break;default:this.Cm.NC=true;}},LU:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jn(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jn(1);else{this.Jn(2);this.AD.GX(1);this.
AD.Hy(this.AD.Gi,true,null,null);}if(this.AV>0)this.AD.Abg(0,this.AV-1);},Akf:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AV>0)this.AD.Abg(0,this.AV-1);
},Cw:function(G){if(this.AD.Gi>0)this.AD.GX(this.AD.Gi-1);else this.AD.GX(this.AV-
1);this.AD.Hy(this.AD.Gi,true,null,null);},Cc:function(G){if(this.AD.Gi<(this.AV-
1))this.AD.GX(this.AD.Gi+1);else this.AD.GX(0);this.AD.Hy(this.AD.Gi,true,null,null
);},Jn:function(E){if(this.AV===E)return;this.AV=E;this.AD.Jn(this.AV);A.abo([this
,this.AqX,this.Jn],0);},AqX:function(){return this.AV;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BK._Init.call(this.Cm={I:this},0);A.Core.CJ._Init.
call(this.AD={I:this},0);this.__proto__=C.AUI;this.H(Aff);this.Cm.Filter=147;this.
AD.AX(0x3F);this.AD.H(Aff);this.AD.NS(C.AGq);this.AD.AeD(160);this.AD.GX(0);this.
AD.Jn(2);this.J(this.AD,0);this.Cm.BL=[this,this.Dv];this.Cm.DS=[this,this.Dv];this.
AD.Hc=[this,this.Hc];},_Done:function(){this.__proto__=A.Core.O;this.Cm._Done();
this.AD._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Cm._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.D_={Init:function(aArg){},Bg:function(aSize){C.Cj.Bg.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Cj.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((
Ae&0x20)===0x20);var Gt=this.Bl.Bv;var FG=A.jb.CG;var GJ=A.jb.Text;if(this.Hb){FG=
A.jb.C1;GJ=A.jb.Text;}if(!G6){this.Background.L(A.jb.C1);this.V.L(A.jb.CG);}else
if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else if(Fh){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bi);}else{this.Background.L(FG);this.V.L(GJ);}this.LA=G6;
this.Kx=Fh;this.Qh=Gt;},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=
C.D_;this.H(JQ);this.V.H(BD);this.Y_(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.Aeo={KC:null,Gz:A.jV,Bg:function(aSize){C.D_.Bg.call(this,aSize);this.KC.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.D_.Ai.call(this,Ae);this.KC.
L(this.V.AQ);},Init:function(aArg){},AbI:function(E){if(this.Gz===E)return;this.
Gz=E;this.KC.R(E);},_Init:function(aArg){C.D_._Init.call(this,aArg);C.CP._Init.call(
this.KC={I:this},0);this.__proto__=C.Aeo;this.H(JQ);this.Background.H(JQ);this.V.
H(Acq);this.V.R(Lq);this.KC.H(JR);this.KC.R(AXq);this.J(this.KC,0);this.V.S(A.aaL(
A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.V.CB(null);this.KC.S(A.aaL(A.fl.Ah));this.
KC.A7(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.D_;this.
KC._Done();C.D_._Done.call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.
KC._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.KC.S(A.aaL(
A.fl.Ah));this.KC.A7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.D_._Mark.call(this
,D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Avm={ABw:null,Q:null,FP:null,Fy:null,Ib:null,LP:null,An:null,EC:null,ANk:A.jV
,ANl:A.jV,Bg:function(aSize){C.Aeo.Bg.call(this,aSize);if(!this.ABw)this.KC.H([].
concat(0,this.KC.M.slice(1,4)));else this.KC.H([].concat(this.An.M[2],this.KC.M.
slice(1,4)));},Ai:function(Ae){var F,CN,SZ;C.Aeo.Ai.call(this,Ae);var Bbf=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.AoQ)this.AbI(this.ANk);else
this.AbI(this.ANl);}else{this.AbI(A._GetAutoObject(A.Device.Converter).SM((F=this.
Q,F[1].call(F[0]))));if((((!!this.Ib&&!!this.FP)&&!!this.Fy)&&!!this.LP)&&(((F=this.
Ib,F[1].call(F[0]))===1)||(!(CN=this.Ib,CN[1].call(CN[0]))&&(SZ=this.LP,SZ[1].call(
SZ[0])))))Bbf=true;}}this.EC.Y(Bbf);this.An.L(this.V.AQ);A.pe([this,this.AfK],this
);},De:function(G){this.Am();},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.De],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)
A.pe([this,this.De],this);},AEd:function(E){if(this.ABw===E)return;this.ABw=E;this.
An.Ay(E);this.BhL();},PH:function(E){if(A.aaZ(this.FP,E))return;if(!!this.FP)A.z$([
this,this.Aah],this.FP,0);this.FP=E;if(!!E)A.zX([this,this.Aah],E,0);if(!!E)A.pe([
this,this.Aah],this);},QS:function(E){if(A.aaZ(this.Fy,E))return;if(!!this.Fy)A.
z$([this,this.Aai],this.Fy,0);this.Fy=E;if(!!E)A.zX([this,this.Aai],E,0);if(!!E)
A.pe([this,this.Aai],this);},Aai:function(G){this.Am();},Aah:function(G){this.Am(
);},T8:function(E){if(A.aaZ(this.Ib,E))return;if(!!this.Ib)A.z$([this,this.Alw],
this.Ib,0);this.Ib=E;if(!!E)A.zX([this,this.Alw],E,0);if(!!E)A.pe([this,this.Alw
],this);},Alw:function(G){this.Am();},AfK:function(G){var F,CN;if((!this.Ib||!this.
FP)||!this.Fy)return;var A1u=this.KC.AeP([(this.KC.String.length-(F=this.Fy,F[1].
call(F[0])))-(CN=this.FP,CN[1].call(CN[0])),0]);var A2M=this.KC.AeP([this.KC.String.
length-(F=this.Fy,F[1].call(F[0])),0]);var AAA=this.KC.Db(0x0);this.EC.H([A1u[0]-
1,AAA[1],A2M[0]+1,AAA[3]]);},Ara:function(E){if(this.ANk===E)return;this.ANk=E;this.
Am();},Arb:function(E){if(this.ANl===E)return;this.ANl=E;this.Am();},AeA:function(
E){if(A.aaZ(this.LP,E))return;if(!!this.LP)A.z$([this,this.A2a],this.LP,0);this.
LP=E;if(!!E)A.zX([this,this.A2a],E,0);if(!!E)A.pe([this,this.A2a],this);},A2a:function(
G){this.Am();},_Init:function(aArg){C.Aeo._Init.call(this,aArg);A.acg.An._Init.call(
this.An={I:this},0);A.acg.CA._Init.call(this.EC={I:this},0);this.__proto__=C.Avm;
this.An.H(Ahw);this.EC.H(AXr);this.EC.NV(2);this.EC.L(A.jb.ET);this.J(this.An,0);
this.J(this.EC,0);this.KC.QT([this,this.AfK]);},_Done:function(){this.__proto__=
C.Aeo;this.An._Done();this.EC._Done();C.Aeo._Done.call(this);},_ReInit:function(
){C.Aeo._ReInit.call(this);this.An._ReInit();this.EC._ReInit();},_Mark:function(
D){var B;C.Aeo._Mark.call(this,D);if((B=this.ABw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FP)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ib)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
LP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Jw:0,Aag:4,Bcr:true,Bcq:false,Bbm:true,Bcj:false,AlB:function(
G){C.QZ.AlB.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bci()){this.Jw=A._GetAutoObject(
A.Device.Helper).Ul.Id;var AcW=A._GetAutoObject(A.Device.Helper).AQm(this.Jw);if(
AcW)A._GetAutoObject(A.Device.Device).A5(107,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,[this,this.A2d]);else{this.Aag=A._GetAutoObject(A.Device.
Helper).AQn(this.Jw);var BcN=false;if((this.Aag===3)||(this.Aag===2))BcN=A._GetAutoObject(
A.Device.Helper).A6k(this.Jw,A._GetAutoObject(A.Device.Helper).W);if(BcN)A._GetAutoObject(
A.Device.Device).A5(21,true,A._GetAutoObject(A.Device.Converter).SM(this.Jw),0,null
);else switch(this.Aag){case 2:{var BM=A._GetAutoObject(A.Device.Converter).Aw$(
this.Jw);A._GetAutoObject(A.Device.Device).A5(46,true,BM.toFixed(),0,[this,this.
A2d]);}break;case 3:case 1:case 0:case 4:this.A21();break;default:throw new Error(
AHs+this.Aag.toFixed());}}}},Eo:function(G){A._GetAutoObject(C.AW).Fl();},AH_:function(
s){this.Eo(s);},A21:function(){if((this.Aag===3)||(this.Aag===2)){if((this.Bbm&&(
A._GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper
).W.NaisId!==this.Jw)){A._GetAutoObject(A.Device.Device).A5(69,true,A.jV,0,[this
,this.A2d]);return;}else this.BzQ();}A._GetAutoObject(A.Device.Helper).W.NU(this.
Jw);this.Bcj=true;this.BzS();this.Eo(this);},A2d:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
A21();break;case 107:switch(As.PopupState){case 7:{this.A21();A._GetAutoObject(A.
Device.Helper).BmG(this.Jw);}break;case 8:this.Eo(this);break;default:;}break;case
69:if(As.PopupState===4)this.Eo(this);break;default:A.ab5("%s%e",AHt,As.Id);}},BzQ:
function(){A._GetAutoObject(A.Device.Helper).W.Nb(this.Jw);if(this.Bcq&&(A._GetAutoObject(
A.Device.Converter).Acf(this.Jw)===10)){var Ba3=Math.trunc((this.Jw%1000000000000
)/10000000000);if(!Ba3&&(A._GetAutoObject(A.Device.Helper).W.AnimalType===2))A._GetAutoObject(
A.Device.Helper).W.DT(0);else if((Ba3===1)&&(A._GetAutoObject(A.Device.Helper).W.
AnimalType!==2))A._GetAutoObject(A.Device.Helper).W.DT(2);}},BzS:function(){if(this.
Bcr){A._GetAutoObject(A.Device.Helper).W.Ud(A._GetAutoObject(A.Device.Helper).Bfv(
A._GetAutoObject(A.Device.Device).Ahs,A._GetAutoObject(A.Device.Helper).W));if(A.
_GetAutoObject(A.Device.Device).Ahs===1)A._GetAutoObject(A.Device.Helper).A_z();
}},_Init:function(aArg){C.QZ._Init.call(this,aArg);this.__proto__=C.SetTransponderScreen;
this.N.Y(true);this.Dl(C.IA);this.Number.R(A.aaR(A.acf.OJ));this.I6.H(AXs);this.
II.H(WH);this.Akh(1);this.N.Cw=[this,this.AH_];this.N.CT(A.aaL(A.ach.EU));},_ReInit:
function(){C.QZ._ReInit.call(this);this.Number.R(A.aaR(A.acf.OJ));},_className:"Application::SetTransponderScreen"
};C.ACG={Gc:null,Lh:null,Kc:null,CU:function(){this.Am();},Init:function(aArg){this.
Am();},Ai:function(Ae){C.Eu.Ai.call(this,Ae);this.Lh.R(A._GetAutoObject(A.acj.DN
).AfE());this.Kc.R(A._GetAutoObject(A.acj.DN).Z9());},_Init:function(aArg){C.Eu.
_Init.call(this,aArg);A.acg.Text._Init.call(this.Gc={I:this},0);A.acg.Text._Init.
call(this.Lh={I:this},0);A.acg.Text._Init.call(this.Kc={I:this},0);this.__proto__=
C.ACG;this.Background.L(A.jb.Text);this.Gc.H(AXt);this.Gc.A3(0x11);this.Gc.R(A.aaR(
A.acf.Date));this.Gc.L(A.jb.Bi);this.Lh.H(AXu);this.Lh.A3(0x11);this.Lh.L(A.jb.Bi
);this.Kc.H(AXv);this.Kc.L(A.jb.Bi);this.J(this.Gc,0);this.J(this.Lh,0);this.J(this.
Kc,0);this.Gc.S(A.aaL(A.fl.Ah));this.Lh.S(A.aaL(A.fl.Ah));this.Kc.S(A.aaL(A.fl.Ah
));this.Init(aArg);},_Done:function(){this.__proto__=C.Eu;this.Gc._Done();this.Lh.
_Done();this.Kc._Done();C.Eu._Done.call(this);},_ReInit:function(){C.Eu._ReInit.
call(this);this.Gc._ReInit();this.Lh._ReInit();this.Kc._ReInit();this.Gc.R(A.aaR(
A.acf.Date));this.Gc.S(A.aaL(A.fl.Ah));this.Lh.S(A.aaL(A.fl.Ah));this.Kc.S(A.aaL(
A.fl.Ah));this.CU();},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.
Gc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Kc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AGu={Md:null,Hg:null,H4:null,AP:null,A9:null,FK:0,H8:0,Ain:false,Init:function(
aArg){},Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hg.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A9.H([this.Hg.M[2]-1,0,this.Hg.M[2]+1,aSize[
1]]);this.Md.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H4.H(this.Md.M);
},Ai:function(Ae){C.Bb.Ai.call(this,Ae);if(this.Ain){this.H4.R(Ra);this.H4.L(A.jb.
Text);this.Md.L(this.Background.AQ);}else{this.H4.R(A._GetAutoObject(A.Device.Converter
).ST(this.FK,2,true));this.H4.L(A._GetAutoObject(A.acj.DN).Aza(this.FK,this.H8));
this.Md.L(A._GetAutoObject(A.acj.DN).Ay_(this.FK,this.H8));}this.Hg.L(this.V.AQ);
},Ce:function(Ac){if(!this.AY)return;this.Hu=Ac;if(!!this.AY){var Ak_=this.AY.Hz(
Ac,6);var AlG=this.AY.CD(Ac,8);if(this.Hu>0){var BwX=this.AY.Hz(this.Hu-1,6);var
Bzu=this.AY.CD(this.Hu-1,8);var Lx=A._GetAutoObject(A.Device.Helper).ML(BwX,Ak_);
if(!!Lx){this.Ain=false;this.FK=A._GetAutoObject(A.acj.DN).Ak7(Lx,Bzu,AlG);}else{
this.Ain=true;this.FK=0;}}else{this.Ain=true;this.FK=0;}this.U(A._GetAutoObject(
A.acj.KD).AB$(Ak_));this.Hg.R(A._GetAutoObject(A.Device.Converter).AkK(AlG));this.
H8=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.Am();}},_Init:function(aArg
){C.Bb._Init.call(this,aArg);A.acg.AJ._Init.call(this.Md={I:this},0);A.acg.Text.
_Init.call(this.Hg={I:this},0);A.acg.Text._Init.call(this.H4={I:this},0);A.acg.AJ.
_Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A9={I:this},0);this.__proto__=
C.AGu;this.V.H(OV);this.Md.H(Asw);this.Hg.H(AHu);this.Hg.A3(0x12);this.Hg.R(SX);
this.Hg.L(A.jb.Text);this.H4.H(AHv);this.H4.R(SX);this.H4.L(A.jb.Text);this.AP.H(
An2);this.AP.L(A.jb.Bc);this.A9.H(An3);this.A9.L(A.jb.Bc);this.J(this.Md,0);this.
J(this.Hg,0);this.J(this.H4,0);this.J(this.AP,0);this.J(this.A9,0);this.Hg.S(A.aaL(
A.fl.Ah));this.H4.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.Bb;this.Md._Done();this.Hg._Done();this.H4._Done();this.AP._Done();this.A9._Done(
);C.Bb._Done.call(this);},_ReInit:function(){C.Bb._ReInit.call(this);this.Md._ReInit(
);this.Hg._ReInit();this.H4._ReInit();this.AP._ReInit();this.A9._ReInit();this.Hg.
S(A.aaL(A.fl.Ah));this.H4.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bb._Mark.
call(this,D);if((B=this.Md)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Be:null,VE:null,Ahr:null,SK:null
,KF:A.jV,CU:function(){this.Am();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var Lx=
A._GetAutoObject(A.Device.Helper).ML(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!Lx){var FK=A._GetAutoObject(
A.acj.DN).Ak7(Lx,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var Adp=A.aaR(A.acf.BfJ);Adp=A._GetAutoObject(
A.Device.Helper).Ne(Adp,PZ,A._GetAutoObject(A.Device.Converter).ST(FK,2,true));Adp=
A._GetAutoObject(A.Device.Helper).Ne(Adp,Axu,A._GetAutoObject(A.acj.DN).Z9());this.
SK.R(Adp);this.Ahr.L(A._GetAutoObject(A.acj.DN).Ay_(FK,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.SK.L(A._GetAutoObject(A.acj.DN).Aza(FK,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.SK.R(A.aaR(A.acf.AUG));this.Ahr.L(A.jb.
AQa);this.SK.L(A.jb.Text);}},Cx:function(G){var Fj=A._NewObject(A.Device.Filter,
0);var HQ=A._NewObject(A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fj.CY(HQ);var AcM=A._NewObject(A.Device.Int32FilterCriterion
,0);AcM.Initialize(8,2,0,true);Fj.CY(AcM);A._GetAutoObject(A.Device.Device).Br.Bh(
Fj);this.AwT(this);},EV:function(G){A._GetAutoObject(A.Device.Device).Br.Bh(null
);},AwT:function(G){this.Be=A._NewObject(C.FT,0);this.Be.NS(C.AGu);this.Be.H(AxJ
);this.Be.Y6(A._GetAutoObject(A.Device.Device).Br);this.Be.Dt(this.KF);this.J(this.
Be,0);this.A8(this.Be);},AmZ:function(G){A._GetAutoObject(C.AW).Fl();},Dt:function(
E){if(this.KF===E)return;this.KF=E;if(!!this.Be)this.Be.Dt(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ACG._Init.call(this.VE={I:this},0);A.acg.AJ._Init.
call(this.Ahr={I:this},0);A.acg.Text._Init.call(this.SK={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(Ca);this.N.Y(true);this.Dl(C.IA);this.VE.H(
P0);this.KF=A.aaR(A.acf.Aj0);this.Ahr.AX(0x1D);this.Ahr.H(JR);this.SK.AX(0x1D);this.
SK.H(JR);this.SK.A3(0x12);this.SK.R(SX);this.J(this.VE,0);this.J(this.Ahr,0);this.
J(this.SK,0);this.N.Cw=[this,this.AmZ];this.N.CT(A.aaL(A.ach.EU));this.SK.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.AB;this.VE._Done();this.Ahr._Done(
);this.SK._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.VE._ReInit();this.Ahr._ReInit();this.SK._ReInit();this.Dt(A.aaR(A.acf.Aj0
));this.SK.S(A.aaL(A.fl.Ah));this.CU();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Be)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.VE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ahr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SK
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
L$={DI:null,Aca:null,AQM:11,Go:0,A3Q:true,ABa:false,IP:function(G){if(A._GetAutoObject(
A.Device.Device).Ap.Cb()>0)this.Jo(4);else A._GetAutoObject(A.Device.Device).A5(
30,true,A.jV,0,null);},Cx:function(G){if(this.DI.Azj())this.DI.AcL();else if((this.
Go===2)&&A._GetAutoObject(A.Device.Helper).W.Aqn())this.Jo(5);else this.Jo(1);},
EV:function(G){this.AKi();},Eo:function(G){this.Jo(0);A._GetAutoObject(C.AW).Fl(
);},Bz5:function(){A._GetAutoObject(A.Device.Device).Ahj();},AKi:function(){A._GetAutoObject(
A.Device.Device).Any();},A8r:function(E){if(this.ABa===E)return;this.ABa=E;A.abo([
this,this.BiT,this.A8r],0);},Jo:function(E){var B;if(this.Go===E)return;this.Go=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).Akq();A.zX([this,this.AJL]
,[B=A._GetAutoObject(A.Device.Helper),B.AqY,B.Akg],0);A.z$([this,this.AzM],[B=this.
DI,B.Am6,B.Jo],0);this.Bz5();}break;case 3:{A.z$([this,this.AJL],[B=A._GetAutoObject(
A.Device.Helper),B.AqY,B.Akg],0);this.AKi();this.Bx5();}break;case 2:{A._GetAutoObject(
A.Device.Helper).ArO();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A3Q)this.BzT();else this.BzW();}break;case 4:{A.z$([this,this.AJL],[B=A._GetAutoObject(
A.Device.Helper),B.AqY,B.Akg],0);this.AKi();A._GetAutoObject(A.Device.Helper).ArO(
);A.zX([this,this.Bdu],[B=A._GetAutoObject(A.Device.Device),B.AvI,B.Ax_],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.AQM);}break;case 5:this.BeH();break;case
6:{A.zX([this,this.AzM],[B=this.DI,B.Am6,B.Jo],0);this.DI.AcL();}break;case 0:{A.
z$([this,this.AJL],[B=A._GetAutoObject(A.Device.Helper),B.AqY,B.Akg],0);this.AKi(
);}break;default:throw new Error(AxN);}A.abo([this,this.Am6,this.BuC],0);},BuC:function(
Aq){this.Jo(Aq);},AJL:function(G){if(!!A._GetAutoObject(A.Device.Helper).Ul){if(
this.Go===1)this.Jo(3);else A.ab5("%s%e",AXw,this.Go);}else A.ab5("%s",AHw);},BzT:
function(){A._GetAutoObject(A.Device.Device).A5(13,true,A._GetAutoObject(A.Device.
Helper).AkG(A._GetAutoObject(A.Device.Helper).Ul.Id).toFixed(),0,[this,this.Byh]
);},Byh:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
As&&((As.PopupState===4)||(As.PopupState===3))){if(this.Bbq(false))A._GetAutoObject(
C.AW).BS(31);else{A._GetAutoObject(A.Device.Helper).Akq();this.Jo(1);}}else if(!
!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).Akq();this.Jo(1);}},
Bbq:function(AiD){if(A._GetAutoObject(A.Device.Device).Ap.Lc()){A._GetAutoObject(
A.Device.Device).A5(41,true,A._GetAutoObject(A.Device.Device).Ap.HA().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gf();A._GetAutoObject(
A.Device.Helper).ApP(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.NU(A._GetAutoObject(A.Device.Helper).Ul.Id);if(!!A._GetAutoObject(A.Device.
Helper).Ahf){var Ali=A._GetAutoObject(A.Device.Helper).Ahf.AN8();A._GetAutoObject(
A.Device.Helper).W.AbJ(Ali);A._GetAutoObject(A.Device.Helper).W.Anc(Ali);}if(A._GetAutoObject(
A.Device.Helper).AQn(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.Nb(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.Ud(A._GetAutoObject(A.Device.Helper).Bfu(A._GetAutoObject(A.Device.
Device).Af8,A._GetAutoObject(A.Device.Helper).W));if(AiD){A._GetAutoObject(A.Device.
Helper).W.Cl(A._GetAutoObject(A.Device.Device).Ap);var L1=A._GetAutoObject(A.Device.
Device).Ap.K9(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).Sy(L1);if(A._GetAutoObject(A.Device.Helper).AmF()){if(A._GetAutoObject(A.
Device.Device).Br.Lc())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Br.HA().toFixed(),0,null);else{var BY=A._NewObject(A.Device.Rating
,0);BY.Gf();BY.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BY.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).Aa1(A._GetAutoObject(A.Device.Helper).W.AnimalType
));BY.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);BY.Cl(A._GetAutoObject(
A.Device.Device).Br);}}if(!A._GetAutoObject(A.Device.Device).Af8)A._GetAutoObject(
A.Device.Helper).A_z();}return true;},Bx5:function(){if(!!A._GetAutoObject(A.Device.
Helper).Ul){var AIz=true;if(A._GetAutoObject(A.Device.Helper).Ul.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AIz=A._GetAutoObject(A.Device.Helper).A6w(A._GetAutoObject(
A.Device.Helper).Ul.Id);if(!AIz&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.Bbq(true);AIz=A._GetAutoObject(A.Device.Helper).A6w(A._GetAutoObject(A.
Device.Helper).Ul.Id);}}if(AIz)this.Jo(5);else this.Jo(2);}else{A.ab5("%s",AHw);
return;}},Bdu:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.AQM){A.z$([this,this.Bdu],[B=A._GetAutoObject(A.Device.Device),B.AvI,B.Ax_
],0);if(A._GetAutoObject(A.Device.Helper).W.Aqn())this.Jo(5);else this.Jo(1);}},
BeH:function(){if(this.ABa===true)this.Jo(6);else A._GetAutoObject(C.AW).BS(24);
},BzW:function(){A._GetAutoObject(A.Device.Device).A5(36,true,A.jV,0,[this,this.
By_]);},By_:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).Akq();this.Jo(1);}},AzM:function(G){if(!this.DI.Go)this.Jo(1);},A14:function(G
){},BuM:function(s){this.A14(s);},BiT:function(){return this.ABa;},Am6:function(
){return this.Go;},_Init:function(aArg){C.QZ._Init.call(this,aArg);A.acg.Text._Init.
call(this.Aca={I:this},0);this.__proto__=C.L$;this.N.Y(true);this.Dl(C.Aqo);this.
Number.H(AXx);this.Number.R(A.aaR(A.acf.A91));this.I6.H(AXy);this.II.H(AXz);this.
Aca.H(AXA);this.Aca.R(AXB);this.Aca.L(A.jb.Text);this.J(this.Aca,0);this.N.Cw=[this
,this.Eo];this.N.Ci=[this,this.BuM];this.N.CT(A.aaL(A.ach.EU));this.Number.S(A.aaL(
A.fl.Ah));this.Aca.S(A.aaL(A.fl.Hk));this.DI=A._GetAutoObject(C.DI);},_Done:function(
){this.__proto__=C.QZ;this.Aca._Done();C.QZ._Done.call(this);},_ReInit:function(
){C.QZ._ReInit.call(this);this.Aca._ReInit();this.Number.R(A.aaR(A.acf.A91));this.
Number.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.QZ._Mark.call(this,D);if((B=
this.DI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A3C={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,AoL:-1,Go:0,Bv$:function(){var Beo=false;
var Od=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Br.Lc())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(A.
Device.Device).Br.HA().toFixed(),0,null);else if(Od){Beo=true;var BY=A._NewObject(
A.Device.Rating,0);BY.Gf();BY.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).AwP(BY,5);BY.OnSetAppearance(3);BY.Cl(A._GetAutoObject(
A.Device.Device).Br);}else{var BY=A._NewObject(A.Device.Rating,0);BY.Gf();BY.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).AwP(BY
,5);BY.OnSetAppearance(1);BY.Cl(A._GetAutoObject(A.Device.Device).Br);}A._GetAutoObject(
A.Device.Helper).W.EB(A._GetAutoObject(A.Device.Helper).W.CI,A._GetAutoObject(A.
Device.Device).Ap);if(Beo)A._GetAutoObject(A.Device.Helper).W.Ua(false);if(Od)A.
_GetAutoObject(A.Device.Helper).W.Ans(false);else A._GetAutoObject(A.Device.Helper
).W.Ans(true);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(A.Device.Device
).Ap);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A5(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MS]);else A._GetAutoObject(A.Device.Device).A5(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MS]);},Bwb:function(){A._GetAutoObject(
A.Device.Helper).W.AFP(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cl(A._GetAutoObject(A.Device.Device).Ap);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A5(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);else A._GetAutoObject(
A.Device.Device).A5(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MS]);},Qb:function(D$){switch(D$){case 4:this.Bv$();break;case
128:A._GetAutoObject(C.AW).BS(7);break;case 16:A._GetAutoObject(C.AW).BS(36);break;
case 1:A._GetAutoObject(C.AW).BS(10);break;case 2:A._GetAutoObject(C.AW).BS(11);
break;case 8:this.Bwb();break;case 64:A._GetAutoObject(C.AW).BS(29);break;case 32:
A._GetAutoObject(C.AW).BS(54);break;case 256:A._GetAutoObject(C.AW).BS(21);break;
case 512:A._GetAutoObject(C.AW).BS(30);break;case 1024:this.Bx2();break;case 262144:
this.BAj();break;case 2048:this.AcL();break;case 4096:this.Bbi(false);break;case
8192:this.Bwa();break;case 16384:this.Bx1();break;case 32768:this.BwA();break;case
524288:this.BwB();break;case 65536:this.Bw0();break;case 131072:this.BzK();break;
case 0:break;default:throw new Error(AXC);}},Bbs:function(D$,BvG){var EH=A._NewObject(
C.V3,0);EH.AbH(false);EH.Aj(true);EH.AN=BvG;EH.Bj0(D$);switch(D$){case 1:{EH.U(A.
aaR(A.acf.AnA));EH.Dy(A.aaL(A.ach.AKW));}break;case 2:{EH.U(A.aaR(A.acf.A9L));EH.
Dy(A.aaL(A.ach.AKX));}break;case 4:{EH.U(A.aaR(A.acf.Alarm));EH.Dy(A.aaL(A.ach.AKY
));EH.AEP(true);}break;case 8:{EH.U(A.aaR(A.acf.Ary));EH.Dy(A.aaL(A.ach.AKZ));EH.
AEP(true);}break;case 16:{EH.U(A.aaR(A.acf.ALx));EH.Dy(A.aaL(A.ach.AK0));}break;
case 32:{EH.U(A.aaR(A.acf.AnimalLoss));EH.Dy(A.aaL(A.ach.AK1));}break;case 64:{EH.
U(A.aaR(A.acf.Unregister));EH.Dy(A.aaL(A.ach.AK2));}break;case 128:{EH.U(A.aaR(A.
acf.Edit));EH.Dy(A.aaL(A.ach.AK3));}break;case 256:{EH.U(A.aaR(A.acf.Weighing));
EH.Dy(A._GetAutoObject(A.acj.DN).BxD());}break;case 512:{EH.U(A.aaR(A.acf.AQ$));
EH.Dy(A.aaL(A.ach.AKO));}break;case 1024:{EH.U(A.aaR(A.acf.LinkTransponder));EH.
Dy(A.aaL(A.ach.AKP));}break;case 262144:{EH.U(A.aaR(A.acf.UnlinkTransponder));EH.
Dy(A.aaL(A.ach.AKV));}break;case 2048:{EH.U(A.aaR(A.acf.Tl));EH.Dy(A.aaL(A.ach.AKQ
));}break;case 4096:{EH.U(A.aaR(A.acf.Calving));EH.Dy(A.aaL(A.ach.AKR));}break;case
8192:{EH.U(A.aaR(A.acf.DryOff));EH.Dy(A.aaL(A.ach.AKS));EH.AEP(true);}break;case
16384:{EH.U(A.aaR(A.acf.BgH));EH.Dy(A.aaL(A.ach.AKT));}break;case 131072:{EH.U(A.
aaR(A.acf.BmS));EH.Dy(A.aaL(A.ach.AKU));}break;default:A.ab5("%s",(AXD+D$.toFixed(
))+AXE);}return EH;},Bxb:function(){this.AoL=this.AoL+1;if(this.AoL>=this.AutoActions.
Po())this.Jo(0);else this.Jo(2);},Bzy:function(){this.AoL=-1;},Azj:function(){return(
this.AoL>-1)&&!this.BxV();},BxV:function(){return this.AoL>=this.AutoActions.Po(
);},Jo:function(E){if(this.Go===E)return;this.Go=E;switch(E){case 1:this.Bxb();break;
case 2:{var Z0=this.AutoActions.Pn(this.AoL);if(this.A3z(A._GetAutoObject(A.Device.
Helper).W,Z0))this.Qb(Z0);else A._GetAutoObject(A.Device.Device).A5(64,true,(this.
ActionToString.Lo(Z0)+Asu)+this.AnimalTypeToString.Lo(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MS]);}break;case 0:this.Bzy();break;default:throw new
Error(AxN);}A.abo([this,this.Am6,this.Jo],0);},MS:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;if((As.Id===63)&&(As.PopupState===7))this.
Bbi(true);if((As.Id===32)&&(As.PopupState===7))A._GetAutoObject(C.AW).BS(50);if((((
As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8))&&this.Azj())this.
Jo(1);},Bbk:function(){return!!A._GetAutoObject(A.Device.Helper).W&&(A._GetAutoObject(
A.Device.Device).Ap.K9(0,A._GetAutoObject(A.Device.Helper).W.Id)>=0);},Bx2:function(
){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId)A._GetAutoObject(C.AW).BS(
50);else A._GetAutoObject(A.Device.Device).A5(32,true,A.jV,0,[this,this.MS]);},AcL:
function(){this.Jo(1);},Bzw:function(){var Od=A._GetAutoObject(A.Device.Helper).
W.IsAlarm;if(Od&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.Device.Device).Br.
Lc())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(A.Device.Device
).Br.HA().toFixed(),0,null);else{var BY=A._NewObject(A.Device.Rating,0);BY.Gf();
BY.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Helper).AwP(BY,5);BY.Cl(A._GetAutoObject(A.Device.Device).Br);}}A._GetAutoObject(
A.Device.Helper).W.EB(A._GetAutoObject(A.Device.Helper).W.CI,A._GetAutoObject(A.
Device.Device).Ap);A._GetAutoObject(A.Device.Helper).W.Ua(false);if(Od)A._GetAutoObject(
A.Device.Helper).W.Ans(false);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(
A.Device.Device).Ap);A._GetAutoObject(A.Device.Device).A5(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);},Bzx:function(){A._GetAutoObject(
A.Device.Helper).W.AFP(false);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(
A.Device.Device).Ap);A._GetAutoObject(A.Device.Device).A5(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);},Bbi:function(Bxf){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(Bxf===false))A._GetAutoObject(A.Device.
Device).A5(63,true,A.jV,0,[this,this.MS]);else A._GetAutoObject(C.AW).BS(62);},Bwa:
function(){A._GetAutoObject(A.Device.Helper).W.Ari(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(A.Device.Device
).Ap);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A5(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MS]);else A._GetAutoObject(A.Device.Device).A5(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MS]);},Bx1:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.AW).BS(92);else A._GetAutoObject(A.
Device.Device).A5(69,true,A.jV,0,[this,this.MS]);},BwA:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjJ(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ag5(false);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(A.Device.
Device).Ap);A._GetAutoObject(A.Device.Device).A5(65,true,A.jV,2000,[this,this.MS
]);}else{A._GetAutoObject(A.Device.Helper).W.AeB(false);A._GetAutoObject(A.Device.
Helper).W.Cl(A._GetAutoObject(A.Device.Device).Ap);A._GetAutoObject(A.Device.Device
).A5(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MS]);}}},Bw0:function(){A._GetAutoObject(A.Device.Helper).W.Ag5(false);A._GetAutoObject(
A.Device.Helper).W.Cl(A._GetAutoObject(A.Device.Device).Ap);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjJ(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.Ag5(false);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(A.Device.
Device).Ap);A._GetAutoObject(A.Device.Device).A5(65,true,A.jV,2000,[this,this.MS
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A5(104,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MS]);else A._GetAutoObject(A.Device.Device).A5(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);}},A3z:function(ED,D$
){var Ql=false;switch(D$){case 32768:Ql=ED.IsRegistrationNoticePending&&!!ED.NaisIdMother;
break;case 524288:Ql=ED.IsRegistrationNoticePending&&!ED.NaisIdMother;break;case
4096:case 8192:switch(ED.AnimalType){case 1:Ql=true;break;default:;}break;case 512:
switch(ED.AnimalType){case 0:Ql=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Ql=true;break;default:A.ab5("%s",AXF+
D$.toFixed());}return Ql;},BzK:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.AW).BS(91);else A._GetAutoObject(A.Device.Device).A5(
69,true,A.jV,0,[this,this.MS]);},BAj:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A5(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MS]);else{A._GetAutoObject(A.
Device.Helper).W.NU(0);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(A.
Device.Device).Ap);A._GetAutoObject(A.Device.Device).A5(86,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);}},BwB:function(){if(
A._GetAutoObject(A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(
A.Device.Helper).W.AeB(false);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(
A.Device.Device).Ap);A._GetAutoObject(A.Device.Device).A5(98,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MS]);}},Am6:function(){return this.
Go;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.A3C;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AK8={AaB:null,ApQ:null,Jo:function(E){if(this.Go===E)return;C.L$.Jo.call(this
,E);switch(E){case 1:this.Dl(C.Aqo);break;case 5:case 6:this.Dl(C.IA);break;case
3:case 4:case 2:case 0:break;default:throw new Error(AxN);}},A14:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.L$._Init.call(this
,aArg);A.acg.Text._Init.call(this.AaB={I:this},0);C.AK9._Init.call(this.ApQ={I:this
},0);this.__proto__=C.AK8;this.A8r(true);this.AaB.H(AXG);this.AaB.R(A.aaR(A.acf.
Tl));this.AaB.L(A.jb.Text);this.ApQ.H(AXH);this.J(this.AaB,0);this.J(this.ApQ,0);
this.N.Cn(A.aaL(A.ach.Abb));this.AaB.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.L$;this.AaB._Done();this.ApQ._Done();C.L$._Done.call(this);},_ReInit:function(
){C.L$._ReInit.call(this);this.AaB._ReInit();this.ApQ._ReInit();this.AaB.R(A.aaR(
A.acf.Tl));this.AaB.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L$._Mark.call(
this,D);if((B=this.AaB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApQ)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
H7:null,JP:null,A14:function(G){if(this.H7.LO(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.L$._Init.call(this,aArg);A.acg.Text._Init.call(this.
JP={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JP.H(AXI);this.JP.KL(
true);this.JP.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CM)+A.aaR(A.acf.AAZ));this.
JP.L(A.jb.Text);this.J(this.JP,0);this.N.Cn(A.aaL(A.ach.Abb));this.JP.S(A.aaL(A.
fl.Ah));this.H7=A._GetAutoObject(C.O$);},_Done:function(){this.__proto__=C.L$;this.
JP._Done();C.L$._Done.call(this);},_ReInit:function(){C.L$._ReInit.call(this);this.
JP._ReInit();this.JP.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CM)+A.aaR(A.acf.AAZ
));this.JP.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L$._Mark.call(this,D);if((
B=this.H7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JP)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.AK9={Z:null,Init:
function(aArg){var B;A.zV([this,this.AAK],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.AtW],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.AAK],this);
A.pe([this,this.AtW],this);this.H(A.abK(this.M,AXJ));this.Z.H(A.abK(this.Z.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AXK)));},Ba_:function(G){var B;var Ak8=0;var AyM=0;
var Bbo;var X=this.Z.Ag;var Ct=null;Bbo=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).Po()*58))/2)|0;while(!!X&&!((X.T&0x200)===0x200)){Ct=(C.V3.isPrototypeOf(
X)?X:null);if(((X.T&0x400)===0x400)&&!!Ct){Ct.H(A.abK(Ct.M,AXL));Ct.H(A.abM(Ct.M
,(AyM*58)+Bbo));Ct.H(A.abO(Ct.M,Ak8*58));if(AyM>=3){Ak8=Ak8+1;AyM=0;}else AyM=AyM+
1;}X=X.Ag;}this.A8(null);},A0u:function(D$){var EH=A._GetAutoObject(C.DI).Bbs(D$
,null);this.J(EH,0);this.Ba_(this);},Aoz:function(){var B;var X=this.Z.Ag;while(
!!X&&!((X.T&0x200)===0x200)){var Adn=X;X=X.Ag;if(((Adn.T&0x400)===0x400))this.HI(
Adn);}},AAK:function(G){this.Aoz();var P;var CC=A._GetAutoObject(C.AutoActions).
Po();for(P=0;P<CC;P=P+1){var Z0=A._GetAutoObject(C.AutoActions).Pn(P);this.A0u(Z0
);}A.pe([this,this.Ba_],this);A.pe([this,this.AtW],this);A.pe([this,this.BAt],this
);},AtW:function(G){var B;var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((
X.T&0x400)===0x400)){var Aa=(C.V3.isPrototypeOf(X)?X:null);Aa.AEP(false);}X=X.Ag;
}},BAt:function(G){var B;var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((
X.T&0x400)===0x400)){var Aa=(C.V3.isPrototypeOf(X)?X:null);var Bwq=A._GetAutoObject(
C.AutoActions).Po();if(!!Aa){var P;Aa.A8n(false);for(P=0;P<Bwq;P=P+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).Pn(P)){Aa.A8n(true);Aa.Bld(AXM+(P+1).toFixed());
}}}X=X.Ag;}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Z._Init.
call(this.Z={I:this},0);this.__proto__=C.AK9;this.Z.Kd(0);this.J(this.Z,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Z._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Z._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DI={_Init:function(
){C.A3C._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AOR={Lg:null,TU:null,Init:function(aArg){this.Lg.R(A._GetAutoObject(
A.acj.Temperature).Alh());},_Init:function(aArg){C.Dw._Init.call(this,aArg);A.acg.
Text._Init.call(this.Lg={I:this},0);C.CP._Init.call(this.TU={I:this},0);this.__proto__=
C.AOR;this.Lg.H(AXN);this.Lg.A3(0x12);this.Lg.L(A.jb.Text);this.TU.H(An4);this.TU.
R((A.aaR(A.acf.AgV)+AHx)+A.aaR(A.acf.J7));this.TU.A3(0x12);this.TU.L(A.jb.Text);
this.J(this.Lg,0);this.J(this.TU,0);this.Lg.S(A.aaL(A.fl.Ah));this.TU.S(A.aaL(A.
fl.Ak));this.TU.A7(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dw;this.Lg._Done();this.TU._Done();C.Dw._Done.call(this);},_ReInit:function(){
C.Dw._ReInit.call(this);this.Lg._ReInit();this.TU._ReInit();this.TU.R((A.aaR(A.acf.
AgV)+AHx)+A.aaR(A.acf.J7));this.Lg.S(A.aaL(A.fl.Ah));this.TU.S(A.aaL(A.fl.Ak));this.
TU.A7(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Dw._Mark.call(this,D);if((B=this.
Lg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ACF={Jm:null,DQ:null,_Init:
function(aArg){C.Dw._Init.call(this,aArg);A.acg.Text._Init.call(this.Jm={I:this}
,0);A.acg.Text._Init.call(this.DQ={I:this},0);this.__proto__=C.ACF;this.Jm.H(AXO
);this.Jm.KL(true);this.Jm.A3(0x14);this.Jm.R(A.aaR(A.acf.Ahq)+AHy);this.Jm.L(A.
jb.Text);this.DQ.H(An4);this.DQ.KL(true);this.DQ.R(A.aaR(A.acf.AFk));this.DQ.L(A.
jb.Text);this.J(this.Jm,0);this.J(this.DQ,0);this.Jm.S(A.aaL(A.fl.Ak));this.DQ.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dw;this.Jm._Done();this.DQ._Done(
);C.Dw._Done.call(this);},_ReInit:function(){C.Dw._ReInit.call(this);this.Jm._ReInit(
);this.DQ._ReInit();this.Jm.R(A.aaR(A.acf.Ahq)+AHy);this.DQ.R(A.aaR(A.acf.AFk));
this.Jm.S(A.aaL(A.fl.Ak));this.DQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dw._Mark.call(this,D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TK={IZ:null,_Init:function(aArg){C.Dw._Init.call(this,aArg);C.CP._Init.call(this.
IZ={I:this},0);this.__proto__=C.TK;this.IZ.H(AHz);this.IZ.R((((A.aaR(A.acf.Rz)+ZT
)+AHA)+A.aaR(A.acf.A_N))+OX);this.IZ.A3(0x12);this.IZ.L(A.jb.Text);this.J(this.IZ
,0);this.IZ.S(A.aaL(A.fl.Ah));this.IZ.A7(A.aaL(A.fl.Ak));this.IZ.CB(A.aaL(A.fl.By
));},_Done:function(){this.__proto__=C.Dw;this.IZ._Done();C.Dw._Done.call(this);
},_ReInit:function(){C.Dw._ReInit.call(this);this.IZ._ReInit();this.IZ.R((((A.aaR(
A.acf.Rz)+ZT)+AHA)+A.aaR(A.acf.A_N))+OX);this.IZ.S(A.aaL(A.fl.Ah));this.IZ.A7(A.
aaL(A.fl.Ak));this.IZ.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Dw._Mark.call(
this,D);if((B=this.IZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.AOT={Lh:null,Kc:null,CU:function(){this.A93();},Init:function(aArg){this.A93(
);},A93:function(){this.Lh.R(A._GetAutoObject(A.acj.DN).AfE());this.Kc.R(A._GetAutoObject(
A.acj.DN).Z9());},_Init:function(aArg){C.Dw._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lh={I:this},0);C.CP._Init.call(this.Kc={I:this},0);this.__proto__=C.AOT;
this.Lh.H(AXP);this.Lh.A3(0x12);this.Lh.L(A.jb.Text);this.Kc.H(An4);this.Kc.L(A.
jb.Text);this.J(this.Lh,0);this.J(this.Kc,0);this.Lh.S(A.aaL(A.fl.Ah));this.Kc.S(
A.aaL(A.fl.Ah));this.Kc.A7(A.aaL(A.fl.Ak));this.Kc.CB(A.aaL(A.fl.By));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dw;this.Lh._Done();this.Kc._Done();C.Dw.
_Done.call(this);},_ReInit:function(){C.Dw._ReInit.call(this);this.Lh._ReInit();
this.Kc._ReInit();this.Lh.S(A.aaL(A.fl.Ah));this.Kc.S(A.aaL(A.fl.Ah));this.Kc.A7(
A.aaL(A.fl.Ak));this.Kc.CB(A.aaL(A.fl.By));this.CU();},_Mark:function(D){var B;C.
Dw._Mark.call(this,D);if((B=this.Lh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kc
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
AMo={Md:null,Hg:null,H4:null,AP:null,A9:null,FK:0,Aad:0,H8:0,Ain:false,Init:function(
aArg){},Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hg.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A9.H([this.Hg.M[2]-1,0,this.Hg.M[2]+1,aSize[
1]]);this.Md.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H4.H(this.Md.M);
},Ai:function(Ae){C.Bb.Ai.call(this,Ae);if(this.Ain){this.H4.R(Ra);this.H4.L(A.jb.
Text);this.Md.L(this.Background.AQ);}else{this.H4.R(A._GetAutoObject(A.Device.Converter
).ST(this.FK,2,true));this.H4.L(A._GetAutoObject(A.acj.DN).Aza(this.FK,this.H8));
this.Md.L(A._GetAutoObject(A.acj.DN).Ay_(this.FK,this.H8));}if(this.Aad>0)this.Hg.
R(A._GetAutoObject(A.Device.Converter).AkK(this.Aad));else this.Hg.R(Ra);this.Hg.
L(this.V.AQ);},Ce:function(Ac){if(!this.AY)return;this.Hu=Ac;if(!!this.AY){var On=
this.AY.CD(Ac,1);var AtR=this.AY.Hz(Ac,24);var AJj=this.AY.CD(Ac,23);var AtS=this.
AY.Hz(Ac,19);this.Aad=this.AY.CD(Ac,18);if((AtR>0)&&(AtR!==AtS)){var Lx=A._GetAutoObject(
A.Device.Helper).ML(AtR,AtS);if(!!Lx){this.Ain=false;this.FK=A._GetAutoObject(A.
acj.DN).Ak7(Lx,AJj,this.Aad);}else{this.Ain=true;this.FK=0;}}else{this.Ain=true;
this.FK=0;}this.U(On.toFixed());this.H8=this.AY.Amu(Ac,14);this.Am();}},_Init:function(
aArg){C.Bb._Init.call(this,aArg);A.acg.AJ._Init.call(this.Md={I:this},0);A.acg.Text.
_Init.call(this.Hg={I:this},0);A.acg.Text._Init.call(this.H4={I:this},0);A.acg.AJ.
_Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A9={I:this},0);this.__proto__=
C.AMo;this.V.H(OV);this.Md.H(Asw);this.Hg.H(AHu);this.Hg.A3(0x12);this.Hg.R(SX);
this.Hg.L(A.jb.Text);this.H4.H(AHv);this.H4.R(SX);this.H4.L(A.jb.Text);this.AP.H(
An2);this.AP.L(A.jb.Bc);this.A9.H(An3);this.A9.L(A.jb.Bc);this.J(this.Md,0);this.
J(this.Hg,0);this.J(this.H4,0);this.J(this.AP,0);this.J(this.A9,0);this.Hg.S(A.aaL(
A.fl.Ah));this.H4.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.Bb;this.Md._Done();this.Hg._Done();this.H4._Done();this.AP._Done();this.A9._Done(
);C.Bb._Done.call(this);},_ReInit:function(){C.Bb._ReInit.call(this);this.Md._ReInit(
);this.Hg._ReInit();this.H4._ReInit();this.AP._ReInit();this.A9._ReInit();this.Hg.
S(A.aaL(A.fl.Ah));this.H4.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bb._Mark.
call(this,D);if((B=this.Md)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.M0={Mc:null,AP:null,A9:null,Gp:null,W5:0,Init:
function(aArg){},Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.Mc.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Mc.M);this.Background.H([].concat(this.Mc.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gp.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A9.H([this.Gp.M[2]-1,0,this.
Gp.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Bb.Ai.call(this,Ae);this.Gp.L(this.V.AQ
);if(!!this.W5&&(this.W5!==5)){this.Mc.L(A._GetAutoObject(A.acj.Assessment).Qd(this.
W5));this.V.L(A._GetAutoObject(A.acj.Assessment).Xd(this.W5));}else this.Mc.L(this.
Background.AQ);},Ce:function(Ac){if(!this.AY)return;this.Hu=Ac;if(!!this.AY){var
On=this.AY.CD(Ac,1);var LK=this.AY.IV(Ac,13);var Alc=this.AY.IV(Ac,17);var All=this.
AY.HW(Ac,11);var Ayu=this.AY.Hz(Ac,4);var Afr=A._GetAutoObject(A.Device.Helper).
ML(Ayu,A._GetAutoObject(A.Device.Helper).DF());this.W5=A._GetAutoObject(A.Device.
Helper).ALu(LK,All,Alc);this.U(On.toFixed());if(Afr<100)this.Gp.R((Afr.toFixed()+
CM)+A.aaR(A.acf.AK7));else this.Gp.R(A._GetAutoObject(A.acj.KD).ACa(Ayu,A._GetAutoObject(
A.Device.Helper).DF(),AHB));this.Am();}},_Init:function(aArg){C.Bb._Init.call(this
,aArg);A.acg.AJ._Init.call(this.Mc={I:this},0);A.acg.AJ._Init.call(this.AP={I:this
},0);A.acg.AJ._Init.call(this.A9={I:this},0);A.acg.Text._Init.call(this.Gp={I:this
},0);this.__proto__=C.M0;this.Mc.H(Asw);this.Background.H(AXQ);this.V.H(OV);this.
AP.H(An2);this.AP.L(A.jb.Bc);this.A9.H(An3);this.A9.L(A.jb.Bc);this.Gp.H(AxO);this.
J(this.Mc,-3);this.J(this.AP,0);this.J(this.A9,0);this.J(this.Gp,0);this.Gp.S(A.
aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.Bb;this.Mc._Done(
);this.AP._Done();this.A9._Done();this.Gp._Done();C.Bb._Done.call(this);},_ReInit:
function(){C.Bb._ReInit.call(this);this.Mc._ReInit();this.AP._ReInit();this.A9._ReInit(
);this.Gp._ReInit();this.Gp.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bb._Mark.
call(this,D);if((B=this.Mc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.AMm={Aja:null,N3:null,AP:null,A9:null,Jg:null,AJE:0,A1t:0,Init:function(aArg
){},Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.N3.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Aja.H(this.N3.M);this.A9.H([this.N3.M[2]-1,0,this.N3.M[2]+1,aSize[1]]);
this.Jg.H([this.N3.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bb.Ai.call(this
,Ae);this.Jg.C9(this.V.AQ);if(this.AJE>0){this.Aja.L(A._GetAutoObject(A.acj.Assessment
).Qd(this.A1t));this.N3.L(A._GetAutoObject(A.acj.Assessment).Xd(this.A1t));}else{
this.Aja.L(this.Background.AQ);this.N3.L(this.V.AQ);}},Ce:function(Ac){if(!this.
AY)return;this.Hu=Ac;if(!!this.AY){var KV=this.AY.CD(Ac,0);var On=this.AY.CD(Ac,
1);this.AJE=this.AY.CD(Ac,5);this.A1t=this.AY.IV(Ac,17);this.U(On.toFixed());if(
this.AJE>0)this.N3.R(A._GetAutoObject(A.Device.Converter).AkC(this.AJE));else this.
N3.R(Ra);var W4=A._GetAutoObject(A.Device.Helper).Zp(6);A._GetAutoObject(A.Device.
Device).Sy(Ac);var AZF=A._GetAutoObject(A.Device.Helper).Bg7(A._GetAutoObject(A.
Device.Device).Br,9,KV,W4,0);this.Jg.A8A(AZF.Get(3));this.Jg.A8C(AZF.Get(2));this.
Jg.A8B(AZF.Get(1));this.Am();}},_Init:function(aArg){C.Bb._Init.call(this,aArg);
A.acg.AJ._Init.call(this.Aja={I:this},0);A.acg.Text._Init.call(this.N3={I:this},
0);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A9={I:this},
0);C.Jg._Init.call(this.Jg={I:this},0);this.__proto__=C.AMm;this.N3.A3(0x12);this.
N3.R(SX);this.N3.L(A.jb.Text);this.AP.H(An2);this.AP.L(A.jb.Bc);this.A9.H(An3);this.
A9.L(A.jb.Bc);this.Jg.H(AXR);this.J(this.Aja,0);this.J(this.N3,0);this.J(this.AP
,0);this.J(this.A9,0);this.J(this.Jg,0);this.N3.S(A.aaL(A.fl.Ah));this.Init(aArg
);},_Done:function(){this.__proto__=C.Bb;this.Aja._Done();this.N3._Done();this.AP.
_Done();this.A9._Done();this.Jg._Done();C.Bb._Done.call(this);},_ReInit:function(
){C.Bb._ReInit.call(this);this.Aja._ReInit();this.N3._ReInit();this.AP._ReInit();
this.A9._ReInit();this.Jg._ReInit();this.N3.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Bb._Mark.call(this,D);if((B=this.Aja)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.N3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jg={Ae1:null,
ColoredCounterAttrSet:null,ABB:0,ABC:0,ABA:0,KM:0,Ai:function(Ae){var B;A.Core.O.
Ai.call(this,Ae);var AJv;var AKN;var AJ1;var Alt=0;if(this.ABA>0){AJv=this.ABA.toFixed(
);Alt+=AJv.length;}else{AJv=AXS;Alt++;}if(this.ABC>0){AKN=this.ABC.toFixed();Alt+=
AKN.length;}else{AKN=AxP;Alt++;}if(this.ABB>0){AJ1=this.ABB.toFixed();Alt+=AJ1.length;
}else{AJ1=AHp;Alt++;}if(Alt<=4)this.ColoredCounterAttrSet.Ag3(A.aaL(A.fl.Ah));else
if(Alt<=5)this.ColoredCounterAttrSet.Ag3(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
Ag3(A.aaL(A.fl.By));this.Ae1.R(((((AXT+AJv)+AXU)+AKN)+AXV)+AJ1);},A8B:function(E
){if(this.ABB===E)return;this.ABB=E;this.Am();},A8C:function(E){if(this.ABC===E)
return;this.ABC=E;this.Am();},A8A:function(E){if(this.ABA===E)return;this.ABA=E;
this.Am();},C9:function(E){if(this.KM===E)return;this.KM=E;this.ColoredCounterAttrSet.
Ag0(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Auc._Init.call(
this.Ae1={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jg;this.H(AHC);this.Ae1.AX(0x3F);this.Ae1.H(AHC);this.
Ae1.R(SX);this.ColoredCounterAttrSet.Bka(A.jb.ET);this.ColoredCounterAttrSet.A8w(
A.jb.H1);this.ColoredCounterAttrSet.A8v(A.jb.FZ);this.ColoredCounterAttrSet.Ag0(
A.jb.Text);this.KM=A.jb.Text;this.J(this.Ae1,0);this.Ae1.A8q(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.Ag3(A.aaL(A.fl.Ah));this.ColoredCounterAttrSet.A8s(
null);},_Done:function(){this.__proto__=A.Core.O;this.Ae1._Done();this.ColoredCounterAttrSet.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Ae1._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
Ag3(A.aaL(A.fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Ae1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.AMl={As2:null
,AbS:null,AbT:null,AbU:null,Jg:null,AP:null,A9:null,D5:null,Ln:null,Acc:null,KN:
null,KO:null,AIG:0,AIF:0,AIE:0,Init:function(aArg){},Bg:function(aSize){C.Bb.Bg.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.AbS.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Acc.H(this.
AbS.M);this.A9.H([this.AbS.M[2]-1,0,this.AbS.M[2]+1,aSize[1]]);this.AbT.H([this.
AbS.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KN.H(this.AbT.M);this.D5.H([this.
AbT.M[2]-1,0,this.AbT.M[2]+1,aSize[1]]);this.AbU.H([this.AbT.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KO.H(this.AbU.M);this.Ln.H([this.AbU.M[2]-1,0,this.AbU.
M[2]+1,aSize[1]]);this.Jg.H([this.AbU.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Bb.Ai.call(this,Ae);this.Jg.C9(this.V.AQ);this.AbS.L(A._GetAutoObject(A.acj.
Assessment).Qd(this.AIE));this.AbT.L(A._GetAutoObject(A.acj.Assessment).Qd(this.
AIF));this.AbU.L(A._GetAutoObject(A.acj.Assessment).Qd(this.AIG));this.Acc.L(A._GetAutoObject(
A.acj.Assessment).Xd(this.AIE));this.KN.L(A._GetAutoObject(A.acj.Assessment).Xd(
this.AIF));this.KO.L(A._GetAutoObject(A.acj.Assessment).Xd(this.AIG));this.Acc.Y(
!this.AIE);this.KN.Y(!this.AIF);this.KO.Y(!this.AIG);this.Jg.A8A(this.As2.Get(3)
);this.Jg.A8C(this.As2.Get(2));this.Jg.A8B(this.As2.Get(1));},Ce:function(Ac){if(
!this.AY)return;this.Hu=Ac;if(!!this.AY){var KV=this.AY.CD(Ac,0);var On=this.AY.
CD(Ac,1);this.U(On.toFixed());A._GetAutoObject(A.Device.Device).Sy(Ac);this.AIE=
A._GetAutoObject(A.Device.Helper).A06(A._GetAutoObject(A.Device.Device).Br,KV,0);
this.AIF=A._GetAutoObject(A.Device.Helper).A06(A._GetAutoObject(A.Device.Device).
Br,KV,-1);this.AIG=A._GetAutoObject(A.Device.Helper).A06(A._GetAutoObject(A.Device.
Device).Br,KV,-2);this.As2=A._GetAutoObject(A.Device.Helper).A5E(A._GetAutoObject(
A.Device.Device).Br,KV,0,0);this.Am();}},_Init:function(aArg){C.Bb._Init.call(this
,aArg);A.acg.AJ._Init.call(this.AbS={I:this},0);A.acg.AJ._Init.call(this.AbT={I:
this},0);A.acg.AJ._Init.call(this.AbU={I:this},0);C.Jg._Init.call(this.Jg={I:this
},0);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A9={I:this
},0);A.acg.AJ._Init.call(this.D5={I:this},0);A.acg.AJ._Init.call(this.Ln={I:this
},0);A.acg.Text._Init.call(this.Acc={I:this},0);A.acg.Text._Init.call(this.KN={I:
this},0);A.acg.Text._Init.call(this.KO={I:this},0);this.__proto__=C.AMl;this.AP.
L(A.jb.Bc);this.A9.L(A.jb.Bc);this.D5.L(A.jb.Bc);this.Ln.L(A.jb.Bc);this.Acc.R(An5
);this.KN.R(An5);this.KO.R(An5);this.J(this.AbS,0);this.J(this.AbT,0);this.J(this.
AbU,0);this.J(this.Jg,0);this.J(this.AP,0);this.J(this.A9,0);this.J(this.D5,0);this.
J(this.Ln,0);this.J(this.Acc,0);this.J(this.KN,0);this.J(this.KO,0);this.Acc.S(A.
aaL(A.fl.Ah));this.KN.S(A.aaL(A.fl.Ah));this.KO.S(A.aaL(A.fl.Ah));this.As2=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Bb;this.AbS._Done();this.AbT._Done();this.AbU._Done();this.Jg._Done();this.AP.
_Done();this.A9._Done();this.D5._Done();this.Ln._Done();this.Acc._Done();this.KN.
_Done();this.KO._Done();C.Bb._Done.call(this);},_ReInit:function(){C.Bb._ReInit.
call(this);this.AbS._ReInit();this.AbT._ReInit();this.AbU._ReInit();this.Jg._ReInit(
);this.AP._ReInit();this.A9._ReInit();this.D5._ReInit();this.Ln._ReInit();this.Acc.
_ReInit();this.KN._ReInit();this.KO._ReInit();this.Acc.S(A.aaL(A.fl.Ah));this.KN.
S(A.aaL(A.fl.Ah));this.KO.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bb._Mark.
call(this,D);if((B=this.As2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbS).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ln)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.Amx={HZ:null,AfF:false,Bg:function(aSize){var
B;this.HZ.H([(aSize[0]-((B=this.HZ.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.HZ.M[0]-10,40]);C.Tv.Bg.call(this,aSize);},Ai:function(Ae){C.Tv.Ai.call(
this,Ae);if(this.AfF)this.HZ.Cv(1);else this.HZ.Cv(0);},J0:function(G){if(this.AfF
)C.Tv.J0.call(this,G);},JV:function(G){if(this.AfF)C.Tv.JV.call(this,G);},Tg:function(
AM){C.Tv.Tg.call(this,AM);if(!!AM){this.H(A.abI(this.M,80));this.AfF=true;this.Y_(
true);}else{this.H(A.abI(this.M,40));this.AfF=false;this.Y_(false);}},_Init:function(
aArg){C.Tv._Init.call(this,aArg);A.acg.An._Init.call(this.HZ={I:this},0);this.__proto__=
C.Amx;this.V.A3(0x11);this.HZ.H(AG0);this.HZ.Cv(0);this.J(this.HZ,0);this.V.CB(A.
aaL(A.fl.By));this.HZ.Ay(A.aaL(A.ach.Aqf));},_Done:function(){this.__proto__=C.Tv;
this.HZ._Done();C.Tv._Done.call(this);},_ReInit:function(){C.Tv._ReInit.call(this
);this.HZ._ReInit();this.V.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Tv._Mark.
call(this,D);if((B=this.HZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AFj={_Init:function(aArg){C.AwD._Init.call(this,aArg);this.__proto__=C.AFj;}
,_className:"Application::OptionsOverlaySeparator"};C.Akj={DD:A.jV,Bv:true,_Init:
function(aArg){C.AwD._Init.call(this,aArg);this.__proto__=C.Akj;},_className:"Application::OptionsOverlayNode"
};C.AeI={AN:null,_Init:function(aArg){C.Akj._Init.call(this,aArg);this.__proto__=
C.AeI;},_Mark:function(D){var B;C.Akj._Mark.call(this,D);if((B=this.AN)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.AMQ={Ai:function(Ae){C.ON.Ai.call(this,Ae);var FG=A.jb.CG;var GJ=A.jb.Text;if(
this.Hb){FG=A.jb.Text;GJ=A.jb.Bi;}this.Background.L(FG);this.V.L(GJ);},_Init:function(
aArg){C.ON._Init.call(this,aArg);this.__proto__=C.AMQ;},_className:"Application::DarkThemeTextItem"
};C.ON={Background:null,CA:null,V:null,ApZ:0,Hb:false,Init:function(aArg){},Bg:function(
aSize){C.G_.Bg.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.CA.H(A.abK(this.CA.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.G_.Ai.call(this,Ae);this.CA.L(this.ApZ);},U:function(E){if(this.DD===E)return;
this.DD=E;this.V.R(E);},Bf:function(E){if(this.Hb===E)return;this.Hb=E;this.Am();
},Aq$:function(E){if(this.ApZ===E)return;this.ApZ=E;this.Am();},_Init:function(aArg
){C.G_._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);A.acg.
CA._Init.call(this.CA={I:this},0);C.CP._Init.call(this.V={I:this},0);this.__proto__=
C.ON;this.H(BD);this.Background.H(AHD);this.CA.H(BD);this.CA.NV(2);this.CA.L(A.jb.
Ace);this.V.H(AXW);this.ApZ=A.jb.Ace;this.J(this.Background,0);this.J(this.CA,0);
this.J(this.V,0);this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.V.CB(A.
aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.G_;this.Background.
_Done();this.CA._Done();this.V._Done();C.G_._Done.call(this);},_ReInit:function(
){C.G_._ReInit.call(this);this.Background._ReInit();this.CA._ReInit();this.V._ReInit(
);this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.V.CB(A.aaL(A.fl.By));}
,_Mark:function(D){var B;C.G_._Mark.call(this,D);if((B=this.Background)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.AOW={Et:null
,IE:null,_Init:function(aArg){C.Eu._Init.call(this,aArg);A.acg.Text._Init.call(this.
Et={I:this},0);A.acg.Text._Init.call(this.IE={I:this},0);this.__proto__=C.AOW;this.
H(OU);this.Background.H(OU);this.Et.H(AHE);this.Et.R(A.aaR(A.acf.GD));this.Et.A3(
0x11);this.Et.L(A.jb.Text);this.IE.AX(0x3F);this.IE.H(AHF);this.IE.HH(5);this.IE.
A3(0x14);this.IE.R(A.aaR(A.acf.AF2));this.IE.L(A.jb.Text);this.J(this.Et,0);this.
J(this.IE,0);this.Et.S(A.aaL(A.fl.Ah));this.IE.S(A.aaL(A.fl.Ah));},_Done:function(
){this.__proto__=C.Eu;this.Et._Done();this.IE._Done();C.Eu._Done.call(this);},_ReInit:
function(){C.Eu._ReInit.call(this);this.Et._ReInit();this.IE._ReInit();this.Et.R(
A.aaR(A.acf.GD));this.IE.R(A.aaR(A.acf.AF2));this.Et.S(A.aaL(A.fl.Ah));this.IE.S(
A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.Et).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.CZ={R$:null,Sa:null,Aea:null,AgD:null,Qz:null
,KM:0,LastTemperature:0,Ap5:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
R$.Ay(A.aaL(A.ach.Au4));this.Sa.Ay(A.aaL(A.ach.Au4));}break;case 2:{this.R$.Ay(A.
aaL(A.ach.Au7));this.Sa.Ay(A.aaL(A.ach.Au7));}break;default:{this.R$.Ay(A.aaL(A.
ach.Ad8));this.Sa.Ay(A.aaL(A.ach.Ad8));}}this.R$.L(A._GetAutoObject(A.acj.Assessment
).Qd(this.Ap5));var Apm;if(this.IsWatch)Apm=A.aaL(A.ach.APU);else if(this.IsFever
){Apm=A.aaL(A.ach.APT);switch(A._GetAutoObject(A.Device.Converter).Ai1(this.LastTemperature
,this.AnimalType)){case 3:this.Qz.L(A.jb.FZ);break;case 2:this.Qz.L(A.jb.H1);break;
case 1:this.Qz.L(A.jb.ET);break;case 0:this.Qz.L(A.jb.Ae6);break;default:;}}else
if(this.IsAlarm){Apm=A.aaL(A.ach.APS);if(!this.Ap5||(this.Ap5===5))this.Qz.L(A.jb.
FZ);else this.Qz.L(0xFF000000);}else Apm=null;this.Aea.Ay(Apm);this.AgD.Ay(Apm);
this.Qz.Ay(Apm);if(A._GetAutoObject(A.acj.Assessment).Qd(this.Ap5)===A.jb.ET)this.
Sa.L(this.KM);},DT:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
Am();},AEf:function(E){if(this.Ap5===E)return;this.Ap5=E;this.Am();},C9:function(
E){if(this.KM===E)return;this.KM=E;this.Am();},AeC:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.Am();},Ua:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.Am();},Aez:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.Am();},AeE:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.Am();},Hd:function(){this.DT(0);this.AEf(0);this.Aez(false);this.Ua(false
);this.AeC(false);this.AeE(0);this.C9(A.jb.Text);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.acg.An._Init.call(this.R$={I:this},0);A.acg.An._Init.call(
this.Sa={I:this},0);A.acg.An._Init.call(this.Aea={I:this},0);A.acg.An._Init.call(
this.AgD={I:this},0);A.acg.An._Init.call(this.Qz={I:this},0);this.__proto__=C.CZ;
this.H(AkR);this.R$.AX(0x3F);this.R$.H(AkR);this.R$.L(A.jb.CG);this.R$.A3(0x12);
this.R$.Cv(0);this.Sa.AX(0x3F);this.Sa.H(AkR);this.Sa.L(0xFF000000);this.Sa.A3(0x12
);this.Sa.Cv(1);this.Aea.AX(0x3F);this.Aea.H(AkR);this.Aea.L(0xFF000000);this.Aea.
Cv(0);this.AgD.AX(0x3F);this.AgD.H(AkR);this.AgD.Cv(1);this.Qz.AX(0x3F);this.Qz.
H(AkR);this.Qz.L(A.jb.C1);this.Qz.Cv(2);this.KM=A.jb.Text;this.J(this.R$,0);this.
J(this.Sa,0);this.J(this.Aea,0);this.J(this.AgD,0);this.J(this.Qz,0);this.R$.Ay(
A.aaL(A.ach.Ad8));this.Sa.Ay(A.aaL(A.ach.Ad8));},_Done:function(){this.__proto__=
A.Core.O;this.R$._Done();this.Sa._Done();this.Aea._Done();this.AgD._Done();this.
Qz._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.R$._ReInit();this.Sa._ReInit();this.Aea._ReInit();this.AgD._ReInit();
this.Qz._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aea)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Qz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AMh={Ce:function(Ac){C.Aje.Ce.call(this,Ac);if(!!this.AY){var BxZ=this.AY.HW(
Ac,12);var Bwi=this.AY.R7(Ac,15);this.AaR.R(A._GetAutoObject(A.Device.Helper).ML(
Bwi,A._GetAutoObject(A.Device.Helper).DF()).toFixed());this.Sb.Y(BxZ);this.Am();
}},_Init:function(aArg){C.Aje._Init.call(this,aArg);this.__proto__=C.AMh;},_className:
"Application::CalfListAlarmItem"};C.ACC={DQ:null,Ml:null,_Init:function(aArg){C.
TL._Init.call(this,aArg);A.acg.Text._Init.call(this.DQ={I:this},0);A.acg.An._Init.
call(this.Ml={I:this},0);this.__proto__=C.ACC;this.DQ.H(An4);this.DQ.KL(true);this.
DQ.R(A.aaR(A.acf.A4R));this.DQ.L(A.jb.Text);this.Ml.H(AXX);this.Ml.I0(false);this.
Ml.L(A.jb.Text);this.Ml.A3(0x12);this.J(this.DQ,-2);this.J(this.Ml,0);this.DQ.S(
A.aaL(A.fl.Ak));this.Ml.Ay(A.aaL(A.ach.AC1));},_Done:function(){this.__proto__=C.
TL;this.DQ._Done();this.Ml._Done();C.TL._Done.call(this);},_ReInit:function(){C.
TL._ReInit.call(this);this.DQ._ReInit();this.Ml._ReInit();this.DQ.R(A.aaR(A.acf.
A4R));this.DQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TL._Mark.call(this,D
);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ml)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.J6={Background:null,CA:
null,AB4:0,ABh:0,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Background.L(this.
AB4);this.CA.L(this.ABh);},Av3:function(E){if(this.AB4===E)return;this.AB4=E;this.
Am();},AD9:function(E){if(this.ABh===E)return;this.ABh=E;this.Am();},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.An._Init.call(this.Background={I:this
},0);A.acg.An._Init.call(this.CA={I:this},0);this.__proto__=C.J6;this.H(An6);this.
Background.AX(0x3C);this.Background.H(An6);this.Background.Cv(1);this.CA.AX(0x3C
);this.CA.H(An6);this.AB4=A.jb.ET;this.ABh=A.jb.Text;this.J(this.Background,0);this.
J(this.CA,0);this.Background.Ay(A.aaL(A.ach.J6));this.CA.Ay(A.aaL(A.ach.J6));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.CA._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background.
_ReInit();this.CA._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CA)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.Ap6={Pf:null,A6h:
false,Bg:function(aSize){C.Mh.Bg.call(this,aSize);this.V.H([].concat(this.Pf.M[2
]-this.V.Text.I1,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mh.Ai.call(this,Ae);this.
Pf.L(this.V.AQ);},AEu:function(E){if(this.A6h===E)return;this.A6h=E;if(E)this.Pf.
R(AXY);else this.Pf.R(AHG);},_Init:function(aArg){C.Mh._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pf={I:this},0);this.__proto__=C.Ap6;this.Pf.AX(0x34);this.Pf.
H(ZK);this.Pf.R(AHG);this.J(this.Pf,0);this.Pf.S(A.aaL(A.fl.ANN));},_Done:function(
){this.__proto__=C.Mh;this.Pf._Done();C.Mh._Done.call(this);},_ReInit:function(){
C.Mh._ReInit.call(this);this.Pf._ReInit();},_Mark:function(D){var B;C.Mh._Mark.call(
this,D);if((B=this.Pf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"
};C.AOc={Eq:function(G){C.J$.Eq.call(this,G);this.Dc.Ay(A._GetAutoObject(A.Device.
Converter).Af$(4));},_Init:function(aArg){C.J$._Init.call(this,aArg);this.__proto__=
C.AOc;},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={
AutoRegistrationModeToString:null,Dp:function(){return 3;},C5:function(aIndex){if((
aIndex<0)||(aIndex>=3))return-1;return aIndex;},F$:function(aIndex){if((aIndex<0
)||(aIndex>=3))return A.jV;return this.AutoRegistrationModeToString.BP(aIndex);}
,DK:function(A2){return A2;},Hl:function(){return 2;},_Init:function(aArg){C.AC.
_Init.call(this,aArg);A.Device.AutoRegistrationModeToString._Init.call(this.AutoRegistrationModeToString={
I:this},0);this.__proto__=C.AutoRegistrationMode;},_Done:function(){this.__proto__=
C.AC;this.AutoRegistrationModeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.AutoRegistrationModeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"};C.AOX={
Gc:null,Lg:null,Yv:null,Init:function(aArg){this.Lg.R(A._GetAutoObject(A.acj.Temperature
).Alh());},_Init:function(aArg){C.Eu._Init.call(this,aArg);A.acg.Text._Init.call(
this.Gc={I:this},0);A.acg.Text._Init.call(this.Lg={I:this},0);A.acg.Text._Init.call(
this.Yv={I:this},0);this.__proto__=C.AOX;this.Background.L(A.jb.Text);this.Gc.H(
AHH);this.Gc.A3(0x11);this.Gc.R(A.aaR(A.acf.Date));this.Gc.L(A.jb.Bi);this.Lg.H(
AXZ);this.Lg.A3(0x12);this.Lg.L(A.jb.Bi);this.Yv.H(AX0);this.Yv.A3(0x12);this.Yv.
R(A.aaR(A.acf.Bt));this.Yv.L(A.jb.Bi);this.J(this.Gc,0);this.J(this.Lg,0);this.J(
this.Yv,0);this.Gc.S(A.aaL(A.fl.Ah));this.Lg.S(A.aaL(A.fl.Ah));this.Yv.S(A.aaL(A.
fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.Eu;this.Gc._Done();this.
Lg._Done();this.Yv._Done();C.Eu._Done.call(this);},_ReInit:function(){C.Eu._ReInit.
call(this);this.Gc._ReInit();this.Lg._ReInit();this.Yv._ReInit();this.Gc.R(A.aaR(
A.acf.Date));this.Yv.R(A.aaR(A.acf.Bt));this.Gc.S(A.aaL(A.fl.Ah));this.Lg.S(A.aaL(
A.fl.Ah));this.Yv.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Eu._Mark.call(this
,D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineTemperatures"
};C.Tp={La:null,Ajw:false,Init:function(aArg){var B;A.zX([this,this.Bae],[B=A._GetAutoObject(
A.Device.Device),B.ARv,B.AY3],0);this.AFV(this);A.pe([this,this.AH9],this);},Dv:
function(G){var DW=(A.Core.BK.isPrototypeOf(G)?G:null);switch(DW.CL){case 6:this.
Og(this);break;case 7:this.MT(this);break;default:DW.NC=true;}},Cx:function(G){var
B;if(!!this.La)this.La.Cx(this);C.AB.Cx.call(this,G);},EV:function(G){var B;if(!
!this.La)this.La.EV(this);C.AB.EV.call(this,G);},AmZ:function(G){A._GetAutoObject(
C.AW).Fl();},AFV:function(G){var B;if(!!this.La){this.La.EV(this);this.HI(this.La
);}if(this.Ajw)switch(A._GetAutoObject(A.Device.Device).D2){case 0:this.La=A._NewObject(
C.ALB,0);break;case 1:this.La=A._NewObject(C.ALC,0);break;case 3:this.La=A._NewObject(
C.ALA,0);break;case 2:this.La=A._NewObject(C.ALD,0);break;default:throw new Error(
AHI);}else switch(A._GetAutoObject(A.Device.Device).D2){case 0:this.La=A._NewObject(
C.ALE,0);break;case 1:this.La=A._NewObject(C.ALN,0);break;case 3:this.La=A._NewObject(
C.ALH,0);break;case 2:this.La=A._NewObject(C.ALS,0);break;default:throw new Error(
AHI);}this.HJ(this);this.J(this.La,0);this.La.H(E4);this.La.Y7([this,this.AZr]);
this.La.Cx(this);this.A8(this.La);},Bae:function(s){this.AFV(s);},ASO:function(G
){A._GetAutoObject(A.Device.Device).Cd(0);A._GetAutoObject(A.Device.Device).Aeu(
0);},ASQ:function(G){A._GetAutoObject(A.Device.Device).Cd(0);A._GetAutoObject(A.
Device.Device).Aeu(1);},ASP:function(G){A._GetAutoObject(A.Device.Device).Cd(0);
A._GetAutoObject(A.Device.Device).Aeu(3);},ASR:function(G){A._GetAutoObject(A.Device.
Device).Cd(0);A._GetAutoObject(A.Device.Device).Aeu(2);},HJ:function(G){this.N.CT(
A.aaL(A.ach.EU));this.N.Ho(A.jV);this.N.Cw=[this,this.AmZ];this.N.AEn(A.aaL(A.fl.
Ak));},AH9:function(s){this.HJ(s);},BkY:function(E){if(this.Ajw===E)return;this.
Ajw=E;A.pe([this,this.Bae],this);},A9x:function(G){this.BkY(!this.Ajw);},Bl7:function(
G){A._GetAutoObject(A.Device.Device).Cd(0);A._GetAutoObject(A.Device.Device).A5(
31,true,A.jV,0,null);},MT:function(G){},BEp:function(s){this.MT(s);},Og:function(
G){},BEo:function(s){this.Og(s);},Bdr:function(G){var FF=A._GetAutoObject(A.Device.
Device).D2;FF=FF+1;if(FF>=4)FF=0;A._GetAutoObject(A.Device.Device).Aeu(FF);},ByR:
function(G){var FF=A._GetAutoObject(A.Device.Device).D2;FF=FF-1;if(FF<0)FF=3;A._GetAutoObject(
A.Device.Device).Aeu(FF);},Aio:function(G){},AZr:function(s){this.Aio(s);},_Init:
function(aArg){C.AB._Init.call(this,aArg);this.__proto__=C.Tp;this.Background.H(
Ca);this.N.Y(true);this.N.OG(true);this.N.OH(true);this.Dl(C.AOL);this.Init(aArg
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.La)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"};C.D2={AN:null
,AttrSet:null,Dg:null,Cx:function(G){},AHY:function(s){this.Cx(s);},EV:function(
G){A._GetAutoObject(A.Device.Device).Br.Bh(null);},Ax1:function(s){this.EV(s);},
Y7:function(E){if(A.aa0(this.AN,E))return;this.AN=E;this.Dg.BL=E;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(this.AttrSet={
I:this},0);A.Core.BK._Init.call(this.Dg={I:this},0);this.__proto__=C.D2;this.H(SY
);this.AttrSet.A8w(A.jb.FZ);this.AttrSet.A8v(A.jb.H1);this.AttrSet.Ag0(A.jb.Text
);this.Dg.Filter=1;this.AttrSet.Ag3(A.aaL(A.fl.Ak));this.AttrSet.A8s(null);},_Done:
function(){this.__proto__=A.Core.O;this.AttrSet._Done();this.Dg._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AttrSet._ReInit(
);this.Dg._ReInit();this.AttrSet.Ag3(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.
Core.O._Mark.call(this,D);if((B=this.AN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.ALE={RD:null,
Aaw:null,To:null,Tn:null,RH:null,Qr:null,RI:null,RF:null,RG:null,RE:null,CU:function(
){var B;this.RD.Ce(this);this.Aaw.Ce(this);this.To.Ce(this);this.Tn.Ce(this);this.
RH.Ce(this);this.Qr.Ce(this);this.RI.Ce(this);this.RF.Ce(this);this.RG.Ce(this);
this.RE.Ce(this);},Gw:function(G){C.RJ.Gw.call(this,G);switch(A._GetAutoObject(A.
Device.Helper).W.AnimalType){case 0:case 2:{this.RD.Y(true);this.Aaw.Y(false);this.
RF.Y(false);this.RG.Y(false);this.RE.Y(false);this.RH.Y(true);this.Qr.Y(true);this.
RI.Y(true);}break;case 1:{this.RD.Y(false);this.Aaw.Y(true);this.RF.Y(true);this.
RG.Y(true);this.RE.Y(true);this.RH.Y(false);this.Qr.Y(false);this.RI.Y(false);}break;
default:A.ab5("%s%e",Aso,A._GetAutoObject(A.Device.Helper).W.AnimalType);}A.pe([
this,this.MM],this);},_Init:function(aArg){C.RJ._Init.call(this,aArg);C.RD._Init.
call(this.RD={I:this},0);C.ALz._Init.call(this.Aaw={I:this},0);C.To._Init.call(this.
To={I:this},0);C.Tn._Init.call(this.Tn={I:this},0);C.RH._Init.call(this.RH={I:this
},0);C.Qr._Init.call(this.Qr={I:this},0);C.RI._Init.call(this.RI={I:this},0);C.RF.
_Init.call(this.RF={I:this},0);C.RG._Init.call(this.RG={I:this},0);C.RE._Init.call(
this.RE={I:this},0);this.__proto__=C.ALE;this.RD.H(BD);this.RD.Aj(true);this.RD.
Bf(false);this.Aaw.H(JR);this.Aaw.Aj(true);this.Aaw.Bf(false);this.To.H(P0);this.
To.Aj(true);this.To.Bf(true);this.Tn.H(ZQ);this.Tn.Aj(true);this.Tn.Bf(false);this.
RH.H(AkP);this.RH.Aj(true);this.RH.Bf(true);this.Qr.H(AnZ);this.Qr.Aj(true);this.
Qr.Bf(false);this.RI.H(Asp);this.RI.Aj(true);this.RI.Bf(true);this.RF.H(WU);this.
RF.Aj(true);this.RF.Bf(true);this.RG.H(AX1);this.RG.Aj(true);this.RG.Bf(false);this.
RE.H(AHJ);this.RE.Aj(true);this.RE.Bf(true);this.J(this.RD,0);this.J(this.Aaw,0);
this.J(this.To,0);this.J(this.Tn,0);this.J(this.RH,0);this.J(this.Qr,0);this.J(this.
RI,0);this.J(this.RF,0);this.J(this.RG,0);this.J(this.RE,0);},_Done:function(){this.
__proto__=C.RJ;this.RD._Done();this.Aaw._Done();this.To._Done();this.Tn._Done();
this.RH._Done();this.Qr._Done();this.RI._Done();this.RF._Done();this.RG._Done();
this.RE._Done();C.RJ._Done.call(this);},_ReInit:function(){C.RJ._ReInit.call(this
);this.RD._ReInit();this.Aaw._ReInit();this.To._ReInit();this.Tn._ReInit();this.
RH._ReInit();this.Qr._ReInit();this.RI._ReInit();this.RF._ReInit();this.RG._ReInit(
);this.RE._ReInit();this.CU();},_Mark:function(D){var B;C.RJ._Mark.call(this,D);
if((B=this.RD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aaw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.To)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tn)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qr).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RI)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.RF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfos"
};C.ALS={Aku:function(LW){if(!LW)return;var Fj=A._NewObject(A.Device.Filter,0);var
HQ=A._NewObject(A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fj.CY(HQ);var AcM=A._NewObject(A.Device.Int32FilterCriterion
,0);AcM.Initialize(8,2,0,true);Fj.CY(AcM);LW.Bh(Fj);},ADb:function(){if(!A._GetAutoObject(
A.Device.Device).Br)return false;var O8=A._GetAutoObject(A.Device.Device).Br.Cb(
);if(O8<2)return false;var BAd=A._GetAutoObject(A.Device.Device).Br.Hz(0,6);var BAe=
A._GetAutoObject(A.Device.Device).Br.Hz(O8-1,6);var A0W=A._NewObject(A.Core.Bt,0
);A0W.Initialize(BAd);var A2W=A._NewObject(A.Core.Bt,0);A2W.Initialize(BAe);if((
A0W.AbB()!==A2W.AbB())||(A0W.Year!==A2W.Year))return true;else return false;},_Init:
function(aArg){C.Aay._Init.call(this,aArg);this.__proto__=C.ALS;this.ASm(C.AGu);
this.ASn(C.ACG);this.ASd(C.Qr);this.Are(A.aaR(A.acf.AUG));this.Dt(A.aaR(A.acf.Aj0
));},_ReInit:function(){C.Aay._ReInit.call(this);this.Are(A.aaR(A.acf.AUG));this.
Dt(A.aaR(A.acf.Aj0));},_className:"Application::AnimalWeights"};C.ALN={Aku:function(
LW){if(!LW)return;var Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(A.Device.
Int32FilterCriterion,0);HQ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id
,true);Fj.CY(HQ);var AAz=A._NewObject(A.Device.Int32FilterCriterion,0);AAz.Initialize(
7,2,0,true);Fj.CY(AAz);LW.Bh(Fj);},ADb:function(){return A._GetAutoObject(A.Device.
Device).Br.Cb()>0;},_Init:function(aArg){C.Aay._Init.call(this,aArg);this.__proto__=
C.ALN;this.ASm(C.AT5);this.ASn(C.AOX);this.ASd(C.To);this.Are(A.aaR(A.acf.A6E));
this.Dt(A.aaR(A.acf.AqS));},_ReInit:function(){C.Aay._ReInit.call(this);this.Are(
A.aaR(A.acf.A6E));this.Dt(A.aaR(A.acf.AqS));},_className:"Application::AnimalTemperatures"
};C.ATa={Vh:null,Vi:null,XG:null,Agf:null,Ko:null,AP:null,A9:null,D5:null,Ln:null
,Anr:null,KN:null,KO:null,Zm:null,Zn:null,Init:function(aArg){},Bg:function(aSize
){C.Bb.Bg.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Ko.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A9.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
Vh.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.D5.H([this.
Vh.M[2]-1,0,this.Vh.M[2]+1,aSize[1]]);this.Vi.H([this.Vh.M[2],0,this.Vh.M[2]+22,
aSize[1]]);this.Ln.H([this.Vi.M[2]-1,0,this.Vi.M[2]+1,aSize[1]]);this.XG.H([this.
Vi.M[2],0,this.Vi.M[2]+22,aSize[1]]);this.Anr.H([this.XG.M[2]-1,0,this.XG.M[2]+1
,aSize[1]]);this.Agf.H([this.XG.M[2],0,aSize[0],aSize[1]]);this.KN.H(this.Vh.M);
this.KO.H(this.Vi.M);this.Zm.H(this.XG.M);this.Zn.H(this.Agf.M);},Ai:function(Ae
){C.Bb.Ai.call(this,Ae);this.Ko.L(this.V.AQ);},Ce:function(Ac){if(!this.AY)return;
this.Hu=Ac;if(!!this.AY){var Ak_=this.AY.Hz(Ac,6);var A0c=this.AY.IV(Ac,3);var A0S=
this.AY.IV(Ac,2);var A0R=this.AY.IV(Ac,5);var A2K=this.AY.IV(Ac,4);this.U(A._GetAutoObject(
A.acj.KD).AB$(Ak_));this.Ko.R(A._GetAutoObject(A.acj.KD).A5y(Ak_));this.Vh.L(A._GetAutoObject(
A.acj.Assessment).Qd(A0c));this.Vi.L(A._GetAutoObject(A.acj.Assessment).Qd(A0S));
this.XG.L(A._GetAutoObject(A.acj.Assessment).Qd(A0R));this.Agf.L(A._GetAutoObject(
A.acj.Assessment).Qd(A2K));this.KN.L(A._GetAutoObject(A.acj.Assessment).Xd(A0c));
this.KO.L(A._GetAutoObject(A.acj.Assessment).Xd(A0S));this.Zm.L(A._GetAutoObject(
A.acj.Assessment).Xd(A0R));this.Zn.L(A._GetAutoObject(A.acj.Assessment).Xd(A2K));
this.KN.Y(A0c===5);this.KO.Y(A0S===5);this.Zm.Y(A0R===5);this.Zn.Y(A2K===5);this.
Am();}},_Init:function(aArg){C.Bb._Init.call(this,aArg);A.acg.AJ._Init.call(this.
Vh={I:this},0);A.acg.AJ._Init.call(this.Vi={I:this},0);A.acg.AJ._Init.call(this.
XG={I:this},0);A.acg.AJ._Init.call(this.Agf={I:this},0);A.acg.Text._Init.call(this.
Ko={I:this},0);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.
A9={I:this},0);A.acg.AJ._Init.call(this.D5={I:this},0);A.acg.AJ._Init.call(this.
Ln={I:this},0);A.acg.AJ._Init.call(this.Anr={I:this},0);A.acg.Text._Init.call(this.
KN={I:this},0);A.acg.Text._Init.call(this.KO={I:this},0);A.acg.Text._Init.call(this.
Zm={I:this},0);A.acg.Text._Init.call(this.Zn={I:this},0);this.__proto__=C.ATa;this.
V.H(OV);this.Vh.H(AX2);this.Vi.H(AHK);this.XG.H(AX3);this.Agf.H(AX4);this.Ko.R(SX
);this.Ko.L(A.jb.Text);this.AP.L(A.jb.Bc);this.A9.L(A.jb.Bc);this.D5.L(A.jb.Bc);
this.Ln.L(A.jb.Bc);this.Anr.L(A.jb.Bc);this.KN.H(AX5);this.KN.R(Ra);this.KO.H(AX6
);this.KO.R(Ra);this.Zm.H(AX7);this.Zm.R(Ra);this.Zn.H(AX8);this.Zn.R(Ra);this.J(
this.Vh,0);this.J(this.Vi,0);this.J(this.XG,0);this.J(this.Agf,0);this.J(this.Ko
,0);this.J(this.AP,0);this.J(this.A9,0);this.J(this.D5,0);this.J(this.Ln,0);this.
J(this.Anr,0);this.J(this.KN,0);this.J(this.KO,0);this.J(this.Zm,0);this.J(this.
Zn,0);this.Ko.S(A.aaL(A.fl.Ah));this.KN.S(A.aaL(A.fl.Ah));this.KO.S(A.aaL(A.fl.Ah
));this.Zm.S(A.aaL(A.fl.Ah));this.Zn.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(
){this.__proto__=C.Bb;this.Vh._Done();this.Vi._Done();this.XG._Done();this.Agf._Done(
);this.Ko._Done();this.AP._Done();this.A9._Done();this.D5._Done();this.Ln._Done(
);this.Anr._Done();this.KN._Done();this.KO._Done();this.Zm._Done();this.Zn._Done(
);C.Bb._Done.call(this);},_ReInit:function(){C.Bb._ReInit.call(this);this.Vh._ReInit(
);this.Vi._ReInit();this.XG._ReInit();this.Agf._ReInit();this.Ko._ReInit();this.
AP._ReInit();this.A9._ReInit();this.D5._ReInit();this.Ln._ReInit();this.Anr._ReInit(
);this.KN._ReInit();this.KO._ReInit();this.Zm._ReInit();this.Zn._ReInit();this.Ko.
S(A.aaL(A.fl.Ah));this.KN.S(A.aaL(A.fl.Ah));this.KO.S(A.aaL(A.fl.Ah));this.Zm.S(
A.aaL(A.fl.Ah));this.Zn.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bb._Mark.call(
this,D);if((B=this.Vh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vi)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ko)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ln)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Anr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.AOV={Gc:null,YB:null,Yx:null,Yy:null,Yz:null,YA:
null,_Init:function(aArg){C.Eu._Init.call(this,aArg);A.acg.Text._Init.call(this.
Gc={I:this},0);A.acg.Text._Init.call(this.YB={I:this},0);A.acg.Text._Init.call(this.
Yx={I:this},0);A.acg.Text._Init.call(this.Yy={I:this},0);A.acg.Text._Init.call(this.
Yz={I:this},0);A.acg.Text._Init.call(this.YA={I:this},0);this.__proto__=C.AOV;this.
Background.L(A.jb.Text);this.Gc.H(AHH);this.Gc.A3(0x11);this.Gc.R(A.aaR(A.acf.Date
));this.Gc.L(A.jb.Bi);this.YB.H(AHz);this.YB.A3(0x12);this.YB.R(A.aaR(A.acf.Bt));
this.YB.L(A.jb.Bi);this.Yx.H(AX9);this.Yx.A3(0x12);this.Yx.R(A.aaR(A.acf.ATc));this.
Yx.L(A.jb.Bi);this.Yy.H(AX_);this.Yy.A3(0x12);this.Yy.R(A.aaR(A.acf.ATd));this.Yy.
L(A.jb.Bi);this.Yz.H(AX$);this.Yz.A3(0x12);this.Yz.R(A.aaR(A.acf.ANJ));this.Yz.L(
A.jb.Bi);this.YA.H(AYa);this.YA.A3(0x12);this.YA.R(A.aaR(A.acf.AMH));this.YA.L(A.
jb.Bi);this.J(this.Gc,0);this.J(this.YB,0);this.J(this.Yx,0);this.J(this.Yy,0);this.
J(this.Yz,0);this.J(this.YA,0);this.Gc.S(A.aaL(A.fl.Ah));this.YB.S(A.aaL(A.fl.Ah
));this.Yx.S(A.aaL(A.fl.Ah));this.Yy.S(A.aaL(A.fl.Ah));this.Yz.S(A.aaL(A.fl.Ah));
this.YA.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Eu;this.Gc._Done();
this.YB._Done();this.Yx._Done();this.Yy._Done();this.Yz._Done();this.YA._Done();
C.Eu._Done.call(this);},_ReInit:function(){C.Eu._ReInit.call(this);this.Gc._ReInit(
);this.YB._ReInit();this.Yx._ReInit();this.Yy._ReInit();this.Yz._ReInit();this.YA.
_ReInit();this.Gc.R(A.aaR(A.acf.Date));this.YB.R(A.aaR(A.acf.Bt));this.Yx.R(A.aaR(
A.acf.ATc));this.Yy.R(A.aaR(A.acf.ATd));this.Yz.R(A.aaR(A.acf.ANJ));this.YA.R(A.
aaR(A.acf.AMH));this.Gc.S(A.aaL(A.fl.Ah));this.YB.S(A.aaL(A.fl.Ah));this.Yx.S(A.
aaL(A.fl.Ah));this.Yy.S(A.aaL(A.fl.Ah));this.Yz.S(A.aaL(A.fl.Ah));this.YA.S(A.aaL(
A.fl.Ah));},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.Gc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Yx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.ALH={Aku:function(LW){if(!LW)return;
var Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(A.Device.Int32FilterCriterion
,0);HQ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fj.CY(HQ);var
AAg=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAg.Initialize(3,5,0,true
);Fj.CY(AAg);LW.Bh(Fj);},ADb:function(){if(!A._GetAutoObject(A.Device.Device).Br
)return false;return A._GetAutoObject(A.Device.Device).Br.Cb()>0;},_Init:function(
aArg){C.Aay._Init.call(this,aArg);this.__proto__=C.ALH;this.ASm(C.ATa);this.ASn(
C.AOV);this.ASd(C.Tn);this.Are(A.aaR(A.acf.AwI));this.Dt(A.aaR(A.acf.AmY));},_ReInit:
function(){C.Aay._ReInit.call(this);this.Are(A.aaR(A.acf.AwI));this.Dt(A.aaR(A.acf.
AmY));},_className:"Application::AnimalRatings"};C.Iv={B4:null,Z:null,V:null,Uf:
5,U:function(E){C.IS.U.call(this,E);this.V.R(E);},C9:function(E){C.IS.C9.call(this
,E);this.V.L(E);},S:function(E){if(this.B4===E)return;this.B4=E;this.V.S(this.B4
);},Aug:function(G){var B;var Nt=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Nt)return;
if(((B=Nt.Db(0x1))[2]-B[0])>((B=Nt.M)[2]-B[0]))this.S(A.aaL(A.fl.Ie));},Ke:function(
E){if(this.Uf===E)return;this.Uf=E;this.Z.H([].concat(E,this.Z.M.slice(1,4)));},
AAa:function(G){A.pe([this,this.Aug],this);},_Init:function(aArg){C.IS._Init.call(
this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.Iv;this.Z.AX(0x3F);this.Z.H(AHL);this.Z.A9e(5);this.
Z.Kd(3);this.V.AX(0x34);this.V.H(ZU);this.V.I0(true);this.V.A3(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Z,0);this.J(this.V,0);this.Z.Ej=[this,this.
AAa];this.V.S(A.aaL(A.fl.J_));},_Done:function(){this.__proto__=C.IS;this.Z._Done(
);this.V._Done();C.IS._Done.call(this);},_ReInit:function(){C.IS._ReInit.call(this
);this.Z._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.J_));},_Mark:function(D){
var B;C.IS._Mark.call(this,D);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.RD={Afr:0,Ai:function(Ae){C.Fk.
Ai.call(this,Ae);this.U(A.aaR(A.acf.Rz));if(this.Afr>=0)this.Ki((this.Afr.toFixed(
)+CM)+A.aaR(A.acf.J7));else this.Ki(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fk.
Ce.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.Afr=-1;
else this.Afr=A._GetAutoObject(A.Device.Helper).W.Rz();this.Am();},_Init:function(
aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.RD;},_className:"Application::AnimalInfoItemAge"
};C.RH={A3p:0,Ai:function(Ae){C.Fk.Ai.call(this,Ae);this.U(A.aaR(A.acf.Ae7));if(
this.A3p>0)this.Ki((A._GetAutoObject(A.Device.Converter).AkK(this.A3p)+CM)+A._GetAutoObject(
A.acj.DN).AfE());else this.Ki(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fk.Ce.call(
this,G);this.A3p=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.Am();},
_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.RH;},_className:
"Application::AnimalInfoItemWeight"};C.To={Z:null,Ea:null,Er:null,E3:null,PM:null
,E2:null,PN:null,AiV:0,O7:0,CU:function(){this.Am();},Ai:function(Ae){C.JA.Ai.call(
this,Ae);this.U(A.aaR(A.acf.Bgi));this.E3.R(this.AiV.toFixed());this.E2.R(this.O7.
toFixed());if(!!this.AiV||!!this.O7)this.PN.R(AYb+(this.AiV+this.O7).toFixed());
else this.PN.R(A.aaR(A.acf.ARk));},Ce:function(G){C.JA.Ce.call(this,G);var AkB;AkB=
A._GetAutoObject(A.Device.Helper).Bg8(A._GetAutoObject(A.Device.Device).Br,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.AiV=AkB.Get(2);this.O7=AkB.Get(1);this.Am();},C9:
function(E){C.JA.C9.call(this,E);this.PM.L(E);this.PN.L(E);},Asa:function(G){if(
!!this.AiV||!!this.O7){this.E3.Y(true);this.PM.Y(true);this.E2.Y(true);}else{this.
E3.Y(false);this.PM.Y(false);this.E2.Y(false);}this.Ea.H(this.E3.M);this.Ea.Y(this.
E3.Fd());this.Er.H(this.E2.M);this.Er.Y(this.E2.Fd());},Aug:function(G){var B;var
Nt=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Nt)return;if(((B=Nt.Db(0x1))[2]-B[0])>((
B=Nt.M)[2]-B[0])){this.E2.S(A.aaL(A.fl.Ak));this.PM.S(A.aaL(A.fl.Ak));this.E3.S(
A.aaL(A.fl.Ak));this.PN.S(A.aaL(A.fl.Ak));}},AAa:function(G){A.pe([this,this.Aug
],this);},_Init:function(aArg){C.JA._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AJ._Init.call(this.Ea={I:this},0);A.acg.AJ._Init.call(this.Er={
I:this},0);A.acg.Text._Init.call(this.E3={I:this},0);A.acg.Text._Init.call(this.
PM={I:this},0);A.acg.Text._Init.call(this.E2={I:this},0);A.acg.Text._Init.call(this.
PN={I:this},0);this.__proto__=C.To;this.Z.H(AxQ);this.Z.BlQ(0);this.Z.Kd(3);this.
Ea.H(AYc);this.Ea.L(A.jb.H1);this.Er.H(AxO);this.Er.L(A.jb.FZ);this.E3.AX(0x34);
this.E3.H(ZU);this.E3.HH(2);this.E3.I0(true);this.E3.R(ZS);this.E3.L(A.jb.Text);
this.E3.Aj(true);this.PM.AX(0x34);this.PM.H(ZU);this.PM.I0(true);this.PM.R(AHq);
this.PM.L(A.jb.Text);this.PM.Aj(true);this.E2.AX(0x34);this.E2.H(ZU);this.E2.HH(
2);this.E2.I0(true);this.E2.R(ZS);this.E2.L(A.jb.Bi);this.E2.Aj(true);this.PN.AX(
0x34);this.PN.H(ZU);this.PN.I0(true);this.PN.R(SX);this.PN.L(A.jb.Text);this.PN.
Aj(true);this.J(this.Z,0);this.J(this.Ea,0);this.J(this.Er,0);this.J(this.E3,0);
this.J(this.PM,0);this.J(this.E2,0);this.J(this.PN,0);this.Z.Ej=[this,this.AAa];
this.E3.QT([this,this.Asa]);this.E3.S(A.aaL(A.fl.Ah));this.PM.S(A.aaL(A.fl.Ah));
this.E2.QT([this,this.Asa]);this.E2.S(A.aaL(A.fl.Ah));this.PN.S(A.aaL(A.fl.Ah));
},_Done:function(){this.__proto__=C.JA;this.Z._Done();this.Ea._Done();this.Er._Done(
);this.E3._Done();this.PM._Done();this.E2._Done();this.PN._Done();C.JA._Done.call(
this);},_ReInit:function(){C.JA._ReInit.call(this);this.Z._ReInit();this.Ea._ReInit(
);this.Er._ReInit();this.E3._ReInit();this.PM._ReInit();this.E2._ReInit();this.PN.
_ReInit();this.E3.S(A.aaL(A.fl.Ah));this.PM.S(A.aaL(A.fl.Ah));this.E2.S(A.aaL(A.
fl.Ah));this.PN.S(A.aaL(A.fl.Ah));this.CU();},_Mark:function(D){var B;C.JA._Mark.
call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qr={FK:0,H8:0
,A1j:false,Ai:function(Ae){C.Fk.Ai.call(this,Ae);this.U(AYd+A.aaR(A.acf.AGp));if(
this.A1j){this.Ki((A._GetAutoObject(A.Device.Converter).ST(this.FK,2,true)+CM)+A.
_GetAutoObject(A.acj.DN).Z9());this.Background.L(A._GetAutoObject(A.acj.DN).Ay_(
this.FK,this.H8));this.C9(A._GetAutoObject(A.acj.DN).Aza(this.FK,this.H8));}else{
this.Ki(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CG);this.C9(A.jb.Text);}},Ce:
function(G){C.Fk.Ce.call(this,G);var Lx=A._GetAutoObject(A.Device.Helper).ML(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!Lx){this.A1j=true;this.FK=A._GetAutoObject(A.acj.DN).Ak7(Lx,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A1j=false;this.FK=0;}this.H8=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.Am();},_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.Qr;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Tn={Z:null,FM:null,Ea:
null,Er:null,MB:null,E3:null,E2:null,OO:null,Z$:0,AiV:0,O7:0,CU:function(){this.
Am();},Ai:function(Ae){C.JA.Ai.call(this,Ae);this.U(A.aaR(A.acf.AwI));this.MB.R(
this.Z$.toFixed());this.E3.R(this.AiV.toFixed());this.E2.R(this.O7.toFixed());},
Ce:function(G){C.JA.Ce.call(this,G);var AkB;AkB=A._GetAutoObject(A.Device.Helper
).A5E(A._GetAutoObject(A.Device.Device).Br,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.Z$=AkB.Get(3);this.AiV=AkB.Get(2);this.O7=AkB.Get(1);this.Am();},Asa:
function(G){if((!!this.Z$||!!this.AiV)||!!this.O7){this.MB.Y(true);this.E3.Y(true
);this.E2.Y(true);this.OO.Y(false);}else{this.MB.Y(false);this.E3.Y(false);this.
E2.Y(false);this.OO.Y(true);}this.FM.H(this.MB.M);this.FM.Y(this.MB.Fd());this.Ea.
H(this.E3.M);this.Ea.Y(this.E3.Fd());this.Er.H(this.E2.M);this.Er.Y(this.E2.Fd()
);},Aug:function(G){var B;var Nt=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Nt)return;
if(((B=Nt.Db(0x1))[2]-B[0])>((B=Nt.M)[2]-B[0])){this.E2.S(A.aaL(A.fl.Ak));this.E3.
S(A.aaL(A.fl.Ak));this.MB.S(A.aaL(A.fl.Ak));}},AAa:function(G){A.pe([this,this.Aug
],this);},_Init:function(aArg){C.JA._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AJ._Init.call(this.FM={I:this},0);A.acg.AJ._Init.call(this.Ea={
I:this},0);A.acg.AJ._Init.call(this.Er={I:this},0);A.acg.Text._Init.call(this.MB={
I:this},0);A.acg.Text._Init.call(this.E3={I:this},0);A.acg.Text._Init.call(this.
E2={I:this},0);A.acg.Text._Init.call(this.OO={I:this},0);this.__proto__=C.Tn;this.
Z.AX(0x3F);this.Z.H(AxQ);this.Z.A9e(5);this.Z.Kd(3);this.FM.H(AYe);this.FM.L(A.jb.
ET);this.Ea.H(An7);this.Ea.L(A.jb.H1);this.Er.H(AYf);this.Er.L(A.jb.FZ);this.MB.
AX(0x3C);this.MB.H(ZU);this.MB.HH(2);this.MB.I0(true);this.MB.R(ZS);this.MB.L(A.
jb.Text);this.MB.Aj(true);this.E3.AX(0x3C);this.E3.H(ZU);this.E3.HH(2);this.E3.I0(
true);this.E3.R(ZS);this.E3.L(A.jb.Text);this.E3.Aj(true);this.E2.AX(0x3C);this.
E2.H(ZU);this.E2.HH(2);this.E2.I0(true);this.E2.R(ZS);this.E2.L(A.jb.Bi);this.E2.
Aj(true);this.OO.AX(0x34);this.OO.H(ZU);this.OO.I0(true);this.OO.A3(0x11);this.OO.
R(A.aaR(A.acf.ARk));this.OO.L(A.jb.Text);this.OO.Aj(true);this.OO.Y(false);this.
J(this.Z,0);this.J(this.FM,0);this.J(this.Ea,0);this.J(this.Er,0);this.J(this.MB
,0);this.J(this.E3,0);this.J(this.E2,0);this.J(this.OO,0);this.Z.Ej=[this,this.AAa
];this.MB.QT([this,this.Asa]);this.MB.S(A.aaL(A.fl.Ah));this.E3.QT([this,this.Asa
]);this.E3.S(A.aaL(A.fl.Ah));this.E2.QT([this,this.Asa]);this.E2.S(A.aaL(A.fl.Ah
));this.OO.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.JA;this.Z._Done(
);this.FM._Done();this.Ea._Done();this.Er._Done();this.MB._Done();this.E3._Done(
);this.E2._Done();this.OO._Done();C.JA._Done.call(this);},_ReInit:function(){C.JA.
_ReInit.call(this);this.Z._ReInit();this.FM._ReInit();this.Ea._ReInit();this.Er.
_ReInit();this.MB._ReInit();this.E3._ReInit();this.E2._ReInit();this.OO._ReInit(
);this.OO.R(A.aaR(A.acf.ARk));this.MB.S(A.aaL(A.fl.Ah));this.E3.S(A.aaL(A.fl.Ah)
);this.E2.S(A.aaL(A.fl.Ah));this.OO.S(A.aaL(A.fl.Ah));this.CU();},_Mark:function(
D){var B;C.JA._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.ALp={_Init:function(aArg){C.AiX._Init.call(
this,aArg);this.__proto__=C.ALp;this.N.BZ(A.aaR(A.acf.A6R));this.A3A=1;this.Q7.CB(
A.aaL(A.fl.Ak));},_ReInit:function(){C.AiX._ReInit.call(this);this.N.BZ(A.aaR(A.
acf.A6R));this.Q7.CB(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.Gy={_Init:function(aArg){C.AiX._Init.call(this,aArg);this.__proto__=C.Gy;this.
N.BZ(A.aaR(A.acf.A4b));this.N4.R(A.aaR(A.acf.Auj));},_ReInit:function(){C.AiX._ReInit.
call(this);this.N.BZ(A.aaR(A.acf.A4b));this.N4.R(A.aaR(A.acf.Auj));},_className:
"Application::AnimalListActionsScreen"};C.AQb={OB:null,IF:null,HY:null,ID:null,GE:
null,Alx:function(G){A.pe([this,this.Bym],this);},Bym:function(G){A._GetAutoObject(
C.AW).BS(3);},_Init:function(aArg){C.Cr._Init.call(this,aArg);C.OB._Init.call(this.
OB={I:this},0);C.BW._Init.call(this.IF={I:this},0);C.SA._Init.call(this.HY={I:this
},0);C.AFS._Init.call(this.ID={I:this},0);C.Q0._Init.call(this.GE={I:this},0);this.
__proto__=C.AQb;var B;this.JK(A.aaR(A.acf.A_f));this.IF.H(AhC);this.IF.Aj(true);
this.IF.U(A.aaR(A.acf.Language));this.IF.A8Z(100);this.HY.H(WV);this.HY.Aj(true);
this.HY.U(A.aaR(A.acf.Date));this.HY.Bf(true);this.ID.H(ZR);this.ID.Aj(true);this.
ID.U(A.aaR(A.acf.Bt));this.GE.H(AhB);this.GE.Aj(true);this.GE.Y(true);this.GE.U(
A.aaR(A.acf.AFp));this.GE.Bf(true);this.GE.Arm(false);this.GE.A87(true);this.Kl(
this.Z,-1);this.Kl(this.Aw,-1);this.J(this.IF,0);this.J(this.HY,0);this.J(this.ID
,0);this.J(this.GE,0);this.IF.Wg(A.aaL(A.fl.Hk));this.IF.Wh(A.aaL(A.fl.Hk));this.
IF.At([B=this.OB,B.B9,B.B_]);this.IF.CH(this.OB);this.HY.Aet([B=this.HY,B.FJ]);this.
HY.Gg([this,this.D3,this.GG]);this.HY.Akb(A.aaL(A.ach.Edit));this.HY.AbM([B=A._GetAutoObject(
A.Device.Helper),B.UJ,B.UK]);this.ID.Aet([B=this.ID,B.FJ]);this.ID.Gg([this,this.
D3,this.GG]);this.ID.Akb(A.aaL(A.ach.Edit));this.ID.AbM([B=A._GetAutoObject(A.Device.
Helper),B.UJ,B.UK]);this.GE.Aet([B=this.GE,B.FJ]);this.GE.Gg([this,this.D3,this.
GG]);this.GE.Akb(A.aaL(A.ach.Edit));this.GE.At([B=A._GetAutoObject(A.Device.Device
),B.ARP,B.AZb]);},_Done:function(){this.__proto__=C.Cr;this.OB._Done();this.IF._Done(
);this.HY._Done();this.ID._Done();this.GE._Done();C.Cr._Done.call(this);},_ReInit:
function(){C.Cr._ReInit.call(this);this.OB._ReInit();this.IF._ReInit();this.HY._ReInit(
);this.ID._ReInit();this.GE._ReInit();this.JK(A.aaR(A.acf.A_f));this.IF.U(A.aaR(
A.acf.Language));this.HY.U(A.aaR(A.acf.Date));this.ID.U(A.aaR(A.acf.Bt));this.GE.
U(A.aaR(A.acf.AFp));},_Mark:function(D){var B;C.Cr._Mark.call(this,D);if((B=this.
OB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aay={Be:null,Fo:null,Amz:null,Amh:null,R0:null,A5Y:A.jV,KF:A.jV,AQC:null,AQD:
null,ACB:null,Cx:function(G){var B;C.D2.Cx.call(this,G);A.zX([this,this.A1P],[B=
A._GetAutoObject(A.Device.Helper).W,B.QQ,B.OnSetId],0);this.A1P(this);},EV:function(
G){var B;A.z$([this,this.A1P],[B=A._GetAutoObject(A.Device.Helper).W,B.QQ,B.OnSetId
],0);C.D2.EV.call(this,G);},Y7:function(E){C.D2.Y7.call(this,E);if(A.aa0(this.AN
,E))return;if(!!this.Be)this.Be.Y7(E);},ASm:function(E){if(this.AQC===E)return;this.
AQC=E;if(!!this.Be)this.Be.NS(E);},ASn:function(E){if(this.AQD===E)return;this.AQD=
E;this.Bne(this);},ASd:function(E){if(this.ACB===E)return;this.ACB=E;A.pe([this,
this.Bnd],this);},Are:function(E){if(this.A5Y===E)return;this.A5Y=E;this.R0.R(E);
},Dt:function(E){if(this.KF===E)return;this.KF=E;if(!!this.Be)this.Be.Dt(E);},Aku:
function(LW){A.ab5("%s",AYg);},ADb:function(){A.ab5("%s",AkO);return false;},AwT:
function(G){if(!!this.Be)this.HI(this.Be);this.Be=A._NewObject(C.FT,0);this.Be.H(
Asx);this.Be.Y6(A._GetAutoObject(A.Device.Device).Br);this.Be.Dt(this.KF);this.Be.
NS(this.AQC);this.Be.Y7(this.AN);this.J(this.Be,0);this.A8(this.Be);},Bne:function(
G){var B;if(!!this.Fo)this.HI(this.Fo);this.Fo=(C.Eu.isPrototypeOf(B=A._NewObject(
this.AQD,0))?B:null);this.Fo.H(JR);this.J(this.Fo,0);},Bnd:function(G){var B;if(
!!this.Amz)this.HI(this.Amz);if(!!this.ACB&&this.ADb()){this.Amz=(C.IS.isPrototypeOf(
B=A._NewObject(this.ACB,0))?B:null);this.Amz.H(BD);this.Amz.Bf(false);this.J(this.
Amz,0);this.R0.Y(false);}else this.R0.Y(true);},A1P:function(G){this.Aku(A._GetAutoObject(
A.Device.Device).Br);this.AwT(this);},_Init:function(aArg){C.D2._Init.call(this,
aArg);A.acg.AJ._Init.call(this.Amh={I:this},0);C.CP._Init.call(this.R0={I:this},
0);this.__proto__=C.Aay;this.Amh.H(BD);this.Amh.L(A.jb.CG);this.R0.H(AGZ);this.R0.
A3(0x11);this.R0.L(A.jb.Text);this.J(this.Amh,0);this.J(this.R0,0);this.R0.S(A.aaL(
A.fl.J_));this.R0.A7(A.aaL(A.fl.Ie));},_Done:function(){this.__proto__=C.D2;this.
Amh._Done();this.R0._Done();C.D2._Done.call(this);},_ReInit:function(){C.D2._ReInit.
call(this);this.Amh._ReInit();this.R0._ReInit();this.R0.S(A.aaL(A.fl.J_));this.R0.
A7(A.aaL(A.fl.Ie));},_Mark:function(D){var B;C.D2._Mark.call(this,D);if((B=this.
Be)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fo)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Amz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amh)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.R0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.JB={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Ba7],[B=A._GetAutoObject(A.Device.Device),B.ADL,B.AHZ],0);A.pe([this,this.Ba7],this
);},Dp:function(){return 4;},F$:function(aIndex){return this.AnimalListContentToString.
BP(this.C5(aIndex));},At:function(E){C.CO.At.call(this,E);A._GetAutoObject(A.Device.
Device).AbF(E);},Ba7:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B9,this.B_],0);},_Init:function(aArg){C.CO._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.JB;this.Co.Set(0,0);this.Co.Set(1,1);this.Co.Set(2,2
);this.Co.Set(3,3);this.Init(aArg);},_Done:function(){this.__proto__=C.CO;this.AnimalListContentToString.
_Done();C.CO._Done.call(this);},_ReInit:function(){C.CO._ReInit.call(this);this.
AnimalListContentToString._ReInit();},_Mark:function(D){var B;C.CO._Mark.call(this
,D);if((B=this.AnimalListContentToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListContent"};C.AQH={IF:null,YN:null,YW:null,YU:null,YX:null
,YO:null,YS:null,YV:null,YR:null,OB:null,_Init:function(aArg){C.Cr._Init.call(this
,aArg);C.BW._Init.call(this.IF={I:this},0);C.NQ._Init.call(this.YN={I:this},0);C.
NQ._Init.call(this.YW={I:this},0);C.NQ._Init.call(this.YU={I:this},0);C.NQ._Init.
call(this.YX={I:this},0);C.NQ._Init.call(this.YO={I:this},0);C.NQ._Init.call(this.
YS={I:this},0);C.NQ._Init.call(this.YV={I:this},0);C.NQ._Init.call(this.YR={I:this
},0);C.OB._Init.call(this.OB={I:this},0);this.__proto__=C.AQH;var B;this.JK(A.aaR(
A.acf.Settings));this.IF.H(AhC);this.IF.Aj(true);this.IF.U(A.aaR(A.acf.Language)
);this.IF.A8Z(100);this.YN.H(Asy);this.YN.Aj(true);this.YN.U(A.aaR(A.acf.ABM));this.
YN.NT(16);this.YW.H(Asz);this.YW.Aj(true);this.YW.U(A.aaR(A.acf.AGk));this.YW.NT(
22);this.YU.H(AsA);this.YU.Aj(true);this.YU.U(A.aaR(A.acf.Temperature));this.YU.
NT(17);this.YX.H(AxR);this.YX.Aj(true);this.YX.U(A.aaR(A.acf.ABI));this.YX.NT(46
);this.YO.H(An8);this.YO.Aj(true);this.YO.U(A.aaR(A.acf.Device));this.YO.NT(18);
this.YS.H(An8);this.YS.Aj(true);this.YS.U(A.aaR(A.acf.ArI));this.YS.NT(19);this.
YV.H(AHM);this.YV.Aj(true);this.YV.U(A.aaR(A.acf.LinkTransponder));this.YV.NT(101
);this.YR.H(An1);this.YR.Aj(true);this.YR.U(A.aaR(A.acf.AB2));this.YR.NT(87);this.
J(this.IF,0);this.J(this.YN,0);this.J(this.YW,0);this.J(this.YU,0);this.J(this.YX
,0);this.J(this.YO,0);this.J(this.YS,0);this.J(this.YV,0);this.J(this.YR,0);this.
IF.Wg(A.aaL(A.fl.Hk));this.IF.Wh(A.aaL(A.fl.Hk));this.IF.At([B=this.OB,B.B9,B.B_
]);this.IF.CH(this.OB);this.YN.AN=[B=this.YN,B.NW];this.YW.AN=[B=this.YW,B.NW];this.
YU.AN=[B=this.YU,B.NW];this.YX.AN=[B=this.YX,B.NW];this.YO.AN=[B=this.YO,B.NW];this.
YS.AN=[B=this.YS,B.NW];this.YV.AN=[B=this.YV,B.NW];this.YR.AN=[B=this.YR,B.NW];}
,_Done:function(){this.__proto__=C.Cr;this.IF._Done();this.YN._Done();this.YW._Done(
);this.YU._Done();this.YX._Done();this.YO._Done();this.YS._Done();this.YV._Done(
);this.YR._Done();this.OB._Done();C.Cr._Done.call(this);},_ReInit:function(){C.Cr.
_ReInit.call(this);this.IF._ReInit();this.YN._ReInit();this.YW._ReInit();this.YU.
_ReInit();this.YX._ReInit();this.YO._ReInit();this.YS._ReInit();this.YV._ReInit(
);this.YR._ReInit();this.OB._ReInit();this.JK(A.aaR(A.acf.Settings));this.IF.U(A.
aaR(A.acf.Language));this.YN.U(A.aaR(A.acf.ABM));this.YW.U(A.aaR(A.acf.AGk));this.
YU.U(A.aaR(A.acf.Temperature));this.YX.U(A.aaR(A.acf.ABI));this.YO.U(A.aaR(A.acf.
Device));this.YS.U(A.aaR(A.acf.ArI));this.YV.U(A.aaR(A.acf.LinkTransponder));this.
YR.U(A.aaR(A.acf.AB2));},_Mark:function(D){var B;C.Cr._Mark.call(this,D);if((B=this.
IF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OB
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"};
C.ALC={EK:null,Init:function(aArg){this.EK.Ag7(A._NewObject(A.Core.Bt,0).Initialize(
A._GetAutoObject(A.Device.Helper).DF()).Format(A.aaR(A.acf.Agw)));},ATh:function(
){this.EK.Aew(this.AN9());this.Aab=!this.EK.EP.AV;},Aiz:function(G){this.EK.Ag7(
A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).DF()).Format(
A.aaR(A.acf.Agw)));this.ATh();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dt(A.aaR(A.acf.A65));else this.Dt(A.aaR(A.acf.AqS));this.Am();},AN9:function(
){var BC=A._NewObject(C.ApY,0);var Qa=A._GetAutoObject(A.Device.Helper).ANn(A._GetAutoObject(
A.Device.Helper).DF());var Dq=A._GetAutoObject(A.Device.Helper).ApU(Qa-(86400*this.
Mp));BC.Am$(AsB);BC.QR([].concat(0,BC.F0.slice(1,4)));BC.QR(A.abN(BC.F0,(Qa-Dq)|
0));BC.QR(A.abP(BC.F0,3400));BC.QR([].concat(BC.F0.slice(0,3),4200));var FX=A._GetAutoObject(
A.Device.Device).Br.Cb();BC.Av$(FX);BC.X0();if(FX>0){var P=0;while(P<FX){var Apt=
A._GetAutoObject(A.Device.Device).Br.CD(P,7);var Apu=A._GetAutoObject(A.Device.Device
).Br.Hz(P,6)-Dq;if(Apt>0)BC.ApN(Apu,Apt);P=P+1;}}return BC;},_Init:function(aArg
){C.K4._Init.call(this,aArg);C.Aqm._Init.call(this.EK={I:this},0);this.__proto__=
C.ALC;this.EK.H(AYh);this.EK.U(A.aaR(A.acf.Temperature));this.EK.AEq(C.AF6);this.
J(this.EK,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K4;this.EK._Done(
);C.K4._Done.call(this);},_ReInit:function(){C.K4._ReInit.call(this);this.EK._ReInit(
);this.EK.U(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K4._Mark.call(
this,D);if((B=this.EK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.ALD={ZC:null,OR:null,Agq:null,Aab:false,Init:function(aArg){this.ZC.Ag7(A._NewObject(
A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).DF()).Format(A.aaR(A.acf.
Agw)));},Ai:function(Ae){C.D2.Ai.call(this,Ae);this.Agq.Y(this.Aab);},Cx:function(
G){var B;C.D2.Cx.call(this,G);A.zX([this,this.Aiz],[B=A._GetAutoObject(A.Device.
Helper),B.UJ,B.UK],0);A.zV([this,this.Aiz],A._GetAutoObject(A.Device.Device).Br,
0);A.zX([this,this.AlL],[B=A._GetAutoObject(A.Device.Helper).W,B.QQ,B.OnSetId],0
);A.pe([this,this.AlL],this);},EV:function(G){var B;A.z$([this,this.Aiz],[B=A._GetAutoObject(
A.Device.Helper),B.UJ,B.UK],0);A.z9([this,this.Aiz],A._GetAutoObject(A.Device.Device
).Br,0);A.z$([this,this.AlL],[B=A._GetAutoObject(A.Device.Helper).W,B.QQ,B.OnSetId
],0);C.D2.EV.call(this,G);},AlL:function(G){var Fj=A._NewObject(A.Device.Filter,
0);var HQ=A._NewObject(A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fj.CY(HQ);A._GetAutoObject(A.Device.Device).Br.Bh(Fj
);},Aiz:function(G){this.ZC.Ag7(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(
A.Device.Helper).DF()).Format(A.aaR(A.acf.Agw)));this.BmA();this.Am();},BmA:function(
){var B;var FX=A._GetAutoObject(A.Device.Device).Br.Cb();var K2=A._NewObject(C.ApY
,0);var U7=A._NewObject(C.ApY,0);var Qa=A._GetAutoObject(A.Device.Helper).ANn(A.
_GetAutoObject(A.Device.Helper).DF());var Dq=A._GetAutoObject(A.Device.Helper).ApU(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K2.QR([].concat(0,K2.F0.slice(1
,4)));K2.QR(A.abN(K2.F0,(Qa-Dq)|0));K2.QR(A.abP(K2.F0,0));K2.QR([].concat(K2.F0.
slice(0,3),150000));K2.Am$(AYi);U7.QR([].concat(0,U7.F0.slice(1,4)));U7.QR(A.abN(
U7.F0,(Qa-Dq)|0));U7.QR(A.abP(U7.F0,0));U7.QR([].concat(U7.F0.slice(0,3),1500));
U7.Am$(AYj);K2.Av$(FX);K2.X0();U7.Av$(FX);U7.X0();if(FX>0){var P=0;var Aad=0;var
Azz=0;var AJj=0;var A0X=0;var BbJ=true;while(P<FX){var AlG=A._GetAutoObject(A.Device.
Device).Br.CD(P,8);var Aao=A._GetAutoObject(A.Device.Device).Br.Hz(P,6)-Dq;if(AlG>
0){K2.ApN(Aao,AlG);if(!A0X){A0X=Aao;AJj=AlG;}if(Azz>0){var Lx=A._GetAutoObject(A.
Device.Helper).ML(Azz,Aao);if(!!Lx){var FK=A._GetAutoObject(A.acj.DN).Ak7(Lx,Aad
,AlG);if(BbJ){U7.ApN(Azz,FK);BbJ=false;}U7.ApN(Aao,FK);}}Aad=AlG;Azz=Aao;}P=P+1;
}var Adp=A.aaR(A.acf.Bfj);var FK=A._GetAutoObject(A.Device.Helper).Bg_(A0X,Azz,AJj
,Aad);Adp=A._GetAutoObject(A.Device.Helper).Ne(Adp,PZ,FK.toFixed());Adp=A._GetAutoObject(
A.Device.Helper).Ne(Adp,Axu,A._GetAutoObject(A.acj.DN).Z9());this.OR.Ic.R(Adp);}
this.Aab=!K2.AV;if(this.Aab)this.OR.Ic.R(A.jV);(C.OR.isPrototypeOf(B=this.OR.EK)?
B:null).Am7([B=A._GetAutoObject(A.Device.Helper).W,B.PG,B.DT]);this.ZC.Aew(K2);this.
OR.Aew(U7);},_Init:function(aArg){C.D2._Init.call(this,aArg);C.Aqm._Init.call(this.
ZC={I:this},0);C.Aqm._Init.call(this.OR={I:this},0);C.Aks._Init.call(this.Agq={I:
this},0);this.__proto__=C.ALD;this.ZC.H(AYk);this.ZC.U(A.aaR(A.acf.Ae7));this.ZC.
AEq(C.AL_);this.OR.H(AYl);this.OR.U(A.aaR(A.acf.AGp));this.OR.AEq(C.OR);this.Agq.
H(SY);this.Agq.R(A.aaR(A.acf.Aj0));this.J(this.ZC,0);this.J(this.OR,0);this.J(this.
Agq,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D2;this.ZC._Done();this.
OR._Done();this.Agq._Done();C.D2._Done.call(this);},_ReInit:function(){C.D2._ReInit.
call(this);this.ZC._ReInit();this.OR._ReInit();this.Agq._ReInit();this.ZC.U(A.aaR(
A.acf.Ae7));this.OR.U(A.aaR(A.acf.AGp));this.Agq.R(A.aaR(A.acf.Aj0));},_Mark:function(
D){var B;C.D2._Mark.call(this,D);if((B=this.ZC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agq)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoWeightsGraph"};C.ALA={AuH:null,AuG:null,
AwN:null,Aua:null,Vg:null,AaY:null,AaX:null,Ab1:null,AeQ:null,Init:function(aArg
){this.Vg.Ag7(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper
).DF()).Format(A.aaR(A.acf.Agw)));},A3h:function(G){this.Vg.AbN(this.Aua);this.AaY.
AbN(this.AuH);this.AaX.AbN(this.AuG);this.Ab1.AbN(this.AwN);},AwJ:function(){var
FX=A._GetAutoObject(A.Device.Device).Br.Cb();this.Aua=A._NewObject(C.Ai7,0);this.
AuH=A._NewObject(C.Ai7,0);this.AuG=A._NewObject(C.Ai7,0);this.AwN=A._NewObject(C.
Ai7,0);if(FX>0){var P=FX-1;while(P>=0){var D1=A._GetAutoObject(A.Device.Device).
Br.Hz(P,6);this.AsU(this.Aua,P,3,D1);this.AsU(this.AuH,P,2,D1);this.AsU(this.AuG
,P,5,D1);this.AsU(this.AwN,P,4,D1);P=P-1;}}this.Aab=!(((this.Aua.AV+this.AuG.AV)+
this.AuH.AV)+this.AwN.AV);A.pe([this,this.A3h],this);},AsU:function(AZX,Ac,AZW,P4
){var Ak3=A._GetAutoObject(A.Device.Device).Br.IV(Ac,AZW);if(!!Ak3)AZX.Oo(Ak3,P4
);},AbL:function(E){if(this.Mp===E)return;C.K4.AbL.call(this,E);if(!!this.Vg)this.
Vg.AbL(E);if(!!this.AaY)this.AaY.AbL(E);if(!!this.AaX)this.AaX.AbL(E);if(!!this.
Ab1)this.Ab1.AbL(E);this.AeQ.AbL(E);},Aiz:function(G){this.Vg.Ag7(A._NewObject(A.
Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).DF()).Format(A.aaR(A.acf.
Agw)));this.AwJ();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dt(A.aaR(A.acf.Biy));else this.Dt(A.aaR(A.acf.AmY));this.Am();},_Init:function(
aArg){C.K4._Init.call(this,aArg);C.Ahb._Init.call(this.Vg={I:this},0);C.Ahb._Init.
call(this.AaY={I:this},0);C.Ahb._Init.call(this.AaX={I:this},0);C.Ahb._Init.call(
this.Ab1={I:this},0);C.ATe._Init.call(this.AeQ={I:this},0);this.__proto__=C.ALA;
this.Dt(A.aaR(A.acf.AmY));this.Vg.H(AYm);this.Vg.R(A.aaR(A.acf.AFu));this.AaY.H(
AYn);this.AaY.R(A.aaR(A.acf.Feed));this.AaX.H(AYo);this.AaX.R(A.aaR(A.acf.AFw));
this.Ab1.H(AYp);this.Ab1.R(A.aaR(A.acf.AFx));this.AeQ.H(AYq);this.J(this.Vg,-1);
this.J(this.AaY,-1);this.J(this.AaX,-1);this.J(this.Ab1,-1);this.J(this.AeQ,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K4;this.Vg._Done();this.AaY.
_Done();this.AaX._Done();this.Ab1._Done();this.AeQ._Done();C.K4._Done.call(this);
},_ReInit:function(){C.K4._ReInit.call(this);this.Vg._ReInit();this.AaY._ReInit(
);this.AaX._ReInit();this.Ab1._ReInit();this.AeQ._ReInit();this.Dt(A.aaR(A.acf.AmY
));this.Vg.R(A.aaR(A.acf.AFu));this.AaY.R(A.aaR(A.acf.Feed));this.AaX.R(A.aaR(A.
acf.AFw));this.Ab1.R(A.aaR(A.acf.AFx));},_Mark:function(D){var B;C.K4._Mark.call(
this,D);if((B=this.AuH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuG)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AwN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aua)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AaY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaX)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.ALB={EK:null,Wl:null,AdU:null,A1h:false,Init:function(aArg){this.Wl.Ag7(A._NewObject(
A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).DF()).Format(A.aaR(A.acf.
Agw)));},Bg:function(aSize){C.K4.Bg.call(this,aSize);this.AdU.H(this.EK.M);},Ai:
function(Ae){C.K4.Ai.call(this,Ae);var BzU=!this.Aab&&this.A1h;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.AdU.R(A.aaR(A.acf.A65));else this.
AdU.R(A.aaR(A.acf.AqS));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dt(A.aaR(
A.acf.Biz));else this.Dt(A.aaR(A.acf.BiA));this.AdU.Y(BzU);},Aiz:function(G){this.
Wl.Ag7(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).DF(
)).Format(A.aaR(A.acf.Agw)));this.Aab=true;this.A1h=true;this.AwJ();this.ATh();this.
Am();},ATh:function(){this.EK.Aew(this.AN9());if(!!this.EK.EP&&(this.EK.EP.AV>0)
){this.Aab=false;this.A1h=false;}},AN9:function(){var BC=A._NewObject(C.ApY,0);var
Qa=A._GetAutoObject(A.Device.Helper).ANn(A._GetAutoObject(A.Device.Helper).DF());
var Dq=A._GetAutoObject(A.Device.Helper).ApU(Qa-(86400*this.Mp));BC.Am$(AYr);BC.
QR([].concat(0,BC.F0.slice(1,4)));BC.QR(A.abN(BC.F0,(Qa-Dq)|0));BC.QR(A.abP(BC.F0
,3400));BC.QR([].concat(BC.F0.slice(0,3),4200));var FX=A._GetAutoObject(A.Device.
Device).Br.Cb();BC.Av$(FX);BC.X0();if(FX>0){var P=0;while(P<FX){var Apt=A._GetAutoObject(
A.Device.Device).Br.CD(P,7);var Apu=A._GetAutoObject(A.Device.Device).Br.Hz(P,6)-
Dq;if(Apt>0)BC.ApN(Apu,Apt);P=P+1;}}return BC;},Bhn:function(){var FX=A._GetAutoObject(
A.Device.Device).Br.Cb();if(FX>0){var Beh=A._NewObject(C.Ai7,0);var P=FX-1;while(
P>=0){var DU=A._NewObject(A.Device.Rating,0);DU.EB(P,A._GetAutoObject(A.Device.Device
).Br);var LK=A._GetAutoObject(A.Device.Helper).ACp(DU);if(!!LK)Beh.Oo(LK,DU.Timestamp
);P=P-1;}return Beh;}else return null;},AwJ:function(){this.Wl.AbN(this.Bhn());if(
!!this.Wl.NZ&&(this.Wl.NZ.AV>0))this.Aab=false;},_Init:function(aArg){C.K4._Init.
call(this,aArg);C.Aqm._Init.call(this.EK={I:this},0);C.Ahb._Init.call(this.Wl={I:
this},0);C.Aks._Init.call(this.AdU={I:this},0);this.__proto__=C.ALB;this.EK.H(Asx
);this.EK.U(A.aaR(A.acf.Temperature));this.EK.AEq(C.AF6);this.Wl.H(AYs);this.Wl.
R(A.aaR(A.acf.Rating));this.AdU.H(Asx);this.J(this.EK,-2);this.J(this.Wl,-2);this.
J(this.AdU,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K4;this.EK._Done(
);this.Wl._Done();this.AdU._Done();C.K4._Done.call(this);},_ReInit:function(){C.
K4._ReInit.call(this);this.EK._ReInit();this.Wl._ReInit();this.AdU._ReInit();this.
EK.U(A.aaR(A.acf.Temperature));this.Wl.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K4._Mark.call(this,D);if((B=this.EK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdU)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.Wq={Q:null,Gl:null,Gm:null
,QA:null,AK:0,Ge:0,FS:100,Fs:0,Init:function(aArg){},IP:function(G){this.Fs=1;C.
D_.IP.call(this,G);},Bg:function(aSize){C.D_.Bg.call(this,aSize);this.QA.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.D_.Ai.call(this,Ae);this.QA.Y(this.Ge!==
this.FS);this.QA.L(this.V.AQ);if((this.Fs===4)||(this.Fs===5))this.QA.L(A.jb.ET);
},Alz:function(G){this.Fs=5;this.Am();if(this.Bl.Bv){A.pe([this,this.Ax$],this);
this.Bl.Ar(false);}this.Bl.Ar(true);},Qg:function(G){if(this.Fs===5)A.pe([this,this.
Ax$],this);if(this.Fs===4)A.pe([this,this.Aya],this);if(this.Fs===1)A.pe(this.AN
,this);this.Fs=0;this.Am();},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},Acz:function(s){this.De(s);},At:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.Acz],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Acz],E,0);if(!!E)A.pe([this,this.Acz],this);},AlA:function(G){this.Fs=4;this.
Am();if(this.Bl.Bv){A.pe([this,this.Aya],this);this.Bl.Ar(false);}this.Bl.Ar(true
);},J0:function(G){this.Fs=0;},Aya:function(s){this.J0(s);},JV:function(G){this.
Fs=0;},Ax$:function(s){this.JV(s);},Bx:function(E){if(E<this.Ge)E=this.Ge;if(E>this.
FS)E=this.FS;if(this.AK===E)return;this.AK=E;this.Am();},Gn:function(E){if(this.
Ge===E)return;this.Ge=E;this.Am();},E1:function(E){if(this.FS===E)return;this.FS=
E;this.Am();},_Init:function(aArg){C.D_._Init.call(this,aArg);A.Core.BK._Init.call(
this.Gl={I:this},0);A.Core.BK._Init.call(this.Gm={I:this},0);A.acg.An._Init.call(
this.QA={I:this},0);this.__proto__=C.Wq;this.H(JQ);this.Gl.Filter=5;this.Gm.Filter=
4;this.Background.H(JQ);this.V.H(Acq);this.V.R(Lq);this.QA.H(AxS);this.J(this.QA
,0);this.Gl.BL=[this,this.Alz];this.Gl.DS=[this,this.Alz];this.Gm.BL=[this,this.
AlA];this.Gm.DS=[this,this.AlA];this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak
));this.V.CB(null);this.QA.Ay(A.aaL(A.ach.ALY));this.Init(aArg);},_Done:function(
){this.__proto__=C.D_;this.Gl._Done();this.Gm._Done();this.QA._Done();C.D_._Done.
call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.Gl._ReInit();this.Gm.
_ReInit();this.QA._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QA)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.ATE={AC:null,CJ:null,HD:
null,Bg:function(aSize){C.Wq.Bg.call(this,aSize);this.CJ.H([this.QA.M[2],this.QA.
M[1],this.M[2],this.QA.M[3]]);},Ai:function(Ae){C.Wq.Ai.call(this,Ae);this.CJ.Abg(
0,this.CJ.AV-1);if(this.Ge!==this.FS)this.QA.Y(true);},Init:function(aArg){},De:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DK((F=this.Q,F[1].call(
F[0]))));},J0:function(G){var F;var BO=this.AK;C.Wq.J0.call(this,G);this.Bx(this.
AK+1);if(this.AK!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C5(
this.AK)));A.abo(this.Q,0);}},JV:function(G){var F;var BO=this.AK;C.Wq.JV.call(this
,G);this.Bx(this.AK-1);if(this.AK!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C5(this.AK)));A.abo(this.Q,0);}},Bx:function(E){var Qm=0;if(this.Ge
!==this.FS){if(E<this.Ge){E=this.FS;Qm=-this.CJ.GW*this.CJ.AV;}if(E>this.FS){E=this.
Ge;Qm=this.CJ.GW;}}C.Wq.Bx.call(this,E);if(!!Qm)this.CJ.Gh(Qm);this.CJ.GX(this.AK
);this.CJ.Hy(this.CJ.Gi,true,this.HD,null);},Hc:function(G){var B;var FW=this.CJ.
GT;var Cy=(C.CP.isPrototypeOf(B=this.CJ.Cf)?B:null);if(!Cy)return;Cy.S(this.V.B4
);Cy.A7(A.aaL(A.fl.Ah));Cy.L(this.V.AQ);if(!!this.AC)Cy.R(this.AC.F$(FW));else Cy.
R(WT);Cy.H(A.abK(Cy.M,[(B=this.CJ.M)[2]-B[0],this.CJ.GW]));},CH:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gn(0);this.E1(this.AC.Dp()-1);this.CJ.
Jn(this.AC.Dp());this.CJ.Abg(0,this.CJ.AV-1);}},_Init:function(aArg){C.Wq._Init.
call(this,aArg);A.Core.CJ._Init.call(this.CJ={I:this},0);A.acl.Ga._Init.call(this.
HD={I:this},0);this.__proto__=C.ATE;this.H(JQ);this.QA.H(AYt);this.CJ.AeD(40);this.
CJ.NS(C.CP);this.HD.Wj(23);this.HD.HG(1);this.HD.Fe(200);this.J(this.CJ,0);this.
V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));this.CJ.Hc=[this,this.Hc];this.Init(
aArg);},_Done:function(){this.__proto__=C.Wq;this.CJ._Done();this.HD._Done();C.Wq.
_Done.call(this);},_ReInit:function(){C.Wq._ReInit.call(this);this.CJ._ReInit();
this.HD._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A7(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Wq._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HD)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RI={AKH:0
,Ai:function(Ae){C.Fk.Ai.call(this,Ae);this.U(A.aaR(A.acf.AGp));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Ki((A._GetAutoObject(A.Device.Converter).AkK(this.AKH
)+CM)+A._GetAutoObject(A.acj.DN).AfE());else this.Ki(A.aaR(A.acf.Unknown));},Ce:
function(G){C.Fk.Ce.call(this,G);this.AKH=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.Am();},_Init:function(aArg
){C.Fk._Init.call(this,aArg);this.__proto__=C.RI;},_className:"Application::AnimalInfoItemWeightGain"
};C.AOL={Bc:null,Dc:null,Init:function(aArg){var B;A.zX([this,this.Ng],[B=A._GetAutoObject(
A.Device.Device),B.ARv,B.AY3],0);},Eq:function(G){C.IA.Eq.call(this,G);this.Dc.Ay(
A._GetAutoObject(A.Device.Converter).Bfy(A._GetAutoObject(A.Device.Device).D2));
},_Init:function(aArg){C.IA._Init.call(this,aArg);A.acg.DR._Init.call(this.Bc={I:
this},0);A.acg.An._Init.call(this.Dc={I:this},0);this.__proto__=C.AOL;this.Bc.DM(
AxT);this.Bc.DY(AxU);this.Bc.L(A.jb.Bc);this.Dc.H(AYu);this.Dc.L(A.jb.Text);this.
J(this.Bc,0);this.J(this.Dc,0);this.Dc.Ay(A.aaL(A.ach.AjC));this.Init(aArg);},_Done:
function(){this.__proto__=C.IA;this.Bc._Done();this.Dc._Done();C.IA._Done.call(this
);},_ReInit:function(){C.IA._ReInit.call(this);this.Bc._ReInit();this.Dc._ReInit(
);},_Mark:function(D){var B;C.IA._Mark.call(this,D);if((B=this.Bc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.AML={Zk:null,Kp:null,Me:null,Timer:null,ABz:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.Zk.R(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.BoV),PZ,this.ABz.
toFixed()));},Cx:function(G){this.Timer.Ar(true);},EV:function(G){this.Timer.Ar(
false);},By7:function(G){if(this.ABz>1){this.ABz=this.ABz-1;this.Am();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).AwU();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Zk={I:this},0);A.acg.Text.
_Init.call(this.Kp={I:this},0);A.acg.An._Init.call(this.Me={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.AML;this.Background.L(A.jb.C1
);this.N.Y(true);this.Zk.H(AHN);this.Zk.KL(true);this.Zk.R(A.jV);this.Zk.L(A.jb.
Text);this.Kp.H(AYv);this.Kp.KL(true);this.Kp.R(A.aaR(A.acf.A4j));this.Kp.L(A.jb.
Text);this.Me.H(AxV);this.J(this.Zk,0);this.J(this.Kp,0);this.J(this.Me,0);this.
Zk.S(A.aaL(A.fl.Ah));this.Kp.S(A.aaL(A.fl.Ah));this.Me.Ay(A.aaL(A.ach.AA7));this.
Timer.Mt=[this,this.By7];},_Done:function(){this.__proto__=C.AB;this.Zk._Done();
this.Kp._Done();this.Me._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Zk._ReInit();this.Kp._ReInit();this.Me._ReInit(
);this.Timer._ReInit();this.Kp.R(A.aaR(A.acf.A4j));this.Zk.S(A.aaL(A.fl.Ah));this.
Kp.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Zk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Me)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.AMs={Kp:null,Al$:null
,Qt:null,CU:function(){this.Am();},Ai:function(Ae){C.AdJ.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).AaE<=10)this.Kp.R(A.aaR(A.acf.BfN));else this.Kp.R(A.aaR(A.acf.
A4k));},_Init:function(aArg){C.AdJ._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kp={I:this},0);A.acg.An._Init.call(this.Al$={I:this},0);C.CP._Init.call(this.Qt={
I:this},0);this.__proto__=C.AMs;this.SB.H(AYw);this.Me.H(AYx);this.Kp.H(AHO);this.
Kp.KL(true);this.Kp.L(A.jb.Text);this.Al$.H(AxV);this.Qt.H(AYy);this.Qt.Y(true);
this.Qt.R(A.aaR(A.acf.ATf));this.Qt.L(A.jb.Text);this.J(this.Kp,0);this.J(this.Al$
,0);this.J(this.Qt,0);this.Kp.S(A.aaL(A.fl.Ah));this.Al$.Ay(A.aaL(A.ach.AA7));this.
Qt.S(A.aaL(A.fl.Ah));this.Qt.A7(A.aaL(A.fl.Ak));this.Qt.CB(A.aaL(A.fl.By));},_Done:
function(){this.__proto__=C.AdJ;this.Kp._Done();this.Al$._Done();this.Qt._Done();
C.AdJ._Done.call(this);},_ReInit:function(){C.AdJ._ReInit.call(this);this.Kp._ReInit(
);this.Al$._ReInit();this.Qt._ReInit();this.Qt.R(A.aaR(A.acf.ATf));this.Kp.S(A.aaL(
A.fl.Ah));this.Qt.S(A.aaL(A.fl.Ah));this.Qt.A7(A.aaL(A.fl.Ak));this.Qt.CB(A.aaL(
A.fl.By));this.CU();},_Mark:function(D){var B;C.AdJ._Mark.call(this,D);if((B=this.
Kp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Al$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Qt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.ALn={_Init:function(aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ALn;this.
RC.Ar(false);this.RC.Aj(false);this.RC.Y(false);},_className:"Application::AlarmListFilterScreen"
};C.AUC={_Init:function(aArg){C.IT._Init.call(this,aArg);this.__proto__=C.AUC;this.
SS.Ar(false);this.SS.Aj(false);this.SS.Y(false);},_className:"Application::WatchListFilterScreen"
};C.AMI={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.AMI;this.
N.BZ(A.aaR(A.acf.A3_));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.BZ(A.
aaR(A.acf.A3_));},_className:"Application::ControlListActionsScreen"};C.AUB={_Init:
function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.AUB;this.N.BZ(A.aaR(A.
acf.A4h));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.BZ(A.aaR(A.acf.A4h
));},_className:"Application::WatchListActionsScreen"};C.ALm={_Init:function(aArg
){C.Gy._Init.call(this,aArg);this.__proto__=C.ALm;this.N.BZ(A.aaR(A.acf.A39));},
_ReInit:function(){C.Gy._ReInit.call(this);this.N.BZ(A.aaR(A.acf.A39));},_className:
"Application::AlarmListActionsScreen"};C.AOe={Eq:function(G){C.J$.Eq.call(this,G
);this.Dc.Ay(A._GetAutoObject(A.Device.Converter).Af$(5));},_Init:function(aArg){
C.J$._Init.call(this,aArg);this.__proto__=C.AOe;},_className:"Application::HeaderControlListFilter"
};C.AON={Eq:function(G){C.J$.Eq.call(this,G);this.Dc.Ay(A._GetAutoObject(A.Device.
Converter).Af$(6));},_Init:function(aArg){C.J$._Init.call(this,aArg);this.__proto__=
C.AON;},_className:"Application::HeaderWatchListFilter"};C.AOS={DQ:null,M5:null,
_Init:function(aArg){C.TL._Init.call(this,aArg);C.CP._Init.call(this.DQ={I:this}
,0);A.acg.An._Init.call(this.M5={I:this},0);this.__proto__=C.AOS;this.DQ.H(An4);
this.DQ.R(A.aaR(A.acf.A4S));this.DQ.L(A.jb.Text);this.M5.H(AYz);this.M5.L(A.jb.Text
);this.M5.A3(0x12);this.J(this.DQ,-2);this.J(this.M5,0);this.DQ.S(A.aaL(A.fl.Ak)
);this.DQ.A7(A.aaL(A.fl.By));this.M5.Ay(A.aaL(A.ach.ACS));},_Done:function(){this.
__proto__=C.TL;this.DQ._Done();this.M5._Done();C.TL._Done.call(this);},_ReInit:function(
){C.TL._ReInit.call(this);this.DQ._ReInit();this.M5._ReInit();this.DQ.R(A.aaR(A.
acf.A4S));this.DQ.S(A.aaL(A.fl.Ak));this.DQ.A7(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.TL._Mark.call(this,D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.M5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWatch"
};C.AMn={Ce:function(Ac){C.Aje.Ce.call(this,Ac);if(!!this.AY){var Od=this.AY.HW(
Ac,8);var BAC=this.AY.R7(Ac,21);this.AaR.R(A._GetAutoObject(A.Device.Helper).ML(
BAC,A._GetAutoObject(A.Device.Helper).DF()).toFixed());this.Sb.Y(Od);this.Am();}
},_Init:function(aArg){C.Aje._Init.call(this,aArg);this.__proto__=C.AMn;},_className:
"Application::CalfListWatchItem"};C.TL={AgH:null,AgJ:null,_Init:function(aArg){C.
Dw._Init.call(this,aArg);A.acg.An._Init.call(this.AgH={I:this},0);A.acg.An._Init.
call(this.AgJ={I:this},0);this.__proto__=C.TL;this.AgH.H(AYA);this.AgH.L(A.jb.Text
);this.AgH.A3(0x12);this.AgJ.H(AYB);this.AgJ.L(A.jb.Text);this.AgJ.A3(0x12);this.
Kl(this.CZ,-1);this.J(this.AgH,0);this.J(this.AgJ,0);this.AgH.Ay(A.aaL(A.ach.AmB
));this.AgJ.Ay(A.aaL(A.ach.Abc));},_Done:function(){this.__proto__=C.Dw;this.AgH.
_Done();this.AgJ._Done();C.Dw._Done.call(this);},_ReInit:function(){C.Dw._ReInit.
call(this);this.AgH._ReInit();this.AgJ._ReInit();},_Mark:function(D){var B;C.Dw.
_Mark.call(this,D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgJ).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"};C.ApY={
F0:A.wg,Ox:A.wf,QR:function(E){if(A.aaY(this.F0,E))return;this.F0=E;},Am$:function(
E){if(A.aaX(this.Ox,E))return;this.Ox=E;},_Init:function(aArg){A.acu.ABy._Init.call(
this,aArg);this.__proto__=C.ApY;},_className:"Application::BoundCoordList"};C.Aje={
TR:null,Wa:null,TS:null,Wb:null,Sb:null,YZ:null,AaR:null,AP:null,A9:null,D5:null
,Ln:null,Init:function(aArg){},Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.
Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*
30)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TR.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Wa.H(this.TR.M);this.A9.H([this.TR.
M[2]-1,0,this.TR.M[2]+1,aSize[1]]);this.TS.H([this.TR.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.Wb.H(this.TS.M);this.D5.H([this.TS.M[2]-1,0,this.TS.M[2]+1,aSize[
1]]);this.Sb.H([this.TS.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.YZ.H(this.Sb.
M);this.Ln.H([this.Sb.M[2]-1,0,this.Sb.M[2]+1,aSize[1]]);this.AaR.H([this.Sb.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bb.Ai.call(this,Ae);var K1=this.V.AQ;
this.TR.AD9(K1);this.Wa.L(K1);this.TS.AD9(K1);this.Wb.L(K1);this.Sb.AD9(K1);this.
YZ.L(K1);this.AaR.L(K1);this.YZ.Y(!this.Sb.Fd());},Ce:function(Ac){if(!this.AY)return;
this.Hu=Ac;var On=this.AY.CD(Ac,1);var H8=this.AY.Amu(Ac,14);var AtN=this.AY.CD(
Ac,5);var LK=this.AY.IV(Ac,13);this.U(On.toFixed());if(!!LK){this.TR.Y(true);this.
TR.Av3(A._GetAutoObject(A.acj.Assessment).BbR(LK));this.Wa.Y(false);}else{this.TR.
Y(false);this.Wa.Y(true);}if(AtN>0){this.TS.Y(true);this.TS.Av3(A._GetAutoObject(
A.acj.Assessment).BbR(A._GetAutoObject(A.Device.Converter).Ar6(H8,AtN)));this.Wb.
Y(false);}else{this.TS.Y(false);this.Wb.Y(true);}this.Am();},_Init:function(aArg
){C.Bb._Init.call(this,aArg);C.J6._Init.call(this.TR={I:this},0);A.acg.Text._Init.
call(this.Wa={I:this},0);C.J6._Init.call(this.TS={I:this},0);A.acg.Text._Init.call(
this.Wb={I:this},0);C.J6._Init.call(this.Sb={I:this},0);A.acg.Text._Init.call(this.
YZ={I:this},0);A.acg.Text._Init.call(this.AaR={I:this},0);A.acg.AJ._Init.call(this.
AP={I:this},0);A.acg.AJ._Init.call(this.A9={I:this},0);A.acg.AJ._Init.call(this.
D5={I:this},0);A.acg.AJ._Init.call(this.Ln={I:this},0);this.__proto__=C.Aje;this.
Wa.H(AYC);this.Wa.R(An5);this.Wb.H(An6);this.Wb.R(An5);this.Sb.Av3(A.jb.Ace);this.
YZ.H(An6);this.YZ.R(Ra);this.AP.L(A.jb.Bc);this.A9.L(A.jb.Bc);this.D5.L(A.jb.Bc);
this.Ln.L(A.jb.Bc);this.J(this.TR,0);this.J(this.Wa,0);this.J(this.TS,0);this.J(
this.Wb,0);this.J(this.Sb,0);this.J(this.YZ,0);this.J(this.AaR,0);this.J(this.AP
,0);this.J(this.A9,0);this.J(this.D5,0);this.J(this.Ln,0);this.Wa.S(A.aaL(A.fl.Ah
));this.Wb.S(A.aaL(A.fl.Ah));this.YZ.S(A.aaL(A.fl.Ah));this.AaR.S(A.aaL(A.fl.Ah)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Bb;this.TR._Done();this.Wa.
_Done();this.TS._Done();this.Wb._Done();this.Sb._Done();this.YZ._Done();this.AaR.
_Done();this.AP._Done();this.A9._Done();this.D5._Done();this.Ln._Done();C.Bb._Done.
call(this);},_ReInit:function(){C.Bb._ReInit.call(this);this.TR._ReInit();this.Wa.
_ReInit();this.TS._ReInit();this.Wb._ReInit();this.Sb._ReInit();this.YZ._ReInit(
);this.AaR._ReInit();this.AP._ReInit();this.A9._ReInit();this.D5._ReInit();this.
Ln._ReInit();this.Wa.S(A.aaL(A.fl.Ah));this.Wb.S(A.aaL(A.fl.Ah));this.YZ.S(A.aaL(
A.fl.Ah));this.AaR.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bb._Mark.call(this
,D);if((B=this.TR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wa)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ln)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DL={Pj:null,AmR:null
,EP:null,DL:null,AqL:0,AqM:0,A6l:0,Amk:0,Ap_:0,Init:function(aArg){this.AR9(6);this.
AR_(8);this.ASj(A.jb.AR);this.ASk(3);},Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);this.DL.Bkm([this.DL.AaM[0],(B=this.DL.M)[3]-B[1]]);this.Wm(this);},AR8:function(
E){if(this.Pj===E)return;this.Pj=E;this.DL.AR8(E);},ASk:function(E){if(this.AqM===
E)return;this.AqM=E;this.DL.ASk(E);},ASj:function(E){if(this.AqL===E)return;this.
AqL=E;this.DL.ASj(E);this.DL.Bks(E);},Wm:function(G){var B;while(!!this.DL.Ag)this.
HI(this.DL.Ag);if(!this.EP)return;this.DL.Am$([((this.EP.Ox[0]*((B=this.M)[2]-B[
0]))/(this.EP.F0[2]-this.EP.F0[0]))|0,this.DL.Ox[1]]);this.DL.Am$([this.DL.Ox[0]
,((this.EP.Ox[1]*((B=this.M)[3]-B[1]))/(this.EP.F0[3]-this.EP.F0[1]))|0]);var P;
var Da=this.DL.Ox[1];var D1;var A3s=this.EP.F0[1];var Bix=(((B=this.DL.M)[3]-B[1
])/this.DL.Ox[1])|0;for(P=0;P<Bix;P=P+1){D1=A._NewObject(A.acg.Text,0);D1.H([0,((((
B=this.M)[3]-B[1])-(P*Da))-(this.AmR.Ascent+this.AmR.Descent))+2,((B=this.M)[2]-
B[0])-this.AqM,(((B=this.M)[3]-B[1])-(P*Da))+2]);D1.L(this.A6l);D1.S(this.AmR);D1.
A3(0x24);if(P>0)D1.R(this.AIW(A3s));else D1.R(this.AJu());A3s=A3s+this.EP.Ox[1];
this.J(D1,0);}},BEd:function(s){this.Wm(s);},Blg:function(E){if(this.AmR===E)return;
this.AmR=E;this.Am();},AyI:function(AZD){var B;if(!this.EP||(this.EP.F0[3]===this.
EP.F0[1]))return 0;return(((AZD-this.EP.F0[1])*((B=this.M)[3]-B[1]))/(this.EP.F0[
3]-this.EP.F0[1]))|0;},Aew:function(E){if(this.EP===E)return;this.EP=E;if(!E)this.
DL.Aew(null);else{var BC=A._NewObject(A.acu.ABy,0);BC.Av$(this.EP.ADp);BC.X0();var
Jp=E.Alf;while(!!Jp){BC.ApN(this.BwK(Jp.PR),this.BwL(Jp.PT));Jp=Jp.Ag;}this.DL.Aew(
BC);this.Am();}},BwK:function(BuZ){var B;if(!this.EP||(this.EP.F0[2]===this.EP.F0[
0]))return 0;return((BuZ-this.EP.F0[0])*((B=this.M)[2]-B[0]))/(this.EP.F0[2]-this.
EP.F0[0]);},BwL:function(AZD){var B;if(!this.EP||(this.EP.F0[3]===this.EP.F0[1])
)return 0;return((AZD-this.EP.F0[1])*((B=this.M)[3]-B[1]))/(this.EP.F0[3]-this.EP.
F0[1]);},AIW:function(Aoo){return Aoo.toFixed();},AJu:function(){return A.jV;},AR_:
function(E){if(this.Amk===E)return;this.Amk=E;this.DL.AR_(E);},AR9:function(E){if(
this.Ap_===E)return;this.Ap_=E;this.DL.AR9(E);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acu.DL._Init.call(this.DL={I:this},0);this.__proto__=C.DL;this.
H(AHP);this.A6l=A.jb.Text;this.DL.AX(0x3F);this.DL.H(AHP);this.DL.BlE(AYD);this.
DL.Bj5(A.jb.Ace);this.DL.Bk1(A.jb.Bc);this.DL.BlZ(A.jb.Ace);this.J(this.DL,0);this.
Pj=A.aaL(A.acu.ABT);this.AmR=A.aaL(A.fl.By);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.O;this.DL._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.DL._ReInit();this.Blg(A.aaL(A.fl.By));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Pj)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AmR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EP)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DL)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AL_={AIW:function(Aoo){return A._GetAutoObject(
A.Device.Converter).Axj(Aoo,0);},AJu:function(){return A._GetAutoObject(A.acj.DN
).AfE();},_Init:function(aArg){C.DL._Init.call(this,aArg);this.__proto__=C.AL_;}
,_className:"Application::BodyWeightGraph"};C.OR={JC:null,Er:null,Ea:null,FM:null
,Iw:null,Ix:null,Init:function(aArg){this.AR8(null);},Wm:function(G){var B;var F;
C.DL.Wm.call(this,G);var AJ0=0;var AKM=0;if(!!this.JC){AJ0=this.AyI(A._GetAutoObject(
A.Device.Helper).ACo((F=this.JC,F[1].call(F[0]))));AKM=this.AyI(A._GetAutoObject(
A.Device.Helper).ACn((F=this.JC,F[1].call(F[0]))));}this.FM.H(A.abP(this.FM.M,0)
);this.FM.H([].concat(this.FM.M.slice(0,3),((B=this.M)[3]-B[1])-AKM));this.Iw.H(
A.abO(this.Iw.M,(this.FM.M[3]-((((B=this.Iw.M)[3]-B[1])/2)|0))-2));this.Ea.H(A.abP(
this.Ea.M,this.FM.M[3]));this.Ea.H([].concat(this.Ea.M.slice(0,3),((B=this.M)[3]-
B[1])-AJ0));this.Ix.H(A.abO(this.Ix.M,(this.Ea.M[3]-((((B=this.Ix.M)[3]-B[1])/2)|
0))+2));this.Er.H(A.abP(this.Er.M,this.Ea.M[3]));this.Er.H([].concat(this.Er.M.slice(
0,3),(B=this.M)[3]-B[1]));},AIW:function(Aoo){return A._GetAutoObject(A.Device.Converter
).ST(Aoo,0,true);},AJu:function(){return A._GetAutoObject(A.acj.DN).Z9();},Am7:function(
E){if(A.aaZ(this.JC,E))return;if(!!this.JC)A.z$([this,this.Aip],this.JC,0);this.
JC=E;if(!!E)A.zX([this,this.Aip],E,0);if(!!E)A.pe([this,this.Aip],this);},Aip:function(
G){this.Am();},_Init:function(aArg){C.DL._Init.call(this,aArg);A.acg.AJ._Init.call(
this.Er={I:this},0);A.acg.AJ._Init.call(this.Ea={I:this},0);A.acg.AJ._Init.call(
this.FM={I:this},0);A.acg.AJ._Init.call(this.Iw={I:this},0);A.acg.AJ._Init.call(
this.Ix={I:this},0);this.__proto__=C.OR;this.Er.AX(0xD);this.Er.H(ZM);this.Er.L(
A.jb.FZ);this.Ea.AX(0xD);this.Ea.H(UH);this.Ea.L(A.jb.H1);this.FM.AX(0xD);this.FM.
H(Acp);this.FM.L(A.jb.ET);this.Iw.AX(0xD);this.Iw.H(ZO);this.Iw.AvR(A.jb.H1);this.
Iw.AvS(A.jb.H1);this.Iw.AvU(A.jb.ET);this.Iw.AvT(A.jb.ET);this.Ix.AX(0xD);this.Ix.
H(WS);this.Ix.AvR(A.jb.FZ);this.Ix.AvS(A.jb.FZ);this.Ix.AvU(A.jb.H1);this.Ix.AvT(
A.jb.H1);this.J(this.Er,-1);this.J(this.Ea,-1);this.J(this.FM,-1);this.J(this.Iw
,-1);this.J(this.Ix,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.DL;this.
Er._Done();this.Ea._Done();this.FM._Done();this.Iw._Done();this.Ix._Done();C.DL.
_Done.call(this);},_ReInit:function(){C.DL._ReInit.call(this);this.Er._ReInit();
this.Ea._ReInit();this.FM._ReInit();this.Iw._ReInit();this.Ix._ReInit();},_Mark:
function(D){var B;C.DL._Mark.call(this,D);if((B=this.JC)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.FM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Iw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ix)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightGainGraph"};C.Aqm={EK:null,EP:null,RU:null,Ic:null
,Bc:null,Aw3:A.jV,DD:A.jV,AN$:null,Init:function(aArg){},Bg:function(aSize){A.Core.
O.Bg.call(this,aSize);this.Bc.H([].concat([0,aSize[1]-2],aSize));this.RU.H([30,0
,aSize[0]-2,30]);this.Ic.H(this.RU.M);if(!!this.EK)this.EK.H([30,this.RU.M[3],aSize[
0],this.Bc.M[1]]);},Ag7:function(E){if(this.Aw3===E)return;this.Aw3=E;this.Ic.R(
E);},U:function(E){if(this.DD===E)return;this.DD=E;this.RU.R(E);},AEq:function(E
){if(this.AN$===E)return;this.AN$=E;this.Bnb(this);},Bnb:function(G){var B;if(!!
this.EK)this.HI(this.EK);this.EK=(C.DL.isPrototypeOf(B=A._NewObject(this.AN$,0))?
B:null);if(!!this.EK){this.EK.H(AYE);this.EK.Aew(this.EP);this.J(this.EK,0);}},Aew:
function(E){if(this.EP===E)return;this.EP=E;if(!!this.EK)this.EK.Aew(E);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.RU={I:this
},0);A.acg.Text._Init.call(this.Ic={I:this},0);A.acg.AJ._Init.call(this.Bc={I:this
},0);this.__proto__=C.Aqm;this.H(Act);this.Ar(false);this.RU.H(AYF);this.RU.A3(0x11
);this.RU.R(Lq);this.RU.L(A.jb.Text);this.Ic.A3(0x14);this.Ic.R(A.jV);this.Ic.L(
A.jb.Text);this.Bc.H(AYG);this.Bc.L(A.jb.Bc);this.J(this.RU,0);this.J(this.Ic,0);
this.J(this.Bc,0);this.RU.S(A.aaL(A.fl.Ak));this.Ic.S(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=A.Core.O;this.RU._Done();this.Ic._Done();
this.Bc._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.RU._ReInit();this.Ic._ReInit();this.Bc._ReInit();this.RU.S(A.aaL(
A.fl.Ak));this.Ic.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.EK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EP)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::GraphItem"};C.ALJ={Aga:null,GX:function(E){var F;C.FT.
GX.call(this,E);if(!!this.Aga)(F=this.Aga,F[2].call(F[0],E));},A8p:function(E){if(
A.aaZ(this.Aga,E))return;if(!!this.Aga)A.z$([this,this.A1R],this.Aga,0);this.Aga=
E;if(!!E)A.zX([this,this.A1R],E,0);if(!!E)A.pe([this,this.A1R],this);},A1R:function(
G){var F;if(!this.Aga)return;(F=this.Aga,F[2].call(F[0],this.FA()));},_Init:function(
aArg){C.FT._Init.call(this,aArg);this.__proto__=C.ALJ;},_Mark:function(D){var B;
C.FT._Mark.call(this,D);if((B=this.Aga)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Application::AnimalScrollList"};C.ATe={Q5:null,PO:null,XE:null,XF:
null,Mp:0,CU:function(){this.Am();},Bg:function(aSize){var B;A.Core.O.Bg.call(this
,aSize);this.Q5.H(A.abI(this.Q5.M,(((B=this.M)[3]-B[1])/2)|0));this.PO.H(A.abI(this.
PO.M,(((B=this.M)[3]-B[1])/2)|0));this.Q5.H(A.abO(this.Q5.M,(((B=this.M)[3]-B[1]
)/2)|0));this.PO.H(A.abO(this.PO.M,(((B=this.M)[3]-B[1])/2)|0));},Ai:function(Ae
){A.Core.O.Ai.call(this,Ae);this.Q5.R(A._GetAutoObject(A.Device.Helper).Ne(A.aaR(
A.acf.Bir),PZ,this.Mp.toFixed()));},AbL:function(E){if(this.Mp===E)return;this.Mp=
E;this.BzI(this);},BzI:function(G){var B;var AI4=(((B=this.M)[2]-B[0])/this.Mp)|
0;this.XE.H(A.abM(this.XE.M,(((B=this.M)[2]-B[0])-(this.Mp*AI4))+(((AI4/2)-(((B=
this.XE.M)[2]-B[0])/2))|0)));this.XF.H(A.abM(this.XF.M,(((B=this.M)[2]-B[0])-AI4
)+(((AI4/2)-(((B=this.XF.M)[2]-B[0])/2))|0)));this.Am();},_Init:function(aArg){A.
Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.Q5={I:this},0);A.acg.Text.
_Init.call(this.PO={I:this},0);A.acg.Text._Init.call(this.XE={I:this},0);A.acg.Text.
_Init.call(this.XF={I:this},0);this.__proto__=C.ATe;this.H(BD);this.Q5.H(AYH);this.
Q5.HH(5);this.Q5.A3(0x11);this.Q5.L(A.jb.Text);this.PO.H(AYI);this.PO.HH(5);this.
PO.A3(0x14);this.PO.R(A.aaR(A.acf.Ahq));this.PO.L(A.jb.Text);this.XE.H(AYJ);this.
XE.R(AHQ);this.XE.L(A.jb.Text);this.XF.H(AYK);this.XF.R(AHQ);this.XF.L(A.jb.Text
);this.J(this.Q5,0);this.J(this.PO,0);this.J(this.XE,0);this.J(this.XF,0);this.Q5.
S(A.aaL(A.fl.Ak));this.PO.S(A.aaL(A.fl.Ak));this.XE.S(A.aaL(A.fl.Hk));this.XF.S(
A.aaL(A.fl.Hk));},_Done:function(){this.__proto__=A.Core.O;this.Q5._Done();this.
PO._Done();this.XE._Done();this.XF._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Q5._ReInit();this.PO._ReInit();this.XE._ReInit(
);this.XF._ReInit();this.PO.R(A.aaR(A.acf.Ahq));this.Q5.S(A.aaL(A.fl.Ak));this.PO.
S(A.aaL(A.fl.Ak));this.CU();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Q5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XF)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"};C.K4={VK:null
,Ajm:null,KF:A.jV,Mp:0,Aab:false,Init:function(aArg){var A0A=A._NewObject(C.J7,0
);var P;for(P=0;P<3;P=P+1)if(A._GetAutoObject(A.Device.Helper).W.Rz()<A0A.C5(P))
A0A.AmX=P+1;this.VK.CH(A0A);},Ai:function(Ae){C.D2.Ai.call(this,Ae);this.Ajm.Y(this.
Aab);if(this.Aab)this.A8(null);else this.A8(this.VK);},Cx:function(G){var B;var F;
C.D2.Cx.call(this,G);if(!(F=this.VK.Q,F[1].call(F[0])))(F=this.VK.Q,F[2].call(F[
0],this.VK.AC.C5(0)));A.zX([this,this.AId],[B=A._GetAutoObject(A.Device.Helper),
B.UJ,B.UK],0);A.zV([this,this.AId],A._GetAutoObject(A.Device.Device).Br,0);A.zX([
this,this.AlL],[B=A._GetAutoObject(A.Device.Helper).W,B.QQ,B.OnSetId],0);A.pe([this
,this.AlL],this);},EV:function(G){var B;A.z$([this,this.AId],[B=A._GetAutoObject(
A.Device.Helper),B.UJ,B.UK],0);A.z9([this,this.AId],A._GetAutoObject(A.Device.Device
).Br,0);A.z$([this,this.AlL],[B=A._GetAutoObject(A.Device.Helper).W,B.QQ,B.OnSetId
],0);C.D2.EV.call(this,G);},Y7:function(E){if(A.aa0(this.AN,E))return;C.D2.Y7.call(
this,E);this.VK.AN=E;},AbL:function(E){if(this.Mp===E)return;this.Mp=E;A.pe([this
,this.AlL],this);},Buy:function(Aq){this.AbL(Aq);},Aiz:function(G){},AId:function(
s){this.Aiz(s);},Dt:function(E){if(this.KF===E)return;this.KF=E;this.Ajm.R(E);},
AlL:function(G){var Fj=A._NewObject(A.Device.Filter,0);var AyS=A._NewObject(A.Device.
UInt32FilterCriterion,0);AyS.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).Ahq()-((this.Mp-1)*86400))-1,true);Fj.CY(AyS);var HQ=A._NewObject(A.Device.Int32FilterCriterion
,0);HQ.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fj.CY(HQ);A._GetAutoObject(
A.Device.Device).Br.Bh(Fj);},Bjr:function(){return this.Mp;},_Init:function(aArg
){C.D2._Init.call(this,aArg);C.ATE._Init.call(this.VK={I:this},0);C.Aks._Init.call(
this.Ajm={I:this},0);this.__proto__=C.K4;this.VK.H(BD);this.Ajm.H(SY);this.J(this.
VK,0);this.J(this.Ajm,0);this.VK.At([this,this.Bjr,this.Buy]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D2;this.VK._Done();this.Ajm._Done();C.D2._Done.
call(this);},_ReInit:function(){C.D2._ReInit.call(this);this.VK._ReInit();this.Ajm.
_ReInit();},_Mark:function(D){var B;C.D2._Mark.call(this,D);if((B=this.VK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajm)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.AMR={VS:null,Yr:null,RatingMode:null,Pw:null,_Init:
function(aArg){C.Cr._Init.call(this,aArg);C.NQ._Init.call(this.VS={I:this},0);C.
BW._Init.call(this.Yr={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.I2._Init.call(this.Pw={I:this},0);this.__proto__=C.AMR;var B;this.G$.R(A.
aaR(A.acf.ABI));this.JK(A.aaR(A.acf.A4L));this.VS.H(AsC);this.VS.Aj(true);this.VS.
U(A.aaR(A.acf.Ase));this.VS.Bf(true);this.VS.NT(23);this.Yr.H(AYL);this.Yr.Aj(true
);this.Yr.U(A.aaR(A.acf.A9M));this.Yr.Bf(false);this.Pw.H(AYM);this.Pw.Aj(true);
this.Pw.U(A.aaR(A.acf.A4I));this.Pw.Bf(true);this.Pw.Gn(3);this.Pw.E1(14);this.Pw.
Kh(A.aaR(A.acf.J7)+AsD);this.Pw.KK(A.aaR(A.acf.GB)+AsD);this.J(this.VS,0);this.J(
this.Yr,0);this.J(this.Pw,0);this.VS.AN=[B=this.VS,B.NW];this.Yr.At([B=this.RatingMode
,B.B9,B.B_]);this.Yr.CH(this.RatingMode);this.Pw.At([B=A._GetAutoObject(A.Device.
Device),B.A7B,B.A$U]);},_Done:function(){this.__proto__=C.Cr;this.VS._Done();this.
Yr._Done();this.RatingMode._Done();this.Pw._Done();C.Cr._Done.call(this);},_ReInit:
function(){C.Cr._ReInit.call(this);this.VS._ReInit();this.Yr._ReInit();this.RatingMode.
_ReInit();this.Pw._ReInit();this.G$.R(A.aaR(A.acf.ABI));this.JK(A.aaR(A.acf.A4L)
);this.VS.U(A.aaR(A.acf.Ase));this.Yr.U(A.aaR(A.acf.A9M));this.Pw.U(A.aaR(A.acf.
A4I));this.Pw.Kh(A.aaR(A.acf.J7)+AsD);this.Pw.KK(A.aaR(A.acf.GB)+AsD);},_Mark:function(
D){var B;C.Cr._Mark.call(this,D);if((B=this.VS)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Auv={Init:function(aArg){this.V.Text.A3(0x11);this.V.Text.HH(10);},Ai:function(
Ae){var B;C.Cj.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20
);var Gt=this.Bl.Bv;var FG=A.jb.AdL;var GJ=A.jb.Bi;if(this.Hb){FG=A.jb.Bi;GJ=A.jb.
Text;}if(!G6){this.Background.L(FG);this.V.L(A.jb.CG);}else if(Gt){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bi);}else if(Fh){this.Background.L(A.jb.AR);this.V.L(A.
jb.Bi);}else{this.Background.L(FG);this.V.L(GJ);}this.LA=G6;this.Kx=Fh;this.Qh=Gt;
},_Init:function(aArg){C.Cj._Init.call(this,aArg);this.__proto__=C.Auv;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cj._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ACw={An:null,Init:
function(aArg){var B;A.zX([this,this.Eq],[B=A._GetAutoObject(A.Device.Helper).W,
B.PG,B.DT],0);A.pe([this,this.Eq],this);},C9:function(E){C.BQ.C9.call(this,E);this.
An.L(E);},Eq:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.An.Ay(A.aaL(A.ach.ACt));break;case 1:this.An.Ay(A.aaL(A.ach.AOw));break;
case 2:this.An.Ay(A.aaL(A.ach.AOy));break;default:A.ab5("%s%e",AxW,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.An._Init.call(this.An={I:this},0);this.__proto__=C.ACw;this.An.H(AsE);this.
J(this.An,0);this.An.Ay(A.aaL(A.ach.ACt));this.Init(aArg);},_Done:function(){this.
__proto__=C.BQ;this.An._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.An._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((
B=this.An)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ACx={An:null,Init:function(aArg){var B;A.zX([this,this.Eq],[B=A._GetAutoObject(
A.Device.Helper).W,B.PG,B.DT],0);A.pe([this,this.Eq],this);},C9:function(E){C.BQ.
C9.call(this,E);this.An.L(E);},Eq:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.An.Ay(A.aaL(A.ach.ACu));break;case 1:this.An.Ay(A.aaL(
A.ach.AOx));break;case 2:this.An.Ay(A.aaL(A.ach.AOz));break;default:A.ab5("%s%e"
,AxW,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BQ.
_Init.call(this,aArg);A.acg.An._Init.call(this.An={I:this},0);this.__proto__=C.ACx;
this.An.H(AsE);this.J(this.An,0);this.An.Ay(A.aaL(A.ach.ACu));this.Init(aArg);},
_Done:function(){this.__proto__=C.BQ;this.An._Done();C.BQ._Done.call(this);},_ReInit:
function(){C.BQ._ReInit.call(this);this.An._ReInit();},_Mark:function(D){var B;C.
BQ._Mark.call(this,D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fk={BR:null,Axe:A.jV,C9:function(E){C.JA.C9.call(
this,E);this.BR.L(E);},Ki:function(E){if(this.Axe===E)return;this.Axe=E;this.BR.
R(E);},_Init:function(aArg){C.JA._Init.call(this,aArg);C.CP._Init.call(this.BR={
I:this},0);this.__proto__=C.Fk;this.BR.AX(0x34);this.BR.H(AxQ);this.BR.A3(0x11);
this.BR.L(A.jb.Text);this.J(this.BR,0);this.BR.S(A.aaL(A.fl.Ah));this.BR.A7(A.aaL(
A.fl.Ak));this.BR.CB(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.JA;this.
BR._Done();C.JA._Done.call(this);},_ReInit:function(){C.JA._ReInit.call(this);this.
BR._ReInit();this.BR.S(A.aaL(A.fl.Ah));this.BR.A7(A.aaL(A.fl.Ak));this.BR.CB(A.aaL(
A.fl.By));},_Mark:function(D){var B;C.JA._Mark.call(this,D);if((B=this.BR)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
ANT={We:function(G){this.Af5();this.ALj(A.aaR(A.acf.BhA),[this,this.Bl$],A._GetAutoObject(
A.Device.Device).Ams);A._GetAutoObject(C.Bz).Fu();this.IR(A.aaR(A.acf.AUf),[this
,this.ASK],5);this.IR(A.aaR(A.acf.AUd),[this,this.ASJ],7);this.IR(A.aaR(A.acf.AnA
),[this,this.Awc],2);this.IR(A.aaR(A.acf.Xw),[this,this.AD5],1);this.IR(A.aaR(A.
acf.At0),[this,this.ADZ],0);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(
A.aaR(A.acf.AlZ)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cd(6);},Dv:
function(G){},Aa3:function(){return C.ABm;},Aa4:function(){return C.ACE;},QY:function(
G){A._GetAutoObject(A.Device.Device).Ap.Bh(A._GetAutoObject(A.Device.Helper).A5K(
));},HJ:function(G){C.GN.HJ.call(this,G);if(this.AjV()===false){this.N.Cn(A.aaL(
A.ach.Abc));this.N.Ci=[this,this.A5a];this.N.FC(A.jV);}this.N.OG(false);this.N.OH(
false);},AfR:function(){A._GetAutoObject(C.AW).BS(48);},AfQ:function(){A._GetAutoObject(
C.AW).BS(49);},Bl$:function(G){A._GetAutoObject(A.Device.Device).Cd(0);A._GetAutoObject(
A.Device.Device).Av5(!A._GetAutoObject(A.Device.Device).Ams);this.AnH(this);},AnH:
function(G){var A$=A._GetAutoObject(A.Device.Device).Ap.Filter.GA();var Az=A$.DX(
30,3);if(!!Az)A$.QW(Az);if(A._GetAutoObject(A.Device.Device).Ams){var Azy=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A1r=A._GetAutoObject(A.Device.Helper).DF()-
21600;Azy.Initialize(30,3,A1r,true);A$.CY(Azy);}A._GetAutoObject(A.Device.Device
).Ap.Bh(A$);},_Init:function(aArg){C.GN._Init.call(this,aArg);this.__proto__=C.ANT;
var B;this.Dl(C.AOs);this.Dt(A.aaR(A.acf.A62));this.Av8([B=A._GetAutoObject(A.Device.
Device),B.A7A,B.A$T]);},_ReInit:function(){C.GN._ReInit.call(this);this.Dt(A.aaR(
A.acf.A62));},_className:"Application::FreshCowListScreen"};C.ANS={_Init:function(
aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ANS;this.K_.Ar(false);this.K_.
Aj(false);this.K_.Y(false);this.Jf.Ar(false);this.Jf.Aj(false);this.Jf.Y(false);
},_className:"Application::FreshCowListFilterScreen"};C.ANR={_Init:function(aArg
){C.Gy._Init.call(this,aArg);this.__proto__=C.ANR;this.N.BZ(A.aaR(A.acf.A4a));},
_ReInit:function(){C.Gy._ReInit.call(this);this.N.BZ(A.aaR(A.acf.A4a));},_className:
"Application::FreshCowListActionsScreen"};C.AOs={Eq:function(G){C.J$.Eq.call(this
,G);this.Dc.Ay(A._GetAutoObject(A.Device.Converter).Af$(7));},_Init:function(aArg
){C.J$._Init.call(this,aArg);this.__proto__=C.AOs;},_className:"Application::HeaderFreshCowListFilter"
};C.ACE={Jm:null,DQ:null,_Init:function(aArg){C.Dw._Init.call(this,aArg);C.CP._Init.
call(this.Jm={I:this},0);C.CP._Init.call(this.DQ={I:this},0);this.__proto__=C.ACE;
this.A8E(1);this.Jm.H(Bo1);this.Jm.R((A.aaR(A.acf.Calving)+ZT)+A.aaR(A.acf.A_m));
this.Jm.L(A.jb.Text);this.DQ.H(Bo2);this.DQ.R(A.aaR(A.acf.ADh));this.DQ.L(A.jb.Text
);this.J(this.Jm,0);this.J(this.DQ,0);this.Jm.S(A.aaL(A.fl.Ak));this.Jm.A7(A.aaL(
A.fl.By));this.DQ.S(A.aaL(A.fl.Ak));this.DQ.A7(A.aaL(A.fl.By));},_Done:function(
){this.__proto__=C.Dw;this.Jm._Done();this.DQ._Done();C.Dw._Done.call(this);},_ReInit:
function(){C.Dw._ReInit.call(this);this.Jm._ReInit();this.DQ._ReInit();this.Jm.R((
A.aaR(A.acf.Calving)+ZT)+A.aaR(A.acf.A_m));this.DQ.R(A.aaR(A.acf.ADh));this.Jm.S(
A.aaL(A.fl.Ak));this.Jm.A7(A.aaL(A.fl.By));this.DQ.S(A.aaL(A.fl.Ak));this.DQ.A7(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.Dw._Mark.call(this,D);if((B=this.Jm).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.ABm={AF7:null,KH:null,Uq:null,AP:null,A9:null
,Init:function(aArg){},Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Uq.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A9.H([this.Uq.M[2]-1,0,this.Uq.M[2]+1,aSize[
1]]);this.KH.H([this.Uq.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bb.Ai.call(
this,Ae);this.KH.L(this.V.AQ);this.Uq.C9(this.V.AQ);},Ce:function(Ac){if(!this.AY
)return;this.Hu=Ac;if(!!this.AY){var KV=this.AY.CD(Ac,0);var On=this.AY.CD(Ac,1);
var A1q=this.AY.CD(Ac,29);var Ak9=this.AY.Hz(Ac,28);this.U(On.toFixed());this.KH.
R(A1q.toFixed());this.Uq.AbL(A._GetAutoObject(A.Device.Device).Aqi+1);this.Uq.BlR(
Ak9);this.Uq.R(A._GetAutoObject(A.acj.KD).Ajs(Ak9));A._GetAutoObject(A.Device.Device
).Sy(Ac);this.ApD(KV);this.AwJ();A._GetAutoObject(A.Device.Device).Br.Bh(null);this.
Am();}},A3h:function(G){this.Uq.AbN(this.AF7);},AwJ:function(){var FX=A._GetAutoObject(
A.Device.Device).Br.Cb();this.AF7=A._NewObject(C.Ai7,0);if(FX>0){var P=FX-1;while(
P>=0){var D1=A._GetAutoObject(A.Device.Device).Br.Hz(P,6);this.AsU(this.AF7,P,9,
D1);P=P-1;}}A.pe([this,this.A3h],this);},AsU:function(AZX,Ac,AZW,P4){var Ak3=A._GetAutoObject(
A.Device.Device).Br.IV(Ac,AZW);if(!!Ak3)AZX.Oo(Ak3,P4);},ApD:function(AcK){var Fj=
A._NewObject(A.Device.Filter,0);var AyS=A._NewObject(A.Device.UInt32FilterCriterion
,0);AyS.Initialize(6,2,A._GetAutoObject(A.Device.Helper).Zp(A._GetAutoObject(A.Device.
Device).Aqi)-1,true);Fj.CY(AyS);var HQ=A._NewObject(A.Device.Int32FilterCriterion
,0);HQ.Initialize(1,0,AcK,true);Fj.CY(HQ);A._GetAutoObject(A.Device.Device).Br.Bh(
Fj);},_Init:function(aArg){C.Bb._Init.call(this,aArg);A.acg.Text._Init.call(this.
KH={I:this},0);C.AS$._Init.call(this.Uq={I:this},0);A.acg.AJ._Init.call(this.AP={
I:this},0);A.acg.AJ._Init.call(this.A9={I:this},0);this.__proto__=C.ABm;this.AP.
L(A.jb.Bc);this.A9.L(A.jb.Bc);this.J(this.KH,0);this.J(this.Uq,0);this.J(this.AP
,0);this.J(this.A9,0);this.KH.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(
){this.__proto__=C.Bb;this.KH._Done();this.Uq._Done();this.AP._Done();this.A9._Done(
);C.Bb._Done.call(this);},_ReInit:function(){C.Bb._ReInit.call(this);this.KH._ReInit(
);this.Uq._ReInit();this.AP._ReInit();this.A9._ReInit();this.KH.S(A.aaL(A.fl.Ah)
);},_Mark:function(D){var B;C.Bb._Mark.call(this,D);if((B=this.AF7)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.AS$={ATS:0,Init:function(aArg){},AN0:function(){return A._GetAutoObject(A.Device.
Helper).ApU(this.ATS);},AN2:function(){return this.AN0()+(this.Mp*86400);},BlR:function(
E){if(this.ATS===E)return;this.ATS=E;A.pe([this,this.Wm],this);},_Init:function(
aArg){C.Ahb._Init.call(this,aArg);this.__proto__=C.AS$;this.Bc.H(Bo3);this.BlO(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Dp:function(){if(this.K&&this.K.Dp)return this.K.
Dp.apply(this,arguments);else return C.FactoryResetScope.Bsw.apply(this,arguments
);},Bsw:function(){return 2;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.FactoryResetScopeToString.BP(this.C5(aIndex));},_Init:function(aArg
){C.CO._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.Co.
Set(0,0);this.Co.Set(1,1);var Lr=this._variants();if(Lr){this.K={};Lr._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.CO;this.FactoryResetScopeToString._Done();C.CO._Done.call(this);},_ReInit:function(
){C.CO._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.CO._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acr.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Be0:false,Init:function(
aArg){this.Be0=!!A._GetAutoObject(A.Device.Helper).W.TransponderId;},Eo:function(
G){if(this.Bcj){A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(A.Device.
Device).Ap);if(this.Be0)A._GetAutoObject(A.Device.Device).A5(106,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,null);else A._GetAutoObject(A.Device.Device
).A5(67,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.
Eo.call(this,G);},_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);this.__proto__=C.SetSaveTransponderScreen;this.Init(aArg);},_className:"Application::SetSaveTransponderScreen"
};C.ARj={We:function(G){this.Af5();A._GetAutoObject(C.Bz).Qq(A.aaR(A.acf.Settings
),[this,this.A2n]);A._GetAutoObject(C.Bz).Fu();this.ALh();A._GetAutoObject(C.Bz).
Nx(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.
Bz).Nx(A.aaR(A.acf.AMV)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cd(
6);},Dv:function(G){},Aa3:function(){return C.Ajd;},Aa4:function(){return C.Ajz;
},QY:function(G){A._GetAutoObject(A.Device.Device).Ap.Bh(A._GetAutoObject(A.Device.
Helper).ACg());},HJ:function(G){C.Rx.HJ.call(this,G);if(this.AjV()===false){this.
N.Cn(A.aaL(A.ach.AuZ));this.N.Ci=[this,this.AM_];this.N.FC(A.jV);}this.N.OG(false
);this.N.OH(false);},AfR:function(){A._GetAutoObject(C.AW).BS(52);},AfQ:function(
){A._GetAutoObject(C.AW).BS(53);},A2n:function(G){A._GetAutoObject(A.Device.Device
).Cd(0);A._GetAutoObject(C.AW).BS(101);},_Init:function(aArg){C.Rx._Init.call(this
,aArg);this.__proto__=C.ARj;this.Dl(C.ACy);this.Dt(A.aaR(A.acf.A6Y));this.ASl(A.
_GetAutoObject(C.Avs));},_ReInit:function(){C.Rx._ReInit.call(this);this.Dt(A.aaR(
A.acf.A6Y));},_className:"Application::NoTransponderListScreen"};C.ARi={_Init:function(
aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ARi;this.KP.Ar(false);this.KP.
Aj(false);this.KP.Y(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ARh={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.ARh;this.
N.BZ(A.aaR(A.acf.A4g));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.BZ(A.
aaR(A.acf.A4g));},_className:"Application::NoTransponderListActionsScreen"};C.ACy={
Eq:function(G){C.J$.Eq.call(this,G);this.Dc.Ay(A._GetAutoObject(A.Device.Converter
).Af$(8));},_Init:function(aArg){C.J$._Init.call(this,aArg);this.__proto__=C.ACy;
},_className:"Application::HeaderNoTransponderListFilter"};C.AA5={Auf:null,F$:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.Auf.BP(aIndex);},_Init:
function(aArg){C.FU._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.Auf={I:this},0);this.__proto__=C.AA5;},_Done:function(){this.__proto__=
C.FU;this.Auf._Done();C.FU._Done.call(this);},_ReInit:function(){C.FU._ReInit.call(
this);this.Auf._ReInit();},_Mark:function(D){var B;C.FU._Mark.call(this,D);if((B=
this.Auf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.ALc={Cj:null,AdB:null,Init:function(aArg){this.A8(this.Cj);},KJ:function(){if(
!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cw=[this,this.Xi];this.Bw.Ci=null;
this.Bw.Cc=[this,this.A12];this.Bw.BZ(A.jV);this.Bw.Cn(null);this.Bw.CT(A.aaL(A.
ach.Ad9));}return this.Bw;},AzO:function(G){var Aa=(C.AiY.isPrototypeOf(G)?G:null
);if(Aa===this.Cj)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.AdB)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A_Q);},_Init:function(aArg){C.Ff._Init.call(this,aArg);C.AiY._Init.call(this.
Cj={I:this},0);C.AiY._Init.call(this.AdB={I:this},0);this.__proto__=C.ALc;this.H(
Q$);this.Text.R(A.aaR(A.acf.ActionSettings));this.Cj.H(JR);this.Cj.U(A.aaR(A.acf.
ADt));this.AdB.H(P0);this.AdB.U(A.aaR(A.acf.Tl));this.J(this.Cj,0);this.J(this.AdB
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cj.AN=[this,this.AzO];this.AdB.AN=[this,this.
AzO];this.Init(aArg);},_Done:function(){this.__proto__=C.Ff;this.Cj._Done();this.
AdB._Done();C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.call(this);this.
Cj._ReInit();this.AdB._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Cj.
U(A.aaR(A.acf.ADt));this.AdB.U(A.aaR(A.acf.Tl));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Ff._Mark.call(this,D);if((B=this.Cj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AdB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BDD={Undefined:0,BDB:1,BDC:2,IdScanned:3,BCB:4,BBC:5,BCl:6};C.ALr={A98:function(
){A._GetAutoObject(A.Device.Device).A5(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BdM]);},_Init:function(aArg){C.At7._Init.call(
this,aArg);this.__proto__=C.ALr;this.FU.At(1);this.ASr(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Ad4={Vy:null,Vz:null,VA:null,AgA:null,AgB:null,AgC:null,Cw:null,Ci:null,Cc:null
,AnB:A.jV,AnC:A.jV,AnD:A.jV,Aqw:0,Aqx:0,Aqy:0,AgU:0,Zd:false,Zc:false,ArK:false,
Ar0:false,ArZ:false,Ajb:function(E5){this.Cw=E5.Cw;this.Ci=E5.Ci;this.Cc=E5.Cc;this.
AnB=E5.AnB;this.AnC=E5.AnC;this.AnD=E5.AnD;this.AgU=E5.AgU;this.Vy=E5.Vy;this.Vz=
E5.Vz;this.VA=E5.VA;this.AgA=E5.AgA;this.AgB=E5.AgB;this.AgC=E5.AgC;this.ArZ=E5.
ArZ;this.Ar0=E5.Ar0;this.ArK=E5.ArK;this.Zc=E5.Zc;this.Zd=E5.Zd;this.Aqw=E5.Aqw;
this.Aqx=E5.Aqx;this.Aqy=E5.Aqy;},Akr:function(E5){E5.Cw=this.Cw;E5.Ci=this.Ci;E5.
Cc=this.Cc;E5.Ho(this.AnB);E5.FC(this.AnC);E5.BZ(this.AnD);E5.AEv(this.AgU);E5.AEn(
this.Vy);E5.Arc(this.Vz);E5.Am_(this.VA);E5.CT(this.AgA);E5.Cn(this.AgB);E5.C3(this.
AgC);E5.OG(this.ArZ);E5.OH(this.Ar0);E5.ArK=this.ArK;E5.Zc=this.Zc;E5.Zd=this.Zd;
E5.Bk3(this.Aqw);E5.ASf(this.Aqx);E5.A8P(this.Aqy);},_Init:function(aArg){this.__proto__=
C.Ad4;this.Vy=A.aaL(A.fl.Ak);this.Vz=A.aaL(A.fl.Ak);this.VA=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.Vy=A.aaL(
A.fl.Ak);this.Vz=A.aaL(A.fl.Ak);this.VA=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.Vy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vz)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.VA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AgA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgB)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AgC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cw)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ci)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.ArW._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dl(C.ACw);},_className:"Application::NewAnimalSetTransponderScreen"};C.C4={AaN:null
,CountryToString:null,Dp:function(){return 40;},C5:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lo(aIndex);},DK:function(A2){return A2;
},Hl:function(){return 39;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.
AaN)(F=this.AaN,F[2].call(F[0],E));},A0t:function(G){var F;if(!!this.AaN)this.Q=(
F=this.AaN,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9,this.B_],0);},AEe:
function(E){if(A.aaZ(this.AaN,E))return;if(!!this.AaN)A.z$([this,this.A0t],this.
AaN,0);this.AaN=E;if(!!this.AaN)A.zX([this,this.A0t],this.AaN,0);A.pe([this,this.
A0t],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C4;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AaN)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OQ={AC:null,Q:null,Background:null,Ij:null,Ii:null,MY:
0,AK:0,Ge:0,FS:0,AfN:function(G){this.J0(this);},Bg:function(aSize){A.Core.O.Bg.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Ir=((Ae&0x40)===0x40);if(Ir){this.Background.
L(A.jb.AR);this.Dm(256);}else{this.Background.L(this.MY);this.Dm(256);}},AfM:function(
G){this.JV(this);},CH:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A2l],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A2l],E,0);if(!!E)A.pe([this
,this.A2l],this);},C2:function(E){if(this.MY===E)return;this.MY=E;this.Am();},J0:
function(G){var F;var BO=this.AK;this.Bx(this.AK+1);if(this.AK!==BO){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C5(this.AK)));A.abo(this.Q,0);}},JV:function(
G){var F;var BO=this.AK;this.Bx(this.AK-1);if(this.AK!==BO){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C5(this.AK)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Ge)E=this.FS;if(E>this.FS)E=this.Ge;if(this.AK===E)return;this.AK=E;
this.Am();},Gn:function(E){if(this.Ge===E)return;this.Ge=E;this.Am();},E1:function(
E){if(this.FS===E)return;this.FS=E;this.Am();},De:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DK((F=this.Q,F[1].call(F[0]))));},At:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.De],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.De],E,0);if(!!E)A.pe([this,this.De],this);},A2l:function(G){var F;if(!!this.
AC){this.Gn(0);this.E1(this.AC.Hl());if(!!this.Q)this.Bx(this.AC.DK((F=this.Q,F[
1].call(F[0]))));this.Am();}},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AJ._Init.call(this.Background={I:this},0);A.Core.BK._Init.call(this.Ij={
I:this},0);A.Core.BK._Init.call(this.Ii={I:this},0);this.__proto__=C.OQ;this.H(A_R
);this.Background.H(AsF);this.Ij.Filter=4;this.Ii.Filter=5;this.MY=A.jb.CG;this.
J(this.Background,0);this.Ij.BL=[this,this.AfN];this.Ij.DS=[this,this.AfN];this.
Ii.BL=[this,this.AfM];this.Ii.DS=[this,this.AfM];},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Ij._Done();this.Ii._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);this.Ij._ReInit();this.Ii._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ii)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.RE={A0l:A.jV,Ai:function(
Ae){C.Fk.Ai.call(this,Ae);this.U(A.aaR(A.acf.A4u));this.Ki(this.A0l);},Ce:function(
G){C.Fk.Ce.call(this,G);var Ak9=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Ak9)this.A0l=WT;else this.A0l=A._GetAutoObject(A.acj.KD).Ajs(Ak9);this.Am();
},_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.RE;},_className:
"Application::AnimalInfoItemCalvingDate"};C.RF={A1p:0,Ai:function(Ae){C.Fk.Ai.call(
this,Ae);this.U(A.aaR(A.acf.AQy));if(this.A1p>0)this.Ki(this.A1p.toFixed());else
this.Ki(A.aaR(A.acf.Unknown));},Ce:function(G){C.Fk.Ce.call(this,G);this.A1p=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.Am();},_Init:function(aArg){C.Fk._Init.call(
this,aArg);this.__proto__=C.RF;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dp:function(){return 5;
},C5:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BP(aIndex);},DK:function(A2){return A2;},Hl:function(){return 4;},At:function(E){
C.AC.At.call(this,E);if(!!this.Animal)this.Animal.Aj_(E);},A0M:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B9,
this.B_],0);},LU:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.A0M],[B=this.Animal,B.ARD,B.Aj_],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A0M],[B=this.Animal,B.ARD,B.Aj_],0);A.pe([this,this.A0M],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dp:function(){return 99;},C5:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BP(aIndex);},DK:function(A2){return A2;
},Hl:function(){return 98;},At:function(E){C.AC.At.call(this,E);if(!!this.Animal
)this.Animal.NR(E);},A0j:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B9,this.B_],0);},LU:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.A0j],[B=this.Animal,B.Avw,B.NR],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.A0j],[B=this.Animal,B.Avw,B.NR],0);A.pe([
this,this.A0j],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AQS={VN:null,Yp:null,Aej:null,Init:function(
aArg){this.A8(this.VN);},Ac9:function(G){var Aa=(C.Cj.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.Yp)this.Bwf();else if(Aa===this.VN)this.ByW(this);else throw new
Error(AxA);A._GetAutoObject(A.Device.Device).Cd(0);},ByW:function(G){var B;var F;
var U3=(C.Al3.isPrototypeOf(B=(F=A._GetAutoObject(C.AW).Q,F[1].call(F[0])))?B:null
);if(!U3){A.ab5("%s",Bo4);return;}U3.AJQ(this);},Bwf:function(){A._GetAutoObject(
A.Device.Helper).W.AFP(true);A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(
A.Device.Device).Ap);A._GetAutoObject(A.Device.Device).A5(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mh._Init.call(this.VN={I:this},0);C.Mh._Init.call(this.Yp={
I:this},0);C.Vs._Init.call(this.Aej={I:this},0);this.__proto__=C.AQS;var B;this.
H(Act);this.VN.H(P0);this.VN.Ar(true);this.VN.U(A.aaR(A.acf.A9O));this.VN.Bf(true
);this.Yp.H(JR);this.Yp.Ar(true);this.Yp.U(A.aaR(A.acf.A3J));this.Yp.Bf(true);this.
Aej.H(BD);this.Aej.U(A.aaR(A.acf.AB7));this.Aej.Bf(true);this.J(this.VN,0);this.
J(this.Yp,0);this.J(this.Aej,0);this.VN.AN=[this,this.Ac9];this.Yp.AN=[this,this.
Ac9];this.Aej.AR7([B=A._GetAutoObject(A.Device.Device),B.AqW,B.AsH]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.VN._Done();this.Yp._Done(
);this.Aej._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.VN._ReInit();this.Yp._ReInit();this.Aej._ReInit();this.VN.
U(A.aaR(A.acf.A9O));this.Yp.U(A.aaR(A.acf.A3J));this.Aej.U(A.aaR(A.acf.AB7));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aej)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.Vs={
Ai:function(Ae){C.T1.Ai.call(this,Ae);var FG=A.jb.CG;var GJ=A.jb.Text;if(this.Hb
){FG=A.jb.Text;GJ=A.jb.Bi;}if(!this.LA){this.Background.L(FG);this.V.L(A.jb.AmE);
}else if(this.Qh){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else if(this.Kx){
this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else{this.Background.L(FG);this.V.
L(GJ);}if(this.Amb){this.Mf.Cv(1);this.Mf.L(A.jb.H1);}else{this.Mf.Cv(0);this.Mf.
L(A.jb.Bi);}},_Init:function(aArg){C.T1._Init.call(this,aArg);this.__proto__=C.Vs;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.ADs={C6:null,FP:null,Fy:
null,AjW:null,QK:null,EC:null,AQ_:Lq,Bg:function(aSize){C.Cj.Bg.call(this,aSize);
var FG=A.jb.CG;var GJ=A.jb.Text;if(this.Hb){FG=A.jb.Bi;GJ=A.jb.Text;}this.Background.
L(FG);this.V.L(GJ);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CN;C.Cj.Ai.call(this
,Ae);this.AjW.L(this.V.AQ);this.QK.L(this.V.AQ);this.QK.R(Bo5);this.U(((this.AQ_+
A.aaR(A.acf.Colon))+CM)+A._GetAutoObject(A.Device.Helper).AkG(840003123456789).toFixed(
));if(!!this.FP&&!!this.Fy){var A1u=this.QK.AeP([(this.QK.String.length-(F=this.
Fy,F[1].call(F[0])))-(CN=this.FP,CN[1].call(CN[0])),0]);var A2M=this.QK.AeP([this.
QK.String.length-(F=this.Fy,F[1].call(F[0])),0]);var AAA=this.QK.Db();this.EC.H([
A1u[0]-1,AAA[1],A2M[0]+1,AAA[3]]);}else this.EC.H(this.QK.Db());},Dy:function(E){
if(this.C6===E)return;this.C6=E;this.AjW.Ay(E);},PH:function(E){if(A.aaZ(this.FP
,E))return;if(!!this.FP)A.z$([this,this.Aah],this.FP,0);this.FP=E;if(!!E)A.zX([this
,this.Aah],E,0);if(!!E)A.pe([this,this.Aah],this);},QS:function(E){if(A.aaZ(this.
Fy,E))return;if(!!this.Fy)A.z$([this,this.Aai],this.Fy,0);this.Fy=E;if(!!E)A.zX([
this,this.Aai],E,0);if(!!E)A.pe([this,this.Aai],this);},Aai:function(G){this.Am(
);},Aah:function(G){this.Am();},AEL:function(E){if(this.AQ_===E)return;this.AQ_=
E;this.Am();},_Init:function(aArg){C.Cj._Init.call(this,aArg);A.acg.An._Init.call(
this.AjW={I:this},0);A.acg.Text._Init.call(this.QK={I:this},0);A.acg.CA._Init.call(
this.EC={I:this},0);this.__proto__=C.ADs;this.H(JQ);this.V.A3(0x11);this.AjW.H(Q9
);this.QK.H(Bo6);this.EC.H(Bo7);this.EC.NV(2);this.EC.L(A.jb.ET);this.J(this.AjW
,0);this.J(this.QK,0);this.J(this.EC,0);this.QK.S(A.aaL(A.fl.Ah));},_Done:function(
){this.__proto__=C.Cj;this.AjW._Done();this.QK._Done();this.EC._Done();C.Cj._Done.
call(this);},_ReInit:function(){C.Cj._ReInit.call(this);this.AjW._ReInit();this.
QK._ReInit();this.EC._ReInit();this.QK.S(A.aaL(A.fl.Ah));},_Mark:function(D){var
B;C.Cj._Mark.call(this,D);if((B=this.C6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.FP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AjW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={HJ:function(
G){C.Tp.HJ.call(this,G);if(this.Ajw)this.N.Cn(A.aaL(A.ach.AD));else this.N.Cn(A.
aaL(A.ach.AMt));this.N.C3(A.aaL(A.ach.Options));this.N.FC(A.jV);this.N.BZ(A.jV);
this.N.Ci=[this,this.A9x];this.N.Cc=[this,this.We];this.N.Arc(A.aaL(A.fl.Ak));this.
N.Am_(A.aaL(A.fl.Ak));},MT:function(G){this.Bdr(this);},Og:function(G){this.ByR(
this);},Af4:function(P5,P6,Bvj){if(A._GetAutoObject(A.Device.Device).D2===Bvj)A.
_GetAutoObject(C.Bz).Adt(P5,P6,true);else A._GetAutoObject(C.Bz).Adt(P5,P6,false
);},We:function(G){if((A._GetAutoObject(A.Device.Device).D2===3)&&!this.Ajw){A._GetAutoObject(
C.Bz).Qq(A.aaR(A.acf.Bgl),[this,this.Bl7]);A._GetAutoObject(C.Bz).Fu();}this.Af4(
A.aaR(A.acf.Rating),[this,this.ASP],3);this.Af4(A.aaR(A.acf.Ae7),[this,this.ASR]
,2);this.Af4(A.aaR(A.acf.Temperature),[this,this.ASQ],1);this.Af4(A.aaR(A.acf.Xw
),[this,this.ASO],0);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(
A.acf.A41));A._GetAutoObject(A.Device.Device).Cd(6);},_Init:function(aArg){C.Tp.
_Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;},_className:"Application::AnimalSingleInfoScreen"
};C.AnimalMultiInfoScreen={Vd:null,Init:function(aArg){var B;A.zX([this,this.AfJ
],[B=A._GetAutoObject(A.Device.Device).Ap,B.Fz,B.FD],0);A.pe([this,this.Be4],this
);A.pe([this,this.QY],this);},Cx:function(G){C.Tp.Cx.call(this,G);A.pe([this,this.
Be_],this);},AFV:function(G){C.Tp.AFV.call(this,G);if(!!this.La)this.Ahe(this.La
,this.Vd);},HJ:function(G){C.Tp.HJ.call(this,G);this.N.Cn(A.aaL(A.ach.AP_));this.
N.C3(A.aaL(A.ach.AP$));if(this.Ajw)this.N.ASf(0);else this.N.ASf(1);this.N.A8P(A.
_GetAutoObject(A.Device.Converter).Bfx(A._GetAutoObject(A.Device.Device).D2));this.
N.FC(A.jV);this.N.BZ(A.jV);this.N.Ci=[this,this.BjV];this.N.Cc=[this,this.Bl9];this.
N.Arc(A.aaL(A.fl.Ak));this.N.Am_(A.aaL(A.fl.Ak));if(!A._GetAutoObject(A.Device.Device
).Ap.Qx()){this.N.IX.Dm(100);this.N.Ci=null;}else this.N.IX.Dm(255);if(!A._GetAutoObject(
A.Device.Device).Ap.Cb()){this.N.K$.Dm(100);this.N.Cc=null;}else this.N.K$.Dm(255
);if(A._GetAutoObject(A.Device.Device).Ap.Cb()<=1){this.N.TO.Dm(100);this.N.TP.Dm(
100);}else{this.N.TO.Dm(255);this.N.TP.Dm(255);}},MT:function(G){if(A._GetAutoObject(
A.Device.Device).Ap.Cb()<=1)return;var Lw=A._GetAutoObject(A.Device.Helper).W.CI;
Lw=Lw+1;if(Lw>=A._GetAutoObject(A.Device.Device).Ap.Cb())Lw=0;A._GetAutoObject(A.
Device.Helper).HF(Lw);},Og:function(G){if(A._GetAutoObject(A.Device.Device).Ap.Cb(
)<=1)return;var Lw=A._GetAutoObject(A.Device.Helper).W.CI;Lw=Lw-1;if(Lw<0)Lw=A._GetAutoObject(
A.Device.Device).Ap.Cb()-1;A._GetAutoObject(A.Device.Helper).HF(Lw);},Aio:function(
G){if(A._GetAutoObject(A.Device.Helper).W.Id>0)A._GetAutoObject(C.AW).BS(57);},BjV:
function(G){A._GetAutoObject(A.Device.Device).Cd(10);},Bl9:function(G){this.Bdr(
this);},QY:function(G){A._GetAutoObject(A.Device.Device).Ap.Bh(A._GetAutoObject(
A.Device.Helper).Mk());A.pe([this,this.Be_],this);},Be4:function(G){if(!A._GetAutoObject(
A.Device.Device).Ap.Cb()){this.Vd.Y(true);if(!A._GetAutoObject(A.Device.Device).
Ap.Qx()||!A._GetAutoObject(A.Device.Device).Ap.Filter)this.Vd.R(A.aaR(A.acf.ADB)
);else if(!A._GetAutoObject(A.Device.Device).Ap.Filter.DX(1,4)){if(A._GetAutoObject(
A.Device.Helper).ACh(A._GetAutoObject(A.Device.Device).Ap.Filter)===1)this.Vd.R(
A.aaR(A.acf.ANj));else this.Vd.R(A.aaR(A.acf.ANi));}else this.Vd.R(A.aaR(A.acf.ARf
));}else this.Vd.Y(false);},Be_:function(G){var BzP=A._GetAutoObject(A.Device.Helper
).W.Id;var A2P=A._GetAutoObject(A.Device.Device).Ap.K9(0,BzP);if(!A._GetAutoObject(
A.Device.Device).Ap.Cb())A._GetAutoObject(A.Device.Helper).HF(-1);else if(A2P<0)
A._GetAutoObject(A.Device.Helper).HF(0);},AfJ:function(G){this.Be4(this);this.HJ(
this);},_Init:function(aArg){C.Tp._Init.call(this,aArg);C.Aks._Init.call(this.Vd={
I:this},0);this.__proto__=C.AnimalMultiInfoScreen;this.Dl(C.AOK);this.Vd.H(E4);this.
J(this.Vd,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Tp;this.Vd._Done(
);C.Tp._Done.call(this);},_ReInit:function(){C.Tp._ReInit.call(this);this.Vd._ReInit(
);},_Mark:function(D){var B;C.Tp._Mark.call(this,D);if((B=this.Vd)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"};C.ALG={QF:null,VO:
null,Abj:null,Ys:null,Init:function(aArg){var B;var F;this.A8(this.QF);if(!!A._GetAutoObject(
C.AW).Q){var U3=(C.AnimalMultiInfoScreen.isPrototypeOf(B=(F=A._GetAutoObject(C.AW
).Q,F[1].call(F[0])))?B:null);if(!U3){A.ab5("%s",AYN);return;}else{if(U3.Ajw)this.
QF.U(A.aaR(A.acf.Be));else this.QF.U(A.aaR(A.acf.EK));var AyN=A._GetAutoObject(A.
Device.Device).Ap.Filter;if(!AyN||A._GetAutoObject(A.Device.Helper).AqD(AyN))this.
Ys.Ar(false);else if(!A._GetAutoObject(A.Device.Device).Ap.Cb()){this.VO.Ar(false
);this.QF.Ar(false);}}}},Ac9:function(G){var Aa=(C.Cj.isPrototypeOf(G)?G:null);if(
!Aa)return;A._GetAutoObject(A.Device.Device).Cd(0);if(Aa===this.Abj)A._GetAutoObject(
C.AW).BS(9);else if(Aa===this.VO)A._GetAutoObject(A.Device.Device).Cd(7);else if(
Aa===this.QF)this.BAf();else if(Aa===this.Ys)this.A0r();else throw new Error(AxA
);},BAf:function(){var B;var F;var U3=(C.AnimalMultiInfoScreen.isPrototypeOf(B=(
F=A._GetAutoObject(C.AW).Q,F[1].call(F[0])))?B:null);if(!U3){A.ab5("%s",AYN);return;
}U3.A9x(this);},A0r:function(){var B;var F;var U3=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.AW).Q,F[1].call(F[0])))?B:null);if(!U3){A.ab5("%s",AYN);
return;}U3.QY(this);},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.
Mh._Init.call(this.QF={I:this},0);C.Mh._Init.call(this.VO={I:this},0);C.Mh._Init.
call(this.Abj={I:this},0);C.Mh._Init.call(this.Ys={I:this},0);this.__proto__=C.ALG;
this.H(Aff);this.QF.H(ZQ);this.QF.Ar(true);this.QF.U(A.aaR(A.acf.EK));this.QF.Bf(
true);this.VO.H(P0);this.VO.Ar(true);this.VO.U(A.aaR(A.acf.ATu));this.VO.Bf(true
);this.Abj.H(JR);this.Abj.U(A.aaR(A.acf.Aku));this.Abj.Bf(true);this.Ys.H(BD);this.
Ys.U(A.aaR(A.acf.ABq));this.Ys.Bf(true);this.J(this.QF,0);this.J(this.VO,0);this.
J(this.Abj,0);this.J(this.Ys,0);this.QF.AN=[this,this.Ac9];this.VO.AN=[this,this.
Ac9];this.Abj.AN=[this,this.Ac9];this.Ys.AN=[this,this.Ac9];this.Init(aArg);},_Done:
function(){this.__proto__=C.OverlayMenu;this.QF._Done();this.VO._Done();this.Abj.
_Done();this.Ys._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.QF._ReInit();this.VO._ReInit();this.Abj._ReInit();this.Ys.
_ReInit();this.QF.U(A.aaR(A.acf.EK));this.VO.U(A.aaR(A.acf.ATu));this.Abj.U(A.aaR(
A.acf.Aku));this.Ys.U(A.aaR(A.acf.ABq));},_Mark:function(D){var B;C.OverlayMenu.
_Mark.call(this,D);if((B=this.QF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ys)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.MultiInfoActionsScreen={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.
__proto__=C.MultiInfoActionsScreen;this.N.BZ(A.aaR(A.acf.A4f));},_ReInit:function(
){C.Gy._ReInit.call(this);this.N.BZ(A.aaR(A.acf.A4f));},_className:"Application::MultiInfoActionsScreen"
};C.IY={TQ:null,Es:null,X5:null,Background:null,An:null,Ij:null,Ii:null,MY:0,AK:
0,Ai:function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10
);var Ir=((Ae&0x40)===0x40);if(Ir){this.Background.L(A.jb.AR);this.An.L(A.jb.Bi);
this.Dm(256);}else if(G6){this.Background.L(this.MY);this.An.L(A.jb.Text);this.Dm(
256);}else{this.Background.L(this.MY);this.An.L(A.jb.Text);this.Dm(128);}if(!this.
AK)this.An.Cv(0);else if(this.AK>0){if(A.aaZ(this.TQ,[B=A._GetAutoObject(A.Device.
Device),B.AvF,B.Ax8]))this.An.Cv(2);else if(A.aaZ(this.TQ,[B=A._GetAutoObject(A.
Device.Device),B.AvE,B.Ax7]))this.An.Cv(3);else if(!!this.X5&&((F=this.X5,F[1].call(
F[0]))===1))this.An.Cv(1);else this.An.Cv(0);}else if(A.aaZ(this.TQ,[B=A._GetAutoObject(
A.Device.Device),B.AvF,B.Ax8]))this.An.Cv(6);else if(A.aaZ(this.TQ,[B=A._GetAutoObject(
A.Device.Device),B.AvE,B.Ax7]))this.An.Cv(7);else if(!!this.X5&&((F=this.X5,F[1].
call(F[0]))===1))this.An.Cv(5);else this.An.Cv(4);},AfN:function(G){this.J0(this
);},AfM:function(G){this.JV(this);},J0:function(G){this.Bx(1);},JV:function(G){this.
Bx(-1);},Blb:function(E){if(A.aaZ(this.TQ,E))return;if(!!this.TQ)A.z$([this,this.
A18],this.TQ,0);this.TQ=E;if(!!E)A.zX([this,this.A18],this.TQ,0);A.pe([this,this.
A18],this);},T_:function(E){if(A.aaZ(this.Es,E))return;if(!!this.Es)A.z$([this,this.
AfL],this.Es,0);this.Es=E;if(!!E)A.zX([this,this.AfL],this.Es,0);if(!!E)A.pe([this
,this.AfL],this);},A18:function(G){var F;if(!!this.TQ)this.Bx((F=this.TQ,F[1].call(
F[0])));},AfL:function(G){A.pe([this,this.BAs],this);},C2:function(E){if(this.MY===
E)return;this.MY=E;this.Am();},Bx:function(E){var F;if(this.AK===E)return;this.AK=
E;if(!!this.TQ)(F=this.TQ,F[2].call(F[0],E));this.Am();A.abo([this,this.T7,this.
Bx],0);},A8F:function(E){if(A.aaZ(this.X5,E))return;if(!!this.X5)A.z$([this,this.
AfL],this.X5,0);this.X5=E;if(!!E)A.zX([this,this.AfL],this.X5,0);if(!!E)A.pe([this
,this.AfL],this);},BAs:function(G){var F,CN;if(!this.X5||!this.Es)return;this.Blb(
A._GetAutoObject(A.Device.Helper).BbY((F=this.X5,F[1].call(F[0])),(CN=this.Es,CN[
1].call(CN[0]))));this.Am();},T7:function(){return this.AK;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);
A.acg.An._Init.call(this.An={I:this},0);A.Core.BK._Init.call(this.Ij={I:this},0);
A.Core.BK._Init.call(this.Ii={I:this},0);this.__proto__=C.IY;this.H(AHR);this.Background.
AX(0x3F);this.Background.H(AHR);this.An.AX(0x3C);this.An.H(AHR);this.Ij.Filter=4;
this.Ii.Filter=5;this.MY=A.jb.CG;this.J(this.Background,0);this.J(this.An,0);this.
An.Ay(A.aaL(A.ach.ATU));this.Ij.BL=[this,this.AfN];this.Ii.BL=[this,this.AfM];},
_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.An._Done();
this.Ij._Done();this.Ii._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Background._ReInit();this.An._ReInit();this.Ij._ReInit(
);this.Ii._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.TQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Es)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.X5)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.An)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ii).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.ALb={We:function(G){var F;this.Af5();if(!!A._GetAutoObject(A.Device.Helper).
ANY((F=this.Fn,F[1].call(F[0])),0,true))this.ALj(A.aaR(A.acf.A5Z),[this,this.Bl_
],A._GetAutoObject(A.Device.Device).AlY);else A._GetAutoObject(C.Bz).Xv(A.aaR(A.
acf.A5Z));A._GetAutoObject(C.Bz).Fu();this.IR(A.aaR(A.acf.LinkTransponder),[this
,this.Blq],8);this.IR(A.aaR(A.acf.Tl),[this,this.Aj6],9);this.IR(A.aaR(A.acf.A_F
),[this,this.Bl0],10);this.IR(A.aaR(A.acf.AFs),[this,this.ASv],3);this.IR(A.aaR(
A.acf.AnA),[this,this.Awc],2);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).
Nx(A.aaR(A.acf.AlZ)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cd(6);
},Dv:function(G){},Aa3:function(){return C.Ajd;},Aa4:function(){return C.Ajz;},QY:
function(G){var F;A._GetAutoObject(A.Device.Device).Ap.Bh(A._GetAutoObject(A.Device.
Helper).A5B((F=this.Fn,F[1].call(F[0]))));},HJ:function(G){var F;C.GN.HJ.call(this
,G);if(this.AjV()===false){this.N.Cn(A._GetAutoObject(A.Device.Converter).Bfz((F=
this.Fn,F[1].call(F[0]))));this.N.Ci=[this,this.AIa];this.N.FC(A.jV);}this.N.OG(
false);this.N.OH(false);},AfR:function(){A._GetAutoObject(C.AW).BS(59);},AfQ:function(
){A._GetAutoObject(C.AW).BS(60);},A2b:function(G){C.GN.A2b.call(this,G);A.pe([this
,this.AZl],this);},Bl_:function(G){A._GetAutoObject(A.Device.Device).Cd(0);A._GetAutoObject(
A.Device.Device).AvL(!A._GetAutoObject(A.Device.Device).AlY);this.AnH(this);},AnH:
function(G){var F;var A$=A._GetAutoObject(A.Device.Device).Ap.Filter.GA();A._GetAutoObject(
A.Device.Helper).BmF(A$);if(A._GetAutoObject(A.Device.Device).AlY){var A09=A._GetAutoObject(
A.Device.Helper).ANY((F=this.Fn,F[1].call(F[0])),21600,true);A$.CY(A09);}A._GetAutoObject(
A.Device.Device).Ap.Bh(A$);},_Init:function(aArg){C.GN._Init.call(this,aArg);this.
__proto__=C.ALb;var B;this.Dt(A.aaR(A.acf.Avq));this.Av8([B=A._GetAutoObject(A.Device.
Device),B.A7e,B.A$C]);},_ReInit:function(){C.GN._ReInit.call(this);this.Dt(A.aaR(
A.acf.Avq));},_className:"Application::ActionListScreen"};C.ALa={_Init:function(
aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ALa;},_className:"Application::ActionListFilterScreen"
};C.AK$={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.AK$;this.
N.BZ(A.aaR(A.acf.A38));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.BZ(A.
aaR(A.acf.A38));},_className:"Application::ActionListActionsScreen"};C.AOK={IC:null
,IH:null,Bc:null,Mu:A.jV,Init:function(aArg){var B;A.zX([this,this.Ng],[B=A._GetAutoObject(
A.Device.Helper).W,B.A7S,B.A8_],0);A.zX([this,this.Ng],[B=A._GetAutoObject(A.Device.
Device).Ap,B.Fz,B.FD],0);},C9:function(E){C.IA.C9.call(this,E);this.IH.L(E);},Eq:
function(G){C.IA.Eq.call(this,G);var AyN=A._GetAutoObject(A.Device.Device).Ap.Filter;
if(!AyN||A._GetAutoObject(A.Device.Helper).AqD(AyN))this.IC.Y(false);else this.IC.
Y(true);if(A._GetAutoObject(A.Device.Helper).W.Aqn())this.Awj(((A._GetAutoObject(
A.Device.Helper).W.CI+1).toFixed()+A_S)+A._GetAutoObject(A.Device.Device).Ap.Cb(
).toFixed());else this.Awj(A_T);},Awj:function(E){if(this.Mu===E)return;this.Mu=
E;this.IH.R(E);},_Init:function(aArg){C.IA._Init.call(this,aArg);A.acg.An._Init.
call(this.IC={I:this},0);A.acg.Text._Init.call(this.IH={I:this},0);A.acg.DR._Init.
call(this.Bc={I:this},0);this.__proto__=C.AOK;this.HK.H(Bo8);this.CZ.H(Bo9);this.
IC.H(Bo_);this.IC.L(A.jb.Text);this.IH.H(A_U);this.IH.HH(2);this.IH.KL(true);this.
IH.A3(0x12);this.IH.R(A_V);this.Bc.DM(AxT);this.Bc.DY(AxU);this.Bc.L(A.jb.Bc);this.
J(this.IC,0);this.J(this.IH,0);this.J(this.Bc,0);this.IC.Ay(A.aaL(A.ach.Ad$));this.
IH.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.IA;this.
IC._Done();this.IH._Done();this.Bc._Done();C.IA._Done.call(this);},_ReInit:function(
){C.IA._ReInit.call(this);this.IC._ReInit();this.IH._ReInit();this.Bc._ReInit();
this.IH.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IA._Mark.call(this,D);if((
B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.Ar7={Text:null,Bg:function(aSize){C.OQ.Bg.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OQ.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(WT);else this.Text.R(this.AC.F$((F=this.Q,F[1].call(F[0]
))));var Ir=((Ae&0x40)===0x40);if(Ir)this.Text.L(A.jb.Bi);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OQ._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.Ar7;this.Text.R(Ra);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.OQ;this.Text._Done();C.OQ.
_Done.call(this);},_ReInit:function(){C.OQ._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.OQ._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.AqA={C6:null,Bg:function(aSize){C.OQ.Bg.call(this,aSize);this.C6.H(A.abK(this.
C6.M,aSize));},Ai:function(Ae){var B;var F;C.OQ.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C6.Ay(null);else{this.C6.Ay(this.AC.ACc(this.AC.DK((F=this.Q,F[1].call(F[
0])))));this.C6.Cv(this.AC.ACe(this.AC.DK((F=this.Q,F[1].call(F[0])))));}var Ir=((
Ae&0x40)===0x40);if(Ir)this.C6.L(A.jb.Bi);else this.C6.L(A.jb.Text);},_Init:function(
aArg){C.OQ._Init.call(this,aArg);A.acg.An._Init.call(this.C6={I:this},0);this.__proto__=
C.AqA;this.H(AHR);this.C6.H(A_R);this.J(this.C6,0);},_Done:function(){this.__proto__=
C.OQ;this.C6._Done();C.OQ._Done.call(this);},_ReInit:function(){C.OQ._ReInit.call(
this);this.C6._ReInit();},_Mark:function(D){var B;C.OQ._Mark.call(this,D);if((B=
this.C6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Aur={Vu:null,DirectionOfCountingToString:null,AdR:null,Dp:function(){return 2;
},C5:function(aIndex){if((aIndex<0)||(aIndex>=this.Dp()))return-1;return aIndex;
},F$:function(aIndex){if((aIndex<0)||(aIndex>=this.Dp()))return A.jV;return this.
DirectionOfCountingToString.BP(aIndex);},DK:function(A2){return A2;},Hl:function(
){return this.Dp()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Vu)(F=
this.Vu,F[2].call(F[0],E));},ACc:function(aIndex){if((aIndex<0)||(aIndex>=this.Dp(
)))return null;return this.AdR.Ar8(aIndex);},ACe:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dp()))return-1;return this.AdR.Ar9(aIndex);},A0F:function(G){var F;
if(!!this.Vu)this.Q=(F=this.Vu,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9
,this.B_],0);},Aex:function(E){if(A.aaZ(this.Vu,E))return;if(!!this.Vu)A.z$([this
,this.A0F],this.Vu,0);this.Vu=E;if(!!this.Vu)A.zX([this,this.A0F],this.Vu,0);A.pe([
this,this.A0F],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.AdR._Init.call(this.AdR={I:this},0);this.__proto__=C.Aur;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.AdR._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.AdR._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Vu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdR)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.ALy={Hj:null,Es:null,AnimalIdGenerationMethodToString:
null,Ady:null,Dp:function(){return 4;},C5:function(aIndex){var F;var A2=-1;if((aIndex<
0)||(aIndex>=this.Dp()))return-1;switch(aIndex){case 0:A2=0;break;case 1:A2=1;break;
case 2:A2=this.Bxq((F=this.Es,F[1].call(F[0])));break;case 3:A2=5;break;default:
throw new Error(Bo$+aIndex.toFixed());}return A2;},F$:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dp()))return A.jV;return this.AnimalIdGenerationMethodToString.
BP(this.C5(aIndex));},DK:function(A2){var aIndex=-1;switch(A2){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bpa+A2.toFixed());}return aIndex;},Hl:function(){return this.
Dp()-1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Hj)(F=this.Hj,F[2].
call(F[0],E));},ACc:function(aIndex){if((aIndex<0)||(aIndex>=this.Dp()))return null;
return this.Ady.Ar8(this.C5(aIndex));},ACe:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dp()))return-1;return this.Ady.Ar9(this.C5(aIndex));},AZ$:function(G){var F;
if(!!this.Hj)this.Q=(F=this.Hj,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9
,this.B_],0);},Bj3:function(E){if(A.aaZ(this.Hj,E))return;if(!!this.Hj)A.z$([this
,this.AZ$],this.Hj,0);this.Hj=E;if(!!this.Hj)A.zX([this,this.AZ$],this.Hj,0);A.pe([
this,this.AZ$],this);},T_:function(E){if(A.aaZ(this.Es,E))return;if(!!this.Es)A.
z$([this,this.AfL],this.Es,0);this.Es=E;if(!!this.Es)A.zX([this,this.AfL],this.Es
,0);A.pe([this,this.AfL],this);},AfL:function(G){A.pe([this,this.Bwh],this);},Bxq:
function(LY){var Rc=0;switch(LY){case 0:Rc=2;break;case 1:Rc=3;break;case 2:Rc=4;
break;default:throw new Error(Bpb+LY.toFixed());}return Rc;},Bwh:function(G){var
BcU=this.C5(this.DK(this.Q));if(this.Q!==BcU)this.At(BcU);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.Ady._Init.call(this.
Ady={I:this},0);this.__proto__=C.ALy;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.Ady._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.Ady._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Es)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ady)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AFR={Fw:null,Aaz:null,Q:null,Fb:null,E0:null,Hx:null,V9:null,A0:null,HU:null
,J8:null,A4:0,AK:0,Ak1:0,Init:function(aArg){var B;A.zX([this,this.Bc8],[B=A._GetAutoObject(
A.Device.Device),B.Am0,B.An_],0);},Ai:function(Ae){C.D_.Ai.call(this,Ae);if(this.
A4===1){if(this.Hb){this.A0.FB(A.jb.CG);this.Hx.C2(A.jb.CG);this.V9.C2(A.jb.CG);
this.Background.L(A.jb.C1);this.V.L(A.jb.Text);}else{this.A0.FB(A.jb.C1);this.Hx.
C2(A.jb.C1);this.V9.C2(A.jb.C1);this.Background.L(A.jb.CG);this.V.L(A.jb.Text);}
}else{if(this.Hb){this.A0.FB(A.jb.CG);this.Hx.C2(A.jb.CG);this.V9.C2(A.jb.CG);}else{
this.A0.FB(A.jb.C1);this.Hx.C2(A.jb.C1);this.V9.C2(A.jb.C1);}this.A8(null);}},IP:
function(G){C.D_.IP.call(this,G);if(!this.A4)this.FJ(this);else this.G5(this);},
DC:function(G){var F;if(!this.N)return;switch(this.A4){case 1:{(F=this.N,F[1].call(
F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(
F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(
F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;
default:this.Fw.Akr((F=this.N,F[1].call(F[0])));}},FJ:function(G){this.Ep(1);},G5:
function(G){this.Ep(0);},Ep:function(EE){var F;if(!this.A4&&!!this.N)this.Fw.Ajb((
F=this.N,F[1].call(F[0])));this.A4=EE;if(this.A4<0)this.A4=0;else if(this.A4>1)this.
A4=1;switch(this.A4){case 0:this.A8(null);break;case 1:{if(this.A0.A7x())this.A8(
this.A0);else this.A8(this.V9);if(!this.AK)this.A0.Sx(2);else this.A0.Sx(7);}break;
default:throw new Error(AsG+this.A4.toFixed());}this.DC(this);this.Am();},At:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.De],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},De:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.T7,this.
Bx],0);}},Bx:function(E){var F;if(this.AK===E)return;this.AK=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));},Og:function(G){this.AAr(2);},MT:function(G){this.AAr(
7);},AAr:function(Gq){var B;var AyO=(A.Core.O.isPrototypeOf(B=this.AR)?B:null);if(
!!AyO){var AzF=(A.Core.O.isPrototypeOf(B=this.R5(AyO,Gq,0x15))?B:null);if(!!AzF){
this.A8(AzF);return true;}}return false;},Aox:function(G){A.pe([this,this.Bc8],this
);},A2Z:function(G){var B;var F;if(!this.HU.Hj){this.J8.Aex(null);return;}switch((
F=this.HU.Hj,F[1].call(F[0]))){case 0:case 1:this.J8.Aex(null);break;case 3:this.
J8.Aex([B=A._GetAutoObject(A.Device.Device),B.ARB,B.AY5]);break;case 2:this.J8.Aex([
B=A._GetAutoObject(A.Device.Device),B.ARC,B.AY6]);break;case 4:case 5:this.J8.Aex([
B=A._GetAutoObject(A.Device.Device),B.ADP,B.AH2]);break;default:throw new Error(
Bpc+(F=this.HU.Hj,F[1].call(F[0])).toFixed());}},Bc8:function(G){var F;if(!this.
HU.Hj)return;A.pe([this,this.A2Z],this);var Ati=false;switch((F=this.HU.Hj,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{Ati=true;this.A0.A9q(-1);}break;case 0:
case 1:{Ati=false;this.A0.A9q(A._GetAutoObject(A.Device.Device).FP);}break;default:
throw new Error(AxM+(F=this.HU.Hj,F[1].call(F[0])).toFixed());}this.A0.Ar(Ati);this.
Hx.Ar(Ati);this.Hx.Y(Ati);if(((F=this.HU.Hj,F[1].call(F[0]))!==this.Ak1)||(Ati===
false)){var BO=this.AK;this.Bx(A._GetAutoObject(A.Device.Helper).ALw((F=this.HU.
Hj,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AK!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).BhO((F=this.HU.Hj,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.A0.Ke(A._GetAutoObject(A.Device.Device).FP);else this.A0.Ke(0);this.Ak1=(
F=this.HU.Hj,F[1].call(F[0]));},A8o:function(E){var B;if(this.Aaz===E)return;if(
!!this.Aaz){A.z$([this,this.Aox],[B=this.Aaz,B.Wc,B.JJ],0);A.z$([this,this.Aox],[
B=this.Aaz,B.Am4,B.Nb],0);A.z$([this,this.Aox],[B=this.Aaz,B.Aj3,B.NU],0);this.HU.
T_(null);}this.Aaz=E;if(!!E){A.zX([this,this.Aox],[B=this.Aaz,B.Wc,B.JJ],0);A.zX([
this,this.Aox],[B=this.Aaz,B.Am4,B.Nb],0);A.zX([this,this.Aox],[B=this.Aaz,B.Aj3
,B.NU],0);this.HU.T_([B=this.Aaz,B.Wc,B.JJ]);}if(!!E)A.pe([this,this.Aox],this);
},T7:function(){return this.AK;},_Init:function(aArg){C.D_._Init.call(this,aArg);
A.Core.BK._Init.call(this.Fb={I:this},0);A.Core.BK._Init.call(this.E0={I:this},0
);C.AqA._Init.call(this.Hx={I:this},0);C.AqA._Init.call(this.V9={I:this},0);C.Ave.
_Init.call(this.A0={I:this},0);C.ALy._Init.call(this.HU={I:this},0);C.Aur._Init.
call(this.J8={I:this},0);this.__proto__=C.AFR;var B;this.H(UI);this.V.Ar(false);
this.V.R(Asv);this.V.L(A.jb.Bi);this.Fb.Filter=6;this.E0.Filter=7;this.Hx.H(Bpd);
this.Hx.Ar(false);this.V9.H(Bpe);this.A0.H(Bpf);this.A0.Ar(false);this.J(this.Hx
,0);this.J(this.V9,0);this.J(this.A0,0);this.Fw=A._NewObject(C.Ad4,0);this.Fb.BL=[
this,this.Og];this.E0.BL=[this,this.MT];this.Hx.CH(this.J8);this.Hx.At([B=this.J8
,B.B9,B.B_]);this.V9.CH(this.HU);this.V9.At([B=this.HU,B.B9,B.B_]);this.A0.At([this
,this.T7,this.Bx]);this.HU.Bj3([B=A._GetAutoObject(A.Device.Device),B.Am0,B.An_]
);this.Init(aArg);},_Done:function(){this.__proto__=C.D_;this.Fb._Done();this.E0.
_Done();this.Hx._Done();this.V9._Done();this.A0._Done();this.HU._Done();this.J8.
_Done();C.D_._Done.call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.
Fb._ReInit();this.E0._ReInit();this.Hx._ReInit();this.V9._ReInit();this.A0._ReInit(
);this.HU._ReInit();this.J8._ReInit();},_Mark:function(D){var B;C.D_._Mark.call(
this,D);if((B=this.Fw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aaz)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V9)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HU).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.J8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.GS={Ay8:null,Fb:null,E0:null,GO:null,
FO:null,EC:null,M3:0,AMa:0,ABi:0,Uf:0,A_C:-1,AL$:false,Init:function(aArg){A.pe([
this,this.AZy],this);},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.EC.Y(this.
AL$);this.EC.H(A.wC(this.X_(this.ABi).M,this.X_((this.ABi+this.AMa)-1).M));},Og:
function(G){var DW=(A.Core.BK.isPrototypeOf(G)?G:null);var A0o=this.Bey(2);if(A0o===
false)DW.NC=true;},MT:function(G){var DW=(A.Core.BK.isPrototypeOf(G)?G:null);var
A0o=this.Bey(7);if(A0o===false)DW.NC=true;},Bey:function(Gq){var B;var Em=(C.DE.
isPrototypeOf(B=this.AR)?B:null);Em=this.Bb0(Em,Gq,true);if(!!Em){this.A8(Em);this.
Ay8=(C.DE.isPrototypeOf(B=this.AR)?B:null);return true;}return false;},Ac8:function(
G){A.ab5("%s",AkO);},GI:function(s){this.Ac8(s);},FB:function(E){if(this.M3===E)
return;this.M3=E;this.FO.C2(E);this.GO.C2(E);},Sx:function(Gq){var B;switch(Gq){
case 2:this.A8(this.GO);break;case 7:this.A8(this.FO);break;default:A.ab5("%s%e"
,Bpg,Gq);}this.Ay8=(C.DE.isPrototypeOf(B=this.AR)?B:null);},LI:function(G){},AZy:
function(s){this.LI(s);},AD_:function(E){if(this.AL$===E)return;this.AL$=E;this.
Am();},A8u:function(E){if(this.AMa===E)return;this.AMa=E;this.Am();},A8t:function(
E){if(this.ABi===E)return;this.ABi=E;this.Am();},X_:function(Hq){var B3=null;switch(
Hq){case-1:case 0:B3=this.FO;break;case 1:B3=this.GO;break;default:A.ab5("%s",AhD
);}return B3;},Ke:function(E){if(this.Uf===E)return;this.Uf=E;this.AlU();},AlU:function(
){A.ab5("%s",AkO);},Bb0:function(AcE,Gq,LA){var B;if(!!AcE){var A$;if(LA)A$=0x11;
else A$=0x0;switch(Gq){case 2:AcE=(C.DE.isPrototypeOf(B=this.Aqd(AcE,A$))?B:null
);break;case 7:AcE=(C.DE.isPrototypeOf(B=this.Vx(AcE,A$))?B:null);break;default:
throw new Error(Bph);}}return AcE;},A9q:function(E){if(this.A_C===E)return;this.
A_C=E;var Em=this.FO;var A0N;while(!!Em){A0N=!!E;Em.Ar(A0N);Em.Y(A0N);if(Em===this.
Ay8)this.A8(Em);Em=this.Bb0(Em,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BK._Init.call(this.Fb={I:this},0);A.Core.BK._Init.
call(this.E0={I:this},0);C.DE._Init.call(this.GO={I:this},0);C.DE._Init.call(this.
FO={I:this},0);A.acg.CA._Init.call(this.EC={I:this},0);this.__proto__=C.GS;this.
H(Bpi);this.Fb.Filter=6;this.E0.Filter=7;this.M3=A.jb.CG;this.GO.H(EW);this.FO.H(
A_W);this.EC.H(Bpj);this.EC.NV(2);this.EC.L(A.jb.ET);this.J(this.GO,0);this.J(this.
FO,0);this.J(this.EC,0);this.Fb.BL=[this,this.Og];this.Fb.DS=[this,this.Og];this.
E0.BL=[this,this.MT];this.E0.DS=[this,this.MT];this.Ay8=this.FO;this.GO.Dk=[this
,this.GI];this.FO.Dk=[this,this.GI];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Fb._Done();this.E0._Done();this.GO._Done();this.FO._Done();this.EC.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Fb._ReInit();this.E0._ReInit();this.GO._ReInit();this.FO._ReInit();this.EC.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ay8)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EC)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AQe={Dr:null,CR:null,Cp:null
,FB:function(E){if(this.M3===E)return;C.HB.FB.call(this,E);this.Cp.C2(E);this.CR.
C2(E);this.Dr.C2(E);},X_:function(Hq){var B3=null;switch(Hq){case-1:case 0:B3=this.
FO;break;case 1:B3=this.Cp;break;case 2:B3=this.CR;break;case 3:B3=this.Dr;break;
case 4:B3=this.GO;break;default:A.ab5("%s",AhD);}return B3;},_Init:function(aArg
){C.HB._Init.call(this,aArg);C.DE._Init.call(this.Dr={I:this},0);C.DE._Init.call(
this.CR={I:this},0);C.DE._Init.call(this.Cp={I:this},0);this.__proto__=C.AQe;this.
H(Bpk);this.GO.H(AsF);this.Dr.H(A_X);this.CR.H(A_Y);this.Cp.H(A_Z);this.FO.H(Bpl
);this.J(this.Dr,-2);this.J(this.CR,-2);this.J(this.Cp,-2);this.Dr.Dk=[this,this.
GI];this.CR.Dk=[this,this.GI];this.Cp.Dk=[this,this.GI];},_Done:function(){this.
__proto__=C.HB;this.Dr._Done();this.CR._Done();this.Cp._Done();C.HB._Done.call(this
);},_ReInit:function(){C.HB._ReInit.call(this);this.Dr._ReInit();this.CR._ReInit(
);this.Cp._ReInit();},_Mark:function(D){var B;C.HB._Mark.call(this,D);if((B=this.
Dr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AUt={Q1:null,Ack:null,AUs:0,Cx:function(G){this.Ack.Ar(true);},EV:function(G
){this.Ack.Ar(false);},BlY:function(E){if(this.AUs===E)return;this.AUs=E;this.Q1.
R((((A.aaR(A.acf.AUr)+ZT)+E.toFixed())+Bpm)+A.aaR(A.acf.K8));},BjP:function(){return this.
AUs;},Bza:function(G){A._GetAutoObject(C.AW).BS(3);A._GetAutoObject(A.Device.Device
).Am8(1);},_Init:function(aArg){C.XI._Init.call(this,aArg);C.CP._Init.call(this.
Q1={I:this},0);A.acl.Ga._Init.call(this.Ack={I:this},0);this.__proto__=C.AUt;this.
Aek.H(Bpn);this.Un.R(A.jV);this.Q1.H(Bpo);this.Q1.R(A.aaR(A.acf.AUr)+A_0);this.Q1.
L(A.jb.Text);this.Ack.HG(1);this.Ack.Fe(5000);this.Ack.B0=100;this.J(this.Q1,0);
this.Q1.S(A.aaL(A.fl.Ah));this.Q1.A7(A.aaL(A.fl.Ak));this.Q1.CB(A.aaL(A.fl.By));
this.Ack.Sm=[this,this.Bza];this.Ack.Q=[this,this.BjP,this.BlY];},_Done:function(
){this.__proto__=C.XI;this.Q1._Done();this.Ack._Done();C.XI._Done.call(this);},_ReInit:
function(){C.XI._ReInit.call(this);this.Q1._ReInit();this.Ack._ReInit();this.Q1.
R(A.aaR(A.acf.AUr)+A_0);this.Q1.S(A.aaL(A.fl.Ah));this.Q1.A7(A.aaL(A.fl.Ak));this.
Q1.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.XI._Mark.call(this,D);if((B=this.
Q1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ack)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.AQ5={KY:null,Lf:null,BcK:false,Init:
function(aArg){this.A8(this.C8);},Eo:function(G){var B;if(!!this.KY)this.KY.Eo(this
);C.V$.Eo.call(this,G);},AfO:function(G){var B;if(!!this.KY)this.KY.AfO(this);C.
V$.AfO.call(this,G);},Cx:function(G){var B;if(!this.BcK){this.BcK=true;A.pe([this
,this.A2t],this);}else if(!this.KY){this.KY=A._NewObject(C.AQ7,0);this.KY.A8D([this
,this.AAh]);this.LI(this);this.KY.LI(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Eo(this);else C.V$.Cx.call(this,G);}else C.V$.Cx.call(this,G
);},ApC:function(G){var B;if(!!this.KY)this.KY.ApC(this);},AAh:function(G){var B;
var F;this.LI(this);this.KY.LI(this);A.pe([this,this.Acx],this);var Bcm=this.LP;
this.Aev(A._GetAutoObject(A.Device.Helper).Aa1(A._GetAutoObject(A.Device.Helper).
W.AnimalType));A._GetAutoObject(A.Device.Helper).AUq(A._GetAutoObject(A.Device.Helper
).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,Bcm);if(Bcm)A._GetAutoObject(
A.Device.Helper).W.NU(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(
A.Device.Helper).W.Ud(A._GetAutoObject(A.Device.Helper).ALw((F=this.Dd.HU.Hj,F[1
].call(F[0])),A._GetAutoObject(A.Device.Helper).W));this.Jx(this.C8);},A2t:function(
G){A._GetAutoObject(C.AW).BS(90);},_Init:function(aArg){C.V$._Init.call(this,aArg
);C.Q0._Init.call(this.Lf={I:this},0);this.__proto__=C.AQ5;var B;this.Lf.H(AhA);
this.Lf.Aj(true);this.Lf.U(A.aaR(A.acf.ABH));this.J(this.Lf,-8);this.Kl(this.Gb,-
1);this.Lf.Gg([this,this.D3,this.GG]);this.Lf.At([B=A._GetAutoObject(A.Device.Helper
).W,B.ARL,B.Ane]);this.Init(aArg);},_Done:function(){this.__proto__=C.V$;this.Lf.
_Done();C.V$._Done.call(this);},_ReInit:function(){C.V$._ReInit.call(this);this.
Lf._ReInit();this.Lf.U(A.aaR(A.acf.ABH));},_Mark:function(D){var B;C.V$._Mark.call(
this,D);if((B=this.KY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lf)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalCalvingDataScreen"};C.
AC5={Agm:null,Agn:null,NF:null,NE:null,EQ:null,F_:null,Eh:null,Dr:null,CR:null,Cp:
null,FB:function(E){if(this.M3===E)return;C.Lb.FB.call(this,E);this.Cp.C2(E);this.
CR.C2(E);this.Dr.C2(E);this.Eh.C2(E);this.F_.C2(E);this.EQ.C2(E);this.NE.C2(E);this.
NF.C2(E);this.Agn.C2(E);this.Agm.C2(E);},X_:function(Hq){var B3=null;switch(Hq){
case-1:case 0:B3=this.FO;break;case 1:B3=this.Cp;break;case 2:B3=this.CR;break;case
3:B3=this.Dr;break;case 4:B3=this.Eh;break;case 5:B3=this.F_;break;case 6:B3=this.
EQ;break;case 7:B3=this.NE;break;case 8:B3=this.NF;break;case 9:B3=this.Agn;break;
case 10:B3=this.Agm;break;case 11:B3=this.GO;break;default:A.ab5("%s",AhD);}return B3;
},_Init:function(aArg){C.Lb._Init.call(this,aArg);C.DE._Init.call(this.Agm={I:this
},0);C.DE._Init.call(this.Agn={I:this},0);C.DE._Init.call(this.NF={I:this},0);C.
DE._Init.call(this.NE={I:this},0);C.DE._Init.call(this.EQ={I:this},0);C.DE._Init.
call(this.F_={I:this},0);C.DE._Init.call(this.Eh={I:this},0);C.DE._Init.call(this.
Dr={I:this},0);C.DE._Init.call(this.CR={I:this},0);C.DE._Init.call(this.Cp={I:this
},0);this.__proto__=C.AC5;this.H(Bpp);this.GO.H(AHS);this.Agm.H(AxX);this.Agn.H(
AYO);this.NF.H(AYP);this.NE.H(AYQ);this.EQ.H(AYR);this.F_.H(AYS);this.Eh.H(AYT);
this.Dr.H(A_1);this.CR.H(AYU);this.Cp.H(Bpq);this.FO.H(Bpr);this.J(this.Agm,-2);
this.J(this.Agn,-2);this.J(this.NF,-2);this.J(this.NE,-2);this.J(this.EQ,-2);this.
J(this.F_,-2);this.J(this.Eh,-2);this.J(this.Dr,-2);this.J(this.CR,-2);this.J(this.
Cp,-2);this.Agm.Dk=[this,this.GI];this.Agn.Dk=[this,this.GI];this.NF.Dk=[this,this.
GI];this.NE.Dk=[this,this.GI];this.EQ.Dk=[this,this.GI];this.F_.Dk=[this,this.GI
];this.Eh.Dk=[this,this.GI];this.Dr.Dk=[this,this.GI];this.CR.Dk=[this,this.GI];
this.Cp.Dk=[this,this.GI];},_Done:function(){this.__proto__=C.Lb;this.Agm._Done(
);this.Agn._Done();this.NF._Done();this.NE._Done();this.EQ._Done();this.F_._Done(
);this.Eh._Done();this.Dr._Done();this.CR._Done();this.Cp._Done();C.Lb._Done.call(
this);},_ReInit:function(){C.Lb._ReInit.call(this);this.Agm._ReInit();this.Agn._ReInit(
);this.NF._ReInit();this.NE._ReInit();this.EQ._ReInit();this.F_._ReInit();this.Eh.
_ReInit();this.Dr._ReInit();this.CR._ReInit();this.Cp._ReInit();},_Mark:function(
D){var B;C.Lb._Mark.call(this,D);if((B=this.Agm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Dr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber12"};C.HB={Q:null,AK:0,Ai:function(Ae){C.GS.Ai.call(this
,Ae);this.AlU();},Ac8:function(G){var B;var F;var KV=A.jV;var B3=this.GO;while(!
!B3){if(B3.E$>0)KV=KV+B3.E$.toFixed();else KV=KV+String.fromCharCode(0x30);B3=(C.
DE.isPrototypeOf(B=this.Vx(B3,0x11))?B:null);}var BO=this.AK;this.Bx(A.wz(KV,-1,
10));if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.
Q,0);}},LI:function(G){},AlU:function(){var B;var F;if(!!this.Q){var Em=this.FO;
var Add=this.Uf;var A2=(F=this.Q,F[1].call(F[0]));while(!!Em){if(A2>0){Em.M$(A2%
10);A2=(A2/10)|0;}else if(Add>0)Em.M$(0);else Em.M$(-1);Em=(C.DE.isPrototypeOf(B=
this.Aqd(Em,0x11))?B:null);Add=Add-1;}}},De:function(G){var F;if(!!this.Q)this.Bx((
F=this.Q,F[1].call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.De],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)
A.pe([this,this.De],this);},Bx:function(E){if(this.AK===E)return;this.AK=E;this.
Am();},_Init:function(aArg){C.GS._Init.call(this,aArg);this.__proto__=C.HB;},_Mark:
function(D){var B;C.GS._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);},_className:"Application::InputNumber2_32"};C.Lb={AK:0,Q:null
,Ai:function(Ae){C.GS.Ai.call(this,Ae);this.AlU();},Ac8:function(G){var B;var F;
var KV=A.jV;var B3=this.GO;while(!!B3){if(B3.E$>0)KV=KV+B3.E$.toFixed();else KV=
KV+String.fromCharCode(0x30);B3=(C.DE.isPrototypeOf(B=this.Vx(B3,0x11))?B:null);
}var BO=this.AK;this.Bx(A.ab0(KV,0,10));if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AK));A.abo(this.Q,0);}},LI:function(G){},AlU:function(){var B;
var F;if(!!this.Q){var Em=this.FO;var Add=this.Uf;var A2=(F=this.Q,F[1].call(F[0
]));while(!!Em){if(A2>0){Em.M$((A2%10)|0);A2=Math.trunc(A2/10);}else if(Add>0)Em.
M$(0);else Em.M$(-1);Em=(C.DE.isPrototypeOf(B=this.Aqd(Em,0x11))?B:null);Add=Add-
1;}}},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},At:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.De],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);},Bx:function(
E){if(this.AK===E)return;this.AK=E;this.Am();},_Init:function(aArg){C.GS._Init.call(
this,aArg);this.__proto__=C.Lb;},_Mark:function(D){var B;C.GS._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_64"
};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:null,Dp:function(){return 2;
},C5:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.EartagNrAssignmentModeToString.
BP(aIndex);},DK:function(A2){return A2;},Hl:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString._Init.call(
this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.Ave={Eh:null,Dr:null,CR:null,Cp:null,FB:function(E){if(this.M3===E)return;C.
HB.FB.call(this,E);this.Cp.C2(E);this.CR.C2(E);this.Dr.C2(E);this.Eh.C2(E);},X_:
function(Hq){var B3=null;switch(Hq){case-1:case 0:B3=this.FO;break;case 1:B3=this.
Cp;break;case 2:B3=this.CR;break;case 3:B3=this.Dr;break;case 4:B3=this.Eh;break;
case 5:B3=this.GO;break;default:A.ab5("%s",AhD);}return B3;},_Init:function(aArg
){C.HB._Init.call(this,aArg);C.DE._Init.call(this.Eh={I:this},0);C.DE._Init.call(
this.Dr={I:this},0);C.DE._Init.call(this.CR={I:this},0);C.DE._Init.call(this.Cp={
I:this},0);this.__proto__=C.Ave;this.H(AxE);this.GO.H(AG2);this.Eh.H(AG3);this.Dr.
H(AG4);this.CR.H(AG5);this.Cp.H(AG6);this.FO.H(AG7);this.EC.H(A_2);this.J(this.Eh
,-2);this.J(this.Dr,-2);this.J(this.CR,-2);this.J(this.Cp,-2);this.Eh.Dk=[this,this.
GI];this.Dr.Dk=[this,this.GI];this.CR.Dk=[this,this.GI];this.Cp.Dk=[this,this.GI
];},_Done:function(){this.__proto__=C.HB;this.Eh._Done();this.Dr._Done();this.CR.
_Done();this.Cp._Done();C.HB._Done.call(this);},_ReInit:function(){C.HB._ReInit.
call(this);this.Eh._ReInit();this.Dr._ReInit();this.CR._ReInit();this.Cp._ReInit(
);},_Mark:function(D){var B;C.HB._Mark.call(this,D);if((B=this.Eh)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.ATC={AttributeSet:null,Init:function(aArg){this.AttributeSet.
Bm4(0);this.AttributeSet.Bm5(1);this.AttributeSet.Bm6(4);},Ai:function(Ae){var B;
C.BW.Ai.call(this,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20);var Ir=((
Ae&0x40)===0x40);var Gt=this.Bl.Bv;var FG=A.jb.CG;var GJ=A.jb.Text;if(this.Hb){FG=
A.jb.Bi;GJ=A.jb.Text;}if(!G6){this.Background.L(A.jb.C1);this.V.L(A.jb.CG);this.
AttributeSet.Ag0(A.jb.CG);}else if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.
Bi);this.AttributeSet.Ag0(A.jb.Bi);}else if(Ir){this.Background.L(A.jb.AR);this.
V.L(A.jb.Bi);this.AttributeSet.Ag0(A.jb.Bi);}else if(Fh){this.Background.L(A.jb.
AmE);this.V.L(A.jb.Bi);this.AttributeSet.Ag0(A.jb.Bi);}else{this.Background.L(FG
);this.V.L(GJ);this.AttributeSet.Ag0(GJ);}this.LA=G6;this.Kx=Fh;this.Qh=Gt;this.
AoQ=Ir;},Hc:function(G){var B;var FW=this.Ds.GT;var Cy=(A.acg.Auc.isPrototypeOf(
B=this.Ds.Cf)?B:null);Cy.A8q(this.AttributeSet);Cy.A3(0x12);if(!Cy)return;if(!!this.
AC)Cy.R(this.Bxj(this.AC.F$(FW)));else Cy.R(WT);Cy.H(A.abK(Cy.M,[this.Ds.VT,(B=this.
Ds.M)[3]-B[1]]));},Bxj:function(BvI){var Az2=BvI;Az2=A._GetAutoObject(A.Device.Helper
).Ne(Az2,Bps,Bpt);Az2=A._GetAutoObject(A.Device.Helper).Ne(Az2,Bpu,Bpv);return Bpw+
Az2;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(
this.AttributeSet={I:this},0);this.__proto__=C.ATC;this.Ds.H(Bpx);this.Ds.Jn(2);
this.Ds.NS(A.acg.Auc);this.AttributeSet.Ag0(this.V.AQ);this.AttributeSet.BkV(A.aaL(
A.fl.ANO));this.AttributeSet.A8M(A.aaL(A.fl.Ak));this.AttributeSet.Ag3(A.aaL(A.fl.
Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.AttributeSet._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.AttributeSet.
_ReInit();this.AttributeSet.A8M(A.aaL(A.fl.Ak));this.AttributeSet.Ag3(A.aaL(A.fl.
Ak));},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AttributeSet).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupSpecialChars"
};C.NewAnimalsSetTransponderScreen={_Init:function(aArg){C.ArW._Init.call(this,aArg
);this.__proto__=C.NewAnimalsSetTransponderScreen;this.Dl(C.ACx);},_className:"Application::NewAnimalsSetTransponderScreen"
};C.ReasonOfLeaving={ReasonOfLeavingToString:null,Dp:function(){return 14;},C5:function(
aIndex){if((aIndex<0)||(aIndex>=14))return-1;return aIndex;},F$:function(aIndex){
if((aIndex<0)||(aIndex>=14))return A.jV;return this.ReasonOfLeavingToString.BP(aIndex
);},DK:function(A2){return A2;},Hl:function(){return 13;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OK={Fw:null,EnumToCodeset:
null,Jl:null,A4:0,Number:0,Ai:function(Ae){C.BW.Ai.call(this,Ae);if(this.A4===1){
if(this.Hb){this.Background.L(A.jb.C1);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CG);this.V.L(A.jb.Text);}}},Bx:function(E){C.BW.Bx.call(this,E);var Bya=this.
EnumToCodeset.Ame(this.Number);var BcT=this.AC.C5(this.AK);if(Bya!==BcT){this.AEM(
this.EnumToCodeset.AdV(BcT));A.abo([this,this.ARM,this.AEM],0);}},DC:function(G){
var F;if(!this.N)return;switch(this.A4){case 1:{(F=this.N,F[1].call(F[0])).CT(A.
aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[
this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(
A.jV);(F=this.N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(null);(F=
this.N,F[1].call(F[0])).BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}break;default:
this.Fw.Akr((F=this.N,F[1].call(F[0])));}},FJ:function(G){this.Ep(1);},G5:function(
G){this.Ep(0);},Ep:function(EE){var F;if(!this.A4)this.Fw.Ajb((F=this.N,F[1].call(
F[0])));this.A4=EE;if((this.A4<0)||(this.A4>1))this.A4=0;this.DC(this);if(!this.
A4)this.A8(null);else this.A00();this.Am();},AEM:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.Aqk()>E)E=this.EnumToCodeset.
Aqk();if(this.EnumToCodeset.Hl()<E)E=this.EnumToCodeset.Hl();}this.Number=E;var BO=
this.AK;if(!!this.EnumToCodeset){var Bw$=this.EnumToCodeset.Ame(E);this.Bx(this.
AC.DK(Bw$));if(this.AK!==BO){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C5(this.AK)));A.abo(this.Q,0);}}},Am9:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},US:function(G){this.Ep(this.A4+1);},A00:function(){A.ab5(
"%s",Bpy);},ARM:function(){return this.Number;},_Init:function(aArg){C.BW._Init.
call(this,aArg);A.Core.BK._Init.call(this.Jl={I:this},0);this.__proto__=C.OK;this.
Jl.Filter=1;this.Fw=A._NewObject(C.Ad4,0);this.Jl.BL=[this,this.US];},_Done:function(
){this.__proto__=C.BW;this.Jl._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.Jl._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(
this,D);if((B=this.Fw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.Aer={Text:null,Ai:function(
Ae){C.Ed.Ai.call(this,Ae);this.Text.L(this.AB_);},Bx:function(E){if(this.AK===E)
return;this.AK=E;this.Text.R(A._GetAutoObject(A.Device.Converter).SM(this.AK));this.
Am();},Aai:function(G){A.pe([this,this.AfK],this);},Aah:function(G){A.pe([this,this.
AfK],this);},Alw:function(G){A.pe([this,this.AfK],this);},AfK:function(G){if((!this.
Ib||!this.FP)||!this.Fy)return;},_Init:function(aArg){C.Ed._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Aer;this.Text.AX(0x3F
);this.Text.H(Asn);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Ed;this.Text._Done();C.Ed.
_Done.call(this);},_ReInit:function(){C.Ed._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(
D){var B;C.Ed._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AQY={Gx:0,C4:null,A0:null,EZ:null,
IY:null,CountryToString:null,K5:0,L4:false,Init:function(aArg){A.zX([this,this.MD
],[this,this.Sn,this.Lj],0);},Ai:function(Ae){C.Ed.Ai.call(this,Ae);this.IY.Y(this.
AeY);this.A0.FB(this.LL);this.EZ.C2(this.LL);this.IY.C2(this.LL);},DC:function(G
){var F;if(!this.N)return;switch(this.A4){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(
F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(
F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).BZ(this.CountryToString.BP(this.K5));(F=this.N,
F[1].call(F[0])).Cc=null;}break;default:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.
EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.
G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}}},Ep:function(EE){var Tc=this.
A4;this.A4=EE;if(this.A4<0)this.A4=0;else if(this.A4>this.Rs)this.A4=this.Rs;if((
this.A4===1)&&!this.AeY)this.A4=2;switch(this.A4){case 0:{this.A8(null);if(!this.
Gx)this.Lj(0);}break;case 1:this.A8(this.IY);break;case 2:this.A8(this.EZ);break;
case 3:{this.A8(this.A0);if(!this.Gx||(Tc>0))this.A0.Sx(2);else this.A0.Sx(7);}break;
default:throw new Error(AsG+this.A4.toFixed());}C.Ed.Ep.call(this,this.A4);},AoX:
function(G){this.IY.T_(this.Es);},Aai:function(G){var F;this.A0.A8t((F=this.Fy,F[
1].call(F[0])));},Aah:function(G){var F;this.A0.A8u((F=this.FP,F[1].call(F[0])));
},Bx:function(E){if(this.AK===E)return;this.AK=E;this.L4=true;this.So(A._GetAutoObject(
A.Device.Helper).TD(E,0,12));this.Lj(A._GetAutoObject(A.Device.Converter).Acf(E)
);this.L4=false;if(!!E)this.A0.Ke(12);else this.A0.Ke(0);this.Am();},Alw:function(
G){A.pe([this,this.AfK],this);},FJ:function(G){var F;if(!this.AK){var BO=this.AK;
this.Bx(A._GetAutoObject(A.Device.Helper).ACm());if(this.AK!==BO){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}this.Ep(3);},Ajt:function(){return this.
Gx;},Ajv:function(){return 999999999999;},Lj:function(E){if(this.K5===E)return;this.
K5=E;if(this.L4===false)A.pe([this,this.U5],this);A.abo([this,this.Sn,this.Lj],0
);},So:function(E){if(this.Gx===E)return;this.Gx=E;if(this.L4===false)A.pe([this
,this.U5],this);A.abo([this,this.AbA,this.So],0);},U5:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).Ap3(this.K5),3,10)+A.abm(this.Gx,12,10
);var BO=this.AK;this.Bx(A.ab0(aString,0,10));if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},AfK:function(G){var F;if((!this.Ib||
!this.FP)||!this.Fy)return;if(!(F=this.Ib,F[1].call(F[0])))this.A0.AD_(true);else
this.A0.AD_(false);},Sn:function(){return this.K5;},AbA:function(){return this.Gx;
},_Init:function(aArg){C.Ed._Init.call(this,aArg);C.C4._Init.call(this.C4={I:this
},0);C.AC5._Init.call(this.A0={I:this},0);C.Ar7._Init.call(this.EZ={I:this},0);C.
IY._Init.call(this.IY={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AQY;var B;this.Rs=3;this.A0.H(Bpz);this.EZ.H(A_3);this.
IY.H(A_4);this.J(this.A0,0);this.J(this.EZ,0);this.J(this.IY,0);this.C4.AEe([this
,this.Sn,this.Lj]);this.A0.At([this,this.AbA,this.So]);this.EZ.CH(this.C4);this.
EZ.At([B=this.C4,B.B9,B.B_]);this.IY.A8F([B=A._GetAutoObject(A.Device.Device),B.
AvA,B.Ax4]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ed;this.C4._Done(
);this.A0._Done();this.EZ._Done();this.IY._Done();this.CountryToString._Done();C.
Ed._Done.call(this);},_ReInit:function(){C.Ed._ReInit.call(this);this.C4._ReInit(
);this.A0._ReInit();this.EZ._ReInit();this.IY._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Ed._Mark.call(this,D);if((B=this.C4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AQX={Gx:0,C4:null,A0:null,Yi:null,Ka:null,EZ:null,IY:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pm:0,K5:0,L4:false,Init:function(aArg){A.
zX([this,this.MD],[this,this.PG,this.DT],0);A.zX([this,this.MD],[this,this.Sn,this.
Lj],0);A.zX([this,this.MD],[this,this.Am2,this.Ag4],0);},Ai:function(Ae){C.Ed.Ai.
call(this,Ae);this.IY.Y(this.AeY);this.A0.FB(this.LL);this.Yi.FB(this.LL);this.Ka.
FB(this.LL);this.EZ.C2(this.LL);this.IY.C2(this.LL);},DC:function(G){var F;if(!this.
N)return;switch(this.A4){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CT(A.aaL(
A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this
,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV
);(F=this.N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.
N,F[1].call(F[0])).BZ(this.CountryToString.BP(this.K5));(F=this.N,F[1].call(F[0]
)).Cc=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.
N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G5];(F=this.
N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).BZ(((A.aaR(A.acf.AF0)+A.aaR(A.acf.Colon))+ZT)+A.aaR(A.
acf.BfU));break;case 1:(F=this.N,F[1].call(F[0])).BZ(((A.aaR(A.acf.AF0)+A.aaR(A.
acf.Colon))+ZT)+A.aaR(A.acf.Bm$));break;case 2:(F=this.N,F[1].call(F[0])).BZ(((A.
aaR(A.acf.AF0)+A.aaR(A.acf.Colon))+ZT)+A.aaR(A.acf.BgJ));break;default:(F=this.N
,F[1].call(F[0])).BZ(((A.aaR(A.acf.AF0)+A.aaR(A.acf.Colon))+ZT)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cc=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0]
)).Cw=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0
])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(null
);(F=this.N,F[1].call(F[0])).BZ((A.aaR(A.acf.Go)+Axt)+this.GermanStateToString.Lo(
A._GetAutoObject(A.Device.Converter).ACb(this.Pm)));(F=this.N,F[1].call(F[0])).Cc=
null;}break;default:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[
1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G5];(F=this.N,F[
1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).BZ(
A.jV);(F=this.N,F[1].call(F[0])).Cc=null;}}},Ep:function(EE){var Tc=this.A4;if(EE<
0)EE=0;else if(EE>this.Rs)EE=this.Rs;if((EE===1)&&!this.AeY)EE=2;switch(EE){case
0:{this.A8(null);if((!this.Gx&&!this.AnimalType)&&!this.Pm)this.Lj(0);}break;case
1:this.A8(this.IY);break;case 2:this.A8(this.EZ);break;case 3:if(!Tc)A.pe([this,
this.Bzp],this);else this.A8(this.Yi);break;case 4:this.A8(this.Ka);break;case 5:
if(((Tc===4)&&!this.Pm)&&!this.Gx)return;else{this.A8(this.A0);if(!this.Gx||(Tc>
0))this.A0.Sx(2);else this.A0.Sx(7);}break;default:throw new Error(AsG+EE.toFixed(
));}this.A4=EE;C.Ed.Ep.call(this,this.A4);},Bx:function(E){if(this.AK===E)return;
this.AK=E;this.L4=true;this.So(A._GetAutoObject(A.Device.Helper).TD(E,0,8));this.
Ag4(A._GetAutoObject(A.Device.Helper).TD(E,8,2)|0);this.DT(A._GetAutoObject(A.Device.
Helper).TD(E,10,2)|0);this.Lj(A._GetAutoObject(A.Device.Converter).Acf(E));this.
L4=false;if(!!this.AK){this.Yi.Ke(2);this.Ka.Ke(2);this.A0.Ke(8);}else{this.Yi.Ke(
0);this.Ka.Ke(0);this.A0.Ke(0);}this.Am();},AoX:function(G){this.IY.T_(this.Es);
},Aai:function(G){var F;this.A0.A8t((F=this.Fy,F[1].call(F[0])));},Aah:function(
G){var F;this.A0.A8u((F=this.FP,F[1].call(F[0])));},Alw:function(G){A.pe([this,this.
AfK],this);},FJ:function(G){var F;if(!this.AK){var BO=this.AK;this.Bx(A._GetAutoObject(
A.Device.Helper).ACm());if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AK));A.abo(this.Q,0);}this.Ep(3);}else this.Ep(this.Rs);},Ajt:function(){return this.
Gx;},Ajv:function(){return 99999999;},Lj:function(E){if(this.K5===E)return;this.
K5=E;if(this.L4===false)A.pe([this,this.U5],this);A.abo([this,this.Sn,this.Lj],0
);},So:function(E){if(this.Gx===E)return;this.Gx=E;if(this.L4===false)A.pe([this
,this.U5],this);A.abo([this,this.AbA,this.So],0);},U5:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).Ap3(this.K5),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pm,2,10))+A.abm(this.Gx,8,10);var BO=this.AK;this.Bx(A.ab0(aString
,0,10));if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.
Q,0);}},AfK:function(G){var F;if((!this.Ib||!this.FP)||!this.Fy)return;if(!(F=this.
Ib,F[1].call(F[0])))this.A0.AD_(true);else this.A0.AD_(false);},DT:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L4===false)A.pe([this,this.
U5],this);A.abo([this,this.PG,this.DT],0);},Ag4:function(E){if(this.Pm===E)return;
this.Pm=E;if(this.L4===false)A.pe([this,this.U5],this);A.abo([this,this.Am2,this.
Ag4],0);},Bzp:function(G){var F;if(!!this.JC){var H8=(F=this.JC,F[1].call(F[0]));
var A0a=0;switch(H8){case 0:case 1:A0a=0;break;case 2:A0a=1;break;default:A.ab5(
"%s%e",Aso,H8);}this.DT(A0a);}if(!this.Pm)this.Ep(4);else this.Ep(5);},Sn:function(
){return this.K5;},AbA:function(){return this.Gx;},PG:function(){return this.AnimalType;
},Am2:function(){return this.Pm;},_Init:function(aArg){C.Ed._Init.call(this,aArg
);C.C4._Init.call(this.C4={I:this},0);C.AQf._Init.call(this.A0={I:this},0);C.Avd.
_Init.call(this.Yi={I:this},0);C.Avd._Init.call(this.Ka={I:this},0);C.Ar7._Init.
call(this.EZ={I:this},0);C.IY._Init.call(this.IY={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AQX;var B;this.Rs=5;this.A0.H(
BpA);this.Yi.H(BpB);this.Yi.E1(2);this.Ka.H(BpC);this.Ka.E1(16);this.EZ.H(A_3);this.
IY.H(A_4);this.J(this.A0,0);this.J(this.Yi,0);this.J(this.Ka,0);this.J(this.EZ,0
);this.J(this.IY,0);this.C4.AEe([this,this.Sn,this.Lj]);this.A0.At([this,this.AbA
,this.So]);this.Yi.At([this,this.PG,this.DT]);this.Ka.At([this,this.Am2,this.Ag4
]);this.EZ.CH(this.C4);this.EZ.At([B=this.C4,B.B9,B.B_]);this.IY.A8F([B=A._GetAutoObject(
A.Device.Device),B.AvA,B.Ax4]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ed;this.C4._Done();this.A0._Done();this.Yi._Done();this.Ka._Done();this.EZ._Done(
);this.IY._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Ed._Done.call(this);},_ReInit:function(){C.Ed._ReInit.call(this);this.C4._ReInit(
);this.A0._ReInit();this.Yi._ReInit();this.Ka._ReInit();this.EZ._ReInit();this.IY.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Ed._Mark.call(this,D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yi)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ka)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Ed={AK:0,AvK:null,Oy:null,
Q:null,Es:null,FP:null,Fy:null,Ib:null,N:null,JC:null,Fb:null,E0:null,AB_:0,LL:0
,A4:0,Rs:0,AeY:true,Init:function(aArg){A.pe([this,this.LI],this);},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);if(!this.A4)this.A8(null);},BkX:function(E){if(this.
AB_===E)return;this.AB_=E;this.Am();},AbG:function(E){if(this.LL===E)return;this.
LL=E;this.Am();},DC:function(G){A.ab5("%s",AkO);},MD:function(s){this.DC(s);},Ep:
function(EE){A.pe([this,this.MD],this);A.pe(this.AvK,this);if(!EE)A.pe(this.Oy,this
);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.De],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],this);}
,De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",An9);},Og:function(G){if(this.A4>1)this.Ep(this.A4-1);},MT:function(
G){if((this.A4>0)&&(this.A4<this.Rs))this.Ep(this.A4+1);},T_:function(E){if(A.aaZ(
this.Es,E))return;if(!!this.Es)A.z$([this,this.AZp],this.Es,0);this.Es=E;if(!!E)
A.zX([this,this.AZp],this.Es,0);A.pe([this,this.AZp],this);},AoX:function(G){},AZp:
function(s){this.AoX(s);},PH:function(E){if(A.aaZ(this.FP,E))return;if(!!this.FP
)A.z$([this,this.AZt],this.FP,0);this.FP=E;if(!!E)A.zX([this,this.AZt],E,0);if(!
!E)A.pe([this,this.AZt],this);},QS:function(E){if(A.aaZ(this.Fy,E))return;if(!!this.
Fy)A.z$([this,this.AZv],this.Fy,0);this.Fy=E;if(!!E)A.zX([this,this.AZv],E,0);if(
!!E)A.pe([this,this.AZv],this);},Aai:function(G){},AZv:function(s){this.Aai(s);}
,Aah:function(G){},AZt:function(s){this.Aah(s);},T8:function(E){if(A.aaZ(this.Ib
,E))return;if(!!this.Ib)A.z$([this,this.AZs],this.Ib,0);this.Ib=E;if(!!E)A.zX([this
,this.AZs],E,0);if(!!E)A.pe([this,this.AZs],this);},Alw:function(G){},AZs:function(
s){this.Alw(s);},FJ:function(G){A.ab5("%s",A_5);},BEr:function(s){this.FJ(s);},G5:
function(G){this.Ep(0);},Ajt:function(){A.ab5("%s",An9);return 0;},Ajv:function(
){A.ab5("%s",An9);return 0;},LI:function(G){},Am7:function(E){if(A.aaZ(this.JC,E
))return;if(!!this.JC)A.z$([this,this.Aow],this.JC,0);this.JC=E;if(!!E)A.zX([this
,this.Aow],this.JC,0);A.pe([this,this.Aow],this);},Aow:function(G){},AEt:function(
E){if(A.aa0(this.Oy,E))return;this.Oy=E;},AEX:function(E){if(this.AeY===E)return;
this.AeY=E;this.Am();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
BK._Init.call(this.Fb={I:this},0);A.Core.BK._Init.call(this.E0={I:this},0);this.
__proto__=C.Ed;this.H(Asn);this.AB_=A.jb.Text;this.LL=A.jb.C1;this.Fb.Filter=6;this.
E0.Filter=7;this.Fb.BL=[this,this.Og];this.E0.BL=[this,this.MT];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.Fb._Done();this.E0._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Fb._ReInit(
);this.E0._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AvK)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Oy)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Es)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FP)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fy)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Ib)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JC)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NaisID"};C.Q0={AK:0,Dj:null,Fw:
null,Oy:null,Es:null,FP:null,Fy:null,Ib:null,Q:null,JC:null,ADz:-1,AeY:true,ANh:
false,AS2:false,ArG:true,Init:function(aArg){A.pe([this,this.AAL],this);},Ai:function(
Ae){C.D_.Ai.call(this,Ae);if(!this.Dj)return;if(this.Dj.A4>0){if(this.Hb){this.Dj.
AbG(A.jb.CG);this.Background.L(A.jb.C1);this.V.L(A.jb.Text);}else{this.Dj.AbG(A.
jb.C1);this.Background.L(A.jb.CG);this.V.L(A.jb.Text);}}else{if(this.Hb)this.Dj.
AbG(A.jb.CG);else this.Dj.AbG(A.jb.C1);this.Dj.BkX(this.V.AQ);}},IP:function(G){
C.D_.IP.call(this,G);if(!this.Dj)return;if(!this.Dj.A4)this.FJ(this);else this.G5(
this);},Gg:function(E){C.D_.Gg.call(this,E);if(!!this.Dj)this.Dj.N=E;},T_:function(
E){if(A.aaZ(this.Es,E))return;if(!!this.Es)A.z$([this,this.AoX],this.Es,0);this.
Es=E;if(!!E)A.zX([this,this.AoX],this.Es,0);A.pe([this,this.AoX],this);},AoX:function(
G){if(!!this.Dj)this.Dj.T_(this.Es);},PH:function(E){if(A.aaZ(this.FP,E))return;
this.FP=E;if(!!this.Dj)this.Dj.PH(E);},QS:function(E){if(A.aaZ(this.Fy,E))return;
this.Fy=E;if(!!this.Dj)this.Dj.QS(E);},T8:function(E){if(A.aaZ(this.Ib,E))return;
this.Ib=E;if(!!this.Dj)this.Dj.T8(E);},BzV:function(G){var AzK=0;if(!!this.Dj){AzK=
this.Dj.A4;this.Dj.N=null;this.HI(this.Dj);}switch(this.ADz){case 0:this.Dj=A._NewObject(
C.Aer,0);break;case 1:this.Dj=A._NewObject(C.AQY,0);break;case 2:this.Dj=A._NewObject(
C.AQX,0);break;case 3:this.Dj=A._NewObject(C.AS4,0);break;case 4:this.Dj=A._NewObject(
C.AS3,0);break;case 5:this.Dj=A._NewObject(C.AQZ,0);break;default:throw new Error(
BpD+this.ADz.toFixed());}this.J(this.Dj,0);this.Dj.Am7(this.JC);this.Dj.H(BpE);this.
Dj.N=this.N;this.Dj.T_(this.Es);this.Dj.AvK=[this,this.AvK];this.Dj.At([this,this.
T7,this.Bx]);this.Dj.T8(this.Ib);this.Dj.PH(this.FP);this.Dj.QS(this.Fy);this.Dj.
AEt(this.Oy);this.Dj.AEX(this.AeY);if(AzK>0)this.Dj.Ep(AzK);this.A8(this.Dj);this.
Am();},FJ:function(G){var B;var F;if(!!this.Dj){if(!!this.N)this.Fw.Ajb((F=this.
N,F[1].call(F[0])));else this.Fw=A._NewObject(C.Ad4,0);this.Dj.FJ(this);}},G5:function(
G){var B;if(!!this.Dj)this.Dj.G5(this);},Ajt:function(){if(!this.Dj)return 0;return this.
Dj.Ajt();},Ajv:function(){if(!this.Dj)return 0;return this.Dj.Ajv();},De:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.T7,this.
Bx],0);}},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.De
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De],
this);},Bx:function(E){var F;if(this.AK===E)return;this.AK=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);A.pe([this,this.AAL],this);},Blx:function(
E){if(this.ADz===E)return;this.ADz=E;A.pe([this,this.BzV],this);},Arm:function(E
){if(this.ArG===E)return;this.ArG=E;A.pe([this,this.AAL],this);},AAL:function(G){
var Ao8;if(this.ArG){if(this.ANh)Ao8=5;else Ao8=0;}else if(this.AS2){if(A._GetAutoObject(
A.Device.Converter).Acf(this.AK)===10)Ao8=4;else Ao8=3;}else if(A._GetAutoObject(
A.Device.Converter).Acf(this.AK)===10)Ao8=2;else Ao8=1;this.Blx(Ao8);},AvK:function(
G){var F;if((!!this.N&&!!this.Dj)&&!this.Dj.A4)this.Fw.Akr((F=this.N,F[1].call(F[
0])));this.Am();},Am7:function(E){if(A.aaZ(this.JC,E))return;if(!!this.JC)A.z$([
this,this.Aow],this.JC,0);this.JC=E;if(!!E)A.zX([this,this.Aow],this.JC,0);A.pe([
this,this.Aow],this);},Aow:function(G){if(!!this.Dj)this.Dj.Am7(this.JC);},A87:function(
E){if(this.AS2===E)return;this.AS2=E;A.pe([this,this.AAL],this);},Bkt:function(E
){if(this.ANh===E)return;this.ANh=E;A.pe([this,this.AAL],this);},AEt:function(E){
if(A.aa0(this.Oy,E))return;this.Oy=E;if(!!this.Dj)this.Dj.AEt(E);},AEX:function(
E){if(this.AeY===E)return;this.AeY=E;if(!!this.Dj)this.Dj.AEX(E);},T7:function(){
return this.AK;},_Init:function(aArg){C.D_._Init.call(this,aArg);this.__proto__=
C.Q0;this.H(UI);this.V.R(Asv);this.V.L(A.jb.Bi);this.Fw=A._NewObject(C.Ad4,0);this.
Init(aArg);},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.Dj)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Fw)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Oy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Es)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FP)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Fy)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ib
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AQf={EQ:null,F_:null,Eh:null,Dr:null,CR:null
,Cp:null,FB:function(E){if(this.M3===E)return;C.Lb.FB.call(this,E);this.Cp.C2(E);
this.CR.C2(E);this.Dr.C2(E);this.Eh.C2(E);this.F_.C2(E);this.EQ.C2(E);},X_:function(
Hq){var B3=null;switch(Hq){case-1:case 0:B3=this.FO;break;case 1:B3=this.Cp;break;
case 2:B3=this.CR;break;case 3:B3=this.Dr;break;case 4:B3=this.Eh;break;case 5:B3=
this.F_;break;case 6:B3=this.EQ;break;case 7:B3=this.GO;break;default:A.ab5("%s"
,AhD);}return B3;},_Init:function(aArg){C.Lb._Init.call(this,aArg);C.DE._Init.call(
this.EQ={I:this},0);C.DE._Init.call(this.F_={I:this},0);C.DE._Init.call(this.Eh={
I:this},0);C.DE._Init.call(this.Dr={I:this},0);C.DE._Init.call(this.CR={I:this},
0);C.DE._Init.call(this.Cp={I:this},0);this.__proto__=C.AQf;this.H(BpF);this.GO.
H(AHS);this.EQ.H(AxX);this.F_.H(AYO);this.Eh.H(AYP);this.Dr.H(AYQ);this.CR.H(AYR
);this.Cp.H(AYS);this.FO.H(AYT);this.EC.H(A_2);this.J(this.EQ,-2);this.J(this.F_
,-2);this.J(this.Eh,-2);this.J(this.Dr,-2);this.J(this.CR,-2);this.J(this.Cp,-2);
this.EQ.Dk=[this,this.GI];this.F_.Dk=[this,this.GI];this.Eh.Dk=[this,this.GI];this.
Dr.Dk=[this,this.GI];this.CR.Dk=[this,this.GI];this.Cp.Dk=[this,this.GI];},_Done:
function(){this.__proto__=C.Lb;this.EQ._Done();this.F_._Done();this.Eh._Done();this.
Dr._Done();this.CR._Done();this.Cp._Done();C.Lb._Done.call(this);},_ReInit:function(
){C.Lb._ReInit.call(this);this.EQ._ReInit();this.F_._ReInit();this.Eh._ReInit();
this.Dr._ReInit();this.CR._ReInit();this.Cp._ReInit();},_Mark:function(D){var B;
C.Lb._Mark.call(this,D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.Avd={Q:null,GO:null,FO:null,EC:null,Ij:null,Ii:null,M3:0,Uf:0,AK:0,FS:99,Init:
function(aArg){A.pe([this,this.LI],this);},Ai:function(Ae){var B;A.Core.O.Ai.call(
this,Ae);this.EC.Y(false);this.EC.H(A.wC(this.X_(0).M,this.X_(-1).M));var Ir=((Ae&
0x40)===0x40);if(Ir){this.Bez(A.jb.AR);this.BeA(A.jb.Bi);}else{this.Bez(this.M3);
this.BeA(A.jb.Text);}this.AlU();},FB:function(E){if(this.M3===E)return;this.M3=E;
this.Am();},LI:function(G){},X_:function(Hq){var B3=null;switch(Hq){case-1:case 0:
B3=this.FO;break;case 1:B3=this.GO;break;default:A.ab5("%s",AhD);}return B3;},Ke:
function(E){if(this.Uf===E)return;this.Uf=E;this.AlU();},AlU:function(){var B;var
F;if(!!this.Q){var Em=this.FO;var Add=this.Uf;var A2=(F=this.Q,F[1].call(F[0]));
while(!!Em){if(A2>0){Em.M$(A2%10);A2=(A2/10)|0;}else if(Add>0)Em.M$(0);else Em.M$(-
1);Em=(C.E$.isPrototypeOf(B=this.Aqd(Em,0x11))?B:null);Add=Add-1;}}},AfN:function(
G){var F;var BO=this.AK;this.Bx(this.AK+1);if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},AfM:function(G){var F;var BO=this.
AK;this.Bx(this.AK-1);if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AK));A.abo(this.Q,0);}},De:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
De],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.De],E,0);if(!!E)A.pe([this,this.De
],this);},Bx:function(E){if(E<0)E=0;if(E>this.FS)E=this.FS;if(this.AK===E)return;
this.AK=E;this.Am();},E1:function(E){if(this.FS===E)return;this.FS=E;this.Am();}
,Bez:function(aColor){this.FO.C2(aColor);this.GO.C2(aColor);},BeA:function(aColor
){this.FO.Aka(aColor);this.GO.Aka(aColor);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.E$._Init.call(this.GO={I:this},0);C.E$._Init.call(this.FO={I:this
},0);A.acg.CA._Init.call(this.EC={I:this},0);A.Core.BK._Init.call(this.Ij={I:this
},0);A.Core.BK._Init.call(this.Ii={I:this},0);this.__proto__=C.Avd;this.H(BpG);this.
M3=A.jb.CG;this.GO.H(AHS);this.FO.H(AxX);this.EC.H(AxX);this.EC.NV(2);this.EC.L(
A.jb.ET);this.Ij.Filter=4;this.Ii.Filter=5;this.J(this.GO,0);this.J(this.FO,0);this.
J(this.EC,0);this.Ij.BL=[this,this.AfN];this.Ij.DS=[this,this.AfN];this.Ii.BL=[this
,this.AfM];this.Ii.DS=[this,this.AfM];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.GO._Done();this.FO._Done();this.EC._Done();this.Ij._Done();this.Ii.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.GO._ReInit();this.FO._ReInit();this.EC._ReInit();this.Ij._ReInit();this.Ii.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ii)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.E$={Agg:
null,Background:null,Text:null,E$:-1,MY:0,Amn:0,ApW:false,Ai:function(Ae){A.Core.
O.Ai.call(this,Ae);if(this.E$<0)this.Text.R(Ra);else this.Text.R(this.E$.toFixed(
));this.Background.L(this.MY);this.Text.L(this.Amn);},M$:function(E){if(this.E$===
E)return;var B3=E;if((B3<0)||(B3>9))B3=-1;this.E$=B3;this.Am();},C2:function(E){
if(this.MY===E)return;this.MY=E;this.Am();},Aj8:function(E){if(this.ApW===E)return;
this.ApW=E;this.Agg.Ar(E);if(E===false)this.Text.Y(true);},Aka:function(E){if(this.
Amn===E)return;this.Amn=E;this.Am();},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acl.Tw._Init.call(this.Agg={I:this},0);A.acg.AJ._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.E$;var B;
this.H(AsF);this.MY=A.jb.CG;this.Agg.Fe(750);this.Agg.T$(750);this.Agg.Akc(750);
this.Amn=A.jb.Text;this.Background.AX(0x3);this.Background.H(AsF);this.Text.AX(0x3
);this.Text.H(AsF);this.Text.R(Ra);this.J(this.Background,0);this.J(this.Text,0);
this.Agg.Q=[B=this.Text,B.Fd,B.Y];this.Text.S(A.aaL(A.fl.Ah));},_Done:function(){
this.__proto__=A.Core.O;this.Agg._Done();this.Background._Done();this.Text._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Agg._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Agg)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fm={Z:null,IU:null,ANp:A.jV,ARb:A.jV,S4:0,AIX:0,A0Q:false,A0m:false,Init:function(
aArg){},Cx:function(G){var B;C.AB.Cx.call(this,G);A.zX([this,this.AAG],[B=A._GetAutoObject(
A.Device.Device).Ap,B.Fz,B.FD],0);A.zX([this,this.MD],[B=A._GetAutoObject(A.Device.
Device).Ap,B.Fz,B.FD],0);A.pe([this,this.AAG],this);A.pe([this,this.MD],this);},
EV:function(G){var B;C.AB.EV.call(this,G);A.z$([this,this.AAG],[B=A._GetAutoObject(
A.Device.Device).Ap,B.Fz,B.FD],0);},Bv6:function(L1){A._GetAutoObject(A.Device.Helper
).HF(L1);this.ApD(A._GetAutoObject(A.Device.Device).Br,A._GetAutoObject(A.Device.
Helper).W.Id);},ApD:function(LW,AcB){A.ab5("%s",AkO);},U0:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.Bw3],this);else if(!!As&&(As.PopupState===5)){this.A0m=true;this.Eo(this
);}},Bw3:function(G){if(this.S4>0){this.A0m=false;this.Ac3(this);this.A9v(0);}},
Ah9:function(G){if((this.AIX+1)<this.S4)this.A9v(this.AIX+1);else A.aaS([this,this.
BuG],this);},BuH:function(s){this.Ah9(s);},A9v:function(E){this.AIX=E;if(this.A0m===
false){this.Bv6(E);A.aaS([this,this.BuH],this);var Xp=(this.AIX/this.S4)*100;A._GetAutoObject(
A.Device.Device).A5(49,true,A.abk(Xp,0,0),0,[this,this.U0]);}},Z4:function(G){A.
_GetAutoObject(A.Device.Device).A5(49,false,BpH,0,[this,this.U0]);this.A0Q=true;
A.pe([this,this.AKx],this);},BuG:function(s){this.Z4(s);},Ac3:function(G){this.IU.
Y(true);this.A0Q=false;this.AKx(this);},BEm:function(s){this.Ac3(s);},AzZ:function(
G){var A$=A._GetAutoObject(A.Device.Helper).A5H();A._GetAutoObject(A.Device.Device
).Ap.Bh(A$);},Eo:function(G){A._GetAutoObject(C.AW).Fl();},A2m:function(G){A._GetAutoObject(
C.AW).BS(95);},DC:function(G){this.N.Y(true);this.N.CT(A.aaL(A.ach.EU));this.N.Cw=[
this,this.Eo];this.N.Cn(A.aaL(A.ach.ACV));if(!A._GetAutoObject(A.Device.Device).
Ap.Filter||A._GetAutoObject(A.Device.Helper).AqD(A._GetAutoObject(A.Device.Device
).Ap.Filter)){this.N.Ci=null;this.N.IX.Dm(100);}else{this.N.Ci=[this,this.AzZ];this.
N.IX.Dm(255);}this.N.C3(A.aaL(A.ach.Ad$));this.N.Cc=[this,this.A2m];},MD:function(
s){this.DC(s);},AAG:function(G){this.S4=A._GetAutoObject(A.Device.Device).Ap.Cb(
);if(this.S4>0)A._GetAutoObject(A.Device.Device).A5(49,true,ZS,0,[this,this.U0]);
else{this.Ac3(this);this.Z4(this);}},Aj$:function(E){if(this.ANp===E)return;this.
ANp=E;A.pe([this,this.AKx],this);},AKx:function(G){var B;if(this.A0Q===false){this.
IU.R(A.jV);return;}var AoK;if(!A._GetAutoObject(A.Device.Device).Ap.Cb()){var AcX=
A._GetAutoObject(A.Device.Device).Ap.Filter;A.z$([this,this.AAG],[B=A._GetAutoObject(
A.Device.Device).Ap,B.Fz,B.FD],0);this.AzZ(this);if(!A._GetAutoObject(A.Device.Device
).Ap.Qx()||!AcX)AoK=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ACh(A._GetAutoObject(A.Device.Device).Ap.Filter)===1)AoK=A.aaR(
A.acf.ANj);else AoK=A.aaR(A.acf.ANi);A._GetAutoObject(A.Device.Device).Ap.Bh(AcX
);A.zX([this,this.AAG],[B=A._GetAutoObject(A.Device.Device).Ap,B.Fz,B.FD],0);}else
AoK=this.ARb;AoK=AoK+(AYV+this.ANp);this.IU.R(AoK);},AeF:function(E){if(this.ARb===
E)return;this.ARb=E;A.pe([this,this.AKx],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Aks._Init.call(this.IU={
I:this},0);this.__proto__=C.Fm;this.Dl(C.Aa5);this.Z.H(E4);this.Z.Kd(1);this.IU.
H(E4);this.J(this.Z,0);this.J(this.IU,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Z._Done();this.IU._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Z._ReInit();this.IU._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A6e={Ag:null,A6:0,_Init:function(aArg){this.__proto__=C.A6e;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.Avf={KT:null,MQ:null,AV:0,X0:function(){this.KT=null;this.MQ=null;this.AV=0;
},Oo:function(A2){var G9;G9=A._NewObject(C.A6e,0);G9.A6=A2;if(!this.KT){this.KT=
G9;this.MQ=G9;this.AV=1;}else{this.MQ.Ag=G9;this.MQ=G9;this.AV=this.AV+1;}},Amw:
function(){var B;var Rv=0;var Oa=this.KT;while(!!Oa){Rv+=Oa.A6;Oa=Oa.Ag;}return Rv;
},Aju:function(){if(!this.AV)return 0;return this.Amw()/this.AV;},Aql:function(){
var B;if(!this.AV)return 0;var A0g=this.Aju();var AcT=0;var Oa=this.KT;while(!!Oa
){AcT+=Math.pow(Oa.A6-A0g,2);Oa=Oa.Ag;}AcT/=this.AV;AcT=Math.sqrt(AcT);return AcT;
},_Init:function(aArg){this.__proto__=C.Avf;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KT)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.ANq={FT:null,Ad7:null,X7:null,DR:null,IU:null,
CU:function(){this.A3l(this);},Init:function(aArg){A.zV([this,this.A3l],A._GetAutoObject(
A.Device.Device).Pe,0);A.pe([this,this.A3l],this);},Eo:function(G){A._GetAutoObject(
C.AW).Fl();},A3l:function(G){this.X7.Ce(-1);this.IU.Y(!this.FT.AY.Cb());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.FT._Init.call(this.FT={I:this},0);C.
Ad7._Init.call(this.Ad7={I:this},0);C.X7._Init.call(this.X7={I:this},0);A.acg.DR.
_Init.call(this.DR={I:this},0);C.Aks._Init.call(this.IU={I:this},0);this.__proto__=
C.ANq;this.N.Y(true);this.Dl(C.AOo);this.FT.H(Asx);this.FT.NS(C.Amm);this.Ad7.H(
JR);this.X7.H(Asp);this.DR.DM(BpI);this.DR.DY(BpJ);this.DR.NV(3);this.DR.L(A.jb.
Text);this.IU.H(AnV);this.IU.R((A.aaR(A.acf.A60)+AYV)+A.aaR(A.acf.A5j));this.J(this.
FT,0);this.J(this.Ad7,0);this.J(this.X7,0);this.J(this.DR,0);this.J(this.IU,0);this.
N.Cw=[this,this.Eo];this.N.CT(A.aaL(A.ach.EU));this.FT.Y6(A._GetAutoObject(A.Device.
Device).Pe);this.X7.Y6(A._GetAutoObject(A.Device.Device).Pe);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.FT._Done();this.Ad7._Done();this.X7._Done();
this.DR._Done();this.IU._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.FT._ReInit();this.Ad7._ReInit();this.X7._ReInit();this.DR.
_ReInit();this.IU._ReInit();this.IU.R((A.aaR(A.acf.A60)+AYV)+A.aaR(A.acf.A5j));this.
CU();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.FT)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.ANt={Atx:null,Atw:null,Atz:null,Aty:null,AtB:null,AtA:null,AtD:null,AtC:null
,Aak:null,Yc:null,AaW:null,AaV:null,RatedAttribute:0,Init:function(aArg){this.Sr(
2);},Dv:function(G){var DW=(A.Core.BK.isPrototypeOf(G)?G:null);switch(DW.CL){case
6:switch(this.RatedAttribute){case 2:this.Sr(3);break;case 1:this.Sr(2);break;case
4:this.Sr(1);break;case 3:this.Sr(4);break;default:this.Sr(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Sr(1);break;case 1:this.Sr(4);break;case 4:this.
Sr(3);break;case 3:this.Sr(2);break;default:this.Sr(0);}break;default:DW.NC=true;
}},ApD:function(LW,AcB){if(!LW)return;var Fj=A._NewObject(A.Device.Filter,0);var
HQ=A._NewObject(A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,AcB,true);Fj.
CY(HQ);var AAg=A._NewObject(A.Device.AssessmentFilterCriterion,0);AAg.Initialize(
3,5,0,true);Fj.CY(AAg);LW.Bh(Fj);},Ah9:function(G){var ApB=0;var A2F=A._GetAutoObject(
A.Device.Device).Br.Cb();var BY=A._NewObject(A.Device.Rating,0);while(ApB<A2F){BY.
EB(ApB,A._GetAutoObject(A.Device.Device).Br);this.Bb3(BY,0);var BAc=A._GetAutoObject(
A.Device.Helper).Zp(2);this.Bb3(BY,BAc);ApB++;}C.Fm.Ah9.call(this,G);},Z4:function(
G){A.pe([this,this.BbG],this);C.Fm.Z4.call(this,G);},Ac3:function(G){this.Atx=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Atw=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Aty=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Atz=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.AtA=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.AtB=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtC=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.AtD=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fm.Ac3.
call(this,G);},DC:function(G){C.Fm.DC.call(this,G);this.N.OG(true);this.N.OH(true
);},Bb3:function(DU,BaF){if(!DU||(DU.Timestamp<BaF))return;if(!BaF){this.Atx.Set(
DU.Appearance,this.Atx.Get(DU.Appearance)+1);this.Atz.Set(DU.Faeces,this.Atz.Get(
DU.Faeces)+1);this.AtB.Set(DU.Feed,this.AtB.Get(DU.Feed)+1);this.AtD.Set(DU.Respiratory
,this.AtD.Get(DU.Respiratory)+1);}else{this.Atw.Set(DU.Appearance,this.Atw.Get(DU.
Appearance)+1);this.Aty.Set(DU.Faeces,this.Aty.Get(DU.Faeces)+1);this.AtA.Set(DU.
Feed,this.AtA.Get(DU.Feed)+1);this.AtC.Set(DU.Respiratory,this.AtC.Get(DU.Respiratory
)+1);}},Sr:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
Yc.Ki(this.Aak.Lo(E));A.pe([this,this.BbG],this);},BbG:function(G){var Aal=null;
var Aam=null;switch(this.RatedAttribute){case 2:{Aal=this.Atw;Aam=this.Atx;}break;
case 4:{Aal=this.Aty;Aam=this.Atz;}break;case 1:{Aal=this.AtA;Aam=this.AtB;}break;
case 0:{Aal=A._NewObject(A.Device.Int32ArrayWrapper,0);Aam=A._NewObject(A.Device.
Int32ArrayWrapper,0);}break;case 3:{Aal=this.AtC;Aam=this.AtD;}break;default:throw new
Error(BpK+this.RatedAttribute.toFixed());}var AFz=A._NewObject(A.acu.ATg,0);AFz.
Oo(Aal.Get(3),A.jb.ET);AFz.Oo(Aal.Get(2),A.jb.H1);AFz.Oo(Aal.Get(1),A.jb.FZ);var
AFA=A._NewObject(A.acu.ATg,0);AFA.Oo(Aam.Get(3),A.jb.ET);AFA.Oo(Aam.Get(2),A.jb.
H1);AFA.Oo(Aam.Get(1),A.jb.FZ);this.AaV.AbN(AFz);this.AaW.AbN(AFA);var A27=Aal.Amw(
)-Aal.Get(5);var Bd9=0;var Bd7=0;if(A27>0){Bd9=(Aal.Get(2)/A27)*100;Bd7=(Aal.Get(
1)/A27)*100;}var AKl=Aam.Amw()-Aam.Get(5);this.IU.Y(!AKl);var Bd_=0;var Bd8=0;if(
AKl>0){Bd_=(Aam.Get(2)/AKl)*100;Bd8=(Aam.Get(1)/AKl)*100;}this.AaV.A9t(A.abk(Bd9
,0,0)+Afh);this.AaV.A89(A.abk(Bd7,0,0)+Afh);this.AaW.A9t(A.abk(Bd_,0,0)+Afh);this.
AaW.A89(A.abk(Bd8,0,0)+Afh);},_Init:function(aArg){C.Fm._Init.call(this,aArg);A.
Device.RatedAttributeToString._Init.call(this.Aak={I:this},0);C.Nz._Init.call(this.
Yc={I:this},0);C.AB0._Init.call(this.AaW={I:this},0);C.AB0._Init.call(this.AaV={
I:this},0);this.__proto__=C.ANt;this.Dl(C.AOp);this.Aj$(A.aaR(A.acf.A5k));this.AeF(
A.aaR(A.acf.AmY));this.Yc.H(JR);this.Yc.Aj(true);this.Yc.U(A.aaR(A.acf.AwI)+A.aaR(
A.acf.Colon));this.Yc.Bf(false);this.Yc.Blv(false);this.AaW.H(BpL);this.AaW.U(A.
aaR(A.acf.AFk));this.AaV.H(BpM);this.AaV.U(A.aaR(A.acf.A6n));this.IU.H(AnV);this.
J(this.Yc,-1);this.J(this.AaW,-1);this.J(this.AaV,-1);this.Atx=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Atw=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Atz=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Aty=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.AtB=A._NewObject(A.Device.Int32ArrayWrapper,0);this.AtA=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.AtD=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.AtC=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Fm;this.Aak._Done();this.Yc._Done();this.AaW._Done();this.AaV.
_Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm._ReInit.call(this);this.
Aak._ReInit();this.Yc._ReInit();this.AaW._ReInit();this.AaV._ReInit();this.Aj$(A.
aaR(A.acf.A5k));this.AeF(A.aaR(A.acf.AmY));this.Yc.U(A.aaR(A.acf.AwI)+A.aaR(A.acf.
Colon));this.AaW.U(A.aaR(A.acf.AFk));this.AaV.U(A.aaR(A.acf.A6n));},_Mark:function(
D){var B;C.Fm._Mark.call(this,D);if((B=this.Atx)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Atw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Atz)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aty)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AtB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtA)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AtD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AtC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aak)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AaV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.ANu={Ad6:null,Uz:null,UA:null,Ad5:null,Uw:null,Ux:null,AIZ:0,AIY:0,AID:0,AIC:
0,AcV:false,CU:function(){this.Z4(this);},ApD:function(LW,AcB){if(!LW)return;var
Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(A.Device.Int32FilterCriterion
,0);HQ.Initialize(1,0,AcB,true);Fj.CY(HQ);var AAz=A._NewObject(A.Device.Int32FilterCriterion
,0);AAz.Initialize(7,2,0,true);Fj.CY(AAz);LW.Bh(Fj);},Ah9:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AIZ++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AIY++;var ApB=0;var A2F=A._GetAutoObject(
A.Device.Device).Br.Cb();var Atv;var AAR=0;while(ApB<A2F){this.AcV=true;Atv=A._GetAutoObject(
A.Device.Device).Br.IV(ApB,9);if(Atv===1)AAR=1;else if((Atv===2)&&(AAR!==1))AAR=
2;ApB++;}if(AAR===1)this.AIC++;else if(AAR===2)this.AID++;C.Fm.Ah9.call(this,G);
},Z4:function(G){var Bd5=0;var Bd6=0;if(this.S4>0){Bd5=(this.AIZ/this.S4)*100;Bd6=(
this.AIY/this.S4)*100;}this.Uz.Ki(((((((A.abk(Bd5,0,0)+AHT)+this.AIZ.toFixed())+
CM)+A.aaR(A.acf.ADF))+CM)+this.S4.toFixed())+OX);this.UA.Ki(((((((A.abk(Bd6,0,0)+
AHT)+this.AIY.toFixed())+CM)+A.aaR(A.acf.ADF))+CM)+this.S4.toFixed())+OX);var Bd3=
0;var Bd4=0;if(this.S4>0){Bd3=(this.AID/this.S4)*100;Bd4=(this.AIC/this.S4)*100;
}this.Uw.Ki(((((((A.abk(Bd3,0,0)+AHT)+this.AID.toFixed())+CM)+A.aaR(A.acf.ADF))+
CM)+this.S4.toFixed())+OX);this.Ux.Ki(((((((A.abk(Bd4,0,0)+AHT)+this.AIC.toFixed(
))+CM)+A.aaR(A.acf.ADF))+CM)+this.S4.toFixed())+OX);this.IU.Y(!this.AcV);C.Fm.Z4.
call(this,G);},Ac3:function(G){this.AIC=0;this.AID=0;this.AIY=0;this.AIZ=0;this.
AcV=false;C.Fm.Ac3.call(this,G);},_Init:function(aArg){C.Fm._Init.call(this,aArg
);C.Af7._Init.call(this.Ad6={I:this},0);C.Ai5._Init.call(this.Uz={I:this},0);C.Ai5.
_Init.call(this.UA={I:this},0);C.Af7._Init.call(this.Ad5={I:this},0);C.Ai5._Init.
call(this.Uw={I:this},0);C.Ai5._Init.call(this.Ux={I:this},0);this.__proto__=C.ANu;
this.Dl(C.AOq);this.Aj$(A.aaR(A.acf.A5l));this.AeF(A.aaR(A.acf.AqS));this.Ad6.H(
JR);this.Ad6.Aj(true);this.Ad6.U(A.aaR(A.acf.A5p));this.Ad6.Bf(false);this.Uz.H(
P0);this.Uz.Aj(true);this.Uz.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Uz.
Bf(true);this.Uz.Akf(2);this.UA.H(ZQ);this.UA.Aj(true);this.UA.U(A.aaR(A.acf.AuX
)+A.aaR(A.acf.Colon));this.UA.Bf(true);this.UA.Akf(1);this.Ad5.H(AkP);this.Ad5.Aj(
true);this.Ad5.U(A.aaR(A.acf.A5q));this.Ad5.Bf(false);this.Uw.H(AnZ);this.Uw.Aj(
true);this.Uw.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Uw.Bf(true);this.
Uw.Akf(2);this.Ux.H(Asp);this.Ux.Aj(true);this.Ux.U(A.aaR(A.acf.AuX)+A.aaR(A.acf.
Colon));this.Ux.Bf(true);this.Ux.Akf(1);this.J(this.Ad6,0);this.J(this.Uz,0);this.
J(this.UA,0);this.J(this.Ad5,0);this.J(this.Uw,0);this.J(this.Ux,0);this.Uz.S(A.
aaL(A.fl.Ak));this.UA.S(A.aaL(A.fl.Ak));this.Uw.S(A.aaL(A.fl.Ak));this.Ux.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fm;this.Ad6._Done();this.Uz._Done(
);this.UA._Done();this.Ad5._Done();this.Uw._Done();this.Ux._Done();C.Fm._Done.call(
this);},_ReInit:function(){C.Fm._ReInit.call(this);this.Ad6._ReInit();this.Uz._ReInit(
);this.UA._ReInit();this.Ad5._ReInit();this.Uw._ReInit();this.Ux._ReInit();this.
Aj$(A.aaR(A.acf.A5l));this.AeF(A.aaR(A.acf.AqS));this.Ad6.U(A.aaR(A.acf.A5p));this.
Uz.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.UA.U(A.aaR(A.acf.AuX)+A.aaR(
A.acf.Colon));this.Ad5.U(A.aaR(A.acf.A5q));this.Uw.U(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.Ux.U(A.aaR(A.acf.AuX)+A.aaR(A.acf.Colon));this.Uz.S(A.aaL(A.fl.
Ak));this.UA.S(A.aaL(A.fl.Ak));this.Uw.S(A.aaL(A.fl.Ak));this.Ux.S(A.aaL(A.fl.Ak
));this.CU();},_Mark:function(D){var B;C.Fm._Mark.call(this,D);if((B=this.Ad6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
UA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Uw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ux)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.Aqc={K2:null
,AiT:null,AiU:null,AlV:null,Aa9:null,WD:null,Aa6:null,SO:null,Aa7:null,SP:null,Aa_:
null,WE:null,Aw:null,AcQ:0,AzL:0,Ao3:0,A1s:0,Bcx:0,CU:function(){this.Z4(this);}
,Dv:function(G){switch(this.Cm.CL){case 4:{if(this.IU.Fd())return;var Qm=this.Z.
Bq[1]+80;this.Z.Gh([this.Z.Bq[0],Qm]);this.Z.Vc(null,null);}break;case 5:{if(this.
IU.Fd())return;var Qm=this.Z.Bq[1]-80;this.Z.Gh([this.Z.Bq[0],Qm]);this.Z.Vc(null
,null);}break;default:C.Fm.Dv.call(this,G);}},ApD:function(LW,AcB){if(!LW)return;
var Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(A.Device.Int32FilterCriterion
,0);HQ.Initialize(1,0,AcB,true);Fj.CY(HQ);var AcM=A._NewObject(A.Device.Int32FilterCriterion
,0);AcM.Initialize(8,2,0,true);Fj.CY(AcM);LW.Bh(Fj);},Ah9:function(G){if(this.Bcn(
)){this.K2.Oo(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.AqE()){var P_=A._GetAutoObject(A.Device.Helper).ML(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(P_>0){var A02=A._GetAutoObject(A.acj.DN).Ak7(P_,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.AiT.
Oo(A02);}}var A1K=A._GetAutoObject(A.Device.Device).Br.Cb()-2;if(A1K>=0){var Bx8=
A._GetAutoObject(A.Device.Device).Br.ACi(A1K,8);var Bx7=A._GetAutoObject(A.Device.
Device).Br.Hz(A1K,6);var P_=A._GetAutoObject(A.Device.Helper).ML(Bx7,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(P_>0){var A02=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-Bx8)/P_)|0;this.AiU.Oo(A02);}}if((A._GetAutoObject(
A.Device.Helper).W.AqE()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.Rz()<=180)){var AKH=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var Td=A._GetAutoObject(A.Device.
Helper).ML(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var Bzl=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(AKH/Td);this.AlV.Oo(Bzl);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.AcQ++;this.Ao3=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).Zp(7)){this.AzL++;this.A1s=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.Bcx=A._GetAutoObject(A.Device.Helper).ML(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).DF());}}C.Fm.Ah9.call(
this,G);},Z4:function(G){var A3u=this.AiT.Aju()|0;var A3w=this.AiU.Aju()|0;if(this.
AcQ>1)A._GetAutoObject(A.Device.Device).A5(56,true,this.AcQ.toFixed(),0,null);if(
this.AcQ===1)A._GetAutoObject(A.Device.Device).A5(53,true,this.Ao3.toFixed(),0,null
);if(this.AzL>1)A._GetAutoObject(A.Device.Device).A5(52,true,this.AzL.toFixed(),
0,null);if(this.AzL===1)A._GetAutoObject(A.Device.Device).A5(57,true,(this.A1s.toFixed(
)+Asu)+this.Bcx.toFixed(),0,null);if(this.K2.AV>0)this.WD.U(((((((A._GetAutoObject(
A.Device.Converter).Axj(this.K2.Aju()|0,1)+AxY)+A._GetAutoObject(A.Device.Converter
).Axj(this.K2.Aql()|0,1))+CM)+A._GetAutoObject(A.acj.DN).AfE())+AxZ)+this.K2.AV.
toFixed())+OX);else this.WD.U(A.aaR(A.acf.Unknown));if(this.AiT.AV>0)this.SO.U(((((((
A._GetAutoObject(A.Device.Converter).ST(A3u,2,true)+AxY)+A._GetAutoObject(A.Device.
Converter).ST(this.AiT.Aql()|0,2,true))+CM)+A._GetAutoObject(A.acj.DN).Z9())+AxZ
)+this.AiT.AV.toFixed())+OX);else this.SO.U(A.aaR(A.acf.Unknown));if(this.AiU.AV>
0)this.SP.U(((((((A._GetAutoObject(A.Device.Converter).ST(A3w,2,true)+AxY)+A._GetAutoObject(
A.Device.Converter).ST(this.AiU.Aql()|0,2,true))+CM)+A._GetAutoObject(A.acj.DN).
Z9())+AxZ)+this.AiU.AV.toFixed())+OX);else this.SP.U(A.aaR(A.acf.Unknown));if(this.
AlV.AV>0)this.WE.U(((((((A.abk(this.AlV.Aju(),0,1)+AxY)+A.abk(this.AlV.Aql(),0,1
))+CM)+A.aaR(A.acf.Bgh))+AxZ)+this.AlV.AV.toFixed())+OX);else this.WE.U(A.aaR(A.
acf.Unknown));var A3v=0;var A3x=0;var AcV=false;if(this.K2.AV>0)AcV=true;var H8=
0;if(!!A._GetAutoObject(A.Device.Device).Ap.Filter){var AJg=A._GetAutoObject(A.Device.
Device).Ap.Filter.DX(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AJg)?AJg:null))H8=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AJg)?AJg:null
).A6;}if(this.AiT.AV>0){AcV=true;A3v=A._GetAutoObject(A.Device.Converter).A_K(A3u
,H8);}if(this.AiU.AV>0){AcV=true;A3x=A._GetAutoObject(A.Device.Converter).A_K(A3w
,H8);}this.SO.Akf(A3v);this.SP.Akf(A3x);this.IU.Y(!AcV);C.Fm.Z4.call(this,G);},Ac3:
function(G){this.K2.X0();this.AiT.X0();this.AiU.X0();this.AlV.X0();this.AcQ=0;this.
AzL=0;this.Ao3=0;this.A1s=0;C.Fm.Ac3.call(this,G);},E9:function(G){var B;this.Aw.
Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.
Z.Bq[1]);},Bcn:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Fm._Init.call(
this,aArg);C.Af7._Init.call(this.Aa9={I:this},0);C.Iv._Init.call(this.WD={I:this
},0);C.Af7._Init.call(this.Aa6={I:this},0);C.Ai5._Init.call(this.SO={I:this},0);
C.Af7._Init.call(this.Aa7={I:this},0);C.Ai5._Init.call(this.SP={I:this},0);C.Af7.
_Init.call(this.Aa_={I:this},0);C.Iv._Init.call(this.WE={I:this},0);C.Aw._Init.call(
this.Aw={I:this},0);this.__proto__=C.Aqc;this.Dl(C.AuV);this.Aj$(A.aaR(A.acf.A5m
));this.AeF(A.aaR(A.acf.Aj0));this.Aa9.H(AsC);this.Aa9.Aj(true);this.Aa9.U(A.aaR(
A.acf.A35));this.Aa9.Bf(false);this.Aa9.Ke(5);this.WD.H(AYW);this.WD.Aj(true);this.
WD.U(A.jV);this.WD.Bf(true);this.Aa6.H(Asy);this.Aa6.Aj(true);this.Aa6.U(A.aaR(A.
acf.AK6));this.Aa6.Bf(false);this.Aa6.Ke(5);this.SO.H(Asz);this.SO.Aj(true);this.
SO.U(A.jV);this.SO.Bf(true);this.SO.Ki(A.jV);this.Aa7.H(AsA);this.Aa7.Aj(true);this.
Aa7.U(A.aaR(A.acf.AtX));this.Aa7.Bf(false);this.Aa7.Ke(5);this.SP.H(BpN);this.SP.
Aj(true);this.SP.U(A.jV);this.SP.Bf(true);this.SP.Ki(A.jV);this.Aa_.H(AYX);this.
Aa_.Aj(true);this.Aa_.U(A.aaR(A.acf.A4m));this.Aa_.Bf(false);this.Aa_.Ke(5);this.
WE.H(An8);this.WE.Aj(true);this.WE.U(A.jV);this.WE.Bf(true);this.Aw.H(IK);this.J(
this.Aa9,-1);this.J(this.WD,-1);this.J(this.Aa6,-1);this.J(this.SO,-1);this.J(this.
Aa7,-1);this.J(this.SP,-1);this.J(this.Aa_,-1);this.J(this.WE,-1);this.J(this.Aw
,-1);this.Z.Ej=[this,this.G8];this.K2=A._NewObject(C.Avf,0);this.AiT=A._NewObject(
C.Avf,0);this.AiU=A._NewObject(C.Avf,0);this.WD.S(A.aaL(A.fl.Ah));this.SO.S(A.aaL(
A.fl.Ak));this.SP.S(A.aaL(A.fl.Ak));this.WE.S(A.aaL(A.fl.Ak));this.AlV=A._NewObject(
C.A5w,0);},_Done:function(){this.__proto__=C.Fm;this.Aa9._Done();this.WD._Done();
this.Aa6._Done();this.SO._Done();this.Aa7._Done();this.SP._Done();this.Aa_._Done(
);this.WE._Done();this.Aw._Done();C.Fm._Done.call(this);},_ReInit:function(){C.Fm.
_ReInit.call(this);this.Aa9._ReInit();this.WD._ReInit();this.Aa6._ReInit();this.
SO._ReInit();this.Aa7._ReInit();this.SP._ReInit();this.Aa_._ReInit();this.WE._ReInit(
);this.Aw._ReInit();this.Aj$(A.aaR(A.acf.A5m));this.AeF(A.aaR(A.acf.Aj0));this.Aa9.
U(A.aaR(A.acf.A35));this.Aa6.U(A.aaR(A.acf.AK6));this.Aa7.U(A.aaR(A.acf.AtX));this.
Aa_.U(A.aaR(A.acf.A4m));this.WD.S(A.aaL(A.fl.Ah));this.SO.S(A.aaL(A.fl.Ak));this.
SP.S(A.aaL(A.fl.Ak));this.WE.S(A.aaL(A.fl.Ak));this.CU();},_Mark:function(D){var
B;C.Fm._Mark.call(this,D);if((B=this.K2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AiT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiU)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AlV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WD)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SO)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SP)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Aa_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::EvaluationWeightsScreen"};C.Aa5={_Init:function(aArg){C.Ajx._Init.
call(this,aArg);this.__proto__=C.Aa5;this.Dc.Ay(A.aaL(A.ach.ACR));},_className:"Application::HeaderEvaluationFilter"
};C.J$={CU:function(){this.Text.R(A.aaR(A.acf.None));},Eq:function(G){C.Ajx.Eq.call(
this,G);this.Dc.Ay(A._GetAutoObject(A.Device.Converter).Af$(A._GetAutoObject(A.Device.
Device).JB));},_Init:function(aArg){C.Ajx._Init.call(this,aArg);this.__proto__=C.
J$;},_ReInit:function(){C.Ajx._ReInit.call(this);this.CU();},_className:"Application::HeaderListFilter"
};C.AuV={Init:function(aArg){this.Dc.Ay(A._GetAutoObject(A.acj.DN).BbW());},_Init:
function(aArg){C.Aa5._Init.call(this,aArg);this.__proto__=C.AuV;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.AOq={Init:function(
aArg){this.Dc.Ay(A.aaL(A.ach.Abc));},_Init:function(aArg){C.Aa5._Init.call(this,
aArg);this.__proto__=C.AOq;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AOp={Init:function(aArg){this.Dc.Ay(A.aaL(A.ach.AmB));},_Init:function(aArg){
C.Aa5._Init.call(this,aArg);this.__proto__=C.AOp;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AOo={R8:null,Dc:null,AP:null,CU:function(){this.R8.R(A.aaR(A.acf.AMp));},C9:
function(E){C.BQ.C9.call(this,E);this.R8.L(E);this.Dc.L(E);},_Init:function(aArg
){C.BQ._Init.call(this,aArg);C.CP._Init.call(this.R8={I:this},0);A.acg.An._Init.
call(this.Dc={I:this},0);A.acg.DR._Init.call(this.AP={I:this},0);this.__proto__=
C.AOo;this.R8.H(BpO);this.R8.R(A.aaR(A.acf.AMp));this.R8.A3(0x11);this.Dc.H(BpP);
this.AP.DM(BpQ);this.AP.DY(BpR);this.AP.L(A.jb.Bc);this.J(this.R8,0);this.J(this.
Dc,0);this.J(this.AP,0);this.R8.S(A.aaL(A.fl.Ah));this.R8.A7(A.aaL(A.fl.Ak));this.
Dc.Ay(A.aaL(A.ach.APz));},_Done:function(){this.__proto__=C.BQ;this.R8._Done();this.
Dc._Done();this.AP._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.
call(this);this.R8._ReInit();this.Dc._ReInit();this.AP._ReInit();this.R8.R(A.aaR(
A.acf.AMp));this.R8.S(A.aaL(A.fl.Ah));this.R8.A7(A.aaL(A.fl.Ak));this.CU();},_Mark:
function(D){var B;C.BQ._Mark.call(this,D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.Ad7={TJ:null,AjF:
null,AjD:null,AjE:null,_Init:function(aArg){C.Eu._Init.call(this,aArg);C.CP._Init.
call(this.TJ={I:this},0);A.acg.An._Init.call(this.AjF={I:this},0);A.acg.An._Init.
call(this.AjD={I:this},0);A.acg.An._Init.call(this.AjE={I:this},0);this.__proto__=
C.Ad7;this.TJ.H(BpS);this.TJ.R(A.aaR(A.acf.Year));this.TJ.A3(0x11);this.TJ.L(A.jb.
Text);this.AjF.H(A_6);this.AjF.L(A.jb.Text);this.AjD.H(BpT);this.AjD.L(A.jb.Text
);this.AjE.H(BpU);this.AjE.L(A.jb.Text);this.J(this.TJ,0);this.J(this.AjF,0);this.
J(this.AjD,0);this.J(this.AjE,0);this.TJ.S(A.aaL(A.fl.J_));this.TJ.A7(A.aaL(A.fl.
Ie));this.AjF.Ay(A.aaL(A.ach.APK));this.AjD.Ay(A.aaL(A.ach.APJ));this.AjE.Ay(A.aaL(
A.ach.APR));},_Done:function(){this.__proto__=C.Eu;this.TJ._Done();this.AjF._Done(
);this.AjD._Done();this.AjE._Done();C.Eu._Done.call(this);},_ReInit:function(){C.
Eu._ReInit.call(this);this.TJ._ReInit();this.AjF._ReInit();this.AjD._ReInit();this.
AjE._ReInit();this.TJ.R(A.aaR(A.acf.Year));this.TJ.S(A.aaL(A.fl.J_));this.TJ.A7(
A.aaL(A.fl.Ie));},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.TJ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AjF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AjD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.Amm={Ai_:null,AP:null
,A9:null,D5:null,Ut:null,SF:null,Gj:null,Xp:0,As6:0,Ak$:0,AAS:0,Init:function(aArg
){},Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.SF.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A9.H([this.SF.M[2]-1,0,this.SF.M[
2]+1,aSize[1]]);this.Ut.H([this.SF.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
D5.H([this.Ut.M[2]-1,0,this.Ut.M[2]+1,aSize[1]]);this.Gj.H([this.Ut.M[2],0,aSize[
0],aSize[1]]);this.Ai_.H(this.Gj.M);},Ai:function(Ae){C.Bb.Ai.call(this,Ae);this.
U(this.AAS.toFixed());this.SF.L(this.V.AQ);this.SF.R(this.Ak$.toFixed());this.Ut.
L(this.V.AQ);this.Ut.R(this.As6.toFixed());var BY=this.Bzk(this.Xp);this.Gj.L(A.
_GetAutoObject(A.acj.Assessment).Xd(BY));this.Ai_.L(A._GetAutoObject(A.acj.Assessment
).Qd(BY));this.Gj.R(A.abk(this.Xp,0,0)+Afh);},Ce:function(Ac){if(!this.AY)return;
this.Hu=Ac;Ac=(this.AY.Cb()-Ac)-1;if(!!this.AY){this.Ak$=this.AY.CD(Ac,1);this.As6=
this.AY.CD(Ac,2);this.AAS=this.AY.CD(Ac,0);if(this.Ak$>0)this.Xp=(this.As6/this.
Ak$)*100;else this.Xp=0;this.Am();}},Bzk:function(Xp){if(Xp>=8)return 1;else if(
Xp>=4)return 2;else return 3;},_Init:function(aArg){C.Bb._Init.call(this,aArg);A.
acg.AJ._Init.call(this.Ai_={I:this},0);A.acg.AJ._Init.call(this.AP={I:this},0);A.
acg.AJ._Init.call(this.A9={I:this},0);A.acg.AJ._Init.call(this.D5={I:this},0);A.
acg.Text._Init.call(this.Ut={I:this},0);A.acg.Text._Init.call(this.SF={I:this},0
);A.acg.Text._Init.call(this.Gj={I:this},0);this.__proto__=C.Amm;this.Ai_.H(AnW);
this.AP.L(A.jb.Bc);this.A9.L(A.jb.Bc);this.D5.H(AnW);this.D5.L(A.jb.Bc);this.Ut.
L(A.jb.Text);this.SF.H(AnW);this.SF.L(A.jb.Text);this.Gj.L(A.jb.Text);this.J(this.
Ai_,0);this.J(this.AP,0);this.J(this.A9,0);this.J(this.D5,0);this.J(this.Ut,0);this.
J(this.SF,0);this.J(this.Gj,0);this.Ut.S(A.aaL(A.fl.Ah));this.SF.S(A.aaL(A.fl.Ah
));this.Gj.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.
Bb;this.Ai_._Done();this.AP._Done();this.A9._Done();this.D5._Done();this.Ut._Done(
);this.SF._Done();this.Gj._Done();C.Bb._Done.call(this);},_ReInit:function(){C.Bb.
_ReInit.call(this);this.Ai_._ReInit();this.AP._ReInit();this.A9._ReInit();this.D5.
_ReInit();this.Ut._ReInit();this.SF._ReInit();this.Gj._ReInit();this.Ut.S(A.aaL(
A.fl.Ah));this.SF.S(A.aaL(A.fl.Ah));this.Gj.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Bb._Mark.call(this,D);if((B=this.Ai_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ut)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gj)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.Ai5={
BR:null,Axe:A.jV,Rating:0,Ai:function(Ae){C.Iv.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).Qd(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xd(this.Rating));}this.BR.L(this.V.AQ);},S:function(
E){C.Iv.S.call(this,E);if((E===A.aaL(A.fl.J_))||(E===A.aaL(A.fl.Ah)))this.BR.S(A.
aaL(A.fl.Ah));else if((E===A.aaL(A.fl.Ie))||(E===A.aaL(A.fl.Ak)))this.BR.S(A.aaL(
A.fl.Ak));else this.BR.S(E);},Ki:function(E){if(this.Axe===E)return;this.Axe=E;this.
BR.R(E);},Akf:function(E){if(this.Rating===E)return;this.Rating=E;this.Am();},_Init:
function(aArg){C.Iv._Init.call(this,aArg);A.acg.Text._Init.call(this.BR={I:this}
,0);this.__proto__=C.Ai5;this.BR.AX(0x34);this.BR.H(ZU);this.BR.I0(true);this.BR.
A3(0x11);this.BR.L(A.jb.Text);this.BR.Aj(true);this.J(this.BR,0);this.BR.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.Iv;this.BR._Done();C.Iv._Done.call(
this);},_ReInit:function(){C.Iv._ReInit.call(this);this.BR._ReInit();this.BR.S(A.
aaL(A.fl.Ah));},_Mark:function(D){var B;C.Iv._Mark.call(this,D);if((B=this.BR)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.AB0={
NZ:null,St:null,V:null,Ano:null,Ann:null,AbW:null,AbV:null,DD:Lq,A_P:A.jV,A9N:A.
jV,AbN:function(E){if(this.NZ===E)return;this.NZ=E;this.St.AbN(this.NZ);},U:function(
E){if(this.DD===E)return;this.DD=E;this.V.R(E);},A9t:function(E){if(this.A_P===E
)return;this.A_P=E;this.AbW.R(E);},A89:function(E){if(this.A9N===E)return;this.A9N=
E;this.AbV.R(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acu.St._Init.
call(this.St={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AJ._Init.
call(this.Ano={I:this},0);A.acg.AJ._Init.call(this.Ann={I:this},0);A.acg.Text._Init.
call(this.AbW={I:this},0);A.acg.Text._Init.call(this.AbV={I:this},0);this.__proto__=
C.AB0;this.H(BpV);this.St.H(BpW);this.St.Ar(false);this.St.BlD(360);this.St.BlM(
0.5);this.V.AX(0x1D);this.V.H(WN);this.V.KL(true);this.V.R(Lq);this.V.L(A.jb.Text
);this.Ano.H(A_7);this.Ano.L(A.jb.H1);this.Ann.H(A_8);this.Ann.L(A.jb.FZ);this.AbW.
AX(0x1D);this.AbW.H(A_7);this.AbW.L(A.jb.Text);this.AbV.AX(0x1D);this.AbV.H(A_8);
this.AbV.L(A.jb.C1);this.J(this.St,0);this.J(this.V,0);this.J(this.Ano,0);this.J(
this.Ann,0);this.J(this.AbW,0);this.J(this.AbV,0);this.St.BlN(A.aaL(A.acu.ASV));
this.V.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.O;this.St._Done();this.V._Done();this.Ano.
_Done();this.Ann._Done();this.AbW._Done();this.AbV._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.St._ReInit();this.V._ReInit(
);this.Ano._ReInit();this.Ann._ReInit();this.AbW._ReInit();this.AbV._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.AbW.S(A.aaL(A.fl.Ak));this.AbV.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.NZ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Ano)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ann
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.Aks={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);C.CP._Init.call(this.Text={
I:this},0);this.__proto__=C.Aks;this.H(SY);this.Background.AX(0x3F);this.Background.
H(SY);this.Background.L(A.jb.Bh_);this.Text.AX(0x3F);this.Text.H(SY);this.Text.A3(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Ah));this.Text.A7(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Text._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Ah));this.Text.A7(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.Q3={AkD:null,NL:null,C6:null,Ach:null,JE:null,TemperatureUnit:null,Mz:null,PK:
null,R4:null,Uh:null,Ll:null,I5:null,ZB:null,ZA:null,R6:null,Hw:null,Ajk:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).Alh());
this.Uh.R(A._GetAutoObject(A.acj.Temperature).Alh());this.R6.Y(!A._GetAutoObject(
A.Device.Device).Amo);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.AnG();this.Axb(
);this.Acj();this.Axc();},IP:function(G){this.Ws(this);},Cx:function(G){var B;C.
AB.Cx.call(this,G);A.zX([this,this.AJO],[B=A._GetAutoObject(A.Device.Device),B.ADR
,B.AH4],0);A.zX([this,this.Az0],[B=A._GetAutoObject(A.Device.Device),B.ADU,B.AH6
],0);A.zX([this,this.Az0],[B=A._GetAutoObject(A.Device.Device),B.ARO,B.AZa],0);A.
zX([this,this.A16],[B=A._GetAutoObject(A.Device.Device),B.AqW,B.AsH],0);A.zX([this
,this.A1Y],[B=A._GetAutoObject(A.Device.Device),B.ADO,B.AH1],0);A._GetAutoObject(
A.Device.Device).Ahm();if(A._GetAutoObject(A.Device.Device).Amo)A._GetAutoObject(
A.Device.Device).Aey(true);A._GetAutoObject(A.Device.Device).Aw0();A.pe([this,this.
A1Y],this);A.pe([this,this.Az0],this);A.pe([this,this.A16],this);},EV:function(G
){var B;A._GetAutoObject(A.Device.Device).Ahm();A._GetAutoObject(A.Device.Device
).Uc(false);A._GetAutoObject(A.Device.Device).AeH(false);A._GetAutoObject(A.Device.
Device).Aey(false);A.z$([this,this.AJO],[B=A._GetAutoObject(A.Device.Device),B.ADR
,B.AH4],0);A.z$([this,this.Az0],[B=A._GetAutoObject(A.Device.Device),B.ADU,B.AH6
],0);A.z$([this,this.Az0],[B=A._GetAutoObject(A.Device.Device),B.ARO,B.AZa],0);A.
z$([this,this.A16],[B=A._GetAutoObject(A.Device.Device),B.AqW,B.AsH],0);A.z$([this
,this.A1Y],[B=A._GetAutoObject(A.Device.Device),B.ADO,B.AH1],0);},Az0:function(G
){this.Am();},AnG:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CG);this.C6.L(A.jb.FZ);this.JE.L(this.C6.AQ);this.
Mz.L(this.C6.AQ);this.TemperatureUnit.L(this.C6.AQ);}break;default:{this.Background.
L(A.jb.CG);this.C6.L(A.jb.AR);this.JE.L(A.jb.Text);this.Mz.L(this.JE.AQ);this.TemperatureUnit.
L(this.JE.AQ);this.Hw.L(A.jb.FZ);}}},Axb:function(){this.AkD.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JE.R(A.aaR(A.acf.AC7));this.C6.Ay(A.aaL(A.ach.Au8));this.C6.Cv(0);
this.NL.Cv(0);}break;case 1:{this.AUu(A._GetAutoObject(A.Device.Device).Km,false
);this.C6.Ay(A.aaL(A.ach.Au8));this.NL.Cv(0);}break;case 2:{this.R4.R(A._GetAutoObject(
A.Device.Converter).AkC(A._GetAutoObject(A.Device.Device).AFo));this.AUu(A._GetAutoObject(
A.Device.Device).Km,false);this.C6.Ay(null);this.NL.Cv(1);this.Ach.Y(true);this.
PK.Y(true);this.R4.Y(true);this.Uh.Y(true);}break;case 3:{this.ATA();this.AUu(A.
_GetAutoObject(A.Device.Device).Km,true);this.Ach.Y(false);this.PK.Y(false);this.
R4.Y(false);this.Uh.Y(false);}break;case 4:{this.JE.R(A.aaR(A.acf.Bil));this.Mz.
R(A.aaR(A.act.AjZ));this.C6.Ay(A.aaL(A.ach.Au_));this.C6.Cv(2);this.NL.Cv(0);}break;
default:A.ab5("%s%e",AHe,A._GetAutoObject(A.Device.Device).MeasureState);}},Acj:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Km<=3240)||(A._GetAutoObject(A.Device.Device
).Km>=5460))this.N.C3(null);else this.N.C3(A.aaL(A.ach.Ad_));this.N.Cn(null);}break;
default:;}},Ar2:function(G){A._GetAutoObject(C.AW).Fl();},Ws:function(G){},AZn:function(
s){this.Ws(s);},Akx:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.By8(this);break;default:;}},AZm:function(s){this.Akx(s);},AUu:
function(Aol,BxX){if(BxX)this.Ll.L(A.jb.Bi);else this.Ll.L(A.jb.FZ);if(Aol<=3240
){this.Mz.Y(false);this.TemperatureUnit.Y(false);this.Ll.Y(true);this.Ll.R(A.aaR(
A.act.AUg));}else if(Aol>=5460){this.Mz.Y(false);this.TemperatureUnit.Y(false);this.
Ll.Y(true);this.Ll.R(A.aaR(A.act.Bn8));}else{this.Mz.Y(true);this.TemperatureUnit.
Y(true);this.Ll.Y(false);this.Mz.R(A._GetAutoObject(A.Device.Converter).AkC(Aol)
);}},Axc:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Km<=3240)||(A._GetAutoObject(A.Device.
Device).Km>=5460))this.JE.R(A.aaR(A.acf.AC7));else this.JE.R(A.aaR(A.acf.BoI));break;
default:;}},Axd:function(){},Bor:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.ZB.Ar(true);break;case 4:this.ZA.Ar(true);break;default:{
this.ZB.Ar(false);this.ZA.Ar(false);A._GetAutoObject(A.Device.Device).AeH(false);
}}},AJO:function(G){this.Am();this.Axd();this.Bor();this.Bop();},A16:function(G){
if(A._GetAutoObject(A.Device.Device).Amp){this.R6.L(A.jb.H1);this.R6.Cv(1);}else{
this.R6.L(A.jb.Bi);this.R6.Cv(0);}},By8:function(G){if(!A._GetAutoObject(A.Device.
Device).Amo)A._GetAutoObject(A.Device.Device).Aey(!A._GetAutoObject(A.Device.Device
).Amp);},Bop:function(){if(A._GetAutoObject(A.Device.Device).Amo){this.R6.Y(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Aey(true);else A._GetAutoObject(A.Device.Device).Aey(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.R6.Y(true);else this.R6.Y(false);},AJQ:function(
G){this.Cx(this);},ATA:function(){A.ab5("%s",A_5);},A1Y:function(G){if(A._GetAutoObject(
A.Device.Device).Hw){this.JE.H(BpX);this.Mz.H(BpY);this.TemperatureUnit.H(BpZ);}
else{this.JE.H(Bp0);this.Mz.H(Bp1);this.TemperatureUnit.H(Bp2);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.Ga._Init.call(this.AkD={I:this},0);A.acg.
An._Init.call(this.NL={I:this},0);A.acg.An._Init.call(this.C6={I:this},0);A.acg.
An._Init.call(this.Ach={I:this},0);A.acg.Text._Init.call(this.JE={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.Mz={
I:this},0);A.acg.Text._Init.call(this.PK={I:this},0);A.acg.Text._Init.call(this.
R4={I:this},0);A.acg.Text._Init.call(this.Uh={I:this},0);C.CP._Init.call(this.Ll={
I:this},0);A.Device.Tw._Init.call(this.I5={I:this},0);A.Device.Tw._Init.call(this.
ZB={I:this},0);A.Device.Tw._Init.call(this.ZA={I:this},0);A.acg.An._Init.call(this.
R6={I:this},0);C.CP._Init.call(this.Hw={I:this},0);A.acl.Tw._Init.call(this.Ajk={
I:this},0);this.__proto__=C.Q3;var B;this.N.Y(true);this.AkD.Fe(1000);this.AkD.B0=
2;this.NL.H(Bp3);this.NL.L(A.jb.C1);this.C6.H(Bp4);this.C6.L(A.jb.AR);this.C6.Cv(
0);this.C6.Y(true);this.Ach.H(Bp5);this.Ach.L(A.jb.Text);this.Ach.Y(false);this.
JE.KL(true);this.JE.R(A.aaR(A.acf.AC7));this.JE.L(A.jb.Text);this.TemperatureUnit.
A3(0x9);this.TemperatureUnit.L(A.jb.Text);this.Mz.A3(0x14);this.Mz.R(A.aaR(A.act.
AjZ));this.Mz.L(A.jb.Text);this.PK.H(Bp6);this.PK.R(A.aaR(A.acf.PK));this.PK.L(A.
jb.Text);this.PK.Y(false);this.R4.H(Bp7);this.R4.A3(0x14);this.R4.R(Bp8);this.R4.
L(A.jb.Text);this.R4.Y(false);this.Uh.H(Bp9);this.Uh.R(Bp_);this.Uh.L(A.jb.Text);
this.Uh.Y(false);this.Ll.H(Bp$);this.Ll.R(A.aaR(A.act.AUg));this.Ll.A3(0x12);this.
Ll.L(A.jb.FZ);this.I5.B0=false;this.I5.Cs=true;this.I5.HG(1);this.I5.Fe(4000);this.
I5.T$(0);this.ZB.B0=false;this.ZB.Cs=true;this.ZB.HG(2);this.ZB.Fe(400);this.ZB.
T$(200);this.ZA.B0=false;this.ZA.Cs=true;this.ZA.HG(3);this.ZA.Fe(500);this.ZA.T$(
250);this.R6.H(Bqa);this.Hw.H(Bqb);this.Hw.Y(A._GetAutoObject(A.Device.Device).Hw
);this.Hw.R(A.aaR(A.acf.Hw));this.Hw.A3(0x12);this.Hw.L(A.jb.FZ);this.Ajk.Ar(A._GetAutoObject(
A.Device.Device).Hw);this.Ajk.Fe(500);this.Ajk.T$(1000);this.J(this.NL,0);this.J(
this.C6,0);this.J(this.Ach,0);this.J(this.JE,0);this.J(this.TemperatureUnit,0);this.
J(this.Mz,0);this.J(this.PK,0);this.J(this.R4,0);this.J(this.Uh,0);this.J(this.Ll
,0);this.J(this.R6,0);this.J(this.Hw,0);this.N.Cw=[this,this.Ar2];this.N.Ci=[this
,this.AZm];this.N.Cc=[this,this.AZn];this.N.CT(A.aaL(A.ach.Ad9));this.AkD.Q=[B=this.
C6,B.ARF,B.Cv];this.NL.Ay(A.aaL(A.ach.NL));this.C6.Ay(A.aaL(A.ach.Au8));this.Ach.
Ay(A.aaL(A.ach.AP1));this.JE.S(A.aaL(A.fl.Ah));this.TemperatureUnit.S(A.aaL(A.fl.
Ah));this.Mz.S(A.aaL(A.fl.Ad3));this.PK.S(A.aaL(A.fl.Ah));this.R4.S(A.aaL(A.fl.EA
));this.Uh.S(A.aaL(A.fl.EA));this.Ll.S(A.aaL(A.fl.Ad3));this.Ll.A7(A.aaL(A.fl.EA
));this.Ll.CB(A.aaL(A.fl.Ah));this.I5.Q=[B=A._GetAutoObject(A.Device.Device),B.ARW
,B.AZg];this.ZB.Q=[B=A._GetAutoObject(A.Device.Device),B.ADV,B.AH7];this.ZA.Q=[B=
A._GetAutoObject(A.Device.Device),B.ADV,B.AH7];this.R6.Ay(A.aaL(A.ach.Aqf));this.
Hw.S(A.aaL(A.fl.EA));this.Hw.A7(A.aaL(A.fl.J_));this.Hw.CB(A.aaL(A.fl.Ie));this.
Ajk.Q=[B=this.Hw,B.Fd,B.Y];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.AkD._Done();this.NL._Done();this.C6._Done();this.Ach._Done();this.JE._Done(
);this.TemperatureUnit._Done();this.Mz._Done();this.PK._Done();this.R4._Done();this.
Uh._Done();this.Ll._Done();this.I5._Done();this.ZB._Done();this.ZA._Done();this.
R6._Done();this.Hw._Done();this.Ajk._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.AkD._ReInit();this.NL._ReInit();this.C6._ReInit();
this.Ach._ReInit();this.JE._ReInit();this.TemperatureUnit._ReInit();this.Mz._ReInit(
);this.PK._ReInit();this.R4._ReInit();this.Uh._ReInit();this.Ll._ReInit();this.I5.
_ReInit();this.ZB._ReInit();this.ZA._ReInit();this.R6._ReInit();this.Hw._ReInit(
);this.Ajk._ReInit();this.JE.R(A.aaR(A.acf.AC7));this.Mz.R(A.aaR(A.act.AjZ));this.
PK.R(A.aaR(A.acf.PK));this.Ll.R(A.aaR(A.act.AUg));this.Hw.R(A.aaR(A.acf.Hw));this.
JE.S(A.aaL(A.fl.Ah));this.TemperatureUnit.S(A.aaL(A.fl.Ah));this.Mz.S(A.aaL(A.fl.
Ad3));this.PK.S(A.aaL(A.fl.Ah));this.R4.S(A.aaL(A.fl.EA));this.Uh.S(A.aaL(A.fl.EA
));this.Ll.S(A.aaL(A.fl.Ad3));this.Ll.A7(A.aaL(A.fl.EA));this.Ll.CB(A.aaL(A.fl.Ah
));this.Hw.S(A.aaL(A.fl.EA));this.Hw.A7(A.aaL(A.fl.J_));this.Hw.CB(A.aaL(A.fl.Ie
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.AkD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ach)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Mz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.R4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajk)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AT6={Acj:
function(){C.Q3.Acj.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cn(null);this.N.C3(A.aaL(A.ach.Au$));}break;default:;}},
Ws:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Km>3240)&&(A._GetAutoObject(A.Device.Device
).Km<5460)){A._GetAutoObject(A.Device.Device).Ahm();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AJQ(this);break;default:;}},Axc:
function(){C.Q3.Axc.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JE.R(A.aaR(A.acf.Bim));break;default:;}},Axd:function(){C.Q3.Axd.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).Wi(16711680);this.I5.Ar(true);}break;default:this.I5.Ar(false);
}},ATA:function(){this.C6.Ay(A.aaL(A.ach.Au_));this.C6.Cv(0);this.NL.Cv(0);},_Init:
function(aArg){C.Q3._Init.call(this,aArg);this.__proto__=C.AT6;this.Dl(C.AOm);},
_className:"Application::TemperatureMeasurementScreen"};C.AOr={Dc:null,IC:null,NN:
null,AP:null,AgE:null,A9:null,C9:function(E){C.BQ.C9.call(this,E);this.Dc.L(E);this.
IC.L(E);this.NN.L(E);this.AgE.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg
);A.acg.An._Init.call(this.Dc={I:this},0);A.acg.An._Init.call(this.IC={I:this},0
);A.acg.An._Init.call(this.NN={I:this},0);A.acg.DR._Init.call(this.AP={I:this},0
);A.acg.An._Init.call(this.AgE={I:this},0);A.acg.DR._Init.call(this.A9={I:this},
0);this.__proto__=C.AOr;this.Dc.H(AxS);this.IC.H(AGO);this.NN.H(AGS);this.AP.DM(
A_9);this.AP.DY(A__);this.AP.L(A.jb.Bc);this.AgE.H(Bqc);this.AgE.L(A.jb.C1);this.
A9.DM(Bqd);this.A9.DY(Bqe);this.A9.L(A.jb.Bc);this.J(this.Dc,0);this.J(this.IC,0
);this.J(this.NN,0);this.J(this.AP,0);this.J(this.AgE,0);this.J(this.A9,0);this.
Dc.Ay(A.aaL(A.ach.ACR));this.IC.Ay(A.aaL(A.ach.Ad$));this.NN.Ay(A.aaL(A.ach.Au3)
);this.AgE.Ay(A.aaL(A.ach.APy));},_Done:function(){this.__proto__=C.BQ;this.Dc._Done(
);this.IC._Done();this.NN._Done();this.AP._Done();this.AgE._Done();this.A9._Done(
);C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Dc._ReInit(
);this.IC._ReInit();this.NN._ReInit();this.AP._ReInit();this.AgE._ReInit();this.
A9._ReInit();},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Dc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AgE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dw={Et:null,CZ:null,AFJ:
0,AMW:0,Init:function(aArg){A.zV([this,this.AKu],A._GetAutoObject(A.Device.Device
).Ap,0);A.pe([this,this.AKu],this);},AKu:function(G){var Ac=this.AFJ;if(Ac<0){this.
CZ.Hd();this.CZ.DT(this.AMW);return;}this.CZ.DT(A._GetAutoObject(A.Device.Device
).Ap.Amu(Ac,14));this.CZ.AEf(A._GetAutoObject(A.Device.Device).Ap.IV(Ac,13));this.
CZ.Aez(A._GetAutoObject(A.Device.Device).Ap.HW(Ac,8));this.CZ.Ua(A._GetAutoObject(
A.Device.Device).Ap.HW(Ac,11));this.CZ.AeC(A._GetAutoObject(A.Device.Device).Ap.
HW(Ac,12));this.CZ.AeE(A._GetAutoObject(A.Device.Device).Ap.CD(Ac,5));},A8$:function(
E){if(this.AFJ===E)return;this.AFJ=E;A.pe([this,this.AKu],this);},A8E:function(E
){if(this.AMW===E)return;this.AMW=E;A.pe([this,this.AKu],this);},A7V:function(){
return this.AFJ;},_Init:function(aArg){C.Eu._Init.call(this,aArg);C.CP._Init.call(
this.Et={I:this},0);C.CZ._Init.call(this.CZ={I:this},0);this.__proto__=C.Dw;this.
Et.H(Bqf);this.Et.R(A.aaR(A.acf.GD));this.Et.A3(0x11);this.Et.L(A.jb.Text);this.
CZ.H(A_$);this.J(this.Et,0);this.J(this.CZ,0);this.Et.S(A.aaL(A.fl.Ah));this.Et.
A7(A.aaL(A.fl.Ak));this.Et.CB(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){
this.__proto__=C.Eu;this.Et._Done();this.CZ._Done();C.Eu._Done.call(this);},_ReInit:
function(){C.Eu._ReInit.call(this);this.Et._ReInit();this.CZ._ReInit();this.Et.R(
A.aaR(A.acf.GD));this.Et.S(A.aaL(A.fl.Ah));this.Et.A7(A.aaL(A.fl.Ak));this.Et.CB(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.Eu._Mark.call(this,D);if((B=this.Et).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.CZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.KG={Agl:null,Text:null,AeT:null,C9:function(E
){C.BQ.C9.call(this,E);this.Agl.L(E);this.Text.L(E);this.AeT.L(E);},_Init:function(
aArg){C.BQ._Init.call(this,aArg);A.acg.An._Init.call(this.Agl={I:this},0);C.CP._Init.
call(this.Text={I:this},0);A.acg.An._Init.call(this.AeT={I:this},0);this.__proto__=
C.KG;this.Agl.H(Bqg);this.Agl.L(A.jb.Text);this.Text.H(AG1);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.AeT.H(Bqh);this.AeT.L(A.jb.Text);this.
J(this.Agl,0);this.J(this.Text,0);this.J(this.AeT,0);this.Agl.Ay(A.aaL(A.ach.AOt
));this.Text.S(A.aaL(A.fl.J_));this.Text.A7(A.aaL(A.fl.Ie));},_Done:function(){this.
__proto__=C.BQ;this.Agl._Done();this.Text._Done();this.AeT._Done();C.BQ._Done.call(
this);},_ReInit:function(){C.BQ._ReInit.call(this);this.Agl._ReInit();this.Text.
_ReInit();this.AeT._ReInit();this.Text.S(A.aaL(A.fl.J_));this.Text.A7(A.aaL(A.fl.
Ie));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.Agl)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeT
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AOk={
_Init:function(aArg){C.KG._Init.call(this,aArg);this.__proto__=C.AOk;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.KG._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AOm={_Init:function(
aArg){C.KG._Init.call(this,aArg);this.__proto__=C.AOm;this.Kl(this.AeT,-2);this.
AeT.Ay(A.aaL(A.ach.Abc));},_className:"Application::HeaderDeviceTemperature"};C.
X7={Ai:function(Ae){C.Amm.Ai.call(this,Ae);this.U(A.aaR(A.acf.Bn9)+A.aaR(A.acf.Colon
));},Ce:function(Ac){var B;if(!this.AY)return;this.Ak$=0;this.As6=0;this.Xp=0;if(
!!this.AY){var P;for(P=0;P<this.AY.Cb();P++){this.Ak$+=this.AY.CD(P,1);this.As6+=
this.AY.CD(P,2);}if(this.Ak$>0)this.Xp=(this.As6/this.Ak$)*100;this.Am();}},_Init:
function(aArg){C.Amm._Init.call(this,aArg);this.__proto__=C.X7;this.AP.Y(false);
this.A9.Y(false);this.D5.Y(false);this.V.S(A.aaL(A.fl.J_));this.V.A7(A.aaL(A.fl.
Ie));},_ReInit:function(){C.Amm._ReInit.call(this);this.V.S(A.aaL(A.fl.J_));this.
V.A7(A.aaL(A.fl.Ie));},_className:"Application::EvaluationLossesSumItem"};C.A5v={
Ag:null,A6:0,_Init:function(aArg){this.__proto__=C.A5v;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A5w={KT:null,MQ:null,AV:0,X0:function(){this.KT=null;this.MQ=null;this.AV=0;
},Oo:function(A2){var G9;G9=A._NewObject(C.A5v,0);G9.A6=A2;if(!this.KT){this.KT=
G9;this.MQ=G9;this.AV=1;}else{this.MQ.Ag=G9;this.MQ=G9;this.AV=this.AV+1;}},Amw:
function(){var B;var Rv=0;var Oa=this.KT;while(!!Oa){Rv+=Oa.A6;Oa=Oa.Ag;}return Rv;
},Aju:function(){if(!this.AV)return 0;return this.Amw()/this.AV;},Aql:function(){
var B;if(!this.AV)return 0;var A0g=this.Aju();var AcT=0;var Oa=this.KT;while(!!Oa
){AcT+=Math.pow(Oa.A6-A0g,2);Oa=Oa.Ag;}AcT/=this.AV;AcT=Math.sqrt(AcT);return AcT;
},_Init:function(aArg){this.__proto__=C.A5w;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KT)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.Af7={Background:null,V:null,KM:0,Uf:5,Hb:false
,Ai:function(Ae){C.G_.Ai.call(this,Ae);if(this.Hb)this.Background.L(A.jb.Bi);else
this.Background.L(A.jb.CG);},U:function(E){C.G_.U.call(this,E);this.V.R(E);},Bf:
function(E){if(this.Hb===E)return;this.Hb=E;this.Am();},Ke:function(E){if(this.Uf===
E)return;this.Uf=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.G_._Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);C.CP.
_Init.call(this.V={I:this},0);this.__proto__=C.Af7;this.H(BD);this.Background.AX(
0x3F);this.Background.H(BD);this.V.AX(0x3F);this.V.H(AHL);this.V.A3(0x11);this.V.
L(A.jb.Text);this.KM=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.J_));this.V.A7(A.aaL(A.fl.Ie));this.V.CB(A.aaL(A.fl.By));},_Done:function(
){this.__proto__=C.G_;this.Background._Done();this.V._Done();C.G_._Done.call(this
);},_ReInit:function(){C.G_._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.J_));this.V.A7(A.aaL(A.fl.Ie));this.V.CB(A.aaL(A.fl.
By));},_Mark:function(D){var B;C.G_._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.ANd={We:function(G){this.Af5();this.IR(A.aaR(
A.acf.AUf),[this,this.ASK],5);this.IR(A.aaR(A.acf.AUd),[this,this.ASJ],7);this.IR(
A.aaR(A.acf.Calving),[this,this.Bj6],11);this.IR(A.aaR(A.acf.AnA),[this,this.Awc
],2);this.IR(A.aaR(A.acf.Xw),[this,this.AD5],1);this.IR(A.aaR(A.acf.At0),[this,this.
ADZ],0);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.AlZ)+A.
aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cd(6);},Dv:function(G){},Aa3:
function(){return C.AMj;},Aa4:function(){return C.AOP;},QY:function(G){A._GetAutoObject(
A.Device.Device).Ap.Bh(A._GetAutoObject(A.Device.Helper).ACd());},HJ:function(G){
C.GN.HJ.call(this,G);if(this.AjV()===false){this.N.Cn(A.aaL(A.ach.APg));this.N.Ci=[
this,this.A44];this.N.FC(A.jV);}this.N.OG(false);this.N.OH(false);},AfR:function(
){A._GetAutoObject(C.AW).BS(70);},AfQ:function(){A._GetAutoObject(C.AW).BS(71);}
,_Init:function(aArg){C.GN._Init.call(this,aArg);this.__proto__=C.ANd;var B;this.
Dl(C.AOn);this.Dt(A.aaR(A.acf.ARa));this.Av8([B=A._GetAutoObject(A.Device.Device
),B.A7w,B.A$Q]);},_ReInit:function(){C.GN._ReInit.call(this);this.Dt(A.aaR(A.acf.
ARa));},_className:"Application::DryCowListScreen"};C.ANc={_Init:function(aArg){
C.IT._Init.call(this,aArg);this.__proto__=C.ANc;this.K_.Ar(false);this.K_.Aj(false
);this.K_.Y(false);this.Jf.Ar(false);this.Jf.Aj(false);this.Jf.Y(false);},_className:
"Application::DryCowListFilterScreen"};C.ANb={_Init:function(aArg){C.Gy._Init.call(
this,aArg);this.__proto__=C.ANb;this.N.BZ(A.aaR(A.acf.A3$));},_ReInit:function(){
C.Gy._ReInit.call(this);this.N.BZ(A.aaR(A.acf.A3$));},_className:"Application::DryCowListActionsScreen"
};C.AOn={Eq:function(G){C.J$.Eq.call(this,G);this.Dc.Ay(A._GetAutoObject(A.Device.
Converter).Af$(9));},_Init:function(aArg){C.J$._Init.call(this,aArg);this.__proto__=
C.AOn;},_className:"Application::HeaderDryCowListFilter"};C.Aa0={Filter:null,LS:
null,AGa:A.jV,Ei:0,AFi:1,Operator:1,Bg:function(aSize){C.Ab3.Bg.call(this,aSize);
this.V.H([15,0,this.A0.M[0]-15,aSize[1]]);},Ai:function(Ae){C.Ab3.Ai.call(this,Ae
);this.LS.L(this.V.AQ);},Bh:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L7],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L7
],E,0);A.pe([this,this.L7],this);},L7:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tg((F=this.Filter,F[1].call(F[0])).DX(this.Ei,this.
Operator));else this.Tg(null);},Na:function(E){if(this.Ei===E)return;this.Ei=E;A.
pe([this,this.L7],this);},Tg:function(AM){if(!!AM){var A0U;if(this.AFi!==1)A0U=this.
AFi;else A0U=AM.Operator;this.U((this.AGa+CM)+A._GetAutoObject(A.Device.Converter
).A5r(A0U));this.Y_(false);}else{this.U(this.AGa);this.Y_(true);}},OF:function(E
){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.L7],this);},AE4:function(
E){if(this.AGa===E)return;this.AGa=E;A.pe([this,this.L7],this);},A80:function(E){
if(this.AFi===E)return;this.AFi=E;A.pe([this,this.L7],this);},_Init:function(aArg
){C.Ab3._Init.call(this,aArg);C.LS._Init.call(this.LS={I:this},0);this.__proto__=
C.Aa0;this.H(Asn);this.A0.H(Bqi);this.LS.H(AYY);this.Kl(this.V,-1);this.J(this.LS
,0);},_Done:function(){this.__proto__=C.Ab3;this.LS._Done();C.Ab3._Done.call(this
);},_ReInit:function(){C.Ab3._ReInit.call(this);this.LS._ReInit();},_Mark:function(
D){var B;C.Ab3._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.Ajo={LS:null,Ai:function(Ae){C.Qs.Ai.call(this,Ae);this.LS.L(this.V.AQ);},Tg:
function(AM){if(!!AM){this.HZ.Cv(1);this.Y_(true);this.LS.A8R(false);}else{this.
HZ.Cv(0);this.Y_(false);this.LS.A8R(true);}},_Init:function(aArg){C.Qs._Init.call(
this,aArg);C.LS._Init.call(this.LS={I:this},0);this.__proto__=C.Ajo;this.I1=20;this.
LS.H(AYY);this.J(this.LS,0);},_Done:function(){this.__proto__=C.Qs;this.LS._Done(
);C.Qs._Done.call(this);},_ReInit:function(){C.Qs._ReInit.call(this);this.LS._ReInit(
);},_Mark:function(D){var B;C.Qs._Mark.call(this,D);if((B=this.LS)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.ABg={Q:null,CU:function(
){this.U(A._GetAutoObject(A.Device.Helper).Amv(this.TableId,this.Ei));},Tg:function(
AM){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.HZ.Cv(1);else this.HZ.Cv(
0);},L6:function(G){A.pe([this,this.L7],this);},At:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.L6],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
L6],E,0);if(!!E)A.pe([this,this.L6],this);},_Init:function(aArg){C.Qs._Init.call(
this,aArg);this.__proto__=C.ABg;},_ReInit:function(){C.Qs._ReInit.call(this);this.
CU();},_Mark:function(D){var B;C.Qs._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.AOP={Yw:null,IZ:null,_Init:function(aArg){C.Dw._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yw={I:this},0);A.acg.Text._Init.call(this.IZ={I:this},0);this.__proto__=
C.AOP;this.A8E(1);this.Yw.H(Bqj);this.Yw.KL(true);this.Yw.R(A.aaR(A.acf.ADh));this.
Yw.L(A.jb.Text);this.IZ.H(SW);this.IZ.R(((A.aaR(A.acf.Rz)+A$a)+A.aaR(A.acf.A_O))+
OX);this.IZ.L(A.jb.Text);this.J(this.Yw,0);this.J(this.IZ,0);this.Yw.S(A.aaL(A.fl.
Ak));this.IZ.S(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.Dw;this.Yw._Done(
);this.IZ._Done();C.Dw._Done.call(this);},_ReInit:function(){C.Dw._ReInit.call(this
);this.Yw._ReInit();this.IZ._ReInit();this.Yw.R(A.aaR(A.acf.ADh));this.IZ.R(((A.
aaR(A.acf.Rz)+A$a)+A.aaR(A.acf.A_O))+OX);this.Yw.S(A.aaL(A.fl.Ak));this.IZ.S(A.aaL(
A.fl.By));},_Mark:function(D){var B;C.Dw._Mark.call(this,D);if((B=this.Yw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.AMj={Mc:null,KH:null,Adu:null,AP:null,A9:null
,W5:0,Init:function(aArg){},Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Mc.H(this.V.M);this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KH.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A9.H([this.KH.M[2]-1,0,this.
KH.M[2]+1,aSize[1]]);this.Adu.H([this.KH.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Bb.Ai.call(this,Ae);this.KH.L(this.V.AQ);this.Adu.L(this.V.AQ);if(!!this.W5&&(
this.W5!==5)){this.Mc.L(A._GetAutoObject(A.acj.Assessment).Qd(this.W5));this.V.L(
A._GetAutoObject(A.acj.Assessment).Xd(this.W5));}else this.Mc.L(this.Background.
AQ);},Ce:function(Ac){if(!this.AY)return;this.Hu=Ac;if(!!this.AY){var On=this.AY.
CD(Ac,1);var A1q=this.AY.CD(Ac,29);var S7=this.AY.Hz(Ac,4);var LK=this.AY.IV(Ac,
13);var Alc=this.AY.IV(Ac,17);var All=this.AY.HW(Ac,11);this.W5=A._GetAutoObject(
A.Device.Helper).ALu(LK,All,Alc);this.U(On.toFixed());this.KH.R(A1q.toFixed());this.
Adu.R(A._GetAutoObject(A.acj.KD).ACa(S7,A._GetAutoObject(A.Device.Helper).DF(),Bqk
));this.Am();}},_Init:function(aArg){C.Bb._Init.call(this,aArg);A.acg.AJ._Init.call(
this.Mc={I:this},0);A.acg.Text._Init.call(this.KH={I:this},0);A.acg.Text._Init.call(
this.Adu={I:this},0);A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(
this.A9={I:this},0);this.__proto__=C.AMj;this.Mc.H(Asw);this.AP.L(A.jb.Bc);this.
A9.L(A.jb.Bc);this.J(this.Mc,0);this.J(this.KH,0);this.J(this.Adu,0);this.J(this.
AP,0);this.J(this.A9,0);this.KH.S(A.aaL(A.fl.Ah));this.Adu.S(A.aaL(A.fl.Ah));this.
Init(aArg);},_Done:function(){this.__proto__=C.Bb;this.Mc._Done();this.KH._Done(
);this.Adu._Done();this.AP._Done();this.A9._Done();C.Bb._Done.call(this);},_ReInit:
function(){C.Bb._ReInit.call(this);this.Mc._ReInit();this.KH._ReInit();this.Adu.
_ReInit();this.AP._ReInit();this.A9._ReInit();this.KH.S(A.aaL(A.fl.Ah));this.Adu.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Bb._Mark.call(this,D);if((B=this.Mc
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Adu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.RG={AI2:0,Bck:false,Ai:function(Ae){C.Fk.Ai.call(this,Ae);if(this.Bck){this.
U(A.aaR(A.acf.AM$));this.Ki(A.jV);}else{this.U(A.aaR(A.acf.Bh4));if(this.AI2>0)this.
Ki(this.AI2.toFixed());else this.Ki(WT);}},Ce:function(G){C.Fk.Ce.call(this,G);this.
Bck=A._GetAutoObject(A.Device.Helper).W.IsDry;var Ak9=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Ak9>0)this.AI2=A._GetAutoObject(A.Device.Helper).
ML(Ak9,A._GetAutoObject(A.Device.Helper).DF());else this.AI2=0;this.Am();},_Init:
function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=C.RG;},_className:"Application::AnimalInfoItemLactationPhase"
};C.ALz={AKD:A.jV,Ai:function(Ae){C.Fk.Ai.call(this,Ae);this.U(A.aaR(A.acf.Rz));
this.Ki(this.AKD);},Ce:function(G){C.Fk.Ce.call(this,G);var S7=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.AKD=A._GetAutoObject(A.acj.KD).ACa(S7,A._GetAutoObject(
A.Device.Helper).DF(),((((Bql+A.aaR(A.acf.Bfn))+Bqm)+A.aaR(A.acf.Bfm))+Bqn)+A.aaR(
A.acf.AK7));this.Am();},_Init:function(aArg){C.Fk._Init.call(this,aArg);this.__proto__=
C.ALz;this.AKD=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fk._ReInit.call(this);
this.AKD=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AM5={T4:null,YQ:null,V7:null,V8:null,Sk:null,Init:function(aArg){this.A8(this.
T4);A.pe([this,this.MD],this);},Xj:function(G){A._GetAutoObject(A.Device.Device).
Cd(1);},_Init:function(aArg){C.Eb._Init.call(this,aArg);C.NQ._Init.call(this.T4={
I:this},0);C.NQ._Init.call(this.YQ={I:this},0);C.NQ._Init.call(this.V7={I:this},
0);C.Abv._Init.call(this.V8={I:this},0);C.T1._Init.call(this.Sk={I:this},0);this.
__proto__=C.AM5;var B;this.Dl(C.AOk);this.T4.H(JR);this.T4.Aj(true);this.T4.U(A.
aaR(A.acf.ABL));this.T4.Bf(false);this.T4.NT(94);this.YQ.H(P0);this.YQ.Aj(true);
this.YQ.U(A.acf.Info);this.YQ.Bf(true);this.YQ.NT(93);this.V7.H(ZQ);this.V7.Aj(true
);this.V7.U(A.aaR(A.acf.AFM));this.V7.Bf(false);this.V7.NT(73);this.V8.H(AkP);this.
V8.Aj(true);this.V8.U(A.aaR(A.acf.TempMeasurement));this.V8.Bf(true);this.V8.NT(
68);this.Sk.H(AnZ);this.Sk.Aj(true);this.Sk.U(A.aaR(A.acf.AB7));this.Sk.Bf(false
);this.J(this.T4,0);this.J(this.YQ,0);this.J(this.V7,0);this.J(this.V8,0);this.J(
this.Sk,0);this.N.Ci=[this,this.Xj];this.N.Cn(A.aaL(A.ach.ACW));this.T4.AN=[B=this.
T4,B.NW];this.YQ.AN=[B=this.YQ,B.NW];this.V7.AN=[B=this.V7,B.NW];this.V8.AN=[B=this.
V8,B.NW];this.Sk.AN=null;this.Sk.Aet([B=this.Sk,B.AsJ]);this.Sk.Gg([this,this.D3
,this.GG]);this.Sk.AR7([B=A._GetAutoObject(A.Device.Device),B.AqW,B.AsH]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Eb;this.T4._Done();this.YQ._Done();this.
V7._Done();this.V8._Done();this.Sk._Done();C.Eb._Done.call(this);},_ReInit:function(
){C.Eb._ReInit.call(this);this.T4._ReInit();this.YQ._ReInit();this.V7._ReInit();
this.V8._ReInit();this.Sk._ReInit();this.T4.U(A.aaR(A.acf.ABL));this.V7.U(A.aaR(
A.acf.AFM));this.V8.U(A.aaR(A.acf.TempMeasurement));this.Sk.U(A.aaR(A.acf.AB7));
},_Mark:function(D){var B;C.Eb._Mark.call(this,D);if((B=this.T4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sk
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"};C.
AM6={T2:null,Abt:null,V5:null,Init:function(aArg){this.A8(this.T2);},Bxd:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},BiH:function(G){if(A._GetAutoObject(
A.Device.Device).AaE<=20)A._GetAutoObject(A.Device.Device).A5(76,true,Bqo,0,null
);else A._GetAutoObject(A.Device.Device).A5(39,true,A.jV,0,[this,this.Bxd]);},_Init:
function(aArg){C.Eb._Init.call(this,aArg);C.NQ._Init.call(this.T2={I:this},0);C.
Cj._Init.call(this.Abt={I:this},0);C.Abv._Init.call(this.V5={I:this},0);this.__proto__=
C.AM6;var B;this.Dl(C.AOl);this.T2.H(JR);this.T2.Aj(true);this.T2.U(A.aaR(A.acf.
A4x));this.T2.Bf(false);this.T2.NT(74);this.Abt.H(P0);this.Abt.Aj(true);this.Abt.
U(A.aaR(A.acf.A5t));this.Abt.Bf(true);this.V5.H(ZQ);this.V5.Aj(true);this.V5.U(A.
aaR(A.acf.RangeTest));this.V5.Bf(false);this.V5.NT(15);this.J(this.T2,0);this.J(
this.Abt,0);this.J(this.V5,0);this.T2.AN=[B=this.T2,B.NW];this.Abt.AN=[this,this.
BiH];this.V5.AN=[B=this.V5,B.NW];this.Init(aArg);},_Done:function(){this.__proto__=
C.Eb;this.T2._Done();this.Abt._Done();this.V5._Done();C.Eb._Done.call(this);},_ReInit:
function(){C.Eb._ReInit.call(this);this.T2._ReInit();this.Abt._ReInit();this.V5.
_ReInit();this.T2.U(A.aaR(A.acf.A4x));this.Abt.U(A.aaR(A.acf.A5t));this.V5.U(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Eb._Mark.call(this,D);if((B=this.T2
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AOl={_Init:function(aArg){C.KG._Init.call(this,aArg);this.__proto__=C.AOl;this.
Text.R(A.aaR(A.acf.AFM));},_ReInit:function(){C.KG._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AFM));},_className:"Application::HeaderDeviceServiceMenu"};C.NQ={AgF:
null,Ai:function(Ae){C.Abv.Ai.call(this,Ae);this.AgF.L(this.V.AQ);},_Init:function(
aArg){C.Abv._Init.call(this,aArg);A.acg.An._Init.call(this.AgF={I:this},0);this.
__proto__=C.NQ;this.AgF.AX(0x38);this.AgF.H(Bqp);this.J(this.AgF,0);this.V.CB(A.
aaL(A.fl.By));this.AgF.Ay(A.aaL(A.ach.Ai6));},_Done:function(){this.__proto__=C.
Abv;this.AgF._Done();C.Abv._Done.call(this);},_ReInit:function(){C.Abv._ReInit.call(
this);this.AgF._ReInit();this.V.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Abv.
_Mark.call(this,D);if((B=this.AgF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.AM1={AgL:null,AgR:null,AgT:null,AgP:null,AjM:null,AgO:null,AgN:null,AgM:null
,AjK:null,AgK:null,AjL:null,AgS:null,AjN:null,AgQ:null,AjO:null,Init:function(aArg
){this.A8(this.AgL);},_Init:function(aArg){C.Eb._Init.call(this,aArg);C.PE._Init.
call(this.AgL={I:this},0);C.PE._Init.call(this.AgR={I:this},0);C.PE._Init.call(this.
AgT={I:this},0);C.PE._Init.call(this.AgP={I:this},0);C.PE._Init.call(this.AjM={I:
this},0);C.PE._Init.call(this.AgO={I:this},0);C.PE._Init.call(this.AgN={I:this},
0);C.PE._Init.call(this.AgM={I:this},0);C.PE._Init.call(this.AjK={I:this},0);C.PE.
_Init.call(this.AgK={I:this},0);C.PE._Init.call(this.AjL={I:this},0);C.PE._Init.
call(this.AgS={I:this},0);C.PE._Init.call(this.AjN={I:this},0);C.PE._Init.call(this.
AgQ={I:this},0);C.PE._Init.call(this.AjO={I:this},0);this.__proto__=C.AM1;this.Dl(
C.AOg);this.AgL.H(AsC);this.AgL.Aj(true);this.AgL.Sq(1);this.AgR.H(AYW);this.AgR.
Aj(true);this.AgR.Bf(true);this.AgR.Sq(2);this.AgT.H(Asy);this.AgT.Aj(true);this.
AgT.Bf(false);this.AgT.Sq(3);this.AgP.H(Asz);this.AgP.Aj(true);this.AgP.Bf(true);
this.AgP.Sq(4);this.AjM.H(An1);this.AjM.Aj(true);this.AjM.Sq(5);this.AgO.H(Bqq);
this.AgO.Aj(true);this.AgO.Bf(true);this.AgO.Sq(6);this.AgN.H(AsA);this.AgN.Aj(true
);this.AgN.Bf(false);this.AgN.Sq(7);this.AgM.H(AxR);this.AgM.Aj(true);this.AgM.Bf(
true);this.AgM.Sq(8);this.AjK.H(AYX);this.AjK.Aj(true);this.AjK.Sq(9);this.AgK.H(
An8);this.AgK.Aj(true);this.AgK.Bf(true);this.AgK.Sq(10);this.AjL.H(Bqr);this.AjL.
Aj(true);this.AjL.Sq(11);this.AgS.H(Bqs);this.AgS.Aj(true);this.AgS.Bf(true);this.
AgS.Sq(12);this.AjN.H(Bqt);this.AjN.Aj(true);this.AjN.Sq(13);this.AgQ.H(Bqu);this.
AgQ.Aj(true);this.AgQ.Bf(true);this.AgQ.Sq(14);this.AjO.H(Bqv);this.AjO.Aj(true);
this.AjO.Sq(15);this.J(this.AgL,0);this.J(this.AgR,0);this.J(this.AgT,0);this.J(
this.AgP,0);this.J(this.AjM,0);this.J(this.AgO,0);this.J(this.AgN,0);this.J(this.
AgM,0);this.J(this.AjK,0);this.J(this.AgK,0);this.J(this.AjL,0);this.J(this.AgS,
0);this.J(this.AjN,0);this.J(this.AgQ,0);this.J(this.AjO,0);this.Init(aArg);},_Done:
function(){this.__proto__=C.Eb;this.AgL._Done();this.AgR._Done();this.AgT._Done(
);this.AgP._Done();this.AjM._Done();this.AgO._Done();this.AgN._Done();this.AgM._Done(
);this.AjK._Done();this.AgK._Done();this.AjL._Done();this.AgS._Done();this.AjN._Done(
);this.AgQ._Done();this.AjO._Done();C.Eb._Done.call(this);},_ReInit:function(){C.
Eb._ReInit.call(this);this.AgL._ReInit();this.AgR._ReInit();this.AgT._ReInit();this.
AgP._ReInit();this.AjM._ReInit();this.AgO._ReInit();this.AgN._ReInit();this.AgM.
_ReInit();this.AjK._ReInit();this.AgK._ReInit();this.AjL._ReInit();this.AgS._ReInit(
);this.AjN._ReInit();this.AgQ._ReInit();this.AjO._ReInit();},_Mark:function(D){var
B;C.Eb._Mark.call(this,D);if((B=this.AgL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AgO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AgM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgK)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AjL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgS)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AjN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AOg={_Init:function(aArg){C.KG._Init.call(this
,aArg);this.__proto__=C.AOg;this.Text.R(A.aaR(A.acf.A4Y));},_ReInit:function(){C.
KG._ReInit.call(this);this.Text.R(A.aaR(A.acf.A4Y));},_className:"Application::HeaderDeviceCheck"
};C.PE={DeviceComponentToString:null,J6:null,Aup:0,BaZ:false,CU:function(){this.
V.R(this.DeviceComponentToString.BP(this.Aup));},Bg:function(aSize){var B;C.Cj.Bg.
call(this,aSize);this.J6.H(A.abM(this.J6.M,aSize[0]-((B=this.J6.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.J6.M[0]));},Ai:function(Ae){C.Cj.Ai.call(this,Ae);this.J6.
AD9(this.V.AQ);if(this.BaZ)this.J6.Av3(A.jb.ET);else this.J6.Av3(A.jb.FZ);},Sq:function(
E){if(this.Aup===E)return;this.Aup=E;this.U(this.DeviceComponentToString.BP(E));
this.Eq(this);},Eq:function(G){this.BaZ=A._GetAutoObject(A.Device.Device).AIS(this.
Aup);this.Am();},_Init:function(aArg){C.Cj._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.J6._Init.call(this.J6={I:this
},0);this.__proto__=C.PE;this.V.H(Bqw);this.V.A3(0x11);this.J6.H(Bqx);this.J(this.
J6,0);},_Done:function(){this.__proto__=C.Cj;this.DeviceComponentToString._Done(
);this.J6._Done();C.Cj._Done.call(this);},_ReInit:function(){C.Cj._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.J6._ReInit();this.CU();},_Mark:function(
D){var B;C.Cj._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.J6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.R3={Aw:null,DP:null,Z:null,Init:function(aArg){A.pe([this,this.AzZ],this);},
A8:function(E){C.AB.A8.call(this,E);this.AKy(this);this.DC(this);},Cx:function(G
){A.pe([this,this.MD],this);},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[
3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},AzZ:function(
G){var A$=A._GetAutoObject(A.Device.Helper).A5H();A._GetAutoObject(A.Device.Device
).Ap.Bh(A$);A.pe([this,this.MD],this);},Eo:function(G){A._GetAutoObject(C.AW).Fl(
);},A2m:function(G){A._GetAutoObject(C.AW).BS(95);},DC:function(G){this.N.CT(A.aaL(
A.ach.EU));this.N.Cw=[this,this.Eo];this.N.Cn(A.aaL(A.ach.ACV));if(!A._GetAutoObject(
A.Device.Device).Ap.Filter||A._GetAutoObject(A.Device.Helper).AqD(A._GetAutoObject(
A.Device.Device).Ap.Filter)){this.N.Ci=null;this.N.IX.Dm(100);}else{this.N.Ci=[this
,this.AzZ];this.N.IX.Dm(255);}this.N.C3(A.aaL(A.ach.Ad$));this.N.Cc=[this,this.A2m
];},MD:function(s){this.DC(s);},AKy:function(G){A.ab5("%s",Bqy);},BEt:function(s
){this.AKy(s);},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){
C.AB._Init.call(this,aArg);C.Aw._Init.call(this.Aw={I:this},0);A.acg.AJ._Init.call(
this.DP={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);this.__proto__=C.R3;this.
N.Ar(false);this.N.Y(true);this.Dl(C.Aa5);this.Aw.H(IK);this.DP.AX(0x3F);this.DP.
H(E4);this.DP.L(A.jb.CG);this.Z.H(Lp);this.Z.Kd(9);this.J(this.Aw,0);this.J(this.
DP,0);this.J(this.Z,0);this.Z.Ej=[this,this.G8];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Aw._Done();this.DP._Done();this.Z._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Aw._ReInit();this.DP.
_ReInit();this.Z._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuScreen"
};C.ANr={XY:null,XX:null,XK:null,Tx:null,DC:function(G){C.R3.DC.call(this,G);if(
this.AR===this.Tx){this.N.Cn(null);this.N.Ci=null;this.N.C3(null);this.N.Cc=null;
}},AKy:function(G){if(this.AR===this.Tx)this.Dl(C.AOr);else this.Dl(C.Aa5);},Bxw:
function(){switch(A._GetAutoObject(A.Device.Device).TemperatureUnit){case 0:return A.
aaL(A.ach.APs);case 1:return A.aaL(A.ach.APt);default:A.ab5("%s%s",Bqz,A._GetAutoObject(
A.Device.Device).TemperatureUnit.toFixed());}return null;},Bxx:function(){switch(
A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.APu);case 1:
return A.aaL(A.ach.APv);default:A.ab5("%s%s",AHU,A._GetAutoObject(A.Device.Device
).MassUnit.toFixed());}return null;},Ia:function(G){var Ct=(C.Fc.isPrototypeOf(G
)?G:null);if(!Ct)return;if(Ct===this.XY)A._GetAutoObject(C.AW).BS(75);else if(Ct===
this.XX)A._GetAutoObject(C.AW).BS(64);else if(Ct===this.XK)A._GetAutoObject(C.AW
).BS(66);else if(Ct===this.Tx)A._GetAutoObject(C.AW).BS(67);},_Init:function(aArg
){C.R3._Init.call(this,aArg);C.Fc._Init.call(this.XY={I:this},0);C.Fc._Init.call(
this.XX={I:this},0);C.Fc._Init.call(this.XK={I:this},0);C.Fc._Init.call(this.Tx={
I:this},0);this.__proto__=C.ANr;this.XY.H(PX);this.XY.Aj(true);this.XY.U(A.aaR(A.
acf.Ae7));this.XX.H(Kq);this.XX.Aj(true);this.XX.U(A.aaR(A.acf.Temperature));this.
XK.H(BqA);this.XK.Aj(true);this.XK.U(A.aaR(A.acf.Rating));this.Tx.H(BqB);this.Tx.
Aj(true);this.Tx.U(A.aaR(A.acf.A6K));this.J(this.XY,0);this.J(this.XX,0);this.J(
this.XK,0);this.J(this.Tx,0);this.XY.AN=[this,this.Ia];this.XY.Dy(this.Bxx());this.
XX.AN=[this,this.Ia];this.XX.Dy(this.Bxw());this.XK.AN=[this,this.Ia];this.XK.Dy(
A.aaL(A.ach.APq));this.Tx.AN=[this,this.Ia];this.Tx.Dy(A.aaL(A.ach.APr));},_Done:
function(){this.__proto__=C.R3;this.XY._Done();this.XX._Done();this.XK._Done();this.
Tx._Done();C.R3._Done.call(this);},_ReInit:function(){C.R3._ReInit.call(this);this.
XY._ReInit();this.XX._ReInit();this.XK._ReInit();this.Tx._ReInit();this.XY.U(A.aaR(
A.acf.Ae7));this.XX.U(A.aaR(A.acf.Temperature));this.XK.U(A.aaR(A.acf.Rating));this.
Tx.U(A.aaR(A.acf.A6K));},_Mark:function(D){var B;C.R3._Mark.call(this,D);if((B=this.
XY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tx)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuMainScreen"};C.ANs={Vo:null,XM:null,
XZ:null,AKy:function(G){this.Dl(C.AuV);},BxA:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AP6);case 1:return A.aaL(A.
ach.AP7);default:A.ab5("%s%s",AHU,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},Ia:function(G){var Ct=(C.Fc.isPrototypeOf(G)?G:null);if(!Ct)return;
if(Ct===this.Vo)A._GetAutoObject(C.AW).BS(77);else if(Ct===this.XZ)A._GetAutoObject(
C.AW).BS(65);else if(Ct===this.XM)A._GetAutoObject(C.AW).BS(76);},Bxz:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.APe
);case 1:return A.aaL(A.ach.APf);default:A.ab5("%s%s",AHU,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},BxB:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AP8);case 1:return A.aaL(A.
ach.AP9);default:A.ab5("%s%s",AHU,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},_Init:function(aArg){C.R3._Init.call(this,aArg);C.Fc._Init.call(
this.Vo={I:this},0);C.Fc._Init.call(this.XM={I:this},0);C.Fc._Init.call(this.XZ={
I:this},0);this.__proto__=C.ANs;this.Vo.H(PX);this.Vo.Aj(true);this.Vo.U(A.aaR(A.
acf.A_G));this.XM.H(AYZ);this.XM.Aj(true);this.XM.U(A.aaR(A.acf.A4n));this.XZ.H(
N6);this.XZ.Aj(true);this.XZ.U(A.aaR(A.acf.A_J));this.J(this.Vo,0);this.J(this.XM
,0);this.J(this.XZ,0);this.Vo.AN=[this,this.Ia];this.Vo.Dy(this.BxA());this.Vo.AbK(
A.aaL(A.ach.NM));this.XM.AN=[this,this.Ia];this.XM.Dy(this.Bxz());this.XZ.AN=[this
,this.Ia];this.XZ.Dy(this.BxB());},_Done:function(){this.__proto__=C.R3;this.Vo.
_Done();this.XM._Done();this.XZ._Done();C.R3._Done.call(this);},_ReInit:function(
){C.R3._ReInit.call(this);this.Vo._ReInit();this.XM._ReInit();this.XZ._ReInit();
this.Vo.U(A.aaR(A.acf.A_G));this.XM.U(A.aaR(A.acf.A4n));this.XZ.U(A.aaR(A.acf.A_J
));},_Mark:function(D){var B;C.R3._Mark.call(this,D);if((B=this.Vo)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XZ)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"};
C.ANv={Bcn:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).Zp(0));},_Init:function(aArg){C.Aqc._Init.call(this,aArg);this.
__proto__=C.ANv;this.AeF(A.aaR(A.acf.A66));},_ReInit:function(){C.Aqc._ReInit.call(
this);this.AeF(A.aaR(A.acf.A66));},_className:"Application::EvaluationWeightsRecentScreen"
};C.ANo={AhV:null,Aa8:null,Uy:null,Aax:null,Pb:null,Ai3:null,Af9:null,Ai4:null,Af_:
null,Aw:null,Aaq:null,AcQ:0,Ao3:0,Dv:function(G){switch(this.Cm.CL){case 4:{if(this.
IU.Fd())return;var Qm=this.Z.Bq[1]+80;this.Z.Gh([this.Z.Bq[0],Qm]);this.Z.Vc(null
,null);}break;case 5:{if(this.IU.Fd())return;var Qm=this.Z.Bq[1]-80;this.Z.Gh([this.
Z.Bq[0],Qm]);this.Z.Vc(null,null);}break;default:C.Fm.Dv.call(this,G);}},ApD:function(
LW,AcB){if(!LW)return;var Fj=A._NewObject(A.Device.Filter,0);var HQ=A._NewObject(
A.Device.Int32FilterCriterion,0);HQ.Initialize(1,0,AcB,true);Fj.CY(HQ);var AcM=A.
_NewObject(A.Device.Int32FilterCriterion,0);AcM.Initialize(8,2,0,true);Fj.CY(AcM
);LW.Bh(Fj);},Ah9:function(G){if(A._GetAutoObject(A.Device.Helper).W.AqE()){this.
AhV.Oo(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var AyA=this.Bxu(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
Aaq.Set(AyA,this.Aaq.Get(AyA)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.AcQ++;this.Ao3=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fm.Ah9.call(
this,G);},Z4:function(G){if(this.AcQ>1)A._GetAutoObject(A.Device.Device).A5(56,true
,this.AcQ.toFixed(),0,null);if(this.AcQ===1)A._GetAutoObject(A.Device.Device).A5(
53,true,this.Ao3.toFixed(),0,null);if(this.AhV.AV>0)this.Uy.U(((((((A._GetAutoObject(
A.Device.Converter).Axj(this.AhV.Aju()|0,1)+AxY)+A._GetAutoObject(A.Device.Converter
).Axj(this.AhV.Aql()|0,1))+CM)+A._GetAutoObject(A.acj.DN).AfE())+AxZ)+this.AhV.AV.
toFixed())+OX);else this.Uy.U(A.aaR(A.acf.Unknown));var Rv=this.Aaq.Amw();var P;
for(P=0;P<this.Aaq.My;P++){var Ba=this.BxP(P);if(!!Ba){var CC=this.Aaq.Get(P);Ba.
Bkn(CC);if(!Rv)Ba.A86(0);else Ba.A86(Math.round((CC*100)/Rv)|0);Ba.Bl1(this.BxO(
P,A._GetAutoObject(A.Device.Device).MassUnit));}}var AcV=false;if(this.AhV.AV>0)
AcV=true;this.IU.Y(!AcV);C.Fm.Z4.call(this,G);},Ac3:function(G){this.AhV.X0();this.
Aaq.Hd();this.AcQ=0;this.Ao3=0;C.Fm.Ac3.call(this,G);},BxP:function(aIndex){var Ba=
null;switch(aIndex){case 0:Ba=this.Pb;break;case 1:Ba=this.Ai3;break;case 2:Ba=this.
Af9;break;case 3:Ba=this.Ai4;break;case 4:Ba=this.Af_;break;default:throw new Error(
Ax0+aIndex.toFixed());}return Ba;},BxO:function(aIndex,Aoh){var B;var Th=A.jV;switch(
Aoh){case 0:{switch(aIndex){case 0:Th=BqC;break;case 1:Th=BqD;break;case 2:Th=BqE;
break;case 3:Th=BqF;break;case 4:Th=BqG;break;default:throw new Error(Ax0+aIndex.
toFixed());}Th=Th+(CM+A.aaR(A.acf.Azr));}break;case 1:{switch(aIndex){case 0:Th=
BqH;break;case 1:Th=BqI;break;case 2:Th=BqJ;break;case 3:Th=BqK;break;case 4:Th=
BqL;break;default:throw new Error(Ax0+aIndex.toFixed());}Th=Th+(CM+A.aaR(A.acf.A6r
));}break;default:A.ab5("%s%e",A$b,Aoh);}return Th;},Bxv:function(AIe,Aoh){var AcN=
0;switch(Aoh){case 0:switch(AIe){case 0:AcN=35000;break;case 1:AcN=40000;break;case
2:AcN=45000;break;case 3:AcN=50000;break;case 4:AcN=2147483647;break;default:throw new
Error(Ax0+AIe.toFixed());}break;case 1:switch(AIe){case 0:AcN=36287;break;case 1:
AcN=40823;break;case 2:AcN=45359;break;case 3:AcN=49895;break;case 4:AcN=2147483647;
break;default:throw new Error(Ax0+AIe.toFixed());}break;default:A.ab5("%s%e",A$b
,Aoh);}return AcN;},Bxu:function(A2,Aoh){var AyA=0;var P;for(P=0;P<this.Aaq.My;P++
)if(A2<this.Bxv(P,Aoh)){AyA=P;break;}return AyA;},E9:function(G){var B;this.Aw.Mq((
B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[
1]);},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Fm._Init.
call(this,aArg);C.Af7._Init.call(this.Aa8={I:this},0);C.Iv._Init.call(this.Uy={I:
this},0);C.Aax._Init.call(this.Aax={I:this},0);C.Pb._Init.call(this.Pb={I:this},
0);C.Pb._Init.call(this.Ai3={I:this},0);C.Pb._Init.call(this.Af9={I:this},0);C.Pb.
_Init.call(this.Ai4={I:this},0);C.Pb._Init.call(this.Af_={I:this},0);C.Aw._Init.
call(this.Aw={I:this},0);A.Device.Int32ArrayWrapper._Init.call(this.Aaq={I:this}
,0);this.__proto__=C.ANo;this.Dl(C.AuV);this.Aj$(A.aaR(A.acf.A5i));this.AeF(A.aaR(
A.acf.A6Z));this.Aa8.H(AsC);this.Aa8.Aj(true);this.Aa8.U(A.aaR(A.acf.A33));this.
Aa8.Bf(false);this.Aa8.Ke(5);this.Uy.H(AYW);this.Uy.Aj(true);this.Uy.U(A.jV);this.
Uy.Bf(true);this.Uy.Ke(5);this.Aax.H(Asy);this.Aax.Aj(true);this.Pb.H(Asz);this.
Pb.Aj(true);this.Pb.Bf(true);this.Ai3.H(AsA);this.Ai3.Aj(true);this.Af9.H(AxR);this.
Af9.Aj(true);this.Af9.Bf(true);this.Ai4.H(AYX);this.Ai4.Aj(true);this.Af_.H(An8);
this.Af_.Aj(true);this.Af_.Bf(true);this.Aw.H(IK);this.Aaq.Y$(5);this.J(this.Aa8
,-1);this.J(this.Uy,-1);this.J(this.Aax,-1);this.J(this.Pb,-1);this.J(this.Ai3,-
1);this.J(this.Af9,-1);this.J(this.Ai4,-1);this.J(this.Af_,-1);this.J(this.Aw,-1
);this.Z.Ej=[this,this.G8];this.AhV=A._NewObject(C.Avf,0);this.Uy.S(A.aaL(A.fl.Ah
));},_Done:function(){this.__proto__=C.Fm;this.Aa8._Done();this.Uy._Done();this.
Aax._Done();this.Pb._Done();this.Ai3._Done();this.Af9._Done();this.Ai4._Done();this.
Af_._Done();this.Aw._Done();this.Aaq._Done();C.Fm._Done.call(this);},_ReInit:function(
){C.Fm._ReInit.call(this);this.Aa8._ReInit();this.Uy._ReInit();this.Aax._ReInit(
);this.Pb._ReInit();this.Ai3._ReInit();this.Af9._ReInit();this.Ai4._ReInit();this.
Af_._ReInit();this.Aw._ReInit();this.Aaq._ReInit();this.Aj$(A.aaR(A.acf.A5i));this.
AeF(A.aaR(A.acf.A6Z));this.Aa8.U(A.aaR(A.acf.A33));this.Uy.S(A.aaL(A.fl.Ah));},_Mark:
function(D){var B;C.Fm._Mark.call(this,D);if((B=this.AhV)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aax)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ai3)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Af9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ai4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Af_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aaq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationBirthWeightsScreen"
};C.Aax={H3:null,Gj:null,Bg:function(aSize){C.Iv.Bg.call(this,aSize);this.H3.H([((
aSize[0]*57)/100)|0,0,((aSize[0]*80)/100)|0,aSize[1]]);this.Gj.H([this.H3.M[2],0
,aSize[0],aSize[1]]);},Ai:function(Ae){C.Iv.Ai.call(this,Ae);this.H3.L(this.V.AQ
);this.Gj.L(this.V.AQ);},_Init:function(aArg){C.Iv._Init.call(this,aArg);A.acg.Text.
_Init.call(this.H3={I:this},0);A.acg.Text._Init.call(this.Gj={I:this},0);this.__proto__=
C.Aax;this.U(A.aaR(A.acf.AGo));this.H3.H(BqM);this.H3.KL(true);this.H3.R(A.aaR(A.
acf.Ap2));this.H3.L(A.jb.Text);this.Gj.H(A$c);this.Gj.R(Afh);this.Gj.L(A.jb.Text
);this.J(this.H3,0);this.J(this.Gj,0);this.V.S(A.aaL(A.fl.Ie));this.H3.S(A.aaL(A.
fl.Ie));this.Gj.S(A.aaL(A.fl.J_));},_Done:function(){this.__proto__=C.Iv;this.H3.
_Done();this.Gj._Done();C.Iv._Done.call(this);},_ReInit:function(){C.Iv._ReInit.
call(this);this.H3._ReInit();this.Gj._ReInit();this.U(A.aaR(A.acf.AGo));this.H3.
R(A.aaR(A.acf.Ap2));this.V.S(A.aaL(A.fl.Ie));this.H3.S(A.aaL(A.fl.Ie));this.Gj.S(
A.aaL(A.fl.J_));},_Mark:function(D){var B;C.Iv._Mark.call(this,D);if((B=this.H3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemWeightClassHeading"};C.Pb={AP:null,A9:null,PP:null,H3:
null,Gj:null,A_I:A.jV,Ap2:0,A9B:0,Bg:function(aSize){C.Iv.Bg.call(this,aSize);this.
PP.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);this.AP.H([this.PP.M[2]-1,0,this.PP.M[
2]+1,aSize[1]]);this.H3.H([this.PP.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
A9.H([this.H3.M[2]-1,0,this.H3.M[2]+1,aSize[1]]);this.Gj.H([this.H3.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Iv.Ai.call(this,Ae);this.PP.L(this.V.AQ);this.
H3.L(this.V.AQ);this.Gj.L(this.V.AQ);},Bl1:function(E){if(this.A_I===E)return;this.
A_I=E;this.PP.R(E);},Bkn:function(E){if(this.Ap2===E)return;this.Ap2=E;this.H3.R(
E.toFixed());},A86:function(E){if(this.A9B===E)return;this.A9B=E;this.Gj.R(E.toFixed(
)+Axr);},_Init:function(aArg){C.Iv._Init.call(this,aArg);A.acg.AJ._Init.call(this.
AP={I:this},0);A.acg.AJ._Init.call(this.A9={I:this},0);A.acg.Text._Init.call(this.
PP={I:this},0);A.acg.Text._Init.call(this.H3={I:this},0);A.acg.Text._Init.call(this.
Gj={I:this},0);this.__proto__=C.Pb;this.AP.L(A.jb.Bc);this.A9.L(A.jb.Bc);this.PP.
H(BqN);this.PP.R(A.aaR(A.acf.AGo));this.PP.L(A.jb.Text);this.H3.R(ZS);this.H3.L(
A.jb.Text);this.Gj.R(BqO);this.Gj.L(A.jb.Text);this.J(this.AP,0);this.J(this.A9,
0);this.J(this.PP,0);this.J(this.H3,0);this.J(this.Gj,0);this.PP.S(A.aaL(A.fl.Ah
));this.H3.S(A.aaL(A.fl.Ah));this.Gj.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Iv;this.AP._Done();this.A9._Done();this.PP._Done();this.H3._Done();this.Gj._Done(
);C.Iv._Done.call(this);},_ReInit:function(){C.Iv._ReInit.call(this);this.AP._ReInit(
);this.A9._ReInit();this.PP._ReInit();this.H3._ReInit();this.Gj._ReInit();this.PP.
R(A.aaR(A.acf.AGo));this.PP.S(A.aaL(A.fl.Ah));this.H3.S(A.aaL(A.fl.Ah));this.Gj.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Iv._Mark.call(this,D);if((B=this.AP
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"
};C.ALL={AJ3:function(){var A$=A._GetAutoObject(A.Device.Helper).Mk();A._GetAutoObject(
A.Device.Device).Ap.Bh(A$);},_Init:function(aArg){C.Al6._Init.call(this,aArg);this.
__proto__=C.ALL;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.AQF={
RM:null,RS:null,RL:null,RP:null,Pd:null,RO:null,AKw:function(G){A.pe([this,this.
BAz],this);A.pe([this,this.BAo],this);A.pe([this,this.BAk],this);A.pe([this,this.
A3g],this);A.pe([this,this.BAr],this);A.pe([this,this.BAp],this);},Ia:function(G
){var Ct=(C.QJ.isPrototypeOf(G)?G:null);if(!Ct)return;if(Ct===this.RS)A._GetAutoObject(
C.AW).BS(20);else if(Ct===this.Pd)A._GetAutoObject(C.AW).BS(14);else if(Ct===this.
RM)A._GetAutoObject(C.AW).BS(12);else if(Ct===this.RP)A._GetAutoObject(C.AW).BS(
47);else if(Ct===this.RL)A._GetAutoObject(C.AW).BS(58);else if(Ct===this.RO)A._GetAutoObject(
C.AW).BS(69);},BAo:function(G){var A$=A._GetAutoObject(A.Device.Helper).Mk();var
AyH=A._NewObject(A.Device.BoolFilterCriterion,0);AyH.Initialize(9,0,true,true);A$.
CY(AyH);A._GetAutoObject(A.Device.Device).Ap.Bh(A$);this.Pd.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},BAz:function(G){var A$=A._GetAutoObject(A.
Device.Helper).Mk();var AAP=A._NewObject(A.Device.BoolFilterCriterion,0);AAP.Initialize(
12,0,true,true);A$.CY(AAP);A._GetAutoObject(A.Device.Device).Ap.Bh(A$);this.RS.Y9(
A._GetAutoObject(A.Device.Device).Ap.Cb().toFixed());},BAk:function(G){var A$=A.
_GetAutoObject(A.Device.Helper).Mk();var Ayn=A._NewObject(A.Device.BoolFilterCriterion
,0);Ayn.Initialize(8,0,true,true);A$.CY(Ayn);A._GetAutoObject(A.Device.Device).Ap.
Bh(A$);this.RM.Y9(A._GetAutoObject(A.Device.Device).Ap.Cb().toFixed());},A3g:function(
G){var A$=A._GetAutoObject(A.Device.Helper).A5B(A._GetAutoObject(A.Device.Device
).AAV);A._GetAutoObject(A.Device.Device).Ap.Bh(A$);this.RL.Y9(A._GetAutoObject(A.
Device.Device).Ap.Cb().toFixed());},BAr:function(G){var A$=A._GetAutoObject(A.Device.
Helper).A5K();A._GetAutoObject(A.Device.Device).Ap.Bh(A$);this.RP.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},BAp:function(G){var A$=A._GetAutoObject(A.
Device.Helper).ACd();A._GetAutoObject(A.Device.Device).Ap.Bh(A$);this.RO.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},_Init:function(aArg){C.TX._Init.call(this,
aArg);C.QJ._Init.call(this.RM={I:this},0);C.QJ._Init.call(this.RS={I:this},0);C.
QJ._Init.call(this.RL={I:this},0);C.QJ._Init.call(this.RP={I:this},0);C.QJ._Init.
call(this.Pd={I:this},0);C.QJ._Init.call(this.RO={I:this},0);this.__proto__=C.AQF;
this.RM.H(PX);this.RM.Aj(true);this.RM.U(A.aaR(A.acf.Alarm));this.RM.AbH(true);this.
RS.H(AYZ);this.RS.Aj(true);this.RS.U(A.aaR(A.acf.Ary));this.RS.AbH(true);this.RL.
H(N6);this.RL.Aj(true);this.RL.U(A.aaR(A.acf.ActionList));this.RL.AbH(true);this.
RP.H(PY);this.RP.Aj(true);this.RP.U(A.aaR(A.acf.ANU));this.RP.AbH(true);this.Pd.
H(SV);this.Pd.Ar(false);this.Pd.Aj(false);this.Pd.Y(false);this.Pd.U(A.aaR(A.acf.
ABx));this.Pd.AbH(true);this.RO.H(UE);this.RO.Aj(true);this.RO.U(A.aaR(A.acf.A5e
));this.RO.AbH(true);this.J(this.RM,0);this.J(this.RS,0);this.J(this.RL,0);this.
J(this.RP,0);this.J(this.Pd,0);this.J(this.RO,0);this.RM.AN=[this,this.Acy];this.
RM.Dy(A.aaL(A.ach.ACL));this.RM.AbK(A.aaL(A.ach.NM));this.RS.AN=[this,this.Acy];
this.RS.Dy(A.aaL(A.ach.AP5));this.RS.AbK(A.aaL(A.ach.NM));this.RL.AN=[this,this.
Acy];this.RL.Dy(A.aaL(A.ach.AO1));this.RL.AbK(A.aaL(A.ach.NM));this.RP.AN=[this,
this.Acy];this.RP.Dy(A.aaL(A.ach.APx));this.RP.AbK(A.aaL(A.ach.NM));this.Pd.AN=[
this,this.Acy];this.Pd.Dy(A.aaL(A.ach.ACL));this.Pd.AbK(A.aaL(A.ach.NM));this.RO.
AN=[this,this.Acy];this.RO.Dy(A.aaL(A.ach.APn));this.RO.AbK(A.aaL(A.ach.NM));},_Done:
function(){this.__proto__=C.TX;this.RM._Done();this.RS._Done();this.RL._Done();this.
RP._Done();this.Pd._Done();this.RO._Done();C.TX._Done.call(this);},_ReInit:function(
){C.TX._ReInit.call(this);this.RM._ReInit();this.RS._ReInit();this.RL._ReInit();
this.RP._ReInit();this.Pd._ReInit();this.RO._ReInit();this.RM.U(A.aaR(A.acf.Alarm
));this.RS.U(A.aaR(A.acf.Ary));this.RL.U(A.aaR(A.acf.ActionList));this.RP.U(A.aaR(
A.acf.ANU));this.Pd.U(A.aaR(A.acf.ABx));this.RO.U(A.aaR(A.acf.A5e));},_Mark:function(
D){var B;C.TX._Mark.call(this,D);if((B=this.RM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.AQE={RT:null,Vn:null,RQ:null,RN:null,RR:null,AKw:function(G){A.pe([this,this.
BAl],this);A.pe([this,this.BAv],this);A.pe([this,this.BAw],this);A.pe([this,this.
BAA],this);A.pe([this,this.BAx],this);},Ia:function(G){var Ct=(C.QJ.isPrototypeOf(
G)?G:null);if(!Ct)return;if(Ct===this.Vn)A._GetAutoObject(C.AW).BS(102);if(Ct===
this.RN)A._GetAutoObject(C.AW).BS(85);if(Ct===this.RQ)A._GetAutoObject(C.AW).BS(
80);if(Ct===this.RR)A._GetAutoObject(C.AW).BS(51);if(Ct===this.RT)A._GetAutoObject(
C.AW).BS(96);},BAw:function(G){var A$=A._GetAutoObject(A.Device.Helper).ACg();A.
_GetAutoObject(A.Device.Device).Ap.Bh(A$);this.RR.Y9(A._GetAutoObject(A.Device.Device
).Ap.Cb().toFixed());},BAA:function(G){var A$=A._GetAutoObject(A.Device.Helper).
A5T();A._GetAutoObject(A.Device.Device).Ap.Bh(A$);this.RT.Y9(A._GetAutoObject(A.
Device.Device).Ap.Cb().toFixed());},BAv:function(G){var A$=A._GetAutoObject(A.Device.
Helper).A5O();A._GetAutoObject(A.Device.Device).Ap.Bh(A$);this.RQ.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},BAl:function(G){var A$=A._GetAutoObject(A.
Device.Helper).ANV();A._GetAutoObject(A.Device.Device).Ap.Bh(A$);this.RN.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},BAx:function(G){var A$=A._GetAutoObject(A.
Device.Helper).AN6();A._GetAutoObject(A.Device.Device).Ap.Bh(A$);this.Vn.Y9(A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());},_Init:function(aArg){C.TX._Init.call(this,
aArg);C.QJ._Init.call(this.RT={I:this},0);C.QJ._Init.call(this.Vn={I:this},0);C.
QJ._Init.call(this.RQ={I:this},0);C.QJ._Init.call(this.RN={I:this},0);C.QJ._Init.
call(this.RR={I:this},0);this.__proto__=C.AQE;this.RT.H(BqP);this.RT.Aj(true);this.
RT.U(A.aaR(A.acf.A6Q));this.RT.AbH(true);this.Vn.H(BqQ);this.Vn.Aj(true);this.Vn.
U(A.aaR(A.acf.AFr));this.RQ.H(BqR);this.RQ.Aj(true);this.RQ.U(A.aaR(A.acf.A6T));
this.RQ.AbH(true);this.RN.H(BqS);this.RN.Aj(true);this.RN.U(A.aaR(A.acf.ABe));this.
RN.AbH(true);this.RR.H(BqT);this.RR.Aj(true);this.RR.U(A.aaR(A.acf.ARg));this.RR.
AbH(true);this.J(this.RT,0);this.J(this.Vn,0);this.J(this.RQ,0);this.J(this.RN,0
);this.J(this.RR,0);this.RT.AN=[this,this.Acy];this.RT.Dy(A.aaL(A.ach.APM));this.
RT.AbK(A.aaL(A.ach.NM));this.Vn.AN=[this,this.Acy];this.Vn.Dy(A.aaL(A.ach.AC3));
this.RQ.AN=[this,this.Acy];this.RQ.Dy(A.aaL(A.ach.APO));this.RQ.AbK(A.aaL(A.ach.
NM));this.RN.AN=[this,this.Acy];this.RN.Dy(A.aaL(A.ach.APi));this.RN.AbK(A.aaL(A.
ach.NM));this.RR.AN=[this,this.Acy];this.RR.Dy(A.aaL(A.ach.APQ));this.RR.AbK(A.aaL(
A.ach.NM));},_Done:function(){this.__proto__=C.TX;this.RT._Done();this.Vn._Done(
);this.RQ._Done();this.RN._Done();this.RR._Done();C.TX._Done.call(this);},_ReInit:
function(){C.TX._ReInit.call(this);this.RT._ReInit();this.Vn._ReInit();this.RQ._ReInit(
);this.RN._ReInit();this.RR._ReInit();this.RT.U(A.aaR(A.acf.A6Q));this.Vn.U(A.aaR(
A.acf.AFr));this.RQ.U(A.aaR(A.acf.A6T));this.RN.U(A.aaR(A.acf.ABe));this.RR.U(A.
aaR(A.acf.ARg));},_Mark:function(D){var B;C.TX._Mark.call(this,D);if((B=this.RT).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Vn)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.RQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsIdManagementScreen"
};C.ARe={We:function(G){this.Af5();this.ALh();this.A3H(A.aaR(A.acf.A6u),[this,this.
BlI],131072);this.A3H(A.aaR(A.acf.A6t),[this,this.BlH],16384);A._GetAutoObject(C.
Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.AMV)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Cd(6);},Dv:function(G){},Aa3:function(){return C.Ajd;},Aa4:function(
){return C.Ajz;},QY:function(G){A._GetAutoObject(A.Device.Device).Ap.Bh(A._GetAutoObject(
A.Device.Helper).A5O());},HJ:function(G){var F;C.Rx.HJ.call(this,G);if(this.AjV(
)===false){if(!!this.Fn&&((F=this.Fn,F[1].call(F[0]))===16)){this.N.Cn(A.aaL(A.ach.
APY));this.N.Ci=[this,this.A5c];}else{this.N.Cn(A.aaL(A.ach.APG));this.N.Ci=[this
,this.A4$];}this.N.FC(A.jV);}this.N.OG(false);this.N.OH(false);},AfR:function(){
A._GetAutoObject(C.AW).BS(81);},AfQ:function(){A._GetAutoObject(C.AW).BS(82);},BlH:
function(G){this.AFO(16384);},BlI:function(G){this.AFO(131072);},_Init:function(
aArg){C.Rx._Init.call(this,aArg);this.__proto__=C.ARe;this.Dl(C.AOF);this.Dt(A.aaR(
A.acf.A6X));this.ASl(A._GetAutoObject(C.Avr));},_ReInit:function(){C.Rx._ReInit.
call(this);this.Dt(A.aaR(A.acf.A6X));},_className:"Application::NoNaisIdListScreen"
};C.ARd={_Init:function(aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ARd;this.
Mn.Ar(false);this.Mn.Aj(false);this.Mn.Y(false);},_className:"Application::NoNaisIdListFilterScreen"
};C.ARc={_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.ARc;this.
N.BZ(A.aaR(A.acf.A4c));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.BZ(A.
aaR(A.acf.A4c));},_className:"Application::NoNaisIdListActionsScreen"};C.AOF={Eq:
function(G){C.J$.Eq.call(this,G);this.Dc.Ay(A._GetAutoObject(A.Device.Converter).
Af$(10));},_Init:function(aArg){C.J$._Init.call(this,aArg);this.__proto__=C.AOF;
},_className:"Application::HeaderNoNaisIdListFilter"};C.QV={Beb:false,Dv:function(
G){},Cx:function(G){C.GN.Cx.call(this,G);if(this.Beb&&(A._GetAutoObject(A.Device.
Device).Ui>0))A.pe([this,this.AHX],this);},Aly:function(G){this.A4_(this);},AfR:
function(){A._GetAutoObject(C.AW).BS(83);},AfQ:function(){A._GetAutoObject(C.AW).
BS(84);},ARm:function(G){throw new Error(An9);},A$y:function(s){this.ARm(s);},ARn:
function(G){throw new Error(An9);},A$z:function(s){this.ARn(s);},ARs:function(G){
throw new Error(An9);},AHX:function(s){this.ARs(s);},Bds:function(G){var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7)){this.Beb=true;
A._GetAutoObject(C.AW).BS(87);}},AfP:function(G){var B;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([this,this.Xk],[B=A._GetAutoObject(
A.Device.Device),B.Wd,B.WW],0);},Xk:function(G){var B;if(A._GetAutoObject(A.Device.
Device).Aht===3){A._GetAutoObject(A.Device.Device).A5(74,false,A.jV,0,[this,this.
AfP]);A.z$([this,this.Xk],[B=A._GetAutoObject(A.Device.Device),B.Wd,B.WW],0);A.pe([
this,this.AHX],this);}},AIR:function(){throw new Error(An9);},A7c:function(G){A.
_GetAutoObject(A.Device.Device).Cd(0);this.A49(this);},Bma:function(G){A._GetAutoObject(
A.Device.Device).Cd(0);this.Bgt(this);},_Init:function(aArg){C.GN._Init.call(this
,aArg);this.__proto__=C.QV;this.Dt(A.aaR(A.acf.A64));},_ReInit:function(){C.GN._ReInit.
call(this);this.Dt(A.aaR(A.acf.A64));},_className:"Application::RegistrationsListScreen"
};C.ATm={_Init:function(aArg){C.IT._Init.call(this,aArg);this.__proto__=C.ATm;},
_className:"Application::RegistrationsListFilterScreen"};C.ATl={_Init:function(aArg
){C.Gy._Init.call(this,aArg);this.__proto__=C.ATl;this.N.BZ(A.aaR(A.acf.A4e));},
_ReInit:function(){C.Gy._ReInit.call(this);this.N.BZ(A.aaR(A.acf.A4e));},_className:
"Application::RegistrationsListActionsScreen"};C.Ajy={Eq:function(G){C.VD.Eq.call(
this,G);this.Dc.Ay(A._GetAutoObject(A.Device.Converter).Af$(11));},_Init:function(
aArg){C.VD._Init.call(this,aArg);this.__proto__=C.Ajy;this.Text.H(BqU);this.Text.
R(A.jV);this.Text.A3(0x12);},_className:"Application::HeaderRegistrationsList"};
C.ABl={MR:0,AP:null,A9:null,D5:null,IB:null,SI:null,Gp:null,On:0,K3:0,Init:function(
aArg){},Bg:function(aSize){C.Bb.Bg.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AP.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.IB.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A9.H([this.IB.M[2]-1,0,this.IB.M[2]+1,aSize[
1]]);this.SI.H([this.IB.M[2],0,this.IB.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
D5.H([this.SI.M[2]-1,0,this.SI.M[2]+1,aSize[1]]);this.Gp.H([this.SI.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Bb.Ai.call(this,Ae);this.IB.L(this.V.AQ);this.
Gp.L(this.V.AQ);this.SI.L(this.V.AQ);if(A._GetAutoObject(A.Device.Helper).AjJ(this.
K3)){this.V.S(A.aaL(A.fl.Hk));this.U(A$d);this.SI.R(Ra);}else{this.V.S(A.aaL(A.fl.
Ah));this.U(this.On.toFixed());this.SI.R(A._GetAutoObject(A.Device.Helper).TD(this.
MR,0,5).toFixed());}},Ce:function(Ac){if(!this.AY)return;this.Hu=Ac;if(!!this.AY
){this.On=this.AY.CD(Ac,1);this.K3=this.AY.AN_(Ac,34);var Atc=this.AY.AN1(Ac,7);
this.MR=this.AY.LM(Ac,26);var Ayu=this.AY.Hz(Ac,4);var Afr=A._GetAutoObject(A.Device.
Helper).ML(Ayu,A._GetAutoObject(A.Device.Helper).DF());this.IB.Ay(A._GetAutoObject(
A.Device.Converter).Amt(Atc));if(Afr<100)this.Gp.R((Afr.toFixed()+CM)+A.aaR(A.acf.
AK7));else this.Gp.R(A._GetAutoObject(A.acj.KD).ACa(Ayu,A._GetAutoObject(A.Device.
Helper).DF(),AHB));this.Am();}},_Init:function(aArg){C.Bb._Init.call(this,aArg);
A.acg.AJ._Init.call(this.AP={I:this},0);A.acg.AJ._Init.call(this.A9={I:this},0);
A.acg.AJ._Init.call(this.D5={I:this},0);A.acg.An._Init.call(this.IB={I:this},0);
A.acg.Text._Init.call(this.SI={I:this},0);C.CP._Init.call(this.Gp={I:this},0);this.
__proto__=C.ABl;this.AP.H(An2);this.AP.L(A.jb.Bc);this.A9.H(An3);this.A9.L(A.jb.
Bc);this.D5.H(A$e);this.D5.L(A.jb.Bc);this.IB.H(A$f);this.IB.L(A.jb.Text);this.SI.
H(AxO);this.Gp.H(A$g);this.J(this.AP,0);this.J(this.A9,0);this.J(this.D5,0);this.
J(this.IB,0);this.J(this.SI,0);this.J(this.Gp,0);this.SI.S(A.aaL(A.fl.Ah));this.
Gp.S(A.aaL(A.fl.Ah));this.Gp.A7(A.aaL(A.fl.Ak));this.Gp.CB(A.aaL(A.fl.By));this.
Init(aArg);},_Done:function(){this.__proto__=C.Bb;this.AP._Done();this.A9._Done(
);this.D5._Done();this.IB._Done();this.SI._Done();this.Gp._Done();C.Bb._Done.call(
this);},_ReInit:function(){C.Bb._ReInit.call(this);this.AP._ReInit();this.A9._ReInit(
);this.D5._ReInit();this.IB._ReInit();this.SI._ReInit();this.Gp._ReInit();this.SI.
S(A.aaL(A.fl.Ah));this.Gp.S(A.aaL(A.fl.Ah));this.Gp.A7(A.aaL(A.fl.Ak));this.Gp.CB(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.Bb._Mark.call(this,D);if((B=this.AP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gp)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ACD={AjG:
null,Pr:null,IW:null,_Init:function(aArg){C.Dw._Init.call(this,aArg);A.acg.An._Init.
call(this.AjG={I:this},0);A.acg.An._Init.call(this.Pr={I:this},0);A.acg.An._Init.
call(this.IW={I:this},0);this.__proto__=C.ACD;this.AjG.H(BqV);this.AjG.L(A.jb.Text
);this.Pr.H(BqW);this.Pr.L(A.jb.Text);this.IW.H(A_6);this.IW.L(A.jb.Text);this.J(
this.AjG,0);this.J(this.Pr,0);this.J(this.IW,0);this.AjG.Ay(A.aaL(A.ach.ACZ));this.
Pr.Ay(A.aaL(A.ach.Au5));this.IW.Ay(A.aaL(A.ach.Au0));},_Done:function(){this.__proto__=
C.Dw;this.AjG._Done();this.Pr._Done();this.IW._Done();C.Dw._Done.call(this);},_ReInit:
function(){C.Dw._ReInit.call(this);this.AjG._ReInit();this.Pr._ReInit();this.IW.
_ReInit();},_Mark:function(D){var B;C.Dw._Mark.call(this,D);if((B=this.AjG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
AOH={IH:null,Agy:null,HK:null,Bc:null,Mu:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.Eq],[B=A._GetAutoObject(A.Device.Helper
).W,B.A7S,B.A8_],0);A.zX([this,this.Eq],[B=A._GetAutoObject(A.Device.Helper).W,B.
Wc,B.JJ],0);A.zX([this,this.Eq],[B=A._GetAutoObject(A.Device.Helper).W,B.Aq0,B.Ud
],0);A.zV([this,this.Eq],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
Eq],this);},C9:function(E){C.BQ.C9.call(this,E);this.IH.L(E);this.Agy.L(E);this.
HK.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HK.R(A.aaR(A.acf.AeL));else this.HK.R(((A.aaR(A.acf.GD)+A.aaR(A.acf.
Colon))+CM)+E.toFixed());},Eq:function(G){if(A._GetAutoObject(A.Device.Helper).W.
Aqn()){this.Awj(((A._GetAutoObject(A.Device.Helper).W.CI+1).toFixed()+A_S)+A._GetAutoObject(
A.Device.Device).Ap.Cb().toFixed());this.JJ(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.Nc(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Awj(A_T);this.JJ(2);
this.OnSetAnimalId(-1);this.Nc(0);}},JJ:function(E){if(this.Gender===E)return;this.
Gender=E;this.Agy.Ay(A._GetAutoObject(A.Device.Converter).Amt(E));},Awj:function(
E){if(this.Mu===E)return;this.Mu=E;this.IH.R(E);},Nc:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).AjJ(E))this.HK.
Y(false);else this.HK.Y(true);},_Init:function(aArg){C.BQ._Init.call(this,aArg);
A.acg.Text._Init.call(this.IH={I:this},0);A.acg.An._Init.call(this.Agy={I:this},
0);A.acg.Text._Init.call(this.HK={I:this},0);A.acg.DR._Init.call(this.Bc={I:this
},0);this.__proto__=C.AOH;this.IH.H(A_U);this.IH.HH(2);this.IH.KL(true);this.IH.
A3(0x12);this.IH.R(A_V);this.Agy.H(BqX);this.HK.H(BqY);this.HK.A3(0x11);this.HK.
R(A.aaR(A.acf.AeL));this.Bc.DM(AxT);this.Bc.DY(AxU);this.Bc.L(A.jb.Bc);this.J(this.
IH,0);this.J(this.Agy,0);this.J(this.HK,0);this.J(this.Bc,0);this.IH.S(A.aaL(A.fl.
Ak));this.Agy.Ay(A._GetAutoObject(A.Device.Converter).Amt(2));this.HK.S(A.aaL(A.
fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.IH._Done();this.
Agy._Done();this.HK._Done();this.Bc._Done();C.BQ._Done.call(this);},_ReInit:function(
){C.BQ._ReInit.call(this);this.IH._ReInit();this.Agy._ReInit();this.HK._ReInit();
this.Bc._ReInit();this.HK.R(A.aaR(A.acf.AeL));this.IH.S(A.aaL(A.fl.Ak));this.HK.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.IH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bc)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.AaA={EaseOfDeliveryToString:
null,Agp:null,Ce:function(G){C.Nz.Ce.call(this,G);var AI$=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.Ki(this.EaseOfDeliveryToString.Lo(AI$));this.GP.R(
this.Agp.AdV(AI$).toFixed());},C9:function(E){C.Nz.C9.call(this,E);this.GP.L(E);
},_Init:function(aArg){C.Nz._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.Agp._Init.call(this.
Agp={I:this},0);this.__proto__=C.AaA;this.U(A.aaR(A.acf.Agh));},_Done:function(){
this.__proto__=C.Nz;this.EaseOfDeliveryToString._Done();this.Agp._Done();C.Nz._Done.
call(this);},_ReInit:function(){C.Nz._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.Agp._ReInit();this.U(A.aaR(A.acf.Agh));},_Mark:function(D){var B;
C.Nz._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Agp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.XB={WhereAboutsToString:null,KR:null,Ce:function(G){C.Nz.Ce.call(this,G);var
K3=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Ki(this.WhereAboutsToString.
Lo(K3));this.GP.R(this.KR.AdV(K3).toFixed());},C9:function(E){C.Nz.C9.call(this,
E);this.GP.L(E);},_Init:function(aArg){C.Nz._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KR._Init.call(this.KR={
I:this},0);this.__proto__=C.XB;this.U(A.aaR(A.acf.I7));},_Done:function(){this.__proto__=
C.Nz;this.WhereAboutsToString._Done();this.KR._Done();C.Nz._Done.call(this);},_ReInit:
function(){C.Nz._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KR._ReInit(
);this.U(A.aaR(A.acf.I7));},_Mark:function(D){var B;C.Nz._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KR)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RJ={Cm:null,Z:null,Aw:null,Init:function(aArg){},Cx:function(G){var B;C.D2.Cx.
call(this,G);A.zX([this,this.Afi],[B=A._GetAutoObject(A.Device.Helper).W,B.QQ,B.
OnSetId],0);A.zX([this,this.Afi],[B=A._GetAutoObject(A.Device.Helper),B.UJ,B.UK]
,0);A.pe([this,this.Afi],this);},EV:function(G){var B;C.D2.EV.call(this,G);A.z$([
this,this.Afi],[B=A._GetAutoObject(A.Device.Helper).W,B.QQ,B.OnSetId],0);A.z$([this
,this.Afi],[B=A._GetAutoObject(A.Device.Helper),B.UJ,B.UK],0);},E9:function(G){var
B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.
Mr(-this.Z.Bq[1]);},Dv:function(G){switch(this.Cm.CL){case 6:case 7:this.Cm.NC=true;
break;case 4:this.Bew(4);break;case 5:this.Bew(5);break;default:;}},Bew:function(
Gq){var B;switch(Gq){case 5:{var Cz=this.Z.Bq[1]-40;if(Cz<-(((B=this.Z.Db(0x1))[
3]-B[1])-((B=this.Z.M)[3]-B[1])))Cz=-(((B=this.Z.Db(0x1))[3]-B[1])-((B=this.Z.M)[
3]-B[1]));if(Cz>0)Cz=0;this.Z.Gh([this.Z.Bq[0],Cz]);}break;case 4:{var Cz=this.Z.
Bq[1]+40;if(Cz>0)Cz=0;this.Z.Gh([this.Z.Bq[0],Cz]);}break;default:throw new Error(
BqZ);}},Gw:function(G){var B;var X=this.Z.Ag;var Aa;while(!!X&&!((X.T&0x200)===0x200
)){if(((X.T&0x400)===0x400)){Aa=(C.IS.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Ce(this
);}X=X.Ag;}},Afi:function(s){this.Gw(s);},MM:function(G){var B;this.Z.Vc(null,null
);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},
G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.D2._Init.call(
this,aArg);A.Core.BK._Init.call(this.Cm={I:this},0);A.Core.Z._Init.call(this.Z={
I:this},0);C.Aw._Init.call(this.Aw={I:this},0);this.__proto__=C.RJ;this.Cm.Filter=
147;this.Z.H(SY);this.Z.Kd(1);this.Aw.H(Asi);this.J(this.Z,0);this.J(this.Aw,0);
this.Cm.BL=[this,this.Dv];this.Cm.DS=[this,this.Dv];this.Z.Ej=[this,this.G8];this.
Init(aArg);},_Done:function(){this.__proto__=C.D2;this.Cm._Done();this.Z._Done();
this.Aw._Done();C.D2._Done.call(this);},_ReInit:function(){C.D2._ReInit.call(this
);this.Cm._ReInit();this.Z._ReInit();this.Aw._ReInit();},_Mark:function(D){var B;
C.D2._Mark.call(this,D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRowInfos"};C.XC={Aau:null,Xy:null,Aav:null,Xz:null
,AaA:null,XB:null,_Init:function(aArg){C.RJ._Init.call(this,aArg);C.Aau._Init.call(
this.Aau={I:this},0);C.Xy._Init.call(this.Xy={I:this},0);C.Aav._Init.call(this.Aav={
I:this},0);C.Xz._Init.call(this.Xz={I:this},0);C.AaA._Init.call(this.AaA={I:this
},0);C.XB._Init.call(this.XB={I:this},0);this.__proto__=C.XC;this.Aau.H(BD);this.
Aau.Aj(true);this.Xy.H(JR);this.Xy.Aj(true);this.Xy.Bf(true);this.Aav.H(P0);this.
Aav.Aj(true);this.Xz.H(ZQ);this.Xz.Aj(true);this.Xz.Bf(true);this.AaA.H(AkP);this.
AaA.Aj(true);this.XB.H(AnZ);this.XB.Aj(true);this.XB.Bf(true);this.J(this.Aau,0);
this.J(this.Xy,0);this.J(this.Aav,0);this.J(this.Xz,0);this.J(this.AaA,0);this.J(
this.XB,0);},_Done:function(){this.__proto__=C.RJ;this.Aau._Done();this.Xy._Done(
);this.Aav._Done();this.Xz._Done();this.AaA._Done();this.XB._Done();C.RJ._Done.call(
this);},_ReInit:function(){C.RJ._ReInit.call(this);this.Aau._ReInit();this.Xy._ReInit(
);this.Aav._ReInit();this.Xz._ReInit();this.AaA._ReInit();this.XB._ReInit();},_Mark:
function(D){var B;C.RJ._Mark.call(this,D);if((B=this.Aau)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Xy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aav)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XB)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalRegistrationInfos"};C.Xz={BreedToString:null,GP:null,MZ:null
,Ce:function(G){C.Iu.Ce.call(this,G);var Bu=A._GetAutoObject(A.Device.Helper).W.
Breed;this.U(this.BreedToString.BP(Bu));this.GP.R(this.MZ.AdV(Bu).toFixed());},C9:
function(E){C.Iu.C9.call(this,E);this.GP.L(E);},_Init:function(aArg){C.Iu._Init.
call(this,aArg);A.Device.BreedToString._Init.call(this.BreedToString={I:this},0);
A.acg.Text._Init.call(this.GP={I:this},0);A.Device.MZ._Init.call(this.MZ={I:this
},0);this.__proto__=C.Xz;this.BR.H(Bq0);this.GP.H(Bq1);this.GP.HH(5);this.GP.A3(
0x14);this.GP.R(Bq2);this.GP.L(A.jb.Text);this.J(this.GP,0);this.Hm.Ay(A.aaL(A.ach.
ACQ));this.GP.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Iu;this.BreedToString.
_Done();this.GP._Done();this.MZ._Done();C.Iu._Done.call(this);},_ReInit:function(
){C.Iu._ReInit.call(this);this.BreedToString._ReInit();this.GP._ReInit();this.MZ.
_ReInit();this.GP.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Iu._Mark.call(this
,D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GP)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoIconItemBreed"};C.Aav={Ce:function(G){C.Iu.Ce.call(this,
G);var AzD=A._GetAutoObject(A.Device.Helper).W.NaisIdMother;if(AzD>0)this.U(A._GetAutoObject(
A.Device.Converter).SM(AzD));else this.U(A.aaR(A.acf.Unknown));},_Init:function(
aArg){C.Iu._Init.call(this,aArg);this.__proto__=C.Aav;this.Hm.Ay(A.aaL(A.ach.APo
));},_className:"Application::AnimalInfoIconItemNaisIdMother"};C.Xy={Ye:null,Ce:
function(G){C.Iu.Ce.call(this,G);var S7=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;
var Afw=A._GetAutoObject(A.Device.Helper).W.BirthType;if(S7>0)this.U(A._GetAutoObject(
A.acj.KD).Ajs(S7));else this.U(A.aaR(A.acf.Unknown));var Ayw=A.aaL(A.aci.TB);switch(
Afw){case 0:Ayw=A.aaL(A.ach.ACO);break;case 1:{Ayw=A.aaL(A.ach.Au1);this.Ye.Cv(0
);}break;case 2:{Ayw=A.aaL(A.ach.Au1);this.Ye.Cv(1);}break;case 3:{Ayw=A.aaL(A.ach.
Au1);this.Ye.Cv(2);}break;default:A.ab5("%s%e",Bq3,Afw);}this.Ye.Ay(Ayw);},_Init:
function(aArg){C.Iu._Init.call(this,aArg);A.acg.An._Init.call(this.Ye={I:this},0
);this.__proto__=C.Xy;this.BR.H(Bq4);this.Ye.H(AG9);this.Ye.L(A.jb.Text);this.J(
this.Ye,0);this.Hm.Ay(A.aaL(A.ach.Au0));this.Ye.Ay(A.aaL(A.ach.ACO));},_Done:function(
){this.__proto__=C.Iu;this.Ye._Done();C.Iu._Done.call(this);},_ReInit:function(){
C.Iu._ReInit.call(this);this.Ye._ReInit();},_Mark:function(D){var B;C.Iu._Mark.call(
this,D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBirth"
};C.Aau={MR:0,XA:null,K3:0,Bg:function(aSize){C.Iu.Bg.call(this,aSize);this.XA.H(
this.Hm.M);},Ai:function(Ae){C.Iu.Ai.call(this,Ae);this.XA.L(this.BR.AQ);if(A._GetAutoObject(
A.Device.Helper).AjJ(this.K3)){this.U(A.aaR(A.acf.AnimalLoss));this.Hm.Y(false);
this.XA.Y(true);}else if(this.MR>0){this.U(A._GetAutoObject(A.Device.Converter).
SM(this.MR));this.Hm.Y(true);this.XA.Y(false);}else{this.U(A.aaR(A.acf.Unknown));
this.Hm.Y(true);this.XA.Y(false);}},Ce:function(G){C.Iu.Ce.call(this,G);this.MR=
A._GetAutoObject(A.Device.Helper).W.NaisId;this.K3=A._GetAutoObject(A.Device.Helper
).W.WhereAbouts;this.Am();},_Init:function(aArg){C.Iu._Init.call(this,aArg);A.acg.
Text._Init.call(this.XA={I:this},0);this.__proto__=C.Aau;this.XA.R(A$d);this.J(this.
XA,0);this.Hm.Ay(A.aaL(A.ach.Au5));this.XA.S(A.aaL(A.fl.Hk));},_Done:function(){
this.__proto__=C.Iu;this.XA._Done();C.Iu._Done.call(this);},_ReInit:function(){C.
Iu._ReInit.call(this);this.XA._ReInit();},_Mark:function(D){var B;C.Iu._Mark.call(
this,D);if((B=this.XA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"
};C.ALI={XC:null,Init:function(aArg){var B;A.zX([this,this.AzV],[B=A._GetAutoObject(
A.Device.Device),B.ADM,B.AH0],0);A.pe([this,this.AzV],this);},Dv:function(G){var
DW=(A.Core.BK.isPrototypeOf(G)?G:null);switch(DW.CL){case 6:this.Og(this);break;
case 7:this.MT(this);break;default:DW.NC=true;}},Cx:function(G){var B;this.XC.Cx(
this);C.AB.Cx.call(this,G);},EV:function(G){var B;this.XC.EV(this);C.AB.EV.call(
this,G);},AmZ:function(G){A._GetAutoObject(C.AW).Fl();},Xj:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MT:function(G){if(A._GetAutoObject(A.Device.
Device).Ap.Cb()<=1)return;var Lw=A._GetAutoObject(A.Device.Helper).W.CI;Lw=Lw+1;
if(Lw>=A._GetAutoObject(A.Device.Device).Ap.Cb())Lw=0;A._GetAutoObject(A.Device.
Helper).HF(Lw);},Og:function(G){if(A._GetAutoObject(A.Device.Device).Ap.Cb()<=1)
return;var Lw=A._GetAutoObject(A.Device.Helper).W.CI;Lw=Lw-1;if(Lw<0)Lw=A._GetAutoObject(
A.Device.Device).Ap.Cb()-1;A._GetAutoObject(A.Device.Helper).HF(Lw);},AzV:function(
G){if(!A._GetAutoObject(A.Device.Device).ApV)A._GetAutoObject(C.AW).Ag9(85);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.XC._Init.call(this.XC={I:this},0);this.
__proto__=C.ALI;this.Background.H(Ca);this.N.Y(true);this.N.OG(true);this.N.OH(true
);this.Dl(C.AOH);this.XC.H(E4);this.J(this.XC,0);this.N.Cw=[this,this.AmZ];this.
N.Ci=[this,this.Xj];this.N.CT(A.aaL(A.ach.EU));this.N.Cn(A.aaL(A.ach.Abb));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.XC._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.XC._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.XC)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.Iu={Hm:null,BR:null
,U:function(E){C.IS.U.call(this,E);this.BR.R(this.DD);},C9:function(E){C.IS.C9.call(
this,E);this.Hm.L(E);this.BR.L(E);},_Init:function(aArg){C.IS._Init.call(this,aArg
);A.acg.An._Init.call(this.Hm={I:this},0);C.CP._Init.call(this.BR={I:this},0);this.
__proto__=C.Iu;this.Hm.H(Bq5);this.Hm.L(A.jb.Text);this.BR.H(Bq6);this.BR.A3(0x11
);this.BR.L(A.jb.Text);this.J(this.Hm,0);this.J(this.BR,0);this.Hm.Ay(A.aaL(A.aci.
TB));this.BR.S(A.aaL(A.fl.Ah));this.BR.A7(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.IS;this.Hm._Done();this.BR._Done();C.IS._Done.call(this);},_ReInit:function(
){C.IS._ReInit.call(this);this.Hm._ReInit();this.BR._ReInit();this.BR.S(A.aaL(A.
fl.Ah));this.BR.A7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IS._Mark.call(this
,D);if((B=this.Hm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BR)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.IS={Background:null
,KM:0,Hb:false,CU:function(){this.Ce(this);},Init:function(aArg){var B;A.zX([this
,this.Baf],[B=A._GetAutoObject(A.Device.Helper).W,B.QQ,B.OnSetId],0);A.pe([this,
this.Baf],this);},Bg:function(aSize){C.G_.Bg.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.G_.Ai.call(this,Ae);if(this.
Hb)this.Background.L(A.jb.Bi);else this.Background.L(A.jb.CG);},Ce:function(G){}
,Baf:function(s){this.Ce(s);},Bf:function(E){if(this.Hb===E)return;this.Hb=E;this.
Am();},C9:function(E){if(this.KM===E)return;this.KM=E;},_Init:function(aArg){C.G_.
_Init.call(this,aArg);A.acg.AJ._Init.call(this.Background={I:this},0);this.__proto__=
C.IS;this.H(BD);this.Background.H(AHD);this.KM=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.G_;this.Background._Done(
);C.G_._Done.call(this);},_ReInit:function(){C.G_._ReInit.call(this);this.Background.
_ReInit();this.CU();},_Mark:function(D){var B;C.G_._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.Nz={GP:null,By$:function(G){this.BR.H(A.abN(this.BR.M,this.GP.M[0]));},_Init:
function(aArg){C.Fk._Init.call(this,aArg);A.acg.Text._Init.call(this.GP={I:this}
,0);this.__proto__=C.Nz;this.GP.AX(0xA);this.GP.H(Bq7);this.GP.HH(5);this.GP.I0(
true);this.GP.A3(0x14);this.GP.R(A.jV);this.GP.L(A.jb.Text);this.J(this.GP,0);this.
GP.QT([this,this.By$]);this.GP.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Fk;this.GP._Done();C.Fk._Done.call(this);},_ReInit:function(){C.Fk._ReInit.call(
this);this.GP._ReInit();this.GP.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fk.
_Mark.call(this,D);if((B=this.GP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.AwC={A97:false,_Init:function(aArg){C.AeI._Init.call(this,aArg);this.__proto__=
C.AwC;},_className:"Application::OptionsOverlayCheckableNode"};C.AMP={AEu:function(
E){C.Ap6.AEu.call(this,E);if(E)this.Pf.R(Bq8);else this.Pf.R(A$h);},_Init:function(
aArg){C.Ap6._Init.call(this,aArg);this.__proto__=C.AMP;this.Pf.R(A$h);this.Pf.S(
A.aaL(A.fl.Hk));},_className:"Application::DarkThemeRadioMenuItem"};C.AwE={LO:false
,_Init:function(aArg){C.AeI._Init.call(this,aArg);this.__proto__=C.AwE;},_className:
"Application::OptionsOverlayRadioNode"};C.AS5={GE:null,_Init:function(aArg){C.Cr.
_Init.call(this,aArg);C.Q0._Init.call(this.GE={I:this},0);this.__proto__=C.AS5;var
B;this.JK(A.aaR(A.acf.AB2));this.GE.H(AhA);this.GE.Aj(true);this.GE.Y(true);this.
GE.U(A.aaR(A.acf.AFp));this.GE.Arm(false);this.GE.A87(true);this.J(this.GE,0);this.
GE.Aet([B=this.GE,B.FJ]);this.GE.Gg([this,this.D3,this.GG]);this.GE.Akb(A.aaL(A.
ach.Edit));this.GE.At([B=A._GetAutoObject(A.Device.Device),B.ARP,B.AZb]);},_Done:
function(){this.__proto__=C.Cr;this.GE._Done();C.Cr._Done.call(this);},_ReInit:function(
){C.Cr._ReInit.call(this);this.GE._ReInit();this.JK(A.aaR(A.acf.AB2));this.GE.U(
A.aaR(A.acf.AFp));},_Mark:function(D){var B;C.Cr._Mark.call(this,D);if((B=this.GE
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesSettingsScreen"
};C.AS3={Gx:0,C4:null,A0:null,Ka:null,EZ:null,GermanStateToString:null,CountryToString:
null,Pm:0,K5:0,L4:false,Init:function(aArg){A.zX([this,this.MD],[this,this.Sn,this.
Lj],0);A.zX([this,this.MD],[this,this.Am2,this.Ag4],0);},Ai:function(Ae){C.Ed.Ai.
call(this,Ae);this.A0.FB(this.LL);this.Ka.FB(this.LL);this.EZ.C2(this.LL);},DC:function(
G){var F;if(!this.N)return;switch(this.A4){case 0:break;case 1:{(F=this.N,F[1].call(
F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(
F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(
F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(
null);(F=this.N,F[1].call(F[0])).BZ(this.CountryToString.BP(this.K5));(F=this.N,
F[1].call(F[0])).Cc=null;}break;case 2:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.
EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.
G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).BZ((A.aaR(A.acf.Go)+Axt)+this.GermanStateToString.Lo(A._GetAutoObject(A.Device.
Converter).ACb(this.Pm)));(F=this.N,F[1].call(F[0])).Cc=null;}break;default:{(F=
this.N,F[1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(
F=this.N,F[1].call(F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(
F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;(F=this.N,
F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).BZ(A.jV);(F=this.N,F[1].call(
F[0])).Cc=null;}}},Ep:function(EE){var Tc=this.A4;if(EE<0)EE=0;else if(EE>this.Rs
)EE=this.Rs;switch(EE){case 0:{this.A8(null);if(!this.Gx&&!this.Pm)this.Lj(0);}break;
case 1:this.A8(this.EZ);break;case 2:this.A8(this.Ka);break;case 3:if(((Tc===2)&&
!this.Pm)&&!this.Gx)return;else{this.A8(this.A0);if(!this.Gx||(Tc>0))this.A0.Sx(
2);else this.A0.Sx(7);}break;default:throw new Error(AsG+EE.toFixed());}this.A4=
EE;C.Ed.Ep.call(this,EE);},Bx:function(E){if(this.AK===E)return;this.AK=E;this.L4=
true;this.So(A._GetAutoObject(A.Device.Helper).TD(E,0,10));this.Ag4(A._GetAutoObject(
A.Device.Helper).TD(E,10,2)|0);this.Lj(A._GetAutoObject(A.Device.Converter).Acf(
E));this.L4=false;if(!!this.AK){this.Ka.Ke(2);this.A0.Ke(10);}else{this.Ka.Ke(0);
this.A0.Ke(0);}this.Am();},FJ:function(G){var F;if(!this.AK){var BO=this.AK;this.
Bx(A._GetAutoObject(A.Device.Helper).ACm());if(this.AK!==BO){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}this.Ep(2);}else this.Ep(this.Rs);},
Ajt:function(){return this.Gx;},Ajv:function(){return 9999999999;},Lj:function(E
){if(this.K5===E)return;this.K5=E;if(this.L4===false)A.pe([this,this.U5],this);A.
abo([this,this.Sn,this.Lj],0);},So:function(E){if(this.Gx===E)return;this.Gx=E;if(
this.L4===false)A.pe([this,this.U5],this);A.abo([this,this.AbA,this.So],0);},U5:
function(G){var F;var aString=(A.abl(A._GetAutoObject(A.Device.Converter).Ap3(this.
K5),3,10)+A.abl(this.Pm,2,10))+A.abm(this.Gx,10,10);var BO=this.AK;this.Bx(A.ab0(
aString,0,10));if(this.AK!==BO){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.
abo(this.Q,0);}},Ag4:function(E){if(this.Pm===E)return;this.Pm=E;if(this.L4===false
)A.pe([this,this.U5],this);A.abo([this,this.Am2,this.Ag4],0);},Sn:function(){return this.
K5;},AbA:function(){return this.Gx;},Am2:function(){return this.Pm;},_Init:function(
aArg){C.Ed._Init.call(this,aArg);C.C4._Init.call(this.C4={I:this},0);C.AQc._Init.
call(this.A0={I:this},0);C.Avd._Init.call(this.Ka={I:this},0);C.Ar7._Init.call(this.
EZ={I:this},0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={
I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);
this.__proto__=C.AS3;var B;this.Rs=3;this.A0.H(Bq9);this.Ka.H(Bq_);this.Ka.E1(16
);this.EZ.H(A$i);this.J(this.A0,0);this.J(this.Ka,0);this.J(this.EZ,0);this.C4.AEe([
this,this.Sn,this.Lj]);this.A0.At([this,this.AbA,this.So]);this.Ka.At([this,this.
Am2,this.Ag4]);this.EZ.CH(this.C4);this.EZ.At([B=this.C4,B.B9,B.B_]);this.Init(aArg
);},_Done:function(){this.__proto__=C.Ed;this.C4._Done();this.A0._Done();this.Ka.
_Done();this.EZ._Done();this.GermanStateToString._Done();this.CountryToString._Done(
);C.Ed._Done.call(this);},_ReInit:function(){C.Ed._ReInit.call(this);this.C4._ReInit(
);this.A0._ReInit();this.Ka._ReInit();this.EZ._ReInit();this.GermanStateToString.
_ReInit();this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ed._Mark.call(
this,D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ka)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AQc={NF:null,NE:null,EQ:null,F_:null,Eh:null,Dr:null,CR:null,Cp:null,FB:function(
E){if(this.M3===E)return;C.Lb.FB.call(this,E);this.Cp.C2(E);this.CR.C2(E);this.Dr.
C2(E);this.Eh.C2(E);this.F_.C2(E);this.EQ.C2(E);this.NE.C2(E);this.NF.C2(E);},X_:
function(Hq){var B3=null;switch(Hq){case-1:case 0:B3=this.FO;break;case 1:B3=this.
Cp;break;case 2:B3=this.CR;break;case 3:B3=this.Dr;break;case 4:B3=this.Eh;break;
case 5:B3=this.F_;break;case 6:B3=this.EQ;break;case 7:B3=this.NE;break;case 8:B3=
this.NF;break;case 9:B3=this.GO;break;default:A.ab5("%s",AhD);}return B3;},_Init:
function(aArg){C.Lb._Init.call(this,aArg);C.DE._Init.call(this.NF={I:this},0);C.
DE._Init.call(this.NE={I:this},0);C.DE._Init.call(this.EQ={I:this},0);C.DE._Init.
call(this.F_={I:this},0);C.DE._Init.call(this.Eh={I:this},0);C.DE._Init.call(this.
Dr={I:this},0);C.DE._Init.call(this.CR={I:this},0);C.DE._Init.call(this.Cp={I:this
},0);this.__proto__=C.AQc;this.H(Bq$);this.GO.H(AHS);this.NF.H(AxX);this.NE.H(AYO
);this.EQ.H(AYP);this.F_.H(AYQ);this.Eh.H(AYR);this.Dr.H(AYS);this.CR.H(AYT);this.
Cp.H(A_1);this.FO.H(AYU);this.EC.H(AYU);this.J(this.NF,-2);this.J(this.NE,-2);this.
J(this.EQ,-2);this.J(this.F_,-2);this.J(this.Eh,-2);this.J(this.Dr,-2);this.J(this.
CR,-2);this.J(this.Cp,-2);this.NF.Dk=[this,this.GI];this.NE.Dk=[this,this.GI];this.
EQ.Dk=[this,this.GI];this.F_.Dk=[this,this.GI];this.Eh.Dk=[this,this.GI];this.Dr.
Dk=[this,this.GI];this.CR.Dk=[this,this.GI];this.Cp.Dk=[this,this.GI];},_Done:function(
){this.__proto__=C.Lb;this.NF._Done();this.NE._Done();this.EQ._Done();this.F_._Done(
);this.Eh._Done();this.Dr._Done();this.CR._Done();this.Cp._Done();C.Lb._Done.call(
this);},_ReInit:function(){C.Lb._ReInit.call(this);this.NF._ReInit();this.NE._ReInit(
);this.EQ._ReInit();this.F_._ReInit();this.Eh._ReInit();this.Dr._ReInit();this.CR.
_ReInit();this.Cp._ReInit();},_Mark:function(D){var B;C.Lb._Mark.call(this,D);if((
B=this.NF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cp
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.AS4={
Gx:0,C4:null,A0:null,EZ:null,CountryToString:null,K5:0,L4:false,Init:function(aArg
){A.zX([this,this.MD],[this,this.Sn,this.Lj],0);},Ai:function(Ae){C.Ed.Ai.call(this
,Ae);this.A0.FB(this.LL);this.EZ.C2(this.LL);},DC:function(G){var F;if(!this.N)return;
switch(this.A4){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.EU
));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.
G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.
N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(
F[0])).BZ(this.CountryToString.BP(this.K5));(F=this.N,F[1].call(F[0])).Cc=null;}
break;default:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(
F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(
F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=
null;(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).BZ(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}}},Ep:function(EE){var Tc=this.A4;if(EE<0)EE=0;
else if(EE>this.Rs)EE=this.Rs;switch(EE){case 0:{this.A8(null);if(!this.Gx)this.
Lj(0);}break;case 1:this.A8(this.EZ);break;case 2:{this.A8(this.A0);if(!this.Gx||(
Tc>0))this.A0.Sx(2);else this.A0.Sx(7);}break;default:throw new Error(AsG+EE.toFixed(
));}this.A4=EE;C.Ed.Ep.call(this,EE);},Bx:function(E){if(this.AK===E)return;this.
AK=E;this.L4=true;this.So(A._GetAutoObject(A.Device.Helper).TD(E,0,12));this.Lj(
A._GetAutoObject(A.Device.Converter).Acf(E));this.L4=false;if(!!this.AK)this.A0.
Ke(12);else this.A0.Ke(0);this.Am();},FJ:function(G){var F;if(!this.AK){var BO=this.
AK;this.Bx(A._GetAutoObject(A.Device.Helper).ACm());if(this.AK!==BO){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}this.Ep(this.Rs);},Ajt:function(
){return this.Gx;},Ajv:function(){return 999999999999;},Lj:function(E){if(this.K5===
E)return;this.K5=E;if(this.L4===false)A.pe([this,this.U5],this);A.abo([this,this.
Sn,this.Lj],0);},So:function(E){if(this.Gx===E)return;this.Gx=E;if(this.L4===false
)A.pe([this,this.U5],this);A.abo([this,this.AbA,this.So],0);},U5:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).Ap3(this.K5),3,10)+A.abm(
this.Gx,12,10);var BO=this.AK;this.Bx(A.ab0(aString,0,10));if(this.AK!==BO){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},Sn:function(){return this.
K5;},AbA:function(){return this.Gx;},_Init:function(aArg){C.Ed._Init.call(this,aArg
);C.C4._Init.call(this.C4={I:this},0);C.AC5._Init.call(this.A0={I:this},0);C.Ar7.
_Init.call(this.EZ={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AS4;var B;this.Rs=2;this.A0.H(Bra);this.EZ.H(A$i);this.
J(this.A0,0);this.J(this.EZ,0);this.C4.AEe([this,this.Sn,this.Lj]);this.A0.At([this
,this.AbA,this.So]);this.EZ.CH(this.C4);this.EZ.At([B=this.C4,B.B9,B.B_]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Ed;this.C4._Done();this.A0._Done();this.
EZ._Done();this.CountryToString._Done();C.Ed._Done.call(this);},_ReInit:function(
){C.Ed._ReInit.call(this);this.C4._ReInit();this.A0._ReInit();this.EZ._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Ed._Mark.call(this,D);
if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DP:null,Z:null,Aw:null,XS:null,XT:null,XR:null,XP:null,XQ:null,Dv:function(
G){var B;C.AB.Dv.call(this,G);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(
this.AR,true,null,null);},Cx:function(G){C.AB.Cx.call(this,G);A._GetAutoObject(A.
Device.Device).Ap.Bh(null);A._GetAutoObject(A.Device.Device).Br.Bh(null);A._GetAutoObject(
A.Device.Helper).Akq();A._GetAutoObject(A.Device.Helper).ArO();},Ia:function(G){
var Ct=(C.Fc.isPrototypeOf(G)?G:null);if(!Ct)return;if(Ct===this.XS)A._GetAutoObject(
C.AW).BS(28);else if(Ct===this.XT)A._GetAutoObject(C.AW).BS(26);else if(Ct===this.
XR)A._GetAutoObject(C.AW).BS(62);else if(Ct===this.XP)A._GetAutoObject(C.AW).BS(
27);else if(Ct===this.XQ)A._GetAutoObject(C.AW).BS(89);},A2f:function(G){A._GetAutoObject(
C.AW).Fl();},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.
Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},G8:function(G){A.pe([this,this.
E9],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AJ._Init.call(
this.DP={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Aw._Init.call(this.
Aw={I:this},0);C.Fc._Init.call(this.XS={I:this},0);C.Fc._Init.call(this.XT={I:this
},0);C.Fc._Init.call(this.XR={I:this},0);C.Fc._Init.call(this.XP={I:this},0);C.Fc.
_Init.call(this.XQ={I:this},0);this.__proto__=C.NewMenu;this.Background.L(A.jb.C1
);this.N.Y(true);this.N.BZ(A.jV);this.Ec.Ar(false);this.Dl(C.Aqp);this.DP.AX(0x3F
);this.DP.H(E4);this.DP.L(A.jb.CG);this.Z.H(E4);this.Z.Kd(9);this.Aw.H(IK);this.
XS.H(PX);this.XS.Aj(true);this.XS.U(A.aaR(A.acf.A6O));this.XT.H(AYZ);this.XT.Aj(
true);this.XT.U(A.aaR(A.acf.NewAnimals));this.XR.H(N6);this.XR.Aj(true);this.XR.
U(A.aaR(A.acf.Calving));this.XP.H(PY);this.XP.Aj(true);this.XP.U(A.aaR(A.acf.ABj
));this.XQ.H(MC);this.XQ.Aj(true);this.XQ.U(A.aaR(A.acf.AnimalLoss));this.J(this.
DP,0);this.J(this.Z,0);this.J(this.Aw,0);this.J(this.XS,0);this.J(this.XT,0);this.
J(this.XR,0);this.J(this.XP,0);this.J(this.XQ,0);this.N.Cw=[this,this.A2f];this.
N.CT(A.aaL(A.ach.EU));this.Z.Ej=[this,this.G8];this.XS.AN=[this,this.Ia];this.XS.
Dy(A.aaL(A.ach.AC0));this.XT.AN=[this,this.Ia];this.XT.Dy(A.aaL(A.ach.Au9));this.
XR.AN=[this,this.Ia];this.XR.Dy(A.aaL(A.ach.APh));this.XP.AN=[this,this.Ia];this.
XP.Dy(A.aaL(A.ach.APd));this.XQ.AN=[this,this.Ia];this.XQ.Dy(A.aaL(A.ach.AO8));}
,_Done:function(){this.__proto__=C.AB;this.DP._Done();this.Z._Done();this.Aw._Done(
);this.XS._Done();this.XT._Done();this.XR._Done();this.XP._Done();this.XQ._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DP._ReInit(
);this.Z._ReInit();this.Aw._ReInit();this.XS._ReInit();this.XT._ReInit();this.XR.
_ReInit();this.XP._ReInit();this.XQ._ReInit();this.XS.U(A.aaR(A.acf.A6O));this.XT.
U(A.aaR(A.acf.NewAnimals));this.XR.U(A.aaR(A.acf.Calving));this.XP.U(A.aaR(A.acf.
ABj));this.XQ.U(A.aaR(A.acf.AnimalLoss));},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XR
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewMenu"};C.
AQ6={KY:null,EaseOfDelivery:null,BirthType:null,Acn:null,Lf:null,Cq:null,GU:null
,Ld:null,Ay7:true,Init:function(aArg){this.A8(this.C8);A.pe([this,this.Gw],this);
},Eo:function(G){var B;A._GetAutoObject(A.Device.Helper).W.Hd();A._GetAutoObject(
C.AW).Fl();if(!!this.KY)this.KY.Eo(this);},AfO:function(G){var B;var F;A._GetAutoObject(
A.Device.Helper).W.DT((F=this.B5.Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Helper
).W.Av6(true);if(!!this.KY)this.KY.AfO(this);if(A._GetAutoObject(A.Device.Device
).Ap.Lc())A._GetAutoObject(A.Device.Helper).AJw(A._GetAutoObject(A.Device.Helper
).W,5,5,0,[this,this.Apd]);else{this.AiD();A.pe([this,this.ApC],this);}},AtG:function(
){this.N.BZ(A.jV);this.N.C3(A.aaL(A.ach.AC4));this.N.Cc=[this,this.Ayb];},Cx:function(
G){var B;C.HT.Cx.call(this,G);if(A._GetAutoObject(A.Device.Device).Ap.Lc()){A._GetAutoObject(
A.Device.Device).A5(41,true,A._GetAutoObject(A.Device.Device).Ap.HA().toFixed(),
0,null);this.Eo(this);}else if(this.Ay7){this.Ay7=false;A.pe([this,this.A2t],this
);}else if(!this.KY){this.KY=A._NewObject(C.AQ7,0);this.KY.A8D([this,this.AAh]);
A._GetAutoObject(A.Device.Helper).W.Gf();A._GetAutoObject(A.Device.Helper).ApP(A.
_GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.Helper).W.Nc(this.Asf.
AdV(6));this.KY.LI(this);if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.
Eo(this);}},AiD:function(){A._GetAutoObject(A.Device.Helper).W.Cl(A._GetAutoObject(
A.Device.Device).Ap);var L1=A._GetAutoObject(A.Device.Device).Ap.K9(0,A._GetAutoObject(
A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Device).Sy(L1);if(A._GetAutoObject(
A.Device.Helper).AmF()){if(A._GetAutoObject(A.Device.Device).Br.Lc())A._GetAutoObject(
A.Device.Device).A5(50,true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),
0,null);else{var BY=A._NewObject(A.Device.Rating,0);BY.Gf();BY.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);BY.OnSetBodyWeight(this.KB);BY.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);BY.Cl(A._GetAutoObject(A.Device.Device).Br);}}A.
_GetAutoObject(A.Device.Helper).A5U(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},ApC:function(G){var B;if(!!this.KY)this.KY.ApC(this);},Gw:function(G){if(
A._GetAutoObject(A.Device.Helper).AmF())this.C7.Y(true);else this.C7.Y(false);},
Apd:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",Ast,As.Id);}},AAh:function(G){this.
LI(this);this.Aev(A._GetAutoObject(A.Device.Helper).Aa1(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.Jx(this.C8);},Ape:function(G){var F;C.HT.Ape.call(this
,G);(F=this.C7.Q,F[2].call(F[0],this.C7.Anw));},A2t:function(G){A._GetAutoObject(
C.AW).BS(90);},_Init:function(aArg){C.HT._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Acn._Init.call(this.Acn={I:this},0);C.Q0._Init.call(this.Lf={I:this
},0);C.SA._Init.call(this.Cq={I:this},0);C.BW._Init.call(this.GU={I:this},0);C.BW.
_Init.call(this.Ld={I:this},0);this.__proto__=C.AQ6;var B;this.Dl(C.AOE);this.Lf.
H(AhA);this.Lf.Aj(true);this.Lf.U(A.aaR(A.acf.ABH));this.CE.H(Acu);this.Cq.H(Acu
);this.Cq.Aj(true);this.Cq.U(A.aaR(A.acf.AdQ));this.Cq.AES(true);this.GU.H(Acu);
this.GU.Aj(true);this.GU.U(A.aaR(A.acf.AqP));this.Ld.H(Acu);this.Ld.Aj(true);this.
Ld.U(A.aaR(A.acf.Agh));this.J(this.Lf,-4);this.J(this.Cq,-2);this.J(this.GU,0);this.
J(this.Ld,0);this.EaseOfDelivery.LU(A._GetAutoObject(A.Device.Helper).W);this.BirthType.
LU(A._GetAutoObject(A.Device.Helper).W);this.Acn.LU(A._GetAutoObject(A.Device.Helper
).W);this.Lf.Gg([this,this.D3,this.GG]);this.Lf.At([B=A._GetAutoObject(A.Device.
Helper).W,B.ARL,B.Ane]);this.Cq.Gg([this,this.D3,this.GG]);this.Cq.LT([B=this.Cq
,B.FJ]);this.Cq.LV(A.aaL(A.ach.Edit));this.Cq.AbM([B=A._GetAutoObject(A.Device.Helper
).W,B.Avy,B.Sp]);this.Gb.At([B=this.Acn,B.B9,B.B_]);this.Gb.CH(this.Acn);this.GU.
At([B=this.BirthType,B.B9,B.B_]);this.GU.CH(this.BirthType);this.Ld.At([B=this.EaseOfDelivery
,B.B9,B.B_]);this.Ld.CH(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HT;this.EaseOfDelivery._Done();this.BirthType._Done();this.Acn.
_Done();this.Lf._Done();this.Cq._Done();this.GU._Done();this.Ld._Done();C.HT._Done.
call(this);},_ReInit:function(){C.HT._ReInit.call(this);this.EaseOfDelivery._ReInit(
);this.BirthType._ReInit();this.Acn._ReInit();this.Lf._ReInit();this.Cq._ReInit(
);this.GU._ReInit();this.Ld._ReInit();this.Lf.U(A.aaR(A.acf.ABH));this.Cq.U(A.aaR(
A.acf.AdQ));this.GU.U(A.aaR(A.acf.AqP));this.Ld.U(A.aaR(A.acf.Agh));},_Mark:function(
D){var B;C.HT._Mark.call(this,D);if((B=this.KY)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Lf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ld)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"};C.ALK={Init:function(
aArg){var B;A.zX([this,this.Be5],[B=A._GetAutoObject(A.Device.Device),B.ADT,B.AH5
],0);A.pe([this,this.Be5],this);},AJ3:function(){var A$=null;switch(A._GetAutoObject(
A.Device.Device).Abw){case 0:A$=A._GetAutoObject(A.Device.Helper).ACd();break;case
1:A$=A._GetAutoObject(A.Device.Helper).ANX();break;case 2:A$=A._GetAutoObject(A.
Device.Helper).Mk();break;default:throw new Error(AY0+A._GetAutoObject(A.Device.
Device).Abw.toFixed());}A._GetAutoObject(A.Device.Device).Ap.Bh(A$);},Be5:function(
G){switch(A._GetAutoObject(A.Device.Device).Abw){case 0:this.Dt(A.aaR(A.acf.ARa)
);break;case 1:this.Dt(A.aaR(A.acf.Biw));break;case 2:this.Dt(A.aaR(A.acf.Avq));
break;default:A.ab5("%s",AY0+A._GetAutoObject(A.Device.Device).Abw.toFixed());}}
,_Init:function(aArg){C.Al6._Init.call(this,aArg);this.__proto__=C.ALK;this.Blr(
C.AOU);this.Ec.AbI(A._NewObject(C.AOJ,0));this.Init(aArg);},_className:"Application::AnimalSearchDriedOffOverlay"
};C.AQ7={AzD:0,AcX:null,Aum:null,BcJ:0,A2G:0,A1D:0,Init:function(aArg){this.BcJ=
A._GetAutoObject(A.Device.Helper).W.Id;this.AcX=A._GetAutoObject(A.Device.Device
).Ap.Filter;this.AzD=A._GetAutoObject(A.Device.Helper).W.NaisId;this.A1D=A._GetAutoObject(
A.Device.Helper).W.AnimalType;},LI:function(G){A._GetAutoObject(A.Device.Helper).
W.Ane(this.AzD);A._GetAutoObject(A.Device.Helper).W.AeB(true);switch(this.A1D){case
0:case 1:A._GetAutoObject(A.Device.Helper).W.DT(0);break;case 2:A._GetAutoObject(
A.Device.Helper).W.DT(2);break;default:A.ab5("%s%e",AxW,this.A1D);}},Eo:function(
G){A._GetAutoObject(A.Device.Device).Ap.Bh(this.AcX);if(!!this.A2G)this.Be7();},
AfO:function(G){A._GetAutoObject(A.Device.Device).Ap.Bh(null);},Be7:function(){var
Atj=A._NewObject(A.Device.Animal,0);var Ac=A._GetAutoObject(A.Device.Device).Ap.
K9(0,this.BcJ);Atj.EB(Ac,A._GetAutoObject(A.Device.Device).Ap);Atj.AvV(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);Atj.Ari(false);Atj.Av7(Atj.LactationNumber+1);Atj.
Cl(A._GetAutoObject(A.Device.Device).Ap);},ApC:function(G){this.A2G++;var Bwn=A.
_GetAutoObject(A.Device.Converter).BfR(A._GetAutoObject(A.Device.Helper).W.BirthType
);if((this.A2G<Bwn)&&(A._GetAutoObject(A.Device.Helper).AjJ(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts)===false))A._GetAutoObject(A.Device.Device).A5(59,true,A.jV
,0,[this,this.U0]);else this.BbI(this);},U0:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===8))this.BbI(this);else if(!!As&&(
As.PopupState===7))this.AAh(this);},AAh:function(G){var B;var H8=A._GetAutoObject(
A.Device.Helper).W.AnimalType;var Afw=A._GetAutoObject(A.Device.Helper).W.BirthType;
var Bu=A._GetAutoObject(A.Device.Helper).W.Breed;var S7=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AI$=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;
if(!!this.Aum)(B=this.Aum)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper
).W.DT(H8);A._GetAutoObject(A.Device.Helper).W.Aj7(Afw);A._GetAutoObject(A.Device.
Helper).W.NR(Bu);A._GetAutoObject(A.Device.Helper).W.Sp(S7);A._GetAutoObject(A.Device.
Helper).W.Aj_(AI$);},BbI:function(G){this.Be7();A._GetAutoObject(C.AW).Fl();A._GetAutoObject(
A.Device.Device).Ap.Bh(this.AcX);},A8D:function(E){if(A.aa0(this.Aum,E))return;this.
Aum=E;},_Init:function(aArg){this.__proto__=C.AQ7;this.Init(aArg);A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.AcX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aum)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Application::NewAnimalMotherHelper"
};C.AL0={Init:function(aArg){var B;A.zX([this,this.Bc5],[B=A._GetAutoObject(A.Device.
Device),B.ARt,B.AY1],0);this.Bc5(this);},Cl:function(){A.ab5("%s",Brb);},EB:function(
AcA){C.Vb.EB.call(this,AcA);var P;for(P=16;P>0;P--)this.H7.Set(P,this.H7.Get(P-1
));this.H7.Set(0,0);if(this.CC<17)this.CC++;else A.ab5("%s",Brc);},AC9:function(
D$){switch(D$){case 2048:case 8192:case 1024:case 16384:case 131072:return false;
default:return true;}},Bc5:function(G){this.EB(A._GetAutoObject(A.Device.Device).
At1);A.we(this,0);},_Init:function(aArg){C.Vb._Init.call(this,aArg);this.__proto__=
C.AL0;this.Init(aArg);},_className:"Application::AutoActionsSelectableClass"};C.
Aud={_Init:function(){C.AL0._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.JA={DR:null,V:null,A6H:true,U:function(E){
C.IS.U.call(this,E);this.V.R(E);},C9:function(E){C.IS.C9.call(this,E);this.V.L(E
);},Blv:function(E){if(this.A6H===E)return;this.A6H=E;this.DR.Y(E);},_Init:function(
aArg){C.IS._Init.call(this,aArg);A.acg.DR._Init.call(this.DR={I:this},0);C.CP._Init.
call(this.V={I:this},0);this.__proto__=C.JA;this.DR.DM(Brd);this.DR.DY(Bre);this.
DR.L(A.jb.Bc);this.V.AX(0x3F);this.V.H(Brf);this.V.A3(0x11);this.V.L(A.jb.Text);
this.J(this.DR,0);this.J(this.V,0);this.V.S(A.aaL(A.fl.J_));this.V.A7(A.aaL(A.fl.
Ie));this.V.CB(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.IS;this.DR._Done(
);this.V._Done();C.IS._Done.call(this);},_ReInit:function(){C.IS._ReInit.call(this
);this.DR._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.J_));this.V.A7(A.aaL(A.
fl.Ie));this.V.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.IS._Mark.call(this
,D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoTableItem"};C.AOJ={Agu:null,AaZ:
null,Fb:null,E0:null,Dc:null,Init:function(aArg){var B;A.zX([this,this.A3i],[B=A.
_GetAutoObject(A.Device.Device),B.ADT,B.AH5],0);A.pe([this,this.A3i],this);},C9:
function(E){C.Ya.C9.call(this,E);this.Dc.L(E);},A8m:function(G){A.pe([this,this.
A3i],this);},A2H:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.
Q){Filter=(F=this.Q,F[1].call(F[0])).GA();FilterCriterion=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=Filter.DX(1,4))?B:null);if(!!FilterCriterion)Filter.QW(FilterCriterion
);A._GetAutoObject(A.Device.Device).Ap.Bh(Filter);}},De:function(G){var B;var F;
C.Ya.De.call(this,G);if(!(F=this.Q,F[1].call(F[0]))){this.Dc.Ay(A.aaL(A.ach.AjC)
);return;}var Bw5=(A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(
F[0])).DX(38,0))?B:null);var Aye=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DX(14,0))?B:null);if(!!Bw5)this.Dc.Ay(A.aaL(A.ach.ACs
));else if(!!Aye&&(Aye.A6===1))this.Dc.Ay(A.aaL(A.ach.APj));else this.Dc.Ay(A.aaL(
A.ach.AjC));},A3i:function(G){var F;var Filter=null;var ANK;switch(A._GetAutoObject(
A.Device.Device).Abw){case 0:Filter=A._GetAutoObject(A.Device.Helper).ACd();break;
case 1:Filter=A._GetAutoObject(A.Device.Helper).ANX();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).Mk();break;default:throw new Error(AY0+A._GetAutoObject(A.Device.
Device).Abw.toFixed());}var AAq=this.AgX();if(AAq>0){ANK=A._NewObject(A.Device.Int32FilterCriterion
,0);ANK.Initialize(1,4,AAq,false);Filter.CY(ANK);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.A0.Aj8(false);},Og:function(G){if(!this.AgX())this.A0.Aj8(true
);this.A8(this.A0);this.Am();},MT:function(G){this.A0.Aj8(false);this.A8(this.Agu
);this.Am();},_Init:function(aArg){C.Ya._Init.call(this,aArg);C.AqA._Init.call(this.
Agu={I:this},0);C.AaZ._Init.call(this.AaZ={I:this},0);A.Core.BK._Init.call(this.
Fb={I:this},0);A.Core.BK._Init.call(this.E0={I:this},0);A.acg.An._Init.call(this.
Dc={I:this},0);this.__proto__=C.AOJ;var B;this.H(Brg);this.CZ.H(Brh);this.CZ.Y(false
);this.A0.H(Bri);this.Agu.H(Brj);this.AaZ.At(A._GetAutoObject(A.Device.Device).Abw
);this.Fb.Filter=6;this.E0.Filter=7;this.Dc.H(Brk);this.J(this.Agu,0);this.J(this.
Dc,0);this.Agu.CH(this.AaZ);this.Agu.At([B=this.AaZ,B.B9,B.B_]);this.Fb.BL=[this
,this.Og];this.E0.BL=[this,this.MT];this.Dc.Ay(A.aaL(A.ach.AjC));this.Init(aArg);
},_Done:function(){this.__proto__=C.Ya;this.Agu._Done();this.AaZ._Done();this.Fb.
_Done();this.E0._Done();this.Dc._Done();C.Ya._Done.call(this);},_ReInit:function(
){C.Ya._ReInit.call(this);this.Agu._ReInit();this.AaZ._ReInit();this.Fb._ReInit(
);this.E0._ReInit();this.Dc._ReInit();},_Mark:function(D){var B;C.Ya._Mark.call(
this,D);if((B=this.Agu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaZ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Dc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderSearchAnimalDriedOff"};C.AaZ={Aeq:null,Init:function(aArg){var
B;A.zX([this,this.BcL],[B=A._GetAutoObject(A.Device.Device),B.ADT,B.AH5],0);A.pe([
this,this.BcL],this);},Dp:function(){return 3;},At:function(E){C.CO.At.call(this
,E);A._GetAutoObject(A.Device.Device).Awd(E);},ACc:function(aIndex){if((aIndex<0
)||(aIndex>=this.Dp()))return null;return this.Aeq.Ar8(aIndex);},ACe:function(aIndex
){if((aIndex<0)||(aIndex>=this.Dp()))return-1;return this.Aeq.Ar9(aIndex);},BcL:
function(G){this.Q=A._GetAutoObject(A.Device.Device).Abw;A.abo([this,this.B9,this.
B_],0);},_Init:function(aArg){C.CO._Init.call(this,aArg);A.Device.Aeq._Init.call(
this.Aeq={I:this},0);this.__proto__=C.AaZ;this.Co.Set(0,0);this.Co.Set(1,1);this.
Co.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=C.CO;this.Aeq._Done(
);C.CO._Done.call(this);},_ReInit:function(){C.CO._ReInit.call(this);this.Aeq._ReInit(
);},_Mark:function(D){var B;C.CO._Mark.call(this,D);if((B=this.Aeq)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"};C.AOU={Et:
null,IE:null,_Init:function(aArg){C.Eu._Init.call(this,aArg);C.CP._Init.call(this.
Et={I:this},0);A.acg.Text._Init.call(this.IE={I:this},0);this.__proto__=C.AOU;this.
H(OU);this.Background.H(OU);this.Et.H(AHE);this.Et.R(A.aaR(A.acf.A50));this.Et.A3(
0x12);this.Et.L(A.jb.Text);this.IE.AX(0x3F);this.IE.H(AHF);this.IE.HH(5);this.IE.
A3(0x14);this.IE.R(A.aaR(A.acf.AF2));this.IE.L(A.jb.Text);this.J(this.Et,0);this.
J(this.IE,0);this.Et.S(A.aaL(A.fl.Ah));this.Et.A7(A.aaL(A.fl.Ie));this.Et.CB(A.aaL(
A.fl.By));this.IE.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Eu;this.
Et._Done();this.IE._Done();C.Eu._Done.call(this);},_ReInit:function(){C.Eu._ReInit.
call(this);this.Et._ReInit();this.IE._ReInit();this.Et.R(A.aaR(A.acf.A50));this.
IE.R(A.aaR(A.acf.AF2));this.Et.S(A.aaL(A.fl.Ah));this.Et.A7(A.aaL(A.fl.Ie));this.
Et.CB(A.aaL(A.fl.By));this.IE.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Eu._Mark.
call(this,D);if((B=this.Et)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"};C.MotherScanScreen={
JP:null,BeH:function(){if(A._GetAutoObject(A.Device.Helper).W.NaisId>0)this.Bdt(
this);else A._GetAutoObject(A.Device.Device).A5(63,true,A.jV,0,[this,this.U0]);}
,Bdt:function(G){A._GetAutoObject(C.AW).Fl();},U0:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63))&&(As.PopupState===7))this.Bdt(this
);},_Init:function(aArg){C.L$._Init.call(this,aArg);A.acg.Text._Init.call(this.JP={
I:this},0);this.__proto__=C.MotherScanScreen;this.Dl(C.AOI);this.I6.H(Brl);this.
I6.Akh(2);this.Aca.Y(false);this.AQM=12;this.Number.H(Brm);this.Number.R(A.aaR(A.
acf.A92));this.A3Q=false;this.JP.H(Brn);this.JP.HH(5);this.JP.KL(true);this.JP.R(((
A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CM)+A.aaR(A.acf.AAZ));this.JP.L(A.jb.Text);this.
Kl(this.I6,-1);this.Kl(this.II,-1);this.Kl(this.Aca,-1);this.J(this.JP,0);this.JP.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.L$;this.JP._Done();C.L$._Done.
call(this);},_ReInit:function(){C.L$._ReInit.call(this);this.JP._ReInit();this.Number.
R(A.aaR(A.acf.A92));this.JP.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CM)+A.aaR(A.
acf.AAZ));this.JP.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L$._Mark.call(this
,D);if((B=this.JP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MotherScanScreen"
};C.AOI={_Init:function(aArg){C.Aqo._Init.call(this,aArg);this.__proto__=C.AOI;this.
CZ.DT(1);},_className:"Application::HeaderScannedCowId"};C.I6={Abn:null,Abm:null
,Abl:null,Qv:null,CountryToString:null,Ar$:0,CU:function(){this.Am();},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);this.Qv.R(this.CountryToString.Lo(A._GetAutoObject(
A.Device.Converter).A6m(A._GetAutoObject(A.Device.Device).Language))+Bro);},Akh:
function(E){if(this.Ar$===E)return;this.Ar$=E;var bitmap=null;var A0K=Brp;var A0J=
null;var A0L=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aqz);break;case 1:{bitmap=
A.aaL(A.ach.APV);A0K=Brq;A0J=A.aaL(A.fl.Ak);A0L=true;}break;case 2:{bitmap=A.aaL(
A.ach.APW);A0K=Brr;A0J=A.aaL(A.fl.By);A0L=true;}break;default:throw new Error(Brs+
E.toFixed());}this.Abl.Ay(bitmap);this.Abm.Ay(bitmap);this.Abn.Ay(bitmap);this.Qv.
H(A.abJ(this.Qv.M,A0K));this.Qv.S(A0J);this.Qv.Y(A0L);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.An._Init.
call(this.Abn={I:this},0);A.acg.An._Init.call(this.Abm={I:this},0);A.acg.An._Init.
call(this.Abl={I:this},0);A.acg.Text._Init.call(this.Qv={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.I6;this.H(AHV);this.
Abn.AX(0x3);this.Abn.H(AHV);this.Abn.L(A.jb.H1);this.Abn.Cv(2);this.Abm.AX(0x3);
this.Abm.H(AHV);this.Abm.L(A.jb.AdL);this.Abm.Cv(1);this.Abl.AX(0x3);this.Abl.H(
AHV);this.Abl.L(A.jb.Text);this.Abl.Cv(0);this.Qv.AX(0x14);this.Qv.H(Brt);this.Qv.
L(0xFF020202);this.Qv.Y(false);this.J(this.Abn,0);this.J(this.Abm,0);this.J(this.
Abl,0);this.J(this.Qv,0);this.Abn.Ay(A.aaL(A.ach.Aqz));this.Abm.Ay(A.aaL(A.ach.Aqz
));this.Abl.Ay(A.aaL(A.ach.Aqz));this.Qv.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.O;this.Abn._Done();this.Abm._Done();this.Abl._Done();this.Qv._Done(
);this.CountryToString._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Abn._ReInit();this.Abm._ReInit();this.Abl._ReInit(
);this.Qv._ReInit();this.CountryToString._ReInit();this.Qv.S(A.aaL(A.fl.Ak));this.
CU();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Abn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Abl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qv)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.Ar$={Transponder:0,BD1:1,BD2:2};C.AOE={An:null,C9:function(E){C.BQ.C9.call(this
,E);this.An.L(E);},_Init:function(aArg){C.BQ._Init.call(this,aArg);A.acg.An._Init.
call(this.An={I:this},0);this.__proto__=C.AOE;this.An.H(AsE);this.J(this.An,0);this.
An.Ay(A.aaL(A.ach.AOv));},_Done:function(){this.__proto__=C.BQ;this.An._Done();C.
BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.An._ReInit(
);},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.An)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Jw:0,Aag:4,AlB:function(G){C.QZ.AlB.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bci()){this.Jw=A._GetAutoObject(A.Device.Helper).Ul.Id;var AcW=A._GetAutoObject(
A.Device.Helper).A6k(this.Jw,A._GetAutoObject(A.Device.Helper).W);if(AcW){A._GetAutoObject(
A.Device.Device).A5(21,true,A._GetAutoObject(A.Device.Converter).SM(this.Jw),0,[
this,this.U0]);return;}AcW=A._GetAutoObject(A.Device.Helper).BhX(this.Jw,A._GetAutoObject(
A.Device.Helper).W);if(AcW&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Jw)){A._GetAutoObject(A.Device.Device).A5(25,true,A._GetAutoObject(A.Device.
Converter).SM(this.Jw),0,[this,this.U0]);return;}this.Aag=A._GetAutoObject(A.Device.
Helper).AQn(this.Jw);switch(this.Aag){case 0:A._GetAutoObject(A.Device.Device).A5(
45,true,this.Jw.toFixed().length.toFixed(),0,[this,this.U0]);break;case 1:case 2:{
var BM=A._GetAutoObject(A.Device.Converter).Aw$(this.Jw);A._GetAutoObject(A.Device.
Device).A5(46,true,BM.toFixed(),0,[this,this.U0]);}break;case 3:this.BeB();break;
default:throw new Error(AHs+this.Aag.toFixed());}}},Eo:function(G){A._GetAutoObject(
C.AW).Fl();},U0:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.Aag===2)this.BeB();else A._GetAutoObject(
A.Device.Device).Ahj();break;case 5:this.Eo(this);break;default:;}},BeB:function(
){A._GetAutoObject(A.Device.Helper).W.Nb(this.Jw);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.NU(this.Jw);A._GetAutoObject(
A.Device.Helper).W.Cl(A._GetAutoObject(A.Device.Device).Ap);A._GetAutoObject(A.Device.
Device).A5(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Eo(this);},_Init:function(aArg){C.QZ._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Y(true);this.Dl(C.IA);this.Number.R(A.aaR(A.acf.A9V
));this.I6.H(Bru);this.II.H(Brv);this.Akh(1);this.N.Cw=[this,this.Eo];this.N.CT(
A.aaL(A.ach.EU));},_ReInit:function(){C.QZ._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A9V));},_className:"Application::SetSaveNaisIdScreen"};C.ANe={LI:function(
G){C.Aqa.LI.call(this,G);A.pe([this,this.BzO],this);},BzO:function(G){this.Jx(this.
D9);},_Init:function(aArg){C.Aqa._Init.call(this,aArg);this.__proto__=C.ANe;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.UB={Animal:null,WhereAboutsToString:
null,F$:function(aIndex){return this.WhereAboutsToString.BP(this.C5(aIndex));},At:
function(E){C.CO.At.call(this,E);if(!!this.Animal)this.Animal.Nc(E);},A3q:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B9,this.B_],0);},LU:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A3q],[B=this.Animal,B.AvJ,B.Nc],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A3q],[B=this.Animal,B.AvJ,B.Nc],0);A.pe([this,this.A3q],this);}
,_Init:function(aArg){C.CO._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.UB;this.Co.Set(0,1);this.
Co.Set(1,2);this.Co.Set(2,3);this.Co.Set(3,4);this.Co.Set(4,5);},_Done:function(
){this.__proto__=C.CO;this.WhereAboutsToString._Done();C.CO._Done.call(this);},_ReInit:
function(){C.CO._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.CO._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.UC={Dp:function(){return 6;},_Init:function(aArg){C.UB._Init.call(this,aArg);
this.__proto__=C.UC;this.Co.Set(0,0);this.Co.Set(1,1);this.Co.Set(2,2);this.Co.Set(
3,3);this.Co.Set(4,4);this.Co.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.Acn={Dp:function(){return 5;},_Init:function(aArg){C.UB._Init.call(this,aArg
);this.__proto__=C.Acn;this.Co.Set(0,6);this.Co.Set(1,7);this.Co.Set(2,8);this.Co.
Set(3,9);this.Co.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.Adv={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Ba5],[B=A._GetAutoObject(A.Device.
Device),B.ARu,B.AY2],0);A.pe([this,this.Ba5],this);},Dp:function(){return 2;},C5:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BP(aIndex);},DK:function(A2){return A2;},Hl:function(){return 1;},At:function(E){
C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).AvM(E);},Ba5:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Af8;A.abo([this,this.B9,this.B_],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.Adv;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AFQ={Fw:null
,Es:null,EartagNrAssignmentMode:null,Fb:null,E0:null,Hx:null,A0:null,J8:null,M6:
null,A4:0,AK:0,Init:function(aArg){},Ai:function(Ae){C.D_.Ai.call(this,Ae);if(this.
A4===1){if(this.Hb){this.A0.FB(A.jb.CG);this.Hx.C2(A.jb.CG);this.Background.L(A.
jb.C1);this.V.L(A.jb.Text);}else{this.A0.FB(A.jb.C1);this.Hx.C2(A.jb.C1);this.Background.
L(A.jb.CG);this.V.L(A.jb.Text);}}else{if(this.Hb){this.A0.FB(A.jb.CG);this.Hx.C2(
A.jb.CG);}else{this.A0.FB(A.jb.C1);this.Hx.C2(A.jb.C1);}this.A8(null);}this.M6.L(
this.V.AQ);},IP:function(G){C.D_.IP.call(this,G);if(!this.A4)this.FJ(this);else this.
G5(this);},DC:function(G){var F;if(!this.N)return;switch(this.A4){case 1:{(F=this.
N,F[1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.
N,F[1].call(F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.
N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;(F=this.N,F[1].call(
F[0])).C3(null);(F=this.N,F[1].call(F[0])).BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=
null;}break;default:this.Fw.Akr((F=this.N,F[1].call(F[0])));}},FJ:function(G){this.
Ep(1);},G5:function(G){this.Ep(0);},Ep:function(EE){var F;if(!this.A4&&!!this.N)
this.Fw.Ajb((F=this.N,F[1].call(F[0])));this.A4=EE;if(this.A4<0)this.A4=0;else if(
this.A4>1)this.A4=1;switch(this.A4){case 0:this.A8(null);break;case 1:{this.A8(this.
A0);if(!this.AK)this.A0.Sx(2);else this.A0.Sx(7);}break;default:throw new Error(
AsG+this.A4.toFixed());}this.DC(this);this.Am();},Bx:function(E){if(this.AK===E)
return;this.AK=E;},Og:function(G){this.AAr(2);},MT:function(G){this.AAr(7);},AAr:
function(Gq){var B;var AyO=(A.Core.O.isPrototypeOf(B=this.AR)?B:null);if(!!AyO){
var AzF=(A.Core.O.isPrototypeOf(B=this.R5(AyO,Gq,0x15))?B:null);if(!!AzF){this.A8(
AzF);return true;}}return false;},AfD:function(G){var F;if(!this.Es||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M6.Ay(
A._GetAutoObject(A.Device.Converter).Amt(2));break;case 1:this.M6.Ay(A._GetAutoObject(
A.Device.Converter).Amt((F=this.Es,F[1].call(F[0]))));break;default:throw new Error(
A$j+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A2Z],this);},A2Z:function(G){var B;var F;if(!this.Es||!this.EartagNrAssignmentMode
){this.J8.Aex(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.A0.At([B=A._GetAutoObject(A.Device.Device),B.Am3,B.An$]);this.J8.
Aex([B=A._GetAutoObject(A.Device.Device),B.ADP,B.AH2]);}break;case 1:switch((F=this.
Es,F[1].call(F[0]))){case 1:{this.A0.At([B=A._GetAutoObject(A.Device.Device),B.AvB
,B.Ax5]);this.J8.Aex([B=A._GetAutoObject(A.Device.Device),B.ARB,B.AY5]);}break;case
0:{this.A0.At([B=A._GetAutoObject(A.Device.Device),B.AvC,B.Ax6]);this.J8.Aex([B=
A._GetAutoObject(A.Device.Device),B.ARC,B.AY6]);}break;case 2:{this.A0.At([B=A._GetAutoObject(
A.Device.Device),B.Am3,B.An$]);this.J8.Aex([B=A._GetAutoObject(A.Device.Device),
B.ADP,B.AH2]);}break;default:throw new Error(Brw+(F=this.Es,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(A$j+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},T_:function(E){if(A.aaZ(this.Es,E))return;if(!!this.Es)A.z$([
this,this.AfD],this.Es,0);this.Es=E;if(!!E)A.zX([this,this.AfD],this.Es,0);if(!!
E)A.pe([this,this.AfD],this);},Aj9:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.AfD],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.AfD],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.AfD],this);},T7:function(){return this.AK;},_Init:function(
aArg){C.D_._Init.call(this,aArg);A.Core.BK._Init.call(this.Fb={I:this},0);A.Core.
BK._Init.call(this.E0={I:this},0);C.AqA._Init.call(this.Hx={I:this},0);C.Ave._Init.
call(this.A0={I:this},0);C.Aur._Init.call(this.J8={I:this},0);A.acg.An._Init.call(
this.M6={I:this},0);this.__proto__=C.AFQ;var B;this.H(UI);this.V.Ar(false);this.
V.R(Asv);this.V.L(A.jb.Bi);this.Fb.Filter=6;this.E0.Filter=7;this.Hx.H(Brx);this.
A0.H(Bry);this.M6.H(Brz);this.J(this.Hx,0);this.J(this.A0,0);this.J(this.M6,0);this.
Fw=A._NewObject(C.Ad4,0);this.Fb.BL=[this,this.Og];this.E0.BL=[this,this.MT];this.
Hx.CH(this.J8);this.Hx.At([B=this.J8,B.B9,B.B_]);this.A0.At([this,this.T7,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.D_;this.Fb._Done();this.E0.
_Done();this.Hx._Done();this.A0._Done();this.J8._Done();this.M6._Done();C.D_._Done.
call(this);},_ReInit:function(){C.D_._ReInit.call(this);this.Fb._ReInit();this.E0.
_ReInit();this.Hx._ReInit();this.A0._ReInit();this.J8._ReInit();this.M6._ReInit(
);},_Mark:function(D){var B;C.D_._Mark.call(this,D);if((B=this.Fw)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Es)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.J8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AM4={V6:
null,YT:null,YP:null,T0:null,Init:function(aArg){this.A8(this.V6);},ADI:function(
G){var BcH=(C.AmT.isPrototypeOf(G)?G:null);if(!!BcH)A._GetAutoObject(A.Device.Device
).A5(BcH.Ade,true,A.jV,0,null);},Dv:function(G){if((this.Cm.CL===7)&&(this.AR===
this.T0))A._GetAutoObject(A.Device.Device).A5(10,true,A.jV,0,null);else if((this.
Cm.CL===6)&&(this.AR===this.T0))A._GetAutoObject(C.AW).BS(103);C.Eb.Dv.call(this
,G);},_Init:function(aArg){C.Eb._Init.call(this,aArg);C.AmT._Init.call(this.V6={
I:this},0);C.AmT._Init.call(this.YT={I:this},0);C.AmT._Init.call(this.YP={I:this
},0);C.AmT._Init.call(this.T0={I:this},0);this.__proto__=C.AM4;this.Dl(C.AOj);this.
V6.H(JR);this.V6.Aj(true);this.V6.U(A.aaR(A.acf.Ahi));this.V6.Bf(false);this.V6.
Ade=79;this.YT.H(P0);this.YT.Aj(true);this.YT.U(A.aaR(A.acf.A_d));this.YT.Bf(true
);this.YT.Ade=77;this.YP.H(ZQ);this.YP.Aj(true);this.YP.U(A.aaR(A.acf.A5V));this.
YP.Bf(false);this.YP.Ade=78;this.T0.H(AkP);this.T0.Aj(true);this.T0.U(A.aaR(A.acf.
About));this.T0.Bf(true);this.T0.Ade=3;this.J(this.V6,0);this.J(this.YT,0);this.
J(this.YP,0);this.J(this.T0,0);this.V6.AN=[this,this.ADI];this.YT.AN=[this,this.
ADI];this.YP.AN=[this,this.ADI];this.T0.AN=[this,this.ADI];this.Init(aArg);},_Done:
function(){this.__proto__=C.Eb;this.V6._Done();this.YT._Done();this.YP._Done();this.
T0._Done();C.Eb._Done.call(this);},_ReInit:function(){C.Eb._ReInit.call(this);this.
V6._ReInit();this.YT._ReInit();this.YP._ReInit();this.T0._ReInit();this.V6.U(A.aaR(
A.acf.Ahi));this.YT.U(A.aaR(A.acf.A_d));this.YP.U(A.aaR(A.acf.A5V));this.T0.U(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Eb._Mark.call(this,D);if((B=this.V6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AOj={_Init:function(aArg){C.KG.
_Init.call(this,aArg);this.__proto__=C.AOj;this.Text.R(A.acf.Info);},_className:
"Application::HeaderDeviceInfoMenu"};C.AM2={FactoryResetScope:null,T3:null,V4:null
,T5:null,Init:function(aArg){this.A8(this.T3);A.pe([this,this.MD],this);},BiG:function(
G){switch(this.FactoryResetScope.C5(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(
A.Device.Device).A5(33,true,A.jV,0,[this,this.Bep]);break;case 0:A._GetAutoObject(
A.Device.Device).A5(7,true,A.jV,0,[this,this.Bep]);break;default:A.ab5("%s%i",BrA
,this.FactoryResetScope.Q);}},Bep:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.
Device.Device).BmI();A._GetAutoObject(A.Device.Device).A5(8,true,A.jV,0,null);A.
_GetAutoObject(C.AW).BS(38);}break;case 33:{A._GetAutoObject(A.Device.Helper).BmH(
);A._GetAutoObject(A.Device.Device).Arf(0);A._GetAutoObject(A.Device.Device).Arg(
0);A._GetAutoObject(A.Device.Device).Arh(0);A._GetAutoObject(A.Device.Device).Arj(
0);A._GetAutoObject(A.Device.Device).Ark(0);A._GetAutoObject(A.Device.Device).Arl(
0);A._GetAutoObject(A.Device.Device).T8(5);A._GetAutoObject(A.Device.Device).AvY(
0);A._GetAutoObject(A.Device.Device).AvZ(0);A._GetAutoObject(A.Device.Device).Av0(
0);A._GetAutoObject(A.Device.Device).Awe(1);A._GetAutoObject(A.Device.Device).Awf(
1);A._GetAutoObject(A.Device.Device).Awg(1);A._GetAutoObject(A.Device.Device).A5(
34,true,A.jV,0,null);}break;default:A.ab5("%s%e",AHt,As.Id);}},_Init:function(aArg
){C.Eb._Init.call(this,aArg);C.FactoryResetScope._Init.call(this.FactoryResetScope={
I:this},0);C.NQ._Init.call(this.T3={I:this},0);C.NQ._Init.call(this.V4={I:this},
0);C.BW._Init.call(this.T5={I:this},0);this.__proto__=C.AM2;var B;this.Dl(C.AOh);
this.T3.H(JR);this.T3.Aj(true);this.T3.U(A.aaR(A.acf.ABJ));this.T3.Bf(false);this.
T3.NT(105);this.V4.H(P0);this.V4.Aj(true);this.V4.U(A.aaR(A.acf.Xw));this.V4.Bf(
true);this.V4.NT(104);this.T5.H(A$k);this.T5.Aj(true);this.T5.Bj2(true);this.T5.
U(A.aaR(A.acf.A5o));this.T5.Bf(false);this.J(this.T3,-1);this.J(this.V4,-1);this.
J(this.T5,-1);this.T3.AN=[B=this.T3,B.NW];this.V4.AN=[B=this.V4,B.NW];this.T5.AN=[
this,this.BiG];this.T5.At([B=this.FactoryResetScope,B.B9,B.B_]);this.T5.CH(this.
FactoryResetScope);this.Init(aArg);},_Done:function(){this.__proto__=C.Eb;this.FactoryResetScope.
_Done();this.T3._Done();this.V4._Done();this.T5._Done();C.Eb._Done.call(this);},
_ReInit:function(){C.Eb._ReInit.call(this);this.FactoryResetScope._ReInit();this.
T3._ReInit();this.V4._ReInit();this.T5._ReInit();this.T3.U(A.aaR(A.acf.ABJ));this.
V4.U(A.aaR(A.acf.Xw));this.T5.U(A.aaR(A.acf.A5o));},_Mark:function(D){var B;C.Eb.
_Mark.call(this,D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.T5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AOh={_Init:function(aArg){C.KG._Init.call(this,aArg);this.__proto__=C.AOh;this.
Text.R(A.aaR(A.acf.ABL));},_ReInit:function(){C.KG._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ABL));},_className:"Application::HeaderDeviceDatamanagementMenu"};
C.Ajz={QH:null,VU:null,_Init:function(aArg){C.TK._Init.call(this,aArg);C.CP._Init.
call(this.QH={I:this},0);C.CP._Init.call(this.VU={I:this},0);this.__proto__=C.Ajz;
this.QH.H(BrB);this.QH.R(A.aaR(A.acf.A96));this.QH.A3(0x12);this.QH.L(A.jb.Text);
this.VU.H(A$c);this.VU.R(A.aaR(A.acf.AnF));this.VU.L(A.jb.Text);this.J(this.QH,0
);this.J(this.VU,0);this.QH.S(A.aaL(A.fl.Ah));this.QH.A7(A.aaL(A.fl.Ak));this.QH.
CB(A.aaL(A.fl.By));this.VU.S(A.aaL(A.fl.Ah));this.VU.A7(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TK;this.QH._Done();this.VU._Done();C.TK._Done.call(this
);},_ReInit:function(){C.TK._ReInit.call(this);this.QH._ReInit();this.VU._ReInit(
);this.QH.R(A.aaR(A.acf.A96));this.VU.R(A.aaR(A.acf.AnF));this.QH.S(A.aaL(A.fl.Ah
));this.QH.A7(A.aaL(A.fl.Ak));this.QH.CB(A.aaL(A.fl.By));this.VU.S(A.aaL(A.fl.Ah
));this.VU.A7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TK._Mark.call(this,D);
if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VU)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.AOO={QI:
null,_Init:function(aArg){C.TK._Init.call(this,aArg);C.CP._Init.call(this.QI={I:
this},0);this.__proto__=C.AOO;this.QI.H(BrC);this.QI.R(A.aaR(A.acf.YY));this.QI.
A3(0x12);this.QI.L(A.jb.Text);this.J(this.QI,0);this.QI.S(A.aaL(A.fl.Ah));this.QI.
A7(A.aaL(A.fl.Ak));this.QI.CB(A.aaL(A.fl.By));},_Done:function(){this.__proto__=
C.TK;this.QI._Done();C.TK._Done.call(this);},_ReInit:function(){C.TK._ReInit.call(
this);this.QI._ReInit();this.QI.R(A.aaR(A.acf.YY));this.QI.S(A.aaL(A.fl.Ah));this.
QI.A7(A.aaL(A.fl.Ak));this.QI.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.TK.
_Mark.call(this,D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Ajd={IB:null,Aba:null,D5:null,Bg:function(aSize){C.M0.Bg.call(this,aSize);this.
IB.H([this.Gp.M[2],0,this.Gp.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.D5.H([
this.IB.M[2]-1,0,this.IB.M[2]+1,aSize[1]]);this.Aba.H([this.IB.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.M0.Ai.call(this,Ae);this.Aba.L(this.Gp.AQ);this.IB.L(this.
Gp.AQ);},Ce:function(Ac){C.M0.Ce.call(this,Ac);if(!this.AY)return;this.Hu=Ac;if(
!!this.AY){var H8=this.AY.Amu(Ac,14);var Atc=this.AY.AN1(Ac,7);this.IB.Ay(A._GetAutoObject(
A.Device.Converter).Amt(Atc));this.Aba.Ay(A._GetAutoObject(A.Device.Converter).A3T(
H8));this.Am();}},_Init:function(aArg){C.M0._Init.call(this,aArg);A.acg.An._Init.
call(this.IB={I:this},0);A.acg.An._Init.call(this.Aba={I:this},0);A.acg.AJ._Init.
call(this.D5={I:this},0);this.__proto__=C.Ajd;this.IB.H(A$f);this.IB.L(A.jb.Text
);this.Aba.H(BrD);this.Aba.L(A.jb.Text);this.D5.H(BrE);this.D5.L(A.jb.Bc);this.J(
this.IB,0);this.J(this.Aba,0);this.J(this.D5,0);this.IB.Ay(A.aaL(A.aci.TB));this.
Aba.Ay(A.aaL(A.aci.TB));},_Done:function(){this.__proto__=C.M0;this.IB._Done();this.
Aba._Done();this.D5._Done();C.M0._Done.call(this);},_ReInit:function(){C.M0._ReInit.
call(this);this.IB._ReInit();this.Aba._ReInit();this.D5._ReInit();},_Mark:function(
D){var B;C.M0._Mark.call(this,D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D5)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AMi={Zo:null
,Bg:function(aSize){C.M0.Bg.call(this,aSize);this.Zo.H([this.Gp.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.M0.Ai.call(this,Ae);this.Zo.L(this.Gp.AQ);},Ce:function(
Ac){C.M0.Ce.call(this,Ac);if(!this.AY)return;this.Hu=Ac;if(!!this.AY){var MR=this.
AY.LM(Ac,26);if(MR>0)this.Zo.R(A.ab2(MR.toFixed(),5));else this.Zo.R(Ra);this.Am(
);}},_Init:function(aArg){C.M0._Init.call(this,aArg);A.acg.Text._Init.call(this.
Zo={I:this},0);this.__proto__=C.AMi;this.Zo.H(BrF);this.J(this.Zo,0);this.Zo.S(A.
aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.M0;this.Zo._Done();C.M0._Done.
call(this);},_ReInit:function(){C.M0._ReInit.call(this);this.Zo._ReInit();this.Zo.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.M0._Mark.call(this,D);if((B=this.Zo
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.AQZ={An:null,Ai:function(Ae){C.Aer.Ai.call(this,Ae);this.An.L(this.Text.AQ);
},_Init:function(aArg){C.Aer._Init.call(this,aArg);A.acg.An._Init.call(this.An={
I:this},0);this.__proto__=C.AQZ;this.Text.H(BrG);this.An.H(A_$);this.J(this.An,0
);this.An.Ay(A.aaL(A.ach.AeM));},_Done:function(){this.__proto__=C.Aer;this.An._Done(
);C.Aer._Done.call(this);},_ReInit:function(){C.Aer._ReInit.call(this);this.An._ReInit(
);},_Mark:function(D){var B;C.Aer._Mark.call(this,D);if((B=this.An)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.VD={Text:
null,Dc:null,AP:null,TM:null,DZ:null,A9:null,Init:function(aArg){var B;A.zX([this
,this.Ng],[B=A._GetAutoObject(A.Device.Device),B.ADL,B.AHZ],0);A.zV([this,this.Ng
],A._GetAutoObject(A.Device.Device).Ap,0);A.pe([this,this.Ng],this);},C9:function(
E){C.BQ.C9.call(this,E);this.Dc.L(E);this.Text.L(E);this.TM.L(E);this.DZ.Aka(E);
},AbG:function(E){C.BQ.AbG.call(this,E);this.DZ.C2(E);},Eq:function(G){this.DZ.U(
A._GetAutoObject(A.Device.Device).Ap.Cb().toFixed());},Ng:function(s){this.Eq(s);
},_Init:function(aArg){C.BQ._Init.call(this,aArg);C.CP._Init.call(this.Text={I:this
},0);A.acg.An._Init.call(this.Dc={I:this},0);A.acg.DR._Init.call(this.AP={I:this
},0);A.acg.An._Init.call(this.TM={I:this},0);C.DZ._Init.call(this.DZ={I:this},0);
A.acg.DR._Init.call(this.A9={I:this},0);this.__proto__=C.VD;this.Text.H(BrH);this.
Text.A3(0x11);this.Dc.H(AxS);this.AP.DM(A_9);this.AP.DY(A__);this.AP.L(A.jb.Bc);
this.TM.H(BrI);this.TM.L(A.jb.C1);this.DZ.AX(0x14);this.DZ.H(BrJ);this.DZ.Aka(A.
jb.Bi);this.DZ.C2(A.jb.Ace);this.DZ.HH(2);this.A9.DM(BrK);this.A9.DY(BrL);this.A9.
L(A.jb.Bc);this.J(this.Text,0);this.J(this.Dc,0);this.J(this.AP,0);this.J(this.TM
,0);this.J(this.DZ,0);this.J(this.A9,0);this.Text.S(A.aaL(A.fl.Ah));this.Text.A7(
A.aaL(A.fl.Ak));this.Dc.Ay(A.aaL(A.ach.AjC));this.TM.Ay(A.aaL(A.ach.TM));this.DZ.
S(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.Text.
_Done();this.Dc._Done();this.AP._Done();this.TM._Done();this.DZ._Done();this.A9.
_Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this);this.
Text._ReInit();this.Dc._ReInit();this.AP._ReInit();this.TM._ReInit();this.DZ._ReInit(
);this.A9._ReInit();this.Text.S(A.aaL(A.fl.Ah));this.Text.A7(A.aaL(A.fl.Ak));this.
DZ.S(A.aaL(A.fl.By));},_Mark:function(D){var B;C.BQ._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dc)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TM)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.Ab4={Fw:null
,JM:null,JL:null,Ako:null,Akp:null,QU:null,Qu:null,Aa$:null,VF:null,PA:null,PB:null
,Si:null,Gl:null,Gm:null,Jl:null,Alj:0,Alo:0,D0:0,DO:0,A4:0,Bg:function(aSize){var
B;this.Ds.H([this.Hn.M[2]-10,this.Hn.M[1],this.HX.M[0]+10,this.Hn.M[3]]);this.Ds.
AEw((B=this.Ds.M)[2]-B[0]);this.Ds.Hy(this.Ds.Gi,true,null,null);},Ai:function(Ae
){var B;C.BW.Ai.call(this,Ae);var Fh=((Ae&0x20)===0x20);var Gt=this.Bl.Bv;if(!!this.
Q)this.Gw(this);if((this.A4===1)||(this.A4===2)){var AZ8=this.A05(this.A4);if(!!
AZ8){this.Aa$.Y(true);this.Aa$.H(AZ8.M);this.Aa$.L(this.V.AQ);this.VF.Y(true);this.
VF.H(AZ8.M);}else{this.Aa$.Y(false);this.VF.Y(false);}this.Hn.Y(false);this.HX.Y(
false);}else{this.Aa$.Y(false);this.VF.Y(false);this.Hn.Y(Fh||Gt);this.HX.Y(Fh||
Gt);}},Qg:function(G){if(!!this.Q){if(this.Fs===1)A.pe([this,this.US],this);else
if(this.Fs===4)A.pe([this,this.AZq],this);else if(this.Fs===5)A.pe([this,this.AZo
],this);}C.BW.Qg.call(this,G);},J0:function(G){switch(this.A4){case 0:C.BW.J0.call(
this,G);break;case 2:break;default:this.Ac_(this);}},JV:function(G){switch(this.
A4){case 0:C.BW.JV.call(this,G);break;default:this.Ah3(this);}},A0B:function(G){
var F;if(this.A4===1){var BO=this.D0;this.D0=this.D0-10;if(this.D0<this.Alo)this.
D0=this.Alo;if(this.D0<A._GetAutoObject(A.Device.Device).Zz)this.D0=A._GetAutoObject(
A.Device.Device).Zz;if(this.DO!==BO){if(!!this.JM)(F=this.JM,F[2].call(F[0],this.
D0));A.abo(this.JM,0);}}if(this.A4===2){var BO=this.DO;this.DO=this.DO-10;if(this.
DO<this.D0)this.DO=this.D0;if(this.DO!==BO){if(!!this.JL)(F=this.JL,F[2].call(F[
0],this.DO));A.abo(this.JL,0);}}this.DC(this);this.Am();},AZo:function(s){this.A0B(
s);},Alz:function(G){this.Fs=5;this.Am();if(this.Bl.Bv){A.pe([this,this.AZo],this
);this.Bl.Ar(false);}this.Bl.Ar(true);},A1a:function(G){var F;if(this.A4===1){var
BO=this.D0;this.D0=this.D0+10;if(this.D0>this.DO)this.D0=this.DO;if(this.D0!==BO
){if(!!this.JM)(F=this.JM,F[2].call(F[0],this.D0));A.abo(this.JM,0);}}if(this.A4===
2){var BO=this.DO;this.DO=this.DO+10;if(this.DO>this.Alj)this.DO=this.Alj;if(this.
DO!==BO){if(!!this.JL)(F=this.JL,F[2].call(F[0],this.DO));A.abo(this.JL,0);}}this.
DC(this);this.Am();},AZq:function(s){this.A1a(s);},AlA:function(G){this.Fs=4;this.
Am();if(this.Bl.Bv){A.pe([this,this.AZq],this);this.Bl.Ar(false);}this.Bl.Ar(true
);return;},US:function(G){this.Ep(this.A4+1);},Ac_:function(G){this.Fs=1;this.Am(
);if(this.Bl.Bv){A.pe([this,this.US],this);this.Bl.Ar(false);}this.Bl.Ar(true);}
,Gw:function(G){},Afi:function(s){this.Gw(s);},DC:function(G){var F;if(!this.N)return;
switch(this.A4){case 1:{(F=this.N,F[1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N
,F[1].call(F[0])).Ho(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G5];(F=this.
N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(
F[0])).Ci=null;(F=this.N,F[1].call(F[0])).C3(A.aaL(A.ach.Ad_));(F=this.N,F[1].call(
F[0])).BZ(A.jV);(F=this.N,F[1].call(F[0])).Cc=[this,this.US];}break;case 2:{(F=this.
N,F[1].call(F[0])).CT(A.aaL(A.ach.EU));(F=this.N,F[1].call(F[0])).Ho(A.jV);(F=this.
N,F[1].call(F[0])).Cw=[this,this.G5];(F=this.N,F[1].call(F[0])).Cn(A.aaL(A.ach.AmA
));(F=this.N,F[1].call(F[0])).FC(A.jV);(F=this.N,F[1].call(F[0])).Ci=[this,this.
Ah3];(F=this.N,F[1].call(F[0])).C3(null);(F=this.N,F[1].call(F[0])).BZ(A.jV);(F=
this.N,F[1].call(F[0])).Cc=null;}break;default:this.Fw.Akr((F=this.N,F[1].call(F[
0])));}},A83:function(E){if(A.aaZ(this.JM,E))return;if(!!this.JM)A.z$([this,this.
A2v],this.JM,0);this.JM=E;if(!!this.JM)A.zX([this,this.A2v],this.JM,0);A.pe([this
,this.A2v],this);},A2v:function(G){var F;this.D0=(F=this.JM,F[1].call(F[0]));this.
Am();},A82:function(E){if(A.aaZ(this.JL,E))return;if(!!this.JL)A.z$([this,this.A2u
],this.JL,0);this.JL=E;if(!!this.JL)A.zX([this,this.A2u],this.JL,0);A.pe([this,this.
A2u],this);},A2u:function(G){var F;this.DO=(F=this.JL,F[1].call(F[0]));this.Am();
},FJ:function(G){this.Ep(1);},G5:function(G){this.Ep(0);},Ep:function(EE){var F;
if(!this.A4)this.Fw.Ajb((F=this.N,F[1].call(F[0])));this.A4=EE;if((this.A4<0)||(
this.A4>2))this.A4=0;this.DC(this);this.Gm.Bv=!!this.A4;this.Gl.Bv=!!this.A4;this.
Am();},Ah3:function(G){if(this.A4>1)this.Ep(this.A4-1);},A2J:function(G){},Ayc:function(
s){this.A2J(s);},A2i:function(G){},Baj:function(s){this.A2i(s);},A05:function(AsP
){return null;},_Init:function(aArg){C.BW._Init.call(this,aArg);A.acg.AJ._Init.call(
this.Ako={I:this},0);A.acg.AJ._Init.call(this.Akp={I:this},0);A.acg.AJ._Init.call(
this.QU={I:this},0);A.acg.An._Init.call(this.Qu={I:this},0);A.acg.AJ._Init.call(
this.Aa$={I:this},0);A.acg.CA._Init.call(this.VF={I:this},0);A.acg.Text._Init.call(
this.PA={I:this},0);A.acg.Text._Init.call(this.PB={I:this},0);A.acg.Text._Init.call(
this.Si={I:this},0);A.Core.BK._Init.call(this.Gl={I:this},0);A.Core.BK._Init.call(
this.Gm={I:this},0);A.Core.BK._Init.call(this.Jl={I:this},0);this.__proto__=C.Ab4;
this.H(Aff);this.U(A.aaR(A.acf.AqO));this.Background.H(Aff);this.V.H(BD);this.V.
R(A.aaR(A.acf.AF_));this.V.A3(0x12);this.Ako.H(BrM);this.Ako.L(A.jb.FZ);this.Akp.
H(BrN);this.Akp.L(A.jb.H1);this.QU.H(BrO);this.QU.L(A.jb.ET);this.Qu.H(BrP);this.
Aa$.H(BrQ);this.VF.H(BrR);this.VF.NV(3);this.VF.L(A.jb.AR);this.VF.Y(false);this.
PA.H(BrS);this.PA.HH(8);this.PA.I0(true);this.PA.A3(0x11);this.PA.L(0xFF000000);
this.PB.H(BrT);this.PB.HH(8);this.PB.I0(true);this.PB.A3(0x11);this.PB.L(0xFF000000
);this.Si.H(BrU);this.Si.I0(false);this.Si.A3(0x12);this.Si.L(0xFF000000);this.Gl.
Filter=5;this.Gl.Bv=false;this.Gm.Filter=4;this.Gm.Bv=false;this.Jl.Filter=1;this.
Kl(this.V,-1);this.Kl(this.Ds,-2);this.J(this.Ako,-1);this.J(this.Akp,-1);this.J(
this.QU,-1);this.J(this.Qu,-1);this.J(this.Aa$,-1);this.J(this.VF,-1);this.J(this.
PA,-1);this.J(this.PB,0);this.J(this.Si,0);this.Qu.Ay(A.aaL(A.ach.ACP));this.PA.
S(A.aaL(A.fl.Ah));this.PB.S(A.aaL(A.fl.Ah));this.Si.S(A.aaL(A.fl.Ak));this.Gl.BL=[
this,this.Alz];this.Gl.DS=[this,this.AZo];this.Gm.BL=[this,this.AlA];this.Gm.DS=[
this,this.AZq];this.Jl.BL=[this,this.Ac_];this.Fw=A._NewObject(C.Ad4,0);},_Done:
function(){this.__proto__=C.BW;this.Ako._Done();this.Akp._Done();this.QU._Done();
this.Qu._Done();this.Aa$._Done();this.VF._Done();this.PA._Done();this.PB._Done();
this.Si._Done();this.Gl._Done();this.Gm._Done();this.Jl._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.Ako._ReInit();this.Akp._ReInit(
);this.QU._ReInit();this.Qu._ReInit();this.Aa$._ReInit();this.VF._ReInit();this.
PA._ReInit();this.PB._ReInit();this.Si._ReInit();this.Gl._ReInit();this.Gm._ReInit(
);this.Jl._ReInit();this.U(A.aaR(A.acf.AqO));this.V.R(A.aaR(A.acf.AF_));this.PA.
S(A.aaL(A.fl.Ah));this.PB.S(A.aaL(A.fl.Ah));this.Si.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.Fw)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JM)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JL)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ako)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Akp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Si)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.Fv={XD:null,Ab6:
null,AnJ:0,AnK:0,Dp:function(){if(!this.XD)return 0;return this.XD.My;},C5:function(
aIndex){if(!this.XD||(aIndex>=this.XD.My))return-1;return this.XD.Get(aIndex);},
F$:function(aIndex){return this.A5G().BP(this.C5(aIndex));},DK:function(A2){if(!
this.XD)return-1;return this.XD.AuS(A2);},Hl:function(){if(!this.XD)return-1;return this.
XD.Hl();},Ani:function(E){if(this.AnJ===E)return;this.AnJ=E;A.pe([this,this.AUv]
,this);},AZj:function(Aq){this.Ani(Aq);},Anj:function(E){if(this.AnK===E)return;
this.AnK=E;A.pe([this,this.AUw],this);},AZk:function(Aq){this.Anj(Aq);},AUw:function(
G){A.abo([this,this.AR0,this.AZk],0);},AUv:function(G){A.abo([this,this.ARZ,this.
AZj],0);},A5G:function(){return this.Ab6;},ARZ:function(){return this.AnJ;},AR0:
function(){return this.AnK;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Ab6={I:this},0);this.__proto__=C.Fv;},_Done:function(
){this.__proto__=C.AC;this.Ab6._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Ab6._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.XD)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab6)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalThresholds"};C.ALO={Init:
function(aArg){A.zV([this,this.BdH],A._GetAutoObject(A.Device.Helper).Us,0);A.zV([
this,this.BdF],A._GetAutoObject(A.Device.Helper).Ur,0);this.BdH(this);this.BdF(this
);},At:function(E){C.Fv.At.call(this,E);this.Anj(A._GetAutoObject(A.Device.Helper
).Us.Get(this.DK(E)));this.Ani(A._GetAutoObject(A.Device.Helper).Ur.Get(this.DK(
E)));},Ani:function(E){if(this.AnJ===E)return;C.Fv.Ani.call(this,E);A._GetAutoObject(
A.Device.Helper).Ur.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Ur.
Cl();},Anj:function(E){if(this.AnK===E)return;C.Fv.Anj.call(this,E);A._GetAutoObject(
A.Device.Helper).Us.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Us.
Cl();},BdH:function(G){this.AnK=A._GetAutoObject(A.Device.Helper).Us.Get(this.DK(
this.Q));A.pe([this,this.AUw],this);},BdF:function(G){this.AnJ=A._GetAutoObject(
A.Device.Helper).Ur.Get(this.DK(this.Q));A.pe([this,this.AUv],this);},_Init:function(
aArg){C.Fv._Init.call(this,aArg);this.__proto__=C.ALO;this.XD=A._GetAutoObject(A.
Device.Helper).Adz;this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"
};C.ALP={Agc:null,ABd:0,ABc:0,Init:function(aArg){A.zV([this,this.BdR],A._GetAutoObject(
A.Device.Helper).Ae_,0);A.zV([this,this.BdP],A._GetAutoObject(A.Device.Helper).Ae9
,0);A.zV([this,this.BdN],A._GetAutoObject(A.Device.Helper).Ae8,0);A.zV([this,this.
BdT],A._GetAutoObject(A.Device.Helper).Ae$,0);this.BdR(this);this.BdP(this);this.
BdN(this);this.BdT(this);},At:function(E){C.Fv.At.call(this,E);this.Anj(A._GetAutoObject(
A.Device.Helper).Ae_.Get(this.DK(E)));this.Ani(A._GetAutoObject(A.Device.Helper).
Ae9.Get(this.DK(E)));this.AR4(A._GetAutoObject(A.Device.Helper).Ae8.Get(this.DK(
E)));this.AR6(A._GetAutoObject(A.Device.Helper).Ae$.Get(this.DK(E)));},Ani:function(
E){if(this.AnJ===E)return;C.Fv.Ani.call(this,E);A._GetAutoObject(A.Device.Helper
).Ae9.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Ae9.Cl();},Anj:function(
E){if(this.AnK===E)return;C.Fv.Anj.call(this,E);A._GetAutoObject(A.Device.Helper
).Ae_.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Ae_.Cl();},A5G:function(
){return this.Agc;},BdR:function(G){this.AnK=A._GetAutoObject(A.Device.Helper).Ae_.
Get(this.DK(this.Q));A.pe([this,this.AUw],this);},BdP:function(G){this.AnJ=A._GetAutoObject(
A.Device.Helper).Ae9.Get(this.DK(this.Q));A.pe([this,this.AUv],this);},AR6:function(
E){if(this.ABd===E)return;this.ABd=E;A._GetAutoObject(A.Device.Helper).Ae$.Set(this.
DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Ae$.Cl();A.pe([this,this.A_B],this
);},AR4:function(E){if(this.ABc===E)return;this.ABc=E;A._GetAutoObject(A.Device.
Helper).Ae8.Set(this.DK(this.Q),E);A._GetAutoObject(A.Device.Helper).Ae8.Cl();A.
pe([this,this.A_A],this);},A_A:function(G){A.abo([this,this.A7s,this.AR4],0);},A_B:
function(G){A.abo([this,this.A7t,this.AR6],0);},BdN:function(G){this.ABc=A._GetAutoObject(
A.Device.Helper).Ae8.Get(this.DK(this.Q));A.pe([this,this.A_A],this);},BdT:function(
G){this.ABd=A._GetAutoObject(A.Device.Helper).Ae$.Get(this.DK(this.Q));A.pe([this
,this.A_B],this);},A7t:function(){return this.ABd;},A7s:function(){return this.ABc;
},_Init:function(aArg){C.Fv._Init.call(this,aArg);A.Device.Agc._Init.call(this.Agc={
I:this},0);this.__proto__=C.ALP;this.XD=A._GetAutoObject(A.Device.Helper).Agd;this.
Init(aArg);},_Done:function(){this.__proto__=C.Fv;this.Agc._Done();C.Fv._Done.call(
this);},_ReInit:function(){C.Fv._ReInit.call(this);this.Agc._ReInit();},_Mark:function(
D){var B;C.Fv._Mark.call(this,D);if((B=this.Agc)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::AnimalThresholdsWeightGain"};C.ALv={Ry:null,Init:function(
aArg){var B;A.zX([this,this.Aip],[B=this.AnimalType,B.B9,B.B_],0);A.pe([this,this.
Aip],this);this.A8(this.Ry);},Bh:function(E){C.IT.Bh.call(this,E);this.Ry.Bx(this.
Jf.AK);},Aip:function(G){A._GetAutoObject(A.Device.Device).Av1(this.AnimalType.Q
);},_Init:function(aArg){C.IT._Init.call(this,aArg);C.Tv._Init.call(this.Ry={I:this
},0);this.__proto__=C.ALv;var B;this.Jf.Ar(false);this.Jf.Aj(false);this.Jf.Y(false
);this.Ry.H(AHW);this.Ry.Aj(true);this.Ry.Na(14);this.Ry.Ag8(0);this.Ry.OF(0);this.
J(this.Ry,-6);this.Ry.AN=[this,this.AzN];this.Ry.At([B=this.AnimalType,B.B9,B.B_
]);this.Ry.CH(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.IT;this.Ry._Done();C.IT._Done.call(this);},_ReInit:function(){C.IT._ReInit.call(
this);this.Ry._ReInit();},_Mark:function(D){var B;C.IT._Mark.call(this,D);if((B=
this.Ry)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.Tv={Filter:null,Ei:0,TableId:0,Operator:1,CU:function(){var F;this.Tg((F=this.
Filter,F[1].call(F[0])).DX(this.Ei,this.Operator));},Bg:function(aSize){var B;C.
BW.Bg.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hn.H(Ahw
);this.HX.H([aSize[0]-40,40,aSize[0],80]);this.Ds.H([this.Hn.M[2]-5,this.Hn.M[1]
,this.HX.M[0]+5,this.Hn.M[3]]);this.Ds.AEw((B=this.Ds.M)[2]-B[0]);this.Ds.Hy(this.
Ds.Gi,true,null,null);},Bh:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L7],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L7
],E,0);A.pe([this,this.L7],this);},L7:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.Tg((F=this.Filter,F[1].call(F[0])).DX(this.Ei,this.
Operator));else this.Tg(null);},Ag8:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L7],this);},Na:function(E){if(this.Ei===E)return;this.
Ei=E;A.pe([this,this.L7],this);},Tg:function(AM){this.U(A._GetAutoObject(A.Device.
Helper).Amv(this.TableId,this.Ei));this.Am();},OF:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L7],this);},_Init:function(aArg){C.BW._Init.
call(this,aArg);this.__proto__=C.Tv;this.H(JQ);this.V.A3(0x11);this.V.CB(A.aaL(A.
fl.By));},_ReInit:function(){C.BW._ReInit.call(this);this.V.CB(A.aaL(A.fl.By));this.
CU();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.AQ8={FV:null,MN:null,DP:null,Z:null,D9:null,Cq:null,CE:null,C8:null,Gb:null,
D8:null,C7:null,B5:null,Aw:null,Breed:null,I7:null,AnimalType:null,Gender:null,Pc:
null,KR:null,I5:null,Yl:null,AlQ:null,KB:0,M1:0,A2R:false,Init:function(aArg){var
B;A.zX([this,this.ByG],[B=A._GetAutoObject(A.Device.Device),B.ADQ,B.AH3],0);A.zV([
this,this.Ato],this.MN,0);A.zX([this,this.Ato],[B=A._GetAutoObject(A.Device.Device
),B.AvI,B.Ax_],0);A.zX([this,this.Gw],[B=A._GetAutoObject(A.Device.Device),B.ADQ
,B.AH3],0);A.zV([this,this.Gw],this.MN,0);A.zX([this,this.Aip],this.B5.Q,0);A.pe([
this,this.Aip],this);A.pe([this,this.Bdi],this);A.pe([this,this.Ato],this);A.pe([
this,this.Gw],this);A.pe([this,this.BdE],this);},A8:function(E){C.AB.A8.call(this
,E);A.pe([this,this.AKz],this);A.pe([this,this.DC],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.D9.Q,F[1].call(F[0])))this.D9.Aq$(A.jb.ET);else
this.D9.Aq$(A.jb.FZ);if(A._GetAutoObject(A.Device.Device).Ael){if(!!(F=this.Cq.Dh
,F[1].call(F[0])))this.Cq.Aq$(A.jb.ET);else this.Cq.Aq$(A.jb.FZ);}else this.Cq.Aq$(
A.jb.Ace);A.pe([this,this.DC],this);},Dv:function(G){var B;C.AB.Dv.call(this,G);
if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},LI:
function(G){if(A._GetAutoObject(A.Device.Device).Ap.Lc())A._GetAutoObject(A.Device.
Device).A5(41,true,A._GetAutoObject(A.Device.Device).Ap.HA().toFixed(),0,null);A.
_GetAutoObject(A.Device.Helper).W.Gf();A._GetAutoObject(A.Device.Helper).ApP(A._GetAutoObject(
A.Device.Helper).W);this.Ao9();},Cx:function(G){C.AB.Cx.call(this,G);A._GetAutoObject(
A.Device.Device).AED(0);},EV:function(G){C.AB.EV.call(this,G);this.I5.Ar(false);
A._GetAutoObject(A.Device.Device).Uc(false);},Eo:function(G){A._GetAutoObject(A.
Device.Helper).W.Hd();A._GetAutoObject(C.AW).Fl();},E9:function(G){var B;this.Aw.
Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);this.Aw.Mr(-this.
Z.Bq[1]);},G8:function(G){A.pe([this,this.E9],this);},Ato:function(G){var F,CN;if(
!!A._GetAutoObject(A.Device.Device).OverlayMenu)return;this.AKz(this);this.Am();
if((this.AR===this.D9)&&!!(F=this.D9.Q,F[1].call(F[0]))){if(A._GetAutoObject(A.Device.
Device).Ap.AdW(26,(F=this.D9.Q,F[1].call(F[0])))){A._GetAutoObject(A.Device.Device
).A5(21,true,A._GetAutoObject(A.Device.Converter).SM((F=this.D9.Q,F[1].call(F[0]
))),0,[this,this.A1$]);(F=this.D9.Q,F[2].call(F[0],0));A.pe([this,this.A1_],this
);return;}else if(A._GetAutoObject(A.Device.Device).Ael)this.Jx(this.Cq);}if(this.
MN.ANW()>0)return;if((A._GetAutoObject(A.Device.Device).Ael&&(this.AR===this.Cq)
)&&!!(F=this.Cq.Dh,F[1].call(F[0])))this.Jx(this.D9);if(!!(F=this.D9.Q,F[1].call(
F[0]))&&(!A._GetAutoObject(A.Device.Device).Ael||!!(CN=this.Cq.Dh,CN[1].call(CN[
0]))))this.Bbp(this);},Xj:function(G){A._GetAutoObject(A.Device.Device).Cd(13);}
,AiD:function(){var F;this.FV.Cl(A._GetAutoObject(A.Device.Device).Ap);if(this.MN.
LO(23)){if(A._GetAutoObject(A.Device.Device).Br.Lc())A._GetAutoObject(A.Device.Device
).A5(50,true,A._GetAutoObject(A.Device.Device).Br.HA().toFixed(),0,null);else{var
L1=A._GetAutoObject(A.Device.Device).Ap.K9(0,this.FV.Id);A._GetAutoObject(A.Device.
Device).Sy(L1);var BY=A._NewObject(A.Device.Rating,0);BY.Gf();BY.OnSetAnimalId(this.
FV.Id);BY.OnSetBodyWeight(this.KB);BY.OnSetTimestamp(this.FV.DateOfBirth);BY.Cl(
A._GetAutoObject(A.Device.Device).Br);}}if(this.MN.LO(18)){if(A._GetAutoObject(A.
Device.Device).Br.Lc())A._GetAutoObject(A.Device.Device).A5(50,true,A._GetAutoObject(
A.Device.Device).Br.HA().toFixed(),0,null);else{var L1=A._GetAutoObject(A.Device.
Device).Ap.K9(0,this.FV.Id);A._GetAutoObject(A.Device.Device).Sy(L1);var BY=A._NewObject(
A.Device.Rating,0);BY.Gf();BY.OnSetAnimalId(this.FV.Id);BY.OnSetBodyWeight(this.
M1);BY.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).DF());BY.Cl(A._GetAutoObject(
A.Device.Device).Br);}}A._GetAutoObject(A.Device.Device).Wi(65280);this.I5.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AED(F.Avl+1));this.A2R=true;A.pe([this,
this.AKz],this);this.Ao9();},Gw:function(G){this.Cq.ASy(A._GetAutoObject(A.Device.
Device).Ael);A._GetAutoObject(A.Device.Helper).Mx(this.B5,this.MN.LO(14));A._GetAutoObject(
A.Device.Helper).Mx(this.C7,this.MN.LO(23));A._GetAutoObject(A.Device.Helper).Mx(
this.CE,this.MN.LO(32));A._GetAutoObject(A.Device.Helper).Mx(this.D8,this.MN.LO(
18));A._GetAutoObject(A.Device.Helper).Mx(this.C8,this.MN.LO(7));A._GetAutoObject(
A.Device.Helper).Mx(this.Gb,this.MN.LO(34));this.Yl.Y(!this.MN.ANW());var P;var Aa=
null;var AoQ=this.AR;for(P=0;P<this.MN.Afq.Po();P++){Aa=this.BxC(this.MN.Afq.Pn(
P));if(!!Aa)this.Ze(Aa);}this.Jx(AoQ);A._GetAutoObject(A.Device.Helper).AMF(this.
Z);this.Am();},Aev:function(E){if(this.KB===E)return;this.KB=E;A.abo([this,this.
Avv,this.Aev],0);},Ag2:function(E){if(this.M1===E)return;this.M1=E;A.abo([this,this.
Am1,this.Ag2],0);},Bbp:function(G){this.FV.Gf();A._GetAutoObject(A.Device.Helper
).ApP(this.FV);this.FV.Sp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
FV.Nb(A._GetAutoObject(A.Device.Helper).W.NaisId);this.FV.Ud(A._GetAutoObject(A.
Device.Helper).ALw(0,this.FV));this.FV.AeB(true);if(this.MN.LO(14))this.FV.DT(A.
_GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MN.LO(32))this.FV.NR(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MN.LO(7))this.FV.JJ(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MN.LO(34))this.FV.Nc(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var Ak0=A._GetAutoObject(A.Device.Helper).A0p(this.FV,0,A._GetAutoObject(
A.Device.Device).Ap);if(!Ak0)this.AiD();else A._GetAutoObject(A.Device.Helper).AJw(
this.FV,Ak0,0,0,[this,this.Apd]);},Ao9:function(){A._GetAutoObject(A.Device.Helper
).W.Nb(0);if(A._GetAutoObject(A.Device.Device).Ael)A._GetAutoObject(A.Device.Helper
).W.Sp(0);this.Aev(0);this.Ag2(0);this.Jx(this.D9);this.Am();},Apd:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.Ao9();break;case 43:this.Jx(this.D9);break;case 41:break;
default:A.ab5("%s%e",Ast,As.Id);}},Jx:function(Af){this.A8(Af);this.Z.Hy(Af,true
,null,null);this.Z.Vc(null,null);},Bdi:function(G){this.D8.Ag6(A._GetAutoObject(
A.Device.Helper).W.Ahv(1));this.Ato(this);},Aip:function(G){this.C7.Ag6(A._GetAutoObject(
A.Device.Helper).Aa1(this.AnimalType.Q));},BdE:function(G){var B;var BzM=this.Aw.
Background.Fd();var width=(BzM?((B=this.M)[2]-B[0])-((B=this.Aw.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var W_=this.Z.Vx(null,0x1);while(!!W_&&(((B=W_)?B.__proto__:null
)!==A.Core.Z)){Aa=(C.ON.isPrototypeOf(W_)?W_:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));W_=this.Z.Vx(W_,0x1);}},BxC:function(ZV){var Aa=null;switch(ZV){case 14:Aa=this.
B5;break;case 32:Aa=this.CE;break;case 23:Aa=this.C7;break;case 7:Aa=this.C8;break;
case 18:Aa=this.D8;break;case 34:Aa=this.Gb;break;default:A.ab5("%s%e",BrV,ZV);}
return Aa;},ByG:function(G){var F;if(A._GetAutoObject(A.Device.Device).Ael)A._GetAutoObject(
A.Device.Helper).W.Sp(0);else if(!(F=this.Cq.Dh,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).W.Sp(A._GetAutoObject(A.Device.Helper).DF()-A._GetAutoObject(A.
Device.Helper).Aun(A._GetAutoObject(A.Device.Device).Ai0));this.Ato(this);},AKz:
function(G){var B;var AJB=A.jV;var Ayt=A.jb.CG;var BbF=A.jb.AR;this.AlQ.Aw2(this
);if(this.A2R){this.A2R=false;AJB=A._GetAutoObject(A.Device.Helper).Ne(A.aaR(A.acf.
BnE),PZ,A._GetAutoObject(A.Device.Converter).SM(this.FV.NaisId));A.pe([B=this.AlQ
,B.StartTimer],this);Ayt=A.jb.ET;BbF=A.jb.Text;}else if((this.AR===this.D9)&&!A.
_GetAutoObject(A.Device.Helper).W.NaisId)AJB=A.aaR(A.acf.BmU);else if((this.AR===
this.Cq)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AJB=A.aaR(A.acf.BmT);
this.Yl.U(AJB);this.Yl.Bkd(Ayt);this.Yl.Bke(BbF);},A1$:function(G){var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).Ajc();else if(As.Id===105){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).Ajc();else if(As.PopupState===7){A._GetAutoObject(C.AW).BS(87);
A._GetAutoObject(A.Device.Device).Ajc();}}}else A._GetAutoObject(A.Device.Device
).Ajc();},A1_:function(G){A._GetAutoObject(A.Device.Device).Aue();},DC:function(
G){var B;if(!this.MN.ANW()){this.N.K$.Dm(255);if(this.AR===this.D9){this.N.C3(A.
aaL(A.ach.Edit));this.N.Cc=[B=this.D9,B.FJ];}else if(this.AR===this.Cq){this.N.C3(
A.aaL(A.ach.Edit));this.N.Cc=[B=this.Cq,B.FJ];}else{this.N.C3(null);this.N.Cc=null;
}}else{this.N.C3(A.aaL(A.ach.AmC));if((this.D9.ApZ===A.jb.FZ)||(this.Cq.ApZ===A.
jb.FZ)){this.N.K$.Dm(100);this.N.Cc=null;}else{this.N.K$.Dm(255);this.N.Cc=[this
,this.Bbp];}}},Avv:function(){return this.KB;},Am1:function(){return this.M1;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AJ._Init.call(this.DP={I:this},0
);A.Core.Z._Init.call(this.Z={I:this},0);C.ATF._Init.call(this.D9={I:this},0);C.
ATB._Init.call(this.Cq={I:this},0);C.AwS._Init.call(this.CE={I:this},0);C.BW._Init.
call(this.C8={I:this},0);C.ArX._Init.call(this.Gb={I:this},0);C.Akv._Init.call(this.
D8={I:this},0);C.Akv._Init.call(this.C7={I:this},0);C.BW._Init.call(this.B5={I:this
},0);C.Aw._Init.call(this.Aw={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.UC._Init.call(this.I7={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.MZ._Init.call(this.
Pc={I:this},0);A.Device.KR._Init.call(this.KR={I:this},0);A.Device.Tw._Init.call(
this.I5={I:this},0);C.AT$._Init.call(this.Yl={I:this},0);A.Core.Timer._Init.call(
this.AlQ={I:this},0);this.__proto__=C.AQ8;var B;this.Background.L(A.jb.C1);this.
N.Y(true);this.Ec.Ar(false);this.Dl(C.AOD);this.DP.AX(0x3F);this.DP.H(E4);this.DP.
L(A.jb.CG);this.Z.H(E4);this.Z.Kd(9);this.D9.H(AHW);this.D9.Aj(true);this.D9.U(A.
aaR(A.acf.ABW));this.D9.ASy(true);this.D9.AEX(false);this.Cq.H(A$k);this.Cq.Aj(true
);this.Cq.U(A.aaR(A.acf.AdQ));this.Cq.ASy(true);this.Cq.AES(true);this.CE.H(Asr);
this.CE.Aj(true);this.CE.U(A.aaR(A.acf.Breed));this.C8.H(Asr);this.C8.Aj(true);this.
C8.U(A.aaR(A.acf.AeX));this.Gb.H(A$l);this.Gb.Aj(true);this.Gb.U(A.aaR(A.acf.I7)
);this.D8.H(BrW);this.D8.Aj(true);this.D8.U(A.aaR(A.acf.M1));this.D8.Gn(1000);this.
D8.E1(99000);this.D8.Ag6(A._GetAutoObject(A.Device.Helper).Aa1(this.AnimalType.Q
));this.C7.H(A$l);this.C7.Aj(true);this.C7.U(A.aaR(A.acf.KB));this.C7.Gn(1000);this.
C7.E1(99000);this.C7.Ag6(A._GetAutoObject(A.Device.Helper).Aa1(this.AnimalType.Q
));this.B5.H(Asq);this.B5.Aj(true);this.B5.U(A.aaR(A.acf.Ae5));this.Aw.H(IK);this.
I5.B0=false;this.I5.Cs=true;this.I5.HG(1);this.I5.Fe(1000);this.I5.T$(0);this.Yl.
H(ZR);this.Yl.Aj(true);this.Yl.Aq$(A.jb.Text);this.AlQ.PJ(3000);this.J(this.DP,0
);this.J(this.Z,0);this.J(this.D9,0);this.J(this.Cq,0);this.J(this.CE,0);this.J(
this.C8,0);this.J(this.Gb,0);this.J(this.D8,0);this.J(this.C7,0);this.J(this.B5,
0);this.J(this.Aw,0);this.J(this.Yl,0);this.N.Cw=[this,this.Eo];this.N.Ci=[this,
this.Xj];this.N.CT(A.aaL(A.ach.EU));this.N.Cn(A.aaL(A.ach.Abb));this.Z.Ej=[this,
this.G8];this.D9.Gg([this,this.D3,this.GG]);this.D9.At([B=A._GetAutoObject(A.Device.
Helper).W,B.Am4,B.Nb]);this.D9.AEt([this,this.Ato]);this.D9.ASp([this,this.A1_]);
this.D9.ASq([this,this.A1$]);this.Cq.Gg([this,this.D3,this.GG]);this.Cq.AbM([B=A.
_GetAutoObject(A.Device.Helper).W,B.Avy,B.Sp]);this.Cq.Oy=[this,this.Bdi];this.Cq.
ASp([this,this.A1_]);this.Cq.ASq([this,this.A1$]);this.CE.Gg([this,this.D3,this.
GG]);this.CE.LT([B=this.CE,B.FJ]);this.CE.LV(A.aaL(A.ach.Edit));this.CE.At([B=this.
Breed,B.B9,B.B_]);this.CE.CH(this.Breed);this.CE.Am9(this.Pc);this.C8.At([B=this.
Gender,B.B9,B.B_]);this.C8.CH(this.Gender);this.Gb.Gg([this,this.D3,this.GG]);this.
Gb.LT([B=this.Gb,B.FJ]);this.Gb.LV(A.aaL(A.ach.Edit));this.Gb.At([B=this.I7,B.B9
,B.B_]);this.Gb.CH(this.I7);this.Gb.Am9(this.KR);this.D8.At([this,this.Am1,this.
Ag2]);this.C7.At([this,this.Avv,this.Aev]);this.B5.At([B=this.AnimalType,B.B9,B.
B_]);this.B5.CH(this.AnimalType);this.Aw.BlB([this,this.BdE]);this.Breed.LU(A._GetAutoObject(
A.Device.Helper).W);this.I7.LU(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LU(A._GetAutoObject(A.Device.Helper).W);this.Gender.LU(A._GetAutoObject(A.Device.
Helper).W);this.FV=A._NewObject(A.Device.Animal,0);this.MN=A._GetAutoObject(C.Al0
);this.I5.Q=[B=A._GetAutoObject(A.Device.Device),B.ARW,B.AZg];this.AlQ.Mt=[this,
this.AKz];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.DP._Done();
this.Z._Done();this.D9._Done();this.Cq._Done();this.CE._Done();this.C8._Done();this.
Gb._Done();this.D8._Done();this.C7._Done();this.B5._Done();this.Aw._Done();this.
Breed._Done();this.I7._Done();this.AnimalType._Done();this.Gender._Done();this.Pc.
_Done();this.KR._Done();this.I5._Done();this.Yl._Done();this.AlQ._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DP._ReInit();this.Z.
_ReInit();this.D9._ReInit();this.Cq._ReInit();this.CE._ReInit();this.C8._ReInit(
);this.Gb._ReInit();this.D8._ReInit();this.C7._ReInit();this.B5._ReInit();this.Aw.
_ReInit();this.Breed._ReInit();this.I7._ReInit();this.AnimalType._ReInit();this.
Gender._ReInit();this.Pc._ReInit();this.KR._ReInit();this.I5._ReInit();this.Yl._ReInit(
);this.AlQ._ReInit();this.D9.U(A.aaR(A.acf.ABW));this.Cq.U(A.aaR(A.acf.AdQ));this.
CE.U(A.aaR(A.acf.Breed));this.C8.U(A.aaR(A.acf.AeX));this.Gb.U(A.aaR(A.acf.I7));
this.D8.U(A.aaR(A.acf.M1));this.C7.U(A.aaR(A.acf.KB));this.B5.U(A.aaR(A.acf.Ae5)
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.FV)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.MN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
DP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
KR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AlQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalsMassRecording"};C.ArW={Y0:null,_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);A.acg.Text._Init.call(this.Y0={
I:this},0);this.__proto__=C.ArW;this.N.BZ(A.acf.BgF);this.Number.H(BrX);this.I6.
H(BrY);this.II.H(BrZ);this.Akh(2);this.Bbm=false;this.Bcq=true;this.Bcr=false;this.
Y0.H(Br0);this.Y0.KL(true);this.Y0.R(A.aaR(A.acf.A_c));this.Y0.L(A.jb.Text);this.
J(this.Y0,0);this.N.Cw=null;this.N.Cc=[this,this.AH_];this.N.CT(null);this.Y0.S(
A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.Y0.
_Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Y0._ReInit();this.Y0.R(A.aaR(A.acf.A_c));this.Y0.S(A.aaL(
A.fl.Ah));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Y0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.AC6={Cp:null,FB:function(E){if(this.M3===E)return;C.HB.FB.call(this,E);this.
Cp.C2(E);},X_:function(Hq){var B3=null;switch(Hq){case-1:case 0:B3=this.FO;break;
case 1:B3=this.Cp;break;case 2:B3=this.GO;break;default:A.ab5("%s",AhD);}return B3;
},_Init:function(aArg){C.HB._Init.call(this,aArg);C.DE._Init.call(this.Cp={I:this
},0);this.__proto__=C.AC6;this.H(Br1);this.Cp.H(A_W);this.FO.H(Br2);this.J(this.
Cp,-2);this.Cp.Dk=[this,this.GI];},_Done:function(){this.__proto__=C.HB;this.Cp.
_Done();C.HB._Done.call(this);},_ReInit:function(){C.HB._ReInit.call(this);this.
Cp._ReInit();},_Mark:function(D){var B;C.HB._Mark.call(this,D);if((B=this.Cp)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.ArX={GS:null
,Bg:function(aSize){C.OK.Bg.call(this,aSize);this.V.H(A.abN(this.V.M,this.GS.M[0
]));},Ai:function(Ae){C.OK.Ai.call(this,Ae);if(this.Hb)this.GS.FB(A.jb.CG);else this.
GS.FB(A.jb.C1);},A00:function(){this.A8(this.GS);},_Init:function(aArg){C.OK._Init.
call(this,aArg);C.HB._Init.call(this.GS={I:this},0);this.__proto__=C.ArX;this.GS.
H(Br3);this.J(this.GS,0);this.GS.At([this,this.ARM,this.AEM]);},_Done:function(){
this.__proto__=C.OK;this.GS._Done();C.OK._Done.call(this);},_ReInit:function(){C.
OK._ReInit.call(this);this.GS._ReInit();},_Mark:function(D){var B;C.OK._Mark.call(
this,D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.AwS={GS:null,Bg:function(aSize){C.OK.Bg.call(this,aSize);this.V.H(A.abN(this.
V.M,this.GS.M[0]));},Ai:function(Ae){C.OK.Ai.call(this,Ae);if(this.Hb)this.GS.FB(
A.jb.CG);else this.GS.FB(A.jb.C1);},A00:function(){this.A8(this.GS);},_Init:function(
aArg){C.OK._Init.call(this,aArg);C.AC6._Init.call(this.GS={I:this},0);this.__proto__=
C.AwS;this.GS.AX(0x18);this.GS.H(Br4);this.J(this.GS,0);this.GS.At([this,this.ARM
,this.AEM]);},_Done:function(){this.__proto__=C.OK;this.GS._Done();C.OK._Done.call(
this);},_ReInit:function(){C.OK._ReInit.call(this);this.GS._ReInit();},_Mark:function(
D){var B;C.OK._Mark.call(this,D);if((B=this.GS)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Ab7={ScreenTypeToString:
null,Dp:function(){return 4;},F$:function(aIndex){if((aIndex<0)||(aIndex>=106))return A.
jV;return this.ScreenTypeToString.BP(this.C5(aIndex));},_Init:function(aArg){C.CO.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Ab7;this.Co.Set(0,3);this.Co.Set(1,35);this.Co.Set(2
,34);this.Co.Set(3,47);},_Done:function(){this.__proto__=C.CO;this.ScreenTypeToString.
_Done();C.CO._Done.call(this);},_ReInit:function(){C.CO._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.CO._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AUS={We:function(G){this.Af5();A._GetAutoObject(C.Bz).Qq(A.aaR(A.acf.Settings
),[this,this.A2n]);A._GetAutoObject(C.Bz).Fu();this.ALh();A._GetAutoObject(C.Bz).
Nx(A.aaR(A.acf.LinkTransponder));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.
Bz).Nx(A.aaR(A.acf.AMV)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cd(
6);},Dv:function(G){},Cx:function(G){C.Rx.Cx.call(this,G);A.pe([this,this.AZl],this
);},Aa3:function(){return C.Ajd;},Aa4:function(){return C.Ajz;},QY:function(G){A.
_GetAutoObject(A.Device.Device).Ap.Bh(A._GetAutoObject(A.Device.Helper).A5T());}
,HJ:function(G){C.Rx.HJ.call(this,G);if(this.AjV()===false){this.N.Cn(A.aaL(A.ach.
AuZ));this.N.Ci=[this,this.AM_];this.N.FC(A.jV);}this.N.OG(false);this.N.OH(false
);},AfR:function(){A._GetAutoObject(C.AW).BS(97);},AfQ:function(){A._GetAutoObject(
C.AW).BS(98);},A2n:function(G){A._GetAutoObject(A.Device.Device).Cd(0);A._GetAutoObject(
C.AW).BS(101);},_Init:function(aArg){C.Rx._Init.call(this,aArg);this.__proto__=C.
AUS;this.Dl(C.ACy);this.Dt(A.aaR(A.acf.A67));this.ASl(A._GetAutoObject(C.Axk));}
,_ReInit:function(){C.Rx._ReInit.call(this);this.Dt(A.aaR(A.acf.A67));},_className:
"Application::YoungNoTransponderListScreen"};C.AUR={_Init:function(aArg){C.IT._Init.
call(this,aArg);this.__proto__=C.AUR;this.KP.Ar(false);this.KP.Aj(false);this.KP.
Y(false);},_className:"Application::YoungNoTransponderListFilterScreen"};C.AUQ={
_Init:function(aArg){C.Gy._Init.call(this,aArg);this.__proto__=C.AUQ;this.N.BZ(A.
aaR(A.acf.A4d));},_ReInit:function(){C.Gy._ReInit.call(this);this.N.BZ(A.aaR(A.acf.
A4d));},_className:"Application::YoungNoTransponderListActionsScreen"};C.AQg={Sc:
null,Q:null,A63:0,M3:0,Init:function(aArg){this.ASo(6);},At:function(E){if(A.aaZ(
this.Q,E))return;this.Q=E;if(!!this.Sc)this.Sc.At(E);},ASo:function(E){if(this.A63===
E)return;this.A63=E;var X;switch(E){case 2:X=A._NewObject(C.HB,0);break;case 3:X=
A._NewObject(C.AC6,0);break;case 4:X=A._NewObject(C.AQd,0);break;case 5:X=A._NewObject(
C.AQe,0);break;case 6:X=A._NewObject(C.Ave,0);break;default:{X=null;A.ab5("%s%i"
,Br5,E);}}this.Ble(X);},Ble:function(E){if(this.Sc===E)return;if(!!this.Sc){this.
Sc.At(null);this.HI(this.Sc);}this.Sc=E;if(!!this.Sc){this.Sc.At(this.Q);this.J(
this.Sc,0);}},FB:function(E){if(this.M3===E)return;this.M3=E;if(!!this.Sc)this.Sc.
FB(E);},Sx:function(Gq){if(!!this.Sc)this.Sc.Sx(Gq);},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);this.__proto__=C.AQg;this.H(AxE);this.Init(aArg);},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Sc)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::InputNumberVariable_32"};C.AQd={CR:null,Cp:null,FB:function(E){if(
this.M3===E)return;C.HB.FB.call(this,E);this.Cp.C2(E);this.CR.C2(E);},X_:function(
Hq){var B3=null;switch(Hq){case-1:case 0:B3=this.FO;break;case 1:B3=this.Cp;break;
case 2:B3=this.CR;break;case 3:B3=this.GO;break;default:A.ab5("%s",AhD);}return B3;
},_Init:function(aArg){C.HB._Init.call(this,aArg);C.DE._Init.call(this.CR={I:this
},0);C.DE._Init.call(this.Cp={I:this},0);this.__proto__=C.AQd;this.H(Br6);this.GO.
H(AsF);this.CR.H(A_X);this.Cp.H(A_Y);this.FO.H(A_Z);this.J(this.CR,-2);this.J(this.
Cp,-2);this.CR.Dk=[this,this.GI];this.Cp.Dk=[this,this.GI];},_Done:function(){this.
__proto__=C.HB;this.CR._Done();this.Cp._Done();C.HB._Done.call(this);},_ReInit:function(
){C.HB._ReInit.call(this);this.CR._ReInit();this.Cp._ReInit();},_Mark:function(D
){var B;C.HB._Mark.call(this,D);if((B=this.CR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.AB5={SN:null,Ai:function(Ae){C.Aa0.Ai.call(this,Ae);this.SN.L(this.V.AQ);},_Init:
function(aArg){C.Aa0._Init.call(this,aArg);C.CP._Init.call(this.SN={I:this},0);this.
__proto__=C.AB5;this.V.Y(false);this.A0.H(Br7);this.A0.ASo(4);this.SN.H(Br8);this.
SN.R(A.aaR(A.acf.J7));this.SN.L(A.jb.Bi);this.J(this.SN,0);this.SN.S(A.aaL(A.fl.
Ah));this.SN.A7(A.aaL(A.fl.Ak));this.SN.CB(null);},_Done:function(){this.__proto__=
C.Aa0;this.SN._Done();C.Aa0._Done.call(this);},_ReInit:function(){C.Aa0._ReInit.
call(this);this.SN._ReInit();this.SN.R(A.aaR(A.acf.J7));this.SN.S(A.aaL(A.fl.Ah)
);this.SN.A7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Aa0._Mark.call(this,D);
if((B=this.SN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LS={YD:null,TW:null,AQ:0,A6i:false,L:function(E){if(this.AQ===E)return;this.
AQ=E;this.YD.L(this.AQ);this.TW.L(this.AQ);},A8R:function(E){var B;if(this.A6i===
E)return;this.A6i=E;if(E){this.YD.Y(true);this.TW.DM([this.TW.Ev[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.YD.Y(false);this.TW.DM([this.TW.Ev[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.DR._Init.call(
this.YD={I:this},0);A.acg.DR._Init.call(this.TW={I:this},0);this.__proto__=C.LS;
this.H(AYY);this.YD.AX(0x2D);this.YD.DM(Ahz);this.YD.DY(A$m);this.YD.L(A.jb.Text
);this.TW.AX(0x36);this.TW.DM(A$m);this.TW.DY(Br9);this.TW.L(A.jb.Text);this.AQ=
A.jb.Text;this.J(this.YD,0);this.J(this.TW,0);},_Done:function(){this.__proto__=
A.Core.O;this.YD._Done();this.TW._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.YD._ReInit();this.TW._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.TW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.ATj={Sh:null,Pt:null,C8:null,B5:null,CE:null,GF:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,Pc:null,UC:null,KR:null,Init:function(aArg){A.zX([this
,this.At_],this.B5.Q,0);A.zX([this,this.AMb],this.CE.Q,0);A.zX([this,this.Bo0],this.
Sh.Q,0);A.zX([this,this.AuP],this.C8.Q,0);A.zX([this,this.AUO],this.GF.Q,0);},At_:
function(G){var F;A._GetAutoObject(A.Device.Device).DT((F=this.B5.Q,F[1].call(F[
0])));},Bo0:function(G){var F;A._GetAutoObject(A.Device.Device).Aww((F=this.Sh.Q
,F[1].call(F[0])));},AuP:function(G){var F;A._GetAutoObject(A.Device.Device).JJ((
F=this.C8.Q,F[1].call(F[0])));},AUO:function(G){var F;A._GetAutoObject(A.Device.
Device).Nc((F=this.GF.Q,F[1].call(F[0])));},AMb:function(G){var F;A._GetAutoObject(
A.Device.Device).NR((F=this.CE.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cr._Init.
call(this,aArg);C.BW._Init.call(this.Sh={I:this},0);C.I2._Init.call(this.Pt={I:this
},0);C.BW._Init.call(this.C8={I:this},0);C.BW._Init.call(this.B5={I:this},0);C.AwS.
_Init.call(this.CE={I:this},0);C.ArX._Init.call(this.GF={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.MZ._Init.call(this.Pc={I:this},0);C.UC._Init.call(this.UC={I:
this},0);A.Device.KR._Init.call(this.KR={I:this},0);this.__proto__=C.ATj;var B;this.
JK((A.aaR(A.acf.ArI)+AxP)+A.aaR(A.acf.Ajj));this.Sh.H(AhC);this.Sh.Aj(true);this.
Sh.U(A.aaR(A.acf.A_L));this.Sh.Bf(true);this.Sh.Bx(0);this.Pt.H(AxC);this.Pt.Aj(
true);this.Pt.Y(true);this.Pt.U(A.aaR(A.acf.Ai0));this.Pt.Gn(0);this.Pt.E1(99);this.
Pt.Kh(A.aaR(A.acf.J7));this.Pt.KK(A.aaR(A.acf.GB));this.C8.H(ZR);this.C8.Aj(true
);this.C8.U(A.aaR(A.acf.AeX));this.C8.Bf(true);this.C8.Bx(0);this.B5.H(An0);this.
B5.Aj(true);this.B5.U(A.aaR(A.acf.Ae5));this.B5.Bf(true);this.B5.Bx(0);this.CE.H(
AkQ);this.CE.Aj(true);this.CE.U(A.aaR(A.acf.Breed));this.CE.Bf(false);this.GF.H(
AkQ);this.GF.Aj(true);this.GF.U(A.aaR(A.acf.I7));this.GF.Bf(true);this.AnimalType.
At(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.At(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.At(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(A.Device.Device).Breed);
this.UC.At(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sh,0);this.
J(this.Pt,0);this.J(this.C8,0);this.J(this.B5,0);this.J(this.CE,0);this.J(this.GF
,0);this.Sh.At([B=this.WeightRecordingScope,B.B9,B.B_]);this.Sh.CH(this.WeightRecordingScope
);this.Pt.At([B=A._GetAutoObject(A.Device.Device),B.A7k,B.A$H]);this.C8.At([B=this.
Gender,B.B9,B.B_]);this.C8.CH(this.Gender);this.B5.At([B=this.AnimalType,B.B9,B.
B_]);this.B5.CH(this.AnimalType);this.CE.Gg([this,this.D3,this.GG]);this.CE.LT([
B=this.CE,B.FJ]);this.CE.LV(A.aaL(A.ach.Edit));this.CE.At([B=this.Breed,B.B9,B.B_
]);this.CE.CH(this.Breed);this.CE.Am9(this.Pc);this.GF.Gg([this,this.D3,this.GG]
);this.GF.LT([B=this.GF,B.FJ]);this.GF.LV(A.aaL(A.ach.Edit));this.GF.At([B=this.
UC,B.B9,B.B_]);this.GF.CH(this.UC);this.GF.Am9(this.KR);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cr;this.Sh._Done();this.Pt._Done();this.C8._Done();this.
B5._Done();this.CE._Done();this.GF._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.Pc._Done();this.UC._Done();this.
KR._Done();C.Cr._Done.call(this);},_ReInit:function(){C.Cr._ReInit.call(this);this.
Sh._ReInit();this.Pt._ReInit();this.C8._ReInit();this.B5._ReInit();this.CE._ReInit(
);this.GF._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.Pc._ReInit();this.UC._ReInit();
this.KR._ReInit();this.JK((A.aaR(A.acf.ArI)+AxP)+A.aaR(A.acf.Ajj));this.Sh.U(A.aaR(
A.acf.A_L));this.Pt.U(A.aaR(A.acf.Ai0));this.Pt.Kh(A.aaR(A.acf.J7));this.Pt.KK(A.
aaR(A.acf.GB));this.C8.U(A.aaR(A.acf.AeX));this.B5.U(A.aaR(A.acf.Ae5));this.CE.U(
A.aaR(A.acf.Breed));this.GF.U(A.aaR(A.acf.I7));},_Mark:function(D){var B;C.Cr._Mark.
call(this,D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Pc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UC)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.ATi={QD:null,Jj:null,Ih:null,Fa:null,Fx:null,Ig:null,AutoRegistrationMode:null
,Adv:null,Init:function(aArg){var B;A.zX([this,this.BfI],this.QD.Q,0);A.zX([this
,this.Bc7],[B=A._GetAutoObject(A.Device.Device),B.ARu,B.AY2],0);A.zX([this,this.
Api],[B=A._GetAutoObject(A.Device.Device),B.AbC,B.Acv],0);A.zX([this,this.Api],[
B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw],0);A.pe([this,this.Bc7],this);A.
pe([this,this.Api],this);},BfI:function(G){var F;A._GetAutoObject(A.Device.Device
).AvP((F=this.QD.Q,F[1].call(F[0])));},Bc7:function(G){switch(A._GetAutoObject(A.
Device.Device).Af8){case 0:A._GetAutoObject(A.Device.Helper).Mx(this.Ih,true);break;
case 1:A._GetAutoObject(A.Device.Helper).Mx(this.Ih,false);break;default:throw new
Error(Br_+A._GetAutoObject(A.Device.Device).Af8.toFixed());}},Api:function(G){var
F,CN;if(((F=this.Fa.Q,F[1].call(F[0]))+(CN=this.Fx.Q,CN[1].call(CN[0])))>12)(CN=
this.Fx.Q,CN[2].call(CN[0],12-(F=this.Fa.Q,F[1].call(F[0]))));},_Init:function(aArg
){C.Cr._Init.call(this,aArg);C.BW._Init.call(this.QD={I:this},0);C.BW._Init.call(
this.Jj={I:this},0);C.AFQ._Init.call(this.Ih={I:this},0);C.I2._Init.call(this.Fa={
I:this},0);C.I2._Init.call(this.Fx={I:this},0);C.ADs._Init.call(this.Ig={I:this}
,0);C.AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.Adv.
_Init.call(this.Adv={I:this},0);this.__proto__=C.ATi;var B;this.JK(A.aaR(A.acf.ApR
));this.QD.H(AHW);this.QD.Aj(true);this.QD.U(A.aaR(A.acf.ApR));this.QD.Bf(false);
this.QD.Gn(-1);this.QD.E1(1);this.Jj.H(WV);this.Jj.Aj(true);this.Jj.Y(true);this.
Jj.U(A.aaR(A.acf.AA6));this.Jj.Bf(true);this.Ih.H(ZR);this.Ih.Aj(true);this.Ih.Y(
true);this.Ih.U(A.aaR(A.acf.ADA));this.Ih.Bf(true);this.Fa.H(An0);this.Fa.Aj(true
);this.Fa.Y(true);this.Fa.U(A.aaR(A.acf.ABQ));this.Fa.Bf(false);this.Fa.Gn(2);this.
Fa.E1(6);this.Fa.Kh(A.aaR(A.acf.Ajl));this.Fa.KK(A.aaR(A.acf.E$));this.Fx.H(AkQ);
this.Fx.Aj(true);this.Fx.U(A.aaR(A.acf.ADG));this.Fx.Bf(true);this.Fx.Gn(0);this.
Fx.E1(12);this.Fx.Kh(A.aaR(A.acf.Ajl));this.Fx.KK(A.aaR(A.acf.E$));this.Ig.H(Br$
);this.Ig.Ar(true);this.Ig.Aj(true);this.Ig.Bf(false);this.Ig.AEL(A.aaR(A.acf.ABb
));this.AutoRegistrationMode.At(A._GetAutoObject(A.Device.Device).AutoRegistrationMode
);this.J(this.QD,0);this.J(this.Jj,0);this.J(this.Ih,0);this.J(this.Fa,0);this.J(
this.Fx,0);this.J(this.Ig,0);this.QD.At([B=this.AutoRegistrationMode,B.B9,B.B_]);
this.QD.CH(this.AutoRegistrationMode);this.Jj.At([B=this.Adv,B.B9,B.B_]);this.Jj.
CH(this.Adv);this.Ih.T_([B=A._GetAutoObject(A.Device.Device),B.Wc,B.AY7]);this.Ih.
Aj9([B=A._GetAutoObject(A.Device.Device),B.AvA,B.Ax4]);this.Fa.At([B=A._GetAutoObject(
A.Device.Device),B.AbC,B.Acv]);this.Fx.At([B=A._GetAutoObject(A.Device.Device),B.
AbD,B.Acw]);this.Ig.Dy(A.aaL(A.ach.AmD));this.Ig.PH([B=A._GetAutoObject(A.Device.
Device),B.AbC,B.Acv]);this.Ig.QS([B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cr;this.QD._Done();this.Jj.
_Done();this.Ih._Done();this.Fa._Done();this.Fx._Done();this.Ig._Done();this.AutoRegistrationMode.
_Done();this.Adv._Done();C.Cr._Done.call(this);},_ReInit:function(){C.Cr._ReInit.
call(this);this.QD._ReInit();this.Jj._ReInit();this.Ih._ReInit();this.Fa._ReInit(
);this.Fx._ReInit();this.Ig._ReInit();this.AutoRegistrationMode._ReInit();this.Adv.
_ReInit();this.JK(A.aaR(A.acf.ApR));this.QD.U(A.aaR(A.acf.ApR));this.Jj.U(A.aaR(
A.acf.AA6));this.Ih.U(A.aaR(A.acf.ADA));this.Fa.U(A.aaR(A.acf.ABQ));this.Fa.Kh(A.
aaR(A.acf.Ajl));this.Fa.KK(A.aaR(A.acf.E$));this.Fx.U(A.aaR(A.acf.ADG));this.Fx.
Kh(A.aaR(A.acf.Ajl));this.Fx.KK(A.aaR(A.acf.E$));this.Ig.AEL(A.aaR(A.acf.ABb));}
,_Mark:function(D){var B;C.Cr._Mark.call(this,D);if((B=this.QD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ih)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AutoRegistrationMode)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adv)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AUm={Oz:null,Jj:null,Ih:null,Fa:null,Fx:null,Ig:null,Ae3:null,Init:function(
aArg){var B;A.zX([this,this.BdJ],[B=A._GetAutoObject(A.Device.Device),B.ARY,B.AZi
],0);A.zX([this,this.Api],[B=A._GetAutoObject(A.Device.Device),B.AbC,B.Acv],0);A.
zX([this,this.Api],[B=A._GetAutoObject(A.Device.Device),B.AbD,B.Acw],0);A.pe([this
,this.BdJ],this);A.pe([this,this.Api],this);},BdJ:function(G){var AKd=false;var AtH=
false;switch(A._GetAutoObject(A.Device.Device).Ahs){case 0:{AKd=false;AtH=false;
}break;case 1:{AKd=true;AtH=false;}break;case 2:{AKd=false;AtH=true;}break;default:
throw new Error(Bsa+A._GetAutoObject(A.Device.Device).Ahs.toFixed());}A._GetAutoObject(
A.Device.Helper).Mx(this.Ih,AKd);A._GetAutoObject(A.Device.Helper).Mx(this.Fa,AtH
);A._GetAutoObject(A.Device.Helper).Mx(this.Fx,AtH);A._GetAutoObject(A.Device.Helper
).Mx(this.Ig,AtH);},Api:function(G){var F,CN;if(((F=this.Fa.Q,F[1].call(F[0]))+(
CN=this.Fx.Q,CN[1].call(CN[0])))>12)(CN=this.Fx.Q,CN[2].call(CN[0],12-(F=this.Fa.
Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cr._Init.call(this,aArg);C.I2._Init.
call(this.Oz={I:this},0);C.BW._Init.call(this.Jj={I:this},0);C.AFQ._Init.call(this.
Ih={I:this},0);C.I2._Init.call(this.Fa={I:this},0);C.I2._Init.call(this.Fx={I:this
},0);C.ADs._Init.call(this.Ig={I:this},0);C.Ae3._Init.call(this.Ae3={I:this},0);
this.__proto__=C.AUm;var B;this.JK(A.aaR(A.acf.LinkTransponder));this.Oz.H(AHW);
this.Oz.Aj(true);this.Oz.Y(true);this.Oz.U(A.aaR(A.acf.A6B));this.Oz.Bf(false);this.
Oz.Gn(1);this.Oz.E1(365);this.Oz.Kh(A.aaR(A.acf.J7));this.Oz.KK(A.aaR(A.acf.GB));
this.Jj.H(WV);this.Jj.Aj(true);this.Jj.Y(true);this.Jj.U(A.aaR(A.acf.AA6));this.
Jj.Bf(true);this.Ih.H(ZR);this.Ih.Aj(true);this.Ih.Y(true);this.Ih.U(A.aaR(A.acf.
ADA));this.Ih.Bf(false);this.Fa.H(An0);this.Fa.Aj(true);this.Fa.Y(true);this.Fa.
U(A.aaR(A.acf.ABQ));this.Fa.Bf(false);this.Fa.Gn(2);this.Fa.E1(6);this.Fa.Kh(A.aaR(
A.acf.Ajl));this.Fa.KK(A.aaR(A.acf.E$));this.Fx.H(AkQ);this.Fx.Aj(true);this.Fx.
U(A.aaR(A.acf.ADG));this.Fx.Bf(true);this.Fx.Gn(0);this.Fx.E1(12);this.Fx.Kh(A.aaR(
A.acf.Ajl));this.Fx.KK(A.aaR(A.acf.E$));this.Ig.H(AG_);this.Ig.Ar(true);this.Ig.
Aj(true);this.Ig.Bf(false);this.Ig.AEL(A.aaR(A.acf.ABb));this.J(this.Oz,0);this.
J(this.Jj,0);this.J(this.Ih,0);this.J(this.Fa,0);this.J(this.Fx,0);this.J(this.Ig
,0);this.Oz.At([B=A._GetAutoObject(A.Device.Device),B.A7M,B.A$X]);this.Jj.At([B=
this.Ae3,B.B9,B.B_]);this.Jj.CH(this.Ae3);this.Ih.T_([B=A._GetAutoObject(A.Device.
Device),B.Wc,B.AY7]);this.Ih.Aj9([B=A._GetAutoObject(A.Device.Device),B.AvA,B.Ax4
]);this.Fa.At([B=A._GetAutoObject(A.Device.Device),B.AbC,B.Acv]);this.Fx.At([B=A.
_GetAutoObject(A.Device.Device),B.AbD,B.Acw]);this.Ig.Dy(A.aaL(A.ach.AmD));this.
Ig.PH([B=A._GetAutoObject(A.Device.Device),B.AbC,B.Acv]);this.Ig.QS([B=A._GetAutoObject(
A.Device.Device),B.AbD,B.Acw]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cr;this.Oz._Done();this.Jj._Done();this.Ih._Done();this.Fa._Done();this.Fx._Done(
);this.Ig._Done();this.Ae3._Done();C.Cr._Done.call(this);},_ReInit:function(){C.
Cr._ReInit.call(this);this.Oz._ReInit();this.Jj._ReInit();this.Ih._ReInit();this.
Fa._ReInit();this.Fx._ReInit();this.Ig._ReInit();this.Ae3._ReInit();this.JK(A.aaR(
A.acf.LinkTransponder));this.Oz.U(A.aaR(A.acf.A6B));this.Oz.Kh(A.aaR(A.acf.J7));
this.Oz.KK(A.aaR(A.acf.GB));this.Jj.U(A.aaR(A.acf.AA6));this.Ih.U(A.aaR(A.acf.ADA
));this.Fa.U(A.aaR(A.acf.ABQ));this.Fa.Kh(A.aaR(A.acf.Ajl));this.Fa.KK(A.aaR(A.acf.
E$));this.Fx.U(A.aaR(A.acf.ADG));this.Fx.Kh(A.aaR(A.acf.Ajl));this.Fx.KK(A.aaR(A.
acf.E$));this.Ig.AEL(A.aaR(A.acf.ABb));},_Mark:function(D){var B;C.Cr._Mark.call(
this,D);if((B=this.Oz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jj)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Fx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae3)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::TransponderAssignmentSettingsScreen"};C.Ae3={TransponderAssignmentIdChangeMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.BeX],[B=A._GetAutoObject(A.Device.
Device),B.ARY,B.AZi],0);A.pe([this,this.BeX],this);},Dp:function(){return 3;},C5:
function(aIndex){if((aIndex<0)||(aIndex>=3))return-1;return aIndex;},F$:function(
aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.TransponderAssignmentIdChangeMethodToString.
BP(aIndex);},DK:function(A2){return A2;},Hl:function(){return 2;},At:function(E){
C.AC.At.call(this,E);A._GetAutoObject(A.Device.Device).Awt(E);},BeX:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Ahs;A.abo([this,this.B9,this.B_],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.TransponderAssignmentIdChangeMethodToString.
_Init.call(this.TransponderAssignmentIdChangeMethodToString={I:this},0);this.__proto__=
C.Ae3;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.TransponderAssignmentIdChangeMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
TransponderAssignmentIdChangeMethodToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.TransponderAssignmentIdChangeMethodToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.I3={B4:null,IL:null,Cm:null,Al_:null,R1:null,AmV:null,Ajf:null,Text:null,CS:
null,Ef:0,MK:false,Ai:function(Ae){var B;A.acn.I3.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IL.Ar(true);else{this.IL.Ar(false);this.CS.Y(false);}},A3k:function(G
){var B;var A_=this.Text.M;var Np=0;var Nq=0;if(this.CS.Ek[0]<A_[0])Np=A_[0]-this.
CS.Ek[0];if(this.CS.Ek[0]>A_[2])Np=A_[2]-this.CS.Ek[0];if(this.CS.Ek[1]<A_[1])Nq=
A_[1]-this.CS.Ek[1];if(this.CS.Ev[1]>A_[3])Nq=A_[3]-this.CS.Ev[1];if(!!Np||!!Nq)
this.Text.Gh(A.abf(this.Text.Bq,[Np,Nq]));Np=this.Text.Bq[0];Nq=this.Text.Bq[1];
var C0=[(B=this.Text.Db())[2]-B[0],B[3]-B[1]];if(C0[0]<=((B=this.Text.M)[2]-B[0]
))Np=0;if(C0[1]<=((B=this.Text.M)[3]-B[1]))Nq=0;this.Text.Gh([Np,Nq]);},AlT:function(
G){if(!this.B4)return;var A2N=this.Text.AF3(this.Ef);var pos=this.Text.AeP(A2N);
this.CS.DY(A.abe(pos,[0,this.B4.Ascent]));this.CS.DM(A.abf(pos,[0,this.B4.Descent
]));if(this.IL.Bv){this.IL.Ar(false);this.IL.Ar(true);}if(this.MK){A.pe([this,this.
A3k],this);this.MK=false;}},AzR:function(G){if(!this.B4)return;var Ey=this.Text.
AF3(this.Ef);if(this.Cm.CL===6){Ey=[Ey[0]-1,Ey[1]];if(this.Text.Anq(Ey)===this.Ef
){Ey=[Ey[0],Ey[1]-1];Ey=[this.Text.ACj(Ey[1]).length,Ey[1]];}}if(this.Cm.CL===7){
Ey=[Ey[0]+1,Ey[1]];if(this.Text.Anq(Ey)===this.Ef){Ey=[Ey[0],Ey[1]+1];Ey=[0,Ey[1
]];}}if(this.Cm.CL===4){var pos=this.Text.AeP(Ey);var Aan=(this.B4.Ascent+this.B4.
Descent)+this.B4.Leading;Ey=this.Text.AS0(A.abe(pos,[0,Aan]));}if(this.Cm.CL===5
){var pos=this.Text.AeP(Ey);var Aan=(this.B4.Ascent+this.B4.Descent)+this.B4.Leading;
Ey=this.Text.AS0(A.abf(pos,[0,Aan]));}var UY=this.Text.Anq(Ey);var Io=this.Text.
String.charCodeAt(UY)||0;if(((Io===0x5E)||(Io===0x7E))||(Io===0x25))UY=UY-1;if(UY
!==this.Ef){this.Ef=UY;A.pe([this,this.AlT],this);this.MK=true;}},Bdc:function(G
){if(!this.Ef)return;var Io=this.Text.String.charCodeAt(this.Ef-1)||0;var CC=1;if(((
Io===0x5E)||(Io===0x7E))||(Io===0x25))CC=2;this.Text.R(A.ab1(this.Text.String,this.
Ef-CC,CC));this.Ef=this.Ef-CC;this.MK=true;},AzS:function(G){if(this.Ef>=(this.Text.
String.length-1))return;var Io=this.Text.String.charCodeAt(this.Ef)||0;var CC=1;
if(Io===0x25)CC=2;this.Text.R(A.ab1(this.Text.String,this.Ef,CC));this.MK=true;}
,Bdq:function(G){this.Text.R(A.abU(this.Text.String,Bsb,this.Ef));this.Ef=this.Ef+
1;this.MK=true;},Bde:function(G){var Io=this.Ajf.DJ;var AtK=String.fromCharCode(
Io);A.ab5("%c",Io);if((((Io===0x5E)||(Io===0x7E))||(Io===0xAD))||(Io===0x25))AtK=
Bsc+String.fromCharCode(Io);this.Text.R(A.abU(this.Text.String,AtK,this.Ef));this.
Ef=this.Ef+AtK.length;this.MK=true;},_Init:function(aArg){A.acn.I3._Init.call(this
,aArg);A.acl.Tw._Init.call(this.IL={I:this},0);A.Core.BK._Init.call(this.Cm={I:this
},0);A.Core.BK._Init.call(this.Al_={I:this},0);A.Core.BK._Init.call(this.R1={I:this
},0);A.Core.BK._Init.call(this.AmV={I:this},0);A.Core.BK._Init.call(this.Ajf={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.DR._Init.call(this.CS={
I:this},0);this.__proto__=C.I3;var B;this.H(Bsd);this.IL.B0=false;this.IL.Cs=true;
this.IL.Fe(500);this.IL.T$(500);this.Cm.Filter=147;this.Cm.Bv=false;this.Al_.Filter=
151;this.R1.Filter=44;this.AmV.Filter=149;this.Ajf.Filter=145;this.Text.AX(0x3F);
this.Text.H(Bse);this.Text.KL(true);this.Text.A3(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CS.DM(Bsf);this.CS.DY(Bsg);this.CS.A9s(2);this.CS.A9r(2);this.
CS.L(0xFF000000);this.CS.Y(false);this.J(this.Text,0);this.J(this.CS,0);this.IL.
Q=[B=this.CS,B.Fd,B.Y];this.Cm.BL=[this,this.AzR];this.Cm.DS=[this,this.AzR];this.
Al_.BL=[this,this.Bdc];this.Al_.DS=[this,this.Bdc];this.R1.BL=[this,this.AzS];this.
R1.DS=[this,this.AzS];this.AmV.BL=[this,this.Bdq];this.AmV.DS=[this,this.Bdq];this.
Ajf.BL=[this,this.Bde];this.Ajf.DS=[this,this.Bde];this.Text.QT([this,this.AlT]);
this.Text.S(A.aaL(A.aci.AB9));this.B4=A.aaL(A.aci.AB9);},_Done:function(){this.__proto__=
A.acn.I3;this.IL._Done();this.Cm._Done();this.Al_._Done();this.R1._Done();this.AmV.
_Done();this.Ajf._Done();this.Text._Done();this.CS._Done();A.acn.I3._Done.call(this
);},_ReInit:function(){A.acn.I3._ReInit.call(this);this.IL._ReInit();this.Cm._ReInit(
);this.Al_._ReInit();this.R1._ReInit();this.AmV._ReInit();this.Ajf._ReInit();this.
Text._ReInit();this.CS._ReInit();},_Mark:function(D){var B;A.acn.I3._Mark.call(this
,D);if((B=this.B4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Al_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AmV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajf)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CS)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AUa={I3:null,Dv:function(G
){switch(this.Cm.CL){case 6:A._GetAutoObject(A.Device.Device).Aue();break;case 7:
A._GetAutoObject(A.Device.Device).ApS();break;case 4:A._GetAutoObject(A.Device.Device
).Ajc();break;case 5:A._GetAutoObject(A.Device.Device).ApT();break;default:;}},Eo:
function(G){A._GetAutoObject(C.AW).Fl();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.I3._Init.call(this.I3={I:this},0);this.__proto__=C.AUa;this.H(Ca);this.
N.Y(true);this.Dl(C.Aqp);this.I3.H(E4);this.J(this.I3,0);this.A8(this.I3);this.N.
Cw=[this,this.Eo];this.N.CT(A.aaL(A.ach.EU));},_Done:function(){this.__proto__=C.
AB;this.I3._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.I3._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.I3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.AS8={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AH9],[B=A._GetAutoObject(A.Device.Device),B.ARA,B.AY4],0);},We:function(G){
if((!!this.Be&&!!this.Be.AY)&&(this.Be.AY.Cb()>0)){if(this.AIR())A._GetAutoObject(
C.Bz).Qq(A.aaR(A.acf.ANy),[this,this.AHX]);else A._GetAutoObject(C.Bz).Qq(A.aaR(
A.acf.ANy),null);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Qq(A.aaR(A.acf.
ABr),[this,this.A$z]);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Qq(A.aaR(
A.acf.AGl),[this,this.A7c]);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Qq(
A.aaR(A.acf.A4B),[this,this.A$y]);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.
Bz).Qq(A.aaR(A.acf.UnlinkTransponder),[this,this.Bma]);}else{A._GetAutoObject(C.
Bz).Xv(A.aaR(A.acf.ANy));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Xv(A.
aaR(A.acf.ABr));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Xv(A.aaR(A.acf.
AGl));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Xv(A.aaR(A.acf.A4B));A.
_GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Xv(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.Tm)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.
A5f));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.AlZ)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Cd(6);},Aa3:function(){return C.
AMk;},Aa4:function(){return C.AOQ;},QY:function(G){A._GetAutoObject(A.Device.Device
).Ap.Bh(A._GetAutoObject(A.Device.Helper).AN6());},HJ:function(G){C.QV.HJ.call(this
,G);this.N.Cn(A.aaL(A.ach.Abb));this.N.Ci=[this,this.Xj];this.N.FC(A.jV);this.N.
C3(null);this.N.BZ((A.aaR(A.acf.A4t)+ZT)+this.DataExportDestinationToString.BP(A.
_GetAutoObject(A.Device.Device).Vt));this.N.OG(false);this.N.OH(false);this.N.IX.
Dm(255);},ARm:function(G){A._GetAutoObject(A.Device.Device).Cd(0);var AiA=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A5(96,true,AiA.toFixed(),0,null);},ARn:function(G){A._GetAutoObject(A.Device.Device
).Cd(0);this.A47(this);},ARs:function(G){var B;A._GetAutoObject(A.Device.Device).
Cd(0);if(!A._GetAutoObject(A.Device.Device).Vt&&!A._GetAutoObject(A.Device.Device
).Ui){A._GetAutoObject(A.Device.Device).A5(73,true,A.jV,0,[this,this.Bds]);return;
}if(A._GetAutoObject(A.Device.Device).AqF()===false){A.zX([this,this.Xk],[B=A._GetAutoObject(
A.Device.Device),B.Wd,B.WW],0);A._GetAutoObject(A.Device.Device).A5(74,true,A.jV
,0,[this,this.AfP]);return;}var AfC=null;switch(A._GetAutoObject(A.Device.Device
).Vt){case 0:AfC=A._GetAutoObject(A.Device.Device).Anu(2);break;case 1:AfC=A._GetAutoObject(
A.Device.Device).Anu(3);break;default:throw new Error(Bsh+A._GetAutoObject(A.Device.
Device).Vt.toFixed());}if(AfC.Anz){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Dt(A.aaR(A.acf.Bmp));A._GetAutoObject(A.Device.Device).Ap7(AfC);}else A._GetAutoObject(
A.Device.Device).A5(97,true,A.jV,0,null);},AIR:function(){var AyR=this.Be.AY;if(
!AyR)return false;return true;},Xj:function(G){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.QV._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.AS8;this.Dl(C.AOG);this.Init(aArg);},_Done:function(){this.
__proto__=C.QV;this.DataExportDestinationToString._Done();C.QV._Done.call(this);
},_ReInit:function(){C.QV._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.QV._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.AOQ={Pr:null,IW:null,_Init:function(aArg){C.Dw._Init.call(this,aArg);A.acg.An.
_Init.call(this.Pr={I:this},0);A.acg.An._Init.call(this.IW={I:this},0);this.__proto__=
C.AOQ;this.Et.Y(false);this.CZ.Y(false);this.Pr.H(Bsi);this.Pr.L(A.jb.Text);this.
IW.H(Bsj);this.IW.L(A.jb.Text);this.J(this.Pr,0);this.J(this.IW,0);this.Pr.Ay(A.
aaL(A.ach.Au5));this.IW.Ay(A.aaL(A.ach.Au0));},_Done:function(){this.__proto__=C.
Dw;this.Pr._Done();this.IW._Done();C.Dw._Done.call(this);},_ReInit:function(){C.
Dw._ReInit.call(this);this.Pr._ReInit();this.IW._ReInit();},_Mark:function(D){var
B;C.Dw._Mark.call(this,D);if((B=this.Pr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AL8={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AzV],[B=A._GetAutoObject(A.Device.Device),B.ADM,B.AH0],0);A.pe([this,this.
AzV],this);},We:function(G){if((!!this.Be&&!!this.Be.AY)&&(this.Be.AY.Cb()>0)){if(
this.AIR())A._GetAutoObject(C.Bz).Qq(A.aaR(A.acf.ANx),[this,this.AHX]);else A._GetAutoObject(
C.Bz).Xv(A.aaR(A.acf.ANx));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Qq(
A.aaR(A.acf.ABp),[this,this.A$z]);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.
Bz).Qq(A.aaR(A.acf.AGl),[this,this.A7c]);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(
C.Bz).Qq(A.aaR(A.acf.A4A),[this,this.A$y]);}else{A._GetAutoObject(C.Bz).Xv(A.aaR(
A.acf.ANx));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Xv(A.aaR(A.acf.ABp
));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Xv(A.aaR(A.acf.AGl));A._GetAutoObject(
C.Bz).Fu();A._GetAutoObject(C.Bz).Xv(A.aaR(A.acf.A4A));}A._GetAutoObject(C.Bz).Fu(
);A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.A5f));A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(
C.Bz).Nx(A.aaR(A.acf.AlZ)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Cd(6);},Aa3:function(){return C.ABl;},Aa4:function(){return C.ACD;},QY:function(
G){A._GetAutoObject(A.Device.Device).Ap.Bh(A._GetAutoObject(A.Device.Helper).ANV(
));},HJ:function(G){C.QV.HJ.call(this,G);this.N.Cn(A.aaL(A.ach.Abb));this.N.Ci=[
this,this.Xj];this.N.FC(A.jV);this.N.C3(null);this.N.BZ((A.aaR(A.acf.A4t)+String.
fromCharCode(0x0A))+this.DataExportDestinationToString.BP(0));this.N.OG(false);this.
N.OH(false);this.N.IX.Dm(255);},ARm:function(G){A._GetAutoObject(A.Device.Device
).Cd(0);var AiA=A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();
A._GetAutoObject(A.Device.Device).A5(96,true,AiA.toFixed(),0,null);},ARn:function(
G){A._GetAutoObject(A.Device.Device).Cd(0);this.A46(this);},ARs:function(G){var B;
A._GetAutoObject(A.Device.Device).Cd(0);if(!A._GetAutoObject(A.Device.Device).Ui
){A._GetAutoObject(A.Device.Device).A5(73,true,A.jV,0,[this,this.Bds]);return;}if(
A._GetAutoObject(A.Device.Device).AqF()===false){A.zX([this,this.Xk],[B=A._GetAutoObject(
A.Device.Device),B.Wd,B.WW],0);A._GetAutoObject(A.Device.Device).A5(74,true,A.jV
,0,[this,this.AfP]);return;}var AfC=A._GetAutoObject(A.Device.Device).Anu(0);if(
AfC.Anz){A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();this.Dt(
A.aaR(A.acf.BfQ));A._GetAutoObject(A.Device.Device).Ap7(AfC);}else A._GetAutoObject(
A.Device.Device).A5(70,true,A.jV,0,null);},AIR:function(){var AyR=this.Be.AY;if(
!AyR)return false;var P;for(P=0;P<AyR.Cb();P++)if(A._GetAutoObject(A.Device.Helper
).AjJ(AyR.AN_(P,34))===false)return true;return false;},Xj:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},AzV:function(G){if(A._GetAutoObject(A.Device.
Device).ApV===1)A.pe([this,this.A5b],this);},_Init:function(aArg){C.QV._Init.call(
this,aArg);A.Device.DataExportDestinationToString._Init.call(this.DataExportDestinationToString={
I:this},0);this.__proto__=C.AL8;this.Dl(C.AOd);this.Init(aArg);},_Done:function(
){this.__proto__=C.QV;this.DataExportDestinationToString._Done();C.QV._Done.call(
this);},_ReInit:function(){C.QV._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.QV._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListScreen"
};C.AOd={_Init:function(aArg){C.Ajy._Init.call(this,aArg);this.__proto__=C.AOd;this.
Text.R(A.aaR(A.acf.ABe));},_ReInit:function(){C.Ajy._ReInit.call(this);this.Text.
R(A.aaR(A.acf.ABe));},_className:"Application::HeaderBirthRegistrationsList"};C.
AOG={_Init:function(aArg){C.Ajy._Init.call(this,aArg);this.__proto__=C.AOG;this.
Text.R(A.aaR(A.acf.AFr));},_ReInit:function(){C.Ajy._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AFr));},_className:"Application::HeaderPurchasedAnimalsList"};C.AMk={
MR:0,AP:null,SE:null,S7:0,Init:function(aArg){},Bg:function(aSize){C.Bb.Bg.call(
this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.
V.M,((aSize[0]*70)/100)|0));this.AP.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.SE.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Bb.Ai.call(this
,Ae);this.SE.L(this.V.AQ);this.U(A._GetAutoObject(A.Device.Converter).SM(this.MR
));this.SE.R(A._GetAutoObject(A.acj.KD).AB$(this.S7));},Ce:function(Ac){if(!this.
AY)return;this.Hu=Ac;if(!!this.AY){this.MR=this.AY.LM(Ac,26);this.S7=this.AY.Hz(
Ac,4);this.Am();}},_Init:function(aArg){C.Bb._Init.call(this,aArg);A.acg.AJ._Init.
call(this.AP={I:this},0);C.CP._Init.call(this.SE={I:this},0);this.__proto__=C.AMk;
this.AP.H(A$e);this.AP.L(A.jb.Bc);this.SE.H(A$g);this.J(this.AP,0);this.J(this.SE
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A7(A.aaL(A.fl.By));this.SE.S(A.aaL(A.fl.Ak));
this.SE.A7(A.aaL(A.fl.By));this.SE.CB(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(
){this.__proto__=C.Bb;this.AP._Done();this.SE._Done();C.Bb._Done.call(this);},_ReInit:
function(){C.Bb._ReInit.call(this);this.AP._ReInit();this.SE._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A7(A.aaL(A.fl.By));this.SE.S(A.aaL(A.fl.Ak));this.SE.A7(A.
aaL(A.fl.By));this.SE.CB(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Bb._Mark.call(
this,D);if((B=this.AP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SE)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.ATB={
Aes:null,AbE:null,TE:null,KE:null,TC:null,ND:null,S9:A.jV,Ai:function(Ae){var F;
C.SA.Ai.call(this,Ae);this.TE.L(this.V.AQ);var Ao2=false;if((!this.Dh||!(F=this.
Dh,F[1].call(F[0])))&&!this.A4)Ao2=true;this.TE.Y(Ao2);this.Pi.Y(!Ao2);this.Vv.Y(
!Ao2);this.QO.Y(!Ao2);this.X4.Y(!Ao2);this.PU.Y(!Ao2);},Ac_:function(G){var B;var
F;if(!this.S9.length){C.SA.Ac_.call(this,G);return;}var BO=this.FN;var GK=A._GetAutoObject(
A.Device.Arz).Bzi(this.S9);this.S9=A.jV;if(!GK){A._GetAutoObject(A.Device.Device
).A5(101,true,A.jV,0,this.AbE);A.pe(this.Aes,this);return;}if(this.ArH&&(GK>A._GetAutoObject(
A.Device.Helper).DF())){A._GetAutoObject(A.Device.Device).A5(102,true,A.jV,0,this.
AbE);A.pe(this.Aes,this);return;}this.T9(((B=(GK|0))<0)?B+0x100000000:B);if(this.
FN!==BO){if(!!this.Dh)(F=this.Dh,F[2].call(F[0],this.FN));A.abo(this.Dh,0);}if(!
!this.Oy)A.pe(this.Oy,this);},A1Z:function(G){if(this.S9.length<8)this.S9=this.S9+
String.fromCharCode(this.KE.DJ);},ARp:function(G){if((this.ND.DJ===0x0D)||(this.
ND.DJ===0x0A))this.Ac_(this);else this.ND.NC=true;},ASp:function(E){if(A.aa0(this.
Aes,E))return;this.Aes=E;},ASq:function(E){if(A.aa0(this.AbE,E))return;this.AbE=
E;},_Init:function(aArg){C.SA._Init.call(this,aArg);A.acg.Text._Init.call(this.TE={
I:this},0);A.Core.BK._Init.call(this.KE={I:this},0);A.Core.BK._Init.call(this.TC={
I:this},0);A.Core.BK._Init.call(this.ND={I:this},0);this.__proto__=C.ATB;this.TE.
H(Bsk);this.TE.I0(true);this.TE.A3(0x12);this.TE.R(A.aaR(A.acf.A4O));this.KE.Filter=
143;this.TC.Filter=149;this.ND.Filter=145;this.J(this.TE,0);this.TE.S(A.aaL(A.fl.
EA));this.KE.BL=[this,this.A1Z];this.TC.BL=[this,this.Bai];this.ND.BL=[this,this.
ARp];},_Done:function(){this.__proto__=C.SA;this.TE._Done();this.KE._Done();this.
TC._Done();this.ND._Done();C.SA._Done.call(this);},_ReInit:function(){C.SA._ReInit.
call(this);this.TE._ReInit();this.KE._ReInit();this.TC._ReInit();this.ND._ReInit(
);this.TE.R(A.aaR(A.acf.A4O));this.TE.S(A.aaL(A.fl.EA));},_Mark:function(D){var B;
C.SA._Mark.call(this,D);if((B=this.Aes)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AbE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
TC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ND)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.ATF={Aes:null,AbE:null,KE:null
,TC:null,ND:null,S9:A.jV,IP:function(G){var F;if(!this.S9.length){C.Q0.IP.call(this
,G);return;}if(this.ArG)return;if(!this.S9.length)this.TC.NC=true;var BO=this.AK;
var GK=A._GetAutoObject(A.Device.Arz).Bzj(this.S9);this.S9=A.jV;if(!GK){if((this.
S9.length<13)&&!A._GetAutoObject(A.Device.Device).Ui)A._GetAutoObject(A.Device.Device
).A5(105,true,A.jV,0,this.AbE);else A._GetAutoObject(A.Device.Device).A5(103,true
,A.jV,0,this.AbE);A.pe(this.Aes,this);return;}this.Bx(GK);if(this.AK!==BO){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}if(!!this.Oy)A.pe(this.
Oy,this);},A1Z:function(G){if(this.ArG)return;if(this.S9.length<17)this.S9=this.
S9+String.fromCharCode(this.KE.DJ);},ARp:function(G){if((this.ND.DJ===0x0D)||(this.
ND.DJ===0x0A))this.IP(this);else this.ND.NC=true;},ASp:function(E){if(A.aa0(this.
Aes,E))return;this.Aes=E;},ASq:function(E){if(A.aa0(this.AbE,E))return;this.AbE=
E;},_Init:function(aArg){C.Q0._Init.call(this,aArg);A.Core.BK._Init.call(this.KE={
I:this},0);A.Core.BK._Init.call(this.TC={I:this},0);A.Core.BK._Init.call(this.ND={
I:this},0);this.__proto__=C.ATF;this.Arm(false);this.KE.Filter=143;this.TC.Filter=
149;this.ND.Filter=145;this.KE.BL=[this,this.A1Z];this.TC.BL=[this,this.AsJ];this.
ND.BL=[this,this.ARp];},_Done:function(){this.__proto__=C.Q0;this.KE._Done();this.
TC._Done();this.ND._Done();C.Q0._Done.call(this);},_ReInit:function(){C.Q0._ReInit.
call(this);this.KE._ReInit();this.TC._ReInit();this.ND._ReInit();},_Mark:function(
D){var B;C.Q0._Mark.call(this,D);if((B=this.Aes)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AbE)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ND)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.AOD={An:null,DZ:null,Init:function(aArg){var B;A.zX([this,this.Eq],[B=A._GetAutoObject(
A.Device.Device),B.A7K,B.AED],0);A.pe([this,this.Eq],this);},C9:function(E){C.BQ.
C9.call(this,E);this.An.L(E);this.DZ.Aka(E);},AbG:function(E){this.DZ.C2(E);},Eq:
function(G){this.DZ.U(A._GetAutoObject(A.Device.Device).Avl.toFixed());},_Init:function(
aArg){C.BQ._Init.call(this,aArg);A.acg.An._Init.call(this.An={I:this},0);C.DZ._Init.
call(this.DZ={I:this},0);this.__proto__=C.AOD;this.An.H(AsE);this.DZ.AX(0x14);this.
DZ.H(Bsl);this.DZ.Aka(A.jb.Bi);this.DZ.C2(A.jb.Ace);this.DZ.HH(2);this.DZ.Bj7(0x11
);this.J(this.An,0);this.J(this.DZ,0);this.An.Ay(A.aaL(A.ach.APc));this.DZ.S(A.aaL(
A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.BQ;this.An._Done();
this.DZ._Done();C.BQ._Done.call(this);},_ReInit:function(){C.BQ._ReInit.call(this
);this.An._ReInit();this.DZ._ReInit();this.DZ.S(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.BQ._Mark.call(this,D);if((B=this.An)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.AQQ={AaS:null,AdZ:null,Vs:null,Init:function(aArg){this.A8(this.AaS);},KJ:function(
){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cw=[this,this.Xi];this.Bw.Ci=
null;this.Bw.Cc=[this,this.A12];this.Bw.BZ(A.jV);this.Bw.Cn(null);this.Bw.CT(A.aaL(
A.ach.VG));}return this.Bw;},AzO:function(G){var Aa=(C.AiY.isPrototypeOf(G)?G:null
);if(Aa===this.AaS)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.AdZ)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A_Q);},_Init:function(aArg){C.Ff._Init.call(this,aArg);C.AiY._Init.call(this.
AaS={I:this},0);C.AiY._Init.call(this.AdZ={I:this},0);C.AQU._Init.call(this.Vs={
I:this},0);this.__proto__=C.AQQ;var B;this.H(Q$);this.Text.R(A.aaR(A.acf.ABj));this.
AaS.H(JR);this.AaS.U(A.aaR(A.acf.Ajj));this.AdZ.H(P0);this.AdZ.U(A.aaR(A.acf.AFy
));this.Vs.H(ZQ);this.Vs.U(A.aaR(A.acf.A4l));this.J(this.AaS,0);this.J(this.AdZ,
0);this.J(this.Vs,0);this.Text.S(A.aaL(A.fl.Ak));this.AaS.AN=[this,this.AzO];this.
AdZ.AN=[this,this.AzO];this.Vs.AR7([B=A._GetAutoObject(A.Device.Device),B.ADQ,B.
AH3]);this.Init(aArg);},_Done:function(){this.__proto__=C.Ff;this.AaS._Done();this.
AdZ._Done();this.Vs._Done();C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.
call(this);this.AaS._ReInit();this.AdZ._ReInit();this.Vs._ReInit();this.Text.R(A.
aaR(A.acf.ABj));this.AaS.U(A.aaR(A.acf.Ajj));this.AdZ.U(A.aaR(A.acf.AFy));this.Vs.
U(A.aaR(A.acf.A4l));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ff._Mark.
call(this,D);if((B=this.AaS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Vs)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.AQP={AnimalTableFields:null,Aw:null,Z:
null,JG:null,CU:function(){this.Aik(this);},Init:function(aArg){A.zV([this,this.
Aik],this.AnimalTableFields,0);A.pe([this,this.Aik],this);},Dv:function(G){C.Ff.
Dv.call(this,G);this.MM(this);},KJ:function(){if(!this.Bw){this.Bw=A._NewObject(
C.N,0);this.Bw.Cw=[this,this.Eo];this.Bw.Ci=[this,this.A10];this.Bw.Cc=[this,this.
A2r];this.Bw.C3(A.aaL(A.ach.AqB));this.Bw.Cn(A.aaL(A.ach.Aqu));this.Bw.CT(A.aaL(
A.ach.VG));}return this.Bw;},Eo:function(G){this.AAn();this.Xi(this);},Aik:function(
G){this.Aoz();var P;for(P=0;P<this.AnimalTableFields.Po();P=P+1){var Z1=A._GetAutoObject(
C.Al0).Pn(P);this.AZ9(Z1);}this.J(this.JG,0);A.aaS([this,this.MM],this);},E9:function(
G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.Z.M)[3]-B[1]);
this.Aw.Mr(-this.Z.Bq[1]);},MM:function(G){var B;this.Z.Vc(null,null);if(!!this.
AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},AZ9:function(
G1){var Ayq=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.R2,0);Aa.U(Ayq.BP(G1));Aa.Aj(true);Aa.GT=G1;Aa.A8Q(this.AnimalTableFields.LO(G1
));this.J(Aa,0);this.Ze(Aa);},Aoz:function(){var B;var X=this.Z.Ag;while(!!X&&!((
X.T&0x200)===0x200)){var Adn=X;X=X.Ag;if(((Adn.T&0x400)===0x400))this.HI(Adn);}}
,AAn:function(){var B;this.AnimalTableFields.Clear();var X=this.Z.Ag;while(!!X&&
!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)&&!(X===this.JG)){var Aa=(C.R2.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.GT);if(Aa.ARG())this.AnimalTableFields.
ATx(Aa.GT);}else A.ab5("%s",Ass);}X=X.Ag;}this.AnimalTableFields.Cl();},A10:function(
G){var B;var Aa=(C.R2.isPrototypeOf(B=this.AR)?B:null);if(!!Aa){var AzG=(C.R2.isPrototypeOf(
B=Aa.Ag)?B:null);if(!!AzG){this.Ahe(AzG,Aa);A.pe([this,this.MM],this);}}},A2r:function(
G){var B;var Aa=(C.R2.isPrototypeOf(B=this.AR)?B:null);if(!!Aa){var AAb=(C.R2.isPrototypeOf(
B=Aa.AH)?B:null);if(!!AAb){this.Ahe(Aa,AAb);A.pe([this,this.MM],this);}}},Ajn:function(
G){var B;A._GetAutoObject(A.Device.Device).ArM(this);A.pe([this,this.Aik],this);
},G8:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Ff._Init.call(
this,aArg);C.Aw._Init.call(this.Aw={I:this},0);A.Core.Z._Init.call(this.Z={I:this
},0);C.Auv._Init.call(this.JG={I:this},0);this.__proto__=C.AQP;this.H(Q$);this.Text.
R(A.aaR(A.acf.AFy));this.Aw.H(IK);this.Z.H(A$n);this.Z.Kd(1);this.JG.H(AHk);this.
JG.Aj(true);this.JG.U(A.aaR(A.acf.Ajn));this.J(this.Aw,0);this.J(this.Z,0);this.
J(this.JG,0);this.Z.Ej=[this,this.G8];this.JG.AN=[this,this.Ajn];this.AnimalTableFields=
A._GetAutoObject(C.Al0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ff;this.
Aw._Done();this.Z._Done();this.JG._Done();C.Ff._Done.call(this);},_ReInit:function(
){C.Ff._ReInit.call(this);this.Aw._ReInit();this.Z._ReInit();this.JG._ReInit();this.
Text.R(A.aaR(A.acf.AFy));this.JG.U(A.aaR(A.acf.Ajn));this.CU();},_Mark:function(
D){var B;C.Ff._Mark.call(this,D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.JG)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingFieldSettingsMenu"};C.AQO={Z:null,B5:null,C8:null,CE:
null,GF:null,Aw:null,AnimalType:null,Gender:null,Breed:null,UB:null,Init:function(
aArg){A.zX([this,this.At_],this.B5.Q,0);A.zX([this,this.AMb],this.CE.Q,0);A.zX([
this,this.AUO],this.GF.Q,0);A.zX([this,this.AuP],this.C8.Q,0);this.A8(this.B5);}
,Dv:function(G){C.Ff.Dv.call(this,G);this.MM(this);},KJ:function(){if(!this.Bw){
this.Bw=A._NewObject(C.N,0);this.Bw.Cw=[this,this.Xi];this.Bw.Ci=null;this.Bw.Cc=
null;this.Bw.BZ(A.jV);this.Bw.Cn(null);this.Bw.CT(A.aaL(A.ach.VG));}return this.
Bw;},E9:function(G){var B;this.Aw.Mq((B=this.Z.Db(0x1))[3]-B[1]);this.Aw.Ms((B=this.
Z.M)[3]-B[1]);this.Aw.Mr(-this.Z.Bq[1]);},MM:function(G){var B;this.Z.Vc(null,null
);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hy(this.AR,true,null,null);},
G8:function(G){A.pe([this,this.E9],this);},At_:function(G){var F;A._GetAutoObject(
A.Device.Device).DT((F=this.B5.Q,F[1].call(F[0])));},AUO:function(G){var F;A._GetAutoObject(
A.Device.Device).Nc((F=this.GF.Q,F[1].call(F[0])));},AuP:function(G){var F;A._GetAutoObject(
A.Device.Device).JJ((F=this.C8.Q,F[1].call(F[0])));},AMb:function(G){var F;A._GetAutoObject(
A.Device.Device).NR((F=this.CE.Q,F[1].call(F[0])));},_Init:function(aArg){C.Ff._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Xu._Init.call(this.B5={
I:this},0);C.Xu._Init.call(this.C8={I:this},0);C.Xu._Init.call(this.CE={I:this},
0);C.Xu._Init.call(this.GF={I:this},0);C.Aw._Init.call(this.Aw={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.UC._Init.call(this.UB={I:this},0);
this.__proto__=C.AQO;var B;this.H(Q$);this.Text.R(A.aaR(A.acf.Ajj));this.Z.H(A$n
);this.Z.Kd(1);this.B5.H(AhA);this.B5.Ar(true);this.B5.Aj(true);this.B5.U(A.aaR(
A.acf.Ae5));this.C8.H(AxC);this.C8.Ar(true);this.C8.Aj(true);this.C8.U(A.aaR(A.acf.
AeX));this.CE.H(AnY);this.CE.Ar(true);this.CE.Aj(true);this.CE.U(A.aaR(A.acf.Breed
));this.GF.H(Asr);this.GF.Ar(true);this.GF.Aj(true);this.GF.U(A.aaR(A.acf.I7));this.
Aw.H(IK);this.AnimalType.At(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.
At(A._GetAutoObject(A.Device.Device).Gender);this.Breed.At(A._GetAutoObject(A.Device.
Device).Breed);this.UB.At(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(
this.Z,0);this.J(this.B5,0);this.J(this.C8,0);this.J(this.CE,0);this.J(this.GF,0
);this.J(this.Aw,0);this.Z.Ej=[this,this.G8];this.B5.Wg(A.aaL(A.fl.Hk));this.B5.
Wh(A.aaL(A.fl.Hk));this.B5.At([B=this.AnimalType,B.B9,B.B_]);this.B5.CH(this.AnimalType
);this.C8.Wg(A.aaL(A.fl.Hk));this.C8.Wh(A.aaL(A.fl.Hk));this.C8.At([B=this.Gender
,B.B9,B.B_]);this.C8.CH(this.Gender);this.CE.Wg(A.aaL(A.fl.Hk));this.CE.Wh(A.aaL(
A.fl.Hk));this.CE.At([B=this.Breed,B.B9,B.B_]);this.CE.CH(this.Breed);this.GF.Wg(
A.aaL(A.fl.Hk));this.GF.Wh(A.aaL(A.fl.Hk));this.GF.At([B=this.UB,B.B9,B.B_]);this.
GF.CH(this.UB);this.Init(aArg);},_Done:function(){this.__proto__=C.Ff;this.Z._Done(
);this.B5._Done();this.C8._Done();this.CE._Done();this.GF._Done();this.Aw._Done(
);this.AnimalType._Done();this.Gender._Done();this.Breed._Done();this.UB._Done();
C.Ff._Done.call(this);},_ReInit:function(){C.Ff._ReInit.call(this);this.Z._ReInit(
);this.B5._ReInit();this.C8._ReInit();this.CE._ReInit();this.GF._ReInit();this.Aw.
_ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.Breed._ReInit();this.
UB._ReInit();this.Text.R(A.aaR(A.acf.Ajj));this.B5.U(A.aaR(A.acf.Ae5));this.C8.U(
A.aaR(A.acf.AeX));this.CE.U(A.aaR(A.acf.Breed));this.GF.U(A.aaR(A.acf.I7));},_Mark:
function(D){var B;C.Ff._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UB)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.Al4={CC:0,Ak2:A.abi(17,0,null),Pn:function(Hq){return this.Ak2.Get(Hq);},Po:
function(){return this.CC;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.Ak2.Set(
P,0);this.CC=0;},J:function(ZV){if(this.CC>=17)A.ab5("%s",Bsm);else{this.Ak2.Set(
this.CC,ZV);this.CC=this.CC+1;}},Cl:function(){},EB:function(AhE){var AJb=AhE.indexOf(
String.fromCharCode(0x2C),0);var A0w=A.jV;var P=0;this.CC=0;while(P<17)if(AhE===
A.jV)P++;else{if(AJb===-1){A0w=AhE;AhE=A.jV;}else{A0w=A.abV(AhE,AJb);AhE=A.ab1(AhE
,0,AJb+1);}var Z1=A.abZ(A0w,0,10)|0;if(this.BhS(Z1)){this.Ak2.Set(this.CC,Z1);this.
CC=this.CC+1;P++;}AJb=AhE.indexOf(String.fromCharCode(0x2C),0);}if(AhE!==A.jV)A.
ab5("%s",Bsn);},toString:function(){var B;var AzE=A.jV;var P;for(P=0;P<this.CC;P=
P+1){if(P>0)AzE=AzE+AHm;AzE=AzE+(((B=this.Ak2.Get(P))<0)?B+0x100000000:B).toFixed(
);}return AzE;},Contains:function(ZV){var P;for(P=0;P<this.CC;P=P+1)if(this.Ak2.
Get(P)===ZV)return true;return false;},BhS:function(ZV){return true;},_Init:function(
aArg){(this.Ak2=[]).__proto__=C.Al4.Ak2;this.__proto__=C.Al4;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.ALg={Afq:null,Init:function(aArg){var B;A.
zX([this,this.Bc9],[B=A._GetAutoObject(A.Device.Device),B.A7g,B.A$E],0);A.zX([this
,this.Bc_],[B=A._GetAutoObject(A.Device.Device),B.A7h,B.A$F],0);A.pe([this,this.
Bc9],this);A.pe([this,this.Bc_],this);},Clear:function(){C.Al4.Clear.call(this);
this.Afq.Clear();},Cl:function(){A._GetAutoObject(A.Device.Device).Aq5(this.Afq.
toString());A._GetAutoObject(A.Device.Device).Aq6(this.toString());},Bc9:function(
G){this.Afq.EB(A._GetAutoObject(A.Device.Device).AAW);A.we(this,0);},Bc_:function(
G){this.EB(A._GetAutoObject(A.Device.Device).AAX);A.we(this,0);},LO:function(ZV){
return this.Afq.Contains(ZV);},ATx:function(ZV){if(!this.LO(ZV))this.Afq.J(ZV);}
,ANW:function(){return this.Afq.Po();},_Init:function(aArg){C.Al4._Init.call(this
,aArg);this.__proto__=C.ALg;this.Afq=A._NewObject(C.Al4,0);this.Init(aArg);},_Mark:
function(D){var B;C.Al4._Mark.call(this,D);if((B=this.Afq)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.Al0={_Init:
function(){C.ALg._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.AQU={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.
V.Text.A3(0x11);this.V.Text.HH(10);},Bg:function(aSize){C.T1.Bg.call(this,aSize);
this.V.H(A.abN(this.V.M,this.Mf.M[0]));},Ai:function(Ae){var B;C.T1.Ai.call(this
,Ae);var G6=((Ae&0x10)===0x10);var Fh=((Ae&0x20)===0x20);var Gt=this.Bl.Bv;var FG=
A.jb.AdL;var GJ=A.jb.Bi;if(this.Hb){FG=A.jb.Bi;GJ=A.jb.Text;}if(!G6){this.Background.
L(FG);this.V.L(A.jb.CG);}else if(Gt){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi
);}else if(Fh){this.Background.L(A.jb.AR);this.V.L(A.jb.Bi);}else{this.Background.
L(FG);this.V.L(GJ);}this.LA=G6;this.Kx=Fh;this.Qh=Gt;},_Init:function(aArg){C.T1.
_Init.call(this,aArg);this.__proto__=C.AQU;this.Init(aArg);},_className:"Application::MenuItemCheckBoxOverlay"
};C.AS7={Yn:null,Ajq:null,KJ:function(){if(!this.Bw){this.Bw=A._NewObject(C.N,0);
this.Bw.Cw=[this,this.Xi];this.Bw.Ci=null;this.Bw.Cc=null;this.Bw.BZ(A.jV);this.
Bw.Cn(null);this.Bw.CT(A.aaL(A.ach.VG));}return this.Bw;},_Init:function(aArg){C.
OverlayMenu._Init.call(this,aArg);C.Xu._Init.call(this.Yn={I:this},0);C.Vt._Init.
call(this.Ajq={I:this},0);this.__proto__=C.AS7;var B;this.H(JQ);this.Yn.H(JQ);this.
Yn.U(A.aaR(A.acf.A4M));this.Ajq.At(A._GetAutoObject(A.Device.Device).Vt);this.J(
this.Yn,0);this.Yn.Wg(A.aaL(A.fl.Hk));this.Yn.Wh(A.aaL(A.fl.Hk));this.Yn.At([B=this.
Ajq,B.B9,B.B_]);this.Yn.CH(this.Ajq);this.Ajq.Bkp([B=A._GetAutoObject(A.Device.Device
),B.ARA,B.AY4]);},_Done:function(){this.__proto__=C.OverlayMenu;this.Yn._Done();
this.Ajq._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Yn._ReInit();this.Ajq._ReInit();this.Yn.U(A.aaR(A.acf.A4M
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Yn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajq)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PurchasedAnimalsListOverlayMenu"};C.Vt={AaO:null,DataExportDestinationToString:
null,Dp:function(){return 2;},C5:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BP(aIndex);},DK:function(A2){return A2;},Hl:function(
){return 1;},At:function(E){var F;C.AC.At.call(this,E);if(!!this.AaO)(F=this.AaO
,F[2].call(F[0],E));},Bkp:function(E){if(A.aaZ(this.AaO,E))return;if(!!this.AaO)
A.z$([this,this.Apl],this.AaO,0);this.AaO=E;if(!!this.AaO)A.zX([this,this.Apl],this.
AaO,0);A.pe([this,this.Apl],this);},Apl:function(G){var F;if(!!this.AaO)this.Q=(
F=this.AaO,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9,this.B_],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.Vt;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AaO)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AL7={
Yu:null,AkJ:null,KJ:function(){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.
Cw=[this,this.Xi];this.Bw.Ci=null;this.Bw.Cc=null;this.Bw.BZ(A.jV);this.Bw.Cn(null
);this.Bw.CT(A.aaL(A.ach.VG));}return this.Bw;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Xu._Init.call(this.Yu={I:this},0);C.ADl._Init.call(this.
AkJ={I:this},0);this.__proto__=C.AL7;var B;this.H(JQ);this.Yu.H(JQ);this.Yu.U(A.
aaR(A.acf.Display));this.AkJ.At(A._GetAutoObject(A.Device.Device).ApV);this.J(this.
Yu,0);this.Yu.Wg(A.aaL(A.fl.Hk));this.Yu.Wh(A.aaL(A.fl.Hk));this.Yu.At([B=this.AkJ
,B.B9,B.B_]);this.Yu.CH(this.AkJ);this.AkJ.Bls([B=A._GetAutoObject(A.Device.Device
),B.ADM,B.AH0]);},_Done:function(){this.__proto__=C.OverlayMenu;this.Yu._Done();
this.AkJ._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Yu._ReInit();this.AkJ._ReInit();this.Yu.U(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Yu)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AkJ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.ADl={Abq:null,ListViewScopeToString:
null,Dp:function(){return 2;},C5:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BP(aIndex);},DK:function(A2){return A2;},Hl:function(){return 1;
},At:function(E){var F;C.AC.At.call(this,E);if(!!this.Abq)(F=this.Abq,F[2].call(
F[0],E));},Bls:function(E){if(A.aaZ(this.Abq,E))return;if(!!this.Abq)A.z$([this,
this.Apl],this.Abq,0);this.Abq=E;if(!!this.Abq)A.zX([this,this.Apl],this.Abq,0);
A.pe([this,this.Apl],this);},Apl:function(G){var F;if(!!this.Abq)this.Q=(F=this.
Abq,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B9,this.B_],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.ADl;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abq)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.AT$={ABu:0,ABt:0,Ai:function(Ae){C.ON.Ai.call(this
,Ae);this.Background.L(this.ABt);this.V.L(this.ABu);},Bke:function(E){if(this.ABu===
E)return;this.ABu=E;this.Am();},Bkd:function(E){if(this.ABt===E)return;this.ABt=
E;this.Am();},_Init:function(aArg){C.ON._Init.call(this,aArg);this.__proto__=C.AT$;
this.Ar(false);this.ABu=A.jb.Text;this.ABt=A.jb.CG;},_className:"Application::TextCaptionItem"
};C.AGv={WeightValuePrecisionToString:null,Init:function(aArg){var B;A.zX([this,
this.BcF],[B=A._GetAutoObject(A.Device.Device),B.A7L,B.A$W],0);A.pe([this,this.BcF
],this);},Dp:function(){return 3;},F$:function(aIndex){return this.WeightValuePrecisionToString.
BP(this.C5(aIndex));},At:function(E){C.CO.At.call(this,E);A._GetAutoObject(A.Device.
Device).Awa(E);},BcF:function(G){this.Q=A._GetAutoObject(A.Device.Device).OD;A.abo([
this,this.B9,this.B_],0);},_Init:function(aArg){C.CO._Init.call(this,aArg);A.Device.
WeightValuePrecisionToString._Init.call(this.WeightValuePrecisionToString={I:this
},0);this.__proto__=C.AGv;this.Co.Set(0,0);this.Co.Set(1,1);this.Co.Set(2,2);this.
Init(aArg);},_Done:function(){this.__proto__=C.CO;this.WeightValuePrecisionToString.
_Done();C.CO._Done.call(this);},_ReInit:function(){C.CO._ReInit.call(this);this.
WeightValuePrecisionToString._ReInit();},_Mark:function(D){var B;C.CO._Mark.call(
this,D);if((B=this.WeightValuePrecisionToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightValuePrecision"};C.ATD={Uo:null,A_h:A.jV,Init:function(
aArg){},Bg:function(aSize){C.BW.Bg.call(this,[aSize[0],80]);this.Background.H(A.
abK(this.Background.M,aSize));this.Uo.H([0,80,aSize[0],aSize[1]]);},Ai:function(
Ae){C.BW.Ai.call(this,Ae);this.Uo.L(this.V.AQ);},BlT:function(E){if(this.A_h===E
)return;this.A_h=E;this.Uo.R(E);},_Init:function(aArg){C.BW._Init.call(this,aArg
);C.CP._Init.call(this.Uo={I:this},0);this.__proto__=C.ATD;this.H(Act);this.Uo.H(
Bso);this.J(this.Uo,0);this.Uo.S(A.aaL(A.fl.Ah));this.Uo.A7(A.aaL(A.fl.Ak));this.
Uo.CB(null);this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.Uo._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.Uo._ReInit(
);this.Uo.S(A.aaL(A.fl.Ah));this.Uo.A7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.BW._Mark.call(this,D);if((B=this.Uo)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupSubCaption"};C.YK={MassDeregistrationCriterionToString:
null,Dp:function(){return 2;},F$:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.MassDeregistrationCriterionToString.BP(this.C5(aIndex));},_Init:function(
aArg){C.CO._Init.call(this,aArg);A.Device.MassDeregistrationCriterionToString._Init.
call(this.MassDeregistrationCriterionToString={I:this},0);this.__proto__=C.YK;this.
Co.Set(0,0);this.Co.Set(1,1);},_Done:function(){this.__proto__=C.CO;this.MassDeregistrationCriterionToString.
_Done();C.CO._Done.call(this);},_ReInit:function(){C.CO._ReInit.call(this);this.
MassDeregistrationCriterionToString._ReInit();},_Mark:function(D){var B;C.CO._Mark.
call(this,D);if((B=this.MassDeregistrationCriterionToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MassDeregistrationCriterion"};C.AM0={U1:null
,YK:null,YM:null,Mm:null,Att:0,Init:function(aArg){this.A8(this.YM);},Ai:function(
Ae){C.Eb.Ai.call(this,Ae);var Bz8=((A.aaR(A.acf.Ap2)+A.aaR(A.acf.Colon))+CM)+this.
Att.toFixed();this.Mm.BlT(Bz8);},Cx:function(G){C.Eb.Cx.call(this,G);A.zX([this,
this.AKB],this.Mm.Q,0);A.pe([this,this.AKB],this);},EV:function(G){C.Eb.EV.call(
this,G);A.z$([this,this.AKB],this.Mm.Q,0);},DC:function(G){C.Eb.DC.call(this,G);
if((this.AR===this.Mm)&&!this.Att)this.N.HL.Dm(100);else this.N.HL.Dm(255);},Bdn:
function(G){if(this.Att>0)A._GetAutoObject(A.Device.Device).A5(108,true,this.Att.
toFixed(),0,[this,this.Byn]);},AKB:function(G){var F;this.Att=A._GetAutoObject(A.
Device.Helper).Bhe((F=this.Mm.Q,F[1].call(F[0])));this.Am();A.pe([this,this.MD],
this);},Bdh:function(G){var B;if(!A._GetAutoObject(A.Device.Device).Ap.Cb()){A._GetAutoObject(
A.Device.Device).A5(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device
).AqF()===false){this.U1=[this,this.Bdh];A.zX([this,this.Xk],[B=A._GetAutoObject(
A.Device.Device),B.Wd,B.WW],0);A._GetAutoObject(A.Device.Device).A5(74,true,A.jV
,0,[this,this.AfP]);return;}var AfC=A._GetAutoObject(A.Device.Device).Anu(1);if(
AfC.Anz)A._GetAutoObject(A.Device.Device).Ap7(AfC);else A._GetAutoObject(A.Device.
Device).A5(88,true,A.jV,0,null);},AfP:function(G){var B;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5)){A.z$([this,this.Xk],[B=A.
_GetAutoObject(A.Device.Device),B.Wd,B.WW],0);this.U1=null;}},Xk:function(G){var
B;if(A._GetAutoObject(A.Device.Device).Aht===3){A._GetAutoObject(A.Device.Device
).A5(74,false,A.jV,0,[this,this.AfP]);A.z$([this,this.Xk],[B=A._GetAutoObject(A.
Device.Device),B.Wd,B.WW],0);if(!!this.U1)A.pe(this.U1,this);this.U1=null;}},Byn:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===7))A.pe([this,this.Bz3],this);},Bz3:function(G){A._GetAutoObject(A.
Device.Helper).Bwo(this.YK.Q);A._GetAutoObject(A.Device.Device).A5(109,true,this.
Att.toFixed(),0,null);A.pe([this,this.MD],this);A.pe([this,this.AKB],this);},_Init:
function(aArg){C.Eb._Init.call(this,aArg);C.YK._Init.call(this.YK={I:this},0);C.
Cj._Init.call(this.YM={I:this},0);C.ATD._Init.call(this.Mm={I:this},0);this.__proto__=
C.AM0;var B;this.Dl(C.AOf);this.YM.H(JR);this.YM.Aj(true);this.YM.U(A.aaR(A.acf.
A5n));this.YM.Bf(false);this.Mm.H(Bsp);this.Mm.Aj(true);this.Mm.U(A.aaR(A.acf.A_x
));this.Mm.Bf(true);this.Mm.A9h(A.aaR(A.acf.Ok));this.J(this.YM,0);this.J(this.Mm
,0);this.YM.AN=[this,this.Bdh];this.Mm.AN=[this,this.Bdn];this.Mm.Aet([this,this.
Bdn]);this.Mm.At([B=this.YK,B.B9,B.B_]);this.Mm.CH(this.YK);this.Init(aArg);},_Done:
function(){this.__proto__=C.Eb;this.YK._Done();this.YM._Done();this.Mm._Done();C.
Eb._Done.call(this);},_ReInit:function(){C.Eb._ReInit.call(this);this.YK._ReInit(
);this.YM._ReInit();this.Mm._ReInit();this.YM.U(A.aaR(A.acf.A5n));this.Mm.U(A.aaR(
A.acf.A_x));this.Mm.A9h(A.aaR(A.acf.Ok));},_Mark:function(D){var B;C.Eb._Mark.call(
this,D);if((B=this.U1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.YK).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Mm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceAnimalDataMenuScreen"
};C.AOf={_Init:function(aArg){C.KG._Init.call(this,aArg);this.__proto__=C.AOf;this.
Text.R(A.aaR(A.acf.Xw));},_ReInit:function(){C.KG._ReInit.call(this);this.Text.R(
A.aaR(A.acf.Xw));},_className:"Application::HeaderDeviceAnimalDataMenu"};C.AM3={
U1:null,YL:null,Abu:null,Init:function(aArg){this.A8(this.YL);A.pe([this,this.MD
],this);},Bdg:function(G){var B;var Azn=A._GetAutoObject(A.Device.Device).AC$();
switch(Azn){case 1:A._GetAutoObject(A.Device.Device).A5(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A5(91,true,ZS,0,[this,this.BdA]);break;
case 2:{this.U1=[this,this.Bdg];A.zX([this,this.Xk],[B=A._GetAutoObject(A.Device.
Device),B.Wd,B.WW],0);A._GetAutoObject(A.Device.Device).A5(74,true,A.jV,0,[this,
this.AfP]);}break;default:throw new Error(A$o+Azn.toFixed());}},AfP:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.Xk],[B=A._GetAutoObject(A.Device.Device),B.Wd,B.WW],0);this.
U1=null;}},Xk:function(G){var B;if(A._GetAutoObject(A.Device.Device).Aht===3){A.
_GetAutoObject(A.Device.Device).A5(74,false,A.jV,0,[this,this.AfP]);A.z$([this,this.
Xk],[B=A._GetAutoObject(A.Device.Device),B.Wd,B.WW],0);if(!!this.U1)A.pe(this.U1
,this);this.U1=null;}},BdC:function(G){var B;var Azn=A._GetAutoObject(A.Device.Device
).ADa();switch(Azn){case 1:A._GetAutoObject(A.Device.Device).A5(84,true,A.jV,0,null
);break;case 0:A._GetAutoObject(A.Device.Device).A5(95,true,A.jV,0,[this,this.Byo
]);break;case 2:{this.U1=[this,this.BdC];A.zX([this,this.Xk],[B=A._GetAutoObject(
A.Device.Device),B.Wd,B.WW],0);A._GetAutoObject(A.Device.Device).A5(74,true,A.jV
,0,[this,this.AfP]);}break;case 3:A._GetAutoObject(A.Device.Device).A5(94,true,A.
jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A5(93,true,A.jV,0,null
);break;default:throw new Error(A$o+Azn.toFixed());}},BdA:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);switch(As.Id){case 91:if(As.PopupState===
9)A.aaS([this,this.Bw2],this);break;case 92:if(As.PopupState===9)A.aaS([this,this.
Bw4],this);break;default:throw new Error(Bsq+As.Id.toFixed());}},Bw2:function(G){
if(A._GetAutoObject(A.Device.Device).ABD()){var A1M=A._GetAutoObject(A.Device.Device
).Ap.Qx();A._GetAutoObject(A.Device.Device).A5(80,true,A1M.toFixed(),0,null);}else
A._GetAutoObject(A.Device.Device).A5(82,true,A.jV,0,null);A.aaS([this,this.Byj],
this);},Bw4:function(G){if(A._GetAutoObject(A.Device.Device).AFD()){var A1M=A._GetAutoObject(
A.Device.Device).Ap.Qx();A._GetAutoObject(A.Device.Device).A5(81,true,A1M.toFixed(
),0,null);}else A._GetAutoObject(A.Device.Device).A5(83,true,A.jV,0,null);A.aaS([
this,this.ByY],this);},Byo:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A.pe([this,this.Bz4],this);},Bz4:function(
G){A._GetAutoObject(A.Device.Device).A5(92,true,ZS,0,[this,this.BdA]);},ByY:function(
G){A._GetAutoObject(A.Device.Device).A5(92,false,A.jV,0,null);},Byj:function(G){
A._GetAutoObject(A.Device.Device).A5(91,false,A.jV,0,null);},_Init:function(aArg
){C.Eb._Init.call(this,aArg);C.Cj._Init.call(this.YL={I:this},0);C.Cj._Init.call(
this.Abu={I:this},0);this.__proto__=C.AM3;this.Dl(C.AOi);this.YL.H(JR);this.YL.Aj(
true);this.YL.U(A.aaR(A.acf.ABD));this.YL.Bf(false);this.Abu.H(P0);this.Abu.Aj(true
);this.Abu.U(A.aaR(A.acf.AFD));this.Abu.Bf(true);this.J(this.YL,0);this.J(this.Abu
,0);this.YL.AN=[this,this.Bdg];this.Abu.AN=[this,this.BdC];this.Init(aArg);},_Done:
function(){this.__proto__=C.Eb;this.YL._Done();this.Abu._Done();C.Eb._Done.call(
this);},_ReInit:function(){C.Eb._ReInit.call(this);this.YL._ReInit();this.Abu._ReInit(
);this.YL.U(A.aaR(A.acf.ABD));this.Abu.U(A.aaR(A.acf.AFD));},_Mark:function(D){var
B;C.Eb._Mark.call(this,D);if((B=this.U1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abu)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceDeviceDataMenuScreen"};C.AOi={_Init:
function(aArg){C.KG._Init.call(this,aArg);this.__proto__=C.AOi;this.Text.R(A.aaR(
A.acf.ABJ));},_ReInit:function(){C.KG._ReInit.call(this);this.Text.R(A.aaR(A.acf.
ABJ));},_className:"Application::HeaderDeviceDeviceDataMenu"};C.Rx={Sj:null,Aly:
function(G){this.A43(this);},ASl:function(E){if(this.Sj===E)return;this.Sj=E;this.
DI.AutoActions=E;},ALh:function(){this.ALk(A.aaR(A.acf.A_F),[this,this.BAi],256);
this.ALk(A.aaR(A.acf.AFs),[this,this.BAg],2);this.ALk(A.aaR(A.acf.AnA),[this,this.
BAh],1);A._GetAutoObject(C.Bz).Fu();A._GetAutoObject(C.Bz).Nx(A.aaR(A.acf.Bfq)+A.
aaR(A.acf.Colon));A._GetAutoObject(C.Bz).Fu();},ALk:function(BuU,Bv3,D$){if(!this.
Sj)return;var Bzh=this.Sj.Contains(D$);this.ALj(BuU,Bv3,Bzh);},BAi:function(G){this.
A3c(256);},BAg:function(G){this.A3c(2);},BAh:function(G){this.A3c(1);},A3c:function(
D$){if(!this.Sj)return;var AcW=this.Sj.Contains(D$);if(AcW)this.Sj.BmD(D$);else this.
Sj.Bfo(D$);this.Sj.Cl();A._GetAutoObject(A.Device.Device).Cd(0);},A3H:function(P5
,P6,Bwj){if(!this.Sj)return;if(this.Sj.Contains(Bwj))A._GetAutoObject(C.Bz).Adt(
P5,P6,true);else A._GetAutoObject(C.Bz).Adt(P5,P6,false);},AFO:function(D$){A._GetAutoObject(
A.Device.Device).Cd(0);if(!this.Sj)return;this.Sj.AFO(D$);this.Sj.Cl();},_Init:function(
aArg){C.GN._Init.call(this,aArg);this.__proto__=C.Rx;},_Mark:function(D){var B;C.
GN._Mark.call(this,D);if((B=this.Sj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::ActionListAnimalListScreen"};C.Avk={Q:null,Cl:function(){var F;(F=
this.Q,F[2].call(F[0],this.toString()));},AC9:function(D$){switch(D$){case 16384:
case 131072:case 1024:case 1:case 2:case 256:return true;default:return false;}}
,L6:function(G){var F;if(!!this.Q)this.EB((F=this.Q,F[1].call(F[0])));A.we(this,
0);},At:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.L6],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.L6],E,0);if(!!E)A.pe([this,this.L6],this);}
,AFO:function(D$){if(this.Po()>0)this.AwQ(this.Po()-1,D$);},Bfo:function(D$){if(
this.Contains(D$))return;if(this.CC>=17){A.ab5("%s",AHl);return;}var Azg=0;for(;(
Azg<=this.Po())&&(this.Pn(Azg)<D$);Azg++);var AAt=this.Po()-1;this.J(this.Pn(AAt
));for(;AAt>Azg;AAt--)this.AwQ(AAt,this.Pn(AAt-1));this.AwQ(Azg,D$);},BmD:function(
D$){var index=this.DK(D$);if(index<0)return;for(;index<(this.Po()-1);index++)this.
AwQ(index,this.Pn(index+1));this.AwQ(index,0);},_Init:function(aArg){C.Vb._Init.
call(this,aArg);this.__proto__=C.Avk;},_Mark:function(D){var B;C.Vb._Mark.call(this
,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListActionsListClass"
};C.Avr={_Init:function(){C.Avk._Init.call(this,0);var B;this.At([B=A._GetAutoObject(
A.Device.Device),B.A7P,B.A$0]);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.Avs={_Init:function(){C.Avk._Init.call(this,0);var B;this.At([B=
A._GetAutoObject(A.Device.Device),B.A7Q,B.A$1]);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Axk={_Init:function(){C.Avk._Init.call(this
,0);var B;this.At([B=A._GetAutoObject(A.Device.Device),B.A8h,B.Bad]);},_ReInit:function(
){},_variants:function(){return this;},_this:null};
C._Init=function(){C.ALU.__proto__=A.Core.Root;C.AB.__proto__=C.AaU;C.Wo.__proto__=
A.Core.O;C.Os.__proto__=A.Core.O;C.Za.__proto__=A.acl.Ga;C.Ec.__proto__=A.Core.O;
C.XI.__proto__=C.AB;C.ATQ.__proto__=C.AB;C.AuY.__proto__=C.AB;C.QZ.__proto__=C.AB;
C.Fc.__proto__=C.G_;C.Aw.__proto__=A.Core.O;C.Cr.__proto__=C.AB;C.Aqp.__proto__=
C.BQ;C.BQ.__proto__=A.Core.O;C.N.__proto__=A.Core.O;C.ACz.__proto__=C.Amy;C.AF6.
__proto__=C.DL;C.Cj.__proto__=C.ON;C.Dn.__proto__=C.D_;C.I2.__proto__=C.Dn;C.BW.
__proto__=C.Dn;C.SA.__proto__=C.Dn;C.OB.__proto__=C.CO;C.Q4.__proto__=C.AC;C.AT5.
__proto__=C.Bb;C.FT.__proto__=A.Core.O;C.Bb.__proto__=C.Cj;C.GN.__proto__=C.AB;C.
ABn.__proto__=C.Bb;C.AdJ.__proto__=C.AB;C.Me.__proto__=C.Os;C.AT0.__proto__=C.AB;
C.Aqo.__proto__=C.ACz;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.ATG.__proto__=C.Ab4;C.Eu.__proto__=A.Core.O;C.Rating.__proto__=
A.Core.O;C.ArR.__proto__=A.Core.O;C.AFS.__proto__=C.Dn;C.CP.__proto__=A.Core.O;C.
Ajx.__proto__=C.VD;C.Al3.__proto__=C.Q3;C.Ahb.__proto__=A.Core.O;C.Eb.__proto__=
C.AB;C.ASX.__proto__=C.AB;C.Mh.__proto__=C.Cj;C.AmT.__proto__=C.Cj;C.OverlayMenu.
__proto__=C.AaU;C.AO0.__proto__=C.OverlayMenu;C.Gz.__proto__=A.Core.O;C.AaU.__proto__=
A.Core.O;C.ATL.__proto__=A.acl.AdX;C.Amy.__proto__=C.BQ;C.ACA.__proto__=C.Amy;C.
J7.__proto__=C.AC;C.ATI.__proto__=C.Dn;C.AFt.__proto__=C.AB;C.HT.__proto__=C.AB;
C.V$.__proto__=C.AqR;C.IA.__proto__=C.ACA;C.IT.__proto__=C.AB;C.ALs.__proto__=C.
AFt;C.ALo.__proto__=C.GN;C.AMJ.__proto__=C.GN;C.Ad1.__proto__=C.Cj;C.Qs.__proto__=
C.Ad1;C.AOM.__proto__=C.BQ;C.AuW.__proto__=C.BQ;C.DE.__proto__=C.E$;C.A0.__proto__=
A.Core.O;C.FU.__proto__=C.AC;C.AeW.__proto__=C.BW;C.AS_.__proto__=C.AB;C.Abv.__proto__=
C.Cj;C.T1.__proto__=C.Cj;C.AMT.__proto__=C.Cr;C.AT7.__proto__=C.Cr;C.AM7.__proto__=
C.Cr;C.ATk.__proto__=C.Cr;C.WC.__proto__=A.Core.O;C.QJ.__proto__=C.Fc;C.DZ.__proto__=
A.Core.O;C.TX.__proto__=C.AB;C.AUD.__proto__=C.GN;C.ALt.__proto__=C.Axi;C.AUo.__proto__=
C.Cr;C.Aem.__proto__=C.AC;C.Axi.__proto__=C.AB;C.AUM.__proto__=C.Cr;C.ATH.__proto__=
C.Ab4;C.AAU.__proto__=A.Graphics.Hp;C.AiX.__proto__=C.AB;C.AQL.__proto__=A.Core.
O;C.Ff.__proto__=C.OverlayMenu;C.Xu.__proto__=C.BW;C.AiY.__proto__=C.Cj;C.AK_.__proto__=
C.Ff;C.CO.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.ALe.__proto__=C.Vb;C.ALf.
__proto__=C.Ff;C.R2.__proto__=C.T1;C.ALZ.__proto__=C.Vb;C.V3.__proto__=C.Fc;C.U$.
__proto__=A.Core.O;C.Kj.__proto__=A.Core.O;C.AQ9.__proto__=C.HT;C.ATb.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.CO;C.AMK.__proto__=C.Al3;C.G_.__proto__=A.
Core.O;C.AUF.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.CO;C.AaC.
__proto__=C.FU;C.Axa.__proto__=C.AAU;C.ASS.__proto__=C.OverlayMenu;C.ANP.__proto__=
A.Core.O;C.NX.__proto__=A.Core.O;C.AST.__proto__=A.Core.O;C.ATK.__proto__=A.acl.
AdX;C.Akv.__proto__=C.I2;C.Al6.__proto__=C.OverlayMenu;C.ABo.__proto__=C.Bb;C.Ya.
__proto__=C.AuW;C.Aqa.__proto__=C.HT;C.Ab3.__proto__=C.Dn;C.WeightRecordingScope.
__proto__=C.AC;C.At7.__proto__=C.AB;C.ATJ.__proto__=C.I2;C.ALq.__proto__=C.AB;C.
AqR.__proto__=C.HT;C.AGq.__proto__=A.Core.O;C.AUI.__proto__=A.Core.O;C.D_.__proto__=
C.Cj;C.Aeo.__proto__=C.D_;C.Avm.__proto__=C.Aeo;C.SetTransponderScreen.__proto__=
C.QZ;C.ACG.__proto__=C.Eu;C.AGu.__proto__=C.Bb;C.WeightListScreen.__proto__=C.AB;
C.L$.__proto__=C.QZ;C.AK8.__proto__=C.L$;C.ManualActionScanScreen.__proto__=C.L$;
C.AK9.__proto__=A.Core.O;C.AOR.__proto__=C.Dw;C.ACF.__proto__=C.Dw;C.TK.__proto__=
C.Dw;C.AOT.__proto__=C.Dw;C.AMo.__proto__=C.Bb;C.M0.__proto__=C.Bb;C.AMm.__proto__=
C.Bb;C.Jg.__proto__=A.Core.O;C.AMl.__proto__=C.Bb;C.Amx.__proto__=C.Tv;C.AFj.__proto__=
C.AwD;C.Akj.__proto__=C.AwD;C.AeI.__proto__=C.Akj;C.AMQ.__proto__=C.ON;C.ON.__proto__=
C.G_;C.AOW.__proto__=C.Eu;C.CZ.__proto__=A.Core.O;C.AMh.__proto__=C.Aje;C.ACC.__proto__=
C.TL;C.J6.__proto__=A.Core.O;C.Ap6.__proto__=C.Mh;C.AOc.__proto__=C.J$;C.AutoRegistrationMode.
__proto__=C.AC;C.AOX.__proto__=C.Eu;C.Tp.__proto__=C.AB;C.D2.__proto__=A.Core.O;
C.ALE.__proto__=C.RJ;C.ALS.__proto__=C.Aay;C.ALN.__proto__=C.Aay;C.ATa.__proto__=
C.Bb;C.AOV.__proto__=C.Eu;C.ALH.__proto__=C.Aay;C.Iv.__proto__=C.IS;C.RD.__proto__=
C.Fk;C.RH.__proto__=C.Fk;C.To.__proto__=C.JA;C.Qr.__proto__=C.Fk;C.Tn.__proto__=
C.JA;C.ALp.__proto__=C.AiX;C.Gy.__proto__=C.AiX;C.AQb.__proto__=C.Cr;C.Aay.__proto__=
C.D2;C.JB.__proto__=C.CO;C.AQH.__proto__=C.Cr;C.ALC.__proto__=C.K4;C.ALD.__proto__=
C.D2;C.ALA.__proto__=C.K4;C.ALB.__proto__=C.K4;C.Wq.__proto__=C.D_;C.ATE.__proto__=
C.Wq;C.RI.__proto__=C.Fk;C.AOL.__proto__=C.IA;C.AML.__proto__=C.AB;C.AMs.__proto__=
C.AdJ;C.ALn.__proto__=C.IT;C.AUC.__proto__=C.IT;C.AMI.__proto__=C.Gy;C.AUB.__proto__=
C.Gy;C.ALm.__proto__=C.Gy;C.AOe.__proto__=C.J$;C.AON.__proto__=C.J$;C.AOS.__proto__=
C.TL;C.AMn.__proto__=C.Aje;C.TL.__proto__=C.Dw;C.ApY.__proto__=A.acu.ABy;C.Aje.__proto__=
C.Bb;C.DL.__proto__=A.Core.O;C.AL_.__proto__=C.DL;C.OR.__proto__=C.DL;C.Aqm.__proto__=
A.Core.O;C.ALJ.__proto__=C.FT;C.ATe.__proto__=A.Core.O;C.K4.__proto__=C.D2;C.AMR.
__proto__=C.Cr;C.Auv.__proto__=C.Cj;C.ACw.__proto__=C.BQ;C.ACx.__proto__=C.BQ;C.
Fk.__proto__=C.JA;C.ANT.__proto__=C.GN;C.ANS.__proto__=C.IT;C.ANR.__proto__=C.Gy;
C.AOs.__proto__=C.J$;C.ACE.__proto__=C.Dw;C.ABm.__proto__=C.Bb;C.AS$.__proto__=C.
Ahb;C.FactoryResetScope.__proto__=C.CO;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;
C.ARj.__proto__=C.Rx;C.ARi.__proto__=C.IT;C.ARh.__proto__=C.Gy;C.ACy.__proto__=C.
J$;C.AA5.__proto__=C.FU;C.ALc.__proto__=C.Ff;C.ALr.__proto__=C.At7;C.NewAnimalSetTransponderScreen.
__proto__=C.ArW;C.C4.__proto__=C.AC;C.OQ.__proto__=A.Core.O;C.RE.__proto__=C.Fk;
C.RF.__proto__=C.Fk;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AQS.
__proto__=C.OverlayMenu;C.Vs.__proto__=C.T1;C.ADs.__proto__=C.Cj;C.AnimalSingleInfoScreen.
__proto__=C.Tp;C.AnimalMultiInfoScreen.__proto__=C.Tp;C.ALG.__proto__=C.OverlayMenu;
C.MultiInfoActionsScreen.__proto__=C.Gy;C.IY.__proto__=A.Core.O;C.ALb.__proto__=
C.GN;C.ALa.__proto__=C.IT;C.AK$.__proto__=C.Gy;C.AOK.__proto__=C.IA;C.Ar7.__proto__=
C.OQ;C.AqA.__proto__=C.OQ;C.Aur.__proto__=C.AC;C.ALy.__proto__=C.AC;C.AFR.__proto__=
C.D_;C.GS.__proto__=A.Core.O;C.AQe.__proto__=C.HB;C.AUt.__proto__=C.XI;C.AQ5.__proto__=
C.V$;C.AC5.__proto__=C.Lb;C.HB.__proto__=C.GS;C.Lb.__proto__=C.GS;C.EartagNrAssignmentMode.
__proto__=C.AC;C.Ave.__proto__=C.HB;C.ATC.__proto__=C.BW;C.NewAnimalsSetTransponderScreen.
__proto__=C.ArW;C.ReasonOfLeaving.__proto__=C.AC;C.OK.__proto__=C.BW;C.Aer.__proto__=
C.Ed;C.AQY.__proto__=C.Ed;C.AQX.__proto__=C.Ed;C.Ed.__proto__=A.Core.O;C.Q0.__proto__=
C.D_;C.AQf.__proto__=C.Lb;C.Avd.__proto__=A.Core.O;C.E$.__proto__=A.Core.O;C.Fm.
__proto__=C.AB;C.ANq.__proto__=C.AB;C.ANt.__proto__=C.Fm;C.ANu.__proto__=C.Fm;C.
Aqc.__proto__=C.Fm;C.Aa5.__proto__=C.Ajx;C.J$.__proto__=C.Ajx;C.AuV.__proto__=C.
Aa5;C.AOq.__proto__=C.Aa5;C.AOp.__proto__=C.Aa5;C.AOo.__proto__=C.BQ;C.Ad7.__proto__=
C.Eu;C.Amm.__proto__=C.Bb;C.Ai5.__proto__=C.Iv;C.AB0.__proto__=A.Core.O;C.Aks.__proto__=
A.Core.O;C.Q3.__proto__=C.AB;C.AT6.__proto__=C.Q3;C.AOr.__proto__=C.BQ;C.Dw.__proto__=
C.Eu;C.KG.__proto__=C.BQ;C.AOk.__proto__=C.KG;C.AOm.__proto__=C.KG;C.X7.__proto__=
C.Amm;C.Af7.__proto__=C.G_;C.ANd.__proto__=C.GN;C.ANc.__proto__=C.IT;C.ANb.__proto__=
C.Gy;C.AOn.__proto__=C.J$;C.Aa0.__proto__=C.Ab3;C.Ajo.__proto__=C.Qs;C.ABg.__proto__=
C.Qs;C.AOP.__proto__=C.Dw;C.AMj.__proto__=C.Bb;C.RG.__proto__=C.Fk;C.ALz.__proto__=
C.Fk;C.AM5.__proto__=C.Eb;C.AM6.__proto__=C.Eb;C.AOl.__proto__=C.KG;C.NQ.__proto__=
C.Abv;C.AM1.__proto__=C.Eb;C.AOg.__proto__=C.KG;C.PE.__proto__=C.Cj;C.R3.__proto__=
C.AB;C.ANr.__proto__=C.R3;C.ANs.__proto__=C.R3;C.ANv.__proto__=C.Aqc;C.ANo.__proto__=
C.Fm;C.Aax.__proto__=C.Iv;C.Pb.__proto__=C.Iv;C.ALL.__proto__=C.Al6;C.AQF.__proto__=
C.TX;C.AQE.__proto__=C.TX;C.ARe.__proto__=C.Rx;C.ARd.__proto__=C.IT;C.ARc.__proto__=
C.Gy;C.AOF.__proto__=C.J$;C.QV.__proto__=C.GN;C.ATm.__proto__=C.IT;C.ATl.__proto__=
C.Gy;C.Ajy.__proto__=C.VD;C.ABl.__proto__=C.Bb;C.ACD.__proto__=C.Dw;C.AOH.__proto__=
C.BQ;C.AaA.__proto__=C.Nz;C.XB.__proto__=C.Nz;C.RJ.__proto__=C.D2;C.XC.__proto__=
C.RJ;C.Xz.__proto__=C.Iu;C.Aav.__proto__=C.Iu;C.Xy.__proto__=C.Iu;C.Aau.__proto__=
C.Iu;C.ALI.__proto__=C.AB;C.Iu.__proto__=C.IS;C.IS.__proto__=C.G_;C.Nz.__proto__=
C.Fk;C.AwC.__proto__=C.AeI;C.AMP.__proto__=C.Ap6;C.AwE.__proto__=C.AeI;C.AS5.__proto__=
C.Cr;C.AS3.__proto__=C.Ed;C.AQc.__proto__=C.Lb;C.AS4.__proto__=C.Ed;C.NewMenu.__proto__=
C.AB;C.AQ6.__proto__=C.HT;C.ALK.__proto__=C.Al6;C.AL0.__proto__=C.Vb;C.JA.__proto__=
C.IS;C.AOJ.__proto__=C.Ya;C.AaZ.__proto__=C.CO;C.AOU.__proto__=C.Eu;C.MotherScanScreen.
__proto__=C.L$;C.AOI.__proto__=C.Aqo;C.I6.__proto__=A.Core.O;C.AOE.__proto__=C.BQ;
C.SetSaveNaisIdScreen.__proto__=C.QZ;C.ANe.__proto__=C.Aqa;C.UB.__proto__=C.CO;C.
UC.__proto__=C.UB;C.Acn.__proto__=C.UB;C.Adv.__proto__=C.AC;C.AFQ.__proto__=C.D_;
C.AM4.__proto__=C.Eb;C.AOj.__proto__=C.KG;C.AM2.__proto__=C.Eb;C.AOh.__proto__=C.
KG;C.Ajz.__proto__=C.TK;C.AOO.__proto__=C.TK;C.Ajd.__proto__=C.M0;C.AMi.__proto__=
C.M0;C.AQZ.__proto__=C.Aer;C.VD.__proto__=C.BQ;C.Ab4.__proto__=C.BW;C.Fv.__proto__=
C.AC;C.ALO.__proto__=C.Fv;C.ALP.__proto__=C.Fv;C.ALv.__proto__=C.IT;C.Tv.__proto__=
C.BW;C.AQ8.__proto__=C.AB;C.ArW.__proto__=C.SetTransponderScreen;C.AC6.__proto__=
C.HB;C.ArX.__proto__=C.OK;C.AwS.__proto__=C.OK;C.Ab7.__proto__=C.CO;C.AUS.__proto__=
C.Rx;C.AUR.__proto__=C.IT;C.AUQ.__proto__=C.Gy;C.AQg.__proto__=A.Core.O;C.AQd.__proto__=
C.HB;C.AB5.__proto__=C.Aa0;C.LS.__proto__=A.Core.O;C.ATj.__proto__=C.Cr;C.ATi.__proto__=
C.Cr;C.AUm.__proto__=C.Cr;C.Ae3.__proto__=C.AC;C.I3.__proto__=A.acn.I3;C.AUa.__proto__=
C.AB;C.AS8.__proto__=C.QV;C.AOQ.__proto__=C.Dw;C.AL8.__proto__=C.QV;C.AOd.__proto__=
C.Ajy;C.AOG.__proto__=C.Ajy;C.AMk.__proto__=C.Bb;C.ATB.__proto__=C.SA;C.ATF.__proto__=
C.Q0;C.AOD.__proto__=C.BQ;C.AQQ.__proto__=C.Ff;C.AQP.__proto__=C.Ff;C.AQO.__proto__=
C.Ff;C.ALg.__proto__=C.Al4;C.AQU.__proto__=C.T1;C.AS7.__proto__=C.OverlayMenu;C.
Vt.__proto__=C.AC;C.AL7.__proto__=C.OverlayMenu;C.ADl.__proto__=C.AC;C.AT$.__proto__=
C.ON;C.AGv.__proto__=C.CO;C.ATD.__proto__=C.BW;C.YK.__proto__=C.CO;C.AM0.__proto__=
C.Eb;C.AOf.__proto__=C.KG;C.AM3.__proto__=C.Eb;C.AOi.__proto__=C.KG;C.Rx.__proto__=
C.GN;C.Avk.__proto__=C.Vb;};C._ReInit=function(){var B;if((B=C.AwW._this))B._ReInit(
),C.AwW._ReInit.call(B);if((B=C.AwX._this))B._ReInit(),C.AwX._ReInit.call(B);if((
B=C.AW._this))B._ReInit(),C.AW._ReInit.call(B);if((B=C.O$._this))B._ReInit(),C.O$.
_ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(
B);if((B=C.AeR._this))B._ReInit(),C.AeR._ReInit.call(B);if((B=C.Bz._this))B._ReInit(
),C.Bz._ReInit.call(B);if((B=C.Wk._this))B._ReInit(),C.Wk._ReInit.call(B);if((B=
C.ArY._this))B._ReInit(),C.ArY._ReInit.call(B);if((B=C.Ant._this))B._ReInit(),C.
Ant._ReInit.call(B);if((B=C.DI._this))B._ReInit(),C.DI._ReInit.call(B);if((B=C.Aud.
_this))B._ReInit(),C.Aud._ReInit.call(B);if((B=C.Al0._this))B._ReInit(),C.Al0._ReInit.
call(B);if((B=C.Avr._this))B._ReInit(),C.Avr._ReInit.call(B);if((B=C.Avs._this))
B._ReInit(),C.Avs._ReInit.call(B);if((B=C.Axk._this))B._ReInit(),C.Axk._ReInit.call(
B);};C.Dz=function(D){var B;if((B=C.AwW._this)&&(B._cycle!=D))B._Done(C.AwW._this=
null);if((B=C.AwX._this)&&(B._cycle!=D))B._Done(C.AwX._this=null);if((B=C.AW._this
)&&(B._cycle!=D))B._Done(C.AW._this=null);if((B=C.O$._this)&&(B._cycle!=D))B._Done(
C.O$._this=null);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions.
_this=null);if((B=C.AeR._this)&&(B._cycle!=D))B._Done(C.AeR._this=null);if((B=C.
Bz._this)&&(B._cycle!=D))B._Done(C.Bz._this=null);if((B=C.Wk._this)&&(B._cycle!=
D))B._Done(C.Wk._this=null);if((B=C.ArY._this)&&(B._cycle!=D))B._Done(C.ArY._this=
null);if((B=C.Ant._this)&&(B._cycle!=D))B._Done(C.Ant._this=null);if((B=C.DI._this
)&&(B._cycle!=D))B._Done(C.DI._this=null);if((B=C.Aud._this)&&(B._cycle!=D))B._Done(
C.Aud._this=null);if((B=C.Al0._this)&&(B._cycle!=D))B._Done(C.Al0._this=null);if((
B=C.Avr._this)&&(B._cycle!=D))B._Done(C.Avr._this=null);if((B=C.Avs._this)&&(B._cycle
!=D))B._Done(C.Avs._this=null);if((B=C.Axk._this)&&(B._cycle!=D))B._Done(C.Axk._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */