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
var B9=[0,0,240,320];var BC=[0,0,240,40];var EU=[0,0,20,30];var Hd=[6,21,14,25];var
I7=[6,15,14,19];var II=[6,9,14,13];var OI=[209,7,229,37];var PM=[0,40,240,320];var
PN=[0,228,240,298];var CJ=" ";var E2=[0,40,240,280];var Li=[0,40,232,280];var PO=[
0,40,116,160];var Km=[114,40,230,160];var NV=[0,160,116,280];var PP=[116,160,232
,280];var Mt=[0,280,116,400];var SF=[116,280,232,400];var Uk=[0,400,116,520];var
Zn=[116,400,232,520];var Wr=[-1,520,115,640];var IJ=[232,40,240,280];var Ul=[5,40
,235,120];var Zo=[120,140,210,230];var Ws=[20,140,110,230];var Zp=[0,0,116,120];
var Um=[0,0,120,120];var Zq=[0,0,116,45];var Zr=[0,0,8,200];var Un=[0,0,8,20];var
Wt=[30,0,210,40];var QZ=[0,0,40,40];var Zs=[7,8,200,40];var OJ=[0,0,200,40];var PQ=[
6,1];var Wu="ERROR: Invalid value for ItemHighlighting";var Wv=[10,10,40,30];var
Ww=[0,0,120,40];var Zt=[60,0,180,40];var Zu=[120,0,240,40];var Wx=[0,0,100,40];var
Wy=[83,0,157,40];var SG=[140,0,240,40];var Zv=[0,0,20,40];var Zw=[220,0,240,40];
var Ab7=[0,0,300,30];var Uo=[0,30,300,60];var Zx=[0,60,300,90];var AeS=[0,90,300
,120];var Zy=[0,100,300,110];var Wz=[0,50,300,60];var WA=[0,30,300,40];var Zz="*";
var AeT=[40,40];var JN=[0,0,240,80];var AeU=[0,0,240,50];var Lj="Cap";var Aha=[0
,40,40,80];var Anw=[200,40,240,80];var NW=[30,40,210,80];var WC="--";var Anx="%d";
var Ahb="%m";var Ahc="%Y";var Ab8=" (";var Uq=[0,0,232,80];var Any="Date";var Anz=[
48,40,88,78];var AwF=[39,40,79,80];var AwG=[80,44,87,77];var Akv=".";var AwH=[88
,44,120,77];var AeV=[120,44,127,77];var ArW=[127,44,191,77];var OK=[0,0,80,40];var
SI="Text";var AwI=[430,102,430,102];var SJ=[0,0,240,240];var ArX=[232,0,240,240];
var AwJ=[0,10,240,240];var AwK="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var AwL="Unhandled option";
var AnA=[0,80,240,280];var AwM="Unhandled animal list action";var ArY="Animal list content not handled.";
var KL=[0,40,240,80];var AwN="Set Selected";var Ab9="Unhandled AnimalListInfoItemMode ";
var AwO=" %%";var AFF=[0,180,240,220];var AFG=[82,127,167,150];var AFH="Group";var
AFI=[77,91,167,124];var AwP=[0,0,90,33];var ATA=[4,4,18,29];var ATB=[20,4,34,29];
var ATC=[36,4,50,29];var ATD=[52,4,66,29];var ATE=[68,4,82,29];var ArZ="ERROR: Unhandled Device::SyncState";
var AwQ=":\n";var Q0="{1}";var AwR="{2}";var ATF=[0,49,240,109];var ATG=[0,170,240
,243];var ATH=[0,110,240,170];var ATI=[20,243,220,268];var AFJ=[30,8];var AFK="\u2265 ";
var AeW=[0,0,240,160];var AnB=[0,0,0,0];var ATJ=[0,0,240,66];var AFL=[10,0,76,66
];var Akw=[33,33];var AFM=[87,0,153,66];var AwS=[164,0,230,66];var ATK="No statistics available";
var ATL="in this environment.";var ATM=" fps";var ATN="CPU: - %%";var Ab_=[0,0,240
,120];var Ar0=[130,0,237,20];var AFN=[20,0,120,20];var AFO=[0,20,240,40];var AwT=[
40,20,100,40];var AFP=[100,20,240,40];var AwU=[0,40,240,60];var ATO=[40,40,100,60
];var ATP=[100,40,240,60];var ATQ=[0,60,50,80];var ATR=[100,60,240,80];var AFQ=[
0,80,50,100];var ATS=[100,80,240,100];var OL=[0,100,50,120];var AwV=[100,100,240
,120];var ATT=[5,5,15,15];var ATU="%H";var ATV="%M";var ATW="Time";var ATX=[79,40
,119,78];var ATY=[125,40,164,80];var ATZ=[86,40,126,80];var Ar1=":";var AwW=[75,
40,115,80];var AFR=[0,0,240,150];var AT0=[60,0,155,40];var AFS=[30,0,65,40];var AT1=[
60,0,100,40];var AT2=[88,0,128,40];var AT3=[60,0,71,40];var AT4=[60,0,74,40];var
AFT=[90,0,123,40];var AT5=[120,0,161,40];var AwX=[120,0,165,40];var AFU=[60,0,88
,40];var AFV=[60,0,95,40];var AT6="Did not expect iterator bigger than number of records";
var AFW=[20,0,240,20];var AT7=[0,38,240,40];var AT8=[0,0,8,4];var Q1=[0,0,240,280
];var WD=[0,280,240,320];var AT9="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var AT_="]";var AT$="ERROR: Cannot find closing bracket \'}\' in text [";var AUa=
"] opened at index ";var AUb="#";var AUc="ERROR: Invalid parameter: {";var AUd="}";
var Ahd=[20,20];var AFX=[0,12];var AUe="ERROR: Not expected Application::FooterFocus, ";
var AUf="%M:%S";var AFY=[30,150,207,170];var AFZ=[20,70,217,194];var AwY="Unhandled item.";
var Q2=[0,80,240,120];var AUg="Unhandled Overlay Menu ";var AUh="Invalid bootloader message: ";
var AUi="Unknown USBState: ";var Ar2="Invalid fader";var AUj=[2,4,32,40];var AUk=[
29,4,80,40];var AUl=[120,4,200,40];var AUm=[80,0,114,40];var AUn="-1";var AUo="< ";
var Ar3=[0,0,232,40];var AUp=[22,40,180,80];var AUq=[2,40,22,80];var AUr=[23,40,
163,80];var AUs=[210,40,230,80];var AUt=[164,40,210,80];var AUu=[169,43,205,77];
var AUv="ERROR: No outlet assigned";var AUw="Unhandled screen";var AUx="ERROR: Cannot cache null screen.";
var AUy="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var AF0="Untreated Rating Method type!";var Ar4="Unhandled animal type";var AUz=[
5,60,235,140];var AUA=[0,130,240,196];var AUB=[49,240,229,280];var AwZ="Implement in derived classes!";
var Akx="Implement in derived class";var Ahe=[0,40,230,120];var Aw0=[0,120,230,200
];var AnC=[0,200,230,280];var Ahf=[0,280,230,360];var AUC=[0,360,230,440];var Aw1=[
230,40,238,280];var AF1="WARNING: Unhandled filter field: ";var AeX="Should not happen.";
var AF2="Invalid Boolean item";var WE=[0,120,240,160];var Aky=[0,160,240,200];var
AnD=[0,200,240,240];var AUD=[1152,11,1392,51];var AUE=[1152,51,1392,91];var AUF=[
1152,91,1392,131];var AUG=[1152,131,1392,171];var AUH=[1152,171,1392,211];var Ar5=[
0,240,240,280];var AF3=[10,0,240,40];var AF4=[190,0,230,40];var AUI=[60,3,95,39];
var AUJ=[95,4,200,40];var AUK=[3,3];var AUL=[6,6];var AUM=[0,4,40,40];var AUN=[39
,5,197,35];var AF5=[40,0,200,40];var AUO="Illegal shifting direction";var Aw2=[0
,0,160,30];var AF6=[0,0,25,30];var AF7=[27,0,52,30];var AF8=[54,0,79,30];var AF9=[
81,0,106,30];var AF_=[108,0,133,30];var AF$=[135,0,160,30];var AUP="Internal queue error";
var AUQ="ERROR: No corresponding Id ";var AUR=" found.";var AUS="ERROR: Error in range test";
var AUT=[120,67,210,157];var AUU=[0,40,240,70];var AUV=[20,67,110,157];var Aw3=[
0,160,240,280];var AGa=[20,77,90,147];var AUW=[0,0,210,40];var AGb=[195,0,235,40
];var Ahg=[0,40,232,120];var WF=[0,120,232,200];var AUX=[0,40,232,200];var Ab$=[
0,200,232,280];var AUY=[0,320,240,400];var AUZ=[0,120,53,200];var AnE=[0,280,232
,360];var AeY="%%";var AnF=[0,360,232,440];var AGc=[0,440,232,520];var AU0=[0,80
,207,120];var OM=")";var AU1="/";var AU2=[5,0,88,30];var AU3=[88,0,240,30];var Aw4=
"276000312345678";var Ar6=[5,30,100,60];var AGd=[100,30,240,60];var AU4="Manufacturer";
var AGe="Country";var AGf=[5,60,240,90];var AU5="Niedersachsen";var AGg=[5,90,145
,120];var AU6=[140,90,240,120];var AU7="Protocol";var AU8=[0,0,120,100];var AGh=[
0,40,116,120];var AU9=[40,80,92,107];var AGi=[0,0,50,23];var AGj="ERROR: Unhandled Device::MeasureState";
var Aw5=[0,120,240,280];var AU_=[178,159,248,203];var AU$=[10,145,170,225];var AVa=[
0,61,240,101];var AVb=[0,0,40,23];var AVc=[101,113,141,136];var AVd=[101,235,141
,258];var AVe=[69,288,101,313];var AVf=[0,40,240,200];var Ar7=[0,200,240,280];var
Ar8=[0,280,240,360];var AGk="\u2264 ";var AVg=[0,80,94,160];var AGl=[94,80,184,160
];var AVh=[184,80,240,160];var AVi=[197,105,231,139];var AVj=[105,101,173,127];var
AVk=[7,101,75,127];var AVl=[94,125,184,151];var AVm=[2,125,92,151];var AVn=[0,70
,240,101];var AVo=[0,106,240,280];var AVp=[30,40,240,70];var AVq=[0,40,30,70];var
AVr="\u278B";var AVs=[0,0,240,175];var AVt=[0,0,232,175];var AVu=[232,0,240,175];
var AGm="Text Here !";var AVv=[200,0,240,40];var Ar9="1";var Aw6="2";var AGn="3";
var AGo="4";var Aw7=[0,360,232,400];var Aw8="ERROR: invalid item class.";var AGp=[
10,220,250,260];var AVw=[185,0,225,40];var AVx="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var AVy="ERROR: Received more actions than expected!";var AGq=", ";var AVz=[
0,0,58,58];var AVA=[0,0,60,60];var AVB=[30,0,58,20];var AVC=[7,6,25,24];var AVD=[
30,60,130,160];var AVE=[0,0,28,20];var AVF=[4,3,40,24];var AVG=[0,0,42,27];var Aw9=[
0,0,17,17];var AVH="Unknown direction of counting enum value: ";var AVI="Unknown id generation method enum value: ";
var Aw_="Invalid animal id generation method: ";var Ar_="Unhandled popup id";var
ZA="0";var Ar$=";";var AVJ=[0,400,230,480];var AVK=[5,120,235,200];var AVL=[0,640
,230,760];var AGr=[0,0,300,200];var AVM=[20,40,220,80];var AGs=[20,80,220,280];var
AVN=[140,0,188,40];var AVO="ERROR: Row containing birth weight could not be loaded";
var AVP=[0,440,230,520];var Asa="ID";var AVQ=[40,40,198,70];var AVR="Extra info: ";
var AGt=" -";var AVS=[0,0,230,120];var AVT=[0,0,230,40];var AVU=[0,80,230,120];var
AVV="\xB0Brix";var Aca=[0,320,230,400];var AVW=[0,410,230,490];var AVX="ERROR: aNumberOfDays can not be < 0 ";
var AVY="{WEIGHTGAIN} ";var AVZ="\xB1";var AGu="+";var AV0="{WEIGHTGAIN}";var AV1=
"{DAYS}";var AV2="ERROR: aString can not be null";var AV3=[166,70,240,114];var AV4=[
0,60,160,120];var AV5=[30,0,240,60];var AGv=[1,6,29,54];var AV6=[30,60,240,120];
var AV7="Con";var AV8=[70,50,170,70];var AGw="Unhandled Device::NaisIdValidationResult: ";
var AGx="Unhandled PopupId";var AV9=[110,123,230,248];var AV_=[5,0,250,40];var AV$=[
102,0,186,40];var AWa=[153,0,240,40];var Q3="-";var Asb=[170,0,240,40];var AGy=[
220,0,320,30];var AGz=[200,20,300,50];var AnG=[180,0,180,40];var AnH=[170,0,170,
40];var Aw$="Untreated state";var AWb="ERROR: Animal id scanned in an unexpected state : ";
var AGA="ERROR: Null animal id scanned.";var AWc=[40,40,235,100];var AWd=[120,100
,210,190];var AWe=[20,100,110,190];var AWf=[0,40,40,100];var AWg="\u278A";var AWh=
"Action untreated";var AWi="ERROR: No corresponding ";var AWj=" action found!";var
AWk="Unhandled action: ";var AWl=[0,190,240,220];var AWm=[0,220,232,280];var AWn=[
5,190,235,270];var AWo=[232,60];var AWp=[0,2];var AWq=[58,58];var AWr="A";var AWs=[
56,0,156,40];var AnI=[156,0,240,40];var AGB=" 7 ";var AWt=[40,0,156,40];var AGC=
"/-1/-2";var AGD=[72,0,144,40];var ZB="\n";var AGE="(";var AWu=[72,0,156,40];var
AGF="%y/%m";var AWv=[70,0,240,40];var Axa=[70,0,120,40];var AWw=[160,0,245,40];var
AWx="- ";var Axb=" - ";var AWy="{parc}{clr3}";var AWz="{clr0}/^{clr2}";var AWA="{clr0}/^{clr1}";
var AGG=[0,0,85,40];var AnJ="?";var AGH=[0,0,120,140];var AWB=[0,0,116,40];var AGI=[
15,0,100,40];var AGJ=[110,0,200,40];var Akz=[0,0,34,34];var AWC=[129,0,157,40];var
AnK=[0,0,25,25];var AWD="\u2611";var AGK="\u2610";var AGL=[5,0,72,40];var AGM=[150
,0,240,40];var AWE=[72,0,139,40];var Axc="Unvalid content class: ";var AWF=[0,320
,240,360];var AWG=[0,360,240,400];var AWH=[144,0,170,40];var AWI=[187,0,213,40];
var AWJ=[207,10,233,50];var AWK=[247,20,273,60];var AWL=[140,0,150,100];var AWM=[
165,0,175,100];var AWN=[185,0,195,100];var AWO=[205,0,215,100];var AWP=[211,0,233
,40];var AWQ=[189,0,211,40];var AWR=[167,0,189,40];var AWS=[145,0,167,40];var AGN=[
5,0,240,40];var ZC=[10,0,10,40];var AWT="= \u2211 ";var Ahh=[125,0,240,40];var AWU=[
130,0,170,40];var AWV="\xD8 ";var AWW=[100,10,116,36];var AWX=[117,10,133,36];var
AWY=[135,10,151,36];var AWZ="Implement in derieved class";var Asc=[0,80,240,240];
var Asd=[0,120,232,160];var AnL=[0,160,232,200];var Ahi=[0,200,232,240];var Axd=[
0,240,232,280];var AnM=[0,320,232,360];var AW0=[-61,360,232,400];var AW1=[0,100];
var AW2=[0,40,240,240];var AW3=[0,50000];var AW4=[0,500];var AW5=[0,0,240,105];var
AW6=[0,105,240,210];var AW7=[0,40,240,81];var AW8=[0,81,240,122];var AW9=[0,122,
240,163];var AW_=[0,163,240,205];var AW$=[0,205,240,240];var AXa=[0,200];var AXb=[
0,40,240,73];var Axe=[0,0,30,40];var AGO=[0,40,30,80];var Axf=[60,40];var Ase=[60
,0];var AXc=[10,0,40,40];var AXd=[0,190,240,260];var AGP=[0,130,240,190];var AGQ=[
40,40,200,130];var AXe=[90,230,170,253];var AXf=[80,190,170,223];var AXg=[0,130,
240,180];var AXh=[0,250,240,280];var AXi=[129,0,156,40];var AXj=[72,0,100,40];var
AXk=[100,0,129,40];var AXl=[78,8,103,33];var AGR=[0,0,300,120];var AXm=[1,-1];var
AXn=[20,40,240,120];var AXo=[20,0,240,40];var AXp=[0,118,240,120];var AXq=[0,20,
130,40];var AXr=[130,20,240,40];var AXs=[0,0,10,20];var A9m="\u2191";var Bni=[230
,0,240,20];var AGS=[0,40,232,80];var Bnj=[0,80,232,160];var Bnk=[0,160,230,240];
var AGT=" p. p.";var AXt="Unknown animal type";var AGU=[80,0,140,40];var Bnl=[50
,0,172,40];var Bnm=[172,0,240,40];var Bnn=[0,90,240,92];var A9n="Unhandled menu item";
var A9o=[0,0,50,30];var Asf=[0,0,30,30];var Bno="No AnimalActionTemperatureScreen found!";
var Bnp="840003123456789";var Bnq=[40,0,230,40];var Bnr=[50,10,230,30];var AXu="No AnimalMultiInfoScreen found!";
var AGV=[0,0,25,40];var A9p="/^";var A9q="?/?";var Bns=[100,4,180,40];var Bnt=[65
,0,99,40];var Bnu=[165,0,200,40];var A9r=[0,0,60,40];var A9s="9999/^9999";var Bnv=
"Invalid index: ";var Bnw="Unknown AnimalIdGenerationMethod: ";var Bnx="Invalid gender: ";
var Asg="Invalid input state: ";var Bny="Unhandled AnimalIdGenerationMethod";var
Bnz=[42,35,67,75];var BnA=[5,35,39,75];var BnB=[70,40,228,70];var BnC="Invalid direction for setting focus";
var Ahj="Invalid index";var BnD="Unvalid direction";var BnE=[0,0,42,30];var A9t=[
22,0,42,30];var BnF=[20,0,40,30];var BnG=[0,0,158,30];var A9u=[32,0,62,30];var A9v=[
64,0,94,30];var A9w=[96,0,126,30];var BnH=[128,0,158,30];var BnI=" %% ";var BnJ=[
0,70,240,220];var BnK=[0,237,240,307];var A9x="\n44 %% done";var BnL=[0,0,166,30
];var AGW=[0,0,12,30];var Axg=[14,0,26,30];var AXv=[28,0,40,30];var AXw=[42,0,54
,30];var AXx=[56,0,68,30];var AXy=[70,0,82,30];var AXz=[84,0,96,30];var AXA=[98,
0,110,30];var A9y=[112,0,124,30];var AXB=[126,0,138,30];var BnM=[140,0,152,30];var
BnN=[154,0,166,30];var A9z=[20,0,46,30];var BnO="\u2642";var BnP="{fnt3}\u2642{fnt1}";
var BnQ="\u2640";var BnR="{fnt3}\u2640{fnt1}";var BnS="{parc}";var BnT=[30,30,210
,80];var BnU="Implement in derieved class!";var BnV=[60,4,226,34];var A9A=[30,4,
58,34];var A9B=[4,0,27,40];var BnW=[116,4,228,34];var BnX=[60,4,86,34];var BnY=[
88,4,114,34];var AnN="Implement in derived class!";var A9C="Implement in derived class.";
var BnZ="Invalid nais id view: ";var Bn0=[0,35,240,75];var Bn1=[0,0,110,30];var Bn2=[
0,0,26,30];var Bn3="100";var AXC="\n\n";var Bn4=[240,240];var Bn5=[0,240];var Bn6=
"Unknown rated attribute: ";var Bn7=[120,80,240,280];var Bn8=[0,80,120,280];var AGX=
" %% (";var Axh=" \xB1 ";var Axi=" (n = ";var AXD=[0,80,232,120];var Bn9=[0,242,
232,282];var AXE=[0,280,232,320];var Bn_=[35,0,200,40];var Bn$=[1,0,31,40];var Boa=[
32,40];var Bob=[32,0];var Boc=[3,0,83,40];var A9D=[180,0,240,40];var Bod=[120,0,
180,40];var Boe=[65,0,125,40];var Bof=[0,0,120,200];var Bog=[0,40,120,150];var A9E=[
15,160,60,190];var A9F=[60,160,105,190];var Boh=[0,65,240,135];var Boi=[10,112,170
,192];var Boj=[178,129,248,173];var Bok=[0,40,240,110];var Bol=[10,98,170,178];var
Bom=[178,112,248,156];var Bon=[85,190,160,265];var Boo=[89,194,155,260];var Bop=[
26,190,111,250];var Boq=[125,181,225,211];var Bor=[100,220,183,250];var Bos="38.7";
var Bot=[180,220,225,250];var Bou="\xB0C";var Bov=[0,99,240,178];var Bow=[100,280
,140,320];var Box=[0,26,240,105];var A9G=[30,40];var A9H=[30,0];var Boy=[149,0,200
,40];var Boz=[145,40];var BoA=[145,0];var BoB=[38,0,88,40];var A9I=[0,0,35,40];var
BoC=[0,0,50,40];var BoD=[95,0,145,40];var BoE=[65,5,223,35];var AXF=[0,0,15,40];
var BoF=[72,0,140,40];var A9J="\n(";var BoG="%y/%m/%d";var BoH="%y ";var BoI=" %m ";
var BoJ=" %d ";var BoK="20";var BoL=[225,0,240,40];var BoM=[0,400,232,440];var BoN=[
0,440,232,480];var BoO=[0,480,232,520];var BoP=[0,520,232,560];var BoQ=[0,560,232
,600];var BoR=[0,598,232,638];var BoS=[5,0,215,40];var BoT=[215,8,240,33];var BoU=
"Implement in dervied class.";var BoV="ERROR: Unhandled temperature unit: ";var AGY=
"ERROR: Unhandled mass unit: ";var BoW=[-1,160,115,280];var BoX=[114,160,230,280
];var AXG=[116,40,232,160];var Axj="Unknown weight class index: ";var BoY="< 35";
var BoZ="35 - 40";var Bo0="40 - 45";var Bo1="45 - 50";var Bo2="\u2265 50";var Bo3=
"< 80";var Bo4="80 - 90";var Bo5="90 - 100";var Bo6="100 - 110";var Bo7="\u2265 110";
var A9K="Unknown mass unit";var Bo8=[143,0,193,40];var A9L=[192,0,240,40];var Bo9=[
44,28,44,28];var Bo_="0 %%";var Bo$=[-1,40,115,160];var Bpa=[117,40,233,160];var
Bpb=[1,160,117,280];var Bpc=[114,158,230,278];var Bpd=[1,280,117,400];var Bpe=[30
,0,155,40];var A9M="\u2620";var A9N=[380,150,380,190];var A9O=[105,0,155,50];var
A9P=[190,1,240,41];var Bpf=[72,0,108,40];var Bpg=[108,0,180,40];var Bph=[60,0,94
,40];var Bpi=[94,0,200,40];var Bpj="Scroll direction not supported.";var Bpk=[44
,0,207,40];var Bpl=[207,0,240,40];var Bpm="99";var Bpn="Unknown birth type";var Bpo=[
44,0,189,40];var Bpp=[5,0,44,40];var Bpq=[44,0,240,40];var Bpr=[240,0,240,40];var
Bps="\u25C9";var A9Q="\u25CB";var Bpt=[75,4,215,34];var Bpu=[47,4,73,34];var A9R=[
17,4,45,34];var Bpv=[0,0,138,30];var Bpw=[47,4,215,34];var AXH="Unhandled MotherSelectionFilterMode: ";
var Bpx="Read only!";var Bpy="actions array too small to hold all actions";var Bpz=[
120,40];var BpA=[120,0];var BpB=[5,0,115,40];var BpC=[0,0,205,40];var BpD=[0,1,37
,37];var BpE=[40,4,170,34];var BpF=[175,1,205,37];var BpG=[0,0,37,40];var BpH=[115
,98,205,188];var BpI=[0,40,235,100];var BpJ=[2,200,240,280];var BpK=" 01234";var
BpL=[0,0];var BpM=[33,63];var BpN=[25,56];var BpO="Unknown transponder image type: ";
var AGZ=[0,0,82,82];var BpP=[0,0,81,26];var BpQ=[105,120,195,210];var BpR=[10,140
,100,230];var A9S="Unhandled EartagNrAssignmentMode: ";var BpS="Unhandled Gender";
var BpT=[10,35,35,75];var BpU=[44,40,202,70];var BpV=[204,35,232,75];var A9T="Unhandled BackupError: ";
var BpW="Unvalid FatoryResetScope";var BpX="Unhandled PopupId: ";var BpY=[-4,160
,236,240];var BpZ=[144,0,192,40];var Bp0=[144,0,240,40];var Bp1=[195,0,245,50];var
Bp2=[120,0,120,40];var Bp3=[140,0,240,30];var Bp4=[30,0,232,40];var Bp5=[60,0,160
,40];var Bp6=[160,0,200,40];var Bp7=[150,17,200,40];var Bp8=[155,40];var Bp9=[155
,0];var Bp_=[146,80,240,160];var Bp$=[56,80,146,160];var Bqa=[0,80,56,160];var Bqb=[
13,107,47,141];var Bqc=[74,109,104,139];var Bqd=[50,100,130,150];var Bqe=[55,112
,145,140];var Bqf=[146,112,236,140];var Bqg=[150,86,223,110];var AG0=[0,40,240,120
];var Bqh="Menu item for animal table field not found";var Bqi=[0,120,240,200];var
A9U=[0,360,240,440];var Bqj=[0,440,240,520];var Bqk=[5,40,235,104];var Bql=[120,
108,226,218];var Bqm=[20,120,110,210];var Bqn=[5,223,235,280];var Bqo=[0,0,64,30
];var Bqp=[44,0,64,30];var Bqq=[185,5,225,35];var Bqr=[170,5,234,35];var Bqs="Unhandled number of digits";
var Bqt=[0,0,126,30];var Bqu=[22,5,149,35];var Bqv=[149,0,232,40];var A9V=[5,20];
var Bqw=[5,0];var Bqx="Unhandled AnimalIdAutoGenerationMethod: ";var Bqy=[4,440,
236,520];var Bqz="Unhandled TransponderAssignmentIdChangeMethod: ";var BqA="\n";
var BqB="%";var BqC=[0,0,160,120];var BqD=[2,2,157,117];var BqE=[50,70];var BqF=[
50,50];var BqG="Unhandled data export destination ";var BqH=[0,0,168,40];var BqI=[
168,0,240,40];var BqJ=[0,47,232,77];var BqK=[121,17,171,40];var A9W=[0,40,230,280
];var BqL="ERROR: Exceeded limit of maximum animal table fields; No more animal "+
"table fields will be added!";var BqM="ERROR: Received more animal table fields than expected!";
C.AKO={Device:null,A3F:null,Gt:null,Init:function(aArg){},DriveCursorHitting:function(
SL,BD,E4){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.Gt._Init.call(this.
Gt={I:this},0);this.__proto__=C.AKO;this.G(B9);this.J(this.Gt,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A3F=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var Lk=
this._variants();if(Lk){this.K={};Lk._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.Gt._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.Gt.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A3F)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acp.A2B._variants();
},K:null,_className:"Application::Application"};C.Arx=[240,320];C.AC={Background:
null,D_:null,ABB:null,Anm:0,Init:function(aArg){A.pe([this,this.AYf],this);A.pe([
this,this.BbS],this);},Lz:function(H){},AYf:function(s){this.Lz(s);},CI:function(
H){},AG2:function(s){this.CI(s);},Fb:function(H){},Axk:function(s){this.Fb(s);},
Dp:function(E){if(this.ABB===E)return;this.ABB=E;A.pe([this,this.BbS],this);},BbS:
function(H){var B;if(!!this.ABB)this.D_.Abq((C.BN.isPrototypeOf(B=A._NewObject(this.
ABB,0))?B:null));else this.D_.Abq(null);},_Init:function(aArg){C.AaA._Init.call(
this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);C.D_._Init.call(this.
D_={I:this},0);this.__proto__=C.AC;this.Background.AV(0x3F);this.Background.G(B9
);this.Background.L(A.jb.C0);this.D_.G(BC);this.D_.Ar(false);this.J(this.Background
,-1);this.J(this.D_,0);this.Init(aArg);},_Done:function(){this.__proto__=C.AaA;this.
Background._Done();this.D_._Done();C.AaA._Done.call(this);},_ReInit:function(){C.
AaA._ReInit.call(this);this.Background._ReInit();this.D_._ReInit();},_Mark:function(
D){var B;C.AaA._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"
};C.Wa={Kv:null,YN:function(E){var B;if(this.Kv===E)return;if(!!this.Kv)this.ApK(
this.Kv,null,null,null,[B=this.Kv,B.Axk],null,false);this.Kv=E;if(!!this.Kv)this.
Aj7(this.Kv,null,null,null,null,null,null,[B=this.Kv,B.AG2],null,false);},ACT:function(
){return this.Kv;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.Wa;this.G([0,0,C.Arx[0],C.Arx[1]]);},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.Kv)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.Oh={Uy:null,R:null,Am5:null,YW:null,NA:null,Og:null,Te:null,Tf:null,AEy:255,
OT:function(H){var F;if(!!this.R){this.AZL();var Acu=(F=this.R,F[1].call(F[0]));
if(Acu>20)this.Og.L(A.jb.EX);else this.Og.L(A.jb.FU);this.Og.L((this.Og.AP&0x00FFFFFF
)|(this.Ak1(Acu,0,30)<<24));this.Te.L((this.Te.AP&0x00FFFFFF)|(this.Ak1(Acu,31,60
)<<24));this.Tf.L((this.Tf.AP&0x00FFFFFF)|(this.Ak1(Acu,61,100)<<24));}},AYd:function(
s){this.OT(s);},Av:function(E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,
this.AYd],this.R,0);this.R=E;if(!!E)A.zX([this,this.AYd],E,0);if(!!E)A.pe([this,
this.AYd],this);},A0X:function(H){var F;if(!!this.Am5)this.YW.Ar((F=this.Am5,F[1
].call(F[0])));else this.YW.Ar(false);this.A7J(255);},A7C:function(E){if(A.aaZ(this.
Am5,E))return;if(!!this.Am5)A.z$([this,this.A0X],this.Am5,0);this.Am5=E;if(!!E)A.
zX([this,this.A0X],E,0);if(!!E)A.pe([this,this.A0X],this);},A7J:function(E){if(this.
AEy===E)return;this.AEy=E;if(!!this.Uy)this.Uy.L((this.Uy.AP&0x00FFFFFF)|((E&0xFF
)<<24));},Ak1:function(AYj,A$a,BtJ){if(AYj<A$a)return 0;else if((AYj>=A$a)&&(AYj<
BtJ))return this.AEy&0xFF;else return 255;},AZL:function(){var F;if(!!this.R){if((
F=this.R,F[1].call(F[0]))>60)this.Uy=this.Tf;else if((F=this.R,F[1].call(F[0]))>
30)this.Uy=this.Te;else this.Uy=this.Og;}else this.Uy=null;},Bh2:function(){return this.
AEy;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.YW._Init.call(this.YW={
I:this},0);A.acg.Am._Init.call(this.NA={I:this},0);A.acg.AI._Init.call(this.Og={
I:this},0);A.acg.AI._Init.call(this.Te={I:this},0);A.acg.AI._Init.call(this.Tf={
I:this},0);this.__proto__=C.Oh;this.G(EU);this.YW.Fy(2000);this.NA.G(EU);this.NA.
L(A.jb.Text);this.Og.G(Hd);this.Og.L(A.jb.EX);this.Te.G(I7);this.Te.L(A.jb.EX);this.
Tf.G(II);this.Tf.L(A.jb.EX);this.J(this.NA,0);this.J(this.Og,0);this.J(this.Te,0
);this.J(this.Tf,0);this.YW.R=[this,this.Bh2,this.A7J];this.NA.Ax(A.aaL(A.ach.AKX
));},_Done:function(){this.__proto__=A.Core.O;this.YW._Done();this.NA._Done();this.
Og._Done();this.Te._Done();this.Tf._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.YW._ReInit();this.NA._ReInit();this.Og._ReInit(
);this.Te._ReInit();this.Tf._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.Uy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Am5)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.YW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Og)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Te
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tf)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.YW={_Init:function(aArg){A.acl.FX._Init.call(
this,aArg);this.__proto__=C.YW;this.Akg=true;this.B1=0;this.Ct=255;},_className:
"Application::PulseAnimation"};C.D_={Gt:null,AQ:null,Background:null,Oh:null,Bk:
null,De:null,KV:0,Auh:0,Aui:0,Aoc:0,Lt:false,Ks:false,P8:false,Ai:function(Ae){var
B;A.Core.O.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);var Fg=((Ae&0x20)===0x20);
var Gm=this.Bk.Bw;if(!G1){this.Aoc=A.jb.C0;this.KV=A.jb.Text;}else if(Gm){this.Aoc=
this.Auh;this.KV=this.Aui;}else if(Fg){this.Aoc=this.Auh;this.KV=this.Aui;}else{
this.Aoc=A.jb.C0;this.KV=A.jb.Text;}this.Background.L(this.Aoc);if(!!this.Gt){this.
Gt.Abo(this.Aoc);this.Gt.C5(this.KV);}this.Lt=G1;this.Ks=Fg;this.P8=Gm;},P7:function(
H){this.An();A.pe(this.AQ,this);},Ah9:function(H){if(this.De.AbG)return;this.An(
);if(this.Bk.Bw){A.pe(this.AQ,this);this.Bk.Ar(false);}this.Bk.Ar(true);},Abq:function(
E){if(this.Gt===E)return;if(!!this.Gt)this.HG(this.Gt);this.Gt=E;if(!!this.Gt)this.
J(this.Gt,0);this.Ba(E);this.An();},A7l:function(E){if(this.Auh===E)return;this.
Auh=E;this.An();},A7m:function(E){if(this.Aui===E)return;this.Aui=E;this.An();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={
I:this},0);C.Oh._Init.call(this.Oh={I:this},0);A.Core.Timer._Init.call(this.Bk={
I:this},0);A.Core.BO._Init.call(this.De={I:this},0);this.__proto__=C.D_;var B;this.
G(BC);this.Background.AV(0x3F);this.Background.G(BC);this.Background.L(A.jb.C0);
this.Oh.G(OI);this.KV=A.jb.Text;this.Bk.QJ(0);this.Bk.V2(50);this.De.Filter=1;this.
Auh=A.jb.AY;this.Aui=A.jb.Bh;this.Aoc=A.jb.Text;this.J(this.Background,0);this.J(
this.Oh,0);this.Oh.Av([B=A._GetAutoObject(A.Device.Device),B.AuZ,B.Axl]);this.Oh.
A7C([B=A._GetAutoObject(A.Device.Device),B.Au2,B.Axm]);this.Bk.M6=[this,this.P7];
this.De.BP=[this,this.Ah9];},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Oh._Done();this.Bk._Done();this.De._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.
Oh._ReInit();this.Bk._ReInit();this.De._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Gt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Oh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bk)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.De)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.Xt={Ad2:null,T5:null,CI:function(H){if(this.K&&this.K.CI
)return this.K.CI.apply(this,arguments);else return C.AC.CI.apply(this,arguments
);},Fb:function(H){if(this.K&&this.K.Fb)return this.K.Fb.apply(this,arguments);else
return C.AC.Fb.apply(this,arguments);},_Init:function(aArg){C.AC._Init.call(this
,aArg);A.acg.Am._Init.call(this.Ad2={I:this},0);A.acg.Text._Init.call(this.T5={I:
this},0);this.__proto__=C.Xt;this.Ad2.G(PM);this.T5.G(PN);this.T5.Q(A.jV);this.T5.
L(A.jb.Text);this.T5.Y(false);this.J(this.Ad2,0);this.J(this.T5,0);this.Ad2.Ax(null
);this.T5.S(A.aaL(A.fl.Ey));var Lk=this._variants();if(Lk){this.K={};Lk._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.AC;this.Ad2._Done();this.T5._Done();C.AC._Done.call(this);},_ReInit:function(){
C.AC._ReInit.call(this);this.Ad2._ReInit();this.T5._ReInit();this.T5.S(A.aaL(A.fl.
Ey));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.AC._Mark.call(
this,D);if((B=this.Ad2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T5)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.acr.
Xt._variants();},K:null,_className:"Application::BootScreen"};C.ASy={Aza:function(
H){A._GetAutoObject(C.AZ).AgO(2);},_Init:function(aArg){C.AC._Init.call(this,aArg
);this.__proto__=C.ASy;this.Background.L(0xFF000000);this.D_.Y(false);},_className:
"Application::SleepScreen"};C.Auu={DN:null,Z:null,XF:null,XG:null,U8:null,Xw:null
,U9:null,Xu:null,Xz:null,Ti:null,Xy:null,XH:null,Au:null,CT:function(){this.DM(this
);},Init:function(aArg){var B;A.zX([this,this.DM],[B=A._GetAutoObject(A.Device.Device
),B.Aqx,B.Ash],0);A._GetAutoObject(A.Device.Helper).Aj_();this.Ba(this.U8);this.
N.Cm(A.aaL(A.ach.AB6));A.pe([this,this.DM],this);},Ba:function(E){var B;var A0y=
this.AY;C.AC.Ba.call(this,E);if((this.AY!==A0y)&&(!!this.AY&&((this.AY.T&0x400)===
0x400))){var AIe=A._NewObject(A.acl.AEv,0);AIe.Fy(250);AIe.ID(1);AIe.V7(6);this.
Z.Hx(this.AY,true,AIe,null);}},CI:function(H){this.A1U(this);A._GetAutoObject(A.
Device.Device).Aq.Bm(null);A._GetAutoObject(A.Device.Device).Bq.Bm(null);A._GetAutoObject(
A.Device.Helper).Aj_();A._GetAutoObject(A.Device.Helper).Arr();},E7:function(H){
var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.
Au.Ml(-this.Z.Bp[1]);},H8:function(H){var Cp=(C.Fa.isPrototypeOf(H)?H:null);if(!
Cp)return;if(Cp===this.U8)A._GetAutoObject(C.AZ).BZ(35);else if(Cp===this.Xw)A._GetAutoObject(
C.AZ).BZ(34);else if(Cp===this.Xz)A._GetAutoObject(C.AZ).BZ(78);else if(Cp===this.
U9)A._GetAutoObject(C.AZ).BZ(8);else if(Cp===this.Xu)A._GetAutoObject(C.AZ).BZ(56
);else if(Cp===this.Ti)A._GetAutoObject(C.AZ).BZ(25);else if(Cp===this.XF)A._GetAutoObject(
C.AZ).BZ(88);else if(Cp===this.XG)A._GetAutoObject(C.AZ).BZ(79);else if(Cp===this.
XH)A._GetAutoObject(C.AZ).BZ(6);else if(Cp===this.Xy)A._GetAutoObject(C.AZ).BZ(72
);},BwL:function(H){A._GetAutoObject(A.Device.Device).Aeb(!A._GetAutoObject(A.Device.
Device).Al9);},DM:function(H){if(A._GetAutoObject(A.Device.Device).Al9)this.N.Hm((
A.aaR(A.acf.A48)+CJ)+A.aaR(A.acf.Off).toLowerCase());else this.N.Hm((A.aaR(A.acf.
A48)+CJ)+A.aaR(A.acf.A5O).toLowerCase());},W8:function(H){A._GetAutoObject(A.Device.
Device).Cj(1);},A1U:function(H){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(
A.Device.Helper).MT());this.U9.YS(A._GetAutoObject(A.Device.Device).Aq.Ch().toFixed(
));},G3:function(H){A.pe([this,this.E7],this);},_Init:function(aArg){C.AC._Init.
call(this,aArg);A.acg.AI._Init.call(this.DN={I:this},0);A.Core.Z._Init.call(this.
Z={I:this},0);C.Fa._Init.call(this.XF={I:this},0);C.Fa._Init.call(this.XG={I:this
},0);C.Fa._Init.call(this.U8={I:this},0);C.Fa._Init.call(this.Xw={I:this},0);C.Qy.
_Init.call(this.U9={I:this},0);C.Fa._Init.call(this.Xu={I:this},0);C.Fa._Init.call(
this.Xz={I:this},0);C.Fa._Init.call(this.Ti={I:this},0);C.Fa._Init.call(this.Xy={
I:this},0);C.Fa._Init.call(this.XH={I:this},0);C.Au._Init.call(this.Au={I:this},
0);this.__proto__=C.Auu;this.Background.L(A.jb.C0);this.N.Ar(false);this.N.Y(true
);this.Dp(C.Ap2);this.DN.AV(0x3F);this.DN.G(E2);this.DN.L(A.jb.CM);this.Z.G(Li);
this.Z.J$(9);this.XF.G(PO);this.XF.Aj(true);this.XF.U(A.aaR(A.acf.F$));this.XG.G(
Km);this.XG.Aj(true);this.XG.U(A.aaR(A.acf.A5s));this.U8.G(NV);this.U8.Aj(true);
this.U8.U(A.aaR(A.acf.S7));this.Xw.G(PP);this.Xw.Aj(true);this.Xw.U(A.aaR(A.acf.
O1));this.U9.G(Mt);this.U9.Aj(true);this.U9.U(A.aaR(A.acf.ANL));this.Xu.G(SF);this.
Xu.Aj(true);this.Xu.U(A.aaR(A.acf.Animal));this.Xz.G(Km);this.Xz.Aj(true);this.Xz.
U(A.aaR(A.acf.A4$));this.Ti.G(Uk);this.Ti.Ar(true);this.Ti.Aj(true);this.Ti.Y(true
);this.Ti.U(A.aaR(A.acf.A3Y));this.Xy.G(Zn);this.Xy.Aj(true);this.Xy.U(A.aaR(A.acf.
Device));this.XH.G(Wr);this.XH.Aj(true);this.XH.U(A.aaR(A.acf.Settings));this.Au.
G(IJ);this.J(this.DN,0);this.J(this.Z,0);this.J(this.XF,0);this.J(this.XG,0);this.
J(this.U8,0);this.J(this.Xw,0);this.J(this.U9,0);this.J(this.Xu,0);this.J(this.Xz
,0);this.J(this.Ti,0);this.J(this.Xy,0);this.J(this.XH,0);this.J(this.Au,0);this.
N.Cu=[this,this.BwL];this.N.Cf=[this,this.W8];this.Z.Eh=[this,this.G3];this.XF.AQ=[
this,this.H8];this.XF.Dy(A.aaL(A.ach.AB_));this.XG.AQ=[this,this.H8];this.XG.Dy(
A.aaL(A.ach.ACb));this.U8.AQ=[this,this.H8];this.U8.Dy(A.aaL(A.ach.ANP));this.Xw.
AQ=[this,this.H8];this.Xw.Dy(A.aaL(A.ach.ANZ));this.U9.AQ=[this,this.H8];this.U9.
Dy(A.aaL(A.ach.AOn));this.Xu.AQ=[this,this.H8];this.Xu.Dy(A.aaL(A.ach.ANS));this.
Xz.AQ=[this,this.H8];this.Xz.Dy(A.aaL(A.ach.AOu));this.Ti.AQ=[this,this.H8];this.
Ti.Dy(A.aaL(A.ach.AOc));this.Xy.AQ=[this,this.H8];this.Xy.Dy(A.aaL(A.ach.AN$));this.
XH.AQ=[this,this.H8];this.XH.Dy(A.aaL(A.ach.AOM));this.Init(aArg);},_Done:function(
){this.__proto__=C.AC;this.DN._Done();this.Z._Done();this.XF._Done();this.XG._Done(
);this.U8._Done();this.Xw._Done();this.U9._Done();this.Xu._Done();this.Xz._Done(
);this.Ti._Done();this.Xy._Done();this.XH._Done();this.Au._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.DN._ReInit();this.Z._ReInit(
);this.XF._ReInit();this.XG._ReInit();this.U8._ReInit();this.Xw._ReInit();this.U9.
_ReInit();this.Xu._ReInit();this.Xz._ReInit();this.Ti._ReInit();this.Xy._ReInit(
);this.XH._ReInit();this.Au._ReInit();this.XF.U(A.aaR(A.acf.F$));this.XG.U(A.aaR(
A.acf.A5s));this.U8.U(A.aaR(A.acf.S7));this.Xw.U(A.aaR(A.acf.O1));this.U9.U(A.aaR(
A.acf.ANL));this.Xu.U(A.aaR(A.acf.Animal));this.Xz.U(A.aaR(A.acf.A4$));this.Ti.U(
A.aaR(A.acf.A3Y));this.Xy.U(A.aaR(A.acf.Device));this.XH.U(A.aaR(A.acf.Settings)
);this.CT();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.DN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.U8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.U9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ti)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HomeScreen"};C.QP={Number:null,I5:null,IG:null,Tc:null,ArO:0,Init:
function(aArg){var B;A.zX([this,this.A_Q],[B=A._GetAutoObject(A.Device.Device),B.
AQF,B.AXX],0);A.pe([this,this.A_Q],this);},Ai:function(Ae){C.AC.Ai.call(this,Ae);
this.Ann();},CI:function(H){A._GetAutoObject(A.Device.Device).AeC();},Fb:function(
H){A._GetAutoObject(A.Device.Device).Ang();},Alk:function(H){var F;this.An();this.
Tc.Ar(A._GetAutoObject(A.Device.Device).ScanState===1);if(A._GetAutoObject(A.Device.
Device).ScanState===2)A._GetAutoObject(A.Device.Helper).AdE.Ar(true);if(!this.Tc.
Bw)(F=this.Tc.R,F[2].call(F[0],this.Tc.B1));},A_Q:function(s){this.Alk(s);},Ann:
function(){switch(A._GetAutoObject(A.Device.Device).ScanState){case 4:this.Background.
L(A.jb.FU);break;case 3:this.Background.L(A.jb.HY);break;default:this.Background.
L(A.jb.CM);}},Aj1:function(E){if(this.ArO===E)return;this.ArO=E;this.I5.Aj1(E);}
,_Init:function(aArg){C.AC._Init.call(this,aArg);A.acg.Text._Init.call(this.Number={
I:this},0);C.I5._Init.call(this.I5={I:this},0);A.acg.Am._Init.call(this.IG={I:this
},0);A.acl.FX._Init.call(this.Tc={I:this},0);this.__proto__=C.QP;var B;this.Background.
L(A.jb.CM);this.N.Y(false);this.Number.G(Ul);this.Number.KF(true);this.Number.L(
A.jb.Text);this.I5.G(Zo);this.I5.Aj1(0);this.IG.G(Ws);this.IG.L(A.jb.AY);this.IG.
YO(true);this.Tc.Fy(1750);this.Tc.V5(750);this.Tc.AjU(0);this.Tc.Ar(true);this.Tc.
B1=3;this.J(this.Number,0);this.J(this.I5,0);this.J(this.IG,0);this.Number.S(A.aaL(
A.fl.Ah));this.IG.Ax(A.aaL(A.ach.ACa));this.Tc.R=[B=this.IG,B.AQr,B.Cr];this.Init(
aArg);},_Done:function(){this.__proto__=C.AC;this.Number._Done();this.I5._Done();
this.IG._Done();this.Tc._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.Number._ReInit();this.I5._ReInit();this.IG._ReInit();this.
Tc._ReInit();this.Number.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.Number)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Tc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScanScreen"};C.Fa={
C3:null,ABX:null,AQ:null,Bk:null,De:null,Background:null,Me:null,Om:null,QE:null
,GT:null,A3b:true,Lt:false,Ks:false,P8:false,Init:function(aArg){},Bg:function(aSize
){var B;C.Hg.Bg.call(this,aSize);this.Me.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1]]);this.
QE.G([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);this.Om.G(this.QE.M);this.GT.
G([].concat(0,this.GT.M.slice(1,4)));this.GT.G(A.abN(this.GT.M,aSize[0]));this.GT.
G(A.abP(this.GT.M,0));this.GT.G([].concat(this.GT.M.slice(0,3),47));},Ai:function(
Ae){var B;C.Hg.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);var Fg=((Ae&0x20)===0x20
);var Gm=this.Bk.Bw;if(!G1){this.QE.L(A.jb.Amm);this.GT.L(A.jb.CM);this.Om.Y(true
);this.Om.L(A.jb.AOZ);this.Me.Y(false);}else if(Gm){this.QE.L(A.jb.Bh);this.GT.L(
A.jb.Bh);this.Om.Y(false);this.Me.Y(true);}else if(Fg){this.QE.L(A.jb.Bh);this.GT.
L(A.jb.Bh);this.Om.Y(false);this.Me.Y(true);}else{this.QE.L(A.jb.Text);this.GT.L(
A.jb.Text);this.Om.Y(true);this.Om.L(A.jb.C0);this.Me.Y(false);}this.Lt=G1;this.
Ks=Fg;this.P8=Gm;},P7:function(H){this.An();A.pe(this.AQ,this);},Ah9:function(H){
if(this.De.AbG)return;this.An();if(this.Bk.Bw){A.pe(this.AQ,this);this.Bk.Ar(false
);}this.Bk.Ar(true);},U:function(E){if(this.DD===E)return;this.DD=E;this.GT.Q(E);
},Dy:function(E){if(this.C3===E)return;this.C3=E;this.QE.Ax(E);this.Om.Ax(E);},Abp:
function(E){if(this.A3b===E)return;this.A3b=E;this.GT.Y(E);},Abs:function(E){if(
this.ABX===E)return;this.ABX=E;this.Me.Ax(E);this.Me.G(A.abK(this.Me.M,E.FrameSize
));},_Init:function(aArg){C.Hg._Init.call(this,aArg);A.Core.Timer._Init.call(this.
Bk={I:this},0);A.Core.BO._Init.call(this.De={I:this},0);A.acg.AI._Init.call(this.
Background={I:this},0);A.acg.Am._Init.call(this.Me={I:this},0);A.acg.Am._Init.call(
this.Om={I:this},0);A.acg.Am._Init.call(this.QE={I:this},0);C.CP._Init.call(this.
GT={I:this},0);this.__proto__=C.Fa;this.G(Zp);this.Bk.QJ(0);this.Bk.V2(50);this.
De.Filter=1;this.Background.G(Um);this.Background.Y(false);this.Me.AV(0x14);this.
Me.L(A.jb.AY);this.Me.Cr(0);this.Om.L(A.jb.C0);this.Om.Cr(1);this.GT.G(Zq);this.
J(this.Background,0);this.J(this.Me,0);this.J(this.Om,0);this.J(this.QE,0);this.
J(this.GT,0);this.Bk.M6=[this,this.P7];this.De.BP=[this,this.Ah9];this.Me.Ax(A.aaL(
A.ach.ND));this.Om.Ax(A.aaL(A.ach.AuF));this.QE.Ax(A.aaL(A.ach.AuF));this.GT.S(A.
aaL(A.fl.Ah));this.GT.A5(A.aaL(A.fl.Ak));this.GT.CC(A.aaL(A.fl.By));this.ABX=A.aaL(
A.ach.ND);this.Init(aArg);},_Done:function(){this.__proto__=C.Hg;this.Bk._Done();
this.De._Done();this.Background._Done();this.Me._Done();this.Om._Done();this.QE.
_Done();this.GT._Done();C.Hg._Done.call(this);},_ReInit:function(){C.Hg._ReInit.
call(this);this.Bk._ReInit();this.De._ReInit();this.Background._ReInit();this.Me.
_ReInit();this.Om._ReInit();this.QE._ReInit();this.GT._ReInit();this.GT.S(A.aaL(
A.fl.Ah));this.GT.A5(A.aaL(A.fl.Ak));this.GT.CC(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.Hg._Mark.call(this,D);if((B=this.C3)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.ABX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Bk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.De)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Me)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Om)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.QE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GT
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"};C.
Au={AvZ:null,Background:null,OE:null,Arg:0,Akr:10,AiY:100,AP:0,An8:true,Bg:function(
aSize){A.Core.O.Bg.call(this,aSize);this.Background.G([0,0,aSize[0],aSize[1]]);this.
OE.G([].concat(2,this.OE.M.slice(1,4)));this.OE.G(A.abN(this.OE.M,aSize[0]));},Ai:
function(Ae){var B;A.Core.O.Ai.call(this,Ae);var Afi=this.Akr<this.AiY;var AHM=(
B=this.M)[3]-B[1];var A0n=10;var Atk=AHM;var A1Q=0;if(10>AHM)A0n=AHM;if(this.Akr<
this.AiY)Atk=((Atk*this.Akr)/this.AiY)|0;if(Atk<A0n)Atk=A0n;if(this.Akr<this.AiY
)A1Q=((this.Bh1()*(AHM-Atk))/(this.AiY-this.Akr))|0;this.OE.G(A.abP(this.OE.M,A1Q
));this.OE.G([].concat(this.OE.M.slice(0,3),A1Q+Atk));this.OE.Y(Afi);this.Background.
Y(Afi);if(!!this.AvZ&&(this.An8!==Afi))A.pe(this.AvZ,this);this.An8=Afi;},Bh1:function(
){var E=this.Arg;var Hq=this.AiY-this.Akr;if((Hq>0)&&(E>Hq))E=Hq;if(Hq<=0)E=0;return E;
},Ml:function(E){if(E<0)E=0;if(this.Arg===E)return;this.Arg=E;this.An();},Mm:function(
E){if(E<0)E=0;if(this.Akr===E)return;this.Akr=E;this.An();},Mk:function(E){if(E<
0)E=0;if(this.AiY===E)return;this.AiY=E;this.An();},L:function(E){if(this.AP===E
)return;this.AP=E;this.OE.L(E);},Bj8:function(E){if(A.aa0(this.AvZ,E))return;this.
AvZ=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(
this.Background={I:this},0);A.acg.AI._Init.call(this.OE={I:this},0);this.__proto__=
C.Au;this.G(Zr);this.Ar(false);this.AP=A.jb.AY;this.Background.AV(0x0);this.Background.
G(Un);this.Background.L(A.jb.C0);this.OE.AV(0x0);this.OE.G(Un);this.OE.L(A.jb.AY
);this.J(this.Background,0);this.J(this.OE,0);},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.OE._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.OE._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AvZ)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.Cs={G6:null,Z:null,Au:null,Am:null,A4A:A.jV,Init:function(aArg){A.pe([this,this.
AzI],this);},Dr:function(H){var B;C.AC.Dr.call(this,H);this.An();if(!!this.AY&&((
this.AY.T&0x400)===0x400))this.Z.Hx(this.AY,true,null,null);this.AzI(this);},Alg:
function(H){if(!!this.N.Cu)A.pe(this.N.Cu,this);},Ao0:function(H){if(!!this.N.Ci
)A.pe(this.N.Ci,this);},Aza:function(H){if(!!this.N.Cf)A.pe(this.N.Cf,this);},E7:
function(H){var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((B=this.Z.M)[
3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);A.pe([this,this.Bw7],this);},AzI:function(H){
var B;var Hs=(C.Cd.isPrototypeOf(B=this.AY)?B:null);this.N.Hm(A.jV);this.N.CS(A.
aaL(A.ach.Vt));this.N.Cu=[this,this.Ed];if(!!Hs&&!!Hs.AlG){this.N.FA(A.jV);this.
N.Kj.Dz(255);this.N.AqP(Hs.ApU);this.N.Cm(Hs.AuC);this.N.Cf=Hs.AlG;}else{this.N.
FA(A.jV);this.N.Cm(null);this.N.Cf=null;}if(!!Hs&&!!Hs.AfH){this.N.BU(A.jV);this.
N.Ih.Dz(Hs.Av0);this.N.AmT(Hs.Al$);this.N.C7(Hs.Ap8);this.N.Ci=Hs.AfH;}else{this.
N.BU(A.jV);this.N.C7(null);this.N.Ci=null;}},JH:function(E){if(this.A4A===E)return;
this.A4A=E;this.G6.Q(E);},Ed:function(H){A._GetAutoObject(C.AZ).Fk();},Bw7:function(
H){var B;var Bv7=this.Au.Background.Fc();var BaZ=(Bv7?this.M[2]-((B=this.Au.M)[2
]-B[0]):this.M[2]);var W=this.Z.Ag;while(!!W&&!((W.T&0x200)===0x200)){var Aix=W;
W=W.Ag;if(((Aix.T&0x400)===0x400)){if(!!(A.Core.AjB.isPrototypeOf(Aix)?Aix:null)
){var Ba5=(A.Core.AjB.isPrototypeOf(Aix)?Aix:null);Ba5.DJ([BaZ,Ba5.Es[1]]);}else
if(!!(A.Core.Ej.isPrototypeOf(Aix)?Aix:null)){var BcP=(A.Core.Ej.isPrototypeOf(Aix
)?Aix:null);BcP.G(A.abN(BcP.M,BaZ));}}}},G3:function(H){A.pe([this,this.E7],this
);},_Init:function(aArg){C.AC._Init.call(this,aArg);C.CP._Init.call(this.G6={I:this
},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Au._Init.call(this.Au={I:this},0);
A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.Cs;this.N.Y(true);this.
G6.G(Wt);this.G6.Ar(false);this.G6.Q(A.aaR(A.acf.Settings));this.G6.L(A.jb.Text);
this.Z.G(E2);this.Z.J$(1);this.Au.G(IJ);this.Am.G(QZ);this.Am.L(A.jb.Text);this.
J(this.G6,0);this.J(this.Z,0);this.J(this.Au,0);this.J(this.Am,0);this.G6.S(A.aaL(
A.fl.J6));this.G6.A5(A.aaL(A.fl.H$));this.Z.Eh=[this,this.G3];this.Am.Ax(A.aaL(A.
ach.ABF));this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.G6._Done();
this.Z._Done();this.Au._Done();this.Am._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.G6._ReInit();this.Z._ReInit();this.Au._ReInit();this.
Am._ReInit();this.G6.Q(A.aaR(A.acf.Settings));this.G6.S(A.aaL(A.fl.J6));this.G6.
A5(A.aaL(A.fl.H$));},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.
G6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsScreen"};C.Ap2={Timer:null,Text:null,Init:
function(aArg){var B;A.zX([this,this.BdH],[B=A._GetAutoObject(A.Device.Helper),B.
Ur,B.Us],0);},C5:function(E){C.BN.C5.call(this,E);this.Text.L(E);},BdH:function(
H){this.Text.Q(A._GetAutoObject(A.acj.Ky).Bfx(A._GetAutoObject(A.Device.Helper).
Dx()));},_Init:function(aArg){C.BN._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Timer={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=
C.Ap2;this.Timer.V2(1);this.Timer.Ar(true);this.Text.G(Zs);this.Text.Q(A.jV);this.
J(this.Text,0);this.Timer.M6=[this,this.BdH];this.Text.S(A.aaL(A.fl.Ah));this.Init(
aArg);},_Done:function(){this.__proto__=C.BN;this.Timer._Done();this.Text._Done(
);C.BN._Done.call(this);},_ReInit:function(){C.BN._ReInit.call(this);this.Timer.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var
B;C.BN._Mark.call(this,D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderTime"};
C.BN={KG:0xFFFFFFFF,LD:0,C5:function(E){if(this.KG===E)return;this.KG=E;},Abo:function(
E){if(this.LD===E)return;this.LD=E;},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.BN;this.G(OJ);},_className:"Application::HeaderContent"};
C.N={Vk:null,Vl:null,Vm:null,Agd:null,Age:null,Agf:null,Cu:null,Cf:null,Ci:null,
Background:null,Nu:null,I3:null,Kj:null,Ih:null,Pg:null,IW:null,LI:null,Tx:null,
Ty:null,Ani:A.jV,Anj:A.jV,Ank:A.jV,Ap9:0,Ap_:0,Ap$:0,Agx:0,YZ:false,YY:false,Arn:
false,ArD:false,ArC:false,Init:function(aArg){},Ai:function(Ae){if(!!this.Vk)this.
I3.S(this.Vk);if(!!this.Vl)this.Kj.S(this.Vl);if(!!this.Vm)this.Ih.S(this.Vm);switch(
this.Agx){case 0:{this.Nu.Y(false);this.I3.L(A.jb.Bh);this.Kj.L(A.jb.Bh);this.Ih.
L(A.jb.Bh);this.Pg.L(A.jb.Bh);this.IW.L(A.jb.Bh);this.LI.L(A.jb.Bh);}break;case 1:{
if(!this.Agd)this.Nu.G(A.aaT(this.I3.AQj(),PQ));else this.Nu.G(this.Pg.C_());this.
Nu.Y(true);this.I3.L(A.jb.Text);this.Kj.L(A.jb.Bh);this.Ih.L(A.jb.Bh);this.Pg.L(
A.jb.Text);this.IW.L(A.jb.Bh);this.LI.L(A.jb.Bh);}break;case 3:{if(!this.Agf)this.
Nu.G(A.aaT(this.Ih.AQj(),PQ));else this.Nu.G(this.LI.C_());this.Nu.Y(true);this.
I3.L(A.jb.Bh);this.Kj.L(A.jb.Bh);this.Ih.L(A.jb.Text);this.Pg.L(A.jb.Bh);this.IW.
L(A.jb.Bh);this.LI.L(A.jb.Text);}break;case 2:{if(!this.Age)this.Nu.G(A.aaT(this.
Kj.AQj(),PQ));else this.Nu.G(this.IW.C_());this.Nu.Y(true);this.I3.L(A.jb.Bh);this.
Kj.L(A.jb.Text);this.Ih.L(A.jb.Bh);this.Pg.L(A.jb.Bh);this.IW.L(A.jb.Text);this.
LI.L(A.jb.Bh);}break;default:{this.Nu.Y(false);A.ab5("%s",Wu);}}if(!!this.Pg.Al){
this.Pg.Y(true);this.I3.Y(false);}else{this.Pg.Y(false);this.I3.Y(true);}if(this.
Anj.length<=0){this.IW.Y(true);this.Kj.Y(false);}else{this.IW.Y(false);this.Kj.Y(
true);}if(!!this.LI.Al){this.LI.Y(true);this.Ih.Y(false);}else{this.LI.Y(false);
this.Ih.Y(true);}},Hm:function(E){if(this.Ani===E)return;this.Ani=E;this.I3.Q(E);
this.An();},FA:function(E){if(this.Anj===E)return;this.Anj=E;this.Kj.Q(E);this.An(
);},BU:function(E){if(this.Ank===E)return;this.Ank=E;this.Ih.Q(E);this.An();},ADB:
function(E){if(this.Agx===E)return;this.Agx=E;this.An();},ADt:function(E){if(this.
Vk===E)return;this.Vk=E;this.I3.S(E);this.An();},AqP:function(E){if(this.Vl===E)
return;this.Vl=E;this.Kj.S(E);this.An();},AmT:function(E){if(this.Vm===E)return;
this.Vm=E;this.Ih.S(E);this.An();},A0_:function(H){this.An();},CS:function(E){if(
this.Agd===E)return;this.Agd=E;this.Pg.Ax(E);this.An();},Cm:function(E){if(this.
Age===E)return;this.Age=E;this.IW.Ax(E);this.An();},C7:function(E){if(this.Agf===
E)return;this.Agf=E;this.LI.Ax(E);this.An();},Ow:function(E){if(this.ArC===E)return;
this.ArC=E;this.Tx.Y(E);if(E)this.I3.G([].concat(this.Tx.M[2],this.I3.M.slice(1,
4)));else this.I3.G([].concat(0,this.I3.M.slice(1,4)));this.An();},Ox:function(E
){if(this.ArD===E)return;this.ArD=E;this.Ty.Y(E);if(E)this.Ih.G(A.abN(this.Ih.M,
this.Ty.M[0]));else this.Ih.G(A.abN(this.Ih.M,this.M[2]));this.An();},Bjy:function(
E){if(this.Ap9===E)return;this.Ap9=E;this.Pg.Cr(E);this.An();},AQ3:function(E){if(
this.Ap_===E)return;this.Ap_=E;this.IW.Cr(E);this.An();},A7q:function(E){if(this.
Ap$===E)return;this.Ap$=E;this.LI.Cr(E);this.An();},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);A.acg.AI.
_Init.call(this.Nu={I:this},0);C.CP._Init.call(this.I3={I:this},0);C.CP._Init.call(
this.Kj={I:this},0);C.CP._Init.call(this.Ih={I:this},0);A.acg.Am._Init.call(this.
Pg={I:this},0);A.acg.Am._Init.call(this.IW={I:this},0);A.acg.Am._Init.call(this.
LI={I:this},0);A.acg.Am._Init.call(this.Tx={I:this},0);A.acg.Am._Init.call(this.
Ty={I:this},0);this.__proto__=C.N;this.G(BC);this.Background.AV(0x3F);this.Background.
G(BC);this.Background.L(A.jb.Ads);this.Nu.G(Wv);this.Nu.L(A.jb.C0);this.Nu.Y(false
);this.I3.AV(0x14);this.I3.G(Ww);this.I3.A2(0x12);this.Kj.AV(0x14);this.Kj.G(Zt);
this.Kj.A2(0x12);this.Ih.G(Zu);this.Pg.G(Wx);this.IW.G(Wy);this.LI.G(SG);this.LI.
Y(false);this.Tx.G(Zv);this.Tx.Y(false);this.Ty.G(Zw);this.Ty.Y(false);this.J(this.
Background,0);this.J(this.Nu,0);this.J(this.I3,0);this.J(this.Kj,0);this.J(this.
Ih,0);this.J(this.Pg,0);this.J(this.IW,0);this.J(this.LI,0);this.J(this.Tx,0);this.
J(this.Ty,0);this.I3.S(A.aaL(A.fl.Ak));this.I3.A5(A.aaL(A.fl.By));this.I3.QI([this
,this.A0_]);this.Kj.S(A.aaL(A.fl.Ak));this.Kj.A5(A.aaL(A.fl.By));this.Kj.QI([this
,this.A0_]);this.Ih.S(A.aaL(A.fl.Ak));this.Ih.A5(A.aaL(A.fl.By));this.Ih.QI([this
,this.A0_]);this.Vk=A.aaL(A.fl.Ak);this.Vl=A.aaL(A.fl.Ak);this.Vm=A.aaL(A.fl.Ak);
this.Pg.Ax(null);this.IW.Ax(null);this.LI.Ax(null);this.Tx.Ax(A.aaL(A.ach.AKR));
this.Ty.Ax(A.aaL(A.ach.AiN));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.Background._Done();this.Nu._Done();this.I3._Done();this.Kj._Done();this.
Ih._Done();this.Pg._Done();this.IW._Done();this.LI._Done();this.Tx._Done();this.
Ty._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Background._ReInit();this.Nu._ReInit();this.I3._ReInit();this.Kj._ReInit(
);this.Ih._ReInit();this.Pg._ReInit();this.IW._ReInit();this.LI._ReInit();this.Tx.
_ReInit();this.Ty._ReInit();this.I3.S(A.aaL(A.fl.Ak));this.I3.A5(A.aaL(A.fl.By));
this.Kj.S(A.aaL(A.fl.Ak));this.Kj.A5(A.aaL(A.fl.By));this.Ih.S(A.aaL(A.fl.Ak));this.
Ih.A5(A.aaL(A.fl.By));this.ADt(A.aaL(A.fl.Ak));this.AqP(A.aaL(A.fl.Ak));this.AmT(
A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
Vk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vl)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Vm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agd)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Age)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Agf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cu)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ci)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Tx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ty)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::Footer"};C.ABJ={Init:function(aArg
){var B;A.zX([this,this.M_],[B=A._GetAutoObject(A.Device.Helper),B.Aqz,B.Aj0],0);
A.zX([this,this.M_],[B=A._GetAutoObject(A.Device.Helper),B.A6v,B.AD2],0);A.pe([this
,this.M_],this);},En:function(H){if(!!A._GetAutoObject(A.Device.Helper).AgW)this.
Abr(A._GetAutoObject(A.Device.Helper).AgW.AMX());else this.Abr(-1);if(!!A._GetAutoObject(
A.Device.Helper).T2)this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).Ako(A._GetAutoObject(
A.Device.Helper).T2.Id));else this.OnSetAnimalId(-1);},_Init:function(aArg){C.Amg.
_Init.call(this,aArg);this.__proto__=C.ABJ;this.Init(aArg);},_className:"Application::HeaderScannedIds"
};C.AFc={Eo:null,D9:null,FI:null,Xs:null,Td:null,It:null,Iu:null,Init:function(aArg
){},V_:function(H){var B;C.DH.V_.call(this,H);var AI3=this.Ax2(A._GetAutoObject(
A.Device.Helper).T7.Get(A._GetAutoObject(A.Device.Helper).X.AnimalType));var AJJ=
this.Ax2(A._GetAutoObject(A.Device.Helper).T8.Get(A._GetAutoObject(A.Device.Helper
).X.AnimalType));var Bv0=this.Ax2(A._GetAutoObject(A.Device.Device).Zj);this.Eo.
G(A.abP(this.Eo.M,0));this.Eo.G([].concat(this.Eo.M.slice(0,3),((B=this.M)[3]-B[
1])-AI3));this.Iu.G(A.abO(this.Iu.M,this.Eo.M[3]-((((B=this.Iu.M)[3]-B[1])/2)|0)
));this.D9.G(A.abP(this.D9.M,this.Eo.M[3]));this.D9.G([].concat(this.D9.M.slice(
0,3),((B=this.M)[3]-B[1])-AJJ));this.It.G(A.abO(this.It.M,(this.D9.M[3]-((((B=this.
It.M)[3]-B[1])/2)|0))+2));this.FI.G(A.abP(this.FI.M,this.D9.M[3]));this.FI.G([].
concat(this.FI.M.slice(0,3),((B=this.M)[3]-B[1])-Bv0));this.Td.G(A.abO(this.Td.M
,this.FI.M[3]-((((B=this.Td.M)[3]-B[1])/2)|0)));this.Xs.G(A.abP(this.Xs.M,this.FI.
M[3]));this.Xs.G([].concat(this.Xs.M.slice(0,3),(B=this.M)[3]-B[1]));},AHZ:function(
An4){return A._GetAutoObject(A.Device.Converter).Akk(An4);},AIx:function(){return A.
_GetAutoObject(A.acj.Temperature).Ak2();},_Init:function(aArg){C.DH._Init.call(this
,aArg);A.acg.AI._Init.call(this.Eo={I:this},0);A.acg.AI._Init.call(this.D9={I:this
},0);A.acg.AI._Init.call(this.FI={I:this},0);A.acg.AI._Init.call(this.Xs={I:this
},0);A.acg.AI._Init.call(this.Td={I:this},0);A.acg.AI._Init.call(this.It={I:this
},0);A.acg.AI._Init.call(this.Iu={I:this},0);this.__proto__=C.AFc;this.Eo.AV(0xD
);this.Eo.G(Ab7);this.Eo.L(A.jb.FU);this.D9.AV(0xD);this.D9.G(Uo);this.D9.L(A.jb.
HY);this.FI.AV(0xD);this.FI.G(Zx);this.FI.L(A.jb.EX);this.Xs.AV(0xD);this.Xs.G(AeS
);this.Xs.L(A.jb.AeL);this.Td.AV(0xD);this.Td.G(Zy);this.Td.Avk(A.jb.AeL);this.Td.
Avl(A.jb.AeL);this.Td.Avo(A.jb.EX);this.Td.Avn(A.jb.EX);this.It.AV(0xD);this.It.
G(Wz);this.It.Avk(A.jb.EX);this.It.Avl(A.jb.EX);this.It.Avo(A.jb.HY);this.It.Avn(
A.jb.HY);this.Iu.AV(0xD);this.Iu.G(WA);this.Iu.Avk(A.jb.HY);this.Iu.Avl(A.jb.HY);
this.Iu.Avo(A.jb.FU);this.Iu.Avn(A.jb.FU);this.J(this.Eo,-1);this.J(this.D9,-1);
this.J(this.FI,-1);this.J(this.Xs,-1);this.J(this.Td,-1);this.J(this.It,-1);this.
J(this.Iu,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.DH;this.Eo._Done(
);this.D9._Done();this.FI._Done();this.Xs._Done();this.Td._Done();this.It._Done(
);this.Iu._Done();C.DH._Done.call(this);},_ReInit:function(){C.DH._ReInit.call(this
);this.Eo._ReInit();this.D9._ReInit();this.FI._ReInit();this.Xs._ReInit();this.Td.
_ReInit();this.It._ReInit();this.Iu._ReInit();},_Mark:function(D){var B;C.DH._Mark.
call(this,D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.FI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xs
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Td)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iu)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TemperatureGraph"};C.Cd={Auj:null,Al$:null,AOj:null
,Ap8:null,ApU:null,AuC:null,AQ:null,AfH:null,AlG:null,N:null,Bk:null,Qv:null,ASu:
false,AE0:false,Aou:false,Av0:255,Lt:false,Ks:false,P8:false,Ai:function(Ae){var
B;C.T_.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);var Fg=((Ae&0x20)===0x20);var Io=((
Ae&0x40)===0x40);var Gm=this.Bk.Bw;var FE=A.jb.CM;var GG=A.jb.Text;if(this.G8){FE=
A.jb.Bh;GG=A.jb.Text;}if(!G1){this.Background.L(A.jb.C0);this.V.L(A.jb.CM);}else
if(Gm){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else if(Io){this.Background.
L(A.jb.AY);this.V.L(A.jb.Bh);}else if(Fg){this.Background.L(A.jb.Amm);this.V.L(A.
jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}this.Cy.L(this.ApC);this.Lt=G1;
this.Ks=Fg;this.P8=Gm;this.Aou=Io;},P7:function(H){this.An();A.pe(this.AQ,this);
},Bs0:function(s){this.P7(s);},Ja:function(H){if(this.Qv.AbG)return;this.An();if(
this.Bk.Bw){A.pe(this.AQ,this);this.Bk.Ar(false);}this.Bk.Ar(true);},Asj:function(
s){this.Ja(s);},AgD:function(E){if(A.aa0(this.AfH,E))return;this.AfH=E;},V3:function(
E){if(this.Auj===E)return;this.Auj=E;},V4:function(E){if(this.Al$===E)return;this.
Al$=E;},A7A:function(E){if(this.Av0===E)return;this.Av0=E;},GB:function(E){if(A.
aaZ(this.N,E))return;this.N=E;},U:function(E){if(this.DD===E)return;this.DD=E;this.
AJv();},A0M:function(H){},BCk:function(s){this.A0M(s);},AjT:function(E){if(this.
Ap8===E)return;this.Ap8=E;},LN:function(E){if(A.aa0(this.AlG,E))return;this.AlG=
E;},Bjr:function(E){if(this.ApU===E)return;this.ApU=E;},LP:function(E){if(this.AuC===
E)return;this.AuC=E;},YT:function(E){if(this.AE0===E)return;this.AE0=E;this.AJv(
);},AJv:function(){var B;var Qc=this.DD;if(this.AE0)Qc=Qc+A.aaR(A.acf.Colon);if(
this.ASu)Qc=Qc+Zz;this.V.Q(Qc);},ARh:function(E){if(this.ASu===E)return;this.ASu=
E;this.AJv();},_Init:function(aArg){C.T_._Init.call(this,aArg);A.Core.Timer._Init.
call(this.Bk={I:this},0);A.Core.BO._Init.call(this.Qv={I:this},0);this.__proto__=
C.Cd;this.Bk.QJ(0);this.Bk.V2(50);this.Bk.Ar(false);this.Qv.Filter=1;this.Bk.M6=[
this,this.Bs0];this.Qv.BP=[this,this.Asj];this.Auj=A.aaL(A.fl.Ak);this.Al$=A.aaL(
A.fl.Ak);this.AOj=A.aaL(A.ach.ET);this.ApU=A.aaL(A.fl.Ak);},_Done:function(){this.
__proto__=C.T_;this.Bk._Done();this.Qv._Done();C.T_._Done.call(this);},_ReInit:function(
){C.T_._ReInit.call(this);this.Bk._ReInit();this.Qv._ReInit();this.V3(A.aaL(A.fl.
Ak));this.V4(A.aaL(A.fl.Ak));this.Bjr(A.aaL(A.fl.Ak));},_Mark:function(D){var B;
C.T_._Mark.call(this,D);if((B=this.Auj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Al$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AOj)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ap8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ApU)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AuC)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AfH)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AlG)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItem"};C.Dj={R:null,Amw:null,Amy:null,Hl:null,HU:null,AK:0,F_:
0,FO:100,Fr:0,Init:function(aArg){},Ja:function(H){this.Fr=1;C.D8.Ja.call(this,H
);},Bg:function(aSize){C.D8.Bg.call(this,aSize);this.Hl.G([0,aSize[1]-40,40,aSize[
1]]);this.HU.G([].concat(A.abe(aSize,AeT),aSize));},Ai:function(Ae){var B;C.D8.Ai.
call(this,Ae);var Fg=((Ae&0x20)===0x20);var Gm=this.Bk.Bw;this.Hl.L(this.V.AP);this.
HU.L(this.V.AP);this.Hl.Y((Fg||Gm)&&(this.AK>this.F_));this.HU.Y((Fg||Gm)&&(this.
AK<this.FO));if(this.Fr===6)this.Hl.L(A.jb.EX);if(this.Fr===7)this.HU.L(A.jb.EX);
},Bb3:function(H){this.Fr=6;this.An();if(this.Bk.Bw){A.pe([this,this.Axu],this);
this.Bk.Ar(false);}this.Bk.Ar(true);},P7:function(H){if(this.Fr===6)A.pe([this,this.
Axu],this);if(this.Fr===7)A.pe([this,this.Axv],this);if(this.Fr===1)A.pe(this.AQ
,this);this.Fr=0;this.An();},Db:function(H){var F;if(!!this.R)this.Bx((F=this.R,
F[1].call(F[0])));},Acf:function(s){this.Db(s);},Av:function(E){if(A.aaZ(this.R,
E))return;if(!!this.R)A.z$([this,this.Acf],this.R,0);this.R=E;if(!!E)A.zX([this,
this.Acf],E,0);if(!!E)A.pe([this,this.Acf],this);},Bb4:function(H){this.Fr=7;this.
An();if(this.Bk.Bw){A.pe([this,this.Axv],this);this.Bk.Ar(false);}this.Bk.Ar(true
);},JW:function(H){this.Fr=0;},Axv:function(s){this.JW(s);},JR:function(H){this.
Fr=0;},Axu:function(s){this.JR(s);},Bx:function(E){if(E<this.F_)E=this.F_;if(E>this.
FO)E=this.FO;if(this.AK===E)return;this.AK=E;this.An();},A_l:function(Ap){this.Bx(
Ap);},GC:function(E){if(this.F_===E)return;this.F_=E;this.An();},Fd:function(E){
if(this.FO===E)return;this.FO=E;this.An();},TN:function(){return this.AK;},_Init:
function(aArg){C.D8._Init.call(this,aArg);A.Core.BO._Init.call(this.Amw={I:this}
,0);A.Core.BO._Init.call(this.Amy={I:this},0);A.acg.Am._Init.call(this.Hl={I:this
},0);A.acg.Am._Init.call(this.HU={I:this},0);this.__proto__=C.Dj;this.G(JN);this.
Amw.Filter=6;this.Amy.Filter=7;this.Background.G(JN);this.V.G(AeU);this.V.Q(Lj);
this.Hl.G(Aha);this.HU.G(Anw);this.HU.Cr(1);this.J(this.Hl,0);this.J(this.HU,0);
this.Amw.BP=[this,this.Bb3];this.Amw.DR=[this,this.Bb3];this.Amy.BP=[this,this.Bb4
];this.Amy.DR=[this,this.Bb4];this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));
this.V.CC(null);this.Hl.Ax(A.aaL(A.ach.AlQ));this.HU.Ax(A.aaL(A.ach.AlQ));this.Init(
aArg);},_Done:function(){this.__proto__=C.D8;this.Amw._Done();this.Amy._Done();this.
Hl._Done();this.HU._Done();C.D8._Done.call(this);},_ReInit:function(){C.D8._ReInit.
call(this);this.Amw._ReInit();this.Amy._ReInit();this.Hl._ReInit();this.HU._ReInit(
);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
D8._Mark.call(this,D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Amw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amy)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Hl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HU)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemBase"};C.AB={R:0,Dt:function(
){return-1;},C$:function(aIndex){return-1;},Gx:function(aIndex){return A.jV;},DO:
function(A1){return-1;},Hj:function(){return-1;},Av:function(E){this.R=E;},Cg:function(
Ap){this.Av(Ap);},ABn:function(aIndex){return null;},ABp:function(aIndex){return 0;
},Ce:function(){return this.R;},_Init:function(aArg){this.__proto__=C.AB;A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::Selection"};C.I1={Awi:null,BM:null,AFq:A.jV,AS6:A.
jV,Ajo:1,Init:function(aArg){},Ai:function(Ae){var B;var F;C.Dj.Ai.call(this,Ae);
if(!this.Awi){this.BM.L(this.V.AP);if(!!this.R){if((F=this.R,F[1].call(F[0]))===
1)this.BM.Q(((F=this.R,F[1].call(F[0])).toFixed()+CJ)+this.AS6);else this.BM.Q(((
F=this.R,F[1].call(F[0])).toFixed()+CJ)+this.AFq);}}else(B=this.Awi)?B[1].call(B[
0],this):null;},JW:function(H){var F;var BL=this.AK;C.Dj.JW.call(this,H);this.Bx(
this.AK+this.Ajo);if(this.AK!==BL){if(!!this.R)(F=this.R,F[2].call(F[0],this.AK)
);A.abo(this.R,0);}},JR:function(H){var F;var BL=this.AK;C.Dj.JR.call(this,H);this.
Bx(this.AK-this.Ajo);if(this.AK!==BL){if(!!this.R)(F=this.R,F[2].call(F[0],this.
AK));A.abo(this.R,0);}},Kd:function(E){if(this.AFq===E)return;this.AFq=E;this.An(
);},KE:function(E){if(this.AS6===E)return;this.AS6=E;this.An();},AQ4:function(E){
if(this.Ajo===E)return;this.Ajo=E;},A7Q:function(E){if(A.aa0(this.Awi,E))return;
this.Awi=E;},_Init:function(aArg){C.Dj._Init.call(this,aArg);C.CP._Init.call(this.
BM={I:this},0);this.__proto__=C.I1;this.G(JN);this.BM.G(NW);this.J(this.BM,-1);this.
BM.S(A.aaL(A.fl.Ah));this.BM.A5(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(
){this.__proto__=C.Dj;this.BM._Done();C.Dj._Done.call(this);},_ReInit:function(){
C.Dj._ReInit.call(this);this.BM._ReInit();this.BM.S(A.aaL(A.fl.Ah));this.BM.A5(A.
aaL(A.fl.Ak));},_Mark:function(D){var B;C.Dj._Mark.call(this,D);if((B=this.Awi)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.BM)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemValue"};C.B_={AB:null,Dn:null,HC:null,
CT:function(){this.Ai(this.T);},Init:function(aArg){},Bg:function(aSize){var B;C.
Dj.Bg.call(this,aSize);this.Dn.G([this.Hl.M[2]-10,this.Hl.M[1],this.HU.M[0]+10,this.
Hl.M[3]]);this.Dn.ADC((B=this.Dn.M)[2]-B[0]);this.Dn.Hx(this.Dn.Gb,true,null,null
);},Ai:function(Ae){var B;C.Dj.Ai.call(this,Ae);var Fg=((Ae&0x20)===0x20);var Gm=
this.Bk.Bw;this.Dn.AaY(0,this.Dn.AR-1);this.Hl.Y(Fg||Gm);this.HU.Y(Fg||Gm);},Db:
function(H){var F;if(!!this.R&&!!this.AB)this.Bx(this.AB.DO((F=this.R,F[1].call(
F[0]))));},JW:function(H){var F;var BL=this.AK;C.Dj.JW.call(this,H);this.Bx(this.
AK+1);if(this.AK!==BL){if(!!this.R&&!!this.AB)(F=this.R,F[2].call(F[0],this.AB.C$(
this.AK)));A.abo(this.R,0);}},JR:function(H){var F;var BL=this.AK;C.Dj.JR.call(this
,H);this.Bx(this.AK-1);if(this.AK!==BL){if(!!this.R&&!!this.AB)(F=this.R,F[2].call(
F[0],this.AB.C$(this.AK)));A.abo(this.R,0);}},Bx:function(E){var Qb=0;if(E<this.
F_){E=this.FO;Qb=-this.Dn.VF*this.Dn.AR;}if(E>this.FO){E=this.F_;Qb=this.Dn.VF;}
C.Dj.Bx.call(this,E);if(!!Qb)this.Dn.Ga(Qb);this.Dn.GQ(this.AK);if(this.Dn.Bgr()
)this.Dn.BlN(false,false);this.Dn.Hx(this.Dn.Gb,true,this.HC,null);},G9:function(
H){var B;var FS=this.Dn.GN;var Cw=(C.CP.isPrototypeOf(B=this.Dn.Ca)?B:null);if(!
Cw)return;Cw.S(this.V.B3);Cw.A5(this.V.Al_);Cw.CC(this.V.ApT);Cw.L(this.V.AP);if(
!!this.AB)Cw.Q(this.AB.Gx(FS));else Cw.Q(WC);Cw.G(A.abK(Cw.M,[this.Dn.VF,(B=this.
Dn.M)[3]-B[1]]));},Bsz:function(s){this.G9(s);},CN:function(E){if(this.AB===E)return;
this.AB=E;if(!!this.AB){this.GC(0);this.Fd(this.AB.Dt()-1);this.Dn.Jm(this.AB.Dt(
));this.Dn.AaY(0,this.Dn.AR-1);}},_Init:function(aArg){C.Dj._Init.call(this,aArg
);A.Core.Dn._Init.call(this.Dn={I:this},0);A.acl.FX._Init.call(this.HC={I:this},
0);this.__proto__=C.B_;this.G(JN);this.Dn.NI(C.CP);this.HC.V7(23);this.HC.ID(1);
this.HC.Fy(200);this.J(this.Dn,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.
Ak));this.Dn.G9=[this,this.Bsz];this.Init(aArg);},_Done:function(){this.__proto__=
C.Dj;this.Dn._Done();this.HC._Done();C.Dj._Done.call(this);},_ReInit:function(){
C.Dj._ReInit.call(this);this.Dn._ReInit();this.HC._ReInit();this.V.S(A.aaL(A.fl.
Ah));this.V.A5(A.aaL(A.fl.Ak));this.CT();},_Mark:function(D){var B;C.Dj._Mark.call(
this,D);if((B=this.AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.HC)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroup"};C.Sn={Ft:null,Op:null,Df:null,As:null,Jk:null,
HB:null,Pa:null,Vg:null,QD:null,XP:null,PL:null,Gh:null,Gg:null,FJ:0,A3:0,Ark:false
,Bgn:false,Init:function(aArg){},Ai:function(Ae){C.Dj.Ai.call(this,Ae);this.Hl.Y(
false);this.HU.Y(false);var AsO=A.jV;if(!!this.Df){this.Pa.Q(this.As.Format(Anx)
);this.QD.Q(this.As.Format(Ahb));this.PL.Q(this.As.Format(Ahc));}if(this.A3===1){
this.HB.Y(true);this.HB.G(this.Pa.M);this.HB.L(this.V.AP);this.Pa.L(this.Background.
AP);this.QD.L(this.V.AP);this.PL.L(this.V.AP);AsO=A.aaR(A.acf.A3w);}else if(this.
A3===2){this.HB.Y(true);this.HB.G(this.QD.M);this.HB.L(this.V.AP);this.Pa.L(this.
V.AP);this.QD.L(this.Background.AP);this.PL.L(this.V.AP);AsO=A.aaR(A.acf.G7);}else
if(this.A3===3){this.HB.Y(true);this.HB.G(this.PL.M);this.HB.L(this.V.AP);this.Pa.
L(this.V.AP);this.QD.L(this.V.AP);this.PL.L(this.Background.AP);AsO=A.aaR(A.acf.
Year);}else{this.HB.Y(false);this.Pa.L(this.V.AP);this.XP.L(this.V.AP);this.QD.L(
this.V.AP);this.Vg.L(this.V.AP);this.PL.L(this.V.AP);}if(AsO.length>0){if(this.AE0
)this.V.Q((((this.DD+Ab8)+AsO)+String.fromCharCode(0x29))+A.aaR(A.acf.Colon));else
this.V.Q(((this.DD+Ab8)+AsO)+String.fromCharCode(0x29));}else this.AJv();},P7:function(
H){if(this.Fr===1)A.pe([this,this.UD],this);else if(this.Fr===4)A.pe([this,this.
AhX],this);else if(this.Fr===5)A.pe([this,this.AhJ],this);C.Dj.P7.call(this,H);}
,JW:function(H){switch(this.A3){case 0:C.Dj.JW.call(this,H);break;case 3:break;default:
this.Afs(this);}},JR:function(H){switch(this.A3){case 0:C.Dj.JR.call(this,H);break;
default:this.AhI(this);}},AcR:function(H){var F;if(!!this.Df)this.TP((F=this.Df,
F[1].call(F[0])));},Abu:function(E){if(A.aaZ(this.Df,E))return;if(!!this.Df)A.z$([
this,this.AcR],this.Df,0);this.Df=E;if(!!E)A.zX([this,this.AcR],E,0);if(!!E)A.pe([
this,this.AcR],this);},TP:function(E){if(this.FJ===E)return;this.FJ=E;this.As.Initialize(
this.FJ);this.An();},Afs:function(H){this.Fr=1;this.An();if(this.Bk.Bw){A.pe([this
,this.UD],this);this.Bk.Ar(false);}this.Bk.Ar(true);},A_O:function(s){this.Afs(s
);},UD:function(H){this.Em(this.A3+1);},Alj:function(H){this.Fr=4;this.An();if(this.
Bk.Bw){A.pe([this,this.AhX],this);this.Bk.Ar(false);}this.Bk.Ar(true);},Ali:function(
H){this.Fr=5;this.An();if(this.Bk.Bw){A.pe([this,this.AhJ],this);this.Bk.Ar(false
);}this.Bk.Ar(true);},AhX:function(H){var B;var F;var BL=this.FJ;switch(this.A3){
case 1:{if(this.Ark){var AzR=A._NewObject(A.Core.Anl,0);AzR.J3=1;if(this.As.J(AzR
).JF()>A._GetAutoObject(A.Device.Helper).Dx())return;}if(this.As.Gv<this.As.YM()
)this.As.Ld(this.As.Gv+1);}break;case 2:{if(this.Ark){var AzR=A._NewObject(A.Core.
Anl,0);AzR.J3=this.As.YM();if(this.As.J(AzR).JF()>A._GetAutoObject(A.Device.Helper
).Dx())return;}this.As.TS(this.As.G7+1);if(this.As.YM()<this.As.Gv)this.As.Ld(this.
As.YM());}break;case 3:{if(this.Ark){var AY_=A._NewObject(A.Core.Bt,0);AY_.Initialize(
this.As.JF());AY_.Year+=1;if(AY_.JF()>A._GetAutoObject(A.Device.Helper).Dx())return;
}if(this.As.Year>=2100)return;this.As.Year=this.As.Year+1;}break;default:;}this.
TP(((B=(this.As.JF()|0))<0)?B+0x100000000:B);if(this.FJ!==BL){if(!!this.Df)(F=this.
Df,F[2].call(F[0],this.FJ));A.abo(this.Df,0);}},AhJ:function(H){var B;var F;var BL=
this.FJ;if(this.A3===1)this.As.Ld(this.As.Gv-1);if(this.A3===2){this.As.TS(this.
As.G7-1);if(this.As.YM()<this.As.Gv)this.As.Ld(this.As.YM());}if(this.A3===3){if(
this.As.Year<=2000)return;this.As.Year=this.As.Year-1;}this.TP(((B=(this.As.JF()|
0))<0)?B+0x100000000:B);if(this.FJ!==BL){if(!!this.Df)(F=this.Df,F[2].call(F[0],
this.FJ));A.abo(this.Df,0);}},DM:function(H){var F;if(!this.N)return;switch(this.
A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[
0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(F[
0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C7(A.aaL(A.ach.AdQ));(F=this.N,F[1].call(F[0])).
BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=[this,this.UD];}break;case 2:{(F=this.N,F[
1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N
,F[1].call(F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(F[0])).Cm(A.aaL(A.ach.Ami
));(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
AhI];(F=this.N,F[1].call(F[0])).C7(A.aaL(A.ach.AdQ));(F=this.N,F[1].call(F[0])).
BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=[this,this.UD];}break;case 3:{(F=this.N,F[
1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N
,F[1].call(F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(F[0])).Cm(A.aaL(A.ach.Ami
));(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
AhI];(F=this.N,F[1].call(F[0])).C7(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=
this.N,F[1].call(F[0])).Ci=null;}break;default:this.Ft.Aj$((F=this.N,F[1].call(F[
0])));}},AD0:function(E){if(this.Ark===E)return;this.Ark=E;},Ge:function(H){this.
Em(1);},G0:function(H){this.Em(0);},Em:function(EB){var F;var Ay0=this.A3;if(!this.
A3){this.Ft.AiU((F=this.N,F[1].call(F[0])));if((EB===1)&&!this.FJ){var BL=this.FJ;
this.TP(A._GetAutoObject(A.Device.Helper).Dx());if(this.FJ!==BL){if(!!this.Df)(F=
this.Df,F[2].call(F[0],this.FJ));A.abo(this.Df,0);}}}this.A3=EB;this.Bgn=true;if((
this.A3<0)||(this.A3>3))this.A3=0;this.DM(this);this.Gh.Bw=!!this.A3;this.Gg.Bw=
!!this.A3;if((!!Ay0&&!this.A3)&&!!this.Op)A.pe(this.Op,this);this.An();},AhI:function(
H){if(this.A3>1)this.Em(this.A3-1);},_Init:function(aArg){C.Dj._Init.call(this,aArg
);A.Core.Bt._Init.call(this.As={I:this},0);A.Core.BO._Init.call(this.Jk={I:this}
,0);A.acg.AI._Init.call(this.HB={I:this},0);A.acg.Text._Init.call(this.Pa={I:this
},0);A.acg.Text._Init.call(this.Vg={I:this},0);A.acg.Text._Init.call(this.QD={I:
this},0);A.acg.Text._Init.call(this.XP={I:this},0);A.acg.Text._Init.call(this.PL={
I:this},0);A.Core.BO._Init.call(this.Gh={I:this},0);A.Core.BO._Init.call(this.Gg={
I:this},0);this.__proto__=C.Sn;this.G(Uq);this.V.Q(Any);this.Hl.Y(false);this.HU.
Y(false);this.Jk.Filter=1;this.HB.G(Anz);this.HB.L(0x55FFFFFF);this.Pa.G(AwF);this.
Pa.IZ(true);this.Pa.A2(0x14);this.Vg.G(AwG);this.Vg.IZ(true);this.Vg.A2(0x14);this.
Vg.Q(Akv);this.QD.G(AwH);this.QD.IZ(true);this.XP.G(AeV);this.XP.IZ(true);this.XP.
Q(Akv);this.PL.G(ArW);this.PL.IZ(true);this.PL.A2(0x11);this.Gh.Filter=4;this.Gh.
Bw=false;this.Gg.Filter=5;this.Gg.Bw=false;this.J(this.HB,0);this.J(this.Pa,0);this.
J(this.Vg,0);this.J(this.QD,0);this.J(this.XP,0);this.J(this.PL,0);this.Jk.BP=[this
,this.A_O];this.Pa.S(A.aaL(A.fl.Ey));this.Vg.S(A.aaL(A.fl.Ey));this.QD.S(A.aaL(A.
fl.Ey));this.XP.S(A.aaL(A.fl.Ey));this.PL.S(A.aaL(A.fl.Ey));this.Gh.BP=[this,this.
Alj];this.Gh.DR=[this,this.AhX];this.Gg.BP=[this,this.Ali];this.Gg.DR=[this,this.
AhJ];this.Ft=A._NewObject(C.AdK,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Dj;this.As._Done();this.Jk._Done();this.HB._Done();this.Pa._Done();this.Vg._Done(
);this.QD._Done();this.XP._Done();this.PL._Done();this.Gh._Done();this.Gg._Done(
);C.Dj._Done.call(this);},_ReInit:function(){C.Dj._ReInit.call(this);this.As._ReInit(
);this.Jk._ReInit();this.HB._ReInit();this.Pa._ReInit();this.Vg._ReInit();this.QD.
_ReInit();this.XP._ReInit();this.PL._ReInit();this.Gh._ReInit();this.Gg._ReInit(
);this.Pa.S(A.aaL(A.fl.Ey));this.Vg.S(A.aaL(A.fl.Ey));this.QD.S(A.aaL(A.fl.Ey));
this.XP.S(A.aaL(A.fl.Ey));this.PL.S(A.aaL(A.fl.Ey));},_Mark:function(D){var B;C.
Dj._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Op)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Df)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.As)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Pa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.PL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gg)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemDate"};C.Os={LanguageToString:null,Init:function(aArg){
var B;A.zX([this,this.Ba2],[B=A._GetAutoObject(A.Device.Device),B.A6k,B.A_r],0);
A.pe([this,this.Ba2],this);},Dt:function(){return 16;},Gx:function(aIndex){return this.
LanguageToString.B0(this.C$(aIndex));},Av:function(E){C.Ds.Av.call(this,E);A._GetAutoObject(
A.Device.Device).AmW(E);},Ba2:function(H){this.R=A._GetAutoObject(A.Device.Device
).Language;A.abo([this,this.Ce,this.Cg],0);},_Init:function(aArg){C.Ds._Init.call(
this,aArg);A.Device.LanguageToString._Init.call(this.LanguageToString={I:this},0
);this.__proto__=C.Os;this.Cv.Set(0,0);this.Cv.Set(1,1);this.Cv.Set(2,5);this.Cv.
Set(3,3);this.Cv.Set(4,8);this.Cv.Set(5,9);this.Cv.Set(6,7);this.Cv.Set(7,6);this.
Cv.Set(8,10);this.Cv.Set(9,2);this.Cv.Set(10,11);this.Cv.Set(11,12);this.Cv.Set(
12,13);this.Cv.Set(13,14);this.Cv.Set(14,15);this.Cv.Set(15,16);this.Init(aArg);
},_Done:function(){this.__proto__=C.Ds;this.LanguageToString._Done();C.Ds._Done.
call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.LanguageToString._ReInit(
);},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.LanguageToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Languages"};C.QU={TemperatureUnitToString:
null,Dt:function(){return 2;},C$:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gx:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
TemperatureUnitToString.B0(aIndex);},DO:function(A1){return A1;},Hj:function(){return 1;
},Av:function(E){C.AB.Av.call(this,E);A._GetAutoObject(A.Device.Device).AvQ(E);}
,Init:function(aArg){var B;A.zX([this,this.Bdn],[B=A._GetAutoObject(A.Device.Device
),B.AqA,B.Asi],0);A.pe([this,this.Bdn],this);},Bdn:function(H){this.R=A._GetAutoObject(
A.Device.Device).TemperatureUnit;A.abo([this,this.Ce,this.Cg],0);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.
TemperatureUnitToString={I:this},0);this.__proto__=C.QU;this.Init(aArg);},_Done:
function(){this.__proto__=C.AB;this.TemperatureUnitToString._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.TemperatureUnitToString.
_ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.TemperatureUnitToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.
ASN={AiS:null,AbW:null,Kk:null,AN:null,A8:null,Bg:function(aSize){C.A$.Bg.call(this
,aSize);this.Background.G(A.abN(this.Background.M,((aSize[0]*60)/100)|0));this.V.
G(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AN.G([this.V.M[2]-1,0,this.V.M[2]+
1,aSize[1]]);this.Kk.G([this.V.M[2],0,this.Background.M[2],aSize[1]]);this.A8.G([
this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.AiS.G([this.Background.
M[2],0,aSize[0],aSize[1]]);this.AbW.G(this.AiS.M);},Ai:function(Ae){C.A$.Ai.call(
this,Ae);this.Kk.L(this.V.AP);},Init:function(aArg){},B$:function(Ac){if(!this.AW
)return;this.Hr=Ac;if(!!this.AW){var AkT=this.AW.Hy(Ac,6);var Ao_=this.AW.CA(Ac,
7);var As3=this.AW.IU(Ac,9);this.U(A._GetAutoObject(A.acj.Ky).ABl(AkT));this.Kk.
Q(A._GetAutoObject(A.acj.Ky).A4d(AkT));this.AbW.Q(A._GetAutoObject(A.Device.Converter
).Akk(Ao_));this.AbW.L(A._GetAutoObject(A.acj.Assessment).W1(As3));this.AiS.L(A.
_GetAutoObject(A.acj.Assessment).P4(As3));this.An();}},_Init:function(aArg){C.A$.
_Init.call(this,aArg);A.acg.AI._Init.call(this.AiS={I:this},0);A.acg.Text._Init.
call(this.AbW={I:this},0);A.acg.Text._Init.call(this.Kk={I:this},0);A.acg.AI._Init.
call(this.AN={I:this},0);A.acg.AI._Init.call(this.A8={I:this},0);this.__proto__=
C.ASN;this.V.G(OK);this.AbW.L(A.jb.Text);this.Kk.Q(SI);this.Kk.L(A.jb.Text);this.
AN.L(A.jb.Bb);this.A8.G(AwI);this.A8.L(A.jb.Bb);this.J(this.AiS,0);this.J(this.AbW
,0);this.J(this.Kk,0);this.J(this.AN,0);this.J(this.A8,0);this.AbW.S(A.aaL(A.fl.
Ah));this.Kk.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.AiS._Done();this.AbW._Done();this.Kk._Done();this.AN._Done();this.A8._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.AiS._ReInit(
);this.AbW._ReInit();this.Kk._ReInit();this.AN._ReInit();this.A8._ReInit();this.
AbW.S(A.aaL(A.fl.Ah));this.Kk.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.AiS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::TemperatureListItem"};C.FP={AW:null,AQ:null,Cl:null,AD:
null,Aex:null,Ql:null,KA:A.jV,K9:null,AS8:true,G9:function(H){var B;var FS=this.
AD.GN;var Aa=(C.A$.isPrototypeOf(B=this.AD.Ca)?B:null);if(!Aa)return;Aa.YP(this.
AW);Aa.B$(FS);Aa.AQ=this.AQ;Aa.G(A.abK(Aa.M,[(B=this.AD.M)[2]-B[0],this.AD.GP]));
},NI:function(E){if(E===this.K9)return;this.K9=E;this.AD.NI(E);},YP:function(E){
if(this.AW===E)return;if(!!this.AW)A.z9([this,this.B$],this.AW,0);this.AW=E;if(!
!E)A.zV([this,this.B$],E,0);A.pe([this,this.B$],this);},B$:function(H){if(this.AS8===
false)return;if(!!this.AW){this.AD.Jm(this.AW.Ch());this.AD.AaY(0,this.AD.AR-1);
}else this.AD.Jm(0);if((this.AD.AR>0)&&(this.Fx()<0))this.GQ(0);if(this.Fx()>=this.
AD.AR){this.GQ(0);this.AD.Ga(0);}if(this.AD.AR<=0){this.Ql.Y(true);this.GQ(-1);}
else{this.Ql.Y(false);this.AAb(null,null);}},E7:function(H){var B;this.Aex.Mk(this.
AD.GP*this.AD.AR);this.Aex.Mm((B=this.AD.M)[3]-B[1]);this.Aex.Ml(-this.AD.Bp);},
Dr:function(H){if(this.AD.AR>0){switch(this.Cl.CH){case 4:if(this.Fx()>0)this.GQ(
this.Fx()-1);break;case 5:if(this.Fx()<(this.AD.AR-1))this.GQ(this.Fx()+1);break;
default:this.Cl.O9=true;}this.AD.Hx(this.Fx(),true,null,null);}else if((this.Cl.
CH!==4)&&(this.Cl.CH!==5))this.Cl.O9=true;},YQ:function(E){if(A.aa0(this.AQ,E))return;
this.AQ=E;this.AD.AaY(0,this.AD.AR);},GQ:function(E){this.AD.GQ(E);this.AD.Hx(E,
true,null,null);},Fx:function(){return this.AD.Gb;},Do:function(E){if(this.KA===
E)return;this.KA=E;this.Ql.Q(E);},AAb:function(Aci,EV){this.AD.AAb(Aci,EV);},ARw:
function(E){if(this.AS8===E)return;this.AS8=E;if(E)A.pe([this,this.B$],this);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Core.BO._Init.call(this.Cl={I:this
},0);A.Core.CF._Init.call(this.AD={I:this},0);C.Au._Init.call(this.Aex={I:this},
0);A.acg.Text._Init.call(this.Ql={I:this},0);this.__proto__=C.FP;this.G(SJ);this.
K9=C.A$;this.Cl.Filter=147;this.AD.AV(0x3F);this.AD.G(SJ);this.AD.Aeg(40);this.Aex.
AV(0x3A);this.Aex.G(ArX);this.Ql.AV(0x3F);this.Ql.G(AwJ);this.Ql.HF(10);this.Ql.
KF(true);this.Ql.A2(0xA);this.Ql.L(A.jb.Text);this.J(this.AD,0);this.J(this.Aex,
0);this.J(this.Ql,0);this.Cl.BP=[this,this.Dr];this.Cl.DR=[this,this.Dr];this.AD.
Eh=[this,this.E7];this.AD.G9=[this,this.G9];this.Ql.S(A.aaL(A.fl.Ah));},_Done:function(
){this.__proto__=A.Core.O;this.Cl._Done();this.AD._Done();this.Aex._Done();this.
Ql._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Cl._ReInit();this.AD._ReInit();this.Aex._ReInit();this.Ql._ReInit();this.
Ql.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQ)&&((B=B[0])._cycle!=D)
)B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AD).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aex)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ql)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollList"
};C.A$={AW:null,Hr:-1,CT:function(){this.B$(this.Hr);},Ai:function(Ae){var B;C.Cd.
Ai.call(this,Ae);if(!((Ae&0x20)===0x20)){if((this.Hr%2)===1)this.Background.L(A.
jb.CM);else this.Background.L(A.jb.C0);}},YP:function(E){if(this.AW===E)return;this.
AW=E;},B$:function(Ac){A.ab5("%s",AwK);},_Init:function(aArg){C.Cd._Init.call(this
,aArg);this.__proto__=C.A$;},_ReInit:function(){C.Cd._ReInit.call(this);this.CT(
);},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.AW)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::ListItem"};C.EO={Be:null,Fn:null
,DK:null,EI:null,Vr:null,Jz:null,KA:A.jV,Aey:false,Init:function(aArg){var B;A.zX([
this,this.A0B],[B=A._GetAutoObject(A.Device.Device),B.ACU,B.AG3],0);A.zX([this,this.
A0B],[B=A._GetAutoObject(A.Device.Device),B.A53,B.A_f],0);A.zV([this,this.Afm],A.
_GetAutoObject(A.Device.Device).Aq,0);A.zV([this,this.Ab1],A._GetAutoObject(A.Device.
Device).Aq,0);A.zX([this,this.Bxa],[B=A._GetAutoObject(A.Device.Helper),B.Ur,B.Us
],0);A.pe([this,this.Ab1],this);A.pe([this,this.A_J],this);A.pe([this,this.Awd],
this);},V1:function(H){this.AfJ();if(!A._GetAutoObject(A.Device.Device).Jz){this.
A2k(A.aaR(A.acf.BgE),[this,this.Bhh],1);this.A2k(A.aaR(A.acf.Blz),[this,this.Bhg
],0);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.Bgd));A._GetAutoObject(
C.BW).Gq();}var P;for(P=this.Jz.Dt()-1;P>=0;P=P-1)switch(this.Jz.C$(P)){case 0:this.
AfI(A.aaR(A.acf.Adb),[this,this.ARx],0);break;case 1:this.AfI(A.aaR(A.acf.Temperature
),[this,this.ARz],1);break;case 2:this.AfI(A.aaR(A.acf.Rating),[this,this.ARy],2
);break;case 3:this.AfI(A.aaR(A.acf.AeM),[this,this.ARA],3);break;default:A.ab5(
"%s",AwL);}A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.A3H
));A._GetAutoObject(A.Device.Device).Cj(6);},BsA:function(s){this.V1(s);},Dr:function(
H){var DV=(A.Core.BO.isPrototypeOf(H)?H:null);var Afc=this.Jz.DO(A._GetAutoObject(
A.Device.Device).Jz);if(this.Aey)return;switch(DV.CH){case 6:{Afc=Afc-1;if(Afc<0
)Afc=this.Jz.Dt()-1;A._GetAutoObject(A.Device.Device).Abm(this.Jz.C$(Afc));}break;
case 7:{Afc=Afc+1;if(Afc>=this.Jz.Dt())Afc=0;A._GetAutoObject(A.Device.Device).Abm(
this.Jz.C$(Afc));}break;default:DV.O9=true;}},CI:function(H){if(this.DK.AyA()){this.
DK.Acr();if(this.DK.AyA()===false)this.Be.ARw(true);return;}else if(this.Aey)this.
A1q(this);if(!!this.Be)this.Be.ARw(true);},Fb:function(H){if(!!this.Be)this.Be.ARw(
false);},Awd:function(H){var B;if(!!this.Be)this.HG(this.Be);this.Be=A._NewObject(
C.AKD,0);this.Be.G(AnA);this.Be.YP(A._GetAutoObject(A.Device.Device).Aq);this.Be.
YQ([this,this.AHe]);if(!!this.Fn)this.Be.A62([B=this.Fn,B.A6x,B.A7M]);this.A1E(this
);this.J(this.Be,0);if(this.Aey===false)this.Ba(this.Be);this.A0B(this);this.Blx(
this);},A6Y:function(H){A._GetAutoObject(A.Device.Device).Cj(0);this.Dp(C.XY);this.
D_.AQ=[this,this.AHe];this.AJz(this);this.D_.Ar(true);this.Ba(this.D_);this.Aey=
true;},Bhn:function(H){var B;A._GetAutoObject(A.Device.Device).Cj(0);if(!this.Be
)return;var Aa=(C.AAC.isPrototypeOf(B=this.Be.AD.Bf2(this.Be.AD.Gb))?B:null);if(
!!Aa)A._GetAutoObject(A.Device.Helper).HD(Aa.Hr);else A._GetAutoObject(A.Device.
Helper).X.G$();this.Afv();},AoY:function(H){var F;if(!this.EI)this.A3I(this);else
switch((F=this.EI,F[1].call(F[0]))){case 0:this.A3I(this);break;case 1:this.BeY(
this);break;case 9:this.BeZ(this);break;case 4:this.A3K(this);break;case 6:this.
A3N(this);break;case 8:this.ALY(this);break;case 2:this.A3R(this);break;case 3:this.
Be0(this);break;case 7:this.Be1(this);break;case 5:this.Be2(this);break;case 10:
this.Be4(this);break;case 11:this.A3J(this);break;case 12:this.A3Q(this);break;case
13:this.A3S(this);break;case 14:this.A3L(this);break;case 18:this.A3M(this);break;
case 15:this.A3O(this);break;case 16:this.A3T(this);break;case 17:this.A3P(this);
break;default:A.ab5("%s%e",AwM,(F=this.EI,F[1].call(F[0])));}},AHe:function(s){this.
AoY(s);},Biw:function(H){var B;this.Dp(C.J7);this.D_.AQ=null;this.Aey=false;this.
Ab1(this);var Filter;var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).
Aq.Filter){Filter=A._GetAutoObject(A.Device.Device).Aq.Filter.Gu();FilterCriterion=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DW(1,4))?B:null);if(!!FilterCriterion
)Filter.QM(FilterCriterion);A._GetAutoObject(A.Device.Device).Aq.Bm(Filter);}this.
N.Tx.Dz(255);this.N.Ty.Dz(255);this.Ba(this.Be);this.D_.Ar(false);},AmH:function(
H){A._GetAutoObject(C.AZ).Fk();},Do:function(E){if(this.KA===E)return;this.KA=E;
this.A1E(this);},AaJ:function(){switch(A._GetAutoObject(A.Device.Device).Jz){case
0:return this.Bd6(A._GetAutoObject(A.Device.Device).AlN);case 2:return C.ALd;case
1:return C.ALe;case 3:return C.ALg;case 8:case 9:case 10:case 4:case 5:case 6:return C.
AiV;case 7:return C.AAB;case 11:return C.AAA;default:throw new Error(ArY);}},AaK:
function(){switch(A._GetAutoObject(A.Device.Device).Jz){case 0:return this.Bd7(A.
_GetAutoObject(A.Device.Device).AlN);case 2:return C.ABP;case 1:return C.ANE;case
3:return C.ANG;case 4:return C.ABM;case 8:case 9:case 10:case 5:case 6:return C.
Ajg;case 7:return C.ABO;case 11:return C.ABN;default:throw new Error(ArY);}},A0B:
function(H){if(!!this.Be){this.Be.NI(this.AaJ());this.BlD(this);}},BlD:function(
H){var B;if(!!this.Fn)this.HG(this.Fn);this.Fn=(C.Du.isPrototypeOf(B=A._NewObject(
this.AaK(),0))?B:null);this.Fn.G(KL);if(!!this.Be)this.Be.A62([B=this.Fn,B.A6x,B.
A7M]);this.J(this.Fn,0);},Bhl:function(H){this.QO(this);A._GetAutoObject(A.Device.
Device).Cj(0);},ARx:function(H){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(
A.Device.Device).Abm(0);},ARz:function(H){A._GetAutoObject(A.Device.Device).Cj(0
);A._GetAutoObject(A.Device.Device).Abm(1);},ARy:function(H){A._GetAutoObject(A.
Device.Device).Cj(0);A._GetAutoObject(A.Device.Device).Abm(2);},ARA:function(H){
A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.Device.Device).Abm(3);
},QO:function(H){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.
Helper).MT());},A_J:function(s){this.QO(s);},HH:function(H){if(this.Aey){this.AJz(
this);return;}this.N.CS(A.aaL(A.ach.ET));this.N.Cm(A.aaL(A.ach.AB8));this.N.C7(A.
aaL(A.ach.Options));this.N.Cu=[this,this.AmH];this.N.Cf=[this,this.A6Y];this.N.Ci=[
this,this.BsA];this.N.Hm(A.jV);this.N.FA(A.jV);this.N.BU(A.jV);if(!A._GetAutoObject(
A.Device.Device).Aq.Ch()){this.N.IW.Dz(100);this.N.Cf=null;}else this.N.IW.Dz(255
);},AHb:function(s){this.HH(s);},AfI:function(Uv,Uw,AHC){if(A._GetAutoObject(A.Device.
Device).Jz===AHC)A._GetAutoObject(C.BW).AiF(Uv,Uw,true);else A._GetAutoObject(C.
BW).AiF(Uv,Uw,false);},Afm:function(H){this.A1E(this);if(this.Aey)A.pe([this,this.
AJz],this);},Afv:function(){A._GetAutoObject(C.AZ).BZ(9);},A1E:function(H){if(!this.
Be)return;if(!A._GetAutoObject(A.Device.Device).Aq.Qm()||!A._GetAutoObject(A.Device.
Device).Aq.Filter)this.Be.Do(A.aaR(A.acf.ACK));else if(A._GetAutoObject(A.Device.
Helper).Aqe(A._GetAutoObject(A.Device.Device).Aq.Filter))this.Be.Do(this.KA);else
if(!A._GetAutoObject(A.Device.Device).Aq.Filter.DW(1,4)){if(A._GetAutoObject(A.Device.
Helper).ABr(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)this.Be.Do(A.aaR(A.
acf.AL9));else this.Be.Do(A.aaR(A.acf.AL8));}else this.Be.Do(A.aaR(A.acf.AP5));}
,AmP:function(H){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EI)(F=this.
EI,F[2].call(F[0],0));},AjW:function(E){if(A.aaZ(this.EI,E))return;if(!!this.EI)
A.z$([this,this.AYb],this.EI,0);this.EI=E;if(!!E)A.zX([this,this.AYb],this.EI,0);
if(!!E)A.pe([this,this.AYb],this);},AqJ:function(H){var F;A._GetAutoObject(A.Device.
Device).Cj(0);if(!!this.EI)(F=this.EI,F[2].call(F[0],1));},AjX:function(H){var F;
A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EI)(F=this.EI,F[2].call(F[0],2
));},AqZ:function(H){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EI)(
F=this.EI,F[2].call(F[0],3));},ARs:function(H){var F;A._GetAutoObject(A.Device.Device
).Cj(0);if(!!this.EI)(F=this.EI,F[2].call(F[0],7));},ARt:function(H){var F;A._GetAutoObject(
A.Device.Device).Cj(0);if(!!this.EI)(F=this.EI,F[2].call(F[0],5));},A3R:function(
H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(A.Device.Helper).HD(this.Be.
Fx());this.DK.P2(1);}},Ex:function(Uv,Uw,An_){var F;if(!!this.EI&&((F=this.EI,F[
1].call(F[0]))===An_))A._GetAutoObject(C.BW).AiF(Uv,Uw,true);else A._GetAutoObject(
C.BW).AiF(Uv,Uw,false);},BiG:function(H){var F;A._GetAutoObject(A.Device.Device).
Cj(0);if(!!this.EI)(F=this.EI,F[2].call(F[0],4));},A3K:function(H){if(!this.Be)return;
if(this.MX()){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fx());this.DK.BxC();}
},BiH:function(H){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EI)(F=
this.EI,F[2].call(F[0],6));},A3N:function(H){if(!this.Be)return;if(this.MX()){A.
_GetAutoObject(A.Device.Helper).HD(this.Be.Fx());this.DK.BxD();}},ALY:function(H
){if(!this.Be)return;if(this.MX()){A._GetAutoObject(A.Device.Helper).HD(this.Be.
Fx());this.DK.P2(1024);}},AQ9:function(H){var F;A._GetAutoObject(A.Device.Device
).Cj(0);if(!!this.EI)(F=this.EI,F[2].call(F[0],8));},Abn:function(H){var F;A._GetAutoObject(
A.Device.Device).Cj(0);if(!!this.EI)(F=this.EI,F[2].call(F[0],9));},Be0:function(
H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(A.Device.Helper).HD(this.Be.
Fx());this.DK.P2(2);}},A3I:function(H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fx());if(A._GetAutoObject(A.Device.Helper).Ajq(A._GetAutoObject(
A.Device.Helper).X.WhereAbouts))A._GetAutoObject(A.Device.Device).A6(66,true,A.jV
,0,null);else this.Afu();}},BeY:function(H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fx());this.DK.P2(16);}},Afu:function(){A._GetAutoObject(
C.AZ).BZ(37);},Be1:function(H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fx());this.DK.P2(4);}},Be2:function(H){if(!this.Be)return;
if(this.MX()){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fx());this.DK.P2(8);}
},BeZ:function(H){var B;if(!this.Be)return;if(this.MX()){A._GetAutoObject(A.Device.
Helper).HD(this.Be.Fx());if(this.Aey){A.zX([this,this.Ay2],[B=this.DK,B.AmO,B.Jn
],0);this.A1q(this);}this.DK.Acr();}},A2h:function(Uv,Uw,Buv){if(Buv)A._GetAutoObject(
C.BW).A2i(Uv,Uw,true);else A._GetAutoObject(C.BW).A2i(Uv,Uw,false);},AJz:function(
H){this.N.Hm(A.jV);this.N.BU(A.jV);this.N.CS(A.aaL(A.ach.AdP));this.N.Cu=[this,this.
Biw];this.N.Tx.Dz(100);this.N.Ty.Dz(100);var Gn=A._GetAutoObject(A.Device.Device
).Aq.Ch();if(Gn<=0){this.N.Cm(null);this.N.C7(null);this.N.Cf=null;this.N.Ci=null;
this.N.YY=false;this.N.YZ=false;}else if(Gn===1){this.N.Cm(null);this.N.C7(A.aaL(
A.ach.AdQ));this.N.Cf=null;this.N.Ci=[this,this.AHe];this.N.YY=false;this.N.YZ=false;
}else{this.N.Cm(A.aaL(A.ach.Ap7));this.N.C7(A.aaL(A.ach.Aqc));this.N.Cf=[this,this.
A04];this.N.Ci=[this,this.A05];this.N.YY=true;this.N.YZ=true;}},A04:function(H){
if(!this.Be)return;if(this.Be.Fx()<(A._GetAutoObject(A.Device.Device).Aq.Ch()-1)
)this.Be.GQ(this.Be.Fx()+1);},A05:function(H){if(!this.Be)return;if(this.Be.Fx()>
0)this.Be.GQ(this.Be.Fx()-1);},Blx:function(H){if(A._GetAutoObject(A.Device.Helper
).X.Id>0){var A_=A._GetAutoObject(A.Device.Device).Aq.K3(0,A._GetAutoObject(A.Device.
Helper).X.Id);if(A_>=0){this.Be.GQ(A_);A.ab5("%s",AwN);}}},MX:function(){return this.
Be.Fx()>=0;},AjC:function(){return A._GetAutoObject(A.Device.Device).Aq.Ch()>5;}
,AfJ:function(){this.BdV();A._GetAutoObject(C.BW).S8(A.aaR(A.acf.ASd),[this,this.
A6Y]);A._GetAutoObject(C.BW).Gq();},Ab1:function(H){if(this.Aey)this.AJz(this);else
this.HH(this);},A1q:function(H){var aFilter=A._GetAutoObject(A.Device.Device).Aq.
Filter.Gu();var AxG=aFilter.DW(1,4);if(!!AxG){aFilter.QM(AxG);A._GetAutoObject(A.
Device.Device).Aq.Bm(aFilter);if(!!this.Be)this.Be.GQ(0);}},Ay2:function(H){var B;
if(!this.DK.Gi&&this.Aey){A.z$([this,this.Ay2],[B=this.DK,B.AmO,B.Jn],0);this.A1q(
this);}},Bkt:function(H){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.
EI)(F=this.EI,F[2].call(F[0],10));},Be4:function(H){if(!this.Be)return;if(this.MX(
)){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fx());this.DK.P2(256);}},A0W:function(
H){A.pe([this,this.AHb],this);},AYb:function(s){this.A0W(s);},BiD:function(H){var
F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EI)(F=this.EI,F[2].call(F[0]
,11));},A3J:function(H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(A.Device.
Helper).HD(this.Be.Fx());this.DK.P2(4096);}},A3Q:function(H){if(!this.Be)return;
if(this.MX()){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fx());this.DK.P2(16384
);}},BjX:function(H){var F;A._GetAutoObject(A.Device.Device).Cj(0);if(!!this.EI)(
F=this.EI,F[2].call(F[0],12));},A3S:function(H){if(!this.Be)return;if(this.MX()){
A._GetAutoObject(A.Device.Helper).HD(this.Be.Fx());this.Bxn();}},Bxn:function(){
A._GetAutoObject(C.AZ).AgO(86);},A3L:function(H){if(!this.Be)return;if(this.MX()
){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fx());this.DK.P2(32768);}},A3O:function(
H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(A.Device.Helper).HD(this.Be.
Fx());this.DK.P2(65536);}},A3T:function(H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fx());this.DK.P2(131072);}},Bkg:function(H){var F;A.
_GetAutoObject(A.Device.Device).Cj(0);if(!!this.EI)(F=this.EI,F[2].call(F[0],16)
);},BdV:function(){if(!A._GetAutoObject(A.Device.Device).Aq.Filter||A._GetAutoObject(
A.Device.Helper).Aqe(A._GetAutoObject(A.Device.Device).Aq.Filter))A._GetAutoObject(
C.BW).Xh(A.aaR(A.acf.AAF));else A._GetAutoObject(C.BW).S8(A.aaR(A.acf.AAF),[this
,this.Bhl]);A._GetAutoObject(C.BW).S8(A.aaR(A.acf.Akc),[this,this.Bhn]);A._GetAutoObject(
C.BW).Gq();},Bd7:function(AnQ){switch(AnQ){case 0:return C.Ajg;case 1:return C.ANB;
default:throw new Error(Ab9+AnQ.toFixed());}},Bd6:function(AnQ){switch(AnQ){case
0:return C.AiV;case 1:return C.ALa;default:throw new Error(Ab9+AnQ.toFixed());}}
,Bhg:function(H){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.Device.
Device).AqK(0);},Bhh:function(H){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(
A.Device.Device).AqK(1);},A2k:function(Uv,Uw,AnQ){if(A._GetAutoObject(A.Device.Device
).AlN===AnQ)A._GetAutoObject(C.BW).AiF(Uv,Uw,true);else A._GetAutoObject(C.BW).AiF(
Uv,Uw,false);},A3P:function(H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(
A.Device.Helper).HD(this.Be.Fx());this.DK.P2(128);}},Bxa:function(H){var B;if(!this.
Be)return;A.pe([B=this.Be,B.B$],this);},A3M:function(H){if(!this.Be)return;if(this.
MX()){A._GetAutoObject(A.Device.Helper).HD(this.Be.Fx());this.DK.P2(524288);}},Be3:
function(H){if(!this.Be)return;if(this.MX()){A._GetAutoObject(A.Device.Helper).HD(
this.Be.Fx());this.DK.P2(262144);}},_Init:function(aArg){C.AC._Init.call(this,aArg
);C.ABP._Init.call(this.Vr={I:this},0);C.Jz._Init.call(this.Jz={I:this},0);this.
__proto__=C.EO;this.Background.G(B9);this.N.Y(true);this.N.Ow(true);this.N.Ox(true
);this.D_.A7l(A.jb.C0);this.D_.A7m(A.jb.Text);this.Dp(C.J7);this.Vr.G(KL);this.KA=
A.aaR(A.acf.ACK);this.J(this.Vr,0);this.DK=A._GetAutoObject(C.DK);this.Init(aArg
);},_Done:function(){this.__proto__=C.AC;this.Vr._Done();this.Jz._Done();C.AC._Done.
call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.Vr._ReInit();this.Jz.
_ReInit();this.Do(A.aaR(A.acf.ACK));},_Mark:function(D){var B;C.AC._Mark.call(this
,D);if((B=this.Be)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fn)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.DK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EI)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vr)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Jz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalListScreen"
};C.AAC={AN:null,A8:null,T$:null,AbU:null,Init:function(aArg){},Bg:function(aSize
){C.A$.Bg.call(this,aSize);this.V.G(A.abN(this.V.M,((aSize[0]*40)/100)|0));this.
AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T$.G([this.V.M[2],0,((aSize[
0]*80)/100)|0,aSize[1]]);this.A8.G([this.T$.M[2]-1,0,this.T$.M[2]+1,aSize[1]]);this.
AbU.G([this.T$.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae
);this.T$.L(this.V.AP);this.AbU.L(this.V.AP);},B$:function(Ac){if(!this.AW)return;
this.Hr=Ac;if(!!this.AW){this.U(this.AW.CA(Ac,1).toFixed());this.T$.Q(this.AW.CA(
Ac,2).toFixed());this.AbU.Q(this.AW.CA(Ac,3).toFixed());this.An();}},_Init:function(
aArg){C.A$._Init.call(this,aArg);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI.
_Init.call(this.A8={I:this},0);A.acg.Text._Init.call(this.T$={I:this},0);A.acg.Text.
_Init.call(this.AbU={I:this},0);this.__proto__=C.AAC;this.AN.L(A.jb.Bb);this.A8.
L(A.jb.Bb);this.T$.L(A.jb.Text);this.AbU.L(A.jb.Text);this.J(this.AN,0);this.J(this.
A8,0);this.J(this.T$,0);this.J(this.AbU,0);this.T$.S(A.aaL(A.fl.Ah));this.AbU.S(
A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AN._Done(
);this.A8._Done();this.T$._Done();this.AbU._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AN._ReInit();this.A8._ReInit();this.T$._ReInit(
);this.AbU._ReInit();this.T$.S(A.aaL(A.fl.Ah));this.AbU.S(A.aaL(A.fl.Ah));},_Mark:
function(D){var B;C.A$._Mark.call(this,D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListItem"
};C.Adq={Oj:null,So:null,L$:null,Init:function(aArg){var B;A.zX([this,this.A0E],[
B=A._GetAutoObject(A.Device.Device),B.Au2,B.Axm],0);A.zX([this,this.AcQ],[B=A._GetAutoObject(
A.Device.Device),B.AuZ,B.Axl],0);A.pe([this,this.AcQ],this);},Ai:function(Ae){C.
AC.Ai.call(this,Ae);this.So.Q(A._GetAutoObject(A.Device.Device).Aak.toFixed()+AwO
);this.Oj.Y(A._GetAutoObject(A.Device.Device).AlW);},AcQ:function(H){this.An();}
,MI:function(H){A._GetAutoObject(C.AZ).Fk();},A0E:function(H){if(A._GetAutoObject(
A.Device.Device).AlW===false){this.Oj.Y(false);A._GetAutoObject(C.AZ).Fk();}else
this.Oj.Y(true);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.acg.Text._Init.
call(this.Oj={I:this},0);A.acg.Text._Init.call(this.So={I:this},0);C.L$._Init.call(
this.L$={I:this},0);this.__proto__=C.Adq;var B;this.Background.L(A.jb.C0);this.N.
Y(true);this.N.BU(A.aaR(A.acf.Ok));this.Oj.G(AFF);this.Oj.Q(A.aaR(A.acf.Oj));this.
Oj.L(A.jb.Text);this.Oj.Y(false);this.So.G(AFG);this.So.Q(AFH);this.So.L(A.jb.Text
);this.L$.G(AFI);this.J(this.Oj,0);this.J(this.So,0);this.J(this.L$,0);this.N.Ci=[
this,this.MI];this.Oj.S(A.aaL(A.fl.Ah));this.So.S(A.aaL(A.fl.Ah));this.L$.Av([B=
A._GetAutoObject(A.Device.Device),B.AuZ,B.Axl]);this.L$.A7C([B=A._GetAutoObject(
A.Device.Device),B.Au2,B.Axm]);this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.Oj._Done();this.So._Done();this.L$._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Oj._ReInit();this.So._ReInit();this.L$._ReInit(
);this.N.BU(A.aaR(A.acf.Ok));this.Oj.Q(A.aaR(A.acf.Oj));this.Oj.S(A.aaL(A.fl.Ah)
);this.So.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Oj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.L$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeScreen"
};C.L$={Adl:null,Adm:null,OT:function(H){var F;if(!!this.R){this.AZL();var Acu=(
F=this.R,F[1].call(F[0]));if(Acu>20)this.Og.L(A.jb.EX);else this.Og.L(A.jb.FU);this.
Og.L((this.Og.AP&0x00FFFFFF)|(this.Ak1(Acu,0,20)<<24));this.Te.L((this.Te.AP&0x00FFFFFF
)|(this.Ak1(Acu,21,40)<<24));this.Tf.L((this.Tf.AP&0x00FFFFFF)|(this.Ak1(Acu,41,
60)<<24));this.Adl.L((this.Adl.AP&0x00FFFFFF)|(this.Ak1(Acu,61,80)<<24));this.Adm.
L((this.Adm.AP&0x00FFFFFF)|(this.Ak1(Acu,81,100)<<24));}},AZL:function(){var F;if(
!!this.R){if((F=this.R,F[1].call(F[0]))>80)this.Uy=this.Adm;else if((F=this.R,F[
1].call(F[0]))>60)this.Uy=this.Adl;else if((F=this.R,F[1].call(F[0]))>40)this.Uy=
this.Tf;else if((F=this.R,F[1].call(F[0]))>20)this.Uy=this.Te;else this.Uy=this.
Og;}else this.Uy=null;},_Init:function(aArg){C.Oh._Init.call(this,aArg);A.acg.AI.
_Init.call(this.Adl={I:this},0);A.acg.AI._Init.call(this.Adm={I:this},0);this.__proto__=
C.L$;this.G(AwP);this.NA.G(AwP);this.Og.G(ATA);this.Te.G(ATB);this.Tf.G(ATC);this.
Adl.G(ATD);this.Adl.L(A.jb.EX);this.Adm.G(ATE);this.Adm.L(A.jb.EX);this.J(this.Adl
,0);this.J(this.Adm,0);this.NA.Ax(A.aaL(A.ach.AKW));},_Done:function(){this.__proto__=
C.Oh;this.Adl._Done();this.Adm._Done();C.Oh._Done.call(this);},_ReInit:function(
){C.Oh._ReInit.call(this);this.Adl._ReInit();this.Adm._ReInit();},_Mark:function(
D){var B;C.Oh._Mark.call(this,D);if((B=this.Adl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Adm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BatteryIndicatorBig"
};C.ASI={NP:null,Lf:null,Akp:null,Zh:null,Zg:null,CT:function(){this.An();},Init:
function(aArg){var B;A.zX([this,this.Ao1],[B=A._GetAutoObject(A.Device.Device),B.
AQH,B.AXZ],0);A.zX([this,this.Ao1],[B=A._GetAutoObject(A.Device.Device),B.AQK,B.
AX1],0);A.zX([this,this.Ao1],[B=A._GetAutoObject(A.Device.Device),B.A6H,B.A_z],0
);A.pe([this,this.Ao1],this);},Ai:function(Ae){C.AC.Ai.call(this,Ae);this.Hu(this
);this.Az1(this);this.Byq(this);this.DM(this);},BwQ:function(H){A._GetAutoObject(
A.Device.Device).ArG();},Ao1:function(H){this.An();},Hu:function(H){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.
Zh.Y(false);break;case 4:{var A1k;if(!A._GetAutoObject(A.Device.Device).AeG)A1k=
0;else A1k=((A._GetAutoObject(A.Device.Device).Aws*100)/A._GetAutoObject(A.Device.
Device).AeG)|0;this.Zh.Bx(A1k);this.Zh.Y(true);}break;default:A.ab5("%s%e",ArZ,A.
_GetAutoObject(A.Device.Device).SyncState);}},Byq:function(H){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.
Background.L(A.jb.CM);this.Lf.L(A.jb.Text);this.NP.L(A.jb.Text);}break;case 7:{this.
Background.L(A.jb.FU);this.Lf.L(A.jb.Bh);this.NP.L(A.jb.Bh);}break;default:A.ab5(
"%s%e",ArZ,A._GetAutoObject(A.Device.Device).SyncState);}},DM:function(H){switch(
A._GetAutoObject(A.Device.Device).SyncState){case 1:case 2:case 3:case 4:case 5:
case 0:case 6:{this.N.CS(null);this.N.Cu=null;this.N.BU(A.jV);this.N.Ci=null;}break;
case 7:{this.N.CS(null);this.N.Cu=null;this.N.BU(A.aaR(A.acf.Ok));this.N.Ci=[this
,this.BwQ];}break;default:A.ab5("%s%e",ArZ,A._GetAutoObject(A.Device.Device).SyncState
);}},Az1:function(H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 0:
case 6:this.Lf.Q(A.aaR(A.acf.Bmm));break;case 1:this.Lf.Q(A.aaR(A.acf.Bmj));break;
case 2:this.Lf.Q(A.aaR(A.acf.Bmg));break;case 3:this.Lf.Q(A.aaR(A.acf.Bmk));break;
case 4:this.Lf.Q((A.aaR(A.acf.Bmi)+AwQ)+A._GetAutoObject(A.Device.Helper).NO(A._GetAutoObject(
A.Device.Helper).NO(A.aaR(A.acf.Bk4),Q0,A._GetAutoObject(A.Device.Device).Aws.toFixed(
)),AwR,A._GetAutoObject(A.Device.Device).AeG.toFixed()));break;case 5:this.Lf.Q(
A.aaR(A.acf.Bml));break;case 7:this.Lf.Q(A.aaR(A.acf.Bmh));break;default:A.ab5("%s%e"
,ArZ,A._GetAutoObject(A.Device.Device).SyncState);}},_Init:function(aArg){C.AC._Init.
call(this,aArg);C.CP._Init.call(this.NP={I:this},0);C.CP._Init.call(this.Lf={I:this
},0);A.acg.Am._Init.call(this.Akp={I:this},0);A.acq.ABR._Init.call(this.Zh={I:this
},0);A.acq.ABS._Init.call(this.Zg={I:this},0);this.__proto__=C.ASI;this.N.Y(true
);this.NP.G(ATF);this.NP.Q(A.aaR(A.acf.NP));this.Lf.AV(0x3F);this.Lf.G(ATG);this.
Lf.A2(0x12);this.Akp.G(ATH);this.Akp.L(A.jb.AY);this.Zh.G(ATI);this.Zh.Ar(false);
this.Zh.Bx(0);this.Zg.Bkn(0);this.Zg.A7Z(0);this.Zg.A7X(A.jb.AY);this.Zg.A7W(0);
this.Zg.AEm(AFJ);this.J(this.NP,0);this.J(this.Lf,0);this.J(this.Akp,0);this.J(this.
Zh,0);this.NP.S(A.aaL(A.fl.Ey));this.NP.A5(A.aaL(A.fl.Ah));this.NP.CC(A.aaL(A.fl.
Ak));this.Lf.S(A.aaL(A.fl.Ah));this.Lf.A5(A.aaL(A.fl.Ak));this.Lf.CC(A.aaL(A.fl.
By));this.Akp.Ax(A.aaL(A.ach.AOP));this.Zh.OnSetAppearance(this.Zg);this.Zg.A7Y(
A.aaL(A.ach.ND));this.Zg.A7V(A.aaL(A.ach.ND));this.Init(aArg);},_Done:function(){
this.__proto__=C.AC;this.NP._Done();this.Lf._Done();this.Akp._Done();this.Zh._Done(
);this.Zg._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this
);this.NP._ReInit();this.Lf._ReInit();this.Akp._ReInit();this.Zh._ReInit();this.
Zg._ReInit();this.NP.Q(A.aaR(A.acf.NP));this.NP.S(A.aaL(A.fl.Ey));this.NP.A5(A.aaL(
A.fl.Ah));this.NP.CC(A.aaL(A.fl.Ak));this.Lf.S(A.aaL(A.fl.Ah));this.Lf.A5(A.aaL(
A.fl.Ak));this.Lf.CC(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.NP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lf)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Akp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SyncScreen"};C.Ap1={_Init:function(aArg){C.ABJ._Init.call(this,aArg
);this.__proto__=C.Ap1;this.A7o(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cv:A.abi(3,0,{0:2,2:1}),Dt:function(
){return 3;},C$:function(aIndex){if(aIndex>=3)return-1;return this.Cv.Get(aIndex
);},Gx:function(aIndex){return this.GenderToString.B0(this.C$(aIndex));},DO:function(
A1){var P=0;while(P<3){if(this.Cv.Get(P)===A1)return P;P=P+1;}return-1;},Hj:function(
){var P=0;var max=-1;while(P<3){if(this.Cv.Get(P)>max)max=this.Cv.Get(P);P=P+1;}
return max;},Av:function(E){C.AB.Av.call(this,E);if(!!this.Animal)this.Animal.JG(
E);},LO:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this,
this.Afh],[B=this.Animal,B.V0,B.JG],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.Afh],[B=this.Animal,B.V0,B.JG],0);A.pe([this,this.Afh],this);},Afh:function(
H){if(!!this.Animal)this.R=this.Animal.Gender;else this.R=2;A.abo([this,this.Ce,
this.Cg],0);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cv=[]).__proto__=C.Gender.Cv;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AB;this.GenderToString._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cv:A.abi(4,0,{1:1,2:2,3:3}),Dt:function(){return 4;},C$:function(aIndex){if(
aIndex>=4)return-1;return this.Cv.Get(aIndex);},Gx:function(aIndex){return this.
BirthTypeToString.B0(this.C$(aIndex));},DO:function(A1){var P=0;while(P<4){if(this.
Cv.Get(P)===A1)return P;P=P+1;}return-1;},Hj:function(){var P=0;var max=-1;while(
P<4){if(this.Cv.Get(P)>max)max=this.Cv.Get(P);P=P+1;}return max;},Av:function(E){
C.AB.Av.call(this,E);if(!!this.Animal)this.Animal.AjN(E);},AY2:function(H){if(!!
this.Animal)this.R=this.Animal.BirthType;else this.R=0;A.abo([this,this.Ce,this.
Cg],0);},LO:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.z$([this
,this.AY2],[B=this.Animal,B.AQk,B.AjN],0);this.Animal=E;if(!!this.Animal)A.zX([this
,this.AY2],[B=this.Animal,B.AQk,B.AjN],0);A.pe([this,this.AY2],this);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cv=[]).__proto__=C.BirthType.Cv;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AB;this.BirthTypeToString._Done();C.AB._Done.call(this
);},_ReInit:function(){C.AB._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,AbN:null,Dt:
function(){return A._GetAutoObject(A.Device.Helper).Adg.Mq;},C$:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).Adg.Mq)return-1;return A._GetAutoObject(
A.Device.Helper).Adg.Get(aIndex);},Gx:function(aIndex){return this.AbN.B0(this.C$(
aIndex));},DO:function(A1){var P=0;while(P<A._GetAutoObject(A.Device.Helper).Adg.
Mq){if(A._GetAutoObject(A.Device.Helper).Adg.Get(P)===A1)return P;P=P+1;}return-
1;},Hj:function(){var P=0;var max=-1;while(P<A._GetAutoObject(A.Device.Helper).T7.
Mq){if(A._GetAutoObject(A.Device.Helper).T7.Get(P)>max)max=A._GetAutoObject(A.Device.
Helper).T7.Get(P);P=P+1;}return max;},Av:function(E){C.AB.Av.call(this,E);if(!!this.
Animal)this.Animal.DS(E);},AYU:function(H){if(!!this.Animal)this.R=this.Animal.AnimalType;
else this.R=0;A.abo([this,this.Ce,this.Cg],0);},LO:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.AYU],[B=this.Animal,B.Px,B.DS],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.AYU],[B=this.Animal,B.Px,B.DS],0);A.pe([
this,this.AYU],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.AbN={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AB;this.AbN._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.AbN._ReInit();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AbN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.ASo={Init:function(aArg){var B;A.pe([this,this.AeZ],this);A.zX([this,this.AeZ
],[B=A._GetAutoObject(A.Device.Device),B.AqA,B.Asi],0);},A1r:function(H){A._GetAutoObject(
A.Device.Device).A6(38,true,A.jV,0,[this,this.A_P]);},A03:function(H){var B;var At=(
A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(
A.Device.Device).Ars(this);},AZj:function(H){var F;if(this.A3===1){var BL=this.DZ;
this.DZ=this.DZ-10;if(this.DZ<this.Ak9)this.DZ=this.Ak9;if(this.DZ<A._GetAutoObject(
A.Device.Device).Zj)this.DZ=A._GetAutoObject(A.Device.Device).Zj;if(this.DL!==BL
){if(!!this.JJ)(F=this.JJ,F[2].call(F[0],this.DZ));A.abo(this.JJ,0);}}if(this.A3===
2){var BL=this.DL;this.DL=this.DL-10;if(this.DL<this.DZ)this.DL=this.DZ;if(this.
DL!==BL){if(!!this.JI)(F=this.JI,F[2].call(F[0],this.DL));A.abo(this.JI,0);}}this.
DM(this);this.An();},AZX:function(H){var F;if(this.A3===1){var BL=this.DZ;this.DZ=
this.DZ+10;if(this.DZ>this.DL)this.DZ=this.DL;if(this.DZ!==BL){if(!!this.JJ)(F=this.
JJ,F[2].call(F[0],this.DZ));A.abo(this.JJ,0);}}if(this.A3===2){var BL=this.DL;this.
DL=this.DL+10;if(this.DL>this.Ak4)this.DL=this.Ak4;if(this.DL!==BL){if(!!this.JI
)(F=this.JI,F[2].call(F[0],this.DL));A.abo(this.JI,0);}}this.DM(this);this.An();
},Hu:function(H){this.Pq.Q(AFK+A._GetAutoObject(A.Device.Converter).Akk(this.DZ)
);this.Pr.Q(AFK+A._GetAutoObject(A.Device.Converter).Akk(this.DL));this.R9.Q(A._GetAutoObject(
A.acj.Temperature).Ak2());},AZN:function(Aso){if(Aso===1)return this.Pq;else if(
Aso===2)return this.Pr;else return null;},_Init:function(aArg){C.AbM._Init.call(
this,aArg);this.__proto__=C.ASo;this.Ak4=5000;this.Ak9=3000;this.U(A.aaR(A.acf.Aqp
));this.Background.G(AeW);this.V.G(BC);this.V.Q(A.aaR(A.acf.AFg));this.V.A2(0x12
);this.Init(aArg);},_ReInit:function(){C.AbM._ReInit.call(this);this.U(A.aaR(A.acf.
Aqp));this.V.Q(A.aaR(A.acf.AFg));},_className:"Application::SettingsItemThresholdsTemp"
};C.Er={Background:null,_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.
AI._Init.call(this.Background={I:this},0);this.__proto__=C.Er;this.G(BC);this.Background.
G(BC);this.Background.L(A.jb.CM);this.J(this.Background,0);},_Done:function(){this.
__proto__=A.Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AQ:null,Aan:null,Aar:null,Aap:
null,Background:null,Aam:null,Aaq:null,Aao:null,AiZ:null,Aqv:null,Vb:null,A4:0,Bww:
function(H){if(this.AiZ.CH===6){if(this.A4===1)this.Am2(2);else if(this.A4===2)this.
Am2(3);else this.Am2(1);}else if(this.AiZ.CH===7){if(this.A4===3)this.Am2(2);else
if(this.A4===2)this.Am2(1);else this.Am2(3);}},Am2:function(E){if(this.A4===E)return;
this.A4=E;switch(this.A4){case 3:this.Background.G(this.Aam.M);break;case 2:this.
Background.G(this.Aaq.M);break;case 1:this.Background.G(this.Aao.M);break;default:
this.Background.G(AnB);}},Ja:function(H){var B;if(!!this.AQ)(B=this.AQ)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Hb._Init.
call(this.Aan={I:this},0);A.acg.Hb._Init.call(this.Aar={I:this},0);A.acg.Hb._Init.
call(this.Aap={I:this},0);A.acg.Am._Init.call(this.Background={I:this},0);A.acg.
AdG._Init.call(this.Aam={I:this},0);A.acg.AdG._Init.call(this.Aaq={I:this},0);A.
acg.AdG._Init.call(this.Aao={I:this},0);A.Core.BO._Init.call(this.AiZ={I:this},0
);A.Core.BO._Init.call(this.Aqv={I:this},0);A.Graphics.AKP._Init.call(this.Vb={I:
this},0);this.__proto__=C.Rating;this.G(ATJ);this.Aan.G(AFL);this.Aan.L(A.jb.Text
);this.Aan.Am0(Akw);this.Aan.NJ(3);this.Aan.Y(true);this.Aar.G(AFM);this.Aar.L(A.
jb.Text);this.Aar.Am0(Akw);this.Aar.NJ(3);this.Aar.Y(true);this.Aap.G(AwS);this.
Aap.L(A.jb.Text);this.Aap.Am0(Akw);this.Aap.NJ(3);this.Aap.Y(true);this.Background.
G(AnB);this.Background.L(A.jb.AY);this.Aam.G(AFL);this.Aam.L(A.jb.EX);this.Aam.Am0(
Akw);this.Aam.Y(true);this.Aaq.G(AFM);this.Aaq.L(A.jb.HY);this.Aaq.Am0(Akw);this.
Aaq.Y(true);this.Aao.G(AwS);this.Aao.L(A.jb.FU);this.Aao.Am0(Akw);this.Aao.Y(true
);this.AiZ.Filter=147;this.Aqv.Filter=1;this.Vb.Bi4(360);this.Vb.Bkc(22);this.Vb.
Bkm(2);this.J(this.Aan,0);this.J(this.Aar,0);this.J(this.Aap,0);this.J(this.Background
,0);this.J(this.Aam,0);this.J(this.Aaq,0);this.J(this.Aao,0);this.Aan.YR(this.Vb
);this.Aar.YR(this.Vb);this.Aap.YR(this.Vb);this.Background.Ax(A.aaL(A.ach.NC));
this.Aam.YR(this.Vb);this.Aaq.YR(this.Vb);this.Aao.YR(this.Vb);this.AiZ.BP=[this
,this.Bww];this.Aqv.BP=[this,this.Ja];},_Done:function(){this.__proto__=A.Core.O;
this.Aan._Done();this.Aar._Done();this.Aap._Done();this.Background._Done();this.
Aam._Done();this.Aaq._Done();this.Aao._Done();this.AiZ._Done();this.Aqv._Done();
this.Vb._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Aan._ReInit();this.Aar._ReInit();this.Aap._ReInit();this.Background.
_ReInit();this.Aam._ReInit();this.Aaq._ReInit();this.Aao._ReInit();this.AiZ._ReInit(
);this.Aqv._ReInit();this.Vb._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aan)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aar)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Aam)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aaq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Aao)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AiZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aqv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Vb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"
};C.Aru={AjE:null,Arc:null,Background:null,To:null,Tk:null,Abg:null,Abf:null,Abe:
null,AbR:null,AbQ:null,AbP:null,AbI:null,AbH:null,Aa_:null,Aa9:null,Aby:null,Abx:
null,ApF:null,Init:function(aArg){},BgW:function(H){this.Abg.Q(ATK);this.Abf.Q(A.
jV);this.Abe.Q(A.jV);this.AbR.Q(ATL);this.AbQ.Q(A.jV);this.AbP.Q(A.jV);this.AbI.
Q(A.jV);this.AbH.Q(A.jV);this.Aa_.Q(A.jV);this.Aa9.Q(A.jV);this.Aby.Q(A.jV);this.
Abx.Q(A.jV);},BkM:function(H){this.Tk.Y(true);this.To.Y(true);var Iq=this.Ia();if(
!Iq)return;this.To.Q(Iq.GetFPS().toFixed()+ATM);this.Tk.Q(ATN);this.Tk.L(0xFFFFFFFF
);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(
this.AjE={I:this},0);A.Core.Timer._Init.call(this.Arc={I:this},0);A.acg.AI._Init.
call(this.Background={I:this},0);A.acg.Text._Init.call(this.To={I:this},0);A.acg.
Text._Init.call(this.Tk={I:this},0);A.acg.Text._Init.call(this.Abg={I:this},0);A.
acg.Text._Init.call(this.Abf={I:this},0);A.acg.Text._Init.call(this.Abe={I:this}
,0);A.acg.Text._Init.call(this.AbR={I:this},0);A.acg.Text._Init.call(this.AbQ={I:
this},0);A.acg.Text._Init.call(this.AbP={I:this},0);A.acg.Text._Init.call(this.AbI={
I:this},0);A.acg.Text._Init.call(this.AbH={I:this},0);A.acg.Text._Init.call(this.
Aa_={I:this},0);A.acg.Text._Init.call(this.Aa9={I:this},0);A.acg.Text._Init.call(
this.Aby={I:this},0);A.acg.Text._Init.call(this.Abx={I:this},0);A.acg.AI._Init.call(
this.ApF={I:this},0);this.__proto__=C.Aru;this.G(Ab_);this.Ar(false);this.AjE.QJ(
2000);this.AjE.V2(1);this.AjE.Ar(true);this.Arc.Ar(true);this.Background.AV(0x3F
);this.Background.G(Ab_);this.Background.L(0x78000000);this.To.G(Ar0);this.To.A2(
0x14);this.To.Q(A.jV);this.To.L(0xFFFFFC00);this.To.Y(false);this.Tk.G(AFN);this.
Tk.A2(0x11);this.Tk.Q(A.jV);this.Tk.Y(false);this.Abg.G(AFO);this.Abg.A2(0x11);this.
Abg.Q(A.jV);this.Abf.G(AwT);this.Abf.A2(0x11);this.Abf.Q(A.jV);this.Abe.G(AFP);this.
Abe.A2(0x14);this.Abe.Q(A.jV);this.AbR.G(AwU);this.AbR.A2(0x11);this.AbR.Q(A.jV);
this.AbQ.G(ATO);this.AbQ.A2(0x11);this.AbQ.Q(A.jV);this.AbP.G(ATP);this.AbP.A2(0x14
);this.AbP.Q(A.jV);this.AbI.G(ATQ);this.AbI.A2(0x11);this.AbI.Q(A.jV);this.AbH.G(
ATR);this.AbH.A2(0x14);this.AbH.Q(A.jV);this.Aa_.G(AFQ);this.Aa_.A2(0x11);this.Aa_.
Q(A.jV);this.Aa9.G(ATS);this.Aa9.A2(0x14);this.Aa9.Q(A.jV);this.Aby.G(OL);this.Aby.
A2(0x11);this.Aby.Q(A.jV);this.Abx.G(AwV);this.Abx.A2(0x14);this.Abx.Q(A.jV);this.
ApF.G(ATT);this.J(this.Background,0);this.J(this.To,0);this.J(this.Tk,0);this.J(
this.Abg,0);this.J(this.Abf,0);this.J(this.Abe,0);this.J(this.AbR,0);this.J(this.
AbQ,0);this.J(this.AbP,0);this.J(this.AbI,0);this.J(this.AbH,0);this.J(this.Aa_,
0);this.J(this.Aa9,0);this.J(this.Aby,0);this.J(this.Abx,0);this.J(this.ApF,0);this.
AjE.M6=[this,this.BgW];this.Arc.M6=[this,this.BkM];this.To.S(A.aaL(A.fl.Ak));this.
Tk.S(A.aaL(A.fl.Ak));this.Abg.S(A.aaL(A.fl.Ak));this.Abf.S(A.aaL(A.fl.Ak));this.
Abe.S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.AbQ.S(A.aaL(A.fl.Ak));this.
AbP.S(A.aaL(A.fl.Ak));this.AbI.S(A.aaL(A.fl.Ak));this.AbH.S(A.aaL(A.fl.Ak));this.
Aa_.S(A.aaL(A.fl.Ak));this.Aa9.S(A.aaL(A.fl.Ak));this.Aby.S(A.aaL(A.fl.Ak));this.
Abx.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;
this.AjE._Done();this.Arc._Done();this.Background._Done();this.To._Done();this.Tk.
_Done();this.Abg._Done();this.Abf._Done();this.Abe._Done();this.AbR._Done();this.
AbQ._Done();this.AbP._Done();this.AbI._Done();this.AbH._Done();this.Aa_._Done();
this.Aa9._Done();this.Aby._Done();this.Abx._Done();this.ApF._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AjE._ReInit();this.
Arc._ReInit();this.Background._ReInit();this.To._ReInit();this.Tk._ReInit();this.
Abg._ReInit();this.Abf._ReInit();this.Abe._ReInit();this.AbR._ReInit();this.AbQ.
_ReInit();this.AbP._ReInit();this.AbI._ReInit();this.AbH._ReInit();this.Aa_._ReInit(
);this.Aa9._ReInit();this.Aby._ReInit();this.Abx._ReInit();this.ApF._ReInit();this.
To.S(A.aaL(A.fl.Ak));this.Tk.S(A.aaL(A.fl.Ak));this.Abg.S(A.aaL(A.fl.Ak));this.Abf.
S(A.aaL(A.fl.Ak));this.Abe.S(A.aaL(A.fl.Ak));this.AbR.S(A.aaL(A.fl.Ak));this.AbQ.
S(A.aaL(A.fl.Ak));this.AbP.S(A.aaL(A.fl.Ak));this.AbI.S(A.aaL(A.fl.Ak));this.AbH.
S(A.aaL(A.fl.Ak));this.Aa_.S(A.aaL(A.fl.Ak));this.Aa9.S(A.aaL(A.fl.Ak));this.Aby.
S(A.aaL(A.fl.Ak));this.Abx.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O.
_Mark.call(this,D);if((B=this.AjE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Arc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.To)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tk)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Abg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Abe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AbR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbQ)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AbP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aa9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aby)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abx)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.ApF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.AEY={Ft:null,Df:null,As:null,Jk:null,HB:null,TM:null,Bb:null,RY:null,Gh:null
,Gg:null,FJ:0,A3:0,Bgs:false,Init:function(aArg){},Ai:function(Ae){C.Dj.Ai.call(
this,Ae);this.Hl.Y(false);this.HU.Y(false);if(!!this.Df){this.RY.Q(this.As.Format(
ATU));this.TM.Q(this.As.Format(ATV));}if(this.A3===1){this.HB.Y(true);this.HB.G(
this.RY.M);this.HB.L(A.jb.Bh);this.RY.L(this.Background.AP);this.TM.L(A.jb.Bh);}
else if(this.A3===2){this.HB.Y(true);this.HB.G(this.TM.M);this.HB.L(A.jb.Bh);this.
RY.L(A.jb.Bh);this.TM.L(this.Background.AP);}else{this.HB.Y(false);this.RY.L(this.
V.AP);this.Bb.L(this.V.AP);this.TM.L(this.V.AP);}},P7:function(H){if(this.Fr===1
)A.pe([this,this.UD],this);else if(this.Fr===4)A.pe([this,this.AhX],this);else if(
this.Fr===5)A.pe([this,this.AhJ],this);C.Dj.P7.call(this,H);},JW:function(H){switch(
this.A3){case 0:C.Dj.JW.call(this,H);break;case 2:break;default:this.Afs(this);}
},JR:function(H){switch(this.A3){case 0:C.Dj.JR.call(this,H);break;default:this.
AhI(this);}},AcR:function(H){var F;if(!!this.Df)this.TP((F=this.Df,F[1].call(F[0
])));},Abu:function(E){if(A.aaZ(this.Df,E))return;if(!!this.Df)A.z$([this,this.AcR
],this.Df,0);this.Df=E;if(!!E)A.zX([this,this.AcR],E,0);if(!!E)A.pe([this,this.AcR
],this);},TP:function(E){if(this.FJ===E)return;this.FJ=E;this.As.Initialize(this.
FJ);this.An();},Afs:function(H){this.Fr=1;this.An();if(this.Bk.Bw){A.pe([this,this.
UD],this);this.Bk.Ar(false);}this.Bk.Ar(true);},UD:function(H){this.Em(this.A3+1
);},Alj:function(H){this.Fr=4;this.An();if(this.Bk.Bw){A.pe([this,this.AhX],this
);this.Bk.Ar(false);}this.Bk.Ar(true);},Ali:function(H){this.Fr=5;this.An();if(this.
Bk.Bw){A.pe([this,this.AhJ],this);this.Bk.Ar(false);}this.Bk.Ar(true);},AhX:function(
H){var B;var F;var BL=this.FJ;if(this.A3===1)this.As.AmV(this.As.Ajh+1);if(this.
A3===2)this.As.AmY(this.As.AuU+1);this.As.Am1(0);this.TP(((B=(this.As.JF()|0))<0
)?B+0x100000000:B);if(this.FJ!==BL){if(!!this.Df)(F=this.Df,F[2].call(F[0],this.
FJ));A.abo(this.Df,0);}},AhJ:function(H){var B;var F;var BL=this.FJ;if(this.A3===
1)this.As.AmV(this.As.Ajh-1);if(this.A3===2)this.As.AmY(this.As.AuU-1);this.As.Am1(
0);this.TP(((B=(this.As.JF()|0))<0)?B+0x100000000:B);if(this.FJ!==BL){if(!!this.
Df)(F=this.Df,F[2].call(F[0],this.FJ));A.abo(this.Df,0);}},DM:function(H){var F;
if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.
ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this
,this.G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(A.aaL(A.ach.AdQ
));(F=this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=[this,this.
UD];}break;case 2:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].
call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.G0];(F=this.N,F[1].
call(F[0])).Cm(A.aaL(A.ach.Ami));(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[
1].call(F[0])).Cf=[this,this.AhI];(F=this.N,F[1].call(F[0])).C7(null);(F=this.N,
F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;}break;default:this.
Ft.Aj$((F=this.N,F[1].call(F[0])));}},Ge:function(H){this.Em(1);},G0:function(H){
this.Em(0);},Em:function(EB){var F;if(!this.A3)this.Ft.AiU((F=this.N,F[1].call(F[
0])));this.A3=EB;this.Bgs=true;if((this.A3<0)||(this.A3>2))this.A3=0;this.DM(this
);this.Gh.Bw=!!this.A3;this.Gg.Bw=!!this.A3;this.An();},AhI:function(H){if(this.
A3>1)this.Em(this.A3-1);},_Init:function(aArg){C.Dj._Init.call(this,aArg);A.Core.
Bt._Init.call(this.As={I:this},0);A.Core.BO._Init.call(this.Jk={I:this},0);A.acg.
AI._Init.call(this.HB={I:this},0);A.acg.Text._Init.call(this.TM={I:this},0);A.acg.
Text._Init.call(this.Bb={I:this},0);A.acg.Text._Init.call(this.RY={I:this},0);A.
Core.BO._Init.call(this.Gh={I:this},0);A.Core.BO._Init.call(this.Gg={I:this},0);
this.__proto__=C.AEY;this.G(Uq);this.V.Q(ATW);this.V.L(A.jb.Bh);this.Hl.Y(false);
this.HU.Y(false);this.Jk.Filter=1;this.HB.G(ATX);this.HB.L(0x55FFFFFF);this.TM.G(
ATY);this.TM.IZ(true);this.Bb.G(ATZ);this.Bb.A2(0x14);this.Bb.Q(Ar1);this.RY.G(AwW
);this.RY.IZ(true);this.RY.A2(0x14);this.Gh.Filter=4;this.Gh.Bw=false;this.Gg.Filter=
5;this.Gg.Bw=false;this.J(this.HB,0);this.J(this.TM,0);this.J(this.Bb,0);this.J(
this.RY,0);this.Jk.BP=[this,this.Afs];this.TM.S(A.aaL(A.fl.Ey));this.Bb.S(A.aaL(
A.fl.Ey));this.RY.S(A.aaL(A.fl.Ey));this.Gh.BP=[this,this.Alj];this.Gh.DR=[this,
this.AhX];this.Gg.BP=[this,this.Ali];this.Gg.DR=[this,this.AhJ];this.Ft=A._NewObject(
C.AdK,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Dj;this.As._Done();
this.Jk._Done();this.HB._Done();this.TM._Done();this.Bb._Done();this.RY._Done();
this.Gh._Done();this.Gg._Done();C.Dj._Done.call(this);},_ReInit:function(){C.Dj.
_ReInit.call(this);this.As._ReInit();this.Jk._ReInit();this.HB._ReInit();this.TM.
_ReInit();this.Bb._ReInit();this.RY._ReInit();this.Gh._ReInit();this.Gg._ReInit(
);this.TM.S(A.aaL(A.fl.Ey));this.Bb.S(A.aaL(A.fl.Ey));this.RY.S(A.aaL(A.fl.Ey));
},_Mark:function(D){var B;C.Dj._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Df)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.As)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TM)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gg
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemTime"};C.
CP={B3:null,Al_:null,ApT:null,Eh:null,Text:null,String:A.jV,BaM:A.jV,J1:0x12,AJj:
0,AP:0xFFFFFFFF,BaN:true,GL:function(CG){var Lu=(A.Core.APm.isPrototypeOf(CG)?CG:
null);if(!!Lu)this.ByB(this);return A.Core.O.GL.call(this,CG);},Bg:function(aSize
){A.Core.O.Bg.call(this,aSize);A.pe([this,this.Atx],this);},C_:function(aFilter){
return A.abh(this.Text.C_(),this.M.slice(0,2));},Q:function(E){if(this.String===
E)return;this.String=E;if(this.BaN){this.BaM=E;this.BaN=false;}this.AJj=E.length;
A.pe([this,this.Atx],this);},S:function(E){if(this.B3===E)return;this.B3=E;A.pe([
this,this.Atx],this);},A5:function(E){if(this.Al_===E)return;this.Al_=E;A.pe([this
,this.Atx],this);},CC:function(E){if(this.ApT===E)return;this.ApT=E;A.pe([this,this.
Atx],this);},A2:function(E){if(E===this.J1)return;this.J1=E;this.Text.A2(E);},Atx:
function(H){var B;var AJp=0;if(!this.AJj){this.Text.Y(false);return;}this.Text.Y(
true);this.Text.Q(this.String);this.Text.KF(false);if(!!this.B3){AJp=this.B3.XX(
this.String,0,this.AJj);if(AJp<(((B=this.M)[2]-B[0])-(2*this.Text.I0))){this.Text.
S(this.B3);return;}}this.Text.KF(true);if(!!this.Al_){AJp=this.Al_.XX(this.String
,0,this.AJj);this.Text.S(this.Al_);if((AJp<(((B=this.M)[2]-B[0])-(2*this.Text.I0
)))&&(((B=this.Text.C_())[3]-B[1])<=((B=this.M)[3]-B[1])))return;}if(!!this.ApT){
this.Text.S(this.ApT);if(((B=this.Text.C_())[3]-B[1])>((B=this.M)[3]-B[1]))this.
Text.Bke((((this.Text.B3.Ascent+this.Text.B3.Descent)*75)/100)|0);}},L:function(
E){if(E===this.AP)return;this.AP=E;this.Text.L(E);},ByB:function(H){this.Q(this.
BaM);},QI:function(E){if(A.aa0(this.Eh,E))return;this.Eh=E;this.Text.QI(E);},AQj:
function(){return A.abh(this.Text.C_(),this.M.slice(0,2));},Aes:function(AnZ){return A.
abf(this.M.slice(0,2),this.Text.Aes(AnZ));},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.CP;
this.G(AFR);this.Ar(false);this.Text.AV(0x3F);this.Text.G(AFR);this.Text.Q(SI);this.
J(this.Text,0);},_Done:function(){this.__proto__=A.Core.O;this.Text._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Text._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.B3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Al_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.ApT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Eh)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AutoSizeText"};C.Aje={Z:null,Iz:null,Ad0:null,IV:null,MU:null,AdU:
null,AdZ:null,AdY:null,AdV:null,AdX:null,AdW:null,MV:null,NE:null,Mf:null,C5:function(
E){C.Vq.C5.call(this,E);this.Iz.L(E);this.Ad0.L(E);this.IV.L(E);this.MU.L(E);this.
Mf.L(E);this.AdU.L(E);this.MV.L(E);this.NE.L(E);this.AdZ.L(E);this.AdY.L(E);this.
AdV.L(E);this.AdX.L(E);this.AdW.L(E);},En:function(H){C.Vq.En.call(this,H);this.
Xe(8,1,this.MU);this.Xe(12,1,this.Mf);this.Xe(11,1,this.AdU);this.Xe(7,1,this.MV
);this.Xe(14,1,this.NE);this.Xe(1,4,this.Iz);this.Xe(1,1,this.Ad0);this.Xe(4,1,this.
IV);this.Xe(22,1,this.AdZ);this.Xe(26,1,this.AdY);this.Xe(30,1,this.AdV);this.Xe(
19,1,this.AdX);this.Xe(31,1,this.AdW);this.Text.Y(!this.Z.Vj(null,0x1));},Xe:function(
AHD,EC,Ae_){var AzJ=false;if(!!A._GetAutoObject(A.Device.Device).Aq.Filter){var AcD=
A._GetAutoObject(A.Device.Device).Aq.Filter.DW(AHD,EC);if(!!AcD){AzJ=true;switch(
AHD){case 14:{var Ax4=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AcD)?AcD:
null);if(!!Ax4)Ae_.Ax(A._GetAutoObject(A.Device.Converter).A2y(Ax4.A4));}break;case
7:{var Ax4=(A.Device.GenderFilterCriterion.isPrototypeOf(AcD)?AcD:null);if(!!Ax4
)Ae_.Ax(A._GetAutoObject(A.Device.Converter).Amb(Ax4.A4));}break;case 1:if(EC===
4)Ae_.Ax(A.aaL(A.ach.AB8));else if(AcD.Operator===4)AzJ=false;break;case 22:switch(
AcD.Operator){case 0:case 3:Ae_.Ax(A.aaL(A.ach.AOC));break;default:Ae_.Ax(A.aaL(
A.ach.Aml));}break;case 26:switch(AcD.Operator){case 0:case 3:Ae_.Ax(A.aaL(A.ach.
AOA));break;default:Ae_.Ax(A.aaL(A.ach.ABW));}break;default:;}}else if((AHD===1)&&(
EC===4)){AzJ=true;Ae_.Ax(A.aaL(A.ach.AdR));}}else if((AHD===1)&&(EC===4)){AzJ=true;
Ae_.Ax(A.aaL(A.ach.AdR));}Ae_.Y(AzJ);},_Init:function(aArg){C.Vq._Init.call(this
,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.Am._Init.call(this.Iz={I:this
},0);A.acg.Am._Init.call(this.Ad0={I:this},0);A.acg.Am._Init.call(this.IV={I:this
},0);A.acg.Am._Init.call(this.MU={I:this},0);A.acg.Am._Init.call(this.AdU={I:this
},0);A.acg.Am._Init.call(this.AdZ={I:this},0);A.acg.Am._Init.call(this.AdY={I:this
},0);A.acg.Am._Init.call(this.AdV={I:this},0);A.acg.Am._Init.call(this.AdX={I:this
},0);A.acg.Am._Init.call(this.AdW={I:this},0);A.acg.Am._Init.call(this.MV={I:this
},0);A.acg.Am._Init.call(this.NE={I:this},0);A.acg.Am._Init.call(this.Mf={I:this
},0);this.__proto__=C.Aje;this.Z.AV(0x3F);this.Z.G(AT0);this.Z.J$(3);this.Iz.G(AFS
);this.Ad0.G(AT1);this.Ad0.Aj(true);this.IV.G(AT2);this.IV.Aj(true);this.MU.G(AT3
);this.MU.Aj(true);this.AdU.G(AT4);this.AdU.Aj(true);this.AdZ.G(AFT);this.AdZ.Aj(
true);this.AdY.G(AFT);this.AdY.Aj(true);this.AdV.G(AT5);this.AdV.Aj(true);this.AdX.
G(AwX);this.AdX.Aj(true);this.AdW.G(AwX);this.AdW.Aj(true);this.MV.G(AFU);this.MV.
Aj(true);this.NE.G(AFV);this.NE.Aj(true);this.Text.Q(A.aaR(A.acf.None));this.Mf.
G(AFU);this.Mf.Aj(true);this.Kh(this.Tv,-3);this.Kh(this.DY,-3);this.Kh(this.A8,-
3);this.Kh(this.AN,-2);this.J(this.Z,-2);this.J(this.Iz,-2);this.J(this.Ad0,-2);
this.J(this.IV,-2);this.J(this.MU,-2);this.J(this.AdU,-2);this.J(this.AdZ,-2);this.
J(this.AdY,-2);this.J(this.AdV,-2);this.J(this.AdX,-2);this.J(this.AdW,-2);this.
J(this.MV,-2);this.J(this.NE,-2);this.J(this.Mf,0);this.Iz.Ax(A.aaL(A.ach.AdR));
this.Ad0.Ax(A.aaL(A.ach.AOr));this.IV.Ax(A.aaL(A.ach.ANR));this.MU.Ax(A.aaL(A.ach.
AB2));this.AdU.Ax(A.aaL(A.ach.AaU));this.AdZ.Ax(A.aaL(A.ach.Aml));this.AdY.Ax(A.
aaL(A.ach.ABW));this.AdV.Ax(A.aaL(A.ach.AOp));this.AdX.Ax(A.aaL(A.ach.AOq));this.
AdW.Ax(A.aaL(A.ach.AOo));this.MV.Ax(A.aaL(A.ach.AB4));this.NE.Ax(A.aaL(A.ach.Auz
));this.Mf.Ax(A.aaL(A.ach.AB$));},_Done:function(){this.__proto__=C.Vq;this.Z._Done(
);this.Iz._Done();this.Ad0._Done();this.IV._Done();this.MU._Done();this.AdU._Done(
);this.AdZ._Done();this.AdY._Done();this.AdV._Done();this.AdX._Done();this.AdW._Done(
);this.MV._Done();this.NE._Done();this.Mf._Done();C.Vq._Done.call(this);},_ReInit:
function(){C.Vq._ReInit.call(this);this.Z._ReInit();this.Iz._ReInit();this.Ad0._ReInit(
);this.IV._ReInit();this.MU._ReInit();this.AdU._ReInit();this.AdZ._ReInit();this.
AdY._ReInit();this.AdV._ReInit();this.AdX._ReInit();this.AdW._ReInit();this.MV._ReInit(
);this.NE._ReInit();this.Mf._ReInit();this.Text.Q(A.aaR(A.acf.None));},_Mark:function(
D){var B;C.Vq._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Iz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AdU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AdY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AdV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdX)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AdW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MV)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.NE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mf)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderFilter"};C.AlL={HX:null,CI:
function(H){if(A._GetAutoObject(A.Device.Device).Bq.K7())A._GetAutoObject(A.Device.
Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),0,null);this.
HX.F$();this.HX.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).X.Id);C.QT.CI.call(
this,H);},Ann:function(){C.QT.Ann.call(this);switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:{this.Background.L(A._GetAutoObject(A.acj.Temperature).BvO(
A._GetAutoObject(A.Device.Helper).X.AnimalType,A._GetAutoObject(A.Device.Device).
Ki));this.C3.L(A._GetAutoObject(A.acj.Temperature).BvR(A._GetAutoObject(A.Device.
Helper).X.AnimalType,A._GetAutoObject(A.Device.Device).Ki));this.JC.L(A._GetAutoObject(
A.acj.Temperature).BvP(A._GetAutoObject(A.Device.Helper).X.AnimalType,A._GetAutoObject(
A.Device.Device).Ki));this.Hv.L(A._GetAutoObject(A.acj.Temperature).BvQ(A._GetAutoObject(
A.Device.Helper).X.AnimalType,A._GetAutoObject(A.Device.Device).Ki));this.Mr.L(this.
JC.AP);this.TemperatureUnit.L(this.JC.AP);}break;default:;}},Ab1:function(){C.QT.
Ab1.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 3:{this.
N.Cm(A.aaL(A.ach.AOK));this.N.C7(A.aaL(A.ach.Amk));}break;case 4:{this.N.Cm(null
);this.N.C7(A.aaL(A.ach.AuH));}break;default:;}},We:function(H){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).Ki>3240)&&(A._GetAutoObject(A.Device.Device).Ki<5460)){A._GetAutoObject(A.Device.
Device).Ag2();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}break;case
3:{this.HX.OnSetTemperature(A._GetAutoObject(A.Device.Device).Ki);var BT=A._GetAutoObject(
A.Device.Converter).ArJ(A._GetAutoObject(A.Device.Helper).X.AnimalType,A._GetAutoObject(
A.Device.Device).Ki);this.HX.OnSetRatingTemperature(BT);this.HX.Co(A._GetAutoObject(
A.Device.Device).Bq);A._GetAutoObject(C.AZ).Fk();}break;case 4:this.AIT(this);break;
default:;}},Akf:function(H){C.QT.Akf.call(this,H);switch(A._GetAutoObject(A.Device.
Device).MeasureState){case 3:A._GetAutoObject(A.Device.Device).Cj(9);break;case 4:
this.AIT(this);break;default:;}},Awx:function(){C.QT.Awx.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:this.JC.Q(A._GetAutoObject(A.acj.Temperature
).BvW(A._GetAutoObject(A.Device.Helper).X.AnimalType,A._GetAutoObject(A.Device.Device
).Ki));break;default:;}},Awy:function(){C.QT.Awy.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{A._GetAutoObject(A.Device.Device).V6(A._GetAutoObject(
A.acj.Temperature).BvS(A._GetAutoObject(A.Device.Helper).X.AnimalType,A._GetAutoObject(
A.Device.Device).Ki));this.I4.Ar(true);}break;case 4:{A._GetAutoObject(A.Device.
Device).V6(16711680);this.I4.Ar(true);}break;default:this.I4.Ar(false);}},ASj:function(
){this.C3.Ax(A.aaL(A.ach.AuG));this.C3.Cr(A._GetAutoObject(A.acj.Temperature).BvX(
A._GetAutoObject(A.Device.Helper).X.AnimalType,A._GetAutoObject(A.Device.Device).
Ki));this.NC.Cr(0);},_Init:function(aArg){C.QT._Init.call(this,aArg);this.__proto__=
C.AlL;this.Dp(C.Ix);this.HX=A._NewObject(A.Device.Rating,0);},_Mark:function(D){
var B;C.QT._Mark.call(this,D);if((B=this.HX)&&(B._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::AnimalActionTemperatureScreen"};C.AgS={NM:null,DD:null
,H_:null,Bb:null,Atq:null,String:A.jV,Awn:A.jV,Mj:7,Ajw:2,KG:0,ASv:false,Init:function(
aArg){},Bg:function(aSize){A.Core.O.Bg.call(this,aSize);this.DD.G([0,0,aSize[0]-
this.Ajw,(aSize[1]/2)|0]);if(aSize[1]<=40)this.DD.S(A.aaL(A.fl.By));else this.DD.
S(A.aaL(A.fl.Ak));this.H_.S(this.DD.B3);this.H_.G(this.DD.M);this.Bb.G([].concat([
0,aSize[1]-2],aSize));A.pe([this,this.V_],this);},Q:function(E){if(this.String===
E)return;this.String=E;this.DD.Q(E);},AgM:function(E){if(this.Awn===E)return;this.
Awn=E;this.H_.Q(E);},Abt:function(E){this.Mj=E;if(E<10)this.AQ5(2);else if(E<40)
this.AQ5(1);else this.AQ5(0);A.pe([this,this.V_],this);},V_:function(H){var B;while(
!!this.Bb.Ag)this.HG(this.Bb.Ag);if(this.Mj>1){var Acy=this.AMQ();var AZH=this.AMO(
);var AoD=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;var AyF;var AJd;var As1;var Alr=
null;if(!!this.NM&&(this.NM.AR>0))Alr=this.NM.KN;while((Acy>=AZH)&&(Acy>0)){var AsC=
A._NewObject(C.AiO,0);x1=Math.round(((((B=this.M)[2]-B[0])-this.Ajw)*(((Acy-AZH)
/86400)|0))/this.Mj)|0;x2=Math.round(((((B=this.M)[2]-B[0])-this.Ajw)*((((Acy-AZH
)/86400)|0)+1))/this.Mj)|0;while(!!Alr&&(Alr.Timestamp>=Acy)){if(Alr.Timestamp<(
Acy+86400))AsC.Oe(Alr.A4,Alr.Timestamp);Alr=Alr.Ag;}var Ata=0;if(AsC.AR>0)Ata=((((((
B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]))/AsC.AR)|0;else if(this.Mj<10){
Ata=((((B=this.M)[3]-B[1])/2)|0)-((B=this.Bb.M)[3]-B[1]);As1=A._NewObject(A.acg.
Text,0);As1.G([x1,AoD,x2,AoD+Ata]);As1.S(A.aaL(A.fl.By));As1.L(A.jb.Text);As1.Q(
A.aaR(A.acf.Aeo));this.J(As1,0);}var AH7=AsC.KN;var P=0;while(!!AH7){if(P>=AsC.AR
)throw new Error(AT6);AyF=A._NewObject(A.acg.AI,0);AyF.L(A._GetAutoObject(A.acj.
Assessment).P4(AH7.A4));if(P===(AsC.AR-1))AyF.G([x1,AoD+(P*Ata),x2,this.Bb.M[1]]
);else AyF.G([x1,AoD+(P*Ata),x2,AoD+((P+1)*Ata)]);this.J(AyF,0);AH7=AH7.Ag;P=P+1;
}if(this.ASv){var BuC=A._GetAutoObject(A.Device.Helper).Apx(A._GetAutoObject(A.Device.
Helper).Dx());var BuB=A._GetAutoObject(A.Device.Helper).Apx(Acy);if(BuC===BuB){var
AJD=A._NewObject(A.acg.AdG,0);AJD.L(A.jb.Text);var Ba8=(x1+this.Ajw)+(((x2-x1)/2
)|0);AJD.G([Ba8-4,this.Bb.M[1]-4,Ba8+4,this.Bb.M[1]]);AJD.YR(this.Atq);this.J(AJD
,0);}}Acy=Acy-86400;if(this.Ajw>0){AJd=A._NewObject(A.acg.AI,0);AJd.G([x1,AoD,x1+
this.Ajw,AoD+((((B=this.M)[3]-B[1])/2)|0)]);AJd.L(A.jb.Bb);this.J(AJd,0);}}}},Abv:
function(E){this.NM=E;A.pe([this,this.V_],this);},AQ5:function(E){if(this.Ajw===
E)return;this.Ajw=E;A.pe([this,this.V_],this);},C5:function(E){if(this.KG===E)return;
this.KG=E;this.DD.L(E);this.H_.L(E);},AMO:function(){var B;return this.AMQ()-(((((
B=this.Mj)<0)?B+0x100000000:B)-1)*86400);},AMQ:function(){return A._GetAutoObject(
A.Device.Converter).Ag7();},Bki:function(E){if(this.ASv===E)return;this.ASv=E;A.
pe([this,this.V_],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.
acg.Text._Init.call(this.DD={I:this},0);A.acg.Text._Init.call(this.H_={I:this},0
);A.acg.AI._Init.call(this.Bb={I:this},0);C.Awv._Init.call(this.Atq={I:this},0);
this.__proto__=C.AgS;this.G(BC);this.Ar(false);this.DD.G(AFW);this.DD.HF(5);this.
DD.A2(0x11);this.DD.L(A.jb.Text);this.H_.G(AFW);this.H_.HF(5);this.H_.A2(0x14);this.
H_.L(A.jb.Text);this.Bb.G(AT7);this.Bb.L(A.jb.Bb);this.KG=A.jb.Text;this.Atq.G(AT8
);this.J(this.DD,0);this.J(this.H_,0);this.J(this.Bb,0);this.DD.S(A.aaL(A.fl.Ak)
);this.H_.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=A.
Core.O;this.DD._Done();this.H_._Done();this.Bb._Done();this.Atq._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.DD._ReInit(
);this.H_._ReInit();this.Bb._ReInit();this.Atq._ReInit();this.DD.S(A.aaL(A.fl.Ak
));this.H_.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.NM)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Atq)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingHistoryItem"};C.A2E={Ag:null,Timestamp:0,A4:0,_Init:function(
aArg){this.__proto__=C.A2E;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;
},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Ag)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecord"};C.AiO={KN:null,MG:null,AR:0,Oe:
function(A1,PV){var G4;G4=A._NewObject(C.A2E,0);G4.A4=A1;G4.Timestamp=PV;if(!this.
KN){this.KN=G4;this.MG=G4;this.AR=1;}else{this.MG.Ag=G4;this.MG=G4;this.AR=this.
AR+1;}},_Init:function(aArg){this.__proto__=C.AiO;A.h7++;},_Done:function(){this.
__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
KN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.MG)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::AssessmentRecordList"};C.Hh={Z:null,Au:null,Init:function(
aArg){A.pe([this,this.DM],this);},Dr:function(H){var B;var E5=0;var W=this.AY;switch(
this.Cl.CH){case 6:E5=2;break;case 7:E5=7;break;case 4:E5=4;break;case 5:E5=5;break;
default:;}W=this.RT(W,E5,0x414);if(!!W)this.Ba(W);if(!!W&&((W.T&0x400)===0x400))
this.Z.Hx(W,true,null,null);this.DM(this);},Alg:function(H){A._GetAutoObject(C.AZ
).Fk();},Ao0:function(H){var B;if(!!(C.Cd.isPrototypeOf(B=this.AY)?B:null).AfH)A.
pe((C.Cd.isPrototypeOf(B=this.AY)?B:null).AfH,this);},E7:function(H){var B;this.
Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.
Z.Bp[1]);},DM:function(H){var B;var Hs=(C.Cd.isPrototypeOf(B=this.AY)?B:null);if(
!!Hs){this.N.Hm(A.jV);this.N.BU(A.jV);this.N.I3.Dz(255);this.N.Ih.Dz(Hs.Av0);this.
N.ADt(Hs.Auj);this.N.AmT(Hs.Al$);this.N.CS(Hs.AOj);this.N.C7(Hs.Ap8);Hs.A0M(this
);}},G3:function(H){A.pe([this,this.E7],this);},_Init:function(aArg){C.AC._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Au._Init.call(this.Au={
I:this},0);this.__proto__=C.Hh;this.Background.G(Q1);this.Background.L(A.jb.C0);
this.N.G(WD);this.N.Ar(false);this.N.Y(true);this.Z.G(E2);this.Z.J$(1);this.Au.G(
IJ);this.J(this.Z,0);this.J(this.Au,0);this.Z.Eh=[this,this.G3];this.Init(aArg);
},_Done:function(){this.__proto__=C.AC;this.Z._Done();this.Au._Done();C.AC._Done.
call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.Z._ReInit();this.Au.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Z)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceScreen"};C.ARG={Nn:null,AQP:null,Adk:null,U7:null,GD:null,PopupTimeout:
null,Abz:null,AfT:null,PopupIdToString:null,Asy:null,Text:A.jV,Aj4:A.jV,AIp:A.jV
,Akm:0,AJr:-1,Ax3:-1,AI0:0,ARI:0,AZQ:false,CT:function(){this.A7T(this.PopupIdToString.
B0(this.ARI));},Init:function(aArg){this.BlB(this);},BdI:function(H){var B;if(this.
Akm>0){this.A76((this.Akm/1000)|0);this.PopupTimeout.V2(0);this.PopupTimeout.QJ(
1000);this.PopupTimeout.StartTimer(this);}else this.PopupTimeout.AE_(this);},BdE:
function(H){var Qc=this.Text;var Afb=this.Aj4;var AIY=A.abi(16,A.jV,null);var index=
0;var AxY=0;while(Afb!==A.jV){AxY=Afb.indexOf(A.Device.PopupParamSeparator,0);if(
AxY!==-1){AIY.Set(index,A.ab1(Afb,AxY,(Afb.length-AxY)+1));Afb=A.ab1(Afb,0,AxY+1
);index=index+1;if(index>=16){A.ab5("%s",(AT9+Afb)+AT_);Afb=A.jV;}}else{AIY.Set(
index,Afb);Afb=A.jV;}}index=0;while(index<Qc.length){if((Qc.charCodeAt(index)||0
)===0x7B){var BaL=Qc.indexOf(String.fromCharCode(0x7D),index);if(BaL===-1){A.ab5(
"%s",(((AT$+Qc)+AUa)+index.toFixed())+Akv);index=Qc.length;}else{var Bcu=(BaL-index
)-1;var A1g=A.abW(Qc,index+1,Bcu);var AIX=A.wz(A1g,-1,10);Qc=A.ab1(Qc,index,Bcu+
2);if(A1g===AUb)this.Bky(index);else if(((AIX>0)&&(AIX<=16))&&(this.Aj4!==A.jV)){
Qc=A.abU(Qc,AIY.Get(AIX-1),index);if(this.AZQ===true)this.Bkx(A.wz(AIY.Get(AIX-1
),0,10));}else A.ab5("%s",(AUc+A1g)+AUd);}}index=index+1;}this.Bkw(Qc);},CI:function(
H){A.pe([this,this.BdI],this);},Ai:function(Ae){var B;this.Adk.G(A.aaT(this.GD.C_(
),Ahd));this.U7.G(A.aaT(this.GD.C_(),Ahd));if(!!this.Nn){this.Nn.G(A.abM(this.Nn.
M,this.GD.M[0]));this.Nn.G(A.abO(this.Nn.M,this.GD.M[3]+10));this.Nn.G(A.abL(this.
Nn.M,(B=this.GD.M)[2]-B[0]));this.Nn.G(A.abI(this.Nn.M,8));this.Adk.G(A.abh(A.aaT(
this.GD.C_(),Ahd),AFX));this.U7.G(A.abh(A.aaT(this.GD.C_(),Ahd),AFX));}else{this.
Adk.G(A.aaT(this.GD.C_(),Ahd));this.U7.G(A.aaT(this.GD.C_(),Ahd));}},Dr:function(
H){var Jr=(A.Core.BO.isPrototypeOf(H)?H:null);if((Jr.CH===4)&&((this.U7.M[1]+this.
M[1])<this.M[1])){this.GD.G(A.abO(this.GD.M,this.GD.M[1]+28));this.An();}else if((
Jr.CH===5)&&((this.U7.M[3]+this.M[1])>this.N.M[1])){this.GD.G(A.abO(this.GD.M,this.
GD.M[1]-28));this.An();}if((Jr.CH===6)&&!!this.Ea().Cu)this.Ea().ADB(1);else if((
Jr.CH===7)&&!!this.Ea().Ci)this.Ea().ADB(3);},Ja:function(H){switch(this.Ea().Agx
){case 1:this.Alg(this);break;case 3:this.Ao0(this);break;case 2:this.Aza(this);
break;case 0:break;default:A.ab5("%s%e",AUe,this.Ea().Agx);}},Alg:function(H){var
B;(B=this.Ea().Cu)?B[1].call(B[0],this):null;},Ao0:function(H){var B;(B=this.Ea(
).Ci)?B[1].call(B[0],this):null;},Aza:function(H){var B;(B=this.Ea().Cf)?B[1].call(
B[0],this):null;},Lz:function(H){this.N.IW.L((this.N.IW.AP&0x00FFFFFF)|(100<<24)
);},Fb:function(H){var B;this.PopupTimeout.AE_(this);},A7T:function(E){if(this.Text===
E)return;this.Text=E;A.pe([this,this.BdE],this);},BwV:function(H){var B;this.A76(
this.Ax3-1);if(this.Ax3<=0){this.PopupTimeout.AE_(this);(B=this.AQP)?B[1].call(B[
0],this):null;}},A7U:function(E){if(this.Akm===E)return;this.Akm=E;A.pe([this,this.
BdI],this);},A7G:function(E){if(this.Aj4===E)return;this.Aj4=E;A.pe([this,this.BdE
],this);},Bkw:function(E){if(this.AIp===E)return;this.AIp=E;this.Az1(this);this.
BuJ(this);},Az1:function(H){if((this.Ax3!==-1)&&(this.AJr!==-1)){var Bvy=this.Asy.
Format(AUf);this.GD.Q(A.abU(this.AIp,Bvy,this.AJr));}else this.GD.Q(this.AIp);this.
GD.G(AFY);},Bky:function(E){if(this.AJr===E)return;this.AJr=E;this.Az1(this);},A76:
function(E){if(this.Ax3===E)return;this.Ax3=E;this.Asy.AD8(E);A.pe([this,this.Az1
],this);},BuJ:function(H){this.GD.C_();if(this.GD.M[1]<=this.M[1])this.GD.G(A.abO(
this.GD.M,28));this.An();},A78:function(E){if(this.AZQ===E)return;this.AZQ=E;if(
E===true)A.pe([this,this.Bxt],this);},Bxt:function(H){if(!this.Nn){this.Nn=A._NewObject(
A.acq.ABR,0);this.Nn.GC(0);this.Nn.Fd(100);this.Nn.OnSetAppearance(this.Abz);this.
J(this.Nn,0);this.AgV(this.Nn,this.GD);}this.Nn.Bx(this.AI0);},Bkx:function(E){if(
this.AI0===E)return;this.AI0=E;if(!!this.Nn)this.Nn.Bx(this.AI0);},BlB:function(
H){var B;this.N.Dz(0);this.AfT.AE7(this);},Bka:function(E){if(this.ARI===E)return;
this.ARI=E;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.acg.AI._Init.call(
this.Adk={I:this},0);A.acg.Cy._Init.call(this.U7={I:this},0);A.acg.Text._Init.call(
this.GD={I:this},0);A.Core.Timer._Init.call(this.PopupTimeout={I:this},0);A.acq.
ABS._Init.call(this.Abz={I:this},0);A.acl.FX._Init.call(this.AfT={I:this},0);A.Device.
PopupIdToString._Init.call(this.PopupIdToString={I:this},0);A.Core.Bt._Init.call(
this.Asy={I:this},0);this.__proto__=C.ARG;var B;this.G(B9);this.Background.G(E2);
this.Background.L(0x88FFFFFF);this.Background.Y(false);this.D_.Ar(false);this.D_.
Y(false);this.Adk.G(AFZ);this.Adk.L(A.jb.CM);this.U7.G(AFZ);this.U7.NJ(2);this.U7.
L(A.jb.Text);this.GD.G(AFY);this.GD.HF(10);this.GD.IZ(true);this.GD.Bkv(0);this.
GD.KF(true);this.GD.L(A.jb.Text);this.PopupTimeout.QJ(0);this.Abz.A7Z(0);this.Abz.
A7X(A.jb.AY);this.Abz.A7W(0);this.Abz.AEm(AFJ);this.AfT.ID(1);this.AfT.B1=255;this.
AfT.Ct=0;this.Kh(this.D_,-1);this.J(this.Adk,0);this.J(this.U7,0);this.J(this.GD
,0);this.GD.S(A.aaL(A.fl.Ah));this.PopupTimeout.M6=[this,this.BwV];this.Abz.A7Y(
A.aaL(A.ach.ND));this.Abz.A7V(A.aaL(A.ach.ND));this.AfT.R=[B=this.N,B.Ava,B.AXT];
this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.Adk._Done();this.U7.
_Done();this.GD._Done();this.PopupTimeout._Done();this.Abz._Done();this.AfT._Done(
);this.PopupIdToString._Done();this.Asy._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Adk._ReInit();this.U7._ReInit();this.GD.
_ReInit();this.PopupTimeout._ReInit();this.Abz._ReInit();this.AfT._ReInit();this.
PopupIdToString._ReInit();this.Asy._ReInit();this.GD.S(A.aaL(A.fl.Ah));this.CT();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Nn)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AQP)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Adk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupTimeout)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Abz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfT
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Asy)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"
};C.Mc={Ai:function(Ae){C.Cd.Ai.call(this,Ae);var FE=A.jb.CM;var GG=A.jb.Text;if(
this.G8){FE=A.jb.Text;GG=A.jb.Bh;}if(!this.Lt){this.Background.L(FE);this.V.L(A.
jb.Amm);}else if(this.P8){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else if(
this.Ks){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else{this.Background.L(FE
);this.V.L(GG);}},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=
C.Mc;},_className:"Application::DarkThemeMenuItem"};C.AmB={AcV:0,_Init:function(
aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.AmB;},_className:"Application::MenuItemPopUp"
};C.OverlayMenu={W7:function(H){A._GetAutoObject(A.Device.Device).Cj(0);},KD:function(
){if(!this.Bv){this.Bv=A._NewObject(C.N,0);this.Bv.Ci=[this,this.A0N];this.Bv.Cf=
null;this.Bv.Cu=[this,this.W7];this.Bv.BU(A.aaR(A.acf.Ok));this.Bv.Cm(null);this.
Bv.CS(A.aaL(A.ach.AdP));}return this.Bv;},A0N:function(H){var B;if(!!(C.Cd.isPrototypeOf(
B=this.AY)?B:null))(C.Cd.isPrototypeOf(B=this.AY)?B:null).Ja(this);},CI:function(
H){},AG2:function(s){this.CI(s);},Fb:function(H){},Axk:function(s){this.Fb(s);},
_Init:function(aArg){C.AaA._Init.call(this,aArg);this.__proto__=C.OverlayMenu;},
_className:"Application::OverlayMenu"};C.ANN={VC:null,Ye:null,X9:null,Init:function(
aArg){this.Ba(this.VC);},AcP:function(H){var Aa=(C.Cd.isPrototypeOf(H)?H:null);if(
!Aa)return;if(Aa===this.Ye)A._GetAutoObject(A.Device.Device).A6(6,true,A.jV,0,[this
,this.BxH]);else if(Aa===this.VC)A._GetAutoObject(A.Device.Device).A6(9,true,A.jV
,0,[this,this.Bx5]);else if(Aa===this.X9)A._GetAutoObject(C.AZ).BZ(4);else throw new
Error(AwY);A._GetAutoObject(A.Device.Device).Cj(0);},BxH:function(H){var At=(A.Device.
PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(
A.Device.Device).AEJ();},Bx5:function(H){var At=(A.Device.PopupContext.isPrototypeOf(
H)?H:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(A.Device.Device).Awe();
},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.Mc._Init.call(this.
VC={I:this},0);C.Mc._Init.call(this.Ye={I:this},0);C.Mc._Init.call(this.X9={I:this
},0);this.__proto__=C.ANN;this.G(Ab_);this.VC.G(BC);this.VC.Ar(true);this.VC.U(A.
aaR(A.acf.A8K));this.VC.Bf(true);this.Ye.G(KL);this.Ye.Ar(true);this.Ye.U(A.aaR(
A.acf.A8r));this.Ye.Bf(true);this.X9.G(Q2);this.X9.Ar(true);this.X9.U(A.aaR(A.acf.
So));this.X9.Bf(true);this.J(this.VC,0);this.J(this.Ye,0);this.J(this.X9,0);this.
VC.AQ=[this,this.AcP];this.Ye.AQ=[this,this.AcP];this.X9.AQ=[this,this.AcP];this.
Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.VC._Done();this.
Ye._Done();this.X9._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.
OverlayMenu._ReInit.call(this);this.VC._ReInit();this.Ye._ReInit();this.X9._ReInit(
);this.VC.U(A.aaR(A.acf.A8K));this.Ye.U(A.aaR(A.acf.A8r));this.X9.U(A.aaR(A.acf.
So));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VC)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ye)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
X9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HomeOverlayMenu"};C.
Gt={ZX:null,OverlayMenu:null,Wa:null,A1y:null,K0:null,A1f:null,Aj5:null,NK:null,
AyK:100,Init:function(aArg){var B;A.zX([this,this.Bb0],[B=A._GetAutoObject(A.Device.
Device),B.Avb,B.Axt],0);A.zX([this,this.BbU],[B=A._GetAutoObject(A.Device.Device
),B.AQv,B.AXQ],0);A.zX([this,this.A0E],[B=A._GetAutoObject(A.Device.Device),B.Au2
,B.Axm],0);A.zX([this,this.Bws],[B=A._GetAutoObject(A.Device.Device),B.AuZ,B.Axl
],0);A.zX([this,this.Bwt],[B=A._GetAutoObject(A.Device.Device),B.A5_,B.A_j],0);A.
zX([this,this.Ao1],[B=A._GetAutoObject(A.Device.Device),B.AQH,B.AXZ],0);A.zX([this
,this.Bce],[B=A._GetAutoObject(A.Device.Device),B.Abl,B.Acd],0);A.pe([this,this.
Bb0],this);A.pe([this,this.BbU],this);A.pe([this,this.Ao1],this);A.pe([this,this.
Bce],this);this.A1y.Av([B=this.Wa,B.ACT,B.YN]);this.J(this.Wa,0);this.Ba(this.Wa
);this.Bun(this);},Ai:function(Ae){},BbU:function(H){var B;if(A._GetAutoObject(A.
Device.Device).ACF){if(!this.ZX){this.ZX=A._NewObject(C.Aru,0);this.ZX.G(A.abJ(this.
ZX.M,this.Wa.M.slice(0,2)));this.ZX.G(A.abO(this.ZX.M,this.Wa.M[3]-((B=this.ZX.M
)[3]-B[1])));this.J(this.ZX,1);}}else{if(!!this.ZX)this.HG(this.ZX);this.ZX=null;
}},Bb0:function(H){switch(A._GetAutoObject(A.Device.Device).OverlayMenu){case 0:
this.Cj(null);break;case 1:this.Cj(A._NewObject(C.ANN,0));break;case 8:this.Cj(A.
_NewObject(C.AJ$,0));break;case 2:this.Cj(A._NewObject(C.AJ7,0));break;case 3:this.
Cj(A._NewObject(C.AKc,0));break;case 4:this.Cj(A._NewObject(C.ARW,0));break;case
5:this.Cj(A._NewObject(C.ATm,0));break;case 6:this.Cj(A._NewObject(C.ARB,0));break;
case 7:this.Cj(A._NewObject(C.AlO,0));break;case 11:this.Cj(A._NewObject(C.AKF,0
));break;case 12:this.Cj(A._NewObject(C.AKE,0));break;case 9:this.Cj(A._NewObject(
C.APF,0));break;case 10:this.Cj(A._NewObject(C.AKA,0));break;case 14:this.Cj(A._NewObject(
C.APB,0));break;case 15:this.Cj(A._NewObject(C.APC,0));break;case 13:this.Cj(A._NewObject(
C.APD,0));break;case 16:this.Cj(A._NewObject(C.ARQ,0));break;case 17:this.Cj(A._NewObject(
C.AKZ,0));break;default:throw new Error(AUg+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Cj:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.V8).AqF(null);this.NK.ApK(this.OverlayMenu,A._GetAutoObject(
C.Awh),null,null,[B=this.OverlayMenu,B.Axk],null,true);this.Ba(this.Wa);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.NK.Aj7(this.OverlayMenu,A._GetAutoObject(C.Awg),null
,null,null,null,null,[B=this.OverlayMenu,B.AG2],null,false);this.Ba(this.NK);A._GetAutoObject(
C.V8).AqF(this.OverlayMenu.KD());}else if(!!this.K0){this.Ba(this.NK);A._GetAutoObject(
C.V8).AqF(this.K0.AjL().KD());}},AgG:function(E){var B;if(this.K0===E)return;if(
!!this.K0){A._GetAutoObject(C.V8).AqF(null);this.NK.ApK(this.K0.AjL(),A._GetAutoObject(
C.Aeu),null,null,[B=this.K0.AjL(),B.Axk],null,false);this.Ba(this.Wa);}this.K0=E;
if(!!this.K0){this.NK.Aj7(this.K0.AjL(),A._GetAutoObject(C.Aeu),null,null,null,null
,null,[this,this.Biu],null,false);this.Ba(this.NK);A._GetAutoObject(C.V8).AqF(this.
K0.AjL().KD());}else if(!!this.OverlayMenu){this.Ba(this.NK);A._GetAutoObject(C.
V8).AqF(this.OverlayMenu.KD());}},Bun:function(H){var B;var F;this.J(this.A1f,0);(
F=A._GetAutoObject(C.V8),F.G(A.abO(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.V8).M)[3]-B[1]))));this.Y0(this.NK);},A0E:function(H){if(A._GetAutoObject(A.Device.
Device).AlW)switch(A._GetAutoObject(A.Device.Device).Kv){case 4:case 39:case 5:break;
case 40:A._GetAutoObject(C.AZ).AgO(4);break;default:if(A._GetAutoObject(A.Device.
Device).Aak<98)A._GetAutoObject(C.AZ).BZ(4);}else{this.AyK=100;this.A$T();}},Bws:
function(H){this.A$T();},A$T:function(){if(!A._GetAutoObject(A.Device.Device).AlW
){if(A._GetAutoObject(A.Device.Device).Aak<=2){if(this.AyK>2)switch(A._GetAutoObject(
A.Device.Device).Kv){case 39:break;case 4:case 40:A._GetAutoObject(C.AZ).AgO(39);
break;default:A._GetAutoObject(C.AZ).BZ(39);}}else if(A._GetAutoObject(A.Device.
Device).Aak<=10){if(this.AyK>10)switch(A._GetAutoObject(A.Device.Device).Kv){case
40:break;case 4:case 39:A._GetAutoObject(C.AZ).AgO(40);break;default:A._GetAutoObject(
C.AZ).BZ(40);}}else if(A._GetAutoObject(A.Device.Device).Aak<=20){if(this.AyK>20
)switch(A._GetAutoObject(A.Device.Device).Kv){case 40:break;case 4:case 39:A._GetAutoObject(
C.AZ).AgO(40);break;default:A._GetAutoObject(C.AZ).BZ(40);}}else switch(A._GetAutoObject(
A.Device.Device).Kv){case 39:case 4:case 40:A._GetAutoObject(C.AZ).Fk();break;default:;
}this.AyK=A._GetAutoObject(A.Device.Device).Aak;}},Bwt:function(H){switch(A._GetAutoObject(
A.Device.Device).ApA){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A6(
40,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AmR(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A6(75,true,A.jV,0,null);A._GetAutoObject(A.Device.Device).AmR(0
);}break;default:A.ab5("%s",AUh+A._GetAutoObject(A.Device.Device).ApA.toFixed());
}},Ao1:function(H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(C.AZ).BZ(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).Kv===5)A._GetAutoObject(C.AZ).AgO(3);break;
default:;}},Bce:function(H){switch(A._GetAutoObject(A.Device.Device).Akq){case 0:
case 1:case 2:A._GetAutoObject(A.Device.Device).TT(false);break;case 5:{A._GetAutoObject(
A.Device.Device).V6(65535);A._GetAutoObject(A.Device.Device).TT(true);}break;case
3:{A._GetAutoObject(A.Device.Device).V6(255);A._GetAutoObject(A.Device.Device).TT(
true);}break;case 4:{A._GetAutoObject(A.Device.Device).V6(16776960);A._GetAutoObject(
A.Device.Device).TT(true);}break;case 6:{A._GetAutoObject(A.Device.Device).V6(16711935
);A._GetAutoObject(A.Device.Device).TT(true);}break;default:A.ab5("%s",AUi+A._GetAutoObject(
A.Device.Device).Akq.toFixed());}},Biu:function(H){var B;this.K0.AjL().CI(this);
this.K0.BwT(this);},Bhz:function(){return this.K0;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);C.Aj5._Init.call(this.Aj5={I:this},0);C.NK._Init.call(this.
NK={I:this},0);this.__proto__=C.Gt;this.G(B9);this.NK.G(Q1);this.J(this.NK,0);this.
Wa=A._NewObject(C.Wa,0);this.A1y=A._GetAutoObject(C.AZ);this.Aj5.ALE=[this,this.
Bhz,this.AgG];this.A1f=A._GetAutoObject(C.V8);this.Init(aArg);},_Done:function(){
this.__proto__=A.Core.O;this.Aj5._Done();this.NK._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Aj5._ReInit();this.NK._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.ZX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Wa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A1y)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.K0)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A1f)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aj5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.NK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Content"
};C.AaA={A8g:null,Bv:null,N:null,Cl:null,Amt:null,Amv:null,Qv:null,Amu:null,Amr:
null,Amx:null,Ams:null,Dr:function(H){var E5=0;var W=this.AY;switch(this.Cl.CH){
case 6:E5=2;break;case 7:E5=7;break;case 4:E5=4;break;case 5:E5=5;break;default:;
}W=this.RT(W,E5,0x14);if(!!W)this.Ba(W);},A_N:function(s){this.Dr(s);},Alg:function(
H){var DV=(A.Core.BO.isPrototypeOf(H)?H:null);if(DV.AbG&&(this.Ea().Arn===false)
)return;A.pe(this.Ea().Cu,this);},AHd:function(s){this.Alg(s);},Ao0:function(H){
var DV=(A.Core.BO.isPrototypeOf(H)?H:null);if(DV.AbG&&(this.Ea().YZ===false))return;
A.pe(this.Ea().Ci,this);},AHg:function(s){this.Ao0(s);},Ja:function(H){if(this.Qv.
AbG)return;},Asj:function(s){this.Ja(s);},Aza:function(H){var DV=(A.Core.BO.isPrototypeOf(
H)?H:null);if(DV.AbG&&(this.Ea().YY===false))return;A.pe(this.Ea().Cf,this);},AHf:
function(s){this.Aza(s);},Ea:function(){if(!!this.KD())return this.Bv;else return this.
N;},KD:function(){return this.Bv;},G_:function(E){this.A8g=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);C.N._Init.call(this.N={I:this},0);A.Core.BO._Init.
call(this.Cl={I:this},0);A.Core.BO._Init.call(this.Amt={I:this},0);A.Core.BO._Init.
call(this.Amv={I:this},0);A.Core.BO._Init.call(this.Qv={I:this},0);A.Core.BO._Init.
call(this.Amu={I:this},0);A.Core.BO._Init.call(this.Amr={I:this},0);A.Core.BO._Init.
call(this.Amx={I:this},0);A.Core.BO._Init.call(this.Ams={I:this},0);this.__proto__=
C.AaA;this.G([0,0,C.Arx[0],C.Arx[1]]);this.N.G(WD);this.N.Ar(false);this.N.Y(false
);this.Cl.Filter=147;this.Amt.Filter=26;this.Amv.Filter=28;this.Qv.Filter=1;this.
Amu.Filter=27;this.Amr.Filter=44;this.Amx.Filter=9;this.Ams.Filter=42;this.J(this.
N,0);this.Cl.BP=[this,this.A_N];this.Cl.DR=[this,this.A_N];this.Amt.BP=[this,this.
AHd];this.Amt.DR=[this,this.AHd];this.Amv.BP=[this,this.AHg];this.Amv.DR=[this,this.
AHg];this.Qv.BP=[this,this.Asj];this.Qv.DR=[this,this.Asj];this.Amu.BP=[this,this.
AHf];this.Amu.DR=[this,this.AHf];this.Amr.BP=[this,this.AHd];this.Amr.DR=[this,this.
AHd];this.Amx.BP=[this,this.AHg];this.Amx.DR=[this,this.AHg];this.Ams.BP=[this,this.
AHf];this.Ams.DR=[this,this.AHf];},_Done:function(){this.__proto__=A.Core.O;this.
N._Done();this.Cl._Done();this.Amt._Done();this.Amv._Done();this.Qv._Done();this.
Amu._Done();this.Amr._Done();this.Amx._Done();this.Ams._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.N._ReInit();this.Cl.
_ReInit();this.Amt._ReInit();this.Amv._ReInit();this.Qv._ReInit();this.Amu._ReInit(
);this.Amr._ReInit();this.Amx._ReInit();this.Ams._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.A8g)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Bv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amt)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Amv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qv
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Amr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Amx)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ams)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Dialog"
};C.Awg={_Init:function(){A.acl.AE4._Init.call(this,0);this.J1=0x22;this.Ado=true;
this.AtY=4;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.Awh={_Init:function(){A.acl.AE4._Init.call(this,0);this.J1=0x22;this.Ado=true;
this.AtY=5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C.ASt={RM:function(){var B;var Ao=(A.acl.Aem.isPrototypeOf(B=A.acl.AdD.RM.call(this
))?B:null);if(!Ao)throw new Error(Ar2);Ao.Ck.Ct=100;return Ao;},RL:function(){var
B;var Ao=(A.acl.Av1.isPrototypeOf(B=A.acl.AdD.RL.call(this))?B:null);if(!Ao)throw new
Error(Ar2);Ao.ER.B1=100;return Ao;},_Init:function(aArg){A.acl.AdD._Init.call(this
,aArg);this.__proto__=C.ASt;},_className:"Application::ShadeTransition"};C.Amg={
Agj:null,Ss:null,HI:null,CX:null,AnimalId:-1,GroupId:-1,ABA:true,C5:function(E){
C.BN.C5.call(this,E);this.Ss.L(E);this.HI.L(E);this.Agj.L(E);},OnSetAnimalId:function(
E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.HI.Q(A.aaR(A.acf.Aeo)
);else this.HI.Q(E.toFixed());},Abr:function(E){if(this.GroupId===E)return;this.
GroupId=E;if(E<0)this.Ss.Q(A.aaR(A.acf.Aeo));else this.Ss.Q(E.toFixed());},En:function(
H){},M_:function(s){this.En(s);},A7o:function(E){if(this.ABA===E)return;this.ABA=
E;this.Ss.Y(this.ABA);this.Agj.Y(this.ABA);},_Init:function(aArg){C.BN._Init.call(
this,aArg);A.acg.Am._Init.call(this.Agj={I:this},0);A.acg.Text._Init.call(this.Ss={
I:this},0);A.acg.Text._Init.call(this.HI={I:this},0);C.CX._Init.call(this.CX={I:
this},0);this.__proto__=C.Amg;this.Agj.G(AUj);this.Ss.G(AUk);this.Ss.A2(0x11);this.
Ss.Q(A.aaR(A.acf.Aeo));this.HI.G(AUl);this.HI.A2(0x11);this.HI.Q(A.aaR(A.acf.Aeo
));this.CX.G(AUm);this.J(this.Agj,0);this.J(this.Ss,0);this.J(this.HI,0);this.J(
this.CX,0);this.Agj.Ax(A.aaL(A.ach.AOv));this.Ss.S(A.aaL(A.fl.Ah));this.HI.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.BN;this.Agj._Done();this.Ss._Done(
);this.HI._Done();this.CX._Done();C.BN._Done.call(this);},_ReInit:function(){C.BN.
_ReInit.call(this);this.Agj._ReInit();this.Ss._ReInit();this.HI._ReInit();this.CX.
_ReInit();this.Ss.Q(A.aaR(A.acf.Aeo));this.HI.Q(A.aaR(A.acf.Aeo));this.Ss.S(A.aaL(
A.fl.Ah));this.HI.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BN._Mark.call(this
,D);if((B=this.Agj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ss)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderIds"};C.ABK={Init:function(
aArg){var B;A.zX([this,this.M_],[B=A._GetAutoObject(A.Device.Helper).X,B.AqB,B.TU
],0);A.zX([this,this.M_],[B=A._GetAutoObject(A.Device.Helper).X,B.A6n,B.AmX],0);
A.zV([this,this.M_],A._GetAutoObject(A.Device.Helper).X,0);A.zX([this,this.M_],[
B=A._GetAutoObject(A.Device.Helper).X,B.Px,B.DS],0);A.zX([this,this.M_],[B=A._GetAutoObject(
A.Device.Helper).X,B.A6U,B.AvY],0);A.zX([this,this.M_],[B=A._GetAutoObject(A.Device.
Helper).X,B.A6h,B.Aec],0);A.zX([this,this.M_],[B=A._GetAutoObject(A.Device.Helper
).X,B.A6i,B.TR],0);A.zX([this,this.M_],[B=A._GetAutoObject(A.Device.Helper).X,B.
A6j,B.Aef],0);A.zX([this,this.M_],[B=A._GetAutoObject(A.Device.Helper).X,B.A6m,B.
Aeh],0);A.pe([this,this.M_],this);},C5:function(E){C.Amg.C5.call(this,E);this.CX.
C5(E);},En:function(H){if(A._GetAutoObject(A.Device.Helper).X.Ap0()){this.Abr(A.
_GetAutoObject(A.Device.Helper).X.LocationId);this.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).X.VisualId);}else{this.Abr(-1);this.OnSetAnimalId(-1);}this.CX.
DS(A._GetAutoObject(A.Device.Helper).X.AnimalType);this.CX.ADl(A._GetAutoObject(
A.Device.Helper).X.WorstAssessment);this.CX.Aec(A._GetAutoObject(A.Device.Helper
).X.IsAlarm);this.CX.TR(A._GetAutoObject(A.Device.Helper).X.IsFever);this.CX.Aef(
A._GetAutoObject(A.Device.Helper).X.IsWatch);this.CX.Aeh(A._GetAutoObject(A.Device.
Helper).X.LastTemperature);},_Init:function(aArg){C.Amg._Init.call(this,aArg);this.
__proto__=C.ABK;this.Init(aArg);},_className:"Application::HeaderSelectedAnimalIds"
};C.J3={Ag3:A.abi(3,A.jV,null),Cv:A.abi(3,0,{0:7,1:30,2:90}),AmF:3,Dt:function(){
if(this.AmF<3)return this.AmF;else return 3;},C$:function(aIndex){if((aIndex>=3)||(
aIndex>=this.AmF))return-1;return this.Cv.Get(aIndex);},Gx:function(aIndex){if((
aIndex>=3)||(aIndex>=this.AmF))return AUn;return this.Ag3.Get(aIndex);},DO:function(
A1){var P=0;while((P<3)&&(P<=this.AmF)){if(this.Cv.Get(P)===A1)return P;P=P+1;}return-
1;},Hj:function(){var P=0;var max=-1;while((P<3)&&(P<=this.AmF)){if(this.Cv.Get(
P)>max)max=this.Cv.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AB._Init.call(
this,aArg);(this.Ag3=[]).__proto__=C.J3.Ag3;(this.Cv=[]).__proto__=C.J3.Cv;this.
__proto__=C.J3;this.Ag3.Set(0,A.aaR(A.acf.A46));this.Ag3.Set(1,A.aaR(A.acf.A44));
this.Ag3.Set(2,A.aaR(A.acf.A45));},_ReInit:function(){C.AB._ReInit.call(this);this.
Ag3.Set(0,A.aaR(A.acf.A46));this.Ag3.Set(1,A.aaR(A.acf.A44));this.Ag3.Set(2,A.aaR(
A.acf.A45));},_className:"Application::Days"};C.ASq={AlR:null,BM:null,QK:null,Qj:
null,A85:A.jV,Init:function(aArg){var B;this.V.Q(A.aaR(A.acf.Undertemperature));
A.zX([this,this.Bxb],[B=A._GetAutoObject(A.Device.Device),B.AqA,B.Asi],0);},Bg:function(
aSize){},Ai:function(Ae){var B;var F;C.Dj.Ai.call(this,Ae);var Fg=((Ae&0x20)===0x20
);var Gm=this.Bk.Bw;this.BM.L(A.jb.Bh);if(!!this.R)this.BM.Q(((AUo+A._GetAutoObject(
A.Device.Converter).Akk((F=this.R,F[1].call(F[0]))))+CJ)+A._GetAutoObject(A.acj.
Temperature).Ak2());this.HU.Y((this.AK<A._GetAutoObject(A.Device.Helper).A4p())&&(
Fg||Gm));},Db:function(H){var F;if(!!this.R)this.Bx((F=this.R,F[1].call(F[0])));
},JW:function(H){var F;var BL=this.AK;C.Dj.JW.call(this,H);if(this.AK<A._GetAutoObject(
A.Device.Helper).A4p()){this.Bx(this.AK+10);if(this.AK!==BL){if(!!this.R)(F=this.
R,F[2].call(F[0],this.AK));A.abo(this.R,0);}}},JR:function(H){var F;var BL=this.
AK;C.Dj.JR.call(this,H);this.Bx(this.AK-10);if(this.AK!==BL){if(!!this.R)(F=this.
R,F[2].call(F[0],this.AK));A.abo(this.R,0);}},A71:function(E){if(this.A85===E)return;
this.A85=E;this.An();},Bxb:function(H){this.An();},_Init:function(aArg){C.Dj._Init.
call(this,aArg);A.acg.AI._Init.call(this.AlR={I:this},0);C.CP._Init.call(this.BM={
I:this},0);A.acg.AI._Init.call(this.QK={I:this},0);A.acg.Am._Init.call(this.Qj={
I:this},0);this.__proto__=C.ASq;this.G(Uq);this.Background.G(Uq);this.V.G(Ar3);this.
V.L(A.jb.Bh);this.AlR.G(AUp);this.AlR.L(A.jb.AeL);this.Hl.G(AUq);this.BM.G(AUr);
this.BM.A2(0x12);this.BM.L(A.jb.Text);this.HU.G(AUs);this.QK.G(AUt);this.QK.L(A.
jb.EX);this.Qj.G(AUu);this.J(this.AlR,-2);this.J(this.BM,-1);this.J(this.QK,0);this.
J(this.Qj,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.BM.S(A.aaL(
A.fl.Ey));this.BM.A5(A.aaL(A.fl.Ah));this.Qj.Ax(A.aaL(A.ach.ABZ));this.Init(aArg
);},_Done:function(){this.__proto__=C.Dj;this.AlR._Done();this.BM._Done();this.QK.
_Done();this.Qj._Done();C.Dj._Done.call(this);},_ReInit:function(){C.Dj._ReInit.
call(this);this.AlR._ReInit();this.BM._ReInit();this.QK._ReInit();this.Qj._ReInit(
);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.BM.S(A.aaL(A.fl.Ey));this.
BM.A5(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Dj._Mark.call(this,D);if((B=this.
AlR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BM)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qj)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemUndertemperature"};C.A8x={R:null
,Ail:null,Init:function(aArg){var B;A.zX([this,this.BbA],[B=A._GetAutoObject(A.Device.
Device),B.ACT,B.A_c],0);A.pe([this,this.BbA],this);},Av:function(E){if(A.aaZ(this.
R,E))return;this.R=E;},AgO:function(AkE){A._GetAutoObject(A.Device.Device).YN(AkE
);},BbA:function(H){var F;if(!this.R){A.ab5("%s",AUv);return;}var Bn=null;if(this.
Ail.Contains(A._GetAutoObject(A.Device.Device).Kv)){Bn=this.Ail.A8e();while(!!Bn&&(
Bn.Anm!==A._GetAutoObject(A.Device.Device).Kv))Bn=this.Ail.A8e();}if(!Bn)Bn=this.
BvV(A._GetAutoObject(A.Device.Device).Kv);(F=this.R,F[2].call(F[0],Bn));},BvV:function(
AkE){var Bn=null;switch(AkE){case 0:case 1:Bn=A._NewObject(C.ASy,0);break;case 2:
Bn=A._NewObject(C.Xt,0);break;case 3:Bn=A._NewObject(C.Auu,0);break;case 61:Bn=A.
_NewObject(C.ATa,0);break;case 88:Bn=A._NewObject(C.NewMenu,0);break;case 27:Bn=
A._NewObject(C.APV,0);break;case 6:Bn=A._NewObject(C.APu,0);break;case 16:Bn=A._NewObject(
C.ALK,0);break;case 22:Bn=A._NewObject(C.AS7,0);break;case 17:Bn=A._NewObject(C.
ASP,0);break;case 46:Bn=A._NewObject(C.ALI,0);break;case 99:Bn=A._NewObject(C.AR4
,0);break;case 100:Bn=A._NewObject(C.AR3,0);break;case 101:Bn=A._NewObject(C.AS5
,0);break;case 23:Bn=A._NewObject(C.ATt,0);break;case 18:Bn=A._NewObject(C.ALV,0
);break;case 19:Bn=A._NewObject(C.AR5,0);break;case 38:Bn=A._NewObject(C.AO0,0);
break;case 87:Bn=A._NewObject(C.ARO,0);break;case 72:Bn=A._NewObject(C.ALT,0);break;
case 73:Bn=A._NewObject(C.ALU,0);break;case 93:Bn=A._NewObject(C.ALS,0);break;case
94:Bn=A._NewObject(C.ALR,0);break;case 74:Bn=A._NewObject(C.ALQ,0);break;case 5:
Bn=A._NewObject(C.ASI,0);break;case 4:Bn=A._NewObject(C.Adq,0);break;case 40:Bn=
A._NewObject(C.ALk,0);break;case 39:Bn=A._NewObject(C.ALC,0);break;case 28:Bn=A.
_NewObject(C.VX,0);break;case 7:Bn=A._NewObject(C.ApN,0);break;case 92:Bn=A._NewObject(
C.AL4,0);break;case 31:Bn=A._NewObject(C.Aqs,0);break;case 89:Bn=A._NewObject(C.
APT,0);break;case 34:Bn=A._NewObject(C.AJ5,0);break;case 35:Bn=A._NewObject(C.ManualActionScanScreen
,0);break;case 32:Bn=A._NewObject(C.SetTransponderScreen,0);break;case 50:Bn=A._NewObject(
C.SetSaveTransponderScreen,0);break;case 55:Bn=A._NewObject(C.NewAnimalSetTransponderScreen
,0);break;case 63:Bn=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case
90:Bn=A._NewObject(C.MotherScanScreen,0);break;case 91:Bn=A._NewObject(C.SetSaveNaisIdScreen
,0);break;case 8:Bn=A._NewObject(C.EO,0);break;case 9:Bn=A._NewObject(C.IS,0);break;
case 24:Bn=A._NewObject(C.AKj,0);break;case 10:Bn=A._NewObject(C.AlL,0);break;case
21:Bn=A._NewObject(C.AKn,0);break;case 11:Bn=A._NewObject(C.AKm,0);break;case 29:
Bn=A._NewObject(C.AtC,0);break;case 54:Bn=A._NewObject(C.AKl,0);break;case 30:Bn=
A._NewObject(C.AKk,0);break;case 37:Bn=A._NewObject(C.Gs,0);break;case 12:Bn=A._NewObject(
C.AKi,0);break;case 41:Bn=A._NewObject(C.AKh,0);break;case 43:Bn=A._NewObject(C.
AKg,0);break;case 14:Bn=A._NewObject(C.ALA,0);break;case 13:Bn=A._NewObject(C.ALB
,0);break;case 44:Bn=A._NewObject(C.ALz,0);break;case 20:Bn=A._NewObject(C.ATk,0
);break;case 42:Bn=A._NewObject(C.ATj,0);break;case 45:Bn=A._NewObject(C.ATi,0);
break;case 47:Bn=A._NewObject(C.AMH,0);break;case 48:Bn=A._NewObject(C.AMG,0);break;
case 49:Bn=A._NewObject(C.AMF,0);break;case 69:Bn=A._NewObject(C.AL3,0);break;case
70:Bn=A._NewObject(C.AL2,0);break;case 71:Bn=A._NewObject(C.AL1,0);break;case 51:
Bn=A._NewObject(C.AP9,0);break;case 52:Bn=A._NewObject(C.AP8,0);break;case 53:Bn=
A._NewObject(C.AP7,0);break;case 96:Bn=A._NewObject(C.ATz,0);break;case 97:Bn=A.
_NewObject(C.ATy,0);break;case 98:Bn=A._NewObject(C.ATx,0);break;case 80:Bn=A._NewObject(
C.AP4,0);break;case 81:Bn=A._NewObject(C.AP3,0);break;case 82:Bn=A._NewObject(C.
AP2,0);break;case 85:Bn=A._NewObject(C.AK0,0);break;case 102:Bn=A._NewObject(C.ARR
,0);break;case 83:Bn=A._NewObject(C.AR7,0);break;case 84:Bn=A._NewObject(C.AR6,0
);break;case 58:Bn=A._NewObject(C.AJ_,0);break;case 59:Bn=A._NewObject(C.AJ9,0);
break;case 60:Bn=A._NewObject(C.AJ8,0);break;case 15:Bn=A._NewObject(C.ART,0);break;
case 68:Bn=A._NewObject(C.ASO,0);break;case 78:Bn=A._NewObject(C.APs,0);break;case
79:Bn=A._NewObject(C.APr,0);break;case 26:Bn=A._NewObject(C.APW,0);break;case 62:
Bn=A._NewObject(C.APS,0);break;case 25:Bn=A._NewObject(C.AMf,0);break;case 75:Bn=
A._NewObject(C.AMg,0);break;case 67:Bn=A._NewObject(C.AMe,0);break;case 66:Bn=A.
_NewObject(C.AMh,0);break;case 64:Bn=A._NewObject(C.AMi,0);break;case 65:Bn=A._NewObject(
C.ApP,0);break;case 77:Bn=A._NewObject(C.AMj,0);break;case 76:Bn=A._NewObject(C.
AMc,0);break;case 95:Bn=A._NewObject(C.AKp,0);break;case 33:Bn=A._NewObject(C.WeightListScreen
,0);break;case 36:Bn=A._NewObject(C.AnimalSingleInfoScreen,0);break;case 56:Bn=A.
_NewObject(C.AnimalMultiInfoScreen,0);break;case 57:Bn=A._NewObject(C.MultiInfoActionsScreen
,0);break;case 86:Bn=A._NewObject(C.AKC,0);break;case 103:Bn=A._NewObject(C.AST,
0);break;default:throw new Error(AUw);}if(!!Bn)Bn.Anm=AkE;return Bn;},BZ:function(
AkE){var F;if(!(F=this.R,F[1].call(F[0])))A.ab5("%s",AUx);else this.Ail.BkV((F=this.
R,F[1].call(F[0])));A._GetAutoObject(A.Device.Device).YN(AkE);},Fk:function(){var
BcI=3;var BcH=this.Ail.BkL();if(!!BcH)BcI=BcH.Anm;else A.ab5("%s",AUy);A._GetAutoObject(
A.Device.Device).YN(BcI);},_Init:function(aArg){C.A8z._Init.call(this.Ail={I:this
},0);this.__proto__=C.A8x;this.Init(aArg);A.h7++;},_Done:function(){this.__proto__=
null;this.Ail._Done();A.h7--;},_ReInit:function(){this.Ail._ReInit();},_Mark:function(
D){var B;if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ail).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"};C.
AZ={_Init:function(){C.A8x._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.AEA={HX:null,XZ:null,Aeq:null,Z2:null,Mn:null,Ax9:
1,RatingMode:0,RatedAttribute:0,CT:function(){this.XZ.Q(this.Bao(this.RatedAttribute
));this.AIS(this);},Ai:function(Ae){this.Mn.Q(A._GetAutoObject(A.Device.Helper).
NO(A.aaR(A.acf.APJ),Q0,this.Ax9.toFixed()));if(this.RatingMode===1)this.Mn.Y(true
);else this.Mn.Y(false);},CI:function(H){var B;C.AC.CI.call(this,H);if(A._GetAutoObject(
A.Device.Device).Bq.K7())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bq.Hz().toFixed(),0,null);this.HX.F$();this.HX.OnSetAnimalId(A.
_GetAutoObject(A.Device.Helper).X.Id);A._GetAutoObject(A.Device.Helper).Awa(this.
HX,5);A.zX([this,this.AIS],[B=A._GetAutoObject(A.Device.Device),B.AQE,B.AXW],0);
A.zX([this,this.AIS],[B=A._GetAutoObject(A.Device.Helper).X,B.Px,B.DS],0);A.pe([
this,this.AIS],this);},ArF:function(H){var a=this.AIw(this.RatedAttribute);this.
BcY();this.Ax9=this.Ax9-1;this.An();if(!a)this.APQ();else this.Sf(a);},We:function(
H){var a=this.Bav(this.RatedAttribute);this.BcY();this.Ax9=this.Ax9+1;this.An();
if(!a)this.A5q();else this.Sf(a);},AIw:function(Na){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(Na){case 1:return 2;case 4:return 1;case 3:return 4;
default:return 0;}else throw new Error(AF0);},Bav:function(Na){if(!this.RatingMode
)return 0;else if(this.RatingMode===1)switch(Na){case 2:return 1;case 1:return 4;
case 4:return 3;default:return 0;}else throw new Error(AF0);},Sf:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.XZ.Q(this.Bao(E));this.
DM(E);this.Aeq.Am2(this.HX.BfI(E));if(!this.AIw(E)){if(this.AO8())this.N.Cm(A.aaL(
A.ach.AaT));else this.N.Cm(null);}else this.N.Cm(A.aaL(A.ach.AdP));},Bao:function(
Na){return this.Z2.B0(Na);},BvU:function(Na){if(!!Na){var a=this.AIw(Na);if(!a)return A.
jV;else return this.Bap(a);}else return A.jV;},BvT:function(Na){if(!!Na){var a=this.
Bav(Na);if(!a)return A.jV;else return this.Bap(a);}else return A.jV;},APQ:function(
){},A5q:function(){},A4q:function(){return null;},Bap:function(Na){return this.Z2.
Lh(Na);},BcY:function(){if(!!this.RatedAttribute)this.HX.Bln(this.RatedAttribute
,this.Aeq.A4);},AIS:function(H){if(this.AO8())this.RatingMode=A._GetAutoObject(A.
Device.Device).RatingMode;else this.RatingMode=0;this.Sf(2);this.DM(this.RatedAttribute
);this.An();},W8:function(H){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},Akf:function(H){var a=this.AIw(this.RatedAttribute);if(!a){if(this.AO8())this.
W8(this);}else this.APQ();},DM:function(Na){this.N.Hm(this.BvU(Na));if(!!this.N.
Ani){this.N.CS(null);this.N.Ow(true);}else{this.N.CS(A.aaL(A.ach.AdP));this.N.Ow(
false);}this.N.BU(this.BvT(Na));if(!!this.N.Ank){this.N.C7(null);this.N.Ox(true);
}else{this.N.C7(this.A4q());this.N.Ox(false);}},AO8:function(){switch(A._GetAutoObject(
A.Device.Helper).X.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.ab5("%s%e",Ar4,A._GetAutoObject(A.Device.Helper).X.AnimalType);}return false;}
,_Init:function(aArg){C.AC._Init.call(this,aArg);A.acg.Text._Init.call(this.XZ={
I:this},0);C.Rating._Init.call(this.Aeq={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.Z2={I:this},0);A.acg.Text._Init.call(this.Mn={I:this},0);this.__proto__=
C.AEA;this.Background.L(A.jb.CM);this.N.Y(true);this.Dp(C.Ix);this.XZ.G(AUz);this.
XZ.KF(true);this.XZ.L(A.jb.Text);this.Aeq.G(AUA);this.Mn.G(AUB);this.Mn.A2(0x14);
this.Mn.Q(A.aaR(A.acf.APJ));this.Mn.L(A.jb.Text);this.J(this.XZ,0);this.J(this.Aeq
,0);this.J(this.Mn,0);this.Ba(this.Aeq);this.N.Cu=[this,this.ArF];this.N.Cf=[this
,this.Akf];this.N.Ci=[this,this.We];this.XZ.S(A.aaL(A.fl.Ah));this.Aeq.AQ=[this,
this.We];this.Mn.S(A.aaL(A.fl.Ah));this.HX=A._NewObject(A.Device.Rating,0);},_Done:
function(){this.__proto__=C.AC;this.XZ._Done();this.Aeq._Done();this.Z2._Done();
this.Mn._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this
);this.XZ._ReInit();this.Aeq._ReInit();this.Z2._ReInit();this.Mn._ReInit();this.
Mn.Q(A.aaR(A.acf.APJ));this.XZ.S(A.aaL(A.fl.Ah));this.Mn.S(A.aaL(A.fl.Ah));this.
CT();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.HX)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aeq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Mn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"
};C.HQ={Z:null,Gender:null,AnimalType:null,Breed:null,I6:null,O5:null,ArU:null,B4:
null,C4:null,Dc:null,CB:null,FY:null,Au:null,Kw:0,Init:function(aArg){A.zX([this
,this.A_M],this.B4.R,0);A.pe([this,this.A_M],this);A.pe([this,this.AzI],this);},
Ai:function(Ae){C.AC.Ai.call(this,Ae);A._GetAutoObject(A.Device.Helper).A3l(this.
Z);},Dr:function(H){var B;var E5=0;var W=this.AY;switch(this.Cl.CH){case 6:E5=2;
break;case 7:E5=7;break;case 4:E5=4;break;case 5:E5=5;break;default:;}W=this.RT(
W,E5,0x415);if(!!W)this.Ba(W);if(!!W&&((W.T&0x400)===0x400))this.Z.Hx(W,true,null
,null);this.AzI(this);},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[
1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},AgE:function(E){
if(this.Kw===E)return;this.Kw=E;A.abo([this,this.Au0,this.AgE],0);},AzI:function(
H){var B;var Hs=(C.Cd.isPrototypeOf(B=this.AY)?B:null);this.N.Hm(A.jV);this.N.CS(
A.aaL(A.ach.ET));this.N.Cu=[this,this.AHc];if(!!Hs&&!!Hs.AlG){this.N.FA(A.jV);this.
N.Kj.Dz(255);this.N.AqP(Hs.ApU);this.N.Cm(Hs.AuC);this.N.Cf=Hs.AlG;}else{this.N.
FA(A.jV);this.N.Cm(null);this.N.Cf=null;}if(!!Hs&&!!Hs.AfH){this.N.BU(A.jV);this.
N.Ih.Dz(Hs.Av0);this.N.AmT(Hs.Al$);this.N.C7(Hs.Ap8);this.N.Ci=Hs.AfH;}else this.
Atc();},Afr:function(H){A.ab5("%s",AwZ);},Axw:function(s){this.Afr(s);},Ed:function(
H){A.ab5("%s",AwZ);},AHc:function(s){this.Ed(s);},Atc:function(){A.ab5("%s",Akx);
},Ay5:function(H){A.ab5("%s",AwZ);},WG:function(s){this.Ay5(s);},LA:function(Af){
this.Ba(Af);this.Z.Hx(Af,true,null,null);this.Z.UY(null,null);},AoU:function(H){
var F;this.Dc.AgL(A._GetAutoObject(A.Device.Helper).AaH((F=this.B4.R,F[1].call(F[
0]))));},A_M:function(s){this.AoU(s);},G3:function(H){A.pe([this,this.E7],this);
},Au0:function(){return this.Kw;},_Init:function(aArg){C.AC._Init.call(this,aArg
);A.Core.Z._Init.call(this.Z={I:this},0);C.Gender._Init.call(this.Gender={I:this
},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.Breed._Init.call(this.
Breed={I:this},0);C.Ui._Init.call(this.I6={I:this},0);A.Device.MN._Init.call(this.
O5={I:this},0);A.Device.KK._Init.call(this.ArU={I:this},0);C.B_._Init.call(this.
B4={I:this},0);C.B_._Init.call(this.C4={I:this},0);C.Akd._Init.call(this.Dc={I:this
},0);C.Awc._Init.call(this.CB={I:this},0);C.ArA._Init.call(this.FY={I:this},0);C.
Au._Init.call(this.Au={I:this},0);this.__proto__=C.HQ;var B;this.N.Y(true);this.
Dp(C.Ix);this.Z.G(E2);this.Z.J$(1);this.Kw=A._GetAutoObject(A.Device.Helper).AaH(
this.AnimalType.R);this.B4.G(Ahe);this.B4.Aj(true);this.B4.U(A.aaR(A.acf.AeK));this.
C4.G(Aw0);this.C4.Aj(true);this.C4.U(A.aaR(A.acf.AeA));this.Dc.G(AnC);this.Dc.Aj(
true);this.Dc.U(A.aaR(A.acf.Kw));this.Dc.GC(1000);this.Dc.Fd(99000);this.Dc.AgL(
A._GetAutoObject(A.Device.Helper).AaH(this.AnimalType.R));this.CB.G(Ahf);this.CB.
Aj(true);this.CB.U(A.aaR(A.acf.Breed));this.FY.G(AUC);this.FY.Aj(true);this.FY.U(
A.aaR(A.acf.I6));this.Au.G(Aw1);this.J(this.Z,0);this.J(this.B4,0);this.J(this.C4
,0);this.J(this.Dc,0);this.J(this.CB,0);this.J(this.FY,0);this.J(this.Au,0);this.
Z.Eh=[this,this.G3];this.Gender.LO(A._GetAutoObject(A.Device.Helper).X);this.AnimalType.
LO(A._GetAutoObject(A.Device.Helper).X);this.Breed.LO(A._GetAutoObject(A.Device.
Helper).X);this.I6.LO(A._GetAutoObject(A.Device.Helper).X);this.B4.Av([B=this.AnimalType
,B.Ce,B.Cg]);this.B4.CN(this.AnimalType);this.C4.Av([B=this.Gender,B.Ce,B.Cg]);this.
C4.CN(this.Gender);this.Dc.Av([this,this.Au0,this.AgE]);this.CB.GB([this,this.Ea
,this.G_]);this.CB.LN([B=this.CB,B.Ge]);this.CB.LP(A.aaL(A.ach.Edit));this.CB.Av([
B=this.Breed,B.Ce,B.Cg]);this.CB.CN(this.Breed);this.CB.AmS(this.O5);this.FY.GB([
this,this.Ea,this.G_]);this.FY.LN([B=this.FY,B.Ge]);this.FY.LP(A.aaL(A.ach.Edit)
);this.FY.Av([B=this.I6,B.Ce,B.Cg]);this.FY.CN(this.I6);this.FY.AmS(this.ArU);this.
Init(aArg);},_Done:function(){this.__proto__=C.AC;this.Z._Done();this.Gender._Done(
);this.AnimalType._Done();this.Breed._Done();this.I6._Done();this.O5._Done();this.
ArU._Done();this.B4._Done();this.C4._Done();this.Dc._Done();this.CB._Done();this.
FY._Done();this.Au._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.
call(this);this.Z._ReInit();this.Gender._ReInit();this.AnimalType._ReInit();this.
Breed._ReInit();this.I6._ReInit();this.O5._ReInit();this.ArU._ReInit();this.B4._ReInit(
);this.C4._ReInit();this.Dc._ReInit();this.CB._ReInit();this.FY._ReInit();this.Au.
_ReInit();this.B4.U(A.aaR(A.acf.AeK));this.C4.U(A.aaR(A.acf.AeA));this.Dc.U(A.aaR(
A.acf.Kw));this.CB.U(A.aaR(A.acf.Breed));this.FY.U(A.aaR(A.acf.I6));},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I6).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.O5)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.ArU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B4)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalDataScreen"};C.VX={AxK:false,Lz:function(H){if(A._GetAutoObject(
A.Device.Device).Aq.K7())A._GetAutoObject(A.Device.Device).A6(41,true,A._GetAutoObject(
A.Device.Device).Aq.Hz().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).X.F$(
);A._GetAutoObject(A.Device.Helper).Apu(A._GetAutoObject(A.Device.Helper).X);},Atc:
function(){this.N.BU(A.jV);this.N.C7(A.aaL(A.ach.AB3));this.N.Ci=[this,this.Axw];
},CI:function(H){if(!this.AxK){this.AxK=true;A.pe([this,this.WG],this);}else C.Aqs.
CI.call(this,H);},Ay5:function(H){A._GetAutoObject(C.AZ).BZ(55);},_Init:function(
aArg){C.Aqs._Init.call(this,aArg);this.__proto__=C.VX;this.Kh(this.Au,-1);},_className:
"Application::NewAnimalManualDataScreen"};C.Ix={_Init:function(aArg){C.ABK._Init.
call(this,aArg);this.__proto__=C.Ix;this.A7o(false);},_className:"Application::HeaderSelectedAnimalId"
};C.IS={Filter:null,Gender:null,AnimalType:null,Transponder:null,D$:null,Z:null,
PH:null,SA:null,NT:null,SB:null,M9:null,O3:null,Rp:null,Of:null,Rq:null,Nr:null,
K4:null,Je:null,KJ:null,Mg:null,XT:null,SC:null,Rr:null,Au:null,AwB:0,AwA:0,AtA:
0,Atz:0,Aqr:0,ArN:0,Auf:0,Aug:0,AlK:false,Ans:false,Init:function(aArg){A.zX([this
,this.Aul],this.K4.R,0);A.zX([this,this.AtF],this.Je.R,0);A.zX([this,this.Bmy],this.
KJ.R,0);A.zX([this,this.Bg4],this.Mg.R,0);A.zX([this,this.Bm1],this.M9.R,0);A.zX([
this,this.Bm0],this.NT.R,0);A.zX([this,this.BdX],this.Nr.R,0);A.zX([this,this.BdW
],this.Of.R,0);this.Ba(this.PH);},Dr:function(H){var E5=0;var W=this.AY;switch(this.
Cl.CH){case 6:E5=2;break;case 7:E5=7;break;case 4:E5=4;break;case 5:E5=5;break;default:;
}W=this.RT(W,E5,0x414);if(!!W)this.Ba(W);this.MD(this);},CI:function(H){if(!!A._GetAutoObject(
A.Device.Device).Aq.Filter)this.Bm(A._GetAutoObject(A.Device.Device).Aq.Filter.Gu(
));else this.Bm(A._NewObject(A.Device.Filter,0));},Ed:function(H){A._GetAutoObject(
C.AZ).Fk();},A0z:function(H){var Et=(C.AdH.isPrototypeOf(H)?H:null);if(!Et)return;
var Ay=this.Filter.DW(Et.Eg,Et.Operator);if(!!Ay){this.Filter.QM(Ay);A.abo([this
,this.Fw,this.FB],0);}else{if(Et.Eg===11){Ay=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay.ES=Et.Eg;Ay.Operator=Et.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Ay)?Ay:null).A4=true;}else if(Et.Eg===12){Ay=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay.ES=Et.Eg;Ay.Operator=Et.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Ay)?Ay:null).A4=true;}else if(Et.Eg===8){Ay=A._NewObject(A.Device.BoolFilterCriterion
,0);Ay.ES=Et.Eg;Ay.Operator=Et.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
Ay)?Ay:null).A4=true;}else A.ab5("%s",AF1+Et.Eg.toFixed());if(!!Ay){this.Filter.
CZ(Ay);A.abo([this,this.Fw,this.FB],0);}}},Bwq:function(H){A._GetAutoObject(A.Device.
Device).Aq.Bm(this.Filter);A._GetAutoObject(C.AZ).Fk();},Ay3:function(H){var Et=(
C.Amf.isPrototypeOf(H)?H:null);if(!Et)return;var Ay=this.Filter.DW(Et.Eg,Et.Operator
);if(!!Ay){this.Filter.QM(Ay);A.abo([this,this.Fw,this.FB],0);}else{if(Et.Eg===7
){Ay=A._NewObject(A.Device.GenderFilterCriterion,0);Ay.ES=Et.Eg;Ay.Operator=Et.Operator;
}else if(Et.Eg===14){Ay=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);Ay.ES=
Et.Eg;Ay.Operator=Et.Operator;}else if((Et.Eg===22)||(Et.Eg===26)){var AYA=A._NewObject(
A.Device.UInt64FilterCriterion,0);AYA.ES=Et.Eg;AYA.Operator=0;Ay=AYA;}else A.ab5(
"%s",AF1+Et.Eg.toFixed());if(!!Ay){this.Filter.CZ(Ay);A.abo([this,this.Fw,this.FB
],0);}}},A7j:function(E){if(this.Auf===E)return;this.Auf=E;A.abo([this,this.BhI,
this.A7j],0);},A7k:function(E){if(this.Aug===E)return;this.Aug=E;A.abo([this,this.
BhJ,this.A7k],0);},Aul:function(H){var F;this.A7k((F=this.K4.R,F[1].call(F[0])));
var Ay=this.Filter.DW(7,0);if(!!Ay){var Ayr=(A.Device.GenderFilterCriterion.isPrototypeOf(
Ay)?Ay:null);if(!!Ayr)Ayr.A4=this.Aug;else A.ab5("%s",AeX);}},AtF:function(H){var
F;this.A7j((F=this.Je.R,F[1].call(F[0])));var Ay=this.Filter.DW(14,0);if(!!Ay){var
Ux=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!Ux)Ux.A4=
this.Auf;else A.ab5("%s",AeX);}},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1
))[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},A70:function(
E){if(this.ArN===E)return;this.ArN=E;A.abo([this,this.Bij,this.A70],0);},Bmy:function(
H){var F;this.A70((F=this.KJ.R,F[1].call(F[0])));var Ay=this.Filter.DW(22,1);if(
!!Ay){var Aiu=(A.Device.UInt64FilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!Aiu
)switch(this.ArN){case 1:Aiu.Operator=5;break;case 0:Aiu.Operator=0;break;default:
A.ab5("%s%e",AF2,this.ArN);}else A.ab5("%s",AeX);}},A7w:function(E){if(this.Aqr===
E)return;this.Aqr=E;A.abo([this,this.BhZ,this.A7w],0);},Bg4:function(H){var F;this.
A7w((F=this.Mg.R,F[1].call(F[0])));var Ay=this.Filter.DW(26,1);if(!!Ay){var AsT=(
A.Device.UInt64FilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!AsT)switch(this.Aqr
){case 1:AsT.Operator=5;break;case 0:AsT.Operator=0;break;default:A.ab5("%s%e",AF2
,this.Aqr);}else A.ab5("%s",AeX);}},Bm:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.PH.Bm([this,this.Fw,this.FB]);this.SA.
Bm([this,this.Fw,this.FB]);this.NT.Bm([this,this.Fw,this.FB]);this.SB.Bm([this,this.
Fw,this.FB]);this.M9.Bm([this,this.Fw,this.FB]);this.O3.Bm([this,this.Fw,this.FB
]);this.Rp.Bm([this,this.Fw,this.FB]);this.Of.Bm([this,this.Fw,this.FB]);this.Rq.
Bm([this,this.Fw,this.FB]);this.Nr.Bm([this,this.Fw,this.FB]);this.K4.Bm([this,this.
Fw,this.FB]);this.Je.Bm([this,this.Fw,this.FB]);this.KJ.Bm([this,this.Fw,this.FB
]);this.Mg.Bm([this,this.Fw,this.FB]);this.XT.Bm([this,this.Fw,this.FB]);this.SC.
Bm([this,this.Fw,this.FB]);this.Rr.Bm([this,this.Fw,this.FB]);this.Aq7(false);A.
pe([this,this.A10],this);var Ba7=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DW(1,2))?B:null);if(!!Ba7){this.Aq7(true);this.AEi(Ba7.A4);}var BaB=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DW(1,3))?B:null);if(!!
BaB){this.Aq7(true);this.AEj(BaB.A4);}this.AqI(false);A.pe([this,this.A1T],this);
var Ba6=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DW(4,3))?B:null
);if(!!Ba6){this.AqI(true);this.AC8(A._GetAutoObject(A.Device.Helper).MB(Ba6.A4,
A._GetAutoObject(A.Device.Helper).Dx()));}var BaA=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DW(4,2))?B:null);if(!!BaA){this.AqI(true);this.AC_(A.
_GetAutoObject(A.Device.Helper).MB(BaA.A4,A._GetAutoObject(A.Device.Helper).Dx()
)+1);}var Ayr=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DW(7,0
))?B:null);if(!!Ayr)this.K4.Bx(this.Gender.DO(Ayr.A4));var Ux=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DW(14,0))?B:null);if(!!Ux)this.Je.Bx(this.AnimalType.
DO(Ux.A4));var Aiu=this.Filter.DW(22,1);if(!!Aiu){if(!Aiu.Operator)this.KJ.Bx(0);
else this.KJ.Bx(1);}var AsT=this.Filter.DW(26,1);if(!!AsT){if(!AsT.Operator)this.
Mg.Bx(0);else this.Mg.Bx(1);}},FB:function(Ap){this.Bm(Ap);},AEj:function(E){if(
this.AwB===E)return;this.AwB=E;A.abo([this,this.A6M,this.AEj],0);},AEi:function(
E){if(this.AwA===E)return;this.AwA=E;A.abo([this,this.A6L,this.AEi],0);},Bm1:function(
H){var F;this.AEj((F=this.M9.R,F[1].call(F[0])));var Ay=this.Filter.DW(1,3);if(!
!Ay){var Az3=(A.Device.Int32FilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!Az3)
Az3.A4=this.AwB;else A.ab5("%s",AeX);}},Bm0:function(H){var F;this.AEi((F=this.NT.
R,F[1].call(F[0])));var Ay=this.Filter.DW(1,2);if(!!Ay){var Az3=(A.Device.Int32FilterCriterion.
isPrototypeOf(Ay)?Ay:null);if(!!Az3)Az3.A4=this.AwA;else A.ab5("%s",AeX);}},Bbx:
function(H){var Et=(C.Ai6.isPrototypeOf(H)?H:null);if(!Et)return;var Ay=this.Filter.
DW(Et.Eg,Et.Operator);if(!!Ay){this.Filter.QM(Ay);A.abo([this,this.Fw,this.FB],0
);}else{if(Et===this.SA){Ay=A._NewObject(A.Device.Int32FilterCriterion,0);Ay.ES=
Et.Eg;Ay.Operator=Et.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(Ay)?Ay:
null).A4=this.AwA;this.Ba(this.NT);}else if(Et===this.SB){Ay=A._NewObject(A.Device.
Int32FilterCriterion,0);Ay.ES=Et.Eg;Ay.Operator=Et.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(Ay)?Ay:null).A4=this.AwB;this.Ba(this.M9);}if(!!Ay){this.Filter.CZ(
Ay);A.abo([this,this.Fw,this.FB],0);}}A.pe([this,this.A10],this);},A10:function(
H){var A0l=!!this.Filter.DW(this.NT.Eg,this.NT.Operator);var A12=!!this.Filter.DW(
this.M9.Eg,this.M9.Operator);A._GetAutoObject(A.Device.Helper).Mp(this.SA,this.Ans
);A._GetAutoObject(A.Device.Helper).Mp(this.SB,this.Ans);A._GetAutoObject(A.Device.
Helper).Mp(this.NT,A0l);A._GetAutoObject(A.Device.Helper).Mp(this.M9,A12);},MD:function(
H){var B;this.Z.UY(null,null);if(!!this.AY&&((this.AY.T&0x400)===0x400))this.Z.Hx(
this.AY,true,null,null);},Bxi:function(H){A.pe([this,this.E7],this);A.pe([this,this.
MD],this);},Bwn:function(H){this.Aq7(!this.Ans);if(this.Ans===false){var Ay=this.
Filter.DW(this.PH.Eg,this.PH.Operator);while(!!Ay){this.Filter.QM(Ay);Ay=this.Filter.
DW(this.PH.Eg,this.PH.Operator);}A.abo([this,this.Fw,this.FB],0);}},Aq7:function(
E){if(this.Ans===E)return;this.Ans=E;A.abo([this,this.A6K,this.Aq7],0);A.pe([this
,this.A10],this);},AC_:function(E){if(this.AtA===E)return;this.AtA=E;A.abo([this
,this.A51,this.AC_],0);},AC8:function(E){if(this.Atz===E)return;this.Atz=E;A.abo([
this,this.A5Z,this.AC8],0);},BdX:function(H){var F;this.AC_((F=this.Nr.R,F[1].call(
F[0])));var Ay=this.Filter.DW(4,2);if(!!Ay){var AkF=(A.Device.UInt32FilterCriterion.
isPrototypeOf(Ay)?Ay:null);if(!!AkF){var Z6=A._GetAutoObject(A.Device.Helper).Y$(
this.AtA-1);AkF.A4=Z6;}else A.ab5("%s",AeX);}},BdW:function(H){var F;this.AC8((F=
this.Of.R,F[1].call(F[0])));var Ay=this.Filter.DW(4,3);if(!!Ay){var AkF=(A.Device.
UInt32FilterCriterion.isPrototypeOf(Ay)?Ay:null);if(!!AkF){var Z6=A._GetAutoObject(
A.Device.Helper).Y$(this.Atz);AkF.A4=Z6;}else A.ab5("%s",AeX);}},A1T:function(H){
var A0l=!!this.Filter.DW(this.Of.Eg,this.Of.Operator);var A12=!!this.Filter.DW(this.
Nr.Eg,this.Nr.Operator);A._GetAutoObject(A.Device.Helper).Mp(this.Rp,this.AlK);A.
_GetAutoObject(A.Device.Helper).Mp(this.Rq,this.AlK);A._GetAutoObject(A.Device.Helper
).Mp(this.Of,A0l);A._GetAutoObject(A.Device.Helper).Mp(this.Nr,A12);},AqI:function(
E){if(this.AlK===E)return;this.AlK=E;A.abo([this,this.A5Y,this.AqI],0);A.pe([this
,this.A1T],this);},Bbw:function(H){var Et=(C.Ai6.isPrototypeOf(H)?H:null);if(!Et
)return;var Ay=this.Filter.DW(Et.Eg,Et.Operator);if(!!Ay){this.Filter.QM(Ay);A.abo([
this,this.Fw,this.FB],0);}else{if(Et===this.Rp){Ay=A._NewObject(A.Device.UInt32FilterCriterion
,0);Ay.ES=Et.Eg;Ay.Operator=Et.Operator;(A.Device.UInt32FilterCriterion.isPrototypeOf(
Ay)?Ay:null).A4=A._GetAutoObject(A.Device.Helper).Y$(this.Atz);this.Ba(this.Of);
}else if(Et===this.Rq){Ay=A._NewObject(A.Device.UInt32FilterCriterion,0);Ay.ES=Et.
Eg;Ay.Operator=Et.Operator;(A.Device.UInt32FilterCriterion.isPrototypeOf(Ay)?Ay:
null).A4=A._GetAutoObject(A.Device.Helper).Y$(this.AtA-1);this.Ba(this.Nr);}if(!
!Ay){this.Filter.CZ(Ay);A.abo([this,this.Fw,this.FB],0);}}A.pe([this,this.A1T],this
);},Bwm:function(H){this.AqI(!this.AlK);if(this.AlK===false){var Ay=this.Filter.
DW(this.O3.Eg,this.O3.Operator);while(!!Ay){this.Filter.QM(Ay);Ay=this.Filter.DW(
this.O3.Eg,this.O3.Operator);}A.abo([this,this.Fw,this.FB],0);}},Fw:function(){return this.
Filter;},BhJ:function(){return this.Aug;},BhI:function(){return this.Auf;},Bij:function(
){return this.ArN;},BhZ:function(){return this.Aqr;},A6M:function(){return this.
AwB;},A6L:function(){return this.AwA;},A6K:function(){return this.Ans;},A51:function(
){return this.AtA;},A5Z:function(){return this.Atz;},A5Y:function(){return this.
AlK;},_Init:function(aArg){C.AC._Init.call(this,aArg);C.Gender._Init.call(this.Gender={
I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.AAi._Init.call(
this.Transponder={I:this},0);C.AAi._Init.call(this.D$={I:this},0);A.Core.Z._Init.
call(this.Z={I:this},0);C.AAv._Init.call(this.PH={I:this},0);C.Ai6._Init.call(this.
SA={I:this},0);C.AaG._Init.call(this.NT={I:this},0);C.Ai6._Init.call(this.SB={I:
this},0);C.AaG._Init.call(this.M9={I:this},0);C.AAv._Init.call(this.O3={I:this},
0);C.Ai6._Init.call(this.Rp={I:this},0);C.ABf._Init.call(this.Of={I:this},0);C.Ai6.
_Init.call(this.Rq={I:this},0);C.ABf._Init.call(this.Nr={I:this},0);C.Amf._Init.
call(this.K4={I:this},0);C.Amf._Init.call(this.Je={I:this},0);C.Amf._Init.call(this.
KJ={I:this},0);C.Amf._Init.call(this.Mg={I:this},0);C.Qh._Init.call(this.XT={I:this
},0);C.Qh._Init.call(this.SC={I:this},0);C.Qh._Init.call(this.Rr={I:this},0);C.Au.
_Init.call(this.Au={I:this},0);this.__proto__=C.IS;var B;this.N.Y(true);this.N.BU(
A.aaR(A.acf.A2C));this.Dp(C.ANz);this.Gender.Av(this.Aug);this.AnimalType.Av(this.
Auf);this.Transponder.Av(this.ArN);this.D$.Av(this.Aqr);this.Z.G(E2);this.Z.J$(1
);this.PH.G(KL);this.PH.Aj(true);this.PH.U(A._GetAutoObject(A.Device.Helper).Amd(
0,1));this.PH.M2(1);this.SA.G(Q2);this.SA.Aj(true);this.SA.U(A.aaR(A.acf.ACv));this.
SA.M2(1);this.SA.Ov(2);this.NT.G(WE);this.NT.M2(1);this.NT.Ov(2);this.NT.AEa(A.aaR(
A.acf.Gy));this.SB.G(Aky);this.SB.Aj(true);this.SB.U(A.aaR(A.acf.AFu));this.SB.M2(
1);this.SB.Ov(3);this.M9.G(AnD);this.M9.Aj(true);this.M9.M2(1);this.M9.Ov(3);this.
M9.AEa(A.aaR(A.acf.Gy));this.O3.G(AUD);this.O3.Aj(true);this.O3.U(A.aaR(A.acf.S9
));this.O3.M2(4);this.Rp.G(AUE);this.Rp.Aj(true);this.Rp.U(A.aaR(A.acf.ACv));this.
Rp.M2(4);this.Rp.Ov(3);this.Of.G(AUF);this.Of.M2(4);this.Of.Ov(3);this.Of.A7B(2);
this.Rq.G(AUG);this.Rq.Aj(true);this.Rq.U(A.aaR(A.acf.AFu));this.Rq.M2(4);this.Rq.
Ov(2);this.Nr.G(AUH);this.Nr.Aj(true);this.Nr.M2(4);this.Nr.Ov(2);this.Nr.A7B(3);
this.K4.G(Ar5);this.K4.Aj(true);this.K4.M2(7);this.K4.AgN(0);this.K4.Ov(0);this.
Je.G(WD);this.Je.Aj(true);this.Je.M2(14);this.Je.AgN(0);this.Je.Ov(0);this.KJ.G(
WD);this.KJ.Aj(true);this.KJ.M2(22);this.KJ.AgN(0);this.KJ.Ov(1);this.Mg.G(WD);this.
Mg.Aj(true);this.Mg.M2(26);this.Mg.AgN(0);this.Mg.Ov(1);this.XT.G(WD);this.XT.Aj(
true);this.XT.M2(11);this.XT.AgN(0);this.XT.Ov(0);this.SC.G(WD);this.SC.Aj(true);
this.SC.M2(12);this.SC.AgN(0);this.SC.Ov(0);this.Rr.G(WD);this.Rr.Aj(true);this.
Rr.M2(8);this.Rr.AgN(0);this.Rr.Ov(0);this.Au.G(IJ);this.J(this.Z,0);this.J(this.
PH,0);this.J(this.SA,0);this.J(this.NT,0);this.J(this.SB,0);this.J(this.M9,0);this.
J(this.O3,0);this.J(this.Rp,0);this.J(this.Of,0);this.J(this.Rq,0);this.J(this.Nr
,0);this.J(this.K4,0);this.J(this.Je,0);this.J(this.KJ,0);this.J(this.Mg,0);this.
J(this.XT,0);this.J(this.SC,0);this.J(this.Rr,0);this.J(this.Au,0);this.N.Cu=[this
,this.Ed];this.N.Ci=[this,this.Bwq];this.N.CS(A.aaL(A.ach.ET));this.Z.Eh=[this,this.
Bxi];this.PH.AQ=[this,this.Bwn];this.PH.Av([this,this.A6K,this.Aq7]);this.SA.AQ=[
this,this.Bbx];this.NT.GB([this,this.Ea,this.G_]);this.NT.Av([this,this.A6L,this.
AEi]);this.SB.AQ=[this,this.Bbx];this.M9.GB([this,this.Ea,this.G_]);this.M9.Av([
this,this.A6M,this.AEj]);this.O3.AQ=[this,this.Bwm];this.O3.Av([this,this.A5Y,this.
AqI]);this.Rp.AQ=[this,this.Bbw];this.Of.GB([this,this.Ea,this.G_]);this.Of.Av([
this,this.A5Z,this.AC8]);this.Rq.AQ=[this,this.Bbw];this.Nr.GB([this,this.Ea,this.
G_]);this.Nr.Av([this,this.A51,this.AC_]);this.K4.AQ=[this,this.Ay3];this.K4.Av([
B=this.Gender,B.Ce,B.Cg]);this.K4.CN(this.Gender);this.Je.AQ=[this,this.Ay3];this.
Je.Av([B=this.AnimalType,B.Ce,B.Cg]);this.Je.CN(this.AnimalType);this.KJ.AQ=[this
,this.Ay3];this.KJ.Av([B=this.Transponder,B.Ce,B.Cg]);this.KJ.CN(this.Transponder
);this.Mg.AQ=[this,this.Ay3];this.Mg.Av([B=this.D$,B.Ce,B.Cg]);this.Mg.CN(this.D$
);this.XT.AQ=[this,this.A0z];this.SC.AQ=[this,this.A0z];this.Rr.AQ=[this,this.A0z
];this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.Gender._Done();this.
AnimalType._Done();this.Transponder._Done();this.D$._Done();this.Z._Done();this.
PH._Done();this.SA._Done();this.NT._Done();this.SB._Done();this.M9._Done();this.
O3._Done();this.Rp._Done();this.Of._Done();this.Rq._Done();this.Nr._Done();this.
K4._Done();this.Je._Done();this.KJ._Done();this.Mg._Done();this.XT._Done();this.
SC._Done();this.Rr._Done();this.Au._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Gender._ReInit();this.AnimalType._ReInit();this.Transponder.
_ReInit();this.D$._ReInit();this.Z._ReInit();this.PH._ReInit();this.SA._ReInit();
this.NT._ReInit();this.SB._ReInit();this.M9._ReInit();this.O3._ReInit();this.Rp.
_ReInit();this.Of._ReInit();this.Rq._ReInit();this.Nr._ReInit();this.K4._ReInit(
);this.Je._ReInit();this.KJ._ReInit();this.Mg._ReInit();this.XT._ReInit();this.SC.
_ReInit();this.Rr._ReInit();this.Au._ReInit();this.N.BU(A.aaR(A.acf.A2C));this.SA.
U(A.aaR(A.acf.ACv));this.NT.AEa(A.aaR(A.acf.Gy));this.SB.U(A.aaR(A.acf.AFu));this.
M9.AEa(A.aaR(A.acf.Gy));this.O3.U(A.aaR(A.acf.S9));this.Rp.U(A.aaR(A.acf.ACv));this.
Rq.U(A.aaR(A.acf.AFu));},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.
Filter)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.O3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rp
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Of)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Rq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nr)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.K4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Je)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SC
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Au)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalListFilterScreen"
};C.A8z={Za:null,BkV:function(Bt2){var EL=A._NewObject(C.A8y,0);EL.AC=Bt2;EL.Mh=
this.Za;this.Za=EL;},A8e:function(){var UO=null;if(!!this.Za){UO=this.Za.AC;this.
Za=this.Za.Mh;}return UO;},Contains:function(AkE){var EL=this.Za;while(!!EL){if(
EL.AC.Anm===AkE)return true;EL=EL.Mh;}return false;},BkL:function(){if(!!this.Za
)return this.Za.AC;else return null;},_Init:function(aArg){this.__proto__=C.A8z;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Za)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::ScreenStack"};C.A8y={AC:null,Mh:null,_Init:function(aArg){this.__proto__=
C.A8y;A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Mh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ScreenNode"
};C.AKm={APQ:function(){A._GetAutoObject(A.Device.Helper).Awa(this.HX,0);A._GetAutoObject(
C.AZ).Fk();},A5q:function(){this.HX.Co(A._GetAutoObject(A.Device.Device).Bq);A._GetAutoObject(
C.AZ).Fk();},A4q:function(){return A.aaL(A.ach.Amk);},_Init:function(aArg){C.AEA.
_Init.call(this,aArg);this.__proto__=C.AKm;this.Dp(C.Ix);},_className:"Application::AnimalActionRateScreen"
};C.AKi={V1:function(H){this.AfJ();this.Ex(A.aaR(A.acf.ASY),[this,this.ARt],5);this.
Ex(A.aaR(A.acf.A3e),[this,this.BiG],4);this.Ex(A.aaR(A.acf.Arh),[this,this.AqZ],
3);this.Ex(A.aaR(A.acf.Ag4),[this,this.AjX],2);this.Ex(A.aaR(A.acf.Adb),[this,this.
AqJ],1);this.Ex(A.aaR(A.acf.AiB),[this,this.AmP],0);A._GetAutoObject(C.BW).Gq();
A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.Ac9)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Cj(6);},Dr:function(H){},AaJ:function(){return C.AK$;},AaK:function(
){return C.ABM;},QO:function(H){var Bc=A._GetAutoObject(A.Device.Helper).MT();var
AxI=A._NewObject(A.Device.BoolFilterCriterion,0);AxI.Initialize(8,0,true,true);Bc.
CZ(AxI);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);},HH:function(H){C.EO.HH.call(
this,H);if(this.AjC()===false){this.N.Cm(A.aaL(A.ach.AEI));this.N.Cf=[this,this.
A3K];this.N.FA(A.jV);}this.N.Ow(false);this.N.Ox(false);},Afv:function(){A._GetAutoObject(
C.AZ).BZ(41);},Afu:function(){A._GetAutoObject(C.AZ).BZ(43);},_Init:function(aArg
){C.EO._Init.call(this,aArg);this.__proto__=C.AKi;var B;this.Dp(C.AM3);this.Do(A.
aaR(A.acf.A5x));this.AjW([B=A._GetAutoObject(A.Device.Device),B.A52,B.A_e]);},_ReInit:
function(){C.EO._ReInit.call(this);this.Do(A.aaR(A.acf.A5x));},_className:"Application::AlarmListScreen"
};C.ALA={Dr:function(H){},AoY:function(H){if(!!this.Be)A.ab5("%i",this.Be.AD.Gb);
var Aa=(C.AAC.isPrototypeOf(H)?H:null);if(!!Aa){A._GetAutoObject(A.Device.Helper
).HD(Aa.Hr);A._GetAutoObject(C.AZ).BZ(13);}},QO:function(H){var Bc=A._GetAutoObject(
A.Device.Helper).MT();var Ax1=A._NewObject(A.Device.BoolFilterCriterion,0);Ax1.Initialize(
9,0,true,true);Bc.CZ(Ax1);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);},HH:function(
H){C.EO.HH.call(this,H);this.N.Ow(false);this.N.Ox(false);},_Init:function(aArg){
C.EO._Init.call(this,aArg);this.__proto__=C.ALA;this.Dp(C.AM5);this.Do(A.aaR(A.acf.
A5y));},_ReInit:function(){C.EO._ReInit.call(this);this.Do(A.aaR(A.acf.A5y));},_className:
"Application::ControlListScreen"};C.AdH={Filter:null,Eg:0,I0:10,TableId:0,Operator:
1,CT:function(){var F;this.S2((F=this.Filter,F[1].call(F[0])).DW(this.Eg,this.Operator
));},Bg:function(aSize){C.Cd.Bg.call(this,aSize);this.V.G(A.abK(this.V.M,[aSize[
0]-(2*this.I0),aSize[1]]));},Bm:function(E){if(A.aaZ(this.Filter,E))return;if(!!
this.Filter)A.z$([this,this.L2],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.
L2],E,0);A.pe([this,this.L2],this);},L2:function(H){var F;if(!!this.Filter&&!!(F=
this.Filter,F[1].call(F[0])))this.S2((F=this.Filter,F[1].call(F[0])).DW(this.Eg,
this.Operator));else this.S2(null);},AgN:function(E){if(this.TableId===E)return;
this.TableId=E;A.pe([this,this.L2],this);},M2:function(E){if(this.Eg===E)return;
this.Eg=E;A.pe([this,this.L2],this);},S2:function(AM){if(!!AM)this.U(A._GetAutoObject(
A.Device.Helper).A4l(this.TableId,AM));else this.U(A._GetAutoObject(A.Device.Helper
).Amd(this.TableId,this.Eg));},Ov:function(E){if(this.Operator===E)return;this.Operator=
E;A.pe([this,this.L2],this);},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.
__proto__=C.AdH;this.V.G(AF3);this.V.A2(0x11);},_ReInit:function(){C.Cd._ReInit.
call(this);this.CT();},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.
Filter)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FilterItem"
};C.Qh={HW:null,Bg:function(aSize){var B;C.AdH.Bg.call(this,aSize);this.HW.G([(aSize[
0]-((B=this.HW.M)[2]-B[0]))-10,0,aSize[0]-10,aSize[1]]);this.V.G([this.I0,0,this.
HW.M[0]-this.I0,aSize[1]]);},S2:function(AM){this.U(A._GetAutoObject(A.Device.Helper
).Amd(this.TableId,this.Eg));var Ay=(A.Device.BoolFilterCriterion.isPrototypeOf(
AM)?AM:null);if(!!Ay&&Ay.A4)this.HW.Cr(1);else this.HW.Cr(0);},_Init:function(aArg
){C.AdH._Init.call(this,aArg);A.acg.Am._Init.call(this.HW={I:this},0);this.__proto__=
C.Qh;this.HW.G(AF4);this.HW.Cr(0);this.J(this.HW,0);this.HW.Ax(A.aaL(A.ach.ApS));
},_Done:function(){this.__proto__=C.AdH;this.HW._Done();C.AdH._Done.call(this);}
,_ReInit:function(){C.AdH._ReInit.call(this);this.HW._ReInit();},_Mark:function(
D){var B;C.AdH._Mark.call(this,D);if((B=this.HW)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::BoolFilterItem"};C.ANz={Am:null,Text:null,C5:function(
E){C.BN.C5.call(this,E);this.Text.L(E);this.Am.L(E);},_Init:function(aArg){C.BN.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);A.acg.Text._Init.call(
this.Text={I:this},0);this.__proto__=C.ANz;this.Am.G(AUI);this.Text.G(AUJ);this.
Text.A2(0x11);this.Text.Q(A.aaR(A.acf.Filter));this.J(this.Am,0);this.J(this.Text
,0);this.Am.Ax(A.aaL(A.ach.AdR));this.Text.S(A.aaL(A.fl.Ah));},_Done:function(){
this.__proto__=C.BN;this.Am._Done();this.Text._Done();C.BN._Done.call(this);},_ReInit:
function(){C.BN._ReInit.call(this);this.Am._ReInit();this.Text._ReInit();this.Text.
Q(A.aaR(A.acf.Filter));this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BN.
_Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSetFilter"};C.Aus={
CX:null,A0:null,Vv:null,Bg:function(aSize){var B;C.BN.Bg.call(this,aSize);this.Vv.
G(A.abJ(this.Vv.M,A.abe(this.A0.M.slice(0,2),AUK)));this.Vv.G(A.abK(this.Vv.M,A.
abf([(B=this.A0.M)[2]-B[0],B[3]-B[1]],AUL)));},Ai:function(Ae){var B;C.BN.Ai.call(
this,Ae);var Io=((Ae&0x40)===0x40)&&(this.AY===this.A0);if(Io)this.Vv.L(A.jb.AY);
else this.Vv.L(A.jb.Amm);},C5:function(E){C.BN.C5.call(this,E);this.CX.C5(E);},AgA:
function(){return this.A0.AgA();},DS:function(E){this.CX.DS(E);},_Init:function(
aArg){C.BN._Init.call(this,aArg);C.CX._Init.call(this.CX={I:this},0);C.A0._Init.
call(this.A0={I:this},0);A.acg.Cy._Init.call(this.Vv={I:this},0);this.__proto__=
C.Aus;this.CX.G(AUM);this.CX.DS(0);this.A0.G(AUN);this.Vv.G(AF5);this.Vv.NJ(2);this.
J(this.CX,0);this.J(this.A0,0);this.J(this.Vv,0);this.Ba(this.A0);},_Done:function(
){this.__proto__=C.BN;this.CX._Done();this.A0._Done();this.Vv._Done();C.BN._Done.
call(this);},_ReInit:function(){C.BN._ReInit.call(this);this.CX._ReInit();this.A0.
_ReInit();this.Vv._ReInit();},_Mark:function(D){var B;C.BN._Mark.call(this,D);if((
B=this.CX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Vv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearch"
};C.DE={Di:null,If:null,Ie:null,Afq:function(H){if(this.E9<0)this.M1(1);else if(
this.E9===9)this.M1(0);else this.M1(this.E9+1);A.pe(this.Di,this);},Ai:function(
Ae){var B;C.E9.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);var Io=((Ae&0x40)===0x40
);if(Io){this.Background.L(A.jb.AY);this.Text.L(A.jb.Bh);this.Dz(256);}else if(G1
){this.Background.L(this.MM);this.Text.L(A.jb.Text);this.Dz(256);}else{this.Background.
L(this.MM);this.Text.L(A.jb.Text);this.Dz(128);}},Afp:function(H){if(this.E9<=0)
this.M1(9);else this.M1(this.E9-1);A.pe(this.Di,this);},_Init:function(aArg){C.E9.
_Init.call(this,aArg);A.Core.BO._Init.call(this.If={I:this},0);A.Core.BO._Init.call(
this.Ie={I:this},0);this.__proto__=C.DE;this.If.Filter=4;this.Ie.Filter=5;this.If.
BP=[this,this.Afq];this.If.DR=[this,this.Afq];this.Ie.BP=[this,this.Afp];this.Ie.
DR=[this,this.Afp];},_Done:function(){this.__proto__=C.E9;this.If._Done();this.Ie.
_Done();C.E9._Done.call(this);},_ReInit:function(){C.E9._ReInit.call(this);this.
If._ReInit();this.Ie._ReInit();},_Mark:function(D){var B;C.E9._Mark.call(this,D);
if((B=this.Di)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.If)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputDigit"};C.A0={Di:null,Cn:null,CQ:null,Dm:null,Ef:null,FW:null
,EQ:null,E$:null,EZ:null,MR:0,Apz:false,Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);if(((Ae&0x40)===0x40)&&this.Apz)this.EQ.AjO(true);else this.EQ.AjO(false);}
,ADy:function(E){var B;if(E===this.AgA())return;var AIN=E;var Ek=this.EQ;while(!
!Ek){if(AIN>0){Ek.M1(AIN%10);AIN=(AIN/10)|0;}else Ek.M1(-1);Ek=(C.DE.isPrototypeOf(
B=this.RT(Ek,2,0x11))?B:null);}},AgA:function(){var B;var KP=A.jV;var P=0;var B2=
this.Cn;for(;P<6;P=P+1){if(!!B2&&(B2.E9>=0))KP=KP+B2.E9.toFixed();B2=(C.DE.isPrototypeOf(
B=this.Vj(B2,0x11))?B:null);}return A.wz(KP,-1,10);},N9:function(H){if(this.AgA(
)>=10)this.Bda(7);},MI:function(H){if((this.AgA()>0)&&(this.Cn.E9<0))this.Bda(2);
else if(this.AgA()<=0)this.EZ.O9=true;},AcO:function(H){A.pe(this.Di,this);},Bda:
function(GF){var B;var AJE=0;var Ek=null;switch(GF){case 2:{Ek=this.Cn;AJE=7;}break;
case 7:{Ek=this.EQ;AJE=2;}break;default:throw new Error(AUO);}while(!!Ek){var A0t=(
C.DE.isPrototypeOf(B=this.RT(Ek,AJE,0x11))?B:null);if(!!A0t)Ek.M1(A0t.E9);else if(
AJE===7)Ek.M1(0);else Ek.M1(-1);Ek=A0t;}A.pe([this,this.AcO],this);},AjO:function(
E){if(this.Apz===E)return;this.Apz=E;this.An();},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.DE._Init.call(this.Cn={I:this},0);C.DE._Init.call(this.CQ={I:this
},0);C.DE._Init.call(this.Dm={I:this},0);C.DE._Init.call(this.Ef={I:this},0);C.DE.
_Init.call(this.FW={I:this},0);C.DE._Init.call(this.EQ={I:this},0);A.Core.BO._Init.
call(this.E$={I:this},0);A.Core.BO._Init.call(this.EZ={I:this},0);this.__proto__=
C.A0;this.G(Aw2);this.Cn.AV(0x3);this.Cn.G(AF6);this.CQ.AV(0x3);this.CQ.G(AF7);this.
Dm.AV(0x3);this.Dm.G(AF8);this.Ef.AV(0x3);this.Ef.G(AF9);this.FW.AV(0x3);this.FW.
G(AF_);this.EQ.AV(0x3);this.EQ.G(AF$);this.EQ.M1(0);this.E$.Filter=6;this.EZ.Filter=
7;this.MR=A.jb.CM;this.J(this.Cn,0);this.J(this.CQ,0);this.J(this.Dm,0);this.J(this.
Ef,0);this.J(this.FW,0);this.J(this.EQ,0);this.Ba(this.EQ);this.Cn.Di=[this,this.
AcO];this.CQ.Di=[this,this.AcO];this.Dm.Di=[this,this.AcO];this.Ef.Di=[this,this.
AcO];this.FW.Di=[this,this.AcO];this.EQ.Di=[this,this.AcO];this.E$.BP=[this,this.
N9];this.EZ.BP=[this,this.MI];},_Done:function(){this.__proto__=A.Core.O;this.Cn.
_Done();this.CQ._Done();this.Dm._Done();this.Ef._Done();this.FW._Done();this.EQ.
_Done();this.E$._Done();this.EZ._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Cn._ReInit();this.CQ._ReInit();this.Dm._ReInit(
);this.Ef._ReInit();this.FW._ReInit();this.EQ._ReInit();this.E$._ReInit();this.EZ.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Di)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E$
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.BeB="61843bb9";C.ByM={Undefined:0,BzO:1,By3:2};C.Aj5={
S0:null,Aid:null,K0:null,ALE:null,Anp:null,push:function(Mv){if(!this.S0){Mv.AgQ=
null;Mv.Mh=null;this.S0=Mv;this.Aid=this.S0;}else{Mv.AgQ=this.Aid;Mv.Mh=null;this.
Aid.Mh=Mv;this.Aid=Mv;}},BxX:function(Mv){var PY=this.S0;while(!!PY){if(PY.JB.Id===
Mv.Id)return PY;PY=PY.Mh;}return PY;},BxB:function(Mv){if(Mv===this.S0)this.pop(
);else if(Mv===this.Aid){Mv=Mv.AgQ;if(!!Mv)Mv.Mh=null;this.Aid=Mv;}else{Mv.AgQ.Mh=
Mv.Mh;Mv.Mh.AgQ=Mv.AgQ;}},AgG:function(E){var F;if(this.K0===E)return;this.K0=E;
if(!!this.K0)this.K0.AfY(2);(F=this.ALE,F[2].call(F[0],this.K0));},UM:function(H
){var PY=(C.ARH.isPrototypeOf(H)?H:null);if(!!PY){if(!PY.JB.PopupState){if(!this.
K0)this.AgG(this.top());}else if(PY.JB.PopupState===4){this.pop();this.AgG(this.
top());}else if(PY.JB.PopupState===5){this.pop();this.AgG(this.top());}else if(PY.
JB.PopupState===7){this.pop();this.AgG(this.top());}else if(PY.JB.PopupState===8
){this.pop();this.AgG(this.top());}else if(PY.JB.PopupState===6){if(PY===this.K0
){this.pop();this.AgG(this.top());}else this.BxB(PY);}else if(PY.JB.PopupState===
3){this.pop();this.AgG(this.top());}}},pop:function(){var AI8=null;if(!!this.S0){
AI8=this.S0;if(this.S0===this.Aid){this.S0=null;this.Aid=null;}else{this.S0=this.
S0.Mh;if(!this.S0)throw new Error(AUP);this.S0.AgQ=null;}AI8.AgQ=null;AI8.Mh=null;
}return AI8;},top:function(){return this.S0;},Bxj:function(H){var B;var AsU=(A.Device.
PopupContext.isPrototypeOf(B=this.Anp.JB)?B:null);if(!!AsU){var A1z=this.BxX(AsU
);if(!!A1z){A1z.A7a(AsU);if(!AsU.Show)A1z.AfY(6);}else if(AsU.Show){var AIL=A._NewObject(
C.ARH,0);AIL.A7a(AsU);AIL.AQO=[this,this.UM];this.push(AIL);AIL.AfY(0);}}},_Init:
function(aArg){A.Core.A8V._Init.call(this.Anp={I:this},0);this.__proto__=C.Aj5;this.
Anp.AQe=[this,this.Bxj];this.Anp.Bi7(A._GetAutoObject(A.Device.Device).Am7);A.h7++;
},_Done:function(){this.__proto__=null;this.Anp._Done();A.h7--;},_ReInit:function(
){this.Anp._ReInit();},_Mark:function(D){var B;if((B=this.S0)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Aid)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K0)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ALE)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Anp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.ARH={SE:null,Mh:null,AgQ:null,JB:null,AQO:null,PopupIdToString:null,AhE:function(
Bs9,BtG,Bt1,BtR,BtT,BtQ,Btp){var UN=A._NewObject(C.ARG,0);UN.Bka(this.JB.Id);UN.
A7T(Bs9);UN.AQP=BtQ;UN.A7U(this.JB.Akm);UN.A7G(this.JB.Aj4);UN.Bv=A._NewObject(C.
N,0);UN.KD().Ci=BtT;UN.KD().Cf=null;UN.KD().Cu=BtR;UN.KD().BU(Bt1);UN.KD().Cm(null
);UN.KD().Hm(BtG);UN.KD().ADB(Btp);return UN;},AjL:function(){if(!this.SE){var Aib=
this.PopupIdToString.B0(this.JB.Id);switch(this.JB.Id){case 46:this.SE=this.AhE(
Aib,A.jV,A.aaR(A.acf.Ok),null,[this,this.AIQ],[this,this.Ah7],1);break;case 92:case
93:this.SE=this.AhE(Aib,A.jV,A.jV,null,null,[this,this.Ah7],0);break;case 39:this.
SE=this.AhE(Aib,A.aaR(A.acf.AlU),A.aaR(A.acf.Ok),[this,this.A0G],[this,this.A0H]
,[this,this.Ah7],3);break;case 13:this.SE=this.AhE(Aib,A.aaR(A.acf.AlU),A.aaR(A.
acf.Bk6),[this,this.A0F],[this,this.AIQ],[this,this.Ah7],3);break;case 25:this.SE=
this.AhE(Aib,A.aaR(A.acf.AlU),A.aaR(A.acf.Ok),[this,this.A0F],[this,this.AIQ],[this
,this.Ah7],3);break;case 58:case 9:case 6:case 29:case 42:case 47:case 48:case 59:
case 72:case 100:case 90:case 73:this.SE=this.AhE(Aib,A.aaR(A.acf.No),A.aaR(A.acf.
Yes),[this,this.A0G],[this,this.A0H],[this,this.Ah7],3);break;case 16:case 24:case
49:case 74:this.SE=this.AhE(Aib,A.aaR(A.acf.AlU),A.jV,[this,this.A0F],null,[this
,this.Ah7],1);break;case 4:case 91:case 7:case 33:case 44:case 37:case 38:case 63:
case 96:this.SE=this.AhE(Aib,A.aaR(A.acf.No),A.aaR(A.acf.Yes),[this,this.A0G],[this
,this.A0H],[this,this.Ah7],1);break;case 0:case 1:case 2:case 5:case 27:case 64:
case 28:case 30:case 41:case 50:case 51:case 57:case 52:case 53:case 56:case 45:
case 77:case 78:case 79:case 3:case 10:case 8:case 34:case 82:case 83:case 80:case
81:case 76:case 40:case 75:case 11:case 12:case 36:case 14:case 15:case 35:case 21:
case 22:case 43:case 85:case 26:case 23:case 32:case 69:case 17:case 19:case 54:
case 18:case 20:case 55:case 62:case 97:case 60:case 99:case 65:case 66:case 61:
case 105:case 31:case 67:case 86:case 68:case 70:case 71:case 101:case 98:case 88:
case 89:case 84:case 94:case 95:case 87:case 103:case 102:case 104:this.SE=this.
AhE(Aib,A.jV,A.aaR(A.acf.Ok),null,[this,this.AIQ],[this,this.Ah7],3);break;default:
A.ab5("%s",(AUQ+this.JB.Id.toFixed())+AUR);}}switch(this.JB.Id){case 16:case 49:
this.SE.A78(true);break;case 92:case 93:this.SE.A78(false);break;default:;}return this.
SE;},AIQ:function(H){this.AfY(4);},A0F:function(H){this.AfY(5);},A0H:function(H){
this.AfY(7);},A0G:function(H){this.AfY(8);},Ah7:function(H){this.AfY(3);},A7a:function(
E){if(this.JB===E)return;this.JB=E;if(!!this.SE){this.AjL().A7U(this.JB.Akm);this.
AjL().A7G(this.JB.Aj4);}},AfY:function(BtW){var B;this.JB.Bkb(BtW);(B=this.AQO)?
B[1].call(B[0],this):null;},BwT:function(H){this.AfY(9);},_Init:function(aArg){A.
Device.PopupIdToString._Init.call(this.PopupIdToString={I:this},0);this.__proto__=
C.ARH;A.h7++;},_Done:function(){this.__proto__=null;this.PopupIdToString._Done();
A.h7--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(D){var
B;if((B=this.SE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Mh)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AgQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
JB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AQO)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::PopupEntry"};C.FQ={BooleanToYesNo:null,Dt:function(){return 2;},C$:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gx:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToYesNo.B0(aIndex
);},DO:function(A1){return A1;},Hj:function(){return 1;},_Init:function(aArg){C.
AB._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.FQ;},_Done:function(){this.__proto__=C.AB;this.BooleanToYesNo.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Aez={TW:null,JW:function(H){var F;var BL=this.AK;this.Bx(this.AK+1);if(this.
AK!==BL){if(!!this.TW&&!!this.AB)switch(this.AB.C$(this.AK)){case 0:(F=this.TW,F[
2].call(F[0],false));break;case 1:(F=this.TW,F[2].call(F[0],true));break;default:;
}A.abo(this.TW,0);}},JR:function(H){var F;var BL=this.AK;this.Bx(this.AK-1);if(this.
AK!==BL){if(!!this.TW&&!!this.AB)switch(this.AB.C$(this.AK)){case 0:(F=this.TW,F[
2].call(F[0],false));break;case 1:(F=this.TW,F[2].call(F[0],true));break;default:;
}A.abo(this.TW,0);}},AjY:function(E){if(A.aaZ(this.TW,E))return;if(!!this.R)A.z$([
this,this.A1e],this.TW,0);this.TW=E;if(!!E)A.zX([this,this.A1e],E,0);if(!!E)A.pe([
this,this.A1e],this);},A1e:function(H){var F;if(!!this.TW){if((F=this.TW,F[1].call(
F[0])))this.Bx(1);else this.Bx(0);}},_Init:function(aArg){C.B_._Init.call(this,aArg
);this.__proto__=C.Aez;this.Kh(this.V,-1);},_Mark:function(D){var B;C.B_._Mark.call(
this,D);if((B=this.TW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.ART={I5:null,OC:null,IG:null,FX:null,AI:null,Aaz:null,Af3:null,Tj:null,RK:null
,AbY:null,Wn:null,G6:null,Az2:true,Init:function(aArg){var B;A.zX([this,this.Alk
],[B=A._GetAutoObject(A.Device.Device),B.AQF,B.AXX],0);A.pe([this,this.Alk],this
);},Ai:function(Ae){var F;C.AC.Ai.call(this,Ae);if(this.Az2)this.N.C7(A.aaL(A.ach.
AOQ));else this.N.C7(A.aaL(A.ach.AOR));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.OC.L(A.jb.Bh);this.RK.Y(false);this.Tj.Y(false);this.IG.Y(true);this.FX.
Ar(false);(F=this.FX.R,F[2].call(F[0],this.FX.B1));this.Background.L(A.jb.FU);}else
if(this.Aaz.Bw){this.OC.L(A.jb.Text);this.RK.Y(true);this.Tj.Y(true);this.IG.Y(false
);this.FX.Ar(false);(F=this.FX.R,F[2].call(F[0],this.FX.B1));this.Background.L(A.
jb.EX);}else{this.OC.L(A.jb.Text);this.RK.Y(false);this.Tj.Y(false);this.IG.Y(true
);this.FX.Ar(true);this.Background.L(A.jb.CM);}if(this.Af3.Bw)this.Wn.Y(true);else
this.Wn.Y(false);},CI:function(H){A._GetAutoObject(A.Device.Device).AeC();},Fb:function(
H){A._GetAutoObject(A.Device.Device).Ang();A._GetAutoObject(A.Device.Device).Aek(
false);A._GetAutoObject(A.Device.Device).TT(false);},Alk:function(H){var B;this.
An();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.pe([this,this.
Bwy],this);break;case 3:{A.pe([this,this.Bb6],this);A.pe([B=this.Aaz,B.AE_],this
);A.pe(this.Aaz.M6,this);}break;case 4:A.ab5("%s",AUS);break;default:;}},Ed:function(
H){A._GetAutoObject(C.AZ).Fk();},Bxk:function(H){this.Bkz(!this.Az2);},Bkz:function(
E){if(this.Az2===E)return;this.Az2=E;if(!E)A._GetAutoObject(A.Device.Device).Aek(
false);this.An();},Bwy:function(H){var B;this.Bb6(this);if(this.Az2)A._GetAutoObject(
A.Device.Device).Aek(true);A._GetAutoObject(A.Device.Device).V6(65280);A._GetAutoObject(
A.Device.Device).TT(true);A.pe([B=this.Aaz,B.StartTimer],this);A.pe([B=this.Af3,
B.StartTimer],this);this.An();},Bwz:function(H){A._GetAutoObject(A.Device.Device
).Aek(false);A._GetAutoObject(A.Device.Device).TT(false);this.An();},BwB:function(
H){this.An();},Bb6:function(H){A._GetAutoObject(A.Device.Device).AeC();},_Init:function(
aArg){C.AC._Init.call(this,aArg);C.I5._Init.call(this.I5={I:this},0);C.CP._Init.
call(this.OC={I:this},0);A.acg.Am._Init.call(this.IG={I:this},0);A.acl.FX._Init.
call(this.FX={I:this},0);A.acg.AI._Init.call(this.AI={I:this},0);A.Core.Timer._Init.
call(this.Aaz={I:this},0);A.Core.Timer._Init.call(this.Af3={I:this},0);A.acg.Am.
_Init.call(this.Tj={I:this},0);A.acg.Am._Init.call(this.RK={I:this},0);A.acg.Text.
_Init.call(this.AbY={I:this},0);C.Wn._Init.call(this.Wn={I:this},0);C.CP._Init.call(
this.G6={I:this},0);this.__proto__=C.ART;var B;this.Background.L(A.jb.CM);this.N.
Y(true);this.I5.G(AUT);this.I5.Aj1(0);this.OC.G(AUU);this.OC.Q(A.aaR(A.acf.A80));
this.OC.L(A.jb.Text);this.IG.G(AUV);this.IG.L(A.jb.AY);this.IG.YO(true);this.FX.
Fy(1750);this.FX.V5(750);this.FX.AjU(0);this.FX.Ar(true);this.FX.B1=3;this.AI.G(
Aw3);this.Aaz.QJ(-1);this.Aaz.V2(1000);this.Af3.QJ(-1);this.Af3.V2(5000);this.Tj.
G(AGa);this.RK.G(AGa);this.RK.L(A.jb.EX);this.AbY.G(Aw3);this.AbY.Q(A.aaR(A.acf.
A8A));this.AbY.L(A.jb.Text);this.Wn.G(Aw3);this.G6.G(AUW);this.G6.Ar(false);this.
G6.Q(A.aaR(A.acf.RangeTest));this.G6.L(A.jb.Text);this.J(this.I5,0);this.J(this.
OC,0);this.J(this.IG,0);this.J(this.AI,0);this.J(this.Tj,0);this.J(this.RK,0);this.
J(this.AbY,0);this.J(this.Wn,0);this.J(this.G6,0);this.N.Cu=[this,this.Ed];this.
N.Ci=[this,this.Bxk];this.N.CS(A.aaL(A.ach.ET));this.OC.S(A.aaL(A.fl.Ah));this.OC.
A5(A.aaL(A.fl.Ak));this.OC.CC(A.aaL(A.fl.By));this.IG.Ax(A.aaL(A.ach.ACa));this.
FX.R=[B=this.IG,B.AQr,B.Cr];this.Aaz.M6=[this,this.Bwz];this.Af3.M6=[this,this.BwB
];this.Tj.Ax(A.aaL(A.ach.Tj));this.RK.Ax(A.aaL(A.ach.RK));this.AbY.S(A.aaL(A.fl.
Ah));this.Wn.Av([B=A._GetAutoObject(A.Device.Device),B.AQG,B.AXY]);this.G6.S(A.aaL(
A.fl.J6));this.G6.A5(A.aaL(A.fl.H$));this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.I5._Done();this.OC._Done();this.IG._Done();this.FX._Done();this.AI._Done(
);this.Aaz._Done();this.Af3._Done();this.Tj._Done();this.RK._Done();this.AbY._Done(
);this.Wn._Done();this.G6._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.I5._ReInit();this.OC._ReInit();this.IG._ReInit();this.FX.
_ReInit();this.AI._ReInit();this.Aaz._ReInit();this.Af3._ReInit();this.Tj._ReInit(
);this.RK._ReInit();this.AbY._ReInit();this.Wn._ReInit();this.G6._ReInit();this.
OC.Q(A.aaR(A.acf.A80));this.AbY.Q(A.aaR(A.acf.A8A));this.G6.Q(A.aaR(A.acf.RangeTest
));this.OC.S(A.aaL(A.fl.Ah));this.OC.A5(A.aaL(A.fl.Ak));this.OC.CC(A.aaL(A.fl.By
));this.AbY.S(A.aaL(A.fl.Ah));this.G6.S(A.aaL(A.fl.J6));this.G6.A5(A.aaL(A.fl.H$
));},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.I5)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IG)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.FX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aaz)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Af3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tj)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.RK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbY)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Wn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G6).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RangeTestScreen"};C.Abc={
ScreenType:0,Pz:function(E){if(this.ScreenType===E)return;this.ScreenType=E;},PA:
function(H){A._GetAutoObject(C.AZ).BZ(this.ScreenType);},_Init:function(aArg){C.
Cd._Init.call(this,aArg);this.__proto__=C.Abc;},_className:"Application::MenuItemScreen"
};C.TI={Adp:null,Ma:null,AlV:false,Init:function(aArg){},Ai:function(Ae){C.Cd.Ai.
call(this,Ae);if(this.AlV){this.Ma.Cr(1);this.Ma.L(A.jb.HY);}else{this.Ma.Cr(0);
if(this.Ks)this.Ma.L(A.jb.Bh);else if(this.G8)this.Ma.L(A.jb.Text);else this.Ma.
L(A.jb.Bh);}},Ja:function(H){var F,CK;if(!!this.Adp){(CK=this.Adp,CK[2].call(CK[
0],!(F=this.Adp,F[1].call(F[0]))));this.ADh((F=this.Adp,F[1].call(F[0])));A.pe([
this,this.DM],this);}},A0M:function(H){this.Ks=true;this.DM(this);},ADh:function(
E){if(this.AlV===E)return;this.AlV=E;this.DM(this);this.An();},A09:function(H){var
F;this.ADh((F=this.Adp,F[1].call(F[0])));},AYe:function(s){this.A09(s);},DM:function(
H){var F;if(!this.N||!this.Ks)return;if(this.AlV){(F=this.N,F[1].call(F[0])).BU(
A.aaR(A.acf.Off));(F=this.N,F[1].call(F[0])).Ih.S(A.aaL(A.fl.Ak));}else{(F=this.
N,F[1].call(F[0])).BU(A.aaR(A.acf.A5O));(F=this.N,F[1].call(F[0])).Ih.S(A.aaL(A.
fl.Ak));}(F=this.N,F[1].call(F[0])).An();},AQT:function(E){if(A.aaZ(this.Adp,E))
return;if(!!this.Adp)A.z$([this,this.AYe],this.Adp,0);this.Adp=E;if(!!E)A.zX([this
,this.AYe],E,0);if(!!E)A.pe([this,this.AYe],this);},_Init:function(aArg){C.Cd._Init.
call(this,aArg);A.acg.Am._Init.call(this.Ma={I:this},0);this.__proto__=C.TI;this.
V.L(A.jb.HY);this.Ma.G(AGb);this.Ma.Cr(0);this.J(this.Ma,0);this.Ma.Ax(A.aaL(A.ach.
ApS));this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.Ma._Done();C.Cd.
_Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.Ma._ReInit();
},_Mark:function(D){var B;C.Cd._Mark.call(this,D);if((B=this.Adp)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ma)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItemCheckBox"};C.ALK={HV:null,IA:null,_Init:function(aArg){C.Cs.
_Init.call(this,aArg);C.Sn._Init.call(this.HV={I:this},0);C.AEY._Init.call(this.
IA={I:this},0);this.__proto__=C.ALK;var B;this.JH(A.aaR(A.acf.AAY));this.HV.G(Ahg
);this.HV.Aj(true);this.HV.U(A.aaR(A.acf.Date));this.HV.Bf(true);this.IA.G(WF);this.
IA.Aj(true);this.IA.U(A.aaR(A.acf.Bt));this.J(this.HV,0);this.J(this.IA,0);this.
HV.AgD([B=this.HV,B.Ge]);this.HV.GB([this,this.Ea,this.G_]);this.HV.AjT(A.aaL(A.
ach.Edit));this.HV.Abu([B=A._GetAutoObject(A.Device.Helper),B.Ur,B.Us]);this.IA.
AgD([B=this.IA,B.Ge]);this.IA.GB([this,this.Ea,this.G_]);this.IA.AjT(A.aaL(A.ach.
Edit));this.IA.Abu([B=A._GetAutoObject(A.Device.Helper),B.Ur,B.Us]);},_Done:function(
){this.__proto__=C.Cs;this.HV._Done();this.IA._Done();C.Cs._Done.call(this);},_ReInit:
function(){C.Cs._ReInit.call(this);this.HV._ReInit();this.IA._ReInit();this.JH(A.
aaR(A.acf.AAY));this.HV.U(A.aaR(A.acf.Date));this.IA.U(A.aaR(A.acf.Bt));},_Mark:
function(D){var B;C.Cs._Mark.call(this,D);if((B=this.HV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IA)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DateTimeSettingsScreen"
};C.ASP={QU:null,G5:null,B4:null,Or:null,X$:null,Aai:null,_Init:function(aArg){C.
Cs._Init.call(this,aArg);C.QU._Init.call(this.QU={I:this},0);C.AKI._Init.call(this.
G5={I:this},0);C.ASo._Init.call(this.B4={I:this},0);C.ASq._Init.call(this.Or={I:
this},0);C.Aez._Init.call(this.X$={I:this},0);C.Aai._Init.call(this.Aai={I:this}
,0);this.__proto__=C.ASP;var B;this.JH(A.aaR(A.acf.Temperature));this.G5.Av(A._GetAutoObject(
A.Device.Device).AnimalType);this.B4.G(AUX);this.B4.Aj(true);this.B4.U(A.aaR(A.acf.
Aqp));this.B4.Bf(false);this.Or.G(Ab$);this.Or.Aj(true);this.Or.U(A.aaR(A.acf.Undertemperature
));this.Or.Bf(true);this.Or.Bx(3800);this.Or.GC(3000);this.Or.Fd(5000);this.Or.A71(
A.aaR(A.acf.AFb));this.X$.G(AUY);this.X$.Aj(true);this.X$.Y(true);this.X$.U(A.aaR(
A.acf.A2A));this.J(this.B4,0);this.J(this.Or,0);this.J(this.X$,0);this.B4.AgD([B=
this.B4,B.Ge]);this.B4.GB([this,this.Ea,this.G_]);this.B4.AjT(A.aaL(A.ach.Edit));
this.B4.LN([B=this.B4,B.Axx]);this.B4.LP(A.aaL(A.ach.Am_));this.B4.Av([B=this.G5
,B.Ce,B.Cg]);this.B4.CN(this.G5);this.B4.A7E([B=this.G5,B.AQN,B.AX4]);this.B4.A7D([
B=this.G5,B.AQM,B.AX3]);this.Or.LN([B=this.B4,B.Axx]);this.Or.LP(A.aaL(A.ach.Am_
));this.Or.Av([B=A._GetAutoObject(A.Device.Device),B.A6I,B.A_A]);this.X$.CN(this.
Aai);this.X$.AjY([B=A._GetAutoObject(A.Device.Device),B.A6c,B.A_n]);},_Done:function(
){this.__proto__=C.Cs;this.QU._Done();this.G5._Done();this.B4._Done();this.Or._Done(
);this.X$._Done();this.Aai._Done();C.Cs._Done.call(this);},_ReInit:function(){C.
Cs._ReInit.call(this);this.QU._ReInit();this.G5._ReInit();this.B4._ReInit();this.
Or._ReInit();this.X$._ReInit();this.Aai._ReInit();this.JH(A.aaR(A.acf.Temperature
));this.B4.U(A.aaR(A.acf.Aqp));this.Or.U(A.aaR(A.acf.Undertemperature));this.Or.
A71(A.aaR(A.acf.AFb));this.X$.U(A.aaR(A.acf.A2A));},_Mark:function(D){var B;C.Cs.
_Mark.call(this,D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Or)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Aai)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.ALV={Po:null,Pp:null,R5:null,Vw:null,R7:null,R6:null,FQ:null,AbO:null,Init:function(
aArg){A.zX([this,this.BlM],this.Pp.R,0);},BlM:function(H){var F;A._GetAutoObject(
A.Device.Device).AvO((F=this.Pp.R,F[1].call(F[0])));},_Init:function(aArg){C.Cs.
_Init.call(this,aArg);C.I1._Init.call(this.Po={I:this},0);C.B_._Init.call(this.Pp={
I:this},0);C.Aez._Init.call(this.R5={I:this},0);C.I1._Init.call(this.Vw={I:this}
,0);C.Aez._Init.call(this.R7={I:this},0);C.Aez._Init.call(this.R6={I:this},0);C.
FQ._Init.call(this.FQ={I:this},0);C.AbO._Init.call(this.AbO={I:this},0);this.__proto__=
C.ALV;var B;this.N.G(WD);this.JH(A.aaR(A.acf.Device));this.Po.G(Ahg);this.Po.Aj(
true);this.Po.U(A.aaR(A.acf.A8L));this.Po.Bf(false);this.Po.GC(2);this.Po.Fd(60);
this.Po.Kd(A.aaR(A.acf.AFr));this.Po.KE(A.aaR(A.acf.AFr));this.Pp.G(AUZ);this.Pp.
Aj(true);this.Pp.U(A.aaR(A.acf.A8S));this.Pp.Bf(true);this.Pp.Bx(0);this.Pp.GC(-
1);this.Pp.Fd(1);this.R5.G(Ab$);this.R5.Aj(true);this.R5.U(A.aaR(A.acf.Hv));this.
R5.Bf(false);this.R5.Bx(0);this.R5.GC(-1);this.R5.Fd(1);this.Vw.G(AnE);this.Vw.Aj(
true);this.Vw.U(A.aaR(A.acf.A29));this.Vw.Bf(true);this.Vw.Kd(AeY);this.Vw.KE(AeY
);this.R7.G(AnF);this.R7.Aj(true);this.R7.U(A.aaR(A.acf.ArQ));this.R7.Bf(false);
this.R7.Bx(1);this.R7.GC(-1);this.R7.Fd(1);this.R6.G(AGc);this.R6.Aj(true);this.
R6.U(A.aaR(A.acf.Aru));this.R6.Bf(true);this.R6.Bx(0);this.R6.GC(-1);this.R6.Fd(
1);this.AbO.Av(A._GetAutoObject(A.Device.Device).Awl);this.J(this.Po,0);this.J(this.
Pp,0);this.J(this.R5,0);this.J(this.Vw,0);this.J(this.R7,0);this.J(this.R6,0);this.
Po.Av([B=A._GetAutoObject(A.Device.Device),B.A6A,B.A_w]);this.Pp.Av([B=this.AbO,
B.Ce,B.Cg]);this.Pp.CN(this.AbO);this.R5.CN(this.FQ);this.R5.AjY([B=A._GetAutoObject(
A.Device.Device),B.ACX,B.AG5]);this.Vw.Av([B=A._GetAutoObject(A.Device.Device),B.
A5$,B.A_k]);this.R7.CN(this.FQ);this.R7.AjY([B=A._GetAutoObject(A.Device.Device)
,B.A6J,B.A_B]);this.R6.CN(this.FQ);this.R6.AjY([B=A._GetAutoObject(A.Device.Device
),B.AQv,B.AXQ]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cs;this.Po._Done(
);this.Pp._Done();this.R5._Done();this.Vw._Done();this.R7._Done();this.R6._Done(
);this.FQ._Done();this.AbO._Done();C.Cs._Done.call(this);},_ReInit:function(){C.
Cs._ReInit.call(this);this.Po._ReInit();this.Pp._ReInit();this.R5._ReInit();this.
Vw._ReInit();this.R7._ReInit();this.R6._ReInit();this.FQ._ReInit();this.AbO._ReInit(
);this.JH(A.aaR(A.acf.Device));this.Po.U(A.aaR(A.acf.A8L));this.Po.Kd(A.aaR(A.acf.
AFr));this.Po.KE(A.aaR(A.acf.AFr));this.Pp.U(A.aaR(A.acf.A8S));this.R5.U(A.aaR(A.
acf.Hv));this.Vw.U(A.aaR(A.acf.A29));this.R7.U(A.aaR(A.acf.ArQ));this.R6.U(A.aaR(
A.acf.Aru));},_Mark:function(D){var B;C.Cs._Mark.call(this,D);if((B=this.Po)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Pp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
R5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R6)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbO)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceSettingsScreen"};C.AR5={Vz:null,Vy:
null,Qr:null,EartagNrAssignmentMode:null,Init:function(aArg){A.zX([this,this.Bfe
],this.Qr.R,0);},Bfe:function(H){var F;A._GetAutoObject(A.Device.Device).AjP((F=
this.Qr.R,F[1].call(F[0])));},_Init:function(aArg){C.Cs._Init.call(this,aArg);C.
Pv._Init.call(this.Vz={I:this},0);C.Pv._Init.call(this.Vy={I:this},0);C.ASl._Init.
call(this.Qr={I:this},0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={
I:this},0);this.__proto__=C.AR5;var B;this.JH(A.aaR(A.acf.Arl));this.Vz.G(KL);this.
Vz.Aj(true);this.Vz.U(A.aaR(A.acf.Ai1));this.Vz.Bf(false);this.Vz.Pz(99);this.Vy.
G(AU0);this.Vy.Aj(true);this.Vy.U(A.aaR(A.acf.Apw));this.Vy.Bf(true);this.Vy.Pz(
100);this.Qr.G(WF);this.Qr.Aj(true);this.Qr.U(A.aaR(A.acf.A2F));this.Qr.Bf(false
);this.Qr.GC(-1);this.Qr.Fd(1);this.EartagNrAssignmentMode.Av(A._GetAutoObject(A.
Device.Device).EartagNrAssignmentMode);this.J(this.Vz,0);this.J(this.Vy,0);this.
J(this.Qr,0);this.Vz.AQ=[B=this.Vz,B.PA];this.Vy.AQ=[B=this.Vy,B.PA];this.Qr.Av([
B=this.EartagNrAssignmentMode,B.Ce,B.Cg]);this.Qr.CN(this.EartagNrAssignmentMode
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cs;this.Vz._Done();this.Vy.
_Done();this.Qr._Done();this.EartagNrAssignmentMode._Done();C.Cs._Done.call(this
);},_ReInit:function(){C.Cs._ReInit.call(this);this.Vz._ReInit();this.Vy._ReInit(
);this.Qr._ReInit();this.EartagNrAssignmentMode._ReInit();this.JH(A.aaR(A.acf.Arl
));this.Vz.U(A.aaR(A.acf.Ai1));this.Vy.U(A.aaR(A.acf.Apw));this.Qr.U(A.aaR(A.acf.
A2F));},_Mark:function(D){var B;C.Cs._Mark.call(this,D);if((B=this.Vz)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Vy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qr).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::RegistrationSettingsScreen"};C.Wn={R:null
,TransponderProtocolToString:null,AoC:null,Background:null,Z:null,RZ:null,Gy:null
,Pt:null,Ot:null,O_:null,C2:null,Gi:null,Si:null,NL:null,CountryToString:null,Av:
function(E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.OT],this.R,0);
this.R=E;if(!!E)A.zX([this,this.OT],E,0);if(!!E)A.pe([this,this.OT],this);},OT:function(
H){var B;var F;if(!!this.R&&((F=this.R,F[1].call(F[0])).Id>0)){this.Gy.Q((F=this.
R,F[1].call(F[0])).Id.toFixed());var BJ=(F=this.R,F[1].call(F[0])).BfM();if(BJ<900
){var N2=A._GetAutoObject(A.Device.Converter).ALD(BJ);if(!!N2)this.C2.Q(((this.CountryToString.
Lh(N2)+Ab8)+BJ.toFixed())+OM);else this.C2.Q(BJ.toFixed());if(N2===10){var Bam=this.
A4F((F=this.R,F[1].call(F[0])).Id);this.C2.Q(this.C2.String+((((AU1+this.AoC.Bmu(
Bam))+Ab8)+A.abl(this.AoC.Bmt(Bam),2,10))+OM));}this.C2.Y(true);this.O_.Y(true);
this.Ot.Y(false);this.Pt.Y(false);}else{this.Ot.Q(((A._GetAutoObject(A.Device.Converter
).BeE(BJ)+Ab8)+BJ.toFixed())+OM);this.Ot.Y(true);this.Pt.Y(true);this.C2.Y(false
);this.O_.Y(false);}if(BJ===276){this.Gi.Q(this.AoC.B0(this.A4F((F=this.R,F[1].call(
F[0])).Id)));this.Gi.Y(true);}else this.Gi.Y(false);this.NL.Q(this.TransponderProtocolToString.
B0((F=this.R,F[1].call(F[0])).TransponderProtocol));}else{this.Gy.Q(A.jV);this.Ot.
Q(A.jV);this.Gi.Q(A.jV);this.C2.Q(A.jV);this.NL.Q(A.jV);}},A4F:function(Kp){var Qa=
0;var N2=A._GetAutoObject(A.Device.Converter).AeJ(Kp);switch(N2){case 10:{var FT=
A._GetAutoObject(A.Device.Helper).Vi(Kp,8,2)|0;Qa=A._GetAutoObject(A.Device.Converter
).AMJ(FT);}break;default:;}return Qa;},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.Device.TransponderProtocolToString._Init.call(this.TransponderProtocolToString={
I:this},0);A.Device.GermanStateToString._Init.call(this.AoC={I:this},0);A.acg.AI.
_Init.call(this.Background={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.
CP._Init.call(this.RZ={I:this},0);C.CP._Init.call(this.Gy={I:this},0);C.CP._Init.
call(this.Pt={I:this},0);C.CP._Init.call(this.Ot={I:this},0);C.CP._Init.call(this.
O_={I:this},0);C.CP._Init.call(this.C2={I:this},0);C.CP._Init.call(this.Gi={I:this
},0);C.CP._Init.call(this.Si={I:this},0);C.CP._Init.call(this.NL={I:this},0);A.Device.
CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=C.Wn;
this.G(Ab_);this.Background.AV(0x3F);this.Background.G(Ab_);this.Background.L(A.
jb.C0);this.Z.AV(0x3F);this.Z.G(Ab_);this.Z.J$(9);this.RZ.G(AU2);this.RZ.Aj(true
);this.RZ.Q(A.aaR(A.acf.Gy)+A.aaR(A.acf.Colon));this.RZ.A2(0x11);this.RZ.L(A.jb.
Text);this.Gy.G(AU3);this.Gy.Aj(true);this.Gy.Q(Aw4);this.Gy.A2(0x14);this.Gy.L(
A.jb.Text);this.Pt.G(Ar6);this.Pt.Aj(true);this.Pt.Q(A.aaR(A.acf.A8f)+A.aaR(A.acf.
Colon));this.Pt.A2(0x11);this.Pt.L(A.jb.Text);this.Ot.G(AGd);this.Ot.Aj(true);this.
Ot.Q(AU4);this.Ot.A2(0x14);this.Ot.L(A.jb.Text);this.O_.G(Ar6);this.O_.Aj(true);
this.O_.Q(A.aaR(A.acf.C2)+A.aaR(A.acf.Colon));this.O_.A2(0x11);this.O_.L(A.jb.Text
);this.C2.G(AGd);this.C2.Aj(true);this.C2.Q(AGe);this.C2.A2(0x14);this.C2.L(A.jb.
Text);this.Gi.G(AGf);this.Gi.Aj(true);this.Gi.Q(AU5);this.Gi.A2(0x14);this.Gi.L(
A.jb.Text);this.Si.G(AGg);this.Si.Aj(true);this.Si.Q(A.aaR(A.acf.NL)+A.aaR(A.acf.
Colon));this.Si.A2(0x11);this.Si.L(A.jb.Text);this.NL.G(AU6);this.NL.Aj(true);this.
NL.Q(AU7);this.NL.A2(0x14);this.NL.L(A.jb.Text);this.J(this.Background,0);this.J(
this.Z,0);this.J(this.RZ,0);this.J(this.Gy,0);this.J(this.Pt,0);this.J(this.Ot,0
);this.J(this.O_,0);this.J(this.C2,0);this.J(this.Gi,0);this.J(this.Si,0);this.J(
this.NL,0);this.RZ.S(A.aaL(A.fl.Ak));this.RZ.A5(A.aaL(A.fl.By));this.Gy.S(A.aaL(
A.fl.Ak));this.Gy.A5(A.aaL(A.fl.By));this.Pt.S(A.aaL(A.fl.Ak));this.Pt.A5(A.aaL(
A.fl.By));this.Ot.S(A.aaL(A.fl.Ak));this.Ot.A5(A.aaL(A.fl.By));this.O_.S(A.aaL(A.
fl.Ak));this.O_.A5(A.aaL(A.fl.By));this.C2.S(A.aaL(A.fl.Ak));this.C2.A5(A.aaL(A.
fl.By));this.Gi.S(A.aaL(A.fl.Ak));this.Gi.A5(A.aaL(A.fl.By));this.Si.S(A.aaL(A.fl.
Ak));this.Si.A5(A.aaL(A.fl.By));this.NL.S(A.aaL(A.fl.Ak));this.NL.A5(A.aaL(A.fl.
By));},_Done:function(){this.__proto__=A.Core.O;this.TransponderProtocolToString.
_Done();this.AoC._Done();this.Background._Done();this.Z._Done();this.RZ._Done();
this.Gy._Done();this.Pt._Done();this.Ot._Done();this.O_._Done();this.C2._Done();
this.Gi._Done();this.Si._Done();this.NL._Done();this.CountryToString._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.AoC._ReInit();this.Background._ReInit();this.Z._ReInit();this.RZ.
_ReInit();this.Gy._ReInit();this.Pt._ReInit();this.Ot._ReInit();this.O_._ReInit(
);this.C2._ReInit();this.Gi._ReInit();this.Si._ReInit();this.NL._ReInit();this.CountryToString.
_ReInit();this.RZ.Q(A.aaR(A.acf.Gy)+A.aaR(A.acf.Colon));this.Pt.Q(A.aaR(A.acf.A8f
)+A.aaR(A.acf.Colon));this.O_.Q(A.aaR(A.acf.C2)+A.aaR(A.acf.Colon));this.Si.Q(A.
aaR(A.acf.NL)+A.aaR(A.acf.Colon));this.RZ.S(A.aaL(A.fl.Ak));this.RZ.A5(A.aaL(A.fl.
By));this.Gy.S(A.aaL(A.fl.Ak));this.Gy.A5(A.aaL(A.fl.By));this.Pt.S(A.aaL(A.fl.Ak
));this.Pt.A5(A.aaL(A.fl.By));this.Ot.S(A.aaL(A.fl.Ak));this.Ot.A5(A.aaL(A.fl.By
));this.O_.S(A.aaL(A.fl.Ak));this.O_.A5(A.aaL(A.fl.By));this.C2.S(A.aaL(A.fl.Ak)
);this.C2.A5(A.aaL(A.fl.By));this.Gi.S(A.aaL(A.fl.Ak));this.Gi.A5(A.aaL(A.fl.By)
);this.Si.S(A.aaL(A.fl.Ak));this.Si.A5(A.aaL(A.fl.By));this.NL.S(A.aaL(A.fl.Ak));
this.NL.A5(A.aaL(A.fl.By));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);
if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AoC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gy)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ot
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.C2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Si)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::TransponderInfo"};C.Qy={DY:null,A8s:A.jV,Ai:function(Ae){C.Fa.Ai.call(
this,Ae);if(this.Me.Fc())this.DY.C1(A.jb.AY);else this.DY.C1(this.Background.AP);
this.DY.AjS(this.GT.AP);},YS:function(E){if(this.A8s===E)return;this.A8s=E;this.
DY.Text.Q(E);this.DY.Y(E!==A.jV);},_Init:function(aArg){C.Fa._Init.call(this,aArg
);C.DY._Init.call(this.DY={I:this},0);this.__proto__=C.Qy;this.Background.G(AU8);
this.Me.G(Um);this.Om.G(AGh);this.QE.G(AGh);this.DY.G(AU9);this.DY.Y(false);this.
J(this.DY,0);this.GT.S(A.aaL(A.fl.Ah));this.GT.A5(A.aaL(A.fl.Ak));this.GT.CC(A.aaL(
A.fl.By));},_Done:function(){this.__proto__=C.Fa;this.DY._Done();C.Fa._Done.call(
this);},_ReInit:function(){C.Fa._ReInit.call(this);this.DY._ReInit();this.GT.S(A.
aaL(A.fl.Ah));this.GT.A5(A.aaL(A.fl.Ak));this.GT.CC(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.Fa._Mark.call(this,D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ListsMenuItem"};C.DY={B3:null,AdT:null,Am:null,Text:null
,DD:A.jV,Al7:0,MM:0,I0:0,A3a:0x14,Init:function(aArg){},U:function(E){if(this.DD===
E)return;this.DD=E;this.Text.Q(E);},Byt:function(H){this.Am.G(this.Text.M);this.
AdT.G(this.Text.M);},AjS:function(E){if(this.Al7===E)return;this.Al7=E;this.AdT.
L(E);this.Text.L(E);},C1:function(E){if(this.MM===E)return;this.MM=E;this.Am.L(E
);},S:function(E){if(this.B3===E)return;this.B3=E;this.Text.S(E);},HF:function(E
){if(this.I0===E)return;this.I0=E;this.Text.HF(E);},BiE:function(E){if(this.A3a===
E)return;this.A3a=E;this.Text.A2(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.NA._Init.call(this.AdT={I:this},0);A.acg.NA._Init.call(this.Am={I:this
},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.DY;this.G(AGi);
this.AdT.AV(0x8);this.AdT.L(A.jb.Text);this.Am.AV(0x8);this.Am.L(A.jb.C0);this.Text.
AV(0xD);this.Text.G(AGi);this.Text.HF(5);this.Text.IZ(true);this.Text.A2(0x14);this.
Text.L(A.jb.Text);this.J(this.AdT,0);this.J(this.Am,0);this.J(this.Text,0);this.
AdT.Ax(A.aaL(A.ach.ANX));this.Am.Ax(A.aaL(A.ach.ANW));this.Text.QI([this,this.Byt
]);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.AdT._Done();this.Am._Done();this.Text._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AdT._ReInit();this.Am.
_ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.AdT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.TE={DN:null,Z:null,Au:null,Dr:function(H){var B;C.AC.Dr.call(this,H);if(!!this.
AY&&((this.AY.T&0x400)===0x400))this.Z.Hx(this.AY,true,null,null);},CI:function(
H){C.AC.CI.call(this,H);this.AJw(this);A._GetAutoObject(A.Device.Device).Aq.Bm(null
);A._GetAutoObject(A.Device.Device).Bq.Bm(null);A._GetAutoObject(A.Device.Helper
).Aj_();A._GetAutoObject(A.Device.Helper).Arr();},H8:function(H){},Ace:function(
s){this.H8(s);},A00:function(H){A._GetAutoObject(C.AZ).Fk();},E7:function(H){var
B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.
Ml(-this.Z.Bp[1]);},AJw:function(H){},BCp:function(s){this.AJw(s);},G3:function(
H){A.pe([this,this.E7],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.
acg.AI._Init.call(this.DN={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Au.
_Init.call(this.Au={I:this},0);this.__proto__=C.TE;this.Background.L(A.jb.C0);this.
N.Y(true);this.N.BU(A.jV);this.Dp(C.Ap2);this.DN.AV(0x3F);this.DN.G(E2);this.DN.
L(A.jb.CM);this.Z.G(E2);this.Z.J$(9);this.Au.G(IJ);this.J(this.DN,0);this.J(this.
Z,0);this.J(this.Au,0);this.N.Cu=[this,this.A00];this.N.CS(A.aaL(A.ach.ET));this.
Z.Eh=[this,this.G3];},_Done:function(){this.__proto__=C.AC;this.DN._Done();this.
Z._Done();this.Au._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.
call(this);this.DN._ReInit();this.Z._ReInit();this.Au._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.DN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ListsScreen"};C.ATk={V1:function(H){this.AfJ();this.
Ex(A.aaR(A.acf.ASW),[this,this.ARs],7);this.Ex(A.aaR(A.acf.Arm),[this,this.BiH],
6);this.Ex(A.aaR(A.acf.Arh),[this,this.AqZ],3);this.Ex(A.aaR(A.acf.Ag4),[this,this.
AjX],2);this.Ex(A.aaR(A.acf.Adb),[this,this.AqJ],1);this.Ex(A.aaR(A.acf.AiB),[this
,this.AmP],0);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.
Ac9)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},Dr:function(H
){},AaJ:function(){return C.ALf;},AaK:function(){return C.ANF;},QO:function(H){var
Bc=A._GetAutoObject(A.Device.Helper).MT();var Az4=A._NewObject(A.Device.BoolFilterCriterion
,0);Az4.Initialize(12,0,true,true);Bc.CZ(Az4);A._GetAutoObject(A.Device.Device).
Aq.Bm(Bc);},HH:function(H){C.EO.HH.call(this,H);if(this.AjC()===false){this.N.Cm(
A.aaL(A.ach.Arm));this.N.Cf=[this,this.A3N];this.N.FA(A.jV);}this.N.Ow(false);this.
N.Ox(false);},Afv:function(){A._GetAutoObject(C.AZ).BZ(42);},Afu:function(){A._GetAutoObject(
C.AZ).BZ(45);},_Init:function(aArg){C.EO._Init.call(this,aArg);this.__proto__=C.
ATk;var B;this.Dp(C.ANA);this.Do(A.aaR(A.acf.A5z));this.AjW([B=A._GetAutoObject(
A.Device.Device),B.A6N,B.A_C]);},_ReInit:function(){C.EO._ReInit.call(this);this.
Do(A.aaR(A.acf.A5z));},_className:"Application::WatchListScreen"};C.AKn={Dr:function(
H){var B;var Jr=(A.Core.BO.isPrototypeOf(H)?H:null);if(((Jr.CH===4)||(Jr.CH===5)
)===false){C.AwD.Dr.call(this,H);return;}if(A._GetAutoObject(A.Device.Device).MeasureState
!==1)return;var A$1=A._GetAutoObject(A.Device.Device).IH;var ST;if(Jr.CH===5)ST=
5;else ST=4;var AzL=A._GetAutoObject(A.acj.DI).Bay(A$1,ST);var GH=(((A$1+((AzL/2
)|0))/AzL)|0)*AzL;if(Jr.CH===4)GH+=AzL;else if(Jr.CH===5)GH-=AzL;if(GH>999900)GH=
999900;if(GH<100)GH=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(GH);
},ArF:function(H){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===3)A.
pe([B=this.OH,B.Cu],this);else A._GetAutoObject(C.AZ).Fk();},We:function(H){if(A.
_GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.Device
).ArH();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(this.A8J()===
false){this.HX.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).IH);this.HX.Co(
A._GetAutoObject(A.Device.Device).Bq);A._GetAutoObject(C.AZ).Fk();}}else if(A._GetAutoObject(
A.Device.Device).MeasureState===3){this.HX.OnSetBodyWeight(A._GetAutoObject(A.Device.
Device).IH);this.HX.Co(A._GetAutoObject(A.Device.Device).Bq);A._GetAutoObject(C.
AZ).Fk();}},Akf:function(H){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===
3)A.pe([B=this.OH,B.Ci],this);},A11:function(){if(A._GetAutoObject(A.Device.Device
).IH<100000)this.IH.Q(A._GetAutoObject(A.Device.Converter).NU(A._GetAutoObject(A.
Device.Device).IH,1,false));else this.IH.Q(A._GetAutoObject(A.Device.Converter).
NU(A._GetAutoObject(A.Device.Device).IH,0,false));},Bax:function(){var AJH=A._GetAutoObject(
A.Device.Helper).X.Ag$(1);if(AJH>=100000)AJH=(Math.round(AJH/1000)|0)*1000;return AJH;
},_Init:function(aArg){C.AwD._Init.call(this,aArg);this.__proto__=C.AKn;},_className:
"Application::AnimalActionWeighingScreen"};C.AS7={VD:null,Yb:null,QU:null,Ad4:null
,_Init:function(aArg){C.Cs._Init.call(this,aArg);C.B_._Init.call(this.VD={I:this
},0);C.B_._Init.call(this.Yb={I:this},0);C.QU._Init.call(this.QU={I:this},0);C.Ad4.
_Init.call(this.Ad4={I:this},0);this.__proto__=C.AS7;var B;this.JH(A.aaR(A.acf.AFs
));this.VD.G(Ahg);this.VD.Aj(true);this.VD.U(A.aaR(A.acf.A87));this.VD.Bf(true);
this.VD.Bx(0);this.Yb.G(WF);this.Yb.Aj(true);this.Yb.U(A.aaR(A.acf.A86));this.Yb.
Bf(false);this.J(this.VD,0);this.J(this.Yb,0);this.VD.Av([B=this.QU,B.Ce,B.Cg]);
this.VD.CN(this.QU);this.Yb.Av([B=this.Ad4,B.Ce,B.Cg]);this.Yb.CN(this.Ad4);},_Done:
function(){this.__proto__=C.Cs;this.VD._Done();this.Yb._Done();this.QU._Done();this.
Ad4._Done();C.Cs._Done.call(this);},_ReInit:function(){C.Cs._ReInit.call(this);this.
VD._ReInit();this.Yb._ReInit();this.QU._ReInit();this.Ad4._ReInit();this.JH(A.aaR(
A.acf.AFs));this.VD.U(A.aaR(A.acf.A87));this.Yb.U(A.aaR(A.acf.A86));},_Mark:function(
D){var B;C.Cs._Mark.call(this,D);if((B=this.VD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ad4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::UnitsSettingsScreen"
};C.Ad4={MassUnitToString:null,Dt:function(){return 2;},C$:function(aIndex){if((
aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gx:function(aIndex){if((aIndex<0
)||(aIndex>=2))return A.jV;return this.MassUnitToString.B0(aIndex);},DO:function(
A1){return A1;},Hj:function(){return 1;},Av:function(E){C.AB.Av.call(this,E);A._GetAutoObject(
A.Device.Device).AvD(E);},Init:function(aArg){var B;A.zX([this,this.Ba_],[B=A._GetAutoObject(
A.Device.Device),B.AQu,B.AXP],0);A.pe([this,this.Ba_],this);},Ba_:function(H){this.
R=A._GetAutoObject(A.Device.Device).MassUnit;A.abo([this,this.Ce,this.Cg],0);},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.
MassUnitToString={I:this},0);this.__proto__=C.Ad4;this.Init(aArg);},_Done:function(
){this.__proto__=C.AB;this.MassUnitToString._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassUnits"};C.AwD={HX:null,AiQ:null,MassUnit:
null,IH:null,U0:null,Am6:null,Ab0:null,Zi:null,OH:null,X4:null,Init:function(aArg
){var B;this.MassUnit.Q(A._GetAutoObject(A.acj.DI).AcI());A.zX([this,this.AIR],[
B=A._GetAutoObject(A.Device.Device),B.AC0,B.AG8],0);A.zX([this,this.Bxl],[B=A._GetAutoObject(
A.Device.Device),B.AC5,B.AHa],0);A.zX([this,this.Bxm],[B=this.OH,B.Aqy,B.Jm],0);
},Ai:function(Ae){C.AC.Ai.call(this,Ae);this.Aww();this.Ab1();},Ja:function(H){this.
We(this);},CI:function(H){C.AC.CI.call(this,H);if(!A._GetAutoObject(A.Device.Device
).WeightRecordingMode)A._GetAutoObject(A.Device.Device).ArH();else A._GetAutoObject(
A.Device.Device).UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bq.K7(
))A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).
Bq.Hz().toFixed(),0,null);this.HX.F$();this.HX.OnSetAnimalId(A._GetAutoObject(A.
Device.Helper).X.Id);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).AE8();else{var ByH=this.Bax();this.Zi.Y(true);this.
Ab0.Y(true);A._GetAutoObject(A.Device.Device).UpdateWeightValue(ByH);A._GetAutoObject(
A.Device.Device).UpdateMeasureState(1);}},Fb:function(H){if(!A._GetAutoObject(A.
Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.Device).ArH();else A.
_GetAutoObject(A.Device.Device).Ag2();},Aww:function(){switch(A._GetAutoObject(A.
Device.Device).MeasureState){case 0:break;case 1:this.A11();break;case 3:{this.A11(
);this.Zi.Y(false);this.Ab0.Y(false);if(this.A8J()){this.U0.Y(false);this.IH.G(A.
abO(this.IH.M,42));this.MassUnit.G(A.abO(this.MassUnit.M,55));this.OH.Ar(true);this.
OH.Y(true);this.Ba(this.OH);}}break;case 4:this.IH.Q(A.aaR(A.act.AjG));break;default:
A.ab5("%s%e",AGj,A._GetAutoObject(A.Device.Device).MeasureState);}},Ab1:function(
){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{this.N.CS(
A.aaL(A.ach.AdP));this.N.Cm(null);this.X4.Y(false);this.N.C7(A.aaL(A.ach.Amk));this.
N.BU(A.jV);}break;case 3:{if(this.OH.AR<=1){this.N.CS(null);this.N.Cm(null);this.
X4.Y(false);this.N.C7(null);}else{this.N.CS(A.aaL(A.ach.Ami));this.N.Cm(A.aaL(A.
ach.AdQ));this.X4.Y(true);this.N.C7(null);}this.N.BU(A.aaR(A.acf.Ok));}break;case
4:{this.N.C7(A.aaL(A.ach.AuH));this.N.Ci=[this,this.Biv];this.N.Cm(null);this.X4.
Y(false);this.N.BU(A.jV);}break;default:;}},ArF:function(H){},BsS:function(s){this.
ArF(s);},We:function(H){},AX6:function(s){this.We(s);},Biv:function(H){this.CI(this
);},Bxl:function(H){this.An();},AIR:function(H){this.An();},A8J:function(){var Atn=
A._GetAutoObject(A.Device.Helper).X.TimestampFirstWeighing;return(Atn>0)&&!A._GetAutoObject(
A.Device.Helper).Bmr(Atn,this.HX.Timestamp);},Akf:function(H){},AX5:function(s){
this.Akf(s);},Bxm:function(H){this.An();},A11:function(){this.IH.Q(A._GetAutoObject(
A.Device.Converter).Anu(A._GetAutoObject(A.Device.Device).IH));},Bax:function(){
return A._GetAutoObject(A.Device.Helper).X.Ag$(1);},_Init:function(aArg){C.AC._Init.
call(this,aArg);A.acg.AI._Init.call(this.AiQ={I:this},0);A.acg.Text._Init.call(this.
MassUnit={I:this},0);A.acg.Text._Init.call(this.IH={I:this},0);A.acg.Text._Init.
call(this.U0={I:this},0);C.Awv._Init.call(this.Am6={I:this},0);A.acg.AdG._Init.call(
this.Ab0={I:this},0);A.acg.AdG._Init.call(this.Zi={I:this},0);C.ATp._Init.call(this.
OH={I:this},0);A.acg.Am._Init.call(this.X4={I:this},0);this.__proto__=C.AwD;this.
Background.L(A.jb.CM);this.N.Y(true);this.Dp(C.Ix);this.AiQ.AV(0x3F);this.AiQ.G(
Aw5);this.AiQ.L(A.jb.CM);this.MassUnit.G(AU_);this.MassUnit.A2(0x9);this.MassUnit.
Q(A.aaR(A.acf.AIG));this.MassUnit.L(A.jb.Text);this.IH.G(AU$);this.IH.A2(0x14);this.
IH.Q(A.aaR(A.act.AjG));this.IH.L(A.jb.Text);this.U0.G(AVa);this.U0.Q(A.aaR(A.acf.
A9d));this.U0.L(A.jb.Text);this.U0.Y(true);this.Am6.G(AVb);this.Ab0.G(AVc);this.
Ab0.L(A.jb.Ads);this.Ab0.Y(false);this.Zi.G(AVd);this.Zi.L(A.jb.Ads);this.Zi.Bjp(
true);this.Zi.Y(false);this.OH.AV(0x3F);this.OH.G(Aw5);this.OH.Ar(false);this.OH.
Y(false);this.X4.G(AVe);this.X4.L(A.jb.Bh);this.J(this.AiQ,0);this.J(this.MassUnit
,0);this.J(this.IH,0);this.J(this.U0,0);this.J(this.Ab0,0);this.J(this.Zi,0);this.
J(this.OH,0);this.J(this.X4,0);this.N.Cu=[this,this.BsS];this.N.Cf=[this,this.AX5
];this.N.Ci=[this,this.AX6];this.MassUnit.S(A.aaL(A.fl.Ey));this.IH.S(A.aaL(A.fl.
AdJ));this.U0.S(A.aaL(A.fl.Ey));this.Ab0.YR(this.Am6);this.Zi.YR(this.Am6);this.
HX=A._NewObject(A.Device.Rating,0);this.OH.LO(A._GetAutoObject(A.Device.Helper).
X);this.OH.AjZ(this.HX);this.X4.Ax(A.aaL(A.ach.AON));this.Init(aArg);},_Done:function(
){this.__proto__=C.AC;this.AiQ._Done();this.MassUnit._Done();this.IH._Done();this.
U0._Done();this.Am6._Done();this.Ab0._Done();this.Zi._Done();this.OH._Done();this.
X4._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AiQ._ReInit();this.MassUnit._ReInit();this.IH._ReInit();this.U0._ReInit();this.Am6.
_ReInit();this.Ab0._ReInit();this.Zi._ReInit();this.OH._ReInit();this.X4._ReInit(
);this.MassUnit.Q(A.aaR(A.acf.AIG));this.IH.Q(A.aaR(A.act.AjG));this.U0.Q(A.aaR(
A.acf.A9d));this.MassUnit.S(A.aaL(A.fl.Ey));this.IH.S(A.aaL(A.fl.AdJ));this.U0.S(
A.aaL(A.fl.Ey));},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.HX)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.MassUnit)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am6)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ab0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.X4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingScreen"
};C.ATt={MY:null,Dc:null,LL:null,G5:null,Bhj:function(H){var F;this.LL.BM.L(this.
LL.V.AP);if(!!this.LL.R)this.LL.BM.Q((A._GetAutoObject(A.Device.Converter).NU((F=
this.LL.R,F[1].call(F[0])),2,true)+CJ)+A._GetAutoObject(A.acj.DI).ZQ());},_Init:
function(aArg){C.Cs._Init.call(this,aArg);C.ASp._Init.call(this.MY={I:this},0);C.
Akd._Init.call(this.Dc={I:this},0);C.I1._Init.call(this.LL={I:this},0);C.AKJ._Init.
call(this.G5={I:this},0);this.__proto__=C.ATt;var B;this.JH(A.aaR(A.acf.Settings
));this.G6.Q(A.aaR(A.acf.ArT));this.MY.G(AVf);this.MY.Aj(true);this.Dc.G(Ar7);this.
Dc.Aj(true);this.Dc.U(A.aaR(A.acf.Kw));this.Dc.Bf(true);this.Dc.GC(1000);this.Dc.
Fd(99000);this.LL.G(Ar8);this.LL.Aj(true);this.LL.U(A.aaR(A.acf.A2J));this.LL.GC(
50);this.LL.Fd(2000);this.LL.AQ4(A._GetAutoObject(A.acj.DI).Ayt());this.G5.Av(A.
_GetAutoObject(A.Device.Device).AnimalType);this.Kh(this.Z,-1);this.Kh(this.Au,-
1);this.J(this.MY,0);this.J(this.Dc,0);this.J(this.LL,0);this.MY.AgD([B=this.MY,
B.Ge]);this.MY.GB([this,this.Ea,this.G_]);this.MY.AjT(A.aaL(A.ach.Edit));this.MY.
LN([B=this.MY,B.Axx]);this.MY.LP(A.aaL(A.ach.Am_));this.MY.Av([B=this.G5,B.Ce,B.
Cg]);this.MY.CN(this.G5);this.MY.A7E([B=this.G5,B.AQN,B.AX4]);this.MY.A7D([B=this.
G5,B.AQM,B.AX3]);this.Dc.GB([this,this.Ea,this.G_]);this.Dc.LN([B=this.MY,B.Axx]
);this.Dc.LP(A.aaL(A.ach.Am_));this.Dc.Av([B=this.G5,B.A59,B.AQS]);this.LL.GB([this
,this.Ea,this.G_]);this.LL.LN([B=this.MY,B.Axx]);this.LL.LP(A.aaL(A.ach.Am_));this.
LL.Av([B=this.G5,B.A58,B.AQR]);this.LL.A7Q([this,this.Bhj]);},_Done:function(){this.
__proto__=C.Cs;this.MY._Done();this.Dc._Done();this.LL._Done();this.G5._Done();C.
Cs._Done.call(this);},_ReInit:function(){C.Cs._ReInit.call(this);this.MY._ReInit(
);this.Dc._ReInit();this.LL._ReInit();this.G5._ReInit();this.JH(A.aaR(A.acf.Settings
));this.G6.Q(A.aaR(A.acf.ArT));this.Dc.U(A.aaR(A.acf.Kw));this.LL.U(A.aaR(A.acf.
A2J));},_Mark:function(D){var B;C.Cs._Mark.call(this,D);if((B=this.MY)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Dc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LL).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.G5)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightRecordingSettingsScreen"};C.ASp={Yn:null,Init:function(aArg){
var B;A.zX([this,this.AeZ],[B=A._GetAutoObject(A.Device.Device),B.AQu,B.AXP],0);
A.pe([this,this.AeZ],this);},A1r:function(H){A._GetAutoObject(A.Device.Device).A6(
37,true,A.jV,0,[this,this.A_P]);},AZj:function(H){var F;if(this.A3===1){var BL=this.
DZ;this.DZ=this.DZ-A._GetAutoObject(A.acj.DI).Ayt();if(this.DZ<this.Ak9)this.DZ=
this.Ak9;if(this.DL!==BL){if(!!this.JJ)(F=this.JJ,F[2].call(F[0],this.DZ));A.abo(
this.JJ,0);}}if(this.A3===2){var BL=this.DL;this.DL=this.DL-A._GetAutoObject(A.acj.
DI).Ayt();if(this.DL<this.DZ)this.DL=this.DZ;if(this.DL!==BL){if(!!this.JI)(F=this.
JI,F[2].call(F[0],this.DL));A.abo(this.JI,0);}}this.DM(this);this.An();},AZX:function(
H){var F;if(this.A3===1){var BL=this.DZ;this.DZ=this.DZ+A._GetAutoObject(A.acj.DI
).Ayt();if(this.DZ>this.DL)this.DZ=this.DL;if(this.DZ!==BL){if(!!this.JJ)(F=this.
JJ,F[2].call(F[0],this.DZ));A.abo(this.JJ,0);}}if(this.A3===2){var BL=this.DL;this.
DL=this.DL+A._GetAutoObject(A.acj.DI).Ayt();if(this.DL>this.Ak4)this.DL=this.Ak4;
if(this.DL!==BL){if(!!this.JI)(F=this.JI,F[2].call(F[0],this.DL));A.abo(this.JI,
0);}}this.DM(this);this.An();},Hu:function(H){this.Pr.Q(AGk+A._GetAutoObject(A.Device.
Converter).NU(this.DZ,2,true));this.Pq.Q(AGk+A._GetAutoObject(A.Device.Converter
).NU(this.DL,2,true));this.R9.Q(A._GetAutoObject(A.acj.DI).ZQ());this.Yn.Q(this.
R9.String);},A03:function(H){var B;var At=(A.Device.PopupContext.isPrototypeOf(H
)?H:null);if(!!At&&(At.PopupState===7))A._GetAutoObject(A.Device.Device).Art(this
);},AZN:function(Aso){if(Aso===1)return this.Pr;else if(Aso===2)return this.Pq;else
return null;},_Init:function(aArg){C.AbM._Init.call(this,aArg);A.acg.Text._Init.
call(this.Yn={I:this},0);this.__proto__=C.ASp;this.U(A.aaR(A.acf.AAT));this.Ak4=
2000;this.Ak9=20;this.Background.G(JN);this.V.G(BC);this.V.Q(A.aaR(A.acf.AAT)+A.
aaR(A.acf.Colon));this.V.A2(0x12);this.Aj8.G(AVg);this.Aj9.G(AGl);this.QK.G(AVh);
this.Qj.G(AVi);this.Pq.G(AVj);this.Pr.G(AVk);this.R9.G(AVl);this.Yn.G(AVm);this.
Yn.IZ(false);this.Yn.A2(0x12);this.Yn.L(0xFF000000);this.Kh(this.HU,-8);this.J(this.
Yn,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.Yn.S(A.aaL(A.fl.Ak
));this.Init(aArg);},_Done:function(){this.__proto__=C.AbM;this.Yn._Done();C.AbM.
_Done.call(this);},_ReInit:function(){C.AbM._ReInit.call(this);this.Yn._ReInit();
this.U(A.aaR(A.acf.AAT));this.V.Q(A.aaR(A.acf.AAT)+A.aaR(A.acf.Colon));this.V.S(
A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.Yn.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.AbM._Mark.call(this,D);if((B=this.Yn)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemThresholdsWeightGain"};C.Az9={M:QZ,A4S:function(
){},G:function(E){if(A.aaY(this.M,E))return;this.M=E;this.A4S();},_Init:function(
aArg){A.Graphics.Hn._Init.call(this,aArg);this.__proto__=C.Az9;},_className:"Application::AbstractPath"
};C.AiD={DK:null,DN:null,QX:null,Ac_:null,NS:null,Ac8:null,Atv:1,A2e:0,A$I:false
,Ayp:true,CT:function(){this.BdF(this);},Init:function(aArg){var B;this.Ba(this.
Ac_);A.zX([this,this.BdF],[B=this.Ac_,B.A6d,B.A_o],0);},Ai:function(Ae){C.AC.Ai.
call(this,Ae);this.Ac8.Q(String.fromCharCode(A._GetAutoObject(A.Device.Converter
).BeX(this.Atv+this.A2e)));if(this.Atv===1)this.NS.Q(A.aaR(A.acf.AtP));else this.
NS.Q(A.aaR(A.acf.Bey));},CI:function(H){if(this.Ayp)this.Ayp=false;else if(this.
DK.A$S()===false)A.pe([this,this.A0D],this);else if(this.DK.AyA())this.DK.Acr();
A.zV([this,this.Afm],A._GetAutoObject(A.Device.Device).Aq,0);},Fb:function(H){A.
z9([this,this.Afm],A._GetAutoObject(A.Device.Device).Aq,0);},A0D:function(H){this.
A$I=true;A._GetAutoObject(C.AZ).Fk();},BdF:function(H){var B;var Bag=(C.VO.isPrototypeOf(
B=this.Ac_.AY)?B:null);if(!!Bag){var AxL=A._NewObject(A.Device.ActionToString,0);
this.QX.Q(AxL.Lh(Bag.Action));}},H8:function(H){var Cp=(C.VO.isPrototypeOf(H)?H:
null);if(!Cp)return;this.DK.P2(Cp.Action);this.Biy(this.Atv+1);},BwS:function(H){
if(A._GetAutoObject(C.O2).LJ(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},BwH:function(H){
A._GetAutoObject(C.AZ).BZ(3);},Biy:function(E){if(this.Atv===E)return;this.Atv=E;
this.An();},Afm:function(H){if((this.A$I===false)&&(this.DK.A$S()===false))A.pe([
this,this.A0D],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.acg.AI.
_Init.call(this.DN={I:this},0);C.CP._Init.call(this.QX={I:this},0);C.APy._Init.call(
this.Ac_={I:this},0);C.CP._Init.call(this.NS={I:this},0);A.acg.Text._Init.call(this.
Ac8={I:this},0);this.__proto__=C.AiD;this.Background.L(A.jb.C0);this.N.G(WD);this.
N.Y(true);this.Dp(C.Ix);this.DN.AV(0x3F);this.DN.G(E2);this.DN.L(A.jb.CM);this.QX.
G(AVn);this.QX.L(A.jb.Text);this.Ac_.G(AVo);this.NS.G(AVp);this.NS.Q(A.aaR(A.acf.
AtP));this.NS.L(A.jb.Text);this.Ac8.G(AVq);this.Ac8.Q(AVr);this.Ac8.L(A.jb.Text);
this.J(this.DN,0);this.J(this.QX,0);this.J(this.Ac_,0);this.J(this.NS,0);this.J(
this.Ac8,0);this.N.Cu=[this,this.BwH];this.N.Cf=[this,this.BwS];this.N.Ci=[this,
this.A0D];this.N.CS(A.aaL(A.ach.ET));this.N.Cm(A.aaL(A.ach.AaT));this.QX.S(A.aaL(
A.fl.Ey));this.QX.A5(A.aaL(A.fl.Ah));this.QX.CC(A.aaL(A.fl.Ak));this.Ac_.A01=[this
,this.H8];this.NS.S(A.aaL(A.fl.Ey));this.NS.A5(A.aaL(A.fl.Ah));this.NS.CC(A.aaL(
A.fl.Ak));this.Ac8.S(A.aaL(A.fl.Hi));this.DK=A._GetAutoObject(C.DK);this.Init(aArg
);},_Done:function(){this.__proto__=C.AC;this.DN._Done();this.QX._Done();this.Ac_.
_Done();this.NS._Done();this.Ac8._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.DN._ReInit();this.QX._ReInit();this.Ac_._ReInit();
this.NS._ReInit();this.Ac8._ReInit();this.NS.Q(A.aaR(A.acf.AtP));this.QX.S(A.aaL(
A.fl.Ey));this.QX.A5(A.aaL(A.fl.Ah));this.QX.CC(A.aaL(A.fl.Ak));this.NS.S(A.aaL(
A.fl.Ey));this.NS.A5(A.aaL(A.fl.Ah));this.NS.CC(A.aaL(A.fl.Ak));this.CT();},_Mark:
function(D){var B;C.AC._Mark.call(this,D);if((B=this.DK)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.DN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QX)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ac_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NS
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac8)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::ActionScreen"};C.APy={IL:null,A01:null,Cl:null,Z:null,Au:
null,A1B:0,Init:function(aArg){A.zV([this,this.AzZ],this.IL,0);A.zV([this,this.BdC
],A._GetAutoObject(A.Device.Helper).X,0);A.zV([this,this.Atr],A._GetAutoObject(A.
Device.Helper).X,0);A.pe([this,this.AzZ],this);},Ba:function(E){var A0y=this.AY;
A.Core.O.Ba.call(this,E);if(this.AY!==A0y)A.abo([this,this.A6d,this.A_o],0);},Dr:
function(H){var B;var E5=0;var W=this.AY;switch(this.Cl.CH){case 6:E5=2;break;case
7:E5=7;break;case 4:E5=4;break;case 5:E5=5;break;default:;}W=this.RT(W,E5,0x415);
if((E5===5)&&!W){var AJn=this.AY;while(!W){AJn=this.RT(AJn,2,0x415);if(!!AJn)W=this.
RT(AJn,E5,0x415);else break;}}if(!!W)this.Ba(W);var Hs=(C.VO.isPrototypeOf(B=this.
AY)?B:null);if(!!Hs)this.A1B=(C.VO.isPrototypeOf(B=this.AY)?B:null).Action;else this.
A1B=0;A.pe([this,this.MD],this);},AZc:function(JO){var EE=A._GetAutoObject(C.DK).
A$0(JO,this.A01);this.J(EE,0);},Aod:function(){var B;var W=this.Z.Ag;while(!!W&&
!((W.T&0x200)===0x200)){var Ac4=W;W=W.Ag;if(((Ac4.T&0x400)===0x400))this.HG(Ac4);
}},AzZ:function(H){this.Aod();var P;var CL=A._GetAutoObject(C.O2).XV();for(P=0;P<
CL;P=P+1){var ZI=A._GetAutoObject(C.O2).Vn(P);this.AZc(ZI);}A.pe([this,this.BdC]
,this);A.pe([this,this.BmM],this);A.pe([this,this.Atr],this);},BmM:function(H){var
B;var W=this.Z.Ag;while(!!W&&!((W.T&0x200)===0x200)){if(((W.T&0x400)===0x400)){var
Aa=(C.VO.isPrototypeOf(W)?W:null);if(!!Aa&&(Aa.Action!==1))Aa.Ar(!!A._GetAutoObject(
A.Device.Helper).X.Id);}W=W.Ag;}},Atr:function(H){var B;var W=this.Z.Ag;while(!!
W&&!((W.T&0x200)===0x200)){if(((W.T&0x400)===0x400)){var Aa=(C.VO.isPrototypeOf(
W)?W:null);if(!!Aa){if(Aa.Action===8)Aa.ARn(A._GetAutoObject(A.Device.Helper).X.
IsWatch);else if(Aa.Action===4)Aa.ARn(A._GetAutoObject(A.Device.Helper).X.IsAlarm
);else if(Aa.Action===8192)Aa.ARn(A._GetAutoObject(A.Device.Helper).X.IsDry);}}W=
W.Ag;}},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((
B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},BdC:function(H){var B;var W=this.
Z.Ag;while(!!W&&!((W.T&0x200)===0x200)){if(((W.T&0x400)===0x400)){var Aa=(C.VO.isPrototypeOf(
W)?W:null);if(!!Aa){if(A._GetAutoObject(C.O2).LJ(Aa.Action)&&A._GetAutoObject(C.
DK).A2d(A._GetAutoObject(A.Device.Helper).X,Aa.Action)){Aa.Ar(true);Aa.Y(true);if(
this.A1B===Aa.Action)this.Ba(Aa);}else{Aa.Ar(false);Aa.Y(false);}}}W=W.Ag;}A.pe([
this,this.MD],this);},MD:function(H){var B;this.Z.UY(null,null);if(!!this.AY&&((
this.AY.T&0x400)===0x400))this.Z.Hx(this.AY,true,null,null);},G3:function(H){A.pe([
this,this.E7],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
BO._Init.call(this.Cl={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Au._Init.
call(this.Au={I:this},0);this.__proto__=C.APy;this.G(AVs);this.Cl.Filter=147;this.
Z.AV(0xB);this.Z.G(AVt);this.Z.J$(9);this.Au.AV(0xA);this.Au.G(AVu);this.J(this.
Z,0);this.J(this.Au,0);this.Cl.BP=[this,this.Dr];this.Cl.DR=[this,this.Dr];this.
Z.Eh=[this,this.G3];this.IL=A._GetAutoObject(C.O2);this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.O;this.Cl._Done();this.Z._Done();this.Au._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Cl._ReInit(
);this.Z._ReInit();this.Au._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.IL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.A01)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ManualActionScreenGrid"};C.Fe={D_:null,AI:null,Text:
null,Am:null,_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.D_._Init.
call(this.D_={I:this},0);A.acg.AI._Init.call(this.AI={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=
C.Fe;this.N.Ar(false);this.D_.G(BC);this.D_.Ar(false);this.AI.G(E2);this.AI.L(A.
jb.Ads);this.Text.G(BC);this.Text.Q(AGm);this.Text.L(0xFF000000);this.Am.G(QZ);this.
Am.L(A.jb.Text);this.J(this.D_,0);this.J(this.AI,0);this.J(this.Text,0);this.J(this.
Am,0);this.N.Cm(A.aaL(A.ach.AaT));this.Text.S(A.aaL(A.fl.Ak));this.Am.Ax(A.aaL(A.
ach.ABF));},_Done:function(){this.__proto__=C.OverlayMenu;this.D_._Done();this.AI.
_Done();this.Text._Done();this.Am._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.D_._ReInit();this.AI._ReInit();
this.Text._ReInit();this.Am._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.D_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScreenOverlayMenu"
};C.Xg={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));},Ja:function(H){},Ai:function(
Ae){C.B_.Ai.call(this,Ae);var FE=A.jb.Ads;var GG=A.jb.C0;if(this.G8){FE=A.jb.Text;
GG=A.jb.Bh;}if(!this.Lt){this.Background.L(A.jb.C0);this.V.L(A.jb.CM);}else if(this.
P8){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else if(this.Ks){this.Background.
L(A.jb.AY);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}this.Hl.L(
A.jb.C0);this.HU.L(A.jb.C0);},G9:function(H){var B;var FS=this.Dn.GN;var Cw=(C.CP.
isPrototypeOf(B=this.Dn.Ca)?B:null);if(!Cw)return;Cw.S(A.aaL(A.fl.Ak));Cw.A5(A.aaL(
A.fl.By));Cw.L(this.V.AP);if(!!this.AB)Cw.Q(this.AB.Gx(FS));else Cw.Q(WC);Cw.G(A.
abK(Cw.M,[this.Dn.VF,(B=this.Dn.M)[3]-B[1]]));},_Init:function(aArg){C.B_._Init.
call(this,aArg);this.__proto__=C.Xg;this.Dn.ADC(170);this.Dn.NI(C.CP);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.AiE={C3:null,Init:function(
aArg){this.V.Text.A2(0x11);this.V.Text.HF(10);this.V.S(A.aaL(A.fl.Ak));},Ai:function(
Ae){C.Cd.Ai.call(this,Ae);var FE=A.jb.Ads;var GG=A.jb.C0;if(this.G8){FE=A.jb.Text;
GG=A.jb.Bh;}if(!this.Lt){this.Background.L(A.jb.C0);this.V.L(A.jb.CM);}else if(this.
P8){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else if(this.Ks){this.Background.
L(A.jb.AY);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}},_Init:function(
aArg){C.Cd._Init.call(this,aArg);A.acg.Am._Init.call(this.C3={I:this},0);this.__proto__=
C.AiE;this.C3.G(AVv);this.C3.Cr(1);this.J(this.C3,0);this.C3.Ax(A.aaL(A.ach.AlQ)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Cd;this.C3._Done();C.Cd._Done.
call(this);},_ReInit:function(){C.Cd._ReInit.call(this);this.C3._ReInit();},_Mark:
function(D){var B;C.Cd._Mark.call(this,D);if((B=this.C3)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AJ7={Z:null,Rn:null,S4:null
,S5:null,S6:null,Ac7:null,Xf:null,UU:null,UV:null,Z_:null,Au:null,Init:function(
aArg){this.Ba(this.Rn);},Dr:function(H){C.Fe.Dr.call(this,H);this.MD(this);},Ja:
function(H){this.BcX(this);},KD:function(){if(!this.Bv){this.Bv=A._NewObject(C.N
,0);this.Bv.Cu=[this,this.BcX];this.Bv.Cf=null;this.Bv.Ci=null;this.Bv.BU(A.jV);
this.Bv.Cm(null);this.Bv.CS(A.aaL(A.ach.Vt));}return this.Bv;},AzD:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.Xf.R&&!A._GetAutoObject(C.AutoActions
).Contains(this.Xf.R))A._GetAutoObject(C.AutoActions).J(this.Xf.R);if(!!this.UU.
R&&!A._GetAutoObject(C.AutoActions).Contains(this.UU.R))A._GetAutoObject(C.AutoActions
).J(this.UU.R);if(!!this.UV.R&&!A._GetAutoObject(C.AutoActions).Contains(this.UV.
R))A._GetAutoObject(C.AutoActions).J(this.UV.R);if(!!this.Z_.R&&!A._GetAutoObject(
C.AutoActions).Contains(this.Z_.R))A._GetAutoObject(C.AutoActions).J(this.Z_.R);
A._GetAutoObject(C.AutoActions).Co();},BcX:function(H){if(this.Bv3()===true){this.
AzD();this.W7(this);}else A._GetAutoObject(A.Device.Device).A6(27,true,A.jV,0,null
);},Bv3:function(){return(!!this.Xf.C$(this.Xf.R)||!!this.UU.C$(this.UU.R))||!!this.
UV.C$(this.UV.R);},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.
Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},MD:function(H){var B;this.
Z.UY(null,null);if(!!this.AY&&((this.AY.T&0x400)===0x400))this.Z.Hx(this.AY,true
,null,null);},Bw4:function(H){var B;A._GetAutoObject(A.Device.Device).Arq(this);
this.Xf.Ast(this);this.UU.Ast(this);this.UV.Ast(this);this.Z_.Ast(this);},G3:function(
H){A.pe([this,this.E7],this);},_Init:function(aArg){C.Fe._Init.call(this,aArg);A.
Core.Z._Init.call(this.Z={I:this},0);C.Xg._Init.call(this.Rn={I:this},0);C.Xg._Init.
call(this.S4={I:this},0);C.Xg._Init.call(this.S5={I:this},0);C.Xg._Init.call(this.
S6={I:this},0);C.At3._Init.call(this.Ac7={I:this},0);C.AutoAction._Init.call(this.
Xf={I:this},0);C.AutoAction._Init.call(this.UU={I:this},0);C.AutoAction._Init.call(
this.UV={I:this},0);C.AutoAction._Init.call(this.Z_={I:this},0);C.Au._Init.call(
this.Au={I:this},0);this.__proto__=C.AJ7;var B;this.G(Q1);this.Text.Q(A.aaR(A.acf.
O1));this.Z.G(Li);this.Z.J$(1);this.Rn.G(Ahg);this.Rn.Ar(true);this.Rn.Aj(true);
this.Rn.U(A._GetAutoObject(A.Device.Helper).NO(A.aaR(A.acf.AiC),Q0,Ar9));this.S4.
G(WF);this.S4.Ar(true);this.S4.Aj(true);this.S4.U(A._GetAutoObject(A.Device.Helper
).NO(A.aaR(A.acf.AiC),Q0,Aw6));this.S5.G(Ab$);this.S5.Ar(true);this.S5.Aj(true);
this.S5.U(A._GetAutoObject(A.Device.Helper).NO(A.aaR(A.acf.AiC),Q0,AGn));this.S6.
G(AnE);this.S6.Ar(true);this.S6.Aj(true);this.S6.U(A._GetAutoObject(A.Device.Helper
).NO(A.aaR(A.acf.AiC),Q0,AGo));this.Ac7.G(Aw7);this.Ac7.Aj(true);this.Ac7.U(A.aaR(
A.acf.A8q));this.UU.Index=1;this.UV.Index=2;this.Z_.Index=3;this.Au.G(IJ);this.J(
this.Z,0);this.J(this.Rn,0);this.J(this.S4,0);this.J(this.S5,0);this.J(this.S6,0
);this.J(this.Ac7,0);this.J(this.Au,0);this.Z.Eh=[this,this.G3];this.Rn.V3(A.aaL(
A.fl.Hi));this.Rn.V4(A.aaL(A.fl.Hi));this.Rn.Av([B=this.Xf,B.Ce,B.Cg]);this.Rn.CN(
this.Xf);this.S4.V3(A.aaL(A.fl.Hi));this.S4.V4(A.aaL(A.fl.Hi));this.S4.Av([B=this.
UU,B.Ce,B.Cg]);this.S4.CN(this.UU);this.S5.V3(A.aaL(A.fl.Hi));this.S5.V4(A.aaL(A.
fl.Hi));this.S5.Av([B=this.UV,B.Ce,B.Cg]);this.S5.CN(this.UV);this.S6.V3(A.aaL(A.
fl.Hi));this.S6.V4(A.aaL(A.fl.Hi));this.S6.Av([B=this.Z_,B.Ce,B.Cg]);this.S6.CN(
this.Z_);this.Ac7.AQ=[this,this.Bw4];this.Init(aArg);},_Done:function(){this.__proto__=
C.Fe;this.Z._Done();this.Rn._Done();this.S4._Done();this.S5._Done();this.S6._Done(
);this.Ac7._Done();this.Xf._Done();this.UU._Done();this.UV._Done();this.Z_._Done(
);this.Au._Done();C.Fe._Done.call(this);},_ReInit:function(){C.Fe._ReInit.call(this
);this.Z._ReInit();this.Rn._ReInit();this.S4._ReInit();this.S5._ReInit();this.S6.
_ReInit();this.Ac7._ReInit();this.Xf._ReInit();this.UU._ReInit();this.UV._ReInit(
);this.Z_._ReInit();this.Au._ReInit();this.Text.Q(A.aaR(A.acf.O1));this.Rn.U(A._GetAutoObject(
A.Device.Helper).NO(A.aaR(A.acf.AiC),Q0,Ar9));this.S4.U(A._GetAutoObject(A.Device.
Helper).NO(A.aaR(A.acf.AiC),Q0,Aw6));this.S5.U(A._GetAutoObject(A.Device.Helper).
NO(A.aaR(A.acf.AiC),Q0,AGn));this.S6.U(A._GetAutoObject(A.Device.Helper).NO(A.aaR(
A.acf.AiC),Q0,AGo));this.Ac7.U(A.aaR(A.acf.A8q));},_Mark:function(D){var B;C.Fe.
_Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.S4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
S5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ac7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.UU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UV)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Z_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::ActionChainSettingsOverlayMenu"
};C.Ds={Cv:A.abi(16,0,null),Dt:function(){return 16;},C$:function(aIndex){if(aIndex>=
16)return-1;return this.Cv.Get(aIndex);},DO:function(A1){var P=0;while(P<16){if(
this.Cv.Get(P)===A1)return P;P=P+1;}return-1;},Hj:function(){var P=0;var max=-1;
while(P<16){if(this.Cv.Get(P)>max)max=this.Cv.Get(P);P=P+1;}return max;},_Init:function(
aArg){C.AB._Init.call(this,aArg);(this.Cv=[]).__proto__=C.Ds.Cv;this.__proto__=C.
Ds;},_className:"Application::ArraySelection"};C.AutoAction={IL:null,Acr:null,ActionToString:
null,Index:0,Init:function(aArg){A.zV([this,this.Ast],this.Acr,0);A.pe([this,this.
Ast],this);},Dt:function(){return this.IL.XV();},C$:function(aIndex){if(aIndex>=
this.Dt())return-1;return this.IL.Vn(aIndex);},Gx:function(aIndex){return this.ActionToString.
B0(this.C$(aIndex));},DO:function(A1){var P=0;while(P<this.Dt()){if(this.IL.Vn(P
)===A1)return P;P=P+1;}return-1;},Hj:function(){var P=0;var max=-1;while(P<this.
Dt()){if(this.IL.Vn(P)>max)max=this.IL.Vn(P);P=P+1;}return max;},Ast:function(H){
this.R=this.Acr.Vn(this.Index);A.abo([this,this.Ce,this.Cg],0);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);this.__proto__=C.AutoAction;this.IL=A._GetAutoObject(C.AtK);this.Acr=
A._GetAutoObject(C.AutoActions);this.Init(aArg);},_Done:function(){this.__proto__=
C.AB;this.ActionToString._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB.
_ReInit.call(this);this.ActionToString._ReInit();},_Mark:function(D){var B;C.AB.
_Mark.call(this,D);if((B=this.IL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Acr)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoAction"};C.AKb={Asq:0,Init:function(aArg
){var B;A.zX([this,this.Bby],[B=A._GetAutoObject(A.Device.Device),B.A5V,B.A9$],0
);A.zX([this,this.Bbv],[B=A._GetAutoObject(A.Device.Device),B.AQg,B.AXI],0);A.pe([
this,this.Bby],this);A.pe([this,this.Bbv],this);},Clear:function(){C.Ac$.Clear.call(
this);this.Asq=0;},Co:function(){A._GetAutoObject(A.Device.Device).AqD(this.Asq);
A._GetAutoObject(A.Device.Device).AqE(this.toString());},Bby:function(H){this.Asq=
A._GetAutoObject(A.Device.Device).O2;A.we(this,0);},Bbv:function(H){this.EJ(A._GetAutoObject(
A.Device.Device).Atw);A.we(this,0);},LJ:function(JO){if((this.Asq&(((B=JO)<0)?B+
0x100000000:B))===(((B=JO)<0)?B+0x100000000:B))return true;return false;},ASg:function(
JO){this.Asq=this.Asq|(((B=JO)<0)?B+0x100000000:B);},_Init:function(aArg){C.Ac$.
_Init.call(this,aArg);this.__proto__=C.AKb;this.Init(aArg);},_className:"Application::ActiveActionsClass"
};C.O2={_Init:function(){C.AKb._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.AKc={S7:null,Au:null,Z:null,JE:null,CT:function(
){this.Ah1(this);},Init:function(aArg){A.zV([this,this.Ah1],this.S7,0);A.pe([this
,this.Ah1],this);},Dr:function(H){C.Fe.Dr.call(this,H);this.MD(this);},KD:function(
){if(!this.Bv){this.Bv=A._NewObject(C.N,0);this.Bv.Cu=[this,this.Ed];this.Bv.Cf=[
this,this.A0L];this.Bv.Ci=[this,this.A0$];this.Bv.C7(A.aaL(A.ach.Aqc));this.Bv.Cm(
A.aaL(A.ach.Ap7));this.Bv.CS(A.aaL(A.ach.Vt));}return this.Bv;},Ed:function(H){if(
this.BuW()>0){this.AzD();this.W7(this);}else A._GetAutoObject(A.Device.Device).A6(
28,true,A.jV,0,null);},Ah1:function(H){this.Aod();var P;for(P=0;P<this.S7.XV();P=
P+1){var ZI=A._GetAutoObject(C.O2).Vn(P);this.AYQ(ZI);}this.J(this.JE,0);A.aaS([
this,this.MD],this);},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]
);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},MD:function(H){var
B;this.Z.UY(null,null);if(!!this.AY&&((this.AY.T&0x400)===0x400))this.Z.Hx(this.
AY,true,null,null);},AYQ:function(GW){var AxL=A._NewObject(A.Device.ActionToString
,0);var Aa=A._NewObject(C.RQ,0);Aa.U(AxL.B0(GW));Aa.Aj(true);Aa.GN=GW;Aa.A7r(this.
S7.LJ(GW));this.J(Aa,0);this.Y0(Aa);},Aod:function(){var B;var W=this.Z.Ag;while(
!!W&&!((W.T&0x200)===0x200)){var Ac4=W;W=W.Ag;if(((Ac4.T&0x400)===0x400))this.HG(
Ac4);}},AzD:function(){var B;this.S7.Clear();var W=this.Z.Ag;while(!!W&&!((W.T&0x200
)===0x200)){if(((W.T&0x400)===0x400)&&!(W===this.JE)){var Aa=(C.RQ.isPrototypeOf(
W)?W:null);if(!!Aa){this.S7.J(Aa.GN);if(Aa.AQs())this.S7.ASg(Aa.GN);}else A.ab5(
"%s",Aw8);}W=W.Ag;}this.S7.Co();},BuW:function(){var B;var A1C=0;var W=this.Z.Ag;
while(!!W&&!((W.T&0x200)===0x200)){if(((W.T&0x400)===0x400)&&!(W===this.JE)){var
Aa=(C.RQ.isPrototypeOf(W)?W:null);if(!!Aa){if(Aa.AQs())A1C=A1C+1;}else A.ab5("%s"
,Aw8);}W=W.Ag;}return A1C;},A0L:function(H){var B;var Aa=(C.RQ.isPrototypeOf(B=this.
AY)?B:null);if(!!Aa){var AyW=(C.RQ.isPrototypeOf(B=Aa.Ag)?B:null);if(!!AyW){this.
AgV(AyW,Aa);A.pe([this,this.MD],this);}}},A0$:function(H){var B;var Aa=(C.RQ.isPrototypeOf(
B=this.AY)?B:null);if(!!Aa){var Azr=(C.RQ.isPrototypeOf(B=Aa.AH)?B:null);if(!!Azr
){this.AgV(Aa,Azr);A.pe([this,this.MD],this);}}},Ai5:function(H){var B;A._GetAutoObject(
A.Device.Device).Aro(this);A.pe([this,this.Ah1],this);},G3:function(H){A.pe([this
,this.E7],this);},_Init:function(aArg){C.Fe._Init.call(this,aArg);C.Au._Init.call(
this.Au={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.At3._Init.call(this.
JE={I:this},0);this.__proto__=C.AKc;this.G(Q1);this.Text.Q(A.aaR(A.acf.ACC));this.
Au.G(IJ);this.Z.G(Li);this.Z.J$(1);this.JE.G(AGp);this.JE.Aj(true);this.JE.U(A.aaR(
A.acf.Ai5));this.J(this.Au,0);this.J(this.Z,0);this.J(this.JE,0);this.Z.Eh=[this
,this.G3];this.JE.AQ=[this,this.Ai5];this.S7=A._GetAutoObject(C.O2);this.Init(aArg
);},_Done:function(){this.__proto__=C.Fe;this.Au._Done();this.Z._Done();this.JE.
_Done();C.Fe._Done.call(this);},_ReInit:function(){C.Fe._ReInit.call(this);this.
Au._ReInit();this.Z._ReInit();this.JE._ReInit();this.Text.Q(A.aaR(A.acf.ACC));this.
JE.U(A.aaR(A.acf.Ai5));this.CT();},_Mark:function(D){var B;C.Fe._Mark.call(this,
D);if((B=this.S7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JE)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"};C.
RQ={GN:0,Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.V.Text.A2(0x11);this.
V.Text.HF(10);},Bg:function(aSize){C.TI.Bg.call(this,aSize);this.V.G(A.abN(this.
V.M,this.Ma.M[0]));},Ai:function(Ae){var B;C.TI.Ai.call(this,Ae);var G1=((Ae&0x10
)===0x10);var Fg=((Ae&0x20)===0x20);var Gm=this.Bk.Bw;var FE=A.jb.Ads;var GG=A.jb.
Bh;if(this.G8){FE=A.jb.Bh;GG=A.jb.Text;}if(!G1){this.Background.L(FE);this.V.L(A.
jb.CM);}else if(Gm){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else if(Fg){this.
Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);
}this.Lt=G1;this.Ks=Fg;this.P8=Gm;},Ja:function(H){this.A09(this);},A09:function(
H){this.ADh(!this.AlV);},A7r:function(E){this.ADh(E);},AQs:function(){return this.
AlV;},_Init:function(aArg){C.TI._Init.call(this,aArg);this.__proto__=C.RQ;this.Ma.
G(AVw);this.Init(aArg);},_className:"Application::EnumItemCheckBox"};C.Ac$={CL:0
,IL:A.abi(17,0,null),Vn:function(IK){return this.IL.Get(IK);},XV:function(){return this.
CL;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.IL.Set(P,0);this.CL=0;},J:function(
JO){if(this.CL>=17)A.ab5("%s",AVx);else{this.IL.Set(this.CL,JO);this.CL=this.CL+
1;}},Co:function(){},EJ:function(Acg){var AHz=Acg.indexOf(String.fromCharCode(0x2C
),0);var AZd=A.jV;var P=0;this.CL=0;while(P<17)if(Acg===A.jV){this.IL.Set(P,0);P++;
}else{if(AHz===-1){AZd=Acg;Acg=A.jV;}else{AZd=A.abV(Acg,AHz);Acg=A.ab1(Acg,0,AHz+
1);}var ZI=A.abZ(AZd,0,10)|0;if(this.A4V(ZI)){this.IL.Set(this.CL,ZI);this.CL=this.
CL+1;P++;}AHz=Acg.indexOf(String.fromCharCode(0x2C),0);}if(Acg!==A.jV)A.ab5("%s"
,AVy);},toString:function(){var A0q=(((B=this.IL.Get(0))<0)?B+0x100000000:B).toFixed(
);var P;for(P=1;P<this.CL;P=P+1)A0q=(A0q+AGq)+(((B=this.IL.Get(P))<0)?B+0x100000000:
B).toFixed();return A0q;},Contains:function(JO){var P;for(P=0;P<this.CL;P=P+1)if(
this.IL.Get(P)===JO)return true;return false;},A4V:function(JO){return true;},_Init:
function(aArg){(this.IL=[]).__proto__=C.Ac$.IL;this.__proto__=C.Ac$;A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ActionsList"};C.AKT={Init:function(aArg){var B;A.zX([
this,this.BbH],[B=A._GetAutoObject(A.Device.Device),B.A57,B.A_i],0);A.pe([this,this.
BbH],this);},Co:function(){A._GetAutoObject(A.Device.Device).Abn(this.toString()
);},BbH:function(H){this.EJ(A._GetAutoObject(A.Device.Device).AutoActions);A.we(
this,0);},_Init:function(aArg){C.Ac$._Init.call(this,aArg);this.__proto__=C.AKT;
this.Init(aArg);},_className:"Application::AutoActionsClass"};C.AutoActions={_Init:
function(){C.AKT._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.VO={UW:null,Kf:null,A4R:A.jV,Action:0,A2f:false,A8c:
false,A8T:false,Bg:function(aSize){C.Fa.Bg.call(this,aSize);this.QE.G(this.Me.M);
this.Om.G(this.QE.M);},Ai:function(Ae){C.Fa.Ai.call(this,Ae);if(!this.Lt){this.Kf.
Tw.L(A.jb.Amm);this.Kf.Qn.Y(true);this.Kf.Qn.L(A.jb.AOZ);}else if(this.P8){this.
Kf.Tw.L(A.jb.Bh);this.Kf.Qn.Y(false);}else if(this.Ks){this.Kf.Tw.L(A.jb.Bh);this.
Kf.Qn.Y(false);}else{this.Kf.Tw.L(A.jb.Text);this.Kf.Qn.Y(true);this.Kf.Qn.L(A.jb.
C0);}},Bix:function(E){if(this.Action===E)return;this.Action=E;},BjK:function(E){
if(this.A4R===E)return;this.A4R=E;this.UW.Text.Q(E);},ARn:function(E){if(this.A8T===
E)return;this.A8T=E;this.Kf.Bko(!this.Kf.ASE);},ADX:function(E){if(this.A8c===E)
return;this.A8c=E;this.Kf.Y(!this.Kf.Fc());},A60:function(E){if(this.A2f===E)return;
this.A2f=E;this.UW.Y(E);},_Init:function(aArg){C.Fa._Init.call(this,aArg);C.UW._Init.
call(this.UW={I:this},0);C.Kf._Init.call(this.Kf={I:this},0);this.__proto__=C.VO;
this.G(AVz);this.Background.G(AVA);this.GT.Ar(false);this.GT.Y(false);this.UW.G(
AVB);this.UW.Y(false);this.Kf.G(AVC);this.Kf.Y(false);this.J(this.UW,0);this.J(this.
Kf,0);this.Me.Ax(A.aaL(A.ach.ALm));},_Done:function(){this.__proto__=C.Fa;this.UW.
_Done();this.Kf._Done();C.Fa._Done.call(this);},_ReInit:function(){C.Fa._ReInit.
call(this);this.UW._ReInit();this.Kf._ReInit();},_Mark:function(D){var B;C.Fa._Mark.
call(this,D);if((B=this.UW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kf)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemActionScreen"};C.UW={AI:
null,Text:null,Cy:null,Init:function(aArg){this.Text.G(this.M);this.Cy.G(this.M);
this.AI.G(this.M);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AI.
_Init.call(this.AI={I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);A.acg.
Cy._Init.call(this.Cy={I:this},0);this.__proto__=C.UW;this.AI.G(AVD);this.AI.L(A.
jb.Bge);this.G(AVE);this.Text.G(AVF);this.Text.L(A.jb.Text);this.Cy.G(AVG);this.
Cy.NJ(1);this.Cy.L(A.jb.Text);this.J(this.AI,0);this.J(this.Text,0);this.J(this.
Cy,0);this.Text.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.AI._Done();this.Text._Done();this.Cy._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AI._ReInit();this.Text._ReInit(
);this.Cy._ReInit();this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.AI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cy)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionInfo"};C.Kf={Qn:null,Tw:null,ASE:false,Bko:function(E){if(this.
ASE===E)return;this.ASE=E;if(E){this.Tw.Ax(A.aaL(A.ach.AA0));this.Qn.Ax(A.aaL(A.
ach.AA0));}else{this.Tw.Ax(A.aaL(A.ach.ApJ));this.Qn.Ax(A.aaL(A.ach.ApJ));}},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(this.Qn={I:this
},0);A.acg.Am._Init.call(this.Tw={I:this},0);this.__proto__=C.Kf;this.G(Aw9);this.
Qn.G(Aw9);this.Qn.Cr(1);this.Tw.G(Aw9);this.Tw.Cr(0);this.J(this.Qn,0);this.J(this.
Tw,0);this.Qn.Ax(A.aaL(A.ach.ApJ));this.Tw.Ax(A.aaL(A.ach.ApJ));},_Done:function(
){this.__proto__=A.Core.O;this.Qn._Done();this.Tw._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Qn._ReInit();this.Tw._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Qn)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Tw)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"
};C.APW={Gd:null,B8:null,Dd:null,Dv:null,J9:null,YK:10,Ap4:0,ACM:0,AP$:0,AxK:false
,LK:false,A$R:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device
).Aq.K7())A._GetAutoObject(A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.
Device).Aq.Hz().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).X.F$();A._GetAutoObject(
A.Device.Helper).Apu(A._GetAutoObject(A.Device.Helper).X);A.zX([this,this.Ay_],this.
C4.R,0);A.zX([this,this.BwP],this.Dd.R,0);A.zX([this,this.AzX],this.Dv.R,0);A.zX([
this,this.AzX],this.Dv.Hw.R,0);A.zX([this,this.AzX],[this,this.AQA,this.ADV],0);
A.zX([this,this.Hu],[B=A._GetAutoObject(A.Device.Device),B.A6S,B.A_H],0);A.zX([this
,this.Bcd],this.B8.R,0);A.pe([this,this.Ay_],this);A.pe([this,this.Hu],this);A.pe([
this,this.AzX],this);A.pe([this,this.Bcd],this);},CI:function(H){if(!this.AxK){this.
AxK=true;A.pe([this,this.WG],this);}else C.HQ.CI.call(this,H);},Afr:function(H){
this.AP$=this.YK;this.A$Z(this);},Ed:function(H){A._GetAutoObject(A.Device.Helper
).X.G$();A._GetAutoObject(C.AZ).Fk();},Atc:function(){this.N.BU(A.jV);this.N.C7(
A.aaL(A.ach.AB3));this.N.Ci=[this,this.Axw];},Ay5:function(H){A._GetAutoObject(C.
AZ).BZ(63);},ADV:function(E){if(this.YK===E)return;this.YK=E;A.abo([this,this.AQA
,this.ADV],0);},A$Z:function(H){var F;if(!this.YK||(this.A$R===true)){A._GetAutoObject(
A.Device.Device).A6(24,false,CJ,0,null);if(this.ACM===1)A._GetAutoObject(A.Device.
Device).A6(26,true,A.jV,2000,null);else A._GetAutoObject(A.Device.Device).A6(23,
true,this.ACM.toFixed(),2000,null);this.Ed(this);return;}this.Gd.F$();this.Gd.DS(
A._GetAutoObject(A.Device.Helper).X.AnimalType);this.Gd.NH(A._GetAutoObject(A.Device.
Helper).X.Breed);this.Gd.Sd(A._GetAutoObject(A.Device.Helper).X.DateOfBirth);this.
Gd.JG(A._GetAutoObject(A.Device.Helper).X.Gender);this.Gd.M3(A._GetAutoObject(A.
Device.Helper).X.NaisId);this.Gd.M4(A._GetAutoObject(A.Device.Helper).X.TransponderId
);this.Gd.TU(A._GetAutoObject(A.Device.Helper).X.VisualId);var AkJ=A._GetAutoObject(
A.Device.Helper).AY9(this.Gd,(F=this.Dv.HR.Hf,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Aq);if(!AkJ)this.Aii();else{A._GetAutoObject(A.Device.Helper).AIz(
this.Gd,AkJ,(F=this.Dv.HR.Hf,F[1].call(F[0])),this.YK-1,[this,this.AoT]);A._GetAutoObject(
A.Device.Device).A6(24,false,CJ,0,null);}},Hu:function(H){var B;if(A._GetAutoObject(
A.Device.Helper).Amn())this.Dc.Y(true);else this.Dc.Y(false);if(this.LK){this.Dd.
Y(false);this.B8.U(A.aaR(A.acf.AA8));this.B8.ADj(A.aaL(A.ach.Aep));}else{this.Dd.
Y(true);this.B8.U(A.aaR(A.acf.Akn));this.B8.ADj(null);}if((this.Z.BfP(this.AY)>=
0)&&(((this.AY.T&0x1)===0x1)===false))this.LA(this.Z.Vj(this.AY,0x1));this.An();
},AQ2:function(E){if(this.Ap4===E)return;this.Ap4=E;A.abo([this,this.A6g,this.AQ2
],0);},AzX:function(H){var F;var AIl=(F=this.Dv.R,F[1].call(F[0]));var AyN=-1;switch((
F=this.Dv.HR.Hf,F[1].call(F[0]))){case 0:AyN=AIl+((F=A._GetAutoObject(A.Device.Helper
).Bau(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).X.Gender),F[1].call(F[0]))*(this.YK-1));break;case 1:AyN=(AIl+this.
YK)-1;break;case 3:case 2:case 5:case 4:switch(this.Dv.Hw.AB.R){case 0:AyN=(AIl+
this.YK)-1;break;case 1:AyN=(AIl-this.YK)+1;break;default:throw new Error(AVH+this.
Dv.Hw.AB.R.toFixed());}break;default:throw new Error(AVI+this.Dv.Hw.AB.R.toFixed(
));}this.AQ2(AyN);},BwP:function(H){A.pe([this,this.Hu],this);A.pe([this,this.AsY
],this);},Ay_:function(H){A._GetAutoObject(A.Device.Helper).AS9(A._GetAutoObject(
A.Device.Helper).X,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
LK);A.pe([this,this.AzX],this);},AoT:function(H){var F;var At=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!At)return;switch(At.Id){case 22:case 21:case 48:if((
At.Id===48)&&(At.PopupState===7))this.AoN();else switch((F=this.Dv.HR.Hf,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.LA(this.Dv);break;case 0:this.LA(this.Dd
);break;case 1:this.LA(this.B8);break;default:throw new Error(Aw_+(F=this.Dv.HR.
Hf,F[1].call(F[0])).toFixed());}break;case 25:this.LA(this.B8);break;case 47:if(
At.PopupState===7)this.AoN();else this.LA(this.B8);break;case 43:this.LA(this.Dd
);break;case 42:{this.LA(this.B8);if(At.PopupState===7)A.pe([this,this.WG],this);
}break;case 41:break;default:A.ab5("%s%e",Ar_,At.Id);}},Aii:function(){this.Gd.Co(
A._GetAutoObject(A.Device.Device).Aq);this.ACM=this.ACM+1;if(A._GetAutoObject(A.
Device.Helper).Amn()){if(A._GetAutoObject(A.Device.Device).Bq.K7()){A._GetAutoObject(
A.Device.Device).A6(24,false,ZA,0,null);A._GetAutoObject(A.Device.Device).A6(50,
true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),0,null);}else{var LW=A.
_GetAutoObject(A.Device.Device).Aq.K3(0,this.Gd.Id);A._GetAutoObject(A.Device.Device
).Sm(LW);var BT=A._NewObject(A.Device.Rating,0);BT.F$();BT.OnSetAnimalId(this.Gd.
Id);BT.OnSetBodyWeight(this.Kw);BT.OnSetTimestamp(this.Gd.DateOfBirth);BT.Co(A._GetAutoObject(
A.Device.Device).Bq);}}this.AoN();},AoN:function(){var B;var F,CK;if(!!(F=this.B8.
R,F[1].call(F[0]))){(F=this.B8.R,F[2].call(F[0],F[1].call(F[0])+1));if(this.LK)(
CK=this.Dd.R,CK[2].call(CK[0],(F=this.B8.R,F[1].call(F[0]))));}if(!this.LK)(CK=this.
Dd.R,CK[2].call(CK[0],A._GetAutoObject(A.Device.Helper).A88(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.Dd.R,F[1].call(
F[0])),this.Dd.Aja(),this.Dd.Ajc())));var IN=null;switch((F=this.Dv.HR.Hf,F[1].call(
F[0]))){case 3:IN=[B=A._GetAutoObject(A.Device.Device),B.Au6,B.Axo];break;case 2:
IN=[B=A._GetAutoObject(A.Device.Device),B.Au7,B.Axp];break;case 4:case 5:IN=[B=A.
_GetAutoObject(A.Device.Device),B.AmL,B.AnP];break;default:;}if(!!IN){switch((F=
this.Dv.J4.Vf,F[1].call(F[0]))){case 1:IN[2].call(IN[0],A._GetAutoObject(A.Device.
Helper).X.VisualId-1);break;case 0:IN[2].call(IN[0],A._GetAutoObject(A.Device.Helper
).X.VisualId+1);break;default:;}(F=this.Dv.R,F[2].call(F[0],IN[1].call(IN[0])));
}var Xb=100-((this.YK/this.AP$)*100);A._GetAutoObject(A.Device.Device).A6(24,true
,(((this.AP$.toFixed()+Ar$)+(Xb|0).toFixed())+Ar$)+(F=this.Dv.R,F[1].call(F[0])).
toFixed(),0,[this,this.BwZ]);this.ADV(this.YK-1);A.aaS([this,this.A$Z],null);},BwZ:
function(H){var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.
PopupState===5))this.A$R=true;},AoU:function(H){var F;C.HQ.AoU.call(this,H);(F=this.
Dc.R,F[2].call(F[0],this.Dc.Anf));switch(this.B4.AB.R){case 0:{this.J9.KE(A.aaR(
A.acf.ALi));this.J9.Kd(A.aaR(A.acf.ALj));}break;case 1:{this.J9.KE(A.aaR(A.acf.BeH
));this.J9.Kd(A.aaR(A.acf.BeI));}break;case 2:{this.J9.KE(A.aaR(A.acf.BgC));this.
J9.Kd(A.aaR(A.acf.BgD));}break;default:throw new Error(Ar4);}},Aed:function(E){if(
this.LK===E)return;this.LK=E;A.abo([this,this.Au8,this.Aed],0);},AsY:function(H){
var F,CK,SK;this.Aed(((F=this.B8.R,F[1].call(F[0]))===(CK=this.Dd.R,CK[1].call(CK[
0])))&&!!(SK=this.B8.R,SK[1].call(SK[0])));A.pe([this,this.Hu],this);},Bcd:function(
H){A.pe([this,this.AsY],this);},AQA:function(){return this.YK;},A6g:function(){return this.
Ap4;},Au8:function(){return this.LK;},_Init:function(aArg){C.HQ._Init.call(this,
aArg);C.AuT._Init.call(this.B8={I:this},0);C.QQ._Init.call(this.Dd={I:this},0);C.
AEX._Init.call(this.Dv={I:this},0);C.ASr._Init.call(this.J9={I:this},0);this.__proto__=
C.APW;var B;this.Dp(C.ABH);this.B8.G(AnC);this.B8.Aj(true);this.B8.U(A.aaR(A.acf.
Akn));this.B8.AqN(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.Arw));this.
B8.AqO(A.aaR(A.acf.AjI));this.Dd.G(AVJ);this.Dd.Aj(true);this.Dd.U(A.aaR(A.acf.YH
));this.Dd.Aq0(false);this.Dv.G(AVK);this.Dv.Aj(true);this.Dv.U(A.aaR(A.acf.A4E)
);this.Dv.Bx(0);this.J9.G(AVL);this.J9.Aj(true);this.J9.U(A.aaR(A.acf.A5N));this.
J9.GC(1);this.J9.Fd(500);this.J9.Kd(A.aaR(A.acf.ALj));this.J9.KE(A.aaR(A.acf.ALi
));this.J9.A7i(A.aaR(A.acf.Ap4)+A.aaR(A.acf.Colon));this.J(this.B8,0);this.J(this.
Dd,0);this.J(this.Dv,0);this.J(this.J9,0);this.Gd=A._NewObject(A.Device.Animal,0
);this.B8.AQ=[this,this.WG];this.B8.LN([this,this.WG]);this.B8.LP(A.aaL(A.ach.Aep
));this.B8.Av([B=A._GetAutoObject(A.Device.Helper).X,B.AjK,B.M4]);this.B8.Py([B=
A._GetAutoObject(A.Device.Device),B.Abj,B.Acb]);this.B8.QH([B=A._GetAutoObject(A.
Device.Device),B.Abk,B.Acc]);this.B8.TO([B=A._GetAutoObject(A.Device.Device),B.AmI
,B.AnO]);this.B8.Aed([this,this.Au8,this.Aed]);this.Dd.GB([this,this.Ea,this.G_]
);this.Dd.LN([this,this.WG]);this.Dd.LP(A.aaL(A.ach.Aep));this.Dd.TQ([B=this.Gender.
Animal,B.V0,B.JG]);this.Dd.Py([B=A._GetAutoObject(A.Device.Device),B.Abj,B.Acb]);
this.Dd.QH([B=A._GetAutoObject(A.Device.Device),B.Abk,B.Acc]);this.Dd.TO([B=A._GetAutoObject(
A.Device.Device),B.AmI,B.AnO]);this.Dd.Av([B=A._GetAutoObject(A.Device.Helper).X
,B.AmM,B.M3]);this.Dd.AmQ([B=this.AnimalType.Animal,B.Px,B.DS]);this.Dv.GB([this
,this.Ea,this.G_]);this.Dv.LN([B=this.Dv,B.Ge]);this.Dv.LP(A.aaL(A.ach.Edit));this.
Dv.Av([B=A._GetAutoObject(A.Device.Helper).X,B.AqB,B.TU]);this.Dv.A61(A._GetAutoObject(
A.Device.Helper).X);this.J9.Av([this,this.AQA,this.ADV]);this.J9.Bi8([this,this.
A6g,this.AQ2]);this.Init(aArg);},_Done:function(){this.__proto__=C.HQ;this.B8._Done(
);this.Dd._Done();this.Dv._Done();this.J9._Done();C.HQ._Done.call(this);},_ReInit:
function(){C.HQ._ReInit.call(this);this.B8._ReInit();this.Dd._ReInit();this.Dv._ReInit(
);this.J9._ReInit();this.B8.U(A.aaR(A.acf.Akn));this.B8.AqN(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.Arw));this.B8.AqO(A.aaR(A.acf.AjI));this.Dd.U(
A.aaR(A.acf.YH));this.Dv.U(A.aaR(A.acf.A4E));this.J9.U(A.aaR(A.acf.A5N));this.J9.
Kd(A.aaR(A.acf.ALj));this.J9.KE(A.aaR(A.acf.ALi));this.J9.A7i(A.aaR(A.acf.Ap4)+A.
aaR(A.acf.Colon));},_Mark:function(D){var B;C.HQ._Mark.call(this,D);if((B=this.Gd
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.B8)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.J9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.ARW={B_:null,RatingMode:null,KD:function(){if(!this.Bv){this.Bv=A._NewObject(
C.N,0);this.Bv.Ci=null;this.Bv.Cf=null;this.Bv.Cu=[this,this.W7];this.Bv.BU(A.jV
);this.Bv.Cm(null);this.Bv.CS(A.aaL(A.ach.Vt));}return this.Bv;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.B_._Init.call(this.B_={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.ARW;var B;this.
G(Q1);this.B_.G(Ar7);this.B_.U(A.aaR(A.acf.A81));this.J(this.B_,0);this.B_.Av([B=
this.RatingMode,B.Ce,B.Cg]);this.B_.CN(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.B_._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.B_._ReInit(
);this.RatingMode._ReInit();this.B_.U(A.aaR(A.acf.A81));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.B_)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.zX([this,this.
BcL],[B=A._GetAutoObject(A.Device.Device),B.AQE,B.AXW],0);A.pe([this,this.BcL],this
);},Dt:function(){return 2;},Gx:function(aIndex){return this.RatingModeToString.
B0(this.C$(aIndex));},Av:function(E){C.Ds.Av.call(this,E);A._GetAutoObject(A.Device.
Device).AvM(E);},BcL:function(H){this.R=A._GetAutoObject(A.Device.Device).RatingMode;
A.abo([this,this.Ce,this.Cg],0);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cv.Set(0,0);this.Cv.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Ds;this.RatingModeToString._Done();C.Ds._Done.call(this
);},_ReInit:function(){C.Ds._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.ALB={We:
function(H){C.AlL.We.call(this,H);if(A._GetAutoObject(A.Device.Helper).X.Ap0()){
A._GetAutoObject(A.Device.Helper).X.AjV(false);A._GetAutoObject(A.Device.Helper).
X.Co(A._GetAutoObject(A.Device.Device).Aq);}},_Init:function(aArg){C.AlL._Init.call(
this,aArg);this.__proto__=C.ALB;},_className:"Application::ControlMeasureTemperatureScreen"
};C.Hg={DD:A.jV,U:function(E){if(this.DD===E)return;this.DD=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.Hg;},_className:"Application::BaseItem"
};C.ATm={B_:null,WeightRecordingMode:null,KD:function(){if(!this.Bv){this.Bv=A._NewObject(
C.N,0);this.Bv.Ci=null;this.Bv.Cf=null;this.Bv.Cu=[this,this.W7];this.Bv.BU(A.jV
);this.Bv.Cm(null);this.Bv.CS(A.aaL(A.ach.Vt));}return this.Bv;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.B_._Init.call(this.B_={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.ATm;var B;this.G(Q1);this.B_.G(Ar7);this.B_.U(A.aaR(A.acf.ArT));this.B_.Fd(1);
this.J(this.B_,0);this.B_.Av([B=this.WeightRecordingMode,B.Ce,B.Cg]);this.B_.CN(
this.WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.B_.
_Done();this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.B_._ReInit();this.WeightRecordingMode.
_ReInit();this.B_.U(A.aaR(A.acf.ArT));},_Mark:function(D){var B;C.OverlayMenu._Mark.
call(this,D);if((B=this.B_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dt:function(){return 2;},Gx:function(aIndex){return this.
WeightRecordingModeToString.B0(this.C$(aIndex));},Av:function(E){C.Ds.Av.call(this
,E);A._GetAutoObject(A.Device.Device).AvW(E);},Init:function(aArg){var B;A.zX([this
,this.BdN],[B=A._GetAutoObject(A.Device.Device),B.A6R,B.A_G],0);A.pe([this,this.
BdN],this);},BdN:function(H){this.R=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.Ce,this.Cg],0);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cv.Set(0,0);this.Cv.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.WeightRecordingModeToString.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Ds._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Aai={BooleanToAutoOnOff:null,Gx:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.BooleanToAutoOnOff.
B0(aIndex);},_Init:function(aArg){C.FQ._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Aai;},_Done:function(
){this.__proto__=C.FQ;this.BooleanToAutoOnOff._Done();C.FQ._Done.call(this);},_ReInit:
function(){C.FQ._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.FQ._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.Awv={A4S:function(){var B;this.
Awb(1);this.Jh(0,3);this.U5(0,0,(B=this.M)[3]-B[1]);this.A2l(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.A2l(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.Vc(0);},_Init:
function(aArg){C.Az9._Init.call(this,aArg);this.__proto__=C.Awv;},_className:"Application::Triangle"
};C.ARB={Z:null,Init:function(aArg){this.Buj(this);},Bui:function(PR){var Aa=A._NewObject(
C.ALH,0);Aa.G(BC);Aa.U(PR);Aa.Aj(true);Aa.Ar(false);Aa.Bf(true);this.J(Aa,0);this.
Ass(this);},Ass:function(H){var B;var AkR=1;var A0k=0;var W=this.Z.Ag;var Cp=null;
var KT=null;while(!!W&&!((W.T&0x200)===0x200)){Cp=(C.T_.isPrototypeOf(W)?W:null);
if(((W.T&0x400)===0x400)&&!!Cp){var AJq=(B=Cp.V.B3.A4v(Cp.V.String,0,-1))[2]-B[0
];if(!!(C.Mc.isPrototypeOf(W)?W:null))AJq=AJq+20;if(A0k<AJq)A0k=AJq;Cp.G(A.abL(Cp.
M,120));Cp.G(A.abI(Cp.M,28));Cp.G(A.abM(Cp.M,this.M[0]));Cp.G(A.abO(Cp.M,((B=this.
M)[3]-B[1])-(AkR*28)));AkR=AkR+1;}else{KT=(A.acg.DQ.isPrototypeOf(W)?W:null);if(((
W.T&0x400)===0x400)&&!!KT){var C9=((B=this.M)[3]-B[1])-((AkR-1)*28);KT.DX([this.
M[0],KT.Ei[1]]);KT.DX([KT.Ei[0],C9]);KT.DJ([this.M[0]+120,KT.Es[1]]);KT.DJ([KT.Es[
0],C9]);}}W=W.Ag;}this.BxF(A0k,28);},BxF:function(aWidth,Bts){var B;var W=this.Z.
Ag;var Cp=null;var KT=null;aWidth=aWidth+20;if(aWidth>(C.Arx[0]-10))aWidth=C.Arx[
0]-10;while(!!W&&!((W.T&0x200)===0x200)){Cp=(C.T_.isPrototypeOf(W)?W:null);if(((
W.T&0x400)===0x400)&&!!Cp){Cp.V.Text.A2(0x14);Cp.V.Text.HF(10);Cp.G(A.abL(Cp.M,aWidth
));Cp.G(A.abI(Cp.M,Bts));Cp.G(A.abM(Cp.M,this.M[2]-((B=Cp.M)[2]-B[0])));}else{KT=(
A.acg.DQ.isPrototypeOf(W)?W:null);if(((W.T&0x400)===0x400)&&!!KT){KT.DX([this.M[
2]-aWidth,KT.Ei[1]]);KT.DJ([this.M[2],KT.Es[1]]);}}W=W.Ag;}},Buj:function(H){var
Aa=A._GetAutoObject(C.BW).ApR;while(!!Aa){if(!!(C.Av2.isPrototypeOf(Aa)?Aa:null)
){var EL=(C.Av2.isPrototypeOf(Aa)?Aa:null);this.Buh(EL.DD,EL.AQ,EL.Bw,EL.A8H);}else
if(!!(C.Av4.isPrototypeOf(Aa)?Aa:null)){var EL=(C.Av4.isPrototypeOf(Aa)?Aa:null);
this.Buo(EL.DD,EL.AQ,EL.Bw,EL.LJ);}else if(!!(C.Ael.isPrototypeOf(Aa)?Aa:null)){
var EL=(C.Ael.isPrototypeOf(Aa)?Aa:null);this.Bug(EL.DD,EL.AQ,EL.Bw);}else if(!!(
C.Aj3.isPrototypeOf(Aa)?Aa:null)){var EL=(C.Aj3.isPrototypeOf(Aa)?Aa:null);this.
Bui(EL.DD);}else if(!!(C.AEr.isPrototypeOf(Aa)?Aa:null))this.Bup();Aa=Aa.Mh;}A._GetAutoObject(
C.BW).Clear();A.pe([this,this.Ass],this);},Bug:function(PR,Acm,Ahn){var Aa=A._NewObject(
C.Mc,0);Aa.G(BC);Aa.U(PR);Aa.AQ=Acm;Aa.Aj(true);Aa.Ar(Ahn);Aa.Bf(true);this.J(Aa
,0);this.Ass(this);},Bup:function(){var KT=A._NewObject(A.acg.DQ,0);KT.L(A.jb.Bh
);KT.Aj(true);KT.NJ(3);this.J(KT,0);this.Ass(this);},Buh:function(PR,Acm,Ahn,AZ4
){var Aa=A._NewObject(C.ApH,0);Aa.G(BC);Aa.U(PR);Aa.AQ=Acm;Aa.Aj(true);Aa.Ar(Ahn
);Aa.Bf(true);Aa.ADA(AZ4);this.J(Aa,0);this.Ass(this);},Buo:function(PR,Acm,Ahn,
AZ4){var Aa=A._NewObject(C.ALG,0);Aa.G(BC);Aa.U(PR);Aa.AQ=Acm;Aa.Aj(true);Aa.Ar(
Ahn);Aa.Bf(true);Aa.ADA(AZ4);this.J(Aa,0);this.Ass(this);},_Init:function(aArg){
C.OverlayMenu._Init.call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);this.
__proto__=C.ARB;this.G(Q1);this.Z.G(Q1);this.J(this.Z,0);this.Init(aArg);},_Done:
function(){this.__proto__=C.OverlayMenu;this.Z._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Z._ReInit();},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.Aeu={_Init:function(
){A.acl.Aeu._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.A7_={ApR:null,Agy:null,Qf:function(PR){var EL=A._NewObject(C.Aj3
,0);EL.DD=PR;this.J(EL);},Clear:function(){this.ApR=null;this.Agy=null;},Gq:function(
){var KT=A._NewObject(C.AEr,0);this.J(KT);},J:function(A$f){if(!this.ApR){this.ApR=
A$f;this.Agy=this.ApR;}else{this.Agy.Mh=A$f;this.Agy=this.Agy.Mh;}},S8:function(
PR,Acm){var EL=A._NewObject(C.Ael,0);EL.DD=PR;EL.AQ=Acm;this.J(EL);},A2i:function(
PR,Acm,Bty){var EL=A._NewObject(C.Av2,0);EL.DD=PR;EL.AQ=Acm;EL.A8H=Bty;this.J(EL
);},Xh:function(PR){var EL=A._NewObject(C.Ael,0);EL.DD=PR;EL.Bw=false;this.J(EL);
},AiF:function(PR,Acm,Btw){var EL=A._NewObject(C.Av4,0);EL.DD=PR;EL.AQ=Acm;EL.LJ=
Btw;this.J(EL);},_Init:function(aArg){this.__proto__=C.A7_;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.ApR)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Agy)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Application::OptionsOverlayManagerClass"};C.BW={_Init:
function(){C.A7_._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.Av3={Mh:null,_Init:function(aArg){this.__proto__=C.Av3;
A.h7++;},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Mh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I
)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::OptionsOverlayItem"};C.AMD={AlJ:null,AqF:function(E){if(this.AlJ===
E)return;if(!!this.Ab)this.Ab.Y0(this);if(!!this.AlJ)this.ApK(this.AlJ,A._GetAutoObject(
C.ArB),null,null,null,null,false);this.AlJ=E;if(!!this.AlJ)this.Aj7(this.AlJ,A._GetAutoObject(
C.ArB),null,null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);this.__proto__=C.AMD;this.G(BC);},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.AlJ)&&(B._cycle!=D))B._Mark(B._cycle=D);}
,_className:"Application::FooterContainer"};C.V8={_Init:function(){C.AMD._Init.call(
this,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.
NK={Init:function(aArg){var CW=A._NewObject(C.ARC,0);CW.G(this.M);this.Aj7(CW,A.
_GetAutoObject(C.Anc),null,A._GetAutoObject(C.Anc),A._GetAutoObject(C.Anc),null,
null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.
__proto__=C.NK;this.G(Q1);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.ArB={_Init:function(){C.ASt._Init.call(this,0);this.AA6=200;},_ReInit:function(
){},_variants:function(){return this;},_this:null};C.ARC={AI:null,_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.AI={I:this},0);this.
__proto__=C.ARC;this.G(AGr);this.Dz(0);this.AI.AV(0x3F);this.AI.G(AGr);this.AI.L(
0xAAFFFFFF);this.J(this.AI,0);},_Done:function(){this.__proto__=A.Core.O;this.AI.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AI._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::OverlayShade"};
C.ASs={RM:function(){var B;var Ao=(A.acl.Aem.isPrototypeOf(B=A.acl.AdD.RM.call(this
))?B:null);if(!Ao)throw new Error(Ar2);Ao.Ck.Ct=255;Ao.Ck.B1=0;return Ao;},RL:function(
){var B;var Ao=(A.acl.Av1.isPrototypeOf(B=A.acl.AdD.RL.call(this))?B:null);if(!Ao
)throw new Error(Ar2);Ao.ER.Ct=0;Ao.ER.B1=255;Ao.Dk=true;return Ao;},_Init:function(
aArg){A.acl.AdD._Init.call(this,aArg);this.__proto__=C.ASs;},_className:"Application::ShadeOverlayTransition"
};C.Anc={_Init:function(){C.ASs._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Akd={Anf:0,AZD:false,Init:function(aArg){
},Ai:function(Ae){var F;C.I1.Ai.call(this,Ae);this.BM.L(this.V.AP);if(!!this.R){
var A15=(F=this.R,F[1].call(F[0]));if((F=this.R,F[1].call(F[0]))>0){if(A15<100000
)this.BM.Q((A._GetAutoObject(A.Device.Converter).NU(A15,1,false)+CJ)+A._GetAutoObject(
A.acj.DI).AcI());else this.BM.Q((A._GetAutoObject(A.Device.Converter).NU(A15,0,false
)+CJ)+A._GetAutoObject(A.acj.DI).AcI());}else this.BM.Q(A.aaR(A.acf.AjI));}},JW:
function(H){var B;var BdK=(this.AZD===false)&&(this.AK<=this.F_);if(BdK)this.Bx(
this.Anf);this.A1X(this.AK,4);if(BdK){this.Bx(this.AK-this.Ajo);this.AZD=true;}C.
I1.JW.call(this,H);},JR:function(H){this.A1X(this.AK,5);C.I1.JR.call(this,H);},Bx:
function(E){this.A1X(E,4);E=(((E+((this.Ajo/2)|0))/this.Ajo)|0)*this.Ajo;if(!E)this.
AZD=false;C.I1.Bx.call(this,E);},AgL:function(E){if(this.Anf===E)return;this.Anf=
E;},A1X:function(Btb,GF){this.AQ4(A._GetAutoObject(A.acj.DI).Bay(Btb,GF));},_Init:
function(aArg){C.I1._Init.call(this,aArg);this.__proto__=C.Akd;this.G(JN);this.Anf=
this.F_;this.Kh(this.HU,-1);this.Init(aArg);},_className:"Application::SettingsItemWeight"
};C.Bz4={None:0,Left:1,BAG:2,Right:3};C.AlO={AY0:null,Fn:null,D_:null,Background:
null,AmA:null,FP:null,KA:A.jV,ACt:null,Init:function(aArg){var B;A.zV([this,this.
Afm],A._GetAutoObject(A.Device.Device).Aq,0);A.zX([this,this.A1a],[B=A._GetAutoObject(
A.Device.Device).Aq,B.Fw,B.FB],0);A.pe([this,this.Lz],this);A.pe([this,this.A1a]
,this);this.Ba(this.D_);},Ai:function(Ae){C.OverlayMenu.Ai.call(this,Ae);this.DM(
this);},KD:function(){if(!this.Bv)this.Bv=A._NewObject(C.N,0);return this.Bv;},Fb:
function(H){C.OverlayMenu.Fb.call(this,H);A._GetAutoObject(A.Device.Device).Aq.Bm(
this.AY0);},CI:function(H){C.OverlayMenu.CI.call(this,H);this.AI6();},AoY:function(
H){var Aa=(C.AAD.isPrototypeOf(H)?H:null);var Hr;if(!!Aa)Hr=Aa.Hr;else Hr=this.FP.
Fx();if(Hr>=A._GetAutoObject(A.Device.Device).Aq.Ch())return;A._GetAutoObject(A.
Device.Helper).HD(Hr);A.pe([this,this.W7],this);},AI6:function(){},Afm:function(
H){this.An();},A04:function(H){if(this.FP.Fx()<(A._GetAutoObject(A.Device.Device
).Aq.Ch()-1))this.FP.GQ(this.FP.Fx()+1);},A05:function(H){if(this.FP.Fx()>0)this.
FP.GQ(this.FP.Fx()-1);},DM:function(H){var Gn=A._GetAutoObject(A.Device.Device).
Aq.Ch();var MF=this.Bv;if(!MF)return;MF.CS(A.aaL(A.ach.AdP));MF.Cu=[this,this.W7
];if(Gn<=0){MF.Cm(null);MF.C7(null);MF.Cf=null;MF.Ci=null;MF.YY=false;MF.YZ=false;
}else if(Gn===1){MF.Cm(null);MF.C7(A.aaL(A.ach.AdQ));MF.Cf=null;MF.Ci=[this,this.
AoY];MF.YY=false;MF.YZ=false;}else{MF.Cm(A.aaL(A.ach.Ap7));MF.C7(A.aaL(A.ach.Aqc
));MF.Cf=[this,this.A04];MF.Ci=[this,this.A05];MF.YY=true;MF.YZ=true;}},Lz:function(
H){this.Bdb(this);this.AY0=A._GetAutoObject(A.Device.Device).Aq.Filter;this.AI6(
);},BjY:function(E){if(this.ACt===E)return;this.ACt=E;A.pe([this,this.BwM],this);
},BwM:function(H){this.Bdb(this);},Bdb:function(H){var B;if(!!this.Fn)this.HG(this.
Fn);this.Fn=(C.Er.isPrototypeOf(B=A._NewObject(this.ACt,0))?B:null);if(!!this.Fn
){this.Fn.G(AVM);this.J(this.Fn,0);}},A1a:function(H){if(!!A._GetAutoObject(A.Device.
Device).Aq.Filter&&!!A._GetAutoObject(A.Device.Device).Aq.Filter.DW(1,4))this.FP.
Do(A.aaR(A.acf.AP5));else this.FP.Do(this.KA);},Do:function(E){if(this.KA===E)return;
this.KA=E;A.pe([this,this.A1a],this);},_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.D_._Init.call(this.D_={I:this},0);A.acg.AI._Init.call(this.Background={
I:this},0);A.acg.AI._Init.call(this.AmA={I:this},0);C.FP._Init.call(this.FP={I:this
},0);this.__proto__=C.AlO;this.G(Q1);this.D_.G(BC);this.D_.A7l(A.jb.C0);this.D_.
A7m(A.jb.Text);this.Background.G(E2);this.Background.L(A.jb.Blk);this.AmA.G(AGs);
this.AmA.L(A.jb.C0);this.FP.G(AGs);this.FP.NI(C.AAD);this.ACt=C.ANJ;this.KA=A.aaR(
A.acf.AuX);this.J(this.D_,0);this.J(this.Background,0);this.J(this.AmA,0);this.J(
this.FP,0);this.D_.AQ=[this,this.AoY];this.D_.Abq(A._NewObject(C.XY,0));this.FP.
YP(A._GetAutoObject(A.Device.Device).Aq);this.FP.YQ([this,this.AoY]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.D_._Done();this.Background.
_Done();this.AmA._Done();this.FP._Done();C.OverlayMenu._Done.call(this);},_ReInit:
function(){C.OverlayMenu._ReInit.call(this);this.D_._ReInit();this.Background._ReInit(
);this.AmA._ReInit();this.FP._ReInit();this.Do(A.aaR(A.acf.AuX));},_Mark:function(
D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.AY0)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fn)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.D_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AmA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FP)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalSearchOverlay"};C.AAD={AN:null,CX:null,Bg:function(
aSize){C.A$.Bg.call(this,aSize);this.V.G(A.abN(this.V.M,((aSize[0]*65)/100)|0));
this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.CX.G([this.V.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.CX.C5(this.V.AP);},Init:
function(aArg){},B$:function(Ac){if(!this.AW)return;this.Hr=Ac;if(!!this.AW){this.
U(this.AW.CA(Ac,1).toFixed());this.CX.DS(this.AW.Amc(Ac,14));this.CX.ADl(this.AW.
IU(Ac,13));this.CX.Aec(this.AW.HT(Ac,8));this.CX.TR(this.AW.HT(Ac,11));this.CX.Aef(
this.AW.HT(Ac,12));this.CX.Aeh(this.AW.CA(Ac,5));this.An();}},_Init:function(aArg
){C.A$._Init.call(this,aArg);A.acg.AI._Init.call(this.AN={I:this},0);C.CX._Init.
call(this.CX={I:this},0);this.__proto__=C.AAD;this.G(OJ);this.AN.L(A.jb.Bb);this.
CX.G(AVN);this.J(this.AN,0);this.J(this.CX,0);this.Init(aArg);},_Done:function(){
this.__proto__=C.A$;this.AN._Done();this.CX._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AN._ReInit();this.CX._ReInit();},_Mark:function(
D){var B;C.A$._Mark.call(this,D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListSmallItem"
};C.XY={R:null,Init:function(aArg){var B;this.A1p(this);this.Av([B=A._GetAutoObject(
A.Device.Device).Aq,B.Fw,B.FB]);},A6Z:function(H){var B;var F;var Filter;var FilterCriterion;
if(!!this.R&&!!(F=this.R,F[1].call(F[0]))){Filter=(F=this.R,F[1].call(F[0])).Gu(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DW(1,4))?
B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!
FilterCriterion)Filter.QM(FilterCriterion);var AzG=this.AgA();if(AzG>0){FilterCriterion=
A._NewObject(A.Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,AzG
,false);Filter.CZ(FilterCriterion);}if(!!this.R)(F=this.R,F[2].call(F[0],Filter)
);this.A0.AjO(false);},BsB:function(s){this.A6Z(s);},A1p:function(H){var B;var F;
var Filter;var FilterCriterion;if(!!this.R&&!!(F=this.R,F[1].call(F[0]))){Filter=(
F=this.R,F[1].call(F[0])).Gu();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(
B=Filter.DW(1,4))?B:null);if(!!FilterCriterion)Filter.QM(FilterCriterion);(F=this.
R,F[2].call(F[0],Filter));}},BCn:function(s){this.A1p(s);},Av:function(E){if(A.aaZ(
this.R,E))return;if(!!this.R)A.z$([this,this.Acf],this.R,0);this.R=E;if(!!E)A.zX([
this,this.Acf],E,0);if(!!E)A.pe([this,this.Acf],this);},Db:function(H){var B;var
F;if(!(F=this.R,F[1].call(F[0]))){this.A0.ADy(-1);this.DS(0);return;}var AxG=(A.
Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.R,F[1].call(F[0])).DW(1,4))?
B:null);if(!AxG){this.A0.ADy(0);this.A0.AjO(true);}else this.A0.ADy(AxG.A4);var Axz=(
A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.R,F[1].call(F[0])).DW(
14,0))?B:null);if(!!Axz)this.DS(Axz.A4);else this.DS(0);},Acf:function(s){this.Db(
s);},_Init:function(aArg){C.Aus._Init.call(this,aArg);this.__proto__=C.XY;this.A0.
ADy(0);this.A0.Di=[this,this.BsB];this.Init(aArg);},_Mark:function(D){var B;C.Aus.
_Mark.call(this,D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::HeaderSearchAnimal"};C.ApN={BirthType:null,EaseOfDelivery:null,B8:
null,Fm:null,Aa2:null,GO:null,Cz:null,Aa0:null,AK1:false,Init:function(aArg){this.
AK1=A._GetAutoObject(A.Device.Helper).X.Aqf();if(this.AK1)this.AgE(A._GetAutoObject(
A.Device.Helper).X.FirstBodyWeight);if(!A._GetAutoObject(A.Device.Helper).X.TransponderId
){this.B8.LN([this,this.WG]);this.B8.LP(A.aaL(A.ach.Aep));this.B8.AQ=[this,this.
WG];}this.Fm.Aq0(!!A._GetAutoObject(A.Device.Helper).X.NaisId);A.zX([this,this.Hu
],this.Fm.R,0);A.zX([this,this.Hu],this.B8.R,0);A.pe([this,this.Hu],this);},Afr:
function(H){if(((this.Fm.Arj===false)&&!!A._GetAutoObject(A.Device.Helper).X.NaisId
)&&A._GetAutoObject(A.Device.Helper).AO9(A._GetAutoObject(A.Device.Helper).X.NaisId
)){A._GetAutoObject(A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter
).Ub(A._GetAutoObject(A.Device.Helper).X.NaisId),0,null);return;}A._GetAutoObject(
A.Device.Helper).X.Co(A._GetAutoObject(A.Device.Device).Aq);if(this.Kw>0){if(this.
AK1){var Ac=A._GetAutoObject(A.Device.Device).Bq.K3(0,A._GetAutoObject(A.Device.
Helper).X.FirstBodyWeightId);if(Ac>=0){var BT=A._NewObject(A.Device.Rating,0);BT.
EJ(Ac,A._GetAutoObject(A.Device.Device).Bq);BT.OnSetBodyWeight(this.Kw);BT.OnSetTimestamp(
A._GetAutoObject(A.Device.Helper).X.DateOfBirth);BT.Co(A._GetAutoObject(A.Device.
Device).Bq);}else A.ab5("%s%i",AVO,A._GetAutoObject(A.Device.Helper).X.FirstBodyWeightId
);}else if(A._GetAutoObject(A.Device.Device).Bq.K7())A._GetAutoObject(A.Device.Device
).A6(50,true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),0,null);else{var
BT=A._NewObject(A.Device.Rating,0);BT.F$();BT.OnSetAnimalId(A._GetAutoObject(A.Device.
Helper).X.Id);BT.OnSetBodyWeight(this.Kw);BT.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).X.DateOfBirth);BT.Co(A._GetAutoObject(A.Device.Device).Bq);}}A._GetAutoObject(
C.AZ).Fk();},Ed:function(H){A._GetAutoObject(A.Device.Helper).X.EJ(A._GetAutoObject(
A.Device.Helper).X.CE,A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(C.AZ
).Fk();},Atc:function(){this.N.BU(A.jV);this.N.C7(A.aaL(A.ach.Amk));this.N.Ci=[this
,this.Axw];},Ay5:function(H){A._GetAutoObject(C.AZ).BZ(32);},Hu:function(H){var F;
var Nh=(F=this.Fm.R,F[1].call(F[0]));var AfD=(F=this.B8.R,F[1].call(F[0]));var A1R=
true;if(!!Nh&&(AfD===Nh))A1R=false;A._GetAutoObject(A.Device.Helper).Mp(this.B8,
A1R);this.Fm.Bi0(!A1R);},_Init:function(aArg){C.HQ._Init.call(this,aArg);C.BirthType.
_Init.call(this.BirthType={I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={
I:this},0);C.AuT._Init.call(this.B8={I:this},0);C.QQ._Init.call(this.Fm={I:this}
,0);C.AbL._Init.call(this.Aa2={I:this},0);C.B_._Init.call(this.GO={I:this},0);C.
Sn._Init.call(this.Cz={I:this},0);C.B_._Init.call(this.Aa0={I:this},0);this.__proto__=
C.ApN;var B;this.B8.G(Ahf);this.B8.Aj(true);this.B8.U(A.aaR(A.acf.Akn));this.B8.
AqN(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.Arw));this.B8.AqO(A.aaR(
A.acf.AjI));this.Fm.G(Ahf);this.Fm.Aj(true);this.Fm.U(A.aaR(A.acf.YH));this.Aa2.
G(AVP);this.Aa2.Aj(true);this.Aa2.U(A.aaR(A.acf.Gy));this.GO.G(Ahf);this.GO.Aj(true
);this.GO.U(A.aaR(A.acf.Aqq));this.Cz.G(Ahf);this.Cz.Aj(true);this.Cz.U(A.aaR(A.
acf.Adx));this.Cz.AD0(true);this.Aa0.G(Ahf);this.Aa0.Aj(true);this.Aa0.U(A.aaR(A.
acf.AfW));this.J(this.B8,0);this.J(this.Fm,0);this.J(this.Aa2,0);this.J(this.GO,
0);this.J(this.Cz,0);this.J(this.Aa0,0);this.BirthType.LO(A._GetAutoObject(A.Device.
Helper).X);this.EaseOfDelivery.LO(A._GetAutoObject(A.Device.Helper).X);this.B8.Av([
B=A._GetAutoObject(A.Device.Helper).X,B.AjK,B.M4]);this.Fm.GB([this,this.Ea,this.
G_]);this.Fm.Av([B=A._GetAutoObject(A.Device.Helper).X,B.AmM,B.M3]);this.Aa2.GB([
this,this.Ea,this.G_]);this.Aa2.Av([B=A._GetAutoObject(A.Device.Helper).X,B.AqB,
B.TU]);this.GO.Av([B=this.BirthType,B.Ce,B.Cg]);this.GO.CN(this.BirthType);this.
Cz.GB([this,this.Ea,this.G_]);this.Cz.LN([B=this.Cz,B.Ge]);this.Cz.LP(A.aaL(A.ach.
Edit));this.Cz.Abu([B=A._GetAutoObject(A.Device.Helper).X,B.Au3,B.Sd]);this.Aa0.
Av([B=this.EaseOfDelivery,B.Ce,B.Cg]);this.Aa0.CN(this.EaseOfDelivery);this.Init(
aArg);},_Done:function(){this.__proto__=C.HQ;this.BirthType._Done();this.EaseOfDelivery.
_Done();this.B8._Done();this.Fm._Done();this.Aa2._Done();this.GO._Done();this.Cz.
_Done();this.Aa0._Done();C.HQ._Done.call(this);},_ReInit:function(){C.HQ._ReInit.
call(this);this.BirthType._ReInit();this.EaseOfDelivery._ReInit();this.B8._ReInit(
);this.Fm._ReInit();this.Aa2._ReInit();this.GO._ReInit();this.Cz._ReInit();this.
Aa0._ReInit();this.B8.U(A.aaR(A.acf.Akn));this.B8.AqN(((A.aaR(A.acf.Ok)+A.aaR(A.
acf.Colon))+CJ)+A.aaR(A.acf.Arw));this.B8.AqO(A.aaR(A.acf.AjI));this.Fm.U(A.aaR(
A.acf.YH));this.Aa2.U(A.aaR(A.acf.Gy));this.GO.U(A.aaR(A.acf.Aqq));this.Cz.U(A.aaR(
A.acf.Adx));this.Aa0.U(A.aaR(A.acf.AfW));},_Mark:function(D){var B;C.HQ._Mark.call(
this,D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aa0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.AbL={Ft:null,A0:null,A3:0,Ja:function(H){C.Dj.Ja.call(this,H);if(!this.A3)this.
Ge(this);else this.G0(this);},Ai:function(Ae){C.Dj.Ai.call(this,Ae);this.Hl.Y(false
);this.HU.Y(false);if(this.A3===1){this.Ba(this.A0);if(this.G8){this.A0.Fz(A.jb.
CM);this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.A0.Fz(A.jb.C0);this.
Background.L(A.jb.CM);this.V.L(A.jb.Text);}}else{if(this.G8)this.A0.Fz(A.jb.CM);
else this.A0.Fz(A.jb.C0);this.Ba(null);}},Bx:function(E){var F;var BL=this.AK;C.
Dj.Bx.call(this,E);if(this.AK!==BL){if(!!this.R)(F=this.R,F[2].call(F[0],this.AK
));A.abo(this.R,0);}A.abo([this,this.TN,this.A_l],0);},DM:function(H){var F;if(!
this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.
ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.
G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(null);(F=this.N,F[1].call(
F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;}break;default:this.Ft.Aj$((F=
this.N,F[1].call(F[0])));}},Ge:function(H){this.Em(1);},G0:function(H){this.Em(0
);},Em:function(EB){var F;if(!this.A3)this.Ft.AiU((F=this.N,F[1].call(F[0])));this.
A3=EB;if(this.A3<0)this.A3=0;else if(this.A3>1)this.A3=1;if(this.A3===1)this.A0.
Sl(7);this.DM(this);this.An();},_Init:function(aArg){C.Dj._Init.call(this,aArg);
C.AO5._Init.call(this.A0={I:this},0);this.__proto__=C.AbL;this.G(Uq);this.Fd(999999
);this.V.Q(Asa);this.V.L(A.jb.Bh);this.Hl.Y(false);this.HU.Y(false);this.A0.G(AVQ
);this.A0.ARa(6);this.J(this.A0,0);this.A0.Av([this,this.TN,this.A_l]);this.Ft=A.
_NewObject(C.AdK,0);},_Done:function(){this.__proto__=C.Dj;this.A0._Done();C.Dj.
_Done.call(this);},_ReInit:function(){C.Dj._ReInit.call(this);this.A0._ReInit();
},_Mark:function(D){var B;C.Dj._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dt:function(){return 4;
},C$:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},Gx:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jV;return this.WeightRecordingScopeToString.
B0(aIndex);},DO:function(A1){return A1;},Hj:function(){return 3;},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AB;this.WeightRecordingScopeToString._Done();
C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.AtC={Z:null,Qt:null,NF:null,D7:null,Pn:null,Pk:null,Pl:null,Au:null,FQ:null,
ReasonOfLeaving:null,AgT:null,MP:0,Al2:false,AAH:true,AMw:false,Are:false,Init:function(
aArg){A.zX([this,this.A6X],[this,this.A6t,this.ARb],0);this.AgH(A._GetAutoObject(
A.Device.Helper).X.Ag$(2));this.ReasonOfLeaving.Av(this.ReasonOfLeaving.DO(A._GetAutoObject(
A.Device.Helper).X.ReasonOfLeaving));A.pe([this,this.A6X],this);},Dr:function(H){
var B;var E5=0;var W=this.AY;switch(this.Cl.CH){case 6:E5=2;break;case 7:E5=7;break;
case 4:E5=4;break;case 5:E5=5;break;default:;}W=this.RT(W,E5,0x414);if(!!W)this.
Ba(W);if(!!W&&((W.T&0x400)===0x400))this.Z.Hx(W,true,null,null);},Alg:function(H
){A._GetAutoObject(C.AZ).Fk();},Ao0:function(H){var F;if(A._GetAutoObject(A.Device.
Device).Bq.K7())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Bq.Hz().toFixed(),0,null);else{var BT=A._NewObject(A.Device.Rating
,0);BT.F$();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).X.Id);BT.OnSetBodyWeight(
this.MP);BT.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dx());BT.Co(A._GetAutoObject(
A.Device.Device).Bq);}if(this.Al2){A._GetAutoObject(A.Device.Helper).X.AgK(false
);if(!A._GetAutoObject(A.Device.Helper).X.AnimalType)A._GetAutoObject(A.Device.Helper
).A4x(A._GetAutoObject(A.Device.Helper).Dx(),this.Are);}A._GetAutoObject(A.Device.
Helper).X.ADZ(this.ReasonOfLeaving.C$((F=this.NF.R,F[1].call(F[0]))));if(this.AAH
)A._GetAutoObject(A.Device.Helper).X.M4(0);if(this.Are)A._GetAutoObject(A.Device.
Helper).X.AvA(true);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(A.Device.
Device).Aq);this.A8I();},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[
1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},AgH:function(E){
if(this.MP===E)return;this.MP=E;},AmJ:function(){return this.MP;},Bcf:function(H
){var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!At)return;if((At.PopupState===
4)||(At.PopupState===3)){A._GetAutoObject(C.AZ).Fk();A._GetAutoObject(A.Device.Helper
).Arr();}},A6X:function(H){switch(this.Are){case false:this.D7.U(A.aaR(A.acf.ATo
));break;case true:this.D7.U(A.aaR(A.acf.Bng));break;default:;}},ARb:function(E){
if(this.Are===E)return;this.Are=E;},A6t:function(){return this.Are;},A8I:function(
){A._GetAutoObject(A.Device.Device).A6(15,true,A._GetAutoObject(A.Device.Helper).
X.VisualId.toFixed(),2000,[this,this.Bcf]);},Bjo:function(E){if(this.AMw===E)return;
this.AMw=E;},BhG:function(){return this.AMw;},BiI:function(E){if(this.AAH===E)return;
this.AAH=E;},Bhv:function(){return this.AAH;},BiY:function(E){if(this.Al2===E)return;
this.Al2=E;},BhC:function(){return this.Al2;},G3:function(H){A.pe([this,this.E7]
,this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);C.Aez._Init.call(this.Qt={I:this},0);C.ArA._Init.call(this.NF={I:this
},0);C.Akd._Init.call(this.D7={I:this},0);C.Aez._Init.call(this.Pn={I:this},0);C.
Aez._Init.call(this.Pk={I:this},0);C.Aez._Init.call(this.Pl={I:this},0);C.Au._Init.
call(this.Au={I:this},0);C.FQ._Init.call(this.FQ={I:this},0);C.ReasonOfLeaving._Init.
call(this.ReasonOfLeaving={I:this},0);A.Device.AgT._Init.call(this.AgT={I:this},
0);this.__proto__=C.AtC;var B;this.N.Y(true);this.N.BU(A.aaR(A.acf.Unregister));
this.Dp(C.Ix);this.Z.G(E2);this.Z.J$(1);this.Qt.G(Ab$);this.Qt.Aj(true);this.Qt.
U(A.aaR(A.acf.Al2));this.Qt.Bf(true);this.Qt.YT(false);this.Qt.GC(-1);this.Qt.Fd(
1);this.NF.G(WF);this.NF.Aj(true);this.NF.U(A.aaR(A.acf.ReasonOfLeaving));this.NF.
Bf(true);this.NF.YT(false);this.D7.G(Ahe);this.D7.Aj(true);this.D7.U(A.aaR(A.acf.
ATo));this.D7.Bf(false);this.D7.GC(1000);this.D7.Fd(999000);this.Pn.G(WF);this.Pn.
Aj(true);this.Pn.U(A.aaR(A.acf.A2w));this.Pn.Bf(true);this.Pn.YT(false);this.Pn.
Bx(1);this.Pn.GC(-1);this.Pn.Fd(1);this.Pk.G(Ab$);this.Pk.Aj(true);this.Pk.U(A.aaR(
A.acf.A2x));this.Pk.Bf(true);this.Pk.YT(false);this.Pk.Bx(1);this.Pk.GC(-1);this.
Pk.Fd(1);this.Pl.G(WF);this.Pl.Aj(true);this.Pl.U(A.aaR(A.acf.A3i));this.Pl.Bf(true
);this.Pl.YT(false);this.Pl.Bx(1);this.Pl.GC(-1);this.Pl.Fd(1);this.Au.G(Aw1);this.
FQ.Av(0);this.J(this.Z,0);this.J(this.Qt,0);this.J(this.NF,0);this.J(this.D7,0);
this.J(this.Pn,0);this.J(this.Pk,0);this.J(this.Pl,0);this.J(this.Au,0);this.N.CS(
A.aaL(A.ach.ET));this.Z.Eh=[this,this.G3];this.Qt.Av([B=this.FQ,B.Ce,B.Cg]);this.
Qt.CN(this.FQ);this.Qt.AjY([this,this.BhC,this.BiY]);this.NF.GB([this,this.Ea,this.
G_]);this.NF.LN([B=this.NF,B.Ge]);this.NF.LP(A.aaL(A.ach.Edit));this.NF.Av([B=this.
ReasonOfLeaving,B.Ce,B.Cg]);this.NF.CN(this.ReasonOfLeaving);this.NF.AmS(this.AgT
);this.D7.Av([this,this.AmJ,this.AgH]);this.Pn.Av([B=this.FQ,B.Ce,B.Cg]);this.Pn.
CN(this.FQ);this.Pn.AjY([this,this.BhG,this.Bjo]);this.Pk.Av([B=this.FQ,B.Ce,B.Cg
]);this.Pk.CN(this.FQ);this.Pk.AjY([this,this.A6t,this.ARb]);this.Pl.Av([B=this.
FQ,B.Ce,B.Cg]);this.Pl.CN(this.FQ);this.Pl.AjY([this,this.Bhv,this.BiI]);this.Init(
aArg);},_Done:function(){this.__proto__=C.AC;this.Z._Done();this.Qt._Done();this.
NF._Done();this.D7._Done();this.Pn._Done();this.Pk._Done();this.Pl._Done();this.
Au._Done();this.FQ._Done();this.ReasonOfLeaving._Done();this.AgT._Done();C.AC._Done.
call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.Z._ReInit();this.Qt.
_ReInit();this.NF._ReInit();this.D7._ReInit();this.Pn._ReInit();this.Pk._ReInit(
);this.Pl._ReInit();this.Au._ReInit();this.FQ._ReInit();this.ReasonOfLeaving._ReInit(
);this.AgT._ReInit();this.N.BU(A.aaR(A.acf.Unregister));this.Qt.U(A.aaR(A.acf.Al2
));this.NF.U(A.aaR(A.acf.ReasonOfLeaving));this.D7.U(A.aaR(A.acf.ATo));this.Pn.U(
A.aaR(A.acf.A2w));this.Pk.U(A.aaR(A.acf.A2x));this.Pl.U(A.aaR(A.acf.A3i));},_Mark:
function(D){var B;C.AC._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Qt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pn)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pl
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ReasonOfLeaving)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"
};C.ASr={Ai9:null,Pd:null,At5:AVR,Bg:function(aSize){C.I1.Bg.call(this,aSize);this.
V.G([0,0,aSize[0],40]);this.BM.G([0,40,aSize[0],80]);this.Hl.G([0,this.BM.M[1],40
,this.BM.M[3]]);this.HU.G([aSize[0]-40,this.BM.M[1],aSize[0],this.BM.M[3]]);},Ai:
function(Ae){var F;C.I1.Ai.call(this,Ae);this.Pd.L(this.V.AP);if(!!this.Ai9){if((
F=this.Ai9,F[1].call(F[0]))===-1)this.Pd.Q(this.At5+AGt);else this.Pd.Q((this.At5+
CJ)+(F=this.Ai9,F[1].call(F[0])).toFixed());}else this.Pd.Q(this.At5);},A0Q:function(
H){this.An();},Bi8:function(E){if(A.aaZ(this.Ai9,E))return;if(!!this.Ai9)A.z$([this
,this.A0Q],this.Ai9,0);this.Ai9=E;if(!!E)A.zX([this,this.A0Q],E,0);if(!!E)A.pe([
this,this.A0Q],this);},A7i:function(E){if(this.At5===E)return;this.At5=E;this.An(
);},_Init:function(aArg){C.I1._Init.call(this,aArg);C.CP._Init.call(this.Pd={I:this
},0);this.__proto__=C.ASr;this.G(AVS);this.V.G(AVT);this.V.A2(0x12);this.Pd.G(AVU
);this.Pd.A2(0x12);this.Pd.L(A.jb.Bh);this.J(this.Pd,0);this.Pd.S(A.aaL(A.fl.Ah)
);this.Pd.A5(A.aaL(A.fl.Ak));this.Pd.CC(null);},_Done:function(){this.__proto__=
C.I1;this.Pd._Done();C.I1._Done.call(this);},_ReInit:function(){C.I1._ReInit.call(
this);this.Pd._ReInit();this.Pd.S(A.aaL(A.fl.Ah));this.Pd.A5(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.I1._Mark.call(this,D);if((B=this.Ai9)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Pd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValueExtra"
};C.AKk={Z:null,JD:null,R4:null,Au:null,ApD:2500,ALx:24,Dr:function(H){var B;var
E5=0;var W=this.AY;switch(this.Cl.CH){case 6:E5=2;break;case 7:E5=7;break;case 4:
E5=4;break;case 5:E5=5;break;default:;}W=this.RT(W,E5,0x414);if(!!W)this.Ba(W);if(
!!W&&((W.T&0x400)===0x400))this.Z.Hx(W,true,null,null);},Alg:function(H){A._GetAutoObject(
C.AZ).Fk();},Ao0:function(H){},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1)
)[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},BiR:function(
E){if(this.ApD===E)return;this.ApD=E;},Bhx:function(){return this.ApD;},BiS:function(
E){if(this.ALx===E)return;this.ALx=E;},Bhy:function(){return this.ALx;},Bhm:function(
H){var F,CK;this.JD.BM.L(this.JD.V.AP);if(!!this.JD.R)this.JD.BM.Q((((String.fromCharCode(((
F=this.JD.R,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+Akv)+String.fromCharCode(((
CK=this.JD.R,CK[1].call(CK[0]))+10000).toFixed().charCodeAt(2)||0))+CJ)+this.JD.
AFq);},G3:function(H){A.pe([this,this.E7],this);},_Init:function(aArg){C.AC._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.I1._Init.call(this.JD={
I:this},0);C.I1._Init.call(this.R4={I:this},0);C.Au._Init.call(this.Au={I:this},
0);this.__proto__=C.AKk;this.N.Y(true);this.Dp(C.Ix);this.Z.G(E2);this.Z.J$(1);this.
JD.G(Ahe);this.JD.Aj(true);this.JD.U(A.aaR(A.acf.ApD));this.JD.Bf(false);this.JD.
GC(0);this.JD.Fd(5000);this.JD.Kd(A.aaR(A.acf.Afk));this.JD.KE(A.aaR(A.acf.Afk));
this.JD.AQ4(100);this.R4.G(WF);this.R4.Aj(true);this.R4.U(A.aaR(A.acf.A8h));this.
R4.Bf(true);this.R4.Bx(24);this.R4.GC(10);this.R4.Fd(33);this.R4.Kd(AVV);this.Au.
G(Aw1);this.J(this.Z,0);this.J(this.JD,0);this.J(this.R4,0);this.J(this.Au,0);this.
N.CS(A.aaL(A.ach.Vt));this.Z.Eh=[this,this.G3];this.JD.Av([this,this.Bhx,this.BiR
]);this.JD.A7Q([this,this.Bhm]);this.R4.Av([this,this.Bhy,this.BiS]);},_Done:function(
){this.__proto__=C.AC;this.Z._Done();this.JD._Done();this.R4._Done();this.Au._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.Z._ReInit(
);this.JD._ReInit();this.R4._ReInit();this.Au._ReInit();this.JD.U(A.aaR(A.acf.ApD
));this.JD.Kd(A.aaR(A.acf.Afk));this.JD.KE(A.aaR(A.acf.Afk));this.R4.U(A.aaR(A.acf.
A8h));},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Z)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.JD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R4).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalActionNewbornCareScreen"};C.Aqs={EaseOfDelivery:null,BirthType:
null,B8:null,Dd:null,Dv:null,Cz:null,D7:null,GO:null,K8:null,MP:0,LK:false,Init:
function(aArg){A.zX([this,this.Hu],this.B8.R,0);A.zX([this,this.Hu],this.Dd.R,0);
A.zX([this,this.Ay_],this.C4.R,0);A.zX([this,this.BbP],this.Cz.Df,0);A.zX([this,
this.BbJ],this.Dc.R,0);A.zX([this,this.AsY],this.B8.R,0);A.zX([this,this.AsY],this.
Dd.R,0);A.pe([this,this.Ay_],this);A.pe([this,this.Hu],this);A.pe([this,this.BbP
],this);A.pe([this,this.BbJ],this);A.pe([this,this.AsY],this);},Ed:function(H){A.
_GetAutoObject(A.Device.Helper).X.G$();A._GetAutoObject(C.AZ).Fk();},Afr:function(
H){var F;A._GetAutoObject(A.Device.Helper).X.DS((F=this.B4.R,F[1].call(F[0])));if(
!!A._GetAutoObject(A.Device.Helper).AgW){var Ak3=A._GetAutoObject(A.Device.Helper
).AgW.AMX();A._GetAutoObject(A.Device.Helper).X.Abr(Ak3);A._GetAutoObject(A.Device.
Helper).X.AmX(Ak3);}var AkJ=A._GetAutoObject(A.Device.Helper).AY9(A._GetAutoObject(
A.Device.Helper).X,(F=this.Dv.HR.Hf,F[1].call(F[0])),A._GetAutoObject(A.Device.Device
).Aq);if(!AkJ){this.Aii();A.pe([this,this.Bs1],this);}else A._GetAutoObject(A.Device.
Helper).AIz(A._GetAutoObject(A.Device.Helper).X,AkJ,(F=this.Dv.HR.Hf,F[1].call(F[
0])),0,[this,this.AoT]);},Atc:function(){this.N.BU(A.jV);this.N.C7(A.aaL(A.ach.ACc
));this.N.Ci=[this,this.Axw];},Aii:function(){var B;var F;A._GetAutoObject(A.Device.
Helper).X.Co(A._GetAutoObject(A.Device.Device).Aq);var LW=A._GetAutoObject(A.Device.
Device).Aq.K3(0,A._GetAutoObject(A.Device.Helper).X.Id);A._GetAutoObject(A.Device.
Device).Sm(LW);var BaO=false;if(A._GetAutoObject(A.Device.Helper).Amn()){if(A._GetAutoObject(
A.Device.Device).Bq.K7()){BaO=true;A._GetAutoObject(A.Device.Device).A6(50,true,
A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),0,null);}else{var BT=A._NewObject(
A.Device.Rating,0);BT.F$();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).X.
Id);BT.OnSetBodyWeight(this.Kw);BT.OnSetTimestamp(A._GetAutoObject(A.Device.Helper
).X.DateOfBirth);BT.Co(A._GetAutoObject(A.Device.Device).Bq);}}if(A._GetAutoObject(
A.Device.Helper).A4Z()&&(BaO===false)){if(A._GetAutoObject(A.Device.Device).Bq.K7(
))A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).
Bq.Hz().toFixed(),0,null);else{var BT=A._NewObject(A.Device.Rating,0);BT.F$();BT.
OnSetAnimalId(A._GetAutoObject(A.Device.Helper).X.Id);BT.OnSetBodyWeight(this.MP
);BT.Co(A._GetAutoObject(A.Device.Device).Bq);}}var IN=null;switch((F=this.Dv.HR.
Hf,F[1].call(F[0]))){case 3:IN=[B=A._GetAutoObject(A.Device.Device),B.Au6,B.Axo];
break;case 2:IN=[B=A._GetAutoObject(A.Device.Device),B.Au7,B.Axp];break;case 4:case
5:IN=[B=A._GetAutoObject(A.Device.Device),B.AmL,B.AnP];break;default:;}if(!!IN)switch((
F=this.Dv.J4.Vf,F[1].call(F[0]))){case 1:IN[2].call(IN[0],A._GetAutoObject(A.Device.
Helper).X.VisualId-1);break;case 0:IN[2].call(IN[0],A._GetAutoObject(A.Device.Helper
).X.VisualId+1);break;default:;}if(!!(F=this.Dd.R,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).A88(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
Gender.Animal.Gender,(F=this.Dd.R,F[1].call(F[0])),this.Dd.Aja(),this.Dd.Ajc());
},Aph:function(H){A._GetAutoObject(C.AZ).Fk();},Bs1:function(s){this.Aph(s);},Ay5:
function(H){A._GetAutoObject(C.AZ).BZ(55);},AgH:function(E){if(this.MP===E)return;
this.MP=E;A.abo([this,this.AmJ,this.AgH],0);},Hu:function(H){if(A._GetAutoObject(
A.Device.Helper).Amn())this.Dc.Y(true);else this.Dc.Y(false);if(A._GetAutoObject(
A.Device.Helper).A4Z())this.D7.Y(true);else this.D7.Y(false);if(this.LK){this.Dd.
Y(false);this.B8.U(A.aaR(A.acf.AA8));this.B8.ADj(A.aaL(A.ach.Aep));}else{this.Dd.
Y(true);this.B8.U(A.aaR(A.acf.Akn));this.B8.ADj(null);}},Ay_:function(H){A._GetAutoObject(
A.Device.Helper).AS9(A._GetAutoObject(A.Device.Helper).X,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.LK);},BbP:function(H){A.pe([this,this.Bdz],this
);},BbJ:function(H){A.pe([this,this.Bdz],this);},Bdz:function(H){var F,CK,SK;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.D7.AgL(A._GetAutoObject(
A.Device.Helper).Ag$(A._GetAutoObject(A.Device.Helper).AaH((F=this.B4.R,F[1].call(
F[0]))),(CK=this.Cz.Df,CK[1].call(CK[0])),2,(SK=this.B4.R,SK[1].call(SK[0]))));break;
case 2:this.D7.AgL(A._GetAutoObject(A.Device.Helper).Ag$(this.Kw,(F=this.Cz.Df,F[
1].call(F[0])),2,(CK=this.B4.R,CK[1].call(CK[0]))));break;default:;}},AoT:function(
H){var F;var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!At)return;switch(
At.Id){case 22:case 21:switch((F=this.Dv.HR.Hf,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.LA(this.Dv);break;case 0:this.LA(this.Dd);break;case 1:this.LA(this.
B8);break;default:throw new Error(Aw_+(F=this.Dv.HR.Hf,F[1].call(F[0])).toFixed(
));}break;case 25:this.LA(this.B8);break;case 43:this.LA(this.Dd);break;case 42:{
this.LA(this.B8);if(At.PopupState===7)A.pe([this,this.WG],this);}break;case 41:break;
default:A.ab5("%s%e",Ar_,At.Id);}},AoU:function(H){var F;C.HQ.AoU.call(this,H);(
F=this.Dc.R,F[2].call(F[0],this.Dc.Anf));this.D7.AgL(A._GetAutoObject(A.Device.Helper
).X.Ag$(1));},Aed:function(E){if(this.LK===E)return;this.LK=E;A.abo([this,this.Au8
,this.Aed],0);},AsY:function(H){var F,CK,SK;this.Aed(((F=this.B8.R,F[1].call(F[0
]))===(CK=this.Dd.R,CK[1].call(CK[0])))&&!!(SK=this.B8.R,SK[1].call(SK[0])));A.pe([
this,this.Hu],this);},AmJ:function(){return this.MP;},Au8:function(){return this.
LK;},_Init:function(aArg){C.HQ._Init.call(this,aArg);C.EaseOfDelivery._Init.call(
this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={I:this},0
);C.AuT._Init.call(this.B8={I:this},0);C.QQ._Init.call(this.Dd={I:this},0);C.AEX.
_Init.call(this.Dv={I:this},0);C.Sn._Init.call(this.Cz={I:this},0);C.Akd._Init.call(
this.D7={I:this},0);C.B_._Init.call(this.GO={I:this},0);C.B_._Init.call(this.K8={
I:this},0);this.__proto__=C.Aqs;var B;this.Dp(C.ABG);this.CB.G(Aca);this.B8.G(AnC
);this.B8.Aj(true);this.B8.U(A.aaR(A.acf.Akn));this.B8.AqN(((A.aaR(A.acf.Ok)+A.aaR(
A.acf.Colon))+CJ)+A.aaR(A.acf.Arw));this.B8.AqO(A.aaR(A.acf.AjI));this.Dd.G(AnC);
this.Dd.Aj(true);this.Dd.U(A.aaR(A.acf.YH));this.Dd.Aq0(false);this.Dv.G(AVW);this.
Dv.Aj(true);this.Dv.U(A.aaR(A.acf.Gy));this.Dv.Bx(0);this.Cz.G(Aca);this.Cz.Aj(true
);this.Cz.U(A.aaR(A.acf.Adx));this.Cz.AD0(true);this.D7.G(Aca);this.D7.Aj(true);
this.D7.U(A.aaR(A.acf.MP));this.D7.GC(1000);this.D7.Fd(999000);this.GO.G(Aca);this.
GO.Aj(true);this.GO.U(A.aaR(A.acf.Aqq));this.K8.G(Aca);this.K8.Aj(true);this.K8.
U(A.aaR(A.acf.AfW));this.J(this.B8,-2);this.J(this.Dd,-2);this.J(this.Dv,-2);this.
J(this.Cz,-2);this.J(this.D7,-1);this.J(this.GO,0);this.J(this.K8,0);this.EaseOfDelivery.
LO(A._GetAutoObject(A.Device.Helper).X);this.BirthType.LO(A._GetAutoObject(A.Device.
Helper).X);this.B8.AQ=[this,this.WG];this.B8.LN([this,this.WG]);this.B8.LP(A.aaL(
A.ach.Aep));this.B8.Av([B=A._GetAutoObject(A.Device.Helper).X,B.AjK,B.M4]);this.
B8.Py([B=A._GetAutoObject(A.Device.Device),B.Abj,B.Acb]);this.B8.QH([B=A._GetAutoObject(
A.Device.Device),B.Abk,B.Acc]);this.B8.TO([B=A._GetAutoObject(A.Device.Device),B.
AmI,B.AnO]);this.B8.Aed([this,this.Au8,this.Aed]);this.Dd.GB([this,this.Ea,this.
G_]);this.Dd.LN([this,this.WG]);this.Dd.LP(A.aaL(A.ach.Aep));this.Dd.TQ([B=this.
Gender.Animal,B.V0,B.JG]);this.Dd.Py([B=A._GetAutoObject(A.Device.Device),B.Abj,
B.Acb]);this.Dd.QH([B=A._GetAutoObject(A.Device.Device),B.Abk,B.Acc]);this.Dd.TO([
B=A._GetAutoObject(A.Device.Device),B.AmI,B.AnO]);this.Dd.Av([B=A._GetAutoObject(
A.Device.Helper).X,B.AmM,B.M3]);this.Dd.AmQ([B=this.AnimalType.Animal,B.Px,B.DS]
);this.Dv.GB([this,this.Ea,this.G_]);this.Dv.LN([B=this.Dv,B.Ge]);this.Dv.LP(A.aaL(
A.ach.Edit));this.Dv.Av([B=A._GetAutoObject(A.Device.Helper).X,B.AqB,B.TU]);this.
Dv.A61(A._GetAutoObject(A.Device.Helper).X);this.Cz.GB([this,this.Ea,this.G_]);this.
Cz.LN([B=this.Cz,B.Ge]);this.Cz.LP(A.aaL(A.ach.Edit));this.Cz.Abu([B=A._GetAutoObject(
A.Device.Helper).X,B.Au3,B.Sd]);this.D7.Av([this,this.AmJ,this.AgH]);this.GO.Av([
B=this.BirthType,B.Ce,B.Cg]);this.GO.CN(this.BirthType);this.K8.Av([B=this.EaseOfDelivery
,B.Ce,B.Cg]);this.K8.CN(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HQ;this.EaseOfDelivery._Done();this.BirthType._Done();this.B8._Done(
);this.Dd._Done();this.Dv._Done();this.Cz._Done();this.D7._Done();this.GO._Done(
);this.K8._Done();C.HQ._Done.call(this);},_ReInit:function(){C.HQ._ReInit.call(this
);this.EaseOfDelivery._ReInit();this.BirthType._ReInit();this.B8._ReInit();this.
Dd._ReInit();this.Dv._ReInit();this.Cz._ReInit();this.D7._ReInit();this.GO._ReInit(
);this.K8._ReInit();this.B8.U(A.aaR(A.acf.Akn));this.B8.AqN(((A.aaR(A.acf.Ok)+A.
aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.Arw));this.B8.AqO(A.aaR(A.acf.AjI));this.Dd.U(
A.aaR(A.acf.YH));this.Dv.U(A.aaR(A.acf.Gy));this.Cz.U(A.aaR(A.acf.Adx));this.D7.
U(A.aaR(A.acf.MP));this.GO.U(A.aaR(A.acf.Aqq));this.K8.U(A.aaR(A.acf.AfW));},_Mark:
function(D){var B;C.HQ._Mark.call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
B8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dd)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GO)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.K8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.AFy={HX:null,Ag0:null,Af6:null,Ag1:null,Af7:null,AnimalType:null,Background:
null,NG:null,QY:null,V:null,Tq:null,X3:null,AaW:null,Pw:null,DD:A.jV,AEZ:true,CT:
function(){this.An();},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Ann();this.
Aww();},Ann:function(){var F,CK;var Lq=0;var Alx=0;var AkW=0;var H4=0;if((((!!this.
Ag0&&!!this.Ag1)&&!!this.Af6)&&!!this.Af7)&&!!this.AnimalType){Alx=(F=this.Ag0,F[
1].call(F[0]));AkW=(F=this.Af6,F[1].call(F[0]));Lq=A._GetAutoObject(A.Device.Helper
).MB((F=this.Ag1,F[1].call(F[0])),(CK=this.Af7,CK[1].call(CK[0])));H4=(F=this.AnimalType
,F[1].call(F[0]));}var KV=A.jb.Text;var A$L=A.jb.C0;if(!!Lq){var AJG=A._GetAutoObject(
A.acj.DI).AkQ(Lq,Alx,AkW);A$L=A._GetAutoObject(A.acj.DI).Ays(AJG,H4);KV=A._GetAutoObject(
A.acj.DI).Ayu(AJG,H4);}this.Background.L(A$L);this.Tq.L(KV);this.QY.L(KV);this.NG.
L(KV);this.AaW.L(KV);if(KV===A.jb.Bh)this.X3.L(KV);else this.X3.L(A.jb.CM);this.
V.L(KV);this.Pw.L(KV);},Aww:function(){var F,CK;var Lq=0;var Alx=0;var AkW=0;if(((
!!this.Ag0&&!!this.Ag1)&&!!this.Af6)&&!!this.Af7){Alx=(F=this.Ag0,F[1].call(F[0]
));AkW=(F=this.Af6,F[1].call(F[0]));Lq=A._GetAutoObject(A.Device.Helper).MB((F=this.
Ag1,F[1].call(F[0])),(CK=this.Af7,CK[1].call(CK[0])));}if(!!Lq){var AJG=A._GetAutoObject(
A.acj.DI).AkQ(Lq,Alx,AkW);this.QY.Q(A._GetAutoObject(A.Device.Converter).NU(AJG,
2,true));this.NG.Y(true);this.QY.Y(true);this.Pw.Y(false);}else{this.NG.Y(false);
this.QY.Y(false);this.Pw.Y(true);}this.Tq.Q(this.Bvx(AkW-Alx,Lq));this.AaW.Y(this.
AEZ);this.X3.Y(this.AEZ);this.NG.Q(A._GetAutoObject(A.acj.DI).ZQ());},Bvx:function(
AYN,Aho){var B;if(Aho<0){A.ab5("%s",AVX);return A.jV;}var Ij=(AVY+A._GetAutoObject(
A.acj.DI).AcI())+CJ;var FH=A._GetAutoObject(A.Device.Converter).Anu(AYN);if(!AYN
)FH=A.abU(FH,AVZ,0);else if(AYN>0)FH=A.abU(FH,AGu,0);Ij=this.BcS(Ij,AV0,FH);if(Aho===
1)Ij=Ij+A.aaR(A.acf.Bf$);else{Ij=Ij+A.aaR(A.acf.Bga);Ij=this.BcS(Ij,AV1,Aho.toFixed(
));}return Ij;},BcS:function(aString,A$j,BtZ){if(aString===A.jV){A.ab5("%s",AV2);
return A.jV;}var A0w=aString.indexOf(A$j,0);if(A0w>=0){aString=A.ab1(aString,A0w
,A$j.length);aString=A.abU(aString,BtZ,A0w);}return aString;},ARl:function(E){if(
A.aaZ(this.Ag0,E))return;if(!!this.Ag0)A.z$([this,this.Db],this.Ag0,0);this.Ag0=
E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],this);},Bi5:function(
E){if(A.aaZ(this.Af6,E))return;if(!!this.Af6)A.z$([this,this.Db],this.Af6,0);this.
Af6=E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],this);},ARm:function(
E){if(A.aaZ(this.Ag1,E))return;if(!!this.Ag1)A.z$([this,this.Db],this.Ag1,0);this.
Ag1=E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],this);},Bi6:function(
E){if(A.aaZ(this.Af7,E))return;if(!!this.Af7)A.z$([this,this.Db],this.Af7,0);this.
Af7=E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],this);},Db:function(
H){this.An();},U:function(E){if(this.DD===E)return;this.DD=E;this.V.Q(E);},A7P:function(
E){if(this.AEZ===E)return;this.AEZ=E;this.An();},DS:function(E){if(A.aaZ(this.AnimalType
,E))return;if(!!this.AnimalType)A.z$([this,this.Db],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this
},0);C.CP._Init.call(this.NG={I:this},0);A.acg.Text._Init.call(this.QY={I:this},
0);C.CP._Init.call(this.V={I:this},0);C.CP._Init.call(this.Tq={I:this},0);A.acg.
Am._Init.call(this.X3={I:this},0);A.acg.Am._Init.call(this.AaW={I:this},0);C.CP.
_Init.call(this.Pw={I:this},0);this.__proto__=C.AFy;this.G(AeW);this.Background.
AV(0x3F);this.Background.G(AeW);this.NG.G(AV3);this.NG.Q(A._GetAutoObject(A.acj.
DI).ZQ());this.NG.A2(0x9);this.NG.L(A.jb.Text);this.QY.G(AV4);this.QY.A2(0x14);this.
QY.Q(A.aaR(A.act.AjG));this.QY.L(A.jb.Text);this.V.AV(0x1D);this.V.G(AV5);this.V.
Q(A.aaR(A.acf.Att));this.V.A2(0x12);this.V.L(A.jb.Text);this.Tq.G(WE);this.X3.AV(
0x14);this.X3.G(AGv);this.X3.Cr(1);this.AaW.AV(0x14);this.AaW.G(AGv);this.AaW.Cr(
0);this.Pw.G(AV6);this.Pw.Q(A.aaR(A.acf.A2c));this.J(this.Background,0);this.J(this.
NG,0);this.J(this.QY,0);this.J(this.V,0);this.J(this.Tq,0);this.J(this.X3,0);this.
J(this.AaW,0);this.J(this.Pw,0);this.NG.S(A.aaL(A.fl.Ey));this.NG.A5(A.aaL(A.fl.
Ah));this.NG.CC(A.aaL(A.fl.H$));this.QY.S(A.aaL(A.fl.AdJ));this.V.S(A.aaL(A.fl.Ah
));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(A.aaL(A.fl.By));this.Tq.S(A.aaL(A.fl.Ah));
this.Tq.A5(A.aaL(A.fl.Ak));this.Tq.CC(A.aaL(A.fl.By));this.X3.Ax(A.aaL(A.ach.AAh
));this.AaW.Ax(A.aaL(A.ach.AAh));this.HX=A._NewObject(A.Device.Rating,0);this.Pw.
S(A.aaL(A.fl.Ah));this.Pw.A5(A.aaL(A.fl.Ak));this.Pw.CC(A.aaL(A.fl.By));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.NG._Done();this.
QY._Done();this.V._Done();this.Tq._Done();this.X3._Done();this.AaW._Done();this.
Pw._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Background._ReInit();this.NG._ReInit();this.QY._ReInit();this.V._ReInit(
);this.Tq._ReInit();this.X3._ReInit();this.AaW._ReInit();this.Pw._ReInit();this.
QY.Q(A.aaR(A.act.AjG));this.V.Q(A.aaR(A.acf.Att));this.Pw.Q(A.aaR(A.acf.A2c));this.
NG.S(A.aaL(A.fl.Ey));this.NG.A5(A.aaL(A.fl.Ah));this.NG.CC(A.aaL(A.fl.H$));this.
QY.S(A.aaL(A.fl.AdJ));this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.
CC(A.aaL(A.fl.By));this.Tq.S(A.aaL(A.fl.Ah));this.Tq.A5(A.aaL(A.fl.Ak));this.Tq.
CC(A.aaL(A.fl.By));this.Pw.S(A.aaL(A.fl.Ah));this.Pw.A5(A.aaL(A.fl.Ak));this.Pw.
CC(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,
D);if((B=this.HX)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag0)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Af6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ag1)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Af7)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.X3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Pw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightGainItem"};C.ATp={Animal:null,Rating:null,Cl:null,AD:null,AR:
0,G9:function(H){var B;if(!this.Animal||!this.Rating)return;var FS=this.AD.GN;var
Cw=(C.AFy.isPrototypeOf(B=this.AD.Ca)?B:null);if(!Cw)return;Cw.DS([B=this.Animal
,B.Px,B.DS]);Cw.Bi5([B=A._GetAutoObject(A.Device.Device),B.AC5,B.AHa]);Cw.Bi6([B=
this.Rating,B.A6F,B.OnSetTimestamp]);switch(FS%this.AR){case 1:{Cw.ARl([B=this.Animal
,B.A6l,B.ADD]);Cw.ARm([B=this.Animal,B.A6G,B.AD9]);Cw.U(A.aaR(A.acf.Att));}break;
default:if(this.Animal.Aqf()){Cw.ARl([B=this.Animal,B.AQq,B.Avy]);Cw.ARm([B=this.
Animal,B.AQI,B.AvS]);Cw.U(A.aaR(A.acf.AJ3));}else{Cw.ARl([B=this.Animal,B.AQq,B.
Avy]);Cw.ARm([B=this.Animal,B.AQI,B.AvS]);Cw.U(A.aaR(A.acf.BdR));}}if(this.AR>1)
Cw.A7P(true);else Cw.A7P(false);Cw.G(A.abK(Cw.M,[(B=this.AD.M)[2]-B[0],this.AD.GP
]));},Dr:function(H){if(this.AR>0)switch(this.Cl.CH){case 6:this.Cu(this);break;
case 7:this.Ci(this);break;default:this.Cl.O9=true;}},LO:function(E){if(this.Animal===
E)return;this.Animal=E;if(!this.Animal)this.Jm(0);else if(this.Animal.TimestampLastWeighing===
this.Animal.TimestampFirstWeighing)this.Jm(1);else{this.Jm(2);this.AD.GQ(1);this.
AD.Hx(this.AD.Gb,true,null,null);}if(this.AR>0)this.AD.AaY(0,this.AR-1);},AjZ:function(
E){if(this.Rating===E)return;this.Rating=E;if(this.AR>0)this.AD.AaY(0,this.AR-1);
},Cu:function(H){if(this.AD.Gb>0)this.AD.GQ(this.AD.Gb-1);else this.AD.GQ(this.AR-
1);this.AD.Hx(this.AD.Gb,true,null,null);},Ci:function(H){if(this.AD.Gb<(this.AR-
1))this.AD.GQ(this.AD.Gb+1);else this.AD.GQ(0);this.AD.Hx(this.AD.Gb,true,null,null
);},Jm:function(E){if(this.AR===E)return;this.AR=E;this.AD.Jm(this.AR);A.abo([this
,this.Aqy,this.Jm],0);},Aqy:function(){return this.AR;},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BO._Init.call(this.Cl={I:this},0);A.Core.CF._Init.
call(this.AD={I:this},0);this.__proto__=C.ATp;this.G(AeW);this.Cl.Filter=147;this.
AD.AV(0x3F);this.AD.G(AeW);this.AD.NI(C.AFy);this.AD.Aeg(160);this.AD.GQ(0);this.
AD.Jm(2);this.J(this.AD,0);this.Cl.BP=[this,this.Dr];this.Cl.DR=[this,this.Dr];this.
AD.G9=[this,this.G9];},_Done:function(){this.__proto__=A.Core.O;this.Cl._Done();
this.AD._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Cl._ReInit();this.AD._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightGainScrollList"
};C.D8={Init:function(aArg){},Bg:function(aSize){C.Cd.Bg.call(this,aSize);this.Background.
G(A.abK(this.Background.M,aSize));this.V.G([0,aSize[1]-80,aSize[0],aSize[1]-40]);
},Ai:function(Ae){var B;C.Cd.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);var Fg=((
Ae&0x20)===0x20);var Gm=this.Bk.Bw;var FE=A.jb.CM;var GG=A.jb.Text;if(this.G8){FE=
A.jb.C0;GG=A.jb.Text;}if(!G1){this.Background.L(A.jb.C0);this.V.L(A.jb.CM);}else
if(Gm){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else if(Fg){this.Background.
L(A.jb.AY);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}this.Lt=G1;
this.Ks=Fg;this.P8=Gm;},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=
C.D8;this.G(JN);this.V.G(BC);this.YT(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.Ad6={Kx:null,Gt:A.jV,Bg:function(aSize){C.D8.Bg.call(this,aSize);this.Kx.G([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ai:function(Ae){C.D8.Ai.call(this,Ae);this.Kx.
L(this.V.AP);},Init:function(aArg){},Abq:function(E){if(this.Gt===E)return;this.
Gt=E;this.Kx.Q(E);},_Init:function(aArg){C.D8._Init.call(this,aArg);C.CP._Init.call(
this.Kx={I:this},0);this.__proto__=C.Ad6;this.G(JN);this.Background.G(JN);this.V.
G(AeU);this.V.Q(Lj);this.Kx.G(KL);this.Kx.Q(AV7);this.J(this.Kx,0);this.V.S(A.aaL(
A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.V.CC(null);this.Kx.S(A.aaL(A.fl.Ah));this.
Kx.A5(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.D8;this.
Kx._Done();C.D8._Done.call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.
Kx._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.Kx.S(A.aaL(
A.fl.Ah));this.Kx.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.D8._Mark.call(this
,D);if((B=this.Kx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"
};C.AuT={AAJ:null,R:null,FM:null,Fv:null,H9:null,LK:null,Am:null,Ez:null,AL_:A.jV
,AL$:A.jV,Bg:function(aSize){C.Ad6.Bg.call(this,aSize);if(!this.AAJ)this.Kx.G([].
concat(0,this.Kx.M.slice(1,4)));else this.Kx.G([].concat(this.Am.M[2],this.Kx.M.
slice(1,4)));},Ai:function(Ae){var F,CK,SK;C.Ad6.Ai.call(this,Ae);var A$N=false;
if(!!this.R){if(!(F=this.R,F[1].call(F[0]))){if(this.Aou)this.Abq(this.AL_);else
this.Abq(this.AL$);}else{this.Abq(A._GetAutoObject(A.Device.Converter).Ub((F=this.
R,F[1].call(F[0]))));if((((!!this.H9&&!!this.FM)&&!!this.Fv)&&!!this.LK)&&(((F=this.
H9,F[1].call(F[0]))===1)||(!(CK=this.H9,CK[1].call(CK[0]))&&(SK=this.LK,SK[1].call(
SK[0])))))A$N=true;}}this.Ez.Y(A$N);this.Am.L(this.V.AP);A.pe([this,this.Afn],this
);},Db:function(H){this.An();},Av:function(E){if(A.aaZ(this.R,E))return;if(!!this.
R)A.z$([this,this.Db],this.R,0);this.R=E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)
A.pe([this,this.Db],this);},ADj:function(E){if(this.AAJ===E)return;this.AAJ=E;this.
Am.Ax(E);this.Bgh();},Py:function(E){if(A.aaZ(this.FM,E))return;if(!!this.FM)A.z$([
this,this.ZZ],this.FM,0);this.FM=E;if(!!E)A.zX([this,this.ZZ],E,0);if(!!E)A.pe([
this,this.ZZ],this);},QH:function(E){if(A.aaZ(this.Fv,E))return;if(!!this.Fv)A.z$([
this,this.Z0],this.Fv,0);this.Fv=E;if(!!E)A.zX([this,this.Z0],E,0);if(!!E)A.pe([
this,this.Z0],this);},Z0:function(H){this.An();},ZZ:function(H){this.An();},TO:function(
E){if(A.aaZ(this.H9,E))return;if(!!this.H9)A.z$([this,this.Alf],this.H9,0);this.
H9=E;if(!!E)A.zX([this,this.Alf],E,0);if(!!E)A.pe([this,this.Alf],this);},Alf:function(
H){this.An();},Afn:function(H){var F,CK;if((!this.H9||!this.FM)||!this.Fv)return;
var A0g=this.Kx.Aes([(this.Kx.String.length-(F=this.Fv,F[1].call(F[0])))-(CK=this.
FM,CK[1].call(CK[0])),0]);var A1t=this.Kx.Aes([this.Kx.String.length-(F=this.Fv,
F[1].call(F[0])),0]);var AzP=this.Kx.C_(0x0);this.Ez.G([A0g[0]-1,AzP[1],A1t[0]+1
,AzP[3]]);},AqN:function(E){if(this.AL_===E)return;this.AL_=E;this.An();},AqO:function(
E){if(this.AL$===E)return;this.AL$=E;this.An();},Aed:function(E){if(A.aaZ(this.LK
,E))return;if(!!this.LK)A.z$([this,this.A0V],this.LK,0);this.LK=E;if(!!E)A.zX([this
,this.A0V],E,0);if(!!E)A.pe([this,this.A0V],this);},A0V:function(H){this.An();},
_Init:function(aArg){C.Ad6._Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:
this},0);A.acg.Cy._Init.call(this.Ez={I:this},0);this.__proto__=C.AuT;this.Am.G(
Aha);this.Ez.G(AV8);this.Ez.NJ(2);this.Ez.L(A.jb.EX);this.J(this.Am,0);this.J(this.
Ez,0);this.Kx.QI([this,this.Afn]);},_Done:function(){this.__proto__=C.Ad6;this.Am.
_Done();this.Ez._Done();C.Ad6._Done.call(this);},_ReInit:function(){C.Ad6._ReInit.
call(this);this.Am._ReInit();this.Ez._ReInit();},_Mark:function(D){var B;C.Ad6._Mark.
call(this,D);if((B=this.AAJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FM)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
H9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.LK)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ez
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"
};C.SetTransponderScreen={Jb:0,ZY:4,BaY:true,BaX:false,A$U:true,AZ3:false,Alk:function(
H){C.QP.Alk.call(this,H);if(A._GetAutoObject(A.Device.Helper).BaQ()){this.Jb=A._GetAutoObject(
A.Device.Helper).T2.Id;var AhQ=A._GetAutoObject(A.Device.Helper).AO$(this.Jb);if(
AhQ)A._GetAutoObject(A.Device.Device).A6(25,true,A._GetAutoObject(A.Device.Converter
).Ub(this.Jb),0,[this,this.A0Y]);else{this.ZY=A._GetAutoObject(A.Device.Helper).
APa(this.Jb);var Bbh=false;if((this.ZY===3)||(this.ZY===2))Bbh=A._GetAutoObject(
A.Device.Helper).A40(this.Jb,A._GetAutoObject(A.Device.Helper).X);if(Bbh)A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Ub(this.Jb),0,null
);else switch(this.ZY){case 2:{var BJ=A._GetAutoObject(A.Device.Converter).Awu(this.
Jb);A._GetAutoObject(A.Device.Device).A6(46,true,BJ.toFixed(),0,[this,this.A0Y]);
}break;case 3:case 1:case 0:case 4:this.Bc9();break;default:throw new Error(AGw+
this.ZY.toFixed());}}}},Ed:function(H){A._GetAutoObject(C.AZ).Fk();},AHc:function(
s){this.Ed(s);},Bc9:function(){if((this.ZY===3)||(this.ZY===2)){if((this.A$U&&(A.
_GetAutoObject(A.Device.Helper).X.NaisId>0))&&(A._GetAutoObject(A.Device.Helper).
X.NaisId!==this.Jb)){A._GetAutoObject(A.Device.Device).A6(91,true,A.jV,0,[this,this.
A0Y]);return;}else this.Bc7();}A._GetAutoObject(A.Device.Helper).X.M4(this.Jb);this.
AZ3=true;this.Bc_();this.Ed(this);},A0Y:function(H){var At=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!At)switch(At.Id){case 46:if(At.PopupState===4)this.
Bc9();break;case 25:switch(At.PopupState){case 4:A._GetAutoObject(A.Device.Device
).AeC();break;case 5:this.Ed(this);break;default:;}break;case 91:switch(At.PopupState
){case 7:{A._GetAutoObject(A.Device.Helper).X.M4(this.Jb);this.AZ3=true;this.Bc7(
);this.Bc_();this.Ed(this);}break;case 8:this.Ed(this);break;default:;}break;default:
A.ab5("%s%e",AGx,At.Id);}},Bc7:function(){A._GetAutoObject(A.Device.Helper).X.M3(
this.Jb);if(this.BaX&&(A._GetAutoObject(A.Device.Converter).AeJ(this.Jb)===10)){
var A$y=Math.trunc((this.Jb%1000000000000)/10000000000);if(!A$y&&(A._GetAutoObject(
A.Device.Helper).X.AnimalType===2))A._GetAutoObject(A.Device.Helper).X.DS(0);else
if((A$y===1)&&(A._GetAutoObject(A.Device.Helper).X.AnimalType!==2))A._GetAutoObject(
A.Device.Helper).X.DS(2);}},Bc_:function(){if(this.BaY){A._GetAutoObject(A.Device.
Helper).X.TU(A._GetAutoObject(A.Device.Helper).Bd1(A._GetAutoObject(A.Device.Device
).Ag9,A._GetAutoObject(A.Device.Helper).X));if(A._GetAutoObject(A.Device.Device).
Ag9===1)A._GetAutoObject(A.Device.Helper).A89();}},_Init:function(aArg){C.QP._Init.
call(this,aArg);this.__proto__=C.SetTransponderScreen;this.N.Y(true);this.Dp(C.Ix
);this.Number.Q(A.aaR(A.acf.Oz));this.I5.G(AV9);this.IG.G(Ws);this.Aj1(1);this.N.
Cu=[this,this.AHc];this.N.CS(A.aaL(A.ach.ET));},_ReInit:function(){C.QP._ReInit.
call(this);this.Number.Q(A.aaR(A.acf.Oz));},_className:"Application::SetTransponderScreen"
};C.ABQ={FZ:null,La:null,J_:null,CT:function(){this.An();},Init:function(aArg){this.
An();},Ai:function(Ae){C.Er.Ai.call(this,Ae);this.La.Q(A._GetAutoObject(A.acj.DI
).AcI());this.J_.Q(A._GetAutoObject(A.acj.DI).ZQ());},_Init:function(aArg){C.Er.
_Init.call(this,aArg);A.acg.Text._Init.call(this.FZ={I:this},0);A.acg.Text._Init.
call(this.La={I:this},0);A.acg.Text._Init.call(this.J_={I:this},0);this.__proto__=
C.ABQ;this.Background.L(A.jb.Text);this.FZ.G(AV_);this.FZ.A2(0x11);this.FZ.Q(A.aaR(
A.acf.Date));this.FZ.L(A.jb.Bh);this.La.G(AV$);this.La.A2(0x11);this.La.L(A.jb.Bh
);this.J_.G(AWa);this.J_.L(A.jb.Bh);this.J(this.FZ,0);this.J(this.La,0);this.J(this.
J_,0);this.FZ.S(A.aaL(A.fl.Ah));this.La.S(A.aaL(A.fl.Ah));this.J_.S(A.aaL(A.fl.Ah
));this.Init(aArg);},_Done:function(){this.__proto__=C.Er;this.FZ._Done();this.La.
_Done();this.J_._Done();C.Er._Done.call(this);},_ReInit:function(){C.Er._ReInit.
call(this);this.FZ._ReInit();this.La._ReInit();this.J_._ReInit();this.FZ.Q(A.aaR(
A.acf.Date));this.FZ.S(A.aaL(A.fl.Ah));this.La.S(A.aaL(A.fl.Ah));this.J_.S(A.aaL(
A.fl.Ah));this.CT();},_Mark:function(D){var B;C.Er._Mark.call(this,D);if((B=this.
FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.La)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.J_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineWeights"
};C.AFC={L_:null,Hc:null,H1:null,AN:null,A8:null,FH:0,H4:0,Ah4:false,Init:function(
aArg){},Bg:function(aSize){C.A$.Bg.call(this,aSize);this.Background.G(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.G(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hc.G([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A8.G([this.Hc.M[2]-1,0,this.Hc.M[2]+1,aSize[
1]]);this.L_.G([this.Background.M[2],0,aSize[0],aSize[1]]);this.H1.G(this.L_.M);
},Ai:function(Ae){C.A$.Ai.call(this,Ae);if(this.Ah4){this.H1.Q(Q3);this.H1.L(A.jb.
Text);this.L_.L(this.Background.AP);}else{this.H1.Q(A._GetAutoObject(A.Device.Converter
).NU(this.FH,2,true));this.H1.L(A._GetAutoObject(A.acj.DI).Ayu(this.FH,this.H4));
this.L_.L(A._GetAutoObject(A.acj.DI).Ays(this.FH,this.H4));}this.Hc.L(this.V.AP);
},B$:function(Ac){if(!this.AW)return;this.Hr=Ac;if(!!this.AW){var AkT=this.AW.Hy(
Ac,6);var Alq=this.AW.CA(Ac,8);if(this.Hr>0){var Bu7=this.AW.Hy(this.Hr-1,6);var
BxA=this.AW.CA(this.Hr-1,8);var Lq=A._GetAutoObject(A.Device.Helper).MB(Bu7,AkT);
if(!!Lq){this.Ah4=false;this.FH=A._GetAutoObject(A.acj.DI).AkQ(Lq,BxA,Alq);}else{
this.Ah4=true;this.FH=0;}}else{this.Ah4=true;this.FH=0;}this.U(A._GetAutoObject(
A.acj.Ky).ABl(AkT));this.Hc.Q(A._GetAutoObject(A.Device.Converter).Anu(Alq));this.
H4=A._GetAutoObject(A.Device.Helper).X.AnimalType;this.An();}},_Init:function(aArg
){C.A$._Init.call(this,aArg);A.acg.AI._Init.call(this.L_={I:this},0);A.acg.Text.
_Init.call(this.Hc={I:this},0);A.acg.Text._Init.call(this.H1={I:this},0);A.acg.AI.
_Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A8={I:this},0);this.__proto__=
C.AFC;this.V.G(OK);this.L_.G(Asb);this.Hc.G(AGy);this.Hc.A2(0x12);this.Hc.Q(SI);
this.Hc.L(A.jb.Text);this.H1.G(AGz);this.H1.Q(SI);this.H1.L(A.jb.Text);this.AN.G(
AnG);this.AN.L(A.jb.Bb);this.A8.G(AnH);this.A8.L(A.jb.Bb);this.J(this.L_,0);this.
J(this.Hc,0);this.J(this.H1,0);this.J(this.AN,0);this.J(this.A8,0);this.Hc.S(A.aaL(
A.fl.Ah));this.H1.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.L_._Done();this.Hc._Done();this.H1._Done();this.AN._Done();this.A8._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.L_._ReInit(
);this.Hc._ReInit();this.H1._ReInit();this.AN._ReInit();this.A8._ReInit();this.Hc.
S(A.aaL(A.fl.Ah));this.H1.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.L_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Be:null,Vr:null,Ag8:null,Sv:null
,KA:A.jV,CT:function(){this.An();},Ai:function(Ae){C.AC.Ai.call(this,Ae);var Lq=
A._GetAutoObject(A.Device.Helper).MB(A._GetAutoObject(A.Device.Helper).X.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).X.TimestampLastWeighing);if(!!Lq){var FH=A._GetAutoObject(
A.acj.DI).AkQ(Lq,A._GetAutoObject(A.Device.Helper).X.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).X.LastBodyWeight);var Ac6=A.aaR(A.acf.Bed);Ac6=A._GetAutoObject(
A.Device.Helper).NO(Ac6,Q0,A._GetAutoObject(A.Device.Converter).NU(FH,2,true));Ac6=
A._GetAutoObject(A.Device.Helper).NO(Ac6,AwR,A._GetAutoObject(A.acj.DI).ZQ());this.
Sv.Q(Ac6);this.Ag8.L(A._GetAutoObject(A.acj.DI).Ays(FH,A._GetAutoObject(A.Device.
Helper).X.AnimalType));this.Sv.L(A._GetAutoObject(A.acj.DI).Ayu(FH,A._GetAutoObject(
A.Device.Helper).X.AnimalType));}else{this.Sv.Q(A.aaR(A.acf.ATn));this.Ag8.L(A.jb.
AOZ);this.Sv.L(A.jb.Text);}},CI:function(H){var Fi=A._NewObject(A.Device.Filter,
0);var HN=A._NewObject(A.Device.Int32FilterCriterion,0);HN.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).X.Id,true);Fi.CZ(HN);var Acs=A._NewObject(A.Device.Int32FilterCriterion
,0);Acs.Initialize(8,2,0,true);Fi.CZ(Acs);A._GetAutoObject(A.Device.Device).Bq.Bm(
Fi);this.Awd(this);},Fb:function(H){A._GetAutoObject(A.Device.Device).Bq.Bm(null
);},Awd:function(H){this.Be=A._NewObject(C.FP,0);this.Be.NI(C.AFC);this.Be.G(Aw5
);this.Be.YP(A._GetAutoObject(A.Device.Device).Bq);this.Be.Do(this.KA);this.J(this.
Be,0);this.Ba(this.Be);},AmH:function(H){A._GetAutoObject(C.AZ).Fk();},Do:function(
E){if(this.KA===E)return;this.KA=E;if(!!this.Be)this.Be.Do(E);},_Init:function(aArg
){C.AC._Init.call(this,aArg);C.ABQ._Init.call(this.Vr={I:this},0);A.acg.AI._Init.
call(this.Ag8={I:this},0);A.acg.Text._Init.call(this.Sv={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.G(B9);this.N.Y(true);this.Dp(C.Ix);this.Vr.G(
Q2);this.KA=A.aaR(A.acf.AjH);this.Ag8.AV(0x1D);this.Ag8.G(KL);this.Sv.AV(0x1D);this.
Sv.G(KL);this.Sv.A2(0x12);this.Sv.Q(SI);this.J(this.Vr,0);this.J(this.Ag8,0);this.
J(this.Sv,0);this.N.Cu=[this,this.AmH];this.N.CS(A.aaL(A.ach.ET));this.Sv.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.AC;this.Vr._Done();this.Ag8._Done(
);this.Sv._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this
);this.Vr._ReInit();this.Ag8._ReInit();this.Sv._ReInit();this.Do(A.aaR(A.acf.AjH
));this.Sv.S(A.aaL(A.fl.Ah));this.CT();},_Mark:function(D){var B;C.AC._Mark.call(
this,D);if((B=this.Be)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vr)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ag8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sv
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.
L6={DK:null,AbT:null,APz:11,Gi:0,A2u:true,AAp:false,Ja:function(H){if(A._GetAutoObject(
A.Device.Device).Aq.Ch()>0)this.Jn(4);else A._GetAutoObject(A.Device.Device).A6(
30,true,A.jV,0,null);},CI:function(H){if(this.DK.AyA())this.DK.Acr();else if((this.
Gi===2)&&A._GetAutoObject(A.Device.Helper).X.Ap0())this.Jn(5);else this.Jn(1);},
Fb:function(H){this.AJi();},Ed:function(H){this.Jn(0);A._GetAutoObject(C.AZ).Fk(
);},Bya:function(){A._GetAutoObject(A.Device.Device).AeC();},AJi:function(){A._GetAutoObject(
A.Device.Device).Ang();},A64:function(E){if(this.AAp===E)return;this.AAp=E;A.abo([
this,this.Bhr,this.A64],0);},Jn:function(E){var B;if(this.Gi===E)return;this.Gi=
E;switch(E){case 1:{A._GetAutoObject(A.Device.Helper).Aj_();A.zX([this,this.AIO]
,[B=A._GetAutoObject(A.Device.Helper),B.Aqz,B.Aj0],0);A.z$([this,this.Ay2],[B=this.
DK,B.AmO,B.Jn],0);this.Bya();}break;case 3:{A.z$([this,this.AIO],[B=A._GetAutoObject(
A.Device.Helper),B.Aqz,B.Aj0],0);this.AJi();this.Bwc();}break;case 2:{A._GetAutoObject(
A.Device.Helper).Arr();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&
this.A2u)this.Bx1();else this.Bx4();}break;case 4:{A.z$([this,this.AIO],[B=A._GetAutoObject(
A.Device.Helper),B.Aqz,B.Aj0],0);this.AJi();A._GetAutoObject(A.Device.Helper).Arr(
);A.zX([this,this.BbZ],[B=A._GetAutoObject(A.Device.Device),B.Avb,B.Axt],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.APz);}break;case 5:this.Bde();break;case
6:{A.zX([this,this.Ay2],[B=this.DK,B.AmO,B.Jn],0);this.DK.Acr();}break;case 0:{A.
z$([this,this.AIO],[B=A._GetAutoObject(A.Device.Helper),B.Aqz,B.Aj0],0);this.AJi(
);}break;default:throw new Error(Aw$);}A.abo([this,this.AmO,this.BsP],0);},BsP:function(
Ap){this.Jn(Ap);},AIO:function(H){if(!!A._GetAutoObject(A.Device.Helper).T2){if(
this.Gi===1)this.Jn(3);else A.ab5("%s%e",AWb,this.Gi);}else A.ab5("%s",AGA);},Bx1:
function(){A._GetAutoObject(A.Device.Device).A6(13,true,A._GetAutoObject(A.Device.
Helper).Ako(A._GetAutoObject(A.Device.Helper).T2.Id).toFixed(),0,[this,this.Bwp]
);},Bwp:function(H){var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!
At&&((At.PopupState===4)||(At.PopupState===3))){if(this.A$Y(false))A._GetAutoObject(
C.AZ).BZ(31);else{A._GetAutoObject(A.Device.Helper).Aj_();this.Jn(1);}}else if(!
!At&&(At.PopupState===5)){A._GetAutoObject(A.Device.Helper).Aj_();this.Jn(1);}},
A$Y:function(Aii){if(A._GetAutoObject(A.Device.Device).Aq.K7()){A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).Aq.Hz().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).X.F$();A._GetAutoObject(
A.Device.Helper).Apu(A._GetAutoObject(A.Device.Helper).X);A._GetAutoObject(A.Device.
Helper).X.M4(A._GetAutoObject(A.Device.Helper).T2.Id);if(!!A._GetAutoObject(A.Device.
Helper).AgW){var Ak3=A._GetAutoObject(A.Device.Helper).AgW.AMX();A._GetAutoObject(
A.Device.Helper).X.Abr(Ak3);A._GetAutoObject(A.Device.Helper).X.AmX(Ak3);}if(A._GetAutoObject(
A.Device.Helper).APa(A._GetAutoObject(A.Device.Helper).X.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).X.M3(A._GetAutoObject(A.Device.Helper).X.TransponderId);A._GetAutoObject(
A.Device.Helper).X.TU(A._GetAutoObject(A.Device.Helper).Bd0(A._GetAutoObject(A.Device.
Device).AfM,A._GetAutoObject(A.Device.Helper).X));if(Aii){A._GetAutoObject(A.Device.
Helper).X.Co(A._GetAutoObject(A.Device.Device).Aq);var LW=A._GetAutoObject(A.Device.
Device).Aq.K3(0,A._GetAutoObject(A.Device.Helper).X.Id);A._GetAutoObject(A.Device.
Device).Sm(LW);if(A._GetAutoObject(A.Device.Helper).Amn()){if(A._GetAutoObject(A.
Device.Device).Bq.K7())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bq.Hz().toFixed(),0,null);else{var BT=A._NewObject(A.Device.Rating
,0);BT.F$();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).X.Id);BT.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).AaH(A._GetAutoObject(A.Device.Helper).X.AnimalType
));BT.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).X.DateOfBirth);BT.Co(A._GetAutoObject(
A.Device.Device).Bq);}}if(!A._GetAutoObject(A.Device.Device).AfM)A._GetAutoObject(
A.Device.Helper).A89();}return true;},Bwc:function(){if(!!A._GetAutoObject(A.Device.
Helper).T2){var AHE=true;if(A._GetAutoObject(A.Device.Helper).T2.Id!==A._GetAutoObject(
A.Device.Helper).X.TransponderId){AHE=A._GetAutoObject(A.Device.Helper).A5a(A._GetAutoObject(
A.Device.Helper).T2.Id);if(!AHE&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===
1)){this.A$Y(true);AHE=A._GetAutoObject(A.Device.Helper).A5a(A._GetAutoObject(A.
Device.Helper).T2.Id);}}if(AHE)this.Jn(5);else this.Jn(2);}else{A.ab5("%s",AGA);
return;}},BbZ:function(H){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu
!==this.APz){A.z$([this,this.BbZ],[B=A._GetAutoObject(A.Device.Device),B.Avb,B.Axt
],0);if(A._GetAutoObject(A.Device.Helper).X.Ap0())this.Jn(5);else this.Jn(1);}},
Bde:function(){if(this.AAp===true)this.Jn(6);else A._GetAutoObject(C.AZ).BZ(24);
},Bx4:function(){A._GetAutoObject(A.Device.Device).A6(36,true,A.jV,0,[this,this.
Bxf]);},Bxf:function(H){var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(
!!At&&((At.PopupState===4)||(At.PopupState===3))){A._GetAutoObject(A.Device.Helper
).Aj_();this.Jn(1);}},Ay2:function(H){if(!this.DK.Gi)this.Jn(1);},A0P:function(H
){},BsZ:function(s){this.A0P(s);},Bhr:function(){return this.AAp;},AmO:function(
){return this.Gi;},_Init:function(aArg){C.QP._Init.call(this,aArg);A.acg.Text._Init.
call(this.AbT={I:this},0);this.__proto__=C.L6;this.N.Y(true);this.Dp(C.Ap1);this.
Number.G(AWc);this.Number.Q(A.aaR(A.acf.A8B));this.I5.G(AWd);this.IG.G(AWe);this.
AbT.G(AWf);this.AbT.Q(AWg);this.AbT.L(A.jb.Text);this.J(this.AbT,0);this.N.Cu=[this
,this.Ed];this.N.Cf=[this,this.BsZ];this.N.CS(A.aaL(A.ach.ET));this.Number.S(A.aaL(
A.fl.Ah));this.AbT.S(A.aaL(A.fl.Hi));this.DK=A._GetAutoObject(C.DK);},_Done:function(
){this.__proto__=C.QP;this.AbT._Done();C.QP._Done.call(this);},_ReInit:function(
){C.QP._ReInit.call(this);this.AbT._ReInit();this.Number.Q(A.aaR(A.acf.A8B));this.
Number.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.QP._Mark.call(this,D);if((B=
this.DK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbT)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionScanScreen"};C.A2g={AutoActions:null,
ActionToString:null,AnimalTypeToString:null,Aop:-1,Gi:0,Buk:function(){var BcT=false;
var N6=A._GetAutoObject(A.Device.Helper).X.IsAlarm;if(A._GetAutoObject(A.Device.
Device).Bq.K7())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(A.
Device.Device).Bq.Hz().toFixed(),0,null);else if(N6){BcT=true;var BT=A._NewObject(
A.Device.Rating,0);BT.F$();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).X.
Id);A._GetAutoObject(A.Device.Helper).Awa(BT,5);BT.OnSetAppearance(3);BT.Co(A._GetAutoObject(
A.Device.Device).Bq);}else{var BT=A._NewObject(A.Device.Rating,0);BT.F$();BT.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).X.Id);A._GetAutoObject(A.Device.Helper).Awa(BT
,5);BT.OnSetAppearance(1);BT.Co(A._GetAutoObject(A.Device.Device).Bq);}A._GetAutoObject(
A.Device.Helper).X.EJ(A._GetAutoObject(A.Device.Helper).X.CE,A._GetAutoObject(A.
Device.Device).Aq);if(BcT)A._GetAutoObject(A.Device.Helper).X.TR(false);if(N6)A.
_GetAutoObject(A.Device.Helper).X.Anb(false);else A._GetAutoObject(A.Device.Helper
).X.Anb(true);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(A.Device.Device
).Aq);if(A._GetAutoObject(A.Device.Helper).X.IsAlarm)A._GetAutoObject(A.Device.Device
).A6(17,true,A._GetAutoObject(A.Device.Helper).X.VisualId.toFixed(),2000,[this,this.
MH]);else A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(A.Device.
Helper).X.VisualId.toFixed(),2000,[this,this.MH]);},Bum:function(){A._GetAutoObject(
A.Device.Helper).X.AEV(!A._GetAutoObject(A.Device.Helper).X.IsWatch);A._GetAutoObject(
A.Device.Helper).X.Co(A._GetAutoObject(A.Device.Device).Aq);if(A._GetAutoObject(
A.Device.Helper).X.IsWatch)A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).X.VisualId.toFixed(),2000,[this,this.MH]);else A._GetAutoObject(
A.Device.Device).A6(20,true,A._GetAutoObject(A.Device.Helper).X.VisualId.toFixed(
),2000,[this,this.MH]);},P2:function(JO){switch(JO){case 4:this.Buk();break;case
128:A._GetAutoObject(C.AZ).BZ(7);break;case 16:A._GetAutoObject(C.AZ).BZ(36);break;
case 1:A._GetAutoObject(C.AZ).BZ(10);break;case 2:A._GetAutoObject(C.AZ).BZ(11);
break;case 8:this.Bum();break;case 64:A._GetAutoObject(C.AZ).BZ(29);break;case 32:
A._GetAutoObject(C.AZ).BZ(54);break;case 256:A._GetAutoObject(C.AZ).BZ(21);break;
case 512:A._GetAutoObject(C.AZ).BZ(30);break;case 1024:this.Bv$();break;case 262144:
this.Bym();break;case 2048:this.Acr();break;case 4096:this.A$Q(false);break;case
8192:this.Bul();break;case 16384:this.Bv_();break;case 32768:this.BuK();break;case
524288:this.BuL();break;case 65536:this.Bu_();break;case 131072:this.BxU();break;
case 0:break;default:throw new Error(AWh);}},A$0:function(JO,BtS){var EE=A._NewObject(
C.VO,0);EE.Abp(false);EE.Aj(true);EE.AQ=BtS;EE.Bix(JO);switch(JO){case 1:{EE.U(A.
aaR(A.acf.Ag4));EE.Dy(A.aaL(A.ach.AJT));}break;case 2:{EE.U(A.aaR(A.acf.A8l));EE.
Dy(A.aaL(A.ach.AJU));}break;case 4:{EE.U(A.aaR(A.acf.Alarm));EE.Dy(A.aaL(A.ach.AJV
));EE.ADX(true);}break;case 8:{EE.U(A.aaR(A.acf.Ara));EE.Dy(A.aaL(A.ach.AJW));EE.
ADX(true);}break;case 16:{EE.U(A.aaR(A.acf.AKr));EE.Dy(A.aaL(A.ach.AJX));}break;
case 32:{EE.U(A.aaR(A.acf.AnimalLoss));EE.Dy(A.aaL(A.ach.AJY));}break;case 64:{EE.
U(A.aaR(A.acf.Unregister));EE.Dy(A.aaL(A.ach.AJZ));}break;case 128:{EE.U(A.aaR(A.
acf.Edit));EE.Dy(A.aaL(A.ach.AJ0));}break;case 256:{EE.U(A.aaR(A.acf.Weighing));
EE.Dy(A._GetAutoObject(A.acj.DI).BvN());}break;case 512:{EE.U(A.aaR(A.acf.APY));
EE.Dy(A.aaL(A.ach.AJL));}break;case 1024:{EE.U(A.aaR(A.acf.LinkTransponder));EE.
Dy(A.aaL(A.ach.AJM));}break;case 262144:{EE.U(A.aaR(A.acf.UnlinkTransponder));EE.
Dy(A.aaL(A.ach.AJS));}break;case 2048:{EE.U(A.aaR(A.acf.O1));EE.Dy(A.aaL(A.ach.AJN
));}break;case 4096:{EE.U(A.aaR(A.acf.Calving));EE.Dy(A.aaL(A.ach.AJO));}break;case
8192:{EE.U(A.aaR(A.acf.DryOff));EE.Dy(A.aaL(A.ach.AJP));EE.ADX(true);}break;case
16384:{EE.U(A.aaR(A.acf.Bff));EE.Dy(A.aaL(A.ach.AJQ));}break;case 131072:{EE.U(A.
aaR(A.acf.Blj));EE.Dy(A.aaL(A.ach.AJR));}break;default:A.ab5("%s",(AWi+JO.toFixed(
))+AWj);}return EE;},Bvl:function(){this.Aop=this.Aop+1;if(this.Aop>=this.AutoActions.
XV())this.Jn(0);else this.Jn(2);},BxE:function(){this.Aop=-1;},AyA:function(){return(
this.Aop>-1)&&!this.Bv4();},Bv4:function(){return this.Aop>=this.AutoActions.XV(
);},Jn:function(E){if(this.Gi===E)return;this.Gi=E;switch(E){case 1:this.Bvl();break;
case 2:{var ZI=this.AutoActions.Vn(this.Aop);if(this.A2d(A._GetAutoObject(A.Device.
Helper).X,ZI))this.P2(ZI);else A._GetAutoObject(A.Device.Device).A6(64,true,(this.
ActionToString.Lh(ZI)+Ar$)+this.AnimalTypeToString.Lh(A._GetAutoObject(A.Device.
Helper).X.AnimalType),0,[this,this.MH]);}break;case 0:this.BxE();break;default:throw new
Error(Aw$);}A.abo([this,this.AmO,this.Jn],0);},MH:function(H){var At=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!At&&((At.Id===63)&&(At.PopupState===7)))this.A$Q(true
);if((!!At&&(((At.PopupState===4)||(At.PopupState===3))||(At.PopupState===8)))&&
this.AyA())this.Jn(1);},A$S:function(){return!!A._GetAutoObject(A.Device.Helper).
X&&(A._GetAutoObject(A.Device.Device).Aq.K3(0,A._GetAutoObject(A.Device.Helper).
X.Id)>=0);},Bv$:function(){if(!A._GetAutoObject(A.Device.Helper).X.TransponderId
)A._GetAutoObject(C.AZ).BZ(50);else A._GetAutoObject(A.Device.Device).A6(32,true
,A.jV,0,[this,this.MH]);},Acr:function(){this.Jn(1);},BxC:function(){var N6=A._GetAutoObject(
A.Device.Helper).X.IsAlarm;if(N6&&(!!A._GetAutoObject(A.Device.Helper).X.WorstAssessment&&(
A._GetAutoObject(A.Device.Helper).X.WorstAssessment!==5))){if(A._GetAutoObject(A.
Device.Device).Bq.K7())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bq.Hz().toFixed(),0,null);else{var BT=A._NewObject(A.Device.Rating
,0);BT.F$();BT.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).X.Id);A._GetAutoObject(
A.Device.Helper).Awa(BT,5);BT.Co(A._GetAutoObject(A.Device.Device).Bq);}}A._GetAutoObject(
A.Device.Helper).X.EJ(A._GetAutoObject(A.Device.Helper).X.CE,A._GetAutoObject(A.
Device.Device).Aq);A._GetAutoObject(A.Device.Helper).X.TR(false);if(N6)A._GetAutoObject(
A.Device.Helper).X.Anb(false);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(18,true,A._GetAutoObject(
A.Device.Helper).X.VisualId.toFixed(),2000,[this,this.MH]);},BxD:function(){A._GetAutoObject(
A.Device.Helper).X.AEV(false);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(20,true,A._GetAutoObject(
A.Device.Helper).X.VisualId.toFixed(),2000,[this,this.MH]);},A$Q:function(Bvp){if(
!A._GetAutoObject(A.Device.Helper).X.NaisId&&(Bvp===false))A._GetAutoObject(A.Device.
Device).A6(63,true,A.jV,0,[this,this.MH]);else A._GetAutoObject(C.AZ).BZ(62);},Bul:
function(){A._GetAutoObject(A.Device.Helper).X.AqV(!A._GetAutoObject(A.Device.Helper
).X.IsDry);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(A.Device.Device
).Aq);if(A._GetAutoObject(A.Device.Helper).X.IsDry)A._GetAutoObject(A.Device.Device
).A6(54,true,A._GetAutoObject(A.Device.Helper).X.VisualId.toFixed(),2000,[this,this.
MH]);else A._GetAutoObject(A.Device.Device).A6(55,true,A._GetAutoObject(A.Device.
Helper).X.VisualId.toFixed(),2000,[this,this.MH]);},Bv_:function(){if(!A._GetAutoObject(
A.Device.Helper).X.NaisId)A._GetAutoObject(C.AZ).BZ(92);else A._GetAutoObject(A.
Device.Device).A6(69,true,A.jV,0,[this,this.MH]);},BuK:function(){if(A._GetAutoObject(
A.Device.Helper).X.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Ajq(A._GetAutoObject(A.Device.Helper).X.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).X.AgK(false);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(A.Device.
Device).Aq);A._GetAutoObject(A.Device.Device).A6(65,true,A.jV,2000,[this,this.MH
]);}else{A._GetAutoObject(A.Device.Helper).X.Aee(false);A._GetAutoObject(A.Device.
Helper).X.Co(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.Device
).A6(60,true,A._GetAutoObject(A.Device.Helper).X.VisualId.toFixed(),2000,[this,this.
MH]);}}},Bu_:function(){A._GetAutoObject(A.Device.Helper).X.AgK(false);A._GetAutoObject(
A.Device.Helper).X.Co(A._GetAutoObject(A.Device.Device).Aq);if(A._GetAutoObject(
A.Device.Helper).X.IsRegistrationNoticePending){if(A._GetAutoObject(A.Device.Helper
).Ajq(A._GetAutoObject(A.Device.Helper).X.WhereAbouts)){A._GetAutoObject(A.Device.
Helper).X.AgK(false);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(A.Device.
Device).Aq);A._GetAutoObject(A.Device.Device).A6(65,true,A.jV,2000,[this,this.MH
]);}else if(!A._GetAutoObject(A.Device.Helper).X.NaisIdMother)A._GetAutoObject(A.
Device.Device).A6(105,true,A._GetAutoObject(A.Device.Helper).X.VisualId.toFixed(
),2000,[this,this.MH]);else A._GetAutoObject(A.Device.Device).A6(61,true,A._GetAutoObject(
A.Device.Helper).X.VisualId.toFixed(),2000,[this,this.MH]);}},A2d:function(EA,JO
){var Qa=false;switch(JO){case 32768:Qa=EA.IsRegistrationNoticePending&&!!EA.NaisIdMother;
break;case 524288:Qa=EA.IsRegistrationNoticePending&&!EA.NaisIdMother;break;case
4096:case 8192:switch(EA.AnimalType){case 1:Qa=true;break;default:;}break;case 512:
switch(EA.AnimalType){case 0:Qa=true;break;default:;}break;case 0:break;case 4:case
32:case 2048:case 65536:case 128:case 16:case 16384:case 1024:case 262144:case 2:
case 1:case 8:case 64:case 256:case 131072:Qa=true;break;default:A.ab5("%s",AWk+
JO.toFixed());}return Qa;},BxU:function(){if(!A._GetAutoObject(A.Device.Helper).
X.NaisId)A._GetAutoObject(C.AZ).BZ(91);else A._GetAutoObject(A.Device.Device).A6(
69,true,A.jV,0,[this,this.MH]);},Bym:function(){if(!A._GetAutoObject(A.Device.Helper
).X.TransponderId)A._GetAutoObject(A.Device.Device).A6(85,true,A._GetAutoObject(
A.Device.Helper).X.VisualId.toFixed(),0,[this,this.MH]);else{A._GetAutoObject(A.
Device.Helper).X.M4(0);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(A.
Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(86,true,A._GetAutoObject(
A.Device.Helper).X.VisualId.toFixed(),2000,[this,this.MH]);}},BuL:function(){if(
A._GetAutoObject(A.Device.Helper).X.IsRegistrationNoticePending){A._GetAutoObject(
A.Device.Helper).X.Aee(false);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(99,true,A._GetAutoObject(
A.Device.Helper).X.VisualId.toFixed(),2000,[this,this.MH]);}},AmO:function(){return this.
Gi;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.A2g;this.AutoActions=A._GetAutoObject(C.AutoActions);A.h7++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.h7--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AJ5={Aah:null,Apv:null,Jn:function(E){if(this.Gi===E)return;C.L6.Jn.call(this
,E);switch(E){case 1:this.Dp(C.Ap1);break;case 5:case 6:this.Dp(C.Ix);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Aw$);}},A0P:function(H){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.L6._Init.call(this
,aArg);A.acg.Text._Init.call(this.Aah={I:this},0);C.AJ6._Init.call(this.Apv={I:this
},0);this.__proto__=C.AJ5;this.A64(true);this.Aah.G(AWl);this.Aah.Q(A.aaR(A.acf.
O1));this.Aah.L(A.jb.Text);this.Apv.G(AWm);this.J(this.Aah,0);this.J(this.Apv,0);
this.N.Cm(A.aaL(A.ach.AaT));this.Aah.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.L6;this.Aah._Done();this.Apv._Done();C.L6._Done.call(this);},_ReInit:function(
){C.L6._ReInit.call(this);this.Aah._ReInit();this.Apv._ReInit();this.Aah.Q(A.aaR(
A.acf.O1));this.Aah.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L6._Mark.call(
this,D);if((B=this.Aah)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Apv)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
IL:null,JM:null,A0P:function(H){if(this.IL.LJ(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.L6._Init.call(this,aArg);A.acg.Text._Init.call(this.
JM={I:this},0);this.__proto__=C.ManualActionScanScreen;this.JM.G(AWn);this.JM.KF(
true);this.JM.Q(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.AAc));this.
JM.L(A.jb.Text);this.J(this.JM,0);this.N.Cm(A.aaL(A.ach.AaT));this.JM.S(A.aaL(A.
fl.Ah));this.IL=A._GetAutoObject(C.O2);},_Done:function(){this.__proto__=C.L6;this.
JM._Done();C.L6._Done.call(this);},_ReInit:function(){C.L6._ReInit.call(this);this.
JM._ReInit();this.JM.Q(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.AAc
));this.JM.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L6._Mark.call(this,D);if((
B=this.IL)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.JM)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ManualActionScanScreen"};C.AJ6={Z:null,Init:
function(aArg){var B;A.zV([this,this.AzZ],A._GetAutoObject(C.AutoActions),0);A.zV([
this,this.Atr],A._GetAutoObject(A.Device.Helper).X,0);A.pe([this,this.AzZ],this);
A.pe([this,this.Atr],this);this.G(A.abK(this.M,AWo));this.Z.G(A.abK(this.Z.M,A.abe([(
B=this.M)[2]-B[0],B[3]-B[1]],AWp)));},A$F:function(H){var B;var AkR=0;var Ax6=0;
var A$W;var W=this.Z.Ag;var Cp=null;A$W=((((B=this.M)[2]-B[0])-(A._GetAutoObject(
C.AutoActions).XV()*58))/2)|0;while(!!W&&!((W.T&0x200)===0x200)){Cp=(C.VO.isPrototypeOf(
W)?W:null);if(((W.T&0x400)===0x400)&&!!Cp){Cp.G(A.abK(Cp.M,AWq));Cp.G(A.abM(Cp.M
,(Ax6*58)+A$W));Cp.G(A.abO(Cp.M,AkR*58));if(Ax6>=3){AkR=AkR+1;Ax6=0;}else Ax6=Ax6+
1;}W=W.Ag;}this.Ba(null);},AZc:function(JO){var EE=A._GetAutoObject(C.DK).A$0(JO
,null);this.J(EE,0);this.A$F(this);},Aod:function(){var B;var W=this.Z.Ag;while(
!!W&&!((W.T&0x200)===0x200)){var Ac4=W;W=W.Ag;if(((Ac4.T&0x400)===0x400))this.HG(
Ac4);}},AzZ:function(H){this.Aod();var P;var CL=A._GetAutoObject(C.AutoActions).
XV();for(P=0;P<CL;P=P+1){var ZI=A._GetAutoObject(C.AutoActions).Vn(P);this.AZc(ZI
);}A.pe([this,this.A$F],this);A.pe([this,this.Atr],this);A.pe([this,this.Byw],this
);},Atr:function(H){var B;var W=this.Z.Ag;while(!!W&&!((W.T&0x200)===0x200)){if(((
W.T&0x400)===0x400)){var Aa=(C.VO.isPrototypeOf(W)?W:null);Aa.ADX(false);}W=W.Ag;
}},Byw:function(H){var B;var W=this.Z.Ag;while(!!W&&!((W.T&0x200)===0x200)){if(((
W.T&0x400)===0x400)){var Aa=(C.VO.isPrototypeOf(W)?W:null);var BuA=A._GetAutoObject(
C.AutoActions).XV();if(!!Aa){var P;Aa.A60(false);for(P=0;P<BuA;P=P+1)if(Aa.Action===
A._GetAutoObject(C.AutoActions).Vn(P)){Aa.A60(true);Aa.BjK(AWr+(P+1).toFixed());
}}}W=W.Ag;}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Z._Init.
call(this.Z={I:this},0);this.__proto__=C.AJ6;this.Z.J$(0);this.J(this.Z,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Z._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Z._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DK={_Init:function(
){C.A2g._Init.call(this,0);},_ReInit:function(){},_variants:function(){return this;
},_this:null};C.ANE={K$:null,TC:null,Init:function(aArg){this.K$.Q(A._GetAutoObject(
A.acj.Temperature).Ak2());},_Init:function(aArg){C.Du._Init.call(this,aArg);A.acg.
Text._Init.call(this.K$={I:this},0);C.CP._Init.call(this.TC={I:this},0);this.__proto__=
C.ANE;this.K$.G(AWs);this.K$.A2(0x12);this.K$.L(A.jb.Text);this.TC.G(AnI);this.TC.
Q((A.aaR(A.acf.Agy)+AGB)+A.aaR(A.acf.J3));this.TC.A2(0x12);this.TC.L(A.jb.Text);
this.J(this.K$,0);this.J(this.TC,0);this.K$.S(A.aaL(A.fl.Ah));this.TC.S(A.aaL(A.
fl.Ak));this.TC.A5(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=
C.Du;this.K$._Done();this.TC._Done();C.Du._Done.call(this);},_ReInit:function(){
C.Du._ReInit.call(this);this.K$._ReInit();this.TC._ReInit();this.TC.Q((A.aaR(A.acf.
Agy)+AGB)+A.aaR(A.acf.J3));this.K$.S(A.aaL(A.fl.Ah));this.TC.S(A.aaL(A.fl.Ak));this.
TC.A5(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Du._Mark.call(this,D);if((B=this.
K$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TC)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::HeadlineIdTemperatures"};C.ABP={Jl:null,DP:null,_Init:
function(aArg){C.Du._Init.call(this,aArg);A.acg.Text._Init.call(this.Jl={I:this}
,0);A.acg.Text._Init.call(this.DP={I:this},0);this.__proto__=C.ABP;this.Jl.G(AWt
);this.Jl.KF(true);this.Jl.A2(0x14);this.Jl.Q(A.aaR(A.acf.Ag7)+AGC);this.Jl.L(A.
jb.Text);this.DP.G(AnI);this.DP.KF(true);this.DP.Q(A.aaR(A.acf.AEs));this.DP.L(A.
jb.Text);this.J(this.Jl,0);this.J(this.DP,0);this.Jl.S(A.aaL(A.fl.Ak));this.DP.S(
A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=C.Du;this.Jl._Done();this.DP._Done(
);C.Du._Done.call(this);},_ReInit:function(){C.Du._ReInit.call(this);this.Jl._ReInit(
);this.DP._ReInit();this.Jl.Q(A.aaR(A.acf.Ag7)+AGC);this.DP.Q(A.aaR(A.acf.AEs));
this.Jl.S(A.aaL(A.fl.Ak));this.DP.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.
Du._Mark.call(this,D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DP
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRatings"};C.
Tt={IY:null,_Init:function(aArg){C.Du._Init.call(this,aArg);C.CP._Init.call(this.
IY={I:this},0);this.__proto__=C.Tt;this.IY.G(AGD);this.IY.Q((((A.aaR(A.acf.S9)+ZB
)+AGE)+A.aaR(A.acf.A9j))+OM);this.IY.A2(0x12);this.IY.L(A.jb.Text);this.J(this.IY
,0);this.IY.S(A.aaL(A.fl.Ah));this.IY.A5(A.aaL(A.fl.Ak));this.IY.CC(A.aaL(A.fl.By
));},_Done:function(){this.__proto__=C.Du;this.IY._Done();C.Du._Done.call(this);
},_ReInit:function(){C.Du._ReInit.call(this);this.IY._ReInit();this.IY.Q((((A.aaR(
A.acf.S9)+ZB)+AGE)+A.aaR(A.acf.A9j))+OM);this.IY.S(A.aaL(A.fl.Ah));this.IY.A5(A.
aaL(A.fl.Ak));this.IY.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Du._Mark.call(
this,D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"
};C.ANG={La:null,J_:null,CT:function(){this.A8D();},Init:function(aArg){this.A8D(
);},A8D:function(){this.La.Q(A._GetAutoObject(A.acj.DI).AcI());this.J_.Q(A._GetAutoObject(
A.acj.DI).ZQ());},_Init:function(aArg){C.Du._Init.call(this,aArg);A.acg.Text._Init.
call(this.La={I:this},0);C.CP._Init.call(this.J_={I:this},0);this.__proto__=C.ANG;
this.La.G(AWu);this.La.A2(0x12);this.La.L(A.jb.Text);this.J_.G(AnI);this.J_.L(A.
jb.Text);this.J(this.La,0);this.J(this.J_,0);this.La.S(A.aaL(A.fl.Ah));this.J_.S(
A.aaL(A.fl.Ah));this.J_.A5(A.aaL(A.fl.Ak));this.J_.CC(A.aaL(A.fl.By));this.Init(
aArg);},_Done:function(){this.__proto__=C.Du;this.La._Done();this.J_._Done();C.Du.
_Done.call(this);},_ReInit:function(){C.Du._ReInit.call(this);this.La._ReInit();
this.J_._ReInit();this.La.S(A.aaL(A.fl.Ah));this.J_.S(A.aaL(A.fl.Ah));this.J_.A5(
A.aaL(A.fl.Ak));this.J_.CC(A.aaL(A.fl.By));this.CT();},_Mark:function(D){var B;C.
Du._Mark.call(this,D);if((B=this.La)._cycle!=D)B._Mark(B._cycle=D);if((B=this.J_
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWeights"};C.
ALg={L_:null,Hc:null,H1:null,AN:null,A8:null,FH:0,W4:0,H4:0,Ah4:false,Init:function(
aArg){},Bg:function(aSize){C.A$.Bg.call(this,aSize);this.Background.G(A.abN(this.
Background.M,((aSize[0]*65)/100)|0));this.V.G(A.abN(this.V.M,((aSize[0]*30)/100)|
0));this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Hc.G([this.V.M[2],0
,((aSize[0]*65)/100)|0,aSize[1]]);this.A8.G([this.Hc.M[2]-1,0,this.Hc.M[2]+1,aSize[
1]]);this.L_.G([this.Background.M[2],0,aSize[0],aSize[1]]);this.H1.G(this.L_.M);
},Ai:function(Ae){C.A$.Ai.call(this,Ae);if(this.Ah4){this.H1.Q(Q3);this.H1.L(A.jb.
Text);this.L_.L(this.Background.AP);}else{this.H1.Q(A._GetAutoObject(A.Device.Converter
).NU(this.FH,2,true));this.H1.L(A._GetAutoObject(A.acj.DI).Ayu(this.FH,this.H4));
this.L_.L(A._GetAutoObject(A.acj.DI).Ays(this.FH,this.H4));}if(this.W4>0)this.Hc.
Q(A._GetAutoObject(A.Device.Converter).Anu(this.W4));else this.Hc.Q(Q3);this.Hc.
L(this.V.AP);},B$:function(Ac){if(!this.AW)return;this.Hr=Ac;if(!!this.AW){var Od=
this.AW.CA(Ac,1);var Atn=this.AW.Hy(Ac,24);var AIn=this.AW.CA(Ac,23);var Apk=this.
AW.Hy(Ac,19);this.W4=this.AW.CA(Ac,18);if((Atn>0)&&(Atn!==Apk)){var Lq=A._GetAutoObject(
A.Device.Helper).MB(Atn,Apk);if(!!Lq){this.Ah4=false;this.FH=A._GetAutoObject(A.
acj.DI).AkQ(Lq,AIn,this.W4);}else{this.Ah4=true;this.FH=0;}}else{this.Ah4=true;this.
FH=0;}this.U(Od.toFixed());this.H4=this.AW.Amc(Ac,14);this.An();}},_Init:function(
aArg){C.A$._Init.call(this,aArg);A.acg.AI._Init.call(this.L_={I:this},0);A.acg.Text.
_Init.call(this.Hc={I:this},0);A.acg.Text._Init.call(this.H1={I:this},0);A.acg.AI.
_Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A8={I:this},0);this.__proto__=
C.ALg;this.V.G(OK);this.L_.G(Asb);this.Hc.G(AGy);this.Hc.A2(0x12);this.Hc.Q(SI);
this.Hc.L(A.jb.Text);this.H1.G(AGz);this.H1.Q(SI);this.H1.L(A.jb.Text);this.AN.G(
AnG);this.AN.L(A.jb.Bb);this.A8.G(AnH);this.A8.L(A.jb.Bb);this.J(this.L_,0);this.
J(this.Hc,0);this.J(this.H1,0);this.J(this.AN,0);this.J(this.A8,0);this.Hc.S(A.aaL(
A.fl.Ah));this.H1.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.L_._Done();this.Hc._Done();this.H1._Done();this.AN._Done();this.A8._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.L_._ReInit(
);this.Hc._ReInit();this.H1._ReInit();this.AN._ReInit();this.A8._ReInit();this.Hc.
S(A.aaL(A.fl.Ah));this.H1.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.L_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.H1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.MO={L9:null,AN:null,A8:null,Gj:null,WR:0,Init:
function(aArg){},Bg:function(aSize){C.A$.Bg.call(this,aSize);this.L9.G([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.V.G(this.L9.M);this.Background.G([].concat(this.L9.
M[2],this.Background.M.slice(1,4)));this.Background.G(A.abN(this.Background.M,aSize[
0]));this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Gj.G([this.V.M[2],
0,this.V.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A8.G([this.Gj.M[2]-1,0,this.
Gj.M[2]+1,aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.Gj.L(this.V.AP
);if(!!this.WR&&(this.WR!==5)){this.L9.L(A._GetAutoObject(A.acj.Assessment).P4(this.
WR));this.V.L(A._GetAutoObject(A.acj.Assessment).W1(this.WR));}else this.L9.L(this.
Background.AP);},B$:function(Ac){if(!this.AW)return;this.Hr=Ac;if(!!this.AW){var
Od=this.AW.CA(Ac,1);var LC=this.AW.IU(Ac,13);var AkX=this.AW.IU(Ac,17);var Ak6=this.
AW.HT(Ac,11);var AxO=this.AW.Hy(Ac,4);var Ae8=A._GetAutoObject(A.Device.Helper).
MB(AxO,A._GetAutoObject(A.Device.Helper).Dx());this.WR=A._GetAutoObject(A.Device.
Helper).AKo(LC,Ak6,AkX);this.U(Od.toFixed());if(Ae8<100)this.Gj.Q((Ae8.toFixed()+
CJ)+A.aaR(A.acf.AJ4));else this.Gj.Q(A._GetAutoObject(A.acj.Ky).ABm(AxO,A._GetAutoObject(
A.Device.Helper).Dx(),AGF));this.An();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AI._Init.call(this.L9={I:this},0);A.acg.AI._Init.call(this.AN={I:this
},0);A.acg.AI._Init.call(this.A8={I:this},0);A.acg.Text._Init.call(this.Gj={I:this
},0);this.__proto__=C.MO;this.L9.G(Asb);this.Background.G(AWv);this.V.G(OK);this.
AN.G(AnG);this.AN.L(A.jb.Bb);this.A8.G(AnH);this.A8.L(A.jb.Bb);this.Gj.G(Axa);this.
J(this.L9,-3);this.J(this.AN,0);this.J(this.A8,0);this.J(this.Gj,0);this.Gj.S(A.
aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.L9._Done(
);this.AN._Done();this.A8._Done();this.Gj._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.L9._ReInit();this.AN._ReInit();this.A8._ReInit(
);this.Gj._ReInit();this.Gj.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.L9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gj
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosItem"
};C.ALe={AiT:null,NR:null,AN:null,A8:null,Jf:null,AIH:0,A0f:0,Init:function(aArg
){},Bg:function(aSize){C.A$.Bg.call(this,aSize);this.Background.G(A.abK(this.Background.
M,aSize));this.V.G(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AN.G([this.V.M[2]-
1,0,this.V.M[2]+1,aSize[1]]);this.NR.G([this.V.M[2],0,((aSize[0]*65)/100)|0,aSize[
1]]);this.AiT.G(this.NR.M);this.A8.G([this.NR.M[2]-1,0,this.NR.M[2]+1,aSize[1]]);
this.Jf.G([this.NR.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this
,Ae);this.Jf.C5(this.V.AP);if(this.AIH>0){this.AiT.L(A._GetAutoObject(A.acj.Assessment
).P4(this.A0f));this.NR.L(A._GetAutoObject(A.acj.Assessment).W1(this.A0f));}else{
this.AiT.L(this.Background.AP);this.NR.L(this.V.AP);}},B$:function(Ac){if(!this.
AW)return;this.Hr=Ac;if(!!this.AW){var KP=this.AW.CA(Ac,0);var Od=this.AW.CA(Ac,
1);this.AIH=this.AW.CA(Ac,5);this.A0f=this.AW.IU(Ac,17);this.U(Od.toFixed());if(
this.AIH>0)this.NR.Q(A._GetAutoObject(A.Device.Converter).Akk(this.AIH));else this.
NR.Q(Q3);var WQ=A._GetAutoObject(A.Device.Helper).Y$(6);A._GetAutoObject(A.Device.
Device).Sm(Ac);var AYm=A._GetAutoObject(A.Device.Helper).BfG(A._GetAutoObject(A.
Device.Device).Bq,9,KP,WQ,0);this.Jf.A7b(AYm.Get(3));this.Jf.A7d(AYm.Get(2));this.
Jf.A7c(AYm.Get(1));this.An();}},_Init:function(aArg){C.A$._Init.call(this,aArg);
A.acg.AI._Init.call(this.AiT={I:this},0);A.acg.Text._Init.call(this.NR={I:this},
0);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A8={I:this},
0);C.Jf._Init.call(this.Jf={I:this},0);this.__proto__=C.ALe;this.NR.A2(0x12);this.
NR.Q(SI);this.NR.L(A.jb.Text);this.AN.G(AnG);this.AN.L(A.jb.Bb);this.A8.G(AnH);this.
A8.L(A.jb.Bb);this.Jf.G(AWw);this.J(this.AiT,0);this.J(this.NR,0);this.J(this.AN
,0);this.J(this.A8,0);this.J(this.Jf,0);this.NR.S(A.aaL(A.fl.Ah));this.Init(aArg
);},_Done:function(){this.__proto__=C.A$;this.AiT._Done();this.NR._Done();this.AN.
_Done();this.A8._Done();this.Jf._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.AiT._ReInit();this.NR._ReInit();this.AN._ReInit();
this.A8._ReInit();this.Jf._ReInit();this.NR.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.A$._Mark.call(this,D);if((B=this.AiT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListTemperatureItem"};C.Jf={AeF:null,
ColoredCounterAttrSet:null,AAO:0,AAP:0,AAN:0,KG:0,Ai:function(Ae){var B;A.Core.O.
Ai.call(this,Ae);var AIy;var AJK;var AI4;var Alc=0;if(this.AAN>0){AIy=this.AAN.toFixed(
);Alc+=AIy.length;}else{AIy=AWx;Alc++;}if(this.AAP>0){AJK=this.AAP.toFixed();Alc+=
AJK.length;}else{AJK=Axb;Alc++;}if(this.AAO>0){AI4=this.AAO.toFixed();Alc+=AI4.length;
}else{AI4=AGt;Alc++;}if(Alc<=4)this.ColoredCounterAttrSet.AgI(A.aaL(A.fl.Ah));else
if(Alc<=5)this.ColoredCounterAttrSet.AgI(A.aaL(A.fl.Ak));else this.ColoredCounterAttrSet.
AgI(A.aaL(A.fl.By));this.AeF.Q(((((AWy+AIy)+AWz)+AJK)+AWA)+AI4);},A7c:function(E
){if(this.AAO===E)return;this.AAO=E;this.An();},A7d:function(E){if(this.AAP===E)
return;this.AAP=E;this.An();},A7b:function(E){if(this.AAN===E)return;this.AAN=E;
this.An();},C5:function(E){if(this.KG===E)return;this.KG=E;this.ColoredCounterAttrSet.
AgF(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.AtJ._Init.call(
this.AeF={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:
this},0);this.__proto__=C.Jf;this.G(AGG);this.AeF.AV(0x3F);this.AeF.G(AGG);this.
AeF.Q(SI);this.ColoredCounterAttrSet.BiJ(A.jb.EX);this.ColoredCounterAttrSet.A69(
A.jb.HY);this.ColoredCounterAttrSet.A68(A.jb.FU);this.ColoredCounterAttrSet.AgF(
A.jb.Text);this.KG=A.jb.Text;this.J(this.AeF,0);this.AeF.A63(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.AgI(A.aaL(A.fl.Ah));this.ColoredCounterAttrSet.A65(
null);},_Done:function(){this.__proto__=A.Core.O;this.AeF._Done();this.ColoredCounterAttrSet.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.AeF._ReInit();this.ColoredCounterAttrSet._ReInit();this.ColoredCounterAttrSet.
AgI(A.aaL(A.fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.AeF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ColoredCounterAttrSet)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"};C.ALd={Asz:null
,AbA:null,AbB:null,AbC:null,Jf:null,AN:null,A8:null,D4:null,Lg:null,AbV:null,KH:
null,KI:null,AHK:0,AHJ:0,AHI:0,Init:function(aArg){},Bg:function(aSize){C.A$.Bg.
call(this,aSize);this.Background.G(A.abK(this.Background.M,aSize));this.V.G(A.abN(
this.V.M,((aSize[0]*30)/100)|0));this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[
1]]);this.AbA.G([this.V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.AbV.G(this.
AbA.M);this.A8.G([this.AbA.M[2]-1,0,this.AbA.M[2]+1,aSize[1]]);this.AbB.G([this.
AbA.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.KH.G(this.AbB.M);this.D4.G([this.
AbB.M[2]-1,0,this.AbB.M[2]+1,aSize[1]]);this.AbC.G([this.AbB.M[2],0,((aSize[0]*65
)/100)|0,aSize[1]]);this.KI.G(this.AbC.M);this.Lg.G([this.AbC.M[2]-1,0,this.AbC.
M[2]+1,aSize[1]]);this.Jf.G([this.AbC.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae
){C.A$.Ai.call(this,Ae);this.Jf.C5(this.V.AP);this.AbA.L(A._GetAutoObject(A.acj.
Assessment).P4(this.AHI));this.AbB.L(A._GetAutoObject(A.acj.Assessment).P4(this.
AHJ));this.AbC.L(A._GetAutoObject(A.acj.Assessment).P4(this.AHK));this.AbV.L(A._GetAutoObject(
A.acj.Assessment).W1(this.AHI));this.KH.L(A._GetAutoObject(A.acj.Assessment).W1(
this.AHJ));this.KI.L(A._GetAutoObject(A.acj.Assessment).W1(this.AHK));this.AbV.Y(
!this.AHI);this.KH.Y(!this.AHJ);this.KI.Y(!this.AHK);this.Jf.A7b(this.Asz.Get(3)
);this.Jf.A7d(this.Asz.Get(2));this.Jf.A7c(this.Asz.Get(1));},B$:function(Ac){if(
!this.AW)return;this.Hr=Ac;if(!!this.AW){var KP=this.AW.CA(Ac,0);var Od=this.AW.
CA(Ac,1);this.U(Od.toFixed());A._GetAutoObject(A.Device.Device).Sm(Ac);this.AHI=
A._GetAutoObject(A.Device.Helper).AZO(A._GetAutoObject(A.Device.Device).Bq,KP,0);
this.AHJ=A._GetAutoObject(A.Device.Helper).AZO(A._GetAutoObject(A.Device.Device).
Bq,KP,-1);this.AHK=A._GetAutoObject(A.Device.Helper).AZO(A._GetAutoObject(A.Device.
Device).Bq,KP,-2);this.Asz=A._GetAutoObject(A.Device.Helper).A4i(A._GetAutoObject(
A.Device.Device).Bq,KP,0,0);this.An();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.acg.AI._Init.call(this.AbA={I:this},0);A.acg.AI._Init.call(this.AbB={I:
this},0);A.acg.AI._Init.call(this.AbC={I:this},0);C.Jf._Init.call(this.Jf={I:this
},0);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A8={I:this
},0);A.acg.AI._Init.call(this.D4={I:this},0);A.acg.AI._Init.call(this.Lg={I:this
},0);A.acg.Text._Init.call(this.AbV={I:this},0);A.acg.Text._Init.call(this.KH={I:
this},0);A.acg.Text._Init.call(this.KI={I:this},0);this.__proto__=C.ALd;this.AN.
L(A.jb.Bb);this.A8.L(A.jb.Bb);this.D4.L(A.jb.Bb);this.Lg.L(A.jb.Bb);this.AbV.Q(AnJ
);this.KH.Q(AnJ);this.KI.Q(AnJ);this.J(this.AbA,0);this.J(this.AbB,0);this.J(this.
AbC,0);this.J(this.Jf,0);this.J(this.AN,0);this.J(this.A8,0);this.J(this.D4,0);this.
J(this.Lg,0);this.J(this.AbV,0);this.J(this.KH,0);this.J(this.KI,0);this.AbV.S(A.
aaL(A.fl.Ah));this.KH.S(A.aaL(A.fl.Ah));this.KI.S(A.aaL(A.fl.Ah));this.Asz=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.AbA._Done();this.AbB._Done();this.AbC._Done();this.Jf._Done();this.AN.
_Done();this.A8._Done();this.D4._Done();this.Lg._Done();this.AbV._Done();this.KH.
_Done();this.KI._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.
call(this);this.AbA._ReInit();this.AbB._ReInit();this.AbC._ReInit();this.Jf._ReInit(
);this.AN._ReInit();this.A8._ReInit();this.D4._ReInit();this.Lg._ReInit();this.AbV.
_ReInit();this.KH._ReInit();this.KI._ReInit();this.AbV.S(A.aaL(A.fl.Ah));this.KH.
S(A.aaL(A.fl.Ah));this.KI.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.A$._Mark.
call(this,D);if((B=this.Asz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbA).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AbB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AbV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KH
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListRatingItem"};C.Amf={HW:null,Afi:false,Bg:function(aSize){var
B;this.HW.G([(aSize[0]-((B=this.HW.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.V.G([
10,0,this.HW.M[0]-10,40]);C.Tg.Bg.call(this,aSize);},Ai:function(Ae){C.Tg.Ai.call(
this,Ae);if(this.Afi)this.HW.Cr(1);else this.HW.Cr(0);},JW:function(H){if(this.Afi
)C.Tg.JW.call(this,H);},JR:function(H){if(this.Afi)C.Tg.JR.call(this,H);},S2:function(
AM){C.Tg.S2.call(this,AM);if(!!AM){this.G(A.abI(this.M,80));this.Afi=true;this.YT(
true);}else{this.G(A.abI(this.M,40));this.Afi=false;this.YT(false);}},_Init:function(
aArg){C.Tg._Init.call(this,aArg);A.acg.Am._Init.call(this.HW={I:this},0);this.__proto__=
C.Amf;this.V.A2(0x11);this.HW.G(AF4);this.HW.Cr(0);this.J(this.HW,0);this.V.CC(A.
aaL(A.fl.By));this.HW.Ax(A.aaL(A.ach.ApS));},_Done:function(){this.__proto__=C.Tg;
this.HW._Done();C.Tg._Done.call(this);},_ReInit:function(){C.Tg._ReInit.call(this
);this.HW._ReInit();this.V.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Tg._Mark.
call(this,D);if((B=this.HW)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.AEr={_Init:function(aArg){C.Av3._Init.call(this,aArg);this.__proto__=C.AEr;}
,_className:"Application::OptionsOverlaySeparator"};C.Aj3={DD:A.jV,Bw:true,_Init:
function(aArg){C.Av3._Init.call(this,aArg);this.__proto__=C.Aj3;},_className:"Application::OptionsOverlayNode"
};C.Ael={AQ:null,_Init:function(aArg){C.Aj3._Init.call(this,aArg);this.__proto__=
C.Ael;},_Mark:function(D){var B;C.Aj3._Mark.call(this,D);if((B=this.AQ)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.ALH={Ai:function(Ae){C.T_.Ai.call(this,Ae);var FE=A.jb.CM;var GG=A.jb.Text;if(
this.G8){FE=A.jb.Text;GG=A.jb.Bh;}this.Background.L(FE);this.V.L(GG);},_Init:function(
aArg){C.T_._Init.call(this,aArg);this.__proto__=C.ALH;},_className:"Application::DarkThemeTextItem"
};C.T_={Background:null,Cy:null,V:null,ApC:0,G8:false,Init:function(aArg){},Bg:function(
aSize){C.Hg.Bg.call(this,aSize);this.Background.G(A.abK(this.Background.M,aSize)
);this.Cy.G(A.abK(this.Cy.M,aSize));this.V.G(A.abK(this.V.M,aSize));},U:function(
E){if(this.DD===E)return;this.DD=E;this.V.Q(E);},Bf:function(E){if(this.G8===E)return;
this.G8=E;this.An();},Avm:function(E){if(this.ApC===E)return;this.ApC=E;this.An(
);},_Init:function(aArg){C.Hg._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={
I:this},0);A.acg.Cy._Init.call(this.Cy={I:this},0);C.CP._Init.call(this.V={I:this
},0);this.__proto__=C.T_;this.G(BC);this.Background.G(AGH);this.Cy.G(BC);this.Cy.
NJ(2);this.Cy.L(A.jb.AbX);this.V.G(AWB);this.ApC=A.jb.AbX;this.J(this.Background
,0);this.J(this.Cy,0);this.J(this.V,0);this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(
A.fl.Ak));this.V.CC(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=
C.Hg;this.Background._Done();this.Cy._Done();this.V._Done();C.Hg._Done.call(this
);},_ReInit:function(){C.Hg._ReInit.call(this);this.Background._ReInit();this.Cy.
_ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.
V.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cy)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextItem"
};C.ANJ={Eq:null,IB:null,_Init:function(aArg){C.Er._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Eq={I:this},0);A.acg.Text._Init.call(this.IB={I:this},0);this.__proto__=
C.ANJ;this.G(OJ);this.Background.G(OJ);this.Eq.G(AGI);this.Eq.Q(A.aaR(A.acf.Gy));
this.Eq.A2(0x11);this.Eq.L(A.jb.Text);this.IB.AV(0x3F);this.IB.G(AGJ);this.IB.HF(
5);this.IB.A2(0x14);this.IB.Q(A.aaR(A.acf.AE9));this.IB.L(A.jb.Text);this.J(this.
Eq,0);this.J(this.IB,0);this.Eq.S(A.aaL(A.fl.Ah));this.IB.S(A.aaL(A.fl.Ah));},_Done:
function(){this.__proto__=C.Er;this.Eq._Done();this.IB._Done();C.Er._Done.call(this
);},_ReInit:function(){C.Er._ReInit.call(this);this.Eq._ReInit();this.IB._ReInit(
);this.Eq.Q(A.aaR(A.acf.Gy));this.IB.Q(A.aaR(A.acf.AE9));this.Eq.S(A.aaL(A.fl.Ah
));this.IB.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Er._Mark.call(this,D);if((
B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IB)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineStatusSmall"};C.CX={R0:null,R1:null,AdS:null
,Agg:null,Qo:null,KG:0,LastTemperature:0,ApG:0,AnimalType:0,IsAlarm:false,IsFever:
false,IsWatch:false,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);switch(this.AnimalType
){case 1:{this.R0.Ax(A.aaL(A.ach.AuA));this.R1.Ax(A.aaL(A.ach.AuA));}break;case 2:{
this.R0.Ax(A.aaL(A.ach.AuD));this.R1.Ax(A.aaL(A.ach.AuD));}break;default:{this.R0.
Ax(A.aaL(A.ach.AdO));this.R1.Ax(A.aaL(A.ach.AdO));}}this.R0.L(A._GetAutoObject(A.
acj.Assessment).P4(this.ApG));var Ao3;if(this.IsWatch)Ao3=A.aaL(A.ach.AOH);else if(
this.IsFever){Ao3=A.aaL(A.ach.AOG);switch(A._GetAutoObject(A.Device.Converter).AiI(
this.LastTemperature,this.AnimalType)){case 3:this.Qo.L(A.jb.FU);break;case 2:this.
Qo.L(A.jb.HY);break;case 1:this.Qo.L(A.jb.EX);break;case 0:this.Qo.L(A.jb.AeL);break;
default:;}}else if(this.IsAlarm){Ao3=A.aaL(A.ach.AOF);if(!this.ApG||(this.ApG===
5))this.Qo.L(A.jb.FU);else this.Qo.L(0xFF000000);}else Ao3=null;this.AdS.Ax(Ao3);
this.Agg.Ax(Ao3);this.Qo.Ax(Ao3);if(A._GetAutoObject(A.acj.Assessment).P4(this.ApG
)===A.jb.EX)this.R1.L(this.KG);},DS:function(E){if(this.AnimalType===E)return;this.
AnimalType=E;this.An();},ADl:function(E){if(this.ApG===E)return;this.ApG=E;this.
An();},C5:function(E){if(this.KG===E)return;this.KG=E;this.An();},Aef:function(E
){if(this.IsWatch===E)return;this.IsWatch=E;this.An();},TR:function(E){if(this.IsFever===
E)return;this.IsFever=E;this.An();},Aec:function(E){if(this.IsAlarm===E)return;this.
IsAlarm=E;this.An();},Aeh:function(E){if(this.LastTemperature===E)return;this.LastTemperature=
E;this.An();},G$:function(){this.DS(0);this.ADl(0);this.Aec(false);this.TR(false
);this.Aef(false);this.Aeh(0);this.C5(A.jb.Text);},_Init:function(aArg){A.Core.O.
_Init.call(this,aArg);A.acg.Am._Init.call(this.R0={I:this},0);A.acg.Am._Init.call(
this.R1={I:this},0);A.acg.Am._Init.call(this.AdS={I:this},0);A.acg.Am._Init.call(
this.Agg={I:this},0);A.acg.Am._Init.call(this.Qo={I:this},0);this.__proto__=C.CX;
this.G(Akz);this.R0.AV(0x3F);this.R0.G(Akz);this.R0.L(A.jb.CM);this.R0.A2(0x12);
this.R0.Cr(0);this.R1.AV(0x3F);this.R1.G(Akz);this.R1.L(0xFF000000);this.R1.A2(0x12
);this.R1.Cr(1);this.AdS.AV(0x3F);this.AdS.G(Akz);this.AdS.L(0xFF000000);this.AdS.
Cr(0);this.Agg.AV(0x3F);this.Agg.G(Akz);this.Agg.Cr(1);this.Qo.AV(0x3F);this.Qo.
G(Akz);this.Qo.L(A.jb.C0);this.Qo.Cr(2);this.KG=A.jb.Text;this.J(this.R0,0);this.
J(this.R1,0);this.J(this.AdS,0);this.J(this.Agg,0);this.J(this.Qo,0);this.R0.Ax(
A.aaL(A.ach.AdO));this.R1.Ax(A.aaL(A.ach.AdO));},_Done:function(){this.__proto__=
A.Core.O;this.R0._Done();this.R1._Done();this.AdS._Done();this.Agg._Done();this.
Qo._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.R0._ReInit();this.R1._ReInit();this.AdS._ReInit();this.Agg._ReInit();
this.Qo._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.
R0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AdS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Qo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadIcon"
};C.AK$={B$:function(Ac){C.AiW.B$.call(this,Ac);if(!!this.AW){var Bv8=this.AW.HT(
Ac,12);var But=this.AW.RW(Ac,15);this.Aax.Q(A._GetAutoObject(A.Device.Helper).MB(
But,A._GetAutoObject(A.Device.Helper).Dx()).toFixed());this.R2.Y(Bv8);this.An();
}},_Init:function(aArg){C.AiW._Init.call(this,aArg);this.__proto__=C.AK$;},_className:
"Application::CalfListAlarmItem"};C.ABM={DP:null,Mf:null,_Init:function(aArg){C.
Tu._Init.call(this,aArg);A.acg.Text._Init.call(this.DP={I:this},0);A.acg.Am._Init.
call(this.Mf={I:this},0);this.__proto__=C.ABM;this.DP.G(AnI);this.DP.KF(true);this.
DP.Q(A.aaR(A.acf.A3x));this.DP.L(A.jb.Text);this.Mf.G(AWC);this.Mf.IZ(false);this.
Mf.L(A.jb.Text);this.Mf.A2(0x12);this.J(this.DP,-2);this.J(this.Mf,0);this.DP.S(
A.aaL(A.fl.Ak));this.Mf.Ax(A.aaL(A.ach.AB$));},_Done:function(){this.__proto__=C.
Tu;this.DP._Done();this.Mf._Done();C.Tu._Done.call(this);},_ReInit:function(){C.
Tu._ReInit.call(this);this.DP._ReInit();this.Mf._ReInit();this.DP.Q(A.aaR(A.acf.
A3x));this.DP.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Tu._Mark.call(this,D
);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mf)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAlarm"};C.J2={Background:null,Cy:
null,ABe:0,AAw:0,Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Background.L(this.
ABe);this.Cy.L(this.AAw);},Avx:function(E){if(this.ABe===E)return;this.ABe=E;this.
An();},ADd:function(E){if(this.AAw===E)return;this.AAw=E;this.An();},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.call(this.Background={I:this
},0);A.acg.Am._Init.call(this.Cy={I:this},0);this.__proto__=C.J2;this.G(AnK);this.
Background.AV(0x3C);this.Background.G(AnK);this.Background.Cr(1);this.Cy.AV(0x3C
);this.Cy.G(AnK);this.ABe=A.jb.EX;this.AAw=A.jb.Text;this.J(this.Background,0);this.
J(this.Cy,0);this.Background.Ax(A.aaL(A.ach.J2));this.Cy.Ax(A.aaL(A.ach.J2));},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.Cy._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background.
_ReInit();this.Cy._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cy)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"};C.ApH={O8:null,A4X:
false,Bg:function(aSize){C.Mc.Bg.call(this,aSize);this.V.G([].concat(this.O8.M[2
]-this.V.Text.I0,this.V.M.slice(1,4)));},Ai:function(Ae){C.Mc.Ai.call(this,Ae);this.
O8.L(this.V.AP);},ADA:function(E){if(this.A4X===E)return;this.A4X=E;if(E)this.O8.
Q(AWD);else this.O8.Q(AGK);},_Init:function(aArg){C.Mc._Init.call(this,aArg);A.acg.
Text._Init.call(this.O8={I:this},0);this.__proto__=C.ApH;this.O8.AV(0x34);this.O8.
G(Zv);this.O8.Q(AGK);this.J(this.O8,0);this.O8.S(A.aaL(A.fl.AMB));},_Done:function(
){this.__proto__=C.Mc;this.O8._Done();C.Mc._Done.call(this);},_ReInit:function(){
C.Mc._ReInit.call(this);this.O8._ReInit();},_Mark:function(D){var B;C.Mc._Mark.call(
this,D);if((B=this.O8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DarkThemeCheckedMenuItem"
};C.AM3={En:function(H){C.J7.En.call(this,H);this.Da.Ax(A._GetAutoObject(A.Device.
Converter).AfP(4));},_Init:function(aArg){C.J7._Init.call(this,aArg);this.__proto__=
C.AM3;},_className:"Application::HeaderAlarmListFilter"};C.AutoRegistrationMode={
AutoRegistrationModeToString:null,Dt:function(){return 3;},C$:function(aIndex){if((
aIndex<0)||(aIndex>=3))return-1;return aIndex;},Gx:function(aIndex){if((aIndex<0
)||(aIndex>=3))return A.jV;return this.AutoRegistrationModeToString.B0(aIndex);}
,DO:function(A1){return A1;},Hj:function(){return 2;},_Init:function(aArg){C.AB.
_Init.call(this,aArg);A.Device.AutoRegistrationModeToString._Init.call(this.AutoRegistrationModeToString={
I:this},0);this.__proto__=C.AutoRegistrationMode;},_Done:function(){this.__proto__=
C.AB;this.AutoRegistrationModeToString._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.AutoRegistrationModeToString._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.AutoRegistrationModeToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"};C.ANK={
FZ:null,K$:null,Yg:null,Init:function(aArg){this.K$.Q(A._GetAutoObject(A.acj.Temperature
).Ak2());},_Init:function(aArg){C.Er._Init.call(this,aArg);A.acg.Text._Init.call(
this.FZ={I:this},0);A.acg.Text._Init.call(this.K$={I:this},0);A.acg.Text._Init.call(
this.Yg={I:this},0);this.__proto__=C.ANK;this.Background.L(A.jb.Text);this.FZ.G(
AGL);this.FZ.A2(0x11);this.FZ.Q(A.aaR(A.acf.Date));this.FZ.L(A.jb.Bh);this.K$.G(
AGM);this.K$.A2(0x12);this.K$.L(A.jb.Bh);this.Yg.G(AWE);this.Yg.A2(0x12);this.Yg.
Q(A.aaR(A.acf.Bt));this.Yg.L(A.jb.Bh);this.J(this.FZ,0);this.J(this.K$,0);this.J(
this.Yg,0);this.FZ.S(A.aaL(A.fl.Ah));this.K$.S(A.aaL(A.fl.Ah));this.Yg.S(A.aaL(A.
fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.Er;this.FZ._Done();this.
K$._Done();this.Yg._Done();C.Er._Done.call(this);},_ReInit:function(){C.Er._ReInit.
call(this);this.FZ._ReInit();this.K$._ReInit();this.Yg._ReInit();this.FZ.Q(A.aaR(
A.acf.Date));this.Yg.Q(A.aaR(A.acf.Bt));this.FZ.S(A.aaL(A.fl.Ah));this.K$.S(A.aaL(
A.fl.Ah));this.Yg.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Er._Mark.call(this
,D);if((B=this.FZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K$)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineTemperatures"
};C.Ta={K5:null,Ajd:false,Init:function(aArg){var B;A.zX([this,this.A_K],[B=A._GetAutoObject(
A.Device.Device),B.AQi,B.AXK],0);this.AE1(this);A.pe([this,this.AHb],this);},Dr:
function(H){var DV=(A.Core.BO.isPrototypeOf(H)?H:null);switch(DV.CH){case 6:this.
N9(this);break;case 7:this.MI(this);break;default:DV.O9=true;}},CI:function(H){var
B;if(!!this.K5)this.K5.CI(this);C.AC.CI.call(this,H);},Fb:function(H){var B;if(!
!this.K5)this.K5.Fb(this);C.AC.Fb.call(this,H);},AmH:function(H){A._GetAutoObject(
C.AZ).Fk();},AE1:function(H){var B;if(!!this.K5){this.K5.Fb(this);this.HG(this.K5
);}if(this.Ajd)switch(A._GetAutoObject(A.Device.Device).D1){case 0:this.K5=A._NewObject(
C.AKv,0);break;case 1:this.K5=A._NewObject(C.AKw,0);break;case 3:this.K5=A._NewObject(
C.AKu,0);break;case 2:this.K5=A._NewObject(C.AKx,0);break;default:throw new Error(
Axc);}else switch(A._GetAutoObject(A.Device.Device).D1){case 0:this.K5=A._NewObject(
C.AKy,0);break;case 1:this.K5=A._NewObject(C.AKH,0);break;case 3:this.K5=A._NewObject(
C.AKB,0);break;case 2:this.K5=A._NewObject(C.AKM,0);break;default:throw new Error(
Axc);}this.HH(this);this.J(this.K5,0);this.K5.G(E2);this.K5.YQ([this,this.AX_]);
this.K5.CI(this);this.Ba(this.K5);},A_K:function(s){this.AE1(s);},ARx:function(H
){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.Device.Device).Ad_(
0);},ARz:function(H){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.
Device.Device).Ad_(1);},ARy:function(H){A._GetAutoObject(A.Device.Device).Cj(0);
A._GetAutoObject(A.Device.Device).Ad_(3);},ARA:function(H){A._GetAutoObject(A.Device.
Device).Cj(0);A._GetAutoObject(A.Device.Device).Ad_(2);},HH:function(H){this.N.CS(
A.aaL(A.ach.ET));this.N.Hm(A.jV);this.N.Cu=[this,this.AmH];this.N.ADt(A.aaL(A.fl.
Ak));},AHb:function(s){this.HH(s);},Bjt:function(E){if(this.Ajd===E)return;this.
Ajd=E;A.pe([this,this.A_K],this);},A79:function(H){this.Bjt(!this.Ajd);},BkA:function(
H){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(A.Device.Device).A6(
31,true,A.jV,0,null);},MI:function(H){},BCm:function(s){this.MI(s);},N9:function(
H){},BCl:function(s){this.N9(s);},BbW:function(H){var FD=A._GetAutoObject(A.Device.
Device).D1;FD=FD+1;if(FD>=4)FD=0;A._GetAutoObject(A.Device.Device).Ad_(FD);},BwY:
function(H){var FD=A._GetAutoObject(A.Device.Device).D1;FD=FD-1;if(FD<0)FD=3;A._GetAutoObject(
A.Device.Device).Ad_(FD);},Ah5:function(H){},AX_:function(s){this.Ah5(s);},_Init:
function(aArg){C.AC._Init.call(this,aArg);this.__proto__=C.Ta;this.Background.G(
B9);this.N.Y(true);this.N.Ow(true);this.N.Ox(true);this.Dp(C.ANy);this.Init(aArg
);},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.K5)&&(B._cycle!=D
))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"};C.D1={AQ:null
,AttrSet:null,De:null,CI:function(H){},AG2:function(s){this.CI(s);},Fb:function(
H){A._GetAutoObject(A.Device.Device).Bq.Bm(null);},Axk:function(s){this.Fb(s);},
YQ:function(E){if(A.aa0(this.AQ,E))return;this.AQ=E;this.De.BP=E;},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(this.AttrSet={
I:this},0);A.Core.BO._Init.call(this.De={I:this},0);this.__proto__=C.D1;this.G(SJ
);this.AttrSet.A69(A.jb.FU);this.AttrSet.A68(A.jb.HY);this.AttrSet.AgF(A.jb.Text
);this.De.Filter=1;this.AttrSet.AgI(A.aaL(A.fl.Ak));this.AttrSet.A65(null);},_Done:
function(){this.__proto__=A.Core.O;this.AttrSet._Done();this.De._Done();A.Core.O.
_Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AttrSet._ReInit(
);this.De._ReInit();this.AttrSet.AgI(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.
Core.O._Mark.call(this,D);if((B=this.AQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AttrSet)._cycle!=D)B._Mark(B._cycle=D);if((B=this.De)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::AnimalInfoContent"};C.AKy={Rs:null,
Aac:null,S$:null,S_:null,Rw:null,Qg:null,Rx:null,Ru:null,Rv:null,Rt:null,CT:function(
){var B;this.Rs.B$(this);this.Aac.B$(this);this.S$.B$(this);this.S_.B$(this);this.
Rw.B$(this);this.Qg.B$(this);this.Rx.B$(this);this.Ru.B$(this);this.Rv.B$(this);
this.Rt.B$(this);},Hu:function(H){C.Ry.Hu.call(this,H);switch(A._GetAutoObject(A.
Device.Helper).X.AnimalType){case 0:case 2:{this.Rs.Y(true);this.Aac.Y(false);this.
Ru.Y(false);this.Rv.Y(false);this.Rt.Y(false);this.Rw.Y(true);this.Qg.Y(true);this.
Rx.Y(true);}break;case 1:{this.Rs.Y(false);this.Aac.Y(true);this.Ru.Y(true);this.
Rv.Y(true);this.Rt.Y(true);this.Rw.Y(false);this.Qg.Y(false);this.Rx.Y(false);}break;
default:A.ab5("%s%e",Ar4,A._GetAutoObject(A.Device.Helper).X.AnimalType);}A.pe([
this,this.MD],this);},_Init:function(aArg){C.Ry._Init.call(this,aArg);C.Rs._Init.
call(this.Rs={I:this},0);C.AKt._Init.call(this.Aac={I:this},0);C.S$._Init.call(this.
S$={I:this},0);C.S_._Init.call(this.S_={I:this},0);C.Rw._Init.call(this.Rw={I:this
},0);C.Qg._Init.call(this.Qg={I:this},0);C.Rx._Init.call(this.Rx={I:this},0);C.Ru.
_Init.call(this.Ru={I:this},0);C.Rv._Init.call(this.Rv={I:this},0);C.Rt._Init.call(
this.Rt={I:this},0);this.__proto__=C.AKy;this.Rs.G(BC);this.Rs.Aj(true);this.Rs.
Bf(false);this.Aac.G(KL);this.Aac.Aj(true);this.Aac.Bf(false);this.S$.G(Q2);this.
S$.Aj(true);this.S$.Bf(true);this.S_.G(WE);this.S_.Aj(true);this.S_.Bf(false);this.
Rw.G(Aky);this.Rw.Aj(true);this.Rw.Bf(true);this.Qg.G(AnD);this.Qg.Aj(true);this.
Qg.Bf(false);this.Rx.G(Ar5);this.Rx.Aj(true);this.Rx.Bf(true);this.Ru.G(WD);this.
Ru.Aj(true);this.Ru.Bf(true);this.Rv.G(AWF);this.Rv.Aj(true);this.Rv.Bf(false);this.
Rt.G(AWG);this.Rt.Aj(true);this.Rt.Bf(true);this.J(this.Rs,0);this.J(this.Aac,0);
this.J(this.S$,0);this.J(this.S_,0);this.J(this.Rw,0);this.J(this.Qg,0);this.J(this.
Rx,0);this.J(this.Ru,0);this.J(this.Rv,0);this.J(this.Rt,0);},_Done:function(){this.
__proto__=C.Ry;this.Rs._Done();this.Aac._Done();this.S$._Done();this.S_._Done();
this.Rw._Done();this.Qg._Done();this.Rx._Done();this.Ru._Done();this.Rv._Done();
this.Rt._Done();C.Ry._Done.call(this);},_ReInit:function(){C.Ry._ReInit.call(this
);this.Rs._ReInit();this.Aac._ReInit();this.S$._ReInit();this.S_._ReInit();this.
Rw._ReInit();this.Qg._ReInit();this.Rx._ReInit();this.Ru._ReInit();this.Rv._ReInit(
);this.Rt._ReInit();this.CT();},_Mark:function(D){var B;C.Ry._Mark.call(this,D);
if((B=this.Rs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aac)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.S$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S_)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Rw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qg).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Rx)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Ru)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Rt)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfos"
};C.AKM={Akc:function(LQ){if(!LQ)return;var Fi=A._NewObject(A.Device.Filter,0);var
HN=A._NewObject(A.Device.Int32FilterCriterion,0);HN.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).X.Id,true);Fi.CZ(HN);var Acs=A._NewObject(A.Device.Int32FilterCriterion
,0);Acs.Initialize(8,2,0,true);Fi.CZ(Acs);LQ.Bm(Fi);},ACk:function(){if(!A._GetAutoObject(
A.Device.Device).Bq)return false;var OY=A._GetAutoObject(A.Device.Device).Bq.Ch(
);if(OY<2)return false;var Byj=A._GetAutoObject(A.Device.Device).Bq.Hy(0,6);var Byk=
A._GetAutoObject(A.Device.Device).Bq.Hy(OY-1,6);var AZE=A._NewObject(A.Core.Bt,0
);AZE.Initialize(Byj);var A1A=A._NewObject(A.Core.Bt,0);A1A.Initialize(Byk);if((
AZE.Abi()!==A1A.Abi())||(AZE.Year!==A1A.Year))return true;else return false;},_Init:
function(aArg){C.Aae._Init.call(this,aArg);this.__proto__=C.AKM;this.AQ_(C.AFC);
this.AQ$(C.ABQ);this.AQ1(C.Qg);this.AqR(A.aaR(A.acf.ATn));this.Do(A.aaR(A.acf.AjH
));},_ReInit:function(){C.Aae._ReInit.call(this);this.AqR(A.aaR(A.acf.ATn));this.
Do(A.aaR(A.acf.AjH));},_className:"Application::AnimalWeights"};C.AKH={Akc:function(
LQ){if(!LQ)return;var Fi=A._NewObject(A.Device.Filter,0);var HN=A._NewObject(A.Device.
Int32FilterCriterion,0);HN.Initialize(1,0,A._GetAutoObject(A.Device.Helper).X.Id
,true);Fi.CZ(HN);var AzO=A._NewObject(A.Device.Int32FilterCriterion,0);AzO.Initialize(
7,2,0,true);Fi.CZ(AzO);LQ.Bm(Fi);},ACk:function(){return A._GetAutoObject(A.Device.
Device).Bq.Ch()>0;},_Init:function(aArg){C.Aae._Init.call(this,aArg);this.__proto__=
C.AKH;this.AQ_(C.ASN);this.AQ$(C.ANK);this.AQ1(C.S$);this.AqR(A.aaR(A.acf.A5h));
this.Do(A.aaR(A.acf.Aqt));},_ReInit:function(){C.Aae._ReInit.call(this);this.AqR(
A.aaR(A.acf.A5h));this.Do(A.aaR(A.acf.Aqt));},_className:"Application::AnimalTemperatures"
};C.ARV={U3:null,U4:null,Xr:null,AfU:null,Kk:null,AN:null,A8:null,D4:null,Lg:null
,Ana:null,KH:null,KI:null,Y8:null,Y9:null,Init:function(aArg){},Bg:function(aSize
){C.A$.Bg.call(this,aSize);this.Background.G(A.abN(this.Background.M,((aSize[0]*
60)/100)|0));this.V.G(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AN.G([this.V.M[
2]-1,0,this.V.M[2]+1,aSize[1]]);this.Kk.G([this.V.M[2],0,this.Background.M[2],aSize[
1]]);this.A8.G([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
U3.G([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.D4.G([this.
U3.M[2]-1,0,this.U3.M[2]+1,aSize[1]]);this.U4.G([this.U3.M[2],0,this.U3.M[2]+22,
aSize[1]]);this.Lg.G([this.U4.M[2]-1,0,this.U4.M[2]+1,aSize[1]]);this.Xr.G([this.
U4.M[2],0,this.U4.M[2]+22,aSize[1]]);this.Ana.G([this.Xr.M[2]-1,0,this.Xr.M[2]+1
,aSize[1]]);this.AfU.G([this.Xr.M[2],0,aSize[0],aSize[1]]);this.KH.G(this.U3.M);
this.KI.G(this.U4.M);this.Y8.G(this.Xr.M);this.Y9.G(this.AfU.M);},Ai:function(Ae
){C.A$.Ai.call(this,Ae);this.Kk.L(this.V.AP);},B$:function(Ac){if(!this.AW)return;
this.Hr=Ac;if(!!this.AW){var AkT=this.AW.Hy(Ac,6);var AYV=this.AW.IU(Ac,3);var AZA=
this.AW.IU(Ac,2);var AZz=this.AW.IU(Ac,5);var A1s=this.AW.IU(Ac,4);this.U(A._GetAutoObject(
A.acj.Ky).ABl(AkT));this.Kk.Q(A._GetAutoObject(A.acj.Ky).A4d(AkT));this.U3.L(A._GetAutoObject(
A.acj.Assessment).P4(AYV));this.U4.L(A._GetAutoObject(A.acj.Assessment).P4(AZA));
this.Xr.L(A._GetAutoObject(A.acj.Assessment).P4(AZz));this.AfU.L(A._GetAutoObject(
A.acj.Assessment).P4(A1s));this.KH.L(A._GetAutoObject(A.acj.Assessment).W1(AYV));
this.KI.L(A._GetAutoObject(A.acj.Assessment).W1(AZA));this.Y8.L(A._GetAutoObject(
A.acj.Assessment).W1(AZz));this.Y9.L(A._GetAutoObject(A.acj.Assessment).W1(A1s));
this.KH.Y(AYV===5);this.KI.Y(AZA===5);this.Y8.Y(AZz===5);this.Y9.Y(A1s===5);this.
An();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AI._Init.call(this.
U3={I:this},0);A.acg.AI._Init.call(this.U4={I:this},0);A.acg.AI._Init.call(this.
Xr={I:this},0);A.acg.AI._Init.call(this.AfU={I:this},0);A.acg.Text._Init.call(this.
Kk={I:this},0);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.
A8={I:this},0);A.acg.AI._Init.call(this.D4={I:this},0);A.acg.AI._Init.call(this.
Lg={I:this},0);A.acg.AI._Init.call(this.Ana={I:this},0);A.acg.Text._Init.call(this.
KH={I:this},0);A.acg.Text._Init.call(this.KI={I:this},0);A.acg.Text._Init.call(this.
Y8={I:this},0);A.acg.Text._Init.call(this.Y9={I:this},0);this.__proto__=C.ARV;this.
V.G(OK);this.U3.G(AWH);this.U4.G(AWI);this.Xr.G(AWJ);this.AfU.G(AWK);this.Kk.Q(SI
);this.Kk.L(A.jb.Text);this.AN.L(A.jb.Bb);this.A8.L(A.jb.Bb);this.D4.L(A.jb.Bb);
this.Lg.L(A.jb.Bb);this.Ana.L(A.jb.Bb);this.KH.G(AWL);this.KH.Q(Q3);this.KI.G(AWM
);this.KI.Q(Q3);this.Y8.G(AWN);this.Y8.Q(Q3);this.Y9.G(AWO);this.Y9.Q(Q3);this.J(
this.U3,0);this.J(this.U4,0);this.J(this.Xr,0);this.J(this.AfU,0);this.J(this.Kk
,0);this.J(this.AN,0);this.J(this.A8,0);this.J(this.D4,0);this.J(this.Lg,0);this.
J(this.Ana,0);this.J(this.KH,0);this.J(this.KI,0);this.J(this.Y8,0);this.J(this.
Y9,0);this.Kk.S(A.aaL(A.fl.Ah));this.KH.S(A.aaL(A.fl.Ah));this.KI.S(A.aaL(A.fl.Ah
));this.Y8.S(A.aaL(A.fl.Ah));this.Y9.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.U3._Done();this.U4._Done();this.Xr._Done();this.AfU._Done(
);this.Kk._Done();this.AN._Done();this.A8._Done();this.D4._Done();this.Lg._Done(
);this.Ana._Done();this.KH._Done();this.KI._Done();this.Y8._Done();this.Y9._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.U3._ReInit(
);this.U4._ReInit();this.Xr._ReInit();this.AfU._ReInit();this.Kk._ReInit();this.
AN._ReInit();this.A8._ReInit();this.D4._ReInit();this.Lg._ReInit();this.Ana._ReInit(
);this.KH._ReInit();this.KI._ReInit();this.Y8._ReInit();this.Y9._ReInit();this.Kk.
S(A.aaL(A.fl.Ah));this.KH.S(A.aaL(A.fl.Ah));this.KI.S(A.aaL(A.fl.Ah));this.Y8.S(
A.aaL(A.fl.Ah));this.Y9.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.U3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U4)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Xr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfU)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Kk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ana)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Y8)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Y9)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RatingListItem"};C.ANI={FZ:null,Ym:null,Yi:null,Yj:null,Yk:null,Yl:
null,_Init:function(aArg){C.Er._Init.call(this,aArg);A.acg.Text._Init.call(this.
FZ={I:this},0);A.acg.Text._Init.call(this.Ym={I:this},0);A.acg.Text._Init.call(this.
Yi={I:this},0);A.acg.Text._Init.call(this.Yj={I:this},0);A.acg.Text._Init.call(this.
Yk={I:this},0);A.acg.Text._Init.call(this.Yl={I:this},0);this.__proto__=C.ANI;this.
Background.L(A.jb.Text);this.FZ.G(AGL);this.FZ.A2(0x11);this.FZ.Q(A.aaR(A.acf.Date
));this.FZ.L(A.jb.Bh);this.Ym.G(AGD);this.Ym.A2(0x12);this.Ym.Q(A.aaR(A.acf.Bt));
this.Ym.L(A.jb.Bh);this.Yi.G(AWP);this.Yi.A2(0x12);this.Yi.Q(A.aaR(A.acf.ARX));this.
Yi.L(A.jb.Bh);this.Yj.G(AWQ);this.Yj.A2(0x12);this.Yj.Q(A.aaR(A.acf.ARY));this.Yj.
L(A.jb.Bh);this.Yk.G(AWR);this.Yk.A2(0x12);this.Yk.Q(A.aaR(A.acf.AMx));this.Yk.L(
A.jb.Bh);this.Yl.G(AWS);this.Yl.A2(0x12);this.Yl.Q(A.aaR(A.acf.ALy));this.Yl.L(A.
jb.Bh);this.J(this.FZ,0);this.J(this.Ym,0);this.J(this.Yi,0);this.J(this.Yj,0);this.
J(this.Yk,0);this.J(this.Yl,0);this.FZ.S(A.aaL(A.fl.Ah));this.Ym.S(A.aaL(A.fl.Ah
));this.Yi.S(A.aaL(A.fl.Ah));this.Yj.S(A.aaL(A.fl.Ah));this.Yk.S(A.aaL(A.fl.Ah));
this.Yl.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Er;this.FZ._Done();
this.Ym._Done();this.Yi._Done();this.Yj._Done();this.Yk._Done();this.Yl._Done();
C.Er._Done.call(this);},_ReInit:function(){C.Er._ReInit.call(this);this.FZ._ReInit(
);this.Ym._ReInit();this.Yi._ReInit();this.Yj._ReInit();this.Yk._ReInit();this.Yl.
_ReInit();this.FZ.Q(A.aaR(A.acf.Date));this.Ym.Q(A.aaR(A.acf.Bt));this.Yi.Q(A.aaR(
A.acf.ARX));this.Yj.Q(A.aaR(A.acf.ARY));this.Yk.Q(A.aaR(A.acf.AMx));this.Yl.Q(A.
aaR(A.acf.ALy));this.FZ.S(A.aaL(A.fl.Ah));this.Ym.S(A.aaL(A.fl.Ah));this.Yi.S(A.
aaL(A.fl.Ah));this.Yj.S(A.aaL(A.fl.Ah));this.Yk.S(A.aaL(A.fl.Ah));this.Yl.S(A.aaL(
A.fl.Ah));},_Mark:function(D){var B;C.Er._Mark.call(this,D);if((B=this.FZ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ym)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Yi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yl)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineRatings"};C.AKB={Akc:function(LQ){if(!LQ)return;
var Fi=A._NewObject(A.Device.Filter,0);var HN=A._NewObject(A.Device.Int32FilterCriterion
,0);HN.Initialize(1,0,A._GetAutoObject(A.Device.Helper).X.Id,true);Fi.CZ(HN);var
Azw=A._NewObject(A.Device.AssessmentFilterCriterion,0);Azw.Initialize(3,5,0,true
);Fi.CZ(Azw);LQ.Bm(Fi);},ACk:function(){if(!A._GetAutoObject(A.Device.Device).Bq
)return false;return A._GetAutoObject(A.Device.Device).Bq.Ch()>0;},_Init:function(
aArg){C.Aae._Init.call(this,aArg);this.__proto__=C.AKB;this.AQ_(C.ARV);this.AQ$(
C.ANI);this.AQ1(C.S_);this.AqR(A.aaR(A.acf.Av8));this.Do(A.aaR(A.acf.AmG));},_ReInit:
function(){C.Aae._ReInit.call(this);this.AqR(A.aaR(A.acf.Av8));this.Do(A.aaR(A.acf.
AmG));},_className:"Application::AnimalRatings"};C.Is={B3:null,Z:null,V:null,TX:
5,U:function(E){C.IR.U.call(this,E);this.V.Q(E);},C5:function(E){C.IR.C5.call(this
,E);this.V.L(E);},S:function(E){if(this.B3===E)return;this.B3=E;this.V.S(this.B3
);},AtM:function(H){var B;var Nm=(A.Core.Z.isPrototypeOf(H)?H:null);if(!Nm)return;
if(((B=Nm.C_(0x1))[2]-B[0])>((B=Nm.M)[2]-B[0]))this.S(A.aaL(A.fl.H$));},Ka:function(
E){if(this.TX===E)return;this.TX=E;this.Z.G([].concat(E,this.Z.M.slice(1,4)));},
Azq:function(H){A.pe([this,this.AtM],this);},_Init:function(aArg){C.IR._Init.call(
this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);A.acg.Text._Init.call(this.V={
I:this},0);this.__proto__=C.Is;this.Z.AV(0x3F);this.Z.G(AGN);this.Z.A7R(5);this.
Z.J$(3);this.V.AV(0x34);this.V.G(ZC);this.V.IZ(true);this.V.A2(0x11);this.V.L(A.
jb.Text);this.V.Aj(true);this.J(this.Z,0);this.J(this.V,0);this.Z.Eh=[this,this.
Azq];this.V.S(A.aaL(A.fl.J6));},_Done:function(){this.__proto__=C.IR;this.Z._Done(
);this.V._Done();C.IR._Done.call(this);},_ReInit:function(){C.IR._ReInit.call(this
);this.Z._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.J6));},_Mark:function(D){
var B;C.IR._Mark.call(this,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.Rs={Ae8:0,Ai:function(Ae){C.Fj.
Ai.call(this,Ae);this.U(A.aaR(A.acf.S9));if(this.Ae8>=0)this.Ke((this.Ae8.toFixed(
)+CJ)+A.aaR(A.acf.J3));else this.Ke(A.aaR(A.acf.Unknown));},B$:function(H){C.Fj.
B$.call(this,H);if(!A._GetAutoObject(A.Device.Helper).X.DateOfBirth)this.Ae8=-1;
else this.Ae8=A._GetAutoObject(A.Device.Helper).X.S9();this.An();},_Init:function(
aArg){C.Fj._Init.call(this,aArg);this.__proto__=C.Rs;},_className:"Application::AnimalInfoItemAge"
};C.Rw={A14:0,Ai:function(Ae){C.Fj.Ai.call(this,Ae);this.U(A.aaR(A.acf.AeM));if(
this.A14>0)this.Ke((A._GetAutoObject(A.Device.Converter).Anu(this.A14)+CJ)+A._GetAutoObject(
A.acj.DI).AcI());else this.Ke(A.aaR(A.acf.Unknown));},B$:function(H){C.Fj.B$.call(
this,H);this.A14=A._GetAutoObject(A.Device.Helper).X.LastBodyWeight;this.An();},
_Init:function(aArg){C.Fj._Init.call(this,aArg);this.__proto__=C.Rw;},_className:
"Application::AnimalInfoItemWeight"};C.S$={Z:null,D9:null,Eo:null,E1:null,PD:null
,E0:null,PE:null,AiA:0,OX:0,CT:function(){this.An();},Ai:function(Ae){C.Jy.Ai.call(
this,Ae);this.U(A.aaR(A.acf.BeR));this.E1.Q(this.AiA.toFixed());this.E0.Q(this.OX.
toFixed());if(!!this.AiA||!!this.OX)this.PE.Q(AWT+(this.AiA+this.OX).toFixed());
else this.PE.Q(A.aaR(A.acf.AP_));},B$:function(H){C.Jy.B$.call(this,H);var Akj;Akj=
A._GetAutoObject(A.Device.Helper).BfH(A._GetAutoObject(A.Device.Device).Bq,9,A._GetAutoObject(
A.Device.Helper).X.Id,0,0);this.AiA=Akj.Get(2);this.OX=Akj.Get(1);this.An();},C5:
function(E){C.Jy.C5.call(this,E);this.PD.L(E);this.PE.L(E);},ArP:function(H){if(
!!this.AiA||!!this.OX){this.E1.Y(true);this.PD.Y(true);this.E0.Y(true);}else{this.
E1.Y(false);this.PD.Y(false);this.E0.Y(false);}this.D9.G(this.E1.M);this.D9.Y(this.
E1.Fc());this.Eo.G(this.E0.M);this.Eo.Y(this.E0.Fc());},AtM:function(H){var B;var
Nm=(A.Core.Z.isPrototypeOf(H)?H:null);if(!Nm)return;if(((B=Nm.C_(0x1))[2]-B[0])>((
B=Nm.M)[2]-B[0])){this.E0.S(A.aaL(A.fl.Ak));this.PD.S(A.aaL(A.fl.Ak));this.E1.S(
A.aaL(A.fl.Ak));this.PE.S(A.aaL(A.fl.Ak));}},Azq:function(H){A.pe([this,this.AtM
],this);},_Init:function(aArg){C.Jy._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AI._Init.call(this.D9={I:this},0);A.acg.AI._Init.call(this.Eo={
I:this},0);A.acg.Text._Init.call(this.E1={I:this},0);A.acg.Text._Init.call(this.
PD={I:this},0);A.acg.Text._Init.call(this.E0={I:this},0);A.acg.Text._Init.call(this.
PE={I:this},0);this.__proto__=C.S$;this.Z.G(Ahh);this.Z.Bkk(0);this.Z.J$(3);this.
D9.G(AWU);this.D9.L(A.jb.HY);this.Eo.G(Axa);this.Eo.L(A.jb.FU);this.E1.AV(0x34);
this.E1.G(ZC);this.E1.HF(2);this.E1.IZ(true);this.E1.Q(ZA);this.E1.L(A.jb.Text);
this.E1.Aj(true);this.PD.AV(0x34);this.PD.G(ZC);this.PD.IZ(true);this.PD.Q(AGu);
this.PD.L(A.jb.Text);this.PD.Aj(true);this.E0.AV(0x34);this.E0.G(ZC);this.E0.HF(
2);this.E0.IZ(true);this.E0.Q(ZA);this.E0.L(A.jb.Bh);this.E0.Aj(true);this.PE.AV(
0x34);this.PE.G(ZC);this.PE.IZ(true);this.PE.Q(SI);this.PE.L(A.jb.Text);this.PE.
Aj(true);this.J(this.Z,0);this.J(this.D9,0);this.J(this.Eo,0);this.J(this.E1,0);
this.J(this.PD,0);this.J(this.E0,0);this.J(this.PE,0);this.Z.Eh=[this,this.Azq];
this.E1.QI([this,this.ArP]);this.E1.S(A.aaL(A.fl.Ah));this.PD.S(A.aaL(A.fl.Ah));
this.E0.QI([this,this.ArP]);this.E0.S(A.aaL(A.fl.Ah));this.PE.S(A.aaL(A.fl.Ah));
},_Done:function(){this.__proto__=C.Jy;this.Z._Done();this.D9._Done();this.Eo._Done(
);this.E1._Done();this.PD._Done();this.E0._Done();this.PE._Done();C.Jy._Done.call(
this);},_ReInit:function(){C.Jy._ReInit.call(this);this.Z._ReInit();this.D9._ReInit(
);this.Eo._ReInit();this.E1._ReInit();this.PD._ReInit();this.E0._ReInit();this.PE.
_ReInit();this.E1.S(A.aaL(A.fl.Ah));this.PD.S(A.aaL(A.fl.Ah));this.E0.S(A.aaL(A.
fl.Ah));this.PE.S(A.aaL(A.fl.Ah));this.CT();},_Mark:function(D){var B;C.Jy._Mark.
call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E1
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.E0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItemTemperatureRatings"};C.Qg={FH:0,H4:0
,AZ7:false,Ai:function(Ae){C.Fj.Ai.call(this,Ae);this.U(AWV+A.aaR(A.acf.AFx));if(
this.AZ7){this.Ke((A._GetAutoObject(A.Device.Converter).NU(this.FH,2,true)+CJ)+A.
_GetAutoObject(A.acj.DI).ZQ());this.Background.L(A._GetAutoObject(A.acj.DI).Ays(
this.FH,this.H4));this.C5(A._GetAutoObject(A.acj.DI).Ayu(this.FH,this.H4));}else{
this.Ke(A.aaR(A.acf.Unknown));this.Background.L(A.jb.CM);this.C5(A.jb.Text);}},B$:
function(H){C.Fj.B$.call(this,H);var Lq=A._GetAutoObject(A.Device.Helper).MB(A._GetAutoObject(
A.Device.Helper).X.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).X.TimestampLastWeighing
);if(!!Lq){this.AZ7=true;this.FH=A._GetAutoObject(A.acj.DI).AkQ(Lq,A._GetAutoObject(
A.Device.Helper).X.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).X.LastBodyWeight
);}else{this.AZ7=false;this.FH=0;}this.H4=A._GetAutoObject(A.Device.Helper).X.AnimalType;
this.An();},_Init:function(aArg){C.Fj._Init.call(this,aArg);this.__proto__=C.Qg;
},_className:"Application::AnimalInfoItemAvgWeightGain"};C.S_={Z:null,FI:null,D9:
null,Eo:null,Ms:null,E1:null,E0:null,OD:null,ZS:0,AiA:0,OX:0,CT:function(){this.
An();},Ai:function(Ae){C.Jy.Ai.call(this,Ae);this.U(A.aaR(A.acf.Av8));this.Ms.Q(
this.ZS.toFixed());this.E1.Q(this.AiA.toFixed());this.E0.Q(this.OX.toFixed());},
B$:function(H){C.Jy.B$.call(this,H);var Akj;Akj=A._GetAutoObject(A.Device.Helper
).A4i(A._GetAutoObject(A.Device.Device).Bq,A._GetAutoObject(A.Device.Helper).X.Id
,0,0);this.ZS=Akj.Get(3);this.AiA=Akj.Get(2);this.OX=Akj.Get(1);this.An();},ArP:
function(H){if((!!this.ZS||!!this.AiA)||!!this.OX){this.Ms.Y(true);this.E1.Y(true
);this.E0.Y(true);this.OD.Y(false);}else{this.Ms.Y(false);this.E1.Y(false);this.
E0.Y(false);this.OD.Y(true);}this.FI.G(this.Ms.M);this.FI.Y(this.Ms.Fc());this.D9.
G(this.E1.M);this.D9.Y(this.E1.Fc());this.Eo.G(this.E0.M);this.Eo.Y(this.E0.Fc()
);},AtM:function(H){var B;var Nm=(A.Core.Z.isPrototypeOf(H)?H:null);if(!Nm)return;
if(((B=Nm.C_(0x1))[2]-B[0])>((B=Nm.M)[2]-B[0])){this.E0.S(A.aaL(A.fl.Ak));this.E1.
S(A.aaL(A.fl.Ak));this.Ms.S(A.aaL(A.fl.Ak));}},Azq:function(H){A.pe([this,this.AtM
],this);},_Init:function(aArg){C.Jy._Init.call(this,aArg);A.Core.Z._Init.call(this.
Z={I:this},0);A.acg.AI._Init.call(this.FI={I:this},0);A.acg.AI._Init.call(this.D9={
I:this},0);A.acg.AI._Init.call(this.Eo={I:this},0);A.acg.Text._Init.call(this.Ms={
I:this},0);A.acg.Text._Init.call(this.E1={I:this},0);A.acg.Text._Init.call(this.
E0={I:this},0);A.acg.Text._Init.call(this.OD={I:this},0);this.__proto__=C.S_;this.
Z.AV(0x3F);this.Z.G(Ahh);this.Z.A7R(5);this.Z.J$(3);this.FI.G(AWW);this.FI.L(A.jb.
EX);this.D9.G(AWX);this.D9.L(A.jb.HY);this.Eo.G(AWY);this.Eo.L(A.jb.FU);this.Ms.
AV(0x3C);this.Ms.G(ZC);this.Ms.HF(2);this.Ms.IZ(true);this.Ms.Q(ZA);this.Ms.L(A.
jb.Text);this.Ms.Aj(true);this.E1.AV(0x3C);this.E1.G(ZC);this.E1.HF(2);this.E1.IZ(
true);this.E1.Q(ZA);this.E1.L(A.jb.Text);this.E1.Aj(true);this.E0.AV(0x3C);this.
E0.G(ZC);this.E0.HF(2);this.E0.IZ(true);this.E0.Q(ZA);this.E0.L(A.jb.Bh);this.E0.
Aj(true);this.OD.AV(0x34);this.OD.G(ZC);this.OD.IZ(true);this.OD.A2(0x11);this.OD.
Q(A.aaR(A.acf.AP_));this.OD.L(A.jb.Text);this.OD.Aj(true);this.OD.Y(false);this.
J(this.Z,0);this.J(this.FI,0);this.J(this.D9,0);this.J(this.Eo,0);this.J(this.Ms
,0);this.J(this.E1,0);this.J(this.E0,0);this.J(this.OD,0);this.Z.Eh=[this,this.Azq
];this.Ms.QI([this,this.ArP]);this.Ms.S(A.aaL(A.fl.Ah));this.E1.QI([this,this.ArP
]);this.E1.S(A.aaL(A.fl.Ah));this.E0.QI([this,this.ArP]);this.E0.S(A.aaL(A.fl.Ah
));this.OD.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Jy;this.Z._Done(
);this.FI._Done();this.D9._Done();this.Eo._Done();this.Ms._Done();this.E1._Done(
);this.E0._Done();this.OD._Done();C.Jy._Done.call(this);},_ReInit:function(){C.Jy.
_ReInit.call(this);this.Z._ReInit();this.FI._ReInit();this.D9._ReInit();this.Eo.
_ReInit();this.Ms._ReInit();this.E1._ReInit();this.E0._ReInit();this.OD._ReInit(
);this.OD.Q(A.aaR(A.acf.AP_));this.Ms.S(A.aaL(A.fl.Ah));this.E1.S(A.aaL(A.fl.Ah)
);this.E0.S(A.aaL(A.fl.Ah));this.OD.S(A.aaL(A.fl.Ah));this.CT();},_Mark:function(
D){var B;C.Jy._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ms)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E0)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemRatings"};C.AKj={_Init:function(aArg){C.AiD._Init.call(
this,aArg);this.__proto__=C.AKj;this.N.BU(A.aaR(A.acf.A5u));this.A2e=1;this.QX.CC(
A.aaL(A.fl.Ak));},_ReInit:function(){C.AiD._ReInit.call(this);this.N.BU(A.aaR(A.
acf.A5u));this.QX.CC(A.aaL(A.fl.Ak));},_className:"Application::AnimalActionActionsScreen"
};C.Gs={_Init:function(aArg){C.AiD._Init.call(this,aArg);this.__proto__=C.Gs;this.
N.BU(A.aaR(A.acf.A2S));this.NS.Q(A.aaR(A.acf.AtP));},_ReInit:function(){C.AiD._ReInit.
call(this);this.N.BU(A.aaR(A.acf.A2S));this.NS.Q(A.aaR(A.acf.AtP));},_className:
"Application::AnimalListActionsScreen"};C.AO0={Os:null,IC:null,HV:null,IA:null,Gz:
null,Alg:function(H){A.pe([this,this.Bwu],this);},Bwu:function(H){A._GetAutoObject(
C.AZ).BZ(3);},_Init:function(aArg){C.Cs._Init.call(this,aArg);C.Os._Init.call(this.
Os={I:this},0);C.B_._Init.call(this.IC={I:this},0);C.Sn._Init.call(this.HV={I:this
},0);C.AEY._Init.call(this.IA={I:this},0);C.QQ._Init.call(this.Gz={I:this},0);this.
__proto__=C.AO0;var B;this.JH(A.aaR(A.acf.A8R));this.IC.G(Ahg);this.IC.Aj(true);
this.IC.U(A.aaR(A.acf.Language));this.IC.A7A(100);this.HV.G(WF);this.HV.Aj(true);
this.HV.U(A.aaR(A.acf.Date));this.HV.Bf(true);this.IA.G(Ab$);this.IA.Aj(true);this.
IA.U(A.aaR(A.acf.Bt));this.Gz.G(Ahf);this.Gz.Aj(true);this.Gz.Y(true);this.Gz.U(
A.aaR(A.acf.AEx));this.Gz.Bf(true);this.Gz.Aq0(false);this.Gz.A7I(true);this.Kh(
this.Z,-1);this.Kh(this.Au,-1);this.J(this.IC,0);this.J(this.HV,0);this.J(this.IA
,0);this.J(this.Gz,0);this.IC.V3(A.aaL(A.fl.Hi));this.IC.V4(A.aaL(A.fl.Hi));this.
IC.Av([B=this.Os,B.Ce,B.Cg]);this.IC.CN(this.Os);this.HV.AgD([B=this.HV,B.Ge]);this.
HV.GB([this,this.Ea,this.G_]);this.HV.AjT(A.aaL(A.ach.Edit));this.HV.Abu([B=A._GetAutoObject(
A.Device.Helper),B.Ur,B.Us]);this.IA.AgD([B=this.IA,B.Ge]);this.IA.GB([this,this.
Ea,this.G_]);this.IA.AjT(A.aaL(A.ach.Edit));this.IA.Abu([B=A._GetAutoObject(A.Device.
Helper),B.Ur,B.Us]);this.Gz.AgD([B=this.Gz,B.Ge]);this.Gz.GB([this,this.Ea,this.
G_]);this.Gz.AjT(A.aaL(A.ach.Edit));this.Gz.Av([B=A._GetAutoObject(A.Device.Device
),B.AQC,B.AXV]);},_Done:function(){this.__proto__=C.Cs;this.Os._Done();this.IC._Done(
);this.HV._Done();this.IA._Done();this.Gz._Done();C.Cs._Done.call(this);},_ReInit:
function(){C.Cs._ReInit.call(this);this.Os._ReInit();this.IC._ReInit();this.HV._ReInit(
);this.IA._ReInit();this.Gz._ReInit();this.JH(A.aaR(A.acf.A8R));this.IC.U(A.aaR(
A.acf.Language));this.HV.U(A.aaR(A.acf.Date));this.IA.U(A.aaR(A.acf.Bt));this.Gz.
U(A.aaR(A.acf.AEx));},_Mark:function(D){var B;C.Cs._Mark.call(this,D);if((B=this.
Os)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gz)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InitializationSettingsScreen"
};C.Aae={Be:null,Fn:null,Amh:null,Al1:null,RO:null,A4B:A.jV,KA:A.jV,APp:null,APq:
null,ABL:null,CI:function(H){var B;C.D1.CI.call(this,H);A.zX([this,this.A0A],[B=
A._GetAutoObject(A.Device.Helper).X,B.QF,B.OnSetId],0);this.A0A(this);},Fb:function(
H){var B;A.z$([this,this.A0A],[B=A._GetAutoObject(A.Device.Helper).X,B.QF,B.OnSetId
],0);C.D1.Fb.call(this,H);},YQ:function(E){C.D1.YQ.call(this,E);if(A.aa0(this.AQ
,E))return;if(!!this.Be)this.Be.YQ(E);},AQ_:function(E){if(this.APp===E)return;this.
APp=E;if(!!this.Be)this.Be.NI(E);},AQ$:function(E){if(this.APq===E)return;this.APq=
E;this.BlF(this);},AQ1:function(E){if(this.ABL===E)return;this.ABL=E;A.pe([this,
this.BlE],this);},AqR:function(E){if(this.A4B===E)return;this.A4B=E;this.RO.Q(E);
},Do:function(E){if(this.KA===E)return;this.KA=E;if(!!this.Be)this.Be.Do(E);},Akc:
function(LQ){A.ab5("%s",AWZ);},ACk:function(){A.ab5("%s",Akx);return false;},Awd:
function(H){if(!!this.Be)this.HG(this.Be);this.Be=A._NewObject(C.FP,0);this.Be.G(
Asc);this.Be.YP(A._GetAutoObject(A.Device.Device).Bq);this.Be.Do(this.KA);this.Be.
NI(this.APp);this.Be.YQ(this.AQ);this.J(this.Be,0);this.Ba(this.Be);},BlF:function(
H){var B;if(!!this.Fn)this.HG(this.Fn);this.Fn=(C.Er.isPrototypeOf(B=A._NewObject(
this.APq,0))?B:null);this.Fn.G(KL);this.J(this.Fn,0);},BlE:function(H){var B;if(
!!this.Amh)this.HG(this.Amh);if(!!this.ABL&&this.ACk()){this.Amh=(C.IR.isPrototypeOf(
B=A._NewObject(this.ABL,0))?B:null);this.Amh.G(BC);this.Amh.Bf(false);this.J(this.
Amh,0);this.RO.Y(false);}else this.RO.Y(true);},A0A:function(H){this.Akc(A._GetAutoObject(
A.Device.Device).Bq);this.Awd(this);},_Init:function(aArg){C.D1._Init.call(this,
aArg);A.acg.AI._Init.call(this.Al1={I:this},0);C.CP._Init.call(this.RO={I:this},
0);this.__proto__=C.Aae;this.Al1.G(BC);this.Al1.L(A.jb.CM);this.RO.G(AF3);this.RO.
A2(0x11);this.RO.L(A.jb.Text);this.J(this.Al1,0);this.J(this.RO,0);this.RO.S(A.aaL(
A.fl.J6));this.RO.A5(A.aaL(A.fl.H$));},_Done:function(){this.__proto__=C.D1;this.
Al1._Done();this.RO._Done();C.D1._Done.call(this);},_ReInit:function(){C.D1._ReInit.
call(this);this.Al1._ReInit();this.RO._ReInit();this.RO.S(A.aaL(A.fl.J6));this.RO.
A5(A.aaL(A.fl.H$));},_Mark:function(D){var B;C.D1._Mark.call(this,D);if((B=this.
Be)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fn)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Amh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Al1)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.RO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTable"
};C.Jz={AnimalListContentToString:null,Init:function(aArg){var B;A.zX([this,this.
A$C],[B=A._GetAutoObject(A.Device.Device),B.ACU,B.AG3],0);A.pe([this,this.A$C],this
);},Dt:function(){return 4;},Gx:function(aIndex){return this.AnimalListContentToString.
B0(this.C$(aIndex));},Av:function(E){C.Ds.Av.call(this,E);A._GetAutoObject(A.Device.
Device).Abm(E);},A$C:function(H){this.R=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.abo([this,this.Ce,this.Cg],0);},_Init:function(aArg){C.Ds._Init.call(this,aArg
);A.Device.AnimalListContentToString._Init.call(this.AnimalListContentToString={
I:this},0);this.__proto__=C.Jz;this.Cv.Set(0,0);this.Cv.Set(1,1);this.Cv.Set(2,2
);this.Cv.Set(3,3);this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.AnimalListContentToString.
_Done();C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.
AnimalListContentToString._ReInit();},_Mark:function(D){var B;C.Ds._Mark.call(this
,D);if((B=this.AnimalListContentToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalListContent"};C.APu={IC:null,Yw:null,YF:null,YD:null,YG:null
,Yx:null,YB:null,YE:null,YA:null,Os:null,_Init:function(aArg){C.Cs._Init.call(this
,aArg);C.B_._Init.call(this.IC={I:this},0);C.Pv._Init.call(this.Yw={I:this},0);C.
Pv._Init.call(this.YF={I:this},0);C.Pv._Init.call(this.YD={I:this},0);C.Pv._Init.
call(this.YG={I:this},0);C.Pv._Init.call(this.Yx={I:this},0);C.Pv._Init.call(this.
YB={I:this},0);C.Pv._Init.call(this.YE={I:this},0);C.Pv._Init.call(this.YA={I:this
},0);C.Os._Init.call(this.Os={I:this},0);this.__proto__=C.APu;var B;this.JH(A.aaR(
A.acf.Settings));this.IC.G(Ahg);this.IC.Aj(true);this.IC.U(A.aaR(A.acf.Language)
);this.IC.A7A(100);this.Yw.G(Asd);this.Yw.Aj(true);this.Yw.U(A.aaR(A.acf.AAY));this.
Yw.Pz(16);this.YF.G(AnL);this.YF.Aj(true);this.YF.U(A.aaR(A.acf.AFs));this.YF.Pz(
22);this.YD.G(Ahi);this.YD.Aj(true);this.YD.U(A.aaR(A.acf.Temperature));this.YD.
Pz(17);this.YG.G(Axd);this.YG.Aj(true);this.YG.U(A.aaR(A.acf.AAV));this.YG.Pz(46
);this.Yx.G(AnM);this.Yx.Aj(true);this.Yx.U(A.aaR(A.acf.Device));this.Yx.Pz(18);
this.YB.G(AnM);this.YB.Aj(true);this.YB.U(A.aaR(A.acf.Arl));this.YB.Pz(19);this.
YE.G(AW0);this.YE.Aj(true);this.YE.U(A.aaR(A.acf.LinkTransponder));this.YE.Pz(101
);this.YA.G(Aw7);this.YA.Aj(true);this.YA.U(A.aaR(A.acf.ABc));this.YA.Pz(87);this.
J(this.IC,0);this.J(this.Yw,0);this.J(this.YF,0);this.J(this.YD,0);this.J(this.YG
,0);this.J(this.Yx,0);this.J(this.YB,0);this.J(this.YE,0);this.J(this.YA,0);this.
IC.V3(A.aaL(A.fl.Hi));this.IC.V4(A.aaL(A.fl.Hi));this.IC.Av([B=this.Os,B.Ce,B.Cg
]);this.IC.CN(this.Os);this.Yw.AQ=[B=this.Yw,B.PA];this.YF.AQ=[B=this.YF,B.PA];this.
YD.AQ=[B=this.YD,B.PA];this.YG.AQ=[B=this.YG,B.PA];this.Yx.AQ=[B=this.Yx,B.PA];this.
YB.AQ=[B=this.YB,B.PA];this.YE.AQ=[B=this.YE,B.PA];this.YA.AQ=[B=this.YA,B.PA];}
,_Done:function(){this.__proto__=C.Cs;this.IC._Done();this.Yw._Done();this.YF._Done(
);this.YD._Done();this.YG._Done();this.Yx._Done();this.YB._Done();this.YE._Done(
);this.YA._Done();this.Os._Done();C.Cs._Done.call(this);},_ReInit:function(){C.Cs.
_ReInit.call(this);this.IC._ReInit();this.Yw._ReInit();this.YF._ReInit();this.YD.
_ReInit();this.YG._ReInit();this.Yx._ReInit();this.YB._ReInit();this.YE._ReInit(
);this.YA._ReInit();this.Os._ReInit();this.JH(A.aaR(A.acf.Settings));this.IC.U(A.
aaR(A.acf.Language));this.Yw.U(A.aaR(A.acf.AAY));this.YF.U(A.aaR(A.acf.AFs));this.
YD.U(A.aaR(A.acf.Temperature));this.YG.U(A.aaR(A.acf.AAV));this.Yx.U(A.aaR(A.acf.
Device));this.YB.U(A.aaR(A.acf.Arl));this.YE.U(A.aaR(A.acf.LinkTransponder));this.
YA.U(A.aaR(A.acf.ABc));},_Mark:function(D){var B;C.Cs._Mark.call(this,D);if((B=this.
IC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.YF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YD)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.YG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Yx)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.YA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Os
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MainSettingsScreen"};
C.AKw={EH:null,Init:function(aArg){this.EH.AgM(A._NewObject(A.Core.Bt,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dx()).Format(A.aaR(A.acf.Af$)));},AR2:function(
){this.EH.Ad$(this.AMY());this.ZU=!this.EH.EP.AR;},Aie:function(H){this.EH.AgM(A.
_NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dx()).Format(
A.aaR(A.acf.Af$)));this.AR2();if(A._GetAutoObject(A.Device.Helper).X.TimestampLastTemperature>
0)this.Do(A.aaR(A.acf.A5I));else this.Do(A.aaR(A.acf.Aqt));this.An();},AMY:function(
){var Bz=A._NewObject(C.ApB,0);var P1=A._GetAutoObject(A.Device.Helper).AMb(A._GetAutoObject(
A.Device.Helper).Dx());var Dl=A._GetAutoObject(A.Device.Helper).Apx(P1-(86400*this.
Mj));Bz.AmU(AW1);Bz.QG([].concat(0,Bz.FV.slice(1,4)));Bz.QG(A.abN(Bz.FV,(P1-Dl)|
0));Bz.QG(A.abP(Bz.FV,3400));Bz.QG([].concat(Bz.FV.slice(0,3),4200));var Gn=A._GetAutoObject(
A.Device.Device).Bq.Ch();Bz.AvE(Gn);Bz.XL();if(Gn>0){var P=0;while(P<Gn){var Ao_=
A._GetAutoObject(A.Device.Device).Bq.CA(P,7);var Ao$=A._GetAutoObject(A.Device.Device
).Bq.Hy(P,6)-Dl;if(Ao_>0)Bz.Aps(Ao$,Ao_);P=P+1;}}return Bz;},_Init:function(aArg
){C.KY._Init.call(this,aArg);C.ApZ._Init.call(this.EH={I:this},0);this.__proto__=
C.AKw;this.EH.G(AW2);this.EH.U(A.aaR(A.acf.Temperature));this.EH.ADw(C.AFc);this.
J(this.EH,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.KY;this.EH._Done(
);C.KY._Done.call(this);},_ReInit:function(){C.KY._ReInit.call(this);this.EH._ReInit(
);this.EH.U(A.aaR(A.acf.Temperature));},_Mark:function(D){var B;C.KY._Mark.call(
this,D);if((B=this.EH)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"
};C.AKx={Zm:null,OG:null,Af5:null,ZU:false,Init:function(aArg){this.Zm.AgM(A._NewObject(
A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dx()).Format(A.aaR(A.acf.
Af$)));},Ai:function(Ae){C.D1.Ai.call(this,Ae);this.Af5.Y(this.ZU);},CI:function(
H){var B;C.D1.CI.call(this,H);A.zX([this,this.Aie],[B=A._GetAutoObject(A.Device.
Helper),B.Ur,B.Us],0);A.zV([this,this.Aie],A._GetAutoObject(A.Device.Device).Bq,
0);A.zX([this,this.Alv],[B=A._GetAutoObject(A.Device.Helper).X,B.QF,B.OnSetId],0
);A.pe([this,this.Alv],this);},Fb:function(H){var B;A.z$([this,this.Aie],[B=A._GetAutoObject(
A.Device.Helper),B.Ur,B.Us],0);A.z9([this,this.Aie],A._GetAutoObject(A.Device.Device
).Bq,0);A.z$([this,this.Alv],[B=A._GetAutoObject(A.Device.Helper).X,B.QF,B.OnSetId
],0);C.D1.Fb.call(this,H);},Alv:function(H){var Fi=A._NewObject(A.Device.Filter,
0);var HN=A._NewObject(A.Device.Int32FilterCriterion,0);HN.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).X.Id,true);Fi.CZ(HN);A._GetAutoObject(A.Device.Device).Bq.Bm(Fi
);},Aie:function(H){this.Zm.AgM(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dx()).Format(A.aaR(A.acf.Af$)));this.Bk5();this.An();},Bk5:function(
){var B;var Gn=A._GetAutoObject(A.Device.Device).Bq.Ch();var KW=A._NewObject(C.ApB
,0);var US=A._NewObject(C.ApB,0);var P1=A._GetAutoObject(A.Device.Helper).AMb(A.
_GetAutoObject(A.Device.Helper).Dx());var Dl=A._GetAutoObject(A.Device.Helper).Apx(
A._GetAutoObject(A.Device.Helper).X.DateOfBirth);KW.QG([].concat(0,KW.FV.slice(1
,4)));KW.QG(A.abN(KW.FV,(P1-Dl)|0));KW.QG(A.abP(KW.FV,0));KW.QG([].concat(KW.FV.
slice(0,3),150000));KW.AmU(AW3);US.QG([].concat(0,US.FV.slice(1,4)));US.QG(A.abN(
US.FV,(P1-Dl)|0));US.QG(A.abP(US.FV,0));US.QG([].concat(US.FV.slice(0,3),1500));
US.AmU(AW4);KW.AvE(Gn);KW.XL();US.AvE(Gn);US.XL();if(Gn>0){var P=0;var W4=0;var AyP=
0;var AIn=0;var AZF=0;var Bae=true;while(P<Gn){var Alq=A._GetAutoObject(A.Device.
Device).Bq.CA(P,8);var Z6=A._GetAutoObject(A.Device.Device).Bq.Hy(P,6)-Dl;if(Alq>
0){KW.Aps(Z6,Alq);if(!AZF){AZF=Z6;AIn=Alq;}if(AyP>0){var Lq=A._GetAutoObject(A.Device.
Helper).MB(AyP,Z6);if(!!Lq){var FH=A._GetAutoObject(A.acj.DI).AkQ(Lq,W4,Alq);if(
Bae){US.Aps(AyP,FH);Bae=false;}US.Aps(Z6,FH);}}W4=Alq;AyP=Z6;}P=P+1;}var Ac6=A.aaR(
A.acf.BdQ);var FH=A._GetAutoObject(A.Device.Helper).BfJ(AZF,AyP,AIn,W4);Ac6=A._GetAutoObject(
A.Device.Helper).NO(Ac6,Q0,FH.toFixed());Ac6=A._GetAutoObject(A.Device.Helper).NO(
Ac6,AwR,A._GetAutoObject(A.acj.DI).ZQ());this.OG.H_.Q(Ac6);}this.ZU=!KW.AR;if(this.
ZU)this.OG.H_.Q(A.jV);(C.OG.isPrototypeOf(B=this.OG.EH)?B:null).AmQ([B=A._GetAutoObject(
A.Device.Helper).X,B.Px,B.DS]);this.Zm.Ad$(KW);this.OG.Ad$(US);},_Init:function(
aArg){C.D1._Init.call(this,aArg);C.ApZ._Init.call(this.Zm={I:this},0);C.ApZ._Init.
call(this.OG={I:this},0);C.Aka._Init.call(this.Af5={I:this},0);this.__proto__=C.
AKx;this.Zm.G(AW5);this.Zm.U(A.aaR(A.acf.AeM));this.Zm.ADw(C.AK2);this.OG.G(AW6);
this.OG.U(A.aaR(A.acf.AFx));this.OG.ADw(C.OG);this.Af5.G(SJ);this.Af5.Q(A.aaR(A.
acf.AjH));this.J(this.Zm,0);this.J(this.OG,0);this.J(this.Af5,0);this.Init(aArg);
},_Done:function(){this.__proto__=C.D1;this.Zm._Done();this.OG._Done();this.Af5.
_Done();C.D1._Done.call(this);},_ReInit:function(){C.D1._ReInit.call(this);this.
Zm._ReInit();this.OG._ReInit();this.Af5._ReInit();this.Zm.U(A.aaR(A.acf.AeM));this.
OG.U(A.aaR(A.acf.AFx));this.Af5.Q(A.aaR(A.acf.AjH));},_Mark:function(D){var B;C.
D1._Mark.call(this,D);if((B=this.Zm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OG
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Af5)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalInfoWeightsGraph"};C.AKu={Aud:null,Auc:null,Av_:null
,AtH:null,U2:null,AaE:null,AaD:null,AbJ:null,Aet:null,Init:function(aArg){this.U2.
AgM(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dx()).
Format(A.aaR(A.acf.Af$)));},A1V:function(H){this.U2.Abv(this.AtH);this.AaE.Abv(this.
Aud);this.AaD.Abv(this.Auc);this.AbJ.Abv(this.Av_);},Av9:function(){var Gn=A._GetAutoObject(
A.Device.Device).Bq.Ch();this.AtH=A._NewObject(C.AiO,0);this.Aud=A._NewObject(C.
AiO,0);this.Auc=A._NewObject(C.AiO,0);this.Av_=A._NewObject(C.AiO,0);if(Gn>0){var
P=Gn-1;while(P>=0){var D0=A._GetAutoObject(A.Device.Device).Bq.Hy(P,6);this.Asr(
this.AtH,P,3,D0);this.Asr(this.Aud,P,2,D0);this.Asr(this.Auc,P,5,D0);this.Asr(this.
Av_,P,4,D0);P=P-1;}}this.ZU=!(((this.AtH.AR+this.Auc.AR)+this.Aud.AR)+this.Av_.AR
);A.pe([this,this.A1V],this);},Asr:function(AYE,Ac,AYD,PV){var AkM=A._GetAutoObject(
A.Device.Device).Bq.IU(Ac,AYD);if(!!AkM)AYE.Oe(AkM,PV);},Abt:function(E){if(this.
Mj===E)return;C.KY.Abt.call(this,E);if(!!this.U2)this.U2.Abt(E);if(!!this.AaE)this.
AaE.Abt(E);if(!!this.AaD)this.AaD.Abt(E);if(!!this.AbJ)this.AbJ.Abt(E);this.Aet.
Abt(E);},Aie:function(H){this.U2.AgM(A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(
A.Device.Helper).Dx()).Format(A.aaR(A.acf.Af$)));this.Av9();if(A._GetAutoObject(
A.Device.Helper).X.TimestampLastAssessment>0)this.Do(A.aaR(A.acf.Bg9));else this.
Do(A.aaR(A.acf.AmG));this.An();},_Init:function(aArg){C.KY._Init.call(this,aArg);
C.AgS._Init.call(this.U2={I:this},0);C.AgS._Init.call(this.AaE={I:this},0);C.AgS.
_Init.call(this.AaD={I:this},0);C.AgS._Init.call(this.AbJ={I:this},0);C.ARZ._Init.
call(this.Aet={I:this},0);this.__proto__=C.AKu;this.Do(A.aaR(A.acf.AmG));this.U2.
G(AW7);this.U2.Q(A.aaR(A.acf.AEB));this.AaE.G(AW8);this.AaE.Q(A.aaR(A.acf.Feed));
this.AaD.G(AW9);this.AaD.Q(A.aaR(A.acf.AED));this.AbJ.G(AW_);this.AbJ.Q(A.aaR(A.
acf.AEE));this.Aet.G(AW$);this.J(this.U2,-1);this.J(this.AaE,-1);this.J(this.AaD
,-1);this.J(this.AbJ,-1);this.J(this.Aet,-1);this.Init(aArg);},_Done:function(){
this.__proto__=C.KY;this.U2._Done();this.AaE._Done();this.AaD._Done();this.AbJ._Done(
);this.Aet._Done();C.KY._Done.call(this);},_ReInit:function(){C.KY._ReInit.call(
this);this.U2._ReInit();this.AaE._ReInit();this.AaD._ReInit();this.AbJ._ReInit();
this.Aet._ReInit();this.Do(A.aaR(A.acf.AmG));this.U2.Q(A.aaR(A.acf.AEB));this.AaE.
Q(A.aaR(A.acf.Feed));this.AaD.Q(A.aaR(A.acf.AED));this.AbJ.Q(A.aaR(A.acf.AEE));}
,_Mark:function(D){var B;C.KY._Mark.call(this,D);if((B=this.Aud)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Auc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Av_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtH)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.U2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaE)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AaD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aet)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalInfoRatingsGraph"};C.AKv={EH:null,V9:null,AdB:null
,AZ5:false,Init:function(aArg){this.V9.AgM(A._NewObject(A.Core.Bt,0).Initialize(
A._GetAutoObject(A.Device.Helper).Dx()).Format(A.aaR(A.acf.Af$)));},Bg:function(
aSize){C.KY.Bg.call(this,aSize);this.AdB.G(this.EH.M);},Ai:function(Ae){C.KY.Ai.
call(this,Ae);var Bx2=!this.ZU&&this.AZ5;if(A._GetAutoObject(A.Device.Helper).X.
TimestampLastTemperature>0)this.AdB.Q(A.aaR(A.acf.A5I));else this.AdB.Q(A.aaR(A.
acf.Aqt));if((A._GetAutoObject(A.Device.Helper).X.TimestampLastTemperature>0)||(
A._GetAutoObject(A.Device.Helper).X.TimestampLastAssessment>0))this.Do(A.aaR(A.acf.
Bg_));else this.Do(A.aaR(A.acf.Bg$));this.AdB.Y(Bx2);},Aie:function(H){this.V9.AgM(
A._NewObject(A.Core.Bt,0).Initialize(A._GetAutoObject(A.Device.Helper).Dx()).Format(
A.aaR(A.acf.Af$)));this.ZU=true;this.AZ5=true;this.Av9();this.AR2();this.An();},
AR2:function(){this.EH.Ad$(this.AMY());if(!!this.EH.EP&&(this.EH.EP.AR>0)){this.
ZU=false;this.AZ5=false;}},AMY:function(){var Bz=A._NewObject(C.ApB,0);var P1=A.
_GetAutoObject(A.Device.Helper).AMb(A._GetAutoObject(A.Device.Helper).Dx());var Dl=
A._GetAutoObject(A.Device.Helper).Apx(P1-(86400*this.Mj));Bz.AmU(AXa);Bz.QG([].concat(
0,Bz.FV.slice(1,4)));Bz.QG(A.abN(Bz.FV,(P1-Dl)|0));Bz.QG(A.abP(Bz.FV,3400));Bz.QG([
].concat(Bz.FV.slice(0,3),4200));var Gn=A._GetAutoObject(A.Device.Device).Bq.Ch(
);Bz.AvE(Gn);Bz.XL();if(Gn>0){var P=0;while(P<Gn){var Ao_=A._GetAutoObject(A.Device.
Device).Bq.CA(P,7);var Ao$=A._GetAutoObject(A.Device.Device).Bq.Hy(P,6)-Dl;if(Ao_>
0)Bz.Aps(Ao$,Ao_);P=P+1;}}return Bz;},BfW:function(){var Gn=A._GetAutoObject(A.Device.
Device).Bq.Ch();if(Gn>0){var BcM=A._NewObject(C.AiO,0);var P=Gn-1;while(P>=0){var
DT=A._NewObject(A.Device.Rating,0);DT.EJ(P,A._GetAutoObject(A.Device.Device).Bq);
var LC=A._GetAutoObject(A.Device.Helper).ABz(DT);if(!!LC)BcM.Oe(LC,DT.Timestamp);
P=P-1;}return BcM;}else return null;},Av9:function(){this.V9.Abv(this.BfW());if(
!!this.V9.NM&&(this.V9.NM.AR>0))this.ZU=false;},_Init:function(aArg){C.KY._Init.
call(this,aArg);C.ApZ._Init.call(this.EH={I:this},0);C.AgS._Init.call(this.V9={I:
this},0);C.Aka._Init.call(this.AdB={I:this},0);this.__proto__=C.AKv;this.EH.G(Asc
);this.EH.U(A.aaR(A.acf.Temperature));this.EH.ADw(C.AFc);this.V9.G(AXb);this.V9.
Q(A.aaR(A.acf.Rating));this.AdB.G(Asc);this.J(this.EH,-2);this.J(this.V9,-2);this.
J(this.AdB,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.KY;this.EH._Done(
);this.V9._Done();this.AdB._Done();C.KY._Done.call(this);},_ReInit:function(){C.
KY._ReInit.call(this);this.EH._ReInit();this.V9._ReInit();this.AdB._ReInit();this.
EH.U(A.aaR(A.acf.Temperature));this.V9.Q(A.aaR(A.acf.Rating));},_Mark:function(D
){var B;C.KY._Mark.call(this,D);if((B=this.EH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.V9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdB)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoSummaryGraph"};C.Wc={R:null,Gg:null,Gh:null
,Qp:null,AK:0,F_:0,FO:100,Fr:0,Init:function(aArg){},Ja:function(H){this.Fr=1;C.
D8.Ja.call(this,H);},Bg:function(aSize){C.D8.Bg.call(this,aSize);this.Qp.G([0,aSize[
1]-40,40,aSize[1]]);},Ai:function(Ae){C.D8.Ai.call(this,Ae);this.Qp.Y(this.F_!==
this.FO);this.Qp.L(this.V.AP);if((this.Fr===4)||(this.Fr===5))this.Qp.L(A.jb.EX);
},Ali:function(H){this.Fr=5;this.An();if(this.Bk.Bw){A.pe([this,this.Axu],this);
this.Bk.Ar(false);}this.Bk.Ar(true);},P7:function(H){if(this.Fr===5)A.pe([this,this.
Axu],this);if(this.Fr===4)A.pe([this,this.Axv],this);if(this.Fr===1)A.pe(this.AQ
,this);this.Fr=0;this.An();},Db:function(H){var F;if(!!this.R)this.Bx((F=this.R,
F[1].call(F[0])));},Acf:function(s){this.Db(s);},Av:function(E){if(A.aaZ(this.R,
E))return;if(!!this.R)A.z$([this,this.Acf],this.R,0);this.R=E;if(!!E)A.zX([this,
this.Acf],E,0);if(!!E)A.pe([this,this.Acf],this);},Alj:function(H){this.Fr=4;this.
An();if(this.Bk.Bw){A.pe([this,this.Axv],this);this.Bk.Ar(false);}this.Bk.Ar(true
);},JW:function(H){this.Fr=0;},Axv:function(s){this.JW(s);},JR:function(H){this.
Fr=0;},Axu:function(s){this.JR(s);},Bx:function(E){if(E<this.F_)E=this.F_;if(E>this.
FO)E=this.FO;if(this.AK===E)return;this.AK=E;this.An();},GC:function(E){if(this.
F_===E)return;this.F_=E;this.An();},Fd:function(E){if(this.FO===E)return;this.FO=
E;this.An();},_Init:function(aArg){C.D8._Init.call(this,aArg);A.Core.BO._Init.call(
this.Gg={I:this},0);A.Core.BO._Init.call(this.Gh={I:this},0);A.acg.Am._Init.call(
this.Qp={I:this},0);this.__proto__=C.Wc;this.G(JN);this.Gg.Filter=5;this.Gh.Filter=
4;this.Background.G(JN);this.V.G(AeU);this.V.Q(Lj);this.Qp.G(Axe);this.J(this.Qp
,0);this.Gg.BP=[this,this.Ali];this.Gg.DR=[this,this.Ali];this.Gh.BP=[this,this.
Alj];this.Gh.DR=[this,this.Alj];this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak
));this.V.CC(null);this.Qp.Ax(A.aaL(A.ach.AKS));this.Init(aArg);},_Done:function(
){this.__proto__=C.D8;this.Gg._Done();this.Gh._Done();this.Qp._Done();C.D8._Done.
call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.Gg._ReInit();this.Gh.
_ReInit();this.Qp._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));}
,_Mark:function(D){var B;C.D8._Mark.call(this,D);if((B=this.R)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Gg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Gh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qp)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemBaseVertically"};C.ASm={AB:null,CF:null,HC:
null,Bg:function(aSize){C.Wc.Bg.call(this,aSize);this.CF.G([this.Qp.M[2],this.Qp.
M[1],this.M[2],this.Qp.M[3]]);},Ai:function(Ae){C.Wc.Ai.call(this,Ae);this.CF.AaY(
0,this.CF.AR-1);if(this.F_!==this.FO)this.Qp.Y(true);},Init:function(aArg){},Db:
function(H){var F;if(!!this.R&&!!this.AB)this.Bx(this.AB.DO((F=this.R,F[1].call(
F[0]))));},JW:function(H){var F;var BL=this.AK;C.Wc.JW.call(this,H);this.Bx(this.
AK+1);if(this.AK!==BL){if(!!this.R&&!!this.AB)(F=this.R,F[2].call(F[0],this.AB.C$(
this.AK)));A.abo(this.R,0);}},JR:function(H){var F;var BL=this.AK;C.Wc.JR.call(this
,H);this.Bx(this.AK-1);if(this.AK!==BL){if(!!this.R&&!!this.AB)(F=this.R,F[2].call(
F[0],this.AB.C$(this.AK)));A.abo(this.R,0);}},Bx:function(E){var Qb=0;if(this.F_
!==this.FO){if(E<this.F_){E=this.FO;Qb=-this.CF.GP*this.CF.AR;}if(E>this.FO){E=this.
F_;Qb=this.CF.GP;}}C.Wc.Bx.call(this,E);if(!!Qb)this.CF.Ga(Qb);this.CF.GQ(this.AK
);this.CF.Hx(this.CF.Gb,true,this.HC,null);},G9:function(H){var B;var FS=this.CF.
GN;var Cw=(C.CP.isPrototypeOf(B=this.CF.Ca)?B:null);if(!Cw)return;Cw.S(this.V.B3
);Cw.A5(A.aaL(A.fl.Ah));Cw.L(this.V.AP);if(!!this.AB)Cw.Q(this.AB.Gx(FS));else Cw.
Q(WC);Cw.G(A.abK(Cw.M,[(B=this.CF.M)[2]-B[0],this.CF.GP]));},CN:function(E){if(this.
AB===E)return;this.AB=E;if(!!this.AB){this.GC(0);this.Fd(this.AB.Dt()-1);this.CF.
Jm(this.AB.Dt());this.CF.AaY(0,this.CF.AR-1);}},_Init:function(aArg){C.Wc._Init.
call(this,aArg);A.Core.CF._Init.call(this.CF={I:this},0);A.acl.FX._Init.call(this.
HC={I:this},0);this.__proto__=C.ASm;this.G(JN);this.Qp.G(AGO);this.CF.Aeg(40);this.
CF.NI(C.CP);this.HC.V7(23);this.HC.ID(1);this.HC.Fy(200);this.J(this.CF,0);this.
V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));this.CF.G9=[this,this.G9];this.Init(
aArg);},_Done:function(){this.__proto__=C.Wc;this.CF._Done();this.HC._Done();C.Wc.
_Done.call(this);},_ReInit:function(){C.Wc._ReInit.call(this);this.CF._ReInit();
this.HC._ReInit();this.V.S(A.aaL(A.fl.Ah));this.V.A5(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.Wc._Mark.call(this,D);if((B=this.AB)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.CF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HC)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupVertically"};C.Rx={AJF:0
,Ai:function(Ae){C.Fj.Ai.call(this,Ae);this.U(A.aaR(A.acf.AFx));if(A._GetAutoObject(
A.Device.Helper).X.TimestampFirstWeighing!==A._GetAutoObject(A.Device.Helper).X.
TimestampLastWeighing)this.Ke((A._GetAutoObject(A.Device.Converter).Anu(this.AJF
)+CJ)+A._GetAutoObject(A.acj.DI).AcI());else this.Ke(A.aaR(A.acf.Unknown));},B$:
function(H){C.Fj.B$.call(this,H);this.AJF=A._GetAutoObject(A.Device.Helper).X.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).X.FirstBodyWeight;this.An();},_Init:function(aArg
){C.Fj._Init.call(this,aArg);this.__proto__=C.Rx;},_className:"Application::AnimalInfoItemWeightGain"
};C.ANy={Bb:null,Da:null,Init:function(aArg){var B;A.zX([this,this.M_],[B=A._GetAutoObject(
A.Device.Device),B.AQi,B.AXK],0);},En:function(H){C.Ix.En.call(this,H);this.Da.Ax(
A._GetAutoObject(A.Device.Converter).Bd4(A._GetAutoObject(A.Device.Device).D1));
},_Init:function(aArg){C.Ix._Init.call(this,aArg);A.acg.DQ._Init.call(this.Bb={I:
this},0);A.acg.Am._Init.call(this.Da={I:this},0);this.__proto__=C.ANy;this.Bb.DJ(
Axf);this.Bb.DX(Ase);this.Bb.L(A.jb.Bb);this.Da.G(AXc);this.Da.L(A.jb.Text);this.
J(this.Bb,0);this.J(this.Da,0);this.Da.Ax(A.aaL(A.ach.Ajj));this.Init(aArg);},_Done:
function(){this.__proto__=C.Ix;this.Bb._Done();this.Da._Done();C.Ix._Done.call(this
);},_ReInit:function(){C.Ix._ReInit.call(this);this.Bb._ReInit();this.Da._ReInit(
);},_Mark:function(D){var B;C.Ix._Mark.call(this,D);if((B=this.Bb)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.ALC={Y6:null,Kl:null,L$:null,Timer:null,AAM:3,Ai:function(Ae){C.AC.Ai.call(this
,Ae);this.Y6.Q(A._GetAutoObject(A.Device.Helper).NO(A.aaR(A.acf.Bnb),Q0,this.AAM.
toFixed()));},CI:function(H){this.Timer.Ar(true);},Fb:function(H){this.Timer.Ar(
false);},Bxc:function(H){if(this.AAM>1){this.AAM=this.AAM-1;this.An();}else{this.
Timer.Ar(false);A._GetAutoObject(A.Device.Device).Awe();}},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.acg.Text._Init.call(this.Y6={I:this},0);A.acg.Text.
_Init.call(this.Kl={I:this},0);A.acg.Am._Init.call(this.L$={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.ALC;this.Background.L(A.jb.C0
);this.N.Y(true);this.Y6.G(AXd);this.Y6.KF(true);this.Y6.Q(A.jV);this.Y6.L(A.jb.
Text);this.Kl.G(AGP);this.Kl.KF(true);this.Kl.Q(A.aaR(A.acf.A20));this.Kl.L(A.jb.
Text);this.L$.G(AGQ);this.J(this.Y6,0);this.J(this.Kl,0);this.J(this.L$,0);this.
Y6.S(A.aaL(A.fl.Ah));this.Kl.S(A.aaL(A.fl.Ah));this.L$.Ax(A.aaL(A.ach.AAk));this.
Timer.M6=[this,this.Bxc];},_Done:function(){this.__proto__=C.AC;this.Y6._Done();
this.Kl._Done();this.L$._Done();this.Timer._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Y6._ReInit();this.Kl._ReInit();this.L$._ReInit(
);this.Timer._ReInit();this.Kl.Q(A.aaR(A.acf.A20));this.Y6.S(A.aaL(A.fl.Ah));this.
Kl.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.
Y6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.L$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.ALk={Kl:null,AlT:null
,Qi:null,CT:function(){this.An();},Ai:function(Ae){C.Adq.Ai.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Aak<=10)this.Kl.Q(A.aaR(A.acf.Bek));else this.Kl.Q(A.aaR(A.acf.
A21));},_Init:function(aArg){C.Adq._Init.call(this,aArg);A.acg.Text._Init.call(this.
Kl={I:this},0);A.acg.Am._Init.call(this.AlT={I:this},0);C.CP._Init.call(this.Qi={
I:this},0);this.__proto__=C.ALk;this.So.G(AXe);this.L$.G(AXf);this.Kl.G(AXg);this.
Kl.KF(true);this.Kl.L(A.jb.Text);this.AlT.G(AGQ);this.Qi.G(AXh);this.Qi.Y(true);
this.Qi.Q(A.aaR(A.acf.AR0));this.Qi.L(A.jb.Text);this.J(this.Kl,0);this.J(this.AlT
,0);this.J(this.Qi,0);this.Kl.S(A.aaL(A.fl.Ah));this.AlT.Ax(A.aaL(A.ach.AAk));this.
Qi.S(A.aaL(A.fl.Ah));this.Qi.A5(A.aaL(A.fl.Ak));this.Qi.CC(A.aaL(A.fl.By));},_Done:
function(){this.__proto__=C.Adq;this.Kl._Done();this.AlT._Done();this.Qi._Done();
C.Adq._Done.call(this);},_ReInit:function(){C.Adq._ReInit.call(this);this.Kl._ReInit(
);this.AlT._ReInit();this.Qi._ReInit();this.Qi.Q(A.aaR(A.acf.AR0));this.Kl.S(A.aaL(
A.fl.Ah));this.Qi.S(A.aaL(A.fl.Ah));this.Qi.A5(A.aaL(A.fl.Ak));this.Qi.CC(A.aaL(
A.fl.By));this.CT();},_Mark:function(D){var B;C.Adq._Mark.call(this,D);if((B=this.
Kl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AlT)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Qi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AKh={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AKh;this.
Rr.Ar(false);this.Rr.Aj(false);this.Rr.Y(false);},_className:"Application::AlarmListFilterScreen"
};C.ATj={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.ATj;this.
SC.Ar(false);this.SC.Aj(false);this.SC.Y(false);},_className:"Application::WatchListFilterScreen"
};C.ALz={_Init:function(aArg){C.Gs._Init.call(this,aArg);this.__proto__=C.ALz;this.
N.BU(A.aaR(A.acf.A2P));},_ReInit:function(){C.Gs._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A2P));},_className:"Application::ControlListActionsScreen"};C.ATi={_Init:
function(aArg){C.Gs._Init.call(this,aArg);this.__proto__=C.ATi;this.N.BU(A.aaR(A.
acf.A2Y));},_ReInit:function(){C.Gs._ReInit.call(this);this.N.BU(A.aaR(A.acf.A2Y
));},_className:"Application::WatchListActionsScreen"};C.AKg={_Init:function(aArg
){C.Gs._Init.call(this,aArg);this.__proto__=C.AKg;this.N.BU(A.aaR(A.acf.A2O));},
_ReInit:function(){C.Gs._ReInit.call(this);this.N.BU(A.aaR(A.acf.A2O));},_className:
"Application::AlarmListActionsScreen"};C.AM5={En:function(H){C.J7.En.call(this,H
);this.Da.Ax(A._GetAutoObject(A.Device.Converter).AfP(5));},_Init:function(aArg){
C.J7._Init.call(this,aArg);this.__proto__=C.AM5;},_className:"Application::HeaderControlListFilter"
};C.ANA={En:function(H){C.J7.En.call(this,H);this.Da.Ax(A._GetAutoObject(A.Device.
Converter).AfP(6));},_Init:function(aArg){C.J7._Init.call(this,aArg);this.__proto__=
C.ANA;},_className:"Application::HeaderWatchListFilter"};C.ANF={DP:null,MU:null,
_Init:function(aArg){C.Tu._Init.call(this,aArg);C.CP._Init.call(this.DP={I:this}
,0);A.acg.Am._Init.call(this.MU={I:this},0);this.__proto__=C.ANF;this.DP.G(AnI);
this.DP.Q(A.aaR(A.acf.A3y));this.DP.L(A.jb.Text);this.MU.G(AXi);this.MU.L(A.jb.Text
);this.MU.A2(0x12);this.J(this.DP,-2);this.J(this.MU,0);this.DP.S(A.aaL(A.fl.Ak)
);this.DP.A5(A.aaL(A.fl.By));this.MU.Ax(A.aaL(A.ach.AB2));},_Done:function(){this.
__proto__=C.Tu;this.DP._Done();this.MU._Done();C.Tu._Done.call(this);},_ReInit:function(
){C.Tu._ReInit.call(this);this.DP._ReInit();this.MU._ReInit();this.DP.Q(A.aaR(A.
acf.A3y));this.DP.S(A.aaL(A.fl.Ak));this.DP.A5(A.aaL(A.fl.By));},_Mark:function(
D){var B;C.Tu._Mark.call(this,D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.MU)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWatch"
};C.ALf={B$:function(Ac){C.AiW.B$.call(this,Ac);if(!!this.AW){var N6=this.AW.HT(
Ac,8);var ByF=this.AW.RW(Ac,21);this.Aax.Q(A._GetAutoObject(A.Device.Helper).MB(
ByF,A._GetAutoObject(A.Device.Helper).Dx()).toFixed());this.R2.Y(N6);this.An();}
},_Init:function(aArg){C.AiW._Init.call(this,aArg);this.__proto__=C.ALf;},_className:
"Application::CalfListWatchItem"};C.Tu={Agk:null,Agm:null,_Init:function(aArg){C.
Du._Init.call(this,aArg);A.acg.Am._Init.call(this.Agk={I:this},0);A.acg.Am._Init.
call(this.Agm={I:this},0);this.__proto__=C.Tu;this.Agk.G(AXj);this.Agk.L(A.jb.Text
);this.Agk.A2(0x12);this.Agm.G(AXk);this.Agm.L(A.jb.Text);this.Agm.A2(0x12);this.
Kh(this.CX,-1);this.J(this.Agk,0);this.J(this.Agm,0);this.Agk.Ax(A.aaL(A.ach.Amj
));this.Agm.Ax(A.aaL(A.ach.AaU));},_Done:function(){this.__proto__=C.Du;this.Agk.
_Done();this.Agm._Done();C.Du._Done.call(this);},_ReInit:function(){C.Du._ReInit.
call(this);this.Agk._ReInit();this.Agm._ReInit();},_Mark:function(D){var B;C.Du.
_Mark.call(this,D);if((B=this.Agk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agm).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFlags"};C.ApB={
FV:A.wg,On:A.wf,QG:function(E){if(A.aaY(this.FV,E))return;this.FV=E;},AmU:function(
E){if(A.aaX(this.On,E))return;this.On=E;},_Init:function(aArg){A.acu.AAL._Init.call(
this,aArg);this.__proto__=C.ApB;},_className:"Application::BoundCoordList"};C.AiW={
TA:null,VY:null,TB:null,VZ:null,R2:null,YI:null,Aax:null,AN:null,A8:null,D4:null
,Lg:null,Init:function(aArg){},Bg:function(aSize){C.A$.Bg.call(this,aSize);this.
Background.G(A.abK(this.Background.M,aSize));this.V.G(A.abN(this.V.M,((aSize[0]*
30)/100)|0));this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.TA.G([this.
V.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.VY.G(this.TA.M);this.A8.G([this.TA.
M[2]-1,0,this.TA.M[2]+1,aSize[1]]);this.TB.G([this.TA.M[2],0,((aSize[0]*54)/100)|
0,aSize[1]]);this.VZ.G(this.TB.M);this.D4.G([this.TB.M[2]-1,0,this.TB.M[2]+1,aSize[
1]]);this.R2.G([this.TB.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.YI.G(this.R2.
M);this.Lg.G([this.R2.M[2]-1,0,this.R2.M[2]+1,aSize[1]]);this.Aax.G([this.R2.M[2
],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);var KV=this.V.AP;
this.TA.ADd(KV);this.VY.L(KV);this.TB.ADd(KV);this.VZ.L(KV);this.R2.ADd(KV);this.
YI.L(KV);this.Aax.L(KV);this.YI.Y(!this.R2.Fc());},B$:function(Ac){if(!this.AW)return;
this.Hr=Ac;var Od=this.AW.CA(Ac,1);var H4=this.AW.Amc(Ac,14);var Atj=this.AW.CA(
Ac,5);var LC=this.AW.IU(Ac,13);this.U(Od.toFixed());if(!!LC){this.TA.Y(true);this.
TA.Avx(A._GetAutoObject(A.acj.Assessment).Ban(LC));this.VY.Y(false);}else{this.TA.
Y(false);this.VY.Y(true);}if(Atj>0){this.TB.Y(true);this.TB.Avx(A._GetAutoObject(
A.acj.Assessment).Ban(A._GetAutoObject(A.Device.Converter).ArJ(H4,Atj)));this.VZ.
Y(false);}else{this.TB.Y(false);this.VZ.Y(true);}this.An();},_Init:function(aArg
){C.A$._Init.call(this,aArg);C.J2._Init.call(this.TA={I:this},0);A.acg.Text._Init.
call(this.VY={I:this},0);C.J2._Init.call(this.TB={I:this},0);A.acg.Text._Init.call(
this.VZ={I:this},0);C.J2._Init.call(this.R2={I:this},0);A.acg.Text._Init.call(this.
YI={I:this},0);A.acg.Text._Init.call(this.Aax={I:this},0);A.acg.AI._Init.call(this.
AN={I:this},0);A.acg.AI._Init.call(this.A8={I:this},0);A.acg.AI._Init.call(this.
D4={I:this},0);A.acg.AI._Init.call(this.Lg={I:this},0);this.__proto__=C.AiW;this.
VY.G(AXl);this.VY.Q(AnJ);this.VZ.G(AnK);this.VZ.Q(AnJ);this.R2.Avx(A.jb.AbX);this.
YI.G(AnK);this.YI.Q(Q3);this.AN.L(A.jb.Bb);this.A8.L(A.jb.Bb);this.D4.L(A.jb.Bb);
this.Lg.L(A.jb.Bb);this.J(this.TA,0);this.J(this.VY,0);this.J(this.TB,0);this.J(
this.VZ,0);this.J(this.R2,0);this.J(this.YI,0);this.J(this.Aax,0);this.J(this.AN
,0);this.J(this.A8,0);this.J(this.D4,0);this.J(this.Lg,0);this.VY.S(A.aaL(A.fl.Ah
));this.VZ.S(A.aaL(A.fl.Ah));this.YI.S(A.aaL(A.fl.Ah));this.Aax.S(A.aaL(A.fl.Ah)
);this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.TA._Done();this.VY.
_Done();this.TB._Done();this.VZ._Done();this.R2._Done();this.YI._Done();this.Aax.
_Done();this.AN._Done();this.A8._Done();this.D4._Done();this.Lg._Done();C.A$._Done.
call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.TA._ReInit();this.VY.
_ReInit();this.TB._ReInit();this.VZ._ReInit();this.R2._ReInit();this.YI._ReInit(
);this.Aax._ReInit();this.AN._ReInit();this.A8._ReInit();this.D4._ReInit();this.
Lg._ReInit();this.VY.S(A.aaL(A.fl.Ah));this.VZ.S(A.aaL(A.fl.Ah));this.YI.S(A.aaL(
A.fl.Ah));this.Aax.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.A$._Mark.call(this
,D);if((B=this.TA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.TB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.R2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YI
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aax)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lg)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListFlagItem"};C.DH={Pb:null,Amz:null
,EP:null,DH:null,Aqm:0,Aqn:0,A41:0,Al4:0,ApL:0,Init:function(aArg){this.AQV(6);this.
AQW(8);this.AQ7(A.jb.AY);this.AQ8(3);},Ai:function(Ae){var B;A.Core.O.Ai.call(this
,Ae);this.DH.BiT([this.DH.Aas[0],(B=this.DH.M)[3]-B[1]]);this.V_(this);},AQU:function(
E){if(this.Pb===E)return;this.Pb=E;this.DH.AQU(E);},AQ8:function(E){if(this.Aqn===
E)return;this.Aqn=E;this.DH.AQ8(E);},AQ7:function(E){if(this.Aqm===E)return;this.
Aqm=E;this.DH.AQ7(E);this.DH.BiZ(E);},V_:function(H){var B;while(!!this.DH.Ag)this.
HG(this.DH.Ag);if(!this.EP)return;this.DH.AmU([((this.EP.On[0]*((B=this.M)[2]-B[
0]))/(this.EP.FV[2]-this.EP.FV[0]))|0,this.DH.On[1]]);this.DH.AmU([this.DH.On[0]
,((this.EP.On[1]*((B=this.M)[3]-B[1]))/(this.EP.FV[3]-this.EP.FV[1]))|0]);var P;
var C9=this.DH.On[1];var D0;var A18=this.EP.FV[1];var Bg8=(((B=this.DH.M)[3]-B[1
])/this.DH.On[1])|0;for(P=0;P<Bg8;P=P+1){D0=A._NewObject(A.acg.Text,0);D0.G([0,((((
B=this.M)[3]-B[1])-(P*C9))-(this.Amz.Ascent+this.Amz.Descent))+2,((B=this.M)[2]-
B[0])-this.Aqn,(((B=this.M)[3]-B[1])-(P*C9))+2]);D0.L(this.A41);D0.S(this.Amz);D0.
A2(0x24);if(P>0)D0.Q(this.AHZ(A18));else D0.Q(this.AIx());A18=A18+this.EP.On[1];
this.J(D0,0);}},BCd:function(s){this.V_(s);},BjN:function(E){if(this.Amz===E)return;
this.Amz=E;this.An();},Ax2:function(AYk){var B;if(!this.EP||(this.EP.FV[3]===this.
EP.FV[1]))return 0;return(((AYk-this.EP.FV[1])*((B=this.M)[3]-B[1]))/(this.EP.FV[
3]-this.EP.FV[1]))|0;},Ad$:function(E){if(this.EP===E)return;this.EP=E;if(!E)this.
DH.Ad$(null);else{var Bz=A._NewObject(A.acu.AAL,0);Bz.AvE(this.EP.ACy);Bz.XL();var
Jo=E.Ak0;while(!!Jo){Bz.Aps(this.BuU(Jo.PJ),this.BuV(Jo.PK));Jo=Jo.Ag;}this.DH.Ad$(
Bz);this.An();}},BuU:function(Bs$){var B;if(!this.EP||(this.EP.FV[2]===this.EP.FV[
0]))return 0;return((Bs$-this.EP.FV[0])*((B=this.M)[2]-B[0]))/(this.EP.FV[2]-this.
EP.FV[0]);},BuV:function(AYk){var B;if(!this.EP||(this.EP.FV[3]===this.EP.FV[1])
)return 0;return((AYk-this.EP.FV[1])*((B=this.M)[3]-B[1]))/(this.EP.FV[3]-this.EP.
FV[1]);},AHZ:function(An4){return An4.toFixed();},AIx:function(){return A.jV;},AQW:
function(E){if(this.Al4===E)return;this.Al4=E;this.DH.AQW(E);},AQV:function(E){if(
this.ApL===E)return;this.ApL=E;this.DH.AQV(E);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);A.acu.DH._Init.call(this.DH={I:this},0);this.__proto__=C.DH;this.
G(AGR);this.A41=A.jb.Text;this.DH.AV(0x3F);this.DH.G(AGR);this.DH.Bj$(AXm);this.
DH.BiC(A.jb.AbX);this.DH.Bjw(A.jb.Bb);this.DH.Bks(A.jb.AbX);this.J(this.DH,0);this.
Pb=A.aaL(A.acu.AA5);this.Amz=A.aaL(A.fl.By);this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.O;this.DH._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.DH._ReInit();this.BjN(A.aaL(A.fl.By));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Pb)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Amz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EP)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.DH)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::Graph"};C.AK2={AHZ:function(An4){return A._GetAutoObject(
A.Device.Converter).AwE(An4,0);},AIx:function(){return A._GetAutoObject(A.acj.DI
).AcI();},_Init:function(aArg){C.DH._Init.call(this,aArg);this.__proto__=C.AK2;}
,_className:"Application::BodyWeightGraph"};C.OG={JA:null,Eo:null,D9:null,FI:null
,It:null,Iu:null,Init:function(aArg){this.AQU(null);},V_:function(H){var B;var F;
C.DH.V_.call(this,H);var AI3=0;var AJJ=0;if(!!this.JA){AI3=this.Ax2(A._GetAutoObject(
A.Device.Helper).ABy((F=this.JA,F[1].call(F[0]))));AJJ=this.Ax2(A._GetAutoObject(
A.Device.Helper).ABx((F=this.JA,F[1].call(F[0]))));}this.FI.G(A.abP(this.FI.M,0)
);this.FI.G([].concat(this.FI.M.slice(0,3),((B=this.M)[3]-B[1])-AJJ));this.It.G(
A.abO(this.It.M,(this.FI.M[3]-((((B=this.It.M)[3]-B[1])/2)|0))-2));this.D9.G(A.abP(
this.D9.M,this.FI.M[3]));this.D9.G([].concat(this.D9.M.slice(0,3),((B=this.M)[3]-
B[1])-AI3));this.Iu.G(A.abO(this.Iu.M,(this.D9.M[3]-((((B=this.Iu.M)[3]-B[1])/2)|
0))+2));this.Eo.G(A.abP(this.Eo.M,this.D9.M[3]));this.Eo.G([].concat(this.Eo.M.slice(
0,3),(B=this.M)[3]-B[1]));},AHZ:function(An4){return A._GetAutoObject(A.Device.Converter
).NU(An4,0,true);},AIx:function(){return A._GetAutoObject(A.acj.DI).ZQ();},AmQ:function(
E){if(A.aaZ(this.JA,E))return;if(!!this.JA)A.z$([this,this.Ah6],this.JA,0);this.
JA=E;if(!!E)A.zX([this,this.Ah6],E,0);if(!!E)A.pe([this,this.Ah6],this);},Ah6:function(
H){this.An();},_Init:function(aArg){C.DH._Init.call(this,aArg);A.acg.AI._Init.call(
this.Eo={I:this},0);A.acg.AI._Init.call(this.D9={I:this},0);A.acg.AI._Init.call(
this.FI={I:this},0);A.acg.AI._Init.call(this.It={I:this},0);A.acg.AI._Init.call(
this.Iu={I:this},0);this.__proto__=C.OG;this.Eo.AV(0xD);this.Eo.G(Zx);this.Eo.L(
A.jb.FU);this.D9.AV(0xD);this.D9.G(Uo);this.D9.L(A.jb.HY);this.FI.AV(0xD);this.FI.
G(Ab7);this.FI.L(A.jb.EX);this.It.AV(0xD);this.It.G(WA);this.It.Avk(A.jb.HY);this.
It.Avl(A.jb.HY);this.It.Avo(A.jb.EX);this.It.Avn(A.jb.EX);this.Iu.AV(0xD);this.Iu.
G(Wz);this.Iu.Avk(A.jb.FU);this.Iu.Avl(A.jb.FU);this.Iu.Avo(A.jb.HY);this.Iu.Avn(
A.jb.HY);this.J(this.Eo,-1);this.J(this.D9,-1);this.J(this.FI,-1);this.J(this.It
,-1);this.J(this.Iu,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.DH;this.
Eo._Done();this.D9._Done();this.FI._Done();this.It._Done();this.Iu._Done();C.DH.
_Done.call(this);},_ReInit:function(){C.DH._ReInit.call(this);this.Eo._ReInit();
this.D9._ReInit();this.FI._ReInit();this.It._ReInit();this.Iu._ReInit();},_Mark:
function(D){var B;C.DH._Mark.call(this,D);if((B=this.JA)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Eo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D9)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.FI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
It)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iu)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightGainGraph"};C.ApZ={EH:null,EP:null,RJ:null,H_:null
,Bb:null,Awn:A.jV,DD:A.jV,AM0:null,Init:function(aArg){},Bg:function(aSize){A.Core.
O.Bg.call(this,aSize);this.Bb.G([].concat([0,aSize[1]-2],aSize));this.RJ.G([30,0
,aSize[0]-2,30]);this.H_.G(this.RJ.M);if(!!this.EH)this.EH.G([30,this.RJ.M[3],aSize[
0],this.Bb.M[1]]);},AgM:function(E){if(this.Awn===E)return;this.Awn=E;this.H_.Q(
E);},U:function(E){if(this.DD===E)return;this.DD=E;this.RJ.Q(E);},ADw:function(E
){if(this.AM0===E)return;this.AM0=E;this.BlC(this);},BlC:function(H){var B;if(!!
this.EH)this.HG(this.EH);this.EH=(C.DH.isPrototypeOf(B=A._NewObject(this.AM0,0))?
B:null);if(!!this.EH){this.EH.G(AXn);this.EH.Ad$(this.EP);this.J(this.EH,0);}},Ad$:
function(E){if(this.EP===E)return;this.EP=E;if(!!this.EH)this.EH.Ad$(E);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.RJ={I:this
},0);A.acg.Text._Init.call(this.H_={I:this},0);A.acg.AI._Init.call(this.Bb={I:this
},0);this.__proto__=C.ApZ;this.G(Ab_);this.Ar(false);this.RJ.G(AXo);this.RJ.A2(0x11
);this.RJ.Q(Lj);this.RJ.L(A.jb.Text);this.H_.A2(0x14);this.H_.Q(A.jV);this.H_.L(
A.jb.Text);this.Bb.G(AXp);this.Bb.L(A.jb.Bb);this.J(this.RJ,0);this.J(this.H_,0);
this.J(this.Bb,0);this.RJ.S(A.aaL(A.fl.Ak));this.H_.S(A.aaL(A.fl.Ak));this.Init(
aArg);},_Done:function(){this.__proto__=A.Core.O;this.RJ._Done();this.H_._Done();
this.Bb._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.RJ._ReInit();this.H_._ReInit();this.Bb._ReInit();this.RJ.S(A.aaL(
A.fl.Ak));this.H_.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.EH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EP)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.RJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
H_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::GraphItem"};C.AKD={AfQ:null,GQ:function(E){var F;C.FP.
GQ.call(this,E);if(!!this.AfQ)(F=this.AfQ,F[2].call(F[0],E));},A62:function(E){if(
A.aaZ(this.AfQ,E))return;if(!!this.AfQ)A.z$([this,this.A0C],this.AfQ,0);this.AfQ=
E;if(!!E)A.zX([this,this.A0C],E,0);if(!!E)A.pe([this,this.A0C],this);},A0C:function(
H){var F;if(!this.AfQ)return;(F=this.AfQ,F[2].call(F[0],this.Fx()));},_Init:function(
aArg){C.FP._Init.call(this,aArg);this.__proto__=C.AKD;},_Mark:function(D){var B;
C.FP._Mark.call(this,D);if((B=this.AfQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);},_className:"Application::AnimalScrollList"};C.ARZ={QV:null,PF:null,Xp:null,Xq:
null,Mj:0,CT:function(){this.An();},Bg:function(aSize){var B;A.Core.O.Bg.call(this
,aSize);this.QV.G(A.abI(this.QV.M,(((B=this.M)[3]-B[1])/2)|0));this.PF.G(A.abI(this.
PF.M,(((B=this.M)[3]-B[1])/2)|0));this.QV.G(A.abO(this.QV.M,(((B=this.M)[3]-B[1]
)/2)|0));this.PF.G(A.abO(this.PF.M,(((B=this.M)[3]-B[1])/2)|0));},Ai:function(Ae
){A.Core.O.Ai.call(this,Ae);this.QV.Q(A._GetAutoObject(A.Device.Helper).NO(A.aaR(
A.acf.Bg2),Q0,this.Mj.toFixed()));},Abt:function(E){if(this.Mj===E)return;this.Mj=
E;this.BxS(this);},BxS:function(H){var B;var AH8=(((B=this.M)[2]-B[0])/this.Mj)|
0;this.Xp.G(A.abM(this.Xp.M,(((B=this.M)[2]-B[0])-(this.Mj*AH8))+(((AH8/2)-(((B=
this.Xp.M)[2]-B[0])/2))|0)));this.Xq.G(A.abM(this.Xq.M,(((B=this.M)[2]-B[0])-AH8
)+(((AH8/2)-(((B=this.Xq.M)[2]-B[0])/2))|0)));this.An();},_Init:function(aArg){A.
Core.O._Init.call(this,aArg);A.acg.Text._Init.call(this.QV={I:this},0);A.acg.Text.
_Init.call(this.PF={I:this},0);A.acg.Text._Init.call(this.Xp={I:this},0);A.acg.Text.
_Init.call(this.Xq={I:this},0);this.__proto__=C.ARZ;this.G(BC);this.QV.G(AXq);this.
QV.HF(5);this.QV.A2(0x11);this.QV.L(A.jb.Text);this.PF.G(AXr);this.PF.HF(5);this.
PF.A2(0x14);this.PF.Q(A.aaR(A.acf.Ag7));this.PF.L(A.jb.Text);this.Xp.G(AXs);this.
Xp.Q(A9m);this.Xp.L(A.jb.Text);this.Xq.G(Bni);this.Xq.Q(A9m);this.Xq.L(A.jb.Text
);this.J(this.QV,0);this.J(this.PF,0);this.J(this.Xp,0);this.J(this.Xq,0);this.QV.
S(A.aaL(A.fl.Ak));this.PF.S(A.aaL(A.fl.Ak));this.Xp.S(A.aaL(A.fl.Hi));this.Xq.S(
A.aaL(A.fl.Hi));},_Done:function(){this.__proto__=A.Core.O;this.QV._Done();this.
PF._Done();this.Xp._Done();this.Xq._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.QV._ReInit();this.PF._ReInit();this.Xp._ReInit(
);this.Xq._ReInit();this.PF.Q(A.aaR(A.acf.Ag7));this.QV.S(A.aaL(A.fl.Ak));this.PF.
S(A.aaL(A.fl.Ak));this.CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D
);if((B=this.QV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xq)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"};C.KY={Vx:null
,Ai4:null,KA:A.jV,Mj:0,ZU:false,Init:function(aArg){var AZi=A._NewObject(C.J3,0);
var P;for(P=0;P<3;P=P+1)if(A._GetAutoObject(A.Device.Helper).X.S9()<AZi.C$(P))AZi.
AmF=P+1;this.Vx.CN(AZi);},Ai:function(Ae){C.D1.Ai.call(this,Ae);this.Ai4.Y(this.
ZU);if(this.ZU)this.Ba(null);else this.Ba(this.Vx);},CI:function(H){var B;var F;
C.D1.CI.call(this,H);if(!(F=this.Vx.R,F[1].call(F[0])))(F=this.Vx.R,F[2].call(F[
0],this.Vx.AB.C$(0)));A.zX([this,this.AHh],[B=A._GetAutoObject(A.Device.Helper),
B.Ur,B.Us],0);A.zV([this,this.AHh],A._GetAutoObject(A.Device.Device).Bq,0);A.zX([
this,this.Alv],[B=A._GetAutoObject(A.Device.Helper).X,B.QF,B.OnSetId],0);A.pe([this
,this.Alv],this);},Fb:function(H){var B;A.z$([this,this.AHh],[B=A._GetAutoObject(
A.Device.Helper),B.Ur,B.Us],0);A.z9([this,this.AHh],A._GetAutoObject(A.Device.Device
).Bq,0);A.z$([this,this.Alv],[B=A._GetAutoObject(A.Device.Helper).X,B.QF,B.OnSetId
],0);C.D1.Fb.call(this,H);},YQ:function(E){if(A.aa0(this.AQ,E))return;C.D1.YQ.call(
this,E);this.Vx.AQ=E;},Abt:function(E){if(this.Mj===E)return;this.Mj=E;A.pe([this
,this.Alv],this);},BsL:function(Ap){this.Abt(Ap);},Aie:function(H){},AHh:function(
s){this.Aie(s);},Do:function(E){if(this.KA===E)return;this.KA=E;this.Ai4.Q(E);},
Alv:function(H){var Fi=A._NewObject(A.Device.Filter,0);var Aya=A._NewObject(A.Device.
UInt32FilterCriterion,0);Aya.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).Ag7()-((this.Mj-1)*86400))-1,true);Fi.CZ(Aya);var HN=A._NewObject(A.Device.Int32FilterCriterion
,0);HN.Initialize(1,0,A._GetAutoObject(A.Device.Helper).X.Id,true);Fi.CZ(HN);A._GetAutoObject(
A.Device.Device).Bq.Bm(Fi);},Bh0:function(){return this.Mj;},_Init:function(aArg
){C.D1._Init.call(this,aArg);C.ASm._Init.call(this.Vx={I:this},0);C.Aka._Init.call(
this.Ai4={I:this},0);this.__proto__=C.KY;this.Vx.G(BC);this.Ai4.G(SJ);this.J(this.
Vx,0);this.J(this.Ai4,0);this.Vx.Av([this,this.Bh0,this.BsL]);this.Init(aArg);},
_Done:function(){this.__proto__=C.D1;this.Vx._Done();this.Ai4._Done();C.D1._Done.
call(this);},_ReInit:function(){C.D1._ReInit.call(this);this.Vx._ReInit();this.Ai4.
_ReInit();},_Mark:function(D){var B;C.D1._Mark.call(this,D);if((B=this.Vx)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ai4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.ALI={VE:null,Yc:null,RatingMode:null,Pm:null,_Init:
function(aArg){C.Cs._Init.call(this,aArg);C.Pv._Init.call(this.VE={I:this},0);C.
B_._Init.call(this.Yc={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.I1._Init.call(this.Pm={I:this},0);this.__proto__=C.ALI;var B;this.G6.Q(A.
aaR(A.acf.AAV));this.JH(A.aaR(A.acf.A3r));this.VE.G(AGS);this.VE.Aj(true);this.VE.
U(A.aaR(A.acf.ArT));this.VE.Bf(true);this.VE.Pz(23);this.Yc.G(Bnj);this.Yc.Aj(true
);this.Yc.U(A.aaR(A.acf.A8m));this.Yc.Bf(false);this.Pm.G(Bnk);this.Pm.Aj(true);
this.Pm.U(A.aaR(A.acf.A3o));this.Pm.Bf(true);this.Pm.GC(3);this.Pm.Fd(14);this.Pm.
Kd(A.aaR(A.acf.J3)+AGT);this.Pm.KE(A.aaR(A.acf.Gv)+AGT);this.J(this.VE,0);this.J(
this.Yc,0);this.J(this.Pm,0);this.VE.AQ=[B=this.VE,B.PA];this.Yc.Av([B=this.RatingMode
,B.Ce,B.Cg]);this.Yc.CN(this.RatingMode);this.Pm.Av([B=A._GetAutoObject(A.Device.
Device),B.A6f,B.A_q]);},_Done:function(){this.__proto__=C.Cs;this.VE._Done();this.
Yc._Done();this.RatingMode._Done();this.Pm._Done();C.Cs._Done.call(this);},_ReInit:
function(){C.Cs._ReInit.call(this);this.VE._ReInit();this.Yc._ReInit();this.RatingMode.
_ReInit();this.Pm._ReInit();this.G6.Q(A.aaR(A.acf.AAV));this.JH(A.aaR(A.acf.A3r)
);this.VE.U(A.aaR(A.acf.ArT));this.Yc.U(A.aaR(A.acf.A8m));this.Pm.U(A.aaR(A.acf.
A3o));this.Pm.Kd(A.aaR(A.acf.J3)+AGT);this.Pm.KE(A.aaR(A.acf.Gv)+AGT);},_Mark:function(
D){var B;C.Cs._Mark.call(this,D);if((B=this.VE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Pm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.At3={Init:function(aArg){this.V.Text.A2(0x11);this.V.Text.HF(10);},Ai:function(
Ae){var B;C.Cd.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);var Fg=((Ae&0x20)===0x20
);var Gm=this.Bk.Bw;var FE=A.jb.Ads;var GG=A.jb.Bh;if(this.G8){FE=A.jb.Bh;GG=A.jb.
Text;}if(!G1){this.Background.L(FE);this.V.L(A.jb.CM);}else if(Gm){this.Background.
L(A.jb.AY);this.V.L(A.jb.Bh);}else if(Fg){this.Background.L(A.jb.AY);this.V.L(A.
jb.Bh);}else{this.Background.L(FE);this.V.L(GG);}this.Lt=G1;this.Ks=Fg;this.P8=Gm;
},_Init:function(aArg){C.Cd._Init.call(this,aArg);this.__proto__=C.At3;this.V.S(
A.aaL(A.fl.Ak));this.Init(aArg);},_ReInit:function(){C.Cd._ReInit.call(this);this.
V.S(A.aaL(A.fl.Ak));},_className:"Application::EnumItemText"};C.ABG={Am:null,Init:
function(aArg){var B;A.zX([this,this.En],[B=A._GetAutoObject(A.Device.Helper).X,
B.Px,B.DS],0);A.pe([this,this.En],this);},C5:function(E){C.BN.C5.call(this,E);this.
Am.L(E);},En:function(H){switch(A._GetAutoObject(A.Device.Helper).X.AnimalType){
case 0:this.Am.Ax(A.aaL(A.ach.ABD));break;case 1:this.Am.Ax(A.aaL(A.ach.ANj));break;
case 2:this.Am.Ax(A.aaL(A.ach.ANl));break;default:A.ab5("%s%e",AXt,A._GetAutoObject(
A.Device.Helper).X.AnimalType);}},_Init:function(aArg){C.BN._Init.call(this,aArg
);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.ABG;this.Am.G(AGU);this.
J(this.Am,0);this.Am.Ax(A.aaL(A.ach.ABD));this.Init(aArg);},_Done:function(){this.
__proto__=C.BN;this.Am._Done();C.BN._Done.call(this);},_ReInit:function(){C.BN._ReInit.
call(this);this.Am._ReInit();},_Mark:function(D){var B;C.BN._Mark.call(this,D);if((
B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.ABH={Am:null,Init:function(aArg){var B;A.zX([this,this.En],[B=A._GetAutoObject(
A.Device.Helper).X,B.Px,B.DS],0);A.pe([this,this.En],this);},C5:function(E){C.BN.
C5.call(this,E);this.Am.L(E);},En:function(H){switch(A._GetAutoObject(A.Device.Helper
).X.AnimalType){case 0:this.Am.Ax(A.aaL(A.ach.ABE));break;case 1:this.Am.Ax(A.aaL(
A.ach.ANk));break;case 2:this.Am.Ax(A.aaL(A.ach.ANm));break;default:A.ab5("%s%e"
,AXt,A._GetAutoObject(A.Device.Helper).X.AnimalType);}},_Init:function(aArg){C.BN.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);this.__proto__=C.ABH;
this.Am.G(AGU);this.J(this.Am,0);this.Am.Ax(A.aaL(A.ach.ABE));this.Init(aArg);},
_Done:function(){this.__proto__=C.BN;this.Am._Done();C.BN._Done.call(this);},_ReInit:
function(){C.BN._ReInit.call(this);this.Am._ReInit();},_Mark:function(D){var B;C.
BN._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderNewAnimals"};C.Fj={BM:null,Awz:A.jV,C5:function(E){C.Jy.C5.call(
this,E);this.BM.L(E);},Ke:function(E){if(this.Awz===E)return;this.Awz=E;this.BM.
Q(E);},_Init:function(aArg){C.Jy._Init.call(this,aArg);C.CP._Init.call(this.BM={
I:this},0);this.__proto__=C.Fj;this.BM.AV(0x34);this.BM.G(Ahh);this.BM.A2(0x11);
this.BM.L(A.jb.Text);this.J(this.BM,0);this.BM.S(A.aaL(A.fl.Ah));this.BM.A5(A.aaL(
A.fl.Ak));this.BM.CC(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.Jy;this.
BM._Done();C.Jy._Done.call(this);},_ReInit:function(){C.Jy._ReInit.call(this);this.
BM._ReInit();this.BM.S(A.aaL(A.fl.Ah));this.BM.A5(A.aaL(A.fl.Ak));this.BM.CC(A.aaL(
A.fl.By));},_Mark:function(D){var B;C.Jy._Mark.call(this,D);if((B=this.BM)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"};C.
AMH={V1:function(H){this.AfJ();this.A2h(A.aaR(A.acf.Bf8),[this,this.BkE],A._GetAutoObject(
A.Device.Device).Ama);A._GetAutoObject(C.BW).Gq();this.Ex(A.aaR(A.acf.ASY),[this
,this.ARt],5);this.Ex(A.aaR(A.acf.ASW),[this,this.ARs],7);this.Ex(A.aaR(A.acf.Ag4
),[this,this.AjX],2);this.Ex(A.aaR(A.acf.Adb),[this,this.AqJ],1);this.Ex(A.aaR(A.
acf.AiB),[this,this.AmP],0);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Qf(
A.aaR(A.acf.Ac9)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},Dr:
function(H){},AaJ:function(){return C.AAB;},AaK:function(){return C.ABO;},QO:function(
H){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).A4n(
));},HH:function(H){C.EO.HH.call(this,H);if(this.AjC()===false){this.N.Cm(A.aaL(
A.ach.AaU));this.N.Cf=[this,this.A3R];this.N.FA(A.jV);}this.N.Ow(false);this.N.Ox(
false);},Afv:function(){A._GetAutoObject(C.AZ).BZ(48);},Afu:function(){A._GetAutoObject(
C.AZ).BZ(49);},BkE:function(H){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(
A.Device.Device).Avz(!A._GetAutoObject(A.Device.Device).Ama);this.Ano(this);},Ano:
function(H){var Bc=A._GetAutoObject(A.Device.Device).Aq.Filter.Gu();var Ay=Bc.DW(
30,3);if(!!Ay)Bc.QM(Ay);if(A._GetAutoObject(A.Device.Device).Ama){var AyO=A._NewObject(
A.Device.UInt32FilterCriterion,0);var A0d=A._GetAutoObject(A.Device.Helper).Dx()-
21600;AyO.Initialize(30,3,A0d,true);Bc.CZ(AyO);}A._GetAutoObject(A.Device.Device
).Aq.Bm(Bc);},_Init:function(aArg){C.EO._Init.call(this,aArg);this.__proto__=C.AMH;
var B;this.Dp(C.ANf);this.Do(A.aaR(A.acf.A5F));this.AjW([B=A._GetAutoObject(A.Device.
Device),B.A6e,B.A_p]);},_ReInit:function(){C.EO._ReInit.call(this);this.Do(A.aaR(
A.acf.A5F));},_className:"Application::FreshCowListScreen"};C.AMG={_Init:function(
aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AMG;this.K4.Ar(false);this.K4.
Aj(false);this.K4.Y(false);this.Je.Ar(false);this.Je.Aj(false);this.Je.Y(false);
},_className:"Application::FreshCowListFilterScreen"};C.AMF={_Init:function(aArg
){C.Gs._Init.call(this,aArg);this.__proto__=C.AMF;this.N.BU(A.aaR(A.acf.A2R));},
_ReInit:function(){C.Gs._ReInit.call(this);this.N.BU(A.aaR(A.acf.A2R));},_className:
"Application::FreshCowListActionsScreen"};C.ANf={En:function(H){C.J7.En.call(this
,H);this.Da.Ax(A._GetAutoObject(A.Device.Converter).AfP(7));},_Init:function(aArg
){C.J7._Init.call(this,aArg);this.__proto__=C.ANf;},_className:"Application::HeaderFreshCowListFilter"
};C.ABO={Jl:null,DP:null,_Init:function(aArg){C.Du._Init.call(this,aArg);C.CP._Init.
call(this.Jl={I:this},0);C.CP._Init.call(this.DP={I:this},0);this.__proto__=C.ABO;
this.A7f(1);this.Jl.G(Bnl);this.Jl.Q((A.aaR(A.acf.Calving)+ZB)+A.aaR(A.acf.A8X));
this.Jl.L(A.jb.Text);this.DP.G(Bnm);this.DP.Q(A.aaR(A.acf.ACq));this.DP.L(A.jb.Text
);this.J(this.Jl,0);this.J(this.DP,0);this.Jl.S(A.aaL(A.fl.Ak));this.Jl.A5(A.aaL(
A.fl.By));this.DP.S(A.aaL(A.fl.Ak));this.DP.A5(A.aaL(A.fl.By));},_Done:function(
){this.__proto__=C.Du;this.Jl._Done();this.DP._Done();C.Du._Done.call(this);},_ReInit:
function(){C.Du._ReInit.call(this);this.Jl._ReInit();this.DP._ReInit();this.Jl.Q((
A.aaR(A.acf.Calving)+ZB)+A.aaR(A.acf.A8X));this.DP.Q(A.aaR(A.acf.ACq));this.Jl.S(
A.aaL(A.fl.Ak));this.Jl.A5(A.aaL(A.fl.By));this.DP.S(A.aaL(A.fl.Ak));this.DP.A5(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.Du._Mark.call(this,D);if((B=this.Jl).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFreshCow"};C.AAB={AFd:null,KB:null,T6:null,AN:null,A8:null
,Init:function(aArg){},Bg:function(aSize){C.A$.Bg.call(this,aSize);this.Background.
G(A.abK(this.Background.M,aSize));this.V.G(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.T6.G([this.V.M[2],0,((
aSize[0]*72)/100)|0,aSize[1]]);this.A8.G([this.T6.M[2]-1,0,this.T6.M[2]+1,aSize[
1]]);this.KB.G([this.T6.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(
this,Ae);this.KB.L(this.V.AP);this.T6.C5(this.V.AP);},B$:function(Ac){if(!this.AW
)return;this.Hr=Ac;if(!!this.AW){var KP=this.AW.CA(Ac,0);var Od=this.AW.CA(Ac,1);
var A0c=this.AW.CA(Ac,29);var AkS=this.AW.Hy(Ac,28);this.U(Od.toFixed());this.KB.
Q(A0c.toFixed());this.T6.Abt(A._GetAutoObject(A.Device.Device).ApV+1);this.T6.Bkl(
AkS);this.T6.Q(A._GetAutoObject(A.acj.Ky).Ai$(AkS));A._GetAutoObject(A.Device.Device
).Sm(Ac);this.Api(KP);this.Av9();A._GetAutoObject(A.Device.Device).Bq.Bm(null);this.
An();}},A1V:function(H){this.T6.Abv(this.AFd);},Av9:function(){var Gn=A._GetAutoObject(
A.Device.Device).Bq.Ch();this.AFd=A._NewObject(C.AiO,0);if(Gn>0){var P=Gn-1;while(
P>=0){var D0=A._GetAutoObject(A.Device.Device).Bq.Hy(P,6);this.Asr(this.AFd,P,9,
D0);P=P-1;}}A.pe([this,this.A1V],this);},Asr:function(AYE,Ac,AYD,PV){var AkM=A._GetAutoObject(
A.Device.Device).Bq.IU(Ac,AYD);if(!!AkM)AYE.Oe(AkM,PV);},Api:function(Acq){var Fi=
A._NewObject(A.Device.Filter,0);var Aya=A._NewObject(A.Device.UInt32FilterCriterion
,0);Aya.Initialize(6,2,A._GetAutoObject(A.Device.Helper).Y$(A._GetAutoObject(A.Device.
Device).ApV)-1,true);Fi.CZ(Aya);var HN=A._NewObject(A.Device.Int32FilterCriterion
,0);HN.Initialize(1,0,Acq,true);Fi.CZ(HN);A._GetAutoObject(A.Device.Device).Bq.Bm(
Fi);},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.Text._Init.call(this.
KB={I:this},0);C.ARU._Init.call(this.T6={I:this},0);A.acg.AI._Init.call(this.AN={
I:this},0);A.acg.AI._Init.call(this.A8={I:this},0);this.__proto__=C.AAB;this.AN.
L(A.jb.Bb);this.A8.L(A.jb.Bb);this.J(this.KB,0);this.J(this.T6,0);this.J(this.AN
,0);this.J(this.A8,0);this.KB.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.KB._Done();this.T6._Done();this.AN._Done();this.A8._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.KB._ReInit(
);this.T6._ReInit();this.AN._ReInit();this.A8._ReInit();this.KB.S(A.aaL(A.fl.Ah)
);},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.AFd)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.KB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T6
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.ARU={ASA:0,Init:function(aArg){},AMO:function(){return A._GetAutoObject(A.Device.
Helper).Apx(this.ASA);},AMQ:function(){return this.AMO()+(this.Mj*86400);},Bkl:function(
E){if(this.ASA===E)return;this.ASA=E;A.pe([this,this.V_],this);},_Init:function(
aArg){C.AgS._Init.call(this,aArg);this.__proto__=C.ARU;this.Bb.G(Bnn);this.Bki(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Dt:function(){if(this.K&&this.K.Dt)return this.K.
Dt.apply(this,arguments);else return C.FactoryResetScope.BqO.apply(this,arguments
);},BqO:function(){return 2;},Gx:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jV;return this.FactoryResetScopeToString.B0(this.C$(aIndex));},_Init:function(aArg
){C.Ds._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.Cv.
Set(0,0);this.Cv.Set(1,1);var Lk=this._variants();if(Lk){this.K={};Lk._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Ds;this.FactoryResetScopeToString._Done();C.Ds._Done.call(this);},_ReInit:function(
){C.Ds._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.acr.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={Ed:function(H){if(
this.AZ3){A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(A.Device.Device
).Aq);A._GetAutoObject(A.Device.Device).A6(67,true,A._GetAutoObject(A.Device.Helper
).X.VisualId.toFixed(),0,null);}C.SetTransponderScreen.Ed.call(this,H);},_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;
},_className:"Application::SetSaveTransponderScreen"};C.AP9={V1:function(H){this.
AfJ();this.Ex(A.aaR(A.acf.Arh),[this,this.AqZ],3);this.Ex(A.aaR(A.acf.Ag4),[this
,this.AjX],2);this.Ex(A.aaR(A.acf.Adb),[this,this.AqJ],1);this.Ex(A.aaR(A.acf.LinkTransponder
),[this,this.AQ9],8);this.Ex(A.aaR(A.acf.AiB),[this,this.AmP],0);this.Ex(A.aaR(A.
acf.O1),[this,this.Abn],9);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Qf(
A.aaR(A.acf.Ac9)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},Dr:
function(H){},AaJ:function(){return C.AiV;},AaK:function(){return C.Ajg;},QO:function(
H){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).AMT(
));},HH:function(H){C.EO.HH.call(this,H);if(this.AjC()===false){this.N.Cm(A.aaL(
A.ach.Auv));this.N.Cf=[this,this.ALY];this.N.FA(A.jV);}this.N.Ow(false);this.N.Ox(
false);},Afv:function(){A._GetAutoObject(C.AZ).BZ(52);},Afu:function(){A._GetAutoObject(
C.AZ).BZ(53);},_Init:function(aArg){C.EO._Init.call(this,aArg);this.__proto__=C.
AP9;var B;this.Dp(C.ABI);this.Do(A.aaR(A.acf.A5B));this.AjW([B=A._GetAutoObject(
A.Device.Device),B.AQy,B.AXS]);},_ReInit:function(){C.EO._ReInit.call(this);this.
Do(A.aaR(A.acf.A5B));},_className:"Application::NoTransponderListScreen"};C.AP8={
_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AP8;this.KJ.Ar(
false);this.KJ.Aj(false);this.KJ.Y(false);},_className:"Application::NoTransponderListFilterScreen"
};C.AP7={_Init:function(aArg){C.Gs._Init.call(this,aArg);this.__proto__=C.AP7;this.
N.BU(A.aaR(A.acf.A2X));},_ReInit:function(){C.Gs._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A2X));},_className:"Application::NoTransponderListActionsScreen"};C.ABI={
En:function(H){C.J7.En.call(this,H);this.Da.Ax(A._GetAutoObject(A.Device.Converter
).AfP(8));},_Init:function(aArg){C.J7._Init.call(this,aArg);this.__proto__=C.ABI;
},_className:"Application::HeaderNoTransponderListFilter"};C.AAi={AtL:null,Gx:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AtL.B0(aIndex);},_Init:
function(aArg){C.FQ._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.AtL={I:this},0);this.__proto__=C.AAi;},_Done:function(){this.__proto__=
C.FQ;this.AtL._Done();C.FQ._Done.call(this);},_ReInit:function(){C.FQ._ReInit.call(
this);this.AtL._ReInit();},_Mark:function(D){var B;C.FQ._Mark.call(this,D);if((B=
this.AtL)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AJ$={Cd:null,Adi:null,Init:function(aArg){this.Ba(this.Cd);},KD:function(){if(
!this.Bv){this.Bv=A._NewObject(C.N,0);this.Bv.Cu=[this,this.W7];this.Bv.Cf=null;
this.Bv.Ci=[this,this.A0N];this.Bv.BU(A.jV);this.Bv.Cm(null);this.Bv.CS(A.aaL(A.
ach.AdP));}return this.Bv;},Ay4:function(H){var Aa=(C.AiE.isPrototypeOf(H)?H:null
);if(Aa===this.Cd)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);else if(
Aa===this.Adi)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else throw new
Error(A9n);},_Init:function(aArg){C.Fe._Init.call(this,aArg);C.AiE._Init.call(this.
Cd={I:this},0);C.AiE._Init.call(this.Adi={I:this},0);this.__proto__=C.AJ$;this.G(
Q1);this.Text.Q(A.aaR(A.acf.ActionSettings));this.Cd.G(KL);this.Cd.U(A.aaR(A.acf.
ACC));this.Adi.G(Q2);this.Adi.U(A.aaR(A.acf.O1));this.J(this.Cd,0);this.J(this.Adi
,0);this.Text.S(A.aaL(A.fl.Ak));this.Cd.AQ=[this,this.Ay4];this.Adi.AQ=[this,this.
Ay4];this.Init(aArg);},_Done:function(){this.__proto__=C.Fe;this.Cd._Done();this.
Adi._Done();C.Fe._Done.call(this);},_ReInit:function(){C.Fe._ReInit.call(this);this.
Cd._ReInit();this.Adi._ReInit();this.Text.Q(A.aaR(A.acf.ActionSettings));this.Cd.
U(A.aaR(A.acf.ACC));this.Adi.U(A.aaR(A.acf.O1));this.Text.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;C.Fe._Mark.call(this,D);if((B=this.Cd)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Adi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BBD={Undefined:0,BBB:1,BBC:2,IdScanned:3,BAB:4,BzC:5,BAl:6};C.AKl={A8I:function(
){A._GetAutoObject(A.Device.Device).A6(35,true,A._GetAutoObject(A.Device.Helper).
X.VisualId.toFixed(),2000,[this,this.Bcf]);},_Init:function(aArg){C.AtC._Init.call(
this,aArg);this.__proto__=C.AKl;this.FQ.Av(1);this.ARb(true);},_className:"Application::AnimalActionPerishedScreen"
};C.AdK={Vk:null,Vl:null,Vm:null,Agd:null,Age:null,Agf:null,Cu:null,Cf:null,Ci:null
,Ani:A.jV,Anj:A.jV,Ank:A.jV,Ap9:0,Ap_:0,Ap$:0,Agx:0,YZ:false,YY:false,Arn:false,
ArD:false,ArC:false,AiU:function(E3){this.Cu=E3.Cu;this.Cf=E3.Cf;this.Ci=E3.Ci;this.
Ani=E3.Ani;this.Anj=E3.Anj;this.Ank=E3.Ank;this.Agx=E3.Agx;this.Vk=E3.Vk;this.Vl=
E3.Vl;this.Vm=E3.Vm;this.Agd=E3.Agd;this.Age=E3.Age;this.Agf=E3.Agf;this.ArC=E3.
ArC;this.ArD=E3.ArD;this.Arn=E3.Arn;this.YY=E3.YY;this.YZ=E3.YZ;this.Ap9=E3.Ap9;
this.Ap_=E3.Ap_;this.Ap$=E3.Ap$;},Aj$:function(E3){E3.Cu=this.Cu;E3.Cf=this.Cf;E3.
Ci=this.Ci;E3.Hm(this.Ani);E3.FA(this.Anj);E3.BU(this.Ank);E3.ADB(this.Agx);E3.ADt(
this.Vk);E3.AqP(this.Vl);E3.AmT(this.Vm);E3.CS(this.Agd);E3.Cm(this.Age);E3.C7(this.
Agf);E3.Ow(this.ArC);E3.Ox(this.ArD);E3.Arn=this.Arn;E3.YY=this.YY;E3.YZ=this.YZ;
E3.Bjy(this.Ap9);E3.AQ3(this.Ap_);E3.A7q(this.Ap$);},_Init:function(aArg){this.__proto__=
C.AdK;this.Vk=A.aaL(A.fl.Ak);this.Vl=A.aaL(A.fl.Ak);this.Vm=A.aaL(A.fl.Ak);A.h7++;
},_Done:function(){this.__proto__=null;A.h7--;},_ReInit:function(){this.Vk=A.aaL(
A.fl.Ak);this.Vl=A.aaL(A.fl.Ak);this.Vm=A.aaL(A.fl.Ak);},_Mark:function(D){var B;
if((B=this.Vk)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Vl)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Vm)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Agd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Age)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Agf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cu)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cf)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ci)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.Arz._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dp(C.ABG);},_className:"Application::NewAnimalSetTransponderScreen"};C.C2={Aat:null
,CountryToString:null,Dt:function(){return 40;},C$:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},Gx:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jV;return this.CountryToString.Lh(aIndex);},DO:function(A1){return A1;
},Hj:function(){return 39;},Av:function(E){var F;C.AB.Av.call(this,E);if(!!this.
Aat)(F=this.Aat,F[2].call(F[0],E));},AZb:function(H){var F;if(!!this.Aat)this.R=(
F=this.Aat,F[1].call(F[0]));else this.R=0;A.abo([this,this.Ce,this.Cg],0);},ADk:
function(E){if(A.aaZ(this.Aat,E))return;if(!!this.Aat)A.z$([this,this.AZb],this.
Aat,0);this.Aat=E;if(!!this.Aat)A.zX([this,this.AZb],this.Aat,0);A.pe([this,this.
AZb],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.C2;},_Done:function(
){this.__proto__=C.AB;this.CountryToString._Done();C.AB._Done.call(this);},_ReInit:
function(){C.AB._ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Aat)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Country"};C.OF={AB:null,R:null,Background:null,If:null,Ie:null,MM:
0,AK:0,F_:0,FO:0,Afq:function(H){this.JW(this);},Bg:function(aSize){A.Core.O.Bg.
call(this,aSize);this.Background.G(A.abK(this.Background.M,aSize));},Ai:function(
Ae){var B;A.Core.O.Ai.call(this,Ae);var Io=((Ae&0x40)===0x40);if(Io){this.Background.
L(A.jb.AY);this.Dz(256);}else{this.Background.L(this.MM);this.Dz(256);}},Afp:function(
H){this.JR(this);},CN:function(E){if(this.AB===E)return;if(!!this.AB)A.z9([this,
this.A06],this.AB,0);this.AB=E;if(!!E)A.zV([this,this.A06],E,0);if(!!E)A.pe([this
,this.A06],this);},C1:function(E){if(this.MM===E)return;this.MM=E;this.An();},JW:
function(H){var F;var BL=this.AK;this.Bx(this.AK+1);if(this.AK!==BL){if(!!this.R&&
!!this.AB)(F=this.R,F[2].call(F[0],this.AB.C$(this.AK)));A.abo(this.R,0);}},JR:function(
H){var F;var BL=this.AK;this.Bx(this.AK-1);if(this.AK!==BL){if(!!this.R&&!!this.
AB)(F=this.R,F[2].call(F[0],this.AB.C$(this.AK)));A.abo(this.R,0);}},Bx:function(
E){if(E<this.F_)E=this.FO;if(E>this.FO)E=this.F_;if(this.AK===E)return;this.AK=E;
this.An();},GC:function(E){if(this.F_===E)return;this.F_=E;this.An();},Fd:function(
E){if(this.FO===E)return;this.FO=E;this.An();},Db:function(H){var F;if(!!this.R)
this.Bx(this.AB.DO((F=this.R,F[1].call(F[0]))));},Av:function(E){if(A.aaZ(this.R
,E))return;if(!!this.R)A.z$([this,this.Db],this.R,0);this.R=E;if(!!E)A.zX([this,
this.Db],E,0);if(!!E)A.pe([this,this.Db],this);},A06:function(H){var F;if(!!this.
AB){this.GC(0);this.Fd(this.AB.Hj());if(!!this.R)this.Bx(this.AB.DO((F=this.R,F[
1].call(F[0]))));this.An();}},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);A.acg.AI._Init.call(this.Background={I:this},0);A.Core.BO._Init.call(this.If={
I:this},0);A.Core.BO._Init.call(this.Ie={I:this},0);this.__proto__=C.OF;this.G(A9o
);this.Background.G(Asf);this.If.Filter=4;this.Ie.Filter=5;this.MM=A.jb.CM;this.
J(this.Background,0);this.If.BP=[this,this.Afq];this.If.DR=[this,this.Afq];this.
Ie.BP=[this,this.Afp];this.Ie.DR=[this,this.Afp];},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.If._Done();this.Ie._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit(
);this.If._ReInit();this.Ie._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.AB)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.R)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::VerticalSelector"};C.Rt={AY5:A.jV,Ai:function(
Ae){C.Fj.Ai.call(this,Ae);this.U(A.aaR(A.acf.A2$));this.Ke(this.AY5);},B$:function(
H){C.Fj.B$.call(this,H);var AkS=A._GetAutoObject(A.Device.Helper).X.DateOfLastCalving;
if(!AkS)this.AY5=WC;else this.AY5=A._GetAutoObject(A.acj.Ky).Ai$(AkS);this.An();
},_Init:function(aArg){C.Fj._Init.call(this,aArg);this.__proto__=C.Rt;},_className:
"Application::AnimalInfoItemCalvingDate"};C.Ru={A0b:0,Ai:function(Ae){C.Fj.Ai.call(
this,Ae);this.U(A.aaR(A.acf.APl));if(this.A0b>0)this.Ke(this.A0b.toFixed());else
this.Ke(A.aaR(A.acf.Unknown));},B$:function(H){C.Fj.B$.call(this,H);this.A0b=A._GetAutoObject(
A.Device.Helper).X.LactationNumber;this.An();},_Init:function(aArg){C.Fj._Init.call(
this,aArg);this.__proto__=C.Ru;},_className:"Application::AnimalInfoItemLactationNumber"
};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:null,Dt:function(){return 5;
},C$:function(aIndex){if((aIndex<0)||(aIndex>=5))return-1;return aIndex;},Gx:function(
aIndex){if((aIndex<0)||(aIndex>=5))return A.jV;return this.EaseOfDeliveryToString.
B0(aIndex);},DO:function(A1){return A1;},Hj:function(){return 4;},Av:function(E){
C.AB.Av.call(this,E);if(!!this.Animal)this.Animal.AjQ(E);},AZu:function(H){if(!!
this.Animal)this.R=this.Animal.EaseOfDelivery;else this.R=0;A.abo([this,this.Ce,
this.Cg],0);},LO:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.
z$([this,this.AZu],[B=this.Animal,B.AQp,B.AjQ],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.AZu],[B=this.Animal,B.AQp,B.AjQ],0);A.pe([this,this.AZu],this);
},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AB;this.EaseOfDeliveryToString._Done();C.AB.
_Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dt:function(){return 99;},C$:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},Gx:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jV;return this.BreedToString.B0(aIndex);},DO:function(A1){return A1;
},Hj:function(){return 98;},Av:function(E){C.AB.Av.call(this,E);if(!!this.Animal
)this.Animal.NH(E);},AY3:function(H){if(!!this.Animal)this.R=this.Animal.Breed;else
this.R=0;A.abo([this,this.Ce,this.Cg],0);},LO:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.z$([this,this.AY3],[B=this.Animal,B.Au1,B.NH],0);this.
Animal=E;if(!!this.Animal)A.zX([this,this.AY3],[B=this.Animal,B.Au1,B.NH],0);A.pe([
this,this.AY3],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AB;this.BreedToString._Done();C.AB._Done.call(
this);},_ReInit:function(){C.AB._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.APF={VA:null,Ya:null,Ad1:null,Init:function(
aArg){this.Ba(this.VA);},AcP:function(H){var Aa=(C.Cd.isPrototypeOf(H)?H:null);if(
!Aa)return;if(Aa===this.Ya)this.Buq();else if(Aa===this.VA)this.Bw3(this);else throw new
Error(AwY);A._GetAutoObject(A.Device.Device).Cj(0);},Bw3:function(H){var B;var F;
var UO=(C.AlL.isPrototypeOf(B=(F=A._GetAutoObject(C.AZ).R,F[1].call(F[0])))?B:null
);if(!UO){A.ab5("%s",Bno);return;}UO.AIT(this);},Buq:function(){A._GetAutoObject(
A.Device.Helper).X.AEV(true);A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A6(19,true,A._GetAutoObject(
A.Device.Helper).X.VisualId.toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Mc._Init.call(this.VA={I:this},0);C.Mc._Init.call(this.Ya={
I:this},0);C.Vd._Init.call(this.Ad1={I:this},0);this.__proto__=C.APF;var B;this.
G(Ab_);this.VA.G(Q2);this.VA.Ar(true);this.VA.U(A.aaR(A.acf.A8o));this.VA.Bf(true
);this.Ya.G(KL);this.Ya.Ar(true);this.Ya.U(A.aaR(A.acf.A2n));this.Ya.Bf(true);this.
Ad1.G(BC);this.Ad1.U(A.aaR(A.acf.ABh));this.Ad1.Bf(true);this.J(this.VA,0);this.
J(this.Ya,0);this.J(this.Ad1,0);this.VA.AQ=[this,this.AcP];this.Ya.AQ=[this,this.
AcP];this.Ad1.AQT([B=A._GetAutoObject(A.Device.Device),B.Aqx,B.Ash]);this.Init(aArg
);},_Done:function(){this.__proto__=C.OverlayMenu;this.VA._Done();this.Ya._Done(
);this.Ad1._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.VA._ReInit();this.Ya._ReInit();this.Ad1._ReInit();this.VA.
U(A.aaR(A.acf.A8o));this.Ya.U(A.aaR(A.acf.A2n));this.Ad1.U(A.aaR(A.acf.ABh));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.VA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ad1)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MeasurementReadyOverlay"};C.Vd={
Ai:function(Ae){C.TI.Ai.call(this,Ae);var FE=A.jb.CM;var GG=A.jb.Text;if(this.G8
){FE=A.jb.Text;GG=A.jb.Bh;}if(!this.Lt){this.Background.L(FE);this.V.L(A.jb.Amm);
}else if(this.P8){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else if(this.Ks){
this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else{this.Background.L(FE);this.V.
L(GG);}if(this.AlV){this.Ma.Cr(1);this.Ma.L(A.jb.HY);}else{this.Ma.Cr(0);this.Ma.
L(A.jb.Bh);}},_Init:function(aArg){C.TI._Init.call(this,aArg);this.__proto__=C.Vd;
},_className:"Application::DarkThemeMenuItemCheckBox"};C.ACB={C3:null,FM:null,Fv:
null,AjD:null,Qz:null,Ez:null,APX:Lj,Bg:function(aSize){C.Cd.Bg.call(this,aSize);
var FE=A.jb.CM;var GG=A.jb.Text;if(this.G8){FE=A.jb.Bh;GG=A.jb.Text;}this.Background.
L(FE);this.V.L(GG);this.Background.G(A.abK(this.Background.M,aSize));this.V.G([10
,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ai:function(Ae){var F,CK;C.Cd.Ai.call(this
,Ae);this.AjD.L(this.V.AP);this.Qz.L(this.V.AP);this.Qz.Q(Bnp);this.U(((this.APX+
A.aaR(A.acf.Colon))+CJ)+A._GetAutoObject(A.Device.Helper).Ako(840003123456789).toFixed(
));if(!!this.FM&&!!this.Fv){var A0g=this.Qz.Aes([(this.Qz.String.length-(F=this.
Fv,F[1].call(F[0])))-(CK=this.FM,CK[1].call(CK[0])),0]);var A1t=this.Qz.Aes([this.
Qz.String.length-(F=this.Fv,F[1].call(F[0])),0]);var AzP=this.Qz.C_();this.Ez.G([
A0g[0]-1,AzP[1],A1t[0]+1,AzP[3]]);}else this.Ez.G(this.Qz.C_());},Dy:function(E){
if(this.C3===E)return;this.C3=E;this.AjD.Ax(E);},Py:function(E){if(A.aaZ(this.FM
,E))return;if(!!this.FM)A.z$([this,this.ZZ],this.FM,0);this.FM=E;if(!!E)A.zX([this
,this.ZZ],E,0);if(!!E)A.pe([this,this.ZZ],this);},QH:function(E){if(A.aaZ(this.Fv
,E))return;if(!!this.Fv)A.z$([this,this.Z0],this.Fv,0);this.Fv=E;if(!!E)A.zX([this
,this.Z0],E,0);if(!!E)A.pe([this,this.Z0],this);},Z0:function(H){this.An();},ZZ:
function(H){this.An();},ADR:function(E){if(this.APX===E)return;this.APX=E;this.An(
);},_Init:function(aArg){C.Cd._Init.call(this,aArg);A.acg.Am._Init.call(this.AjD={
I:this},0);A.acg.Text._Init.call(this.Qz={I:this},0);A.acg.Cy._Init.call(this.Ez={
I:this},0);this.__proto__=C.ACB;this.G(JN);this.V.A2(0x11);this.AjD.G(QZ);this.Qz.
G(Bnq);this.Ez.G(Bnr);this.Ez.NJ(2);this.Ez.L(A.jb.EX);this.J(this.AjD,0);this.J(
this.Qz,0);this.J(this.Ez,0);this.Qz.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Cd;this.AjD._Done();this.Qz._Done();this.Ez._Done();C.Cd._Done.call(this);},_ReInit:
function(){C.Cd._ReInit.call(this);this.AjD._ReInit();this.Qz._ReInit();this.Ez.
_ReInit();this.Qz.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Cd._Mark.call(this
,D);if((B=this.C3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.FM)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Fv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AjD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ez)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemIdPreview"
};C.AnimalSingleInfoScreen={HH:function(H){C.Ta.HH.call(this,H);if(this.Ajd)this.
N.Cm(A.aaL(A.ach.AD));else this.N.Cm(A.aaL(A.ach.ALl));this.N.C7(A.aaL(A.ach.Options
));this.N.FA(A.jV);this.N.BU(A.jV);this.N.Cf=[this,this.A79];this.N.Ci=[this,this.
V1];this.N.AqP(A.aaL(A.fl.Ak));this.N.AmT(A.aaL(A.fl.Ak));},MI:function(H){this.
BbW(this);},N9:function(H){this.BwY(this);},AfI:function(Uv,Uw,Btv){if(A._GetAutoObject(
A.Device.Device).D1===Btv)A._GetAutoObject(C.BW).AiF(Uv,Uw,true);else A._GetAutoObject(
C.BW).AiF(Uv,Uw,false);},V1:function(H){if((A._GetAutoObject(A.Device.Device).D1===
3)&&!this.Ajd){A._GetAutoObject(C.BW).S8(A.aaR(A.acf.BeU),[this,this.BkA]);A._GetAutoObject(
C.BW).Gq();}this.AfI(A.aaR(A.acf.Rating),[this,this.ARy],3);this.AfI(A.aaR(A.acf.
AeM),[this,this.ARA],2);this.AfI(A.aaR(A.acf.Temperature),[this,this.ARz],1);this.
AfI(A.aaR(A.acf.Adb),[this,this.ARx],0);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(
C.BW).Qf(A.aaR(A.acf.A3H));A._GetAutoObject(A.Device.Device).Cj(6);},_Init:function(
aArg){C.Ta._Init.call(this,aArg);this.__proto__=C.AnimalSingleInfoScreen;},_className:
"Application::AnimalSingleInfoScreen"};C.AnimalMultiInfoScreen={UZ:null,Init:function(
aArg){var B;A.zX([this,this.Afm],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fw,B.
FB],0);A.pe([this,this.BdA],this);A.pe([this,this.QO],this);},CI:function(H){C.Ta.
CI.call(this,H);A.pe([this,this.BdG],this);},AE1:function(H){C.Ta.AE1.call(this,
H);if(!!this.K5)this.AgV(this.K5,this.UZ);},HH:function(H){C.Ta.HH.call(this,H);
this.N.Cm(A.aaL(A.ach.AOX));this.N.C7(A.aaL(A.ach.AOY));if(this.Ajd)this.N.AQ3(0
);else this.N.AQ3(1);this.N.A7q(A._GetAutoObject(A.Device.Converter).Bd3(A._GetAutoObject(
A.Device.Device).D1));this.N.FA(A.jV);this.N.BU(A.jV);this.N.Cf=[this,this.Bis];
this.N.Ci=[this,this.BkC];this.N.AqP(A.aaL(A.fl.Ak));this.N.AmT(A.aaL(A.fl.Ak));
if(!A._GetAutoObject(A.Device.Device).Aq.Qm()){this.N.IW.Dz(100);this.N.Cf=null;
}else this.N.IW.Dz(255);if(!A._GetAutoObject(A.Device.Device).Aq.Ch()){this.N.LI.
Dz(100);this.N.Ci=null;}else this.N.LI.Dz(255);if(A._GetAutoObject(A.Device.Device
).Aq.Ch()<=1){this.N.Tx.Dz(100);this.N.Ty.Dz(100);}else{this.N.Tx.Dz(255);this.N.
Ty.Dz(255);}},MI:function(H){if(A._GetAutoObject(A.Device.Device).Aq.Ch()<=1)return;
var Lp=A._GetAutoObject(A.Device.Helper).X.CE;Lp=Lp+1;if(Lp>=A._GetAutoObject(A.
Device.Device).Aq.Ch())Lp=0;A._GetAutoObject(A.Device.Helper).HD(Lp);},N9:function(
H){if(A._GetAutoObject(A.Device.Device).Aq.Ch()<=1)return;var Lp=A._GetAutoObject(
A.Device.Helper).X.CE;Lp=Lp-1;if(Lp<0)Lp=A._GetAutoObject(A.Device.Device).Aq.Ch(
)-1;A._GetAutoObject(A.Device.Helper).HD(Lp);},Ah5:function(H){if(A._GetAutoObject(
A.Device.Helper).X.Id>0)A._GetAutoObject(C.AZ).BZ(57);},Bis:function(H){A._GetAutoObject(
A.Device.Device).Cj(10);},BkC:function(H){this.BbW(this);},QO:function(H){A._GetAutoObject(
A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).MT());A.pe([this,this.BdG
],this);},BdA:function(H){if(!A._GetAutoObject(A.Device.Device).Aq.Ch()){this.UZ.
Y(true);if(!A._GetAutoObject(A.Device.Device).Aq.Qm()||!A._GetAutoObject(A.Device.
Device).Aq.Filter)this.UZ.Q(A.aaR(A.acf.ACK));else if(!A._GetAutoObject(A.Device.
Device).Aq.Filter.DW(1,4)){if(A._GetAutoObject(A.Device.Helper).ABr(A._GetAutoObject(
A.Device.Device).Aq.Filter)===1)this.UZ.Q(A.aaR(A.acf.AL9));else this.UZ.Q(A.aaR(
A.acf.AL8));}else this.UZ.Q(A.aaR(A.acf.AP5));}else this.UZ.Y(false);},BdG:function(
H){var BxZ=A._GetAutoObject(A.Device.Helper).X.Id;var BxI=A._GetAutoObject(A.Device.
Device).Aq.K3(0,BxZ);if(!A._GetAutoObject(A.Device.Device).Aq.Ch())A._GetAutoObject(
A.Device.Helper).HD(-1);else if(BxI<0)A._GetAutoObject(A.Device.Helper).HD(0);},
Afm:function(H){this.BdA(this);this.HH(this);},_Init:function(aArg){C.Ta._Init.call(
this,aArg);C.Aka._Init.call(this.UZ={I:this},0);this.__proto__=C.AnimalMultiInfoScreen;
this.Dp(C.ANx);this.UZ.G(E2);this.J(this.UZ,0);this.Init(aArg);},_Done:function(
){this.__proto__=C.Ta;this.UZ._Done();C.Ta._Done.call(this);},_ReInit:function(){
C.Ta._ReInit.call(this);this.UZ._ReInit();},_Mark:function(D){var B;C.Ta._Mark.call(
this,D);if((B=this.UZ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"
};C.AKA={Qu:null,VB:null,Aa1:null,Yd:null,Init:function(aArg){var B;var F;this.Ba(
this.Qu);if(!!A._GetAutoObject(C.AZ).R){var UO=(C.AnimalMultiInfoScreen.isPrototypeOf(
B=(F=A._GetAutoObject(C.AZ).R,F[1].call(F[0])))?B:null);if(!UO){A.ab5("%s",AXu);
return;}else{if(UO.Ajd)this.Qu.U(A.aaR(A.acf.Be));else this.Qu.U(A.aaR(A.acf.EH)
);var Ax7=A._GetAutoObject(A.Device.Device).Aq.Filter;if(!Ax7||A._GetAutoObject(
A.Device.Helper).Aqe(Ax7))this.Yd.Ar(false);else if(!A._GetAutoObject(A.Device.Device
).Aq.Ch()){this.VB.Ar(false);this.Qu.Ar(false);}}}},AcP:function(H){var Aa=(C.Cd.
isPrototypeOf(H)?H:null);if(!Aa)return;A._GetAutoObject(A.Device.Device).Cj(0);if(
Aa===this.Aa1)A._GetAutoObject(C.AZ).BZ(9);else if(Aa===this.VB)A._GetAutoObject(
A.Device.Device).Cj(7);else if(Aa===this.Qu)this.Byl();else if(Aa===this.Yd)this.
AY$();else throw new Error(AwY);},Byl:function(){var B;var F;var UO=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.AZ).R,F[1].call(F[0])))?B:null);if(!UO){A.
ab5("%s",AXu);return;}UO.A79(this);},AY$:function(){var B;var F;var UO=(C.AnimalMultiInfoScreen.
isPrototypeOf(B=(F=A._GetAutoObject(C.AZ).R,F[1].call(F[0])))?B:null);if(!UO){A.
ab5("%s",AXu);return;}UO.QO(this);},_Init:function(aArg){C.OverlayMenu._Init.call(
this,aArg);C.Mc._Init.call(this.Qu={I:this},0);C.Mc._Init.call(this.VB={I:this},
0);C.Mc._Init.call(this.Aa1={I:this},0);C.Mc._Init.call(this.Yd={I:this},0);this.
__proto__=C.AKA;this.G(AeW);this.Qu.G(WE);this.Qu.Ar(true);this.Qu.U(A.aaR(A.acf.
EH));this.Qu.Bf(true);this.VB.G(Q2);this.VB.Ar(true);this.VB.U(A.aaR(A.acf.ASd));
this.VB.Bf(true);this.Aa1.G(KL);this.Aa1.U(A.aaR(A.acf.Akc));this.Aa1.Bf(true);this.
Yd.G(BC);this.Yd.U(A.aaR(A.acf.AAF));this.Yd.Bf(true);this.J(this.Qu,0);this.J(this.
VB,0);this.J(this.Aa1,0);this.J(this.Yd,0);this.Qu.AQ=[this,this.AcP];this.VB.AQ=[
this,this.AcP];this.Aa1.AQ=[this,this.AcP];this.Yd.AQ=[this,this.AcP];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Qu._Done();this.VB._Done(
);this.Aa1._Done();this.Yd._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.Qu._ReInit();this.VB._ReInit();this.Aa1.
_ReInit();this.Yd._ReInit();this.Qu.U(A.aaR(A.acf.EH));this.VB.U(A.aaR(A.acf.ASd
));this.Aa1.U(A.aaR(A.acf.Akc));this.Yd.U(A.aaR(A.acf.AAF));},_Mark:function(D){
var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Qu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.VB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aa1)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"
};C.MultiInfoActionsScreen={_Init:function(aArg){C.Gs._Init.call(this,aArg);this.
__proto__=C.MultiInfoActionsScreen;this.N.BU(A.aaR(A.acf.A2W));},_ReInit:function(
){C.Gs._ReInit.call(this);this.N.BU(A.aaR(A.acf.A2W));},_className:"Application::MultiInfoActionsScreen"
};C.IX={Tz:null,Ep:null,XQ:null,Background:null,Am:null,If:null,Ie:null,MM:0,AK:
0,Ai:function(Ae){var B;var F;A.Core.O.Ai.call(this,Ae);var G1=((Ae&0x10)===0x10
);var Io=((Ae&0x40)===0x40);if(Io){this.Background.L(A.jb.AY);this.Am.L(A.jb.Bh);
this.Dz(256);}else if(G1){this.Background.L(this.MM);this.Am.L(A.jb.Text);this.Dz(
256);}else{this.Background.L(this.MM);this.Am.L(A.jb.Text);this.Dz(128);}if(!this.
AK)this.Am.Cr(0);else if(this.AK>0){if(A.aaZ(this.Tz,[B=A._GetAutoObject(A.Device.
Device),B.Au_,B.Axr]))this.Am.Cr(2);else if(A.aaZ(this.Tz,[B=A._GetAutoObject(A.
Device.Device),B.Au9,B.Axq]))this.Am.Cr(3);else if(!!this.XQ&&((F=this.XQ,F[1].call(
F[0]))===1))this.Am.Cr(1);else this.Am.Cr(0);}else if(A.aaZ(this.Tz,[B=A._GetAutoObject(
A.Device.Device),B.Au_,B.Axr]))this.Am.Cr(6);else if(A.aaZ(this.Tz,[B=A._GetAutoObject(
A.Device.Device),B.Au9,B.Axq]))this.Am.Cr(7);else if(!!this.XQ&&((F=this.XQ,F[1].
call(F[0]))===1))this.Am.Cr(5);else this.Am.Cr(4);},Afq:function(H){this.JW(this
);},Afp:function(H){this.JR(this);},JW:function(H){this.Bx(1);},JR:function(H){this.
Bx(-1);},BjI:function(E){if(A.aaZ(this.Tz,E))return;if(!!this.Tz)A.z$([this,this.
A0T],this.Tz,0);this.Tz=E;if(!!E)A.zX([this,this.A0T],this.Tz,0);A.pe([this,this.
A0T],this);},TQ:function(E){if(A.aaZ(this.Ep,E))return;if(!!this.Ep)A.z$([this,this.
Afo],this.Ep,0);this.Ep=E;if(!!E)A.zX([this,this.Afo],this.Ep,0);if(!!E)A.pe([this
,this.Afo],this);},A0T:function(H){var F;if(!!this.Tz)this.Bx((F=this.Tz,F[1].call(
F[0])));},Afo:function(H){A.pe([this,this.Byv],this);},C1:function(E){if(this.MM===
E)return;this.MM=E;this.An();},Bx:function(E){var F;if(this.AK===E)return;this.AK=
E;if(!!this.Tz)(F=this.Tz,F[2].call(F[0],E));this.An();A.abo([this,this.TN,this.
Bx],0);},A7g:function(E){if(A.aaZ(this.XQ,E))return;if(!!this.XQ)A.z$([this,this.
Afo],this.XQ,0);this.XQ=E;if(!!E)A.zX([this,this.Afo],this.XQ,0);if(!!E)A.pe([this
,this.Afo],this);},Byv:function(H){var F,CK;if(!this.XQ||!this.Ep)return;this.BjI(
A._GetAutoObject(A.Device.Helper).Bau((F=this.XQ,F[1].call(F[0])),(CK=this.Ep,CK[
1].call(CK[0]))));this.An();},TN:function(){return this.AK;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);
A.acg.Am._Init.call(this.Am={I:this},0);A.Core.BO._Init.call(this.If={I:this},0);
A.Core.BO._Init.call(this.Ie={I:this},0);this.__proto__=C.IX;this.G(AGV);this.Background.
AV(0x3F);this.Background.G(AGV);this.Am.AV(0x3C);this.Am.G(AGV);this.If.Filter=4;
this.Ie.Filter=5;this.MM=A.jb.CM;this.J(this.Background,0);this.J(this.Am,0);this.
Am.Ax(A.aaL(A.ach.ASC));this.If.BP=[this,this.Afq];this.Ie.BP=[this,this.Afp];},
_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.Am._Done();
this.If._Done();this.Ie._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Background._ReInit();this.Am._ReInit();this.If._ReInit(
);this.Ie._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Tz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ep)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.XQ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ie).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AJ_={V1:function(H){var F;this.AfJ();if(!!A._GetAutoObject(A.Device.Helper).
AMM((F=this.EI,F[1].call(F[0])),0,true))this.A2h(A.aaR(A.acf.A4C),[this,this.BkD
],A._GetAutoObject(A.Device.Device).AlH);else A._GetAutoObject(C.BW).Xh(A.aaR(A.
acf.A4C));A._GetAutoObject(C.BW).Gq();this.Ex(A.aaR(A.acf.LinkTransponder),[this
,this.AQ9],8);this.Ex(A.aaR(A.acf.O1),[this,this.Abn],9);this.Ex(A.aaR(A.acf.Bnf
),[this,this.Bkt],10);this.Ex(A.aaR(A.acf.Arh),[this,this.AqZ],3);this.Ex(A.aaR(
A.acf.Ag4),[this,this.AjX],2);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).
Qf(A.aaR(A.acf.Ac9)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);
},Dr:function(H){},AaJ:function(){return C.AiV;},AaK:function(){return C.Ajg;},QO:
function(H){var F;A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.
Helper).A4g((F=this.EI,F[1].call(F[0]))));},HH:function(H){var F;C.EO.HH.call(this
,H);if(this.AjC()===false){this.N.Cm(A._GetAutoObject(A.Device.Converter).Bd5((F=
this.EI,F[1].call(F[0]))));this.N.Cf=[this,this.AHe];this.N.FA(A.jV);}this.N.Ow(
false);this.N.Ox(false);},Afv:function(){A._GetAutoObject(C.AZ).BZ(59);},Afu:function(
){A._GetAutoObject(C.AZ).BZ(60);},A0W:function(H){C.EO.A0W.call(this,H);A.pe([this
,this.A_J],this);},BkD:function(H){A._GetAutoObject(A.Device.Device).Cj(0);A._GetAutoObject(
A.Device.Device).Ave(!A._GetAutoObject(A.Device.Device).AlH);this.Ano(this);},Ano:
function(H){var F;var Bc=A._GetAutoObject(A.Device.Device).Aq.Filter.Gu();A._GetAutoObject(
A.Device.Helper).Bk9(Bc);if(A._GetAutoObject(A.Device.Device).AlH){var AZR=A._GetAutoObject(
A.Device.Helper).AMM((F=this.EI,F[1].call(F[0])),21600,true);Bc.CZ(AZR);}A._GetAutoObject(
A.Device.Device).Aq.Bm(Bc);},_Init:function(aArg){C.EO._Init.call(this,aArg);this.
__proto__=C.AJ_;var B;this.Do(A.aaR(A.acf.AuX));this.AjW([B=A._GetAutoObject(A.Device.
Device),B.A5U,B.A9_]);},_ReInit:function(){C.EO._ReInit.call(this);this.Do(A.aaR(
A.acf.AuX));},_className:"Application::ActionListScreen"};C.AJ9={_Init:function(
aArg){C.IS._Init.call(this,aArg);this.__proto__=C.AJ9;},_className:"Application::ActionListFilterScreen"
};C.AJ8={_Init:function(aArg){C.Gs._Init.call(this,aArg);this.__proto__=C.AJ8;this.
N.BU(A.aaR(A.acf.A2N));},_ReInit:function(){C.Gs._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A2N));},_className:"Application::ActionListActionsScreen"};C.ANx={Iz:null
,IF:null,Bb:null,Mn:A.jV,Init:function(aArg){var B;A.zX([this,this.M_],[B=A._GetAutoObject(
A.Device.Helper).X,B.A6u,B.A7L],0);A.zX([this,this.M_],[B=A._GetAutoObject(A.Device.
Device).Aq,B.Fw,B.FB],0);},C5:function(E){C.Ix.C5.call(this,E);this.IF.L(E);},En:
function(H){C.Ix.En.call(this,H);var Ax7=A._GetAutoObject(A.Device.Device).Aq.Filter;
if(!Ax7||A._GetAutoObject(A.Device.Helper).Aqe(Ax7))this.Iz.Y(false);else this.Iz.
Y(true);if(A._GetAutoObject(A.Device.Helper).X.Ap0())this.AvK(((A._GetAutoObject(
A.Device.Helper).X.CE+1).toFixed()+A9p)+A._GetAutoObject(A.Device.Device).Aq.Ch(
).toFixed());else this.AvK(A9q);},AvK:function(E){if(this.Mn===E)return;this.Mn=
E;this.IF.Q(E);},_Init:function(aArg){C.Ix._Init.call(this,aArg);A.acg.Am._Init.
call(this.Iz={I:this},0);A.acg.Text._Init.call(this.IF={I:this},0);A.acg.DQ._Init.
call(this.Bb={I:this},0);this.__proto__=C.ANx;this.HI.G(Bns);this.CX.G(Bnt);this.
Iz.G(Bnu);this.Iz.L(A.jb.Text);this.IF.G(A9r);this.IF.HF(2);this.IF.KF(true);this.
IF.A2(0x12);this.IF.Q(A9s);this.Bb.DJ(Axf);this.Bb.DX(Ase);this.Bb.L(A.jb.Bb);this.
J(this.Iz,0);this.J(this.IF,0);this.J(this.Bb,0);this.Iz.Ax(A.aaL(A.ach.AdR));this.
IF.S(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(){this.__proto__=C.Ix;this.
Iz._Done();this.IF._Done();this.Bb._Done();C.Ix._Done.call(this);},_ReInit:function(
){C.Ix._ReInit.call(this);this.Iz._ReInit();this.IF._ReInit();this.Bb._ReInit();
this.IF.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Ix._Mark.call(this,D);if((
B=this.Iz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.ArK={Text:null,Bg:function(aSize){C.OF.Bg.call(this,aSize);this.Text.G(A.abK(
this.Text.M,aSize));},Ai:function(Ae){var B;var F;C.OF.Ai.call(this,Ae);if(!this.
AB||!this.R)this.Text.Q(WC);else this.Text.Q(this.AB.Gx((F=this.R,F[1].call(F[0]
))));var Io=((Ae&0x40)===0x40);if(Io)this.Text.L(A.jb.Bh);else this.Text.L(A.jb.
Text);},_Init:function(aArg){C.OF._Init.call(this,aArg);A.acg.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.ArK;this.Text.Q(Q3);this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.OF;this.Text._Done();C.OF.
_Done.call(this);},_ReInit:function(){C.OF._ReInit.call(this);this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.OF._Mark.call(this,D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextSelector"
};C.Aqb={C3:null,Bg:function(aSize){C.OF.Bg.call(this,aSize);this.C3.G(A.abK(this.
C3.M,aSize));},Ai:function(Ae){var B;var F;C.OF.Ai.call(this,Ae);if(!this.AB||!this.
R)this.C3.Ax(null);else{this.C3.Ax(this.AB.ABn(this.AB.DO((F=this.R,F[1].call(F[
0])))));this.C3.Cr(this.AB.ABp(this.AB.DO((F=this.R,F[1].call(F[0])))));}var Io=((
Ae&0x40)===0x40);if(Io)this.C3.L(A.jb.Bh);else this.C3.L(A.jb.Text);},_Init:function(
aArg){C.OF._Init.call(this,aArg);A.acg.Am._Init.call(this.C3={I:this},0);this.__proto__=
C.Aqb;this.G(AGV);this.C3.G(A9o);this.J(this.C3,0);},_Done:function(){this.__proto__=
C.OF;this.C3._Done();C.OF._Done.call(this);},_ReInit:function(){C.OF._ReInit.call(
this);this.C3._ReInit();},_Mark:function(D){var B;C.OF._Mark.call(this,D);if((B=
this.C3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.AtZ={Vf:null,DirectionOfCountingToString:null,Ady:null,Dt:function(){return 2;
},C$:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return-1;return aIndex;
},Gx:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return A.jV;return this.
DirectionOfCountingToString.B0(aIndex);},DO:function(A1){return A1;},Hj:function(
){return this.Dt()-1;},Av:function(E){var F;C.AB.Av.call(this,E);if(!!this.Vf)(F=
this.Vf,F[2].call(F[0],E));},ABn:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt(
)))return null;return this.Ady.ArL(aIndex);},ABp:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dt()))return-1;return this.Ady.ArM(aIndex);},AZn:function(H){var F;
if(!!this.Vf)this.R=(F=this.Vf,F[1].call(F[0]));else this.R=0;A.abo([this,this.Ce
,this.Cg],0);},Aea:function(E){if(A.aaZ(this.Vf,E))return;if(!!this.Vf)A.z$([this
,this.AZn],this.Vf,0);this.Vf=E;if(!!this.Vf)A.zX([this,this.AZn],this.Vf,0);A.pe([
this,this.AZn],this);},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Ady._Init.call(this.Ady={I:this},0);this.__proto__=C.AtZ;},_Done:function(
){this.__proto__=C.AB;this.DirectionOfCountingToString._Done();this.Ady._Done();
C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Ady._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Vf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ady)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AKs={Hf:null,Ep:null,AnimalIdGenerationMethodToString:
null,Adf:null,Dt:function(){return 4;},C$:function(aIndex){var F;var A1=-1;if((aIndex<
0)||(aIndex>=this.Dt()))return-1;switch(aIndex){case 0:A1=0;break;case 1:A1=1;break;
case 2:A1=this.BvA((F=this.Ep,F[1].call(F[0])));break;case 3:A1=5;break;default:
throw new Error(Bnv+aIndex.toFixed());}return A1;},Gx:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dt()))return A.jV;return this.AnimalIdGenerationMethodToString.
B0(this.C$(aIndex));},DO:function(A1){var aIndex=-1;switch(A1){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bnw+A1.toFixed());}return aIndex;},Hj:function(){return this.
Dt()-1;},Av:function(E){var F;C.AB.Av.call(this,E);if(!!this.Hf)(F=this.Hf,F[2].
call(F[0],E));},ABn:function(aIndex){if((aIndex<0)||(aIndex>=this.Dt()))return null;
return this.Adf.ArL(this.C$(aIndex));},ABp:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dt()))return-1;return this.Adf.ArM(this.C$(aIndex));},AYS:function(H){var F;
if(!!this.Hf)this.R=(F=this.Hf,F[1].call(F[0]));else this.R=0;A.abo([this,this.Ce
,this.Cg],0);},BiA:function(E){if(A.aaZ(this.Hf,E))return;if(!!this.Hf)A.z$([this
,this.AYS],this.Hf,0);this.Hf=E;if(!!this.Hf)A.zX([this,this.AYS],this.Hf,0);A.pe([
this,this.AYS],this);},TQ:function(E){if(A.aaZ(this.Ep,E))return;if(!!this.Ep)A.
z$([this,this.Afo],this.Ep,0);this.Ep=E;if(!!this.Ep)A.zX([this,this.Afo],this.Ep
,0);A.pe([this,this.Afo],this);},Afo:function(H){A.pe([this,this.Bus],this);},BvA:
function(LT){var Q5=0;switch(LT){case 0:Q5=2;break;case 1:Q5=3;break;case 2:Q5=4;
break;default:throw new Error(Bnx+LT.toFixed());}return Q5;},Bus:function(H){var
Bbo=this.C$(this.DO(this.R));if(this.R!==Bbo)this.Av(Bbo);A.we(this,0);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.
call(this.AnimalIdGenerationMethodToString={I:this},0);A.Device.Adf._Init.call(this.
Adf={I:this},0);this.__proto__=C.AKs;},_Done:function(){this.__proto__=C.AB;this.
AnimalIdGenerationMethodToString._Done();this.Adf._Done();C.AB._Done.call(this);
},_ReInit:function(){C.AB._ReInit.call(this);this.AnimalIdGenerationMethodToString.
_ReInit();this.Adf._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((
B=this.Hf)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ep)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Adf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.AEX={Ft:null,Aaf:null,R:null,E$:null,EZ:null,Hw:null,VU:null,A0:null,HR:null
,J4:null,A3:0,AK:0,AkK:0,Init:function(aArg){var B;A.zX([this,this.BbC],[B=A._GetAutoObject(
A.Device.Device),B.AmI,B.AnO],0);},Ai:function(Ae){C.D8.Ai.call(this,Ae);if(this.
A3===1){if(this.G8){this.A0.Fz(A.jb.CM);this.Hw.C1(A.jb.CM);this.VU.C1(A.jb.CM);
this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.A0.Fz(A.jb.C0);this.Hw.
C1(A.jb.C0);this.VU.C1(A.jb.C0);this.Background.L(A.jb.CM);this.V.L(A.jb.Text);}
}else{if(this.G8){this.A0.Fz(A.jb.CM);this.Hw.C1(A.jb.CM);this.VU.C1(A.jb.CM);}else{
this.A0.Fz(A.jb.C0);this.Hw.C1(A.jb.C0);this.VU.C1(A.jb.C0);}this.Ba(null);}},Ja:
function(H){C.D8.Ja.call(this,H);if(!this.A3)this.Ge(this);else this.G0(this);},
DM:function(H){var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(
F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(
F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(
F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(
null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;}break;
default:this.Ft.Aj$((F=this.N,F[1].call(F[0])));}},Ge:function(H){this.Em(1);},G0:
function(H){this.Em(0);},Em:function(EB){var F;if(!this.A3&&!!this.N)this.Ft.AiU((
F=this.N,F[1].call(F[0])));this.A3=EB;if(this.A3<0)this.A3=0;else if(this.A3>1)this.
A3=1;switch(this.A3){case 0:this.Ba(null);break;case 1:{if(this.A0.A6b())this.Ba(
this.A0);else this.Ba(this.VU);if(!this.AK)this.A0.Sl(2);else this.A0.Sl(7);}break;
default:throw new Error(Asg+this.A3.toFixed());}this.DM(this);this.An();},Av:function(
E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.Db],this.R,0);this.R=E;
if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],this);},Db:function(H
){var F;if(!!this.R){this.Bx((F=this.R,F[1].call(F[0])));A.abo([this,this.TN,this.
Bx],0);}},Bx:function(E){var F;if(this.AK===E)return;this.AK=E;if(!!this.R)(F=this.
R,F[2].call(F[0],this.AK));},N9:function(H){this.AzH(2);},MI:function(H){this.AzH(
7);},AzH:function(GF){var B;var Ax8=(A.Core.O.isPrototypeOf(B=this.AY)?B:null);if(
!!Ax8){var AyV=(A.Core.O.isPrototypeOf(B=this.RT(Ax8,GF,0x15))?B:null);if(!!AyV){
this.Ba(AyV);return true;}}return false;},Aob:function(H){A.pe([this,this.BbC],this
);},A1D:function(H){var B;var F;if(!this.HR.Hf){this.J4.Aea(null);return;}switch((
F=this.HR.Hf,F[1].call(F[0]))){case 0:case 1:this.J4.Aea(null);break;case 3:this.
J4.Aea([B=A._GetAutoObject(A.Device.Device),B.AQn,B.AXM]);break;case 2:this.J4.Aea([
B=A._GetAutoObject(A.Device.Device),B.AQo,B.AXN]);break;case 4:case 5:this.J4.Aea([
B=A._GetAutoObject(A.Device.Device),B.ACY,B.AG6]);break;default:throw new Error(
Bny+(F=this.HR.Hf,F[1].call(F[0])).toFixed());}},BbC:function(H){var F;if(!this.
HR.Hf)return;A.pe([this,this.A1D],this);var AsR=false;switch((F=this.HR.Hf,F[1].
call(F[0]))){case 3:case 2:case 5:case 4:{AsR=true;this.A0.A72(-1);}break;case 0:
case 1:{AsR=false;this.A0.A72(A._GetAutoObject(A.Device.Device).FM);}break;default:
throw new Error(Aw_+(F=this.HR.Hf,F[1].call(F[0])).toFixed());}this.A0.Ar(AsR);this.
Hw.Ar(AsR);this.Hw.Y(AsR);if(((F=this.HR.Hf,F[1].call(F[0]))!==this.AkK)||(AsR===
false)){var BL=this.AK;this.Bx(A._GetAutoObject(A.Device.Helper).AKq((F=this.HR.
Hf,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).X));if(this.AK!==BL){if(!!
this.R)(F=this.R,F[2].call(F[0],this.AK));A.abo(this.R,0);}}if(A._GetAutoObject(
A.Device.Helper).Bgk((F=this.HR.Hf,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper
).X))this.A0.Ka(A._GetAutoObject(A.Device.Device).FM);else this.A0.Ka(0);this.AkK=(
F=this.HR.Hf,F[1].call(F[0]));},A61:function(E){var B;if(this.Aaf===E)return;if(
!!this.Aaf){A.z$([this,this.Aob],[B=this.Aaf,B.V0,B.JG],0);A.z$([this,this.Aob],[
B=this.Aaf,B.AmM,B.M3],0);A.z$([this,this.Aob],[B=this.Aaf,B.AjK,B.M4],0);this.HR.
TQ(null);}this.Aaf=E;if(!!E){A.zX([this,this.Aob],[B=this.Aaf,B.V0,B.JG],0);A.zX([
this,this.Aob],[B=this.Aaf,B.AmM,B.M3],0);A.zX([this,this.Aob],[B=this.Aaf,B.AjK
,B.M4],0);this.HR.TQ([B=this.Aaf,B.V0,B.JG]);}if(!!E)A.pe([this,this.Aob],this);
},TN:function(){return this.AK;},_Init:function(aArg){C.D8._Init.call(this,aArg);
A.Core.BO._Init.call(this.E$={I:this},0);A.Core.BO._Init.call(this.EZ={I:this},0
);C.Aqb._Init.call(this.Hw={I:this},0);C.Aqb._Init.call(this.VU={I:this},0);C.AuM.
_Init.call(this.A0={I:this},0);C.AKs._Init.call(this.HR={I:this},0);C.AtZ._Init.
call(this.J4={I:this},0);this.__proto__=C.AEX;var B;this.G(Uq);this.V.Ar(false);
this.V.Q(Asa);this.V.L(A.jb.Bh);this.E$.Filter=6;this.EZ.Filter=7;this.Hw.G(Bnz);
this.Hw.Ar(false);this.VU.G(BnA);this.A0.G(BnB);this.A0.Ar(false);this.J(this.Hw
,0);this.J(this.VU,0);this.J(this.A0,0);this.Ft=A._NewObject(C.AdK,0);this.E$.BP=[
this,this.N9];this.EZ.BP=[this,this.MI];this.Hw.CN(this.J4);this.Hw.Av([B=this.J4
,B.Ce,B.Cg]);this.VU.CN(this.HR);this.VU.Av([B=this.HR,B.Ce,B.Cg]);this.A0.Av([this
,this.TN,this.Bx]);this.HR.BiA([B=A._GetAutoObject(A.Device.Device),B.AmI,B.AnO]
);this.Init(aArg);},_Done:function(){this.__proto__=C.D8;this.E$._Done();this.EZ.
_Done();this.Hw._Done();this.VU._Done();this.A0._Done();this.HR._Done();this.J4.
_Done();C.D8._Done.call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.
E$._ReInit();this.EZ._ReInit();this.Hw._ReInit();this.VU._ReInit();this.A0._ReInit(
);this.HR._ReInit();this.J4._ReInit();},_Mark:function(D){var B;C.D8._Mark.call(
this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aaf)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VU)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HR).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.J4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemIDGeneration"};C.GM={Ayq:null,E$:null,EZ:null,GJ:null,
FK:null,Ez:null,MR:0,AK4:0,AAx:0,TX:0,A9a:-1,AK3:false,Init:function(aArg){A.pe([
this,this.AYf],this);},Ai:function(Ae){A.Core.O.Ai.call(this,Ae);this.Ez.Y(this.
AK3);this.Ez.G(A.wC(this.XW(this.AAx).M,this.XW((this.AAx+this.AK4)-1).M));},N9:
function(H){var DV=(A.Core.BO.isPrototypeOf(H)?H:null);var AY8=this.Bc3(2);if(AY8===
false)DV.O9=true;},MI:function(H){var DV=(A.Core.BO.isPrototypeOf(H)?H:null);var
AY8=this.Bc3(7);if(AY8===false)DV.O9=true;},Bc3:function(GF){var B;var Ek=(C.DE.
isPrototypeOf(B=this.AY)?B:null);Ek=this.Baw(Ek,GF,true);if(!!Ek){this.Ba(Ek);this.
Ayq=(C.DE.isPrototypeOf(B=this.AY)?B:null);return true;}return false;},AcO:function(
H){A.ab5("%s",Akx);},GE:function(s){this.AcO(s);},Fz:function(E){if(this.MR===E)
return;this.MR=E;this.FK.C1(E);this.GJ.C1(E);},Sl:function(GF){var B;switch(GF){
case 2:this.Ba(this.GJ);break;case 7:this.Ba(this.FK);break;default:A.ab5("%s%e"
,BnC,GF);}this.Ayq=(C.DE.isPrototypeOf(B=this.AY)?B:null);},Lz:function(H){},AYf:
function(s){this.Lz(s);},ADe:function(E){if(this.AK3===E)return;this.AK3=E;this.
An();},A67:function(E){if(this.AK4===E)return;this.AK4=E;this.An();},A66:function(
E){if(this.AAx===E)return;this.AAx=E;this.An();},XW:function(IK){var B2=null;switch(
IK){case-1:case 0:B2=this.FK;break;case 1:B2=this.GJ;break;default:A.ab5("%s",Ahj
);}return B2;},Ka:function(E){if(this.TX===E)return;this.TX=E;this.AlD();},AlD:function(
){A.ab5("%s",Akx);},Baw:function(Ack,GF,Lt){var B;if(!!Ack){var Bc;if(Lt)Bc=0x11;
else Bc=0x0;switch(GF){case 2:Ack=(C.DE.isPrototypeOf(B=this.ApQ(Ack,Bc))?B:null
);break;case 7:Ack=(C.DE.isPrototypeOf(B=this.Vj(Ack,Bc))?B:null);break;default:
throw new Error(BnD);}}return Ack;},A72:function(E){if(this.A9a===E)return;this.
A9a=E;var Ek=this.FK;var AZv;while(!!Ek){AZv=!!E;Ek.Ar(AZv);Ek.Y(AZv);if(Ek===this.
Ayq)this.Ba(Ek);Ek=this.Baw(Ek,2,false);if(E>0)E=E-1;}},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.Core.BO._Init.call(this.E$={I:this},0);A.Core.BO._Init.
call(this.EZ={I:this},0);C.DE._Init.call(this.GJ={I:this},0);C.DE._Init.call(this.
FK={I:this},0);A.acg.Cy._Init.call(this.Ez={I:this},0);this.__proto__=C.GM;this.
G(BnE);this.E$.Filter=6;this.EZ.Filter=7;this.MR=A.jb.CM;this.GJ.G(EU);this.FK.G(
A9t);this.Ez.G(BnF);this.Ez.NJ(2);this.Ez.L(A.jb.EX);this.J(this.GJ,0);this.J(this.
FK,0);this.J(this.Ez,0);this.E$.BP=[this,this.N9];this.E$.DR=[this,this.N9];this.
EZ.BP=[this,this.MI];this.EZ.DR=[this,this.MI];this.Ayq=this.FK;this.GJ.Di=[this
,this.GE];this.FK.Di=[this,this.GE];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.E$._Done();this.EZ._Done();this.GJ._Done();this.FK._Done();this.Ez.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.E$._ReInit();this.EZ._ReInit();this.GJ._ReInit();this.FK._ReInit();this.Ez.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ayq)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.EZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ez)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber"};C.AO3={Dm:null,CQ:null,Cn:null
,Fz:function(E){if(this.MR===E)return;C.HA.Fz.call(this,E);this.Cn.C1(E);this.CQ.
C1(E);this.Dm.C1(E);},XW:function(IK){var B2=null;switch(IK){case-1:case 0:B2=this.
FK;break;case 1:B2=this.Cn;break;case 2:B2=this.CQ;break;case 3:B2=this.Dm;break;
case 4:B2=this.GJ;break;default:A.ab5("%s",Ahj);}return B2;},_Init:function(aArg
){C.HA._Init.call(this,aArg);C.DE._Init.call(this.Dm={I:this},0);C.DE._Init.call(
this.CQ={I:this},0);C.DE._Init.call(this.Cn={I:this},0);this.__proto__=C.AO3;this.
G(BnG);this.GJ.G(Asf);this.Dm.G(A9u);this.CQ.G(A9v);this.Cn.G(A9w);this.FK.G(BnH
);this.J(this.Dm,-2);this.J(this.CQ,-2);this.J(this.Cn,-2);this.Dm.Di=[this,this.
GE];this.CQ.Di=[this,this.GE];this.Cn.Di=[this,this.GE];},_Done:function(){this.
__proto__=C.HA;this.Dm._Done();this.CQ._Done();this.Cn._Done();C.HA._Done.call(this
);},_ReInit:function(){C.HA._ReInit.call(this);this.Dm._ReInit();this.CQ._ReInit(
);this.Cn._ReInit();},_Mark:function(D){var B;C.HA._Mark.call(this,D);if((B=this.
Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.ATa={QR:null,Ab2:null,AS$:0,CI:function(H){this.Ab2.Ar(true);},Fb:function(H
){this.Ab2.Ar(false);},Bkr:function(E){if(this.AS$===E)return;this.AS$=E;this.QR.
Q((((A.aaR(A.acf.AS_)+ZB)+E.toFixed())+BnI)+A.aaR(A.acf.K2));},Bim:function(){return this.
AS$;},Bxh:function(H){A._GetAutoObject(C.AZ).BZ(3);A._GetAutoObject(A.Device.Device
).AmR(1);},_Init:function(aArg){C.Xt._Init.call(this,aArg);C.CP._Init.call(this.
QR={I:this},0);A.acl.FX._Init.call(this.Ab2={I:this},0);this.__proto__=C.ATa;this.
Ad2.G(BnJ);this.T5.Q(A.jV);this.QR.G(BnK);this.QR.Q(A.aaR(A.acf.AS_)+A9x);this.QR.
L(A.jb.Text);this.Ab2.ID(1);this.Ab2.Fy(5000);this.Ab2.B1=100;this.J(this.QR,0);
this.QR.S(A.aaL(A.fl.Ah));this.QR.A5(A.aaL(A.fl.Ak));this.QR.CC(A.aaL(A.fl.By));
this.Ab2.Sa=[this,this.Bxh];this.Ab2.R=[this,this.Bim,this.Bkr];},_Done:function(
){this.__proto__=C.Xt;this.QR._Done();this.Ab2._Done();C.Xt._Done.call(this);},_ReInit:
function(){C.Xt._ReInit.call(this);this.QR._ReInit();this.Ab2._ReInit();this.QR.
Q(A.aaR(A.acf.AS_)+A9x);this.QR.S(A.aaL(A.fl.Ah));this.QR.A5(A.aaL(A.fl.Ak));this.
QR.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Xt._Mark.call(this,D);if((B=this.
QR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab2)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::UpdateScreen"};C.APS={KS:null,K_:null,Bbe:false,Init:
function(aArg){this.Ba(this.C4);},Ed:function(H){var B;if(!!this.KS)this.KS.Ed(this
);C.VX.Ed.call(this,H);},Afr:function(H){var B;if(!!this.KS)this.KS.Afr(this);C.
VX.Afr.call(this,H);},CI:function(H){var B;if(!this.Bbe){this.Bbe=true;A.pe([this
,this.A1b],this);}else if(!this.KS){this.KS=A._NewObject(C.APU,0);this.KS.A7e([this
,this.Azx]);this.Lz(this);this.KS.Lz(this);if(!A._GetAutoObject(A.Device.Helper).
X.NaisIdMother)this.Ed(this);else C.VX.CI.call(this,H);}else C.VX.CI.call(this,H
);},Aph:function(H){var B;if(!!this.KS)this.KS.Aph(this);},Azx:function(H){var B;
var F;this.Lz(this);this.KS.Lz(this);A.pe([this,this.WG],this);var BaT=this.LK;this.
AgE(A._GetAutoObject(A.Device.Helper).AaH(A._GetAutoObject(A.Device.Helper).X.AnimalType
));A._GetAutoObject(A.Device.Helper).AS9(A._GetAutoObject(A.Device.Helper).X,A._GetAutoObject(
A.Device.Device).EartagNrAssignmentMode,BaT);if(BaT)A._GetAutoObject(A.Device.Helper
).X.M4(A._GetAutoObject(A.Device.Helper).X.NaisId);A._GetAutoObject(A.Device.Helper
).X.TU(A._GetAutoObject(A.Device.Helper).AKq((F=this.Dv.HR.Hf,F[1].call(F[0])),A.
_GetAutoObject(A.Device.Helper).X));this.LA(this.C4);},A1b:function(H){A._GetAutoObject(
C.AZ).BZ(90);},_Init:function(aArg){C.VX._Init.call(this,aArg);C.QQ._Init.call(this.
K_={I:this},0);this.__proto__=C.APS;var B;this.K_.G(Ahe);this.K_.Aj(true);this.K_.
U(A.aaR(A.acf.AAU));this.J(this.K_,-8);this.Kh(this.FY,-1);this.K_.GB([this,this.
Ea,this.G_]);this.K_.Av([B=A._GetAutoObject(A.Device.Helper).X,B.AQx,B.AmZ]);this.
Init(aArg);},_Done:function(){this.__proto__=C.VX;this.K_._Done();C.VX._Done.call(
this);},_ReInit:function(){C.VX._ReInit.call(this);this.K_._ReInit();this.K_.U(A.
aaR(A.acf.AAU));},_Mark:function(D){var B;C.VX._Mark.call(this,D);if((B=this.KS)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.K_)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::NewAnimalCalvingDataScreen"};C.ACd={Af1:null,Af2:null,Nw:
null,Nv:null,EQ:null,FW:null,Ef:null,Dm:null,CQ:null,Cn:null,Fz:function(E){if(this.
MR===E)return;C.K6.Fz.call(this,E);this.Cn.C1(E);this.CQ.C1(E);this.Dm.C1(E);this.
Ef.C1(E);this.FW.C1(E);this.EQ.C1(E);this.Nv.C1(E);this.Nw.C1(E);this.Af2.C1(E);
this.Af1.C1(E);},XW:function(IK){var B2=null;switch(IK){case-1:case 0:B2=this.FK;
break;case 1:B2=this.Cn;break;case 2:B2=this.CQ;break;case 3:B2=this.Dm;break;case
4:B2=this.Ef;break;case 5:B2=this.FW;break;case 6:B2=this.EQ;break;case 7:B2=this.
Nv;break;case 8:B2=this.Nw;break;case 9:B2=this.Af2;break;case 10:B2=this.Af1;break;
case 11:B2=this.GJ;break;default:A.ab5("%s",Ahj);}return B2;},_Init:function(aArg
){C.K6._Init.call(this,aArg);C.DE._Init.call(this.Af1={I:this},0);C.DE._Init.call(
this.Af2={I:this},0);C.DE._Init.call(this.Nw={I:this},0);C.DE._Init.call(this.Nv={
I:this},0);C.DE._Init.call(this.EQ={I:this},0);C.DE._Init.call(this.FW={I:this},
0);C.DE._Init.call(this.Ef={I:this},0);C.DE._Init.call(this.Dm={I:this},0);C.DE.
_Init.call(this.CQ={I:this},0);C.DE._Init.call(this.Cn={I:this},0);this.__proto__=
C.ACd;this.G(BnL);this.GJ.G(AGW);this.Af1.G(Axg);this.Af2.G(AXv);this.Nw.G(AXw);
this.Nv.G(AXx);this.EQ.G(AXy);this.FW.G(AXz);this.Ef.G(AXA);this.Dm.G(A9y);this.
CQ.G(AXB);this.Cn.G(BnM);this.FK.G(BnN);this.J(this.Af1,-2);this.J(this.Af2,-2);
this.J(this.Nw,-2);this.J(this.Nv,-2);this.J(this.EQ,-2);this.J(this.FW,-2);this.
J(this.Ef,-2);this.J(this.Dm,-2);this.J(this.CQ,-2);this.J(this.Cn,-2);this.Af1.
Di=[this,this.GE];this.Af2.Di=[this,this.GE];this.Nw.Di=[this,this.GE];this.Nv.Di=[
this,this.GE];this.EQ.Di=[this,this.GE];this.FW.Di=[this,this.GE];this.Ef.Di=[this
,this.GE];this.Dm.Di=[this,this.GE];this.CQ.Di=[this,this.GE];this.Cn.Di=[this,this.
GE];},_Done:function(){this.__proto__=C.K6;this.Af1._Done();this.Af2._Done();this.
Nw._Done();this.Nv._Done();this.EQ._Done();this.FW._Done();this.Ef._Done();this.
Dm._Done();this.CQ._Done();this.Cn._Done();C.K6._Done.call(this);},_ReInit:function(
){C.K6._ReInit.call(this);this.Af1._ReInit();this.Af2._ReInit();this.Nw._ReInit(
);this.Nv._ReInit();this.EQ._ReInit();this.FW._ReInit();this.Ef._ReInit();this.Dm.
_ReInit();this.CQ._ReInit();this.Cn._ReInit();},_Mark:function(D){var B;C.K6._Mark.
call(this,D);if((B=this.Af1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Af2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Nw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Nv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber12"
};C.HA={R:null,AK:0,Ai:function(Ae){C.GM.Ai.call(this,Ae);this.AlD();},AcO:function(
H){var B;var F;var KP=A.jV;var B2=this.GJ;while(!!B2){if(B2.E9>0)KP=KP+B2.E9.toFixed(
);else KP=KP+String.fromCharCode(0x30);B2=(C.DE.isPrototypeOf(B=this.Vj(B2,0x11)
)?B:null);}var BL=this.AK;this.Bx(A.wz(KP,-1,10));if(this.AK!==BL){if(!!this.R)(
F=this.R,F[2].call(F[0],this.AK));A.abo(this.R,0);}},Lz:function(H){},AlD:function(
){var B;var F;if(!!this.R){var Ek=this.FK;var AcU=this.TX;var A1=(F=this.R,F[1].
call(F[0]));while(!!Ek){if(A1>0){Ek.M1(A1%10);A1=(A1/10)|0;}else if(AcU>0)Ek.M1(
0);else Ek.M1(-1);Ek=(C.DE.isPrototypeOf(B=this.ApQ(Ek,0x11))?B:null);AcU=AcU-1;
}}},Db:function(H){var F;if(!!this.R)this.Bx((F=this.R,F[1].call(F[0])));},Av:function(
E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.Db],this.R,0);this.R=E;
if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],this);},Bx:function(E
){if(this.AK===E)return;this.AK=E;this.An();},_Init:function(aArg){C.GM._Init.call(
this,aArg);this.__proto__=C.HA;},_Mark:function(D){var B;C.GM._Mark.call(this,D);
if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_32"
};C.K6={AK:0,R:null,Ai:function(Ae){C.GM.Ai.call(this,Ae);this.AlD();},AcO:function(
H){var B;var F;var KP=A.jV;var B2=this.GJ;while(!!B2){if(B2.E9>0)KP=KP+B2.E9.toFixed(
);else KP=KP+String.fromCharCode(0x30);B2=(C.DE.isPrototypeOf(B=this.Vj(B2,0x11)
)?B:null);}var BL=this.AK;this.Bx(A.ab0(KP,0,10));if(this.AK!==BL){if(!!this.R)(
F=this.R,F[2].call(F[0],this.AK));A.abo(this.R,0);}},Lz:function(H){},AlD:function(
){var B;var F;if(!!this.R){var Ek=this.FK;var AcU=this.TX;var A1=(F=this.R,F[1].
call(F[0]));while(!!Ek){if(A1>0){Ek.M1((A1%10)|0);A1=Math.trunc(A1/10);}else if(
AcU>0)Ek.M1(0);else Ek.M1(-1);Ek=(C.DE.isPrototypeOf(B=this.ApQ(Ek,0x11))?B:null
);AcU=AcU-1;}}},Db:function(H){var F;if(!!this.R)this.Bx((F=this.R,F[1].call(F[0
])));},Av:function(E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.Db],
this.R,0);this.R=E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],this
);},Bx:function(E){if(this.AK===E)return;this.AK=E;this.An();},_Init:function(aArg
){C.GM._Init.call(this,aArg);this.__proto__=C.K6;},_Mark:function(D){var B;C.GM.
_Mark.call(this,D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::InputNumber2_64"};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:
null,Dt:function(){return 2;},C$:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gx:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
EartagNrAssignmentModeToString.B0(aIndex);},DO:function(A1){return A1;},Hj:function(
){return 1;},_Init:function(aArg){C.AB._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString.
_Init.call(this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AB;this.EartagNrAssignmentModeToString._Done(
);C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AuM={Ef:null,Dm:null,CQ:null,Cn:null,Fz:function(E){if(this.MR===E)return;C.
HA.Fz.call(this,E);this.Cn.C1(E);this.CQ.C1(E);this.Dm.C1(E);this.Ef.C1(E);},XW:
function(IK){var B2=null;switch(IK){case-1:case 0:B2=this.FK;break;case 1:B2=this.
Cn;break;case 2:B2=this.CQ;break;case 3:B2=this.Dm;break;case 4:B2=this.Ef;break;
case 5:B2=this.GJ;break;default:A.ab5("%s",Ahj);}return B2;},_Init:function(aArg
){C.HA._Init.call(this,aArg);C.DE._Init.call(this.Ef={I:this},0);C.DE._Init.call(
this.Dm={I:this},0);C.DE._Init.call(this.CQ={I:this},0);C.DE._Init.call(this.Cn={
I:this},0);this.__proto__=C.AuM;this.G(Aw2);this.GJ.G(AF6);this.Ef.G(AF7);this.Dm.
G(AF8);this.CQ.G(AF9);this.Cn.G(AF_);this.FK.G(AF$);this.Ez.G(A9z);this.J(this.Ef
,-2);this.J(this.Dm,-2);this.J(this.CQ,-2);this.J(this.Cn,-2);this.Ef.Di=[this,this.
GE];this.Dm.Di=[this,this.GE];this.CQ.Di=[this,this.GE];this.Cn.Di=[this,this.GE
];},_Done:function(){this.__proto__=C.HA;this.Ef._Done();this.Dm._Done();this.CQ.
_Done();this.Cn._Done();C.HA._Done.call(this);},_ReInit:function(){C.HA._ReInit.
call(this);this.Ef._ReInit();this.Dm._ReInit();this.CQ._ReInit();this.Cn._ReInit(
);},_Mark:function(D){var B;C.HA._Mark.call(this,D);if((B=this.Ef)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.ASl={AttributeSet:null,Ai:function(Ae){var B;C.B_.
Ai.call(this,Ae);var G1=((Ae&0x10)===0x10);var Fg=((Ae&0x20)===0x20);var Io=((Ae&
0x40)===0x40);var Gm=this.Bk.Bw;var FE=A.jb.CM;var GG=A.jb.Text;if(this.G8){FE=A.
jb.Bh;GG=A.jb.Text;}if(!G1){this.Background.L(A.jb.C0);this.V.L(A.jb.CM);this.AttributeSet.
AgF(A.jb.CM);}else if(Gm){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);this.AttributeSet.
AgF(A.jb.Bh);}else if(Io){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);this.AttributeSet.
AgF(A.jb.Bh);}else if(Fg){this.Background.L(A.jb.Amm);this.V.L(A.jb.Bh);this.AttributeSet.
AgF(A.jb.Bh);}else{this.Background.L(FE);this.V.L(GG);this.AttributeSet.AgF(GG);
}this.Lt=G1;this.Ks=Fg;this.P8=Gm;this.Aou=Io;},Init:function(aArg){this.AttributeSet.
Blt(0);this.AttributeSet.Blu(1);this.AttributeSet.Blv(4);},G9:function(H){var B;
var FS=this.Dn.GN;var Cw=(A.acg.AtJ.isPrototypeOf(B=this.Dn.Ca)?B:null);Cw.A63(this.
AttributeSet);Cw.A2(0x12);if(!Cw)return;if(!!this.AB)Cw.Q(this.Bvt(this.AB.Gx(FS
)));else Cw.Q(WC);Cw.G(A.abK(Cw.M,[this.Dn.VF,(B=this.Dn.M)[3]-B[1]]));},Bvt:function(
BtU){var Azg=BtU;Azg=A._GetAutoObject(A.Device.Helper).NO(Azg,BnO,BnP);Azg=A._GetAutoObject(
A.Device.Helper).NO(Azg,BnQ,BnR);return BnS+Azg;},_Init:function(aArg){C.B_._Init.
call(this,aArg);A.Graphics.AttrSet._Init.call(this.AttributeSet={I:this},0);this.
__proto__=C.ASl;this.Dn.G(BnT);this.Dn.Jm(2);this.Dn.NI(A.acg.AtJ);this.AttributeSet.
AgF(this.V.AP);this.AttributeSet.Bjq(A.aaL(A.fl.AMC));this.AttributeSet.A7n(A.aaL(
A.fl.Ak));this.AttributeSet.AgI(A.aaL(A.fl.Ak));this.Init(aArg);},_Done:function(
){this.__proto__=C.B_;this.AttributeSet._Done();C.B_._Done.call(this);},_ReInit:
function(){C.B_._ReInit.call(this);this.AttributeSet._ReInit();this.AttributeSet.
A7n(A.aaL(A.fl.Ak));this.AttributeSet.AgI(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;C.B_._Mark.call(this,D);if((B=this.AttributeSet)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::SettingsItemGroupSpecialChars"};C.NewAnimalsSetTransponderScreen={
_Init:function(aArg){C.Arz._Init.call(this,aArg);this.__proto__=C.NewAnimalsSetTransponderScreen;
this.Dp(C.ABH);},_className:"Application::NewAnimalsSetTransponderScreen"};C.ReasonOfLeaving={
ReasonOfLeavingToString:null,Dt:function(){return 14;},C$:function(aIndex){if((aIndex<
0)||(aIndex>=14))return-1;return aIndex;},Gx:function(aIndex){if((aIndex<0)||(aIndex>=
14))return A.jV;return this.ReasonOfLeavingToString.B0(aIndex);},DO:function(A1){
return A1;},Hj:function(){return 13;},_Init:function(aArg){C.AB._Init.call(this,
aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AB;this.ReasonOfLeavingToString._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.OA={Ft:null,EnumToCodeset:
null,Jk:null,A3:0,Number:0,Ai:function(Ae){C.B_.Ai.call(this,Ae);if(this.A3===1){
if(this.G8){this.Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.Background.
L(A.jb.CM);this.V.L(A.jb.Text);}}},Bx:function(E){C.B_.Bx.call(this,E);var Bwi=this.
EnumToCodeset.AlY(this.Number);var Bbn=this.AB.C$(this.AK);if(Bwi!==Bbn){this.ADU(
this.EnumToCodeset.AdC(Bbn));A.abo([this,this.AQz,this.ADU],0);}},DM:function(H){
var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.
aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[
this,this.G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(
A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(null);(F=
this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;}break;default:
this.Ft.Aj$((F=this.N,F[1].call(F[0])));}},Ge:function(H){this.Em(1);},G0:function(
H){this.Em(0);},Em:function(EB){var F;if(!this.A3)this.Ft.AiU((F=this.N,F[1].call(
F[0])));this.A3=EB;if((this.A3<0)||(this.A3>1))this.A3=0;this.DM(this);if(!this.
A3)this.Ba(null);else this.AZI();this.An();},ADU:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.ApX()>E)E=this.EnumToCodeset.
ApX();if(this.EnumToCodeset.Hj()<E)E=this.EnumToCodeset.Hj();}this.Number=E;var BL=
this.AK;if(!!this.EnumToCodeset){var Bvj=this.EnumToCodeset.AlY(E);this.Bx(this.
AB.DO(Bvj));if(this.AK!==BL){if(!!this.R&&!!this.AB)(F=this.R,F[2].call(F[0],this.
AB.C$(this.AK)));A.abo(this.R,0);}}},AmS:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},UD:function(H){this.Em(this.A3+1);},AZI:function(){A.ab5(
"%s",BnU);},AQz:function(){return this.Number;},_Init:function(aArg){C.B_._Init.
call(this,aArg);A.Core.BO._Init.call(this.Jk={I:this},0);this.__proto__=C.OA;this.
Jk.Filter=1;this.Ft=A._NewObject(C.AdK,0);this.Jk.BP=[this,this.UD];},_Done:function(
){this.__proto__=C.B_;this.Jk._Done();C.B_._Done.call(this);},_ReInit:function(){
C.B_._ReInit.call(this);this.Jk._ReInit();},_Mark:function(D){var B;C.B_._Mark.call(
this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.Ad9={Text:null,Ai:function(
Ae){C.D$.Ai.call(this,Ae);this.Text.L(this.ABk);},Bx:function(E){if(this.AK===E)
return;this.AK=E;this.Text.Q(A._GetAutoObject(A.Device.Converter).Ub(this.AK));this.
An();},Z0:function(H){A.pe([this,this.Afn],this);},ZZ:function(H){A.pe([this,this.
Afn],this);},Alf:function(H){A.pe([this,this.Afn],this);},Afn:function(H){if((!this.
H9||!this.FM)||!this.Fv)return;},_Init:function(aArg){C.D$._Init.call(this,aArg);
A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.Ad9;this.Text.AV(0x3F
);this.Text.G(Ar3);this.Text.Q(A.aaR(A.acf.Unknown));this.J(this.Text,0);this.Text.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.D$;this.Text._Done();C.D$.
_Done.call(this);},_ReInit:function(){C.D$._ReInit.call(this);this.Text._ReInit(
);this.Text.Q(A.aaR(A.acf.Unknown));this.Text.S(A.aaL(A.fl.Ah));},_Mark:function(
D){var B;C.D$._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::NaisIDReadonly"};C.APL={Gr:0,C2:null,A0:null,EY:null,
IX:null,CountryToString:null,KZ:0,L0:false,Init:function(aArg){A.zX([this,this.Ut
],[this,this.Sb,this.Lc],0);},Ai:function(Ae){C.D$.Ai.call(this,Ae);this.IX.Y(this.
AeB);this.A0.Fz(this.LD);this.EY.C1(this.LD);this.IX.C1(this.LD);},DM:function(H
){var F;if(!this.N)return;switch(this.A3){case 0:break;case 2:{(F=this.N,F[1].call(
F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(
F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(
F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(
null);(F=this.N,F[1].call(F[0])).BU(this.CountryToString.B0(this.KZ));(F=this.N,
F[1].call(F[0])).Ci=null;}break;default:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.
ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.
G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(null);(F=this.N,F[1].call(
F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=null;}}},Em:function(EB){var SY=this.
A3;this.A3=EB;if(this.A3<0)this.A3=0;else if(this.A3>this.Rj)this.A3=this.Rj;if((
this.A3===1)&&!this.AeB)this.A3=2;switch(this.A3){case 0:{this.Ba(null);if(!this.
Gr)this.Lc(0);}break;case 1:this.Ba(this.IX);break;case 2:this.Ba(this.EY);break;
case 3:{this.Ba(this.A0);if(!this.Gr||(SY>0))this.A0.Sl(2);else this.A0.Sl(7);}break;
default:throw new Error(Asg+this.A3.toFixed());}C.D$.Em.call(this,this.A3);},AoB:
function(H){this.IX.TQ(this.Ep);},Z0:function(H){var F;this.A0.A66((F=this.Fv,F[
1].call(F[0])));},ZZ:function(H){var F;this.A0.A67((F=this.FM,F[1].call(F[0])));
},Bx:function(E){if(this.AK===E)return;this.AK=E;this.L0=true;this.Sc(A._GetAutoObject(
A.Device.Helper).Vi(E,0,12));this.Lc(A._GetAutoObject(A.Device.Converter).AeJ(E)
);this.L0=false;if(!!E)this.A0.Ka(12);else this.A0.Ka(0);this.An();},Alf:function(
H){A.pe([this,this.Afn],this);},Ge:function(H){var F;if(!this.AK){var BL=this.AK;
this.Bx(A._GetAutoObject(A.Device.Helper).ABw());if(this.AK!==BL){if(!!this.R)(F=
this.R,F[2].call(F[0],this.AK));A.abo(this.R,0);}}this.Em(3);},Aja:function(){return this.
Gr;},Ajc:function(){return 999999999999;},Lc:function(E){if(this.KZ===E)return;this.
KZ=E;if(this.L0===false)A.pe([this,this.UQ],this);A.abo([this,this.Sb,this.Lc],0
);},Sc:function(E){if(this.Gr===E)return;this.Gr=E;if(this.L0===false)A.pe([this
,this.UQ],this);A.abo([this,this.Abh,this.Sc],0);},UQ:function(H){var F;var aString=
A.abl(A._GetAutoObject(A.Device.Converter).AtR(this.KZ),3,10)+A.abm(this.Gr,12,10
);var BL=this.AK;this.Bx(A.ab0(aString,0,10));if(this.AK!==BL){if(!!this.R)(F=this.
R,F[2].call(F[0],this.AK));A.abo(this.R,0);}},Afn:function(H){var F;if((!this.H9||
!this.FM)||!this.Fv)return;if(!(F=this.H9,F[1].call(F[0])))this.A0.ADe(true);else
this.A0.ADe(false);},Sb:function(){return this.KZ;},Abh:function(){return this.Gr;
},_Init:function(aArg){C.D$._Init.call(this,aArg);C.C2._Init.call(this.C2={I:this
},0);C.ACd._Init.call(this.A0={I:this},0);C.ArK._Init.call(this.EY={I:this},0);C.
IX._Init.call(this.IX={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.APL;var B;this.Rj=3;this.A0.G(BnV);this.EY.G(A9A);this.
IX.G(A9B);this.J(this.A0,0);this.J(this.EY,0);this.J(this.IX,0);this.C2.ADk([this
,this.Sb,this.Lc]);this.A0.Av([this,this.Abh,this.Sc]);this.EY.CN(this.C2);this.
EY.Av([B=this.C2,B.Ce,B.Cg]);this.IX.A7g([B=A._GetAutoObject(A.Device.Device),B.
Au5,B.Axn]);this.Init(aArg);},_Done:function(){this.__proto__=C.D$;this.C2._Done(
);this.A0._Done();this.EY._Done();this.IX._Done();this.CountryToString._Done();C.
D$._Done.call(this);},_ReInit:function(){C.D$._ReInit.call(this);this.C2._ReInit(
);this.A0._ReInit();this.EY._ReInit();this.IX._ReInit();this.CountryToString._ReInit(
);},_Mark:function(D){var B;C.D$._Mark.call(this,D);if((B=this.C2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"};
C.APK={Gr:0,C2:null,A0:null,X6:null,J8:null,EY:null,IX:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,Pe:0,KZ:0,L0:false,Init:function(aArg){A.
zX([this,this.Ut],[this,this.Px,this.DS],0);A.zX([this,this.Ut],[this,this.Sb,this.
Lc],0);A.zX([this,this.Ut],[this,this.AmK,this.AgJ],0);},Ai:function(Ae){C.D$.Ai.
call(this,Ae);this.IX.Y(this.AeB);this.A0.Fz(this.LD);this.X6.Fz(this.LD);this.J8.
Fz(this.LD);this.EY.C1(this.LD);this.IX.C1(this.LD);},DM:function(H){var F;if(!this.
N)return;switch(this.A3){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).CS(A.aaL(
A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this
,this.G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV
);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(null);(F=this.
N,F[1].call(F[0])).BU(this.CountryToString.B0(this.KZ));(F=this.N,F[1].call(F[0]
)).Ci=null;}break;case 3:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.
N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.G0];(F=this.
N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(null);switch(this.AnimalType){case 0:(
F=this.N,F[1].call(F[0])).BU(((A.aaR(A.acf.AE6)+A.aaR(A.acf.Colon))+ZB)+A.aaR(A.
acf.Ber));break;case 1:(F=this.N,F[1].call(F[0])).BU(((A.aaR(A.acf.AE6)+A.aaR(A.
acf.Colon))+ZB)+A.aaR(A.acf.BlA));break;case 2:(F=this.N,F[1].call(F[0])).BU(((A.
aaR(A.acf.AE6)+A.aaR(A.acf.Colon))+ZB)+A.aaR(A.acf.Bfh));break;default:(F=this.N
,F[1].call(F[0])).BU(((A.aaR(A.acf.AE6)+A.aaR(A.acf.Colon))+ZB)+A.aaR(A.acf.Unknown
));}(F=this.N,F[1].call(F[0])).Ci=null;}break;case 4:{(F=this.N,F[1].call(F[0])).
CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0]
)).Cu=[this,this.G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0
])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(null
);(F=this.N,F[1].call(F[0])).BU((A.aaR(A.acf.Gi)+AwQ)+this.GermanStateToString.Lh(
A._GetAutoObject(A.Device.Converter).AMJ(this.Pe)));(F=this.N,F[1].call(F[0])).Ci=
null;}break;default:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[
1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.G0];(F=this.N,F[
1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(null);(F=this.N,F[1].call(F[0])).BU(
A.jV);(F=this.N,F[1].call(F[0])).Ci=null;}}},Em:function(EB){var SY=this.A3;if(EB<
0)EB=0;else if(EB>this.Rj)EB=this.Rj;if((EB===1)&&!this.AeB)EB=2;switch(EB){case
0:{this.Ba(null);if((!this.Gr&&!this.AnimalType)&&!this.Pe)this.Lc(0);}break;case
1:this.Ba(this.IX);break;case 2:this.Ba(this.EY);break;case 3:if(!SY)A.pe([this,
this.Bxv],this);else this.Ba(this.X6);break;case 4:this.Ba(this.J8);break;case 5:
if(((SY===4)&&!this.Pe)&&!this.Gr)return;else{this.Ba(this.A0);if(!this.Gr||(SY>
0))this.A0.Sl(2);else this.A0.Sl(7);}break;default:throw new Error(Asg+EB.toFixed(
));}this.A3=EB;C.D$.Em.call(this,this.A3);},Bx:function(E){if(this.AK===E)return;
this.AK=E;this.L0=true;this.Sc(A._GetAutoObject(A.Device.Helper).Vi(E,0,8));this.
AgJ(A._GetAutoObject(A.Device.Helper).Vi(E,8,2)|0);this.DS(A._GetAutoObject(A.Device.
Helper).Vi(E,10,2)|0);this.Lc(A._GetAutoObject(A.Device.Converter).AeJ(E));this.
L0=false;if(!!this.AK){this.X6.Ka(2);this.J8.Ka(2);this.A0.Ka(8);}else{this.X6.Ka(
0);this.J8.Ka(0);this.A0.Ka(0);}this.An();},AoB:function(H){this.IX.TQ(this.Ep);
},Z0:function(H){var F;this.A0.A66((F=this.Fv,F[1].call(F[0])));},ZZ:function(H){
var F;this.A0.A67((F=this.FM,F[1].call(F[0])));},Alf:function(H){A.pe([this,this.
Afn],this);},Ge:function(H){var F;if(!this.AK){var BL=this.AK;this.Bx(A._GetAutoObject(
A.Device.Helper).ABw());if(this.AK!==BL){if(!!this.R)(F=this.R,F[2].call(F[0],this.
AK));A.abo(this.R,0);}this.Em(3);}else this.Em(this.Rj);},Aja:function(){return this.
Gr;},Ajc:function(){return 99999999;},Lc:function(E){if(this.KZ===E)return;this.
KZ=E;if(this.L0===false)A.pe([this,this.UQ],this);A.abo([this,this.Sb,this.Lc],0
);},Sc:function(E){if(this.Gr===E)return;this.Gr=E;if(this.L0===false)A.pe([this
,this.UQ],this);A.abo([this,this.Abh,this.Sc],0);},UQ:function(H){var F;var aString=((
A.abl(A._GetAutoObject(A.Device.Converter).AtR(this.KZ),3,10)+A.abl(this.AnimalType
,2,10))+A.abl(this.Pe,2,10))+A.abm(this.Gr,8,10);var BL=this.AK;this.Bx(A.ab0(aString
,0,10));if(this.AK!==BL){if(!!this.R)(F=this.R,F[2].call(F[0],this.AK));A.abo(this.
R,0);}},Afn:function(H){var F;if((!this.H9||!this.FM)||!this.Fv)return;if(!(F=this.
H9,F[1].call(F[0])))this.A0.ADe(true);else this.A0.ADe(false);},DS:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.L0===false)A.pe([this,this.
UQ],this);A.abo([this,this.Px,this.DS],0);},AgJ:function(E){if(this.Pe===E)return;
this.Pe=E;if(this.L0===false)A.pe([this,this.UQ],this);A.abo([this,this.AmK,this.
AgJ],0);},Bxv:function(H){var F;if(!!this.JA){var H4=(F=this.JA,F[1].call(F[0]));
var AYT=0;switch(H4){case 0:case 1:AYT=0;break;case 2:AYT=1;break;default:A.ab5(
"%s%e",Ar4,H4);}this.DS(AYT);}if(!this.Pe)this.Em(4);else this.Em(5);},Sb:function(
){return this.KZ;},Abh:function(){return this.Gr;},Px:function(){return this.AnimalType;
},AmK:function(){return this.Pe;},_Init:function(aArg){C.D$._Init.call(this,aArg
);C.C2._Init.call(this.C2={I:this},0);C.AO4._Init.call(this.A0={I:this},0);C.AuL.
_Init.call(this.X6={I:this},0);C.AuL._Init.call(this.J8={I:this},0);C.ArK._Init.
call(this.EY={I:this},0);C.IX._Init.call(this.IX={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.APK;var B;this.Rj=5;this.A0.G(
BnW);this.X6.G(BnX);this.X6.Fd(2);this.J8.G(BnY);this.J8.Fd(16);this.EY.G(A9A);this.
IX.G(A9B);this.J(this.A0,0);this.J(this.X6,0);this.J(this.J8,0);this.J(this.EY,0
);this.J(this.IX,0);this.C2.ADk([this,this.Sb,this.Lc]);this.A0.Av([this,this.Abh
,this.Sc]);this.X6.Av([this,this.Px,this.DS]);this.J8.Av([this,this.AmK,this.AgJ
]);this.EY.CN(this.C2);this.EY.Av([B=this.C2,B.Ce,B.Cg]);this.IX.A7g([B=A._GetAutoObject(
A.Device.Device),B.Au5,B.Axn]);this.Init(aArg);},_Done:function(){this.__proto__=
C.D$;this.C2._Done();this.A0._Done();this.X6._Done();this.J8._Done();this.EY._Done(
);this.IX._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.D$._Done.call(this);},_ReInit:function(){C.D$._ReInit.call(this);this.C2._ReInit(
);this.A0._ReInit();this.X6._ReInit();this.J8._ReInit();this.EY._ReInit();this.IX.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.D$._Mark.call(this,D);if((B=this.C2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.J8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.D$={AK:0,Avd:null,Op:null,
R:null,Ep:null,FM:null,Fv:null,H9:null,N:null,JA:null,E$:null,EZ:null,ABk:0,LD:0
,A3:0,Rj:0,AeB:true,Init:function(aArg){A.pe([this,this.Lz],this);},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);if(!this.A3)this.Ba(null);},Bjs:function(E){if(this.
ABk===E)return;this.ABk=E;this.An();},Abo:function(E){if(this.LD===E)return;this.
LD=E;this.An();},DM:function(H){A.ab5("%s",Akx);},Ut:function(s){this.DM(s);},Em:
function(EB){A.pe([this,this.Ut],this);A.pe(this.Avd,this);if(!EB)A.pe(this.Op,this
);},Av:function(E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.Db],this.
R,0);this.R=E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],this);}
,Db:function(H){var F;if(!!this.R)this.Bx((F=this.R,F[1].call(F[0])));},Bx:function(
E){A.ab5("%s",AnN);},N9:function(H){if(this.A3>1)this.Em(this.A3-1);},MI:function(
H){if((this.A3>0)&&(this.A3<this.Rj))this.Em(this.A3+1);},TQ:function(E){if(A.aaZ(
this.Ep,E))return;if(!!this.Ep)A.z$([this,this.AX8],this.Ep,0);this.Ep=E;if(!!E)
A.zX([this,this.AX8],this.Ep,0);A.pe([this,this.AX8],this);},AoB:function(H){},AX8:
function(s){this.AoB(s);},Py:function(E){if(A.aaZ(this.FM,E))return;if(!!this.FM
)A.z$([this,this.AYa],this.FM,0);this.FM=E;if(!!E)A.zX([this,this.AYa],E,0);if(!
!E)A.pe([this,this.AYa],this);},QH:function(E){if(A.aaZ(this.Fv,E))return;if(!!this.
Fv)A.z$([this,this.AYc],this.Fv,0);this.Fv=E;if(!!E)A.zX([this,this.AYc],E,0);if(
!!E)A.pe([this,this.AYc],this);},Z0:function(H){},AYc:function(s){this.Z0(s);},ZZ:
function(H){},AYa:function(s){this.ZZ(s);},TO:function(E){if(A.aaZ(this.H9,E))return;
if(!!this.H9)A.z$([this,this.AX$],this.H9,0);this.H9=E;if(!!E)A.zX([this,this.AX$
],E,0);if(!!E)A.pe([this,this.AX$],this);},Alf:function(H){},AX$:function(s){this.
Alf(s);},Ge:function(H){A.ab5("%s",A9C);},BCo:function(s){this.Ge(s);},G0:function(
H){this.Em(0);},Aja:function(){A.ab5("%s",AnN);return 0;},Ajc:function(){A.ab5("%s"
,AnN);return 0;},Lz:function(H){},AmQ:function(E){if(A.aaZ(this.JA,E))return;if(
!!this.JA)A.z$([this,this.Aoa],this.JA,0);this.JA=E;if(!!E)A.zX([this,this.Aoa],
this.JA,0);A.pe([this,this.Aoa],this);},Aoa:function(H){},ADz:function(E){if(A.aa0(
this.Op,E))return;this.Op=E;},AD5:function(E){if(this.AeB===E)return;this.AeB=E;
this.An();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.BO._Init.
call(this.E$={I:this},0);A.Core.BO._Init.call(this.EZ={I:this},0);this.__proto__=
C.D$;this.G(Ar3);this.ABk=A.jb.Text;this.LD=A.jb.C0;this.E$.Filter=6;this.EZ.Filter=
7;this.E$.BP=[this,this.N9];this.EZ.BP=[this,this.MI];this.Init(aArg);},_Done:function(
){this.__proto__=A.Core.O;this.E$._Done();this.EZ._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.E$._ReInit();this.EZ._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Avd)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Op)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ep)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FM)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Fv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
H9)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.N)&&((B=B[0])._cycle!=D
))B._Mark(B._cycle=D);if((B=this.JA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NaisID"};C.QQ={AK:0,Dh:null,Ft:null,Op:null,Ep:null
,FM:null,Fv:null,H9:null,R:null,JA:null,ACI:-1,AeB:true,AL7:false,ARL:false,Arj:
true,Init:function(aArg){A.pe([this,this.Az0],this);},Ai:function(Ae){C.D8.Ai.call(
this,Ae);if(!this.Dh)return;if(this.Dh.A3>0){if(this.G8){this.Dh.Abo(A.jb.CM);this.
Background.L(A.jb.C0);this.V.L(A.jb.Text);}else{this.Dh.Abo(A.jb.C0);this.Background.
L(A.jb.CM);this.V.L(A.jb.Text);}}else{if(this.G8)this.Dh.Abo(A.jb.CM);else this.
Dh.Abo(A.jb.C0);this.Dh.Bjs(this.V.AP);}},Ja:function(H){C.D8.Ja.call(this,H);if(
!this.Dh)return;if(!this.Dh.A3)this.Ge(this);else this.G0(this);},GB:function(E){
C.D8.GB.call(this,E);if(!!this.Dh)this.Dh.N=E;},TQ:function(E){if(A.aaZ(this.Ep,
E))return;if(!!this.Ep)A.z$([this,this.AoB],this.Ep,0);this.Ep=E;if(!!E)A.zX([this
,this.AoB],this.Ep,0);A.pe([this,this.AoB],this);},AoB:function(H){if(!!this.Dh)
this.Dh.TQ(this.Ep);},Py:function(E){if(A.aaZ(this.FM,E))return;this.FM=E;if(!!this.
Dh)this.Dh.Py(E);},QH:function(E){if(A.aaZ(this.Fv,E))return;this.Fv=E;if(!!this.
Dh)this.Dh.QH(E);},TO:function(E){if(A.aaZ(this.H9,E))return;this.H9=E;if(!!this.
Dh)this.Dh.TO(E);},Bx3:function(H){var Ay0=0;if(!!this.Dh){Ay0=this.Dh.A3;this.Dh.
N=null;this.HG(this.Dh);}switch(this.ACI){case 0:this.Dh=A._NewObject(C.Ad9,0);break;
case 1:this.Dh=A._NewObject(C.APL,0);break;case 2:this.Dh=A._NewObject(C.APK,0);
break;case 3:this.Dh=A._NewObject(C.ARN,0);break;case 4:this.Dh=A._NewObject(C.ARM
,0);break;case 5:this.Dh=A._NewObject(C.APM,0);break;default:throw new Error(BnZ+
this.ACI.toFixed());}this.J(this.Dh,0);this.Dh.AmQ(this.JA);this.Dh.G(Bn0);this.
Dh.N=this.N;this.Dh.TQ(this.Ep);this.Dh.Avd=[this,this.Avd];this.Dh.Av([this,this.
TN,this.Bx]);this.Dh.TO(this.H9);this.Dh.Py(this.FM);this.Dh.QH(this.Fv);this.Dh.
ADz(this.Op);this.Dh.AD5(this.AeB);if(Ay0>0)this.Dh.Em(Ay0);this.Ba(this.Dh);this.
An();},Ge:function(H){var B;var F;if(!!this.Dh){if(!!this.N)this.Ft.AiU((F=this.
N,F[1].call(F[0])));else this.Ft=A._NewObject(C.AdK,0);this.Dh.Ge(this);}},G0:function(
H){var B;if(!!this.Dh)this.Dh.G0(this);},Aja:function(){if(!this.Dh)return 0;return this.
Dh.Aja();},Ajc:function(){if(!this.Dh)return 0;return this.Dh.Ajc();},Db:function(
H){var F;if(!!this.R){this.Bx((F=this.R,F[1].call(F[0])));A.abo([this,this.TN,this.
Bx],0);}},Av:function(E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.Db
],this.R,0);this.R=E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db],
this);},Bx:function(E){var F;if(this.AK===E)return;this.AK=E;if(!!this.R)(F=this.
R,F[2].call(F[0],this.AK));A.abo(this.R,0);A.pe([this,this.Az0],this);},Bj4:function(
E){if(this.ACI===E)return;this.ACI=E;A.pe([this,this.Bx3],this);},Aq0:function(E
){if(this.Arj===E)return;this.Arj=E;A.pe([this,this.Az0],this);},Az0:function(H){
var AoM;if(this.Arj){if(this.AL7)AoM=5;else AoM=0;}else if(this.ARL){if(A._GetAutoObject(
A.Device.Converter).AeJ(this.AK)===10)AoM=4;else AoM=3;}else if(A._GetAutoObject(
A.Device.Converter).AeJ(this.AK)===10)AoM=2;else AoM=1;this.Bj4(AoM);},Avd:function(
H){var F;if((!!this.N&&!!this.Dh)&&!this.Dh.A3)this.Ft.Aj$((F=this.N,F[1].call(F[
0])));this.An();},AmQ:function(E){if(A.aaZ(this.JA,E))return;if(!!this.JA)A.z$([
this,this.Aoa],this.JA,0);this.JA=E;if(!!E)A.zX([this,this.Aoa],this.JA,0);A.pe([
this,this.Aoa],this);},Aoa:function(H){if(!!this.Dh)this.Dh.AmQ(this.JA);},A7I:function(
E){if(this.ARL===E)return;this.ARL=E;A.pe([this,this.Az0],this);},Bi0:function(E
){if(this.AL7===E)return;this.AL7=E;A.pe([this,this.Az0],this);},ADz:function(E){
if(A.aa0(this.Op,E))return;this.Op=E;if(!!this.Dh)this.Dh.ADz(E);},AD5:function(
E){if(this.AeB===E)return;this.AeB=E;if(!!this.Dh)this.Dh.AD5(E);},TN:function(){
return this.AK;},_Init:function(aArg){C.D8._Init.call(this,aArg);this.__proto__=
C.QQ;this.G(Uq);this.V.Q(Asa);this.V.L(A.jb.Bh);this.Ft=A._NewObject(C.AdK,0);this.
Init(aArg);},_Mark:function(D){var B;C.D8._Mark.call(this,D);if((B=this.Dh)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Op)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ep)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FM)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Fv)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.H9
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.R)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.JA)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AO4={EQ:null,FW:null,Ef:null,Dm:null,CQ:null
,Cn:null,Fz:function(E){if(this.MR===E)return;C.K6.Fz.call(this,E);this.Cn.C1(E);
this.CQ.C1(E);this.Dm.C1(E);this.Ef.C1(E);this.FW.C1(E);this.EQ.C1(E);},XW:function(
IK){var B2=null;switch(IK){case-1:case 0:B2=this.FK;break;case 1:B2=this.Cn;break;
case 2:B2=this.CQ;break;case 3:B2=this.Dm;break;case 4:B2=this.Ef;break;case 5:B2=
this.FW;break;case 6:B2=this.EQ;break;case 7:B2=this.GJ;break;default:A.ab5("%s"
,Ahj);}return B2;},_Init:function(aArg){C.K6._Init.call(this,aArg);C.DE._Init.call(
this.EQ={I:this},0);C.DE._Init.call(this.FW={I:this},0);C.DE._Init.call(this.Ef={
I:this},0);C.DE._Init.call(this.Dm={I:this},0);C.DE._Init.call(this.CQ={I:this},
0);C.DE._Init.call(this.Cn={I:this},0);this.__proto__=C.AO4;this.G(Bn1);this.GJ.
G(AGW);this.EQ.G(Axg);this.FW.G(AXv);this.Ef.G(AXw);this.Dm.G(AXx);this.CQ.G(AXy
);this.Cn.G(AXz);this.FK.G(AXA);this.Ez.G(A9z);this.J(this.EQ,-2);this.J(this.FW
,-2);this.J(this.Ef,-2);this.J(this.Dm,-2);this.J(this.CQ,-2);this.J(this.Cn,-2);
this.EQ.Di=[this,this.GE];this.FW.Di=[this,this.GE];this.Ef.Di=[this,this.GE];this.
Dm.Di=[this,this.GE];this.CQ.Di=[this,this.GE];this.Cn.Di=[this,this.GE];},_Done:
function(){this.__proto__=C.K6;this.EQ._Done();this.FW._Done();this.Ef._Done();this.
Dm._Done();this.CQ._Done();this.Cn._Done();C.K6._Done.call(this);},_ReInit:function(
){C.K6._ReInit.call(this);this.EQ._ReInit();this.FW._ReInit();this.Ef._ReInit();
this.Dm._ReInit();this.CQ._ReInit();this.Cn._ReInit();},_Mark:function(D){var B;
C.K6._Mark.call(this,D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AuL={R:null,GJ:null,FK:null,Ez:null,If:null,Ie:null,MR:0,TX:0,AK:0,FO:99,Init:
function(aArg){A.pe([this,this.Lz],this);},Ai:function(Ae){var B;A.Core.O.Ai.call(
this,Ae);this.Ez.Y(false);this.Ez.G(A.wC(this.XW(0).M,this.XW(-1).M));var Io=((Ae&
0x40)===0x40);if(Io){this.Bc4(A.jb.AY);this.Bc5(A.jb.Bh);}else{this.Bc4(this.MR);
this.Bc5(A.jb.Text);}this.AlD();},Fz:function(E){if(this.MR===E)return;this.MR=E;
this.An();},Lz:function(H){},XW:function(IK){var B2=null;switch(IK){case-1:case 0:
B2=this.FK;break;case 1:B2=this.GJ;break;default:A.ab5("%s",Ahj);}return B2;},Ka:
function(E){if(this.TX===E)return;this.TX=E;this.AlD();},AlD:function(){var B;var
F;if(!!this.R){var Ek=this.FK;var AcU=this.TX;var A1=(F=this.R,F[1].call(F[0]));
while(!!Ek){if(A1>0){Ek.M1(A1%10);A1=(A1/10)|0;}else if(AcU>0)Ek.M1(0);else Ek.M1(-
1);Ek=(C.E9.isPrototypeOf(B=this.ApQ(Ek,0x11))?B:null);AcU=AcU-1;}}},Afq:function(
H){var F;var BL=this.AK;this.Bx(this.AK+1);if(this.AK!==BL){if(!!this.R)(F=this.
R,F[2].call(F[0],this.AK));A.abo(this.R,0);}},Afp:function(H){var F;var BL=this.
AK;this.Bx(this.AK-1);if(this.AK!==BL){if(!!this.R)(F=this.R,F[2].call(F[0],this.
AK));A.abo(this.R,0);}},Db:function(H){var F;if(!!this.R)this.Bx((F=this.R,F[1].
call(F[0])));},Av:function(E){if(A.aaZ(this.R,E))return;if(!!this.R)A.z$([this,this.
Db],this.R,0);this.R=E;if(!!E)A.zX([this,this.Db],E,0);if(!!E)A.pe([this,this.Db
],this);},Bx:function(E){if(E<0)E=0;if(E>this.FO)E=this.FO;if(this.AK===E)return;
this.AK=E;this.An();},Fd:function(E){if(this.FO===E)return;this.FO=E;this.An();}
,Bc4:function(aColor){this.FK.C1(aColor);this.GJ.C1(aColor);},Bc5:function(aColor
){this.FK.AjS(aColor);this.GJ.AjS(aColor);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.E9._Init.call(this.GJ={I:this},0);C.E9._Init.call(this.FK={I:this
},0);A.acg.Cy._Init.call(this.Ez={I:this},0);A.Core.BO._Init.call(this.If={I:this
},0);A.Core.BO._Init.call(this.Ie={I:this},0);this.__proto__=C.AuL;this.G(Bn2);this.
MR=A.jb.CM;this.GJ.G(AGW);this.FK.G(Axg);this.Ez.G(Axg);this.Ez.NJ(2);this.Ez.L(
A.jb.EX);this.If.Filter=4;this.Ie.Filter=5;this.J(this.GJ,0);this.J(this.FK,0);this.
J(this.Ez,0);this.If.BP=[this,this.Afq];this.If.DR=[this,this.Afq];this.Ie.BP=[this
,this.Afp];this.Ie.DR=[this,this.Afp];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.GJ._Done();this.FK._Done();this.Ez._Done();this.If._Done();this.Ie.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.GJ._ReInit();this.FK._ReInit();this.Ez._ReInit();this.If._ReInit();this.Ie.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.R)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.GJ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.FK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ez)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.If)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ie)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.E9={AfV:
null,Background:null,Text:null,E9:-1,MM:0,Al7:0,Apz:false,Ai:function(Ae){A.Core.
O.Ai.call(this,Ae);if(this.E9<0)this.Text.Q(Q3);else this.Text.Q(this.E9.toFixed(
));this.Background.L(this.MM);this.Text.L(this.Al7);},M1:function(E){if(this.E9===
E)return;var B2=E;if((B2<0)||(B2>9))B2=-1;this.E9=B2;this.An();},C1:function(E){
if(this.MM===E)return;this.MM=E;this.An();},AjO:function(E){if(this.Apz===E)return;
this.Apz=E;this.AfV.Ar(E);if(E===false)this.Text.Y(true);},AjS:function(E){if(this.
Al7===E)return;this.Al7=E;this.An();},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acl.U6._Init.call(this.AfV={I:this},0);A.acg.AI._Init.call(this.Background={
I:this},0);A.acg.Text._Init.call(this.Text={I:this},0);this.__proto__=C.E9;var B;
this.G(Asf);this.MM=A.jb.CM;this.AfV.Fy(750);this.AfV.V5(750);this.AfV.AjU(750);
this.Al7=A.jb.Text;this.Background.AV(0x3);this.Background.G(Asf);this.Text.AV(0x3
);this.Text.G(Asf);this.Text.Q(Q3);this.J(this.Background,0);this.J(this.Text,0);
this.AfV.R=[B=this.Text,B.Fc,B.Y];this.Text.S(A.aaL(A.fl.Ah));},_Done:function(){
this.__proto__=A.Core.O;this.AfV._Done();this.Background._Done();this.Text._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AfV._ReInit();this.Background._ReInit();this.Text._ReInit();this.Text.S(A.aaL(A.
fl.Ah));},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AfV)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Digit"};C.
Fl={Z:null,IT:null,AMd:A.jV,AP0:A.jV,SP:0,AH0:0,AZy:false,AY6:false,Init:function(
aArg){},CI:function(H){var B;C.AC.CI.call(this,H);A.zX([this,this.AzV],[B=A._GetAutoObject(
A.Device.Device).Aq,B.Fw,B.FB],0);A.zX([this,this.Ut],[B=A._GetAutoObject(A.Device.
Device).Aq,B.Fw,B.FB],0);A.pe([this,this.AzV],this);A.pe([this,this.Ut],this);},
Fb:function(H){var B;C.AC.Fb.call(this,H);A.z$([this,this.AzV],[B=A._GetAutoObject(
A.Device.Device).Aq,B.Fw,B.FB],0);},Buf:function(LW){A._GetAutoObject(A.Device.Helper
).HD(LW);this.Api(A._GetAutoObject(A.Device.Device).Bq,A._GetAutoObject(A.Device.
Helper).X.Id);},Api:function(LQ,Ach){A.ab5("%s",Akx);},UM:function(H){var At=(A.
Device.PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===9))A.aaS([
this,this.Bvb],this);else if(!!At&&(At.PopupState===5)){this.AY6=true;this.Ed(this
);}},Bvb:function(H){if(this.SP>0){this.AY6=false;this.AcJ(this);this.A77(0);}},
AhO:function(H){if((this.AH0+1)<this.SP)this.A77(this.AH0+1);else A.aaS([this,this.
BsT],this);},BsU:function(s){this.AhO(s);},A77:function(E){this.AH0=E;if(this.AY6===
false){this.Buf(E);A.aaS([this,this.BsU],this);var Xb=(this.AH0/this.SP)*100;A._GetAutoObject(
A.Device.Device).A6(49,true,A.abk(Xb,0,0),0,[this,this.UM]);}},ZM:function(H){A.
_GetAutoObject(A.Device.Device).A6(49,false,Bn3,0,[this,this.UM]);this.AZy=true;
A.pe([this,this.AJx],this);},BsT:function(s){this.ZM(s);},AcJ:function(H){this.IT.
Y(true);this.AZy=false;this.AJx(this);},BCj:function(s){this.AcJ(s);},Azd:function(
H){var Bc=A._GetAutoObject(A.Device.Helper).A4k();A._GetAutoObject(A.Device.Device
).Aq.Bm(Bc);},Ed:function(H){A._GetAutoObject(C.AZ).Fk();},A07:function(H){A._GetAutoObject(
C.AZ).BZ(95);},DM:function(H){this.N.Y(true);this.N.CS(A.aaL(A.ach.ET));this.N.Cu=[
this,this.Ed];this.N.Cm(A.aaL(A.ach.AB5));if(!A._GetAutoObject(A.Device.Device).
Aq.Filter||A._GetAutoObject(A.Device.Helper).Aqe(A._GetAutoObject(A.Device.Device
).Aq.Filter)){this.N.Cf=null;this.N.IW.Dz(100);}else{this.N.Cf=[this,this.Azd];this.
N.IW.Dz(255);}this.N.C7(A.aaL(A.ach.AdR));this.N.Ci=[this,this.A07];},Ut:function(
s){this.DM(s);},AzV:function(H){this.SP=A._GetAutoObject(A.Device.Device).Aq.Ch(
);if(this.SP>0)A._GetAutoObject(A.Device.Device).A6(49,true,ZA,0,[this,this.UM]);
else{this.AcJ(this);this.ZM(this);}},AjR:function(E){if(this.AMd===E)return;this.
AMd=E;A.pe([this,this.AJx],this);},AJx:function(H){var B;if(this.AZy===false){this.
IT.Q(A.jV);return;}var Aoo;if(!A._GetAutoObject(A.Device.Device).Aq.Ch()){var AcC=
A._GetAutoObject(A.Device.Device).Aq.Filter;A.z$([this,this.AzV],[B=A._GetAutoObject(
A.Device.Device).Aq,B.Fw,B.FB],0);this.Azd(this);if(!A._GetAutoObject(A.Device.Device
).Aq.Qm()||!AcC)Aoo=A.aaR(A.acf.WarningNoAnimalsRegistered);else if(A._GetAutoObject(
A.Device.Helper).ABr(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)Aoo=A.aaR(
A.acf.AL9);else Aoo=A.aaR(A.acf.AL8);A._GetAutoObject(A.Device.Device).Aq.Bm(AcC
);A.zX([this,this.AzV],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fw,B.FB],0);}else
Aoo=this.AP0;Aoo=Aoo+(AXC+this.AMd);this.IT.Q(Aoo);},Aei:function(E){if(this.AP0===
E)return;this.AP0=E;A.pe([this,this.AJx],this);},_Init:function(aArg){C.AC._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Aka._Init.call(this.IT={
I:this},0);this.__proto__=C.Fl;this.Dp(C.AaL);this.Z.G(E2);this.Z.J$(1);this.IT.
G(E2);this.J(this.Z,0);this.J(this.IT,0);this.Init(aArg);},_Done:function(){this.
__proto__=C.AC;this.Z._Done();this.IT._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Z._ReInit();this.IT._ReInit();},_Mark:function(D){
var B;C.AC._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A4T={Ag:null,A4:0,_Init:function(aArg){this.__proto__=C.A4T;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AuN={KN:null,MG:null,AR:0,XL:function(){this.KN=null;this.MG=null;this.AR=0;
},Oe:function(A1){var G4;G4=A._NewObject(C.A4T,0);G4.A4=A1;if(!this.KN){this.KN=
G4;this.MG=G4;this.AR=1;}else{this.MG.Ag=G4;this.MG=G4;this.AR=this.AR+1;}},Ame:
function(){var B;var Rm=0;var N3=this.KN;while(!!N3){Rm+=N3.A4;N3=N3.Ag;}return Rm;
},Ajb:function(){if(!this.AR)return 0;return this.Ame()/this.AR;},ApY:function(){
var B;if(!this.AR)return 0;var AYZ=this.Ajb();var Acz=0;var N3=this.KN;while(!!N3
){Acz+=Math.pow(N3.A4-AYZ,2);N3=N3.Ag;}Acz/=this.AR;Acz=Math.sqrt(Acz);return Acz;
},_Init:function(aArg){this.__proto__=C.AuN;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KN)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AMe={FP:null,AdN:null,XS:null,DQ:null,IT:null,
CT:function(){this.A1Z(this);},Init:function(aArg){A.zV([this,this.A1Z],A._GetAutoObject(
A.Device.Device).O7,0);A.pe([this,this.A1Z],this);},Ed:function(H){A._GetAutoObject(
C.AZ).Fk();},A1Z:function(H){this.XS.B$(-1);this.IT.Y(!this.FP.AW.Ch());},_Init:
function(aArg){C.AC._Init.call(this,aArg);C.FP._Init.call(this.FP={I:this},0);C.
AdN._Init.call(this.AdN={I:this},0);C.XS._Init.call(this.XS={I:this},0);A.acg.DQ.
_Init.call(this.DQ={I:this},0);C.Aka._Init.call(this.IT={I:this},0);this.__proto__=
C.AMe;this.N.Y(true);this.Dp(C.ANb);this.FP.G(Asc);this.FP.NI(C.Al6);this.AdN.G(
KL);this.XS.G(Ar5);this.DQ.DJ(Bn4);this.DQ.DX(Bn5);this.DQ.NJ(3);this.DQ.L(A.jb.
Text);this.IT.G(AnA);this.IT.Q((A.aaR(A.acf.A5D)+AXC)+A.aaR(A.acf.A30));this.J(this.
FP,0);this.J(this.AdN,0);this.J(this.XS,0);this.J(this.DQ,0);this.J(this.IT,0);this.
N.Cu=[this,this.Ed];this.N.CS(A.aaL(A.ach.ET));this.FP.YP(A._GetAutoObject(A.Device.
Device).O7);this.XS.YP(A._GetAutoObject(A.Device.Device).O7);this.Init(aArg);},_Done:
function(){this.__proto__=C.AC;this.FP._Done();this.AdN._Done();this.XS._Done();
this.DQ._Done();this.IT._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.FP._ReInit();this.AdN._ReInit();this.XS._ReInit();this.DQ.
_ReInit();this.IT._ReInit();this.IT.Q((A.aaR(A.acf.A5D)+AXC)+A.aaR(A.acf.A30));this.
CT();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.FP)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AdN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XS).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AMh={As5:null,As4:null,As7:null,As6:null,As9:null,As8:null,As$:null,As_:null
,Z2:null,X0:null,AaC:null,AaB:null,RatedAttribute:0,Init:function(aArg){this.Sf(
2);},Dr:function(H){var DV=(A.Core.BO.isPrototypeOf(H)?H:null);switch(DV.CH){case
6:switch(this.RatedAttribute){case 2:this.Sf(3);break;case 1:this.Sf(2);break;case
4:this.Sf(1);break;case 3:this.Sf(4);break;default:this.Sf(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Sf(1);break;case 1:this.Sf(4);break;case 4:this.
Sf(3);break;case 3:this.Sf(2);break;default:this.Sf(0);}break;default:DV.O9=true;
}},Api:function(LQ,Ach){if(!LQ)return;var Fi=A._NewObject(A.Device.Filter,0);var
HN=A._NewObject(A.Device.Int32FilterCriterion,0);HN.Initialize(1,0,Ach,true);Fi.
CZ(HN);var Azw=A._NewObject(A.Device.AssessmentFilterCriterion,0);Azw.Initialize(
3,5,0,true);Fi.CZ(Azw);LQ.Bm(Fi);},AhO:function(H){var Apg=0;var A1n=A._GetAutoObject(
A.Device.Device).Bq.Ch();var BT=A._NewObject(A.Device.Rating,0);while(Apg<A1n){BT.
EJ(Apg,A._GetAutoObject(A.Device.Device).Bq);this.Baz(BT,0);var Byi=A._GetAutoObject(
A.Device.Helper).Y$(2);this.Baz(BT,Byi);Apg++;}C.Fl.AhO.call(this,H);},ZM:function(
H){A.pe([this,this.Bab],this);C.Fl.ZM.call(this,H);},AcJ:function(H){this.As5=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.As4=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.As6=A._NewObject(A.Device.Int32ArrayWrapper,0);this.As7=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.As8=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.As9=A._NewObject(A.Device.Int32ArrayWrapper,0);this.As_=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.As$=A._NewObject(A.Device.Int32ArrayWrapper,0);C.Fl.AcJ.
call(this,H);},DM:function(H){C.Fl.DM.call(this,H);this.N.Ow(true);this.N.Ox(true
);},Baz:function(DT,A_$){if(!DT||(DT.Timestamp<A_$))return;if(!A_$){this.As5.Set(
DT.Appearance,this.As5.Get(DT.Appearance)+1);this.As7.Set(DT.Faeces,this.As7.Get(
DT.Faeces)+1);this.As9.Set(DT.Feed,this.As9.Get(DT.Feed)+1);this.As$.Set(DT.Respiratory
,this.As$.Get(DT.Respiratory)+1);}else{this.As4.Set(DT.Appearance,this.As4.Get(DT.
Appearance)+1);this.As6.Set(DT.Faeces,this.As6.Get(DT.Faeces)+1);this.As8.Set(DT.
Feed,this.As8.Get(DT.Feed)+1);this.As_.Set(DT.Respiratory,this.As_.Get(DT.Respiratory
)+1);}},Sf:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
X0.Ke(this.Z2.Lh(E));A.pe([this,this.Bab],this);},Bab:function(H){var Z3=null;var
Z4=null;switch(this.RatedAttribute){case 2:{Z3=this.As4;Z4=this.As5;}break;case 4:{
Z3=this.As6;Z4=this.As7;}break;case 1:{Z3=this.As8;Z4=this.As9;}break;case 0:{Z3=
A._NewObject(A.Device.Int32ArrayWrapper,0);Z4=A._NewObject(A.Device.Int32ArrayWrapper
,0);}break;case 3:{Z3=this.As_;Z4=this.As$;}break;default:throw new Error(Bn6+this.
RatedAttribute.toFixed());}var AEG=A._NewObject(A.acu.AR1,0);AEG.Oe(Z3.Get(3),A.
jb.EX);AEG.Oe(Z3.Get(2),A.jb.HY);AEG.Oe(Z3.Get(1),A.jb.FU);var AEH=A._NewObject(
A.acu.AR1,0);AEH.Oe(Z4.Get(3),A.jb.EX);AEH.Oe(Z4.Get(2),A.jb.HY);AEH.Oe(Z4.Get(1
),A.jb.FU);this.AaB.Abv(AEG);this.AaC.Abv(AEH);var A1K=Z3.Ame()-Z3.Get(5);var BcC=
0;var BcA=0;if(A1K>0){BcC=(Z3.Get(2)/A1K)*100;BcA=(Z3.Get(1)/A1K)*100;}var AJl=Z4.
Ame()-Z4.Get(5);this.IT.Y(!AJl);var BcD=0;var BcB=0;if(AJl>0){BcD=(Z4.Get(2)/AJl
)*100;BcB=(Z4.Get(1)/AJl)*100;}this.AaB.A75(A.abk(BcC,0,0)+AeY);this.AaB.A7K(A.abk(
BcA,0,0)+AeY);this.AaC.A75(A.abk(BcD,0,0)+AeY);this.AaC.A7K(A.abk(BcB,0,0)+AeY);
},_Init:function(aArg){C.Fl._Init.call(this,aArg);A.Device.RatedAttributeToString.
_Init.call(this.Z2={I:this},0);C.Ns._Init.call(this.X0={I:this},0);C.ABa._Init.call(
this.AaC={I:this},0);C.ABa._Init.call(this.AaB={I:this},0);this.__proto__=C.AMh;
this.Dp(C.ANc);this.AjR(A.aaR(A.acf.A31));this.Aei(A.aaR(A.acf.AmG));this.X0.G(KL
);this.X0.Aj(true);this.X0.U(A.aaR(A.acf.Av8)+A.aaR(A.acf.Colon));this.X0.Bf(false
);this.X0.Bj2(false);this.AaC.G(Bn7);this.AaC.U(A.aaR(A.acf.AEs));this.AaB.G(Bn8
);this.AaB.U(A.aaR(A.acf.A43));this.IT.G(AnA);this.J(this.X0,-1);this.J(this.AaC
,-1);this.J(this.AaB,-1);this.As5=A._NewObject(A.Device.Int32ArrayWrapper,0);this.
As4=A._NewObject(A.Device.Int32ArrayWrapper,0);this.As7=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.As6=A._NewObject(A.Device.Int32ArrayWrapper,0);this.As9=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.As8=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.As$=A._NewObject(A.Device.Int32ArrayWrapper,0);this.As_=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Fl;this.
Z2._Done();this.X0._Done();this.AaC._Done();this.AaB._Done();C.Fl._Done.call(this
);},_ReInit:function(){C.Fl._ReInit.call(this);this.Z2._ReInit();this.X0._ReInit(
);this.AaC._ReInit();this.AaB._ReInit();this.AjR(A.aaR(A.acf.A31));this.Aei(A.aaR(
A.acf.AmG));this.X0.U(A.aaR(A.acf.Av8)+A.aaR(A.acf.Colon));this.AaC.U(A.aaR(A.acf.
AEs));this.AaB.U(A.aaR(A.acf.A43));},_Mark:function(D){var B;C.Fl._Mark.call(this
,D);if((B=this.As5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.As4)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.As7)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.As6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.As9)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.As8)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
As$)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.As_)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Z2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X0)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AaC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaB
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsScreen"
};C.AMi={AdM:null,Uf:null,Ug:null,AdL:null,Uc:null,Ud:null,AH2:0,AH1:0,AHH:0,AHG:
0,AcB:false,CT:function(){this.ZM(this);},Api:function(LQ,Ach){if(!LQ)return;var
Fi=A._NewObject(A.Device.Filter,0);var HN=A._NewObject(A.Device.Int32FilterCriterion
,0);HN.Initialize(1,0,Ach,true);Fi.CZ(HN);var AzO=A._NewObject(A.Device.Int32FilterCriterion
,0);AzO.Initialize(7,2,0,true);Fi.CZ(AzO);LQ.Bm(Fi);},AhO:function(H){if(A._GetAutoObject(
A.Device.Helper).X.LastRatingTemperature===2)this.AH2++;else if(A._GetAutoObject(
A.Device.Helper).X.LastRatingTemperature===1)this.AH1++;var Apg=0;var A1n=A._GetAutoObject(
A.Device.Device).Bq.Ch();var As3;var Az6=0;while(Apg<A1n){this.AcB=true;As3=A._GetAutoObject(
A.Device.Device).Bq.IU(Apg,9);if(As3===1)Az6=1;else if((As3===2)&&(Az6!==1))Az6=
2;Apg++;}if(Az6===1)this.AHG++;else if(Az6===2)this.AHH++;C.Fl.AhO.call(this,H);
},ZM:function(H){var Bcy=0;var Bcz=0;if(this.SP>0){Bcy=(this.AH2/this.SP)*100;Bcz=(
this.AH1/this.SP)*100;}this.Uf.Ke(((((((A.abk(Bcy,0,0)+AGX)+this.AH2.toFixed())+
CJ)+A.aaR(A.acf.ACO))+CJ)+this.SP.toFixed())+OM);this.Ug.Ke(((((((A.abk(Bcz,0,0)+
AGX)+this.AH1.toFixed())+CJ)+A.aaR(A.acf.ACO))+CJ)+this.SP.toFixed())+OM);var Bcw=
0;var Bcx=0;if(this.SP>0){Bcw=(this.AHH/this.SP)*100;Bcx=(this.AHG/this.SP)*100;
}this.Uc.Ke(((((((A.abk(Bcw,0,0)+AGX)+this.AHH.toFixed())+CJ)+A.aaR(A.acf.ACO))+
CJ)+this.SP.toFixed())+OM);this.Ud.Ke(((((((A.abk(Bcx,0,0)+AGX)+this.AHG.toFixed(
))+CJ)+A.aaR(A.acf.ACO))+CJ)+this.SP.toFixed())+OM);this.IT.Y(!this.AcB);C.Fl.ZM.
call(this,H);},AcJ:function(H){this.AHG=0;this.AHH=0;this.AH1=0;this.AH2=0;this.
AcB=false;C.Fl.AcJ.call(this,H);},_Init:function(aArg){C.Fl._Init.call(this,aArg
);C.AfL._Init.call(this.AdM={I:this},0);C.AiM._Init.call(this.Uf={I:this},0);C.AiM.
_Init.call(this.Ug={I:this},0);C.AfL._Init.call(this.AdL={I:this},0);C.AiM._Init.
call(this.Uc={I:this},0);C.AiM._Init.call(this.Ud={I:this},0);this.__proto__=C.AMi;
this.Dp(C.ANd);this.AjR(A.aaR(A.acf.A32));this.Aei(A.aaR(A.acf.Aqt));this.AdM.G(
KL);this.AdM.Aj(true);this.AdM.U(A.aaR(A.acf.A36));this.AdM.Bf(false);this.Uf.G(
Q2);this.Uf.Aj(true);this.Uf.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Uf.
Bf(true);this.Uf.AjZ(2);this.Ug.G(WE);this.Ug.Aj(true);this.Ug.U(A.aaR(A.acf.Aut
)+A.aaR(A.acf.Colon));this.Ug.Bf(true);this.Ug.AjZ(1);this.AdL.G(Aky);this.AdL.Aj(
true);this.AdL.U(A.aaR(A.acf.A37));this.AdL.Bf(false);this.Uc.G(AnD);this.Uc.Aj(
true);this.Uc.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Uc.Bf(true);this.
Uc.AjZ(2);this.Ud.G(Ar5);this.Ud.Aj(true);this.Ud.U(A.aaR(A.acf.Aut)+A.aaR(A.acf.
Colon));this.Ud.Bf(true);this.Ud.AjZ(1);this.J(this.AdM,0);this.J(this.Uf,0);this.
J(this.Ug,0);this.J(this.AdL,0);this.J(this.Uc,0);this.J(this.Ud,0);this.Uf.S(A.
aaL(A.fl.Ak));this.Ug.S(A.aaL(A.fl.Ak));this.Uc.S(A.aaL(A.fl.Ak));this.Ud.S(A.aaL(
A.fl.Ak));},_Done:function(){this.__proto__=C.Fl;this.AdM._Done();this.Uf._Done(
);this.Ug._Done();this.AdL._Done();this.Uc._Done();this.Ud._Done();C.Fl._Done.call(
this);},_ReInit:function(){C.Fl._ReInit.call(this);this.AdM._ReInit();this.Uf._ReInit(
);this.Ug._ReInit();this.AdL._ReInit();this.Uc._ReInit();this.Ud._ReInit();this.
AjR(A.aaR(A.acf.A32));this.Aei(A.aaR(A.acf.Aqt));this.AdM.U(A.aaR(A.acf.A36));this.
Uf.U(A.aaR(A.acf.Moderate)+A.aaR(A.acf.Colon));this.Ug.U(A.aaR(A.acf.Aut)+A.aaR(
A.acf.Colon));this.AdL.U(A.aaR(A.acf.A37));this.Uc.U(A.aaR(A.acf.Moderate)+A.aaR(
A.acf.Colon));this.Ud.U(A.aaR(A.acf.Aut)+A.aaR(A.acf.Colon));this.Uf.S(A.aaL(A.fl.
Ak));this.Ug.S(A.aaL(A.fl.Ak));this.Uc.S(A.aaL(A.fl.Ak));this.Ud.S(A.aaL(A.fl.Ak
));this.CT();},_Mark:function(D){var B;C.Fl._Mark.call(this,D);if((B=this.AdM)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ug)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Uc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ud)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::EvaluationTemperaturesScreen"};C.ApP={KW:null
,Aiy:null,Aiz:null,AlE:null,AaP:null,Wo:null,AaM:null,Sy:null,AaN:null,Sz:null,AaQ:
null,Wp:null,Au:null,Acw:0,Ay1:0,AoH:0,A0e:0,Ba4:0,CT:function(){this.ZM(this);}
,Dr:function(H){switch(this.Cl.CH){case 4:{if(this.IT.Fc())return;var Qb=this.Z.
Bp[1]+80;this.Z.Ga([this.Z.Bp[0],Qb]);this.Z.UY(null,null);}break;case 5:{if(this.
IT.Fc())return;var Qb=this.Z.Bp[1]-80;this.Z.Ga([this.Z.Bp[0],Qb]);this.Z.UY(null
,null);}break;default:C.Fl.Dr.call(this,H);}},Api:function(LQ,Ach){if(!LQ)return;
var Fi=A._NewObject(A.Device.Filter,0);var HN=A._NewObject(A.Device.Int32FilterCriterion
,0);HN.Initialize(1,0,Ach,true);Fi.CZ(HN);var Acs=A._NewObject(A.Device.Int32FilterCriterion
,0);Acs.Initialize(8,2,0,true);Fi.CZ(Acs);LQ.Bm(Fi);},AhO:function(H){if(this.BaU(
)){this.KW.Oe(A._GetAutoObject(A.Device.Helper).X.LastBodyWeight);if(A._GetAutoObject(
A.Device.Helper).X.Aqf()){var PZ=A._GetAutoObject(A.Device.Helper).MB(A._GetAutoObject(
A.Device.Helper).X.TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).X.TimestampLastWeighing
);if(PZ>0){var AZK=A._GetAutoObject(A.acj.DI).AkQ(PZ,A._GetAutoObject(A.Device.Helper
).X.FirstBodyWeight,A._GetAutoObject(A.Device.Helper).X.LastBodyWeight);this.Aiy.
Oe(AZK);}}var A0v=A._GetAutoObject(A.Device.Device).Bq.Ch()-2;if(A0v>=0){var Bwe=
A._GetAutoObject(A.Device.Device).Bq.ABs(A0v,8);var Bwd=A._GetAutoObject(A.Device.
Device).Bq.Hy(A0v,6);var PZ=A._GetAutoObject(A.Device.Helper).MB(Bwd,A._GetAutoObject(
A.Device.Helper).X.TimestampLastWeighing);if(PZ>0){var AZK=((A._GetAutoObject(A.
Device.Helper).X.LastBodyWeight-Bwe)/PZ)|0;this.Aiz.Oe(AZK);}}if((A._GetAutoObject(
A.Device.Helper).X.Aqf()&&((A._GetAutoObject(A.Device.Helper).X.FirstBodyWeight*
2)<A._GetAutoObject(A.Device.Helper).X.LastBodyWeight))&&(A._GetAutoObject(A.Device.
Helper).X.S9()<=180)){var AJF=A._GetAutoObject(A.Device.Helper).X.LastBodyWeight-
A._GetAutoObject(A.Device.Helper).X.FirstBodyWeight;var SZ=A._GetAutoObject(A.Device.
Helper).MB(A._GetAutoObject(A.Device.Helper).X.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).X.TimestampLastWeighing);var Bxr=A._GetAutoObject(A.Device.Helper
).X.FirstBodyWeight/(AJF/SZ);this.AlE.Oe(Bxr);}if(A._GetAutoObject(A.Device.Helper
).X.AnimalType===1){this.Acw++;this.AoH=A._GetAutoObject(A.Device.Helper).X.VisualId;
}if(A._GetAutoObject(A.Device.Helper).X.TimestampLastWeighing<A._GetAutoObject(A.
Device.Helper).Y$(7)){this.Ay1++;this.A0e=A._GetAutoObject(A.Device.Helper).X.VisualId;
this.Ba4=A._GetAutoObject(A.Device.Helper).MB(A._GetAutoObject(A.Device.Helper).
X.TimestampLastWeighing,A._GetAutoObject(A.Device.Helper).Dx());}}C.Fl.AhO.call(
this,H);},ZM:function(H){var A1_=this.Aiy.Ajb()|0;var A2a=this.Aiz.Ajb()|0;if(this.
Acw>1)A._GetAutoObject(A.Device.Device).A6(56,true,this.Acw.toFixed(),0,null);if(
this.Acw===1)A._GetAutoObject(A.Device.Device).A6(53,true,this.AoH.toFixed(),0,null
);if(this.Ay1>1)A._GetAutoObject(A.Device.Device).A6(52,true,this.Ay1.toFixed(),
0,null);if(this.Ay1===1)A._GetAutoObject(A.Device.Device).A6(57,true,(this.A0e.toFixed(
)+Ar$)+this.Ba4.toFixed(),0,null);if(this.KW.AR>0)this.Wo.U(((((((A._GetAutoObject(
A.Device.Converter).AwE(this.KW.Ajb()|0,1)+Axh)+A._GetAutoObject(A.Device.Converter
).AwE(this.KW.ApY()|0,1))+CJ)+A._GetAutoObject(A.acj.DI).AcI())+Axi)+this.KW.AR.
toFixed())+OM);else this.Wo.U(A.aaR(A.acf.Unknown));if(this.Aiy.AR>0)this.Sy.U(((((((
A._GetAutoObject(A.Device.Converter).NU(A1_,2,true)+Axh)+A._GetAutoObject(A.Device.
Converter).NU(this.Aiy.ApY()|0,2,true))+CJ)+A._GetAutoObject(A.acj.DI).ZQ())+Axi
)+this.Aiy.AR.toFixed())+OM);else this.Sy.U(A.aaR(A.acf.Unknown));if(this.Aiz.AR>
0)this.Sz.U(((((((A._GetAutoObject(A.Device.Converter).NU(A2a,2,true)+Axh)+A._GetAutoObject(
A.Device.Converter).NU(this.Aiz.ApY()|0,2,true))+CJ)+A._GetAutoObject(A.acj.DI).
ZQ())+Axi)+this.Aiz.AR.toFixed())+OM);else this.Sz.U(A.aaR(A.acf.Unknown));if(this.
AlE.AR>0)this.Wp.U(((((((A.abk(this.AlE.Ajb(),0,1)+Axh)+A.abk(this.AlE.ApY(),0,1
))+CJ)+A.aaR(A.acf.BeQ))+Axi)+this.AlE.AR.toFixed())+OM);else this.Wp.U(A.aaR(A.
acf.Unknown));var A1$=0;var A2b=0;var AcB=false;if(this.KW.AR>0)AcB=true;var H4=
0;if(!!A._GetAutoObject(A.Device.Device).Aq.Filter){var AIk=A._GetAutoObject(A.Device.
Device).Aq.Filter.DW(14,0);if(!!(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
AIk)?AIk:null))H4=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AIk)?AIk:null
).A4;}if(this.Aiy.AR>0){AcB=true;A1$=A._GetAutoObject(A.Device.Converter).A9g(A1_
,H4);}if(this.Aiz.AR>0){AcB=true;A2b=A._GetAutoObject(A.Device.Converter).A9g(A2a
,H4);}this.Sy.AjZ(A1$);this.Sz.AjZ(A2b);this.IT.Y(!AcB);C.Fl.ZM.call(this,H);},AcJ:
function(H){this.KW.XL();this.Aiy.XL();this.Aiz.XL();this.AlE.XL();this.Acw=0;this.
Ay1=0;this.AoH=0;this.A0e=0;C.Fl.AcJ.call(this,H);},E7:function(H){var B;this.Au.
Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.
Z.Bp[1]);},BaU:function(){return A._GetAutoObject(A.Device.Helper).X.LastBodyWeight>
0;},G3:function(H){A.pe([this,this.E7],this);},_Init:function(aArg){C.Fl._Init.call(
this,aArg);C.AfL._Init.call(this.AaP={I:this},0);C.Is._Init.call(this.Wo={I:this
},0);C.AfL._Init.call(this.AaM={I:this},0);C.AiM._Init.call(this.Sy={I:this},0);
C.AfL._Init.call(this.AaN={I:this},0);C.AiM._Init.call(this.Sz={I:this},0);C.AfL.
_Init.call(this.AaQ={I:this},0);C.Is._Init.call(this.Wp={I:this},0);C.Au._Init.call(
this.Au={I:this},0);this.__proto__=C.ApP;this.Dp(C.Aur);this.AjR(A.aaR(A.acf.A33
));this.Aei(A.aaR(A.acf.AjH));this.AaP.G(AGS);this.AaP.Aj(true);this.AaP.U(A.aaR(
A.acf.A2K));this.AaP.Bf(false);this.AaP.Ka(5);this.Wo.G(AXD);this.Wo.Aj(true);this.
Wo.U(A.jV);this.Wo.Bf(true);this.AaM.G(Asd);this.AaM.Aj(true);this.AaM.U(A.aaR(A.
acf.AJ3));this.AaM.Bf(false);this.AaM.Ka(5);this.Sy.G(AnL);this.Sy.Aj(true);this.
Sy.U(A.jV);this.Sy.Bf(true);this.Sy.Ke(A.jV);this.AaN.G(Ahi);this.AaN.Aj(true);this.
AaN.U(A.aaR(A.acf.Att));this.AaN.Bf(false);this.AaN.Ka(5);this.Sz.G(Bn9);this.Sz.
Aj(true);this.Sz.U(A.jV);this.Sz.Bf(true);this.Sz.Ke(A.jV);this.AaQ.G(AXE);this.
AaQ.Aj(true);this.AaQ.U(A.aaR(A.acf.A23));this.AaQ.Bf(false);this.AaQ.Ka(5);this.
Wp.G(AnM);this.Wp.Aj(true);this.Wp.U(A.jV);this.Wp.Bf(true);this.Au.G(IJ);this.J(
this.AaP,-1);this.J(this.Wo,-1);this.J(this.AaM,-1);this.J(this.Sy,-1);this.J(this.
AaN,-1);this.J(this.Sz,-1);this.J(this.AaQ,-1);this.J(this.Wp,-1);this.J(this.Au
,-1);this.Z.Eh=[this,this.G3];this.KW=A._NewObject(C.AuN,0);this.Aiy=A._NewObject(
C.AuN,0);this.Aiz=A._NewObject(C.AuN,0);this.Wo.S(A.aaL(A.fl.Ah));this.Sy.S(A.aaL(
A.fl.Ak));this.Sz.S(A.aaL(A.fl.Ak));this.Wp.S(A.aaL(A.fl.Ak));this.AlE=A._NewObject(
C.A4b,0);},_Done:function(){this.__proto__=C.Fl;this.AaP._Done();this.Wo._Done();
this.AaM._Done();this.Sy._Done();this.AaN._Done();this.Sz._Done();this.AaQ._Done(
);this.Wp._Done();this.Au._Done();C.Fl._Done.call(this);},_ReInit:function(){C.Fl.
_ReInit.call(this);this.AaP._ReInit();this.Wo._ReInit();this.AaM._ReInit();this.
Sy._ReInit();this.AaN._ReInit();this.Sz._ReInit();this.AaQ._ReInit();this.Wp._ReInit(
);this.Au._ReInit();this.AjR(A.aaR(A.acf.A33));this.Aei(A.aaR(A.acf.AjH));this.AaP.
U(A.aaR(A.acf.A2K));this.AaM.U(A.aaR(A.acf.AJ3));this.AaN.U(A.aaR(A.acf.Att));this.
AaQ.U(A.aaR(A.acf.A23));this.Wo.S(A.aaL(A.fl.Ah));this.Sy.S(A.aaL(A.fl.Ak));this.
Sz.S(A.aaL(A.fl.Ak));this.Wp.S(A.aaL(A.fl.Ak));this.CT();},_Mark:function(D){var
B;C.Fl._Mark.call(this,D);if((B=this.KW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aiy)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aiz)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AlE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AaP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wo)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AaM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sy)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AaN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sz)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.AaQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wp
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::EvaluationWeightsScreen"};C.AaL={_Init:function(aArg){C.Aje._Init.
call(this,aArg);this.__proto__=C.AaL;this.Da.Ax(A.aaL(A.ach.AB1));},_className:"Application::HeaderEvaluationFilter"
};C.J7={CT:function(){this.Text.Q(A.aaR(A.acf.None));},En:function(H){C.Aje.En.call(
this,H);this.Da.Ax(A._GetAutoObject(A.Device.Converter).AfP(A._GetAutoObject(A.Device.
Device).Jz));},_Init:function(aArg){C.Aje._Init.call(this,aArg);this.__proto__=C.
J7;},_ReInit:function(){C.Aje._ReInit.call(this);this.CT();},_className:"Application::HeaderListFilter"
};C.Aur={Init:function(aArg){this.Da.Ax(A._GetAutoObject(A.acj.DI).Bas());},_Init:
function(aArg){C.AaL._Init.call(this,aArg);this.__proto__=C.Aur;this.Init(aArg);
},_className:"Application::HeaderEvaluationWeightsFilter"};C.ANd={Init:function(
aArg){this.Da.Ax(A.aaL(A.ach.AaU));},_Init:function(aArg){C.AaL._Init.call(this,
aArg);this.__proto__=C.ANd;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.ANc={Init:function(aArg){this.Da.Ax(A.aaL(A.ach.Amj));},_Init:function(aArg){
C.AaL._Init.call(this,aArg);this.__proto__=C.ANc;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.ANb={RX:null,Da:null,AN:null,CT:function(){this.RX.Q(A.aaR(A.acf.ALh));},C5:
function(E){C.BN.C5.call(this,E);this.RX.L(E);this.Da.L(E);},_Init:function(aArg
){C.BN._Init.call(this,aArg);C.CP._Init.call(this.RX={I:this},0);A.acg.Am._Init.
call(this.Da={I:this},0);A.acg.DQ._Init.call(this.AN={I:this},0);this.__proto__=
C.ANb;this.RX.G(Bn_);this.RX.Q(A.aaR(A.acf.ALh));this.RX.A2(0x11);this.Da.G(Bn$);
this.AN.DJ(Boa);this.AN.DX(Bob);this.AN.L(A.jb.Bb);this.J(this.RX,0);this.J(this.
Da,0);this.J(this.AN,0);this.RX.S(A.aaL(A.fl.Ah));this.RX.A5(A.aaL(A.fl.Ak));this.
Da.Ax(A.aaL(A.ach.AOm));},_Done:function(){this.__proto__=C.BN;this.RX._Done();this.
Da._Done();this.AN._Done();C.BN._Done.call(this);},_ReInit:function(){C.BN._ReInit.
call(this);this.RX._ReInit();this.Da._ReInit();this.AN._ReInit();this.RX.Q(A.aaR(
A.acf.ALh));this.RX.S(A.aaL(A.fl.Ah));this.RX.A5(A.aaL(A.fl.Ak));this.CT();},_Mark:
function(D){var B;C.BN._Mark.call(this,D);if((B=this.RX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderEvaluationLosses"};C.AdN={Ts:null,Ajm:
null,Ajk:null,Ajl:null,_Init:function(aArg){C.Er._Init.call(this,aArg);C.CP._Init.
call(this.Ts={I:this},0);A.acg.Am._Init.call(this.Ajm={I:this},0);A.acg.Am._Init.
call(this.Ajk={I:this},0);A.acg.Am._Init.call(this.Ajl={I:this},0);this.__proto__=
C.AdN;this.Ts.G(Boc);this.Ts.Q(A.aaR(A.acf.Year));this.Ts.A2(0x11);this.Ts.L(A.jb.
Text);this.Ajm.G(A9D);this.Ajm.L(A.jb.Text);this.Ajk.G(Bod);this.Ajk.L(A.jb.Text
);this.Ajl.G(Boe);this.Ajl.L(A.jb.Text);this.J(this.Ts,0);this.J(this.Ajm,0);this.
J(this.Ajk,0);this.J(this.Ajl,0);this.Ts.S(A.aaL(A.fl.J6));this.Ts.A5(A.aaL(A.fl.
H$));this.Ajm.Ax(A.aaL(A.ach.AOx));this.Ajk.Ax(A.aaL(A.ach.AOw));this.Ajl.Ax(A.aaL(
A.ach.AOE));},_Done:function(){this.__proto__=C.Er;this.Ts._Done();this.Ajm._Done(
);this.Ajk._Done();this.Ajl._Done();C.Er._Done.call(this);},_ReInit:function(){C.
Er._ReInit.call(this);this.Ts._ReInit();this.Ajm._ReInit();this.Ajk._ReInit();this.
Ajl._ReInit();this.Ts.Q(A.aaR(A.acf.Year));this.Ts.S(A.aaL(A.fl.J6));this.Ts.A5(
A.aaL(A.fl.H$));},_Mark:function(D){var B;C.Er._Mark.call(this,D);if((B=this.Ts).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ajk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajl)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineEvaluationLosses"};C.Al6={AiR:null,AN:null
,A8:null,D4:null,T9:null,Sr:null,Gc:null,Xb:0,AsD:0,AkU:0,Az7:0,Init:function(aArg
){},Bg:function(aSize){C.A$.Bg.call(this,aSize);this.V.G(A.abN(this.V.M,((aSize[
0]*25)/100)|0));this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Sr.G([this.
V.M[2],0,((aSize[0]*50)/100)|0,aSize[1]]);this.A8.G([this.Sr.M[2]-1,0,this.Sr.M[
2]+1,aSize[1]]);this.T9.G([this.Sr.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
D4.G([this.T9.M[2]-1,0,this.T9.M[2]+1,aSize[1]]);this.Gc.G([this.T9.M[2],0,aSize[
0],aSize[1]]);this.AiR.G(this.Gc.M);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.
U(this.Az7.toFixed());this.Sr.L(this.V.AP);this.Sr.Q(this.AkU.toFixed());this.T9.
L(this.V.AP);this.T9.Q(this.AsD.toFixed());var BT=this.Bxq(this.Xb);this.Gc.L(A.
_GetAutoObject(A.acj.Assessment).W1(BT));this.AiR.L(A._GetAutoObject(A.acj.Assessment
).P4(BT));this.Gc.Q(A.abk(this.Xb,0,0)+AeY);},B$:function(Ac){if(!this.AW)return;
this.Hr=Ac;Ac=(this.AW.Ch()-Ac)-1;if(!!this.AW){this.AkU=this.AW.CA(Ac,1);this.AsD=
this.AW.CA(Ac,2);this.Az7=this.AW.CA(Ac,0);if(this.AkU>0)this.Xb=(this.AsD/this.
AkU)*100;else this.Xb=0;this.An();}},Bxq:function(Xb){if(Xb>=8)return 1;else if(
Xb>=4)return 2;else return 3;},_Init:function(aArg){C.A$._Init.call(this,aArg);A.
acg.AI._Init.call(this.AiR={I:this},0);A.acg.AI._Init.call(this.AN={I:this},0);A.
acg.AI._Init.call(this.A8={I:this},0);A.acg.AI._Init.call(this.D4={I:this},0);A.
acg.Text._Init.call(this.T9={I:this},0);A.acg.Text._Init.call(this.Sr={I:this},0
);A.acg.Text._Init.call(this.Gc={I:this},0);this.__proto__=C.Al6;this.AiR.G(AnB);
this.AN.L(A.jb.Bb);this.A8.L(A.jb.Bb);this.D4.G(AnB);this.D4.L(A.jb.Bb);this.T9.
L(A.jb.Text);this.Sr.G(AnB);this.Sr.L(A.jb.Text);this.Gc.L(A.jb.Text);this.J(this.
AiR,0);this.J(this.AN,0);this.J(this.A8,0);this.J(this.D4,0);this.J(this.T9,0);this.
J(this.Sr,0);this.J(this.Gc,0);this.T9.S(A.aaL(A.fl.Ah));this.Sr.S(A.aaL(A.fl.Ah
));this.Gc.S(A.aaL(A.fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.
A$;this.AiR._Done();this.AN._Done();this.A8._Done();this.D4._Done();this.T9._Done(
);this.Sr._Done();this.Gc._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$.
_ReInit.call(this);this.AiR._ReInit();this.AN._ReInit();this.A8._ReInit();this.D4.
_ReInit();this.T9._ReInit();this.Sr._ReInit();this.Gc._ReInit();this.T9.S(A.aaL(
A.fl.Ah));this.Sr.S(A.aaL(A.fl.Ah));this.Gc.S(A.aaL(A.fl.Ah));},_Mark:function(D
){var B;C.A$._Mark.call(this,D);if((B=this.AiR)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesListItem"};C.AiM={
BM:null,Awz:A.jV,Rating:0,Ai:function(Ae){C.Is.Ai.call(this,Ae);if(!!this.Rating
){this.Background.L(A._GetAutoObject(A.acj.Assessment).P4(this.Rating));this.V.L(
A._GetAutoObject(A.acj.Assessment).W1(this.Rating));}this.BM.L(this.V.AP);},S:function(
E){C.Is.S.call(this,E);if((E===A.aaL(A.fl.J6))||(E===A.aaL(A.fl.Ah)))this.BM.S(A.
aaL(A.fl.Ah));else if((E===A.aaL(A.fl.H$))||(E===A.aaL(A.fl.Ak)))this.BM.S(A.aaL(
A.fl.Ak));else this.BM.S(E);},Ke:function(E){if(this.Awz===E)return;this.Awz=E;this.
BM.Q(E);},AjZ:function(E){if(this.Rating===E)return;this.Rating=E;this.An();},_Init:
function(aArg){C.Is._Init.call(this,aArg);A.acg.Text._Init.call(this.BM={I:this}
,0);this.__proto__=C.AiM;this.BM.AV(0x34);this.BM.G(ZC);this.BM.IZ(true);this.BM.
A2(0x11);this.BM.L(A.jb.Text);this.BM.Aj(true);this.J(this.BM,0);this.BM.S(A.aaL(
A.fl.Ah));},_Done:function(){this.__proto__=C.Is;this.BM._Done();C.Is._Done.call(
this);},_ReInit:function(){C.Is._ReInit.call(this);this.BM._ReInit();this.BM.S(A.
aaL(A.fl.Ah));},_Mark:function(D){var B;C.Is._Mark.call(this,D);if((B=this.BM)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"};C.ABa={
NM:null,Sh:null,V:null,Am9:null,Am8:null,AbE:null,AbD:null,DD:Lj,A9l:A.jV,A8n:A.
jV,Abv:function(E){if(this.NM===E)return;this.NM=E;this.Sh.Abv(this.NM);},U:function(
E){if(this.DD===E)return;this.DD=E;this.V.Q(E);},A75:function(E){if(this.A9l===E
)return;this.A9l=E;this.AbE.Q(E);},A7K:function(E){if(this.A8n===E)return;this.A8n=
E;this.AbD.Q(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acu.Sh._Init.
call(this.Sh={I:this},0);A.acg.Text._Init.call(this.V={I:this},0);A.acg.AI._Init.
call(this.Am9={I:this},0);A.acg.AI._Init.call(this.Am8={I:this},0);A.acg.Text._Init.
call(this.AbE={I:this},0);A.acg.Text._Init.call(this.AbD={I:this},0);this.__proto__=
C.ABa;this.G(Bof);this.Sh.G(Bog);this.Sh.Ar(false);this.Sh.Bj_(360);this.Sh.Bkf(
0.5);this.V.AV(0x1D);this.V.G(Ww);this.V.KF(true);this.V.Q(Lj);this.V.L(A.jb.Text
);this.Am9.G(A9E);this.Am9.L(A.jb.HY);this.Am8.G(A9F);this.Am8.L(A.jb.FU);this.AbE.
AV(0x1D);this.AbE.G(A9E);this.AbE.L(A.jb.Text);this.AbD.AV(0x1D);this.AbD.G(A9F);
this.AbD.L(A.jb.C0);this.J(this.Sh,0);this.J(this.V,0);this.J(this.Am9,0);this.J(
this.Am8,0);this.J(this.AbE,0);this.J(this.AbD,0);this.Sh.Bkh(A.aaL(A.acu.ARE));
this.V.S(A.aaL(A.fl.Ak));this.AbE.S(A.aaL(A.fl.Ak));this.AbD.S(A.aaL(A.fl.Ak));}
,_Done:function(){this.__proto__=A.Core.O;this.Sh._Done();this.V._Done();this.Am9.
_Done();this.Am8._Done();this.AbE._Done();this.AbD._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Sh._ReInit();this.V._ReInit(
);this.Am9._ReInit();this.Am8._ReInit();this.AbE._ReInit();this.AbD._ReInit();this.
V.S(A.aaL(A.fl.Ak));this.AbE.S(A.aaL(A.fl.Ak));this.AbD.S(A.aaL(A.fl.Ak));},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.NM)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Am9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am8
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.Aka={Background:null,Text:null,String:A.jV,Q:function(E){if(this.String===E)
return;this.String=E;this.Text.Q(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.acg.AI._Init.call(this.Background={I:this},0);C.CP._Init.call(this.Text={
I:this},0);this.__proto__=C.Aka;this.G(SJ);this.Background.AV(0x3F);this.Background.
G(SJ);this.Background.L(A.jb.BgG);this.Text.AV(0x3F);this.Text.G(SJ);this.Text.A2(
0x12);this.Text.L(A.jb.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.S(A.aaL(A.fl.Ah));this.Text.A5(A.aaL(A.fl.Ak));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Text._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);this.Text.S(A.aaL(A.fl.Ah));this.Text.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SemiTransparentTextOverlay"
};C.QT={Akl:null,NC:null,C3:null,AbZ:null,JC:null,TemperatureUnit:null,Mr:null,PB:
null,RS:null,TZ:null,Le:null,I4:null,Zl:null,Zk:null,RU:null,Hv:null,Ai2:null,Init:
function(aArg){this.TemperatureUnit.Q(A._GetAutoObject(A.acj.Temperature).Ak2());
this.TZ.Q(A._GetAutoObject(A.acj.Temperature).Ak2());this.RU.Y(!A._GetAutoObject(
A.Device.Device).Al8);},Ai:function(Ae){C.AC.Ai.call(this,Ae);this.Ann();this.Aww(
);this.Ab1();this.Awx();},Ja:function(H){this.We(this);},CI:function(H){var B;C.
AC.CI.call(this,H);A.zX([this,this.AIR],[B=A._GetAutoObject(A.Device.Device),B.AC0
,B.AG8],0);A.zX([this,this.Aze],[B=A._GetAutoObject(A.Device.Device),B.AC3,B.AG_
],0);A.zX([this,this.Aze],[B=A._GetAutoObject(A.Device.Device),B.AQB,B.AXU],0);A.
zX([this,this.A0R],[B=A._GetAutoObject(A.Device.Device),B.Aqx,B.Ash],0);A.zX([this
,this.A0J],[B=A._GetAutoObject(A.Device.Device),B.ACX,B.AG5],0);A._GetAutoObject(
A.Device.Device).Ag2();if(A._GetAutoObject(A.Device.Device).Al8)A._GetAutoObject(
A.Device.Device).Aeb(true);A._GetAutoObject(A.Device.Device).Awk();A.pe([this,this.
A0J],this);A.pe([this,this.Aze],this);A.pe([this,this.A0R],this);},Fb:function(H
){var B;A._GetAutoObject(A.Device.Device).Ag2();A._GetAutoObject(A.Device.Device
).TT(false);A._GetAutoObject(A.Device.Device).Aek(false);A._GetAutoObject(A.Device.
Device).Aeb(false);A.z$([this,this.AIR],[B=A._GetAutoObject(A.Device.Device),B.AC0
,B.AG8],0);A.z$([this,this.Aze],[B=A._GetAutoObject(A.Device.Device),B.AC3,B.AG_
],0);A.z$([this,this.Aze],[B=A._GetAutoObject(A.Device.Device),B.AQB,B.AXU],0);A.
z$([this,this.A0R],[B=A._GetAutoObject(A.Device.Device),B.Aqx,B.Ash],0);A.z$([this
,this.A0J],[B=A._GetAutoObject(A.Device.Device),B.ACX,B.AG5],0);},Aze:function(H
){this.An();},Ann:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.jb.CM);this.C3.L(A.jb.FU);this.JC.L(this.C3.AP);this.
Mr.L(this.C3.AP);this.TemperatureUnit.L(this.C3.AP);}break;default:{this.Background.
L(A.jb.CM);this.C3.L(A.jb.AY);this.JC.L(A.jb.Text);this.Mr.L(this.JC.AP);this.TemperatureUnit.
L(this.JC.AP);this.Hv.L(A.jb.FU);}}},Aww:function(){this.Akl.Ar(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.JC.Q(A.aaR(A.acf.ACf));this.C3.Ax(A.aaL(A.ach.AuE));this.C3.Cr(0);
this.NC.Cr(0);}break;case 1:{this.ATb(A._GetAutoObject(A.Device.Device).Ki,false
);this.C3.Ax(A.aaL(A.ach.AuE));this.NC.Cr(0);}break;case 2:{this.RS.Q(A._GetAutoObject(
A.Device.Converter).Akk(A._GetAutoObject(A.Device.Device).AEw));this.ATb(A._GetAutoObject(
A.Device.Device).Ki,false);this.C3.Ax(null);this.NC.Cr(1);this.AbZ.Y(true);this.
PB.Y(true);this.RS.Y(true);this.TZ.Y(true);}break;case 3:{this.ASj();this.ATb(A.
_GetAutoObject(A.Device.Device).Ki,true);this.AbZ.Y(false);this.PB.Y(false);this.
RS.Y(false);this.TZ.Y(false);}break;case 4:{this.JC.Q(A.aaR(A.acf.BgU));this.Mr.
Q(A.aaR(A.act.AjG));this.C3.Ax(A.aaL(A.ach.AuG));this.C3.Cr(2);this.NC.Cr(0);}break;
default:A.ab5("%s%e",AGj,A._GetAutoObject(A.Device.Device).MeasureState);}},Ab1:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).Ki<=3240)||(A._GetAutoObject(A.Device.Device
).Ki>=5460))this.N.C7(null);else this.N.C7(A.aaL(A.ach.AdQ));this.N.Cm(null);}break;
default:;}},ArF:function(H){A._GetAutoObject(C.AZ).Fk();},We:function(H){},AX6:function(
s){this.We(s);},Akf:function(H){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:this.Bxd(this);break;default:;}},AX5:function(s){this.Akf(s);},ATb:
function(An1,Bv6){if(Bv6)this.Le.L(A.jb.Bh);else this.Le.L(A.jb.FU);if(An1<=3240
){this.Mr.Y(false);this.TemperatureUnit.Y(false);this.Le.Y(true);this.Le.Q(A.aaR(
A.act.ASZ));}else if(An1>=5460){this.Mr.Y(false);this.TemperatureUnit.Y(false);this.
Le.Y(true);this.Le.Q(A.aaR(A.act.Bmv));}else{this.Mr.Y(true);this.TemperatureUnit.
Y(true);this.Le.Y(false);this.Mr.Q(A._GetAutoObject(A.Device.Converter).Akk(An1)
);}},Awx:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:
case 1:if((A._GetAutoObject(A.Device.Device).Ki<=3240)||(A._GetAutoObject(A.Device.
Device).Ki>=5460))this.JC.Q(A.aaR(A.acf.ACf));else this.JC.Q(A.aaR(A.acf.Bm4));break;
default:;}},Awy:function(){},BmN:function(){switch(A._GetAutoObject(A.Device.Device
).MeasureState){case 3:this.Zl.Ar(true);break;case 4:this.Zk.Ar(true);break;default:{
this.Zl.Ar(false);this.Zk.Ar(false);A._GetAutoObject(A.Device.Device).Aek(false);
}}},AIR:function(H){this.An();this.Awy();this.BmN();this.BmL();},A0R:function(H){
if(A._GetAutoObject(A.Device.Device).Al9){this.RU.L(A.jb.HY);this.RU.Cr(1);}else{
this.RU.L(A.jb.Bh);this.RU.Cr(0);}},Bxd:function(H){if(!A._GetAutoObject(A.Device.
Device).Al8)A._GetAutoObject(A.Device.Device).Aeb(!A._GetAutoObject(A.Device.Device
).Al9);},BmL:function(){if(A._GetAutoObject(A.Device.Device).Al8){this.RU.Y(false
);if(A._GetAutoObject(A.Device.Device).MeasureState===1)A._GetAutoObject(A.Device.
Device).Aeb(true);else A._GetAutoObject(A.Device.Device).Aeb(false);}else if(A._GetAutoObject(
A.Device.Device).MeasureState===1)this.RU.Y(true);else this.RU.Y(false);},AIT:function(
H){this.CI(this);},ASj:function(){A.ab5("%s",A9C);},A0J:function(H){if(A._GetAutoObject(
A.Device.Device).Hv){this.JC.G(Boh);this.Mr.G(Boi);this.TemperatureUnit.G(Boj);}
else{this.JC.G(Bok);this.Mr.G(Bol);this.TemperatureUnit.G(Bom);}},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.acl.FX._Init.call(this.Akl={I:this},0);A.acg.
Am._Init.call(this.NC={I:this},0);A.acg.Am._Init.call(this.C3={I:this},0);A.acg.
Am._Init.call(this.AbZ={I:this},0);A.acg.Text._Init.call(this.JC={I:this},0);A.acg.
Text._Init.call(this.TemperatureUnit={I:this},0);A.acg.Text._Init.call(this.Mr={
I:this},0);A.acg.Text._Init.call(this.PB={I:this},0);A.acg.Text._Init.call(this.
RS={I:this},0);A.acg.Text._Init.call(this.TZ={I:this},0);C.CP._Init.call(this.Le={
I:this},0);A.Device.U6._Init.call(this.I4={I:this},0);A.Device.U6._Init.call(this.
Zl={I:this},0);A.Device.U6._Init.call(this.Zk={I:this},0);A.acg.Am._Init.call(this.
RU={I:this},0);C.CP._Init.call(this.Hv={I:this},0);A.acl.U6._Init.call(this.Ai2={
I:this},0);this.__proto__=C.QT;var B;this.N.Y(true);this.Akl.Fy(1000);this.Akl.B1=
2;this.NC.G(Bon);this.NC.L(A.jb.C0);this.C3.G(Boo);this.C3.L(A.jb.AY);this.C3.Cr(
0);this.C3.Y(true);this.AbZ.G(Bop);this.AbZ.L(A.jb.Text);this.AbZ.Y(false);this.
JC.KF(true);this.JC.Q(A.aaR(A.acf.ACf));this.JC.L(A.jb.Text);this.TemperatureUnit.
A2(0x9);this.TemperatureUnit.L(A.jb.Text);this.Mr.A2(0x14);this.Mr.Q(A.aaR(A.act.
AjG));this.Mr.L(A.jb.Text);this.PB.G(Boq);this.PB.Q(A.aaR(A.acf.PB));this.PB.L(A.
jb.Text);this.PB.Y(false);this.RS.G(Bor);this.RS.A2(0x14);this.RS.Q(Bos);this.RS.
L(A.jb.Text);this.RS.Y(false);this.TZ.G(Bot);this.TZ.Q(Bou);this.TZ.L(A.jb.Text);
this.TZ.Y(false);this.Le.G(Bov);this.Le.Q(A.aaR(A.act.ASZ));this.Le.A2(0x12);this.
Le.L(A.jb.FU);this.I4.B1=false;this.I4.Ct=true;this.I4.ID(1);this.I4.Fy(4000);this.
I4.V5(0);this.Zl.B1=false;this.Zl.Ct=true;this.Zl.ID(2);this.Zl.Fy(400);this.Zl.
V5(200);this.Zk.B1=false;this.Zk.Ct=true;this.Zk.ID(3);this.Zk.Fy(500);this.Zk.V5(
250);this.RU.G(Bow);this.Hv.G(Box);this.Hv.Y(A._GetAutoObject(A.Device.Device).Hv
);this.Hv.Q(A.aaR(A.acf.Hv));this.Hv.A2(0x12);this.Hv.L(A.jb.FU);this.Ai2.Ar(A._GetAutoObject(
A.Device.Device).Hv);this.Ai2.Fy(500);this.Ai2.V5(1000);this.J(this.NC,0);this.J(
this.C3,0);this.J(this.AbZ,0);this.J(this.JC,0);this.J(this.TemperatureUnit,0);this.
J(this.Mr,0);this.J(this.PB,0);this.J(this.RS,0);this.J(this.TZ,0);this.J(this.Le
,0);this.J(this.RU,0);this.J(this.Hv,0);this.N.Cu=[this,this.ArF];this.N.Cf=[this
,this.AX5];this.N.Ci=[this,this.AX6];this.N.CS(A.aaL(A.ach.AdP));this.Akl.R=[B=this.
C3,B.AQr,B.Cr];this.NC.Ax(A.aaL(A.ach.NC));this.C3.Ax(A.aaL(A.ach.AuE));this.AbZ.
Ax(A.aaL(A.ach.AOO));this.JC.S(A.aaL(A.fl.Ah));this.TemperatureUnit.S(A.aaL(A.fl.
Ah));this.Mr.S(A.aaL(A.fl.AdJ));this.PB.S(A.aaL(A.fl.Ah));this.RS.S(A.aaL(A.fl.Ey
));this.TZ.S(A.aaL(A.fl.Ey));this.Le.S(A.aaL(A.fl.AdJ));this.Le.A5(A.aaL(A.fl.Ey
));this.Le.CC(A.aaL(A.fl.Ah));this.I4.R=[B=A._GetAutoObject(A.Device.Device),B.AQJ
,B.AX0];this.Zl.R=[B=A._GetAutoObject(A.Device.Device),B.AC4,B.AG$];this.Zk.R=[B=
A._GetAutoObject(A.Device.Device),B.AC4,B.AG$];this.RU.Ax(A.aaL(A.ach.ApS));this.
Hv.S(A.aaL(A.fl.Ey));this.Hv.A5(A.aaL(A.fl.J6));this.Hv.CC(A.aaL(A.fl.H$));this.
Ai2.R=[B=this.Hv,B.Fc,B.Y];this.Init(aArg);},_Done:function(){this.__proto__=C.AC;
this.Akl._Done();this.NC._Done();this.C3._Done();this.AbZ._Done();this.JC._Done(
);this.TemperatureUnit._Done();this.Mr._Done();this.PB._Done();this.RS._Done();this.
TZ._Done();this.Le._Done();this.I4._Done();this.Zl._Done();this.Zk._Done();this.
RU._Done();this.Hv._Done();this.Ai2._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.Akl._ReInit();this.NC._ReInit();this.C3._ReInit();
this.AbZ._ReInit();this.JC._ReInit();this.TemperatureUnit._ReInit();this.Mr._ReInit(
);this.PB._ReInit();this.RS._ReInit();this.TZ._ReInit();this.Le._ReInit();this.I4.
_ReInit();this.Zl._ReInit();this.Zk._ReInit();this.RU._ReInit();this.Hv._ReInit(
);this.Ai2._ReInit();this.JC.Q(A.aaR(A.acf.ACf));this.Mr.Q(A.aaR(A.act.AjG));this.
PB.Q(A.aaR(A.acf.PB));this.Le.Q(A.aaR(A.act.ASZ));this.Hv.Q(A.aaR(A.acf.Hv));this.
JC.S(A.aaL(A.fl.Ah));this.TemperatureUnit.S(A.aaL(A.fl.Ah));this.Mr.S(A.aaL(A.fl.
AdJ));this.PB.S(A.aaL(A.fl.Ah));this.RS.S(A.aaL(A.fl.Ey));this.TZ.S(A.aaL(A.fl.Ey
));this.Le.S(A.aaL(A.fl.AdJ));this.Le.A5(A.aaL(A.fl.Ey));this.Le.CC(A.aaL(A.fl.Ah
));this.Hv.S(A.aaL(A.fl.Ey));this.Hv.A5(A.aaL(A.fl.J6));this.Hv.CC(A.aaL(A.fl.H$
));},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Akl)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C3)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AbZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
JC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PB)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.RS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Le)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zl)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Hv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ai2)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.ASO={Ab1:
function(){C.QT.Ab1.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:case 4:{this.N.Cm(null);this.N.C7(A.aaL(A.ach.AuH));}break;default:;}},
We:function(H){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).Ki>3240)&&(A._GetAutoObject(A.Device.Device
).Ki<5460)){A._GetAutoObject(A.Device.Device).Ag2();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:case 4:this.AIT(this);break;default:;}},Awx:
function(){C.QT.Awx.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.JC.Q(A.aaR(A.acf.BgV));break;default:;}},Awy:function(){C.QT.Awy.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{A._GetAutoObject(
A.Device.Device).V6(16711680);this.I4.Ar(true);}break;default:this.I4.Ar(false);
}},ASj:function(){this.C3.Ax(A.aaL(A.ach.AuG));this.C3.Cr(0);this.NC.Cr(0);},_Init:
function(aArg){C.QT._Init.call(this,aArg);this.__proto__=C.ASO;this.Dp(C.AM$);},
_className:"Application::TemperatureMeasurementScreen"};C.ANe={Da:null,Iz:null,NE:
null,AN:null,Agh:null,A8:null,C5:function(E){C.BN.C5.call(this,E);this.Da.L(E);this.
Iz.L(E);this.NE.L(E);this.Agh.L(E);},_Init:function(aArg){C.BN._Init.call(this,aArg
);A.acg.Am._Init.call(this.Da={I:this},0);A.acg.Am._Init.call(this.Iz={I:this},0
);A.acg.Am._Init.call(this.NE={I:this},0);A.acg.DQ._Init.call(this.AN={I:this},0
);A.acg.Am._Init.call(this.Agh={I:this},0);A.acg.DQ._Init.call(this.A8={I:this},
0);this.__proto__=C.ANe;this.Da.G(Axe);this.Iz.G(AFS);this.NE.G(AFV);this.AN.DJ(
A9G);this.AN.DX(A9H);this.AN.L(A.jb.Bb);this.Agh.G(Boy);this.Agh.L(A.jb.C0);this.
A8.DJ(Boz);this.A8.DX(BoA);this.A8.L(A.jb.Bb);this.J(this.Da,0);this.J(this.Iz,0
);this.J(this.NE,0);this.J(this.AN,0);this.J(this.Agh,0);this.J(this.A8,0);this.
Da.Ax(A.aaL(A.ach.AB1));this.Iz.Ax(A.aaL(A.ach.AdR));this.NE.Ax(A.aaL(A.ach.Auz)
);this.Agh.Ax(A.aaL(A.ach.AOl));},_Done:function(){this.__proto__=C.BN;this.Da._Done(
);this.Iz._Done();this.NE._Done();this.AN._Done();this.Agh._Done();this.A8._Done(
);C.BN._Done.call(this);},_ReInit:function(){C.BN._ReInit.call(this);this.Da._ReInit(
);this.Iz._ReInit();this.NE._ReInit();this.AN._ReInit();this.Agh._ReInit();this.
A8._ReInit();},_Mark:function(D){var B;C.BN._Mark.call(this,D);if((B=this.Da)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Iz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
NE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Agh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderFilterCalfLosses"};C.Du={Eq:null,CX:null,AEQ:
0,ALM:0,Init:function(aArg){A.zV([this,this.AJu],A._GetAutoObject(A.Device.Device
).Aq,0);A.pe([this,this.AJu],this);},AJu:function(H){var Ac=this.AEQ;if(Ac<0){this.
CX.G$();this.CX.DS(this.ALM);return;}this.CX.DS(A._GetAutoObject(A.Device.Device
).Aq.Amc(Ac,14));this.CX.ADl(A._GetAutoObject(A.Device.Device).Aq.IU(Ac,13));this.
CX.Aec(A._GetAutoObject(A.Device.Device).Aq.HT(Ac,8));this.CX.TR(A._GetAutoObject(
A.Device.Device).Aq.HT(Ac,11));this.CX.Aef(A._GetAutoObject(A.Device.Device).Aq.
HT(Ac,12));this.CX.Aeh(A._GetAutoObject(A.Device.Device).Aq.CA(Ac,5));},A7M:function(
E){if(this.AEQ===E)return;this.AEQ=E;A.pe([this,this.AJu],this);},A7f:function(E
){if(this.ALM===E)return;this.ALM=E;A.pe([this,this.AJu],this);},A6x:function(){
return this.AEQ;},_Init:function(aArg){C.Er._Init.call(this,aArg);C.CP._Init.call(
this.Eq={I:this},0);C.CX._Init.call(this.CX={I:this},0);this.__proto__=C.Du;this.
Eq.G(BoB);this.Eq.Q(A.aaR(A.acf.Gy));this.Eq.A2(0x11);this.Eq.L(A.jb.Text);this.
CX.G(A9I);this.J(this.Eq,0);this.J(this.CX,0);this.Eq.S(A.aaL(A.fl.Ah));this.Eq.
A5(A.aaL(A.fl.Ak));this.Eq.CC(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){
this.__proto__=C.Er;this.Eq._Done();this.CX._Done();C.Er._Done.call(this);},_ReInit:
function(){C.Er._ReInit.call(this);this.Eq._ReInit();this.CX._ReInit();this.Eq.Q(
A.aaR(A.acf.Gy));this.Eq.S(A.aaL(A.fl.Ah));this.Eq.A5(A.aaL(A.fl.Ak));this.Eq.CC(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.Er._Mark.call(this,D);if((B=this.Eq).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.CX)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineAnimalId"};C.Oo={Af0:null,Text:null,Aew:null,C5:function(E
){C.BN.C5.call(this,E);this.Af0.L(E);this.Text.L(E);this.Aew.L(E);},_Init:function(
aArg){C.BN._Init.call(this,aArg);A.acg.Am._Init.call(this.Af0={I:this},0);C.CP._Init.
call(this.Text={I:this},0);A.acg.Am._Init.call(this.Aew={I:this},0);this.__proto__=
C.Oo;this.Af0.G(BoC);this.Af0.L(A.jb.Text);this.Text.G(AF5);this.Text.Ar(false);
this.Text.Q(A.jV);this.Text.L(A.jb.Text);this.Aew.G(BoD);this.Aew.L(A.jb.Text);this.
J(this.Af0,0);this.J(this.Text,0);this.J(this.Aew,0);this.Af0.Ax(A.aaL(A.ach.ANg
));this.Text.S(A.aaL(A.fl.J6));this.Text.A5(A.aaL(A.fl.H$));},_Done:function(){this.
__proto__=C.BN;this.Af0._Done();this.Text._Done();this.Aew._Done();C.BN._Done.call(
this);},_ReInit:function(){C.BN._ReInit.call(this);this.Af0._ReInit();this.Text.
_ReInit();this.Aew._ReInit();this.Text.S(A.aaL(A.fl.J6));this.Text.A5(A.aaL(A.fl.
H$));},_Mark:function(D){var B;C.BN._Mark.call(this,D);if((B=this.Af0)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aew
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AM9={
_Init:function(aArg){C.Oo._Init.call(this,aArg);this.__proto__=C.AM9;this.Text.Q(
A.aaR(A.acf.Device));},_ReInit:function(){C.Oo._ReInit.call(this);this.Text.Q(A.
aaR(A.acf.Device));},_className:"Application::HeaderDeviceMenu"};C.AM$={_Init:function(
aArg){C.Oo._Init.call(this,aArg);this.__proto__=C.AM$;this.Kh(this.Aew,-2);this.
Aew.Ax(A.aaL(A.ach.AaU));},_className:"Application::HeaderDeviceTemperature"};C.
XS={Ai:function(Ae){C.Al6.Ai.call(this,Ae);this.U(A.aaR(A.acf.Bmw)+A.aaR(A.acf.Colon
));},B$:function(Ac){var B;if(!this.AW)return;this.AkU=0;this.AsD=0;this.Xb=0;if(
!!this.AW){var P;for(P=0;P<this.AW.Ch();P++){this.AkU+=this.AW.CA(P,1);this.AsD+=
this.AW.CA(P,2);}if(this.AkU>0)this.Xb=(this.AsD/this.AkU)*100;this.An();}},_Init:
function(aArg){C.Al6._Init.call(this,aArg);this.__proto__=C.XS;this.AN.Y(false);
this.A8.Y(false);this.D4.Y(false);this.V.S(A.aaL(A.fl.J6));this.V.A5(A.aaL(A.fl.
H$));},_ReInit:function(){C.Al6._ReInit.call(this);this.V.S(A.aaL(A.fl.J6));this.
V.A5(A.aaL(A.fl.H$));},_className:"Application::EvaluationLossesSumItem"};C.A4a={
Ag:null,A4:0,_Init:function(aArg){this.__proto__=C.A4a;A.h7++;},_Done:function(){
this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=
this.Ag)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::FloatRecord"
};C.A4b={KN:null,MG:null,AR:0,XL:function(){this.KN=null;this.MG=null;this.AR=0;
},Oe:function(A1){var G4;G4=A._NewObject(C.A4a,0);G4.A4=A1;if(!this.KN){this.KN=
G4;this.MG=G4;this.AR=1;}else{this.MG.Ag=G4;this.MG=G4;this.AR=this.AR+1;}},Ame:
function(){var B;var Rm=0;var N3=this.KN;while(!!N3){Rm+=N3.A4;N3=N3.Ag;}return Rm;
},Ajb:function(){if(!this.AR)return 0;return this.Ame()/this.AR;},ApY:function(){
var B;if(!this.AR)return 0;var AYZ=this.Ajb();var Acz=0;var N3=this.KN;while(!!N3
){Acz+=Math.pow(N3.A4-AYZ,2);N3=N3.Ag;}Acz/=this.AR;Acz=Math.sqrt(Acz);return Acz;
},_Init:function(aArg){this.__proto__=C.A4b;A.h7++;},_Done:function(){this.__proto__=
null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.KN)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.MG)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FloatRecordList"};C.AfL={Background:null,V:null,KG:0,TX:5,G8:false
,Ai:function(Ae){C.Hg.Ai.call(this,Ae);if(this.G8)this.Background.L(A.jb.Bh);else
this.Background.L(A.jb.CM);},U:function(E){C.Hg.U.call(this,E);this.V.Q(E);},Bf:
function(E){if(this.G8===E)return;this.G8=E;this.An();},Ka:function(E){if(this.TX===
E)return;this.TX=E;this.V.G([].concat(E,this.V.M.slice(1,4)));},_Init:function(aArg
){C.Hg._Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);C.CP.
_Init.call(this.V={I:this},0);this.__proto__=C.AfL;this.G(BC);this.Background.AV(
0x3F);this.Background.G(BC);this.V.AV(0x3F);this.V.G(AGN);this.V.A2(0x11);this.V.
L(A.jb.Text);this.KG=A.jb.Text;this.J(this.Background,0);this.J(this.V,0);this.V.
S(A.aaL(A.fl.J6));this.V.A5(A.aaL(A.fl.H$));this.V.CC(A.aaL(A.fl.By));},_Done:function(
){this.__proto__=C.Hg;this.Background._Done();this.V._Done();C.Hg._Done.call(this
);},_ReInit:function(){C.Hg._ReInit.call(this);this.Background._ReInit();this.V.
_ReInit();this.V.S(A.aaL(A.fl.J6));this.V.A5(A.aaL(A.fl.H$));this.V.CC(A.aaL(A.fl.
By));},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalHeadingItem"};C.AL3={V1:function(H){this.AfJ();this.Ex(A.aaR(
A.acf.ASY),[this,this.ARt],5);this.Ex(A.aaR(A.acf.ASW),[this,this.ARs],7);this.Ex(
A.aaR(A.acf.Calving),[this,this.BiD],11);this.Ex(A.aaR(A.acf.Ag4),[this,this.AjX
],2);this.Ex(A.aaR(A.acf.Adb),[this,this.AqJ],1);this.Ex(A.aaR(A.acf.AiB),[this,
this.AmP],0);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.Ac9
)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},Dr:function(H){}
,AaJ:function(){return C.ALb;},AaK:function(){return C.ANC;},QO:function(H){A._GetAutoObject(
A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).ABo());},HH:function(H){
C.EO.HH.call(this,H);if(this.AjC()===false){this.N.Cm(A.aaL(A.ach.AN5));this.N.Cf=[
this,this.A3J];this.N.FA(A.jV);}this.N.Ow(false);this.N.Ox(false);},Afv:function(
){A._GetAutoObject(C.AZ).BZ(70);},Afu:function(){A._GetAutoObject(C.AZ).BZ(71);}
,_Init:function(aArg){C.EO._Init.call(this,aArg);this.__proto__=C.AL3;var B;this.
Dp(C.ANa);this.Do(A.aaR(A.acf.APZ));this.AjW([B=A._GetAutoObject(A.Device.Device
),B.A6a,B.A_m]);},_ReInit:function(){C.EO._ReInit.call(this);this.Do(A.aaR(A.acf.
APZ));},_className:"Application::DryCowListScreen"};C.AL2={_Init:function(aArg){
C.IS._Init.call(this,aArg);this.__proto__=C.AL2;this.K4.Ar(false);this.K4.Aj(false
);this.K4.Y(false);this.Je.Ar(false);this.Je.Aj(false);this.Je.Y(false);},_className:
"Application::DryCowListFilterScreen"};C.AL1={_Init:function(aArg){C.Gs._Init.call(
this,aArg);this.__proto__=C.AL1;this.N.BU(A.aaR(A.acf.A2Q));},_ReInit:function(){
C.Gs._ReInit.call(this);this.N.BU(A.aaR(A.acf.A2Q));},_className:"Application::DryCowListActionsScreen"
};C.ANa={En:function(H){C.J7.En.call(this,H);this.Da.Ax(A._GetAutoObject(A.Device.
Converter).AfP(9));},_Init:function(aArg){C.J7._Init.call(this,aArg);this.__proto__=
C.ANa;},_className:"Application::HeaderDryCowListFilter"};C.AaG={Filter:null,LM:
null,AFi:A.jV,Eg:0,AEq:1,Operator:1,Bg:function(aSize){C.AbL.Bg.call(this,aSize);
this.V.G([15,0,this.A0.M[0]-15,aSize[1]]);},Ai:function(Ae){C.AbL.Ai.call(this,Ae
);this.LM.L(this.V.AP);},Bm:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L2],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L2
],E,0);A.pe([this,this.L2],this);},L2:function(H){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.S2((F=this.Filter,F[1].call(F[0])).DW(this.Eg,this.
Operator));else this.S2(null);},M2:function(E){if(this.Eg===E)return;this.Eg=E;A.
pe([this,this.L2],this);},S2:function(AM){if(!!AM){var AZC;if(this.AEq!==1)AZC=this.
AEq;else AZC=AM.Operator;this.U((this.AFi+CJ)+A._GetAutoObject(A.Device.Converter
).A38(AZC));this.YT(false);}else{this.U(this.AFi);this.YT(true);}},Ov:function(E
){if(this.Operator===E)return;this.Operator=E;A.pe([this,this.L2],this);},AEa:function(
E){if(this.AFi===E)return;this.AFi=E;A.pe([this,this.L2],this);},A7B:function(E){
if(this.AEq===E)return;this.AEq=E;A.pe([this,this.L2],this);},_Init:function(aArg
){C.AbL._Init.call(this,aArg);C.LM._Init.call(this.LM={I:this},0);this.__proto__=
C.AaG;this.G(Ar3);this.A0.G(BoE);this.LM.G(AXF);this.Kh(this.V,-1);this.J(this.LM
,0);},_Done:function(){this.__proto__=C.AbL;this.LM._Done();C.AbL._Done.call(this
);},_ReInit:function(){C.AbL._ReInit.call(this);this.LM._ReInit();},_Mark:function(
D){var B;C.AbL._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.LM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.Ai6={LM:null,Ai:function(Ae){C.Qh.Ai.call(this,Ae);this.LM.L(this.V.AP);},S2:
function(AM){if(!!AM){this.HW.Cr(1);this.YT(true);this.LM.A7s(false);}else{this.
HW.Cr(0);this.YT(false);this.LM.A7s(true);}},_Init:function(aArg){C.Qh._Init.call(
this,aArg);C.LM._Init.call(this.LM={I:this},0);this.__proto__=C.Ai6;this.I0=20;this.
LM.G(AXF);this.J(this.LM,0);},_Done:function(){this.__proto__=C.Qh;this.LM._Done(
);C.Qh._Done.call(this);},_ReInit:function(){C.Qh._ReInit.call(this);this.LM._ReInit(
);},_Mark:function(D){var B;C.Qh._Mark.call(this,D);if((B=this.LM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.AAv={R:null,CT:function(
){this.U(A._GetAutoObject(A.Device.Helper).Amd(this.TableId,this.Eg));},S2:function(
AM){var F;if(!!this.R&&(F=this.R,F[1].call(F[0])))this.HW.Cr(1);else this.HW.Cr(
0);},OT:function(H){A.pe([this,this.L2],this);},Av:function(E){if(A.aaZ(this.R,E
))return;if(!!this.R)A.z$([this,this.OT],this.R,0);this.R=E;if(!!E)A.zX([this,this.
OT],E,0);if(!!E)A.pe([this,this.OT],this);},_Init:function(aArg){C.Qh._Init.call(
this,aArg);this.__proto__=C.AAv;},_ReInit:function(){C.Qh._ReInit.call(this);this.
CT();},_Mark:function(D){var B;C.Qh._Mark.call(this,D);if((B=this.R)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.ANC={Yh:null,IY:null,_Init:function(aArg){C.Du._Init.call(this,aArg);A.acg.Text.
_Init.call(this.Yh={I:this},0);A.acg.Text._Init.call(this.IY={I:this},0);this.__proto__=
C.ANC;this.A7f(1);this.Yh.G(BoF);this.Yh.KF(true);this.Yh.Q(A.aaR(A.acf.ACq));this.
Yh.L(A.jb.Text);this.IY.G(SG);this.IY.Q(((A.aaR(A.acf.S9)+A9J)+A.aaR(A.acf.A9k))+
OM);this.IY.L(A.jb.Text);this.J(this.Yh,0);this.J(this.IY,0);this.Yh.S(A.aaL(A.fl.
Ak));this.IY.S(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.Du;this.Yh._Done(
);this.IY._Done();C.Du._Done.call(this);},_ReInit:function(){C.Du._ReInit.call(this
);this.Yh._ReInit();this.IY._ReInit();this.Yh.Q(A.aaR(A.acf.ACq));this.IY.Q(((A.
aaR(A.acf.S9)+A9J)+A.aaR(A.acf.A9k))+OM);this.Yh.S(A.aaL(A.fl.Ak));this.IY.S(A.aaL(
A.fl.By));},_Mark:function(D){var B;C.Du._Mark.call(this,D);if((B=this.Yh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdDryCow"};C.ALb={L9:null,KB:null,Ada:null,AN:null,A8:null
,WR:0,Init:function(aArg){},Bg:function(aSize){C.A$.Bg.call(this,aSize);this.Background.
G(A.abK(this.Background.M,aSize));this.V.G(A.abN(this.V.M,((aSize[0]*30)/100)|0)
);this.L9.G(this.V.M);this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.KB.
G([this.V.M[2],0,((aSize[0]*58)/100)|0,aSize[1]]);this.A8.G([this.KB.M[2]-1,0,this.
KB.M[2]+1,aSize[1]]);this.Ada.G([this.KB.M[2],0,aSize[0],aSize[1]]);},Ai:function(
Ae){C.A$.Ai.call(this,Ae);this.KB.L(this.V.AP);this.Ada.L(this.V.AP);if(!!this.WR&&(
this.WR!==5)){this.L9.L(A._GetAutoObject(A.acj.Assessment).P4(this.WR));this.V.L(
A._GetAutoObject(A.acj.Assessment).W1(this.WR));}else this.L9.L(this.Background.
AP);},B$:function(Ac){if(!this.AW)return;this.Hr=Ac;if(!!this.AW){var Od=this.AW.
CA(Ac,1);var A0c=this.AW.CA(Ac,29);var SS=this.AW.Hy(Ac,4);var LC=this.AW.IU(Ac,
13);var AkX=this.AW.IU(Ac,17);var Ak6=this.AW.HT(Ac,11);this.WR=A._GetAutoObject(
A.Device.Helper).AKo(LC,Ak6,AkX);this.U(Od.toFixed());this.KB.Q(A0c.toFixed());this.
Ada.Q(A._GetAutoObject(A.acj.Ky).ABm(SS,A._GetAutoObject(A.Device.Helper).Dx(),BoG
));this.An();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AI._Init.call(
this.L9={I:this},0);A.acg.Text._Init.call(this.KB={I:this},0);A.acg.Text._Init.call(
this.Ada={I:this},0);A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(
this.A8={I:this},0);this.__proto__=C.ALb;this.L9.G(Asb);this.AN.L(A.jb.Bb);this.
A8.L(A.jb.Bb);this.J(this.L9,0);this.J(this.KB,0);this.J(this.Ada,0);this.J(this.
AN,0);this.J(this.A8,0);this.KB.S(A.aaL(A.fl.Ah));this.Ada.S(A.aaL(A.fl.Ah));this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.L9._Done();this.KB._Done(
);this.Ada._Done();this.AN._Done();this.A8._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.L9._ReInit();this.KB._ReInit();this.Ada.
_ReInit();this.AN._ReInit();this.A8._ReInit();this.KB.S(A.aaL(A.fl.Ah));this.Ada.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.L9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ada)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"
};C.Rv={AH6:0,BaR:false,Ai:function(Ae){C.Fj.Ai.call(this,Ae);if(this.BaR){this.
U(A.aaR(A.acf.ALZ));this.Ke(A.jV);}else{this.U(A.aaR(A.acf.BgA));if(this.AH6>0)this.
Ke(this.AH6.toFixed());else this.Ke(WC);}},B$:function(H){C.Fj.B$.call(this,H);this.
BaR=A._GetAutoObject(A.Device.Helper).X.IsDry;var AkS=A._GetAutoObject(A.Device.
Helper).X.DateOfLastCalving;if(AkS>0)this.AH6=A._GetAutoObject(A.Device.Helper).
MB(AkS,A._GetAutoObject(A.Device.Helper).Dx());else this.AH6=0;this.An();},_Init:
function(aArg){C.Fj._Init.call(this,aArg);this.__proto__=C.Rv;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AKt={AJB:A.jV,Ai:function(Ae){C.Fj.Ai.call(this,Ae);this.U(A.aaR(A.acf.S9));
this.Ke(this.AJB);},B$:function(H){C.Fj.B$.call(this,H);var SS=A._GetAutoObject(
A.Device.Helper).X.DateOfBirth;this.AJB=A._GetAutoObject(A.acj.Ky).ABm(SS,A._GetAutoObject(
A.Device.Helper).Dx(),((((BoH+A.aaR(A.acf.BdU))+BoI)+A.aaR(A.acf.BdT))+BoJ)+A.aaR(
A.acf.AJ4));this.An();},_Init:function(aArg){C.Fj._Init.call(this,aArg);this.__proto__=
C.AKt;this.AJB=A.aaR(A.acf.Unknown);},_ReInit:function(){C.Fj._ReInit.call(this);
this.AJB=A.aaR(A.acf.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.ALT={TK:null,Yz:null,VS:null,VT:null,R_:null,Init:function(aArg){this.Ba(this.
TK);A.pe([this,this.DM],this);},W8:function(H){A._GetAutoObject(A.Device.Device).
Cj(1);},_Init:function(aArg){C.Hh._Init.call(this,aArg);C.Pv._Init.call(this.TK={
I:this},0);C.Pv._Init.call(this.Yz={I:this},0);C.Pv._Init.call(this.VS={I:this},
0);C.Abc._Init.call(this.VT={I:this},0);C.TI._Init.call(this.R_={I:this},0);this.
__proto__=C.ALT;var B;this.Dp(C.AM9);this.TK.G(KL);this.TK.Aj(true);this.TK.U(A.
aaR(A.acf.AAX));this.TK.Bf(false);this.TK.Pz(94);this.Yz.G(Q2);this.Yz.Aj(true);
this.Yz.U(A.acf.Info);this.Yz.Bf(true);this.Yz.Pz(93);this.VS.G(WE);this.VS.Aj(true
);this.VS.U(A.aaR(A.acf.AET));this.VS.Bf(false);this.VS.Pz(73);this.VT.G(Aky);this.
VT.Aj(true);this.VT.U(A.aaR(A.acf.TempMeasurement));this.VT.Bf(true);this.VT.Pz(
68);this.R_.G(AnD);this.R_.Aj(true);this.R_.U(A.aaR(A.acf.ABh));this.R_.Bf(false
);this.J(this.TK,0);this.J(this.Yz,0);this.J(this.VS,0);this.J(this.VT,0);this.J(
this.R_,0);this.N.Cf=[this,this.W8];this.N.Cm(A.aaL(A.ach.AB6));this.TK.AQ=[B=this.
TK,B.PA];this.Yz.AQ=[B=this.Yz,B.PA];this.VS.AQ=[B=this.VS,B.PA];this.VT.AQ=[B=this.
VT,B.PA];this.R_.AQ=null;this.R_.AgD([B=this.R_,B.Asj]);this.R_.GB([this,this.Ea
,this.G_]);this.R_.AQT([B=A._GetAutoObject(A.Device.Device),B.Aqx,B.Ash]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Hh;this.TK._Done();this.Yz._Done();this.
VS._Done();this.VT._Done();this.R_._Done();C.Hh._Done.call(this);},_ReInit:function(
){C.Hh._ReInit.call(this);this.TK._ReInit();this.Yz._ReInit();this.VS._ReInit();
this.VT._ReInit();this.R_._ReInit();this.TK.U(A.aaR(A.acf.AAX));this.VS.U(A.aaR(
A.acf.AET));this.VT.U(A.aaR(A.acf.TempMeasurement));this.R_.U(A.aaR(A.acf.ABh));
},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.TK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Yz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.VT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.R_
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"};C.
ALU={TJ:null,Aba:null,VP:null,Init:function(aArg){this.Ba(this.TJ);},Bvn:function(
H){var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===
7))A._GetAutoObject(A.Device.Device).UpdateFirmware();},Bhf:function(H){if(A._GetAutoObject(
A.Device.Device).Aak<=20)A._GetAutoObject(A.Device.Device).A6(76,true,BoK,0,null
);else A._GetAutoObject(A.Device.Device).A6(39,true,A.jV,0,[this,this.Bvn]);},_Init:
function(aArg){C.Hh._Init.call(this,aArg);C.Pv._Init.call(this.TJ={I:this},0);C.
Cd._Init.call(this.Aba={I:this},0);C.Abc._Init.call(this.VP={I:this},0);this.__proto__=
C.ALU;var B;this.Dp(C.AM_);this.TJ.G(KL);this.TJ.Aj(true);this.TJ.U(A.aaR(A.acf.
A3c));this.TJ.Bf(false);this.TJ.Pz(74);this.Aba.G(Q2);this.Aba.Aj(true);this.Aba.
U(A.aaR(A.acf.A3_));this.Aba.Bf(true);this.VP.G(WE);this.VP.Aj(true);this.VP.U(A.
aaR(A.acf.RangeTest));this.VP.Bf(false);this.VP.Pz(15);this.J(this.TJ,0);this.J(
this.Aba,0);this.J(this.VP,0);this.TJ.AQ=[B=this.TJ,B.PA];this.Aba.AQ=[this,this.
Bhf];this.VP.AQ=[B=this.VP,B.PA];this.Init(aArg);},_Done:function(){this.__proto__=
C.Hh;this.TJ._Done();this.Aba._Done();this.VP._Done();C.Hh._Done.call(this);},_ReInit:
function(){C.Hh._ReInit.call(this);this.TJ._ReInit();this.Aba._ReInit();this.VP.
_ReInit();this.TJ.U(A.aaR(A.acf.A3c));this.Aba.U(A.aaR(A.acf.A3_));this.VP.U(A.aaR(
A.acf.RangeTest));},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.TJ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aba)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.VP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceServiceScreen"
};C.AM_={_Init:function(aArg){C.Oo._Init.call(this,aArg);this.__proto__=C.AM_;this.
Text.Q(A.aaR(A.acf.AET));},_ReInit:function(){C.Oo._ReInit.call(this);this.Text.
Q(A.aaR(A.acf.AET));},_className:"Application::HeaderDeviceServiceMenu"};C.Pv={Agi:
null,Ai:function(Ae){C.Abc.Ai.call(this,Ae);this.Agi.L(this.V.AP);},_Init:function(
aArg){C.Abc._Init.call(this,aArg);A.acg.Am._Init.call(this.Agi={I:this},0);this.
__proto__=C.Pv;this.Agi.AV(0x38);this.Agi.G(BoL);this.J(this.Agi,0);this.V.CC(A.
aaL(A.fl.By));this.Agi.Ax(A.aaL(A.ach.AiN));},_Done:function(){this.__proto__=C.
Abc;this.Agi._Done();C.Abc._Done.call(this);},_ReInit:function(){C.Abc._ReInit.call(
this);this.Agi._ReInit();this.V.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Abc.
_Mark.call(this,D);if((B=this.Agi)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemSubMenu"
};C.ALQ={Ago:null,Agu:null,Agw:null,Ags:null,Ajt:null,Agr:null,Agq:null,Agp:null
,Ajr:null,Agn:null,Ajs:null,Agv:null,Aju:null,Agt:null,Ajv:null,Init:function(aArg
){this.Ba(this.Ago);},_Init:function(aArg){C.Hh._Init.call(this,aArg);C.Pu._Init.
call(this.Ago={I:this},0);C.Pu._Init.call(this.Agu={I:this},0);C.Pu._Init.call(this.
Agw={I:this},0);C.Pu._Init.call(this.Ags={I:this},0);C.Pu._Init.call(this.Ajt={I:
this},0);C.Pu._Init.call(this.Agr={I:this},0);C.Pu._Init.call(this.Agq={I:this},
0);C.Pu._Init.call(this.Agp={I:this},0);C.Pu._Init.call(this.Ajr={I:this},0);C.Pu.
_Init.call(this.Agn={I:this},0);C.Pu._Init.call(this.Ajs={I:this},0);C.Pu._Init.
call(this.Agv={I:this},0);C.Pu._Init.call(this.Aju={I:this},0);C.Pu._Init.call(this.
Agt={I:this},0);C.Pu._Init.call(this.Ajv={I:this},0);this.__proto__=C.ALQ;this.Dp(
C.AM6);this.Ago.G(AGS);this.Ago.Aj(true);this.Ago.Se(1);this.Agu.G(AXD);this.Agu.
Aj(true);this.Agu.Bf(true);this.Agu.Se(2);this.Agw.G(Asd);this.Agw.Aj(true);this.
Agw.Bf(false);this.Agw.Se(3);this.Ags.G(AnL);this.Ags.Aj(true);this.Ags.Bf(true);
this.Ags.Se(4);this.Ajt.G(Aw7);this.Ajt.Aj(true);this.Ajt.Se(5);this.Agr.G(BoM);
this.Agr.Aj(true);this.Agr.Bf(true);this.Agr.Se(6);this.Agq.G(Ahi);this.Agq.Aj(true
);this.Agq.Bf(false);this.Agq.Se(7);this.Agp.G(Axd);this.Agp.Aj(true);this.Agp.Bf(
true);this.Agp.Se(8);this.Ajr.G(AXE);this.Ajr.Aj(true);this.Ajr.Se(9);this.Agn.G(
AnM);this.Agn.Aj(true);this.Agn.Bf(true);this.Agn.Se(10);this.Ajs.G(BoN);this.Ajs.
Aj(true);this.Ajs.Se(11);this.Agv.G(BoO);this.Agv.Aj(true);this.Agv.Bf(true);this.
Agv.Se(12);this.Aju.G(BoP);this.Aju.Aj(true);this.Aju.Se(13);this.Agt.G(BoQ);this.
Agt.Aj(true);this.Agt.Bf(true);this.Agt.Se(14);this.Ajv.G(BoR);this.Ajv.Aj(true);
this.Ajv.Se(15);this.J(this.Ago,0);this.J(this.Agu,0);this.J(this.Agw,0);this.J(
this.Ags,0);this.J(this.Ajt,0);this.J(this.Agr,0);this.J(this.Agq,0);this.J(this.
Agp,0);this.J(this.Ajr,0);this.J(this.Agn,0);this.J(this.Ajs,0);this.J(this.Agv,
0);this.J(this.Aju,0);this.J(this.Agt,0);this.J(this.Ajv,0);this.Init(aArg);},_Done:
function(){this.__proto__=C.Hh;this.Ago._Done();this.Agu._Done();this.Agw._Done(
);this.Ags._Done();this.Ajt._Done();this.Agr._Done();this.Agq._Done();this.Agp._Done(
);this.Ajr._Done();this.Agn._Done();this.Ajs._Done();this.Agv._Done();this.Aju._Done(
);this.Agt._Done();this.Ajv._Done();C.Hh._Done.call(this);},_ReInit:function(){C.
Hh._ReInit.call(this);this.Ago._ReInit();this.Agu._ReInit();this.Agw._ReInit();this.
Ags._ReInit();this.Ajt._ReInit();this.Agr._ReInit();this.Agq._ReInit();this.Agp.
_ReInit();this.Ajr._ReInit();this.Agn._ReInit();this.Ajs._ReInit();this.Agv._ReInit(
);this.Aju._ReInit();this.Agt._ReInit();this.Ajv._ReInit();},_Mark:function(D){var
B;C.Hh._Mark.call(this,D);if((B=this.Ago)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Agu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agw)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ags)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ajt)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Agr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Agp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ajr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agn)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ajs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agv)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aju)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agt)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ajv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceCheckScreen"};C.AM6={_Init:function(aArg){C.Oo._Init.call(this
,aArg);this.__proto__=C.AM6;this.Text.Q(A.aaR(A.acf.A3E));},_ReInit:function(){C.
Oo._ReInit.call(this);this.Text.Q(A.aaR(A.acf.A3E));},_className:"Application::HeaderDeviceCheck"
};C.Pu={DeviceComponentToString:null,J2:null,AtX:0,A$u:false,CT:function(){this.
V.Q(this.DeviceComponentToString.B0(this.AtX));},Bg:function(aSize){var B;C.Cd.Bg.
call(this,aSize);this.J2.G(A.abM(this.J2.M,aSize[0]-((B=this.J2.M)[2]-B[0])));this.
V.G(A.abN(this.V.M,this.J2.M[0]));},Ai:function(Ae){C.Cd.Ai.call(this,Ae);this.J2.
ADd(this.V.AP);if(this.A$u)this.J2.Avx(A.jb.EX);else this.J2.Avx(A.jb.FU);},Se:function(
E){if(this.AtX===E)return;this.AtX=E;this.U(this.DeviceComponentToString.B0(E));
this.En(this);},En:function(H){this.A$u=A._GetAutoObject(A.Device.Device).AHV(this.
AtX);this.An();},_Init:function(aArg){C.Cd._Init.call(this,aArg);A.Device.DeviceComponentToString.
_Init.call(this.DeviceComponentToString={I:this},0);C.J2._Init.call(this.J2={I:this
},0);this.__proto__=C.Pu;this.V.G(BoS);this.V.A2(0x11);this.J2.G(BoT);this.J(this.
J2,0);},_Done:function(){this.__proto__=C.Cd;this.DeviceComponentToString._Done(
);this.J2._Done();C.Cd._Done.call(this);},_ReInit:function(){C.Cd._ReInit.call(this
);this.DeviceComponentToString._ReInit();this.J2._ReInit();this.CT();},_Mark:function(
D){var B;C.Cd._Mark.call(this,D);if((B=this.DeviceComponentToString)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.J2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.RR={Au:null,DN:null,Z:null,Init:function(aArg){A.pe([this,this.Azd],this);},
Ba:function(E){C.AC.Ba.call(this,E);this.AJy(this);this.DM(this);},CI:function(H
){A.pe([this,this.Ut],this);},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1))[
3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},Azd:function(
H){var Bc=A._GetAutoObject(A.Device.Helper).A4k();A._GetAutoObject(A.Device.Device
).Aq.Bm(Bc);A.pe([this,this.Ut],this);},Ed:function(H){A._GetAutoObject(C.AZ).Fk(
);},A07:function(H){A._GetAutoObject(C.AZ).BZ(95);},DM:function(H){this.N.CS(A.aaL(
A.ach.ET));this.N.Cu=[this,this.Ed];this.N.Cm(A.aaL(A.ach.AB5));if(!A._GetAutoObject(
A.Device.Device).Aq.Filter||A._GetAutoObject(A.Device.Helper).Aqe(A._GetAutoObject(
A.Device.Device).Aq.Filter)){this.N.Cf=null;this.N.IW.Dz(100);}else{this.N.Cf=[this
,this.Azd];this.N.IW.Dz(255);}this.N.C7(A.aaL(A.ach.AdR));this.N.Ci=[this,this.A07
];},Ut:function(s){this.DM(s);},AJy:function(H){A.ab5("%s",BoU);},BCq:function(s
){this.AJy(s);},G3:function(H){A.pe([this,this.E7],this);},_Init:function(aArg){
C.AC._Init.call(this,aArg);C.Au._Init.call(this.Au={I:this},0);A.acg.AI._Init.call(
this.DN={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);this.__proto__=C.RR;this.
N.Ar(false);this.N.Y(true);this.Dp(C.AaL);this.Au.G(IJ);this.DN.AV(0x3F);this.DN.
G(E2);this.DN.L(A.jb.CM);this.Z.G(Li);this.Z.J$(9);this.J(this.Au,0);this.J(this.
DN,0);this.J(this.Z,0);this.Z.Eh=[this,this.G3];this.Init(aArg);},_Done:function(
){this.__proto__=C.AC;this.Au._Done();this.DN._Done();this.Z._Done();C.AC._Done.
call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.Au._ReInit();this.DN.
_ReInit();this.Z._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DN)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuScreen"
};C.AMf={XJ:null,XI:null,Xv:null,Th:null,DM:function(H){C.RR.DM.call(this,H);if(
this.AY===this.Th){this.N.Cm(null);this.N.Cf=null;this.N.C7(null);this.N.Ci=null;
}},AJy:function(H){if(this.AY===this.Th)this.Dp(C.ANe);else this.Dp(C.AaL);},BvG:
function(){switch(A._GetAutoObject(A.Device.Device).TemperatureUnit){case 0:return A.
aaL(A.ach.AOf);case 1:return A.aaL(A.ach.AOg);default:A.ab5("%s%s",BoV,A._GetAutoObject(
A.Device.Device).TemperatureUnit.toFixed());}return null;},BvH:function(){switch(
A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AOh);case 1:
return A.aaL(A.ach.AOi);default:A.ab5("%s%s",AGY,A._GetAutoObject(A.Device.Device
).MassUnit.toFixed());}return null;},H8:function(H){var Cp=(C.Fa.isPrototypeOf(H
)?H:null);if(!Cp)return;if(Cp===this.XJ)A._GetAutoObject(C.AZ).BZ(75);else if(Cp===
this.XI)A._GetAutoObject(C.AZ).BZ(64);else if(Cp===this.Xv)A._GetAutoObject(C.AZ
).BZ(66);else if(Cp===this.Th)A._GetAutoObject(C.AZ).BZ(67);},_Init:function(aArg
){C.RR._Init.call(this,aArg);C.Fa._Init.call(this.XJ={I:this},0);C.Fa._Init.call(
this.XI={I:this},0);C.Fa._Init.call(this.Xv={I:this},0);C.Fa._Init.call(this.Th={
I:this},0);this.__proto__=C.AMf;this.XJ.G(PO);this.XJ.Aj(true);this.XJ.U(A.aaR(A.
acf.AeM));this.XI.G(Km);this.XI.Aj(true);this.XI.U(A.aaR(A.acf.Temperature));this.
Xv.G(BoW);this.Xv.Aj(true);this.Xv.U(A.aaR(A.acf.Rating));this.Th.G(BoX);this.Th.
Aj(true);this.Th.U(A.aaR(A.acf.A5n));this.J(this.XJ,0);this.J(this.XI,0);this.J(
this.Xv,0);this.J(this.Th,0);this.XJ.AQ=[this,this.H8];this.XJ.Dy(this.BvH());this.
XI.AQ=[this,this.H8];this.XI.Dy(this.BvG());this.Xv.AQ=[this,this.H8];this.Xv.Dy(
A.aaL(A.ach.AOd));this.Th.AQ=[this,this.H8];this.Th.Dy(A.aaL(A.ach.AOe));},_Done:
function(){this.__proto__=C.RR;this.XJ._Done();this.XI._Done();this.Xv._Done();this.
Th._Done();C.RR._Done.call(this);},_ReInit:function(){C.RR._ReInit.call(this);this.
XJ._ReInit();this.XI._ReInit();this.Xv._ReInit();this.Th._ReInit();this.XJ.U(A.aaR(
A.acf.AeM));this.XI.U(A.aaR(A.acf.Temperature));this.Xv.U(A.aaR(A.acf.Rating));this.
Th.U(A.aaR(A.acf.A5n));},_Mark:function(D){var B;C.RR._Mark.call(this,D);if((B=this.
XJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Xv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Th)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuMainScreen"};C.AMg={U$:null,Xx:null,
XK:null,AJy:function(H){this.Dp(C.Aur);},BvK:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AOT);case 1:return A.aaL(A.
ach.AOU);default:A.ab5("%s%s",AGY,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},H8:function(H){var Cp=(C.Fa.isPrototypeOf(H)?H:null);if(!Cp)return;
if(Cp===this.U$)A._GetAutoObject(C.AZ).BZ(77);else if(Cp===this.XK)A._GetAutoObject(
C.AZ).BZ(65);else if(Cp===this.Xx)A._GetAutoObject(C.AZ).BZ(76);},BvJ:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AN3
);case 1:return A.aaL(A.ach.AN4);default:A.ab5("%s%s",AGY,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},BvL:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.aaL(A.ach.AOV);case 1:return A.aaL(A.
ach.AOW);default:A.ab5("%s%s",AGY,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},_Init:function(aArg){C.RR._Init.call(this,aArg);C.Fa._Init.call(
this.U$={I:this},0);C.Fa._Init.call(this.Xx={I:this},0);C.Fa._Init.call(this.XK={
I:this},0);this.__proto__=C.AMg;this.U$.G(PO);this.U$.Aj(true);this.U$.U(A.aaR(A.
acf.A9c));this.Xx.G(AXG);this.Xx.Aj(true);this.Xx.U(A.aaR(A.acf.A24));this.XK.G(
NV);this.XK.Aj(true);this.XK.U(A.aaR(A.acf.A9f));this.J(this.U$,0);this.J(this.Xx
,0);this.J(this.XK,0);this.U$.AQ=[this,this.H8];this.U$.Dy(this.BvK());this.U$.Abs(
A.aaL(A.ach.ND));this.Xx.AQ=[this,this.H8];this.Xx.Dy(this.BvJ());this.XK.AQ=[this
,this.H8];this.XK.Dy(this.BvL());},_Done:function(){this.__proto__=C.RR;this.U$.
_Done();this.Xx._Done();this.XK._Done();C.RR._Done.call(this);},_ReInit:function(
){C.RR._ReInit.call(this);this.U$._ReInit();this.Xx._ReInit();this.XK._ReInit();
this.U$.U(A.aaR(A.acf.A9c));this.Xx.U(A.aaR(A.acf.A24));this.XK.U(A.aaR(A.acf.A9f
));},_Mark:function(D){var B;C.RR._Mark.call(this,D);if((B=this.U$)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Xx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XK)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"};
C.AMj={BaU:function(){return(A._GetAutoObject(A.Device.Helper).X.LastBodyWeight>
0)&&(A._GetAutoObject(A.Device.Helper).X.TimestampLastWeighing>A._GetAutoObject(
A.Device.Helper).Y$(0));},_Init:function(aArg){C.ApP._Init.call(this,aArg);this.
__proto__=C.AMj;this.Aei(A.aaR(A.acf.A5K));},_ReInit:function(){C.ApP._ReInit.call(
this);this.Aei(A.aaR(A.acf.A5K));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AMc={AhA:null,AaO:null,Ue:null,Aad:null,O4:null,AiK:null,AfN:null,AiL:null,AfO:
null,Au:null,Z8:null,Acw:0,AoH:0,Dr:function(H){switch(this.Cl.CH){case 4:{if(this.
IT.Fc())return;var Qb=this.Z.Bp[1]+80;this.Z.Ga([this.Z.Bp[0],Qb]);this.Z.UY(null
,null);}break;case 5:{if(this.IT.Fc())return;var Qb=this.Z.Bp[1]-80;this.Z.Ga([this.
Z.Bp[0],Qb]);this.Z.UY(null,null);}break;default:C.Fl.Dr.call(this,H);}},Api:function(
LQ,Ach){if(!LQ)return;var Fi=A._NewObject(A.Device.Filter,0);var HN=A._NewObject(
A.Device.Int32FilterCriterion,0);HN.Initialize(1,0,Ach,true);Fi.CZ(HN);var Acs=A.
_NewObject(A.Device.Int32FilterCriterion,0);Acs.Initialize(8,2,0,true);Fi.CZ(Acs
);LQ.Bm(Fi);},AhO:function(H){if(A._GetAutoObject(A.Device.Helper).X.Aqf()){this.
AhA.Oe(A._GetAutoObject(A.Device.Helper).X.FirstBodyWeight);var AxU=this.BvE(A._GetAutoObject(
A.Device.Helper).X.FirstBodyWeight,A._GetAutoObject(A.Device.Device).MassUnit);this.
Z8.Set(AxU,this.Z8.Get(AxU)+1);if(A._GetAutoObject(A.Device.Helper).X.AnimalType===
1){this.Acw++;this.AoH=A._GetAutoObject(A.Device.Helper).X.VisualId;}}C.Fl.AhO.call(
this,H);},ZM:function(H){if(this.Acw>1)A._GetAutoObject(A.Device.Device).A6(56,true
,this.Acw.toFixed(),0,null);if(this.Acw===1)A._GetAutoObject(A.Device.Device).A6(
53,true,this.AoH.toFixed(),0,null);if(this.AhA.AR>0)this.Ue.U(((((((A._GetAutoObject(
A.Device.Converter).AwE(this.AhA.Ajb()|0,1)+Axh)+A._GetAutoObject(A.Device.Converter
).AwE(this.AhA.ApY()|0,1))+CJ)+A._GetAutoObject(A.acj.DI).AcI())+Axi)+this.AhA.AR.
toFixed())+OM);else this.Ue.U(A.aaR(A.acf.Unknown));var Rm=this.Z8.Ame();var P;for(
P=0;P<this.Z8.Mq;P++){var A_=this.BvZ(P);if(!!A_){var CL=this.Z8.Get(P);A_.BiU(CL
);if(!Rm)A_.A7H(0);else A_.A7H(Math.round((CL*100)/Rm)|0);A_.Bku(this.BvY(P,A._GetAutoObject(
A.Device.Device).MassUnit));}}var AcB=false;if(this.AhA.AR>0)AcB=true;this.IT.Y(
!AcB);C.Fl.ZM.call(this,H);},AcJ:function(H){this.AhA.XL();this.Z8.G$();this.Acw=
0;this.AoH=0;C.Fl.AcJ.call(this,H);},BvZ:function(aIndex){var A_=null;switch(aIndex
){case 0:A_=this.O4;break;case 1:A_=this.AiK;break;case 2:A_=this.AfN;break;case
3:A_=this.AiL;break;case 4:A_=this.AfO;break;default:throw new Error(Axj+aIndex.
toFixed());}return A_;},BvY:function(aIndex,AnX){var B;var S3=A.jV;switch(AnX){case
0:{switch(aIndex){case 0:S3=BoY;break;case 1:S3=BoZ;break;case 2:S3=Bo0;break;case
3:S3=Bo1;break;case 4:S3=Bo2;break;default:throw new Error(Axj+aIndex.toFixed());
}S3=S3+(CJ+A.aaR(A.acf.AIG));}break;case 1:{switch(aIndex){case 0:S3=Bo3;break;case
1:S3=Bo4;break;case 2:S3=Bo5;break;case 3:S3=Bo6;break;case 4:S3=Bo7;break;default:
throw new Error(Axj+aIndex.toFixed());}S3=S3+(CJ+A.aaR(A.acf.A47));}break;default:
A.ab5("%s%e",A9K,AnX);}return S3;},BvF:function(AHi,AnX){var Act=0;switch(AnX){case
0:switch(AHi){case 0:Act=35000;break;case 1:Act=40000;break;case 2:Act=45000;break;
case 3:Act=50000;break;case 4:Act=2147483647;break;default:throw new Error(Axj+AHi.
toFixed());}break;case 1:switch(AHi){case 0:Act=36287;break;case 1:Act=40823;break;
case 2:Act=45359;break;case 3:Act=49895;break;case 4:Act=2147483647;break;default:
throw new Error(Axj+AHi.toFixed());}break;default:A.ab5("%s%e",A9K,AnX);}return Act;
},BvE:function(A1,AnX){var AxU=0;var P;for(P=0;P<this.Z8.Mq;P++)if(A1<this.BvF(P
,AnX)){AxU=P;break;}return AxU;},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1
))[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},G3:function(
H){A.pe([this,this.E7],this);},_Init:function(aArg){C.Fl._Init.call(this,aArg);C.
AfL._Init.call(this.AaO={I:this},0);C.Is._Init.call(this.Ue={I:this},0);C.Aad._Init.
call(this.Aad={I:this},0);C.O4._Init.call(this.O4={I:this},0);C.O4._Init.call(this.
AiK={I:this},0);C.O4._Init.call(this.AfN={I:this},0);C.O4._Init.call(this.AiL={I:
this},0);C.O4._Init.call(this.AfO={I:this},0);C.Au._Init.call(this.Au={I:this},0
);A.Device.Int32ArrayWrapper._Init.call(this.Z8={I:this},0);this.__proto__=C.AMc;
this.Dp(C.Aur);this.AjR(A.aaR(A.acf.A3Z));this.Aei(A.aaR(A.acf.A5C));this.AaO.G(
AGS);this.AaO.Aj(true);this.AaO.U(A.aaR(A.acf.A2I));this.AaO.Bf(false);this.AaO.
Ka(5);this.Ue.G(AXD);this.Ue.Aj(true);this.Ue.U(A.jV);this.Ue.Bf(true);this.Ue.Ka(
5);this.Aad.G(Asd);this.Aad.Aj(true);this.O4.G(AnL);this.O4.Aj(true);this.O4.Bf(
true);this.AiK.G(Ahi);this.AiK.Aj(true);this.AfN.G(Axd);this.AfN.Aj(true);this.AfN.
Bf(true);this.AiL.G(AXE);this.AiL.Aj(true);this.AfO.G(AnM);this.AfO.Aj(true);this.
AfO.Bf(true);this.Au.G(IJ);this.Z8.YU(5);this.J(this.AaO,-1);this.J(this.Ue,-1);
this.J(this.Aad,-1);this.J(this.O4,-1);this.J(this.AiK,-1);this.J(this.AfN,-1);this.
J(this.AiL,-1);this.J(this.AfO,-1);this.J(this.Au,-1);this.Z.Eh=[this,this.G3];this.
AhA=A._NewObject(C.AuN,0);this.Ue.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Fl;this.AaO._Done();this.Ue._Done();this.Aad._Done();this.O4._Done();this.AiK.
_Done();this.AfN._Done();this.AiL._Done();this.AfO._Done();this.Au._Done();this.
Z8._Done();C.Fl._Done.call(this);},_ReInit:function(){C.Fl._ReInit.call(this);this.
AaO._ReInit();this.Ue._ReInit();this.Aad._ReInit();this.O4._ReInit();this.AiK._ReInit(
);this.AfN._ReInit();this.AiL._ReInit();this.AfO._ReInit();this.Au._ReInit();this.
Z8._ReInit();this.AjR(A.aaR(A.acf.A3Z));this.Aei(A.aaR(A.acf.A5C));this.AaO.U(A.
aaR(A.acf.A2I));this.Ue.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fl._Mark.call(
this,D);if((B=this.AhA)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AaO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ue)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aad)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O4)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AiK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AiL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AfO)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Z8)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationBirthWeightsScreen"
};C.Aad={H0:null,Gc:null,Bg:function(aSize){C.Is.Bg.call(this,aSize);this.H0.G([((
aSize[0]*57)/100)|0,0,((aSize[0]*80)/100)|0,aSize[1]]);this.Gc.G([this.H0.M[2],0
,aSize[0],aSize[1]]);},Ai:function(Ae){C.Is.Ai.call(this,Ae);this.H0.L(this.V.AP
);this.Gc.L(this.V.AP);},_Init:function(aArg){C.Is._Init.call(this,aArg);A.acg.Text.
_Init.call(this.H0={I:this},0);A.acg.Text._Init.call(this.Gc={I:this},0);this.__proto__=
C.Aad;this.U(A.aaR(A.acf.AFw));this.H0.G(Bo8);this.H0.KF(true);this.H0.Q(A.aaR(A.
acf.AtQ));this.H0.L(A.jb.Text);this.Gc.G(A9L);this.Gc.Q(AeY);this.Gc.L(A.jb.Text
);this.J(this.H0,0);this.J(this.Gc,0);this.V.S(A.aaL(A.fl.H$));this.H0.S(A.aaL(A.
fl.H$));this.Gc.S(A.aaL(A.fl.J6));},_Done:function(){this.__proto__=C.Is;this.H0.
_Done();this.Gc._Done();C.Is._Done.call(this);},_ReInit:function(){C.Is._ReInit.
call(this);this.H0._ReInit();this.Gc._ReInit();this.U(A.aaR(A.acf.AFw));this.H0.
Q(A.aaR(A.acf.AtQ));this.V.S(A.aaL(A.fl.H$));this.H0.S(A.aaL(A.fl.H$));this.Gc.S(
A.aaL(A.fl.J6));},_Mark:function(D){var B;C.Is._Mark.call(this,D);if((B=this.H0).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemWeightClassHeading"};C.O4={AN:null,A8:null,PG:null,H0:
null,Gc:null,A9e:A.jV,AtQ:0,A8b:0,Bg:function(aSize){C.Is.Bg.call(this,aSize);this.
PG.G([0,0,((aSize[0]*57)/100)|0,aSize[1]]);this.AN.G([this.PG.M[2]-1,0,this.PG.M[
2]+1,aSize[1]]);this.H0.G([this.PG.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.
A8.G([this.H0.M[2]-1,0,this.H0.M[2]+1,aSize[1]]);this.Gc.G([this.H0.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.Is.Ai.call(this,Ae);this.PG.L(this.V.AP);this.
H0.L(this.V.AP);this.Gc.L(this.V.AP);},Bku:function(E){if(this.A9e===E)return;this.
A9e=E;this.PG.Q(E);},BiU:function(E){if(this.AtQ===E)return;this.AtQ=E;this.H0.Q(
E.toFixed());},A7H:function(E){if(this.A8b===E)return;this.A8b=E;this.Gc.Q(E.toFixed(
)+AwO);},_Init:function(aArg){C.Is._Init.call(this,aArg);A.acg.AI._Init.call(this.
AN={I:this},0);A.acg.AI._Init.call(this.A8={I:this},0);A.acg.Text._Init.call(this.
PG={I:this},0);A.acg.Text._Init.call(this.H0={I:this},0);A.acg.Text._Init.call(this.
Gc={I:this},0);this.__proto__=C.O4;this.AN.L(A.jb.Bb);this.A8.L(A.jb.Bb);this.PG.
G(Bo9);this.PG.Q(A.aaR(A.acf.AFw));this.PG.L(A.jb.Text);this.H0.Q(ZA);this.H0.L(
A.jb.Text);this.Gc.Q(Bo_);this.Gc.L(A.jb.Text);this.J(this.AN,0);this.J(this.A8,
0);this.J(this.PG,0);this.J(this.H0,0);this.J(this.Gc,0);this.PG.S(A.aaL(A.fl.Ah
));this.H0.S(A.aaL(A.fl.Ah));this.Gc.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Is;this.AN._Done();this.A8._Done();this.PG._Done();this.H0._Done();this.Gc._Done(
);C.Is._Done.call(this);},_ReInit:function(){C.Is._ReInit.call(this);this.AN._ReInit(
);this.A8._ReInit();this.PG._ReInit();this.H0._ReInit();this.Gc._ReInit();this.PG.
Q(A.aaR(A.acf.AFw));this.PG.S(A.aaL(A.fl.Ah));this.H0.S(A.aaL(A.fl.Ah));this.Gc.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Is._Mark.call(this,D);if((B=this.AN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.H0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassRow"
};C.AKF={AI6:function(){var Bc=A._GetAutoObject(A.Device.Helper).MT();A._GetAutoObject(
A.Device.Device).Aq.Bm(Bc);},_Init:function(aArg){C.AlO._Init.call(this,aArg);this.
__proto__=C.AKF;},_className:"Application::AnimalSearchUnfilteredOverlay"};C.APs={
RB:null,RH:null,RA:null,RE:null,O6:null,RD:null,AJw:function(H){A.pe([this,this.
ByC],this);A.pe([this,this.Byr],this);A.pe([this,this.Byn],this);A.pe([this,this.
A1U],this);A.pe([this,this.Byu],this);A.pe([this,this.Bys],this);},H8:function(H
){var Cp=(C.Qy.isPrototypeOf(H)?H:null);if(!Cp)return;if(Cp===this.RH)A._GetAutoObject(
C.AZ).BZ(20);else if(Cp===this.O6)A._GetAutoObject(C.AZ).BZ(14);else if(Cp===this.
RB)A._GetAutoObject(C.AZ).BZ(12);else if(Cp===this.RE)A._GetAutoObject(C.AZ).BZ(
47);else if(Cp===this.RA)A._GetAutoObject(C.AZ).BZ(58);else if(Cp===this.RD)A._GetAutoObject(
C.AZ).BZ(69);},Byr:function(H){var Bc=A._GetAutoObject(A.Device.Helper).MT();var
Ax1=A._NewObject(A.Device.BoolFilterCriterion,0);Ax1.Initialize(9,0,true,true);Bc.
CZ(Ax1);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.O6.YS(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},ByC:function(H){var Bc=A._GetAutoObject(A.
Device.Helper).MT();var Az4=A._NewObject(A.Device.BoolFilterCriterion,0);Az4.Initialize(
12,0,true,true);Bc.CZ(Az4);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RH.YS(
A._GetAutoObject(A.Device.Device).Aq.Ch().toFixed());},Byn:function(H){var Bc=A.
_GetAutoObject(A.Device.Helper).MT();var AxI=A._NewObject(A.Device.BoolFilterCriterion
,0);AxI.Initialize(8,0,true,true);Bc.CZ(AxI);A._GetAutoObject(A.Device.Device).Aq.
Bm(Bc);this.RB.YS(A._GetAutoObject(A.Device.Device).Aq.Ch().toFixed());},A1U:function(
H){var Bc=A._GetAutoObject(A.Device.Helper).A4g(A._GetAutoObject(A.Device.Device
).Az_);A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RA.YS(A._GetAutoObject(A.
Device.Device).Aq.Ch().toFixed());},Byu:function(H){var Bc=A._GetAutoObject(A.Device.
Helper).A4n();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RE.YS(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},Bys:function(H){var Bc=A._GetAutoObject(A.
Device.Helper).ABo();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RD.YS(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},_Init:function(aArg){C.TE._Init.call(this,
aArg);C.Qy._Init.call(this.RB={I:this},0);C.Qy._Init.call(this.RH={I:this},0);C.
Qy._Init.call(this.RA={I:this},0);C.Qy._Init.call(this.RE={I:this},0);C.Qy._Init.
call(this.O6={I:this},0);C.Qy._Init.call(this.RD={I:this},0);this.__proto__=C.APs;
this.RB.G(PO);this.RB.Aj(true);this.RB.U(A.aaR(A.acf.Alarm));this.RB.Abp(true);this.
RH.G(AXG);this.RH.Aj(true);this.RH.U(A.aaR(A.acf.Ara));this.RH.Abp(true);this.RA.
G(NV);this.RA.Aj(true);this.RA.U(A.aaR(A.acf.ActionList));this.RA.Abp(true);this.
RE.G(PP);this.RE.Aj(true);this.RE.U(A.aaR(A.acf.AMI));this.RE.Abp(true);this.O6.
G(SF);this.O6.Ar(false);this.O6.Aj(false);this.O6.Y(false);this.O6.U(A.aaR(A.acf.
AAK));this.O6.Abp(true);this.RD.G(Uk);this.RD.Aj(true);this.RD.U(A.aaR(A.acf.A3V
));this.RD.Abp(true);this.J(this.RB,0);this.J(this.RH,0);this.J(this.RA,0);this.
J(this.RE,0);this.J(this.O6,0);this.J(this.RD,0);this.RB.AQ=[this,this.Ace];this.
RB.Dy(A.aaL(A.ach.ABV));this.RB.Abs(A.aaL(A.ach.ND));this.RH.AQ=[this,this.Ace];
this.RH.Dy(A.aaL(A.ach.AOS));this.RH.Abs(A.aaL(A.ach.ND));this.RA.AQ=[this,this.
Ace];this.RA.Dy(A.aaL(A.ach.ANO));this.RA.Abs(A.aaL(A.ach.ND));this.RE.AQ=[this,
this.Ace];this.RE.Dy(A.aaL(A.ach.AOk));this.RE.Abs(A.aaL(A.ach.ND));this.O6.AQ=[
this,this.Ace];this.O6.Dy(A.aaL(A.ach.ABV));this.O6.Abs(A.aaL(A.ach.ND));this.RD.
AQ=[this,this.Ace];this.RD.Dy(A.aaL(A.ach.AOa));this.RD.Abs(A.aaL(A.ach.ND));},_Done:
function(){this.__proto__=C.TE;this.RB._Done();this.RH._Done();this.RA._Done();this.
RE._Done();this.O6._Done();this.RD._Done();C.TE._Done.call(this);},_ReInit:function(
){C.TE._ReInit.call(this);this.RB._ReInit();this.RH._ReInit();this.RA._ReInit();
this.RE._ReInit();this.O6._ReInit();this.RD._ReInit();this.RB.U(A.aaR(A.acf.Alarm
));this.RH.U(A.aaR(A.acf.Ara));this.RA.U(A.aaR(A.acf.ActionList));this.RE.U(A.aaR(
A.acf.AMI));this.O6.U(A.aaR(A.acf.AAK));this.RD.U(A.aaR(A.acf.A3V));},_Mark:function(
D){var B;C.TE._Mark.call(this,D);if((B=this.RB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O6)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"
};C.APr={RI:null,U_:null,RF:null,RC:null,RG:null,AJw:function(H){A.pe([this,this.
Byo],this);A.pe([this,this.Byy],this);A.pe([this,this.Byz],this);A.pe([this,this.
ByD],this);A.pe([this,this.ByA],this);},H8:function(H){var Cp=(C.Qy.isPrototypeOf(
H)?H:null);if(!Cp)return;if(Cp===this.U_)A._GetAutoObject(C.AZ).BZ(102);if(Cp===
this.RC)A._GetAutoObject(C.AZ).BZ(85);if(Cp===this.RF)A._GetAutoObject(C.AZ).BZ(
80);if(Cp===this.RG)A._GetAutoObject(C.AZ).BZ(51);if(Cp===this.RI)A._GetAutoObject(
C.AZ).BZ(96);},Byz:function(H){var Bc=A._GetAutoObject(A.Device.Helper).AMT();A.
_GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RG.YS(A._GetAutoObject(A.Device.Device
).Aq.Ch().toFixed());},ByD:function(H){var Bc=A._GetAutoObject(A.Device.Helper).
A4w();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RI.YS(A._GetAutoObject(A.
Device.Device).Aq.Ch().toFixed());},Byy:function(H){var Bc=A._GetAutoObject(A.Device.
Helper).A4r();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RF.YS(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},Byo:function(H){var Bc=A._GetAutoObject(A.
Device.Helper).AMK();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.RC.YS(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},ByA:function(H){var Bc=A._GetAutoObject(A.
Device.Helper).AMV();A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);this.U_.YS(A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());},_Init:function(aArg){C.TE._Init.call(this,
aArg);C.Qy._Init.call(this.RI={I:this},0);C.Qy._Init.call(this.U_={I:this},0);C.
Qy._Init.call(this.RF={I:this},0);C.Qy._Init.call(this.RC={I:this},0);C.Qy._Init.
call(this.RG={I:this},0);this.__proto__=C.APr;this.RI.G(Bo$);this.RI.Aj(true);this.
RI.U(A.aaR(A.acf.A5t));this.RI.Abp(true);this.U_.G(Bpa);this.U_.Aj(true);this.U_.
U(A.aaR(A.acf.AEz));this.RF.G(Bpb);this.RF.Aj(true);this.RF.U(A.aaR(A.acf.A5w));
this.RF.Abp(true);this.RC.G(Bpc);this.RC.Aj(true);this.RC.U(A.aaR(A.acf.AAt));this.
RC.Abp(true);this.RG.G(Bpd);this.RG.Aj(true);this.RG.U(A.aaR(A.acf.A5J));this.RG.
Abp(true);this.J(this.RI,0);this.J(this.U_,0);this.J(this.RF,0);this.J(this.RC,0
);this.J(this.RG,0);this.RI.AQ=[this,this.Ace];this.RI.Dy(A.aaL(A.ach.AOz));this.
RI.Abs(A.aaL(A.ach.ND));this.U_.AQ=[this,this.Ace];this.U_.Dy(A.aaL(A.ach.ACb));
this.RF.AQ=[this,this.Ace];this.RF.Dy(A.aaL(A.ach.AOB));this.RF.Abs(A.aaL(A.ach.
ND));this.RC.AQ=[this,this.Ace];this.RC.Dy(A.aaL(A.ach.AN7));this.RC.Abs(A.aaL(A.
ach.ND));this.RG.AQ=[this,this.Ace];this.RG.Dy(A.aaL(A.ach.AOD));this.RG.Abs(A.aaL(
A.ach.ND));},_Done:function(){this.__proto__=C.TE;this.RI._Done();this.U_._Done(
);this.RF._Done();this.RC._Done();this.RG._Done();C.TE._Done.call(this);},_ReInit:
function(){C.TE._ReInit.call(this);this.RI._ReInit();this.U_._ReInit();this.RF._ReInit(
);this.RC._ReInit();this.RG._ReInit();this.RI.U(A.aaR(A.acf.A5t));this.U_.U(A.aaR(
A.acf.AEz));this.RF.U(A.aaR(A.acf.A5w));this.RC.U(A.aaR(A.acf.AAt));this.RG.U(A.
aaR(A.acf.A5J));},_Mark:function(D){var B;C.TE._Mark.call(this,D);if((B=this.RI).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.U_)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.RF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RC)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.RG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsIdManagementScreen"
};C.AP4={V1:function(H){this.AfJ();this.Ex(A.aaR(A.acf.Arh),[this,this.AqZ],3);this.
Ex(A.aaR(A.acf.Ag4),[this,this.AjX],2);this.Ex(A.aaR(A.acf.O1),[this,this.Abn],9
);this.Ex(A.aaR(A.acf.A4_),[this,this.Bkg],16);this.Ex(A.aaR(A.acf.A49),[this,this.
BjX],12);this.Ex(A.aaR(A.acf.AiB),[this,this.AmP],0);A._GetAutoObject(C.BW).Gq();
A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.Ac9)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Cj(6);},Dr:function(H){},AaJ:function(){return C.AiV;},AaK:function(
){return C.Ajg;},QO:function(H){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(
A.Device.Helper).A4r());},HH:function(H){var F;C.EO.HH.call(this,H);if(this.AjC(
)===false){if(!!this.EI&&((F=this.EI,F[1].call(F[0]))===16)){this.N.Cm(A.aaL(A.ach.
AOL));this.N.Cf=[this,this.A3T];}else{this.N.Cm(A.aaL(A.ach.AOt));this.N.Cf=[this
,this.A3Q];}this.N.FA(A.jV);}this.N.Ow(false);this.N.Ox(false);},Afv:function(){
A._GetAutoObject(C.AZ).BZ(81);},Afu:function(){A._GetAutoObject(C.AZ).BZ(82);},_Init:
function(aArg){C.EO._Init.call(this,aArg);this.__proto__=C.AP4;var B;this.Dp(C.ANs
);this.Do(A.aaR(A.acf.A5A));this.AjW([B=A._GetAutoObject(A.Device.Device),B.A6s,
B.A_v]);},_ReInit:function(){C.EO._ReInit.call(this);this.Do(A.aaR(A.acf.A5A));}
,_className:"Application::NoNaisIdListScreen"};C.AP3={_Init:function(aArg){C.IS.
_Init.call(this,aArg);this.__proto__=C.AP3;this.Mg.Ar(false);this.Mg.Aj(false);this.
Mg.Y(false);},_className:"Application::NoNaisIdListFilterScreen"};C.AP2={_Init:function(
aArg){C.Gs._Init.call(this,aArg);this.__proto__=C.AP2;this.N.BU(A.aaR(A.acf.A2T)
);},_ReInit:function(){C.Gs._ReInit.call(this);this.N.BU(A.aaR(A.acf.A2T));},_className:
"Application::NoNaisIdListActionsScreen"};C.ANs={En:function(H){C.J7.En.call(this
,H);this.Da.Ax(A._GetAutoObject(A.Device.Converter).AfP(10));},_Init:function(aArg
){C.J7._Init.call(this,aArg);this.__proto__=C.ANs;},_className:"Application::HeaderNoNaisIdListFilter"
};C.QL={BcG:false,Dr:function(H){},CI:function(H){C.EO.CI.call(this,H);if(this.BcG&&(
A._GetAutoObject(A.Device.Device).YV>0))A.pe([this,this.AG1],this);},AoY:function(
H){this.A3P(this);},Afv:function(){A._GetAutoObject(C.AZ).BZ(83);},Afu:function(
){A._GetAutoObject(C.AZ).BZ(84);},AQa:function(H){throw new Error(AnN);},A96:function(
s){this.AQa(s);},AQb:function(H){throw new Error(AnN);},A97:function(s){this.AQb(
s);},AQf:function(H){throw new Error(AnN);},AG1:function(s){this.AQf(s);},BbX:function(
H){var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===
7)){this.BcG=true;A._GetAutoObject(C.AZ).BZ(87);}},Alh:function(H){var B;var At=(
A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===5))A.z$([
this,this.Aft],[B=A._GetAutoObject(A.Device.Device),B.Abl,B.Acd],0);},Aft:function(
H){var B;if(A._GetAutoObject(A.Device.Device).Akq===3){A._GetAutoObject(A.Device.
Device).A6(74,false,A.jV,0,[this,this.Alh]);A.z$([this,this.Aft],[B=A._GetAutoObject(
A.Device.Device),B.Abl,B.Acd],0);A.pe([this,this.AG1],this);}},AHU:function(){throw new
Error(AnN);},A5S:function(H){A._GetAutoObject(A.Device.Device).Cj(0);this.A3O(this
);},BkF:function(H){A._GetAutoObject(A.Device.Device).Cj(0);this.Be3(this);},_Init:
function(aArg){C.EO._Init.call(this,aArg);this.__proto__=C.QL;this.Do(A.aaR(A.acf.
A5H));},_ReInit:function(){C.EO._ReInit.call(this);this.Do(A.aaR(A.acf.A5H));},_className:
"Application::RegistrationsListScreen"};C.AR7={_Init:function(aArg){C.IS._Init.call(
this,aArg);this.__proto__=C.AR7;},_className:"Application::RegistrationsListFilterScreen"
};C.AR6={_Init:function(aArg){C.Gs._Init.call(this,aArg);this.__proto__=C.AR6;this.
N.BU(A.aaR(A.acf.A2V));},_ReInit:function(){C.Gs._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A2V));},_className:"Application::RegistrationsListActionsScreen"};C.Ajf={
En:function(H){C.Vq.En.call(this,H);this.Da.Ax(A._GetAutoObject(A.Device.Converter
).AfP(11));},_Init:function(aArg){C.Vq._Init.call(this,aArg);this.__proto__=C.Ajf;
this.Text.G(Bpe);this.Text.Q(A.jV);this.Text.A2(0x12);},_className:"Application::HeaderRegistrationsList"
};C.AAA={Nh:0,AN:null,A8:null,D4:null,Iy:null,St:null,Gj:null,Od:0,KX:0,Init:function(
aArg){},Bg:function(aSize){C.A$.Bg.call(this,aSize);this.Background.G(A.abK(this.
Background.M,aSize));this.V.G(A.abN(this.V.M,((aSize[0]*30)/100)|0));this.AN.G([
this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);this.Iy.G([this.V.M[2],0,this.V.M[2]+(((
aSize[0]*15)/100)|0),aSize[1]]);this.A8.G([this.Iy.M[2]-1,0,this.Iy.M[2]+1,aSize[
1]]);this.St.G([this.Iy.M[2],0,this.Iy.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.
D4.G([this.St.M[2]-1,0,this.St.M[2]+1,aSize[1]]);this.Gj.G([this.St.M[2],0,aSize[
0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this,Ae);this.Iy.L(this.V.AP);this.
Gj.L(this.V.AP);this.St.L(this.V.AP);if(A._GetAutoObject(A.Device.Helper).Ajq(this.
KX)){this.V.S(A.aaL(A.fl.Hi));this.U(A9M);this.St.Q(Q3);}else{this.V.S(A.aaL(A.fl.
Ah));this.U(this.Od.toFixed());this.St.Q(A._GetAutoObject(A.Device.Helper).Vi(this.
Nh,0,5).toFixed());}},B$:function(Ac){if(!this.AW)return;this.Hr=Ac;if(!!this.AW
){this.Od=this.AW.CA(Ac,1);this.KX=this.AW.AMZ(Ac,34);var AsM=this.AW.AMP(Ac,7);
this.Nh=this.AW.LE(Ac,26);var AxO=this.AW.Hy(Ac,4);var Ae8=A._GetAutoObject(A.Device.
Helper).MB(AxO,A._GetAutoObject(A.Device.Helper).Dx());this.Iy.Ax(A._GetAutoObject(
A.Device.Converter).Amb(AsM));if(Ae8<100)this.Gj.Q((Ae8.toFixed()+CJ)+A.aaR(A.acf.
AJ4));else this.Gj.Q(A._GetAutoObject(A.acj.Ky).ABm(AxO,A._GetAutoObject(A.Device.
Helper).Dx(),AGF));this.An();}},_Init:function(aArg){C.A$._Init.call(this,aArg);
A.acg.AI._Init.call(this.AN={I:this},0);A.acg.AI._Init.call(this.A8={I:this},0);
A.acg.AI._Init.call(this.D4={I:this},0);A.acg.Am._Init.call(this.Iy={I:this},0);
A.acg.Text._Init.call(this.St={I:this},0);C.CP._Init.call(this.Gj={I:this},0);this.
__proto__=C.AAA;this.AN.G(AnG);this.AN.L(A.jb.Bb);this.A8.G(AnH);this.A8.L(A.jb.
Bb);this.D4.G(A9N);this.D4.L(A.jb.Bb);this.Iy.G(A9O);this.Iy.L(A.jb.Text);this.St.
G(Axa);this.Gj.G(A9P);this.J(this.AN,0);this.J(this.A8,0);this.J(this.D4,0);this.
J(this.Iy,0);this.J(this.St,0);this.J(this.Gj,0);this.St.S(A.aaL(A.fl.Ah));this.
Gj.S(A.aaL(A.fl.Ah));this.Gj.A5(A.aaL(A.fl.Ak));this.Gj.CC(A.aaL(A.fl.By));this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AN._Done();this.A8._Done(
);this.D4._Done();this.Iy._Done();this.St._Done();this.Gj._Done();C.A$._Done.call(
this);},_ReInit:function(){C.A$._ReInit.call(this);this.AN._ReInit();this.A8._ReInit(
);this.D4._ReInit();this.Iy._ReInit();this.St._ReInit();this.Gj._ReInit();this.St.
S(A.aaL(A.fl.Ah));this.Gj.S(A.aaL(A.fl.Ah));this.Gj.A5(A.aaL(A.fl.Ak));this.Gj.CC(
A.aaL(A.fl.By));},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.AN).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Iy)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gj)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::CalfListBirthRegistrationItem"};C.ABN={Ajn:
null,Ph:null,IV:null,_Init:function(aArg){C.Du._Init.call(this,aArg);A.acg.Am._Init.
call(this.Ajn={I:this},0);A.acg.Am._Init.call(this.Ph={I:this},0);A.acg.Am._Init.
call(this.IV={I:this},0);this.__proto__=C.ABN;this.Ajn.G(Bpf);this.Ajn.L(A.jb.Text
);this.Ph.G(Bpg);this.Ph.L(A.jb.Text);this.IV.G(A9D);this.IV.L(A.jb.Text);this.J(
this.Ajn,0);this.J(this.Ph,0);this.J(this.IV,0);this.Ajn.Ax(A.aaL(A.ach.AB9));this.
Ph.Ax(A.aaL(A.ach.AuB));this.IV.Ax(A.aaL(A.ach.Auw));},_Done:function(){this.__proto__=
C.Du;this.Ajn._Done();this.Ph._Done();this.IV._Done();C.Du._Done.call(this);},_ReInit:
function(){C.Du._ReInit.call(this);this.Ajn._ReInit();this.Ph._ReInit();this.IV.
_ReInit();},_Mark:function(D){var B;C.Du._Mark.call(this,D);if((B=this.Ajn)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ph)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdBirth"};C.
ANu={IF:null,Agb:null,HI:null,Bb:null,Mn:A.jV,AnimalId:-1,WhereAbouts:0,Gender:2
,Init:function(aArg){var B;A.zX([this,this.En],[B=A._GetAutoObject(A.Device.Helper
).X,B.A6u,B.A7L],0);A.zX([this,this.En],[B=A._GetAutoObject(A.Device.Helper).X,B.
V0,B.JG],0);A.zX([this,this.En],[B=A._GetAutoObject(A.Device.Helper).X,B.AqB,B.TU
],0);A.zV([this,this.En],A._GetAutoObject(A.Device.Helper).X,0);A.pe([this,this.
En],this);},C5:function(E){C.BN.C5.call(this,E);this.IF.L(E);this.Agb.L(E);this.
HI.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.HI.Q(A.aaR(A.acf.Aeo));else this.HI.Q(((A.aaR(A.acf.Gy)+A.aaR(A.acf.
Colon))+CJ)+E.toFixed());},En:function(H){if(A._GetAutoObject(A.Device.Helper).X.
Ap0()){this.AvK(((A._GetAutoObject(A.Device.Helper).X.CE+1).toFixed()+A9p)+A._GetAutoObject(
A.Device.Device).Aq.Ch().toFixed());this.JG(A._GetAutoObject(A.Device.Helper).X.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).X.VisualId);this.M5(
A._GetAutoObject(A.Device.Helper).X.WhereAbouts);}else{this.AvK(A9q);this.JG(2);
this.OnSetAnimalId(-1);this.M5(0);}},JG:function(E){if(this.Gender===E)return;this.
Gender=E;this.Agb.Ax(A._GetAutoObject(A.Device.Converter).Amb(E));},AvK:function(
E){if(this.Mn===E)return;this.Mn=E;this.IF.Q(E);},M5:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).Ajq(E))this.HI.
Y(false);else this.HI.Y(true);},_Init:function(aArg){C.BN._Init.call(this,aArg);
A.acg.Text._Init.call(this.IF={I:this},0);A.acg.Am._Init.call(this.Agb={I:this},
0);A.acg.Text._Init.call(this.HI={I:this},0);A.acg.DQ._Init.call(this.Bb={I:this
},0);this.__proto__=C.ANu;this.IF.G(A9r);this.IF.HF(2);this.IF.KF(true);this.IF.
A2(0x12);this.IF.Q(A9s);this.Agb.G(Bph);this.HI.G(Bpi);this.HI.A2(0x11);this.HI.
Q(A.aaR(A.acf.Aeo));this.Bb.DJ(Axf);this.Bb.DX(Ase);this.Bb.L(A.jb.Bb);this.J(this.
IF,0);this.J(this.Agb,0);this.J(this.HI,0);this.J(this.Bb,0);this.IF.S(A.aaL(A.fl.
Ak));this.Agb.Ax(A._GetAutoObject(A.Device.Converter).Amb(2));this.HI.S(A.aaL(A.
fl.Ah));this.Init(aArg);},_Done:function(){this.__proto__=C.BN;this.IF._Done();this.
Agb._Done();this.HI._Done();this.Bb._Done();C.BN._Done.call(this);},_ReInit:function(
){C.BN._ReInit.call(this);this.IF._ReInit();this.Agb._ReInit();this.HI._ReInit();
this.Bb._ReInit();this.HI.Q(A.aaR(A.acf.Aeo));this.IF.S(A.aaL(A.fl.Ak));this.HI.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.BN._Mark.call(this,D);if((B=this.IF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Agb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bb)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Aag={EaseOfDeliveryToString:
null,Af4:null,B$:function(H){C.Ns.B$.call(this,H);var AId=A._GetAutoObject(A.Device.
Helper).X.EaseOfDelivery;this.Ke(this.EaseOfDeliveryToString.Lh(AId));this.GK.Q(
this.Af4.AdC(AId).toFixed());},C5:function(E){C.Ns.C5.call(this,E);this.GK.L(E);
},_Init:function(aArg){C.Ns._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.Af4._Init.call(this.
Af4={I:this},0);this.__proto__=C.Aag;this.U(A.aaR(A.acf.AfW));},_Done:function(){
this.__proto__=C.Ns;this.EaseOfDeliveryToString._Done();this.Af4._Done();C.Ns._Done.
call(this);},_ReInit:function(){C.Ns._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();this.Af4._ReInit();this.U(A.aaR(A.acf.AfW));},_Mark:function(D){var B;
C.Ns._Mark.call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Af4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.Xm={WhereAboutsToString:null,KK:null,B$:function(H){C.Ns.B$.call(this,H);var
KX=A._GetAutoObject(A.Device.Helper).X.WhereAbouts;this.Ke(this.WhereAboutsToString.
Lh(KX));this.GK.Q(this.KK.AdC(KX).toFixed());},C5:function(E){C.Ns.C5.call(this,
E);this.GK.L(E);},_Init:function(aArg){C.Ns._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.KK._Init.call(this.KK={
I:this},0);this.__proto__=C.Xm;this.U(A.aaR(A.acf.I6));},_Done:function(){this.__proto__=
C.Ns;this.WhereAboutsToString._Done();this.KK._Done();C.Ns._Done.call(this);},_ReInit:
function(){C.Ns._ReInit.call(this);this.WhereAboutsToString._ReInit();this.KK._ReInit(
);this.U(A.aaR(A.acf.I6));},_Mark:function(D){var B;C.Ns._Mark.call(this,D);if((
B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.Ry={Cl:null,Z:null,Au:null,Init:function(aArg){},CI:function(H){var B;C.D1.CI.
call(this,H);A.zX([this,this.AeZ],[B=A._GetAutoObject(A.Device.Helper).X,B.QF,B.
OnSetId],0);A.zX([this,this.AeZ],[B=A._GetAutoObject(A.Device.Helper),B.Ur,B.Us]
,0);A.pe([this,this.AeZ],this);},Fb:function(H){var B;C.D1.Fb.call(this,H);A.z$([
this,this.AeZ],[B=A._GetAutoObject(A.Device.Helper).X,B.QF,B.OnSetId],0);A.z$([this
,this.AeZ],[B=A._GetAutoObject(A.Device.Helper),B.Ur,B.Us],0);},E7:function(H){var
B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.
Ml(-this.Z.Bp[1]);},Dr:function(H){switch(this.Cl.CH){case 6:case 7:this.Cl.O9=true;
break;case 4:this.Bc1(4);break;case 5:this.Bc1(5);break;default:;}},Bc1:function(
GF){var B;switch(GF){case 5:{var Cx=this.Z.Bp[1]-40;if(Cx<-(((B=this.Z.C_(0x1))[
3]-B[1])-((B=this.Z.M)[3]-B[1])))Cx=-(((B=this.Z.C_(0x1))[3]-B[1])-((B=this.Z.M)[
3]-B[1]));if(Cx>0)Cx=0;this.Z.Ga([this.Z.Bp[0],Cx]);}break;case 4:{var Cx=this.Z.
Bp[1]+40;if(Cx>0)Cx=0;this.Z.Ga([this.Z.Bp[0],Cx]);}break;default:throw new Error(
Bpj);}},Hu:function(H){var B;var W=this.Z.Ag;var Aa;while(!!W&&!((W.T&0x200)===0x200
)){if(((W.T&0x400)===0x400)){Aa=(C.IR.isPrototypeOf(W)?W:null);if(!!Aa)Aa.B$(this
);}W=W.Ag;}},AeZ:function(s){this.Hu(s);},MD:function(H){var B;this.Z.UY(null,null
);if(!!this.AY&&((this.AY.T&0x400)===0x400))this.Z.Hx(this.AY,true,null,null);},
G3:function(H){A.pe([this,this.E7],this);},_Init:function(aArg){C.D1._Init.call(
this,aArg);A.Core.BO._Init.call(this.Cl={I:this},0);A.Core.Z._Init.call(this.Z={
I:this},0);C.Au._Init.call(this.Au={I:this},0);this.__proto__=C.Ry;this.Cl.Filter=
147;this.Z.G(SJ);this.Z.J$(1);this.Au.G(ArX);this.J(this.Z,0);this.J(this.Au,0);
this.Cl.BP=[this,this.Dr];this.Cl.DR=[this,this.Dr];this.Z.Eh=[this,this.G3];this.
Init(aArg);},_Done:function(){this.__proto__=C.D1;this.Cl._Done();this.Z._Done();
this.Au._Done();C.D1._Done.call(this);},_ReInit:function(){C.D1._ReInit.call(this
);this.Cl._ReInit();this.Z._ReInit();this.Au._ReInit();},_Mark:function(D){var B;
C.D1._Mark.call(this,D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Z)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRowInfos"};C.Xn={Aaa:null,Xj:null,Aab:null,Xk:null
,Aag:null,Xm:null,_Init:function(aArg){C.Ry._Init.call(this,aArg);C.Aaa._Init.call(
this.Aaa={I:this},0);C.Xj._Init.call(this.Xj={I:this},0);C.Aab._Init.call(this.Aab={
I:this},0);C.Xk._Init.call(this.Xk={I:this},0);C.Aag._Init.call(this.Aag={I:this
},0);C.Xm._Init.call(this.Xm={I:this},0);this.__proto__=C.Xn;this.Aaa.G(BC);this.
Aaa.Aj(true);this.Xj.G(KL);this.Xj.Aj(true);this.Xj.Bf(true);this.Aab.G(Q2);this.
Aab.Aj(true);this.Xk.G(WE);this.Xk.Aj(true);this.Xk.Bf(true);this.Aag.G(Aky);this.
Aag.Aj(true);this.Xm.G(AnD);this.Xm.Aj(true);this.Xm.Bf(true);this.J(this.Aaa,0);
this.J(this.Xj,0);this.J(this.Aab,0);this.J(this.Xk,0);this.J(this.Aag,0);this.J(
this.Xm,0);},_Done:function(){this.__proto__=C.Ry;this.Aaa._Done();this.Xj._Done(
);this.Aab._Done();this.Xk._Done();this.Aag._Done();this.Xm._Done();C.Ry._Done.call(
this);},_ReInit:function(){C.Ry._ReInit.call(this);this.Aaa._ReInit();this.Xj._ReInit(
);this.Aab._ReInit();this.Xk._ReInit();this.Aag._ReInit();this.Xm._ReInit();},_Mark:
function(D){var B;C.Ry._Mark.call(this,D);if((B=this.Aaa)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Xj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aab)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aag)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xm)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalRegistrationInfos"};C.Xk={BreedToString:null,GK:null,MN:null
,B$:function(H){C.Ir.B$.call(this,H);var Bu=A._GetAutoObject(A.Device.Helper).X.
Breed;this.U(this.BreedToString.B0(Bu));this.GK.Q(this.MN.AdC(Bu).toFixed());},C5:
function(E){C.Ir.C5.call(this,E);this.GK.L(E);},_Init:function(aArg){C.Ir._Init.
call(this,aArg);A.Device.BreedToString._Init.call(this.BreedToString={I:this},0);
A.acg.Text._Init.call(this.GK={I:this},0);A.Device.MN._Init.call(this.MN={I:this
},0);this.__proto__=C.Xk;this.BM.G(Bpk);this.GK.G(Bpl);this.GK.HF(5);this.GK.A2(
0x14);this.GK.Q(Bpm);this.GK.L(A.jb.Text);this.J(this.GK,0);this.Hk.Ax(A.aaL(A.ach.
AB0));this.GK.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Ir;this.BreedToString.
_Done();this.GK._Done();this.MN._Done();C.Ir._Done.call(this);},_ReInit:function(
){C.Ir._ReInit.call(this);this.BreedToString._ReInit();this.GK._ReInit();this.MN.
_ReInit();this.GK.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Ir._Mark.call(this
,D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GK)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoIconItemBreed"};C.Aab={B$:function(H){C.Ir.B$.call(this,
H);var AyT=A._GetAutoObject(A.Device.Helper).X.NaisIdMother;if(AyT>0)this.U(A._GetAutoObject(
A.Device.Converter).Ub(AyT));else this.U(A.aaR(A.acf.Unknown));},_Init:function(
aArg){C.Ir._Init.call(this,aArg);this.__proto__=C.Aab;this.Hk.Ax(A.aaL(A.ach.AOb
));},_className:"Application::AnimalInfoIconItemNaisIdMother"};C.Xj={X2:null,B$:
function(H){C.Ir.B$.call(this,H);var SS=A._GetAutoObject(A.Device.Helper).X.DateOfBirth;
var Afa=A._GetAutoObject(A.Device.Helper).X.BirthType;if(SS>0)this.U(A._GetAutoObject(
A.acj.Ky).Ai$(SS));else this.U(A.aaR(A.acf.Unknown));var AxQ=A.aaL(A.aci.Tl);switch(
Afa){case 0:AxQ=A.aaL(A.ach.ABY);break;case 1:{AxQ=A.aaL(A.ach.Aux);this.X2.Cr(0
);}break;case 2:{AxQ=A.aaL(A.ach.Aux);this.X2.Cr(1);}break;case 3:{AxQ=A.aaL(A.ach.
Aux);this.X2.Cr(2);}break;default:A.ab5("%s%e",Bpn,Afa);}this.X2.Ax(AxQ);},_Init:
function(aArg){C.Ir._Init.call(this,aArg);A.acg.Am._Init.call(this.X2={I:this},0
);this.__proto__=C.Xj;this.BM.G(Bpo);this.X2.G(AGb);this.X2.L(A.jb.Text);this.J(
this.X2,0);this.Hk.Ax(A.aaL(A.ach.Auw));this.X2.Ax(A.aaL(A.ach.ABY));},_Done:function(
){this.__proto__=C.Ir;this.X2._Done();C.Ir._Done.call(this);},_ReInit:function(){
C.Ir._ReInit.call(this);this.X2._ReInit();},_Mark:function(D){var B;C.Ir._Mark.call(
this,D);if((B=this.X2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBirth"
};C.Aaa={Nh:0,Xl:null,KX:0,Bg:function(aSize){C.Ir.Bg.call(this,aSize);this.Xl.G(
this.Hk.M);},Ai:function(Ae){C.Ir.Ai.call(this,Ae);this.Xl.L(this.BM.AP);if(A._GetAutoObject(
A.Device.Helper).Ajq(this.KX)){this.U(A.aaR(A.acf.AnimalLoss));this.Hk.Y(false);
this.Xl.Y(true);}else if(this.Nh>0){this.U(A._GetAutoObject(A.Device.Converter).
Ub(this.Nh));this.Hk.Y(true);this.Xl.Y(false);}else{this.U(A.aaR(A.acf.Unknown));
this.Hk.Y(true);this.Xl.Y(false);}},B$:function(H){C.Ir.B$.call(this,H);this.Nh=
A._GetAutoObject(A.Device.Helper).X.NaisId;this.KX=A._GetAutoObject(A.Device.Helper
).X.WhereAbouts;this.An();},_Init:function(aArg){C.Ir._Init.call(this,aArg);A.acg.
Text._Init.call(this.Xl={I:this},0);this.__proto__=C.Aaa;this.Xl.Q(A9M);this.J(this.
Xl,0);this.Hk.Ax(A.aaL(A.ach.AuB));this.Xl.S(A.aaL(A.fl.Hi));},_Done:function(){
this.__proto__=C.Ir;this.Xl._Done();C.Ir._Done.call(this);},_ReInit:function(){C.
Ir._ReInit.call(this);this.Xl._ReInit();},_Mark:function(D){var B;C.Ir._Mark.call(
this,D);if((B=this.Xl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"
};C.AKC={Xn:null,Init:function(aArg){var B;A.zX([this,this.Ay$],[B=A._GetAutoObject(
A.Device.Device),B.ACV,B.AG4],0);A.pe([this,this.Ay$],this);},Dr:function(H){var
DV=(A.Core.BO.isPrototypeOf(H)?H:null);switch(DV.CH){case 6:this.N9(this);break;
case 7:this.MI(this);break;default:DV.O9=true;}},CI:function(H){var B;this.Xn.CI(
this);C.AC.CI.call(this,H);},Fb:function(H){var B;this.Xn.Fb(this);C.AC.Fb.call(
this,H);},AmH:function(H){A._GetAutoObject(C.AZ).Fk();},W8:function(H){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},MI:function(H){if(A._GetAutoObject(A.Device.
Device).Aq.Ch()<=1)return;var Lp=A._GetAutoObject(A.Device.Helper).X.CE;Lp=Lp+1;
if(Lp>=A._GetAutoObject(A.Device.Device).Aq.Ch())Lp=0;A._GetAutoObject(A.Device.
Helper).HD(Lp);},N9:function(H){if(A._GetAutoObject(A.Device.Device).Aq.Ch()<=1)
return;var Lp=A._GetAutoObject(A.Device.Helper).X.CE;Lp=Lp-1;if(Lp<0)Lp=A._GetAutoObject(
A.Device.Device).Aq.Ch()-1;A._GetAutoObject(A.Device.Helper).HD(Lp);},Ay$:function(
H){if(!A._GetAutoObject(A.Device.Device).Apy)A._GetAutoObject(C.AZ).AgO(85);},_Init:
function(aArg){C.AC._Init.call(this,aArg);C.Xn._Init.call(this.Xn={I:this},0);this.
__proto__=C.AKC;this.Background.G(B9);this.N.Y(true);this.N.Ow(true);this.N.Ox(true
);this.Dp(C.ANu);this.Xn.G(E2);this.J(this.Xn,0);this.N.Cu=[this,this.AmH];this.
N.Cf=[this,this.W8];this.N.CS(A.aaL(A.ach.ET));this.N.Cm(A.aaL(A.ach.AaT));this.
Init(aArg);},_Done:function(){this.__proto__=C.AC;this.Xn._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.Xn._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.Xn)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalRegistrationDetailsScreen"};C.Ir={Hk:null,BM:null
,U:function(E){C.IR.U.call(this,E);this.BM.Q(this.DD);},C5:function(E){C.IR.C5.call(
this,E);this.Hk.L(E);this.BM.L(E);},_Init:function(aArg){C.IR._Init.call(this,aArg
);A.acg.Am._Init.call(this.Hk={I:this},0);C.CP._Init.call(this.BM={I:this},0);this.
__proto__=C.Ir;this.Hk.G(Bpp);this.Hk.L(A.jb.Text);this.BM.G(Bpq);this.BM.A2(0x11
);this.BM.L(A.jb.Text);this.J(this.Hk,0);this.J(this.BM,0);this.Hk.Ax(A.aaL(A.aci.
Tl));this.BM.S(A.aaL(A.fl.Ah));this.BM.A5(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=C.IR;this.Hk._Done();this.BM._Done();C.IR._Done.call(this);},_ReInit:function(
){C.IR._ReInit.call(this);this.Hk._ReInit();this.BM._ReInit();this.BM.S(A.aaL(A.
fl.Ah));this.BM.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.IR._Mark.call(this
,D);if((B=this.Hk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItem"};C.IR={Background:null
,KG:0,G8:false,CT:function(){this.B$(this);},Init:function(aArg){var B;A.zX([this
,this.A_L],[B=A._GetAutoObject(A.Device.Helper).X,B.QF,B.OnSetId],0);A.pe([this,
this.A_L],this);},Bg:function(aSize){C.Hg.Bg.call(this,aSize);this.Background.G(
A.abK(this.Background.M,aSize));},Ai:function(Ae){C.Hg.Ai.call(this,Ae);if(this.
G8)this.Background.L(A.jb.Bh);else this.Background.L(A.jb.CM);},B$:function(H){}
,A_L:function(s){this.B$(s);},Bf:function(E){if(this.G8===E)return;this.G8=E;this.
An();},C5:function(E){if(this.KG===E)return;this.KG=E;},_Init:function(aArg){C.Hg.
_Init.call(this,aArg);A.acg.AI._Init.call(this.Background={I:this},0);this.__proto__=
C.IR;this.G(BC);this.Background.G(AGH);this.KG=A.jb.Text;this.J(this.Background,
0);this.Init(aArg);},_Done:function(){this.__proto__=C.Hg;this.Background._Done(
);C.Hg._Done.call(this);},_ReInit:function(){C.Hg._ReInit.call(this);this.Background.
_ReInit();this.CT();},_Mark:function(D){var B;C.Hg._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoBaseItem"
};C.Ns={GK:null,Bxg:function(H){this.BM.G(A.abN(this.BM.M,this.GK.M[0]));},_Init:
function(aArg){C.Fj._Init.call(this,aArg);A.acg.Text._Init.call(this.GK={I:this}
,0);this.__proto__=C.Ns;this.GK.AV(0xA);this.GK.G(Bpr);this.GK.HF(5);this.GK.IZ(
true);this.GK.A2(0x14);this.GK.Q(A.jV);this.GK.L(A.jb.Text);this.J(this.GK,0);this.
GK.QI([this,this.Bxg]);this.GK.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.Fj;this.GK._Done();C.Fj._Done.call(this);},_ReInit:function(){C.Fj._ReInit.call(
this);this.GK._ReInit();this.GK.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Fj.
_Mark.call(this,D);if((B=this.GK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeWrappingInfoItem"
};C.Av2={A8H:false,_Init:function(aArg){C.Ael._Init.call(this,aArg);this.__proto__=
C.Av2;},_className:"Application::OptionsOverlayCheckableNode"};C.ALG={ADA:function(
E){C.ApH.ADA.call(this,E);if(E)this.O8.Q(Bps);else this.O8.Q(A9Q);},_Init:function(
aArg){C.ApH._Init.call(this,aArg);this.__proto__=C.ALG;this.O8.Q(A9Q);this.O8.S(
A.aaL(A.fl.Hi));},_className:"Application::DarkThemeRadioMenuItem"};C.Av4={LJ:false
,_Init:function(aArg){C.Ael._Init.call(this,aArg);this.__proto__=C.Av4;},_className:
"Application::OptionsOverlayRadioNode"};C.ARO={Gz:null,_Init:function(aArg){C.Cs.
_Init.call(this,aArg);C.QQ._Init.call(this.Gz={I:this},0);this.__proto__=C.ARO;var
B;this.JH(A.aaR(A.acf.ABc));this.Gz.G(Ahe);this.Gz.Aj(true);this.Gz.Y(true);this.
Gz.U(A.aaR(A.acf.AEx));this.Gz.Aq0(false);this.Gz.A7I(true);this.J(this.Gz,0);this.
Gz.AgD([B=this.Gz,B.Ge]);this.Gz.GB([this,this.Ea,this.G_]);this.Gz.AjT(A.aaL(A.
ach.Edit));this.Gz.Av([B=A._GetAutoObject(A.Device.Device),B.AQC,B.AXV]);},_Done:
function(){this.__proto__=C.Cs;this.Gz._Done();C.Cs._Done.call(this);},_ReInit:function(
){C.Cs._ReInit.call(this);this.Gz._ReInit();this.JH(A.aaR(A.acf.ABc));this.Gz.U(
A.aaR(A.acf.AEx));},_Mark:function(D){var B;C.Cs._Mark.call(this,D);if((B=this.Gz
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesSettingsScreen"
};C.ARM={Gr:0,C2:null,A0:null,J8:null,EY:null,GermanStateToString:null,CountryToString:
null,Pe:0,KZ:0,L0:false,Init:function(aArg){A.zX([this,this.Ut],[this,this.Sb,this.
Lc],0);A.zX([this,this.Ut],[this,this.AmK,this.AgJ],0);},Ai:function(Ae){C.D$.Ai.
call(this,Ae);this.A0.Fz(this.LD);this.J8.Fz(this.LD);this.EY.C1(this.LD);},DM:function(
H){var F;if(!this.N)return;switch(this.A3){case 0:break;case 1:{(F=this.N,F[1].call(
F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(
F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(
F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(
null);(F=this.N,F[1].call(F[0])).BU(this.CountryToString.B0(this.KZ));(F=this.N,
F[1].call(F[0])).Ci=null;}break;case 2:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.
ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.
G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(null);(F=this.N,F[1].call(
F[0])).BU((A.aaR(A.acf.Gi)+AwQ)+this.GermanStateToString.Lh(A._GetAutoObject(A.Device.
Converter).AMJ(this.Pe)));(F=this.N,F[1].call(F[0])).Ci=null;}break;default:{(F=
this.N,F[1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(
F=this.N,F[1].call(F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(F[0])).Cm(null);(
F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,
F[1].call(F[0])).C7(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(
F[0])).Ci=null;}}},Em:function(EB){var SY=this.A3;if(EB<0)EB=0;else if(EB>this.Rj
)EB=this.Rj;switch(EB){case 0:{this.Ba(null);if(!this.Gr&&!this.Pe)this.Lc(0);}break;
case 1:this.Ba(this.EY);break;case 2:this.Ba(this.J8);break;case 3:if(((SY===2)&&
!this.Pe)&&!this.Gr)return;else{this.Ba(this.A0);if(!this.Gr||(SY>0))this.A0.Sl(
2);else this.A0.Sl(7);}break;default:throw new Error(Asg+EB.toFixed());}this.A3=
EB;C.D$.Em.call(this,EB);},Bx:function(E){if(this.AK===E)return;this.AK=E;this.L0=
true;this.Sc(A._GetAutoObject(A.Device.Helper).Vi(E,0,10));this.AgJ(A._GetAutoObject(
A.Device.Helper).Vi(E,10,2)|0);this.Lc(A._GetAutoObject(A.Device.Converter).AeJ(
E));this.L0=false;if(!!this.AK){this.J8.Ka(2);this.A0.Ka(10);}else{this.J8.Ka(0);
this.A0.Ka(0);}this.An();},Ge:function(H){var F;if(!this.AK){var BL=this.AK;this.
Bx(A._GetAutoObject(A.Device.Helper).ABw());if(this.AK!==BL){if(!!this.R)(F=this.
R,F[2].call(F[0],this.AK));A.abo(this.R,0);}this.Em(2);}else this.Em(this.Rj);},
Aja:function(){return this.Gr;},Ajc:function(){return 9999999999;},Lc:function(E
){if(this.KZ===E)return;this.KZ=E;if(this.L0===false)A.pe([this,this.UQ],this);A.
abo([this,this.Sb,this.Lc],0);},Sc:function(E){if(this.Gr===E)return;this.Gr=E;if(
this.L0===false)A.pe([this,this.UQ],this);A.abo([this,this.Abh,this.Sc],0);},UQ:
function(H){var F;var aString=(A.abl(A._GetAutoObject(A.Device.Converter).AtR(this.
KZ),3,10)+A.abl(this.Pe,2,10))+A.abm(this.Gr,10,10);var BL=this.AK;this.Bx(A.ab0(
aString,0,10));if(this.AK!==BL){if(!!this.R)(F=this.R,F[2].call(F[0],this.AK));A.
abo(this.R,0);}},AgJ:function(E){if(this.Pe===E)return;this.Pe=E;if(this.L0===false
)A.pe([this,this.UQ],this);A.abo([this,this.AmK,this.AgJ],0);},Sb:function(){return this.
KZ;},Abh:function(){return this.Gr;},AmK:function(){return this.Pe;},_Init:function(
aArg){C.D$._Init.call(this,aArg);C.C2._Init.call(this.C2={I:this},0);C.AO1._Init.
call(this.A0={I:this},0);C.AuL._Init.call(this.J8={I:this},0);C.ArK._Init.call(this.
EY={I:this},0);A.Device.GermanStateToString._Init.call(this.GermanStateToString={
I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);
this.__proto__=C.ARM;var B;this.Rj=3;this.A0.G(Bpt);this.J8.G(Bpu);this.J8.Fd(16
);this.EY.G(A9R);this.J(this.A0,0);this.J(this.J8,0);this.J(this.EY,0);this.C2.ADk([
this,this.Sb,this.Lc]);this.A0.Av([this,this.Abh,this.Sc]);this.J8.Av([this,this.
AmK,this.AgJ]);this.EY.CN(this.C2);this.EY.Av([B=this.C2,B.Ce,B.Cg]);this.Init(aArg
);},_Done:function(){this.__proto__=C.D$;this.C2._Done();this.A0._Done();this.J8.
_Done();this.EY._Done();this.GermanStateToString._Done();this.CountryToString._Done(
);C.D$._Done.call(this);},_ReInit:function(){C.D$._ReInit.call(this);this.C2._ReInit(
);this.A0._ReInit();this.J8._ReInit();this.EY._ReInit();this.GermanStateToString.
_ReInit();this.CountryToString._ReInit();},_Mark:function(D){var B;C.D$._Mark.call(
this,D);if((B=this.C2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.J8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDGerman"
};C.AO1={Nw:null,Nv:null,EQ:null,FW:null,Ef:null,Dm:null,CQ:null,Cn:null,Fz:function(
E){if(this.MR===E)return;C.K6.Fz.call(this,E);this.Cn.C1(E);this.CQ.C1(E);this.Dm.
C1(E);this.Ef.C1(E);this.FW.C1(E);this.EQ.C1(E);this.Nv.C1(E);this.Nw.C1(E);},XW:
function(IK){var B2=null;switch(IK){case-1:case 0:B2=this.FK;break;case 1:B2=this.
Cn;break;case 2:B2=this.CQ;break;case 3:B2=this.Dm;break;case 4:B2=this.Ef;break;
case 5:B2=this.FW;break;case 6:B2=this.EQ;break;case 7:B2=this.Nv;break;case 8:B2=
this.Nw;break;case 9:B2=this.GJ;break;default:A.ab5("%s",Ahj);}return B2;},_Init:
function(aArg){C.K6._Init.call(this,aArg);C.DE._Init.call(this.Nw={I:this},0);C.
DE._Init.call(this.Nv={I:this},0);C.DE._Init.call(this.EQ={I:this},0);C.DE._Init.
call(this.FW={I:this},0);C.DE._Init.call(this.Ef={I:this},0);C.DE._Init.call(this.
Dm={I:this},0);C.DE._Init.call(this.CQ={I:this},0);C.DE._Init.call(this.Cn={I:this
},0);this.__proto__=C.AO1;this.G(Bpv);this.GJ.G(AGW);this.Nw.G(Axg);this.Nv.G(AXv
);this.EQ.G(AXw);this.FW.G(AXx);this.Ef.G(AXy);this.Dm.G(AXz);this.CQ.G(AXA);this.
Cn.G(A9y);this.FK.G(AXB);this.Ez.G(AXB);this.J(this.Nw,-2);this.J(this.Nv,-2);this.
J(this.EQ,-2);this.J(this.FW,-2);this.J(this.Ef,-2);this.J(this.Dm,-2);this.J(this.
CQ,-2);this.J(this.Cn,-2);this.Nw.Di=[this,this.GE];this.Nv.Di=[this,this.GE];this.
EQ.Di=[this,this.GE];this.FW.Di=[this,this.GE];this.Ef.Di=[this,this.GE];this.Dm.
Di=[this,this.GE];this.CQ.Di=[this,this.GE];this.Cn.Di=[this,this.GE];},_Done:function(
){this.__proto__=C.K6;this.Nw._Done();this.Nv._Done();this.EQ._Done();this.FW._Done(
);this.Ef._Done();this.Dm._Done();this.CQ._Done();this.Cn._Done();C.K6._Done.call(
this);},_ReInit:function(){C.K6._ReInit.call(this);this.Nw._ReInit();this.Nv._ReInit(
);this.EQ._ReInit();this.FW._ReInit();this.Ef._ReInit();this.Dm._ReInit();this.CQ.
_ReInit();this.Cn._ReInit();},_Mark:function(D){var B;C.K6._Mark.call(this,D);if((
B=this.Nw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nv)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ef)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dm)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cn
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber10"};C.ARN={
Gr:0,C2:null,A0:null,EY:null,CountryToString:null,KZ:0,L0:false,Init:function(aArg
){A.zX([this,this.Ut],[this,this.Sb,this.Lc],0);},Ai:function(Ae){C.D$.Ai.call(this
,Ae);this.A0.Fz(this.LD);this.EY.C1(this.LD);},DM:function(H){var F;if(!this.N)return;
switch(this.A3){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.ET
));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.
G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.
N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(null);(F=this.N,F[1].call(
F[0])).BU(this.CountryToString.B0(this.KZ));(F=this.N,F[1].call(F[0])).Ci=null;}
break;default:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(
F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(
F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=
null;(F=this.N,F[1].call(F[0])).C7(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=
this.N,F[1].call(F[0])).Ci=null;}}},Em:function(EB){var SY=this.A3;if(EB<0)EB=0;
else if(EB>this.Rj)EB=this.Rj;switch(EB){case 0:{this.Ba(null);if(!this.Gr)this.
Lc(0);}break;case 1:this.Ba(this.EY);break;case 2:{this.Ba(this.A0);if(!this.Gr||(
SY>0))this.A0.Sl(2);else this.A0.Sl(7);}break;default:throw new Error(Asg+EB.toFixed(
));}this.A3=EB;C.D$.Em.call(this,EB);},Bx:function(E){if(this.AK===E)return;this.
AK=E;this.L0=true;this.Sc(A._GetAutoObject(A.Device.Helper).Vi(E,0,12));this.Lc(
A._GetAutoObject(A.Device.Converter).AeJ(E));this.L0=false;if(!!this.AK)this.A0.
Ka(12);else this.A0.Ka(0);this.An();},Ge:function(H){var F;if(!this.AK){var BL=this.
AK;this.Bx(A._GetAutoObject(A.Device.Helper).ABw());if(this.AK!==BL){if(!!this.R
)(F=this.R,F[2].call(F[0],this.AK));A.abo(this.R,0);}}this.Em(this.Rj);},Aja:function(
){return this.Gr;},Ajc:function(){return 999999999999;},Lc:function(E){if(this.KZ===
E)return;this.KZ=E;if(this.L0===false)A.pe([this,this.UQ],this);A.abo([this,this.
Sb,this.Lc],0);},Sc:function(E){if(this.Gr===E)return;this.Gr=E;if(this.L0===false
)A.pe([this,this.UQ],this);A.abo([this,this.Abh,this.Sc],0);},UQ:function(H){var
F;var aString=A.abl(A._GetAutoObject(A.Device.Converter).AtR(this.KZ),3,10)+A.abm(
this.Gr,12,10);var BL=this.AK;this.Bx(A.ab0(aString,0,10));if(this.AK!==BL){if(!
!this.R)(F=this.R,F[2].call(F[0],this.AK));A.abo(this.R,0);}},Sb:function(){return this.
KZ;},Abh:function(){return this.Gr;},_Init:function(aArg){C.D$._Init.call(this,aArg
);C.C2._Init.call(this.C2={I:this},0);C.ACd._Init.call(this.A0={I:this},0);C.ArK.
_Init.call(this.EY={I:this},0);A.Device.CountryToString._Init.call(this.CountryToString={
I:this},0);this.__proto__=C.ARN;var B;this.Rj=2;this.A0.G(Bpw);this.EY.G(A9R);this.
J(this.A0,0);this.J(this.EY,0);this.C2.ADk([this,this.Sb,this.Lc]);this.A0.Av([this
,this.Abh,this.Sc]);this.EY.CN(this.C2);this.EY.Av([B=this.C2,B.Ce,B.Cg]);this.Init(
aArg);},_Done:function(){this.__proto__=C.D$;this.C2._Done();this.A0._Done();this.
EY._Done();this.CountryToString._Done();C.D$._Done.call(this);},_ReInit:function(
){C.D$._ReInit.call(this);this.C2._ReInit();this.A0._ReInit();this.EY._ReInit();
this.CountryToString._ReInit();},_Mark:function(D){var B;C.D$._Mark.call(this,D);
if((B=this.C2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PremisesIDInternational"
};C.NewMenu={DN:null,Z:null,Au:null,XD:null,XE:null,XC:null,XA:null,XB:null,Dr:function(
H){var B;C.AC.Dr.call(this,H);if(!!this.AY&&((this.AY.T&0x400)===0x400))this.Z.Hx(
this.AY,true,null,null);},CI:function(H){C.AC.CI.call(this,H);A._GetAutoObject(A.
Device.Device).Aq.Bm(null);A._GetAutoObject(A.Device.Device).Bq.Bm(null);A._GetAutoObject(
A.Device.Helper).Aj_();A._GetAutoObject(A.Device.Helper).Arr();},H8:function(H){
var Cp=(C.Fa.isPrototypeOf(H)?H:null);if(!Cp)return;if(Cp===this.XD)A._GetAutoObject(
C.AZ).BZ(28);else if(Cp===this.XE)A._GetAutoObject(C.AZ).BZ(26);else if(Cp===this.
XC)A._GetAutoObject(C.AZ).BZ(62);else if(Cp===this.XA)A._GetAutoObject(C.AZ).BZ(
27);else if(Cp===this.XB)A._GetAutoObject(C.AZ).BZ(89);},A00:function(H){A._GetAutoObject(
C.AZ).Fk();},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.
Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},G3:function(H){A.pe([this,this.
E7],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.acg.AI._Init.call(
this.DN={I:this},0);A.Core.Z._Init.call(this.Z={I:this},0);C.Au._Init.call(this.
Au={I:this},0);C.Fa._Init.call(this.XD={I:this},0);C.Fa._Init.call(this.XE={I:this
},0);C.Fa._Init.call(this.XC={I:this},0);C.Fa._Init.call(this.XA={I:this},0);C.Fa.
_Init.call(this.XB={I:this},0);this.__proto__=C.NewMenu;this.Background.L(A.jb.C0
);this.N.Y(true);this.N.BU(A.jV);this.D_.Ar(false);this.Dp(C.Ap2);this.DN.AV(0x3F
);this.DN.G(E2);this.DN.L(A.jb.CM);this.Z.G(E2);this.Z.J$(9);this.Au.G(IJ);this.
XD.G(PO);this.XD.Aj(true);this.XD.U(A.aaR(A.acf.A5r));this.XE.G(AXG);this.XE.Aj(
true);this.XE.U(A.aaR(A.acf.NewAnimals));this.XC.G(NV);this.XC.Aj(true);this.XC.
U(A.aaR(A.acf.Calving));this.XA.G(PP);this.XA.Aj(true);this.XA.U(A.aaR(A.acf.AAy
));this.XB.G(Mt);this.XB.Aj(true);this.XB.U(A.aaR(A.acf.AnimalLoss));this.J(this.
DN,0);this.J(this.Z,0);this.J(this.Au,0);this.J(this.XD,0);this.J(this.XE,0);this.
J(this.XC,0);this.J(this.XA,0);this.J(this.XB,0);this.N.Cu=[this,this.A00];this.
N.CS(A.aaL(A.ach.ET));this.Z.Eh=[this,this.G3];this.XD.AQ=[this,this.H8];this.XD.
Dy(A.aaL(A.ach.AB_));this.XE.AQ=[this,this.H8];this.XE.Dy(A.aaL(A.ach.AuF));this.
XC.AQ=[this,this.H8];this.XC.Dy(A.aaL(A.ach.AN6));this.XA.AQ=[this,this.H8];this.
XA.Dy(A.aaL(A.ach.AN2));this.XB.AQ=[this,this.H8];this.XB.Dy(A.aaL(A.ach.ANV));}
,_Done:function(){this.__proto__=C.AC;this.DN._Done();this.Z._Done();this.Au._Done(
);this.XD._Done();this.XE._Done();this.XC._Done();this.XA._Done();this.XB._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DN._ReInit(
);this.Z._ReInit();this.Au._ReInit();this.XD._ReInit();this.XE._ReInit();this.XC.
_ReInit();this.XA._ReInit();this.XB._ReInit();this.XD.U(A.aaR(A.acf.A5r));this.XE.
U(A.aaR(A.acf.NewAnimals));this.XC.U(A.aaR(A.acf.Calving));this.XA.U(A.aaR(A.acf.
AAy));this.XB.U(A.aaR(A.acf.AnimalLoss));},_Mark:function(D){var B;C.AC._Mark.call(
this,D);if((B=this.DN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.XE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XC
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.XA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XB)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewMenu"};C.
APT={KS:null,EaseOfDelivery:null,BirthType:null,Ab5:null,K_:null,Cz:null,GO:null
,K8:null,Ayp:true,Init:function(aArg){this.Ba(this.C4);A.pe([this,this.Hu],this);
},Ed:function(H){var B;A._GetAutoObject(A.Device.Helper).X.G$();A._GetAutoObject(
C.AZ).Fk();if(!!this.KS)this.KS.Ed(this);},Afr:function(H){var B;var F;A._GetAutoObject(
A.Device.Helper).X.DS((F=this.B4.R,F[1].call(F[0])));A._GetAutoObject(A.Device.Helper
).X.AvA(true);if(!!this.KS)this.KS.Afr(this);if(A._GetAutoObject(A.Device.Device
).Aq.K7())A._GetAutoObject(A.Device.Helper).AIz(A._GetAutoObject(A.Device.Helper
).X,5,5,0,[this,this.AoT]);else{this.Aii();A.pe([this,this.Aph],this);}},Atc:function(
){this.N.BU(A.jV);this.N.C7(A.aaL(A.ach.ACc));this.N.Ci=[this,this.Axw];},CI:function(
H){var B;C.HQ.CI.call(this,H);if(A._GetAutoObject(A.Device.Device).Aq.K7()){A._GetAutoObject(
A.Device.Device).A6(41,true,A._GetAutoObject(A.Device.Device).Aq.Hz().toFixed(),
0,null);this.Ed(this);}else if(this.Ayp){this.Ayp=false;A.pe([this,this.A1b],this
);}else if(!this.KS){this.KS=A._NewObject(C.APU,0);this.KS.A7e([this,this.Azx]);
A._GetAutoObject(A.Device.Helper).X.F$();A._GetAutoObject(A.Device.Helper).Apu(A.
_GetAutoObject(A.Device.Helper).X);A._GetAutoObject(A.Device.Helper).X.M5(this.ArU.
AdC(6));this.KS.Lz(this);if(!A._GetAutoObject(A.Device.Helper).X.NaisIdMother)this.
Ed(this);}},Aii:function(){A._GetAutoObject(A.Device.Helper).X.Co(A._GetAutoObject(
A.Device.Device).Aq);var LW=A._GetAutoObject(A.Device.Device).Aq.K3(0,A._GetAutoObject(
A.Device.Helper).X.Id);A._GetAutoObject(A.Device.Device).Sm(LW);if(A._GetAutoObject(
A.Device.Helper).Amn()){if(A._GetAutoObject(A.Device.Device).Bq.K7())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),
0,null);else{var BT=A._NewObject(A.Device.Rating,0);BT.F$();BT.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).X.Id);BT.OnSetBodyWeight(this.Kw);BT.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).X.DateOfBirth);BT.Co(A._GetAutoObject(A.Device.Device).Bq);}}A.
_GetAutoObject(A.Device.Helper).A4x(A._GetAutoObject(A.Device.Helper).X.DateOfBirth
,true);},Aph:function(H){var B;if(!!this.KS)this.KS.Aph(this);},Hu:function(H){if(
A._GetAutoObject(A.Device.Helper).Amn())this.Dc.Y(true);else this.Dc.Y(false);},
AoT:function(H){var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!At)return;
switch(At.Id){case 41:break;default:A.ab5("%s%e",Ar_,At.Id);}},Azx:function(H){this.
Lz(this);this.AgE(A._GetAutoObject(A.Device.Helper).AaH(A._GetAutoObject(A.Device.
Helper).X.AnimalType));this.LA(this.C4);},AoU:function(H){var F;C.HQ.AoU.call(this
,H);(F=this.Dc.R,F[2].call(F[0],this.Dc.Anf));},A1b:function(H){A._GetAutoObject(
C.AZ).BZ(90);},_Init:function(aArg){C.HQ._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.Ab5._Init.call(this.Ab5={I:this},0);C.QQ._Init.call(this.K_={I:this
},0);C.Sn._Init.call(this.Cz={I:this},0);C.B_._Init.call(this.GO={I:this},0);C.B_.
_Init.call(this.K8={I:this},0);this.__proto__=C.APT;var B;this.Dp(C.ANr);this.K_.
G(Ahe);this.K_.Aj(true);this.K_.U(A.aaR(A.acf.AAU));this.CB.G(Aca);this.Cz.G(Aca
);this.Cz.Aj(true);this.Cz.U(A.aaR(A.acf.Adx));this.Cz.AD0(true);this.GO.G(Aca);
this.GO.Aj(true);this.GO.U(A.aaR(A.acf.Aqq));this.K8.G(Aca);this.K8.Aj(true);this.
K8.U(A.aaR(A.acf.AfW));this.J(this.K_,-4);this.J(this.Cz,-2);this.J(this.GO,0);this.
J(this.K8,0);this.EaseOfDelivery.LO(A._GetAutoObject(A.Device.Helper).X);this.BirthType.
LO(A._GetAutoObject(A.Device.Helper).X);this.Ab5.LO(A._GetAutoObject(A.Device.Helper
).X);this.K_.GB([this,this.Ea,this.G_]);this.K_.Av([B=A._GetAutoObject(A.Device.
Helper).X,B.AQx,B.AmZ]);this.Cz.GB([this,this.Ea,this.G_]);this.Cz.LN([B=this.Cz
,B.Ge]);this.Cz.LP(A.aaL(A.ach.Edit));this.Cz.Abu([B=A._GetAutoObject(A.Device.Helper
).X,B.Au3,B.Sd]);this.FY.Av([B=this.Ab5,B.Ce,B.Cg]);this.FY.CN(this.Ab5);this.GO.
Av([B=this.BirthType,B.Ce,B.Cg]);this.GO.CN(this.BirthType);this.K8.Av([B=this.EaseOfDelivery
,B.Ce,B.Cg]);this.K8.CN(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.HQ;this.EaseOfDelivery._Done();this.BirthType._Done();this.Ab5.
_Done();this.K_._Done();this.Cz._Done();this.GO._Done();this.K8._Done();C.HQ._Done.
call(this);},_ReInit:function(){C.HQ._ReInit.call(this);this.EaseOfDelivery._ReInit(
);this.BirthType._ReInit();this.Ab5._ReInit();this.K_._ReInit();this.Cz._ReInit(
);this.GO._ReInit();this.K8._ReInit();this.K_.U(A.aaR(A.acf.AAU));this.Cz.U(A.aaR(
A.acf.Adx));this.GO.U(A.aaR(A.acf.Aqq));this.K8.U(A.aaR(A.acf.AfW));},_Mark:function(
D){var B;C.HQ._Mark.call(this,D);if((B=this.KS)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.K_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cz)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K8)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::NewAnimalLossDataScreen"};C.AKE={Init:function(
aArg){var B;A.zX([this,this.BdB],[B=A._GetAutoObject(A.Device.Device),B.AC2,B.AG9
],0);A.pe([this,this.BdB],this);},AI6:function(){var Bc=null;switch(A._GetAutoObject(
A.Device.Device).Abd){case 0:Bc=A._GetAutoObject(A.Device.Helper).ABo();break;case
1:Bc=A._GetAutoObject(A.Device.Helper).AML();break;case 2:Bc=A._GetAutoObject(A.
Device.Helper).MT();break;default:throw new Error(AXH+A._GetAutoObject(A.Device.
Device).Abd.toFixed());}A._GetAutoObject(A.Device.Device).Aq.Bm(Bc);},BdB:function(
H){switch(A._GetAutoObject(A.Device.Device).Abd){case 0:this.Do(A.aaR(A.acf.APZ)
);break;case 1:this.Do(A.aaR(A.acf.Bg7));break;case 2:this.Do(A.aaR(A.acf.AuX));
break;default:A.ab5("%s",AXH+A._GetAutoObject(A.Device.Device).Abd.toFixed());}}
,_Init:function(aArg){C.AlO._Init.call(this,aArg);this.__proto__=C.AKE;this.BjY(
C.ANH);this.D_.Abq(A._NewObject(C.ANw,0));this.Init(aArg);},_className:"Application::AnimalSearchDriedOffOverlay"
};C.APU={AyT:0,AcC:null,AtU:null,Bbd:0,A1o:0,A0o:0,Init:function(aArg){this.Bbd=
A._GetAutoObject(A.Device.Helper).X.Id;this.AcC=A._GetAutoObject(A.Device.Device
).Aq.Filter;this.AyT=A._GetAutoObject(A.Device.Helper).X.NaisId;this.A0o=A._GetAutoObject(
A.Device.Helper).X.AnimalType;},Lz:function(H){A._GetAutoObject(A.Device.Helper).
X.AmZ(this.AyT);A._GetAutoObject(A.Device.Helper).X.Aee(true);switch(this.A0o){case
0:case 1:A._GetAutoObject(A.Device.Helper).X.DS(0);break;case 2:A._GetAutoObject(
A.Device.Helper).X.DS(2);break;default:A.ab5("%s%e",AXt,this.A0o);}},Ed:function(
H){A._GetAutoObject(A.Device.Device).Aq.Bm(this.AcC);if(!!this.A1o)this.BdD();},
Afr:function(H){A._GetAutoObject(A.Device.Device).Aq.Bm(null);},BdD:function(){var
AsS=A._NewObject(A.Device.Animal,0);var Ac=A._GetAutoObject(A.Device.Device).Aq.
K3(0,this.Bbd);AsS.EJ(Ac,A._GetAutoObject(A.Device.Device).Aq);AsS.Avp(A._GetAutoObject(
A.Device.Helper).X.DateOfBirth);AsS.AqV(false);AsS.AvB(AsS.LactationNumber+1);AsS.
Co(A._GetAutoObject(A.Device.Device).Aq);},Aph:function(H){this.A1o++;var Buy=A.
_GetAutoObject(A.Device.Converter).Beo(A._GetAutoObject(A.Device.Helper).X.BirthType
);if((this.A1o<Buy)&&(A._GetAutoObject(A.Device.Helper).Ajq(A._GetAutoObject(A.Device.
Helper).X.WhereAbouts)===false))A._GetAutoObject(A.Device.Device).A6(59,true,A.jV
,0,[this,this.UM]);else this.Bad(this);},UM:function(H){var At=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===8))this.Bad(this);else if(!!At&&(
At.PopupState===7))this.Azx(this);},Azx:function(H){var B;var H4=A._GetAutoObject(
A.Device.Helper).X.AnimalType;var Afa=A._GetAutoObject(A.Device.Helper).X.BirthType;
var Bu=A._GetAutoObject(A.Device.Helper).X.Breed;var SS=A._GetAutoObject(A.Device.
Helper).X.DateOfBirth;var AId=A._GetAutoObject(A.Device.Helper).X.EaseOfDelivery;
if(!!this.AtU)(B=this.AtU)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper
).X.DS(H4);A._GetAutoObject(A.Device.Helper).X.AjN(Afa);A._GetAutoObject(A.Device.
Helper).X.NH(Bu);A._GetAutoObject(A.Device.Helper).X.Sd(SS);A._GetAutoObject(A.Device.
Helper).X.AjQ(AId);},Bad:function(H){this.BdD();A._GetAutoObject(C.AZ).Fk();A._GetAutoObject(
A.Device.Device).Aq.Bm(this.AcC);},A7e:function(E){if(A.aa0(this.AtU,E))return;this.
AtU=E;},_Init:function(aArg){this.__proto__=C.APU;this.Init(aArg);A.h7++;},_Done:
function(){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var
B;if((B=this.AcC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AtU)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);
},I:null,_cycle:0,_observers:null,_className:"Application::NewAnimalMotherHelper"
};C.AKU={Init:function(aArg){var B;A.zX([this,this.Bbz],[B=A._GetAutoObject(A.Device.
Device),B.AQg,B.AXI],0);this.Bbz(this);},Co:function(){A.ab5("%s",Bpx);},EJ:function(
Acg){C.Ac$.EJ.call(this,Acg);var P;for(P=16;P>0;P--)this.IL.Set(P,this.IL.Get(P-
1));this.IL.Set(0,0);if(this.CL<17)this.CL++;else A.ab5("%s",Bpy);},Bbz:function(
H){this.EJ(A._GetAutoObject(A.Device.Device).Atw);A.we(this,0);},A4V:function(JO
){switch(JO){case 2048:return false;default:return true;}},_Init:function(aArg){
C.Ac$._Init.call(this,aArg);this.__proto__=C.AKU;this.Init(aArg);},_className:"Application::AutoActionsSelectableClass"
};C.AtK={_Init:function(){C.AKU._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Jy={DQ:null,V:null,A5k:true,U:function(E){
C.IR.U.call(this,E);this.V.Q(E);},C5:function(E){C.IR.C5.call(this,E);this.V.L(E
);},Bj2:function(E){if(this.A5k===E)return;this.A5k=E;this.DQ.Y(E);},_Init:function(
aArg){C.IR._Init.call(this,aArg);A.acg.DQ._Init.call(this.DQ={I:this},0);C.CP._Init.
call(this.V={I:this},0);this.__proto__=C.Jy;this.DQ.DJ(Bpz);this.DQ.DX(BpA);this.
DQ.L(A.jb.Bb);this.V.AV(0x3F);this.V.G(BpB);this.V.A2(0x11);this.V.L(A.jb.Text);
this.J(this.DQ,0);this.J(this.V,0);this.V.S(A.aaL(A.fl.J6));this.V.A5(A.aaL(A.fl.
H$));this.V.CC(A.aaL(A.fl.By));},_Done:function(){this.__proto__=C.IR;this.DQ._Done(
);this.V._Done();C.IR._Done.call(this);},_ReInit:function(){C.IR._ReInit.call(this
);this.DQ._ReInit();this.V._ReInit();this.V.S(A.aaL(A.fl.J6));this.V.A5(A.aaL(A.
fl.H$));this.V.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.IR._Mark.call(this
,D);if((B=this.DQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoTableItem"};C.ANw={Af_:null,AaF:
null,E$:null,EZ:null,Da:null,Init:function(aArg){var B;A.zX([this,this.A1W],[B=A.
_GetAutoObject(A.Device.Device),B.AC2,B.AG9],0);A.pe([this,this.A1W],this);},C5:
function(E){C.XY.C5.call(this,E);this.Da.L(E);},A6Z:function(H){A.pe([this,this.
A1W],this);},A1p:function(H){var B;var F;var Filter;var FilterCriterion;if(!!this.
R){Filter=(F=this.R,F[1].call(F[0])).Gu();FilterCriterion=(A.Device.Int32FilterCriterion.
isPrototypeOf(B=Filter.DW(1,4))?B:null);if(!!FilterCriterion)Filter.QM(FilterCriterion
);A._GetAutoObject(A.Device.Device).Aq.Bm(Filter);}},Db:function(H){var B;var F;
C.XY.Db.call(this,H);if(!(F=this.R,F[1].call(F[0]))){this.Da.Ax(A.aaL(A.ach.Ajj)
);return;}var Bvd=(A.Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.R,F[1].call(
F[0])).DW(38,0))?B:null);var Axz=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(
B=(F=this.R,F[1].call(F[0])).DW(14,0))?B:null);if(!!Bvd)this.Da.Ax(A.aaL(A.ach.ABC
));else if(!!Axz&&(Axz.A4===1))this.Da.Ax(A.aaL(A.ach.AN8));else this.Da.Ax(A.aaL(
A.ach.Ajj));},A1W:function(H){var F;var Filter=null;var AMy;switch(A._GetAutoObject(
A.Device.Device).Abd){case 0:Filter=A._GetAutoObject(A.Device.Helper).ABo();break;
case 1:Filter=A._GetAutoObject(A.Device.Helper).AML();break;case 2:Filter=A._GetAutoObject(
A.Device.Helper).MT();break;default:throw new Error(AXH+A._GetAutoObject(A.Device.
Device).Abd.toFixed());}var AzG=this.AgA();if(AzG>0){AMy=A._NewObject(A.Device.Int32FilterCriterion
,0);AMy.Initialize(1,4,AzG,false);Filter.CZ(AMy);}if(!!this.R)(F=this.R,F[2].call(
F[0],Filter));this.A0.AjO(false);},N9:function(H){if(!this.AgA())this.A0.AjO(true
);this.Ba(this.A0);this.An();},MI:function(H){this.A0.AjO(false);this.Ba(this.Af_
);this.An();},_Init:function(aArg){C.XY._Init.call(this,aArg);C.Aqb._Init.call(this.
Af_={I:this},0);C.AaF._Init.call(this.AaF={I:this},0);A.Core.BO._Init.call(this.
E$={I:this},0);A.Core.BO._Init.call(this.EZ={I:this},0);A.acg.Am._Init.call(this.
Da={I:this},0);this.__proto__=C.ANw;var B;this.G(BpC);this.CX.G(BpD);this.CX.Y(false
);this.A0.G(BpE);this.Af_.G(BpF);this.AaF.Av(A._GetAutoObject(A.Device.Device).Abd
);this.E$.Filter=6;this.EZ.Filter=7;this.Da.G(BpG);this.J(this.Af_,0);this.J(this.
Da,0);this.Af_.CN(this.AaF);this.Af_.Av([B=this.AaF,B.Ce,B.Cg]);this.E$.BP=[this
,this.N9];this.EZ.BP=[this,this.MI];this.Da.Ax(A.aaL(A.ach.Ajj));this.Init(aArg);
},_Done:function(){this.__proto__=C.XY;this.Af_._Done();this.AaF._Done();this.E$.
_Done();this.EZ._Done();this.Da._Done();C.XY._Done.call(this);},_ReInit:function(
){C.XY._ReInit.call(this);this.Af_._ReInit();this.AaF._ReInit();this.E$._ReInit(
);this.EZ._ReInit();this.Da._ReInit();},_Mark:function(D){var B;C.XY._Mark.call(
this,D);if((B=this.Af_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaF)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeaderSearchAnimalDriedOff"};C.AaF={Ad8:null,Init:function(aArg){var
B;A.zX([this,this.Bbf],[B=A._GetAutoObject(A.Device.Device),B.AC2,B.AG9],0);A.pe([
this,this.Bbf],this);},Dt:function(){return 3;},Av:function(E){C.Ds.Av.call(this
,E);A._GetAutoObject(A.Device.Device).AvG(E);},ABn:function(aIndex){if((aIndex<0
)||(aIndex>=this.Dt()))return null;return this.Ad8.ArL(aIndex);},ABp:function(aIndex
){if((aIndex<0)||(aIndex>=this.Dt()))return-1;return this.Ad8.ArM(aIndex);},Bbf:
function(H){this.R=A._GetAutoObject(A.Device.Device).Abd;A.abo([this,this.Ce,this.
Cg],0);},_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Device.Ad8._Init.call(
this.Ad8={I:this},0);this.__proto__=C.AaF;this.Cv.Set(0,0);this.Cv.Set(1,1);this.
Cv.Set(2,2);this.Init(aArg);},_Done:function(){this.__proto__=C.Ds;this.Ad8._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.Ad8._ReInit(
);},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.Ad8)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"};C.ANH={Eq:
null,IB:null,_Init:function(aArg){C.Er._Init.call(this,aArg);C.CP._Init.call(this.
Eq={I:this},0);A.acg.Text._Init.call(this.IB={I:this},0);this.__proto__=C.ANH;this.
G(OJ);this.Background.G(OJ);this.Eq.G(AGI);this.Eq.Q(A.aaR(A.acf.A4D));this.Eq.A2(
0x12);this.Eq.L(A.jb.Text);this.IB.AV(0x3F);this.IB.G(AGJ);this.IB.HF(5);this.IB.
A2(0x14);this.IB.Q(A.aaR(A.acf.AE9));this.IB.L(A.jb.Text);this.J(this.Eq,0);this.
J(this.IB,0);this.Eq.S(A.aaL(A.fl.Ah));this.Eq.A5(A.aaL(A.fl.H$));this.Eq.CC(A.aaL(
A.fl.By));this.IB.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.Er;this.
Eq._Done();this.IB._Done();C.Er._Done.call(this);},_ReInit:function(){C.Er._ReInit.
call(this);this.Eq._ReInit();this.IB._ReInit();this.Eq.Q(A.aaR(A.acf.A4D));this.
IB.Q(A.aaR(A.acf.AE9));this.Eq.S(A.aaL(A.fl.Ah));this.Eq.A5(A.aaL(A.fl.H$));this.
Eq.CC(A.aaL(A.fl.By));this.IB.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.Er._Mark.
call(this,D);if((B=this.Eq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IB)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"};C.MotherScanScreen={
JM:null,Bde:function(){if(A._GetAutoObject(A.Device.Helper).X.NaisId>0)this.BbY(
this);else A._GetAutoObject(A.Device.Device).A6(63,true,A.jV,0,[this,this.UM]);}
,BbY:function(H){A._GetAutoObject(C.AZ).Fk();},UM:function(H){var At=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if((!!At&&(At.Id===63))&&(At.PopupState===7))this.BbY(this
);},_Init:function(aArg){C.L6._Init.call(this,aArg);A.acg.Text._Init.call(this.JM={
I:this},0);this.__proto__=C.MotherScanScreen;this.Dp(C.ANv);this.I5.G(BpH);this.
I5.Aj1(2);this.AbT.Y(false);this.APz=12;this.Number.G(BpI);this.Number.Q(A.aaR(A.
acf.A8C));this.A2u=false;this.JM.G(BpJ);this.JM.HF(5);this.JM.KF(true);this.JM.Q(((
A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.acf.AAc));this.JM.L(A.jb.Text);this.
Kh(this.I5,-1);this.Kh(this.IG,-1);this.Kh(this.AbT,-1);this.J(this.JM,0);this.JM.
S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.L6;this.JM._Done();C.L6._Done.
call(this);},_ReInit:function(){C.L6._ReInit.call(this);this.JM._ReInit();this.Number.
Q(A.aaR(A.acf.A8C));this.JM.Q(((A.aaR(A.acf.Ok)+A.aaR(A.acf.Colon))+CJ)+A.aaR(A.
acf.AAc));this.JM.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.L6._Mark.call(this
,D);if((B=this.JM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MotherScanScreen"
};C.ANv={_Init:function(aArg){C.Ap1._Init.call(this,aArg);this.__proto__=C.ANv;this.
CX.DS(1);},_className:"Application::HeaderScannedCowId"};C.I5={Aa5:null,Aa4:null
,Aa3:null,Qk:null,CountryToString:null,ArO:0,CT:function(){this.An();},Ai:function(
Ae){A.Core.O.Ai.call(this,Ae);this.Qk.Q(this.CountryToString.Lh(A._GetAutoObject(
A.Device.Converter).A42(A._GetAutoObject(A.Device.Device).Language))+BpK);},Aj1:
function(E){if(this.ArO===E)return;this.ArO=E;var bitmap=null;var AZs=BpL;var AZr=
null;var AZt=false;switch(E){case 0:bitmap=A.aaL(A.ach.Aqa);break;case 1:{bitmap=
A.aaL(A.ach.AOI);AZs=BpM;AZr=A.aaL(A.fl.Ak);AZt=true;}break;case 2:{bitmap=A.aaL(
A.ach.AOJ);AZs=BpN;AZr=A.aaL(A.fl.By);AZt=true;}break;default:throw new Error(BpO+
E.toFixed());}this.Aa3.Ax(bitmap);this.Aa4.Ax(bitmap);this.Aa5.Ax(bitmap);this.Qk.
G(A.abJ(this.Qk.M,AZs));this.Qk.S(AZr);this.Qk.Y(AZt);this.G(A.abK(this.M,bitmap.
FrameSize));},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.Am._Init.
call(this.Aa5={I:this},0);A.acg.Am._Init.call(this.Aa4={I:this},0);A.acg.Am._Init.
call(this.Aa3={I:this},0);A.acg.Text._Init.call(this.Qk={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.I5;this.G(AGZ);this.
Aa5.AV(0x3);this.Aa5.G(AGZ);this.Aa5.L(A.jb.HY);this.Aa5.Cr(2);this.Aa4.AV(0x3);
this.Aa4.G(AGZ);this.Aa4.L(A.jb.Ads);this.Aa4.Cr(1);this.Aa3.AV(0x3);this.Aa3.G(
AGZ);this.Aa3.L(A.jb.Text);this.Aa3.Cr(0);this.Qk.AV(0x14);this.Qk.G(BpP);this.Qk.
L(0xFF020202);this.Qk.Y(false);this.J(this.Aa5,0);this.J(this.Aa4,0);this.J(this.
Aa3,0);this.J(this.Qk,0);this.Aa5.Ax(A.aaL(A.ach.Aqa));this.Aa4.Ax(A.aaL(A.ach.Aqa
));this.Aa3.Ax(A.aaL(A.ach.Aqa));this.Qk.S(A.aaL(A.fl.Ak));},_Done:function(){this.
__proto__=A.Core.O;this.Aa5._Done();this.Aa4._Done();this.Aa3._Done();this.Qk._Done(
);this.CountryToString._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.Aa5._ReInit();this.Aa4._ReInit();this.Aa3._ReInit(
);this.Qk._ReInit();this.CountryToString._ReInit();this.Qk.S(A.aaL(A.fl.Ak));this.
CT();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Aa5)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aa4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aa3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qk)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"
};C.ArO={Transponder:0,BB1:1,BB2:2};C.ANr={Am:null,C5:function(E){C.BN.C5.call(this
,E);this.Am.L(E);},_Init:function(aArg){C.BN._Init.call(this,aArg);A.acg.Am._Init.
call(this.Am={I:this},0);this.__proto__=C.ANr;this.Am.G(AGU);this.J(this.Am,0);this.
Am.Ax(A.aaL(A.ach.ANi));},_Done:function(){this.__proto__=C.BN;this.Am._Done();C.
BN._Done.call(this);},_ReInit:function(){C.BN._ReInit.call(this);this.Am._ReInit(
);},_Mark:function(D){var B;C.BN._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={
Jb:0,ZY:4,Alk:function(H){C.QP.Alk.call(this,H);if(A._GetAutoObject(A.Device.Helper
).BaQ()){this.Jb=A._GetAutoObject(A.Device.Helper).T2.Id;var AhQ=A._GetAutoObject(
A.Device.Helper).A40(this.Jb,A._GetAutoObject(A.Device.Helper).X);if(AhQ){A._GetAutoObject(
A.Device.Device).A6(21,true,A._GetAutoObject(A.Device.Converter).Ub(this.Jb),0,[
this,this.UM]);return;}AhQ=A._GetAutoObject(A.Device.Helper).Bgt(this.Jb,A._GetAutoObject(
A.Device.Helper).X);if(AhQ&&(A._GetAutoObject(A.Device.Helper).X.TransponderId!==
this.Jb)){A._GetAutoObject(A.Device.Device).A6(25,true,A._GetAutoObject(A.Device.
Converter).Ub(this.Jb),0,[this,this.UM]);return;}this.ZY=A._GetAutoObject(A.Device.
Helper).APa(this.Jb);switch(this.ZY){case 0:A._GetAutoObject(A.Device.Device).A6(
45,true,this.Jb.toFixed().length.toFixed(),0,[this,this.UM]);break;case 1:case 2:{
var BJ=A._GetAutoObject(A.Device.Converter).Awu(this.Jb);A._GetAutoObject(A.Device.
Device).A6(46,true,BJ.toFixed(),0,[this,this.UM]);}break;case 3:this.Bc6();break;
default:throw new Error(AGw+this.ZY.toFixed());}}},Ed:function(H){A._GetAutoObject(
C.AZ).Fk();},UM:function(H){var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null
);if(!!At)switch(At.PopupState){case 4:if(this.ZY===2)this.Bc6();else A._GetAutoObject(
A.Device.Device).AeC();break;case 5:this.Ed(this);break;default:;}},Bc6:function(
){A._GetAutoObject(A.Device.Helper).X.M3(this.Jb);if(!A._GetAutoObject(A.Device.
Helper).X.TransponderId)A._GetAutoObject(A.Device.Helper).X.M4(this.Jb);A._GetAutoObject(
A.Device.Helper).X.Co(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.
Device).A6(68,true,A._GetAutoObject(A.Device.Helper).X.VisualId.toFixed(),0,null
);this.Ed(this);},_Init:function(aArg){C.QP._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.Y(true);this.Dp(C.Ix);this.Number.Q(A.aaR(A.acf.A8v
));this.I5.G(BpQ);this.IG.G(BpR);this.Aj1(1);this.N.Cu=[this,this.Ed];this.N.CS(
A.aaL(A.ach.ET));},_ReInit:function(){C.QP._ReInit.call(this);this.Number.Q(A.aaR(
A.acf.A8v));},_className:"Application::SetSaveNaisIdScreen"};C.AL4={Lz:function(
H){C.ApN.Lz.call(this,H);A.pe([this,this.BxY],this);},BxY:function(H){this.LA(this.
Fm);},_Init:function(aArg){C.ApN._Init.call(this,aArg);this.__proto__=C.AL4;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.Uh={Animal:null,WhereAboutsToString:
null,Gx:function(aIndex){return this.WhereAboutsToString.B0(this.C$(aIndex));},Av:
function(E){C.Ds.Av.call(this,E);if(!!this.Animal)this.Animal.M5(E);},A16:function(
H){if(!!this.Animal)this.R=this.Animal.WhereAbouts;else this.R=0;A.abo([this,this.
Ce,this.Cg],0);},LO:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.z$([this,this.A16],[B=this.Animal,B.Avc,B.M5],0);this.Animal=E;if(!!this.Animal
)A.zX([this,this.A16],[B=this.Animal,B.Avc,B.M5],0);A.pe([this,this.A16],this);}
,_Init:function(aArg){C.Ds._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.Uh;this.Cv.Set(0,1);this.
Cv.Set(1,2);this.Cv.Set(2,3);this.Cv.Set(3,4);this.Cv.Set(4,5);},_Done:function(
){this.__proto__=C.Ds;this.WhereAboutsToString._Done();C.Ds._Done.call(this);},_ReInit:
function(){C.Ds._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Ds._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.Ui={Dt:function(){return 6;},_Init:function(aArg){C.Uh._Init.call(this,aArg);
this.__proto__=C.Ui;this.Cv.Set(0,0);this.Cv.Set(1,1);this.Cv.Set(2,2);this.Cv.Set(
3,3);this.Cv.Set(4,4);this.Cv.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.Ab5={Dt:function(){return 5;},_Init:function(aArg){C.Uh._Init.call(this,aArg
);this.__proto__=C.Ab5;this.Cv.Set(0,6);this.Cv.Set(1,7);this.Cv.Set(2,8);this.Cv.
Set(3,9);this.Cv.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.Adc={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.A$A],[B=A._GetAutoObject(A.Device.
Device),B.AQh,B.AXJ],0);A.pe([this,this.A$A],this);},Dt:function(){return 2;},C$:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},Gx:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.AnimalIdAutoGenerationMethodToString.
B0(aIndex);},DO:function(A1){return A1;},Hj:function(){return 1;},Av:function(E){
C.AB.Av.call(this,E);A._GetAutoObject(A.Device.Device).Avf(E);},A$A:function(H){
this.R=A._GetAutoObject(A.Device.Device).AfM;A.abo([this,this.Ce,this.Cg],0);},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.Adc;this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AB._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.AEW={Ft:null
,Ep:null,EartagNrAssignmentMode:null,E$:null,EZ:null,Hw:null,A0:null,J4:null,MV:
null,A3:0,AK:0,Init:function(aArg){},Ai:function(Ae){C.D8.Ai.call(this,Ae);if(this.
A3===1){if(this.G8){this.A0.Fz(A.jb.CM);this.Hw.C1(A.jb.CM);this.Background.L(A.
jb.C0);this.V.L(A.jb.Text);}else{this.A0.Fz(A.jb.C0);this.Hw.C1(A.jb.C0);this.Background.
L(A.jb.CM);this.V.L(A.jb.Text);}}else{if(this.G8){this.A0.Fz(A.jb.CM);this.Hw.C1(
A.jb.CM);}else{this.A0.Fz(A.jb.C0);this.Hw.C1(A.jb.C0);}this.Ba(null);}this.MV.L(
this.V.AP);},Ja:function(H){C.D8.Ja.call(this,H);if(!this.A3)this.Ge(this);else this.
G0(this);},DM:function(H){var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.
N,F[1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.
N,F[1].call(F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(F[0])).Cm(null);(F=this.
N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=null;(F=this.N,F[1].call(
F[0])).C7(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=
null;}break;default:this.Ft.Aj$((F=this.N,F[1].call(F[0])));}},Ge:function(H){this.
Em(1);},G0:function(H){this.Em(0);},Em:function(EB){var F;if(!this.A3&&!!this.N)
this.Ft.AiU((F=this.N,F[1].call(F[0])));this.A3=EB;if(this.A3<0)this.A3=0;else if(
this.A3>1)this.A3=1;switch(this.A3){case 0:this.Ba(null);break;case 1:{this.Ba(this.
A0);if(!this.AK)this.A0.Sl(2);else this.A0.Sl(7);}break;default:throw new Error(
Asg+this.A3.toFixed());}this.DM(this);this.An();},Bx:function(E){if(this.AK===E)
return;this.AK=E;},N9:function(H){this.AzH(2);},MI:function(H){this.AzH(7);},AzH:
function(GF){var B;var Ax8=(A.Core.O.isPrototypeOf(B=this.AY)?B:null);if(!!Ax8){
var AyV=(A.Core.O.isPrototypeOf(B=this.RT(Ax8,GF,0x15))?B:null);if(!!AyV){this.Ba(
AyV);return true;}}return false;},Afh:function(H){var F;if(!this.Ep||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.MV.Ax(
A._GetAutoObject(A.Device.Converter).Amb(2));break;case 1:this.MV.Ax(A._GetAutoObject(
A.Device.Converter).Amb((F=this.Ep,F[1].call(F[0]))));break;default:throw new Error(
A9S+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.pe([this,this.
A1D],this);},A1D:function(H){var B;var F;if(!this.Ep||!this.EartagNrAssignmentMode
){this.J4.Aea(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]
))){case 0:{this.A0.Av([B=A._GetAutoObject(A.Device.Device),B.AmL,B.AnP]);this.J4.
Aea([B=A._GetAutoObject(A.Device.Device),B.ACY,B.AG6]);}break;case 1:switch((F=this.
Ep,F[1].call(F[0]))){case 1:{this.A0.Av([B=A._GetAutoObject(A.Device.Device),B.Au6
,B.Axo]);this.J4.Aea([B=A._GetAutoObject(A.Device.Device),B.AQn,B.AXM]);}break;case
0:{this.A0.Av([B=A._GetAutoObject(A.Device.Device),B.Au7,B.Axp]);this.J4.Aea([B=
A._GetAutoObject(A.Device.Device),B.AQo,B.AXN]);}break;case 2:{this.A0.Av([B=A._GetAutoObject(
A.Device.Device),B.AmL,B.AnP]);this.J4.Aea([B=A._GetAutoObject(A.Device.Device),
B.ACY,B.AG6]);}break;default:throw new Error(BpS+(F=this.Ep,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(A9S+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},TQ:function(E){if(A.aaZ(this.Ep,E))return;if(!!this.Ep)A.z$([
this,this.Afh],this.Ep,0);this.Ep=E;if(!!E)A.zX([this,this.Afh],this.Ep,0);if(!!
E)A.pe([this,this.Afh],this);},AjP:function(E){if(A.aaZ(this.EartagNrAssignmentMode
,E))return;if(!!this.EartagNrAssignmentMode)A.z$([this,this.Afh],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.zX([this,this.Afh],this.EartagNrAssignmentMode
,0);if(!!E)A.pe([this,this.Afh],this);},TN:function(){return this.AK;},_Init:function(
aArg){C.D8._Init.call(this,aArg);A.Core.BO._Init.call(this.E$={I:this},0);A.Core.
BO._Init.call(this.EZ={I:this},0);C.Aqb._Init.call(this.Hw={I:this},0);C.AuM._Init.
call(this.A0={I:this},0);C.AtZ._Init.call(this.J4={I:this},0);A.acg.Am._Init.call(
this.MV={I:this},0);this.__proto__=C.AEW;var B;this.G(Uq);this.V.Ar(false);this.
V.Q(Asa);this.V.L(A.jb.Bh);this.E$.Filter=6;this.EZ.Filter=7;this.Hw.G(BpT);this.
A0.G(BpU);this.MV.G(BpV);this.J(this.Hw,0);this.J(this.A0,0);this.J(this.MV,0);this.
Ft=A._NewObject(C.AdK,0);this.E$.BP=[this,this.N9];this.EZ.BP=[this,this.MI];this.
Hw.CN(this.J4);this.Hw.Av([B=this.J4,B.Ce,B.Cg]);this.A0.Av([this,this.TN,this.Bx
]);this.Init(aArg);},_Done:function(){this.__proto__=C.D8;this.E$._Done();this.EZ.
_Done();this.Hw._Done();this.A0._Done();this.J4._Done();this.MV._Done();C.D8._Done.
call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.E$._ReInit();this.EZ.
_ReInit();this.Hw._ReInit();this.A0._ReInit();this.J4._ReInit();this.MV._ReInit(
);},_Mark:function(D){var B;C.D8._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ep)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
E$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Hw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A0)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.J4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MV)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.ALS={VQ:
null,YC:null,Yy:null,TH:null,Init:function(aArg){this.Ba(this.VQ);},ACR:function(
H){var Bbb=(C.AmB.isPrototypeOf(H)?H:null);if(!!Bbb)A._GetAutoObject(A.Device.Device
).A6(Bbb.AcV,true,A.jV,0,null);},Dr:function(H){if((this.Cl.CH===7)&&(this.AY===
this.TH))A._GetAutoObject(A.Device.Device).A6(10,true,A.jV,0,null);else if((this.
Cl.CH===6)&&(this.AY===this.TH))A._GetAutoObject(C.AZ).BZ(103);C.Hh.Dr.call(this
,H);},_Init:function(aArg){C.Hh._Init.call(this,aArg);C.AmB._Init.call(this.VQ={
I:this},0);C.AmB._Init.call(this.YC={I:this},0);C.AmB._Init.call(this.Yy={I:this
},0);C.AmB._Init.call(this.TH={I:this},0);this.__proto__=C.ALS;this.Dp(C.AM8);this.
VQ.G(KL);this.VQ.Aj(true);this.VQ.U(A.aaR(A.acf.AgZ));this.VQ.Bf(false);this.VQ.
AcV=79;this.YC.G(Q2);this.YC.Aj(true);this.YC.U(A.aaR(A.acf.A8P));this.YC.Bf(true
);this.YC.AcV=77;this.Yy.G(WE);this.Yy.Aj(true);this.Yy.U(A.aaR(A.acf.A4y));this.
Yy.Bf(false);this.Yy.AcV=78;this.TH.G(Aky);this.TH.Aj(true);this.TH.U(A.aaR(A.acf.
About));this.TH.Bf(true);this.TH.AcV=3;this.J(this.VQ,0);this.J(this.YC,0);this.
J(this.Yy,0);this.J(this.TH,0);this.VQ.AQ=[this,this.ACR];this.YC.AQ=[this,this.
ACR];this.Yy.AQ=[this,this.ACR];this.TH.AQ=[this,this.ACR];this.Init(aArg);},_Done:
function(){this.__proto__=C.Hh;this.VQ._Done();this.YC._Done();this.Yy._Done();this.
TH._Done();C.Hh._Done.call(this);},_ReInit:function(){C.Hh._ReInit.call(this);this.
VQ._ReInit();this.YC._ReInit();this.Yy._ReInit();this.TH._ReInit();this.VQ.U(A.aaR(
A.acf.AgZ));this.YC.U(A.aaR(A.acf.A8P));this.Yy.U(A.aaR(A.acf.A4y));this.TH.U(A.
aaR(A.acf.About));},_Mark:function(D){var B;C.Hh._Mark.call(this,D);if((B=this.VQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YC)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Yy)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TH)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceInfoScreen"};C.AM8={_Init:function(aArg){C.Oo.
_Init.call(this,aArg);this.__proto__=C.AM8;this.Text.Q(A.acf.Info);},_className:
"Application::HeaderDeviceInfoMenu"};C.ALR={Aln:null,Yv:null,Abb:null,Aa$:null,TL:
null,FactoryResetScope:null,Init:function(aArg){this.Ba(this.Yv);A.pe([this,this.
DM],this);},BbM:function(H){var B;var AyE=A._GetAutoObject(A.Device.Device).ACi(
);switch(AyE){case 1:A._GetAutoObject(A.Device.Device).A6(84,true,A.jV,0,null);break;
case 0:A._GetAutoObject(A.Device.Device).A6(92,true,ZA,0,[this,this.Bb5]);break;
case 2:{this.Aln=[this,this.BbM];A.zX([this,this.Aft],[B=A._GetAutoObject(A.Device.
Device),B.Abl,B.Acd],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this
,this.Alh]);}break;default:throw new Error(A9T+AyE.toFixed());}},Alh:function(H){
var B;var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===
5)){A.z$([this,this.Aft],[B=A._GetAutoObject(A.Device.Device),B.Abl,B.Acd],0);this.
Aln=null;}},Aft:function(H){var B;if(A._GetAutoObject(A.Device.Device).Akq===3){
A._GetAutoObject(A.Device.Device).A6(74,false,A.jV,0,[this,this.Alh]);A.z$([this
,this.Aft],[B=A._GetAutoObject(A.Device.Device),B.Abl,B.Acd],0);if(!!this.Aln)A.
pe(this.Aln,this);this.Aln=null;}},Bb7:function(H){var B;var AyE=A._GetAutoObject(
A.Device.Device).ACj();switch(AyE){case 1:A._GetAutoObject(A.Device.Device).A6(84
,true,A.jV,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A6(96,true,A.jV
,0,[this,this.Bwv]);break;case 2:{this.Aln=[this,this.Bb7];A.zX([this,this.Aft],[
B=A._GetAutoObject(A.Device.Device),B.Abl,B.Acd],0);A._GetAutoObject(A.Device.Device
).A6(74,true,A.jV,0,[this,this.Alh]);}break;case 3:A._GetAutoObject(A.Device.Device
).A6(95,true,A.jV,0,null);break;case 4:A._GetAutoObject(A.Device.Device).A6(94,true
,A.jV,0,null);break;default:throw new Error(A9T+AyE.toFixed());}},Bhe:function(H
){switch(this.FactoryResetScope.C$(this.FactoryResetScope.R)){case 1:A._GetAutoObject(
A.Device.Device).A6(33,true,A.jV,0,[this,this.BcU]);break;case 0:A._GetAutoObject(
A.Device.Device).A6(7,true,A.jV,0,[this,this.BcU]);break;default:A.ab5("%s%i",BpW
,this.FactoryResetScope.R);}},BcU:function(H){var At=(A.Device.PopupContext.isPrototypeOf(
H)?H:null);if(!!At&&(At.PopupState===7))switch(At.Id){case 7:{A._GetAutoObject(A.
Device.Device).Bk$();A._GetAutoObject(A.Device.Device).A6(8,true,A.jV,0,null);A.
_GetAutoObject(C.AZ).BZ(38);}break;case 33:{A._GetAutoObject(A.Device.Helper).Bk_(
);A._GetAutoObject(A.Device.Device).AqS(0);A._GetAutoObject(A.Device.Device).AqT(
0);A._GetAutoObject(A.Device.Device).AqU(0);A._GetAutoObject(A.Device.Device).AqW(
0);A._GetAutoObject(A.Device.Device).AqX(0);A._GetAutoObject(A.Device.Device).AqY(
0);A._GetAutoObject(A.Device.Device).TO(5);A._GetAutoObject(A.Device.Device).Avs(
0);A._GetAutoObject(A.Device.Device).Avt(0);A._GetAutoObject(A.Device.Device).Avu(
0);A._GetAutoObject(A.Device.Device).AvH(1);A._GetAutoObject(A.Device.Device).AvI(
1);A._GetAutoObject(A.Device.Device).AvJ(1);A._GetAutoObject(A.Device.Device).A6(
34,true,A.jV,0,null);}break;default:A.ab5("%s%e",AGx,At.Id);}},BbN:function(H){var
B;if(!A._GetAutoObject(A.Device.Device).Aq.Ch()){A._GetAutoObject(A.Device.Device
).A6(30,true,A.jV,0,null);return;}if(A._GetAutoObject(A.Device.Device).Aqg()===false
){this.Aln=[this,this.BbN];A.zX([this,this.Aft],[B=A._GetAutoObject(A.Device.Device
),B.Abl,B.Acd],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.jV,0,[this,this.
Alh]);return;}var Afg=A._GetAutoObject(A.Device.Device).Ane(1);if(Afg.Anh)A._GetAutoObject(
A.Device.Device).ApI(Afg);else A._GetAutoObject(A.Device.Device).A6(88,true,A.jV
,0,null);},Bb5:function(H){var At=(A.Device.PopupContext.isPrototypeOf(H)?H:null
);switch(At.Id){case 92:if(At.PopupState===9)A.aaS([this,this.Bva],this);break;case
93:if(At.PopupState===9)A.aaS([this,this.Bvc],this);break;default:throw new Error(
BpX+At.Id.toFixed());}},Bva:function(H){if(A._GetAutoObject(A.Device.Device).AAQ(
)){var A0x=A._GetAutoObject(A.Device.Device).Aq.Qm();A._GetAutoObject(A.Device.Device
).A6(80,true,A0x.toFixed(),0,null);}else A._GetAutoObject(A.Device.Device).A6(82
,true,A.jV,0,null);A.aaS([this,this.Bwr],this);},Bvc:function(H){if(A._GetAutoObject(
A.Device.Device).AEK()){var A0x=A._GetAutoObject(A.Device.Device).Aq.Qm();A._GetAutoObject(
A.Device.Device).A6(81,true,A0x.toFixed(),0,null);}else A._GetAutoObject(A.Device.
Device).A6(83,true,A.jV,0,null);A.aaS([this,this.Bw5],this);},Bwv:function(H){var
At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!At&&(At.PopupState===7))
A.pe([this,this.Bx$],this);},Bx$:function(H){A._GetAutoObject(A.Device.Device).A6(
93,true,ZA,0,[this,this.Bb5]);},Bw5:function(H){A._GetAutoObject(A.Device.Device
).A6(93,false,A.jV,0,null);},Bwr:function(H){A._GetAutoObject(A.Device.Device).A6(
92,false,A.jV,0,null);},_Init:function(aArg){C.Hh._Init.call(this,aArg);C.Cd._Init.
call(this.Yv={I:this},0);C.Cd._Init.call(this.Abb={I:this},0);C.Cd._Init.call(this.
Aa$={I:this},0);C.B_._Init.call(this.TL={I:this},0);C.FactoryResetScope._Init.call(
this.FactoryResetScope={I:this},0);this.__proto__=C.ALR;var B;this.Dp(C.AM7);this.
Yv.G(KL);this.Yv.Aj(true);this.Yv.U(A.aaR(A.acf.AAQ));this.Yv.Bf(false);this.Abb.
G(Q2);this.Abb.Aj(true);this.Abb.U(A.aaR(A.acf.AEK));this.Abb.Bf(true);this.Aa$.
G(WE);this.Aa$.Aj(true);this.Aa$.U(A.aaR(A.acf.A34));this.Aa$.Bf(false);this.TL.
G(BpY);this.TL.Aj(true);this.TL.Biz(true);this.TL.U(A.aaR(A.acf.A35));this.TL.Bf(
true);this.J(this.Yv,0);this.J(this.Abb,0);this.J(this.Aa$,0);this.J(this.TL,0);
this.Yv.AQ=[this,this.BbM];this.Abb.AQ=[this,this.Bb7];this.Aa$.AQ=[this,this.BbN
];this.TL.AQ=[this,this.Bhe];this.TL.Av([B=this.FactoryResetScope,B.Ce,B.Cg]);this.
TL.CN(this.FactoryResetScope);this.Init(aArg);},_Done:function(){this.__proto__=
C.Hh;this.Yv._Done();this.Abb._Done();this.Aa$._Done();this.TL._Done();this.FactoryResetScope.
_Done();C.Hh._Done.call(this);},_ReInit:function(){C.Hh._ReInit.call(this);this.
Yv._ReInit();this.Abb._ReInit();this.Aa$._ReInit();this.TL._ReInit();this.FactoryResetScope.
_ReInit();this.Yv.U(A.aaR(A.acf.AAQ));this.Abb.U(A.aaR(A.acf.AEK));this.Aa$.U(A.
aaR(A.acf.A34));this.TL.U(A.aaR(A.acf.A35));},_Mark:function(D){var B;C.Hh._Mark.
call(this,D);if((B=this.Aln)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Yv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Abb)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Aa$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TL)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.FactoryResetScope)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DeviceDataManagementScreen"};C.AM7={_Init:function(aArg){C.Oo._Init.
call(this,aArg);this.__proto__=C.AM7;this.Text.Q(A.aaR(A.acf.AAX));},_ReInit:function(
){C.Oo._ReInit.call(this);this.Text.Q(A.aaR(A.acf.AAX));},_className:"Application::HeaderDeviceDatamanagementMenu"
};C.Ajg={Qw:null,VG:null,_Init:function(aArg){C.Tt._Init.call(this,aArg);C.CP._Init.
call(this.Qw={I:this},0);C.CP._Init.call(this.VG={I:this},0);this.__proto__=C.Ajg;
this.Qw.G(BpZ);this.Qw.Q(A.aaR(A.acf.A8G));this.Qw.A2(0x12);this.Qw.L(A.jb.Text);
this.VG.G(A9L);this.VG.Q(A.aaR(A.acf.Anm));this.VG.L(A.jb.Text);this.J(this.Qw,0
);this.J(this.VG,0);this.Qw.S(A.aaL(A.fl.Ah));this.Qw.A5(A.aaL(A.fl.Ak));this.Qw.
CC(A.aaL(A.fl.By));this.VG.S(A.aaL(A.fl.Ah));this.VG.A5(A.aaL(A.fl.Ak));},_Done:
function(){this.__proto__=C.Tt;this.Qw._Done();this.VG._Done();C.Tt._Done.call(this
);},_ReInit:function(){C.Tt._ReInit.call(this);this.Qw._ReInit();this.VG._ReInit(
);this.Qw.Q(A.aaR(A.acf.A8G));this.VG.Q(A.aaR(A.acf.Anm));this.Qw.S(A.aaL(A.fl.Ah
));this.Qw.A5(A.aaL(A.fl.Ak));this.Qw.CC(A.aaL(A.fl.By));this.VG.S(A.aaL(A.fl.Ah
));this.VG.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Tt._Mark.call(this,D);
if((B=this.Qw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.VG)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdAnimalInfosGenderType"};C.ANB={Qx:
null,_Init:function(aArg){C.Tt._Init.call(this,aArg);C.CP._Init.call(this.Qx={I:
this},0);this.__proto__=C.ANB;this.Qx.G(Bp0);this.Qx.Q(A.aaR(A.acf.YH));this.Qx.
A2(0x12);this.Qx.L(A.jb.Text);this.J(this.Qx,0);this.Qx.S(A.aaL(A.fl.Ah));this.Qx.
A5(A.aaL(A.fl.Ak));this.Qx.CC(A.aaL(A.fl.By));},_Done:function(){this.__proto__=
C.Tt;this.Qx._Done();C.Tt._Done.call(this);},_ReInit:function(){C.Tt._ReInit.call(
this);this.Qx._ReInit();this.Qx.Q(A.aaR(A.acf.YH));this.Qx.S(A.aaL(A.fl.Ah));this.
Qx.A5(A.aaL(A.fl.Ak));this.Qx.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.Tt.
_Mark.call(this,D);if((B=this.Qx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.AiV={Iy:null,AaS:null,D4:null,Bg:function(aSize){C.MO.Bg.call(this,aSize);this.
Iy.G([this.Gj.M[2],0,this.Gj.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.D4.G([
this.Iy.M[2]-1,0,this.Iy.M[2]+1,aSize[1]]);this.AaS.G([this.Iy.M[2],0,aSize[0],aSize[
1]]);},Ai:function(Ae){C.MO.Ai.call(this,Ae);this.AaS.L(this.Gj.AP);this.Iy.L(this.
Gj.AP);},B$:function(Ac){C.MO.B$.call(this,Ac);if(!this.AW)return;this.Hr=Ac;if(
!!this.AW){var H4=this.AW.Amc(Ac,14);var AsM=this.AW.AMP(Ac,7);this.Iy.Ax(A._GetAutoObject(
A.Device.Converter).Amb(AsM));this.AaS.Ax(A._GetAutoObject(A.Device.Converter).A2y(
H4));this.An();}},_Init:function(aArg){C.MO._Init.call(this,aArg);A.acg.Am._Init.
call(this.Iy={I:this},0);A.acg.Am._Init.call(this.AaS={I:this},0);A.acg.AI._Init.
call(this.D4={I:this},0);this.__proto__=C.AiV;this.Iy.G(A9O);this.Iy.L(A.jb.Text
);this.AaS.G(Bp1);this.AaS.L(A.jb.Text);this.D4.G(Bp2);this.D4.L(A.jb.Bb);this.J(
this.Iy,0);this.J(this.AaS,0);this.J(this.D4,0);this.Iy.Ax(A.aaL(A.aci.Tl));this.
AaS.Ax(A.aaL(A.aci.Tl));},_Done:function(){this.__proto__=C.MO;this.Iy._Done();this.
AaS._Done();this.D4._Done();C.MO._Done.call(this);},_ReInit:function(){C.MO._ReInit.
call(this);this.Iy._ReInit();this.AaS._ReInit();this.D4._ReInit();},_Mark:function(
D){var B;C.MO._Mark.call(this,D);if((B=this.Iy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.ALa={Y_:null
,Bg:function(aSize){C.MO.Bg.call(this,aSize);this.Y_.G([this.Gj.M[2],0,aSize[0],
aSize[1]]);},Ai:function(Ae){C.MO.Ai.call(this,Ae);this.Y_.L(this.Gj.AP);},B$:function(
Ac){C.MO.B$.call(this,Ac);if(!this.AW)return;this.Hr=Ac;if(!!this.AW){var Nh=this.
AW.LE(Ac,26);if(Nh>0)this.Y_.Q(A.ab2(Nh.toFixed(),5));else this.Y_.Q(Q3);this.An(
);}},_Init:function(aArg){C.MO._Init.call(this,aArg);A.acg.Text._Init.call(this.
Y_={I:this},0);this.__proto__=C.ALa;this.Y_.G(Bp3);this.J(this.Y_,0);this.Y_.S(A.
aaL(A.fl.Ah));},_Done:function(){this.__proto__=C.MO;this.Y_._Done();C.MO._Done.
call(this);},_ReInit:function(){C.MO._ReInit.call(this);this.Y_._ReInit();this.Y_.
S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;C.MO._Mark.call(this,D);if((B=this.Y_
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"
};C.APM={Am:null,Ai:function(Ae){C.Ad9.Ai.call(this,Ae);this.Am.L(this.Text.AP);
},_Init:function(aArg){C.Ad9._Init.call(this,aArg);A.acg.Am._Init.call(this.Am={
I:this},0);this.__proto__=C.APM;this.Text.G(Bp4);this.Am.G(A9I);this.J(this.Am,0
);this.Am.Ax(A.aaL(A.ach.Aep));},_Done:function(){this.__proto__=C.Ad9;this.Am._Done(
);C.Ad9._Done.call(this);},_ReInit:function(){C.Ad9._ReInit.call(this);this.Am._ReInit(
);},_Mark:function(D){var B;C.Ad9._Mark.call(this,D);if((B=this.Am)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::NaisIDReadonlyElectronic"};C.Vq={Text:
null,Da:null,AN:null,Tv:null,DY:null,A8:null,Init:function(aArg){var B;A.zX([this
,this.M_],[B=A._GetAutoObject(A.Device.Device),B.ACU,B.AG3],0);A.zV([this,this.M_
],A._GetAutoObject(A.Device.Device).Aq,0);A.pe([this,this.M_],this);},C5:function(
E){C.BN.C5.call(this,E);this.Da.L(E);this.Text.L(E);this.Tv.L(E);this.DY.AjS(E);
},Abo:function(E){C.BN.Abo.call(this,E);this.DY.C1(E);},En:function(H){this.DY.U(
A._GetAutoObject(A.Device.Device).Aq.Ch().toFixed());},M_:function(s){this.En(s);
},_Init:function(aArg){C.BN._Init.call(this,aArg);C.CP._Init.call(this.Text={I:this
},0);A.acg.Am._Init.call(this.Da={I:this},0);A.acg.DQ._Init.call(this.AN={I:this
},0);A.acg.Am._Init.call(this.Tv={I:this},0);C.DY._Init.call(this.DY={I:this},0);
A.acg.DQ._Init.call(this.A8={I:this},0);this.__proto__=C.Vq;this.Text.G(Bp5);this.
Text.A2(0x11);this.Da.G(Axe);this.AN.DJ(A9G);this.AN.DX(A9H);this.AN.L(A.jb.Bb);
this.Tv.G(Bp6);this.Tv.L(A.jb.C0);this.DY.AV(0x14);this.DY.G(Bp7);this.DY.AjS(A.
jb.Bh);this.DY.C1(A.jb.AbX);this.DY.HF(2);this.A8.DJ(Bp8);this.A8.DX(Bp9);this.A8.
L(A.jb.Bb);this.J(this.Text,0);this.J(this.Da,0);this.J(this.AN,0);this.J(this.Tv
,0);this.J(this.DY,0);this.J(this.A8,0);this.Text.S(A.aaL(A.fl.Ah));this.Text.A5(
A.aaL(A.fl.Ak));this.Da.Ax(A.aaL(A.ach.Ajj));this.Tv.Ax(A.aaL(A.ach.Tv));this.DY.
S(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(){this.__proto__=C.BN;this.Text.
_Done();this.Da._Done();this.AN._Done();this.Tv._Done();this.DY._Done();this.A8.
_Done();C.BN._Done.call(this);},_ReInit:function(){C.BN._ReInit.call(this);this.
Text._ReInit();this.Da._ReInit();this.AN._ReInit();this.Tv._ReInit();this.DY._ReInit(
);this.A8._ReInit();this.Text.S(A.aaL(A.fl.Ah));this.Text.A5(A.aaL(A.fl.Ak));this.
DY.S(A.aaL(A.fl.By));},_Mark:function(D){var B;C.BN._Mark.call(this,D);if((B=this.
Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Da)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tv)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.DY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A8)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"};C.AbM={Ft:null
,JJ:null,JI:null,Aj8:null,Aj9:null,QK:null,Qj:null,AaR:null,Vs:null,Pq:null,Pr:null
,R9:null,Gg:null,Gh:null,Jk:null,Ak4:0,Ak9:0,DZ:0,DL:0,A3:0,Bg:function(aSize){var
B;this.Dn.G([this.Hl.M[2]-10,this.Hl.M[1],this.HU.M[0]+10,this.Hl.M[3]]);this.Dn.
ADC((B=this.Dn.M)[2]-B[0]);this.Dn.Hx(this.Dn.Gb,true,null,null);},Ai:function(Ae
){var B;C.B_.Ai.call(this,Ae);var Fg=((Ae&0x20)===0x20);var Gm=this.Bk.Bw;if(!!this.
R)this.Hu(this);if((this.A3===1)||(this.A3===2)){var AYP=this.AZN(this.A3);if(!!
AYP){this.AaR.Y(true);this.AaR.G(AYP.M);this.AaR.L(this.V.AP);this.Vs.Y(true);this.
Vs.G(AYP.M);}else{this.AaR.Y(false);this.Vs.Y(false);}this.Hl.Y(false);this.HU.Y(
false);}else{this.AaR.Y(false);this.Vs.Y(false);this.Hl.Y(Fg||Gm);this.HU.Y(Fg||
Gm);}},P7:function(H){if(!!this.R){if(this.Fr===1)A.pe([this,this.UD],this);else
if(this.Fr===4)A.pe([this,this.AX9],this);else if(this.Fr===5)A.pe([this,this.AX7
],this);}C.B_.P7.call(this,H);},JW:function(H){switch(this.A3){case 0:C.B_.JW.call(
this,H);break;case 2:break;default:this.Afs(this);}},JR:function(H){switch(this.
A3){case 0:C.B_.JR.call(this,H);break;default:this.AhI(this);}},AZj:function(H){
var F;if(this.A3===1){var BL=this.DZ;this.DZ=this.DZ-10;if(this.DZ<this.Ak9)this.
DZ=this.Ak9;if(this.DZ<A._GetAutoObject(A.Device.Device).Zj)this.DZ=A._GetAutoObject(
A.Device.Device).Zj;if(this.DL!==BL){if(!!this.JJ)(F=this.JJ,F[2].call(F[0],this.
DZ));A.abo(this.JJ,0);}}if(this.A3===2){var BL=this.DL;this.DL=this.DL-10;if(this.
DL<this.DZ)this.DL=this.DZ;if(this.DL!==BL){if(!!this.JI)(F=this.JI,F[2].call(F[
0],this.DL));A.abo(this.JI,0);}}this.DM(this);this.An();},AX7:function(s){this.AZj(
s);},Ali:function(H){this.Fr=5;this.An();if(this.Bk.Bw){A.pe([this,this.AX7],this
);this.Bk.Ar(false);}this.Bk.Ar(true);},AZX:function(H){var F;if(this.A3===1){var
BL=this.DZ;this.DZ=this.DZ+10;if(this.DZ>this.DL)this.DZ=this.DL;if(this.DZ!==BL
){if(!!this.JJ)(F=this.JJ,F[2].call(F[0],this.DZ));A.abo(this.JJ,0);}}if(this.A3===
2){var BL=this.DL;this.DL=this.DL+10;if(this.DL>this.Ak4)this.DL=this.Ak4;if(this.
DL!==BL){if(!!this.JI)(F=this.JI,F[2].call(F[0],this.DL));A.abo(this.JI,0);}}this.
DM(this);this.An();},AX9:function(s){this.AZX(s);},Alj:function(H){this.Fr=4;this.
An();if(this.Bk.Bw){A.pe([this,this.AX9],this);this.Bk.Ar(false);}this.Bk.Ar(true
);return;},UD:function(H){this.Em(this.A3+1);},Afs:function(H){this.Fr=1;this.An(
);if(this.Bk.Bw){A.pe([this,this.UD],this);this.Bk.Ar(false);}this.Bk.Ar(true);}
,Hu:function(H){},AeZ:function(s){this.Hu(s);},DM:function(H){var F;if(!this.N)return;
switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N
,F[1].call(F[0])).Hm(A.jV);(F=this.N,F[1].call(F[0])).Cu=[this,this.G0];(F=this.
N,F[1].call(F[0])).Cm(null);(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(
F[0])).Cf=null;(F=this.N,F[1].call(F[0])).C7(A.aaL(A.ach.AdQ));(F=this.N,F[1].call(
F[0])).BU(A.jV);(F=this.N,F[1].call(F[0])).Ci=[this,this.UD];}break;case 2:{(F=this.
N,F[1].call(F[0])).CS(A.aaL(A.ach.ET));(F=this.N,F[1].call(F[0])).Hm(A.jV);(F=this.
N,F[1].call(F[0])).Cu=[this,this.G0];(F=this.N,F[1].call(F[0])).Cm(A.aaL(A.ach.Ami
));(F=this.N,F[1].call(F[0])).FA(A.jV);(F=this.N,F[1].call(F[0])).Cf=[this,this.
AhI];(F=this.N,F[1].call(F[0])).C7(null);(F=this.N,F[1].call(F[0])).BU(A.jV);(F=
this.N,F[1].call(F[0])).Ci=null;}break;default:this.Ft.Aj$((F=this.N,F[1].call(F[
0])));}},A7E:function(E){if(A.aaZ(this.JJ,E))return;if(!!this.JJ)A.z$([this,this.
A1d],this.JJ,0);this.JJ=E;if(!!this.JJ)A.zX([this,this.A1d],this.JJ,0);A.pe([this
,this.A1d],this);},A1d:function(H){var F;this.DZ=(F=this.JJ,F[1].call(F[0]));this.
An();},A7D:function(E){if(A.aaZ(this.JI,E))return;if(!!this.JI)A.z$([this,this.A1c
],this.JI,0);this.JI=E;if(!!this.JI)A.zX([this,this.A1c],this.JI,0);A.pe([this,this.
A1c],this);},A1c:function(H){var F;this.DL=(F=this.JI,F[1].call(F[0]));this.An();
},Ge:function(H){this.Em(1);},G0:function(H){this.Em(0);},Em:function(EB){var F;
if(!this.A3)this.Ft.AiU((F=this.N,F[1].call(F[0])));this.A3=EB;if((this.A3<0)||(
this.A3>2))this.A3=0;this.DM(this);this.Gh.Bw=!!this.A3;this.Gg.Bw=!!this.A3;this.
An();},AhI:function(H){if(this.A3>1)this.Em(this.A3-1);},A1r:function(H){},Axx:function(
s){this.A1r(s);},A03:function(H){},A_P:function(s){this.A03(s);},AZN:function(Aso
){return null;},_Init:function(aArg){C.B_._Init.call(this,aArg);A.acg.AI._Init.call(
this.Aj8={I:this},0);A.acg.AI._Init.call(this.Aj9={I:this},0);A.acg.AI._Init.call(
this.QK={I:this},0);A.acg.Am._Init.call(this.Qj={I:this},0);A.acg.AI._Init.call(
this.AaR={I:this},0);A.acg.Cy._Init.call(this.Vs={I:this},0);A.acg.Text._Init.call(
this.Pq={I:this},0);A.acg.Text._Init.call(this.Pr={I:this},0);A.acg.Text._Init.call(
this.R9={I:this},0);A.Core.BO._Init.call(this.Gg={I:this},0);A.Core.BO._Init.call(
this.Gh={I:this},0);A.Core.BO._Init.call(this.Jk={I:this},0);this.__proto__=C.AbM;
this.G(AeW);this.U(A.aaR(A.acf.Aqp));this.Background.G(AeW);this.V.G(BC);this.V.
Q(A.aaR(A.acf.AFg));this.V.A2(0x12);this.Aj8.G(Bp_);this.Aj8.L(A.jb.FU);this.Aj9.
G(Bp$);this.Aj9.L(A.jb.HY);this.QK.G(Bqa);this.QK.L(A.jb.EX);this.Qj.G(Bqb);this.
AaR.G(Bqc);this.Vs.G(Bqd);this.Vs.NJ(3);this.Vs.L(A.jb.AY);this.Vs.Y(false);this.
Pq.G(Bqe);this.Pq.HF(8);this.Pq.IZ(true);this.Pq.A2(0x11);this.Pq.L(0xFF000000);
this.Pr.G(Bqf);this.Pr.HF(8);this.Pr.IZ(true);this.Pr.A2(0x11);this.Pr.L(0xFF000000
);this.R9.G(Bqg);this.R9.IZ(false);this.R9.A2(0x12);this.R9.L(0xFF000000);this.Gg.
Filter=5;this.Gg.Bw=false;this.Gh.Filter=4;this.Gh.Bw=false;this.Jk.Filter=1;this.
Kh(this.V,-1);this.Kh(this.Dn,-2);this.J(this.Aj8,-1);this.J(this.Aj9,-1);this.J(
this.QK,-1);this.J(this.Qj,-1);this.J(this.AaR,-1);this.J(this.Vs,-1);this.J(this.
Pq,-1);this.J(this.Pr,0);this.J(this.R9,0);this.Qj.Ax(A.aaL(A.ach.ABZ));this.Pq.
S(A.aaL(A.fl.Ah));this.Pr.S(A.aaL(A.fl.Ah));this.R9.S(A.aaL(A.fl.Ak));this.Gg.BP=[
this,this.Ali];this.Gg.DR=[this,this.AX7];this.Gh.BP=[this,this.Alj];this.Gh.DR=[
this,this.AX9];this.Jk.BP=[this,this.Afs];this.Ft=A._NewObject(C.AdK,0);},_Done:
function(){this.__proto__=C.B_;this.Aj8._Done();this.Aj9._Done();this.QK._Done();
this.Qj._Done();this.AaR._Done();this.Vs._Done();this.Pq._Done();this.Pr._Done();
this.R9._Done();this.Gg._Done();this.Gh._Done();this.Jk._Done();C.B_._Done.call(
this);},_ReInit:function(){C.B_._ReInit.call(this);this.Aj8._ReInit();this.Aj9._ReInit(
);this.QK._ReInit();this.Qj._ReInit();this.AaR._ReInit();this.Vs._ReInit();this.
Pq._ReInit();this.Pr._ReInit();this.R9._ReInit();this.Gg._ReInit();this.Gh._ReInit(
);this.Jk._ReInit();this.U(A.aaR(A.acf.Aqp));this.V.Q(A.aaR(A.acf.AFg));this.Pq.
S(A.aaL(A.fl.Ah));this.Pr.S(A.aaL(A.fl.Ah));this.R9.S(A.aaL(A.fl.Ak));},_Mark:function(
D){var B;C.B_._Mark.call(this,D);if((B=this.Ft)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.JJ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.JI)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aj8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Aj9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AaR)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Vs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.R9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Gh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.G5={Xo:null,AbN:
null,Anq:0,Anr:0,Dt:function(){if(!this.Xo)return 0;return this.Xo.Mq;},C$:function(
aIndex){if(!this.Xo||(aIndex>=this.Xo.Mq))return-1;return this.Xo.Get(aIndex);},
Gx:function(aIndex){return this.AbN.B0(this.C$(aIndex));},DO:function(A1){if(!this.
Xo)return-1;return this.Xo.Auo(A1);},Hj:function(){if(!this.Xo)return-1;return this.
Xo.Hj();},Am3:function(E){if(this.Anq===E)return;this.Anq=E;A.pe([this,this.ATc]
,this);},AX3:function(Ap){this.Am3(Ap);},Am4:function(E){if(this.Anr===E)return;
this.Anr=E;A.pe([this,this.ATd],this);},AX4:function(Ap){this.Am4(Ap);},ATd:function(
H){A.abo([this,this.AQN,this.AX4],0);},ATc:function(H){A.abo([this,this.AQM,this.
AX3],0);},AQM:function(){return this.Anq;},AQN:function(){return this.Anr;},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.Device.AnimalTypeToString._Init.call(
this.AbN={I:this},0);this.__proto__=C.G5;},_Done:function(){this.__proto__=C.AB;
this.AbN._Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this
);this.AbN._ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.
Xo)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AbN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalThresholds"};C.AKI={Init:function(aArg){A.zV([
this,this.Bca],A._GetAutoObject(A.Device.Helper).T8,0);A.zV([this,this.Bb_],A._GetAutoObject(
A.Device.Helper).T7,0);this.Bca(this);this.Bb_(this);},Av:function(E){C.G5.Av.call(
this,E);this.Am4(A._GetAutoObject(A.Device.Helper).T8.Get(this.DO(E)));this.Am3(
A._GetAutoObject(A.Device.Helper).T7.Get(this.DO(E)));},Am3:function(E){if(this.
Anq===E)return;C.G5.Am3.call(this,E);A._GetAutoObject(A.Device.Helper).T7.Set(this.
DO(this.R),E);A._GetAutoObject(A.Device.Helper).T7.Co();},Am4:function(E){if(this.
Anr===E)return;C.G5.Am4.call(this,E);A._GetAutoObject(A.Device.Helper).T8.Set(this.
DO(this.R),E);A._GetAutoObject(A.Device.Helper).T8.Co();},Bca:function(H){this.Anr=
A._GetAutoObject(A.Device.Helper).T8.Get(this.DO(this.R));A.pe([this,this.ATd],this
);},Bb_:function(H){this.Anq=A._GetAutoObject(A.Device.Helper).T7.Get(this.DO(this.
R));A.pe([this,this.ATc],this);},_Init:function(aArg){C.G5._Init.call(this,aArg);
this.__proto__=C.AKI;this.Xo=A._GetAutoObject(A.Device.Helper).Adg;this.Init(aArg
);},_className:"Application::AnimalThresholdsTemperatures"};C.AKJ={AAs:0,AAr:0,Init:
function(aArg){A.zV([this,this.Bck],A._GetAutoObject(A.Device.Helper).AeP,0);A.zV([
this,this.Bci],A._GetAutoObject(A.Device.Helper).AeO,0);A.zV([this,this.Bcg],A._GetAutoObject(
A.Device.Helper).AeN,0);A.zV([this,this.Bcm],A._GetAutoObject(A.Device.Helper).AeQ
,0);this.Bck(this);this.Bci(this);this.Bcg(this);this.Bcm(this);},Av:function(E){
C.G5.Av.call(this,E);this.Am4(A._GetAutoObject(A.Device.Helper).AeP.Get(this.DO(
E)));this.Am3(A._GetAutoObject(A.Device.Helper).AeO.Get(this.DO(E)));this.AQR(A.
_GetAutoObject(A.Device.Helper).AeN.Get(this.DO(E)));this.AQS(A._GetAutoObject(A.
Device.Helper).AeQ.Get(this.DO(E)));},Am3:function(E){if(this.Anq===E)return;C.G5.
Am3.call(this,E);A._GetAutoObject(A.Device.Helper).AeO.Set(this.DO(this.R),E);A.
_GetAutoObject(A.Device.Helper).AeO.Co();},Am4:function(E){if(this.Anr===E)return;
C.G5.Am4.call(this,E);A._GetAutoObject(A.Device.Helper).AeP.Set(this.DO(this.R),
E);A._GetAutoObject(A.Device.Helper).AeP.Co();},Bck:function(H){this.Anr=A._GetAutoObject(
A.Device.Helper).AeP.Get(this.DO(this.R));A.pe([this,this.ATd],this);},Bci:function(
H){this.Anq=A._GetAutoObject(A.Device.Helper).AeO.Get(this.DO(this.R));A.pe([this
,this.ATc],this);},AQS:function(E){if(this.AAs===E)return;this.AAs=E;A._GetAutoObject(
A.Device.Helper).AeQ.Set(this.DO(this.R),E);A._GetAutoObject(A.Device.Helper).AeQ.
Co();A.pe([this,this.A8$],this);},AQR:function(E){if(this.AAr===E)return;this.AAr=
E;A._GetAutoObject(A.Device.Helper).AeN.Set(this.DO(this.R),E);A._GetAutoObject(
A.Device.Helper).AeN.Co();A.pe([this,this.A8_],this);},A8_:function(H){A.abo([this
,this.A58,this.AQR],0);},A8$:function(H){A.abo([this,this.A59,this.AQS],0);},Bcg:
function(H){this.AAr=A._GetAutoObject(A.Device.Helper).AeN.Get(this.DO(this.R));
A.pe([this,this.A8_],this);},Bcm:function(H){this.AAs=A._GetAutoObject(A.Device.
Helper).AeQ.Get(this.DO(this.R));A.pe([this,this.A8$],this);},A59:function(){return this.
AAs;},A58:function(){return this.AAr;},_Init:function(aArg){C.G5._Init.call(this
,aArg);this.__proto__=C.AKJ;this.Xo=A._GetAutoObject(A.Device.Helper).AfS;this.Init(
aArg);},_className:"Application::AnimalThresholdsWeightGain"};C.AKp={Ro:null,Init:
function(aArg){var B;A.zX([this,this.Ah6],[B=this.AnimalType,B.Ce,B.Cg],0);A.pe([
this,this.Ah6],this);this.Ba(this.Ro);},Bm:function(E){C.IS.Bm.call(this,E);this.
Ro.Bx(this.Je.AK);},Ah6:function(H){A._GetAutoObject(A.Device.Device).Avv(this.AnimalType.
R);},_Init:function(aArg){C.IS._Init.call(this,aArg);C.Tg._Init.call(this.Ro={I:
this},0);this.__proto__=C.AKp;var B;this.Je.Ar(false);this.Je.Aj(false);this.Je.
Y(false);this.Ro.G(AG0);this.Ro.Aj(true);this.Ro.M2(14);this.Ro.AgN(0);this.Ro.Ov(
0);this.J(this.Ro,-6);this.Ro.AQ=[this,this.Ay3];this.Ro.Av([B=this.AnimalType,B.
Ce,B.Cg]);this.Ro.CN(this.AnimalType);this.Init(aArg);},_Done:function(){this.__proto__=
C.IS;this.Ro._Done();C.IS._Done.call(this);},_ReInit:function(){C.IS._ReInit.call(
this);this.Ro._ReInit();},_Mark:function(D){var B;C.IS._Mark.call(this,D);if((B=
this.Ro)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.Tg={Filter:null,Eg:0,TableId:0,Operator:1,CT:function(){var F;this.S2((F=this.
Filter,F[1].call(F[0])).DW(this.Eg,this.Operator));},Bg:function(aSize){var B;C.
B_.Bg.call(this,aSize);this.V.G([10,0,((B=this.M)[2]-B[0])-10,40]);this.Hl.G(Aha
);this.HU.G([aSize[0]-40,40,aSize[0],80]);this.Dn.G([this.Hl.M[2]-5,this.Hl.M[1]
,this.HU.M[0]+5,this.Hl.M[3]]);this.Dn.ADC((B=this.Dn.M)[2]-B[0]);this.Dn.Hx(this.
Dn.Gb,true,null,null);},Bm:function(E){if(A.aaZ(this.Filter,E))return;if(!!this.
Filter)A.z$([this,this.L2],this.Filter,0);this.Filter=E;if(!!E)A.zX([this,this.L2
],E,0);A.pe([this,this.L2],this);},L2:function(H){var F;if(!!this.Filter&&!!(F=this.
Filter,F[1].call(F[0])))this.S2((F=this.Filter,F[1].call(F[0])).DW(this.Eg,this.
Operator));else this.S2(null);},AgN:function(E){if(this.TableId===E)return;this.
TableId=E;A.pe([this,this.L2],this);},M2:function(E){if(this.Eg===E)return;this.
Eg=E;A.pe([this,this.L2],this);},S2:function(AM){this.U(A._GetAutoObject(A.Device.
Helper).Amd(this.TableId,this.Eg));this.An();},Ov:function(E){if(this.Operator===
E)return;this.Operator=E;A.pe([this,this.L2],this);},_Init:function(aArg){C.B_._Init.
call(this,aArg);this.__proto__=C.Tg;this.G(JN);this.V.A2(0x11);this.V.CC(A.aaL(A.
fl.By));},_ReInit:function(){C.B_._ReInit.call(this);this.V.CC(A.aaL(A.fl.By));this.
CT();},_Mark:function(D){var B;C.B_._Mark.call(this,D);if((B=this.Filter)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"
};C.APV={Gd:null,Nd:null,DN:null,Z:null,Fm:null,Cz:null,CB:null,C4:null,FY:null,
D7:null,Dc:null,B4:null,Au:null,Breed:null,I6:null,AnimalType:null,Gender:null,O5:
null,KK:null,I4:null,Kw:0,MP:0,Init:function(aArg){var B;A.zX([this,this.BwN],[B=
A._GetAutoObject(A.Device.Device),B.ACZ,B.AG7],0);A.zV([this,this.AsX],this.Nd,0
);A.zX([this,this.AsX],[B=A._GetAutoObject(A.Device.Device),B.Avb,B.Axt],0);A.zX([
this,this.Hu],[B=A._GetAutoObject(A.Device.Device),B.ACZ,B.AG7],0);A.zV([this,this.
Hu],this.Nd,0);A.zX([this,this.Ah6],this.B4.R,0);A.pe([this,this.Ah6],this);A.pe([
this,this.BbO],this);A.pe([this,this.AsX],this);A.pe([this,this.Hu],this);A.pe([
this,this.Bb9],this);},Ai:function(Ae){var F;C.AC.Ai.call(this,Ae);if(!!(F=this.
Fm.R,F[1].call(F[0])))this.Fm.Avm(A.jb.EX);else this.Fm.Avm(A.jb.FU);if(A._GetAutoObject(
A.Device.Device).Ad3){if(!!(F=this.Cz.Df,F[1].call(F[0])))this.Cz.Avm(A.jb.EX);else
this.Cz.Avm(A.jb.FU);}else this.Cz.Avm(A.jb.AbX);if(!this.Nd.A4j()){this.N.C7(null
);this.N.Ci=null;}else{this.N.C7(A.aaL(A.ach.Amk));if((this.Fm.ApC===A.jb.FU)||(
this.Cz.ApC===A.jb.FU)){this.N.LI.Dz(100);this.N.Ci=null;}else{this.N.LI.Dz(255);
this.N.Ci=[this,this.A$X];}}},Dr:function(H){var B;C.AC.Dr.call(this,H);if(!!this.
AY&&((this.AY.T&0x400)===0x400))this.Z.Hx(this.AY,true,null,null);},Lz:function(
H){if(A._GetAutoObject(A.Device.Device).Aq.K7())A._GetAutoObject(A.Device.Device
).A6(41,true,A._GetAutoObject(A.Device.Device).Aq.Hz().toFixed(),0,null);A._GetAutoObject(
A.Device.Helper).X.F$();A._GetAutoObject(A.Device.Helper).Apu(A._GetAutoObject(A.
Device.Helper).X);this.AoN();},CI:function(H){C.AC.CI.call(this,H);A._GetAutoObject(
A.Device.Device).ADJ(0);},Fb:function(H){C.AC.Fb.call(this,H);this.I4.Ar(false);
A._GetAutoObject(A.Device.Device).TT(false);},Ed:function(H){A._GetAutoObject(A.
Device.Helper).X.G$();A._GetAutoObject(C.AZ).Fk();},E7:function(H){var B;this.Au.
Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);this.Au.Ml(-this.
Z.Bp[1]);},G3:function(H){A.pe([this,this.E7],this);},AsX:function(H){var F,CK;if(
!!A._GetAutoObject(A.Device.Device).OverlayMenu)return;this.An();if((A._GetAutoObject(
A.Device.Device).Ad3&&(this.AY===this.Fm))&&!!(F=this.Fm.R,F[1].call(F[0])))this.
LA(this.Cz);if(this.Nd.A4j()>0)return;if((A._GetAutoObject(A.Device.Device).Ad3&&(
this.AY===this.Cz))&&!!(F=this.Cz.Df,F[1].call(F[0])))this.LA(this.Fm);if(!!(F=this.
Fm.R,F[1].call(F[0]))&&(!A._GetAutoObject(A.Device.Device).Ad3||!!(CK=this.Cz.Df
,CK[1].call(CK[0]))))this.A$X(this);},W8:function(H){A._GetAutoObject(A.Device.Device
).Cj(13);},Aii:function(){var F;this.Gd.Co(A._GetAutoObject(A.Device.Device).Aq);
if(this.Nd.LJ(23)){if(A._GetAutoObject(A.Device.Device).Bq.K7())A._GetAutoObject(
A.Device.Device).A6(50,true,A._GetAutoObject(A.Device.Device).Bq.Hz().toFixed(),
0,null);else{var LW=A._GetAutoObject(A.Device.Device).Aq.K3(0,this.Gd.Id);A._GetAutoObject(
A.Device.Device).Sm(LW);var BT=A._NewObject(A.Device.Rating,0);BT.F$();BT.OnSetAnimalId(
this.Gd.Id);BT.OnSetBodyWeight(this.Kw);BT.OnSetTimestamp(this.Gd.DateOfBirth);BT.
Co(A._GetAutoObject(A.Device.Device).Bq);}}if(this.Nd.LJ(18)){if(A._GetAutoObject(
A.Device.Device).Bq.K7())A._GetAutoObject(A.Device.Device).A6(50,true,A._GetAutoObject(
A.Device.Device).Bq.Hz().toFixed(),0,null);else{var LW=A._GetAutoObject(A.Device.
Device).Aq.K3(0,this.Gd.Id);A._GetAutoObject(A.Device.Device).Sm(LW);var BT=A._NewObject(
A.Device.Rating,0);BT.F$();BT.OnSetAnimalId(this.Gd.Id);BT.OnSetBodyWeight(this.
MP);BT.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).Dx());BT.Co(A._GetAutoObject(
A.Device.Device).Bq);}}A._GetAutoObject(A.Device.Device).V6(65280);this.I4.Ar(true
);(F=A._GetAutoObject(A.Device.Device),F.ADJ(F.AuS+1));this.AoN();},Hu:function(
H){this.Cz.ARh(A._GetAutoObject(A.Device.Device).Ad3);A._GetAutoObject(A.Device.
Helper).Mp(this.B4,this.Nd.LJ(14));A._GetAutoObject(A.Device.Helper).Mp(this.Dc,
this.Nd.LJ(23));A._GetAutoObject(A.Device.Helper).Mp(this.CB,this.Nd.LJ(32));A._GetAutoObject(
A.Device.Helper).Mp(this.D7,this.Nd.LJ(18));A._GetAutoObject(A.Device.Helper).Mp(
this.C4,this.Nd.LJ(7));A._GetAutoObject(A.Device.Helper).Mp(this.FY,this.Nd.LJ(34
));var P;var Aa=null;var Aou=this.AY;for(P=0;P<this.Nd.Ae7.XV();P++){Aa=this.BvM(
this.Nd.Ae7.Vn(P));if(!!Aa)this.Y0(Aa);}this.LA(Aou);A._GetAutoObject(A.Device.Helper
).A3l(this.Z);this.An();},AgE:function(E){if(this.Kw===E)return;this.Kw=E;A.abo([
this,this.Au0,this.AgE],0);},AgH:function(E){if(this.MP===E)return;this.MP=E;A.abo([
this,this.AmJ,this.AgH],0);},A$X:function(H){this.Gd.F$();A._GetAutoObject(A.Device.
Helper).Apu(this.Gd);this.Gd.Sd(A._GetAutoObject(A.Device.Helper).X.DateOfBirth);
this.Gd.M3(A._GetAutoObject(A.Device.Helper).X.NaisId);this.Gd.TU(A._GetAutoObject(
A.Device.Helper).AKq(0,this.Gd));this.Gd.Aee(true);if(this.Nd.LJ(14))this.Gd.DS(
A._GetAutoObject(A.Device.Helper).X.AnimalType);if(this.Nd.LJ(32))this.Gd.NH(A._GetAutoObject(
A.Device.Helper).X.Breed);if(this.Nd.LJ(7))this.Gd.JG(A._GetAutoObject(A.Device.
Helper).X.Gender);if(this.Nd.LJ(34))this.Gd.M5(A._GetAutoObject(A.Device.Helper).
X.WhereAbouts);var AkJ=A._GetAutoObject(A.Device.Helper).AY9(this.Gd,0,A._GetAutoObject(
A.Device.Device).Aq);if(!AkJ)this.Aii();else A._GetAutoObject(A.Device.Helper).AIz(
this.Gd,AkJ,0,0,[this,this.AoT]);},AoN:function(){A._GetAutoObject(A.Device.Helper
).X.M3(0);if(A._GetAutoObject(A.Device.Device).Ad3)A._GetAutoObject(A.Device.Helper
).X.Sd(0);this.AgE(0);this.AgH(0);this.LA(this.Fm);this.An();},AoT:function(H){var
At=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!At)return;switch(At.Id){case
22:case 21:case 48:this.AoN();break;case 43:this.LA(this.Fm);break;case 41:break;
default:A.ab5("%s%e",Ar_,At.Id);}},LA:function(Af){this.Ba(Af);this.Z.Hx(Af,true
,null,null);this.Z.UY(null,null);},BbO:function(H){this.D7.AgL(A._GetAutoObject(
A.Device.Helper).X.Ag$(1));this.AsX(this);},Ah6:function(H){this.Dc.AgL(A._GetAutoObject(
A.Device.Helper).AaH(this.AnimalType.R));},Bb9:function(H){var B;var BxW=this.Au.
Background.Fc();var width=(BxW?((B=this.M)[2]-B[0])-((B=this.Au.M)[2]-B[0]):(B=this.
M)[2]-B[0]);var Aa;var WW=this.Z.Vj(null,0x1);while(!!WW&&(((B=WW)?B.__proto__:null
)!==A.Core.Z)){Aa=(C.Cd.isPrototypeOf(WW)?WW:null);if(!!Aa)Aa.G(A.abL(Aa.M,width
));WW=this.Z.Vj(WW,0x1);}},BvM:function(ZD){var Aa=null;switch(ZD){case 14:Aa=this.
B4;break;case 32:Aa=this.CB;break;case 23:Aa=this.Dc;break;case 7:Aa=this.C4;break;
case 18:Aa=this.D7;break;case 34:Aa=this.FY;break;default:A.ab5("%s%e",Bqh,ZD);}
return Aa;},BwN:function(H){var F;if(A._GetAutoObject(A.Device.Device).Ad3)A._GetAutoObject(
A.Device.Helper).X.Sd(0);else if(!(F=this.Cz.Df,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).X.Sd(A._GetAutoObject(A.Device.Helper).Dx()-A._GetAutoObject(A.
Device.Helper).AtV(A._GetAutoObject(A.Device.Device).AiH));this.AsX(this);},Au0:
function(){return this.Kw;},AmJ:function(){return this.MP;},_Init:function(aArg){
C.AC._Init.call(this,aArg);A.acg.AI._Init.call(this.DN={I:this},0);A.Core.Z._Init.
call(this.Z={I:this},0);C.ASn._Init.call(this.Fm={I:this},0);C.ASk._Init.call(this.
Cz={I:this},0);C.Awc._Init.call(this.CB={I:this},0);C.B_._Init.call(this.C4={I:this
},0);C.ArA._Init.call(this.FY={I:this},0);C.Akd._Init.call(this.D7={I:this},0);C.
Akd._Init.call(this.Dc={I:this},0);C.B_._Init.call(this.B4={I:this},0);C.Au._Init.
call(this.Au={I:this},0);C.Breed._Init.call(this.Breed={I:this},0);C.Ui._Init.call(
this.I6={I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.Gender.
_Init.call(this.Gender={I:this},0);A.Device.MN._Init.call(this.O5={I:this},0);A.
Device.KK._Init.call(this.KK={I:this},0);A.Device.U6._Init.call(this.I4={I:this}
,0);this.__proto__=C.APV;var B;this.Background.L(A.jb.C0);this.N.Y(true);this.D_.
Ar(false);this.Dp(C.ANq);this.DN.AV(0x3F);this.DN.G(E2);this.DN.L(A.jb.CM);this.
Z.G(E2);this.Z.J$(9);this.Fm.G(AG0);this.Fm.Aj(true);this.Fm.U(A.aaR(A.acf.AA8));
this.Fm.ARh(true);this.Fm.AD5(false);this.Cz.G(Bqi);this.Cz.Aj(true);this.Cz.U(A.
aaR(A.acf.Adx));this.Cz.ARh(true);this.Cz.AD0(true);this.CB.G(Ar8);this.CB.Aj(true
);this.CB.U(A.aaR(A.acf.Breed));this.C4.G(Ar8);this.C4.Aj(true);this.C4.U(A.aaR(
A.acf.AeA));this.FY.G(A9U);this.FY.Aj(true);this.FY.U(A.aaR(A.acf.I6));this.D7.G(
Bqj);this.D7.Aj(true);this.D7.U(A.aaR(A.acf.MP));this.D7.GC(1000);this.D7.Fd(99000
);this.D7.AgL(A._GetAutoObject(A.Device.Helper).AaH(this.AnimalType.R));this.Dc.
G(A9U);this.Dc.Aj(true);this.Dc.U(A.aaR(A.acf.Kw));this.Dc.GC(1000);this.Dc.Fd(99000
);this.Dc.AgL(A._GetAutoObject(A.Device.Helper).AaH(this.AnimalType.R));this.B4.
G(Ar7);this.B4.Aj(true);this.B4.U(A.aaR(A.acf.AeK));this.Au.G(IJ);this.I4.B1=false;
this.I4.Ct=true;this.I4.ID(1);this.I4.Fy(1000);this.I4.V5(0);this.J(this.DN,0);this.
J(this.Z,0);this.J(this.Fm,0);this.J(this.Cz,0);this.J(this.CB,0);this.J(this.C4
,0);this.J(this.FY,0);this.J(this.D7,0);this.J(this.Dc,0);this.J(this.B4,0);this.
J(this.Au,0);this.N.Cu=[this,this.Ed];this.N.Cf=[this,this.W8];this.N.CS(A.aaL(A.
ach.ET));this.N.Cm(A.aaL(A.ach.AaT));this.Z.Eh=[this,this.G3];this.Fm.Av([B=A._GetAutoObject(
A.Device.Helper).X,B.AmM,B.M3]);this.Fm.ADz([this,this.AsX]);this.Cz.GB([this,this.
Ea,this.G_]);this.Cz.Abu([B=A._GetAutoObject(A.Device.Helper).X,B.Au3,B.Sd]);this.
Cz.Op=[this,this.BbO];this.CB.GB([this,this.Ea,this.G_]);this.CB.LN([B=this.CB,B.
Ge]);this.CB.LP(A.aaL(A.ach.Edit));this.CB.Av([B=this.Breed,B.Ce,B.Cg]);this.CB.
CN(this.Breed);this.CB.AmS(this.O5);this.C4.Av([B=this.Gender,B.Ce,B.Cg]);this.C4.
CN(this.Gender);this.FY.GB([this,this.Ea,this.G_]);this.FY.LN([B=this.FY,B.Ge]);
this.FY.LP(A.aaL(A.ach.Edit));this.FY.Av([B=this.I6,B.Ce,B.Cg]);this.FY.CN(this.
I6);this.FY.AmS(this.KK);this.D7.Av([this,this.AmJ,this.AgH]);this.Dc.Av([this,this.
Au0,this.AgE]);this.B4.Av([B=this.AnimalType,B.Ce,B.Cg]);this.B4.CN(this.AnimalType
);this.Au.Bj8([this,this.Bb9]);this.Breed.LO(A._GetAutoObject(A.Device.Helper).X
);this.I6.LO(A._GetAutoObject(A.Device.Helper).X);this.AnimalType.LO(A._GetAutoObject(
A.Device.Helper).X);this.Gender.LO(A._GetAutoObject(A.Device.Helper).X);this.Gd=
A._NewObject(A.Device.Animal,0);this.Nd=A._GetAutoObject(C.AlI);this.I4.R=[B=A._GetAutoObject(
A.Device.Device),B.AQJ,B.AX0];this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.DN._Done();this.Z._Done();this.Fm._Done();this.Cz._Done();this.CB._Done(
);this.C4._Done();this.FY._Done();this.D7._Done();this.Dc._Done();this.B4._Done(
);this.Au._Done();this.Breed._Done();this.I6._Done();this.AnimalType._Done();this.
Gender._Done();this.O5._Done();this.KK._Done();this.I4._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.DN._ReInit();this.Z._ReInit(
);this.Fm._ReInit();this.Cz._ReInit();this.CB._ReInit();this.C4._ReInit();this.FY.
_ReInit();this.D7._ReInit();this.Dc._ReInit();this.B4._ReInit();this.Au._ReInit(
);this.Breed._ReInit();this.I6._ReInit();this.AnimalType._ReInit();this.Gender._ReInit(
);this.O5._ReInit();this.KK._ReInit();this.I4._ReInit();this.Fm.U(A.aaR(A.acf.AA8
));this.Cz.U(A.aaR(A.acf.Adx));this.CB.U(A.aaR(A.acf.Breed));this.C4.U(A.aaR(A.acf.
AeA));this.FY.U(A.aaR(A.acf.I6));this.D7.U(A.aaR(A.acf.MP));this.Dc.U(A.aaR(A.acf.
Kw));this.B4.U(A.aaR(A.acf.AeK));},_Mark:function(D){var B;C.AC._Mark.call(this,
D);if((B=this.Gd)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Nd)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.DN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dc)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.B4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Au
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O5
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.I4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsMassRecording"
};C.Arz={YJ:null,_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg
);A.acg.Text._Init.call(this.YJ={I:this},0);this.__proto__=C.Arz;this.N.BU(A.acf.
Bfd);this.Number.G(Bqk);this.I5.G(Bql);this.IG.G(Bqm);this.Aj1(2);this.A$U=false;
this.BaX=true;this.BaY=false;this.YJ.G(Bqn);this.YJ.KF(true);this.YJ.Q(A.aaR(A.acf.
A8O));this.YJ.L(A.jb.Text);this.J(this.YJ,0);this.N.Cu=null;this.N.Ci=[this,this.
AHc];this.N.CS(null);this.YJ.S(A.aaL(A.fl.Ah));},_Done:function(){this.__proto__=
C.SetTransponderScreen;this.YJ._Done();C.SetTransponderScreen._Done.call(this);}
,_ReInit:function(){C.SetTransponderScreen._ReInit.call(this);this.YJ._ReInit();
this.YJ.Q(A.aaR(A.acf.A8O));this.YJ.S(A.aaL(A.fl.Ah));},_Mark:function(D){var B;
C.SetTransponderScreen._Mark.call(this,D);if((B=this.YJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SetTransponderCancableScreen"};C.ACe={Cn:null,Fz:function(
E){if(this.MR===E)return;C.HA.Fz.call(this,E);this.Cn.C1(E);},XW:function(IK){var
B2=null;switch(IK){case-1:case 0:B2=this.FK;break;case 1:B2=this.Cn;break;case 2:
B2=this.GJ;break;default:A.ab5("%s",Ahj);}return B2;},_Init:function(aArg){C.HA.
_Init.call(this,aArg);C.DE._Init.call(this.Cn={I:this},0);this.__proto__=C.ACe;this.
G(Bqo);this.Cn.G(A9t);this.FK.G(Bqp);this.J(this.Cn,-2);this.Cn.Di=[this,this.GE
];},_Done:function(){this.__proto__=C.HA;this.Cn._Done();C.HA._Done.call(this);}
,_ReInit:function(){C.HA._ReInit.call(this);this.Cn._ReInit();},_Mark:function(D
){var B;C.HA._Mark.call(this,D);if((B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber3"};C.ArA={GM:null,Bg:function(aSize){C.OA.Bg.call(this
,aSize);this.V.G(A.abN(this.V.M,this.GM.M[0]));},Ai:function(Ae){C.OA.Ai.call(this
,Ae);if(this.G8)this.GM.Fz(A.jb.CM);else this.GM.Fz(A.jb.C0);},AZI:function(){this.
Ba(this.GM);},_Init:function(aArg){C.OA._Init.call(this,aArg);C.HA._Init.call(this.
GM={I:this},0);this.__proto__=C.ArA;this.GM.G(Bqq);this.J(this.GM,0);this.GM.Av([
this,this.AQz,this.ADU]);},_Done:function(){this.__proto__=C.OA;this.GM._Done();
C.OA._Done.call(this);},_ReInit:function(){C.OA._ReInit.call(this);this.GM._ReInit(
);},_Mark:function(D){var B;C.OA._Mark.call(this,D);if((B=this.GM)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"};C.Awc={GM:null
,Bg:function(aSize){C.OA.Bg.call(this,aSize);this.V.G(A.abN(this.V.M,this.GM.M[0
]));},Ai:function(Ae){C.OA.Ai.call(this,Ae);if(this.G8)this.GM.Fz(A.jb.CM);else this.
GM.Fz(A.jb.C0);},AZI:function(){this.Ba(this.GM);},_Init:function(aArg){C.OA._Init.
call(this,aArg);C.ACe._Init.call(this.GM={I:this},0);this.__proto__=C.Awc;this.GM.
AV(0x18);this.GM.G(Bqr);this.J(this.GM,0);this.GM.Av([this,this.AQz,this.ADU]);}
,_Done:function(){this.__proto__=C.OA;this.GM._Done();C.OA._Done.call(this);},_ReInit:
function(){C.OA._ReInit.call(this);this.GM._ReInit();},_Mark:function(D){var B;C.
OA._Mark.call(this,D);if((B=this.GM)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupNumbered3"};C.AbO={ScreenTypeToString:null,Dt:function(
){return 4;},Gx:function(aIndex){if((aIndex<0)||(aIndex>=104))return A.jV;return this.
ScreenTypeToString.B0(this.C$(aIndex));},_Init:function(aArg){C.Ds._Init.call(this
,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={I:this},0
);this.__proto__=C.AbO;this.Cv.Set(0,3);this.Cv.Set(1,35);this.Cv.Set(2,34);this.
Cv.Set(3,47);},_Done:function(){this.__proto__=C.Ds;this.ScreenTypeToString._Done(
);C.Ds._Done.call(this);},_ReInit:function(){C.Ds._ReInit.call(this);this.ScreenTypeToString.
_ReInit();},_Mark:function(D){var B;C.Ds._Mark.call(this,D);if((B=this.ScreenTypeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"};C.ATz={
V1:function(H){this.AfJ();this.Ex(A.aaR(A.acf.Arh),[this,this.AqZ],3);this.Ex(A.
aaR(A.acf.Ag4),[this,this.AjX],2);this.Ex(A.aaR(A.acf.Adb),[this,this.AqJ],1);this.
Ex(A.aaR(A.acf.LinkTransponder),[this,this.AQ9],8);this.Ex(A.aaR(A.acf.AiB),[this
,this.AmP],0);this.Ex(A.aaR(A.acf.O1),[this,this.Abn],9);A._GetAutoObject(C.BW).
Gq();A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.Ac9)+A.aaR(A.acf.Colon));A._GetAutoObject(
A.Device.Device).Cj(6);},Dr:function(H){},AaJ:function(){return C.AiV;},AaK:function(
){return C.Ajg;},QO:function(H){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(
A.Device.Helper).A4w());},HH:function(H){C.EO.HH.call(this,H);if(this.AjC()===false
){this.N.Cm(A.aaL(A.ach.Auv));this.N.Cf=[this,this.ALY];this.N.FA(A.jV);}this.N.
Ow(false);this.N.Ox(false);},Afv:function(){A._GetAutoObject(C.AZ).BZ(97);},Afu:
function(){A._GetAutoObject(C.AZ).BZ(98);},_Init:function(aArg){C.EO._Init.call(
this,aArg);this.__proto__=C.ATz;var B;this.Dp(C.ABI);this.Do(A.aaR(A.acf.A5L));this.
AjW([B=A._GetAutoObject(A.Device.Device),B.AQy,B.AXS]);},_ReInit:function(){C.EO.
_ReInit.call(this);this.Do(A.aaR(A.acf.A5L));},_className:"Application::YoungNoTransponderListScreen"
};C.ATy={_Init:function(aArg){C.IS._Init.call(this,aArg);this.__proto__=C.ATy;this.
KJ.Ar(false);this.KJ.Aj(false);this.KJ.Y(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.ATx={_Init:function(aArg){C.Gs._Init.call(this,aArg);this.__proto__=C.ATx;this.
N.BU(A.aaR(A.acf.A2U));},_ReInit:function(){C.Gs._ReInit.call(this);this.N.BU(A.
aaR(A.acf.A2U));},_className:"Application::YoungNoTransponderListActionsScreen"};
C.AO5={R3:null,R:null,A5G:0,MR:0,Init:function(aArg){this.ARa(6);},Av:function(E
){if(A.aaZ(this.R,E))return;this.R=E;if(!!this.R3)this.R3.Av(E);},ARa:function(E
){if(this.A5G===E)return;this.A5G=E;var W;switch(E){case 2:W=A._NewObject(C.HA,0
);break;case 3:W=A._NewObject(C.ACe,0);break;case 4:W=A._NewObject(C.AO2,0);break;
case 5:W=A._NewObject(C.AO3,0);break;case 6:W=A._NewObject(C.AuM,0);break;default:{
W=null;A.ab5("%s%i",Bqs,E);}}this.BjL(W);},BjL:function(E){if(this.R3===E)return;
if(!!this.R3){this.R3.Av(null);this.HG(this.R3);}this.R3=E;if(!!this.R3){this.R3.
Av(this.R);this.J(this.R3,0);}},Fz:function(E){if(this.MR===E)return;this.MR=E;if(
!!this.R3)this.R3.Fz(E);},Sl:function(GF){if(!!this.R3)this.R3.Sl(GF);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.AO5;this.G(Aw2);this.Init(
aArg);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.R3)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.R)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AO2={CQ:null,Cn:null,Fz:function(
E){if(this.MR===E)return;C.HA.Fz.call(this,E);this.Cn.C1(E);this.CQ.C1(E);},XW:function(
IK){var B2=null;switch(IK){case-1:case 0:B2=this.FK;break;case 1:B2=this.Cn;break;
case 2:B2=this.CQ;break;case 3:B2=this.GJ;break;default:A.ab5("%s",Ahj);}return B2;
},_Init:function(aArg){C.HA._Init.call(this,aArg);C.DE._Init.call(this.CQ={I:this
},0);C.DE._Init.call(this.Cn={I:this},0);this.__proto__=C.AO2;this.G(Bqt);this.GJ.
G(Asf);this.CQ.G(A9u);this.Cn.G(A9v);this.FK.G(A9w);this.J(this.CQ,-2);this.J(this.
Cn,-2);this.CQ.Di=[this,this.GE];this.Cn.Di=[this,this.GE];},_Done:function(){this.
__proto__=C.HA;this.CQ._Done();this.Cn._Done();C.HA._Done.call(this);},_ReInit:function(
){C.HA._ReInit.call(this);this.CQ._ReInit();this.Cn._ReInit();},_Mark:function(D
){var B;C.HA._Mark.call(this,D);if((B=this.CQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cn)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.ABf={Sx:null,Ai:function(Ae){C.AaG.Ai.call(this,Ae);this.Sx.L(this.V.AP);},_Init:
function(aArg){C.AaG._Init.call(this,aArg);C.CP._Init.call(this.Sx={I:this},0);this.
__proto__=C.ABf;this.V.Y(false);this.A0.G(Bqu);this.A0.ARa(4);this.Sx.G(Bqv);this.
Sx.Q(A.aaR(A.acf.J3));this.Sx.L(A.jb.Bh);this.J(this.Sx,0);this.Sx.S(A.aaL(A.fl.
Ah));this.Sx.A5(A.aaL(A.fl.Ak));this.Sx.CC(null);},_Done:function(){this.__proto__=
C.AaG;this.Sx._Done();C.AaG._Done.call(this);},_ReInit:function(){C.AaG._ReInit.
call(this);this.Sx._ReInit();this.Sx.Q(A.aaR(A.acf.J3));this.Sx.S(A.aaL(A.fl.Ah)
);this.Sx.A5(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.AaG._Mark.call(this,D);
if((B=this.Sx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.LM={Yo:null,TD:null,AP:0,A4Y:false,L:function(E){if(this.AP===E)return;this.
AP=E;this.Yo.L(this.AP);this.TD.L(this.AP);},A7s:function(E){var B;if(this.A4Y===
E)return;this.A4Y=E;if(E){this.Yo.Y(true);this.TD.DJ([this.TD.Es[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Yo.Y(false);this.TD.DJ([this.TD.Es[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.acg.DQ._Init.call(
this.Yo={I:this},0);A.acg.DQ._Init.call(this.TD={I:this},0);this.__proto__=C.LM;
this.G(AXF);this.Yo.AV(0x2D);this.Yo.DJ(Ahd);this.Yo.DX(A9V);this.Yo.L(A.jb.Text
);this.TD.AV(0x36);this.TD.DJ(A9V);this.TD.DX(Bqw);this.TD.L(A.jb.Text);this.AP=
A.jb.Text;this.J(this.Yo,0);this.J(this.TD,0);},_Done:function(){this.__proto__=
A.Core.O;this.Yo._Done();this.TD._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Yo._ReInit();this.TD._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Yo)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.TD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};C.AR4={R8:null,Pj:null,C4:null,B4:null,CB:null,GA:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,Breed:null,O5:null,Ui:null,KK:null,Init:function(aArg){A.zX([this
,this.AtF],this.B4.R,0);A.zX([this,this.AK5],this.CB.R,0);A.zX([this,this.Bnh],this.
R8.R,0);A.zX([this,this.Aul],this.C4.R,0);A.zX([this,this.ATv],this.GA.R,0);},AtF:
function(H){var F;A._GetAutoObject(A.Device.Device).DS((F=this.B4.R,F[1].call(F[
0])));},Bnh:function(H){var F;A._GetAutoObject(A.Device.Device).AvX((F=this.R8.R
,F[1].call(F[0])));},Aul:function(H){var F;A._GetAutoObject(A.Device.Device).JG((
F=this.C4.R,F[1].call(F[0])));},ATv:function(H){var F;A._GetAutoObject(A.Device.
Device).M5((F=this.GA.R,F[1].call(F[0])));},AK5:function(H){var F;A._GetAutoObject(
A.Device.Device).NH((F=this.CB.R,F[1].call(F[0])));},_Init:function(aArg){C.Cs._Init.
call(this,aArg);C.B_._Init.call(this.R8={I:this},0);C.I1._Init.call(this.Pj={I:this
},0);C.B_._Init.call(this.C4={I:this},0);C.B_._Init.call(this.B4={I:this},0);C.Awc.
_Init.call(this.CB={I:this},0);C.ArA._Init.call(this.GA={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope._Init.call(this.WeightRecordingScope={
I:this},0);C.Gender._Init.call(this.Gender={I:this},0);C.Breed._Init.call(this.Breed={
I:this},0);A.Device.MN._Init.call(this.O5={I:this},0);C.Ui._Init.call(this.Ui={I:
this},0);A.Device.KK._Init.call(this.KK={I:this},0);this.__proto__=C.AR4;var B;this.
JH((A.aaR(A.acf.Arl)+Axb)+A.aaR(A.acf.Ai1));this.R8.G(Ahg);this.R8.Aj(true);this.
R8.U(A.aaR(A.acf.A9h));this.R8.Bf(true);this.R8.Bx(0);this.Pj.G(Aw0);this.Pj.Aj(
true);this.Pj.Y(true);this.Pj.U(A.aaR(A.acf.AiH));this.Pj.GC(0);this.Pj.Fd(99);this.
Pj.Kd(A.aaR(A.acf.J3));this.Pj.KE(A.aaR(A.acf.Gv));this.C4.G(Ab$);this.C4.Aj(true
);this.C4.U(A.aaR(A.acf.AeA));this.C4.Bf(true);this.C4.Bx(0);this.B4.G(AnE);this.
B4.Aj(true);this.B4.U(A.aaR(A.acf.AeK));this.B4.Bf(true);this.B4.Bx(0);this.CB.G(
AnF);this.CB.Aj(true);this.CB.U(A.aaR(A.acf.Breed));this.CB.Bf(false);this.GA.G(
AnF);this.GA.Aj(true);this.GA.U(A.aaR(A.acf.I6));this.GA.Bf(true);this.AnimalType.
Av(A._GetAutoObject(A.Device.Device).AnimalType);this.WeightRecordingScope.Av(A.
_GetAutoObject(A.Device.Device).WeightRecordingScope);this.Gender.Av(A._GetAutoObject(
A.Device.Device).Gender);this.Breed.Av(A._GetAutoObject(A.Device.Device).Breed);
this.Ui.Av(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(this.R8,0);this.
J(this.Pj,0);this.J(this.C4,0);this.J(this.B4,0);this.J(this.CB,0);this.J(this.GA
,0);this.R8.Av([B=this.WeightRecordingScope,B.Ce,B.Cg]);this.R8.CN(this.WeightRecordingScope
);this.Pj.Av([B=A._GetAutoObject(A.Device.Device),B.A50,B.A_d]);this.C4.Av([B=this.
Gender,B.Ce,B.Cg]);this.C4.CN(this.Gender);this.B4.Av([B=this.AnimalType,B.Ce,B.
Cg]);this.B4.CN(this.AnimalType);this.CB.GB([this,this.Ea,this.G_]);this.CB.LN([
B=this.CB,B.Ge]);this.CB.LP(A.aaL(A.ach.Edit));this.CB.Av([B=this.Breed,B.Ce,B.Cg
]);this.CB.CN(this.Breed);this.CB.AmS(this.O5);this.GA.GB([this,this.Ea,this.G_]
);this.GA.LN([B=this.GA,B.Ge]);this.GA.LP(A.aaL(A.ach.Edit));this.GA.Av([B=this.
Ui,B.Ce,B.Cg]);this.GA.CN(this.Ui);this.GA.AmS(this.KK);this.Init(aArg);},_Done:
function(){this.__proto__=C.Cs;this.R8._Done();this.Pj._Done();this.C4._Done();this.
B4._Done();this.CB._Done();this.GA._Done();this.AnimalType._Done();this.WeightRecordingScope.
_Done();this.Gender._Done();this.Breed._Done();this.O5._Done();this.Ui._Done();this.
KK._Done();C.Cs._Done.call(this);},_ReInit:function(){C.Cs._ReInit.call(this);this.
R8._ReInit();this.Pj._ReInit();this.C4._ReInit();this.B4._ReInit();this.CB._ReInit(
);this.GA._ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit(
);this.Gender._ReInit();this.Breed._ReInit();this.O5._ReInit();this.Ui._ReInit();
this.KK._ReInit();this.JH((A.aaR(A.acf.Arl)+Axb)+A.aaR(A.acf.Ai1));this.R8.U(A.aaR(
A.acf.A9h));this.Pj.U(A.aaR(A.acf.AiH));this.Pj.Kd(A.aaR(A.acf.J3));this.Pj.KE(A.
aaR(A.acf.Gv));this.C4.U(A.aaR(A.acf.AeA));this.B4.U(A.aaR(A.acf.AeK));this.CB.U(
A.aaR(A.acf.Breed));this.GA.U(A.aaR(A.acf.I6));},_Mark:function(D){var B;C.Cs._Mark.
call(this,D);if((B=this.R8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pj)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.B4
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.GA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.O5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ui)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationPresettingsSettingsScreen"
};C.AR3={Qs:null,Ji:null,Ic:null,E_:null,Fu:null,Ib:null,AutoRegistrationMode:null
,Adc:null,Init:function(aArg){var B;A.zX([this,this.Bec],this.Qs.R,0);A.zX([this
,this.BbB],[B=A._GetAutoObject(A.Device.Device),B.AQh,B.AXJ],0);A.zX([this,this.
AoZ],[B=A._GetAutoObject(A.Device.Device),B.Abj,B.Acb],0);A.zX([this,this.AoZ],[
B=A._GetAutoObject(A.Device.Device),B.Abk,B.Acc],0);A.pe([this,this.BbB],this);A.
pe([this,this.AoZ],this);},Bec:function(H){var F;A._GetAutoObject(A.Device.Device
).Avi((F=this.Qs.R,F[1].call(F[0])));},BbB:function(H){switch(A._GetAutoObject(A.
Device.Device).AfM){case 0:A._GetAutoObject(A.Device.Helper).Mp(this.Ic,true);break;
case 1:A._GetAutoObject(A.Device.Helper).Mp(this.Ic,false);break;default:throw new
Error(Bqx+A._GetAutoObject(A.Device.Device).AfM.toFixed());}},AoZ:function(H){var
F,CK;if(((F=this.E_.R,F[1].call(F[0]))+(CK=this.Fu.R,CK[1].call(CK[0])))>12)(CK=
this.Fu.R,CK[2].call(CK[0],12-(F=this.E_.R,F[1].call(F[0]))));},_Init:function(aArg
){C.Cs._Init.call(this,aArg);C.B_._Init.call(this.Qs={I:this},0);C.B_._Init.call(
this.Ji={I:this},0);C.AEW._Init.call(this.Ic={I:this},0);C.I1._Init.call(this.E_={
I:this},0);C.I1._Init.call(this.Fu={I:this},0);C.ACB._Init.call(this.Ib={I:this}
,0);C.AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},0);C.Adc.
_Init.call(this.Adc={I:this},0);this.__proto__=C.AR3;var B;this.JH(A.aaR(A.acf.Apw
));this.Qs.G(AG0);this.Qs.Aj(true);this.Qs.U(A.aaR(A.acf.Apw));this.Qs.Bf(false);
this.Qs.GC(-1);this.Qs.Fd(1);this.Ji.G(WF);this.Ji.Aj(true);this.Ji.Y(true);this.
Ji.U(A.aaR(A.acf.AAj));this.Ji.Bf(true);this.Ic.G(Ab$);this.Ic.Aj(true);this.Ic.
Y(true);this.Ic.U(A.aaR(A.acf.ACJ));this.Ic.Bf(true);this.E_.G(AnE);this.E_.Aj(true
);this.E_.Y(true);this.E_.U(A.aaR(A.acf.AA2));this.E_.Bf(false);this.E_.GC(2);this.
E_.Fd(6);this.E_.Kd(A.aaR(A.acf.Ai3));this.E_.KE(A.aaR(A.acf.E9));this.Fu.G(AnF);
this.Fu.Aj(true);this.Fu.U(A.aaR(A.acf.ACP));this.Fu.Bf(true);this.Fu.GC(0);this.
Fu.Fd(12);this.Fu.Kd(A.aaR(A.acf.Ai3));this.Fu.KE(A.aaR(A.acf.E9));this.Ib.G(Bqy
);this.Ib.Ar(true);this.Ib.Aj(true);this.Ib.Bf(false);this.Ib.ADR(A.aaR(A.acf.AAq
));this.AutoRegistrationMode.Av(A._GetAutoObject(A.Device.Device).AutoRegistrationMode
);this.J(this.Qs,0);this.J(this.Ji,0);this.J(this.Ic,0);this.J(this.E_,0);this.J(
this.Fu,0);this.J(this.Ib,0);this.Qs.Av([B=this.AutoRegistrationMode,B.Ce,B.Cg]);
this.Qs.CN(this.AutoRegistrationMode);this.Ji.Av([B=this.Adc,B.Ce,B.Cg]);this.Ji.
CN(this.Adc);this.Ic.TQ([B=A._GetAutoObject(A.Device.Device),B.V0,B.AXO]);this.Ic.
AjP([B=A._GetAutoObject(A.Device.Device),B.Au5,B.Axn]);this.E_.Av([B=A._GetAutoObject(
A.Device.Device),B.Abj,B.Acb]);this.Fu.Av([B=A._GetAutoObject(A.Device.Device),B.
Abk,B.Acc]);this.Ib.Dy(A.aaL(A.ach.Aml));this.Ib.Py([B=A._GetAutoObject(A.Device.
Device),B.Abj,B.Acb]);this.Ib.QH([B=A._GetAutoObject(A.Device.Device),B.Abk,B.Acc
]);this.Init(aArg);},_Done:function(){this.__proto__=C.Cs;this.Qs._Done();this.Ji.
_Done();this.Ic._Done();this.E_._Done();this.Fu._Done();this.Ib._Done();this.AutoRegistrationMode.
_Done();this.Adc._Done();C.Cs._Done.call(this);},_ReInit:function(){C.Cs._ReInit.
call(this);this.Qs._ReInit();this.Ji._ReInit();this.Ic._ReInit();this.E_._ReInit(
);this.Fu._ReInit();this.Ib._ReInit();this.AutoRegistrationMode._ReInit();this.Adc.
_ReInit();this.JH(A.aaR(A.acf.Apw));this.Qs.U(A.aaR(A.acf.Apw));this.Ji.U(A.aaR(
A.acf.AAj));this.Ic.U(A.aaR(A.acf.ACJ));this.E_.U(A.aaR(A.acf.AA2));this.E_.Kd(A.
aaR(A.acf.Ai3));this.E_.KE(A.aaR(A.acf.E9));this.Fu.U(A.aaR(A.acf.ACP));this.Fu.
Kd(A.aaR(A.acf.Ai3));this.Fu.KE(A.aaR(A.acf.E9));this.Ib.ADR(A.aaR(A.acf.AAq));}
,_Mark:function(D){var B;C.Cs._Mark.call(this,D);if((B=this.Qs)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ji)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ic)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.E_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fu
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AutoRegistrationMode)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationAutomaticSettingsScreen"
};C.AS5={Oq:null,Ji:null,Ic:null,E_:null,Fu:null,Ib:null,AeH:null,Init:function(
aArg){var B;A.zX([this,this.Bcc],[B=A._GetAutoObject(A.Device.Device),B.AQL,B.AX2
],0);A.zX([this,this.AoZ],[B=A._GetAutoObject(A.Device.Device),B.Abj,B.Acb],0);A.
zX([this,this.AoZ],[B=A._GetAutoObject(A.Device.Device),B.Abk,B.Acc],0);A.pe([this
,this.Bcc],this);A.pe([this,this.AoZ],this);},Bcc:function(H){var AJe=false;var Atd=
false;switch(A._GetAutoObject(A.Device.Device).Ag9){case 0:{AJe=false;Atd=false;
}break;case 1:{AJe=true;Atd=false;}break;case 2:{AJe=false;Atd=true;}break;default:
throw new Error(Bqz+A._GetAutoObject(A.Device.Device).Ag9.toFixed());}A._GetAutoObject(
A.Device.Helper).Mp(this.Ic,AJe);A._GetAutoObject(A.Device.Helper).Mp(this.E_,Atd
);A._GetAutoObject(A.Device.Helper).Mp(this.Fu,Atd);A._GetAutoObject(A.Device.Helper
).Mp(this.Ib,Atd);},AoZ:function(H){var F,CK;if(((F=this.E_.R,F[1].call(F[0]))+(
CK=this.Fu.R,CK[1].call(CK[0])))>12)(CK=this.Fu.R,CK[2].call(CK[0],12-(F=this.E_.
R,F[1].call(F[0]))));},_Init:function(aArg){C.Cs._Init.call(this,aArg);C.I1._Init.
call(this.Oq={I:this},0);C.B_._Init.call(this.Ji={I:this},0);C.AEW._Init.call(this.
Ic={I:this},0);C.I1._Init.call(this.E_={I:this},0);C.I1._Init.call(this.Fu={I:this
},0);C.ACB._Init.call(this.Ib={I:this},0);C.AeH._Init.call(this.AeH={I:this},0);
this.__proto__=C.AS5;var B;this.JH(A.aaR(A.acf.LinkTransponder));this.Oq.G(AG0);
this.Oq.Aj(true);this.Oq.Y(true);this.Oq.U(A.aaR(A.acf.A5f));this.Oq.Bf(false);this.
Oq.GC(1);this.Oq.Fd(365);this.Oq.Kd(A.aaR(A.acf.J3));this.Oq.KE(A.aaR(A.acf.Gv));
this.Ji.G(WF);this.Ji.Aj(true);this.Ji.Y(true);this.Ji.U(A.aaR(A.acf.AAj));this.
Ji.Bf(true);this.Ic.G(Ab$);this.Ic.Aj(true);this.Ic.Y(true);this.Ic.U(A.aaR(A.acf.
ACJ));this.Ic.Bf(false);this.E_.G(AnE);this.E_.Aj(true);this.E_.Y(true);this.E_.
U(A.aaR(A.acf.AA2));this.E_.Bf(false);this.E_.GC(2);this.E_.Fd(6);this.E_.Kd(A.aaR(
A.acf.Ai3));this.E_.KE(A.aaR(A.acf.E9));this.Fu.G(AnF);this.Fu.Aj(true);this.Fu.
U(A.aaR(A.acf.ACP));this.Fu.Bf(true);this.Fu.GC(0);this.Fu.Fd(12);this.Fu.Kd(A.aaR(
A.acf.Ai3));this.Fu.KE(A.aaR(A.acf.E9));this.Ib.G(AGc);this.Ib.Ar(true);this.Ib.
Aj(true);this.Ib.Bf(false);this.Ib.ADR(A.aaR(A.acf.AAq));this.J(this.Oq,0);this.
J(this.Ji,0);this.J(this.Ic,0);this.J(this.E_,0);this.J(this.Fu,0);this.J(this.Ib
,0);this.Oq.Av([B=A._GetAutoObject(A.Device.Device),B.A6p,B.A_s]);this.Ji.Av([B=
this.AeH,B.Ce,B.Cg]);this.Ji.CN(this.AeH);this.Ic.TQ([B=A._GetAutoObject(A.Device.
Device),B.V0,B.AXO]);this.Ic.AjP([B=A._GetAutoObject(A.Device.Device),B.Au5,B.Axn
]);this.E_.Av([B=A._GetAutoObject(A.Device.Device),B.Abj,B.Acb]);this.Fu.Av([B=A.
_GetAutoObject(A.Device.Device),B.Abk,B.Acc]);this.Ib.Dy(A.aaL(A.ach.Aml));this.
Ib.Py([B=A._GetAutoObject(A.Device.Device),B.Abj,B.Acb]);this.Ib.QH([B=A._GetAutoObject(
A.Device.Device),B.Abk,B.Acc]);this.Init(aArg);},_Done:function(){this.__proto__=
C.Cs;this.Oq._Done();this.Ji._Done();this.Ic._Done();this.E_._Done();this.Fu._Done(
);this.Ib._Done();this.AeH._Done();C.Cs._Done.call(this);},_ReInit:function(){C.
Cs._ReInit.call(this);this.Oq._ReInit();this.Ji._ReInit();this.Ic._ReInit();this.
E_._ReInit();this.Fu._ReInit();this.Ib._ReInit();this.AeH._ReInit();this.JH(A.aaR(
A.acf.LinkTransponder));this.Oq.U(A.aaR(A.acf.A5f));this.Oq.Kd(A.aaR(A.acf.J3));
this.Oq.KE(A.aaR(A.acf.Gv));this.Ji.U(A.aaR(A.acf.AAj));this.Ic.U(A.aaR(A.acf.ACJ
));this.E_.U(A.aaR(A.acf.AA2));this.E_.Kd(A.aaR(A.acf.Ai3));this.E_.KE(A.aaR(A.acf.
E9));this.Fu.U(A.aaR(A.acf.ACP));this.Fu.Kd(A.aaR(A.acf.Ai3));this.Fu.KE(A.aaR(A.
acf.E9));this.Ib.ADR(A.aaR(A.acf.AAq));},_Mark:function(D){var B;C.Cs._Mark.call(
this,D);if((B=this.Oq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ji)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ic)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Fu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeH)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::TransponderAssignmentSettingsScreen"};C.AeH={TransponderAssignmentIdChangeMethodToString:
null,Init:function(aArg){var B;A.zX([this,this.Bdu],[B=A._GetAutoObject(A.Device.
Device),B.AQL,B.AX2],0);A.pe([this,this.Bdu],this);},Dt:function(){return 3;},C$:
function(aIndex){if((aIndex<0)||(aIndex>=3))return-1;return aIndex;},Gx:function(
aIndex){if((aIndex<0)||(aIndex>=3))return A.jV;return this.TransponderAssignmentIdChangeMethodToString.
B0(aIndex);},DO:function(A1){return A1;},Hj:function(){return 2;},Av:function(E){
C.AB.Av.call(this,E);A._GetAutoObject(A.Device.Device).AvU(E);},Bdu:function(H){
this.R=A._GetAutoObject(A.Device.Device).Ag9;A.abo([this,this.Ce,this.Cg],0);},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.Device.TransponderAssignmentIdChangeMethodToString.
_Init.call(this.TransponderAssignmentIdChangeMethodToString={I:this},0);this.__proto__=
C.AeH;this.Init(aArg);},_Done:function(){this.__proto__=C.AB;this.TransponderAssignmentIdChangeMethodToString.
_Done();C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.
TransponderAssignmentIdChangeMethodToString._ReInit();},_Mark:function(D){var B;
C.AB._Mark.call(this,D);if((B=this.TransponderAssignmentIdChangeMethodToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderAssignmentIdChangeMode"
};C.I2={B3:null,IM:null,Cl:null,AlS:null,RP:null,AmD:null,AiX:null,Text:null,CR:
null,Ec:0,Mz:false,Ai:function(Ae){var B;A.acn.I2.Ai.call(this,Ae);if(((Ae&0x40)===
0x40))this.IM.Ar(true);else{this.IM.Ar(false);this.CR.Y(false);}},A1Y:function(H
){var B;var A9=this.Text.M;var Ni=0;var Nj=0;if(this.CR.Ei[0]<A9[0])Ni=A9[0]-this.
CR.Ei[0];if(this.CR.Ei[0]>A9[2])Ni=A9[2]-this.CR.Ei[0];if(this.CR.Ei[1]<A9[1])Nj=
A9[1]-this.CR.Ei[1];if(this.CR.Es[1]>A9[3])Nj=A9[3]-this.CR.Es[1];if(!!Ni||!!Nj)
this.Text.Ga(A.abf(this.Text.Bp,[Ni,Nj]));Ni=this.Text.Bp[0];Nj=this.Text.Bp[1];
var CY=[(B=this.Text.C_())[2]-B[0],B[3]-B[1]];if(CY[0]<=((B=this.Text.M)[2]-B[0]
))Ni=0;if(CY[1]<=((B=this.Text.M)[3]-B[1]))Nj=0;this.Text.Ga([Ni,Nj]);},AlC:function(
H){if(!this.B3)return;var A1u=this.Text.AE$(this.Ec);var pos=this.Text.Aes(A1u);
this.CR.DX(A.abe(pos,[0,this.B3.Ascent]));this.CR.DJ(A.abf(pos,[0,this.B3.Descent
]));if(this.IM.Bw){this.IM.Ar(false);this.IM.Ar(true);}if(this.Mz){A.pe([this,this.
A1Y],this);this.Mz=false;}},Ay7:function(H){if(!this.B3)return;var Ev=this.Text.
AE$(this.Ec);if(this.Cl.CH===6){Ev=[Ev[0]-1,Ev[1]];if(this.Text.Am$(Ev)===this.Ec
){Ev=[Ev[0],Ev[1]-1];Ev=[this.Text.ABt(Ev[1]).length,Ev[1]];}}if(this.Cl.CH===7){
Ev=[Ev[0]+1,Ev[1]];if(this.Text.Am$(Ev)===this.Ec){Ev=[Ev[0],Ev[1]+1];Ev=[0,Ev[1
]];}}if(this.Cl.CH===4){var pos=this.Text.Aes(Ev);var Z5=(this.B3.Ascent+this.B3.
Descent)+this.B3.Leading;Ev=this.Text.ARJ(A.abe(pos,[0,Z5]));}if(this.Cl.CH===5){
var pos=this.Text.Aes(Ev);var Z5=(this.B3.Ascent+this.B3.Descent)+this.B3.Leading;
Ev=this.Text.ARJ(A.abf(pos,[0,Z5]));}var UK=this.Text.Am$(Ev);var Il=this.Text.String.
charCodeAt(UK)||0;if(((Il===0x5E)||(Il===0x7E))||(Il===0x25))UK=UK-1;if(UK!==this.
Ec){this.Ec=UK;A.pe([this,this.AlC],this);this.Mz=true;}},BbI:function(H){if(!this.
Ec)return;var Il=this.Text.String.charCodeAt(this.Ec-1)||0;var CL=1;if(((Il===0x5E
)||(Il===0x7E))||(Il===0x25))CL=2;this.Text.Q(A.ab1(this.Text.String,this.Ec-CL,
CL));this.Ec=this.Ec-CL;this.Mz=true;},Ay8:function(H){if(this.Ec>=(this.Text.String.
length-1))return;var Il=this.Text.String.charCodeAt(this.Ec)||0;var CL=1;if(Il===
0x25)CL=2;this.Text.Q(A.ab1(this.Text.String,this.Ec,CL));this.Mz=true;},BbV:function(
H){this.Text.Q(A.abU(this.Text.String,BqA,this.Ec));this.Ec=this.Ec+1;this.Mz=true;
},BbK:function(H){var Il=this.AiX.D2;var Atg=String.fromCharCode(Il);A.ab5("%c",
Il);if((((Il===0x5E)||(Il===0x7E))||(Il===0xAD))||(Il===0x25))Atg=BqB+String.fromCharCode(
Il);this.Text.Q(A.abU(this.Text.String,Atg,this.Ec));this.Ec=this.Ec+Atg.length;
this.Mz=true;},_Init:function(aArg){A.acn.I2._Init.call(this,aArg);A.acl.U6._Init.
call(this.IM={I:this},0);A.Core.BO._Init.call(this.Cl={I:this},0);A.Core.BO._Init.
call(this.AlS={I:this},0);A.Core.BO._Init.call(this.RP={I:this},0);A.Core.BO._Init.
call(this.AmD={I:this},0);A.Core.BO._Init.call(this.AiX={I:this},0);A.acg.Text._Init.
call(this.Text={I:this},0);A.acg.DQ._Init.call(this.CR={I:this},0);this.__proto__=
C.I2;var B;this.G(BqC);this.IM.B1=false;this.IM.Ct=true;this.IM.Fy(500);this.IM.
V5(500);this.Cl.Filter=147;this.Cl.Bw=false;this.AlS.Filter=151;this.RP.Filter=44;
this.AmD.Filter=149;this.AiX.Filter=145;this.Text.AV(0x3F);this.Text.G(BqD);this.
Text.KF(true);this.Text.A2(0x11);this.Text.Q(A.jV);this.Text.L(0xFF000000);this.
CR.DJ(BqE);this.CR.DX(BqF);this.CR.A74(2);this.CR.A73(2);this.CR.L(0xFF000000);this.
CR.Y(false);this.J(this.Text,0);this.J(this.CR,0);this.IM.R=[B=this.CR,B.Fc,B.Y];
this.Cl.BP=[this,this.Ay7];this.Cl.DR=[this,this.Ay7];this.AlS.BP=[this,this.BbI
];this.AlS.DR=[this,this.BbI];this.RP.BP=[this,this.Ay8];this.RP.DR=[this,this.Ay8
];this.AmD.BP=[this,this.BbV];this.AmD.DR=[this,this.BbV];this.AiX.BP=[this,this.
BbK];this.AiX.DR=[this,this.BbK];this.Text.QI([this,this.AlC]);this.Text.S(A.aaL(
A.aci.ABj));this.B3=A.aaL(A.aci.ABj);},_Done:function(){this.__proto__=A.acn.I2;
this.IM._Done();this.Cl._Done();this.AlS._Done();this.RP._Done();this.AmD._Done(
);this.AiX._Done();this.Text._Done();this.CR._Done();A.acn.I2._Done.call(this);}
,_ReInit:function(){A.acn.I2._ReInit.call(this);this.IM._ReInit();this.Cl._ReInit(
);this.AlS._ReInit();this.RP._ReInit();this.AmD._ReInit();this.AiX._ReInit();this.
Text._ReInit();this.CR._ReInit();},_Mark:function(D){var B;A.acn.I2._Mark.call(this
,D);if((B=this.B3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IM)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Cl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AlS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.RP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AmD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiX)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CR)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::TextEditor"};C.AST={I2:null,Dr:function(H
){switch(this.Cl.CH){case 6:A._GetAutoObject(A.Device.Device).Bej();break;case 7:
A._GetAutoObject(A.Device.Device).Beg();break;case 4:A._GetAutoObject(A.Device.Device
).Bei();break;case 5:A._GetAutoObject(A.Device.Device).Beh();break;default:;}},Ed:
function(H){A._GetAutoObject(C.AZ).Fk();},_Init:function(aArg){C.AC._Init.call(this
,aArg);C.I2._Init.call(this.I2={I:this},0);this.__proto__=C.AST;this.G(B9);this.
N.Y(true);this.Dp(C.Ap2);this.I2.G(E2);this.J(this.I2,0);this.Ba(this.I2);this.N.
Cu=[this,this.Ed];this.N.CS(A.aaL(A.ach.ET));},_Done:function(){this.__proto__=C.
AC;this.I2._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(
this);this.I2._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.I2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TextInputScreen"
};C.ARR={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.AHb],[B=A._GetAutoObject(A.Device.Device),B.AQm,B.AXL],0);},V1:function(H){
if((!!this.Be&&!!this.Be.AW)&&(this.Be.AW.Ch()>0)){if(this.AHU())A._GetAutoObject(
C.BW).S8(A.aaR(A.acf.AMm),[this,this.AG1]);else A._GetAutoObject(C.BW).S8(A.aaR(
A.acf.AMm),null);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).S8(A.aaR(A.acf.
AAG),[this,this.A97]);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).S8(A.aaR(
A.acf.AFt),[this,this.A5S]);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).S8(
A.aaR(A.acf.A3g),[this,this.A96]);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.
BW).S8(A.aaR(A.acf.UnlinkTransponder),[this,this.BkF]);}else{A._GetAutoObject(C.
BW).Xh(A.aaR(A.acf.AMm));A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Xh(A.
aaR(A.acf.AAG));A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Xh(A.aaR(A.acf.
AFt));A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Xh(A.aaR(A.acf.A3g));A.
_GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Xh(A.aaR(A.acf.UnlinkTransponder
));}A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.S7)+A.aaR(
A.acf.Colon));A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.
A3W));A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.Ac9)+A.aaR(
A.acf.Colon));A._GetAutoObject(A.Device.Device).Cj(6);},AaJ:function(){return C.
ALc;},AaK:function(){return C.AND;},QO:function(H){A._GetAutoObject(A.Device.Device
).Aq.Bm(A._GetAutoObject(A.Device.Helper).AMV());},HH:function(H){C.QL.HH.call(this
,H);this.N.Cm(A.aaL(A.ach.AaT));this.N.Cf=[this,this.W8];this.N.FA(A.jV);this.N.
C7(null);this.N.BU((A.aaR(A.acf.A2_)+ZB)+this.DataExportDestinationToString.B0(A.
_GetAutoObject(A.Device.Device).Ve));this.N.Ow(false);this.N.Ox(false);this.N.IW.
Dz(255);},AQa:function(H){A._GetAutoObject(A.Device.Device).Cj(0);var Aif=A._GetAutoObject(
A.Device.Device).BatchResetPurchasedNoticePending();A._GetAutoObject(A.Device.Device
).A6(97,true,Aif.toFixed(),0,null);},AQb:function(H){A._GetAutoObject(A.Device.Device
).Cj(0);this.A3M(this);},AQf:function(H){var B;A._GetAutoObject(A.Device.Device).
Cj(0);if(!A._GetAutoObject(A.Device.Device).Ve&&!A._GetAutoObject(A.Device.Device
).YV){A._GetAutoObject(A.Device.Device).A6(73,true,A.jV,0,[this,this.BbX]);return;
}if(A._GetAutoObject(A.Device.Device).Aqg()===false){A.zX([this,this.Aft],[B=A._GetAutoObject(
A.Device.Device),B.Abl,B.Acd],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.
jV,0,[this,this.Alh]);return;}var Afg=null;switch(A._GetAutoObject(A.Device.Device
).Ve){case 0:Afg=A._GetAutoObject(A.Device.Device).Ane(2);break;case 1:Afg=A._GetAutoObject(
A.Device.Device).Ane(3);break;default:throw new Error(BqG+A._GetAutoObject(A.Device.
Device).Ve.toFixed());}if(Afg.Anh){A._GetAutoObject(A.Device.Device).BatchResetPurchasedNoticePending(
);this.Do(A.aaR(A.acf.BkU));A._GetAutoObject(A.Device.Device).ApI(Afg);}else A._GetAutoObject(
A.Device.Device).A6(98,true,A.jV,0,null);},AHU:function(){var Ax$=this.Be.AW;if(
!Ax$)return false;return true;},W8:function(H){A._GetAutoObject(A.Device.Device).
UpdateOverlayMenu(16);},_Init:function(aArg){C.QL._Init.call(this,aArg);A.Device.
DataExportDestinationToString._Init.call(this.DataExportDestinationToString={I:this
},0);this.__proto__=C.ARR;this.Dp(C.ANt);this.Init(aArg);},_Done:function(){this.
__proto__=C.QL;this.DataExportDestinationToString._Done();C.QL._Done.call(this);
},_ReInit:function(){C.QL._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.QL._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PurchasedAnimalsListScreen"
};C.AND={Ph:null,IV:null,_Init:function(aArg){C.Du._Init.call(this,aArg);A.acg.Am.
_Init.call(this.Ph={I:this},0);A.acg.Am._Init.call(this.IV={I:this},0);this.__proto__=
C.AND;this.Eq.Y(false);this.CX.Y(false);this.Ph.G(BqH);this.Ph.L(A.jb.Text);this.
IV.G(BqI);this.IV.L(A.jb.Text);this.J(this.Ph,0);this.J(this.IV,0);this.Ph.Ax(A.
aaL(A.ach.AuB));this.IV.Ax(A.aaL(A.ach.Auw));},_Done:function(){this.__proto__=C.
Du;this.Ph._Done();this.IV._Done();C.Du._Done.call(this);},_ReInit:function(){C.
Du._ReInit.call(this);this.Ph._ReInit();this.IV._ReInit();},_Mark:function(D){var
B;C.Du._Mark.call(this,D);if((B=this.Ph)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
IV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdPurchasedAnimal"
};C.AK0={DataExportDestinationToString:null,Init:function(aArg){var B;A.zX([this
,this.Ay$],[B=A._GetAutoObject(A.Device.Device),B.ACV,B.AG4],0);A.pe([this,this.
Ay$],this);},V1:function(H){if((!!this.Be&&!!this.Be.AW)&&(this.Be.AW.Ch()>0)){if(
this.AHU())A._GetAutoObject(C.BW).S8(A.aaR(A.acf.AMl),[this,this.AG1]);else A._GetAutoObject(
C.BW).Xh(A.aaR(A.acf.AMl));A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).S8(
A.aaR(A.acf.AAE),[this,this.A97]);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.
BW).S8(A.aaR(A.acf.AFt),[this,this.A5S]);A._GetAutoObject(C.BW).Gq();A._GetAutoObject(
C.BW).S8(A.aaR(A.acf.A3f),[this,this.A96]);}else{A._GetAutoObject(C.BW).Xh(A.aaR(
A.acf.AMl));A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Xh(A.aaR(A.acf.AAE
));A._GetAutoObject(C.BW).Gq();A._GetAutoObject(C.BW).Xh(A.aaR(A.acf.AFt));A._GetAutoObject(
C.BW).Gq();A._GetAutoObject(C.BW).Xh(A.aaR(A.acf.A3f));}A._GetAutoObject(C.BW).Gq(
);A._GetAutoObject(C.BW).Qf(A.aaR(A.acf.A3W));A._GetAutoObject(C.BW).Gq();A._GetAutoObject(
C.BW).Qf(A.aaR(A.acf.Ac9)+A.aaR(A.acf.Colon));A._GetAutoObject(A.Device.Device).
Cj(6);},AaJ:function(){return C.AAA;},AaK:function(){return C.ABN;},QO:function(
H){A._GetAutoObject(A.Device.Device).Aq.Bm(A._GetAutoObject(A.Device.Helper).AMK(
));},HH:function(H){C.QL.HH.call(this,H);this.N.Cm(A.aaL(A.ach.AaT));this.N.Cf=[
this,this.W8];this.N.FA(A.jV);this.N.C7(null);this.N.BU((A.aaR(A.acf.A2_)+String.
fromCharCode(0x0A))+this.DataExportDestinationToString.B0(0));this.N.Ow(false);this.
N.Ox(false);this.N.IW.Dz(255);},AQa:function(H){A._GetAutoObject(A.Device.Device
).Cj(0);var Aif=A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();
A._GetAutoObject(A.Device.Device).A6(97,true,Aif.toFixed(),0,null);},AQb:function(
H){A._GetAutoObject(A.Device.Device).Cj(0);this.A3L(this);},AQf:function(H){var B;
A._GetAutoObject(A.Device.Device).Cj(0);if(!A._GetAutoObject(A.Device.Device).YV
){A._GetAutoObject(A.Device.Device).A6(73,true,A.jV,0,[this,this.BbX]);return;}if(
A._GetAutoObject(A.Device.Device).Aqg()===false){A.zX([this,this.Aft],[B=A._GetAutoObject(
A.Device.Device),B.Abl,B.Acd],0);A._GetAutoObject(A.Device.Device).A6(74,true,A.
jV,0,[this,this.Alh]);return;}var Afg=A._GetAutoObject(A.Device.Device).Ane(0);if(
Afg.Anh){A._GetAutoObject(A.Device.Device).BatchResetBirthNoticePending();this.Do(
A.aaR(A.acf.Ben));A._GetAutoObject(A.Device.Device).ApI(Afg);}else A._GetAutoObject(
A.Device.Device).A6(70,true,A.jV,0,null);},AHU:function(){var Ax$=this.Be.AW;if(
!Ax$)return false;var P;for(P=0;P<Ax$.Ch();P++)if(A._GetAutoObject(A.Device.Helper
).Ajq(Ax$.AMZ(P,34))===false)return true;return false;},W8:function(H){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(17);},Ay$:function(H){if(A._GetAutoObject(A.Device.
Device).Apy===1)A.pe([this,this.A3S],this);},_Init:function(aArg){C.QL._Init.call(
this,aArg);A.Device.DataExportDestinationToString._Init.call(this.DataExportDestinationToString={
I:this},0);this.__proto__=C.AK0;this.Dp(C.AM4);this.Init(aArg);},_Done:function(
){this.__proto__=C.QL;this.DataExportDestinationToString._Done();C.QL._Done.call(
this);},_ReInit:function(){C.QL._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.QL._Mark.call(this,D);if((B=this.DataExportDestinationToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BirthRegistrationsListScreen"
};C.AM4={_Init:function(aArg){C.Ajf._Init.call(this,aArg);this.__proto__=C.AM4;this.
Text.Q(A.aaR(A.acf.AAt));},_ReInit:function(){C.Ajf._ReInit.call(this);this.Text.
Q(A.aaR(A.acf.AAt));},_className:"Application::HeaderBirthRegistrationsList"};C.
ANt={_Init:function(aArg){C.Ajf._Init.call(this,aArg);this.__proto__=C.ANt;this.
Text.Q(A.aaR(A.acf.AEz));},_ReInit:function(){C.Ajf._ReInit.call(this);this.Text.
Q(A.aaR(A.acf.AEz));},_className:"Application::HeaderPurchasedAnimalsList"};C.ALc={
Nh:0,AN:null,Sq:null,SS:0,Init:function(aArg){},Bg:function(aSize){C.A$.Bg.call(
this,aSize);this.Background.G(A.abK(this.Background.M,aSize));this.V.G(A.abN(this.
V.M,((aSize[0]*70)/100)|0));this.AN.G([this.V.M[2]-1,0,this.V.M[2]+1,aSize[1]]);
this.Sq.G([this.V.M[2],0,aSize[0],aSize[1]]);},Ai:function(Ae){C.A$.Ai.call(this
,Ae);this.Sq.L(this.V.AP);this.U(A._GetAutoObject(A.Device.Converter).Ub(this.Nh
));this.Sq.Q(A._GetAutoObject(A.acj.Ky).ABl(this.SS));},B$:function(Ac){if(!this.
AW)return;this.Hr=Ac;if(!!this.AW){this.Nh=this.AW.LE(Ac,26);this.SS=this.AW.Hy(
Ac,4);this.An();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.acg.AI._Init.
call(this.AN={I:this},0);C.CP._Init.call(this.Sq={I:this},0);this.__proto__=C.ALc;
this.AN.G(A9N);this.AN.L(A.jb.Bb);this.Sq.G(A9P);this.J(this.AN,0);this.J(this.Sq
,0);this.V.S(A.aaL(A.fl.Ak));this.V.A5(A.aaL(A.fl.By));this.Sq.S(A.aaL(A.fl.Ak));
this.Sq.A5(A.aaL(A.fl.By));this.Sq.CC(A.aaL(A.fl.By));this.Init(aArg);},_Done:function(
){this.__proto__=C.A$;this.AN._Done();this.Sq._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AN._ReInit();this.Sq._ReInit();this.V.S(
A.aaL(A.fl.Ak));this.V.A5(A.aaL(A.fl.By));this.Sq.S(A.aaL(A.fl.Ak));this.Sq.A5(A.
aaL(A.fl.By));this.Sq.CC(A.aaL(A.fl.By));},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.AN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sq)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::CalfListPurchasedAnimalItem"};C.ASk={
Tn:null,Kz:null,Tm:null,UI:A.jV,Ai:function(Ae){var F;C.Sn.Ai.call(this,Ae);this.
Tn.L(this.V.AP);var AoG=false;if((!this.Df||!(F=this.Df,F[1].call(F[0])))&&!this.
A3)AoG=true;this.Tn.Y(AoG);this.Pa.Y(!AoG);this.Vg.Y(!AoG);this.QD.Y(!AoG);this.
XP.Y(!AoG);this.PL.Y(!AoG);},Afs:function(H){var B;var F;if(!this.UI.length){C.Sn.
Afs.call(this,H);return;}var BL=this.FJ;var GH=A._GetAutoObject(A.Device.Arb).Bxo(
this.UI);this.UI=A.jV;if(!GH){A._GetAutoObject(A.Device.Device).A6(102,true,A.jV
,0,null);return;}if(this.Ark&&(GH>A._GetAutoObject(A.Device.Helper).Dx())){A._GetAutoObject(
A.Device.Device).A6(103,true,A.jV,0,null);return;}this.TP(((B=(GH|0))<0)?B+0x100000000:
B);if(this.FJ!==BL){if(!!this.Df)(F=this.Df,F[2].call(F[0],this.FJ));A.abo(this.
Df,0);}if(!!this.Op)A.pe(this.Op,this);},A0K:function(H){if(this.UI.length<8)this.
UI=this.UI+String.fromCharCode(this.Kz.D2);},_Init:function(aArg){C.Sn._Init.call(
this,aArg);A.acg.Text._Init.call(this.Tn={I:this},0);A.Core.BO._Init.call(this.Kz={
I:this},0);A.Core.BO._Init.call(this.Tm={I:this},0);this.__proto__=C.ASk;this.Tn.
G(BqJ);this.Tn.IZ(true);this.Tn.A2(0x12);this.Tn.Q(A.aaR(A.acf.A3u));this.Kz.Filter=
143;this.Tm.Filter=149;this.J(this.Tn,0);this.Tn.S(A.aaL(A.fl.Ey));this.Kz.BP=[this
,this.A0K];this.Tm.BP=[this,this.A_O];},_Done:function(){this.__proto__=C.Sn;this.
Tn._Done();this.Kz._Done();this.Tm._Done();C.Sn._Done.call(this);},_ReInit:function(
){C.Sn._ReInit.call(this);this.Tn._ReInit();this.Kz._ReInit();this.Tm._ReInit();
this.Tn.Q(A.aaR(A.acf.A3u));this.Tn.S(A.aaL(A.fl.Ey));},_Mark:function(D){var B;
C.Sn._Mark.call(this,D);if((B=this.Tn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tm)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::SettingsItemDateHid"};C.ASn={Kz:null,Tm:null,UI:A.jV,Ja:
function(H){var F;if(!this.UI.length){C.QQ.Ja.call(this,H);return;}if(this.Arj)return;
if(!this.UI.length)this.Tm.O9=true;var BL=this.AK;var GH=A._GetAutoObject(A.Device.
Arb).Bxp(this.UI);this.UI=A.jV;if(!GH){A._GetAutoObject(A.Device.Device).A6(104,
true,A.jV,0,null);return;}this.Bx(GH);if(this.AK!==BL){if(!!this.R)(F=this.R,F[2
].call(F[0],this.AK));A.abo(this.R,0);}if(!!this.Op)A.pe(this.Op,this);},A0K:function(
H){if(this.Arj)return;if(this.UI.length<16)this.UI=this.UI+String.fromCharCode(this.
Kz.D2);},_Init:function(aArg){C.QQ._Init.call(this,aArg);A.Core.BO._Init.call(this.
Kz={I:this},0);A.Core.BO._Init.call(this.Tm={I:this},0);this.__proto__=C.ASn;this.
Aq0(false);this.Kz.Filter=143;this.Tm.Filter=149;this.Kz.BP=[this,this.A0K];this.
Tm.BP=[this,this.Asj];},_Done:function(){this.__proto__=C.QQ;this.Kz._Done();this.
Tm._Done();C.QQ._Done.call(this);},_ReInit:function(){C.QQ._ReInit.call(this);this.
Kz._ReInit();this.Tm._ReInit();},_Mark:function(D){var B;C.QQ._Mark.call(this,D);
if((B=this.Kz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tm)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::SettingsItemNaisdHid"};C.ANq={Am:null,DY:null
,Init:function(aArg){var B;A.zX([this,this.En],[B=A._GetAutoObject(A.Device.Device
),B.A6o,B.ADJ],0);A.pe([this,this.En],this);},C5:function(E){C.BN.C5.call(this,E
);this.Am.L(E);this.DY.AjS(E);},Abo:function(E){this.DY.C1(E);},En:function(H){this.
DY.U(A._GetAutoObject(A.Device.Device).AuS.toFixed());},_Init:function(aArg){C.BN.
_Init.call(this,aArg);A.acg.Am._Init.call(this.Am={I:this},0);C.DY._Init.call(this.
DY={I:this},0);this.__proto__=C.ANq;this.Am.G(AGU);this.DY.AV(0x14);this.DY.G(BqK
);this.DY.AjS(A.jb.Bh);this.DY.C1(A.jb.AbX);this.DY.HF(2);this.DY.BiE(0x11);this.
J(this.Am,0);this.J(this.DY,0);this.Am.Ax(A.aaL(A.ach.AN1));this.DY.S(A.aaL(A.fl.
By));this.Init(aArg);},_Done:function(){this.__proto__=C.BN;this.Am._Done();this.
DY._Done();C.BN._Done.call(this);},_ReInit:function(){C.BN._ReInit.call(this);this.
Am._ReInit();this.DY._ReInit();this.DY.S(A.aaL(A.fl.By));},_Mark:function(D){var
B;C.BN._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
DY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderMassRecordings"
};C.APD={Aay:null,AdF:null,Vd:null,Init:function(aArg){this.Ba(this.Aay);},KD:function(
){if(!this.Bv){this.Bv=A._NewObject(C.N,0);this.Bv.Cu=[this,this.W7];this.Bv.Cf=
null;this.Bv.Ci=[this,this.A0N];this.Bv.BU(A.jV);this.Bv.Cm(null);this.Bv.CS(A.aaL(
A.ach.Vt));}return this.Bv;},Ay4:function(H){var Aa=(C.AiE.isPrototypeOf(H)?H:null
);if(Aa===this.Aay)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(14);else if(
Aa===this.AdF)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(15);else throw new
Error(A9n);},_Init:function(aArg){C.Fe._Init.call(this,aArg);C.AiE._Init.call(this.
Aay={I:this},0);C.AiE._Init.call(this.AdF={I:this},0);C.APH._Init.call(this.Vd={
I:this},0);this.__proto__=C.APD;var B;this.G(Q1);this.Text.Q(A.aaR(A.acf.AAy));this.
Aay.G(KL);this.Aay.U(A.aaR(A.acf.Ai1));this.AdF.G(Q2);this.AdF.U(A.aaR(A.acf.AEF
));this.Vd.G(WE);this.Vd.U(A.aaR(A.acf.A22));this.J(this.Aay,0);this.J(this.AdF,
0);this.J(this.Vd,0);this.Text.S(A.aaL(A.fl.Ak));this.Aay.AQ=[this,this.Ay4];this.
AdF.AQ=[this,this.Ay4];this.Vd.AQT([B=A._GetAutoObject(A.Device.Device),B.ACZ,B.
AG7]);this.Init(aArg);},_Done:function(){this.__proto__=C.Fe;this.Aay._Done();this.
AdF._Done();this.Vd._Done();C.Fe._Done.call(this);},_ReInit:function(){C.Fe._ReInit.
call(this);this.Aay._ReInit();this.AdF._ReInit();this.Vd._ReInit();this.Text.Q(A.
aaR(A.acf.AAy));this.Aay.U(A.aaR(A.acf.Ai1));this.AdF.U(A.aaR(A.acf.AEF));this.Vd.
U(A.aaR(A.acf.A22));this.Text.S(A.aaL(A.fl.Ak));},_Mark:function(D){var B;C.Fe._Mark.
call(this,D);if((B=this.Aay)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdF)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Vd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingOverlayMenu"};C.APC={AnimalTableFields:null,Au:null,Z:
null,JE:null,CT:function(){this.Ah1(this);},Init:function(aArg){A.zV([this,this.
Ah1],this.AnimalTableFields,0);A.pe([this,this.Ah1],this);},Dr:function(H){C.Fe.
Dr.call(this,H);this.MD(this);},KD:function(){if(!this.Bv){this.Bv=A._NewObject(
C.N,0);this.Bv.Cu=[this,this.Ed];this.Bv.Cf=[this,this.A0L];this.Bv.Ci=[this,this.
A0$];this.Bv.C7(A.aaL(A.ach.Aqc));this.Bv.Cm(A.aaL(A.ach.Ap7));this.Bv.CS(A.aaL(
A.ach.Vt));}return this.Bv;},Ed:function(H){this.AzD();this.W7(this);},Ah1:function(
H){this.Aod();var P;for(P=0;P<this.AnimalTableFields.XV();P=P+1){var ZJ=A._GetAutoObject(
C.AlI).Vn(P);this.AYQ(ZJ);}this.J(this.JE,0);A.aaS([this,this.MD],this);},E7:function(
H){var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((B=this.Z.M)[3]-B[1]);
this.Au.Ml(-this.Z.Bp[1]);},MD:function(H){var B;this.Z.UY(null,null);if(!!this.
AY&&((this.AY.T&0x400)===0x400))this.Z.Hx(this.AY,true,null,null);},AYQ:function(
GW){var AxL=A._NewObject(A.Device.AnimalTableFieldsToString,0);var Aa=A._NewObject(
C.RQ,0);Aa.U(AxL.B0(GW));Aa.Aj(true);Aa.GN=GW;Aa.A7r(this.AnimalTableFields.LJ(GW
));this.J(Aa,0);this.Y0(Aa);},Aod:function(){var B;var W=this.Z.Ag;while(!!W&&!((
W.T&0x200)===0x200)){var Ac4=W;W=W.Ag;if(((Ac4.T&0x400)===0x400))this.HG(Ac4);}}
,AzD:function(){var B;this.AnimalTableFields.Clear();var W=this.Z.Ag;while(!!W&&
!((W.T&0x200)===0x200)){if(((W.T&0x400)===0x400)&&!(W===this.JE)){var Aa=(C.RQ.isPrototypeOf(
W)?W:null);if(!!Aa){this.AnimalTableFields.J(Aa.GN);if(Aa.AQs())this.AnimalTableFields.
ASg(Aa.GN);}else A.ab5("%s",Aw8);}W=W.Ag;}this.AnimalTableFields.Co();},A0L:function(
H){var B;var Aa=(C.RQ.isPrototypeOf(B=this.AY)?B:null);if(!!Aa){var AyW=(C.RQ.isPrototypeOf(
B=Aa.Ag)?B:null);if(!!AyW){this.AgV(AyW,Aa);A.pe([this,this.MD],this);}}},A0$:function(
H){var B;var Aa=(C.RQ.isPrototypeOf(B=this.AY)?B:null);if(!!Aa){var Azr=(C.RQ.isPrototypeOf(
B=Aa.AH)?B:null);if(!!Azr){this.AgV(Aa,Azr);A.pe([this,this.MD],this);}}},Ai5:function(
H){var B;A._GetAutoObject(A.Device.Device).Arp(this);A.pe([this,this.Ah1],this);
},G3:function(H){A.pe([this,this.E7],this);},_Init:function(aArg){C.Fe._Init.call(
this,aArg);C.Au._Init.call(this.Au={I:this},0);A.Core.Z._Init.call(this.Z={I:this
},0);C.At3._Init.call(this.JE={I:this},0);this.__proto__=C.APC;this.G(Q1);this.Text.
Q(A.aaR(A.acf.AEF));this.Au.G(IJ);this.Z.G(A9W);this.Z.J$(1);this.JE.G(AGp);this.
JE.Aj(true);this.JE.U(A.aaR(A.acf.Ai5));this.J(this.Au,0);this.J(this.Z,0);this.
J(this.JE,0);this.Z.Eh=[this,this.G3];this.JE.AQ=[this,this.Ai5];this.AnimalTableFields=
A._GetAutoObject(C.AlI);this.Init(aArg);},_Done:function(){this.__proto__=C.Fe;this.
Au._Done();this.Z._Done();this.JE._Done();C.Fe._Done.call(this);},_ReInit:function(
){C.Fe._ReInit.call(this);this.Au._ReInit();this.Z._ReInit();this.JE._ReInit();this.
Text.Q(A.aaR(A.acf.AEF));this.JE.U(A.aaR(A.acf.Ai5));this.CT();},_Mark:function(
D){var B;C.Fe._Mark.call(this,D);if((B=this.AnimalTableFields)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Z)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.JE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MassRecordingFieldSettingsMenu"};C.APB={Z:null,B4:null,C4:null,CB:
null,GA:null,Au:null,AnimalType:null,Gender:null,Breed:null,Uh:null,Init:function(
aArg){A.zX([this,this.AtF],this.B4.R,0);A.zX([this,this.AK5],this.CB.R,0);A.zX([
this,this.ATv],this.GA.R,0);A.zX([this,this.Aul],this.C4.R,0);this.Ba(this.B4);}
,Dr:function(H){C.Fe.Dr.call(this,H);this.MD(this);},KD:function(){if(!this.Bv){
this.Bv=A._NewObject(C.N,0);this.Bv.Cu=[this,this.W7];this.Bv.Cf=null;this.Bv.Ci=
null;this.Bv.BU(A.jV);this.Bv.Cm(null);this.Bv.CS(A.aaL(A.ach.Vt));}return this.
Bv;},E7:function(H){var B;this.Au.Mk((B=this.Z.C_(0x1))[3]-B[1]);this.Au.Mm((B=this.
Z.M)[3]-B[1]);this.Au.Ml(-this.Z.Bp[1]);},MD:function(H){var B;this.Z.UY(null,null
);if(!!this.AY&&((this.AY.T&0x400)===0x400))this.Z.Hx(this.AY,true,null,null);},
G3:function(H){A.pe([this,this.E7],this);},AtF:function(H){var F;A._GetAutoObject(
A.Device.Device).DS((F=this.B4.R,F[1].call(F[0])));},ATv:function(H){var F;A._GetAutoObject(
A.Device.Device).M5((F=this.GA.R,F[1].call(F[0])));},Aul:function(H){var F;A._GetAutoObject(
A.Device.Device).JG((F=this.C4.R,F[1].call(F[0])));},AK5:function(H){var F;A._GetAutoObject(
A.Device.Device).NH((F=this.CB.R,F[1].call(F[0])));},_Init:function(aArg){C.Fe._Init.
call(this,aArg);A.Core.Z._Init.call(this.Z={I:this},0);C.Xg._Init.call(this.B4={
I:this},0);C.Xg._Init.call(this.C4={I:this},0);C.Xg._Init.call(this.CB={I:this},
0);C.Xg._Init.call(this.GA={I:this},0);C.Au._Init.call(this.Au={I:this},0);C.AnimalType.
_Init.call(this.AnimalType={I:this},0);C.Gender._Init.call(this.Gender={I:this},
0);C.Breed._Init.call(this.Breed={I:this},0);C.Ui._Init.call(this.Uh={I:this},0);
this.__proto__=C.APB;var B;this.G(Q1);this.Text.Q(A.aaR(A.acf.Ai1));this.Z.G(A9W
);this.Z.J$(1);this.B4.G(Ahe);this.B4.Ar(true);this.B4.Aj(true);this.B4.U(A.aaR(
A.acf.AeK));this.C4.G(Aw0);this.C4.Ar(true);this.C4.Aj(true);this.C4.U(A.aaR(A.acf.
AeA));this.CB.G(AnC);this.CB.Ar(true);this.CB.Aj(true);this.CB.U(A.aaR(A.acf.Breed
));this.GA.G(Ar8);this.GA.Ar(true);this.GA.Aj(true);this.GA.U(A.aaR(A.acf.I6));this.
Au.G(IJ);this.AnimalType.Av(A._GetAutoObject(A.Device.Device).AnimalType);this.Gender.
Av(A._GetAutoObject(A.Device.Device).Gender);this.Breed.Av(A._GetAutoObject(A.Device.
Device).Breed);this.Uh.Av(A._GetAutoObject(A.Device.Device).WhereAbouts);this.J(
this.Z,0);this.J(this.B4,0);this.J(this.C4,0);this.J(this.CB,0);this.J(this.GA,0
);this.J(this.Au,0);this.Z.Eh=[this,this.G3];this.B4.V3(A.aaL(A.fl.Hi));this.B4.
V4(A.aaL(A.fl.Hi));this.B4.Av([B=this.AnimalType,B.Ce,B.Cg]);this.B4.CN(this.AnimalType
);this.C4.V3(A.aaL(A.fl.Hi));this.C4.V4(A.aaL(A.fl.Hi));this.C4.Av([B=this.Gender
,B.Ce,B.Cg]);this.C4.CN(this.Gender);this.CB.V3(A.aaL(A.fl.Hi));this.CB.V4(A.aaL(
A.fl.Hi));this.CB.Av([B=this.Breed,B.Ce,B.Cg]);this.CB.CN(this.Breed);this.GA.V3(
A.aaL(A.fl.Hi));this.GA.V4(A.aaL(A.fl.Hi));this.GA.Av([B=this.Uh,B.Ce,B.Cg]);this.
GA.CN(this.Uh);this.Init(aArg);},_Done:function(){this.__proto__=C.Fe;this.Z._Done(
);this.B4._Done();this.C4._Done();this.CB._Done();this.GA._Done();this.Au._Done(
);this.AnimalType._Done();this.Gender._Done();this.Breed._Done();this.Uh._Done();
C.Fe._Done.call(this);},_ReInit:function(){C.Fe._ReInit.call(this);this.Z._ReInit(
);this.B4._ReInit();this.C4._ReInit();this.CB._ReInit();this.GA._ReInit();this.Au.
_ReInit();this.AnimalType._ReInit();this.Gender._ReInit();this.Breed._ReInit();this.
Uh._ReInit();this.Text.Q(A.aaR(A.acf.Ai1));this.B4.U(A.aaR(A.acf.AeK));this.C4.U(
A.aaR(A.acf.AeA));this.CB.U(A.aaR(A.acf.Breed));this.GA.U(A.aaR(A.acf.I6));},_Mark:
function(D){var B;C.Fe._Mark.call(this,D);if((B=this.Z)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.B4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Au)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uh)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassRecordingDefaultsSettingsOverlayMenu"
};C.AlM={CL:0,AkL:A.abi(17,0,null),Vn:function(IK){return this.AkL.Get(IK);},XV:
function(){return this.CL;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.AkL.Set(
P,0);this.CL=0;},J:function(ZD){if(this.CL>=17)A.ab5("%s",BqL);else{this.AkL.Set(
this.CL,ZD);this.CL=this.CL+1;}},Co:function(){},EJ:function(Ahk){var AIf=Ahk.indexOf(
String.fromCharCode(0x2C),0);var AZe=A.jV;var P=0;this.CL=0;while(P<17)if(Ahk===
A.jV)P++;else{if(AIf===-1){AZe=Ahk;Ahk=A.jV;}else{AZe=A.abV(Ahk,AIf);Ahk=A.ab1(Ahk
,0,AIf+1);}var ZJ=A.abZ(AZe,0,10)|0;if(this.Bgo(ZJ)){this.AkL.Set(this.CL,ZJ);this.
CL=this.CL+1;P++;}AIf=Ahk.indexOf(String.fromCharCode(0x2C),0);}if(Ahk!==A.jV)A.
ab5("%s",BqM);},toString:function(){var B;var AyU=A.jV;var P;for(P=0;P<this.CL;P=
P+1){if(P>0)AyU=AyU+AGq;AyU=AyU+(((B=this.AkL.Get(P))<0)?B+0x100000000:B).toFixed(
);}return AyU;},Contains:function(ZD){var P;for(P=0;P<this.CL;P=P+1)if(this.AkL.
Get(P)===ZD)return true;return false;},Bgo:function(ZD){return true;},_Init:function(
aArg){(this.AkL=[]).__proto__=C.AlM.AkL;this.__proto__=C.AlM;A.h7++;},_Done:function(
){this.__proto__=null;A.h7--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::AnimalDataFieldList"};C.AKd={Ae7:null,Init:function(aArg){var B;A.
zX([this,this.BbD],[B=A._GetAutoObject(A.Device.Device),B.A5W,B.A_a],0);A.zX([this
,this.BbE],[B=A._GetAutoObject(A.Device.Device),B.A5X,B.A_b],0);A.pe([this,this.
BbD],this);A.pe([this,this.BbE],this);},Clear:function(){C.AlM.Clear.call(this);
this.Ae7.Clear();},Co:function(){A._GetAutoObject(A.Device.Device).AqG(this.Ae7.
toString());A._GetAutoObject(A.Device.Device).AqH(this.toString());},BbD:function(
H){this.Ae7.EJ(A._GetAutoObject(A.Device.Device).Az$);A.we(this,0);},BbE:function(
H){this.EJ(A._GetAutoObject(A.Device.Device).AAa);A.we(this,0);},LJ:function(ZD){
return this.Ae7.Contains(ZD);},ASg:function(ZD){if(!this.LJ(ZD))this.Ae7.J(ZD);}
,A4j:function(){return this.Ae7.XV();},_Init:function(aArg){C.AlM._Init.call(this
,aArg);this.__proto__=C.AKd;this.Ae7=A._NewObject(C.AlM,0);this.Init(aArg);},_Mark:
function(D){var B;C.AlM._Mark.call(this,D);if((B=this.Ae7)&&(B._cycle!=D))B._Mark(
B._cycle=D);},_className:"Application::ActiveAnimalTableFieldsClass"};C.AlI={_Init:
function(){C.AKd._Init.call(this,0);},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.APH={Init:function(aArg){this.V.S(A.aaL(A.fl.Ak));this.
V.Text.A2(0x11);this.V.Text.HF(10);},Bg:function(aSize){C.TI.Bg.call(this,aSize);
this.V.G(A.abN(this.V.M,this.Ma.M[0]));},Ai:function(Ae){var B;C.TI.Ai.call(this
,Ae);var G1=((Ae&0x10)===0x10);var Fg=((Ae&0x20)===0x20);var Gm=this.Bk.Bw;var FE=
A.jb.Ads;var GG=A.jb.Bh;if(this.G8){FE=A.jb.Bh;GG=A.jb.Text;}if(!G1){this.Background.
L(FE);this.V.L(A.jb.CM);}else if(Gm){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh
);}else if(Fg){this.Background.L(A.jb.AY);this.V.L(A.jb.Bh);}else{this.Background.
L(FE);this.V.L(GG);}this.Lt=G1;this.Ks=Fg;this.P8=Gm;},_Init:function(aArg){C.TI.
_Init.call(this,aArg);this.__proto__=C.APH;this.Init(aArg);},_className:"Application::MenuItemCheckBoxOverlay"
};C.ARQ={X_:null,Ai8:null,KD:function(){if(!this.Bv){this.Bv=A._NewObject(C.N,0);
this.Bv.Cu=[this,this.W7];this.Bv.Cf=null;this.Bv.Ci=null;this.Bv.BU(A.jV);this.
Bv.Cm(null);this.Bv.CS(A.aaL(A.ach.Vt));}return this.Bv;},_Init:function(aArg){C.
OverlayMenu._Init.call(this,aArg);C.Xg._Init.call(this.X_={I:this},0);C.Ve._Init.
call(this.Ai8={I:this},0);this.__proto__=C.ARQ;var B;this.G(JN);this.X_.G(JN);this.
X_.U(A.aaR(A.acf.A3s));this.Ai8.Av(A._GetAutoObject(A.Device.Device).Ve);this.J(
this.X_,0);this.X_.V3(A.aaL(A.fl.Hi));this.X_.V4(A.aaL(A.fl.Hi));this.X_.Av([B=this.
Ai8,B.Ce,B.Cg]);this.X_.CN(this.Ai8);this.Ai8.BiW([B=A._GetAutoObject(A.Device.Device
),B.AQm,B.AXL]);},_Done:function(){this.__proto__=C.OverlayMenu;this.X_._Done();
this.Ai8._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.X_._ReInit();this.Ai8._ReInit();this.X_.U(A.aaR(A.acf.A3s
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.X_)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ai8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PurchasedAnimalsListOverlayMenu"};C.Ve={Aau:null,DataExportDestinationToString:
null,Dt:function(){return 2;},C$:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gx:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
DataExportDestinationToString.B0(aIndex);},DO:function(A1){return A1;},Hj:function(
){return 1;},Av:function(E){var F;C.AB.Av.call(this,E);if(!!this.Aau)(F=this.Aau
,F[2].call(F[0],E));},BiW:function(E){if(A.aaZ(this.Aau,E))return;if(!!this.Aau)
A.z$([this,this.Ao2],this.Aau,0);this.Aau=E;if(!!this.Aau)A.zX([this,this.Ao2],this.
Aau,0);A.pe([this,this.Ao2],this);},Ao2:function(H){var F;if(!!this.Aau)this.R=(
F=this.Aau,F[1].call(F[0]));else this.R=0;A.abo([this,this.Ce,this.Cg],0);},_Init:
function(aArg){C.AB._Init.call(this,aArg);A.Device.DataExportDestinationToString.
_Init.call(this.DataExportDestinationToString={I:this},0);this.__proto__=C.Ve;},
_Done:function(){this.__proto__=C.AB;this.DataExportDestinationToString._Done();
C.AB._Done.call(this);},_ReInit:function(){C.AB._ReInit.call(this);this.DataExportDestinationToString.
_ReInit();},_Mark:function(D){var B;C.AB._Mark.call(this,D);if((B=this.Aau)&&((B=
B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DataExportDestinationToString)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DataExportDestination"};C.AKZ={
Yf:null,Aks:null,KD:function(){if(!this.Bv){this.Bv=A._NewObject(C.N,0);this.Bv.
Cu=[this,this.W7];this.Bv.Cf=null;this.Bv.Ci=null;this.Bv.BU(A.jV);this.Bv.Cm(null
);this.Bv.CS(A.aaL(A.ach.Vt));}return this.Bv;},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.Xg._Init.call(this.Yf={I:this},0);C.ACu._Init.call(this.
Aks={I:this},0);this.__proto__=C.AKZ;var B;this.G(JN);this.Yf.G(JN);this.Yf.U(A.
aaR(A.acf.Display));this.Aks.Av(A._GetAutoObject(A.Device.Device).Apy);this.J(this.
Yf,0);this.Yf.V3(A.aaL(A.fl.Hi));this.Yf.V4(A.aaL(A.fl.Hi));this.Yf.Av([B=this.Aks
,B.Ce,B.Cg]);this.Yf.CN(this.Aks);this.Aks.BjZ([B=A._GetAutoObject(A.Device.Device
),B.ACV,B.AG4]);},_Done:function(){this.__proto__=C.OverlayMenu;this.Yf._Done();
this.Aks._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Yf._ReInit();this.Aks._ReInit();this.Yf.U(A.aaR(A.acf.Display
));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Yf)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Aks)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BirthRegistrationsListOverlayMenu"};C.ACu={Aa8:null,ListViewScopeToString:
null,Dt:function(){return 2;},C$:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},Gx:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jV;return this.
ListViewScopeToString.B0(aIndex);},DO:function(A1){return A1;},Hj:function(){return 1;
},Av:function(E){var F;C.AB.Av.call(this,E);if(!!this.Aa8)(F=this.Aa8,F[2].call(
F[0],E));},BjZ:function(E){if(A.aaZ(this.Aa8,E))return;if(!!this.Aa8)A.z$([this,
this.Ao2],this.Aa8,0);this.Aa8=E;if(!!this.Aa8)A.zX([this,this.Ao2],this.Aa8,0);
A.pe([this,this.Ao2],this);},Ao2:function(H){var F;if(!!this.Aa8)this.R=(F=this.
Aa8,F[1].call(F[0]));else this.R=0;A.abo([this,this.Ce,this.Cg],0);},_Init:function(
aArg){C.AB._Init.call(this,aArg);A.Device.ListViewScopeToString._Init.call(this.
ListViewScopeToString={I:this},0);this.__proto__=C.ACu;},_Done:function(){this.__proto__=
C.AB;this.ListViewScopeToString._Done();C.AB._Done.call(this);},_ReInit:function(
){C.AB._ReInit.call(this);this.ListViewScopeToString._ReInit();},_Mark:function(
D){var B;C.AB._Mark.call(this,D);if((B=this.Aa8)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.ListViewScopeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ListViewScope"};
C._Init=function(){C.AKO.__proto__=A.Core.Root;C.AC.__proto__=C.AaA;C.Wa.__proto__=
A.Core.O;C.Oh.__proto__=A.Core.O;C.YW.__proto__=A.acl.FX;C.D_.__proto__=A.Core.O;
C.Xt.__proto__=C.AC;C.ASy.__proto__=C.AC;C.Auu.__proto__=C.AC;C.QP.__proto__=C.AC;
C.Fa.__proto__=C.Hg;C.Au.__proto__=A.Core.O;C.Cs.__proto__=C.AC;C.Ap2.__proto__=
C.BN;C.BN.__proto__=A.Core.O;C.N.__proto__=A.Core.O;C.ABJ.__proto__=C.Amg;C.AFc.
__proto__=C.DH;C.Cd.__proto__=C.T_;C.Dj.__proto__=C.D8;C.I1.__proto__=C.Dj;C.B_.
__proto__=C.Dj;C.Sn.__proto__=C.Dj;C.Os.__proto__=C.Ds;C.QU.__proto__=C.AB;C.ASN.
__proto__=C.A$;C.FP.__proto__=A.Core.O;C.A$.__proto__=C.Cd;C.EO.__proto__=C.AC;C.
AAC.__proto__=C.A$;C.Adq.__proto__=C.AC;C.L$.__proto__=C.Oh;C.ASI.__proto__=C.AC;
C.Ap1.__proto__=C.ABJ;C.Gender.__proto__=C.AB;C.BirthType.__proto__=C.AB;C.AnimalType.
__proto__=C.AB;C.ASo.__proto__=C.AbM;C.Er.__proto__=A.Core.O;C.Rating.__proto__=
A.Core.O;C.Aru.__proto__=A.Core.O;C.AEY.__proto__=C.Dj;C.CP.__proto__=A.Core.O;C.
Aje.__proto__=C.Vq;C.AlL.__proto__=C.QT;C.AgS.__proto__=A.Core.O;C.Hh.__proto__=
C.AC;C.ARG.__proto__=C.AC;C.Mc.__proto__=C.Cd;C.AmB.__proto__=C.Cd;C.OverlayMenu.
__proto__=C.AaA;C.ANN.__proto__=C.OverlayMenu;C.Gt.__proto__=A.Core.O;C.AaA.__proto__=
A.Core.O;C.ASt.__proto__=A.acl.AdD;C.Amg.__proto__=C.BN;C.ABK.__proto__=C.Amg;C.
J3.__proto__=C.AB;C.ASq.__proto__=C.Dj;C.AEA.__proto__=C.AC;C.HQ.__proto__=C.AC;
C.VX.__proto__=C.Aqs;C.Ix.__proto__=C.ABK;C.IS.__proto__=C.AC;C.AKm.__proto__=C.
AEA;C.AKi.__proto__=C.EO;C.ALA.__proto__=C.EO;C.AdH.__proto__=C.Cd;C.Qh.__proto__=
C.AdH;C.ANz.__proto__=C.BN;C.Aus.__proto__=C.BN;C.DE.__proto__=C.E9;C.A0.__proto__=
A.Core.O;C.FQ.__proto__=C.AB;C.Aez.__proto__=C.B_;C.ART.__proto__=C.AC;C.Abc.__proto__=
C.Cd;C.TI.__proto__=C.Cd;C.ALK.__proto__=C.Cs;C.ASP.__proto__=C.Cs;C.ALV.__proto__=
C.Cs;C.AR5.__proto__=C.Cs;C.Wn.__proto__=A.Core.O;C.Qy.__proto__=C.Fa;C.DY.__proto__=
A.Core.O;C.TE.__proto__=C.AC;C.ATk.__proto__=C.EO;C.AKn.__proto__=C.AwD;C.AS7.__proto__=
C.Cs;C.Ad4.__proto__=C.AB;C.AwD.__proto__=C.AC;C.ATt.__proto__=C.Cs;C.ASp.__proto__=
C.AbM;C.Az9.__proto__=A.Graphics.Hn;C.AiD.__proto__=C.AC;C.APy.__proto__=A.Core.
O;C.Fe.__proto__=C.OverlayMenu;C.Xg.__proto__=C.B_;C.AiE.__proto__=C.Cd;C.AJ7.__proto__=
C.Fe;C.Ds.__proto__=C.AB;C.AutoAction.__proto__=C.AB;C.AKb.__proto__=C.Ac$;C.AKc.
__proto__=C.Fe;C.RQ.__proto__=C.TI;C.AKT.__proto__=C.Ac$;C.VO.__proto__=C.Fa;C.UW.
__proto__=A.Core.O;C.Kf.__proto__=A.Core.O;C.APW.__proto__=C.HQ;C.ARW.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Ds;C.ALB.__proto__=C.AlL;C.Hg.__proto__=A.
Core.O;C.ATm.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Ds;C.Aai.
__proto__=C.FQ;C.Awv.__proto__=C.Az9;C.ARB.__proto__=C.OverlayMenu;C.AMD.__proto__=
A.Core.O;C.NK.__proto__=A.Core.O;C.ARC.__proto__=A.Core.O;C.ASs.__proto__=A.acl.
AdD;C.Akd.__proto__=C.I1;C.AlO.__proto__=C.OverlayMenu;C.AAD.__proto__=C.A$;C.XY.
__proto__=C.Aus;C.ApN.__proto__=C.HQ;C.AbL.__proto__=C.Dj;C.WeightRecordingScope.
__proto__=C.AB;C.AtC.__proto__=C.AC;C.ASr.__proto__=C.I1;C.AKk.__proto__=C.AC;C.
Aqs.__proto__=C.HQ;C.AFy.__proto__=A.Core.O;C.ATp.__proto__=A.Core.O;C.D8.__proto__=
C.Cd;C.Ad6.__proto__=C.D8;C.AuT.__proto__=C.Ad6;C.SetTransponderScreen.__proto__=
C.QP;C.ABQ.__proto__=C.Er;C.AFC.__proto__=C.A$;C.WeightListScreen.__proto__=C.AC;
C.L6.__proto__=C.QP;C.AJ5.__proto__=C.L6;C.ManualActionScanScreen.__proto__=C.L6;
C.AJ6.__proto__=A.Core.O;C.ANE.__proto__=C.Du;C.ABP.__proto__=C.Du;C.Tt.__proto__=
C.Du;C.ANG.__proto__=C.Du;C.ALg.__proto__=C.A$;C.MO.__proto__=C.A$;C.ALe.__proto__=
C.A$;C.Jf.__proto__=A.Core.O;C.ALd.__proto__=C.A$;C.Amf.__proto__=C.Tg;C.AEr.__proto__=
C.Av3;C.Aj3.__proto__=C.Av3;C.Ael.__proto__=C.Aj3;C.ALH.__proto__=C.T_;C.T_.__proto__=
C.Hg;C.ANJ.__proto__=C.Er;C.CX.__proto__=A.Core.O;C.AK$.__proto__=C.AiW;C.ABM.__proto__=
C.Tu;C.J2.__proto__=A.Core.O;C.ApH.__proto__=C.Mc;C.AM3.__proto__=C.J7;C.AutoRegistrationMode.
__proto__=C.AB;C.ANK.__proto__=C.Er;C.Ta.__proto__=C.AC;C.D1.__proto__=A.Core.O;
C.AKy.__proto__=C.Ry;C.AKM.__proto__=C.Aae;C.AKH.__proto__=C.Aae;C.ARV.__proto__=
C.A$;C.ANI.__proto__=C.Er;C.AKB.__proto__=C.Aae;C.Is.__proto__=C.IR;C.Rs.__proto__=
C.Fj;C.Rw.__proto__=C.Fj;C.S$.__proto__=C.Jy;C.Qg.__proto__=C.Fj;C.S_.__proto__=
C.Jy;C.AKj.__proto__=C.AiD;C.Gs.__proto__=C.AiD;C.AO0.__proto__=C.Cs;C.Aae.__proto__=
C.D1;C.Jz.__proto__=C.Ds;C.APu.__proto__=C.Cs;C.AKw.__proto__=C.KY;C.AKx.__proto__=
C.D1;C.AKu.__proto__=C.KY;C.AKv.__proto__=C.KY;C.Wc.__proto__=C.D8;C.ASm.__proto__=
C.Wc;C.Rx.__proto__=C.Fj;C.ANy.__proto__=C.Ix;C.ALC.__proto__=C.AC;C.ALk.__proto__=
C.Adq;C.AKh.__proto__=C.IS;C.ATj.__proto__=C.IS;C.ALz.__proto__=C.Gs;C.ATi.__proto__=
C.Gs;C.AKg.__proto__=C.Gs;C.AM5.__proto__=C.J7;C.ANA.__proto__=C.J7;C.ANF.__proto__=
C.Tu;C.ALf.__proto__=C.AiW;C.Tu.__proto__=C.Du;C.ApB.__proto__=A.acu.AAL;C.AiW.__proto__=
C.A$;C.DH.__proto__=A.Core.O;C.AK2.__proto__=C.DH;C.OG.__proto__=C.DH;C.ApZ.__proto__=
A.Core.O;C.AKD.__proto__=C.FP;C.ARZ.__proto__=A.Core.O;C.KY.__proto__=C.D1;C.ALI.
__proto__=C.Cs;C.At3.__proto__=C.Cd;C.ABG.__proto__=C.BN;C.ABH.__proto__=C.BN;C.
Fj.__proto__=C.Jy;C.AMH.__proto__=C.EO;C.AMG.__proto__=C.IS;C.AMF.__proto__=C.Gs;
C.ANf.__proto__=C.J7;C.ABO.__proto__=C.Du;C.AAB.__proto__=C.A$;C.ARU.__proto__=C.
AgS;C.FactoryResetScope.__proto__=C.Ds;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;
C.AP9.__proto__=C.EO;C.AP8.__proto__=C.IS;C.AP7.__proto__=C.Gs;C.ABI.__proto__=C.
J7;C.AAi.__proto__=C.FQ;C.AJ$.__proto__=C.Fe;C.AKl.__proto__=C.AtC;C.NewAnimalSetTransponderScreen.
__proto__=C.Arz;C.C2.__proto__=C.AB;C.OF.__proto__=A.Core.O;C.Rt.__proto__=C.Fj;
C.Ru.__proto__=C.Fj;C.EaseOfDelivery.__proto__=C.AB;C.Breed.__proto__=C.AB;C.APF.
__proto__=C.OverlayMenu;C.Vd.__proto__=C.TI;C.ACB.__proto__=C.Cd;C.AnimalSingleInfoScreen.
__proto__=C.Ta;C.AnimalMultiInfoScreen.__proto__=C.Ta;C.AKA.__proto__=C.OverlayMenu;
C.MultiInfoActionsScreen.__proto__=C.Gs;C.IX.__proto__=A.Core.O;C.AJ_.__proto__=
C.EO;C.AJ9.__proto__=C.IS;C.AJ8.__proto__=C.Gs;C.ANx.__proto__=C.Ix;C.ArK.__proto__=
C.OF;C.Aqb.__proto__=C.OF;C.AtZ.__proto__=C.AB;C.AKs.__proto__=C.AB;C.AEX.__proto__=
C.D8;C.GM.__proto__=A.Core.O;C.AO3.__proto__=C.HA;C.ATa.__proto__=C.Xt;C.APS.__proto__=
C.VX;C.ACd.__proto__=C.K6;C.HA.__proto__=C.GM;C.K6.__proto__=C.GM;C.EartagNrAssignmentMode.
__proto__=C.AB;C.AuM.__proto__=C.HA;C.ASl.__proto__=C.B_;C.NewAnimalsSetTransponderScreen.
__proto__=C.Arz;C.ReasonOfLeaving.__proto__=C.AB;C.OA.__proto__=C.B_;C.Ad9.__proto__=
C.D$;C.APL.__proto__=C.D$;C.APK.__proto__=C.D$;C.D$.__proto__=A.Core.O;C.QQ.__proto__=
C.D8;C.AO4.__proto__=C.K6;C.AuL.__proto__=A.Core.O;C.E9.__proto__=A.Core.O;C.Fl.
__proto__=C.AC;C.AMe.__proto__=C.AC;C.AMh.__proto__=C.Fl;C.AMi.__proto__=C.Fl;C.
ApP.__proto__=C.Fl;C.AaL.__proto__=C.Aje;C.J7.__proto__=C.Aje;C.Aur.__proto__=C.
AaL;C.ANd.__proto__=C.AaL;C.ANc.__proto__=C.AaL;C.ANb.__proto__=C.BN;C.AdN.__proto__=
C.Er;C.Al6.__proto__=C.A$;C.AiM.__proto__=C.Is;C.ABa.__proto__=A.Core.O;C.Aka.__proto__=
A.Core.O;C.QT.__proto__=C.AC;C.ASO.__proto__=C.QT;C.ANe.__proto__=C.BN;C.Du.__proto__=
C.Er;C.Oo.__proto__=C.BN;C.AM9.__proto__=C.Oo;C.AM$.__proto__=C.Oo;C.XS.__proto__=
C.Al6;C.AfL.__proto__=C.Hg;C.AL3.__proto__=C.EO;C.AL2.__proto__=C.IS;C.AL1.__proto__=
C.Gs;C.ANa.__proto__=C.J7;C.AaG.__proto__=C.AbL;C.Ai6.__proto__=C.Qh;C.AAv.__proto__=
C.Qh;C.ANC.__proto__=C.Du;C.ALb.__proto__=C.A$;C.Rv.__proto__=C.Fj;C.AKt.__proto__=
C.Fj;C.ALT.__proto__=C.Hh;C.ALU.__proto__=C.Hh;C.AM_.__proto__=C.Oo;C.Pv.__proto__=
C.Abc;C.ALQ.__proto__=C.Hh;C.AM6.__proto__=C.Oo;C.Pu.__proto__=C.Cd;C.RR.__proto__=
C.AC;C.AMf.__proto__=C.RR;C.AMg.__proto__=C.RR;C.AMj.__proto__=C.ApP;C.AMc.__proto__=
C.Fl;C.Aad.__proto__=C.Is;C.O4.__proto__=C.Is;C.AKF.__proto__=C.AlO;C.APs.__proto__=
C.TE;C.APr.__proto__=C.TE;C.AP4.__proto__=C.EO;C.AP3.__proto__=C.IS;C.AP2.__proto__=
C.Gs;C.ANs.__proto__=C.J7;C.QL.__proto__=C.EO;C.AR7.__proto__=C.IS;C.AR6.__proto__=
C.Gs;C.Ajf.__proto__=C.Vq;C.AAA.__proto__=C.A$;C.ABN.__proto__=C.Du;C.ANu.__proto__=
C.BN;C.Aag.__proto__=C.Ns;C.Xm.__proto__=C.Ns;C.Ry.__proto__=C.D1;C.Xn.__proto__=
C.Ry;C.Xk.__proto__=C.Ir;C.Aab.__proto__=C.Ir;C.Xj.__proto__=C.Ir;C.Aaa.__proto__=
C.Ir;C.AKC.__proto__=C.AC;C.Ir.__proto__=C.IR;C.IR.__proto__=C.Hg;C.Ns.__proto__=
C.Fj;C.Av2.__proto__=C.Ael;C.ALG.__proto__=C.ApH;C.Av4.__proto__=C.Ael;C.ARO.__proto__=
C.Cs;C.ARM.__proto__=C.D$;C.AO1.__proto__=C.K6;C.ARN.__proto__=C.D$;C.NewMenu.__proto__=
C.AC;C.APT.__proto__=C.HQ;C.AKE.__proto__=C.AlO;C.AKU.__proto__=C.Ac$;C.Jy.__proto__=
C.IR;C.ANw.__proto__=C.XY;C.AaF.__proto__=C.Ds;C.ANH.__proto__=C.Er;C.MotherScanScreen.
__proto__=C.L6;C.ANv.__proto__=C.Ap1;C.I5.__proto__=A.Core.O;C.ANr.__proto__=C.BN;
C.SetSaveNaisIdScreen.__proto__=C.QP;C.AL4.__proto__=C.ApN;C.Uh.__proto__=C.Ds;C.
Ui.__proto__=C.Uh;C.Ab5.__proto__=C.Uh;C.Adc.__proto__=C.AB;C.AEW.__proto__=C.D8;
C.ALS.__proto__=C.Hh;C.AM8.__proto__=C.Oo;C.ALR.__proto__=C.Hh;C.AM7.__proto__=C.
Oo;C.Ajg.__proto__=C.Tt;C.ANB.__proto__=C.Tt;C.AiV.__proto__=C.MO;C.ALa.__proto__=
C.MO;C.APM.__proto__=C.Ad9;C.Vq.__proto__=C.BN;C.AbM.__proto__=C.B_;C.G5.__proto__=
C.AB;C.AKI.__proto__=C.G5;C.AKJ.__proto__=C.G5;C.AKp.__proto__=C.IS;C.Tg.__proto__=
C.B_;C.APV.__proto__=C.AC;C.Arz.__proto__=C.SetTransponderScreen;C.ACe.__proto__=
C.HA;C.ArA.__proto__=C.OA;C.Awc.__proto__=C.OA;C.AbO.__proto__=C.Ds;C.ATz.__proto__=
C.EO;C.ATy.__proto__=C.IS;C.ATx.__proto__=C.Gs;C.AO5.__proto__=A.Core.O;C.AO2.__proto__=
C.HA;C.ABf.__proto__=C.AaG;C.LM.__proto__=A.Core.O;C.AR4.__proto__=C.Cs;C.AR3.__proto__=
C.Cs;C.AS5.__proto__=C.Cs;C.AeH.__proto__=C.AB;C.I2.__proto__=A.acn.I2;C.AST.__proto__=
C.AC;C.ARR.__proto__=C.QL;C.AND.__proto__=C.Du;C.AK0.__proto__=C.QL;C.AM4.__proto__=
C.Ajf;C.ANt.__proto__=C.Ajf;C.ALc.__proto__=C.A$;C.ASk.__proto__=C.Sn;C.ASn.__proto__=
C.QQ;C.ANq.__proto__=C.BN;C.APD.__proto__=C.Fe;C.APC.__proto__=C.Fe;C.APB.__proto__=
C.Fe;C.AKd.__proto__=C.AlM;C.APH.__proto__=C.TI;C.ARQ.__proto__=C.OverlayMenu;C.
Ve.__proto__=C.AB;C.AKZ.__proto__=C.OverlayMenu;C.ACu.__proto__=C.AB;};C._ReInit=
function(){var B;if((B=C.Awg._this))B._ReInit(),C.Awg._ReInit.call(B);if((B=C.Awh.
_this))B._ReInit(),C.Awh._ReInit.call(B);if((B=C.AZ._this))B._ReInit(),C.AZ._ReInit.
call(B);if((B=C.O2._this))B._ReInit(),C.O2._ReInit.call(B);if((B=C.AutoActions._this
))B._ReInit(),C.AutoActions._ReInit.call(B);if((B=C.Aeu._this))B._ReInit(),C.Aeu.
_ReInit.call(B);if((B=C.BW._this))B._ReInit(),C.BW._ReInit.call(B);if((B=C.V8._this
))B._ReInit(),C.V8._ReInit.call(B);if((B=C.ArB._this))B._ReInit(),C.ArB._ReInit.
call(B);if((B=C.Anc._this))B._ReInit(),C.Anc._ReInit.call(B);if((B=C.DK._this))B.
_ReInit(),C.DK._ReInit.call(B);if((B=C.AtK._this))B._ReInit(),C.AtK._ReInit.call(
B);if((B=C.AlI._this))B._ReInit(),C.AlI._ReInit.call(B);};C.DB=function(D){var B;
if((B=C.Awg._this)&&(B._cycle!=D))B._Done(C.Awg._this=null);if((B=C.Awh._this)&&(
B._cycle!=D))B._Done(C.Awh._this=null);if((B=C.AZ._this)&&(B._cycle!=D))B._Done(
C.AZ._this=null);if((B=C.O2._this)&&(B._cycle!=D))B._Done(C.O2._this=null);if((B=
C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((B=C.Aeu.
_this)&&(B._cycle!=D))B._Done(C.Aeu._this=null);if((B=C.BW._this)&&(B._cycle!=D)
)B._Done(C.BW._this=null);if((B=C.V8._this)&&(B._cycle!=D))B._Done(C.V8._this=null
);if((B=C.ArB._this)&&(B._cycle!=D))B._Done(C.ArB._this=null);if((B=C.Anc._this)&&(
B._cycle!=D))B._Done(C.Anc._this=null);if((B=C.DK._this)&&(B._cycle!=D))B._Done(
C.DK._this=null);if((B=C.AtK._this)&&(B._cycle!=D))B._Done(C.AtK._this=null);if((
B=C.AlI._this)&&(B._cycle!=D))B._Done(C.AlI._this=null);};return C;})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */