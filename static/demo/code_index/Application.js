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
var B9=[0,0,240,320];var BC=[0,0,240,40];var EW=[0,0,20,30];var He=[6,21,14,25];var
I7=[6,15,14,19];var IH=[6,9,14,13];var OM=[209,7,229,37];var PQ=[0,40,240,320];var
PR=[0,228,240,298];var CO=" ";var E4=[0,40,240,280];var Ln=[0,40,232,280];var PT=[
0,40,116,160];var Ko=[114,40,230,160];var NY=[0,160,116,280];var PU=[116,160,232
,280];var Mw=[0,280,116,400];var SL=[116,280,232,400];var Uu=[0,400,116,520];var
Zs=[116,400,232,520];var Ww=[-1,520,115,640];var II=[232,40,240,280];var Uv=[5,40
,235,120];var Zt=[120,140,210,230];var Wx=[20,140,110,230];var Zu=[0,0,116,120];
var Uw=[0,0,120,120];var Zv=[0,0,116,45];var Zw=[0,0,8,200];var Ux=[0,0,8,20];var
Wy=[30,0,210,40];var Q4=[0,0,40,40];var Zx=[7,8,200,40];var ON=[0,0,200,40];var PV=[
6,1];var Wz="ERROR: Invalid value for ItemHighlighting";var WA=[10,10,40,30];var
WC=[0,0,120,40];var Zy=[60,0,180,40];var Zz=[120,0,240,40];var WD=[0,0,100,40];var
WE=[83,0,157,40];var SM=[140,0,240,40];var ZA=[0,0,20,40];var ZB=[220,0,240,40];
var Acf=[0,0,300,30];var Uy=[0,30,300,60];var ZC=[0,60,300,90];var Ae2=[0,90,300
,120];var ZD=[0,100,300,110];var WF=[0,50,300,60];var WG=[0,30,300,40];var ZE="*";
var Ae3=[40,40];var JN=[0,0,240,80];var Ae4=[0,0,240,50];var Lo="Cap";var Ahk=[0
,40,40,80];var AnJ=[200,40,240,80];var NZ=[30,40,210,80];var WH="--";var AnK="%d";
var Ahl="%m";var Ahm="%Y";var Acg=" (";var Uz=[0,0,232,80];var AnL="Date";var AnM=[
48,40,88,78];var Aw3=[39,40,79,80];var Aw4=[80,44,87,77];var AkG=".";var Aw5=[88
,44,120,77];var Ae5=[120,44,127,77];var Asa=[127,44,191,77];var OO=[0,0,80,40];var
SN="Text";var Aw6=[430,102,430,102];var SO=[0,0,240,240];var Asb=[232,0,240,240];
var Aw7=[0,10,240,240];var Aw8="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var Aw9="Unhandled option";
var AnN=[0,80,240,280];var Aw_="Unhandled animal list action";var Asc="Animal list content not handled.";
var KP=[0,40,240,80];var Aw$="Set Selected";var Ach="Unhandled AnimalListInfoItemMode ";
var Axa=" %%";var AF7=[0,180,240,220];var AF8=[82,127,167,150];var AF9="Group";var
AF_=[77,91,167,124];var Axb=[0,0,90,33];var AUc=[4,4,18,29];var AUd=[20,4,34,29];
var AUe=[36,4,50,29];var AUf=[52,4,66,29];var AUg=[68,4,82,29];var Asd="ERROR: Unhandled Device::SyncState";
var Axc=":\n";var PW="{1}";var Axd="{2}";var AUh=[0,49,240,109];var AUi=[0,170,240
,243];var AUj=[0,110,240,170];var AUk=[20,243,220,268];var AF$=[30,8];var AGa="\u2265 ";
var Ae6=[0,0,240,160];var AnO=[0,0,0,0];var AUl=[0,0,240,66];var AGb=[10,0,76,66
];var AkH=[33,33];var AGc=[87,0,153,66];var AGd=[164,0,230,66];var AGe="No statistics available";
var AUm="in this environment.";var AUn=" fps";var AUo="CPU: - %%";var Ae7=[0,0,240
,120];var AGf=[130,0,237,20];var Ase=[20,0,120,20];var AGg=[0,20,240,40];var AGh=[
40,20,100,40];var Axe=[100,20,240,40];var AGi=[0,40,240,60];var Axf=[40,40,100,60
];var AUp=[100,40,240,60];var AUq=[0,60,50,80];var AUr=[100,60,240,80];var AUs=[
0,80,50,100];var AGj=[100,80,240,100];var AUt=[0,100,50,120];var OP=[100,100,240
,120];var Axg=[5,5,15,15];var AUu="%H";var AUv="%M";var AUw="Time";var AUx=[79,40
,119,78];var AUy=[125,40,164,80];var AUz=[86,40,126,80];var AUA=":";var Asf=[75,
40,115,80];var Asg=[0,0,240,150];var AUB=[60,0,155,40];var AGk=[30,0,65,40];var AUC=[
60,0,100,40];var AUD=[88,0,128,40];var AUE=[60,0,71,40];var AUF=[60,0,74,40];var
AGl=[90,0,123,40];var AUG=[120,0,161,40];var AGm=[120,0,165,40];var Axh=[60,0,88
,40];var AGn=[60,0,95,40];var AUH="Did not expect iterator bigger than number of records";
var AGo=[20,0,240,20];var AUI=[0,38,240,40];var AUJ=[0,0,8,4];var Q5=[0,0,240,280
];var WI=[0,280,240,320];var AUK="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AUL="]";var AUM="ERROR: Cannot find closing bracket \'}\' in text [";var AUN=
"] opened at index ";var AUO="#";var AUP="ERROR: Invalid parameter: {";var AUQ="}";
var Ahn=[20,20];var AGp=[0,12];var AUR="ERROR: Not expected Application::FooterFocus, ";
var AUS="%M:%S";var AGq=[30,150,207,170];var AGr=[20,70,217,194];var Axi="Unhandled item.";
var Q6=[0,80,240,120];var AUT="Unhandled Overlay Menu ";var AUU="Invalid bootloader message: ";
var AUV="Unknown USBState: ";var Ash="Invalid fader";var AUW=[2,4,32,40];var AUX=[
29,4,80,40];var AUY=[120,4,200,40];var AUZ=[80,0,114,40];var AU0="-1";var AU1="< ";
var Asi=[0,0,232,40];var AU2=[22,40,180,80];var AU3=[2,40,22,80];var AU4=[23,40,
163,80];var AU5=[210,40,230,80];var AU6=[164,40,210,80];var AU7=[169,43,205,77];
var AU8="ERROR: No outlet assigned";var AU9="Unhandled screen";var AU_="ERROR: Cannot cache null screen.";
var AU$="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AGs="Untreated Rating Method type!";var Asj="Unhandled animal type";var AVa=[
5,60,235,140];var AVb=[0,130,240,196];var AVc=[49,240,229,280];var Axj="Implement in derived classes!";
var AkI="Implement in derived class";var Aho=[0,40,230,120];var Axk=[0,120,230,200
];var AnP=[0,200,230,280];var Ahp=[0,280,230,360];var AVd=[0,360,230,440];var Axl=[
230,40,238,280];var AGt="WARNING: Unhandled filter field: ";var Ae8="Should not happen.";
var AGu="Invalid Boolean item";var WJ=[0,120,240,160];var AkJ=[0,160,240,200];var
AnQ=[0,200,240,240];var AVe=[1152,11,1392,51];var AVf=[1152,51,1392,91];var AVg=[
1152,91,1392,131];var AVh=[1152,131,1392,171];var AVi=[1152,171,1392,211];var Ask=[
0,240,240,280];var AGv=[10,0,240,40];var AGw=[190,0,230,40];var AVj=[60,3,95,39];
var AVk=[95,4,200,40];var AVl=[3,3];var AVm=[6,6];var AVn=[0,4,40,40];var AVo=[39
,5,197,35];var AGx=[40,0,200,40];var AVp="Illegal shifting direction";var Axm=[0
,0,160,30];var AGy=[0,0,25,30];var AGz=[27,0,52,30];var AGA=[54,0,79,30];var AGB=[
81,0,106,30];var AGC=[108,0,133,30];var AGD=[135,0,160,30];var AVq="Internal queue error";
var AVr="ERROR: No corresponding Id ";var AVs=" found.";var AVt="ERROR: Error in range test";
var AVu=[120,67,210,157];var AVv=[0,40,240,70];var AVw=[20,67,110,157];var Axn=[
0,160,240,280];var AGE=[20,77,90,147];var AVx=[0,0,210,40];var AGF=[195,0,235,40
];var Ahq=[0,40,232,120];var WK=[0,120,232,200];var AVy=[0,40,232,200];var ZF=[0
,200,232,280];var AVz=[0,320,240,400];var AVA=[0,120,53,200];var AnR=[0,280,232,
360];var Ae9="%%";var AkK=[0,360,232,440];var AGG=[0,440,232,520];var AVB=[0,80,
207,120];var OQ=")";var AVC="/";var AVD=[5,0,88,30];var AVE=[88,0,240,30];var AVF=
"276000312345678";var Asl=[5,30,100,60];var Asm=[100,30,240,60];var AVG="Manufacturer";
var AVH="Country";var AGH=[5,60,240,90];var AGI="Niedersachsen";var AVI=[5,90,145
,120];var AGJ=[140,90,240,120];var AVJ="Protocol";var AVK=[0,0,120,100];var AGK=[
0,40,116,120];var AVL=[40,80,92,107];var AGL=[0,0,50,23];var AGM="ERROR: Unhandled Device::MeasureState";
var Axo=[0,120,240,280];var AVM=[178,159,248,203];var AVN=[10,145,170,225];var AVO=[
0,61,240,101];var AVP=[0,0,40,23];var AVQ=[101,113,141,136];var AVR=[101,235,141
,258];var AVS=[69,288,101,313];var AVT=[0,40,240,200];var Asn=[0,200,240,280];var
Aso=[0,280,240,360];var AGN="\u2264 ";var AVU=[0,80,94,160];var AVV=[94,80,184,160
];var AGO=[184,80,240,160];var AVW=[197,105,231,139];var AVX=[105,101,173,127];var
AVY=[7,101,75,127];var AVZ=[94,125,184,151];var AV0=[2,125,92,151];var AV1=[0,70
,240,101];var AV2=[0,106,240,280];var AV3=[30,40,240,70];var AV4=[0,40,30,70];var
AV5="\u278B";var AV6=[0,0,240,175];var AV7=[0,0,232,175];var AV8=[232,0,240,175];
var AV9="Text Here !";var AGP=[200,0,240,40];var AGQ="1";var Asp="2";var Axp="3";
var AGR="4";var Axq=[0,360,232,400];var Axr="ERROR: invalid item class.";var AGS=[
10,220,250,260];var AV_=[185,0,225,40];var AV$="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AWa="ERROR: Received more actions than expected!";var AGT=", ";var AWb=[
0,0,58,58];var AWc=[0,0,60,60];var AWd=[30,0,58,20];var AWe=[7,6,25,24];var AWf=[
30,60,130,160];var AWg=[0,0,28,20];var AWh=[4,3,40,24];var AWi=[0,0,42,27];var Axs=[
0,0,17,17];var AWj="Unknown direction of counting enum value: ";var AWk="Unknown id generation method enum value: ";
var Axt="Invalid animal id generation method: ";var Asq="Unhandled popup id";var
ZG="0";var Asr=";";var AWl=[0,400,230,480];var AWm=[5,120,235,200];var AWn=[0,640
,230,760];var AGU=[0,0,300,200];var AWo=[20,40,220,80];var AGV=[20,80,220,280];var
AWp=[140,0,188,40];var AWq="ERROR: Row containing birth weight could not be loaded";
var AWr=[0,440,230,520];var Ass="ID";var AWs=[40,40,198,70];var AWt="Extra info: ";
var AGW=" -";var AWu=[0,0,230,120];var AWv=[0,0,230,40];var AWw=[0,80,230,120];var
AWx="\xB0Brix";var Aci=[0,320,230,400];var AWy=[0,410,230,490];var AWz="ERROR: aNumberOfDays can not be < 0 ";
var AWA="{WEIGHTGAIN} ";var AWB="\xB1";var AGX="+";var AWC="{WEIGHTGAIN}";var AWD=
"{DAYS}";var AWE="ERROR: aString can not be null";var AWF=[166,70,240,114];var AWG=[
0,60,160,120];var AWH=[30,0,240,60];var AGY=[1,6,29,54];var AWI=[30,60,240,120];
var AWJ="Con";var AWK=[70,50,170,70];var AGZ="Unhandled Device::NaisIdValidationResult: ";
var AG0="Unhandled PopupId";var AWL=[110,123,230,248];var AWM=[5,0,250,40];var AWN=[
102,0,186,40];var AWO=[153,0,240,40];var Q7="-";var Ast=[170,0,240,40];var AG1=[
220,0,320,30];var AG2=[200,20,300,50];var AnS=[180,0,180,40];var AnT=[170,0,170,
40];var Axu="Untreated state";var AWP="ERROR: Animal id scanned in an unexpected state : ";
var AG3="ERROR: Null animal id scanned.";var AWQ=[40,40,235,100];var AWR=[120,100
,210,190];var AWS=[20,100,110,190];var AWT=[0,40,40,100];var AWU="\u278A";var AWV=
"Action untreated";var AWW="ERROR: No corresponding ";var AWX=" action found!";var
AWY="Unhandled action: ";var AWZ=[0,190,240,220];var AW0=[0,220,232,280];var AW1=[
5,190,235,270];var AW2=[232,60];var AW3=[0,2];var AW4=[58,58];var AW5="A";var AW6=[
56,0,156,40];var AnU=[156,0,240,40];var AG4=" 7 ";var AW7=[40,0,156,40];var AG5=
"/-1/-2";var AG6=[72,0,144,40];var ZH="\n";var AG7="(";var AW8=[72,0,156,40];var
AG8="%y/%m";var AW9=[70,0,240,40];var Axv=[70,0,120,40];var AW_=[160,0,245,40];var
AW$="- ";var Axw=" - ";var AXa="{parc}{clr3}";var AXb="{clr0}/^{clr2}";var AXc="{clr0}/^{clr1}";
var AG9=[0,0,85,40];var AnV="?";var AG_=[0,0,120,140];var AXd=[0,0,116,40];var AG$=[
15,0,100,40];var AHa=[110,0,200,40];var AkL=[0,0,34,34];var AXe=[129,0,157,40];var
AnW=[0,0,25,25];var AXf="\u2611";var AHb="\u2610";var AHc=[5,0,72,40];var AXg=[150
,0,240,40];var AXh=[72,0,139,40];var Axx="Unvalid content class: ";var AXi=[0,320
,240,360];var AHd=[0,360,240,400];var AXj=[144,0,170,40];var AXk=[187,0,213,40];
var AXl=[207,10,233,50];var AXm=[247,20,273,60];var AXn=[140,0,150,100];var AXo=[
165,0,175,100];var AXp=[185,0,195,100];var AXq=[205,0,215,100];var AXr=[211,0,233
,40];var AXs=[189,0,211,40];var AXt=[167,0,189,40];var AXu=[145,0,167,40];var AHe=[
5,0,240,40];var ZI=[10,0,10,40];var AXv="= \u2211 ";var Axy=[125,0,240,40];var AXw=[
130,0,170,40];var AnX="\xD8 ";var AXx=[100,10,116,36];var AXy=[117,10,133,36];var
AXz=[135,10,151,36];var AXA="Implement in derieved class";var Asu=[0,80,240,240];
var Asv=[0,120,232,160];var Asw=[0,160,232,200];var Asx=[0,200,232,240];var Asy=[
0,240,232,280];var Ae_=[0,320,232,360];var AXB=[-61,360,232,400];var AXC=[0,100];
var AXD=[0,40,240,240];var AXE=[0,50000];var AXF=[0,500];var AXG=[0,0,240,105];var
AXH=[0,105,240,210];var AXI=[0,40,240,81];var AXJ=[0,81,240,122];var AXK=[0,122,
240,163];var AXL=[0,163,240,205];var AXM=[0,205,240,240];var AXN=[0,200];var AXO=[
0,40,240,73];var Axz=[0,0,30,40];var AXP=[0,40,30,80];var AxA=[60,40];var Asz=[60
,0];var AXQ=[10,0,40,40];var AHf=[0,190,240,260];var AXR=[0,130,240,190];var AHg=[
40,40,200,130];var AHh=[90,230,170,253];var AXS=[80,190,170,223];var AXT=[0,130,
240,180];var AXU=[0,250,240,280];var AXV=[129,0,156,40];var AXW=[72,0,100,40];var
AXX=[100,0,129,40];var AXY=[78,8,103,33];var AHi=[0,0,300,120];var AXZ=[1,-1];var
AX0=[20,40,240,120];var AX1=[20,0,240,40];var AX2=[0,118,240,120];var AX3=[0,20,
130,40];var AX4=[130,20,240,40];var AX5=[0,0,10,20];var AHj="\u2191";var AX6=[230
,0,240,20];var AsA=[0,40,232,80];var AX7=[0,80,232,160];var AX8=[0,160,230,240];
var AsB=" p. p.";var AX9="Unknown animal type";var AHk=[80,0,140,40];var Bn4=[50
,0,172,40];var Bn5=[172,0,240,40];var Bn6=[0,90,240,92];var A93="Unhandled menu item";
var A94=[0,0,50,30];var AsC=[0,0,30,30];var Bn7="No AnimalActionTemperatureScreen found!";
var Bn8="840003123456789";var Bn9=[40,0,230,40];var Bn_=[50,10,230,30];var AX_="No AnimalMultiInfoScreen found!";
var AHl=[0,0,25,40];var A95="/^";var A96="?/?";var Bn$=[100,4,180,40];var Boa=[65
,0,99,40];var Bob=[165,0,200,40];var A97=[0,0,60,40];var A98="9999/^9999";var Boc=
"Invalid index: ";var Bod="Unknown AnimalIdGenerationMethod: ";var Boe="Invalid gender: ";
var AsD="Invalid input state: ";var Bof="Unhandled AnimalIdGenerationMethod";var
Bog=[42,35,67,75];var Boh=[5,35,39,75];var Boi=[70,40,228,70];var Boj="Invalid direction for setting focus";
var Ahr="Invalid index";var Bok="Unvalid direction";var Bol=[0,0,42,30];var A99=[
22,0,42,30];var Bom=[20,0,40,30];var Bon=[0,0,158,30];var A9_=[32,0,62,30];var A9$=[
64,0,94,30];var A_a=[96,0,126,30];var Boo=[128,0,158,30];var Bop=" %% ";var Boq=[
0,70,240,220];var Bor=[0,237,240,307];var A_b="\n44 %% done";var Bos=[0,0,166,30
];var AHm=[0,0,12,30];var AxB=[14,0,26,30];var AX$=[28,0,40,30];var AYa=[42,0,54
,30];var AYb=[56,0,68,30];var AYc=[70,0,82,30];var AYd=[84,0,96,30];var AYe=[98,
0,110,30];var A_c=[112,0,124,30];var AYf=[126,0,138,30];var Bot=[140,0,152,30];var
Bou=[154,0,166,30];var A_d=[20,0,46,30];var Bov="\u2642";var Bow="{fnt3}\u2642{fnt1}";
var Box="\u2640";var Boy="{fnt3}\u2640{fnt1}";var Boz="{parc}";var BoA=[30,30,210
,80];var BoB="Implement in derieved class!";var BoC=[60,4,226,34];var A_e=[30,4,
58,34];var A_f=[4,0,27,40];var BoD=[116,4,228,34];var BoE=[60,4,86,34];var BoF=[
88,4,114,34];var AnY="Implement in derived class!";var A_g="Implement in derived class.";
var BoG="Invalid nais id view: ";var BoH=[0,35,240,75];var BoI=[0,0,110,30];var BoJ=[
0,0,26,30];var BoK="100";var AYg="\n\n";var BoL=[240,240];var BoM=[0,240];var BoN=
"Unknown rated attribute: ";var BoO=[120,80,240,280];var BoP=[0,80,120,280];var AHn=
" %% (";var AxC=" \xB1 ";var AxD=" (n = ";var AYh=[0,80,232,120];var BoQ=[0,242,
232,282];var AYi=[0,280,232,320];var BoR=[35,0,200,40];var BoS=[1,0,31,40];var BoT=[
32,40];var BoU=[32,0];var BoV=[3,0,83,40];var A_h=[180,0,240,40];var BoW=[120,0,
180,40];var BoX=[65,0,125,40];var BoY=[0,0,120,200];var BoZ=[0,40,120,150];var A_i=[
15,160,60,190];var A_j=[60,160,105,190];var Bo0=[0,65,240,135];var Bo1=[10,112,170
,192];var Bo2=[178,129,248,173];var Bo3=[0,40,240,110];var Bo4=[10,98,170,178];var
Bo5=[178,112,248,156];var Bo6=[85,190,160,265];var Bo7=[89,194,155,260];var Bo8=[
26,190,111,250];var Bo9=[125,181,225,211];var Bo_=[100,220,183,250];var Bo$="38.7";
var Bpa=[180,220,225,250];var Bpb="\xB0C";var Bpc=[0,99,240,178];var Bpd=[100,280
,140,320];var Bpe=[0,26,240,105];var A_k=[30,40];var A_l=[30,0];var Bpf=[149,0,200
,40];var Bpg=[145,40];var Bph=[145,0];var Bpi=[38,0,88,40];var A_m=[0,0,35,40];var
Bpj=[0,0,50,40];var Bpk=[95,0,145,40];var Bpl=[65,5,223,35];var AYj=[0,0,15,40];
var Bpm=[72,0,140,40];var A_n="\n(";var Bpn="%y/%m/%d";var Bpo="%y ";var Bpp=" %m ";
var Bpq=" %d ";var Bpr="20";var Bps=[225,0,240,40];var Bpt=[0,400,232,440];var Bpu=[
0,440,232,480];var Bpv=[0,480,232,520];var Bpw=[0,520,232,560];var Bpx=[0,560,232
,600];var Bpy=[0,598,232,638];var Bpz=[5,0,215,40];var BpA=[215,8,240,33];var BpB=
"Implement in dervied class.";var BpC="ERROR: Unhandled temperature unit: ";var AHo=
"ERROR: Unhandled mass unit: ";var BpD=[-1,160,115,280];var BpE=[114,160,230,280
];var AYk=[116,40,232,160];var AxE="Unknown weight class index: ";var BpF="< 35";
var BpG="35 - 40";var BpH="40 - 45";var BpI="45 - 50";var BpJ="\u2265 50";var BpK=
"< 80";var BpL="80 - 90";var BpM="90 - 100";var BpN="100 - 110";var BpO="\u2265 110";
var A_o="Unknown mass unit";var BpP=[143,0,193,40];var A_p=[192,0,240,40];var BpQ=[
44,28,44,28];var BpR="0 %%";var BpS=[-1,40,115,160];var BpT=[117,40,233,160];var
BpU=[1,160,117,280];var BpV=[114,158,230,278];var BpW=[1,280,117,400];var BpX=[30
,0,155,40];var A_q="\u2620";var A_r=[380,150,380,190];var A_s=[105,0,155,50];var
A_t=[190,1,240,41];var BpY=[72,0,108,40];var BpZ=[108,0,180,40];var Bp0=[60,0,94
,40];var Bp1=[94,0,200,40];var Bp2="Scroll direction not supported.";var Bp3=[44
,0,207,40];var Bp4=[207,0,240,40];var Bp5="99";var Bp6="Unknown birth type";var Bp7=[
44,0,189,40];var Bp8=[5,0,44,40];var Bp9=[44,0,240,40];var Bp_=[240,0,240,40];var
Bp$="\u25C9";var A_u="\u25CB";var Bqa=[75,4,215,34];var Bqb=[47,4,73,34];var A_v=[
17,4,45,34];var Bqc=[0,0,138,30];var Bqd=[47,4,215,34];var AYl="Unhandled MotherSelectionFilterMode: ";
var Bqe="Read only!";var Bqf="actions array too small to hold all actions";var Bqg=[
120,40];var Bqh=[120,0];var Bqi=[5,0,115,40];var Bqj=[0,0,205,40];var Bqk=[0,1,37
,37];var Bql=[40,4,170,34];var Bqm=[175,1,205,37];var Bqn=[0,0,37,40];var Bqo=[115
,98,205,188];var Bqp=[0,40,235,100];var Bqq=[2,200,240,280];var Bqr=" 01234";var
Bqs=[0,0];var Bqt=[33,63];var Bqu=[25,56];var Bqv="Unknown transponder image type: ";
var AHp=[0,0,82,82];var Bqw=[0,0,81,26];var Bqx=[105,120,195,210];var Bqy=[10,140
,100,230];var A_w="Unhandled EartagNrAssignmentMode: ";var Bqz="Unhandled Gender";
var BqA=[10,35,35,75];var BqB=[44,40,202,70];var BqC=[204,35,232,75];var A_x="Unhandled BackupError: ";
var BqD="Unvalid FatoryResetScope";var BqE="Unhandled PopupId: ";var BqF=[-4,160
,236,240];var BqG=[144,0,192,40];var BqH=[144,0,240,40];var BqI=[195,0,245,50];var
BqJ=[120,0,120,40];var BqK=[140,0,240,30];var BqL=[30,0,232,40];var BqM=[60,0,160
,40];var BqN=[160,0,200,40];var BqO=[150,17,200,40];var BqP=[155,40];var BqQ=[155
,0];var BqR=[146,80,240,160];var BqS=[56,80,146,160];var BqT=[0,80,56,160];var BqU=[
13,107,47,141];var BqV=[74,109,104,139];var BqW=[50,100,130,150];var BqX=[55,112
,145,140];var BqY=[146,112,236,140];var BqZ=[150,86,223,110];var AHq=[0,40,240,120
];var Bq0="Menu item for animal table field not found";var Bq1=[0,120,240,200];var
A_y=[0,360,240,440];var Bq2=[0,440,240,520];var Bq3=[5,40,235,104];var Bq4=[120,
108,226,218];var Bq5=[20,120,110,210];var Bq6=[5,223,235,280];var Bq7=[0,0,64,30
];var Bq8=[44,0,64,30];var Bq9=[185,5,225,35];var Bq_=[170,5,234,35];var Bq$="Unhandled number of digits";
var Bra=[0,0,126,30];var Brb=[22,5,149,35];var Brc=[149,0,232,40];var A_z=[5,20];
var Brd=[5,0];var Bre="Unhandled AnimalIdAutoGenerationMethod: ";var Brf=[4,440,
236,520];var Brg="Unhandled TransponderAssignmentIdChangeMethod: ";var Brh="\n";
var Bri="%";var Brj=[0,0,160,120];var Brk=[2,2,157,117];var Brl=[50,70];var Brm=[
50,50];var Brn="Unhandled data export destination ";var Bro=[0,0,168,40];var Brp=[
168,0,240,40];var Brq=[0,47,232,77];var Brr=[121,17,171,40];var A_A=[0,40,230,280
];var Brs="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var Brt="ERROR: Received more animal table fields than expected!";
C.ALi={Device:null,A4j:null,Gx:null,Init:function(aArg){},DriveCursorHitting:function(
SQ,BD,E6){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.Gx._Init.call(this.
Gx={I:this},0);this.__proto__=C.ALi;this.H(B9);this.J(this.Gx,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A4j=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lp=
this._variants();if(Lp){this.K={};Lp._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.Gx._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.Gx.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A4j)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gx)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acp.A3f._variants();
},K:null,_className:"Application::Application"};C.ArN=[240,320];C.AB={Background:
null,D$:null,AB3:null,AnA:0,Init:function(aArg){A.pe([this,this.AYV],this);A.pe([
this,this.Bcw],this);},LE:function(G){},AYV:function(s){this.LE(s);},CJ:function(
G){},AHs:function(s){this.CJ(s);},Fd:function(G){},AxF:function(s){this.Fd(s);},
Dr:function(E){if(this.AB3===E)return;this.AB3=E;A.pe([this,this.Bcw],this);},Bcw:
function(G){var B;if(!!this.AB3)this.D$.Aby((C.BO.isPrototypeOf(B=A._NewObject(this.
AB3,0))?B:null));else this.D$.Aby(null);},_Init:function(aArg){C.AaH._Init.call(
this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);C.D$._Init.call(this.
D$={I:this},0);this.__proto__=C.AB;this.Background.AW(0x3F);this.Background.H(B9
);this.Background.L(A.jb.C0);this.D$.H(BC);this.D$.Ar(false);this.J(this.Background
,-1);this.J(this.D$,0);this.Init(aArg);},_Done:function(){this.__proto__=C.AaH;this.
Background._Done();this.D$._Done();C.AaH._Done.call(this);},_ReInit:function(){C.
AaH._ReInit.call(this);this.Background._ReInit();this.D$._ReInit();},_Mark:function(
D){var B;C.AaH._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.Wf={Ky:null,YT:function(E){var B;if(this.Ky===E)return;if(!!this.Ky)this.ApZ(
this.Ky,null,null,null,[B=this.Ky,B.AxF],null,false);this.Ky=E;if(!!this.Ky)this.
Akf(this.Ky,null,null,null,null,null,null,[B=this.Ky,B.AHs],null,false);},ADj:function(
){return this.Ky;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Wf;this.H([0,0,C.ArN[0],C.ArN[1]]);},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.Ky)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Oj={UH:null,Q:null,Ang:null,Y1:null,NF:null,Oh:null,Tk:null,Tl:null,AE1:255,
OX:function(G){var F;if(!!this.Q){this.A0p();var AcC=(F=this.Q,F[1].call(F[0]));
if(AcC>20)this.Oh.L(A.jb.EU);else this.Oh.L(A.jb.FW);this.Oh.L((this.Oh.AP&0x00FFFFFF
)|(this.Alb(AcC,0,30)<<24));this.Tk.L((this.Tk.AP&0x00FFFFFF)|(this.Alb(AcC,31,60
)<<24));this.Tl.L((this.Tl.AP&0x00FFFFFF)|(this.Alb(AcC,61,100)<<24));}},AYT:function(
s){this.OX(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.AYT],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.AYT],E,0);if(!!E)A.pe([this,
this.AYT],this);},A1A:function(G){var F;if(!!this.Ang)this.Y1.Ar((F=this.Ang,F[1
].call(F[0])));else this.Y1.Ar(false);this.A8o(255);},A8h:function(E){if(A.aaZ(this.
Ang,E))return;if(!!this.Ang)A.z$([this,this.A1A],this.Ang,0);this.Ang=E;if(!!E)A.
zX([this,this.A1A],E,0);if(!!E)A.pe([this,this.A1A],this);},A8o:function(E){if(this.
AE1===E)return;this.AE1=E;if(!!this.UH)this.UH.L((this.UH.AP&0x00FFFFFF)|((E&0xFF
)<<24));},Alb:function(AYZ,A$R,Buv){if(AYZ<A$R)return 0;else if((AYZ>=A$R)&&(AYZ<
Buv))return this.AE1&0xFF;else return 255;},A0p:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.UH=this.Tl;else if((F=this.Q,F[1].call(F[0]))>
30)this.UH=this.Tk;else this.UH=this.Oh;}else this.UH=null;},BiE:function(){return this.
AE1;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.Y1._Init.call(this.Y1={
I:this},0);A.acg.Am._Init.call(this.NF={I:this},0);A.acg.AI._Init.call(this.Oh={
I:this},0);A.acg.AI._Init.call(this.Tk={I:this},0);A.acg.AI._Init.call(this.Tl={
I:this},0);this.__proto__=C.Oj;this.H(EW);this.Y1.Ff(2000);this.NF.H(EW);this.NF.
L(A.jb.Text);this.Oh.H(He);this.Oh.L(A.jb.EU);this.Tk.H(I7);this.Tk.L(A.jb.EU);this.
Tl.H(IH);this.Tl.L(A.jb.EU);this.J(this.NF,0);this.J(this.Oh,0);this.J(this.Tk,0
);this.J(this.Tl,0);this.Y1.Q=[this,this.BiE,this.A8o];this.NF.Ax(A.aaL(A.ach.ALt
));},_Done:function(){this.__proto__=A.Core.O;this.Y1._Done();this.NF._Done();this.
Oh._Done();this.Tk._Done();this.Tl._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Y1._ReInit();this.NF._ReInit();this.Oh._ReInit(
);this.Tk._ReInit();this.Tl._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.UH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ang)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Y1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Oh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tl)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.Y1={_Init:function(aArg){A.acl.FZ._Init.call(
this,aArg);this.__proto__=C.Y1;this.Akq=true;this.BY=0;this.Cq=255;},_className:
"Application::PulseAnimation"};C.D$={Gx:null,AQ:null,Background:null,Oj:null,Bk:
null,Df:null,KZ:0,AuF:0,AuG:0,Aon:0,Ly:false,Kv:false,Qb:false,Ai:function(Ae){var
B;A.Core.O.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10);var Fi=((Ae&0x20)===0x20);
var Gq=this.Bk.Bv;if(!G2){this.Aon=A.jb.C0;this.KZ=A.jb.Text;}else if(Gq){this.Aon=
this.AuF;this.KZ=this.AuG;}else if(Fi){this.Aon=this.AuF;this.KZ=this.AuG;}else{
this.Aon=A.jb.C0;this.KZ=A.jb.Text;}this.Background.L(this.Aon);if(!!this.Gx){this.
Gx.Abw(this.Aon);this.Gx.C7(this.KZ);}this.Ly=G2;this.Kv=Fi;this.Qb=Gq;},Qa:function(
G){this.An();A.pe(this.AQ,this);},Aig:function(G){if(this.Df.AbO)return;this.An(
);if(this.Bk.Bv){A.pe(this.AQ,this);this.Bk.Ar(false);}this.Bk.Ar(true);},Aby:function(
E){if(this.Gx===E)return;if(!!this.Gx)this.HH(this.Gx);this.Gx=E;if(!!this.Gx)this.
J(this.Gx,0);this.A8(E);this.An();},A72:function(E){if(this.AuF===E)return;this.
AuF=E;this.An();},A73:function(E){if(this.AuG===E)return;this.AuG=E;this.An();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={
I:this},0);C.Oj._Init.call(this.Oj={I:this},0);A.Core.Timer._Init.call(this.Bk={
I:this},0);A.Core.BJ._Init.call(this.Df={I:this},0);this.__proto__=C.D$;var B;this.
H(BC);this.Background.AW(0x3F);this.Background.H(BC);this.Background.L(A.jb.C0);
this.Oj.H(OM);this.KZ=A.jb.Text;this.Bk.PC(0);this.Bk.V8(50);this.Df.Filter=1;this.
AuF=A.jb.AR;this.AuG=A.jb.Bh;this.Aon=A.jb.Text;this.J(this.Background,0);this.J(
this.Oj,0);this.Oj.Au([B=A._GetAutoObject(A.Device.Device),B.Avl,B.AxG]);this.Oj.
A8h([B=A._GetAutoObject(A.Device.Device),B.Avo,B.AxH]);this.Bk.Mp=[this,this.Qa];
this.Df.BK=[this,this.Aig];},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Oj._Done();this.Bk._Done();this.Df._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.
Oj._ReInit();this.Bk._ReInit();this.Df._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Gx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Oj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.Xy={Ad$:null,Ue:null,CJ:function(G){if(this.K&&this.K.CJ
)return this.K.CJ.apply(this,arguments);else return C.AB.CJ.apply(this,arguments
);},Fd:function(G){if(this.K&&this.K.Fd)return this.K.Fd.apply(this,arguments);else
return C.AB.Fd.apply(this,arguments);},_Init:function(aArg){C.AB._Init.call(this
,aArg);A.acg.Am._Init.call(this.Ad$={I:this},0);A.acg.Text._Init.call(this.Ue={I:
this},0);this.__proto__=C.Xy;this.Ad$.H(PQ);this.Ue.H(PR);this.Ue.R(A.jV);this.Ue.
L(A.jb.Text);this.Ue.Y(false);this.J(this.Ad$,0);this.J(this.Ue,0);this.Ad$.Ax(null
);this.Ue.S(A.aaL(A.fl.Ez));var Lp=this._variants();if(Lp){this.K={};Lp._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AB;this.Ad$._Done();this.Ue._Done();C.AB._Done.call(this);},_ReInit:function(){
C.AB._ReInit.call(this);this.Ad$._ReInit();this.Ue._ReInit();this.Ue.S(A.aaL(A.fl.
Ez));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Ad$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ue)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.
Xy._variants();},K:null,_className:"Application::BootScreen"};C.AS$={Azz:function(
G){A._GetAutoObject(C.AY).AgY(2);},_Init:function(aArg){C.AB._Init.call(this,aArg
);this.__proto__=C.AS$;this.Background.L(0xFF000000);this.D$.Y(false);},_className:
"Application::SleepScreen"};C.AuS={DO:null,Z:null,XK:null,XL:null,Vd:null,XB:null
,Ve:null,Xz:null,XE:null,Tp:null,XD:null,XM:null,Av:null,CT:function(){this.DD(this
);},Init:function(aArg){var B;A.zX([this,this.DD],[B=A._GetAutoObject(A.Device.Device
),B.AqM,B.AsE],0);A._GetAutoObject(A.Device.Helper).Aki();this.A8(this.Vd);this.
N.Cm(A.aaL(A.ach.ACw));A.pe([this,this.DD],this);},A8:function(E){var B;var A0$=
this.AR;C.AB.A8.call(this,E);if((this.AR!==A0$)&&(!!this.AR&&((this.AR.T&0x400)===
0x400))){var AIF=A._NewObject(A.acl.AEY,0);AIF.Ff(250);AIF.HF(1);AIF.Wa(6);this.
Z.Hx(this.AR,true,AIF,null);}},CJ:function(G){this.A2A(this);A._GetAutoObject(A.
Device.Device).Aq.Bm(null);A._GetAutoObject(A.Device.Device).Bq.Bm(null);A._GetAutoObject(
A.Device.Helper).Aki();A._GetAutoObject(A.Device.Helper).ArH();},E9:function(G){
var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.
Av.Mn(-this.Z.Bp[1]);},H9:function(G){var Cr=(C.Fc.isPrototypeOf(G)?G:null);if(!
Cr)return;if(Cr===this.Vd)A._GetAutoObject(C.AY).B1(35);else if(Cr===this.XB)A._GetAutoObject(
C.AY).B1(34);else if(Cr===this.XE)A._GetAutoObject(C.AY).B1(78);else if(Cr===this.
Ve)A._GetAutoObject(C.AY).B1(8);else if(Cr===this.Xz)A._GetAutoObject(C.AY).B1(56
);else if(Cr===this.Tp)A._GetAutoObject(C.AY).B1(25);else if(Cr===this.XK)A._GetAutoObject(
C.AY).B1(88);else if(Cr===this.XL)A._GetAutoObject(C.AY).B1(79);else if(Cr===this.
XM)A._GetAutoObject(C.AY).B1(6);else if(Cr===this.XD)A._GetAutoObject(C.AY).B1(72
);},Bxx:function(G){A._GetAutoObject(A.Device.Device).Aem(!A._GetAutoObject(A.Device.
Device).Amk);},DD:function(G){if(A._GetAutoObject(A.Device.Device).Amk)this.N.Hm((
A.aaR(A.acf.A5L)+CO)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hm((A.aaR(A.acf.
A5L)+CO)+A.aaR(A.acf.A6s).toLowerCase());},Xb:function(G){A._GetAutoObject(A.Device.
Device).Cj(1);},A2A:function(G){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(
A.Device.Helper).MZ());this.Ve.YY(A._GetAutoObject(A.Device.Device).Aq.Ch().toFixed(
));},G4:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.acg.AI._Init.call(this.DO={I:this},0);A.Core.Z._Init.call(this.
Z={I:this},0);C.Fc._Init.call(this.XK={I:this},0);C.Fc._Init.call(this.XL={I:this
},0);C.Fc._Init.call(this.Vd={I:this},0);C.Fc._Init.call(this.XB={I:this},0);C.QD.
_Init.call(this.Ve={I:this},0);C.Fc._Init.call(this.Xz={I:this},0);C.Fc._Init.call(
this.XE={I:this},0);C.Fc._Init.call(this.Tp={I:this},0);C.Fc._Init.call(this.XD={
I:this},0);C.Fc._Init.call(this.XM={I:this},0);C.Av._Init.call(this.Av={I:this},
0);this.__proto__=C.AuS;this.Background.L(A.jb.C0);this.N.Ar(false);this.N.Y(true
);this.Dr(C.Aqf);this.DO.AW(0x3F);this.DO.H(E4);this.DO.L(A.jb.CE);this.Z.H(Ln);
this.Z.Kb(9);this.XK.H(PT);this.XK.Aj(true);this.XK.U(A.aaR(A.acf.Gb));this.XL.H(
Ko);this.XL.Aj(true);this.XL.U(A.aaR(A.acf.A58));this.Vd.H(NY);this.Vd.Aj(true);
this.Vd.U(A.aaR(A.acf.Tb));this.XB.H(PU);this.XB.Aj(true);this.XB.U(A.aaR(A.acf.
O5));this.Ve.H(Mw);this.Ve.Aj(true);this.Ve.U(A.aaR(A.acf.AOh));this.Xz.H(SL);this.
Xz.Aj(true);this.Xz.U(A.aaR(A.acf.Animal));this.XE.H(Ko);this.XE.Aj(true);this.XE.
U(A.aaR(A.acf.A5O));this.Tp.H(Uu);this.Tp.Ar(true);this.Tp.Aj(true);this.Tp.Y(true
);this.Tp.U(A.aaR(A.acf.A4C));this.XD.H(Zs);this.XD.Aj(true);this.XD.U(A.aaR(A.acf.
Device));this.XM.H(Ww);this.XM.Aj(true);this.XM.U(A.aaR(A.acf.Settings));this.Av.
H(II);this.J(this.DO,0);this.J(this.Z,0);this.J(this.XK,0);this.J(this.XL,0);this.
J(this.Vd,0);this.J(this.XB,0);this.J(this.Ve,0);this.J(this.Xz,0);this.J(this.XE
,0);this.J(this.Tp,0);this.J(this.XD,0);this.J(this.XM,0);this.J(this.Av,0);this.
N.Cw=[this,this.Bxx];this.N.Cg=[this,this.Xb];this.Z.Ei=[this,this.G4];this.XK.AQ=[
this,this.H9];this.XK.Dz(A.aaL(A.ach.ACA));this.XL.AQ=[this,this.H9];this.XL.Dz(
A.aaL(A.ach.ACD));this.Vd.AQ=[this,this.H9];this.Vd.Dz(A.aaL(A.ach.AOl));this.XB.
AQ=[this,this.H9];this.XB.Dz(A.aaL(A.ach.AOv));this.Ve.AQ=[this,this.H9];this.Ve.
Dz(A.aaL(A.ach.AOV));this.Xz.AQ=[this,this.H9];this.Xz.Dz(A.aaL(A.ach.AOo));this.
XE.AQ=[this,this.H9];this.XE.Dz(A.aaL(A.ach.AO2));this.Tp.AQ=[this,this.H9];this.
Tp.Dz(A.aaL(A.ach.AOK));this.XD.AQ=[this,this.H9];this.XD.Dz(A.aaL(A.ach.AOH));this.
XM.AQ=[this,this.H9];this.XM.Dz(A.aaL(A.ach.APi));this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.DO._Done();this.Z._Done();this.XK._Done();this.XL._Done(
);this.Vd._Done();this.XB._Done();this.Ve._Done();this.Xz._Done();this.XE._Done(
);this.Tp._Done();this.XD._Done();this.XM._Done();this.Av._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.DO._ReInit();this.Z._ReInit(
);this.XK._ReInit();this.XL._ReInit();this.Vd._ReInit();this.XB._ReInit();this.Ve.
_ReInit();this.Xz._ReInit();this.XE._ReInit();this.Tp._ReInit();this.XD._ReInit(
);this.XM._ReInit();this.Av._ReInit();this.XK.U(A.aaR(A.acf.Gb));this.XL.U(A.aaR(
A.acf.A58));this.Vd.U(A.aaR(A.acf.Tb));this.XB.U(A.aaR(A.acf.O5));this.Ve.U(A.aaR(
A.acf.AOh));this.Xz.U(A.aaR(A.acf.Animal));this.XE.U(A.aaR(A.acf.A5O));this.Tp.U(
A.aaR(A.acf.A4C));this.XD.U(A.aaR(A.acf.Device));this.XM.U(A.aaR(A.acf.Settings)
);this.CT();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.DO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Vd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ve)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.XE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeScreen"};C.QT={Number:null,I5:null,IG:null,Ti:null,Ar4:0,Init:
function(aArg){var B;A.zX([this,this.A$v],[B=A._GetAutoObject(A.Device.Device),B.
ARd,B.AYB],0);A.pe([this,this.A$v],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);
this.AnB();},CJ:function(G){A._GetAutoObject(A.Device.Device).AeN();},Fd:function(
G){A._GetAutoObject(A.Device.Device).Anu();},Alw:function(G){var F;this.An();this.
Ti.Ar(A._GetAutoObject(A.Device.Device).ScanState===1);if(A._GetAutoObject(A.Device.
Device).ScanState===2)A._GetAutoObject(A.Device.Helper).AdN.Ar(true);if(!this.Ti.
Bv)(F=this.Ti.Q,F[2].call(F[0],this.Ti.BY));},A$v:function(s){this.Alw(s);},AnB:
function(){switch(A._GetAutoObject(A.Device.Device).ScanState){case 4:this.Background.
L(A.jb.FW);break;case 3:this.Background.L(A.jb.HZ);break;default:this.Background.
L(A.jb.CE);}},Aj$:function(E){if(this.Ar4===E)return;this.Ar4=E;this.I5.Aj$(E);}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Number={
I:this},0);C.I5._Init.call(this.I5={I:this},0);A.acg.Am._Init.call(this.IG={I:this
},0);A.acl.FZ._Init.call(this.Ti={I:this},0);this.__proto__=C.QT;var B;this.Background.
L(A.jb.CE);this.N.Y(false);this.Number.H(Uv);this.Number.KI(true);this.Number.L(
A.jb.Text);this.I5.H(Zt);this.I5.Aj$(0);this.IG.H(Wx);this.IG.L(A.jb.AR);this.IG.
YU(true);this.Ti.Ff(1750);this.Ti.T1(750);this.Ti.Aj4(0);this.Ti.Ar(true);this.Ti.
BY=3;this.J(this.Number,0);this.J(this.I5,0);this.J(this.IG,0);this.Number.S(A.aaL(
A.fl.Ah));this.IG.Ax(A.aaL(A.ach.ACC));this.Ti.Q=[B=this.IG,B.AQ1,B.Ct];this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.Number._Done();this.I5._Done();
this.IG._Done();this.Ti._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.Number._ReInit();this.I5._ReInit();this.IG._ReInit();this.
Ti._ReInit();this.Number.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.Number)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ti)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScanScreen"};C.Fc={
C5:null,ACn:null,AQ:null,Bk:null,Df:null,Background:null,Mh:null,Oo:null,QJ:null
,GU:null,A3R:true,Ly:false,Kv:false,Qb:false,Init:function(aArg){},Bg:function(aSize
){var B;C.G7.Bg.call(this,aSize);this.Mh.H([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.
QJ.H([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);this.Oo.H(this.QJ.M);this.GU.
H([].concat(0,this.GU.M.slice(1,4)));this.GU.H(A.abN(this.GU.M,aSize[0]));this.GU.
H(A.abP(this.GU.M,0));this.GU.H([].concat(this.GU.M.slice(0,3),47));},Ai:function(
Ae){var B;C.G7.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10);var Fi=((Ae&0x20)===0x20
);var Gq=this.Bk.Bv;if(!G2){this.QJ.L(A.jb.Amz);this.GU.L(A.jb.CE);this.Oo.Y(true
);this.Oo.L(A.jb.APv);this.Mh.Y(false);}else if(Gq){this.QJ.L(A.jb.Bh);this.GU.L(
A.jb.Bh);this.Oo.Y(false);this.Mh.Y(true);}else if(Fi){this.QJ.L(A.jb.Bh);this.GU.
L(A.jb.Bh);this.Oo.Y(false);this.Mh.Y(true);}else{this.QJ.L(A.jb.Text);this.GU.L(
A.jb.Text);this.Oo.Y(true);this.Oo.L(A.jb.C0);this.Mh.Y(false);}this.Ly=G2;this.
Kv=Fi;this.Qb=Gq;},Qa:function(G){this.An();A.pe(this.AQ,this);},Aig:function(G){
if(this.Df.AbO)return;this.An();if(this.Bk.Bv){A.pe(this.AQ,this);this.Bk.Ar(false
);}this.Bk.Ar(true);},U:function(E){if(this.DE===E)return;this.DE=E;this.GU.R(E);
},Dz:function(E){if(this.C5===E)return;this.C5=E;this.QJ.Ax(E);this.Oo.Ax(E);},Abx:
function(E){if(this.A3R===E)return;this.A3R=E;this.GU.Y(E);},AbA:function(E){if(
this.ACn===E)return;this.ACn=E;this.Mh.Ax(E);this.Mh.H(A.abK(this.Mh.M,E.FrameSize
));},_Init:function(aArg){C.G7._Init.call(this,aArg);A.Core.Timer._Init.call(this.
Bk={I:this},0);A.Core.BJ._Init.call(this.Df={I:this},0);A.acg.AI._Init.call(this.
Background={I:this},0);A.acg.Am._Init.call(this.Mh={I:this},0);A.acg.Am._Init.call(
this.Oo={I:this},0);A.acg.Am._Init.call(this.QJ={I:this},0);C.CP._Init.call(this.
GU={I:this},0);this.__proto__=C.Fc;this.H(Zu);this.Bk.PC(0);this.Bk.V8(50);this.
Df.Filter=1;this.Background.H(Uw);this.Background.Y(false);this.Mh.AW(0x14);this.
Mh.L(A.jb.AR);this.Mh.Ct(0);this.Oo.L(A.jb.C0);this.Oo.Ct(1);this.GU.H(Zv);this.
J(this.Background,0);this.J(this.Mh,0);this.J(this.Oo,0);this.J(this.QJ,0);this.
J(this.GU,0);this.Bk.Mp=[this,this.Qa];this.Df.BK=[this,this.Aig];this.Mh.Ax(A.aaL(
A.ach.NI));this.Oo.Ax(A.aaL(A.ach.Au3));this.QJ.Ax(A.aaL(A.ach.Au3));this.GU.S(A.
aaL(A.fl.Ah));this.GU.A5(A.aaL(A.fl.Ak));this.GU.CC(A.aaL(A.fl.By));this.ACn=A.aaL(
A.ach.NI);this.Init(aArg);},_Done:function(){this.__proto__=C.G7;this.Bk._Done();
this.Df._Done();this.Background._Done();this.Mh._Done();this.Oo._Done();this.QJ.
_Done();this.GU._Done();C.G7._Done.call(this);},_ReInit:function(){C.G7._ReInit.
call(this);this.Bk._ReInit();this.Df._ReInit();this.Background._ReInit();this.Mh.
_ReInit();this.Oo._ReInit();this.QJ._ReInit();this.GU._ReInit();this.GU.S(A.aaL(
A.fl.Ah));this.GU.A5(A.aaL(A.fl.Ak));this.GU.CC(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.G7._Mark.call(this,D);if((B=this.C5)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.ACn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Df)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Mh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Oo)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GU
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"};C.
Av={Awl:null,Background:null,OI:null,Arw:0,AkB:10,Ai8:100,AP:0,Aoh:true,Bg:function(
aSize){A.Core.O.Bg.call(this,aSize);this.Background.H([0,0,aSize[0],aSize[1]]);this.
OI.H([].concat(2,this.OI.M.slice(1,4)));this.OI.H(A.abN(this.OI.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.O.Ai.call(this,Ae);var Afv=this.AkB<this.Ai8;var AIc=(
B=this.M)[3]-B[1];var A00=10;var AtJ=AIc;var A2w=0;if(10>AIc)A00=AIc;if(this.AkB<
this.Ai8)AtJ=((AtJ*this.AkB)/this.Ai8)|0;if(AtJ<A00)AtJ=A00;if(this.AkB<this.Ai8
)A2w=((this.BiD()*(AIc-AtJ))/(this.Ai8-this.AkB))|0;this.OI.H(A.abP(this.OI.M,A2w
));this.OI.H([].concat(this.OI.M.slice(0,3),A2w+AtJ));this.OI.Y(Afv);this.Background.
Y(Afv);if(!!this.Awl&&(this.Aoh!==Afv))A.pe(this.Awl,this);this.Aoh=Afv;},BiD:function(
){var E=this.Arw;var Hq=this.Ai8-this.AkB;if((Hq>0)&&(E>Hq))E=Hq;if(Hq<=0)E=0;return E;
},Mn:function(E){if(E<0)E=0;if(this.Arw===E)return;this.Arw=E;this.An();},Mo:function(
E){if(E<0)E=0;if(this.AkB===E)return;this.AkB=E;this.An();},Mm:function(E){if(E<
0)E=0;if(this.Ai8===E)return;this.Ai8=E;this.An();},L:function(E){if(this.AP===E
)return;this.AP=E;this.OI.L(E);},BkM:function(E){if(A.aa0(this.Awl,E))return;this.
Awl=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(
this.Background={I:this},0);A.acg.AI._Init.call(this.OI={I:this},0);this.__proto__=
C.Av;this.H(Zw);this.Ar(false);this.AP=A.jb.AR;this.Background.AW(0x0);this.Background.
H(Ux);this.Background.L(A.jb.C0);this.OI.AW(0x0);this.OI.H(Ux);this.OI.L(A.jb.AR
);this.J(this.Background,0);this.J(this.OI,0);},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.OI._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.OI._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Awl)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cu={G8:null,Z:null,Av:null,Am:null,A5d:A.jV,Init:function(aArg){A.pe([this,this.
Az7],this);},Du:function(G){var B;C.AB.Du.call(this,G);this.An();if(!!this.AR&&((
this.AR.T&0x400)===0x400))this.Z.Hx(this.AR,true,null,null);this.Az7(this);},Als:
function(G){if(!!this.N.Cw)A.pe(this.N.Cw,this);},Ao$:function(G){if(!!this.N.Cb
)A.pe(this.N.Cb,this);},Azz:function(G){if(!!this.N.Cg)A.pe(this.N.Cg,this);},E9:
function(G){var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.Z.M)[
3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);A.pe([this,this.BxT],this);},Az7:function(G){
var B;var Hs=(C.Ci.isPrototypeOf(B=this.AR)?B:null);this.N.Hm(A.jV);this.N.CS(A.
aaL(A.ach.Vz));this.N.Cw=[this,this.Ee];if(!!Hs&&!!Hs.AlT){this.N.FA(A.jV);this.
N.Kl.Ds(255);this.N.Aq5(Hs.Ap9);this.N.Cm(Hs.Au0);this.N.Cg=Hs.AlT;}else{this.N.
FA(A.jV);this.N.Cm(null);this.N.Cg=null;}if(!!Hs&&!!Hs.AfT){this.N.BU(A.jV);this.
N.Ii.Ds(Hs.Awm);this.N.Am6(Hs.Amm);this.N.C2(Hs.Aql);this.N.Cb=Hs.AfT;}else{this.
N.BU(A.jV);this.N.C2(null);this.N.Cb=null;}},JH:function(E){if(this.A5d===E)return;
this.A5d=E;this.G8.R(E);},Ee:function(G){A._GetAutoObject(C.AY).Fm();},BxT:function(
G){var B;var BwT=this.Av.Background.Fe();var BbC=(BwT?this.M[2]-((B=this.Av.M)[2
]-B[0]):this.M[2]);var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){var AiG=X;
X=X.Ag;if(((AiG.T&0x400)===0x400)){if(!!(A.Core.AjL.isPrototypeOf(AiG)?AiG:null)
){var BbI=(A.Core.AjL.isPrototypeOf(AiG)?AiG:null);BbI.DK([BbC,BbI.Et[1]]);}else
if(!!(A.Core.Ek.isPrototypeOf(AiG)?AiG:null)){var Bdt=(A.Core.Ek.isPrototypeOf(AiG
)?AiG:null);Bdt.H(A.abN(Bdt.M,BbC));}}}},G4:function(G){A.pe([this,this.E9],this
);},_Init:function(aArg){C.AB._Init.call(this,aArg);C.CP._Init.call(this.G8={I:this
},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Av._Init.call(this.Av={I:this},0);
A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.Cu;this.N.Y(true);this.
G8.H(Wy);this.G8.Ar(false);this.G8.R(A.aaR(A.acf.Settings));this.G8.L(A.jb.Text);
this.Z.H(E4);this.Z.Kb(1);this.Av.H(II);this.Am.H(Q4);this.Am.L(A.jb.Text);this.
J(this.G8,0);this.J(this.Z,0);this.J(this.Av,0);this.J(this.Am,0);this.G8.S(A.aaL(
A.fl.J8));this.G8.A5(A.aaL(A.fl.Ia));this.Z.Ei=[this,this.G4];this.Am.Ax(A.aaL(A.
ach.AB7));this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.G8._Done();
this.Z._Done();this.Av._Done();this.Am._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.G8._ReInit();this.Z._ReInit();this.Av._ReInit();this.
Am._ReInit();this.G8.R(A.aaR(A.acf.Settings));this.G8.S(A.aaL(A.fl.J8));this.G8.
A5(A.aaL(A.fl.Ia));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
G8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsScreen"};C.Aqf={Timer:null,Text:null,Init:
function(aArg){var B;A.zX([this,this.Bel],[B=A._GetAutoObject(A.Device.Helper),B.
UA,B.UB],0);},C7:function(E){C.BO.C7.call(this,E);this.Text.L(E);},Bel:function(
G){this.Text.R(A._GetAutoObject(A.acj.KB).Bf$(A._GetAutoObject(A.Device.Helper).
Dy()));},_Init:function(aArg){C.BO._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Timer={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=
C.Aqf;this.Timer.V8(1);this.Timer.Ar(true);this.Text.H(Zx);this.Text.R(A.jV);this.
J(this.Text,0);this.Timer.Mp=[this,this.Bel];this.Text.S(A.aaL(A.fl.Ah));this.Init(
aArg);},_Done:function(){this.__proto__=C.BO;this.Timer._Done();this.Text._Done(
);C.BO._Done.call(this);},_ReInit:function(){C.BO._ReInit.call(this);this.Timer.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var
B;C.BO._Mark.call(this,D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderTime"};
C.BO={KJ:0xFFFFFFFF,LK:0,C7:function(E){if(this.KJ===E)return;this.KJ=E;},Abw:function(
E){if(this.LK===E)return;this.LK=E;},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.BO;this.H(ON);},_className:"Application::HeaderContent"};
C.N={Vq:null,Vr:null,Vs:null,Ago:null,Agp:null,Agq:null,Cw:null,Cg:null,Cb:null,
Background:null,Nx:null,I3:null,Kl:null,Ii:null,Pj:null,IW:null,K9:null,TF:null,
TG:null,Anw:A.jV,Anx:A.jV,Any:A.jV,Aqm:0,Aqn:0,Aqo:0,AgI:0,Y4:false,Y3:false,ArD:
false,ArT:false,ArS:false,Init:function(aArg){},Ai:function(Ae){if(!!this.Vq)this.
I3.S(this.Vq);if(!!this.Vr)this.Kl.S(this.Vr);if(!!this.Vs)this.Ii.S(this.Vs);switch(
this.AgI){case 0:{this.Nx.Y(false);this.I3.L(A.jb.Bh);this.Kl.L(A.jb.Bh);this.Ii.
L(A.jb.Bh);this.Pj.L(A.jb.Bh);this.IW.L(A.jb.Bh);this.K9.L(A.jb.Bh);}break;case 1:{
if(!this.Ago)this.Nx.H(A.aaT(this.I3.AQS(),PV));else this.Nx.H(this.Pj.Da());this.
Nx.Y(true);this.I3.L(A.jb.Text);this.Kl.L(A.jb.Bh);this.Ii.L(A.jb.Bh);this.Pj.L(
A.jb.Text);this.IW.L(A.jb.Bh);this.K9.L(A.jb.Bh);}break;case 3:{if(!this.Agq)this.
Nx.H(A.aaT(this.Ii.AQS(),PV));else this.Nx.H(this.K9.Da());this.Nx.Y(true);this.
I3.L(A.jb.Bh);this.Kl.L(A.jb.Bh);this.Ii.L(A.jb.Text);this.Pj.L(A.jb.Bh);this.IW.
L(A.jb.Bh);this.K9.L(A.jb.Text);}break;case 2:{if(!this.Agp)this.Nx.H(A.aaT(this.
Kl.AQS(),PV));else this.Nx.H(this.IW.Da());this.Nx.Y(true);this.I3.L(A.jb.Bh);this.
Kl.L(A.jb.Text);this.Ii.L(A.jb.Bh);this.Pj.L(A.jb.Bh);this.IW.L(A.jb.Text);this.
K9.L(A.jb.Bh);}break;default:{this.Nx.Y(false);A.ab5("%s",Wz);}}if(!!this.Pj.Al){
this.Pj.Y(true);this.I3.Y(false);}else{this.Pj.Y(false);this.I3.Y(true);}if(this.
Anx.length<=0){this.IW.Y(true);this.Kl.Y(false);}else{this.IW.Y(false);this.Kl.Y(
true);}if(!!this.K9.Al){this.K9.Y(true);this.Ii.Y(false);}else{this.K9.Y(false);
this.Ii.Y(true);}},Hm:function(E){if(this.Anw===E)return;this.Anw=E;this.I3.R(E);
this.An();},FA:function(E){if(this.Anx===E)return;this.Anx=E;this.Kl.R(E);this.An(
);},BU:function(E){if(this.Any===E)return;this.Any=E;this.Ii.R(E);this.An();},AD4:
function(E){if(this.AgI===E)return;this.AgI=E;this.An();},ADW:function(E){if(this.
Vq===E)return;this.Vq=E;this.I3.S(E);this.An();},Aq5:function(E){if(this.Vr===E)
return;this.Vr=E;this.Kl.S(E);this.An();},Am6:function(E){if(this.Vs===E)return;
this.Vs=E;this.Ii.S(E);this.An();},A1N:function(G){this.An();},CS:function(E){if(
this.Ago===E)return;this.Ago=E;this.Pj.Ax(E);this.An();},Cm:function(E){if(this.
Agp===E)return;this.Agp=E;this.IW.Ax(E);this.An();},C2:function(E){if(this.Agq===
E)return;this.Agq=E;this.K9.Ax(E);this.An();},Oz:function(E){if(this.ArS===E)return;
this.ArS=E;this.TF.Y(E);if(E)this.I3.H([].concat(this.TF.M[2],this.I3.M.slice(1,
4)));else this.I3.H([].concat(0,this.I3.M.slice(1,4)));this.An();},OA:function(E
){if(this.ArT===E)return;this.ArT=E;this.TG.Y(E);if(E)this.Ii.H(A.abN(this.Ii.M,
this.TG.M[0]));else this.Ii.H(A.abN(this.Ii.M,this.M[2]));this.An();},Bkc:function(
E){if(this.Aqm===E)return;this.Aqm=E;this.Pj.Ct(E);this.An();},ARC:function(E){if(
this.Aqn===E)return;this.Aqn=E;this.IW.Ct(E);this.An();},A77:function(E){if(this.
Aqo===E)return;this.Aqo=E;this.K9.Ct(E);this.An();},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);A.acg.AI.
_Init.call(this.Nx={I:this},0);C.CP._Init.call(this.I3={I:this},0);C.CP._Init.call(
this.Kl={I:this},0);C.CP._Init.call(this.Ii={I:this},0);A.acg.Am._Init.call(this.
Pj={I:this},0);A.acg.Am._Init.call(this.IW={I:this},0);A.acg.Am._Init.call(this.
K9={I:this},0);A.acg.Am._Init.call(this.TF={I:this},0);A.acg.Am._Init.call(this.
TG={I:this},0);this.__proto__=C.N;this.H(BC);this.Background.AW(0x3F);this.Background.
H(BC);this.Background.L(A.jb.AdA);this.Nx.H(WA);this.Nx.L(A.jb.C0);this.Nx.Y(false
);this.I3.AW(0x14);this.I3.H(WC);this.I3.A2(0x12);this.Kl.AW(0x14);this.Kl.H(Zy);
this.Kl.A2(0x12);this.Ii.H(Zz);this.Pj.H(WD);this.IW.H(WE);this.K9.H(SM);this.K9.
Y(false);this.TF.H(ZA);this.TF.Y(false);this.TG.H(ZB);this.TG.Y(false);this.J(this.
Background,0);this.J(this.Nx,0);this.J(this.I3,0);this.J(this.Kl,0);this.J(this.
Ii,0);this.J(this.Pj,0);this.J(this.IW,0);this.J(this.K9,0);this.J(this.TF,0);this.
J(this.TG,0);this.I3.S(A.aaL(A.fl.Ak));this.I3.A5(A.aaL(A.fl.By));this.I3.QN([this
,this.A1N]);this.Kl.S(A.aaL(A.fl.Ak));this.Kl.A5(A.aaL(A.fl.By));this.Kl.QN([this
,this.A1N]);this.Ii.S(A.aaL(A.fl.Ak));this.Ii.A5(A.aaL(A.fl.By));this.Ii.QN([this
,this.A1N]);this.Vq=A.aaL(A.fl.Ak);this.Vr=A.aaL(A.fl.Ak);this.Vs=A.aaL(A.fl.Ak);
this.Pj.Ax(null);this.IW.Ax(null);this.K9.Ax(null);this.TF.Ax(A.aaL(A.ach.ALl));
this.TG.Ax(A.aaL(A.ach.AiW));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.Background._Done();this.Nx._Done();this.I3._Done();this.Kl._Done();this.
Ii._Done();this.Pj._Done();this.IW._Done();this.K9._Done();this.TF._Done();this.
TG._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Background._ReInit();this.Nx._ReInit();this.I3._ReInit();this.Kl._ReInit(
);this.Ii._ReInit();this.Pj._ReInit();this.IW._ReInit();this.K9._ReInit();this.TF.
_ReInit();this.TG._ReInit();this.I3.S(A.aaL(A.fl.Ak));this.I3.A5(A.aaL(A.fl.By));
this.Kl.S(A.aaL(A.fl.Ak));this.Kl.A5(A.aaL(A.fl.By));this.Ii.S(A.aaL(A.fl.Ak));this.
Ii.A5(A.aaL(A.fl.By));this.ADW(A.aaL(A.fl.Ak));this.Aq5(A.aaL(A.fl.Ak));this.Am6(
A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
Vq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vr)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Vs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ago)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Agp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Agq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cw)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Cg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Cb)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TG)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::Footer"};C.AB$={Init:function(aArg
){var B;A.zX([this,this.Nd],[B=A._GetAutoObject(A.Device.Helper),B.AqO,B.Aj_],0);
A.zX([this,this.Nd],[B=A._GetAutoObject(A.Device.Helper),B.A7a,B.AEt],0);A.pe([this
,this.Nd],this);},Eo:function(G){if(!!A._GetAutoObject(A.Device.Helper).Ag6)this.
Abz(A._GetAutoObject(A.Device.Helper).Ag6.ANt());else this.Abz(-1);if(!!A._GetAutoObject(
A.Device.Helper).Ub)this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).Aky(A._GetAutoObject(
A.Device.Helper).Ub.Id));else this.OnSetAnimalId(-1);},_Init:function(aArg){C.Amt.
_Init.call(this,aArg);this.__proto__=C.AB$;this.Init(aArg);},_className:"Application::HeaderScannedIds"
};C.AFD={Ep:null,D_:null,FJ:null,Xx:null,Tj:null,Iu:null,Iv:null,Init:function(aArg
){},Wd:function(G){var B;C.DJ.Wd.call(this,G);var AJt=this.Aym(A._GetAutoObject(
A.Device.Helper).Ug.Get(A._GetAutoObject(A.Device.Helper).W.AnimalType));var AKd=
this.Aym(A._GetAutoObject(A.Device.Helper).Uh.Get(A._GetAutoObject(A.Device.Helper
).W.AnimalType));var BwL=this.Aym(A._GetAutoObject(A.Device.Device).Zo);this.Ep.
H(A.abP(this.Ep.M,0));this.Ep.H([].concat(this.Ep.M.slice(0,3),((B=this.M)[3]-B[
1])-AJt));this.Iv.H(A.abO(this.Iv.M,this.Ep.M[3]-((((B=this.Iv.M)[3]-B[1])/2)|0)
));this.D_.H(A.abP(this.D_.M,this.Ep.M[3]));this.D_.H([].concat(this.D_.M.slice(
0,3),((B=this.M)[3]-B[1])-AKd));this.Iu.H(A.abO(this.Iu.M,(this.D_.M[3]-((((B=this.
Iu.M)[3]-B[1])/2)|0))+2));this.FJ.H(A.abP(this.FJ.M,this.D_.M[3]));this.FJ.H([].
concat(this.FJ.M.slice(0,3),((B=this.M)[3]-B[1])-BwL));this.Tj.H(A.abO(this.Tj.M
,this.FJ.M[3]-((((B=this.Tj.M)[3]-B[1])/2)|0)));this.Xx.H(A.abP(this.Xx.M,this.FJ.
M[3]));this.Xx.H([].concat(this.Xx.M.slice(0,3),(B=this.M)[3]-B[1]));},AIp:function(
Aod){return A._GetAutoObject(A.Device.Converter).Aku(Aod);},AIZ:function(){return A.
_GetAutoObject(A.acj.Temperature).Alc();},_Init:function(aArg){C.DJ._Init.call(this
,aArg);A.acg.AI._Init.call(this.Ep={I:this},0);A.acg.AI._Init.call(this.D_={I:this
},0);A.acg.AI._Init.call(this.FJ={I:this},0);A.acg.AI._Init.call(this.Xx={I:this
},0);A.acg.AI._Init.call(this.Tj={I:this},0);A.acg.AI._Init.call(this.Iu={I:this
},0);A.acg.AI._Init.call(this.Iv={I:this},0);this.__proto__=C.AFD;this.Ep.AW(0xD
);this.Ep.H(Acf);this.Ep.L(A.jb.FW);this.D_.AW(0xD);this.D_.H(Uy);this.D_.L(A.jb.
HZ);this.FJ.AW(0xD);this.FJ.H(ZC);this.FJ.L(A.jb.EU);this.Xx.AW(0xD);this.Xx.H(Ae2
);this.Xx.L(A.jb.AeV);this.Tj.AW(0xD);this.Tj.H(ZD);this.Tj.AvI(A.jb.AeV);this.Tj.
AvJ(A.jb.AeV);this.Tj.AvL(A.jb.EU);this.Tj.AvK(A.jb.EU);this.Iu.AW(0xD);this.Iu.
H(WF);this.Iu.AvI(A.jb.EU);this.Iu.AvJ(A.jb.EU);this.Iu.AvL(A.jb.HZ);this.Iu.AvK(
A.jb.HZ);this.Iv.AW(0xD);this.Iv.H(WG);this.Iv.AvI(A.jb.HZ);this.Iv.AvJ(A.jb.HZ);
this.Iv.AvL(A.jb.FW);this.Iv.AvK(A.jb.FW);this.J(this.Ep,-1);this.J(this.D_,-1);
this.J(this.FJ,-1);this.J(this.Xx,-1);this.J(this.Tj,-1);this.J(this.Iu,-1);this.
J(this.Iv,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.DJ;this.Ep._Done(
);this.D_._Done();this.FJ._Done();this.Xx._Done();this.Tj._Done();this.Iu._Done(
);this.Iv._Done();C.DJ._Done.call(this);},_ReInit:function(){C.DJ._ReInit.call(this
);this.Ep._ReInit();this.D_._ReInit();this.FJ._ReInit();this.Xx._ReInit();this.Tj.
_ReInit();this.Iu._ReInit();this.Iv._ReInit();},_Mark:function(D){var B;C.DJ._Mark.
call(this,D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.FJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xx
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Iu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iv)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TemperatureGraph"};C.Ci={AuH:null,Amm:null,AOR:null
,Aql:null,Ap9:null,Au0:null,AQ:null,AfT:null,AlT:null,N:null,Bk:null,QA:null,AS7:
false,AFr:false,AoF:false,Awm:255,Ly:false,Kv:false,Qb:false,Ai:function(Ae){var
B;C.OG.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10);var Fi=((Ae&0x20)===0x20);var Ip=((
Ae&0x40)===0x40);var Gq=this.Bk.Bv;var FE=A.jb.CE;var GG=A.jb.Text;if(this.G_){FE=
A.jb.Bh;GG=A.jb.Text;}if(!G2){this.Background.L(A.jb.C0);this.V.L(A.jb.CE);}else
if(Gq){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else if(Ip){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bh);}else if(Fi){this.Background.L(A.jb.Amz);this.V.L(A.
jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}this.Ly=G2;this.Kv=Fi;this.Qb=Gq;
this.AoF=Ip;},Qa:function(G){this.An();A.pe(this.AQ,this);},BtM:function(s){this.
Qa(s);},IP:function(G){if(this.QA.AbO)return;this.An();if(this.Bk.Bv){A.pe(this.
AQ,this);this.Bk.Ar(false);}this.Bk.Ar(true);},AsG:function(s){this.IP(s);},AgO:
function(E){if(A.aa0(this.AfT,E))return;this.AfT=E;},V9:function(E){if(this.AuH===
E)return;this.AuH=E;},V_:function(E){if(this.Amm===E)return;this.Amm=E;},A8f:function(
E){if(this.Awm===E)return;this.Awm=E;},Gj:function(E){if(A.aaZ(this.N,E))return;
this.N=E;},U:function(E){if(this.DE===E)return;this.DE=E;this.AJZ();},A1n:function(
G){},BC7:function(s){this.A1n(s);},Aj3:function(E){if(this.Aql===E)return;this.Aql=
E;},LS:function(E){if(A.aa0(this.AlT,E))return;this.AlT=E;},Bj7:function(E){if(this.
Ap9===E)return;this.Ap9=E;},LU:function(E){if(this.Au0===E)return;this.Au0=E;},YZ:
function(E){if(this.AFr===E)return;this.AFr=E;this.AJZ();},AJZ:function(){var B;
var Qh=this.DE;if(this.AFr)Qh=Qh+A.aaR(A.acf.Colon);if(this.AS7)Qh=Qh+ZE;this.V.
R(Qh);},ARU:function(E){if(this.AS7===E)return;this.AS7=E;this.AJZ();},_Init:function(
aArg){C.OG._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bk={I:this},0);A.Core.
BJ._Init.call(this.QA={I:this},0);this.__proto__=C.Ci;this.Bk.PC(0);this.Bk.V8(50
);this.Bk.Ar(false);this.QA.Filter=1;this.Bk.Mp=[this,this.BtM];this.QA.BK=[this
,this.AsG];this.AuH=A.aaL(A.fl.Ak);this.Amm=A.aaL(A.fl.Ak);this.AOR=A.aaL(A.ach.
EV);this.Ap9=A.aaL(A.fl.Ak);},_Done:function(){this.__proto__=C.OG;this.Bk._Done(
);this.QA._Done();C.OG._Done.call(this);},_ReInit:function(){C.OG._ReInit.call(this
);this.Bk._ReInit();this.QA._ReInit();this.V9(A.aaL(A.fl.Ak));this.V_(A.aaL(A.fl.
Ak));this.Bj7(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.OG._Mark.call(this,D);
if((B=this.AuH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amm)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AOR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aql)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap9)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Au0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AfT)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AlT)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.QA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItem"
};C.Dk={Q:null,AmJ:null,AmL:null,Hl:null,HV:null,AK:0,Ga:0,FP:100,Fs:0,Init:function(
aArg){},IP:function(G){this.Fs=1;C.D8.IP.call(this,G);},Bg:function(aSize){C.D8.
Bg.call(this,aSize);this.Hl.H([0,aSize[1]-40,40,aSize[1]]);this.HV.H([].concat(A.
abe(aSize,Ae3),aSize));},Ai:function(Ae){var B;C.D8.Ai.call(this,Ae);var Fi=((Ae&
0x20)===0x20);var Gq=this.Bk.Bv;this.Hl.L(this.V.AP);this.HV.L(this.V.AP);this.Hl.
Y((Fi||Gq)&&(this.AK>this.Ga));this.HV.Y((Fi||Gq)&&(this.AK<this.FP));if(this.Fs===
6)this.Hl.L(A.jb.EU);if(this.Fs===7)this.HV.L(A.jb.EU);},BcH:function(G){this.Fs=
6;this.An();if(this.Bk.Bv){A.pe([this,this.AxP],this);this.Bk.Ar(false);}this.Bk.
Ar(true);},Qa:function(G){if(this.Fs===6)A.pe([this,this.AxP],this);if(this.Fs===
7)A.pe([this,this.AxQ],this);if(this.Fs===1)A.pe(this.AQ,this);this.Fs=0;this.An(
);},Dc:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Acn:function(
s){this.Dc(s);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,
this.Acn],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Acn],E,0);if(!!E)A.pe([this,
this.Acn],this);},BcI:function(G){this.Fs=7;this.An();if(this.Bk.Bv){A.pe([this,
this.AxQ],this);this.Bk.Ar(false);}this.Bk.Ar(true);},JY:function(G){this.Fs=0;}
,AxQ:function(s){this.JY(s);},JT:function(G){this.Fs=0;},AxP:function(s){this.JT(
s);},Bx:function(E){if(E<this.Ga)E=this.Ga;if(E>this.FP)E=this.FP;if(this.AK===E
)return;this.AK=E;this.An();},A_1:function(Ap){this.Bx(Ap);},Gk:function(E){if(this.
Ga===E)return;this.Ga=E;this.An();},E1:function(E){if(this.FP===E)return;this.FP=
E;this.An();},TX:function(){return this.AK;},_Init:function(aArg){C.D8._Init.call(
this,aArg);A.Core.BJ._Init.call(this.AmJ={I:this},0);A.Core.BJ._Init.call(this.AmL={
I:this},0);A.acg.Am._Init.call(this.Hl={I:this},0);A.acg.Am._Init.call(this.HV={
I:this},0);this.__proto__=C.Dk;this.H(JN);this.AmJ.Filter=6;this.AmL.Filter=7;this.
Background.H(JN);this.V.H(Ae4);this.V.R(Lo);this.Hl.H(Ahk);this.HV.H(AnJ);this.HV.
Ct(1);this.J(this.Hl,0);this.J(this.HV,0);this.AmJ.BK=[this,this.BcH];this.AmJ.DS=[
this,this.BcH];this.AmL.BK=[this,this.BcI];this.AmL.DS=[this,this.BcI];this.V.S(
A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(null);this.Hl.Ax(A.aaL(A.ach.
Al3));this.HV.Ax(A.aaL(A.ach.Al3));this.Init(aArg);},_Done:function(){this.__proto__=
C.D8;this.AmJ._Done();this.AmL._Done();this.Hl._Done();this.HV._Done();C.D8._Done.
call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.AmJ._ReInit();this.
AmL._ReInit();this.Hl._ReInit();this.HV._ReInit();this.V.S(A.aaL(A.fl.Ah));this.
V.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.D8._Mark.call(this,D);if((B=this.
Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AmJ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AmL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hl)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.HV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Do:function(){return-1;},C9:function(aIndex){return-1;},Gg:function(
aIndex){return A.jV;},DP:function(A1){return-1;},Hj:function(){return-1;},Au:function(
E){this.Q=E;},Ca:function(Ap){this.Au(Ap);},ABP:function(aIndex){return null;},ABR:
function(aIndex){return 0;},B_:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.I1={AwG:null
,BP:null,AFR:A.jV,ATI:A.jV,Ajy:1,Init:function(aArg){},Ai:function(Ae){var B;var
F;C.Dk.Ai.call(this,Ae);if(!this.AwG){this.BP.L(this.V.AP);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.BP.R(((F=this.Q,F[1].call(F[0])).toFixed()+CO)+this.
ATI);else this.BP.R(((F=this.Q,F[1].call(F[0])).toFixed()+CO)+this.AFR);}}else(B=
this.AwG)?B[1].call(B[0],this):null;},JY:function(G){var F;var BN=this.AK;C.Dk.JY.
call(this,G);this.Bx(this.AK+this.Ajy);if(this.AK!==BN){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AK));A.abo(this.Q,0);}},JT:function(G){var F;var BN=this.AK;C.
Dk.JT.call(this,G);this.Bx(this.AK-this.Ajy);if(this.AK!==BN){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},Kf:function(E){if(this.AFR===E)return;
this.AFR=E;this.An();},KH:function(E){if(this.ATI===E)return;this.ATI=E;this.An(
);},ARD:function(E){if(this.Ajy===E)return;this.Ajy=E;},A8v:function(E){if(A.aa0(
this.AwG,E))return;this.AwG=E;},_Init:function(aArg){C.Dk._Init.call(this,aArg);
C.CP._Init.call(this.BP={I:this},0);this.__proto__=C.I1;this.H(JN);this.BP.H(NZ);
this.J(this.BP,-1);this.BP.S(A.aaL(A.fl.Ah));this.BP.A5(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dk;this.BP._Done();C.Dk._Done.call(this
);},_ReInit:function(){C.Dk._ReInit.call(this);this.BP._ReInit();this.BP.S(A.aaL(
A.fl.Ah));this.BP.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dk._Mark.call(this
,D);if((B=this.AwG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BP)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"};C.B$={AC:
null,Dp:null,HC:null,CT:function(){this.Ai(this.T);},Init:function(aArg){},Bg:function(
aSize){var B;C.Dk.Bg.call(this,aSize);this.Dp.H([this.Hl.M[2]-10,this.Hl.M[1],this.
HV.M[0]+10,this.Hl.M[3]]);this.Dp.AD5((B=this.Dp.M)[2]-B[0]);this.Dp.Hx(this.Dp.
Gd,true,null,null);},Ai:function(Ae){var B;C.Dk.Ai.call(this,Ae);var Fi=((Ae&0x20
)===0x20);var Gq=this.Bk.Bv;this.Dp.Aa5(0,this.Dp.AV-1);this.Hl.Y(Fi||Gq);this.HV.
Y(Fi||Gq);},Dc:function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DP((F=this.
Q,F[1].call(F[0]))));},JY:function(G){var F;var BN=this.AK;C.Dk.JY.call(this,G);
this.Bx(this.AK+1);if(this.AK!==BN){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.C9(this.AK)));A.abo(this.Q,0);}},JT:function(G){var F;var BN=this.AK;
C.Dk.JT.call(this,G);this.Bx(this.AK-1);if(this.AK!==BN){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.C9(this.AK)));A.abo(this.Q,0);}},Bx:function(E){
var Qg=0;if(E<this.Ga){E=this.FP;Qg=-this.Dp.VL*this.Dp.AV;}if(E>this.FP){E=this.
Ga;Qg=this.Dp.VL;}C.Dk.Bx.call(this,E);if(!!Qg)this.Dp.Gc(Qg);this.Dp.GS(this.AK
);if(this.Dp.Bg5())this.Dp.Bmt(false,false);this.Dp.Hx(this.Dp.Gd,true,this.HC,null
);},G$:function(G){var B;var FU=this.Dp.GN;var Cx=(C.CP.isPrototypeOf(B=this.Dp.
Cd)?B:null);if(!Cx)return;Cx.S(this.V.B3);Cx.A5(this.V.Aml);Cx.CC(this.V.Ap8);Cx.
L(this.V.AP);if(!!this.AC)Cx.R(this.AC.Gg(FU));else Cx.R(WH);Cx.H(A.abK(Cx.M,[this.
Dp.VL,(B=this.Dp.M)[3]-B[1]]));},Btl:function(s){this.G$(s);},CK:function(E){if(
this.AC===E)return;this.AC=E;if(!!this.AC){this.Gk(0);this.E1(this.AC.Do()-1);this.
Dp.Jm(this.AC.Do());this.Dp.Aa5(0,this.Dp.AV-1);}},_Init:function(aArg){C.Dk._Init.
call(this,aArg);A.Core.Dp._Init.call(this.Dp={I:this},0);A.acl.FZ._Init.call(this.
HC={I:this},0);this.__proto__=C.B$;this.H(JN);this.Dp.NN(C.CP);this.HC.Wa(23);this.
HC.HF(1);this.HC.Ff(200);this.J(this.Dp,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.
aaL(A.fl.Ak));this.Dp.G$=[this,this.Btl];this.Init(aArg);},_Done:function(){this.
__proto__=C.Dk;this.Dp._Done();this.HC._Done();C.Dk._Done.call(this);},_ReInit:function(
){C.Dk._ReInit.call(this);this.Dp._ReInit();this.HC._ReInit();this.V.S(A.aaL(A.fl.
Ah));this.V.A5(A.aaL(A.fl.Ak));this.CT();},_Mark:function(D){var B;C.Dk._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dp)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroup"};C.Sr={Fu:null,Or:null,Dg:null,At:null,Jk:null,
HB:null,Pd:null,Vn:null,QI:null,XU:null,PP:null,Gi:null,Gh:null,FK:0,A3:0,ArA:false
,Bg1:false,Init:function(aArg){},Ai:function(Ae){C.Dk.Ai.call(this,Ae);this.Hl.Y(
false);this.HV.Y(false);var Atb=A.jV;if(!!this.Dg){this.Pd.R(this.At.Format(AnK)
);this.QI.R(this.At.Format(Ahl));this.PP.R(this.At.Format(Ahm));}if(this.A3===1){
this.HB.Y(true);this.HB.H(this.Pd.M);this.HB.L(this.V.AP);this.Pd.L(this.Background.
AP);this.QI.L(this.V.AP);this.PP.L(this.V.AP);Atb=A.aaR(A.acf.A4a);}else if(this.
A3===2){this.HB.Y(true);this.HB.H(this.QI.M);this.HB.L(this.V.AP);this.Pd.L(this.
V.AP);this.QI.L(this.Background.AP);this.PP.L(this.V.AP);Atb=A.aaR(A.acf.G9);}else
if(this.A3===3){this.HB.Y(true);this.HB.H(this.PP.M);this.HB.L(this.V.AP);this.Pd.
L(this.V.AP);this.QI.L(this.V.AP);this.PP.L(this.Background.AP);Atb=A.aaR(A.acf.
Year);}else{this.HB.Y(false);this.Pd.L(this.V.AP);this.XU.L(this.V.AP);this.QI.L(
this.V.AP);this.Vn.L(this.V.AP);this.PP.L(this.V.AP);}if(Atb.length>0){if(this.AFr
)this.V.R((((this.DE+Acg)+Atb)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else
this.V.R(((this.DE+Acg)+Atb)+String.fromCharCode(0x29));}else this.AJZ();},Qa:function(
G){if(this.Fs===1)A.pe([this,this.UM],this);else if(this.Fs===4)A.pe([this,this.
Ah6],this);else if(this.Fs===5)A.pe([this,this.AhR],this);C.Dk.Qa.call(this,G);}
,JY:function(G){switch(this.A3){case 0:C.Dk.JY.call(this,G);break;case 3:break;default:
this.AcX(this);}},JT:function(G){switch(this.A3){case 0:C.Dk.JT.call(this,G);break;
default:this.AhQ(this);}},AcZ:function(G){var F;if(!!this.Dg)this.TZ((F=this.Dg,
F[1].call(F[0])));},AbC:function(E){if(A.aaZ(this.Dg,E))return;if(!!this.Dg)A.z$([
this,this.AcZ],this.Dg,0);this.Dg=E;if(!!E)A.zX([this,this.AcZ],E,0);if(!!E)A.pe([
this,this.AcZ],this);},TZ:function(E){if(this.FK===E)return;this.FK=E;this.At.Initialize(
this.FK);this.An();},AcX:function(G){this.Fs=1;this.An();if(this.Bk.Bv){A.pe([this
,this.UM],this);this.Bk.Ar(false);}this.Bk.Ar(true);},A$t:function(s){this.AcX(s
);},UM:function(G){this.En(this.A3+1);},Alv:function(G){this.Fs=4;this.An();if(this.
Bk.Bv){A.pe([this,this.Ah6],this);this.Bk.Ar(false);}this.Bk.Ar(true);},Alu:function(
G){this.Fs=5;this.An();if(this.Bk.Bv){A.pe([this,this.AhR],this);this.Bk.Ar(false
);}this.Bk.Ar(true);},Ah6:function(G){var B;var F;var BN=this.FK;switch(this.A3){
case 1:{if(this.ArA){var AAe=A._NewObject(A.Core.Anz,0);AAe.J5=1;if(this.At.J(AAe
).JF()>A._GetAutoObject(A.Device.Helper).Dy())return;}if(this.At.Gz<this.At.YS()
)this.At.Li(this.At.Gz+1);}break;case 2:{if(this.ArA){var AAe=A._NewObject(A.Core.
Anz,0);AAe.J5=this.At.YS();if(this.At.J(AAe).JF()>A._GetAutoObject(A.Device.Helper
).Dy())return;}this.At.T3(this.At.G9+1);if(this.At.YS()<this.At.Gz)this.At.Li(this.
At.YS());}break;case 3:{if(this.ArA){var AZO=A._NewObject(A.Core.Bt,0);AZO.Initialize(
this.At.JF());AZO.Year+=1;if(AZO.JF()>A._GetAutoObject(A.Device.Helper).Dy())return;
}if(this.At.Year>=2100)return;this.At.Year=this.At.Year+1;}break;default:;}this.
TZ(((B=(this.At.JF()|0))<0)?B+0x100000000:B);if(this.FK!==BN){if(!!this.Dg)(F=this.
Dg,F[2].call(F[0],this.FK));A.abo(this.Dg,0);}},AhR:function(G){var B;var F;var BN=
this.FK;if(this.A3===1)this.At.Li(this.At.Gz-1);if(this.A3===2){this.At.T3(this.
At.G9-1);if(this.At.YS()<this.At.Gz)this.At.Li(this.At.YS());}if(this.A3===3){if(
this.At.Year<=2000)return;this.At.Year=this.At.Year-1;}this.TZ(((B=(this.At.JF()|
0))<0)?B+0x100000000:B);if(this.FK!==BN){if(!!this.Dg)(F=this.Dg,F[2].call(F[0],
this.FK));A.abo(this.Dg,0);}},DD:function(G){var F;if(!this.N)return;switch(this.
A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[
0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(F[
0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=
null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AdZ));(F=this.N,F[1].call(F[0])).
BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=[this,this.UM];}break;case 2:{(F=this.N,F[
1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N
,F[1].call(F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(F[0])).Cm(A.aaL(A.ach.Amv
));(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
AhQ];(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AdZ));(F=this.N,F[1].call(F[0])).
BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=[this,this.UM];}break;case 3:{(F=this.N,F[
1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N
,F[1].call(F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(F[0])).Cm(A.aaL(A.ach.Amv
));(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
AhQ];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=
this.N,F[1].call(F[0])).Cb=null;}break;default:this.Fu.Akj((F=this.N,F[1].call(F[
0])));}},AEr:function(E){if(this.ArA===E)return;this.ArA=E;},FH:function(G){this.
En(1);},G1:function(G){this.En(0);},En:function(EC){var F;var Azn=this.A3;if(!this.
A3){this.Fu.Ai3((F=this.N,F[1].call(F[0])));if((EC===1)&&!this.FK){var BN=this.FK;
this.TZ(A._GetAutoObject(A.Device.Helper).Dy());if(this.FK!==BN){if(!!this.Dg)(F=
this.Dg,F[2].call(F[0],this.FK));A.abo(this.Dg,0);}}}this.A3=EC;this.Bg1=true;if((
this.A3<0)||(this.A3>3))this.A3=0;this.DD(this);this.Gi.Bv=!!this.A3;this.Gh.Bv=
!!this.A3;if((!!Azn&&!this.A3)&&!!this.Or)A.pe(this.Or,this);this.An();},AhQ:function(
G){if(this.A3>1)this.En(this.A3-1);},_Init:function(aArg){C.Dk._Init.call(this,aArg
);A.Core.Bt._Init.call(this.At={I:this},0);A.Core.BJ._Init.call(this.Jk={I:this}
,0);A.acg.AI._Init.call(this.HB={I:this},0);A.acg.Text._Init.call(this.Pd={I:this
},0);A.acg.Text._Init.call(this.Vn={I:this},0);A.acg.Text._Init.call(this.QI={I:
this},0);A.acg.Text._Init.call(this.XU={I:this},0);A.acg.Text._Init.call(this.PP={
I:this},0);A.Core.BJ._Init.call(this.Gi={I:this},0);A.Core.BJ._Init.call(this.Gh={
I:this},0);this.__proto__=C.Sr;this.H(Uz);this.V.R(AnL);this.Hl.Y(false);this.HV.
Y(false);this.Jk.Filter=1;this.HB.H(AnM);this.HB.L(0x55FFFFFF);this.Pd.H(Aw3);this.
Pd.IZ(true);this.Pd.A2(0x14);this.Vn.H(Aw4);this.Vn.IZ(true);this.Vn.A2(0x14);this.
Vn.R(AkG);this.QI.H(Aw5);this.QI.IZ(true);this.XU.H(Ae5);this.XU.IZ(true);this.XU.
R(AkG);this.PP.H(Asa);this.PP.IZ(true);this.PP.A2(0x11);this.Gi.Filter=4;this.Gi.
Bv=false;this.Gh.Filter=5;this.Gh.Bv=false;this.J(this.HB,0);this.J(this.Pd,0);this.
J(this.Vn,0);this.J(this.QI,0);this.J(this.XU,0);this.J(this.PP,0);this.Jk.BK=[this
,this.A$t];this.Pd.S(A.aaL(A.fl.Ez));this.Vn.S(A.aaL(A.fl.Ez));this.QI.S(A.aaL(A.
fl.Ez));this.XU.S(A.aaL(A.fl.Ez));this.PP.S(A.aaL(A.fl.Ez));this.Gi.BK=[this,this.
Alv];this.Gi.DS=[this,this.Ah6];this.Gh.BK=[this,this.Alu];this.Gh.DS=[this,this.
AhR];this.Fu=A._NewObject(C.AdT,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dk;this.At._Done();this.Jk._Done();this.HB._Done();this.Pd._Done();this.Vn._Done(
);this.QI._Done();this.XU._Done();this.PP._Done();this.Gi._Done();this.Gh._Done(
);C.Dk._Done.call(this);},_ReInit:function(){C.Dk._ReInit.call(this);this.At._ReInit(
);this.Jk._ReInit();this.HB._ReInit();this.Pd._ReInit();this.Vn._ReInit();this.QI.
_ReInit();this.XU._ReInit();this.PP._ReInit();this.Gi._ReInit();this.Gh._ReInit(
);this.Pd.S(A.aaL(A.fl.Ez));this.Vn.S(A.aaL(A.fl.Ez));this.QI.S(A.aaL(A.fl.Ez));
this.XU.S(A.aaL(A.fl.Ez));this.PP.S(A.aaL(A.fl.Ez));},_Mark:function(D){var B;C.
Dk._Mark.call(this,D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Or)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dg)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.At)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gi)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.Ou={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.BbF],[B=A._GetAutoObject(A.Device.Device),B.A60,B.A_7],0);
A.pe([this,this.BbF],this);},Do:function(){return 16;},Gg:function(aIndex){return this.
LanguageToString.BX(this.C9(aIndex));},Au:function(E){C.C3.Au.call(this,E);A._GetAutoObject(
A.Device.Device).Am9(E);},BbF:function(G){this.Q=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.B_,this.Ca],0);},_Init:function(aArg){C.C3._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.Ou;this.Cv.Set(0,0);this.Cv.Set(1,1);this.Cv.Set(2,5);this.Cv.
Set(3,3);this.Cv.Set(4,8);this.Cv.Set(5,9);this.Cv.Set(6,7);this.Cv.Set(7,6);this.
Cv.Set(8,10);this.Cv.Set(9,2);this.Cv.Set(10,11);this.Cv.Set(11,12);this.Cv.Set(
12,13);this.Cv.Set(13,14);this.Cv.Set(14,15);this.Cv.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.C3;this.LanguageToString._Done();C.C3._Done.
call(this);},_ReInit:function(){C.C3._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.C3._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.QY={TemperatureUnitToString:
null,Do:function(){return 2;},C9:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.BX(aIndex);},DP:function(A1){return A1;},Hj:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awc(E);}
,Init:function(aArg){var B;A.zX([this,this.Bd3],[B=A._GetAutoObject(A.Device.Device
),B.AqP,B.AsF],0);A.pe([this,this.Bd3],this);},Bd3:function(G){this.Q=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.B_,this.Ca],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.QY;this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
ATo={Ai1:null,Ab5:null,Km:null,AN:null,A9:null,Bg:function(aSize){C.Ba.Bg.call(this
,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AN.H([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Km.H([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A9.H([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ai1.H([this.Background.
M[2],0,aSize[0],aSize[1]]);this.Ab5.H(this.Ai1.M);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.Km.L(this.V.AP);},Init:function(aArg){},Cc:function(Ac){if(!this.AX
)return;this.Hr=Ac;if(!!this.AX){var Ak5=this.AX.Hy(Ac,6);var Apj=this.AX.CA(Ac,
7);var Atq=this.AX.IU(Ac,9);this.U(A._GetAutoObject(A.acj.KB).ABM(Ak5));this.Km.
R(A._GetAutoObject(A.acj.KB).A4T(Ak5));this.Ab5.R(A._GetAutoObject(A.Device.Converter
).Aku(Apj));this.Ab5.L(A._GetAutoObject(A.acj.Assessment).W6(Atq));this.Ai1.L(A.
_GetAutoObject(A.acj.Assessment).P9(Atq));this.An();}},_Init:function(aArg){C.Ba.
_Init.call(this,aArg);A.acg.AI._Init.call(this.Ai1={I:this},0);A.acg.Text._Init.
call(this.Ab5={I:this},0);A.acg.Text._Init.call(this.Km={I:this},0);A.acg.AI._Init.
call(this.AN={I:this},0);A.acg.AI._Init.call(this.A9={I:this},0);this.__proto__=
C.ATo;this.V.H(OO);this.Ab5.L(A.jb.Text);this.Km.R(SN);this.Km.L(A.jb.Text);this.
AN.L(A.jb.Bb);this.A9.H(Aw6);this.A9.L(A.jb.Bb);this.J(this.Ai1,0);this.J(this.Ab5
,0);this.J(this.Km,0);this.J(this.AN,0);this.J(this.A9,0);this.Ab5.S(A.aaL(A.fl.
Ah));this.Km.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Ai1._Done();this.Ab5._Done();this.Km._Done();this.AN._Done();this.A9._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Ai1._ReInit(
);this.Ab5._ReInit();this.Km._ReInit();this.AN._ReInit();this.A9._ReInit();this.
Ab5.S(A.aaL(A.fl.Ah));this.Km.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ai1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Km)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.FQ={AX:null,AQ:null,Cl:null,AD:
null,AeI:null,Qq:null,KD:A.jV,Lc:null,ATK:true,G$:function(G){var B;var FU=this.
AD.GN;var Aa=(C.Ba.isPrototypeOf(B=this.AD.Cd)?B:null);if(!Aa)return;Aa.YV(this.
AX);Aa.Cc(FU);Aa.AQ=this.AQ;Aa.H(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GP]));
},NN:function(E){if(E===this.Lc)return;this.Lc=E;this.AD.NN(E);},YV:function(E){
if(this.AX===E)return;if(!!this.AX)A.z9([this,this.Cc],this.AX,0);this.AX=E;if(!
!E)A.zV([this,this.Cc],E,0);A.pe([this,this.Cc],this);},Cc:function(G){if(this.ATK===
false)return;if(!!this.AX){this.AD.Jm(this.AX.Ch());this.AD.Aa5(0,this.AD.AV-1);
}else this.AD.Jm(0);if((this.AD.AV>0)&&(this.Fy()<0))this.GS(0);if(this.Fy()>=this.
AD.AV){this.GS(0);this.AD.Gc(0);}if(this.AD.AV<=0){this.Qq.Y(true);this.GS(-1);}
else{this.Qq.Y(false);this.AAA(null,null);}},E9:function(G){var B;this.AeI.Mm(this.
AD.GP*this.AD.AV);this.AeI.Mo((B=this.AD.M)[3]-B[1]);this.AeI.Mn(-this.AD.Bp);},
Du:function(G){if(this.AD.AV>0){switch(this.Cl.CI){case 4:if(this.Fy()>0)this.GS(
this.Fy()-1);break;case 5:if(this.Fy()<(this.AD.AV-1))this.GS(this.Fy()+1);break;
default:this.Cl.Ny=true;}this.AD.Hx(this.Fy(),true,null,null);}else if((this.Cl.
CI!==4)&&(this.Cl.CI!==5))this.Cl.Ny=true;},YW:function(E){if(A.aa0(this.AQ,E))return;
this.AQ=E;this.AD.Aa5(0,this.AD.AV);},GS:function(E){this.AD.GS(E);this.AD.Hx(E,
true,null,null);},Fy:function(){return this.AD.Gd;},Dq:function(E){if(this.KD===
E)return;this.KD=E;this.Qq.R(E);},AAA:function(Acq,EX){this.AD.AAA(Acq,EX);},AR9:
function(E){if(this.ATK===E)return;this.ATK=E;if(E)A.pe([this,this.Cc],this);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Core.BJ._Init.call(this.Cl={I:this
},0);A.Core.CG._Init.call(this.AD={I:this},0);C.Av._Init.call(this.AeI={I:this},
0);A.acg.Text._Init.call(this.Qq={I:this},0);this.__proto__=C.FQ;this.H(SO);this.
Lc=C.Ba;this.Cl.Filter=147;this.AD.AW(0x3F);this.AD.H(SO);this.AD.Aer(40);this.AeI.
AW(0x3A);this.AeI.H(Asb);this.Qq.AW(0x3F);this.Qq.H(Aw7);this.Qq.HG(10);this.Qq.
KI(true);this.Qq.A2(0xA);this.Qq.L(A.jb.Text);this.J(this.AD,0);this.J(this.AeI,
0);this.J(this.Qq,0);this.Cl.BK=[this,this.Du];this.Cl.DS=[this,this.Du];this.AD.
Ei=[this,this.E9];this.AD.G$=[this,this.G$];this.Qq.S(A.aaL(A.fl.Ah));},_Done:function(
){this.__proto__=A.Core.O;this.Cl._Done();this.AD._Done();this.AeI._Done();this.
Qq._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Cl._ReInit();this.AD._ReInit();this.AeI._ReInit();this.Qq._ReInit();this.
Qq.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AeI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Qq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.Ba={AX:null,Hr:-1,CT:function(){this.Cc(this.Hr);},Ai:function(Ae){var B;C.Ci.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hr%2)===1)this.Background.L(A.
jb.CE);else this.Background.L(A.jb.C0);}},YV:function(E){if(this.AX===E)return;this.
AX=E;},Cc:function(Ac){A.ab5("%s",Aw8);},_Init:function(aArg){C.Ci._Init.call(this
,aArg);this.__proto__=C.Ba;},_ReInit:function(){C.Ci._ReInit.call(this);this.CT(
);},_Mark:function(D){var B;C.Ci._Mark.call(this,D);if((B=this.AX)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.EP={Be:null,Fo:null
,DL:null,EJ:null,Vx:null,Jy:null,KD:A.jV,AeJ:false,Init:function(aArg){var B;A.zX([
this,this.A1c],[B=A._GetAutoObject(A.Device.Device),B.ADk,B.AHt],0);A.zX([this,this.
A1c],[B=A._GetAutoObject(A.Device.Device),B.A6H,B.A_V],0);A.zV([this,this.Afz],A.
_GetAutoObject(A.Device.Device).Aq,0);A.zV([this,this.Ab$],A._GetAutoObject(A.Device.
Device).Aq,0);A.zX([this,this.BxY],[B=A._GetAutoObject(A.Device.Helper),B.UA,B.UB
],0);A.pe([this,this.Ab$],this);A.pe([this,this.A$o],this);A.pe([this,this.AwB],
this);},V7:function(G){this.AfV();if(!A._GetAutoObject(A.Device.Device).Jy){this.
A20(A.aaR(A.acf.Bhg),[this,this.BhU],1);this.A20(A.aaR(A.acf.Bmf),[this,this.BhT
],0);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.BgR));A._GetAutoObject(
C.BW).Gu();}var P;for(P=this.Jy.Do()-1;P>=0;P=P-1)switch(this.Jy.C9(P)){case 0:this.
AfU(A.aaR(A.acf.Adj),[this,this.AR_],0);break;case 1:this.AfU(A.aaR(A.acf.Temperature
),[this,this.ASa],1);break;case 2:this.AfU(A.aaR(A.acf.Rating),[this,this.AR$],2
);break;case 3:this.AfU(A.aaR(A.acf.AeW),[this,this.ASb],3);break;default:A.ab5(
"%s",Aw9);}A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.A4l
));A._GetAutoObject(A.Device.Device).Cj(6);},Btm:function(s){this.V7(s);},Du:function(
G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);var Afo=this.Jy.DP(A._GetAutoObject(
A.Device.Device).Jy);if(this.AeJ)return;switch(DW.CI){case 6:{Afo=Afo-1;if(Afo<0
)Afo=this.Jy.Do()-1;A._GetAutoObject(A.Device.Device).Abu(this.Jy.C9(Afo));}break;
case 7:{Afo=Afo+1;if(Afo>=this.Jy.Do())Afo=0;A._GetAutoObject(A.Device.Device).Abu(
this.Jy.C9(Afo));}break;default:DW.Ny=true;}},CJ:function(G){if(this.DL.AyY()){this.
DL.Acz();if(this.DL.AyY()===false)this.Be.AR9(true);return;}else if(this.AeJ)this.
A15(this);if(!!this.Be)this.Be.AR9(true);},Fd:function(G){if(!!this.Be)this.Be.AR9(
false);},AwB:function(G){var B;if(!!this.Be)this.HH(this.Be);this.Be=A._NewObject(
C.AK9,0);this.Be.H(AnN);this.Be.YV(A._GetAutoObject(A.Device.Device).Aq);this.Be.
YW([this,this.AHG]);if(!!this.Fo)this.Be.A7H([B=this.Fo,B.A7c,B.A8r]);this.A2k(this
);this.J(this.Be,0);if(this.AeJ===false)this.A8(this.Be);this.A1c(this);this.Bmd(
this);},A7D:function(G){A._GetAutoObject(A.Device.Device).Cj(0);this.Dr(C.X3);this.
D$.AQ=[this,this.AHG];this.AJ4(this);this.D$.Ar(true);this.A8(this.D$);this.AeJ=
true;},Bh0:function(G){var B;A._GetAutoObject(A.Device.Device).Cj(0);if(!this.Be
)return;var Aa=(C.AA1.isPrototypeOf(B=this.Be.AD.BgE(this.Be.AD.Gd))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).HD(Aa.Hr);else A._GetAutoObject(A.Device.
Helper).W.Ha();this.AfH();},Ao9:function(G){var F;if(!this.EJ)this.A4m(this);else
switch((F=this.EJ,F[1].call(F[0]))){case 0:this.A4m(this);break;case 1:this.BfA(
this);break;case 9:this.BfB(this);break;case 4:this.A4o(this);break;case 6:this.
A4r(this);break;case 8:this.AMu(this);break;case 2:this.A4v(this);break;case 3:this.
BfC(this);break;case 7:this.BfD(this);break;case 5:this.BfE(this);break;case 10:
this.BfG(this);break;case 11:this.A4n(this);break;case 12:this.A4u(this);break;case
13:this.A4w(this);break;case 14:this.A4p(this);break;case 18:this.A4q(this);break;
case 15:this.A4s(this);break;case 16:this.A4x(this);break;case 17:this.A4t(this);
break;default:A.ab5("%s%e",Aw_,(F=this.EJ,F[1].call(F[0])));}},AHG:function(s){this.
Ao9(s);},Bi_:function(G){var B;this.Dr(C.J9);this.D$.AQ=null;this.AeJ=false;this.
Ab$(this);var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).
Aq.Filter){Filter=A._GetAutoObject(A.Device.Device).Aq.Filter.Gy();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DX(1,4))?B:null);if(!!FilterCriterion
)Filter.QQ(FilterCriterion);A._GetAutoObject(A.Device.Device).Aq.Bm(Filter);}this.
N.TF.Ds(255);this.N.TG.Ds(255);this.A8(this.Be);this.D$.Ar(false);},AmU:function(
G){A._GetAutoObject(C.AY).Fm();},Dq:function(E){if(this.KD===E)return;this.KD=E;
this.A2k(this);},AaQ:function(){switch(A._GetAutoObject(A.Device.Device).Jy){case
0:return this.BeL(A._GetAutoObject(A.Device.Device).Al0);case 2:return C.ALL;case
1:return C.ALM;case 3:return C.ALO;case 8:case 9:case 10:case 4:case 5:case 6:return C.
Ai5;case 7:return C.AA0;case 11:return C.AAZ;default:throw new Error(Asc);}},AaR:
function(){switch(A._GetAutoObject(A.Device.Device).Jy){case 0:return this.BeM(A.
_GetAutoObject(A.Device.Device).Al0);case 2:return C.ACf;case 1:return C.AOa;case
3:return C.AOc;case 4:return C.ACc;case 8:case 9:case 10:case 5:case 6:return C.
Ajq;case 7:return C.ACe;case 11:return C.ACd;default:throw new Error(Asc);}},A1c:
function(G){if(!!this.Be){this.Be.NN(this.AaQ());this.Bmj(this);}},Bmj:function(
G){var B;if(!!this.Fo)this.HH(this.Fo);this.Fo=(C.Dv.isPrototypeOf(B=A._NewObject(
this.AaR(),0))?B:null);this.Fo.H(KP);if(!!this.Be)this.Be.A7H([B=this.Fo,B.A7c,B.
A8r]);this.J(this.Fo,0);},BhY:function(G){this.QS(this);A._GetAutoObject(A.Device.
Device).Cj(0);},AR_:function(G){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(
A.Device.Device).Abu(0);},ASa:function(G){A._GetAutoObject(A.Device.Device).Cj(0
);A._GetAutoObject(A.Device.Device).Abu(1);},AR$:function(G){A._GetAutoObject(A.
Device.Device).Cj(0);A._GetAutoObject(A.Device.Device).Abu(2);},ASb:function(G){
A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.Device.Device).Abu(3);
},QS:function(G){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.
Helper).MZ());},A$o:function(s){this.QS(s);},HI:function(G){if(this.AeJ){this.AJ4(
this);return;}this.N.CS(A.aaL(A.ach.EV));this.N.Cm(A.aaL(A.ach.ACy));this.N.C2(A.
aaL(A.ach.Options));this.N.Cw=[this,this.AmU];this.N.Cg=[this,this.A7D];this.N.Cb=[
this,this.Btm];this.N.Hm(A.jV);this.N.FA(A.jV);this.N.BU(A.jV);if(!A._GetAutoObject(
A.Device.Device).Aq.Ch()){this.N.IW.Ds(100);this.N.Cg=null;}else this.N.IW.Ds(255
);},AHD:function(s){this.HI(s);},AfU:function(UE,UF,AH3){if(A._GetAutoObject(A.Device.
Device).Jy===AH3)A._GetAutoObject(C.BW).AiO(UE,UF,true);else A._GetAutoObject(C.
BW).AiO(UE,UF,false);},Afz:function(G){this.A2k(this);if(this.AeJ)A.pe([this,this.
AJ4],this);},AfH:function(){A._GetAutoObject(C.AY).B1(9);},A2k:function(G){if(!this.
Be)return;if(!A._GetAutoObject(A.Device.Device).Aq.Qr()||!A._GetAutoObject(A.Device.
Device).Aq.Filter)this.Be.Dq(A.aaR(A.acf.ADa));else if(A._GetAutoObject(A.Device.
Helper).Aqt(A._GetAutoObject(A.Device.Device).Aq.Filter))this.Be.Dq(this.KD);else
if(!A._GetAutoObject(A.Device.Device).Aq.Filter.DX(1,4)){if(A._GetAutoObject(A.Device.
Helper).ABT(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)this.Be.Dq(A.aaR(A.
acf.AMF));else this.Be.Dq(A.aaR(A.acf.AME));}else this.Be.Dq(A.aaR(A.acf.AQB));}
,Am2:function(G){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EJ)(F=this.
EJ,F[2].call(F[0],0));},Aj6:function(E){if(A.aaZ(this.EJ,E))return;if(!!this.EJ)
A.z$([this,this.AYR],this.EJ,0);this.EJ=E;if(!!E)A.zX([this,this.AYR],this.EJ,0);
if(!!E)A.pe([this,this.AYR],this);},AqY:function(G){var F;A._GetAutoObject(A.Device.
Device).Cj(0);if(!!this.EJ)(F=this.EJ,F[2].call(F[0],1));},Aj7:function(G){var F;
A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EJ)(F=this.EJ,F[2].call(F[0],2
));},Ard:function(G){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EJ)(
F=this.EJ,F[2].call(F[0],3));},AR5:function(G){var F;A._GetAutoObject(A.Device.Device
).Cj(0);if(!!this.EJ)(F=this.EJ,F[2].call(F[0],7));},AR6:function(G){var F;A._GetAutoObject(
A.Device.Device).Cj(0);if(!!this.EJ)(F=this.EJ,F[2].call(F[0],5));},A4v:function(
G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(A.Device.Helper).HD(this.Be.
Fy());this.DL.P7(1);}},Ey:function(UE,UF,Aoj){var F;if(!!this.EJ&&((F=this.EJ,F[
1].call(F[0]))===Aoj))A._GetAutoObject(C.BW).AiO(UE,UF,true);else A._GetAutoObject(
C.BW).AiO(UE,UF,false);},Bji:function(G){var F;A._GetAutoObject(A.Device.Device).
Cj(0);if(!!this.EJ)(F=this.EJ,F[2].call(F[0],4));},A4o:function(G){if(!this.Be)return;
if(this.M2()){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fy());this.DL.Byo();}
},Bjj:function(G){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EJ)(F=
this.EJ,F[2].call(F[0],6));},A4r:function(G){if(!this.Be)return;if(this.M2()){A.
_GetAutoObject(A.Device.Helper).HD(this.Be.Fy());this.DL.Byp();}},AMu:function(G
){if(!this.Be)return;if(this.M2()){A._GetAutoObject(A.Device.Helper).HD(this.Be.
Fy());this.DL.P7(1024);}},ARI:function(G){var F;A._GetAutoObject(A.Device.Device
).Cj(0);if(!!this.EJ)(F=this.EJ,F[2].call(F[0],8));},Abv:function(G){var F;A._GetAutoObject(
A.Device.Device).Cj(0);if(!!this.EJ)(F=this.EJ,F[2].call(F[0],9));},BfC:function(
G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(A.Device.Helper).HD(this.Be.
Fy());this.DL.P7(2);}},A4m:function(G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fy());if(A._GetAutoObject(A.Device.Helper).AjA(A._GetAutoObject(
A.Device.Helper).W.WhereAbouts))A._GetAutoObject(A.Device.Device).A6(66,true,A.jV
,0,null);else this.AfG();}},BfA:function(G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fy());this.DL.P7(16);}},AfG:function(){A._GetAutoObject(
C.AY).B1(37);},BfD:function(G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fy());this.DL.P7(4);}},BfE:function(G){if(!this.Be)return;
if(this.M2()){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fy());this.DL.P7(8);}
},BfB:function(G){var B;if(!this.Be)return;if(this.M2()){A._GetAutoObject(A.Device.
Helper).HD(this.Be.Fy());if(this.AeJ){A.zX([this,this.Azp],[B=this.DL,B.Am1,B.Jn
],0);this.A15(this);}this.DL.Acz();}},A2X:function(UE,UF,Bvh){if(Bvh)A._GetAutoObject(
C.BW).A2Y(UE,UF,true);else A._GetAutoObject(C.BW).A2Y(UE,UF,false);},AJ4:function(
G){this.N.Hm(A.jV);this.N.BU(A.jV);this.N.CS(A.aaL(A.ach.AdY));this.N.Cw=[this,this.
Bi_];this.N.TF.Ds(100);this.N.TG.Ds(100);var Gr=A._GetAutoObject(A.Device.Device
).Aq.Ch();if(Gr<=0){this.N.Cm(null);this.N.C2(null);this.N.Cg=null;this.N.Cb=null;
this.N.Y3=false;this.N.Y4=false;}else if(Gr===1){this.N.Cm(null);this.N.C2(A.aaL(
A.ach.AdZ));this.N.Cg=null;this.N.Cb=[this,this.AHG];this.N.Y3=false;this.N.Y4=false;
}else{this.N.Cm(A.aaL(A.ach.Aqk));this.N.C2(A.aaL(A.ach.Aqr));this.N.Cg=[this,this.
A1H];this.N.Cb=[this,this.A1I];this.N.Y3=true;this.N.Y4=true;}},A1H:function(G){
if(!this.Be)return;if(this.Be.Fy()<(A._GetAutoObject(A.Device.Device).Aq.Ch()-1)
)this.Be.GS(this.Be.Fy()+1);},A1I:function(G){if(!this.Be)return;if(this.Be.Fy()>
0)this.Be.GS(this.Be.Fy()-1);},Bmd:function(G){if(A._GetAutoObject(A.Device.Helper
).W.Id>0){var A$=A._GetAutoObject(A.Device.Device).Aq.K7(0,A._GetAutoObject(A.Device.
Helper).W.Id);if(A$>=0){this.Be.GS(A$);A.ab5("%s",Aw$);}}},M2:function(){return this.
Be.Fy()>=0;},AjM:function(){return A._GetAutoObject(A.Device.Device).Aq.Ch()>5;}
,AfV:function(){this.BeA();A._GetAutoObject(C.BW).Tc(A.aaR(A.acf.ASQ),[this,this.
A7D]);A._GetAutoObject(C.BW).Gu();},Ab$:function(G){if(this.AeJ)this.AJ4(this);else
this.HI(this);},A15:function(G){var aFilter=A._GetAutoObject(A.Device.Device).Aq.
Filter.Gy();var Ax1=aFilter.DX(1,4);if(!!Ax1){aFilter.QQ(Ax1);A._GetAutoObject(A.
Device.Device).Aq.Bm(aFilter);if(!!this.Be)this.Be.GS(0);}},Azp:function(G){var B;
if(!this.DL.Gl&&this.AeJ){A.z$([this,this.Azp],[B=this.DL,B.Am1,B.Jn],0);this.A15(
this);}},Bk9:function(G){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.
EJ)(F=this.EJ,F[2].call(F[0],10));},BfG:function(G){if(!this.Be)return;if(this.M2(
)){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fy());this.DL.P7(256);}},A1z:function(
G){A.pe([this,this.AHD],this);},AYR:function(s){this.A1z(s);},Bjf:function(G){var
F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EJ)(F=this.EJ,F[2].call(F[0]
,11));},A4n:function(G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(A.Device.
Helper).HD(this.Be.Fy());this.DL.P7(4096);}},A4u:function(G){if(!this.Be)return;
if(this.M2()){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fy());this.DL.P7(16384
);}},BkB:function(G){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EJ)(
F=this.EJ,F[2].call(F[0],12));},A4w:function(G){if(!this.Be)return;if(this.M2()){
A._GetAutoObject(A.Device.Helper).HD(this.Be.Fy());this.Bx$();}},Bx$:function(){
A._GetAutoObject(C.AY).AgY(86);},A4p:function(G){if(!this.Be)return;if(this.M2()
){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fy());this.DL.P7(32768);}},A4s:function(
G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(A.Device.Helper).HD(this.Be.
Fy());this.DL.P7(65536);}},A4x:function(G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fy());this.DL.P7(131072);}},BkW:function(G){var F;A.
_GetAutoObject(A.Device.Device).Cj(0);if(!!this.EJ)(F=this.EJ,F[2].call(F[0],16)
);},BeA:function(){if(!A._GetAutoObject(A.Device.Device).Aq.Filter||A._GetAutoObject(
A.Device.Helper).Aqt(A._GetAutoObject(A.Device.Device).Aq.Filter))A._GetAutoObject(
C.BW).Xm(A.aaR(A.acf.AA4));else A._GetAutoObject(C.BW).Tc(A.aaR(A.acf.AA4),[this
,this.BhY]);A._GetAutoObject(C.BW).Tc(A.aaR(A.acf.Akm),[this,this.Bh0]);A._GetAutoObject(
C.BW).Gu();},BeM:function(An1){switch(An1){case 0:return C.Ajq;case 1:return C.AN9;
default:throw new Error(Ach+An1.toFixed());}},BeL:function(An1){switch(An1){case
0:return C.Ai5;case 1:return C.ALI;default:throw new Error(Ach+An1.toFixed());}}
,BhT:function(G){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.Device.
Device).AqZ(0);},BhU:function(G){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(
A.Device.Device).AqZ(1);},A20:function(UE,UF,An1){if(A._GetAutoObject(A.Device.Device
).Al0===An1)A._GetAutoObject(C.BW).AiO(UE,UF,true);else A._GetAutoObject(C.BW).AiO(
UE,UF,false);},A4t:function(G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fy());this.DL.P7(128);}},BxY:function(G){var B;if(!this.
Be)return;A.pe([B=this.Be,B.Cc],this);},A4q:function(G){if(!this.Be)return;if(this.
M2()){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fy());this.DL.P7(524288);}},BfF:
function(G){if(!this.Be)return;if(this.M2()){A._GetAutoObject(A.Device.Helper).HD(
this.Be.Fy());this.DL.P7(262144);}},_Init:function(aArg){C.AB._Init.call(this,aArg
);C.ACf._Init.call(this.Vx={I:this},0);C.Jy._Init.call(this.Jy={I:this},0);this.
__proto__=C.EP;this.Background.H(B9);this.N.Y(true);this.N.Oz(true);this.N.OA(true
);this.D$.A72(A.jb.C0);this.D$.A73(A.jb.Text);this.Dr(C.J9);this.Vx.H(KP);this.KD=
A.aaR(A.acf.ADa);this.J(this.Vx,0);this.DL=A._GetAutoObject(C.DL);this.Init(aArg
);},_Done:function(){this.__proto__=C.AB;this.Vx._Done();this.Jy._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Vx._ReInit();this.Jy.
_ReInit();this.Dq(A.aaR(A.acf.ADa));},_Mark:function(D){var B;C.AB._Mark.call(this
,D);if((B=this.Be)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fo)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.DL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vx)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Jy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalListScreen"
};C.AA1={AN:null,A9:null,Uj:null,Ab3:null,Init:function(aArg){},Bg:function(aSize
){C.Ba.Bg.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.
AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Uj.H([this.V.M[2],0,((aSize[
0]*80)/100)|0,aSize[1]]);this.A9.H([this.Uj.M[2]-1,0,this.Uj.M[2]+1,aSize[1]]);this.
Ab3.H([this.Uj.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae
);this.Uj.L(this.V.AP);this.Ab3.L(this.V.AP);},Cc:function(Ac){if(!this.AX)return;
this.Hr=Ac;if(!!this.AX){this.U(this.AX.CA(Ac,1).toFixed());this.Uj.R(this.AX.CA(
Ac,2).toFixed());this.Ab3.R(this.AX.CA(Ac,3).toFixed());this.An();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI.
_Init.call(this.A9={I:this},0);A.acg.Text._Init.call(this.Uj={I:this},0);A.acg.Text.
_Init.call(this.Ab3={I:this},0);this.__proto__=C.AA1;this.AN.L(A.jb.Bb);this.A9.
L(A.jb.Bb);this.Uj.L(A.jb.Text);this.Ab3.L(A.jb.Text);this.J(this.AN,0);this.J(this.
A9,0);this.J(this.Uj,0);this.J(this.Ab3,0);this.Uj.S(A.aaL(A.fl.Ah));this.Ab3.S(
A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AN._Done(
);this.A9._Done();this.Uj._Done();this.Ab3._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AN._ReInit();this.A9._ReInit();this.Uj._ReInit(
);this.Ab3._ReInit();this.Uj.S(A.aaL(A.fl.Ah));this.Ab3.S(A.aaL(A.fl.Ah));},_Mark:
function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ab3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Ady={Om:null,Ss:null,Mc:null,Init:function(aArg){var B;A.zX([this,this.A1f],[
B=A._GetAutoObject(A.Device.Device),B.Avo,B.AxH],0);A.zX([this,this.AcY],[B=A._GetAutoObject(
A.Device.Device),B.Avl,B.AxG],0);A.pe([this,this.AcY],this);},Ai:function(Ae){C.
AB.Ai.call(this,Ae);this.Ss.R(A._GetAutoObject(A.Device.Device).Aar.toFixed()+Axa
);this.Om.Y(A._GetAutoObject(A.Device.Device).Al9);},AcY:function(G){this.An();}
,MN:function(G){A._GetAutoObject(C.AY).Fm();},A1f:function(G){if(A._GetAutoObject(
A.Device.Device).Al9===false){this.Om.Y(false);A._GetAutoObject(C.AY).Fm();}else
this.Om.Y(true);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.
call(this.Om={I:this},0);A.acg.Text._Init.call(this.Ss={I:this},0);C.Mc._Init.call(
this.Mc={I:this},0);this.__proto__=C.Ady;var B;this.Background.L(A.jb.C0);this.N.
Y(true);this.N.BU(A.aaR(A.acf.Ok));this.Om.H(AF7);this.Om.R(A.aaR(A.acf.Om));this.
Om.L(A.jb.Text);this.Om.Y(false);this.Ss.H(AF8);this.Ss.R(AF9);this.Ss.L(A.jb.Text
);this.Mc.H(AF_);this.J(this.Om,0);this.J(this.Ss,0);this.J(this.Mc,0);this.N.Cb=[
this,this.MN];this.Om.S(A.aaL(A.fl.Ah));this.Ss.S(A.aaL(A.fl.Ah));this.Mc.Au([B=
A._GetAutoObject(A.Device.Device),B.Avl,B.AxG]);this.Mc.A8h([B=A._GetAutoObject(
A.Device.Device),B.Avo,B.AxH]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.Om._Done();this.Ss._Done();this.Mc._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Om._ReInit();this.Ss._ReInit();this.Mc._ReInit(
);this.N.BU(A.aaR(A.acf.Ok));this.Om.R(A.aaR(A.acf.Om));this.Om.S(A.aaL(A.fl.Ah)
);this.Ss.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Om)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ss)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.Mc={Adt:null,Adu:null,OX:function(G){var F;if(!!this.Q){this.A0p();var AcC=(
F=this.Q,F[1].call(F[0]));if(AcC>20)this.Oh.L(A.jb.EU);else this.Oh.L(A.jb.FW);this.
Oh.L((this.Oh.AP&0x00FFFFFF)|(this.Alb(AcC,0,20)<<24));this.Tk.L((this.Tk.AP&0x00FFFFFF
)|(this.Alb(AcC,21,40)<<24));this.Tl.L((this.Tl.AP&0x00FFFFFF)|(this.Alb(AcC,41,
60)<<24));this.Adt.L((this.Adt.AP&0x00FFFFFF)|(this.Alb(AcC,61,80)<<24));this.Adu.
L((this.Adu.AP&0x00FFFFFF)|(this.Alb(AcC,81,100)<<24));}},A0p:function(){var F;if(
!!this.Q){if((F=this.Q,F[1].call(F[0]))>80)this.UH=this.Adu;else if((F=this.Q,F[
1].call(F[0]))>60)this.UH=this.Adt;else if((F=this.Q,F[1].call(F[0]))>40)this.UH=
this.Tl;else if((F=this.Q,F[1].call(F[0]))>20)this.UH=this.Tk;else this.UH=this.
Oh;}else this.UH=null;},_Init:function(aArg){C.Oj._Init.call(this,aArg);A.acg.AI.
_Init.call(this.Adt={I:this},0);A.acg.AI._Init.call(this.Adu={I:this},0);this.__proto__=
C.Mc;this.H(Axb);this.NF.H(Axb);this.Oh.H(AUc);this.Tk.H(AUd);this.Tl.H(AUe);this.
Adt.H(AUf);this.Adt.L(A.jb.EU);this.Adu.H(AUg);this.Adu.L(A.jb.EU);this.J(this.Adt
,0);this.J(this.Adu,0);this.NF.Ax(A.aaL(A.ach.ALs));},_Done:function(){this.__proto__=
C.Oj;this.Adt._Done();this.Adu._Done();C.Oj._Done.call(this);},_ReInit:function(
){C.Oj._ReInit.call(this);this.Adt._ReInit();this.Adu._ReInit();},_Mark:function(
D){var B;C.Oj._Mark.call(this,D);if((B=this.Adt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Adu)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.ATj={NT:null,Lk:null,Akz:null,Zm:null,Zl:null,CT:function(){this.An();},Init:
function(aArg){var B;A.zX([this,this.Apa],[B=A._GetAutoObject(A.Device.Device),B.
ARf,B.AYD],0);A.zX([this,this.Apa],[B=A._GetAutoObject(A.Device.Device),B.ARi,B.
AYF],0);A.zX([this,this.Apa],[B=A._GetAutoObject(A.Device.Device),B.A7m,B.A$e],0
);A.pe([this,this.Apa],this);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.Hu(this
);this.AAo(this);this.By$(this);this.DD(this);},BxC:function(G){A._GetAutoObject(
A.Device.Device).ArW();},Apa:function(G){this.An();},Hu:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Zm.Y(false);break;case 4:{var A1Z;if(!A._GetAutoObject(A.Device.Device).AeR)A1Z=
0;else A1Z=((A._GetAutoObject(A.Device.Device).AwQ*100)/A._GetAutoObject(A.Device.
Device).AeR)|0;this.Zm.Bx(A1Z);this.Zm.Y(true);}break;default:A.ab5("%s%e",Asd,A.
_GetAutoObject(A.Device.Device).SyncState);}},By$:function(G){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CE);this.Lk.L(A.jb.Text);this.NT.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.FW);this.Lk.L(A.jb.Bh);this.NT.L(A.jb.Bh);}break;default:A.ab5(
"%s%e",Asd,A._GetAutoObject(A.Device.Device).SyncState);}},DD:function(G){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CS(null);this.N.Cw=null;this.N.BU(A.jV);this.N.Cb=null;}break;
case 7:{this.N.CS(null);this.N.Cw=null;this.N.BU(A.aaR(A.acf.Ok));this.N.Cb=[this
,this.BxC];}break;default:A.ab5("%s%e",Asd,A._GetAutoObject(A.Device.Device).SyncState
);}},AAo:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lk.R(A.aaR(A.acf.Bm5));break;case 1:this.Lk.R(A.aaR(A.acf.Bm2));break;
case 2:this.Lk.R(A.aaR(A.acf.BmZ));break;case 3:this.Lk.R(A.aaR(A.acf.Bm3));break;
case 4:this.Lk.R((A.aaR(A.acf.Bm1)+Axc)+A._GetAutoObject(A.Device.Helper).Nb(A._GetAutoObject(
A.Device.Helper).Nb(A.aaR(A.acf.BlI),PW,A._GetAutoObject(A.Device.Device).AwQ.toFixed(
)),Axd,A._GetAutoObject(A.Device.Device).AeR.toFixed()));break;case 5:this.Lk.R(
A.aaR(A.acf.Bm4));break;case 7:this.Lk.R(A.aaR(A.acf.Bm0));break;default:A.ab5("%s%e"
,Asd,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AB._Init.
call(this,aArg);C.CP._Init.call(this.NT={I:this},0);C.CP._Init.call(this.Lk={I:this
},0);A.acg.Am._Init.call(this.Akz={I:this},0);A.acq.ACh._Init.call(this.Zm={I:this
},0);A.acq.ACi._Init.call(this.Zl={I:this},0);this.__proto__=C.ATj;this.N.Y(true
);this.NT.H(AUh);this.NT.R(A.aaR(A.acf.NT));this.Lk.AW(0x3F);this.Lk.H(AUi);this.
Lk.A2(0x12);this.Akz.H(AUj);this.Akz.L(A.jb.AR);this.Zm.H(AUk);this.Zm.Ar(false);
this.Zm.Bx(0);this.Zl.Bk3(0);this.Zl.A8E(0);this.Zl.A8C(A.jb.AR);this.Zl.A8B(0);
this.Zl.AEP(AF$);this.J(this.NT,0);this.J(this.Lk,0);this.J(this.Akz,0);this.J(this.
Zm,0);this.NT.S(A.aaL(A.fl.Ez));this.NT.A5(A.aaL(A.fl.Ah));this.NT.CC(A.aaL(A.fl.
Ak));this.Lk.S(A.aaL(A.fl.Ah));this.Lk.A5(A.aaL(A.fl.Ak));this.Lk.CC(A.aaL(A.fl.
By));this.Akz.Ax(A.aaL(A.ach.APl));this.Zm.OnSetAppearance(this.Zl);this.Zl.A8D(
A.aaL(A.ach.NI));this.Zl.A8A(A.aaL(A.ach.NI));this.Init(aArg);},_Done:function(){
this.__proto__=C.AB;this.NT._Done();this.Lk._Done();this.Akz._Done();this.Zm._Done(
);this.Zl._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.NT._ReInit();this.Lk._ReInit();this.Akz._ReInit();this.Zm._ReInit();this.
Zl._ReInit();this.NT.R(A.aaR(A.acf.NT));this.NT.S(A.aaL(A.fl.Ez));this.NT.A5(A.aaL(
A.fl.Ah));this.NT.CC(A.aaL(A.fl.Ak));this.Lk.S(A.aaL(A.fl.Ah));this.Lk.A5(A.aaL(
A.fl.Ak));this.Lk.CC(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.NT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Akz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zm
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zl)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Aqe={_Init:function(aArg){C.AB$._Init.call(this,aArg
);this.__proto__=C.Aqe;this.A75(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cv:A.abi(3,0,{0:2,2:1}),Do:function(
){return 3;},C9:function(aIndex){if(aIndex>=3)return-1;return this.Cv.Get(aIndex
);},Gg:function(aIndex){return this.GenderToString.BX(this.C9(aIndex));},DP:function(
A1){var P=0;while(P<3){if(this.Cv.Get(P)===A1)return P;P=P+1;}return-1;},Hj:function(
){var P=0;var max=-1;while(P<3){if(this.Cv.Get(P)>max)max=this.Cv.Get(P);P=P+1;}
return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.JG(
E);},LT:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Aft],[B=this.Animal,B.V6,B.JG],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Aft],[B=this.Animal,B.V6,B.JG],0);A.pe([this,this.Aft],this);},Aft:function(
G){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.abo([this,this.B_,
this.Ca],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cv=[]).__proto__=C.Gender.Cv;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cv:A.abi(4,0,{1:1,2:2,3:3}),Do:function(){return 4;},C9:function(aIndex){if(
aIndex>=4)return-1;return this.Cv.Get(aIndex);},Gg:function(aIndex){return this.
BirthTypeToString.BX(this.C9(aIndex));},DP:function(A1){var P=0;while(P<4){if(this.
Cv.Get(P)===A1)return P;P=P+1;}return-1;},Hj:function(){var P=0;var max=-1;while(
P<4){if(this.Cv.Get(P)>max)max=this.Cv.Get(P);P=P+1;}return max;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.AjX(E);},AZG:function(G){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.abo([this,this.B_,this.
Ca],0);},LT:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.AZG],[B=this.Animal,B.AQU,B.AjX],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AZG],[B=this.Animal,B.AQU,B.AjX],0);A.pe([this,this.AZG],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cv=[]).__proto__=C.BirthType.Cv;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,AbW:null,Do:
function(){return A._GetAutoObject(A.Device.Helper).Ado.Mt;},C9:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Ado.Mt)return-1;return A._GetAutoObject(
A.Device.Helper).Ado.Get(aIndex);},Gg:function(aIndex){return this.AbW.BX(this.C9(
aIndex));},DP:function(A1){var P=0;while(P<A._GetAutoObject(A.Device.Helper).Ado.
Mt){if(A._GetAutoObject(A.Device.Helper).Ado.Get(P)===A1)return P;P=P+1;}return-
1;},Hj:function(){var P=0;var max=-1;while(P<A._GetAutoObject(A.Device.Helper).Ug.
Mt){if(A._GetAutoObject(A.Device.Helper).Ug.Get(P)>max)max=A._GetAutoObject(A.Device.
Helper).Ug.Get(P);P=P+1;}return max;},Au:function(E){C.AC.Au.call(this,E);if(!!this.
Animal)this.Animal.DT(E);},AZy:function(G){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.abo([this,this.B_,this.Ca],0);},LT:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.AZy],[B=this.Animal,B.PA,B.DT],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.AZy],[B=this.Animal,B.PA,B.DT],0);A.pe([
this,this.AZy],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.AbW={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.AbW._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.AbW._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AbW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.AS1={Init:function(aArg){var B;A.pe([this,this.Ae$],this);A.zX([this,this.Ae$
],[B=A._GetAutoObject(A.Device.Device),B.AqP,B.AsF],0);},A16:function(G){A._GetAutoObject(
A.Device.Device).A6(38,true,A.jV,0,[this,this.A$u]);},A1G:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).ArI(this);},AZZ:function(G){var F;if(this.A3===1){var BN=this.D0;
this.D0=this.D0-10;if(this.D0<this.Alj)this.D0=this.Alj;if(this.D0<A._GetAutoObject(
A.Device.Device).Zo)this.D0=A._GetAutoObject(A.Device.Device).Zo;if(this.DN!==BN
){if(!!this.JJ)(F=this.JJ,F[2].call(F[0],this.D0));A.abo(this.JJ,0);}}if(this.A3===
2){var BN=this.DN;this.DN=this.DN-10;if(this.DN<this.D0)this.DN=this.D0;if(this.
DN!==BN){if(!!this.JI)(F=this.JI,F[2].call(F[0],this.DN));A.abo(this.JI,0);}}this.
DD(this);this.An();},A0y:function(G){var F;if(this.A3===1){var BN=this.D0;this.D0=
this.D0+10;if(this.D0>this.DN)this.D0=this.DN;if(this.D0!==BN){if(!!this.JJ)(F=this.
JJ,F[2].call(F[0],this.D0));A.abo(this.JJ,0);}}if(this.A3===2){var BN=this.DN;this.
DN=this.DN+10;if(this.DN>this.Ale)this.DN=this.Ale;if(this.DN!==BN){if(!!this.JI
)(F=this.JI,F[2].call(F[0],this.DN));A.abo(this.JI,0);}}this.DD(this);this.An();
},Hu:function(G){this.Pt.R(AGa+A._GetAutoObject(A.Device.Converter).Aku(this.D0)
);this.Pu.R(AGa+A._GetAutoObject(A.Device.Converter).Aku(this.DN));this.Sb.R(A._GetAutoObject(
A.acj.Temperature).Alc());},A0r:function(AsM){if(AsM===1)return this.Pt;else if(
AsM===2)return this.Pu;else return null;},_Init:function(aArg){C.AbU._Init.call(
this,aArg);this.__proto__=C.AS1;this.Ale=5000;this.Alj=3000;this.U(A.aaR(A.acf.AqE
));this.Background.H(Ae6);this.V.H(BC);this.V.R(A.aaR(A.acf.AFH));this.V.A2(0x12
);this.Init(aArg);},_ReInit:function(){C.AbU._ReInit.call(this);this.U(A.aaR(A.acf.
AqE));this.V.R(A.aaR(A.acf.AFH));},_className:"Application::SettingsItemThresholdsTemp"
};C.Es={Background:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.
AI._Init.call(this.Background={I:this},0);this.__proto__=C.Es;this.H(BC);this.Background.
H(BC);this.Background.L(A.jb.CE);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AQ:null,Aau:null,Aay:null,Aaw:
null,Background:null,Aat:null,Aax:null,Aav:null,Ai9:null,AqK:null,Vi:null,A4:0,Bxi:
function(G){if(this.Ai9.CI===6){if(this.A4===1)this.And(2);else if(this.A4===2)this.
And(3);else this.And(1);}else if(this.Ai9.CI===7){if(this.A4===3)this.And(2);else
if(this.A4===2)this.And(1);else this.And(3);}},And:function(E){if(this.A4===E)return;
this.A4=E;switch(this.A4){case 3:this.Background.H(this.Aat.M);break;case 2:this.
Background.H(this.Aax.M);break;case 1:this.Background.H(this.Aav.M);break;default:
this.Background.H(AnO);}},IP:function(G){var B;if(!!this.AQ)(B=this.AQ)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Hc._Init.
call(this.Aau={I:this},0);A.acg.Hc._Init.call(this.Aay={I:this},0);A.acg.Hc._Init.
call(this.Aaw={I:this},0);A.acg.Am._Init.call(this.Background={I:this},0);A.acg.
AdP._Init.call(this.Aat={I:this},0);A.acg.AdP._Init.call(this.Aax={I:this},0);A.
acg.AdP._Init.call(this.Aav={I:this},0);A.Core.BJ._Init.call(this.Ai9={I:this},0
);A.Core.BJ._Init.call(this.AqK={I:this},0);A.Graphics.ALj._Init.call(this.Vi={I:
this},0);this.__proto__=C.Rating;this.H(AUl);this.Aau.H(AGb);this.Aau.L(A.jb.Text
);this.Aau.Anb(AkH);this.Aau.NO(3);this.Aau.Y(true);this.Aay.H(AGc);this.Aay.L(A.
jb.Text);this.Aay.Anb(AkH);this.Aay.NO(3);this.Aay.Y(true);this.Aaw.H(AGd);this.
Aaw.L(A.jb.Text);this.Aaw.Anb(AkH);this.Aaw.NO(3);this.Aaw.Y(true);this.Background.
H(AnO);this.Background.L(A.jb.AR);this.Aat.H(AGb);this.Aat.L(A.jb.EU);this.Aat.Anb(
AkH);this.Aat.Y(true);this.Aax.H(AGc);this.Aax.L(A.jb.HZ);this.Aax.Anb(AkH);this.
Aax.Y(true);this.Aav.H(AGd);this.Aav.L(A.jb.FW);this.Aav.Anb(AkH);this.Aav.Y(true
);this.Ai9.Filter=147;this.AqK.Filter=1;this.Vi.BjI(360);this.Vi.BkS(22);this.Vi.
Bk2(2);this.J(this.Aau,0);this.J(this.Aay,0);this.J(this.Aaw,0);this.J(this.Background
,0);this.J(this.Aat,0);this.J(this.Aax,0);this.J(this.Aav,0);this.Aau.YX(this.Vi
);this.Aay.YX(this.Vi);this.Aaw.YX(this.Vi);this.Background.Ax(A.aaL(A.ach.NH));
this.Aat.YX(this.Vi);this.Aax.YX(this.Vi);this.Aav.YX(this.Vi);this.Ai9.BK=[this
,this.Bxi];this.AqK.BK=[this,this.IP];},_Done:function(){this.__proto__=A.Core.O;
this.Aau._Done();this.Aay._Done();this.Aaw._Done();this.Background._Done();this.
Aat._Done();this.Aax._Done();this.Aav._Done();this.Ai9._Done();this.AqK._Done();
this.Vi._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Aau._ReInit();this.Aay._ReInit();this.Aaw._ReInit();this.Background.
_ReInit();this.Aat._ReInit();this.Aax._ReInit();this.Aav._ReInit();this.Ai9._ReInit(
);this.AqK._ReInit();this.Vi._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aau)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aay)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aaw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aat)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aax).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aav)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ai9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AqK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Vi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.ArK={AjO:null,Ars:null,Background:null,Tw:null,Tr:null,Abn:null,Abm:null,Abl:
null,Ab0:null,AbZ:null,AbY:null,AbQ:null,AbP:null,Abf:null,Abe:null,AbG:null,AbF:
null,ApU:null,Init:function(aArg){},Bhx:function(G){this.Abn.R(AGe);this.Abm.R(A.
jV);this.Abl.R(A.jV);this.Ab0.R(AUm);this.AbZ.R(A.jV);this.AbY.R(A.jV);this.AbQ.
R(A.jV);this.AbP.R(A.jV);this.Abf.R(A.jV);this.Abe.R(A.jV);this.AbG.R(A.jV);this.
AbF.R(A.jV);},Blq:function(G){this.Tr.Y(true);this.Tw.Y(true);var Ir=this.Ib();if(
!Ir)return;this.Tw.R(Ir.GetFPS().toFixed()+AUn);this.Tr.R(AUo);this.Tr.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(
this.AjO={I:this},0);A.Core.Timer._Init.call(this.Ars={I:this},0);A.acg.AI._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.Tw={I:this},0);A.acg.
Text._Init.call(this.Tr={I:this},0);A.acg.Text._Init.call(this.Abn={I:this},0);A.
acg.Text._Init.call(this.Abm={I:this},0);A.acg.Text._Init.call(this.Abl={I:this}
,0);A.acg.Text._Init.call(this.Ab0={I:this},0);A.acg.Text._Init.call(this.AbZ={I:
this},0);A.acg.Text._Init.call(this.AbY={I:this},0);A.acg.Text._Init.call(this.AbQ={
I:this},0);A.acg.Text._Init.call(this.AbP={I:this},0);A.acg.Text._Init.call(this.
Abf={I:this},0);A.acg.Text._Init.call(this.Abe={I:this},0);A.acg.Text._Init.call(
this.AbG={I:this},0);A.acg.Text._Init.call(this.AbF={I:this},0);A.acg.AI._Init.call(
this.ApU={I:this},0);this.__proto__=C.ArK;this.H(Ae7);this.Ar(false);this.AjO.PC(
2000);this.AjO.V8(1);this.AjO.Ar(true);this.Ars.Ar(true);this.Background.AW(0x3F
);this.Background.H(Ae7);this.Background.L(0x78000000);this.Tw.H(AGf);this.Tw.A2(
0x14);this.Tw.R(A.jV);this.Tw.L(0xFFFFFC00);this.Tw.Y(false);this.Tr.H(Ase);this.
Tr.A2(0x11);this.Tr.R(A.jV);this.Tr.Y(false);this.Abn.H(AGg);this.Abn.A2(0x11);this.
Abn.R(A.jV);this.Abm.H(AGh);this.Abm.A2(0x11);this.Abm.R(A.jV);this.Abl.H(Axe);this.
Abl.A2(0x14);this.Abl.R(A.jV);this.Ab0.H(AGi);this.Ab0.A2(0x11);this.Ab0.R(A.jV);
this.AbZ.H(Axf);this.AbZ.A2(0x11);this.AbZ.R(A.jV);this.AbY.H(AUp);this.AbY.A2(0x14
);this.AbY.R(A.jV);this.AbQ.H(AUq);this.AbQ.A2(0x11);this.AbQ.R(A.jV);this.AbP.H(
AUr);this.AbP.A2(0x14);this.AbP.R(A.jV);this.Abf.H(AUs);this.Abf.A2(0x11);this.Abf.
R(A.jV);this.Abe.H(AGj);this.Abe.A2(0x14);this.Abe.R(A.jV);this.AbG.H(AUt);this.
AbG.A2(0x11);this.AbG.R(A.jV);this.AbF.H(OP);this.AbF.A2(0x14);this.AbF.R(A.jV);
this.ApU.H(Axg);this.J(this.Background,0);this.J(this.Tw,0);this.J(this.Tr,0);this.
J(this.Abn,0);this.J(this.Abm,0);this.J(this.Abl,0);this.J(this.Ab0,0);this.J(this.
AbZ,0);this.J(this.AbY,0);this.J(this.AbQ,0);this.J(this.AbP,0);this.J(this.Abf,
0);this.J(this.Abe,0);this.J(this.AbG,0);this.J(this.AbF,0);this.J(this.ApU,0);this.
AjO.Mp=[this,this.Bhx];this.Ars.Mp=[this,this.Blq];this.Tw.S(A.aaL(A.fl.Ak));this.
Tr.S(A.aaL(A.fl.Ak));this.Abn.S(A.aaL(A.fl.Ak));this.Abm.S(A.aaL(A.fl.Ak));this.
Abl.S(A.aaL(A.fl.Ak));this.Ab0.S(A.aaL(A.fl.Ak));this.AbZ.S(A.aaL(A.fl.Ak));this.
AbY.S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.AbP.S(A.aaL(A.fl.Ak));this.
Abf.S(A.aaL(A.fl.Ak));this.Abe.S(A.aaL(A.fl.Ak));this.AbG.S(A.aaL(A.fl.Ak));this.
AbF.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;
this.AjO._Done();this.Ars._Done();this.Background._Done();this.Tw._Done();this.Tr.
_Done();this.Abn._Done();this.Abm._Done();this.Abl._Done();this.Ab0._Done();this.
AbZ._Done();this.AbY._Done();this.AbQ._Done();this.AbP._Done();this.Abf._Done();
this.Abe._Done();this.AbG._Done();this.AbF._Done();this.ApU._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AjO._ReInit();this.
Ars._ReInit();this.Background._ReInit();this.Tw._ReInit();this.Tr._ReInit();this.
Abn._ReInit();this.Abm._ReInit();this.Abl._ReInit();this.Ab0._ReInit();this.AbZ.
_ReInit();this.AbY._ReInit();this.AbQ._ReInit();this.AbP._ReInit();this.Abf._ReInit(
);this.Abe._ReInit();this.AbG._ReInit();this.AbF._ReInit();this.ApU._ReInit();this.
Tw.S(A.aaL(A.fl.Ak));this.Tr.S(A.aaL(A.fl.Ak));this.Abn.S(A.aaL(A.fl.Ak));this.Abm.
S(A.aaL(A.fl.Ak));this.Abl.S(A.aaL(A.fl.Ak));this.Ab0.S(A.aaL(A.fl.Ak));this.AbZ.
S(A.aaL(A.fl.Ak));this.AbY.S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.AbP.
S(A.aaL(A.fl.Ak));this.Abf.S(A.aaL(A.fl.Ak));this.Abe.S(A.aaL(A.fl.Ak));this.AbG.
S(A.aaL(A.fl.Ak));this.AbF.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.AjO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ars).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Tw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tr)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abm)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ab0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbZ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AbY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ApU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AFp={Fu:null,Dg:null,At:null,Jk:null,HB:null,TW:null,Bb:null,R2:null,Gi:null
,Gh:null,FK:0,A3:0,Bg6:false,Init:function(aArg){},Ai:function(Ae){C.Dk.Ai.call(
this,Ae);this.Hl.Y(false);this.HV.Y(false);if(!!this.Dg){this.R2.R(this.At.Format(
AUu));this.TW.R(this.At.Format(AUv));}if(this.A3===1){this.HB.Y(true);this.HB.H(
this.R2.M);this.HB.L(A.jb.Bh);this.R2.L(this.Background.AP);this.TW.L(A.jb.Bh);}
else if(this.A3===2){this.HB.Y(true);this.HB.H(this.TW.M);this.HB.L(A.jb.Bh);this.
R2.L(A.jb.Bh);this.TW.L(this.Background.AP);}else{this.HB.Y(false);this.R2.L(this.
V.AP);this.Bb.L(this.V.AP);this.TW.L(this.V.AP);}},Qa:function(G){if(this.Fs===1
)A.pe([this,this.UM],this);else if(this.Fs===4)A.pe([this,this.Ah6],this);else if(
this.Fs===5)A.pe([this,this.AhR],this);C.Dk.Qa.call(this,G);},JY:function(G){switch(
this.A3){case 0:C.Dk.JY.call(this,G);break;case 2:break;default:this.AcX(this);}
},JT:function(G){switch(this.A3){case 0:C.Dk.JT.call(this,G);break;default:this.
AhQ(this);}},AcZ:function(G){var F;if(!!this.Dg)this.TZ((F=this.Dg,F[1].call(F[0
])));},AbC:function(E){if(A.aaZ(this.Dg,E))return;if(!!this.Dg)A.z$([this,this.AcZ
],this.Dg,0);this.Dg=E;if(!!E)A.zX([this,this.AcZ],E,0);if(!!E)A.pe([this,this.AcZ
],this);},TZ:function(E){if(this.FK===E)return;this.FK=E;this.At.Initialize(this.
FK);this.An();},AcX:function(G){this.Fs=1;this.An();if(this.Bk.Bv){A.pe([this,this.
UM],this);this.Bk.Ar(false);}this.Bk.Ar(true);},UM:function(G){this.En(this.A3+1
);},Alv:function(G){this.Fs=4;this.An();if(this.Bk.Bv){A.pe([this,this.Ah6],this
);this.Bk.Ar(false);}this.Bk.Ar(true);},Alu:function(G){this.Fs=5;this.An();if(this.
Bk.Bv){A.pe([this,this.AhR],this);this.Bk.Ar(false);}this.Bk.Ar(true);},Ah6:function(
G){var B;var F;var BN=this.FK;if(this.A3===1)this.At.Am8(this.At.Ajr+1);if(this.
A3===2)this.At.Am$(this.At.Avg+1);this.At.Anc(0);this.TZ(((B=(this.At.JF()|0))<0
)?B+0x100000000:B);if(this.FK!==BN){if(!!this.Dg)(F=this.Dg,F[2].call(F[0],this.
FK));A.abo(this.Dg,0);}},AhR:function(G){var B;var F;var BN=this.FK;if(this.A3===
1)this.At.Am8(this.At.Ajr-1);if(this.A3===2)this.At.Am$(this.At.Avg-1);this.At.Anc(
0);this.TZ(((B=(this.At.JF()|0))<0)?B+0x100000000:B);if(this.FK!==BN){if(!!this.
Dg)(F=this.Dg,F[2].call(F[0],this.FK));A.abo(this.Dg,0);}},DD:function(G){var F;
if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.
ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this
,this.G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV
);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AdZ
));(F=this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=[this,this.
UM];}break;case 2:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].
call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G1];(F=this.N,F[1].
call(F[0])).Cm(A.aaL(A.ach.Amv));(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[
1].call(F[0])).Cg=[this,this.AhQ];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,
F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=null;}break;default:this.
Fu.Akj((F=this.N,F[1].call(F[0])));}},FH:function(G){this.En(1);},G1:function(G){
this.En(0);},En:function(EC){var F;if(!this.A3)this.Fu.Ai3((F=this.N,F[1].call(F[
0])));this.A3=EC;this.Bg6=true;if((this.A3<0)||(this.A3>2))this.A3=0;this.DD(this
);this.Gi.Bv=!!this.A3;this.Gh.Bv=!!this.A3;this.An();},AhQ:function(G){if(this.
A3>1)this.En(this.A3-1);},_Init:function(aArg){C.Dk._Init.call(this,aArg);A.Core.
Bt._Init.call(this.At={I:this},0);A.Core.BJ._Init.call(this.Jk={I:this},0);A.acg.
AI._Init.call(this.HB={I:this},0);A.acg.Text._Init.call(this.TW={I:this},0);A.acg.
Text._Init.call(this.Bb={I:this},0);A.acg.Text._Init.call(this.R2={I:this},0);A.
Core.BJ._Init.call(this.Gi={I:this},0);A.Core.BJ._Init.call(this.Gh={I:this},0);
this.__proto__=C.AFp;this.H(Uz);this.V.R(AUw);this.V.L(A.jb.Bh);this.Hl.Y(false);
this.HV.Y(false);this.Jk.Filter=1;this.HB.H(AUx);this.HB.L(0x55FFFFFF);this.TW.H(
AUy);this.TW.IZ(true);this.Bb.H(AUz);this.Bb.A2(0x14);this.Bb.R(AUA);this.R2.H(Asf
);this.R2.IZ(true);this.R2.A2(0x14);this.Gi.Filter=4;this.Gi.Bv=false;this.Gh.Filter=
5;this.Gh.Bv=false;this.J(this.HB,0);this.J(this.TW,0);this.J(this.Bb,0);this.J(
this.R2,0);this.Jk.BK=[this,this.AcX];this.TW.S(A.aaL(A.fl.Ez));this.Bb.S(A.aaL(
A.fl.Ez));this.R2.S(A.aaL(A.fl.Ez));this.Gi.BK=[this,this.Alv];this.Gi.DS=[this,
this.Ah6];this.Gh.BK=[this,this.Alu];this.Gh.DS=[this,this.AhR];this.Fu=A._NewObject(
C.AdT,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Dk;this.At._Done();
this.Jk._Done();this.HB._Done();this.TW._Done();this.Bb._Done();this.R2._Done();
this.Gi._Done();this.Gh._Done();C.Dk._Done.call(this);},_ReInit:function(){C.Dk.
_ReInit.call(this);this.At._ReInit();this.Jk._ReInit();this.HB._ReInit();this.TW.
_ReInit();this.Bb._ReInit();this.R2._ReInit();this.Gi._ReInit();this.Gh._ReInit(
);this.TW.S(A.aaL(A.fl.Ez));this.Bb.S(A.aaL(A.fl.Ez));this.R2.S(A.aaL(A.fl.Ez));
},_Mark:function(D){var B;C.Dk._Mark.call(this,D);if((B=this.Fu)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Dg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.At)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gh
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"};C.
CP={B3:null,Aml:null,Ap8:null,Ei:null,Text:null,String:A.jV,Bbp:A.jV,J3:0x12,AJN:
0,AP:0xFFFFFFFF,Bbq:true,GL:function(CH){var Lz=(A.Core.APU.isPrototypeOf(CH)?CH:
null);if(!!Lz)this.Bzk(this);return A.Core.O.GL.call(this,CH);},Bg:function(aSize
){A.Core.O.Bg.call(this,aSize);A.pe([this,this.AtV],this);},Da:function(aFilter){
return A.abh(this.Text.Da(),this.M.slice(0,2));},R:function(E){if(this.String===
E)return;this.String=E;if(this.Bbq){this.Bbp=E;this.Bbq=false;}this.AJN=E.length;
A.pe([this,this.AtV],this);},S:function(E){if(this.B3===E)return;this.B3=E;A.pe([
this,this.AtV],this);},A5:function(E){if(this.Aml===E)return;this.Aml=E;A.pe([this
,this.AtV],this);},CC:function(E){if(this.Ap8===E)return;this.Ap8=E;A.pe([this,this.
AtV],this);},A2:function(E){if(E===this.J3)return;this.J3=E;this.Text.A2(E);},AtV:
function(G){var B;var AJT=0;if(!this.AJN){this.Text.Y(false);return;}this.Text.Y(
true);this.Text.R(this.String);this.Text.KI(false);if(!!this.B3){AJT=this.B3.X2(
this.String,0,this.AJN);if(AJT<(((B=this.M)[2]-B[0])-(2*this.Text.I0))){this.Text.
S(this.B3);return;}}this.Text.KI(true);if(!!this.Aml){AJT=this.Aml.X2(this.String
,0,this.AJN);this.Text.S(this.Aml);if((AJT<(((B=this.M)[2]-B[0])-(2*this.Text.I0
)))&&(((B=this.Text.Da())[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.Ap8){
this.Text.S(this.Ap8);if(((B=this.Text.Da())[3]-B[1])>((B=this.M)[3]-B[1]))this.
Text.BkU((((this.Text.B3.Ascent+this.Text.B3.Descent)*75)/100)|0);}},L:function(
E){if(E===this.AP)return;this.AP=E;this.Text.L(E);},Bzk:function(G){this.R(this.
Bbp);},QN:function(E){if(A.aa0(this.Ei,E))return;this.Ei=E;this.Text.QN(E);},AQS:
function(){return A.abh(this.Text.Da(),this.M.slice(0,2));},AeD:function(An_){return A.
abf(this.M.slice(0,2),this.Text.AeD(An_));},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.CP;
this.H(Asg);this.Ar(false);this.Text.AW(0x3F);this.Text.H(Asg);this.Text.R(SN);this.
J(this.Text,0);},_Done:function(){this.__proto__=A.Core.O;this.Text._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Text._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.B3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aml)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ap8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ei)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AutoSizeText"};C.Ajo={Z:null,IA:null,Ad9:null,IV:null,M0:null,Ad3:
null,Ad8:null,Ad7:null,Ad4:null,Ad6:null,Ad5:null,M1:null,NJ:null,Mi:null,C7:function(
E){C.Vw.C7.call(this,E);this.IA.L(E);this.Ad9.L(E);this.IV.L(E);this.M0.L(E);this.
Mi.L(E);this.Ad3.L(E);this.M1.L(E);this.NJ.L(E);this.Ad8.L(E);this.Ad7.L(E);this.
Ad4.L(E);this.Ad6.L(E);this.Ad5.L(E);},Eo:function(G){C.Vw.Eo.call(this,G);this.
Xj(8,1,this.M0);this.Xj(12,1,this.Mi);this.Xj(11,1,this.Ad3);this.Xj(7,1,this.M1
);this.Xj(14,1,this.NJ);this.Xj(1,4,this.IA);this.Xj(1,1,this.Ad9);this.Xj(4,1,this.
IV);this.Xj(22,1,this.Ad8);this.Xj(26,1,this.Ad7);this.Xj(30,1,this.Ad4);this.Xj(
19,1,this.Ad6);this.Xj(31,1,this.Ad5);this.Text.Y(!this.Z.Vp(null,0x1));},Xj:function(
AH4,ED,Afk){var Az8=false;if(!!A._GetAutoObject(A.Device.Device).Aq.Filter){var AcL=
A._GetAutoObject(A.Device.Device).Aq.Filter.DX(AH4,ED);if(!!AcL){Az8=true;switch(
AH4){case 14:{var Ayo=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AcL)?AcL:
null);if(!!Ayo)Afk.Ax(A._GetAutoObject(A.Device.Converter).A3c(Ayo.A4));}break;case
7:{var Ayo=(A.Device.GenderFilterCriterion.isPrototypeOf(AcL)?AcL:null);if(!!Ayo
)Afk.Ax(A._GetAutoObject(A.Device.Converter).Amo(Ayo.A4));}break;case 1:if(ED===
4)Afk.Ax(A.aaL(A.ach.ACy));else if(AcL.Operator===4)Az8=false;break;case 22:switch(
AcL.Operator){case 0:case 3:Afk.Ax(A.aaL(A.ach.AO_));break;default:Afk.Ax(A.aaL(
A.ach.Amy));}break;case 26:switch(AcL.Operator){case 0:case 3:Afk.Ax(A.aaL(A.ach.
AO8));break;default:Afk.Ax(A.aaL(A.ach.ACm));}break;default:;}}else if((AH4===1)&&(
ED===4)){Az8=true;Afk.Ax(A.aaL(A.ach.Ad0));}}else if((AH4===1)&&(ED===4)){Az8=true;
Afk.Ax(A.aaL(A.ach.Ad0));}Afk.Y(Az8);},_Init:function(aArg){C.Vw._Init.call(this
,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.Am._Init.call(this.IA={I:this
},0);A.acg.Am._Init.call(this.Ad9={I:this},0);A.acg.Am._Init.call(this.IV={I:this
},0);A.acg.Am._Init.call(this.M0={I:this},0);A.acg.Am._Init.call(this.Ad3={I:this
},0);A.acg.Am._Init.call(this.Ad8={I:this},0);A.acg.Am._Init.call(this.Ad7={I:this
},0);A.acg.Am._Init.call(this.Ad4={I:this},0);A.acg.Am._Init.call(this.Ad6={I:this
},0);A.acg.Am._Init.call(this.Ad5={I:this},0);A.acg.Am._Init.call(this.M1={I:this
},0);A.acg.Am._Init.call(this.NJ={I:this},0);A.acg.Am._Init.call(this.Mi={I:this
},0);this.__proto__=C.Ajo;this.Z.AW(0x3F);this.Z.H(AUB);this.Z.Kb(3);this.IA.H(AGk
);this.Ad9.H(AUC);this.Ad9.Aj(true);this.IV.H(AUD);this.IV.Aj(true);this.M0.H(AUE
);this.M0.Aj(true);this.Ad3.H(AUF);this.Ad3.Aj(true);this.Ad8.H(AGl);this.Ad8.Aj(
true);this.Ad7.H(AGl);this.Ad7.Aj(true);this.Ad4.H(AUG);this.Ad4.Aj(true);this.Ad6.
H(AGm);this.Ad6.Aj(true);this.Ad5.H(AGm);this.Ad5.Aj(true);this.M1.H(Axh);this.M1.
Aj(true);this.NJ.H(AGn);this.NJ.Aj(true);this.Text.R(A.aaR(A.acf.None));this.Mi.
H(Axh);this.Mi.Aj(true);this.Kj(this.TD,-3);this.Kj(this.DZ,-3);this.Kj(this.A9,-
3);this.Kj(this.AN,-2);this.J(this.Z,-2);this.J(this.IA,-2);this.J(this.Ad9,-2);
this.J(this.IV,-2);this.J(this.M0,-2);this.J(this.Ad3,-2);this.J(this.Ad8,-2);this.
J(this.Ad7,-2);this.J(this.Ad4,-2);this.J(this.Ad6,-2);this.J(this.Ad5,-2);this.
J(this.M1,-2);this.J(this.NJ,-2);this.J(this.Mi,0);this.IA.Ax(A.aaL(A.ach.Ad0));
this.Ad9.Ax(A.aaL(A.ach.AOZ));this.IV.Ax(A.aaL(A.ach.AOn));this.M0.Ax(A.aaL(A.ach.
ACs));this.Ad3.Ax(A.aaL(A.ach.Aa1));this.Ad8.Ax(A.aaL(A.ach.Amy));this.Ad7.Ax(A.
aaL(A.ach.ACm));this.Ad4.Ax(A.aaL(A.ach.AOX));this.Ad6.Ax(A.aaL(A.ach.AOY));this.
Ad5.Ax(A.aaL(A.ach.AOW));this.M1.Ax(A.aaL(A.ach.ACu));this.NJ.Ax(A.aaL(A.ach.AuX
));this.Mi.Ax(A.aaL(A.ach.ACB));},_Done:function(){this.__proto__=C.Vw;this.Z._Done(
);this.IA._Done();this.Ad9._Done();this.IV._Done();this.M0._Done();this.Ad3._Done(
);this.Ad8._Done();this.Ad7._Done();this.Ad4._Done();this.Ad6._Done();this.Ad5._Done(
);this.M1._Done();this.NJ._Done();this.Mi._Done();C.Vw._Done.call(this);},_ReInit:
function(){C.Vw._ReInit.call(this);this.Z._ReInit();this.IA._ReInit();this.Ad9._ReInit(
);this.IV._ReInit();this.M0._ReInit();this.Ad3._ReInit();this.Ad8._ReInit();this.
Ad7._ReInit();this.Ad4._ReInit();this.Ad6._ReInit();this.Ad5._ReInit();this.M1._ReInit(
);this.NJ._ReInit();this.Mi._ReInit();this.Text.R(A.aaR(A.acf.None));},_Mark:function(
D){var B;C.Vw._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.IA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M0)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ad3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad8)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ad7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ad4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad6)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ad5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M1)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mi)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderFilter"};C.AlY={HY:null,CJ:
function(G){if(A._GetAutoObject(A.Device.Device).Bq.La())A._GetAutoObject(A.Device.
Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),0,null);this.
HY.Gb();this.HY.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);C.QX.CJ.call(
this,G);},AnB:function(){C.QX.AnB.call(this);switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:{this.Background.L(A._GetAutoObject(A.acj.Temperature).Bwz(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Kk));this.C5.L(A._GetAutoObject(A.acj.Temperature).BwC(A._GetAutoObject(A.Device.
Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Kk));this.JB.L(A._GetAutoObject(
A.acj.Temperature).BwA(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Kk));this.Hv.L(A._GetAutoObject(A.acj.Temperature).BwB(A._GetAutoObject(
A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).Kk));this.Mu.L(this.
JB.AP);this.TemperatureUnit.L(this.JB.AP);}break;default:;}},Ab$:function(){C.QX.
Ab$.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
N.Cm(A.aaL(A.ach.APg));this.N.C2(A.aaL(A.ach.Amx));}break;case 4:{this.N.Cm(null
);this.N.C2(A.aaL(A.ach.Au5));}break;default:;}},Wj:function(G){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).Kk>3240)&&(A._GetAutoObject(A.Device.Device).Kk<5460)){A._GetAutoObject(A.Device.
Device).Aha();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:{this.HY.OnSetTemperature(A._GetAutoObject(A.Device.Device).Kk);var BT=A._GetAutoObject(
A.Device.Converter).ArZ(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Kk);this.HY.OnSetRatingTemperature(BT);this.HY.Cp(A._GetAutoObject(
A.Device.Device).Bq);A._GetAutoObject(C.AY).Fm();}break;case 4:this.AJj(this);break;
default:;}},Akp:function(G){C.QX.Akp.call(this,G);switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 3:A._GetAutoObject(A.Device.Device).Cj(9);break;case 4:
this.AJj(this);break;default:;}},AwV:function(){C.QX.AwV.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:this.JB.R(A._GetAutoObject(A.acj.Temperature
).BwH(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device
).Kk));break;default:;}},AwW:function(){C.QX.AwW.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{A._GetAutoObject(A.Device.Device).V$(A._GetAutoObject(
A.acj.Temperature).BwD(A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(
A.Device.Device).Kk));this.I4.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.
Device).V$(16711680);this.I4.Ar(true);}break;default:this.I4.Ar(false);}},ASW:function(
){this.C5.Ax(A.aaL(A.ach.Au4));this.C5.Ct(A._GetAutoObject(A.acj.Temperature).BwI(
A._GetAutoObject(A.Device.Helper).W.AnimalType,A._GetAutoObject(A.Device.Device).
Kk));this.NH.Ct(0);},_Init:function(aArg){C.QX._Init.call(this,aArg);this.__proto__=
C.AlY;this.Dr(C.Iy);this.HY=A._NewObject(A.Device.Rating,0);},_Mark:function(D){
var B;C.QX._Mark.call(this,D);if((B=this.HY)&&(B._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::AnimalActionTemperatureScreen"};C.Ag2={NR:null,DE:null
,H$:null,Bb:null,AtP:null,String:A.jV,AwL:A.jV,Ml:7,AjG:2,KJ:0,AS8:false,Init:function(
aArg){},Bg:function(aSize){A.Core.O.Bg.call(this,aSize);this.DE.H([0,0,aSize[0]-
this.AjG,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DE.S(A.aaL(A.fl.By));else this.DE.
S(A.aaL(A.fl.Ak));this.H$.S(this.DE.B3);this.H$.H(this.DE.M);this.Bb.H([].concat([
0,aSize[1]-2],aSize));A.pe([this,this.Wd],this);},R:function(E){if(this.String===
E)return;this.String=E;this.DE.R(E);},AgW:function(E){if(this.AwL===E)return;this.
AwL=E;this.H$.R(E);},AbB:function(E){this.Ml=E;if(E<10)this.ARE(2);else if(E<40)
this.ARE(1);else this.ARE(0);A.pe([this,this.Wd],this);},Wd:function(G){var B;while(
!!this.Bb.Ag)this.HH(this.Bb.Ag);if(this.Ml>1){var AcG=this.ANm();var A0l=this.ANk(
);var AoO=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;var Ay3;var AJH;var Ato;var AlD=
null;if(!!this.NR&&(this.NR.AV>0))AlD=this.NR.KR;while((AcG>=A0l)&&(AcG>0)){var As1=
A._NewObject(C.AiX,0);x1=Math.round(((((B=this.M)[2]-B[0])-this.AjG)*(((AcG-A0l)
/86400)|0))/this.Ml)|0;x2=Math.round(((((B=this.M)[2]-B[0])-this.AjG)*((((AcG-A0l
)/86400)|0)+1))/this.Ml)|0;while(!!AlD&&(AlD.Timestamp>=AcG)){if(AlD.Timestamp<(
AcG+86400))As1.Of(AlD.A4,AlD.Timestamp);AlD=AlD.Ag;}var Atz=0;if(As1.AV>0)Atz=((((((
B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]))/As1.AV)|0;else if(this.Ml<10){
Atz=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]);Ato=A._NewObject(A.acg.
Text,0);Ato.H([x1,AoO,x2,AoO+Atz]);Ato.S(A.aaL(A.fl.By));Ato.L(A.jb.Text);Ato.R(
A.aaR(A.acf.Aez));this.J(Ato,0);}var AIw=As1.KR;var P=0;while(!!AIw){if(P>=As1.AV
)throw new Error(AUH);Ay3=A._NewObject(A.acg.AI,0);Ay3.L(A._GetAutoObject(A.acj.
Assessment).P9(AIw.A4));if(P===(As1.AV-1))Ay3.H([x1,AoO+(P*Atz),x2,this.Bb.M[1]]
);else Ay3.H([x1,AoO+(P*Atz),x2,AoO+((P+1)*Atz)]);this.J(Ay3,0);AIw=AIw.Ag;P=P+1;
}if(this.AS8){var Bvn=A._GetAutoObject(A.Device.Helper).ApL(A._GetAutoObject(A.Device.
Helper).Dy());var Bvm=A._GetAutoObject(A.Device.Helper).ApL(AcG);if(Bvn===Bvm){var
AJ8=A._NewObject(A.acg.AdP,0);AJ8.L(A.jb.Text);var BbL=(x1+this.AjG)+(((x2-x1)/2
)|0);AJ8.H([BbL-4,this.Bb.M[1]-4,BbL+4,this.Bb.M[1]]);AJ8.YX(this.AtP);this.J(AJ8
,0);}}AcG=AcG-86400;if(this.AjG>0){AJH=A._NewObject(A.acg.AI,0);AJH.H([x1,AoO,x1+
this.AjG,AoO+((((B=this.M)[3]-B[1])/2)|0)]);AJH.L(A.jb.Bb);this.J(AJH,0);}}}},AbD:
function(E){this.NR=E;A.pe([this,this.Wd],this);},ARE:function(E){if(this.AjG===
E)return;this.AjG=E;A.pe([this,this.Wd],this);},C7:function(E){if(this.KJ===E)return;
this.KJ=E;this.DE.L(E);this.H$.L(E);},ANk:function(){var B;return this.ANm()-(((((
B=this.Ml)<0)?B+0x100000000:B)-1)*86400);},ANm:function(){return A._GetAutoObject(
A.Device.Converter).Ahf();},BkY:function(E){if(this.AS8===E)return;this.AS8=E;A.
pe([this,this.Wd],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.
acg.Text._Init.call(this.DE={I:this},0);A.acg.Text._Init.call(this.H$={I:this},0
);A.acg.AI._Init.call(this.Bb={I:this},0);C.AwT._Init.call(this.AtP={I:this},0);
this.__proto__=C.Ag2;this.H(BC);this.Ar(false);this.DE.H(AGo);this.DE.HG(5);this.
DE.A2(0x11);this.DE.L(A.jb.Text);this.H$.H(AGo);this.H$.HG(5);this.H$.A2(0x14);this.
H$.L(A.jb.Text);this.Bb.H(AUI);this.Bb.L(A.jb.Bb);this.KJ=A.jb.Text;this.AtP.H(AUJ
);this.J(this.DE,0);this.J(this.H$,0);this.J(this.Bb,0);this.DE.S(A.aaL(A.fl.Ak)
);this.H$.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.DE._Done();this.H$._Done();this.Bb._Done();this.AtP._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.DE._ReInit(
);this.H$._ReInit();this.Bb._ReInit();this.AtP._ReInit();this.DE.S(A.aaL(A.fl.Ak
));this.H$.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.NR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DE)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AtP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A3i={Ag:null,Timestamp:0,A4:0,_Init:function(
aArg){this.__proto__=C.A3i;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.AiX={KR:null,MK:null,AV:0,Of:
function(A1,P0){var G5;G5=A._NewObject(C.A3i,0);G5.A4=A1;G5.Timestamp=P0;if(!this.
KR){this.KR=G5;this.MK=G5;this.AV=1;}else{this.MK.Ag=G5;this.MK=G5;this.AV=this.
AV+1;}},_Init:function(aArg){this.__proto__=C.AiX;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
KR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MK)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Hh={Z:null,Av:null,Init:function(
aArg){A.pe([this,this.DD],this);},Du:function(G){var B;var E7=0;var X=this.AR;switch(
this.Cl.CI){case 6:E7=2;break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;
default:;}X=this.RY(X,E7,0x414);if(!!X)this.A8(X);if(!!X&&((X.T&0x400)===0x400))
this.Z.Hx(X,true,null,null);this.DD(this);},Als:function(G){A._GetAutoObject(C.AY
).Fm();},Ao$:function(G){var B;if(!!(C.Ci.isPrototypeOf(B=this.AR)?B:null).AfT)A.
pe((C.Ci.isPrototypeOf(B=this.AR)?B:null).AfT,this);},E9:function(G){var B;this.
Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.
Z.Bp[1]);},DD:function(G){var B;var Hs=(C.Ci.isPrototypeOf(B=this.AR)?B:null);if(
!!Hs){this.N.Hm(A.jV);this.N.BU(A.jV);this.N.I3.Ds(255);this.N.Ii.Ds(Hs.Awm);this.
N.ADW(Hs.AuH);this.N.Am6(Hs.Amm);this.N.CS(Hs.AOR);this.N.C2(Hs.Aql);Hs.A1n(this
);}},G4:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Av._Init.call(this.Av={
I:this},0);this.__proto__=C.Hh;this.Background.H(Q5);this.Background.L(A.jb.C0);
this.N.H(WI);this.N.Ar(false);this.N.Y(true);this.Z.H(E4);this.Z.Kb(1);this.Av.H(
II);this.J(this.Z,0);this.J(this.Av,0);this.Z.Ei=[this,this.G4];this.Init(aArg);
},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.Av._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Z._ReInit();this.Av.
_ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceScreen"};C.ASh={Nr:null,ARn:null,Ads:null,Vc:null,GE:null,PopupTimeout:
null,AbH:null,Af5:null,PopupIdToString:null,AsX:null,Text:A.jV,Akc:A.jV,AIQ:A.jV
,Akw:0,AJV:-1,Ayn:-1,AJq:0,ASj:0,A0u:false,CT:function(){this.A8y(this.PopupIdToString.
BX(this.ASj));},Init:function(aArg){this.Bmh(this);},Bem:function(G){var B;if(this.
Akw>0){this.A8L((this.Akw/1000)|0);this.PopupTimeout.V8(0);this.PopupTimeout.PC(
1000);this.PopupTimeout.StartTimer(this);}else this.PopupTimeout.AwK(this);},Bei:
function(G){var Qh=this.Text;var Afn=this.Akc;var AJo=A.abi(16,A.jV,null);var index=
0;var Ayi=0;while(Afn!==A.jV){Ayi=Afn.indexOf(A.Device.PopupParamSeparator,0);if(
Ayi!==-1){AJo.Set(index,A.ab1(Afn,Ayi,(Afn.length-Ayi)+1));Afn=A.ab1(Afn,0,Ayi+1
);index=index+1;if(index>=16){A.ab5("%s",(AUK+Afn)+AUL);Afn=A.jV;}}else{AJo.Set(
index,Afn);Afn=A.jV;}}index=0;while(index<Qh.length){if((Qh.charCodeAt(index)||0
)===0x7B){var Bbo=Qh.indexOf(String.fromCharCode(0x7D),index);if(Bbo===-1){A.ab5(
"%s",(((AUM+Qh)+AUN)+index.toFixed())+AkG);index=Qh.length;}else{var Bc_=(Bbo-index
)-1;var A1V=A.abW(Qh,index+1,Bc_);var AJn=A.wz(A1V,-1,10);Qh=A.ab1(Qh,index,Bc_+
2);if(A1V===AUO)this.Blc(index);else if(((AJn>0)&&(AJn<=16))&&(this.Akc!==A.jV)){
Qh=A.abU(Qh,AJo.Get(AJn-1),index);if(this.A0u===true)this.Blb(A.wz(AJo.Get(AJn-1
),0,10));}else A.ab5("%s",(AUP+A1V)+AUQ);}}index=index+1;}this.Bla(Qh);},CJ:function(
G){A.pe([this,this.Bem],this);},Ai:function(Ae){var B;this.Ads.H(A.aaT(this.GE.Da(
),Ahn));this.Vc.H(A.aaT(this.GE.Da(),Ahn));if(!!this.Nr){this.Nr.H(A.abM(this.Nr.
M,this.GE.M[0]));this.Nr.H(A.abO(this.Nr.M,this.GE.M[3]+10));this.Nr.H(A.abL(this.
Nr.M,(B=this.GE.M)[2]-B[0]));this.Nr.H(A.abI(this.Nr.M,8));this.Ads.H(A.abh(A.aaT(
this.GE.Da(),Ahn),AGp));this.Vc.H(A.abh(A.aaT(this.GE.Da(),Ahn),AGp));}else{this.
Ads.H(A.aaT(this.GE.Da(),Ahn));this.Vc.H(A.aaT(this.GE.Da(),Ahn));}},Du:function(
G){var Jq=(A.Core.BJ.isPrototypeOf(G)?G:null);if((Jq.CI===4)&&((this.Vc.M[1]+this.
M[1])<this.M[1])){this.GE.H(A.abO(this.GE.M,this.GE.M[1]+28));this.An();}else if((
Jq.CI===5)&&((this.Vc.M[3]+this.M[1])>this.N.M[1])){this.GE.H(A.abO(this.GE.M,this.
GE.M[1]-28));this.An();}if((Jq.CI===6)&&!!this.D9().Cw)this.D9().AD4(1);else if((
Jq.CI===7)&&!!this.D9().Cb)this.D9().AD4(3);},IP:function(G){switch(this.D9().AgI
){case 1:this.Als(this);break;case 3:this.Ao$(this);break;case 2:this.Azz(this);
break;case 0:break;default:A.ab5("%s%e",AUR,this.D9().AgI);}},Als:function(G){var
B;(B=this.D9().Cw)?B[1].call(B[0],this):null;},Ao$:function(G){var B;(B=this.D9(
).Cb)?B[1].call(B[0],this):null;},Azz:function(G){var B;(B=this.D9().Cg)?B[1].call(
B[0],this):null;},LE:function(G){this.N.IW.L((this.N.IW.AP&0x00FFFFFF)|(100<<24)
);},Fd:function(G){var B;this.PopupTimeout.AwK(this);},A8y:function(E){if(this.Text===
E)return;this.Text=E;A.pe([this,this.Bei],this);},BxH:function(G){var B;this.A8L(
this.Ayn-1);if(this.Ayn<=0){this.PopupTimeout.AwK(this);(B=this.ARn)?B[1].call(B[
0],this):null;}},A8z:function(E){if(this.Akw===E)return;this.Akw=E;A.pe([this,this.
Bem],this);},A8l:function(E){if(this.Akc===E)return;this.Akc=E;A.pe([this,this.Bei
],this);},Bla:function(E){if(this.AIQ===E)return;this.AIQ=E;this.AAo(this);this.
Bvu(this);},AAo:function(G){if((this.Ayn!==-1)&&(this.AJV!==-1)){var Bwj=this.AsX.
Format(AUS);this.GE.R(A.abU(this.AIQ,Bwj,this.AJV));}else this.GE.R(this.AIQ);this.
GE.H(AGq);},Blc:function(E){if(this.AJV===E)return;this.AJV=E;this.AAo(this);},A8L:
function(E){if(this.Ayn===E)return;this.Ayn=E;this.AsX.AEz(E);A.pe([this,this.AAo
],this);},Bvu:function(G){this.GE.Da();if(this.GE.M[1]<=this.M[1])this.GE.H(A.abO(
this.GE.M,28));this.An();},A8N:function(E){if(this.A0u===E)return;this.A0u=E;if(
E===true)A.pe([this,this.Byf],this);},Byf:function(G){if(!this.Nr){this.Nr=A._NewObject(
A.acq.ACh,0);this.Nr.Gk(0);this.Nr.E1(100);this.Nr.OnSetAppearance(this.AbH);this.
J(this.Nr,0);this.Ag5(this.Nr,this.GE);}this.Nr.Bx(this.AJq);},Blb:function(E){if(
this.AJq===E)return;this.AJq=E;if(!!this.Nr)this.Nr.Bx(this.AJq);},Bmh:function(
G){var B;this.N.Ds(0);this.Af5.Anr(this);},BkQ:function(E){if(this.ASj===E)return;
this.ASj=E;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AI._Init.call(
this.Ads={I:this},0);A.acg.Cz._Init.call(this.Vc={I:this},0);A.acg.Text._Init.call(
this.GE={I:this},0);A.Core.Timer._Init.call(this.PopupTimeout={I:this},0);A.acq.
ACi._Init.call(this.AbH={I:this},0);A.acl.FZ._Init.call(this.Af5={I:this},0);A.Device.
PopupIdToString._Init.call(this.PopupIdToString={I:this},0);A.Core.Bt._Init.call(
this.AsX={I:this},0);this.__proto__=C.ASh;var B;this.H(B9);this.Background.H(E4);
this.Background.L(0x88FFFFFF);this.Background.Y(false);this.D$.Ar(false);this.D$.
Y(false);this.Ads.H(AGr);this.Ads.L(A.jb.CE);this.Vc.H(AGr);this.Vc.NO(2);this.Vc.
L(A.jb.Text);this.GE.H(AGq);this.GE.HG(10);this.GE.IZ(true);this.GE.Bk$(0);this.
GE.KI(true);this.GE.L(A.jb.Text);this.PopupTimeout.PC(0);this.AbH.A8E(0);this.AbH.
A8C(A.jb.AR);this.AbH.A8B(0);this.AbH.AEP(AF$);this.Af5.HF(1);this.Af5.BY=255;this.
Af5.Cq=0;this.Kj(this.D$,-1);this.J(this.Ads,0);this.J(this.Vc,0);this.J(this.GE
,0);this.GE.S(A.aaL(A.fl.Ah));this.PopupTimeout.Mp=[this,this.BxH];this.AbH.A8D(
A.aaL(A.ach.NI));this.AbH.A8A(A.aaL(A.ach.NI));this.Af5.Q=[B=this.N,B.Avy,B.AYx];
this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Ads._Done();this.Vc.
_Done();this.GE._Done();this.PopupTimeout._Done();this.AbH._Done();this.Af5._Done(
);this.PopupIdToString._Done();this.AsX._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Ads._ReInit();this.Vc._ReInit();this.GE.
_ReInit();this.PopupTimeout._ReInit();this.AbH._ReInit();this.Af5._ReInit();this.
PopupIdToString._ReInit();this.AsX._ReInit();this.GE.S(A.aaL(A.fl.Ah));this.CT();
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Nr)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.ARn)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ads)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupTimeout)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Af5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AsX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"
};C.Mf={Ai:function(Ae){C.Ci.Ai.call(this,Ae);var FE=A.jb.CE;var GG=A.jb.Text;if(
this.G_){FE=A.jb.Text;GG=A.jb.Bh;}if(!this.Ly){this.Background.L(FE);this.V.L(A.
jb.Amz);}else if(this.Qb){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else if(
this.Kv){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else{this.Background.L(FE
);this.V.L(GG);}},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=
C.Mf;},_className:"Application::DarkThemeMenuItem"};C.AmO={Ac3:0,_Init:function(
aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.AmO;},_className:"Application::MenuItemPopUp"
};C.OverlayMenu={Xa:function(G){A._GetAutoObject(A.Device.Device).Cj(0);},KG:function(
){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cb=[this,this.A1o];this.Bw.Cg=
null;this.Bw.Cw=[this,this.Xa];this.Bw.BU(A.aaR(A.acf.Ok));this.Bw.Cm(null);this.
Bw.CS(A.aaL(A.ach.AdY));}return this.Bw;},A1o:function(G){var B;if(!!(C.Ci.isPrototypeOf(
B=this.AR)?B:null))(C.Ci.isPrototypeOf(B=this.AR)?B:null).IP(this);},CJ:function(
G){},AHs:function(s){this.CJ(s);},Fd:function(G){},AxF:function(s){this.Fd(s);},
_Init:function(aArg){C.AaH._Init.call(this,aArg);this.__proto__=C.OverlayMenu;},
_className:"Application::OverlayMenu"};C.AOj={VI:null,Yk:null,Yd:null,Init:function(
aArg){this.A8(this.VI);},AcW:function(G){var Aa=(C.Ci.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.Yk)A._GetAutoObject(A.Device.Device).A6(6,true,A.jV,0,[this
,this.Byt]);else if(Aa===this.VI)A._GetAutoObject(A.Device.Device).A6(9,true,A.jV
,0,[this,this.ByO]);else if(Aa===this.Yd)A._GetAutoObject(C.AY).B1(4);else throw new
Error(Axi);A._GetAutoObject(A.Device.Device).Cj(0);},Byt:function(G){var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(
A.Device.Device).AFa();},ByO:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).AwC();
},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Mf._Init.call(this.
VI={I:this},0);C.Mf._Init.call(this.Yk={I:this},0);C.Mf._Init.call(this.Yd={I:this
},0);this.__proto__=C.AOj;this.H(Ae7);this.VI.H(BC);this.VI.Ar(true);this.VI.U(A.
aaR(A.acf.A9p));this.VI.Bf(true);this.Yk.H(KP);this.Yk.Ar(true);this.Yk.U(A.aaR(
A.acf.A88));this.Yk.Bf(true);this.Yd.H(Q6);this.Yd.Ar(true);this.Yd.U(A.aaR(A.acf.
Ss));this.Yd.Bf(true);this.J(this.VI,0);this.J(this.Yk,0);this.J(this.Yd,0);this.
VI.AQ=[this,this.AcW];this.Yk.AQ=[this,this.AcW];this.Yd.AQ=[this,this.AcW];this.
Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.VI._Done();this.
Yk._Done();this.Yd._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.
OverlayMenu._ReInit.call(this);this.VI._ReInit();this.Yk._ReInit();this.Yd._ReInit(
);this.VI.U(A.aaR(A.acf.A9p));this.Yk.U(A.aaR(A.acf.A88));this.Yd.U(A.aaR(A.acf.
Ss));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VI)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Yd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeOverlayMenu"};C.
Gx={Z4:null,OverlayMenu:null,Wf:null,A2e:null,K4:null,A1U:null,Akd:null,NP:null,
Ay9:100,Init:function(aArg){var B;A.zX([this,this.BcE],[B=A._GetAutoObject(A.Device.
Device),B.Avz,B.AxO],0);A.zX([this,this.Bcy],[B=A._GetAutoObject(A.Device.Device
),B.AQ5,B.AYu],0);A.zX([this,this.A1f],[B=A._GetAutoObject(A.Device.Device),B.Avo
,B.AxH],0);A.zX([this,this.Bxe],[B=A._GetAutoObject(A.Device.Device),B.Avl,B.AxG
],0);A.zX([this,this.Bxf],[B=A._GetAutoObject(A.Device.Device),B.A6O,B.A_Z],0);A.
zX([this,this.Apa],[B=A._GetAutoObject(A.Device.Device),B.ARf,B.AYD],0);A.zX([this
,this.BcU],[B=A._GetAutoObject(A.Device.Device),B.Abs,B.Acl],0);A.pe([this,this.
BcE],this);A.pe([this,this.Bcy],this);A.pe([this,this.Apa],this);A.pe([this,this.
BcU],this);this.A2e.Au([B=this.Wf,B.ADj,B.YT]);this.J(this.Wf,0);this.A8(this.Wf
);this.Bu$(this);},Ai:function(Ae){},Bcy:function(G){var B;if(A._GetAutoObject(A.
Device.Device).AC7){if(!this.Z4){this.Z4=A._NewObject(C.ArK,0);this.Z4.H(A.abJ(this.
Z4.M,this.Wf.M.slice(0,2)));this.Z4.H(A.abO(this.Z4.M,this.Wf.M[3]-((B=this.Z4.M
)[3]-B[1])));this.J(this.Z4,1);}}else{if(!!this.Z4)this.HH(this.Z4);this.Z4=null;
}},BcE:function(G){switch(A._GetAutoObject(A.Device.Device).OverlayMenu){case 0:
this.Cj(null);break;case 1:this.Cj(A._NewObject(C.AOj,0));break;case 8:this.Cj(A.
_NewObject(C.AKF,0));break;case 2:this.Cj(A._NewObject(C.AKB,0));break;case 3:this.
Cj(A._NewObject(C.AKI,0));break;case 4:this.Cj(A._NewObject(C.ASx,0));break;case
5:this.Cj(A._NewObject(C.AT0,0));break;case 6:this.Cj(A._NewObject(C.ASc,0));break;
case 7:this.Cj(A._NewObject(C.Al1,0));break;case 11:this.Cj(A._NewObject(C.AK$,0
));break;case 12:this.Cj(A._NewObject(C.AK_,0));break;case 9:this.Cj(A._NewObject(
C.AQb,0));break;case 10:this.Cj(A._NewObject(C.AK6,0));break;case 14:this.Cj(A._NewObject(
C.AP9,0));break;case 15:this.Cj(A._NewObject(C.AP_,0));break;case 13:this.Cj(A._NewObject(
C.AP$,0));break;case 16:this.Cj(A._NewObject(C.ASr,0));break;case 17:this.Cj(A._NewObject(
C.ALv,0));break;default:throw new Error(AUT+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Cj:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.Wb).AqU(null);this.NP.ApZ(this.OverlayMenu,A._GetAutoObject(
C.AwF),null,null,[B=this.OverlayMenu,B.AxF],null,true);this.A8(this.Wf);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.NP.Akf(this.OverlayMenu,A._GetAutoObject(C.AwE),null
,null,null,null,null,[B=this.OverlayMenu,B.AHs],null,false);this.A8(this.NP);A._GetAutoObject(
C.Wb).AqU(this.OverlayMenu.KG());}else if(!!this.K4){this.A8(this.NP);A._GetAutoObject(
C.Wb).AqU(this.K4.AjV().KG());}},AgQ:function(E){var B;if(this.K4===E)return;if(
!!this.K4){A._GetAutoObject(C.Wb).AqU(null);this.NP.ApZ(this.K4.AjV(),A._GetAutoObject(
C.AeF),null,null,[B=this.K4.AjV(),B.AxF],null,false);this.A8(this.Wf);}this.K4=E;
if(!!this.K4){this.NP.Akf(this.K4.AjV(),A._GetAutoObject(C.AeF),null,null,null,null
,null,[this,this.Bi8],null,false);this.A8(this.NP);A._GetAutoObject(C.Wb).AqU(this.
K4.AjV().KG());}else if(!!this.OverlayMenu){this.A8(this.NP);A._GetAutoObject(C.
Wb).AqU(this.OverlayMenu.KG());}},Bu$:function(G){var B;var F;this.J(this.A1U,0);(
F=A._GetAutoObject(C.Wb),F.H(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.Wb).M)[3]-B[1]))));this.Y5(this.NP);},A1f:function(G){if(A._GetAutoObject(A.Device.
Device).Al9)switch(A._GetAutoObject(A.Device.Device).Ky){case 4:case 39:case 5:break;
case 40:A._GetAutoObject(C.AY).AgY(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aar<98)A._GetAutoObject(C.AY).B1(4);}else{this.Ay9=100;this.Baw();}},Bxe:
function(G){this.Baw();},Baw:function(){if(!A._GetAutoObject(A.Device.Device).Al9
){if(A._GetAutoObject(A.Device.Device).Aar<=2){if(this.Ay9>2)switch(A._GetAutoObject(
A.Device.Device).Ky){case 39:break;case 4:case 40:A._GetAutoObject(C.AY).AgY(39);
break;default:A._GetAutoObject(C.AY).B1(39);}}else if(A._GetAutoObject(A.Device.
Device).Aar<=10){if(this.Ay9>10)switch(A._GetAutoObject(A.Device.Device).Ky){case
40:break;case 4:case 39:A._GetAutoObject(C.AY).AgY(40);break;default:A._GetAutoObject(
C.AY).B1(40);}}else if(A._GetAutoObject(A.Device.Device).Aar<=20){if(this.Ay9>20
)switch(A._GetAutoObject(A.Device.Device).Ky){case 40:break;case 4:case 39:A._GetAutoObject(
C.AY).AgY(40);break;default:A._GetAutoObject(C.AY).B1(40);}}else switch(A._GetAutoObject(
A.Device.Device).Ky){case 39:case 4:case 40:A._GetAutoObject(C.AY).Fm();break;default:;
}this.Ay9=A._GetAutoObject(A.Device.Device).Aar;}},Bxf:function(G){switch(A._GetAutoObject(
A.Device.Device).ApO){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A6(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Am4(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A6(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).Am4(0
);}break;default:A.ab5("%s",AUU+A._GetAutoObject(A.Device.Device).ApO.toFixed());
}},Apa:function(G){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(C.AY).B1(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Ky===5)A._GetAutoObject(C.AY).AgY(3);break;
default:;}},BcU:function(G){switch(A._GetAutoObject(A.Device.Device).AkA){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).T4(false);break;case 5:{A._GetAutoObject(
A.Device.Device).V$(65535);A._GetAutoObject(A.Device.Device).T4(true);}break;case
3:{A._GetAutoObject(A.Device.Device).V$(255);A._GetAutoObject(A.Device.Device).T4(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).V$(16776960);A._GetAutoObject(
A.Device.Device).T4(true);}break;case 6:{A._GetAutoObject(A.Device.Device).V$(16711935
);A._GetAutoObject(A.Device.Device).T4(true);}break;default:A.ab5("%s",AUV+A._GetAutoObject(
A.Device.Device).AkA.toFixed());}},Bi8:function(G){var B;this.K4.AjV().CJ(this);
this.K4.BxF(this);},Bib:function(){return this.K4;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);C.Akd._Init.call(this.Akd={I:this},0);C.NP._Init.call(this.
NP={I:this},0);this.__proto__=C.Gx;this.H(B9);this.NP.H(Q5);this.J(this.NP,0);this.
Wf=A._NewObject(C.Wf,0);this.A2e=A._GetAutoObject(C.AY);this.Akd.AMa=[this,this.
Bib,this.AgQ];this.A1U=A._GetAutoObject(C.Wb);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.O;this.Akd._Done();this.NP._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Akd._ReInit();this.NP._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Z4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Wf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A2e)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.K4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A1U)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.AaH={A8X:null,Bw:null,N:null,Cl:null,AmG:null,AmI:null,QA:null,AmH:null,AmE:
null,AmK:null,AmF:null,Du:function(G){var E7=0;var X=this.AR;switch(this.Cl.CI){
case 6:E7=2;break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;
}X=this.RY(X,E7,0x14);if(!!X)this.A8(X);},A$s:function(s){this.Du(s);},Als:function(
G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);if(DW.AbO&&(this.D9().ArD===false)
)return;A.pe(this.D9().Cw,this);},AHF:function(s){this.Als(s);},Ao$:function(G){
var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);if(DW.AbO&&(this.D9().Y4===false))return;
A.pe(this.D9().Cb,this);},AHI:function(s){this.Ao$(s);},IP:function(G){if(this.QA.
AbO)return;},AsG:function(s){this.IP(s);},Azz:function(G){var DW=(A.Core.BJ.isPrototypeOf(
G)?G:null);if(DW.AbO&&(this.D9().Y3===false))return;A.pe(this.D9().Cg,this);},AHH:
function(s){this.Azz(s);},D9:function(){if(!!this.KG())return this.Bw;else return this.
N;},KG:function(){return this.Bw;},GQ:function(E){this.A8X=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BJ._Init.
call(this.Cl={I:this},0);A.Core.BJ._Init.call(this.AmG={I:this},0);A.Core.BJ._Init.
call(this.AmI={I:this},0);A.Core.BJ._Init.call(this.QA={I:this},0);A.Core.BJ._Init.
call(this.AmH={I:this},0);A.Core.BJ._Init.call(this.AmE={I:this},0);A.Core.BJ._Init.
call(this.AmK={I:this},0);A.Core.BJ._Init.call(this.AmF={I:this},0);this.__proto__=
C.AaH;this.H([0,0,C.ArN[0],C.ArN[1]]);this.N.H(WI);this.N.Ar(false);this.N.Y(false
);this.Cl.Filter=147;this.AmG.Filter=26;this.AmI.Filter=28;this.QA.Filter=1;this.
AmH.Filter=27;this.AmE.Filter=44;this.AmK.Filter=9;this.AmF.Filter=42;this.J(this.
N,0);this.Cl.BK=[this,this.A$s];this.Cl.DS=[this,this.A$s];this.AmG.BK=[this,this.
AHF];this.AmG.DS=[this,this.AHF];this.AmI.BK=[this,this.AHI];this.AmI.DS=[this,this.
AHI];this.QA.BK=[this,this.AsG];this.QA.DS=[this,this.AsG];this.AmH.BK=[this,this.
AHH];this.AmH.DS=[this,this.AHH];this.AmE.BK=[this,this.AHF];this.AmE.DS=[this,this.
AHF];this.AmK.BK=[this,this.AHI];this.AmK.DS=[this,this.AHI];this.AmF.BK=[this,this.
AHH];this.AmF.DS=[this,this.AHH];},_Done:function(){this.__proto__=A.Core.O;this.
N._Done();this.Cl._Done();this.AmG._Done();this.AmI._Done();this.QA._Done();this.
AmH._Done();this.AmE._Done();this.AmK._Done();this.AmF._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.N._ReInit();this.Cl.
_ReInit();this.AmG._ReInit();this.AmI._ReInit();this.QA._ReInit();this.AmH._ReInit(
);this.AmE._ReInit();this.AmK._ReInit();this.AmF._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.A8X)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmG)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AmI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QA
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AmK)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AmF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.AwE={_Init:function(){A.acl.AFv._Init.call(this,0);this.J3=0x22;this.Adw=true;
this.Auk=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AwF={_Init:function(){A.acl.AFv._Init.call(this,0);this.J3=0x22;this.Adw=true;
this.Auk=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.AS6={RQ:function(){var B;var Ao=(A.acl.Aex.isPrototypeOf(B=A.acl.AdM.RQ.call(this
))?B:null);if(!Ao)throw new Error(Ash);Ao.Ck.Cq=100;return Ao;},RP:function(){var
B;var Ao=(A.acl.Awn.isPrototypeOf(B=A.acl.AdM.RP.call(this))?B:null);if(!Ao)throw new
Error(Ash);Ao.ES.BY=100;return Ao;},_Init:function(aArg){A.acl.AdM._Init.call(this
,aArg);this.__proto__=C.AS6;},_className:"Application::ShadeTransition"};C.Amt={
Agu:null,Sw:null,HJ:null,CX:null,AnimalId:-1,GroupId:-1,AB2:true,C7:function(E){
C.BO.C7.call(this,E);this.Sw.L(E);this.HJ.L(E);this.Agu.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HJ.R(A.aaR(A.acf.Aez)
);else this.HJ.R(E.toFixed());},Abz:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.Sw.R(A.aaR(A.acf.Aez));else this.Sw.R(E.toFixed());},Eo:function(
G){},Nd:function(s){this.Eo(s);},A75:function(E){if(this.AB2===E)return;this.AB2=
E;this.Sw.Y(this.AB2);this.Agu.Y(this.AB2);},_Init:function(aArg){C.BO._Init.call(
this,aArg);A.acg.Am._Init.call(this.Agu={I:this},0);A.acg.Text._Init.call(this.Sw={
I:this},0);A.acg.Text._Init.call(this.HJ={I:this},0);C.CX._Init.call(this.CX={I:
this},0);this.__proto__=C.Amt;this.Agu.H(AUW);this.Sw.H(AUX);this.Sw.A2(0x11);this.
Sw.R(A.aaR(A.acf.Aez));this.HJ.H(AUY);this.HJ.A2(0x11);this.HJ.R(A.aaR(A.acf.Aez
));this.CX.H(AUZ);this.J(this.Agu,0);this.J(this.Sw,0);this.J(this.HJ,0);this.J(
this.CX,0);this.Agu.Ax(A.aaL(A.ach.AO3));this.Sw.S(A.aaL(A.fl.Ah));this.HJ.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.BO;this.Agu._Done();this.Sw._Done(
);this.HJ._Done();this.CX._Done();C.BO._Done.call(this);},_ReInit:function(){C.BO.
_ReInit.call(this);this.Agu._ReInit();this.Sw._ReInit();this.HJ._ReInit();this.CX.
_ReInit();this.Sw.R(A.aaR(A.acf.Aez));this.HJ.R(A.aaR(A.acf.Aez));this.Sw.S(A.aaL(
A.fl.Ah));this.HJ.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BO._Mark.call(this
,D);if((B=this.Agu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ACa={Init:function(
aArg){var B;A.zX([this,this.Nd],[B=A._GetAutoObject(A.Device.Helper).W,B.AqQ,B.T5
],0);A.zX([this,this.Nd],[B=A._GetAutoObject(A.Device.Helper).W,B.A63,B.Am_],0);
A.zV([this,this.Nd],A._GetAutoObject(A.Device.Helper).W,0);A.zX([this,this.Nd],[
B=A._GetAutoObject(A.Device.Helper).W,B.PA,B.DT],0);A.zX([this,this.Nd],[B=A._GetAutoObject(
A.Device.Helper).W,B.A7z,B.Awk],0);A.zX([this,this.Nd],[B=A._GetAutoObject(A.Device.
Helper).W,B.A6X,B.Aen],0);A.zX([this,this.Nd],[B=A._GetAutoObject(A.Device.Helper
).W,B.A6Y,B.T2],0);A.zX([this,this.Nd],[B=A._GetAutoObject(A.Device.Helper).W,B.
A6Z,B.Aeq],0);A.zX([this,this.Nd],[B=A._GetAutoObject(A.Device.Helper).W,B.A62,B.
Aes],0);A.pe([this,this.Nd],this);},C7:function(E){C.Amt.C7.call(this,E);this.CX.
C7(E);},Eo:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aqd()){this.Abz(A.
_GetAutoObject(A.Device.Helper).W.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.VisualId);}else{this.Abz(-1);this.OnSetAnimalId(-1);}this.CX.
DT(A._GetAutoObject(A.Device.Helper).W.AnimalType);this.CX.ADO(A._GetAutoObject(
A.Device.Helper).W.WorstAssessment);this.CX.Aen(A._GetAutoObject(A.Device.Helper
).W.IsAlarm);this.CX.T2(A._GetAutoObject(A.Device.Helper).W.IsFever);this.CX.Aeq(
A._GetAutoObject(A.Device.Helper).W.IsWatch);this.CX.Aes(A._GetAutoObject(A.Device.
Helper).W.LastTemperature);},_Init:function(aArg){C.Amt._Init.call(this,aArg);this.
__proto__=C.ACa;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.J5={Ahb:A.abi(3,A.jV,null),Cv:A.abi(3,0,{0:7,1:30,2:90}),AmS:3,Do:function(){
if(this.AmS<3)return this.AmS;else return 3;},C9:function(aIndex){if((aIndex>=3)||(
aIndex>=this.AmS))return-1;return this.Cv.Get(aIndex);},Gg:function(aIndex){if((
aIndex>=3)||(aIndex>=this.AmS))return AU0;return this.Ahb.Get(aIndex);},DP:function(
A1){var P=0;while((P<3)&&(P<=this.AmS)){if(this.Cv.Get(P)===A1)return P;P=P+1;}return-
1;},Hj:function(){var P=0;var max=-1;while((P<3)&&(P<=this.AmS)){if(this.Cv.Get(
P)>max)max=this.Cv.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AC._Init.call(
this,aArg);(this.Ahb=[]).__proto__=C.J5.Ahb;(this.Cv=[]).__proto__=C.J5.Cv;this.
__proto__=C.J5;this.Ahb.Set(0,A.aaR(A.acf.A5J));this.Ahb.Set(1,A.aaR(A.acf.A5H));
this.Ahb.Set(2,A.aaR(A.acf.A5I));},_ReInit:function(){C.AC._ReInit.call(this);this.
Ahb.Set(0,A.aaR(A.acf.A5J));this.Ahb.Set(1,A.aaR(A.acf.A5H));this.Ahb.Set(2,A.aaR(
A.acf.A5I));},_className:"Application::Days"};C.AS3={Al4:null,BP:null,QO:null,Qo:
null,A9K:A.jV,Init:function(aArg){var B;this.V.R(A.aaR(A.acf.Undertemperature));
A.zX([this,this.BxZ],[B=A._GetAutoObject(A.Device.Device),B.AqP,B.AsF],0);},Bg:function(
aSize){},Ai:function(Ae){var B;var F;C.Dk.Ai.call(this,Ae);var Fi=((Ae&0x20)===0x20
);var Gq=this.Bk.Bv;this.BP.L(A.jb.Bh);if(!!this.Q)this.BP.R(((AU1+A._GetAutoObject(
A.Device.Converter).Aku((F=this.Q,F[1].call(F[0]))))+CO)+A._GetAutoObject(A.acj.
Temperature).Alc());this.HV.Y((this.AK<A._GetAutoObject(A.Device.Helper).A44())&&(
Fi||Gq));},Dc:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));
},JY:function(G){var F;var BN=this.AK;C.Dk.JY.call(this,G);if(this.AK<A._GetAutoObject(
A.Device.Helper).A44()){this.Bx(this.AK+10);if(this.AK!==BN){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}},JT:function(G){var F;var BN=this.
AK;C.Dk.JT.call(this,G);this.Bx(this.AK-10);if(this.AK!==BN){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},A8G:function(E){if(this.A9K===E)return;
this.A9K=E;this.An();},BxZ:function(G){this.An();},_Init:function(aArg){C.Dk._Init.
call(this,aArg);A.acg.AI._Init.call(this.Al4={I:this},0);C.CP._Init.call(this.BP={
I:this},0);A.acg.AI._Init.call(this.QO={I:this},0);A.acg.Am._Init.call(this.Qo={
I:this},0);this.__proto__=C.AS3;this.H(Uz);this.Background.H(Uz);this.V.H(Asi);this.
V.L(A.jb.Bh);this.Al4.H(AU2);this.Al4.L(A.jb.AeV);this.Hl.H(AU3);this.BP.H(AU4);
this.BP.A2(0x12);this.BP.L(A.jb.Text);this.HV.H(AU5);this.QO.H(AU6);this.QO.L(A.
jb.EU);this.Qo.H(AU7);this.J(this.Al4,-2);this.J(this.BP,-1);this.J(this.QO,0);this.
J(this.Qo,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.BP.S(A.aaL(
A.fl.Ez));this.BP.A5(A.aaL(A.fl.Ah));this.Qo.Ax(A.aaL(A.ach.ACp));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dk;this.Al4._Done();this.BP._Done();this.QO.
_Done();this.Qo._Done();C.Dk._Done.call(this);},_ReInit:function(){C.Dk._ReInit.
call(this);this.Al4._ReInit();this.BP._ReInit();this.QO._ReInit();this.Qo._ReInit(
);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.BP.S(A.aaL(A.fl.Ez));this.
BP.A5(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Dk._Mark.call(this,D);if((B=this.
Al4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BP)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qo)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A9c={Q:null
,Aiu:null,Init:function(aArg){var B;A.zX([this,this.Bce],[B=A._GetAutoObject(A.Device.
Device),B.ADj,B.A_S],0);A.pe([this,this.Bce],this);},Au:function(E){if(A.aaZ(this.
Q,E))return;this.Q=E;},AgY:function(AkQ){A._GetAutoObject(A.Device.Device).YT(AkQ
);},Bce:function(G){var F;if(!this.Q){A.ab5("%s",AU8);return;}var Bn=null;if(this.
Aiu.Contains(A._GetAutoObject(A.Device.Device).Ky)){Bn=this.Aiu.A8V();while(!!Bn&&(
Bn.AnA!==A._GetAutoObject(A.Device.Device).Ky))Bn=this.Aiu.A8V();}if(!Bn)Bn=this.
BwG(A._GetAutoObject(A.Device.Device).Ky);(F=this.Q,F[2].call(F[0],Bn));},BwG:function(
AkQ){var Bn=null;switch(AkQ){case 0:case 1:Bn=A._NewObject(C.AS$,0);break;case 2:
Bn=A._NewObject(C.Xy,0);break;case 3:Bn=A._NewObject(C.AuS,0);break;case 61:Bn=A.
_NewObject(C.ATO,0);break;case 88:Bn=A._NewObject(C.NewMenu,0);break;case 27:Bn=
A._NewObject(C.AQr,0);break;case 6:Bn=A._NewObject(C.AP2,0);break;case 16:Bn=A._NewObject(
C.AMg,0);break;case 22:Bn=A._NewObject(C.ATJ,0);break;case 17:Bn=A._NewObject(C.
ATq,0);break;case 46:Bn=A._NewObject(C.AMe,0);break;case 99:Bn=A._NewObject(C.ASF
,0);break;case 100:Bn=A._NewObject(C.ASE,0);break;case 101:Bn=A._NewObject(C.ATH
,0);break;case 23:Bn=A._NewObject(C.AT7,0);break;case 18:Bn=A._NewObject(C.AMr,0
);break;case 19:Bn=A._NewObject(C.ASG,0);break;case 38:Bn=A._NewObject(C.APw,0);
break;case 87:Bn=A._NewObject(C.ASp,0);break;case 72:Bn=A._NewObject(C.AMp,0);break;
case 73:Bn=A._NewObject(C.AMq,0);break;case 93:Bn=A._NewObject(C.AMo,0);break;case
94:Bn=A._NewObject(C.AMn,0);break;case 74:Bn=A._NewObject(C.AMm,0);break;case 5:
Bn=A._NewObject(C.ATj,0);break;case 4:Bn=A._NewObject(C.Ady,0);break;case 40:Bn=
A._NewObject(C.ALS,0);break;case 39:Bn=A._NewObject(C.AL_,0);break;case 28:Bn=A.
_NewObject(C.V3,0);break;case 7:Bn=A._NewObject(C.Ap2,0);break;case 92:Bn=A._NewObject(
C.AMA,0);break;case 31:Bn=A._NewObject(C.AqH,0);break;case 89:Bn=A._NewObject(C.
AQp,0);break;case 34:Bn=A._NewObject(C.AKz,0);break;case 35:Bn=A._NewObject(C.ManualActionScanScreen
,0);break;case 32:Bn=A._NewObject(C.SetTransponderScreen,0);break;case 50:Bn=A._NewObject(
C.SetSaveTransponderScreen,0);break;case 55:Bn=A._NewObject(C.NewAnimalSetTransponderScreen
,0);break;case 63:Bn=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case
90:Bn=A._NewObject(C.MotherScanScreen,0);break;case 91:Bn=A._NewObject(C.SetSaveNaisIdScreen
,0);break;case 8:Bn=A._NewObject(C.EP,0);break;case 9:Bn=A._NewObject(C.IS,0);break;
case 24:Bn=A._NewObject(C.AKP,0);break;case 10:Bn=A._NewObject(C.AlY,0);break;case
21:Bn=A._NewObject(C.AKT,0);break;case 11:Bn=A._NewObject(C.AKS,0);break;case 29:
Bn=A._NewObject(C.At0,0);break;case 54:Bn=A._NewObject(C.AKR,0);break;case 30:Bn=
A._NewObject(C.AKQ,0);break;case 37:Bn=A._NewObject(C.Gw,0);break;case 12:Bn=A._NewObject(
C.AKO,0);break;case 41:Bn=A._NewObject(C.AKN,0);break;case 43:Bn=A._NewObject(C.
AKM,0);break;case 14:Bn=A._NewObject(C.AL8,0);break;case 13:Bn=A._NewObject(C.AL9
,0);break;case 44:Bn=A._NewObject(C.AL7,0);break;case 20:Bn=A._NewObject(C.ATY,0
);break;case 42:Bn=A._NewObject(C.ATX,0);break;case 45:Bn=A._NewObject(C.ATW,0);
break;case 47:Bn=A._NewObject(C.ANd,0);break;case 48:Bn=A._NewObject(C.ANc,0);break;
case 49:Bn=A._NewObject(C.ANb,0);break;case 69:Bn=A._NewObject(C.AMz,0);break;case
70:Bn=A._NewObject(C.AMy,0);break;case 71:Bn=A._NewObject(C.AMx,0);break;case 51:
Bn=A._NewObject(C.AQF,0);break;case 52:Bn=A._NewObject(C.AQE,0);break;case 53:Bn=
A._NewObject(C.AQD,0);break;case 96:Bn=A._NewObject(C.AUb,0);break;case 97:Bn=A.
_NewObject(C.AUa,0);break;case 98:Bn=A._NewObject(C.AT$,0);break;case 80:Bn=A._NewObject(
C.AQA,0);break;case 81:Bn=A._NewObject(C.AQz,0);break;case 82:Bn=A._NewObject(C.
AQy,0);break;case 85:Bn=A._NewObject(C.ALw,0);break;case 102:Bn=A._NewObject(C.ASs
,0);break;case 83:Bn=A._NewObject(C.ASI,0);break;case 84:Bn=A._NewObject(C.ASH,0
);break;case 58:Bn=A._NewObject(C.AKE,0);break;case 59:Bn=A._NewObject(C.AKD,0);
break;case 60:Bn=A._NewObject(C.AKC,0);break;case 15:Bn=A._NewObject(C.ASu,0);break;
case 68:Bn=A._NewObject(C.ATp,0);break;case 78:Bn=A._NewObject(C.AP0,0);break;case
79:Bn=A._NewObject(C.APZ,0);break;case 26:Bn=A._NewObject(C.AQs,0);break;case 62:
Bn=A._NewObject(C.AQo,0);break;case 25:Bn=A._NewObject(C.AMN,0);break;case 75:Bn=
A._NewObject(C.AMO,0);break;case 67:Bn=A._NewObject(C.AMM,0);break;case 66:Bn=A.
_NewObject(C.AMP,0);break;case 64:Bn=A._NewObject(C.AMQ,0);break;case 65:Bn=A._NewObject(
C.Ap4,0);break;case 77:Bn=A._NewObject(C.AMR,0);break;case 76:Bn=A._NewObject(C.
AMK,0);break;case 95:Bn=A._NewObject(C.AKV,0);break;case 33:Bn=A._NewObject(C.WeightListScreen
,0);break;case 36:Bn=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 56:Bn=A.
_NewObject(C.AnimalMultiInfoScreen,0);break;case 57:Bn=A._NewObject(C.MultiInfoActionsScreen
,0);break;case 86:Bn=A._NewObject(C.AK8,0);break;case 103:Bn=A._NewObject(C.ATv,
0);break;default:throw new Error(AU9);}if(!!Bn)Bn.AnA=AkQ;return Bn;},B1:function(
AkQ){var F;if(!(F=this.Q,F[1].call(F[0])))A.ab5("%s",AU_);else this.Aiu.Blz((F=this.
Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Device).YT(AkQ);},Fm:function(){var
Bdm=3;var Bdl=this.Aiu.Blp();if(!!Bdl)Bdm=Bdl.AnA;else A.ab5("%s",AU$);A._GetAutoObject(
A.Device.Device).YT(Bdm);},_Init:function(aArg){C.A9e._Init.call(this.Aiu={I:this
},0);this.__proto__=C.A9c;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;this.Aiu._Done();A.h7--;},_ReInit:function(){this.Aiu._ReInit();},_Mark:function(
D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aiu).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"};C.
AY={_Init:function(){C.A9c._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.AE3={HY:null,X4:null,AeB:null,Z9:null,Mq:null,Ayt:
1,RatingMode:0,RatedAttribute:0,CT:function(){this.X4.R(this.Ba3(this.RatedAttribute
));this.AJi(this);},Ai:function(Ae){this.Mq.R(A._GetAutoObject(A.Device.Helper).
Nb(A.aaR(A.acf.AQf),PW,this.Ayt.toFixed()));if(this.RatingMode===1)this.Mq.Y(true
);else this.Mq.Y(false);},CJ:function(G){var B;C.AB.CJ.call(this,G);if(A._GetAutoObject(
A.Device.Device).Bq.La())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bq.Hz().toFixed(),0,null);this.HY.Gb();this.HY.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Awy(this.
HY,5);A.zX([this,this.AJi],[B=A._GetAutoObject(A.Device.Device),B.ARc,B.AYA],0);
A.zX([this,this.AJi],[B=A._GetAutoObject(A.Device.Helper).W,B.PA,B.DT],0);A.pe([
this,this.AJi],this);},ArV:function(G){var a=this.AIY(this.RatedAttribute);this.
BdC();this.Ayt=this.Ayt-1;this.An();if(!a)this.AQm();else this.Sj(a);},Wj:function(
G){var a=this.Ba_(this.RatedAttribute);this.BdC();this.Ayt=this.Ayt+1;this.An();
if(!a)this.A56();else this.Sj(a);},AIY:function(Nf){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Nf){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AGs);},Ba_:function(Nf){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Nf){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AGs);},Sj:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.X4.R(this.Ba3(E));this.
DD(E);this.AeB.And(this.HY.Bgk(E));if(!this.AIY(E)){if(this.APE())this.N.Cm(A.aaL(
A.ach.Aa0));else this.N.Cm(null);}else this.N.Cm(A.aaL(A.ach.AdY));},Ba3:function(
Nf){return this.Z9.BX(Nf);},BwF:function(Nf){if(!!Nf){var a=this.AIY(Nf);if(!a)return A.
jV;else return this.Ba4(a);}else return A.jV;},BwE:function(Nf){if(!!Nf){var a=this.
Ba_(Nf);if(!a)return A.jV;else return this.Ba4(a);}else return A.jV;},AQm:function(
){},A56:function(){},A45:function(){return null;},Ba4:function(Nf){return this.Z9.
Lm(Nf);},BdC:function(){if(!!this.RatedAttribute)this.HY.Bl5(this.RatedAttribute
,this.AeB.A4);},AJi:function(G){if(this.APE())this.RatingMode=A._GetAutoObject(A.
Device.Device).RatingMode;else this.RatingMode=0;this.Sj(2);this.DD(this.RatedAttribute
);this.An();},Xb:function(G){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},Akp:function(G){var a=this.AIY(this.RatedAttribute);if(!a){if(this.APE())this.
Xb(this);}else this.AQm();},DD:function(Nf){this.N.Hm(this.BwF(Nf));if(!!this.N.
Anw){this.N.CS(null);this.N.Oz(true);}else{this.N.CS(A.aaL(A.ach.AdY));this.N.Oz(
false);}this.N.BU(this.BwE(Nf));if(!!this.N.Any){this.N.C2(null);this.N.OA(true);
}else{this.N.C2(this.A45());this.N.OA(false);}},APE:function(){switch(A._GetAutoObject(
A.Device.Helper).W.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Asj,A._GetAutoObject(A.Device.Helper).W.AnimalType);}return false;}
,_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.X4={
I:this},0);C.Rating._Init.call(this.AeB={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.Z9={I:this},0);A.acg.Text._Init.call(this.Mq={I:this},0);this.__proto__=
C.AE3;this.Background.L(A.jb.CE);this.N.Y(true);this.Dr(C.Iy);this.X4.H(AVa);this.
X4.KI(true);this.X4.L(A.jb.Text);this.AeB.H(AVb);this.Mq.H(AVc);this.Mq.A2(0x14);
this.Mq.R(A.aaR(A.acf.AQf));this.Mq.L(A.jb.Text);this.J(this.X4,0);this.J(this.AeB
,0);this.J(this.Mq,0);this.A8(this.AeB);this.N.Cw=[this,this.ArV];this.N.Cg=[this
,this.Akp];this.N.Cb=[this,this.Wj];this.X4.S(A.aaL(A.fl.Ah));this.AeB.AQ=[this,
this.Wj];this.Mq.S(A.aaL(A.fl.Ah));this.HY=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AB;this.X4._Done();this.AeB._Done();this.Z9._Done();
this.Mq._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.X4._ReInit();this.AeB._ReInit();this.Z9._ReInit();this.Mq._ReInit();this.
Mq.R(A.aaR(A.acf.AQf));this.X4.S(A.aaL(A.fl.Ah));this.Mq.S(A.aaL(A.fl.Ah));this.
CT();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.HY)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.X4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z9)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Mq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HR={Z:null,Gender:null,AnimalType:null,Breed:null,I6:null,O9:null,Ar_:null,B4:
null,C6:null,Dd:null,CB:null,F0:null,Av:null,Kz:0,Init:function(aArg){A.zX([this
,this.A$r],this.B4.Q,0);A.pe([this,this.A$r],this);A.pe([this,this.Az7],this);},
Ai:function(Ae){C.AB.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).A31(this.
Z);},Du:function(G){var B;var E7=0;var X=this.AR;switch(this.Cl.CI){case 6:E7=2;
break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;}X=this.RY(
X,E7,0x415);if(!!X)this.A8(X);if(!!X&&((X.T&0x400)===0x400))this.Z.Hx(X,true,null
,null);this.Az7(this);},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[
1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},Aej:function(E){
if(this.Kz===E)return;this.Kz=E;A.abo([this,this.Avm,this.Aej],0);},Az7:function(
G){var B;var Hs=(C.Ci.isPrototypeOf(B=this.AR)?B:null);this.N.Hm(A.jV);this.N.CS(
A.aaL(A.ach.EV));this.N.Cw=[this,this.AHE];if(!!Hs&&!!Hs.AlT){this.N.FA(A.jV);this.
N.Kl.Ds(255);this.N.Aq5(Hs.Ap9);this.N.Cm(Hs.Au0);this.N.Cg=Hs.AlT;}else{this.N.
FA(A.jV);this.N.Cm(null);this.N.Cg=null;}if(!!Hs&&!!Hs.AfT){this.N.BU(A.jV);this.
N.Ii.Ds(Hs.Awm);this.N.Am6(Hs.Amm);this.N.C2(Hs.Aql);this.N.Cb=Hs.AfT;}else this.
AtB();},AfE:function(G){A.ab5("%s",Axj);},AxR:function(s){this.AfE(s);},Ee:function(
G){A.ab5("%s",Axj);},AHE:function(s){this.Ee(s);},AtB:function(){A.ab5("%s",AkI);
},Azs:function(G){A.ab5("%s",Axj);},WM:function(s){this.Azs(s);},LF:function(Af){
this.A8(Af);this.Z.Hx(Af,true,null,null);this.Z.U6(null,null);},Ao5:function(G){
var F;this.Dd.AgV(A._GetAutoObject(A.Device.Helper).AaO((F=this.B4.Q,F[1].call(F[
0]))));},A$r:function(s){this.Ao5(s);},G4:function(G){A.pe([this,this.E9],this);
},Avm:function(){return this.Kz;},_Init:function(aArg){C.AB._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.Gender._Init.call(this.Gender={I:this
},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.Breed._Init.call(this.
Breed={I:this},0);C.Us._Init.call(this.I6={I:this},0);A.Device.MS._Init.call(this.
O9={I:this},0);A.Device.KO._Init.call(this.Ar_={I:this},0);C.B$._Init.call(this.
B4={I:this},0);C.B$._Init.call(this.C6={I:this},0);C.Akn._Init.call(this.Dd={I:this
},0);C.AwA._Init.call(this.CB={I:this},0);C.ArQ._Init.call(this.F0={I:this},0);C.
Av._Init.call(this.Av={I:this},0);this.__proto__=C.HR;var B;this.N.Y(true);this.
Dr(C.Iy);this.Z.H(E4);this.Z.Kb(1);this.Kz=A._GetAutoObject(A.Device.Helper).AaO(
this.AnimalType.Q);this.B4.H(Aho);this.B4.Aj(true);this.B4.U(A.aaR(A.acf.AeU));this.
C6.H(Axk);this.C6.Aj(true);this.C6.U(A.aaR(A.acf.AeL));this.Dd.H(AnP);this.Dd.Aj(
true);this.Dd.U(A.aaR(A.acf.Kz));this.Dd.Gk(1000);this.Dd.E1(99000);this.Dd.AgV(
A._GetAutoObject(A.Device.Helper).AaO(this.AnimalType.Q));this.CB.H(Ahp);this.CB.
Aj(true);this.CB.U(A.aaR(A.acf.Breed));this.F0.H(AVd);this.F0.Aj(true);this.F0.U(
A.aaR(A.acf.I6));this.Av.H(Axl);this.J(this.Z,0);this.J(this.B4,0);this.J(this.C6
,0);this.J(this.Dd,0);this.J(this.CB,0);this.J(this.F0,0);this.J(this.Av,0);this.
Z.Ei=[this,this.G4];this.Gender.LT(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.
LT(A._GetAutoObject(A.Device.Helper).W);this.Breed.LT(A._GetAutoObject(A.Device.
Helper).W);this.I6.LT(A._GetAutoObject(A.Device.Helper).W);this.B4.Au([B=this.AnimalType
,B.B_,B.Ca]);this.B4.CK(this.AnimalType);this.C6.Au([B=this.Gender,B.B_,B.Ca]);this.
C6.CK(this.Gender);this.Dd.Au([this,this.Avm,this.Aej]);this.CB.Gj([this,this.D9
,this.GQ]);this.CB.LS([B=this.CB,B.FH]);this.CB.LU(A.aaL(A.ach.Edit));this.CB.Au([
B=this.Breed,B.B_,B.Ca]);this.CB.CK(this.Breed);this.CB.Am5(this.O9);this.F0.Gj([
this,this.D9,this.GQ]);this.F0.LS([B=this.F0,B.FH]);this.F0.LU(A.aaL(A.ach.Edit)
);this.F0.Au([B=this.I6,B.B_,B.Ca]);this.F0.CK(this.I6);this.F0.Am5(this.Ar_);this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.Gender._Done(
);this.AnimalType._Done();this.Breed._Done();this.I6._Done();this.O9._Done();this.
Ar_._Done();this.B4._Done();this.C6._Done();this.Dd._Done();this.CB._Done();this.
F0._Done();this.Av._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.Z._ReInit();this.Gender._ReInit();this.AnimalType._ReInit();this.
Breed._ReInit();this.I6._ReInit();this.O9._ReInit();this.Ar_._ReInit();this.B4._ReInit(
);this.C6._ReInit();this.Dd._ReInit();this.CB._ReInit();this.F0._ReInit();this.Av.
_ReInit();this.B4.U(A.aaR(A.acf.AeU));this.C6.U(A.aaR(A.acf.AeL));this.Dd.U(A.aaR(
A.acf.Kz));this.CB.U(A.aaR(A.acf.Breed));this.F0.U(A.aaR(A.acf.I6));},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I6).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.O9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ar_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalDataScreen"};C.V3={Ax5:false,LE:function(G){if(A._GetAutoObject(
A.Device.Device).Aq.La())A._GetAutoObject(A.Device.Device).A6(41,true,A._GetAutoObject(
A.Device.Device).Aq.Hz().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gb(
);A._GetAutoObject(A.Device.Helper).ApG(A._GetAutoObject(A.Device.Helper).W);},AtB:
function(){this.N.BU(A.jV);this.N.C2(A.aaL(A.ach.ACt));this.N.Cb=[this,this.AxR];
},CJ:function(G){if(!this.Ax5){this.Ax5=true;A.pe([this,this.WM],this);}else C.AqH.
CJ.call(this,G);},Azs:function(G){A._GetAutoObject(C.AY).B1(55);},_Init:function(
aArg){C.AqH._Init.call(this,aArg);this.__proto__=C.V3;this.Kj(this.Av,-1);},_className:
"Application::NewAnimalManualDataScreen"};C.Iy={_Init:function(aArg){C.ACa._Init.
call(this,aArg);this.__proto__=C.Iy;this.A75(false);},_className:"Application::HeaderSelectedAnimalId"
};C.IS={Filter:null,Gender:null,AnimalType:null,Transponder:null,Eb:null,Z:null,
PM:null,SF:null,NX:null,SG:null,Nc:null,O7:null,Rt:null,Og:null,Ru:null,Nu:null,
K8:null,Je:null,KM:null,Mj:null,XY:null,SI:null,Rv:null,Av:null,AwZ:0,AwY:0,AtY:
0,AtX:0,AqG:0,Ar3:0,AuD:0,AuE:0,AlX:false,AnG:false,Init:function(aArg){A.zX([this
,this.AuJ],this.K8.Q,0);A.zX([this,this.At3],this.Je.Q,0);A.zX([this,this.Bnf],this.
KM.Q,0);A.zX([this,this.BhF],this.Mj.Q,0);A.zX([this,this.BnK],this.Nc.Q,0);A.zX([
this,this.BnJ],this.NX.Q,0);A.zX([this,this.BeC],this.Nu.Q,0);A.zX([this,this.BeB
],this.Og.Q,0);this.A8(this.PM);},Du:function(G){var E7=0;var X=this.AR;switch(this.
Cl.CI){case 6:E7=2;break;case 7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;
}X=this.RY(X,E7,0x414);if(!!X)this.A8(X);this.MG(this);},CJ:function(G){if(!!A._GetAutoObject(
A.Device.Device).Aq.Filter)this.Bm(A._GetAutoObject(A.Device.Device).Aq.Filter.Gy(
));else this.Bm(A._NewObject(A.Device.Filter,0));},Ee:function(G){A._GetAutoObject(
C.AY).Fm();},A1a:function(G){var Eu=(C.AdQ.isPrototypeOf(G)?G:null);if(!Eu)return;
var Ay=this.Filter.DX(Eu.Eh,Eu.Operator);if(!!Ay){this.Filter.QQ(Ay);A.abo([this
,this.Fx,this.FB],0);}else{if(Eu.Eh===11){Ay=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay.ET=Eu.Eh;Ay.Operator=Eu.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Ay)?Ay:null).A4=true;}else if(Eu.Eh===12){Ay=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay.ET=Eu.Eh;Ay.Operator=Eu.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Ay)?Ay:null).A4=true;}else if(Eu.Eh===8){Ay=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay.ET=Eu.Eh;Ay.Operator=Eu.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Ay)?Ay:null).A4=true;}else A.ab5("%s",AGt+Eu.Eh.toFixed());if(!!Ay){this.Filter.
CZ(Ay);A.abo([this,this.Fx,this.FB],0);}}},Bxc:function(G){A._GetAutoObject(A.Device.
Device).Aq.Bm(this.Filter);A._GetAutoObject(C.AY).Fm();},Azq:function(G){var Eu=(
C.Ams.isPrototypeOf(G)?G:null);if(!Eu)return;var Ay=this.Filter.DX(Eu.Eh,Eu.Operator
);if(!!Ay){this.Filter.QQ(Ay);A.abo([this,this.Fx,this.FB],0);}else{if(Eu.Eh===7
){Ay=A._NewObject(A.Device.GenderFilterCriterion,0);Ay.ET=Eu.Eh;Ay.Operator=Eu.Operator;
}else if(Eu.Eh===14){Ay=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Ay.ET=
Eu.Eh;Ay.Operator=Eu.Operator;}else if((Eu.Eh===22)||(Eu.Eh===26)){var AZe=A._NewObject(
A.Device.UInt64FilterCriterion,0);AZe.ET=Eu.Eh;AZe.Operator=0;Ay=AZe;}else A.ab5(
"%s",AGt+Eu.Eh.toFixed());if(!!Ay){this.Filter.CZ(Ay);A.abo([this,this.Fx,this.FB
],0);}}},A70:function(E){if(this.AuD===E)return;this.AuD=E;A.abo([this,this.Bik,
this.A70],0);},A71:function(E){if(this.AuE===E)return;this.AuE=E;A.abo([this,this.
Bil,this.A71],0);},AuJ:function(G){var F;this.A71((F=this.K8.Q,F[1].call(F[0])));
var Ay=this.Filter.DX(7,0);if(!!Ay){var AyN=(A.Device.GenderFilterCriterion.isPrototypeOf(
Ay)?Ay:null);if(!!AyN)AyN.A4=this.AuE;else A.ab5("%s",Ae8);}},At3:function(G){var
F;this.A70((F=this.Je.Q,F[1].call(F[0])));var Ay=this.Filter.DX(14,0);if(!!Ay){var
UG=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!UG)UG.A4=
this.AuD;else A.ab5("%s",Ae8);}},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1
))[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},A8F:function(
E){if(this.Ar3===E)return;this.Ar3=E;A.abo([this,this.BiX,this.A8F],0);},Bnf:function(
G){var F;this.A8F((F=this.KM.Q,F[1].call(F[0])));var Ay=this.Filter.DX(22,1);if(
!!Ay){var AiD=(A.Device.UInt64FilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!AiD
)switch(this.Ar3){case 1:AiD.Operator=5;break;case 0:AiD.Operator=0;break;default:
A.ab5("%s%e",AGu,this.Ar3);}else A.ab5("%s",Ae8);}},A8b:function(E){if(this.AqG===
E)return;this.AqG=E;A.abo([this,this.BiB,this.A8b],0);},BhF:function(G){var F;this.
A8b((F=this.Mj.Q,F[1].call(F[0])));var Ay=this.Filter.DX(26,1);if(!!Ay){var Atg=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!Atg)switch(this.AqG
){case 1:Atg.Operator=5;break;case 0:Atg.Operator=0;break;default:A.ab5("%s%e",AGu
,this.AqG);}else A.ab5("%s",Ae8);}},Bm:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PM.Bm([this,this.Fx,this.FB]);this.SF.
Bm([this,this.Fx,this.FB]);this.NX.Bm([this,this.Fx,this.FB]);this.SG.Bm([this,this.
Fx,this.FB]);this.Nc.Bm([this,this.Fx,this.FB]);this.O7.Bm([this,this.Fx,this.FB
]);this.Rt.Bm([this,this.Fx,this.FB]);this.Og.Bm([this,this.Fx,this.FB]);this.Ru.
Bm([this,this.Fx,this.FB]);this.Nu.Bm([this,this.Fx,this.FB]);this.K8.Bm([this,this.
Fx,this.FB]);this.Je.Bm([this,this.Fx,this.FB]);this.KM.Bm([this,this.Fx,this.FB
]);this.Mj.Bm([this,this.Fx,this.FB]);this.XY.Bm([this,this.Fx,this.FB]);this.SI.
Bm([this,this.Fx,this.FB]);this.Rv.Bm([this,this.Fx,this.FB]);this.Arl(false);A.
pe([this,this.A2G],this);var BbK=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DX(1,2))?B:null);if(!!BbK){this.Arl(true);this.AEL(BbK.A4);}var Bbe=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DX(1,3))?B:null);if(!!
Bbe){this.Arl(true);this.AEM(Bbe.A4);}this.AqX(false);A.pe([this,this.A2z],this);
var BbJ=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DX(4,3))?B:null
);if(!!BbJ){this.AqX(true);this.ADy(A._GetAutoObject(A.Device.Helper).MF(BbJ.A4,
A._GetAutoObject(A.Device.Helper).Dy()));}var Bbd=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DX(4,2))?B:null);if(!!Bbd){this.AqX(true);this.ADA(A.
_GetAutoObject(A.Device.Helper).MF(Bbd.A4,A._GetAutoObject(A.Device.Helper).Dy()
)+1);}var AyN=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DX(7,0
))?B:null);if(!!AyN)this.K8.Bx(this.Gender.DP(AyN.A4));var UG=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DX(14,0))?B:null);if(!!UG)this.Je.Bx(this.AnimalType.
DP(UG.A4));var AiD=this.Filter.DX(22,1);if(!!AiD){if(!AiD.Operator)this.KM.Bx(0);
else this.KM.Bx(1);}var Atg=this.Filter.DX(26,1);if(!!Atg){if(!Atg.Operator)this.
Mj.Bx(0);else this.Mj.Bx(1);}},FB:function(Ap){this.Bm(Ap);},AEM:function(E){if(
this.AwZ===E)return;this.AwZ=E;A.abo([this,this.A7r,this.AEM],0);},AEL:function(
E){if(this.AwY===E)return;this.AwY=E;A.abo([this,this.A7q,this.AEL],0);},BnK:function(
G){var F;this.AEM((F=this.Nc.Q,F[1].call(F[0])));var Ay=this.Filter.DX(1,3);if(!
!Ay){var AAq=(A.Device.Int32FilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!AAq)
AAq.A4=this.AwZ;else A.ab5("%s",Ae8);}},BnJ:function(G){var F;this.AEL((F=this.NX.
Q,F[1].call(F[0])));var Ay=this.Filter.DX(1,2);if(!!Ay){var AAq=(A.Device.Int32FilterCriterion.
isPrototypeOf(Ay)?Ay:null);if(!!AAq)AAq.A4=this.AwY;else A.ab5("%s",Ae8);}},Bcb:
function(G){var Eu=(C.Aje.isPrototypeOf(G)?G:null);if(!Eu)return;var Ay=this.Filter.
DX(Eu.Eh,Eu.Operator);if(!!Ay){this.Filter.QQ(Ay);A.abo([this,this.Fx,this.FB],0
);}else{if(Eu===this.SF){Ay=A._NewObject(A.Device.Int32FilterCriterion,0);Ay.ET=
Eu.Eh;Ay.Operator=Eu.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Ay)?Ay:
null).A4=this.AwY;this.A8(this.NX);}else if(Eu===this.SG){Ay=A._NewObject(A.Device.
Int32FilterCriterion,0);Ay.ET=Eu.Eh;Ay.Operator=Eu.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Ay)?Ay:null).A4=this.AwZ;this.A8(this.Nc);}if(!!Ay){this.Filter.CZ(
Ay);A.abo([this,this.Fx,this.FB],0);}}A.pe([this,this.A2G],this);},A2G:function(
G){var A0Y=!!this.Filter.DX(this.NX.Eh,this.NX.Operator);var A2H=!!this.Filter.DX(
this.Nc.Eh,this.Nc.Operator);A._GetAutoObject(A.Device.Helper).Ms(this.SF,this.AnG
);A._GetAutoObject(A.Device.Helper).Ms(this.SG,this.AnG);A._GetAutoObject(A.Device.
Helper).Ms(this.NX,A0Y);A._GetAutoObject(A.Device.Helper).Ms(this.Nc,A2H);},MG:function(
G){var B;this.Z.U6(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hx(
this.AR,true,null,null);},Bx6:function(G){A.pe([this,this.E9],this);A.pe([this,this.
MG],this);},Bw$:function(G){this.Arl(!this.AnG);if(this.AnG===false){var Ay=this.
Filter.DX(this.PM.Eh,this.PM.Operator);while(!!Ay){this.Filter.QQ(Ay);Ay=this.Filter.
DX(this.PM.Eh,this.PM.Operator);}A.abo([this,this.Fx,this.FB],0);}},Arl:function(
E){if(this.AnG===E)return;this.AnG=E;A.abo([this,this.A7p,this.Arl],0);A.pe([this
,this.A2G],this);},ADA:function(E){if(this.AtY===E)return;this.AtY=E;A.abo([this
,this.A6F,this.ADA],0);},ADy:function(E){if(this.AtX===E)return;this.AtX=E;A.abo([
this,this.A6D,this.ADy],0);},BeC:function(G){var F;this.ADA((F=this.Nu.Q,F[1].call(
F[0])));var Ay=this.Filter.DX(4,2);if(!!Ay){var AkR=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Ay)?Ay:null);if(!!AkR){var Aab=A._GetAutoObject(A.Device.Helper).Ze(
this.AtY-1);AkR.A4=Aab;}else A.ab5("%s",Ae8);}},BeB:function(G){var F;this.ADy((
F=this.Og.Q,F[1].call(F[0])));var Ay=this.Filter.DX(4,3);if(!!Ay){var AkR=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!AkR){var Aab=A._GetAutoObject(
A.Device.Helper).Ze(this.AtX);AkR.A4=Aab;}else A.ab5("%s",Ae8);}},A2z:function(G
){var A0Y=!!this.Filter.DX(this.Og.Eh,this.Og.Operator);var A2H=!!this.Filter.DX(
this.Nu.Eh,this.Nu.Operator);A._GetAutoObject(A.Device.Helper).Ms(this.Rt,this.AlX
);A._GetAutoObject(A.Device.Helper).Ms(this.Ru,this.AlX);A._GetAutoObject(A.Device.
Helper).Ms(this.Og,A0Y);A._GetAutoObject(A.Device.Helper).Ms(this.Nu,A2H);},AqX:
function(E){if(this.AlX===E)return;this.AlX=E;A.abo([this,this.A6C,this.AqX],0);
A.pe([this,this.A2z],this);},Bca:function(G){var Eu=(C.Aje.isPrototypeOf(G)?G:null
);if(!Eu)return;var Ay=this.Filter.DX(Eu.Eh,Eu.Operator);if(!!Ay){this.Filter.QQ(
Ay);A.abo([this,this.Fx,this.FB],0);}else{if(Eu===this.Rt){Ay=A._NewObject(A.Device.
UInt32FilterCriterion,0);Ay.ET=Eu.Eh;Ay.Operator=Eu.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(Ay)?Ay:null).A4=A._GetAutoObject(A.Device.Helper).Ze(this.AtX);this.
A8(this.Og);}else if(Eu===this.Ru){Ay=A._NewObject(A.Device.UInt32FilterCriterion
,0);Ay.ET=Eu.Eh;Ay.Operator=Eu.Operator;(A.Device.UInt32FilterCriterion.isPrototypeOf(
Ay)?Ay:null).A4=A._GetAutoObject(A.Device.Helper).Ze(this.AtY-1);this.A8(this.Nu
);}if(!!Ay){this.Filter.CZ(Ay);A.abo([this,this.Fx,this.FB],0);}}A.pe([this,this.
A2z],this);},Bw_:function(G){this.AqX(!this.AlX);if(this.AlX===false){var Ay=this.
Filter.DX(this.O7.Eh,this.O7.Operator);while(!!Ay){this.Filter.QQ(Ay);Ay=this.Filter.
DX(this.O7.Eh,this.O7.Operator);}A.abo([this,this.Fx,this.FB],0);}},Fx:function(
){return this.Filter;},Bil:function(){return this.AuE;},Bik:function(){return this.
AuD;},BiX:function(){return this.Ar3;},BiB:function(){return this.AqG;},A7r:function(
){return this.AwZ;},A7q:function(){return this.AwY;},A7p:function(){return this.
AnG;},A6F:function(){return this.AtY;},A6D:function(){return this.AtX;},A6C:function(
){return this.AlX;},_Init:function(aArg){C.AB._Init.call(this,aArg);C.Gender._Init.
call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);
C.AAH._Init.call(this.Transponder={I:this},0);C.AAH._Init.call(this.Eb={I:this},
0);A.Core.Z._Init.call(this.Z={I:this},0);C.AAU._Init.call(this.PM={I:this},0);C.
Aje._Init.call(this.SF={I:this},0);C.AaN._Init.call(this.NX={I:this},0);C.Aje._Init.
call(this.SG={I:this},0);C.AaN._Init.call(this.Nc={I:this},0);C.AAU._Init.call(this.
O7={I:this},0);C.Aje._Init.call(this.Rt={I:this},0);C.ABG._Init.call(this.Og={I:
this},0);C.Aje._Init.call(this.Ru={I:this},0);C.ABG._Init.call(this.Nu={I:this},
0);C.Ams._Init.call(this.K8={I:this},0);C.Ams._Init.call(this.Je={I:this},0);C.Ams.
_Init.call(this.KM={I:this},0);C.Ams._Init.call(this.Mj={I:this},0);C.Qm._Init.call(
this.XY={I:this},0);C.Qm._Init.call(this.SI={I:this},0);C.Qm._Init.call(this.Rv={
I:this},0);C.Av._Init.call(this.Av={I:this},0);this.__proto__=C.IS;var B;this.N.
Y(true);this.N.BU(A.aaR(A.acf.A3g));this.Dr(C.AN7);this.Gender.Au(this.AuE);this.
AnimalType.Au(this.AuD);this.Transponder.Au(this.Ar3);this.Eb.Au(this.AqG);this.
Z.H(E4);this.Z.Kb(1);this.PM.H(KP);this.PM.Aj(true);this.PM.U(A._GetAutoObject(A.
Device.Helper).Amq(0,1));this.PM.M7(1);this.SF.H(Q6);this.SF.Aj(true);this.SF.U(
A.aaR(A.acf.ACX));this.SF.M7(1);this.SF.Oy(2);this.NX.H(WJ);this.NX.M7(1);this.NX.
Oy(2);this.NX.AED(A.aaR(A.acf.GB));this.SG.H(AkJ);this.SG.Aj(true);this.SG.U(A.aaR(
A.acf.AFV));this.SG.M7(1);this.SG.Oy(3);this.Nc.H(AnQ);this.Nc.Aj(true);this.Nc.
M7(1);this.Nc.Oy(3);this.Nc.AED(A.aaR(A.acf.GB));this.O7.H(AVe);this.O7.Aj(true);
this.O7.U(A.aaR(A.acf.Td));this.O7.M7(4);this.Rt.H(AVf);this.Rt.Aj(true);this.Rt.
U(A.aaR(A.acf.ACX));this.Rt.M7(4);this.Rt.Oy(3);this.Og.H(AVg);this.Og.M7(4);this.
Og.Oy(3);this.Og.A8g(2);this.Ru.H(AVh);this.Ru.Aj(true);this.Ru.U(A.aaR(A.acf.AFV
));this.Ru.M7(4);this.Ru.Oy(2);this.Nu.H(AVi);this.Nu.Aj(true);this.Nu.M7(4);this.
Nu.Oy(2);this.Nu.A8g(3);this.K8.H(Ask);this.K8.Aj(true);this.K8.M7(7);this.K8.AgX(
0);this.K8.Oy(0);this.Je.H(WI);this.Je.Aj(true);this.Je.M7(14);this.Je.AgX(0);this.
Je.Oy(0);this.KM.H(WI);this.KM.Aj(true);this.KM.M7(22);this.KM.AgX(0);this.KM.Oy(
1);this.Mj.H(WI);this.Mj.Aj(true);this.Mj.M7(26);this.Mj.AgX(0);this.Mj.Oy(1);this.
XY.H(WI);this.XY.Aj(true);this.XY.M7(11);this.XY.AgX(0);this.XY.Oy(0);this.SI.H(
WI);this.SI.Aj(true);this.SI.M7(12);this.SI.AgX(0);this.SI.Oy(0);this.Rv.H(WI);this.
Rv.Aj(true);this.Rv.M7(8);this.Rv.AgX(0);this.Rv.Oy(0);this.Av.H(II);this.J(this.
Z,0);this.J(this.PM,0);this.J(this.SF,0);this.J(this.NX,0);this.J(this.SG,0);this.
J(this.Nc,0);this.J(this.O7,0);this.J(this.Rt,0);this.J(this.Og,0);this.J(this.Ru
,0);this.J(this.Nu,0);this.J(this.K8,0);this.J(this.Je,0);this.J(this.KM,0);this.
J(this.Mj,0);this.J(this.XY,0);this.J(this.SI,0);this.J(this.Rv,0);this.J(this.Av
,0);this.N.Cw=[this,this.Ee];this.N.Cb=[this,this.Bxc];this.N.CS(A.aaL(A.ach.EV)
);this.Z.Ei=[this,this.Bx6];this.PM.AQ=[this,this.Bw$];this.PM.Au([this,this.A7p
,this.Arl]);this.SF.AQ=[this,this.Bcb];this.NX.Gj([this,this.D9,this.GQ]);this.NX.
Au([this,this.A7q,this.AEL]);this.SG.AQ=[this,this.Bcb];this.Nc.Gj([this,this.D9
,this.GQ]);this.Nc.Au([this,this.A7r,this.AEM]);this.O7.AQ=[this,this.Bw_];this.
O7.Au([this,this.A6C,this.AqX]);this.Rt.AQ=[this,this.Bca];this.Og.Gj([this,this.
D9,this.GQ]);this.Og.Au([this,this.A6D,this.ADy]);this.Ru.AQ=[this,this.Bca];this.
Nu.Gj([this,this.D9,this.GQ]);this.Nu.Au([this,this.A6F,this.ADA]);this.K8.AQ=[this
,this.Azq];this.K8.Au([B=this.Gender,B.B_,B.Ca]);this.K8.CK(this.Gender);this.Je.
AQ=[this,this.Azq];this.Je.Au([B=this.AnimalType,B.B_,B.Ca]);this.Je.CK(this.AnimalType
);this.KM.AQ=[this,this.Azq];this.KM.Au([B=this.Transponder,B.B_,B.Ca]);this.KM.
CK(this.Transponder);this.Mj.AQ=[this,this.Azq];this.Mj.Au([B=this.Eb,B.B_,B.Ca]
);this.Mj.CK(this.Eb);this.XY.AQ=[this,this.A1a];this.SI.AQ=[this,this.A1a];this.
Rv.AQ=[this,this.A1a];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.
Gender._Done();this.AnimalType._Done();this.Transponder._Done();this.Eb._Done();
this.Z._Done();this.PM._Done();this.SF._Done();this.NX._Done();this.SG._Done();this.
Nc._Done();this.O7._Done();this.Rt._Done();this.Og._Done();this.Ru._Done();this.
Nu._Done();this.K8._Done();this.Je._Done();this.KM._Done();this.Mj._Done();this.
XY._Done();this.SI._Done();this.Rv._Done();this.Av._Done();C.AB._Done.call(this);
},_ReInit:function(){C.AB._ReInit.call(this);this.Gender._ReInit();this.AnimalType.
_ReInit();this.Transponder._ReInit();this.Eb._ReInit();this.Z._ReInit();this.PM.
_ReInit();this.SF._ReInit();this.NX._ReInit();this.SG._ReInit();this.Nc._ReInit(
);this.O7._ReInit();this.Rt._ReInit();this.Og._ReInit();this.Ru._ReInit();this.Nu.
_ReInit();this.K8._ReInit();this.Je._ReInit();this.KM._ReInit();this.Mj._ReInit(
);this.XY._ReInit();this.SI._ReInit();this.Rv._ReInit();this.Av._ReInit();this.N.
BU(A.aaR(A.acf.A3g));this.SF.U(A.aaR(A.acf.ACX));this.NX.AED(A.aaR(A.acf.GB));this.
SG.U(A.aaR(A.acf.AFV));this.Nc.AED(A.aaR(A.acf.GB));this.O7.U(A.aaR(A.acf.Td));this.
Rt.U(A.aaR(A.acf.ACX));this.Ru.U(A.aaR(A.acf.AFV));},_Mark:function(D){var B;C.AB.
_Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Nc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Rt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Og)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ru)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Je)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rv)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListFilterScreen"};C.A9e={Zf:null,Blz:function(BuO){var EM=A.
_NewObject(C.A9d,0);EM.AB=BuO;EM.Mk=this.Zf;this.Zf=EM;},A8V:function(){var UW=null;
if(!!this.Zf){UW=this.Zf.AB;this.Zf=this.Zf.Mk;}return UW;},Contains:function(AkQ
){var EM=this.Zf;while(!!EM){if(EM.AB.AnA===AkQ)return true;EM=EM.Mk;}return false;
},Blp:function(){if(!!this.Zf)return this.Zf.AB;else return null;},_Init:function(
aArg){this.__proto__=C.A9e;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Zf)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenStack"};C.A9d={AB:null,Mk:null,_Init:function(
aArg){this.__proto__=C.A9d;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.AB)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Mk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B.
_cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ScreenNode"
};C.AKS={AQm:function(){A._GetAutoObject(A.Device.Helper).Awy(this.HY,0);A._GetAutoObject(
C.AY).Fm();},A56:function(){this.HY.Cp(A._GetAutoObject(A.Device.Device).Bq);A._GetAutoObject(
C.AY).Fm();},A45:function(){return A.aaL(A.ach.Amx);},_Init:function(aArg){C.AE3.
_Init.call(this,aArg);this.__proto__=C.AKS;this.Dr(C.Iy);},_className:"Application::AnimalActionRateScreen"
};C.AKO={V7:function(G){this.AfV();this.Ey(A.aaR(A.acf.ATA),[this,this.AR6],5);this.
Ey(A.aaR(A.acf.A3U),[this,this.Bji],4);this.Ey(A.aaR(A.acf.Arx),[this,this.Ard],
3);this.Ey(A.aaR(A.acf.Ahc),[this,this.Aj7],2);this.Ey(A.aaR(A.acf.Adj),[this,this.
AqY],1);this.Ey(A.aaR(A.acf.AiK),[this,this.Am2],0);A._GetAutoObject(C.BW).Gu();
A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.Adf)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Cj(6);},Du:function(G){},AaQ:function(){return C.ALH;},AaR:function(
){return C.ACc;},QS:function(G){var Bc=A._GetAutoObject(A.Device.Helper).MZ();var
Ax3=A._NewObject(A.Device.BoolFilterCriterion,0);Ax3.Initialize(8,0,true,true);Bc.
CZ(Ax3);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);},HI:function(G){C.EP.HI.call(
this,G);if(this.AjM()===false){this.N.Cm(A.aaL(A.ach.AE$));this.N.Cg=[this,this.
A4o];this.N.FA(A.jV);}this.N.Oz(false);this.N.OA(false);},AfH:function(){A._GetAutoObject(
C.AY).B1(41);},AfG:function(){A._GetAutoObject(C.AY).B1(43);},_Init:function(aArg
){C.EP._Init.call(this,aArg);this.__proto__=C.AKO;var B;this.Dr(C.ANz);this.Dq(A.
aaR(A.acf.A6b));this.Aj6([B=A._GetAutoObject(A.Device.Device),B.A6G,B.A_U]);},_ReInit:
function(){C.EP._ReInit.call(this);this.Dq(A.aaR(A.acf.A6b));},_className:"Application::AlarmListScreen"
};C.AL8={Du:function(G){},Ao9:function(G){if(!!this.Be)A.ab5("%i",this.Be.AD.Gd);
var Aa=(C.AA1.isPrototypeOf(G)?G:null);if(!!Aa){A._GetAutoObject(A.Device.Helper
).HD(Aa.Hr);A._GetAutoObject(C.AY).B1(13);}},QS:function(G){var Bc=A._GetAutoObject(
A.Device.Helper).MZ();var Ayl=A._NewObject(A.Device.BoolFilterCriterion,0);Ayl.Initialize(
9,0,true,true);Bc.CZ(Ayl);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);},HI:function(
G){C.EP.HI.call(this,G);this.N.Oz(false);this.N.OA(false);},_Init:function(aArg){
C.EP._Init.call(this,aArg);this.__proto__=C.AL8;this.Dr(C.ANB);this.Dq(A.aaR(A.acf.
A6c));},_ReInit:function(){C.EP._ReInit.call(this);this.Dq(A.aaR(A.acf.A6c));},_className:
"Application::ControlListScreen"};C.AdQ={Filter:null,Eh:0,I0:10,TableId:0,Operator:
1,CT:function(){var F;this.S8((F=this.Filter,F[1].call(F[0])).DX(this.Eh,this.Operator
));},Bg:function(aSize){C.Ci.Bg.call(this,aSize);this.V.H(A.abK(this.V.M,[aSize[
0]-(2*this.I0),aSize[1]]));},Bm:function(E){if(A.aaZ(this.Filter,E))return;if(!!
this.Filter)A.z$([this,this.L5],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.
L5],E,0);A.pe([this,this.L5],this);},L5:function(G){var F;if(!!this.Filter&&!!(F=
this.Filter,F[1].call(F[0])))this.S8((F=this.Filter,F[1].call(F[0])).DX(this.Eh,
this.Operator));else this.S8(null);},AgX:function(E){if(this.TableId===E)return;
this.TableId=E;A.pe([this,this.L5],this);},M7:function(E){if(this.Eh===E)return;
this.Eh=E;A.pe([this,this.L5],this);},S8:function(AM){if(!!AM)this.U(A._GetAutoObject(
A.Device.Helper).A40(this.TableId,AM));else this.U(A._GetAutoObject(A.Device.Helper
).Amq(this.TableId,this.Eh));},Oy:function(E){if(this.Operator===E)return;this.Operator=
E;A.pe([this,this.L5],this);},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.
__proto__=C.AdQ;this.V.H(AGv);this.V.A2(0x11);},_ReInit:function(){C.Ci._ReInit.
call(this);this.CT();},_Mark:function(D){var B;C.Ci._Mark.call(this,D);if((B=this.
Filter)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"
};C.Qm={HX:null,Bg:function(aSize){var B;C.AdQ.Bg.call(this,aSize);this.HX.H([(aSize[
0]-((B=this.HX.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.H([this.I0,0,this.
HX.M[0]-this.I0,aSize[1]]);},S8:function(AM){this.U(A._GetAutoObject(A.Device.Helper
).Amq(this.TableId,this.Eh));var Ay=(A.Device.BoolFilterCriterion.isPrototypeOf(
AM)?AM:null);if(!!Ay&&Ay.A4)this.HX.Ct(1);else this.HX.Ct(0);},_Init:function(aArg
){C.AdQ._Init.call(this,aArg);A.acg.Am._Init.call(this.HX={I:this},0);this.__proto__=
C.Qm;this.HX.H(AGw);this.HX.Ct(0);this.J(this.HX,0);this.HX.Ax(A.aaL(A.ach.Ap7));
},_Done:function(){this.__proto__=C.AdQ;this.HX._Done();C.AdQ._Done.call(this);}
,_ReInit:function(){C.AdQ._ReInit.call(this);this.HX._ReInit();},_Mark:function(
D){var B;C.AdQ._Mark.call(this,D);if((B=this.HX)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.AN7={Am:null,Text:null,C7:function(
E){C.BO.C7.call(this,E);this.Text.L(E);this.Am.L(E);},_Init:function(aArg){C.BO.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.AN7;this.Am.H(AVj);this.Text.H(AVk);this.
Text.A2(0x11);this.Text.R(A.aaR(A.acf.Filter));this.J(this.Am,0);this.J(this.Text
,0);this.Am.Ax(A.aaL(A.ach.Ad0));this.Text.S(A.aaL(A.fl.Ah));},_Done:function(){
this.__proto__=C.BO;this.Am._Done();this.Text._Done();C.BO._Done.call(this);},_ReInit:
function(){C.BO._ReInit.call(this);this.Am._ReInit();this.Text._ReInit();this.Text.
R(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BO.
_Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.AuQ={
CX:null,A0:null,VB:null,Bg:function(aSize){var B;C.BO.Bg.call(this,aSize);this.VB.
H(A.abJ(this.VB.M,A.abe(this.A0.M.slice(0,2),AVl)));this.VB.H(A.abK(this.VB.M,A.
abf([(B=this.A0.M)[2]-B[0],B[3]-B[1]],AVm)));},Ai:function(Ae){var B;C.BO.Ai.call(
this,Ae);var Ip=((Ae&0x40)===0x40)&&(this.AR===this.A0);if(Ip)this.VB.L(A.jb.AR);
else this.VB.L(A.jb.Amz);},C7:function(E){C.BO.C7.call(this,E);this.CX.C7(E);},AgL:
function(){return this.A0.AgL();},DT:function(E){this.CX.DT(E);},_Init:function(
aArg){C.BO._Init.call(this,aArg);C.CX._Init.call(this.CX={I:this},0);C.A0._Init.
call(this.A0={I:this},0);A.acg.Cz._Init.call(this.VB={I:this},0);this.__proto__=
C.AuQ;this.CX.H(AVn);this.CX.DT(0);this.A0.H(AVo);this.VB.H(AGx);this.VB.NO(2);this.
J(this.CX,0);this.J(this.A0,0);this.J(this.VB,0);this.A8(this.A0);},_Done:function(
){this.__proto__=C.BO;this.CX._Done();this.A0._Done();this.VB._Done();C.BO._Done.
call(this);},_ReInit:function(){C.BO._ReInit.call(this);this.CX._ReInit();this.A0.
_ReInit();this.VB._ReInit();},_Mark:function(D){var B;C.BO._Mark.call(this,D);if((
B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearch"
};C.DF={Dj:null,Ig:null,If:null,AfD:function(G){if(this.E$<0)this.M6(1);else if(
this.E$===9)this.M6(0);else this.M6(this.E$+1);A.pe(this.Dj,this);},Ai:function(
Ae){var B;C.E$.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10);var Ip=((Ae&0x40)===0x40
);if(Ip){this.Background.L(A.jb.AR);this.Text.L(A.jb.Bh);this.Ds(256);}else if(G2
){this.Background.L(this.MR);this.Text.L(A.jb.Text);this.Ds(256);}else{this.Background.
L(this.MR);this.Text.L(A.jb.Text);this.Ds(128);}},AfC:function(G){if(this.E$<=0)
this.M6(9);else this.M6(this.E$-1);A.pe(this.Dj,this);},_Init:function(aArg){C.E$.
_Init.call(this,aArg);A.Core.BJ._Init.call(this.Ig={I:this},0);A.Core.BJ._Init.call(
this.If={I:this},0);this.__proto__=C.DF;this.Ig.Filter=4;this.If.Filter=5;this.Ig.
BK=[this,this.AfD];this.Ig.DS=[this,this.AfD];this.If.BK=[this,this.AfC];this.If.
DS=[this,this.AfC];},_Done:function(){this.__proto__=C.E$;this.Ig._Done();this.If.
_Done();C.E$._Done.call(this);},_ReInit:function(){C.E$._ReInit.call(this);this.
Ig._ReInit();this.If._ReInit();},_Mark:function(D){var B;C.E$._Mark.call(this,D);
if((B=this.Dj)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ig)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputDigit"};C.A0={Dj:null,Cn:null,CQ:null,Dn:null,Eg:null,FY:null
,ER:null,Fb:null,E0:null,MX:0,ApN:false,Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);if(((Ae&0x40)===0x40)&&this.ApN)this.ER.AjY(true);else this.ER.AjY(false);}
,AD1:function(E){var B;if(E===this.AgL())return;var AJd=E;var El=this.ER;while(!
!El){if(AJd>0){El.M6(AJd%10);AJd=(AJd/10)|0;}else El.M6(-1);El=(C.DF.isPrototypeOf(
B=this.RY(El,2,0x11))?B:null);}},AgL:function(){var B;var KT=A.jV;var P=0;var B2=
this.Cn;for(;P<6;P=P+1){if(!!B2&&(B2.E$>=0))KT=KT+B2.E$.toFixed();B2=(C.DF.isPrototypeOf(
B=this.Vp(B2,0x11))?B:null);}return A.wz(KT,-1,10);},N_:function(G){if(this.AgL(
)>=10)this.BdQ(7);},MN:function(G){if((this.AgL()>0)&&(this.Cn.E$<0))this.BdQ(2);
else if(this.AgL()<=0)this.E0.Ny=true;},AcV:function(G){A.pe(this.Dj,this);},BdQ:
function(Gn){var B;var AJ9=0;var El=null;switch(Gn){case 2:{El=this.Cn;AJ9=7;}break;
case 7:{El=this.ER;AJ9=2;}break;default:throw new Error(AVp);}while(!!El){var A06=(
C.DF.isPrototypeOf(B=this.RY(El,AJ9,0x11))?B:null);if(!!A06)El.M6(A06.E$);else if(
AJ9===7)El.M6(0);else El.M6(-1);El=A06;}A.pe([this,this.AcV],this);},AjY:function(
E){if(this.ApN===E)return;this.ApN=E;this.An();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.DF._Init.call(this.Cn={I:this},0);C.DF._Init.call(this.CQ={I:this
},0);C.DF._Init.call(this.Dn={I:this},0);C.DF._Init.call(this.Eg={I:this},0);C.DF.
_Init.call(this.FY={I:this},0);C.DF._Init.call(this.ER={I:this},0);A.Core.BJ._Init.
call(this.Fb={I:this},0);A.Core.BJ._Init.call(this.E0={I:this},0);this.__proto__=
C.A0;this.H(Axm);this.Cn.AW(0x3);this.Cn.H(AGy);this.CQ.AW(0x3);this.CQ.H(AGz);this.
Dn.AW(0x3);this.Dn.H(AGA);this.Eg.AW(0x3);this.Eg.H(AGB);this.FY.AW(0x3);this.FY.
H(AGC);this.ER.AW(0x3);this.ER.H(AGD);this.ER.M6(0);this.Fb.Filter=6;this.E0.Filter=
7;this.MX=A.jb.CE;this.J(this.Cn,0);this.J(this.CQ,0);this.J(this.Dn,0);this.J(this.
Eg,0);this.J(this.FY,0);this.J(this.ER,0);this.A8(this.ER);this.Cn.Dj=[this,this.
AcV];this.CQ.Dj=[this,this.AcV];this.Dn.Dj=[this,this.AcV];this.Eg.Dj=[this,this.
AcV];this.FY.Dj=[this,this.AcV];this.ER.Dj=[this,this.AcV];this.Fb.BK=[this,this.
N_];this.E0.BK=[this,this.MN];},_Done:function(){this.__proto__=A.Core.O;this.Cn.
_Done();this.CQ._Done();this.Dn._Done();this.Eg._Done();this.FY._Done();this.ER.
_Done();this.Fb._Done();this.E0._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Cn._ReInit();this.CQ._ReInit();this.Dn._ReInit(
);this.Eg._ReInit();this.FY._ReInit();this.ER._ReInit();this.Fb._ReInit();this.E0.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Dj)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ER)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.Bfd="87dddbf5";C.Bzx={Undefined:0,BAz:1,BzO:2};C.Akd={
S6:null,Aim:null,K4:null,AMa:null,AnD:null,push:function(My){if(!this.S6){My.Ag0=
null;My.Mk=null;this.S6=My;this.Aim=this.S6;}else{My.Ag0=this.Aim;My.Mk=null;this.
Aim.Mk=My;this.Aim=My;}},ByG:function(My){var P3=this.S6;while(!!P3){if(P3.JA.Id===
My.Id)return P3;P3=P3.Mk;}return P3;},Byn:function(My){if(My===this.S6)this.pop(
);else if(My===this.Aim){My=My.Ag0;if(!!My)My.Mk=null;this.Aim=My;}else{My.Ag0.Mk=
My.Mk;My.Mk.Ag0=My.Ag0;}},AgQ:function(E){var F;if(this.K4===E)return;this.K4=E;
if(!!this.K4)this.K4.Af_(2);(F=this.AMa,F[2].call(F[0],this.K4));},UU:function(G
){var P3=(C.ASi.isPrototypeOf(G)?G:null);if(!!P3){if(!P3.JA.PopupState){if(!this.
K4)this.AgQ(this.top());}else if(P3.JA.PopupState===4){this.pop();this.AgQ(this.
top());}else if(P3.JA.PopupState===5){this.pop();this.AgQ(this.top());}else if(P3.
JA.PopupState===7){this.pop();this.AgQ(this.top());}else if(P3.JA.PopupState===8
){this.pop();this.AgQ(this.top());}else if(P3.JA.PopupState===6){if(P3===this.K4
){this.pop();this.AgQ(this.top());}else this.Byn(P3);}else if(P3.JA.PopupState===
3){this.pop();this.AgQ(this.top());}}},pop:function(){var AJy=null;if(!!this.S6){
AJy=this.S6;if(this.S6===this.Aim){this.S6=null;this.Aim=null;}else{this.S6=this.
S6.Mk;if(!this.S6)throw new Error(AVq);this.S6.Ag0=null;}AJy.Ag0=null;AJy.Mk=null;
}return AJy;},top:function(){return this.S6;},Bx7:function(G){var B;var Ath=(A.Device.
PopupContext.isPrototypeOf(B=this.AnD.JA)?B:null);if(!!Ath){var A2f=this.ByG(Ath
);if(!!A2f){A2f.A7R(Ath);if(!Ath.Show)A2f.Af_(6);}else if(Ath.Show){var AJb=A._NewObject(
C.ASi,0);AJb.A7R(Ath);AJb.ARm=[this,this.UU];this.push(AJb);AJb.Af_(0);}}},_Init:
function(aArg){A.Core.A9A._Init.call(this.AnD={I:this},0);this.__proto__=C.Akd;this.
AnD.AQN=[this,this.Bx7];this.AnD.BjL(A._GetAutoObject(A.Device.Device).Ani);A.h7++;
},_Done:function(){this.__proto__=null;this.AnD._Done();A.h7--;},_ReInit:function(
){this.AnD._ReInit();},_Mark:function(D){var B;if((B=this.S6)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aim)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K4)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AMa)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AnD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ASi={SK:null,Mk:null,Ag0:null,JA:null,ARm:null,PopupIdToString:null,AhM:function(
BtV,Bus,BuN,BuD,BuF,BuC,Bub){var UV=A._NewObject(C.ASh,0);UV.BkQ(this.JA.Id);UV.
A8y(BtV);UV.ARn=BuC;UV.A8z(this.JA.Akw);UV.A8l(this.JA.Akc);UV.Bw=A._NewObject(C.
N,0);UV.KG().Cb=BuF;UV.KG().Cg=null;UV.KG().Cw=BuD;UV.KG().BU(BuN);UV.KG().Cm(null
);UV.KG().Hm(Bus);UV.KG().AD4(Bub);return UV;},AjV:function(){if(!this.SK){var Aik=
this.PopupIdToString.BX(this.JA.Id);switch(this.JA.Id){case 46:this.SK=this.AhM(
Aik,A.jV,A.aaR(A.acf.Ok),null,[this,this.AJg],[this,this.Aie],1);break;case 92:case
93:this.SK=this.AhM(Aik,A.jV,A.jV,null,null,[this,this.Aie],0);break;case 39:this.
SK=this.AhM(Aik,A.aaR(A.acf.Al7),A.aaR(A.acf.Ok),[this,this.A1h],[this,this.A1i]
,[this,this.Aie],3);break;case 13:this.SK=this.AhM(Aik,A.aaR(A.acf.Al7),A.aaR(A.
acf.BlK),[this,this.A1g],[this,this.AJg],[this,this.Aie],3);break;case 25:this.SK=
this.AhM(Aik,A.aaR(A.acf.Al7),A.aaR(A.acf.Ok),[this,this.A1g],[this,this.AJg],[this
,this.Aie],3);break;case 16:case 24:case 49:case 74:this.SK=this.AhM(Aik,A.aaR(A.
acf.Al7),A.jV,[this,this.A1g],null,[this,this.Aie],1);break;case 4:case 91:case 7:
case 33:case 44:case 37:case 38:case 63:case 96:this.SK=this.AhM(Aik,A.aaR(A.acf.
No),A.aaR(A.acf.Yes),[this,this.A1h],[this,this.A1i],[this,this.Aie],1);break;case
0:case 1:case 2:case 5:case 27:case 64:case 28:case 30:case 41:case 50:case 51:case
57:case 52:case 53:case 56:case 45:case 77:case 78:case 79:case 3:case 10:case 8:
case 34:case 82:case 83:case 80:case 81:case 76:case 40:case 75:case 11:case 12:
case 36:case 14:case 15:case 35:case 21:case 22:case 43:case 85:case 26:case 23:
case 32:case 69:case 17:case 19:case 54:case 18:case 20:case 55:case 62:case 97:
case 60:case 99:case 65:case 66:case 61:case 105:case 31:case 67:case 86:case 68:
case 70:case 71:case 101:case 98:case 88:case 89:case 84:case 94:case 95:case 87:
case 103:case 102:case 104:this.SK=this.AhM(Aik,A.jV,A.aaR(A.acf.Ok),null,[this,
this.AJg],[this,this.Aie],3);break;case 58:case 9:case 6:case 29:case 42:case 47:
case 48:case 59:case 72:case 100:case 90:case 73:case 106:this.SK=this.AhM(Aik,A.
aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A1h],[this,this.A1i],[this,this.Aie],3
);break;default:A.ab5("%s",(AVr+this.JA.Id.toFixed())+AVs);}}switch(this.JA.Id){
case 16:case 49:this.SK.A8N(true);break;case 92:case 93:this.SK.A8N(false);break;
default:;}return this.SK;},AJg:function(G){this.Af_(4);},A1g:function(G){this.Af_(
5);},A1i:function(G){this.Af_(7);},A1h:function(G){this.Af_(8);},Aie:function(G){
this.Af_(3);},A7R:function(E){if(this.JA===E)return;this.JA=E;if(!!this.SK){this.
AjV().A8z(this.JA.Akw);this.AjV().A8l(this.JA.Akc);}},Af_:function(BuI){var B;this.
JA.BkR(BuI);(B=this.ARm)?B[1].call(B[0],this):null;},BxF:function(G){this.Af_(9);
},_Init:function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={
I:this},0);this.__proto__=C.ASi;A.h7++;},_Done:function(){this.__proto__=null;this.
PopupIdToString._Done();A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit(
);},_Mark:function(D){var B;if((B=this.SK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Mk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag0)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.JA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ARm)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::PopupEntry"};C.FS={BooleanToYesNo:null,Do:function(
){return 2;},C9:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},Gg:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.
BX(aIndex);},DP:function(A1){return A1;},Hj:function(){return 1;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.FS;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.AeK={T6:null,JY:function(G){var F;var BN=this.AK;this.Bx(this.AK+1);if(this.
AK!==BN){if(!!this.T6&&!!this.AC)switch(this.AC.C9(this.AK)){case 0:(F=this.T6,F[
2].call(F[0],false));break;case 1:(F=this.T6,F[2].call(F[0],true));break;default:;
}A.abo(this.T6,0);}},JT:function(G){var F;var BN=this.AK;this.Bx(this.AK-1);if(this.
AK!==BN){if(!!this.T6&&!!this.AC)switch(this.AC.C9(this.AK)){case 0:(F=this.T6,F[
2].call(F[0],false));break;case 1:(F=this.T6,F[2].call(F[0],true));break;default:;
}A.abo(this.T6,0);}},Aj8:function(E){if(A.aaZ(this.T6,E))return;if(!!this.Q)A.z$([
this,this.A1T],this.T6,0);this.T6=E;if(!!E)A.zX([this,this.A1T],E,0);if(!!E)A.pe([
this,this.A1T],this);},A1T:function(G){var F;if(!!this.T6){if((F=this.T6,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.B$._Init.call(this,aArg
);this.__proto__=C.AeK;this.Kj(this.V,-1);},_Mark:function(D){var B;C.B$._Mark.call(
this,D);if((B=this.T6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.ASu={I5:null,OF:null,IG:null,FZ:null,AI:null,AaG:null,Agd:null,Tq:null,RO:null
,Ab8:null,Ws:null,G8:null,AAp:true,Init:function(aArg){var B;A.zX([this,this.Alw
],[B=A._GetAutoObject(A.Device.Device),B.ARd,B.AYB],0);A.pe([this,this.Alw],this
);},Ai:function(Ae){var F;C.AB.Ai.call(this,Ae);if(this.AAp)this.N.C2(A.aaL(A.ach.
APm));else this.N.C2(A.aaL(A.ach.APn));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OF.L(A.jb.Bh);this.RO.Y(false);this.Tq.Y(false);this.IG.Y(true);this.FZ.
Ar(false);(F=this.FZ.Q,F[2].call(F[0],this.FZ.BY));this.Background.L(A.jb.FW);}else
if(this.AaG.Bv){this.OF.L(A.jb.Text);this.RO.Y(true);this.Tq.Y(true);this.IG.Y(false
);this.FZ.Ar(false);(F=this.FZ.Q,F[2].call(F[0],this.FZ.BY));this.Background.L(A.
jb.EU);}else{this.OF.L(A.jb.Text);this.RO.Y(false);this.Tq.Y(false);this.IG.Y(true
);this.FZ.Ar(true);this.Background.L(A.jb.CE);}if(this.Agd.Bv)this.Ws.Y(true);else
this.Ws.Y(false);},CJ:function(G){A._GetAutoObject(A.Device.Device).AeN();},Fd:function(
G){A._GetAutoObject(A.Device.Device).Anu();A._GetAutoObject(A.Device.Device).Aev(
false);A._GetAutoObject(A.Device.Device).T4(false);},Alw:function(G){var B;this.
An();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
Bxk],this);break;case 3:{A.pe([this,this.BcK],this);A.pe([B=this.AaG,B.AwK],this
);A.pe(this.AaG.Mp,this);}break;case 4:A.ab5("%s",AVt);break;default:;}},Ee:function(
G){A._GetAutoObject(C.AY).Fm();},Bx8:function(G){this.Bld(!this.AAp);},Bld:function(
E){if(this.AAp===E)return;this.AAp=E;if(!E)A._GetAutoObject(A.Device.Device).Aev(
false);this.An();},Bxk:function(G){var B;this.BcK(this);if(this.AAp)A._GetAutoObject(
A.Device.Device).Aev(true);A._GetAutoObject(A.Device.Device).V$(65280);A._GetAutoObject(
A.Device.Device).T4(true);A.pe([B=this.AaG,B.StartTimer],this);A.pe([B=this.Agd,
B.StartTimer],this);this.An();},Bxl:function(G){A._GetAutoObject(A.Device.Device
).Aev(false);A._GetAutoObject(A.Device.Device).T4(false);this.An();},Bxn:function(
G){this.An();},BcK:function(G){A._GetAutoObject(A.Device.Device).AeN();},_Init:function(
aArg){C.AB._Init.call(this,aArg);C.I5._Init.call(this.I5={I:this},0);C.CP._Init.
call(this.OF={I:this},0);A.acg.Am._Init.call(this.IG={I:this},0);A.acl.FZ._Init.
call(this.FZ={I:this},0);A.acg.AI._Init.call(this.AI={I:this},0);A.Core.Timer._Init.
call(this.AaG={I:this},0);A.Core.Timer._Init.call(this.Agd={I:this},0);A.acg.Am.
_Init.call(this.Tq={I:this},0);A.acg.Am._Init.call(this.RO={I:this},0);A.acg.Text.
_Init.call(this.Ab8={I:this},0);C.Ws._Init.call(this.Ws={I:this},0);C.CP._Init.call(
this.G8={I:this},0);this.__proto__=C.ASu;var B;this.Background.L(A.jb.CE);this.N.
Y(true);this.I5.H(AVu);this.I5.Aj$(0);this.OF.H(AVv);this.OF.R(A.aaR(A.acf.A9F));
this.OF.L(A.jb.Text);this.IG.H(AVw);this.IG.L(A.jb.AR);this.IG.YU(true);this.FZ.
Ff(1750);this.FZ.T1(750);this.FZ.Aj4(0);this.FZ.Ar(true);this.FZ.BY=3;this.AI.H(
Axn);this.AaG.PC(-1);this.AaG.V8(1000);this.Agd.PC(-1);this.Agd.V8(5000);this.Tq.
H(AGE);this.RO.H(AGE);this.RO.L(A.jb.EU);this.Ab8.H(Axn);this.Ab8.R(A.aaR(A.acf.
A9f));this.Ab8.L(A.jb.Text);this.Ws.H(Axn);this.G8.H(AVx);this.G8.Ar(false);this.
G8.R(A.aaR(A.acf.RangeTest));this.G8.L(A.jb.Text);this.J(this.I5,0);this.J(this.
OF,0);this.J(this.IG,0);this.J(this.AI,0);this.J(this.Tq,0);this.J(this.RO,0);this.
J(this.Ab8,0);this.J(this.Ws,0);this.J(this.G8,0);this.N.Cw=[this,this.Ee];this.
N.Cb=[this,this.Bx8];this.N.CS(A.aaL(A.ach.EV));this.OF.S(A.aaL(A.fl.Ah));this.OF.
A5(A.aaL(A.fl.Ak));this.OF.CC(A.aaL(A.fl.By));this.IG.Ax(A.aaL(A.ach.ACC));this.
FZ.Q=[B=this.IG,B.AQ1,B.Ct];this.AaG.Mp=[this,this.Bxl];this.Agd.Mp=[this,this.Bxn
];this.Tq.Ax(A.aaL(A.ach.Tq));this.RO.Ax(A.aaL(A.ach.RO));this.Ab8.S(A.aaL(A.fl.
Ah));this.Ws.Au([B=A._GetAutoObject(A.Device.Device),B.ARe,B.AYC]);this.G8.S(A.aaL(
A.fl.J8));this.G8.A5(A.aaL(A.fl.Ia));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.I5._Done();this.OF._Done();this.IG._Done();this.FZ._Done();this.AI._Done(
);this.AaG._Done();this.Agd._Done();this.Tq._Done();this.RO._Done();this.Ab8._Done(
);this.Ws._Done();this.G8._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.I5._ReInit();this.OF._ReInit();this.IG._ReInit();this.FZ.
_ReInit();this.AI._ReInit();this.AaG._ReInit();this.Agd._ReInit();this.Tq._ReInit(
);this.RO._ReInit();this.Ab8._ReInit();this.Ws._ReInit();this.G8._ReInit();this.
OF.R(A.aaR(A.acf.A9F));this.Ab8.R(A.aaR(A.acf.A9f));this.G8.R(A.aaR(A.acf.RangeTest
));this.OF.S(A.aaL(A.fl.Ah));this.OF.A5(A.aaL(A.fl.Ak));this.OF.CC(A.aaL(A.fl.By
));this.Ab8.S(A.aaL(A.fl.Ah));this.G8.S(A.aaL(A.fl.J8));this.G8.A5(A.aaL(A.fl.Ia
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.I5)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaG)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Agd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tq)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab8)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Ws)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G8).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.Abj={
ScreenType:0,PD:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},PE:
function(G){A._GetAutoObject(C.AY).B1(this.ScreenType);},_Init:function(aArg){C.
Ci._Init.call(this,aArg);this.__proto__=C.Abj;},_className:"Application::MenuItemScreen"
};C.TR={Adx:null,Md:null,Al8:false,Init:function(aArg){},Ai:function(Ae){C.Ci.Ai.
call(this,Ae);if(this.Al8){this.Md.Ct(1);this.Md.L(A.jb.HZ);}else{this.Md.Ct(0);
if(this.Kv)this.Md.L(A.jb.Bh);else if(this.G_)this.Md.L(A.jb.Text);else this.Md.
L(A.jb.Bh);}},IP:function(G){var F,CL;if(!!this.Adx){(CL=this.Adx,CL[2].call(CL[
0],!(F=this.Adx,F[1].call(F[0]))));this.ADK((F=this.Adx,F[1].call(F[0])));A.pe([
this,this.DD],this);}},A1n:function(G){this.Kv=true;this.DD(this);},ADK:function(
E){if(this.Al8===E)return;this.Al8=E;this.DD(this);this.An();},A1M:function(G){var
F;this.ADK((F=this.Adx,F[1].call(F[0])));},AYU:function(s){this.A1M(s);},DD:function(
G){var F;if(!this.N||!this.Kv)return;if(this.Al8){(F=this.N,F[1].call(F[0])).BU(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).Ii.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).BU(A.aaR(A.acf.A6s));(F=this.N,F[1].call(F[0])).Ii.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).An();},ARs:function(E){if(A.aaZ(this.Adx,E))
return;if(!!this.Adx)A.z$([this,this.AYU],this.Adx,0);this.Adx=E;if(!!E)A.zX([this
,this.AYU],E,0);if(!!E)A.pe([this,this.AYU],this);},_Init:function(aArg){C.Ci._Init.
call(this,aArg);A.acg.Am._Init.call(this.Md={I:this},0);this.__proto__=C.TR;this.
V.L(A.jb.HZ);this.Md.H(AGF);this.Md.Ct(0);this.J(this.Md,0);this.Md.Ax(A.aaL(A.ach.
Ap7));this.Init(aArg);},_Done:function(){this.__proto__=C.Ci;this.Md._Done();C.Ci.
_Done.call(this);},_ReInit:function(){C.Ci._ReInit.call(this);this.Md._ReInit();
},_Mark:function(D){var B;C.Ci._Mark.call(this,D);if((B=this.Adx)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Md)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.AMg={HW:null,IB:null,_Init:function(aArg){C.Cu.
_Init.call(this,aArg);C.Sr._Init.call(this.HW={I:this},0);C.AFp._Init.call(this.
IB={I:this},0);this.__proto__=C.AMg;var B;this.JH(A.aaR(A.acf.ABn));this.HW.H(Ahq
);this.HW.Aj(true);this.HW.U(A.aaR(A.acf.Date));this.HW.Bf(true);this.IB.H(WK);this.
IB.Aj(true);this.IB.U(A.aaR(A.acf.Bt));this.J(this.HW,0);this.J(this.IB,0);this.
HW.AgO([B=this.HW,B.FH]);this.HW.Gj([this,this.D9,this.GQ]);this.HW.Aj3(A.aaL(A.
ach.Edit));this.HW.AbC([B=A._GetAutoObject(A.Device.Helper),B.UA,B.UB]);this.IB.
AgO([B=this.IB,B.FH]);this.IB.Gj([this,this.D9,this.GQ]);this.IB.Aj3(A.aaL(A.ach.
Edit));this.IB.AbC([B=A._GetAutoObject(A.Device.Helper),B.UA,B.UB]);},_Done:function(
){this.__proto__=C.Cu;this.HW._Done();this.IB._Done();C.Cu._Done.call(this);},_ReInit:
function(){C.Cu._ReInit.call(this);this.HW._ReInit();this.IB._ReInit();this.JH(A.
aaR(A.acf.ABn));this.HW.U(A.aaR(A.acf.Date));this.IB.U(A.aaR(A.acf.Bt));},_Mark:
function(D){var B;C.Cu._Mark.call(this,D);if((B=this.HW)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.ATq={QY:null,G6:null,B4:null,Ot:null,Yf:null,Aap:null,_Init:function(aArg){C.
Cu._Init.call(this,aArg);C.QY._Init.call(this.QY={I:this},0);C.ALc._Init.call(this.
G6={I:this},0);C.AS1._Init.call(this.B4={I:this},0);C.AS3._Init.call(this.Ot={I:
this},0);C.AeK._Init.call(this.Yf={I:this},0);C.Aap._Init.call(this.Aap={I:this}
,0);this.__proto__=C.ATq;var B;this.JH(A.aaR(A.acf.Temperature));this.G6.Au(A._GetAutoObject(
A.Device.Device).AnimalType);this.B4.H(AVy);this.B4.Aj(true);this.B4.U(A.aaR(A.acf.
AqE));this.B4.Bf(false);this.Ot.H(ZF);this.Ot.Aj(true);this.Ot.U(A.aaR(A.acf.Undertemperature
));this.Ot.Bf(true);this.Ot.Bx(3800);this.Ot.Gk(3000);this.Ot.E1(5000);this.Ot.A8G(
A.aaR(A.acf.AFC));this.Yf.H(AVz);this.Yf.Aj(true);this.Yf.Y(true);this.Yf.U(A.aaR(
A.acf.A3e));this.J(this.B4,0);this.J(this.Ot,0);this.J(this.Yf,0);this.B4.AgO([B=
this.B4,B.FH]);this.B4.Gj([this,this.D9,this.GQ]);this.B4.Aj3(A.aaL(A.ach.Edit));
this.B4.LS([B=this.B4,B.AxS]);this.B4.LU(A.aaL(A.ach.Anl));this.B4.Au([B=this.G6
,B.B_,B.Ca]);this.B4.CK(this.G6);this.B4.A8j([B=this.G6,B.ARl,B.AYI]);this.B4.A8i([
B=this.G6,B.ARk,B.AYH]);this.Ot.LS([B=this.B4,B.AxS]);this.Ot.LU(A.aaL(A.ach.Anl
));this.Ot.Au([B=A._GetAutoObject(A.Device.Device),B.A7n,B.A$f]);this.Yf.CK(this.
Aap);this.Yf.Aj8([B=A._GetAutoObject(A.Device.Device),B.A6S,B.A_3]);},_Done:function(
){this.__proto__=C.Cu;this.QY._Done();this.G6._Done();this.B4._Done();this.Ot._Done(
);this.Yf._Done();this.Aap._Done();C.Cu._Done.call(this);},_ReInit:function(){C.
Cu._ReInit.call(this);this.QY._ReInit();this.G6._ReInit();this.B4._ReInit();this.
Ot._ReInit();this.Yf._ReInit();this.Aap._ReInit();this.JH(A.aaR(A.acf.Temperature
));this.B4.U(A.aaR(A.acf.AqE));this.Ot.U(A.aaR(A.acf.Undertemperature));this.Ot.
A8G(A.aaR(A.acf.AFC));this.Yf.U(A.aaR(A.acf.A3e));},_Mark:function(D){var B;C.Cu.
_Mark.call(this,D);if((B=this.QY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ot)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aap)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AMr={Pr:null,Ps:null,R9:null,VC:null,R$:null,R_:null,FS:null,AbX:null,Init:function(
aArg){A.zX([this,this.Bms],this.Ps.Q,0);},Bms:function(G){var F;A._GetAutoObject(
A.Device.Device).Awa((F=this.Ps.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cu.
_Init.call(this,aArg);C.I1._Init.call(this.Pr={I:this},0);C.B$._Init.call(this.Ps={
I:this},0);C.AeK._Init.call(this.R9={I:this},0);C.I1._Init.call(this.VC={I:this}
,0);C.AeK._Init.call(this.R$={I:this},0);C.AeK._Init.call(this.R_={I:this},0);C.
FS._Init.call(this.FS={I:this},0);C.AbX._Init.call(this.AbX={I:this},0);this.__proto__=
C.AMr;var B;this.N.H(WI);this.JH(A.aaR(A.acf.Device));this.Pr.H(Ahq);this.Pr.Aj(
true);this.Pr.U(A.aaR(A.acf.A9q));this.Pr.Bf(false);this.Pr.Gk(2);this.Pr.E1(60);
this.Pr.Kf(A.aaR(A.acf.AFS));this.Pr.KH(A.aaR(A.acf.AFS));this.Ps.H(AVA);this.Ps.
Aj(true);this.Ps.U(A.aaR(A.acf.A9x));this.Ps.Bf(true);this.Ps.Bx(0);this.Ps.Gk(-
1);this.Ps.E1(1);this.R9.H(ZF);this.R9.Aj(true);this.R9.U(A.aaR(A.acf.Hv));this.
R9.Bf(false);this.R9.Bx(0);this.R9.Gk(-1);this.R9.E1(1);this.VC.H(AnR);this.VC.Aj(
true);this.VC.U(A.aaR(A.acf.A3N));this.VC.Bf(true);this.VC.Kf(Ae9);this.VC.KH(Ae9
);this.R$.H(AkK);this.R$.Aj(true);this.R$.U(A.aaR(A.acf.Ar6));this.R$.Bf(false);
this.R$.Bx(1);this.R$.Gk(-1);this.R$.E1(1);this.R_.H(AGG);this.R_.Aj(true);this.
R_.U(A.aaR(A.acf.ArK));this.R_.Bf(true);this.R_.Bx(0);this.R_.Gk(-1);this.R_.E1(
1);this.AbX.Au(A._GetAutoObject(A.Device.Device).AwJ);this.J(this.Pr,0);this.J(this.
Ps,0);this.J(this.R9,0);this.J(this.VC,0);this.J(this.R$,0);this.J(this.R_,0);this.
Pr.Au([B=A._GetAutoObject(A.Device.Device),B.A7f,B.A$b]);this.Ps.Au([B=this.AbX,
B.B_,B.Ca]);this.Ps.CK(this.AbX);this.R9.CK(this.FS);this.R9.Aj8([B=A._GetAutoObject(
A.Device.Device),B.ADn,B.AHv]);this.VC.Au([B=A._GetAutoObject(A.Device.Device),B.
A6P,B.A_0]);this.R$.CK(this.FS);this.R$.Aj8([B=A._GetAutoObject(A.Device.Device)
,B.A7o,B.A$g]);this.R_.CK(this.FS);this.R_.Aj8([B=A._GetAutoObject(A.Device.Device
),B.AQ5,B.AYu]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cu;this.Pr._Done(
);this.Ps._Done();this.R9._Done();this.VC._Done();this.R$._Done();this.R_._Done(
);this.FS._Done();this.AbX._Done();C.Cu._Done.call(this);},_ReInit:function(){C.
Cu._ReInit.call(this);this.Pr._ReInit();this.Ps._ReInit();this.R9._ReInit();this.
VC._ReInit();this.R$._ReInit();this.R_._ReInit();this.FS._ReInit();this.AbX._ReInit(
);this.JH(A.aaR(A.acf.Device));this.Pr.U(A.aaR(A.acf.A9q));this.Pr.Kf(A.aaR(A.acf.
AFS));this.Pr.KH(A.aaR(A.acf.AFS));this.Ps.U(A.aaR(A.acf.A9x));this.R9.U(A.aaR(A.
acf.Hv));this.VC.U(A.aaR(A.acf.A3N));this.R$.U(A.aaR(A.acf.Ar6));this.R_.U(A.aaR(
A.acf.ArK));},_Mark:function(D){var B;C.Cu._Mark.call(this,D);if((B=this.Pr)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ps)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbX)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.ASG={VF:null,VE:
null,Qw:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.BfS
],this.Qw.Q,0);},BfS:function(G){var F;A._GetAutoObject(A.Device.Device).AjZ((F=
this.Qw.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cu._Init.call(this,aArg);C.
Py._Init.call(this.VF={I:this},0);C.Py._Init.call(this.VE={I:this},0);C.ASY._Init.
call(this.Qw={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.ASG;var B;this.JH(A.aaR(A.acf.ArB));this.VF.H(KP);this.
VF.Aj(true);this.VF.U(A.aaR(A.acf.Ai$));this.VF.Bf(false);this.VF.PD(99);this.VE.
H(AVB);this.VE.Aj(true);this.VE.U(A.aaR(A.acf.ApI));this.VE.Bf(true);this.VE.PD(
100);this.Qw.H(WK);this.Qw.Aj(true);this.Qw.U(A.aaR(A.acf.A3j));this.Qw.Bf(false
);this.Qw.Gk(-1);this.Qw.E1(1);this.EartagNrAssignmentMode.Au(A._GetAutoObject(A.
Device.Device).EartagNrAssignmentMode);this.J(this.VF,0);this.J(this.VE,0);this.
J(this.Qw,0);this.VF.AQ=[B=this.VF,B.PE];this.VE.AQ=[B=this.VE,B.PE];this.Qw.Au([
B=this.EartagNrAssignmentMode,B.B_,B.Ca]);this.Qw.CK(this.EartagNrAssignmentMode
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cu;this.VF._Done();this.VE.
_Done();this.Qw._Done();this.EartagNrAssignmentMode._Done();C.Cu._Done.call(this
);},_ReInit:function(){C.Cu._ReInit.call(this);this.VF._ReInit();this.VE._ReInit(
);this.Qw._ReInit();this.EartagNrAssignmentMode._ReInit();this.JH(A.aaR(A.acf.ArB
));this.VF.U(A.aaR(A.acf.Ai$));this.VE.U(A.aaR(A.acf.ApI));this.Qw.U(A.aaR(A.acf.
A3j));},_Mark:function(D){var B;C.Cu._Mark.call(this,D);if((B=this.VF)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.VE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::RegistrationSettingsScreen"};C.Ws={Q:null
,TransponderProtocolToString:null,AoN:null,Background:null,Z:null,R3:null,GB:null
,Pw:null,Ov:null,Pb:null,C4:null,Gl:null,Sm:null,NQ:null,CountryToString:null,Au:
function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.OX],this.Q,0);
this.Q=E;if(!!E)A.zX([this,this.OX],E,0);if(!!E)A.pe([this,this.OX],this);},OX:function(
G){var B;var F;if(!!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.GB.R((F=this.
Q,F[1].call(F[0])).Id.toFixed());var BL=(F=this.Q,F[1].call(F[0])).Bgo();if(BL<900
){var JS=A._GetAutoObject(A.Device.Converter).AL$(BL);if(!!JS)this.C4.R(((this.CountryToString.
Lm(JS)+Acg)+BL.toFixed())+OQ);else this.C4.R(BL.toFixed());if(JS===10){var AIV=this.
A5i((F=this.Q,F[1].call(F[0])).Id);this.C4.R(this.C4.String+((((AVC+this.AoN.Bnb(
AIV))+Acg)+A.abl(this.AoN.Bna(AIV),2,10))+OQ));}this.C4.Y(true);this.Pb.Y(true);
this.Ov.Y(false);this.Pw.Y(false);}else{this.Ov.R(((A._GetAutoObject(A.Device.Converter
).Bfg(BL)+Acg)+BL.toFixed())+OQ);this.Ov.Y(true);this.Pw.Y(true);this.C4.Y(false
);this.Pb.Y(false);}if(BL===276){this.Gl.R(this.AoN.BX(this.A5i((F=this.Q,F[1].call(
F[0])).Id)));this.Gl.Y(true);}else this.Gl.Y(false);this.NQ.R(this.TransponderProtocolToString.
BX((F=this.Q,F[1].call(F[0])).TransponderProtocol));}else{this.GB.R(A.jV);this.Ov.
R(A.jV);this.Gl.R(A.jV);this.C4.R(A.jV);this.NQ.R(A.jV);}},A5i:function(Kr){var Qf=
0;var JS=A._GetAutoObject(A.Device.Converter).Ab7(Kr);switch(JS){case 10:{var FV=
A._GetAutoObject(A.Device.Helper).Tu(Kr,8,2)|0;Qf=A._GetAutoObject(A.Device.Converter
).ABO(FV);}break;default:;}return Qf;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.AoN={I:this},0);A.acg.AI.
_Init.call(this.Background={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.
CP._Init.call(this.R3={I:this},0);C.CP._Init.call(this.GB={I:this},0);C.CP._Init.
call(this.Pw={I:this},0);C.CP._Init.call(this.Ov={I:this},0);C.CP._Init.call(this.
Pb={I:this},0);C.CP._Init.call(this.C4={I:this},0);C.CP._Init.call(this.Gl={I:this
},0);C.CP._Init.call(this.Sm={I:this},0);C.CP._Init.call(this.NQ={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.Ws;
this.H(Ae7);this.Background.AW(0x3F);this.Background.H(Ae7);this.Background.L(A.
jb.C0);this.Z.AW(0x3F);this.Z.H(Ae7);this.Z.Kb(9);this.R3.H(AVD);this.R3.Aj(true
);this.R3.R(A.aaR(A.acf.GB)+A.aaR(A.acf.Colon));this.R3.A2(0x11);this.R3.L(A.jb.
Text);this.GB.H(AVE);this.GB.Aj(true);this.GB.R(AVF);this.GB.A2(0x14);this.GB.L(
A.jb.Text);this.Pw.H(Asl);this.Pw.Aj(true);this.Pw.R(A.aaR(A.acf.A8W)+A.aaR(A.acf.
Colon));this.Pw.A2(0x11);this.Pw.L(A.jb.Text);this.Ov.H(Asm);this.Ov.Aj(true);this.
Ov.R(AVG);this.Ov.A2(0x14);this.Ov.L(A.jb.Text);this.Pb.H(Asl);this.Pb.Aj(true);
this.Pb.R(A.aaR(A.acf.C4)+A.aaR(A.acf.Colon));this.Pb.A2(0x11);this.Pb.L(A.jb.Text
);this.C4.H(Asm);this.C4.Aj(true);this.C4.R(AVH);this.C4.A2(0x14);this.C4.L(A.jb.
Text);this.Gl.H(AGH);this.Gl.Aj(true);this.Gl.R(AGI);this.Gl.A2(0x14);this.Gl.L(
A.jb.Text);this.Sm.H(AVI);this.Sm.Aj(true);this.Sm.R(A.aaR(A.acf.NQ)+A.aaR(A.acf.
Colon));this.Sm.A2(0x11);this.Sm.L(A.jb.Text);this.NQ.H(AGJ);this.NQ.Aj(true);this.
NQ.R(AVJ);this.NQ.A2(0x14);this.NQ.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Z,0);this.J(this.R3,0);this.J(this.GB,0);this.J(this.Pw,0);this.J(this.Ov,0
);this.J(this.Pb,0);this.J(this.C4,0);this.J(this.Gl,0);this.J(this.Sm,0);this.J(
this.NQ,0);this.R3.S(A.aaL(A.fl.Ak));this.R3.A5(A.aaL(A.fl.By));this.GB.S(A.aaL(
A.fl.Ak));this.GB.A5(A.aaL(A.fl.By));this.Pw.S(A.aaL(A.fl.Ak));this.Pw.A5(A.aaL(
A.fl.By));this.Ov.S(A.aaL(A.fl.Ak));this.Ov.A5(A.aaL(A.fl.By));this.Pb.S(A.aaL(A.
fl.Ak));this.Pb.A5(A.aaL(A.fl.By));this.C4.S(A.aaL(A.fl.Ak));this.C4.A5(A.aaL(A.
fl.By));this.Gl.S(A.aaL(A.fl.Ak));this.Gl.A5(A.aaL(A.fl.By));this.Sm.S(A.aaL(A.fl.
Ak));this.Sm.A5(A.aaL(A.fl.By));this.NQ.S(A.aaL(A.fl.Ak));this.NQ.A5(A.aaL(A.fl.
By));},_Done:function(){this.__proto__=A.Core.O;this.TransponderProtocolToString.
_Done();this.AoN._Done();this.Background._Done();this.Z._Done();this.R3._Done();
this.GB._Done();this.Pw._Done();this.Ov._Done();this.Pb._Done();this.C4._Done();
this.Gl._Done();this.Sm._Done();this.NQ._Done();this.CountryToString._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.AoN._ReInit();this.Background._ReInit();this.Z._ReInit();this.R3.
_ReInit();this.GB._ReInit();this.Pw._ReInit();this.Ov._ReInit();this.Pb._ReInit(
);this.C4._ReInit();this.Gl._ReInit();this.Sm._ReInit();this.NQ._ReInit();this.CountryToString.
_ReInit();this.R3.R(A.aaR(A.acf.GB)+A.aaR(A.acf.Colon));this.Pw.R(A.aaR(A.acf.A8W
)+A.aaR(A.acf.Colon));this.Pb.R(A.aaR(A.acf.C4)+A.aaR(A.acf.Colon));this.Sm.R(A.
aaR(A.acf.NQ)+A.aaR(A.acf.Colon));this.R3.S(A.aaL(A.fl.Ak));this.R3.A5(A.aaL(A.fl.
By));this.GB.S(A.aaL(A.fl.Ak));this.GB.A5(A.aaL(A.fl.By));this.Pw.S(A.aaL(A.fl.Ak
));this.Pw.A5(A.aaL(A.fl.By));this.Ov.S(A.aaL(A.fl.Ak));this.Ov.A5(A.aaL(A.fl.By
));this.Pb.S(A.aaL(A.fl.Ak));this.Pb.A5(A.aaL(A.fl.By));this.C4.S(A.aaL(A.fl.Ak)
);this.C4.A5(A.aaL(A.fl.By));this.Gl.S(A.aaL(A.fl.Ak));this.Gl.A5(A.aaL(A.fl.By)
);this.Sm.S(A.aaL(A.fl.Ak));this.Sm.A5(A.aaL(A.fl.By));this.NQ.S(A.aaL(A.fl.Ak));
this.NQ.A5(A.aaL(A.fl.By));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AoN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.R3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ov
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.QD={DZ:null,A89:A.jV,Ai:function(Ae){C.Fc.Ai.call(
this,Ae);if(this.Mh.Fe())this.DZ.C1(A.jb.AR);else this.DZ.C1(this.Background.AP);
this.DZ.Aj2(this.GU.AP);},YY:function(E){if(this.A89===E)return;this.A89=E;this.
DZ.Text.R(E);this.DZ.Y(E!==A.jV);},_Init:function(aArg){C.Fc._Init.call(this,aArg
);C.DZ._Init.call(this.DZ={I:this},0);this.__proto__=C.QD;this.Background.H(AVK);
this.Mh.H(Uw);this.Oo.H(AGK);this.QJ.H(AGK);this.DZ.H(AVL);this.DZ.Y(false);this.
J(this.DZ,0);this.GU.S(A.aaL(A.fl.Ah));this.GU.A5(A.aaL(A.fl.Ak));this.GU.CC(A.aaL(
A.fl.By));},_Done:function(){this.__proto__=C.Fc;this.DZ._Done();C.Fc._Done.call(
this);},_ReInit:function(){C.Fc._ReInit.call(this);this.DZ._ReInit();this.GU.S(A.
aaL(A.fl.Ah));this.GU.A5(A.aaL(A.fl.Ak));this.GU.CC(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.Fc._Mark.call(this,D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.DZ={B3:null,Ad2:null,Am:null,Text:null
,DE:A.jV,Ami:0,MR:0,I0:0,A3Q:0x14,Init:function(aArg){},U:function(E){if(this.DE===
E)return;this.DE=E;this.Text.R(E);},Bzc:function(G){this.Am.H(this.Text.M);this.
Ad2.H(this.Text.M);},Aj2:function(E){if(this.Ami===E)return;this.Ami=E;this.Ad2.
L(E);this.Text.L(E);},C1:function(E){if(this.MR===E)return;this.MR=E;this.Am.L(E
);},S:function(E){if(this.B3===E)return;this.B3=E;this.Text.S(E);},HG:function(E
){if(this.I0===E)return;this.I0=E;this.Text.HG(E);},Bjg:function(E){if(this.A3Q===
E)return;this.A3Q=E;this.Text.A2(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.NF._Init.call(this.Ad2={I:this},0);A.acg.NF._Init.call(this.Am={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.DZ;this.H(AGL);
this.Ad2.AW(0x8);this.Ad2.L(A.jb.Text);this.Am.AW(0x8);this.Am.L(A.jb.C0);this.Text.
AW(0xD);this.Text.H(AGL);this.Text.HG(5);this.Text.IZ(true);this.Text.A2(0x14);this.
Text.L(A.jb.Text);this.J(this.Ad2,0);this.J(this.Am,0);this.J(this.Text,0);this.
Ad2.Ax(A.aaL(A.ach.AOt));this.Am.Ax(A.aaL(A.ach.AOs));this.Text.QN([this,this.Bzc
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Ad2._Done();this.Am._Done();this.Text._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Ad2._ReInit();this.Am.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.TN={DO:null,Z:null,Av:null,Du:function(G){var B;C.AB.Du.call(this,G);if(!!this.
AR&&((this.AR.T&0x400)===0x400))this.Z.Hx(this.AR,true,null,null);},CJ:function(
G){C.AB.CJ.call(this,G);this.AJ0(this);A._GetAutoObject(A.Device.Device).Aq.Bm(null
);A._GetAutoObject(A.Device.Device).Bq.Bm(null);A._GetAutoObject(A.Device.Helper
).Aki();A._GetAutoObject(A.Device.Helper).ArH();},H9:function(G){},Acm:function(
s){this.H9(s);},A1D:function(G){A._GetAutoObject(C.AY).Fm();},E9:function(G){var
B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.
Mn(-this.Z.Bp[1]);},AJ0:function(G){},BDa:function(s){this.AJ0(s);},G4:function(
G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.
acg.AI._Init.call(this.DO={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Av.
_Init.call(this.Av={I:this},0);this.__proto__=C.TN;this.Background.L(A.jb.C0);this.
N.Y(true);this.N.BU(A.jV);this.Dr(C.Aqf);this.DO.AW(0x3F);this.DO.H(E4);this.DO.
L(A.jb.CE);this.Z.H(E4);this.Z.Kb(9);this.Av.H(II);this.J(this.DO,0);this.J(this.
Z,0);this.J(this.Av,0);this.N.Cw=[this,this.A1D];this.N.CS(A.aaL(A.ach.EV));this.
Z.Ei=[this,this.G4];},_Done:function(){this.__proto__=C.AB;this.DO._Done();this.
Z._Done();this.Av._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.
call(this);this.DO._ReInit();this.Z._ReInit();this.Av._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.DO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ListsScreen"};C.ATY={V7:function(G){this.AfV();this.
Ey(A.aaR(A.acf.ATy),[this,this.AR5],7);this.Ey(A.aaR(A.acf.ArC),[this,this.Bjj],
6);this.Ey(A.aaR(A.acf.Arx),[this,this.Ard],3);this.Ey(A.aaR(A.acf.Ahc),[this,this.
Aj7],2);this.Ey(A.aaR(A.acf.Adj),[this,this.AqY],1);this.Ey(A.aaR(A.acf.AiK),[this
,this.Am2],0);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.
Adf)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},Du:function(G
){},AaQ:function(){return C.ALN;},AaR:function(){return C.AOb;},QS:function(G){var
Bc=A._GetAutoObject(A.Device.Helper).MZ();var AAr=A._NewObject(A.Device.BoolFilterCriterion
,0);AAr.Initialize(12,0,true,true);Bc.CZ(AAr);A._GetAutoObject(A.Device.Device).
Aq.Bm(Bc);},HI:function(G){C.EP.HI.call(this,G);if(this.AjM()===false){this.N.Cm(
A.aaL(A.ach.ArC));this.N.Cg=[this,this.A4r];this.N.FA(A.jV);}this.N.Oz(false);this.
N.OA(false);},AfH:function(){A._GetAutoObject(C.AY).B1(42);},AfG:function(){A._GetAutoObject(
C.AY).B1(45);},_Init:function(aArg){C.EP._Init.call(this,aArg);this.__proto__=C.
ATY;var B;this.Dr(C.AN8);this.Dq(A.aaR(A.acf.A6d));this.Aj6([B=A._GetAutoObject(
A.Device.Device),B.A7s,B.A$h]);},_ReInit:function(){C.EP._ReInit.call(this);this.
Dq(A.aaR(A.acf.A6d));},_className:"Application::WatchListScreen"};C.AKT={Du:function(
G){var B;var Jq=(A.Core.BJ.isPrototypeOf(G)?G:null);if(((Jq.CI===4)||(Jq.CI===5)
)===false){C.Aw1.Du.call(this,G);return;}if(A._GetAutoObject(A.Device.Device).MeasureState
!==1)return;var BaE=A._GetAutoObject(A.Device.Device).KN;var SY;if(Jq.CI===5)SY=
5;else SY=4;var Az_=A._GetAutoObject(A.acj.DM).Bbb(BaE,SY);var GH=(((BaE+((Az_/2
)|0))/Az_)|0)*Az_;if(Jq.CI===4)GH+=Az_;else if(Jq.CI===5)GH-=Az_;if(GH>999900)GH=
999900;if(GH<100)GH=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(GH);
},ArV:function(G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.
pe([B=this.OL,B.Cw],this);else A._GetAutoObject(C.AY).Fm();},Wj:function(G){if(A.
_GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device
).ArX();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(this.A9o()===
false){this.HY.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).KN);this.HY.Cp(
A._GetAutoObject(A.Device.Device).Bq);A._GetAutoObject(C.AY).Fm();}}else if(A._GetAutoObject(
A.Device.Device).MeasureState===3){this.HY.OnSetBodyWeight(A._GetAutoObject(A.Device.
Device).KN);this.HY.Cp(A._GetAutoObject(A.Device.Device).Bq);A._GetAutoObject(C.
AY).Fm();}},Akp:function(G){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===
3)A.pe([B=this.OL,B.Cb],this);},Bba:function(){var AKa=A._GetAutoObject(A.Device.
Helper).W.Ahj(1);if(AKa>=100000)AKa=(Math.round(AKa/1000)|0)*1000;return AKa;},_Init:
function(aArg){C.Aw1._Init.call(this,aArg);this.__proto__=C.AKT;},_className:"Application::AnimalActionWeighingScreen"
};C.ATJ={VJ:null,Yh:null,QY:null,Aeb:null,_Init:function(aArg){C.Cu._Init.call(this
,aArg);C.B$._Init.call(this.VJ={I:this},0);C.B$._Init.call(this.Yh={I:this},0);C.
QY._Init.call(this.QY={I:this},0);C.Aeb._Init.call(this.Aeb={I:this},0);this.__proto__=
C.ATJ;var B;this.JH(A.aaR(A.acf.AFT));this.VJ.H(Ahq);this.VJ.Aj(true);this.VJ.U(
A.aaR(A.acf.A9M));this.VJ.Bf(true);this.VJ.Bx(0);this.Yh.H(WK);this.Yh.Aj(true);
this.Yh.U(A.aaR(A.acf.A9L));this.Yh.Bf(false);this.J(this.VJ,0);this.J(this.Yh,0
);this.VJ.Au([B=this.QY,B.B_,B.Ca]);this.VJ.CK(this.QY);this.Yh.Au([B=this.Aeb,B.
B_,B.Ca]);this.Yh.CK(this.Aeb);},_Done:function(){this.__proto__=C.Cu;this.VJ._Done(
);this.Yh._Done();this.QY._Done();this.Aeb._Done();C.Cu._Done.call(this);},_ReInit:
function(){C.Cu._ReInit.call(this);this.VJ._ReInit();this.Yh._ReInit();this.QY._ReInit(
);this.Aeb._ReInit();this.JH(A.aaR(A.acf.AFT));this.VJ.U(A.aaR(A.acf.A9M));this.
Yh.U(A.aaR(A.acf.A9L));},_Mark:function(D){var B;C.Cu._Mark.call(this,D);if((B=this.
VJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aeb)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::UnitsSettingsScreen"};C.Aeb={MassUnitToString:null
,Do:function(){return 2;},C9:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
MassUnitToString.BX(aIndex);},DP:function(A1){return A1;},Hj:function(){return 1;
},Au:function(E){C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Av0(E);}
,Init:function(aArg){var B;A.zX([this,this.BbN],[B=A._GetAutoObject(A.Device.Device
),B.AQ4,B.AYt],0);A.pe([this,this.BbN],this);},BbN:function(G){this.Q=A._GetAutoObject(
A.Device.Device).MassUnit;A.abo([this,this.B_,this.Ca],0);},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.MassUnitToString={
I:this},0);this.__proto__=C.Aeb;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.
AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MassUnits"};C.Aw1={HY:null,AiZ:null,MassUnit:null,
KN:null,U8:null,Anh:null,Ab_:null,Zn:null,OL:null,X9:null,Init:function(aArg){var
B;this.MassUnit.R(A._GetAutoObject(A.acj.DM).Afu());A.zX([this,this.AJh],[B=A._GetAutoObject(
A.Device.Device),B.ADq,B.AHy],0);A.zX([this,this.Bx9],[B=A._GetAutoObject(A.Device.
Device),B.ADv,B.AHC],0);A.zX([this,this.Bx_],[B=this.OL,B.AqN,B.Jm],0);},Ai:function(
Ae){C.AB.Ai.call(this,Ae);this.AwU();this.Ab$();},IP:function(G){this.Wj(this);}
,CJ:function(G){C.AB.CJ.call(this,G);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode
)A._GetAutoObject(A.Device.Device).ArX();else A._GetAutoObject(A.Device.Device).
UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bq.La())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),
0,null);this.HY.Gb();this.HY.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id
);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.
Device).AFy();else{var Bzq=this.Bba();this.Zn.Y(true);this.Ab_.Y(true);A._GetAutoObject(
A.Device.Device).UpdateWeightValue(Bzq);A._GetAutoObject(A.Device.Device).UpdateMeasureState(
1);}},Fd:function(G){if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).ArX();else A._GetAutoObject(A.Device.Device).Aha(
);},AwU:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
break;case 1:this.Ben();break;case 3:{this.Ben();this.Zn.Y(false);this.Ab_.Y(false
);if(this.A9o()){this.U8.Y(false);this.KN.H(A.abO(this.KN.M,42));this.MassUnit.H(
A.abO(this.MassUnit.M,55));this.OL.Ar(true);this.OL.Y(true);this.A8(this.OL);}}break;
case 4:this.KN.R(A.aaR(A.act.AjQ));break;default:A.ab5("%s%e",AGM,A._GetAutoObject(
A.Device.Device).MeasureState);}},Ab$:function(){switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 0:case 1:{this.N.CS(A.aaL(A.ach.AdY));this.N.Cm(null);
this.X9.Y(false);this.N.C2(A.aaL(A.ach.Amx));this.N.BU(A.jV);}break;case 3:{if(this.
OL.AV<=1){this.N.CS(null);this.N.Cm(null);this.X9.Y(false);this.N.C2(null);}else{
this.N.CS(A.aaL(A.ach.Amv));this.N.Cm(A.aaL(A.ach.AdZ));this.X9.Y(true);this.N.C2(
null);}this.N.BU(A.aaR(A.acf.Ok));}break;case 4:{this.N.C2(A.aaL(A.ach.Au5));this.
N.Cb=[this,this.Bi9];this.N.Cm(null);this.X9.Y(false);this.N.BU(A.jV);}break;default:;
}},ArV:function(G){},BtE:function(s){this.ArV(s);},Wj:function(G){},AYK:function(
s){this.Wj(s);},Bi9:function(G){this.CJ(this);},Bx9:function(G){this.An();},AJh:
function(G){this.An();},A9o:function(){var AtM=A._GetAutoObject(A.Device.Helper).
W.TimestampFirstWeighing;return(AtM>0)&&!A._GetAutoObject(A.Device.Helper).Bm_(AtM
,this.HY.Timestamp);},Akp:function(G){},AYJ:function(s){this.Akp(s);},Bx_:function(
G){this.An();},Ben:function(){this.KN.R(A._GetAutoObject(A.Device.Converter).AkD(
A._GetAutoObject(A.Device.Device).KN));},Bba:function(){return A._GetAutoObject(
A.Device.Helper).W.Ahj(1);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.
AI._Init.call(this.AiZ={I:this},0);A.acg.Text._Init.call(this.MassUnit={I:this},
0);A.acg.Text._Init.call(this.KN={I:this},0);A.acg.Text._Init.call(this.U8={I:this
},0);C.AwT._Init.call(this.Anh={I:this},0);A.acg.AdP._Init.call(this.Ab_={I:this
},0);A.acg.AdP._Init.call(this.Zn={I:this},0);C.AT3._Init.call(this.OL={I:this},
0);A.acg.Am._Init.call(this.X9={I:this},0);this.__proto__=C.Aw1;this.Background.
L(A.jb.CE);this.N.Y(true);this.Dr(C.Iy);this.AiZ.AW(0x3F);this.AiZ.H(Axo);this.AiZ.
L(A.jb.CE);this.MassUnit.H(AVM);this.MassUnit.A2(0x9);this.MassUnit.R(A.aaR(A.acf.
Ay6));this.MassUnit.L(A.jb.Text);this.KN.H(AVN);this.KN.A2(0x14);this.KN.R(A.aaR(
A.act.AjQ));this.KN.L(A.jb.Text);this.U8.H(AVO);this.U8.R(A.aaR(A.acf.A9U));this.
U8.L(A.jb.Text);this.U8.Y(true);this.Anh.H(AVP);this.Ab_.H(AVQ);this.Ab_.L(A.jb.
AdA);this.Ab_.Y(false);this.Zn.H(AVR);this.Zn.L(A.jb.AdA);this.Zn.Bj5(true);this.
Zn.Y(false);this.OL.AW(0x3F);this.OL.H(Axo);this.OL.Ar(false);this.OL.Y(false);this.
X9.H(AVS);this.X9.L(A.jb.Bh);this.J(this.AiZ,0);this.J(this.MassUnit,0);this.J(this.
KN,0);this.J(this.U8,0);this.J(this.Ab_,0);this.J(this.Zn,0);this.J(this.OL,0);this.
J(this.X9,0);this.N.Cw=[this,this.BtE];this.N.Cg=[this,this.AYJ];this.N.Cb=[this
,this.AYK];this.MassUnit.S(A.aaL(A.fl.Ez));this.KN.S(A.aaL(A.fl.AdS));this.U8.S(
A.aaL(A.fl.Ez));this.Ab_.YX(this.Anh);this.Zn.YX(this.Anh);this.HY=A._NewObject(
A.Device.Rating,0);this.OL.LT(A._GetAutoObject(A.Device.Helper).W);this.OL.Aj9(this.
HY);this.X9.Ax(A.aaL(A.ach.APj));this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.AiZ._Done();this.MassUnit._Done();this.KN._Done();this.U8._Done();this.
Anh._Done();this.Ab_._Done();this.Zn._Done();this.OL._Done();this.X9._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.AiZ._ReInit();
this.MassUnit._ReInit();this.KN._ReInit();this.U8._ReInit();this.Anh._ReInit();this.
Ab_._ReInit();this.Zn._ReInit();this.OL._ReInit();this.X9._ReInit();this.MassUnit.
R(A.aaR(A.acf.Ay6));this.KN.R(A.aaR(A.act.AjQ));this.U8.R(A.aaR(A.acf.A9U));this.
MassUnit.S(A.aaL(A.fl.Ez));this.KN.S(A.aaL(A.fl.AdS));this.U8.S(A.aaL(A.fl.Ez));
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.HY)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AiZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.U8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ab_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"};C.AT7={G6:null
,Ow:null,M3:null,Dd:null,LP:null,TK:null,BhW:function(G){var F;this.LP.BP.L(this.
LP.V.AP);if(!!this.LP.Q)this.LP.BP.R((A._GetAutoObject(A.Device.Converter).SJ((F=
this.LP.Q,F[1].call(F[0])),2,true)+CO)+A._GetAutoObject(A.acj.DM).ZX());},_Init:
function(aArg){C.Cu._Init.call(this,aArg);C.ALd._Init.call(this.G6={I:this},0);C.
AF4._Init.call(this.Ow={I:this},0);C.AS2._Init.call(this.M3={I:this},0);C.Akn._Init.
call(this.Dd={I:this},0);C.I1._Init.call(this.LP={I:this},0);C.B$._Init.call(this.
TK={I:this},0);this.__proto__=C.AT7;var B;this.JH(A.aaR(A.acf.Settings));this.G8.
R(A.aaR(A.acf.Ar9));this.G6.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.
Ow.Au(A._GetAutoObject(A.Device.Device).Ow);this.M3.H(AVT);this.M3.Aj(true);this.
Dd.H(Asn);this.Dd.Aj(true);this.Dd.U(A.aaR(A.acf.Kz));this.Dd.Bf(true);this.Dd.Gk(
1000);this.Dd.E1(99000);this.LP.H(Aso);this.LP.Aj(true);this.LP.U(A.aaR(A.acf.A3n
));this.LP.Gk(50);this.LP.E1(2000);this.LP.ARD(A._GetAutoObject(A.acj.DM).AyP());
this.TK.H(AkK);this.TK.Aj(true);this.TK.U(A.aaR(A.acf.A5W));this.TK.Gk(-1);this.
TK.E1(1);this.Kj(this.Z,-1);this.Kj(this.Av,-1);this.J(this.M3,0);this.J(this.Dd
,0);this.J(this.LP,0);this.J(this.TK,0);this.M3.AgO([B=this.M3,B.FH]);this.M3.Gj([
this,this.D9,this.GQ]);this.M3.Aj3(A.aaL(A.ach.Edit));this.M3.LS([B=this.M3,B.AxS
]);this.M3.LU(A.aaL(A.ach.Anl));this.M3.Au([B=this.G6,B.B_,B.Ca]);this.M3.CK(this.
G6);this.M3.A8j([B=this.G6,B.ARl,B.AYI]);this.M3.A8i([B=this.G6,B.ARk,B.AYH]);this.
Dd.Gj([this,this.D9,this.GQ]);this.Dd.LS([B=this.M3,B.AxS]);this.Dd.LU(A.aaL(A.ach.
Anl));this.Dd.Au([B=this.G6,B.A6N,B.ARr]);this.LP.Gj([this,this.D9,this.GQ]);this.
LP.LS([B=this.M3,B.AxS]);this.LP.LU(A.aaL(A.ach.Anl));this.LP.Au([B=this.G6,B.A6M
,B.ARp]);this.LP.A8v([this,this.BhW]);this.TK.Gj([this,this.D9,this.GQ]);this.TK.
Au([B=this.Ow,B.B_,B.Ca]);this.TK.CK(this.Ow);},_Done:function(){this.__proto__=
C.Cu;this.G6._Done();this.Ow._Done();this.M3._Done();this.Dd._Done();this.LP._Done(
);this.TK._Done();C.Cu._Done.call(this);},_ReInit:function(){C.Cu._ReInit.call(this
);this.G6._ReInit();this.Ow._ReInit();this.M3._ReInit();this.Dd._ReInit();this.LP.
_ReInit();this.TK._ReInit();this.JH(A.aaR(A.acf.Settings));this.G8.R(A.aaR(A.acf.
Ar9));this.Dd.U(A.aaR(A.acf.Kz));this.LP.U(A.aaR(A.acf.A3n));this.TK.U(A.aaR(A.acf.
A5W));},_Mark:function(D){var B;C.Cu._Mark.call(this,D);if((B=this.G6)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Ow)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M3).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.LP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TK)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightRecordingSettingsScreen"};C.AS2={Yt:null,Init:
function(aArg){var B;A.zX([this,this.Ae$],[B=A._GetAutoObject(A.Device.Device),B.
AQ4,B.AYt],0);A.pe([this,this.Ae$],this);},A16:function(G){A._GetAutoObject(A.Device.
Device).A6(37,true,A.jV,0,[this,this.A$u]);},AZZ:function(G){var F;if(this.A3===
1){var BN=this.D0;this.D0=this.D0-A._GetAutoObject(A.acj.DM).AyP();if(this.D0<this.
Alj)this.D0=this.Alj;if(this.DN!==BN){if(!!this.JJ)(F=this.JJ,F[2].call(F[0],this.
D0));A.abo(this.JJ,0);}}if(this.A3===2){var BN=this.DN;this.DN=this.DN-A._GetAutoObject(
A.acj.DM).AyP();if(this.DN<this.D0)this.DN=this.D0;if(this.DN!==BN){if(!!this.JI
)(F=this.JI,F[2].call(F[0],this.DN));A.abo(this.JI,0);}}this.DD(this);this.An();
},A0y:function(G){var F;if(this.A3===1){var BN=this.D0;this.D0=this.D0+A._GetAutoObject(
A.acj.DM).AyP();if(this.D0>this.DN)this.D0=this.DN;if(this.D0!==BN){if(!!this.JJ
)(F=this.JJ,F[2].call(F[0],this.D0));A.abo(this.JJ,0);}}if(this.A3===2){var BN=this.
DN;this.DN=this.DN+A._GetAutoObject(A.acj.DM).AyP();if(this.DN>this.Ale)this.DN=
this.Ale;if(this.DN!==BN){if(!!this.JI)(F=this.JI,F[2].call(F[0],this.DN));A.abo(
this.JI,0);}}this.DD(this);this.An();},Hu:function(G){this.Pu.R(AGN+A._GetAutoObject(
A.Device.Converter).SJ(this.D0,2,true));this.Pt.R(AGN+A._GetAutoObject(A.Device.
Converter).SJ(this.DN,2,true));this.Sb.R(A._GetAutoObject(A.acj.DM).ZX());this.Yt.
R(this.Sb.String);},A1G:function(G){var B;var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))A._GetAutoObject(A.Device.Device).ArJ(this
);},A0r:function(AsM){if(AsM===1)return this.Pu;else if(AsM===2)return this.Pt;else
return null;},_Init:function(aArg){C.AbU._Init.call(this,aArg);A.acg.Text._Init.
call(this.Yt={I:this},0);this.__proto__=C.AS2;this.U(A.aaR(A.acf.ABi));this.Ale=
2000;this.Alj=20;this.Background.H(JN);this.V.H(BC);this.V.R(A.aaR(A.acf.ABi)+A.
aaR(A.acf.Colon));this.V.A2(0x12);this.Akg.H(AVU);this.Akh.H(AVV);this.QO.H(AGO);
this.Qo.H(AVW);this.Pt.H(AVX);this.Pu.H(AVY);this.Sb.H(AVZ);this.Yt.H(AV0);this.
Yt.IZ(false);this.Yt.A2(0x12);this.Yt.L(0xFF000000);this.Kj(this.HV,-8);this.J(this.
Yt,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.Yt.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.AbU;this.Yt._Done();C.AbU.
_Done.call(this);},_ReInit:function(){C.AbU._ReInit.call(this);this.Yt._ReInit();
this.U(A.aaR(A.acf.ABi));this.V.R(A.aaR(A.acf.ABi)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.Yt.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.AbU._Mark.call(this,D);if((B=this.Yt)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.AAw={M:Q4,A5v:function(
){},H:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A5v();},_Init:function(
aArg){A.Graphics.Hn._Init.call(this,aArg);this.__proto__=C.AAw;},_className:"Application::AbstractPath"
};C.AiM={DL:null,DO:null,Q2:null,Adg:null,NW:null,Ade:null,AtT:1,A2U:0,Bam:false
,AyL:true,CT:function(){this.Bej(this);},Init:function(aArg){var B;this.A8(this.
Adg);A.zX([this,this.Bej],[B=this.Adg,B.A6T,B.A_4],0);},Ai:function(Ae){C.AB.Ai.
call(this,Ae);this.Ade.R(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).Bfz(this.AtT+this.A2U)));if(this.AtT===1)this.NW.R(A.aaR(A.acf.Auc));else this.
NW.R(A.aaR(A.acf.Bfa));},CJ:function(G){if(this.AyL)this.AyL=false;else if(this.
DL.Bav()===false)A.pe([this,this.A1e],this);else if(this.DL.AyY())this.DL.Acz();
A.zV([this,this.Afz],A._GetAutoObject(A.Device.Device).Aq,0);},Fd:function(G){A.
z9([this,this.Afz],A._GetAutoObject(A.Device.Device).Aq,0);},A1e:function(G){this.
Bam=true;A._GetAutoObject(C.AY).Fm();},Bej:function(G){var B;var BaW=(C.VV.isPrototypeOf(
B=this.Adg.AR)?B:null);if(!!BaW){var Ax6=A._NewObject(A.Device.ActionToString,0);
this.Q2.R(Ax6.Lm(BaW.Action));}},H9:function(G){var Cr=(C.VV.isPrototypeOf(G)?G:
null);if(!Cr)return;this.DL.P7(Cr.Action);this.Bja(this.AtT+1);},BxE:function(G){
if(A._GetAutoObject(C.O6).LN(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bxt:function(G){
A._GetAutoObject(C.AY).B1(3);},Bja:function(E){if(this.AtT===E)return;this.AtT=E;
this.An();},Afz:function(G){if((this.Bam===false)&&(this.DL.Bav()===false))A.pe([
this,this.A1e],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AI.
_Init.call(this.DO={I:this},0);C.CP._Init.call(this.Q2={I:this},0);C.AP6._Init.call(
this.Adg={I:this},0);C.CP._Init.call(this.NW={I:this},0);A.acg.Text._Init.call(this.
Ade={I:this},0);this.__proto__=C.AiM;this.Background.L(A.jb.C0);this.N.H(WI);this.
N.Y(true);this.Dr(C.Iy);this.DO.AW(0x3F);this.DO.H(E4);this.DO.L(A.jb.CE);this.Q2.
H(AV1);this.Q2.L(A.jb.Text);this.Adg.H(AV2);this.NW.H(AV3);this.NW.R(A.aaR(A.acf.
Auc));this.NW.L(A.jb.Text);this.Ade.H(AV4);this.Ade.R(AV5);this.Ade.L(A.jb.Text);
this.J(this.DO,0);this.J(this.Q2,0);this.J(this.Adg,0);this.J(this.NW,0);this.J(
this.Ade,0);this.N.Cw=[this,this.Bxt];this.N.Cg=[this,this.BxE];this.N.Cb=[this,
this.A1e];this.N.CS(A.aaL(A.ach.EV));this.N.Cm(A.aaL(A.ach.Aa0));this.Q2.S(A.aaL(
A.fl.Ez));this.Q2.A5(A.aaL(A.fl.Ah));this.Q2.CC(A.aaL(A.fl.Ak));this.Adg.A1E=[this
,this.H9];this.NW.S(A.aaL(A.fl.Ez));this.NW.A5(A.aaL(A.fl.Ah));this.NW.CC(A.aaL(
A.fl.Ak));this.Ade.S(A.aaL(A.fl.Hi));this.DL=A._GetAutoObject(C.DL);this.Init(aArg
);},_Done:function(){this.__proto__=C.AB;this.DO._Done();this.Q2._Done();this.Adg.
_Done();this.NW._Done();this.Ade._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.DO._ReInit();this.Q2._ReInit();this.Adg._ReInit();
this.NW._ReInit();this.Ade._ReInit();this.NW.R(A.aaR(A.acf.Auc));this.Q2.S(A.aaL(
A.fl.Ez));this.Q2.A5(A.aaL(A.fl.Ah));this.Q2.CC(A.aaL(A.fl.Ak));this.NW.S(A.aaL(
A.fl.Ez));this.NW.A5(A.aaL(A.fl.Ah));this.NW.CC(A.aaL(A.fl.Ak));this.CT();},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.DL)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Adg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NW
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ade)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.AP6={IK:null,A1E:null,Cl:null,Z:null,Av:
null,A2h:0,Init:function(aArg){A.zV([this,this.AAm],this.IK,0);A.zV([this,this.Beg
],A._GetAutoObject(A.Device.Helper).W,0);A.zV([this,this.AtQ],A._GetAutoObject(A.
Device.Helper).W,0);A.pe([this,this.AAm],this);},A8:function(E){var A0$=this.AR;
A.Core.O.A8.call(this,E);if(this.AR!==A0$)A.abo([this,this.A6T,this.A_4],0);},Du:
function(G){var B;var E7=0;var X=this.AR;switch(this.Cl.CI){case 6:E7=2;break;case
7:E7=7;break;case 4:E7=4;break;case 5:E7=5;break;default:;}X=this.RY(X,E7,0x415);
if((E7===5)&&!X){var AJR=this.AR;while(!X){AJR=this.RY(AJR,2,0x415);if(!!AJR)X=this.
RY(AJR,E7,0x415);else break;}}if(!!X)this.A8(X);var Hs=(C.VV.isPrototypeOf(B=this.
AR)?B:null);if(!!Hs)this.A2h=(C.VV.isPrototypeOf(B=this.AR)?B:null).Action;else this.
A2h=0;A.pe([this,this.MG],this);},AZS:function(JO){var EF=A._GetAutoObject(C.DL).
BaD(JO,this.A1E);this.J(EF,0);},Aoo:function(){var B;var X=this.Z.Ag;while(!!X&&
!((X.T&0x200)===0x200)){var Ada=X;X=X.Ag;if(((Ada.T&0x400)===0x400))this.HH(Ada);
}},AAm:function(G){this.Aoo();var P;var CM=A._GetAutoObject(C.O6).X0();for(P=0;P<
CM;P=P+1){var ZO=A._GetAutoObject(C.O6).Vt(P);this.AZS(ZO);}A.pe([this,this.Beg]
,this);A.pe([this,this.Bnv],this);A.pe([this,this.AtQ],this);},Bnv:function(G){var
B;var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var
Aa=(C.VV.isPrototypeOf(X)?X:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).W.Id);}X=X.Ag;}},AtQ:function(G){var B;var X=this.Z.Ag;while(!!
X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var Aa=(C.VV.isPrototypeOf(
X)?X:null);if(!!Aa){if(Aa.Action===8)Aa.AR0(A._GetAutoObject(A.Device.Helper).W.
IsWatch);else if(Aa.Action===4)Aa.AR0(A._GetAutoObject(A.Device.Helper).W.IsAlarm
);else if(Aa.Action===8192)Aa.AR0(A._GetAutoObject(A.Device.Helper).W.IsDry);}}X=
X.Ag;}},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((
B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},Beg:function(G){var B;var X=this.
Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)){var Aa=(C.VV.isPrototypeOf(
X)?X:null);if(!!Aa){if(A._GetAutoObject(C.O6).LN(Aa.Action)&&A._GetAutoObject(C.
DL).A2T(A._GetAutoObject(A.Device.Helper).W,Aa.Action)){Aa.Ar(true);Aa.Y(true);if(
this.A2h===Aa.Action)this.A8(Aa);}else{Aa.Ar(false);Aa.Y(false);}}}X=X.Ag;}A.pe([
this,this.MG],this);},MG:function(G){var B;this.Z.U6(null,null);if(!!this.AR&&((
this.AR.T&0x400)===0x400))this.Z.Hx(this.AR,true,null,null);},G4:function(G){A.pe([
this,this.E9],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
BJ._Init.call(this.Cl={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Av._Init.
call(this.Av={I:this},0);this.__proto__=C.AP6;this.H(AV6);this.Cl.Filter=147;this.
Z.AW(0xB);this.Z.H(AV7);this.Z.Kb(9);this.Av.AW(0xA);this.Av.H(AV8);this.J(this.
Z,0);this.J(this.Av,0);this.Cl.BK=[this,this.Du];this.Cl.DS=[this,this.Du];this.
Z.Ei=[this,this.G4];this.IK=A._GetAutoObject(C.O6);this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.O;this.Cl._Done();this.Z._Done();this.Av._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Cl._ReInit(
);this.Z._ReInit();this.Av._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.IK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1E)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ManualActionScreenGrid"};C.Fg={D$:null,AI:null,Text:
null,Am:null,_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.D$._Init.
call(this.D$={I:this},0);A.acg.AI._Init.call(this.AI={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=
C.Fg;this.N.Ar(false);this.D$.H(BC);this.D$.Ar(false);this.AI.H(E4);this.AI.L(A.
jb.AdA);this.Text.H(BC);this.Text.R(AV9);this.Text.L(0xFF000000);this.Am.H(Q4);this.
Am.L(A.jb.Text);this.J(this.D$,0);this.J(this.AI,0);this.J(this.Text,0);this.J(this.
Am,0);this.N.Cm(A.aaL(A.ach.Aa0));this.Text.S(A.aaL(A.fl.Ak));this.Am.Ax(A.aaL(A.
ach.AB7));},_Done:function(){this.__proto__=C.OverlayMenu;this.D$._Done();this.AI.
_Done();this.Text._Done();this.Am._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.D$._ReInit();this.AI._ReInit();
this.Text._ReInit();this.Am._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"
};C.Xl={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));},IP:function(G){},Ai:function(
Ae){C.B$.Ai.call(this,Ae);var FE=A.jb.AdA;var GG=A.jb.C0;if(this.G_){FE=A.jb.Text;
GG=A.jb.Bh;}if(!this.Ly){this.Background.L(A.jb.C0);this.V.L(A.jb.CE);}else if(this.
Qb){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else if(this.Kv){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}this.Hl.L(
A.jb.C0);this.HV.L(A.jb.C0);},G$:function(G){var B;var FU=this.Dp.GN;var Cx=(C.CP.
isPrototypeOf(B=this.Dp.Cd)?B:null);if(!Cx)return;Cx.S(A.aaL(A.fl.Ak));Cx.A5(A.aaL(
A.fl.By));Cx.L(this.V.AP);if(!!this.AC)Cx.R(this.AC.Gg(FU));else Cx.R(WH);Cx.H(A.
abK(Cx.M,[this.Dp.VL,(B=this.Dp.M)[3]-B[1]]));},_Init:function(aArg){C.B$._Init.
call(this,aArg);this.__proto__=C.Xl;this.Dp.AD5(170);this.Dp.NN(C.CP);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.AiN={C5:null,Init:function(
aArg){this.V.Text.A2(0x11);this.V.Text.HG(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Ci.Ai.call(this,Ae);var FE=A.jb.AdA;var GG=A.jb.C0;if(this.G_){FE=A.jb.Text;
GG=A.jb.Bh;}if(!this.Ly){this.Background.L(A.jb.C0);this.V.L(A.jb.CE);}else if(this.
Qb){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else if(this.Kv){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}},_Init:function(
aArg){C.Ci._Init.call(this,aArg);A.acg.Am._Init.call(this.C5={I:this},0);this.__proto__=
C.AiN;this.C5.H(AGP);this.C5.Ct(1);this.J(this.C5,0);this.C5.Ax(A.aaL(A.ach.Al3)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ci;this.C5._Done();C.Ci._Done.
call(this);},_ReInit:function(){C.Ci._ReInit.call(this);this.C5._ReInit();},_Mark:
function(D){var B;C.Ci._Mark.call(this,D);if((B=this.C5)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AKB={Z:null,Rr:null,S_:null
,S$:null,Ta:null,Add:null,Xk:null,U2:null,U3:null,Aaf:null,Av:null,Init:function(
aArg){this.A8(this.Rr);},Du:function(G){C.Fg.Du.call(this,G);this.MG(this);},IP:
function(G){this.BdB(this);},KG:function(){if(!this.Bw){this.Bw=A._NewObject(C.N
,0);this.Bw.Cw=[this,this.BdB];this.Bw.Cg=null;this.Bw.Cb=null;this.Bw.BU(A.jV);
this.Bw.Cm(null);this.Bw.CS(A.aaL(A.ach.Vz));}return this.Bw;},Az2:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.Xk.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.Xk.Q))A._GetAutoObject(C.AutoActions).J(this.Xk.Q);if(!!this.U2.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.U2.Q))A._GetAutoObject(C.AutoActions
).J(this.U2.Q);if(!!this.U3.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.U3.
Q))A._GetAutoObject(C.AutoActions).J(this.U3.Q);if(!!this.Aaf.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.Aaf.Q))A._GetAutoObject(C.AutoActions).J(this.Aaf.Q
);A._GetAutoObject(C.AutoActions).Cp();},BdB:function(G){if(this.BwP()===true){this.
Az2();this.Xa(this);}else A._GetAutoObject(A.Device.Device).A6(27,true,A.jV,0,null
);},BwP:function(){return(!!this.Xk.C9(this.Xk.Q)||!!this.U2.C9(this.U2.Q))||!!this.
U3.C9(this.U3.Q);},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.
Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},MG:function(G){var B;this.
Z.U6(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hx(this.AR,true
,null,null);},BxQ:function(G){var B;A._GetAutoObject(A.Device.Device).ArG(this);
this.Xk.AsS(this);this.U2.AsS(this);this.U3.AsS(this);this.Aaf.AsS(this);},G4:function(
G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Fg._Init.call(this,aArg);A.
Core.Z._Init.call(this.Z={I:this},0);C.Xl._Init.call(this.Rr={I:this},0);C.Xl._Init.
call(this.S_={I:this},0);C.Xl._Init.call(this.S$={I:this},0);C.Xl._Init.call(this.
Ta={I:this},0);C.Aup._Init.call(this.Add={I:this},0);C.AutoAction._Init.call(this.
Xk={I:this},0);C.AutoAction._Init.call(this.U2={I:this},0);C.AutoAction._Init.call(
this.U3={I:this},0);C.AutoAction._Init.call(this.Aaf={I:this},0);C.Av._Init.call(
this.Av={I:this},0);this.__proto__=C.AKB;var B;this.H(Q5);this.Text.R(A.aaR(A.acf.
O5));this.Z.H(Ln);this.Z.Kb(1);this.Rr.H(Ahq);this.Rr.Ar(true);this.Rr.Aj(true);
this.Rr.U(A._GetAutoObject(A.Device.Helper).Nb(A.aaR(A.acf.AiL),PW,AGQ));this.S_.
H(WK);this.S_.Ar(true);this.S_.Aj(true);this.S_.U(A._GetAutoObject(A.Device.Helper
).Nb(A.aaR(A.acf.AiL),PW,Asp));this.S$.H(ZF);this.S$.Ar(true);this.S$.Aj(true);this.
S$.U(A._GetAutoObject(A.Device.Helper).Nb(A.aaR(A.acf.AiL),PW,Axp));this.Ta.H(AnR
);this.Ta.Ar(true);this.Ta.Aj(true);this.Ta.U(A._GetAutoObject(A.Device.Helper).
Nb(A.aaR(A.acf.AiL),PW,AGR));this.Add.H(Axq);this.Add.Aj(true);this.Add.U(A.aaR(
A.acf.A87));this.U2.Index=1;this.U3.Index=2;this.Aaf.Index=3;this.Av.H(II);this.
J(this.Z,0);this.J(this.Rr,0);this.J(this.S_,0);this.J(this.S$,0);this.J(this.Ta
,0);this.J(this.Add,0);this.J(this.Av,0);this.Z.Ei=[this,this.G4];this.Rr.V9(A.aaL(
A.fl.Hi));this.Rr.V_(A.aaL(A.fl.Hi));this.Rr.Au([B=this.Xk,B.B_,B.Ca]);this.Rr.CK(
this.Xk);this.S_.V9(A.aaL(A.fl.Hi));this.S_.V_(A.aaL(A.fl.Hi));this.S_.Au([B=this.
U2,B.B_,B.Ca]);this.S_.CK(this.U2);this.S$.V9(A.aaL(A.fl.Hi));this.S$.V_(A.aaL(A.
fl.Hi));this.S$.Au([B=this.U3,B.B_,B.Ca]);this.S$.CK(this.U3);this.Ta.V9(A.aaL(A.
fl.Hi));this.Ta.V_(A.aaL(A.fl.Hi));this.Ta.Au([B=this.Aaf,B.B_,B.Ca]);this.Ta.CK(
this.Aaf);this.Add.AQ=[this,this.BxQ];this.Init(aArg);},_Done:function(){this.__proto__=
C.Fg;this.Z._Done();this.Rr._Done();this.S_._Done();this.S$._Done();this.Ta._Done(
);this.Add._Done();this.Xk._Done();this.U2._Done();this.U3._Done();this.Aaf._Done(
);this.Av._Done();C.Fg._Done.call(this);},_ReInit:function(){C.Fg._ReInit.call(this
);this.Z._ReInit();this.Rr._ReInit();this.S_._ReInit();this.S$._ReInit();this.Ta.
_ReInit();this.Add._ReInit();this.Xk._ReInit();this.U2._ReInit();this.U3._ReInit(
);this.Aaf._ReInit();this.Av._ReInit();this.Text.R(A.aaR(A.acf.O5));this.Rr.U(A.
_GetAutoObject(A.Device.Helper).Nb(A.aaR(A.acf.AiL),PW,AGQ));this.S_.U(A._GetAutoObject(
A.Device.Helper).Nb(A.aaR(A.acf.AiL),PW,Asp));this.S$.U(A._GetAutoObject(A.Device.
Helper).Nb(A.aaR(A.acf.AiL),PW,Axp));this.Ta.U(A._GetAutoObject(A.Device.Helper).
Nb(A.aaR(A.acf.AiL),PW,AGR));this.Add.U(A.aaR(A.acf.A87));},_Mark:function(D){var
B;C.Fg._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Rr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.S$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ta)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Add)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aaf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"
};C.C3={Cv:A.abi(16,0,null),Do:function(){return 16;},C9:function(aIndex){if(aIndex>=
16)return-1;return this.Cv.Get(aIndex);},DP:function(A1){var P=0;while(P<16){if(
this.Cv.Get(P)===A1)return P;P=P+1;}return-1;},Hj:function(){var P=0;var max=-1;
while(P<16){if(this.Cv.Get(P)>max)max=this.Cv.Get(P);P=P+1;}return max;},_Init:function(
aArg){C.AC._Init.call(this,aArg);(this.Cv=[]).__proto__=C.C3.Cv;this.__proto__=C.
C3;},_className:"Application::ArraySelection"};C.AutoAction={IK:null,Acz:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.AsS],this.Acz,0);A.pe([this,this.
AsS],this);},Do:function(){return this.IK.X0();},C9:function(aIndex){if(aIndex>=
this.Do())return-1;return this.IK.Vt(aIndex);},Gg:function(aIndex){return this.ActionToString.
BX(this.C9(aIndex));},DP:function(A1){var P=0;while(P<this.Do()){if(this.IK.Vt(P
)===A1)return P;P=P+1;}return-1;},Hj:function(){var P=0;var max=-1;while(P<this.
Do()){if(this.IK.Vt(P)>max)max=this.IK.Vt(P);P=P+1;}return max;},AsS:function(G){
this.Q=this.Acz.Vt(this.Index);A.abo([this,this.B_,this.Ca],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.IK=A._GetAutoObject(C.At8);this.Acz=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.ActionToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.IK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Acz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AKH={AsP:0,Init:function(aArg
){var B;A.zX([this,this.Bcc],[B=A._GetAutoObject(A.Device.Device),B.A6z,B.A_P],0
);A.zX([this,this.Bb$],[B=A._GetAutoObject(A.Device.Device),B.AQP,B.AYm],0);A.pe([
this,this.Bcc],this);A.pe([this,this.Bb$],this);},Clear:function(){C.Adh.Clear.call(
this);this.AsP=0;},Cp:function(){A._GetAutoObject(A.Device.Device).AqS(this.AsP);
A._GetAutoObject(A.Device.Device).AqT(this.toString());},Bcc:function(G){this.AsP=
A._GetAutoObject(A.Device.Device).O6;A.we(this,0);},Bb$:function(G){this.EK(A._GetAutoObject(
A.Device.Device).AtU);A.we(this,0);},LN:function(JO){if((this.AsP&(((B=JO)<0)?B+
0x100000000:B))===(((B=JO)<0)?B+0x100000000:B))return true;return false;},AST:function(
JO){this.AsP=this.AsP|(((B=JO)<0)?B+0x100000000:B);},_Init:function(aArg){C.Adh.
_Init.call(this,aArg);this.__proto__=C.AKH;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.O6={_Init:function(){C.AKH._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AKI={Tb:null,Av:null,Z:null,JD:null,CT:function(
){this.Ah_(this);},Init:function(aArg){A.zV([this,this.Ah_],this.Tb,0);A.pe([this
,this.Ah_],this);},Du:function(G){C.Fg.Du.call(this,G);this.MG(this);},KG:function(
){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cw=[this,this.Ee];this.Bw.Cg=[
this,this.A1m];this.Bw.Cb=[this,this.A1O];this.Bw.C2(A.aaL(A.ach.Aqr));this.Bw.Cm(
A.aaL(A.ach.Aqk));this.Bw.CS(A.aaL(A.ach.Vz));}return this.Bw;},Ee:function(G){if(
this.BvH()>0){this.Az2();this.Xa(this);}else A._GetAutoObject(A.Device.Device).A6(
28,true,A.jV,0,null);},Ah_:function(G){this.Aoo();var P;for(P=0;P<this.Tb.X0();P=
P+1){var ZO=A._GetAutoObject(C.O6).Vt(P);this.AZu(ZO);}this.J(this.JD,0);A.aaS([
this,this.MG],this);},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]
);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},MG:function(G){var
B;this.Z.U6(null,null);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hx(this.
AR,true,null,null);},AZu:function(GX){var Ax6=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.RU,0);Aa.U(Ax6.BX(GX));Aa.Aj(true);Aa.GN=GX;Aa.A78(this.
Tb.LN(GX));this.J(Aa,0);this.Y5(Aa);},Aoo:function(){var B;var X=this.Z.Ag;while(
!!X&&!((X.T&0x200)===0x200)){var Ada=X;X=X.Ag;if(((Ada.T&0x400)===0x400))this.HH(
Ada);}},Az2:function(){var B;this.Tb.Clear();var X=this.Z.Ag;while(!!X&&!((X.T&0x200
)===0x200)){if(((X.T&0x400)===0x400)&&!(X===this.JD)){var Aa=(C.RU.isPrototypeOf(
X)?X:null);if(!!Aa){this.Tb.J(Aa.GN);if(Aa.AQ2())this.Tb.AST(Aa.GN);}else A.ab5(
"%s",Axr);}X=X.Ag;}this.Tb.Cp();},BvH:function(){var B;var A2i=0;var X=this.Z.Ag;
while(!!X&&!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)&&!(X===this.JD)){var
Aa=(C.RU.isPrototypeOf(X)?X:null);if(!!Aa){if(Aa.AQ2())A2i=A2i+1;}else A.ab5("%s"
,Axr);}X=X.Ag;}return A2i;},A1m:function(G){var B;var Aa=(C.RU.isPrototypeOf(B=this.
AR)?B:null);if(!!Aa){var Azj=(C.RU.isPrototypeOf(B=Aa.Ag)?B:null);if(!!Azj){this.
Ag5(Azj,Aa);A.pe([this,this.MG],this);}}},A1O:function(G){var B;var Aa=(C.RU.isPrototypeOf(
B=this.AR)?B:null);if(!!Aa){var AzQ=(C.RU.isPrototypeOf(B=Aa.AH)?B:null);if(!!AzQ
){this.Ag5(Aa,AzQ);A.pe([this,this.MG],this);}}},Ajd:function(G){var B;A._GetAutoObject(
A.Device.Device).ArE(this);A.pe([this,this.Ah_],this);},G4:function(G){A.pe([this
,this.E9],this);},_Init:function(aArg){C.Fg._Init.call(this,aArg);C.Av._Init.call(
this.Av={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Aup._Init.call(this.
JD={I:this},0);this.__proto__=C.AKI;this.H(Q5);this.Text.R(A.aaR(A.acf.AC4));this.
Av.H(II);this.Z.H(Ln);this.Z.Kb(1);this.JD.H(AGS);this.JD.Aj(true);this.JD.U(A.aaR(
A.acf.Ajd));this.J(this.Av,0);this.J(this.Z,0);this.J(this.JD,0);this.Z.Ei=[this
,this.G4];this.JD.AQ=[this,this.Ajd];this.Tb=A._GetAutoObject(C.O6);this.Init(aArg
);},_Done:function(){this.__proto__=C.Fg;this.Av._Done();this.Z._Done();this.JD.
_Done();C.Fg._Done.call(this);},_ReInit:function(){C.Fg._ReInit.call(this);this.
Av._ReInit();this.Z._ReInit();this.JD._ReInit();this.Text.R(A.aaR(A.acf.AC4));this.
JD.U(A.aaR(A.acf.Ajd));this.CT();},_Mark:function(D){var B;C.Fg._Mark.call(this,
D);if((B=this.Tb)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JD)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"};C.
RU={GN:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A2(0x11);this.
V.Text.HG(10);},Bg:function(aSize){C.TR.Bg.call(this,aSize);this.V.H(A.abN(this.
V.M,this.Md.M[0]));},Ai:function(Ae){var B;C.TR.Ai.call(this,Ae);var G2=((Ae&0x10
)===0x10);var Fi=((Ae&0x20)===0x20);var Gq=this.Bk.Bv;var FE=A.jb.AdA;var GG=A.jb.
Bh;if(this.G_){FE=A.jb.Bh;GG=A.jb.Text;}if(!G2){this.Background.L(FE);this.V.L(A.
jb.CE);}else if(Gq){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else if(Fi){this.
Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);
}this.Ly=G2;this.Kv=Fi;this.Qb=Gq;},IP:function(G){this.A1M(this);},A1M:function(
G){this.ADK(!this.Al8);},A78:function(E){this.ADK(E);},AQ2:function(){return this.
Al8;},_Init:function(aArg){C.TR._Init.call(this,aArg);this.__proto__=C.RU;this.Md.
H(AV_);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Adh={CM:0
,IK:A.abi(17,0,null),Vt:function(IJ){return this.IK.Get(IJ);},X0:function(){return this.
CM;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.IK.Set(P,0);this.CM=0;},J:function(
JO){if(this.CM>=17)A.ab5("%s",AV$);else{this.IK.Set(this.CM,JO);this.CM=this.CM+
1;}},Cp:function(){},EK:function(Aco){var AH0=Aco.indexOf(String.fromCharCode(0x2C
),0);var AZT=A.jV;var P=0;this.CM=0;while(P<17)if(Aco===A.jV){this.IK.Set(P,0);P++;
}else{if(AH0===-1){AZT=Aco;Aco=A.jV;}else{AZT=A.abV(Aco,AH0);Aco=A.ab1(Aco,0,AH0+
1);}var ZO=A.abZ(AZT,0,10)|0;if(this.A5y(ZO)){this.IK.Set(this.CM,ZO);this.CM=this.
CM+1;P++;}AH0=Aco.indexOf(String.fromCharCode(0x2C),0);}if(Aco!==A.jV)A.ab5("%s"
,AWa);},toString:function(){var A03=(((B=this.IK.Get(0))<0)?B+0x100000000:B).toFixed(
);var P;for(P=1;P<this.CM;P=P+1)A03=(A03+AGT)+(((B=this.IK.Get(P))<0)?B+0x100000000:
B).toFixed();return A03;},Contains:function(JO){var P;for(P=0;P<this.CM;P=P+1)if(
this.IK.Get(P)===JO)return true;return false;},A5y:function(JO){return true;},_Init:
function(aArg){(this.IK=[]).__proto__=C.Adh.IK;this.__proto__=C.Adh;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ActionsList"};C.ALn={Init:function(aArg){var B;A.zX([
this,this.Bcl],[B=A._GetAutoObject(A.Device.Device),B.A6L,B.A_Y],0);A.pe([this,this.
Bcl],this);},Cp:function(){A._GetAutoObject(A.Device.Device).Abv(this.toString()
);},Bcl:function(G){this.EK(A._GetAutoObject(A.Device.Device).AutoActions);A.we(
this,0);},_Init:function(aArg){C.Adh._Init.call(this,aArg);this.__proto__=C.ALn;
this.Init(aArg);},_className:"Application::AutoActionsClass"};C.AutoActions={_Init:
function(){C.ALn._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.VV={U4:null,Kh:null,A5u:A.jV,Action:0,A2V:false,A8T:
false,A9y:false,Bg:function(aSize){C.Fc.Bg.call(this,aSize);this.QJ.H(this.Mh.M);
this.Oo.H(this.QJ.M);},Ai:function(Ae){C.Fc.Ai.call(this,Ae);if(!this.Ly){this.Kh.
TE.L(A.jb.Amz);this.Kh.Qs.Y(true);this.Kh.Qs.L(A.jb.APv);}else if(this.Qb){this.
Kh.TE.L(A.jb.Bh);this.Kh.Qs.Y(false);}else if(this.Kv){this.Kh.TE.L(A.jb.Bh);this.
Kh.Qs.Y(false);}else{this.Kh.TE.L(A.jb.Text);this.Kh.Qs.Y(true);this.Kh.Qs.L(A.jb.
C0);}},Bi$:function(E){if(this.Action===E)return;this.Action=E;},Bko:function(E){
if(this.A5u===E)return;this.A5u=E;this.U4.Text.R(E);},AR0:function(E){if(this.A9y===
E)return;this.A9y=E;this.Kh.Bk4(!this.Kh.ATf);},AEo:function(E){if(this.A8T===E)
return;this.A8T=E;this.Kh.Y(!this.Kh.Fe());},A7F:function(E){if(this.A2V===E)return;
this.A2V=E;this.U4.Y(E);},_Init:function(aArg){C.Fc._Init.call(this,aArg);C.U4._Init.
call(this.U4={I:this},0);C.Kh._Init.call(this.Kh={I:this},0);this.__proto__=C.VV;
this.H(AWb);this.Background.H(AWc);this.GU.Ar(false);this.GU.Y(false);this.U4.H(
AWd);this.U4.Y(false);this.Kh.H(AWe);this.Kh.Y(false);this.J(this.U4,0);this.J(this.
Kh,0);this.Mh.Ax(A.aaL(A.ach.ALU));},_Done:function(){this.__proto__=C.Fc;this.U4.
_Done();this.Kh._Done();C.Fc._Done.call(this);},_ReInit:function(){C.Fc._ReInit.
call(this);this.U4._ReInit();this.Kh._ReInit();},_Mark:function(D){var B;C.Fc._Mark.
call(this,D);if((B=this.U4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kh)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.U4={AI:
null,Text:null,Cz:null,Init:function(aArg){this.Text.H(this.M);this.Cz.H(this.M);
this.AI.H(this.M);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AI.
_Init.call(this.AI={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
Cz._Init.call(this.Cz={I:this},0);this.__proto__=C.U4;this.AI.H(AWf);this.AI.L(A.
jb.BgS);this.H(AWg);this.Text.H(AWh);this.Text.L(A.jb.Text);this.Cz.H(AWi);this.
Cz.NO(1);this.Cz.L(A.jb.Text);this.J(this.AI,0);this.J(this.Text,0);this.J(this.
Cz,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.AI._Done();this.Text._Done();this.Cz._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AI._ReInit();this.Text._ReInit(
);this.Cz._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.AI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Kh={Qs:null,TE:null,ATf:false,Bk4:function(E){if(this.
ATf===E)return;this.ATf=E;if(E){this.TE.Ax(A.aaL(A.ach.ABp));this.Qs.Ax(A.aaL(A.
ach.ABp));}else{this.TE.Ax(A.aaL(A.ach.ApY));this.Qs.Ax(A.aaL(A.ach.ApY));}},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(this.Qs={I:this
},0);A.acg.Am._Init.call(this.TE={I:this},0);this.__proto__=C.Kh;this.H(Axs);this.
Qs.H(Axs);this.Qs.Ct(1);this.TE.H(Axs);this.TE.Ct(0);this.J(this.Qs,0);this.J(this.
TE,0);this.Qs.Ax(A.aaL(A.ach.ApY));this.TE.Ax(A.aaL(A.ach.ApY));},_Done:function(
){this.__proto__=A.Core.O;this.Qs._Done();this.TE._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Qs._ReInit();this.TE._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Qs)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.TE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.AQs={FT:null,B8:null,De:null,Dw:null,J$:null,YQ:10,Aqh:0,ADc:0,AQH:0,Ax5:false
,LO:false,Bau:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).Aq.La())A._GetAutoObject(A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.
Device).Aq.Hz().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).W.Gb();A._GetAutoObject(
A.Device.Helper).ApG(A._GetAutoObject(A.Device.Helper).W);A.zX([this,this.Azx],this.
C6.Q,0);A.zX([this,this.BxB],this.De.Q,0);A.zX([this,this.AAk],this.Dw.Q,0);A.zX([
this,this.AAk],this.Dw.Hw.Q,0);A.zX([this,this.AAk],[this,this.AQ_,this.AEm],0);
A.zX([this,this.Hu],[B=A._GetAutoObject(A.Device.Device),B.A7x,B.A$m],0);A.zX([this
,this.BcT],this.B8.Q,0);A.pe([this,this.Azx],this);A.pe([this,this.Hu],this);A.pe([
this,this.AAk],this);A.pe([this,this.BcT],this);},CJ:function(G){if(!this.Ax5){this.
Ax5=true;A.pe([this,this.WM],this);}else C.HR.CJ.call(this,G);},AfE:function(G){
this.AQH=this.YQ;this.BaC(this);},Ee:function(G){A._GetAutoObject(A.Device.Helper
).W.Ha();A._GetAutoObject(C.AY).Fm();},AtB:function(){this.N.BU(A.jV);this.N.C2(
A.aaL(A.ach.ACt));this.N.Cb=[this,this.AxR];},Azs:function(G){A._GetAutoObject(C.
AY).B1(63);},AEm:function(E){if(this.YQ===E)return;this.YQ=E;A.abo([this,this.AQ_
,this.AEm],0);},BaC:function(G){var F;if(!this.YQ||(this.Bau===true)){A._GetAutoObject(
A.Device.Device).A6(24,false,CO,0,null);if(this.ADc===1)A._GetAutoObject(A.Device.
Device).A6(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A6(23,
true,this.ADc.toFixed(),2000,null);this.Ee(this);return;}this.FT.Gb();this.FT.DT(
A._GetAutoObject(A.Device.Helper).W.AnimalType);this.FT.NM(A._GetAutoObject(A.Device.
Helper).W.Breed);this.FT.Sh(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
FT.JG(A._GetAutoObject(A.Device.Helper).W.Gender);this.FT.M8(A._GetAutoObject(A.
Device.Helper).W.NaisId);this.FT.M9(A._GetAutoObject(A.Device.Helper).W.TransponderId
);this.FT.T5(A._GetAutoObject(A.Device.Helper).W.VisualId);var AkV=A._GetAutoObject(
A.Device.Helper).AZN(this.FT,(F=this.Dw.HS.Hg,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Aq);if(!AkV)this.Air();else{A._GetAutoObject(A.Device.Helper).AI1(
this.FT,AkV,(F=this.Dw.HS.Hg,F[1].call(F[0])),this.YQ-1,[this,this.Ao4]);A._GetAutoObject(
A.Device.Device).A6(24,false,CO,0,null);}},Hu:function(G){var B;if(A._GetAutoObject(
A.Device.Helper).AmA())this.Dd.Y(true);else this.Dd.Y(false);if(this.LO){this.De.
Y(false);this.B8.U(A.aaR(A.acf.ABx));this.B8.ADM(A.aaL(A.ach.AeA));}else{this.De.
Y(true);this.B8.U(A.aaR(A.acf.Akx));this.B8.ADM(null);}if((this.Z.Bgr(this.AR)>=
0)&&(((this.AR.T&0x1)===0x1)===false))this.LF(this.Z.Vp(this.AR,0x1));this.An();
},ARB:function(E){if(this.Aqh===E)return;this.Aqh=E;A.abo([this,this.A6W,this.ARB
],0);},AAk:function(G){var F;var AIM=(F=this.Dw.Q,F[1].call(F[0]));var Aza=-1;switch((
F=this.Dw.HS.Hg,F[1].call(F[0]))){case 0:Aza=AIM+((F=A._GetAutoObject(A.Device.Helper
).Ba9(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).W.Gender),F[1].call(F[0]))*(this.YQ-1));break;case 1:Aza=(AIM+this.
YQ)-1;break;case 3:case 2:case 5:case 4:switch(this.Dw.Hw.AC.Q){case 0:Aza=(AIM+
this.YQ)-1;break;case 1:Aza=(AIM-this.YQ)+1;break;default:throw new Error(AWj+this.
Dw.Hw.AC.Q.toFixed());}break;default:throw new Error(AWk+this.Dw.Hw.AC.Q.toFixed(
));}this.ARB(Aza);},BxB:function(G){A.pe([this,this.Hu],this);A.pe([this,this.Atl
],this);},Azx:function(G){A._GetAutoObject(A.Device.Helper).ATL(A._GetAutoObject(
A.Device.Helper).W,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LO);A.pe([this,this.AAk],this);},Ao4:function(G){var F;var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case 22:case 21:case 48:if((
As.Id===48)&&(As.PopupState===7))this.AoY();else switch((F=this.Dw.HS.Hg,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.LF(this.Dw);break;case 0:this.LF(this.De
);break;case 1:this.LF(this.B8);break;default:throw new Error(Axt+(F=this.Dw.HS.
Hg,F[1].call(F[0])).toFixed());}break;case 25:this.LF(this.B8);break;case 47:if(
As.PopupState===7)this.AoY();else this.LF(this.B8);break;case 43:this.LF(this.De
);break;case 42:{this.LF(this.B8);if(As.PopupState===7)A.pe([this,this.WM],this);
}break;case 41:break;default:A.ab5("%s%e",Asq,As.Id);}},Air:function(){this.FT.Cp(
A._GetAutoObject(A.Device.Device).Aq);this.ADc=this.ADc+1;if(A._GetAutoObject(A.
Device.Helper).AmA()){if(A._GetAutoObject(A.Device.Device).Bq.La()){A._GetAutoObject(
A.Device.Device).A6(24,false,ZG,0,null);A._GetAutoObject(A.Device.Device).A6(50,
true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),0,null);}else{var L0=A.
_GetAutoObject(A.Device.Device).Aq.K7(0,this.FT.Id);A._GetAutoObject(A.Device.Device
).Sq(L0);var BT=A._NewObject(A.Device.Rating,0);BT.Gb();BT.OnSetAnimalId(this.FT.
Id);BT.OnSetBodyWeight(this.Kz);BT.OnSetTimestamp(this.FT.DateOfBirth);BT.Cp(A._GetAutoObject(
A.Device.Device).Bq);}}this.AoY();},AoY:function(){var B;var F,CL;if(!!(F=this.B8.
Q,F[1].call(F[0]))){(F=this.B8.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.LO)(
CL=this.De.Q,CL[2].call(CL[0],(F=this.B8.Q,F[1].call(F[0]))));}if(!this.LO)(CL=this.
De.Q,CL[2].call(CL[0],A._GetAutoObject(A.Device.Helper).A9N(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.De.Q,F[1].call(
F[0])),this.De.Ajk(),this.De.Ajm())));var IM=null;switch((F=this.Dw.HS.Hg,F[1].call(
F[0]))){case 3:IM=[B=A._GetAutoObject(A.Device.Device),B.Avs,B.AxJ];break;case 2:
IM=[B=A._GetAutoObject(A.Device.Device),B.Avt,B.AxK];break;case 4:case 5:IM=[B=A.
_GetAutoObject(A.Device.Device),B.AmY,B.An0];break;default:;}if(!!IM){switch((F=
this.Dw.J6.Vm,F[1].call(F[0]))){case 1:IM[2].call(IM[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IM[2].call(IM[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}(F=this.Dw.Q,F[2].call(F[0],IM[1].call(IM[0])));
}var Xg=100-((this.YQ/this.AQH)*100);A._GetAutoObject(A.Device.Device).A6(24,true
,(((this.AQH.toFixed()+Asr)+(Xg|0).toFixed())+Asr)+(F=this.Dw.Q,F[1].call(F[0])).
toFixed(),0,[this,this.BxL]);this.AEm(this.YQ-1);A.aaS([this,this.BaC],null);},BxL:
function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.
PopupState===5))this.Bau=true;},Ao5:function(G){var F;C.HR.Ao5.call(this,G);(F=this.
Dd.Q,F[2].call(F[0],this.Dd.Ans));switch(this.B4.AC.Q){case 0:{this.J$.KH(A.aaR(
A.acf.ALQ));this.J$.Kf(A.aaR(A.acf.ALR));}break;case 1:{this.J$.KH(A.aaR(A.acf.Bfj
));this.J$.Kf(A.aaR(A.acf.Bfk));}break;case 2:{this.J$.KH(A.aaR(A.acf.Bhe));this.
J$.Kf(A.aaR(A.acf.Bhf));}break;default:throw new Error(Asj);}},Aeo:function(E){if(
this.LO===E)return;this.LO=E;A.abo([this,this.Avu,this.Aeo],0);},Atl:function(G){
var F,CL,SP;this.Aeo(((F=this.B8.Q,F[1].call(F[0]))===(CL=this.De.Q,CL[1].call(CL[
0])))&&!!(SP=this.B8.Q,SP[1].call(SP[0])));A.pe([this,this.Hu],this);},BcT:function(
G){A.pe([this,this.Atl],this);},AQ_:function(){return this.YQ;},A6W:function(){return this.
Aqh;},Avu:function(){return this.LO;},_Init:function(aArg){C.HR._Init.call(this,
aArg);C.Avf._Init.call(this.B8={I:this},0);C.QU._Init.call(this.De={I:this},0);C.
AFo._Init.call(this.Dw={I:this},0);C.AS4._Init.call(this.J$={I:this},0);this.__proto__=
C.AQs;var B;this.Dr(C.AB9);this.B8.H(AnP);this.B8.Aj(true);this.B8.U(A.aaR(A.acf.
Akx));this.B8.Aq3(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.ArM));this.
B8.Aq4(A.aaR(A.acf.AjS));this.De.H(AWl);this.De.Aj(true);this.De.U(A.aaR(A.acf.YN
));this.De.Are(false);this.Dw.H(AWm);this.Dw.Aj(true);this.Dw.U(A.aaR(A.acf.A5h)
);this.Dw.Bx(0);this.J$.H(AWn);this.J$.Aj(true);this.J$.U(A.aaR(A.acf.A6r));this.
J$.Gk(1);this.J$.E1(500);this.J$.Kf(A.aaR(A.acf.ALR));this.J$.KH(A.aaR(A.acf.ALQ
));this.J$.A7Z(A.aaR(A.acf.Aqh)+A.aaR(A.acf.Colon));this.J(this.B8,0);this.J(this.
De,0);this.J(this.Dw,0);this.J(this.J$,0);this.FT=A._NewObject(A.Device.Animal,0
);this.B8.AQ=[this,this.WM];this.B8.LS([this,this.WM]);this.B8.LU(A.aaL(A.ach.AeA
));this.B8.Au([B=A._GetAutoObject(A.Device.Helper).W,B.AjU,B.M9]);this.B8.PB([B=
A._GetAutoObject(A.Device.Device),B.Abq,B.Acj]);this.B8.QM([B=A._GetAutoObject(A.
Device.Device),B.Abr,B.Ack]);this.B8.TY([B=A._GetAutoObject(A.Device.Device),B.AmV
,B.AnZ]);this.B8.Aeo([this,this.Avu,this.Aeo]);this.De.Gj([this,this.D9,this.GQ]
);this.De.LS([this,this.WM]);this.De.LU(A.aaL(A.ach.AeA));this.De.T0([B=this.Gender.
Animal,B.V6,B.JG]);this.De.PB([B=A._GetAutoObject(A.Device.Device),B.Abq,B.Acj]);
this.De.QM([B=A._GetAutoObject(A.Device.Device),B.Abr,B.Ack]);this.De.TY([B=A._GetAutoObject(
A.Device.Device),B.AmV,B.AnZ]);this.De.Au([B=A._GetAutoObject(A.Device.Helper).W
,B.AmZ,B.M8]);this.De.Am3([B=this.AnimalType.Animal,B.PA,B.DT]);this.Dw.Gj([this
,this.D9,this.GQ]);this.Dw.LS([B=this.Dw,B.FH]);this.Dw.LU(A.aaL(A.ach.Edit));this.
Dw.Au([B=A._GetAutoObject(A.Device.Helper).W,B.AqQ,B.T5]);this.Dw.A7G(A._GetAutoObject(
A.Device.Helper).W);this.J$.Au([this,this.AQ_,this.AEm]);this.J$.BjM([this,this.
A6W,this.ARB]);this.Init(aArg);},_Done:function(){this.__proto__=C.HR;this.B8._Done(
);this.De._Done();this.Dw._Done();this.J$._Done();C.HR._Done.call(this);},_ReInit:
function(){C.HR._ReInit.call(this);this.B8._ReInit();this.De._ReInit();this.Dw._ReInit(
);this.J$._ReInit();this.B8.U(A.aaR(A.acf.Akx));this.B8.Aq3(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CO)+A.aaR(A.acf.ArM));this.B8.Aq4(A.aaR(A.acf.AjS));this.De.U(
A.aaR(A.acf.YN));this.Dw.U(A.aaR(A.acf.A5h));this.J$.U(A.aaR(A.acf.A6r));this.J$.
Kf(A.aaR(A.acf.ALR));this.J$.KH(A.aaR(A.acf.ALQ));this.J$.A7Z(A.aaR(A.acf.Aqh)+A.
aaR(A.acf.Colon));},_Mark:function(D){var B;C.HR._Mark.call(this,D);if((B=this.FT
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dw)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.J$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.ASx={B$:null,RatingMode:null,KG:function(){if(!this.Bw){this.Bw=A._NewObject(
C.N,0);this.Bw.Cb=null;this.Bw.Cg=null;this.Bw.Cw=[this,this.Xa];this.Bw.BU(A.jV
);this.Bw.Cm(null);this.Bw.CS(A.aaL(A.ach.Vz));}return this.Bw;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.B$._Init.call(this.B$={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.ASx;var B;this.
H(Q5);this.B$.H(Asn);this.B$.U(A.aaR(A.acf.A9G));this.J(this.B$,0);this.B$.Au([B=
this.RatingMode,B.B_,B.Ca]);this.B$.CK(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.B$._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.B$._ReInit(
);this.RatingMode._ReInit();this.B$.U(A.aaR(A.acf.A9G));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.B$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
Bdp],[B=A._GetAutoObject(A.Device.Device),B.ARc,B.AYA],0);A.pe([this,this.Bdp],this
);},Do:function(){return 2;},Gg:function(aIndex){return this.RatingModeToString.
BX(this.C9(aIndex));},Au:function(E){C.C3.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Av_(E);},Bdp:function(G){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.B_,this.Ca],0);},_Init:function(aArg){C.C3._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cv.Set(0,0);this.Cv.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.C3;this.RatingModeToString._Done();C.C3._Done.call(this
);},_ReInit:function(){C.C3._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.C3._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.AL9={Wj:
function(G){C.AlY.Wj.call(this,G);if(A._GetAutoObject(A.Device.Helper).W.Aqd()){
A._GetAutoObject(A.Device.Helper).W.Aj5(false);A._GetAutoObject(A.Device.Helper).
W.Cp(A._GetAutoObject(A.Device.Device).Aq);}},_Init:function(aArg){C.AlY._Init.call(
this,aArg);this.__proto__=C.AL9;},_className:"Application::ControlMeasureTemperatureScreen"
};C.G7={DE:A.jV,U:function(E){if(this.DE===E)return;this.DE=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.G7;},_className:"Application::BaseItem"
};C.AT0={B$:null,WeightRecordingMode:null,KG:function(){if(!this.Bw){this.Bw=A._NewObject(
C.N,0);this.Bw.Cb=null;this.Bw.Cg=null;this.Bw.Cw=[this,this.Xa];this.Bw.BU(A.jV
);this.Bw.Cm(null);this.Bw.CS(A.aaL(A.ach.Vz));}return this.Bw;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.B$._Init.call(this.B$={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AT0;var B;this.H(Q5);this.B$.H(Asn);this.B$.U(A.aaR(A.acf.Ar9));this.B$.E1(1);
this.J(this.B$,0);this.B$.Au([B=this.WeightRecordingMode,B.B_,B.Ca]);this.B$.CK(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.B$.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.B$._ReInit();this.WeightRecordingMode.
_ReInit();this.B$.U(A.aaR(A.acf.Ar9));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.B$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Do:function(){return 2;},Gg:function(aIndex){return this.
WeightRecordingModeToString.BX(this.C9(aIndex));},Au:function(E){C.C3.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Awi(E);},Init:function(aArg){var B;A.zX([this
,this.Bes],[B=A._GetAutoObject(A.Device.Device),B.A7w,B.A$l],0);A.pe([this,this.
Bes],this);},Bes:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.Ca],0);},_Init:function(aArg){C.C3._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cv.Set(0,0);this.Cv.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.C3;this.WeightRecordingModeToString.
_Done();C.C3._Done.call(this);},_ReInit:function(){C.C3._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.C3._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aap={BooleanToAutoOnOff:null,Gg:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
BX(aIndex);},_Init:function(aArg){C.FS._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aap;},_Done:function(
){this.__proto__=C.FS;this.BooleanToAutoOnOff._Done();C.FS._Done.call(this);},_ReInit:
function(){C.FS._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.FS._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.AwT={A5v:function(){var B;this.
Awz(1);this.Jh(0,3);this.Vb(0,0,(B=this.M)[3]-B[1]);this.A21(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A21(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.Vj(0);},_Init:
function(aArg){C.AAw._Init.call(this,aArg);this.__proto__=C.AwT;},_className:"Application::Triangle"
};C.ASc={Z:null,Init:function(aArg){this.Bu7(this);},Bu6:function(PX){var Aa=A._NewObject(
C.AMd,0);Aa.H(BC);Aa.U(PX);Aa.Aj(true);Aa.Ar(false);Aa.Bf(true);this.J(Aa,0);this.
AsR(this);},AsR:function(G){var B;var Ak3=1;var A0X=0;var X=this.Z.Ag;var Cr=null;
var KX=null;while(!!X&&!((X.T&0x200)===0x200)){Cr=(C.OG.isPrototypeOf(X)?X:null);
if(((X.T&0x400)===0x400)&&!!Cr){var AJU=(B=Cr.V.B3.A4_(Cr.V.String,0,-1))[2]-B[0
];if(!!(C.Mf.isPrototypeOf(X)?X:null))AJU=AJU+20;if(A0X<AJU)A0X=AJU;Cr.H(A.abL(Cr.
M,120));Cr.H(A.abI(Cr.M,28));Cr.H(A.abM(Cr.M,this.M[0]));Cr.H(A.abO(Cr.M,((B=this.
M)[3]-B[1])-(Ak3*28)));Ak3=Ak3+1;}else{KX=(A.acg.DR.isPrototypeOf(X)?X:null);if(((
X.T&0x400)===0x400)&&!!KX){var C$=((B=this.M)[3]-B[1])-((Ak3-1)*28);KX.DY([this.
M[0],KX.Ej[1]]);KX.DY([KX.Ej[0],C$]);KX.DK([this.M[0]+120,KX.Et[1]]);KX.DK([KX.Et[
0],C$]);}}X=X.Ag;}this.Byr(A0X,28);},Byr:function(aWidth,Bue){var B;var X=this.Z.
Ag;var Cr=null;var KX=null;aWidth=aWidth+20;if(aWidth>(C.ArN[0]-10))aWidth=C.ArN[
0]-10;while(!!X&&!((X.T&0x200)===0x200)){Cr=(C.OG.isPrototypeOf(X)?X:null);if(((
X.T&0x400)===0x400)&&!!Cr){Cr.V.Text.A2(0x14);Cr.V.Text.HG(10);Cr.H(A.abL(Cr.M,aWidth
));Cr.H(A.abI(Cr.M,Bue));Cr.H(A.abM(Cr.M,this.M[2]-((B=Cr.M)[2]-B[0])));}else{KX=(
A.acg.DR.isPrototypeOf(X)?X:null);if(((X.T&0x400)===0x400)&&!!KX){KX.DY([this.M[
2]-aWidth,KX.Ej[1]]);KX.DK([this.M[2],KX.Et[1]]);}}X=X.Ag;}},Bu7:function(G){var
Aa=A._GetAutoObject(C.BW).Ap6;while(!!Aa){if(!!(C.Awo.isPrototypeOf(Aa)?Aa:null)
){var EM=(C.Awo.isPrototypeOf(Aa)?Aa:null);this.Bu5(EM.DE,EM.AQ,EM.Bv,EM.A9m);}else
if(!!(C.Awq.isPrototypeOf(Aa)?Aa:null)){var EM=(C.Awq.isPrototypeOf(Aa)?Aa:null);
this.Bva(EM.DE,EM.AQ,EM.Bv,EM.LN);}else if(!!(C.Aew.isPrototypeOf(Aa)?Aa:null)){
var EM=(C.Aew.isPrototypeOf(Aa)?Aa:null);this.Bu4(EM.DE,EM.AQ,EM.Bv);}else if(!!(
C.Akb.isPrototypeOf(Aa)?Aa:null)){var EM=(C.Akb.isPrototypeOf(Aa)?Aa:null);this.
Bu6(EM.DE);}else if(!!(C.AEU.isPrototypeOf(Aa)?Aa:null))this.Bvb();Aa=Aa.Mk;}A._GetAutoObject(
C.BW).Clear();A.pe([this,this.AsR],this);},Bu4:function(PX,Acu,Ahv){var Aa=A._NewObject(
C.Mf,0);Aa.H(BC);Aa.U(PX);Aa.AQ=Acu;Aa.Aj(true);Aa.Ar(Ahv);Aa.Bf(true);this.J(Aa
,0);this.AsR(this);},Bvb:function(){var KX=A._NewObject(A.acg.DR,0);KX.L(A.jb.Bh
);KX.Aj(true);KX.NO(3);this.J(KX,0);this.AsR(this);},Bu5:function(PX,Acu,Ahv,A0F
){var Aa=A._NewObject(C.ApW,0);Aa.H(BC);Aa.U(PX);Aa.AQ=Acu;Aa.Aj(true);Aa.Ar(Ahv
);Aa.Bf(true);Aa.AD3(A0F);this.J(Aa,0);this.AsR(this);},Bva:function(PX,Acu,Ahv,
A0F){var Aa=A._NewObject(C.AMc,0);Aa.H(BC);Aa.U(PX);Aa.AQ=Acu;Aa.Aj(true);Aa.Ar(
Ahv);Aa.Bf(true);Aa.AD3(A0F);this.J(Aa,0);this.AsR(this);},_Init:function(aArg){
C.OverlayMenu._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);this.
__proto__=C.ASc;this.H(Q5);this.Z.H(Q5);this.J(this.Z,0);this.Init(aArg);},_Done:
function(){this.__proto__=C.OverlayMenu;this.Z._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Z._ReInit();},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.AeF={_Init:function(
){A.acl.AeF._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A8P={Ap6:null,AgJ:null,Qk:function(PX){var EM=A._NewObject(C.Akb
,0);EM.DE=PX;this.J(EM);},Clear:function(){this.Ap6=null;this.AgJ=null;},Gu:function(
){var KX=A._NewObject(C.AEU,0);this.J(KX);},J:function(A$V){if(!this.Ap6){this.Ap6=
A$V;this.AgJ=this.Ap6;}else{this.AgJ.Mk=A$V;this.AgJ=this.AgJ.Mk;}},Tc:function(
PX,Acu){var EM=A._NewObject(C.Aew,0);EM.DE=PX;EM.AQ=Acu;this.J(EM);},A2Y:function(
PX,Acu,Buk){var EM=A._NewObject(C.Awo,0);EM.DE=PX;EM.AQ=Acu;EM.A9m=Buk;this.J(EM
);},Xm:function(PX){var EM=A._NewObject(C.Aew,0);EM.DE=PX;EM.Bv=false;this.J(EM);
},AiO:function(PX,Acu,Bui){var EM=A._NewObject(C.Awq,0);EM.DE=PX;EM.AQ=Acu;EM.LN=
Bui;this.J(EM);},_Init:function(aArg){this.__proto__=C.A8P;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ap6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AgJ)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Application::OptionsOverlayManagerClass"};C.BW={_Init:
function(){C.A8P._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.Awp={Mk:null,_Init:function(aArg){this.__proto__=C.Awp;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Mk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AM$={AlW:null,AqU:function(E){if(this.AlW===
E)return;if(!!this.Ab)this.Ab.Y5(this);if(!!this.AlW)this.ApZ(this.AlW,A._GetAutoObject(
C.ArR),null,null,null,null,false);this.AlW=E;if(!!this.AlW)this.Akf(this.AlW,A._GetAutoObject(
C.ArR),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);this.__proto__=C.AM$;this.H(BC);},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.AlW)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.Wb={_Init:function(){C.AM$._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
NP={Init:function(aArg){var CW=A._NewObject(C.ASd,0);CW.H(this.M);this.Akf(CW,A.
_GetAutoObject(C.Anp),null,A._GetAutoObject(C.Anp),A._GetAutoObject(C.Anp),null,
null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.
__proto__=C.NP;this.H(Q5);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.ArR={_Init:function(){C.AS6._Init.call(this,0);this.ABv=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ASd={AI:null,_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.AI={I:this},0);this.
__proto__=C.ASd;this.H(AGU);this.Ds(0);this.AI.AW(0x3F);this.AI.H(AGU);this.AI.L(
0xAAFFFFFF);this.J(this.AI,0);},_Done:function(){this.__proto__=A.Core.O;this.AI.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AI._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.AS5={RQ:function(){var B;var Ao=(A.acl.Aex.isPrototypeOf(B=A.acl.AdM.RQ.call(this
))?B:null);if(!Ao)throw new Error(Ash);Ao.Ck.Cq=255;Ao.Ck.BY=0;return Ao;},RP:function(
){var B;var Ao=(A.acl.Awn.isPrototypeOf(B=A.acl.AdM.RP.call(this))?B:null);if(!Ao
)throw new Error(Ash);Ao.ES.Cq=0;Ao.ES.BY=255;Ao.Dl=true;return Ao;},_Init:function(
aArg){A.acl.AdM._Init.call(this,aArg);this.__proto__=C.AS5;},_className:"Application::ShadeOverlayTransition"
};C.Anp={_Init:function(){C.AS5._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Akn={Ans:0,A0h:false,Init:function(aArg){
},Ai:function(Ae){var F;C.I1.Ai.call(this,Ae);this.BP.L(this.V.AP);if(!!this.Q){
var Bzr=(F=this.Q,F[1].call(F[0]));if((F=this.Q,F[1].call(F[0]))>0)this.BP.R((A.
_GetAutoObject(A.Device.Converter).AkD(Bzr)+CO)+A._GetAutoObject(A.acj.DM).Afu()
);else this.BP.R(A.aaR(A.acf.AjS));}},JY:function(G){var B;var Bep=(this.A0h===false
)&&(this.AK<=this.Ga);if(Bep)this.Bx(this.Ans);this.A2D(this.AK,4);if(Bep){this.
Bx(this.AK-this.Ajy);this.A0h=true;}C.I1.JY.call(this,G);},JT:function(G){this.A2D(
this.AK,5);C.I1.JT.call(this,G);},Bx:function(E){this.A2D(E,4);E=(((E+((this.Ajy
/2)|0))/this.Ajy)|0)*this.Ajy;if(!E)this.A0h=false;C.I1.Bx.call(this,E);},AgV:function(
E){if(this.Ans===E)return;this.Ans=E;},A2D:function(BtZ,Gn){this.ARD(A._GetAutoObject(
A.acj.DM).Bbb(BtZ,Gn));},_Init:function(aArg){C.I1._Init.call(this,aArg);this.__proto__=
C.Akn;this.H(JN);this.Ans=this.Ga;this.Kj(this.HV,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.BAP={None:0,Left:1,BBs:2,Right:3};C.Al1={AZE:
null,Fo:null,D$:null,Background:null,AmN:null,FQ:null,KD:A.jV,ACV:null,Init:function(
aArg){var B;A.zV([this,this.Afz],A._GetAutoObject(A.Device.Device).Aq,0);A.zX([this
,this.A1P],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fx,B.FB],0);A.pe([this,this.
LE],this);A.pe([this,this.A1P],this);this.A8(this.D$);},Ai:function(Ae){C.OverlayMenu.
Ai.call(this,Ae);this.DD(this);},KG:function(){if(!this.Bw)this.Bw=A._NewObject(
C.N,0);return this.Bw;},Fd:function(G){C.OverlayMenu.Fd.call(this,G);A._GetAutoObject(
A.Device.Device).Aq.Bm(this.AZE);},CJ:function(G){C.OverlayMenu.CJ.call(this,G);
this.AJw();},Ao9:function(G){var Aa=(C.AA2.isPrototypeOf(G)?G:null);var Hr;if(!!
Aa)Hr=Aa.Hr;else Hr=this.FQ.Fy();if(Hr>=A._GetAutoObject(A.Device.Device).Aq.Ch(
))return;A._GetAutoObject(A.Device.Helper).HD(Hr);A.pe([this,this.Xa],this);},AJw:
function(){},Afz:function(G){this.An();},A1H:function(G){if(this.FQ.Fy()<(A._GetAutoObject(
A.Device.Device).Aq.Ch()-1))this.FQ.GS(this.FQ.Fy()+1);},A1I:function(G){if(this.
FQ.Fy()>0)this.FQ.GS(this.FQ.Fy()-1);},DD:function(G){var Gr=A._GetAutoObject(A.
Device.Device).Aq.Ch();var MJ=this.Bw;if(!MJ)return;MJ.CS(A.aaL(A.ach.AdY));MJ.Cw=[
this,this.Xa];if(Gr<=0){MJ.Cm(null);MJ.C2(null);MJ.Cg=null;MJ.Cb=null;MJ.Y3=false;
MJ.Y4=false;}else if(Gr===1){MJ.Cm(null);MJ.C2(A.aaL(A.ach.AdZ));MJ.Cg=null;MJ.Cb=[
this,this.Ao9];MJ.Y3=false;MJ.Y4=false;}else{MJ.Cm(A.aaL(A.ach.Aqk));MJ.C2(A.aaL(
A.ach.Aqr));MJ.Cg=[this,this.A1H];MJ.Cb=[this,this.A1I];MJ.Y3=true;MJ.Y4=true;}}
,LE:function(G){this.BdR(this);this.AZE=A._GetAutoObject(A.Device.Device).Aq.Filter;
this.AJw();},BkC:function(E){if(this.ACV===E)return;this.ACV=E;A.pe([this,this.Bxy
],this);},Bxy:function(G){this.BdR(this);},BdR:function(G){var B;if(!!this.Fo)this.
HH(this.Fo);this.Fo=(C.Es.isPrototypeOf(B=A._NewObject(this.ACV,0))?B:null);if(!
!this.Fo){this.Fo.H(AWo);this.J(this.Fo,0);}},A1P:function(G){if(!!A._GetAutoObject(
A.Device.Device).Aq.Filter&&!!A._GetAutoObject(A.Device.Device).Aq.Filter.DX(1,4
))this.FQ.Dq(A.aaR(A.acf.AQB));else this.FQ.Dq(this.KD);},Dq:function(E){if(this.
KD===E)return;this.KD=E;A.pe([this,this.A1P],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.D$._Init.call(this.D$={I:this},0);A.acg.AI._Init.call(this.
Background={I:this},0);A.acg.AI._Init.call(this.AmN={I:this},0);C.FQ._Init.call(
this.FQ={I:this},0);this.__proto__=C.Al1;this.H(Q5);this.D$.H(BC);this.D$.A72(A.
jb.C0);this.D$.A73(A.jb.Text);this.Background.H(E4);this.Background.L(A.jb.Bl2);
this.AmN.H(AGV);this.AmN.L(A.jb.C0);this.FQ.H(AGV);this.FQ.NN(C.AA2);this.ACV=C.
AOf;this.KD=A.aaR(A.acf.Avj);this.J(this.D$,0);this.J(this.Background,0);this.J(
this.AmN,0);this.J(this.FQ,0);this.D$.AQ=[this,this.Ao9];this.D$.Aby(A._NewObject(
C.X3,0));this.FQ.YV(A._GetAutoObject(A.Device.Device).Aq);this.FQ.YW([this,this.
Ao9]);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.D$._Done(
);this.Background._Done();this.AmN._Done();this.FQ._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.D$._ReInit();this.
Background._ReInit();this.AmN._ReInit();this.FQ._ReInit();this.Dq(A.aaR(A.acf.Avj
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.AZE)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fo)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AmN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FQ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalSearchOverlay"};
C.AA2={AN:null,CX:null,Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.V.H(A.abN(
this.V.M,((aSize[0]*65)/100)|0));this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.CX.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.CX.C7(this.V.AP);},Init:function(aArg){},Cc:function(Ac){if(!this.
AX)return;this.Hr=Ac;if(!!this.AX){this.U(this.AX.CA(Ac,1).toFixed());this.CX.DT(
this.AX.Amp(Ac,14));this.CX.ADO(this.AX.IU(Ac,13));this.CX.Aen(this.AX.HU(Ac,8));
this.CX.T2(this.AX.HU(Ac,11));this.CX.Aeq(this.AX.HU(Ac,12));this.CX.Aes(this.AX.
CA(Ac,5));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AI.
_Init.call(this.AN={I:this},0);C.CX._Init.call(this.CX={I:this},0);this.__proto__=
C.AA2;this.H(ON);this.AN.L(A.jb.Bb);this.CX.H(AWp);this.J(this.AN,0);this.J(this.
CX,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AN._Done();this.
CX._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.
AN._ReInit();this.CX._ReInit();},_Mark:function(D){var B;C.Ba._Mark.call(this,D);
if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::CalfListSmallItem"};C.X3={Q:null,Init:function(
aArg){var B;this.A14(this);this.Au([B=A._GetAutoObject(A.Device.Device).Aq,B.Fx,
B.FB]);},A7E:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.Q&&
!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Gy();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DX(1,4))?B:null);}else{Filter=
A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!FilterCriterion)Filter.
QQ(FilterCriterion);var Az5=this.AgL();if(Az5>0){FilterCriterion=A._NewObject(A.
Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,Az5,false);Filter.
CZ(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter));this.A0.AjY(false
);},Btn:function(s){this.A7E(s);},A14:function(G){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).Gy(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DX(1,4))?
B:null);if(!!FilterCriterion)Filter.QQ(FilterCriterion);(F=this.Q,F[2].call(F[0]
,Filter));}},BC_:function(s){this.A14(s);},Au:function(E){if(A.aaZ(this.Q,E))return;
if(!!this.Q)A.z$([this,this.Acn],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Acn],
E,0);if(!!E)A.pe([this,this.Acn],this);},Dc:function(G){var B;var F;if(!(F=this.
Q,F[1].call(F[0]))){this.A0.AD1(-1);this.DT(0);return;}var Ax1=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DX(1,4))?B:null);if(!Ax1){this.A0.AD1(
0);this.A0.AjY(true);}else this.A0.AD1(Ax1.A4);var AxU=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DX(14,0))?B:null);if(!!AxU)this.DT(AxU.
A4);else this.DT(0);},Acn:function(s){this.Dc(s);},_Init:function(aArg){C.AuQ._Init.
call(this,aArg);this.__proto__=C.X3;this.A0.AD1(0);this.A0.Dj=[this,this.Btn];this.
Init(aArg);},_Mark:function(D){var B;C.AuQ._Mark.call(this,D);if((B=this.Q)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimal"
};C.Ap2={BirthType:null,EaseOfDelivery:null,B8:null,Ea:null,Aa9:null,GO:null,Co:
null,Aa7:null,ALx:false,Init:function(aArg){this.ALx=A._GetAutoObject(A.Device.Helper
).W.Aqu();if(this.ALx)this.Aej(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight
);else this.Aej(0);if(!A._GetAutoObject(A.Device.Helper).W.TransponderId){this.B8.
LS([this,this.WM]);this.B8.LU(A.aaL(A.ach.AeA));this.B8.AQ=[this,this.WM];}this.
Ea.Are(!!A._GetAutoObject(A.Device.Helper).W.NaisId);A.zX([this,this.Hu],this.Ea.
Q,0);A.zX([this,this.Hu],this.B8.Q,0);A.pe([this,this.Hu],this);},AfE:function(G
){if(((this.Ea.Arz===false)&&!!A._GetAutoObject(A.Device.Helper).W.NaisId)&&A._GetAutoObject(
A.Device.Helper).APF(A._GetAutoObject(A.Device.Helper).W.NaisId)){A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Q1(A._GetAutoObject(
A.Device.Helper).W.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).W.Cp(
A._GetAutoObject(A.Device.Device).Aq);if(this.Kz>0){if(this.ALx){var Ac=A._GetAutoObject(
A.Device.Device).Bq.K7(0,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);
if(Ac>=0){var BT=A._NewObject(A.Device.Rating,0);BT.EK(Ac,A._GetAutoObject(A.Device.
Device).Bq);BT.OnSetBodyWeight(this.Kz);BT.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).W.DateOfBirth);BT.Cp(A._GetAutoObject(A.Device.Device).Bq);}else A.ab5("%s%i"
,AWq,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bq.La())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bq.Hz().toFixed(),0,null);else{var BT=A._NewObject(A.Device.Rating
,0);BT.Gb();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BT.OnSetBodyWeight(
this.Kz);BT.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);BT.Cp(
A._GetAutoObject(A.Device.Device).Bq);}}A._GetAutoObject(C.AY).Fm();},Ee:function(
G){A._GetAutoObject(A.Device.Helper).W.EK(A._GetAutoObject(A.Device.Helper).W.CF
,A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(C.AY).Fm();},AtB:function(
){this.N.BU(A.jV);this.N.C2(A.aaL(A.ach.Amx));this.N.Cb=[this,this.AxR];},Azs:function(
G){A._GetAutoObject(C.AY).B1(32);},Hu:function(G){var F;var ML=(F=this.Ea.Q,F[1].
call(F[0]));var AfP=(F=this.B8.Q,F[1].call(F[0]));var A2x=true;if(!!ML&&(AfP===ML
))A2x=false;A._GetAutoObject(A.Device.Helper).Ms(this.B8,A2x);this.Ea.BjE(!A2x);
},_Init:function(aArg){C.HR._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.Avf._Init.
call(this.B8={I:this},0);C.QU._Init.call(this.Ea={I:this},0);C.AbT._Init.call(this.
Aa9={I:this},0);C.B$._Init.call(this.GO={I:this},0);C.Sr._Init.call(this.Co={I:this
},0);C.B$._Init.call(this.Aa7={I:this},0);this.__proto__=C.Ap2;var B;this.B8.H(Ahp
);this.B8.Aj(true);this.B8.U(A.aaR(A.acf.Akx));this.B8.Aq3(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CO)+A.aaR(A.acf.ArM));this.B8.Aq4(A.aaR(A.acf.AjS));this.Ea.H(Ahp);
this.Ea.Aj(true);this.Ea.U(A.aaR(A.acf.YN));this.Aa9.H(AWr);this.Aa9.Aj(true);this.
Aa9.U(A.aaR(A.acf.GB));this.GO.H(Ahp);this.GO.Aj(true);this.GO.U(A.aaR(A.acf.AqF
));this.Co.H(Ahp);this.Co.Aj(true);this.Co.U(A.aaR(A.acf.AdF));this.Co.AEr(true);
this.Aa7.H(Ahp);this.Aa7.Aj(true);this.Aa7.U(A.aaR(A.acf.Af8));this.J(this.B8,0);
this.J(this.Ea,0);this.J(this.Aa9,0);this.J(this.GO,0);this.J(this.Co,0);this.J(
this.Aa7,0);this.BirthType.LT(A._GetAutoObject(A.Device.Helper).W);this.EaseOfDelivery.
LT(A._GetAutoObject(A.Device.Helper).W);this.B8.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.AjU,B.M9]);this.Ea.Gj([this,this.D9,this.GQ]);this.Ea.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.AmZ,B.M8]);this.Aa9.Gj([this,this.D9,this.GQ]);this.Aa9.Au([
B=A._GetAutoObject(A.Device.Helper).W,B.AqQ,B.T5]);this.GO.Au([B=this.BirthType,
B.B_,B.Ca]);this.GO.CK(this.BirthType);this.Co.Gj([this,this.D9,this.GQ]);this.Co.
LS([B=this.Co,B.FH]);this.Co.LU(A.aaL(A.ach.Edit));this.Co.AbC([B=A._GetAutoObject(
A.Device.Helper).W,B.Avp,B.Sh]);this.Aa7.Au([B=this.EaseOfDelivery,B.B_,B.Ca]);this.
Aa7.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=C.
HR;this.BirthType._Done();this.EaseOfDelivery._Done();this.B8._Done();this.Ea._Done(
);this.Aa9._Done();this.GO._Done();this.Co._Done();this.Aa7._Done();C.HR._Done.call(
this);},_ReInit:function(){C.HR._ReInit.call(this);this.BirthType._ReInit();this.
EaseOfDelivery._ReInit();this.B8._ReInit();this.Ea._ReInit();this.Aa9._ReInit();
this.GO._ReInit();this.Co._ReInit();this.Aa7._ReInit();this.B8.U(A.aaR(A.acf.Akx
));this.B8.Aq3(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.ArM));this.
B8.Aq4(A.aaR(A.acf.AjS));this.Ea.U(A.aaR(A.acf.YN));this.Aa9.U(A.aaR(A.acf.GB));
this.GO.U(A.aaR(A.acf.AqF));this.Co.U(A.aaR(A.acf.AdF));this.Aa7.U(A.aaR(A.acf.Af8
));},_Mark:function(D){var B;C.HR._Mark.call(this,D);if((B=this.BirthType)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.B8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa7
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.AbT={Fu:null,A0:null,A3:0,IP:function(G){C.Dk.IP.call(this,G);if(!this.A3)this.
FH(this);else this.G1(this);},Ai:function(Ae){C.Dk.Ai.call(this,Ae);this.Hl.Y(false
);this.HV.Y(false);if(this.A3===1){this.A8(this.A0);if(this.G_){this.A0.Fz(A.jb.
CE);this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.A0.Fz(A.jb.C0);this.
Background.L(A.jb.CE);this.V.L(A.jb.Text);}}else{if(this.G_)this.A0.Fz(A.jb.CE);
else this.A0.Fz(A.jb.C0);this.A8(null);}},Bx:function(E){var F;var BN=this.AK;C.
Dk.Bx.call(this,E);if(this.AK!==BN){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK
));A.abo(this.Q,0);}A.abo([this,this.TX,this.A_1],0);},DD:function(G){var F;if(!
this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.
EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.
G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=null;}break;default:this.Fu.Akj((F=
this.N,F[1].call(F[0])));}},FH:function(G){this.En(1);},G1:function(G){this.En(0
);},En:function(EC){var F;if(!this.A3)this.Fu.Ai3((F=this.N,F[1].call(F[0])));this.
A3=EC;if(this.A3<0)this.A3=0;else if(this.A3>1)this.A3=1;if(this.A3===1)this.A0.
Sp(7);this.DD(this);this.An();},_Init:function(aArg){C.Dk._Init.call(this,aArg);
C.APB._Init.call(this.A0={I:this},0);this.__proto__=C.AbT;this.H(Uz);this.E1(999999
);this.V.R(Ass);this.V.L(A.jb.Bh);this.Hl.Y(false);this.HV.Y(false);this.A0.H(AWs
);this.A0.ARL(6);this.J(this.A0,0);this.A0.Au([this,this.TX,this.A_1]);this.Fu=A.
_NewObject(C.AdT,0);},_Done:function(){this.__proto__=C.Dk;this.A0._Done();C.Dk.
_Done.call(this);},_ReInit:function(){C.Dk._ReInit.call(this);this.A0._ReInit();
},_Mark:function(D){var B;C.Dk._Mark.call(this,D);if((B=this.Fu)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Do:function(){return 4;
},C9:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gg:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
BX(aIndex);},DP:function(A1){return A1;},Hj:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.At0={Z:null,Qy:null,NK:null,D7:null,Pq:null,Pn:null,Po:null,Av:null,FS:null,
ReasonOfLeaving:null,Ag3:null,MU:0,Amd:false,AA6:true,AM4:false,Aru:false,Init:function(
aArg){A.zX([this,this.A7C],[this,this.A6_,this.ARO],0);this.AgR(A._GetAutoObject(
A.Device.Helper).W.Ahj(2));this.ReasonOfLeaving.Au(this.ReasonOfLeaving.DP(A._GetAutoObject(
A.Device.Helper).W.ReasonOfLeaving));A.pe([this,this.A7C],this);},Du:function(G){
var B;var E7=0;var X=this.AR;switch(this.Cl.CI){case 6:E7=2;break;case 7:E7=7;break;
case 4:E7=4;break;case 5:E7=5;break;default:;}X=this.RY(X,E7,0x414);if(!!X)this.
A8(X);if(!!X&&((X.T&0x400)===0x400))this.Z.Hx(X,true,null,null);},Als:function(G
){A._GetAutoObject(C.AY).Fm();},Ao$:function(G){var F;if(A._GetAutoObject(A.Device.
Device).Bq.La())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Bq.Hz().toFixed(),0,null);else{var BT=A._NewObject(A.Device.Rating
,0);BT.Gb();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BT.OnSetBodyWeight(
this.MU);BT.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dy());BT.Cp(A._GetAutoObject(
A.Device.Device).Bq);}if(this.Amd){A._GetAutoObject(A.Device.Helper).W.AgU(false
);if(!A._GetAutoObject(A.Device.Helper).W.AnimalType)A._GetAutoObject(A.Device.Helper
).A5a(A._GetAutoObject(A.Device.Helper).Dy(),this.Aru);}A._GetAutoObject(A.Device.
Helper).W.AEq(this.ReasonOfLeaving.C9((F=this.NK.Q,F[1].call(F[0]))));if(this.AA6
)A._GetAutoObject(A.Device.Helper).W.M9(0);if(this.Aru)A._GetAutoObject(A.Device.
Helper).W.AvX(true);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(A.Device.
Device).Aq);this.A9n();},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[
1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},AgR:function(E){
if(this.MU===E)return;this.MU=E;},AmW:function(){return this.MU;},BcV:function(G
){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;if((As.PopupState===
4)||(As.PopupState===3)){A._GetAutoObject(C.AY).Fm();A._GetAutoObject(A.Device.Helper
).ArH();}},A7C:function(G){switch(this.Aru){case false:this.D7.U(A.aaR(A.acf.AT2
));break;case true:this.D7.U(A.aaR(A.acf.Bn2));break;default:;}},ARO:function(E){
if(this.Aru===E)return;this.Aru=E;},A6_:function(){return this.Aru;},A9n:function(
){A._GetAutoObject(A.Device.Device).A6(15,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BcV]);},Bj4:function(E){if(this.AM4===E)return;
this.AM4=E;},Bii:function(){return this.AM4;},Bjk:function(E){if(this.AA6===E)return;
this.AA6=E;},Bh9:function(){return this.AA6;},BjC:function(E){if(this.Amd===E)return;
this.Amd=E;},Bie:function(){return this.Amd;},G4:function(G){A.pe([this,this.E9]
,this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);C.AeK._Init.call(this.Qy={I:this},0);C.ArQ._Init.call(this.NK={I:this
},0);C.Akn._Init.call(this.D7={I:this},0);C.AeK._Init.call(this.Pq={I:this},0);C.
AeK._Init.call(this.Pn={I:this},0);C.AeK._Init.call(this.Po={I:this},0);C.Av._Init.
call(this.Av={I:this},0);C.FS._Init.call(this.FS={I:this},0);C.ReasonOfLeaving._Init.
call(this.ReasonOfLeaving={I:this},0);A.Device.Ag3._Init.call(this.Ag3={I:this},
0);this.__proto__=C.At0;var B;this.N.Y(true);this.N.BU(A.aaR(A.acf.Unregister));
this.Dr(C.Iy);this.Z.H(E4);this.Z.Kb(1);this.Qy.H(ZF);this.Qy.Aj(true);this.Qy.U(
A.aaR(A.acf.Amd));this.Qy.Bf(true);this.Qy.YZ(false);this.Qy.Gk(-1);this.Qy.E1(1
);this.NK.H(WK);this.NK.Aj(true);this.NK.U(A.aaR(A.acf.ReasonOfLeaving));this.NK.
Bf(true);this.NK.YZ(false);this.D7.H(Aho);this.D7.Aj(true);this.D7.U(A.aaR(A.acf.
AT2));this.D7.Bf(false);this.D7.Gk(1000);this.D7.E1(999000);this.Pq.H(WK);this.Pq.
Aj(true);this.Pq.U(A.aaR(A.acf.A3a));this.Pq.Bf(true);this.Pq.YZ(false);this.Pq.
Bx(1);this.Pq.Gk(-1);this.Pq.E1(1);this.Pn.H(ZF);this.Pn.Aj(true);this.Pn.U(A.aaR(
A.acf.A3b));this.Pn.Bf(true);this.Pn.YZ(false);this.Pn.Bx(1);this.Pn.Gk(-1);this.
Pn.E1(1);this.Po.H(WK);this.Po.Aj(true);this.Po.U(A.aaR(A.acf.A3Y));this.Po.Bf(true
);this.Po.YZ(false);this.Po.Bx(1);this.Po.Gk(-1);this.Po.E1(1);this.Av.H(Axl);this.
FS.Au(0);this.J(this.Z,0);this.J(this.Qy,0);this.J(this.NK,0);this.J(this.D7,0);
this.J(this.Pq,0);this.J(this.Pn,0);this.J(this.Po,0);this.J(this.Av,0);this.N.CS(
A.aaL(A.ach.EV));this.Z.Ei=[this,this.G4];this.Qy.Au([B=this.FS,B.B_,B.Ca]);this.
Qy.CK(this.FS);this.Qy.Aj8([this,this.Bie,this.BjC]);this.NK.Gj([this,this.D9,this.
GQ]);this.NK.LS([B=this.NK,B.FH]);this.NK.LU(A.aaL(A.ach.Edit));this.NK.Au([B=this.
ReasonOfLeaving,B.B_,B.Ca]);this.NK.CK(this.ReasonOfLeaving);this.NK.Am5(this.Ag3
);this.D7.Au([this,this.AmW,this.AgR]);this.Pq.Au([B=this.FS,B.B_,B.Ca]);this.Pq.
CK(this.FS);this.Pq.Aj8([this,this.Bii,this.Bj4]);this.Pn.Au([B=this.FS,B.B_,B.Ca
]);this.Pn.CK(this.FS);this.Pn.Aj8([this,this.A6_,this.ARO]);this.Po.Au([B=this.
FS,B.B_,B.Ca]);this.Po.CK(this.FS);this.Po.Aj8([this,this.Bh9,this.Bjk]);this.Init(
aArg);},_Done:function(){this.__proto__=C.AB;this.Z._Done();this.Qy._Done();this.
NK._Done();this.D7._Done();this.Pq._Done();this.Pn._Done();this.Po._Done();this.
Av._Done();this.FS._Done();this.ReasonOfLeaving._Done();this.Ag3._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Z._ReInit();this.Qy.
_ReInit();this.NK._ReInit();this.D7._ReInit();this.Pq._ReInit();this.Pn._ReInit(
);this.Po._ReInit();this.Av._ReInit();this.FS._ReInit();this.ReasonOfLeaving._ReInit(
);this.Ag3._ReInit();this.N.BU(A.aaR(A.acf.Unregister));this.Qy.U(A.aaR(A.acf.Amd
));this.NK.U(A.aaR(A.acf.ReasonOfLeaving));this.D7.U(A.aaR(A.acf.AT2));this.Pq.U(
A.aaR(A.acf.A3a));this.Pn.U(A.aaR(A.acf.A3b));this.Po.U(A.aaR(A.acf.A3Y));},_Mark:
function(D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Qy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pq)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Po
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ReasonOfLeaving)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ag3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"
};C.AS4={Ajh:null,Pg:null,Aur:AWt,Bg:function(aSize){C.I1.Bg.call(this,aSize);this.
V.H([0,0,aSize[0],40]);this.BP.H([0,40,aSize[0],80]);this.Hl.H([0,this.BP.M[1],40
,this.BP.M[3]]);this.HV.H([aSize[0]-40,this.BP.M[1],aSize[0],this.BP.M[3]]);},Ai:
function(Ae){var F;C.I1.Ai.call(this,Ae);this.Pg.L(this.V.AP);if(!!this.Ajh){if((
F=this.Ajh,F[1].call(F[0]))===-1)this.Pg.R(this.Aur+AGW);else this.Pg.R((this.Aur+
CO)+(F=this.Ajh,F[1].call(F[0])).toFixed());}else this.Pg.R(this.Aur);},A1r:function(
G){this.An();},BjM:function(E){if(A.aaZ(this.Ajh,E))return;if(!!this.Ajh)A.z$([this
,this.A1r],this.Ajh,0);this.Ajh=E;if(!!E)A.zX([this,this.A1r],E,0);if(!!E)A.pe([
this,this.A1r],this);},A7Z:function(E){if(this.Aur===E)return;this.Aur=E;this.An(
);},_Init:function(aArg){C.I1._Init.call(this,aArg);C.CP._Init.call(this.Pg={I:this
},0);this.__proto__=C.AS4;this.H(AWu);this.V.H(AWv);this.V.A2(0x12);this.Pg.H(AWw
);this.Pg.A2(0x12);this.Pg.L(A.jb.Bh);this.J(this.Pg,0);this.Pg.S(A.aaL(A.fl.Ah)
);this.Pg.A5(A.aaL(A.fl.Ak));this.Pg.CC(null);},_Done:function(){this.__proto__=
C.I1;this.Pg._Done();C.I1._Done.call(this);},_ReInit:function(){C.I1._ReInit.call(
this);this.Pg._ReInit();this.Pg.S(A.aaL(A.fl.Ah));this.Pg.A5(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.I1._Mark.call(this,D);if((B=this.Ajh)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AKQ={Z:null,JC:null,R8:null,Av:null,ApR:2500,AL5:24,Du:function(G){var B;var
E7=0;var X=this.AR;switch(this.Cl.CI){case 6:E7=2;break;case 7:E7=7;break;case 4:
E7=4;break;case 5:E7=5;break;default:;}X=this.RY(X,E7,0x414);if(!!X)this.A8(X);if(
!!X&&((X.T&0x400)===0x400))this.Z.Hx(X,true,null,null);},Als:function(G){A._GetAutoObject(
C.AY).Fm();},Ao$:function(G){},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1)
)[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},Bjv:function(
E){if(this.ApR===E)return;this.ApR=E;},Bh$:function(){return this.ApR;},Bjw:function(
E){if(this.AL5===E)return;this.AL5=E;},Bia:function(){return this.AL5;},BhZ:function(
G){var F,CL;this.JC.BP.L(this.JC.V.AP);if(!!this.JC.Q)this.JC.BP.R((((String.fromCharCode(((
F=this.JC.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+AkG)+String.fromCharCode(((
CL=this.JC.Q,CL[1].call(CL[0]))+10000).toFixed().charCodeAt(2)||0))+CO)+this.JC.
AFR);},G4:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.I1._Init.call(this.JC={
I:this},0);C.I1._Init.call(this.R8={I:this},0);C.Av._Init.call(this.Av={I:this},
0);this.__proto__=C.AKQ;this.N.Y(true);this.Dr(C.Iy);this.Z.H(E4);this.Z.Kb(1);this.
JC.H(Aho);this.JC.Aj(true);this.JC.U(A.aaR(A.acf.ApR));this.JC.Bf(false);this.JC.
Gk(0);this.JC.E1(5000);this.JC.Kf(A.aaR(A.acf.Afx));this.JC.KH(A.aaR(A.acf.Afx));
this.JC.ARD(100);this.R8.H(WK);this.R8.Aj(true);this.R8.U(A.aaR(A.acf.A8Y));this.
R8.Bf(true);this.R8.Bx(24);this.R8.Gk(10);this.R8.E1(33);this.R8.Kf(AWx);this.Av.
H(Axl);this.J(this.Z,0);this.J(this.JC,0);this.J(this.R8,0);this.J(this.Av,0);this.
N.CS(A.aaL(A.ach.Vz));this.Z.Ei=[this,this.G4];this.JC.Au([this,this.Bh$,this.Bjv
]);this.JC.A8v([this,this.BhZ]);this.R8.Au([this,this.Bia,this.Bjw]);},_Done:function(
){this.__proto__=C.AB;this.Z._Done();this.JC._Done();this.R8._Done();this.Av._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Z._ReInit(
);this.JC._ReInit();this.R8._ReInit();this.Av._ReInit();this.JC.U(A.aaR(A.acf.ApR
));this.JC.Kf(A.aaR(A.acf.Afx));this.JC.KH(A.aaR(A.acf.Afx));this.R8.U(A.aaR(A.acf.
A8Y));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.JC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R8).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalActionNewbornCareScreen"};C.AqH={EaseOfDelivery:null,BirthType:
null,B8:null,De:null,Dw:null,Co:null,D7:null,GO:null,Lb:null,MU:0,LO:false,Init:
function(aArg){A.zX([this,this.Hu],this.B8.Q,0);A.zX([this,this.Hu],this.De.Q,0);
A.zX([this,this.Azx],this.C6.Q,0);A.zX([this,this.Bct],this.Co.Dg,0);A.zX([this,
this.Bcn],this.Dd.Q,0);A.zX([this,this.Atl],this.B8.Q,0);A.zX([this,this.Atl],this.
De.Q,0);A.pe([this,this.Azx],this);A.pe([this,this.Hu],this);A.pe([this,this.Bct
],this);A.pe([this,this.Bcn],this);A.pe([this,this.Atl],this);},Ee:function(G){A.
_GetAutoObject(A.Device.Helper).W.Ha();A._GetAutoObject(C.AY).Fm();},AfE:function(
G){var F;A._GetAutoObject(A.Device.Helper).W.DT((F=this.B4.Q,F[1].call(F[0])));if(
!!A._GetAutoObject(A.Device.Helper).Ag6){var Ald=A._GetAutoObject(A.Device.Helper
).Ag6.ANt();A._GetAutoObject(A.Device.Helper).W.Abz(Ald);A._GetAutoObject(A.Device.
Helper).W.Am_(Ald);}var AkV=A._GetAutoObject(A.Device.Helper).AZN(A._GetAutoObject(
A.Device.Helper).W,(F=this.Dw.HS.Hg,F[1].call(F[0])),A._GetAutoObject(A.Device.Device
).Aq);if(!AkV){this.Air();A.pe([this,this.BtN],this);}else A._GetAutoObject(A.Device.
Helper).AI1(A._GetAutoObject(A.Device.Helper).W,AkV,(F=this.Dw.HS.Hg,F[1].call(F[
0])),0,[this,this.Ao4]);},AtB:function(){this.N.BU(A.jV);this.N.C2(A.aaL(A.ach.ACE
));this.N.Cb=[this,this.AxR];},Air:function(){var B;var F;A._GetAutoObject(A.Device.
Helper).W.Cp(A._GetAutoObject(A.Device.Device).Aq);var L0=A._GetAutoObject(A.Device.
Device).Aq.K7(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).Sq(L0);var Bbr=false;if(A._GetAutoObject(A.Device.Helper).AmA()){if(A._GetAutoObject(
A.Device.Device).Bq.La()){Bbr=true;A._GetAutoObject(A.Device.Device).A6(50,true,
A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),0,null);}else{var BT=A._NewObject(
A.Device.Rating,0);BT.Gb();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);BT.OnSetBodyWeight(this.Kz);BT.OnSetTimestamp(A._GetAutoObject(A.Device.Helper
).W.DateOfBirth);BT.Cp(A._GetAutoObject(A.Device.Device).Bq);}}if(A._GetAutoObject(
A.Device.Helper).A5C()&&(Bbr===false)){if(A._GetAutoObject(A.Device.Device).Bq.La(
))A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).
Bq.Hz().toFixed(),0,null);else{var BT=A._NewObject(A.Device.Rating,0);BT.Gb();BT.
OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BT.OnSetBodyWeight(this.MU
);BT.Cp(A._GetAutoObject(A.Device.Device).Bq);}}var IM=null;switch((F=this.Dw.HS.
Hg,F[1].call(F[0]))){case 3:IM=[B=A._GetAutoObject(A.Device.Device),B.Avs,B.AxJ];
break;case 2:IM=[B=A._GetAutoObject(A.Device.Device),B.Avt,B.AxK];break;case 4:case
5:IM=[B=A._GetAutoObject(A.Device.Device),B.AmY,B.An0];break;default:;}if(!!IM)switch((
F=this.Dw.J6.Vm,F[1].call(F[0]))){case 1:IM[2].call(IM[0],A._GetAutoObject(A.Device.
Helper).W.VisualId-1);break;case 0:IM[2].call(IM[0],A._GetAutoObject(A.Device.Helper
).W.VisualId+1);break;default:;}if(!!(F=this.De.Q,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).A9N(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
Gender.Animal.Gender,(F=this.De.Q,F[1].call(F[0])),this.De.Ajk(),this.De.Ajm());
},Aps:function(G){A._GetAutoObject(C.AY).Fm();},BtN:function(s){this.Aps(s);},Azs:
function(G){A._GetAutoObject(C.AY).B1(55);},AgR:function(E){if(this.MU===E)return;
this.MU=E;A.abo([this,this.AmW,this.AgR],0);},Hu:function(G){if(A._GetAutoObject(
A.Device.Helper).AmA())this.Dd.Y(true);else this.Dd.Y(false);if(A._GetAutoObject(
A.Device.Helper).A5C())this.D7.Y(true);else this.D7.Y(false);if(this.LO){this.De.
Y(false);this.B8.U(A.aaR(A.acf.ABx));this.B8.ADM(A.aaL(A.ach.AeA));}else{this.De.
Y(true);this.B8.U(A.aaR(A.acf.Akx));this.B8.ADM(null);}},Azx:function(G){A._GetAutoObject(
A.Device.Helper).ATL(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.LO);},Bct:function(G){A.pe([this,this.Bed],this
);},Bcn:function(G){A.pe([this,this.Bed],this);},Bed:function(G){var F,CL,SP;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.D7.AgV(A._GetAutoObject(
A.Device.Helper).Ahj(A._GetAutoObject(A.Device.Helper).AaO((F=this.B4.Q,F[1].call(
F[0]))),(CL=this.Co.Dg,CL[1].call(CL[0])),2,(SP=this.B4.Q,SP[1].call(SP[0]))));break;
case 2:this.D7.AgV(A._GetAutoObject(A.Device.Helper).Ahj(this.Kz,(F=this.Co.Dg,F[
1].call(F[0])),2,(CL=this.B4.Q,CL[1].call(CL[0]))));break;default:;}},Ao4:function(
G){var F;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(
As.Id){case 22:case 21:switch((F=this.Dw.HS.Hg,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.LF(this.Dw);break;case 0:this.LF(this.De);break;case 1:this.LF(this.
B8);break;default:throw new Error(Axt+(F=this.Dw.HS.Hg,F[1].call(F[0])).toFixed(
));}break;case 25:this.LF(this.B8);break;case 43:this.LF(this.De);break;case 42:{
this.LF(this.B8);if(As.PopupState===7)A.pe([this,this.WM],this);}break;case 41:break;
default:A.ab5("%s%e",Asq,As.Id);}},Ao5:function(G){var F;C.HR.Ao5.call(this,G);(
F=this.Dd.Q,F[2].call(F[0],this.Dd.Ans));this.D7.AgV(A._GetAutoObject(A.Device.Helper
).W.Ahj(1));},Aeo:function(E){if(this.LO===E)return;this.LO=E;A.abo([this,this.Avu
,this.Aeo],0);},Atl:function(G){var F,CL,SP;this.Aeo(((F=this.B8.Q,F[1].call(F[0
]))===(CL=this.De.Q,CL[1].call(CL[0])))&&!!(SP=this.B8.Q,SP[1].call(SP[0])));A.pe([
this,this.Hu],this);},AmW:function(){return this.MU;},Avu:function(){return this.
LO;},_Init:function(aArg){C.HR._Init.call(this,aArg);C.EaseOfDelivery._Init.call(
this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={I:this},0
);C.Avf._Init.call(this.B8={I:this},0);C.QU._Init.call(this.De={I:this},0);C.AFo.
_Init.call(this.Dw={I:this},0);C.Sr._Init.call(this.Co={I:this},0);C.Akn._Init.call(
this.D7={I:this},0);C.B$._Init.call(this.GO={I:this},0);C.B$._Init.call(this.Lb={
I:this},0);this.__proto__=C.AqH;var B;this.Dr(C.AB8);this.CB.H(Aci);this.B8.H(AnP
);this.B8.Aj(true);this.B8.U(A.aaR(A.acf.Akx));this.B8.Aq3(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CO)+A.aaR(A.acf.ArM));this.B8.Aq4(A.aaR(A.acf.AjS));this.De.H(AnP);
this.De.Aj(true);this.De.U(A.aaR(A.acf.YN));this.De.Are(false);this.Dw.H(AWy);this.
Dw.Aj(true);this.Dw.U(A.aaR(A.acf.GB));this.Dw.Bx(0);this.Co.H(Aci);this.Co.Aj(true
);this.Co.U(A.aaR(A.acf.AdF));this.Co.AEr(true);this.D7.H(Aci);this.D7.Aj(true);
this.D7.U(A.aaR(A.acf.MU));this.D7.Gk(1000);this.D7.E1(999000);this.GO.H(Aci);this.
GO.Aj(true);this.GO.U(A.aaR(A.acf.AqF));this.Lb.H(Aci);this.Lb.Aj(true);this.Lb.
U(A.aaR(A.acf.Af8));this.J(this.B8,-2);this.J(this.De,-2);this.J(this.Dw,-2);this.
J(this.Co,-2);this.J(this.D7,-1);this.J(this.GO,0);this.J(this.Lb,0);this.EaseOfDelivery.
LT(A._GetAutoObject(A.Device.Helper).W);this.BirthType.LT(A._GetAutoObject(A.Device.
Helper).W);this.B8.AQ=[this,this.WM];this.B8.LS([this,this.WM]);this.B8.LU(A.aaL(
A.ach.AeA));this.B8.Au([B=A._GetAutoObject(A.Device.Helper).W,B.AjU,B.M9]);this.
B8.PB([B=A._GetAutoObject(A.Device.Device),B.Abq,B.Acj]);this.B8.QM([B=A._GetAutoObject(
A.Device.Device),B.Abr,B.Ack]);this.B8.TY([B=A._GetAutoObject(A.Device.Device),B.
AmV,B.AnZ]);this.B8.Aeo([this,this.Avu,this.Aeo]);this.De.Gj([this,this.D9,this.
GQ]);this.De.LS([this,this.WM]);this.De.LU(A.aaL(A.ach.AeA));this.De.T0([B=this.
Gender.Animal,B.V6,B.JG]);this.De.PB([B=A._GetAutoObject(A.Device.Device),B.Abq,
B.Acj]);this.De.QM([B=A._GetAutoObject(A.Device.Device),B.Abr,B.Ack]);this.De.TY([
B=A._GetAutoObject(A.Device.Device),B.AmV,B.AnZ]);this.De.Au([B=A._GetAutoObject(
A.Device.Helper).W,B.AmZ,B.M8]);this.De.Am3([B=this.AnimalType.Animal,B.PA,B.DT]
);this.Dw.Gj([this,this.D9,this.GQ]);this.Dw.LS([B=this.Dw,B.FH]);this.Dw.LU(A.aaL(
A.ach.Edit));this.Dw.Au([B=A._GetAutoObject(A.Device.Helper).W,B.AqQ,B.T5]);this.
Dw.A7G(A._GetAutoObject(A.Device.Helper).W);this.Co.Gj([this,this.D9,this.GQ]);this.
Co.LS([B=this.Co,B.FH]);this.Co.LU(A.aaL(A.ach.Edit));this.Co.AbC([B=A._GetAutoObject(
A.Device.Helper).W,B.Avp,B.Sh]);this.D7.Au([this,this.AmW,this.AgR]);this.GO.Au([
B=this.BirthType,B.B_,B.Ca]);this.GO.CK(this.BirthType);this.Lb.Au([B=this.EaseOfDelivery
,B.B_,B.Ca]);this.Lb.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HR;this.EaseOfDelivery._Done();this.BirthType._Done();this.B8._Done(
);this.De._Done();this.Dw._Done();this.Co._Done();this.D7._Done();this.GO._Done(
);this.Lb._Done();C.HR._Done.call(this);},_ReInit:function(){C.HR._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.B8._ReInit();this.
De._ReInit();this.Dw._ReInit();this.Co._ReInit();this.D7._ReInit();this.GO._ReInit(
);this.Lb._ReInit();this.B8.U(A.aaR(A.acf.Akx));this.B8.Aq3(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CO)+A.aaR(A.acf.ArM));this.B8.Aq4(A.aaR(A.acf.AjS));this.De.U(
A.aaR(A.acf.YN));this.Dw.U(A.aaR(A.acf.GB));this.Co.U(A.aaR(A.acf.AdF));this.D7.
U(A.aaR(A.acf.MU));this.GO.U(A.aaR(A.acf.AqF));this.Lb.U(A.aaR(A.acf.Af8));},_Mark:
function(D){var B;C.HR._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
B8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Lb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AFZ={HY:null,Ag_:null,Agg:null,Ag$:null,Agh:null,AnimalType:null,Background:
null,NL:null,Q3:null,V:null,Ty:null,X8:null,Aa3:null,Pz:null,DE:A.jV,AFq:true,CT:
function(){this.An();},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.AnB();this.
AwU();},AnB:function(){var F,CL;var Lv=0;var AlJ=0;var Ak8=0;var H5=0;if((((!!this.
Ag_&&!!this.Ag$)&&!!this.Agg)&&!!this.Agh)&&!!this.AnimalType){AlJ=(F=this.Ag_,F[
1].call(F[0]));Ak8=(F=this.Agg,F[1].call(F[0]));Lv=A._GetAutoObject(A.Device.Helper
).MF((F=this.Ag$,F[1].call(F[0])),(CL=this.Agh,CL[1].call(CL[0])));H5=(F=this.AnimalType
,F[1].call(F[0]));}var KZ=A.jb.Text;var Ax9=A.jb.C0;if(!!Lv){var AJ$=A._GetAutoObject(
A.acj.DM).Ak2(Lv,AlJ,Ak8);Ax9=A._GetAutoObject(A.acj.DM).AyO(AJ$,H5);KZ=A._GetAutoObject(
A.acj.DM).AyQ(AJ$,H5);}this.Background.L(Ax9);this.Ty.L(KZ);this.Q3.L(KZ);this.NL.
L(KZ);this.Aa3.L(KZ);if(KZ===A.jb.Bh)this.X8.L(KZ);else this.X8.L(A.jb.CE);this.
V.L(KZ);this.Pz.L(KZ);},AwU:function(){var F,CL;var Lv=0;var AlJ=0;var Ak8=0;if(((
!!this.Ag_&&!!this.Ag$)&&!!this.Agg)&&!!this.Agh){AlJ=(F=this.Ag_,F[1].call(F[0]
));Ak8=(F=this.Agg,F[1].call(F[0]));Lv=A._GetAutoObject(A.Device.Helper).MF((F=this.
Ag$,F[1].call(F[0])),(CL=this.Agh,CL[1].call(CL[0])));}if(!!Lv){var AJ$=A._GetAutoObject(
A.acj.DM).Ak2(Lv,AlJ,Ak8);this.Q3.R(A._GetAutoObject(A.Device.Converter).SJ(AJ$,
2,true));this.NL.Y(true);this.Q3.Y(true);this.Pz.Y(false);}else{this.NL.Y(false);
this.Q3.Y(false);this.Pz.Y(true);}this.Ty.R(this.Bwi(Ak8-AlJ,Lv));this.Aa3.Y(this.
AFq);this.X8.Y(this.AFq);this.NL.R(A._GetAutoObject(A.acj.DM).ZX());},Bwi:function(
AZr,Ahw){var B;if(Ahw<0){A.ab5("%s",AWz);return A.jV;}var Ik=(AWA+A._GetAutoObject(
A.acj.DM).Afu())+CO;var FI=A._GetAutoObject(A.Device.Converter).AkD(AZr);if(!AZr
)FI=A.abU(FI,AWB,0);else if(AZr>0)FI=A.abU(FI,AGX,0);Ik=this.Bdw(Ik,AWC,FI);if(Ahw===
1)Ik=Ik+A.aaR(A.acf.BgN);else{Ik=Ik+A.aaR(A.acf.BgO);Ik=this.Bdw(Ik,AWD,Ahw.toFixed(
));}return Ik;},Bdw:function(aString,A$Z,BuL){if(aString===A.jV){A.ab5("%s",AWE);
return A.jV;}var A09=aString.indexOf(A$Z,0);if(A09>=0){aString=A.ab1(aString,A09
,A$Z.length);aString=A.abU(aString,BuL,A09);}return aString;},ARY:function(E){if(
A.aaZ(this.Ag_,E))return;if(!!this.Ag_)A.z$([this,this.Dc],this.Ag_,0);this.Ag_=
E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this);},BjJ:function(
E){if(A.aaZ(this.Agg,E))return;if(!!this.Agg)A.z$([this,this.Dc],this.Agg,0);this.
Agg=E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this);},ARZ:function(
E){if(A.aaZ(this.Ag$,E))return;if(!!this.Ag$)A.z$([this,this.Dc],this.Ag$,0);this.
Ag$=E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this);},BjK:function(
E){if(A.aaZ(this.Agh,E))return;if(!!this.Agh)A.z$([this,this.Dc],this.Agh,0);this.
Agh=E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this);},Dc:function(
G){this.An();},U:function(E){if(this.DE===E)return;this.DE=E;this.V.R(E);},A8u:function(
E){if(this.AFq===E)return;this.AFq=E;this.An();},DT:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.Dc],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this
},0);C.CP._Init.call(this.NL={I:this},0);A.acg.Text._Init.call(this.Q3={I:this},
0);C.CP._Init.call(this.V={I:this},0);C.CP._Init.call(this.Ty={I:this},0);A.acg.
Am._Init.call(this.X8={I:this},0);A.acg.Am._Init.call(this.Aa3={I:this},0);C.CP.
_Init.call(this.Pz={I:this},0);this.__proto__=C.AFZ;this.H(Ae6);this.Background.
AW(0x3F);this.Background.H(Ae6);this.NL.H(AWF);this.NL.R(A._GetAutoObject(A.acj.
DM).ZX());this.NL.A2(0x9);this.NL.L(A.jb.Text);this.Q3.H(AWG);this.Q3.A2(0x14);this.
Q3.R(A.aaR(A.act.AjQ));this.Q3.L(A.jb.Text);this.V.AW(0x1D);this.V.H(AWH);this.V.
R(A.aaR(A.acf.AtR));this.V.A2(0x12);this.V.L(A.jb.Text);this.Ty.H(WJ);this.X8.AW(
0x14);this.X8.H(AGY);this.X8.Ct(1);this.Aa3.AW(0x14);this.Aa3.H(AGY);this.Aa3.Ct(
0);this.Pz.H(AWI);this.Pz.R(A.aaR(A.acf.A2S));this.J(this.Background,0);this.J(this.
NL,0);this.J(this.Q3,0);this.J(this.V,0);this.J(this.Ty,0);this.J(this.X8,0);this.
J(this.Aa3,0);this.J(this.Pz,0);this.NL.S(A.aaL(A.fl.Ez));this.NL.A5(A.aaL(A.fl.
Ah));this.NL.CC(A.aaL(A.fl.Ia));this.Q3.S(A.aaL(A.fl.AdS));this.V.S(A.aaL(A.fl.Ah
));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(A.aaL(A.fl.By));this.Ty.S(A.aaL(A.fl.Ah));
this.Ty.A5(A.aaL(A.fl.Ak));this.Ty.CC(A.aaL(A.fl.By));this.X8.Ax(A.aaL(A.ach.AAG
));this.Aa3.Ax(A.aaL(A.ach.AAG));this.HY=A._NewObject(A.Device.Rating,0);this.Pz.
S(A.aaL(A.fl.Ah));this.Pz.A5(A.aaL(A.fl.Ak));this.Pz.CC(A.aaL(A.fl.By));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.NL._Done();this.
Q3._Done();this.V._Done();this.Ty._Done();this.X8._Done();this.Aa3._Done();this.
Pz._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Background._ReInit();this.NL._ReInit();this.Q3._ReInit();this.V._ReInit(
);this.Ty._ReInit();this.X8._ReInit();this.Aa3._ReInit();this.Pz._ReInit();this.
Q3.R(A.aaR(A.act.AjQ));this.V.R(A.aaR(A.acf.AtR));this.Pz.R(A.aaR(A.acf.A2S));this.
NL.S(A.aaL(A.fl.Ez));this.NL.A5(A.aaL(A.fl.Ah));this.NL.CC(A.aaL(A.fl.Ia));this.
Q3.S(A.aaL(A.fl.AdS));this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.
CC(A.aaL(A.fl.By));this.Ty.S(A.aaL(A.fl.Ah));this.Ty.A5(A.aaL(A.fl.Ak));this.Ty.
CC(A.aaL(A.fl.By));this.Pz.S(A.aaL(A.fl.Ah));this.Pz.A5(A.aaL(A.fl.Ak));this.Pz.
CC(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.HY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag_)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Agg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag$)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agh)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa3)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pz)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.AT3={Animal:null,Rating:null,Cl:null,AD:null,AV:
0,G$:function(G){var B;if(!this.Animal||!this.Rating)return;var FU=this.AD.GN;var
Cx=(C.AFZ.isPrototypeOf(B=this.AD.Cd)?B:null);if(!Cx)return;Cx.DT([B=this.Animal
,B.PA,B.DT]);Cx.BjJ([B=A._GetAutoObject(A.Device.Device),B.ADv,B.AHC]);Cx.BjK([B=
this.Rating,B.A7k,B.OnSetTimestamp]);switch(FU%this.AV){case 1:{Cx.ARY([B=this.Animal
,B.A61,B.AD6]);Cx.ARZ([B=this.Animal,B.A7l,B.AEA]);Cx.U(A.aaR(A.acf.AtR));}break;
default:if(this.Animal.Aqu()){Cx.ARY([B=this.Animal,B.AQ0,B.AvV]);Cx.ARZ([B=this.
Animal,B.ARg,B.Awe]);Cx.U(A.aaR(A.acf.AKx));}else{Cx.ARY([B=this.Animal,B.AQ0,B.
AvV]);Cx.ARZ([B=this.Animal,B.ARg,B.Awe]);Cx.U(A.aaR(A.acf.Bew));}}if(this.AV>1)
Cx.A8u(true);else Cx.A8u(false);Cx.H(A.abK(Cx.M,[(B=this.AD.M)[2]-B[0],this.AD.GP
]));},Du:function(G){if(this.AV>0)switch(this.Cl.CI){case 6:this.Cw(this);break;
case 7:this.Cb(this);break;default:this.Cl.Ny=true;}},LT:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jm(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jm(1);else{this.Jm(2);this.AD.GS(1);this.
AD.Hx(this.AD.Gd,true,null,null);}if(this.AV>0)this.AD.Aa5(0,this.AV-1);},Aj9:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AV>0)this.AD.Aa5(0,this.AV-1);
},Cw:function(G){if(this.AD.Gd>0)this.AD.GS(this.AD.Gd-1);else this.AD.GS(this.AV-
1);this.AD.Hx(this.AD.Gd,true,null,null);},Cb:function(G){if(this.AD.Gd<(this.AV-
1))this.AD.GS(this.AD.Gd+1);else this.AD.GS(0);this.AD.Hx(this.AD.Gd,true,null,null
);},Jm:function(E){if(this.AV===E)return;this.AV=E;this.AD.Jm(this.AV);A.abo([this
,this.AqN,this.Jm],0);},AqN:function(){return this.AV;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BJ._Init.call(this.Cl={I:this},0);A.Core.CG._Init.
call(this.AD={I:this},0);this.__proto__=C.AT3;this.H(Ae6);this.Cl.Filter=147;this.
AD.AW(0x3F);this.AD.H(Ae6);this.AD.NN(C.AFZ);this.AD.Aer(160);this.AD.GS(0);this.
AD.Jm(2);this.J(this.AD,0);this.Cl.BK=[this,this.Du];this.Cl.DS=[this,this.Du];this.
AD.G$=[this,this.G$];},_Done:function(){this.__proto__=A.Core.O;this.Cl._Done();
this.AD._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Cl._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.D8={Init:function(aArg){},Bg:function(aSize){C.Ci.Bg.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Ci.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10);var Fi=((
Ae&0x20)===0x20);var Gq=this.Bk.Bv;var FE=A.jb.CE;var GG=A.jb.Text;if(this.G_){FE=
A.jb.C0;GG=A.jb.Text;}if(!G2){this.Background.L(A.jb.C0);this.V.L(A.jb.CE);}else
if(Gq){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else if(Fi){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}this.Ly=G2;
this.Kv=Fi;this.Qb=Gq;},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=
C.D8;this.H(JN);this.V.H(BC);this.YZ(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.Aed={KA:null,Gx:A.jV,Bg:function(aSize){C.D8.Bg.call(this,aSize);this.KA.H([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.D8.Ai.call(this,Ae);this.KA.
L(this.V.AP);},Init:function(aArg){},Aby:function(E){if(this.Gx===E)return;this.
Gx=E;this.KA.R(E);},_Init:function(aArg){C.D8._Init.call(this,aArg);C.CP._Init.call(
this.KA={I:this},0);this.__proto__=C.Aed;this.H(JN);this.Background.H(JN);this.V.
H(Ae4);this.V.R(Lo);this.KA.H(KP);this.KA.R(AWJ);this.J(this.KA,0);this.V.S(A.aaL(
A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(null);this.KA.S(A.aaL(A.fl.Ah));this.
KA.A5(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.D8;this.
KA._Done();C.D8._Done.call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.
KA._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.KA.S(A.aaL(
A.fl.Ah));this.KA.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.D8._Mark.call(this
,D);if((B=this.KA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.Avf={AA_:null,Q:null,FN:null,Fw:null,H_:null,LO:null,Am:null,EA:null,AMG:A.jV
,AMH:A.jV,Bg:function(aSize){C.Aed.Bg.call(this,aSize);if(!this.AA_)this.KA.H([].
concat(0,this.KA.M.slice(1,4)));else this.KA.H([].concat(this.Am.M[2],this.KA.M.
slice(1,4)));},Ai:function(Ae){var F,CL,SP;C.Aed.Ai.call(this,Ae);var Baq=false;
if(!!this.Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.AoF)this.Aby(this.AMG);else
this.Aby(this.AMH);}else{this.Aby(A._GetAutoObject(A.Device.Converter).Q1((F=this.
Q,F[1].call(F[0]))));if((((!!this.H_&&!!this.FN)&&!!this.Fw)&&!!this.LO)&&(((F=this.
H_,F[1].call(F[0]))===1)||(!(CL=this.H_,CL[1].call(CL[0]))&&(SP=this.LO,SP[1].call(
SP[0])))))Baq=true;}}this.EA.Y(Baq);this.Am.L(this.V.AP);A.pe([this,this.AfA],this
);},Dc:function(G){this.An();},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.
Q)A.z$([this,this.Dc],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)
A.pe([this,this.Dc],this);},ADM:function(E){if(this.AA_===E)return;this.AA_=E;this.
Am.Ax(E);this.BgV();},PB:function(E){if(A.aaZ(this.FN,E))return;if(!!this.FN)A.z$([
this,this.Z6],this.FN,0);this.FN=E;if(!!E)A.zX([this,this.Z6],E,0);if(!!E)A.pe([
this,this.Z6],this);},QM:function(E){if(A.aaZ(this.Fw,E))return;if(!!this.Fw)A.z$([
this,this.Z7],this.Fw,0);this.Fw=E;if(!!E)A.zX([this,this.Z7],E,0);if(!!E)A.pe([
this,this.Z7],this);},Z7:function(G){this.An();},Z6:function(G){this.An();},TY:function(
E){if(A.aaZ(this.H_,E))return;if(!!this.H_)A.z$([this,this.Alr],this.H_,0);this.
H_=E;if(!!E)A.zX([this,this.Alr],E,0);if(!!E)A.pe([this,this.Alr],this);},Alr:function(
G){this.An();},AfA:function(G){var F,CL;if((!this.H_||!this.FN)||!this.Fw)return;
var A0T=this.KA.AeD([(this.KA.String.length-(F=this.Fw,F[1].call(F[0])))-(CL=this.
FN,CL[1].call(CL[0])),0]);var A19=this.KA.AeD([this.KA.String.length-(F=this.Fw,
F[1].call(F[0])),0]);var AAc=this.KA.Da(0x0);this.EA.H([A0T[0]-1,AAc[1],A19[0]+1
,AAc[3]]);},Aq3:function(E){if(this.AMG===E)return;this.AMG=E;this.An();},Aq4:function(
E){if(this.AMH===E)return;this.AMH=E;this.An();},Aeo:function(E){if(A.aaZ(this.LO
,E))return;if(!!this.LO)A.z$([this,this.A1y],this.LO,0);this.LO=E;if(!!E)A.zX([this
,this.A1y],E,0);if(!!E)A.pe([this,this.A1y],this);},A1y:function(G){this.An();},
_Init:function(aArg){C.Aed._Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:
this},0);A.acg.Cz._Init.call(this.EA={I:this},0);this.__proto__=C.Avf;this.Am.H(
Ahk);this.EA.H(AWK);this.EA.NO(2);this.EA.L(A.jb.EU);this.J(this.Am,0);this.J(this.
EA,0);this.KA.QN([this,this.AfA]);},_Done:function(){this.__proto__=C.Aed;this.Am.
_Done();this.EA._Done();C.Aed._Done.call(this);},_ReInit:function(){C.Aed._ReInit.
call(this);this.Am._ReInit();this.EA._ReInit();},_Mark:function(D){var B;C.Aed._Mark.
call(this,D);if((B=this.AA_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
H_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.LO)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EA
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Jb:0,Z5:4,BbB:true,BbA:false,Bax:true,A0E:false,Alw:function(
G){C.QT.Alw.call(this,G);if(A._GetAutoObject(A.Device.Helper).Bbt()){this.Jb=A._GetAutoObject(
A.Device.Helper).Ub.Id;var AhY=A._GetAutoObject(A.Device.Helper).APH(this.Jb);if(
AhY)A._GetAutoObject(A.Device.Device).A6(25,true,A._GetAutoObject(A.Device.Converter
).Q1(this.Jb),0,[this,this.A1B]);else{this.Z5=A._GetAutoObject(A.Device.Helper).
API(this.Jb);var BbX=false;if((this.Z5===3)||(this.Z5===2))BbX=A._GetAutoObject(
A.Device.Helper).A5D(this.Jb,A._GetAutoObject(A.Device.Helper).W);if(BbX)A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Q1(this.Jb),0,null
);else switch(this.Z5){case 2:{var BL=A._GetAutoObject(A.Device.Converter).AwS(this.
Jb);A._GetAutoObject(A.Device.Device).A6(46,true,BL.toFixed(),0,[this,this.A1B]);
}break;case 3:case 1:case 0:case 4:this.BdN();break;default:throw new Error(AGZ+
this.Z5.toFixed());}}}},Ee:function(G){A._GetAutoObject(C.AY).Fm();},AHE:function(
s){this.Ee(s);},BdN:function(){if((this.Z5===3)||(this.Z5===2)){if((this.Bax&&(A.
_GetAutoObject(A.Device.Helper).W.NaisId>0))&&(A._GetAutoObject(A.Device.Helper).
W.NaisId!==this.Jb)){A._GetAutoObject(A.Device.Device).A6(91,true,A.jV,0,[this,this.
A1B]);return;}else this.BdL();}A._GetAutoObject(A.Device.Helper).W.M9(this.Jb);this.
A0E=true;this.BdO();this.Ee(this);},A1B:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As)switch(As.Id){case 46:if(As.PopupState===4)this.
BdN();break;case 25:switch(As.PopupState){case 4:A._GetAutoObject(A.Device.Device
).AeN();break;case 5:this.Ee(this);break;default:;}break;case 91:switch(As.PopupState
){case 7:{A._GetAutoObject(A.Device.Helper).W.M9(this.Jb);this.A0E=true;this.BdL(
);this.BdO();this.Ee(this);}break;case 8:this.Ee(this);break;default:;}break;default:
A.ab5("%s%e",AG0,As.Id);}},BdL:function(){A._GetAutoObject(A.Device.Helper).W.M8(
this.Jb);if(this.BbA&&(A._GetAutoObject(A.Device.Converter).Ab7(this.Jb)===10)){
var Bac=Math.trunc((this.Jb%1000000000000)/10000000000);if(!Bac&&(A._GetAutoObject(
A.Device.Helper).W.AnimalType===2))A._GetAutoObject(A.Device.Helper).W.DT(0);else
if((Bac===1)&&(A._GetAutoObject(A.Device.Helper).W.AnimalType!==2))A._GetAutoObject(
A.Device.Helper).W.DT(2);}},BdO:function(){if(this.BbB){A._GetAutoObject(A.Device.
Helper).W.T5(A._GetAutoObject(A.Device.Helper).BeG(A._GetAutoObject(A.Device.Device
).Ahh,A._GetAutoObject(A.Device.Helper).W));if(A._GetAutoObject(A.Device.Device).
Ahh===1)A._GetAutoObject(A.Device.Helper).A9O();}},_Init:function(aArg){C.QT._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Y(true);this.Dr(C.Iy
);this.Number.R(A.aaR(A.acf.OC));this.I5.H(AWL);this.IG.H(Wx);this.Aj$(1);this.N.
Cw=[this,this.AHE];this.N.CS(A.aaL(A.ach.EV));},_ReInit:function(){C.QT._ReInit.
call(this);this.Number.R(A.aaR(A.acf.OC));},_className:"Application::SetTransponderScreen"
};C.ACg={F_:null,Lf:null,Ka:null,CT:function(){this.An();},Init:function(aArg){this.
An();},Ai:function(Ae){C.Es.Ai.call(this,Ae);this.Lf.R(A._GetAutoObject(A.acj.DM
).Afu());this.Ka.R(A._GetAutoObject(A.acj.DM).ZX());},_Init:function(aArg){C.Es.
_Init.call(this,aArg);A.acg.Text._Init.call(this.F_={I:this},0);A.acg.Text._Init.
call(this.Lf={I:this},0);A.acg.Text._Init.call(this.Ka={I:this},0);this.__proto__=
C.ACg;this.Background.L(A.jb.Text);this.F_.H(AWM);this.F_.A2(0x11);this.F_.R(A.aaR(
A.acf.Date));this.F_.L(A.jb.Bh);this.Lf.H(AWN);this.Lf.A2(0x11);this.Lf.L(A.jb.Bh
);this.Ka.H(AWO);this.Ka.L(A.jb.Bh);this.J(this.F_,0);this.J(this.Lf,0);this.J(this.
Ka,0);this.F_.S(A.aaL(A.fl.Ah));this.Lf.S(A.aaL(A.fl.Ah));this.Ka.S(A.aaL(A.fl.Ah
));this.Init(aArg);},_Done:function(){this.__proto__=C.Es;this.F_._Done();this.Lf.
_Done();this.Ka._Done();C.Es._Done.call(this);},_ReInit:function(){C.Es._ReInit.
call(this);this.F_._ReInit();this.Lf._ReInit();this.Ka._ReInit();this.F_.R(A.aaR(
A.acf.Date));this.F_.S(A.aaL(A.fl.Ah));this.Lf.S(A.aaL(A.fl.Ah));this.Ka.S(A.aaL(
A.fl.Ah));this.CT();},_Mark:function(D){var B;C.Es._Mark.call(this,D);if((B=this.
F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ka)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AF3={Mb:null,Hd:null,H2:null,AN:null,A9:null,FI:0,H5:0,Aib:false,Init:function(
aArg){},Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hd.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A9.H([this.Hd.M[2]-1,0,this.Hd.M[2]+1,aSize[
1]]);this.Mb.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H2.H(this.Mb.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.Aib){this.H2.R(Q7);this.H2.L(A.jb.
Text);this.Mb.L(this.Background.AP);}else{this.H2.R(A._GetAutoObject(A.Device.Converter
).SJ(this.FI,2,true));this.H2.L(A._GetAutoObject(A.acj.DM).AyQ(this.FI,this.H5));
this.Mb.L(A._GetAutoObject(A.acj.DM).AyO(this.FI,this.H5));}this.Hd.L(this.V.AP);
},Cc:function(Ac){if(!this.AX)return;this.Hr=Ac;if(!!this.AX){var Ak5=this.AX.Hy(
Ac,6);var AlC=this.AX.CA(Ac,8);if(this.Hr>0){var BvS=this.AX.Hy(this.Hr-1,6);var
Bym=this.AX.CA(this.Hr-1,8);var Lv=A._GetAutoObject(A.Device.Helper).MF(BvS,Ak5);
if(!!Lv){this.Aib=false;this.FI=A._GetAutoObject(A.acj.DM).Ak2(Lv,Bym,AlC);}else{
this.Aib=true;this.FI=0;}}else{this.Aib=true;this.FI=0;}this.U(A._GetAutoObject(
A.acj.KB).ABM(Ak5));this.Hd.R(A._GetAutoObject(A.Device.Converter).AkD(AlC));this.
H5=A._GetAutoObject(A.Device.Helper).W.AnimalType;this.An();}},_Init:function(aArg
){C.Ba._Init.call(this,aArg);A.acg.AI._Init.call(this.Mb={I:this},0);A.acg.Text.
_Init.call(this.Hd={I:this},0);A.acg.Text._Init.call(this.H2={I:this},0);A.acg.AI.
_Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A9={I:this},0);this.__proto__=
C.AF3;this.V.H(OO);this.Mb.H(Ast);this.Hd.H(AG1);this.Hd.A2(0x12);this.Hd.R(SN);
this.Hd.L(A.jb.Text);this.H2.H(AG2);this.H2.R(SN);this.H2.L(A.jb.Text);this.AN.H(
AnS);this.AN.L(A.jb.Bb);this.A9.H(AnT);this.A9.L(A.jb.Bb);this.J(this.Mb,0);this.
J(this.Hd,0);this.J(this.H2,0);this.J(this.AN,0);this.J(this.A9,0);this.Hd.S(A.aaL(
A.fl.Ah));this.H2.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mb._Done();this.Hd._Done();this.H2._Done();this.AN._Done();this.A9._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mb._ReInit(
);this.Hd._ReInit();this.H2._ReInit();this.AN._ReInit();this.A9._ReInit();this.Hd.
S(A.aaL(A.fl.Ah));this.H2.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Be:null,Vx:null,Ahg:null,Sz:null
,KD:A.jV,CT:function(){this.An();},Ai:function(Ae){C.AB.Ai.call(this,Ae);var Lv=
A._GetAutoObject(A.Device.Helper).MF(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing);if(!!Lv){var FI=A._GetAutoObject(
A.acj.DM).Ak2(Lv,A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).W.LastBodyWeight);var Adc=A.aaR(A.acf.BeU);Adc=A._GetAutoObject(
A.Device.Helper).Nb(Adc,PW,A._GetAutoObject(A.Device.Converter).SJ(FI,2,true));Adc=
A._GetAutoObject(A.Device.Helper).Nb(Adc,Axd,A._GetAutoObject(A.acj.DM).ZX());this.
Sz.R(Adc);this.Ahg.L(A._GetAutoObject(A.acj.DM).AyO(FI,A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.Sz.L(A._GetAutoObject(A.acj.DM).AyQ(FI,A._GetAutoObject(
A.Device.Helper).W.AnimalType));}else{this.Sz.R(A.aaR(A.acf.AT1));this.Ahg.L(A.jb.
APv);this.Sz.L(A.jb.Text);}},CJ:function(G){var Fk=A._NewObject(A.Device.Filter,
0);var HO=A._NewObject(A.Device.Int32FilterCriterion,0);HO.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fk.CZ(HO);var AcA=A._NewObject(A.Device.Int32FilterCriterion
,0);AcA.Initialize(8,2,0,true);Fk.CZ(AcA);A._GetAutoObject(A.Device.Device).Bq.Bm(
Fk);this.AwB(this);},Fd:function(G){A._GetAutoObject(A.Device.Device).Bq.Bm(null
);},AwB:function(G){this.Be=A._NewObject(C.FQ,0);this.Be.NN(C.AF3);this.Be.H(Axo
);this.Be.YV(A._GetAutoObject(A.Device.Device).Bq);this.Be.Dq(this.KD);this.J(this.
Be,0);this.A8(this.Be);},AmU:function(G){A._GetAutoObject(C.AY).Fm();},Dq:function(
E){if(this.KD===E)return;this.KD=E;if(!!this.Be)this.Be.Dq(E);},_Init:function(aArg
){C.AB._Init.call(this,aArg);C.ACg._Init.call(this.Vx={I:this},0);A.acg.AI._Init.
call(this.Ahg={I:this},0);A.acg.Text._Init.call(this.Sz={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.H(B9);this.N.Y(true);this.Dr(C.Iy);this.Vx.H(
Q6);this.KD=A.aaR(A.acf.AjR);this.Ahg.AW(0x1D);this.Ahg.H(KP);this.Sz.AW(0x1D);this.
Sz.H(KP);this.Sz.A2(0x12);this.Sz.R(SN);this.J(this.Vx,0);this.J(this.Ahg,0);this.
J(this.Sz,0);this.N.Cw=[this,this.AmU];this.N.CS(A.aaL(A.ach.EV));this.Sz.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.AB;this.Vx._Done();this.Ahg._Done(
);this.Sz._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.Vx._ReInit();this.Ahg._ReInit();this.Sz._ReInit();this.Dq(A.aaR(A.acf.AjR
));this.Sz.S(A.aaL(A.fl.Ah));this.CT();},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.Be)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vx)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ahg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sz
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
L9={DL:null,Ab2:null,AP7:11,Gl:0,A2_:true,AAO:false,IP:function(G){if(A._GetAutoObject(
A.Device.Device).Aq.Ch()>0)this.Jn(4);else A._GetAutoObject(A.Device.Device).A6(
30,true,A.jV,0,null);},CJ:function(G){if(this.DL.AyY())this.DL.Acz();else if((this.
Gl===2)&&A._GetAutoObject(A.Device.Helper).W.Aqd())this.Jn(5);else this.Jn(1);},
Fd:function(G){this.AJM();},Ee:function(G){this.Jn(0);A._GetAutoObject(C.AY).Fm(
);},ByV:function(){A._GetAutoObject(A.Device.Device).AeN();},AJM:function(){A._GetAutoObject(
A.Device.Device).Anu();},A7J:function(E){if(this.AAO===E)return;this.AAO=E;A.abo([
this,this.Bh4,this.A7J],0);},Jn:function(E){var B;if(this.Gl===E)return;this.Gl=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).Aki();A.zX([this,this.AJe]
,[B=A._GetAutoObject(A.Device.Helper),B.AqO,B.Aj_],0);A.z$([this,this.Azp],[B=this.
DL,B.Am1,B.Jn],0);this.ByV();}break;case 3:{A.z$([this,this.AJe],[B=A._GetAutoObject(
A.Device.Helper),B.AqO,B.Aj_],0);this.AJM();this.Bw0();}break;case 2:{A._GetAutoObject(
A.Device.Helper).ArH();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A2_)this.ByK();else this.ByN();}break;case 4:{A.z$([this,this.AJe],[B=A._GetAutoObject(
A.Device.Helper),B.AqO,B.Aj_],0);this.AJM();A._GetAutoObject(A.Device.Helper).ArH(
);A.zX([this,this.BcD],[B=A._GetAutoObject(A.Device.Device),B.Avz,B.AxO],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.AP7);}break;case 5:this.BdU();break;case
6:{A.zX([this,this.Azp],[B=this.DL,B.Am1,B.Jn],0);this.DL.Acz();}break;case 0:{A.
z$([this,this.AJe],[B=A._GetAutoObject(A.Device.Helper),B.AqO,B.Aj_],0);this.AJM(
);}break;default:throw new Error(Axu);}A.abo([this,this.Am1,this.BtB],0);},BtB:function(
Ap){this.Jn(Ap);},AJe:function(G){if(!!A._GetAutoObject(A.Device.Helper).Ub){if(
this.Gl===1)this.Jn(3);else A.ab5("%s%e",AWP,this.Gl);}else A.ab5("%s",AG3);},ByK:
function(){A._GetAutoObject(A.Device.Device).A6(13,true,A._GetAutoObject(A.Device.
Helper).Aky(A._GetAutoObject(A.Device.Helper).Ub.Id).toFixed(),0,[this,this.Bxb]
);},Bxb:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!
As&&((As.PopupState===4)||(As.PopupState===3))){if(this.BaB(false))A._GetAutoObject(
C.AY).B1(31);else{A._GetAutoObject(A.Device.Helper).Aki();this.Jn(1);}}else if(!
!As&&(As.PopupState===5)){A._GetAutoObject(A.Device.Helper).Aki();this.Jn(1);}},
BaB:function(Air){if(A._GetAutoObject(A.Device.Device).Aq.La()){A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).Aq.Hz().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).W.Gb();A._GetAutoObject(
A.Device.Helper).ApG(A._GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.
Helper).W.M9(A._GetAutoObject(A.Device.Helper).Ub.Id);if(!!A._GetAutoObject(A.Device.
Helper).Ag6){var Ald=A._GetAutoObject(A.Device.Helper).Ag6.ANt();A._GetAutoObject(
A.Device.Helper).W.Abz(Ald);A._GetAutoObject(A.Device.Helper).W.Am_(Ald);}if(A._GetAutoObject(
A.Device.Helper).API(A._GetAutoObject(A.Device.Helper).W.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).W.M8(A._GetAutoObject(A.Device.Helper).W.TransponderId);A._GetAutoObject(
A.Device.Helper).W.T5(A._GetAutoObject(A.Device.Helper).BeF(A._GetAutoObject(A.Device.
Device).AfY,A._GetAutoObject(A.Device.Helper).W));if(Air){A._GetAutoObject(A.Device.
Helper).W.Cp(A._GetAutoObject(A.Device.Device).Aq);var L0=A._GetAutoObject(A.Device.
Device).Aq.K7(0,A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.
Device).Sq(L0);if(A._GetAutoObject(A.Device.Helper).AmA()){if(A._GetAutoObject(A.
Device.Device).Bq.La())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bq.Hz().toFixed(),0,null);else{var BT=A._NewObject(A.Device.Rating
,0);BT.Gb();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);BT.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).AaO(A._GetAutoObject(A.Device.Helper).W.AnimalType
));BT.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);BT.Cp(A._GetAutoObject(
A.Device.Device).Bq);}}if(!A._GetAutoObject(A.Device.Device).AfY)A._GetAutoObject(
A.Device.Helper).A9O();}return true;},Bw0:function(){if(!!A._GetAutoObject(A.Device.
Helper).Ub){var AH5=true;if(A._GetAutoObject(A.Device.Helper).Ub.Id!==A._GetAutoObject(
A.Device.Helper).W.TransponderId){AH5=A._GetAutoObject(A.Device.Helper).A5P(A._GetAutoObject(
A.Device.Helper).Ub.Id);if(!AH5&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.BaB(true);AH5=A._GetAutoObject(A.Device.Helper).A5P(A._GetAutoObject(A.
Device.Helper).Ub.Id);}}if(AH5)this.Jn(5);else this.Jn(2);}else{A.ab5("%s",AG3);
return;}},BcD:function(G){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.AP7){A.z$([this,this.BcD],[B=A._GetAutoObject(A.Device.Device),B.Avz,B.AxO
],0);if(A._GetAutoObject(A.Device.Helper).W.Aqd())this.Jn(5);else this.Jn(1);}},
BdU:function(){if(this.AAO===true)this.Jn(6);else A._GetAutoObject(C.AY).B1(24);
},ByN:function(){A._GetAutoObject(A.Device.Device).A6(36,true,A.jV,0,[this,this.
Bx3]);},Bx3:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(
!!As&&((As.PopupState===4)||(As.PopupState===3))){A._GetAutoObject(A.Device.Helper
).Aki();this.Jn(1);}},Azp:function(G){if(!this.DL.Gl)this.Jn(1);},A1q:function(G
){},BtL:function(s){this.A1q(s);},Bh4:function(){return this.AAO;},Am1:function(
){return this.Gl;},_Init:function(aArg){C.QT._Init.call(this,aArg);A.acg.Text._Init.
call(this.Ab2={I:this},0);this.__proto__=C.L9;this.N.Y(true);this.Dr(C.Aqe);this.
Number.H(AWQ);this.Number.R(A.aaR(A.acf.A9g));this.I5.H(AWR);this.IG.H(AWS);this.
Ab2.H(AWT);this.Ab2.R(AWU);this.Ab2.L(A.jb.Text);this.J(this.Ab2,0);this.N.Cw=[this
,this.Ee];this.N.Cg=[this,this.BtL];this.N.CS(A.aaL(A.ach.EV));this.Number.S(A.aaL(
A.fl.Ah));this.Ab2.S(A.aaL(A.fl.Hi));this.DL=A._GetAutoObject(C.DL);},_Done:function(
){this.__proto__=C.QT;this.Ab2._Done();C.QT._Done.call(this);},_ReInit:function(
){C.QT._ReInit.call(this);this.Ab2._ReInit();this.Number.R(A.aaR(A.acf.A9g));this.
Number.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.QT._Mark.call(this,D);if((B=
this.DL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ab2)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A2W={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,AoA:-1,Gl:0,Bu8:function(){var Bdx=false;
var N7=A._GetAutoObject(A.Device.Helper).W.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bq.La())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Bq.Hz().toFixed(),0,null);else if(N7){Bdx=true;var BT=A._NewObject(
A.Device.Rating,0);BT.Gb();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.
Id);A._GetAutoObject(A.Device.Helper).Awy(BT,5);BT.OnSetAppearance(3);BT.Cp(A._GetAutoObject(
A.Device.Device).Bq);}else{var BT=A._NewObject(A.Device.Rating,0);BT.Gb();BT.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Helper).Awy(BT
,5);BT.OnSetAppearance(1);BT.Cp(A._GetAutoObject(A.Device.Device).Bq);}A._GetAutoObject(
A.Device.Helper).W.EK(A._GetAutoObject(A.Device.Helper).W.CF,A._GetAutoObject(A.
Device.Device).Aq);if(Bdx)A._GetAutoObject(A.Device.Helper).W.T2(false);if(N7)A.
_GetAutoObject(A.Device.Helper).W.Ano(false);else A._GetAutoObject(A.Device.Helper
).W.Ano(true);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(A.Device.Device
).Aq);if(A._GetAutoObject(A.Device.Helper).W.IsAlarm)A._GetAutoObject(A.Device.Device
).A6(17,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MM]);else A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MM]);},Bu_:function(){A._GetAutoObject(
A.Device.Helper).W.AFm(!A._GetAutoObject(A.Device.Helper).W.IsWatch);A._GetAutoObject(
A.Device.Helper).W.Cp(A._GetAutoObject(A.Device.Device).Aq);if(A._GetAutoObject(
A.Device.Helper).W.IsWatch)A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MM]);else A._GetAutoObject(
A.Device.Device).A6(20,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MM]);},P7:function(JO){switch(JO){case 4:this.Bu8();break;case
128:A._GetAutoObject(C.AY).B1(7);break;case 16:A._GetAutoObject(C.AY).B1(36);break;
case 1:A._GetAutoObject(C.AY).B1(10);break;case 2:A._GetAutoObject(C.AY).B1(11);
break;case 8:this.Bu_();break;case 64:A._GetAutoObject(C.AY).B1(29);break;case 32:
A._GetAutoObject(C.AY).B1(54);break;case 256:A._GetAutoObject(C.AY).B1(21);break;
case 512:A._GetAutoObject(C.AY).B1(30);break;case 1024:this.BwX();break;case 262144:
this.By7();break;case 2048:this.Acz();break;case 4096:this.Bat(false);break;case
8192:this.Bu9();break;case 16384:this.BwW();break;case 32768:this.Bvv();break;case
524288:this.Bvw();break;case 65536:this.BvV();break;case 131072:this.ByD();break;
case 0:break;default:throw new Error(AWV);}},BaD:function(JO,BuE){var EF=A._NewObject(
C.VV,0);EF.Abx(false);EF.Aj(true);EF.AQ=BuE;EF.Bi$(JO);switch(JO){case 1:{EF.U(A.
aaR(A.acf.Ahc));EF.Dz(A.aaL(A.ach.AKn));}break;case 2:{EF.U(A.aaR(A.acf.A82));EF.
Dz(A.aaL(A.ach.AKo));}break;case 4:{EF.U(A.aaR(A.acf.Alarm));EF.Dz(A.aaL(A.ach.AKp
));EF.AEo(true);}break;case 8:{EF.U(A.aaR(A.acf.Arq));EF.Dz(A.aaL(A.ach.AKq));EF.
AEo(true);}break;case 16:{EF.U(A.aaR(A.acf.AKX));EF.Dz(A.aaL(A.ach.AKr));}break;
case 32:{EF.U(A.aaR(A.acf.AnimalLoss));EF.Dz(A.aaL(A.ach.AKs));}break;case 64:{EF.
U(A.aaR(A.acf.Unregister));EF.Dz(A.aaL(A.ach.AKt));}break;case 128:{EF.U(A.aaR(A.
acf.Edit));EF.Dz(A.aaL(A.ach.AKu));}break;case 256:{EF.U(A.aaR(A.acf.Weighing));
EF.Dz(A._GetAutoObject(A.acj.DM).Bwy());}break;case 512:{EF.U(A.aaR(A.acf.AQu));
EF.Dz(A.aaL(A.ach.AKf));}break;case 1024:{EF.U(A.aaR(A.acf.LinkTransponder));EF.
Dz(A.aaL(A.ach.AKg));}break;case 262144:{EF.U(A.aaR(A.acf.UnlinkTransponder));EF.
Dz(A.aaL(A.ach.AKm));}break;case 2048:{EF.U(A.aaR(A.acf.O5));EF.Dz(A.aaL(A.ach.AKh
));}break;case 4096:{EF.U(A.aaR(A.acf.Calving));EF.Dz(A.aaL(A.ach.AKi));}break;case
8192:{EF.U(A.aaR(A.acf.DryOff));EF.Dz(A.aaL(A.ach.AKj));EF.AEo(true);}break;case
16384:{EF.U(A.aaR(A.acf.BfT));EF.Dz(A.aaL(A.ach.AKk));}break;case 131072:{EF.U(A.
aaR(A.acf.BlZ));EF.Dz(A.aaL(A.ach.AKl));}break;default:A.ab5("%s",(AWW+JO.toFixed(
))+AWX);}return EF;},Bv8:function(){this.AoA=this.AoA+1;if(this.AoA>=this.AutoActions.
X0())this.Jn(0);else this.Jn(2);},Byq:function(){this.AoA=-1;},AyY:function(){return(
this.AoA>-1)&&!this.BwQ();},BwQ:function(){return this.AoA>=this.AutoActions.X0(
);},Jn:function(E){if(this.Gl===E)return;this.Gl=E;switch(E){case 1:this.Bv8();break;
case 2:{var ZO=this.AutoActions.Vt(this.AoA);if(this.A2T(A._GetAutoObject(A.Device.
Helper).W,ZO))this.P7(ZO);else A._GetAutoObject(A.Device.Device).A6(64,true,(this.
ActionToString.Lm(ZO)+Asr)+this.AnimalTypeToString.Lm(A._GetAutoObject(A.Device.
Helper).W.AnimalType),0,[this,this.MM]);}break;case 0:this.Byq();break;default:throw new
Error(Axu);}A.abo([this,this.Am1,this.Jn],0);},MM:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&((As.Id===63)&&(As.PopupState===7)))this.Bat(true
);if((!!As&&(((As.PopupState===4)||(As.PopupState===3))||(As.PopupState===8)))&&
this.AyY())this.Jn(1);},Bav:function(){return!!A._GetAutoObject(A.Device.Helper).
W&&(A._GetAutoObject(A.Device.Device).Aq.K7(0,A._GetAutoObject(A.Device.Helper).
W.Id)>=0);},BwX:function(){if(!A._GetAutoObject(A.Device.Helper).W.TransponderId
)A._GetAutoObject(C.AY).B1(50);else A._GetAutoObject(A.Device.Device).A6(32,true
,A.jV,0,[this,this.MM]);},Acz:function(){this.Jn(1);},Byo:function(){var N7=A._GetAutoObject(
A.Device.Helper).W.IsAlarm;if(N7&&(!!A._GetAutoObject(A.Device.Helper).W.WorstAssessment&&(
A._GetAutoObject(A.Device.Helper).W.WorstAssessment!==5))){if(A._GetAutoObject(A.
Device.Device).Bq.La())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bq.Hz().toFixed(),0,null);else{var BT=A._NewObject(A.Device.Rating
,0);BT.Gb();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.Id);A._GetAutoObject(
A.Device.Helper).Awy(BT,5);BT.Cp(A._GetAutoObject(A.Device.Device).Bq);}}A._GetAutoObject(
A.Device.Helper).W.EK(A._GetAutoObject(A.Device.Helper).W.CF,A._GetAutoObject(A.
Device.Device).Aq);A._GetAutoObject(A.Device.Helper).W.T2(false);if(N7)A._GetAutoObject(
A.Device.Helper).W.Ano(false);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MM]);},Byp:function(){A._GetAutoObject(
A.Device.Helper).W.AFm(false);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(20,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MM]);},Bat:function(Bwa){if(
!A._GetAutoObject(A.Device.Helper).W.NaisId&&(Bwa===false))A._GetAutoObject(A.Device.
Device).A6(63,true,A.jV,0,[this,this.MM]);else A._GetAutoObject(C.AY).B1(62);},Bu9:
function(){A._GetAutoObject(A.Device.Helper).W.Aq$(!A._GetAutoObject(A.Device.Helper
).W.IsDry);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(A.Device.Device
).Aq);if(A._GetAutoObject(A.Device.Helper).W.IsDry)A._GetAutoObject(A.Device.Device
).A6(54,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MM]);else A._GetAutoObject(A.Device.Device).A6(55,true,A._GetAutoObject(A.Device.
Helper).W.VisualId.toFixed(),2000,[this,this.MM]);},BwW:function(){if(!A._GetAutoObject(
A.Device.Helper).W.NaisId)A._GetAutoObject(C.AY).B1(92);else A._GetAutoObject(A.
Device.Device).A6(69,true,A.jV,0,[this,this.MM]);},Bvv:function(){if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjA(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.AgU(false);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(A.Device.
Device).Aq);A._GetAutoObject(A.Device.Device).A6(65,true,A.jV,2000,[this,this.MM
]);}else{A._GetAutoObject(A.Device.Helper).W.Aep(false);A._GetAutoObject(A.Device.
Helper).W.Cp(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.Device
).A6(60,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.
MM]);}}},BvV:function(){A._GetAutoObject(A.Device.Helper).W.AgU(false);A._GetAutoObject(
A.Device.Helper).W.Cp(A._GetAutoObject(A.Device.Device).Aq);if(A._GetAutoObject(
A.Device.Helper).W.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).AjA(A._GetAutoObject(A.Device.Helper).W.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).W.AgU(false);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(A.Device.
Device).Aq);A._GetAutoObject(A.Device.Device).A6(65,true,A.jV,2000,[this,this.MM
]);}else if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)A._GetAutoObject(A.
Device.Device).A6(105,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(
),2000,[this,this.MM]);else A._GetAutoObject(A.Device.Device).A6(61,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MM]);}},A2T:function(EB,JO
){var Qf=false;switch(JO){case 32768:Qf=EB.IsRegistrationNoticePending&&!!EB.NaisIdMother;
break;case 524288:Qf=EB.IsRegistrationNoticePending&&!EB.NaisIdMother;break;case
4096:case 8192:switch(EB.AnimalType){case 1:Qf=true;break;default:;}break;case 512:
switch(EB.AnimalType){case 0:Qf=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qf=true;break;default:A.ab5("%s",AWY+
JO.toFixed());}return Qf;},ByD:function(){if(!A._GetAutoObject(A.Device.Helper).
W.NaisId)A._GetAutoObject(C.AY).B1(91);else A._GetAutoObject(A.Device.Device).A6(
69,true,A.jV,0,[this,this.MM]);},By7:function(){if(!A._GetAutoObject(A.Device.Helper
).W.TransponderId)A._GetAutoObject(A.Device.Device).A6(85,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),0,[this,this.MM]);else{A._GetAutoObject(A.
Device.Helper).W.M9(0);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(A.
Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(86,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MM]);}},Bvw:function(){if(
A._GetAutoObject(A.Device.Helper).W.IsRegistrationNoticePending){A._GetAutoObject(
A.Device.Helper).W.Aep(false);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(99,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,[this,this.MM]);}},Am1:function(){return this.
Gl;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.A2W;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AKz={Aao:null,ApH:null,Jn:function(E){if(this.Gl===E)return;C.L9.Jn.call(this
,E);switch(E){case 1:this.Dr(C.Aqe);break;case 5:case 6:this.Dr(C.Iy);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Axu);}},A1q:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.L9._Init.call(this
,aArg);A.acg.Text._Init.call(this.Aao={I:this},0);C.AKA._Init.call(this.ApH={I:this
},0);this.__proto__=C.AKz;this.A7J(true);this.Aao.H(AWZ);this.Aao.R(A.aaR(A.acf.
O5));this.Aao.L(A.jb.Text);this.ApH.H(AW0);this.J(this.Aao,0);this.J(this.ApH,0);
this.N.Cm(A.aaL(A.ach.Aa0));this.Aao.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.L9;this.Aao._Done();this.ApH._Done();C.L9._Done.call(this);},_ReInit:function(
){C.L9._ReInit.call(this);this.Aao._ReInit();this.ApH._ReInit();this.Aao.R(A.aaR(
A.acf.O5));this.Aao.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L9._Mark.call(
this,D);if((B=this.Aao)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ApH)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
IK:null,JM:null,A1q:function(G){if(this.IK.LN(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.L9._Init.call(this,aArg);A.acg.Text._Init.call(this.
JM={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JM.H(AW1);this.JM.KI(
true);this.JM.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.AAB));this.
JM.L(A.jb.Text);this.J(this.JM,0);this.N.Cm(A.aaL(A.ach.Aa0));this.JM.S(A.aaL(A.
fl.Ah));this.IK=A._GetAutoObject(C.O6);},_Done:function(){this.__proto__=C.L9;this.
JM._Done();C.L9._Done.call(this);},_ReInit:function(){C.L9._ReInit.call(this);this.
JM._ReInit();this.JM.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.AAB
));this.JM.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L9._Mark.call(this,D);if((
B=this.IK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JM)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.AKA={Z:null,Init:
function(aArg){var B;A.zV([this,this.AAm],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.AtQ],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.AAm],this);
A.pe([this,this.AtQ],this);this.H(A.abK(this.M,AW2));this.Z.H(A.abK(this.Z.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AW3)));},Baj:function(G){var B;var Ak3=0;var Ayq=0;
var Baz;var X=this.Z.Ag;var Cr=null;Baz=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).X0()*58))/2)|0;while(!!X&&!((X.T&0x200)===0x200)){Cr=(C.VV.isPrototypeOf(
X)?X:null);if(((X.T&0x400)===0x400)&&!!Cr){Cr.H(A.abK(Cr.M,AW4));Cr.H(A.abM(Cr.M
,(Ayq*58)+Baz));Cr.H(A.abO(Cr.M,Ak3*58));if(Ayq>=3){Ak3=Ak3+1;Ayq=0;}else Ayq=Ayq+
1;}X=X.Ag;}this.A8(null);},AZS:function(JO){var EF=A._GetAutoObject(C.DL).BaD(JO
,null);this.J(EF,0);this.Baj(this);},Aoo:function(){var B;var X=this.Z.Ag;while(
!!X&&!((X.T&0x200)===0x200)){var Ada=X;X=X.Ag;if(((Ada.T&0x400)===0x400))this.HH(
Ada);}},AAm:function(G){this.Aoo();var P;var CM=A._GetAutoObject(C.AutoActions).
X0();for(P=0;P<CM;P=P+1){var ZO=A._GetAutoObject(C.AutoActions).Vt(P);this.AZS(ZO
);}A.pe([this,this.Baj],this);A.pe([this,this.AtQ],this);A.pe([this,this.Bzf],this
);},AtQ:function(G){var B;var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((
X.T&0x400)===0x400)){var Aa=(C.VV.isPrototypeOf(X)?X:null);Aa.AEo(false);}X=X.Ag;
}},Bzf:function(G){var B;var X=this.Z.Ag;while(!!X&&!((X.T&0x200)===0x200)){if(((
X.T&0x400)===0x400)){var Aa=(C.VV.isPrototypeOf(X)?X:null);var Bvl=A._GetAutoObject(
C.AutoActions).X0();if(!!Aa){var P;Aa.A7F(false);for(P=0;P<Bvl;P=P+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).Vt(P)){Aa.A7F(true);Aa.Bko(AW5+(P+1).toFixed());
}}}X=X.Ag;}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Z._Init.
call(this.Z={I:this},0);this.__proto__=C.AKA;this.Z.Kb(0);this.J(this.Z,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Z._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Z._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DL={_Init:function(
){C.A2W._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.AOa={Le:null,TL:null,Init:function(aArg){this.Le.R(A._GetAutoObject(
A.acj.Temperature).Alc());},_Init:function(aArg){C.Dv._Init.call(this,aArg);A.acg.
Text._Init.call(this.Le={I:this},0);C.CP._Init.call(this.TL={I:this},0);this.__proto__=
C.AOa;this.Le.H(AW6);this.Le.A2(0x12);this.Le.L(A.jb.Text);this.TL.H(AnU);this.TL.
R((A.aaR(A.acf.AgJ)+AG4)+A.aaR(A.acf.J5));this.TL.A2(0x12);this.TL.L(A.jb.Text);
this.J(this.Le,0);this.J(this.TL,0);this.Le.S(A.aaL(A.fl.Ah));this.TL.S(A.aaL(A.
fl.Ak));this.TL.A5(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=
C.Dv;this.Le._Done();this.TL._Done();C.Dv._Done.call(this);},_ReInit:function(){
C.Dv._ReInit.call(this);this.Le._ReInit();this.TL._ReInit();this.TL.R((A.aaR(A.acf.
AgJ)+AG4)+A.aaR(A.acf.J5));this.Le.S(A.aaL(A.fl.Ah));this.TL.S(A.aaL(A.fl.Ak));this.
TL.A5(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Dv._Mark.call(this,D);if((B=this.
Le)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TL)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ACf={Jl:null,DQ:null,_Init:
function(aArg){C.Dv._Init.call(this,aArg);A.acg.Text._Init.call(this.Jl={I:this}
,0);A.acg.Text._Init.call(this.DQ={I:this},0);this.__proto__=C.ACf;this.Jl.H(AW7
);this.Jl.KI(true);this.Jl.A2(0x14);this.Jl.R(A.aaR(A.acf.Ahf)+AG5);this.Jl.L(A.
jb.Text);this.DQ.H(AnU);this.DQ.KI(true);this.DQ.R(A.aaR(A.acf.AEV));this.DQ.L(A.
jb.Text);this.J(this.Jl,0);this.J(this.DQ,0);this.Jl.S(A.aaL(A.fl.Ak));this.DQ.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Dv;this.Jl._Done();this.DQ._Done(
);C.Dv._Done.call(this);},_ReInit:function(){C.Dv._ReInit.call(this);this.Jl._ReInit(
);this.DQ._ReInit();this.Jl.R(A.aaR(A.acf.Ahf)+AG5);this.DQ.R(A.aaR(A.acf.AEV));
this.Jl.S(A.aaL(A.fl.Ak));this.DQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Dv._Mark.call(this,D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
TB={IY:null,_Init:function(aArg){C.Dv._Init.call(this,aArg);C.CP._Init.call(this.
IY={I:this},0);this.__proto__=C.TB;this.IY.H(AG6);this.IY.R((((A.aaR(A.acf.Td)+ZH
)+AG7)+A.aaR(A.acf.A90))+OQ);this.IY.A2(0x12);this.IY.L(A.jb.Text);this.J(this.IY
,0);this.IY.S(A.aaL(A.fl.Ah));this.IY.A5(A.aaL(A.fl.Ak));this.IY.CC(A.aaL(A.fl.By
));},_Done:function(){this.__proto__=C.Dv;this.IY._Done();C.Dv._Done.call(this);
},_ReInit:function(){C.Dv._ReInit.call(this);this.IY._ReInit();this.IY.R((((A.aaR(
A.acf.Td)+ZH)+AG7)+A.aaR(A.acf.A90))+OQ);this.IY.S(A.aaL(A.fl.Ah));this.IY.A5(A.
aaL(A.fl.Ak));this.IY.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Dv._Mark.call(
this,D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.AOc={Lf:null,Ka:null,CT:function(){this.A9i();},Init:function(aArg){this.A9i(
);},A9i:function(){this.Lf.R(A._GetAutoObject(A.acj.DM).Afu());this.Ka.R(A._GetAutoObject(
A.acj.DM).ZX());},_Init:function(aArg){C.Dv._Init.call(this,aArg);A.acg.Text._Init.
call(this.Lf={I:this},0);C.CP._Init.call(this.Ka={I:this},0);this.__proto__=C.AOc;
this.Lf.H(AW8);this.Lf.A2(0x12);this.Lf.L(A.jb.Text);this.Ka.H(AnU);this.Ka.L(A.
jb.Text);this.J(this.Lf,0);this.J(this.Ka,0);this.Lf.S(A.aaL(A.fl.Ah));this.Ka.S(
A.aaL(A.fl.Ah));this.Ka.A5(A.aaL(A.fl.Ak));this.Ka.CC(A.aaL(A.fl.By));this.Init(
aArg);},_Done:function(){this.__proto__=C.Dv;this.Lf._Done();this.Ka._Done();C.Dv.
_Done.call(this);},_ReInit:function(){C.Dv._ReInit.call(this);this.Lf._ReInit();
this.Ka._ReInit();this.Lf.S(A.aaL(A.fl.Ah));this.Ka.S(A.aaL(A.fl.Ah));this.Ka.A5(
A.aaL(A.fl.Ak));this.Ka.CC(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;C.
Dv._Mark.call(this,D);if((B=this.Lf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ka
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ALO={Mb:null,Hd:null,H2:null,AN:null,A9:null,FI:0,W9:0,H5:0,Aib:false,Init:function(
aArg){},Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.Background.H(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hd.H([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A9.H([this.Hd.M[2]-1,0,this.Hd.M[2]+1,aSize[
1]]);this.Mb.H([this.Background.M[2],0,aSize[0],aSize[1]]);this.H2.H(this.Mb.M);
},Ai:function(Ae){C.Ba.Ai.call(this,Ae);if(this.Aib){this.H2.R(Q7);this.H2.L(A.jb.
Text);this.Mb.L(this.Background.AP);}else{this.H2.R(A._GetAutoObject(A.Device.Converter
).SJ(this.FI,2,true));this.H2.L(A._GetAutoObject(A.acj.DM).AyQ(this.FI,this.H5));
this.Mb.L(A._GetAutoObject(A.acj.DM).AyO(this.FI,this.H5));}if(this.W9>0)this.Hd.
R(A._GetAutoObject(A.Device.Converter).AkD(this.W9));else this.Hd.R(Q7);this.Hd.
L(this.V.AP);},Cc:function(Ac){if(!this.AX)return;this.Hr=Ac;if(!!this.AX){var Oe=
this.AX.CA(Ac,1);var AtM=this.AX.Hy(Ac,24);var AIO=this.AX.CA(Ac,23);var Apv=this.
AX.Hy(Ac,19);this.W9=this.AX.CA(Ac,18);if((AtM>0)&&(AtM!==Apv)){var Lv=A._GetAutoObject(
A.Device.Helper).MF(AtM,Apv);if(!!Lv){this.Aib=false;this.FI=A._GetAutoObject(A.
acj.DM).Ak2(Lv,AIO,this.W9);}else{this.Aib=true;this.FI=0;}}else{this.Aib=true;this.
FI=0;}this.U(Oe.toFixed());this.H5=this.AX.Amp(Ac,14);this.An();}},_Init:function(
aArg){C.Ba._Init.call(this,aArg);A.acg.AI._Init.call(this.Mb={I:this},0);A.acg.Text.
_Init.call(this.Hd={I:this},0);A.acg.Text._Init.call(this.H2={I:this},0);A.acg.AI.
_Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A9={I:this},0);this.__proto__=
C.ALO;this.V.H(OO);this.Mb.H(Ast);this.Hd.H(AG1);this.Hd.A2(0x12);this.Hd.R(SN);
this.Hd.L(A.jb.Text);this.H2.H(AG2);this.H2.R(SN);this.H2.L(A.jb.Text);this.AN.H(
AnS);this.AN.L(A.jb.Bb);this.A9.H(AnT);this.A9.L(A.jb.Bb);this.J(this.Mb,0);this.
J(this.Hd,0);this.J(this.H2,0);this.J(this.AN,0);this.J(this.A9,0);this.Hd.S(A.aaL(
A.fl.Ah));this.H2.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.Mb._Done();this.Hd._Done();this.H2._Done();this.AN._Done();this.A9._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.Mb._ReInit(
);this.Hd._ReInit();this.H2._ReInit();this.AN._ReInit();this.A9._ReInit();this.Hd.
S(A.aaL(A.fl.Ah));this.H2.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Mb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.MT={Ma:null,AN:null,A9:null,Gm:null,WW:0,Init:
function(aArg){},Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.Ma.H([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.H(this.Ma.M);this.Background.H([].concat(this.Ma.
M[2],this.Background.M.slice(1,4)));this.Background.H(A.abN(this.Background.M,aSize[
0]));this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gm.H([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A9.H([this.Gm.M[2]-1,0,this.
Gm.M[2]+1,aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Gm.L(this.V.AP
);if(!!this.WW&&(this.WW!==5)){this.Ma.L(A._GetAutoObject(A.acj.Assessment).P9(this.
WW));this.V.L(A._GetAutoObject(A.acj.Assessment).W6(this.WW));}else this.Ma.L(this.
Background.AP);},Cc:function(Ac){if(!this.AX)return;this.Hr=Ac;if(!!this.AX){var
Oe=this.AX.CA(Ac,1);var LJ=this.AX.IU(Ac,13);var Ak9=this.AX.IU(Ac,17);var Alg=this.
AX.HU(Ac,11);var Ax_=this.AX.Hy(Ac,4);var Afi=A._GetAutoObject(A.Device.Helper).
MF(Ax_,A._GetAutoObject(A.Device.Helper).Dy());this.WW=A._GetAutoObject(A.Device.
Helper).AKU(LJ,Alg,Ak9);this.U(Oe.toFixed());if(Afi<100)this.Gm.R((Afi.toFixed()+
CO)+A.aaR(A.acf.AKy));else this.Gm.R(A._GetAutoObject(A.acj.KB).ABN(Ax_,A._GetAutoObject(
A.Device.Helper).Dy(),AG8));this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AI._Init.call(this.Ma={I:this},0);A.acg.AI._Init.call(this.AN={I:this
},0);A.acg.AI._Init.call(this.A9={I:this},0);A.acg.Text._Init.call(this.Gm={I:this
},0);this.__proto__=C.MT;this.Ma.H(Ast);this.Background.H(AW9);this.V.H(OO);this.
AN.H(AnS);this.AN.L(A.jb.Bb);this.A9.H(AnT);this.A9.L(A.jb.Bb);this.Gm.H(Axv);this.
J(this.Ma,-3);this.J(this.AN,0);this.J(this.A9,0);this.J(this.Gm,0);this.Gm.S(A.
aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Ma._Done(
);this.AN._Done();this.A9._Done();this.Gm._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Ma._ReInit();this.AN._ReInit();this.A9._ReInit(
);this.Gm._ReInit();this.Gm.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.Ma)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gm
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ALM={Ai2:null,NV:null,AN:null,A9:null,Jf:null,AI9:0,A0S:0,Init:function(aArg
){},Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.Background.H(A.abK(this.Background.
M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AN.H([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.NV.H([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.Ai2.H(this.NV.M);this.A9.H([this.NV.M[2]-1,0,this.NV.M[2]+1,aSize[1]]);
this.Jf.H([this.NV.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Jf.C7(this.V.AP);if(this.AI9>0){this.Ai2.L(A._GetAutoObject(A.acj.Assessment
).P9(this.A0S));this.NV.L(A._GetAutoObject(A.acj.Assessment).W6(this.A0S));}else{
this.Ai2.L(this.Background.AP);this.NV.L(this.V.AP);}},Cc:function(Ac){if(!this.
AX)return;this.Hr=Ac;if(!!this.AX){var KT=this.AX.CA(Ac,0);var Oe=this.AX.CA(Ac,
1);this.AI9=this.AX.CA(Ac,5);this.A0S=this.AX.IU(Ac,17);this.U(Oe.toFixed());if(
this.AI9>0)this.NV.R(A._GetAutoObject(A.Device.Converter).Aku(this.AI9));else this.
NV.R(Q7);var WV=A._GetAutoObject(A.Device.Helper).Ze(6);A._GetAutoObject(A.Device.
Device).Sq(Ac);var AY2=A._GetAutoObject(A.Device.Helper).Bgi(A._GetAutoObject(A.
Device.Device).Bq,9,KT,WV,0);this.Jf.A7S(AY2.Get(3));this.Jf.A7U(AY2.Get(2));this.
Jf.A7T(AY2.Get(1));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AI._Init.call(this.Ai2={I:this},0);A.acg.Text._Init.call(this.NV={I:this},
0);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A9={I:this},
0);C.Jf._Init.call(this.Jf={I:this},0);this.__proto__=C.ALM;this.NV.A2(0x12);this.
NV.R(SN);this.NV.L(A.jb.Text);this.AN.H(AnS);this.AN.L(A.jb.Bb);this.A9.H(AnT);this.
A9.L(A.jb.Bb);this.Jf.H(AW_);this.J(this.Ai2,0);this.J(this.NV,0);this.J(this.AN
,0);this.J(this.A9,0);this.J(this.Jf,0);this.NV.S(A.aaL(A.fl.Ah));this.Init(aArg
);},_Done:function(){this.__proto__=C.Ba;this.Ai2._Done();this.NV._Done();this.AN.
_Done();this.A9._Done();this.Jf._Done();C.Ba._Done.call(this);},_ReInit:function(
){C.Ba._ReInit.call(this);this.Ai2._ReInit();this.NV._ReInit();this.AN._ReInit();
this.A9._ReInit();this.Jf._ReInit();this.NV.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ai2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jf={AeQ:null,
ColoredCounterAttrSet:null,ABd:0,ABe:0,ABc:0,KJ:0,Ai:function(Ae){var B;A.Core.O.
Ai.call(this,Ae);var AI0;var AKe;var AJu;var Alo=0;if(this.ABc>0){AI0=this.ABc.toFixed(
);Alo+=AI0.length;}else{AI0=AW$;Alo++;}if(this.ABe>0){AKe=this.ABe.toFixed();Alo+=
AKe.length;}else{AKe=Axw;Alo++;}if(this.ABd>0){AJu=this.ABd.toFixed();Alo+=AJu.length;
}else{AJu=AGW;Alo++;}if(Alo<=4)this.ColoredCounterAttrSet.AgS(A.aaL(A.fl.Ah));else
if(Alo<=5)this.ColoredCounterAttrSet.AgS(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
AgS(A.aaL(A.fl.By));this.AeQ.R(((((AXa+AI0)+AXb)+AKe)+AXc)+AJu);},A7T:function(E
){if(this.ABd===E)return;this.ABd=E;this.An();},A7U:function(E){if(this.ABe===E)
return;this.ABe=E;this.An();},A7S:function(E){if(this.ABc===E)return;this.ABc=E;
this.An();},C7:function(E){if(this.KJ===E)return;this.KJ=E;this.ColoredCounterAttrSet.
AgP(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.At7._Init.call(
this.AeQ={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jf;this.H(AG9);this.AeQ.AW(0x3F);this.AeQ.H(AG9);this.
AeQ.R(SN);this.ColoredCounterAttrSet.Bjl(A.jb.EU);this.ColoredCounterAttrSet.A7O(
A.jb.HZ);this.ColoredCounterAttrSet.A7N(A.jb.FW);this.ColoredCounterAttrSet.AgP(
A.jb.Text);this.KJ=A.jb.Text;this.J(this.AeQ,0);this.AeQ.A7I(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.AgS(A.aaL(A.fl.Ah));this.ColoredCounterAttrSet.A7K(
null);},_Done:function(){this.__proto__=A.Core.O;this.AeQ._Done();this.ColoredCounterAttrSet.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AeQ._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
AgS(A.aaL(A.fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AeQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ALL={AsY:null
,AbI:null,AbJ:null,AbK:null,Jf:null,AN:null,A9:null,D4:null,Ll:null,Ab4:null,KK:
null,KL:null,AIa:0,AH$:0,AH_:0,Init:function(aArg){},Bg:function(aSize){C.Ba.Bg.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.AbI.H([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.Ab4.H(this.
AbI.M);this.A9.H([this.AbI.M[2]-1,0,this.AbI.M[2]+1,aSize[1]]);this.AbJ.H([this.
AbI.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KK.H(this.AbJ.M);this.D4.H([this.
AbJ.M[2]-1,0,this.AbJ.M[2]+1,aSize[1]]);this.AbK.H([this.AbJ.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KL.H(this.AbK.M);this.Ll.H([this.AbK.M[2]-1,0,this.AbK.
M[2]+1,aSize[1]]);this.Jf.H([this.AbK.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Jf.C7(this.V.AP);this.AbI.L(A._GetAutoObject(A.acj.
Assessment).P9(this.AH_));this.AbJ.L(A._GetAutoObject(A.acj.Assessment).P9(this.
AH$));this.AbK.L(A._GetAutoObject(A.acj.Assessment).P9(this.AIa));this.Ab4.L(A._GetAutoObject(
A.acj.Assessment).W6(this.AH_));this.KK.L(A._GetAutoObject(A.acj.Assessment).W6(
this.AH$));this.KL.L(A._GetAutoObject(A.acj.Assessment).W6(this.AIa));this.Ab4.Y(
!this.AH_);this.KK.Y(!this.AH$);this.KL.Y(!this.AIa);this.Jf.A7S(this.AsY.Get(3)
);this.Jf.A7U(this.AsY.Get(2));this.Jf.A7T(this.AsY.Get(1));},Cc:function(Ac){if(
!this.AX)return;this.Hr=Ac;if(!!this.AX){var KT=this.AX.CA(Ac,0);var Oe=this.AX.
CA(Ac,1);this.U(Oe.toFixed());A._GetAutoObject(A.Device.Device).Sq(Ac);this.AH_=
A._GetAutoObject(A.Device.Helper).A0s(A._GetAutoObject(A.Device.Device).Bq,KT,0);
this.AH$=A._GetAutoObject(A.Device.Helper).A0s(A._GetAutoObject(A.Device.Device).
Bq,KT,-1);this.AIa=A._GetAutoObject(A.Device.Helper).A0s(A._GetAutoObject(A.Device.
Device).Bq,KT,-2);this.AsY=A._GetAutoObject(A.Device.Helper).A4Y(A._GetAutoObject(
A.Device.Device).Bq,KT,0,0);this.An();}},_Init:function(aArg){C.Ba._Init.call(this
,aArg);A.acg.AI._Init.call(this.AbI={I:this},0);A.acg.AI._Init.call(this.AbJ={I:
this},0);A.acg.AI._Init.call(this.AbK={I:this},0);C.Jf._Init.call(this.Jf={I:this
},0);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A9={I:this
},0);A.acg.AI._Init.call(this.D4={I:this},0);A.acg.AI._Init.call(this.Ll={I:this
},0);A.acg.Text._Init.call(this.Ab4={I:this},0);A.acg.Text._Init.call(this.KK={I:
this},0);A.acg.Text._Init.call(this.KL={I:this},0);this.__proto__=C.ALL;this.AN.
L(A.jb.Bb);this.A9.L(A.jb.Bb);this.D4.L(A.jb.Bb);this.Ll.L(A.jb.Bb);this.Ab4.R(AnV
);this.KK.R(AnV);this.KL.R(AnV);this.J(this.AbI,0);this.J(this.AbJ,0);this.J(this.
AbK,0);this.J(this.Jf,0);this.J(this.AN,0);this.J(this.A9,0);this.J(this.D4,0);this.
J(this.Ll,0);this.J(this.Ab4,0);this.J(this.KK,0);this.J(this.KL,0);this.Ab4.S(A.
aaL(A.fl.Ah));this.KK.S(A.aaL(A.fl.Ah));this.KL.S(A.aaL(A.fl.Ah));this.AsY=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Ba;this.AbI._Done();this.AbJ._Done();this.AbK._Done();this.Jf._Done();this.AN.
_Done();this.A9._Done();this.D4._Done();this.Ll._Done();this.Ab4._Done();this.KK.
_Done();this.KL._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.
call(this);this.AbI._ReInit();this.AbJ._ReInit();this.AbK._ReInit();this.Jf._ReInit(
);this.AN._ReInit();this.A9._ReInit();this.D4._ReInit();this.Ll._ReInit();this.Ab4.
_ReInit();this.KK._ReInit();this.KL._ReInit();this.Ab4.S(A.aaL(A.fl.Ah));this.KK.
S(A.aaL(A.fl.Ah));this.KL.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ba._Mark.
call(this,D);if((B=this.AsY)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbI).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AbJ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ll)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ab4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.Ams={HX:null,Afv:false,Bg:function(aSize){var
B;this.HX.H([(aSize[0]-((B=this.HX.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.H([
10,0,this.HX.M[0]-10,40]);C.Tm.Bg.call(this,aSize);},Ai:function(Ae){C.Tm.Ai.call(
this,Ae);if(this.Afv)this.HX.Ct(1);else this.HX.Ct(0);},JY:function(G){if(this.Afv
)C.Tm.JY.call(this,G);},JT:function(G){if(this.Afv)C.Tm.JT.call(this,G);},S8:function(
AM){C.Tm.S8.call(this,AM);if(!!AM){this.H(A.abI(this.M,80));this.Afv=true;this.YZ(
true);}else{this.H(A.abI(this.M,40));this.Afv=false;this.YZ(false);}},_Init:function(
aArg){C.Tm._Init.call(this,aArg);A.acg.Am._Init.call(this.HX={I:this},0);this.__proto__=
C.Ams;this.V.A2(0x11);this.HX.H(AGw);this.HX.Ct(0);this.J(this.HX,0);this.V.CC(A.
aaL(A.fl.By));this.HX.Ax(A.aaL(A.ach.Ap7));},_Done:function(){this.__proto__=C.Tm;
this.HX._Done();C.Tm._Done.call(this);},_ReInit:function(){C.Tm._ReInit.call(this
);this.HX._ReInit();this.V.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Tm._Mark.
call(this,D);if((B=this.HX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AEU={_Init:function(aArg){C.Awp._Init.call(this,aArg);this.__proto__=C.AEU;}
,_className:"Application::OptionsOverlaySeparator"};C.Akb={DE:A.jV,Bv:true,_Init:
function(aArg){C.Awp._Init.call(this,aArg);this.__proto__=C.Akb;},_className:"Application::OptionsOverlayNode"
};C.Aew={AQ:null,_Init:function(aArg){C.Akb._Init.call(this,aArg);this.__proto__=
C.Aew;},_Mark:function(D){var B;C.Akb._Mark.call(this,D);if((B=this.AQ)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.AMd={Ai:function(Ae){C.OG.Ai.call(this,Ae);var FE=A.jb.CE;var GG=A.jb.Text;if(
this.G_){FE=A.jb.Text;GG=A.jb.Bh;}this.Background.L(FE);this.V.L(GG);},_Init:function(
aArg){C.OG._Init.call(this,aArg);this.__proto__=C.AMd;},_className:"Application::DarkThemeTextItem"
};C.OG={Background:null,Cz:null,V:null,ApQ:0,G_:false,Init:function(aArg){},Bg:function(
aSize){C.G7.Bg.call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize)
);this.Cz.H(A.abK(this.Cz.M,aSize));this.V.H(A.abK(this.V.M,aSize));},Ai:function(
Ae){C.G7.Ai.call(this,Ae);this.Cz.L(this.ApQ);},U:function(E){if(this.DE===E)return;
this.DE=E;this.V.R(E);},Bf:function(E){if(this.G_===E)return;this.G_=E;this.An();
},Aq2:function(E){if(this.ApQ===E)return;this.ApQ=E;this.An();},_Init:function(aArg
){C.G7._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);A.acg.
Cz._Init.call(this.Cz={I:this},0);C.CP._Init.call(this.V={I:this},0);this.__proto__=
C.OG;this.H(BC);this.Background.H(AG_);this.Cz.H(BC);this.Cz.NO(2);this.Cz.L(A.jb.
Ab6);this.V.H(AXd);this.ApQ=A.jb.Ab6;this.J(this.Background,0);this.J(this.Cz,0);
this.J(this.V,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(A.
aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.G7;this.Background.
_Done();this.Cz._Done();this.V._Done();C.G7._Done.call(this);},_ReInit:function(
){C.G7._ReInit.call(this);this.Background._ReInit();this.Cz._ReInit();this.V._ReInit(
);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(A.aaL(A.fl.By));}
,_Mark:function(D){var B;C.G7._Mark.call(this,D);if((B=this.Background)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextItem"};C.AOf={Er:null
,IC:null,_Init:function(aArg){C.Es._Init.call(this,aArg);A.acg.Text._Init.call(this.
Er={I:this},0);A.acg.Text._Init.call(this.IC={I:this},0);this.__proto__=C.AOf;this.
H(ON);this.Background.H(ON);this.Er.H(AG$);this.Er.R(A.aaR(A.acf.GB));this.Er.A2(
0x11);this.Er.L(A.jb.Text);this.IC.AW(0x3F);this.IC.H(AHa);this.IC.HG(5);this.IC.
A2(0x14);this.IC.R(A.aaR(A.acf.AFz));this.IC.L(A.jb.Text);this.J(this.Er,0);this.
J(this.IC,0);this.Er.S(A.aaL(A.fl.Ah));this.IC.S(A.aaL(A.fl.Ah));},_Done:function(
){this.__proto__=C.Es;this.Er._Done();this.IC._Done();C.Es._Done.call(this);},_ReInit:
function(){C.Es._ReInit.call(this);this.Er._ReInit();this.IC._ReInit();this.Er.R(
A.aaR(A.acf.GB));this.IC.R(A.aaR(A.acf.AFz));this.Er.S(A.aaL(A.fl.Ah));this.IC.S(
A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Es._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.IC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineStatusSmall"};C.CX={R4:null,R5:null,Ad1:null,Agr:null,Qt:null
,KJ:0,LastTemperature:0,ApV:0,AnimalType:0,IsAlarm:false,IsFever:false,IsWatch:false
,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);switch(this.AnimalType){case 1:{this.
R4.Ax(A.aaL(A.ach.AuY));this.R5.Ax(A.aaL(A.ach.AuY));}break;case 2:{this.R4.Ax(A.
aaL(A.ach.Au1));this.R5.Ax(A.aaL(A.ach.Au1));}break;default:{this.R4.Ax(A.aaL(A.
ach.AdX));this.R5.Ax(A.aaL(A.ach.AdX));}}this.R4.L(A._GetAutoObject(A.acj.Assessment
).P9(this.ApV));var Apc;if(this.IsWatch)Apc=A.aaL(A.ach.APd);else if(this.IsFever
){Apc=A.aaL(A.ach.APc);switch(A._GetAutoObject(A.Device.Converter).AiR(this.LastTemperature
,this.AnimalType)){case 3:this.Qt.L(A.jb.FW);break;case 2:this.Qt.L(A.jb.HZ);break;
case 1:this.Qt.L(A.jb.EU);break;case 0:this.Qt.L(A.jb.AeV);break;default:;}}else
if(this.IsAlarm){Apc=A.aaL(A.ach.APb);if(!this.ApV||(this.ApV===5))this.Qt.L(A.jb.
FW);else this.Qt.L(0xFF000000);}else Apc=null;this.Ad1.Ax(Apc);this.Agr.Ax(Apc);
this.Qt.Ax(Apc);if(A._GetAutoObject(A.acj.Assessment).P9(this.ApV)===A.jb.EU)this.
R5.L(this.KJ);},DT:function(E){if(this.AnimalType===E)return;this.AnimalType=E;this.
An();},ADO:function(E){if(this.ApV===E)return;this.ApV=E;this.An();},C7:function(
E){if(this.KJ===E)return;this.KJ=E;this.An();},Aeq:function(E){if(this.IsWatch===
E)return;this.IsWatch=E;this.An();},T2:function(E){if(this.IsFever===E)return;this.
IsFever=E;this.An();},Aen:function(E){if(this.IsAlarm===E)return;this.IsAlarm=E;
this.An();},Aes:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.An();},Ha:function(){this.DT(0);this.ADO(0);this.Aen(false);this.T2(false
);this.Aeq(false);this.Aes(0);this.C7(A.jb.Text);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.acg.Am._Init.call(this.R4={I:this},0);A.acg.Am._Init.call(
this.R5={I:this},0);A.acg.Am._Init.call(this.Ad1={I:this},0);A.acg.Am._Init.call(
this.Agr={I:this},0);A.acg.Am._Init.call(this.Qt={I:this},0);this.__proto__=C.CX;
this.H(AkL);this.R4.AW(0x3F);this.R4.H(AkL);this.R4.L(A.jb.CE);this.R4.A2(0x12);
this.R4.Ct(0);this.R5.AW(0x3F);this.R5.H(AkL);this.R5.L(0xFF000000);this.R5.A2(0x12
);this.R5.Ct(1);this.Ad1.AW(0x3F);this.Ad1.H(AkL);this.Ad1.L(0xFF000000);this.Ad1.
Ct(0);this.Agr.AW(0x3F);this.Agr.H(AkL);this.Agr.Ct(1);this.Qt.AW(0x3F);this.Qt.
H(AkL);this.Qt.L(A.jb.C0);this.Qt.Ct(2);this.KJ=A.jb.Text;this.J(this.R4,0);this.
J(this.R5,0);this.J(this.Ad1,0);this.J(this.Agr,0);this.J(this.Qt,0);this.R4.Ax(
A.aaL(A.ach.AdX));this.R5.Ax(A.aaL(A.ach.AdX));},_Done:function(){this.__proto__=
A.Core.O;this.R4._Done();this.R5._Done();this.Ad1._Done();this.Agr._Done();this.
Qt._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.R4._ReInit();this.R5._ReInit();this.Ad1._ReInit();this.Agr._ReInit();
this.Qt._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
R4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ad1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Qt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.ALH={Cc:function(Ac){C.Ai6.Cc.call(this,Ac);if(!!this.AX){var BwU=this.AX.HU(
Ac,12);var Bvf=this.AX.R0(Ac,15);this.AaE.R(A._GetAutoObject(A.Device.Helper).MF(
Bvf,A._GetAutoObject(A.Device.Helper).Dy()).toFixed());this.R6.Y(BwU);this.An();
}},_Init:function(aArg){C.Ai6._Init.call(this,aArg);this.__proto__=C.ALH;},_className:
"Application::CalfListAlarmItem"};C.ACc={DQ:null,Mi:null,_Init:function(aArg){C.
TC._Init.call(this,aArg);A.acg.Text._Init.call(this.DQ={I:this},0);A.acg.Am._Init.
call(this.Mi={I:this},0);this.__proto__=C.ACc;this.DQ.H(AnU);this.DQ.KI(true);this.
DQ.R(A.aaR(A.acf.A4b));this.DQ.L(A.jb.Text);this.Mi.H(AXe);this.Mi.IZ(false);this.
Mi.L(A.jb.Text);this.Mi.A2(0x12);this.J(this.DQ,-2);this.J(this.Mi,0);this.DQ.S(
A.aaL(A.fl.Ak));this.Mi.Ax(A.aaL(A.ach.ACB));},_Done:function(){this.__proto__=C.
TC;this.DQ._Done();this.Mi._Done();C.TC._Done.call(this);},_ReInit:function(){C.
TC._ReInit.call(this);this.DQ._ReInit();this.Mi._ReInit();this.DQ.R(A.aaR(A.acf.
A4b));this.DQ.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TC._Mark.call(this,D
);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mi)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.J4={Background:null,Cz:
null,ABF:0,AAV:0,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Background.L(this.
ABF);this.Cz.L(this.AAV);},AvU:function(E){if(this.ABF===E)return;this.ABF=E;this.
An();},ADG:function(E){if(this.AAV===E)return;this.AAV=E;this.An();},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(this.Background={I:this
},0);A.acg.Am._Init.call(this.Cz={I:this},0);this.__proto__=C.J4;this.H(AnW);this.
Background.AW(0x3C);this.Background.H(AnW);this.Background.Ct(1);this.Cz.AW(0x3C
);this.Cz.H(AnW);this.ABF=A.jb.EU;this.AAV=A.jb.Text;this.J(this.Background,0);this.
J(this.Cz,0);this.Background.Ax(A.aaL(A.ach.J4));this.Cz.Ax(A.aaL(A.ach.J4));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.Cz._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background.
_ReInit();this.Cz._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.ApW={Pa:null,A5A:
false,Bg:function(aSize){C.Mf.Bg.call(this,aSize);this.V.H([].concat(this.Pa.M[2
]-this.V.Text.I0,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mf.Ai.call(this,Ae);this.
Pa.L(this.V.AP);},AD3:function(E){if(this.A5A===E)return;this.A5A=E;if(E)this.Pa.
R(AXf);else this.Pa.R(AHb);},_Init:function(aArg){C.Mf._Init.call(this,aArg);A.acg.
Text._Init.call(this.Pa={I:this},0);this.__proto__=C.ApW;this.Pa.AW(0x34);this.Pa.
H(ZA);this.Pa.R(AHb);this.J(this.Pa,0);this.Pa.S(A.aaL(A.fl.AM9));},_Done:function(
){this.__proto__=C.Mf;this.Pa._Done();C.Mf._Done.call(this);},_ReInit:function(){
C.Mf._ReInit.call(this);this.Pa._ReInit();},_Mark:function(D){var B;C.Mf._Mark.call(
this,D);if((B=this.Pa)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"
};C.ANz={Eo:function(G){C.J9.Eo.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.
Converter).Af1(4));},_Init:function(aArg){C.J9._Init.call(this,aArg);this.__proto__=
C.ANz;},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={
AutoRegistrationModeToString:null,Do:function(){return 3;},C9:function(aIndex){if((
aIndex<0)||(aIndex>=3))return-1;return aIndex;},Gg:function(aIndex){if((aIndex<0
)||(aIndex>=3))return A.jV;return this.AutoRegistrationModeToString.BX(aIndex);}
,DP:function(A1){return A1;},Hj:function(){return 2;},_Init:function(aArg){C.AC.
_Init.call(this,aArg);A.Device.AutoRegistrationModeToString._Init.call(this.AutoRegistrationModeToString={
I:this},0);this.__proto__=C.AutoRegistrationMode;},_Done:function(){this.__proto__=
C.AC;this.AutoRegistrationModeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.AutoRegistrationModeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"};C.AOg={
F_:null,Le:null,Ym:null,Init:function(aArg){this.Le.R(A._GetAutoObject(A.acj.Temperature
).Alc());},_Init:function(aArg){C.Es._Init.call(this,aArg);A.acg.Text._Init.call(
this.F_={I:this},0);A.acg.Text._Init.call(this.Le={I:this},0);A.acg.Text._Init.call(
this.Ym={I:this},0);this.__proto__=C.AOg;this.Background.L(A.jb.Text);this.F_.H(
AHc);this.F_.A2(0x11);this.F_.R(A.aaR(A.acf.Date));this.F_.L(A.jb.Bh);this.Le.H(
AXg);this.Le.A2(0x12);this.Le.L(A.jb.Bh);this.Ym.H(AXh);this.Ym.A2(0x12);this.Ym.
R(A.aaR(A.acf.Bt));this.Ym.L(A.jb.Bh);this.J(this.F_,0);this.J(this.Le,0);this.J(
this.Ym,0);this.F_.S(A.aaL(A.fl.Ah));this.Le.S(A.aaL(A.fl.Ah));this.Ym.S(A.aaL(A.
fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.Es;this.F_._Done();this.
Le._Done();this.Ym._Done();C.Es._Done.call(this);},_ReInit:function(){C.Es._ReInit.
call(this);this.F_._ReInit();this.Le._ReInit();this.Ym._ReInit();this.F_.R(A.aaR(
A.acf.Date));this.Ym.R(A.aaR(A.acf.Bt));this.F_.S(A.aaL(A.fl.Ah));this.Le.S(A.aaL(
A.fl.Ah));this.Ym.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Es._Mark.call(this
,D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Le)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ym)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineTemperatures"
};C.Tg={K_:null,Ajn:false,Init:function(aArg){var B;A.zX([this,this.A$p],[B=A._GetAutoObject(
A.Device.Device),B.AQR,B.AYo],0);this.AFs(this);A.pe([this,this.AHD],this);},Du:
function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);switch(DW.CI){case 6:this.
N_(this);break;case 7:this.MN(this);break;default:DW.Ny=true;}},CJ:function(G){var
B;if(!!this.K_)this.K_.CJ(this);C.AB.CJ.call(this,G);},Fd:function(G){var B;if(!
!this.K_)this.K_.Fd(this);C.AB.Fd.call(this,G);},AmU:function(G){A._GetAutoObject(
C.AY).Fm();},AFs:function(G){var B;if(!!this.K_){this.K_.Fd(this);this.HH(this.K_
);}if(this.Ajn)switch(A._GetAutoObject(A.Device.Device).D2){case 0:this.K_=A._NewObject(
C.AK1,0);break;case 1:this.K_=A._NewObject(C.AK2,0);break;case 3:this.K_=A._NewObject(
C.AK0,0);break;case 2:this.K_=A._NewObject(C.AK3,0);break;default:throw new Error(
Axx);}else switch(A._GetAutoObject(A.Device.Device).D2){case 0:this.K_=A._NewObject(
C.AK4,0);break;case 1:this.K_=A._NewObject(C.ALb,0);break;case 3:this.K_=A._NewObject(
C.AK7,0);break;case 2:this.K_=A._NewObject(C.ALg,0);break;default:throw new Error(
Axx);}this.HI(this);this.J(this.K_,0);this.K_.H(E4);this.K_.YW([this,this.AYO]);
this.K_.CJ(this);this.A8(this.K_);},A$p:function(s){this.AFs(s);},AR_:function(G
){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.Device.Device).Aei(
0);},ASa:function(G){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.
Device.Device).Aei(1);},AR$:function(G){A._GetAutoObject(A.Device.Device).Cj(0);
A._GetAutoObject(A.Device.Device).Aei(3);},ASb:function(G){A._GetAutoObject(A.Device.
Device).Cj(0);A._GetAutoObject(A.Device.Device).Aei(2);},HI:function(G){this.N.CS(
A.aaL(A.ach.EV));this.N.Hm(A.jV);this.N.Cw=[this,this.AmU];this.N.ADW(A.aaL(A.fl.
Ak));},AHD:function(s){this.HI(s);},Bj9:function(E){if(this.Ajn===E)return;this.
Ajn=E;A.pe([this,this.A$p],this);},A8O:function(G){this.Bj9(!this.Ajn);},Ble:function(
G){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.Device.Device).A6(
31,true,A.jV,0,null);},MN:function(G){},BC9:function(s){this.MN(s);},N_:function(
G){},BC8:function(s){this.N_(s);},BcA:function(G){var FD=A._GetAutoObject(A.Device.
Device).D2;FD=FD+1;if(FD>=4)FD=0;A._GetAutoObject(A.Device.Device).Aei(FD);},BxK:
function(G){var FD=A._GetAutoObject(A.Device.Device).D2;FD=FD-1;if(FD<0)FD=3;A._GetAutoObject(
A.Device.Device).Aei(FD);},Aic:function(G){},AYO:function(s){this.Aic(s);},_Init:
function(aArg){C.AB._Init.call(this,aArg);this.__proto__=C.Tg;this.Background.H(
B9);this.N.Y(true);this.N.Oz(true);this.N.OA(true);this.Dr(C.AN6);this.Init(aArg
);},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.K_)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"};C.D2={AQ:null
,AttrSet:null,Df:null,CJ:function(G){},AHs:function(s){this.CJ(s);},Fd:function(
G){A._GetAutoObject(A.Device.Device).Bq.Bm(null);},AxF:function(s){this.Fd(s);},
YW:function(E){if(A.aa0(this.AQ,E))return;this.AQ=E;this.Df.BK=E;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(this.AttrSet={
I:this},0);A.Core.BJ._Init.call(this.Df={I:this},0);this.__proto__=C.D2;this.H(SO
);this.AttrSet.A7O(A.jb.FW);this.AttrSet.A7N(A.jb.HZ);this.AttrSet.AgP(A.jb.Text
);this.Df.Filter=1;this.AttrSet.AgS(A.aaL(A.fl.Ak));this.AttrSet.A7K(null);},_Done:
function(){this.__proto__=A.Core.O;this.AttrSet._Done();this.Df._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AttrSet._ReInit(
);this.Df._ReInit();this.AttrSet.AgS(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.
Core.O._Mark.call(this,D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Df)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AK4={Rw:null,
Aaj:null,Tf:null,Te:null,RA:null,Ql:null,RB:null,Ry:null,Rz:null,Rx:null,CT:function(
){var B;this.Rw.Cc(this);this.Aaj.Cc(this);this.Tf.Cc(this);this.Te.Cc(this);this.
RA.Cc(this);this.Ql.Cc(this);this.RB.Cc(this);this.Ry.Cc(this);this.Rz.Cc(this);
this.Rx.Cc(this);},Hu:function(G){C.RC.Hu.call(this,G);switch(A._GetAutoObject(A.
Device.Helper).W.AnimalType){case 0:case 2:{this.Rw.Y(true);this.Aaj.Y(false);this.
Ry.Y(false);this.Rz.Y(false);this.Rx.Y(false);this.RA.Y(true);this.Ql.Y(true);this.
RB.Y(true);}break;case 1:{this.Rw.Y(false);this.Aaj.Y(true);this.Ry.Y(true);this.
Rz.Y(true);this.Rx.Y(true);this.RA.Y(false);this.Ql.Y(false);this.RB.Y(false);}break;
default:A.ab5("%s%e",Asj,A._GetAutoObject(A.Device.Helper).W.AnimalType);}A.pe([
this,this.MG],this);},_Init:function(aArg){C.RC._Init.call(this,aArg);C.Rw._Init.
call(this.Rw={I:this},0);C.AKZ._Init.call(this.Aaj={I:this},0);C.Tf._Init.call(this.
Tf={I:this},0);C.Te._Init.call(this.Te={I:this},0);C.RA._Init.call(this.RA={I:this
},0);C.Ql._Init.call(this.Ql={I:this},0);C.RB._Init.call(this.RB={I:this},0);C.Ry.
_Init.call(this.Ry={I:this},0);C.Rz._Init.call(this.Rz={I:this},0);C.Rx._Init.call(
this.Rx={I:this},0);this.__proto__=C.AK4;this.Rw.H(BC);this.Rw.Aj(true);this.Rw.
Bf(false);this.Aaj.H(KP);this.Aaj.Aj(true);this.Aaj.Bf(false);this.Tf.H(Q6);this.
Tf.Aj(true);this.Tf.Bf(true);this.Te.H(WJ);this.Te.Aj(true);this.Te.Bf(false);this.
RA.H(AkJ);this.RA.Aj(true);this.RA.Bf(true);this.Ql.H(AnQ);this.Ql.Aj(true);this.
Ql.Bf(false);this.RB.H(Ask);this.RB.Aj(true);this.RB.Bf(true);this.Ry.H(WI);this.
Ry.Aj(true);this.Ry.Bf(true);this.Rz.H(AXi);this.Rz.Aj(true);this.Rz.Bf(false);this.
Rx.H(AHd);this.Rx.Aj(true);this.Rx.Bf(true);this.J(this.Rw,0);this.J(this.Aaj,0);
this.J(this.Tf,0);this.J(this.Te,0);this.J(this.RA,0);this.J(this.Ql,0);this.J(this.
RB,0);this.J(this.Ry,0);this.J(this.Rz,0);this.J(this.Rx,0);},_Done:function(){this.
__proto__=C.RC;this.Rw._Done();this.Aaj._Done();this.Tf._Done();this.Te._Done();
this.RA._Done();this.Ql._Done();this.RB._Done();this.Ry._Done();this.Rz._Done();
this.Rx._Done();C.RC._Done.call(this);},_ReInit:function(){C.RC._ReInit.call(this
);this.Rw._ReInit();this.Aaj._ReInit();this.Tf._ReInit();this.Te._ReInit();this.
RA._ReInit();this.Ql._ReInit();this.RB._ReInit();this.Ry._ReInit();this.Rz._ReInit(
);this.Rx._ReInit();this.CT();},_Mark:function(D){var B;C.RC._Mark.call(this,D);
if((B=this.Rw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aaj)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Tf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Te)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ql).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.RB)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ry)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Rx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfos"
};C.ALg={Akm:function(LV){if(!LV)return;var Fk=A._NewObject(A.Device.Filter,0);var
HO=A._NewObject(A.Device.Int32FilterCriterion,0);HO.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fk.CZ(HO);var AcA=A._NewObject(A.Device.Int32FilterCriterion
,0);AcA.Initialize(8,2,0,true);Fk.CZ(AcA);LV.Bm(Fk);},ACM:function(){if(!A._GetAutoObject(
A.Device.Device).Bq)return false;var O2=A._GetAutoObject(A.Device.Device).Bq.Ch(
);if(O2<2)return false;var By4=A._GetAutoObject(A.Device.Device).Bq.Hy(0,6);var By5=
A._GetAutoObject(A.Device.Device).Bq.Hy(O2-1,6);var A0i=A._NewObject(A.Core.Bt,0
);A0i.Initialize(By4);var A2g=A._NewObject(A.Core.Bt,0);A2g.Initialize(By5);if((
A0i.Abp()!==A2g.Abp())||(A0i.Year!==A2g.Year))return true;else return false;},_Init:
function(aArg){C.Aal._Init.call(this,aArg);this.__proto__=C.ALg;this.ARJ(C.AF3);
this.ARK(C.ACg);this.ARA(C.Ql);this.Aq7(A.aaR(A.acf.AT1));this.Dq(A.aaR(A.acf.AjR
));},_ReInit:function(){C.Aal._ReInit.call(this);this.Aq7(A.aaR(A.acf.AT1));this.
Dq(A.aaR(A.acf.AjR));},_className:"Application::AnimalWeights"};C.ALb={Akm:function(
LV){if(!LV)return;var Fk=A._NewObject(A.Device.Filter,0);var HO=A._NewObject(A.Device.
Int32FilterCriterion,0);HO.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id
,true);Fk.CZ(HO);var AAb=A._NewObject(A.Device.Int32FilterCriterion,0);AAb.Initialize(
7,2,0,true);Fk.CZ(AAb);LV.Bm(Fk);},ACM:function(){return A._GetAutoObject(A.Device.
Device).Bq.Ch()>0;},_Init:function(aArg){C.Aal._Init.call(this,aArg);this.__proto__=
C.ALb;this.ARJ(C.ATo);this.ARK(C.AOg);this.ARA(C.Tf);this.Aq7(A.aaR(A.acf.A5X));
this.Dq(A.aaR(A.acf.AqI));},_ReInit:function(){C.Aal._ReInit.call(this);this.Aq7(
A.aaR(A.acf.A5X));this.Dq(A.aaR(A.acf.AqI));},_className:"Application::AnimalTemperatures"
};C.ASw={U$:null,Va:null,Xw:null,Af6:null,Km:null,AN:null,A9:null,D4:null,Ll:null
,Ann:null,KK:null,KL:null,Zb:null,Zc:null,Init:function(aArg){},Bg:function(aSize
){C.Ba.Bg.call(this,aSize);this.Background.H(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AN.H([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Km.H([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A9.H([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
U$.H([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.D4.H([this.
U$.M[2]-1,0,this.U$.M[2]+1,aSize[1]]);this.Va.H([this.U$.M[2],0,this.U$.M[2]+22,
aSize[1]]);this.Ll.H([this.Va.M[2]-1,0,this.Va.M[2]+1,aSize[1]]);this.Xw.H([this.
Va.M[2],0,this.Va.M[2]+22,aSize[1]]);this.Ann.H([this.Xw.M[2]-1,0,this.Xw.M[2]+1
,aSize[1]]);this.Af6.H([this.Xw.M[2],0,aSize[0],aSize[1]]);this.KK.H(this.U$.M);
this.KL.H(this.Va.M);this.Zb.H(this.Xw.M);this.Zc.H(this.Af6.M);},Ai:function(Ae
){C.Ba.Ai.call(this,Ae);this.Km.L(this.V.AP);},Cc:function(Ac){if(!this.AX)return;
this.Hr=Ac;if(!!this.AX){var Ak5=this.AX.Hy(Ac,6);var AZz=this.AX.IU(Ac,3);var A0e=
this.AX.IU(Ac,2);var A0d=this.AX.IU(Ac,5);var A17=this.AX.IU(Ac,4);this.U(A._GetAutoObject(
A.acj.KB).ABM(Ak5));this.Km.R(A._GetAutoObject(A.acj.KB).A4T(Ak5));this.U$.L(A._GetAutoObject(
A.acj.Assessment).P9(AZz));this.Va.L(A._GetAutoObject(A.acj.Assessment).P9(A0e));
this.Xw.L(A._GetAutoObject(A.acj.Assessment).P9(A0d));this.Af6.L(A._GetAutoObject(
A.acj.Assessment).P9(A17));this.KK.L(A._GetAutoObject(A.acj.Assessment).W6(AZz));
this.KL.L(A._GetAutoObject(A.acj.Assessment).W6(A0e));this.Zb.L(A._GetAutoObject(
A.acj.Assessment).W6(A0d));this.Zc.L(A._GetAutoObject(A.acj.Assessment).W6(A17));
this.KK.Y(AZz===5);this.KL.Y(A0e===5);this.Zb.Y(A0d===5);this.Zc.Y(A17===5);this.
An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AI._Init.call(this.
U$={I:this},0);A.acg.AI._Init.call(this.Va={I:this},0);A.acg.AI._Init.call(this.
Xw={I:this},0);A.acg.AI._Init.call(this.Af6={I:this},0);A.acg.Text._Init.call(this.
Km={I:this},0);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.
A9={I:this},0);A.acg.AI._Init.call(this.D4={I:this},0);A.acg.AI._Init.call(this.
Ll={I:this},0);A.acg.AI._Init.call(this.Ann={I:this},0);A.acg.Text._Init.call(this.
KK={I:this},0);A.acg.Text._Init.call(this.KL={I:this},0);A.acg.Text._Init.call(this.
Zb={I:this},0);A.acg.Text._Init.call(this.Zc={I:this},0);this.__proto__=C.ASw;this.
V.H(OO);this.U$.H(AXj);this.Va.H(AXk);this.Xw.H(AXl);this.Af6.H(AXm);this.Km.R(SN
);this.Km.L(A.jb.Text);this.AN.L(A.jb.Bb);this.A9.L(A.jb.Bb);this.D4.L(A.jb.Bb);
this.Ll.L(A.jb.Bb);this.Ann.L(A.jb.Bb);this.KK.H(AXn);this.KK.R(Q7);this.KL.H(AXo
);this.KL.R(Q7);this.Zb.H(AXp);this.Zb.R(Q7);this.Zc.H(AXq);this.Zc.R(Q7);this.J(
this.U$,0);this.J(this.Va,0);this.J(this.Xw,0);this.J(this.Af6,0);this.J(this.Km
,0);this.J(this.AN,0);this.J(this.A9,0);this.J(this.D4,0);this.J(this.Ll,0);this.
J(this.Ann,0);this.J(this.KK,0);this.J(this.KL,0);this.J(this.Zb,0);this.J(this.
Zc,0);this.Km.S(A.aaL(A.fl.Ah));this.KK.S(A.aaL(A.fl.Ah));this.KL.S(A.aaL(A.fl.Ah
));this.Zb.S(A.aaL(A.fl.Ah));this.Zc.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.U$._Done();this.Va._Done();this.Xw._Done();this.Af6._Done(
);this.Km._Done();this.AN._Done();this.A9._Done();this.D4._Done();this.Ll._Done(
);this.Ann._Done();this.KK._Done();this.KL._Done();this.Zb._Done();this.Zc._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.U$._ReInit(
);this.Va._ReInit();this.Xw._ReInit();this.Af6._ReInit();this.Km._ReInit();this.
AN._ReInit();this.A9._ReInit();this.D4._ReInit();this.Ll._ReInit();this.Ann._ReInit(
);this.KK._ReInit();this.KL._ReInit();this.Zb._ReInit();this.Zc._ReInit();this.Km.
S(A.aaL(A.fl.Ah));this.KK.S(A.aaL(A.fl.Ah));this.KL.S(A.aaL(A.fl.Ah));this.Zb.S(
A.aaL(A.fl.Ah));this.Zc.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.U$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Va)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Xw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Af6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Km)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ll)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ann)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.AOe={F_:null,Ys:null,Yo:null,Yp:null,Yq:null,Yr:
null,_Init:function(aArg){C.Es._Init.call(this,aArg);A.acg.Text._Init.call(this.
F_={I:this},0);A.acg.Text._Init.call(this.Ys={I:this},0);A.acg.Text._Init.call(this.
Yo={I:this},0);A.acg.Text._Init.call(this.Yp={I:this},0);A.acg.Text._Init.call(this.
Yq={I:this},0);A.acg.Text._Init.call(this.Yr={I:this},0);this.__proto__=C.AOe;this.
Background.L(A.jb.Text);this.F_.H(AHc);this.F_.A2(0x11);this.F_.R(A.aaR(A.acf.Date
));this.F_.L(A.jb.Bh);this.Ys.H(AG6);this.Ys.A2(0x12);this.Ys.R(A.aaR(A.acf.Bt));
this.Ys.L(A.jb.Bh);this.Yo.H(AXr);this.Yo.A2(0x12);this.Yo.R(A.aaR(A.acf.ASy));this.
Yo.L(A.jb.Bh);this.Yp.H(AXs);this.Yp.A2(0x12);this.Yp.R(A.aaR(A.acf.ASz));this.Yp.
L(A.jb.Bh);this.Yq.H(AXt);this.Yq.A2(0x12);this.Yq.R(A.aaR(A.acf.AM5));this.Yq.L(
A.jb.Bh);this.Yr.H(AXu);this.Yr.A2(0x12);this.Yr.R(A.aaR(A.acf.AL6));this.Yr.L(A.
jb.Bh);this.J(this.F_,0);this.J(this.Ys,0);this.J(this.Yo,0);this.J(this.Yp,0);this.
J(this.Yq,0);this.J(this.Yr,0);this.F_.S(A.aaL(A.fl.Ah));this.Ys.S(A.aaL(A.fl.Ah
));this.Yo.S(A.aaL(A.fl.Ah));this.Yp.S(A.aaL(A.fl.Ah));this.Yq.S(A.aaL(A.fl.Ah));
this.Yr.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Es;this.F_._Done();
this.Ys._Done();this.Yo._Done();this.Yp._Done();this.Yq._Done();this.Yr._Done();
C.Es._Done.call(this);},_ReInit:function(){C.Es._ReInit.call(this);this.F_._ReInit(
);this.Ys._ReInit();this.Yo._ReInit();this.Yp._ReInit();this.Yq._ReInit();this.Yr.
_ReInit();this.F_.R(A.aaR(A.acf.Date));this.Ys.R(A.aaR(A.acf.Bt));this.Yo.R(A.aaR(
A.acf.ASy));this.Yp.R(A.aaR(A.acf.ASz));this.Yq.R(A.aaR(A.acf.AM5));this.Yr.R(A.
aaR(A.acf.AL6));this.F_.S(A.aaL(A.fl.Ah));this.Ys.S(A.aaL(A.fl.Ah));this.Yo.S(A.
aaL(A.fl.Ah));this.Yp.S(A.aaL(A.fl.Ah));this.Yq.S(A.aaL(A.fl.Ah));this.Yr.S(A.aaL(
A.fl.Ah));},_Mark:function(D){var B;C.Es._Mark.call(this,D);if((B=this.F_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ys)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Yo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yp)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yr)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AK7={Akm:function(LV){if(!LV)return;
var Fk=A._NewObject(A.Device.Filter,0);var HO=A._NewObject(A.Device.Int32FilterCriterion
,0);HO.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fk.CZ(HO);var
AzV=A._NewObject(A.Device.AssessmentFilterCriterion,0);AzV.Initialize(3,5,0,true
);Fk.CZ(AzV);LV.Bm(Fk);},ACM:function(){if(!A._GetAutoObject(A.Device.Device).Bq
)return false;return A._GetAutoObject(A.Device.Device).Bq.Ch()>0;},_Init:function(
aArg){C.Aal._Init.call(this,aArg);this.__proto__=C.AK7;this.ARJ(C.ASw);this.ARK(
C.AOe);this.ARA(C.Te);this.Aq7(A.aaR(A.acf.Awu));this.Dq(A.aaR(A.acf.AmT));},_ReInit:
function(){C.Aal._ReInit.call(this);this.Aq7(A.aaR(A.acf.Awu));this.Dq(A.aaR(A.acf.
AmT));},_className:"Application::AnimalRatings"};C.It={B3:null,Z:null,V:null,T7:
5,U:function(E){C.IR.U.call(this,E);this.V.R(E);},C7:function(E){C.IR.C7.call(this
,E);this.V.L(E);},S:function(E){if(this.B3===E)return;this.B3=E;this.V.S(this.B3
);},At$:function(G){var B;var Nq=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Nq)return;
if(((B=Nq.Da(0x1))[2]-B[0])>((B=Nq.M)[2]-B[0]))this.S(A.aaL(A.fl.Ia));},Kc:function(
E){if(this.T7===E)return;this.T7=E;this.Z.H([].concat(E,this.Z.M.slice(1,4)));},
AzP:function(G){A.pe([this,this.At$],this);},_Init:function(aArg){C.IR._Init.call(
this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.It;this.Z.AW(0x3F);this.Z.H(AHe);this.Z.A8w(5);this.
Z.Kb(3);this.V.AW(0x34);this.V.H(ZI);this.V.IZ(true);this.V.A2(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Z,0);this.J(this.V,0);this.Z.Ei=[this,this.
AzP];this.V.S(A.aaL(A.fl.J8));},_Done:function(){this.__proto__=C.IR;this.Z._Done(
);this.V._Done();C.IR._Done.call(this);},_ReInit:function(){C.IR._ReInit.call(this
);this.Z._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.J8));},_Mark:function(D){
var B;C.IR._Mark.call(this,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.Rw={Afi:0,Ai:function(Ae){C.Fl.
Ai.call(this,Ae);this.U(A.aaR(A.acf.Td));if(this.Afi>=0)this.Kg((this.Afi.toFixed(
)+CO)+A.aaR(A.acf.J5));else this.Kg(A.aaR(A.acf.Unknown));},Cc:function(G){C.Fl.
Cc.call(this,G);if(!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)this.Afi=-1;
else this.Afi=A._GetAutoObject(A.Device.Helper).W.Td();this.An();},_Init:function(
aArg){C.Fl._Init.call(this,aArg);this.__proto__=C.Rw;},_className:"Application::AnimalInfoItemAge"
};C.RA={A2J:0,Ai:function(Ae){C.Fl.Ai.call(this,Ae);this.U(A.aaR(A.acf.AeW));if(
this.A2J>0)this.Kg((A._GetAutoObject(A.Device.Converter).AkD(this.A2J)+CO)+A._GetAutoObject(
A.acj.DM).Afu());else this.Kg(A.aaR(A.acf.Unknown));},Cc:function(G){C.Fl.Cc.call(
this,G);this.A2J=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight;this.An();},
_Init:function(aArg){C.Fl._Init.call(this,aArg);this.__proto__=C.RA;},_className:
"Application::AnimalInfoItemWeight"};C.Tf={Z:null,D_:null,Ep:null,E3:null,PH:null
,E2:null,PJ:null,AiJ:0,O1:0,CT:function(){this.An();},Ai:function(Ae){C.Jx.Ai.call(
this,Ae);this.U(A.aaR(A.acf.Bft));this.E3.R(this.AiJ.toFixed());this.E2.R(this.O1.
toFixed());if(!!this.AiJ||!!this.O1)this.PJ.R(AXv+(this.AiJ+this.O1).toFixed());
else this.PJ.R(A.aaR(A.acf.AQG));},Cc:function(G){C.Jx.Cc.call(this,G);var Akt;Akt=
A._GetAutoObject(A.Device.Helper).Bgj(A._GetAutoObject(A.Device.Device).Bq,9,A._GetAutoObject(
A.Device.Helper).W.Id,0,0);this.AiJ=Akt.Get(2);this.O1=Akt.Get(1);this.An();},C7:
function(E){C.Jx.C7.call(this,E);this.PH.L(E);this.PJ.L(E);},Ar5:function(G){if(
!!this.AiJ||!!this.O1){this.E3.Y(true);this.PH.Y(true);this.E2.Y(true);}else{this.
E3.Y(false);this.PH.Y(false);this.E2.Y(false);}this.D_.H(this.E3.M);this.D_.Y(this.
E3.Fe());this.Ep.H(this.E2.M);this.Ep.Y(this.E2.Fe());},At$:function(G){var B;var
Nq=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Nq)return;if(((B=Nq.Da(0x1))[2]-B[0])>((
B=Nq.M)[2]-B[0])){this.E2.S(A.aaL(A.fl.Ak));this.PH.S(A.aaL(A.fl.Ak));this.E3.S(
A.aaL(A.fl.Ak));this.PJ.S(A.aaL(A.fl.Ak));}},AzP:function(G){A.pe([this,this.At$
],this);},_Init:function(aArg){C.Jx._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AI._Init.call(this.D_={I:this},0);A.acg.AI._Init.call(this.Ep={
I:this},0);A.acg.Text._Init.call(this.E3={I:this},0);A.acg.Text._Init.call(this.
PH={I:this},0);A.acg.Text._Init.call(this.E2={I:this},0);A.acg.Text._Init.call(this.
PJ={I:this},0);this.__proto__=C.Tf;this.Z.H(Axy);this.Z.Bk0(0);this.Z.Kb(3);this.
D_.H(AXw);this.D_.L(A.jb.HZ);this.Ep.H(Axv);this.Ep.L(A.jb.FW);this.E3.AW(0x34);
this.E3.H(ZI);this.E3.HG(2);this.E3.IZ(true);this.E3.R(ZG);this.E3.L(A.jb.Text);
this.E3.Aj(true);this.PH.AW(0x34);this.PH.H(ZI);this.PH.IZ(true);this.PH.R(AGX);
this.PH.L(A.jb.Text);this.PH.Aj(true);this.E2.AW(0x34);this.E2.H(ZI);this.E2.HG(
2);this.E2.IZ(true);this.E2.R(ZG);this.E2.L(A.jb.Bh);this.E2.Aj(true);this.PJ.AW(
0x34);this.PJ.H(ZI);this.PJ.IZ(true);this.PJ.R(SN);this.PJ.L(A.jb.Text);this.PJ.
Aj(true);this.J(this.Z,0);this.J(this.D_,0);this.J(this.Ep,0);this.J(this.E3,0);
this.J(this.PH,0);this.J(this.E2,0);this.J(this.PJ,0);this.Z.Ei=[this,this.AzP];
this.E3.QN([this,this.Ar5]);this.E3.S(A.aaL(A.fl.Ah));this.PH.S(A.aaL(A.fl.Ah));
this.E2.QN([this,this.Ar5]);this.E2.S(A.aaL(A.fl.Ah));this.PJ.S(A.aaL(A.fl.Ah));
},_Done:function(){this.__proto__=C.Jx;this.Z._Done();this.D_._Done();this.Ep._Done(
);this.E3._Done();this.PH._Done();this.E2._Done();this.PJ._Done();C.Jx._Done.call(
this);},_ReInit:function(){C.Jx._ReInit.call(this);this.Z._ReInit();this.D_._ReInit(
);this.Ep._ReInit();this.E3._ReInit();this.PH._ReInit();this.E2._ReInit();this.PJ.
_ReInit();this.E3.S(A.aaL(A.fl.Ah));this.PH.S(A.aaL(A.fl.Ah));this.E2.S(A.aaL(A.
fl.Ah));this.PJ.S(A.aaL(A.fl.Ah));this.CT();},_Mark:function(D){var B;C.Jx._Mark.
call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D_)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Ql={FI:0,H5:0
,A0I:false,Ai:function(Ae){C.Fl.Ai.call(this,Ae);this.U(AnX+A.aaR(A.acf.AFY));if(
this.A0I){this.Kg((A._GetAutoObject(A.Device.Converter).SJ(this.FI,2,true)+CO)+A.
_GetAutoObject(A.acj.DM).ZX());this.Background.L(A._GetAutoObject(A.acj.DM).AyO(
this.FI,this.H5));this.C7(A._GetAutoObject(A.acj.DM).AyQ(this.FI,this.H5));}else{
this.Kg(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CE);this.C7(A.jb.Text);}},Cc:
function(G){C.Fl.Cc.call(this,G);var Lv=A._GetAutoObject(A.Device.Helper).MF(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(!!Lv){this.A0I=true;this.FI=A._GetAutoObject(A.acj.DM).Ak2(Lv,A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight
);}else{this.A0I=false;this.FI=0;}this.H5=A._GetAutoObject(A.Device.Helper).W.AnimalType;
this.An();},_Init:function(aArg){C.Fl._Init.call(this,aArg);this.__proto__=C.Ql;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.Te={Z:null,FJ:null,D_:
null,Ep:null,Mv:null,E3:null,E2:null,OH:null,ZZ:0,AiJ:0,O1:0,CT:function(){this.
An();},Ai:function(Ae){C.Jx.Ai.call(this,Ae);this.U(A.aaR(A.acf.Awu));this.Mv.R(
this.ZZ.toFixed());this.E3.R(this.AiJ.toFixed());this.E2.R(this.O1.toFixed());},
Cc:function(G){C.Jx.Cc.call(this,G);var Akt;Akt=A._GetAutoObject(A.Device.Helper
).A4Y(A._GetAutoObject(A.Device.Device).Bq,A._GetAutoObject(A.Device.Helper).W.Id
,0,0);this.ZZ=Akt.Get(3);this.AiJ=Akt.Get(2);this.O1=Akt.Get(1);this.An();},Ar5:
function(G){if((!!this.ZZ||!!this.AiJ)||!!this.O1){this.Mv.Y(true);this.E3.Y(true
);this.E2.Y(true);this.OH.Y(false);}else{this.Mv.Y(false);this.E3.Y(false);this.
E2.Y(false);this.OH.Y(true);}this.FJ.H(this.Mv.M);this.FJ.Y(this.Mv.Fe());this.D_.
H(this.E3.M);this.D_.Y(this.E3.Fe());this.Ep.H(this.E2.M);this.Ep.Y(this.E2.Fe()
);},At$:function(G){var B;var Nq=(A.Core.Z.isPrototypeOf(G)?G:null);if(!Nq)return;
if(((B=Nq.Da(0x1))[2]-B[0])>((B=Nq.M)[2]-B[0])){this.E2.S(A.aaL(A.fl.Ak));this.E3.
S(A.aaL(A.fl.Ak));this.Mv.S(A.aaL(A.fl.Ak));}},AzP:function(G){A.pe([this,this.At$
],this);},_Init:function(aArg){C.Jx._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AI._Init.call(this.FJ={I:this},0);A.acg.AI._Init.call(this.D_={
I:this},0);A.acg.AI._Init.call(this.Ep={I:this},0);A.acg.Text._Init.call(this.Mv={
I:this},0);A.acg.Text._Init.call(this.E3={I:this},0);A.acg.Text._Init.call(this.
E2={I:this},0);A.acg.Text._Init.call(this.OH={I:this},0);this.__proto__=C.Te;this.
Z.AW(0x3F);this.Z.H(Axy);this.Z.A8w(5);this.Z.Kb(3);this.FJ.H(AXx);this.FJ.L(A.jb.
EU);this.D_.H(AXy);this.D_.L(A.jb.HZ);this.Ep.H(AXz);this.Ep.L(A.jb.FW);this.Mv.
AW(0x3C);this.Mv.H(ZI);this.Mv.HG(2);this.Mv.IZ(true);this.Mv.R(ZG);this.Mv.L(A.
jb.Text);this.Mv.Aj(true);this.E3.AW(0x3C);this.E3.H(ZI);this.E3.HG(2);this.E3.IZ(
true);this.E3.R(ZG);this.E3.L(A.jb.Text);this.E3.Aj(true);this.E2.AW(0x3C);this.
E2.H(ZI);this.E2.HG(2);this.E2.IZ(true);this.E2.R(ZG);this.E2.L(A.jb.Bh);this.E2.
Aj(true);this.OH.AW(0x34);this.OH.H(ZI);this.OH.IZ(true);this.OH.A2(0x11);this.OH.
R(A.aaR(A.acf.AQG));this.OH.L(A.jb.Text);this.OH.Aj(true);this.OH.Y(false);this.
J(this.Z,0);this.J(this.FJ,0);this.J(this.D_,0);this.J(this.Ep,0);this.J(this.Mv
,0);this.J(this.E3,0);this.J(this.E2,0);this.J(this.OH,0);this.Z.Ei=[this,this.AzP
];this.Mv.QN([this,this.Ar5]);this.Mv.S(A.aaL(A.fl.Ah));this.E3.QN([this,this.Ar5
]);this.E3.S(A.aaL(A.fl.Ah));this.E2.QN([this,this.Ar5]);this.E2.S(A.aaL(A.fl.Ah
));this.OH.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Jx;this.Z._Done(
);this.FJ._Done();this.D_._Done();this.Ep._Done();this.Mv._Done();this.E3._Done(
);this.E2._Done();this.OH._Done();C.Jx._Done.call(this);},_ReInit:function(){C.Jx.
_ReInit.call(this);this.Z._ReInit();this.FJ._ReInit();this.D_._ReInit();this.Ep.
_ReInit();this.Mv._ReInit();this.E3._ReInit();this.E2._ReInit();this.OH._ReInit(
);this.OH.R(A.aaR(A.acf.AQG));this.Mv.S(A.aaL(A.fl.Ah));this.E3.S(A.aaL(A.fl.Ah)
);this.E2.S(A.aaL(A.fl.Ah));this.OH.S(A.aaL(A.fl.Ah));this.CT();},_Mark:function(
D){var B;C.Jx._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OH)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AKP={_Init:function(aArg){C.AiM._Init.call(
this,aArg);this.__proto__=C.AKP;this.N.BU(A.aaR(A.acf.A5_));this.A2U=1;this.Q2.CC(
A.aaL(A.fl.Ak));},_ReInit:function(){C.AiM._ReInit.call(this);this.N.BU(A.aaR(A.
acf.A5_));this.Q2.CC(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.Gw={_Init:function(aArg){C.AiM._Init.call(this,aArg);this.__proto__=C.Gw;this.
N.BU(A.aaR(A.acf.A3w));this.NW.R(A.aaR(A.acf.Auc));},_ReInit:function(){C.AiM._ReInit.
call(this);this.N.BU(A.aaR(A.acf.A3w));this.NW.R(A.aaR(A.acf.Auc));},_className:
"Application::AnimalListActionsScreen"};C.APw={Ou:null,ID:null,HW:null,IB:null,GC:
null,Als:function(G){A.pe([this,this.Bxg],this);},Bxg:function(G){A._GetAutoObject(
C.AY).B1(3);},_Init:function(aArg){C.Cu._Init.call(this,aArg);C.Ou._Init.call(this.
Ou={I:this},0);C.B$._Init.call(this.ID={I:this},0);C.Sr._Init.call(this.HW={I:this
},0);C.AFp._Init.call(this.IB={I:this},0);C.QU._Init.call(this.GC={I:this},0);this.
__proto__=C.APw;var B;this.JH(A.aaR(A.acf.A9w));this.ID.H(Ahq);this.ID.Aj(true);
this.ID.U(A.aaR(A.acf.Language));this.ID.A8f(100);this.HW.H(WK);this.HW.Aj(true);
this.HW.U(A.aaR(A.acf.Date));this.HW.Bf(true);this.IB.H(ZF);this.IB.Aj(true);this.
IB.U(A.aaR(A.acf.Bt));this.GC.H(Ahp);this.GC.Aj(true);this.GC.Y(true);this.GC.U(
A.aaR(A.acf.AE0));this.GC.Bf(true);this.GC.Are(false);this.GC.A8n(true);this.Kj(
this.Z,-1);this.Kj(this.Av,-1);this.J(this.ID,0);this.J(this.HW,0);this.J(this.IB
,0);this.J(this.GC,0);this.ID.V9(A.aaL(A.fl.Hi));this.ID.V_(A.aaL(A.fl.Hi));this.
ID.Au([B=this.Ou,B.B_,B.Ca]);this.ID.CK(this.Ou);this.HW.AgO([B=this.HW,B.FH]);this.
HW.Gj([this,this.D9,this.GQ]);this.HW.Aj3(A.aaL(A.ach.Edit));this.HW.AbC([B=A._GetAutoObject(
A.Device.Helper),B.UA,B.UB]);this.IB.AgO([B=this.IB,B.FH]);this.IB.Gj([this,this.
D9,this.GQ]);this.IB.Aj3(A.aaL(A.ach.Edit));this.IB.AbC([B=A._GetAutoObject(A.Device.
Helper),B.UA,B.UB]);this.GC.AgO([B=this.GC,B.FH]);this.GC.Gj([this,this.D9,this.
GQ]);this.GC.Aj3(A.aaL(A.ach.Edit));this.GC.Au([B=A._GetAutoObject(A.Device.Device
),B.ARa,B.AYz]);},_Done:function(){this.__proto__=C.Cu;this.Ou._Done();this.ID._Done(
);this.HW._Done();this.IB._Done();this.GC._Done();C.Cu._Done.call(this);},_ReInit:
function(){C.Cu._ReInit.call(this);this.Ou._ReInit();this.ID._ReInit();this.HW._ReInit(
);this.IB._ReInit();this.GC._ReInit();this.JH(A.aaR(A.acf.A9w));this.ID.U(A.aaR(
A.acf.Language));this.HW.U(A.aaR(A.acf.Date));this.IB.U(A.aaR(A.acf.Bt));this.GC.
U(A.aaR(A.acf.AE0));},_Mark:function(D){var B;C.Cu._Mark.call(this,D);if((B=this.
Ou)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ID)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aal={Be:null,Fo:null,Amu:null,Amc:null,RS:null,A5e:A.jV,KD:A.jV,APX:null,APY:
null,ACb:null,CJ:function(G){var B;C.D2.CJ.call(this,G);A.zX([this,this.A1b],[B=
A._GetAutoObject(A.Device.Helper).W,B.QK,B.OnSetId],0);this.A1b(this);},Fd:function(
G){var B;A.z$([this,this.A1b],[B=A._GetAutoObject(A.Device.Helper).W,B.QK,B.OnSetId
],0);C.D2.Fd.call(this,G);},YW:function(E){C.D2.YW.call(this,E);if(A.aa0(this.AQ
,E))return;if(!!this.Be)this.Be.YW(E);},ARJ:function(E){if(this.APX===E)return;this.
APX=E;if(!!this.Be)this.Be.NN(E);},ARK:function(E){if(this.APY===E)return;this.APY=
E;this.Bml(this);},ARA:function(E){if(this.ACb===E)return;this.ACb=E;A.pe([this,
this.Bmk],this);},Aq7:function(E){if(this.A5e===E)return;this.A5e=E;this.RS.R(E);
},Dq:function(E){if(this.KD===E)return;this.KD=E;if(!!this.Be)this.Be.Dq(E);},Akm:
function(LV){A.ab5("%s",AXA);},ACM:function(){A.ab5("%s",AkI);return false;},AwB:
function(G){if(!!this.Be)this.HH(this.Be);this.Be=A._NewObject(C.FQ,0);this.Be.H(
Asu);this.Be.YV(A._GetAutoObject(A.Device.Device).Bq);this.Be.Dq(this.KD);this.Be.
NN(this.APX);this.Be.YW(this.AQ);this.J(this.Be,0);this.A8(this.Be);},Bml:function(
G){var B;if(!!this.Fo)this.HH(this.Fo);this.Fo=(C.Es.isPrototypeOf(B=A._NewObject(
this.APY,0))?B:null);this.Fo.H(KP);this.J(this.Fo,0);},Bmk:function(G){var B;if(
!!this.Amu)this.HH(this.Amu);if(!!this.ACb&&this.ACM()){this.Amu=(C.IR.isPrototypeOf(
B=A._NewObject(this.ACb,0))?B:null);this.Amu.H(BC);this.Amu.Bf(false);this.J(this.
Amu,0);this.RS.Y(false);}else this.RS.Y(true);},A1b:function(G){this.Akm(A._GetAutoObject(
A.Device.Device).Bq);this.AwB(this);},_Init:function(aArg){C.D2._Init.call(this,
aArg);A.acg.AI._Init.call(this.Amc={I:this},0);C.CP._Init.call(this.RS={I:this},
0);this.__proto__=C.Aal;this.Amc.H(BC);this.Amc.L(A.jb.CE);this.RS.H(AGv);this.RS.
A2(0x11);this.RS.L(A.jb.Text);this.J(this.Amc,0);this.J(this.RS,0);this.RS.S(A.aaL(
A.fl.J8));this.RS.A5(A.aaL(A.fl.Ia));},_Done:function(){this.__proto__=C.D2;this.
Amc._Done();this.RS._Done();C.D2._Done.call(this);},_ReInit:function(){C.D2._ReInit.
call(this);this.Amc._ReInit();this.RS._ReInit();this.RS.S(A.aaL(A.fl.J8));this.RS.
A5(A.aaL(A.fl.Ia));},_Mark:function(D){var B;C.D2._Mark.call(this,D);if((B=this.
Be)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fo)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Amu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Amc)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Jy={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
Bag],[B=A._GetAutoObject(A.Device.Device),B.ADk,B.AHt],0);A.pe([this,this.Bag],this
);},Do:function(){return 4;},Gg:function(aIndex){return this.AnimalListContentToString.
BX(this.C9(aIndex));},Au:function(E){C.C3.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Abu(E);},Bag:function(G){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.B_,this.Ca],0);},_Init:function(aArg){C.C3._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Jy;this.Cv.Set(0,0);this.Cv.Set(1,1);this.Cv.Set(2,2
);this.Cv.Set(3,3);this.Init(aArg);},_Done:function(){this.__proto__=C.C3;this.AnimalListContentToString.
_Done();C.C3._Done.call(this);},_ReInit:function(){C.C3._ReInit.call(this);this.
AnimalListContentToString._ReInit();},_Mark:function(D){var B;C.C3._Mark.call(this
,D);if((B=this.AnimalListContentToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListContent"};C.AP2={ID:null,YC:null,YL:null,YJ:null,YM:null
,YD:null,YH:null,YK:null,YG:null,Ou:null,_Init:function(aArg){C.Cu._Init.call(this
,aArg);C.B$._Init.call(this.ID={I:this},0);C.Py._Init.call(this.YC={I:this},0);C.
Py._Init.call(this.YL={I:this},0);C.Py._Init.call(this.YJ={I:this},0);C.Py._Init.
call(this.YM={I:this},0);C.Py._Init.call(this.YD={I:this},0);C.Py._Init.call(this.
YH={I:this},0);C.Py._Init.call(this.YK={I:this},0);C.Py._Init.call(this.YG={I:this
},0);C.Ou._Init.call(this.Ou={I:this},0);this.__proto__=C.AP2;var B;this.JH(A.aaR(
A.acf.Settings));this.ID.H(Ahq);this.ID.Aj(true);this.ID.U(A.aaR(A.acf.Language)
);this.ID.A8f(100);this.YC.H(Asv);this.YC.Aj(true);this.YC.U(A.aaR(A.acf.ABn));this.
YC.PD(16);this.YL.H(Asw);this.YL.Aj(true);this.YL.U(A.aaR(A.acf.AFT));this.YL.PD(
22);this.YJ.H(Asx);this.YJ.Aj(true);this.YJ.U(A.aaR(A.acf.Temperature));this.YJ.
PD(17);this.YM.H(Asy);this.YM.Aj(true);this.YM.U(A.aaR(A.acf.ABk));this.YM.PD(46
);this.YD.H(Ae_);this.YD.Aj(true);this.YD.U(A.aaR(A.acf.Device));this.YD.PD(18);
this.YH.H(Ae_);this.YH.Aj(true);this.YH.U(A.aaR(A.acf.ArB));this.YH.PD(19);this.
YK.H(AXB);this.YK.Aj(true);this.YK.U(A.aaR(A.acf.LinkTransponder));this.YK.PD(101
);this.YG.H(Axq);this.YG.Aj(true);this.YG.U(A.aaR(A.acf.ABD));this.YG.PD(87);this.
J(this.ID,0);this.J(this.YC,0);this.J(this.YL,0);this.J(this.YJ,0);this.J(this.YM
,0);this.J(this.YD,0);this.J(this.YH,0);this.J(this.YK,0);this.J(this.YG,0);this.
ID.V9(A.aaL(A.fl.Hi));this.ID.V_(A.aaL(A.fl.Hi));this.ID.Au([B=this.Ou,B.B_,B.Ca
]);this.ID.CK(this.Ou);this.YC.AQ=[B=this.YC,B.PE];this.YL.AQ=[B=this.YL,B.PE];this.
YJ.AQ=[B=this.YJ,B.PE];this.YM.AQ=[B=this.YM,B.PE];this.YD.AQ=[B=this.YD,B.PE];this.
YH.AQ=[B=this.YH,B.PE];this.YK.AQ=[B=this.YK,B.PE];this.YG.AQ=[B=this.YG,B.PE];}
,_Done:function(){this.__proto__=C.Cu;this.ID._Done();this.YC._Done();this.YL._Done(
);this.YJ._Done();this.YM._Done();this.YD._Done();this.YH._Done();this.YK._Done(
);this.YG._Done();this.Ou._Done();C.Cu._Done.call(this);},_ReInit:function(){C.Cu.
_ReInit.call(this);this.ID._ReInit();this.YC._ReInit();this.YL._ReInit();this.YJ.
_ReInit();this.YM._ReInit();this.YD._ReInit();this.YH._ReInit();this.YK._ReInit(
);this.YG._ReInit();this.Ou._ReInit();this.JH(A.aaR(A.acf.Settings));this.ID.U(A.
aaR(A.acf.Language));this.YC.U(A.aaR(A.acf.ABn));this.YL.U(A.aaR(A.acf.AFT));this.
YJ.U(A.aaR(A.acf.Temperature));this.YM.U(A.aaR(A.acf.ABk));this.YD.U(A.aaR(A.acf.
Device));this.YH.U(A.aaR(A.acf.ArB));this.YK.U(A.aaR(A.acf.LinkTransponder));this.
YG.U(A.aaR(A.acf.ABD));},_Mark:function(D){var B;C.Cu._Mark.call(this,D);if((B=this.
ID)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YK)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ou
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"};
C.AK2={EI:null,Init:function(aArg){this.EI.AgW(A._NewObject(A.Core.Bt,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dy()).Format(A.aaR(A.acf.Agk)));},ASD:function(
){this.EI.Aek(this.ANu());this.Z1=!this.EI.EQ.AV;},Ain:function(G){this.EI.AgW(A.
_NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dy()).Format(
A.aaR(A.acf.Agk)));this.ASD();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)this.Dq(A.aaR(A.acf.A6m));else this.Dq(A.aaR(A.acf.AqI));this.An();},ANu:function(
){var Bz=A._NewObject(C.ApP,0);var P6=A._GetAutoObject(A.Device.Helper).AMJ(A._GetAutoObject(
A.Device.Helper).Dy());var Dm=A._GetAutoObject(A.Device.Helper).ApL(P6-(86400*this.
Ml));Bz.Am7(AXC);Bz.QL([].concat(0,Bz.FX.slice(1,4)));Bz.QL(A.abN(Bz.FX,(P6-Dm)|
0));Bz.QL(A.abP(Bz.FX,3400));Bz.QL([].concat(Bz.FX.slice(0,3),4200));var Gr=A._GetAutoObject(
A.Device.Device).Bq.Ch();Bz.Av1(Gr);Bz.XQ();if(Gr>0){var P=0;while(P<Gr){var Apj=
A._GetAutoObject(A.Device.Device).Bq.CA(P,7);var Apk=A._GetAutoObject(A.Device.Device
).Bq.Hy(P,6)-Dm;if(Apj>0)Bz.ApE(Apk,Apj);P=P+1;}}return Bz;},_Init:function(aArg
){C.K2._Init.call(this,aArg);C.Aqc._Init.call(this.EI={I:this},0);this.__proto__=
C.AK2;this.EI.H(AXD);this.EI.U(A.aaR(A.acf.Temperature));this.EI.ADZ(C.AFD);this.
J(this.EI,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.K2;this.EI._Done(
);C.K2._Done.call(this);},_ReInit:function(){C.K2._ReInit.call(this);this.EI._ReInit(
);this.EI.U(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.K2._Mark.call(
this,D);if((B=this.EI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AK3={Zr:null,OK:null,Agf:null,Z1:false,Init:function(aArg){this.Zr.AgW(A._NewObject(
A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dy()).Format(A.aaR(A.acf.
Agk)));},Ai:function(Ae){C.D2.Ai.call(this,Ae);this.Agf.Y(this.Z1);},CJ:function(
G){var B;C.D2.CJ.call(this,G);A.zX([this,this.Ain],[B=A._GetAutoObject(A.Device.
Helper),B.UA,B.UB],0);A.zV([this,this.Ain],A._GetAutoObject(A.Device.Device).Bq,
0);A.zX([this,this.AlH],[B=A._GetAutoObject(A.Device.Helper).W,B.QK,B.OnSetId],0
);A.pe([this,this.AlH],this);},Fd:function(G){var B;A.z$([this,this.Ain],[B=A._GetAutoObject(
A.Device.Helper),B.UA,B.UB],0);A.z9([this,this.Ain],A._GetAutoObject(A.Device.Device
).Bq,0);A.z$([this,this.AlH],[B=A._GetAutoObject(A.Device.Helper).W,B.QK,B.OnSetId
],0);C.D2.Fd.call(this,G);},AlH:function(G){var Fk=A._NewObject(A.Device.Filter,
0);var HO=A._NewObject(A.Device.Int32FilterCriterion,0);HO.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).W.Id,true);Fk.CZ(HO);A._GetAutoObject(A.Device.Device).Bq.Bm(Fk
);},Ain:function(G){this.Zr.AgW(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dy()).Format(A.aaR(A.acf.Agk)));this.BlJ();this.An();},BlJ:function(
){var B;var Gr=A._GetAutoObject(A.Device.Device).Bq.Ch();var K0=A._NewObject(C.ApP
,0);var U0=A._NewObject(C.ApP,0);var P6=A._GetAutoObject(A.Device.Helper).AMJ(A.
_GetAutoObject(A.Device.Helper).Dy());var Dm=A._GetAutoObject(A.Device.Helper).ApL(
A._GetAutoObject(A.Device.Helper).W.DateOfBirth);K0.QL([].concat(0,K0.FX.slice(1
,4)));K0.QL(A.abN(K0.FX,(P6-Dm)|0));K0.QL(A.abP(K0.FX,0));K0.QL([].concat(K0.FX.
slice(0,3),150000));K0.Am7(AXE);U0.QL([].concat(0,U0.FX.slice(1,4)));U0.QL(A.abN(
U0.FX,(P6-Dm)|0));U0.QL(A.abP(U0.FX,0));U0.QL([].concat(U0.FX.slice(0,3),1500));
U0.Am7(AXF);K0.Av1(Gr);K0.XQ();U0.Av1(Gr);U0.XQ();if(Gr>0){var P=0;var W9=0;var Azc=
0;var AIO=0;var A0j=0;var BaU=true;while(P<Gr){var AlC=A._GetAutoObject(A.Device.
Device).Bq.CA(P,8);var Aab=A._GetAutoObject(A.Device.Device).Bq.Hy(P,6)-Dm;if(AlC>
0){K0.ApE(Aab,AlC);if(!A0j){A0j=Aab;AIO=AlC;}if(Azc>0){var Lv=A._GetAutoObject(A.
Device.Helper).MF(Azc,Aab);if(!!Lv){var FI=A._GetAutoObject(A.acj.DM).Ak2(Lv,W9,
AlC);if(BaU){U0.ApE(Azc,FI);BaU=false;}U0.ApE(Aab,FI);}}W9=AlC;Azc=Aab;}P=P+1;}var
Adc=A.aaR(A.acf.Bev);var FI=A._GetAutoObject(A.Device.Helper).Bgl(A0j,Azc,AIO,W9
);Adc=A._GetAutoObject(A.Device.Helper).Nb(Adc,PW,FI.toFixed());Adc=A._GetAutoObject(
A.Device.Helper).Nb(Adc,Axd,A._GetAutoObject(A.acj.DM).ZX());this.OK.H$.R(Adc);}
this.Z1=!K0.AV;if(this.Z1)this.OK.H$.R(A.jV);(C.OK.isPrototypeOf(B=this.OK.EI)?B:
null).Am3([B=A._GetAutoObject(A.Device.Helper).W,B.PA,B.DT]);this.Zr.Aek(K0);this.
OK.Aek(U0);},_Init:function(aArg){C.D2._Init.call(this,aArg);C.Aqc._Init.call(this.
Zr={I:this},0);C.Aqc._Init.call(this.OK={I:this},0);C.Akk._Init.call(this.Agf={I:
this},0);this.__proto__=C.AK3;this.Zr.H(AXG);this.Zr.U(A.aaR(A.acf.AeW));this.Zr.
ADZ(C.ALy);this.OK.H(AXH);this.OK.U(A.aaR(A.acf.AFY));this.OK.ADZ(C.OK);this.Agf.
H(SO);this.Agf.R(A.aaR(A.acf.AjR));this.J(this.Zr,0);this.J(this.OK,0);this.J(this.
Agf,0);this.Init(aArg);},_Done:function(){this.__proto__=C.D2;this.Zr._Done();this.
OK._Done();this.Agf._Done();C.D2._Done.call(this);},_ReInit:function(){C.D2._ReInit.
call(this);this.Zr._ReInit();this.OK._ReInit();this.Agf._ReInit();this.Zr.U(A.aaR(
A.acf.AeW));this.OK.U(A.aaR(A.acf.AFY));this.Agf.R(A.aaR(A.acf.AjR));},_Mark:function(
D){var B;C.D2._Mark.call(this,D);if((B=this.Zr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agf)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoWeightsGraph"};C.AK0={AuB:null,AuA:null,
Aww:null,At5:null,U_:null,AaL:null,AaK:null,AbR:null,AeE:null,Init:function(aArg
){this.U_.AgW(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper
).Dy()).Format(A.aaR(A.acf.Agk)));},A2B:function(G){this.U_.AbD(this.At5);this.AaL.
AbD(this.AuB);this.AaK.AbD(this.AuA);this.AbR.AbD(this.Aww);},Awv:function(){var
Gr=A._GetAutoObject(A.Device.Device).Bq.Ch();this.At5=A._NewObject(C.AiX,0);this.
AuB=A._NewObject(C.AiX,0);this.AuA=A._NewObject(C.AiX,0);this.Aww=A._NewObject(C.
AiX,0);if(Gr>0){var P=Gr-1;while(P>=0){var D1=A._GetAutoObject(A.Device.Device).
Bq.Hy(P,6);this.AsQ(this.At5,P,3,D1);this.AsQ(this.AuB,P,2,D1);this.AsQ(this.AuA
,P,5,D1);this.AsQ(this.Aww,P,4,D1);P=P-1;}}this.Z1=!(((this.At5.AV+this.AuA.AV)+
this.AuB.AV)+this.Aww.AV);A.pe([this,this.A2B],this);},AsQ:function(AZi,Ac,AZh,P0
){var AkY=A._GetAutoObject(A.Device.Device).Bq.IU(Ac,AZh);if(!!AkY)AZi.Of(AkY,P0
);},AbB:function(E){if(this.Ml===E)return;C.K2.AbB.call(this,E);if(!!this.U_)this.
U_.AbB(E);if(!!this.AaL)this.AaL.AbB(E);if(!!this.AaK)this.AaK.AbB(E);if(!!this.
AbR)this.AbR.AbB(E);this.AeE.AbB(E);},Ain:function(G){this.U_.AgW(A._NewObject(A.
Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dy()).Format(A.aaR(A.acf.
Agk)));this.Awv();if(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>
0)this.Dq(A.aaR(A.acf.BhK));else this.Dq(A.aaR(A.acf.AmT));this.An();},_Init:function(
aArg){C.K2._Init.call(this,aArg);C.Ag2._Init.call(this.U_={I:this},0);C.Ag2._Init.
call(this.AaL={I:this},0);C.Ag2._Init.call(this.AaK={I:this},0);C.Ag2._Init.call(
this.AbR={I:this},0);C.ASA._Init.call(this.AeE={I:this},0);this.__proto__=C.AK0;
this.Dq(A.aaR(A.acf.AmT));this.U_.H(AXI);this.U_.R(A.aaR(A.acf.AE4));this.AaL.H(
AXJ);this.AaL.R(A.aaR(A.acf.Feed));this.AaK.H(AXK);this.AaK.R(A.aaR(A.acf.AE6));
this.AbR.H(AXL);this.AbR.R(A.aaR(A.acf.AE7));this.AeE.H(AXM);this.J(this.U_,-1);
this.J(this.AaL,-1);this.J(this.AaK,-1);this.J(this.AbR,-1);this.J(this.AeE,-1);
this.Init(aArg);},_Done:function(){this.__proto__=C.K2;this.U_._Done();this.AaL.
_Done();this.AaK._Done();this.AbR._Done();this.AeE._Done();C.K2._Done.call(this);
},_ReInit:function(){C.K2._ReInit.call(this);this.U_._ReInit();this.AaL._ReInit(
);this.AaK._ReInit();this.AbR._ReInit();this.AeE._ReInit();this.Dq(A.aaR(A.acf.AmT
));this.U_.R(A.aaR(A.acf.AE4));this.AaL.R(A.aaR(A.acf.Feed));this.AaK.R(A.aaR(A.
acf.AE6));this.AbR.R(A.aaR(A.acf.AE7));},_Mark:function(D){var B;C.K2._Mark.call(
this,D);if((B=this.AuB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuA)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aww)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.At5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.U_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AaL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"
};C.AK1={EI:null,Wc:null,AdJ:null,A0G:false,Init:function(aArg){this.Wc.AgW(A._NewObject(
A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dy()).Format(A.aaR(A.acf.
Agk)));},Bg:function(aSize){C.K2.Bg.call(this,aSize);this.AdJ.H(this.EI.M);},Ai:
function(Ae){C.K2.Ai.call(this,Ae);var ByL=!this.Z1&&this.A0G;if(A._GetAutoObject(
A.Device.Helper).W.TimestampLastTemperature>0)this.AdJ.R(A.aaR(A.acf.A6m));else this.
AdJ.R(A.aaR(A.acf.AqI));if((A._GetAutoObject(A.Device.Helper).W.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).W.TimestampLastAssessment>0))this.Dq(A.aaR(
A.acf.BhL));else this.Dq(A.aaR(A.acf.BhM));this.AdJ.Y(ByL);},Ain:function(G){this.
Wc.AgW(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dy(
)).Format(A.aaR(A.acf.Agk)));this.Z1=true;this.A0G=true;this.Awv();this.ASD();this.
An();},ASD:function(){this.EI.Aek(this.ANu());if(!!this.EI.EQ&&(this.EI.EQ.AV>0)
){this.Z1=false;this.A0G=false;}},ANu:function(){var Bz=A._NewObject(C.ApP,0);var
P6=A._GetAutoObject(A.Device.Helper).AMJ(A._GetAutoObject(A.Device.Helper).Dy());
var Dm=A._GetAutoObject(A.Device.Helper).ApL(P6-(86400*this.Ml));Bz.Am7(AXN);Bz.
QL([].concat(0,Bz.FX.slice(1,4)));Bz.QL(A.abN(Bz.FX,(P6-Dm)|0));Bz.QL(A.abP(Bz.FX
,3400));Bz.QL([].concat(Bz.FX.slice(0,3),4200));var Gr=A._GetAutoObject(A.Device.
Device).Bq.Ch();Bz.Av1(Gr);Bz.XQ();if(Gr>0){var P=0;while(P<Gr){var Apj=A._GetAutoObject(
A.Device.Device).Bq.CA(P,7);var Apk=A._GetAutoObject(A.Device.Device).Bq.Hy(P,6)-
Dm;if(Apj>0)Bz.ApE(Apk,Apj);P=P+1;}}return Bz;},Bgy:function(){var Gr=A._GetAutoObject(
A.Device.Device).Bq.Ch();if(Gr>0){var Bdq=A._NewObject(C.AiX,0);var P=Gr-1;while(
P>=0){var DU=A._NewObject(A.Device.Rating,0);DU.EK(P,A._GetAutoObject(A.Device.Device
).Bq);var LJ=A._GetAutoObject(A.Device.Helper).AB1(DU);if(!!LJ)Bdq.Of(LJ,DU.Timestamp
);P=P-1;}return Bdq;}else return null;},Awv:function(){this.Wc.AbD(this.Bgy());if(
!!this.Wc.NR&&(this.Wc.NR.AV>0))this.Z1=false;},_Init:function(aArg){C.K2._Init.
call(this,aArg);C.Aqc._Init.call(this.EI={I:this},0);C.Ag2._Init.call(this.Wc={I:
this},0);C.Akk._Init.call(this.AdJ={I:this},0);this.__proto__=C.AK1;this.EI.H(Asu
);this.EI.U(A.aaR(A.acf.Temperature));this.EI.ADZ(C.AFD);this.Wc.H(AXO);this.Wc.
R(A.aaR(A.acf.Rating));this.AdJ.H(Asu);this.J(this.EI,-2);this.J(this.Wc,-2);this.
J(this.AdJ,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.K2;this.EI._Done(
);this.Wc._Done();this.AdJ._Done();C.K2._Done.call(this);},_ReInit:function(){C.
K2._ReInit.call(this);this.EI._ReInit();this.Wc._ReInit();this.AdJ._ReInit();this.
EI.U(A.aaR(A.acf.Temperature));this.Wc.R(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.K2._Mark.call(this,D);if((B=this.EI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.Wh={Q:null,Gh:null,Gi:null
,Qu:null,AK:0,Ga:0,FP:100,Fs:0,Init:function(aArg){},IP:function(G){this.Fs=1;C.
D8.IP.call(this,G);},Bg:function(aSize){C.D8.Bg.call(this,aSize);this.Qu.H([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.D8.Ai.call(this,Ae);this.Qu.Y(this.Ga!==
this.FP);this.Qu.L(this.V.AP);if((this.Fs===4)||(this.Fs===5))this.Qu.L(A.jb.EU);
},Alu:function(G){this.Fs=5;this.An();if(this.Bk.Bv){A.pe([this,this.AxP],this);
this.Bk.Ar(false);}this.Bk.Ar(true);},Qa:function(G){if(this.Fs===5)A.pe([this,this.
AxP],this);if(this.Fs===4)A.pe([this,this.AxQ],this);if(this.Fs===1)A.pe(this.AQ
,this);this.Fs=0;this.An();},Dc:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,
F[1].call(F[0])));},Acn:function(s){this.Dc(s);},Au:function(E){if(A.aaZ(this.Q,
E))return;if(!!this.Q)A.z$([this,this.Acn],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Acn],E,0);if(!!E)A.pe([this,this.Acn],this);},Alv:function(G){this.Fs=4;this.
An();if(this.Bk.Bv){A.pe([this,this.AxQ],this);this.Bk.Ar(false);}this.Bk.Ar(true
);},JY:function(G){this.Fs=0;},AxQ:function(s){this.JY(s);},JT:function(G){this.
Fs=0;},AxP:function(s){this.JT(s);},Bx:function(E){if(E<this.Ga)E=this.Ga;if(E>this.
FP)E=this.FP;if(this.AK===E)return;this.AK=E;this.An();},Gk:function(E){if(this.
Ga===E)return;this.Ga=E;this.An();},E1:function(E){if(this.FP===E)return;this.FP=
E;this.An();},_Init:function(aArg){C.D8._Init.call(this,aArg);A.Core.BJ._Init.call(
this.Gh={I:this},0);A.Core.BJ._Init.call(this.Gi={I:this},0);A.acg.Am._Init.call(
this.Qu={I:this},0);this.__proto__=C.Wh;this.H(JN);this.Gh.Filter=5;this.Gi.Filter=
4;this.Background.H(JN);this.V.H(Ae4);this.V.R(Lo);this.Qu.H(Axz);this.J(this.Qu
,0);this.Gh.BK=[this,this.Alu];this.Gh.DS=[this,this.Alu];this.Gi.BK=[this,this.
Alv];this.Gi.DS=[this,this.Alv];this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak
));this.V.CC(null);this.Qu.Ax(A.aaL(A.ach.ALm));this.Init(aArg);},_Done:function(
){this.__proto__=C.D8;this.Gh._Done();this.Gi._Done();this.Qu._Done();C.D8._Done.
call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.Gh._ReInit();this.Gi.
_ReInit();this.Qu._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.D8._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qu)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.ASZ={AC:null,CG:null,HC:
null,Bg:function(aSize){C.Wh.Bg.call(this,aSize);this.CG.H([this.Qu.M[2],this.Qu.
M[1],this.M[2],this.Qu.M[3]]);},Ai:function(Ae){C.Wh.Ai.call(this,Ae);this.CG.Aa5(
0,this.CG.AV-1);if(this.Ga!==this.FP)this.Qu.Y(true);},Init:function(aArg){},Dc:
function(G){var F;if(!!this.Q&&!!this.AC)this.Bx(this.AC.DP((F=this.Q,F[1].call(
F[0]))));},JY:function(G){var F;var BN=this.AK;C.Wh.JY.call(this,G);this.Bx(this.
AK+1);if(this.AK!==BN){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C9(
this.AK)));A.abo(this.Q,0);}},JT:function(G){var F;var BN=this.AK;C.Wh.JT.call(this
,G);this.Bx(this.AK-1);if(this.AK!==BN){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.C9(this.AK)));A.abo(this.Q,0);}},Bx:function(E){var Qg=0;if(this.Ga
!==this.FP){if(E<this.Ga){E=this.FP;Qg=-this.CG.GP*this.CG.AV;}if(E>this.FP){E=this.
Ga;Qg=this.CG.GP;}}C.Wh.Bx.call(this,E);if(!!Qg)this.CG.Gc(Qg);this.CG.GS(this.AK
);this.CG.Hx(this.CG.Gd,true,this.HC,null);},G$:function(G){var B;var FU=this.CG.
GN;var Cx=(C.CP.isPrototypeOf(B=this.CG.Cd)?B:null);if(!Cx)return;Cx.S(this.V.B3
);Cx.A5(A.aaL(A.fl.Ah));Cx.L(this.V.AP);if(!!this.AC)Cx.R(this.AC.Gg(FU));else Cx.
R(WH);Cx.H(A.abK(Cx.M,[(B=this.CG.M)[2]-B[0],this.CG.GP]));},CK:function(E){if(this.
AC===E)return;this.AC=E;if(!!this.AC){this.Gk(0);this.E1(this.AC.Do()-1);this.CG.
Jm(this.AC.Do());this.CG.Aa5(0,this.CG.AV-1);}},_Init:function(aArg){C.Wh._Init.
call(this,aArg);A.Core.CG._Init.call(this.CG={I:this},0);A.acl.FZ._Init.call(this.
HC={I:this},0);this.__proto__=C.ASZ;this.H(JN);this.Qu.H(AXP);this.CG.Aer(40);this.
CG.NN(C.CP);this.HC.Wa(23);this.HC.HF(1);this.HC.Ff(200);this.J(this.CG,0);this.
V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.CG.G$=[this,this.G$];this.Init(
aArg);},_Done:function(){this.__proto__=C.Wh;this.CG._Done();this.HC._Done();C.Wh.
_Done.call(this);},_ReInit:function(){C.Wh._ReInit.call(this);this.CG._ReInit();
this.HC._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Wh._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HC)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.RB={AJ_:0
,Ai:function(Ae){C.Fl.Ai.call(this,Ae);this.U(A.aaR(A.acf.AFY));if(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).W.
TimestampLastWeighing)this.Kg((A._GetAutoObject(A.Device.Converter).AkD(this.AJ_
)+CO)+A._GetAutoObject(A.acj.DM).Afu());else this.Kg(A.aaR(A.acf.Unknown));},Cc:
function(G){C.Fl.Cc.call(this,G);this.AJ_=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;this.An();},_Init:function(aArg
){C.Fl._Init.call(this,aArg);this.__proto__=C.RB;},_className:"Application::AnimalInfoItemWeightGain"
};C.AN6={Bb:null,Db:null,Init:function(aArg){var B;A.zX([this,this.Nd],[B=A._GetAutoObject(
A.Device.Device),B.AQR,B.AYo],0);},Eo:function(G){C.Iy.Eo.call(this,G);this.Db.Ax(
A._GetAutoObject(A.Device.Converter).BeJ(A._GetAutoObject(A.Device.Device).D2));
},_Init:function(aArg){C.Iy._Init.call(this,aArg);A.acg.DR._Init.call(this.Bb={I:
this},0);A.acg.Am._Init.call(this.Db={I:this},0);this.__proto__=C.AN6;this.Bb.DK(
AxA);this.Bb.DY(Asz);this.Bb.L(A.jb.Bb);this.Db.H(AXQ);this.Db.L(A.jb.Text);this.
J(this.Bb,0);this.J(this.Db,0);this.Db.Ax(A.aaL(A.ach.Ajt));this.Init(aArg);},_Done:
function(){this.__proto__=C.Iy;this.Bb._Done();this.Db._Done();C.Iy._Done.call(this
);},_ReInit:function(){C.Iy._ReInit.call(this);this.Bb._ReInit();this.Db._ReInit(
);},_Mark:function(D){var B;C.Iy._Mark.call(this,D);if((B=this.Bb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.AL_={Y$:null,Kn:null,Mc:null,Timer:null,ABb:3,Ai:function(Ae){C.AB.Ai.call(this
,Ae);this.Y$.R(A._GetAutoObject(A.Device.Helper).Nb(A.aaR(A.acf.BnX),PW,this.ABb.
toFixed()));},CJ:function(G){this.Timer.Ar(true);},Fd:function(G){this.Timer.Ar(
false);},Bx0:function(G){if(this.ABb>1){this.ABb=this.ABb-1;this.An();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).AwC();}},_Init:function(aArg){
C.AB._Init.call(this,aArg);A.acg.Text._Init.call(this.Y$={I:this},0);A.acg.Text.
_Init.call(this.Kn={I:this},0);A.acg.Am._Init.call(this.Mc={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.AL_;this.Background.L(A.jb.C0
);this.N.Y(true);this.Y$.H(AHf);this.Y$.KI(true);this.Y$.R(A.jV);this.Y$.L(A.jb.
Text);this.Kn.H(AXR);this.Kn.KI(true);this.Kn.R(A.aaR(A.acf.A3E));this.Kn.L(A.jb.
Text);this.Mc.H(AHg);this.J(this.Y$,0);this.J(this.Kn,0);this.J(this.Mc,0);this.
Y$.S(A.aaL(A.fl.Ah));this.Kn.S(A.aaL(A.fl.Ah));this.Mc.Ax(A.aaL(A.ach.AAJ));this.
Timer.Mp=[this,this.Bx0];},_Done:function(){this.__proto__=C.AB;this.Y$._Done();
this.Kn._Done();this.Mc._Done();this.Timer._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.Y$._ReInit();this.Kn._ReInit();this.Mc._ReInit(
);this.Timer._ReInit();this.Kn.R(A.aaR(A.acf.A3E));this.Y$.S(A.aaL(A.fl.Ah));this.
Kn.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Y$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ALS={Kn:null,Al6:null
,Qn:null,CT:function(){this.An();},Ai:function(Ae){C.Ady.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aar<=10)this.Kn.R(A.aaR(A.acf.BeY));else this.Kn.R(A.aaR(A.acf.
A3F));},_Init:function(aArg){C.Ady._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kn={I:this},0);A.acg.Am._Init.call(this.Al6={I:this},0);C.CP._Init.call(this.Qn={
I:this},0);this.__proto__=C.ALS;this.Ss.H(AHh);this.Mc.H(AXS);this.Kn.H(AXT);this.
Kn.KI(true);this.Kn.L(A.jb.Text);this.Al6.H(AHg);this.Qn.H(AXU);this.Qn.Y(true);
this.Qn.R(A.aaR(A.acf.ASB));this.Qn.L(A.jb.Text);this.J(this.Kn,0);this.J(this.Al6
,0);this.J(this.Qn,0);this.Kn.S(A.aaL(A.fl.Ah));this.Al6.Ax(A.aaL(A.ach.AAJ));this.
Qn.S(A.aaL(A.fl.Ah));this.Qn.A5(A.aaL(A.fl.Ak));this.Qn.CC(A.aaL(A.fl.By));},_Done:
function(){this.__proto__=C.Ady;this.Kn._Done();this.Al6._Done();this.Qn._Done();
C.Ady._Done.call(this);},_ReInit:function(){C.Ady._ReInit.call(this);this.Kn._ReInit(
);this.Al6._ReInit();this.Qn._ReInit();this.Qn.R(A.aaR(A.acf.ASB));this.Kn.S(A.aaL(
A.fl.Ah));this.Qn.S(A.aaL(A.fl.Ah));this.Qn.A5(A.aaL(A.fl.Ak));this.Qn.CC(A.aaL(
A.fl.By));this.CT();},_Mark:function(D){var B;C.Ady._Mark.call(this,D);if((B=this.
Kn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Al6)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Qn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AKN={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AKN;this.
Rv.Ar(false);this.Rv.Aj(false);this.Rv.Y(false);},_className:"Application::AlarmListFilterScreen"
};C.ATX={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.ATX;this.
SI.Ar(false);this.SI.Aj(false);this.SI.Y(false);},_className:"Application::WatchListFilterScreen"
};C.AL7={_Init:function(aArg){C.Gw._Init.call(this,aArg);this.__proto__=C.AL7;this.
N.BU(A.aaR(A.acf.A3t));},_ReInit:function(){C.Gw._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A3t));},_className:"Application::ControlListActionsScreen"};C.ATW={_Init:
function(aArg){C.Gw._Init.call(this,aArg);this.__proto__=C.ATW;this.N.BU(A.aaR(A.
acf.A3C));},_ReInit:function(){C.Gw._ReInit.call(this);this.N.BU(A.aaR(A.acf.A3C
));},_className:"Application::WatchListActionsScreen"};C.AKM={_Init:function(aArg
){C.Gw._Init.call(this,aArg);this.__proto__=C.AKM;this.N.BU(A.aaR(A.acf.A3s));},
_ReInit:function(){C.Gw._ReInit.call(this);this.N.BU(A.aaR(A.acf.A3s));},_className:
"Application::AlarmListActionsScreen"};C.ANB={Eo:function(G){C.J9.Eo.call(this,G
);this.Db.Ax(A._GetAutoObject(A.Device.Converter).Af1(5));},_Init:function(aArg){
C.J9._Init.call(this,aArg);this.__proto__=C.ANB;},_className:"Application::HeaderControlListFilter"
};C.AN8={Eo:function(G){C.J9.Eo.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.
Converter).Af1(6));},_Init:function(aArg){C.J9._Init.call(this,aArg);this.__proto__=
C.AN8;},_className:"Application::HeaderWatchListFilter"};C.AOb={DQ:null,M0:null,
_Init:function(aArg){C.TC._Init.call(this,aArg);C.CP._Init.call(this.DQ={I:this}
,0);A.acg.Am._Init.call(this.M0={I:this},0);this.__proto__=C.AOb;this.DQ.H(AnU);
this.DQ.R(A.aaR(A.acf.A4c));this.DQ.L(A.jb.Text);this.M0.H(AXV);this.M0.L(A.jb.Text
);this.M0.A2(0x12);this.J(this.DQ,-2);this.J(this.M0,0);this.DQ.S(A.aaL(A.fl.Ak)
);this.DQ.A5(A.aaL(A.fl.By));this.M0.Ax(A.aaL(A.ach.ACs));},_Done:function(){this.
__proto__=C.TC;this.DQ._Done();this.M0._Done();C.TC._Done.call(this);},_ReInit:function(
){C.TC._ReInit.call(this);this.DQ._ReInit();this.M0._ReInit();this.DQ.R(A.aaR(A.
acf.A4c));this.DQ.S(A.aaL(A.fl.Ak));this.DQ.A5(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.TC._Mark.call(this,D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.M0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWatch"
};C.ALN={Cc:function(Ac){C.Ai6.Cc.call(this,Ac);if(!!this.AX){var N7=this.AX.HU(
Ac,8);var Bzo=this.AX.R0(Ac,21);this.AaE.R(A._GetAutoObject(A.Device.Helper).MF(
Bzo,A._GetAutoObject(A.Device.Helper).Dy()).toFixed());this.R6.Y(N7);this.An();}
},_Init:function(aArg){C.Ai6._Init.call(this,aArg);this.__proto__=C.ALN;},_className:
"Application::CalfListWatchItem"};C.TC={Agv:null,Agx:null,_Init:function(aArg){C.
Dv._Init.call(this,aArg);A.acg.Am._Init.call(this.Agv={I:this},0);A.acg.Am._Init.
call(this.Agx={I:this},0);this.__proto__=C.TC;this.Agv.H(AXW);this.Agv.L(A.jb.Text
);this.Agv.A2(0x12);this.Agx.H(AXX);this.Agx.L(A.jb.Text);this.Agx.A2(0x12);this.
Kj(this.CX,-1);this.J(this.Agv,0);this.J(this.Agx,0);this.Agv.Ax(A.aaL(A.ach.Amw
));this.Agx.Ax(A.aaL(A.ach.Aa1));},_Done:function(){this.__proto__=C.Dv;this.Agv.
_Done();this.Agx._Done();C.Dv._Done.call(this);},_ReInit:function(){C.Dv._ReInit.
call(this);this.Agv._ReInit();this.Agx._ReInit();},_Mark:function(D){var B;C.Dv.
_Mark.call(this,D);if((B=this.Agv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agx).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"};C.ApP={
FX:A.wg,Op:A.wf,QL:function(E){if(A.aaY(this.FX,E))return;this.FX=E;},Am7:function(
E){if(A.aaX(this.Op,E))return;this.Op=E;},_Init:function(aArg){A.acu.ABa._Init.call(
this,aArg);this.__proto__=C.ApP;},_className:"Application::BoundCoordList"};C.Ai6={
TI:null,V4:null,TJ:null,V5:null,R6:null,YO:null,AaE:null,AN:null,A9:null,D4:null
,Ll:null,Init:function(aArg){},Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.
Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*
30)/100)|0));this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TI.H([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.V4.H(this.TI.M);this.A9.H([this.TI.
M[2]-1,0,this.TI.M[2]+1,aSize[1]]);this.TJ.H([this.TI.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.V5.H(this.TJ.M);this.D4.H([this.TJ.M[2]-1,0,this.TJ.M[2]+1,aSize[
1]]);this.R6.H([this.TJ.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.YO.H(this.R6.
M);this.Ll.H([this.R6.M[2]-1,0,this.R6.M[2]+1,aSize[1]]);this.AaE.H([this.R6.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);var KZ=this.V.AP;
this.TI.ADG(KZ);this.V4.L(KZ);this.TJ.ADG(KZ);this.V5.L(KZ);this.R6.ADG(KZ);this.
YO.L(KZ);this.AaE.L(KZ);this.YO.Y(!this.R6.Fe());},Cc:function(Ac){if(!this.AX)return;
this.Hr=Ac;var Oe=this.AX.CA(Ac,1);var H5=this.AX.Amp(Ac,14);var AtI=this.AX.CA(
Ac,5);var LJ=this.AX.IU(Ac,13);this.U(Oe.toFixed());if(!!LJ){this.TI.Y(true);this.
TI.AvU(A._GetAutoObject(A.acj.Assessment).Ba2(LJ));this.V4.Y(false);}else{this.TI.
Y(false);this.V4.Y(true);}if(AtI>0){this.TJ.Y(true);this.TJ.AvU(A._GetAutoObject(
A.acj.Assessment).Ba2(A._GetAutoObject(A.Device.Converter).ArZ(H5,AtI)));this.V5.
Y(false);}else{this.TJ.Y(false);this.V5.Y(true);}this.An();},_Init:function(aArg
){C.Ba._Init.call(this,aArg);C.J4._Init.call(this.TI={I:this},0);A.acg.Text._Init.
call(this.V4={I:this},0);C.J4._Init.call(this.TJ={I:this},0);A.acg.Text._Init.call(
this.V5={I:this},0);C.J4._Init.call(this.R6={I:this},0);A.acg.Text._Init.call(this.
YO={I:this},0);A.acg.Text._Init.call(this.AaE={I:this},0);A.acg.AI._Init.call(this.
AN={I:this},0);A.acg.AI._Init.call(this.A9={I:this},0);A.acg.AI._Init.call(this.
D4={I:this},0);A.acg.AI._Init.call(this.Ll={I:this},0);this.__proto__=C.Ai6;this.
V4.H(AXY);this.V4.R(AnV);this.V5.H(AnW);this.V5.R(AnV);this.R6.AvU(A.jb.Ab6);this.
YO.H(AnW);this.YO.R(Q7);this.AN.L(A.jb.Bb);this.A9.L(A.jb.Bb);this.D4.L(A.jb.Bb);
this.Ll.L(A.jb.Bb);this.J(this.TI,0);this.J(this.V4,0);this.J(this.TJ,0);this.J(
this.V5,0);this.J(this.R6,0);this.J(this.YO,0);this.J(this.AaE,0);this.J(this.AN
,0);this.J(this.A9,0);this.J(this.D4,0);this.J(this.Ll,0);this.V4.S(A.aaL(A.fl.Ah
));this.V5.S(A.aaL(A.fl.Ah));this.YO.S(A.aaL(A.fl.Ah));this.AaE.S(A.aaL(A.fl.Ah)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.TI._Done();this.V4.
_Done();this.TJ._Done();this.V5._Done();this.R6._Done();this.YO._Done();this.AaE.
_Done();this.AN._Done();this.A9._Done();this.D4._Done();this.Ll._Done();C.Ba._Done.
call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.TI._ReInit();this.V4.
_ReInit();this.TJ._ReInit();this.V5._ReInit();this.R6._ReInit();this.YO._ReInit(
);this.AaE._ReInit();this.AN._ReInit();this.A9._ReInit();this.D4._ReInit();this.
Ll._ReInit();this.V4.S(A.aaL(A.fl.Ah));this.V5.S(A.aaL(A.fl.Ah));this.YO.S(A.aaL(
A.fl.Ah));this.AaE.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ba._Mark.call(this
,D);if((B=this.TI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V5)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YO
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ll)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DJ={Pe:null,AmM:null
,EQ:null,DJ:null,AqB:0,AqC:0,A5E:0,Amf:0,Ap0:0,Init:function(aArg){this.ARu(6);this.
ARv(8);this.ARG(A.jb.AR);this.ARH(3);},Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);this.DJ.Bjx([this.DJ.Aaz[0],(B=this.DJ.M)[3]-B[1]]);this.Wd(this);},ARt:function(
E){if(this.Pe===E)return;this.Pe=E;this.DJ.ARt(E);},ARH:function(E){if(this.AqC===
E)return;this.AqC=E;this.DJ.ARH(E);},ARG:function(E){if(this.AqB===E)return;this.
AqB=E;this.DJ.ARG(E);this.DJ.BjD(E);},Wd:function(G){var B;while(!!this.DJ.Ag)this.
HH(this.DJ.Ag);if(!this.EQ)return;this.DJ.Am7([((this.EQ.Op[0]*((B=this.M)[2]-B[
0]))/(this.EQ.FX[2]-this.EQ.FX[0]))|0,this.DJ.Op[1]]);this.DJ.Am7([this.DJ.Op[0]
,((this.EQ.Op[1]*((B=this.M)[3]-B[1]))/(this.EQ.FX[3]-this.EQ.FX[1]))|0]);var P;
var C$=this.DJ.Op[1];var D1;var A2M=this.EQ.FX[1];var BhJ=(((B=this.DJ.M)[3]-B[1
])/this.DJ.Op[1])|0;for(P=0;P<BhJ;P=P+1){D1=A._NewObject(A.acg.Text,0);D1.H([0,((((
B=this.M)[3]-B[1])-(P*C$))-(this.AmM.Ascent+this.AmM.Descent))+2,((B=this.M)[2]-
B[0])-this.AqC,(((B=this.M)[3]-B[1])-(P*C$))+2]);D1.L(this.A5E);D1.S(this.AmM);D1.
A2(0x24);if(P>0)D1.R(this.AIp(A2M));else D1.R(this.AIZ());A2M=A2M+this.EQ.Op[1];
this.J(D1,0);}},BC0:function(s){this.Wd(s);},Bkr:function(E){if(this.AmM===E)return;
this.AmM=E;this.An();},Aym:function(AY0){var B;if(!this.EQ||(this.EQ.FX[3]===this.
EQ.FX[1]))return 0;return(((AY0-this.EQ.FX[1])*((B=this.M)[3]-B[1]))/(this.EQ.FX[
3]-this.EQ.FX[1]))|0;},Aek:function(E){if(this.EQ===E)return;this.EQ=E;if(!E)this.
DJ.Aek(null);else{var Bz=A._NewObject(A.acu.ABa,0);Bz.Av1(this.EQ.AC0);Bz.XQ();var
Jo=E.Ala;while(!!Jo){Bz.ApE(this.BvF(Jo.PN),this.BvG(Jo.PO));Jo=Jo.Ag;}this.DJ.Aek(
Bz);this.An();}},BvF:function(BtX){var B;if(!this.EQ||(this.EQ.FX[2]===this.EQ.FX[
0]))return 0;return((BtX-this.EQ.FX[0])*((B=this.M)[2]-B[0]))/(this.EQ.FX[2]-this.
EQ.FX[0]);},BvG:function(AY0){var B;if(!this.EQ||(this.EQ.FX[3]===this.EQ.FX[1])
)return 0;return((AY0-this.EQ.FX[1])*((B=this.M)[3]-B[1]))/(this.EQ.FX[3]-this.EQ.
FX[1]);},AIp:function(Aod){return Aod.toFixed();},AIZ:function(){return A.jV;},ARv:
function(E){if(this.Amf===E)return;this.Amf=E;this.DJ.ARv(E);},ARu:function(E){if(
this.Ap0===E)return;this.Ap0=E;this.DJ.ARu(E);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acu.DJ._Init.call(this.DJ={I:this},0);this.__proto__=C.DJ;this.
H(AHi);this.A5E=A.jb.Text;this.DJ.AW(0x3F);this.DJ.H(AHi);this.DJ.BkP(AXZ);this.
DJ.Bje(A.jb.Ab6);this.DJ.Bka(A.jb.Bb);this.DJ.Bk8(A.jb.Ab6);this.J(this.DJ,0);this.
Pe=A.aaL(A.acu.ABu);this.AmM=A.aaL(A.fl.By);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.O;this.DJ._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.DJ._ReInit();this.Bkr(A.aaL(A.fl.By));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Pe)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AmM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EQ)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DJ)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.ALy={AIp:function(Aod){return A._GetAutoObject(
A.Device.Converter).Aw2(Aod,0);},AIZ:function(){return A._GetAutoObject(A.acj.DM
).Afu();},_Init:function(aArg){C.DJ._Init.call(this,aArg);this.__proto__=C.ALy;}
,_className:"Application::BodyWeightGraph"};C.OK={Jz:null,Ep:null,D_:null,FJ:null
,Iu:null,Iv:null,Init:function(aArg){this.ARt(null);},Wd:function(G){var B;var F;
C.DJ.Wd.call(this,G);var AJt=0;var AKd=0;if(!!this.Jz){AJt=this.Aym(A._GetAutoObject(
A.Device.Helper).AB0((F=this.Jz,F[1].call(F[0]))));AKd=this.Aym(A._GetAutoObject(
A.Device.Helper).ABZ((F=this.Jz,F[1].call(F[0]))));}this.FJ.H(A.abP(this.FJ.M,0)
);this.FJ.H([].concat(this.FJ.M.slice(0,3),((B=this.M)[3]-B[1])-AKd));this.Iu.H(
A.abO(this.Iu.M,(this.FJ.M[3]-((((B=this.Iu.M)[3]-B[1])/2)|0))-2));this.D_.H(A.abP(
this.D_.M,this.FJ.M[3]));this.D_.H([].concat(this.D_.M.slice(0,3),((B=this.M)[3]-
B[1])-AJt));this.Iv.H(A.abO(this.Iv.M,(this.D_.M[3]-((((B=this.Iv.M)[3]-B[1])/2)|
0))+2));this.Ep.H(A.abP(this.Ep.M,this.D_.M[3]));this.Ep.H([].concat(this.Ep.M.slice(
0,3),(B=this.M)[3]-B[1]));},AIp:function(Aod){return A._GetAutoObject(A.Device.Converter
).SJ(Aod,0,true);},AIZ:function(){return A._GetAutoObject(A.acj.DM).ZX();},Am3:function(
E){if(A.aaZ(this.Jz,E))return;if(!!this.Jz)A.z$([this,this.Aid],this.Jz,0);this.
Jz=E;if(!!E)A.zX([this,this.Aid],E,0);if(!!E)A.pe([this,this.Aid],this);},Aid:function(
G){this.An();},_Init:function(aArg){C.DJ._Init.call(this,aArg);A.acg.AI._Init.call(
this.Ep={I:this},0);A.acg.AI._Init.call(this.D_={I:this},0);A.acg.AI._Init.call(
this.FJ={I:this},0);A.acg.AI._Init.call(this.Iu={I:this},0);A.acg.AI._Init.call(
this.Iv={I:this},0);this.__proto__=C.OK;this.Ep.AW(0xD);this.Ep.H(ZC);this.Ep.L(
A.jb.FW);this.D_.AW(0xD);this.D_.H(Uy);this.D_.L(A.jb.HZ);this.FJ.AW(0xD);this.FJ.
H(Acf);this.FJ.L(A.jb.EU);this.Iu.AW(0xD);this.Iu.H(WG);this.Iu.AvI(A.jb.HZ);this.
Iu.AvJ(A.jb.HZ);this.Iu.AvL(A.jb.EU);this.Iu.AvK(A.jb.EU);this.Iv.AW(0xD);this.Iv.
H(WF);this.Iv.AvI(A.jb.FW);this.Iv.AvJ(A.jb.FW);this.Iv.AvL(A.jb.HZ);this.Iv.AvK(
A.jb.HZ);this.J(this.Ep,-1);this.J(this.D_,-1);this.J(this.FJ,-1);this.J(this.Iu
,-1);this.J(this.Iv,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.DJ;this.
Ep._Done();this.D_._Done();this.FJ._Done();this.Iu._Done();this.Iv._Done();C.DJ.
_Done.call(this);},_ReInit:function(){C.DJ._ReInit.call(this);this.Ep._ReInit();
this.D_._ReInit();this.FJ._ReInit();this.Iu._ReInit();this.Iv._ReInit();},_Mark:
function(D){var B;C.DJ._Mark.call(this,D);if((B=this.Jz)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Ep)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.FJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Iu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iv)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightGainGraph"};C.Aqc={EI:null,EQ:null,RN:null,H$:null
,Bb:null,AwL:A.jV,DE:A.jV,ANw:null,Init:function(aArg){},Bg:function(aSize){A.Core.
O.Bg.call(this,aSize);this.Bb.H([].concat([0,aSize[1]-2],aSize));this.RN.H([30,0
,aSize[0]-2,30]);this.H$.H(this.RN.M);if(!!this.EI)this.EI.H([30,this.RN.M[3],aSize[
0],this.Bb.M[1]]);},AgW:function(E){if(this.AwL===E)return;this.AwL=E;this.H$.R(
E);},U:function(E){if(this.DE===E)return;this.DE=E;this.RN.R(E);},ADZ:function(E
){if(this.ANw===E)return;this.ANw=E;this.Bmi(this);},Bmi:function(G){var B;if(!!
this.EI)this.HH(this.EI);this.EI=(C.DJ.isPrototypeOf(B=A._NewObject(this.ANw,0))?
B:null);if(!!this.EI){this.EI.H(AX0);this.EI.Aek(this.EQ);this.J(this.EI,0);}},Aek:
function(E){if(this.EQ===E)return;this.EQ=E;if(!!this.EI)this.EI.Aek(E);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.RN={I:this
},0);A.acg.Text._Init.call(this.H$={I:this},0);A.acg.AI._Init.call(this.Bb={I:this
},0);this.__proto__=C.Aqc;this.H(Ae7);this.Ar(false);this.RN.H(AX1);this.RN.A2(0x11
);this.RN.R(Lo);this.RN.L(A.jb.Text);this.H$.A2(0x14);this.H$.R(A.jV);this.H$.L(
A.jb.Text);this.Bb.H(AX2);this.Bb.L(A.jb.Bb);this.J(this.RN,0);this.J(this.H$,0);
this.J(this.Bb,0);this.RN.S(A.aaL(A.fl.Ak));this.H$.S(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=A.Core.O;this.RN._Done();this.H$._Done();
this.Bb._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.RN._ReInit();this.H$._ReInit();this.Bb._ReInit();this.RN.S(A.aaL(
A.fl.Ak));this.H$.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.EI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EQ)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.RN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::GraphItem"};C.AK9={Af2:null,GS:function(E){var F;C.FQ.
GS.call(this,E);if(!!this.Af2)(F=this.Af2,F[2].call(F[0],E));},A7H:function(E){if(
A.aaZ(this.Af2,E))return;if(!!this.Af2)A.z$([this,this.A1d],this.Af2,0);this.Af2=
E;if(!!E)A.zX([this,this.A1d],E,0);if(!!E)A.pe([this,this.A1d],this);},A1d:function(
G){var F;if(!this.Af2)return;(F=this.Af2,F[2].call(F[0],this.Fy()));},_Init:function(
aArg){C.FQ._Init.call(this,aArg);this.__proto__=C.AK9;},_Mark:function(D){var B;
C.FQ._Mark.call(this,D);if((B=this.Af2)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Application::AnimalScrollList"};C.ASA={QZ:null,PK:null,Xu:null,Xv:
null,Ml:0,CT:function(){this.An();},Bg:function(aSize){var B;A.Core.O.Bg.call(this
,aSize);this.QZ.H(A.abI(this.QZ.M,(((B=this.M)[3]-B[1])/2)|0));this.PK.H(A.abI(this.
PK.M,(((B=this.M)[3]-B[1])/2)|0));this.QZ.H(A.abO(this.QZ.M,(((B=this.M)[3]-B[1]
)/2)|0));this.PK.H(A.abO(this.PK.M,(((B=this.M)[3]-B[1])/2)|0));},Ai:function(Ae
){A.Core.O.Ai.call(this,Ae);this.QZ.R(A._GetAutoObject(A.Device.Helper).Nb(A.aaR(
A.acf.BhD),PW,this.Ml.toFixed()));},AbB:function(E){if(this.Ml===E)return;this.Ml=
E;this.ByB(this);},ByB:function(G){var B;var AIx=(((B=this.M)[2]-B[0])/this.Ml)|
0;this.Xu.H(A.abM(this.Xu.M,(((B=this.M)[2]-B[0])-(this.Ml*AIx))+(((AIx/2)-(((B=
this.Xu.M)[2]-B[0])/2))|0)));this.Xv.H(A.abM(this.Xv.M,(((B=this.M)[2]-B[0])-AIx
)+(((AIx/2)-(((B=this.Xv.M)[2]-B[0])/2))|0)));this.An();},_Init:function(aArg){A.
Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.QZ={I:this},0);A.acg.Text.
_Init.call(this.PK={I:this},0);A.acg.Text._Init.call(this.Xu={I:this},0);A.acg.Text.
_Init.call(this.Xv={I:this},0);this.__proto__=C.ASA;this.H(BC);this.QZ.H(AX3);this.
QZ.HG(5);this.QZ.A2(0x11);this.QZ.L(A.jb.Text);this.PK.H(AX4);this.PK.HG(5);this.
PK.A2(0x14);this.PK.R(A.aaR(A.acf.Ahf));this.PK.L(A.jb.Text);this.Xu.H(AX5);this.
Xu.R(AHj);this.Xu.L(A.jb.Text);this.Xv.H(AX6);this.Xv.R(AHj);this.Xv.L(A.jb.Text
);this.J(this.QZ,0);this.J(this.PK,0);this.J(this.Xu,0);this.J(this.Xv,0);this.QZ.
S(A.aaL(A.fl.Ak));this.PK.S(A.aaL(A.fl.Ak));this.Xu.S(A.aaL(A.fl.Hi));this.Xv.S(
A.aaL(A.fl.Hi));},_Done:function(){this.__proto__=A.Core.O;this.QZ._Done();this.
PK._Done();this.Xu._Done();this.Xv._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.QZ._ReInit();this.PK._ReInit();this.Xu._ReInit(
);this.Xv._ReInit();this.PK.R(A.aaR(A.acf.Ahf));this.QZ.S(A.aaL(A.fl.Ak));this.PK.
S(A.aaL(A.fl.Ak));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.QZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xv)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"};C.K2={VD:null
,Ajc:null,KD:A.jV,Ml:0,Z1:false,Init:function(aArg){var AZY=A._NewObject(C.J5,0);
var P;for(P=0;P<3;P=P+1)if(A._GetAutoObject(A.Device.Helper).W.Td()<AZY.C9(P))AZY.
AmS=P+1;this.VD.CK(AZY);},Ai:function(Ae){C.D2.Ai.call(this,Ae);this.Ajc.Y(this.
Z1);if(this.Z1)this.A8(null);else this.A8(this.VD);},CJ:function(G){var B;var F;
C.D2.CJ.call(this,G);if(!(F=this.VD.Q,F[1].call(F[0])))(F=this.VD.Q,F[2].call(F[
0],this.VD.AC.C9(0)));A.zX([this,this.AHJ],[B=A._GetAutoObject(A.Device.Helper),
B.UA,B.UB],0);A.zV([this,this.AHJ],A._GetAutoObject(A.Device.Device).Bq,0);A.zX([
this,this.AlH],[B=A._GetAutoObject(A.Device.Helper).W,B.QK,B.OnSetId],0);A.pe([this
,this.AlH],this);},Fd:function(G){var B;A.z$([this,this.AHJ],[B=A._GetAutoObject(
A.Device.Helper),B.UA,B.UB],0);A.z9([this,this.AHJ],A._GetAutoObject(A.Device.Device
).Bq,0);A.z$([this,this.AlH],[B=A._GetAutoObject(A.Device.Helper).W,B.QK,B.OnSetId
],0);C.D2.Fd.call(this,G);},YW:function(E){if(A.aa0(this.AQ,E))return;C.D2.YW.call(
this,E);this.VD.AQ=E;},AbB:function(E){if(this.Ml===E)return;this.Ml=E;A.pe([this
,this.AlH],this);},Btx:function(Ap){this.AbB(Ap);},Ain:function(G){},AHJ:function(
s){this.Ain(s);},Dq:function(E){if(this.KD===E)return;this.KD=E;this.Ajc.R(E);},
AlH:function(G){var Fk=A._NewObject(A.Device.Filter,0);var Ayw=A._NewObject(A.Device.
UInt32FilterCriterion,0);Ayw.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).Ahf()-((this.Ml-1)*86400))-1,true);Fk.CZ(Ayw);var HO=A._NewObject(A.Device.Int32FilterCriterion
,0);HO.Initialize(1,0,A._GetAutoObject(A.Device.Helper).W.Id,true);Fk.CZ(HO);A._GetAutoObject(
A.Device.Device).Bq.Bm(Fk);},BiC:function(){return this.Ml;},_Init:function(aArg
){C.D2._Init.call(this,aArg);C.ASZ._Init.call(this.VD={I:this},0);C.Akk._Init.call(
this.Ajc={I:this},0);this.__proto__=C.K2;this.VD.H(BC);this.Ajc.H(SO);this.J(this.
VD,0);this.J(this.Ajc,0);this.VD.Au([this,this.BiC,this.Btx]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D2;this.VD._Done();this.Ajc._Done();C.D2._Done.
call(this);},_ReInit:function(){C.D2._ReInit.call(this);this.VD._ReInit();this.Ajc.
_ReInit();},_Mark:function(D){var B;C.D2._Mark.call(this,D);if((B=this.VD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.AMe={VK:null,Yi:null,RatingMode:null,Pp:null,_Init:
function(aArg){C.Cu._Init.call(this,aArg);C.Py._Init.call(this.VK={I:this},0);C.
B$._Init.call(this.Yi={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.I1._Init.call(this.Pp={I:this},0);this.__proto__=C.AMe;var B;this.G8.R(A.
aaR(A.acf.ABk));this.JH(A.aaR(A.acf.A37));this.VK.H(AsA);this.VK.Aj(true);this.VK.
U(A.aaR(A.acf.Ar9));this.VK.Bf(true);this.VK.PD(23);this.Yi.H(AX7);this.Yi.Aj(true
);this.Yi.U(A.aaR(A.acf.A83));this.Yi.Bf(false);this.Pp.H(AX8);this.Pp.Aj(true);
this.Pp.U(A.aaR(A.acf.A34));this.Pp.Bf(true);this.Pp.Gk(3);this.Pp.E1(14);this.Pp.
Kf(A.aaR(A.acf.J5)+AsB);this.Pp.KH(A.aaR(A.acf.Gz)+AsB);this.J(this.VK,0);this.J(
this.Yi,0);this.J(this.Pp,0);this.VK.AQ=[B=this.VK,B.PE];this.Yi.Au([B=this.RatingMode
,B.B_,B.Ca]);this.Yi.CK(this.RatingMode);this.Pp.Au([B=A._GetAutoObject(A.Device.
Device),B.A6V,B.A_6]);},_Done:function(){this.__proto__=C.Cu;this.VK._Done();this.
Yi._Done();this.RatingMode._Done();this.Pp._Done();C.Cu._Done.call(this);},_ReInit:
function(){C.Cu._ReInit.call(this);this.VK._ReInit();this.Yi._ReInit();this.RatingMode.
_ReInit();this.Pp._ReInit();this.G8.R(A.aaR(A.acf.ABk));this.JH(A.aaR(A.acf.A37)
);this.VK.U(A.aaR(A.acf.Ar9));this.Yi.U(A.aaR(A.acf.A83));this.Pp.U(A.aaR(A.acf.
A34));this.Pp.Kf(A.aaR(A.acf.J5)+AsB);this.Pp.KH(A.aaR(A.acf.Gz)+AsB);},_Mark:function(
D){var B;C.Cu._Mark.call(this,D);if((B=this.VK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Aup={Init:function(aArg){this.V.Text.A2(0x11);this.V.Text.HG(10);},Ai:function(
Ae){var B;C.Ci.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10);var Fi=((Ae&0x20)===0x20
);var Gq=this.Bk.Bv;var FE=A.jb.AdA;var GG=A.jb.Bh;if(this.G_){FE=A.jb.Bh;GG=A.jb.
Text;}if(!G2){this.Background.L(FE);this.V.L(A.jb.CE);}else if(Gq){this.Background.
L(A.jb.AR);this.V.L(A.jb.Bh);}else if(Fi){this.Background.L(A.jb.AR);this.V.L(A.
jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}this.Ly=G2;this.Kv=Fi;this.Qb=Gq;
},_Init:function(aArg){C.Ci._Init.call(this,aArg);this.__proto__=C.Aup;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Ci._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.AB8={Am:null,Init:
function(aArg){var B;A.zX([this,this.Eo],[B=A._GetAutoObject(A.Device.Helper).W,
B.PA,B.DT],0);A.pe([this,this.Eo],this);},C7:function(E){C.BO.C7.call(this,E);this.
Am.L(E);},Eo:function(G){switch(A._GetAutoObject(A.Device.Helper).W.AnimalType){
case 0:this.Am.Ax(A.aaL(A.ach.AB5));break;case 1:this.Am.Ax(A.aaL(A.ach.ANR));break;
case 2:this.Am.Ax(A.aaL(A.ach.ANT));break;default:A.ab5("%s%e",AX9,A._GetAutoObject(
A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BO._Init.call(this,aArg
);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.AB8;this.Am.H(AHk);this.
J(this.Am,0);this.Am.Ax(A.aaL(A.ach.AB5));this.Init(aArg);},_Done:function(){this.
__proto__=C.BO;this.Am._Done();C.BO._Done.call(this);},_ReInit:function(){C.BO._ReInit.
call(this);this.Am._ReInit();},_Mark:function(D){var B;C.BO._Mark.call(this,D);if((
B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.AB9={Am:null,Init:function(aArg){var B;A.zX([this,this.Eo],[B=A._GetAutoObject(
A.Device.Helper).W,B.PA,B.DT],0);A.pe([this,this.Eo],this);},C7:function(E){C.BO.
C7.call(this,E);this.Am.L(E);},Eo:function(G){switch(A._GetAutoObject(A.Device.Helper
).W.AnimalType){case 0:this.Am.Ax(A.aaL(A.ach.AB6));break;case 1:this.Am.Ax(A.aaL(
A.ach.ANS));break;case 2:this.Am.Ax(A.aaL(A.ach.ANU));break;default:A.ab5("%s%e"
,AX9,A._GetAutoObject(A.Device.Helper).W.AnimalType);}},_Init:function(aArg){C.BO.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.AB9;
this.Am.H(AHk);this.J(this.Am,0);this.Am.Ax(A.aaL(A.ach.AB6));this.Init(aArg);},
_Done:function(){this.__proto__=C.BO;this.Am._Done();C.BO._Done.call(this);},_ReInit:
function(){C.BO._ReInit.call(this);this.Am._ReInit();},_Mark:function(D){var B;C.
BO._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fl={BP:null,AwX:A.jV,C7:function(E){C.Jx.C7.call(
this,E);this.BP.L(E);},Kg:function(E){if(this.AwX===E)return;this.AwX=E;this.BP.
R(E);},_Init:function(aArg){C.Jx._Init.call(this,aArg);C.CP._Init.call(this.BP={
I:this},0);this.__proto__=C.Fl;this.BP.AW(0x34);this.BP.H(Axy);this.BP.A2(0x11);
this.BP.L(A.jb.Text);this.J(this.BP,0);this.BP.S(A.aaL(A.fl.Ah));this.BP.A5(A.aaL(
A.fl.Ak));this.BP.CC(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.Jx;this.
BP._Done();C.Jx._Done.call(this);},_ReInit:function(){C.Jx._ReInit.call(this);this.
BP._ReInit();this.BP.S(A.aaL(A.fl.Ah));this.BP.A5(A.aaL(A.fl.Ak));this.BP.CC(A.aaL(
A.fl.By));},_Mark:function(D){var B;C.Jx._Mark.call(this,D);if((B=this.BP)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
ANd={V7:function(G){this.AfV();this.A2X(A.aaR(A.acf.BgK),[this,this.Bli],A._GetAutoObject(
A.Device.Device).Amn);A._GetAutoObject(C.BW).Gu();this.Ey(A.aaR(A.acf.ATA),[this
,this.AR6],5);this.Ey(A.aaR(A.acf.ATy),[this,this.AR5],7);this.Ey(A.aaR(A.acf.Ahc
),[this,this.Aj7],2);this.Ey(A.aaR(A.acf.Adj),[this,this.AqY],1);this.Ey(A.aaR(A.
acf.AiK),[this,this.Am2],0);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Qk(
A.aaR(A.acf.Adf)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},Du:
function(G){},AaQ:function(){return C.AA0;},AaR:function(){return C.ACe;},QS:function(
G){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).A42(
));},HI:function(G){C.EP.HI.call(this,G);if(this.AjM()===false){this.N.Cm(A.aaL(
A.ach.Aa1));this.N.Cg=[this,this.A4v];this.N.FA(A.jV);}this.N.Oz(false);this.N.OA(
false);},AfH:function(){A._GetAutoObject(C.AY).B1(48);},AfG:function(){A._GetAutoObject(
C.AY).B1(49);},Bli:function(G){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(
A.Device.Device).AvW(!A._GetAutoObject(A.Device.Device).Amn);this.AnC(this);},AnC:
function(G){var Bc=A._GetAutoObject(A.Device.Device).Aq.Filter.Gy();var Ay=Bc.DX(
30,3);if(!!Ay)Bc.QQ(Ay);if(A._GetAutoObject(A.Device.Device).Amn){var Azb=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A0Q=A._GetAutoObject(A.Device.Helper).Dy()-
21600;Azb.Initialize(30,3,A0Q,true);Bc.CZ(Azb);}A._GetAutoObject(A.Device.Device
).Aq.Bm(Bc);},_Init:function(aArg){C.EP._Init.call(this,aArg);this.__proto__=C.ANd;
var B;this.Dr(C.ANN);this.Dq(A.aaR(A.acf.A6j));this.Aj6([B=A._GetAutoObject(A.Device.
Device),B.A6U,B.A_5]);},_ReInit:function(){C.EP._ReInit.call(this);this.Dq(A.aaR(
A.acf.A6j));},_className:"Application::FreshCowListScreen"};C.ANc={_Init:function(
aArg){C.IS._Init.call(this,aArg);this.__proto__=C.ANc;this.K8.Ar(false);this.K8.
Aj(false);this.K8.Y(false);this.Je.Ar(false);this.Je.Aj(false);this.Je.Y(false);
},_className:"Application::FreshCowListFilterScreen"};C.ANb={_Init:function(aArg
){C.Gw._Init.call(this,aArg);this.__proto__=C.ANb;this.N.BU(A.aaR(A.acf.A3v));},
_ReInit:function(){C.Gw._ReInit.call(this);this.N.BU(A.aaR(A.acf.A3v));},_className:
"Application::FreshCowListActionsScreen"};C.ANN={Eo:function(G){C.J9.Eo.call(this
,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter).Af1(7));},_Init:function(aArg
){C.J9._Init.call(this,aArg);this.__proto__=C.ANN;},_className:"Application::HeaderFreshCowListFilter"
};C.ACe={Jl:null,DQ:null,_Init:function(aArg){C.Dv._Init.call(this,aArg);C.CP._Init.
call(this.Jl={I:this},0);C.CP._Init.call(this.DQ={I:this},0);this.__proto__=C.ACe;
this.A7W(1);this.Jl.H(Bn4);this.Jl.R((A.aaR(A.acf.Calving)+ZH)+A.aaR(A.acf.A9C));
this.Jl.L(A.jb.Text);this.DQ.H(Bn5);this.DQ.R(A.aaR(A.acf.ACS));this.DQ.L(A.jb.Text
);this.J(this.Jl,0);this.J(this.DQ,0);this.Jl.S(A.aaL(A.fl.Ak));this.Jl.A5(A.aaL(
A.fl.By));this.DQ.S(A.aaL(A.fl.Ak));this.DQ.A5(A.aaL(A.fl.By));},_Done:function(
){this.__proto__=C.Dv;this.Jl._Done();this.DQ._Done();C.Dv._Done.call(this);},_ReInit:
function(){C.Dv._ReInit.call(this);this.Jl._ReInit();this.DQ._ReInit();this.Jl.R((
A.aaR(A.acf.Calving)+ZH)+A.aaR(A.acf.A9C));this.DQ.R(A.aaR(A.acf.ACS));this.Jl.S(
A.aaL(A.fl.Ak));this.Jl.A5(A.aaL(A.fl.By));this.DQ.S(A.aaL(A.fl.Ak));this.DQ.A5(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.Dv._Mark.call(this,D);if((B=this.Jl).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.AA0={AFE:null,KE:null,Uf:null,AN:null,A9:null
,Init:function(aArg){},Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Uf.H([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A9.H([this.Uf.M[2]-1,0,this.Uf.M[2]+1,aSize[
1]]);this.KE.H([this.Uf.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(
this,Ae);this.KE.L(this.V.AP);this.Uf.C7(this.V.AP);},Cc:function(Ac){if(!this.AX
)return;this.Hr=Ac;if(!!this.AX){var KT=this.AX.CA(Ac,0);var Oe=this.AX.CA(Ac,1);
var A0P=this.AX.CA(Ac,29);var Ak4=this.AX.Hy(Ac,28);this.U(Oe.toFixed());this.KE.
R(A0P.toFixed());this.Uf.AbB(A._GetAutoObject(A.Device.Device).Ap_+1);this.Uf.Bk1(
Ak4);this.Uf.R(A._GetAutoObject(A.acj.KB).Ajj(Ak4));A._GetAutoObject(A.Device.Device
).Sq(Ac);this.Apt(KT);this.Awv();A._GetAutoObject(A.Device.Device).Bq.Bm(null);this.
An();}},A2B:function(G){this.Uf.AbD(this.AFE);},Awv:function(){var Gr=A._GetAutoObject(
A.Device.Device).Bq.Ch();this.AFE=A._NewObject(C.AiX,0);if(Gr>0){var P=Gr-1;while(
P>=0){var D1=A._GetAutoObject(A.Device.Device).Bq.Hy(P,6);this.AsQ(this.AFE,P,9,
D1);P=P-1;}}A.pe([this,this.A2B],this);},AsQ:function(AZi,Ac,AZh,P0){var AkY=A._GetAutoObject(
A.Device.Device).Bq.IU(Ac,AZh);if(!!AkY)AZi.Of(AkY,P0);},Apt:function(Acy){var Fk=
A._NewObject(A.Device.Filter,0);var Ayw=A._NewObject(A.Device.UInt32FilterCriterion
,0);Ayw.Initialize(6,2,A._GetAutoObject(A.Device.Helper).Ze(A._GetAutoObject(A.Device.
Device).Ap_)-1,true);Fk.CZ(Ayw);var HO=A._NewObject(A.Device.Int32FilterCriterion
,0);HO.Initialize(1,0,Acy,true);Fk.CZ(HO);A._GetAutoObject(A.Device.Device).Bq.Bm(
Fk);},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.Text._Init.call(this.
KE={I:this},0);C.ASv._Init.call(this.Uf={I:this},0);A.acg.AI._Init.call(this.AN={
I:this},0);A.acg.AI._Init.call(this.A9={I:this},0);this.__proto__=C.AA0;this.AN.
L(A.jb.Bb);this.A9.L(A.jb.Bb);this.J(this.KE,0);this.J(this.Uf,0);this.J(this.AN
,0);this.J(this.A9,0);this.KE.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.KE._Done();this.Uf._Done();this.AN._Done();this.A9._Done(
);C.Ba._Done.call(this);},_ReInit:function(){C.Ba._ReInit.call(this);this.KE._ReInit(
);this.Uf._ReInit();this.AN._ReInit();this.A9._ReInit();this.KE.S(A.aaL(A.fl.Ah)
);},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AFE)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uf
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.ASv={ATb:0,Init:function(aArg){},ANk:function(){return A._GetAutoObject(A.Device.
Helper).ApL(this.ATb);},ANm:function(){return this.ANk()+(this.Ml*86400);},Bk1:function(
E){if(this.ATb===E)return;this.ATb=E;A.pe([this,this.Wd],this);},_Init:function(
aArg){C.Ag2._Init.call(this,aArg);this.__proto__=C.ASv;this.Bb.H(Bn6);this.BkY(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Do:function(){if(this.K&&this.K.Do)return this.K.
Do.apply(this,arguments);else return C.FactoryResetScope.Brz.apply(this,arguments
);},Brz:function(){return 2;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.FactoryResetScopeToString.BX(this.C9(aIndex));},_Init:function(aArg
){C.C3._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.Cv.
Set(0,0);this.Cv.Set(1,1);var Lp=this._variants();if(Lp){this.K={};Lp._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.C3;this.FactoryResetScopeToString._Done();C.C3._Done.call(this);},_ReInit:function(
){C.C3._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.C3._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acr.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Ee:function(G){if(
this.A0E){A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(A.Device.Device
).Aq);A._GetAutoObject(A.Device.Device).A6(67,true,A._GetAutoObject(A.Device.Helper
).W.VisualId.toFixed(),0,null);}C.SetTransponderScreen.Ee.call(this,G);},_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;
},_className:"Application::SetSaveTransponderScreen"};C.AQF={V7:function(G){this.
AfV();this.Ey(A.aaR(A.acf.Arx),[this,this.Ard],3);this.Ey(A.aaR(A.acf.Ahc),[this
,this.Aj7],2);this.Ey(A.aaR(A.acf.Adj),[this,this.AqY],1);this.Ey(A.aaR(A.acf.LinkTransponder
),[this,this.ARI],8);this.Ey(A.aaR(A.acf.AiK),[this,this.Am2],0);this.Ey(A.aaR(A.
acf.O5),[this,this.Abv],9);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Qk(
A.aaR(A.acf.Adf)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},Du:
function(G){},AaQ:function(){return C.Ai5;},AaR:function(){return C.Ajq;},QS:function(
G){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).ANp(
));},HI:function(G){C.EP.HI.call(this,G);if(this.AjM()===false){this.N.Cm(A.aaL(
A.ach.AuT));this.N.Cg=[this,this.AMu];this.N.FA(A.jV);}this.N.Oz(false);this.N.OA(
false);},AfH:function(){A._GetAutoObject(C.AY).B1(52);},AfG:function(){A._GetAutoObject(
C.AY).B1(53);},_Init:function(aArg){C.EP._Init.call(this,aArg);this.__proto__=C.
AQF;var B;this.Dr(C.AB_);this.Dq(A.aaR(A.acf.A6f));this.Aj6([B=A._GetAutoObject(
A.Device.Device),B.AQ8,B.AYw]);},_ReInit:function(){C.EP._ReInit.call(this);this.
Dq(A.aaR(A.acf.A6f));},_className:"Application::NoTransponderListScreen"};C.AQE={
_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AQE;this.KM.Ar(
false);this.KM.Aj(false);this.KM.Y(false);},_className:"Application::NoTransponderListFilterScreen"
};C.AQD={_Init:function(aArg){C.Gw._Init.call(this,aArg);this.__proto__=C.AQD;this.
N.BU(A.aaR(A.acf.A3B));},_ReInit:function(){C.Gw._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A3B));},_className:"Application::NoTransponderListActionsScreen"};C.AB_={
Eo:function(G){C.J9.Eo.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter
).Af1(8));},_Init:function(aArg){C.J9._Init.call(this,aArg);this.__proto__=C.AB_;
},_className:"Application::HeaderNoTransponderListFilter"};C.AAH={At_:null,Gg:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.At_.BX(aIndex);},_Init:
function(aArg){C.FS._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.At_={I:this},0);this.__proto__=C.AAH;},_Done:function(){this.__proto__=
C.FS;this.At_._Done();C.FS._Done.call(this);},_ReInit:function(){C.FS._ReInit.call(
this);this.At_._ReInit();},_Mark:function(D){var B;C.FS._Mark.call(this,D);if((B=
this.At_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AKF={Ci:null,Adq:null,Init:function(aArg){this.A8(this.Ci);},KG:function(){if(
!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cw=[this,this.Xa];this.Bw.Cg=null;
this.Bw.Cb=[this,this.A1o];this.Bw.BU(A.jV);this.Bw.Cm(null);this.Bw.CS(A.aaL(A.
ach.AdY));}return this.Bw;},Azr:function(G){var Aa=(C.AiN.isPrototypeOf(G)?G:null
);if(Aa===this.Ci)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Adq)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A93);},_Init:function(aArg){C.Fg._Init.call(this,aArg);C.AiN._Init.call(this.
Ci={I:this},0);C.AiN._Init.call(this.Adq={I:this},0);this.__proto__=C.AKF;this.H(
Q5);this.Text.R(A.aaR(A.acf.ActionSettings));this.Ci.H(KP);this.Ci.U(A.aaR(A.acf.
AC4));this.Adq.H(Q6);this.Adq.U(A.aaR(A.acf.O5));this.J(this.Ci,0);this.J(this.Adq
,0);this.Text.S(A.aaL(A.fl.Ak));this.Ci.AQ=[this,this.Azr];this.Adq.AQ=[this,this.
Azr];this.Init(aArg);},_Done:function(){this.__proto__=C.Fg;this.Ci._Done();this.
Adq._Done();C.Fg._Done.call(this);},_ReInit:function(){C.Fg._ReInit.call(this);this.
Ci._ReInit();this.Adq._ReInit();this.Text.R(A.aaR(A.acf.ActionSettings));this.Ci.
U(A.aaR(A.acf.AC4));this.Adq.U(A.aaR(A.acf.O5));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fg._Mark.call(this,D);if((B=this.Ci)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Adq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BCo={Undefined:0,BCm:1,BCn:2,IdScanned:3,BBn:4,BAn:5,BA9:6};C.AKR={A9n:function(
){A._GetAutoObject(A.Device.Device).A6(35,true,A._GetAutoObject(A.Device.Helper).
W.VisualId.toFixed(),2000,[this,this.BcV]);},_Init:function(aArg){C.At0._Init.call(
this,aArg);this.__proto__=C.AKR;this.FS.Au(1);this.ARO(true);},_className:"Application::AnimalActionPerishedScreen"
};C.AdT={Vq:null,Vr:null,Vs:null,Ago:null,Agp:null,Agq:null,Cw:null,Cg:null,Cb:null
,Anw:A.jV,Anx:A.jV,Any:A.jV,Aqm:0,Aqn:0,Aqo:0,AgI:0,Y4:false,Y3:false,ArD:false,
ArT:false,ArS:false,Ai3:function(E5){this.Cw=E5.Cw;this.Cg=E5.Cg;this.Cb=E5.Cb;this.
Anw=E5.Anw;this.Anx=E5.Anx;this.Any=E5.Any;this.AgI=E5.AgI;this.Vq=E5.Vq;this.Vr=
E5.Vr;this.Vs=E5.Vs;this.Ago=E5.Ago;this.Agp=E5.Agp;this.Agq=E5.Agq;this.ArS=E5.
ArS;this.ArT=E5.ArT;this.ArD=E5.ArD;this.Y3=E5.Y3;this.Y4=E5.Y4;this.Aqm=E5.Aqm;
this.Aqn=E5.Aqn;this.Aqo=E5.Aqo;},Akj:function(E5){E5.Cw=this.Cw;E5.Cg=this.Cg;E5.
Cb=this.Cb;E5.Hm(this.Anw);E5.FA(this.Anx);E5.BU(this.Any);E5.AD4(this.AgI);E5.ADW(
this.Vq);E5.Aq5(this.Vr);E5.Am6(this.Vs);E5.CS(this.Ago);E5.Cm(this.Agp);E5.C2(this.
Agq);E5.Oz(this.ArS);E5.OA(this.ArT);E5.ArD=this.ArD;E5.Y3=this.Y3;E5.Y4=this.Y4;
E5.Bkc(this.Aqm);E5.ARC(this.Aqn);E5.A77(this.Aqo);},_Init:function(aArg){this.__proto__=
C.AdT;this.Vq=A.aaL(A.fl.Ak);this.Vr=A.aaL(A.fl.Ak);this.Vs=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.Vq=A.aaL(
A.fl.Ak);this.Vr=A.aaL(A.fl.Ak);this.Vs=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.Vq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vr)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Vs)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ago)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agp)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Agq)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cw)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cg)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cb)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.ArP._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dr(C.AB8);},_className:"Application::NewAnimalSetTransponderScreen"};C.C4={AaA:null
,CountryToString:null,Do:function(){return 40;},C9:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lm(aIndex);},DP:function(A1){return A1;
},Hj:function(){return 39;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.
AaA)(F=this.AaA,F[2].call(F[0],E));},AZR:function(G){var F;if(!!this.AaA)this.Q=(
F=this.AaA,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_,this.Ca],0);},ADN:
function(E){if(A.aaZ(this.AaA,E))return;if(!!this.AaA)A.z$([this,this.AZR],this.
AaA,0);this.AaA=E;if(!!this.AaA)A.zX([this,this.AZR],this.AaA,0);A.pe([this,this.
AZR],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C4;},_Done:function(
){this.__proto__=C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.AaA)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OJ={AC:null,Q:null,Background:null,Ig:null,If:null,MR:
0,AK:0,Ga:0,FP:0,AfD:function(G){this.JY(this);},Bg:function(aSize){A.Core.O.Bg.
call(this,aSize);this.Background.H(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Ip=((Ae&0x40)===0x40);if(Ip){this.Background.
L(A.jb.AR);this.Ds(256);}else{this.Background.L(this.MR);this.Ds(256);}},AfC:function(
G){this.JT(this);},CK:function(E){if(this.AC===E)return;if(!!this.AC)A.z9([this,
this.A1J],this.AC,0);this.AC=E;if(!!E)A.zV([this,this.A1J],E,0);if(!!E)A.pe([this
,this.A1J],this);},C1:function(E){if(this.MR===E)return;this.MR=E;this.An();},JY:
function(G){var F;var BN=this.AK;this.Bx(this.AK+1);if(this.AK!==BN){if(!!this.Q&&
!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.C9(this.AK)));A.abo(this.Q,0);}},JT:function(
G){var F;var BN=this.AK;this.Bx(this.AK-1);if(this.AK!==BN){if(!!this.Q&&!!this.
AC)(F=this.Q,F[2].call(F[0],this.AC.C9(this.AK)));A.abo(this.Q,0);}},Bx:function(
E){if(E<this.Ga)E=this.FP;if(E>this.FP)E=this.Ga;if(this.AK===E)return;this.AK=E;
this.An();},Gk:function(E){if(this.Ga===E)return;this.Ga=E;this.An();},E1:function(
E){if(this.FP===E)return;this.FP=E;this.An();},Dc:function(G){var F;if(!!this.Q)
this.Bx(this.AC.DP((F=this.Q,F[1].call(F[0]))));},Au:function(E){if(A.aaZ(this.Q
,E))return;if(!!this.Q)A.z$([this,this.Dc],this.Q,0);this.Q=E;if(!!E)A.zX([this,
this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this);},A1J:function(G){var F;if(!!this.
AC){this.Gk(0);this.E1(this.AC.Hj());if(!!this.Q)this.Bx(this.AC.DP((F=this.Q,F[
1].call(F[0]))));this.An();}},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AI._Init.call(this.Background={I:this},0);A.Core.BJ._Init.call(this.Ig={
I:this},0);A.Core.BJ._Init.call(this.If={I:this},0);this.__proto__=C.OJ;this.H(A94
);this.Background.H(AsC);this.Ig.Filter=4;this.If.Filter=5;this.MR=A.jb.CE;this.
J(this.Background,0);this.Ig.BK=[this,this.AfD];this.Ig.DS=[this,this.AfD];this.
If.BK=[this,this.AfC];this.If.DS=[this,this.AfC];},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Ig._Done();this.If._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);this.Ig._ReInit();this.If._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.Rx={AZJ:A.jV,Ai:function(
Ae){C.Fl.Ai.call(this,Ae);this.U(A.aaR(A.acf.A3P));this.Kg(this.AZJ);},Cc:function(
G){C.Fl.Cc.call(this,G);var Ak4=A._GetAutoObject(A.Device.Helper).W.DateOfLastCalving;
if(!Ak4)this.AZJ=WH;else this.AZJ=A._GetAutoObject(A.acj.KB).Ajj(Ak4);this.An();
},_Init:function(aArg){C.Fl._Init.call(this,aArg);this.__proto__=C.Rx;},_className:
"Application::AnimalInfoItemCalvingDate"};C.Ry={A0O:0,Ai:function(Ae){C.Fl.Ai.call(
this,Ae);this.U(A.aaR(A.acf.APT));if(this.A0O>0)this.Kg(this.A0O.toFixed());else
this.Kg(A.aaR(A.acf.Unknown));},Cc:function(G){C.Fl.Cc.call(this,G);this.A0O=A._GetAutoObject(
A.Device.Helper).W.LactationNumber;this.An();},_Init:function(aArg){C.Fl._Init.call(
this,aArg);this.__proto__=C.Ry;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Do:function(){return 5;
},C9:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gg:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
BX(aIndex);},DP:function(A1){return A1;},Hj:function(){return 4;},Au:function(E){
C.AC.Au.call(this,E);if(!!this.Animal)this.Animal.Aj0(E);},AZ_:function(G){if(!!
this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.abo([this,this.B_,
this.Ca],0);},LT:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.AZ_],[B=this.Animal,B.AQZ,B.Aj0],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.AZ_],[B=this.Animal,B.AQZ,B.Aj0],0);A.pe([this,this.AZ_],this);
},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Do:function(){return 99;},C9:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.BX(aIndex);},DP:function(A1){return A1;
},Hj:function(){return 98;},Au:function(E){C.AC.Au.call(this,E);if(!!this.Animal
)this.Animal.NM(E);},AZH:function(G){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.abo([this,this.B_,this.Ca],0);},LT:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.AZH],[B=this.Animal,B.Avn,B.NM],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.AZH],[B=this.Animal,B.Avn,B.NM],0);A.pe([
this,this.AZH],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AQb={VG:null,Yg:null,Ad_:null,Init:function(
aArg){this.A8(this.VG);},AcW:function(G){var Aa=(C.Ci.isPrototypeOf(G)?G:null);if(
!Aa)return;if(Aa===this.Yg)this.Bvc();else if(Aa===this.VG)this.BxP(this);else throw new
Error(Axi);A._GetAutoObject(A.Device.Device).Cj(0);},BxP:function(G){var B;var F;
var UW=(C.AlY.isPrototypeOf(B=(F=A._GetAutoObject(C.AY).Q,F[1].call(F[0])))?B:null
);if(!UW){A.ab5("%s",Bn7);return;}UW.AJj(this);},Bvc:function(){A._GetAutoObject(
A.Device.Helper).W.AFm(true);A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).W.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mf._Init.call(this.VG={I:this},0);C.Mf._Init.call(this.Yg={
I:this},0);C.Vk._Init.call(this.Ad_={I:this},0);this.__proto__=C.AQb;var B;this.
H(Ae7);this.VG.H(Q6);this.VG.Ar(true);this.VG.U(A.aaR(A.acf.A85));this.VG.Bf(true
);this.Yg.H(KP);this.Yg.Ar(true);this.Yg.U(A.aaR(A.acf.A23));this.Yg.Bf(true);this.
Ad_.H(BC);this.Ad_.U(A.aaR(A.acf.ABI));this.Ad_.Bf(true);this.J(this.VG,0);this.
J(this.Yg,0);this.J(this.Ad_,0);this.VG.AQ=[this,this.AcW];this.Yg.AQ=[this,this.
AcW];this.Ad_.ARs([B=A._GetAutoObject(A.Device.Device),B.AqM,B.AsE]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.VG._Done();this.Yg._Done(
);this.Ad_._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.VG._ReInit();this.Yg._ReInit();this.Ad_._ReInit();this.VG.
U(A.aaR(A.acf.A85));this.Yg.U(A.aaR(A.acf.A23));this.Ad_.U(A.aaR(A.acf.ABI));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad_)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.Vk={
Ai:function(Ae){C.TR.Ai.call(this,Ae);var FE=A.jb.CE;var GG=A.jb.Text;if(this.G_
){FE=A.jb.Text;GG=A.jb.Bh;}if(!this.Ly){this.Background.L(FE);this.V.L(A.jb.Amz);
}else if(this.Qb){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else if(this.Kv){
this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.
L(GG);}if(this.Al8){this.Md.Ct(1);this.Md.L(A.jb.HZ);}else{this.Md.Ct(0);this.Md.
L(A.jb.Bh);}},_Init:function(aArg){C.TR._Init.call(this,aArg);this.__proto__=C.Vk;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.AC3={C5:null,FN:null,Fw:
null,AjN:null,QE:null,EA:null,AQt:Lo,Bg:function(aSize){C.Ci.Bg.call(this,aSize);
var FE=A.jb.CE;var GG=A.jb.Text;if(this.G_){FE=A.jb.Bh;GG=A.jb.Text;}this.Background.
L(FE);this.V.L(GG);this.Background.H(A.abK(this.Background.M,aSize));this.V.H([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CL;C.Ci.Ai.call(this
,Ae);this.AjN.L(this.V.AP);this.QE.L(this.V.AP);this.QE.R(Bn8);this.U(((this.AQt+
A.aaR(A.acf.Colon))+CO)+A._GetAutoObject(A.Device.Helper).Aky(840003123456789).toFixed(
));if(!!this.FN&&!!this.Fw){var A0T=this.QE.AeD([(this.QE.String.length-(F=this.
Fw,F[1].call(F[0])))-(CL=this.FN,CL[1].call(CL[0])),0]);var A19=this.QE.AeD([this.
QE.String.length-(F=this.Fw,F[1].call(F[0])),0]);var AAc=this.QE.Da();this.EA.H([
A0T[0]-1,AAc[1],A19[0]+1,AAc[3]]);}else this.EA.H(this.QE.Da());},Dz:function(E){
if(this.C5===E)return;this.C5=E;this.AjN.Ax(E);},PB:function(E){if(A.aaZ(this.FN
,E))return;if(!!this.FN)A.z$([this,this.Z6],this.FN,0);this.FN=E;if(!!E)A.zX([this
,this.Z6],E,0);if(!!E)A.pe([this,this.Z6],this);},QM:function(E){if(A.aaZ(this.Fw
,E))return;if(!!this.Fw)A.z$([this,this.Z7],this.Fw,0);this.Fw=E;if(!!E)A.zX([this
,this.Z7],E,0);if(!!E)A.pe([this,this.Z7],this);},Z7:function(G){this.An();},Z6:
function(G){this.An();},AEi:function(E){if(this.AQt===E)return;this.AQt=E;this.An(
);},_Init:function(aArg){C.Ci._Init.call(this,aArg);A.acg.Am._Init.call(this.AjN={
I:this},0);A.acg.Text._Init.call(this.QE={I:this},0);A.acg.Cz._Init.call(this.EA={
I:this},0);this.__proto__=C.AC3;this.H(JN);this.V.A2(0x11);this.AjN.H(Q4);this.QE.
H(Bn9);this.EA.H(Bn_);this.EA.NO(2);this.EA.L(A.jb.EU);this.J(this.AjN,0);this.J(
this.QE,0);this.J(this.EA,0);this.QE.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Ci;this.AjN._Done();this.QE._Done();this.EA._Done();C.Ci._Done.call(this);},_ReInit:
function(){C.Ci._ReInit.call(this);this.AjN._ReInit();this.QE._ReInit();this.EA.
_ReInit();this.QE.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ci._Mark.call(this
,D);if((B=this.C5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Fw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AjN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.EA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemIdPreview"
};C.AnimalSingleInfoScreen={HI:function(G){C.Tg.HI.call(this,G);if(this.Ajn)this.
N.Cm(A.aaL(A.ach.AD));else this.N.Cm(A.aaL(A.ach.ALT));this.N.C2(A.aaL(A.ach.Options
));this.N.FA(A.jV);this.N.BU(A.jV);this.N.Cg=[this,this.A8O];this.N.Cb=[this,this.
V7];this.N.Aq5(A.aaL(A.fl.Ak));this.N.Am6(A.aaL(A.fl.Ak));},MN:function(G){this.
BcA(this);},N_:function(G){this.BxK(this);},AfU:function(UE,UF,Buh){if(A._GetAutoObject(
A.Device.Device).D2===Buh)A._GetAutoObject(C.BW).AiO(UE,UF,true);else A._GetAutoObject(
C.BW).AiO(UE,UF,false);},V7:function(G){if((A._GetAutoObject(A.Device.Device).D2===
3)&&!this.Ajn){A._GetAutoObject(C.BW).Tc(A.aaR(A.acf.Bfw),[this,this.Ble]);A._GetAutoObject(
C.BW).Gu();}this.AfU(A.aaR(A.acf.Rating),[this,this.AR$],3);this.AfU(A.aaR(A.acf.
AeW),[this,this.ASb],2);this.AfU(A.aaR(A.acf.Temperature),[this,this.ASa],1);this.
AfU(A.aaR(A.acf.Adj),[this,this.AR_],0);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(
C.BW).Qk(A.aaR(A.acf.A4l));A._GetAutoObject(A.Device.Device).Cj(6);},_Init:function(
aArg){C.Tg._Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;},_className:
"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={U7:null,Init:function(
aArg){var B;A.zX([this,this.Afz],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fx,B.
FB],0);A.pe([this,this.Bee],this);A.pe([this,this.QS],this);},CJ:function(G){C.Tg.
CJ.call(this,G);A.pe([this,this.Bek],this);},AFs:function(G){C.Tg.AFs.call(this,
G);if(!!this.K_)this.Ag5(this.K_,this.U7);},HI:function(G){C.Tg.HI.call(this,G);
this.N.Cm(A.aaL(A.ach.APt));this.N.C2(A.aaL(A.ach.APu));if(this.Ajn)this.N.ARC(0
);else this.N.ARC(1);this.N.A77(A._GetAutoObject(A.Device.Converter).BeI(A._GetAutoObject(
A.Device.Device).D2));this.N.FA(A.jV);this.N.BU(A.jV);this.N.Cg=[this,this.Bi6];
this.N.Cb=[this,this.Blg];this.N.Aq5(A.aaL(A.fl.Ak));this.N.Am6(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).Aq.Qr()){this.N.IW.Ds(100);this.N.Cg=null;
}else this.N.IW.Ds(255);if(!A._GetAutoObject(A.Device.Device).Aq.Ch()){this.N.K9.
Ds(100);this.N.Cb=null;}else this.N.K9.Ds(255);if(A._GetAutoObject(A.Device.Device
).Aq.Ch()<=1){this.N.TF.Ds(100);this.N.TG.Ds(100);}else{this.N.TF.Ds(255);this.N.
TG.Ds(255);}},MN:function(G){if(A._GetAutoObject(A.Device.Device).Aq.Ch()<=1)return;
var Lu=A._GetAutoObject(A.Device.Helper).W.CF;Lu=Lu+1;if(Lu>=A._GetAutoObject(A.
Device.Device).Aq.Ch())Lu=0;A._GetAutoObject(A.Device.Helper).HD(Lu);},N_:function(
G){if(A._GetAutoObject(A.Device.Device).Aq.Ch()<=1)return;var Lu=A._GetAutoObject(
A.Device.Helper).W.CF;Lu=Lu-1;if(Lu<0)Lu=A._GetAutoObject(A.Device.Device).Aq.Ch(
)-1;A._GetAutoObject(A.Device.Helper).HD(Lu);},Aic:function(G){if(A._GetAutoObject(
A.Device.Helper).W.Id>0)A._GetAutoObject(C.AY).B1(57);},Bi6:function(G){A._GetAutoObject(
A.Device.Device).Cj(10);},Blg:function(G){this.BcA(this);},QS:function(G){A._GetAutoObject(
A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).MZ());A.pe([this,this.Bek
],this);},Bee:function(G){if(!A._GetAutoObject(A.Device.Device).Aq.Ch()){this.U7.
Y(true);if(!A._GetAutoObject(A.Device.Device).Aq.Qr()||!A._GetAutoObject(A.Device.
Device).Aq.Filter)this.U7.R(A.aaR(A.acf.ADa));else if(!A._GetAutoObject(A.Device.
Device).Aq.Filter.DX(1,4)){if(A._GetAutoObject(A.Device.Helper).ABT(A._GetAutoObject(
A.Device.Device).Aq.Filter)===1)this.U7.R(A.aaR(A.acf.AMF));else this.U7.R(A.aaR(
A.acf.AME));}else this.U7.R(A.aaR(A.acf.AQB));}else this.U7.Y(false);},Bek:function(
G){var ByI=A._GetAutoObject(A.Device.Helper).W.Id;var Byu=A._GetAutoObject(A.Device.
Device).Aq.K7(0,ByI);if(!A._GetAutoObject(A.Device.Device).Aq.Ch())A._GetAutoObject(
A.Device.Helper).HD(-1);else if(Byu<0)A._GetAutoObject(A.Device.Helper).HD(0);},
Afz:function(G){this.Bee(this);this.HI(this);},_Init:function(aArg){C.Tg._Init.call(
this,aArg);C.Akk._Init.call(this.U7={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dr(C.AN5);this.U7.H(E4);this.J(this.U7,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Tg;this.U7._Done();C.Tg._Done.call(this);},_ReInit:function(){
C.Tg._ReInit.call(this);this.U7._ReInit();},_Mark:function(D){var B;C.Tg._Mark.call(
this,D);if((B=this.U7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AK6={Qz:null,VH:null,Aa8:null,Yj:null,Init:function(aArg){var B;var F;this.A8(
this.Qz);if(!!A._GetAutoObject(C.AY).Q){var UW=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.AY).Q,F[1].call(F[0])))?B:null);if(!UW){A.ab5("%s",AX_);
return;}else{if(UW.Ajn)this.Qz.U(A.aaR(A.acf.Be));else this.Qz.U(A.aaR(A.acf.EI)
);var Ayr=A._GetAutoObject(A.Device.Device).Aq.Filter;if(!Ayr||A._GetAutoObject(
A.Device.Helper).Aqt(Ayr))this.Yj.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).Aq.Ch()){this.VH.Ar(false);this.Qz.Ar(false);}}}},AcW:function(G){var Aa=(C.Ci.
isPrototypeOf(G)?G:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Cj(0);if(
Aa===this.Aa8)A._GetAutoObject(C.AY).B1(9);else if(Aa===this.VH)A._GetAutoObject(
A.Device.Device).Cj(7);else if(Aa===this.Qz)this.By6();else if(Aa===this.Yj)this.
AZP();else throw new Error(Axi);},By6:function(){var B;var F;var UW=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.AY).Q,F[1].call(F[0])))?B:null);if(!UW){A.
ab5("%s",AX_);return;}UW.A8O(this);},AZP:function(){var B;var F;var UW=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.AY).Q,F[1].call(F[0])))?B:null);if(!UW){A.
ab5("%s",AX_);return;}UW.QS(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mf._Init.call(this.Qz={I:this},0);C.Mf._Init.call(this.VH={I:this},
0);C.Mf._Init.call(this.Aa8={I:this},0);C.Mf._Init.call(this.Yj={I:this},0);this.
__proto__=C.AK6;this.H(Ae6);this.Qz.H(WJ);this.Qz.Ar(true);this.Qz.U(A.aaR(A.acf.
EI));this.Qz.Bf(true);this.VH.H(Q6);this.VH.Ar(true);this.VH.U(A.aaR(A.acf.ASQ));
this.VH.Bf(true);this.Aa8.H(KP);this.Aa8.U(A.aaR(A.acf.Akm));this.Aa8.Bf(true);this.
Yj.H(BC);this.Yj.U(A.aaR(A.acf.AA4));this.Yj.Bf(true);this.J(this.Qz,0);this.J(this.
VH,0);this.J(this.Aa8,0);this.J(this.Yj,0);this.Qz.AQ=[this,this.AcW];this.VH.AQ=[
this,this.AcW];this.Aa8.AQ=[this,this.AcW];this.Yj.AQ=[this,this.AcW];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Qz._Done();this.VH._Done(
);this.Aa8._Done();this.Yj._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.Qz._ReInit();this.VH._ReInit();this.Aa8.
_ReInit();this.Yj._ReInit();this.Qz.U(A.aaR(A.acf.EI));this.VH.U(A.aaR(A.acf.ASQ
));this.Aa8.U(A.aaR(A.acf.Akm));this.Yj.U(A.aaR(A.acf.AA4));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Qz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.MultiInfoActionsScreen={_Init:function(aArg){C.Gw._Init.call(this,aArg);this.
__proto__=C.MultiInfoActionsScreen;this.N.BU(A.aaR(A.acf.A3A));},_ReInit:function(
){C.Gw._ReInit.call(this);this.N.BU(A.aaR(A.acf.A3A));},_className:"Application::MultiInfoActionsScreen"
};C.IX={TH:null,Eq:null,XV:null,Background:null,Am:null,Ig:null,If:null,MR:0,AK:
0,Ai:function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var G2=((Ae&0x10)===0x10
);var Ip=((Ae&0x40)===0x40);if(Ip){this.Background.L(A.jb.AR);this.Am.L(A.jb.Bh);
this.Ds(256);}else if(G2){this.Background.L(this.MR);this.Am.L(A.jb.Text);this.Ds(
256);}else{this.Background.L(this.MR);this.Am.L(A.jb.Text);this.Ds(128);}if(!this.
AK)this.Am.Ct(0);else if(this.AK>0){if(A.aaZ(this.TH,[B=A._GetAutoObject(A.Device.
Device),B.Avw,B.AxM]))this.Am.Ct(2);else if(A.aaZ(this.TH,[B=A._GetAutoObject(A.
Device.Device),B.Avv,B.AxL]))this.Am.Ct(3);else if(!!this.XV&&((F=this.XV,F[1].call(
F[0]))===1))this.Am.Ct(1);else this.Am.Ct(0);}else if(A.aaZ(this.TH,[B=A._GetAutoObject(
A.Device.Device),B.Avw,B.AxM]))this.Am.Ct(6);else if(A.aaZ(this.TH,[B=A._GetAutoObject(
A.Device.Device),B.Avv,B.AxL]))this.Am.Ct(7);else if(!!this.XV&&((F=this.XV,F[1].
call(F[0]))===1))this.Am.Ct(5);else this.Am.Ct(4);},AfD:function(G){this.JY(this
);},AfC:function(G){this.JT(this);},JY:function(G){this.Bx(1);},JT:function(G){this.
Bx(-1);},Bkm:function(E){if(A.aaZ(this.TH,E))return;if(!!this.TH)A.z$([this,this.
A1u],this.TH,0);this.TH=E;if(!!E)A.zX([this,this.A1u],this.TH,0);A.pe([this,this.
A1u],this);},T0:function(E){if(A.aaZ(this.Eq,E))return;if(!!this.Eq)A.z$([this,this.
AfB],this.Eq,0);this.Eq=E;if(!!E)A.zX([this,this.AfB],this.Eq,0);if(!!E)A.pe([this
,this.AfB],this);},A1u:function(G){var F;if(!!this.TH)this.Bx((F=this.TH,F[1].call(
F[0])));},AfB:function(G){A.pe([this,this.Bze],this);},C1:function(E){if(this.MR===
E)return;this.MR=E;this.An();},Bx:function(E){var F;if(this.AK===E)return;this.AK=
E;if(!!this.TH)(F=this.TH,F[2].call(F[0],E));this.An();A.abo([this,this.TX,this.
Bx],0);},A7X:function(E){if(A.aaZ(this.XV,E))return;if(!!this.XV)A.z$([this,this.
AfB],this.XV,0);this.XV=E;if(!!E)A.zX([this,this.AfB],this.XV,0);if(!!E)A.pe([this
,this.AfB],this);},Bze:function(G){var F,CL;if(!this.XV||!this.Eq)return;this.Bkm(
A._GetAutoObject(A.Device.Helper).Ba9((F=this.XV,F[1].call(F[0])),(CL=this.Eq,CL[
1].call(CL[0]))));this.An();},TX:function(){return this.AK;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);
A.acg.Am._Init.call(this.Am={I:this},0);A.Core.BJ._Init.call(this.Ig={I:this},0);
A.Core.BJ._Init.call(this.If={I:this},0);this.__proto__=C.IX;this.H(AHl);this.Background.
AW(0x3F);this.Background.H(AHl);this.Am.AW(0x3C);this.Am.H(AHl);this.Ig.Filter=4;
this.If.Filter=5;this.MR=A.jb.CE;this.J(this.Background,0);this.J(this.Am,0);this.
Am.Ax(A.aaL(A.ach.ATd));this.Ig.BK=[this,this.AfD];this.If.BK=[this,this.AfC];},
_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.Am._Done();
this.Ig._Done();this.If._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Background._ReInit();this.Am._ReInit();this.Ig._ReInit(
);this.If._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.TH)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eq)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.If).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AKE={V7:function(G){var F;this.AfV();if(!!A._GetAutoObject(A.Device.Helper).
ANi((F=this.EJ,F[1].call(F[0])),0,true))this.A2X(A.aaR(A.acf.A5f),[this,this.Blh
],A._GetAutoObject(A.Device.Device).AlU);else A._GetAutoObject(C.BW).Xm(A.aaR(A.
acf.A5f));A._GetAutoObject(C.BW).Gu();this.Ey(A.aaR(A.acf.LinkTransponder),[this
,this.ARI],8);this.Ey(A.aaR(A.acf.O5),[this,this.Abv],9);this.Ey(A.aaR(A.acf.Bn1
),[this,this.Bk9],10);this.Ey(A.aaR(A.acf.Arx),[this,this.Ard],3);this.Ey(A.aaR(
A.acf.Ahc),[this,this.Aj7],2);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).
Qk(A.aaR(A.acf.Adf)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);
},Du:function(G){},AaQ:function(){return C.Ai5;},AaR:function(){return C.Ajq;},QS:
function(G){var F;A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.
Helper).A4W((F=this.EJ,F[1].call(F[0]))));},HI:function(G){var F;C.EP.HI.call(this
,G);if(this.AjM()===false){this.N.Cm(A._GetAutoObject(A.Device.Converter).BeK((F=
this.EJ,F[1].call(F[0]))));this.N.Cg=[this,this.AHG];this.N.FA(A.jV);}this.N.Oz(
false);this.N.OA(false);},AfH:function(){A._GetAutoObject(C.AY).B1(59);},AfG:function(
){A._GetAutoObject(C.AY).B1(60);},A1z:function(G){C.EP.A1z.call(this,G);A.pe([this
,this.A$o],this);},Blh:function(G){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(
A.Device.Device).AvC(!A._GetAutoObject(A.Device.Device).AlU);this.AnC(this);},AnC:
function(G){var F;var Bc=A._GetAutoObject(A.Device.Device).Aq.Filter.Gy();A._GetAutoObject(
A.Device.Helper).BlN(Bc);if(A._GetAutoObject(A.Device.Device).AlU){var A0v=A._GetAutoObject(
A.Device.Helper).ANi((F=this.EJ,F[1].call(F[0])),21600,true);Bc.CZ(A0v);}A._GetAutoObject(
A.Device.Device).Aq.Bm(Bc);},_Init:function(aArg){C.EP._Init.call(this,aArg);this.
__proto__=C.AKE;var B;this.Dq(A.aaR(A.acf.Avj));this.Aj6([B=A._GetAutoObject(A.Device.
Device),B.A6y,B.A_O]);},_ReInit:function(){C.EP._ReInit.call(this);this.Dq(A.aaR(
A.acf.Avj));},_className:"Application::ActionListScreen"};C.AKD={_Init:function(
aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AKD;},_className:"Application::ActionListFilterScreen"
};C.AKC={_Init:function(aArg){C.Gw._Init.call(this,aArg);this.__proto__=C.AKC;this.
N.BU(A.aaR(A.acf.A3r));},_ReInit:function(){C.Gw._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A3r));},_className:"Application::ActionListActionsScreen"};C.AN5={IA:null
,IF:null,Bb:null,Mq:A.jV,Init:function(aArg){var B;A.zX([this,this.Nd],[B=A._GetAutoObject(
A.Device.Helper).W,B.A6$,B.A8q],0);A.zX([this,this.Nd],[B=A._GetAutoObject(A.Device.
Device).Aq,B.Fx,B.FB],0);},C7:function(E){C.Iy.C7.call(this,E);this.IF.L(E);},Eo:
function(G){C.Iy.Eo.call(this,G);var Ayr=A._GetAutoObject(A.Device.Device).Aq.Filter;
if(!Ayr||A._GetAutoObject(A.Device.Helper).Aqt(Ayr))this.IA.Y(false);else this.IA.
Y(true);if(A._GetAutoObject(A.Device.Helper).W.Aqd())this.Av8(((A._GetAutoObject(
A.Device.Helper).W.CF+1).toFixed()+A95)+A._GetAutoObject(A.Device.Device).Aq.Ch(
).toFixed());else this.Av8(A96);},Av8:function(E){if(this.Mq===E)return;this.Mq=
E;this.IF.R(E);},_Init:function(aArg){C.Iy._Init.call(this,aArg);A.acg.Am._Init.
call(this.IA={I:this},0);A.acg.Text._Init.call(this.IF={I:this},0);A.acg.DR._Init.
call(this.Bb={I:this},0);this.__proto__=C.AN5;this.HJ.H(Bn$);this.CX.H(Boa);this.
IA.H(Bob);this.IA.L(A.jb.Text);this.IF.H(A97);this.IF.HG(2);this.IF.KI(true);this.
IF.A2(0x12);this.IF.R(A98);this.Bb.DK(AxA);this.Bb.DY(Asz);this.Bb.L(A.jb.Bb);this.
J(this.IA,0);this.J(this.IF,0);this.J(this.Bb,0);this.IA.Ax(A.aaL(A.ach.Ad0));this.
IF.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Iy;this.
IA._Done();this.IF._Done();this.Bb._Done();C.Iy._Done.call(this);},_ReInit:function(
){C.Iy._ReInit.call(this);this.IA._ReInit();this.IF._ReInit();this.Bb._ReInit();
this.IF.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Iy._Mark.call(this,D);if((
B=this.IA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.Ar0={Text:null,Bg:function(aSize){C.OJ.Bg.call(this,aSize);this.Text.H(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OJ.Ai.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(WH);else this.Text.R(this.AC.Gg((F=this.Q,F[1].call(F[0]
))));var Ip=((Ae&0x40)===0x40);if(Ip)this.Text.L(A.jb.Bh);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OJ._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.Ar0;this.Text.R(Q7);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.OJ;this.Text._Done();C.OJ.
_Done.call(this);},_ReInit:function(){C.OJ._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.OJ._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Aqq={C5:null,Bg:function(aSize){C.OJ.Bg.call(this,aSize);this.C5.H(A.abK(this.
C5.M,aSize));},Ai:function(Ae){var B;var F;C.OJ.Ai.call(this,Ae);if(!this.AC||!this.
Q)this.C5.Ax(null);else{this.C5.Ax(this.AC.ABP(this.AC.DP((F=this.Q,F[1].call(F[
0])))));this.C5.Ct(this.AC.ABR(this.AC.DP((F=this.Q,F[1].call(F[0])))));}var Ip=((
Ae&0x40)===0x40);if(Ip)this.C5.L(A.jb.Bh);else this.C5.L(A.jb.Text);},_Init:function(
aArg){C.OJ._Init.call(this,aArg);A.acg.Am._Init.call(this.C5={I:this},0);this.__proto__=
C.Aqq;this.H(AHl);this.C5.H(A94);this.J(this.C5,0);},_Done:function(){this.__proto__=
C.OJ;this.C5._Done();C.OJ._Done.call(this);},_ReInit:function(){C.OJ._ReInit.call(
this);this.C5._ReInit();},_Mark:function(D){var B;C.OJ._Mark.call(this,D);if((B=
this.C5)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Aul={Vm:null,DirectionOfCountingToString:null,AdG:null,Do:function(){return 2;
},C9:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return-1;return aIndex;
},Gg:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return A.jV;return this.
DirectionOfCountingToString.BX(aIndex);},DP:function(A1){return A1;},Hj:function(
){return this.Do()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Vm)(F=
this.Vm,F[2].call(F[0],E));},ABP:function(aIndex){if((aIndex<0)||(aIndex>=this.Do(
)))return null;return this.AdG.Ar1(aIndex);},ABR:function(aIndex){if((aIndex<0)||(
aIndex>=this.Do()))return-1;return this.AdG.Ar2(aIndex);},AZ3:function(G){var F;
if(!!this.Vm)this.Q=(F=this.Vm,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.Ca],0);},Ael:function(E){if(A.aaZ(this.Vm,E))return;if(!!this.Vm)A.z$([this
,this.AZ3],this.Vm,0);this.Vm=E;if(!!this.Vm)A.zX([this,this.AZ3],this.Vm,0);A.pe([
this,this.AZ3],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.AdG._Init.call(this.AdG={I:this},0);this.__proto__=C.Aul;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.AdG._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.AdG._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Vm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdG)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AKY={Hg:null,Eq:null,AnimalIdGenerationMethodToString:
null,Adn:null,Do:function(){return 4;},C9:function(aIndex){var F;var A1=-1;if((aIndex<
0)||(aIndex>=this.Do()))return-1;switch(aIndex){case 0:A1=0;break;case 1:A1=1;break;
case 2:A1=this.Bwl((F=this.Eq,F[1].call(F[0])));break;case 3:A1=5;break;default:
throw new Error(Boc+aIndex.toFixed());}return A1;},Gg:function(aIndex){if((aIndex<
0)||(aIndex>=this.Do()))return A.jV;return this.AnimalIdGenerationMethodToString.
BX(this.C9(aIndex));},DP:function(A1){var aIndex=-1;switch(A1){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bod+A1.toFixed());}return aIndex;},Hj:function(){return this.
Do()-1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Hg)(F=this.Hg,F[2].
call(F[0],E));},ABP:function(aIndex){if((aIndex<0)||(aIndex>=this.Do()))return null;
return this.Adn.Ar1(this.C9(aIndex));},ABR:function(aIndex){if((aIndex<0)||(aIndex>=
this.Do()))return-1;return this.Adn.Ar2(this.C9(aIndex));},AZw:function(G){var F;
if(!!this.Hg)this.Q=(F=this.Hg,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_
,this.Ca],0);},Bjc:function(E){if(A.aaZ(this.Hg,E))return;if(!!this.Hg)A.z$([this
,this.AZw],this.Hg,0);this.Hg=E;if(!!this.Hg)A.zX([this,this.AZw],this.Hg,0);A.pe([
this,this.AZw],this);},T0:function(E){if(A.aaZ(this.Eq,E))return;if(!!this.Eq)A.
z$([this,this.AfB],this.Eq,0);this.Eq=E;if(!!this.Eq)A.zX([this,this.AfB],this.Eq
,0);A.pe([this,this.AfB],this);},AfB:function(G){A.pe([this,this.Bve],this);},Bwl:
function(LX){var Q9=0;switch(LX){case 0:Q9=2;break;case 1:Q9=3;break;case 2:Q9=4;
break;default:throw new Error(Boe+LX.toFixed());}return Q9;},Bve:function(G){var
Bb4=this.C9(this.DP(this.Q));if(this.Q!==Bb4)this.Au(Bb4);A.we(this,0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.Adn._Init.call(this.
Adn={I:this},0);this.__proto__=C.AKY;},_Done:function(){this.__proto__=C.AC;this.
AnimalIdGenerationMethodToString._Done();this.Adn._Done();C.AC._Done.call(this);
},_ReInit:function(){C.AC._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.Adn._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Hg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eq)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Adn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AFo={Fu:null,Aam:null,Q:null,Fb:null,E0:null,Hw:null,V1:null,A0:null,HS:null
,J6:null,A3:0,AK:0,AkW:0,Init:function(aArg){var B;A.zX([this,this.Bcg],[B=A._GetAutoObject(
A.Device.Device),B.AmV,B.AnZ],0);},Ai:function(Ae){C.D8.Ai.call(this,Ae);if(this.
A3===1){if(this.G_){this.A0.Fz(A.jb.CE);this.Hw.C1(A.jb.CE);this.V1.C1(A.jb.CE);
this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.A0.Fz(A.jb.C0);this.Hw.
C1(A.jb.C0);this.V1.C1(A.jb.C0);this.Background.L(A.jb.CE);this.V.L(A.jb.Text);}
}else{if(this.G_){this.A0.Fz(A.jb.CE);this.Hw.C1(A.jb.CE);this.V1.C1(A.jb.CE);}else{
this.A0.Fz(A.jb.C0);this.Hw.C1(A.jb.C0);this.V1.C1(A.jb.C0);}this.A8(null);}},IP:
function(G){C.D8.IP.call(this,G);if(!this.A3)this.FH(this);else this.G1(this);},
DD:function(G){var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(
F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(
F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(
F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=null;}break;
default:this.Fu.Akj((F=this.N,F[1].call(F[0])));}},FH:function(G){this.En(1);},G1:
function(G){this.En(0);},En:function(EC){var F;if(!this.A3&&!!this.N)this.Fu.Ai3((
F=this.N,F[1].call(F[0])));this.A3=EC;if(this.A3<0)this.A3=0;else if(this.A3>1)this.
A3=1;switch(this.A3){case 0:this.A8(null);break;case 1:{if(this.A0.A6R())this.A8(
this.A0);else this.A8(this.V1);if(!this.AK)this.A0.Sp(2);else this.A0.Sp(7);}break;
default:throw new Error(AsD+this.A3.toFixed());}this.DD(this);this.An();},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Dc],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this);},Dc:function(G
){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.TX,this.
Bx],0);}},Bx:function(E){var F;if(this.AK===E)return;this.AK=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));},N_:function(G){this.Az6(2);},MN:function(G){this.Az6(
7);},Az6:function(Gn){var B;var Ays=(A.Core.O.isPrototypeOf(B=this.AR)?B:null);if(
!!Ays){var Azi=(A.Core.O.isPrototypeOf(B=this.RY(Ays,Gn,0x15))?B:null);if(!!Azi){
this.A8(Azi);return true;}}return false;},Aom:function(G){A.pe([this,this.Bcg],this
);},A2j:function(G){var B;var F;if(!this.HS.Hg){this.J6.Ael(null);return;}switch((
F=this.HS.Hg,F[1].call(F[0]))){case 0:case 1:this.J6.Ael(null);break;case 3:this.
J6.Ael([B=A._GetAutoObject(A.Device.Device),B.AQX,B.AYq]);break;case 2:this.J6.Ael([
B=A._GetAutoObject(A.Device.Device),B.AQY,B.AYr]);break;case 4:case 5:this.J6.Ael([
B=A._GetAutoObject(A.Device.Device),B.ADo,B.AHw]);break;default:throw new Error(
Bof+(F=this.HS.Hg,F[1].call(F[0])).toFixed());}},Bcg:function(G){var F;if(!this.
HS.Hg)return;A.pe([this,this.A2j],this);var Ate=false;switch((F=this.HS.Hg,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{Ate=true;this.A0.A8H(-1);}break;case 0:
case 1:{Ate=false;this.A0.A8H(A._GetAutoObject(A.Device.Device).FN);}break;default:
throw new Error(Axt+(F=this.HS.Hg,F[1].call(F[0])).toFixed());}this.A0.Ar(Ate);this.
Hw.Ar(Ate);this.Hw.Y(Ate);if(((F=this.HS.Hg,F[1].call(F[0]))!==this.AkW)||(Ate===
false)){var BN=this.AK;this.Bx(A._GetAutoObject(A.Device.Helper).AKW((F=this.HS.
Hg,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).W));if(this.AK!==BN){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}if(A._GetAutoObject(
A.Device.Helper).BgY((F=this.HS.Hg,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).W))this.A0.Kc(A._GetAutoObject(A.Device.Device).FN);else this.A0.Kc(0);this.AkW=(
F=this.HS.Hg,F[1].call(F[0]));},A7G:function(E){var B;if(this.Aam===E)return;if(
!!this.Aam){A.z$([this,this.Aom],[B=this.Aam,B.V6,B.JG],0);A.z$([this,this.Aom],[
B=this.Aam,B.AmZ,B.M8],0);A.z$([this,this.Aom],[B=this.Aam,B.AjU,B.M9],0);this.HS.
T0(null);}this.Aam=E;if(!!E){A.zX([this,this.Aom],[B=this.Aam,B.V6,B.JG],0);A.zX([
this,this.Aom],[B=this.Aam,B.AmZ,B.M8],0);A.zX([this,this.Aom],[B=this.Aam,B.AjU
,B.M9],0);this.HS.T0([B=this.Aam,B.V6,B.JG]);}if(!!E)A.pe([this,this.Aom],this);
},TX:function(){return this.AK;},_Init:function(aArg){C.D8._Init.call(this,aArg);
A.Core.BJ._Init.call(this.Fb={I:this},0);A.Core.BJ._Init.call(this.E0={I:this},0
);C.Aqq._Init.call(this.Hw={I:this},0);C.Aqq._Init.call(this.V1={I:this},0);C.Au_.
_Init.call(this.A0={I:this},0);C.AKY._Init.call(this.HS={I:this},0);C.Aul._Init.
call(this.J6={I:this},0);this.__proto__=C.AFo;var B;this.H(Uz);this.V.Ar(false);
this.V.R(Ass);this.V.L(A.jb.Bh);this.Fb.Filter=6;this.E0.Filter=7;this.Hw.H(Bog);
this.Hw.Ar(false);this.V1.H(Boh);this.A0.H(Boi);this.A0.Ar(false);this.J(this.Hw
,0);this.J(this.V1,0);this.J(this.A0,0);this.Fu=A._NewObject(C.AdT,0);this.Fb.BK=[
this,this.N_];this.E0.BK=[this,this.MN];this.Hw.CK(this.J6);this.Hw.Au([B=this.J6
,B.B_,B.Ca]);this.V1.CK(this.HS);this.V1.Au([B=this.HS,B.B_,B.Ca]);this.A0.Au([this
,this.TX,this.Bx]);this.HS.Bjc([B=A._GetAutoObject(A.Device.Device),B.AmV,B.AnZ]
);this.Init(aArg);},_Done:function(){this.__proto__=C.D8;this.Fb._Done();this.E0.
_Done();this.Hw._Done();this.V1._Done();this.A0._Done();this.HS._Done();this.J6.
_Done();C.D8._Done.call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.
Fb._ReInit();this.E0._ReInit();this.Hw._ReInit();this.V1._ReInit();this.A0._ReInit(
);this.HS._ReInit();this.J6._ReInit();},_Mark:function(D){var B;C.D8._Mark.call(
this,D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aam)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V1)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HS).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.J6)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.GM={AyM:null,Fb:null,E0:null,GJ:null,
FM:null,EA:null,MX:0,ALA:0,AAW:0,T7:0,A9R:-1,ALz:false,Init:function(aArg){A.pe([
this,this.AYV],this);},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.EA.Y(this.
ALz);this.EA.H(A.wC(this.X1(this.AAW).M,this.X1((this.AAW+this.ALA)-1).M));},N_:
function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);var AZM=this.BdH(2);if(AZM===
false)DW.Ny=true;},MN:function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);var
AZM=this.BdH(7);if(AZM===false)DW.Ny=true;},BdH:function(Gn){var B;var El=(C.DF.
isPrototypeOf(B=this.AR)?B:null);El=this.Ba$(El,Gn,true);if(!!El){this.A8(El);this.
AyM=(C.DF.isPrototypeOf(B=this.AR)?B:null);return true;}return false;},AcV:function(
G){A.ab5("%s",AkI);},GF:function(s){this.AcV(s);},Fz:function(E){if(this.MX===E)
return;this.MX=E;this.FM.C1(E);this.GJ.C1(E);},Sp:function(Gn){var B;switch(Gn){
case 2:this.A8(this.GJ);break;case 7:this.A8(this.FM);break;default:A.ab5("%s%e"
,Boj,Gn);}this.AyM=(C.DF.isPrototypeOf(B=this.AR)?B:null);},LE:function(G){},AYV:
function(s){this.LE(s);},ADH:function(E){if(this.ALz===E)return;this.ALz=E;this.
An();},A7M:function(E){if(this.ALA===E)return;this.ALA=E;this.An();},A7L:function(
E){if(this.AAW===E)return;this.AAW=E;this.An();},X1:function(IJ){var B2=null;switch(
IJ){case-1:case 0:B2=this.FM;break;case 1:B2=this.GJ;break;default:A.ab5("%s",Ahr
);}return B2;},Kc:function(E){if(this.T7===E)return;this.T7=E;this.AlQ();},AlQ:function(
){A.ab5("%s",AkI);},Ba$:function(Acs,Gn,Ly){var B;if(!!Acs){var Bc;if(Ly)Bc=0x11;
else Bc=0x0;switch(Gn){case 2:Acs=(C.DF.isPrototypeOf(B=this.Ap5(Acs,Bc))?B:null
);break;case 7:Acs=(C.DF.isPrototypeOf(B=this.Vp(Acs,Bc))?B:null);break;default:
throw new Error(Bok);}}return Acs;},A8H:function(E){if(this.A9R===E)return;this.
A9R=E;var El=this.FM;var AZ$;while(!!El){AZ$=!!E;El.Ar(AZ$);El.Y(AZ$);if(El===this.
AyM)this.A8(El);El=this.Ba$(El,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BJ._Init.call(this.Fb={I:this},0);A.Core.BJ._Init.
call(this.E0={I:this},0);C.DF._Init.call(this.GJ={I:this},0);C.DF._Init.call(this.
FM={I:this},0);A.acg.Cz._Init.call(this.EA={I:this},0);this.__proto__=C.GM;this.
H(Bol);this.Fb.Filter=6;this.E0.Filter=7;this.MX=A.jb.CE;this.GJ.H(EW);this.FM.H(
A99);this.EA.H(Bom);this.EA.NO(2);this.EA.L(A.jb.EU);this.J(this.GJ,0);this.J(this.
FM,0);this.J(this.EA,0);this.Fb.BK=[this,this.N_];this.Fb.DS=[this,this.N_];this.
E0.BK=[this,this.MN];this.E0.DS=[this,this.MN];this.AyM=this.FM;this.GJ.Dj=[this
,this.GF];this.FM.Dj=[this,this.GF];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Fb._Done();this.E0._Done();this.GJ._Done();this.FM._Done();this.EA.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Fb._ReInit();this.E0._ReInit();this.GJ._ReInit();this.FM._ReInit();this.EA.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AyM)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EA)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.APz={Dn:null,CQ:null,Cn:null
,Fz:function(E){if(this.MX===E)return;C.HA.Fz.call(this,E);this.Cn.C1(E);this.CQ.
C1(E);this.Dn.C1(E);},X1:function(IJ){var B2=null;switch(IJ){case-1:case 0:B2=this.
FM;break;case 1:B2=this.Cn;break;case 2:B2=this.CQ;break;case 3:B2=this.Dn;break;
case 4:B2=this.GJ;break;default:A.ab5("%s",Ahr);}return B2;},_Init:function(aArg
){C.HA._Init.call(this,aArg);C.DF._Init.call(this.Dn={I:this},0);C.DF._Init.call(
this.CQ={I:this},0);C.DF._Init.call(this.Cn={I:this},0);this.__proto__=C.APz;this.
H(Bon);this.GJ.H(AsC);this.Dn.H(A9_);this.CQ.H(A9$);this.Cn.H(A_a);this.FM.H(Boo
);this.J(this.Dn,-2);this.J(this.CQ,-2);this.J(this.Cn,-2);this.Dn.Dj=[this,this.
GF];this.CQ.Dj=[this,this.GF];this.Cn.Dj=[this,this.GF];},_Done:function(){this.
__proto__=C.HA;this.Dn._Done();this.CQ._Done();this.Cn._Done();C.HA._Done.call(this
);},_ReInit:function(){C.HA._ReInit.call(this);this.Dn._ReInit();this.CQ._ReInit(
);this.Cn._ReInit();},_Mark:function(D){var B;C.HA._Mark.call(this,D);if((B=this.
Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.ATO={QV:null,Aca:null,ATN:0,CJ:function(G){this.Aca.Ar(true);},Fd:function(G
){this.Aca.Ar(false);},Bk7:function(E){if(this.ATN===E)return;this.ATN=E;this.QV.
R((((A.aaR(A.acf.ATM)+ZH)+E.toFixed())+Bop)+A.aaR(A.acf.K6));},Bi0:function(){return this.
ATN;},Bx5:function(G){A._GetAutoObject(C.AY).B1(3);A._GetAutoObject(A.Device.Device
).Am4(1);},_Init:function(aArg){C.Xy._Init.call(this,aArg);C.CP._Init.call(this.
QV={I:this},0);A.acl.FZ._Init.call(this.Aca={I:this},0);this.__proto__=C.ATO;this.
Ad$.H(Boq);this.Ue.R(A.jV);this.QV.H(Bor);this.QV.R(A.aaR(A.acf.ATM)+A_b);this.QV.
L(A.jb.Text);this.Aca.HF(1);this.Aca.Ff(5000);this.Aca.BY=100;this.J(this.QV,0);
this.QV.S(A.aaL(A.fl.Ah));this.QV.A5(A.aaL(A.fl.Ak));this.QV.CC(A.aaL(A.fl.By));
this.Aca.Se=[this,this.Bx5];this.Aca.Q=[this,this.Bi0,this.Bk7];},_Done:function(
){this.__proto__=C.Xy;this.QV._Done();this.Aca._Done();C.Xy._Done.call(this);},_ReInit:
function(){C.Xy._ReInit.call(this);this.QV._ReInit();this.Aca._ReInit();this.QV.
R(A.aaR(A.acf.ATM)+A_b);this.QV.S(A.aaL(A.fl.Ah));this.QV.A5(A.aaL(A.fl.Ak));this.
QV.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Xy._Mark.call(this,D);if((B=this.
QV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aca)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.AQo={KW:null,Ld:null,BbU:false,Init:
function(aArg){this.A8(this.C6);},Ee:function(G){var B;if(!!this.KW)this.KW.Ee(this
);C.V3.Ee.call(this,G);},AfE:function(G){var B;if(!!this.KW)this.KW.AfE(this);C.
V3.AfE.call(this,G);},CJ:function(G){var B;if(!this.BbU){this.BbU=true;A.pe([this
,this.A1Q],this);}else if(!this.KW){this.KW=A._NewObject(C.AQq,0);this.KW.A7V([this
,this.AzW]);this.LE(this);this.KW.LE(this);if(!A._GetAutoObject(A.Device.Helper).
W.NaisIdMother)this.Ee(this);else C.V3.CJ.call(this,G);}else C.V3.CJ.call(this,G
);},Aps:function(G){var B;if(!!this.KW)this.KW.Aps(this);},AzW:function(G){var B;
var F;this.LE(this);this.KW.LE(this);A.pe([this,this.WM],this);var Bbw=this.LO;this.
Aej(A._GetAutoObject(A.Device.Helper).AaO(A._GetAutoObject(A.Device.Helper).W.AnimalType
));A._GetAutoObject(A.Device.Helper).ATL(A._GetAutoObject(A.Device.Helper).W,A._GetAutoObject(
A.Device.Device).EartagNrAssignmentMode,Bbw);if(Bbw)A._GetAutoObject(A.Device.Helper
).W.M9(A._GetAutoObject(A.Device.Helper).W.NaisId);A._GetAutoObject(A.Device.Helper
).W.T5(A._GetAutoObject(A.Device.Helper).AKW((F=this.Dw.HS.Hg,F[1].call(F[0])),A.
_GetAutoObject(A.Device.Helper).W));this.LF(this.C6);},A1Q:function(G){A._GetAutoObject(
C.AY).B1(90);},_Init:function(aArg){C.V3._Init.call(this,aArg);C.QU._Init.call(this.
Ld={I:this},0);this.__proto__=C.AQo;var B;this.Ld.H(Aho);this.Ld.Aj(true);this.Ld.
U(A.aaR(A.acf.ABj));this.J(this.Ld,-8);this.Kj(this.F0,-1);this.Ld.Gj([this,this.
D9,this.GQ]);this.Ld.Au([B=A._GetAutoObject(A.Device.Helper).W,B.AQ7,B.Ana]);this.
Init(aArg);},_Done:function(){this.__proto__=C.V3;this.Ld._Done();C.V3._Done.call(
this);},_ReInit:function(){C.V3._ReInit.call(this);this.Ld._ReInit();this.Ld.U(A.
aaR(A.acf.ABj));},_Mark:function(D){var B;C.V3._Mark.call(this,D);if((B=this.KW)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ld)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::NewAnimalCalvingDataScreen"};C.ACF={Agb:null,Agc:null,NB:
null,NA:null,ER:null,FY:null,Eg:null,Dn:null,CQ:null,Cn:null,Fz:function(E){if(this.
MX===E)return;C.K$.Fz.call(this,E);this.Cn.C1(E);this.CQ.C1(E);this.Dn.C1(E);this.
Eg.C1(E);this.FY.C1(E);this.ER.C1(E);this.NA.C1(E);this.NB.C1(E);this.Agc.C1(E);
this.Agb.C1(E);},X1:function(IJ){var B2=null;switch(IJ){case-1:case 0:B2=this.FM;
break;case 1:B2=this.Cn;break;case 2:B2=this.CQ;break;case 3:B2=this.Dn;break;case
4:B2=this.Eg;break;case 5:B2=this.FY;break;case 6:B2=this.ER;break;case 7:B2=this.
NA;break;case 8:B2=this.NB;break;case 9:B2=this.Agc;break;case 10:B2=this.Agb;break;
case 11:B2=this.GJ;break;default:A.ab5("%s",Ahr);}return B2;},_Init:function(aArg
){C.K$._Init.call(this,aArg);C.DF._Init.call(this.Agb={I:this},0);C.DF._Init.call(
this.Agc={I:this},0);C.DF._Init.call(this.NB={I:this},0);C.DF._Init.call(this.NA={
I:this},0);C.DF._Init.call(this.ER={I:this},0);C.DF._Init.call(this.FY={I:this},
0);C.DF._Init.call(this.Eg={I:this},0);C.DF._Init.call(this.Dn={I:this},0);C.DF.
_Init.call(this.CQ={I:this},0);C.DF._Init.call(this.Cn={I:this},0);this.__proto__=
C.ACF;this.H(Bos);this.GJ.H(AHm);this.Agb.H(AxB);this.Agc.H(AX$);this.NB.H(AYa);
this.NA.H(AYb);this.ER.H(AYc);this.FY.H(AYd);this.Eg.H(AYe);this.Dn.H(A_c);this.
CQ.H(AYf);this.Cn.H(Bot);this.FM.H(Bou);this.J(this.Agb,-2);this.J(this.Agc,-2);
this.J(this.NB,-2);this.J(this.NA,-2);this.J(this.ER,-2);this.J(this.FY,-2);this.
J(this.Eg,-2);this.J(this.Dn,-2);this.J(this.CQ,-2);this.J(this.Cn,-2);this.Agb.
Dj=[this,this.GF];this.Agc.Dj=[this,this.GF];this.NB.Dj=[this,this.GF];this.NA.Dj=[
this,this.GF];this.ER.Dj=[this,this.GF];this.FY.Dj=[this,this.GF];this.Eg.Dj=[this
,this.GF];this.Dn.Dj=[this,this.GF];this.CQ.Dj=[this,this.GF];this.Cn.Dj=[this,this.
GF];},_Done:function(){this.__proto__=C.K$;this.Agb._Done();this.Agc._Done();this.
NB._Done();this.NA._Done();this.ER._Done();this.FY._Done();this.Eg._Done();this.
Dn._Done();this.CQ._Done();this.Cn._Done();C.K$._Done.call(this);},_ReInit:function(
){C.K$._ReInit.call(this);this.Agb._ReInit();this.Agc._ReInit();this.NB._ReInit(
);this.NA._ReInit();this.ER._ReInit();this.FY._ReInit();this.Eg._ReInit();this.Dn.
_ReInit();this.CQ._ReInit();this.Cn._ReInit();},_Mark:function(D){var B;C.K$._Mark.
call(this,D);if((B=this.Agb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agc)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.NB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ER)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber12"
};C.HA={Q:null,AK:0,Ai:function(Ae){C.GM.Ai.call(this,Ae);this.AlQ();},AcV:function(
G){var B;var F;var KT=A.jV;var B2=this.GJ;while(!!B2){if(B2.E$>0)KT=KT+B2.E$.toFixed(
);else KT=KT+String.fromCharCode(0x30);B2=(C.DF.isPrototypeOf(B=this.Vp(B2,0x11)
)?B:null);}var BN=this.AK;this.Bx(A.wz(KT,-1,10));if(this.AK!==BN){if(!!this.Q)(
F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},LE:function(G){},AlQ:function(
){var B;var F;if(!!this.Q){var El=this.FM;var Ac2=this.T7;var A1=(F=this.Q,F[1].
call(F[0]));while(!!El){if(A1>0){El.M6(A1%10);A1=(A1/10)|0;}else if(Ac2>0)El.M6(
0);else El.M6(-1);El=(C.DF.isPrototypeOf(B=this.Ap5(El,0x11))?B:null);Ac2=Ac2-1;
}}},Dc:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Au:function(
E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Dc],this.Q,0);this.Q=E;
if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this);},Bx:function(E
){if(this.AK===E)return;this.AK=E;this.An();},_Init:function(aArg){C.GM._Init.call(
this,aArg);this.__proto__=C.HA;},_Mark:function(D){var B;C.GM._Mark.call(this,D);
if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_32"
};C.K$={AK:0,Q:null,Ai:function(Ae){C.GM.Ai.call(this,Ae);this.AlQ();},AcV:function(
G){var B;var F;var KT=A.jV;var B2=this.GJ;while(!!B2){if(B2.E$>0)KT=KT+B2.E$.toFixed(
);else KT=KT+String.fromCharCode(0x30);B2=(C.DF.isPrototypeOf(B=this.Vp(B2,0x11)
)?B:null);}var BN=this.AK;this.Bx(A.ab0(KT,0,10));if(this.AK!==BN){if(!!this.Q)(
F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},LE:function(G){},AlQ:function(
){var B;var F;if(!!this.Q){var El=this.FM;var Ac2=this.T7;var A1=(F=this.Q,F[1].
call(F[0]));while(!!El){if(A1>0){El.M6((A1%10)|0);A1=Math.trunc(A1/10);}else if(
Ac2>0)El.M6(0);else El.M6(-1);El=(C.DF.isPrototypeOf(B=this.Ap5(El,0x11))?B:null
);Ac2=Ac2-1;}}},Dc:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0
])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Dc],
this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this
);},Bx:function(E){if(this.AK===E)return;this.AK=E;this.An();},_Init:function(aArg
){C.GM._Init.call(this,aArg);this.__proto__=C.K$;},_Mark:function(D){var B;C.GM.
_Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::InputNumber2_64"};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:
null,Do:function(){return 2;},C9:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
EartagNrAssignmentModeToString.BX(aIndex);},DP:function(A1){return A1;},Hj:function(
){return 1;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString.
_Init.call(this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.Au_={Eg:null,Dn:null,CQ:null,Cn:null,Fz:function(E){if(this.MX===E)return;C.
HA.Fz.call(this,E);this.Cn.C1(E);this.CQ.C1(E);this.Dn.C1(E);this.Eg.C1(E);},X1:
function(IJ){var B2=null;switch(IJ){case-1:case 0:B2=this.FM;break;case 1:B2=this.
Cn;break;case 2:B2=this.CQ;break;case 3:B2=this.Dn;break;case 4:B2=this.Eg;break;
case 5:B2=this.GJ;break;default:A.ab5("%s",Ahr);}return B2;},_Init:function(aArg
){C.HA._Init.call(this,aArg);C.DF._Init.call(this.Eg={I:this},0);C.DF._Init.call(
this.Dn={I:this},0);C.DF._Init.call(this.CQ={I:this},0);C.DF._Init.call(this.Cn={
I:this},0);this.__proto__=C.Au_;this.H(Axm);this.GJ.H(AGy);this.Eg.H(AGz);this.Dn.
H(AGA);this.CQ.H(AGB);this.Cn.H(AGC);this.FM.H(AGD);this.EA.H(A_d);this.J(this.Eg
,-2);this.J(this.Dn,-2);this.J(this.CQ,-2);this.J(this.Cn,-2);this.Eg.Dj=[this,this.
GF];this.Dn.Dj=[this,this.GF];this.CQ.Dj=[this,this.GF];this.Cn.Dj=[this,this.GF
];},_Done:function(){this.__proto__=C.HA;this.Eg._Done();this.Dn._Done();this.CQ.
_Done();this.Cn._Done();C.HA._Done.call(this);},_ReInit:function(){C.HA._ReInit.
call(this);this.Eg._ReInit();this.Dn._ReInit();this.CQ._ReInit();this.Cn._ReInit(
);},_Mark:function(D){var B;C.HA._Mark.call(this,D);if((B=this.Eg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.ASY={AttributeSet:null,Ai:function(Ae){var B;C.B$.
Ai.call(this,Ae);var G2=((Ae&0x10)===0x10);var Fi=((Ae&0x20)===0x20);var Ip=((Ae&
0x40)===0x40);var Gq=this.Bk.Bv;var FE=A.jb.CE;var GG=A.jb.Text;if(this.G_){FE=A.
jb.Bh;GG=A.jb.Text;}if(!G2){this.Background.L(A.jb.C0);this.V.L(A.jb.CE);this.AttributeSet.
AgP(A.jb.CE);}else if(Gq){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);this.AttributeSet.
AgP(A.jb.Bh);}else if(Ip){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);this.AttributeSet.
AgP(A.jb.Bh);}else if(Fi){this.Background.L(A.jb.Amz);this.V.L(A.jb.Bh);this.AttributeSet.
AgP(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);this.AttributeSet.AgP(GG);
}this.Ly=G2;this.Kv=Fi;this.Qb=Gq;this.AoF=Ip;},Init:function(aArg){this.AttributeSet.
Bl$(0);this.AttributeSet.Bma(1);this.AttributeSet.Bmb(4);},G$:function(G){var B;
var FU=this.Dp.GN;var Cx=(A.acg.At7.isPrototypeOf(B=this.Dp.Cd)?B:null);Cx.A7I(this.
AttributeSet);Cx.A2(0x12);if(!Cx)return;if(!!this.AC)Cx.R(this.Bwe(this.AC.Gg(FU
)));else Cx.R(WH);Cx.H(A.abK(Cx.M,[this.Dp.VL,(B=this.Dp.M)[3]-B[1]]));},Bwe:function(
BuG){var AzF=BuG;AzF=A._GetAutoObject(A.Device.Helper).Nb(AzF,Bov,Bow);AzF=A._GetAutoObject(
A.Device.Helper).Nb(AzF,Box,Boy);return Boz+AzF;},_Init:function(aArg){C.B$._Init.
call(this,aArg);A.Graphics.AttrSet._Init.call(this.AttributeSet={I:this},0);this.
__proto__=C.ASY;this.Dp.H(BoA);this.Dp.Jm(2);this.Dp.NN(A.acg.At7);this.AttributeSet.
AgP(this.V.AP);this.AttributeSet.Bj6(A.aaL(A.fl.AM_));this.AttributeSet.A74(A.aaL(
A.fl.Ak));this.AttributeSet.AgS(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(
){this.__proto__=C.B$;this.AttributeSet._Done();C.B$._Done.call(this);},_ReInit:
function(){C.B$._ReInit.call(this);this.AttributeSet._ReInit();this.AttributeSet.
A74(A.aaL(A.fl.Ak));this.AttributeSet.AgS(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;C.B$._Mark.call(this,D);if((B=this.AttributeSet)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::SettingsItemGroupSpecialChars"};C.NewAnimalsSetTransponderScreen={
_Init:function(aArg){C.ArP._Init.call(this,aArg);this.__proto__=C.NewAnimalsSetTransponderScreen;
this.Dr(C.AB9);},_className:"Application::NewAnimalsSetTransponderScreen"};C.ReasonOfLeaving={
ReasonOfLeavingToString:null,Do:function(){return 14;},C9:function(aIndex){if((aIndex<
0)||(aIndex>=14))return-1;return aIndex;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=
14))return A.jV;return this.ReasonOfLeavingToString.BX(aIndex);},DP:function(A1){
return A1;},Hj:function(){return 13;},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OD={Fu:null,EnumToCodeset:
null,Jk:null,A3:0,Number:0,Ai:function(Ae){C.B$.Ai.call(this,Ae);if(this.A3===1){
if(this.G_){this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CE);this.V.L(A.jb.Text);}}},Bx:function(E){C.B$.Bx.call(this,E);var Bw6=this.
EnumToCodeset.Al$(this.Number);var Bb3=this.AC.C9(this.AK);if(Bw6!==Bb3){this.AEl(
this.EnumToCodeset.AdK(Bb3));A.abo([this,this.AQ9,this.AEl],0);}},DD:function(G){
var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.
aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[
this,this.G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(
A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=
this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=null;}break;default:
this.Fu.Akj((F=this.N,F[1].call(F[0])));}},FH:function(G){this.En(1);},G1:function(
G){this.En(0);},En:function(EC){var F;if(!this.A3)this.Fu.Ai3((F=this.N,F[1].call(
F[0])));this.A3=EC;if((this.A3<0)||(this.A3>1))this.A3=0;this.DD(this);if(!this.
A3)this.A8(null);else this.A0m();this.An();},AEl:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.Aqa()>E)E=this.EnumToCodeset.
Aqa();if(this.EnumToCodeset.Hj()<E)E=this.EnumToCodeset.Hj();}this.Number=E;var BN=
this.AK;if(!!this.EnumToCodeset){var Bv6=this.EnumToCodeset.Al$(E);this.Bx(this.
AC.DP(Bv6));if(this.AK!==BN){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.C9(this.AK)));A.abo(this.Q,0);}}},Am5:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},UM:function(G){this.En(this.A3+1);},A0m:function(){A.ab5(
"%s",BoB);},AQ9:function(){return this.Number;},_Init:function(aArg){C.B$._Init.
call(this,aArg);A.Core.BJ._Init.call(this.Jk={I:this},0);this.__proto__=C.OD;this.
Jk.Filter=1;this.Fu=A._NewObject(C.AdT,0);this.Jk.BK=[this,this.UM];},_Done:function(
){this.__proto__=C.B$;this.Jk._Done();C.B$._Done.call(this);},_ReInit:function(){
C.B$._ReInit.call(this);this.Jk._ReInit();},_Mark:function(D){var B;C.B$._Mark.call(
this,D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.Aeg={Text:null,Ai:function(
Ae){C.Eb.Ai.call(this,Ae);this.Text.L(this.ABL);},Bx:function(E){if(this.AK===E)
return;this.AK=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Q1(this.AK));this.
An();},Z7:function(G){A.pe([this,this.AfA],this);},Z6:function(G){A.pe([this,this.
AfA],this);},Alr:function(G){A.pe([this,this.AfA],this);},AfA:function(G){if((!this.
H_||!this.FN)||!this.Fw)return;},_Init:function(aArg){C.Eb._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Aeg;this.Text.AW(0x3F
);this.Text.H(Asi);this.Text.R(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Eb;this.Text._Done();C.Eb.
_Done.call(this);},_ReInit:function(){C.Eb._ReInit.call(this);this.Text._ReInit(
);this.Text.R(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(
D){var B;C.Eb._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.AQh={Gv:0,C4:null,A0:null,EZ:null,
IX:null,CountryToString:null,K3:0,L3:false,Init:function(aArg){A.zX([this,this.UC
],[this,this.Sf,this.Lh],0);},Ai:function(Ae){C.Eb.Ai.call(this,Ae);this.IX.Y(this.
AeM);this.A0.Fz(this.LK);this.EZ.C1(this.LK);this.IX.C1(this.LK);},DD:function(G
){var F;if(!this.N)return;switch(this.A3){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(
F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(
F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).BU(this.CountryToString.BX(this.K3));(F=this.N,
F[1].call(F[0])).Cb=null;}break;default:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.
EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.
G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=null;}}},En:function(EC){var S4=this.
A3;this.A3=EC;if(this.A3<0)this.A3=0;else if(this.A3>this.Rn)this.A3=this.Rn;if((
this.A3===1)&&!this.AeM)this.A3=2;switch(this.A3){case 0:{this.A8(null);if(!this.
Gv)this.Lh(0);}break;case 1:this.A8(this.IX);break;case 2:this.A8(this.EZ);break;
case 3:{this.A8(this.A0);if(!this.Gv||(S4>0))this.A0.Sp(2);else this.A0.Sp(7);}break;
default:throw new Error(AsD+this.A3.toFixed());}C.Eb.En.call(this,this.A3);},AoM:
function(G){this.IX.T0(this.Eq);},Z7:function(G){var F;this.A0.A7L((F=this.Fw,F[
1].call(F[0])));},Z6:function(G){var F;this.A0.A7M((F=this.FN,F[1].call(F[0])));
},Bx:function(E){if(this.AK===E)return;this.AK=E;this.L3=true;this.Sg(A._GetAutoObject(
A.Device.Helper).Tu(E,0,12));this.Lh(A._GetAutoObject(A.Device.Converter).Ab7(E)
);this.L3=false;if(!!E)this.A0.Kc(12);else this.A0.Kc(0);this.An();},Alr:function(
G){A.pe([this,this.AfA],this);},FH:function(G){var F;if(!this.AK){var BN=this.AK;
this.Bx(A._GetAutoObject(A.Device.Helper).ABY());if(this.AK!==BN){if(!!this.Q)(F=
this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}this.En(3);},Ajk:function(){return this.
Gv;},Ajm:function(){return 999999999999;},Lh:function(E){if(this.K3===E)return;this.
K3=E;if(this.L3===false)A.pe([this,this.UY],this);A.abo([this,this.Sf,this.Lh],0
);},Sg:function(E){if(this.Gv===E)return;this.Gv=E;if(this.L3===false)A.pe([this
,this.UY],this);A.abo([this,this.Abo,this.Sg],0);},UY:function(G){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).ApT(this.K3),3,10)+A.abm(this.Gv,12,10
);var BN=this.AK;this.Bx(A.ab0(aString,0,10));if(this.AK!==BN){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},AfA:function(G){var F;if((!this.H_||
!this.FN)||!this.Fw)return;if(!(F=this.H_,F[1].call(F[0])))this.A0.ADH(true);else
this.A0.ADH(false);},Sf:function(){return this.K3;},Abo:function(){return this.Gv;
},_Init:function(aArg){C.Eb._Init.call(this,aArg);C.C4._Init.call(this.C4={I:this
},0);C.ACF._Init.call(this.A0={I:this},0);C.Ar0._Init.call(this.EZ={I:this},0);C.
IX._Init.call(this.IX={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.AQh;var B;this.Rn=3;this.A0.H(BoC);this.EZ.H(A_e);this.
IX.H(A_f);this.J(this.A0,0);this.J(this.EZ,0);this.J(this.IX,0);this.C4.ADN([this
,this.Sf,this.Lh]);this.A0.Au([this,this.Abo,this.Sg]);this.EZ.CK(this.C4);this.
EZ.Au([B=this.C4,B.B_,B.Ca]);this.IX.A7X([B=A._GetAutoObject(A.Device.Device),B.
Avr,B.AxI]);this.Init(aArg);},_Done:function(){this.__proto__=C.Eb;this.C4._Done(
);this.A0._Done();this.EZ._Done();this.IX._Done();this.CountryToString._Done();C.
Eb._Done.call(this);},_ReInit:function(){C.Eb._ReInit.call(this);this.C4._ReInit(
);this.A0._ReInit();this.EZ._ReInit();this.IX._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.Eb._Mark.call(this,D);if((B=this.C4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.AQg={Gv:0,C4:null,A0:null,X$:null,J_:null,EZ:null,IX:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Ph:0,K3:0,L3:false,Init:function(aArg){A.
zX([this,this.UC],[this,this.PA,this.DT],0);A.zX([this,this.UC],[this,this.Sf,this.
Lh],0);A.zX([this,this.UC],[this,this.AmX,this.AgT],0);},Ai:function(Ae){C.Eb.Ai.
call(this,Ae);this.IX.Y(this.AeM);this.A0.Fz(this.LK);this.X$.Fz(this.LK);this.J_.
Fz(this.LK);this.EZ.C1(this.LK);this.IX.C1(this.LK);},DD:function(G){var F;if(!this.
N)return;switch(this.A3){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CS(A.aaL(
A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this
,this.G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV
);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.
N,F[1].call(F[0])).BU(this.CountryToString.BX(this.K3));(F=this.N,F[1].call(F[0]
)).Cb=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.
N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G1];(F=this.
N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).BU(((A.aaR(A.acf.AFx)+A.aaR(A.acf.Colon))+ZH)+A.aaR(A.
acf.Be5));break;case 1:(F=this.N,F[1].call(F[0])).BU(((A.aaR(A.acf.AFx)+A.aaR(A.
acf.Colon))+ZH)+A.aaR(A.acf.Bmg));break;case 2:(F=this.N,F[1].call(F[0])).BU(((A.
aaR(A.acf.AFx)+A.aaR(A.acf.Colon))+ZH)+A.aaR(A.acf.BfV));break;default:(F=this.N
,F[1].call(F[0])).BU(((A.aaR(A.acf.AFx)+A.aaR(A.acf.Colon))+ZH)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Cb=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0]
)).Cw=[this,this.G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0
])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null
);(F=this.N,F[1].call(F[0])).BU((A.aaR(A.acf.Gl)+Axc)+this.GermanStateToString.Lm(
A._GetAutoObject(A.Device.Converter).ABO(this.Ph)));(F=this.N,F[1].call(F[0])).Cb=
null;}break;default:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[
1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G1];(F=this.N,F[
1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).BU(
A.jV);(F=this.N,F[1].call(F[0])).Cb=null;}}},En:function(EC){var S4=this.A3;if(EC<
0)EC=0;else if(EC>this.Rn)EC=this.Rn;if((EC===1)&&!this.AeM)EC=2;switch(EC){case
0:{this.A8(null);if((!this.Gv&&!this.AnimalType)&&!this.Ph)this.Lh(0);}break;case
1:this.A8(this.IX);break;case 2:this.A8(this.EZ);break;case 3:if(!S4)A.pe([this,
this.Byh],this);else this.A8(this.X$);break;case 4:this.A8(this.J_);break;case 5:
if(((S4===4)&&!this.Ph)&&!this.Gv)return;else{this.A8(this.A0);if(!this.Gv||(S4>
0))this.A0.Sp(2);else this.A0.Sp(7);}break;default:throw new Error(AsD+EC.toFixed(
));}this.A3=EC;C.Eb.En.call(this,this.A3);},Bx:function(E){if(this.AK===E)return;
this.AK=E;this.L3=true;this.Sg(A._GetAutoObject(A.Device.Helper).Tu(E,0,8));this.
AgT(A._GetAutoObject(A.Device.Helper).Tu(E,8,2)|0);this.DT(A._GetAutoObject(A.Device.
Helper).Tu(E,10,2)|0);this.Lh(A._GetAutoObject(A.Device.Converter).Ab7(E));this.
L3=false;if(!!this.AK){this.X$.Kc(2);this.J_.Kc(2);this.A0.Kc(8);}else{this.X$.Kc(
0);this.J_.Kc(0);this.A0.Kc(0);}this.An();},AoM:function(G){this.IX.T0(this.Eq);
},Z7:function(G){var F;this.A0.A7L((F=this.Fw,F[1].call(F[0])));},Z6:function(G){
var F;this.A0.A7M((F=this.FN,F[1].call(F[0])));},Alr:function(G){A.pe([this,this.
AfA],this);},FH:function(G){var F;if(!this.AK){var BN=this.AK;this.Bx(A._GetAutoObject(
A.Device.Helper).ABY());if(this.AK!==BN){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AK));A.abo(this.Q,0);}this.En(3);}else this.En(this.Rn);},Ajk:function(){return this.
Gv;},Ajm:function(){return 99999999;},Lh:function(E){if(this.K3===E)return;this.
K3=E;if(this.L3===false)A.pe([this,this.UY],this);A.abo([this,this.Sf,this.Lh],0
);},Sg:function(E){if(this.Gv===E)return;this.Gv=E;if(this.L3===false)A.pe([this
,this.UY],this);A.abo([this,this.Abo,this.Sg],0);},UY:function(G){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).ApT(this.K3),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Ph,2,10))+A.abm(this.Gv,8,10);var BN=this.AK;this.Bx(A.ab0(aString
,0,10));if(this.AK!==BN){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.
Q,0);}},AfA:function(G){var F;if((!this.H_||!this.FN)||!this.Fw)return;if(!(F=this.
H_,F[1].call(F[0])))this.A0.ADH(true);else this.A0.ADH(false);},DT:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L3===false)A.pe([this,this.
UY],this);A.abo([this,this.PA,this.DT],0);},AgT:function(E){if(this.Ph===E)return;
this.Ph=E;if(this.L3===false)A.pe([this,this.UY],this);A.abo([this,this.AmX,this.
AgT],0);},Byh:function(G){var F;if(!!this.Jz){var H5=(F=this.Jz,F[1].call(F[0]));
var AZx=0;switch(H5){case 0:case 1:AZx=0;break;case 2:AZx=1;break;default:A.ab5(
"%s%e",Asj,H5);}this.DT(AZx);}if(!this.Ph)this.En(4);else this.En(5);},Sf:function(
){return this.K3;},Abo:function(){return this.Gv;},PA:function(){return this.AnimalType;
},AmX:function(){return this.Ph;},_Init:function(aArg){C.Eb._Init.call(this,aArg
);C.C4._Init.call(this.C4={I:this},0);C.APA._Init.call(this.A0={I:this},0);C.Au9.
_Init.call(this.X$={I:this},0);C.Au9._Init.call(this.J_={I:this},0);C.Ar0._Init.
call(this.EZ={I:this},0);C.IX._Init.call(this.IX={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.AQg;var B;this.Rn=5;this.A0.H(
BoD);this.X$.H(BoE);this.X$.E1(2);this.J_.H(BoF);this.J_.E1(16);this.EZ.H(A_e);this.
IX.H(A_f);this.J(this.A0,0);this.J(this.X$,0);this.J(this.J_,0);this.J(this.EZ,0
);this.J(this.IX,0);this.C4.ADN([this,this.Sf,this.Lh]);this.A0.Au([this,this.Abo
,this.Sg]);this.X$.Au([this,this.PA,this.DT]);this.J_.Au([this,this.AmX,this.AgT
]);this.EZ.CK(this.C4);this.EZ.Au([B=this.C4,B.B_,B.Ca]);this.IX.A7X([B=A._GetAutoObject(
A.Device.Device),B.Avr,B.AxI]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Eb;this.C4._Done();this.A0._Done();this.X$._Done();this.J_._Done();this.EZ._Done(
);this.IX._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.Eb._Done.call(this);},_ReInit:function(){C.Eb._ReInit.call(this);this.C4._ReInit(
);this.A0._ReInit();this.X$._ReInit();this.J_._ReInit();this.EZ._ReInit();this.IX.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.Eb._Mark.call(this,D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.J_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.Eb={AK:0,AvB:null,Or:null,
Q:null,Eq:null,FN:null,Fw:null,H_:null,N:null,Jz:null,Fb:null,E0:null,ABL:0,LK:0
,A3:0,Rn:0,AeM:true,Init:function(aArg){A.pe([this,this.LE],this);},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);if(!this.A3)this.A8(null);},Bj8:function(E){if(this.
ABL===E)return;this.ABL=E;this.An();},Abw:function(E){if(this.LK===E)return;this.
LK=E;this.An();},DD:function(G){A.ab5("%s",AkI);},UC:function(s){this.DD(s);},En:
function(EC){A.pe([this,this.UC],this);A.pe(this.AvB,this);if(!EC)A.pe(this.Or,this
);},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Dc],this.
Q,0);this.Q=E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],this);}
,Dc:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",AnY);},N_:function(G){if(this.A3>1)this.En(this.A3-1);},MN:function(
G){if((this.A3>0)&&(this.A3<this.Rn))this.En(this.A3+1);},T0:function(E){if(A.aaZ(
this.Eq,E))return;if(!!this.Eq)A.z$([this,this.AYM],this.Eq,0);this.Eq=E;if(!!E)
A.zX([this,this.AYM],this.Eq,0);A.pe([this,this.AYM],this);},AoM:function(G){},AYM:
function(s){this.AoM(s);},PB:function(E){if(A.aaZ(this.FN,E))return;if(!!this.FN
)A.z$([this,this.AYQ],this.FN,0);this.FN=E;if(!!E)A.zX([this,this.AYQ],E,0);if(!
!E)A.pe([this,this.AYQ],this);},QM:function(E){if(A.aaZ(this.Fw,E))return;if(!!this.
Fw)A.z$([this,this.AYS],this.Fw,0);this.Fw=E;if(!!E)A.zX([this,this.AYS],E,0);if(
!!E)A.pe([this,this.AYS],this);},Z7:function(G){},AYS:function(s){this.Z7(s);},Z6:
function(G){},AYQ:function(s){this.Z6(s);},TY:function(E){if(A.aaZ(this.H_,E))return;
if(!!this.H_)A.z$([this,this.AYP],this.H_,0);this.H_=E;if(!!E)A.zX([this,this.AYP
],E,0);if(!!E)A.pe([this,this.AYP],this);},Alr:function(G){},AYP:function(s){this.
Alr(s);},FH:function(G){A.ab5("%s",A_g);},BC$:function(s){this.FH(s);},G1:function(
G){this.En(0);},Ajk:function(){A.ab5("%s",AnY);return 0;},Ajm:function(){A.ab5("%s"
,AnY);return 0;},LE:function(G){},Am3:function(E){if(A.aaZ(this.Jz,E))return;if(
!!this.Jz)A.z$([this,this.Aol],this.Jz,0);this.Jz=E;if(!!E)A.zX([this,this.Aol],
this.Jz,0);A.pe([this,this.Aol],this);},Aol:function(G){},AD2:function(E){if(A.aa0(
this.Or,E))return;this.Or=E;},AEw:function(E){if(this.AeM===E)return;this.AeM=E;
this.An();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.BJ._Init.
call(this.Fb={I:this},0);A.Core.BJ._Init.call(this.E0={I:this},0);this.__proto__=
C.Eb;this.H(Asi);this.ABL=A.jb.Text;this.LK=A.jb.C0;this.Fb.Filter=6;this.E0.Filter=
7;this.Fb.BK=[this,this.N_];this.E0.BK=[this,this.MN];this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.O;this.Fb._Done();this.E0._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Fb._ReInit();this.E0._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AvB)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Or)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eq)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
H_)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Jz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NaisID"};C.QU={AK:0,Di:null,Fu:null,Or:null,Eq:null
,FN:null,Fw:null,H_:null,Q:null,Jz:null,AC_:-1,AeM:true,AMD:false,ASm:false,Arz:
true,Init:function(aArg){A.pe([this,this.AAn],this);},Ai:function(Ae){C.D8.Ai.call(
this,Ae);if(!this.Di)return;if(this.Di.A3>0){if(this.G_){this.Di.Abw(A.jb.CE);this.
Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.Di.Abw(A.jb.C0);this.Background.
L(A.jb.CE);this.V.L(A.jb.Text);}}else{if(this.G_)this.Di.Abw(A.jb.CE);else this.
Di.Abw(A.jb.C0);this.Di.Bj8(this.V.AP);}},IP:function(G){C.D8.IP.call(this,G);if(
!this.Di)return;if(!this.Di.A3)this.FH(this);else this.G1(this);},Gj:function(E){
C.D8.Gj.call(this,E);if(!!this.Di)this.Di.N=E;},T0:function(E){if(A.aaZ(this.Eq,
E))return;if(!!this.Eq)A.z$([this,this.AoM],this.Eq,0);this.Eq=E;if(!!E)A.zX([this
,this.AoM],this.Eq,0);A.pe([this,this.AoM],this);},AoM:function(G){if(!!this.Di)
this.Di.T0(this.Eq);},PB:function(E){if(A.aaZ(this.FN,E))return;this.FN=E;if(!!this.
Di)this.Di.PB(E);},QM:function(E){if(A.aaZ(this.Fw,E))return;this.Fw=E;if(!!this.
Di)this.Di.QM(E);},TY:function(E){if(A.aaZ(this.H_,E))return;this.H_=E;if(!!this.
Di)this.Di.TY(E);},ByM:function(G){var Azn=0;if(!!this.Di){Azn=this.Di.A3;this.Di.
N=null;this.HH(this.Di);}switch(this.AC_){case 0:this.Di=A._NewObject(C.Aeg,0);break;
case 1:this.Di=A._NewObject(C.AQh,0);break;case 2:this.Di=A._NewObject(C.AQg,0);
break;case 3:this.Di=A._NewObject(C.ASo,0);break;case 4:this.Di=A._NewObject(C.ASn
,0);break;case 5:this.Di=A._NewObject(C.AQi,0);break;default:throw new Error(BoG+
this.AC_.toFixed());}this.J(this.Di,0);this.Di.Am3(this.Jz);this.Di.H(BoH);this.
Di.N=this.N;this.Di.T0(this.Eq);this.Di.AvB=[this,this.AvB];this.Di.Au([this,this.
TX,this.Bx]);this.Di.TY(this.H_);this.Di.PB(this.FN);this.Di.QM(this.Fw);this.Di.
AD2(this.Or);this.Di.AEw(this.AeM);if(Azn>0)this.Di.En(Azn);this.A8(this.Di);this.
An();},FH:function(G){var B;var F;if(!!this.Di){if(!!this.N)this.Fu.Ai3((F=this.
N,F[1].call(F[0])));else this.Fu=A._NewObject(C.AdT,0);this.Di.FH(this);}},G1:function(
G){var B;if(!!this.Di)this.Di.G1(this);},Ajk:function(){if(!this.Di)return 0;return this.
Di.Ajk();},Ajm:function(){if(!this.Di)return 0;return this.Di.Ajm();},Dc:function(
G){var F;if(!!this.Q){this.Bx((F=this.Q,F[1].call(F[0])));A.abo([this,this.TX,this.
Bx],0);}},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.Dc
],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc],
this);},Bx:function(E){var F;if(this.AK===E)return;this.AK=E;if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);A.pe([this,this.AAn],this);},BkI:function(
E){if(this.AC_===E)return;this.AC_=E;A.pe([this,this.ByM],this);},Are:function(E
){if(this.Arz===E)return;this.Arz=E;A.pe([this,this.AAn],this);},AAn:function(G){
var AoX;if(this.Arz){if(this.AMD)AoX=5;else AoX=0;}else if(this.ASm){if(A._GetAutoObject(
A.Device.Converter).Ab7(this.AK)===10)AoX=4;else AoX=3;}else if(A._GetAutoObject(
A.Device.Converter).Ab7(this.AK)===10)AoX=2;else AoX=1;this.BkI(AoX);},AvB:function(
G){var F;if((!!this.N&&!!this.Di)&&!this.Di.A3)this.Fu.Akj((F=this.N,F[1].call(F[
0])));this.An();},Am3:function(E){if(A.aaZ(this.Jz,E))return;if(!!this.Jz)A.z$([
this,this.Aol],this.Jz,0);this.Jz=E;if(!!E)A.zX([this,this.Aol],this.Jz,0);A.pe([
this,this.Aol],this);},Aol:function(G){if(!!this.Di)this.Di.Am3(this.Jz);},A8n:function(
E){if(this.ASm===E)return;this.ASm=E;A.pe([this,this.AAn],this);},BjE:function(E
){if(this.AMD===E)return;this.AMD=E;A.pe([this,this.AAn],this);},AD2:function(E){
if(A.aa0(this.Or,E))return;this.Or=E;if(!!this.Di)this.Di.AD2(E);},AEw:function(
E){if(this.AeM===E)return;this.AeM=E;if(!!this.Di)this.Di.AEw(E);},TX:function(){
return this.AK;},_Init:function(aArg){C.D8._Init.call(this,aArg);this.__proto__=
C.QU;this.H(Uz);this.V.R(Ass);this.V.L(A.jb.Bh);this.Fu=A._NewObject(C.AdT,0);this.
Init(aArg);},_Mark:function(D){var B;C.D8._Mark.call(this,D);if((B=this.Di)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Or)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eq)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FN)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Fw)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.H_
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Jz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.APA={ER:null,FY:null,Eg:null,Dn:null,CQ:null
,Cn:null,Fz:function(E){if(this.MX===E)return;C.K$.Fz.call(this,E);this.Cn.C1(E);
this.CQ.C1(E);this.Dn.C1(E);this.Eg.C1(E);this.FY.C1(E);this.ER.C1(E);},X1:function(
IJ){var B2=null;switch(IJ){case-1:case 0:B2=this.FM;break;case 1:B2=this.Cn;break;
case 2:B2=this.CQ;break;case 3:B2=this.Dn;break;case 4:B2=this.Eg;break;case 5:B2=
this.FY;break;case 6:B2=this.ER;break;case 7:B2=this.GJ;break;default:A.ab5("%s"
,Ahr);}return B2;},_Init:function(aArg){C.K$._Init.call(this,aArg);C.DF._Init.call(
this.ER={I:this},0);C.DF._Init.call(this.FY={I:this},0);C.DF._Init.call(this.Eg={
I:this},0);C.DF._Init.call(this.Dn={I:this},0);C.DF._Init.call(this.CQ={I:this},
0);C.DF._Init.call(this.Cn={I:this},0);this.__proto__=C.APA;this.H(BoI);this.GJ.
H(AHm);this.ER.H(AxB);this.FY.H(AX$);this.Eg.H(AYa);this.Dn.H(AYb);this.CQ.H(AYc
);this.Cn.H(AYd);this.FM.H(AYe);this.EA.H(A_d);this.J(this.ER,-2);this.J(this.FY
,-2);this.J(this.Eg,-2);this.J(this.Dn,-2);this.J(this.CQ,-2);this.J(this.Cn,-2);
this.ER.Dj=[this,this.GF];this.FY.Dj=[this,this.GF];this.Eg.Dj=[this,this.GF];this.
Dn.Dj=[this,this.GF];this.CQ.Dj=[this,this.GF];this.Cn.Dj=[this,this.GF];},_Done:
function(){this.__proto__=C.K$;this.ER._Done();this.FY._Done();this.Eg._Done();this.
Dn._Done();this.CQ._Done();this.Cn._Done();C.K$._Done.call(this);},_ReInit:function(
){C.K$._ReInit.call(this);this.ER._ReInit();this.FY._ReInit();this.Eg._ReInit();
this.Dn._ReInit();this.CQ._ReInit();this.Cn._ReInit();},_Mark:function(D){var B;
C.K$._Mark.call(this,D);if((B=this.ER)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Eg)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.Au9={Q:null,GJ:null,FM:null,EA:null,Ig:null,If:null,MX:0,T7:0,AK:0,FP:99,Init:
function(aArg){A.pe([this,this.LE],this);},Ai:function(Ae){var B;A.Core.O.Ai.call(
this,Ae);this.EA.Y(false);this.EA.H(A.wC(this.X1(0).M,this.X1(-1).M));var Ip=((Ae&
0x40)===0x40);if(Ip){this.BdI(A.jb.AR);this.BdJ(A.jb.Bh);}else{this.BdI(this.MX);
this.BdJ(A.jb.Text);}this.AlQ();},Fz:function(E){if(this.MX===E)return;this.MX=E;
this.An();},LE:function(G){},X1:function(IJ){var B2=null;switch(IJ){case-1:case 0:
B2=this.FM;break;case 1:B2=this.GJ;break;default:A.ab5("%s",Ahr);}return B2;},Kc:
function(E){if(this.T7===E)return;this.T7=E;this.AlQ();},AlQ:function(){var B;var
F;if(!!this.Q){var El=this.FM;var Ac2=this.T7;var A1=(F=this.Q,F[1].call(F[0]));
while(!!El){if(A1>0){El.M6(A1%10);A1=(A1/10)|0;}else if(Ac2>0)El.M6(0);else El.M6(-
1);El=(C.E$.isPrototypeOf(B=this.Ap5(El,0x11))?B:null);Ac2=Ac2-1;}}},AfD:function(
G){var F;var BN=this.AK;this.Bx(this.AK+1);if(this.AK!==BN){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},AfC:function(G){var F;var BN=this.
AK;this.Bx(this.AK-1);if(this.AK!==BN){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AK));A.abo(this.Q,0);}},Dc:function(G){var F;if(!!this.Q)this.Bx((F=this.Q,F[1].
call(F[0])));},Au:function(E){if(A.aaZ(this.Q,E))return;if(!!this.Q)A.z$([this,this.
Dc],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.Dc],E,0);if(!!E)A.pe([this,this.Dc
],this);},Bx:function(E){if(E<0)E=0;if(E>this.FP)E=this.FP;if(this.AK===E)return;
this.AK=E;this.An();},E1:function(E){if(this.FP===E)return;this.FP=E;this.An();}
,BdI:function(aColor){this.FM.C1(aColor);this.GJ.C1(aColor);},BdJ:function(aColor
){this.FM.Aj2(aColor);this.GJ.Aj2(aColor);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.E$._Init.call(this.GJ={I:this},0);C.E$._Init.call(this.FM={I:this
},0);A.acg.Cz._Init.call(this.EA={I:this},0);A.Core.BJ._Init.call(this.Ig={I:this
},0);A.Core.BJ._Init.call(this.If={I:this},0);this.__proto__=C.Au9;this.H(BoJ);this.
MX=A.jb.CE;this.GJ.H(AHm);this.FM.H(AxB);this.EA.H(AxB);this.EA.NO(2);this.EA.L(
A.jb.EU);this.Ig.Filter=4;this.If.Filter=5;this.J(this.GJ,0);this.J(this.FM,0);this.
J(this.EA,0);this.Ig.BK=[this,this.AfD];this.Ig.DS=[this,this.AfD];this.If.BK=[this
,this.AfC];this.If.DS=[this,this.AfC];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.GJ._Done();this.FM._Done();this.EA._Done();this.Ig._Done();this.If.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.GJ._ReInit();this.FM._ReInit();this.EA._ReInit();this.Ig._ReInit();this.If.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ig)._cycle!=D)B._Mark(B._cycle=D);if((B=this.If)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.E$={Af7:
null,Background:null,Text:null,E$:-1,MR:0,Ami:0,ApN:false,Ai:function(Ae){A.Core.
O.Ai.call(this,Ae);if(this.E$<0)this.Text.R(Q7);else this.Text.R(this.E$.toFixed(
));this.Background.L(this.MR);this.Text.L(this.Ami);},M6:function(E){if(this.E$===
E)return;var B2=E;if((B2<0)||(B2>9))B2=-1;this.E$=B2;this.An();},C1:function(E){
if(this.MR===E)return;this.MR=E;this.An();},AjY:function(E){if(this.ApN===E)return;
this.ApN=E;this.Af7.Ar(E);if(E===false)this.Text.Y(true);},Aj2:function(E){if(this.
Ami===E)return;this.Ami=E;this.An();},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acl.Tn._Init.call(this.Af7={I:this},0);A.acg.AI._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.E$;var B;
this.H(AsC);this.MR=A.jb.CE;this.Af7.Ff(750);this.Af7.T1(750);this.Af7.Aj4(750);
this.Ami=A.jb.Text;this.Background.AW(0x3);this.Background.H(AsC);this.Text.AW(0x3
);this.Text.H(AsC);this.Text.R(Q7);this.J(this.Background,0);this.J(this.Text,0);
this.Af7.Q=[B=this.Text,B.Fe,B.Y];this.Text.S(A.aaL(A.fl.Ah));},_Done:function(){
this.__proto__=A.Core.O;this.Af7._Done();this.Background._Done();this.Text._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Af7._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Af7)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fn={Z:null,IT:null,AML:A.jV,AQw:A.jV,SU:0,AIq:0,A0c:false,AZK:false,Init:function(
aArg){},CJ:function(G){var B;C.AB.CJ.call(this,G);A.zX([this,this.AAi],[B=A._GetAutoObject(
A.Device.Device).Aq,B.Fx,B.FB],0);A.zX([this,this.UC],[B=A._GetAutoObject(A.Device.
Device).Aq,B.Fx,B.FB],0);A.pe([this,this.AAi],this);A.pe([this,this.UC],this);},
Fd:function(G){var B;C.AB.Fd.call(this,G);A.z$([this,this.AAi],[B=A._GetAutoObject(
A.Device.Device).Aq,B.Fx,B.FB],0);},Bu3:function(L0){A._GetAutoObject(A.Device.Helper
).HD(L0);this.Apt(A._GetAutoObject(A.Device.Device).Bq,A._GetAutoObject(A.Device.
Helper).W.Id);},Apt:function(LV,Acp){A.ab5("%s",AkI);},UU:function(G){var As=(A.
Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===9))A.aaS([
this,this.BvY],this);else if(!!As&&(As.PopupState===5)){this.AZK=true;this.Ee(this
);}},BvY:function(G){if(this.SU>0){this.AZK=false;this.AcQ(this);this.A8M(0);}},
AhW:function(G){if((this.AIq+1)<this.SU)this.A8M(this.AIq+1);else A.aaS([this,this.
BtF],this);},BtG:function(s){this.AhW(s);},A8M:function(E){this.AIq=E;if(this.AZK===
false){this.Bu3(E);A.aaS([this,this.BtG],this);var Xg=(this.AIq/this.SU)*100;A._GetAutoObject(
A.Device.Device).A6(49,true,A.abk(Xg,0,0),0,[this,this.UU]);}},ZS:function(G){A.
_GetAutoObject(A.Device.Device).A6(49,false,BoK,0,[this,this.UU]);this.A0c=true;
A.pe([this,this.AJ1],this);},BtF:function(s){this.ZS(s);},AcQ:function(G){this.IT.
Y(true);this.A0c=false;this.AJ1(this);},BC6:function(s){this.AcQ(s);},AzC:function(
G){var Bc=A._GetAutoObject(A.Device.Helper).A4Z();A._GetAutoObject(A.Device.Device
).Aq.Bm(Bc);},Ee:function(G){A._GetAutoObject(C.AY).Fm();},A1K:function(G){A._GetAutoObject(
C.AY).B1(95);},DD:function(G){this.N.Y(true);this.N.CS(A.aaL(A.ach.EV));this.N.Cw=[
this,this.Ee];this.N.Cm(A.aaL(A.ach.ACv));if(!A._GetAutoObject(A.Device.Device).
Aq.Filter||A._GetAutoObject(A.Device.Helper).Aqt(A._GetAutoObject(A.Device.Device
).Aq.Filter)){this.N.Cg=null;this.N.IW.Ds(100);}else{this.N.Cg=[this,this.AzC];this.
N.IW.Ds(255);}this.N.C2(A.aaL(A.ach.Ad0));this.N.Cb=[this,this.A1K];},UC:function(
s){this.DD(s);},AAi:function(G){this.SU=A._GetAutoObject(A.Device.Device).Aq.Ch(
);if(this.SU>0)A._GetAutoObject(A.Device.Device).A6(49,true,ZG,0,[this,this.UU]);
else{this.AcQ(this);this.ZS(this);}},Aj1:function(E){if(this.AML===E)return;this.
AML=E;A.pe([this,this.AJ1],this);},AJ1:function(G){var B;if(this.A0c===false){this.
IT.R(A.jV);return;}var Aoz;if(!A._GetAutoObject(A.Device.Device).Aq.Ch()){var AcK=
A._GetAutoObject(A.Device.Device).Aq.Filter;A.z$([this,this.AAi],[B=A._GetAutoObject(
A.Device.Device).Aq,B.Fx,B.FB],0);this.AzC(this);if(!A._GetAutoObject(A.Device.Device
).Aq.Qr()||!AcK)Aoz=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ABT(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)Aoz=A.aaR(
A.acf.AMF);else Aoz=A.aaR(A.acf.AME);A._GetAutoObject(A.Device.Device).Aq.Bm(AcK
);A.zX([this,this.AAi],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fx,B.FB],0);}else
Aoz=this.AQw;Aoz=Aoz+(AYg+this.AML);this.IT.R(Aoz);},Aet:function(E){if(this.AQw===
E)return;this.AQw=E;A.pe([this,this.AJ1],this);},_Init:function(aArg){C.AB._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Akk._Init.call(this.IT={
I:this},0);this.__proto__=C.Fn;this.Dr(C.AaS);this.Z.H(E4);this.Z.Kb(1);this.IT.
H(E4);this.J(this.Z,0);this.J(this.IT,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AB;this.Z._Done();this.IT._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Z._ReInit();this.IT._ReInit();},_Mark:function(D){
var B;C.AB._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A5w={Ag:null,A4:0,_Init:function(aArg){this.__proto__=C.A5w;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.Au$={KR:null,MK:null,AV:0,XQ:function(){this.KR=null;this.MK=null;this.AV=0;
},Of:function(A1){var G5;G5=A._NewObject(C.A5w,0);G5.A4=A1;if(!this.KR){this.KR=
G5;this.MK=G5;this.AV=1;}else{this.MK.Ag=G5;this.MK=G5;this.AV=this.AV+1;}},Amr:
function(){var B;var Rq=0;var N4=this.KR;while(!!N4){Rq+=N4.A4;N4=N4.Ag;}return Rq;
},Ajl:function(){if(!this.AV)return 0;return this.Amr()/this.AV;},Aqb:function(){
var B;if(!this.AV)return 0;var AZD=this.Ajl();var AcH=0;var N4=this.KR;while(!!N4
){AcH+=Math.pow(N4.A4-AZD,2);N4=N4.Ag;}AcH/=this.AV;AcH=Math.sqrt(AcH);return AcH;
},_Init:function(aArg){this.__proto__=C.Au$;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AMM={FQ:null,AdW:null,XX:null,DR:null,IT:null,
CT:function(){this.A2F(this);},Init:function(aArg){A.zV([this,this.A2F],A._GetAutoObject(
A.Device.Device).O$,0);A.pe([this,this.A2F],this);},Ee:function(G){A._GetAutoObject(
C.AY).Fm();},A2F:function(G){this.XX.Cc(-1);this.IT.Y(!this.FQ.AX.Ch());},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.FQ._Init.call(this.FQ={I:this},0);C.
AdW._Init.call(this.AdW={I:this},0);C.XX._Init.call(this.XX={I:this},0);A.acg.DR.
_Init.call(this.DR={I:this},0);C.Akk._Init.call(this.IT={I:this},0);this.__proto__=
C.AMM;this.N.Y(true);this.Dr(C.ANJ);this.FQ.H(Asu);this.FQ.NN(C.Amh);this.AdW.H(
KP);this.XX.H(Ask);this.DR.DK(BoL);this.DR.DY(BoM);this.DR.NO(3);this.DR.L(A.jb.
Text);this.IT.H(AnN);this.IT.R((A.aaR(A.acf.A6h)+AYg)+A.aaR(A.acf.A4E));this.J(this.
FQ,0);this.J(this.AdW,0);this.J(this.XX,0);this.J(this.DR,0);this.J(this.IT,0);this.
N.Cw=[this,this.Ee];this.N.CS(A.aaL(A.ach.EV));this.FQ.YV(A._GetAutoObject(A.Device.
Device).O$);this.XX.YV(A._GetAutoObject(A.Device.Device).O$);this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.FQ._Done();this.AdW._Done();this.XX._Done();
this.DR._Done();this.IT._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.FQ._ReInit();this.AdW._ReInit();this.XX._ReInit();this.DR.
_ReInit();this.IT._ReInit();this.IT.R((A.aaR(A.acf.A6h)+AYg)+A.aaR(A.acf.A4E));this.
CT();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.FQ)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XX).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AMP={Ats:null,Atr:null,Atu:null,Att:null,Atw:null,Atv:null,Aty:null,Atx:null
,Z9:null,X5:null,AaJ:null,AaI:null,RatedAttribute:0,Init:function(aArg){this.Sj(
2);},Du:function(G){var DW=(A.Core.BJ.isPrototypeOf(G)?G:null);switch(DW.CI){case
6:switch(this.RatedAttribute){case 2:this.Sj(3);break;case 1:this.Sj(2);break;case
4:this.Sj(1);break;case 3:this.Sj(4);break;default:this.Sj(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Sj(1);break;case 1:this.Sj(4);break;case 4:this.
Sj(3);break;case 3:this.Sj(2);break;default:this.Sj(0);}break;default:DW.Ny=true;
}},Apt:function(LV,Acp){if(!LV)return;var Fk=A._NewObject(A.Device.Filter,0);var
HO=A._NewObject(A.Device.Int32FilterCriterion,0);HO.Initialize(1,0,Acp,true);Fk.
CZ(HO);var AzV=A._NewObject(A.Device.AssessmentFilterCriterion,0);AzV.Initialize(
3,5,0,true);Fk.CZ(AzV);LV.Bm(Fk);},AhW:function(G){var Apr=0;var A12=A._GetAutoObject(
A.Device.Device).Bq.Ch();var BT=A._NewObject(A.Device.Rating,0);while(Apr<A12){BT.
EK(Apr,A._GetAutoObject(A.Device.Device).Bq);this.Bbc(BT,0);var By3=A._GetAutoObject(
A.Device.Helper).Ze(2);this.Bbc(BT,By3);Apr++;}C.Fn.AhW.call(this,G);},ZS:function(
G){A.pe([this,this.BaR],this);C.Fn.ZS.call(this,G);},AcQ:function(G){this.Ats=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Atr=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Att=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Atu=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Atv=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Atw=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Atx=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Aty=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fn.AcQ.
call(this,G);},DD:function(G){C.Fn.DD.call(this,G);this.N.Oz(true);this.N.OA(true
);},Bbc:function(DU,A$Q){if(!DU||(DU.Timestamp<A$Q))return;if(!A$Q){this.Ats.Set(
DU.Appearance,this.Ats.Get(DU.Appearance)+1);this.Atu.Set(DU.Faeces,this.Atu.Get(
DU.Faeces)+1);this.Atw.Set(DU.Feed,this.Atw.Get(DU.Feed)+1);this.Aty.Set(DU.Respiratory
,this.Aty.Get(DU.Respiratory)+1);}else{this.Atr.Set(DU.Appearance,this.Atr.Get(DU.
Appearance)+1);this.Att.Set(DU.Faeces,this.Att.Get(DU.Faeces)+1);this.Atv.Set(DU.
Feed,this.Atv.Get(DU.Feed)+1);this.Atx.Set(DU.Respiratory,this.Atx.Get(DU.Respiratory
)+1);}},Sj:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
X5.Kg(this.Z9.Lm(E));A.pe([this,this.BaR],this);},BaR:function(G){var Z_=null;var
Z$=null;switch(this.RatedAttribute){case 2:{Z_=this.Atr;Z$=this.Ats;}break;case 4:{
Z_=this.Att;Z$=this.Atu;}break;case 1:{Z_=this.Atv;Z$=this.Atw;}break;case 0:{Z_=
A._NewObject(A.Device.Int32ArrayWrapper,0);Z$=A._NewObject(A.Device.Int32ArrayWrapper
,0);}break;case 3:{Z_=this.Atx;Z$=this.Aty;}break;default:throw new Error(BoN+this.
RatedAttribute.toFixed());}var AE9=A._NewObject(A.acu.ASC,0);AE9.Of(Z_.Get(3),A.
jb.EU);AE9.Of(Z_.Get(2),A.jb.HZ);AE9.Of(Z_.Get(1),A.jb.FW);var AE_=A._NewObject(
A.acu.ASC,0);AE_.Of(Z$.Get(3),A.jb.EU);AE_.Of(Z$.Get(2),A.jb.HZ);AE_.Of(Z$.Get(1
),A.jb.FW);this.AaI.AbD(AE9);this.AaJ.AbD(AE_);var A2q=Z_.Amr()-Z_.Get(5);var Bdg=
0;var Bde=0;if(A2q>0){Bdg=(Z_.Get(2)/A2q)*100;Bde=(Z_.Get(1)/A2q)*100;}var AJP=Z$.
Amr()-Z$.Get(5);this.IT.Y(!AJP);var Bdh=0;var Bdf=0;if(AJP>0){Bdh=(Z$.Get(2)/AJP
)*100;Bdf=(Z$.Get(1)/AJP)*100;}this.AaI.A8K(A.abk(Bdg,0,0)+Ae9);this.AaI.A8p(A.abk(
Bde,0,0)+Ae9);this.AaJ.A8K(A.abk(Bdh,0,0)+Ae9);this.AaJ.A8p(A.abk(Bdf,0,0)+Ae9);
},_Init:function(aArg){C.Fn._Init.call(this,aArg);A.Device.RatedAttributeToString.
_Init.call(this.Z9={I:this},0);C.Nv._Init.call(this.X5={I:this},0);C.ABB._Init.call(
this.AaJ={I:this},0);C.ABB._Init.call(this.AaI={I:this},0);this.__proto__=C.AMP;
this.Dr(C.ANK);this.Aj1(A.aaR(A.acf.A4F));this.Aet(A.aaR(A.acf.AmT));this.X5.H(KP
);this.X5.Aj(true);this.X5.U(A.aaR(A.acf.Awu)+A.aaR(A.acf.Colon));this.X5.Bf(false
);this.X5.BkG(false);this.AaJ.H(BoO);this.AaJ.U(A.aaR(A.acf.AEV));this.AaI.H(BoP
);this.AaI.U(A.aaR(A.acf.A5G));this.IT.H(AnN);this.J(this.X5,-1);this.J(this.AaJ
,-1);this.J(this.AaI,-1);this.Ats=A._NewObject(A.Device.Int32ArrayWrapper,0);this.
Atr=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Atu=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Att=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Atw=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Atv=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Aty=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Atx=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Fn;this.
Z9._Done();this.X5._Done();this.AaJ._Done();this.AaI._Done();C.Fn._Done.call(this
);},_ReInit:function(){C.Fn._ReInit.call(this);this.Z9._ReInit();this.X5._ReInit(
);this.AaJ._ReInit();this.AaI._ReInit();this.Aj1(A.aaR(A.acf.A4F));this.Aet(A.aaR(
A.acf.AmT));this.X5.U(A.aaR(A.acf.Awu)+A.aaR(A.acf.Colon));this.AaJ.U(A.aaR(A.acf.
AEV));this.AaI.U(A.aaR(A.acf.A5G));},_Mark:function(D){var B;C.Fn._Mark.call(this
,D);if((B=this.Ats)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Atr)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Atu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Att)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Atw)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Atv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aty)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Atx)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Z9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X5)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AaJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaI
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AMQ={AdV:null,Uo:null,Uq:null,AdU:null,Ul:null,Um:null,AIs:0,AIr:0,AH9:0,AH8:
0,AcJ:false,CT:function(){this.ZS(this);},Apt:function(LV,Acp){if(!LV)return;var
Fk=A._NewObject(A.Device.Filter,0);var HO=A._NewObject(A.Device.Int32FilterCriterion
,0);HO.Initialize(1,0,Acp,true);Fk.CZ(HO);var AAb=A._NewObject(A.Device.Int32FilterCriterion
,0);AAb.Initialize(7,2,0,true);Fk.CZ(AAb);LV.Bm(Fk);},AhW:function(G){if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===2)this.AIs++;else if(A._GetAutoObject(
A.Device.Helper).W.LastRatingTemperature===1)this.AIr++;var Apr=0;var A12=A._GetAutoObject(
A.Device.Device).Bq.Ch();var Atq;var AAt=0;while(Apr<A12){this.AcJ=true;Atq=A._GetAutoObject(
A.Device.Device).Bq.IU(Apr,9);if(Atq===1)AAt=1;else if((Atq===2)&&(AAt!==1))AAt=
2;Apr++;}if(AAt===1)this.AH8++;else if(AAt===2)this.AH9++;C.Fn.AhW.call(this,G);
},ZS:function(G){var Bdc=0;var Bdd=0;if(this.SU>0){Bdc=(this.AIs/this.SU)*100;Bdd=(
this.AIr/this.SU)*100;}this.Uo.Kg(((((((A.abk(Bdc,0,0)+AHn)+this.AIs.toFixed())+
CO)+A.aaR(A.acf.ADe))+CO)+this.SU.toFixed())+OQ);this.Uq.Kg(((((((A.abk(Bdd,0,0)+
AHn)+this.AIr.toFixed())+CO)+A.aaR(A.acf.ADe))+CO)+this.SU.toFixed())+OQ);var Bda=
0;var Bdb=0;if(this.SU>0){Bda=(this.AH9/this.SU)*100;Bdb=(this.AH8/this.SU)*100;
}this.Ul.Kg(((((((A.abk(Bda,0,0)+AHn)+this.AH9.toFixed())+CO)+A.aaR(A.acf.ADe))+
CO)+this.SU.toFixed())+OQ);this.Um.Kg(((((((A.abk(Bdb,0,0)+AHn)+this.AH8.toFixed(
))+CO)+A.aaR(A.acf.ADe))+CO)+this.SU.toFixed())+OQ);this.IT.Y(!this.AcJ);C.Fn.ZS.
call(this,G);},AcQ:function(G){this.AH8=0;this.AH9=0;this.AIr=0;this.AIs=0;this.
AcJ=false;C.Fn.AcQ.call(this,G);},_Init:function(aArg){C.Fn._Init.call(this,aArg
);C.AfX._Init.call(this.AdV={I:this},0);C.AiV._Init.call(this.Uo={I:this},0);C.AiV.
_Init.call(this.Uq={I:this},0);C.AfX._Init.call(this.AdU={I:this},0);C.AiV._Init.
call(this.Ul={I:this},0);C.AiV._Init.call(this.Um={I:this},0);this.__proto__=C.AMQ;
this.Dr(C.ANL);this.Aj1(A.aaR(A.acf.A4G));this.Aet(A.aaR(A.acf.AqI));this.AdV.H(
KP);this.AdV.Aj(true);this.AdV.U(A.aaR(A.acf.A4K));this.AdV.Bf(false);this.Uo.H(
Q6);this.Uo.Aj(true);this.Uo.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Uo.
Bf(true);this.Uo.Aj9(2);this.Uq.H(WJ);this.Uq.Aj(true);this.Uq.U(A.aaR(A.acf.AuR
)+A.aaR(A.acf.Colon));this.Uq.Bf(true);this.Uq.Aj9(1);this.AdU.H(AkJ);this.AdU.Aj(
true);this.AdU.U(A.aaR(A.acf.A4L));this.AdU.Bf(false);this.Ul.H(AnQ);this.Ul.Aj(
true);this.Ul.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Ul.Bf(true);this.
Ul.Aj9(2);this.Um.H(Ask);this.Um.Aj(true);this.Um.U(A.aaR(A.acf.AuR)+A.aaR(A.acf.
Colon));this.Um.Bf(true);this.Um.Aj9(1);this.J(this.AdV,0);this.J(this.Uo,0);this.
J(this.Uq,0);this.J(this.AdU,0);this.J(this.Ul,0);this.J(this.Um,0);this.Uo.S(A.
aaL(A.fl.Ak));this.Uq.S(A.aaL(A.fl.Ak));this.Ul.S(A.aaL(A.fl.Ak));this.Um.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fn;this.AdV._Done();this.Uo._Done(
);this.Uq._Done();this.AdU._Done();this.Ul._Done();this.Um._Done();C.Fn._Done.call(
this);},_ReInit:function(){C.Fn._ReInit.call(this);this.AdV._ReInit();this.Uo._ReInit(
);this.Uq._ReInit();this.AdU._ReInit();this.Ul._ReInit();this.Um._ReInit();this.
Aj1(A.aaR(A.acf.A4G));this.Aet(A.aaR(A.acf.AqI));this.AdV.U(A.aaR(A.acf.A4K));this.
Uo.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Uq.U(A.aaR(A.acf.AuR)+A.aaR(
A.acf.Colon));this.AdU.U(A.aaR(A.acf.A4L));this.Ul.U(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.Um.U(A.aaR(A.acf.AuR)+A.aaR(A.acf.Colon));this.Uo.S(A.aaL(A.fl.
Ak));this.Uq.S(A.aaL(A.fl.Ak));this.Ul.S(A.aaL(A.fl.Ak));this.Um.S(A.aaL(A.fl.Ak
));this.CT();},_Mark:function(D){var B;C.Fn._Mark.call(this,D);if((B=this.AdV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Uq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdU)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ul)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Um)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.Ap4={K0:null
,AiH:null,AiI:null,AlR:null,AaW:null,Wt:null,AaT:null,SC:null,AaU:null,SE:null,AaX:
null,Wu:null,Av:null,AcE:0,Azo:0,AoS:0,A0R:0,BbH:0,CT:function(){this.ZS(this);}
,Du:function(G){switch(this.Cl.CI){case 4:{if(this.IT.Fe())return;var Qg=this.Z.
Bp[1]+80;this.Z.Gc([this.Z.Bp[0],Qg]);this.Z.U6(null,null);}break;case 5:{if(this.
IT.Fe())return;var Qg=this.Z.Bp[1]-80;this.Z.Gc([this.Z.Bp[0],Qg]);this.Z.U6(null
,null);}break;default:C.Fn.Du.call(this,G);}},Apt:function(LV,Acp){if(!LV)return;
var Fk=A._NewObject(A.Device.Filter,0);var HO=A._NewObject(A.Device.Int32FilterCriterion
,0);HO.Initialize(1,0,Acp,true);Fk.CZ(HO);var AcA=A._NewObject(A.Device.Int32FilterCriterion
,0);AcA.Initialize(8,2,0,true);Fk.CZ(AcA);LV.Bm(Fk);},AhW:function(G){if(this.Bbx(
)){this.K0.Of(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).W.Aqu()){var P4=A._GetAutoObject(A.Device.Helper).MF(A._GetAutoObject(
A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing
);if(P4>0){var A0o=A._GetAutoObject(A.acj.DM).Ak2(P4,A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).W.LastBodyWeight);this.AiH.
Of(A0o);}}var A08=A._GetAutoObject(A.Device.Device).Bq.Ch()-2;if(A08>=0){var Bw2=
A._GetAutoObject(A.Device.Device).Bq.ABU(A08,8);var Bw1=A._GetAutoObject(A.Device.
Device).Bq.Hy(A08,6);var P4=A._GetAutoObject(A.Device.Helper).MF(Bw1,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);if(P4>0){var A0o=((A._GetAutoObject(A.
Device.Helper).W.LastBodyWeight-Bw2)/P4)|0;this.AiI.Of(A0o);}}if((A._GetAutoObject(
A.Device.Helper).W.Aqu()&&((A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).W.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).W.Td()<=180)){var AJ_=A._GetAutoObject(A.Device.Helper).W.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight;var S5=A._GetAutoObject(A.Device.
Helper).MF(A._GetAutoObject(A.Device.Helper).W.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).W.TimestampLastWeighing);var Byd=A._GetAutoObject(A.Device.Helper
).W.FirstBodyWeight/(AJ_/S5);this.AlR.Of(Byd);}if(A._GetAutoObject(A.Device.Helper
).W.AnimalType===1){this.AcE++;this.AoS=A._GetAutoObject(A.Device.Helper).W.VisualId;
}if(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).Ze(7)){this.Azo++;this.A0R=A._GetAutoObject(A.Device.Helper).W.VisualId;
this.BbH=A._GetAutoObject(A.Device.Helper).MF(A._GetAutoObject(A.Device.Helper).
W.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dy());}}C.Fn.AhW.call(
this,G);},ZS:function(G){var A2O=this.AiH.Ajl()|0;var A2Q=this.AiI.Ajl()|0;if(this.
AcE>1)A._GetAutoObject(A.Device.Device).A6(56,true,this.AcE.toFixed(),0,null);if(
this.AcE===1)A._GetAutoObject(A.Device.Device).A6(53,true,this.AoS.toFixed(),0,null
);if(this.Azo>1)A._GetAutoObject(A.Device.Device).A6(52,true,this.Azo.toFixed(),
0,null);if(this.Azo===1)A._GetAutoObject(A.Device.Device).A6(57,true,(this.A0R.toFixed(
)+Asr)+this.BbH.toFixed(),0,null);if(this.K0.AV>0)this.Wt.U(((((((A._GetAutoObject(
A.Device.Converter).Aw2(this.K0.Ajl()|0,1)+AxC)+A._GetAutoObject(A.Device.Converter
).Aw2(this.K0.Aqb()|0,1))+CO)+A._GetAutoObject(A.acj.DM).Afu())+AxD)+this.K0.AV.
toFixed())+OQ);else this.Wt.U(A.aaR(A.acf.Unknown));if(this.AiH.AV>0)this.SC.U(((((((
A._GetAutoObject(A.Device.Converter).SJ(A2O,2,true)+AxC)+A._GetAutoObject(A.Device.
Converter).SJ(this.AiH.Aqb()|0,2,true))+CO)+A._GetAutoObject(A.acj.DM).ZX())+AxD
)+this.AiH.AV.toFixed())+OQ);else this.SC.U(A.aaR(A.acf.Unknown));if(this.AiI.AV>
0)this.SE.U(((((((A._GetAutoObject(A.Device.Converter).SJ(A2Q,2,true)+AxC)+A._GetAutoObject(
A.Device.Converter).SJ(this.AiI.Aqb()|0,2,true))+CO)+A._GetAutoObject(A.acj.DM).
ZX())+AxD)+this.AiI.AV.toFixed())+OQ);else this.SE.U(A.aaR(A.acf.Unknown));if(this.
AlR.AV>0)this.Wu.U(((((((A.abk(this.AlR.Ajl(),0,1)+AxC)+A.abk(this.AlR.Aqb(),0,1
))+CO)+A.aaR(A.acf.Bfs))+AxD)+this.AlR.AV.toFixed())+OQ);else this.Wu.U(A.aaR(A.
acf.Unknown));var A2P=0;var A2R=0;var AcJ=false;if(this.K0.AV>0)AcJ=true;var H5=
0;if(!!A._GetAutoObject(A.Device.Device).Aq.Filter){var AIL=A._GetAutoObject(A.Device.
Device).Aq.Filter.DX(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AIL)?AIL:null))H5=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AIL)?AIL:null
).A4;}if(this.AiH.AV>0){AcJ=true;A2P=A._GetAutoObject(A.Device.Converter).A9X(A2O
,H5);}if(this.AiI.AV>0){AcJ=true;A2R=A._GetAutoObject(A.Device.Converter).A9X(A2Q
,H5);}this.SC.Aj9(A2P);this.SE.Aj9(A2R);this.IT.Y(!AcJ);C.Fn.ZS.call(this,G);},AcQ:
function(G){this.K0.XQ();this.AiH.XQ();this.AiI.XQ();this.AlR.XQ();this.AcE=0;this.
Azo=0;this.AoS=0;this.A0R=0;C.Fn.AcQ.call(this,G);},E9:function(G){var B;this.Av.
Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.
Z.Bp[1]);},Bbx:function(){return A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0;},G4:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Fn._Init.call(
this,aArg);C.AfX._Init.call(this.AaW={I:this},0);C.It._Init.call(this.Wt={I:this
},0);C.AfX._Init.call(this.AaT={I:this},0);C.AiV._Init.call(this.SC={I:this},0);
C.AfX._Init.call(this.AaU={I:this},0);C.AiV._Init.call(this.SE={I:this},0);C.AfX.
_Init.call(this.AaX={I:this},0);C.It._Init.call(this.Wu={I:this},0);C.Av._Init.call(
this.Av={I:this},0);this.__proto__=C.Ap4;this.Dr(C.AuP);this.Aj1(A.aaR(A.acf.A4H
));this.Aet(A.aaR(A.acf.AjR));this.AaW.H(AsA);this.AaW.Aj(true);this.AaW.U(A.aaR(
A.acf.A3o));this.AaW.Bf(false);this.AaW.Kc(5);this.Wt.H(AYh);this.Wt.Aj(true);this.
Wt.U(A.jV);this.Wt.Bf(true);this.AaT.H(Asv);this.AaT.Aj(true);this.AaT.U(A.aaR(A.
acf.AKx));this.AaT.Bf(false);this.AaT.Kc(5);this.SC.H(Asw);this.SC.Aj(true);this.
SC.U(A.jV);this.SC.Bf(true);this.SC.Kg(A.jV);this.AaU.H(Asx);this.AaU.Aj(true);this.
AaU.U(A.aaR(A.acf.AtR));this.AaU.Bf(false);this.AaU.Kc(5);this.SE.H(BoQ);this.SE.
Aj(true);this.SE.U(A.jV);this.SE.Bf(true);this.SE.Kg(A.jV);this.AaX.H(AYi);this.
AaX.Aj(true);this.AaX.U(A.aaR(A.acf.A3H));this.AaX.Bf(false);this.AaX.Kc(5);this.
Wu.H(Ae_);this.Wu.Aj(true);this.Wu.U(A.jV);this.Wu.Bf(true);this.Av.H(II);this.J(
this.AaW,-1);this.J(this.Wt,-1);this.J(this.AaT,-1);this.J(this.SC,-1);this.J(this.
AaU,-1);this.J(this.SE,-1);this.J(this.AaX,-1);this.J(this.Wu,-1);this.J(this.Av
,-1);this.Z.Ei=[this,this.G4];this.K0=A._NewObject(C.Au$,0);this.AiH=A._NewObject(
C.Au$,0);this.AiI=A._NewObject(C.Au$,0);this.Wt.S(A.aaL(A.fl.Ah));this.SC.S(A.aaL(
A.fl.Ak));this.SE.S(A.aaL(A.fl.Ak));this.Wu.S(A.aaL(A.fl.Ak));this.AlR=A._NewObject(
C.A4R,0);},_Done:function(){this.__proto__=C.Fn;this.AaW._Done();this.Wt._Done();
this.AaT._Done();this.SC._Done();this.AaU._Done();this.SE._Done();this.AaX._Done(
);this.Wu._Done();this.Av._Done();C.Fn._Done.call(this);},_ReInit:function(){C.Fn.
_ReInit.call(this);this.AaW._ReInit();this.Wt._ReInit();this.AaT._ReInit();this.
SC._ReInit();this.AaU._ReInit();this.SE._ReInit();this.AaX._ReInit();this.Wu._ReInit(
);this.Av._ReInit();this.Aj1(A.aaR(A.acf.A4H));this.Aet(A.aaR(A.acf.AjR));this.AaW.
U(A.aaR(A.acf.A3o));this.AaT.U(A.aaR(A.acf.AKx));this.AaU.U(A.aaR(A.acf.AtR));this.
AaX.U(A.aaR(A.acf.A3H));this.Wt.S(A.aaL(A.fl.Ah));this.SC.S(A.aaL(A.fl.Ak));this.
SE.S(A.aaL(A.fl.Ak));this.Wu.S(A.aaL(A.fl.Ak));this.CT();},_Mark:function(D){var
B;C.Fn._Mark.call(this,D);if((B=this.K0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AiH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiI)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AlR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AaW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wt)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SC)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AaU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SE)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AaX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::EvaluationWeightsScreen"};C.AaS={_Init:function(aArg){C.Ajo._Init.
call(this,aArg);this.__proto__=C.AaS;this.Db.Ax(A.aaL(A.ach.ACr));},_className:"Application::HeaderEvaluationFilter"
};C.J9={CT:function(){this.Text.R(A.aaR(A.acf.None));},Eo:function(G){C.Ajo.Eo.call(
this,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter).Af1(A._GetAutoObject(A.Device.
Device).Jy));},_Init:function(aArg){C.Ajo._Init.call(this,aArg);this.__proto__=C.
J9;},_ReInit:function(){C.Ajo._ReInit.call(this);this.CT();},_className:"Application::HeaderListFilter"
};C.AuP={Init:function(aArg){this.Db.Ax(A._GetAutoObject(A.acj.DM).Ba7());},_Init:
function(aArg){C.AaS._Init.call(this,aArg);this.__proto__=C.AuP;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.ANL={Init:function(
aArg){this.Db.Ax(A.aaL(A.ach.Aa1));},_Init:function(aArg){C.AaS._Init.call(this,
aArg);this.__proto__=C.ANL;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.ANK={Init:function(aArg){this.Db.Ax(A.aaL(A.ach.Amw));},_Init:function(aArg){
C.AaS._Init.call(this,aArg);this.__proto__=C.ANK;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.ANJ={R1:null,Db:null,AN:null,CT:function(){this.R1.R(A.aaR(A.acf.ALP));},C7:
function(E){C.BO.C7.call(this,E);this.R1.L(E);this.Db.L(E);},_Init:function(aArg
){C.BO._Init.call(this,aArg);C.CP._Init.call(this.R1={I:this},0);A.acg.Am._Init.
call(this.Db={I:this},0);A.acg.DR._Init.call(this.AN={I:this},0);this.__proto__=
C.ANJ;this.R1.H(BoR);this.R1.R(A.aaR(A.acf.ALP));this.R1.A2(0x11);this.Db.H(BoS);
this.AN.DK(BoT);this.AN.DY(BoU);this.AN.L(A.jb.Bb);this.J(this.R1,0);this.J(this.
Db,0);this.J(this.AN,0);this.R1.S(A.aaL(A.fl.Ah));this.R1.A5(A.aaL(A.fl.Ak));this.
Db.Ax(A.aaL(A.ach.AOU));},_Done:function(){this.__proto__=C.BO;this.R1._Done();this.
Db._Done();this.AN._Done();C.BO._Done.call(this);},_ReInit:function(){C.BO._ReInit.
call(this);this.R1._ReInit();this.Db._ReInit();this.AN._ReInit();this.R1.R(A.aaR(
A.acf.ALP));this.R1.S(A.aaL(A.fl.Ah));this.R1.A5(A.aaL(A.fl.Ak));this.CT();},_Mark:
function(D){var B;C.BO._Mark.call(this,D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.AdW={TA:null,Ajw:
null,Aju:null,Ajv:null,_Init:function(aArg){C.Es._Init.call(this,aArg);C.CP._Init.
call(this.TA={I:this},0);A.acg.Am._Init.call(this.Ajw={I:this},0);A.acg.Am._Init.
call(this.Aju={I:this},0);A.acg.Am._Init.call(this.Ajv={I:this},0);this.__proto__=
C.AdW;this.TA.H(BoV);this.TA.R(A.aaR(A.acf.Year));this.TA.A2(0x11);this.TA.L(A.jb.
Text);this.Ajw.H(A_h);this.Ajw.L(A.jb.Text);this.Aju.H(BoW);this.Aju.L(A.jb.Text
);this.Ajv.H(BoX);this.Ajv.L(A.jb.Text);this.J(this.TA,0);this.J(this.Ajw,0);this.
J(this.Aju,0);this.J(this.Ajv,0);this.TA.S(A.aaL(A.fl.J8));this.TA.A5(A.aaL(A.fl.
Ia));this.Ajw.Ax(A.aaL(A.ach.AO5));this.Aju.Ax(A.aaL(A.ach.AO4));this.Ajv.Ax(A.aaL(
A.ach.APa));},_Done:function(){this.__proto__=C.Es;this.TA._Done();this.Ajw._Done(
);this.Aju._Done();this.Ajv._Done();C.Es._Done.call(this);},_ReInit:function(){C.
Es._ReInit.call(this);this.TA._ReInit();this.Ajw._ReInit();this.Aju._ReInit();this.
Ajv._ReInit();this.TA.R(A.aaR(A.acf.Year));this.TA.S(A.aaL(A.fl.J8));this.TA.A5(
A.aaL(A.fl.Ia));},_Mark:function(D){var B;C.Es._Mark.call(this,D);if((B=this.TA).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.Amh={Ai0:null,AN:null
,A9:null,D4:null,Ui:null,Sv:null,Ge:null,Xg:0,As2:0,Ak6:0,AAu:0,Init:function(aArg
){},Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.V.H(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Sv.H([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A9.H([this.Sv.M[2]-1,0,this.Sv.M[
2]+1,aSize[1]]);this.Ui.H([this.Sv.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
D4.H([this.Ui.M[2]-1,0,this.Ui.M[2]+1,aSize[1]]);this.Ge.H([this.Ui.M[2],0,aSize[
0],aSize[1]]);this.Ai0.H(this.Ge.M);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.
U(this.AAu.toFixed());this.Sv.L(this.V.AP);this.Sv.R(this.Ak6.toFixed());this.Ui.
L(this.V.AP);this.Ui.R(this.As2.toFixed());var BT=this.Byc(this.Xg);this.Ge.L(A.
_GetAutoObject(A.acj.Assessment).W6(BT));this.Ai0.L(A._GetAutoObject(A.acj.Assessment
).P9(BT));this.Ge.R(A.abk(this.Xg,0,0)+Ae9);},Cc:function(Ac){if(!this.AX)return;
this.Hr=Ac;Ac=(this.AX.Ch()-Ac)-1;if(!!this.AX){this.Ak6=this.AX.CA(Ac,1);this.As2=
this.AX.CA(Ac,2);this.AAu=this.AX.CA(Ac,0);if(this.Ak6>0)this.Xg=(this.As2/this.
Ak6)*100;else this.Xg=0;this.An();}},Byc:function(Xg){if(Xg>=8)return 1;else if(
Xg>=4)return 2;else return 3;},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.
acg.AI._Init.call(this.Ai0={I:this},0);A.acg.AI._Init.call(this.AN={I:this},0);A.
acg.AI._Init.call(this.A9={I:this},0);A.acg.AI._Init.call(this.D4={I:this},0);A.
acg.Text._Init.call(this.Ui={I:this},0);A.acg.Text._Init.call(this.Sv={I:this},0
);A.acg.Text._Init.call(this.Ge={I:this},0);this.__proto__=C.Amh;this.Ai0.H(AnO);
this.AN.L(A.jb.Bb);this.A9.L(A.jb.Bb);this.D4.H(AnO);this.D4.L(A.jb.Bb);this.Ui.
L(A.jb.Text);this.Sv.H(AnO);this.Sv.L(A.jb.Text);this.Ge.L(A.jb.Text);this.J(this.
Ai0,0);this.J(this.AN,0);this.J(this.A9,0);this.J(this.D4,0);this.J(this.Ui,0);this.
J(this.Sv,0);this.J(this.Ge,0);this.Ui.S(A.aaL(A.fl.Ah));this.Sv.S(A.aaL(A.fl.Ah
));this.Ge.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.
Ba;this.Ai0._Done();this.AN._Done();this.A9._Done();this.D4._Done();this.Ui._Done(
);this.Sv._Done();this.Ge._Done();C.Ba._Done.call(this);},_ReInit:function(){C.Ba.
_ReInit.call(this);this.Ai0._ReInit();this.AN._ReInit();this.A9._ReInit();this.D4.
_ReInit();this.Ui._ReInit();this.Sv._ReInit();this.Ge._ReInit();this.Ui.S(A.aaL(
A.fl.Ah));this.Sv.S(A.aaL(A.fl.Ah));this.Ge.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.Ba._Mark.call(this,D);if((B=this.Ai0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ui)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ge)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.AiV={
BP:null,AwX:A.jV,Rating:0,Ai:function(Ae){C.It.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).P9(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).W6(this.Rating));}this.BP.L(this.V.AP);},S:function(
E){C.It.S.call(this,E);if((E===A.aaL(A.fl.J8))||(E===A.aaL(A.fl.Ah)))this.BP.S(A.
aaL(A.fl.Ah));else if((E===A.aaL(A.fl.Ia))||(E===A.aaL(A.fl.Ak)))this.BP.S(A.aaL(
A.fl.Ak));else this.BP.S(E);},Kg:function(E){if(this.AwX===E)return;this.AwX=E;this.
BP.R(E);},Aj9:function(E){if(this.Rating===E)return;this.Rating=E;this.An();},_Init:
function(aArg){C.It._Init.call(this,aArg);A.acg.Text._Init.call(this.BP={I:this}
,0);this.__proto__=C.AiV;this.BP.AW(0x34);this.BP.H(ZI);this.BP.IZ(true);this.BP.
A2(0x11);this.BP.L(A.jb.Text);this.BP.Aj(true);this.J(this.BP,0);this.BP.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.It;this.BP._Done();C.It._Done.call(
this);},_ReInit:function(){C.It._ReInit.call(this);this.BP._ReInit();this.BP.S(A.
aaL(A.fl.Ah));},_Mark:function(D){var B;C.It._Mark.call(this,D);if((B=this.BP)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ABB={
NR:null,Sl:null,V:null,Ank:null,Anj:null,AbM:null,AbL:null,DE:Lo,A92:A.jV,A84:A.
jV,AbD:function(E){if(this.NR===E)return;this.NR=E;this.Sl.AbD(this.NR);},U:function(
E){if(this.DE===E)return;this.DE=E;this.V.R(E);},A8K:function(E){if(this.A92===E
)return;this.A92=E;this.AbM.R(E);},A8p:function(E){if(this.A84===E)return;this.A84=
E;this.AbL.R(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acu.Sl._Init.
call(this.Sl={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AI._Init.
call(this.Ank={I:this},0);A.acg.AI._Init.call(this.Anj={I:this},0);A.acg.Text._Init.
call(this.AbM={I:this},0);A.acg.Text._Init.call(this.AbL={I:this},0);this.__proto__=
C.ABB;this.H(BoY);this.Sl.H(BoZ);this.Sl.Ar(false);this.Sl.BkO(360);this.Sl.BkV(
0.5);this.V.AW(0x1D);this.V.H(WC);this.V.KI(true);this.V.R(Lo);this.V.L(A.jb.Text
);this.Ank.H(A_i);this.Ank.L(A.jb.HZ);this.Anj.H(A_j);this.Anj.L(A.jb.FW);this.AbM.
AW(0x1D);this.AbM.H(A_i);this.AbM.L(A.jb.Text);this.AbL.AW(0x1D);this.AbL.H(A_j);
this.AbL.L(A.jb.C0);this.J(this.Sl,0);this.J(this.V,0);this.J(this.Ank,0);this.J(
this.Anj,0);this.J(this.AbM,0);this.J(this.AbL,0);this.Sl.BkX(A.aaL(A.acu.ASf));
this.V.S(A.aaL(A.fl.Ak));this.AbM.S(A.aaL(A.fl.Ak));this.AbL.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.O;this.Sl._Done();this.V._Done();this.Ank.
_Done();this.Anj._Done();this.AbM._Done();this.AbL._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Sl._ReInit();this.V._ReInit(
);this.Ank._ReInit();this.Anj._ReInit();this.AbM._ReInit();this.AbL._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.AbM.S(A.aaL(A.fl.Ak));this.AbL.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.NR)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Ank)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Anj
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbM)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.Akk={Background:null,Text:null,String:A.jV,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.AI._Init.call(this.Background={I:this},0);C.CP._Init.call(this.Text={
I:this},0);this.__proto__=C.Akk;this.H(SO);this.Background.AW(0x3F);this.Background.
H(SO);this.Background.L(A.jb.Bhi);this.Text.AW(0x3F);this.Text.H(SO);this.Text.A2(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Ah));this.Text.A5(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Text._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Ah));this.Text.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.QX={Akv:null,NH:null,C5:null,Ab9:null,JB:null,TemperatureUnit:null,Mu:null,PF:
null,RX:null,T9:null,Lj:null,I4:null,Zq:null,Zp:null,RZ:null,Hv:null,Aja:null,Init:
function(aArg){this.TemperatureUnit.R(A._GetAutoObject(A.acj.Temperature).Alc());
this.T9.R(A._GetAutoObject(A.acj.Temperature).Alc());this.RZ.Y(!A._GetAutoObject(
A.Device.Device).Amj);},Ai:function(Ae){C.AB.Ai.call(this,Ae);this.AnB();this.AwU(
);this.Ab$();this.AwV();},IP:function(G){this.Wj(this);},CJ:function(G){var B;C.
AB.CJ.call(this,G);A.zX([this,this.AJh],[B=A._GetAutoObject(A.Device.Device),B.ADq
,B.AHy],0);A.zX([this,this.AzD],[B=A._GetAutoObject(A.Device.Device),B.ADt,B.AHA
],0);A.zX([this,this.AzD],[B=A._GetAutoObject(A.Device.Device),B.AQ$,B.AYy],0);A.
zX([this,this.A1s],[B=A._GetAutoObject(A.Device.Device),B.AqM,B.AsE],0);A.zX([this
,this.A1k],[B=A._GetAutoObject(A.Device.Device),B.ADn,B.AHv],0);A._GetAutoObject(
A.Device.Device).Aha();if(A._GetAutoObject(A.Device.Device).Amj)A._GetAutoObject(
A.Device.Device).Aem(true);A._GetAutoObject(A.Device.Device).AwI();A.pe([this,this.
A1k],this);A.pe([this,this.AzD],this);A.pe([this,this.A1s],this);},Fd:function(G
){var B;A._GetAutoObject(A.Device.Device).Aha();A._GetAutoObject(A.Device.Device
).T4(false);A._GetAutoObject(A.Device.Device).Aev(false);A._GetAutoObject(A.Device.
Device).Aem(false);A.z$([this,this.AJh],[B=A._GetAutoObject(A.Device.Device),B.ADq
,B.AHy],0);A.z$([this,this.AzD],[B=A._GetAutoObject(A.Device.Device),B.ADt,B.AHA
],0);A.z$([this,this.AzD],[B=A._GetAutoObject(A.Device.Device),B.AQ$,B.AYy],0);A.
z$([this,this.A1s],[B=A._GetAutoObject(A.Device.Device),B.AqM,B.AsE],0);A.z$([this
,this.A1k],[B=A._GetAutoObject(A.Device.Device),B.ADn,B.AHv],0);},AzD:function(G
){this.An();},AnB:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CE);this.C5.L(A.jb.FW);this.JB.L(this.C5.AP);this.
Mu.L(this.C5.AP);this.TemperatureUnit.L(this.C5.AP);}break;default:{this.Background.
L(A.jb.CE);this.C5.L(A.jb.AR);this.JB.L(A.jb.Text);this.Mu.L(this.JB.AP);this.TemperatureUnit.
L(this.JB.AP);this.Hv.L(A.jb.FW);}}},AwU:function(){this.Akv.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JB.R(A.aaR(A.acf.ACH));this.C5.Ax(A.aaL(A.ach.Au2));this.C5.Ct(0);
this.NH.Ct(0);}break;case 1:{this.ATP(A._GetAutoObject(A.Device.Device).Kk,false
);this.C5.Ax(A.aaL(A.ach.Au2));this.NH.Ct(0);}break;case 2:{this.RX.R(A._GetAutoObject(
A.Device.Converter).Aku(A._GetAutoObject(A.Device.Device).AEZ));this.ATP(A._GetAutoObject(
A.Device.Device).Kk,false);this.C5.Ax(null);this.NH.Ct(1);this.Ab9.Y(true);this.
PF.Y(true);this.RX.Y(true);this.T9.Y(true);}break;case 3:{this.ASW();this.ATP(A.
_GetAutoObject(A.Device.Device).Kk,true);this.Ab9.Y(false);this.PF.Y(false);this.
RX.Y(false);this.T9.Y(false);}break;case 4:{this.JB.R(A.aaR(A.acf.Bhv));this.Mu.
R(A.aaR(A.act.AjQ));this.C5.Ax(A.aaL(A.ach.Au4));this.C5.Ct(2);this.NH.Ct(0);}break;
default:A.ab5("%s%e",AGM,A._GetAutoObject(A.Device.Device).MeasureState);}},Ab$:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Kk<=3240)||(A._GetAutoObject(A.Device.Device
).Kk>=5460))this.N.C2(null);else this.N.C2(A.aaL(A.ach.AdZ));this.N.Cm(null);}break;
default:;}},ArV:function(G){A._GetAutoObject(C.AY).Fm();},Wj:function(G){},AYK:function(
s){this.Wj(s);},Akp:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.Bx1(this);break;default:;}},AYJ:function(s){this.Akp(s);},ATP:
function(Aoa,BwS){if(BwS)this.Lj.L(A.jb.Bh);else this.Lj.L(A.jb.FW);if(Aoa<=3240
){this.Mu.Y(false);this.TemperatureUnit.Y(false);this.Lj.Y(true);this.Lj.R(A.aaR(
A.act.ATB));}else if(Aoa>=5460){this.Mu.Y(false);this.TemperatureUnit.Y(false);this.
Lj.Y(true);this.Lj.R(A.aaR(A.act.Bnc));}else{this.Mu.Y(true);this.TemperatureUnit.
Y(true);this.Lj.Y(false);this.Mu.R(A._GetAutoObject(A.Device.Converter).Aku(Aoa)
);}},AwV:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Kk<=3240)||(A._GetAutoObject(A.Device.
Device).Kk>=5460))this.JB.R(A.aaR(A.acf.ACH));else this.JB.R(A.aaR(A.acf.BnN));break;
default:;}},AwW:function(){},Bnw:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Zq.Ar(true);break;case 4:this.Zp.Ar(true);break;default:{
this.Zq.Ar(false);this.Zp.Ar(false);A._GetAutoObject(A.Device.Device).Aev(false);
}}},AJh:function(G){this.An();this.AwW();this.Bnw();this.Bnu();},A1s:function(G){
if(A._GetAutoObject(A.Device.Device).Amk){this.RZ.L(A.jb.HZ);this.RZ.Ct(1);}else{
this.RZ.L(A.jb.Bh);this.RZ.Ct(0);}},Bx1:function(G){if(!A._GetAutoObject(A.Device.
Device).Amj)A._GetAutoObject(A.Device.Device).Aem(!A._GetAutoObject(A.Device.Device
).Amk);},Bnu:function(){if(A._GetAutoObject(A.Device.Device).Amj){this.RZ.Y(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Aem(true);else A._GetAutoObject(A.Device.Device).Aem(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.RZ.Y(true);else this.RZ.Y(false);},AJj:function(
G){this.CJ(this);},ASW:function(){A.ab5("%s",A_g);},A1k:function(G){if(A._GetAutoObject(
A.Device.Device).Hv){this.JB.H(Bo0);this.Mu.H(Bo1);this.TemperatureUnit.H(Bo2);}
else{this.JB.H(Bo3);this.Mu.H(Bo4);this.TemperatureUnit.H(Bo5);}},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.acl.FZ._Init.call(this.Akv={I:this},0);A.acg.
Am._Init.call(this.NH={I:this},0);A.acg.Am._Init.call(this.C5={I:this},0);A.acg.
Am._Init.call(this.Ab9={I:this},0);A.acg.Text._Init.call(this.JB={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.Mu={
I:this},0);A.acg.Text._Init.call(this.PF={I:this},0);A.acg.Text._Init.call(this.
RX={I:this},0);A.acg.Text._Init.call(this.T9={I:this},0);C.CP._Init.call(this.Lj={
I:this},0);A.Device.Tn._Init.call(this.I4={I:this},0);A.Device.Tn._Init.call(this.
Zq={I:this},0);A.Device.Tn._Init.call(this.Zp={I:this},0);A.acg.Am._Init.call(this.
RZ={I:this},0);C.CP._Init.call(this.Hv={I:this},0);A.acl.Tn._Init.call(this.Aja={
I:this},0);this.__proto__=C.QX;var B;this.N.Y(true);this.Akv.Ff(1000);this.Akv.BY=
2;this.NH.H(Bo6);this.NH.L(A.jb.C0);this.C5.H(Bo7);this.C5.L(A.jb.AR);this.C5.Ct(
0);this.C5.Y(true);this.Ab9.H(Bo8);this.Ab9.L(A.jb.Text);this.Ab9.Y(false);this.
JB.KI(true);this.JB.R(A.aaR(A.acf.ACH));this.JB.L(A.jb.Text);this.TemperatureUnit.
A2(0x9);this.TemperatureUnit.L(A.jb.Text);this.Mu.A2(0x14);this.Mu.R(A.aaR(A.act.
AjQ));this.Mu.L(A.jb.Text);this.PF.H(Bo9);this.PF.R(A.aaR(A.acf.PF));this.PF.L(A.
jb.Text);this.PF.Y(false);this.RX.H(Bo_);this.RX.A2(0x14);this.RX.R(Bo$);this.RX.
L(A.jb.Text);this.RX.Y(false);this.T9.H(Bpa);this.T9.R(Bpb);this.T9.L(A.jb.Text);
this.T9.Y(false);this.Lj.H(Bpc);this.Lj.R(A.aaR(A.act.ATB));this.Lj.A2(0x12);this.
Lj.L(A.jb.FW);this.I4.BY=false;this.I4.Cq=true;this.I4.HF(1);this.I4.Ff(4000);this.
I4.T1(0);this.Zq.BY=false;this.Zq.Cq=true;this.Zq.HF(2);this.Zq.Ff(400);this.Zq.
T1(200);this.Zp.BY=false;this.Zp.Cq=true;this.Zp.HF(3);this.Zp.Ff(500);this.Zp.T1(
250);this.RZ.H(Bpd);this.Hv.H(Bpe);this.Hv.Y(A._GetAutoObject(A.Device.Device).Hv
);this.Hv.R(A.aaR(A.acf.Hv));this.Hv.A2(0x12);this.Hv.L(A.jb.FW);this.Aja.Ar(A._GetAutoObject(
A.Device.Device).Hv);this.Aja.Ff(500);this.Aja.T1(1000);this.J(this.NH,0);this.J(
this.C5,0);this.J(this.Ab9,0);this.J(this.JB,0);this.J(this.TemperatureUnit,0);this.
J(this.Mu,0);this.J(this.PF,0);this.J(this.RX,0);this.J(this.T9,0);this.J(this.Lj
,0);this.J(this.RZ,0);this.J(this.Hv,0);this.N.Cw=[this,this.ArV];this.N.Cg=[this
,this.AYJ];this.N.Cb=[this,this.AYK];this.N.CS(A.aaL(A.ach.AdY));this.Akv.Q=[B=this.
C5,B.AQ1,B.Ct];this.NH.Ax(A.aaL(A.ach.NH));this.C5.Ax(A.aaL(A.ach.Au2));this.Ab9.
Ax(A.aaL(A.ach.APk));this.JB.S(A.aaL(A.fl.Ah));this.TemperatureUnit.S(A.aaL(A.fl.
Ah));this.Mu.S(A.aaL(A.fl.AdS));this.PF.S(A.aaL(A.fl.Ah));this.RX.S(A.aaL(A.fl.Ez
));this.T9.S(A.aaL(A.fl.Ez));this.Lj.S(A.aaL(A.fl.AdS));this.Lj.A5(A.aaL(A.fl.Ez
));this.Lj.CC(A.aaL(A.fl.Ah));this.I4.Q=[B=A._GetAutoObject(A.Device.Device),B.ARh
,B.AYE];this.Zq.Q=[B=A._GetAutoObject(A.Device.Device),B.ADu,B.AHB];this.Zp.Q=[B=
A._GetAutoObject(A.Device.Device),B.ADu,B.AHB];this.RZ.Ax(A.aaL(A.ach.Ap7));this.
Hv.S(A.aaL(A.fl.Ez));this.Hv.A5(A.aaL(A.fl.J8));this.Hv.CC(A.aaL(A.fl.Ia));this.
Aja.Q=[B=this.Hv,B.Fe,B.Y];this.Init(aArg);},_Done:function(){this.__proto__=C.AB;
this.Akv._Done();this.NH._Done();this.C5._Done();this.Ab9._Done();this.JB._Done(
);this.TemperatureUnit._Done();this.Mu._Done();this.PF._Done();this.RX._Done();this.
T9._Done();this.Lj._Done();this.I4._Done();this.Zq._Done();this.Zp._Done();this.
RZ._Done();this.Hv._Done();this.Aja._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.Akv._ReInit();this.NH._ReInit();this.C5._ReInit();
this.Ab9._ReInit();this.JB._ReInit();this.TemperatureUnit._ReInit();this.Mu._ReInit(
);this.PF._ReInit();this.RX._ReInit();this.T9._ReInit();this.Lj._ReInit();this.I4.
_ReInit();this.Zq._ReInit();this.Zp._ReInit();this.RZ._ReInit();this.Hv._ReInit(
);this.Aja._ReInit();this.JB.R(A.aaR(A.acf.ACH));this.Mu.R(A.aaR(A.act.AjQ));this.
PF.R(A.aaR(A.acf.PF));this.Lj.R(A.aaR(A.act.ATB));this.Hv.R(A.aaR(A.acf.Hv));this.
JB.S(A.aaL(A.fl.Ah));this.TemperatureUnit.S(A.aaL(A.fl.Ah));this.Mu.S(A.aaL(A.fl.
AdS));this.PF.S(A.aaL(A.fl.Ah));this.RX.S(A.aaL(A.fl.Ez));this.T9.S(A.aaL(A.fl.Ez
));this.Lj.S(A.aaL(A.fl.AdS));this.Lj.A5(A.aaL(A.fl.Ez));this.Lj.CC(A.aaL(A.fl.Ah
));this.Hv.S(A.aaL(A.fl.Ez));this.Hv.A5(A.aaL(A.fl.J8));this.Hv.CC(A.aaL(A.fl.Ia
));},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Akv)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ab9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zq)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Hv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aja)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.ATp={Ab$:
function(){C.QX.Ab$.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cm(null);this.N.C2(A.aaL(A.ach.Au5));}break;default:;}},
Wj:function(G){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Kk>3240)&&(A._GetAutoObject(A.Device.Device
).Kk<5460)){A._GetAutoObject(A.Device.Device).Aha();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AJj(this);break;default:;}},AwV:
function(){C.QX.AwV.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JB.R(A.aaR(A.acf.Bhw));break;default:;}},AwW:function(){C.QX.AwW.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).V$(16711680);this.I4.Ar(true);}break;default:this.I4.Ar(false);
}},ASW:function(){this.C5.Ax(A.aaL(A.ach.Au4));this.C5.Ct(0);this.NH.Ct(0);},_Init:
function(aArg){C.QX._Init.call(this,aArg);this.__proto__=C.ATp;this.Dr(C.ANH);},
_className:"Application::TemperatureMeasurementScreen"};C.ANM={Db:null,IA:null,NJ:
null,AN:null,Ags:null,A9:null,C7:function(E){C.BO.C7.call(this,E);this.Db.L(E);this.
IA.L(E);this.NJ.L(E);this.Ags.L(E);},_Init:function(aArg){C.BO._Init.call(this,aArg
);A.acg.Am._Init.call(this.Db={I:this},0);A.acg.Am._Init.call(this.IA={I:this},0
);A.acg.Am._Init.call(this.NJ={I:this},0);A.acg.DR._Init.call(this.AN={I:this},0
);A.acg.Am._Init.call(this.Ags={I:this},0);A.acg.DR._Init.call(this.A9={I:this},
0);this.__proto__=C.ANM;this.Db.H(Axz);this.IA.H(AGk);this.NJ.H(AGn);this.AN.DK(
A_k);this.AN.DY(A_l);this.AN.L(A.jb.Bb);this.Ags.H(Bpf);this.Ags.L(A.jb.C0);this.
A9.DK(Bpg);this.A9.DY(Bph);this.A9.L(A.jb.Bb);this.J(this.Db,0);this.J(this.IA,0
);this.J(this.NJ,0);this.J(this.AN,0);this.J(this.Ags,0);this.J(this.A9,0);this.
Db.Ax(A.aaL(A.ach.ACr));this.IA.Ax(A.aaL(A.ach.Ad0));this.NJ.Ax(A.aaL(A.ach.AuX)
);this.Ags.Ax(A.aaL(A.ach.AOT));},_Done:function(){this.__proto__=C.BO;this.Db._Done(
);this.IA._Done();this.NJ._Done();this.AN._Done();this.Ags._Done();this.A9._Done(
);C.BO._Done.call(this);},_ReInit:function(){C.BO._ReInit.call(this);this.Db._ReInit(
);this.IA._ReInit();this.NJ._ReInit();this.AN._ReInit();this.Ags._ReInit();this.
A9._ReInit();},_Mark:function(D){var B;C.BO._Mark.call(this,D);if((B=this.Db)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ags)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Dv={Er:null,CX:null,AFh:
0,AMi:0,Init:function(aArg){A.zV([this,this.AJY],A._GetAutoObject(A.Device.Device
).Aq,0);A.pe([this,this.AJY],this);},AJY:function(G){var Ac=this.AFh;if(Ac<0){this.
CX.Ha();this.CX.DT(this.AMi);return;}this.CX.DT(A._GetAutoObject(A.Device.Device
).Aq.Amp(Ac,14));this.CX.ADO(A._GetAutoObject(A.Device.Device).Aq.IU(Ac,13));this.
CX.Aen(A._GetAutoObject(A.Device.Device).Aq.HU(Ac,8));this.CX.T2(A._GetAutoObject(
A.Device.Device).Aq.HU(Ac,11));this.CX.Aeq(A._GetAutoObject(A.Device.Device).Aq.
HU(Ac,12));this.CX.Aes(A._GetAutoObject(A.Device.Device).Aq.CA(Ac,5));},A8r:function(
E){if(this.AFh===E)return;this.AFh=E;A.pe([this,this.AJY],this);},A7W:function(E
){if(this.AMi===E)return;this.AMi=E;A.pe([this,this.AJY],this);},A7c:function(){
return this.AFh;},_Init:function(aArg){C.Es._Init.call(this,aArg);C.CP._Init.call(
this.Er={I:this},0);C.CX._Init.call(this.CX={I:this},0);this.__proto__=C.Dv;this.
Er.H(Bpi);this.Er.R(A.aaR(A.acf.GB));this.Er.A2(0x11);this.Er.L(A.jb.Text);this.
CX.H(A_m);this.J(this.Er,0);this.J(this.CX,0);this.Er.S(A.aaL(A.fl.Ah));this.Er.
A5(A.aaL(A.fl.Ak));this.Er.CC(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){
this.__proto__=C.Es;this.Er._Done();this.CX._Done();C.Es._Done.call(this);},_ReInit:
function(){C.Es._ReInit.call(this);this.Er._ReInit();this.CX._ReInit();this.Er.R(
A.aaR(A.acf.GB));this.Er.S(A.aaL(A.fl.Ah));this.Er.A5(A.aaL(A.fl.Ak));this.Er.CC(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.Es._Mark.call(this,D);if((B=this.Er).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Oq={Aga:null,Text:null,AeH:null,C7:function(E
){C.BO.C7.call(this,E);this.Aga.L(E);this.Text.L(E);this.AeH.L(E);},_Init:function(
aArg){C.BO._Init.call(this,aArg);A.acg.Am._Init.call(this.Aga={I:this},0);C.CP._Init.
call(this.Text={I:this},0);A.acg.Am._Init.call(this.AeH={I:this},0);this.__proto__=
C.Oq;this.Aga.H(Bpj);this.Aga.L(A.jb.Text);this.Text.H(AGx);this.Text.Ar(false);
this.Text.R(A.jV);this.Text.L(A.jb.Text);this.AeH.H(Bpk);this.AeH.L(A.jb.Text);this.
J(this.Aga,0);this.J(this.Text,0);this.J(this.AeH,0);this.Aga.Ax(A.aaL(A.ach.ANO
));this.Text.S(A.aaL(A.fl.J8));this.Text.A5(A.aaL(A.fl.Ia));},_Done:function(){this.
__proto__=C.BO;this.Aga._Done();this.Text._Done();this.AeH._Done();C.BO._Done.call(
this);},_ReInit:function(){C.BO._ReInit.call(this);this.Aga._ReInit();this.Text.
_ReInit();this.AeH._ReInit();this.Text.S(A.aaL(A.fl.J8));this.Text.A5(A.aaL(A.fl.
Ia));},_Mark:function(D){var B;C.BO._Mark.call(this,D);if((B=this.Aga)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.ANF={
_Init:function(aArg){C.Oq._Init.call(this,aArg);this.__proto__=C.ANF;this.Text.R(
A.aaR(A.acf.Device));},_ReInit:function(){C.Oq._ReInit.call(this);this.Text.R(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.ANH={_Init:function(
aArg){C.Oq._Init.call(this,aArg);this.__proto__=C.ANH;this.Kj(this.AeH,-2);this.
AeH.Ax(A.aaL(A.ach.Aa1));},_className:"Application::HeaderDeviceTemperature"};C.
XX={Ai:function(Ae){C.Amh.Ai.call(this,Ae);this.U(A.aaR(A.acf.Bnd)+A.aaR(A.acf.Colon
));},Cc:function(Ac){var B;if(!this.AX)return;this.Ak6=0;this.As2=0;this.Xg=0;if(
!!this.AX){var P;for(P=0;P<this.AX.Ch();P++){this.Ak6+=this.AX.CA(P,1);this.As2+=
this.AX.CA(P,2);}if(this.Ak6>0)this.Xg=(this.As2/this.Ak6)*100;this.An();}},_Init:
function(aArg){C.Amh._Init.call(this,aArg);this.__proto__=C.XX;this.AN.Y(false);
this.A9.Y(false);this.D4.Y(false);this.V.S(A.aaL(A.fl.J8));this.V.A5(A.aaL(A.fl.
Ia));},_ReInit:function(){C.Amh._ReInit.call(this);this.V.S(A.aaL(A.fl.J8));this.
V.A5(A.aaL(A.fl.Ia));},_className:"Application::EvaluationLossesSumItem"};C.A4Q={
Ag:null,A4:0,_Init:function(aArg){this.__proto__=C.A4Q;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A4R={KR:null,MK:null,AV:0,XQ:function(){this.KR=null;this.MK=null;this.AV=0;
},Of:function(A1){var G5;G5=A._NewObject(C.A4Q,0);G5.A4=A1;if(!this.KR){this.KR=
G5;this.MK=G5;this.AV=1;}else{this.MK.Ag=G5;this.MK=G5;this.AV=this.AV+1;}},Amr:
function(){var B;var Rq=0;var N4=this.KR;while(!!N4){Rq+=N4.A4;N4=N4.Ag;}return Rq;
},Ajl:function(){if(!this.AV)return 0;return this.Amr()/this.AV;},Aqb:function(){
var B;if(!this.AV)return 0;var AZD=this.Ajl();var AcH=0;var N4=this.KR;while(!!N4
){AcH+=Math.pow(N4.A4-AZD,2);N4=N4.Ag;}AcH/=this.AV;AcH=Math.sqrt(AcH);return AcH;
},_Init:function(aArg){this.__proto__=C.A4R;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KR)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.AfX={Background:null,V:null,KJ:0,T7:5,G_:false
,Ai:function(Ae){C.G7.Ai.call(this,Ae);if(this.G_)this.Background.L(A.jb.Bh);else
this.Background.L(A.jb.CE);},U:function(E){C.G7.U.call(this,E);this.V.R(E);},Bf:
function(E){if(this.G_===E)return;this.G_=E;this.An();},Kc:function(E){if(this.T7===
E)return;this.T7=E;this.V.H([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.G7._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);C.CP.
_Init.call(this.V={I:this},0);this.__proto__=C.AfX;this.H(BC);this.Background.AW(
0x3F);this.Background.H(BC);this.V.AW(0x3F);this.V.H(AHe);this.V.A2(0x11);this.V.
L(A.jb.Text);this.KJ=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.J8));this.V.A5(A.aaL(A.fl.Ia));this.V.CC(A.aaL(A.fl.By));},_Done:function(
){this.__proto__=C.G7;this.Background._Done();this.V._Done();C.G7._Done.call(this
);},_ReInit:function(){C.G7._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.J8));this.V.A5(A.aaL(A.fl.Ia));this.V.CC(A.aaL(A.fl.
By));},_Mark:function(D){var B;C.G7._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AMz={V7:function(G){this.AfV();this.Ey(A.aaR(
A.acf.ATA),[this,this.AR6],5);this.Ey(A.aaR(A.acf.ATy),[this,this.AR5],7);this.Ey(
A.aaR(A.acf.Calving),[this,this.Bjf],11);this.Ey(A.aaR(A.acf.Ahc),[this,this.Aj7
],2);this.Ey(A.aaR(A.acf.Adj),[this,this.AqY],1);this.Ey(A.aaR(A.acf.AiK),[this,
this.Am2],0);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.Adf
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},Du:function(G){}
,AaQ:function(){return C.ALJ;},AaR:function(){return C.AN_;},QS:function(G){A._GetAutoObject(
A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).ABQ());},HI:function(G){
C.EP.HI.call(this,G);if(this.AjM()===false){this.N.Cm(A.aaL(A.ach.AOB));this.N.Cg=[
this,this.A4n];this.N.FA(A.jV);}this.N.Oz(false);this.N.OA(false);},AfH:function(
){A._GetAutoObject(C.AY).B1(70);},AfG:function(){A._GetAutoObject(C.AY).B1(71);}
,_Init:function(aArg){C.EP._Init.call(this,aArg);this.__proto__=C.AMz;var B;this.
Dr(C.ANI);this.Dq(A.aaR(A.acf.AQv));this.Aj6([B=A._GetAutoObject(A.Device.Device
),B.A6Q,B.A_2]);},_ReInit:function(){C.EP._ReInit.call(this);this.Dq(A.aaR(A.acf.
AQv));},_className:"Application::DryCowListScreen"};C.AMy={_Init:function(aArg){
C.IS._Init.call(this,aArg);this.__proto__=C.AMy;this.K8.Ar(false);this.K8.Aj(false
);this.K8.Y(false);this.Je.Ar(false);this.Je.Aj(false);this.Je.Y(false);},_className:
"Application::DryCowListFilterScreen"};C.AMx={_Init:function(aArg){C.Gw._Init.call(
this,aArg);this.__proto__=C.AMx;this.N.BU(A.aaR(A.acf.A3u));},_ReInit:function(){
C.Gw._ReInit.call(this);this.N.BU(A.aaR(A.acf.A3u));},_className:"Application::DryCowListActionsScreen"
};C.ANI={Eo:function(G){C.J9.Eo.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.
Converter).Af1(9));},_Init:function(aArg){C.J9._Init.call(this,aArg);this.__proto__=
C.ANI;},_className:"Application::HeaderDryCowListFilter"};C.AaN={Filter:null,LQ:
null,AFJ:A.jV,Eh:0,AET:1,Operator:1,Bg:function(aSize){C.AbT.Bg.call(this,aSize);
this.V.H([15,0,this.A0.M[0]-15,aSize[1]]);},Ai:function(Ae){C.AbT.Ai.call(this,Ae
);this.LQ.L(this.V.AP);},Bm:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L5],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L5
],E,0);A.pe([this,this.L5],this);},L5:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.S8((F=this.Filter,F[1].call(F[0])).DX(this.Eh,this.
Operator));else this.S8(null);},M7:function(E){if(this.Eh===E)return;this.Eh=E;A.
pe([this,this.L5],this);},S8:function(AM){if(!!AM){var A0g;if(this.AET!==1)A0g=this.
AET;else A0g=AM.Operator;this.U((this.AFJ+CO)+A._GetAutoObject(A.Device.Converter
).A4M(A0g));this.YZ(false);}else{this.U(this.AFJ);this.YZ(true);}},Oy:function(E
){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.L5],this);},AED:function(
E){if(this.AFJ===E)return;this.AFJ=E;A.pe([this,this.L5],this);},A8g:function(E){
if(this.AET===E)return;this.AET=E;A.pe([this,this.L5],this);},_Init:function(aArg
){C.AbT._Init.call(this,aArg);C.LQ._Init.call(this.LQ={I:this},0);this.__proto__=
C.AaN;this.H(Asi);this.A0.H(Bpl);this.LQ.H(AYj);this.Kj(this.V,-1);this.J(this.LQ
,0);},_Done:function(){this.__proto__=C.AbT;this.LQ._Done();C.AbT._Done.call(this
);},_ReInit:function(){C.AbT._ReInit.call(this);this.LQ._ReInit();},_Mark:function(
D){var B;C.AbT._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.Aje={LQ:null,Ai:function(Ae){C.Qm.Ai.call(this,Ae);this.LQ.L(this.V.AP);},S8:
function(AM){if(!!AM){this.HX.Ct(1);this.YZ(true);this.LQ.A79(false);}else{this.
HX.Ct(0);this.YZ(false);this.LQ.A79(true);}},_Init:function(aArg){C.Qm._Init.call(
this,aArg);C.LQ._Init.call(this.LQ={I:this},0);this.__proto__=C.Aje;this.I0=20;this.
LQ.H(AYj);this.J(this.LQ,0);},_Done:function(){this.__proto__=C.Qm;this.LQ._Done(
);C.Qm._Done.call(this);},_ReInit:function(){C.Qm._ReInit.call(this);this.LQ._ReInit(
);},_Mark:function(D){var B;C.Qm._Mark.call(this,D);if((B=this.LQ)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.AAU={Q:null,CT:function(
){this.U(A._GetAutoObject(A.Device.Helper).Amq(this.TableId,this.Eh));},S8:function(
AM){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.HX.Ct(1);else this.HX.Ct(
0);},OX:function(G){A.pe([this,this.L5],this);},Au:function(E){if(A.aaZ(this.Q,E
))return;if(!!this.Q)A.z$([this,this.OX],this.Q,0);this.Q=E;if(!!E)A.zX([this,this.
OX],E,0);if(!!E)A.pe([this,this.OX],this);},_Init:function(aArg){C.Qm._Init.call(
this,aArg);this.__proto__=C.AAU;},_ReInit:function(){C.Qm._ReInit.call(this);this.
CT();},_Mark:function(D){var B;C.Qm._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.AN_={Yn:null,IY:null,_Init:function(aArg){C.Dv._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yn={I:this},0);A.acg.Text._Init.call(this.IY={I:this},0);this.__proto__=
C.AN_;this.A7W(1);this.Yn.H(Bpm);this.Yn.KI(true);this.Yn.R(A.aaR(A.acf.ACS));this.
Yn.L(A.jb.Text);this.IY.H(SM);this.IY.R(((A.aaR(A.acf.Td)+A_n)+A.aaR(A.acf.A91))+
OQ);this.IY.L(A.jb.Text);this.J(this.Yn,0);this.J(this.IY,0);this.Yn.S(A.aaL(A.fl.
Ak));this.IY.S(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.Dv;this.Yn._Done(
);this.IY._Done();C.Dv._Done.call(this);},_ReInit:function(){C.Dv._ReInit.call(this
);this.Yn._ReInit();this.IY._ReInit();this.Yn.R(A.aaR(A.acf.ACS));this.IY.R(((A.
aaR(A.acf.Td)+A_n)+A.aaR(A.acf.A91))+OQ);this.Yn.S(A.aaL(A.fl.Ak));this.IY.S(A.aaL(
A.fl.By));},_Mark:function(D){var B;C.Dv._Mark.call(this,D);if((B=this.Yn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ALJ={Ma:null,KE:null,Adi:null,AN:null,A9:null
,WW:0,Init:function(aArg){},Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.Background.
H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.Ma.H(this.V.M);this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KE.
H([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A9.H([this.KE.M[2]-1,0,this.
KE.M[2]+1,aSize[1]]);this.Adi.H([this.KE.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.Ba.Ai.call(this,Ae);this.KE.L(this.V.AP);this.Adi.L(this.V.AP);if(!!this.WW&&(
this.WW!==5)){this.Ma.L(A._GetAutoObject(A.acj.Assessment).P9(this.WW));this.V.L(
A._GetAutoObject(A.acj.Assessment).W6(this.WW));}else this.Ma.L(this.Background.
AP);},Cc:function(Ac){if(!this.AX)return;this.Hr=Ac;if(!!this.AX){var Oe=this.AX.
CA(Ac,1);var A0P=this.AX.CA(Ac,29);var SX=this.AX.Hy(Ac,4);var LJ=this.AX.IU(Ac,
13);var Ak9=this.AX.IU(Ac,17);var Alg=this.AX.HU(Ac,11);this.WW=A._GetAutoObject(
A.Device.Helper).AKU(LJ,Alg,Ak9);this.U(Oe.toFixed());this.KE.R(A0P.toFixed());this.
Adi.R(A._GetAutoObject(A.acj.KB).ABN(SX,A._GetAutoObject(A.Device.Helper).Dy(),Bpn
));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AI._Init.call(
this.Ma={I:this},0);A.acg.Text._Init.call(this.KE={I:this},0);A.acg.Text._Init.call(
this.Adi={I:this},0);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(
this.A9={I:this},0);this.__proto__=C.ALJ;this.Ma.H(Ast);this.AN.L(A.jb.Bb);this.
A9.L(A.jb.Bb);this.J(this.Ma,0);this.J(this.KE,0);this.J(this.Adi,0);this.J(this.
AN,0);this.J(this.A9,0);this.KE.S(A.aaL(A.fl.Ah));this.Adi.S(A.aaL(A.fl.Ah));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.Ma._Done();this.KE._Done(
);this.Adi._Done();this.AN._Done();this.A9._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.Ma._ReInit();this.KE._ReInit();this.Adi.
_ReInit();this.AN._ReInit();this.A9._ReInit();this.KE.S(A.aaL(A.fl.Ah));this.Adi.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.Ma
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Adi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.Rz={AIv:0,Bbu:false,Ai:function(Ae){C.Fl.Ai.call(this,Ae);if(this.Bbu){this.
U(A.aaR(A.acf.AMv));this.Kg(A.jV);}else{this.U(A.aaR(A.acf.Bhc));if(this.AIv>0)this.
Kg(this.AIv.toFixed());else this.Kg(WH);}},Cc:function(G){C.Fl.Cc.call(this,G);this.
Bbu=A._GetAutoObject(A.Device.Helper).W.IsDry;var Ak4=A._GetAutoObject(A.Device.
Helper).W.DateOfLastCalving;if(Ak4>0)this.AIv=A._GetAutoObject(A.Device.Helper).
MF(Ak4,A._GetAutoObject(A.Device.Helper).Dy());else this.AIv=0;this.An();},_Init:
function(aArg){C.Fl._Init.call(this,aArg);this.__proto__=C.Rz;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AKZ={AJ6:A.jV,Ai:function(Ae){C.Fl.Ai.call(this,Ae);this.U(A.aaR(A.acf.Td));
this.Kg(this.AJ6);},Cc:function(G){C.Fl.Cc.call(this,G);var SX=A._GetAutoObject(
A.Device.Helper).W.DateOfBirth;this.AJ6=A._GetAutoObject(A.acj.KB).ABN(SX,A._GetAutoObject(
A.Device.Helper).Dy(),((((Bpo+A.aaR(A.acf.Bez))+Bpp)+A.aaR(A.acf.Bey))+Bpq)+A.aaR(
A.acf.AKy));this.An();},_Init:function(aArg){C.Fl._Init.call(this,aArg);this.__proto__=
C.AKZ;this.AJ6=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fl._ReInit.call(this);
this.AJ6=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AMp={TT:null,YF:null,VZ:null,V0:null,Sc:null,Init:function(aArg){this.A8(this.
TT);A.pe([this,this.DD],this);},Xb:function(G){A._GetAutoObject(A.Device.Device).
Cj(1);},_Init:function(aArg){C.Hh._Init.call(this,aArg);C.Py._Init.call(this.TT={
I:this},0);C.Py._Init.call(this.YF={I:this},0);C.Py._Init.call(this.VZ={I:this},
0);C.Abj._Init.call(this.V0={I:this},0);C.TR._Init.call(this.Sc={I:this},0);this.
__proto__=C.AMp;var B;this.Dr(C.ANF);this.TT.H(KP);this.TT.Aj(true);this.TT.U(A.
aaR(A.acf.ABm));this.TT.Bf(false);this.TT.PD(94);this.YF.H(Q6);this.YF.Aj(true);
this.YF.U(A.acf.Info);this.YF.Bf(true);this.YF.PD(93);this.VZ.H(WJ);this.VZ.Aj(true
);this.VZ.U(A.aaR(A.acf.AFk));this.VZ.Bf(false);this.VZ.PD(73);this.V0.H(AkJ);this.
V0.Aj(true);this.V0.U(A.aaR(A.acf.TempMeasurement));this.V0.Bf(true);this.V0.PD(
68);this.Sc.H(AnQ);this.Sc.Aj(true);this.Sc.U(A.aaR(A.acf.ABI));this.Sc.Bf(false
);this.J(this.TT,0);this.J(this.YF,0);this.J(this.VZ,0);this.J(this.V0,0);this.J(
this.Sc,0);this.N.Cg=[this,this.Xb];this.N.Cm(A.aaL(A.ach.ACw));this.TT.AQ=[B=this.
TT,B.PE];this.YF.AQ=[B=this.YF,B.PE];this.VZ.AQ=[B=this.VZ,B.PE];this.V0.AQ=[B=this.
V0,B.PE];this.Sc.AQ=null;this.Sc.AgO([B=this.Sc,B.AsG]);this.Sc.Gj([this,this.D9
,this.GQ]);this.Sc.ARs([B=A._GetAutoObject(A.Device.Device),B.AqM,B.AsE]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Hh;this.TT._Done();this.YF._Done();this.
VZ._Done();this.V0._Done();this.Sc._Done();C.Hh._Done.call(this);},_ReInit:function(
){C.Hh._ReInit.call(this);this.TT._ReInit();this.YF._ReInit();this.VZ._ReInit();
this.V0._ReInit();this.Sc._ReInit();this.TT.U(A.aaR(A.acf.ABm));this.VZ.U(A.aaR(
A.acf.AFk));this.V0.U(A.aaR(A.acf.TempMeasurement));this.Sc.U(A.aaR(A.acf.ABI));
},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.TT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.V0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sc
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"};C.
AMq={TS:null,Abh:null,VX:null,Init:function(aArg){this.A8(this.TS);},Bv_:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},BhS:function(G){if(A._GetAutoObject(
A.Device.Device).Aar<=20)A._GetAutoObject(A.Device.Device).A6(76,true,Bpr,0,null
);else A._GetAutoObject(A.Device.Device).A6(39,true,A.jV,0,[this,this.Bv_]);},_Init:
function(aArg){C.Hh._Init.call(this,aArg);C.Py._Init.call(this.TS={I:this},0);C.
Ci._Init.call(this.Abh={I:this},0);C.Abj._Init.call(this.VX={I:this},0);this.__proto__=
C.AMq;var B;this.Dr(C.ANG);this.TS.H(KP);this.TS.Aj(true);this.TS.U(A.aaR(A.acf.
A3S));this.TS.Bf(false);this.TS.PD(74);this.Abh.H(Q6);this.Abh.Aj(true);this.Abh.
U(A.aaR(A.acf.A4O));this.Abh.Bf(true);this.VX.H(WJ);this.VX.Aj(true);this.VX.U(A.
aaR(A.acf.RangeTest));this.VX.Bf(false);this.VX.PD(15);this.J(this.TS,0);this.J(
this.Abh,0);this.J(this.VX,0);this.TS.AQ=[B=this.TS,B.PE];this.Abh.AQ=[this,this.
BhS];this.VX.AQ=[B=this.VX,B.PE];this.Init(aArg);},_Done:function(){this.__proto__=
C.Hh;this.TS._Done();this.Abh._Done();this.VX._Done();C.Hh._Done.call(this);},_ReInit:
function(){C.Hh._ReInit.call(this);this.TS._ReInit();this.Abh._ReInit();this.VX.
_ReInit();this.TS.U(A.aaR(A.acf.A3S));this.Abh.U(A.aaR(A.acf.A4O));this.VX.U(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.TS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abh)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.ANG={_Init:function(aArg){C.Oq._Init.call(this,aArg);this.__proto__=C.ANG;this.
Text.R(A.aaR(A.acf.AFk));},_ReInit:function(){C.Oq._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AFk));},_className:"Application::HeaderDeviceServiceMenu"};C.Py={Agt:
null,Ai:function(Ae){C.Abj.Ai.call(this,Ae);this.Agt.L(this.V.AP);},_Init:function(
aArg){C.Abj._Init.call(this,aArg);A.acg.Am._Init.call(this.Agt={I:this},0);this.
__proto__=C.Py;this.Agt.AW(0x38);this.Agt.H(Bps);this.J(this.Agt,0);this.V.CC(A.
aaL(A.fl.By));this.Agt.Ax(A.aaL(A.ach.AiW));},_Done:function(){this.__proto__=C.
Abj;this.Agt._Done();C.Abj._Done.call(this);},_ReInit:function(){C.Abj._ReInit.call(
this);this.Agt._ReInit();this.V.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Abj.
_Mark.call(this,D);if((B=this.Agt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.AMm={Agz:null,AgF:null,AgH:null,AgD:null,AjD:null,AgC:null,AgB:null,AgA:null
,AjB:null,Agy:null,AjC:null,AgG:null,AjE:null,AgE:null,AjF:null,Init:function(aArg
){this.A8(this.Agz);},_Init:function(aArg){C.Hh._Init.call(this,aArg);C.Px._Init.
call(this.Agz={I:this},0);C.Px._Init.call(this.AgF={I:this},0);C.Px._Init.call(this.
AgH={I:this},0);C.Px._Init.call(this.AgD={I:this},0);C.Px._Init.call(this.AjD={I:
this},0);C.Px._Init.call(this.AgC={I:this},0);C.Px._Init.call(this.AgB={I:this},
0);C.Px._Init.call(this.AgA={I:this},0);C.Px._Init.call(this.AjB={I:this},0);C.Px.
_Init.call(this.Agy={I:this},0);C.Px._Init.call(this.AjC={I:this},0);C.Px._Init.
call(this.AgG={I:this},0);C.Px._Init.call(this.AjE={I:this},0);C.Px._Init.call(this.
AgE={I:this},0);C.Px._Init.call(this.AjF={I:this},0);this.__proto__=C.AMm;this.Dr(
C.ANC);this.Agz.H(AsA);this.Agz.Aj(true);this.Agz.Si(1);this.AgF.H(AYh);this.AgF.
Aj(true);this.AgF.Bf(true);this.AgF.Si(2);this.AgH.H(Asv);this.AgH.Aj(true);this.
AgH.Bf(false);this.AgH.Si(3);this.AgD.H(Asw);this.AgD.Aj(true);this.AgD.Bf(true);
this.AgD.Si(4);this.AjD.H(Axq);this.AjD.Aj(true);this.AjD.Si(5);this.AgC.H(Bpt);
this.AgC.Aj(true);this.AgC.Bf(true);this.AgC.Si(6);this.AgB.H(Asx);this.AgB.Aj(true
);this.AgB.Bf(false);this.AgB.Si(7);this.AgA.H(Asy);this.AgA.Aj(true);this.AgA.Bf(
true);this.AgA.Si(8);this.AjB.H(AYi);this.AjB.Aj(true);this.AjB.Si(9);this.Agy.H(
Ae_);this.Agy.Aj(true);this.Agy.Bf(true);this.Agy.Si(10);this.AjC.H(Bpu);this.AjC.
Aj(true);this.AjC.Si(11);this.AgG.H(Bpv);this.AgG.Aj(true);this.AgG.Bf(true);this.
AgG.Si(12);this.AjE.H(Bpw);this.AjE.Aj(true);this.AjE.Si(13);this.AgE.H(Bpx);this.
AgE.Aj(true);this.AgE.Bf(true);this.AgE.Si(14);this.AjF.H(Bpy);this.AjF.Aj(true);
this.AjF.Si(15);this.J(this.Agz,0);this.J(this.AgF,0);this.J(this.AgH,0);this.J(
this.AgD,0);this.J(this.AjD,0);this.J(this.AgC,0);this.J(this.AgB,0);this.J(this.
AgA,0);this.J(this.AjB,0);this.J(this.Agy,0);this.J(this.AjC,0);this.J(this.AgG,
0);this.J(this.AjE,0);this.J(this.AgE,0);this.J(this.AjF,0);this.Init(aArg);},_Done:
function(){this.__proto__=C.Hh;this.Agz._Done();this.AgF._Done();this.AgH._Done(
);this.AgD._Done();this.AjD._Done();this.AgC._Done();this.AgB._Done();this.AgA._Done(
);this.AjB._Done();this.Agy._Done();this.AjC._Done();this.AgG._Done();this.AjE._Done(
);this.AgE._Done();this.AjF._Done();C.Hh._Done.call(this);},_ReInit:function(){C.
Hh._ReInit.call(this);this.Agz._ReInit();this.AgF._ReInit();this.AgH._ReInit();this.
AgD._ReInit();this.AjD._ReInit();this.AgC._ReInit();this.AgB._ReInit();this.AgA.
_ReInit();this.AjB._ReInit();this.Agy._ReInit();this.AjC._ReInit();this.AgG._ReInit(
);this.AjE._ReInit();this.AgE._ReInit();this.AjF._ReInit();},_Mark:function(D){var
B;C.Hh._Mark.call(this,D);if((B=this.Agz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AgF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgH)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AgD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AjD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AgC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgB)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AgA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AjB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agy)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AjC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AgE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AjF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.ANC={_Init:function(aArg){C.Oq._Init.call(this
,aArg);this.__proto__=C.ANC;this.Text.R(A.aaR(A.acf.A4i));},_ReInit:function(){C.
Oq._ReInit.call(this);this.Text.R(A.aaR(A.acf.A4i));},_className:"Application::HeaderDeviceCheck"
};C.Px={DeviceComponentToString:null,J4:null,Auj:0,A$_:false,CT:function(){this.
V.R(this.DeviceComponentToString.BX(this.Auj));},Bg:function(aSize){var B;C.Ci.Bg.
call(this,aSize);this.J4.H(A.abM(this.J4.M,aSize[0]-((B=this.J4.M)[2]-B[0])));this.
V.H(A.abN(this.V.M,this.J4.M[0]));},Ai:function(Ae){C.Ci.Ai.call(this,Ae);this.J4.
ADG(this.V.AP);if(this.A$_)this.J4.AvU(A.jb.EU);else this.J4.AvU(A.jb.FW);},Si:function(
E){if(this.Auj===E)return;this.Auj=E;this.U(this.DeviceComponentToString.BX(E));
this.Eo(this);},Eo:function(G){this.A$_=A._GetAutoObject(A.Device.Device).AIl(this.
Auj);this.An();},_Init:function(aArg){C.Ci._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.J4._Init.call(this.J4={I:this
},0);this.__proto__=C.Px;this.V.H(Bpz);this.V.A2(0x11);this.J4.H(BpA);this.J(this.
J4,0);},_Done:function(){this.__proto__=C.Ci;this.DeviceComponentToString._Done(
);this.J4._Done();C.Ci._Done.call(this);},_ReInit:function(){C.Ci._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.J4._ReInit();this.CT();},_Mark:function(
D){var B;C.Ci._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.J4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.RW={Av:null,DO:null,Z:null,Init:function(aArg){A.pe([this,this.AzC],this);},
A8:function(E){C.AB.A8.call(this,E);this.AJ2(this);this.DD(this);},CJ:function(G
){A.pe([this,this.UC],this);},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1))[
3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},AzC:function(
G){var Bc=A._GetAutoObject(A.Device.Helper).A4Z();A._GetAutoObject(A.Device.Device
).Aq.Bm(Bc);A.pe([this,this.UC],this);},Ee:function(G){A._GetAutoObject(C.AY).Fm(
);},A1K:function(G){A._GetAutoObject(C.AY).B1(95);},DD:function(G){this.N.CS(A.aaL(
A.ach.EV));this.N.Cw=[this,this.Ee];this.N.Cm(A.aaL(A.ach.ACv));if(!A._GetAutoObject(
A.Device.Device).Aq.Filter||A._GetAutoObject(A.Device.Helper).Aqt(A._GetAutoObject(
A.Device.Device).Aq.Filter)){this.N.Cg=null;this.N.IW.Ds(100);}else{this.N.Cg=[this
,this.AzC];this.N.IW.Ds(255);}this.N.C2(A.aaL(A.ach.Ad0));this.N.Cb=[this,this.A1K
];},UC:function(s){this.DD(s);},AJ2:function(G){A.ab5("%s",BpB);},BDb:function(s
){this.AJ2(s);},G4:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){
C.AB._Init.call(this,aArg);C.Av._Init.call(this.Av={I:this},0);A.acg.AI._Init.call(
this.DO={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);this.__proto__=C.RW;this.
N.Ar(false);this.N.Y(true);this.Dr(C.AaS);this.Av.H(II);this.DO.AW(0x3F);this.DO.
H(E4);this.DO.L(A.jb.CE);this.Z.H(Ln);this.Z.Kb(9);this.J(this.Av,0);this.J(this.
DO,0);this.J(this.Z,0);this.Z.Ei=[this,this.G4];this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.Av._Done();this.DO._Done();this.Z._Done();C.AB._Done.
call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.Av._ReInit();this.DO.
_ReInit();this.Z._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuScreen"
};C.AMN={XO:null,XN:null,XA:null,To:null,DD:function(G){C.RW.DD.call(this,G);if(
this.AR===this.To){this.N.Cm(null);this.N.Cg=null;this.N.C2(null);this.N.Cb=null;
}},AJ2:function(G){if(this.AR===this.To)this.Dr(C.ANM);else this.Dr(C.AaS);},Bwr:
function(){switch(A._GetAutoObject(A.Device.Device).TemperatureUnit){case 0:return A.
aaL(A.ach.AON);case 1:return A.aaL(A.ach.AOO);default:A.ab5("%s%s",BpC,A._GetAutoObject(
A.Device.Device).TemperatureUnit.toFixed());}return null;},Bws:function(){switch(
A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AOP);case 1:
return A.aaL(A.ach.AOQ);default:A.ab5("%s%s",AHo,A._GetAutoObject(A.Device.Device
).MassUnit.toFixed());}return null;},H9:function(G){var Cr=(C.Fc.isPrototypeOf(G
)?G:null);if(!Cr)return;if(Cr===this.XO)A._GetAutoObject(C.AY).B1(75);else if(Cr===
this.XN)A._GetAutoObject(C.AY).B1(64);else if(Cr===this.XA)A._GetAutoObject(C.AY
).B1(66);else if(Cr===this.To)A._GetAutoObject(C.AY).B1(67);},_Init:function(aArg
){C.RW._Init.call(this,aArg);C.Fc._Init.call(this.XO={I:this},0);C.Fc._Init.call(
this.XN={I:this},0);C.Fc._Init.call(this.XA={I:this},0);C.Fc._Init.call(this.To={
I:this},0);this.__proto__=C.AMN;this.XO.H(PT);this.XO.Aj(true);this.XO.U(A.aaR(A.
acf.AeW));this.XN.H(Ko);this.XN.Aj(true);this.XN.U(A.aaR(A.acf.Temperature));this.
XA.H(BpD);this.XA.Aj(true);this.XA.U(A.aaR(A.acf.Rating));this.To.H(BpE);this.To.
Aj(true);this.To.U(A.aaR(A.acf.A53));this.J(this.XO,0);this.J(this.XN,0);this.J(
this.XA,0);this.J(this.To,0);this.XO.AQ=[this,this.H9];this.XO.Dz(this.Bws());this.
XN.AQ=[this,this.H9];this.XN.Dz(this.Bwr());this.XA.AQ=[this,this.H9];this.XA.Dz(
A.aaL(A.ach.AOL));this.To.AQ=[this,this.H9];this.To.Dz(A.aaL(A.ach.AOM));},_Done:
function(){this.__proto__=C.RW;this.XO._Done();this.XN._Done();this.XA._Done();this.
To._Done();C.RW._Done.call(this);},_ReInit:function(){C.RW._ReInit.call(this);this.
XO._ReInit();this.XN._ReInit();this.XA._ReInit();this.To._ReInit();this.XO.U(A.aaR(
A.acf.AeW));this.XN.U(A.aaR(A.acf.Temperature));this.XA.U(A.aaR(A.acf.Rating));this.
To.U(A.aaR(A.acf.A53));},_Mark:function(D){var B;C.RW._Mark.call(this,D);if((B=this.
XO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.To)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuMainScreen"};C.AMO={Vg:null,XC:null,
XP:null,AJ2:function(G){this.Dr(C.AuP);},Bwv:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.APp);case 1:return A.aaL(A.
ach.APq);default:A.ab5("%s%s",AHo,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},H9:function(G){var Cr=(C.Fc.isPrototypeOf(G)?G:null);if(!Cr)return;
if(Cr===this.Vg)A._GetAutoObject(C.AY).B1(77);else if(Cr===this.XP)A._GetAutoObject(
C.AY).B1(65);else if(Cr===this.XC)A._GetAutoObject(C.AY).B1(76);},Bwu:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AOz
);case 1:return A.aaL(A.ach.AOA);default:A.ab5("%s%s",AHo,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Bww:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.APr);case 1:return A.aaL(A.
ach.APs);default:A.ab5("%s%s",AHo,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},_Init:function(aArg){C.RW._Init.call(this,aArg);C.Fc._Init.call(
this.Vg={I:this},0);C.Fc._Init.call(this.XC={I:this},0);C.Fc._Init.call(this.XP={
I:this},0);this.__proto__=C.AMO;this.Vg.H(PT);this.Vg.Aj(true);this.Vg.U(A.aaR(A.
acf.A9T));this.XC.H(AYk);this.XC.Aj(true);this.XC.U(A.aaR(A.acf.A3I));this.XP.H(
NY);this.XP.Aj(true);this.XP.U(A.aaR(A.acf.A9W));this.J(this.Vg,0);this.J(this.XC
,0);this.J(this.XP,0);this.Vg.AQ=[this,this.H9];this.Vg.Dz(this.Bwv());this.Vg.AbA(
A.aaL(A.ach.NI));this.XC.AQ=[this,this.H9];this.XC.Dz(this.Bwu());this.XP.AQ=[this
,this.H9];this.XP.Dz(this.Bww());},_Done:function(){this.__proto__=C.RW;this.Vg.
_Done();this.XC._Done();this.XP._Done();C.RW._Done.call(this);},_ReInit:function(
){C.RW._ReInit.call(this);this.Vg._ReInit();this.XC._ReInit();this.XP._ReInit();
this.Vg.U(A.aaR(A.acf.A9T));this.XC.U(A.aaR(A.acf.A3I));this.XP.U(A.aaR(A.acf.A9W
));},_Mark:function(D){var B;C.RW._Mark.call(this,D);if((B=this.Vg)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.XC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"};
C.AMR={Bbx:function(){return(A._GetAutoObject(A.Device.Helper).W.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).W.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).Ze(0));},_Init:function(aArg){C.Ap4._Init.call(this,aArg);this.
__proto__=C.AMR;this.Aet(A.aaR(A.acf.A6o));},_ReInit:function(){C.Ap4._ReInit.call(
this);this.Aet(A.aaR(A.acf.A6o));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AMK={AhI:null,AaV:null,Un:null,Aak:null,O8:null,AiT:null,AfZ:null,AiU:null,Af0:
null,Av:null,Aad:null,AcE:0,AoS:0,Du:function(G){switch(this.Cl.CI){case 4:{if(this.
IT.Fe())return;var Qg=this.Z.Bp[1]+80;this.Z.Gc([this.Z.Bp[0],Qg]);this.Z.U6(null
,null);}break;case 5:{if(this.IT.Fe())return;var Qg=this.Z.Bp[1]-80;this.Z.Gc([this.
Z.Bp[0],Qg]);this.Z.U6(null,null);}break;default:C.Fn.Du.call(this,G);}},Apt:function(
LV,Acp){if(!LV)return;var Fk=A._NewObject(A.Device.Filter,0);var HO=A._NewObject(
A.Device.Int32FilterCriterion,0);HO.Initialize(1,0,Acp,true);Fk.CZ(HO);var AcA=A.
_NewObject(A.Device.Int32FilterCriterion,0);AcA.Initialize(8,2,0,true);Fk.CZ(AcA
);LV.Bm(Fk);},AhW:function(G){if(A._GetAutoObject(A.Device.Helper).W.Aqu()){this.
AhI.Of(A._GetAutoObject(A.Device.Helper).W.FirstBodyWeight);var Aye=this.Bwp(A._GetAutoObject(
A.Device.Helper).W.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
Aad.Set(Aye,this.Aad.Get(Aye)+1);if(A._GetAutoObject(A.Device.Helper).W.AnimalType===
1){this.AcE++;this.AoS=A._GetAutoObject(A.Device.Helper).W.VisualId;}}C.Fn.AhW.call(
this,G);},ZS:function(G){if(this.AcE>1)A._GetAutoObject(A.Device.Device).A6(56,true
,this.AcE.toFixed(),0,null);if(this.AcE===1)A._GetAutoObject(A.Device.Device).A6(
53,true,this.AoS.toFixed(),0,null);if(this.AhI.AV>0)this.Un.U(((((((A._GetAutoObject(
A.Device.Converter).Aw2(this.AhI.Ajl()|0,1)+AxC)+A._GetAutoObject(A.Device.Converter
).Aw2(this.AhI.Aqb()|0,1))+CO)+A._GetAutoObject(A.acj.DM).Afu())+AxD)+this.AhI.AV.
toFixed())+OQ);else this.Un.U(A.aaR(A.acf.Unknown));var Rq=this.Aad.Amr();var P;
for(P=0;P<this.Aad.Mt;P++){var A$=this.BwK(P);if(!!A$){var CM=this.Aad.Get(P);A$.
Bjy(CM);if(!Rq)A$.A8m(0);else A$.A8m(Math.round((CM*100)/Rq)|0);A$.Bk_(this.BwJ(
P,A._GetAutoObject(A.Device.Device).MassUnit));}}var AcJ=false;if(this.AhI.AV>0)
AcJ=true;this.IT.Y(!AcJ);C.Fn.ZS.call(this,G);},AcQ:function(G){this.AhI.XQ();this.
Aad.Ha();this.AcE=0;this.AoS=0;C.Fn.AcQ.call(this,G);},BwK:function(aIndex){var A$=
null;switch(aIndex){case 0:A$=this.O8;break;case 1:A$=this.AiT;break;case 2:A$=this.
AfZ;break;case 3:A$=this.AiU;break;case 4:A$=this.Af0;break;default:throw new Error(
AxE+aIndex.toFixed());}return A$;},BwJ:function(aIndex,An8){var B;var S9=A.jV;switch(
An8){case 0:{switch(aIndex){case 0:S9=BpF;break;case 1:S9=BpG;break;case 2:S9=BpH;
break;case 3:S9=BpI;break;case 4:S9=BpJ;break;default:throw new Error(AxE+aIndex.
toFixed());}S9=S9+(CO+A.aaR(A.acf.Ay6));}break;case 1:{switch(aIndex){case 0:S9=
BpK;break;case 1:S9=BpL;break;case 2:S9=BpM;break;case 3:S9=BpN;break;case 4:S9=
BpO;break;default:throw new Error(AxE+aIndex.toFixed());}S9=S9+(CO+A.aaR(A.acf.A5K
));}break;default:A.ab5("%s%e",A_o,An8);}return S9;},Bwq:function(AHK,An8){var AcB=
0;switch(An8){case 0:switch(AHK){case 0:AcB=35000;break;case 1:AcB=40000;break;case
2:AcB=45000;break;case 3:AcB=50000;break;case 4:AcB=2147483647;break;default:throw new
Error(AxE+AHK.toFixed());}break;case 1:switch(AHK){case 0:AcB=36287;break;case 1:
AcB=40823;break;case 2:AcB=45359;break;case 3:AcB=49895;break;case 4:AcB=2147483647;
break;default:throw new Error(AxE+AHK.toFixed());}break;default:A.ab5("%s%e",A_o
,An8);}return AcB;},Bwp:function(A1,An8){var Aye=0;var P;for(P=0;P<this.Aad.Mt;P++
)if(A1<this.Bwq(P,An8)){Aye=P;break;}return Aye;},E9:function(G){var B;this.Av.Mm((
B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[
1]);},G4:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Fn._Init.
call(this,aArg);C.AfX._Init.call(this.AaV={I:this},0);C.It._Init.call(this.Un={I:
this},0);C.Aak._Init.call(this.Aak={I:this},0);C.O8._Init.call(this.O8={I:this},
0);C.O8._Init.call(this.AiT={I:this},0);C.O8._Init.call(this.AfZ={I:this},0);C.O8.
_Init.call(this.AiU={I:this},0);C.O8._Init.call(this.Af0={I:this},0);C.Av._Init.
call(this.Av={I:this},0);A.Device.Int32ArrayWrapper._Init.call(this.Aad={I:this}
,0);this.__proto__=C.AMK;this.Dr(C.AuP);this.Aj1(A.aaR(A.acf.A4D));this.Aet(A.aaR(
A.acf.A6g));this.AaV.H(AsA);this.AaV.Aj(true);this.AaV.U(A.aaR(A.acf.A3m));this.
AaV.Bf(false);this.AaV.Kc(5);this.Un.H(AYh);this.Un.Aj(true);this.Un.U(A.jV);this.
Un.Bf(true);this.Un.Kc(5);this.Aak.H(Asv);this.Aak.Aj(true);this.O8.H(Asw);this.
O8.Aj(true);this.O8.Bf(true);this.AiT.H(Asx);this.AiT.Aj(true);this.AfZ.H(Asy);this.
AfZ.Aj(true);this.AfZ.Bf(true);this.AiU.H(AYi);this.AiU.Aj(true);this.Af0.H(Ae_);
this.Af0.Aj(true);this.Af0.Bf(true);this.Av.H(II);this.Aad.Y0(5);this.J(this.AaV
,-1);this.J(this.Un,-1);this.J(this.Aak,-1);this.J(this.O8,-1);this.J(this.AiT,-
1);this.J(this.AfZ,-1);this.J(this.AiU,-1);this.J(this.Af0,-1);this.J(this.Av,-1
);this.Z.Ei=[this,this.G4];this.AhI=A._NewObject(C.Au$,0);this.Un.S(A.aaL(A.fl.Ah
));},_Done:function(){this.__proto__=C.Fn;this.AaV._Done();this.Un._Done();this.
Aak._Done();this.O8._Done();this.AiT._Done();this.AfZ._Done();this.AiU._Done();this.
Af0._Done();this.Av._Done();this.Aad._Done();C.Fn._Done.call(this);},_ReInit:function(
){C.Fn._ReInit.call(this);this.AaV._ReInit();this.Un._ReInit();this.Aak._ReInit(
);this.O8._ReInit();this.AiT._ReInit();this.AfZ._ReInit();this.AiU._ReInit();this.
Af0._ReInit();this.Av._ReInit();this.Aad._ReInit();this.Aj1(A.aaR(A.acf.A4D));this.
Aet(A.aaR(A.acf.A6g));this.AaV.U(A.aaR(A.acf.A3m));this.Un.S(A.aaL(A.fl.Ah));},_Mark:
function(D){var B;C.Fn._Mark.call(this,D);if((B=this.AhI)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AaV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Un)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aak)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AfZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Af0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aad)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationBirthWeightsScreen"
};C.Aak={H1:null,Ge:null,Bg:function(aSize){C.It.Bg.call(this,aSize);this.H1.H([((
aSize[0]*57)/100)|0,0,((aSize[0]*80)/100)|0,aSize[1]]);this.Ge.H([this.H1.M[2],0
,aSize[0],aSize[1]]);},Ai:function(Ae){C.It.Ai.call(this,Ae);this.H1.L(this.V.AP
);this.Ge.L(this.V.AP);},_Init:function(aArg){C.It._Init.call(this,aArg);A.acg.Text.
_Init.call(this.H1={I:this},0);A.acg.Text._Init.call(this.Ge={I:this},0);this.__proto__=
C.Aak;this.U(A.aaR(A.acf.AFX));this.H1.H(BpP);this.H1.KI(true);this.H1.R(A.aaR(A.
acf.Aud));this.H1.L(A.jb.Text);this.Ge.H(A_p);this.Ge.R(Ae9);this.Ge.L(A.jb.Text
);this.J(this.H1,0);this.J(this.Ge,0);this.V.S(A.aaL(A.fl.Ia));this.H1.S(A.aaL(A.
fl.Ia));this.Ge.S(A.aaL(A.fl.J8));},_Done:function(){this.__proto__=C.It;this.H1.
_Done();this.Ge._Done();C.It._Done.call(this);},_ReInit:function(){C.It._ReInit.
call(this);this.H1._ReInit();this.Ge._ReInit();this.U(A.aaR(A.acf.AFX));this.H1.
R(A.aaR(A.acf.Aud));this.V.S(A.aaL(A.fl.Ia));this.H1.S(A.aaL(A.fl.Ia));this.Ge.S(
A.aaL(A.fl.J8));},_Mark:function(D){var B;C.It._Mark.call(this,D);if((B=this.H1).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemWeightClassHeading"};C.O8={AN:null,A9:null,PL:null,H1:
null,Ge:null,A9V:A.jV,Aud:0,A8S:0,Bg:function(aSize){C.It.Bg.call(this,aSize);this.
PL.H([0,0,((aSize[0]*57)/100)|0,aSize[1]]);this.AN.H([this.PL.M[2]-1,0,this.PL.M[
2]+1,aSize[1]]);this.H1.H([this.PL.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
A9.H([this.H1.M[2]-1,0,this.H1.M[2]+1,aSize[1]]);this.Ge.H([this.H1.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.It.Ai.call(this,Ae);this.PL.L(this.V.AP);this.
H1.L(this.V.AP);this.Ge.L(this.V.AP);},Bk_:function(E){if(this.A9V===E)return;this.
A9V=E;this.PL.R(E);},Bjy:function(E){if(this.Aud===E)return;this.Aud=E;this.H1.R(
E.toFixed());},A8m:function(E){if(this.A8S===E)return;this.A8S=E;this.Ge.R(E.toFixed(
)+Axa);},_Init:function(aArg){C.It._Init.call(this,aArg);A.acg.AI._Init.call(this.
AN={I:this},0);A.acg.AI._Init.call(this.A9={I:this},0);A.acg.Text._Init.call(this.
PL={I:this},0);A.acg.Text._Init.call(this.H1={I:this},0);A.acg.Text._Init.call(this.
Ge={I:this},0);this.__proto__=C.O8;this.AN.L(A.jb.Bb);this.A9.L(A.jb.Bb);this.PL.
H(BpQ);this.PL.R(A.aaR(A.acf.AFX));this.PL.L(A.jb.Text);this.H1.R(ZG);this.H1.L(
A.jb.Text);this.Ge.R(BpR);this.Ge.L(A.jb.Text);this.J(this.AN,0);this.J(this.A9,
0);this.J(this.PL,0);this.J(this.H1,0);this.J(this.Ge,0);this.PL.S(A.aaL(A.fl.Ah
));this.H1.S(A.aaL(A.fl.Ah));this.Ge.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.It;this.AN._Done();this.A9._Done();this.PL._Done();this.H1._Done();this.Ge._Done(
);C.It._Done.call(this);},_ReInit:function(){C.It._ReInit.call(this);this.AN._ReInit(
);this.A9._ReInit();this.PL._ReInit();this.H1._ReInit();this.Ge._ReInit();this.PL.
R(A.aaR(A.acf.AFX));this.PL.S(A.aaL(A.fl.Ah));this.H1.S(A.aaL(A.fl.Ah));this.Ge.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.It._Mark.call(this,D);if((B=this.AN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ge)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"
};C.AK$={AJw:function(){var Bc=A._GetAutoObject(A.Device.Helper).MZ();A._GetAutoObject(
A.Device.Device).Aq.Bm(Bc);},_Init:function(aArg){C.Al1._Init.call(this,aArg);this.
__proto__=C.AK$;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.AP0={
RF:null,RL:null,RE:null,RI:null,O_:null,RH:null,AJ0:function(G){A.pe([this,this.
Bzl],this);A.pe([this,this.Bza],this);A.pe([this,this.By8],this);A.pe([this,this.
A2A],this);A.pe([this,this.Bzd],this);A.pe([this,this.Bzb],this);},H9:function(G
){var Cr=(C.QD.isPrototypeOf(G)?G:null);if(!Cr)return;if(Cr===this.RL)A._GetAutoObject(
C.AY).B1(20);else if(Cr===this.O_)A._GetAutoObject(C.AY).B1(14);else if(Cr===this.
RF)A._GetAutoObject(C.AY).B1(12);else if(Cr===this.RI)A._GetAutoObject(C.AY).B1(
47);else if(Cr===this.RE)A._GetAutoObject(C.AY).B1(58);else if(Cr===this.RH)A._GetAutoObject(
C.AY).B1(69);},Bza:function(G){var Bc=A._GetAutoObject(A.Device.Helper).MZ();var
Ayl=A._NewObject(A.Device.BoolFilterCriterion,0);Ayl.Initialize(9,0,true,true);Bc.
CZ(Ayl);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.O_.YY(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},Bzl:function(G){var Bc=A._GetAutoObject(A.
Device.Helper).MZ();var AAr=A._NewObject(A.Device.BoolFilterCriterion,0);AAr.Initialize(
12,0,true,true);Bc.CZ(AAr);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RL.YY(
A._GetAutoObject(A.Device.Device).Aq.Ch().toFixed());},By8:function(G){var Bc=A.
_GetAutoObject(A.Device.Helper).MZ();var Ax3=A._NewObject(A.Device.BoolFilterCriterion
,0);Ax3.Initialize(8,0,true,true);Bc.CZ(Ax3);A._GetAutoObject(A.Device.Device).Aq.
Bm(Bc);this.RF.YY(A._GetAutoObject(A.Device.Device).Aq.Ch().toFixed());},A2A:function(
G){var Bc=A._GetAutoObject(A.Device.Helper).A4W(A._GetAutoObject(A.Device.Device
).AAx);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RE.YY(A._GetAutoObject(A.
Device.Device).Aq.Ch().toFixed());},Bzd:function(G){var Bc=A._GetAutoObject(A.Device.
Helper).A42();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RI.YY(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},Bzb:function(G){var Bc=A._GetAutoObject(A.
Device.Helper).ABQ();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RH.YY(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},_Init:function(aArg){C.TN._Init.call(this,
aArg);C.QD._Init.call(this.RF={I:this},0);C.QD._Init.call(this.RL={I:this},0);C.
QD._Init.call(this.RE={I:this},0);C.QD._Init.call(this.RI={I:this},0);C.QD._Init.
call(this.O_={I:this},0);C.QD._Init.call(this.RH={I:this},0);this.__proto__=C.AP0;
this.RF.H(PT);this.RF.Aj(true);this.RF.U(A.aaR(A.acf.Alarm));this.RF.Abx(true);this.
RL.H(AYk);this.RL.Aj(true);this.RL.U(A.aaR(A.acf.Arq));this.RL.Abx(true);this.RE.
H(NY);this.RE.Aj(true);this.RE.U(A.aaR(A.acf.ActionList));this.RE.Abx(true);this.
RI.H(PU);this.RI.Aj(true);this.RI.U(A.aaR(A.acf.ANe));this.RI.Abx(true);this.O_.
H(SL);this.O_.Ar(false);this.O_.Aj(false);this.O_.Y(false);this.O_.U(A.aaR(A.acf.
AA$));this.O_.Abx(true);this.RH.H(Uu);this.RH.Aj(true);this.RH.U(A.aaR(A.acf.A4z
));this.RH.Abx(true);this.J(this.RF,0);this.J(this.RL,0);this.J(this.RE,0);this.
J(this.RI,0);this.J(this.O_,0);this.J(this.RH,0);this.RF.AQ=[this,this.Acm];this.
RF.Dz(A.aaL(A.ach.ACl));this.RF.AbA(A.aaL(A.ach.NI));this.RL.AQ=[this,this.Acm];
this.RL.Dz(A.aaL(A.ach.APo));this.RL.AbA(A.aaL(A.ach.NI));this.RE.AQ=[this,this.
Acm];this.RE.Dz(A.aaL(A.ach.AOk));this.RE.AbA(A.aaL(A.ach.NI));this.RI.AQ=[this,
this.Acm];this.RI.Dz(A.aaL(A.ach.AOS));this.RI.AbA(A.aaL(A.ach.NI));this.O_.AQ=[
this,this.Acm];this.O_.Dz(A.aaL(A.ach.ACl));this.O_.AbA(A.aaL(A.ach.NI));this.RH.
AQ=[this,this.Acm];this.RH.Dz(A.aaL(A.ach.AOI));this.RH.AbA(A.aaL(A.ach.NI));},_Done:
function(){this.__proto__=C.TN;this.RF._Done();this.RL._Done();this.RE._Done();this.
RI._Done();this.O_._Done();this.RH._Done();C.TN._Done.call(this);},_ReInit:function(
){C.TN._ReInit.call(this);this.RF._ReInit();this.RL._ReInit();this.RE._ReInit();
this.RI._ReInit();this.O_._ReInit();this.RH._ReInit();this.RF.U(A.aaR(A.acf.Alarm
));this.RL.U(A.aaR(A.acf.Arq));this.RE.U(A.aaR(A.acf.ActionList));this.RI.U(A.aaR(
A.acf.ANe));this.O_.U(A.aaR(A.acf.AA$));this.RH.U(A.aaR(A.acf.A4z));},_Mark:function(
D){var B;C.TN._Mark.call(this,D);if((B=this.RF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.APZ={RM:null,Vf:null,RJ:null,RG:null,RK:null,AJ0:function(G){A.pe([this,this.
By9],this);A.pe([this,this.Bzh],this);A.pe([this,this.Bzi],this);A.pe([this,this.
Bzm],this);A.pe([this,this.Bzj],this);},H9:function(G){var Cr=(C.QD.isPrototypeOf(
G)?G:null);if(!Cr)return;if(Cr===this.Vf)A._GetAutoObject(C.AY).B1(102);if(Cr===
this.RG)A._GetAutoObject(C.AY).B1(85);if(Cr===this.RJ)A._GetAutoObject(C.AY).B1(
80);if(Cr===this.RK)A._GetAutoObject(C.AY).B1(51);if(Cr===this.RM)A._GetAutoObject(
C.AY).B1(96);},Bzi:function(G){var Bc=A._GetAutoObject(A.Device.Helper).ANp();A.
_GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RK.YY(A._GetAutoObject(A.Device.Device
).Aq.Ch().toFixed());},Bzm:function(G){var Bc=A._GetAutoObject(A.Device.Helper).
A4$();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RM.YY(A._GetAutoObject(A.
Device.Device).Aq.Ch().toFixed());},Bzh:function(G){var Bc=A._GetAutoObject(A.Device.
Helper).A46();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RJ.YY(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},By9:function(G){var Bc=A._GetAutoObject(A.
Device.Helper).ANf();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RG.YY(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},Bzj:function(G){var Bc=A._GetAutoObject(A.
Device.Helper).ANr();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.Vf.YY(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},_Init:function(aArg){C.TN._Init.call(this,
aArg);C.QD._Init.call(this.RM={I:this},0);C.QD._Init.call(this.Vf={I:this},0);C.
QD._Init.call(this.RJ={I:this},0);C.QD._Init.call(this.RG={I:this},0);C.QD._Init.
call(this.RK={I:this},0);this.__proto__=C.APZ;this.RM.H(BpS);this.RM.Aj(true);this.
RM.U(A.aaR(A.acf.A59));this.RM.Abx(true);this.Vf.H(BpT);this.Vf.Aj(true);this.Vf.
U(A.aaR(A.acf.AE2));this.RJ.H(BpU);this.RJ.Aj(true);this.RJ.U(A.aaR(A.acf.A6a));
this.RJ.Abx(true);this.RG.H(BpV);this.RG.Aj(true);this.RG.U(A.aaR(A.acf.AAS));this.
RG.Abx(true);this.RK.H(BpW);this.RK.Aj(true);this.RK.U(A.aaR(A.acf.A6n));this.RK.
Abx(true);this.J(this.RM,0);this.J(this.Vf,0);this.J(this.RJ,0);this.J(this.RG,0
);this.J(this.RK,0);this.RM.AQ=[this,this.Acm];this.RM.Dz(A.aaL(A.ach.AO7));this.
RM.AbA(A.aaL(A.ach.NI));this.Vf.AQ=[this,this.Acm];this.Vf.Dz(A.aaL(A.ach.ACD));
this.RJ.AQ=[this,this.Acm];this.RJ.Dz(A.aaL(A.ach.AO9));this.RJ.AbA(A.aaL(A.ach.
NI));this.RG.AQ=[this,this.Acm];this.RG.Dz(A.aaL(A.ach.AOD));this.RG.AbA(A.aaL(A.
ach.NI));this.RK.AQ=[this,this.Acm];this.RK.Dz(A.aaL(A.ach.AO$));this.RK.AbA(A.aaL(
A.ach.NI));},_Done:function(){this.__proto__=C.TN;this.RM._Done();this.Vf._Done(
);this.RJ._Done();this.RG._Done();this.RK._Done();C.TN._Done.call(this);},_ReInit:
function(){C.TN._ReInit.call(this);this.RM._ReInit();this.Vf._ReInit();this.RJ._ReInit(
);this.RG._ReInit();this.RK._ReInit();this.RM.U(A.aaR(A.acf.A59));this.Vf.U(A.aaR(
A.acf.AE2));this.RJ.U(A.aaR(A.acf.A6a));this.RG.U(A.aaR(A.acf.AAS));this.RK.U(A.
aaR(A.acf.A6n));},_Mark:function(D){var B;C.TN._Mark.call(this,D);if((B=this.RM).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Vf)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.RJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RG)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsIdManagementScreen"
};C.AQA={V7:function(G){this.AfV();this.Ey(A.aaR(A.acf.Arx),[this,this.Ard],3);this.
Ey(A.aaR(A.acf.Ahc),[this,this.Aj7],2);this.Ey(A.aaR(A.acf.O5),[this,this.Abv],9
);this.Ey(A.aaR(A.acf.A5N),[this,this.BkW],16);this.Ey(A.aaR(A.acf.A5M),[this,this.
BkB],12);this.Ey(A.aaR(A.acf.AiK),[this,this.Am2],0);A._GetAutoObject(C.BW).Gu();
A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.Adf)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Cj(6);},Du:function(G){},AaQ:function(){return C.Ai5;},AaR:function(
){return C.Ajq;},QS:function(G){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(
A.Device.Helper).A46());},HI:function(G){var F;C.EP.HI.call(this,G);if(this.AjM(
)===false){if(!!this.EJ&&((F=this.EJ,F[1].call(F[0]))===16)){this.N.Cm(A.aaL(A.ach.
APh));this.N.Cg=[this,this.A4x];}else{this.N.Cm(A.aaL(A.ach.AO1));this.N.Cg=[this
,this.A4u];}this.N.FA(A.jV);}this.N.Oz(false);this.N.OA(false);},AfH:function(){
A._GetAutoObject(C.AY).B1(81);},AfG:function(){A._GetAutoObject(C.AY).B1(82);},_Init:
function(aArg){C.EP._Init.call(this,aArg);this.__proto__=C.AQA;var B;this.Dr(C.AN0
);this.Dq(A.aaR(A.acf.A6e));this.Aj6([B=A._GetAutoObject(A.Device.Device),B.A69,
B.A$a]);},_ReInit:function(){C.EP._ReInit.call(this);this.Dq(A.aaR(A.acf.A6e));}
,_className:"Application::NoNaisIdListScreen"};C.AQz={_Init:function(aArg){C.IS.
_Init.call(this,aArg);this.__proto__=C.AQz;this.Mj.Ar(false);this.Mj.Aj(false);this.
Mj.Y(false);},_className:"Application::NoNaisIdListFilterScreen"};C.AQy={_Init:function(
aArg){C.Gw._Init.call(this,aArg);this.__proto__=C.AQy;this.N.BU(A.aaR(A.acf.A3x)
);},_ReInit:function(){C.Gw._ReInit.call(this);this.N.BU(A.aaR(A.acf.A3x));},_className:
"Application::NoNaisIdListActionsScreen"};C.AN0={Eo:function(G){C.J9.Eo.call(this
,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter).Af1(10));},_Init:function(aArg
){C.J9._Init.call(this,aArg);this.__proto__=C.AN0;},_className:"Application::HeaderNoNaisIdListFilter"
};C.QP={Bdk:false,Du:function(G){},CJ:function(G){C.EP.CJ.call(this,G);if(this.Bdk&&(
A._GetAutoObject(A.Device.Device).T_>0))A.pe([this,this.AHr],this);},Ao9:function(
G){this.A4t(this);},AfH:function(){A._GetAutoObject(C.AY).B1(83);},AfG:function(
){A._GetAutoObject(C.AY).B1(84);},AQI:function(G){throw new Error(AnY);},A_K:function(
s){this.AQI(s);},AQJ:function(G){throw new Error(AnY);},A_L:function(s){this.AQJ(
s);},AQO:function(G){throw new Error(AnY);},AHr:function(s){this.AQO(s);},BcB:function(
G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
7)){this.Bdk=true;A._GetAutoObject(C.AY).B1(87);}},Alt:function(G){var B;var As=(
A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===5))A.z$([
this,this.AfF],[B=A._GetAutoObject(A.Device.Device),B.Abs,B.Acl],0);},AfF:function(
G){var B;if(A._GetAutoObject(A.Device.Device).AkA===3){A._GetAutoObject(A.Device.
Device).A6(74,false,A.jV,0,[this,this.Alt]);A.z$([this,this.AfF],[B=A._GetAutoObject(
A.Device.Device),B.Abs,B.Acl],0);A.pe([this,this.AHr],this);}},AIk:function(){throw new
Error(AnY);},A6w:function(G){A._GetAutoObject(A.Device.Device).Cj(0);this.A4s(this
);},Blj:function(G){A._GetAutoObject(A.Device.Device).Cj(0);this.BfF(this);},_Init:
function(aArg){C.EP._Init.call(this,aArg);this.__proto__=C.QP;this.Dq(A.aaR(A.acf.
A6l));},_ReInit:function(){C.EP._ReInit.call(this);this.Dq(A.aaR(A.acf.A6l));},_className:
"Application::RegistrationsListScreen"};C.ASI={_Init:function(aArg){C.IS._Init.call(
this,aArg);this.__proto__=C.ASI;},_className:"Application::RegistrationsListFilterScreen"
};C.ASH={_Init:function(aArg){C.Gw._Init.call(this,aArg);this.__proto__=C.ASH;this.
N.BU(A.aaR(A.acf.A3z));},_ReInit:function(){C.Gw._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A3z));},_className:"Application::RegistrationsListActionsScreen"};C.Ajp={
Eo:function(G){C.Vw.Eo.call(this,G);this.Db.Ax(A._GetAutoObject(A.Device.Converter
).Af1(11));},_Init:function(aArg){C.Vw._Init.call(this,aArg);this.__proto__=C.Ajp;
this.Text.H(BpX);this.Text.R(A.jV);this.Text.A2(0x12);},_className:"Application::HeaderRegistrationsList"
};C.AAZ={ML:0,AN:null,A9:null,D4:null,Iz:null,Sx:null,Gm:null,Oe:0,K1:0,Init:function(
aArg){},Bg:function(aSize){C.Ba.Bg.call(this,aSize);this.Background.H(A.abK(this.
Background.M,aSize));this.V.H(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AN.H([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Iz.H([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A9.H([this.Iz.M[2]-1,0,this.Iz.M[2]+1,aSize[
1]]);this.Sx.H([this.Iz.M[2],0,this.Iz.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
D4.H([this.Sx.M[2]-1,0,this.Sx.M[2]+1,aSize[1]]);this.Gm.H([this.Sx.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this,Ae);this.Iz.L(this.V.AP);this.
Gm.L(this.V.AP);this.Sx.L(this.V.AP);if(A._GetAutoObject(A.Device.Helper).AjA(this.
K1)){this.V.S(A.aaL(A.fl.Hi));this.U(A_q);this.Sx.R(Q7);}else{this.V.S(A.aaL(A.fl.
Ah));this.U(this.Oe.toFixed());this.Sx.R(A._GetAutoObject(A.Device.Helper).Tu(this.
ML,0,5).toFixed());}},Cc:function(Ac){if(!this.AX)return;this.Hr=Ac;if(!!this.AX
){this.Oe=this.AX.CA(Ac,1);this.K1=this.AX.ANv(Ac,34);var As_=this.AX.ANl(Ac,7);
this.ML=this.AX.LL(Ac,26);var Ax_=this.AX.Hy(Ac,4);var Afi=A._GetAutoObject(A.Device.
Helper).MF(Ax_,A._GetAutoObject(A.Device.Helper).Dy());this.Iz.Ax(A._GetAutoObject(
A.Device.Converter).Amo(As_));if(Afi<100)this.Gm.R((Afi.toFixed()+CO)+A.aaR(A.acf.
AKy));else this.Gm.R(A._GetAutoObject(A.acj.KB).ABN(Ax_,A._GetAutoObject(A.Device.
Helper).Dy(),AG8));this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);
A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A9={I:this},0);
A.acg.AI._Init.call(this.D4={I:this},0);A.acg.Am._Init.call(this.Iz={I:this},0);
A.acg.Text._Init.call(this.Sx={I:this},0);C.CP._Init.call(this.Gm={I:this},0);this.
__proto__=C.AAZ;this.AN.H(AnS);this.AN.L(A.jb.Bb);this.A9.H(AnT);this.A9.L(A.jb.
Bb);this.D4.H(A_r);this.D4.L(A.jb.Bb);this.Iz.H(A_s);this.Iz.L(A.jb.Text);this.Sx.
H(Axv);this.Gm.H(A_t);this.J(this.AN,0);this.J(this.A9,0);this.J(this.D4,0);this.
J(this.Iz,0);this.J(this.Sx,0);this.J(this.Gm,0);this.Sx.S(A.aaL(A.fl.Ah));this.
Gm.S(A.aaL(A.fl.Ah));this.Gm.A5(A.aaL(A.fl.Ak));this.Gm.CC(A.aaL(A.fl.By));this.
Init(aArg);},_Done:function(){this.__proto__=C.Ba;this.AN._Done();this.A9._Done(
);this.D4._Done();this.Iz._Done();this.Sx._Done();this.Gm._Done();C.Ba._Done.call(
this);},_ReInit:function(){C.Ba._ReInit.call(this);this.AN._ReInit();this.A9._ReInit(
);this.D4._ReInit();this.Iz._ReInit();this.Sx._ReInit();this.Gm._ReInit();this.Sx.
S(A.aaL(A.fl.Ah));this.Gm.S(A.aaL(A.fl.Ah));this.Gm.A5(A.aaL(A.fl.Ak));this.Gm.CC(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.Ba._Mark.call(this,D);if((B=this.AN).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gm)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ACd={Ajx:
null,Pk:null,IV:null,_Init:function(aArg){C.Dv._Init.call(this,aArg);A.acg.Am._Init.
call(this.Ajx={I:this},0);A.acg.Am._Init.call(this.Pk={I:this},0);A.acg.Am._Init.
call(this.IV={I:this},0);this.__proto__=C.ACd;this.Ajx.H(BpY);this.Ajx.L(A.jb.Text
);this.Pk.H(BpZ);this.Pk.L(A.jb.Text);this.IV.H(A_h);this.IV.L(A.jb.Text);this.J(
this.Ajx,0);this.J(this.Pk,0);this.J(this.IV,0);this.Ajx.Ax(A.aaL(A.ach.ACz));this.
Pk.Ax(A.aaL(A.ach.AuZ));this.IV.Ax(A.aaL(A.ach.AuU));},_Done:function(){this.__proto__=
C.Dv;this.Ajx._Done();this.Pk._Done();this.IV._Done();C.Dv._Done.call(this);},_ReInit:
function(){C.Dv._ReInit.call(this);this.Ajx._ReInit();this.Pk._ReInit();this.IV.
_ReInit();},_Mark:function(D){var B;C.Dv._Mark.call(this,D);if((B=this.Ajx)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
AN2={IF:null,Agm:null,HJ:null,Bb:null,Mq:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.Eo],[B=A._GetAutoObject(A.Device.Helper
).W,B.A6$,B.A8q],0);A.zX([this,this.Eo],[B=A._GetAutoObject(A.Device.Helper).W,B.
V6,B.JG],0);A.zX([this,this.Eo],[B=A._GetAutoObject(A.Device.Helper).W,B.AqQ,B.T5
],0);A.zV([this,this.Eo],A._GetAutoObject(A.Device.Helper).W,0);A.pe([this,this.
Eo],this);},C7:function(E){C.BO.C7.call(this,E);this.IF.L(E);this.Agm.L(E);this.
HJ.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HJ.R(A.aaR(A.acf.Aez));else this.HJ.R(((A.aaR(A.acf.GB)+A.aaR(A.acf.
Colon))+CO)+E.toFixed());},Eo:function(G){if(A._GetAutoObject(A.Device.Helper).W.
Aqd()){this.Av8(((A._GetAutoObject(A.Device.Helper).W.CF+1).toFixed()+A95)+A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());this.JG(A._GetAutoObject(A.Device.Helper).W.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).W.VisualId);this.M_(
A._GetAutoObject(A.Device.Helper).W.WhereAbouts);}else{this.Av8(A96);this.JG(2);
this.OnSetAnimalId(-1);this.M_(0);}},JG:function(E){if(this.Gender===E)return;this.
Gender=E;this.Agm.Ax(A._GetAutoObject(A.Device.Converter).Amo(E));},Av8:function(
E){if(this.Mq===E)return;this.Mq=E;this.IF.R(E);},M_:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).AjA(E))this.HJ.
Y(false);else this.HJ.Y(true);},_Init:function(aArg){C.BO._Init.call(this,aArg);
A.acg.Text._Init.call(this.IF={I:this},0);A.acg.Am._Init.call(this.Agm={I:this},
0);A.acg.Text._Init.call(this.HJ={I:this},0);A.acg.DR._Init.call(this.Bb={I:this
},0);this.__proto__=C.AN2;this.IF.H(A97);this.IF.HG(2);this.IF.KI(true);this.IF.
A2(0x12);this.IF.R(A98);this.Agm.H(Bp0);this.HJ.H(Bp1);this.HJ.A2(0x11);this.HJ.
R(A.aaR(A.acf.Aez));this.Bb.DK(AxA);this.Bb.DY(Asz);this.Bb.L(A.jb.Bb);this.J(this.
IF,0);this.J(this.Agm,0);this.J(this.HJ,0);this.J(this.Bb,0);this.IF.S(A.aaL(A.fl.
Ak));this.Agm.Ax(A._GetAutoObject(A.Device.Converter).Amo(2));this.HJ.S(A.aaL(A.
fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.BO;this.IF._Done();this.
Agm._Done();this.HJ._Done();this.Bb._Done();C.BO._Done.call(this);},_ReInit:function(
){C.BO._ReInit.call(this);this.IF._ReInit();this.Agm._ReInit();this.HJ._ReInit();
this.Bb._ReInit();this.HJ.R(A.aaR(A.acf.Aez));this.IF.S(A.aaL(A.fl.Ak));this.HJ.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BO._Mark.call(this,D);if((B=this.IF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aan={EaseOfDeliveryToString:
null,Age:null,Cc:function(G){C.Nv.Cc.call(this,G);var AIE=A._GetAutoObject(A.Device.
Helper).W.EaseOfDelivery;this.Kg(this.EaseOfDeliveryToString.Lm(AIE));this.GK.R(
this.Age.AdK(AIE).toFixed());},C7:function(E){C.Nv.C7.call(this,E);this.GK.L(E);
},_Init:function(aArg){C.Nv._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.Age._Init.call(this.
Age={I:this},0);this.__proto__=C.Aan;this.U(A.aaR(A.acf.Af8));},_Done:function(){
this.__proto__=C.Nv;this.EaseOfDeliveryToString._Done();this.Age._Done();C.Nv._Done.
call(this);},_ReInit:function(){C.Nv._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.Age._ReInit();this.U(A.aaR(A.acf.Af8));},_Mark:function(D){var B;
C.Nv._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Age)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.Xr={WhereAboutsToString:null,KO:null,Cc:function(G){C.Nv.Cc.call(this,G);var
K1=A._GetAutoObject(A.Device.Helper).W.WhereAbouts;this.Kg(this.WhereAboutsToString.
Lm(K1));this.GK.R(this.KO.AdK(K1).toFixed());},C7:function(E){C.Nv.C7.call(this,
E);this.GK.L(E);},_Init:function(aArg){C.Nv._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KO._Init.call(this.KO={
I:this},0);this.__proto__=C.Xr;this.U(A.aaR(A.acf.I6));},_Done:function(){this.__proto__=
C.Nv;this.WhereAboutsToString._Done();this.KO._Done();C.Nv._Done.call(this);},_ReInit:
function(){C.Nv._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KO._ReInit(
);this.U(A.aaR(A.acf.I6));},_Mark:function(D){var B;C.Nv._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KO)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.RC={Cl:null,Z:null,Av:null,Init:function(aArg){},CJ:function(G){var B;C.D2.CJ.
call(this,G);A.zX([this,this.Ae$],[B=A._GetAutoObject(A.Device.Helper).W,B.QK,B.
OnSetId],0);A.zX([this,this.Ae$],[B=A._GetAutoObject(A.Device.Helper),B.UA,B.UB]
,0);A.pe([this,this.Ae$],this);},Fd:function(G){var B;C.D2.Fd.call(this,G);A.z$([
this,this.Ae$],[B=A._GetAutoObject(A.Device.Helper).W,B.QK,B.OnSetId],0);A.z$([this
,this.Ae$],[B=A._GetAutoObject(A.Device.Helper),B.UA,B.UB],0);},E9:function(G){var
B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.
Mn(-this.Z.Bp[1]);},Du:function(G){switch(this.Cl.CI){case 6:case 7:this.Cl.Ny=true;
break;case 4:this.BdF(4);break;case 5:this.BdF(5);break;default:;}},BdF:function(
Gn){var B;switch(Gn){case 5:{var Cy=this.Z.Bp[1]-40;if(Cy<-(((B=this.Z.Da(0x1))[
3]-B[1])-((B=this.Z.M)[3]-B[1])))Cy=-(((B=this.Z.Da(0x1))[3]-B[1])-((B=this.Z.M)[
3]-B[1]));if(Cy>0)Cy=0;this.Z.Gc([this.Z.Bp[0],Cy]);}break;case 4:{var Cy=this.Z.
Bp[1]+40;if(Cy>0)Cy=0;this.Z.Gc([this.Z.Bp[0],Cy]);}break;default:throw new Error(
Bp2);}},Hu:function(G){var B;var X=this.Z.Ag;var Aa;while(!!X&&!((X.T&0x200)===0x200
)){if(((X.T&0x400)===0x400)){Aa=(C.IR.isPrototypeOf(X)?X:null);if(!!Aa)Aa.Cc(this
);}X=X.Ag;}},Ae$:function(s){this.Hu(s);},MG:function(G){var B;this.Z.U6(null,null
);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hx(this.AR,true,null,null);},
G4:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.D2._Init.call(
this,aArg);A.Core.BJ._Init.call(this.Cl={I:this},0);A.Core.Z._Init.call(this.Z={
I:this},0);C.Av._Init.call(this.Av={I:this},0);this.__proto__=C.RC;this.Cl.Filter=
147;this.Z.H(SO);this.Z.Kb(1);this.Av.H(Asb);this.J(this.Z,0);this.J(this.Av,0);
this.Cl.BK=[this,this.Du];this.Cl.DS=[this,this.Du];this.Z.Ei=[this,this.G4];this.
Init(aArg);},_Done:function(){this.__proto__=C.D2;this.Cl._Done();this.Z._Done();
this.Av._Done();C.D2._Done.call(this);},_ReInit:function(){C.D2._ReInit.call(this
);this.Cl._ReInit();this.Z._ReInit();this.Av._ReInit();},_Mark:function(D){var B;
C.D2._Mark.call(this,D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRowInfos"};C.Xs={Aah:null,Xo:null,Aai:null,Xp:null
,Aan:null,Xr:null,_Init:function(aArg){C.RC._Init.call(this,aArg);C.Aah._Init.call(
this.Aah={I:this},0);C.Xo._Init.call(this.Xo={I:this},0);C.Aai._Init.call(this.Aai={
I:this},0);C.Xp._Init.call(this.Xp={I:this},0);C.Aan._Init.call(this.Aan={I:this
},0);C.Xr._Init.call(this.Xr={I:this},0);this.__proto__=C.Xs;this.Aah.H(BC);this.
Aah.Aj(true);this.Xo.H(KP);this.Xo.Aj(true);this.Xo.Bf(true);this.Aai.H(Q6);this.
Aai.Aj(true);this.Xp.H(WJ);this.Xp.Aj(true);this.Xp.Bf(true);this.Aan.H(AkJ);this.
Aan.Aj(true);this.Xr.H(AnQ);this.Xr.Aj(true);this.Xr.Bf(true);this.J(this.Aah,0);
this.J(this.Xo,0);this.J(this.Aai,0);this.J(this.Xp,0);this.J(this.Aan,0);this.J(
this.Xr,0);},_Done:function(){this.__proto__=C.RC;this.Aah._Done();this.Xo._Done(
);this.Aai._Done();this.Xp._Done();this.Aan._Done();this.Xr._Done();C.RC._Done.call(
this);},_ReInit:function(){C.RC._ReInit.call(this);this.Aah._ReInit();this.Xo._ReInit(
);this.Aai._ReInit();this.Xp._ReInit();this.Aan._ReInit();this.Xr._ReInit();},_Mark:
function(D){var B;C.RC._Mark.call(this,D);if((B=this.Aah)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Xo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aai)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aan)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xr)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalRegistrationInfos"};C.Xp={BreedToString:null,GK:null,MS:null
,Cc:function(G){C.Is.Cc.call(this,G);var Bu=A._GetAutoObject(A.Device.Helper).W.
Breed;this.U(this.BreedToString.BX(Bu));this.GK.R(this.MS.AdK(Bu).toFixed());},C7:
function(E){C.Is.C7.call(this,E);this.GK.L(E);},_Init:function(aArg){C.Is._Init.
call(this,aArg);A.Device.BreedToString._Init.call(this.BreedToString={I:this},0);
A.acg.Text._Init.call(this.GK={I:this},0);A.Device.MS._Init.call(this.MS={I:this
},0);this.__proto__=C.Xp;this.BP.H(Bp3);this.GK.H(Bp4);this.GK.HG(5);this.GK.A2(
0x14);this.GK.R(Bp5);this.GK.L(A.jb.Text);this.J(this.GK,0);this.Hk.Ax(A.aaL(A.ach.
ACq));this.GK.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Is;this.BreedToString.
_Done();this.GK._Done();this.MS._Done();C.Is._Done.call(this);},_ReInit:function(
){C.Is._ReInit.call(this);this.BreedToString._ReInit();this.GK._ReInit();this.MS.
_ReInit();this.GK.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Is._Mark.call(this
,D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MS)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoIconItemBreed"};C.Aai={Cc:function(G){C.Is.Cc.call(this,
G);var Azg=A._GetAutoObject(A.Device.Helper).W.NaisIdMother;if(Azg>0)this.U(A._GetAutoObject(
A.Device.Converter).Q1(Azg));else this.U(A.aaR(A.acf.Unknown));},_Init:function(
aArg){C.Is._Init.call(this,aArg);this.__proto__=C.Aai;this.Hk.Ax(A.aaL(A.ach.AOJ
));},_className:"Application::AnimalInfoIconItemNaisIdMother"};C.Xo={X7:null,Cc:
function(G){C.Is.Cc.call(this,G);var SX=A._GetAutoObject(A.Device.Helper).W.DateOfBirth;
var Afm=A._GetAutoObject(A.Device.Helper).W.BirthType;if(SX>0)this.U(A._GetAutoObject(
A.acj.KB).Ajj(SX));else this.U(A.aaR(A.acf.Unknown));var Aya=A.aaL(A.aci.Ts);switch(
Afm){case 0:Aya=A.aaL(A.ach.ACo);break;case 1:{Aya=A.aaL(A.ach.AuV);this.X7.Ct(0
);}break;case 2:{Aya=A.aaL(A.ach.AuV);this.X7.Ct(1);}break;case 3:{Aya=A.aaL(A.ach.
AuV);this.X7.Ct(2);}break;default:A.ab5("%s%e",Bp6,Afm);}this.X7.Ax(Aya);},_Init:
function(aArg){C.Is._Init.call(this,aArg);A.acg.Am._Init.call(this.X7={I:this},0
);this.__proto__=C.Xo;this.BP.H(Bp7);this.X7.H(AGF);this.X7.L(A.jb.Text);this.J(
this.X7,0);this.Hk.Ax(A.aaL(A.ach.AuU));this.X7.Ax(A.aaL(A.ach.ACo));},_Done:function(
){this.__proto__=C.Is;this.X7._Done();C.Is._Done.call(this);},_ReInit:function(){
C.Is._ReInit.call(this);this.X7._ReInit();},_Mark:function(D){var B;C.Is._Mark.call(
this,D);if((B=this.X7)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBirth"
};C.Aah={ML:0,Xq:null,K1:0,Bg:function(aSize){C.Is.Bg.call(this,aSize);this.Xq.H(
this.Hk.M);},Ai:function(Ae){C.Is.Ai.call(this,Ae);this.Xq.L(this.BP.AP);if(A._GetAutoObject(
A.Device.Helper).AjA(this.K1)){this.U(A.aaR(A.acf.AnimalLoss));this.Hk.Y(false);
this.Xq.Y(true);}else if(this.ML>0){this.U(A._GetAutoObject(A.Device.Converter).
Q1(this.ML));this.Hk.Y(true);this.Xq.Y(false);}else{this.U(A.aaR(A.acf.Unknown));
this.Hk.Y(true);this.Xq.Y(false);}},Cc:function(G){C.Is.Cc.call(this,G);this.ML=
A._GetAutoObject(A.Device.Helper).W.NaisId;this.K1=A._GetAutoObject(A.Device.Helper
).W.WhereAbouts;this.An();},_Init:function(aArg){C.Is._Init.call(this,aArg);A.acg.
Text._Init.call(this.Xq={I:this},0);this.__proto__=C.Aah;this.Xq.R(A_q);this.J(this.
Xq,0);this.Hk.Ax(A.aaL(A.ach.AuZ));this.Xq.S(A.aaL(A.fl.Hi));},_Done:function(){
this.__proto__=C.Is;this.Xq._Done();C.Is._Done.call(this);},_ReInit:function(){C.
Is._ReInit.call(this);this.Xq._ReInit();},_Mark:function(D){var B;C.Is._Mark.call(
this,D);if((B=this.Xq)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"
};C.AK8={Xs:null,Init:function(aArg){var B;A.zX([this,this.Azy],[B=A._GetAutoObject(
A.Device.Device),B.ADl,B.AHu],0);A.pe([this,this.Azy],this);},Du:function(G){var
DW=(A.Core.BJ.isPrototypeOf(G)?G:null);switch(DW.CI){case 6:this.N_(this);break;
case 7:this.MN(this);break;default:DW.Ny=true;}},CJ:function(G){var B;this.Xs.CJ(
this);C.AB.CJ.call(this,G);},Fd:function(G){var B;this.Xs.Fd(this);C.AB.Fd.call(
this,G);},AmU:function(G){A._GetAutoObject(C.AY).Fm();},Xb:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MN:function(G){if(A._GetAutoObject(A.Device.
Device).Aq.Ch()<=1)return;var Lu=A._GetAutoObject(A.Device.Helper).W.CF;Lu=Lu+1;
if(Lu>=A._GetAutoObject(A.Device.Device).Aq.Ch())Lu=0;A._GetAutoObject(A.Device.
Helper).HD(Lu);},N_:function(G){if(A._GetAutoObject(A.Device.Device).Aq.Ch()<=1)
return;var Lu=A._GetAutoObject(A.Device.Helper).W.CF;Lu=Lu-1;if(Lu<0)Lu=A._GetAutoObject(
A.Device.Device).Aq.Ch()-1;A._GetAutoObject(A.Device.Helper).HD(Lu);},Azy:function(
G){if(!A._GetAutoObject(A.Device.Device).ApM)A._GetAutoObject(C.AY).AgY(85);},_Init:
function(aArg){C.AB._Init.call(this,aArg);C.Xs._Init.call(this.Xs={I:this},0);this.
__proto__=C.AK8;this.Background.H(B9);this.N.Y(true);this.N.Oz(true);this.N.OA(true
);this.Dr(C.AN2);this.Xs.H(E4);this.J(this.Xs,0);this.N.Cw=[this,this.AmU];this.
N.Cg=[this,this.Xb];this.N.CS(A.aaL(A.ach.EV));this.N.Cm(A.aaL(A.ach.Aa0));this.
Init(aArg);},_Done:function(){this.__proto__=C.AB;this.Xs._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.Xs._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Xs)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.Is={Hk:null,BP:null
,U:function(E){C.IR.U.call(this,E);this.BP.R(this.DE);},C7:function(E){C.IR.C7.call(
this,E);this.Hk.L(E);this.BP.L(E);},_Init:function(aArg){C.IR._Init.call(this,aArg
);A.acg.Am._Init.call(this.Hk={I:this},0);C.CP._Init.call(this.BP={I:this},0);this.
__proto__=C.Is;this.Hk.H(Bp8);this.Hk.L(A.jb.Text);this.BP.H(Bp9);this.BP.A2(0x11
);this.BP.L(A.jb.Text);this.J(this.Hk,0);this.J(this.BP,0);this.Hk.Ax(A.aaL(A.aci.
Ts));this.BP.S(A.aaL(A.fl.Ah));this.BP.A5(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.IR;this.Hk._Done();this.BP._Done();C.IR._Done.call(this);},_ReInit:function(
){C.IR._ReInit.call(this);this.Hk._ReInit();this.BP._ReInit();this.BP.S(A.aaL(A.
fl.Ah));this.BP.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IR._Mark.call(this
,D);if((B=this.Hk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BP)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.IR={Background:null
,KJ:0,G_:false,CT:function(){this.Cc(this);},Init:function(aArg){var B;A.zX([this
,this.A$q],[B=A._GetAutoObject(A.Device.Helper).W,B.QK,B.OnSetId],0);A.pe([this,
this.A$q],this);},Bg:function(aSize){C.G7.Bg.call(this,aSize);this.Background.H(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.G7.Ai.call(this,Ae);if(this.
G_)this.Background.L(A.jb.Bh);else this.Background.L(A.jb.CE);},Cc:function(G){}
,A$q:function(s){this.Cc(s);},Bf:function(E){if(this.G_===E)return;this.G_=E;this.
An();},C7:function(E){if(this.KJ===E)return;this.KJ=E;},_Init:function(aArg){C.G7.
_Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);this.__proto__=
C.IR;this.H(BC);this.Background.H(AG_);this.KJ=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.G7;this.Background._Done(
);C.G7._Done.call(this);},_ReInit:function(){C.G7._ReInit.call(this);this.Background.
_ReInit();this.CT();},_Mark:function(D){var B;C.G7._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.Nv={GK:null,Bx4:function(G){this.BP.H(A.abN(this.BP.M,this.GK.M[0]));},_Init:
function(aArg){C.Fl._Init.call(this,aArg);A.acg.Text._Init.call(this.GK={I:this}
,0);this.__proto__=C.Nv;this.GK.AW(0xA);this.GK.H(Bp_);this.GK.HG(5);this.GK.IZ(
true);this.GK.A2(0x14);this.GK.R(A.jV);this.GK.L(A.jb.Text);this.J(this.GK,0);this.
GK.QN([this,this.Bx4]);this.GK.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Fl;this.GK._Done();C.Fl._Done.call(this);},_ReInit:function(){C.Fl._ReInit.call(
this);this.GK._ReInit();this.GK.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fl.
_Mark.call(this,D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Awo={A9m:false,_Init:function(aArg){C.Aew._Init.call(this,aArg);this.__proto__=
C.Awo;},_className:"Application::OptionsOverlayCheckableNode"};C.AMc={AD3:function(
E){C.ApW.AD3.call(this,E);if(E)this.Pa.R(Bp$);else this.Pa.R(A_u);},_Init:function(
aArg){C.ApW._Init.call(this,aArg);this.__proto__=C.AMc;this.Pa.R(A_u);this.Pa.S(
A.aaL(A.fl.Hi));},_className:"Application::DarkThemeRadioMenuItem"};C.Awq={LN:false
,_Init:function(aArg){C.Aew._Init.call(this,aArg);this.__proto__=C.Awq;},_className:
"Application::OptionsOverlayRadioNode"};C.ASp={GC:null,_Init:function(aArg){C.Cu.
_Init.call(this,aArg);C.QU._Init.call(this.GC={I:this},0);this.__proto__=C.ASp;var
B;this.JH(A.aaR(A.acf.ABD));this.GC.H(Aho);this.GC.Aj(true);this.GC.Y(true);this.
GC.U(A.aaR(A.acf.AE0));this.GC.Are(false);this.GC.A8n(true);this.J(this.GC,0);this.
GC.AgO([B=this.GC,B.FH]);this.GC.Gj([this,this.D9,this.GQ]);this.GC.Aj3(A.aaL(A.
ach.Edit));this.GC.Au([B=A._GetAutoObject(A.Device.Device),B.ARa,B.AYz]);},_Done:
function(){this.__proto__=C.Cu;this.GC._Done();C.Cu._Done.call(this);},_ReInit:function(
){C.Cu._ReInit.call(this);this.GC._ReInit();this.JH(A.aaR(A.acf.ABD));this.GC.U(
A.aaR(A.acf.AE0));},_Mark:function(D){var B;C.Cu._Mark.call(this,D);if((B=this.GC
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesSettingsScreen"
};C.ASn={Gv:0,C4:null,A0:null,J_:null,EZ:null,GermanStateToString:null,CountryToString:
null,Ph:0,K3:0,L3:false,Init:function(aArg){A.zX([this,this.UC],[this,this.Sf,this.
Lh],0);A.zX([this,this.UC],[this,this.AmX,this.AgT],0);},Ai:function(Ae){C.Eb.Ai.
call(this,Ae);this.A0.Fz(this.LK);this.J_.Fz(this.LK);this.EZ.C1(this.LK);},DD:function(
G){var F;if(!this.N)return;switch(this.A3){case 0:break;case 1:{(F=this.N,F[1].call(
F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(
F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(
F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(
null);(F=this.N,F[1].call(F[0])).BU(this.CountryToString.BX(this.K3));(F=this.N,
F[1].call(F[0])).Cb=null;}break;case 2:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.
EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.
G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).BU((A.aaR(A.acf.Gl)+Axc)+this.GermanStateToString.Lm(A._GetAutoObject(A.Device.
Converter).ABO(this.Ph)));(F=this.N,F[1].call(F[0])).Cb=null;}break;default:{(F=
this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(
F=this.N,F[1].call(F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(F[0])).Cm(null);(
F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,
F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(
F[0])).Cb=null;}}},En:function(EC){var S4=this.A3;if(EC<0)EC=0;else if(EC>this.Rn
)EC=this.Rn;switch(EC){case 0:{this.A8(null);if(!this.Gv&&!this.Ph)this.Lh(0);}break;
case 1:this.A8(this.EZ);break;case 2:this.A8(this.J_);break;case 3:if(((S4===2)&&
!this.Ph)&&!this.Gv)return;else{this.A8(this.A0);if(!this.Gv||(S4>0))this.A0.Sp(
2);else this.A0.Sp(7);}break;default:throw new Error(AsD+EC.toFixed());}this.A3=
EC;C.Eb.En.call(this,EC);},Bx:function(E){if(this.AK===E)return;this.AK=E;this.L3=
true;this.Sg(A._GetAutoObject(A.Device.Helper).Tu(E,0,10));this.AgT(A._GetAutoObject(
A.Device.Helper).Tu(E,10,2)|0);this.Lh(A._GetAutoObject(A.Device.Converter).Ab7(
E));this.L3=false;if(!!this.AK){this.J_.Kc(2);this.A0.Kc(10);}else{this.J_.Kc(0);
this.A0.Kc(0);}this.An();},FH:function(G){var F;if(!this.AK){var BN=this.AK;this.
Bx(A._GetAutoObject(A.Device.Helper).ABY());if(this.AK!==BN){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}this.En(2);}else this.En(this.Rn);},
Ajk:function(){return this.Gv;},Ajm:function(){return 9999999999;},Lh:function(E
){if(this.K3===E)return;this.K3=E;if(this.L3===false)A.pe([this,this.UY],this);A.
abo([this,this.Sf,this.Lh],0);},Sg:function(E){if(this.Gv===E)return;this.Gv=E;if(
this.L3===false)A.pe([this,this.UY],this);A.abo([this,this.Abo,this.Sg],0);},UY:
function(G){var F;var aString=(A.abl(A._GetAutoObject(A.Device.Converter).ApT(this.
K3),3,10)+A.abl(this.Ph,2,10))+A.abm(this.Gv,10,10);var BN=this.AK;this.Bx(A.ab0(
aString,0,10));if(this.AK!==BN){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.
abo(this.Q,0);}},AgT:function(E){if(this.Ph===E)return;this.Ph=E;if(this.L3===false
)A.pe([this,this.UY],this);A.abo([this,this.AmX,this.AgT],0);},Sf:function(){return this.
K3;},Abo:function(){return this.Gv;},AmX:function(){return this.Ph;},_Init:function(
aArg){C.Eb._Init.call(this,aArg);C.C4._Init.call(this.C4={I:this},0);C.APx._Init.
call(this.A0={I:this},0);C.Au9._Init.call(this.J_={I:this},0);C.Ar0._Init.call(this.
EZ={I:this},0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={
I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);
this.__proto__=C.ASn;var B;this.Rn=3;this.A0.H(Bqa);this.J_.H(Bqb);this.J_.E1(16
);this.EZ.H(A_v);this.J(this.A0,0);this.J(this.J_,0);this.J(this.EZ,0);this.C4.ADN([
this,this.Sf,this.Lh]);this.A0.Au([this,this.Abo,this.Sg]);this.J_.Au([this,this.
AmX,this.AgT]);this.EZ.CK(this.C4);this.EZ.Au([B=this.C4,B.B_,B.Ca]);this.Init(aArg
);},_Done:function(){this.__proto__=C.Eb;this.C4._Done();this.A0._Done();this.J_.
_Done();this.EZ._Done();this.GermanStateToString._Done();this.CountryToString._Done(
);C.Eb._Done.call(this);},_ReInit:function(){C.Eb._ReInit.call(this);this.C4._ReInit(
);this.A0._ReInit();this.J_._ReInit();this.EZ._ReInit();this.GermanStateToString.
_ReInit();this.CountryToString._ReInit();},_Mark:function(D){var B;C.Eb._Mark.call(
this,D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.J_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.APx={NB:null,NA:null,ER:null,FY:null,Eg:null,Dn:null,CQ:null,Cn:null,Fz:function(
E){if(this.MX===E)return;C.K$.Fz.call(this,E);this.Cn.C1(E);this.CQ.C1(E);this.Dn.
C1(E);this.Eg.C1(E);this.FY.C1(E);this.ER.C1(E);this.NA.C1(E);this.NB.C1(E);},X1:
function(IJ){var B2=null;switch(IJ){case-1:case 0:B2=this.FM;break;case 1:B2=this.
Cn;break;case 2:B2=this.CQ;break;case 3:B2=this.Dn;break;case 4:B2=this.Eg;break;
case 5:B2=this.FY;break;case 6:B2=this.ER;break;case 7:B2=this.NA;break;case 8:B2=
this.NB;break;case 9:B2=this.GJ;break;default:A.ab5("%s",Ahr);}return B2;},_Init:
function(aArg){C.K$._Init.call(this,aArg);C.DF._Init.call(this.NB={I:this},0);C.
DF._Init.call(this.NA={I:this},0);C.DF._Init.call(this.ER={I:this},0);C.DF._Init.
call(this.FY={I:this},0);C.DF._Init.call(this.Eg={I:this},0);C.DF._Init.call(this.
Dn={I:this},0);C.DF._Init.call(this.CQ={I:this},0);C.DF._Init.call(this.Cn={I:this
},0);this.__proto__=C.APx;this.H(Bqc);this.GJ.H(AHm);this.NB.H(AxB);this.NA.H(AX$
);this.ER.H(AYa);this.FY.H(AYb);this.Eg.H(AYc);this.Dn.H(AYd);this.CQ.H(AYe);this.
Cn.H(A_c);this.FM.H(AYf);this.EA.H(AYf);this.J(this.NB,-2);this.J(this.NA,-2);this.
J(this.ER,-2);this.J(this.FY,-2);this.J(this.Eg,-2);this.J(this.Dn,-2);this.J(this.
CQ,-2);this.J(this.Cn,-2);this.NB.Dj=[this,this.GF];this.NA.Dj=[this,this.GF];this.
ER.Dj=[this,this.GF];this.FY.Dj=[this,this.GF];this.Eg.Dj=[this,this.GF];this.Dn.
Dj=[this,this.GF];this.CQ.Dj=[this,this.GF];this.Cn.Dj=[this,this.GF];},_Done:function(
){this.__proto__=C.K$;this.NB._Done();this.NA._Done();this.ER._Done();this.FY._Done(
);this.Eg._Done();this.Dn._Done();this.CQ._Done();this.Cn._Done();C.K$._Done.call(
this);},_ReInit:function(){C.K$._ReInit.call(this);this.NB._ReInit();this.NA._ReInit(
);this.ER._ReInit();this.FY._ReInit();this.Eg._ReInit();this.Dn._ReInit();this.CQ.
_ReInit();this.Cn._ReInit();},_Mark:function(D){var B;C.K$._Mark.call(this,D);if((
B=this.NB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ER)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Eg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ASo={
Gv:0,C4:null,A0:null,EZ:null,CountryToString:null,K3:0,L3:false,Init:function(aArg
){A.zX([this,this.UC],[this,this.Sf,this.Lh],0);},Ai:function(Ae){C.Eb.Ai.call(this
,Ae);this.A0.Fz(this.LK);this.EZ.C1(this.LK);},DD:function(G){var F;if(!this.N)return;
switch(this.A3){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EV
));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.
G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.
N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(
F[0])).BU(this.CountryToString.BX(this.K3));(F=this.N,F[1].call(F[0])).Cb=null;}
break;default:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(
F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(
F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=
null;(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=
this.N,F[1].call(F[0])).Cb=null;}}},En:function(EC){var S4=this.A3;if(EC<0)EC=0;
else if(EC>this.Rn)EC=this.Rn;switch(EC){case 0:{this.A8(null);if(!this.Gv)this.
Lh(0);}break;case 1:this.A8(this.EZ);break;case 2:{this.A8(this.A0);if(!this.Gv||(
S4>0))this.A0.Sp(2);else this.A0.Sp(7);}break;default:throw new Error(AsD+EC.toFixed(
));}this.A3=EC;C.Eb.En.call(this,EC);},Bx:function(E){if(this.AK===E)return;this.
AK=E;this.L3=true;this.Sg(A._GetAutoObject(A.Device.Helper).Tu(E,0,12));this.Lh(
A._GetAutoObject(A.Device.Converter).Ab7(E));this.L3=false;if(!!this.AK)this.A0.
Kc(12);else this.A0.Kc(0);this.An();},FH:function(G){var F;if(!this.AK){var BN=this.
AK;this.Bx(A._GetAutoObject(A.Device.Helper).ABY());if(this.AK!==BN){if(!!this.Q
)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}}this.En(this.Rn);},Ajk:function(
){return this.Gv;},Ajm:function(){return 999999999999;},Lh:function(E){if(this.K3===
E)return;this.K3=E;if(this.L3===false)A.pe([this,this.UY],this);A.abo([this,this.
Sf,this.Lh],0);},Sg:function(E){if(this.Gv===E)return;this.Gv=E;if(this.L3===false
)A.pe([this,this.UY],this);A.abo([this,this.Abo,this.Sg],0);},UY:function(G){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).ApT(this.K3),3,10)+A.abm(
this.Gv,12,10);var BN=this.AK;this.Bx(A.ab0(aString,0,10));if(this.AK!==BN){if(!
!this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}},Sf:function(){return this.
K3;},Abo:function(){return this.Gv;},_Init:function(aArg){C.Eb._Init.call(this,aArg
);C.C4._Init.call(this.C4={I:this},0);C.ACF._Init.call(this.A0={I:this},0);C.Ar0.
_Init.call(this.EZ={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ASo;var B;this.Rn=2;this.A0.H(Bqd);this.EZ.H(A_v);this.
J(this.A0,0);this.J(this.EZ,0);this.C4.ADN([this,this.Sf,this.Lh]);this.A0.Au([this
,this.Abo,this.Sg]);this.EZ.CK(this.C4);this.EZ.Au([B=this.C4,B.B_,B.Ca]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Eb;this.C4._Done();this.A0._Done();this.
EZ._Done();this.CountryToString._Done();C.Eb._Done.call(this);},_ReInit:function(
){C.Eb._ReInit.call(this);this.C4._ReInit();this.A0._ReInit();this.EZ._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.Eb._Mark.call(this,D);
if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DO:null,Z:null,Av:null,XI:null,XJ:null,XH:null,XF:null,XG:null,Du:function(
G){var B;C.AB.Du.call(this,G);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hx(
this.AR,true,null,null);},CJ:function(G){C.AB.CJ.call(this,G);A._GetAutoObject(A.
Device.Device).Aq.Bm(null);A._GetAutoObject(A.Device.Device).Bq.Bm(null);A._GetAutoObject(
A.Device.Helper).Aki();A._GetAutoObject(A.Device.Helper).ArH();},H9:function(G){
var Cr=(C.Fc.isPrototypeOf(G)?G:null);if(!Cr)return;if(Cr===this.XI)A._GetAutoObject(
C.AY).B1(28);else if(Cr===this.XJ)A._GetAutoObject(C.AY).B1(26);else if(Cr===this.
XH)A._GetAutoObject(C.AY).B1(62);else if(Cr===this.XF)A._GetAutoObject(C.AY).B1(
27);else if(Cr===this.XG)A._GetAutoObject(C.AY).B1(89);},A1D:function(G){A._GetAutoObject(
C.AY).Fm();},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.
Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},G4:function(G){A.pe([this,this.
E9],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.acg.AI._Init.call(
this.DO={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Av._Init.call(this.
Av={I:this},0);C.Fc._Init.call(this.XI={I:this},0);C.Fc._Init.call(this.XJ={I:this
},0);C.Fc._Init.call(this.XH={I:this},0);C.Fc._Init.call(this.XF={I:this},0);C.Fc.
_Init.call(this.XG={I:this},0);this.__proto__=C.NewMenu;this.Background.L(A.jb.C0
);this.N.Y(true);this.N.BU(A.jV);this.D$.Ar(false);this.Dr(C.Aqf);this.DO.AW(0x3F
);this.DO.H(E4);this.DO.L(A.jb.CE);this.Z.H(E4);this.Z.Kb(9);this.Av.H(II);this.
XI.H(PT);this.XI.Aj(true);this.XI.U(A.aaR(A.acf.A57));this.XJ.H(AYk);this.XJ.Aj(
true);this.XJ.U(A.aaR(A.acf.NewAnimals));this.XH.H(NY);this.XH.Aj(true);this.XH.
U(A.aaR(A.acf.Calving));this.XF.H(PU);this.XF.Aj(true);this.XF.U(A.aaR(A.acf.AAX
));this.XG.H(Mw);this.XG.Aj(true);this.XG.U(A.aaR(A.acf.AnimalLoss));this.J(this.
DO,0);this.J(this.Z,0);this.J(this.Av,0);this.J(this.XI,0);this.J(this.XJ,0);this.
J(this.XH,0);this.J(this.XF,0);this.J(this.XG,0);this.N.Cw=[this,this.A1D];this.
N.CS(A.aaL(A.ach.EV));this.Z.Ei=[this,this.G4];this.XI.AQ=[this,this.H9];this.XI.
Dz(A.aaL(A.ach.ACA));this.XJ.AQ=[this,this.H9];this.XJ.Dz(A.aaL(A.ach.Au3));this.
XH.AQ=[this,this.H9];this.XH.Dz(A.aaL(A.ach.AOC));this.XF.AQ=[this,this.H9];this.
XF.Dz(A.aaL(A.ach.AOy));this.XG.AQ=[this,this.H9];this.XG.Dz(A.aaL(A.ach.AOr));}
,_Done:function(){this.__proto__=C.AB;this.DO._Done();this.Z._Done();this.Av._Done(
);this.XI._Done();this.XJ._Done();this.XH._Done();this.XF._Done();this.XG._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DO._ReInit(
);this.Z._ReInit();this.Av._ReInit();this.XI._ReInit();this.XJ._ReInit();this.XH.
_ReInit();this.XF._ReInit();this.XG._ReInit();this.XI.U(A.aaR(A.acf.A57));this.XJ.
U(A.aaR(A.acf.NewAnimals));this.XH.U(A.aaR(A.acf.Calving));this.XF.U(A.aaR(A.acf.
AAX));this.XG.U(A.aaR(A.acf.AnimalLoss));},_Mark:function(D){var B;C.AB._Mark.call(
this,D);if((B=this.DO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewMenu"};C.
AQp={KW:null,EaseOfDelivery:null,BirthType:null,Acd:null,Ld:null,Co:null,GO:null
,Lb:null,AyL:true,Init:function(aArg){this.A8(this.C6);A.pe([this,this.Hu],this);
},Ee:function(G){var B;A._GetAutoObject(A.Device.Helper).W.Ha();A._GetAutoObject(
C.AY).Fm();if(!!this.KW)this.KW.Ee(this);},AfE:function(G){var B;var F;A._GetAutoObject(
A.Device.Helper).W.DT((F=this.B4.Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Helper
).W.AvX(true);if(!!this.KW)this.KW.AfE(this);if(A._GetAutoObject(A.Device.Device
).Aq.La())A._GetAutoObject(A.Device.Helper).AI1(A._GetAutoObject(A.Device.Helper
).W,5,5,0,[this,this.Ao4]);else{this.Air();A.pe([this,this.Aps],this);}},AtB:function(
){this.N.BU(A.jV);this.N.C2(A.aaL(A.ach.ACE));this.N.Cb=[this,this.AxR];},CJ:function(
G){var B;C.HR.CJ.call(this,G);if(A._GetAutoObject(A.Device.Device).Aq.La()){A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).Aq.Hz().toFixed(),
0,null);this.Ee(this);}else if(this.AyL){this.AyL=false;A.pe([this,this.A1Q],this
);}else if(!this.KW){this.KW=A._NewObject(C.AQq,0);this.KW.A7V([this,this.AzW]);
A._GetAutoObject(A.Device.Helper).W.Gb();A._GetAutoObject(A.Device.Helper).ApG(A.
_GetAutoObject(A.Device.Helper).W);A._GetAutoObject(A.Device.Helper).W.M_(this.Ar_.
AdK(6));this.KW.LE(this);if(!A._GetAutoObject(A.Device.Helper).W.NaisIdMother)this.
Ee(this);}},Air:function(){A._GetAutoObject(A.Device.Helper).W.Cp(A._GetAutoObject(
A.Device.Device).Aq);var L0=A._GetAutoObject(A.Device.Device).Aq.K7(0,A._GetAutoObject(
A.Device.Helper).W.Id);A._GetAutoObject(A.Device.Device).Sq(L0);if(A._GetAutoObject(
A.Device.Helper).AmA()){if(A._GetAutoObject(A.Device.Device).Bq.La())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),
0,null);else{var BT=A._NewObject(A.Device.Rating,0);BT.Gb();BT.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).W.Id);BT.OnSetBodyWeight(this.Kz);BT.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);BT.Cp(A._GetAutoObject(A.Device.Device).Bq);}}A.
_GetAutoObject(A.Device.Helper).A5a(A._GetAutoObject(A.Device.Helper).W.DateOfBirth
,true);},Aps:function(G){var B;if(!!this.KW)this.KW.Aps(this);},Hu:function(G){if(
A._GetAutoObject(A.Device.Helper).AmA())this.Dd.Y(true);else this.Dd.Y(false);},
Ao4:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;
switch(As.Id){case 41:break;default:A.ab5("%s%e",Asq,As.Id);}},AzW:function(G){this.
LE(this);this.Aej(A._GetAutoObject(A.Device.Helper).AaO(A._GetAutoObject(A.Device.
Helper).W.AnimalType));this.LF(this.C6);},Ao5:function(G){var F;C.HR.Ao5.call(this
,G);(F=this.Dd.Q,F[2].call(F[0],this.Dd.Ans));},A1Q:function(G){A._GetAutoObject(
C.AY).B1(90);},_Init:function(aArg){C.HR._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Acd._Init.call(this.Acd={I:this},0);C.QU._Init.call(this.Ld={I:this
},0);C.Sr._Init.call(this.Co={I:this},0);C.B$._Init.call(this.GO={I:this},0);C.B$.
_Init.call(this.Lb={I:this},0);this.__proto__=C.AQp;var B;this.Dr(C.ANZ);this.Ld.
H(Aho);this.Ld.Aj(true);this.Ld.U(A.aaR(A.acf.ABj));this.CB.H(Aci);this.Co.H(Aci
);this.Co.Aj(true);this.Co.U(A.aaR(A.acf.AdF));this.Co.AEr(true);this.GO.H(Aci);
this.GO.Aj(true);this.GO.U(A.aaR(A.acf.AqF));this.Lb.H(Aci);this.Lb.Aj(true);this.
Lb.U(A.aaR(A.acf.Af8));this.J(this.Ld,-4);this.J(this.Co,-2);this.J(this.GO,0);this.
J(this.Lb,0);this.EaseOfDelivery.LT(A._GetAutoObject(A.Device.Helper).W);this.BirthType.
LT(A._GetAutoObject(A.Device.Helper).W);this.Acd.LT(A._GetAutoObject(A.Device.Helper
).W);this.Ld.Gj([this,this.D9,this.GQ]);this.Ld.Au([B=A._GetAutoObject(A.Device.
Helper).W,B.AQ7,B.Ana]);this.Co.Gj([this,this.D9,this.GQ]);this.Co.LS([B=this.Co
,B.FH]);this.Co.LU(A.aaL(A.ach.Edit));this.Co.AbC([B=A._GetAutoObject(A.Device.Helper
).W,B.Avp,B.Sh]);this.F0.Au([B=this.Acd,B.B_,B.Ca]);this.F0.CK(this.Acd);this.GO.
Au([B=this.BirthType,B.B_,B.Ca]);this.GO.CK(this.BirthType);this.Lb.Au([B=this.EaseOfDelivery
,B.B_,B.Ca]);this.Lb.CK(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HR;this.EaseOfDelivery._Done();this.BirthType._Done();this.Acd.
_Done();this.Ld._Done();this.Co._Done();this.GO._Done();this.Lb._Done();C.HR._Done.
call(this);},_ReInit:function(){C.HR._ReInit.call(this);this.EaseOfDelivery._ReInit(
);this.BirthType._ReInit();this.Acd._ReInit();this.Ld._ReInit();this.Co._ReInit(
);this.GO._ReInit();this.Lb._ReInit();this.Ld.U(A.aaR(A.acf.ABj));this.Co.U(A.aaR(
A.acf.AdF));this.GO.U(A.aaR(A.acf.AqF));this.Lb.U(A.aaR(A.acf.Af8));},_Mark:function(
D){var B;C.HR._Mark.call(this,D);if((B=this.KW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ld)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lb)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"};C.AK_={Init:function(
aArg){var B;A.zX([this,this.Bef],[B=A._GetAutoObject(A.Device.Device),B.ADs,B.AHz
],0);A.pe([this,this.Bef],this);},AJw:function(){var Bc=null;switch(A._GetAutoObject(
A.Device.Device).Abk){case 0:Bc=A._GetAutoObject(A.Device.Helper).ABQ();break;case
1:Bc=A._GetAutoObject(A.Device.Helper).ANh();break;case 2:Bc=A._GetAutoObject(A.
Device.Helper).MZ();break;default:throw new Error(AYl+A._GetAutoObject(A.Device.
Device).Abk.toFixed());}A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);},Bef:function(
G){switch(A._GetAutoObject(A.Device.Device).Abk){case 0:this.Dq(A.aaR(A.acf.AQv)
);break;case 1:this.Dq(A.aaR(A.acf.BhI));break;case 2:this.Dq(A.aaR(A.acf.Avj));
break;default:A.ab5("%s",AYl+A._GetAutoObject(A.Device.Device).Abk.toFixed());}}
,_Init:function(aArg){C.Al1._Init.call(this,aArg);this.__proto__=C.AK_;this.BkC(
C.AOd);this.D$.Aby(A._NewObject(C.AN4,0));this.Init(aArg);},_className:"Application::AnimalSearchDriedOffOverlay"
};C.AQq={Azg:0,AcK:null,Aug:null,BbT:0,A13:0,A01:0,Init:function(aArg){this.BbT=
A._GetAutoObject(A.Device.Helper).W.Id;this.AcK=A._GetAutoObject(A.Device.Device
).Aq.Filter;this.Azg=A._GetAutoObject(A.Device.Helper).W.NaisId;this.A01=A._GetAutoObject(
A.Device.Helper).W.AnimalType;},LE:function(G){A._GetAutoObject(A.Device.Helper).
W.Ana(this.Azg);A._GetAutoObject(A.Device.Helper).W.Aep(true);switch(this.A01){case
0:case 1:A._GetAutoObject(A.Device.Helper).W.DT(0);break;case 2:A._GetAutoObject(
A.Device.Helper).W.DT(2);break;default:A.ab5("%s%e",AX9,this.A01);}},Ee:function(
G){A._GetAutoObject(A.Device.Device).Aq.Bm(this.AcK);if(!!this.A13)this.Beh();},
AfE:function(G){A._GetAutoObject(A.Device.Device).Aq.Bm(null);},Beh:function(){var
Atf=A._NewObject(A.Device.Animal,0);var Ac=A._GetAutoObject(A.Device.Device).Aq.
K7(0,this.BbT);Atf.EK(Ac,A._GetAutoObject(A.Device.Device).Aq);Atf.AvM(A._GetAutoObject(
A.Device.Helper).W.DateOfBirth);Atf.Aq$(false);Atf.AvY(Atf.LactationNumber+1);Atf.
Cp(A._GetAutoObject(A.Device.Device).Aq);},Aps:function(G){this.A13++;var Bvj=A.
_GetAutoObject(A.Device.Converter).Be2(A._GetAutoObject(A.Device.Helper).W.BirthType
);if((this.A13<Bvj)&&(A._GetAutoObject(A.Device.Helper).AjA(A._GetAutoObject(A.Device.
Helper).W.WhereAbouts)===false))A._GetAutoObject(A.Device.Device).A6(59,true,A.jV
,0,[this,this.UU]);else this.BaT(this);},UU:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===8))this.BaT(this);else if(!!As&&(
As.PopupState===7))this.AzW(this);},AzW:function(G){var B;var H5=A._GetAutoObject(
A.Device.Helper).W.AnimalType;var Afm=A._GetAutoObject(A.Device.Helper).W.BirthType;
var Bu=A._GetAutoObject(A.Device.Helper).W.Breed;var SX=A._GetAutoObject(A.Device.
Helper).W.DateOfBirth;var AIE=A._GetAutoObject(A.Device.Helper).W.EaseOfDelivery;
if(!!this.Aug)(B=this.Aug)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper
).W.DT(H5);A._GetAutoObject(A.Device.Helper).W.AjX(Afm);A._GetAutoObject(A.Device.
Helper).W.NM(Bu);A._GetAutoObject(A.Device.Helper).W.Sh(SX);A._GetAutoObject(A.Device.
Helper).W.Aj0(AIE);},BaT:function(G){this.Beh();A._GetAutoObject(C.AY).Fm();A._GetAutoObject(
A.Device.Device).Aq.Bm(this.AcK);},A7V:function(E){if(A.aa0(this.Aug,E))return;this.
Aug=E;},_Init:function(aArg){this.__proto__=C.AQq;this.Init(aArg);A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.AcK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aug)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Application::NewAnimalMotherHelper"
};C.ALo={Init:function(aArg){var B;A.zX([this,this.Bcd],[B=A._GetAutoObject(A.Device.
Device),B.AQP,B.AYm],0);this.Bcd(this);},Cp:function(){A.ab5("%s",Bqe);},EK:function(
Aco){C.Adh.EK.call(this,Aco);var P;for(P=16;P>0;P--)this.IK.Set(P,this.IK.Get(P-
1));this.IK.Set(0,0);if(this.CM<17)this.CM++;else A.ab5("%s",Bqf);},Bcd:function(
G){this.EK(A._GetAutoObject(A.Device.Device).AtU);A.we(this,0);},A5y:function(JO
){switch(JO){case 2048:return false;default:return true;}},_Init:function(aArg){
C.Adh._Init.call(this,aArg);this.__proto__=C.ALo;this.Init(aArg);},_className:"Application::AutoActionsSelectableClass"
};C.At8={_Init:function(){C.ALo._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Jx={DR:null,V:null,A50:true,U:function(E){
C.IR.U.call(this,E);this.V.R(E);},C7:function(E){C.IR.C7.call(this,E);this.V.L(E
);},BkG:function(E){if(this.A50===E)return;this.A50=E;this.DR.Y(E);},_Init:function(
aArg){C.IR._Init.call(this,aArg);A.acg.DR._Init.call(this.DR={I:this},0);C.CP._Init.
call(this.V={I:this},0);this.__proto__=C.Jx;this.DR.DK(Bqg);this.DR.DY(Bqh);this.
DR.L(A.jb.Bb);this.V.AW(0x3F);this.V.H(Bqi);this.V.A2(0x11);this.V.L(A.jb.Text);
this.J(this.DR,0);this.J(this.V,0);this.V.S(A.aaL(A.fl.J8));this.V.A5(A.aaL(A.fl.
Ia));this.V.CC(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.IR;this.DR._Done(
);this.V._Done();C.IR._Done.call(this);},_ReInit:function(){C.IR._ReInit.call(this
);this.DR._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.J8));this.V.A5(A.aaL(A.
fl.Ia));this.V.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.IR._Mark.call(this
,D);if((B=this.DR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoTableItem"};C.AN4={Agj:null,AaM:
null,Fb:null,E0:null,Db:null,Init:function(aArg){var B;A.zX([this,this.A2C],[B=A.
_GetAutoObject(A.Device.Device),B.ADs,B.AHz],0);A.pe([this,this.A2C],this);},C7:
function(E){C.X3.C7.call(this,E);this.Db.L(E);},A7E:function(G){A.pe([this,this.
A2C],this);},A14:function(G){var B;var F;var Filter;var FilterCriterion;if(!!this.
Q){Filter=(F=this.Q,F[1].call(F[0])).Gy();FilterCriterion=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=Filter.DX(1,4))?B:null);if(!!FilterCriterion)Filter.QQ(FilterCriterion
);A._GetAutoObject(A.Device.Device).Aq.Bm(Filter);}},Dc:function(G){var B;var F;
C.X3.Dc.call(this,G);if(!(F=this.Q,F[1].call(F[0]))){this.Db.Ax(A.aaL(A.ach.Ajt)
);return;}var Bv0=(A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(
F[0])).DX(38,0))?B:null);var AxU=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
B=(F=this.Q,F[1].call(F[0])).DX(14,0))?B:null);if(!!Bv0)this.Db.Ax(A.aaL(A.ach.AB4
));else if(!!AxU&&(AxU.A4===1))this.Db.Ax(A.aaL(A.ach.AOE));else this.Db.Ax(A.aaL(
A.ach.Ajt));},A2C:function(G){var F;var Filter=null;var AM6;switch(A._GetAutoObject(
A.Device.Device).Abk){case 0:Filter=A._GetAutoObject(A.Device.Helper).ABQ();break;
case 1:Filter=A._GetAutoObject(A.Device.Helper).ANh();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).MZ();break;default:throw new Error(AYl+A._GetAutoObject(A.Device.
Device).Abk.toFixed());}var Az5=this.AgL();if(Az5>0){AM6=A._NewObject(A.Device.Int32FilterCriterion
,0);AM6.Initialize(1,4,Az5,false);Filter.CZ(AM6);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.A0.AjY(false);},N_:function(G){if(!this.AgL())this.A0.AjY(true
);this.A8(this.A0);this.An();},MN:function(G){this.A0.AjY(false);this.A8(this.Agj
);this.An();},_Init:function(aArg){C.X3._Init.call(this,aArg);C.Aqq._Init.call(this.
Agj={I:this},0);C.AaM._Init.call(this.AaM={I:this},0);A.Core.BJ._Init.call(this.
Fb={I:this},0);A.Core.BJ._Init.call(this.E0={I:this},0);A.acg.Am._Init.call(this.
Db={I:this},0);this.__proto__=C.AN4;var B;this.H(Bqj);this.CX.H(Bqk);this.CX.Y(false
);this.A0.H(Bql);this.Agj.H(Bqm);this.AaM.Au(A._GetAutoObject(A.Device.Device).Abk
);this.Fb.Filter=6;this.E0.Filter=7;this.Db.H(Bqn);this.J(this.Agj,0);this.J(this.
Db,0);this.Agj.CK(this.AaM);this.Agj.Au([B=this.AaM,B.B_,B.Ca]);this.Fb.BK=[this
,this.N_];this.E0.BK=[this,this.MN];this.Db.Ax(A.aaL(A.ach.Ajt));this.Init(aArg);
},_Done:function(){this.__proto__=C.X3;this.Agj._Done();this.AaM._Done();this.Fb.
_Done();this.E0._Done();this.Db._Done();C.X3._Done.call(this);},_ReInit:function(
){C.X3._ReInit.call(this);this.Agj._ReInit();this.AaM._ReInit();this.Fb._ReInit(
);this.E0._ReInit();this.Db._ReInit();},_Mark:function(D){var B;C.X3._Mark.call(
this,D);if((B=this.Agj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaM)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderSearchAnimalDriedOff"};C.AaM={Aef:null,Init:function(aArg){var
B;A.zX([this,this.BbV],[B=A._GetAutoObject(A.Device.Device),B.ADs,B.AHz],0);A.pe([
this,this.BbV],this);},Do:function(){return 3;},Au:function(E){C.C3.Au.call(this
,E);A._GetAutoObject(A.Device.Device).Av4(E);},ABP:function(aIndex){if((aIndex<0
)||(aIndex>=this.Do()))return null;return this.Aef.Ar1(aIndex);},ABR:function(aIndex
){if((aIndex<0)||(aIndex>=this.Do()))return-1;return this.Aef.Ar2(aIndex);},BbV:
function(G){this.Q=A._GetAutoObject(A.Device.Device).Abk;A.abo([this,this.B_,this.
Ca],0);},_Init:function(aArg){C.C3._Init.call(this,aArg);A.Device.Aef._Init.call(
this.Aef={I:this},0);this.__proto__=C.AaM;this.Cv.Set(0,0);this.Cv.Set(1,1);this.
Cv.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=C.C3;this.Aef._Done(
);C.C3._Done.call(this);},_ReInit:function(){C.C3._ReInit.call(this);this.Aef._ReInit(
);},_Mark:function(D){var B;C.C3._Mark.call(this,D);if((B=this.Aef)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"};C.AOd={Er:
null,IC:null,_Init:function(aArg){C.Es._Init.call(this,aArg);C.CP._Init.call(this.
Er={I:this},0);A.acg.Text._Init.call(this.IC={I:this},0);this.__proto__=C.AOd;this.
H(ON);this.Background.H(ON);this.Er.H(AG$);this.Er.R(A.aaR(A.acf.A5g));this.Er.A2(
0x12);this.Er.L(A.jb.Text);this.IC.AW(0x3F);this.IC.H(AHa);this.IC.HG(5);this.IC.
A2(0x14);this.IC.R(A.aaR(A.acf.AFz));this.IC.L(A.jb.Text);this.J(this.Er,0);this.
J(this.IC,0);this.Er.S(A.aaL(A.fl.Ah));this.Er.A5(A.aaL(A.fl.Ia));this.Er.CC(A.aaL(
A.fl.By));this.IC.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Es;this.
Er._Done();this.IC._Done();C.Es._Done.call(this);},_ReInit:function(){C.Es._ReInit.
call(this);this.Er._ReInit();this.IC._ReInit();this.Er.R(A.aaR(A.acf.A5g));this.
IC.R(A.aaR(A.acf.AFz));this.Er.S(A.aaL(A.fl.Ah));this.Er.A5(A.aaL(A.fl.Ia));this.
Er.CC(A.aaL(A.fl.By));this.IC.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Es._Mark.
call(this,D);if((B=this.Er)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IC)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"};C.MotherScanScreen={
JM:null,BdU:function(){if(A._GetAutoObject(A.Device.Helper).W.NaisId>0)this.BcC(
this);else A._GetAutoObject(A.Device.Device).A6(63,true,A.jV,0,[this,this.UU]);}
,BcC:function(G){A._GetAutoObject(C.AY).Fm();},UU:function(G){var As=(A.Device.PopupContext.
isPrototypeOf(G)?G:null);if((!!As&&(As.Id===63))&&(As.PopupState===7))this.BcC(this
);},_Init:function(aArg){C.L9._Init.call(this,aArg);A.acg.Text._Init.call(this.JM={
I:this},0);this.__proto__=C.MotherScanScreen;this.Dr(C.AN3);this.I5.H(Bqo);this.
I5.Aj$(2);this.Ab2.Y(false);this.AP7=12;this.Number.H(Bqp);this.Number.R(A.aaR(A.
acf.A9h));this.A2_=false;this.JM.H(Bqq);this.JM.HG(5);this.JM.KI(true);this.JM.R(((
A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.acf.AAB));this.JM.L(A.jb.Text);this.
Kj(this.I5,-1);this.Kj(this.IG,-1);this.Kj(this.Ab2,-1);this.J(this.JM,0);this.JM.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.L9;this.JM._Done();C.L9._Done.
call(this);},_ReInit:function(){C.L9._ReInit.call(this);this.JM._ReInit();this.Number.
R(A.aaR(A.acf.A9h));this.JM.R(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CO)+A.aaR(A.
acf.AAB));this.JM.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L9._Mark.call(this
,D);if((B=this.JM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MotherScanScreen"
};C.AN3={_Init:function(aArg){C.Aqe._Init.call(this,aArg);this.__proto__=C.AN3;this.
CX.DT(1);},_className:"Application::HeaderScannedCowId"};C.I5={Aba:null,Aa$:null
,Aa_:null,Qp:null,CountryToString:null,Ar4:0,CT:function(){this.An();},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);this.Qp.R(this.CountryToString.Lm(A._GetAutoObject(
A.Device.Converter).A5F(A._GetAutoObject(A.Device.Device).Language))+Bqr);},Aj$:
function(E){if(this.Ar4===E)return;this.Ar4=E;var bitmap=null;var AZ8=Bqs;var AZ7=
null;var AZ9=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aqp);break;case 1:{bitmap=
A.aaL(A.ach.APe);AZ8=Bqt;AZ7=A.aaL(A.fl.Ak);AZ9=true;}break;case 2:{bitmap=A.aaL(
A.ach.APf);AZ8=Bqu;AZ7=A.aaL(A.fl.By);AZ9=true;}break;default:throw new Error(Bqv+
E.toFixed());}this.Aa_.Ax(bitmap);this.Aa$.Ax(bitmap);this.Aba.Ax(bitmap);this.Qp.
H(A.abJ(this.Qp.M,AZ8));this.Qp.S(AZ7);this.Qp.Y(AZ9);this.H(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.
call(this.Aba={I:this},0);A.acg.Am._Init.call(this.Aa$={I:this},0);A.acg.Am._Init.
call(this.Aa_={I:this},0);A.acg.Text._Init.call(this.Qp={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.I5;this.H(AHp);this.
Aba.AW(0x3);this.Aba.H(AHp);this.Aba.L(A.jb.HZ);this.Aba.Ct(2);this.Aa$.AW(0x3);
this.Aa$.H(AHp);this.Aa$.L(A.jb.AdA);this.Aa$.Ct(1);this.Aa_.AW(0x3);this.Aa_.H(
AHp);this.Aa_.L(A.jb.Text);this.Aa_.Ct(0);this.Qp.AW(0x14);this.Qp.H(Bqw);this.Qp.
L(0xFF020202);this.Qp.Y(false);this.J(this.Aba,0);this.J(this.Aa$,0);this.J(this.
Aa_,0);this.J(this.Qp,0);this.Aba.Ax(A.aaL(A.ach.Aqp));this.Aa$.Ax(A.aaL(A.ach.Aqp
));this.Aa_.Ax(A.aaL(A.ach.Aqp));this.Qp.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.O;this.Aba._Done();this.Aa$._Done();this.Aa_._Done();this.Qp._Done(
);this.CountryToString._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Aba._ReInit();this.Aa$._ReInit();this.Aa_._ReInit(
);this.Qp._ReInit();this.CountryToString._ReInit();this.Qp.S(A.aaL(A.fl.Ak));this.
CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Aba)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aa_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qp)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.Ar4={Transponder:0,BCM:1,BCN:2};C.ANZ={Am:null,C7:function(E){C.BO.C7.call(this
,E);this.Am.L(E);},_Init:function(aArg){C.BO._Init.call(this,aArg);A.acg.Am._Init.
call(this.Am={I:this},0);this.__proto__=C.ANZ;this.Am.H(AHk);this.J(this.Am,0);this.
Am.Ax(A.aaL(A.ach.ANQ));},_Done:function(){this.__proto__=C.BO;this.Am._Done();C.
BO._Done.call(this);},_ReInit:function(){C.BO._ReInit.call(this);this.Am._ReInit(
);},_Mark:function(D){var B;C.BO._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Jb:0,Z5:4,Alw:function(G){C.QT.Alw.call(this,G);if(A._GetAutoObject(A.Device.Helper
).Bbt()){this.Jb=A._GetAutoObject(A.Device.Helper).Ub.Id;var AhY=A._GetAutoObject(
A.Device.Helper).A5D(this.Jb,A._GetAutoObject(A.Device.Helper).W);if(AhY){A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Q1(this.Jb),0,[
this,this.UU]);return;}AhY=A._GetAutoObject(A.Device.Helper).Bg7(this.Jb,A._GetAutoObject(
A.Device.Helper).W);if(AhY&&(A._GetAutoObject(A.Device.Helper).W.TransponderId!==
this.Jb)){A._GetAutoObject(A.Device.Device).A6(25,true,A._GetAutoObject(A.Device.
Converter).Q1(this.Jb),0,[this,this.UU]);return;}this.Z5=A._GetAutoObject(A.Device.
Helper).API(this.Jb);switch(this.Z5){case 0:A._GetAutoObject(A.Device.Device).A6(
45,true,this.Jb.toFixed().length.toFixed(),0,[this,this.UU]);break;case 1:case 2:{
var BL=A._GetAutoObject(A.Device.Converter).AwS(this.Jb);A._GetAutoObject(A.Device.
Device).A6(46,true,BL.toFixed(),0,[this,this.UU]);}break;case 3:this.BdK();break;
default:throw new Error(AGZ+this.Z5.toFixed());}}},Ee:function(G){A._GetAutoObject(
C.AY).Fm();},UU:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);if(!!As)switch(As.PopupState){case 4:if(this.Z5===2)this.BdK();else A._GetAutoObject(
A.Device.Device).AeN();break;case 5:this.Ee(this);break;default:;}},BdK:function(
){A._GetAutoObject(A.Device.Helper).W.M8(this.Jb);if(!A._GetAutoObject(A.Device.
Helper).W.TransponderId)A._GetAutoObject(A.Device.Helper).W.M9(this.Jb);A._GetAutoObject(
A.Device.Helper).W.Cp(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.
Device).A6(68,true,A._GetAutoObject(A.Device.Helper).W.VisualId.toFixed(),0,null
);this.Ee(this);},_Init:function(aArg){C.QT._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Y(true);this.Dr(C.Iy);this.Number.R(A.aaR(A.acf.A9a
));this.I5.H(Bqx);this.IG.H(Bqy);this.Aj$(1);this.N.Cw=[this,this.Ee];this.N.CS(
A.aaL(A.ach.EV));},_ReInit:function(){C.QT._ReInit.call(this);this.Number.R(A.aaR(
A.acf.A9a));},_className:"Application::SetSaveNaisIdScreen"};C.AMA={LE:function(
G){C.Ap2.LE.call(this,G);A.pe([this,this.ByH],this);},ByH:function(G){this.LF(this.
Ea);},_Init:function(aArg){C.Ap2._Init.call(this,aArg);this.__proto__=C.AMA;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.Ur={Animal:null,WhereAboutsToString:
null,Gg:function(aIndex){return this.WhereAboutsToString.BX(this.C9(aIndex));},Au:
function(E){C.C3.Au.call(this,E);if(!!this.Animal)this.Animal.M_(E);},A2K:function(
G){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.abo([this,this.
B_,this.Ca],0);},LT:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A2K],[B=this.Animal,B.AvA,B.M_],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A2K],[B=this.Animal,B.AvA,B.M_],0);A.pe([this,this.A2K],this);}
,_Init:function(aArg){C.C3._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.Ur;this.Cv.Set(0,1);this.
Cv.Set(1,2);this.Cv.Set(2,3);this.Cv.Set(3,4);this.Cv.Set(4,5);},_Done:function(
){this.__proto__=C.C3;this.WhereAboutsToString._Done();C.C3._Done.call(this);},_ReInit:
function(){C.C3._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.C3._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.Us={Do:function(){return 6;},_Init:function(aArg){C.Ur._Init.call(this,aArg);
this.__proto__=C.Us;this.Cv.Set(0,0);this.Cv.Set(1,1);this.Cv.Set(2,2);this.Cv.Set(
3,3);this.Cv.Set(4,4);this.Cv.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.Acd={Do:function(){return 5;},_Init:function(aArg){C.Ur._Init.call(this,aArg
);this.__proto__=C.Acd;this.Cv.Set(0,6);this.Cv.Set(1,7);this.Cv.Set(2,8);this.Cv.
Set(3,9);this.Cv.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.Adk={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bae],[B=A._GetAutoObject(A.Device.
Device),B.AQQ,B.AYn],0);A.pe([this,this.Bae],this);},Do:function(){return 2;},C9:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gg:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
BX(aIndex);},DP:function(A1){return A1;},Hj:function(){return 1;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).AvD(E);},Bae:function(G){
this.Q=A._GetAutoObject(A.Device.Device).AfY;A.abo([this,this.B_,this.Ca],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.Adk;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AFn={Fu:null
,Eq:null,EartagNrAssignmentMode:null,Fb:null,E0:null,Hw:null,A0:null,J6:null,M1:
null,A3:0,AK:0,Init:function(aArg){},Ai:function(Ae){C.D8.Ai.call(this,Ae);if(this.
A3===1){if(this.G_){this.A0.Fz(A.jb.CE);this.Hw.C1(A.jb.CE);this.Background.L(A.
jb.C0);this.V.L(A.jb.Text);}else{this.A0.Fz(A.jb.C0);this.Hw.C1(A.jb.C0);this.Background.
L(A.jb.CE);this.V.L(A.jb.Text);}}else{if(this.G_){this.A0.Fz(A.jb.CE);this.Hw.C1(
A.jb.CE);}else{this.A0.Fz(A.jb.C0);this.Hw.C1(A.jb.C0);}this.A8(null);}this.M1.L(
this.V.AP);},IP:function(G){C.D8.IP.call(this,G);if(!this.A3)this.FH(this);else this.
G1(this);},DD:function(G){var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.
N,F[1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.
N,F[1].call(F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.
N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=null;(F=this.N,F[1].call(
F[0])).C2(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=
null;}break;default:this.Fu.Akj((F=this.N,F[1].call(F[0])));}},FH:function(G){this.
En(1);},G1:function(G){this.En(0);},En:function(EC){var F;if(!this.A3&&!!this.N)
this.Fu.Ai3((F=this.N,F[1].call(F[0])));this.A3=EC;if(this.A3<0)this.A3=0;else if(
this.A3>1)this.A3=1;switch(this.A3){case 0:this.A8(null);break;case 1:{this.A8(this.
A0);if(!this.AK)this.A0.Sp(2);else this.A0.Sp(7);}break;default:throw new Error(
AsD+this.A3.toFixed());}this.DD(this);this.An();},Bx:function(E){if(this.AK===E)
return;this.AK=E;},N_:function(G){this.Az6(2);},MN:function(G){this.Az6(7);},Az6:
function(Gn){var B;var Ays=(A.Core.O.isPrototypeOf(B=this.AR)?B:null);if(!!Ays){
var Azi=(A.Core.O.isPrototypeOf(B=this.RY(Ays,Gn,0x15))?B:null);if(!!Azi){this.A8(
Azi);return true;}}return false;},Aft:function(G){var F;if(!this.Eq||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.M1.Ax(
A._GetAutoObject(A.Device.Converter).Amo(2));break;case 1:this.M1.Ax(A._GetAutoObject(
A.Device.Converter).Amo((F=this.Eq,F[1].call(F[0]))));break;default:throw new Error(
A_w+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A2j],this);},A2j:function(G){var B;var F;if(!this.Eq||!this.EartagNrAssignmentMode
){this.J6.Ael(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.A0.Au([B=A._GetAutoObject(A.Device.Device),B.AmY,B.An0]);this.J6.
Ael([B=A._GetAutoObject(A.Device.Device),B.ADo,B.AHw]);}break;case 1:switch((F=this.
Eq,F[1].call(F[0]))){case 1:{this.A0.Au([B=A._GetAutoObject(A.Device.Device),B.Avs
,B.AxJ]);this.J6.Ael([B=A._GetAutoObject(A.Device.Device),B.AQX,B.AYq]);}break;case
0:{this.A0.Au([B=A._GetAutoObject(A.Device.Device),B.Avt,B.AxK]);this.J6.Ael([B=
A._GetAutoObject(A.Device.Device),B.AQY,B.AYr]);}break;case 2:{this.A0.Au([B=A._GetAutoObject(
A.Device.Device),B.AmY,B.An0]);this.J6.Ael([B=A._GetAutoObject(A.Device.Device),
B.ADo,B.AHw]);}break;default:throw new Error(Bqz+(F=this.Eq,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(A_w+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},T0:function(E){if(A.aaZ(this.Eq,E))return;if(!!this.Eq)A.z$([
this,this.Aft],this.Eq,0);this.Eq=E;if(!!E)A.zX([this,this.Aft],this.Eq,0);if(!!
E)A.pe([this,this.Aft],this);},AjZ:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Aft],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Aft],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Aft],this);},TX:function(){return this.AK;},_Init:function(
aArg){C.D8._Init.call(this,aArg);A.Core.BJ._Init.call(this.Fb={I:this},0);A.Core.
BJ._Init.call(this.E0={I:this},0);C.Aqq._Init.call(this.Hw={I:this},0);C.Au_._Init.
call(this.A0={I:this},0);C.Aul._Init.call(this.J6={I:this},0);A.acg.Am._Init.call(
this.M1={I:this},0);this.__proto__=C.AFn;var B;this.H(Uz);this.V.Ar(false);this.
V.R(Ass);this.V.L(A.jb.Bh);this.Fb.Filter=6;this.E0.Filter=7;this.Hw.H(BqA);this.
A0.H(BqB);this.M1.H(BqC);this.J(this.Hw,0);this.J(this.A0,0);this.J(this.M1,0);this.
Fu=A._NewObject(C.AdT,0);this.Fb.BK=[this,this.N_];this.E0.BK=[this,this.MN];this.
Hw.CK(this.J6);this.Hw.Au([B=this.J6,B.B_,B.Ca]);this.A0.Au([this,this.TX,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.D8;this.Fb._Done();this.E0.
_Done();this.Hw._Done();this.A0._Done();this.J6._Done();this.M1._Done();C.D8._Done.
call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.Fb._ReInit();this.E0.
_ReInit();this.Hw._ReInit();this.A0._ReInit();this.J6._ReInit();this.M1._ReInit(
);},_Mark:function(D){var B;C.D8._Mark.call(this,D);if((B=this.Fu)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Eq)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.J6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M1)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AMo={VY:
null,YI:null,YE:null,TQ:null,Init:function(aArg){this.A8(this.VY);},ADh:function(
G){var BbR=(C.AmO.isPrototypeOf(G)?G:null);if(!!BbR)A._GetAutoObject(A.Device.Device
).A6(BbR.Ac3,true,A.jV,0,null);},Du:function(G){if((this.Cl.CI===7)&&(this.AR===
this.TQ))A._GetAutoObject(A.Device.Device).A6(10,true,A.jV,0,null);else if((this.
Cl.CI===6)&&(this.AR===this.TQ))A._GetAutoObject(C.AY).B1(103);C.Hh.Du.call(this
,G);},_Init:function(aArg){C.Hh._Init.call(this,aArg);C.AmO._Init.call(this.VY={
I:this},0);C.AmO._Init.call(this.YI={I:this},0);C.AmO._Init.call(this.YE={I:this
},0);C.AmO._Init.call(this.TQ={I:this},0);this.__proto__=C.AMo;this.Dr(C.ANE);this.
VY.H(KP);this.VY.Aj(true);this.VY.U(A.aaR(A.acf.Ag9));this.VY.Bf(false);this.VY.
Ac3=79;this.YI.H(Q6);this.YI.Aj(true);this.YI.U(A.aaR(A.acf.A9u));this.YI.Bf(true
);this.YI.Ac3=77;this.YE.H(WJ);this.YE.Aj(true);this.YE.U(A.aaR(A.acf.A5b));this.
YE.Bf(false);this.YE.Ac3=78;this.TQ.H(AkJ);this.TQ.Aj(true);this.TQ.U(A.aaR(A.acf.
About));this.TQ.Bf(true);this.TQ.Ac3=3;this.J(this.VY,0);this.J(this.YI,0);this.
J(this.YE,0);this.J(this.TQ,0);this.VY.AQ=[this,this.ADh];this.YI.AQ=[this,this.
ADh];this.YE.AQ=[this,this.ADh];this.TQ.AQ=[this,this.ADh];this.Init(aArg);},_Done:
function(){this.__proto__=C.Hh;this.VY._Done();this.YI._Done();this.YE._Done();this.
TQ._Done();C.Hh._Done.call(this);},_ReInit:function(){C.Hh._ReInit.call(this);this.
VY._ReInit();this.YI._ReInit();this.YE._ReInit();this.TQ._ReInit();this.VY.U(A.aaR(
A.acf.Ag9));this.YI.U(A.aaR(A.acf.A9u));this.YE.U(A.aaR(A.acf.A5b));this.TQ.U(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.VY
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.ANE={_Init:function(aArg){C.Oq.
_Init.call(this,aArg);this.__proto__=C.ANE;this.Text.R(A.acf.Info);},_className:
"Application::HeaderDeviceInfoMenu"};C.AMn={Alz:null,YB:null,Abi:null,Abg:null,TU:
null,FactoryResetScope:null,Init:function(aArg){this.A8(this.YB);A.pe([this,this.
DD],this);},Bcq:function(G){var B;var Ay2=A._GetAutoObject(A.Device.Device).ACK(
);switch(Ay2){case 1:A._GetAutoObject(A.Device.Device).A6(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A6(92,true,ZG,0,[this,this.BcJ]);break;
case 2:{this.Alz=[this,this.Bcq];A.zX([this,this.AfF],[B=A._GetAutoObject(A.Device.
Device),B.Abs,B.Acl],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this
,this.Alt]);}break;default:throw new Error(A_x+Ay2.toFixed());}},Alt:function(G){
var B;var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===
5)){A.z$([this,this.AfF],[B=A._GetAutoObject(A.Device.Device),B.Abs,B.Acl],0);this.
Alz=null;}},AfF:function(G){var B;if(A._GetAutoObject(A.Device.Device).AkA===3){
A._GetAutoObject(A.Device.Device).A6(74,false,A.jV,0,[this,this.Alt]);A.z$([this
,this.AfF],[B=A._GetAutoObject(A.Device.Device),B.Abs,B.Acl],0);if(!!this.Alz)A.
pe(this.Alz,this);this.Alz=null;}},BcL:function(G){var B;var Ay2=A._GetAutoObject(
A.Device.Device).ACL();switch(Ay2){case 1:A._GetAutoObject(A.Device.Device).A6(84
,true,A.jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A6(96,true,A.jV
,0,[this,this.Bxh]);break;case 2:{this.Alz=[this,this.BcL];A.zX([this,this.AfF],[
B=A._GetAutoObject(A.Device.Device),B.Abs,B.Acl],0);A._GetAutoObject(A.Device.Device
).A6(74,true,A.jV,0,[this,this.Alt]);}break;case 3:A._GetAutoObject(A.Device.Device
).A6(95,true,A.jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A6(94,true
,A.jV,0,null);break;default:throw new Error(A_x+Ay2.toFixed());}},BhR:function(G
){switch(this.FactoryResetScope.C9(this.FactoryResetScope.Q)){case 1:A._GetAutoObject(
A.Device.Device).A6(33,true,A.jV,0,[this,this.Bdy]);break;case 0:A._GetAutoObject(
A.Device.Device).A6(7,true,A.jV,0,[this,this.Bdy]);break;default:A.ab5("%s%i",BqD
,this.FactoryResetScope.Q);}},Bdy:function(G){var As=(A.Device.PopupContext.isPrototypeOf(
G)?G:null);if(!!As&&(As.PopupState===7))switch(As.Id){case 7:{A._GetAutoObject(A.
Device.Device).BlP();A._GetAutoObject(A.Device.Device).A6(8,true,A.jV,0,null);A.
_GetAutoObject(C.AY).B1(38);}break;case 33:{A._GetAutoObject(A.Device.Helper).BlO(
);A._GetAutoObject(A.Device.Device).Aq8(0);A._GetAutoObject(A.Device.Device).Aq9(
0);A._GetAutoObject(A.Device.Device).Aq_(0);A._GetAutoObject(A.Device.Device).Ara(
0);A._GetAutoObject(A.Device.Device).Arb(0);A._GetAutoObject(A.Device.Device).Arc(
0);A._GetAutoObject(A.Device.Device).TY(5);A._GetAutoObject(A.Device.Device).AvP(
0);A._GetAutoObject(A.Device.Device).AvQ(0);A._GetAutoObject(A.Device.Device).AvR(
0);A._GetAutoObject(A.Device.Device).Av5(1);A._GetAutoObject(A.Device.Device).Av6(
1);A._GetAutoObject(A.Device.Device).Av7(1);A._GetAutoObject(A.Device.Device).A6(
34,true,A.jV,0,null);}break;default:A.ab5("%s%e",AG0,As.Id);}},Bcr:function(G){var
B;if(!A._GetAutoObject(A.Device.Device).Aq.Ch()){A._GetAutoObject(A.Device.Device
).A6(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Aqv()===false
){this.Alz=[this,this.Bcr];A.zX([this,this.AfF],[B=A._GetAutoObject(A.Device.Device
),B.Abs,B.Acl],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this,this.
Alt]);return;}var Afs=A._GetAutoObject(A.Device.Device).Anq(1);if(Afs.Anv)A._GetAutoObject(
A.Device.Device).ApX(Afs);else A._GetAutoObject(A.Device.Device).A6(88,true,A.jV
,0,null);},BcJ:function(G){var As=(A.Device.PopupContext.isPrototypeOf(G)?G:null
);switch(As.Id){case 92:if(As.PopupState===9)A.aaS([this,this.BvX],this);break;case
93:if(As.PopupState===9)A.aaS([this,this.BvZ],this);break;default:throw new Error(
BqE+As.Id.toFixed());}},BvX:function(G){if(A._GetAutoObject(A.Device.Device).ABf(
)){var A0_=A._GetAutoObject(A.Device.Device).Aq.Qr();A._GetAutoObject(A.Device.Device
).A6(80,true,A0_.toFixed(),0,null);}else A._GetAutoObject(A.Device.Device).A6(82
,true,A.jV,0,null);A.aaS([this,this.Bxd],this);},BvZ:function(G){if(A._GetAutoObject(
A.Device.Device).AFb()){var A0_=A._GetAutoObject(A.Device.Device).Aq.Qr();A._GetAutoObject(
A.Device.Device).A6(81,true,A0_.toFixed(),0,null);}else A._GetAutoObject(A.Device.
Device).A6(83,true,A.jV,0,null);A.aaS([this,this.BxR],this);},Bxh:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!!As&&(As.PopupState===7))
A.pe([this,this.ByU],this);},ByU:function(G){A._GetAutoObject(A.Device.Device).A6(
93,true,ZG,0,[this,this.BcJ]);},BxR:function(G){A._GetAutoObject(A.Device.Device
).A6(93,false,A.jV,0,null);},Bxd:function(G){A._GetAutoObject(A.Device.Device).A6(
92,false,A.jV,0,null);},_Init:function(aArg){C.Hh._Init.call(this,aArg);C.Ci._Init.
call(this.YB={I:this},0);C.Ci._Init.call(this.Abi={I:this},0);C.Ci._Init.call(this.
Abg={I:this},0);C.B$._Init.call(this.TU={I:this},0);C.FactoryResetScope._Init.call(
this.FactoryResetScope={I:this},0);this.__proto__=C.AMn;var B;this.Dr(C.AND);this.
YB.H(KP);this.YB.Aj(true);this.YB.U(A.aaR(A.acf.ABf));this.YB.Bf(false);this.Abi.
H(Q6);this.Abi.Aj(true);this.Abi.U(A.aaR(A.acf.AFb));this.Abi.Bf(true);this.Abg.
H(WJ);this.Abg.Aj(true);this.Abg.U(A.aaR(A.acf.A4I));this.Abg.Bf(false);this.TU.
H(BqF);this.TU.Aj(true);this.TU.Bjb(true);this.TU.U(A.aaR(A.acf.A4J));this.TU.Bf(
true);this.J(this.YB,0);this.J(this.Abi,0);this.J(this.Abg,0);this.J(this.TU,0);
this.YB.AQ=[this,this.Bcq];this.Abi.AQ=[this,this.BcL];this.Abg.AQ=[this,this.Bcr
];this.TU.AQ=[this,this.BhR];this.TU.Au([B=this.FactoryResetScope,B.B_,B.Ca]);this.
TU.CK(this.FactoryResetScope);this.Init(aArg);},_Done:function(){this.__proto__=
C.Hh;this.YB._Done();this.Abi._Done();this.Abg._Done();this.TU._Done();this.FactoryResetScope.
_Done();C.Hh._Done.call(this);},_ReInit:function(){C.Hh._ReInit.call(this);this.
YB._ReInit();this.Abi._ReInit();this.Abg._ReInit();this.TU._ReInit();this.FactoryResetScope.
_ReInit();this.YB.U(A.aaR(A.acf.ABf));this.Abi.U(A.aaR(A.acf.AFb));this.Abg.U(A.
aaR(A.acf.A4I));this.TU.U(A.aaR(A.acf.A4J));},_Mark:function(D){var B;C.Hh._Mark.
call(this,D);if((B=this.Alz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abi)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceDataManagementScreen"};C.AND={_Init:function(aArg){C.Oq._Init.
call(this,aArg);this.__proto__=C.AND;this.Text.R(A.aaR(A.acf.ABm));},_ReInit:function(
){C.Oq._ReInit.call(this);this.Text.R(A.aaR(A.acf.ABm));},_className:"Application::HeaderDeviceDatamanagementMenu"
};C.Ajq={QB:null,VM:null,_Init:function(aArg){C.TB._Init.call(this,aArg);C.CP._Init.
call(this.QB={I:this},0);C.CP._Init.call(this.VM={I:this},0);this.__proto__=C.Ajq;
this.QB.H(BqG);this.QB.R(A.aaR(A.acf.A9l));this.QB.A2(0x12);this.QB.L(A.jb.Text);
this.VM.H(A_p);this.VM.R(A.aaR(A.acf.AnA));this.VM.L(A.jb.Text);this.J(this.QB,0
);this.J(this.VM,0);this.QB.S(A.aaL(A.fl.Ah));this.QB.A5(A.aaL(A.fl.Ak));this.QB.
CC(A.aaL(A.fl.By));this.VM.S(A.aaL(A.fl.Ah));this.VM.A5(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.TB;this.QB._Done();this.VM._Done();C.TB._Done.call(this
);},_ReInit:function(){C.TB._ReInit.call(this);this.QB._ReInit();this.VM._ReInit(
);this.QB.R(A.aaR(A.acf.A9l));this.VM.R(A.aaR(A.acf.AnA));this.QB.S(A.aaL(A.fl.Ah
));this.QB.A5(A.aaL(A.fl.Ak));this.QB.CC(A.aaL(A.fl.By));this.VM.S(A.aaL(A.fl.Ah
));this.VM.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.TB._Mark.call(this,D);
if((B=this.QB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VM)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.AN9={QC:
null,_Init:function(aArg){C.TB._Init.call(this,aArg);C.CP._Init.call(this.QC={I:
this},0);this.__proto__=C.AN9;this.QC.H(BqH);this.QC.R(A.aaR(A.acf.YN));this.QC.
A2(0x12);this.QC.L(A.jb.Text);this.J(this.QC,0);this.QC.S(A.aaL(A.fl.Ah));this.QC.
A5(A.aaL(A.fl.Ak));this.QC.CC(A.aaL(A.fl.By));},_Done:function(){this.__proto__=
C.TB;this.QC._Done();C.TB._Done.call(this);},_ReInit:function(){C.TB._ReInit.call(
this);this.QC._ReInit();this.QC.R(A.aaR(A.acf.YN));this.QC.S(A.aaL(A.fl.Ah));this.
QC.A5(A.aaL(A.fl.Ak));this.QC.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.TB.
_Mark.call(this,D);if((B=this.QC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Ai5={Iz:null,AaZ:null,D4:null,Bg:function(aSize){C.MT.Bg.call(this,aSize);this.
Iz.H([this.Gm.M[2],0,this.Gm.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.D4.H([
this.Iz.M[2]-1,0,this.Iz.M[2]+1,aSize[1]]);this.AaZ.H([this.Iz.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.MT.Ai.call(this,Ae);this.AaZ.L(this.Gm.AP);this.Iz.L(this.
Gm.AP);},Cc:function(Ac){C.MT.Cc.call(this,Ac);if(!this.AX)return;this.Hr=Ac;if(
!!this.AX){var H5=this.AX.Amp(Ac,14);var As_=this.AX.ANl(Ac,7);this.Iz.Ax(A._GetAutoObject(
A.Device.Converter).Amo(As_));this.AaZ.Ax(A._GetAutoObject(A.Device.Converter).A3c(
H5));this.An();}},_Init:function(aArg){C.MT._Init.call(this,aArg);A.acg.Am._Init.
call(this.Iz={I:this},0);A.acg.Am._Init.call(this.AaZ={I:this},0);A.acg.AI._Init.
call(this.D4={I:this},0);this.__proto__=C.Ai5;this.Iz.H(A_s);this.Iz.L(A.jb.Text
);this.AaZ.H(BqI);this.AaZ.L(A.jb.Text);this.D4.H(BqJ);this.D4.L(A.jb.Bb);this.J(
this.Iz,0);this.J(this.AaZ,0);this.J(this.D4,0);this.Iz.Ax(A.aaL(A.aci.Ts));this.
AaZ.Ax(A.aaL(A.aci.Ts));},_Done:function(){this.__proto__=C.MT;this.Iz._Done();this.
AaZ._Done();this.D4._Done();C.MT._Done.call(this);},_ReInit:function(){C.MT._ReInit.
call(this);this.Iz._ReInit();this.AaZ._ReInit();this.D4._ReInit();},_Mark:function(
D){var B;C.MT._Mark.call(this,D);if((B=this.Iz)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ALI={Zd:null
,Bg:function(aSize){C.MT.Bg.call(this,aSize);this.Zd.H([this.Gm.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.MT.Ai.call(this,Ae);this.Zd.L(this.Gm.AP);},Cc:function(
Ac){C.MT.Cc.call(this,Ac);if(!this.AX)return;this.Hr=Ac;if(!!this.AX){var ML=this.
AX.LL(Ac,26);if(ML>0)this.Zd.R(A.ab2(ML.toFixed(),5));else this.Zd.R(Q7);this.An(
);}},_Init:function(aArg){C.MT._Init.call(this,aArg);A.acg.Text._Init.call(this.
Zd={I:this},0);this.__proto__=C.ALI;this.Zd.H(BqK);this.J(this.Zd,0);this.Zd.S(A.
aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.MT;this.Zd._Done();C.MT._Done.
call(this);},_ReInit:function(){C.MT._ReInit.call(this);this.Zd._ReInit();this.Zd.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.MT._Mark.call(this,D);if((B=this.Zd
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.AQi={Am:null,Ai:function(Ae){C.Aeg.Ai.call(this,Ae);this.Am.L(this.Text.AP);
},_Init:function(aArg){C.Aeg._Init.call(this,aArg);A.acg.Am._Init.call(this.Am={
I:this},0);this.__proto__=C.AQi;this.Text.H(BqL);this.Am.H(A_m);this.J(this.Am,0
);this.Am.Ax(A.aaL(A.ach.AeA));},_Done:function(){this.__proto__=C.Aeg;this.Am._Done(
);C.Aeg._Done.call(this);},_ReInit:function(){C.Aeg._ReInit.call(this);this.Am._ReInit(
);},_Mark:function(D){var B;C.Aeg._Mark.call(this,D);if((B=this.Am)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Vw={Text:
null,Db:null,AN:null,TD:null,DZ:null,A9:null,Init:function(aArg){var B;A.zX([this
,this.Nd],[B=A._GetAutoObject(A.Device.Device),B.ADk,B.AHt],0);A.zV([this,this.Nd
],A._GetAutoObject(A.Device.Device).Aq,0);A.pe([this,this.Nd],this);},C7:function(
E){C.BO.C7.call(this,E);this.Db.L(E);this.Text.L(E);this.TD.L(E);this.DZ.Aj2(E);
},Abw:function(E){C.BO.Abw.call(this,E);this.DZ.C1(E);},Eo:function(G){this.DZ.U(
A._GetAutoObject(A.Device.Device).Aq.Ch().toFixed());},Nd:function(s){this.Eo(s);
},_Init:function(aArg){C.BO._Init.call(this,aArg);C.CP._Init.call(this.Text={I:this
},0);A.acg.Am._Init.call(this.Db={I:this},0);A.acg.DR._Init.call(this.AN={I:this
},0);A.acg.Am._Init.call(this.TD={I:this},0);C.DZ._Init.call(this.DZ={I:this},0);
A.acg.DR._Init.call(this.A9={I:this},0);this.__proto__=C.Vw;this.Text.H(BqM);this.
Text.A2(0x11);this.Db.H(Axz);this.AN.DK(A_k);this.AN.DY(A_l);this.AN.L(A.jb.Bb);
this.TD.H(BqN);this.TD.L(A.jb.C0);this.DZ.AW(0x14);this.DZ.H(BqO);this.DZ.Aj2(A.
jb.Bh);this.DZ.C1(A.jb.Ab6);this.DZ.HG(2);this.A9.DK(BqP);this.A9.DY(BqQ);this.A9.
L(A.jb.Bb);this.J(this.Text,0);this.J(this.Db,0);this.J(this.AN,0);this.J(this.TD
,0);this.J(this.DZ,0);this.J(this.A9,0);this.Text.S(A.aaL(A.fl.Ah));this.Text.A5(
A.aaL(A.fl.Ak));this.Db.Ax(A.aaL(A.ach.Ajt));this.TD.Ax(A.aaL(A.ach.TD));this.DZ.
S(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.BO;this.Text.
_Done();this.Db._Done();this.AN._Done();this.TD._Done();this.DZ._Done();this.A9.
_Done();C.BO._Done.call(this);},_ReInit:function(){C.BO._ReInit.call(this);this.
Text._ReInit();this.Db._ReInit();this.AN._ReInit();this.TD._ReInit();this.DZ._ReInit(
);this.A9._ReInit();this.Text.S(A.aaL(A.fl.Ah));this.Text.A5(A.aaL(A.fl.Ak));this.
DZ.S(A.aaL(A.fl.By));},_Mark:function(D){var B;C.BO._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Db)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TD)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A9)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.AbU={Fu:null
,JJ:null,JI:null,Akg:null,Akh:null,QO:null,Qo:null,AaY:null,Vy:null,Pt:null,Pu:null
,Sb:null,Gh:null,Gi:null,Jk:null,Ale:0,Alj:0,D0:0,DN:0,A3:0,Bg:function(aSize){var
B;this.Dp.H([this.Hl.M[2]-10,this.Hl.M[1],this.HV.M[0]+10,this.Hl.M[3]]);this.Dp.
AD5((B=this.Dp.M)[2]-B[0]);this.Dp.Hx(this.Dp.Gd,true,null,null);},Ai:function(Ae
){var B;C.B$.Ai.call(this,Ae);var Fi=((Ae&0x20)===0x20);var Gq=this.Bk.Bv;if(!!this.
Q)this.Hu(this);if((this.A3===1)||(this.A3===2)){var AZt=this.A0r(this.A3);if(!!
AZt){this.AaY.Y(true);this.AaY.H(AZt.M);this.AaY.L(this.V.AP);this.Vy.Y(true);this.
Vy.H(AZt.M);}else{this.AaY.Y(false);this.Vy.Y(false);}this.Hl.Y(false);this.HV.Y(
false);}else{this.AaY.Y(false);this.Vy.Y(false);this.Hl.Y(Fi||Gq);this.HV.Y(Fi||
Gq);}},Qa:function(G){if(!!this.Q){if(this.Fs===1)A.pe([this,this.UM],this);else
if(this.Fs===4)A.pe([this,this.AYN],this);else if(this.Fs===5)A.pe([this,this.AYL
],this);}C.B$.Qa.call(this,G);},JY:function(G){switch(this.A3){case 0:C.B$.JY.call(
this,G);break;case 2:break;default:this.AcX(this);}},JT:function(G){switch(this.
A3){case 0:C.B$.JT.call(this,G);break;default:this.AhQ(this);}},AZZ:function(G){
var F;if(this.A3===1){var BN=this.D0;this.D0=this.D0-10;if(this.D0<this.Alj)this.
D0=this.Alj;if(this.D0<A._GetAutoObject(A.Device.Device).Zo)this.D0=A._GetAutoObject(
A.Device.Device).Zo;if(this.DN!==BN){if(!!this.JJ)(F=this.JJ,F[2].call(F[0],this.
D0));A.abo(this.JJ,0);}}if(this.A3===2){var BN=this.DN;this.DN=this.DN-10;if(this.
DN<this.D0)this.DN=this.D0;if(this.DN!==BN){if(!!this.JI)(F=this.JI,F[2].call(F[
0],this.DN));A.abo(this.JI,0);}}this.DD(this);this.An();},AYL:function(s){this.AZZ(
s);},Alu:function(G){this.Fs=5;this.An();if(this.Bk.Bv){A.pe([this,this.AYL],this
);this.Bk.Ar(false);}this.Bk.Ar(true);},A0y:function(G){var F;if(this.A3===1){var
BN=this.D0;this.D0=this.D0+10;if(this.D0>this.DN)this.D0=this.DN;if(this.D0!==BN
){if(!!this.JJ)(F=this.JJ,F[2].call(F[0],this.D0));A.abo(this.JJ,0);}}if(this.A3===
2){var BN=this.DN;this.DN=this.DN+10;if(this.DN>this.Ale)this.DN=this.Ale;if(this.
DN!==BN){if(!!this.JI)(F=this.JI,F[2].call(F[0],this.DN));A.abo(this.JI,0);}}this.
DD(this);this.An();},AYN:function(s){this.A0y(s);},Alv:function(G){this.Fs=4;this.
An();if(this.Bk.Bv){A.pe([this,this.AYN],this);this.Bk.Ar(false);}this.Bk.Ar(true
);return;},UM:function(G){this.En(this.A3+1);},AcX:function(G){this.Fs=1;this.An(
);if(this.Bk.Bv){A.pe([this,this.UM],this);this.Bk.Ar(false);}this.Bk.Ar(true);}
,Hu:function(G){},Ae$:function(s){this.Hu(s);},DD:function(G){var F;if(!this.N)return;
switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N
,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cw=[this,this.G1];(F=this.
N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(
F[0])).Cg=null;(F=this.N,F[1].call(F[0])).C2(A.aaL(A.ach.AdZ));(F=this.N,F[1].call(
F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Cb=[this,this.UM];}break;case 2:{(F=this.
N,F[1].call(F[0])).CS(A.aaL(A.ach.EV));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.
N,F[1].call(F[0])).Cw=[this,this.G1];(F=this.N,F[1].call(F[0])).Cm(A.aaL(A.ach.Amv
));(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cg=[this,this.
AhQ];(F=this.N,F[1].call(F[0])).C2(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=
this.N,F[1].call(F[0])).Cb=null;}break;default:this.Fu.Akj((F=this.N,F[1].call(F[
0])));}},A8j:function(E){if(A.aaZ(this.JJ,E))return;if(!!this.JJ)A.z$([this,this.
A1S],this.JJ,0);this.JJ=E;if(!!this.JJ)A.zX([this,this.A1S],this.JJ,0);A.pe([this
,this.A1S],this);},A1S:function(G){var F;this.D0=(F=this.JJ,F[1].call(F[0]));this.
An();},A8i:function(E){if(A.aaZ(this.JI,E))return;if(!!this.JI)A.z$([this,this.A1R
],this.JI,0);this.JI=E;if(!!this.JI)A.zX([this,this.A1R],this.JI,0);A.pe([this,this.
A1R],this);},A1R:function(G){var F;this.DN=(F=this.JI,F[1].call(F[0]));this.An();
},FH:function(G){this.En(1);},G1:function(G){this.En(0);},En:function(EC){var F;
if(!this.A3)this.Fu.Ai3((F=this.N,F[1].call(F[0])));this.A3=EC;if((this.A3<0)||(
this.A3>2))this.A3=0;this.DD(this);this.Gi.Bv=!!this.A3;this.Gh.Bv=!!this.A3;this.
An();},AhQ:function(G){if(this.A3>1)this.En(this.A3-1);},A16:function(G){},AxS:function(
s){this.A16(s);},A1G:function(G){},A$u:function(s){this.A1G(s);},A0r:function(AsM
){return null;},_Init:function(aArg){C.B$._Init.call(this,aArg);A.acg.AI._Init.call(
this.Akg={I:this},0);A.acg.AI._Init.call(this.Akh={I:this},0);A.acg.AI._Init.call(
this.QO={I:this},0);A.acg.Am._Init.call(this.Qo={I:this},0);A.acg.AI._Init.call(
this.AaY={I:this},0);A.acg.Cz._Init.call(this.Vy={I:this},0);A.acg.Text._Init.call(
this.Pt={I:this},0);A.acg.Text._Init.call(this.Pu={I:this},0);A.acg.Text._Init.call(
this.Sb={I:this},0);A.Core.BJ._Init.call(this.Gh={I:this},0);A.Core.BJ._Init.call(
this.Gi={I:this},0);A.Core.BJ._Init.call(this.Jk={I:this},0);this.__proto__=C.AbU;
this.H(Ae6);this.U(A.aaR(A.acf.AqE));this.Background.H(Ae6);this.V.H(BC);this.V.
R(A.aaR(A.acf.AFH));this.V.A2(0x12);this.Akg.H(BqR);this.Akg.L(A.jb.FW);this.Akh.
H(BqS);this.Akh.L(A.jb.HZ);this.QO.H(BqT);this.QO.L(A.jb.EU);this.Qo.H(BqU);this.
AaY.H(BqV);this.Vy.H(BqW);this.Vy.NO(3);this.Vy.L(A.jb.AR);this.Vy.Y(false);this.
Pt.H(BqX);this.Pt.HG(8);this.Pt.IZ(true);this.Pt.A2(0x11);this.Pt.L(0xFF000000);
this.Pu.H(BqY);this.Pu.HG(8);this.Pu.IZ(true);this.Pu.A2(0x11);this.Pu.L(0xFF000000
);this.Sb.H(BqZ);this.Sb.IZ(false);this.Sb.A2(0x12);this.Sb.L(0xFF000000);this.Gh.
Filter=5;this.Gh.Bv=false;this.Gi.Filter=4;this.Gi.Bv=false;this.Jk.Filter=1;this.
Kj(this.V,-1);this.Kj(this.Dp,-2);this.J(this.Akg,-1);this.J(this.Akh,-1);this.J(
this.QO,-1);this.J(this.Qo,-1);this.J(this.AaY,-1);this.J(this.Vy,-1);this.J(this.
Pt,-1);this.J(this.Pu,0);this.J(this.Sb,0);this.Qo.Ax(A.aaL(A.ach.ACp));this.Pt.
S(A.aaL(A.fl.Ah));this.Pu.S(A.aaL(A.fl.Ah));this.Sb.S(A.aaL(A.fl.Ak));this.Gh.BK=[
this,this.Alu];this.Gh.DS=[this,this.AYL];this.Gi.BK=[this,this.Alv];this.Gi.DS=[
this,this.AYN];this.Jk.BK=[this,this.AcX];this.Fu=A._NewObject(C.AdT,0);},_Done:
function(){this.__proto__=C.B$;this.Akg._Done();this.Akh._Done();this.QO._Done();
this.Qo._Done();this.AaY._Done();this.Vy._Done();this.Pt._Done();this.Pu._Done();
this.Sb._Done();this.Gh._Done();this.Gi._Done();this.Jk._Done();C.B$._Done.call(
this);},_ReInit:function(){C.B$._ReInit.call(this);this.Akg._ReInit();this.Akh._ReInit(
);this.QO._ReInit();this.Qo._ReInit();this.AaY._ReInit();this.Vy._ReInit();this.
Pt._ReInit();this.Pu._ReInit();this.Sb._ReInit();this.Gh._ReInit();this.Gi._ReInit(
);this.Jk._ReInit();this.U(A.aaR(A.acf.AqE));this.V.R(A.aaR(A.acf.AFH));this.Pt.
S(A.aaL(A.fl.Ah));this.Pu.S(A.aaL(A.fl.Ah));this.Sb.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.B$._Mark.call(this,D);if((B=this.Fu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JI)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Akg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Akh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pt
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.G6={Xt:null,AbW:
null,AnE:0,AnF:0,Do:function(){if(!this.Xt)return 0;return this.Xt.Mt;},C9:function(
aIndex){if(!this.Xt||(aIndex>=this.Xt.Mt))return-1;return this.Xt.Get(aIndex);},
Gg:function(aIndex){return this.AbW.BX(this.C9(aIndex));},DP:function(A1){if(!this.
Xt)return-1;return this.Xt.AuM(A1);},Hj:function(){if(!this.Xt)return-1;return this.
Xt.Hj();},Ane:function(E){if(this.AnE===E)return;this.AnE=E;A.pe([this,this.ATQ]
,this);},AYH:function(Ap){this.Ane(Ap);},Anf:function(E){if(this.AnF===E)return;
this.AnF=E;A.pe([this,this.ATR],this);},AYI:function(Ap){this.Anf(Ap);},ATR:function(
G){A.abo([this,this.ARl,this.AYI],0);},ATQ:function(G){A.abo([this,this.ARk,this.
AYH],0);},ARk:function(){return this.AnE;},ARl:function(){return this.AnF;},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalTypeToString._Init.call(
this.AbW={I:this},0);this.__proto__=C.G6;},_Done:function(){this.__proto__=C.AC;
this.AbW._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this
);this.AbW._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.
Xt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalThresholds"};C.ALc={Init:function(aArg){A.zV([
this,this.BcQ],A._GetAutoObject(A.Device.Helper).Uh,0);A.zV([this,this.BcO],A._GetAutoObject(
A.Device.Helper).Ug,0);this.BcQ(this);this.BcO(this);},Au:function(E){C.G6.Au.call(
this,E);this.Anf(A._GetAutoObject(A.Device.Helper).Uh.Get(this.DP(E)));this.Ane(
A._GetAutoObject(A.Device.Helper).Ug.Get(this.DP(E)));},Ane:function(E){if(this.
AnE===E)return;C.G6.Ane.call(this,E);A._GetAutoObject(A.Device.Helper).Ug.Set(this.
DP(this.Q),E);A._GetAutoObject(A.Device.Helper).Ug.Cp();},Anf:function(E){if(this.
AnF===E)return;C.G6.Anf.call(this,E);A._GetAutoObject(A.Device.Helper).Uh.Set(this.
DP(this.Q),E);A._GetAutoObject(A.Device.Helper).Uh.Cp();},BcQ:function(G){this.AnF=
A._GetAutoObject(A.Device.Helper).Uh.Get(this.DP(this.Q));A.pe([this,this.ATR],this
);},BcO:function(G){this.AnE=A._GetAutoObject(A.Device.Helper).Ug.Get(this.DP(this.
Q));A.pe([this,this.ATQ],this);},_Init:function(aArg){C.G6._Init.call(this,aArg);
this.__proto__=C.ALc;this.Xt=A._GetAutoObject(A.Device.Helper).Ado;this.Init(aArg
);},_className:"Application::AnimalThresholdsTemperatures"};C.ALd={AAR:0,AAQ:0,Init:
function(aArg){A.zV([this,this.Bc0],A._GetAutoObject(A.Device.Helper).AeZ,0);A.zV([
this,this.BcY],A._GetAutoObject(A.Device.Helper).AeY,0);A.zV([this,this.BcW],A._GetAutoObject(
A.Device.Helper).AeX,0);A.zV([this,this.Bc2],A._GetAutoObject(A.Device.Helper).Ae0
,0);this.Bc0(this);this.BcY(this);this.BcW(this);this.Bc2(this);},Au:function(E){
C.G6.Au.call(this,E);this.Anf(A._GetAutoObject(A.Device.Helper).AeZ.Get(this.DP(
E)));this.Ane(A._GetAutoObject(A.Device.Helper).AeY.Get(this.DP(E)));this.ARp(A.
_GetAutoObject(A.Device.Helper).AeX.Get(this.DP(E)));this.ARr(A._GetAutoObject(A.
Device.Helper).Ae0.Get(this.DP(E)));},Ane:function(E){if(this.AnE===E)return;C.G6.
Ane.call(this,E);A._GetAutoObject(A.Device.Helper).AeY.Set(this.DP(this.Q),E);A.
_GetAutoObject(A.Device.Helper).AeY.Cp();},Anf:function(E){if(this.AnF===E)return;
C.G6.Anf.call(this,E);A._GetAutoObject(A.Device.Helper).AeZ.Set(this.DP(this.Q),
E);A._GetAutoObject(A.Device.Helper).AeZ.Cp();},Bc0:function(G){this.AnF=A._GetAutoObject(
A.Device.Helper).AeZ.Get(this.DP(this.Q));A.pe([this,this.ATR],this);},BcY:function(
G){this.AnE=A._GetAutoObject(A.Device.Helper).AeY.Get(this.DP(this.Q));A.pe([this
,this.ATQ],this);},ARr:function(E){if(this.AAR===E)return;this.AAR=E;A._GetAutoObject(
A.Device.Helper).Ae0.Set(this.DP(this.Q),E);A._GetAutoObject(A.Device.Helper).Ae0.
Cp();A.pe([this,this.A9Q],this);},ARp:function(E){if(this.AAQ===E)return;this.AAQ=
E;A._GetAutoObject(A.Device.Helper).AeX.Set(this.DP(this.Q),E);A._GetAutoObject(
A.Device.Helper).AeX.Cp();A.pe([this,this.A9P],this);},A9P:function(G){A.abo([this
,this.A6M,this.ARp],0);},A9Q:function(G){A.abo([this,this.A6N,this.ARr],0);},BcW:
function(G){this.AAQ=A._GetAutoObject(A.Device.Helper).AeX.Get(this.DP(this.Q));
A.pe([this,this.A9P],this);},Bc2:function(G){this.AAR=A._GetAutoObject(A.Device.
Helper).Ae0.Get(this.DP(this.Q));A.pe([this,this.A9Q],this);},A6N:function(){return this.
AAR;},A6M:function(){return this.AAQ;},_Init:function(aArg){C.G6._Init.call(this
,aArg);this.__proto__=C.ALd;this.Xt=A._GetAutoObject(A.Device.Helper).Af4;this.Init(
aArg);},_className:"Application::AnimalThresholdsWeightGain"};C.AKV={Rs:null,Init:
function(aArg){var B;A.zX([this,this.Aid],[B=this.AnimalType,B.B_,B.Ca],0);A.pe([
this,this.Aid],this);this.A8(this.Rs);},Bm:function(E){C.IS.Bm.call(this,E);this.
Rs.Bx(this.Je.AK);},Aid:function(G){A._GetAutoObject(A.Device.Device).AvS(this.AnimalType.
Q);},_Init:function(aArg){C.IS._Init.call(this,aArg);C.Tm._Init.call(this.Rs={I:
this},0);this.__proto__=C.AKV;var B;this.Je.Ar(false);this.Je.Aj(false);this.Je.
Y(false);this.Rs.H(AHq);this.Rs.Aj(true);this.Rs.M7(14);this.Rs.AgX(0);this.Rs.Oy(
0);this.J(this.Rs,-6);this.Rs.AQ=[this,this.Azq];this.Rs.Au([B=this.AnimalType,B.
B_,B.Ca]);this.Rs.CK(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.IS;this.Rs._Done();C.IS._Done.call(this);},_ReInit:function(){C.IS._ReInit.call(
this);this.Rs._ReInit();},_Mark:function(D){var B;C.IS._Mark.call(this,D);if((B=
this.Rs)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.Tm={Filter:null,Eh:0,TableId:0,Operator:1,CT:function(){var F;this.S8((F=this.
Filter,F[1].call(F[0])).DX(this.Eh,this.Operator));},Bg:function(aSize){var B;C.
B$.Bg.call(this,aSize);this.V.H([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hl.H(Ahk
);this.HV.H([aSize[0]-40,40,aSize[0],80]);this.Dp.H([this.Hl.M[2]-5,this.Hl.M[1]
,this.HV.M[0]+5,this.Hl.M[3]]);this.Dp.AD5((B=this.Dp.M)[2]-B[0]);this.Dp.Hx(this.
Dp.Gd,true,null,null);},Bm:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L5],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L5
],E,0);A.pe([this,this.L5],this);},L5:function(G){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.S8((F=this.Filter,F[1].call(F[0])).DX(this.Eh,this.
Operator));else this.S8(null);},AgX:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L5],this);},M7:function(E){if(this.Eh===E)return;this.
Eh=E;A.pe([this,this.L5],this);},S8:function(AM){this.U(A._GetAutoObject(A.Device.
Helper).Amq(this.TableId,this.Eh));this.An();},Oy:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L5],this);},_Init:function(aArg){C.B$._Init.
call(this,aArg);this.__proto__=C.Tm;this.H(JN);this.V.A2(0x11);this.V.CC(A.aaL(A.
fl.By));},_ReInit:function(){C.B$._ReInit.call(this);this.V.CC(A.aaL(A.fl.By));this.
CT();},_Mark:function(D){var B;C.B$._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.AQr={FT:null,MH:null,DO:null,Z:null,Ea:null,Co:null,CB:null,C6:null,F0:null,
D7:null,Dd:null,B4:null,Av:null,Breed:null,I6:null,AnimalType:null,Gender:null,O9:
null,KO:null,I4:null,Yc:null,AlM:null,Kz:0,MU:0,A2b:false,Init:function(aArg){var
B;A.zX([this,this.Bxz],[B=A._GetAutoObject(A.Device.Device),B.ADp,B.AHx],0);A.zV([
this,this.Atk],this.MH,0);A.zX([this,this.Atk],[B=A._GetAutoObject(A.Device.Device
),B.Avz,B.AxO],0);A.zX([this,this.Hu],[B=A._GetAutoObject(A.Device.Device),B.ADp
,B.AHx],0);A.zV([this,this.Hu],this.MH,0);A.zX([this,this.Aid],this.B4.Q,0);A.pe([
this,this.Aid],this);A.pe([this,this.Bcs],this);A.pe([this,this.Atk],this);A.pe([
this,this.Hu],this);A.pe([this,this.BcN],this);},A8:function(E){C.AB.A8.call(this
,E);A.pe([this,this.AJ3],this);A.pe([this,this.DD],this);},Ai:function(Ae){var F;
C.AB.Ai.call(this,Ae);if(!!(F=this.Ea.Q,F[1].call(F[0])))this.Ea.Aq2(A.jb.EU);else
this.Ea.Aq2(A.jb.FW);if(A._GetAutoObject(A.Device.Device).Aea){if(!!(F=this.Co.Dg
,F[1].call(F[0])))this.Co.Aq2(A.jb.EU);else this.Co.Aq2(A.jb.FW);}else this.Co.Aq2(
A.jb.Ab6);A.pe([this,this.DD],this);},Du:function(G){var B;C.AB.Du.call(this,G);
if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hx(this.AR,true,null,null);},LE:
function(G){if(A._GetAutoObject(A.Device.Device).Aq.La())A._GetAutoObject(A.Device.
Device).A6(41,true,A._GetAutoObject(A.Device.Device).Aq.Hz().toFixed(),0,null);A.
_GetAutoObject(A.Device.Helper).W.Gb();A._GetAutoObject(A.Device.Helper).ApG(A._GetAutoObject(
A.Device.Helper).W);this.AoY();},CJ:function(G){C.AB.CJ.call(this,G);A._GetAutoObject(
A.Device.Device).AEa(0);},Fd:function(G){C.AB.Fd.call(this,G);this.I4.Ar(false);
A._GetAutoObject(A.Device.Device).T4(false);},Ee:function(G){A._GetAutoObject(A.
Device.Helper).W.Ha();A._GetAutoObject(C.AY).Fm();},E9:function(G){var B;this.Av.
Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);this.Av.Mn(-this.
Z.Bp[1]);},G4:function(G){A.pe([this,this.E9],this);},Atk:function(G){var F,CL;if(
!!A._GetAutoObject(A.Device.Device).OverlayMenu)return;this.AJ3(this);this.An();
if((this.AR===this.Ea)&&!!(F=this.Ea.Q,F[1].call(F[0]))){if(A._GetAutoObject(A.Device.
Device).Aq.AdL(26,(F=this.Ea.Q,F[1].call(F[0])))){A._GetAutoObject(A.Device.Device
).A6(21,true,A._GetAutoObject(A.Device.Converter).Q1((F=this.Ea.Q,F[1].call(F[0]
))),0,[this,this.A1x]);(F=this.Ea.Q,F[2].call(F[0],0));A.pe([this,this.A1w],this
);return;}else if(A._GetAutoObject(A.Device.Device).Aea)this.LF(this.Co);}if(this.
MH.ANg()>0)return;if((A._GetAutoObject(A.Device.Device).Aea&&(this.AR===this.Co)
)&&!!(F=this.Co.Dg,F[1].call(F[0])))this.LF(this.Ea);if(!!(F=this.Ea.Q,F[1].call(
F[0]))&&(!A._GetAutoObject(A.Device.Device).Aea||!!(CL=this.Co.Dg,CL[1].call(CL[
0]))))this.BaA(this);},Xb:function(G){A._GetAutoObject(A.Device.Device).Cj(13);}
,Air:function(){var F;this.FT.Cp(A._GetAutoObject(A.Device.Device).Aq);if(this.MH.
LN(23)){if(A._GetAutoObject(A.Device.Device).Bq.La())A._GetAutoObject(A.Device.Device
).A6(50,true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),0,null);else{var
L0=A._GetAutoObject(A.Device.Device).Aq.K7(0,this.FT.Id);A._GetAutoObject(A.Device.
Device).Sq(L0);var BT=A._NewObject(A.Device.Rating,0);BT.Gb();BT.OnSetAnimalId(this.
FT.Id);BT.OnSetBodyWeight(this.Kz);BT.OnSetTimestamp(this.FT.DateOfBirth);BT.Cp(
A._GetAutoObject(A.Device.Device).Bq);}}if(this.MH.LN(18)){if(A._GetAutoObject(A.
Device.Device).Bq.La())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bq.Hz().toFixed(),0,null);else{var L0=A._GetAutoObject(A.Device.
Device).Aq.K7(0,this.FT.Id);A._GetAutoObject(A.Device.Device).Sq(L0);var BT=A._NewObject(
A.Device.Rating,0);BT.Gb();BT.OnSetAnimalId(this.FT.Id);BT.OnSetBodyWeight(this.
MU);BT.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dy());BT.Cp(A._GetAutoObject(
A.Device.Device).Bq);}}A._GetAutoObject(A.Device.Device).V$(65280);this.I4.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.AEa(F.Ave+1));this.A2b=true;A.pe([this,
this.AJ3],this);this.AoY();},Hu:function(G){this.Co.ARU(A._GetAutoObject(A.Device.
Device).Aea);A._GetAutoObject(A.Device.Helper).Ms(this.B4,this.MH.LN(14));A._GetAutoObject(
A.Device.Helper).Ms(this.Dd,this.MH.LN(23));A._GetAutoObject(A.Device.Helper).Ms(
this.CB,this.MH.LN(32));A._GetAutoObject(A.Device.Helper).Ms(this.D7,this.MH.LN(
18));A._GetAutoObject(A.Device.Helper).Ms(this.C6,this.MH.LN(7));A._GetAutoObject(
A.Device.Helper).Ms(this.F0,this.MH.LN(34));this.Yc.Y(!this.MH.ANg());var P;var Aa=
null;var AoF=this.AR;for(P=0;P<this.MH.Afh.X0();P++){Aa=this.Bwx(this.MH.Afh.Vt(
P));if(!!Aa)this.Y5(Aa);}this.LF(AoF);A._GetAutoObject(A.Device.Helper).A31(this.
Z);this.An();},Aej:function(E){if(this.Kz===E)return;this.Kz=E;A.abo([this,this.
Avm,this.Aej],0);},AgR:function(E){if(this.MU===E)return;this.MU=E;A.abo([this,this.
AmW,this.AgR],0);},BaA:function(G){this.FT.Gb();A._GetAutoObject(A.Device.Helper
).ApG(this.FT);this.FT.Sh(A._GetAutoObject(A.Device.Helper).W.DateOfBirth);this.
FT.M8(A._GetAutoObject(A.Device.Helper).W.NaisId);this.FT.T5(A._GetAutoObject(A.
Device.Helper).AKW(0,this.FT));this.FT.Aep(true);if(this.MH.LN(14))this.FT.DT(A.
_GetAutoObject(A.Device.Helper).W.AnimalType);if(this.MH.LN(32))this.FT.NM(A._GetAutoObject(
A.Device.Helper).W.Breed);if(this.MH.LN(7))this.FT.JG(A._GetAutoObject(A.Device.
Helper).W.Gender);if(this.MH.LN(34))this.FT.M_(A._GetAutoObject(A.Device.Helper).
W.WhereAbouts);var AkV=A._GetAutoObject(A.Device.Helper).AZN(this.FT,0,A._GetAutoObject(
A.Device.Device).Aq);if(!AkV)this.Air();else A._GetAutoObject(A.Device.Helper).AI1(
this.FT,AkV,0,0,[this,this.Ao4]);},AoY:function(){A._GetAutoObject(A.Device.Helper
).W.M8(0);if(A._GetAutoObject(A.Device.Device).Aea)A._GetAutoObject(A.Device.Helper
).W.Sh(0);this.Aej(0);this.AgR(0);this.LF(this.Ea);this.An();},Ao4:function(G){var
As=(A.Device.PopupContext.isPrototypeOf(G)?G:null);if(!As)return;switch(As.Id){case
22:case 21:case 48:this.AoY();break;case 43:this.LF(this.Ea);break;case 41:break;
default:A.ab5("%s%e",Asq,As.Id);}},LF:function(Af){this.A8(Af);this.Z.Hx(Af,true
,null,null);this.Z.U6(null,null);},Bcs:function(G){this.D7.AgV(A._GetAutoObject(
A.Device.Helper).W.Ahj(1));this.Atk(this);},Aid:function(G){this.Dd.AgV(A._GetAutoObject(
A.Device.Helper).AaO(this.AnimalType.Q));},BcN:function(G){var B;var ByF=this.Av.
Background.Fe();var width=(ByF?((B=this.M)[2]-B[0])-((B=this.Av.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var W1=this.Z.Vp(null,0x1);while(!!W1&&(((B=W1)?B.__proto__:null
)!==A.Core.Z)){Aa=(C.OG.isPrototypeOf(W1)?W1:null);if(!!Aa)Aa.H(A.abL(Aa.M,width
));W1=this.Z.Vp(W1,0x1);}},Bwx:function(ZJ){var Aa=null;switch(ZJ){case 14:Aa=this.
B4;break;case 32:Aa=this.CB;break;case 23:Aa=this.Dd;break;case 7:Aa=this.C6;break;
case 18:Aa=this.D7;break;case 34:Aa=this.F0;break;default:A.ab5("%s%e",Bq0,ZJ);}
return Aa;},Bxz:function(G){var F;if(A._GetAutoObject(A.Device.Device).Aea)A._GetAutoObject(
A.Device.Helper).W.Sh(0);else if(!(F=this.Co.Dg,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).W.Sh(A._GetAutoObject(A.Device.Helper).Dy()-A._GetAutoObject(A.
Device.Helper).Auh(A._GetAutoObject(A.Device.Device).AiQ));this.Atk(this);},AJ3:
function(G){var B;var AI6=A.jV;var Ax9=A.jb.CE;var BaQ=A.jb.AR;this.AlM.AwK(this
);if(this.A2b){this.A2b=false;AI6=A._GetAutoObject(A.Device.Helper).Nb(A.aaR(A.acf.
BmK),PW,A._GetAutoObject(A.Device.Converter).Q1(this.FT.NaisId));A.pe([B=this.AlM
,B.StartTimer],this);Ax9=A.jb.EU;BaQ=A.jb.Text;}else if((this.AR===this.Ea)&&!A.
_GetAutoObject(A.Device.Helper).W.NaisId)AI6=A.aaR(A.acf.Bl1);else if((this.AR===
this.Co)&&!A._GetAutoObject(A.Device.Helper).W.DateOfBirth)AI6=A.aaR(A.acf.Bl0);
this.Yc.U(AI6);this.Yc.Bjo(Ax9);this.Yc.Bjp(BaQ);},A1x:function(G){var As=(A.Device.
PopupContext.isPrototypeOf(G)?G:null);if(!!As){if(As.PopupState===4)A._GetAutoObject(
A.Device.Device).Ai4();else if(As.Id===106){if(As.PopupState===8)A._GetAutoObject(
A.Device.Device).Ai4();else if(As.PopupState===7){A._GetAutoObject(C.AY).B1(87);
A._GetAutoObject(A.Device.Device).Ai4();}}}else A._GetAutoObject(A.Device.Device
).Ai4();},A1w:function(G){A._GetAutoObject(A.Device.Device).At9();},DD:function(
G){var B;if(!this.MH.ANg()){this.N.K9.Ds(255);if(this.AR===this.Ea){this.N.C2(A.
aaL(A.ach.Edit));this.N.Cb=[B=this.Ea,B.FH];}else if(this.AR===this.Co){this.N.C2(
A.aaL(A.ach.Edit));this.N.Cb=[B=this.Co,B.FH];}else{this.N.C2(null);this.N.Cb=null;
}}else{this.N.C2(A.aaL(A.ach.Amx));if((this.Ea.ApQ===A.jb.FW)||(this.Co.ApQ===A.
jb.FW)){this.N.K9.Ds(100);this.N.Cb=null;}else{this.N.K9.Ds(255);this.N.Cb=[this
,this.BaA];}}},Avm:function(){return this.Kz;},AmW:function(){return this.MU;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.acg.AI._Init.call(this.DO={I:this},0
);A.Core.Z._Init.call(this.Z={I:this},0);C.AS0._Init.call(this.Ea={I:this},0);C.
ASX._Init.call(this.Co={I:this},0);C.AwA._Init.call(this.CB={I:this},0);C.B$._Init.
call(this.C6={I:this},0);C.ArQ._Init.call(this.F0={I:this},0);C.Akn._Init.call(this.
D7={I:this},0);C.Akn._Init.call(this.Dd={I:this},0);C.B$._Init.call(this.B4={I:this
},0);C.Av._Init.call(this.Av={I:this},0);C.Breed._Init.call(this.Breed={I:this},
0);C.Us._Init.call(this.I6={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);A.Device.MS._Init.call(this.
O9={I:this},0);A.Device.KO._Init.call(this.KO={I:this},0);A.Device.Tn._Init.call(
this.I4={I:this},0);C.ATu._Init.call(this.Yc={I:this},0);A.Core.Timer._Init.call(
this.AlM={I:this},0);this.__proto__=C.AQr;var B;this.Background.L(A.jb.C0);this.
N.Y(true);this.D$.Ar(false);this.Dr(C.ANY);this.DO.AW(0x3F);this.DO.H(E4);this.DO.
L(A.jb.CE);this.Z.H(E4);this.Z.Kb(9);this.Ea.H(AHq);this.Ea.Aj(true);this.Ea.U(A.
aaR(A.acf.ABx));this.Ea.ARU(true);this.Ea.AEw(false);this.Co.H(Bq1);this.Co.Aj(true
);this.Co.U(A.aaR(A.acf.AdF));this.Co.ARU(true);this.Co.AEr(true);this.CB.H(Aso);
this.CB.Aj(true);this.CB.U(A.aaR(A.acf.Breed));this.C6.H(Aso);this.C6.Aj(true);this.
C6.U(A.aaR(A.acf.AeL));this.F0.H(A_y);this.F0.Aj(true);this.F0.U(A.aaR(A.acf.I6)
);this.D7.H(Bq2);this.D7.Aj(true);this.D7.U(A.aaR(A.acf.MU));this.D7.Gk(1000);this.
D7.E1(99000);this.D7.AgV(A._GetAutoObject(A.Device.Helper).AaO(this.AnimalType.Q
));this.Dd.H(A_y);this.Dd.Aj(true);this.Dd.U(A.aaR(A.acf.Kz));this.Dd.Gk(1000);this.
Dd.E1(99000);this.Dd.AgV(A._GetAutoObject(A.Device.Helper).AaO(this.AnimalType.Q
));this.B4.H(Asn);this.B4.Aj(true);this.B4.U(A.aaR(A.acf.AeU));this.Av.H(II);this.
I4.BY=false;this.I4.Cq=true;this.I4.HF(1);this.I4.Ff(1000);this.I4.T1(0);this.Yc.
H(ZF);this.Yc.Aj(true);this.Yc.Aq2(A.jb.Text);this.AlM.PC(3000);this.J(this.DO,0
);this.J(this.Z,0);this.J(this.Ea,0);this.J(this.Co,0);this.J(this.CB,0);this.J(
this.C6,0);this.J(this.F0,0);this.J(this.D7,0);this.J(this.Dd,0);this.J(this.B4,
0);this.J(this.Av,0);this.J(this.Yc,0);this.N.Cw=[this,this.Ee];this.N.Cg=[this,
this.Xb];this.N.CS(A.aaL(A.ach.EV));this.N.Cm(A.aaL(A.ach.Aa0));this.Z.Ei=[this,
this.G4];this.Ea.Au([B=A._GetAutoObject(A.Device.Helper).W,B.AmZ,B.M8]);this.Ea.
AD2([this,this.Atk]);this.Ea.ARM([this,this.A1w]);this.Ea.ARN([this,this.A1x]);this.
Co.Gj([this,this.D9,this.GQ]);this.Co.AbC([B=A._GetAutoObject(A.Device.Helper).W
,B.Avp,B.Sh]);this.Co.Or=[this,this.Bcs];this.Co.ARM([this,this.A1w]);this.Co.ARN([
this,this.A1x]);this.CB.Gj([this,this.D9,this.GQ]);this.CB.LS([B=this.CB,B.FH]);
this.CB.LU(A.aaL(A.ach.Edit));this.CB.Au([B=this.Breed,B.B_,B.Ca]);this.CB.CK(this.
Breed);this.CB.Am5(this.O9);this.C6.Au([B=this.Gender,B.B_,B.Ca]);this.C6.CK(this.
Gender);this.F0.Gj([this,this.D9,this.GQ]);this.F0.LS([B=this.F0,B.FH]);this.F0.
LU(A.aaL(A.ach.Edit));this.F0.Au([B=this.I6,B.B_,B.Ca]);this.F0.CK(this.I6);this.
F0.Am5(this.KO);this.D7.Au([this,this.AmW,this.AgR]);this.Dd.Au([this,this.Avm,this.
Aej]);this.B4.Au([B=this.AnimalType,B.B_,B.Ca]);this.B4.CK(this.AnimalType);this.
Av.BkM([this,this.BcN]);this.Breed.LT(A._GetAutoObject(A.Device.Helper).W);this.
I6.LT(A._GetAutoObject(A.Device.Helper).W);this.AnimalType.LT(A._GetAutoObject(A.
Device.Helper).W);this.Gender.LT(A._GetAutoObject(A.Device.Helper).W);this.FT=A.
_NewObject(A.Device.Animal,0);this.MH=A._GetAutoObject(C.AlV);this.I4.Q=[B=A._GetAutoObject(
A.Device.Device),B.ARh,B.AYE];this.AlM.Mp=[this,this.AJ3];this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.DO._Done();this.Z._Done();this.Ea._Done();this.
Co._Done();this.CB._Done();this.C6._Done();this.F0._Done();this.D7._Done();this.
Dd._Done();this.B4._Done();this.Av._Done();this.Breed._Done();this.I6._Done();this.
AnimalType._Done();this.Gender._Done();this.O9._Done();this.KO._Done();this.I4._Done(
);this.Yc._Done();this.AlM._Done();C.AB._Done.call(this);},_ReInit:function(){C.
AB._ReInit.call(this);this.DO._ReInit();this.Z._ReInit();this.Ea._ReInit();this.
Co._ReInit();this.CB._ReInit();this.C6._ReInit();this.F0._ReInit();this.D7._ReInit(
);this.Dd._ReInit();this.B4._ReInit();this.Av._ReInit();this.Breed._ReInit();this.
I6._ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.O9._ReInit();this.
KO._ReInit();this.I4._ReInit();this.Yc._ReInit();this.AlM._ReInit();this.Ea.U(A.
aaR(A.acf.ABx));this.Co.U(A.aaR(A.acf.AdF));this.CB.U(A.aaR(A.acf.Breed));this.C6.
U(A.aaR(A.acf.AeL));this.F0.U(A.aaR(A.acf.I6));this.D7.U(A.aaR(A.acf.MU));this.Dd.
U(A.aaR(A.acf.Kz));this.B4.U(A.aaR(A.acf.AeU));},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.FT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MH)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ea)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Co)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CB)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.F0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.D7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
O9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AlM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsMassRecording"
};C.ArP={YP:null,_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);A.acg.Text._Init.call(this.YP={I:this},0);this.__proto__=C.ArP;this.N.BU(A.acf.
BfR);this.Number.H(Bq3);this.I5.H(Bq4);this.IG.H(Bq5);this.Aj$(2);this.Bax=false;
this.BbA=true;this.BbB=false;this.YP.H(Bq6);this.YP.KI(true);this.YP.R(A.aaR(A.acf.
A9t));this.YP.L(A.jb.Text);this.J(this.YP,0);this.N.Cw=null;this.N.Cb=[this,this.
AHE];this.N.CS(null);this.YP.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.SetTransponderScreen;this.YP._Done();C.SetTransponderScreen._Done.call(this);}
,_ReInit:function(){C.SetTransponderScreen._ReInit.call(this);this.YP._ReInit();
this.YP.R(A.aaR(A.acf.A9t));this.YP.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;
C.SetTransponderScreen._Mark.call(this,D);if((B=this.YP)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SetTransponderCancableScreen"};C.ACG={Cn:null,Fz:function(
E){if(this.MX===E)return;C.HA.Fz.call(this,E);this.Cn.C1(E);},X1:function(IJ){var
B2=null;switch(IJ){case-1:case 0:B2=this.FM;break;case 1:B2=this.Cn;break;case 2:
B2=this.GJ;break;default:A.ab5("%s",Ahr);}return B2;},_Init:function(aArg){C.HA.
_Init.call(this,aArg);C.DF._Init.call(this.Cn={I:this},0);this.__proto__=C.ACG;this.
H(Bq7);this.Cn.H(A99);this.FM.H(Bq8);this.J(this.Cn,-2);this.Cn.Dj=[this,this.GF
];},_Done:function(){this.__proto__=C.HA;this.Cn._Done();C.HA._Done.call(this);}
,_ReInit:function(){C.HA._ReInit.call(this);this.Cn._ReInit();},_Mark:function(D
){var B;C.HA._Mark.call(this,D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber3"};C.ArQ={GM:null,Bg:function(aSize){C.OD.Bg.call(this
,aSize);this.V.H(A.abN(this.V.M,this.GM.M[0]));},Ai:function(Ae){C.OD.Ai.call(this
,Ae);if(this.G_)this.GM.Fz(A.jb.CE);else this.GM.Fz(A.jb.C0);},A0m:function(){this.
A8(this.GM);},_Init:function(aArg){C.OD._Init.call(this,aArg);C.HA._Init.call(this.
GM={I:this},0);this.__proto__=C.ArQ;this.GM.H(Bq9);this.J(this.GM,0);this.GM.Au([
this,this.AQ9,this.AEl]);},_Done:function(){this.__proto__=C.OD;this.GM._Done();
C.OD._Done.call(this);},_ReInit:function(){C.OD._ReInit.call(this);this.GM._ReInit(
);},_Mark:function(D){var B;C.OD._Mark.call(this,D);if((B=this.GM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"};C.AwA={GM:null
,Bg:function(aSize){C.OD.Bg.call(this,aSize);this.V.H(A.abN(this.V.M,this.GM.M[0
]));},Ai:function(Ae){C.OD.Ai.call(this,Ae);if(this.G_)this.GM.Fz(A.jb.CE);else this.
GM.Fz(A.jb.C0);},A0m:function(){this.A8(this.GM);},_Init:function(aArg){C.OD._Init.
call(this,aArg);C.ACG._Init.call(this.GM={I:this},0);this.__proto__=C.AwA;this.GM.
AW(0x18);this.GM.H(Bq_);this.J(this.GM,0);this.GM.Au([this,this.AQ9,this.AEl]);}
,_Done:function(){this.__proto__=C.OD;this.GM._Done();C.OD._Done.call(this);},_ReInit:
function(){C.OD._ReInit.call(this);this.GM._ReInit();},_Mark:function(D){var B;C.
OD._Mark.call(this,D);if((B=this.GM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupNumbered3"};C.AbX={ScreenTypeToString:null,Do:function(
){return 4;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=104))return A.jV;return this.
ScreenTypeToString.BX(this.C9(aIndex));},_Init:function(aArg){C.C3._Init.call(this
,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={I:this},0
);this.__proto__=C.AbX;this.Cv.Set(0,3);this.Cv.Set(1,35);this.Cv.Set(2,34);this.
Cv.Set(3,47);},_Done:function(){this.__proto__=C.C3;this.ScreenTypeToString._Done(
);C.C3._Done.call(this);},_ReInit:function(){C.C3._ReInit.call(this);this.ScreenTypeToString.
_ReInit();},_Mark:function(D){var B;C.C3._Mark.call(this,D);if((B=this.ScreenTypeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"};C.AUb={
V7:function(G){this.AfV();this.Ey(A.aaR(A.acf.Arx),[this,this.Ard],3);this.Ey(A.
aaR(A.acf.Ahc),[this,this.Aj7],2);this.Ey(A.aaR(A.acf.Adj),[this,this.AqY],1);this.
Ey(A.aaR(A.acf.LinkTransponder),[this,this.ARI],8);this.Ey(A.aaR(A.acf.AiK),[this
,this.Am2],0);this.Ey(A.aaR(A.acf.O5),[this,this.Abv],9);A._GetAutoObject(C.BW).
Gu();A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.Adf)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Cj(6);},Du:function(G){},AaQ:function(){return C.Ai5;},AaR:function(
){return C.Ajq;},QS:function(G){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(
A.Device.Helper).A4$());},HI:function(G){C.EP.HI.call(this,G);if(this.AjM()===false
){this.N.Cm(A.aaL(A.ach.AuT));this.N.Cg=[this,this.AMu];this.N.FA(A.jV);}this.N.
Oz(false);this.N.OA(false);},AfH:function(){A._GetAutoObject(C.AY).B1(97);},AfG:
function(){A._GetAutoObject(C.AY).B1(98);},_Init:function(aArg){C.EP._Init.call(
this,aArg);this.__proto__=C.AUb;var B;this.Dr(C.AB_);this.Dq(A.aaR(A.acf.A6p));this.
Aj6([B=A._GetAutoObject(A.Device.Device),B.AQ8,B.AYw]);},_ReInit:function(){C.EP.
_ReInit.call(this);this.Dq(A.aaR(A.acf.A6p));},_className:"Application::YoungNoTransponderListScreen"
};C.AUa={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AUa;this.
KM.Ar(false);this.KM.Aj(false);this.KM.Y(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AT$={_Init:function(aArg){C.Gw._Init.call(this,aArg);this.__proto__=C.AT$;this.
N.BU(A.aaR(A.acf.A3y));},_ReInit:function(){C.Gw._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A3y));},_className:"Application::YoungNoTransponderListActionsScreen"};
C.APB={R7:null,Q:null,A6k:0,MX:0,Init:function(aArg){this.ARL(6);},Au:function(E
){if(A.aaZ(this.Q,E))return;this.Q=E;if(!!this.R7)this.R7.Au(E);},ARL:function(E
){if(this.A6k===E)return;this.A6k=E;var X;switch(E){case 2:X=A._NewObject(C.HA,0
);break;case 3:X=A._NewObject(C.ACG,0);break;case 4:X=A._NewObject(C.APy,0);break;
case 5:X=A._NewObject(C.APz,0);break;case 6:X=A._NewObject(C.Au_,0);break;default:{
X=null;A.ab5("%s%i",Bq$,E);}}this.Bkp(X);},Bkp:function(E){if(this.R7===E)return;
if(!!this.R7){this.R7.Au(null);this.HH(this.R7);}this.R7=E;if(!!this.R7){this.R7.
Au(this.Q);this.J(this.R7,0);}},Fz:function(E){if(this.MX===E)return;this.MX=E;if(
!!this.R7)this.R7.Fz(E);},Sp:function(Gn){if(!!this.R7)this.R7.Sp(Gn);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.APB;this.H(Axm);this.Init(
aArg);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.R7)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.APy={CQ:null,Cn:null,Fz:function(
E){if(this.MX===E)return;C.HA.Fz.call(this,E);this.Cn.C1(E);this.CQ.C1(E);},X1:function(
IJ){var B2=null;switch(IJ){case-1:case 0:B2=this.FM;break;case 1:B2=this.Cn;break;
case 2:B2=this.CQ;break;case 3:B2=this.GJ;break;default:A.ab5("%s",Ahr);}return B2;
},_Init:function(aArg){C.HA._Init.call(this,aArg);C.DF._Init.call(this.CQ={I:this
},0);C.DF._Init.call(this.Cn={I:this},0);this.__proto__=C.APy;this.H(Bra);this.GJ.
H(AsC);this.CQ.H(A9_);this.Cn.H(A9$);this.FM.H(A_a);this.J(this.CQ,-2);this.J(this.
Cn,-2);this.CQ.Dj=[this,this.GF];this.Cn.Dj=[this,this.GF];},_Done:function(){this.
__proto__=C.HA;this.CQ._Done();this.Cn._Done();C.HA._Done.call(this);},_ReInit:function(
){C.HA._ReInit.call(this);this.CQ._ReInit();this.Cn._ReInit();},_Mark:function(D
){var B;C.HA._Mark.call(this,D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ABG={SB:null,Ai:function(Ae){C.AaN.Ai.call(this,Ae);this.SB.L(this.V.AP);},_Init:
function(aArg){C.AaN._Init.call(this,aArg);C.CP._Init.call(this.SB={I:this},0);this.
__proto__=C.ABG;this.V.Y(false);this.A0.H(Brb);this.A0.ARL(4);this.SB.H(Brc);this.
SB.R(A.aaR(A.acf.J5));this.SB.L(A.jb.Bh);this.J(this.SB,0);this.SB.S(A.aaL(A.fl.
Ah));this.SB.A5(A.aaL(A.fl.Ak));this.SB.CC(null);},_Done:function(){this.__proto__=
C.AaN;this.SB._Done();C.AaN._Done.call(this);},_ReInit:function(){C.AaN._ReInit.
call(this);this.SB._ReInit();this.SB.R(A.aaR(A.acf.J5));this.SB.S(A.aaL(A.fl.Ah)
);this.SB.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.AaN._Mark.call(this,D);
if((B=this.SB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LQ={Yu:null,TM:null,AP:0,A5B:false,L:function(E){if(this.AP===E)return;this.
AP=E;this.Yu.L(this.AP);this.TM.L(this.AP);},A79:function(E){var B;if(this.A5B===
E)return;this.A5B=E;if(E){this.Yu.Y(true);this.TM.DK([this.TM.Et[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Yu.Y(false);this.TM.DK([this.TM.Et[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.DR._Init.call(
this.Yu={I:this},0);A.acg.DR._Init.call(this.TM={I:this},0);this.__proto__=C.LQ;
this.H(AYj);this.Yu.AW(0x2D);this.Yu.DK(Ahn);this.Yu.DY(A_z);this.Yu.L(A.jb.Text
);this.TM.AW(0x36);this.TM.DK(A_z);this.TM.DY(Brd);this.TM.L(A.jb.Text);this.AP=
A.jb.Text;this.J(this.Yu,0);this.J(this.TM,0);},_Done:function(){this.__proto__=
A.Core.O;this.Yu._Done();this.TM._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Yu._ReInit();this.TM._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Yu)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.TM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.ASF={Sa:null,Pm:null,C6:null,B4:null,CB:null,GD:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,O9:null,Us:null,KO:null,Init:function(aArg){A.zX([this
,this.At3],this.B4.Q,0);A.zX([this,this.ALB],this.CB.Q,0);A.zX([this,this.Bn3],this.
Sa.Q,0);A.zX([this,this.AuJ],this.C6.Q,0);A.zX([this,this.AT9],this.GD.Q,0);},At3:
function(G){var F;A._GetAutoObject(A.Device.Device).DT((F=this.B4.Q,F[1].call(F[
0])));},Bn3:function(G){var F;A._GetAutoObject(A.Device.Device).Awj((F=this.Sa.Q
,F[1].call(F[0])));},AuJ:function(G){var F;A._GetAutoObject(A.Device.Device).JG((
F=this.C6.Q,F[1].call(F[0])));},AT9:function(G){var F;A._GetAutoObject(A.Device.
Device).M_((F=this.GD.Q,F[1].call(F[0])));},ALB:function(G){var F;A._GetAutoObject(
A.Device.Device).NM((F=this.CB.Q,F[1].call(F[0])));},_Init:function(aArg){C.Cu._Init.
call(this,aArg);C.B$._Init.call(this.Sa={I:this},0);C.I1._Init.call(this.Pm={I:this
},0);C.B$._Init.call(this.C6={I:this},0);C.B$._Init.call(this.B4={I:this},0);C.AwA.
_Init.call(this.CB={I:this},0);C.ArQ._Init.call(this.GD={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.MS._Init.call(this.O9={I:this},0);C.Us._Init.call(this.Us={I:
this},0);A.Device.KO._Init.call(this.KO={I:this},0);this.__proto__=C.ASF;var B;this.
JH((A.aaR(A.acf.ArB)+Axw)+A.aaR(A.acf.Ai$));this.Sa.H(Ahq);this.Sa.Aj(true);this.
Sa.U(A.aaR(A.acf.A9Y));this.Sa.Bf(true);this.Sa.Bx(0);this.Pm.H(Axk);this.Pm.Aj(
true);this.Pm.Y(true);this.Pm.U(A.aaR(A.acf.AiQ));this.Pm.Gk(0);this.Pm.E1(99);this.
Pm.Kf(A.aaR(A.acf.J5));this.Pm.KH(A.aaR(A.acf.Gz));this.C6.H(ZF);this.C6.Aj(true
);this.C6.U(A.aaR(A.acf.AeL));this.C6.Bf(true);this.C6.Bx(0);this.B4.H(AnR);this.
B4.Aj(true);this.B4.U(A.aaR(A.acf.AeU));this.B4.Bf(true);this.B4.Bx(0);this.CB.H(
AkK);this.CB.Aj(true);this.CB.U(A.aaR(A.acf.Breed));this.CB.Bf(false);this.GD.H(
AkK);this.GD.Aj(true);this.GD.U(A.aaR(A.acf.I6));this.GD.Bf(true);this.AnimalType.
Au(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Au(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Au(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.Device).Breed);
this.Us.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.Sa,0);this.
J(this.Pm,0);this.J(this.C6,0);this.J(this.B4,0);this.J(this.CB,0);this.J(this.GD
,0);this.Sa.Au([B=this.WeightRecordingScope,B.B_,B.Ca]);this.Sa.CK(this.WeightRecordingScope
);this.Pm.Au([B=A._GetAutoObject(A.Device.Device),B.A6E,B.A_T]);this.C6.Au([B=this.
Gender,B.B_,B.Ca]);this.C6.CK(this.Gender);this.B4.Au([B=this.AnimalType,B.B_,B.
Ca]);this.B4.CK(this.AnimalType);this.CB.Gj([this,this.D9,this.GQ]);this.CB.LS([
B=this.CB,B.FH]);this.CB.LU(A.aaL(A.ach.Edit));this.CB.Au([B=this.Breed,B.B_,B.Ca
]);this.CB.CK(this.Breed);this.CB.Am5(this.O9);this.GD.Gj([this,this.D9,this.GQ]
);this.GD.LS([B=this.GD,B.FH]);this.GD.LU(A.aaL(A.ach.Edit));this.GD.Au([B=this.
Us,B.B_,B.Ca]);this.GD.CK(this.Us);this.GD.Am5(this.KO);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cu;this.Sa._Done();this.Pm._Done();this.C6._Done();this.
B4._Done();this.CB._Done();this.GD._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.O9._Done();this.Us._Done();this.
KO._Done();C.Cu._Done.call(this);},_ReInit:function(){C.Cu._ReInit.call(this);this.
Sa._ReInit();this.Pm._ReInit();this.C6._ReInit();this.B4._ReInit();this.CB._ReInit(
);this.GD._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.O9._ReInit();this.Us._ReInit();
this.KO._ReInit();this.JH((A.aaR(A.acf.ArB)+Axw)+A.aaR(A.acf.Ai$));this.Sa.U(A.aaR(
A.acf.A9Y));this.Pm.U(A.aaR(A.acf.AiQ));this.Pm.Kf(A.aaR(A.acf.J5));this.Pm.KH(A.
aaR(A.acf.Gz));this.C6.U(A.aaR(A.acf.AeL));this.B4.U(A.aaR(A.acf.AeU));this.CB.U(
A.aaR(A.acf.Breed));this.GD.U(A.aaR(A.acf.I6));},_Mark:function(D){var B;C.Cu._Mark.
call(this,D);if((B=this.Sa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B4
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.O9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Us)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.ASE={Qx:null,Ji:null,Ie:null,Fa:null,Fv:null,Ic:null,AutoRegistrationMode:null
,Adk:null,Init:function(aArg){var B;A.zX([this,this.BeT],this.Qx.Q,0);A.zX([this
,this.Bcf],[B=A._GetAutoObject(A.Device.Device),B.AQQ,B.AYn],0);A.zX([this,this.
Ao_],[B=A._GetAutoObject(A.Device.Device),B.Abq,B.Acj],0);A.zX([this,this.Ao_],[
B=A._GetAutoObject(A.Device.Device),B.Abr,B.Ack],0);A.pe([this,this.Bcf],this);A.
pe([this,this.Ao_],this);},BeT:function(G){var F;A._GetAutoObject(A.Device.Device
).AvG((F=this.Qx.Q,F[1].call(F[0])));},Bcf:function(G){switch(A._GetAutoObject(A.
Device.Device).AfY){case 0:A._GetAutoObject(A.Device.Helper).Ms(this.Ie,true);break;
case 1:A._GetAutoObject(A.Device.Helper).Ms(this.Ie,false);break;default:throw new
Error(Bre+A._GetAutoObject(A.Device.Device).AfY.toFixed());}},Ao_:function(G){var
F,CL;if(((F=this.Fa.Q,F[1].call(F[0]))+(CL=this.Fv.Q,CL[1].call(CL[0])))>12)(CL=
this.Fv.Q,CL[2].call(CL[0],12-(F=this.Fa.Q,F[1].call(F[0]))));},_Init:function(aArg
){C.Cu._Init.call(this,aArg);C.B$._Init.call(this.Qx={I:this},0);C.B$._Init.call(
this.Ji={I:this},0);C.AFn._Init.call(this.Ie={I:this},0);C.I1._Init.call(this.Fa={
I:this},0);C.I1._Init.call(this.Fv={I:this},0);C.AC3._Init.call(this.Ic={I:this}
,0);C.AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.Adk.
_Init.call(this.Adk={I:this},0);this.__proto__=C.ASE;var B;this.JH(A.aaR(A.acf.ApI
));this.Qx.H(AHq);this.Qx.Aj(true);this.Qx.U(A.aaR(A.acf.ApI));this.Qx.Bf(false);
this.Qx.Gk(-1);this.Qx.E1(1);this.Ji.H(WK);this.Ji.Aj(true);this.Ji.Y(true);this.
Ji.U(A.aaR(A.acf.AAI));this.Ji.Bf(true);this.Ie.H(ZF);this.Ie.Aj(true);this.Ie.Y(
true);this.Ie.U(A.aaR(A.acf.AC$));this.Ie.Bf(true);this.Fa.H(AnR);this.Fa.Aj(true
);this.Fa.Y(true);this.Fa.U(A.aaR(A.acf.ABr));this.Fa.Bf(false);this.Fa.Gk(2);this.
Fa.E1(6);this.Fa.Kf(A.aaR(A.acf.Ajb));this.Fa.KH(A.aaR(A.acf.E$));this.Fv.H(AkK);
this.Fv.Aj(true);this.Fv.U(A.aaR(A.acf.ADf));this.Fv.Bf(true);this.Fv.Gk(0);this.
Fv.E1(12);this.Fv.Kf(A.aaR(A.acf.Ajb));this.Fv.KH(A.aaR(A.acf.E$));this.Ic.H(Brf
);this.Ic.Ar(true);this.Ic.Aj(true);this.Ic.Bf(false);this.Ic.AEi(A.aaR(A.acf.AAP
));this.AutoRegistrationMode.Au(A._GetAutoObject(A.Device.Device).AutoRegistrationMode
);this.J(this.Qx,0);this.J(this.Ji,0);this.J(this.Ie,0);this.J(this.Fa,0);this.J(
this.Fv,0);this.J(this.Ic,0);this.Qx.Au([B=this.AutoRegistrationMode,B.B_,B.Ca]);
this.Qx.CK(this.AutoRegistrationMode);this.Ji.Au([B=this.Adk,B.B_,B.Ca]);this.Ji.
CK(this.Adk);this.Ie.T0([B=A._GetAutoObject(A.Device.Device),B.V6,B.AYs]);this.Ie.
AjZ([B=A._GetAutoObject(A.Device.Device),B.Avr,B.AxI]);this.Fa.Au([B=A._GetAutoObject(
A.Device.Device),B.Abq,B.Acj]);this.Fv.Au([B=A._GetAutoObject(A.Device.Device),B.
Abr,B.Ack]);this.Ic.Dz(A.aaL(A.ach.Amy));this.Ic.PB([B=A._GetAutoObject(A.Device.
Device),B.Abq,B.Acj]);this.Ic.QM([B=A._GetAutoObject(A.Device.Device),B.Abr,B.Ack
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cu;this.Qx._Done();this.Ji.
_Done();this.Ie._Done();this.Fa._Done();this.Fv._Done();this.Ic._Done();this.AutoRegistrationMode.
_Done();this.Adk._Done();C.Cu._Done.call(this);},_ReInit:function(){C.Cu._ReInit.
call(this);this.Qx._ReInit();this.Ji._ReInit();this.Ie._ReInit();this.Fa._ReInit(
);this.Fv._ReInit();this.Ic._ReInit();this.AutoRegistrationMode._ReInit();this.Adk.
_ReInit();this.JH(A.aaR(A.acf.ApI));this.Qx.U(A.aaR(A.acf.ApI));this.Ji.U(A.aaR(
A.acf.AAI));this.Ie.U(A.aaR(A.acf.AC$));this.Fa.U(A.aaR(A.acf.ABr));this.Fa.Kf(A.
aaR(A.acf.Ajb));this.Fa.KH(A.aaR(A.acf.E$));this.Fv.U(A.aaR(A.acf.ADf));this.Fv.
Kf(A.aaR(A.acf.Ajb));this.Fv.KH(A.aaR(A.acf.E$));this.Ic.AEi(A.aaR(A.acf.AAP));}
,_Mark:function(D){var B;C.Cu._Mark.call(this,D);if((B=this.Qx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ji)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fv
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AutoRegistrationMode)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adk)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.ATH={Os:null,Ji:null,Ie:null,Fa:null,Fv:null,Ic:null,AeS:null,Init:function(
aArg){var B;A.zX([this,this.BcS],[B=A._GetAutoObject(A.Device.Device),B.ARj,B.AYG
],0);A.zX([this,this.Ao_],[B=A._GetAutoObject(A.Device.Device),B.Abq,B.Acj],0);A.
zX([this,this.Ao_],[B=A._GetAutoObject(A.Device.Device),B.Abr,B.Ack],0);A.pe([this
,this.BcS],this);A.pe([this,this.Ao_],this);},BcS:function(G){var AJI=false;var AtC=
false;switch(A._GetAutoObject(A.Device.Device).Ahh){case 0:{AJI=false;AtC=false;
}break;case 1:{AJI=true;AtC=false;}break;case 2:{AJI=false;AtC=true;}break;default:
throw new Error(Brg+A._GetAutoObject(A.Device.Device).Ahh.toFixed());}A._GetAutoObject(
A.Device.Helper).Ms(this.Ie,AJI);A._GetAutoObject(A.Device.Helper).Ms(this.Fa,AtC
);A._GetAutoObject(A.Device.Helper).Ms(this.Fv,AtC);A._GetAutoObject(A.Device.Helper
).Ms(this.Ic,AtC);},Ao_:function(G){var F,CL;if(((F=this.Fa.Q,F[1].call(F[0]))+(
CL=this.Fv.Q,CL[1].call(CL[0])))>12)(CL=this.Fv.Q,CL[2].call(CL[0],12-(F=this.Fa.
Q,F[1].call(F[0]))));},_Init:function(aArg){C.Cu._Init.call(this,aArg);C.I1._Init.
call(this.Os={I:this},0);C.B$._Init.call(this.Ji={I:this},0);C.AFn._Init.call(this.
Ie={I:this},0);C.I1._Init.call(this.Fa={I:this},0);C.I1._Init.call(this.Fv={I:this
},0);C.AC3._Init.call(this.Ic={I:this},0);C.AeS._Init.call(this.AeS={I:this},0);
this.__proto__=C.ATH;var B;this.JH(A.aaR(A.acf.LinkTransponder));this.Os.H(AHq);
this.Os.Aj(true);this.Os.Y(true);this.Os.U(A.aaR(A.acf.A5U));this.Os.Bf(false);this.
Os.Gk(1);this.Os.E1(365);this.Os.Kf(A.aaR(A.acf.J5));this.Os.KH(A.aaR(A.acf.Gz));
this.Ji.H(WK);this.Ji.Aj(true);this.Ji.Y(true);this.Ji.U(A.aaR(A.acf.AAI));this.
Ji.Bf(true);this.Ie.H(ZF);this.Ie.Aj(true);this.Ie.Y(true);this.Ie.U(A.aaR(A.acf.
AC$));this.Ie.Bf(false);this.Fa.H(AnR);this.Fa.Aj(true);this.Fa.Y(true);this.Fa.
U(A.aaR(A.acf.ABr));this.Fa.Bf(false);this.Fa.Gk(2);this.Fa.E1(6);this.Fa.Kf(A.aaR(
A.acf.Ajb));this.Fa.KH(A.aaR(A.acf.E$));this.Fv.H(AkK);this.Fv.Aj(true);this.Fv.
U(A.aaR(A.acf.ADf));this.Fv.Bf(true);this.Fv.Gk(0);this.Fv.E1(12);this.Fv.Kf(A.aaR(
A.acf.Ajb));this.Fv.KH(A.aaR(A.acf.E$));this.Ic.H(AGG);this.Ic.Ar(true);this.Ic.
Aj(true);this.Ic.Bf(false);this.Ic.AEi(A.aaR(A.acf.AAP));this.J(this.Os,0);this.
J(this.Ji,0);this.J(this.Ie,0);this.J(this.Fa,0);this.J(this.Fv,0);this.J(this.Ic
,0);this.Os.Au([B=A._GetAutoObject(A.Device.Device),B.A66,B.A_9]);this.Ji.Au([B=
this.AeS,B.B_,B.Ca]);this.Ji.CK(this.AeS);this.Ie.T0([B=A._GetAutoObject(A.Device.
Device),B.V6,B.AYs]);this.Ie.AjZ([B=A._GetAutoObject(A.Device.Device),B.Avr,B.AxI
]);this.Fa.Au([B=A._GetAutoObject(A.Device.Device),B.Abq,B.Acj]);this.Fv.Au([B=A.
_GetAutoObject(A.Device.Device),B.Abr,B.Ack]);this.Ic.Dz(A.aaL(A.ach.Amy));this.
Ic.PB([B=A._GetAutoObject(A.Device.Device),B.Abq,B.Acj]);this.Ic.QM([B=A._GetAutoObject(
A.Device.Device),B.Abr,B.Ack]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cu;this.Os._Done();this.Ji._Done();this.Ie._Done();this.Fa._Done();this.Fv._Done(
);this.Ic._Done();this.AeS._Done();C.Cu._Done.call(this);},_ReInit:function(){C.
Cu._ReInit.call(this);this.Os._ReInit();this.Ji._ReInit();this.Ie._ReInit();this.
Fa._ReInit();this.Fv._ReInit();this.Ic._ReInit();this.AeS._ReInit();this.JH(A.aaR(
A.acf.LinkTransponder));this.Os.U(A.aaR(A.acf.A5U));this.Os.Kf(A.aaR(A.acf.J5));
this.Os.KH(A.aaR(A.acf.Gz));this.Ji.U(A.aaR(A.acf.AAI));this.Ie.U(A.aaR(A.acf.AC$
));this.Fa.U(A.aaR(A.acf.ABr));this.Fa.Kf(A.aaR(A.acf.Ajb));this.Fa.KH(A.aaR(A.acf.
E$));this.Fv.U(A.aaR(A.acf.ADf));this.Fv.Kf(A.aaR(A.acf.Ajb));this.Fv.KH(A.aaR(A.
acf.E$));this.Ic.AEi(A.aaR(A.acf.AAP));},_Mark:function(D){var B;C.Cu._Mark.call(
this,D);if((B=this.Os)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ji)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fa)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Fv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeS)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::TransponderAssignmentSettingsScreen"};C.AeS={TransponderAssignmentIdChangeMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bd_],[B=A._GetAutoObject(A.Device.
Device),B.ARj,B.AYG],0);A.pe([this,this.Bd_],this);},Do:function(){return 3;},C9:
function(aIndex){if((aIndex<0)||(aIndex>=3))return-1;return aIndex;},Gg:function(
aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.TransponderAssignmentIdChangeMethodToString.
BX(aIndex);},DP:function(A1){return A1;},Hj:function(){return 2;},Au:function(E){
C.AC.Au.call(this,E);A._GetAutoObject(A.Device.Device).Awg(E);},Bd_:function(G){
this.Q=A._GetAutoObject(A.Device.Device).Ahh;A.abo([this,this.B_,this.Ca],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.TransponderAssignmentIdChangeMethodToString.
_Init.call(this.TransponderAssignmentIdChangeMethodToString={I:this},0);this.__proto__=
C.AeS;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.TransponderAssignmentIdChangeMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
TransponderAssignmentIdChangeMethodToString._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.TransponderAssignmentIdChangeMethodToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.I2={B3:null,IL:null,Cl:null,Al5:null,RT:null,AmQ:null,Ai7:null,Text:null,CR:
null,Ed:0,ME:false,Ai:function(Ae){var B;A.acn.I2.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IL.Ar(true);else{this.IL.Ar(false);this.CR.Y(false);}},A2E:function(G
){var B;var A_=this.Text.M;var Nl=0;var Nm=0;if(this.CR.Ej[0]<A_[0])Nl=A_[0]-this.
CR.Ej[0];if(this.CR.Ej[0]>A_[2])Nl=A_[2]-this.CR.Ej[0];if(this.CR.Ej[1]<A_[1])Nm=
A_[1]-this.CR.Ej[1];if(this.CR.Et[1]>A_[3])Nm=A_[3]-this.CR.Et[1];if(!!Nl||!!Nm)
this.Text.Gc(A.abf(this.Text.Bp,[Nl,Nm]));Nl=this.Text.Bp[0];Nm=this.Text.Bp[1];
var CY=[(B=this.Text.Da())[2]-B[0],B[3]-B[1]];if(CY[0]<=((B=this.Text.M)[2]-B[0]
))Nl=0;if(CY[1]<=((B=this.Text.M)[3]-B[1]))Nm=0;this.Text.Gc([Nl,Nm]);},AlP:function(
G){if(!this.B3)return;var A1_=this.Text.AFA(this.Ed);var pos=this.Text.AeD(A1_);
this.CR.DY(A.abe(pos,[0,this.B3.Ascent]));this.CR.DK(A.abf(pos,[0,this.B3.Descent
]));if(this.IL.Bv){this.IL.Ar(false);this.IL.Ar(true);}if(this.ME){A.pe([this,this.
A2E],this);this.ME=false;}},Azu:function(G){if(!this.B3)return;var Ew=this.Text.
AFA(this.Ed);if(this.Cl.CI===6){Ew=[Ew[0]-1,Ew[1]];if(this.Text.Anm(Ew)===this.Ed
){Ew=[Ew[0],Ew[1]-1];Ew=[this.Text.ABV(Ew[1]).length,Ew[1]];}}if(this.Cl.CI===7){
Ew=[Ew[0]+1,Ew[1]];if(this.Text.Anm(Ew)===this.Ed){Ew=[Ew[0],Ew[1]+1];Ew=[0,Ew[1
]];}}if(this.Cl.CI===4){var pos=this.Text.AeD(Ew);var Aaa=(this.B3.Ascent+this.B3.
Descent)+this.B3.Leading;Ew=this.Text.ASk(A.abe(pos,[0,Aaa]));}if(this.Cl.CI===5
){var pos=this.Text.AeD(Ew);var Aaa=(this.B3.Ascent+this.B3.Descent)+this.B3.Leading;
Ew=this.Text.ASk(A.abf(pos,[0,Aaa]));}var US=this.Text.Anm(Ew);var Im=this.Text.
String.charCodeAt(US)||0;if(((Im===0x5E)||(Im===0x7E))||(Im===0x25))US=US-1;if(US
!==this.Ed){this.Ed=US;A.pe([this,this.AlP],this);this.ME=true;}},Bcm:function(G
){if(!this.Ed)return;var Im=this.Text.String.charCodeAt(this.Ed-1)||0;var CM=1;if(((
Im===0x5E)||(Im===0x7E))||(Im===0x25))CM=2;this.Text.R(A.ab1(this.Text.String,this.
Ed-CM,CM));this.Ed=this.Ed-CM;this.ME=true;},Azv:function(G){if(this.Ed>=(this.Text.
String.length-1))return;var Im=this.Text.String.charCodeAt(this.Ed)||0;var CM=1;
if(Im===0x25)CM=2;this.Text.R(A.ab1(this.Text.String,this.Ed,CM));this.ME=true;}
,Bcz:function(G){this.Text.R(A.abU(this.Text.String,Brh,this.Ed));this.Ed=this.Ed+
1;this.ME=true;},Bco:function(G){var Im=this.Ai7.DI;var AtF=String.fromCharCode(
Im);A.ab5("%c",Im);if((((Im===0x5E)||(Im===0x7E))||(Im===0xAD))||(Im===0x25))AtF=
Bri+String.fromCharCode(Im);this.Text.R(A.abU(this.Text.String,AtF,this.Ed));this.
Ed=this.Ed+AtF.length;this.ME=true;},_Init:function(aArg){A.acn.I2._Init.call(this
,aArg);A.acl.Tn._Init.call(this.IL={I:this},0);A.Core.BJ._Init.call(this.Cl={I:this
},0);A.Core.BJ._Init.call(this.Al5={I:this},0);A.Core.BJ._Init.call(this.RT={I:this
},0);A.Core.BJ._Init.call(this.AmQ={I:this},0);A.Core.BJ._Init.call(this.Ai7={I:
this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.DR._Init.call(this.CR={
I:this},0);this.__proto__=C.I2;var B;this.H(Brj);this.IL.BY=false;this.IL.Cq=true;
this.IL.Ff(500);this.IL.T1(500);this.Cl.Filter=147;this.Cl.Bv=false;this.Al5.Filter=
151;this.RT.Filter=44;this.AmQ.Filter=149;this.Ai7.Filter=145;this.Text.AW(0x3F);
this.Text.H(Brk);this.Text.KI(true);this.Text.A2(0x11);this.Text.R(A.jV);this.Text.
L(0xFF000000);this.CR.DK(Brl);this.CR.DY(Brm);this.CR.A8J(2);this.CR.A8I(2);this.
CR.L(0xFF000000);this.CR.Y(false);this.J(this.Text,0);this.J(this.CR,0);this.IL.
Q=[B=this.CR,B.Fe,B.Y];this.Cl.BK=[this,this.Azu];this.Cl.DS=[this,this.Azu];this.
Al5.BK=[this,this.Bcm];this.Al5.DS=[this,this.Bcm];this.RT.BK=[this,this.Azv];this.
RT.DS=[this,this.Azv];this.AmQ.BK=[this,this.Bcz];this.AmQ.DS=[this,this.Bcz];this.
Ai7.BK=[this,this.Bco];this.Ai7.DS=[this,this.Bco];this.Text.QN([this,this.AlP]);
this.Text.S(A.aaL(A.aci.ABK));this.B3=A.aaL(A.aci.ABK);},_Done:function(){this.__proto__=
A.acn.I2;this.IL._Done();this.Cl._Done();this.Al5._Done();this.RT._Done();this.AmQ.
_Done();this.Ai7._Done();this.Text._Done();this.CR._Done();A.acn.I2._Done.call(this
);},_ReInit:function(){A.acn.I2._ReInit.call(this);this.IL._ReInit();this.Cl._ReInit(
);this.Al5._ReInit();this.RT._ReInit();this.AmQ._ReInit();this.Ai7._ReInit();this.
Text._ReInit();this.CR._ReInit();},_Mark:function(D){var B;A.acn.I2._Mark.call(this
,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IL)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Al5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.RT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AmQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ai7)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.ATv={I2:null,Du:function(G
){switch(this.Cl.CI){case 6:A._GetAutoObject(A.Device.Device).At9();break;case 7:
A._GetAutoObject(A.Device.Device).ApJ();break;case 4:A._GetAutoObject(A.Device.Device
).Ai4();break;case 5:A._GetAutoObject(A.Device.Device).ApK();break;default:;}},Ee:
function(G){A._GetAutoObject(C.AY).Fm();},_Init:function(aArg){C.AB._Init.call(this
,aArg);C.I2._Init.call(this.I2={I:this},0);this.__proto__=C.ATv;this.H(B9);this.
N.Y(true);this.Dr(C.Aqf);this.I2.H(E4);this.J(this.I2,0);this.A8(this.I2);this.N.
Cw=[this,this.Ee];this.N.CS(A.aaL(A.ach.EV));},_Done:function(){this.__proto__=C.
AB;this.I2._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(
this);this.I2._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.I2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ASs={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AHD],[B=A._GetAutoObject(A.Device.Device),B.AQW,B.AYp],0);},V7:function(G){
if((!!this.Be&&!!this.Be.AX)&&(this.Be.AX.Ch()>0)){if(this.AIk())A._GetAutoObject(
C.BW).Tc(A.aaR(A.acf.AMU),[this,this.AHr]);else A._GetAutoObject(C.BW).Tc(A.aaR(
A.acf.AMU),null);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Tc(A.aaR(A.acf.
AA5),[this,this.A_L]);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Tc(A.aaR(
A.acf.AFU),[this,this.A6w]);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Tc(
A.aaR(A.acf.A3W),[this,this.A_K]);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.
BW).Tc(A.aaR(A.acf.UnlinkTransponder),[this,this.Blj]);}else{A._GetAutoObject(C.
BW).Xm(A.aaR(A.acf.AMU));A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Xm(A.
aaR(A.acf.AA5));A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Xm(A.aaR(A.acf.
AFU));A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Xm(A.aaR(A.acf.A3W));A.
_GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Xm(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.Tb)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.
A4A));A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.Adf)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},AaQ:function(){return C.
ALK;},AaR:function(){return C.AN$;},QS:function(G){A._GetAutoObject(A.Device.Device
).Aq.Bm(A._GetAutoObject(A.Device.Helper).ANr());},HI:function(G){C.QP.HI.call(this
,G);this.N.Cm(A.aaL(A.ach.Aa0));this.N.Cg=[this,this.Xb];this.N.FA(A.jV);this.N.
C2(null);this.N.BU((A.aaR(A.acf.A3O)+ZH)+this.DataExportDestinationToString.BX(A.
_GetAutoObject(A.Device.Device).Vl));this.N.Oz(false);this.N.OA(false);this.N.IW.
Ds(255);},AQI:function(G){A._GetAutoObject(A.Device.Device).Cj(0);var Aio=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A6(97,true,Aio.toFixed(),0,null);},AQJ:function(G){A._GetAutoObject(A.Device.Device
).Cj(0);this.A4q(this);},AQO:function(G){var B;A._GetAutoObject(A.Device.Device).
Cj(0);if(!A._GetAutoObject(A.Device.Device).Vl&&!A._GetAutoObject(A.Device.Device
).T_){A._GetAutoObject(A.Device.Device).A6(73,true,A.jV,0,[this,this.BcB]);return;
}if(A._GetAutoObject(A.Device.Device).Aqv()===false){A.zX([this,this.AfF],[B=A._GetAutoObject(
A.Device.Device),B.Abs,B.Acl],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.
jV,0,[this,this.Alt]);return;}var Afs=null;switch(A._GetAutoObject(A.Device.Device
).Vl){case 0:Afs=A._GetAutoObject(A.Device.Device).Anq(2);break;case 1:Afs=A._GetAutoObject(
A.Device.Device).Anq(3);break;default:throw new Error(Brn+A._GetAutoObject(A.Device.
Device).Vl.toFixed());}if(Afs.Anv){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Dq(A.aaR(A.acf.Bly));A._GetAutoObject(A.Device.Device).ApX(Afs);}else A._GetAutoObject(
A.Device.Device).A6(98,true,A.jV,0,null);},AIk:function(){var Ayv=this.Be.AX;if(
!Ayv)return false;return true;},Xb:function(G){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.QP._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.ASs;this.Dr(C.AN1);this.Init(aArg);},_Done:function(){this.
__proto__=C.QP;this.DataExportDestinationToString._Done();C.QP._Done.call(this);
},_ReInit:function(){C.QP._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.QP._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.AN$={Pk:null,IV:null,_Init:function(aArg){C.Dv._Init.call(this,aArg);A.acg.Am.
_Init.call(this.Pk={I:this},0);A.acg.Am._Init.call(this.IV={I:this},0);this.__proto__=
C.AN$;this.Er.Y(false);this.CX.Y(false);this.Pk.H(Bro);this.Pk.L(A.jb.Text);this.
IV.H(Brp);this.IV.L(A.jb.Text);this.J(this.Pk,0);this.J(this.IV,0);this.Pk.Ax(A.
aaL(A.ach.AuZ));this.IV.Ax(A.aaL(A.ach.AuU));},_Done:function(){this.__proto__=C.
Dv;this.Pk._Done();this.IV._Done();C.Dv._Done.call(this);},_ReInit:function(){C.
Dv._ReInit.call(this);this.Pk._ReInit();this.IV._ReInit();},_Mark:function(D){var
B;C.Dv._Mark.call(this,D);if((B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.ALw={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.Azy],[B=A._GetAutoObject(A.Device.Device),B.ADl,B.AHu],0);A.pe([this,this.
Azy],this);},V7:function(G){if((!!this.Be&&!!this.Be.AX)&&(this.Be.AX.Ch()>0)){if(
this.AIk())A._GetAutoObject(C.BW).Tc(A.aaR(A.acf.AMT),[this,this.AHr]);else A._GetAutoObject(
C.BW).Xm(A.aaR(A.acf.AMT));A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Tc(
A.aaR(A.acf.AA3),[this,this.A_L]);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.
BW).Tc(A.aaR(A.acf.AFU),[this,this.A6w]);A._GetAutoObject(C.BW).Gu();A._GetAutoObject(
C.BW).Tc(A.aaR(A.acf.A3V),[this,this.A_K]);}else{A._GetAutoObject(C.BW).Xm(A.aaR(
A.acf.AMT));A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Xm(A.aaR(A.acf.AA3
));A._GetAutoObject(C.BW).Gu();A._GetAutoObject(C.BW).Xm(A.aaR(A.acf.AFU));A._GetAutoObject(
C.BW).Gu();A._GetAutoObject(C.BW).Xm(A.aaR(A.acf.A3V));}A._GetAutoObject(C.BW).Gu(
);A._GetAutoObject(C.BW).Qk(A.aaR(A.acf.A4A));A._GetAutoObject(C.BW).Gu();A._GetAutoObject(
C.BW).Qk(A.aaR(A.acf.Adf)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Cj(6);},AaQ:function(){return C.AAZ;},AaR:function(){return C.ACd;},QS:function(
G){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).ANf(
));},HI:function(G){C.QP.HI.call(this,G);this.N.Cm(A.aaL(A.ach.Aa0));this.N.Cg=[
this,this.Xb];this.N.FA(A.jV);this.N.C2(null);this.N.BU((A.aaR(A.acf.A3O)+String.
fromCharCode(0x0A))+this.DataExportDestinationToString.BX(0));this.N.Oz(false);this.
N.OA(false);this.N.IW.Ds(255);},AQI:function(G){A._GetAutoObject(A.Device.Device
).Cj(0);var Aio=A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();
A._GetAutoObject(A.Device.Device).A6(97,true,Aio.toFixed(),0,null);},AQJ:function(
G){A._GetAutoObject(A.Device.Device).Cj(0);this.A4p(this);},AQO:function(G){var B;
A._GetAutoObject(A.Device.Device).Cj(0);if(!A._GetAutoObject(A.Device.Device).T_
){A._GetAutoObject(A.Device.Device).A6(73,true,A.jV,0,[this,this.BcB]);return;}if(
A._GetAutoObject(A.Device.Device).Aqv()===false){A.zX([this,this.AfF],[B=A._GetAutoObject(
A.Device.Device),B.Abs,B.Acl],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.
jV,0,[this,this.Alt]);return;}var Afs=A._GetAutoObject(A.Device.Device).Anq(0);if(
Afs.Anv){A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();this.Dq(
A.aaR(A.acf.Be1));A._GetAutoObject(A.Device.Device).ApX(Afs);}else A._GetAutoObject(
A.Device.Device).A6(70,true,A.jV,0,null);},AIk:function(){var Ayv=this.Be.AX;if(
!Ayv)return false;var P;for(P=0;P<Ayv.Ch();P++)if(A._GetAutoObject(A.Device.Helper
).AjA(Ayv.ANv(P,34))===false)return true;return false;},Xb:function(G){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},Azy:function(G){if(A._GetAutoObject(A.Device.
Device).ApM===1)A.pe([this,this.A4w],this);},_Init:function(aArg){C.QP._Init.call(
this,aArg);A.Device.DataExportDestinationToString._Init.call(this.DataExportDestinationToString={
I:this},0);this.__proto__=C.ALw;this.Dr(C.ANA);this.Init(aArg);},_Done:function(
){this.__proto__=C.QP;this.DataExportDestinationToString._Done();C.QP._Done.call(
this);},_ReInit:function(){C.QP._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.QP._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListScreen"
};C.ANA={_Init:function(aArg){C.Ajp._Init.call(this,aArg);this.__proto__=C.ANA;this.
Text.R(A.aaR(A.acf.AAS));},_ReInit:function(){C.Ajp._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AAS));},_className:"Application::HeaderBirthRegistrationsList"};C.
AN1={_Init:function(aArg){C.Ajp._Init.call(this,aArg);this.__proto__=C.AN1;this.
Text.R(A.aaR(A.acf.AE2));},_ReInit:function(){C.Ajp._ReInit.call(this);this.Text.
R(A.aaR(A.acf.AE2));},_className:"Application::HeaderPurchasedAnimalsList"};C.ALK={
ML:0,AN:null,Su:null,SX:0,Init:function(aArg){},Bg:function(aSize){C.Ba.Bg.call(
this,aSize);this.Background.H(A.abK(this.Background.M,aSize));this.V.H(A.abN(this.
V.M,((aSize[0]*70)/100)|0));this.AN.H([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.Su.H([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.Ba.Ai.call(this
,Ae);this.Su.L(this.V.AP);this.U(A._GetAutoObject(A.Device.Converter).Q1(this.ML
));this.Su.R(A._GetAutoObject(A.acj.KB).ABM(this.SX));},Cc:function(Ac){if(!this.
AX)return;this.Hr=Ac;if(!!this.AX){this.ML=this.AX.LL(Ac,26);this.SX=this.AX.Hy(
Ac,4);this.An();}},_Init:function(aArg){C.Ba._Init.call(this,aArg);A.acg.AI._Init.
call(this.AN={I:this},0);C.CP._Init.call(this.Su={I:this},0);this.__proto__=C.ALK;
this.AN.H(A_r);this.AN.L(A.jb.Bb);this.Su.H(A_t);this.J(this.AN,0);this.J(this.Su
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A5(A.aaL(A.fl.By));this.Su.S(A.aaL(A.fl.Ak));
this.Su.A5(A.aaL(A.fl.By));this.Su.CC(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(
){this.__proto__=C.Ba;this.AN._Done();this.Su._Done();C.Ba._Done.call(this);},_ReInit:
function(){C.Ba._ReInit.call(this);this.AN._ReInit();this.Su._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A5(A.aaL(A.fl.By));this.Su.S(A.aaL(A.fl.Ak));this.Su.A5(A.
aaL(A.fl.By));this.Su.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Ba._Mark.call(
this,D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Su)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.ASX={
Aeh:null,Abt:null,Tv:null,KC:null,Tt:null,Nz:null,SZ:A.jV,Ai:function(Ae){var F;
C.Sr.Ai.call(this,Ae);this.Tv.L(this.V.AP);var AoR=false;if((!this.Dg||!(F=this.
Dg,F[1].call(F[0])))&&!this.A3)AoR=true;this.Tv.Y(AoR);this.Pd.Y(!AoR);this.Vn.Y(
!AoR);this.QI.Y(!AoR);this.XU.Y(!AoR);this.PP.Y(!AoR);},AcX:function(G){var B;var
F;if(!this.SZ.length){C.Sr.AcX.call(this,G);return;}var BN=this.FK;var GH=A._GetAutoObject(
A.Device.Arr).Bya(this.SZ);this.SZ=A.jV;if(!GH){A._GetAutoObject(A.Device.Device
).A6(102,true,A.jV,0,this.Abt);A.pe(this.Aeh,this);return;}if(this.ArA&&(GH>A._GetAutoObject(
A.Device.Helper).Dy())){A._GetAutoObject(A.Device.Device).A6(103,true,A.jV,0,this.
Abt);A.pe(this.Aeh,this);return;}this.TZ(((B=(GH|0))<0)?B+0x100000000:B);if(this.
FK!==BN){if(!!this.Dg)(F=this.Dg,F[2].call(F[0],this.FK));A.abo(this.Dg,0);}if(!
!this.Or)A.pe(this.Or,this);},A1l:function(G){if(this.SZ.length<8)this.SZ=this.SZ+
String.fromCharCode(this.KC.DI);},AQL:function(G){if((this.Nz.DI===0x0D)||(this.
Nz.DI===0x0A))this.AcX(this);else this.Nz.Ny=true;},ARM:function(E){if(A.aa0(this.
Aeh,E))return;this.Aeh=E;},ARN:function(E){if(A.aa0(this.Abt,E))return;this.Abt=
E;},_Init:function(aArg){C.Sr._Init.call(this,aArg);A.acg.Text._Init.call(this.Tv={
I:this},0);A.Core.BJ._Init.call(this.KC={I:this},0);A.Core.BJ._Init.call(this.Tt={
I:this},0);A.Core.BJ._Init.call(this.Nz={I:this},0);this.__proto__=C.ASX;this.Tv.
H(Brq);this.Tv.IZ(true);this.Tv.A2(0x12);this.Tv.R(A.aaR(A.acf.A3_));this.KC.Filter=
143;this.Tt.Filter=149;this.Nz.Filter=145;this.J(this.Tv,0);this.Tv.S(A.aaL(A.fl.
Ez));this.KC.BK=[this,this.A1l];this.Tt.BK=[this,this.A$t];this.Nz.BK=[this,this.
AQL];},_Done:function(){this.__proto__=C.Sr;this.Tv._Done();this.KC._Done();this.
Tt._Done();this.Nz._Done();C.Sr._Done.call(this);},_ReInit:function(){C.Sr._ReInit.
call(this);this.Tv._ReInit();this.KC._ReInit();this.Tt._ReInit();this.Nz._ReInit(
);this.Tv.R(A.aaR(A.acf.A3_));this.Tv.S(A.aaL(A.fl.Ez));},_Mark:function(D){var B;
C.Sr._Mark.call(this,D);if((B=this.Aeh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Abt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Tv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.KC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Tt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nz)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.AS0={Aeh:null,Abt:null,KC:null
,Tt:null,Nz:null,SZ:A.jV,IP:function(G){var F;if(!this.SZ.length){C.QU.IP.call(this
,G);return;}if(this.Arz)return;if(!this.SZ.length)this.Tt.Ny=true;var BN=this.AK;
var GH=A._GetAutoObject(A.Device.Arr).Byb(this.SZ);this.SZ=A.jV;if(!GH){if((this.
SZ.length<13)&&!A._GetAutoObject(A.Device.Device).T_)A._GetAutoObject(A.Device.Device
).A6(106,true,A.jV,0,this.Abt);else A._GetAutoObject(A.Device.Device).A6(104,true
,A.jV,0,this.Abt);A.pe(this.Aeh,this);return;}this.Bx(GH);if(this.AK!==BN){if(!!
this.Q)(F=this.Q,F[2].call(F[0],this.AK));A.abo(this.Q,0);}if(!!this.Or)A.pe(this.
Or,this);},A1l:function(G){if(this.Arz)return;if(this.SZ.length<17)this.SZ=this.
SZ+String.fromCharCode(this.KC.DI);},AQL:function(G){if((this.Nz.DI===0x0D)||(this.
Nz.DI===0x0A))this.IP(this);else this.Nz.Ny=true;},ARM:function(E){if(A.aa0(this.
Aeh,E))return;this.Aeh=E;},ARN:function(E){if(A.aa0(this.Abt,E))return;this.Abt=
E;},_Init:function(aArg){C.QU._Init.call(this,aArg);A.Core.BJ._Init.call(this.KC={
I:this},0);A.Core.BJ._Init.call(this.Tt={I:this},0);A.Core.BJ._Init.call(this.Nz={
I:this},0);this.__proto__=C.AS0;this.Are(false);this.KC.Filter=143;this.Tt.Filter=
149;this.Nz.Filter=145;this.KC.BK=[this,this.A1l];this.Tt.BK=[this,this.AsG];this.
Nz.BK=[this,this.AQL];},_Done:function(){this.__proto__=C.QU;this.KC._Done();this.
Tt._Done();this.Nz._Done();C.QU._Done.call(this);},_ReInit:function(){C.QU._ReInit.
call(this);this.KC._ReInit();this.Tt._ReInit();this.Nz._ReInit();},_Mark:function(
D){var B;C.QU._Mark.call(this,D);if((B=this.Aeh)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Abt)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.KC
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Nz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemNaisdHid"
};C.ANY={Am:null,DZ:null,Init:function(aArg){var B;A.zX([this,this.Eo],[B=A._GetAutoObject(
A.Device.Device),B.A64,B.AEa],0);A.pe([this,this.Eo],this);},C7:function(E){C.BO.
C7.call(this,E);this.Am.L(E);this.DZ.Aj2(E);},Abw:function(E){this.DZ.C1(E);},Eo:
function(G){this.DZ.U(A._GetAutoObject(A.Device.Device).Ave.toFixed());},_Init:function(
aArg){C.BO._Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);C.DZ._Init.
call(this.DZ={I:this},0);this.__proto__=C.ANY;this.Am.H(AHk);this.DZ.AW(0x14);this.
DZ.H(Brr);this.DZ.Aj2(A.jb.Bh);this.DZ.C1(A.jb.Ab6);this.DZ.HG(2);this.DZ.Bjg(0x11
);this.J(this.Am,0);this.J(this.DZ,0);this.Am.Ax(A.aaL(A.ach.AOx));this.DZ.S(A.aaL(
A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.BO;this.Am._Done();
this.DZ._Done();C.BO._Done.call(this);},_ReInit:function(){C.BO._ReInit.call(this
);this.Am._ReInit();this.DZ._ReInit();this.DZ.S(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.BO._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.DZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.AP$={AaF:null,AdO:null,Vk:null,Init:function(aArg){this.A8(this.AaF);},KG:function(
){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.Cw=[this,this.Xa];this.Bw.Cg=
null;this.Bw.Cb=[this,this.A1o];this.Bw.BU(A.jV);this.Bw.Cm(null);this.Bw.CS(A.aaL(
A.ach.Vz));}return this.Bw;},Azr:function(G){var Aa=(C.AiN.isPrototypeOf(G)?G:null
);if(Aa===this.AaF)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.AdO)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A93);},_Init:function(aArg){C.Fg._Init.call(this,aArg);C.AiN._Init.call(this.
AaF={I:this},0);C.AiN._Init.call(this.AdO={I:this},0);C.AQd._Init.call(this.Vk={
I:this},0);this.__proto__=C.AP$;var B;this.H(Q5);this.Text.R(A.aaR(A.acf.AAX));this.
AaF.H(KP);this.AaF.U(A.aaR(A.acf.Ai$));this.AdO.H(Q6);this.AdO.U(A.aaR(A.acf.AE8
));this.Vk.H(WJ);this.Vk.U(A.aaR(A.acf.A3G));this.J(this.AaF,0);this.J(this.AdO,
0);this.J(this.Vk,0);this.Text.S(A.aaL(A.fl.Ak));this.AaF.AQ=[this,this.Azr];this.
AdO.AQ=[this,this.Azr];this.Vk.ARs([B=A._GetAutoObject(A.Device.Device),B.ADp,B.
AHx]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fg;this.AaF._Done();this.
AdO._Done();this.Vk._Done();C.Fg._Done.call(this);},_ReInit:function(){C.Fg._ReInit.
call(this);this.AaF._ReInit();this.AdO._ReInit();this.Vk._ReInit();this.Text.R(A.
aaR(A.acf.AAX));this.AaF.U(A.aaR(A.acf.Ai$));this.AdO.U(A.aaR(A.acf.AE8));this.Vk.
U(A.aaR(A.acf.A3G));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fg._Mark.
call(this,D);if((B=this.AaF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Vk)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.AP_={AnimalTableFields:null,Av:null,Z:
null,JD:null,CT:function(){this.Ah_(this);},Init:function(aArg){A.zV([this,this.
Ah_],this.AnimalTableFields,0);A.pe([this,this.Ah_],this);},Du:function(G){C.Fg.
Du.call(this,G);this.MG(this);},KG:function(){if(!this.Bw){this.Bw=A._NewObject(
C.N,0);this.Bw.Cw=[this,this.Ee];this.Bw.Cg=[this,this.A1m];this.Bw.Cb=[this,this.
A1O];this.Bw.C2(A.aaL(A.ach.Aqr));this.Bw.Cm(A.aaL(A.ach.Aqk));this.Bw.CS(A.aaL(
A.ach.Vz));}return this.Bw;},Ee:function(G){this.Az2();this.Xa(this);},Ah_:function(
G){this.Aoo();var P;for(P=0;P<this.AnimalTableFields.X0();P=P+1){var ZP=A._GetAutoObject(
C.AlV).Vt(P);this.AZu(ZP);}this.J(this.JD,0);A.aaS([this,this.MG],this);},E9:function(
G){var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.Z.M)[3]-B[1]);
this.Av.Mn(-this.Z.Bp[1]);},MG:function(G){var B;this.Z.U6(null,null);if(!!this.
AR&&((this.AR.T&0x400)===0x400))this.Z.Hx(this.AR,true,null,null);},AZu:function(
GX){var Ax6=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.RU,0);Aa.U(Ax6.BX(GX));Aa.Aj(true);Aa.GN=GX;Aa.A78(this.AnimalTableFields.LN(GX
));this.J(Aa,0);this.Y5(Aa);},Aoo:function(){var B;var X=this.Z.Ag;while(!!X&&!((
X.T&0x200)===0x200)){var Ada=X;X=X.Ag;if(((Ada.T&0x400)===0x400))this.HH(Ada);}}
,Az2:function(){var B;this.AnimalTableFields.Clear();var X=this.Z.Ag;while(!!X&&
!((X.T&0x200)===0x200)){if(((X.T&0x400)===0x400)&&!(X===this.JD)){var Aa=(C.RU.isPrototypeOf(
X)?X:null);if(!!Aa){this.AnimalTableFields.J(Aa.GN);if(Aa.AQ2())this.AnimalTableFields.
AST(Aa.GN);}else A.ab5("%s",Axr);}X=X.Ag;}this.AnimalTableFields.Cp();},A1m:function(
G){var B;var Aa=(C.RU.isPrototypeOf(B=this.AR)?B:null);if(!!Aa){var Azj=(C.RU.isPrototypeOf(
B=Aa.Ag)?B:null);if(!!Azj){this.Ag5(Azj,Aa);A.pe([this,this.MG],this);}}},A1O:function(
G){var B;var Aa=(C.RU.isPrototypeOf(B=this.AR)?B:null);if(!!Aa){var AzQ=(C.RU.isPrototypeOf(
B=Aa.AH)?B:null);if(!!AzQ){this.Ag5(Aa,AzQ);A.pe([this,this.MG],this);}}},Ajd:function(
G){var B;A._GetAutoObject(A.Device.Device).ArF(this);A.pe([this,this.Ah_],this);
},G4:function(G){A.pe([this,this.E9],this);},_Init:function(aArg){C.Fg._Init.call(
this,aArg);C.Av._Init.call(this.Av={I:this},0);A.Core.Z._Init.call(this.Z={I:this
},0);C.Aup._Init.call(this.JD={I:this},0);this.__proto__=C.AP_;this.H(Q5);this.Text.
R(A.aaR(A.acf.AE8));this.Av.H(II);this.Z.H(A_A);this.Z.Kb(1);this.JD.H(AGS);this.
JD.Aj(true);this.JD.U(A.aaR(A.acf.Ajd));this.J(this.Av,0);this.J(this.Z,0);this.
J(this.JD,0);this.Z.Ei=[this,this.G4];this.JD.AQ=[this,this.Ajd];this.AnimalTableFields=
A._GetAutoObject(C.AlV);this.Init(aArg);},_Done:function(){this.__proto__=C.Fg;this.
Av._Done();this.Z._Done();this.JD._Done();C.Fg._Done.call(this);},_ReInit:function(
){C.Fg._ReInit.call(this);this.Av._ReInit();this.Z._ReInit();this.JD._ReInit();this.
Text.R(A.aaR(A.acf.AE8));this.JD.U(A.aaR(A.acf.Ajd));this.CT();},_Mark:function(
D){var B;C.Fg._Mark.call(this,D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.JD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingFieldSettingsMenu"};C.AP9={Z:null,B4:null,C6:null,CB:
null,GD:null,Av:null,AnimalType:null,Gender:null,Breed:null,Ur:null,Init:function(
aArg){A.zX([this,this.At3],this.B4.Q,0);A.zX([this,this.ALB],this.CB.Q,0);A.zX([
this,this.AT9],this.GD.Q,0);A.zX([this,this.AuJ],this.C6.Q,0);this.A8(this.B4);}
,Du:function(G){C.Fg.Du.call(this,G);this.MG(this);},KG:function(){if(!this.Bw){
this.Bw=A._NewObject(C.N,0);this.Bw.Cw=[this,this.Xa];this.Bw.Cg=null;this.Bw.Cb=
null;this.Bw.BU(A.jV);this.Bw.Cm(null);this.Bw.CS(A.aaL(A.ach.Vz));}return this.
Bw;},E9:function(G){var B;this.Av.Mm((B=this.Z.Da(0x1))[3]-B[1]);this.Av.Mo((B=this.
Z.M)[3]-B[1]);this.Av.Mn(-this.Z.Bp[1]);},MG:function(G){var B;this.Z.U6(null,null
);if(!!this.AR&&((this.AR.T&0x400)===0x400))this.Z.Hx(this.AR,true,null,null);},
G4:function(G){A.pe([this,this.E9],this);},At3:function(G){var F;A._GetAutoObject(
A.Device.Device).DT((F=this.B4.Q,F[1].call(F[0])));},AT9:function(G){var F;A._GetAutoObject(
A.Device.Device).M_((F=this.GD.Q,F[1].call(F[0])));},AuJ:function(G){var F;A._GetAutoObject(
A.Device.Device).JG((F=this.C6.Q,F[1].call(F[0])));},ALB:function(G){var F;A._GetAutoObject(
A.Device.Device).NM((F=this.CB.Q,F[1].call(F[0])));},_Init:function(aArg){C.Fg._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Xl._Init.call(this.B4={
I:this},0);C.Xl._Init.call(this.C6={I:this},0);C.Xl._Init.call(this.CB={I:this},
0);C.Xl._Init.call(this.GD={I:this},0);C.Av._Init.call(this.Av={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.Us._Init.call(this.Ur={I:this},0);
this.__proto__=C.AP9;var B;this.H(Q5);this.Text.R(A.aaR(A.acf.Ai$));this.Z.H(A_A
);this.Z.Kb(1);this.B4.H(Aho);this.B4.Ar(true);this.B4.Aj(true);this.B4.U(A.aaR(
A.acf.AeU));this.C6.H(Axk);this.C6.Ar(true);this.C6.Aj(true);this.C6.U(A.aaR(A.acf.
AeL));this.CB.H(AnP);this.CB.Ar(true);this.CB.Aj(true);this.CB.U(A.aaR(A.acf.Breed
));this.GD.H(Aso);this.GD.Ar(true);this.GD.Aj(true);this.GD.U(A.aaR(A.acf.I6));this.
Av.H(II);this.AnimalType.Au(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.
Au(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Au(A._GetAutoObject(A.Device.
Device).Breed);this.Ur.Au(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(
this.Z,0);this.J(this.B4,0);this.J(this.C6,0);this.J(this.CB,0);this.J(this.GD,0
);this.J(this.Av,0);this.Z.Ei=[this,this.G4];this.B4.V9(A.aaL(A.fl.Hi));this.B4.
V_(A.aaL(A.fl.Hi));this.B4.Au([B=this.AnimalType,B.B_,B.Ca]);this.B4.CK(this.AnimalType
);this.C6.V9(A.aaL(A.fl.Hi));this.C6.V_(A.aaL(A.fl.Hi));this.C6.Au([B=this.Gender
,B.B_,B.Ca]);this.C6.CK(this.Gender);this.CB.V9(A.aaL(A.fl.Hi));this.CB.V_(A.aaL(
A.fl.Hi));this.CB.Au([B=this.Breed,B.B_,B.Ca]);this.CB.CK(this.Breed);this.GD.V9(
A.aaL(A.fl.Hi));this.GD.V_(A.aaL(A.fl.Hi));this.GD.Au([B=this.Ur,B.B_,B.Ca]);this.
GD.CK(this.Ur);this.Init(aArg);},_Done:function(){this.__proto__=C.Fg;this.Z._Done(
);this.B4._Done();this.C6._Done();this.CB._Done();this.GD._Done();this.Av._Done(
);this.AnimalType._Done();this.Gender._Done();this.Breed._Done();this.Ur._Done();
C.Fg._Done.call(this);},_ReInit:function(){C.Fg._ReInit.call(this);this.Z._ReInit(
);this.B4._ReInit();this.C6._ReInit();this.CB._ReInit();this.GD._ReInit();this.Av.
_ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.Breed._ReInit();this.
Ur._ReInit();this.Text.R(A.aaR(A.acf.Ai$));this.B4.U(A.aaR(A.acf.AeU));this.C6.U(
A.aaR(A.acf.AeL));this.CB.U(A.aaR(A.acf.Breed));this.GD.U(A.aaR(A.acf.I6));},_Mark:
function(D){var B;C.Fg._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ur)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.AlZ={CM:0,AkX:A.abi(17,0,null),Vt:function(IJ){return this.AkX.Get(IJ);},X0:
function(){return this.CM;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.AkX.Set(
P,0);this.CM=0;},J:function(ZJ){if(this.CM>=17)A.ab5("%s",Brs);else{this.AkX.Set(
this.CM,ZJ);this.CM=this.CM+1;}},Cp:function(){},EK:function(Ahs){var AIG=Ahs.indexOf(
String.fromCharCode(0x2C),0);var AZU=A.jV;var P=0;this.CM=0;while(P<17)if(Ahs===
A.jV)P++;else{if(AIG===-1){AZU=Ahs;Ahs=A.jV;}else{AZU=A.abV(Ahs,AIG);Ahs=A.ab1(Ahs
,0,AIG+1);}var ZP=A.abZ(AZU,0,10)|0;if(this.Bg2(ZP)){this.AkX.Set(this.CM,ZP);this.
CM=this.CM+1;P++;}AIG=Ahs.indexOf(String.fromCharCode(0x2C),0);}if(Ahs!==A.jV)A.
ab5("%s",Brt);},toString:function(){var B;var Azh=A.jV;var P;for(P=0;P<this.CM;P=
P+1){if(P>0)Azh=Azh+AGT;Azh=Azh+(((B=this.AkX.Get(P))<0)?B+0x100000000:B).toFixed(
);}return Azh;},Contains:function(ZJ){var P;for(P=0;P<this.CM;P=P+1)if(this.AkX.
Get(P)===ZJ)return true;return false;},Bg2:function(ZJ){return true;},_Init:function(
aArg){(this.AkX=[]).__proto__=C.AlZ.AkX;this.__proto__=C.AlZ;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AKJ={Afh:null,Init:function(aArg){var B;A.
zX([this,this.Bch],[B=A._GetAutoObject(A.Device.Device),B.A6A,B.A_Q],0);A.zX([this
,this.Bci],[B=A._GetAutoObject(A.Device.Device),B.A6B,B.A_R],0);A.pe([this,this.
Bch],this);A.pe([this,this.Bci],this);},Clear:function(){C.AlZ.Clear.call(this);
this.Afh.Clear();},Cp:function(){A._GetAutoObject(A.Device.Device).AqV(this.Afh.
toString());A._GetAutoObject(A.Device.Device).AqW(this.toString());},Bch:function(
G){this.Afh.EK(A._GetAutoObject(A.Device.Device).AAy);A.we(this,0);},Bci:function(
G){this.EK(A._GetAutoObject(A.Device.Device).AAz);A.we(this,0);},LN:function(ZJ){
return this.Afh.Contains(ZJ);},AST:function(ZJ){if(!this.LN(ZJ))this.Afh.J(ZJ);}
,ANg:function(){return this.Afh.X0();},_Init:function(aArg){C.AlZ._Init.call(this
,aArg);this.__proto__=C.AKJ;this.Afh=A._NewObject(C.AlZ,0);this.Init(aArg);},_Mark:
function(D){var B;C.AlZ._Mark.call(this,D);if((B=this.Afh)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.AlV={_Init:
function(){C.AKJ._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.AQd={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.
V.Text.A2(0x11);this.V.Text.HG(10);},Bg:function(aSize){C.TR.Bg.call(this,aSize);
this.V.H(A.abN(this.V.M,this.Md.M[0]));},Ai:function(Ae){var B;C.TR.Ai.call(this
,Ae);var G2=((Ae&0x10)===0x10);var Fi=((Ae&0x20)===0x20);var Gq=this.Bk.Bv;var FE=
A.jb.AdA;var GG=A.jb.Bh;if(this.G_){FE=A.jb.Bh;GG=A.jb.Text;}if(!G2){this.Background.
L(FE);this.V.L(A.jb.CE);}else if(Gq){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh
);}else if(Fi){this.Background.L(A.jb.AR);this.V.L(A.jb.Bh);}else{this.Background.
L(FE);this.V.L(GG);}this.Ly=G2;this.Kv=Fi;this.Qb=Gq;},_Init:function(aArg){C.TR.
_Init.call(this,aArg);this.__proto__=C.AQd;this.Init(aArg);},_className:"Application::MenuItemCheckBoxOverlay"
};C.ASr={Ye:null,Ajg:null,KG:function(){if(!this.Bw){this.Bw=A._NewObject(C.N,0);
this.Bw.Cw=[this,this.Xa];this.Bw.Cg=null;this.Bw.Cb=null;this.Bw.BU(A.jV);this.
Bw.Cm(null);this.Bw.CS(A.aaL(A.ach.Vz));}return this.Bw;},_Init:function(aArg){C.
OverlayMenu._Init.call(this,aArg);C.Xl._Init.call(this.Ye={I:this},0);C.Vl._Init.
call(this.Ajg={I:this},0);this.__proto__=C.ASr;var B;this.H(JN);this.Ye.H(JN);this.
Ye.U(A.aaR(A.acf.A38));this.Ajg.Au(A._GetAutoObject(A.Device.Device).Vl);this.J(
this.Ye,0);this.Ye.V9(A.aaL(A.fl.Hi));this.Ye.V_(A.aaL(A.fl.Hi));this.Ye.Au([B=this.
Ajg,B.B_,B.Ca]);this.Ye.CK(this.Ajg);this.Ajg.BjA([B=A._GetAutoObject(A.Device.Device
),B.AQW,B.AYp]);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ye._Done();
this.Ajg._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Ye._ReInit();this.Ajg._ReInit();this.Ye.U(A.aaR(A.acf.A38
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ye)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajg)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PurchasedAnimalsListOverlayMenu"};C.Vl={AaB:null,DataExportDestinationToString:
null,Do:function(){return 2;},C9:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.BX(aIndex);},DP:function(A1){return A1;},Hj:function(
){return 1;},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.AaB)(F=this.AaB
,F[2].call(F[0],E));},BjA:function(E){if(A.aaZ(this.AaB,E))return;if(!!this.AaB)
A.z$([this,this.Apb],this.AaB,0);this.AaB=E;if(!!this.AaB)A.zX([this,this.Apb],this.
AaB,0);A.pe([this,this.Apb],this);},Apb:function(G){var F;if(!!this.AaB)this.Q=(
F=this.AaB,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_,this.Ca],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.Vl;},
_Done:function(){this.__proto__=C.AC;this.DataExportDestinationToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AaB)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.ALv={
Yl:null,AkC:null,KG:function(){if(!this.Bw){this.Bw=A._NewObject(C.N,0);this.Bw.
Cw=[this,this.Xa];this.Bw.Cg=null;this.Bw.Cb=null;this.Bw.BU(A.jV);this.Bw.Cm(null
);this.Bw.CS(A.aaL(A.ach.Vz));}return this.Bw;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Xl._Init.call(this.Yl={I:this},0);C.ACW._Init.call(this.
AkC={I:this},0);this.__proto__=C.ALv;var B;this.H(JN);this.Yl.H(JN);this.Yl.U(A.
aaR(A.acf.Display));this.AkC.Au(A._GetAutoObject(A.Device.Device).ApM);this.J(this.
Yl,0);this.Yl.V9(A.aaL(A.fl.Hi));this.Yl.V_(A.aaL(A.fl.Hi));this.Yl.Au([B=this.AkC
,B.B_,B.Ca]);this.Yl.CK(this.AkC);this.AkC.BkD([B=A._GetAutoObject(A.Device.Device
),B.ADl,B.AHu]);},_Done:function(){this.__proto__=C.OverlayMenu;this.Yl._Done();
this.AkC._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Yl._ReInit();this.AkC._ReInit();this.Yl.U(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Yl)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AkC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.ACW={Abd:null,ListViewScopeToString:
null,Do:function(){return 2;},C9:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gg:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.BX(aIndex);},DP:function(A1){return A1;},Hj:function(){return 1;
},Au:function(E){var F;C.AC.Au.call(this,E);if(!!this.Abd)(F=this.Abd,F[2].call(
F[0],E));},BkD:function(E){if(A.aaZ(this.Abd,E))return;if(!!this.Abd)A.z$([this,
this.Apb],this.Abd,0);this.Abd=E;if(!!this.Abd)A.zX([this,this.Apb],this.Abd,0);
A.pe([this,this.Apb],this);},Apb:function(G){var F;if(!!this.Abd)this.Q=(F=this.
Abd,F[1].call(F[0]));else this.Q=0;A.abo([this,this.B_,this.Ca],0);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.ACW;},_Done:function(){this.__proto__=
C.AC;this.ListViewScopeToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Abd)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};C.ATu={AA8:0,AA7:0,Ai:function(Ae){C.OG.Ai.call(this
,Ae);this.Background.L(this.AA7);this.V.L(this.AA8);},Bjp:function(E){if(this.AA8===
E)return;this.AA8=E;this.An();},Bjo:function(E){if(this.AA7===E)return;this.AA7=
E;this.An();},_Init:function(aArg){C.OG._Init.call(this,aArg);this.__proto__=C.ATu;
this.Ar(false);this.AA8=A.jb.Text;this.AA7=A.jb.CE;},_className:"Application::TextCaptionItem"
};C.AF4={WeightValuePrecisionToString:null,Init:function(aArg){var B;A.zX([this,
this.BbP],[B=A._GetAutoObject(A.Device.Device),B.A65,B.A_8],0);A.pe([this,this.BbP
],this);},Do:function(){return 3;},Gg:function(aIndex){return this.WeightValuePrecisionToString.
BX(this.C9(aIndex));},Au:function(E){C.C3.Au.call(this,E);A._GetAutoObject(A.Device.
Device).Av2(E);},BbP:function(G){this.Q=A._GetAutoObject(A.Device.Device).Ow;A.abo([
this,this.B_,this.Ca],0);},_Init:function(aArg){C.C3._Init.call(this,aArg);A.Device.
WeightValuePrecisionToString._Init.call(this.WeightValuePrecisionToString={I:this
},0);this.__proto__=C.AF4;this.Cv.Set(0,0);this.Cv.Set(1,1);this.Cv.Set(2,2);this.
Init(aArg);},_Done:function(){this.__proto__=C.C3;this.WeightValuePrecisionToString.
_Done();C.C3._Done.call(this);},_ReInit:function(){C.C3._ReInit.call(this);this.
WeightValuePrecisionToString._ReInit();},_Mark:function(D){var B;C.C3._Mark.call(
this,D);if((B=this.WeightValuePrecisionToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightValuePrecision"};
C._Init=function(){C.ALi.__proto__=A.Core.Root;C.AB.__proto__=C.AaH;C.Wf.__proto__=
A.Core.O;C.Oj.__proto__=A.Core.O;C.Y1.__proto__=A.acl.FZ;C.D$.__proto__=A.Core.O;
C.Xy.__proto__=C.AB;C.AS$.__proto__=C.AB;C.AuS.__proto__=C.AB;C.QT.__proto__=C.AB;
C.Fc.__proto__=C.G7;C.Av.__proto__=A.Core.O;C.Cu.__proto__=C.AB;C.Aqf.__proto__=
C.BO;C.BO.__proto__=A.Core.O;C.N.__proto__=A.Core.O;C.AB$.__proto__=C.Amt;C.AFD.
__proto__=C.DJ;C.Ci.__proto__=C.OG;C.Dk.__proto__=C.D8;C.I1.__proto__=C.Dk;C.B$.
__proto__=C.Dk;C.Sr.__proto__=C.Dk;C.Ou.__proto__=C.C3;C.QY.__proto__=C.AC;C.ATo.
__proto__=C.Ba;C.FQ.__proto__=A.Core.O;C.Ba.__proto__=C.Ci;C.EP.__proto__=C.AB;C.
AA1.__proto__=C.Ba;C.Ady.__proto__=C.AB;C.Mc.__proto__=C.Oj;C.ATj.__proto__=C.AB;
C.Aqe.__proto__=C.AB$;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.AS1.__proto__=C.AbU;C.Es.__proto__=A.Core.O;C.Rating.__proto__=
A.Core.O;C.ArK.__proto__=A.Core.O;C.AFp.__proto__=C.Dk;C.CP.__proto__=A.Core.O;C.
Ajo.__proto__=C.Vw;C.AlY.__proto__=C.QX;C.Ag2.__proto__=A.Core.O;C.Hh.__proto__=
C.AB;C.ASh.__proto__=C.AB;C.Mf.__proto__=C.Ci;C.AmO.__proto__=C.Ci;C.OverlayMenu.
__proto__=C.AaH;C.AOj.__proto__=C.OverlayMenu;C.Gx.__proto__=A.Core.O;C.AaH.__proto__=
A.Core.O;C.AS6.__proto__=A.acl.AdM;C.Amt.__proto__=C.BO;C.ACa.__proto__=C.Amt;C.
J5.__proto__=C.AC;C.AS3.__proto__=C.Dk;C.AE3.__proto__=C.AB;C.HR.__proto__=C.AB;
C.V3.__proto__=C.AqH;C.Iy.__proto__=C.ACa;C.IS.__proto__=C.AB;C.AKS.__proto__=C.
AE3;C.AKO.__proto__=C.EP;C.AL8.__proto__=C.EP;C.AdQ.__proto__=C.Ci;C.Qm.__proto__=
C.AdQ;C.AN7.__proto__=C.BO;C.AuQ.__proto__=C.BO;C.DF.__proto__=C.E$;C.A0.__proto__=
A.Core.O;C.FS.__proto__=C.AC;C.AeK.__proto__=C.B$;C.ASu.__proto__=C.AB;C.Abj.__proto__=
C.Ci;C.TR.__proto__=C.Ci;C.AMg.__proto__=C.Cu;C.ATq.__proto__=C.Cu;C.AMr.__proto__=
C.Cu;C.ASG.__proto__=C.Cu;C.Ws.__proto__=A.Core.O;C.QD.__proto__=C.Fc;C.DZ.__proto__=
A.Core.O;C.TN.__proto__=C.AB;C.ATY.__proto__=C.EP;C.AKT.__proto__=C.Aw1;C.ATJ.__proto__=
C.Cu;C.Aeb.__proto__=C.AC;C.Aw1.__proto__=C.AB;C.AT7.__proto__=C.Cu;C.AS2.__proto__=
C.AbU;C.AAw.__proto__=A.Graphics.Hn;C.AiM.__proto__=C.AB;C.AP6.__proto__=A.Core.
O;C.Fg.__proto__=C.OverlayMenu;C.Xl.__proto__=C.B$;C.AiN.__proto__=C.Ci;C.AKB.__proto__=
C.Fg;C.C3.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AKH.__proto__=C.Adh;C.AKI.
__proto__=C.Fg;C.RU.__proto__=C.TR;C.ALn.__proto__=C.Adh;C.VV.__proto__=C.Fc;C.U4.
__proto__=A.Core.O;C.Kh.__proto__=A.Core.O;C.AQs.__proto__=C.HR;C.ASx.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.C3;C.AL9.__proto__=C.AlY;C.G7.__proto__=A.
Core.O;C.AT0.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.C3;C.Aap.
__proto__=C.FS;C.AwT.__proto__=C.AAw;C.ASc.__proto__=C.OverlayMenu;C.AM$.__proto__=
A.Core.O;C.NP.__proto__=A.Core.O;C.ASd.__proto__=A.Core.O;C.AS5.__proto__=A.acl.
AdM;C.Akn.__proto__=C.I1;C.Al1.__proto__=C.OverlayMenu;C.AA2.__proto__=C.Ba;C.X3.
__proto__=C.AuQ;C.Ap2.__proto__=C.HR;C.AbT.__proto__=C.Dk;C.WeightRecordingScope.
__proto__=C.AC;C.At0.__proto__=C.AB;C.AS4.__proto__=C.I1;C.AKQ.__proto__=C.AB;C.
AqH.__proto__=C.HR;C.AFZ.__proto__=A.Core.O;C.AT3.__proto__=A.Core.O;C.D8.__proto__=
C.Ci;C.Aed.__proto__=C.D8;C.Avf.__proto__=C.Aed;C.SetTransponderScreen.__proto__=
C.QT;C.ACg.__proto__=C.Es;C.AF3.__proto__=C.Ba;C.WeightListScreen.__proto__=C.AB;
C.L9.__proto__=C.QT;C.AKz.__proto__=C.L9;C.ManualActionScanScreen.__proto__=C.L9;
C.AKA.__proto__=A.Core.O;C.AOa.__proto__=C.Dv;C.ACf.__proto__=C.Dv;C.TB.__proto__=
C.Dv;C.AOc.__proto__=C.Dv;C.ALO.__proto__=C.Ba;C.MT.__proto__=C.Ba;C.ALM.__proto__=
C.Ba;C.Jf.__proto__=A.Core.O;C.ALL.__proto__=C.Ba;C.Ams.__proto__=C.Tm;C.AEU.__proto__=
C.Awp;C.Akb.__proto__=C.Awp;C.Aew.__proto__=C.Akb;C.AMd.__proto__=C.OG;C.OG.__proto__=
C.G7;C.AOf.__proto__=C.Es;C.CX.__proto__=A.Core.O;C.ALH.__proto__=C.Ai6;C.ACc.__proto__=
C.TC;C.J4.__proto__=A.Core.O;C.ApW.__proto__=C.Mf;C.ANz.__proto__=C.J9;C.AutoRegistrationMode.
__proto__=C.AC;C.AOg.__proto__=C.Es;C.Tg.__proto__=C.AB;C.D2.__proto__=A.Core.O;
C.AK4.__proto__=C.RC;C.ALg.__proto__=C.Aal;C.ALb.__proto__=C.Aal;C.ASw.__proto__=
C.Ba;C.AOe.__proto__=C.Es;C.AK7.__proto__=C.Aal;C.It.__proto__=C.IR;C.Rw.__proto__=
C.Fl;C.RA.__proto__=C.Fl;C.Tf.__proto__=C.Jx;C.Ql.__proto__=C.Fl;C.Te.__proto__=
C.Jx;C.AKP.__proto__=C.AiM;C.Gw.__proto__=C.AiM;C.APw.__proto__=C.Cu;C.Aal.__proto__=
C.D2;C.Jy.__proto__=C.C3;C.AP2.__proto__=C.Cu;C.AK2.__proto__=C.K2;C.AK3.__proto__=
C.D2;C.AK0.__proto__=C.K2;C.AK1.__proto__=C.K2;C.Wh.__proto__=C.D8;C.ASZ.__proto__=
C.Wh;C.RB.__proto__=C.Fl;C.AN6.__proto__=C.Iy;C.AL_.__proto__=C.AB;C.ALS.__proto__=
C.Ady;C.AKN.__proto__=C.IS;C.ATX.__proto__=C.IS;C.AL7.__proto__=C.Gw;C.ATW.__proto__=
C.Gw;C.AKM.__proto__=C.Gw;C.ANB.__proto__=C.J9;C.AN8.__proto__=C.J9;C.AOb.__proto__=
C.TC;C.ALN.__proto__=C.Ai6;C.TC.__proto__=C.Dv;C.ApP.__proto__=A.acu.ABa;C.Ai6.__proto__=
C.Ba;C.DJ.__proto__=A.Core.O;C.ALy.__proto__=C.DJ;C.OK.__proto__=C.DJ;C.Aqc.__proto__=
A.Core.O;C.AK9.__proto__=C.FQ;C.ASA.__proto__=A.Core.O;C.K2.__proto__=C.D2;C.AMe.
__proto__=C.Cu;C.Aup.__proto__=C.Ci;C.AB8.__proto__=C.BO;C.AB9.__proto__=C.BO;C.
Fl.__proto__=C.Jx;C.ANd.__proto__=C.EP;C.ANc.__proto__=C.IS;C.ANb.__proto__=C.Gw;
C.ANN.__proto__=C.J9;C.ACe.__proto__=C.Dv;C.AA0.__proto__=C.Ba;C.ASv.__proto__=C.
Ag2;C.FactoryResetScope.__proto__=C.C3;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;
C.AQF.__proto__=C.EP;C.AQE.__proto__=C.IS;C.AQD.__proto__=C.Gw;C.AB_.__proto__=C.
J9;C.AAH.__proto__=C.FS;C.AKF.__proto__=C.Fg;C.AKR.__proto__=C.At0;C.NewAnimalSetTransponderScreen.
__proto__=C.ArP;C.C4.__proto__=C.AC;C.OJ.__proto__=A.Core.O;C.Rx.__proto__=C.Fl;
C.Ry.__proto__=C.Fl;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AQb.
__proto__=C.OverlayMenu;C.Vk.__proto__=C.TR;C.AC3.__proto__=C.Ci;C.AnimalSingleInfoScreen.
__proto__=C.Tg;C.AnimalMultiInfoScreen.__proto__=C.Tg;C.AK6.__proto__=C.OverlayMenu;
C.MultiInfoActionsScreen.__proto__=C.Gw;C.IX.__proto__=A.Core.O;C.AKE.__proto__=
C.EP;C.AKD.__proto__=C.IS;C.AKC.__proto__=C.Gw;C.AN5.__proto__=C.Iy;C.Ar0.__proto__=
C.OJ;C.Aqq.__proto__=C.OJ;C.Aul.__proto__=C.AC;C.AKY.__proto__=C.AC;C.AFo.__proto__=
C.D8;C.GM.__proto__=A.Core.O;C.APz.__proto__=C.HA;C.ATO.__proto__=C.Xy;C.AQo.__proto__=
C.V3;C.ACF.__proto__=C.K$;C.HA.__proto__=C.GM;C.K$.__proto__=C.GM;C.EartagNrAssignmentMode.
__proto__=C.AC;C.Au_.__proto__=C.HA;C.ASY.__proto__=C.B$;C.NewAnimalsSetTransponderScreen.
__proto__=C.ArP;C.ReasonOfLeaving.__proto__=C.AC;C.OD.__proto__=C.B$;C.Aeg.__proto__=
C.Eb;C.AQh.__proto__=C.Eb;C.AQg.__proto__=C.Eb;C.Eb.__proto__=A.Core.O;C.QU.__proto__=
C.D8;C.APA.__proto__=C.K$;C.Au9.__proto__=A.Core.O;C.E$.__proto__=A.Core.O;C.Fn.
__proto__=C.AB;C.AMM.__proto__=C.AB;C.AMP.__proto__=C.Fn;C.AMQ.__proto__=C.Fn;C.
Ap4.__proto__=C.Fn;C.AaS.__proto__=C.Ajo;C.J9.__proto__=C.Ajo;C.AuP.__proto__=C.
AaS;C.ANL.__proto__=C.AaS;C.ANK.__proto__=C.AaS;C.ANJ.__proto__=C.BO;C.AdW.__proto__=
C.Es;C.Amh.__proto__=C.Ba;C.AiV.__proto__=C.It;C.ABB.__proto__=A.Core.O;C.Akk.__proto__=
A.Core.O;C.QX.__proto__=C.AB;C.ATp.__proto__=C.QX;C.ANM.__proto__=C.BO;C.Dv.__proto__=
C.Es;C.Oq.__proto__=C.BO;C.ANF.__proto__=C.Oq;C.ANH.__proto__=C.Oq;C.XX.__proto__=
C.Amh;C.AfX.__proto__=C.G7;C.AMz.__proto__=C.EP;C.AMy.__proto__=C.IS;C.AMx.__proto__=
C.Gw;C.ANI.__proto__=C.J9;C.AaN.__proto__=C.AbT;C.Aje.__proto__=C.Qm;C.AAU.__proto__=
C.Qm;C.AN_.__proto__=C.Dv;C.ALJ.__proto__=C.Ba;C.Rz.__proto__=C.Fl;C.AKZ.__proto__=
C.Fl;C.AMp.__proto__=C.Hh;C.AMq.__proto__=C.Hh;C.ANG.__proto__=C.Oq;C.Py.__proto__=
C.Abj;C.AMm.__proto__=C.Hh;C.ANC.__proto__=C.Oq;C.Px.__proto__=C.Ci;C.RW.__proto__=
C.AB;C.AMN.__proto__=C.RW;C.AMO.__proto__=C.RW;C.AMR.__proto__=C.Ap4;C.AMK.__proto__=
C.Fn;C.Aak.__proto__=C.It;C.O8.__proto__=C.It;C.AK$.__proto__=C.Al1;C.AP0.__proto__=
C.TN;C.APZ.__proto__=C.TN;C.AQA.__proto__=C.EP;C.AQz.__proto__=C.IS;C.AQy.__proto__=
C.Gw;C.AN0.__proto__=C.J9;C.QP.__proto__=C.EP;C.ASI.__proto__=C.IS;C.ASH.__proto__=
C.Gw;C.Ajp.__proto__=C.Vw;C.AAZ.__proto__=C.Ba;C.ACd.__proto__=C.Dv;C.AN2.__proto__=
C.BO;C.Aan.__proto__=C.Nv;C.Xr.__proto__=C.Nv;C.RC.__proto__=C.D2;C.Xs.__proto__=
C.RC;C.Xp.__proto__=C.Is;C.Aai.__proto__=C.Is;C.Xo.__proto__=C.Is;C.Aah.__proto__=
C.Is;C.AK8.__proto__=C.AB;C.Is.__proto__=C.IR;C.IR.__proto__=C.G7;C.Nv.__proto__=
C.Fl;C.Awo.__proto__=C.Aew;C.AMc.__proto__=C.ApW;C.Awq.__proto__=C.Aew;C.ASp.__proto__=
C.Cu;C.ASn.__proto__=C.Eb;C.APx.__proto__=C.K$;C.ASo.__proto__=C.Eb;C.NewMenu.__proto__=
C.AB;C.AQp.__proto__=C.HR;C.AK_.__proto__=C.Al1;C.ALo.__proto__=C.Adh;C.Jx.__proto__=
C.IR;C.AN4.__proto__=C.X3;C.AaM.__proto__=C.C3;C.AOd.__proto__=C.Es;C.MotherScanScreen.
__proto__=C.L9;C.AN3.__proto__=C.Aqe;C.I5.__proto__=A.Core.O;C.ANZ.__proto__=C.BO;
C.SetSaveNaisIdScreen.__proto__=C.QT;C.AMA.__proto__=C.Ap2;C.Ur.__proto__=C.C3;C.
Us.__proto__=C.Ur;C.Acd.__proto__=C.Ur;C.Adk.__proto__=C.AC;C.AFn.__proto__=C.D8;
C.AMo.__proto__=C.Hh;C.ANE.__proto__=C.Oq;C.AMn.__proto__=C.Hh;C.AND.__proto__=C.
Oq;C.Ajq.__proto__=C.TB;C.AN9.__proto__=C.TB;C.Ai5.__proto__=C.MT;C.ALI.__proto__=
C.MT;C.AQi.__proto__=C.Aeg;C.Vw.__proto__=C.BO;C.AbU.__proto__=C.B$;C.G6.__proto__=
C.AC;C.ALc.__proto__=C.G6;C.ALd.__proto__=C.G6;C.AKV.__proto__=C.IS;C.Tm.__proto__=
C.B$;C.AQr.__proto__=C.AB;C.ArP.__proto__=C.SetTransponderScreen;C.ACG.__proto__=
C.HA;C.ArQ.__proto__=C.OD;C.AwA.__proto__=C.OD;C.AbX.__proto__=C.C3;C.AUb.__proto__=
C.EP;C.AUa.__proto__=C.IS;C.AT$.__proto__=C.Gw;C.APB.__proto__=A.Core.O;C.APy.__proto__=
C.HA;C.ABG.__proto__=C.AaN;C.LQ.__proto__=A.Core.O;C.ASF.__proto__=C.Cu;C.ASE.__proto__=
C.Cu;C.ATH.__proto__=C.Cu;C.AeS.__proto__=C.AC;C.I2.__proto__=A.acn.I2;C.ATv.__proto__=
C.AB;C.ASs.__proto__=C.QP;C.AN$.__proto__=C.Dv;C.ALw.__proto__=C.QP;C.ANA.__proto__=
C.Ajp;C.AN1.__proto__=C.Ajp;C.ALK.__proto__=C.Ba;C.ASX.__proto__=C.Sr;C.AS0.__proto__=
C.QU;C.ANY.__proto__=C.BO;C.AP$.__proto__=C.Fg;C.AP_.__proto__=C.Fg;C.AP9.__proto__=
C.Fg;C.AKJ.__proto__=C.AlZ;C.AQd.__proto__=C.TR;C.ASr.__proto__=C.OverlayMenu;C.
Vl.__proto__=C.AC;C.ALv.__proto__=C.OverlayMenu;C.ACW.__proto__=C.AC;C.ATu.__proto__=
C.OG;C.AF4.__proto__=C.C3;};C._ReInit=function(){var B;if((B=C.AwE._this))B._ReInit(
),C.AwE._ReInit.call(B);if((B=C.AwF._this))B._ReInit(),C.AwF._ReInit.call(B);if((
B=C.AY._this))B._ReInit(),C.AY._ReInit.call(B);if((B=C.O6._this))B._ReInit(),C.O6.
_ReInit.call(B);if((B=C.AutoActions._this))B._ReInit(),C.AutoActions._ReInit.call(
B);if((B=C.AeF._this))B._ReInit(),C.AeF._ReInit.call(B);if((B=C.BW._this))B._ReInit(
),C.BW._ReInit.call(B);if((B=C.Wb._this))B._ReInit(),C.Wb._ReInit.call(B);if((B=
C.ArR._this))B._ReInit(),C.ArR._ReInit.call(B);if((B=C.Anp._this))B._ReInit(),C.
Anp._ReInit.call(B);if((B=C.DL._this))B._ReInit(),C.DL._ReInit.call(B);if((B=C.At8.
_this))B._ReInit(),C.At8._ReInit.call(B);if((B=C.AlV._this))B._ReInit(),C.AlV._ReInit.
call(B);};C.DB=function(D){var B;if((B=C.AwE._this)&&(B._cycle!=D))B._Done(C.AwE.
_this=null);if((B=C.AwF._this)&&(B._cycle!=D))B._Done(C.AwF._this=null);if((B=C.
AY._this)&&(B._cycle!=D))B._Done(C.AY._this=null);if((B=C.O6._this)&&(B._cycle!=
D))B._Done(C.O6._this=null);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.
AutoActions._this=null);if((B=C.AeF._this)&&(B._cycle!=D))B._Done(C.AeF._this=null
);if((B=C.BW._this)&&(B._cycle!=D))B._Done(C.BW._this=null);if((B=C.Wb._this)&&(
B._cycle!=D))B._Done(C.Wb._this=null);if((B=C.ArR._this)&&(B._cycle!=D))B._Done(
C.ArR._this=null);if((B=C.Anp._this)&&(B._cycle!=D))B._Done(C.Anp._this=null);if((
B=C.DL._this)&&(B._cycle!=D))B._Done(C.DL._this=null);if((B=C.At8._this)&&(B._cycle
!=D))B._Done(C.At8._this=null);if((B=C.AlV._this)&&(B._cycle!=D))B._Done(C.AlV._this=
null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */