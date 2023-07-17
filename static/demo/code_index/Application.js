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
* Version  : 12.05
* Profile  : WebGLDemonstrator
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

var index;if(!index)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(index.kh)throw new Error("The unit file 'Application.js' included twice!");
index.kh=(function(){var A=index;var C={};
var B4=[0,0,240,320];var BI=[0,0,240,40];var EH=[0,0,20,30];var Gv=[6,21,14,25];var
I5=[6,15,14,19];var Iq=[6,9,14,13];var Oe=[209,7,229,37];var Pc=[0,40,240,320];var
Nq=[0,228,240,298];var Cw=" ";var FN=[0,40,240,280];var Of=[0,40,232,280];var Nr=[
0,40,116,160];var Kc=[114,40,230,160];var Og=[0,160,116,280];var ME=[116,160,232
,280];var Pd=[0,280,116,400];var RO=[116,280,232,400];var Tn=[0,400,116,520];var
Vi=[116,400,232,520];var Vj=[-1,520,115,640];var JV=[232,40,240,280];var RP=[5,40
,235,120];var Vk=[120,140,210,230];var Vl=[20,140,110,230];var Yb=[0,0,116,120];
var RQ=[0,0,120,120];var Yc=[0,0,116,45];var Vm=[0,0,8,200];var To=[0,0,8,20];var
Vn=[30,0,210,40];var Qh=[0,0,40,40];var Vo=[7,8,200,40];var Ns=[0,0,200,40];var Pe=[
6,1];var Tp="ERROR: Invalid value for ItemHighlighting";var Yd=[10,10,40,30];var
Vp=[0,0,120,40];var Ye=[60,0,180,40];var Yf=[120,0,240,40];var Vq=[0,0,100,40];var
Vr=[83,0,157,40];var RR=[140,0,240,40];var Yg=[0,0,20,40];var Yh=[220,0,240,40];
var AaK=[0,0,300,30];var Qi=[0,30,300,60];var AaL=[0,60,300,90];var AdG=[0,90,300
,120];var Yi=[0,100,300,110];var Vs=[0,50,300,60];var Yj=[0,30,300,40];var AdH=[
40,40];var KO=[0,0,240,80];var AaM=[0,0,240,50];var RS="Cap";var Nt=[0,40,40,80];
var AlX=[200,40,240,80];var AlY=[30,40,210,80];var JW="--";var AlZ="%d";var Al0=
"%m";var Af0="%Y";var AaN=" (";var Yk=[0,0,232,80];var AuK="Date";var AuL=[48,40
,88,78];var AuM=[39,40,79,80];var AuN=[80,44,87,77];var AiY=".";var AuO=[88,44,120
,77];var AuP=[120,44,127,77];var AdI=[127,44,191,77];var AdJ=[0,0,80,40];var Kd=
"Text";var AuQ=[430,102,430,102];var Vt=[0,0,240,240];var AiZ=[232,0,240,240];var
AuR=[0,10,240,240];var AuS="UpdateData is called for the base class ListItemBase. Please make "+
"sure this method is implemented by a derived class.";var AuT="Unhandled option";
var Al1=[0,80,240,280];var AuU="Unhandled animal list action";var Ap1="Animal list content not handled.";
var Ke=[0,40,240,80];var AQV="Set Selected";var Ap2="Unhandled AnimalListInfoItemMode ";
var AaO=" %%";var ADt=[0,180,240,220];var ADu=[82,127,167,150];var ADv="Group";var
ADw=[77,91,167,124];var AuV=[0,0,90,33];var ADx=[4,4,18,29];var AQW=[20,4,34,29];
var AQX=[36,4,50,29];var AQY=[52,4,66,29];var AQZ=[68,4,82,29];var Ap3="ERROR: Unhandled Device::SyncState";
var AuW=":\n";var Qj="{1}";var AuX="{2}";var AQ0=[0,49,240,109];var AQ1=[0,170,240
,243];var AQ2=[0,110,240,170];var AQ3=[20,243,220,268];var ADy=[30,8];var ADz="\u2265 ";
var AdK=[0,0,240,160];var Al2=[0,0,0,0];var AQ4=[0,0,240,66];var ADA=[10,0,76,66
];var Ai0=[33,33];var ADB=[87,0,153,66];var ADC=[164,0,230,66];var ADD="No statistics available";
var AQ5="in this environment.";var AQ6=" fps";var AQ7="CPU: - %%";var AdL=[0,0,240
,120];var ADE=[130,0,237,20];var Ap4=[20,0,120,20];var ADF=[0,20,240,40];var ADG=[
40,20,100,40];var AuY=[100,20,240,40];var ADH=[0,40,240,60];var AuZ=[40,40,100,60
];var AQ8=[100,40,240,60];var AQ9=[0,60,50,80];var AQ_=[100,60,240,80];var AQ$=[
0,80,50,100];var ARa=[100,80,240,100];var ARb=[0,100,50,120];var Oh=[100,100,240
,120];var Au0=[5,5,15,15];var ARc="%H";var ARd="%M";var ARe="Time";var ARf=[79,40
,119,78];var ARg=[125,40,164,80];var ARh=[86,40,126,80];var Ap5=":";var Au1=[75,
40,115,80];var ADI=[0,0,240,150];var ARi=[60,0,155,40];var ADJ=[30,0,65,40];var ARj=[
60,0,100,40];var ARk=[88,0,128,40];var ARl=[60,0,71,40];var ARm=[60,0,74,40];var
ADK=[90,0,123,40];var ARn=[120,0,161,40];var Au2=[120,0,165,40];var ADL=[60,0,88
,40];var ADM=[60,0,95,40];var ARo="Did not expect iterator bigger than number of records";
var ADN=[20,0,240,20];var ARp=[0,38,240,40];var ARq=[0,0,8,4];var Vu=[0,0,240,280
];var Vv=[0,280,240,320];var ARr="ERROR: Parameter list has reached its size limit! Ignoring parameters:[";
var ARs="]";var ARt="ERROR: Cannot find closing bracket \'}\' in text [";var ARu=
"] opened at index ";var ARv="#";var ARw="ERROR: Invalid parameter: {";var ARx="}";
var Af1=[20,20];var ADO=[0,12];var ARy="ERROR: Not expected Application::FooterFocus, ";
var ARz="%M:%S";var ADP=[30,150,207,170];var ADQ=[20,70,217,194];var Au3="Unhandled item.";
var RT=[0,80,240,120];var ARA="Unhandled Overlay Menu ";var ARB="Invalid bootloader message: ";
var ARC="Unknown USBState: ";var Ap6="Invalid fader";var ARD=[2,4,32,40];var ARE=[
29,4,80,40];var ARF=[120,4,200,40];var ARG=[80,0,114,40];var ARH="-1";var ARI="< ";
var Ap7=[0,0,232,40];var ARJ=[22,40,180,80];var ARK=[2,40,22,80];var ARL=[23,40,
163,80];var ARM=[210,40,230,80];var ARN=[164,40,210,80];var ARO=[169,43,205,77];
var ARP="ERROR: No outlet assigned";var ARQ="Unhandled screen";var ARR="ERROR: Cannot cache null screen.";
var ARS="ERROR: Cannot go back, ScreenStack is empty. Falling back to home "+"screen.";
var ADR="Untreated Rating Method type!";var Ap8="Unhandled animal type";var ART=[
5,60,235,140];var ARU=[0,130,240,196];var ARV=[49,240,229,280];var Au4="Implement in derived classes!";
var Ai1="Implement in derived class";var Af2=[0,40,230,120];var Au5=[0,120,230,200
];var Al3=[0,200,230,280];var Af3=[0,280,230,360];var ARW=[0,360,230,440];var Ap9=[
230,40,238,280];var ADS="WARNING: Unhandled filter field: ";var AdM="Should not happen.";
var ADT="Invalid Boolean item";var Yl=[0,120,240,160];var Ai2=[0,160,240,200];var
Al4=[0,200,240,240];var ARX=[1152,11,1392,51];var ARY=[1152,51,1392,91];var ARZ=[
1152,91,1392,131];var AR0=[1152,131,1392,171];var AR1=[1152,171,1392,211];var Ap_=[
0,240,240,280];var ADU=[10,0,240,40];var ADV=[190,0,230,40];var AR2=[60,3,95,39];
var AR3=[95,4,200,40];var AR4=[3,3];var AR5=[6,6];var AR6=[0,4,40,40];var AR7=[39
,5,197,35];var ADW=[40,0,200,40];var AR8="Illegal shifting direction";var Au6=[0
,0,160,30];var ADX=[0,0,25,30];var ADY=[27,0,52,30];var ADZ=[54,0,79,30];var AD0=[
81,0,106,30];var AD1=[108,0,133,30];var AD2=[135,0,160,30];var AR9="Internal queue error";
var AR_="ERROR: No corresponding Id ";var AR$=" found.";var ASa="ERROR: Error in range test";
var ASb=[120,67,210,157];var ASc=[0,40,240,70];var ASd=[20,67,110,157];var Au7=[
0,160,240,280];var AD3=[20,77,90,147];var ASe=[0,0,210,40];var AD4=[195,0,235,40
];var Ai3=[0,40,232,120];var Af4=[0,120,232,200];var ASf=[0,40,232,200];var Ai4=[
0,200,232,280];var ASg=[0,320,240,400];var Au8=[0,120,53,200];var Ai5=[0,280,232
,360];var AdN="%%";var ASh=[0,360,232,440];var AD5=[0,440,232,520];var Ap$=[0,360
,232,400];var ASi=[0,400,232,480];var Nu=")";var ASj="/";var ASk=[5,0,88,30];var
ASl=[88,0,240,30];var ASm="276000312345678";var AD6=[5,30,100,60];var AD7=[100,30
,240,60];var ASn="Manufacturer";var ASo="Country";var ASp=[5,60,240,90];var ASq=
"Niedersachsen";var ASr=[5,90,145,120];var ASs=[140,90,240,120];var ASt="Protocol";
var ASu=[0,0,120,100];var AD8=[0,40,116,120];var ASv=[40,80,92,107];var AD9=[0,0
,50,23];var AD_="ERROR: Unhandled Device::MeasureState";var Au9=[0,120,240,280];
var ASw=[178,159,248,203];var AD$=[10,145,170,225];var ASx=[0,61,240,101];var ASy=[
0,0,40,23];var ASz=[101,113,141,136];var ASA=[101,235,141,258];var ASB=[69,288,101
,313];var ASC=[0,40,240,200];var Au_=[0,200,240,280];var AEa=[0,280,240,360];var
Au$="\u2264 ";var ASD=[0,80,94,160];var Ava=[94,80,184,160];var AEb=[184,80,240,
160];var ASE=[197,105,231,139];var ASF=[105,101,173,127];var ASG=[7,101,75,127];
var ASH=[94,125,184,151];var ASI=[2,125,92,151];var ASJ=[0,70,240,101];var ASK=[
0,106,240,280];var ASL=[30,40,240,70];var ASM=[0,40,30,70];var ASN="\u278B";var ASO=[
0,0,240,175];var ASP=[0,0,232,175];var ASQ=[232,0,240,175];var ASR="Text Here !";
var ASS=[200,0,240,40];var AEc=[0,40,230,280];var AEd="1";var AEe="2";var AEf="3";
var AEg="4";var AEh=[0,360,240,400];var AEi="ERROR: invalid item class.";var AST=[
10,220,250,260];var ASU=[185,0,225,40];var ASV="ERROR: Exceeded limit of maximum actions; No more actions will be "+
"added!";var ASW="ERROR: Received more actions than expected!";var ASX=", ";var ASY=[
0,0,58,58];var ASZ=[0,0,60,60];var AS0=[30,0,58,20];var AS1=[7,6,25,24];var AS2=[
30,60,130,160];var AS3=[0,0,28,20];var AS4=[4,3,40,24];var AS5=[0,0,42,27];var Avb=[
0,0,17,17];var AS6="Unknown direction of counting enum value: ";var AS7="Unknown id generation method enum value: ";
var Avc="Invalid animal id generation method: ";var Avd="Unhandled popup id";var
Ym="0";var Aqa=";";var AEj=[0,400,230,480];var AS8=[5,120,235,200];var AS9=[0,640
,230,760];var AEk=[0,0,300,200];var AS_=[20,40,220,80];var AEl=[20,80,220,280];var
AS$=[140,0,188,40];var ATa="ERROR: Row containing birth weight could not be loaded";
var ATb=[0,440,230,520];var Aqb="ID";var ATc=[40,40,198,70];var ATd="Extra info: ";
var AEm=" -";var ATe=[0,0,230,120];var ATf=[0,0,230,40];var ATg=[0,80,230,120];var
ATh="\xB0Brix";var Yn=[0,320,230,400];var ATi=[0,410,230,490];var ATj="ERROR: aNumberOfDays can not be < 0 ";
var ATk="{WEIGHTGAIN} ";var ATl="\xB1";var AEn="+";var ATm="{WEIGHTGAIN}";var ATn=
"{DAYS}";var ATo="ERROR: aString can not be null";var ATp=[166,70,240,114];var ATq=[
0,60,160,120];var ATr=[30,0,240,60];var AEo=[1,6,29,54];var ATs=[30,60,240,120];
var ATt="Con";var ATu=[70,50,170,70];var AEp="Unhandled Device::NaisIdValidationResult: ";
var AEq="Unhandled PopupId";var ATv=[110,123,230,248];var ATw=[5,0,250,40];var ATx=[
102,0,186,40];var ATy=[153,0,240,40];var Qk="-";var Aqc=[170,0,240,40];var AEr=[
220,0,320,30];var AEs=[200,20,300,50];var Al5=[180,0,180,40];var Al6=[170,0,170,
40];var Ave="Untreated state";var ATz="ERROR: Animal id scanned in an unexpected state : ";
var AEt="ERROR: Null animal id scanned.";var ATA=[40,40,235,100];var ATB=[120,100
,210,190];var ATC=[20,100,110,190];var ATD=[0,40,40,100];var ATE="\u278A";var ATF=
"Action untreated";var ATG="ERROR: No corresponding ";var ATH=" action found!";var
ATI="Unhandled action: ";var ATJ=[0,190,240,220];var ATK=[0,220,232,280];var ATL=[
5,190,235,270];var ATM=[232,60];var ATN=[0,2];var ATO=[58,58];var ATP="A";var ATQ=[
56,0,156,40];var Al7=[156,0,240,40];var AEu=" 7 ";var AEv=[40,0,156,40];var AEw=
"/-1/-2";var Avf=[72,0,144,40];var AaP="\n";var AEx="(";var ATR=[72,0,156,40];var
AEy="%y/%m";var ATS=[70,0,240,40];var Avg=[70,0,120,40];var ATT=[160,0,245,40];var
ATU="- ";var ATV=" - ";var ATW="{parc}{clr3}";var ATX="{clr0}/^{clr2}";var ATY="{clr0}/^{clr1}";
var AEz=[0,0,85,40];var Al8="?";var AEA=[0,0,120,140];var ATZ=[0,0,116,40];var AEB=[
15,0,100,40];var Ai6=[110,0,200,40];var Ai7=[0,0,34,34];var AT0=[129,0,157,40];var
Al9=[0,0,25,25];var AT1="\u2611";var AEC="\u2610";var AED=[5,0,72,40];var AT2=[150
,0,240,40];var AT3=[72,0,139,40];var Avh="Unvalid content class: ";var Aqd=[0,320
,240,360];var AT4=[144,0,170,40];var AT5=[187,0,213,40];var AT6=[207,10,233,50];
var AT7=[247,20,273,60];var AT8=[140,0,150,100];var AT9=[165,0,175,100];var AT_=[
185,0,195,100];var AT$=[205,0,215,100];var AUa=[211,0,233,40];var AUb=[189,0,211
,40];var AUc=[167,0,189,40];var AUd=[145,0,167,40];var AEE=[5,0,240,40];var Yo=[
10,0,10,40];var AUe="= \u2211 ";var Avi=[125,0,240,40];var AUf=[130,0,170,40];var
AEF="\xD8 ";var AUg=[100,10,116,36];var AEG=[117,10,133,36];var AUh=[135,10,151,
36];var AUi="Implement in derieved class";var Al_=[0,80,240,240];var Aqe=[0,120,
232,160];var Aqf=[0,160,232,200];var Aqg=[0,200,232,240];var Avj=[0,240,232,280];
var Al$=[0,320,232,360];var AUj=[0,100];var AUk=[0,40,240,240];var AUl=[0,50000];
var AUm=[0,500];var AUn=[0,0,240,105];var AUo=[0,105,240,210];var BjJ=[0,40,240,
81];var BjK=[0,81,240,122];var BjL=[0,122,240,163];var BjM=[0,163,240,205];var BjN=[
0,205,240,240];var BjO=[0,200];var BjP=[0,40,240,73];var AUp=[0,0,30,40];var BjQ=[
0,40,30,80];var AUq=[60,40];var AUr=[60,0];var BjR=[10,0,40,40];var BjS=[0,190,240
,260];var BjT=[0,130,240,190];var A5J=[40,40,200,130];var BjU=[90,230,170,253];var
BjV=[80,190,170,223];var BjW=[0,130,240,180];var BjX=[0,250,240,280];var BjY=[129
,0,156,40];var BjZ=[72,0,100,40];var Bj0=[100,0,129,40];var Bj1=[78,8,103,33];var
A5K=[0,0,300,120];var Bj2=[1,-1];var Bj3=[20,40,240,120];var Bj4=[20,0,240,40];var
Bj5=[0,118,240,120];var Bj6=[0,20,130,40];var Bj7=[130,20,240,40];var Bj8=[0,0,10
,20];var A5L="\u2191";var Bj9=[230,0,240,20];var AEH=[0,40,232,80];var Bj_=[0,80
,232,160];var A5M=[0,160,230,240];var AEI=" p. p.";var AUs="Unknown animal type";
var AUt=[80,0,140,40];var Bj$=[50,0,172,40];var Bka=[172,0,240,40];var Bkb=[0,90
,240,92];var Bkc="Unhandled menu item";var A5N=[0,0,50,30];var Aqh=[0,0,30,30];var
Bkd="Unhandled AnimalIdAutoGenerationMethod: ";var Bke=[0,80,230,160];var Bkf=[0
,240,230,320];var Bkg="No AnimalActionTemperatureScreen found!";var Bkh="840003123456789";
var Bki=[40,0,230,40];var Bkj=[50,10,230,30];var AUu="No AnimalMultiInfoScreen found!";
var AEJ=[0,0,25,40];var A5O="/^";var A5P="?/?";var Bkk=[100,4,180,40];var Bkl=[65
,0,99,40];var Bkm=[165,0,200,40];var A5Q=[0,0,60,40];var A5R="9999/^9999";var Bkn=
"Invalid index: ";var Bko="Unknown AnimalIdGenerationMethod: ";var Bkp="Invalid gender: ";
var Aqi="Invalid input state: ";var Bkq="Unhandled AnimalIdGenerationMethod";var
Bkr=[42,35,67,75];var Bks=[5,35,39,75];var Bkt=[70,40,228,70];var Bku="Invalid direction for setting focus";
var Af5="Invalid index";var Bkv="Unvalid direction";var Bkw=[0,0,42,30];var A5S=[
22,0,42,30];var Bkx=[20,0,40,30];var Bky=[0,0,158,30];var A5T=[32,0,62,30];var A5U=[
64,0,94,30];var A5V=[96,0,126,30];var Bkz=[128,0,158,30];var BkA=" %% ";var BkB=[
0,70,240,220];var BkC=[0,237,240,307];var BkD="\n44 %% done";var BkE=[0,0,166,30
];var AEK=[0,0,12,30];var Avk=[14,0,26,30];var AUv=[28,0,40,30];var AUw=[42,0,54
,30];var AUx=[56,0,68,30];var AUy=[70,0,82,30];var AUz=[84,0,96,30];var AUA=[98,
0,110,30];var A5W=[112,0,124,30];var AUB=[126,0,138,30];var BkF=[140,0,152,30];var
BkG=[154,0,166,30];var A5X=[20,0,46,30];var BkH="\u2642";var BkI="{fnt3}\u2642{fnt1}";
var BkJ="\u2640";var BkK="{fnt3}\u2640{fnt1}";var BkL="{parc}";var BkM=[30,30,210
,80];var BkN="Implement in derieved class!";var BkO=[60,4,226,34];var A5Y=[30,4,
58,34];var A5Z=[4,0,27,40];var BkP=[116,4,228,34];var BkQ=[60,4,86,34];var BkR=[
88,4,114,34];var AUC="Implement in derived class!";var A50="Implement in derived class.";
var BkS="Invalid nais id view: ";var BkT=[0,35,240,75];var BkU=[0,0,110,30];var BkV=[
0,0,26,30];var BkW="100";var AUD="\n\n";var BkX=[240,240];var BkY=[0,240];var BkZ=
"Unknown rated attribute: ";var Bk0=[120,80,240,280];var Bk1=[0,80,120,280];var AEL=
" %% (";var Avl=" \xB1 ";var Avm=" (n = ";var AUE=[0,80,232,120];var Bk2=[0,242,
232,282];var AUF=[0,280,232,320];var Bk3=[35,0,200,40];var Bk4=[1,0,31,40];var Bk5=[
32,40];var Bk6=[32,0];var Bk7=[3,0,83,40];var A51=[180,0,240,40];var Bk8=[120,0,
180,40];var Bk9=[65,0,125,40];var Bk_=[0,0,120,200];var Bk$=[0,40,120,150];var A52=[
15,160,60,190];var A53=[60,160,105,190];var Bla=[0,65,240,135];var Blb=[10,112,170
,192];var Blc=[178,129,248,173];var Bld=[0,40,240,110];var Ble=[10,98,170,178];var
Blf=[178,112,248,156];var Blg=[85,190,160,265];var Blh=[89,194,155,260];var Bli=[
26,190,111,250];var Blj=[125,181,225,211];var Blk=[100,220,183,250];var Bll="38.7";
var Blm=[180,220,225,250];var Bln="\xB0C";var Blo=[0,99,240,178];var Blp=[100,280
,140,320];var Blq=[0,26,240,105];var A54=[30,40];var A55=[30,0];var Blr=[149,0,200
,40];var Bls=[145,40];var Blt=[145,0];var Blu=[38,0,88,40];var A56=[0,0,35,40];var
Blv=[0,0,50,40];var Blw=[95,0,145,40];var Blx=[65,5,223,35];var AUG=[0,0,15,40];
var Bly=[72,0,140,40];var A57="\n(";var Blz="%y/%m/%d";var BlA="%y ";var BlB=" %m ";
var BlC=" %d ";var BlD="20";var BlE=[225,0,240,40];var BlF=[0,400,232,440];var BlG=[
0,440,232,480];var BlH=[0,480,232,520];var BlI=[0,520,232,560];var BlJ=[0,560,232
,600];var BlK=[0,598,232,638];var BlL=[5,0,215,40];var BlM=[215,8,240,33];var BlN=
"Implement in dervied class.";var BlO="ERROR: Unhandled temperature unit: ";var AEM=
"ERROR: Unhandled mass unit: ";var BlP=[-1,160,115,280];var BlQ=[114,160,230,280
];var AUH=[116,40,232,160];var Avn="Unknown weight class index: ";var BlR="< 35";
var BlS="35 - 40";var BlT="40 - 45";var BlU="45 - 50";var BlV="\u2265 50";var BlW=
"< 80";var BlX="80 - 90";var BlY="90 - 100";var BlZ="100 - 110";var Bl0="\u2265 110";
var A58="Unknown mass unit";var Bl1=[143,0,193,40];var A59=[192,0,240,40];var Bl2=[
44,28,44,28];var Bl3="0 %%";var Bl4=[120,40,236,160];var Bl5=[4,160,120,280];var
Bl6=[123,160,239,280];var Bl7=[30,0,155,40];var A5_="\u2620";var Bl8=[380,150,380
,190];var A5$=[105,0,155,50];var Bl9=[190,1,240,41];var Bl_=[72,0,108,40];var Bl$=[
108,0,180,40];var Bma=[60,0,94,40];var Bmb=[94,0,200,40];var Bmc="Scroll direction not supported.";
var Bmd=[44,0,207,40];var Bme=[207,0,240,40];var Bmf="99";var Bmg="Unknown birth type";
var Bmh=[44,0,189,40];var Bmi=[5,0,44,40];var Bmj=[44,0,240,40];var Bmk=[240,0,240
,40];var Bml="\u25C9";var A6a="\u25CB";var Bmm=[75,4,215,34];var Bmn=[47,4,73,34
];var A6b=[17,4,45,34];var Bmo=[0,0,138,30];var Bmp=[47,4,215,34];var AUI="Unhandled MotherSelectionFilterMode: ";
var Bmq="Read only!";var Bmr="actions array too small to hold all actions";var Bms=[
120,40];var Bmt=[120,0];var Bmu=[5,0,115,40];var Bmv=[0,0,205,40];var Bmw=[0,1,37
,37];var Bmx=[40,4,170,34];var Bmy=[175,1,205,37];var Bmz=[0,0,37,40];var BmA=[115
,98,205,188];var BmB=[0,40,235,100];var BmC=[2,200,240,280];var BmD=[0,0];var BmE=[
33,63];var BmF=[25,56];var BmG="Unknown transponder image type: ";var AEN=[0,0,82
,82];var BmH=[0,0,81,26];var BmI=" 01234";var BmJ=[105,120,195,210];var BmK=[10,
140,100,230];var A6c="Unhandled EartagNrAssignmentMode: ";var BmL="Unhandled Gender";
var BmM=[10,35,35,75];var BmN=[44,40,202,70];var BmO=[204,35,232,75];var A6d="Unhandled BackupError: ";
var BmP="Unvalid FatoryResetScope";var BmQ="Unhandled PopupId: ";var BmR=[-4,160
,236,240];var BmS=[144,0,192,40];var BmT=[144,0,240,40];var BmU=[195,0,245,50];var
BmV=[120,0,120,40];var BmW=[140,0,240,30];var BmX=[30,0,232,40];var BmY=[60,0,160
,40];var BmZ=[160,0,200,40];var Bm0=[150,17,200,40];var Bm1=[155,40];var Bm2=[155
,0];var Bm3=[146,80,240,160];var Bm4=[56,80,146,160];var Bm5=[0,80,56,160];var Bm6=[
13,107,47,141];var Bm7=[74,109,104,139];var Bm8=[50,100,130,150];var Bm9=[55,112
,145,140];var Bm_=[146,112,236,140];var Bm$=[150,86,223,110];var Bna=[0,40,240,120
];var Bnb=[5,40,235,104];var Bnc=[120,108,226,218];var Bnd=[20,120,110,210];var Bne=[
5,223,235,280];var Bnf=[0,0,64,30];var Bng=[44,0,64,30];var Bnh=[185,5,225,35];var
Bni=[170,5,234,35];var Bnj="Unhandled number of digits";var Bnk=[0,0,126,30];var
Bnl=[22,5,149,35];var Bnm=[149,0,232,40];var A6e=[5,20];var Bnn=[5,0];
C.AIw={Device:null,A0f:null,F_:null,Init:function(aArg){},DriveCursorHitting:function(
RW,Bz,E6){if(this.K&&this.K.DriveCursorHitting)return this.K.DriveCursorHitting.
apply(this,arguments);else return A.Core.Root.DriveCursorHitting.apply(this,arguments
);},_Init:function(aArg){A.Core.Root._Init.call(this,aArg);C.F_._Init.call(this.
F_={I:this},0);this.__proto__=C.AIw;this.G(B4);this.J(this.F_,0);this.Device=A._GetAutoObject(
A.Device.Device);this.A0f=A._GetAutoObject(A.Device.Helper);this.Init(aArg);var KP=
this._variants();if(KP){this.K={};KP._Init.call(this,aArg);}},_Done:function(){if(
this.K)this.K._Done.call(this);this.__proto__=A.Core.Root;this.F_._Done();A.Core.
Root._Done.call(this);},_ReInit:function(){A.Core.Root._ReInit.call(this);this.F_.
_ReInit();if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;A.Core.Root.
_Mark.call(this,D);if((B=this.Device)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
A0f)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.F_)._cycle!=D)B._Mark(B._cycle=
D);if(this.K)this.K._Mark(D);},_variants:function(){return A.abq.AZl._variants();
},K:null,_className:"Application::Application"};C.ApA=[240,320];C.Aw={Background:
null,D$:null,Azx:null,AlP:0,Init:function(aArg){A.ow([this,this.AVd],this);A.ow([
this,this.A97],this);},Lw:function(H){},AVd:function(s){this.Lw(s);},CF:function(
H){},AEO:function(s){this.CF(s);},Fc:function(H){},Avo:function(s){this.Fc(s);},
Dw:function(E){if(this.Azx===E)return;this.Azx=E;A.ow([this,this.A97],this);},A97:
function(H){var B;if(!!this.Azx)this.D$.Z9((C.BW.isPrototypeOf(B=A._NewObject(this.
Azx,0))?B:null));else this.D$.Z9(null);},_Init:function(aArg){C.Zo._Init.call(this
,aArg);A.abh.AH._Init.call(this.Background={I:this},0);C.D$._Init.call(this.D$={
I:this},0);this.__proto__=C.Aw;this.Background.AW(0x3F);this.Background.G(B4);this.
Background.L(A.iF.CR);this.D$.G(BI);this.D$.An(false);this.J(this.Background,-1);
this.J(this.D$,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Zo;this.Background.
_Done();this.D$._Done();C.Zo._Done.call(this);},_ReInit:function(){C.Zo._ReInit.
call(this);this.Background._ReInit();this.D$._ReInit();},_Mark:function(D){var B;
C.Zo._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Screen"};C.UX={
J5:null,XC:function(E){var B;if(this.J5===E)return;if(!!this.J5)this.AnY(this.J5
,null,null,null,[B=this.J5,B.Avo],null,false);this.J5=E;if(!!this.J5)this.Aiy(this.
J5,null,null,null,null,null,null,[B=this.J5,B.AEO],null,false);},AAM:function(){
return this.J5;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=
C.UX;this.G([0,0,C.ApA[0],C.ApA[1]]);},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.J5)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ScreenContainer"
};C.NR={Tw:null,Q:null,Alw:null,XN:null,M2:null,NQ:null,Sn:null,So:null,ACl:255,
Oq:function(H){var F;if(!!this.Q){this.AWI();var Aa6=(F=this.Q,F[1].call(F[0]));
if(Aa6>20)this.NQ.L(A.iF.E1);else this.NQ.L(A.iF.F0);this.NQ.L((this.NQ.AM&0x00FFFFFF
)|(this.Ajz(Aa6,0,30)<<24));this.Sn.L((this.Sn.AM&0x00FFFFFF)|(this.Ajz(Aa6,31,60
)<<24));this.So.L((this.So.AM&0x00FFFFFF)|(this.Ajz(Aa6,61,100)<<24));}},AVb:function(
s){this.Oq(s);},AD:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.
AVb],this.Q,0);this.Q=E;if(!!E)A.za([this,this.AVb],E,0);if(!!E)A.ow([this,this.
AVb],this);},AXJ:function(H){var F;if(!!this.Alw)this.XN.An((F=this.Alw,F[1].call(
F[0])));else this.XN.An(false);this.A36(255);},A3Z:function(E){if(A.z_(this.Alw,
E))return;if(!!this.Alw)A.zn([this,this.AXJ],this.Alw,0);this.Alw=E;if(!!E)A.za([
this,this.AXJ],E,0);if(!!E)A.ow([this,this.AXJ],this);},A36:function(E){if(this.
ACl===E)return;this.ACl=E;if(!!this.Tw)this.Tw.L((this.Tw.AM&0x00FFFFFF)|((E&0xFF
)<<24));},Ajz:function(AVh,A7q,Bqb){if(AVh<A7q)return 0;else if((AVh>=A7q)&&(AVh<
Bqb))return this.ACl&0xFF;else return 255;},AWI:function(){var F;if(!!this.Q){if((
F=this.Q,F[1].call(F[0]))>60)this.Tw=this.So;else if((F=this.Q,F[1].call(F[0]))>
30)this.Tw=this.Sn;else this.Tw=this.NQ;}else this.Tw=null;},Ber:function(){return this.
ACl;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.XN._Init.call(this.XN={
I:this},0);A.abh.Am._Init.call(this.M2={I:this},0);A.abh.AH._Init.call(this.NQ={
I:this},0);A.abh.AH._Init.call(this.Sn={I:this},0);A.abh.AH._Init.call(this.So={
I:this},0);this.__proto__=C.NR;this.G(EH);this.XN.FK(2000);this.M2.G(EH);this.M2.
L(A.iF.Text);this.NQ.G(Gv);this.NQ.L(A.iF.E1);this.Sn.G(I5);this.Sn.L(A.iF.E1);this.
So.G(Iq);this.So.L(A.iF.E1);this.J(this.M2,0);this.J(this.NQ,0);this.J(this.Sn,0
);this.J(this.So,0);this.XN.Q=[this,this.Ber,this.A36];this.M2.At(A.zW(A.abi.AIG
));},_Done:function(){this.__proto__=A.Core.O;this.XN._Done();this.M2._Done();this.
NQ._Done();this.Sn._Done();this.So._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.XN._ReInit();this.M2._ReInit();this.NQ._ReInit(
);this.Sn._ReInit();this.So._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.Tw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Alw)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.XN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M2)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.NQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.So)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::BatteryIndicator"};C.XN={_Init:function(aArg){A.abm.FE._Init.call(
this,aArg);this.__proto__=C.XN;this.AiJ=true;this.BX=0;this.Ci=255;},_className:
"Application::PulseAnimation"};C.D$={F_:null,AV:null,Background:null,NR:null,Bi:
null,C4:null,Kt:0,Asi:0,Asj:0,Amv:0,Lr:false,Kq:false,QC:false,Ah:function(Ae){var
B;A.Core.O.Ah.call(this,Ae);var FV=((Ae&0x10)===0x10);var Fx=((Ae&0x20)===0x20);
var Fw=this.Bi.Bw;if(!FV){this.Amv=A.iF.CR;this.Kt=A.iF.Text;}else if(Fw){this.Amv=
this.Asi;this.Kt=this.Asj;}else if(Fx){this.Amv=this.Asi;this.Kt=this.Asj;}else{
this.Amv=A.iF.CR;this.Kt=A.iF.Text;}this.Background.L(this.Amv);if(!!this.F_){this.
F_.AcT(this.Amv);this.F_.CZ(this.Kt);}this.Lr=FV;this.Kq=Fx;this.QC=Fw;},Ps:function(
H){this.Al();A.ow(this.AV,this);},AgH:function(H){if(this.C4.Aan)return;this.Al(
);if(this.Bi.Bw){A.ow(this.AV,this);this.Bi.An(false);}this.Bi.An(true);},Z9:function(
E){if(this.F_===E)return;if(!!this.F_)this.HA(this.F_);this.F_=E;if(!!this.F_)this.
J(this.F_,0);this.A8(E);this.Al();},A3K:function(E){if(this.Asi===E)return;this.
Asi=E;this.Al();},A3L:function(E){if(this.Asj===E)return;this.Asj=E;this.Al();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={
I:this},0);C.NR._Init.call(this.NR={I:this},0);A.Core.Timer._Init.call(this.Bi={
I:this},0);A.Core.B1._Init.call(this.C4={I:this},0);this.__proto__=C.D$;var B;this.
G(BI);this.Background.AW(0x3F);this.Background.G(BI);this.Background.L(A.iF.CR);
this.NR.G(Oe);this.Kt=A.iF.Text;this.Bi.P4(0);this.Bi.UR(50);this.C4.Filter=1;this.
Asi=A.iF.A6;this.Asj=A.iF.Be;this.Amv=A.iF.Text;this.J(this.Background,0);this.J(
this.NR,0);this.NR.AD([B=A._GetAutoObject(A.Device.Device),B.As2,B.Avp]);this.NR.
A3Z([B=A._GetAutoObject(A.Device.Device),B.As4,B.Avq]);this.Bi.Mz=[this,this.Ps];
this.C4.B2=[this,this.AgH];},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.NR._Done();this.Bi._Done();this.C4._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.
NR._ReInit();this.Bi._ReInit();this.C4._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.F_)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
AV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.NR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Bi)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Header"};C.Wg={AcE:null,S9:null,CF:function(H){if(this.K&&this.K.CF
)return this.K.CF.apply(this,arguments);else return C.Aw.CF.apply(this,arguments
);},Fc:function(H){if(this.K&&this.K.Fc)return this.K.Fc.apply(this,arguments);else
return C.Aw.Fc.apply(this,arguments);},_Init:function(aArg){C.Aw._Init.call(this
,aArg);A.abh.Am._Init.call(this.AcE={I:this},0);A.abh.Text._Init.call(this.S9={I:
this},0);this.__proto__=C.Wg;this.AcE.G(Pc);this.S9.G(Nq);this.S9.R(A.jm);this.S9.
L(A.iF.Text);this.S9.W(false);this.J(this.AcE,0);this.J(this.S9,0);this.AcE.At(null
);this.S9.Y(A.zW(A.eV.Gk));var KP=this._variants();if(KP){this.K={};KP._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Aw;this.AcE._Done();this.S9._Done();C.Aw._Done.call(this);},_ReInit:function(){
C.Aw._ReInit.call(this);this.AcE._ReInit();this.S9._ReInit();this.S9.Y(A.zW(A.eV.
Gk));if(this.K)this.K._ReInit.call(this);},_Mark:function(D){var B;C.Aw._Mark.call(
this,D);if((B=this.AcE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.S9)._cycle!=D)B.
_Mark(B._cycle=D);if(this.K)this.K._Mark(D);},_variants:function(){return A.abt.
Wg._variants();},K:null,_className:"Application::BootScreen"};C.APW={Aw_:function(
H){A._GetAutoObject(C.A1).AfA(2);},_Init:function(aArg){C.Aw._Init.call(this,aArg
);this.__proto__=C.APW;this.Background.L(0xFF000000);this.D$.W(false);},_className:
"Application::SleepScreen"};C.Asv={EB:null,Ac:null,Wr:null,IA:null,T6:null,Wj:null
,T7:null,Wh:null,Wm:null,Sr:null,Wl:null,Ws:null,AE:null,C6:function(){this.DD(this
);},Init:function(aArg){var B;A.za([this,this.DD],[B=A._GetAutoObject(A.Device.Device
),B.AoG,B.Aqj],0);A._GetAutoObject(A.Device.Helper).AiC();this.A8(this.T6);this.
N.Cn(A.zW(A.abi.Az4));A.ow([this,this.DD],this);},A8:function(E){var B;var AXp=this.
A6;C.Aw.A8.call(this,E);if((this.A6!==AXp)&&(!!this.A6&&((this.A6.S&0x400)===0x400
))){var AF4=A._NewObject(A.abm.ACi,0);AF4.FK(250);AF4.IG(1);AF4.UU(6);this.Ac.IB(
this.A6,true,AF4,null);}},CF:function(H){this.AYE(this);A._GetAutoObject(A.Device.
Device).Aq.Bo(null);A._GetAutoObject(A.Device.Device).Bt.Bo(null);A._GetAutoObject(
A.Device.Helper).AiC();A._GetAutoObject(A.Device.Helper).Apu();},FZ:function(H){
var B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);
this.AE.N4(-this.Ac.Br[1]);},H5:function(H){var Cg=(C.E3.isPrototypeOf(H)?H:null
);if(!Cg)return;if(Cg===this.T6)A._GetAutoObject(C.A1).BY(34);else if(Cg===this.
Wj)A._GetAutoObject(C.A1).BY(33);else if(Cg===this.Wm)A._GetAutoObject(C.A1).BY(
78);else if(Cg===this.T7)A._GetAutoObject(C.A1).BY(8);else if(Cg===this.Wh)A._GetAutoObject(
C.A1).BY(56);else if(Cg===this.Sr)A._GetAutoObject(C.A1).BY(25);else if(Cg===this.
Wr)A._GetAutoObject(C.A1).BY(88);else if(Cg===this.IA)A._GetAutoObject(C.A1).BY(
79);else if(Cg===this.Ws)A._GetAutoObject(C.A1).BY(6);else if(Cg===this.Wl)A._GetAutoObject(
C.A1).BY(72);},Bte:function(H){A._GetAutoObject(A.Device.Device).AcW(!A._GetAutoObject(
A.Device.Device).AkG);},DD:function(H){if(A._GetAutoObject(A.Device.Device).AkG)
this.N.GZ((A.z2(A.abg.A1B)+Cw)+A.z2(A.abg.Off).toLowerCase());else this.N.GZ((A.
z2(A.abg.A1B)+Cw)+A.z2(A.abg.A2b).toLowerCase());},Aw9:function(H){A._GetAutoObject(
A.Device.Device).Co(1);},AYE:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(
A._GetAutoObject(A.Device.Helper).LP());this.T7.Aae(A._GetAutoObject(A.Device.Device
).Aq.Cf().toFixed());},Iv:function(H){A.ow([this,this.FZ],this);},_Init:function(
aArg){C.Aw._Init.call(this,aArg);A.abh.AH._Init.call(this.EB={I:this},0);A.Core.
Ac._Init.call(this.Ac={I:this},0);C.E3._Init.call(this.Wr={I:this},0);C.E3._Init.
call(this.IA={I:this},0);C.E3._Init.call(this.T6={I:this},0);C.E3._Init.call(this.
Wj={I:this},0);C.Ri._Init.call(this.T7={I:this},0);C.E3._Init.call(this.Wh={I:this
},0);C.E3._Init.call(this.Wm={I:this},0);C.E3._Init.call(this.Sr={I:this},0);C.E3.
_Init.call(this.Wl={I:this},0);C.E3._Init.call(this.Ws={I:this},0);C.AE._Init.call(
this.AE={I:this},0);this.__proto__=C.Asv;this.Background.L(A.iF.CR);this.N.An(false
);this.N.W(true);this.Dw(C.Ast);this.EB.AW(0x3F);this.EB.G(FN);this.EB.L(A.iF.CE
);this.Ac.G(Of);this.Ac.Lf(9);this.Wr.G(Nr);this.Wr.Aj(true);this.Wr.U(A.z2(A.abg.
GG));this.IA.G(Kc);this.IA.Aj(true);this.IA.U(A.z2(A.abg.A1X));this.T6.G(Og);this.
T6.Aj(true);this.T6.U(A.z2(A.abg.TW));this.Wj.G(ME);this.Wj.Aj(true);this.Wj.U(A.
z2(A.abg.Oz));this.T7.G(Pd);this.T7.Aj(true);this.T7.U(A.z2(A.abg.ALo));this.Wh.
G(RO);this.Wh.Aj(true);this.Wh.U(A.z2(A.abg.Animal));this.Wm.G(Kc);this.Wm.Aj(true
);this.Wm.U(A.z2(A.abg.A1F));this.Sr.G(Tn);this.Sr.An(true);this.Sr.Aj(true);this.
Sr.W(true);this.Sr.U(A.z2(A.abg.A0y));this.Wl.G(Vi);this.Wl.Aj(true);this.Wl.U(A.
z2(A.abg.Device));this.Ws.G(Vj);this.Ws.Aj(true);this.Ws.U(A.z2(A.abg.Settings));
this.AE.G(JV);this.J(this.EB,0);this.J(this.Ac,0);this.J(this.Wr,0);this.J(this.
IA,0);this.J(this.T6,0);this.J(this.Wj,0);this.J(this.T7,0);this.J(this.Wh,0);this.
J(this.Wm,0);this.J(this.Sr,0);this.J(this.Wl,0);this.J(this.Ws,0);this.J(this.AE
,0);this.N.CB=[this,this.Bte];this.N.Ch=[this,this.Aw9];this.Ac.Eu=[this,this.Iv
];this.Wr.AV=[this,this.H5];this.Wr.DB(A.zW(A.abi.Az8));this.IA.AV=[this,this.H5
];this.IA.DB(A.zW(A.abi.AMn));this.T6.AV=[this,this.H5];this.T6.DB(A.zW(A.abi.ALs
));this.Wj.AV=[this,this.H5];this.Wj.DB(A.zW(A.abi.ALC));this.T7.AV=[this,this.H5
];this.T7.DB(A.zW(A.abi.AL0));this.Wh.AV=[this,this.H5];this.Wh.DB(A.zW(A.abi.ALv
));this.Wm.AV=[this,this.H5];this.Wm.DB(A.zW(A.abi.AL7));this.Sr.AV=[this,this.H5
];this.Sr.DB(A.zW(A.abi.ALP));this.Wl.AV=[this,this.H5];this.Wl.DB(A.zW(A.abi.ALM
));this.Ws.AV=[this,this.H5];this.Ws.DB(A.zW(A.abi.AMq));this.Init(aArg);},_Done:
function(){this.__proto__=C.Aw;this.EB._Done();this.Ac._Done();this.Wr._Done();this.
IA._Done();this.T6._Done();this.Wj._Done();this.T7._Done();this.Wh._Done();this.
Wm._Done();this.Sr._Done();this.Wl._Done();this.Ws._Done();this.AE._Done();C.Aw.
_Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.EB._ReInit();
this.Ac._ReInit();this.Wr._ReInit();this.IA._ReInit();this.T6._ReInit();this.Wj.
_ReInit();this.T7._ReInit();this.Wh._ReInit();this.Wm._ReInit();this.Sr._ReInit(
);this.Wl._ReInit();this.Ws._ReInit();this.AE._ReInit();this.Wr.U(A.z2(A.abg.GG)
);this.IA.U(A.z2(A.abg.A1X));this.T6.U(A.z2(A.abg.TW));this.Wj.U(A.z2(A.abg.Oz));
this.T7.U(A.z2(A.abg.ALo));this.Wh.U(A.z2(A.abg.Animal));this.Wm.U(A.z2(A.abg.A1F
));this.Sr.U(A.z2(A.abg.A0y));this.Wl.U(A.z2(A.abg.Device));this.Ws.U(A.z2(A.abg.
Settings));this.C6();},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.
EB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IA)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.T6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wj)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Wm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sr
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ws)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HomeScreen"};C.S6={Number:null,IL:null,Io:null,Sl:
null,ApS:0,Init:function(aArg){var B;A.za([this,this.A67],[B=A._GetAutoObject(A.
Device.Device),B.AN_,B.AUW],0);A.ow([this,this.A67],this);},Ah:function(Ae){C.Aw.
Ah.call(this,Ae);this.AlQ();},CF:function(H){A._GetAutoObject(A.Device.Device).Adn(
);},Fc:function(H){A._GetAutoObject(A.Device.Device).AlJ();},AjW:function(H){var
F;this.Al();this.Sl.An(A._GetAutoObject(A.Device.Device).ScanState===1);if(A._GetAutoObject(
A.Device.Device).ScanState===2)A._GetAutoObject(A.Device.Helper).Acd.An(true);if(
!this.Sl.Bw)(F=this.Sl.Q,F[2].call(F[0],this.Sl.BX));},A67:function(s){this.AjW(
s);},AlQ:function(){switch(A._GetAutoObject(A.Device.Device).ScanState){case 4:this.
Background.L(A.iF.F0);break;case 3:this.Background.L(A.iF.HB);break;default:this.
Background.L(A.iF.CE);}},Ais:function(E){if(this.ApS===E)return;this.ApS=E;this.
IL.Ais(E);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.abh.Text._Init.call(
this.Number={I:this},0);C.IL._Init.call(this.IL={I:this},0);A.abh.Am._Init.call(
this.Io={I:this},0);A.abm.FE._Init.call(this.Sl={I:this},0);this.__proto__=C.S6;
var B;this.Background.L(A.iF.CE);this.N.W(false);this.Number.G(RP);this.Number.KH(
true);this.Number.L(A.iF.Text);this.IL.G(Vk);this.IL.Ais(0);this.Io.G(Vl);this.Io.
L(A.iF.A6);this.Io.XD(true);this.Sl.FK(1750);this.Sl.Aab(750);this.Sl.Aim(0);this.
Sl.An(true);this.Sl.BX=3;this.J(this.Number,0);this.J(this.IL,0);this.J(this.Io,
0);this.Number.Y(A.zW(A.eV.Au));this.Io.At(A.zW(A.abi.Az_));this.Sl.Q=[B=this.Io
,B.ANX,B.Ce];this.Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.Number.
_Done();this.IL._Done();this.Io._Done();this.Sl._Done();C.Aw._Done.call(this);},
_ReInit:function(){C.Aw._ReInit.call(this);this.Number._ReInit();this.IL._ReInit(
);this.Io._ReInit();this.Sl._ReInit();this.Number.Y(A.zW(A.eV.Au));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Number)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sl)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ScanScreen"
};C.E3={CP:null,AzT:null,AV:null,Bi:null,C4:null,Background:null,LN:null,NV:null
,P0:null,Im:null,AZS:true,Lr:false,Kq:false,QC:false,Init:function(aArg){},Bh:function(
aSize){var B;C.GO.Bh.call(this,aSize);this.LN.G([0,0,(B=this.M)[2]-B[0],B[3]-B[1
]]);this.P0.G([0,0+20,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]]);this.NV.G(this.P0.
M);this.Im.G([].concat(0,this.Im.M.slice(1,4)));this.Im.G(A.aaQ(this.Im.M,aSize[
0]));this.Im.G(A.aaS(this.Im.M,0));this.Im.G([].concat(this.Im.M.slice(0,3),47));
},Ah:function(Ae){var B;C.GO.Ah.call(this,Ae);var FV=((Ae&0x10)===0x10);var Fx=((
Ae&0x20)===0x20);var Fw=this.Bi.Bw;if(!FV){this.P0.L(A.iF.AkT);this.Im.L(A.iF.CE
);this.NV.W(true);this.NV.L(A.iF.AMD);this.LN.W(false);}else if(Fw){this.P0.L(A.
iF.Be);this.Im.L(A.iF.Be);this.NV.W(false);this.LN.W(true);}else if(Fx){this.P0.
L(A.iF.Be);this.Im.L(A.iF.Be);this.NV.W(false);this.LN.W(true);}else{this.P0.L(A.
iF.Text);this.Im.L(A.iF.Text);this.NV.W(true);this.NV.L(A.iF.CR);this.LN.W(false
);}this.Lr=FV;this.Kq=Fx;this.QC=Fw;},Ps:function(H){this.Al();A.ow(this.AV,this
);},AgH:function(H){if(this.C4.Aan)return;this.Al();if(this.Bi.Bw){A.ow(this.AV,
this);this.Bi.An(false);}this.Bi.An(true);},U:function(E){if(this.Dn===E)return;
this.Dn=E;this.Im.R(E);},DB:function(E){if(this.CP===E)return;this.CP=E;this.P0.
At(E);this.NV.At(E);},Z8:function(E){if(this.AZS===E)return;this.AZS=E;this.Im.W(
E);},Aaa:function(E){if(this.AzT===E)return;this.AzT=E;this.LN.At(E);this.LN.G(A.
aaN(this.LN.M,E.FrameSize));},_Init:function(aArg){C.GO._Init.call(this,aArg);A.
Core.Timer._Init.call(this.Bi={I:this},0);A.Core.B1._Init.call(this.C4={I:this},
0);A.abh.AH._Init.call(this.Background={I:this},0);A.abh.Am._Init.call(this.LN={
I:this},0);A.abh.Am._Init.call(this.NV={I:this},0);A.abh.Am._Init.call(this.P0={
I:this},0);C.CG._Init.call(this.Im={I:this},0);this.__proto__=C.E3;this.G(Yb);this.
Bi.P4(0);this.Bi.UR(50);this.C4.Filter=1;this.Background.G(RQ);this.Background.W(
false);this.LN.AW(0x14);this.LN.L(A.iF.A6);this.LN.Ce(0);this.NV.L(A.iF.CR);this.
NV.Ce(1);this.Im.G(Yc);this.J(this.Background,0);this.J(this.LN,0);this.J(this.NV
,0);this.J(this.P0,0);this.J(this.Im,0);this.Bi.Mz=[this,this.Ps];this.C4.B2=[this
,this.AgH];this.LN.At(A.zW(A.abi.M5));this.NV.At(A.zW(A.abi.AsH));this.P0.At(A.zW(
A.abi.AsH));this.Im.Y(A.zW(A.eV.Au));this.Im.By(A.zW(A.eV.Az));this.Im.C5(A.zW(A.
eV.Cr));this.AzT=A.zW(A.abi.M5);this.Init(aArg);},_Done:function(){this.__proto__=
C.GO;this.Bi._Done();this.C4._Done();this.Background._Done();this.LN._Done();this.
NV._Done();this.P0._Done();this.Im._Done();C.GO._Done.call(this);},_ReInit:function(
){C.GO._ReInit.call(this);this.Bi._ReInit();this.C4._ReInit();this.Background._ReInit(
);this.LN._ReInit();this.NV._ReInit();this.P0._ReInit();this.Im._ReInit();},_Mark:
function(D){var B;C.GO._Mark.call(this,D);if((B=this.CP)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AzT)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AV)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.LN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NV).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.P0)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Im)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTopLevel"
};C.AE={Background:null,Ob:null,Apo:0,AiU:10,Ahp:100,AM:0,Aqt:true,Bh:function(aSize
){A.Core.O.Bh.call(this,aSize);this.Background.G([0,0,aSize[0],aSize[1]]);this.Ob.
G([].concat(2,this.Ob.M.slice(1,4)));this.Ob.G(A.aaQ(this.Ob.M,aSize[0]));},Ah:function(
Ae){var B;A.Core.O.Ah.call(this,Ae);var Agz=this.AiU<this.Ahp;var AFD=(B=this.M)[
3]-B[1];var AXd=10;var Arq=AFD;var AYB=0;if(10>AFD)AXd=AFD;if(this.AiU<this.Ahp)
Arq=((Arq*this.AiU)/this.Ahp)|0;if(Arq<AXd)Arq=AXd;if(this.AiU<this.Ahp)AYB=((this.
Beq()*(AFD-Arq))/(this.Ahp-this.AiU))|0;this.Ob.G(A.aaS(this.Ob.M,AYB));this.Ob.
G([].concat(this.Ob.M.slice(0,3),AYB+Arq));this.Ob.W(Agz);this.Background.W(Agz);
this.Aqt=Agz;},Beq:function(){var E=this.Apo;var G6=this.Ahp-this.AiU;if((G6>0)&&(
E>G6))E=G6;if(G6<=0)E=0;return E;},N4:function(E){if(E<0)E=0;if(this.Apo===E)return;
this.Apo=E;this.Al();},N6:function(E){if(E<0)E=0;if(this.AiU===E)return;this.AiU=
E;this.Al();},N2:function(E){if(E<0)E=0;if(this.Ahp===E)return;this.Ahp=E;this.Al(
);},L:function(E){if(this.AM===E)return;this.AM=E;this.Ob.L(E);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);A.abh.AH._Init.call(this.Ob={I:this},0);this.__proto__=C.AE;this.G(Vm);this.
An(false);this.AM=A.iF.A6;this.Background.AW(0x0);this.Background.G(To);this.Background.
L(A.iF.CR);this.Ob.AW(0x0);this.Ob.G(To);this.Ob.L(A.iF.A6);this.J(this.Background
,0);this.J(this.Ob,0);},_Done:function(){this.__proto__=A.Core.O;this.Background.
_Done();this.Ob._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.Ob._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.Ob)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VertScrollbar"
};C.CJ={Gb:null,Ac:null,AE:null,Am:null,A0_:A.jm,Init:function(aArg){A.ow([this,
this.AxF],this);},DW:function(H){var B;C.Aw.DW.call(this,H);this.Al();if(!!this.
A6&&((this.A6.S&0x400)===0x400))this.Ac.IB(this.A6,true,null,null);this.AxF(this
);},AjS:function(H){if(!!this.N.CB)A.ow(this.N.CB,this);},And:function(H){if(!!this.
N.Cm)A.ow(this.N.Cm,this);},Aw_:function(H){if(!!this.N.Ch)A.ow(this.N.Ch,this);
},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-B[1]);this.AE.N6((B=this.
Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);A.ow([this,this.BtA],this);},AxF:function(
H){var B;var G7=(C.B_.isPrototypeOf(B=this.A6)?B:null);this.N.GZ(A.jm);this.N.C$(
A.zW(A.abi.AhL));this.N.CB=[this,this.EY];if(!!G7&&!!G7.Akh){this.N.Ft(A.jm);this.
N.KL.DF(255);this.N.Atz(G7.Azg);this.N.Cn(G7.AsE);this.N.Ch=G7.Akh;}else{this.N.
Ft(A.jm);this.N.Cn(null);this.N.Ch=null;}if(!!G7&&!!G7.Aes){this.N.Cd(A.jm);this.
N.IK.DF(G7.At2);this.N.Ao1(G7.AkI);this.N.De(G7.Aog);this.N.Cm=G7.Aes;}else{this.
N.Cd(A.jm);this.N.De(null);this.N.Cm=null;}},Lg:function(E){if(this.A0_===E)return;
this.A0_=E;this.Gb.R(E);},EY:function(H){A._GetAutoObject(C.A1).Fm();},BtA:function(
H){var B;var BsA=this.AE.Background.Fe();var A9b=(BsA?this.M[2]-((B=this.AE.M)[2
]-B[0]):this.M[2]);var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){var Ag4=X;
X=X.Af;if(((Ag4.S&0x400)===0x400)){if(!!(A.Core.Ah5.isPrototypeOf(Ag4)?Ag4:null)
){var A9h=(A.Core.Ah5.isPrototypeOf(Ag4)?Ag4:null);A9h.DL([A9b,A9h.Ev[1]]);}else
if(!!(A.Core.Em.isPrototypeOf(Ag4)?Ag4:null)){var A_1=(A.Core.Em.isPrototypeOf(Ag4
)?Ag4:null);A_1.G(A.aaQ(A_1.M,A9b));}}}},Iv:function(H){A.ow([this,this.FZ],this
);},_Init:function(aArg){C.Aw._Init.call(this,aArg);C.CG._Init.call(this.Gb={I:this
},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.AE._Init.call(this.AE={I:this},0
);A.abh.Am._Init.call(this.Am={I:this},0);this.__proto__=C.CJ;this.N.W(true);this.
Gb.G(Vn);this.Gb.An(false);this.Gb.R(A.z2(A.abg.Settings));this.Gb.L(A.iF.Text);
this.Ac.G(FN);this.Ac.Lf(1);this.AE.G(JV);this.Am.G(Qh);this.Am.L(A.iF.Text);this.
J(this.Gb,0);this.J(this.Ac,0);this.J(this.AE,0);this.J(this.Am,0);this.Gb.Y(A.zW(
A.eV.OK));this.Gb.By(A.zW(A.eV.K7));this.Ac.Eu=[this,this.Iv];this.Am.At(A.zW(A.
abi.AzB));this.Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.Gb._Done();
this.Ac._Done();this.AE._Done();this.Am._Done();C.Aw._Done.call(this);},_ReInit:
function(){C.Aw._ReInit.call(this);this.Gb._ReInit();this.Ac._ReInit();this.AE._ReInit(
);this.Am._ReInit();this.Gb.R(A.z2(A.abg.Settings));this.Gb.Y(A.zW(A.eV.OK));this.
Gb.By(A.zW(A.eV.K7));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.
Gb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsScreen"};C.Ast={Timer:null,Text:null,Init:
function(aArg){var B;A.za([this,this.A$R],[B=A._GetAutoObject(A.Device.Helper),B.
Tq,B.Tr],0);},CZ:function(E){C.BW.CZ.call(this,E);this.Text.L(E);},A$R:function(
H){this.Text.R(A._GetAutoObject(A.abk.K5).BbK(A._GetAutoObject(A.Device.Helper).
DR()));},_Init:function(aArg){C.BW._Init.call(this,aArg);A.Core.Timer._Init.call(
this.Timer={I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);this.__proto__=
C.Ast;this.Timer.UR(1);this.Timer.An(true);this.Text.G(Vo);this.Text.R(A.jm);this.
J(this.Text,0);this.Timer.Mz=[this,this.A$R];this.Text.Y(A.zW(A.eV.Au));this.Init(
aArg);},_Done:function(){this.__proto__=C.BW;this.Timer._Done();this.Text._Done(
);C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.Timer.
_ReInit();this.Text._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(this,D);
if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderTime"};C.BW={Ka:0xFFFFFFFF,K3:0,CZ:
function(E){if(this.Ka===E)return;this.Ka=E;},AcT:function(E){if(this.K3===E)return;
this.K3=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.
BW;this.G(Ns);},_className:"Application::HeaderContent"};C.N={WH:null,WI:null,WJ:
null,Ae3:null,Ae4:null,Ae5:null,CB:null,Ch:null,Cm:null,Background:null,MU:null,
Js:null,KL:null,IK:null,OO:null,Jk:null,Mr:null,SE:null,SF:null,AlK:A.jm,AlL:A.jm
,AlM:A.jm,Aoh:0,Aoi:0,Aoj:0,Afl:0,XR:false,XQ:false,Apr:false,ApG:false,ApF:false
,Init:function(aArg){},Ah:function(Ae){if(!!this.WH)this.Js.Y(this.WH);if(!!this.
WI)this.KL.Y(this.WI);if(!!this.WJ)this.IK.Y(this.WJ);switch(this.Afl){case 0:{this.
MU.W(false);this.Js.L(A.iF.Be);this.KL.L(A.iF.Be);this.IK.L(A.iF.Be);this.OO.L(A.
iF.Be);this.Jk.L(A.iF.Be);this.Mr.L(A.iF.Be);}break;case 1:{if(!this.Ae3)this.MU.
G(A.z4(this.Js.ANQ(),Pe));else this.MU.G(this.OO.Dh());this.MU.W(true);this.Js.L(
A.iF.Text);this.KL.L(A.iF.Be);this.IK.L(A.iF.Be);this.OO.L(A.iF.Text);this.Jk.L(
A.iF.Be);this.Mr.L(A.iF.Be);}break;case 3:{if(!this.Ae5)this.MU.G(A.z4(this.IK.ANQ(
),Pe));else this.MU.G(this.Mr.Dh());this.MU.W(true);this.Js.L(A.iF.Be);this.KL.L(
A.iF.Be);this.IK.L(A.iF.Text);this.OO.L(A.iF.Be);this.Jk.L(A.iF.Be);this.Mr.L(A.
iF.Text);}break;case 2:{if(!this.Ae4)this.MU.G(A.z4(this.KL.ANQ(),Pe));else this.
MU.G(this.Jk.Dh());this.MU.W(true);this.Js.L(A.iF.Be);this.KL.L(A.iF.Text);this.
IK.L(A.iF.Be);this.OO.L(A.iF.Be);this.Jk.L(A.iF.Text);this.Mr.L(A.iF.Be);}break;
default:{this.MU.W(false);A.aa8("%s",Tp);}}if(!!this.OO.Ai){this.OO.W(true);this.
Js.W(false);}else{this.OO.W(false);this.Js.W(true);}if(this.AlL.length<=0){this.
Jk.W(true);this.KL.W(false);}else{this.Jk.W(false);this.KL.W(true);}if(!!this.Mr.
Ai){this.Mr.W(true);this.IK.W(false);}else{this.Mr.W(false);this.IK.W(true);}},GZ:
function(E){if(this.AlK===E)return;this.AlK=E;this.Js.R(E);this.Al();},Ft:function(
E){if(this.AlL===E)return;this.AlL=E;this.KL.R(E);this.Al();},Cd:function(E){if(
this.AlM===E)return;this.AlM=E;this.IK.R(E);this.Al();},ABs:function(E){if(this.
Afl===E)return;this.Afl=E;this.Al();},AOr:function(E){if(this.WH===E)return;this.
WH=E;this.Js.Y(E);this.Al();},Atz:function(E){if(this.WI===E)return;this.WI=E;this.
KL.Y(E);this.Al();},Ao1:function(E){if(this.WJ===E)return;this.WJ=E;this.IK.Y(E);
this.Al();},AXW:function(H){this.Al();},C$:function(E){if(this.Ae3===E)return;this.
Ae3=E;this.OO.At(E);this.Al();},Cn:function(E){if(this.Ae4===E)return;this.Ae4=E;
this.Jk.At(E);this.Al();},De:function(E){if(this.Ae5===E)return;this.Ae5=E;this.
Mr.At(E);this.Al();},O4:function(E){if(this.ApF===E)return;this.ApF=E;this.SE.W(
E);if(E)this.Js.G([].concat(this.SE.M[2],this.Js.M.slice(1,4)));else this.Js.G([
].concat(0,this.Js.M.slice(1,4)));this.Al();},O5:function(E){if(this.ApG===E)return;
this.ApG=E;this.SF.W(E);if(E)this.IK.G(A.aaQ(this.IK.M,this.SF.M[0]));else this.
IK.G(A.aaQ(this.IK.M,this.M[2]));this.Al();},BfZ:function(E){if(this.Aoh===E)return;
this.Aoh=E;this.OO.Ce(E);this.Al();},AOv:function(E){if(this.Aoi===E)return;this.
Aoi=E;this.Jk.Ce(E);this.Al();},A3P:function(E){if(this.Aoj===E)return;this.Aoj=
E;this.Mr.Ce(E);this.Al();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);
A.abh.AH._Init.call(this.Background={I:this},0);A.abh.AH._Init.call(this.MU={I:this
},0);C.CG._Init.call(this.Js={I:this},0);C.CG._Init.call(this.KL={I:this},0);C.CG.
_Init.call(this.IK={I:this},0);A.abh.Am._Init.call(this.OO={I:this},0);A.abh.Am.
_Init.call(this.Jk={I:this},0);A.abh.Am._Init.call(this.Mr={I:this},0);A.abh.Am.
_Init.call(this.SE={I:this},0);A.abh.Am._Init.call(this.SF={I:this},0);this.__proto__=
C.N;this.G(BI);this.Background.AW(0x3F);this.Background.G(BI);this.Background.L(
A.iF.AeO);this.MU.G(Yd);this.MU.L(A.iF.CR);this.MU.W(false);this.Js.AW(0x14);this.
Js.G(Vp);this.Js.A0(0x12);this.KL.AW(0x14);this.KL.G(Ye);this.KL.A0(0x12);this.IK.
G(Yf);this.OO.G(Vq);this.Jk.G(Vr);this.Mr.G(RR);this.Mr.W(false);this.SE.G(Yg);this.
SE.W(false);this.SF.G(Yh);this.SF.W(false);this.J(this.Background,0);this.J(this.
MU,0);this.J(this.Js,0);this.J(this.KL,0);this.J(this.IK,0);this.J(this.OO,0);this.
J(this.Jk,0);this.J(this.Mr,0);this.J(this.SE,0);this.J(this.SF,0);this.Js.Y(A.zW(
A.eV.Az));this.Js.By(A.zW(A.eV.Cr));this.Js.Rs([this,this.AXW]);this.KL.Y(A.zW(A.
eV.Az));this.KL.By(A.zW(A.eV.Cr));this.KL.Rs([this,this.AXW]);this.IK.Y(A.zW(A.eV.
Az));this.IK.By(A.zW(A.eV.Cr));this.IK.Rs([this,this.AXW]);this.WH=A.zW(A.eV.Az);
this.WI=A.zW(A.eV.Az);this.WJ=A.zW(A.eV.Az);this.OO.At(null);this.Jk.At(null);this.
Mr.At(null);this.SE.At(A.zW(A.abi.AIz));this.SF.At(A.zW(A.abi.Ahg));this.Init(aArg
);},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.MU._Done(
);this.Js._Done();this.KL._Done();this.IK._Done();this.OO._Done();this.Jk._Done(
);this.Mr._Done();this.SE._Done();this.SF._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.MU._ReInit(
);this.Js._ReInit();this.KL._ReInit();this.IK._ReInit();this.OO._ReInit();this.Jk.
_ReInit();this.Mr._ReInit();this.SE._ReInit();this.SF._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.WH)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WJ)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ae3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ae4)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ae5)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.CB)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ch)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cm)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.MU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Js)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IK)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jk)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Mr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SF)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::Footer"};C.AzF={Init:function(aArg){var B;A.za([this,this.MF],[B=A.
_GetAutoObject(A.Device.Helper),B.AoJ,B.Air],0);A.za([this,this.MF],[B=A._GetAutoObject(
A.Device.Helper),B.A2S,B.ABP],0);A.ow([this,this.MF],this);},EA:function(H){if(!
!A._GetAutoObject(A.Device.Helper).AfI)this.Z$(A._GetAutoObject(A.Device.Helper).
AfI.AKD());else this.Z$(-1);if(!!A._GetAutoObject(A.Device.Helper).S7)this.OnSetAnimalId(
A._GetAutoObject(A.Device.Helper).AlO(A._GetAutoObject(A.Device.Helper).S7.Id));
else this.OnSetAnimalId(-1);},_Init:function(aArg){C.AkP._Init.call(this,aArg);this.
__proto__=C.AzF;this.Init(aArg);},_className:"Application::HeaderScannedIds"};C.
AC5={Ee:null,D1:null,Fn:null,Wf:null,Sm:null,H$:null,Ia:null,Init:function(aArg){
},UV:function(H){var B;C.Dv.UV.call(this,H);var AGP=this.Av8(A._GetAutoObject(A.
Device.Helper).S$.Get(A._GetAutoObject(A.Device.Helper).V.AnimalType));var AHs=this.
Av8(A._GetAutoObject(A.Device.Helper).Ta.Get(A._GetAutoObject(A.Device.Helper).V.
AnimalType));var Bst=this.Av8(A._GetAutoObject(A.Device.Device).X_);this.Ee.G(A.
aaS(this.Ee.M,0));this.Ee.G([].concat(this.Ee.M.slice(0,3),((B=this.M)[3]-B[1])-
AGP));this.Ia.G(A.aaR(this.Ia.M,this.Ee.M[3]-((((B=this.Ia.M)[3]-B[1])/2)|0)));this.
D1.G(A.aaS(this.D1.M,this.Ee.M[3]));this.D1.G([].concat(this.D1.M.slice(0,3),((B=
this.M)[3]-B[1])-AHs));this.H$.G(A.aaR(this.H$.M,(this.D1.M[3]-((((B=this.H$.M)[
3]-B[1])/2)|0))+2));this.Fn.G(A.aaS(this.Fn.M,this.D1.M[3]));this.Fn.G([].concat(
this.Fn.M.slice(0,3),((B=this.M)[3]-B[1])-Bst));this.Sm.G(A.aaR(this.Sm.M,this.Fn.
M[3]-((((B=this.Sm.M)[3]-B[1])/2)|0)));this.Wf.G(A.aaS(this.Wf.M,this.Fn.M[3]));
this.Wf.G([].concat(this.Wf.M.slice(0,3),(B=this.M)[3]-B[1]));},AFP:function(Amn
){return A._GetAutoObject(A.Device.Converter).AiN(Amn);},AGj:function(){return A.
_GetAutoObject(A.abk.Temperature).AjA();},_Init:function(aArg){C.Dv._Init.call(this
,aArg);A.abh.AH._Init.call(this.Ee={I:this},0);A.abh.AH._Init.call(this.D1={I:this
},0);A.abh.AH._Init.call(this.Fn={I:this},0);A.abh.AH._Init.call(this.Wf={I:this
},0);A.abh.AH._Init.call(this.Sm={I:this},0);A.abh.AH._Init.call(this.H$={I:this
},0);A.abh.AH._Init.call(this.Ia={I:this},0);this.__proto__=C.AC5;this.Ee.AW(0xD
);this.Ee.G(AaK);this.Ee.L(A.iF.F0);this.D1.AW(0xD);this.D1.G(Qi);this.D1.L(A.iF.
HB);this.Fn.AW(0xD);this.Fn.G(AaL);this.Fn.L(A.iF.E1);this.Wf.AW(0xD);this.Wf.G(
AdG);this.Wf.L(A.iF.Adz);this.Sm.AW(0xD);this.Sm.G(Yi);this.Sm.Atk(A.iF.Adz);this.
Sm.Atl(A.iF.Adz);this.Sm.Atn(A.iF.E1);this.Sm.Atm(A.iF.E1);this.H$.AW(0xD);this.
H$.G(Vs);this.H$.Atk(A.iF.E1);this.H$.Atl(A.iF.E1);this.H$.Atn(A.iF.HB);this.H$.
Atm(A.iF.HB);this.Ia.AW(0xD);this.Ia.G(Yj);this.Ia.Atk(A.iF.HB);this.Ia.Atl(A.iF.
HB);this.Ia.Atn(A.iF.F0);this.Ia.Atm(A.iF.F0);this.J(this.Ee,-1);this.J(this.D1,-
1);this.J(this.Fn,-1);this.J(this.Wf,-1);this.J(this.Sm,-1);this.J(this.H$,-1);this.
J(this.Ia,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Dv;this.Ee._Done(
);this.D1._Done();this.Fn._Done();this.Wf._Done();this.Sm._Done();this.H$._Done(
);this.Ia._Done();C.Dv._Done.call(this);},_ReInit:function(){C.Dv._ReInit.call(this
);this.Ee._ReInit();this.D1._ReInit();this.Fn._ReInit();this.Wf._ReInit();this.Sm.
_ReInit();this.H$._ReInit();this.Ia._ReInit();},_Mark:function(D){var B;C.Dv._Mark.
call(this,D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D1)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Fn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wf
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sm)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ia)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TemperatureGraph"};C.B_={Ask:null,AkI:null,ALW:null
,Aog:null,Azg:null,AsE:null,AV:null,Aes:null,Akh:null,N:null,Bi:null,PQ:null,ACO:
false,Aws:false,At2:255,Lr:false,Kq:false,QC:false,Ah:function(Ae){var B;C.Tc.Ah.
call(this,Ae);var FV=((Ae&0x10)===0x10);var Fx=((Ae&0x20)===0x20);var Gz=((Ae&0x40
)===0x40);var Fw=this.Bi.Bw;var Gf=A.iF.CE;var G3=A.iF.Text;if(this.GY){Gf=A.iF.
Be;G3=A.iF.Text;}if(!FV){this.Background.L(A.iF.CR);this.T.L(A.iF.CE);}else if(Fw
){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);}else if(Gz){this.Background.L(A.
iF.A6);this.T.L(A.iF.Be);}else if(Fx){this.Background.L(A.iF.AkT);this.T.L(A.iF.
Be);}else{this.Background.L(Gf);this.T.L(G3);}if(this.ACO)this.T.R(this.Dn+A.z2(
A.abg.Colon));else this.T.R(this.Dn);this.Lr=FV;this.Kq=Fx;this.QC=Fw;this.Aws=Gz;
},Ps:function(H){this.Al();A.ow(this.AV,this);},Bps:function(s){this.Ps(s);},JE:
function(H){if(this.PQ.Aan)return;this.Al();if(this.Bi.Bw){A.ow(this.AV,this);this.
Bi.An(false);}this.Bi.An(true);},AvA:function(s){this.JE(s);},Afr:function(E){if(
A.z$(this.Aes,E))return;this.Aes=E;},AoZ:function(E){if(this.Ask===E)return;this.
Ask=E;},Ao0:function(E){if(this.AkI===E)return;this.AkI=E;},A3X:function(E){if(this.
At2===E)return;this.At2=E;},He:function(E){if(A.z_(this.N,E))return;this.N=E;},U:
function(E){if(this.Dn===E)return;this.Dn=E;this.Al();},AXz:function(H){},Byx:function(
s){this.AXz(s);},Ail:function(E){if(this.Aog===E)return;this.Aog=E;},Nc:function(
E){if(A.z$(this.Akh,E))return;this.Akh=E;},Nd:function(E){if(this.AsE===E)return;
this.AsE=E;},XI:function(E){if(this.ACO===E)return;this.ACO=E;this.Al();},_Init:
function(aArg){C.Tc._Init.call(this,aArg);A.Core.Timer._Init.call(this.Bi={I:this
},0);A.Core.B1._Init.call(this.PQ={I:this},0);this.__proto__=C.B_;this.Bi.P4(0);
this.Bi.UR(50);this.Bi.An(false);this.PQ.Filter=1;this.Bi.Mz=[this,this.Bps];this.
PQ.B2=[this,this.AvA];this.Ask=A.zW(A.eV.Az);this.AkI=A.zW(A.eV.Az);this.ALW=A.zW(
A.abi.ET);this.Azg=A.zW(A.eV.Az);},_Done:function(){this.__proto__=C.Tc;this.Bi.
_Done();this.PQ._Done();C.Tc._Done.call(this);},_ReInit:function(){C.Tc._ReInit.
call(this);this.Bi._ReInit();this.PQ._ReInit();},_Mark:function(D){var B;C.Tc._Mark.
call(this,D);if((B=this.Ask)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkI)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ALW)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Aog)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Azg)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AsE)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aes)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.Akh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Bi)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.PQ)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MenuItem"};C.Da={Q:null,Ak4:null,Ak6:null,GU:null,Hv:null,AI:0,FI:
0,Fs:100,E9:0,Init:function(aArg){},JE:function(H){this.E9=1;C.DY.JE.call(this,H
);},Bh:function(aSize){C.DY.Bh.call(this,aSize);this.GU.G([0,aSize[1]-40,40,aSize[
1]]);this.Hv.G([].concat(A.aaj(aSize,AdH),aSize));},A_e:function(H){this.E9=6;this.
Al();if(this.Bi.Bw){A.ow([this,this.Avx],this);this.Bi.An(false);}this.Bi.An(true
);},Ah:function(Ae){var B;C.DY.Ah.call(this,Ae);var Fx=((Ae&0x20)===0x20);var Fw=
this.Bi.Bw;this.GU.L(this.T.AM);this.Hv.L(this.T.AM);this.GU.W((Fx||Fw)&&(this.AI>
this.FI));this.Hv.W((Fx||Fw)&&(this.AI<this.Fs));if(this.E9===6)this.GU.L(A.iF.E1
);if(this.E9===7)this.Hv.L(A.iF.E1);},Ps:function(H){if(this.E9===6)A.ow([this,this.
Avx],this);if(this.E9===7)A.ow([this,this.Avy],this);if(this.E9===1)A.ow(this.AV
,this);this.E9=0;this.Al();},C1:function(H){var F;if(!!this.Q)this.Bu((F=this.Q,
F[1].call(F[0])));},AaQ:function(s){this.C1(s);},AD:function(E){if(A.z_(this.Q,E
))return;if(!!this.Q)A.zn([this,this.AaQ],this.Q,0);this.Q=E;if(!!E)A.za([this,this.
AaQ],E,0);if(!!E)A.ow([this,this.AaQ],this);},A_f:function(H){this.E9=7;this.Al(
);if(this.Bi.Bw){A.ow([this,this.Avy],this);this.Bi.An(false);}this.Bi.An(true);
},JB:function(H){this.E9=0;},Avy:function(s){this.JB(s);},Jw:function(H){this.E9=
0;},Avx:function(s){this.Jw(s);},Bu:function(E){if(E<this.FI)E=this.FI;if(E>this.
Fs)E=this.Fs;if(this.AI===E)return;this.AI=E;this.Al();},A6B:function(Ao){this.Bu(
Ao);},Hy:function(E){if(this.FI===E)return;this.FI=E;this.Al();},FS:function(E){
if(this.Fs===E)return;this.Fs=E;this.Al();},SW:function(){return this.AI;},_Init:
function(aArg){C.DY._Init.call(this,aArg);A.Core.B1._Init.call(this.Ak4={I:this}
,0);A.Core.B1._Init.call(this.Ak6={I:this},0);A.abh.Am._Init.call(this.GU={I:this
},0);A.abh.Am._Init.call(this.Hv={I:this},0);this.__proto__=C.Da;this.G(KO);this.
Ak4.Filter=6;this.Ak6.Filter=7;this.Background.G(KO);this.T.G(AaM);this.T.R(RS);
this.GU.G(Nt);this.Hv.G(AlX);this.Hv.Ce(1);this.J(this.GU,0);this.J(this.Hv,0);this.
Ak4.B2=[this,this.A_e];this.Ak4.Ea=[this,this.A_e];this.Ak6.B2=[this,this.A_f];this.
Ak6.Ea=[this,this.A_f];this.T.Y(A.zW(A.eV.Au));this.T.By(A.zW(A.eV.Az));this.T.C5(
null);this.GU.At(A.zW(A.abi.Ako));this.Hv.At(A.zW(A.abi.Ako));this.Init(aArg);},
_Done:function(){this.__proto__=C.DY;this.Ak4._Done();this.Ak6._Done();this.GU._Done(
);this.Hv._Done();C.DY._Done.call(this);},_ReInit:function(){C.DY._ReInit.call(this
);this.Ak4._ReInit();this.Ak6._ReInit();this.GU._ReInit();this.Hv._ReInit();},_Mark:
function(D){var B;C.DY._Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Ak4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak6).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.GU)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Hv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBase"
};C.AC={Q:0,Dx:function(){return-1;},Dd:function(aIndex){return-1;},GS:function(
aIndex){return A.jm;},DX:function(A2){return-1;},HP:function(){return-1;},AD:function(
E){this.Q=E;},CC:function(Ao){this.AD(Ao);},Azk:function(aIndex){return null;},Azm:
function(aIndex){return 0;},CA:function(){return this.Q;},_Init:function(aArg){this.
__proto__=C.AC;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(
){},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:
null,_cycle:0,_observers:null,_className:"Application::Selection"};C.JS={Aum:null
,B3:null,ADg:A.jm,AQq:A.jm,AhS:1,Init:function(aArg){},Ah:function(Ae){var B;var
F;C.Da.Ah.call(this,Ae);if(!this.Aum){this.B3.L(this.T.AM);if(!!this.Q){if((F=this.
Q,F[1].call(F[0]))===1)this.B3.R(((F=this.Q,F[1].call(F[0])).toFixed()+Cw)+this.
AQq);else this.B3.R(((F=this.Q,F[1].call(F[0])).toFixed()+Cw)+this.ADg);}}else(B=
this.Aum)?B[1].call(B[0],this):null;},JB:function(H){var F;var BR=this.AI;C.Da.JB.
call(this,H);this.Bu(this.AI+this.AhS);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[
2].call(F[0],this.AI));A.aat(this.Q,0);}},Jw:function(H){var F;var BR=this.AI;C.
Da.Jw.call(this,H);this.Bu(this.AI-this.AhS);if(this.AI!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Ng:function(E){if(this.ADg===E)return;
this.ADg=E;this.Al();},N5:function(E){if(this.AQq===E)return;this.AQq=E;this.Al(
);},AOw:function(E){if(this.AhS===E)return;this.AhS=E;},A4b:function(E){if(A.z$(
this.Aum,E))return;this.Aum=E;},_Init:function(aArg){C.Da._Init.call(this,aArg);
C.CG._Init.call(this.B3={I:this},0);this.__proto__=C.JS;this.G(KO);this.B3.G(AlY
);this.J(this.B3,-1);this.B3.Y(A.zW(A.eV.Au));this.B3.By(A.zW(A.eV.Az));this.Init(
aArg);},_Done:function(){this.__proto__=C.Da;this.B3._Done();C.Da._Done.call(this
);},_ReInit:function(){C.Da._ReInit.call(this);this.B3._ReInit();},_Mark:function(
D){var B;C.Da._Mark.call(this,D);if((B=this.Aum)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.B3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemValue"
};C.B$={AC:null,Di:null,Hd:null,C6:function(){this.Ah(this.S);},Init:function(aArg
){},Bh:function(aSize){var B;C.Da.Bh.call(this,aSize);this.Di.G([this.GU.M[2]-10
,this.GU.M[1],this.Hv.M[0]+10,this.GU.M[3]]);this.Di.ABt((B=this.Di.M)[2]-B[0]);
this.Di.IB(this.Di.FM,true,null,null);},Ah:function(Ae){var B;C.Da.Ah.call(this,
Ae);var Fx=((Ae&0x20)===0x20);var Fw=this.Bi.Bw;this.Di.ZL(0,this.Di.AN-1);this.
GU.W(Fx||Fw);this.Hv.W(Fx||Fw);},C1:function(H){var F;if(!!this.Q&&!!this.AC)this.
Bu(this.AC.DX((F=this.Q,F[1].call(F[0]))));},JB:function(H){var F;var BR=this.AI;
C.Da.JB.call(this,H);this.Bu(this.AI+1);if(this.AI!==BR){if(!!this.Q&&!!this.AC)(
F=this.Q,F[2].call(F[0],this.AC.Dd(this.AI)));A.aat(this.Q,0);}},Jw:function(H){
var F;var BR=this.AI;C.Da.Jw.call(this,H);this.Bu(this.AI-1);if(this.AI!==BR){if(
!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.AC.Dd(this.AI)));A.aat(this.Q,
0);}},Bu:function(E){var Pw=0;if(E<this.FI){E=this.Fs;Pw=-this.Di.Ux*this.Di.AN;
}if(E>this.Fs){E=this.FI;Pw=this.Di.Ux;}C.Da.Bu.call(this,E);if(!!Pw)this.Di.Go(
Pw);this.Di.Gp(this.AI);if(this.Di.BcE())this.Di.Bih(false,false);this.Di.IB(this.
Di.FM,true,this.Hd,null);},GH:function(H){var B;var Fy=this.Di.IE;var Ck=(C.CG.isPrototypeOf(
B=this.Di.B5)?B:null);if(!Ck)return;Ck.Y(this.T.Cp);Ck.By(this.T.AkH);Ck.C5(this.
T.An7);Ck.L(this.T.AM);if(!!this.AC)Ck.R(this.AC.GS(Fy));else Ck.R(JW);Ck.G(A.aaN(
Ck.M,[this.Di.Ux,(B=this.Di.M)[3]-B[1]]));},Bo4:function(s){this.GH(s);},Dk:function(
E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.Hy(0);this.FS(this.AC.Dx()-
1);this.Di.I1(this.AC.Dx());this.Di.ZL(0,this.Di.AN-1);}},_Init:function(aArg){C.
Da._Init.call(this,aArg);A.Core.Di._Init.call(this.Di={I:this},0);A.abm.FE._Init.
call(this.Hd={I:this},0);this.__proto__=C.B$;this.G(KO);this.Di.Ne(C.CG);this.Hd.
UU(23);this.Hd.IG(1);this.Hd.FK(200);this.J(this.Di,0);this.T.Y(A.zW(A.eV.Au));this.
T.By(A.zW(A.eV.Az));this.Di.GH=[this,this.Bo4];this.Init(aArg);},_Done:function(
){this.__proto__=C.Da;this.Di._Done();this.Hd._Done();C.Da._Done.call(this);},_ReInit:
function(){C.Da._ReInit.call(this);this.Di._ReInit();this.Hd._ReInit();this.C6();
},_Mark:function(D){var B;C.Da._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Di)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hd).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroup"};C.AlH={
Fa:null,D6:null,Ap:null,IY:null,Hc:null,Q2:null,Zp:null,SV:null,Ab9:null,RN:null
,FQ:null,FP:null,G_:0,A3:0,Aub:false,BcB:false,Init:function(aArg){},Ah:function(
Ae){C.Da.Ah.call(this,Ae);this.GU.W(false);this.Hv.W(false);var AqS=A.jm;if(!!this.
D6){this.Q2.R(this.Ap.Format(AlZ));this.SV.R(this.Ap.Format(Al0));this.RN.R(this.
Ap.Format(Af0));}if(this.A3===1){this.Hc.W(true);this.Hc.G(this.Q2.M);this.Hc.L(
this.T.AM);this.Q2.L(this.Background.AM);this.SV.L(this.T.AM);this.RN.L(this.T.AM
);AqS=A.z2(A.abg.AZ9);}else if(this.A3===2){this.Hc.W(true);this.Hc.G(this.SV.M);
this.Hc.L(this.T.AM);this.Q2.L(this.T.AM);this.SV.L(this.Background.AM);this.RN.
L(this.T.AM);AqS=A.z2(A.abg.GF);}else if(this.A3===3){this.Hc.W(true);this.Hc.G(
this.RN.M);this.Hc.L(this.T.AM);this.Q2.L(this.T.AM);this.SV.L(this.T.AM);this.RN.
L(this.Background.AM);AqS=A.z2(A.abg.Year);}else{this.Hc.W(false);this.Q2.L(this.
T.AM);this.Ab9.L(this.T.AM);this.SV.L(this.T.AM);this.Zp.L(this.T.AM);this.RN.L(
this.T.AM);}if(AqS.length>0){if(this.ACO)this.T.R((((this.Dn+AaN)+AqS)+String.fromCharCode(
0x29))+A.z2(A.abg.Colon));else this.T.R(((this.Dn+AaN)+AqS)+String.fromCharCode(
0x29));}},Ps:function(H){if(this.E9===1)A.ow([this,this.TC],this);else if(this.E9===
4)A.ow([this,this.Agy],this);else if(this.E9===5)A.ow([this,this.Agk],this);C.Da.
Ps.call(this,H);},JB:function(H){switch(this.A3){case 0:C.Da.JB.call(this,H);break;
case 3:break;default:this.AjU(this);}},Jw:function(H){switch(this.A3){case 0:C.Da.
Jw.call(this,H);break;default:this.Agj(this);}},Abq:function(H){var F;if(!!this.
D6)this.XE((F=this.D6,F[1].call(F[0])));},Ac2:function(E){if(A.z_(this.D6,E))return;
if(!!this.D6)A.zn([this,this.Abq],this.D6,0);this.D6=E;if(!!E)A.za([this,this.Abq
],E,0);if(!!E)A.ow([this,this.Abq],this);},XE:function(E){if(this.G_===E)return;
this.G_=E;this.Ap.Initialize(this.G_);this.Al();},AjU:function(H){this.E9=1;this.
Al();if(this.Bi.Bw){A.ow([this,this.TC],this);this.Bi.An(false);}this.Bi.An(true
);},TC:function(H){this.Ed(this.A3+1);},AjV:function(H){this.E9=4;this.Al();if(this.
Bi.Bw){A.ow([this,this.Agy],this);this.Bi.An(false);}this.Bi.An(true);},AjT:function(
H){this.E9=5;this.Al();if(this.Bi.Bw){A.ow([this,this.Agk],this);this.Bi.An(false
);}this.Bi.An(true);},Agy:function(H){var B;var F;var BR=this.G_;switch(this.A3){
case 1:{if(this.Aub){var AxO=A._NewObject(A.Core.AlN,0);AxO.Ky=1;if(this.Ap.J(AxO
).JN()>A._GetAutoObject(A.Device.Helper).DR())return;}if(this.Ap.GD<this.Ap.Z5()
)this.Ap.Le(this.Ap.GD+1);}break;case 2:{if(this.Aub){var AxO=A._NewObject(A.Core.
AlN,0);AxO.Ky=this.Ap.Z5();if(this.Ap.J(AxO).JN()>A._GetAutoObject(A.Device.Helper
).DR())return;}this.Ap.UT(this.Ap.GF+1);if(this.Ap.Z5()<this.Ap.GD)this.Ap.Le(this.
Ap.Z5());}break;case 3:{if(this.Aub){var AV8=A._NewObject(A.Core.Bp,0);AV8.Initialize(
this.Ap.JN());AV8.Year+=1;if(AV8.JN()>A._GetAutoObject(A.Device.Helper).DR())return;
}if(this.Ap.Year>=2100)return;this.Ap.Year=this.Ap.Year+1;}break;default:;}this.
XE(((B=(this.Ap.JN()|0))<0)?B+0x100000000:B);if(this.G_!==BR){if(!!this.D6)(F=this.
D6,F[2].call(F[0],this.G_));A.aat(this.D6,0);}},Agk:function(H){var B;var F;var BR=
this.G_;if(this.A3===1)this.Ap.Le(this.Ap.GD-1);if(this.A3===2){this.Ap.UT(this.
Ap.GF-1);if(this.Ap.Z5()<this.Ap.GD)this.Ap.Le(this.Ap.Z5());}if(this.A3===3){if(
this.Ap.Year<=2000)return;this.Ap.Year=this.Ap.Year-1;}this.XE(((B=(this.Ap.JN()|
0))<0)?B+0x100000000:B);if(this.G_!==BR){if(!!this.D6)(F=this.D6,F[2].call(F[0],
this.G_));A.aat(this.D6,0);}},DD:function(H){var F;if(!this.N)return;switch(this.
A3){case 1:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[
0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[
0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=
null;(F=this.N,F[1].call(F[0])).De(A.zW(A.abi.Acs));(F=this.N,F[1].call(F[0])).Cd(
A.jm);(F=this.N,F[1].call(F[0])).Cm=[this,this.TC];}break;case 2:{(F=this.N,F[1].
call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1
].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(A.zW(A.abi.AkR));(
F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=[this,this.Agj];(
F=this.N,F[1].call(F[0])).De(A.zW(A.abi.Acs));(F=this.N,F[1].call(F[0])).Cd(A.jm
);(F=this.N,F[1].call(F[0])).Cm=[this,this.TC];}break;case 3:{(F=this.N,F[1].call(
F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(
F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(A.zW(A.abi.AkR));(F=this.
N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=[this,this.Agj];(F=this.
N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd(A.jm);(F=this.N,F[1].call(
F[0])).Cm=null;}break;default:this.Fa.AiD((F=this.N,F[1].call(F[0])));}},AOJ:function(
E){if(this.Aub===E)return;this.Aub=E;},GC:function(H){this.Ed(1);},Gy:function(H
){this.Ed(0);},Ed:function(EI){var F;if(!this.A3)this.Fa.Ahn((F=this.N,F[1].call(
F[0])));this.A3=EI;this.BcB=true;if((this.A3<0)||(this.A3>3))this.A3=0;this.DD(this
);this.FQ.Bw=!!this.A3;this.FP.Bw=!!this.A3;this.Al();},Agj:function(H){if(this.
A3>1)this.Ed(this.A3-1);},_Init:function(aArg){C.Da._Init.call(this,aArg);A.Core.
Bp._Init.call(this.Ap={I:this},0);A.Core.B1._Init.call(this.IY={I:this},0);A.abh.
AH._Init.call(this.Hc={I:this},0);A.abh.Text._Init.call(this.Q2={I:this},0);A.abh.
Text._Init.call(this.Zp={I:this},0);A.abh.Text._Init.call(this.SV={I:this},0);A.
abh.Text._Init.call(this.Ab9={I:this},0);A.abh.Text._Init.call(this.RN={I:this},
0);A.Core.B1._Init.call(this.FQ={I:this},0);A.Core.B1._Init.call(this.FP={I:this
},0);this.__proto__=C.AlH;this.G(Yk);this.T.R(AuK);this.GU.W(false);this.Hv.W(false
);this.IY.Filter=1;this.Hc.G(AuL);this.Hc.L(0x55FFFFFF);this.Q2.G(AuM);this.Q2.I0(
true);this.Q2.A0(0x14);this.Zp.G(AuN);this.Zp.I0(true);this.Zp.A0(0x14);this.Zp.
R(AiY);this.SV.G(AuO);this.SV.I0(true);this.Ab9.G(AuP);this.Ab9.I0(true);this.Ab9.
R(AiY);this.RN.G(AdI);this.RN.I0(true);this.RN.A0(0x11);this.FQ.Filter=4;this.FQ.
Bw=false;this.FP.Filter=5;this.FP.Bw=false;this.J(this.Hc,0);this.J(this.Q2,0);this.
J(this.Zp,0);this.J(this.SV,0);this.J(this.Ab9,0);this.J(this.RN,0);this.IY.B2=[
this,this.AjU];this.Q2.Y(A.zW(A.eV.Gk));this.Zp.Y(A.zW(A.eV.Gk));this.SV.Y(A.zW(
A.eV.Gk));this.Ab9.Y(A.zW(A.eV.Gk));this.RN.Y(A.zW(A.eV.Gk));this.FQ.B2=[this,this.
AjV];this.FQ.Ea=[this,this.Agy];this.FP.B2=[this,this.AjT];this.FP.Ea=[this,this.
Agk];this.Fa=A._NewObject(C.Aci,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Da;this.Ap._Done();this.IY._Done();this.Hc._Done();this.Q2._Done();this.Zp._Done(
);this.SV._Done();this.Ab9._Done();this.RN._Done();this.FQ._Done();this.FP._Done(
);C.Da._Done.call(this);},_ReInit:function(){C.Da._ReInit.call(this);this.Ap._ReInit(
);this.IY._ReInit();this.Hc._ReInit();this.Q2._ReInit();this.Zp._ReInit();this.SV.
_ReInit();this.Ab9._ReInit();this.RN._ReInit();this.FQ._ReInit();this.FP._ReInit(
);},_Mark:function(D){var B;C.Da._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.D6)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ap)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Hc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Ab9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemDate"
};C.NZ={LanguageToString:null,Init:function(aArg){var B;A.za([this,this.A9e],[B=
A._GetAutoObject(A.Device.Device),B.A2I,B.A6I],0);A.ow([this,this.A9e],this);},Dx:
function(){return 16;},GS:function(aIndex){return this.LanguageToString.Cb(this.
Dd(aIndex));},AD:function(E){C.Dm.AD.call(this,E);A._GetAutoObject(A.Device.Device
).Aln(E);},A9e:function(H){this.Q=A._GetAutoObject(A.Device.Device).Language;A.aat([
this,this.CA,this.CC],0);},_Init:function(aArg){C.Dm._Init.call(this,aArg);A.Device.
LanguageToString._Init.call(this.LanguageToString={I:this},0);this.__proto__=C.NZ;
this.Cj.Set(0,0);this.Cj.Set(1,1);this.Cj.Set(2,5);this.Cj.Set(3,3);this.Cj.Set(
4,8);this.Cj.Set(5,9);this.Cj.Set(6,7);this.Cj.Set(7,6);this.Cj.Set(8,10);this.Cj.
Set(9,2);this.Cj.Set(10,11);this.Cj.Set(11,12);this.Cj.Set(12,13);this.Cj.Set(13
,14);this.Cj.Set(14,15);this.Cj.Set(15,16);this.Init(aArg);},_Done:function(){this.
__proto__=C.Dm;this.LanguageToString._Done();C.Dm._Done.call(this);},_ReInit:function(
){C.Dm._ReInit.call(this);this.LanguageToString._ReInit();},_Mark:function(D){var
B;C.Dm._Mark.call(this,D);if((B=this.LanguageToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::Languages"};C.P$={TemperatureUnitToString:null,Dx:
function(){return 2;},Dd:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;
},GS:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.TemperatureUnitToString.
Cb(aIndex);},DX:function(A2){return A2;},HP:function(){return 1;},AD:function(E){
C.AC.AD.call(this,E);A._GetAutoObject(A.Device.Device).AtU(E);},Init:function(aArg
){var B;A.za([this,this.A$z],[B=A._GetAutoObject(A.Device.Device),B.AoK,B.Aqk],0
);A.ow([this,this.A$z],this);},A$z:function(H){this.Q=A._GetAutoObject(A.Device.
Device).TemperatureUnit;A.aat([this,this.CA,this.CC],0);},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.TemperatureUnitToString._Init.call(this.TemperatureUnitToString={
I:this},0);this.__proto__=C.P$;this.Init(aArg);},_Done:function(){this.__proto__=
C.AC;this.TemperatureUnitToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.TemperatureUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.TemperatureUnitToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::TemperatureUnits"};C.AP$={Ahl:null,
Adw:null,KM:null,AQ:null,A4:null,Bh:function(aSize){C.A$.Bh.call(this,aSize);this.
Background.G(A.aaQ(this.Background.M,((aSize[0]*60)/100)|0));this.T.G(A.aaQ(this.
T.M,((aSize[0]*30)/100)|0));this.AQ.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);
this.KM.G([this.T.M[2],0,this.Background.M[2],aSize[1]]);this.A4.G([this.Background.
M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.Ahl.G([this.Background.M[2],0,aSize[
0],aSize[1]]);this.Adw.G(this.Ahl.M);},Ah:function(Ae){C.A$.Ah.call(this,Ae);this.
KM.L(this.T.AM);},Init:function(aArg){},B8:function(Z){if(!this.AZ)return;this.Ho=
Z;if(!!this.AZ){var Ajq=this.AZ.Ht(Z,6);var Anl=this.AZ.Cq(Z,7);var Aq$=this.AZ.
ID(Z,9);this.U(A._GetAutoObject(A.abk.K5).AKk(Ajq));this.KM.R(A._GetAutoObject(A.
abk.K5).A0P(Ajq));this.Adw.R(A._GetAutoObject(A.Device.Converter).AiN(Anl));this.
Adw.L(A._GetAutoObject(A.abk.Assessment).VN(Aq$));this.Ahl.L(A._GetAutoObject(A.
abk.Assessment).Pq(Aq$));this.Al();}},_Init:function(aArg){C.A$._Init.call(this,
aArg);A.abh.AH._Init.call(this.Ahl={I:this},0);A.abh.Text._Init.call(this.Adw={I:
this},0);A.abh.Text._Init.call(this.KM={I:this},0);A.abh.AH._Init.call(this.AQ={
I:this},0);A.abh.AH._Init.call(this.A4={I:this},0);this.__proto__=C.AP$;this.T.G(
AdJ);this.Adw.L(A.iF.Text);this.KM.R(Kd);this.KM.L(A.iF.Text);this.AQ.L(A.iF.A7);
this.A4.G(AuQ);this.A4.L(A.iF.A7);this.J(this.Ahl,0);this.J(this.Adw,0);this.J(this.
KM,0);this.J(this.AQ,0);this.J(this.A4,0);this.Adw.Y(A.zW(A.eV.Au));this.KM.Y(A.
zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ahl._Done(
);this.Adw._Done();this.KM._Done();this.AQ._Done();this.A4._Done();C.A$._Done.call(
this);},_ReInit:function(){C.A$._ReInit.call(this);this.Ahl._ReInit();this.Adw._ReInit(
);this.KM._ReInit();this.AQ._ReInit();this.A4._ReInit();},_Mark:function(D){var B;
C.A$._Mark.call(this,D);if((B=this.Ahl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Adw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KM)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::TemperatureListItem"};C.Fu={AZ:null,AV:null
,CH:null,Av:null,Adj:null,Q4:null,J7:A.jm,KD:null,AQs:true,GH:function(H){var B;
var Fy=this.Av.IE;var Ab=(C.A$.isPrototypeOf(B=this.Av.B5)?B:null);if(!Ab)return;
Ab.XF(this.AZ);Ab.B8(Fy);Ab.AV=this.AV;Ab.G(A.aaN(Ab.M,[(B=this.Av.M)[2]-B[0],this.
Av.Gn]));},Ne:function(E){if(E===this.KD)return;this.KD=E;this.Av.Ne(E);},XF:function(
E){if(this.AZ===E)return;if(!!this.AZ)A.zl([this,this.B8],this.AZ,0);this.AZ=E;if(
!!E)A.y_([this,this.B8],E,0);A.ow([this,this.B8],this);},B8:function(H){if(this.
AQs===false)return;if(!!this.AZ){this.Av.I1(this.AZ.Cf());this.Av.ZL(0,this.Av.AN-
1);}else this.Av.I1(0);if((this.Av.AN>0)&&(this.FJ()<0))this.Gp(0);if(this.FJ()>=
this.Av.AN){this.Gp(0);this.Av.Go(0);}if(this.Av.AN<=0){this.Q4.W(true);this.Gp(-
1);}else{this.Q4.W(false);this.Aya(null,null);}},FZ:function(H){var B;this.Adj.N2(
this.Av.Gn*this.Av.AN);this.Adj.N6((B=this.Av.M)[3]-B[1]);this.Adj.N4(-this.Av.Br
);},DW:function(H){if(this.Av.AN>0){switch(this.CH.CO){case 4:if(this.FJ()>0)this.
Gp(this.FJ()-1);break;case 5:if(this.FJ()<(this.Av.AN-1))this.Gp(this.FJ()+1);break;
default:this.CH.PF=true;}this.Av.IB(this.FJ(),true,null,null);}else if((this.CH.
CO!==4)&&(this.CH.CO!==5))this.CH.PF=true;},XG:function(E){if(A.z$(this.AV,E))return;
this.AV=E;this.Av.ZL(0,this.Av.AN);},Gp:function(E){this.Av.Gp(E);this.Av.IB(E,true
,null,null);},FJ:function(){return this.Av.FM;},Et:function(E){if(this.J7===E)return;
this.J7=E;this.Q4.R(E);},Aya:function(AaT,EJ){this.Av.Aya(AaT,EJ);},AO0:function(
E){if(this.AQs===E)return;this.AQs=E;if(E)A.ow([this,this.B8],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.B1._Init.call(this.CH={I:this},0);A.
Core.Cv._Init.call(this.Av={I:this},0);C.AE._Init.call(this.Adj={I:this},0);A.abh.
Text._Init.call(this.Q4={I:this},0);this.__proto__=C.Fu;this.G(Vt);this.KD=C.A$;
this.CH.Filter=147;this.Av.AW(0x3F);this.Av.G(Vt);this.Av.Ac0(40);this.Adj.AW(0x3A
);this.Adj.G(AiZ);this.Q4.AW(0x3F);this.Q4.G(AuR);this.Q4.HV(10);this.Q4.KH(true
);this.Q4.A0(0xA);this.Q4.L(A.iF.Text);this.J(this.Av,0);this.J(this.Adj,0);this.
J(this.Q4,0);this.CH.B2=[this,this.DW];this.CH.Ea=[this,this.DW];this.Av.Eu=[this
,this.FZ];this.Av.GH=[this,this.GH];this.Q4.Y(A.zW(A.eV.Au));},_Done:function(){
this.__proto__=A.Core.O;this.CH._Done();this.Av._Done();this.Adj._Done();this.Q4.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.CH._ReInit();this.Av._ReInit();this.Adj._ReInit();this.Q4._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AZ)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Adj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q4)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::VertScrollList"};C.A$={AZ:null,Ho:-1,C6:function(){
this.B8(this.Ho);},Ah:function(Ae){var B;C.B_.Ah.call(this,Ae);if(!((Ae&0x20)===
0x20)){if((this.Ho%2)===1)this.Background.L(A.iF.CE);else this.Background.L(A.iF.
CR);}},XF:function(E){if(this.AZ===E)return;this.AZ=E;},B8:function(Z){A.aa8("%s"
,AuS);},_Init:function(aArg){C.B_._Init.call(this,aArg);this.__proto__=C.A$;},_ReInit:
function(){C.B_._ReInit.call(this);this.C6();},_Mark:function(D){var B;C.B_._Mark.
call(this,D);if((B=this.AZ)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::ListItem"
};C.Gi={Bg:null,E2:null,DO:null,D3:null,Uj:null,Jf:null,J7:A.jm,Adk:false,Init:function(
aArg){var B;A.za([this,this.AXt],[B=A._GetAutoObject(A.Device.Device),B.AAN,B.AEP
],0);A.za([this,this.AXt],[B=A._GetAutoObject(A.Device.Device),B.A2n,B.A6v],0);A.
y_([this,this.Ad$],A._GetAutoObject(A.Device.Device).Aq,0);A.y_([this,this.AaC],
A._GetAutoObject(A.Device.Device).Aq,0);A.za([this,this.BtF],[B=A._GetAutoObject(
A.Device.Helper),B.Tq,B.Tr],0);A.ow([this,this.AaC],this);A.ow([this,this.A61],this
);A.ow([this,this.Auj],this);},XB:function(H){this.Aey();if(!A._GetAutoObject(A.
Device.Device).Jf){this.AY5(A.z2(A.abg.BcR),[this,this.BdF],1);this.AY5(A.z2(A.abg.
Bh6),[this,this.BdE],0);A._GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).V5(A.
z2(A.abg.Bcr));A._GetAutoObject(C.Cz).IT();}var P;for(P=this.Jf.Dx()-1;P>=0;P=P-
1)switch(this.Jf.Dd(P)){case 0:this.Aex(A.z2(A.abg.AbK),[this,this.AO1],0);break;
case 1:this.Aex(A.z2(A.abg.Temperature),[this,this.AO3],1);break;case 2:this.Aex(
A.z2(A.abg.Rating),[this,this.AO2],2);break;case 3:this.Aex(A.z2(A.abg.AfZ),[this
,this.AO4],3);break;default:A.aa8("%s",AuT);}A._GetAutoObject(C.Cz).IT();A._GetAutoObject(
C.Cz).V5(A.z2(A.abg.A0i));A._GetAutoObject(A.Device.Device).Co(6);},Bo5:function(
s){this.XB(s);},DW:function(H){var DI=(A.Core.B1.isPrototypeOf(H)?H:null);var Ad4=
this.Jf.DX(A._GetAutoObject(A.Device.Device).Jf);if(this.Adk)return;switch(DI.CO
){case 6:{Ad4=Ad4-1;if(Ad4<0)Ad4=this.Jf.Dx()-1;A._GetAutoObject(A.Device.Device
).Z6(this.Jf.Dd(Ad4));}break;case 7:{Ad4=Ad4+1;if(Ad4>=this.Jf.Dx())Ad4=0;A._GetAutoObject(
A.Device.Device).Z6(this.Jf.Dd(Ad4));}break;default:DI.PF=true;}},CF:function(H){
if(this.DO.AwE()){this.DO.Aa3();if(this.DO.AwE()===false)this.Bg.AO0(true);return;
}else if(this.Adk)this.AYb(this);if(!!this.Bg)this.Bg.AO0(true);},Fc:function(H){
if(!!this.Bg)this.Bg.AO0(false);},Auj:function(H){var B;if(!!this.Bg)this.HA(this.
Bg);this.Bg=A._NewObject(C.AIk,0);this.Bg.G(Al1);this.Bg.XF(A._GetAutoObject(A.Device.
Device).Aq);this.Bg.XG([this,this.AE0]);if(!!this.E2)this.Bg.A3o([B=this.E2,B.A2U
,B.A39]);this.AYp(this);this.J(this.Bg,0);if(this.Adk===false)this.A8(this.Bg);this.
AXt(this);this.Bh4(this);},A3k:function(H){A._GetAutoObject(A.Device.Device).Co(
0);this.Dw(C.WN);this.D$.AV=[this,this.AE0];this.AHj(this);this.D$.An(true);this.
A8(this.D$);this.Adk=true;},BdP:function(H){var B;A._GetAutoObject(A.Device.Device
).Co(0);if(!this.Bg)return;var Ab=(C.AyA.isPrototypeOf(B=this.Bg.Av.Bce(this.Bg.
Av.FM))?B:null);if(!!Ab)A._GetAutoObject(A.Device.Helper).HU(Ab.Ho);else A._GetAutoObject(
A.Device.Helper).V.G1();this.Aeg();},Aq5:function(H){var F;if(!this.D3)this.A0j(
this);else switch((F=this.D3,F[1].call(F[0]))){case 0:this.A0j(this);break;case 1:
this.Bbc(this);break;case 9:this.Bbd(this);break;case 4:this.A0l(this);break;case
6:this.A0n(this);break;case 8:this.AJE(this);break;case 2:this.A0r(this);break;case
3:this.Bbe(this);break;case 7:this.Bbf(this);break;case 5:this.Bbg(this);break;case
10:this.Bbh(this);break;case 11:this.A0k(this);break;case 12:this.A0q(this);break;
case 13:this.A0s(this);break;case 14:this.A0m(this);break;case 15:this.A0o(this);
break;case 16:this.A0t(this);break;case 17:this.A0p(this);break;default:A.aa8("%s%e"
,AuU,(F=this.D3,F[1].call(F[0])));}},AE0:function(s){this.Aq5(s);},BeY:function(
H){var B;this.Dw(C.JK);this.D$.AV=null;this.Adk=false;this.AaC(this);var Filter;
var FilterCriterion;if(!!A._GetAutoObject(A.Device.Device).Aq.Filter){Filter=A._GetAutoObject(
A.Device.Device).Aq.Filter.F$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(
B=Filter.DJ(1,4))?B:null);if(!!FilterCriterion)Filter.P7(FilterCriterion);A._GetAutoObject(
A.Device.Device).Aq.Bo(Filter);}this.N.SE.DF(255);this.N.SF.DF(255);this.A8(this.
Bg);this.D$.An(false);},Alb:function(H){A._GetAutoObject(C.A1).Fm();},Et:function(
E){if(this.J7===E)return;this.J7=E;this.AYp(this);},Ack:function(){switch(A._GetAutoObject(
A.Device.Device).Jf){case 0:return this.Bad(A._GetAutoObject(A.Device.Device).Akm
);case 8:case 9:case 10:return C.Zc;case 2:return C.AIV;case 1:return C.AIW;case
3:return C.AIY;case 4:return C.Zc;case 5:return C.Zc;case 6:return C.Zc;case 7:return C.
Ayz;case 11:return C.AyB;default:throw new Error(Ap1);}},Acl:function(){switch(A.
_GetAutoObject(A.Device.Device).Jf){case 0:return this.Bae(A._GetAutoObject(A.Device.
Device).Akm);case 8:case 9:case 10:return C.Acp;case 2:return C.AzK;case 1:return C.
ALh;case 3:return C.ALj;case 4:return C.AzI;case 5:return C.Acp;case 6:return C.
Acp;case 7:return C.AzJ;case 11:return C.AzL;default:throw new Error(Ap1);}},AXt:
function(H){if(!!this.Bg){this.Bg.Ne(this.Ack());this.Bh_(this);}},Bh_:function(
H){var B;if(!!this.E2)this.HA(this.E2);this.E2=(C.DQ.isPrototypeOf(B=A._NewObject(
this.Acl(),0))?B:null);this.E2.G(Ke);if(!!this.Bg)this.Bg.A3o([B=this.E2,B.A2U,B.
A39]);this.J(this.E2,0);},BdL:function(H){this.Rz(this);A._GetAutoObject(A.Device.
Device).Co(0);},AO1:function(H){A._GetAutoObject(A.Device.Device).Co(0);A._GetAutoObject(
A.Device.Device).Z6(0);},AO3:function(H){A._GetAutoObject(A.Device.Device).Co(0);
A._GetAutoObject(A.Device.Device).Z6(1);},AO2:function(H){A._GetAutoObject(A.Device.
Device).Co(0);A._GetAutoObject(A.Device.Device).Z6(2);},AO4:function(H){A._GetAutoObject(
A.Device.Device).Co(0);A._GetAutoObject(A.Device.Device).Z6(3);},Rz:function(H){
A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).LP());
},A61:function(s){this.Rz(s);},HY:function(H){if(this.Adk){this.AHj(this);return;
}this.N.C$(A.zW(A.abi.ET));this.N.Cn(A.zW(A.abi.Az6));this.N.De(A.zW(A.abi.Options
));this.N.CB=[this,this.Alb];this.N.Ch=[this,this.A3k];this.N.Cm=[this,this.Bo5];
this.N.GZ(A.jm);this.N.Ft(A.jm);this.N.Cd(A.jm);if(!A._GetAutoObject(A.Device.Device
).Aq.Cf()){this.N.Jk.DF(100);this.N.Ch=null;}else this.N.Jk.DF(255);},AU2:function(
s){this.HY(s);},Aex:function(Tt,Tu,AFt){if(A._GetAutoObject(A.Device.Device).Jf===
AFt)A._GetAutoObject(C.Cz).Ag$(Tt,Tu,true);else A._GetAutoObject(C.Cz).Ag$(Tt,Tu
,false);},Ad$:function(H){this.AYp(this);if(this.Adk)A.ow([this,this.AHj],this);
},Aeg:function(){A._GetAutoObject(C.A1).BY(9);},AYp:function(H){if(!this.Bg)return;
if(!A._GetAutoObject(A.Device.Device).Aq.PG()||!A._GetAutoObject(A.Device.Device
).Aq.Filter)this.Bg.Et(A.z2(A.abg.AAE));else if(A._GetAutoObject(A.Device.Helper
).Aoq(A._GetAutoObject(A.Device.Device).Aq.Filter))this.Bg.Et(this.J7);else if(!
A._GetAutoObject(A.Device.Device).Aq.Filter.DJ(1,4)){if(A._GetAutoObject(A.Device.
Helper).Azo(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)this.Bg.Et(A.z2(A.abg.
AJQ));else this.Bg.Et(A.z2(A.abg.AJP));}else this.Bg.Et(A.z2(A.abg.AND));},Aig:function(
H){var F;A._GetAutoObject(A.Device.Device).Co(0);if(!!this.D3)(F=this.D3,F[2].call(
F[0],0));},Afw:function(E){if(A.z_(this.D3,E))return;if(!!this.D3)A.zn([this,this.
AU$],this.D3,0);this.D3=E;if(!!E)A.za([this,this.AU$],this.D3,0);if(!!E)A.ow([this
,this.AU$],this);},AoR:function(H){var F;A._GetAutoObject(A.Device.Device).Co(0);
if(!!this.D3)(F=this.D3,F[2].call(F[0],1));},Aio:function(H){var F;A._GetAutoObject(
A.Device.Device).Co(0);if(!!this.D3)(F=this.D3,F[2].call(F[0],2));},Ao_:function(
H){var F;A._GetAutoObject(A.Device.Device).Co(0);if(!!this.D3)(F=this.D3,F[2].call(
F[0],3));},AOW:function(H){var F;A._GetAutoObject(A.Device.Device).Co(0);if(!!this.
D3)(F=this.D3,F[2].call(F[0],7));},AOX:function(H){var F;A._GetAutoObject(A.Device.
Device).Co(0);if(!!this.D3)(F=this.D3,F[2].call(F[0],5));},A0r:function(H){if(!this.
Bg)return;if(this.NX()){A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());this.
DO.R3(1);}},D0:function(Tt,Tu,Amr){var F;if(!!this.D3&&((F=this.D3,F[1].call(F[0
]))===Amr))A._GetAutoObject(C.Cz).Ag$(Tt,Tu,true);else A._GetAutoObject(C.Cz).Ag$(
Tt,Tu,false);},Be7:function(H){var F;A._GetAutoObject(A.Device.Device).Co(0);if(
!!this.D3)(F=this.D3,F[2].call(F[0],4));},A0l:function(H){if(!this.Bg)return;if(
this.NX()){A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());this.DO.Bt5();}},Be8:
function(H){var F;A._GetAutoObject(A.Device.Device).Co(0);if(!!this.D3)(F=this.D3
,F[2].call(F[0],6));},A0n:function(H){if(!this.Bg)return;if(this.NX()){A._GetAutoObject(
A.Device.Helper).HU(this.Bg.FJ());this.DO.Bt6();}},AJE:function(H){if(!this.Bg)return;
if(this.NX()){A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());this.DO.R3(1024
);}},AOB:function(H){var F;A._GetAutoObject(A.Device.Device).Co(0);if(!!this.D3)(
F=this.D3,F[2].call(F[0],8));},Z7:function(H){var F;A._GetAutoObject(A.Device.Device
).Co(0);if(!!this.D3)(F=this.D3,F[2].call(F[0],9));},Bbe:function(H){if(!this.Bg
)return;if(this.NX()){A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());this.DO.
R3(2);}},A0j:function(H){if(!this.Bg)return;if(this.NX()){A._GetAutoObject(A.Device.
Helper).HU(this.Bg.FJ());if(A._GetAutoObject(A.Device.Helper).AhU(A._GetAutoObject(
A.Device.Helper).V.WhereAbouts))A._GetAutoObject(A.Device.Device).A_(66,true,A.jm
,0,null);else this.Aef();}},Bbc:function(H){if(!this.Bg)return;if(this.NX()){A._GetAutoObject(
A.Device.Helper).HU(this.Bg.FJ());this.DO.R3(16);}},Aef:function(){A._GetAutoObject(
C.A1).BY(36);},Bbf:function(H){if(!this.Bg)return;if(this.NX()){A._GetAutoObject(
A.Device.Helper).HU(this.Bg.FJ());this.DO.R3(4);}},Bbg:function(H){if(!this.Bg)return;
if(this.NX()){A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());this.DO.R3(8);}
},Bbd:function(H){var B;if(!this.Bg)return;if(this.NX()){A._GetAutoObject(A.Device.
Helper).HU(this.Bg.FJ());if(this.Adk){A.za([this,this.Aw2],[B=this.DO,B.Alg,B.I2
],0);this.AYb(this);}this.DO.Aa3();}},AY2:function(Tt,Tu,Bq1){if(Bq1)A._GetAutoObject(
C.Cz).AY3(Tt,Tu,true);else A._GetAutoObject(C.Cz).AY3(Tt,Tu,false);},AHj:function(
H){this.N.GZ(A.jm);this.N.Cd(A.jm);this.N.C$(A.zW(A.abi.Acr));this.N.CB=[this,this.
BeY];this.N.SE.DF(100);this.N.SF.DF(100);var FW=A._GetAutoObject(A.Device.Device
).Aq.Cf();if(FW<=0){this.N.Cn(null);this.N.De(null);this.N.Ch=null;this.N.Cm=null;
this.N.XQ=false;this.N.XR=false;}else if(FW===1){this.N.Cn(null);this.N.De(A.zW(
A.abi.Acs));this.N.Ch=null;this.N.Cm=[this,this.AE0];this.N.XQ=false;this.N.XR=false;
}else{this.N.Cn(A.zW(A.abi.AsD));this.N.De(A.zW(A.abi.AsJ));this.N.Ch=[this,this.
AXQ];this.N.Cm=[this,this.AXR];this.N.XQ=true;this.N.XR=true;}},AXQ:function(H){
if(!this.Bg)return;if(this.Bg.FJ()<(A._GetAutoObject(A.Device.Device).Aq.Cf()-1)
)this.Bg.Gp(this.Bg.FJ()+1);},AXR:function(H){if(!this.Bg)return;if(this.Bg.FJ()>
0)this.Bg.Gp(this.Bg.FJ()-1);},Bh4:function(H){if(A._GetAutoObject(A.Device.Helper
).V.Id>0){var A5=A._GetAutoObject(A.Device.Device).Aq.LM(0,A._GetAutoObject(A.Device.
Helper).V.Id);if(A5>=0){this.Bg.Gp(A5);A.aa8("%s",AQV);}}},NX:function(){return this.
Bg.FJ()>=0;},Ah6:function(){return A._GetAutoObject(A.Device.Device).Aq.Cf()>5;}
,Aey:function(){this.A$5();A._GetAutoObject(C.Cz).Aew(A.z2(A.abg.APE),[this,this.
A3k]);A._GetAutoObject(C.Cz).IT();},AaC:function(H){if(this.Adk)this.AHj(this);else
this.HY(this);},AYb:function(H){var aFilter=A._GetAutoObject(A.Device.Device).Aq.
Filter.F$();var AvL=aFilter.DJ(1,4);if(!!AvL){aFilter.P7(AvL);A._GetAutoObject(A.
Device.Device).Aq.Bo(aFilter);if(!!this.Bg)this.Bg.Gp(0);}},Aw2:function(H){var B;
if(!this.DO.Gr&&this.Adk){A.zn([this,this.Aw2],[B=this.DO,B.Alg,B.I2],0);this.AYb(
this);}},BgU:function(H){var F;A._GetAutoObject(A.Device.Device).Co(0);if(!!this.
D3)(F=this.D3,F[2].call(F[0],10));},Bbh:function(H){if(!this.Bg)return;if(this.NX(
)){A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());this.DO.R3(256);}},AXH:function(
H){A.ow([this,this.AU2],this);},AU$:function(s){this.AXH(s);},Be5:function(H){var
F;A._GetAutoObject(A.Device.Device).Co(0);if(!!this.D3)(F=this.D3,F[2].call(F[0]
,11));},A0k:function(H){if(!this.Bg)return;if(this.NX()){A._GetAutoObject(A.Device.
Helper).HU(this.Bg.FJ());this.DO.R3(4096);}},A0q:function(H){if(!this.Bg)return;
if(this.NX()){A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());this.DO.R3(16384
);}},Bgo:function(H){var F;A._GetAutoObject(A.Device.Device).Co(0);if(!!this.D3)(
F=this.D3,F[2].call(F[0],12));},A0s:function(H){if(!this.Bg)return;if(this.NX()){
A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());this.BtT();}},BgD:function(H){
var F;A._GetAutoObject(A.Device.Device).Co(0);if(!!this.D3)(F=this.D3,F[2].call(
F[0],13));},BtT:function(){A._GetAutoObject(C.A1).AfA(86);},A0m:function(H){if(!
this.Bg)return;if(this.NX()){A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());
this.DO.R3(32768);}},A0o:function(H){if(!this.Bg)return;if(this.NX()){A._GetAutoObject(
A.Device.Helper).HU(this.Bg.FJ());this.DO.R3(65536);}},A0t:function(H){if(!this.
Bg)return;if(this.NX()){A._GetAutoObject(A.Device.Helper).HU(this.Bg.FJ());this.
DO.R3(131072);}},BgH:function(H){var F;A._GetAutoObject(A.Device.Device).Co(0);if(
!!this.D3)(F=this.D3,F[2].call(F[0],16));},A$5:function(){if(!A._GetAutoObject(A.
Device.Device).Aq.Filter||A._GetAutoObject(A.Device.Helper).Aoq(A._GetAutoObject(
A.Device.Device).Aq.Filter))A._GetAutoObject(C.Cz).Ag_(A.z2(A.abg.AyF));else A._GetAutoObject(
C.Cz).Aew(A.z2(A.abg.AyF),[this,this.BdL]);A._GetAutoObject(C.Cz).Aew(A.z2(A.abg.
AiG),[this,this.BdP]);A._GetAutoObject(C.Cz).IT();},Bae:function(Amc){switch(Amc
){case 0:return C.Acp;case 1:return C.ALf;default:throw new Error(Ap2+Amc.toFixed(
));}},Bad:function(Amc){switch(Amc){case 0:return C.Zc;case 1:return C.AIT;default:
throw new Error(Ap2+Amc.toFixed());}},BdE:function(H){A._GetAutoObject(A.Device.
Device).Co(0);A._GetAutoObject(A.Device.Device).AoS(0);},BdF:function(H){A._GetAutoObject(
A.Device.Device).Co(0);A._GetAutoObject(A.Device.Device).AoS(1);},AY5:function(Tt
,Tu,Amc){if(A._GetAutoObject(A.Device.Device).Akm===Amc)A._GetAutoObject(C.Cz).Ag$(
Tt,Tu,true);else A._GetAutoObject(C.Cz).Ag$(Tt,Tu,false);},Bfo:function(H){var F;
A._GetAutoObject(A.Device.Device).Co(0);if(!!this.D3)(F=this.D3,F[2].call(F[0],17
));},A0p:function(H){if(!this.Bg)return;if(this.NX()){A._GetAutoObject(A.Device.
Helper).HU(this.Bg.FJ());this.DO.R3(128);}},BtF:function(H){var B;if(!this.Bg)return;
A.ow([B=this.Bg,B.B8],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);C.
AzK._Init.call(this.Uj={I:this},0);C.Jf._Init.call(this.Jf={I:this},0);this.__proto__=
C.Gi;this.Background.G(B4);this.N.W(true);this.N.O4(true);this.N.O5(true);this.D$.
A3K(A.iF.CR);this.D$.A3L(A.iF.Text);this.Dw(C.JK);this.Uj.G(Ke);this.J7=A.z2(A.abg.
AAE);this.J(this.Uj,0);this.DO=A._GetAutoObject(C.DO);this.Init(aArg);},_Done:function(
){this.__proto__=C.Aw;this.Uj._Done();this.Jf._Done();C.Aw._Done.call(this);},_ReInit:
function(){C.Aw._ReInit.call(this);this.Uj._ReInit();this.Jf._ReInit();this.Et(A.
z2(A.abg.AAE));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.Bg)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.E2)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.DO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.D3)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Uj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Jf)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalListScreen"};
C.AyA={AQ:null,A4:null,U6:null,Adu:null,Init:function(aArg){},Bh:function(aSize){
C.A$.Bh.call(this,aSize);this.T.G(A.aaQ(this.T.M,((aSize[0]*40)/100)|0));this.AQ.
G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.U6.G([this.T.M[2],0,((aSize[0]*
80)/100)|0,aSize[1]]);this.A4.G([this.U6.M[2]-1,0,this.U6.M[2]+1,aSize[1]]);this.
Adu.G([this.U6.M[2],0,aSize[0],aSize[1]]);},Ah:function(Ae){C.A$.Ah.call(this,Ae
);this.U6.L(this.T.AM);this.Adu.L(this.T.AM);},B8:function(Z){if(!this.AZ)return;
this.Ho=Z;if(!!this.AZ){this.U(this.AZ.Cq(Z,1).toFixed());this.U6.R(this.AZ.Cq(Z
,2).toFixed());this.Adu.R(this.AZ.Cq(Z,3).toFixed());this.Al();}},_Init:function(
aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.AQ={I:this},0);A.abh.AH.
_Init.call(this.A4={I:this},0);A.abh.Text._Init.call(this.U6={I:this},0);A.abh.Text.
_Init.call(this.Adu={I:this},0);this.__proto__=C.AyA;this.AQ.L(A.iF.A7);this.A4.
L(A.iF.A7);this.U6.L(A.iF.Text);this.Adu.L(A.iF.Text);this.J(this.AQ,0);this.J(this.
A4,0);this.J(this.U6,0);this.J(this.Adu,0);this.U6.Y(A.zW(A.eV.Au));this.Adu.Y(A.
zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.AQ._Done(
);this.A4._Done();this.U6._Done();this.Adu._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AQ._ReInit();this.A4._ReInit();this.U6._ReInit(
);this.Adu._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.
AQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.U6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adu)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListItem"};C.Ab1={NT:null,RC:null,LI:null,Init:
function(aArg){var B;A.za([this,this.AXw],[B=A._GetAutoObject(A.Device.Device),B.
As4,B.Avq],0);A.za([this,this.Abp],[B=A._GetAutoObject(A.Device.Device),B.As2,B.
Avp],0);A.ow([this,this.Abp],this);},Ah:function(Ae){C.Aw.Ah.call(this,Ae);this.
RC.R(A._GetAutoObject(A.Device.Device).Y_.toFixed()+AaO);this.NT.W(A._GetAutoObject(
A.Device.Device).Akt);},Abp:function(H){this.Al();},Me:function(H){A._GetAutoObject(
C.A1).Fm();},AXw:function(H){if(A._GetAutoObject(A.Device.Device).Akt===false){this.
NT.W(false);A._GetAutoObject(C.A1).Fm();}else this.NT.W(true);},_Init:function(aArg
){C.Aw._Init.call(this,aArg);A.abh.Text._Init.call(this.NT={I:this},0);A.abh.Text.
_Init.call(this.RC={I:this},0);C.LI._Init.call(this.LI={I:this},0);this.__proto__=
C.Ab1;var B;this.Background.L(A.iF.CR);this.N.W(true);this.N.Cd(A.z2(A.abg.Ok));
this.NT.G(ADt);this.NT.R(A.z2(A.abg.NT));this.NT.L(A.iF.Text);this.NT.W(false);this.
RC.G(ADu);this.RC.R(ADv);this.RC.L(A.iF.Text);this.LI.G(ADw);this.J(this.NT,0);this.
J(this.RC,0);this.J(this.LI,0);this.N.Cm=[this,this.Me];this.NT.Y(A.zW(A.eV.Au));
this.RC.Y(A.zW(A.eV.Au));this.LI.AD([B=A._GetAutoObject(A.Device.Device),B.As2,B.
Avp]);this.LI.A3Z([B=A._GetAutoObject(A.Device.Device),B.As4,B.Avq]);this.Init(aArg
);},_Done:function(){this.__proto__=C.Aw;this.NT._Done();this.RC._Done();this.LI.
_Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.
NT._ReInit();this.RC._ReInit();this.LI._ReInit();this.N.Cd(A.z2(A.abg.Ok));this.
NT.R(A.z2(A.abg.NT));this.NT.Y(A.zW(A.eV.Au));this.RC.Y(A.zW(A.eV.Au));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.NT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LI)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ChargeScreen"};C.LI={AbV:null,AbW:null,Oq:function(
H){var F;if(!!this.Q){this.AWI();var Aa6=(F=this.Q,F[1].call(F[0]));if(Aa6>20)this.
NQ.L(A.iF.E1);else this.NQ.L(A.iF.F0);this.NQ.L((this.NQ.AM&0x00FFFFFF)|(this.Ajz(
Aa6,0,20)<<24));this.Sn.L((this.Sn.AM&0x00FFFFFF)|(this.Ajz(Aa6,21,40)<<24));this.
So.L((this.So.AM&0x00FFFFFF)|(this.Ajz(Aa6,41,60)<<24));this.AbV.L((this.AbV.AM&
0x00FFFFFF)|(this.Ajz(Aa6,61,80)<<24));this.AbW.L((this.AbW.AM&0x00FFFFFF)|(this.
Ajz(Aa6,81,100)<<24));}},AWI:function(){var F;if(!!this.Q){if((F=this.Q,F[1].call(
F[0]))>80)this.Tw=this.AbW;else if((F=this.Q,F[1].call(F[0]))>60)this.Tw=this.AbV;
else if((F=this.Q,F[1].call(F[0]))>40)this.Tw=this.So;else if((F=this.Q,F[1].call(
F[0]))>20)this.Tw=this.Sn;else this.Tw=this.NQ;}else this.Tw=null;},_Init:function(
aArg){C.NR._Init.call(this,aArg);A.abh.AH._Init.call(this.AbV={I:this},0);A.abh.
AH._Init.call(this.AbW={I:this},0);this.__proto__=C.LI;this.G(AuV);this.M2.G(AuV
);this.NQ.G(ADx);this.Sn.G(AQW);this.So.G(AQX);this.AbV.G(AQY);this.AbV.L(A.iF.E1
);this.AbW.G(AQZ);this.AbW.L(A.iF.E1);this.J(this.AbV,0);this.J(this.AbW,0);this.
M2.At(A.zW(A.abi.AIF));},_Done:function(){this.__proto__=C.NR;this.AbV._Done();this.
AbW._Done();C.NR._Done.call(this);},_ReInit:function(){C.NR._ReInit.call(this);this.
AbV._ReInit();this.AbW._ReInit();},_Mark:function(D){var B;C.NR._Mark.call(this,
D);if((B=this.AbV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::BatteryIndicatorBig"};C.AP6={Nl:null,KJ:null
,AiS:null,X8:null,X7:null,C6:function(){this.Al();},Init:function(aArg){var B;A.
za([this,this.Ane],[B=A._GetAutoObject(A.Device.Device),B.AOa,B.AUY],0);A.za([this
,this.Ane],[B=A._GetAutoObject(A.Device.Device),B.AOc,B.AUZ],0);A.za([this,this.
Ane],[B=A._GetAutoObject(A.Device.Device),B.A25,B.A6R],0);A.ow([this,this.Ane],this
);},Ah:function(Ae){C.Aw.Ah.call(this,Ae);this.Ix(this);this.AxZ(this);this.BuP(
this);this.DD(this);},Btj:function(H){A._GetAutoObject(A.Device.Device).ApJ();},
Ane:function(H){this.Al();},Ix:function(H){switch(A._GetAutoObject(A.Device.Device
).SyncState){case 0:case 1:case 2:case 3:case 5:case 6:case 7:this.X8.W(false);break;
case 4:{var AX7;if(!A._GetAutoObject(A.Device.Device).Adx)AX7=0;else AX7=((A._GetAutoObject(
A.Device.Device).Auw*100)/A._GetAutoObject(A.Device.Device).Adx)|0;this.X8.Bu(AX7
);this.X8.W(true);}break;default:A.aa8("%s%e",Ap3,A._GetAutoObject(A.Device.Device
).SyncState);}},BuP:function(H){switch(A._GetAutoObject(A.Device.Device).SyncState
){case 0:case 1:case 2:case 3:case 4:case 5:case 6:{this.Background.L(A.iF.CE);this.
KJ.L(A.iF.Text);this.Nl.L(A.iF.Text);}break;case 7:{this.Background.L(A.iF.F0);this.
KJ.L(A.iF.Be);this.Nl.L(A.iF.Be);}break;default:A.aa8("%s%e",Ap3,A._GetAutoObject(
A.Device.Device).SyncState);}},DD:function(H){switch(A._GetAutoObject(A.Device.Device
).SyncState){case 1:case 2:case 3:case 4:case 5:case 0:case 6:{this.N.C$(null);this.
N.CB=null;this.N.Cd(A.jm);this.N.Cm=null;}break;case 7:{this.N.C$(null);this.N.CB=
null;this.N.Cd(A.z2(A.abg.Ok));this.N.Cm=[this,this.Btj];}break;default:A.aa8("%s%e"
,Ap3,A._GetAutoObject(A.Device.Device).SyncState);}},AxZ:function(H){switch(A._GetAutoObject(
A.Device.Device).SyncState){case 0:case 6:this.KJ.R(A.z2(A.abg.BiN));break;case 1:
this.KJ.R(A.z2(A.abg.BiK));break;case 2:this.KJ.R(A.z2(A.abg.BiH));break;case 3:
this.KJ.R(A.z2(A.abg.BiL));break;case 4:this.KJ.R((A.z2(A.abg.BiJ)+AuW)+A._GetAutoObject(
A.Device.Helper).Nk(A._GetAutoObject(A.Device.Helper).Nk(A.z2(A.abg.Bhw),Qj,A._GetAutoObject(
A.Device.Device).Auw.toFixed()),AuX,A._GetAutoObject(A.Device.Device).Adx.toFixed(
)));break;case 5:this.KJ.R(A.z2(A.abg.BiM));break;case 7:this.KJ.R(A.z2(A.abg.BiI
));break;default:A.aa8("%s%e",Ap3,A._GetAutoObject(A.Device.Device).SyncState);}
},_Init:function(aArg){C.Aw._Init.call(this,aArg);C.CG._Init.call(this.Nl={I:this
},0);C.CG._Init.call(this.KJ={I:this},0);A.abh.Am._Init.call(this.AiS={I:this},0
);A.abr.AzN._Init.call(this.X8={I:this},0);A.abr.AzO._Init.call(this.X7={I:this}
,0);this.__proto__=C.AP6;this.N.W(true);this.Nl.G(AQ0);this.Nl.R(A.z2(A.abg.Nl));
this.KJ.AW(0x3F);this.KJ.G(AQ1);this.KJ.A0(0x12);this.AiS.G(AQ2);this.AiS.L(A.iF.
A6);this.X8.G(AQ3);this.X8.An(false);this.X8.Bu(0);this.X7.BgO(0);this.X7.A4l(0);
this.X7.A4j(A.iF.A6);this.X7.A4i(0);this.X7.AB_(ADy);this.J(this.Nl,0);this.J(this.
KJ,0);this.J(this.AiS,0);this.J(this.X8,0);this.Nl.Y(A.zW(A.eV.Gk));this.Nl.By(A.
zW(A.eV.Au));this.Nl.C5(A.zW(A.eV.Az));this.KJ.Y(A.zW(A.eV.Au));this.KJ.By(A.zW(
A.eV.Az));this.KJ.C5(A.zW(A.eV.Cr));this.AiS.At(A.zW(A.abi.AMt));this.X8.OnSetAppearance(
this.X7);this.X7.A4k(A.zW(A.abi.M5));this.X7.A4h(A.zW(A.abi.M5));this.Init(aArg);
},_Done:function(){this.__proto__=C.Aw;this.Nl._Done();this.KJ._Done();this.AiS.
_Done();this.X8._Done();this.X7._Done();C.Aw._Done.call(this);},_ReInit:function(
){C.Aw._ReInit.call(this);this.Nl._ReInit();this.KJ._ReInit();this.AiS._ReInit();
this.X8._ReInit();this.X7._ReInit();this.Nl.R(A.z2(A.abg.Nl));this.Nl.Y(A.zW(A.eV.
Gk));this.Nl.By(A.zW(A.eV.Au));this.Nl.C5(A.zW(A.eV.Az));this.KJ.Y(A.zW(A.eV.Au)
);this.KJ.By(A.zW(A.eV.Az));this.KJ.C5(A.zW(A.eV.Cr));this.C6();},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Nl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.KJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AiS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X7)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SyncScreen"};C.Aoc={_Init:function(aArg){
C.AzF._Init.call(this,aArg);this.__proto__=C.Aoc;this.A3N(false);},_className:"Application::HeaderScannedAnimalId"
};C.Gender={Animal:null,GenderToString:null,Cj:A.aan(3,0,{0:2,2:1}),Dx:function(
){return 3;},Dd:function(aIndex){if(aIndex>=3)return-1;return this.Cj.Get(aIndex
);},GS:function(aIndex){return this.GenderToString.Cb(this.Dd(aIndex));},DX:function(
A2){var P=0;while(P<3){if(this.Cj.Get(P)===A2)return P;P=P+1;}return-1;},HP:function(
){var P=0;var max=-1;while(P<3){if(this.Cj.Get(P)>max)max=this.Cj.Get(P);P=P+1;}
return max;},AD:function(E){C.AC.AD.call(this,E);if(!!this.Animal)this.Animal.J9(
E);},N1:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.zn([this,
this.Ad8],[B=this.Animal,B.XA,B.J9],0);this.Animal=E;if(!!this.Animal)A.za([this
,this.Ad8],[B=this.Animal,B.XA,B.J9],0);A.ow([this,this.Ad8],this);},Ad8:function(
H){if(!!this.Animal)this.Q=this.Animal.Gender;else this.Q=2;A.aat([this,this.CA,
this.CC],0);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.GenderToString.
_Init.call(this.GenderToString={I:this},0);(this.Cj=[]).__proto__=C.Gender.Cj;this.
__proto__=C.Gender;},_Done:function(){this.__proto__=C.AC;this.GenderToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.GenderToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.GenderToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::Gender"};C.BirthType={Animal:null,BirthTypeToString:
null,Cj:A.aan(4,0,{1:1,2:2,3:3}),Dx:function(){return 4;},Dd:function(aIndex){if(
aIndex>=4)return-1;return this.Cj.Get(aIndex);},GS:function(aIndex){return this.
BirthTypeToString.Cb(this.Dd(aIndex));},DX:function(A2){var P=0;while(P<4){if(this.
Cj.Get(P)===A2)return P;P=P+1;}return-1;},HP:function(){var P=0;var max=-1;while(
P<4){if(this.Cj.Get(P)>max)max=this.Cj.Get(P);P=P+1;}return max;},AD:function(E){
C.AC.AD.call(this,E);if(!!this.Animal)this.Animal.Aih(E);},AV1:function(H){if(!!
this.Animal)this.Q=this.Animal.BirthType;else this.Q=0;A.aat([this,this.CA,this.
CC],0);},N1:function(E){var B;if(this.Animal===E)return;if(!!this.Animal)A.zn([this
,this.AV1],[B=this.Animal,B.ANR,B.Aih],0);this.Animal=E;if(!!this.Animal)A.za([this
,this.AV1],[B=this.Animal,B.ANR,B.Aih],0);A.ow([this,this.AV1],this);},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.BirthTypeToString._Init.call(this.BirthTypeToString={
I:this},0);(this.Cj=[]).__proto__=C.BirthType.Cj;this.__proto__=C.BirthType;},_Done:
function(){this.__proto__=C.AC;this.BirthTypeToString._Done();C.AC._Done.call(this
);},_ReInit:function(){C.AC._ReInit.call(this);this.BirthTypeToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BirthTypeToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::BirthType"};C.AnimalType={Animal:null,Aas:null,Dx:
function(){return A._GetAutoObject(A.Device.Helper).AbQ.L0;},Dd:function(aIndex){
if(aIndex>=A._GetAutoObject(A.Device.Helper).AbQ.L0)return-1;return A._GetAutoObject(
A.Device.Helper).AbQ.Get(aIndex);},GS:function(aIndex){return this.Aas.Cb(this.Dd(
aIndex));},DX:function(A2){var P=0;while(P<A._GetAutoObject(A.Device.Helper).AbQ.
L0){if(A._GetAutoObject(A.Device.Helper).AbQ.Get(P)===A2)return P;P=P+1;}return-
1;},HP:function(){var P=0;var max=-1;while(P<A._GetAutoObject(A.Device.Helper).S$.
L0){if(A._GetAutoObject(A.Device.Helper).S$.Get(P)>max)max=A._GetAutoObject(A.Device.
Helper).S$.Get(P);P=P+1;}return max;},AD:function(E){C.AC.AD.call(this,E);if(!!this.
Animal)this.Animal.DS(E);},AVS:function(H){if(!!this.Animal)this.Q=this.Animal.AnimalType;
else this.Q=0;A.aat([this,this.CA,this.CC],0);},N1:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.zn([this,this.AVS],[B=this.Animal,B.O1,B.DS],0);this.
Animal=E;if(!!this.Animal)A.za([this,this.AVS],[B=this.Animal,B.O1,B.DS],0);A.ow([
this,this.AVS],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
AnimalTypeToString._Init.call(this.Aas={I:this},0);this.__proto__=C.AnimalType;}
,_Done:function(){this.__proto__=C.AC;this.Aas._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.Aas._ReInit();},_Mark:function(D){var B;
C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Aas)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalType"
};C.APN={Init:function(aArg){var B;A.ow([this,this.AdQ],this);A.za([this,this.AdQ
],[B=A._GetAutoObject(A.Device.Device),B.AoK,B.Aqk],0);},AYc:function(H){A._GetAutoObject(
A.Device.Device).A_(38,true,A.jm,0,[this,this.A66]);},AXP:function(H){var B;var Ar=(
A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).Apv(this);},AWg:function(H){var F;if(this.A3===1){var BR=this.DM;
this.DM=this.DM-10;if(this.DM<this.AjH)this.DM=this.AjH;if(this.DM<A._GetAutoObject(
A.Device.Device).X_)this.DM=A._GetAutoObject(A.Device.Device).X_;if(this.DC!==BR
){if(!!this.Jp)(F=this.Jp,F[2].call(F[0],this.DM));A.aat(this.Jp,0);}}if(this.A3===
2){var BR=this.DC;this.DC=this.DC-10;if(this.DC<this.DM)this.DC=this.DM;if(this.
DC!==BR){if(!!this.Jo)(F=this.Jo,F[2].call(F[0],this.DC));A.aat(this.Jo,0);}}this.
DD(this);this.Al();},AWS:function(H){var F;if(this.A3===1){var BR=this.DM;this.DM=
this.DM+10;if(this.DM>this.DC)this.DM=this.DC;if(this.DM!==BR){if(!!this.Jp)(F=this.
Jp,F[2].call(F[0],this.DM));A.aat(this.Jp,0);}}if(this.A3===2){var BR=this.DC;this.
DC=this.DC+10;if(this.DC>this.AjC)this.DC=this.AjC;if(this.DC!==BR){if(!!this.Jo
)(F=this.Jo,F[2].call(F[0],this.DC));A.aat(this.Jo,0);}}this.DD(this);this.Al();
},Ix:function(H){this.PU.R(ADz+A._GetAutoObject(A.Device.Converter).AiN(this.DM)
);this.PV.R(ADz+A._GetAutoObject(A.Device.Converter).AiN(this.DC));this.SM.R(A._GetAutoObject(
A.abk.Temperature).AjA());},AWK:function(Aqq){if(Aqq===1)return this.PU;else if(
Aqq===2)return this.PV;else return null;},_Init:function(aArg){C.Adm._Init.call(
this,aArg);this.__proto__=C.APN;this.AjC=5000;this.AjH=3000;this.U(A.z2(A.abg.AAw
));this.Background.G(AdK);this.T.G(BI);this.T.R(A.z2(A.abg.A5h));this.T.A0(0x12);
this.Init(aArg);},_className:"Application::SettingsItemThresholdsTemp"};C.Eg={Background:
null,_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.
Background={I:this},0);this.__proto__=C.Eg;this.G(BI);this.Background.G(BI);this.
Background.L(A.iF.CE);this.J(this.Background,0);},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();A.Core.O._Done.call(this);},_ReInit:function(){
A.Core.O._ReInit.call(this);this.Background._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::ListHeadline"};C.Rating={AV:null,Ze:null,Zi:null,Zg:null
,Background:null,Zd:null,Zh:null,Zf:null,Ahq:null,AoE:null,T_:null,AY:0,Bs0:function(
H){if(this.Ahq.CO===6){if(this.AY===1)this.Alt(2);else if(this.AY===2)this.Alt(3
);else this.Alt(1);}else if(this.Ahq.CO===7){if(this.AY===3)this.Alt(2);else if(
this.AY===2)this.Alt(1);else this.Alt(3);}},Alt:function(E){if(this.AY===E)return;
this.AY=E;switch(this.AY){case 3:this.Background.G(this.Zd.M);break;case 2:this.
Background.G(this.Zh.M);break;case 1:this.Background.G(this.Zf.M);break;default:
this.Background.G(Al2);}},JE:function(H){var B;if(!!this.AV)(B=this.AV)?B[1].call(
B[0],this):null;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.GK._Init.
call(this.Ze={I:this},0);A.abh.GK._Init.call(this.Zi={I:this},0);A.abh.GK._Init.
call(this.Zg={I:this},0);A.abh.Am._Init.call(this.Background={I:this},0);A.abh.Ace.
_Init.call(this.Zd={I:this},0);A.abh.Ace._Init.call(this.Zh={I:this},0);A.abh.Ace.
_Init.call(this.Zf={I:this},0);A.Core.B1._Init.call(this.Ahq={I:this},0);A.Core.
B1._Init.call(this.AoE={I:this},0);A.Graphics.AIx._Init.call(this.T_={I:this},0);
this.__proto__=C.Rating;this.G(AQ4);this.Ze.G(ADA);this.Ze.L(A.iF.Text);this.Ze.
Alr(Ai0);this.Ze.N7(3);this.Ze.W(true);this.Zi.G(ADB);this.Zi.L(A.iF.Text);this.
Zi.Alr(Ai0);this.Zi.N7(3);this.Zi.W(true);this.Zg.G(ADC);this.Zg.L(A.iF.Text);this.
Zg.Alr(Ai0);this.Zg.N7(3);this.Zg.W(true);this.Background.G(Al2);this.Background.
L(A.iF.A6);this.Zd.G(ADA);this.Zd.L(A.iF.E1);this.Zd.Alr(Ai0);this.Zd.W(true);this.
Zh.G(ADB);this.Zh.L(A.iF.HB);this.Zh.Alr(Ai0);this.Zh.W(true);this.Zf.G(ADC);this.
Zf.L(A.iF.F0);this.Zf.Alr(Ai0);this.Zf.W(true);this.Ahq.Filter=147;this.AoE.Filter=
1;this.T_.Bft(360);this.T_.BgC(22);this.T_.BgN(2);this.J(this.Ze,0);this.J(this.
Zi,0);this.J(this.Zg,0);this.J(this.Background,0);this.J(this.Zd,0);this.J(this.
Zh,0);this.J(this.Zf,0);this.Ze.XH(this.T_);this.Zi.XH(this.T_);this.Zg.XH(this.
T_);this.Background.At(A.zW(A.abi.M4));this.Zd.XH(this.T_);this.Zh.XH(this.T_);this.
Zf.XH(this.T_);this.Ahq.B2=[this,this.Bs0];this.AoE.B2=[this,this.JE];},_Done:function(
){this.__proto__=A.Core.O;this.Ze._Done();this.Zi._Done();this.Zg._Done();this.Background.
_Done();this.Zd._Done();this.Zh._Done();this.Zf._Done();this.Ahq._Done();this.AoE.
_Done();this.T_._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Ze._ReInit();this.Zi._ReInit();this.Zg._ReInit();this.Background.
_ReInit();this.Zd._ReInit();this.Zh._ReInit();this.Zf._ReInit();this.Ahq._ReInit(
);this.AoE._ReInit();this.T_._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.AV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Ze)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Zd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zh)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Zf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahq
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AoE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.T_)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Rating"};C.Apx={
Ah8:null,Apk:null,Background:null,Uf:null,Ua:null,AcQ:null,AcP:null,AcO:null,Adq:
null,Adp:null,Ado:null,Ade:null,Add:null,AcI:null,AcH:null,Ac8:null,Ac7:null,AnR:
null,Init:function(aArg){},Bc$:function(H){this.AcQ.R(ADD);this.AcP.R(A.jm);this.
AcO.R(A.jm);this.Adq.R(AQ5);this.Adp.R(A.jm);this.Ado.R(A.jm);this.Ade.R(A.jm);this.
Add.R(A.jm);this.AcI.R(A.jm);this.AcH.R(A.jm);this.Ac8.R(A.jm);this.Ac7.R(A.jm);
},Bhd:function(H){this.Ua.W(true);this.Uf.W(true);var H7=this.HQ();if(!H7)return;
this.Uf.R(H7.GetFPS().toFixed()+AQ6);this.Ua.R(AQ7);this.Ua.L(0xFFFFFFFF);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Timer._Init.call(this.Ah8={
I:this},0);A.Core.Timer._Init.call(this.Apk={I:this},0);A.abh.AH._Init.call(this.
Background={I:this},0);A.abh.Text._Init.call(this.Uf={I:this},0);A.abh.Text._Init.
call(this.Ua={I:this},0);A.abh.Text._Init.call(this.AcQ={I:this},0);A.abh.Text._Init.
call(this.AcP={I:this},0);A.abh.Text._Init.call(this.AcO={I:this},0);A.abh.Text.
_Init.call(this.Adq={I:this},0);A.abh.Text._Init.call(this.Adp={I:this},0);A.abh.
Text._Init.call(this.Ado={I:this},0);A.abh.Text._Init.call(this.Ade={I:this},0);
A.abh.Text._Init.call(this.Add={I:this},0);A.abh.Text._Init.call(this.AcI={I:this
},0);A.abh.Text._Init.call(this.AcH={I:this},0);A.abh.Text._Init.call(this.Ac8={
I:this},0);A.abh.Text._Init.call(this.Ac7={I:this},0);A.abh.AH._Init.call(this.AnR={
I:this},0);this.__proto__=C.Apx;this.G(AdL);this.An(false);this.Ah8.P4(2000);this.
Ah8.UR(1);this.Ah8.An(true);this.Apk.An(true);this.Background.AW(0x3F);this.Background.
G(AdL);this.Background.L(0x78000000);this.Uf.G(ADE);this.Uf.A0(0x14);this.Uf.R(A.
jm);this.Uf.L(0xFFFFFC00);this.Uf.W(false);this.Ua.G(Ap4);this.Ua.A0(0x11);this.
Ua.R(A.jm);this.Ua.W(false);this.AcQ.G(ADF);this.AcQ.A0(0x11);this.AcQ.R(A.jm);this.
AcP.G(ADG);this.AcP.A0(0x11);this.AcP.R(A.jm);this.AcO.G(AuY);this.AcO.A0(0x14);
this.AcO.R(A.jm);this.Adq.G(ADH);this.Adq.A0(0x11);this.Adq.R(A.jm);this.Adp.G(AuZ
);this.Adp.A0(0x11);this.Adp.R(A.jm);this.Ado.G(AQ8);this.Ado.A0(0x14);this.Ado.
R(A.jm);this.Ade.G(AQ9);this.Ade.A0(0x11);this.Ade.R(A.jm);this.Add.G(AQ_);this.
Add.A0(0x14);this.Add.R(A.jm);this.AcI.G(AQ$);this.AcI.A0(0x11);this.AcI.R(A.jm);
this.AcH.G(ARa);this.AcH.A0(0x14);this.AcH.R(A.jm);this.Ac8.G(ARb);this.Ac8.A0(0x11
);this.Ac8.R(A.jm);this.Ac7.G(Oh);this.Ac7.A0(0x14);this.Ac7.R(A.jm);this.AnR.G(
Au0);this.J(this.Background,0);this.J(this.Uf,0);this.J(this.Ua,0);this.J(this.AcQ
,0);this.J(this.AcP,0);this.J(this.AcO,0);this.J(this.Adq,0);this.J(this.Adp,0);
this.J(this.Ado,0);this.J(this.Ade,0);this.J(this.Add,0);this.J(this.AcI,0);this.
J(this.AcH,0);this.J(this.Ac8,0);this.J(this.Ac7,0);this.J(this.AnR,0);this.Ah8.
Mz=[this,this.Bc$];this.Apk.Mz=[this,this.Bhd];this.Uf.Y(A.zW(A.eV.Az));this.Ua.
Y(A.zW(A.eV.Az));this.AcQ.Y(A.zW(A.eV.Az));this.AcP.Y(A.zW(A.eV.Az));this.AcO.Y(
A.zW(A.eV.Az));this.Adq.Y(A.zW(A.eV.Az));this.Adp.Y(A.zW(A.eV.Az));this.Ado.Y(A.
zW(A.eV.Az));this.Ade.Y(A.zW(A.eV.Az));this.Add.Y(A.zW(A.eV.Az));this.AcI.Y(A.zW(
A.eV.Az));this.AcH.Y(A.zW(A.eV.Az));this.Ac8.Y(A.zW(A.eV.Az));this.Ac7.Y(A.zW(A.
eV.Az));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Ah8._Done(
);this.Apk._Done();this.Background._Done();this.Uf._Done();this.Ua._Done();this.
AcQ._Done();this.AcP._Done();this.AcO._Done();this.Adq._Done();this.Adp._Done();
this.Ado._Done();this.Ade._Done();this.Add._Done();this.AcI._Done();this.AcH._Done(
);this.Ac8._Done();this.Ac7._Done();this.AnR._Done();A.Core.O._Done.call(this);}
,_ReInit:function(){A.Core.O._ReInit.call(this);this.Ah8._ReInit();this.Apk._ReInit(
);this.Background._ReInit();this.Uf._ReInit();this.Ua._ReInit();this.AcQ._ReInit(
);this.AcP._ReInit();this.AcO._ReInit();this.Adq._ReInit();this.Adp._ReInit();this.
Ado._ReInit();this.Ade._ReInit();this.Add._ReInit();this.AcI._ReInit();this.AcH.
_ReInit();this.Ac8._ReInit();this.Ac7._ReInit();this.AnR._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ah8)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Apk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Background)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Uf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ua
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcO)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Adq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adp)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ado)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ade)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Add)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AcI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcH)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Ac8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac7)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AnR)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ResourceMonitor"
};C.ACM={Fa:null,D6:null,Ap:null,IY:null,Hc:null,UO:null,A7:null,SA:null,FQ:null
,FP:null,G_:0,A3:0,BcF:false,Init:function(aArg){},Ah:function(Ae){C.Da.Ah.call(
this,Ae);this.GU.W(false);this.Hv.W(false);if(!!this.D6){this.SA.R(this.Ap.Format(
ARc));this.UO.R(this.Ap.Format(ARd));}if(this.A3===1){this.Hc.W(true);this.Hc.G(
this.SA.M);this.Hc.L(A.iF.Be);this.SA.L(this.Background.AM);this.UO.L(A.iF.Be);}
else if(this.A3===2){this.Hc.W(true);this.Hc.G(this.UO.M);this.Hc.L(A.iF.Be);this.
SA.L(A.iF.Be);this.UO.L(this.Background.AM);}else{this.Hc.W(false);this.SA.L(this.
T.AM);this.A7.L(this.T.AM);this.UO.L(this.T.AM);}},Ps:function(H){if(this.E9===1
)A.ow([this,this.TC],this);else if(this.E9===4)A.ow([this,this.Agy],this);else if(
this.E9===5)A.ow([this,this.Agk],this);C.Da.Ps.call(this,H);},JB:function(H){switch(
this.A3){case 0:C.Da.JB.call(this,H);break;case 2:break;default:this.AjU(this);}
},Jw:function(H){switch(this.A3){case 0:C.Da.Jw.call(this,H);break;default:this.
Agj(this);}},Abq:function(H){var F;if(!!this.D6)this.XE((F=this.D6,F[1].call(F[0
])));},Ac2:function(E){if(A.z_(this.D6,E))return;if(!!this.D6)A.zn([this,this.Abq
],this.D6,0);this.D6=E;if(!!E)A.za([this,this.Abq],E,0);if(!!E)A.ow([this,this.Abq
],this);},XE:function(E){if(this.G_===E)return;this.G_=E;this.Ap.Initialize(this.
G_);this.Al();},AjU:function(H){this.E9=1;this.Al();if(this.Bi.Bw){A.ow([this,this.
TC],this);this.Bi.An(false);}this.Bi.An(true);},TC:function(H){this.Ed(this.A3+1
);},AjV:function(H){this.E9=4;this.Al();if(this.Bi.Bw){A.ow([this,this.Agy],this
);this.Bi.An(false);}this.Bi.An(true);},AjT:function(H){this.E9=5;this.Al();if(this.
Bi.Bw){A.ow([this,this.Agk],this);this.Bi.An(false);}this.Bi.An(true);},Agy:function(
H){var B;var F;var BR=this.G_;if(this.A3===1)this.Ap.All(this.Ap.AhJ+1);if(this.
A3===2)this.Ap.Alp(this.Ap.AsX+1);this.Ap.Als(0);this.XE(((B=(this.Ap.JN()|0))<0
)?B+0x100000000:B);if(this.G_!==BR){if(!!this.D6)(F=this.D6,F[2].call(F[0],this.
G_));A.aat(this.D6,0);}},Agk:function(H){var B;var F;var BR=this.G_;if(this.A3===
1)this.Ap.All(this.Ap.AhJ-1);if(this.A3===2)this.Ap.Alp(this.Ap.AsX-1);this.Ap.Als(
0);this.XE(((B=(this.Ap.JN()|0))<0)?B+0x100000000:B);if(this.G_!==BR){if(!!this.
D6)(F=this.D6,F[2].call(F[0],this.G_));A.aat(this.D6,0);}},DD:function(H){var F;
if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.
ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.
Gy];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.
N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(A.zW(A.abi.Acs));(F=this.
N,F[1].call(F[0])).Cd(A.jm);(F=this.N,F[1].call(F[0])).Cm=[this,this.TC];}break;
case 2:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).
GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).
Cn(A.zW(A.abi.AkR));(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0]
)).Ch=[this,this.Agj];(F=this.N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[
0])).Cd(A.jm);(F=this.N,F[1].call(F[0])).Cm=null;}break;default:this.Fa.AiD((F=this.
N,F[1].call(F[0])));}},GC:function(H){this.Ed(1);},Gy:function(H){this.Ed(0);},Ed:
function(EI){var F;if(!this.A3)this.Fa.Ahn((F=this.N,F[1].call(F[0])));this.A3=EI;
this.BcF=true;if((this.A3<0)||(this.A3>2))this.A3=0;this.DD(this);this.FQ.Bw=!!this.
A3;this.FP.Bw=!!this.A3;this.Al();},Agj:function(H){if(this.A3>1)this.Ed(this.A3-
1);},_Init:function(aArg){C.Da._Init.call(this,aArg);A.Core.Bp._Init.call(this.Ap={
I:this},0);A.Core.B1._Init.call(this.IY={I:this},0);A.abh.AH._Init.call(this.Hc={
I:this},0);A.abh.Text._Init.call(this.UO={I:this},0);A.abh.Text._Init.call(this.
A7={I:this},0);A.abh.Text._Init.call(this.SA={I:this},0);A.Core.B1._Init.call(this.
FQ={I:this},0);A.Core.B1._Init.call(this.FP={I:this},0);this.__proto__=C.ACM;this.
G(Yk);this.T.R(ARe);this.T.L(A.iF.Be);this.GU.W(false);this.Hv.W(false);this.IY.
Filter=1;this.Hc.G(ARf);this.Hc.L(0x55FFFFFF);this.UO.G(ARg);this.UO.I0(true);this.
A7.G(ARh);this.A7.A0(0x14);this.A7.R(Ap5);this.SA.G(Au1);this.SA.I0(true);this.SA.
A0(0x14);this.FQ.Filter=4;this.FQ.Bw=false;this.FP.Filter=5;this.FP.Bw=false;this.
J(this.Hc,0);this.J(this.UO,0);this.J(this.A7,0);this.J(this.SA,0);this.IY.B2=[this
,this.AjU];this.UO.Y(A.zW(A.eV.Gk));this.A7.Y(A.zW(A.eV.Gk));this.SA.Y(A.zW(A.eV.
Gk));this.FQ.B2=[this,this.AjV];this.FQ.Ea=[this,this.Agy];this.FP.B2=[this,this.
AjT];this.FP.Ea=[this,this.Agk];this.Fa=A._NewObject(C.Aci,0);this.Init(aArg);},
_Done:function(){this.__proto__=C.Da;this.Ap._Done();this.IY._Done();this.Hc._Done(
);this.UO._Done();this.A7._Done();this.SA._Done();this.FQ._Done();this.FP._Done(
);C.Da._Done.call(this);},_ReInit:function(){C.Da._ReInit.call(this);this.Ap._ReInit(
);this.IY._ReInit();this.Hc._ReInit();this.UO._ReInit();this.A7._ReInit();this.SA.
_ReInit();this.FQ._ReInit();this.FP._ReInit();},_Mark:function(D){var B;C.Da._Mark.
call(this,D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.D6)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ap)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.SA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FQ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FP)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemTime"};C.CG={Cp:null,AkH:null,An7:null,Eu:null,Text:null
,String:A.jm,A80:A.jm,JH:0x12,AG7:0,AM:0xFFFFFFFF,A81:true,Gl:function(Cx){var KX=(
A.Core.AM1.isPrototypeOf(Cx)?Cx:null);if(!!KX)this.Bu2(this);return A.Core.O.Gl.
call(this,Cx);},Bh:function(aSize){A.Core.O.Bh.call(this,aSize);A.ow([this,this.
ArE],this);},Dh:function(aFilter){return A.aam(this.Text.Dh(),this.M.slice(0,2));
},R:function(E){if(this.String===E)return;this.String=E;if(this.A81){this.A80=E;
this.A81=false;}this.AG7=E.length;A.ow([this,this.ArE],this);},Y:function(E){if(
this.Cp===E)return;this.Cp=E;A.ow([this,this.ArE],this);},By:function(E){if(this.
AkH===E)return;this.AkH=E;A.ow([this,this.ArE],this);},C5:function(E){if(this.An7===
E)return;this.An7=E;A.ow([this,this.ArE],this);},A0:function(E){if(E===this.JH)return;
this.JH=E;this.Text.A0(E);},ArE:function(H){var B;var AHb=0;if(!this.AG7){this.Text.
W(false);return;}this.Text.W(true);this.Text.R(this.String);this.Text.KH(false);
if(!!this.Cp){AHb=this.Cp.WM(this.String,0,this.AG7);if(AHb<(((B=this.M)[2]-B[0]
)-(2*this.Text.IH))){this.Text.Y(this.Cp);return;}}this.Text.KH(true);if(!!this.
AkH){AHb=this.AkH.WM(this.String,0,this.AG7);this.Text.Y(this.AkH);if((AHb<(((B=
this.M)[2]-B[0])-(2*this.Text.IH)))&&(((B=this.Text.Dh())[3]-B[1])<=((B=this.M)[
3]-B[1])))return;}if(!!this.An7){this.Text.Y(this.An7);if(((B=this.Text.Dh())[3]-
B[1])>((B=this.M)[3]-B[1]))this.Text.BgF((((this.Text.Cp.Ascent+this.Text.Cp.Descent
)*75)/100)|0);}},L:function(E){if(E===this.AM)return;this.AM=E;this.Text.L(E);},
Bu2:function(H){this.R(this.A80);},Rs:function(E){if(A.z$(this.Eu,E))return;this.
Eu=E;this.Text.Rs(E);},ANQ:function(){return A.aam(this.Text.Dh(),this.M.slice(0
,2));},AlE:function(Ami){return A.aak(this.M.slice(0,2),this.Text.AlE(Ami));},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text._Init.call(this.Text={I:
this},0);this.__proto__=C.CG;this.G(ADI);this.An(false);this.Text.AW(0x3F);this.
Text.G(ADI);this.Text.R(Kd);this.J(this.Text,0);},_Done:function(){this.__proto__=
A.Core.O;this.Text._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Text._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.Cp)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AkH)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.An7)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Eu)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Text)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AutoSizeText"};C.AhI={Ac:null
,Ih:null,AcC:null,M6:null,Mp:null,Acw:null,AcB:null,AcA:null,Acx:null,Acz:null,Acy:
null,Mq:null,M7:null,LS:null,CZ:function(E){C.Ui.CZ.call(this,E);this.Ih.L(E);this.
AcC.L(E);this.M6.L(E);this.Mp.L(E);this.LS.L(E);this.Acw.L(E);this.Mq.L(E);this.
M7.L(E);this.AcB.L(E);this.AcA.L(E);this.Acx.L(E);this.Acz.L(E);this.Acy.L(E);},
EA:function(H){C.Ui.EA.call(this,H);this.V3(8,1,this.Mp);this.V3(12,1,this.LS);this.
V3(11,1,this.Acw);this.V3(7,1,this.Mq);this.V3(14,1,this.M7);this.V3(1,4,this.Ih
);this.V3(1,1,this.AcC);this.V3(4,1,this.M6);this.V3(22,1,this.AcB);this.V3(26,1
,this.AcA);this.V3(30,1,this.Acx);this.V3(19,1,this.Acz);this.V3(31,1,this.Acy);
this.Text.W(!this.Ac.Zw(null,0x1));},V3:function(AFu,En,Ad0){var AxG=false;if(!!
A._GetAutoObject(A.Device.Device).Aq.Filter){var Abc=A._GetAutoObject(A.Device.Device
).Aq.Filter.DJ(AFu,En);if(!!Abc){AxG=true;switch(AFu){case 14:{var Av_=(A.Device.
AnimalTypeFilterCriterion.isPrototypeOf(Abc)?Abc:null);if(!!Av_)Ad0.At(A._GetAutoObject(
A.Device.Converter).AZi(Av_.AY));}break;case 7:{var Av_=(A.Device.GenderFilterCriterion.
isPrototypeOf(Abc)?Abc:null);if(!!Av_)Ad0.At(A._GetAutoObject(A.Device.Converter
).AkK(Av_.AY));}break;case 1:if(En===4)Ad0.At(A.zW(A.abi.Az6));else if(Abc.Operator===
4)AxG=false;break;case 22:switch(Abc.Operator){case 0:case 3:Ad0.At(A.zW(A.abi.AMd
));break;default:Ad0.At(A.zW(A.abi.Aoo));}break;case 26:switch(Abc.Operator){case
0:case 3:Ad0.At(A.zW(A.abi.AMb));break;default:Ad0.At(A.zW(A.abi.AzS));}break;default:;
}}else if((AFu===1)&&(En===4)){AxG=true;Ad0.At(A.zW(A.abi.Act));}}else if((AFu===
1)&&(En===4)){AxG=true;Ad0.At(A.zW(A.abi.Act));}Ad0.W(AxG);},_Init:function(aArg
){C.Ui._Init.call(this,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);A.abh.Am._Init.
call(this.Ih={I:this},0);A.abh.Am._Init.call(this.AcC={I:this},0);A.abh.Am._Init.
call(this.M6={I:this},0);A.abh.Am._Init.call(this.Mp={I:this},0);A.abh.Am._Init.
call(this.Acw={I:this},0);A.abh.Am._Init.call(this.AcB={I:this},0);A.abh.Am._Init.
call(this.AcA={I:this},0);A.abh.Am._Init.call(this.Acx={I:this},0);A.abh.Am._Init.
call(this.Acz={I:this},0);A.abh.Am._Init.call(this.Acy={I:this},0);A.abh.Am._Init.
call(this.Mq={I:this},0);A.abh.Am._Init.call(this.M7={I:this},0);A.abh.Am._Init.
call(this.LS={I:this},0);this.__proto__=C.AhI;this.Ac.AW(0x3F);this.Ac.G(ARi);this.
Ac.Lf(3);this.Ih.G(ADJ);this.AcC.G(ARj);this.AcC.Aj(true);this.M6.G(ARk);this.M6.
Aj(true);this.Mp.G(ARl);this.Mp.Aj(true);this.Acw.G(ARm);this.Acw.Aj(true);this.
AcB.G(ADK);this.AcB.Aj(true);this.AcA.G(ADK);this.AcA.Aj(true);this.Acx.G(ARn);this.
Acx.Aj(true);this.Acz.G(Au2);this.Acz.Aj(true);this.Acy.G(Au2);this.Acy.Aj(true);
this.Mq.G(ADL);this.Mq.Aj(true);this.M7.G(ADM);this.M7.Aj(true);this.Text.R(A.z2(
A.abg.None));this.LS.G(ADL);this.LS.Aj(true);this.Lh(this.SB,-3);this.Lh(this.GI
,-3);this.Lh(this.A4,-3);this.Lh(this.AQ,-2);this.J(this.Ac,-2);this.J(this.Ih,-
2);this.J(this.AcC,-2);this.J(this.M6,-2);this.J(this.Mp,-2);this.J(this.Acw,-2);
this.J(this.AcB,-2);this.J(this.AcA,-2);this.J(this.Acx,-2);this.J(this.Acz,-2);
this.J(this.Acy,-2);this.J(this.Mq,-2);this.J(this.M7,-2);this.J(this.LS,0);this.
Ih.At(A.zW(A.abi.Act));this.AcC.At(A.zW(A.abi.AL4));this.M6.At(A.zW(A.abi.ALu));
this.Mp.At(A.zW(A.abi.Az0));this.Acw.At(A.zW(A.abi.ZH));this.AcB.At(A.zW(A.abi.Aoo
));this.AcA.At(A.zW(A.abi.AzS));this.Acx.At(A.zW(A.abi.AL2));this.Acz.At(A.zW(A.
abi.AL3));this.Acy.At(A.zW(A.abi.AL1));this.Mq.At(A.zW(A.abi.Az2));this.M7.At(A.
zW(A.abi.AsB));this.LS.At(A.zW(A.abi.Az9));},_Done:function(){this.__proto__=C.Ui;
this.Ac._Done();this.Ih._Done();this.AcC._Done();this.M6._Done();this.Mp._Done();
this.Acw._Done();this.AcB._Done();this.AcA._Done();this.Acx._Done();this.Acz._Done(
);this.Acy._Done();this.Mq._Done();this.M7._Done();this.LS._Done();C.Ui._Done.call(
this);},_ReInit:function(){C.Ui._ReInit.call(this);this.Ac._ReInit();this.Ih._ReInit(
);this.AcC._ReInit();this.M6._ReInit();this.Mp._ReInit();this.Acw._ReInit();this.
AcB._ReInit();this.AcA._ReInit();this.Acx._ReInit();this.Acz._ReInit();this.Acy.
_ReInit();this.Mq._ReInit();this.M7._ReInit();this.LS._ReInit();this.Text.R(A.z2(
A.abg.None));},_Mark:function(D){var B;C.Ui._Mark.call(this,D);if((B=this.Ac)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AcC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Mp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acw)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AcB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AcA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Acx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acz
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Acy)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Mq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.LS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilter"
};C.Akl={Hz:null,CF:function(H){if(A._GetAutoObject(A.Device.Device).Bt.Ms())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bt.If().toFixed(),
0,null);this.Hz.GG();this.Hz.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id
);C.P_.CF.call(this,H);},AlQ:function(){C.P_.AlQ.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{this.Background.L(A._GetAutoObject(A.abk.
Temperature).Bsh(A._GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(
A.Device.Device).JT));this.CP.L(A._GetAutoObject(A.abk.Temperature).Bsk(A._GetAutoObject(
A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device).JT));this.Jj.L(A.
_GetAutoObject(A.abk.Temperature).Bsi(A._GetAutoObject(A.Device.Helper).V.AnimalType
,A._GetAutoObject(A.Device.Device).JT));this.G$.L(A._GetAutoObject(A.abk.Temperature
).Bsj(A._GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device
).JT));this.L1.L(this.Jj.AM);this.TemperatureUnit.L(this.Jj.AM);}break;default:;
}},AaC:function(){C.P_.AaC.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:break;case 3:{this.N.Cn(A.zW(A.abi.AMo));this.N.De(A.zW(A.abi.Aom
));}break;case 4:{this.N.Cn(null);this.N.De(A.zW(A.abi.Aol));}break;default:;}},
U2:function(H){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case
1:if((A._GetAutoObject(A.Device.Device).JT>3240)&&(A._GetAutoObject(A.Device.Device
).JT<5460)){A._GetAutoObject(A.Device.Device).AfP();A._GetAutoObject(A.Device.Device
).UpdateMeasureState(3);}break;case 3:{this.Hz.OnSetTemperature(A._GetAutoObject(
A.Device.Device).JT);var Ca=A._GetAutoObject(A.Device.Converter).ApN(A._GetAutoObject(
A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device).JT);this.Hz.OnSetRatingTemperature(
Ca);this.Hz.Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A1).Fm();
}break;case 4:this.AGF(this);break;default:;}},AiI:function(H){C.P_.AiI.call(this
,H);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:break;case
3:A._GetAutoObject(A.Device.Device).Co(9);break;case 4:this.AGF(this);break;default:;
}},AuC:function(){C.P_.AuC.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:break;case 3:this.Jj.R(A._GetAutoObject(A.abk.Temperature).Bsp(A.
_GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device).JT
));break;case 4:break;default:;}},AuD:function(){C.P_.AuD.call(this);switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 3:{A._GetAutoObject(A.Device.Device).Ac3(A._GetAutoObject(
A.abk.Temperature).Bsl(A._GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(
A.Device.Device).JT));this.RF.An(true);}break;case 4:{A._GetAutoObject(A.Device.
Device).Ac3(16711680);this.RF.An(true);}break;default:this.RF.An(false);}},APJ:function(
){this.CP.At(A.zW(A.abi.AsI));this.CP.Ce(A._GetAutoObject(A.abk.Temperature).Bsq(
A._GetAutoObject(A.Device.Helper).V.AnimalType,A._GetAutoObject(A.Device.Device).
JT));this.M4.Ce(0);},_Init:function(aArg){C.P_._Init.call(this,aArg);this.__proto__=
C.Akl;this.Dw(C.Ig);this.Hz=A._NewObject(A.Device.Rating,0);},_Mark:function(D){
var B;C.P_._Mark.call(this,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::AnimalActionTemperatureScreen"};C.AfE={Ni:null,Dn:null
,Ib:null,A7:null,Arv:null,String:A.jm,Aus:A.jm,LX:7,Ah0:2,Ka:0,APT:false,Init:function(
aArg){},Bh:function(aSize){A.Core.O.Bh.call(this,aSize);this.Dn.G([0,0,aSize[0]-
this.Ah0,(aSize[1]/2)|0]);if(aSize[1]<=40)this.Dn.Y(A.zW(A.eV.Cr));else this.Dn.
Y(A.zW(A.eV.Az));this.Ib.Y(this.Dn.Cp);this.Ib.G(this.Dn.M);this.A7.G([].concat([
0,aSize[1]-2],aSize));A.ow([this,this.UV],this);},R:function(E){if(this.String===
E)return;this.String=E;this.Dn.R(E);},Afy:function(E){if(this.Aus===E)return;this.
Aus=E;this.Ib.R(E);},Aac:function(E){this.LX=E;if(E<10)this.AOx(2);else if(E<40)
this.AOx(1);else this.AOx(0);A.ow([this,this.UV],this);},UV:function(H){var B;while(
!!this.A7.Af)this.HA(this.A7.Af);if(this.LX>1){var Aa_=this.AKx();var AWE=this.AKv(
);var AmV=(((B=this.M)[3]-B[1])/2)|0;var x1;var x2;var AwJ;var AG2;var Aq8;var Aj3=
null;if(!!this.Ni&&(this.Ni.AN>0))Aj3=this.Ni.Kh;while((Aa_>=AWE)&&(Aa_>0)){var AqG=
A._NewObject(C.Ahh,0);x1=Math.round(((((B=this.M)[2]-B[0])-this.Ah0)*(((Aa_-AWE)
/86400)|0))/this.LX)|0;x2=Math.round(((((B=this.M)[2]-B[0])-this.Ah0)*((((Aa_-AWE
)/86400)|0)+1))/this.LX)|0;while(!!Aj3&&(Aj3.Timestamp>=Aa_)){if(Aj3.Timestamp<(
Aa_+86400))AqG.NP(Aj3.AY,Aj3.Timestamp);Aj3=Aj3.Af;}var Ari=0;if(AqG.AN>0)Ari=((((((
B=this.M)[3]-B[1])/2)|0)-((B=this.A7.M)[3]-B[1]))/AqG.AN)|0;else if(this.LX<10){
Ari=((((B=this.M)[3]-B[1])/2)|0)-((B=this.A7.M)[3]-B[1]);Aq8=A._NewObject(A.abh.
Text,0);Aq8.G([x1,AmV,x2,AmV+Ari]);Aq8.Y(A.zW(A.eV.Cr));Aq8.L(A.iF.Text);Aq8.R(A.
z2(A.abg.Alz));this.J(Aq8,0);}var AFV=AqG.Kh;var P=0;while(!!AFV){if(P>=AqG.AN)throw new
Error(ARo);AwJ=A._NewObject(A.abh.AH,0);AwJ.L(A._GetAutoObject(A.abk.Assessment).
Pq(AFV.AY));if(P===(AqG.AN-1))AwJ.G([x1,AmV+(P*Ari),x2,this.A7.M[1]]);else AwJ.G([
x1,AmV+(P*Ari),x2,AmV+((P+1)*Ari)]);this.J(AwJ,0);AFV=AFV.Af;P=P+1;}if(this.APT){
var Bq8=A._GetAutoObject(A.Device.Helper).AnL(A._GetAutoObject(A.Device.Helper).
DR());var Bq7=A._GetAutoObject(A.Device.Helper).AnL(Aa_);if(Bq8===Bq7){var AHm=A.
_NewObject(A.abh.Ace,0);AHm.L(A.iF.Text);var A9k=(x1+this.Ah0)+(((x2-x1)/2)|0);AHm.
G([A9k-4,this.A7.M[1]-4,A9k+4,this.A7.M[1]]);AHm.XH(this.Arv);this.J(AHm,0);}}Aa_=
Aa_-86400;if(this.Ah0>0){AG2=A._NewObject(A.abh.AH,0);AG2.G([x1,AmV,x1+this.Ah0,
AmV+((((B=this.M)[3]-B[1])/2)|0)]);AG2.L(A.iF.A7);this.J(AG2,0);}}}},Aad:function(
E){this.Ni=E;A.ow([this,this.UV],this);},AOx:function(E){if(this.Ah0===E)return;
this.Ah0=E;A.ow([this,this.UV],this);},CZ:function(E){if(this.Ka===E)return;this.
Ka=E;this.Dn.L(E);this.Ib.L(E);},AKv:function(){var B;return this.AKx()-(((((B=this.
LX)<0)?B+0x100000000:B)-1)*86400);},AKx:function(){return A._GetAutoObject(A.Device.
Converter).AfU();},BgJ:function(E){if(this.APT===E)return;this.APT=E;A.ow([this,
this.UV],this);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text.
_Init.call(this.Dn={I:this},0);A.abh.Text._Init.call(this.Ib={I:this},0);A.abh.AH.
_Init.call(this.A7={I:this},0);C.Auz._Init.call(this.Arv={I:this},0);this.__proto__=
C.AfE;this.G(BI);this.An(false);this.Dn.G(ADN);this.Dn.HV(5);this.Dn.A0(0x11);this.
Dn.L(A.iF.Text);this.Ib.G(ADN);this.Ib.HV(5);this.Ib.A0(0x14);this.Ib.L(A.iF.Text
);this.A7.G(ARp);this.A7.L(A.iF.A7);this.Ka=A.iF.Text;this.Arv.G(ARq);this.J(this.
Dn,0);this.J(this.Ib,0);this.J(this.A7,0);this.Dn.Y(A.zW(A.eV.Az));this.Ib.Y(A.zW(
A.eV.Az));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Dn._Done(
);this.Ib._Done();this.A7._Done();this.Arv._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Dn._ReInit();this.Ib._ReInit();this.
A7._ReInit();this.Arv._ReInit();this.Dn.Y(A.zW(A.eV.Az));this.Ib.Y(A.zW(A.eV.Az)
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ni)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Dn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Arv)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingHistoryItem"
};C.AZo={Af:null,Timestamp:0,AY:0,_Init:function(aArg){this.__proto__=C.AZo;A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::AssessmentRecord"
};C.Ahh={Kh:null,Ma:null,AN:0,NP:function(A2,Pi){var GB;GB=A._NewObject(C.AZo,0);
GB.AY=A2;GB.Timestamp=Pi;if(!this.Kh){this.Kh=GB;this.Ma=GB;this.AN=1;}else{this.
Ma.Af=GB;this.Ma=GB;this.AN=this.AN+1;}},_Init:function(aArg){this.__proto__=C.Ahh;
A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:
function(D){var B;if((B=this.Kh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ma
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Application::AssessmentRecordList"
};C.GP={Ac:null,AE:null,Init:function(aArg){A.ow([this,this.DD],this);},DW:function(
H){var B;var EQ=0;var X=this.A6;switch(this.CH.CO){case 6:EQ=2;break;case 7:EQ=7;
break;case 4:EQ=4;break;case 5:EQ=5;break;default:;}X=this.Q8(X,EQ,0x414);if(!!X
)this.A8(X);if(!!X&&((X.S&0x400)===0x400))this.Ac.IB(X,true,null,null);this.DD(this
);},AjS:function(H){A._GetAutoObject(C.A1).Fm();},And:function(H){var B;if(!!(C.
B_.isPrototypeOf(B=this.A6)?B:null).Aes)A.ow((C.B_.isPrototypeOf(B=this.A6)?B:null
).Aes,this);},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-B[1]);this.
AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);},DD:function(H){var B;var
G7=(C.B_.isPrototypeOf(B=this.A6)?B:null);if(!!G7){this.N.GZ(A.jm);this.N.Cd(A.jm
);this.N.Js.DF(255);this.N.IK.DF(G7.At2);this.N.AOr(G7.Ask);this.N.Ao1(G7.AkI);this.
N.C$(G7.ALW);this.N.De(G7.Aog);G7.AXz(this);}},Iv:function(H){A.ow([this,this.FZ
],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.Core.Ac._Init.call(this.
Ac={I:this},0);C.AE._Init.call(this.AE={I:this},0);this.__proto__=C.GP;this.Background.
G(Vu);this.Background.L(A.iF.CR);this.N.G(Vv);this.N.An(false);this.N.W(true);this.
Ac.G(FN);this.Ac.Lf(1);this.AE.G(JV);this.J(this.Ac,0);this.J(this.AE,0);this.Ac.
Eu=[this,this.Iv];this.Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.Ac.
_Done();this.AE._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.
call(this);this.Ac._ReInit();this.AE._ReInit();},_Mark:function(D){var B;C.Aw._Mark.
call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::DeviceScreen"};C.AO_={MP:null,AOh:
null,AbU:null,T5:null,Gs:null,PopupTimeout:null,Aai:null,AeJ:null,PopupIdToString:
null,AqC:null,Text:A.jm,Aiv:A.jm,AGb:A.jm,AiP:0,AHd:-1,Av9:-1,AGM:0,APa:0,AWO:false
,C6:function(){this.A4f(this.PopupIdToString.Cb(this.APa));},Init:function(aArg){
this.Bh8(this);},A$S:function(H){var B;if(this.AiP>0){this.A4q((this.AiP/1000)|0
);this.PopupTimeout.UR(0);this.PopupTimeout.P4(1000);this.PopupTimeout.StartTimer(
this);}else this.PopupTimeout.AC0(this);},A$O:function(H){var AbA=this.Text;var Ad3=
this.Aiv;var AGK=A.aan(16,A.jm,null);var index=0;var Av4=0;while(Ad3!==A.jm){Av4=
Ad3.indexOf(A.Device.PopupParamSeparator,0);if(Av4!==-1){AGK.Set(index,A.aa3(Ad3
,Av4,(Ad3.length-Av4)+1));Ad3=A.aa3(Ad3,0,Av4+1);index=index+1;if(index>=16){A.aa8(
"%s",(ARr+Ad3)+ARs);Ad3=A.jm;}}else{AGK.Set(index,Ad3);Ad3=A.jm;}}index=0;while(
index<AbA.length){if((AbA.charCodeAt(index)||0)===0x7B){var A8Z=AbA.indexOf(String.
fromCharCode(0x7D),index);if(A8Z===-1){A.aa8("%s",(((ARt+AbA)+ARu)+index.toFixed(
))+AiY);index=AbA.length;}else{var A_F=(A8Z-index)-1;var AX3=A.aaY(AbA,index+1,A_F
);var AGJ=A.vQ(AX3,-1,10);AbA=A.aa3(AbA,index,A_F+2);if(AX3===ARv)this.Bg1(index
);else if(((AGJ>0)&&(AGJ<=16))&&(this.Aiv!==A.jm)){AbA=A.aaW(AbA,AGK.Get(AGJ-1),
index);if(this.AWO===true)this.Bg0(A.vQ(AGK.Get(AGJ-1),0,10));}else A.aa8("%s",(
ARw+AX3)+ARx);}}index=index+1;}this.BgZ(AbA);},CF:function(H){A.ow([this,this.A$S
],this);},Ah:function(Ae){var B;this.AbU.G(A.z4(this.Gs.Dh(),Af1));this.T5.G(A.z4(
this.Gs.Dh(),Af1));if(!!this.MP){this.MP.G(A.aaP(this.MP.M,this.Gs.M[0]));this.MP.
G(A.aaR(this.MP.M,this.Gs.M[3]+10));this.MP.G(A.aaO(this.MP.M,(B=this.Gs.M)[2]-B[
0]));this.MP.G(A.aaL(this.MP.M,8));this.AbU.G(A.aam(A.z4(this.Gs.Dh(),Af1),ADO));
this.T5.G(A.aam(A.z4(this.Gs.Dh(),Af1),ADO));}else{this.AbU.G(A.z4(this.Gs.Dh(),
Af1));this.T5.G(A.z4(this.Gs.Dh(),Af1));}},DW:function(H){var I_=(A.Core.B1.isPrototypeOf(
H)?H:null);if((I_.CO===4)&&((this.T5.M[1]+this.M[1])<this.M[1])){this.Gs.G(A.aaR(
this.Gs.M,this.Gs.M[1]+28));this.Al();}else if((I_.CO===5)&&((this.T5.M[3]+this.
M[1])>this.N.M[1])){this.Gs.G(A.aaR(this.Gs.M,this.Gs.M[1]-28));this.Al();}if((I_.
CO===6)&&!!this.Es().CB)this.Es().ABs(1);else if((I_.CO===7)&&!!this.Es().Cm)this.
Es().ABs(3);},JE:function(H){switch(this.Es().Afl){case 1:this.AjS(this);break;case
3:this.And(this);break;case 2:this.Aw_(this);break;case 0:break;default:A.aa8("%s%e"
,ARy,this.Es().Afl);}},AjS:function(H){var B;(B=this.Es().CB)?B[1].call(B[0],this
):null;},And:function(H){var B;(B=this.Es().Cm)?B[1].call(B[0],this):null;},Aw_:
function(H){var B;(B=this.Es().Ch)?B[1].call(B[0],this):null;},Lw:function(H){this.
N.Jk.L((this.N.Jk.AM&0x00FFFFFF)|(100<<24));},Fc:function(H){var B;this.PopupTimeout.
AC0(this);},A4f:function(E){if(this.Text===E)return;this.Text=E;A.ow([this,this.
A$O],this);},Bto:function(H){var B;this.A4q(this.Av9-1);if(this.Av9<=0){this.PopupTimeout.
AC0(this);(B=this.AOh)?B[1].call(B[0],this):null;}},A4g:function(E){if(this.AiP===
E)return;this.AiP=E;A.ow([this,this.A$S],this);},A33:function(E){if(this.Aiv===E
)return;this.Aiv=E;A.ow([this,this.A$O],this);},BgZ:function(E){if(this.AGb===E)
return;this.AGb=E;this.AxZ(this);this.Bre(this);},AxZ:function(H){if((this.Av9!==-
1)&&(this.AHd!==-1)){var Br4=this.AqC.Format(ARz);this.Gs.R(A.aaW(this.AGb,Br4,this.
AHd));}else this.Gs.R(this.AGb);this.Gs.G(ADP);},Bg1:function(E){if(this.AHd===E
)return;this.AHd=E;this.AxZ(this);},A4q:function(E){if(this.Av9===E)return;this.
Av9=E;this.AqC.ABU(E);A.ow([this,this.AxZ],this);},Bre:function(H){this.Gs.Dh();
if(this.Gs.M[1]<=this.M[1])this.Gs.G(A.aaR(this.Gs.M,28));this.Al();},AB$:function(
E){if(this.AWO===E)return;this.AWO=E;if(E===true)A.ow([this,this.BtX],this);},BtX:
function(H){if(!this.MP){this.MP=A._NewObject(A.abr.AzN,0);this.MP.Hy(0);this.MP.
FS(100);this.MP.OnSetAppearance(this.Aai);this.J(this.MP,0);this.AlD(this.MP,this.
Gs);}this.MP.Bu(this.AGM);},Bg0:function(E){if(this.AGM===E)return;this.AGM=E;if(
!!this.MP)this.MP.Bu(this.AGM);},Bh8:function(H){var B;this.N.DF(0);this.AeJ.ACX(
this);},BgA:function(E){if(this.APa===E)return;this.APa=E;},_Init:function(aArg){
C.Aw._Init.call(this,aArg);A.abh.AH._Init.call(this.AbU={I:this},0);A.abh.CT._Init.
call(this.T5={I:this},0);A.abh.Text._Init.call(this.Gs={I:this},0);A.Core.Timer.
_Init.call(this.PopupTimeout={I:this},0);A.abr.AzO._Init.call(this.Aai={I:this},
0);A.abm.FE._Init.call(this.AeJ={I:this},0);A.Device.PopupIdToString._Init.call(
this.PopupIdToString={I:this},0);A.Core.Bp._Init.call(this.AqC={I:this},0);this.
__proto__=C.AO_;var B;this.G(B4);this.Background.G(FN);this.Background.L(0x88FFFFFF
);this.Background.W(false);this.D$.An(false);this.D$.W(false);this.AbU.G(ADQ);this.
AbU.L(A.iF.CE);this.T5.G(ADQ);this.T5.N7(2);this.T5.L(A.iF.Text);this.Gs.G(ADP);
this.Gs.HV(10);this.Gs.I0(true);this.Gs.BgY(0);this.Gs.KH(true);this.Gs.L(A.iF.Text
);this.PopupTimeout.P4(0);this.Aai.A4l(0);this.Aai.A4j(A.iF.A6);this.Aai.A4i(0);
this.Aai.AB_(ADy);this.AeJ.IG(1);this.AeJ.BX=255;this.AeJ.Ci=0;this.Lh(this.D$,-
1);this.J(this.AbU,0);this.J(this.T5,0);this.J(this.Gs,0);this.Gs.Y(A.zW(A.eV.Au
));this.PopupTimeout.Mz=[this,this.Bto];this.Aai.A4k(A.zW(A.abi.M5));this.Aai.A4h(
A.zW(A.abi.M5));this.AeJ.Q=[B=this.N,B.Atb,B.AUS];this.Init(aArg);},_Done:function(
){this.__proto__=C.Aw;this.AbU._Done();this.T5._Done();this.Gs._Done();this.PopupTimeout.
_Done();this.Aai._Done();this.AeJ._Done();this.PopupIdToString._Done();this.AqC.
_Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.
AbU._ReInit();this.T5._ReInit();this.Gs._ReInit();this.PopupTimeout._ReInit();this.
Aai._ReInit();this.AeJ._ReInit();this.PopupIdToString._ReInit();this.AqC._ReInit(
);this.C6();},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.MP)&&(B.
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AOh)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AbU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gs)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupTimeout
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aai)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.AqC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PopUpWindow"
};C.LK={Ah:function(Ae){C.B_.Ah.call(this,Ae);var Gf=A.iF.CE;var G3=A.iF.Text;if(
this.GY){Gf=A.iF.Text;G3=A.iF.Be;}if(!this.Lr){this.Background.L(Gf);this.T.L(A.
iF.AkT);}else if(this.QC){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);}else if(
this.Kq){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);}else{this.Background.L(Gf
);this.T.L(G3);}},_Init:function(aArg){C.B_._Init.call(this,aArg);this.__proto__=
C.LK;},_className:"Application::DarkThemeMenuItem"};C.Ak8={Abu:0,_Init:function(
aArg){C.B_._Init.call(this,aArg);this.__proto__=C.Ak8;},_className:"Application::MenuItemPopUp"
};C.OverlayMenu={AjR:function(H){A._GetAutoObject(A.Device.Device).Co(0);},Nb:function(
){if(!this.CX){this.CX=A._NewObject(C.N,0);this.CX.Cm=[this,this.A95];this.CX.Ch=
null;this.CX.CB=[this,this.AjR];this.CX.Cd(A.z2(A.abg.Ok));this.CX.Cn(null);this.
CX.C$(A.zW(A.abi.Acr));}return this.CX;},A95:function(H){var B;if(!!(C.B_.isPrototypeOf(
B=this.A6)?B:null))(C.B_.isPrototypeOf(B=this.A6)?B:null).JE(this);},CF:function(
H){},AEO:function(s){this.CF(s);},Fc:function(H){},Avo:function(s){this.Fc(s);},
_Init:function(aArg){C.Zo._Init.call(this,aArg);this.__proto__=C.OverlayMenu;},_className:
"Application::OverlayMenu"};C.ALq={Ut:null,W7:null,W1:null,Init:function(aArg){this.
A8(this.Ut);},Abo:function(H){var Ab=(C.B_.isPrototypeOf(H)?H:null);if(!Ab)return;
if(Ab===this.W7)A._GetAutoObject(A.Device.Device).A_(6,true,A.jm,0,[this,this.Bt_
]);else if(Ab===this.Ut)A._GetAutoObject(A.Device.Device).A_(9,true,A.jm,0,[this
,this.But]);else if(Ab===this.W1)A._GetAutoObject(C.A1).BY(4);else throw new Error(
Au3);A._GetAutoObject(A.Device.Device).Co(0);},Bt_:function(H){var Ar=(A.Device.
PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).ACw();},But:function(H){var Ar=(A.Device.PopupContext.isPrototypeOf(
H)?H:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(A.Device.Device).Auk();
},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.LK._Init.call(this.
Ut={I:this},0);C.LK._Init.call(this.W7={I:this},0);C.LK._Init.call(this.W1={I:this
},0);this.__proto__=C.ALq;this.G(AdL);this.Ut.G(BI);this.Ut.An(true);this.Ut.U(A.
z2(A.abg.A43));this.Ut.Bk(true);this.W7.G(Ke);this.W7.An(true);this.W7.U(A.z2(A.
abg.A4K));this.W7.Bk(true);this.W1.G(RT);this.W1.An(true);this.W1.U(A.z2(A.abg.RC
));this.W1.Bk(true);this.J(this.Ut,0);this.J(this.W7,0);this.J(this.W1,0);this.Ut.
AV=[this,this.Abo];this.W7.AV=[this,this.Abo];this.W1.AV=[this,this.Abo];this.Init(
aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ut._Done();this.W7._Done(
);this.W1._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu.
_ReInit.call(this);this.Ut._ReInit();this.W7._ReInit();this.W1._ReInit();this.Ut.
U(A.z2(A.abg.A43));this.W7.U(A.z2(A.abg.A4K));this.W1.U(A.z2(A.abg.RC));},_Mark:
function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ut)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W1)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HomeOverlayMenu"};C.F_={YK:null
,OverlayMenu:null,UX:null,AYj:null,Kx:null,AX2:null,Aiw:null,Nh:null,AwO:100,Init:
function(aArg){var B;A.za([this,this.A_b],[B=A._GetAutoObject(A.Device.Device),B.
AAW,B.AEU],0);A.za([this,this.A99],[B=A._GetAutoObject(A.Device.Device),B.AN0,B.
AUP],0);A.za([this,this.AXw],[B=A._GetAutoObject(A.Device.Device),B.As4,B.Avq],0
);A.za([this,this.BsW],[B=A._GetAutoObject(A.Device.Device),B.As2,B.Avp],0);A.za([
this,this.BsX],[B=A._GetAutoObject(A.Device.Device),B.A2v,B.A6z],0);A.za([this,this.
Ane],[B=A._GetAutoObject(A.Device.Device),B.AOa,B.AUY],0);A.za([this,this.A_p],[
B=A._GetAutoObject(A.Device.Device),B.AcR,B.AdO],0);A.ow([this,this.A_b],this);A.
ow([this,this.A99],this);A.ow([this,this.Ane],this);A.ow([this,this.A_p],this);this.
AYj.AD([B=this.UX,B.AAM,B.XC]);this.J(this.UX,0);this.A8(this.UX);this.BqT(this);
},Ah:function(Ae){},A99:function(H){var B;if(A._GetAutoObject(A.Device.Device).AAA
){if(!this.YK){this.YK=A._NewObject(C.Apx,0);this.YK.G(A.aaM(this.YK.M,this.UX.M.
slice(0,2)));this.YK.G(A.aaR(this.YK.M,this.UX.M[3]-((B=this.YK.M)[3]-B[1])));this.
J(this.YK,1);}}else{if(!!this.YK)this.HA(this.YK);this.YK=null;}},A_b:function(H
){switch(A._GetAutoObject(A.Device.Device).OverlayMenu){case 0:this.Co(null);break;
case 1:this.Co(A._NewObject(C.ALq,0));break;case 8:this.Co(A._NewObject(C.AHU,0)
);break;case 2:this.Co(A._NewObject(C.AHQ,0));break;case 3:this.Co(A._NewObject(
C.AHX,0));break;case 4:this.Co(A._NewObject(C.APl,0));break;case 5:this.Co(A._NewObject(
C.AQH,0));break;case 6:this.Co(A._NewObject(C.AO5,0));break;case 7:this.Co(A._NewObject(
C.Akn,0));break;case 11:this.Co(A._NewObject(C.AIm,0));break;case 12:this.Co(A._NewObject(
C.AIl,0));break;case 9:this.Co(A._NewObject(C.ANe,0));break;case 10:this.Co(A._NewObject(
C.AIh,0));break;default:throw new Error(ARA+A._GetAutoObject(A.Device.Device).OverlayMenu.
toFixed());}},Co:function(E){var B;if(this.OverlayMenu===E)return;if(!!this.OverlayMenu
){A._GetAutoObject(C.XL).AoP(null);this.Nh.AnY(this.OverlayMenu,A._GetAutoObject(
C.ACT),null,null,[B=this.OverlayMenu,B.Avo],null,true);this.A8(this.UX);}this.OverlayMenu=
E;if(!!this.OverlayMenu){this.Nh.Aiy(this.OverlayMenu,A._GetAutoObject(C.ACS),null
,null,null,null,null,[B=this.OverlayMenu,B.AEO],null,false);this.A8(this.Nh);A._GetAutoObject(
C.XL).AoP(this.OverlayMenu.Nb());}else if(!!this.Kx){this.A8(this.Nh);A._GetAutoObject(
C.XL).AoP(this.Kx.Aie().Nb());}},Aft:function(E){var B;if(this.Kx===E)return;if(
!!this.Kx){A._GetAutoObject(C.XL).AoP(null);this.Nh.AnY(this.Kx.Aie(),A._GetAutoObject(
C.AfH),null,null,[B=this.Kx.Aie(),B.Avo],null,false);this.A8(this.UX);}this.Kx=E;
if(!!this.Kx){this.Nh.Aiy(this.Kx.Aie(),A._GetAutoObject(C.AfH),null,null,null,null
,null,[this,this.BeW],null,false);this.A8(this.Nh);A._GetAutoObject(C.XL).AoP(this.
Kx.Aie().Nb());}else if(!!this.OverlayMenu){this.A8(this.Nh);A._GetAutoObject(C.
XL).AoP(this.OverlayMenu.Nb());}},BqT:function(H){var B;var F;this.J(this.AX2,0);(
F=A._GetAutoObject(C.XL),F.G(A.aaR(F.M,((B=this.M)[3]-B[1])-((B=A._GetAutoObject(
C.XL).M)[3]-B[1]))));this.S4(this.Nh);},AXw:function(H){if(A._GetAutoObject(A.Device.
Device).Akt)switch(A._GetAutoObject(A.Device.Device).J5){case 4:case 38:case 5:break;
case 39:A._GetAutoObject(C.A1).AfA(4);break;default:if(A._GetAutoObject(A.Device.
Device).Y_<98)A._GetAutoObject(C.A1).BY(4);}else{this.AwO=100;this.A79();}},BsW:
function(H){this.A79();},A79:function(){if(!A._GetAutoObject(A.Device.Device).Akt
){if(A._GetAutoObject(A.Device.Device).Y_<=2){if(this.AwO>2)switch(A._GetAutoObject(
A.Device.Device).J5){case 38:break;case 4:case 39:A._GetAutoObject(C.A1).AfA(38);
break;default:A._GetAutoObject(C.A1).BY(38);}}else if(A._GetAutoObject(A.Device.
Device).Y_<=10){if(this.AwO>10)switch(A._GetAutoObject(A.Device.Device).J5){case
39:break;case 4:case 38:A._GetAutoObject(C.A1).AfA(39);break;default:A._GetAutoObject(
C.A1).BY(39);}}else if(A._GetAutoObject(A.Device.Device).Y_<=20){if(this.AwO>20)
switch(A._GetAutoObject(A.Device.Device).J5){case 39:break;case 4:case 38:A._GetAutoObject(
C.A1).AfA(39);break;default:A._GetAutoObject(C.A1).BY(39);}}else switch(A._GetAutoObject(
A.Device.Device).J5){case 38:case 4:case 39:A._GetAutoObject(C.A1).Fm();break;default:;
}this.AwO=A._GetAutoObject(A.Device.Device).Y_;}},BsX:function(H){switch(A._GetAutoObject(
A.Device.Device).AnN){case 0:break;case 1:{A._GetAutoObject(A.Device.Device).A_(
40,true,A.jm,0,null);A._GetAutoObject(A.Device.Device).Ali(0);}break;case 2:{A._GetAutoObject(
A.Device.Device).A_(75,true,A.jm,0,null);A._GetAutoObject(A.Device.Device).Ali(0
);}break;default:A.aa8("%s",ARB+A._GetAutoObject(A.Device.Device).AnN.toFixed());
}},Ane:function(H){switch(A._GetAutoObject(A.Device.Device).SyncState){case 1:{A.
_GetAutoObject(A.Device.Device).Co(0);A._GetAutoObject(C.A1).BY(5);}break;case 0:
if(A._GetAutoObject(A.Device.Device).J5===5)A._GetAutoObject(C.A1).AfA(3);break;
default:;}},A_p:function(H){switch(A._GetAutoObject(A.Device.Device).AiT){case 0:
case 2:case 1:A._GetAutoObject(A.Device.Device).Aag(false);break;case 4:{A._GetAutoObject(
A.Device.Device).Ac3(65535);A._GetAutoObject(A.Device.Device).Aag(true);}break;case
3:{A._GetAutoObject(A.Device.Device).Ac3(255);A._GetAutoObject(A.Device.Device).
Aag(true);}break;default:A.aa8("%s",ARC+A._GetAutoObject(A.Device.Device).AiT.toFixed(
));}},BeW:function(H){var B;this.Kx.Aie().CF(this);this.Kx.Btm(this);},Bd1:function(
){return this.Kx;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);C.Aiw._Init.
call(this.Aiw={I:this},0);C.Nh._Init.call(this.Nh={I:this},0);this.__proto__=C.F_;
this.G(B4);this.Nh.G(Vu);this.J(this.Nh,0);this.UX=A._NewObject(C.UX,0);this.AYj=
A._GetAutoObject(C.A1);this.Aiw.AJk=[this,this.Bd1,this.Aft];this.AX2=A._GetAutoObject(
C.XL);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Aiw._Done(
);this.Nh._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Aiw._ReInit();this.Nh._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.YK)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
OverlayMenu)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.UX)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.AYj)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Kx)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AX2)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Aiw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nh)._cycle!=D
)B._Mark(B._cycle=D);},_className:"Application::Content"};C.Zo={A4z:null,CX:null
,N:null,CH:null,Ak1:null,Ak3:null,PQ:null,Ak2:null,AkZ:null,Ak5:null,Ak0:null,DW:
function(H){var EQ=0;var X=this.A6;switch(this.CH.CO){case 6:EQ=2;break;case 7:EQ=
7;break;case 4:EQ=4;break;case 5:EQ=5;break;default:;}X=this.Q8(X,EQ,0x14);if(!!
X)this.A8(X);},A65:function(s){this.DW(s);},AjS:function(H){var DI=(A.Core.B1.isPrototypeOf(
H)?H:null);if(DI.Aan&&(this.Es().Apr===false))return;A.ow(this.Es().CB,this);},AEZ:
function(s){this.AjS(s);},And:function(H){var DI=(A.Core.B1.isPrototypeOf(H)?H:null
);if(DI.Aan&&(this.Es().XR===false))return;A.ow(this.Es().Cm,this);},AE2:function(
s){this.And(s);},JE:function(H){if(this.PQ.Aan)return;},AvA:function(s){this.JE(
s);},Aw_:function(H){var DI=(A.Core.B1.isPrototypeOf(H)?H:null);if(DI.Aan&&(this.
Es().XQ===false))return;A.ow(this.Es().Ch,this);},AE1:function(s){this.Aw_(s);},
Es:function(){if(!!this.Nb())return this.CX;else return this.N;},Nb:function(){return this.
CX;},HW:function(E){this.A4z=E;},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);C.N._Init.call(this.N={I:this},0);A.Core.B1._Init.call(this.CH={I:this},0);A.Core.
B1._Init.call(this.Ak1={I:this},0);A.Core.B1._Init.call(this.Ak3={I:this},0);A.Core.
B1._Init.call(this.PQ={I:this},0);A.Core.B1._Init.call(this.Ak2={I:this},0);A.Core.
B1._Init.call(this.AkZ={I:this},0);A.Core.B1._Init.call(this.Ak5={I:this},0);A.Core.
B1._Init.call(this.Ak0={I:this},0);this.__proto__=C.Zo;this.G([0,0,C.ApA[0],C.ApA[
1]]);this.N.G(Vv);this.N.An(false);this.N.W(false);this.CH.Filter=147;this.Ak1.Filter=
26;this.Ak3.Filter=28;this.PQ.Filter=1;this.Ak2.Filter=27;this.AkZ.Filter=44;this.
Ak5.Filter=9;this.Ak0.Filter=42;this.J(this.N,0);this.CH.B2=[this,this.A65];this.
CH.Ea=[this,this.A65];this.Ak1.B2=[this,this.AEZ];this.Ak1.Ea=[this,this.AEZ];this.
Ak3.B2=[this,this.AE2];this.Ak3.Ea=[this,this.AE2];this.PQ.B2=[this,this.AvA];this.
PQ.Ea=[this,this.AvA];this.Ak2.B2=[this,this.AE1];this.Ak2.Ea=[this,this.AE1];this.
AkZ.B2=[this,this.AEZ];this.AkZ.Ea=[this,this.AEZ];this.Ak5.B2=[this,this.AE2];this.
Ak5.Ea=[this,this.AE2];this.Ak0.B2=[this,this.AE1];this.Ak0.Ea=[this,this.AE1];}
,_Done:function(){this.__proto__=A.Core.O;this.N._Done();this.CH._Done();this.Ak1.
_Done();this.Ak3._Done();this.PQ._Done();this.Ak2._Done();this.AkZ._Done();this.
Ak5._Done();this.Ak0._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.N._ReInit();this.CH._ReInit();this.Ak1._ReInit();this.
Ak3._ReInit();this.PQ._ReInit();this.Ak2._ReInit();this.AkZ._ReInit();this.Ak5._ReInit(
);this.Ak0._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.A4z)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CX)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.N)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CH)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Ak1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ak2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AkZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ak5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ak0)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::Dialog"};C.ACS={_Init:function(){A.abm.ACU.
_Init.call(this,0);this.JH=0x22;this.AbY=true;this.Ar0=4;},_variants:function(){
return this;},_this:null};C.ACT={_Init:function(){A.abm.ACU._Init.call(this,0);this.
JH=0x22;this.AbY=true;this.Ar0=5;},_variants:function(){return this;},_this:null
};C.APS={Q0:function(){var B;var Ak=(A.abm.Ac9.isPrototypeOf(B=A.abm.Acc.Q0.call(
this))?B:null);if(!Ak)throw new Error(Ap6);Ak.B9.Ci=100;return Ak;},QZ:function(
){var B;var Ak=(A.abm.At3.isPrototypeOf(B=A.abm.Acc.QZ.call(this))?B:null);if(!Ak
)throw new Error(Ap6);Ak.EE.BX=100;return Ak;},_Init:function(aArg){A.abm.Acc._Init.
call(this,aArg);this.__proto__=C.APS;},_className:"Application::ShadeTransition"
};C.AkP={Ae9:null,U5:null,II:null,CN:null,AnimalId:-1,GroupId:-1,Azw:true,CZ:function(
E){C.BW.CZ.call(this,E);this.U5.L(E);this.II.L(E);this.Ae9.L(E);},OnSetAnimalId:
function(E){if(this.AnimalId===E)return;this.AnimalId=E;if(E<0)this.II.R(A.z2(A.
abg.Alz));else this.II.R(E.toFixed());},Z$:function(E){if(this.GroupId===E)return;
this.GroupId=E;if(E<0)this.U5.R(A.z2(A.abg.Alz));else this.U5.R(E.toFixed());},EA:
function(H){},MF:function(s){this.EA(s);},A3N:function(E){if(this.Azw===E)return;
this.Azw=E;this.U5.W(this.Azw);this.Ae9.W(this.Azw);},_Init:function(aArg){C.BW.
_Init.call(this,aArg);A.abh.Am._Init.call(this.Ae9={I:this},0);A.abh.Text._Init.
call(this.U5={I:this},0);A.abh.Text._Init.call(this.II={I:this},0);C.CN._Init.call(
this.CN={I:this},0);this.__proto__=C.AkP;this.Ae9.G(ARD);this.U5.G(ARE);this.U5.
A0(0x11);this.U5.R(A.z2(A.abg.Alz));this.II.G(ARF);this.II.A0(0x11);this.II.R(A.
z2(A.abg.Alz));this.CN.G(ARG);this.J(this.Ae9,0);this.J(this.U5,0);this.J(this.II
,0);this.J(this.CN,0);this.Ae9.At(A.zW(A.abi.AL8));this.U5.Y(A.zW(A.eV.Au));this.
II.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.BW;this.Ae9._Done();this.
U5._Done();this.II._Done();this.CN._Done();C.BW._Done.call(this);},_ReInit:function(
){C.BW._ReInit.call(this);this.Ae9._ReInit();this.U5._ReInit();this.II._ReInit();
this.CN._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.Ae9
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.U5)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CN)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderIds"};C.AzG={Init:function(aArg){var B;A.za([
this,this.MF],[B=A._GetAutoObject(A.Device.Helper).V,B.AoL,B.XK],0);A.za([this,this.
MF],[B=A._GetAutoObject(A.Device.Helper).V,B.A2L,B.Alo],0);A.y_([this,this.MF],A.
_GetAutoObject(A.Device.Helper).V,0);A.za([this,this.MF],[B=A._GetAutoObject(A.Device.
Helper).V,B.O1,B.DS],0);A.za([this,this.MF],[B=A._GetAutoObject(A.Device.Helper).
V,B.A3g,B.At1],0);A.za([this,this.MF],[B=A._GetAutoObject(A.Device.Helper).V,B.A2F
,B.AcX],0);A.za([this,this.MF],[B=A._GetAutoObject(A.Device.Helper).V,B.A2G,B.SY
],0);A.za([this,this.MF],[B=A._GetAutoObject(A.Device.Helper).V,B.A2H,B.AcZ],0);
A.za([this,this.MF],[B=A._GetAutoObject(A.Device.Helper).V,B.A2K,B.Ac1],0);A.ow([
this,this.MF],this);},CZ:function(E){C.AkP.CZ.call(this,E);this.CN.CZ(E);},EA:function(
H){if(A._GetAutoObject(A.Device.Helper).V.Aob()){this.Z$(A._GetAutoObject(A.Device.
Helper).V.LocationId);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.VisualId
);}else{this.Z$(-1);this.OnSetAnimalId(-1);}this.CN.DS(A._GetAutoObject(A.Device.
Helper).V.AnimalType);this.CN.ABf(A._GetAutoObject(A.Device.Helper).V.WorstAssessment
);this.CN.AcX(A._GetAutoObject(A.Device.Helper).V.IsAlarm);this.CN.SY(A._GetAutoObject(
A.Device.Helper).V.IsFever);this.CN.AcZ(A._GetAutoObject(A.Device.Helper).V.IsWatch
);this.CN.Ac1(A._GetAutoObject(A.Device.Helper).V.LastTemperature);},_Init:function(
aArg){C.AkP._Init.call(this,aArg);this.__proto__=C.AzG;this.Init(aArg);},_className:
"Application::HeaderSelectedAnimalIds"};C.Ky={ApL:A.aan(3,A.jm,null),Cj:A.aan(3,
0,{0:7,1:30,2:90}),Ak$:3,Dx:function(){if(this.Ak$<3)return this.Ak$;else return 3;
},Dd:function(aIndex){if((aIndex>=3)||(aIndex>=this.Ak$))return-1;return this.Cj.
Get(aIndex);},GS:function(aIndex){if((aIndex>=3)||(aIndex>=this.Ak$))return ARH;
return this.ApL.Get(aIndex);},DX:function(A2){var P=0;while((P<3)&&(P<=this.Ak$)
){if(this.Cj.Get(P)===A2)return P;P=P+1;}return-1;},HP:function(){var P=0;var max=-
1;while((P<3)&&(P<=this.Ak$)){if(this.Cj.Get(P)>max)max=this.Cj.Get(P);P=P+1;}return max;
},_Init:function(aArg){C.AC._Init.call(this,aArg);(this.ApL=[]).__proto__=C.Ky.ApL;(
this.Cj=[]).__proto__=C.Ky.Cj;this.__proto__=C.Ky;this.ApL.Set(0,A.z2(A.abg.BcU)
);this.ApL.Set(1,A.z2(A.abg.BcS));this.ApL.Set(2,A.z2(A.abg.BcT));},_className:"Application::Days"
};C.APP={Akp:null,B3:null,P6:null,PE:null,A5o:A.jm,Init:function(aArg){var B;this.
T.R(A.z2(A.abg.Undertemperature));A.za([this,this.BtG],[B=A._GetAutoObject(A.Device.
Device),B.AoK,B.Aqk],0);},Bh:function(aSize){},Ah:function(Ae){var B;var F;C.Da.
Ah.call(this,Ae);var Fx=((Ae&0x20)===0x20);var Fw=this.Bi.Bw;this.B3.L(A.iF.Be);
if(!!this.Q)this.B3.R(((ARI+A._GetAutoObject(A.Device.Converter).AiN((F=this.Q,F[
1].call(F[0]))))+Cw)+A._GetAutoObject(A.abk.Temperature).AjA());this.Hv.W((this.
AI<A._GetAutoObject(A.Device.Helper).A00())&&(Fx||Fw));},C1:function(H){var F;if(
!!this.Q)this.Bu((F=this.Q,F[1].call(F[0])));},JB:function(H){var F;var BR=this.
AI;C.Da.JB.call(this,H);if(this.AI<A._GetAutoObject(A.Device.Helper).A00()){this.
Bu(this.AI+10);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.
aat(this.Q,0);}}},Jw:function(H){var F;var BR=this.AI;C.Da.Jw.call(this,H);this.
Bu(this.AI-10);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.
aat(this.Q,0);}},A4n:function(E){if(this.A5o===E)return;this.A5o=E;this.Al();},BtG:
function(H){this.Al();},_Init:function(aArg){C.Da._Init.call(this,aArg);A.abh.AH.
_Init.call(this.Akp={I:this},0);C.CG._Init.call(this.B3={I:this},0);A.abh.AH._Init.
call(this.P6={I:this},0);A.abh.Am._Init.call(this.PE={I:this},0);this.__proto__=
C.APP;this.G(Yk);this.Background.G(Yk);this.T.G(Ap7);this.T.L(A.iF.Be);this.Akp.
G(ARJ);this.Akp.L(A.iF.Adz);this.GU.G(ARK);this.B3.G(ARL);this.B3.A0(0x12);this.
B3.L(A.iF.Text);this.Hv.G(ARM);this.P6.G(ARN);this.P6.L(A.iF.E1);this.PE.G(ARO);
this.J(this.Akp,-2);this.J(this.B3,-1);this.J(this.P6,0);this.J(this.PE,0);this.
T.Y(A.zW(A.eV.Au));this.T.By(A.zW(A.eV.Az));this.B3.Y(A.zW(A.eV.Gk));this.B3.By(
A.zW(A.eV.Au));this.PE.At(A.zW(A.abi.AzW));this.Init(aArg);},_Done:function(){this.
__proto__=C.Da;this.Akp._Done();this.B3._Done();this.P6._Done();this.PE._Done();
C.Da._Done.call(this);},_ReInit:function(){C.Da._ReInit.call(this);this.Akp._ReInit(
);this.B3._ReInit();this.P6._ReInit();this.PE._ReInit();},_Mark:function(D){var B;
C.Da._Mark.call(this,D);if((B=this.Akp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
B3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P6)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemUndertemperature"
};C.A4Q={Q:null,AgT:null,Init:function(aArg){var B;A.za([this,this.A9Q],[B=A._GetAutoObject(
A.Device.Device),B.AAM,B.A6s],0);A.ow([this,this.A9Q],this);},AD:function(E){if(
A.z_(this.Q,E))return;this.Q=E;},AfA:function(Ajc){A._GetAutoObject(A.Device.Device
).XC(Ajc);},A9Q:function(H){var F;if(!this.Q){A.aa8("%s",ARP);return;}var Bq=null;
if(this.AgT.Contains(A._GetAutoObject(A.Device.Device).J5)){Bq=this.AgT.A4y();while(
!!Bq&&(Bq.AlP!==A._GetAutoObject(A.Device.Device).J5))Bq=this.AgT.A4y();}if(!Bq)
Bq=this.Bso(A._GetAutoObject(A.Device.Device).J5);(F=this.Q,F[2].call(F[0],Bq));
},Bso:function(Ajc){var Bq=null;switch(Ajc){case 0:case 1:Bq=A._NewObject(C.APW,
0);break;case 2:Bq=A._NewObject(C.Wg,0);break;case 3:Bq=A._NewObject(C.Asv,0);break;
case 61:Bq=A._NewObject(C.AQv,0);break;case 88:Bq=A._NewObject(C.NewMenu,0);break;
case 6:Bq=A._NewObject(C.AM9,0);break;case 16:Bq=A._NewObject(C.AJr,0);break;case
22:Bq=A._NewObject(C.AQr,0);break;case 17:Bq=A._NewObject(C.AQb,0);break;case 45:
Bq=A._NewObject(C.AJp,0);break;case 55:Bq=A._NewObject(C.AID,0);break;case 23:Bq=
A._NewObject(C.AQO,0);break;case 18:Bq=A._NewObject(C.AJB,0);break;case 19:Bq=A.
_NewObject(C.APs,0);break;case 37:Bq=A._NewObject(C.AME,0);break;case 87:Bq=A._NewObject(
C.APf,0);break;case 72:Bq=A._NewObject(C.AJz,0);break;case 73:Bq=A._NewObject(C.
AJA,0);break;case 93:Bq=A._NewObject(C.AJy,0);break;case 94:Bq=A._NewObject(C.AJx
,0);break;case 74:Bq=A._NewObject(C.AJw,0);break;case 5:Bq=A._NewObject(C.AP6,0);
break;case 4:Bq=A._NewObject(C.Ab1,0);break;case 39:Bq=A._NewObject(C.AI1,0);break;
case 38:Bq=A._NewObject(C.AJi,0);break;case 27:Bq=A._NewObject(C.UQ,0);break;case
7:Bq=A._NewObject(C.An1,0);break;case 92:Bq=A._NewObject(C.AJK,0);break;case 30:
Bq=A._NewObject(C.AoA,0);break;case 89:Bq=A._NewObject(C.ANs,0);break;case 33:Bq=
A._NewObject(C.AHO,0);break;case 34:Bq=A._NewObject(C.ManualActionScanScreen,0);
break;case 31:Bq=A._NewObject(C.SetTransponderScreen,0);break;case 49:Bq=A._NewObject(
C.SetSaveTransponderScreen,0);break;case 54:Bq=A._NewObject(C.NewAnimalSetTransponderScreen
,0);break;case 63:Bq=A._NewObject(C.NewAnimalsSetTransponderScreen,0);break;case
90:Bq=A._NewObject(C.MotherScanScreen,0);break;case 91:Bq=A._NewObject(C.SetSaveNaisIdScreen
,0);break;case 8:Bq=A._NewObject(C.Gi,0);break;case 9:Bq=A._NewObject(C.Iz,0);break;
case 24:Bq=A._NewObject(C.AH3,0);break;case 10:Bq=A._NewObject(C.Akl,0);break;case
21:Bq=A._NewObject(C.AH7,0);break;case 11:Bq=A._NewObject(C.AH6,0);break;case 28:
Bq=A._NewObject(C.ArJ,0);break;case 53:Bq=A._NewObject(C.AH5,0);break;case 29:Bq=
A._NewObject(C.AH4,0);break;case 36:Bq=A._NewObject(C.H_,0);break;case 12:Bq=A._NewObject(
C.AH2,0);break;case 40:Bq=A._NewObject(C.AH1,0);break;case 42:Bq=A._NewObject(C.
AH0,0);break;case 14:Bq=A._NewObject(C.AJg,0);break;case 13:Bq=A._NewObject(C.AJh
,0);break;case 43:Bq=A._NewObject(C.AJf,0);break;case 20:Bq=A._NewObject(C.AQF,0
);break;case 41:Bq=A._NewObject(C.AQE,0);break;case 44:Bq=A._NewObject(C.AQD,0);
break;case 46:Bq=A._NewObject(C.AKo,0);break;case 47:Bq=A._NewObject(C.AKn,0);break;
case 48:Bq=A._NewObject(C.AKm,0);break;case 69:Bq=A._NewObject(C.AJJ,0);break;case
70:Bq=A._NewObject(C.AJI,0);break;case 71:Bq=A._NewObject(C.AJH,0);break;case 50:
Bq=A._NewObject(C.ANH,0);break;case 51:Bq=A._NewObject(C.ANG,0);break;case 52:Bq=
A._NewObject(C.ANF,0);break;case 96:Bq=A._NewObject(C.AQU,0);break;case 97:Bq=A.
_NewObject(C.AQT,0);break;case 98:Bq=A._NewObject(C.AQS,0);break;case 80:Bq=A._NewObject(
C.ANC,0);break;case 81:Bq=A._NewObject(C.ANB,0);break;case 82:Bq=A._NewObject(C.
ANA,0);break;case 85:Bq=A._NewObject(C.APw,0);break;case 83:Bq=A._NewObject(C.APv
,0);break;case 84:Bq=A._NewObject(C.APu,0);break;case 58:Bq=A._NewObject(C.AHT,0
);break;case 59:Bq=A._NewObject(C.AHS,0);break;case 60:Bq=A._NewObject(C.AHR,0);
break;case 15:Bq=A._NewObject(C.APi,0);break;case 68:Bq=A._NewObject(C.AQa,0);break;
case 78:Bq=A._NewObject(C.AM7,0);break;case 79:Bq=A._NewObject(C.AM6,0);break;case
26:Bq=A._NewObject(C.ANu,0);break;case 62:Bq=A._NewObject(C.ANr,0);break;case 25:
Bq=A._NewObject(C.AJY,0);break;case 75:Bq=A._NewObject(C.AJZ,0);break;case 67:Bq=
A._NewObject(C.AJX,0);break;case 66:Bq=A._NewObject(C.AJ0,0);break;case 64:Bq=A.
_NewObject(C.AJ1,0);break;case 65:Bq=A._NewObject(C.Ar5,0);break;case 77:Bq=A._NewObject(
C.AJ2,0);break;case 76:Bq=A._NewObject(C.AJV,0);break;case 95:Bq=A._NewObject(C.
AH9,0);break;case 32:Bq=A._NewObject(C.WeightListScreen,0);break;case 35:Bq=A._NewObject(
C.AnimalSingleInfoScreen,0);break;case 56:Bq=A._NewObject(C.AnimalMultiInfoScreen
,0);break;case 57:Bq=A._NewObject(C.MultiInfoActionsScreen,0);break;case 86:Bq=A.
_NewObject(C.AIj,0);break;default:throw new Error(ARQ);}if(!!Bq)Bq.AlP=Ajc;return Bq;
},BY:function(Ajc){var F;if(!(F=this.Q,F[1].call(F[0])))A.aa8("%s",ARR);else this.
AgT.Bhn((F=this.Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Device).XC(Ajc);},
Fm:function(){var A_U=3;var A_T=this.AgT.Bhc();if(!!A_T)A_U=A_T.AlP;else A.aa8("%s"
,ARS);A._GetAutoObject(A.Device.Device).XC(A_U);},_Init:function(aArg){C.A4S._Init.
call(this.AgT={I:this},0);this.__proto__=C.A4Q;this.Init(aArg);A.hJ++;},_Done:function(
){this.__proto__=null;this.AgT._Done();A.hJ--;},_ReInit:function(){this.AgT._ReInit(
);},_Mark:function(D){var B;if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AgT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ScreenLoaderClass"
};C.A1={_Init:function(){C.A4Q._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.ACm={Hz:null,WQ:null,Ada:null,YS:null,LY:null,Awd:1,RatingMode:0
,RatedAttribute:0,C6:function(){this.WQ.R(this.A8C(this.RatedAttribute));this.AGE(
this);},Ah:function(Ae){this.LY.R(A._GetAutoObject(A.Device.Helper).Nk(A.z2(A.abg.
ANi),Qj,this.Awd.toFixed()));if(this.RatingMode===1)this.LY.W(true);else this.LY.
W(false);},CF:function(H){var B;C.Aw.CF.call(this,H);if(A._GetAutoObject(A.Device.
Device).Bt.Ms())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.
Device.Device).Bt.If().toFixed(),0,null);this.Hz.GG();this.Hz.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).V.Id);A._GetAutoObject(A.Device.Helper).Aue(this.Hz,5);A.za([this
,this.AGE],[B=A._GetAutoObject(A.Device.Device),B.AN9,B.AUV],0);A.za([this,this.
AGE],[B=A._GetAutoObject(A.Device.Helper).V,B.O1,B.DS],0);A.ow([this,this.AGE],this
);},ApI:function(H){var a=this.AGi(this.RatedAttribute);this.A__();this.Awd=this.
Awd-1;this.Al();if(!a)this.ANp();else this.Rt(a);},U2:function(H){var a=this.A8J(
this.RatedAttribute);this.A__();this.Awd=this.Awd+1;this.Al();if(!a)this.A1V();else
this.Rt(a);},AGi:function(MH){if(!this.RatingMode)return 0;else if(this.RatingMode===
1)switch(MH){case 2:return 0;case 1:return 2;case 4:return 1;case 3:return 4;default:
return 0;}else throw new Error(ADR);},A8J:function(MH){if(!this.RatingMode)return 0;
else if(this.RatingMode===1)switch(MH){case 2:return 1;case 1:return 4;case 4:return 3;
case 3:return 0;default:return 0;}else throw new Error(ADR);},Rt:function(E){if(
this.RatedAttribute===E)return;this.RatedAttribute=E;this.WQ.R(this.A8C(E));this.
DD(E);this.Ada.Alt(this.Hz.BbV(E));if(!this.AGi(E)){if(this.AMM())this.N.Cn(A.zW(
A.abi.AhM));else this.N.Cn(null);}else this.N.Cn(A.zW(A.abi.Acr));},A8C:function(
MH){return this.YS.Cb(MH);},Bsn:function(MH){if(!!MH){var a=this.AGi(MH);if(!a)return A.
jm;else return this.A8D(a);}else return A.jm;},Bsm:function(MH){if(!!MH){var a=this.
A8J(MH);if(!a)return A.jm;else return this.A8D(a);}else return A.jm;},ANp:function(
){},A1V:function(){},A01:function(){return null;},A8D:function(MH){return this.YS.
KN(MH);},A__:function(){if(!!this.RatedAttribute)this.Hz.BhU(this.RatedAttribute
,this.Ada.AY);},AGE:function(H){if(this.AMM())this.RatingMode=A._GetAutoObject(A.
Device.Device).RatingMode;else this.RatingMode=0;this.Rt(2);this.DD(this.RatedAttribute
);this.Al();},Aw9:function(H){A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
4);},AiI:function(H){var a=this.AGi(this.RatedAttribute);if(!a){if(this.AMM())this.
Aw9(this);}else this.ANp();},DD:function(MH){this.N.GZ(this.Bsn(MH));if(!!this.N.
AlK){this.N.C$(null);this.N.O4(true);}else{this.N.C$(A.zW(A.abi.Acr));this.N.O4(
false);}this.N.Cd(this.Bsm(MH));if(!!this.N.AlM){this.N.De(null);this.N.O5(true);
}else{this.N.De(this.A01());this.N.O5(false);}},AMM:function(){switch(A._GetAutoObject(
A.Device.Helper).V.AnimalType){case 0:case 2:return true;case 1:return false;default:
A.aa8("%s%e",Ap8,A._GetAutoObject(A.Device.Helper).V.AnimalType);}return false;}
,_Init:function(aArg){C.Aw._Init.call(this,aArg);A.abh.Text._Init.call(this.WQ={
I:this},0);C.Rating._Init.call(this.Ada={I:this},0);A.Device.RatedAttributeToString.
_Init.call(this.YS={I:this},0);A.abh.Text._Init.call(this.LY={I:this},0);this.__proto__=
C.ACm;this.Background.L(A.iF.CE);this.N.W(true);this.Dw(C.Ig);this.WQ.G(ART);this.
WQ.KH(true);this.WQ.L(A.iF.Text);this.Ada.G(ARU);this.LY.G(ARV);this.LY.A0(0x14);
this.LY.R(A.z2(A.abg.ANi));this.LY.L(A.iF.Text);this.J(this.WQ,0);this.J(this.Ada
,0);this.J(this.LY,0);this.A8(this.Ada);this.N.CB=[this,this.ApI];this.N.Ch=[this
,this.AiI];this.N.Cm=[this,this.U2];this.WQ.Y(A.zW(A.eV.Au));this.Ada.AV=[this,this.
U2];this.LY.Y(A.zW(A.eV.Au));this.Hz=A._NewObject(A.Device.Rating,0);},_Done:function(
){this.__proto__=C.Aw;this.WQ._Done();this.Ada._Done();this.YS._Done();this.LY._Done(
);C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.WQ._ReInit(
);this.Ada._ReInit();this.YS._ReInit();this.LY._ReInit();this.LY.R(A.z2(A.abg.ANi
));this.WQ.Y(A.zW(A.eV.Au));this.LY.Y(A.zW(A.eV.Au));this.C6();},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ada)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.YS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LY)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::RateScreen"};C.Hp={Ac:null,Gender:
null,AnimalType:null,Breed:null,Vg:null,Zb:null,ApZ:null,Dj:null,GX:null,EG:null
,FF:null,M$:null,AE:null,PB:0,Init:function(aArg){A.za([this,this.A64],this.Dj.Q
,0);A.ow([this,this.A64],this);A.ow([this,this.AxF],this);},Ah:function(Ae){C.Aw.
Ah.call(this,Ae);var Ab;var AXl=false;var Awf=this.Ac.Zw(null,0x1);while(!!Awf){
Ab=(C.B_.isPrototypeOf(Awf)?Awf:null);if(!!Ab){Ab.Bk(AXl);AXl=!AXl;}Awf=this.Ac.
Zw(Awf,0x1);}},DW:function(H){var B;var EQ=0;var X=this.A6;switch(this.CH.CO){case
6:EQ=2;break;case 7:EQ=7;break;case 4:EQ=4;break;case 5:EQ=5;break;default:;}X=this.
Q8(X,EQ,0x415);if(!!X)this.A8(X);if(!!X&&((X.S&0x400)===0x400))this.Ac.IB(X,true
,null,null);this.AxF(this);},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1))[
3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);},Atj:function(
E){if(this.PB===E)return;this.PB=E;A.aat([this,this.A2u,this.Atj],0);},AxF:function(
H){var B;var G7=(C.B_.isPrototypeOf(B=this.A6)?B:null);this.N.GZ(A.jm);this.N.C$(
A.zW(A.abi.ET));this.N.CB=[this,this.AEY];if(!!G7&&!!G7.Akh){this.N.Ft(A.jm);this.
N.KL.DF(255);this.N.Atz(G7.Azg);this.N.Cn(G7.AsE);this.N.Ch=G7.Akh;}else{this.N.
Ft(A.jm);this.N.Cn(null);this.N.Ch=null;}if(!!G7&&!!G7.Aes){this.N.Cd(A.jm);this.
N.IK.DF(G7.At2);this.N.Ao1(G7.AkI);this.N.De(G7.Aog);this.N.Cm=G7.Aes;}else this.
Ark();},Aee:function(H){A.aa8("%s",Au4);},Avz:function(s){this.Aee(s);},EY:function(
H){A.aa8("%s",Au4);},AEY:function(s){this.EY(s);},Ark:function(){A.aa8("%s",Ai1);
},Aw4:function(H){A.aa8("%s",Au4);},Vw:function(s){this.Aw4(s);},Px:function(Ag){
this.A8(Ag);this.Ac.IB(Ag,true,null,null);this.Ac.AbJ(null,null);},Am_:function(
H){var F;this.EG.AtS(A._GetAutoObject(A.Device.Helper).AhE((F=this.Dj.Q,F[1].call(
F[0]))));},A64:function(s){this.Am_(s);},Iv:function(H){A.ow([this,this.FZ],this
);},A2u:function(){return this.PB;},_Init:function(aArg){C.Aw._Init.call(this,aArg
);A.Core.Ac._Init.call(this.Ac={I:this},0);C.Gender._Init.call(this.Gender={I:this
},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.Breed._Init.call(this.
Breed={I:this},0);C.AQQ._Init.call(this.Vg={I:this},0);A.Device.MV._Init.call(this.
Zb={I:this},0);A.Device.AdE._Init.call(this.ApZ={I:this},0);C.B$._Init.call(this.
Dj={I:this},0);C.B$._Init.call(this.GX={I:this},0);C.ApD._Init.call(this.EG={I:this
},0);C.ACK._Init.call(this.FF={I:this},0);C.ACJ._Init.call(this.M$={I:this},0);C.
AE._Init.call(this.AE={I:this},0);this.__proto__=C.Hp;var B;this.N.W(true);this.
Dw(C.Ig);this.Ac.G(FN);this.Ac.Lf(1);this.PB=A._GetAutoObject(A.Device.Helper).AhE(
this.AnimalType.Q);this.Dj.G(Af2);this.Dj.Aj(true);this.Dj.U(A.z2(A.abg.AuA));this.
GX.G(Au5);this.GX.Aj(true);this.GX.U(A.z2(A.abg.Aug));this.EG.G(Al3);this.EG.Aj(
true);this.EG.U(A.z2(A.abg.PB));this.EG.Hy(1000);this.EG.FS(99000);this.EG.AtS(A.
_GetAutoObject(A.Device.Helper).AhE(this.AnimalType.Q));this.FF.G(Af3);this.FF.Aj(
true);this.FF.U(A.z2(A.abg.Breed));this.M$.G(ARW);this.M$.Aj(true);this.M$.U(A.z2(
A.abg.Vg));this.AE.G(Ap9);this.J(this.Ac,0);this.J(this.Dj,0);this.J(this.GX,0);
this.J(this.EG,0);this.J(this.FF,0);this.J(this.M$,0);this.J(this.AE,0);this.Ac.
Eu=[this,this.Iv];this.Gender.N1(A._GetAutoObject(A.Device.Helper).V);this.AnimalType.
N1(A._GetAutoObject(A.Device.Helper).V);this.Breed.N1(A._GetAutoObject(A.Device.
Helper).V);this.Vg.N1(A._GetAutoObject(A.Device.Helper).V);this.Dj.AD([B=this.AnimalType
,B.CA,B.CC]);this.Dj.Dk(this.AnimalType);this.GX.AD([B=this.Gender,B.CA,B.CC]);this.
GX.Dk(this.Gender);this.EG.AD([this,this.A2u,this.Atj]);this.FF.He([this,this.Es
,this.HW]);this.FF.Nc([B=this.FF,B.GC]);this.FF.Nd(A.zW(A.abi.Edit));this.FF.AD([
B=this.Breed,B.CA,B.CC]);this.FF.Dk(this.Breed);this.FF.ABk(this.Zb);this.M$.He([
this,this.Es,this.HW]);this.M$.Nc([B=this.M$,B.GC]);this.M$.Nd(A.zW(A.abi.Edit));
this.M$.AD([B=this.Vg,B.CA,B.CC]);this.M$.Dk(this.Vg);this.M$.ABk(this.ApZ);this.
Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.Ac._Done();this.Gender._Done(
);this.AnimalType._Done();this.Breed._Done();this.Vg._Done();this.Zb._Done();this.
ApZ._Done();this.Dj._Done();this.GX._Done();this.EG._Done();this.FF._Done();this.
M$._Done();this.AE._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.
call(this);this.Ac._ReInit();this.Gender._ReInit();this.AnimalType._ReInit();this.
Breed._ReInit();this.Vg._ReInit();this.Zb._ReInit();this.ApZ._ReInit();this.Dj._ReInit(
);this.GX._ReInit();this.EG._ReInit();this.FF._ReInit();this.M$._ReInit();this.AE.
_ReInit();this.Dj.U(A.z2(A.abg.AuA));this.GX.U(A.z2(A.abg.Aug));this.EG.U(A.z2(A.
abg.PB));this.FF.U(A.z2(A.abg.Breed));this.M$.U(A.z2(A.abg.Vg));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vg).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.ApZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EG)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalDataScreen"};C.UQ={AvQ:false,Lw:function(H){if(A._GetAutoObject(
A.Device.Device).Aq.Ms())A._GetAutoObject(A.Device.Device).A_(41,true,A._GetAutoObject(
A.Device.Device).Aq.If().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).V.GG(
);A._GetAutoObject(A.Device.Helper).Aye(A._GetAutoObject(A.Device.Helper).V);},Ark:
function(){this.N.Cd(A.jm);this.N.De(A.zW(A.abi.Az1));this.N.Cm=[this,this.Avz];
},CF:function(H){if(!this.AvQ){this.AvQ=true;A.ow([this,this.Vw],this);}else C.AoA.
CF.call(this,H);},Aw4:function(H){A._GetAutoObject(C.A1).BY(54);},_Init:function(
aArg){C.AoA._Init.call(this,aArg);this.__proto__=C.UQ;this.Lh(this.AE,-1);},_className:
"Application::NewAnimalManualDataScreen"};C.Ig={_Init:function(aArg){C.AzG._Init.
call(this,aArg);this.__proto__=C.Ig;this.A3N(false);},_className:"Application::HeaderSelectedAnimalId"
};C.Iz={Filter:null,Gender:null,AnimalType:null,Transponder:null,D4:null,Ac:null
,O_:null,O$:null,L2:null,Pa:null,Lk:null,OA:null,OB:null,Mi:null,OC:null,LC:null
,KA:null,IU:null,Kb:null,LU:null,WF:null,RM:null,QH:null,AE:null,AuG:0,AuF:0,ArH:
0,ArG:0,Aoz:0,ApR:0,Asg:0,Ash:0,Y0:false,AaG:false,Init:function(aArg){A.za([this
,this.AKq],this.KA.Q,0);A.za([this,this.AIr],this.IU.Q,0);A.za([this,this.BiZ],this.
Kb.Q,0);A.za([this,this.Bdh],this.LU.Q,0);A.za([this,this.Bjq],this.Lk.Q,0);A.za([
this,this.Bjp],this.L2.Q,0);A.za([this,this.A$7],this.LC.Q,0);A.za([this,this.A$6
],this.Mi.Q,0);this.A8(this.O_);},DW:function(H){var EQ=0;var X=this.A6;switch(this.
CH.CO){case 6:EQ=2;break;case 7:EQ=7;break;case 4:EQ=4;break;case 5:EQ=5;break;default:;
}X=this.Q8(X,EQ,0x414);if(!!X)this.A8(X);this.TF(this);},CF:function(H){if(!!A._GetAutoObject(
A.Device.Device).Aq.Filter)this.Bo(A._GetAutoObject(A.Device.Device).Aq.Filter.F$(
));else this.Bo(A._NewObject(A.Device.Filter,0));},EY:function(H){A._GetAutoObject(
C.A1).Fm();},AXr:function(H){var Eh=(C.Acf.isPrototypeOf(H)?H:null);if(!Eh)return;
var As=this.Filter.DJ(Eh.D_,Eh.Operator);if(!!As){this.Filter.P7(As);A.aat([this
,this.Fd,this.Fg],0);}else{if(Eh.D_===11){As=A._NewObject(A.Device.BoolFilterCriterion
,0);As.EF=Eh.D_;As.Operator=Eh.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
As)?As:null).AY=true;}else if(Eh.D_===12){As=A._NewObject(A.Device.BoolFilterCriterion
,0);As.EF=Eh.D_;As.Operator=Eh.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
As)?As:null).AY=true;}else if(Eh.D_===8){As=A._NewObject(A.Device.BoolFilterCriterion
,0);As.EF=Eh.D_;As.Operator=Eh.Operator;(A.Device.BoolFilterCriterion.isPrototypeOf(
As)?As:null).AY=true;}else A.aa8("%s",ADS+Eh.D_.toFixed());if(!!As){this.Filter.
CQ(As);A.aat([this,this.Fd,this.Fg],0);}}},BsU:function(H){A._GetAutoObject(A.Device.
Device).Aq.Bo(this.Filter);A._GetAutoObject(C.A1).Fm();},Aw3:function(H){var Eh=(
C.AkO.isPrototypeOf(H)?H:null);if(!Eh)return;var As=this.Filter.DJ(Eh.D_,Eh.Operator
);if(!!As){this.Filter.P7(As);A.aat([this,this.Fd,this.Fg],0);}else{if(Eh.D_===7
){As=A._NewObject(A.Device.GenderFilterCriterion,0);As.EF=Eh.D_;As.Operator=Eh.Operator;
}else if(Eh.D_===14){As=A._NewObject(A.Device.AnimalTypeFilterCriterion,0);As.EF=
Eh.D_;As.Operator=Eh.Operator;}else if((Eh.D_===22)||(Eh.D_===26)){var AVx=A._NewObject(
A.Device.UInt64FilterCriterion,0);AVx.EF=Eh.D_;AVx.Operator=0;As=AVx;}else A.aa8(
"%s",ADS+Eh.D_.toFixed());if(!!As){this.Filter.CQ(As);A.aat([this,this.Fd,this.Fg
],0);}}},A3I:function(E){if(this.Asg===E)return;this.Asg=E;A.aat([this,this.Bd_,
this.A3I],0);},A3J:function(E){if(this.Ash===E)return;this.Ash=E;A.aat([this,this.
Bd$,this.A3J],0);},AKq:function(H){var F;this.A3J((F=this.KA.Q,F[1].call(F[0])));
var As=this.Filter.DJ(7,0);if(!!As){var Awv=(A.Device.GenderFilterCriterion.isPrototypeOf(
As)?As:null);if(!!Awv)Awv.AY=this.Ash;else A.aa8("%s",AdM);}},AIr:function(H){var
F;this.A3I((F=this.IU.Q,F[1].call(F[0])));var As=this.Filter.DJ(14,0);if(!!As){var
Tv=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(As)?As:null);if(!!Tv)Tv.AY=
this.Asg;else A.aa8("%s",AdM);}},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1
))[3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);},A4m:function(
E){if(this.ApR===E)return;this.ApR=E;A.aat([this,this.BeL,this.A4m],0);},BiZ:function(
H){var F;this.A4m((F=this.Kb.Q,F[1].call(F[0])));var As=this.Filter.DJ(22,1);if(
!!As){var Ag2=(A.Device.UInt64FilterCriterion.isPrototypeOf(As)?As:null);if(!!Ag2
)switch(this.ApR){case 1:Ag2.Operator=5;break;case 0:Ag2.Operator=0;break;default:
A.aa8("%s%e",ADT,this.ApR);}else A.aa8("%s",AdM);}},A3S:function(E){if(this.Aoz===
E)return;this.Aoz=E;A.aat([this,this.Beo,this.A3S],0);},Bdh:function(H){var F;this.
A3S((F=this.LU.Q,F[1].call(F[0])));var As=this.Filter.DJ(26,1);if(!!As){var AqZ=(
A.Device.UInt64FilterCriterion.isPrototypeOf(As)?As:null);if(!!AqZ)switch(this.Aoz
){case 1:AqZ.Operator=5;break;case 0:AqZ.Operator=0;break;default:A.aa8("%s%e",ADT
,this.Aoz);}else A.aa8("%s",AdM);}},Bo:function(E){var B;if(this.Filter===E)return;
this.Filter=E;if(!this.Filter)return;this.O_.Bo([this,this.Fd,this.Fg]);this.O$.
Bo([this,this.Fd,this.Fg]);this.L2.Bo([this,this.Fd,this.Fg]);this.Pa.Bo([this,this.
Fd,this.Fg]);this.Lk.Bo([this,this.Fd,this.Fg]);this.OA.Bo([this,this.Fd,this.Fg
]);this.OB.Bo([this,this.Fd,this.Fg]);this.Mi.Bo([this,this.Fd,this.Fg]);this.OC.
Bo([this,this.Fd,this.Fg]);this.LC.Bo([this,this.Fd,this.Fg]);this.KA.Bo([this,this.
Fd,this.Fg]);this.IU.Bo([this,this.Fd,this.Fg]);this.Kb.Bo([this,this.Fd,this.Fg
]);this.LU.Bo([this,this.Fd,this.Fg]);this.WF.Bo([this,this.Fd,this.Fg]);this.RM.
Bo([this,this.Fd,this.Fg]);this.QH.Bo([this,this.Fd,this.Fg]);this.Ape(false);A.
ow([this,this.AYJ],this);var A9j=(A.Device.Int32FilterCriterion.isPrototypeOf(B=
this.Filter.DJ(1,2))?B:null);if(!!A9j){this.Ape(true);this.AB6(A9j.AY);}var A8P=(
A.Device.Int32FilterCriterion.isPrototypeOf(B=this.Filter.DJ(1,3))?B:null);if(!!
A8P){this.Ape(true);this.AB7(A8P.AY);}this.AoQ(false);A.ow([this,this.AYD],this);
var A9i=(A.Device.UInt32FilterCriterion.isPrototypeOf(B=this.Filter.DJ(4,3))?B:null
);if(!!A9i){this.AoQ(true);this.AA3(A._GetAutoObject(A.Device.Helper).L7(A9i.AY,
A._GetAutoObject(A.Device.Helper).DR()));}var A8O=(A.Device.UInt32FilterCriterion.
isPrototypeOf(B=this.Filter.DJ(4,2))?B:null);if(!!A8O){this.AoQ(true);this.AA5(A.
_GetAutoObject(A.Device.Helper).L7(A8O.AY,A._GetAutoObject(A.Device.Helper).DR()
)+1);}var Awv=(A.Device.GenderFilterCriterion.isPrototypeOf(B=this.Filter.DJ(7,0
))?B:null);if(!!Awv)this.KA.Bu(this.Gender.DX(Awv.AY));var Tv=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(B=this.Filter.DJ(14,0))?B:null);if(!!Tv)this.IU.Bu(this.AnimalType.
DX(Tv.AY));var Ag2=this.Filter.DJ(22,1);if(!!Ag2){if(!Ag2.Operator)this.Kb.Bu(0);
else this.Kb.Bu(1);}var AqZ=this.Filter.DJ(26,1);if(!!AqZ){if(!AqZ.Operator)this.
LU.Bu(0);else this.LU.Bu(1);}},Fg:function(Ao){this.Bo(Ao);},AB7:function(E){if(
this.AuG===E)return;this.AuG=E;A.aat([this,this.A2_,this.AB7],0);},AB6:function(
E){if(this.AuF===E)return;this.AuF=E;A.aat([this,this.A29,this.AB6],0);},Bjq:function(
H){var F;this.AB7((F=this.Lk.Q,F[1].call(F[0])));var As=this.Filter.DJ(1,3);if(!
!As){var Ax1=(A.Device.Int32FilterCriterion.isPrototypeOf(As)?As:null);if(!!Ax1)
Ax1.AY=this.AuG;else A.aa8("%s",AdM);}},Bjp:function(H){var F;this.AB6((F=this.L2.
Q,F[1].call(F[0])));var As=this.Filter.DJ(1,2);if(!!As){var Ax1=(A.Device.Int32FilterCriterion.
isPrototypeOf(As)?As:null);if(!!Ax1)Ax1.AY=this.AuF;else A.aa8("%s",AdM);}},A9N:
function(H){var Eh=(C.Ahx.isPrototypeOf(H)?H:null);if(!Eh)return;var As=this.Filter.
DJ(Eh.D_,Eh.Operator);if(!!As){this.Filter.P7(As);A.aat([this,this.Fd,this.Fg],0
);}else{if(Eh===this.O$){As=A._NewObject(A.Device.Int32FilterCriterion,0);As.EF=
Eh.D_;As.Operator=Eh.Operator;(A.Device.Int32FilterCriterion.isPrototypeOf(As)?As:
null).AY=this.AuF;this.A8(this.L2);}else if(Eh===this.Pa){As=A._NewObject(A.Device.
Int32FilterCriterion,0);As.EF=Eh.D_;As.Operator=Eh.Operator;(A.Device.Int32FilterCriterion.
isPrototypeOf(As)?As:null).AY=this.AuG;this.A8(this.Lk);}if(!!As){this.Filter.CQ(
As);A.aat([this,this.Fd,this.Fg],0);}}A.ow([this,this.AYJ],this);},AYJ:function(
H){var Am2=!!this.Filter.DJ(this.L2.D_,this.L2.Operator);var AnA=!!this.Filter.DJ(
this.Lk.D_,this.Lk.Operator);this.O$.Aj(this.AaG);this.O$.An(this.AaG);this.O$.W(
this.AaG);this.Pa.Aj(this.AaG);this.Pa.An(this.AaG);this.Pa.W(this.AaG);this.L2.
Aj(Am2);this.L2.An(Am2);this.L2.W(Am2);this.Lk.Aj(AnA);this.Lk.An(AnA);this.Lk.W(
AnA);},TF:function(H){var B;this.Ac.AbJ(null,null);if(!!this.A6&&((this.A6.S&0x400
)===0x400))this.Ac.IB(this.A6,true,null,null);},BtO:function(H){A.ow([this,this.
FZ],this);A.ow([this,this.TF],this);},BsR:function(H){this.Ape(!this.AaG);if(this.
AaG===false){var As=this.Filter.DJ(this.O_.D_,this.O_.Operator);while(!!As){this.
Filter.P7(As);As=this.Filter.DJ(this.O_.D_,this.O_.Operator);}A.aat([this,this.Fd
,this.Fg],0);}},Ape:function(E){if(this.AaG===E)return;this.AaG=E;A.aat([this,this.
A28,this.Ape],0);A.ow([this,this.AYJ],this);},AA5:function(E){if(this.ArH===E)return;
this.ArH=E;A.aat([this,this.A2l,this.AA5],0);},AA3:function(E){if(this.ArG===E)return;
this.ArG=E;A.aat([this,this.A2j,this.AA3],0);},A$7:function(H){var F;this.AA5((F=
this.LC.Q,F[1].call(F[0])));var As=this.Filter.DJ(4,2);if(!!As){var Ajd=(A.Device.
UInt32FilterCriterion.isPrototypeOf(As)?As:null);if(!!Ajd){var YV=A._GetAutoObject(
A.Device.Helper).X0(this.ArH-1);Ajd.AY=YV;}else A.aa8("%s",AdM);}},A$6:function(
H){var F;this.AA3((F=this.Mi.Q,F[1].call(F[0])));var As=this.Filter.DJ(4,3);if(!
!As){var Ajd=(A.Device.UInt32FilterCriterion.isPrototypeOf(As)?As:null);if(!!Ajd
){var YV=A._GetAutoObject(A.Device.Helper).X0(this.ArG);Ajd.AY=YV;}else A.aa8("%s"
,AdM);}},AYD:function(H){var Am2=!!this.Filter.DJ(this.Mi.D_,this.Mi.Operator);var
AnA=!!this.Filter.DJ(this.LC.D_,this.LC.Operator);this.OB.Aj(this.Y0);this.OB.An(
this.Y0);this.OB.W(this.Y0);this.OC.Aj(this.Y0);this.OC.An(this.Y0);this.OC.W(this.
Y0);this.Mi.Aj(Am2);this.Mi.An(Am2);this.Mi.W(Am2);this.LC.Aj(AnA);this.LC.An(AnA
);this.LC.W(AnA);},AoQ:function(E){if(this.Y0===E)return;this.Y0=E;A.aat([this,this.
A2i,this.AoQ],0);A.ow([this,this.AYD],this);},A9L:function(H){var Eh=(C.Ahx.isPrototypeOf(
H)?H:null);if(!Eh)return;var As=this.Filter.DJ(Eh.D_,Eh.Operator);if(!!As){this.
Filter.P7(As);A.aat([this,this.Fd,this.Fg],0);}else{if(Eh===this.OB){As=A._NewObject(
A.Device.UInt32FilterCriterion,0);As.EF=Eh.D_;As.Operator=Eh.Operator;(A.Device.
UInt32FilterCriterion.isPrototypeOf(As)?As:null).AY=A._GetAutoObject(A.Device.Helper
).X0(this.ArG);this.A8(this.Mi);}else if(Eh===this.OC){As=A._NewObject(A.Device.
UInt32FilterCriterion,0);As.EF=Eh.D_;As.Operator=Eh.Operator;(A.Device.UInt32FilterCriterion.
isPrototypeOf(As)?As:null).AY=A._GetAutoObject(A.Device.Helper).X0(this.ArH-1);this.
A8(this.LC);}if(!!As){this.Filter.CQ(As);A.aat([this,this.Fd,this.Fg],0);}}A.ow([
this,this.AYD],this);},BsQ:function(H){this.AoQ(!this.Y0);if(this.Y0===false){var
As=this.Filter.DJ(this.OA.D_,this.OA.Operator);while(!!As){this.Filter.P7(As);As=
this.Filter.DJ(this.OA.D_,this.OA.Operator);}A.aat([this,this.Fd,this.Fg],0);}},
Fd:function(){return this.Filter;},Bd$:function(){return this.Ash;},Bd_:function(
){return this.Asg;},BeL:function(){return this.ApR;},Beo:function(){return this.
Aoz;},A2_:function(){return this.AuG;},A29:function(){return this.AuF;},A28:function(
){return this.AaG;},A2l:function(){return this.ArH;},A2j:function(){return this.
ArG;},A2i:function(){return this.Y0;},_Init:function(aArg){C.Aw._Init.call(this,
aArg);C.Gender._Init.call(this.Gender={I:this},0);C.AnimalType._Init.call(this.AnimalType={
I:this},0);C.Ayj._Init.call(this.Transponder={I:this},0);C.Ayj._Init.call(this.D4={
I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.Ayu._Init.call(this.O_={I:
this},0);C.Ahx._Init.call(this.O$={I:this},0);C.Zv._Init.call(this.L2={I:this},0
);C.Ahx._Init.call(this.Pa={I:this},0);C.Zv._Init.call(this.Lk={I:this},0);C.Ayu.
_Init.call(this.OA={I:this},0);C.Ahx._Init.call(this.OB={I:this},0);C.Azd._Init.
call(this.Mi={I:this},0);C.Ahx._Init.call(this.OC={I:this},0);C.Azd._Init.call(this.
LC={I:this},0);C.AkO._Init.call(this.KA={I:this},0);C.AkO._Init.call(this.IU={I:
this},0);C.AkO._Init.call(this.Kb={I:this},0);C.AkO._Init.call(this.LU={I:this},
0);C.PC._Init.call(this.WF={I:this},0);C.PC._Init.call(this.RM={I:this},0);C.PC.
_Init.call(this.QH={I:this},0);C.AE._Init.call(this.AE={I:this},0);this.__proto__=
C.Iz;var B;this.N.W(true);this.N.Cd(A.z2(A.abg.AZm));this.Dw(C.ALd);this.Gender.
AD(this.Ash);this.AnimalType.AD(this.Asg);this.Transponder.AD(this.ApR);this.D4.
AD(this.Aoz);this.Ac.G(FN);this.Ac.Lf(1);this.O_.G(Ke);this.O_.Aj(true);this.O_.
U(A._GetAutoObject(A.Device.Helper).AkM(0,1));this.O_.My(1);this.O$.G(RT);this.O$.
Aj(true);this.O$.U(A.z2(A.abg.AAr));this.O$.My(1);this.O$.N3(2);this.L2.G(Yl);this.
L2.My(1);this.L2.N3(2);this.L2.ABY(A.z2(A.abg.Hu));this.Pa.G(Ai2);this.Pa.Aj(true
);this.Pa.U(A.z2(A.abg.ADj));this.Pa.My(1);this.Pa.N3(3);this.Lk.G(Al4);this.Lk.
Aj(true);this.Lk.My(1);this.Lk.N3(3);this.Lk.ABY(A.z2(A.abg.Hu));this.OA.G(ARX);
this.OA.Aj(true);this.OA.U(A.z2(A.abg.Sg));this.OA.My(4);this.OB.G(ARY);this.OB.
Aj(true);this.OB.U(A.z2(A.abg.AAr));this.OB.My(4);this.OB.N3(3);this.Mi.G(ARZ);this.
Mi.My(4);this.Mi.N3(3);this.Mi.A3Y(2);this.OC.G(AR0);this.OC.Aj(true);this.OC.U(
A.z2(A.abg.ADj));this.OC.My(4);this.OC.N3(2);this.LC.G(AR1);this.LC.Aj(true);this.
LC.My(4);this.LC.N3(2);this.LC.A3Y(3);this.KA.G(Ap_);this.KA.Aj(true);this.KA.My(
7);this.KA.Afz(0);this.KA.N3(0);this.IU.G(Vv);this.IU.Aj(true);this.IU.My(14);this.
IU.Afz(0);this.IU.N3(0);this.Kb.G(Vv);this.Kb.Aj(true);this.Kb.My(22);this.Kb.Afz(
0);this.Kb.N3(1);this.LU.G(Vv);this.LU.Aj(true);this.LU.My(26);this.LU.Afz(0);this.
LU.N3(1);this.WF.G(Vv);this.WF.Aj(true);this.WF.My(11);this.WF.Afz(0);this.WF.N3(
0);this.RM.G(Vv);this.RM.Aj(true);this.RM.My(12);this.RM.Afz(0);this.RM.N3(0);this.
QH.G(Vv);this.QH.Aj(true);this.QH.My(8);this.QH.Afz(0);this.QH.N3(0);this.AE.G(Ap9
);this.J(this.Ac,0);this.J(this.O_,0);this.J(this.O$,0);this.J(this.L2,0);this.J(
this.Pa,0);this.J(this.Lk,0);this.J(this.OA,0);this.J(this.OB,0);this.J(this.Mi,
0);this.J(this.OC,0);this.J(this.LC,0);this.J(this.KA,0);this.J(this.IU,0);this.
J(this.Kb,0);this.J(this.LU,0);this.J(this.WF,0);this.J(this.RM,0);this.J(this.QH
,0);this.J(this.AE,0);this.N.CB=[this,this.EY];this.N.Cm=[this,this.BsU];this.N.
C$(A.zW(A.abi.ET));this.Ac.Eu=[this,this.BtO];this.O_.AV=[this,this.BsR];this.O_.
AD([this,this.A28,this.Ape]);this.O$.AV=[this,this.A9N];this.L2.He([this,this.Es
,this.HW]);this.L2.AD([this,this.A29,this.AB6]);this.Pa.AV=[this,this.A9N];this.
Lk.He([this,this.Es,this.HW]);this.Lk.AD([this,this.A2_,this.AB7]);this.OA.AV=[this
,this.BsQ];this.OA.AD([this,this.A2i,this.AoQ]);this.OB.AV=[this,this.A9L];this.
Mi.He([this,this.Es,this.HW]);this.Mi.AD([this,this.A2j,this.AA3]);this.OC.AV=[this
,this.A9L];this.LC.He([this,this.Es,this.HW]);this.LC.AD([this,this.A2l,this.AA5
]);this.KA.AV=[this,this.Aw3];this.KA.AD([B=this.Gender,B.CA,B.CC]);this.KA.Dk(this.
Gender);this.IU.AV=[this,this.Aw3];this.IU.AD([B=this.AnimalType,B.CA,B.CC]);this.
IU.Dk(this.AnimalType);this.Kb.AV=[this,this.Aw3];this.Kb.AD([B=this.Transponder
,B.CA,B.CC]);this.Kb.Dk(this.Transponder);this.LU.AV=[this,this.Aw3];this.LU.AD([
B=this.D4,B.CA,B.CC]);this.LU.Dk(this.D4);this.WF.AV=[this,this.AXr];this.RM.AV=[
this,this.AXr];this.QH.AV=[this,this.AXr];this.Init(aArg);},_Done:function(){this.
__proto__=C.Aw;this.Gender._Done();this.AnimalType._Done();this.Transponder._Done(
);this.D4._Done();this.Ac._Done();this.O_._Done();this.O$._Done();this.L2._Done(
);this.Pa._Done();this.Lk._Done();this.OA._Done();this.OB._Done();this.Mi._Done(
);this.OC._Done();this.LC._Done();this.KA._Done();this.IU._Done();this.Kb._Done(
);this.LU._Done();this.WF._Done();this.RM._Done();this.QH._Done();this.AE._Done(
);C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.Gender.
_ReInit();this.AnimalType._ReInit();this.Transponder._ReInit();this.D4._ReInit();
this.Ac._ReInit();this.O_._ReInit();this.O$._ReInit();this.L2._ReInit();this.Pa.
_ReInit();this.Lk._ReInit();this.OA._ReInit();this.OB._ReInit();this.Mi._ReInit(
);this.OC._ReInit();this.LC._ReInit();this.KA._ReInit();this.IU._ReInit();this.Kb.
_ReInit();this.LU._ReInit();this.WF._ReInit();this.RM._ReInit();this.QH._ReInit(
);this.AE._ReInit();this.N.Cd(A.z2(A.abg.AZm));this.O$.U(A.z2(A.abg.AAr));this.L2.
ABY(A.z2(A.abg.Hu));this.Pa.U(A.z2(A.abg.ADj));this.Lk.ABY(A.z2(A.abg.Hu));this.
OA.U(A.z2(A.abg.Sg));this.OB.U(A.z2(A.abg.AAr));this.OC.U(A.z2(A.abg.ADj));},_Mark:
function(D){var B;C.Aw._Mark.call(this,D);if((B=this.Filter)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Transponder)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.D4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.O_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.L2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pa
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Mi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OC)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.LC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KA)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.IU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Kb
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.WF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.QH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalListFilterScreen"};C.A4S={X1:null,Bhn:
function(Bqv){var Ex=A._NewObject(C.A4R,0);Ex.Aw=Bqv;Ex.LV=this.X1;this.X1=Ex;},
A4y:function(){var TM=null;if(!!this.X1){TM=this.X1.Aw;this.X1=this.X1.LV;}return TM;
},Contains:function(Ajc){var Ex=this.X1;while(!!Ex){if(Ex.Aw.AlP===Ajc)return true;
Ex=Ex.LV;}return false;},Bhc:function(){if(!!this.X1)return this.X1.Aw;else return null;
},_Init:function(aArg){this.__proto__=C.A4S;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.X1)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ScreenStack"};C.A4R={Aw:null,
LV:null,_Init:function(aArg){this.__proto__=C.A4R;A.hJ++;},_Done:function(){this.
__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.
Aw)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LV)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::ScreenNode"};C.AH6={ANp:function(){A._GetAutoObject(
A.Device.Helper).Aue(this.Hz,0);A._GetAutoObject(C.A1).Fm();},A1V:function(){this.
Hz.Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A1).Fm();},A01:function(
){return A.zW(A.abi.Aom);},_Init:function(aArg){C.ACm._Init.call(this,aArg);this.
__proto__=C.AH6;this.Dw(C.Ig);},_className:"Application::AnimalActionRateScreen"
};C.AH2={XB:function(H){this.Aey();this.D0(A.z2(A.abg.AQj),[this,this.AOX],5);this.
D0(A.z2(A.abg.AZV),[this,this.Be7],4);this.D0(A.z2(A.abg.App),[this,this.Ao_],3);
this.D0(A.z2(A.abg.AfQ),[this,this.Aio],2);this.D0(A.z2(A.abg.AbK),[this,this.AoR
],1);this.D0(A.z2(A.abg.Aet),[this,this.Aig],0);A._GetAutoObject(C.Cz).IT();A._GetAutoObject(
C.Cz).V5(A.z2(A.abg.Aeu)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Co(
6);},DW:function(H){},Ack:function(){return C.AIS;},Acl:function(){return C.AzI;
},Rz:function(H){var Bb=A._GetAutoObject(A.Device.Helper).LP();var AvN=A._NewObject(
A.Device.BoolFilterCriterion,0);AvN.Initialize(8,0,true,true);Bb.CQ(AvN);A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);},HY:function(H){C.Gi.HY.call(this,H);if(this.Ah6()===
false){this.N.Cn(A.zW(A.abi.ACv));this.N.Ch=[this,this.A0l];this.N.Ft(A.jm);}this.
N.O4(false);this.N.O5(false);},Aeg:function(){A._GetAutoObject(C.A1).BY(40);},Aef:
function(){A._GetAutoObject(C.A1).BY(42);},_Init:function(aArg){C.Gi._Init.call(
this,aArg);this.__proto__=C.AH2;var B;this.Dw(C.AKJ);this.Et(A.z2(A.abg.Bdk));this.
Afw([B=A._GetAutoObject(A.Device.Device),B.A2m,B.A6u]);},_className:"Application::AlarmListScreen"
};C.AJg={DW:function(H){},Aq5:function(H){if(!!this.Bg)A.aa8("%i",this.Bg.Av.FM);
var Ab=(C.AyA.isPrototypeOf(H)?H:null);if(!!Ab){A._GetAutoObject(A.Device.Helper
).HU(Ab.Ho);A._GetAutoObject(C.A1).BY(13);}},Rz:function(H){var Bb=A._GetAutoObject(
A.Device.Helper).LP();var Av7=A._NewObject(A.Device.BoolFilterCriterion,0);Av7.Initialize(
9,0,true,true);Bb.CQ(Av7);A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);},HY:function(
H){C.Gi.HY.call(this,H);this.N.O4(false);this.N.O5(false);},_Init:function(aArg){
C.Gi._Init.call(this,aArg);this.__proto__=C.AJg;this.Dw(C.AKK);this.Et(A.z2(A.abg.
Bdl));},_className:"Application::ControlListScreen"};C.Acf={Filter:null,D_:0,IH:
10,TableId:0,Operator:1,C6:function(){var F;this.Sb((F=this.Filter,F[1].call(F[0
])).DJ(this.D_,this.Operator));},Bh:function(aSize){C.B_.Bh.call(this,aSize);this.
T.G(A.aaN(this.T.M,[aSize[0]-(2*this.IH),aSize[1]]));},Bo:function(E){if(A.z_(this.
Filter,E))return;if(!!this.Filter)A.zn([this,this.Lu],this.Filter,0);this.Filter=
E;if(!!E)A.za([this,this.Lu],E,0);A.ow([this,this.Lu],this);},Lu:function(H){var
F;if(!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Sb((F=this.Filter,F[1
].call(F[0])).DJ(this.D_,this.Operator));else this.Sb(null);},Afz:function(E){if(
this.TableId===E)return;this.TableId=E;A.ow([this,this.Lu],this);},My:function(E
){if(this.D_===E)return;this.D_=E;A.ow([this,this.Lu],this);},Sb:function(AK){if(
!!AK)this.U(A._GetAutoObject(A.Device.Helper).A0W(this.TableId,AK));else this.U(
A._GetAutoObject(A.Device.Helper).AkM(this.TableId,this.D_));},N3:function(E){if(
this.Operator===E)return;this.Operator=E;A.ow([this,this.Lu],this);},_Init:function(
aArg){C.B_._Init.call(this,aArg);this.__proto__=C.Acf;this.T.G(ADU);this.T.A0(0x11
);},_ReInit:function(){C.B_._ReInit.call(this);this.C6();},_Mark:function(D){var
B;C.B_._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);},_className:"Application::FilterItem"};C.PC={Hx:null,Bh:function(aSize){var B;
C.Acf.Bh.call(this,aSize);this.Hx.G([(aSize[0]-((B=this.Hx.M)[2]-B[0]))-10,0,aSize[
0]-10,aSize[1]]);this.T.G([this.IH,0,this.Hx.M[0]-this.IH,aSize[1]]);},Sb:function(
AK){this.U(A._GetAutoObject(A.Device.Helper).AkM(this.TableId,this.D_));var As=(
A.Device.BoolFilterCriterion.isPrototypeOf(AK)?AK:null);if(!!As&&As.AY)this.Hx.Ce(
1);else this.Hx.Ce(0);},_Init:function(aArg){C.Acf._Init.call(this,aArg);A.abh.Am.
_Init.call(this.Hx={I:this},0);this.__proto__=C.PC;this.Hx.G(ADV);this.Hx.Ce(0);
this.J(this.Hx,0);this.Hx.At(A.zW(A.abi.An6));},_Done:function(){this.__proto__=
C.Acf;this.Hx._Done();C.Acf._Done.call(this);},_ReInit:function(){C.Acf._ReInit.
call(this);this.Hx._ReInit();},_Mark:function(D){var B;C.Acf._Mark.call(this,D);
if((B=this.Hx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::BoolFilterItem"
};C.ALd={Am:null,Text:null,CZ:function(E){C.BW.CZ.call(this,E);this.Text.L(E);this.
Am.L(E);},_Init:function(aArg){C.BW._Init.call(this,aArg);A.abh.Am._Init.call(this.
Am={I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);this.__proto__=C.ALd;
this.Am.G(AR2);this.Text.G(AR3);this.Text.A0(0x11);this.Text.R(A.z2(A.abg.Filter
));this.J(this.Am,0);this.J(this.Text,0);this.Am.At(A.zW(A.abi.Act));this.Text.Y(
A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.BW;this.Am._Done();this.Text.
_Done();C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this);this.
Am._ReInit();this.Text._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(this,
D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeaderSetFilter"};C.Ass={CN:null,AX:null,
Um:null,Bh:function(aSize){var B;C.BW.Bh.call(this,aSize);this.Um.G(A.aaM(this.Um.
M,A.aaj(this.AX.M.slice(0,2),AR4)));this.Um.G(A.aaN(this.Um.M,A.aak([(B=this.AX.
M)[2]-B[0],B[3]-B[1]],AR5)));},Ah:function(Ae){var B;C.BW.Ah.call(this,Ae);var Gz=((
Ae&0x40)===0x40)&&(this.A6===this.AX);if(Gz)this.Um.L(A.iF.A6);else this.Um.L(A.
iF.AkT);},CZ:function(E){C.BW.CZ.call(this,E);this.CN.CZ(E);},Afo:function(){return this.
AX.Afo();},DS:function(E){this.CN.DS(E);},_Init:function(aArg){C.BW._Init.call(this
,aArg);C.CN._Init.call(this.CN={I:this},0);C.AX._Init.call(this.AX={I:this},0);A.
abh.CT._Init.call(this.Um={I:this},0);this.__proto__=C.Ass;this.CN.G(AR6);this.CN.
DS(0);this.AX.G(AR7);this.Um.G(ADW);this.Um.N7(2);this.J(this.CN,0);this.J(this.
AX,0);this.J(this.Um,0);this.A8(this.AX);},_Done:function(){this.__proto__=C.BW;
this.CN._Done();this.AX._Done();this.Um._Done();C.BW._Done.call(this);},_ReInit:
function(){C.BW._ReInit.call(this);this.CN._ReInit();this.AX._ReInit();this.Um._ReInit(
);},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.CN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Um)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearch"};C.Ds={C_:null,HT:
null,HS:null,Aed:function(H){if(this.FC<0)this.Mx(1);else if(this.FC===9)this.Mx(
0);else this.Mx(this.FC+1);A.ow(this.C_,this);},Ah:function(Ae){var B;C.FC.Ah.call(
this,Ae);var FV=((Ae&0x10)===0x10);var Gz=((Ae&0x40)===0x40);if(Gz){this.Background.
L(A.iF.A6);this.Text.L(A.iF.Be);this.DF(256);}else if(FV){this.Background.L(this.
Mj);this.Text.L(A.iF.Text);this.DF(256);}else{this.Background.L(this.Mj);this.Text.
L(A.iF.Text);this.DF(128);}},Aec:function(H){if(this.FC<=0)this.Mx(9);else this.
Mx(this.FC-1);A.ow(this.C_,this);},_Init:function(aArg){C.FC._Init.call(this,aArg
);A.Core.B1._Init.call(this.HT={I:this},0);A.Core.B1._Init.call(this.HS={I:this}
,0);this.__proto__=C.Ds;this.HT.Filter=4;this.HS.Filter=5;this.HT.B2=[this,this.
Aed];this.HT.Ea=[this,this.Aed];this.HS.B2=[this,this.Aec];this.HS.Ea=[this,this.
Aec];},_Done:function(){this.__proto__=C.FC;this.HT._Done();this.HS._Done();C.FC.
_Done.call(this);},_ReInit:function(){C.FC._ReInit.call(this);this.HT._ReInit();
this.HS._ReInit();},_Mark:function(D){var B;C.FC._Mark.call(this,D);if((B=this.C_
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.HS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputDigit"
};C.AX={C_:null,Cc:null,CI:null,Dg:null,D9:null,FD:null,ED:null,EU:null,EN:null,
Mn:0,AnM:false,Ah:function(Ae){var B;A.Core.O.Ah.call(this,Ae);if(((Ae&0x40)===0x40
)&&this.AnM)this.ED.Aii(true);else this.ED.Aii(false);},ABq:function(E){var B;if(
E===this.Afo())return;var AGA=E;var Eb=this.ED;while(!!Eb){if(AGA>0){Eb.Mx(AGA%10
);AGA=(AGA/10)|0;}else Eb.Mx(-1);Eb=(C.Ds.isPrototypeOf(B=this.Q8(Eb,2,0x11))?B:
null);}},Afo:function(){var B;var Kl=A.jm;var P=0;var BS=this.Cc;for(;P<6;P=P+1){
if(!!BS&&(BS.FC>=0))Kl=Kl+BS.FC.toFixed();BS=(C.Ds.isPrototypeOf(B=this.Zw(BS,0x11
))?B:null);}return A.vQ(Kl,-1,10);},NJ:function(H){if(this.Afo()>=10)this.A$l(7);
},Me:function(H){if((this.Afo()>0)&&(this.Cc.FC<0))this.A$l(2);else if(this.Afo(
)<=0)this.EN.PF=true;},Abn:function(H){A.ow(this.C_,this);},A$l:function(Ge){var
B;var AHn=0;var Eb=null;switch(Ge){case 2:{Eb=this.Cc;AHn=7;}break;case 7:{Eb=this.
ED;AHn=2;}break;default:throw new Error(AR8);}while(!!Eb){var AXk=(C.Ds.isPrototypeOf(
B=this.Q8(Eb,AHn,0x11))?B:null);if(!!AXk)Eb.Mx(AXk.FC);else if(AHn===7)Eb.Mx(0);
else Eb.Mx(-1);Eb=AXk;}A.ow([this,this.Abn],this);},Aii:function(E){if(this.AnM===
E)return;this.AnM=E;this.Al();},_Init:function(aArg){A.Core.O._Init.call(this,aArg
);C.Ds._Init.call(this.Cc={I:this},0);C.Ds._Init.call(this.CI={I:this},0);C.Ds._Init.
call(this.Dg={I:this},0);C.Ds._Init.call(this.D9={I:this},0);C.Ds._Init.call(this.
FD={I:this},0);C.Ds._Init.call(this.ED={I:this},0);A.Core.B1._Init.call(this.EU={
I:this},0);A.Core.B1._Init.call(this.EN={I:this},0);this.__proto__=C.AX;this.G(Au6
);this.Cc.AW(0x3);this.Cc.G(ADX);this.CI.AW(0x3);this.CI.G(ADY);this.Dg.AW(0x3);
this.Dg.G(ADZ);this.D9.AW(0x3);this.D9.G(AD0);this.FD.AW(0x3);this.FD.G(AD1);this.
ED.AW(0x3);this.ED.G(AD2);this.ED.Mx(0);this.EU.Filter=6;this.EN.Filter=7;this.Mn=
A.iF.CE;this.J(this.Cc,0);this.J(this.CI,0);this.J(this.Dg,0);this.J(this.D9,0);
this.J(this.FD,0);this.J(this.ED,0);this.A8(this.ED);this.Cc.C_=[this,this.Abn];
this.CI.C_=[this,this.Abn];this.Dg.C_=[this,this.Abn];this.D9.C_=[this,this.Abn];
this.FD.C_=[this,this.Abn];this.ED.C_=[this,this.Abn];this.EU.B2=[this,this.NJ];
this.EN.B2=[this,this.Me];},_Done:function(){this.__proto__=A.Core.O;this.Cc._Done(
);this.CI._Done();this.Dg._Done();this.D9._Done();this.FD._Done();this.ED._Done(
);this.EU._Done();this.EN._Done();A.Core.O._Done.call(this);},_ReInit:function(){
A.Core.O._ReInit.call(this);this.Cc._ReInit();this.CI._ReInit();this.Dg._ReInit(
);this.D9._ReInit();this.FD._ReInit();this.ED._ReInit();this.EU._ReInit();this.EN.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.C_)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.ED)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EU
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputID"};C.BaO="3a2df3d7";C.Bu$={Undefined:0,Bv$:1,Bvq:2};C.Aiw={
R$:null,AgN:null,Kx:null,AJk:null,AlS:null,push:function(L4){if(!this.R$){L4.AfC=
null;L4.LV=null;this.R$=L4;this.AgN=this.R$;}else{L4.AfC=this.AgN;L4.LV=null;this.
AgN.LV=L4;this.AgN=L4;}},Bul:function(L4){var Pl=this.R$;while(!!Pl){if(Pl.Jh.Id===
L4.Id)return Pl;Pl=Pl.LV;}return Pl;},Bt4:function(L4){if(L4===this.R$)this.pop(
);else if(L4===this.AgN){L4=L4.AfC;if(!!L4)L4.LV=null;this.AgN=L4;}else{L4.AfC.LV=
L4.LV;L4.LV.AfC=L4.AfC;}},Aft:function(E){var F;if(this.Kx===E)return;this.Kx=E;
if(!!this.Kx)this.Kx.AeN(2);(F=this.AJk,F[2].call(F[0],this.Kx));},TJ:function(H
){var Pl=(C.AO$.isPrototypeOf(H)?H:null);if(!!Pl){if(!Pl.Jh.PopupState){if(!this.
Kx)this.Aft(this.top());}else if(Pl.Jh.PopupState===4){this.pop();this.Aft(this.
top());}else if(Pl.Jh.PopupState===5){this.pop();this.Aft(this.top());}else if(Pl.
Jh.PopupState===7){this.pop();this.Aft(this.top());}else if(Pl.Jh.PopupState===8
){this.pop();this.Aft(this.top());}else if(Pl.Jh.PopupState===6){if(Pl===this.Kx
){this.pop();this.Aft(this.top());}else this.Bt4(Pl);}else if(Pl.Jh.PopupState===
3){this.pop();this.Aft(this.top());}}},pop:function(){var AGV=null;if(!!this.R$){
AGV=this.R$;if(this.R$===this.AgN){this.R$=null;this.AgN=null;}else{this.R$=this.
R$.LV;if(!this.R$)throw new Error(AR9);this.R$.AfC=null;}AGV.AfC=null;AGV.LV=null;
}return AGV;},top:function(){return this.R$;},BtP:function(H){var B;var Aq0=(A.Device.
PopupContext.isPrototypeOf(B=this.AlS.Jh)?B:null);if(!!Aq0){var AYk=this.Bul(Aq0
);if(!!AYk){AYk.A3z(Aq0);if(!Aq0.Show)AYk.AeN(6);}else if(Aq0.Show){var AGy=A._NewObject(
C.AO$,0);AGy.A3z(Aq0);AGy.AOg=[this,this.TJ];this.push(AGy);AGy.AeN(0);}}},_Init:
function(aArg){A.Core.A5d._Init.call(this.AlS={I:this},0);this.__proto__=C.Aiw;this.
AlS.ANL=[this,this.BtP];this.AlS.Bfw(A._GetAutoObject(A.Device.Device).Aly);A.hJ++;
},_Done:function(){this.__proto__=null;this.AlS._Done();A.hJ--;},_ReInit:function(
){this.AlS._ReInit();},_Mark:function(D){var B;if((B=this.R$)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.AgN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Kx)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AJk)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.AlS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle
!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::PopupQueue"
};C.AO$={Bv:null,LV:null,AfC:null,Jh:null,AOg:null,PopupIdToString:null,BL:function(
BpB,Bp_,Bqu,Bqj,Bql,Bqi,BpT){var TL=A._NewObject(C.AO_,0);TL.BgA(this.Jh.Id);TL.
A4f(BpB);TL.AOh=Bqi;TL.A4g(this.Jh.AiP);TL.A33(this.Jh.Aiv);TL.CX=A._NewObject(C.
N,0);TL.Nb().Cm=Bql;TL.Nb().Ch=null;TL.Nb().CB=Bqj;TL.Nb().Cd(Bqu);TL.Nb().Cn(null
);TL.Nb().GZ(Bp_);TL.Nb().ABs(BpT);return TL;},Aie:function(){if(!this.Bv){var BN=
this.PopupIdToString.Cb(this.Jh.Id);switch(this.Jh.Id){case 0:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 1:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 58:
this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.Md],[
this,this.BM],3);break;case 2:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,
this.CD],[this,this.BM],3);break;case 4:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.
abg.Yes),[this,this.Mc],[this,this.Md],[this,this.BM],1);break;case 16:this.Bv=this.
BL(BN,A.z2(A.abg.AbZ),A.jm,[this,this.Aq3],null,[this,this.BM],1);break;case 5:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case
9:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.Md
],[this,this.BM],3);break;case 6:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes
),[this,this.Mc],[this,this.Md],[this,this.BM],3);break;case 29:this.Bv=this.BL(
BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.Md],[this,this.BM],3
);break;case 27:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this
,this.BM],3);break;case 64:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.
CD],[this,this.BM],3);break;case 28:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[
this,this.CD],[this,this.BM],3);break;case 30:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.
Ok),null,[this,this.CD],[this,this.BM],3);break;case 42:this.Bv=this.BL(BN,A.z2(
A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.Md],[this,this.BM],3);break;
case 91:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.
Md],[this,this.BM],1);break;case 41:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[
this,this.CD],[this,this.BM],3);break;case 50:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.
Ok),null,[this,this.CD],[this,this.BM],3);break;case 51:this.Bv=this.BL(BN,A.jm,
A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 57:this.Bv=this.
BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 52:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case
53:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);
break;case 56:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.
BM],3);break;case 45:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[
this,this.BM],3);break;case 46:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this
,this.CD],[this,this.BM],1);break;case 77:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok)
,null,[this,this.CD],[this,this.BM],3);break;case 78:this.Bv=this.BL(BN,A.jm,A.z2(
A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 79:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 3:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 10:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;
case 7:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.
Md],[this,this.BM],1);break;case 33:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.
Yes),[this,this.Mc],[this,this.Md],[this,this.BM],1);break;case 8:this.Bv=this.BL(
BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 34:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case
82:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);
break;case 83:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.
BM],3);break;case 80:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[
this,this.BM],3);break;case 81:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this
,this.CD],[this,this.BM],3);break;case 92:this.Bv=this.BL(BN,A.jm,A.jm,null,null
,[this,this.BM],0);break;case 93:this.Bv=this.BL(BN,A.jm,A.jm,null,null,[this,this.
BM],0);break;case 44:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.
Mc],[this,this.Md],[this,this.BM],1);break;case 37:this.Bv=this.BL(BN,A.z2(A.abg.
No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.Md],[this,this.BM],1);break;case 38:
this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.Md],[
this,this.BM],1);break;case 39:this.Bv=this.BL(BN,A.z2(A.abg.AbZ),A.z2(A.abg.Ok)
,[this,this.Mc],[this,this.Md],[this,this.BM],3);break;case 76:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 40:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 75:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;
case 11:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM
],3);break;case 12:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this
,this.BM],3);break;case 13:this.Bv=this.BL(BN,A.z2(A.abg.AbZ),A.z2(A.abg.Bhy),[this
,this.Aq3],[this,this.CD],[this,this.BM],3);break;case 36:this.Bv=this.BL(BN,A.jm
,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 14:this.Bv=this.
BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 15:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case
35:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);
break;case 21:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.
BM],3);break;case 22:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[
this,this.BM],3);break;case 63:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes)
,[this,this.Mc],[this,this.Md],[this,this.BM],1);break;case 43:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 85:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 24:
this.Bv=this.BL(BN,A.z2(A.abg.AbZ),A.jm,[this,this.Aq3],null,[this,this.BM],1);break;
case 49:this.Bv=this.BL(BN,A.z2(A.abg.AbZ),A.jm,[this,this.Aq3],null,[this,this.
BM],1);break;case 26:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[
this,this.BM],3);break;case 23:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this
,this.CD],[this,this.BM],3);break;case 25:this.Bv=this.BL(BN,A.z2(A.abg.AbZ),A.z2(
A.abg.Ok),[this,this.Aq3],[this,this.CD],[this,this.BM],3);break;case 32:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 69:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;
case 47:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.
Md],[this,this.BM],3);break;case 48:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.
Yes),[this,this.Mc],[this,this.Md],[this,this.BM],3);break;case 59:this.Bv=this.
BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.Md],[this,this.BM
],3);break;case 17:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this
,this.BM],3);break;case 19:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.
CD],[this,this.BM],3);break;case 54:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[
this,this.CD],[this,this.BM],3);break;case 18:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.
Ok),null,[this,this.CD],[this,this.BM],3);break;case 20:this.Bv=this.BL(BN,A.jm,
A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 55:this.Bv=this.
BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 62:this.
Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case
60:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);
break;case 65:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.
BM],3);break;case 66:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[
this,this.BM],3);break;case 61:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this
,this.CD],[this,this.BM],3);break;case 31:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok)
,null,[this,this.CD],[this,this.BM],3);break;case 67:this.Bv=this.BL(BN,A.jm,A.z2(
A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 86:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 68:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 70:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;
case 71:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM
],3);break;case 72:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.
Mc],[this,this.Md],[this,this.BM],3);break;case 88:this.Bv=this.BL(BN,A.jm,A.z2(
A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 89:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 90:this.Bv=
this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.Mc],[this,this.Md],[this,this.
BM],3);break;case 73:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.
Mc],[this,this.Md],[this,this.BM],3);break;case 74:this.Bv=this.BL(BN,A.z2(A.abg.
AbZ),A.jm,[this,this.Aq3],null,[this,this.BM],1);break;case 84:this.Bv=this.BL(BN
,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 94:this.Bv=
this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;case 95:
this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM],3);break;
case 87:this.Bv=this.BL(BN,A.jm,A.z2(A.abg.Ok),null,[this,this.CD],[this,this.BM
],3);break;case 96:this.Bv=this.BL(BN,A.z2(A.abg.No),A.z2(A.abg.Yes),[this,this.
Mc],[this,this.Md],[this,this.BM],1);break;default:A.aa8("%s",(AR_+this.Jh.Id.toFixed(
))+AR$);}}switch(this.Jh.Id){case 16:this.Bv.AB$(true);break;case 49:this.Bv.AB$(
true);break;case 92:this.Bv.AB$(false);break;case 93:this.Bv.AB$(false);break;default:;
}return this.Bv;},CD:function(H){this.AeN(4);},Aq3:function(H){this.AeN(5);},Md:
function(H){this.AeN(7);},Mc:function(H){this.AeN(8);},BM:function(H){this.AeN(3
);},A3z:function(E){if(this.Jh===E)return;this.Jh=E;if(!!this.Bv){this.Aie().A4g(
this.Jh.AiP);this.Aie().A33(this.Jh.Aiv);}},AeN:function(Bqo){var B;this.Jh.BgB(
Bqo);(B=this.AOg)?B[1].call(B[0],this):null;},Btm:function(H){this.AeN(9);},_Init:
function(aArg){A.Device.PopupIdToString._Init.call(this.PopupIdToString={I:this}
,0);this.__proto__=C.AO$;A.hJ++;},_Done:function(){this.__proto__=null;this.PopupIdToString.
_Done();A.hJ--;},_ReInit:function(){this.PopupIdToString._ReInit();},_Mark:function(
D){var B;if((B=this.Bv)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LV)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.AfC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Jh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AOg)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.PopupIdToString)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Application::PopupEntry"};C.Fv={BooleanToYesNo:null,Dx:function(){return 2;
},Dd:function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},GS:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.BooleanToYesNo.Cb(aIndex
);},DX:function(A2){return A2;},HP:function(){return 1;},_Init:function(aArg){C.
AC._Init.call(this,aArg);A.Device.BooleanToYesNo._Init.call(this.BooleanToYesNo={
I:this},0);this.__proto__=C.Fv;},_Done:function(){this.__proto__=C.AC;this.BooleanToYesNo.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
BooleanToYesNo._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.BooleanToYesNo)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::YesNo"
};C.Adl={SZ:null,JB:function(H){var F;var BR=this.AI;this.Bu(this.AI+1);if(this.
AI!==BR){if(!!this.SZ&&!!this.AC)switch(this.AC.Dd(this.AI)){case 0:(F=this.SZ,F[
2].call(F[0],false));break;case 1:(F=this.SZ,F[2].call(F[0],true));break;default:;
}A.aat(this.SZ,0);}},Jw:function(H){var F;var BR=this.AI;this.Bu(this.AI-1);if(this.
AI!==BR){if(!!this.SZ&&!!this.AC)switch(this.AC.Dd(this.AI)){case 0:(F=this.SZ,F[
2].call(F[0],false));break;case 1:(F=this.SZ,F[2].call(F[0],true));break;default:;
}A.aat(this.SZ,0);}},Aip:function(E){if(A.z_(this.SZ,E))return;if(!!this.Q)A.zn([
this,this.AX1],this.SZ,0);this.SZ=E;if(!!E)A.za([this,this.AX1],E,0);if(!!E)A.ow([
this,this.AX1],this);},AX1:function(H){var F;if(!!this.SZ){if((F=this.SZ,F[1].call(
F[0])))this.Bu(1);else this.Bu(0);}},_Init:function(aArg){C.B$._Init.call(this,aArg
);this.__proto__=C.Adl;},_Mark:function(D){var B;C.B$._Mark.call(this,D);if((B=this.
SZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::SettingsItemBoolValue"
};C.APi={IL:null,N$:null,Io:null,FE:null,AH:null,Zn:null,AeS:null,St:null,QY:null
,Aaz:null,Vd:null,Gb:null,Ax0:true,Init:function(aArg){var B;A.za([this,this.AjW
],[B=A._GetAutoObject(A.Device.Device),B.AN_,B.AUW],0);A.ow([this,this.AjW],this
);},Ah:function(Ae){var F;C.Aw.Ah.call(this,Ae);if(this.Ax0)this.N.De(A.zW(A.abi.
AMu));else this.N.De(A.zW(A.abi.AMv));if(A._GetAutoObject(A.Device.Device).ScanState===
4){this.N$.L(A.iF.Be);this.QY.W(false);this.St.W(false);this.Io.W(true);this.FE.
An(false);(F=this.FE.Q,F[2].call(F[0],this.FE.BX));this.Background.L(A.iF.F0);}else
if(this.Zn.Bw){this.N$.L(A.iF.Text);this.QY.W(true);this.St.W(true);this.Io.W(false
);this.FE.An(false);(F=this.FE.Q,F[2].call(F[0],this.FE.BX));this.Background.L(A.
iF.E1);}else{this.N$.L(A.iF.Text);this.QY.W(false);this.St.W(false);this.Io.W(true
);this.FE.An(true);this.Background.L(A.iF.CE);}if(this.AeS.Bw)this.Vd.W(true);else
this.Vd.W(false);},CF:function(H){A._GetAutoObject(A.Device.Device).Adn();},Fc:function(
H){A._GetAutoObject(A.Device.Device).AlJ();A._GetAutoObject(A.Device.Device).Ac5(
false);A._GetAutoObject(A.Device.Device).Aag(false);},AjW:function(H){var B;this.
Al();switch(A._GetAutoObject(A.Device.Device).ScanState){case 2:A.ow([this,this.
Bs2],this);break;case 3:{A.ow([this,this.A_h],this);A.ow([B=this.Zn,B.AC0],this);
A.ow(this.Zn.Mz,this);}break;case 4:A.aa8("%s",ASa);break;default:;}},EY:function(
H){A._GetAutoObject(C.A1).Fm();},BtQ:function(H){this.Bg2(!this.Ax0);},Bg2:function(
E){if(this.Ax0===E)return;this.Ax0=E;if(!E)A._GetAutoObject(A.Device.Device).Ac5(
false);this.Al();},Bs2:function(H){var B;this.A_h(this);if(this.Ax0)A._GetAutoObject(
A.Device.Device).Ac5(true);A._GetAutoObject(A.Device.Device).Ac3(65280);A._GetAutoObject(
A.Device.Device).Aag(true);A.ow([B=this.Zn,B.StartTimer],this);A.ow([B=this.AeS,
B.StartTimer],this);this.Al();},Bs3:function(H){A._GetAutoObject(A.Device.Device
).Ac5(false);A._GetAutoObject(A.Device.Device).Aag(false);this.Al();},Bs5:function(
H){this.Al();},A_h:function(H){A._GetAutoObject(A.Device.Device).Adn();},_Init:function(
aArg){C.Aw._Init.call(this,aArg);C.IL._Init.call(this.IL={I:this},0);C.CG._Init.
call(this.N$={I:this},0);A.abh.Am._Init.call(this.Io={I:this},0);A.abm.FE._Init.
call(this.FE={I:this},0);A.abh.AH._Init.call(this.AH={I:this},0);A.Core.Timer._Init.
call(this.Zn={I:this},0);A.Core.Timer._Init.call(this.AeS={I:this},0);A.abh.Am._Init.
call(this.St={I:this},0);A.abh.Am._Init.call(this.QY={I:this},0);A.abh.Text._Init.
call(this.Aaz={I:this},0);C.Vd._Init.call(this.Vd={I:this},0);C.CG._Init.call(this.
Gb={I:this},0);this.__proto__=C.APi;var B;this.Background.L(A.iF.CE);this.N.W(true
);this.IL.G(ASb);this.IL.Ais(0);this.N$.G(ASc);this.N$.R(A.z2(A.abg.A5j));this.N$.
L(A.iF.Text);this.Io.G(ASd);this.Io.L(A.iF.A6);this.Io.XD(true);this.FE.FK(1750);
this.FE.Aab(750);this.FE.Aim(0);this.FE.An(true);this.FE.BX=3;this.AH.G(Au7);this.
Zn.P4(-1);this.Zn.UR(1000);this.AeS.P4(-1);this.AeS.UR(5000);this.St.G(AD3);this.
QY.G(AD3);this.QY.L(A.iF.E1);this.Aaz.G(Au7);this.Aaz.R(A.z2(A.abg.A4T));this.Aaz.
L(A.iF.Text);this.Vd.G(Au7);this.Gb.G(ASe);this.Gb.An(false);this.Gb.R(A.z2(A.abg.
RangeTest));this.Gb.L(A.iF.Text);this.J(this.IL,0);this.J(this.N$,0);this.J(this.
Io,0);this.J(this.AH,0);this.J(this.St,0);this.J(this.QY,0);this.J(this.Aaz,0);this.
J(this.Vd,0);this.J(this.Gb,0);this.N.CB=[this,this.EY];this.N.Cm=[this,this.BtQ
];this.N.C$(A.zW(A.abi.ET));this.N$.Y(A.zW(A.eV.Au));this.N$.By(A.zW(A.eV.Az));this.
N$.C5(A.zW(A.eV.Cr));this.Io.At(A.zW(A.abi.Az_));this.FE.Q=[B=this.Io,B.ANX,B.Ce
];this.Zn.Mz=[this,this.Bs3];this.AeS.Mz=[this,this.Bs5];this.St.At(A.zW(A.abi.St
));this.QY.At(A.zW(A.abi.QY));this.Aaz.Y(A.zW(A.eV.Au));this.Vd.AD([B=A._GetAutoObject(
A.Device.Device),B.AN$,B.AUX]);this.Gb.Y(A.zW(A.eV.OK));this.Gb.By(A.zW(A.eV.K7)
);this.Init(aArg);},_Done:function(){this.__proto__=C.Aw;this.IL._Done();this.N$.
_Done();this.Io._Done();this.FE._Done();this.AH._Done();this.Zn._Done();this.AeS.
_Done();this.St._Done();this.QY._Done();this.Aaz._Done();this.Vd._Done();this.Gb.
_Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.
IL._ReInit();this.N$._ReInit();this.Io._ReInit();this.FE._ReInit();this.AH._ReInit(
);this.Zn._ReInit();this.AeS._ReInit();this.St._ReInit();this.QY._ReInit();this.
Aaz._ReInit();this.Vd._ReInit();this.Gb._ReInit();this.N$.R(A.z2(A.abg.A5j));this.
Aaz.R(A.z2(A.abg.A4T));this.Gb.R(A.z2(A.abg.RangeTest));this.N$.Y(A.zW(A.eV.Au));
this.N$.By(A.zW(A.eV.Az));this.N$.C5(A.zW(A.eV.Cr));this.Aaz.Y(A.zW(A.eV.Au));this.
Gb.Y(A.zW(A.eV.OK));this.Gb.By(A.zW(A.eV.K7));},_Mark:function(D){var B;C.Aw._Mark.
call(this,D);if((B=this.IL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.N$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Io)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FE
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AH)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Zn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.St)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aaz)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vd)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::RangeTestScreen"};C.ZZ={ScreenType:0,Ru:function(E){if(this.ScreenType===
E)return;this.ScreenType=E;},Rw:function(H){A._GetAutoObject(C.A1).BY(this.ScreenType
);},_Init:function(aArg){C.B_._Init.call(this,aArg);this.__proto__=C.ZZ;},_className:
"Application::MenuItemScreen"};C.AcJ={Ab0:null,Ml:null,Aks:false,Init:function(aArg
){},Ah:function(Ae){C.B_.Ah.call(this,Ae);if(this.Aks){this.Ml.Ce(1);this.Ml.L(A.
iF.HB);}else{this.Ml.Ce(0);if(this.Kq)this.Ml.L(A.iF.Be);else if(this.GY)this.Ml.
L(A.iF.Text);else this.Ml.L(A.iF.Be);}},JE:function(H){var F,Dc;if(!!this.Ab0){(
Dc=this.Ab0,Dc[2].call(Dc[0],!(F=this.Ab0,F[1].call(F[0]))));this.ABb((F=this.Ab0
,F[1].call(F[0])));A.ow([this,this.DD],this);}},AXz:function(H){this.Kq=true;this.
DD(this);},ABb:function(E){if(this.Aks===E)return;this.Aks=E;this.DD(this);this.
Al();},AXV:function(H){var F;this.ABb((F=this.Ab0,F[1].call(F[0])));},AVc:function(
s){this.AXV(s);},DD:function(H){var F;if(!this.N||!this.Kq)return;if(this.Aks){(
F=this.N,F[1].call(F[0])).Cd(A.z2(A.abg.Off));(F=this.N,F[1].call(F[0])).IK.Y(A.
zW(A.eV.Az));}else{(F=this.N,F[1].call(F[0])).Cd(A.z2(A.abg.A2b));(F=this.N,F[1].
call(F[0])).IK.Y(A.zW(A.eV.Az));}(F=this.N,F[1].call(F[0])).Al();},A3u:function(
E){if(A.z_(this.Ab0,E))return;if(!!this.Ab0)A.zn([this,this.AVc],this.Ab0,0);this.
Ab0=E;if(!!E)A.za([this,this.AVc],E,0);if(!!E)A.ow([this,this.AVc],this);},_Init:
function(aArg){C.B_._Init.call(this,aArg);A.abh.Am._Init.call(this.Ml={I:this},0
);this.__proto__=C.AcJ;this.T.L(A.iF.HB);this.Ml.G(AD4);this.Ml.Ce(0);this.J(this.
Ml,0);this.Ml.At(A.zW(A.abi.An6));this.Init(aArg);},_Done:function(){this.__proto__=
C.B_;this.Ml._Done();C.B_._Done.call(this);},_ReInit:function(){C.B_._ReInit.call(
this);this.Ml._ReInit();},_Mark:function(D){var B;C.B_._Mark.call(this,D);if((B=
this.Ab0)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ml)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MenuItemCheckBox"};C.AJr={Hw:null,Ii:null
,_Init:function(aArg){C.CJ._Init.call(this,aArg);C.AlH._Init.call(this.Hw={I:this
},0);C.ACM._Init.call(this.Ii={I:this},0);this.__proto__=C.AJr;var B;this.Lg(A.z2(
A.abg.AyU));this.Hw.G(Ai3);this.Hw.Aj(true);this.Hw.U(A.z2(A.abg.Date));this.Hw.
Bk(true);this.Ii.G(Af4);this.Ii.Aj(true);this.Ii.U(A.z2(A.abg.Bp));this.J(this.Hw
,0);this.J(this.Ii,0);this.Hw.Afr([B=this.Hw,B.GC]);this.Hw.He([this,this.Es,this.
HW]);this.Hw.Ail(A.zW(A.abi.Edit));this.Hw.Ac2([B=A._GetAutoObject(A.Device.Helper
),B.Tq,B.Tr]);this.Ii.Afr([B=this.Ii,B.GC]);this.Ii.He([this,this.Es,this.HW]);this.
Ii.Ail(A.zW(A.abi.Edit));this.Ii.Ac2([B=A._GetAutoObject(A.Device.Helper),B.Tq,B.
Tr]);},_Done:function(){this.__proto__=C.CJ;this.Hw._Done();this.Ii._Done();C.CJ.
_Done.call(this);},_ReInit:function(){C.CJ._ReInit.call(this);this.Hw._ReInit();
this.Ii._ReInit();this.Lg(A.z2(A.abg.AyU));this.Hw.U(A.z2(A.abg.Date));this.Ii.U(
A.z2(A.abg.Bp));},_Mark:function(D){var B;C.CJ._Mark.call(this,D);if((B=this.Hw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::DateTimeSettingsScreen"};C.AQb={P$:null,G9:null,Dj:null,NY:null,W2:
null,Wd:null,_Init:function(aArg){C.CJ._Init.call(this,aArg);C.P$._Init.call(this.
P$={I:this},0);C.AIp._Init.call(this.G9={I:this},0);C.APN._Init.call(this.Dj={I:
this},0);C.APP._Init.call(this.NY={I:this},0);C.Adl._Init.call(this.W2={I:this},
0);C.Wd._Init.call(this.Wd={I:this},0);this.__proto__=C.AQb;var B;this.Lg(A.z2(A.
abg.Temperature));this.Dj.G(ASf);this.Dj.Aj(true);this.Dj.U(A.z2(A.abg.AAw));this.
Dj.Bk(false);this.NY.G(Ai4);this.NY.Aj(true);this.NY.U(A.z2(A.abg.Undertemperature
));this.NY.Bk(true);this.NY.Bu(3800);this.NY.Hy(3000);this.NY.FS(5000);this.NY.A4n(
A.z2(A.abg.AC4));this.W2.G(ASg);this.W2.Aj(true);this.W2.W(true);this.W2.U(A.z2(
A.abg.AZk));this.J(this.Dj,0);this.J(this.NY,0);this.J(this.W2,0);this.Dj.Afr([B=
this.Dj,B.GC]);this.Dj.He([this,this.Es,this.HW]);this.Dj.Ail(A.zW(A.abi.Edit));
this.Dj.Nc([B=this.Dj,B.AvB]);this.Dj.Nd(A.zW(A.abi.AlC));this.Dj.AD([B=this.G9,
B.CA,B.CC]);this.Dj.Dk(this.G9);this.Dj.A31([B=this.G9,B.AOe,B.AU1]);this.Dj.A30([
B=this.G9,B.AOd,B.AU0]);this.NY.Nc([B=this.Dj,B.AvB]);this.NY.Nd(A.zW(A.abi.AlC)
);this.NY.AD([B=A._GetAutoObject(A.Device.Device),B.A26,B.A6S]);this.W2.Dk(this.
Wd);this.W2.Aip([B=A._GetAutoObject(A.Device.Device),B.A2z,B.A6D]);},_Done:function(
){this.__proto__=C.CJ;this.P$._Done();this.G9._Done();this.Dj._Done();this.NY._Done(
);this.W2._Done();this.Wd._Done();C.CJ._Done.call(this);},_ReInit:function(){C.CJ.
_ReInit.call(this);this.P$._ReInit();this.G9._ReInit();this.Dj._ReInit();this.NY.
_ReInit();this.W2._ReInit();this.Wd._ReInit();this.Lg(A.z2(A.abg.Temperature));this.
Dj.U(A.z2(A.abg.AAw));this.NY.U(A.z2(A.abg.Undertemperature));this.NY.A4n(A.z2(A.
abg.AC4));this.W2.U(A.z2(A.abg.AZk));},_Mark:function(D){var B;C.CJ._Mark.call(this
,D);if((B=this.P$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NY)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wd
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TemperatureSettingsScreen"
};C.AJB={OW:null,OX:null,Re:null,Uo:null,Rg:null,Rf:null,Fv:null,Aat:null,Init:function(
aArg){A.za([this,this.Big],this.OX.Q,0);},Big:function(H){var F;A._GetAutoObject(
A.Device.Device).AtR((F=this.OX.Q,F[1].call(F[0])));},_Init:function(aArg){C.CJ.
_Init.call(this,aArg);C.JS._Init.call(this.OW={I:this},0);C.B$._Init.call(this.OX={
I:this},0);C.Adl._Init.call(this.Re={I:this},0);C.JS._Init.call(this.Uo={I:this}
,0);C.Adl._Init.call(this.Rg={I:this},0);C.Adl._Init.call(this.Rf={I:this},0);C.
Fv._Init.call(this.Fv={I:this},0);C.Aat._Init.call(this.Aat={I:this},0);this.__proto__=
C.AJB;var B;this.N.G(Vv);this.Lg(A.z2(A.abg.Device));this.OW.G(Ai3);this.OW.Aj(true
);this.OW.U(A.z2(A.abg.A44));this.OW.Bk(false);this.OW.Hy(2);this.OW.FS(60);this.
OW.Ng(A.z2(A.abg.ADh));this.OW.N5(A.z2(A.abg.ADh));this.OX.G(Au8);this.OX.Aj(true
);this.OX.U(A.z2(A.abg.A4$));this.OX.Bk(true);this.OX.Bu(0);this.OX.Hy(-1);this.
OX.FS(1);this.Re.G(Ai4);this.Re.Aj(true);this.Re.U(A.z2(A.abg.G$));this.Re.Bk(false
);this.Re.Bu(0);this.Re.Hy(-1);this.Re.FS(1);this.Uo.G(Ai5);this.Uo.Aj(true);this.
Uo.U(A.z2(A.abg.AZQ));this.Uo.Bk(true);this.Uo.Ng(AdN);this.Uo.N5(AdN);this.Rg.G(
ASh);this.Rg.Aj(true);this.Rg.U(A.z2(A.abg.ApU));this.Rg.Bk(false);this.Rg.Bu(1);
this.Rg.Hy(-1);this.Rg.FS(1);this.Rf.G(AD5);this.Rf.Aj(true);this.Rf.U(A.z2(A.abg.
Apx));this.Rf.Bk(true);this.Rf.Bu(0);this.Rf.Hy(-1);this.Rf.FS(1);this.Aat.AD(A.
_GetAutoObject(A.Device.Device).Auq);this.J(this.OW,0);this.J(this.OX,0);this.J(
this.Re,0);this.J(this.Uo,0);this.J(this.Rg,0);this.J(this.Rf,0);this.OW.AD([B=A.
_GetAutoObject(A.Device.Device),B.A2X,B.A6N]);this.OX.AD([B=this.Aat,B.CA,B.CC]);
this.OX.Dk(this.Aat);this.Re.Dk(this.Fv);this.Re.Aip([B=A._GetAutoObject(A.Device.
Device),B.AAR,B.AEQ]);this.Uo.AD([B=A._GetAutoObject(A.Device.Device),B.A2w,B.A6A
]);this.Rg.Dk(this.Fv);this.Rg.Aip([B=A._GetAutoObject(A.Device.Device),B.A27,B.
A6T]);this.Rf.Dk(this.Fv);this.Rf.Aip([B=A._GetAutoObject(A.Device.Device),B.AN0
,B.AUP]);this.Init(aArg);},_Done:function(){this.__proto__=C.CJ;this.OW._Done();
this.OX._Done();this.Re._Done();this.Uo._Done();this.Rg._Done();this.Rf._Done();
this.Fv._Done();this.Aat._Done();C.CJ._Done.call(this);},_ReInit:function(){C.CJ.
_ReInit.call(this);this.OW._ReInit();this.OX._ReInit();this.Re._ReInit();this.Uo.
_ReInit();this.Rg._ReInit();this.Rf._ReInit();this.Fv._ReInit();this.Aat._ReInit(
);this.Lg(A.z2(A.abg.Device));this.OW.U(A.z2(A.abg.A44));this.OW.Ng(A.z2(A.abg.ADh
));this.OW.N5(A.z2(A.abg.ADh));this.OX.U(A.z2(A.abg.A4$));this.Re.U(A.z2(A.abg.G$
));this.Uo.U(A.z2(A.abg.AZQ));this.Rg.U(A.z2(A.abg.ApU));this.Rf.U(A.z2(A.abg.Apx
));},_Mark:function(D){var B;C.CJ._Mark.call(this,D);if((B=this.OW)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.OX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Re)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Rg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rf)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Fv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aat)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::DeviceSettingsScreen"};C.APs={Rh:null,OQ:null,GX:null
,PN:null,Un:null,PM:null,Dj:null,FF:null,AA1:null,AnimalType:null,WeightRecordingScope:
null,Gender:null,AutoRegistrationMode:null,EartagNrAssignmentMode:null,Breed:null
,Zb:null,Init:function(aArg){A.za([this,this.AIr],this.Dj.Q,0);A.za([this,this.BaD
],this.FF.Q,0);A.za([this,this.BjI],this.Rh.Q,0);A.za([this,this.AKq],this.GX.Q,
0);A.za([this,this.Bal],this.PN.Q,0);A.za([this,this.Bbs],this.PM.Q,0);},AIr:function(
H){var F;A._GetAutoObject(A.Device.Device).DS((F=this.Dj.Q,F[1].call(F[0])));},BjI:
function(H){var F;A._GetAutoObject(A.Device.Device).At0((F=this.Rh.Q,F[1].call(F[
0])));},AKq:function(H){var F;A._GetAutoObject(A.Device.Device).J9((F=this.GX.Q,
F[1].call(F[0])));},Bal:function(H){var F;A._GetAutoObject(A.Device.Device).Ath((
F=this.PN.Q,F[1].call(F[0])));},Bbs:function(H){var F;A._GetAutoObject(A.Device.
Device).Alj((F=this.PM.Q,F[1].call(F[0])));},BaD:function(H){var F;A._GetAutoObject(
A.Device.Device).O2((F=this.FF.Q,F[1].call(F[0])));},_Init:function(aArg){C.CJ._Init.
call(this,aArg);C.B$._Init.call(this.Rh={I:this},0);C.JS._Init.call(this.OQ={I:this
},0);C.B$._Init.call(this.GX={I:this},0);C.B$._Init.call(this.PN={I:this},0);C.Rl.
_Init.call(this.Un={I:this},0);C.APK._Init.call(this.PM={I:this},0);C.B$._Init.call(
this.Dj={I:this},0);C.ACK._Init.call(this.FF={I:this},0);C.Wd._Init.call(this.AA1={
I:this},0);C.AnimalType._Init.call(this.AnimalType={I:this},0);C.WeightRecordingScope.
_Init.call(this.WeightRecordingScope={I:this},0);C.Gender._Init.call(this.Gender={
I:this},0);C.AutoRegistrationMode._Init.call(this.AutoRegistrationMode={I:this},
0);C.EartagNrAssignmentMode._Init.call(this.EartagNrAssignmentMode={I:this},0);C.
Breed._Init.call(this.Breed={I:this},0);A.Device.MV._Init.call(this.Zb={I:this},
0);this.__proto__=C.APs;var B;this.Lg(A.z2(A.abg.ACu));this.Rh.G(Ai3);this.Rh.Aj(
true);this.Rh.U(A.z2(A.abg.A5E));this.Rh.Bk(true);this.Rh.Bu(0);this.OQ.G(Au5);this.
OQ.Aj(true);this.OQ.W(true);this.OQ.U(A.z2(A.abg.Akk));this.OQ.Hy(0);this.OQ.FS(
99);this.OQ.Ng(A.z2(A.abg.Ky));this.OQ.N5(A.z2(A.abg.GD));this.GX.G(Ai4);this.GX.
Aj(true);this.GX.U(A.z2(A.abg.Aug));this.GX.Bk(true);this.GX.Bu(0);this.PN.G(Ai5
);this.PN.Aj(true);this.PN.U(A.z2(A.abg.AZw));this.PN.Bk(false);this.PN.Hy(-1);this.
PN.FS(1);this.Un.G(Ap$);this.Un.Aj(true);this.Un.U(A.z2(A.abg.AZu));this.Un.Bk(true
);this.Un.Ru(55);this.PM.G(Ai5);this.PM.Aj(true);this.PM.U(A.z2(A.abg.AZp));this.
PM.Bk(false);this.PM.Hy(-1);this.PM.FS(1);this.Dj.G(ASi);this.Dj.Aj(true);this.Dj.
U(A.z2(A.abg.AuA));this.Dj.Bk(true);this.Dj.Bu(0);this.FF.G(Ai5);this.FF.Aj(true
);this.FF.U(A.z2(A.abg.Breed));this.FF.Bk(false);this.AnimalType.AD(A._GetAutoObject(
A.Device.Device).AnimalType);this.WeightRecordingScope.AD(A._GetAutoObject(A.Device.
Device).WeightRecordingScope);this.Gender.AD(A._GetAutoObject(A.Device.Device).Gender
);this.AutoRegistrationMode.AD(A._GetAutoObject(A.Device.Device).AutoRegistrationMode
);this.EartagNrAssignmentMode.AD(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
);this.Breed.AD(A._GetAutoObject(A.Device.Device).Breed);this.J(this.Rh,0);this.
J(this.OQ,0);this.J(this.GX,0);this.J(this.PN,0);this.J(this.Un,0);this.J(this.PM
,0);this.J(this.Dj,0);this.J(this.FF,0);this.Rh.AD([B=this.WeightRecordingScope,
B.CA,B.CC]);this.Rh.Dk(this.WeightRecordingScope);this.OQ.AD([B=A._GetAutoObject(
A.Device.Device),B.A2k,B.A6t]);this.GX.AD([B=this.Gender,B.CA,B.CC]);this.GX.Dk(
this.Gender);this.PN.AD([B=this.AutoRegistrationMode,B.CA,B.CC]);this.PN.Dk(this.
AutoRegistrationMode);this.Un.AV=[B=this.Un,B.Rw];this.PM.AD([B=this.EartagNrAssignmentMode
,B.CA,B.CC]);this.PM.Dk(this.EartagNrAssignmentMode);this.Dj.AD([B=this.AnimalType
,B.CA,B.CC]);this.Dj.Dk(this.AnimalType);this.FF.He([this,this.Es,this.HW]);this.
FF.Nc([B=this.FF,B.GC]);this.FF.Nd(A.zW(A.abi.Edit));this.FF.AD([B=this.Breed,B.
CA,B.CC]);this.FF.Dk(this.Breed);this.FF.ABk(this.Zb);this.Init(aArg);},_Done:function(
){this.__proto__=C.CJ;this.Rh._Done();this.OQ._Done();this.GX._Done();this.PN._Done(
);this.Un._Done();this.PM._Done();this.Dj._Done();this.FF._Done();this.AA1._Done(
);this.AnimalType._Done();this.WeightRecordingScope._Done();this.Gender._Done();
this.AutoRegistrationMode._Done();this.EartagNrAssignmentMode._Done();this.Breed.
_Done();this.Zb._Done();C.CJ._Done.call(this);},_ReInit:function(){C.CJ._ReInit.
call(this);this.Rh._ReInit();this.OQ._ReInit();this.GX._ReInit();this.PN._ReInit(
);this.Un._ReInit();this.PM._ReInit();this.Dj._ReInit();this.FF._ReInit();this.AA1.
_ReInit();this.AnimalType._ReInit();this.WeightRecordingScope._ReInit();this.Gender.
_ReInit();this.AutoRegistrationMode._ReInit();this.EartagNrAssignmentMode._ReInit(
);this.Breed._ReInit();this.Zb._ReInit();this.Lg(A.z2(A.abg.ACu));this.Rh.U(A.z2(
A.abg.A5E));this.OQ.U(A.z2(A.abg.Akk));this.OQ.Ng(A.z2(A.abg.Ky));this.OQ.N5(A.z2(
A.abg.GD));this.GX.U(A.z2(A.abg.Aug));this.PN.U(A.z2(A.abg.AZw));this.Un.U(A.z2(
A.abg.AZu));this.PM.U(A.z2(A.abg.AZp));this.Dj.U(A.z2(A.abg.AuA));this.FF.U(A.z2(
A.abg.Breed));},_Mark:function(D){var B;C.CJ._Mark.call(this,D);if((B=this.Rh)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.OQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
GX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Un)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PM)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AA1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnimalType).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingScope)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Gender)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AutoRegistrationMode
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EartagNrAssignmentMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Breed)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zb)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::RegistrationSettingsScreen"};
C.Vd={Q:null,TransponderProtocolToString:null,AmU:null,Background:null,Ac:null,WT:
null,Hu:null,SR:null,PZ:null,Su:null,C2:null,Gr:null,XM:null,P5:null,CountryToString:
null,AD:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.Oq],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.Oq],E,0);if(!!E)A.ow([this,this.Oq],this);}
,Oq:function(H){var B;var F;if(!!this.Q&&((F=this.Q,F[1].call(F[0])).Id>0)){this.
Hu.R((F=this.Q,F[1].call(F[0])).Id.toFixed());var BJ=(F=this.Q,F[1].call(F[0])).
BbZ();if(BJ<900){var NB=A._GetAutoObject(A.Device.Converter).AJj(BJ);if(!!NB)this.
C2.R(((this.CountryToString.KN(NB)+AaN)+BJ.toFixed())+Nu);else this.C2.R(BJ.toFixed(
));if(NB===10){var A8A=this.A1d((F=this.Q,F[1].call(F[0])).Id);this.C2.R(this.C2.
String+((((ASj+this.AmU.BiV(A8A))+AaN)+A.aaq(this.AmU.BiU(A8A),2,10))+Nu));}this.
C2.W(true);this.Su.W(true);this.PZ.W(false);this.SR.W(false);}else{this.PZ.R(((A.
_GetAutoObject(A.Device.Converter).BaS(BJ)+AaN)+BJ.toFixed())+Nu);this.PZ.W(true
);this.SR.W(true);this.C2.W(false);this.Su.W(false);}if(BJ===276){this.Gr.R(this.
AmU.Cb(this.A1d((F=this.Q,F[1].call(F[0])).Id)));this.Gr.W(true);}else this.Gr.W(
false);this.P5.R(this.TransponderProtocolToString.Cb((F=this.Q,F[1].call(F[0])).
TransponderProtocol));}else{this.Hu.R(A.jm);this.PZ.R(A.jm);this.Gr.R(A.jm);this.
C2.R(A.jm);this.P5.R(A.jm);}},A1d:function(JZ){var HM=0;var NB=A._GetAutoObject(
A.Device.Converter).AfW(JZ);switch(NB){case 10:{var Fz=A._GetAutoObject(A.Device.
Helper).Ue(JZ,8,2)|0;HM=A._GetAutoObject(A.Device.Converter).AKr(Fz);}break;default:;
}return HM;},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Device.TransponderProtocolToString.
_Init.call(this.TransponderProtocolToString={I:this},0);A.Device.GermanStateToString.
_Init.call(this.AmU={I:this},0);A.abh.AH._Init.call(this.Background={I:this},0);
A.Core.Ac._Init.call(this.Ac={I:this},0);C.CG._Init.call(this.WT={I:this},0);C.CG.
_Init.call(this.Hu={I:this},0);C.CG._Init.call(this.SR={I:this},0);C.CG._Init.call(
this.PZ={I:this},0);C.CG._Init.call(this.Su={I:this},0);C.CG._Init.call(this.C2={
I:this},0);C.CG._Init.call(this.Gr={I:this},0);C.CG._Init.call(this.XM={I:this},
0);C.CG._Init.call(this.P5={I:this},0);A.Device.CountryToString._Init.call(this.
CountryToString={I:this},0);this.__proto__=C.Vd;this.G(AdL);this.Background.AW(0x3F
);this.Background.G(AdL);this.Background.L(A.iF.CR);this.Ac.AW(0x3F);this.Ac.G(AdL
);this.Ac.Lf(9);this.WT.G(ASk);this.WT.Aj(true);this.WT.R(A.z2(A.abg.Hu)+A.z2(A.
abg.Colon));this.WT.A0(0x11);this.WT.L(A.iF.Text);this.Hu.G(ASl);this.Hu.Aj(true
);this.Hu.R(ASm);this.Hu.A0(0x14);this.Hu.L(A.iF.Text);this.SR.G(AD6);this.SR.Aj(
true);this.SR.R(A.z2(A.abg.Bhl)+A.z2(A.abg.Colon));this.SR.A0(0x11);this.SR.L(A.
iF.Text);this.PZ.G(AD7);this.PZ.Aj(true);this.PZ.R(ASn);this.PZ.A0(0x14);this.PZ.
L(A.iF.Text);this.Su.G(AD6);this.Su.Aj(true);this.Su.R(A.z2(A.abg.C2)+A.z2(A.abg.
Colon));this.Su.A0(0x11);this.Su.L(A.iF.Text);this.C2.G(AD7);this.C2.Aj(true);this.
C2.R(ASo);this.C2.A0(0x14);this.C2.L(A.iF.Text);this.Gr.G(ASp);this.Gr.Aj(true);
this.Gr.R(ASq);this.Gr.A0(0x14);this.Gr.L(A.iF.Text);this.XM.G(ASr);this.XM.Aj(true
);this.XM.R(A.z2(A.abg.P5)+A.z2(A.abg.Colon));this.XM.A0(0x11);this.XM.L(A.iF.Text
);this.P5.G(ASs);this.P5.Aj(true);this.P5.R(ASt);this.P5.A0(0x14);this.P5.L(A.iF.
Text);this.J(this.Background,0);this.J(this.Ac,0);this.J(this.WT,0);this.J(this.
Hu,0);this.J(this.SR,0);this.J(this.PZ,0);this.J(this.Su,0);this.J(this.C2,0);this.
J(this.Gr,0);this.J(this.XM,0);this.J(this.P5,0);this.WT.Y(A.zW(A.eV.Az));this.WT.
By(A.zW(A.eV.Cr));this.Hu.Y(A.zW(A.eV.Az));this.Hu.By(A.zW(A.eV.Cr));this.SR.Y(A.
zW(A.eV.Az));this.SR.By(A.zW(A.eV.Cr));this.PZ.Y(A.zW(A.eV.Az));this.PZ.By(A.zW(
A.eV.Cr));this.Su.Y(A.zW(A.eV.Az));this.Su.By(A.zW(A.eV.Cr));this.C2.Y(A.zW(A.eV.
Az));this.C2.By(A.zW(A.eV.Cr));this.Gr.Y(A.zW(A.eV.Az));this.Gr.By(A.zW(A.eV.Cr)
);this.XM.Y(A.zW(A.eV.Az));this.XM.By(A.zW(A.eV.Cr));this.P5.Y(A.zW(A.eV.Az));this.
P5.By(A.zW(A.eV.Cr));},_Done:function(){this.__proto__=A.Core.O;this.TransponderProtocolToString.
_Done();this.AmU._Done();this.Background._Done();this.Ac._Done();this.WT._Done();
this.Hu._Done();this.SR._Done();this.PZ._Done();this.Su._Done();this.C2._Done();
this.Gr._Done();this.XM._Done();this.P5._Done();this.CountryToString._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.TransponderProtocolToString.
_ReInit();this.AmU._ReInit();this.Background._ReInit();this.Ac._ReInit();this.WT.
_ReInit();this.Hu._ReInit();this.SR._ReInit();this.PZ._ReInit();this.Su._ReInit(
);this.C2._ReInit();this.Gr._ReInit();this.XM._ReInit();this.P5._ReInit();this.CountryToString.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.TransponderProtocolToString)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AmU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.WT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hu)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.SR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PZ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Su)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C2
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gr)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.XM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderInfo"
};C.Ri={GI:null,A4L:A.jm,Ah:function(Ae){C.E3.Ah.call(this,Ae);if(this.LN.Fe())this.
GI.CU(A.iF.A6);else this.GI.CU(this.Background.AM);this.GI.AoX(this.Im.AM);},Aae:
function(E){if(this.A4L===E)return;this.A4L=E;this.GI.Text.R(E);this.GI.W(E!==A.
jm);},_Init:function(aArg){C.E3._Init.call(this,aArg);C.GI._Init.call(this.GI={I:
this},0);this.__proto__=C.Ri;this.Background.G(ASu);this.LN.G(RQ);this.NV.G(AD8);
this.P0.G(AD8);this.GI.G(ASv);this.GI.W(false);this.J(this.GI,0);this.Im.Y(A.zW(
A.eV.Au));this.Im.By(A.zW(A.eV.Az));this.Im.C5(A.zW(A.eV.Cr));},_Done:function(){
this.__proto__=C.E3;this.GI._Done();C.E3._Done.call(this);},_ReInit:function(){C.
E3._ReInit.call(this);this.GI._ReInit();},_Mark:function(D){var B;C.E3._Mark.call(
this,D);if((B=this.GI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMenuItem"
};C.GI={Cp:null,Acv:null,Am:null,Text:null,Dn:A.jm,AkE:0,Mj:0,IH:0,Init:function(
aArg){},U:function(E){if(this.Dn===E)return;this.Dn=E;this.Text.R(E);},BuS:function(
H){this.Am.G(this.Text.M);this.Acv.G(this.Text.M);},AoX:function(E){if(this.AkE===
E)return;this.AkE=E;this.Acv.L(E);this.Text.L(E);},CU:function(E){if(this.Mj===E
)return;this.Mj=E;this.Am.L(E);},Y:function(E){if(this.Cp===E)return;this.Cp=E;this.
Text.Y(E);},HV:function(E){if(this.IH===E)return;this.IH=E;this.Text.HV(E);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.abh.M2._Init.call(this.Acv={I:this
},0);A.abh.M2._Init.call(this.Am={I:this},0);A.abh.Text._Init.call(this.Text={I:
this},0);this.__proto__=C.GI;this.G(AD9);this.Acv.AW(0x8);this.Acv.L(A.iF.Text);
this.Am.AW(0x8);this.Am.L(A.iF.CR);this.Text.AW(0xD);this.Text.G(AD9);this.Text.
HV(5);this.Text.I0(true);this.Text.A0(0x14);this.Text.L(A.iF.Text);this.J(this.Acv
,0);this.J(this.Am,0);this.J(this.Text,0);this.Acv.At(A.zW(A.abi.ALA));this.Am.At(
A.zW(A.abi.ALz));this.Text.Rs([this,this.BuS]);this.Text.Y(A.zW(A.eV.Az));this.Init(
aArg);},_Done:function(){this.__proto__=A.Core.O;this.Acv._Done();this.Am._Done(
);this.Text._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Acv._ReInit();this.Am._ReInit();this.Text._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Cp)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Acv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RowsCountInfo"
};C.SO={EB:null,Ac:null,AE:null,DW:function(H){var B;C.Aw.DW.call(this,H);if(!!this.
A6&&((this.A6.S&0x400)===0x400))this.Ac.IB(this.A6,true,null,null);},CF:function(
H){C.Aw.CF.call(this,H);this.AHg(this);A._GetAutoObject(A.Device.Device).Aq.Bo(null
);A._GetAutoObject(A.Device.Device).Bt.Bo(null);A._GetAutoObject(A.Device.Helper
).AiC();A._GetAutoObject(A.Device.Helper).Apu();},H5:function(H){},AdP:function(
s){this.H5(s);},AXM:function(H){A._GetAutoObject(C.A1).Fm();},FZ:function(H){var
B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);this.
AE.N4(-this.Ac.Br[1]);},AHg:function(H){},ByC:function(s){this.AHg(s);},Iv:function(
H){A.ow([this,this.FZ],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.
abh.AH._Init.call(this.EB={I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.
AE._Init.call(this.AE={I:this},0);this.__proto__=C.SO;this.Background.L(A.iF.CR);
this.N.W(true);this.N.Cd(A.jm);this.Dw(C.Ast);this.EB.AW(0x3F);this.EB.G(FN);this.
EB.L(A.iF.CE);this.Ac.G(FN);this.Ac.Lf(9);this.AE.G(JV);this.J(this.EB,0);this.J(
this.Ac,0);this.J(this.AE,0);this.N.CB=[this,this.AXM];this.N.C$(A.zW(A.abi.ET));
this.Ac.Eu=[this,this.Iv];},_Done:function(){this.__proto__=C.Aw;this.EB._Done();
this.Ac._Done();this.AE._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw.
_ReInit.call(this);this.EB._ReInit();this.Ac._ReInit();this.AE._ReInit();},_Mark:
function(D){var B;C.Aw._Mark.call(this,D);if((B=this.EB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ListsScreen"};C.AQF={XB:function(H){this.
Aey();this.D0(A.z2(A.abg.AQh),[this,this.AOW],7);this.D0(A.z2(A.abg.Apq),[this,this.
Be8],6);this.D0(A.z2(A.abg.App),[this,this.Ao_],3);this.D0(A.z2(A.abg.AfQ),[this
,this.Aio],2);this.D0(A.z2(A.abg.AbK),[this,this.AoR],1);this.D0(A.z2(A.abg.Aet)
,[this,this.Aig],0);A._GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).V5(A.z2(A.
abg.Aeu)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Co(6);},DW:function(
H){},Ack:function(){return C.AIX;},Acl:function(){return C.ALi;},Rz:function(H){
var Bb=A._GetAutoObject(A.Device.Helper).LP();var Ax2=A._NewObject(A.Device.BoolFilterCriterion
,0);Ax2.Initialize(12,0,true,true);Bb.CQ(Ax2);A._GetAutoObject(A.Device.Device).
Aq.Bo(Bb);},HY:function(H){C.Gi.HY.call(this,H);if(this.Ah6()===false){this.N.Cn(
A.zW(A.abi.Apq));this.N.Ch=[this,this.A0n];this.N.Ft(A.jm);}this.N.O4(false);this.
N.O5(false);},Aeg:function(){A._GetAutoObject(C.A1).BY(41);},Aef:function(){A._GetAutoObject(
C.A1).BY(44);},_Init:function(aArg){C.Gi._Init.call(this,aArg);this.__proto__=C.
AQF;var B;this.Dw(C.ALe);this.Et(A.z2(A.abg.Bdm));this.Afw([B=A._GetAutoObject(A.
Device.Device),B.A2$,B.A6U]);},_className:"Application::WatchListScreen"};C.AH7={
DW:function(H){var B;var I_=(A.Core.B1.isPrototypeOf(H)?H:null);if(((I_.CO===4)||(
I_.CO===5))===false){C.AuI.DW.call(this,H);return;}if(A._GetAutoObject(A.Device.
Device).MeasureState!==1)return;var A8e=A._GetAutoObject(A.Device.Device).Ip;var
R2;if(I_.CO===5)R2=5;else R2=4;var AxI=A._GetAutoObject(A.abk.Dy).A8M(A8e,R2);var
Mb=(((A8e+((AxI/2)|0))/AxI)|0)*AxI;if(I_.CO===4)Mb+=AxI;else if(I_.CO===5)Mb-=AxI;
if(Mb>999900)Mb=999900;if(Mb<100)Mb=100;A._GetAutoObject(A.Device.Device).UpdateWeightValue(
Mb);},ApI:function(H){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===
3)A.ow([B=this.Od,B.CB],this);else A._GetAutoObject(C.A1).Fm();},U2:function(H){
if(A._GetAutoObject(A.Device.Device).MeasureState===1){A._GetAutoObject(A.Device.
Device).ApK();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);if(this.A42(
)===false){this.Hz.OnSetBodyWeight(A._GetAutoObject(A.Device.Device).Ip);this.Hz.
Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(C.A1).Fm();}}else if(A.
_GetAutoObject(A.Device.Device).MeasureState===3){this.Hz.OnSetBodyWeight(A._GetAutoObject(
A.Device.Device).Ip);this.Hz.Cs(A._GetAutoObject(A.Device.Device).Bt);A._GetAutoObject(
C.A1).Fm();}},AiI:function(H){var B;if(A._GetAutoObject(A.Device.Device).MeasureState===
3)A.ow([B=this.Od,B.Cm],this);},AYK:function(){if(A._GetAutoObject(A.Device.Device
).Ip<100000)this.Ip.R(A._GetAutoObject(A.Device.Converter).Np(A._GetAutoObject(A.
Device.Device).Ip,1,false));else this.Ip.R(A._GetAutoObject(A.Device.Converter).
Np(A._GetAutoObject(A.Device.Device).Ip,0,false));},A8L:function(){var AHq=A._GetAutoObject(
A.Device.Helper).V.AiV(1);if(AHq>=100000)AHq=(Math.round(AHq/1000)|0)*1000;return AHq;
},_Init:function(aArg){C.AuI._Init.call(this,aArg);this.__proto__=C.AH7;},_className:
"Application::AnimalActionWeighingScreen"};C.AQr={Uv:null,W4:null,P$:null,AcF:null
,_Init:function(aArg){C.CJ._Init.call(this,aArg);C.B$._Init.call(this.Uv={I:this
},0);C.B$._Init.call(this.W4={I:this},0);C.P$._Init.call(this.P$={I:this},0);C.AcF.
_Init.call(this.AcF={I:this},0);this.__proto__=C.AQr;var B;this.Lg(A.z2(A.abg.ADi
));this.Uv.G(Ai3);this.Uv.Aj(true);this.Uv.U(A.z2(A.abg.A5q));this.Uv.Bk(true);this.
Uv.Bu(0);this.W4.G(Af4);this.W4.Aj(true);this.W4.U(A.z2(A.abg.A5p));this.W4.Bk(false
);this.J(this.Uv,0);this.J(this.W4,0);this.Uv.AD([B=this.P$,B.CA,B.CC]);this.Uv.
Dk(this.P$);this.W4.AD([B=this.AcF,B.CA,B.CC]);this.W4.Dk(this.AcF);},_Done:function(
){this.__proto__=C.CJ;this.Uv._Done();this.W4._Done();this.P$._Done();this.AcF._Done(
);C.CJ._Done.call(this);},_ReInit:function(){C.CJ._ReInit.call(this);this.Uv._ReInit(
);this.W4._ReInit();this.P$._ReInit();this.AcF._ReInit();this.Lg(A.z2(A.abg.ADi)
);this.Uv.U(A.z2(A.abg.A5q));this.W4.U(A.z2(A.abg.A5p));},_Mark:function(D){var B;
C.CJ._Mark.call(this,D);if((B=this.Uv)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
W4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AcF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::UnitsSettingsScreen"
};C.AcF={MassUnitToString:null,Dx:function(){return 2;},Dd:function(aIndex){if((
aIndex<0)||(aIndex>=2))return-1;return aIndex;},GS:function(aIndex){if((aIndex<0
)||(aIndex>=2))return A.jm;return this.MassUnitToString.Cb(aIndex);},DX:function(
A2){return A2;},HP:function(){return 1;},AD:function(E){C.AC.AD.call(this,E);A._GetAutoObject(
A.Device.Device).AtF(E);},Init:function(aArg){var B;A.za([this,this.A9m],[B=A._GetAutoObject(
A.Device.Device),B.ANZ,B.AUO],0);A.ow([this,this.A9m],this);},A9m:function(H){this.
Q=A._GetAutoObject(A.Device.Device).MassUnit;A.aat([this,this.CA,this.CC],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.MassUnitToString._Init.call(this.
MassUnitToString={I:this},0);this.__proto__=C.AcF;this.Init(aArg);},_Done:function(
){this.__proto__=C.AC;this.MassUnitToString._Done();C.AC._Done.call(this);},_ReInit:
function(){C.AC._ReInit.call(this);this.MassUnitToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.MassUnitToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::MassUnits"};C.AuI={Hz:null,Ahj:null,MassUnit:
null,Ip:null,TZ:null,Alx:null,AaB:null,X9:null,Od:null,WW:null,Init:function(aArg
){var B;this.MassUnit.R(A._GetAutoObject(A.abk.Dy).Abh());A.za([this,this.AGD],[
B=A._GetAutoObject(A.Device.Device),B.AAT,B.AES],0);A.za([this,this.BtR],[B=A._GetAutoObject(
A.Device.Device),B.AAZ,B.AEX],0);A.za([this,this.BtS],[B=this.Od,B.AoI,B.I1],0);
},Ah:function(Ae){C.Aw.Ah.call(this,Ae);this.AuB();this.AaC();},JE:function(H){this.
U2(this);},CF:function(H){C.Aw.CF.call(this,H);if(!A._GetAutoObject(A.Device.Device
).WeightRecordingMode)A._GetAutoObject(A.Device.Device).ApK();else A._GetAutoObject(
A.Device.Device).UpdateMeasureState(0);if(A._GetAutoObject(A.Device.Device).Bt.Ms(
))A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).
Bt.If().toFixed(),0,null);this.Hz.GG();this.Hz.OnSetAnimalId(A._GetAutoObject(A.
Device.Helper).V.Id);if(!A._GetAutoObject(A.Device.Device).WeightRecordingMode)A.
_GetAutoObject(A.Device.Device).ACY();else{var Bu8=this.A8L();this.X9.W(true);this.
AaB.W(true);A._GetAutoObject(A.Device.Device).UpdateWeightValue(Bu8);A._GetAutoObject(
A.Device.Device).UpdateMeasureState(1);}},Fc:function(H){if(!A._GetAutoObject(A.
Device.Device).WeightRecordingMode)A._GetAutoObject(A.Device.Device).ApK();else A.
_GetAutoObject(A.Device.Device).AfP();},AuB:function(){switch(A._GetAutoObject(A.
Device.Device).MeasureState){case 0:break;case 1:this.AYK();break;case 3:{this.AYK(
);this.X9.W(false);this.AaB.W(false);if(this.A42()){this.TZ.W(false);this.Ip.G(A.
aaR(this.Ip.M,42));this.MassUnit.G(A.aaR(this.MassUnit.M,55));this.Od.An(true);this.
Od.W(true);this.A8(this.Od);}}break;case 4:this.Ip.R(A.z2(A.abv.Ah_));break;default:
A.aa8("%s%e",AD_,A._GetAutoObject(A.Device.Device).MeasureState);}},AaC:function(
){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{this.N.C$(
A.zW(A.abi.Acr));this.N.Cn(null);this.WW.W(false);this.N.De(A.zW(A.abi.Aom));this.
N.Cd(A.jm);}break;case 3:{if(this.Od.AN<=1){this.N.C$(null);this.N.Cn(null);this.
WW.W(false);this.N.De(null);}else{this.N.C$(A.zW(A.abi.AkR));this.N.Cn(A.zW(A.abi.
Acs));this.WW.W(true);this.N.De(null);}this.N.Cd(A.z2(A.abg.Ok));}break;case 4:{
this.N.De(A.zW(A.abi.Aol));this.N.Cm=[this,this.BeX];this.N.Cn(null);this.WW.W(false
);this.N.Cd(A.jm);}break;default:;}},ApI:function(H){},Bpk:function(s){this.ApI(
s);},U2:function(H){},AU4:function(s){this.U2(s);},BeX:function(H){this.CF(this);
},BtR:function(H){this.Al();},AGD:function(H){this.Al();},A42:function(){var Art=
A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing;return(Art>0)&&!A._GetAutoObject(
A.Device.Helper).BiS(Art,this.Hz.Timestamp);},AiI:function(H){},AU3:function(s){
this.AiI(s);},BtS:function(H){this.Al();},AYK:function(){this.Ip.R(A._GetAutoObject(
A.Device.Converter).AlV(A._GetAutoObject(A.Device.Device).Ip));},A8L:function(){
return A._GetAutoObject(A.Device.Helper).V.AiV(1);},_Init:function(aArg){C.Aw._Init.
call(this,aArg);A.abh.AH._Init.call(this.Ahj={I:this},0);A.abh.Text._Init.call(this.
MassUnit={I:this},0);A.abh.Text._Init.call(this.Ip={I:this},0);A.abh.Text._Init.
call(this.TZ={I:this},0);C.Auz._Init.call(this.Alx={I:this},0);A.abh.Ace._Init.call(
this.AaB={I:this},0);A.abh.Ace._Init.call(this.X9={I:this},0);C.AQK._Init.call(this.
Od={I:this},0);A.abh.Am._Init.call(this.WW={I:this},0);this.__proto__=C.AuI;this.
Background.L(A.iF.CE);this.N.W(true);this.Dw(C.Ig);this.Ahj.AW(0x3F);this.Ahj.G(
Au9);this.Ahj.L(A.iF.CE);this.MassUnit.G(ASw);this.MassUnit.A0(0x9);this.MassUnit.
R(A.z2(A.abg.AGs));this.MassUnit.L(A.iF.Text);this.Ip.G(AD$);this.Ip.A0(0x14);this.
Ip.R(A.z2(A.abv.Ah_));this.Ip.L(A.iF.Text);this.TZ.G(ASx);this.TZ.R(A.z2(A.abg.A5z
));this.TZ.L(A.iF.Text);this.TZ.W(true);this.Alx.G(ASy);this.AaB.G(ASz);this.AaB.
L(A.iF.AeO);this.AaB.W(false);this.X9.G(ASA);this.X9.L(A.iF.AeO);this.X9.BfQ(true
);this.X9.W(false);this.Od.AW(0x3F);this.Od.G(Au9);this.Od.An(false);this.Od.W(false
);this.WW.G(ASB);this.WW.L(A.iF.Be);this.J(this.Ahj,0);this.J(this.MassUnit,0);this.
J(this.Ip,0);this.J(this.TZ,0);this.J(this.AaB,0);this.J(this.X9,0);this.J(this.
Od,0);this.J(this.WW,0);this.N.CB=[this,this.Bpk];this.N.Ch=[this,this.AU3];this.
N.Cm=[this,this.AU4];this.MassUnit.Y(A.zW(A.eV.Gk));this.Ip.Y(A.zW(A.eV.Ach));this.
TZ.Y(A.zW(A.eV.Gk));this.AaB.XH(this.Alx);this.X9.XH(this.Alx);this.Hz=A._NewObject(
A.Device.Rating,0);this.Od.N1(A._GetAutoObject(A.Device.Helper).V);this.Od.Aiq(this.
Hz);this.WW.At(A.zW(A.abi.AMr));this.Init(aArg);},_Done:function(){this.__proto__=
C.Aw;this.Ahj._Done();this.MassUnit._Done();this.Ip._Done();this.TZ._Done();this.
Alx._Done();this.AaB._Done();this.X9._Done();this.Od._Done();this.WW._Done();C.Aw.
_Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.Ahj._ReInit();
this.MassUnit._ReInit();this.Ip._ReInit();this.TZ._ReInit();this.Alx._ReInit();this.
AaB._ReInit();this.X9._ReInit();this.Od._ReInit();this.WW._ReInit();this.MassUnit.
R(A.z2(A.abg.AGs));this.Ip.R(A.z2(A.abv.Ah_));this.TZ.R(A.z2(A.abg.A5z));this.MassUnit.
Y(A.zW(A.eV.Gk));this.Ip.Y(A.zW(A.eV.Ach));this.TZ.Y(A.zW(A.eV.Gk));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Ahj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.MassUnit)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Ip)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TZ).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Alx)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AaB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.X9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Od)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WW)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::WeighingScreen"};C.AQO={Mu:null,EG:null,K_:
null,G9:null,BdH:function(H){var F;this.K_.B3.L(this.K_.T.AM);if(!!this.K_.Q)this.
K_.B3.R((A._GetAutoObject(A.Device.Converter).Np((F=this.K_.Q,F[1].call(F[0])),2
,true)+Cw)+A._GetAutoObject(A.abk.Dy).YD());},_Init:function(aArg){C.CJ._Init.call(
this,aArg);C.APO._Init.call(this.Mu={I:this},0);C.ApD._Init.call(this.EG={I:this
},0);C.JS._Init.call(this.K_={I:this},0);C.AIq._Init.call(this.G9={I:this},0);this.
__proto__=C.AQO;var B;this.Lg(A.z2(A.abg.Settings));this.Gb.R(A.z2(A.abg.ApX));this.
Mu.G(ASC);this.Mu.Aj(true);this.EG.G(Au_);this.EG.Aj(true);this.EG.U(A.z2(A.abg.
PB));this.EG.Bk(true);this.EG.Hy(1000);this.EG.FS(99000);this.K_.G(AEa);this.K_.
Aj(true);this.K_.U(A.z2(A.abg.AZy));this.K_.Hy(50);this.K_.FS(2000);this.K_.AOw(
A._GetAutoObject(A.abk.Dy).Awx());this.Lh(this.Ac,-1);this.Lh(this.AE,-1);this.J(
this.Mu,0);this.J(this.EG,0);this.J(this.K_,0);this.Mu.Afr([B=this.Mu,B.GC]);this.
Mu.He([this,this.Es,this.HW]);this.Mu.Ail(A.zW(A.abi.Edit));this.Mu.Nc([B=this.Mu
,B.AvB]);this.Mu.Nd(A.zW(A.abi.AlC));this.Mu.AD([B=this.G9,B.CA,B.CC]);this.Mu.Dk(
this.G9);this.Mu.A31([B=this.G9,B.AOe,B.AU1]);this.Mu.A30([B=this.G9,B.AOd,B.AU0
]);this.EG.He([this,this.Es,this.HW]);this.EG.Nc([B=this.Mu,B.AvB]);this.EG.Nd(A.
zW(A.abi.AlC));this.EG.AD([B=this.G9,B.A2t,B.AOk]);this.K_.He([this,this.Es,this.
HW]);this.K_.Nc([B=this.Mu,B.AvB]);this.K_.Nd(A.zW(A.abi.AlC));this.K_.AD([B=this.
G9,B.A2s,B.AOj]);this.K_.A4b([this,this.BdH]);},_Done:function(){this.__proto__=
C.CJ;this.Mu._Done();this.EG._Done();this.K_._Done();this.G9._Done();C.CJ._Done.
call(this);},_ReInit:function(){C.CJ._ReInit.call(this);this.Mu._ReInit();this.EG.
_ReInit();this.K_._ReInit();this.G9._ReInit();this.Lg(A.z2(A.abg.Settings));this.
Gb.R(A.z2(A.abg.ApX));this.EG.U(A.z2(A.abg.PB));this.K_.U(A.z2(A.abg.AZy));},_Mark:
function(D){var B;C.CJ._Mark.call(this,D);if((B=this.Mu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K_)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.G9)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingSettingsScreen"
};C.APO={Xd:null,Init:function(aArg){var B;A.za([this,this.AdQ],[B=A._GetAutoObject(
A.Device.Device),B.ANZ,B.AUO],0);A.ow([this,this.AdQ],this);},AYc:function(H){A.
_GetAutoObject(A.Device.Device).A_(37,true,A.jm,0,[this,this.A66]);},AWg:function(
H){var F;if(this.A3===1){var BR=this.DM;this.DM=this.DM-A._GetAutoObject(A.abk.Dy
).Awx();if(this.DM<this.AjH)this.DM=this.AjH;if(this.DC!==BR){if(!!this.Jp)(F=this.
Jp,F[2].call(F[0],this.DM));A.aat(this.Jp,0);}}if(this.A3===2){var BR=this.DC;this.
DC=this.DC-A._GetAutoObject(A.abk.Dy).Awx();if(this.DC<this.DM)this.DC=this.DM;if(
this.DC!==BR){if(!!this.Jo)(F=this.Jo,F[2].call(F[0],this.DC));A.aat(this.Jo,0);
}}this.DD(this);this.Al();},AWS:function(H){var F;if(this.A3===1){var BR=this.DM;
this.DM=this.DM+A._GetAutoObject(A.abk.Dy).Awx();if(this.DM>this.DC)this.DM=this.
DC;if(this.DM!==BR){if(!!this.Jp)(F=this.Jp,F[2].call(F[0],this.DM));A.aat(this.
Jp,0);}}if(this.A3===2){var BR=this.DC;this.DC=this.DC+A._GetAutoObject(A.abk.Dy
).Awx();if(this.DC>this.AjC)this.DC=this.AjC;if(this.DC!==BR){if(!!this.Jo)(F=this.
Jo,F[2].call(F[0],this.DC));A.aat(this.Jo,0);}}this.DD(this);this.Al();},Ix:function(
H){this.PV.R(Au$+A._GetAutoObject(A.Device.Converter).Np(this.DM,2,true));this.PU.
R(Au$+A._GetAutoObject(A.Device.Converter).Np(this.DC,2,true));this.SM.R(A._GetAutoObject(
A.abk.Dy).YD());this.Xd.R(this.SM.String);},AXP:function(H){var B;var Ar=(A.Device.
PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).Apw(this);},AWK:function(Aqq){if(Aqq===1)return this.PV;else if(
Aqq===2)return this.PU;else return null;},_Init:function(aArg){C.Adm._Init.call(
this,aArg);A.abh.Text._Init.call(this.Xd={I:this},0);this.__proto__=C.APO;this.U(
A.z2(A.abg.AyS));this.AjC=2000;this.AjH=20;this.Background.G(KO);this.T.G(BI);this.
T.R(A.z2(A.abg.AyS)+A.z2(A.abg.Colon));this.T.A0(0x12);this.AiA.G(ASD);this.AiB.
G(Ava);this.P6.G(AEb);this.PE.G(ASE);this.PU.G(ASF);this.PV.G(ASG);this.SM.G(ASH
);this.Xd.G(ASI);this.Xd.I0(false);this.Xd.A0(0x12);this.Xd.L(0xFF000000);this.Lh(
this.Hv,-8);this.J(this.Xd,0);this.T.Y(A.zW(A.eV.Au));this.T.By(A.zW(A.eV.Az));this.
Xd.Y(A.zW(A.eV.Az));this.Init(aArg);},_Done:function(){this.__proto__=C.Adm;this.
Xd._Done();C.Adm._Done.call(this);},_ReInit:function(){C.Adm._ReInit.call(this);
this.Xd._ReInit();this.U(A.z2(A.abg.AyS));this.T.R(A.z2(A.abg.AyS)+A.z2(A.abg.Colon
));this.T.Y(A.zW(A.eV.Au));this.T.By(A.zW(A.eV.Az));this.Xd.Y(A.zW(A.eV.Az));},_Mark:
function(D){var B;C.Adm._Mark.call(this,D);if((B=this.Xd)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemThresholdsWeightGain"};C.Ax9={M:Qh,A1q:
function(){},G:function(E){if(A.z9(this.M,E))return;this.M=E;this.A1q();},_Init:
function(aArg){A.Graphics.G0._Init.call(this,aArg);this.__proto__=C.Ax9;},_className:
"Application::AbstractPath"};C.Ag9={DO:null,EB:null,Qf:null,AbH:null,Nn:null,AbG:
null,ArB:1,AYZ:0,A7W:false,Awr:true,C6:function(){this.A$P(this);},Init:function(
aArg){var B;this.A8(this.AbH);A.za([this,this.A$P],[B=this.AbH,B.A2A,B.A6E],0);}
,Ah:function(Ae){C.Aw.Ah.call(this,Ae);this.AbG.R(String.fromCharCode(A._GetAutoObject(
A.Device.Converter).Bbb(this.ArB+this.AYZ)));if(this.ArB===1)this.Nn.R(A.z2(A.abg.
ArS));else this.Nn.R(A.z2(A.abg.BaL));},CF:function(H){if(this.Awr)this.Awr=false;
else if(this.DO.A78()===false)A.ow([this,this.AXv],this);else if(this.DO.AwE())this.
DO.Aa3();A.y_([this,this.Ad$],A._GetAutoObject(A.Device.Device).Aq,0);},Fc:function(
H){A.zl([this,this.Ad$],A._GetAutoObject(A.Device.Device).Aq,0);},AXv:function(H
){this.A7W=true;A._GetAutoObject(C.A1).Fm();},A$P:function(H){var B;var A8x=(C.UH.
isPrototypeOf(B=this.AbH.A6)?B:null);if(!!A8x){var AVX=A._NewObject(A.Device.ActionToString
,0);this.Qf.R(AVX.KN(A8x.Action));}},H5:function(H){var Cg=(C.UH.isPrototypeOf(H
)?H:null);if(!Cg)return;this.DO.R3(Cg.Action);this.Be0(this.ArB+1);},Btl:function(
H){if(A._GetAutoObject(C.Pz).AkU(2048))A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3);},Bta:function(H){
A._GetAutoObject(C.A1).BY(3);},Be0:function(E){if(this.ArB===E)return;this.ArB=E;
this.Al();},Ad$:function(H){if((this.A7W===false)&&(this.DO.A78()===false))A.ow([
this,this.AXv],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.abh.AH.
_Init.call(this.EB={I:this},0);C.CG._Init.call(this.Qf={I:this},0);C.ANb._Init.call(
this.AbH={I:this},0);C.CG._Init.call(this.Nn={I:this},0);A.abh.Text._Init.call(this.
AbG={I:this},0);this.__proto__=C.Ag9;this.Background.L(A.iF.CR);this.N.G(Vv);this.
N.W(true);this.Dw(C.Ig);this.EB.AW(0x3F);this.EB.G(FN);this.EB.L(A.iF.CE);this.Qf.
G(ASJ);this.Qf.L(A.iF.Text);this.AbH.G(ASK);this.Nn.G(ASL);this.Nn.R(A.z2(A.abg.
ArS));this.Nn.L(A.iF.Text);this.AbG.G(ASM);this.AbG.R(ASN);this.AbG.L(A.iF.Text);
this.J(this.EB,0);this.J(this.Qf,0);this.J(this.AbH,0);this.J(this.Nn,0);this.J(
this.AbG,0);this.N.CB=[this,this.Bta];this.N.Ch=[this,this.Btl];this.N.Cm=[this,
this.AXv];this.N.C$(A.zW(A.abi.ET));this.N.Cn(A.zW(A.abi.AhM));this.Qf.Y(A.zW(A.
eV.Gk));this.Qf.By(A.zW(A.eV.Au));this.Qf.C5(A.zW(A.eV.Az));this.AbH.AXN=[this,this.
H5];this.Nn.Y(A.zW(A.eV.Gk));this.Nn.By(A.zW(A.eV.Au));this.Nn.C5(A.zW(A.eV.Az));
this.AbG.Y(A.zW(A.eV.LO));this.DO=A._GetAutoObject(C.DO);this.Init(aArg);},_Done:
function(){this.__proto__=C.Aw;this.EB._Done();this.Qf._Done();this.AbH._Done();
this.Nn._Done();this.AbG._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw.
_ReInit.call(this);this.EB._ReInit();this.Qf._ReInit();this.AbH._ReInit();this.Nn.
_ReInit();this.AbG._ReInit();this.Nn.R(A.z2(A.abg.ArS));this.Qf.Y(A.zW(A.eV.Gk));
this.Qf.By(A.zW(A.eV.Au));this.Qf.C5(A.zW(A.eV.Az));this.Nn.Y(A.zW(A.eV.Gk));this.
Nn.By(A.zW(A.eV.Au));this.Nn.C5(A.zW(A.eV.Az));this.C6();},_Mark:function(D){var
B;C.Aw._Mark.call(this,D);if((B=this.DO)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AbH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Nn)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AbG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionScreen"
};C.ANb={Ir:null,AXN:null,CH:null,Ac:null,AE:null,AYm:0,Init:function(aArg){A.y_([
this,this.AxX],this.Ir,0);A.y_([this,this.A$M],A._GetAutoObject(A.Device.Helper).
V,0);A.y_([this,this.Arx],A._GetAutoObject(A.Device.Helper).V,0);A.ow([this,this.
AxX],this);},A8:function(E){var AXp=this.A6;A.Core.O.A8.call(this,E);if(this.A6!==
AXp)A.aat([this,this.A2A,this.A6E],0);},DW:function(H){var B;var EQ=0;var X=this.
A6;switch(this.CH.CO){case 6:EQ=2;break;case 7:EQ=7;break;case 4:EQ=4;break;case
5:EQ=5;break;default:;}X=this.Q8(X,EQ,0x415);if((EQ===5)&&!X){var AG$=this.A6;while(
!X){AG$=this.Q8(AG$,2,0x415);if(!!AG$)X=this.Q8(AG$,EQ,0x415);else break;}}if(!!
X)this.A8(X);var G7=(C.UH.isPrototypeOf(B=this.A6)?B:null);if(!!G7)this.AYm=(C.UH.
isPrototypeOf(B=this.A6)?B:null).Action;else this.AYm=0;A.ow([this,this.TF],this
);},AWa:function(Jt){var Ep=A._GetAutoObject(C.DO).A8d(Jt,this.AXN);this.J(Ep,0);
},Av0:function(){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){var Ake=
X;X=X.Af;if(((Ake.S&0x400)===0x400))this.HA(Ake);}},AxX:function(H){this.Av0();var
P;var DZ=A._GetAutoObject(C.Pz).AhF();for(P=0;P<DZ;P=P+1){var Yt=A._GetAutoObject(
C.Pz).Acj(P);this.AWa(Yt);}A.ow([this,this.A$M],this);A.ow([this,this.Bjb],this);
A.ow([this,this.Arx],this);},Bjb:function(H){var B;var X=this.Ac.Af;while(!!X&&!((
X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)){var Ab=(C.UH.isPrototypeOf(X)?X:null
);if(!!Ab&&(Ab.Action!==1))Ab.An(!!A._GetAutoObject(A.Device.Helper).V.Id);}X=X.
Af;}},Arx:function(H){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){
if(((X.S&0x400)===0x400)){var Ab=(C.UH.isPrototypeOf(X)?X:null);if(!!Ab){if(Ab.Action===
8)Ab.AOR(A._GetAutoObject(A.Device.Helper).V.IsWatch);else if(Ab.Action===4)Ab.AOR(
A._GetAutoObject(A.Device.Helper).V.IsAlarm);else if(Ab.Action===8192)Ab.AOR(A._GetAutoObject(
A.Device.Helper).V.IsDry);}}X=X.Af;}},FZ:function(H){var B;this.AE.N2((B=this.Ac.
Dh(0x1))[3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);}
,A$M:function(H){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((
X.S&0x400)===0x400)){var Ab=(C.UH.isPrototypeOf(X)?X:null);if(!!Ab){if(A._GetAutoObject(
C.Pz).AkU(Ab.Action)&&A._GetAutoObject(C.DO).AYY(A._GetAutoObject(A.Device.Helper
).V,Ab.Action)){Ab.An(true);Ab.W(true);if(this.AYm===Ab.Action)this.A8(Ab);}else{
Ab.An(false);Ab.W(false);}}}X=X.Af;}A.ow([this,this.TF],this);},TF:function(H){var
B;this.Ac.AbJ(null,null);if(!!this.A6&&((this.A6.S&0x400)===0x400))this.Ac.IB(this.
A6,true,null,null);},Iv:function(H){A.ow([this,this.FZ],this);},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.Core.B1._Init.call(this.CH={I:this},0);A.Core.
Ac._Init.call(this.Ac={I:this},0);C.AE._Init.call(this.AE={I:this},0);this.__proto__=
C.ANb;this.G(ASO);this.CH.Filter=147;this.Ac.AW(0xB);this.Ac.G(ASP);this.Ac.Lf(9
);this.AE.AW(0xA);this.AE.G(ASQ);this.J(this.Ac,0);this.J(this.AE,0);this.CH.B2=[
this,this.DW];this.CH.Ea=[this,this.DW];this.Ac.Eu=[this,this.Iv];this.Ir=A._GetAutoObject(
C.Pz);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.CH._Done();
this.Ac._Done();this.AE._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.
Core.O._ReInit.call(this);this.CH._ReInit();this.Ac._ReInit();this.AE._ReInit();
},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ir)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.AXN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
if((B=this.CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ManualActionScreenGrid"
};C.K2={D$:null,AH:null,Text:null,Am:null,_Init:function(aArg){C.OverlayMenu._Init.
call(this,aArg);C.D$._Init.call(this.D$={I:this},0);A.abh.AH._Init.call(this.AH={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.Am._Init.call(this.
Am={I:this},0);this.__proto__=C.K2;this.N.An(false);this.D$.G(BI);this.D$.An(false
);this.AH.G(FN);this.AH.L(A.iF.AeO);this.Text.G(BI);this.Text.R(ASR);this.Text.L(
0xFF000000);this.Am.G(Qh);this.Am.L(A.iF.Text);this.J(this.D$,0);this.J(this.AH,
0);this.J(this.Text,0);this.J(this.Am,0);this.N.Cn(A.zW(A.abi.AhM));this.Text.Y(
A.zW(A.eV.Az));this.Am.At(A.zW(A.abi.AzB));},_Done:function(){this.__proto__=C.OverlayMenu;
this.D$._Done();this.AH._Done();this.Text._Done();this.Am._Done();C.OverlayMenu.
_Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.D$._ReInit(
);this.AH._ReInit();this.Text._ReInit();this.Am._ReInit();},_Mark:function(D){var
B;C.OverlayMenu._Mark.call(this,D);if((B=this.D$)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionOverlayMenu"
};C.AnH={Init:function(aArg){this.T.Y(A.zW(A.eV.Az));},JE:function(H){},Ah:function(
Ae){C.B$.Ah.call(this,Ae);var Gf=A.iF.AeO;var G3=A.iF.CR;if(this.GY){Gf=A.iF.Text;
G3=A.iF.Be;}if(!this.Lr){this.Background.L(A.iF.CR);this.T.L(A.iF.CE);}else if(this.
QC){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);}else if(this.Kq){this.Background.
L(A.iF.A6);this.T.L(A.iF.Be);}else{this.Background.L(Gf);this.T.L(G3);}this.GU.L(
A.iF.CR);this.Hv.L(A.iF.CR);},GH:function(H){var B;var Fy=this.Di.IE;var Ck=(C.CG.
isPrototypeOf(B=this.Di.B5)?B:null);if(!Ck)return;Ck.Y(A.zW(A.eV.Az));Ck.By(A.zW(
A.eV.Cr));Ck.L(this.T.AM);if(!!this.AC)Ck.R(this.AC.GS(Fy));else Ck.R(JW);Ck.G(A.
aaN(Ck.M,[this.Di.Ux,(B=this.Di.M)[3]-B[1]]));},_Init:function(aArg){C.B$._Init.
call(this,aArg);this.__proto__=C.AnH;this.Di.ABt(170);this.Di.Ne(C.CG);this.Init(
aArg);},_className:"Application::ActionSettingsItemGroup"};C.ArC={CP:null,Ah:function(
Ae){C.B_.Ah.call(this,Ae);var Gf=A.iF.AeO;var G3=A.iF.CR;if(this.GY){Gf=A.iF.Text;
G3=A.iF.Be;}if(!this.Lr){this.Background.L(A.iF.CR);this.T.L(A.iF.CE);}else if(this.
QC){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);}else if(this.Kq){this.Background.
L(A.iF.A6);this.T.L(A.iF.Be);}else{this.Background.L(Gf);this.T.L(G3);}},Init:function(
aArg){this.T.Text.A0(0x11);this.T.Text.HV(10);this.T.Y(A.zW(A.eV.Az));},_Init:function(
aArg){C.B_._Init.call(this,aArg);A.abh.Am._Init.call(this.CP={I:this},0);this.__proto__=
C.ArC;this.CP.G(ASS);this.CP.Ce(1);this.J(this.CP,0);this.CP.At(A.zW(A.abi.Ako));
this.Init(aArg);},_Done:function(){this.__proto__=C.B_;this.CP._Done();C.B_._Done.
call(this);},_ReInit:function(){C.B_._ReInit.call(this);this.CP._ReInit();},_Mark:
function(D){var B;C.B_._Mark.call(this,D);if((B=this.CP)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ActionsSettingsItem"};C.AHQ={Ac:null,QF:null,Sd:null
,Se:null,Sf:null,AbF:null,V4:null,TS:null,TT:null,YZ:null,AE:null,Init:function(
aArg){this.A8(this.QF);},DW:function(H){C.K2.DW.call(this,H);this.TF(this);},JE:
function(H){this.A_9(this);},Nb:function(){if(!this.CX){this.CX=A._NewObject(C.N
,0);this.CX.CB=[this,this.A_9];this.CX.Ch=null;this.CX.Cm=null;this.CX.Cd(A.jm);
this.CX.Cn(null);this.CX.C$(A.zW(A.abi.AhL));}return this.CX;},AYg:function(){A.
_GetAutoObject(C.AutoActions).Clear();if(!!this.V4.Q&&!A._GetAutoObject(C.AutoActions
).Contains(this.V4.Q))A._GetAutoObject(C.AutoActions).J(this.V4.Q);if(!!this.TS.
Q&&!A._GetAutoObject(C.AutoActions).Contains(this.TS.Q))A._GetAutoObject(C.AutoActions
).J(this.TS.Q);if(!!this.TT.Q&&!A._GetAutoObject(C.AutoActions).Contains(this.TT.
Q))A._GetAutoObject(C.AutoActions).J(this.TT.Q);if(!!this.YZ.Q&&!A._GetAutoObject(
C.AutoActions).Contains(this.YZ.Q))A._GetAutoObject(C.AutoActions).J(this.YZ.Q);
A._GetAutoObject(C.AutoActions).Cs();},A_9:function(H){if(this.Bsw()===true){this.
AYg();this.AjR(this);}else A._GetAutoObject(A.Device.Device).A_(27,true,A.jm,0,null
);},Bsw:function(){return(!!this.V4.Dd(this.V4.Q)||!!this.TS.Dd(this.TS.Q))||!!this.
TT.Dd(this.TT.Q);},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-B[1]);
this.AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);},TF:function(H){var
B;this.Ac.AbJ(null,null);if(!!this.A6&&((this.A6.S&0x400)===0x400))this.Ac.IB(this.
A6,true,null,null);},Btx:function(H){var B;A._GetAutoObject(A.Device.Device).Apt(
this);this.V4.Aqx(this);this.TS.Aqx(this);this.TT.Aqx(this);this.YZ.Aqx(this);},
Iv:function(H){A.ow([this,this.FZ],this);},_Init:function(aArg){C.K2._Init.call(
this,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);C.AnH._Init.call(this.QF={I:
this},0);C.AnH._Init.call(this.Sd={I:this},0);C.AnH._Init.call(this.Se={I:this},
0);C.AnH._Init.call(this.Sf={I:this},0);C.Ax$._Init.call(this.AbF={I:this},0);C.
AutoAction._Init.call(this.V4={I:this},0);C.AutoAction._Init.call(this.TS={I:this
},0);C.AutoAction._Init.call(this.TT={I:this},0);C.AutoAction._Init.call(this.YZ={
I:this},0);C.AE._Init.call(this.AE={I:this},0);this.__proto__=C.AHQ;var B;this.G(
Vu);this.Text.R(A.z2(A.abg.Oz));this.Ac.G(AEc);this.Ac.Lf(1);this.QF.G(Af2);this.
QF.An(true);this.QF.Aj(true);this.QF.U(A._GetAutoObject(A.Device.Helper).Nk(A.z2(
A.abg.Ag8),Qj,AEd));this.Sd.G(Au5);this.Sd.An(true);this.Sd.Aj(true);this.Sd.U(A.
_GetAutoObject(A.Device.Helper).Nk(A.z2(A.abg.Ag8),Qj,AEe));this.Se.G(Al3);this.
Se.An(true);this.Se.Aj(true);this.Se.U(A._GetAutoObject(A.Device.Helper).Nk(A.z2(
A.abg.Ag8),Qj,AEf));this.Sf.G(AEa);this.Sf.An(true);this.Sf.Aj(true);this.Sf.U(A.
_GetAutoObject(A.Device.Helper).Nk(A.z2(A.abg.Ag8),Qj,AEg));this.AbF.G(AEh);this.
AbF.Aj(true);this.AbF.U(A.z2(A.abg.A4J));this.TS.Index=1;this.TT.Index=2;this.YZ.
Index=3;this.AE.G(JV);this.J(this.Ac,0);this.J(this.QF,0);this.J(this.Sd,0);this.
J(this.Se,0);this.J(this.Sf,0);this.J(this.AbF,0);this.J(this.AE,0);this.Ac.Eu=[
this,this.Iv];this.QF.AoZ(A.zW(A.eV.LO));this.QF.Ao0(A.zW(A.eV.LO));this.QF.AD([
B=this.V4,B.CA,B.CC]);this.QF.Dk(this.V4);this.Sd.AoZ(A.zW(A.eV.LO));this.Sd.Ao0(
A.zW(A.eV.LO));this.Sd.AD([B=this.TS,B.CA,B.CC]);this.Sd.Dk(this.TS);this.Se.AoZ(
A.zW(A.eV.LO));this.Se.Ao0(A.zW(A.eV.LO));this.Se.AD([B=this.TT,B.CA,B.CC]);this.
Se.Dk(this.TT);this.Sf.AoZ(A.zW(A.eV.LO));this.Sf.Ao0(A.zW(A.eV.LO));this.Sf.AD([
B=this.YZ,B.CA,B.CC]);this.Sf.Dk(this.YZ);this.AbF.AV=[this,this.Btx];this.Init(
aArg);},_Done:function(){this.__proto__=C.K2;this.Ac._Done();this.QF._Done();this.
Sd._Done();this.Se._Done();this.Sf._Done();this.AbF._Done();this.V4._Done();this.
TS._Done();this.TT._Done();this.YZ._Done();this.AE._Done();C.K2._Done.call(this);
},_ReInit:function(){C.K2._ReInit.call(this);this.Ac._ReInit();this.QF._ReInit();
this.Sd._ReInit();this.Se._ReInit();this.Sf._ReInit();this.AbF._ReInit();this.V4.
_ReInit();this.TS._ReInit();this.TT._ReInit();this.YZ._ReInit();this.AE._ReInit(
);this.Text.R(A.z2(A.abg.Oz));this.QF.U(A._GetAutoObject(A.Device.Helper).Nk(A.z2(
A.abg.Ag8),Qj,AEd));this.Sd.U(A._GetAutoObject(A.Device.Helper).Nk(A.z2(A.abg.Ag8
),Qj,AEe));this.Se.U(A._GetAutoObject(A.Device.Helper).Nk(A.z2(A.abg.Ag8),Qj,AEf
));this.Sf.U(A._GetAutoObject(A.Device.Helper).Nk(A.z2(A.abg.Ag8),Qj,AEg));this.
AbF.U(A.z2(A.abg.A4J));},_Mark:function(D){var B;C.K2._Mark.call(this,D);if((B=this.
Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QF)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Sd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Se)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Sf)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.V4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.TT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.YZ
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::ActionChainSettingsOverlayMenu"};C.Dm={Cj:A.aan(16,0,null),Dx:function(
){return 16;},Dd:function(aIndex){if(aIndex>=16)return-1;return this.Cj.Get(aIndex
);},DX:function(A2){var P=0;while(P<16){if(this.Cj.Get(P)===A2)return P;P=P+1;}return-
1;},HP:function(){var P=0;var max=-1;while(P<16){if(this.Cj.Get(P)>max)max=this.
Cj.Get(P);P=P+1;}return max;},_Init:function(aArg){C.AC._Init.call(this,aArg);(this.
Cj=[]).__proto__=C.Dm.Cj;this.__proto__=C.Dm;},_className:"Application::ArraySelection"
};C.AutoAction={Ir:null,Aa3:null,ActionToString:null,Index:0,Init:function(aArg){
A.y_([this,this.Aqx],this.Aa3,0);A.ow([this,this.Aqx],this);},Dx:function(){return this.
Ir.AhF();},Dd:function(aIndex){if(aIndex>=this.Dx())return-1;return this.Ir.Acj(
aIndex);},GS:function(aIndex){return this.ActionToString.Cb(this.Dd(aIndex));},DX:
function(A2){var P=0;while(P<this.Dx()){if(this.Ir.Acj(P)===A2)return P;P=P+1;}return-
1;},HP:function(){var P=0;var max=-1;while(P<this.Dx()){if(this.Ir.Acj(P)>max)max=
this.Ir.Acj(P);P=P+1;}return max;},Aqx:function(H){this.Q=this.Aa3.Acj(this.Index
);A.aat([this,this.CA,this.CC],0);},_Init:function(aArg){C.AC._Init.call(this,aArg
);A.Device.ActionToString._Init.call(this.ActionToString={I:this},0);this.__proto__=
C.AutoAction;this.Ir=A._GetAutoObject(C.Ayq);this.Aa3=A._GetAutoObject(C.AutoActions
);this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.ActionToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.ActionToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Ir)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Aa3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoAction"
};C.AHW={Aqu:0,Init:function(aArg){var B;A.za([this,this.A9O],[B=A._GetAutoObject(
A.Device.Device),B.A2h,B.A6r],0);A.za([this,this.A9K],[B=A._GetAutoObject(A.Device.
Device),B.ANN,B.AUJ],0);A.ow([this,this.A9O],this);A.ow([this,this.A9K],this);},
Clear:function(){C.AbI.Clear.call(this);this.Aqu=0;},Cs:function(){A._GetAutoObject(
A.Device.Device).AoN(this.Aqu);A._GetAutoObject(A.Device.Device).AoO(this.toString(
));},A9O:function(H){this.Aqu=A._GetAutoObject(A.Device.Device).Pz;A.vv(this,0);
},A9K:function(H){this.Fq(A._GetAutoObject(A.Device.Device).ArD);A.vv(this,0);},
AkU:function(Jt){if((this.Aqu&(((B=Jt)<0)?B+0x100000000:B))===(((B=Jt)<0)?B+0x100000000:
B))return true;return false;},BhS:function(Jt){this.Aqu=this.Aqu|(((B=Jt)<0)?B+0x100000000:
B);},_Init:function(aArg){C.AbI._Init.call(this,aArg);this.__proto__=C.AHW;this.
Init(aArg);},_className:"Application::ActiveActionsClass"};C.Pz={_Init:function(
){C.AHW._Init.call(this,0);},_variants:function(){return this;},_this:null};C.AHX={
TW:null,AE:null,Ac:null,UJ:null,C6:function(){this.AGw(this);},Init:function(aArg
){A.y_([this,this.AGw],this.TW,0);A.ow([this,this.AGw],this);},DW:function(H){C.
K2.DW.call(this,H);this.TF(this);},Nb:function(){if(!this.CX){this.CX=A._NewObject(
C.N,0);this.CX.CB=[this,this.EY];this.CX.Ch=[this,this.Bs6];this.CX.Cm=[this,this.
BtL];this.CX.De(A.zW(A.abi.AsJ));this.CX.Cn(A.zW(A.abi.AsD));this.CX.C$(A.zW(A.abi.
AhL));}return this.CX;},EY:function(H){if(this.Brq()>0){this.AYg(false);this.AjR(
this);}else A._GetAutoObject(A.Device.Device).A_(28,true,A.jm,0,null);},AGw:function(
H){this.Av0();var P;for(P=0;P<this.TW.AhF();P=P+1){var Yt=A._GetAutoObject(C.Pz).
Acj(P);this.BqN(Yt);}this.J(this.UJ,0);A.z3([this,this.TF],this);},FZ:function(H
){var B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]
);this.AE.N4(-this.Ac.Br[1]);},TF:function(H){var B;this.Ac.AbJ(null,null);if(!!
this.A6&&((this.A6.S&0x400)===0x400))this.Ac.IB(this.A6,true,null,null);},BqN:function(
HD){var AVX=A._NewObject(A.Device.ActionToString,0);var Ab=A._NewObject(C.Aev,0);
Ab.U(AVX.Cb(HD));Ab.Aj(true);Ab.Action=HD;Ab.Bgb(this.TW.AkU(HD));this.J(Ab,0);this.
S4(Ab);},Av0:function(){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)
){var Ake=X;X=X.Af;if(((Ake.S&0x400)===0x400))this.HA(Ake);}},AYg:function(Bqs){
var B;this.TW.Clear();var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((X.
S&0x400)===0x400)&&!(X===this.UJ)){var Ab=(C.Aev.isPrototypeOf(X)?X:null);if(!!Ab
){this.TW.J(Ab.Action);if(Ab.A2E()||Bqs)this.TW.BhS(Ab.Action);}else A.aa8("%s",
AEi);}X=X.Af;}this.TW.Cs();},Brq:function(){var B;var AYn=0;var X=this.Ac.Af;while(
!!X&&!((X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)&&!(X===this.UJ)){var Ab=(C.
Aev.isPrototypeOf(X)?X:null);if(!!Ab){if(Ab.A2E())AYn=AYn+1;}else A.aa8("%s",AEi
);}X=X.Af;}return AYn;},Bs6:function(H){var B;var Ab=(C.Aev.isPrototypeOf(B=this.
A6)?B:null);if(!!Ab){var A9D=(C.Aev.isPrototypeOf(B=Ab.Af)?B:null);if(!!A9D){this.
AlD(A9D,Ab);A.ow([this,this.TF],this);}}},BtL:function(H){var B;var Ab=(C.Aev.isPrototypeOf(
B=this.A6)?B:null);if(!!Ab){var A_S=(C.Aev.isPrototypeOf(B=Ab.AG)?B:null);if(!!A_S
){this.AlD(Ab,A_S);A.ow([this,this.TF],this);}}},Ay5:function(H){var B;A._GetAutoObject(
A.Device.Device).Aps(this);A.ow([this,this.AGw],this);},Iv:function(H){A.ow([this
,this.FZ],this);},_Init:function(aArg){C.K2._Init.call(this,aArg);C.AE._Init.call(
this.AE={I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.Ax$._Init.call(this.
UJ={I:this},0);this.__proto__=C.AHX;this.G(Vu);this.Text.R(A.z2(A.abg.AAx));this.
AE.G(JV);this.Ac.G(AEc);this.Ac.Lf(1);this.UJ.G(AST);this.UJ.Aj(true);this.UJ.U(
A.z2(A.abg.Ay5));this.J(this.AE,0);this.J(this.Ac,0);this.J(this.UJ,0);this.Ac.Eu=[
this,this.Iv];this.UJ.AV=[this,this.Ay5];this.TW=A._GetAutoObject(C.Pz);this.Init(
aArg);},_Done:function(){this.__proto__=C.K2;this.AE._Done();this.Ac._Done();this.
UJ._Done();C.K2._Done.call(this);},_ReInit:function(){C.K2._ReInit.call(this);this.
AE._ReInit();this.Ac._ReInit();this.UJ._ReInit();this.Text.R(A.z2(A.abg.AAx));this.
UJ.U(A.z2(A.abg.Ay5));this.C6();},_Mark:function(D){var B;C.K2._Mark.call(this,D
);if((B=this.TW)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UJ)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::ActiveActionsSettingsMenu"};C.Aev={
Action:64,Init:function(aArg){this.T.Y(A.zW(A.eV.Az));this.T.Text.A0(0x11);this.
T.Text.HV(10);},Bh:function(aSize){C.AcJ.Bh.call(this,aSize);this.T.G(A.aaQ(this.
T.M,this.Ml.M[0]));},Ah:function(Ae){var B;C.AcJ.Ah.call(this,Ae);var FV=((Ae&0x10
)===0x10);var Fx=((Ae&0x20)===0x20);var Fw=this.Bi.Bw;var Gf=A.iF.AeO;var G3=A.iF.
Be;if(this.GY){Gf=A.iF.Be;G3=A.iF.Text;}if(!FV){this.Background.L(Gf);this.T.L(A.
iF.CE);}else if(Fw){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);}else if(Fx){this.
Background.L(A.iF.A6);this.T.L(A.iF.Be);}else{this.Background.L(Gf);this.T.L(G3);
}this.Lr=FV;this.Kq=Fx;this.QC=Fw;},JE:function(H){this.AXV(this);},AXV:function(
H){this.ABb(!this.Aks);},Bgb:function(E){this.ABb(E);},A2E:function(){return this.
Aks;},_Init:function(aArg){C.AcJ._Init.call(this,aArg);this.__proto__=C.Aev;this.
Ml.G(ASU);this.Init(aArg);},_className:"Application::ActionsItemCheckBox"};C.AbI={
DZ:0,Ir:A.aan(17,0,null),Acj:function(I6){return this.Ir.Get(I6);},AhF:function(
){return this.DZ;},Clear:function(){var P;for(P=0;P<17;P=P+1)this.Ir.Set(P,0);this.
DZ=0;},J:function(Jt){if(this.DZ>=17)A.aa8("%s",ASV);else{this.Ir.Set(this.DZ,Jt
);this.DZ=this.DZ+1;}},Cs:function(){},Fq:function(AaR){var AFq=AaR.indexOf(String.
fromCharCode(0x2C),0);var AWb=A.jm;var P=0;this.DZ=0;while(P<17)if(AaR===A.jm){this.
Ir.Set(P,0);P++;}else{if(AFq===-1){AWb=AaR;AaR=A.jm;}else{AWb=A.aaX(AaR,AFq);AaR=
A.aa3(AaR,0,AFq+1);}var Yt=A.aa1(AWb,0,10)|0;if(this.A1s(Yt)){this.Ir.Set(this.DZ
,Yt);this.DZ=this.DZ+1;P++;}AFq=AaR.indexOf(String.fromCharCode(0x2C),0);}if(AaR
!==A.jm)A.aa8("%s",ASW);},toString:function(){var AXg=(((B=this.Ir.Get(0))<0)?B+
0x100000000:B).toFixed();var P;for(P=1;P<this.DZ;P=P+1)AXg=(AXg+ASX)+(((B=this.Ir.
Get(P))<0)?B+0x100000000:B).toFixed();return AXg;},Contains:function(Jt){var P;for(
P=0;P<this.DZ;P=P+1)if(this.Ir.Get(P)===Jt)return true;return false;},A1s:function(
Jt){return true;},_Init:function(aArg){(this.Ir=[]).__proto__=C.AbI.Ir;this.__proto__=
C.AbI;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){
},_Mark:function(D){var B;if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::ActionsList"};C.AIB={Init:function(
aArg){var B;A.za([this,this.A9V],[B=A._GetAutoObject(A.Device.Device),B.A2r,B.A6y
],0);A.ow([this,this.A9V],this);},Cs:function(){A._GetAutoObject(A.Device.Device
).Z7(this.toString());},A9V:function(H){this.Fq(A._GetAutoObject(A.Device.Device
).AutoActions);A.vv(this,0);},_Init:function(aArg){C.AbI._Init.call(this,aArg);this.
__proto__=C.AIB;this.Init(aArg);},_className:"Application::AutoActionsClass"};C.
AutoActions={_Init:function(){C.AIB._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.UH={TU:null,JQ:null,A1p:A.jm,Action:0,AY0:false,A4w:false,A5b:false
,Bh:function(aSize){C.E3.Bh.call(this,aSize);this.P0.G(this.LN.M);this.NV.G(this.
P0.M);},Ah:function(Ae){C.E3.Ah.call(this,Ae);if(!this.Lr){this.JQ.SC.L(A.iF.AkT
);this.JQ.PH.W(true);this.JQ.PH.L(A.iF.AMD);}else if(this.QC){this.JQ.SC.L(A.iF.
Be);this.JQ.PH.W(false);}else if(this.Kq){this.JQ.SC.L(A.iF.Be);this.JQ.PH.W(false
);}else{this.JQ.SC.L(A.iF.Text);this.JQ.PH.W(true);this.JQ.PH.L(A.iF.CR);}},BeZ:
function(E){if(this.Action===E)return;this.Action=E;},Bf$:function(E){if(this.A1p===
E)return;this.A1p=E;this.TU.Text.R(E);},AOR:function(E){if(this.A5b===E)return;this.
A5b=E;this.JQ.BgP(!this.JQ.AP2);},ABK:function(E){if(this.A4w===E)return;this.A4w=
E;this.JQ.W(!this.JQ.Fe());},A3m:function(E){if(this.AY0===E)return;this.AY0=E;this.
TU.W(E);},_Init:function(aArg){C.E3._Init.call(this,aArg);C.TU._Init.call(this.TU={
I:this},0);C.JQ._Init.call(this.JQ={I:this},0);this.__proto__=C.UH;this.G(ASY);this.
Background.G(ASZ);this.Im.An(false);this.Im.W(false);this.TU.G(AS0);this.TU.W(false
);this.JQ.G(AS1);this.JQ.W(false);this.J(this.TU,0);this.J(this.JQ,0);this.LN.At(
A.zW(A.abi.AI3));},_Done:function(){this.__proto__=C.E3;this.TU._Done();this.JQ.
_Done();C.E3._Done.call(this);},_ReInit:function(){C.E3._ReInit.call(this);this.
TU._ReInit();this.JQ._ReInit();},_Mark:function(D){var B;C.E3._Mark.call(this,D);
if((B=this.TU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JQ)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::MenuItemActionScreen"};C.TU={AH:null,Text:null
,CT:null,Init:function(aArg){this.Text.G(this.M);this.CT.G(this.M);this.AH.G(this.
M);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.
AH={I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);A.abh.CT._Init.call(this.
CT={I:this},0);this.__proto__=C.TU;this.AH.G(AS2);this.AH.L(A.iF.Bcs);this.G(AS3
);this.Text.G(AS4);this.Text.L(A.iF.Text);this.CT.G(AS5);this.CT.N7(1);this.CT.L(
A.iF.Text);this.J(this.AH,0);this.J(this.Text,0);this.J(this.CT,0);this.Text.Y(A.
zW(A.eV.Az));this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.AH.
_Done();this.Text._Done();this.CT._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.AH._ReInit();this.Text._ReInit();this.CT._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AH)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CT
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionInfo"};C.JQ={PH:
null,SC:null,AP2:false,BgP:function(E){if(this.AP2===E)return;this.AP2=E;if(E){this.
SC.At(A.zW(A.abi.AyX));this.PH.At(A.zW(A.abi.AyX));}else{this.SC.At(A.zW(A.abi.AnX
));this.PH.At(A.zW(A.abi.AnX));}},_Init:function(aArg){A.Core.O._Init.call(this,
aArg);A.abh.Am._Init.call(this.PH={I:this},0);A.abh.Am._Init.call(this.SC={I:this
},0);this.__proto__=C.JQ;this.G(Avb);this.PH.G(Avb);this.PH.Ce(1);this.SC.G(Avb);
this.SC.Ce(0);this.J(this.PH,0);this.J(this.SC,0);this.PH.At(A.zW(A.abi.AnX));this.
SC.At(A.zW(A.abi.AnX));},_Done:function(){this.__proto__=A.Core.O;this.PH._Done(
);this.SC._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.PH._ReInit();this.SC._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.PH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.SC).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::PlusMinusAction"};C.ANu={
Qq:null,BT:null,C3:null,Do:null,JM:null,Xy:10,Aoe:0,AAG:0,ANI:0,AvQ:false,K9:false
,A76:false,Init:function(aArg){var B;if(A._GetAutoObject(A.Device.Device).Aq.Ms(
))A._GetAutoObject(A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.Device).
Aq.If().toFixed(),0,null);A._GetAutoObject(A.Device.Helper).V.GG();A._GetAutoObject(
A.Device.Helper).Aye(A._GetAutoObject(A.Device.Helper).V);A.za([this,this.Aw8],this.
GX.Q,0);A.za([this,this.Bth],this.C3.Q,0);A.za([this,this.AxV],this.Do.Q,0);A.za([
this,this.AxV],this.Do.Ha.Q,0);A.za([this,this.AxV],[this,this.AN5,this.ABI],0);
A.za([this,this.Ix],[B=A._GetAutoObject(A.Device.Device),B.A3e,B.A6Z],0);A.za([this
,this.A_o],this.BT.Q,0);A.ow([this,this.Aw8],this);A.ow([this,this.Ix],this);A.ow([
this,this.AxV],this);A.ow([this,this.A_o],this);},CF:function(H){if(!this.AvQ){this.
AvQ=true;A.ow([this,this.Vw],this);}else C.Hp.CF.call(this,H);},Aee:function(H){
this.ANI=this.Xy;this.A8c(this);},EY:function(H){A._GetAutoObject(A.Device.Helper
).V.G1();A._GetAutoObject(C.A1).Fm();},Ark:function(){this.N.Cd(A.jm);this.N.De(
A.zW(A.abi.Az1));this.N.Cm=[this,this.Avz];},Aw4:function(H){A._GetAutoObject(C.
A1).BY(63);},ABI:function(E){if(this.Xy===E)return;this.Xy=E;A.aat([this,this.AN5
,this.ABI],0);},A8c:function(H){var F;if(!this.Xy||(this.A76===true)){A._GetAutoObject(
A.Device.Device).A_(24,false,Cw,0,null);if(this.AAG===1)A._GetAutoObject(A.Device.
Device).A_(26,true,A.jm,2000,null);else A._GetAutoObject(A.Device.Device).A_(23,
true,this.AAG.toFixed(),2000,null);this.EY(this);return;}this.Qq.GG();this.Qq.DS(
A._GetAutoObject(A.Device.Helper).V.AnimalType);this.Qq.O2(A._GetAutoObject(A.Device.
Helper).V.Breed);this.Qq.AcV(A._GetAutoObject(A.Device.Helper).V.DateOfBirth);this.
Qq.J9(A._GetAutoObject(A.Device.Helper).V.Gender);this.Qq.O3(A._GetAutoObject(A.
Device.Helper).V.NaisId);this.Qq.Nf(A._GetAutoObject(A.Device.Helper).V.TransponderId
);this.Qq.XK(A._GetAutoObject(A.Device.Helper).V.VisualId);var AvP=A._GetAutoObject(
A.Device.Helper).A77(this.Qq,(F=this.Do.Hq.GN,F[1].call(F[0])),A._GetAutoObject(
A.Device.Device).Aq);if(!AvP)this.Anu();else{A._GetAutoObject(A.Device.Helper).AWN(
this.Qq,AvP,(F=this.Do.Hq.GN,F[1].call(F[0])),this.Xy-1,[this,this.Aw5]);A._GetAutoObject(
A.Device.Device).A_(24,false,Cw,0,null);}},Ix:function(H){var B;if(A._GetAutoObject(
A.Device.Helper).AkV())this.EG.W(true);else this.EG.W(false);if(this.K9){this.C3.
W(false);this.BT.U(A.z2(A.abg.A0w));this.BT.ABd(A.zW(A.abi.Ac$));}else{this.C3.W(
true);this.BT.U(A.z2(A.abg.AiR));this.BT.ABd(null);}if((this.Ac.Bb2(this.A6)>=0)&&(((
this.A6.S&0x1)===0x1)===false))this.Px(this.Ac.Zw(this.A6,0x1));this.Al();},AOu:
function(E){if(this.Aoe===E)return;this.Aoe=E;A.aat([this,this.A2D,this.AOu],0);
},AxV:function(H){var F;var AF_=(F=this.Do.Q,F[1].call(F[0]));var AwR=-1;switch((
F=this.Do.Hq.GN,F[1].call(F[0]))){case 0:AwR=AF_+((F=A._GetAutoObject(A.Device.Helper
).A8I(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,A._GetAutoObject(
A.Device.Helper).V.Gender),F[1].call(F[0]))*(this.Xy-1));break;case 1:AwR=(AF_+this.
Xy)-1;break;case 3:case 2:case 5:case 4:switch(this.Do.Ha.AC.Q){case 0:AwR=(AF_+
this.Xy)-1;break;case 1:AwR=(AF_-this.Xy)+1;break;default:throw new Error(AS6+this.
Do.Ha.AC.Q.toFixed());}break;default:throw new Error(AS7+this.Do.Ha.AC.Q.toFixed(
));}this.AOu(AwR);},Bth:function(H){A.ow([this,this.Ix],this);A.ow([this,this.Aq6
],this);},Aw8:function(H){A._GetAutoObject(A.Device.Helper).AQt(A._GetAutoObject(
A.Device.Helper).V,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
K9);A.ow([this,this.AxV],this);},Aw5:function(H){var F;var Ar=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!Ar)return;switch(Ar.Id){case 22:case 21:case 48:if((
Ar.Id===48)&&(Ar.PopupState===7))this.AXj();else switch((F=this.Do.Hq.GN,F[1].call(
F[0]))){case 3:case 2:case 5:case 4:this.Px(this.Do);break;case 0:this.Px(this.C3
);break;case 1:this.Px(this.BT);break;default:throw new Error(Avc+(F=this.Do.Hq.
GN,F[1].call(F[0])).toFixed());}break;case 25:this.Px(this.BT);break;case 47:if(
Ar.PopupState===7)this.AXj();else this.Px(this.BT);break;case 43:this.Px(this.C3
);break;case 42:{this.Px(this.BT);if(Ar.PopupState===7)A.ow([this,this.Vw],this);
}break;case 41:break;default:A.aa8("%s%e",Avd,Ar.Id);}},Anu:function(){this.Qq.Cs(
A._GetAutoObject(A.Device.Device).Aq);this.AAG=this.AAG+1;if(A._GetAutoObject(A.
Device.Helper).AkV()){if(A._GetAutoObject(A.Device.Device).Bt.Ms()){A._GetAutoObject(
A.Device.Device).A_(24,false,Ym,0,null);A._GetAutoObject(A.Device.Device).A_(50,
true,A._GetAutoObject(A.Device.Device).Bt.If().toFixed(),0,null);}else{var Ol=A.
_GetAutoObject(A.Device.Device).Aq.LM(0,this.Qq.Id);A._GetAutoObject(A.Device.Device
).UZ(Ol);var Ca=A._NewObject(A.Device.Rating,0);Ca.GG();Ca.OnSetAnimalId(this.Qq.
Id);Ca.OnSetBodyWeight(this.PB);Ca.OnSetTimestamp(this.Qq.DateOfBirth);Ca.Cs(A._GetAutoObject(
A.Device.Device).Bt);}}this.AXj();},AXj:function(){var B;var F,Dc;if(!!(F=this.BT.
Q,F[1].call(F[0]))){(F=this.BT.Q,F[2].call(F[0],F[1].call(F[0])+1));if(this.K9)(
Dc=this.C3.Q,Dc[2].call(Dc[0],(F=this.BT.Q,F[1].call(F[0]))));}if(!this.K9)(Dc=this.
C3.Q,Dc[2].call(Dc[0],A._GetAutoObject(A.Device.Helper).A5t(A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.Gender.Animal.Gender,(F=this.C3.Q,F[1].call(
F[0])),this.C3.AhC(),this.C3.AhG())));var Is=null;switch((F=this.Do.Hq.GN,F[1].call(
F[0]))){case 3:Is=[B=A._GetAutoObject(A.Device.Device),B.As7,B.Avs];break;case 2:
Is=[B=A._GetAutoObject(A.Device.Device),B.As8,B.Avt];break;case 4:case 5:Is=[B=A.
_GetAutoObject(A.Device.Device),B.Ale,B.Amb];break;default:;}if(!!Is){switch((F=
this.Do.Ji.Uc,F[1].call(F[0]))){case 1:Is[2].call(Is[0],A._GetAutoObject(A.Device.
Helper).V.VisualId-1);break;case 0:Is[2].call(Is[0],A._GetAutoObject(A.Device.Helper
).V.VisualId+1);break;default:;}(F=this.Do.Q,F[2].call(F[0],Is[1].call(Is[0])));
}var V0=100-((this.Xy/this.ANI)*100);A._GetAutoObject(A.Device.Device).A_(24,true
,(((this.ANI.toFixed()+Aqa)+(V0|0).toFixed())+Aqa)+(F=this.Do.Q,F[1].call(F[0])).
toFixed(),0,[this,this.Bts]);this.ABI(this.Xy-1);A.z3([this,this.A8c],null);},Bts:
function(H){var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.
PopupState===5))this.A76=true;},Am_:function(H){var F;C.Hp.Am_.call(this,H);(F=this.
EG.Q,F[2].call(F[0],this.EG.AlI));switch(this.Dj.AC.Q){case 0:{this.JM.N5(A.z2(A.
abg.AIZ));this.JM.Ng(A.z2(A.abg.AI0));}break;case 1:{this.JM.N5(A.z2(A.abg.BaV));
this.JM.Ng(A.z2(A.abg.BaW));}break;case 2:{this.JM.N5(A.z2(A.abg.BcO));this.JM.Ng(
A.z2(A.abg.BcP));}break;default:throw new Error(Ap8);}},AcY:function(E){if(this.
K9===E)return;this.K9=E;A.aat([this,this.As9,this.AcY],0);},Aq6:function(H){var F
,Dc,RU;this.AcY(((F=this.BT.Q,F[1].call(F[0]))===(Dc=this.C3.Q,Dc[1].call(Dc[0])
))&&!!(RU=this.BT.Q,RU[1].call(RU[0])));A.ow([this,this.Ix],this);},A_o:function(
H){A.ow([this,this.Aq6],this);},AN5:function(){return this.Xy;},A2D:function(){return this.
Aoe;},As9:function(){return this.K9;},_Init:function(aArg){C.Hp._Init.call(this,
aArg);C.AsW._Init.call(this.BT={I:this},0);C.AfM._Init.call(this.C3={I:this},0);
C.ACL._Init.call(this.Do={I:this},0);C.APQ._Init.call(this.JM={I:this},0);this.__proto__=
C.ANu;var B;this.Dw(C.AzD);this.BT.G(Al3);this.BT.Aj(true);this.BT.U(A.z2(A.abg.
AiR));this.BT.AoV(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon))+Cw)+A.z2(A.abg.Apz));this.
BT.AoW(A.z2(A.abg.Ah$));this.C3.G(AEj);this.C3.Aj(true);this.C3.U(A.z2(A.abg.Z1)
);this.C3.AtP(false);this.Do.G(AS8);this.Do.Aj(true);this.Do.U(A.z2(A.abg.A1c));
this.Do.Bu(0);this.JM.G(AS9);this.JM.Aj(true);this.JM.U(A.z2(A.abg.A1$));this.JM.
Hy(1);this.JM.FS(500);this.JM.Ng(A.z2(A.abg.AI0));this.JM.N5(A.z2(A.abg.AIZ));this.
JM.A3H(A.z2(A.abg.Aoe)+A.z2(A.abg.Colon));this.J(this.BT,0);this.J(this.C3,0);this.
J(this.Do,0);this.J(this.JM,0);this.Qq=A._NewObject(A.Device.Animal,0);this.BT.AV=[
this,this.Vw];this.BT.Nc([this,this.Vw]);this.BT.Nd(A.zW(A.abi.Ac$));this.BT.AD([
B=A._GetAutoObject(A.Device.Helper).V,B.Aid,B.Nf]);this.BT.P3([B=A._GetAutoObject(
A.Device.Device),B.Aib,B.Ai8]);this.BT.Rr([B=A._GetAutoObject(A.Device.Device),B.
Aic,B.Ai9]);this.BT.SX([B=A._GetAutoObject(A.Device.Device),B.Alc,B.Ama]);this.BT.
AcY([this,this.As9,this.AcY]);this.C3.He([this,this.Es,this.HW]);this.C3.Nc([this
,this.Vw]);this.C3.Nd(A.zW(A.abi.Ac$));this.C3.US([B=this.Gender.Animal,B.XA,B.J9
]);this.C3.P3([B=A._GetAutoObject(A.Device.Device),B.Aib,B.Ai8]);this.C3.Rr([B=A.
_GetAutoObject(A.Device.Device),B.Aic,B.Ai9]);this.C3.SX([B=A._GetAutoObject(A.Device.
Device),B.Alc,B.Ama]);this.C3.AD([B=A._GetAutoObject(A.Device.Helper).V,B.AoH,B.
O3]);this.C3.Alh([B=this.AnimalType.Animal,B.O1,B.DS]);this.Do.He([this,this.Es,
this.HW]);this.Do.Nc([B=this.Do,B.GC]);this.Do.Nd(A.zW(A.abi.Edit));this.Do.AD([
B=A._GetAutoObject(A.Device.Helper).V,B.AoL,B.XK]);this.Do.A3n(A._GetAutoObject(
A.Device.Helper).V);this.JM.AD([this,this.AN5,this.ABI]);this.JM.Bfx([this,this.
A2D,this.AOu]);this.Init(aArg);},_Done:function(){this.__proto__=C.Hp;this.BT._Done(
);this.C3._Done();this.Do._Done();this.JM._Done();C.Hp._Done.call(this);},_ReInit:
function(){C.Hp._ReInit.call(this);this.BT._ReInit();this.C3._ReInit();this.Do._ReInit(
);this.JM._ReInit();this.BT.U(A.z2(A.abg.AiR));this.BT.AoV(((A.z2(A.abg.Ok)+A.z2(
A.abg.Colon))+Cw)+A.z2(A.abg.Apz));this.BT.AoW(A.z2(A.abg.Ah$));this.C3.U(A.z2(A.
abg.Z1));this.Do.U(A.z2(A.abg.A1c));this.JM.U(A.z2(A.abg.A1$));this.JM.Ng(A.z2(A.
abg.AI0));this.JM.N5(A.z2(A.abg.AIZ));this.JM.A3H(A.z2(A.abg.Aoe)+A.z2(A.abg.Colon
));},_Mark:function(D){var B;C.Hp._Mark.call(this,D);if((B=this.Qq)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C3
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.JM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalsScreen"
};C.APl={B$:null,RatingMode:null,Nb:function(){if(!this.CX){this.CX=A._NewObject(
C.N,0);this.CX.Cm=null;this.CX.Ch=null;this.CX.CB=[this,this.AjR];this.CX.Cd(A.jm
);this.CX.Cn(null);this.CX.C$(A.zW(A.abi.AhL));}return this.CX;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.B$._Init.call(this.B$={I:this},0);C.
RatingMode._Init.call(this.RatingMode={I:this},0);this.__proto__=C.APl;var B;this.
G(Vu);this.B$.G(Au_);this.B$.U(A.z2(A.abg.A5k));this.J(this.B$,0);this.B$.AD([B=
this.RatingMode,B.CA,B.CC]);this.B$.Dk(this.RatingMode);},_Done:function(){this.
__proto__=C.OverlayMenu;this.B$._Done();this.RatingMode._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.B$._ReInit(
);this.RatingMode._ReInit();this.B$.U(A.z2(A.abg.A5k));},_Mark:function(D){var B;
C.OverlayMenu._Mark.call(this,D);if((B=this.B$)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RatingMode)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingOverlay"
};C.RatingMode={RatingModeToString:null,Init:function(aArg){var B;A.za([this,this.
A_X],[B=A._GetAutoObject(A.Device.Device),B.AN9,B.AUV],0);A.ow([this,this.A_X],this
);},Dx:function(){return 2;},GS:function(aIndex){return this.RatingModeToString.
Cb(this.Dd(aIndex));},AD:function(E){C.Dm.AD.call(this,E);A._GetAutoObject(A.Device.
Device).AtO(E);},A_X:function(H){this.Q=A._GetAutoObject(A.Device.Device).RatingMode;
A.aat([this,this.CA,this.CC],0);},_Init:function(aArg){C.Dm._Init.call(this,aArg
);A.Device.RatingModeToString._Init.call(this.RatingModeToString={I:this},0);this.
__proto__=C.RatingMode;this.Cj.Set(0,0);this.Cj.Set(1,1);this.Init(aArg);},_Done:
function(){this.__proto__=C.Dm;this.RatingModeToString._Done();C.Dm._Done.call(this
);},_ReInit:function(){C.Dm._ReInit.call(this);this.RatingModeToString._ReInit();
},_Mark:function(D){var B;C.Dm._Mark.call(this,D);if((B=this.RatingModeToString).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingMode"};C.AJh={U2:
function(H){C.Akl.U2.call(this,H);if(A._GetAutoObject(A.Device.Helper).V.Aob()){
A._GetAutoObject(A.Device.Helper).V.Ain(false);A._GetAutoObject(A.Device.Helper).
V.Cs(A._GetAutoObject(A.Device.Device).Aq);}},_Init:function(aArg){C.Akl._Init.call(
this,aArg);this.__proto__=C.AJh;},_className:"Application::ControlMeasureTemperatureScreen"
};C.GO={Dn:A.jm,U:function(E){if(this.Dn===E)return;this.Dn=E;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);this.__proto__=C.GO;},_className:"Application::BaseItem"
};C.AQH={B$:null,WeightRecordingMode:null,Nb:function(){if(!this.CX){this.CX=A._NewObject(
C.N,0);this.CX.Cm=null;this.CX.Ch=null;this.CX.CB=[this,this.AjR];this.CX.Cd(A.jm
);this.CX.Cn(null);this.CX.C$(A.zW(A.abi.AhL));}return this.CX;},_Init:function(
aArg){C.OverlayMenu._Init.call(this,aArg);C.B$._Init.call(this.B$={I:this},0);C.
WeightRecordingMode._Init.call(this.WeightRecordingMode={I:this},0);this.__proto__=
C.AQH;var B;this.G(Vu);this.B$.G(Au_);this.B$.U(A.z2(A.abg.ApX));this.B$.FS(1);this.
J(this.B$,0);this.B$.AD([B=this.WeightRecordingMode,B.CA,B.CC]);this.B$.Dk(this.
WeightRecordingMode);},_Done:function(){this.__proto__=C.OverlayMenu;this.B$._Done(
);this.WeightRecordingMode._Done();C.OverlayMenu._Done.call(this);},_ReInit:function(
){C.OverlayMenu._ReInit.call(this);this.B$._ReInit();this.WeightRecordingMode._ReInit(
);this.B$.U(A.z2(A.abg.ApX));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(
this,D);if((B=this.B$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WeightRecordingMode
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeighingOverlay"};C.WeightRecordingMode={
WeightRecordingModeToString:null,Dx:function(){return 2;},GS:function(aIndex){return this.
WeightRecordingModeToString.Cb(this.Dd(aIndex));},AD:function(E){C.Dm.AD.call(this
,E);A._GetAutoObject(A.Device.Device).AtZ(E);},Init:function(aArg){var B;A.za([this
,this.A$X],[B=A._GetAutoObject(A.Device.Device),B.A3d,B.A6Y],0);A.ow([this,this.
A$X],this);},A$X:function(H){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;
A.aat([this,this.CA,this.CC],0);},_Init:function(aArg){C.Dm._Init.call(this,aArg
);A.Device.WeightRecordingModeToString._Init.call(this.WeightRecordingModeToString={
I:this},0);this.__proto__=C.WeightRecordingMode;this.Cj.Set(0,0);this.Cj.Set(1,1
);this.Init(aArg);},_Done:function(){this.__proto__=C.Dm;this.WeightRecordingModeToString.
_Done();C.Dm._Done.call(this);},_ReInit:function(){C.Dm._ReInit.call(this);this.
WeightRecordingModeToString._ReInit();},_Mark:function(D){var B;C.Dm._Mark.call(
this,D);if((B=this.WeightRecordingModeToString)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::WeightRecordingMode"};C.Wd={BooleanToAutoOnOff:null,GS:
function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.BooleanToAutoOnOff.
Cb(aIndex);},_Init:function(aArg){C.Fv._Init.call(this,aArg);A.Device.BooleanToAutoOnOff.
_Init.call(this.BooleanToAutoOnOff={I:this},0);this.__proto__=C.Wd;},_Done:function(
){this.__proto__=C.Fv;this.BooleanToAutoOnOff._Done();C.Fv._Done.call(this);},_ReInit:
function(){C.Fv._ReInit.call(this);this.BooleanToAutoOnOff._ReInit();},_Mark:function(
D){var B;C.Fv._Mark.call(this,D);if((B=this.BooleanToAutoOnOff)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AutoOnOff"};C.Auz={A1q:function(){var B;this.
Auf(1);this.IX(0,3);this.T4(0,0,(B=this.M)[3]-B[1]);this.AY6(0,(((B=this.M)[2]-B[
0])/2)|0,0);this.AY6(0,(B=this.M)[2]-B[0],(B=this.M)[3]-B[1]);this.T$(0);},_Init:
function(aArg){C.Ax9._Init.call(this,aArg);this.__proto__=C.Auz;},_className:"Application::Triangle"
};C.AO5={Ac:null,Init:function(aArg){this.BqP(this);},BqO:function(Pf){var Ab=A.
_NewObject(C.AJo,0);Ab.G(BI);Ab.U(Pf);Ab.Aj(true);Ab.An(false);Ab.Bk(true);this.
J(Ab,0);this.Aqw(this);},Aqw:function(H){var B;var Ajn=1;var AXb=0;var X=this.Ac.
Af;var Cg=null;var Kr=null;while(!!X&&!((X.S&0x200)===0x200)){Cg=(C.Tc.isPrototypeOf(
X)?X:null);if(((X.S&0x400)===0x400)&&!!Cg){var AHc=(B=Cg.T.Cp.A06(Cg.T.String,0,-
1))[2]-B[0];if(!!(C.LK.isPrototypeOf(X)?X:null))AHc=AHc+20;if(AXb<AHc)AXb=AHc;Cg.
G(A.aaO(Cg.M,120));Cg.G(A.aaL(Cg.M,28));Cg.G(A.aaP(Cg.M,this.M[0]));Cg.G(A.aaR(Cg.
M,((B=this.M)[3]-B[1])-(Ajn*28)));Ajn=Ajn+1;}else{Kr=(A.abh.DK.isPrototypeOf(X)?
X:null);if(((X.S&0x400)===0x400)&&!!Kr){var C9=((B=this.M)[3]-B[1])-((Ajn-1)*28);
Kr.D5([this.M[0],Kr.EV[1]]);Kr.D5([Kr.EV[0],C9]);Kr.DL([this.M[0]+120,Kr.Ev[1]]);
Kr.DL([Kr.Ev[0],C9]);}}X=X.Af;}this.Bt8(AXb,28);},Bt8:function(aWidth,BpW){var B;
var X=this.Ac.Af;var Cg=null;var Kr=null;aWidth=aWidth+20;if(aWidth>(C.ApA[0]-10
))aWidth=C.ApA[0]-10;while(!!X&&!((X.S&0x200)===0x200)){Cg=(C.Tc.isPrototypeOf(X
)?X:null);if(((X.S&0x400)===0x400)&&!!Cg){Cg.T.Text.A0(0x14);Cg.T.Text.HV(10);Cg.
G(A.aaO(Cg.M,aWidth));Cg.G(A.aaL(Cg.M,BpW));Cg.G(A.aaP(Cg.M,this.M[2]-((B=Cg.M)[
2]-B[0])));}else{Kr=(A.abh.DK.isPrototypeOf(X)?X:null);if(((X.S&0x400)===0x400)&&
!!Kr){Kr.D5([this.M[2]-aWidth,Kr.EV[1]]);Kr.DL([this.M[2],Kr.Ev[1]]);}}X=X.Af;}}
,BqP:function(H){var Ab=A._GetAutoObject(C.Cz).An5;while(!!Ab){if(!!(C.At4.isPrototypeOf(
Ab)?Ab:null)){var Ex=(C.At4.isPrototypeOf(Ab)?Ab:null);this.BqM(Ex.Dn,Ex.AV,Ex.Bw
,Ex.A40);}else if(!!(C.At6.isPrototypeOf(Ab)?Ab:null)){var Ex=(C.At6.isPrototypeOf(
Ab)?Ab:null);this.BqU(Ex.Dn,Ex.AV,Ex.Bw,Ex.AkU);}else if(!!(C.Ac6.isPrototypeOf(
Ab)?Ab:null)){var Ex=(C.Ac6.isPrototypeOf(Ab)?Ab:null);this.BqL(Ex.Dn,Ex.AV,Ex.Bw
);}else if(!!(C.Aiu.isPrototypeOf(Ab)?Ab:null)){var Ex=(C.Aiu.isPrototypeOf(Ab)?
Ab:null);this.BqO(Ex.Dn);}else if(!!(C.ACe.isPrototypeOf(Ab)?Ab:null))this.BqV();
Ab=Ab.LV;}A._GetAutoObject(C.Cz).Clear();A.ow([this,this.Aqw],this);},BqL:function(
Pf,AaY,AvF){var Ab=A._NewObject(C.LK,0);Ab.G(BI);Ab.U(Pf);Ab.AV=AaY;Ab.Aj(true);
Ab.An(AvF);Ab.Bk(true);this.J(Ab,0);this.Aqw(this);},BqV:function(){var Kr=A._NewObject(
A.abh.DK,0);Kr.L(A.iF.Be);Kr.Aj(true);Kr.N7(3);this.J(Kr,0);this.Aqw(this);},BqM:
function(Pf,AaY,AvF,AqT){var Ab=A._NewObject(C.AnT,0);Ab.G(BI);Ab.U(Pf);Ab.AV=AaY;
Ab.Aj(true);Ab.An(AvF);Ab.Bk(true);Ab.ABr(AqT);this.J(Ab,0);this.Aqw(this);},BqU:
function(Pf,AaY,AvF,AqT){var Ab=A._NewObject(C.AJn,0);Ab.G(BI);Ab.U(Pf);Ab.AV=AaY;
Ab.Aj(true);Ab.An(AvF);Ab.Bk(true);Ab.ABr(AqT);this.J(Ab,0);this.Aqw(this);},_Init:
function(aArg){C.OverlayMenu._Init.call(this,aArg);A.Core.Ac._Init.call(this.Ac={
I:this},0);this.__proto__=C.AO5;this.G(Vu);this.Ac.G(Vu);this.J(this.Ac,0);this.
Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.Ac._Done();C.OverlayMenu.
_Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ac._ReInit(
);},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((B=this.Ac)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayMenu"};C.AfH={_Init:
function(){A.abm.AfH._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.A4t={An5:null,Afm:null,V5:function(Pf){var Ex=A._NewObject(C.Aiu,0);Ex.Dn=
Pf;this.J(Ex);},Clear:function(){this.An5=null;this.Afm=null;},IT:function(){var
Kr=A._NewObject(C.ACe,0);this.J(Kr);},J:function(A7u){if(!this.An5){this.An5=A7u;
this.Afm=this.An5;}else{this.Afm.LV=A7u;this.Afm=this.Afm.LV;}},Aew:function(Pf,
AaY){var Ex=A._NewObject(C.Ac6,0);Ex.Dn=Pf;Ex.AV=AaY;this.J(Ex);},AY3:function(Pf
,AaY,Bp3){var Ex=A._NewObject(C.At4,0);Ex.Dn=Pf;Ex.AV=AaY;Ex.A40=Bp3;this.J(Ex);
},Ag_:function(Pf){var Ex=A._NewObject(C.Ac6,0);Ex.Dn=Pf;Ex.Bw=false;this.J(Ex);
},Ag$:function(Pf,AaY,Bp0){var Ex=A._NewObject(C.At6,0);Ex.Dn=Pf;Ex.AV=AaY;Ex.AkU=
Bp0;this.J(Ex);},_Init:function(aArg){this.__proto__=C.A4t;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.An5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Afm)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"Application::OptionsOverlayManagerClass"};C.Cz={_Init:
function(){C.A4t._Init.call(this,0);},_variants:function(){return this;},_this:null
};C.At5={LV:null,_Init:function(aArg){this.__proto__=C.At5;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.LV)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::OptionsOverlayItem"
};C.AKj={Akj:null,AoP:function(E){if(this.Akj===E)return;if(!!this.Aa)this.Aa.S4(
this);if(!!this.Akj)this.AnY(this.Akj,A._GetAutoObject(C.Auh),null,null,null,null
,false);this.Akj=E;if(!!this.Akj)this.Aiy(this.Akj,A._GetAutoObject(C.Auh),null,
null,null,null,null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(
this,aArg);this.__proto__=C.AKj;this.G(BI);},_Mark:function(D){var B;A.Core.O._Mark.
call(this,D);if((B=this.Akj)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::FooterContainer"
};C.XL={_Init:function(){C.AKj._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.Nh={Init:function(aArg){var C7=A._NewObject(C.AO6,0);C7.G(this.M
);this.Aiy(C7,A._GetAutoObject(C.ApE),null,A._GetAutoObject(C.ApE),A._GetAutoObject(
C.ApE),null,null,null,null,false);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);this.__proto__=C.Nh;this.G(Vu);this.Init(aArg);},_className:"Application::OverlayContainer"
};C.Auh={_Init:function(){C.APS._Init.call(this,0);this.Ay3=200;},_variants:function(
){return this;},_this:null};C.AO6={AH:null,_Init:function(aArg){A.Core.O._Init.call(
this,aArg);A.abh.AH._Init.call(this.AH={I:this},0);this.__proto__=C.AO6;this.G(AEk
);this.DF(0);this.AH.AW(0x3F);this.AH.G(AEk);this.AH.L(0xAAFFFFFF);this.J(this.AH
,0);},_Done:function(){this.__proto__=A.Core.O;this.AH._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.AH._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AH)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::OverlayShade"};C.APR={Q0:function(){var B;var
Ak=(A.abm.Ac9.isPrototypeOf(B=A.abm.Acc.Q0.call(this))?B:null);if(!Ak)throw new Error(
Ap6);Ak.B9.Ci=255;Ak.B9.BX=0;return Ak;},QZ:function(){var B;var Ak=(A.abm.At3.isPrototypeOf(
B=A.abm.Acc.QZ.call(this))?B:null);if(!Ak)throw new Error(Ap6);Ak.EE.Ci=0;Ak.EE.
BX=255;Ak.Db=true;return Ak;},_Init:function(aArg){A.abm.Acc._Init.call(this,aArg
);this.__proto__=C.APR;},_className:"Application::ShadeOverlayTransition"};C.ApE={
_Init:function(){C.APR._Init.call(this,0);},_variants:function(){return this;},_this:
null};C.ApD={AlI:0,A8u:false,Init:function(aArg){},Ah:function(Ae){var F;C.JS.Ah.
call(this,Ae);this.B3.L(this.T.AM);if(!!this.Q){var AYO=(F=this.Q,F[1].call(F[0]
));if((F=this.Q,F[1].call(F[0]))>0){if(AYO<100000)this.B3.R((A._GetAutoObject(A.
Device.Converter).Np(AYO,1,false)+Cw)+A._GetAutoObject(A.abk.Dy).Abh());else this.
B3.R((A._GetAutoObject(A.Device.Converter).Np(AYO,0,false)+Cw)+A._GetAutoObject(
A.abk.Dy).Abh());}else this.B3.R(A.z2(A.abg.Ah$));}},JB:function(H){var B;var A$U=(
this.A8u===false)&&(this.AI<=this.FI);if(A$U)this.Bu(this.AlI);this.AYH(this.AI,
4);if(A$U){this.Bu(this.AI-this.AhS);this.A8u=true;}C.JS.JB.call(this,H);},Jw:function(
H){this.AYH(this.AI,5);C.JS.Jw.call(this,H);},Bu:function(E){this.AYH(E,4);E=(((
E+((this.AhS/2)|0))/this.AhS)|0)*this.AhS;C.JS.Bu.call(this,E);},AtS:function(E){
if(this.AlI===E)return;this.AlI=E;},AYH:function(BpF,Ge){this.AOw(A._GetAutoObject(
A.abk.Dy).A8M(BpF,Ge));},_Init:function(aArg){C.JS._Init.call(this,aArg);this.__proto__=
C.ApD;this.G(KO);this.AlI=this.FI;this.Lh(this.Hv,-1);this.Init(aArg);},_className:
"Application::SettingsItemWeight"};C.Bwp={None:0,Left:1,BwX:2,Right:3};C.Akn={AVZ:
null,E2:null,D$:null,Background:null,Ak7:null,Fu:null,J7:A.jm,AAq:null,Init:function(
aArg){var B;A.y_([this,this.Ad$],A._GetAutoObject(A.Device.Device).Aq,0);A.za([this
,this.AXX],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fd,B.Fg],0);A.ow([this,this.
Lw],this);A.ow([this,this.AXX],this);this.A8(this.D$);},Ah:function(Ae){C.OverlayMenu.
Ah.call(this,Ae);this.DD(this);},Nb:function(){if(!this.CX)this.CX=A._NewObject(
C.N,0);return this.CX;},Fc:function(H){C.OverlayMenu.Fc.call(this,H);A._GetAutoObject(
A.Device.Device).Aq.Bo(this.AVZ);},CF:function(H){C.OverlayMenu.CF.call(this,H);
this.AGT();},Aq5:function(H){var Ab=(C.AyC.isPrototypeOf(H)?H:null);var Ho;if(!!
Ab)Ho=Ab.Ho;else Ho=this.Fu.FJ();if(Ho>=A._GetAutoObject(A.Device.Device).Aq.Cf(
))return;A._GetAutoObject(A.Device.Helper).HU(Ho);A.ow([this,this.AjR],this);},AGT:
function(){},Ad$:function(H){this.Al();},AXQ:function(H){if(this.Fu.FJ()<(A._GetAutoObject(
A.Device.Device).Aq.Cf()-1))this.Fu.Gp(this.Fu.FJ()+1);},AXR:function(H){if(this.
Fu.FJ()>0)this.Fu.Gp(this.Fu.FJ()-1);},DD:function(H){var FW=A._GetAutoObject(A.
Device.Device).Aq.Cf();var L$=this.CX;if(!L$)return;L$.C$(A.zW(A.abi.Acr));L$.CB=[
this,this.AjR];if(FW<=0){L$.Cn(null);L$.De(null);L$.Ch=null;L$.Cm=null;L$.XQ=false;
L$.XR=false;}else if(FW===1){L$.Cn(null);L$.De(A.zW(A.abi.Acs));L$.Ch=null;L$.Cm=[
this,this.Aq5];L$.XQ=false;L$.XR=false;}else{L$.Cn(A.zW(A.abi.AsD));L$.De(A.zW(A.
abi.AsJ));L$.Ch=[this,this.AXQ];L$.Cm=[this,this.AXR];L$.XQ=true;L$.XR=true;}},Lw:
function(H){this.A$m(this);this.AVZ=A._GetAutoObject(A.Device.Device).Aq.Filter;
this.AGT();},Bgp:function(E){if(this.AAq===E)return;this.AAq=E;A.ow([this,this.Btf
],this);},Btf:function(H){this.A$m(this);},A$m:function(H){var B;if(!!this.E2)this.
HA(this.E2);this.E2=(C.Eg.isPrototypeOf(B=A._NewObject(this.AAq,0))?B:null);if(!
!this.E2){this.E2.G(AS_);this.J(this.E2,0);}},AXX:function(H){if(!!A._GetAutoObject(
A.Device.Device).Aq.Filter&&!!A._GetAutoObject(A.Device.Device).Aq.Filter.DJ(1,4
))this.Fu.Et(A.z2(A.abg.AND));else this.Fu.Et(this.J7);},Et:function(E){if(this.
J7===E)return;this.J7=E;A.ow([this,this.AXX],this);},_Init:function(aArg){C.OverlayMenu.
_Init.call(this,aArg);C.D$._Init.call(this.D$={I:this},0);A.abh.AH._Init.call(this.
Background={I:this},0);A.abh.AH._Init.call(this.Ak7={I:this},0);C.Fu._Init.call(
this.Fu={I:this},0);this.__proto__=C.Akn;this.G(Vu);this.D$.G(BI);this.D$.A3K(A.
iF.CR);this.D$.A3L(A.iF.Text);this.Background.G(FN);this.Background.L(A.iF.BhQ);
this.Ak7.G(AEl);this.Ak7.L(A.iF.CR);this.Fu.G(AEl);this.Fu.Ne(C.AyC);this.AAq=C.
ALm;this.J7=A.z2(A.abg.ANx);this.J(this.D$,0);this.J(this.Background,0);this.J(this.
Ak7,0);this.J(this.Fu,0);this.D$.AV=[this,this.Aq5];this.D$.Z9(A._NewObject(C.WN
,0));this.Fu.XF(A._GetAutoObject(A.Device.Device).Aq);this.Fu.XG([this,this.Aq5]
);this.Init(aArg);},_Done:function(){this.__proto__=C.OverlayMenu;this.D$._Done(
);this.Background._Done();this.Ak7._Done();this.Fu._Done();C.OverlayMenu._Done.call(
this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.D$._ReInit();this.
Background._ReInit();this.Ak7._ReInit();this.Fu._ReInit();},_Mark:function(D){var
B;C.OverlayMenu._Mark.call(this,D);if((B=this.AVZ)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.E2)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.D$)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ak7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fu)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::AnimalSearchOverlay"};C.AyC={AQ:null,CN:null,Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.T.G(A.aaQ(this.T.M,((aSize[0]*65)/100)|0));
this.AQ.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.CN.G([this.T.M[2],0,aSize[
0],aSize[1]]);},Ah:function(Ae){C.A$.Ah.call(this,Ae);this.CN.CZ(this.T.AM);},Init:
function(aArg){},B8:function(Z){if(!this.AZ)return;this.Ho=Z;if(!!this.AZ){this.
U(this.AZ.Cq(Z,1).toFixed());this.CN.DS(this.AZ.AkL(Z,14));this.CN.ABf(this.AZ.ID(
Z,13));this.CN.AcX(this.AZ.Hs(Z,8));this.CN.SY(this.AZ.Hs(Z,11));this.CN.AcZ(this.
AZ.Hs(Z,12));this.CN.Ac1(this.AZ.Cq(Z,5));this.Al();}},_Init:function(aArg){C.A$.
_Init.call(this,aArg);A.abh.AH._Init.call(this.AQ={I:this},0);C.CN._Init.call(this.
CN={I:this},0);this.__proto__=C.AyC;this.G(Ns);this.AQ.L(A.iF.A7);this.CN.G(AS$);
this.J(this.AQ,0);this.J(this.CN,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.AQ._Done();this.CN._Done();C.A$._Done.call(this);},_ReInit:function(){
C.A$._ReInit.call(this);this.AQ._ReInit();this.CN._ReInit();},_Mark:function(D){
var B;C.A$._Mark.call(this,D);if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.CN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListSmallItem"
};C.WN={Q:null,Init:function(aArg){var B;this.AYa(this);this.AD([B=A._GetAutoObject(
A.Device.Device).Aq,B.Fd,B.Fg]);},A3l:function(H){var B;var F;var Filter;var FilterCriterion;
if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(F=this.Q,F[1].call(F[0])).F$(
);FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.DJ(1,4))?
B:null);}else{Filter=A._NewObject(A.Device.Filter,0);FilterCriterion=null;}if(!!
FilterCriterion)Filter.P7(FilterCriterion);var AxD=this.Afo();if(AxD>0){FilterCriterion=
A._NewObject(A.Device.Int32FilterCriterion,0);FilterCriterion.Initialize(1,4,AxD
,false);Filter.CQ(FilterCriterion);}if(!!this.Q)(F=this.Q,F[2].call(F[0],Filter)
);this.AX.Aii(false);},Bo6:function(s){this.A3l(s);},AYa:function(H){var B;var F;
var Filter;var FilterCriterion;if(!!this.Q&&!!(F=this.Q,F[1].call(F[0]))){Filter=(
F=this.Q,F[1].call(F[0])).F$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(
B=Filter.DJ(1,4))?B:null);if(!!FilterCriterion)Filter.P7(FilterCriterion);(F=this.
Q,F[2].call(F[0],Filter));}},ByA:function(s){this.AYa(s);},AD:function(E){if(A.z_(
this.Q,E))return;if(!!this.Q)A.zn([this,this.AaQ],this.Q,0);this.Q=E;if(!!E)A.za([
this,this.AaQ],E,0);if(!!E)A.ow([this,this.AaQ],this);},C1:function(H){var B;var
F;if(!(F=this.Q,F[1].call(F[0]))){this.AX.ABq(-1);this.DS(0);return;}var AvL=(A.
Device.Int32FilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DJ(1,4))?
B:null);if(!AvL){this.AX.ABq(0);this.AX.Aii(true);}else this.AX.ABq(AvL.AY);var AvD=(
A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DJ(
14,0))?B:null);if(!!AvD)this.DS(AvD.AY);else this.DS(0);},AaQ:function(s){this.C1(
s);},_Init:function(aArg){C.Ass._Init.call(this,aArg);this.__proto__=C.WN;this.AX.
ABq(0);this.AX.C_=[this,this.Bo6];this.Init(aArg);},_Mark:function(D){var B;C.Ass.
_Mark.call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::HeaderSearchAnimal"};C.An1={BirthType:null,EaseOfDelivery:null,BT:
null,OV:null,ZP:null,GE:null,D2:null,ZN:null,AII:false,Init:function(aArg){this.
AII=A._GetAutoObject(A.Device.Helper).V.Aor();if(this.AII)this.Atj(A._GetAutoObject(
A.Device.Helper).V.FirstBodyWeight);if(!A._GetAutoObject(A.Device.Helper).V.TransponderId
){this.BT.Nc([this,this.Vw]);this.BT.Nd(A.zW(A.abi.Ac$));this.BT.AV=[this,this.Vw
];}this.OV.AtP(!!A._GetAutoObject(A.Device.Helper).V.NaisId);A.za([this,this.Ix]
,this.OV.Q,0);A.za([this,this.Ix],this.BT.Q,0);A.ow([this,this.Ix],this);},Aee:function(
H){if(((this.OV.ACr===false)&&!!A._GetAutoObject(A.Device.Helper).V.NaisId)&&A._GetAutoObject(
A.Device.Device).Aq.Acb(26,A._GetAutoObject(A.Device.Helper).V.NaisId)){A._GetAutoObject(
A.Device.Device).A_(21,true,A._GetAutoObject(A.Device.Converter).Vc(A._GetAutoObject(
A.Device.Helper).V.NaisId),0,null);return;}A._GetAutoObject(A.Device.Helper).V.Cs(
A._GetAutoObject(A.Device.Device).Aq);if(this.PB>0){if(this.AII){var Z=A._GetAutoObject(
A.Device.Device).Bt.LM(0,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeightId);
if(Z>=0){var Ca=A._NewObject(A.Device.Rating,0);Ca.Fq(Z,A._GetAutoObject(A.Device.
Device).Bt);Ca.OnSetBodyWeight(this.PB);Ca.OnSetTimestamp(A._GetAutoObject(A.Device.
Helper).V.DateOfBirth);Ca.Cs(A._GetAutoObject(A.Device.Device).Bt);}else A.aa8("%s%i"
,ATa,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeightId);}else if(A._GetAutoObject(
A.Device.Device).Bt.Ms())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bt.If().toFixed(),0,null);else{var Ca=A._NewObject(A.Device.Rating
,0);Ca.GG();Ca.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);Ca.OnSetBodyWeight(
this.PB);Ca.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).V.DateOfBirth);Ca.Cs(
A._GetAutoObject(A.Device.Device).Bt);}}A._GetAutoObject(C.A1).Fm();},EY:function(
H){A._GetAutoObject(A.Device.Helper).V.Fq(A._GetAutoObject(A.Device.Helper).V.Cu
,A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(C.A1).Fm();},Ark:function(
){this.N.Cd(A.jm);this.N.De(A.zW(A.abi.Aom));this.N.Cm=[this,this.Avz];},Aw4:function(
H){A._GetAutoObject(C.A1).BY(31);},Ix:function(H){var F;var R7=(F=this.OV.Q,F[1].
call(F[0]));var Aeo=(F=this.BT.Q,F[1].call(F[0]));var AxS=true;if(!!R7&&(Aeo===R7
))AxS=false;this.BT.Aj(AxS);this.BT.An(AxS);this.BT.W(AxS);this.OV.Bfp(!AxS);},_Init:
function(aArg){C.Hp._Init.call(this,aArg);C.BirthType._Init.call(this.BirthType={
I:this},0);C.EaseOfDelivery._Init.call(this.EaseOfDelivery={I:this},0);C.AsW._Init.
call(this.BT={I:this},0);C.AfM._Init.call(this.OV={I:this},0);C.Aaq._Init.call(this.
ZP={I:this},0);C.B$._Init.call(this.GE={I:this},0);C.AlH._Init.call(this.D2={I:this
},0);C.B$._Init.call(this.ZN={I:this},0);this.__proto__=C.An1;var B;this.BT.G(Af3
);this.BT.Aj(true);this.BT.U(A.z2(A.abg.AiR));this.BT.AoV(((A.z2(A.abg.Ok)+A.z2(
A.abg.Colon))+Cw)+A.z2(A.abg.Apz));this.BT.AoW(A.z2(A.abg.Ah$));this.OV.G(Af3);this.
OV.Aj(true);this.OV.U(A.z2(A.abg.Z1));this.ZP.G(ATb);this.ZP.Aj(true);this.ZP.U(
A.z2(A.abg.Hu));this.GE.G(Af3);this.GE.Aj(true);this.GE.U(A.z2(A.abg.AsY));this.
D2.G(Af3);this.D2.Aj(true);this.D2.U(A.z2(A.abg.AnW));this.D2.AOJ(true);this.ZN.
G(Af3);this.ZN.Aj(true);this.ZN.U(A.z2(A.abg.Akr));this.J(this.BT,0);this.J(this.
OV,0);this.J(this.ZP,0);this.J(this.GE,0);this.J(this.D2,0);this.J(this.ZN,0);this.
BirthType.N1(A._GetAutoObject(A.Device.Helper).V);this.EaseOfDelivery.N1(A._GetAutoObject(
A.Device.Helper).V);this.BT.AD([B=A._GetAutoObject(A.Device.Helper).V,B.Aid,B.Nf
]);this.OV.He([this,this.Es,this.HW]);this.OV.AD([B=A._GetAutoObject(A.Device.Helper
).V,B.AoH,B.O3]);this.ZP.He([this,this.Es,this.HW]);this.ZP.AD([B=A._GetAutoObject(
A.Device.Helper).V,B.AoL,B.XK]);this.GE.AD([B=this.BirthType,B.CA,B.CC]);this.GE.
Dk(this.BirthType);this.D2.He([this,this.Es,this.HW]);this.D2.Nc([B=this.D2,B.GC
]);this.D2.Nd(A.zW(A.abi.Edit));this.D2.Ac2([B=A._GetAutoObject(A.Device.Helper).
V,B.AAP,B.AcV]);this.ZN.AD([B=this.EaseOfDelivery,B.CA,B.CC]);this.ZN.Dk(this.EaseOfDelivery
);this.Init(aArg);},_Done:function(){this.__proto__=C.Hp;this.BirthType._Done();
this.EaseOfDelivery._Done();this.BT._Done();this.OV._Done();this.ZP._Done();this.
GE._Done();this.D2._Done();this.ZN._Done();C.Hp._Done.call(this);},_ReInit:function(
){C.Hp._ReInit.call(this);this.BirthType._ReInit();this.EaseOfDelivery._ReInit();
this.BT._ReInit();this.OV._ReInit();this.ZP._ReInit();this.GE._ReInit();this.D2.
_ReInit();this.ZN._ReInit();this.BT.U(A.z2(A.abg.AiR));this.BT.AoV(((A.z2(A.abg.
Ok)+A.z2(A.abg.Colon))+Cw)+A.z2(A.abg.Apz));this.BT.AoW(A.z2(A.abg.Ah$));this.OV.
U(A.z2(A.abg.Z1));this.ZP.U(A.z2(A.abg.Hu));this.GE.U(A.z2(A.abg.AsY));this.D2.U(
A.z2(A.abg.AnW));this.ZN.U(A.z2(A.abg.Akr));},_Mark:function(D){var B;C.Hp._Mark.
call(this,D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EaseOfDelivery
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.OV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZP)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ZN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EditAnimalDataScreen"
};C.Aaq={Fa:null,AX:null,A3:0,JE:function(H){C.Da.JE.call(this,H);if(!this.A3)this.
GC(this);else this.Gy(this);},Ah:function(Ae){C.Da.Ah.call(this,Ae);this.GU.W(false
);this.Hv.W(false);if(this.A3===1){this.A8(this.AX);if(this.GY){this.AX.Ff(A.iF.
CE);this.Background.L(A.iF.CR);this.T.L(A.iF.Text);}else{this.AX.Ff(A.iF.CR);this.
Background.L(A.iF.CE);this.T.L(A.iF.Text);}}else{if(this.GY)this.AX.Ff(A.iF.CE);
else this.AX.Ff(A.iF.CR);this.A8(null);}},Bu:function(E){var F;var BR=this.AI;C.
Da.Bu.call(this,E);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI
));A.aat(this.Q,0);}A.aat([this,this.SW,this.A6B],0);},DD:function(H){var F;if(!
this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET
));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.
Gy];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.
N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(
F[0])).Cd(A.jm);(F=this.N,F[1].call(F[0])).Cm=null;}break;default:this.Fa.AiD((F=
this.N,F[1].call(F[0])));}},GC:function(H){this.Ed(1);},Gy:function(H){this.Ed(0
);},Ed:function(EI){var F;if(!this.A3)this.Fa.Ahn((F=this.N,F[1].call(F[0])));this.
A3=EI;if(this.A3<0)this.A3=0;else if(this.A3>1)this.A3=1;if(this.A3===1)this.AX.
RB(7);this.DD(this);this.Al();},_Init:function(aArg){C.Da._Init.call(this,aArg);
C.AMJ._Init.call(this.AX={I:this},0);this.__proto__=C.Aaq;this.G(Yk);this.FS(999999
);this.T.R(Aqb);this.T.L(A.iF.Be);this.GU.W(false);this.Hv.W(false);this.AX.G(ATc
);this.AX.AOE(6);this.J(this.AX,0);this.AX.AD([this,this.SW,this.A6B]);this.Fa=A.
_NewObject(C.Aci,0);},_Done:function(){this.__proto__=C.Da;this.AX._Done();C.Da.
_Done.call(this);},_ReInit:function(){C.Da._ReInit.call(this);this.AX._ReInit();
},_Mark:function(D){var B;C.Da._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemID"
};C.WeightRecordingScope={WeightRecordingScopeToString:null,Dx:function(){return 4;
},Dd:function(aIndex){if((aIndex<0)||(aIndex>=4))return-1;return aIndex;},GS:function(
aIndex){if((aIndex<0)||(aIndex>=4))return A.jm;return this.WeightRecordingScopeToString.
Cb(aIndex);},DX:function(A2){return A2;},HP:function(){return 3;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.WeightRecordingScopeToString._Init.call(
this.WeightRecordingScopeToString={I:this},0);this.__proto__=C.WeightRecordingScope;
},_Done:function(){this.__proto__=C.AC;this.WeightRecordingScopeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.WeightRecordingScopeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.WeightRecordingScopeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WeightRecordingScope"
};C.ArJ={Ac:null,PO:null,M_:null,GW:null,OU:null,OR:null,OS:null,AE:null,Fv:null
,ReasonOfLeaving:null,AfF:null,Wx:0,Akz:false,AyG:true,AKc:false,Apm:false,Init:
function(aArg){A.za([this,this.A3j],[this,this.A2P,this.AOF],0);this.Ato(A._GetAutoObject(
A.Device.Helper).V.AiV(2));this.ReasonOfLeaving.AD(this.ReasonOfLeaving.DX(A._GetAutoObject(
A.Device.Helper).V.ReasonOfLeaving));A.ow([this,this.A3j],this);},DW:function(H){
var B;var EQ=0;var X=this.A6;switch(this.CH.CO){case 6:EQ=2;break;case 7:EQ=7;break;
case 4:EQ=4;break;case 5:EQ=5;break;default:;}X=this.Q8(X,EQ,0x414);if(!!X)this.
A8(X);if(!!X&&((X.S&0x400)===0x400))this.Ac.IB(X,true,null,null);},AjS:function(
H){A._GetAutoObject(C.A1).Fm();},And:function(H){var F;if(A._GetAutoObject(A.Device.
Device).Bt.Ms())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.
Device.Device).Bt.If().toFixed(),0,null);else{var Ca=A._NewObject(A.Device.Rating
,0);Ca.GG();Ca.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);Ca.OnSetBodyWeight(
this.Wx);Ca.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).DR());Ca.Cs(A._GetAutoObject(
A.Device.Device).Bt);}if(this.Akz){A._GetAutoObject(A.Device.Helper).V.Afv(false
);if(!A._GetAutoObject(A.Device.Helper).V.AnimalType)A._GetAutoObject(A.Device.Helper
).A08(A._GetAutoObject(A.Device.Helper).DR(),this.Apm);}A._GetAutoObject(A.Device.
Helper).V.ABM(this.ReasonOfLeaving.Dd((F=this.M_.Q,F[1].call(F[0]))));if(this.AyG
)A._GetAutoObject(A.Device.Helper).V.Nf(0);if(this.Apm)A._GetAutoObject(A.Device.
Helper).V.AtC(true);A._GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.
Device).Aq);this.A41();},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-
B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);},Ato:function(
E){if(this.Wx===E)return;this.Wx=E;},AAO:function(){return this.Wx;},A_q:function(
H){var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!Ar)return;if((Ar.PopupState===
4)||(Ar.PopupState===3)){A._GetAutoObject(C.A1).Fm();A._GetAutoObject(A.Device.Helper
).Apu();}},A3j:function(H){switch(this.Apm){case false:this.GW.U(A.z2(A.abg.AQI)
);break;case true:this.GW.U(A.z2(A.abg.BjH));break;default:;}},AOF:function(E){if(
this.Apm===E)return;this.Apm=E;},A2P:function(){return this.Apm;},A41:function(){
A._GetAutoObject(A.Device.Device).A_(15,true,A._GetAutoObject(A.Device.Helper).V.
VisualId.toFixed(),2000,[this,this.A_q]);},BfP:function(E){if(this.AKc===E)return;
this.AKc=E;},Bd8:function(){return this.AKc;},Be9:function(E){if(this.AyG===E)return;
this.AyG=E;},BdX:function(){return this.AyG;},Bfm:function(E){if(this.Akz===E)return;
this.Akz=E;},Bd4:function(){return this.Akz;},Iv:function(H){A.ow([this,this.FZ]
,this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.Core.Ac._Init.call(this.
Ac={I:this},0);C.Adl._Init.call(this.PO={I:this},0);C.ACJ._Init.call(this.M_={I:
this},0);C.ApD._Init.call(this.GW={I:this},0);C.Adl._Init.call(this.OU={I:this},
0);C.Adl._Init.call(this.OR={I:this},0);C.Adl._Init.call(this.OS={I:this},0);C.AE.
_Init.call(this.AE={I:this},0);C.Fv._Init.call(this.Fv={I:this},0);C.ReasonOfLeaving.
_Init.call(this.ReasonOfLeaving={I:this},0);A.Device.AfF._Init.call(this.AfF={I:
this},0);this.__proto__=C.ArJ;var B;this.N.W(true);this.N.Cd(A.z2(A.abg.Unregister
));this.Dw(C.Ig);this.Ac.G(FN);this.Ac.Lf(1);this.PO.G(Ai4);this.PO.Aj(true);this.
PO.U(A.z2(A.abg.Akz));this.PO.Bk(true);this.PO.XI(false);this.PO.Hy(-1);this.PO.
FS(1);this.M_.G(Af4);this.M_.Aj(true);this.M_.U(A.z2(A.abg.ReasonOfLeaving));this.
M_.Bk(true);this.M_.XI(false);this.GW.G(Af2);this.GW.Aj(true);this.GW.U(A.z2(A.abg.
AQI));this.GW.Bk(false);this.GW.Hy(1000);this.GW.FS(999000);this.OU.G(Af4);this.
OU.Aj(true);this.OU.U(A.z2(A.abg.AZg));this.OU.Bk(true);this.OU.XI(false);this.OU.
Bu(1);this.OU.Hy(-1);this.OU.FS(1);this.OR.G(Ai4);this.OR.Aj(true);this.OR.U(A.z2(
A.abg.AZh));this.OR.Bk(true);this.OR.XI(false);this.OR.Bu(1);this.OR.Hy(-1);this.
OR.FS(1);this.OS.G(Af4);this.OS.Aj(true);this.OS.U(A.z2(A.abg.AZY));this.OS.Bk(true
);this.OS.XI(false);this.OS.Bu(1);this.OS.Hy(-1);this.OS.FS(1);this.AE.G(Ap9);this.
Fv.AD(0);this.J(this.Ac,0);this.J(this.PO,0);this.J(this.M_,0);this.J(this.GW,0);
this.J(this.OU,0);this.J(this.OR,0);this.J(this.OS,0);this.J(this.AE,0);this.N.C$(
A.zW(A.abi.ET));this.Ac.Eu=[this,this.Iv];this.PO.AD([B=this.Fv,B.CA,B.CC]);this.
PO.Dk(this.Fv);this.PO.Aip([this,this.Bd4,this.Bfm]);this.M_.He([this,this.Es,this.
HW]);this.M_.Nc([B=this.M_,B.GC]);this.M_.Nd(A.zW(A.abi.Edit));this.M_.AD([B=this.
ReasonOfLeaving,B.CA,B.CC]);this.M_.Dk(this.ReasonOfLeaving);this.M_.ABk(this.AfF
);this.GW.AD([this,this.AAO,this.Ato]);this.OU.AD([B=this.Fv,B.CA,B.CC]);this.OU.
Dk(this.Fv);this.OU.Aip([this,this.Bd8,this.BfP]);this.OR.AD([B=this.Fv,B.CA,B.CC
]);this.OR.Dk(this.Fv);this.OR.Aip([this,this.A2P,this.AOF]);this.OS.AD([B=this.
Fv,B.CA,B.CC]);this.OS.Dk(this.Fv);this.OS.Aip([this,this.BdX,this.Be9]);this.Init(
aArg);},_Done:function(){this.__proto__=C.Aw;this.Ac._Done();this.PO._Done();this.
M_._Done();this.GW._Done();this.OU._Done();this.OR._Done();this.OS._Done();this.
AE._Done();this.Fv._Done();this.ReasonOfLeaving._Done();this.AfF._Done();C.Aw._Done.
call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.Ac._ReInit();this.PO.
_ReInit();this.M_._ReInit();this.GW._ReInit();this.OU._ReInit();this.OR._ReInit(
);this.OS._ReInit();this.AE._ReInit();this.Fv._ReInit();this.ReasonOfLeaving._ReInit(
);this.AfF._ReInit();this.N.Cd(A.z2(A.abg.Unregister));this.PO.U(A.z2(A.abg.Akz)
);this.M_.U(A.z2(A.abg.ReasonOfLeaving));this.GW.U(A.z2(A.abg.AQI));this.OU.U(A.
z2(A.abg.AZg));this.OR.U(A.z2(A.abg.AZh));this.OS.U(A.z2(A.abg.AZY));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M_)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.GW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OS)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fv
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ReasonOfLeaving)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.AfF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalActionUnregisterScreen"
};C.APQ={Ahz:null,Q7:null,Ar6:ATd,Bh:function(aSize){C.JS.Bh.call(this,aSize);this.
T.G([0,0,aSize[0],40]);this.B3.G([0,40,aSize[0],80]);this.GU.G([0,this.B3.M[1],40
,this.B3.M[3]]);this.Hv.G([aSize[0]-40,this.B3.M[1],aSize[0],this.B3.M[3]]);},Ah:
function(Ae){var F;C.JS.Ah.call(this,Ae);this.Q7.L(this.T.AM);if(!!this.Ahz){if((
F=this.Ahz,F[1].call(F[0]))===-1)this.Q7.R(this.Ar6+AEm);else this.Q7.R((this.Ar6+
Cw)+(F=this.Ahz,F[1].call(F[0])).toFixed());}else this.Q7.R(this.Ar6);},AXB:function(
H){this.Al();},Bfx:function(E){if(A.z_(this.Ahz,E))return;if(!!this.Ahz)A.zn([this
,this.AXB],this.Ahz,0);this.Ahz=E;if(!!E)A.za([this,this.AXB],E,0);if(!!E)A.ow([
this,this.AXB],this);},A3H:function(E){if(this.Ar6===E)return;this.Ar6=E;this.Al(
);},_Init:function(aArg){C.JS._Init.call(this,aArg);C.CG._Init.call(this.Q7={I:this
},0);this.__proto__=C.APQ;this.G(ATe);this.T.G(ATf);this.T.A0(0x12);this.Q7.G(ATg
);this.Q7.A0(0x12);this.Q7.L(A.iF.Be);this.J(this.Q7,0);this.Q7.Y(A.zW(A.eV.Au));
this.Q7.By(A.zW(A.eV.Az));this.Q7.C5(null);},_Done:function(){this.__proto__=C.JS;
this.Q7._Done();C.JS._Done.call(this);},_ReInit:function(){C.JS._ReInit.call(this
);this.Q7._ReInit();},_Mark:function(D){var B;C.JS._Mark.call(this,D);if((B=this.
Ahz)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q7)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemValueExtra"};C.AH4={Ac:null,Jm:
null,Rd:null,AE:null,AnP:2500,AJc:24,DW:function(H){var B;var EQ=0;var X=this.A6;
switch(this.CH.CO){case 6:EQ=2;break;case 7:EQ=7;break;case 4:EQ=4;break;case 5:
EQ=5;break;default:;}X=this.Q8(X,EQ,0x414);if(!!X)this.A8(X);if(!!X&&((X.S&0x400
)===0x400))this.Ac.IB(X,true,null,null);},AjS:function(H){A._GetAutoObject(C.A1).
Fm();},And:function(H){},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-
B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);},Bfg:function(
E){if(this.AnP===E)return;this.AnP=E;},BdZ:function(){return this.AnP;},Bfh:function(
E){if(this.AJc===E)return;this.AJc=E;},Bd0:function(){return this.AJc;},BdM:function(
H){var F,Dc;this.Jm.B3.L(this.Jm.T.AM);if(!!this.Jm.Q)this.Jm.B3.R((((String.fromCharCode(((
F=this.Jm.Q,F[1].call(F[0]))+10000).toFixed().charCodeAt(1)||0)+AiY)+String.fromCharCode(((
Dc=this.Jm.Q,Dc[1].call(Dc[0]))+10000).toFixed().charCodeAt(2)||0))+Cw)+this.Jm.
ADg);},Iv:function(H){A.ow([this,this.FZ],this);},_Init:function(aArg){C.Aw._Init.
call(this,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);C.JS._Init.call(this.Jm={
I:this},0);C.JS._Init.call(this.Rd={I:this},0);C.AE._Init.call(this.AE={I:this},
0);this.__proto__=C.AH4;this.N.W(true);this.Dw(C.Ig);this.Ac.G(FN);this.Ac.Lf(1);
this.Jm.G(Af2);this.Jm.Aj(true);this.Jm.U(A.z2(A.abg.AnP));this.Jm.Bk(false);this.
Jm.Hy(0);this.Jm.FS(5000);this.Jm.Ng(A.z2(A.abg.Ad9));this.Jm.N5(A.z2(A.abg.Ad9)
);this.Jm.AOw(100);this.Rd.G(Af4);this.Rd.Aj(true);this.Rd.U(A.z2(A.abg.A4A));this.
Rd.Bk(true);this.Rd.Bu(24);this.Rd.Hy(10);this.Rd.FS(33);this.Rd.Ng(ATh);this.AE.
G(Ap9);this.J(this.Ac,0);this.J(this.Jm,0);this.J(this.Rd,0);this.J(this.AE,0);this.
N.C$(A.zW(A.abi.AhL));this.Ac.Eu=[this,this.Iv];this.Jm.AD([this,this.BdZ,this.Bfg
]);this.Jm.A4b([this,this.BdM]);this.Rd.AD([this,this.Bd0,this.Bfh]);},_Done:function(
){this.__proto__=C.Aw;this.Ac._Done();this.Jm._Done();this.Rd._Done();this.AE._Done(
);C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.Ac._ReInit(
);this.Jm._ReInit();this.Rd._ReInit();this.AE._ReInit();this.Jm.U(A.z2(A.abg.AnP
));this.Jm.Ng(A.z2(A.abg.Ad9));this.Jm.N5(A.z2(A.abg.Ad9));this.Rd.U(A.z2(A.abg.
A4A));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.Ac)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.Jm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rd).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalActionNewbornCareScreen"};C.AoA={EaseOfDelivery:null,BirthType:
null,BT:null,C3:null,Do:null,D2:null,GW:null,GE:null,K$:null,Wx:0,K9:false,Init:
function(aArg){A.za([this,this.Ix],this.BT.Q,0);A.za([this,this.Ix],this.C3.Q,0);
A.za([this,this.Aw8],this.GX.Q,0);A.za([this,this.A91],this.D2.D6,0);A.za([this,
this.A9W],this.EG.Q,0);A.za([this,this.Aq6],this.BT.Q,0);A.za([this,this.Aq6],this.
C3.Q,0);A.ow([this,this.Aw8],this);A.ow([this,this.Ix],this);A.ow([this,this.A91
],this);A.ow([this,this.A9W],this);A.ow([this,this.Aq6],this);},EY:function(H){A.
_GetAutoObject(A.Device.Helper).V.G1();A._GetAutoObject(C.A1).Fm();},Aee:function(
H){var F;A._GetAutoObject(A.Device.Helper).V.DS((F=this.Dj.Q,F[1].call(F[0])));if(
!!A._GetAutoObject(A.Device.Helper).AfI){var AjB=A._GetAutoObject(A.Device.Helper
).AfI.AKD();A._GetAutoObject(A.Device.Helper).V.Z$(AjB);A._GetAutoObject(A.Device.
Helper).V.Alo(AjB);}var AvP=A._GetAutoObject(A.Device.Helper).A77(A._GetAutoObject(
A.Device.Helper).V,(F=this.Do.Hq.GN,F[1].call(F[0])),A._GetAutoObject(A.Device.Device
).Aq);if(!AvP){this.Anu();A.ow([this,this.Bpt],this);}else A._GetAutoObject(A.Device.
Helper).AWN(A._GetAutoObject(A.Device.Helper).V,AvP,(F=this.Do.Hq.GN,F[1].call(F[
0])),0,[this,this.Aw5]);},Ark:function(){this.N.Cd(A.jm);this.N.De(A.zW(A.abi.Az$
));this.N.Cm=[this,this.Avz];},Anu:function(){var B;var F;A._GetAutoObject(A.Device.
Helper).V.Cs(A._GetAutoObject(A.Device.Device).Aq);var Ol=A._GetAutoObject(A.Device.
Device).Aq.LM(0,A._GetAutoObject(A.Device.Helper).V.Id);A._GetAutoObject(A.Device.
Device).UZ(Ol);var A82=false;if(A._GetAutoObject(A.Device.Helper).AkV()){if(A._GetAutoObject(
A.Device.Device).Bt.Ms()){A82=true;A._GetAutoObject(A.Device.Device).A_(50,true,
A._GetAutoObject(A.Device.Device).Bt.If().toFixed(),0,null);}else{var Ca=A._NewObject(
A.Device.Rating,0);Ca.GG();Ca.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.
Id);Ca.OnSetBodyWeight(this.PB);Ca.OnSetTimestamp(A._GetAutoObject(A.Device.Helper
).V.DateOfBirth);Ca.Cs(A._GetAutoObject(A.Device.Device).Bt);}}if(A._GetAutoObject(
A.Device.Helper).A1w()&&(A82===false)){if(A._GetAutoObject(A.Device.Device).Bt.Ms(
))A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).
Bt.If().toFixed(),0,null);else{var Ca=A._NewObject(A.Device.Rating,0);Ca.GG();Ca.
OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);Ca.OnSetBodyWeight(this.Wx
);Ca.Cs(A._GetAutoObject(A.Device.Device).Bt);}}var Is=null;switch((F=this.Do.Hq.
GN,F[1].call(F[0]))){case 3:Is=[B=A._GetAutoObject(A.Device.Device),B.As7,B.Avs];
break;case 2:Is=[B=A._GetAutoObject(A.Device.Device),B.As8,B.Avt];break;case 4:case
5:Is=[B=A._GetAutoObject(A.Device.Device),B.Ale,B.Amb];break;default:;}if(!!Is)switch((
F=this.Do.Ji.Uc,F[1].call(F[0]))){case 1:Is[2].call(Is[0],A._GetAutoObject(A.Device.
Helper).V.VisualId-1);break;case 0:Is[2].call(Is[0],A._GetAutoObject(A.Device.Helper
).V.VisualId+1);break;default:;}if(!!(F=this.C3.Q,F[1].call(F[0])))A._GetAutoObject(
A.Device.Helper).A5t(A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode,this.
Gender.Animal.Gender,(F=this.C3.Q,F[1].call(F[0])),this.C3.AhC(),this.C3.AhG());
},Anv:function(H){A._GetAutoObject(C.A1).Fm();},Bpt:function(s){this.Anv(s);},Aw4:
function(H){A._GetAutoObject(C.A1).BY(54);},Ato:function(E){if(this.Wx===E)return;
this.Wx=E;A.aat([this,this.AAO,this.Ato],0);},Ix:function(H){if(A._GetAutoObject(
A.Device.Helper).AkV())this.EG.W(true);else this.EG.W(false);if(A._GetAutoObject(
A.Device.Helper).A1w())this.GW.W(true);else this.GW.W(false);if(this.K9){this.C3.
W(false);this.BT.U(A.z2(A.abg.A0w));this.BT.ABd(A.zW(A.abi.Ac$));}else{this.C3.W(
true);this.BT.U(A.z2(A.abg.AiR));this.BT.ABd(null);}},Aw8:function(H){A._GetAutoObject(
A.Device.Helper).AQt(A._GetAutoObject(A.Device.Helper).V,A._GetAutoObject(A.Device.
Device).EartagNrAssignmentMode,this.K9);},A91:function(H){A.ow([this,this.A$J],this
);},A9W:function(H){A.ow([this,this.A$J],this);},A$J:function(H){var F,Dc,RU;switch(
A._GetAutoObject(A.Device.Device).WeightRecordingScope){case 0:this.GW.AtS(A._GetAutoObject(
A.Device.Helper).AiV(A._GetAutoObject(A.Device.Helper).AhE((F=this.Dj.Q,F[1].call(
F[0]))),(Dc=this.D2.D6,Dc[1].call(Dc[0])),2,(RU=this.Dj.Q,RU[1].call(RU[0]))));break;
case 2:this.GW.AtS(A._GetAutoObject(A.Device.Helper).AiV(this.PB,(F=this.D2.D6,F[
1].call(F[0])),2,(Dc=this.Dj.Q,Dc[1].call(Dc[0]))));break;default:;}},Aw5:function(
H){var F;var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!Ar)return;switch(
Ar.Id){case 22:case 21:switch((F=this.Do.Hq.GN,F[1].call(F[0]))){case 3:case 2:case
5:case 4:this.Px(this.Do);break;case 0:this.Px(this.C3);break;case 1:this.Px(this.
BT);break;default:throw new Error(Avc+(F=this.Do.Hq.GN,F[1].call(F[0])).toFixed(
));}break;case 25:this.Px(this.BT);break;case 43:this.Px(this.C3);break;case 42:{
this.Px(this.BT);if(Ar.PopupState===7)A.ow([this,this.Vw],this);}break;case 41:break;
default:A.aa8("%s%e",Avd,Ar.Id);}},Am_:function(H){var F;C.Hp.Am_.call(this,H);(
F=this.EG.Q,F[2].call(F[0],this.EG.AlI));this.GW.AtS(A._GetAutoObject(A.Device.Helper
).V.AiV(1));},AcY:function(E){if(this.K9===E)return;this.K9=E;A.aat([this,this.As9
,this.AcY],0);},Aq6:function(H){var F,Dc,RU;this.AcY(((F=this.BT.Q,F[1].call(F[0
]))===(Dc=this.C3.Q,Dc[1].call(Dc[0])))&&!!(RU=this.BT.Q,RU[1].call(RU[0])));A.ow([
this,this.Ix],this);},AAO:function(){return this.Wx;},As9:function(){return this.
K9;},_Init:function(aArg){C.Hp._Init.call(this,aArg);C.EaseOfDelivery._Init.call(
this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={I:this},0
);C.AsW._Init.call(this.BT={I:this},0);C.AfM._Init.call(this.C3={I:this},0);C.ACL.
_Init.call(this.Do={I:this},0);C.AlH._Init.call(this.D2={I:this},0);C.ApD._Init.
call(this.GW={I:this},0);C.B$._Init.call(this.GE={I:this},0);C.B$._Init.call(this.
K$={I:this},0);this.__proto__=C.AoA;var B;this.Dw(C.AzC);this.FF.G(Yn);this.BT.G(
Al3);this.BT.Aj(true);this.BT.U(A.z2(A.abg.AiR));this.BT.AoV(((A.z2(A.abg.Ok)+A.
z2(A.abg.Colon))+Cw)+A.z2(A.abg.Apz));this.BT.AoW(A.z2(A.abg.Ah$));this.C3.G(Al3
);this.C3.Aj(true);this.C3.U(A.z2(A.abg.Z1));this.C3.AtP(false);this.Do.G(ATi);this.
Do.Aj(true);this.Do.U(A.z2(A.abg.Hu));this.Do.Bu(0);this.D2.G(Yn);this.D2.Aj(true
);this.D2.U(A.z2(A.abg.AnW));this.D2.AOJ(true);this.GW.G(Yn);this.GW.Aj(true);this.
GW.U(A.z2(A.abg.Wx));this.GW.Hy(1000);this.GW.FS(999000);this.GE.G(Yn);this.GE.Aj(
true);this.GE.U(A.z2(A.abg.AsY));this.K$.G(Yn);this.K$.Aj(true);this.K$.U(A.z2(A.
abg.Akr));this.J(this.BT,-2);this.J(this.C3,-2);this.J(this.Do,-2);this.J(this.D2
,-2);this.J(this.GW,-1);this.J(this.GE,0);this.J(this.K$,0);this.EaseOfDelivery.
N1(A._GetAutoObject(A.Device.Helper).V);this.BirthType.N1(A._GetAutoObject(A.Device.
Helper).V);this.BT.AV=[this,this.Vw];this.BT.Nc([this,this.Vw]);this.BT.Nd(A.zW(
A.abi.Ac$));this.BT.AD([B=A._GetAutoObject(A.Device.Helper).V,B.Aid,B.Nf]);this.
BT.P3([B=A._GetAutoObject(A.Device.Device),B.Aib,B.Ai8]);this.BT.Rr([B=A._GetAutoObject(
A.Device.Device),B.Aic,B.Ai9]);this.BT.SX([B=A._GetAutoObject(A.Device.Device),B.
Alc,B.Ama]);this.BT.AcY([this,this.As9,this.AcY]);this.C3.He([this,this.Es,this.
HW]);this.C3.Nc([this,this.Vw]);this.C3.Nd(A.zW(A.abi.Ac$));this.C3.US([B=this.Gender.
Animal,B.XA,B.J9]);this.C3.P3([B=A._GetAutoObject(A.Device.Device),B.Aib,B.Ai8]);
this.C3.Rr([B=A._GetAutoObject(A.Device.Device),B.Aic,B.Ai9]);this.C3.SX([B=A._GetAutoObject(
A.Device.Device),B.Alc,B.Ama]);this.C3.AD([B=A._GetAutoObject(A.Device.Helper).V
,B.AoH,B.O3]);this.C3.Alh([B=this.AnimalType.Animal,B.O1,B.DS]);this.Do.He([this
,this.Es,this.HW]);this.Do.Nc([B=this.Do,B.GC]);this.Do.Nd(A.zW(A.abi.Edit));this.
Do.AD([B=A._GetAutoObject(A.Device.Helper).V,B.AoL,B.XK]);this.Do.A3n(A._GetAutoObject(
A.Device.Helper).V);this.D2.He([this,this.Es,this.HW]);this.D2.Nc([B=this.D2,B.GC
]);this.D2.Nd(A.zW(A.abi.Edit));this.D2.Ac2([B=A._GetAutoObject(A.Device.Helper).
V,B.AAP,B.AcV]);this.GW.AD([this,this.AAO,this.Ato]);this.GE.AD([B=this.BirthType
,B.CA,B.CC]);this.GE.Dk(this.BirthType);this.K$.AD([B=this.EaseOfDelivery,B.CA,B.
CC]);this.K$.Dk(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){this.__proto__=
C.Hp;this.EaseOfDelivery._Done();this.BirthType._Done();this.BT._Done();this.C3.
_Done();this.Do._Done();this.D2._Done();this.GW._Done();this.GE._Done();this.K$.
_Done();C.Hp._Done.call(this);},_ReInit:function(){C.Hp._ReInit.call(this);this.
EaseOfDelivery._ReInit();this.BirthType._ReInit();this.BT._ReInit();this.C3._ReInit(
);this.Do._ReInit();this.D2._ReInit();this.GW._ReInit();this.GE._ReInit();this.K$.
_ReInit();this.BT.U(A.z2(A.abg.AiR));this.BT.AoV(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon
))+Cw)+A.z2(A.abg.Apz));this.BT.AoW(A.z2(A.abg.Ah$));this.C3.U(A.z2(A.abg.Z1));this.
Do.U(A.z2(A.abg.Hu));this.D2.U(A.z2(A.abg.AnW));this.GW.U(A.z2(A.abg.Wx));this.GE.
U(A.z2(A.abg.AsY));this.K$.U(A.z2(A.abg.Akr));},_Mark:function(D){var B;C.Hp._Mark.
call(this,D);if((B=this.EaseOfDelivery)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
BirthType)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BT)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.C3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Do)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GW)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.GE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.K$
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NewAnimalTransponderDataScreen"
};C.ADm={Hz:null,AfN:null,AeV:null,AfO:null,AeW:null,AnimalType:null,Background:
null,Na:null,Qg:null,T:null,Sw:null,WV:null,ZJ:null,O0:null,Dn:A.jm,ACN:true,C6:
function(){this.Al();},Ah:function(Ae){A.Core.O.Ah.call(this,Ae);this.AlQ();this.
AuB();},AlQ:function(){var F,Dc;var KU=0;var Aj_=0;var Aju=0;var HH=0;if((((!!this.
AfN&&!!this.AfO)&&!!this.AeV)&&!!this.AeW)&&!!this.AnimalType){Aj_=(F=this.AfN,F[
1].call(F[0]));Aju=(F=this.AeV,F[1].call(F[0]));KU=A._GetAutoObject(A.Device.Helper
).L7((F=this.AfO,F[1].call(F[0])),(Dc=this.AeW,Dc[1].call(Dc[0])));HH=(F=this.AnimalType
,F[1].call(F[0]));}var Kt=A.iF.Text;var A7Z=A.iF.CR;if(!!KU){var AHp=A._GetAutoObject(
A.abk.Dy).Ajm(KU,Aj_,Aju);A7Z=A._GetAutoObject(A.abk.Dy).Aww(AHp,HH);Kt=A._GetAutoObject(
A.abk.Dy).Awy(AHp,HH);}this.Background.L(A7Z);this.Sw.L(Kt);this.Qg.L(Kt);this.Na.
L(Kt);this.ZJ.L(Kt);if(Kt===A.iF.Be)this.WV.L(Kt);else this.WV.L(A.iF.CE);this.T.
L(Kt);this.O0.L(Kt);},AuB:function(){var F,Dc;var KU=0;var Aj_=0;var Aju=0;if(((
!!this.AfN&&!!this.AfO)&&!!this.AeV)&&!!this.AeW){Aj_=(F=this.AfN,F[1].call(F[0]
));Aju=(F=this.AeV,F[1].call(F[0]));KU=A._GetAutoObject(A.Device.Helper).L7((F=this.
AfO,F[1].call(F[0])),(Dc=this.AeW,Dc[1].call(Dc[0])));}if(!!KU){var AHp=A._GetAutoObject(
A.abk.Dy).Ajm(KU,Aj_,Aju);this.Qg.R(A._GetAutoObject(A.Device.Converter).Np(AHp,
2,true));this.Na.W(true);this.Qg.W(true);this.O0.W(false);}else{this.Na.W(false);
this.Qg.W(false);this.O0.W(true);}this.Sw.R(this.Br3(Aju-Aj_,KU));this.ZJ.W(this.
ACN);this.WV.W(this.ACN);this.Na.R(A._GetAutoObject(A.abk.Dy).YD());},Br3:function(
AVK,Af8){var B;if(Af8<0){A.aa8("%s",ATj);return A.jm;}var H0=(ATk+A._GetAutoObject(
A.abk.Dy).Abh())+Cw;var Fl=A._GetAutoObject(A.Device.Converter).AlV(AVK);if(!AVK
)Fl=A.aaW(Fl,ATl,0);else if(AVK>0)Fl=A.aaW(Fl,AEn,0);H0=this.A_4(H0,ATm,Fl);if(Af8===
1)H0=H0+A.z2(A.abg.Bcn);else{H0=H0+A.z2(A.abg.Bco);H0=this.A_4(H0,ATn,Af8.toFixed(
));}return H0;},A_4:function(aString,A7y,Bqr){if(aString===A.jm){A.aa8("%s",ATo);
return A.jm;}var AXn=aString.indexOf(A7y,0);if(AXn>=0){aString=A.aa3(aString,AXn
,A7y.length);aString=A.aaW(aString,Bqr,AXn);}return aString;},AOP:function(E){if(
A.z_(this.AfN,E))return;if(!!this.AfN)A.zn([this,this.C1],this.AfN,0);this.AfN=E;
if(!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1],this);},Bfu:function(
E){if(A.z_(this.AeV,E))return;if(!!this.AeV)A.zn([this,this.C1],this.AeV,0);this.
AeV=E;if(!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1],this);},AOQ:function(
E){if(A.z_(this.AfO,E))return;if(!!this.AfO)A.zn([this,this.C1],this.AfO,0);this.
AfO=E;if(!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1],this);},Bfv:function(
E){if(A.z_(this.AeW,E))return;if(!!this.AeW)A.zn([this,this.C1],this.AeW,0);this.
AeW=E;if(!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1],this);},C1:function(
H){this.Al();},U:function(E){if(this.Dn===E)return;this.Dn=E;this.T.R(E);},A4a:function(
E){if(this.ACN===E)return;this.ACN=E;this.Al();},DS:function(E){if(A.z_(this.AnimalType
,E))return;if(!!this.AnimalType)A.zn([this,this.C1],this.AnimalType,0);this.AnimalType=
E;if(!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1],this);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this
},0);C.CG._Init.call(this.Na={I:this},0);A.abh.Text._Init.call(this.Qg={I:this},
0);C.CG._Init.call(this.T={I:this},0);C.CG._Init.call(this.Sw={I:this},0);A.abh.
Am._Init.call(this.WV={I:this},0);A.abh.Am._Init.call(this.ZJ={I:this},0);C.CG._Init.
call(this.O0={I:this},0);this.__proto__=C.ADm;this.G(AdK);this.Background.AW(0x3F
);this.Background.G(AdK);this.Na.G(ATp);this.Na.R(A._GetAutoObject(A.abk.Dy).YD(
));this.Na.A0(0x9);this.Na.L(A.iF.Text);this.Qg.G(ATq);this.Qg.A0(0x14);this.Qg.
R(A.z2(A.abv.Ah_));this.Qg.L(A.iF.Text);this.T.AW(0x1D);this.T.G(ATr);this.T.R(A.
z2(A.abg.Arz));this.T.A0(0x12);this.T.L(A.iF.Text);this.Sw.G(Yl);this.WV.AW(0x14
);this.WV.G(AEo);this.WV.Ce(1);this.ZJ.AW(0x14);this.ZJ.G(AEo);this.ZJ.Ce(0);this.
O0.G(ATs);this.O0.R(A.z2(A.abg.AYX));this.J(this.Background,0);this.J(this.Na,0);
this.J(this.Qg,0);this.J(this.T,0);this.J(this.Sw,0);this.J(this.WV,0);this.J(this.
ZJ,0);this.J(this.O0,0);this.Na.Y(A.zW(A.eV.Gk));this.Na.By(A.zW(A.eV.Au));this.
Na.C5(A.zW(A.eV.K7));this.Qg.Y(A.zW(A.eV.Ach));this.T.Y(A.zW(A.eV.Au));this.T.By(
A.zW(A.eV.Az));this.T.C5(A.zW(A.eV.Cr));this.Sw.Y(A.zW(A.eV.Au));this.Sw.By(A.zW(
A.eV.Az));this.Sw.C5(A.zW(A.eV.Cr));this.WV.At(A.zW(A.abi.Ayi));this.ZJ.At(A.zW(
A.abi.Ayi));this.Hz=A._NewObject(A.Device.Rating,0);this.O0.Y(A.zW(A.eV.Au));this.
O0.By(A.zW(A.eV.Az));this.O0.C5(A.zW(A.eV.Cr));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Na._Done();this.Qg._Done();this.T._Done();
this.Sw._Done();this.WV._Done();this.ZJ._Done();this.O0._Done();A.Core.O._Done.call(
this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Background._ReInit();
this.Na._ReInit();this.Qg._ReInit();this.T._ReInit();this.Sw._ReInit();this.WV._ReInit(
);this.ZJ._ReInit();this.O0._ReInit();this.Qg.R(A.z2(A.abv.Ah_));this.T.R(A.z2(A.
abg.Arz));this.O0.R(A.z2(A.abg.AYX));this.Na.Y(A.zW(A.eV.Gk));this.Na.By(A.zW(A.
eV.Au));this.Na.C5(A.zW(A.eV.K7));this.Qg.Y(A.zW(A.eV.Ach));this.T.Y(A.zW(A.eV.Au
));this.T.By(A.zW(A.eV.Az));this.T.C5(A.zW(A.eV.Cr));this.Sw.Y(A.zW(A.eV.Au));this.
Sw.By(A.zW(A.eV.Az));this.Sw.C5(A.zW(A.eV.Cr));this.O0.Y(A.zW(A.eV.Au));this.O0.
By(A.zW(A.eV.Az));this.O0.C5(A.zW(A.eV.Cr));this.C6();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Hz)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.AfN)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AeV)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);if((B=this.AfO)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.AeW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AnimalType
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Background)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Na)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qg)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sw).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.WV)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.ZJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O0)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainItem"};C.AQK={Animal:null,Rating:null,CH:
null,Av:null,AN:0,GH:function(H){var B;if(!this.Animal||!this.Rating)return;var Fy=
this.Av.IE;var Ck=(C.ADm.isPrototypeOf(B=this.Av.B5)?B:null);if(!Ck)return;Ck.DS([
B=this.Animal,B.O1,B.DS]);Ck.Bfu([B=A._GetAutoObject(A.Device.Device),B.AAZ,B.AEX
]);Ck.Bfv([B=this.Rating,B.A22,B.OnSetTimestamp]);switch(Fy%this.AN){case 1:{Ck.
AOP([B=this.Animal,B.A2J,B.ABu]);Ck.AOQ([B=this.Animal,B.A23,B.ABV]);Ck.U(A.z2(A.
abg.Arz));}break;default:if(this.Animal.Aor()){Ck.AOP([B=this.Animal,B.ANW,B.Aty
]);Ck.AOQ([B=this.Animal,B.AOb,B.AtW]);Ck.U(A.z2(A.abg.AHM));}else{Ck.AOP([B=this.
Animal,B.ANW,B.Aty]);Ck.AOQ([B=this.Animal,B.AOb,B.AtW]);Ck.U(A.z2(A.abg.A$1));}
}if(this.AN>1)Ck.A4a(true);else Ck.A4a(false);Ck.G(A.aaN(Ck.M,[(B=this.Av.M)[2]-
B[0],this.Av.Gn]));},DW:function(H){if(this.AN>0)switch(this.CH.CO){case 6:this.
CB(this);break;case 7:this.Cm(this);break;default:this.CH.PF=true;}},N1:function(
E){if(this.Animal===E)return;this.Animal=E;if(!this.Animal)this.I1(0);else if(this.
Animal.TimestampLastWeighing===this.Animal.TimestampFirstWeighing)this.I1(1);else{
this.I1(2);this.Av.Gp(1);this.Av.IB(this.Av.FM,true,null,null);}if(this.AN>0)this.
Av.ZL(0,this.AN-1);},Aiq:function(E){if(this.Rating===E)return;this.Rating=E;if(
this.AN>0)this.Av.ZL(0,this.AN-1);},CB:function(H){if(this.Av.FM>0)this.Av.Gp(this.
Av.FM-1);else this.Av.Gp(this.AN-1);this.Av.IB(this.Av.FM,true,null,null);},Cm:function(
H){if(this.Av.FM<(this.AN-1))this.Av.Gp(this.Av.FM+1);else this.Av.Gp(0);this.Av.
IB(this.Av.FM,true,null,null);},I1:function(E){if(this.AN===E)return;this.AN=E;this.
Av.I1(this.AN);A.aat([this,this.AoI,this.I1],0);},AoI:function(){return this.AN;
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.B1._Init.call(this.
CH={I:this},0);A.Core.Cv._Init.call(this.Av={I:this},0);this.__proto__=C.AQK;this.
G(AdK);this.CH.Filter=147;this.Av.AW(0x3F);this.Av.G(AdK);this.Av.Ne(C.ADm);this.
Av.Ac0(160);this.Av.Gp(0);this.Av.I1(2);this.J(this.Av,0);this.CH.B2=[this,this.
DW];this.CH.Ea=[this,this.DW];this.Av.GH=[this,this.GH];},_Done:function(){this.
__proto__=A.Core.O;this.CH._Done();this.Av._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.CH._ReInit();this.Av._ReInit();},_Mark:
function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))
B._Mark(B._cycle=D);if((B=this.Rating)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.CH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Av)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::WeightGainScrollList"};C.DY={Init:function(aArg){}
,Bh:function(aSize){C.B_.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.
M,aSize));this.T.G([0,aSize[1]-80,aSize[0],aSize[1]-40]);},Ah:function(Ae){var B;
C.B_.Ah.call(this,Ae);var FV=((Ae&0x10)===0x10);var Fx=((Ae&0x20)===0x20);var Fw=
this.Bi.Bw;var Gf=A.iF.CE;var G3=A.iF.Text;if(this.GY){Gf=A.iF.CR;G3=A.iF.Text;}
if(!FV){this.Background.L(A.iF.CR);this.T.L(A.iF.CE);}else if(Fw){this.Background.
L(A.iF.A6);this.T.L(A.iF.Be);}else if(Fx){this.Background.L(A.iF.A6);this.T.L(A.
iF.Be);}else{this.Background.L(Gf);this.T.L(G3);}this.Lr=FV;this.Kq=Fx;this.QC=Fw;
},_Init:function(aArg){C.B_._Init.call(this,aArg);this.__proto__=C.DY;this.G(KO);
this.T.G(BI);this.XI(true);this.Init(aArg);},_className:"Application::MenuItemDoubleRow"
};C.AcK={K4:null,F_:A.jm,Bh:function(aSize){C.DY.Bh.call(this,aSize);this.K4.G([
0,aSize[1]-40,aSize[0],aSize[1]]);},Ah:function(Ae){C.DY.Ah.call(this,Ae);this.K4.
L(this.T.AM);},Init:function(aArg){},Z9:function(E){if(this.F_===E)return;this.F_=
E;this.K4.R(E);},_Init:function(aArg){C.DY._Init.call(this,aArg);C.CG._Init.call(
this.K4={I:this},0);this.__proto__=C.AcK;this.G(KO);this.Background.G(KO);this.T.
G(AaM);this.T.R(RS);this.K4.G(Ke);this.K4.R(ATt);this.J(this.K4,0);this.T.Y(A.zW(
A.eV.Au));this.T.By(A.zW(A.eV.Az));this.T.C5(null);this.K4.Y(A.zW(A.eV.Au));this.
K4.By(A.zW(A.eV.Az));this.Init(aArg);},_Done:function(){this.__proto__=C.DY;this.
K4._Done();C.DY._Done.call(this);},_ReInit:function(){C.DY._ReInit.call(this);this.
K4._ReInit();},_Mark:function(D){var B;C.DY._Mark.call(this,D);if((B=this.K4)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemDoubleCaption"};C.AsW={
AyI:null,Q:null,Fp:null,Fb:null,HO:null,K9:null,Am:null,El:null,AJR:A.jm,AJS:A.jm
,Bh:function(aSize){C.AcK.Bh.call(this,aSize);if(!this.AyI)this.K4.G([].concat(0
,this.K4.M.slice(1,4)));else this.K4.G([].concat(this.Am.M[2],this.K4.M.slice(1,
4)));},Ah:function(Ae){var F,Dc,RU;C.AcK.Ah.call(this,Ae);var A72=false;if(!!this.
Q){if(!(F=this.Q,F[1].call(F[0]))){if(this.Aws)this.Z9(this.AJR);else this.Z9(this.
AJS);}else{this.Z9(A._GetAutoObject(A.Device.Converter).Vc((F=this.Q,F[1].call(F[
0]))));if((((!!this.HO&&!!this.Fp)&&!!this.Fb)&&!!this.K9)&&(((F=this.HO,F[1].call(
F[0]))===1)||(!(Dc=this.HO,Dc[1].call(Dc[0]))&&(RU=this.K9,RU[1].call(RU[0])))))
A72=true;}}this.El.W(A72);this.Am.L(this.T.AM);A.ow([this,this.Aea],this);},C1:function(
H){this.Al();},AD:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.
C1],this.Q,0);this.Q=E;if(!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1
],this);},ABd:function(E){if(this.AyI===E)return;this.AyI=E;this.Am.At(E);this.Bcv(
);},P3:function(E){if(A.z_(this.Fp,E))return;if(!!this.Fp)A.zn([this,this.YP],this.
Fp,0);this.Fp=E;if(!!E)A.za([this,this.YP],E,0);if(!!E)A.ow([this,this.YP],this);
},Rr:function(E){if(A.z_(this.Fb,E))return;if(!!this.Fb)A.zn([this,this.YQ],this.
Fb,0);this.Fb=E;if(!!E)A.za([this,this.YQ],E,0);if(!!E)A.ow([this,this.YQ],this);
},YQ:function(H){this.Al();},YP:function(H){this.Al();},SX:function(E){if(A.z_(this.
HO,E))return;if(!!this.HO)A.zn([this,this.AjQ],this.HO,0);this.HO=E;if(!!E)A.za([
this,this.AjQ],E,0);if(!!E)A.ow([this,this.AjQ],this);},AjQ:function(H){this.Al(
);},Aea:function(H){var F,Dc;if((!this.HO||!this.Fp)||!this.Fb)return;var AW_=this.
K4.AlE([(this.K4.String.length-(F=this.Fb,F[1].call(F[0])))-(Dc=this.Fp,Dc[1].call(
Dc[0])),0]);var AYe=this.K4.AlE([this.K4.String.length-(F=this.Fb,F[1].call(F[0]
)),0]);var AxM=this.K4.Dh(0x0);this.El.G([AW_[0]-1,AxM[1],AYe[0]+1,AxM[3]]);},AoV:
function(E){if(this.AJR===E)return;this.AJR=E;this.Al();},AoW:function(E){if(this.
AJS===E)return;this.AJS=E;this.Al();},AcY:function(E){if(A.z_(this.K9,E))return;
if(!!this.K9)A.zn([this,this.AXG],this.K9,0);this.K9=E;if(!!E)A.za([this,this.AXG
],E,0);if(!!E)A.ow([this,this.AXG],this);},AXG:function(H){this.Al();},_Init:function(
aArg){C.AcK._Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:this},0);A.abh.
CT._Init.call(this.El={I:this},0);this.__proto__=C.AsW;this.Am.G(Nt);this.El.G(ATu
);this.El.N7(2);this.El.L(A.iF.E1);this.J(this.Am,0);this.J(this.El,0);this.K4.Rs([
this,this.Aea]);},_Done:function(){this.__proto__=C.AcK;this.Am._Done();this.El.
_Done();C.AcK._Done.call(this);},_ReInit:function(){C.AcK._ReInit.call(this);this.
Am._ReInit();this.El._ReInit();},_Mark:function(D){var B;C.AcK._Mark.call(this,D
);if((B=this.AyI)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Fp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Fb)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.HO)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.K9)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);if((B=this.El)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::MenuItemTransponderId"};C.SetTransponderScreen={
Jc:0,YL:4,A9a:false,A7_:true,A85:false,AjW:function(H){C.S6.AjW.call(this,H);if(
A._GetAutoObject(A.Device.Helper).A84()){this.Jc=A._GetAutoObject(A.Device.Helper
).S7.Id;var Agr=A._GetAutoObject(A.Device.Helper).AMP(this.Jc);if(Agr)A._GetAutoObject(
A.Device.Device).A_(25,true,A._GetAutoObject(A.Device.Converter).Vc(this.Jc),0,[
this,this.AXK]);else{this.YL=A._GetAutoObject(A.Device.Helper).AMQ(this.Jc);var A9v=
false;if((this.YL===3)||(this.YL===2))A9v=A._GetAutoObject(A.Device.Helper).AMN(
this.Jc);if(A9v)A._GetAutoObject(A.Device.Device).A_(21,true,A._GetAutoObject(A.
Device.Converter).Vc(this.Jc),0,null);else switch(this.YL){case 2:{var BJ=A._GetAutoObject(
A.Device.Converter).Auy(this.Jc);A._GetAutoObject(A.Device.Device).A_(46,true,BJ.
toFixed(),0,[this,this.AXK]);}break;case 3:case 1:case 0:case 4:this.A$j();break;
default:throw new Error(AEp+this.YL.toFixed());}}}},EY:function(H){A._GetAutoObject(
C.A1).Fm();},AEY:function(s){this.EY(s);},A$j:function(){A._GetAutoObject(A.Device.
Helper).V.Nf(this.Jc);if((this.YL===3)||(this.YL===2)){if((this.A7_&&(A._GetAutoObject(
A.Device.Helper).V.NaisId>0))&&(A._GetAutoObject(A.Device.Helper).V.NaisId!==this.
Jc))A._GetAutoObject(A.Device.Device).A_(91,true,A.jm,0,[this,this.AXK]);else this.
A$h();}this.A85=true;this.EY(this);},AXK:function(H){var Ar=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!Ar)switch(Ar.Id){case 46:if(Ar.PopupState===4)this.
A$j();break;case 25:switch(Ar.PopupState){case 4:A._GetAutoObject(A.Device.Device
).Adn();break;case 5:this.EY(this);break;default:;}break;case 91:switch(Ar.PopupState
){case 7:this.A$h();break;case 8:this.EY(this);break;default:;}break;default:A.aa8(
"%s%e",AEq,Ar.Id);}},A$h:function(){A._GetAutoObject(A.Device.Helper).V.O3(this.
Jc);if(this.A9a&&(A._GetAutoObject(A.Device.Converter).AfW(this.Jc)===10)){var A7M=
Math.trunc((this.Jc%1000000000000)/10000000000);if(!A7M&&(A._GetAutoObject(A.Device.
Helper).V.AnimalType===2))A._GetAutoObject(A.Device.Helper).V.DS(0);else if((A7M===
1)&&(A._GetAutoObject(A.Device.Helper).V.AnimalType!==2))A._GetAutoObject(A.Device.
Helper).V.DS(2);}},_Init:function(aArg){C.S6._Init.call(this,aArg);this.__proto__=
C.SetTransponderScreen;this.N.W(true);this.Dw(C.Ig);this.Number.R(A.z2(A.abg.O7)
);this.IL.G(ATv);this.Io.G(Vl);this.Ais(1);this.N.CB=[this,this.AEY];this.N.C$(A.
zW(A.abi.ET));},_className:"Application::SetTransponderScreen"};C.AzM={FG:null,La:
null,Lb:null,C6:function(){this.Al();},Init:function(aArg){this.Al();},Ah:function(
Ae){C.Eg.Ah.call(this,Ae);this.La.R(A._GetAutoObject(A.abk.Dy).Abh());this.Lb.R(
A._GetAutoObject(A.abk.Dy).YD());},_Init:function(aArg){C.Eg._Init.call(this,aArg
);A.abh.Text._Init.call(this.FG={I:this},0);A.abh.Text._Init.call(this.La={I:this
},0);A.abh.Text._Init.call(this.Lb={I:this},0);this.__proto__=C.AzM;this.Background.
L(A.iF.Text);this.FG.G(ATw);this.FG.A0(0x11);this.FG.R(A.z2(A.abg.Date));this.FG.
L(A.iF.Be);this.La.G(ATx);this.La.A0(0x11);this.La.L(A.iF.Be);this.Lb.G(ATy);this.
Lb.L(A.iF.Be);this.J(this.FG,0);this.J(this.La,0);this.J(this.Lb,0);this.FG.Y(A.
zW(A.eV.Au));this.La.Y(A.zW(A.eV.Au));this.Lb.Y(A.zW(A.eV.Au));this.Init(aArg);}
,_Done:function(){this.__proto__=C.Eg;this.FG._Done();this.La._Done();this.Lb._Done(
);C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(this);this.FG._ReInit(
);this.La._ReInit();this.Lb._ReInit();this.FG.R(A.z2(A.abg.Date));this.FG.Y(A.zW(
A.eV.Au));this.La.Y(A.zW(A.eV.Au));this.Lb.Y(A.zW(A.eV.Au));this.C6();},_Mark:function(
D){var B;C.Eg._Mark.call(this,D);if((B=this.FG)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.La)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lb)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeadlineWeights"};C.ADq={LF:null,Hf:null,In:null,AQ:
null,A4:null,Fl:0,HH:0,AgE:false,Init:function(aArg){},Bh:function(aSize){C.A$.Bh.
call(this,aSize);this.Background.G(A.aaQ(this.Background.M,((aSize[0]*65)/100)|0
));this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AQ.G([this.T.M[2]-1,0,this.
T.M[2]+1,aSize[1]]);this.Hf.G([this.T.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.
A4.G([this.Hf.M[2]-1,0,this.Hf.M[2]+1,aSize[1]]);this.LF.G([this.Background.M[2]
,0,aSize[0],aSize[1]]);this.In.G(this.LF.M);},Ah:function(Ae){C.A$.Ah.call(this,
Ae);if(this.AgE){this.In.R(Qk);this.In.L(A.iF.Text);this.LF.L(this.Background.AM
);}else{this.In.R(A._GetAutoObject(A.Device.Converter).Np(this.Fl,2,true));this.
In.L(A._GetAutoObject(A.abk.Dy).Awy(this.Fl,this.HH));this.LF.L(A._GetAutoObject(
A.abk.Dy).Aww(this.Fl,this.HH));}this.Hf.L(this.T.AM);},B8:function(Z){if(!this.
AZ)return;this.Ho=Z;if(!!this.AZ){var Ajq=this.AZ.Ht(Z,6);var Aj2=this.AZ.Cq(Z,8
);if(this.Ho>0){var Bry=this.AZ.Ht(this.Ho-1,6);var Bt3=this.AZ.Cq(this.Ho-1,8);
var KU=A._GetAutoObject(A.Device.Helper).L7(Bry,Ajq);if(!!KU){this.AgE=false;this.
Fl=A._GetAutoObject(A.abk.Dy).Ajm(KU,Bt3,Aj2);}else{this.AgE=true;this.Fl=0;}}else{
this.AgE=true;this.Fl=0;}this.U(A._GetAutoObject(A.abk.K5).AKk(Ajq));this.Hf.R(A.
_GetAutoObject(A.Device.Converter).AlV(Aj2));this.HH=A._GetAutoObject(A.Device.Helper
).V.AnimalType;this.Al();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.
AH._Init.call(this.LF={I:this},0);A.abh.Text._Init.call(this.Hf={I:this},0);A.abh.
Text._Init.call(this.In={I:this},0);A.abh.AH._Init.call(this.AQ={I:this},0);A.abh.
AH._Init.call(this.A4={I:this},0);this.__proto__=C.ADq;this.T.G(AdJ);this.LF.G(Aqc
);this.Hf.G(AEr);this.Hf.A0(0x12);this.Hf.R(Kd);this.Hf.L(A.iF.Text);this.In.G(AEs
);this.In.R(Kd);this.In.L(A.iF.Text);this.AQ.G(Al5);this.AQ.L(A.iF.A7);this.A4.G(
Al6);this.A4.L(A.iF.A7);this.J(this.LF,0);this.J(this.Hf,0);this.J(this.In,0);this.
J(this.AQ,0);this.J(this.A4,0);this.Hf.Y(A.zW(A.eV.Au));this.In.Y(A.zW(A.eV.Au));
this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.LF._Done();this.Hf._Done(
);this.In._Done();this.AQ._Done();this.A4._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.LF._ReInit();this.Hf._ReInit();this.In._ReInit(
);this.AQ._ReInit();this.A4._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.LF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hf)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::WeightListItem"};C.WeightListScreen={Bg:null,Uj:null,AfV:null,RH:null
,J7:A.jm,C6:function(){this.Al();},Ah:function(Ae){C.Aw.Ah.call(this,Ae);var KU=
A._GetAutoObject(A.Device.Helper).L7(A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing
,A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing);if(!!KU){var Fl=A._GetAutoObject(
A.abk.Dy).Ajm(KU,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight);var AbE=A.z2(A.abg.Bam);AbE=A._GetAutoObject(
A.Device.Helper).Nk(AbE,Qj,A._GetAutoObject(A.Device.Converter).Np(Fl,2,true));AbE=
A._GetAutoObject(A.Device.Helper).Nk(AbE,AuX,A._GetAutoObject(A.abk.Dy).YD());this.
RH.R(AbE);this.AfV.L(A._GetAutoObject(A.abk.Dy).Aww(Fl,A._GetAutoObject(A.Device.
Helper).V.AnimalType));this.RH.L(A._GetAutoObject(A.abk.Dy).Awy(Fl,A._GetAutoObject(
A.Device.Helper).V.AnimalType));}else{this.RH.R(A.z2(A.abg.A5y));this.AfV.L(A.iF.
AMD);this.RH.L(A.iF.Text);}},CF:function(H){var EZ=A._NewObject(A.Device.Filter,
0);var Hk=A._NewObject(A.Device.Int32FilterCriterion,0);Hk.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).V.Id,true);EZ.CQ(Hk);var Aa4=A._NewObject(A.Device.Int32FilterCriterion
,0);Aa4.Initialize(8,2,0,true);EZ.CQ(Aa4);A._GetAutoObject(A.Device.Device).Bt.Bo(
EZ);this.Auj(this);},Fc:function(H){A._GetAutoObject(A.Device.Device).Bt.Bo(null
);},Auj:function(H){this.Bg=A._NewObject(C.Fu,0);this.Bg.Ne(C.ADq);this.Bg.G(Au9
);this.Bg.XF(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Et(this.J7);this.J(this.
Bg,0);this.A8(this.Bg);},Alb:function(H){A._GetAutoObject(C.A1).Fm();},Et:function(
E){if(this.J7===E)return;this.J7=E;if(!!this.Bg)this.Bg.Et(E);},_Init:function(aArg
){C.Aw._Init.call(this,aArg);C.AzM._Init.call(this.Uj={I:this},0);A.abh.AH._Init.
call(this.AfV={I:this},0);A.abh.Text._Init.call(this.RH={I:this},0);this.__proto__=
C.WeightListScreen;this.Background.G(B4);this.N.W(true);this.Dw(C.Ig);this.Uj.G(
RT);this.J7=A.z2(A.abg.AoC);this.AfV.AW(0x1D);this.AfV.G(Ke);this.RH.AW(0x1D);this.
RH.G(Ke);this.RH.A0(0x12);this.RH.R(Kd);this.J(this.Uj,0);this.J(this.AfV,0);this.
J(this.RH,0);this.N.CB=[this,this.Alb];this.N.C$(A.zW(A.abi.ET));this.RH.Y(A.zW(
A.eV.Au));},_Done:function(){this.__proto__=C.Aw;this.Uj._Done();this.AfV._Done(
);this.RH._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw._ReInit.call(this
);this.Uj._ReInit();this.AfV._ReInit();this.RH._ReInit();this.Et(A.z2(A.abg.AoC)
);this.RH.Y(A.zW(A.eV.Au));this.C6();},_Mark:function(D){var B;C.Aw._Mark.call(this
,D);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Uj)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AfV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RH)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::WeightListScreen"};C.LA={DO:null
,Aav:null,ANc:11,Gr:0,AZd:true,Ayp:false,JE:function(H){if(A._GetAutoObject(A.Device.
Device).Aq.Cf()>0)this.I2(4);else A._GetAutoObject(A.Device.Device).A_(30,true,A.
jm,0,null);},CF:function(H){if(this.DO.AwE())this.DO.Aa3();else if((this.Gr===2)&&
A._GetAutoObject(A.Device.Helper).V.Aob())this.I2(5);else this.I2(1);},Fc:function(
H){this.AG6();},EY:function(H){this.I2(0);A._GetAutoObject(C.A1).Fm();},BuA:function(
){A._GetAutoObject(A.Device.Device).Adn();},AG6:function(){A._GetAutoObject(A.Device.
Device).AlJ();},A3q:function(E){if(this.Ayp===E)return;this.Ayp=E;A.aat([this,this.
BdT,this.A3q],0);},I2:function(E){var B;if(this.Gr===E)return;this.Gr=E;switch(E
){case 1:{A._GetAutoObject(A.Device.Helper).AiC();A.za([this,this.AGB],[B=A._GetAutoObject(
A.Device.Helper),B.AoJ,B.Air],0);A.zn([this,this.Aw2],[B=this.DO,B.Alg,B.I2],0);
this.BuA();}break;case 3:{A.zn([this,this.AGB],[B=A._GetAutoObject(A.Device.Helper
),B.AoJ,B.Air],0);this.AG6();this.BsG();}break;case 2:{A._GetAutoObject(A.Device.
Helper).Apu();if(!A._GetAutoObject(A.Device.Device).AutoRegistrationMode&&this.AZd
)this.Bup();else this.Bus();}break;case 4:{A.zn([this,this.AGB],[B=A._GetAutoObject(
A.Device.Helper),B.AoJ,B.Air],0);this.AG6();A._GetAutoObject(A.Device.Helper).Apu(
);A.za([this,this.A_a],[B=A._GetAutoObject(A.Device.Device),B.AAW,B.AEU],0);A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(this.ANc);}break;case 5:this.A$p();break;case
6:{A.za([this,this.Aw2],[B=this.DO,B.Alg,B.I2],0);this.DO.Aa3();}break;case 0:{A.
zn([this,this.AGB],[B=A._GetAutoObject(A.Device.Helper),B.AoJ,B.Air],0);this.AG6(
);}break;default:throw new Error(Ave);}A.aat([this,this.Alg,this.Bpi],0);},Bpi:function(
Ao){this.I2(Ao);},AGB:function(H){if(!!A._GetAutoObject(A.Device.Helper).S7){if(
this.Gr===1)this.I2(3);else A.aa8("%s%e",ATz,this.Gr);}else A.aa8("%s",AEt);},Bup:
function(){A._GetAutoObject(A.Device.Device).A_(13,true,A._GetAutoObject(A.Device.
Helper).AlO(A._GetAutoObject(A.Device.Helper).S7.Id).toFixed(),0,[this,this.BsT]
);},BsT:function(H){var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!
Ar&&((Ar.PopupState===4)||(Ar.PopupState===3))){if(this.A8b(false))A._GetAutoObject(
C.A1).BY(30);else{A._GetAutoObject(A.Device.Helper).AiC();this.I2(1);}}else if(!
!Ar&&(Ar.PopupState===5)){A._GetAutoObject(A.Device.Helper).AiC();this.I2(1);}},
A8b:function(Anu){var B;if(A._GetAutoObject(A.Device.Device).Aq.Ms()){A._GetAutoObject(
A.Device.Device).A_(41,true,A._GetAutoObject(A.Device.Device).Aq.If().toFixed(),
0,null);return false;}A._GetAutoObject(A.Device.Helper).V.GG();A._GetAutoObject(
A.Device.Helper).Aye(A._GetAutoObject(A.Device.Helper).V);A._GetAutoObject(A.Device.
Helper).V.Nf(A._GetAutoObject(A.Device.Helper).S7.Id);if(!!A._GetAutoObject(A.Device.
Helper).AfI){var AjB=A._GetAutoObject(A.Device.Helper).AfI.AKD();A._GetAutoObject(
A.Device.Helper).V.Z$(AjB);A._GetAutoObject(A.Device.Helper).V.Alo(AjB);}if(A._GetAutoObject(
A.Device.Helper).AMQ(A._GetAutoObject(A.Device.Helper).V.TransponderId)===3)A._GetAutoObject(
A.Device.Helper).V.O3(A._GetAutoObject(A.Device.Helper).V.TransponderId);A._GetAutoObject(
A.Device.Helper).V.XK(A._GetAutoObject(A.Device.Helper).A$_(A._GetAutoObject(A.Device.
Device).AeC,A._GetAutoObject(A.Device.Helper).V));if(Anu){A._GetAutoObject(A.Device.
Helper).V.Cs(A._GetAutoObject(A.Device.Device).Aq);var Ol=A._GetAutoObject(A.Device.
Device).Aq.LM(0,A._GetAutoObject(A.Device.Helper).V.Id);A._GetAutoObject(A.Device.
Device).UZ(Ol);if(A._GetAutoObject(A.Device.Helper).AkV()){if(A._GetAutoObject(A.
Device.Device).Bt.Ms())A._GetAutoObject(A.Device.Device).A_(50,true,A._GetAutoObject(
A.Device.Device).Bt.If().toFixed(),0,null);else{var Ca=A._NewObject(A.Device.Rating
,0);Ca.GG();Ca.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);Ca.OnSetBodyWeight(
A._GetAutoObject(A.Device.Helper).AhE(A._GetAutoObject(A.Device.Helper).V.AnimalType
));Ca.OnSetTimestamp(A._GetAutoObject(A.Device.Helper).V.DateOfBirth);Ca.Cs(A._GetAutoObject(
A.Device.Device).Bt);}}if(!A._GetAutoObject(A.Device.Device).AeC){var Is=null;var
R2=0;if(!A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode){Is=[B=A._GetAutoObject(
A.Device.Device),B.Ale,B.Amb];R2=A._GetAutoObject(A.Device.Device).Ar2;}else switch(
A._GetAutoObject(A.Device.Helper).V.Gender){case 1:{Is=[B=A._GetAutoObject(A.Device.
Device),B.As7,B.Avs];R2=A._GetAutoObject(A.Device.Device).Ay0;}break;case 0:{Is=[
B=A._GetAutoObject(A.Device.Device),B.As8,B.Avt];R2=A._GetAutoObject(A.Device.Device
).Ay1;}break;case 2:{Is=[B=A._GetAutoObject(A.Device.Device),B.Ale,B.Amb];R2=A._GetAutoObject(
A.Device.Device).Ar2;}break;default:;}if(!!Is)switch(R2){case 1:Is[2].call(Is[0]
,A._GetAutoObject(A.Device.Helper).V.VisualId-1);break;case 0:Is[2].call(Is[0],A.
_GetAutoObject(A.Device.Helper).V.VisualId+1);break;default:;}}}return true;},BsG:
function(){if(!!A._GetAutoObject(A.Device.Helper).S7){var AFv=true;if(A._GetAutoObject(
A.Device.Helper).S7.Id!==A._GetAutoObject(A.Device.Helper).V.TransponderId){AFv=
A._GetAutoObject(A.Device.Helper).A1G(A._GetAutoObject(A.Device.Helper).S7.Id);if(
!AFv&&(A._GetAutoObject(A.Device.Device).AutoRegistrationMode===1)){this.A8b(true
);AFv=A._GetAutoObject(A.Device.Helper).A1G(A._GetAutoObject(A.Device.Helper).S7.
Id);}}if(AFv)this.I2(5);else this.I2(2);}else{A.aa8("%s",AEt);return;}},A_a:function(
H){var B;if(A._GetAutoObject(A.Device.Device).OverlayMenu!==this.ANc){A.zn([this
,this.A_a],[B=A._GetAutoObject(A.Device.Device),B.AAW,B.AEU],0);if(A._GetAutoObject(
A.Device.Helper).V.Aob())this.I2(5);else this.I2(1);}},A$p:function(){if(this.Ayp===
true)this.I2(6);else A._GetAutoObject(C.A1).BY(24);},Bus:function(){A._GetAutoObject(
A.Device.Device).A_(36,true,A.jm,0,[this,this.BtK]);},BtK:function(H){var Ar=(A.
Device.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&((Ar.PopupState===4)||(Ar.
PopupState===3))){A._GetAutoObject(A.Device.Helper).AiC();this.I2(1);}},Aw2:function(
H){if(!this.DO.Gr)this.I2(1);},AXA:function(H){},Bpr:function(s){this.AXA(s);},BdT:
function(){return this.Ayp;},Alg:function(){return this.Gr;},_Init:function(aArg
){C.S6._Init.call(this,aArg);A.abh.Text._Init.call(this.Aav={I:this},0);this.__proto__=
C.LA;this.N.W(true);this.Dw(C.Aoc);this.Number.G(ATA);this.Number.R(A.z2(A.abg.A4U
));this.IL.G(ATB);this.Io.G(ATC);this.Aav.G(ATD);this.Aav.R(ATE);this.Aav.L(A.iF.
Text);this.J(this.Aav,0);this.N.CB=[this,this.EY];this.N.Ch=[this,this.Bpr];this.
N.C$(A.zW(A.abi.ET));this.Number.Y(A.zW(A.eV.Au));this.Aav.Y(A.zW(A.eV.LO));this.
DO=A._GetAutoObject(C.DO);},_Done:function(){this.__proto__=C.S6;this.Aav._Done(
);C.S6._Done.call(this);},_ReInit:function(){C.S6._ReInit.call(this);this.Aav._ReInit(
);this.Number.R(A.z2(A.abg.A4U));this.Number.Y(A.zW(A.eV.Au));},_Mark:function(D
){var B;C.S6._Mark.call(this,D);if((B=this.DO)&&(B._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Aav)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionScanScreen"
};C.AY1={AutoActions:null,ActionToString:null,AnimalTypeToString:null,AmI:-1,Gr:
0,BqQ:function(){var A_5=false;var NF=A._GetAutoObject(A.Device.Helper).V.IsAlarm;
if(A._GetAutoObject(A.Device.Device).Bt.Ms())A._GetAutoObject(A.Device.Device).A_(
50,true,A._GetAutoObject(A.Device.Device).Bt.If().toFixed(),0,null);else if(NF){
A_5=true;var Ca=A._NewObject(A.Device.Rating,0);Ca.GG();Ca.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).V.Id);A._GetAutoObject(A.Device.Helper).Aue(Ca,5);Ca.OnSetAppearance(
3);Ca.Cs(A._GetAutoObject(A.Device.Device).Bt);}else{var Ca=A._NewObject(A.Device.
Rating,0);Ca.GG();Ca.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.Id);A._GetAutoObject(
A.Device.Helper).Aue(Ca,5);Ca.OnSetAppearance(1);Ca.Cs(A._GetAutoObject(A.Device.
Device).Bt);}A._GetAutoObject(A.Device.Helper).V.Fq(A._GetAutoObject(A.Device.Helper
).V.Cu,A._GetAutoObject(A.Device.Device).Aq);if(A_5)A._GetAutoObject(A.Device.Helper
).V.SY(false);if(NF)A._GetAutoObject(A.Device.Helper).V.AlG(false);else A._GetAutoObject(
A.Device.Helper).V.AlG(true);A._GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(
A.Device.Device).Aq);if(A._GetAutoObject(A.Device.Helper).V.IsAlarm)A._GetAutoObject(
A.Device.Device).A_(17,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(
),2000,[this,this.NI]);else A._GetAutoObject(A.Device.Device).A_(18,true,A._GetAutoObject(
A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NI]);},BqS:function(){A._GetAutoObject(
A.Device.Helper).V.ACI(!A._GetAutoObject(A.Device.Helper).V.IsWatch);A._GetAutoObject(
A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.Device).Aq);if(A._GetAutoObject(
A.Device.Helper).V.IsWatch)A._GetAutoObject(A.Device.Device).A_(19,true,A._GetAutoObject(
A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NI]);else A._GetAutoObject(
A.Device.Device).A_(20,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(
),2000,[this,this.NI]);},R3:function(Jt){switch(Jt){case 4:this.BqQ();break;case
128:A._GetAutoObject(C.A1).BY(7);break;case 16:A._GetAutoObject(C.A1).BY(35);break;
case 1:A._GetAutoObject(C.A1).BY(10);break;case 2:A._GetAutoObject(C.A1).BY(11);
break;case 8:this.BqS();break;case 64:A._GetAutoObject(C.A1).BY(28);break;case 32:
A._GetAutoObject(C.A1).BY(53);break;case 256:A._GetAutoObject(C.A1).BY(21);break;
case 512:A._GetAutoObject(C.A1).BY(29);break;case 1024:this.BsE();break;case 262144:
this.BuM();break;case 2048:this.Aa3();break;case 4096:this.A75(false);break;case
8192:this.BqR();break;case 16384:this.BsD();break;case 32768:this.Brf();break;case
65536:this.BrB();break;case 131072:this.Buj();break;case 0:break;default:throw new
Error(ATF);}},A8d:function(Jt,Bqk){var Ep=A._NewObject(C.UH,0);Ep.Z8(false);Ep.Aj(
true);Ep.AV=Bqk;Ep.BeZ(Jt);switch(Jt){case 1:{Ep.U(A.z2(A.abg.AfQ));Ep.DB(A.zW(A.
abi.AHC));}break;case 2:{Ep.U(A.z2(A.abg.A4E));Ep.DB(A.zW(A.abi.AHD));}break;case
4:{Ep.U(A.z2(A.abg.Alarm));Ep.DB(A.zW(A.abi.AHE));Ep.ABK(true);}break;case 8:{Ep.
U(A.z2(A.abg.Apj));Ep.DB(A.zW(A.abi.AHF));Ep.ABK(true);}break;case 16:{Ep.U(A.z2(
A.abg.AH_));Ep.DB(A.zW(A.abi.AHG));}break;case 32:{Ep.U(A.z2(A.abg.AnimalLoss));
Ep.DB(A.zW(A.abi.AHH));}break;case 64:{Ep.U(A.z2(A.abg.Unregister));Ep.DB(A.zW(A.
abi.AHI));}break;case 128:{Ep.U(A.z2(A.abg.Edit));Ep.DB(A.zW(A.abi.AHJ));}break;
case 256:{Ep.U(A.z2(A.abg.Weighing));Ep.DB(A._GetAutoObject(A.abk.Dy).Bsg());}break;
case 512:{Ep.U(A.z2(A.abg.ANw));Ep.DB(A.zW(A.abi.AHu));}break;case 1024:{Ep.U(A.
z2(A.abg.LinkTransponder));Ep.DB(A.zW(A.abi.AHv));}break;case 262144:{Ep.U(A.z2(
A.abg.UnlinkTransponder));Ep.DB(A.zW(A.abi.AHB));}break;case 2048:{Ep.U(A.z2(A.abg.
Oz));Ep.DB(A.zW(A.abi.AHw));}break;case 4096:{Ep.U(A.z2(A.abg.Calving));Ep.DB(A.
zW(A.abi.AHx));}break;case 8192:{Ep.U(A.z2(A.abg.DryOff));Ep.DB(A.zW(A.abi.AHy));
Ep.ABK(true);}break;case 16384:{Ep.U(A.z2(A.abg.Bbt));Ep.DB(A.zW(A.abi.AHz));}break;
case 131072:{Ep.U(A.z2(A.abg.BhO));Ep.DB(A.zW(A.abi.AHA));}break;default:A.aa8("%s"
,(ATG+Jt.toFixed())+ATH);}return Ep;},BrO:function(){this.AmI=this.AmI+1;if(this.
AmI>=this.AutoActions.AhF())this.I2(0);else this.I2(2);},Bt7:function(){this.AmI=-
1;},AwE:function(){return(this.AmI>-1)&&!this.Bsx();},Bsx:function(){return this.
AmI>=this.AutoActions.AhF();},I2:function(E){if(this.Gr===E)return;this.Gr=E;switch(
E){case 1:this.BrO();break;case 2:{var Yt=this.AutoActions.Acj(this.AmI);if(this.
AYY(A._GetAutoObject(A.Device.Helper).V,Yt))this.R3(Yt);else A._GetAutoObject(A.
Device.Device).A_(64,true,(this.ActionToString.KN(Yt)+Aqa)+this.AnimalTypeToString.
KN(A._GetAutoObject(A.Device.Helper).V.AnimalType),0,[this,this.NI]);}break;case
0:this.Bt7();break;default:throw new Error(Ave);}A.aat([this,this.Alg,this.I2],0
);},NI:function(H){var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&((
Ar.Id===63)&&(Ar.PopupState===7)))this.A75(true);if((!!Ar&&(((Ar.PopupState===4)||(
Ar.PopupState===3))||(Ar.PopupState===8)))&&this.AwE())this.I2(1);},A78:function(
){return!!A._GetAutoObject(A.Device.Helper).V&&(A._GetAutoObject(A.Device.Device
).Aq.LM(0,A._GetAutoObject(A.Device.Helper).V.Id)>=0);},BsE:function(){if(!A._GetAutoObject(
A.Device.Helper).V.TransponderId)A._GetAutoObject(C.A1).BY(49);else A._GetAutoObject(
A.Device.Device).A_(32,true,A.jm,0,[this,this.NI]);},Aa3:function(){this.I2(1);}
,Bt5:function(){var NF=A._GetAutoObject(A.Device.Helper).V.IsAlarm;if(NF&&(!!A._GetAutoObject(
A.Device.Helper).V.WorstAssessment&&(A._GetAutoObject(A.Device.Helper).V.WorstAssessment
!==5))){if(A._GetAutoObject(A.Device.Device).Bt.Ms())A._GetAutoObject(A.Device.Device
).A_(50,true,A._GetAutoObject(A.Device.Device).Bt.If().toFixed(),0,null);else{var
Ca=A._NewObject(A.Device.Rating,0);Ca.GG();Ca.OnSetAnimalId(A._GetAutoObject(A.Device.
Helper).V.Id);A._GetAutoObject(A.Device.Helper).Aue(Ca,5);Ca.Cs(A._GetAutoObject(
A.Device.Device).Bt);}}A._GetAutoObject(A.Device.Helper).V.Fq(A._GetAutoObject(A.
Device.Helper).V.Cu,A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.
Helper).V.SY(false);if(NF)A._GetAutoObject(A.Device.Helper).V.AlG(false);A._GetAutoObject(
A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.
Device).A_(18,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(),2000,[
this,this.NI]);},Bt6:function(){A._GetAutoObject(A.Device.Helper).V.ACI(false);A.
_GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(
A.Device.Device).A_(20,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(
),2000,[this,this.NI]);},A75:function(BrR){if(!A._GetAutoObject(A.Device.Helper).
V.NaisId&&(BrR===false))A._GetAutoObject(A.Device.Device).A_(63,true,A.jm,0,[this
,this.NI]);else A._GetAutoObject(C.A1).BY(62);},BqR:function(){A._GetAutoObject(
A.Device.Helper).V.Ao6(!A._GetAutoObject(A.Device.Helper).V.IsDry);A._GetAutoObject(
A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.Device).Aq);if(A._GetAutoObject(
A.Device.Helper).V.IsDry)A._GetAutoObject(A.Device.Device).A_(54,true,A._GetAutoObject(
A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NI]);else A._GetAutoObject(
A.Device.Device).A_(55,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(
),2000,[this,this.NI]);},BsD:function(){if(!A._GetAutoObject(A.Device.Helper).V.
NaisId)A._GetAutoObject(C.A1).BY(92);else A._GetAutoObject(A.Device.Device).A_(69
,true,A.jm,0,[this,this.NI]);},Brf:function(){if(A._GetAutoObject(A.Device.Helper
).V.IsBirthAnnouncementPending){if(A._GetAutoObject(A.Device.Helper).AhU(A._GetAutoObject(
A.Device.Helper).V.WhereAbouts)){A._GetAutoObject(A.Device.Helper).V.Afv(false);
A._GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(
A.Device.Device).A_(65,true,A.jm,2000,[this,this.NI]);}else{A._GetAutoObject(A.Device.
Helper).V.Alm(false);A._GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.
Device).Aq);A._GetAutoObject(A.Device.Device).A_(60,true,A._GetAutoObject(A.Device.
Helper).V.VisualId.toFixed(),2000,[this,this.NI]);}}},BrB:function(){A._GetAutoObject(
A.Device.Helper).V.Afv(false);A._GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(
A.Device.Device).Aq);if(A._GetAutoObject(A.Device.Helper).V.IsBirthAnnouncementPending
){if(A._GetAutoObject(A.Device.Helper).AhU(A._GetAutoObject(A.Device.Helper).V.WhereAbouts
)){A._GetAutoObject(A.Device.Helper).V.Afv(false);A._GetAutoObject(A.Device.Helper
).V.Cs(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A_(
65,true,A.jm,2000,[this,this.NI]);}else A._GetAutoObject(A.Device.Device).A_(61,
true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NI]);
}},AYY:function(GL,Jt){var HM=false;switch(Jt){case 4:HM=true;break;case 32:HM=true;
break;case 2048:HM=true;break;case 4096:switch(GL.AnimalType){case 1:HM=true;break;
default:;}break;case 32768:HM=GL.IsBirthAnnouncementPending;break;case 65536:HM=
true;break;case 8192:switch(GL.AnimalType){case 1:HM=true;break;default:;}break;
case 128:HM=true;break;case 512:switch(GL.AnimalType){case 0:HM=true;break;default:;
}break;case 16:HM=true;break;case 16384:HM=true;break;case 1024:HM=true;break;case
262144:HM=true;break;case 2:HM=true;break;case 1:HM=true;break;case 8:HM=true;break;
case 0:break;case 64:HM=true;break;case 256:HM=true;break;case 131072:HM=true;break;
default:A.aa8("%s",ATI+Jt.toFixed());}return HM;},Buj:function(){if(!A._GetAutoObject(
A.Device.Helper).V.NaisId)A._GetAutoObject(C.A1).BY(91);else A._GetAutoObject(A.
Device.Device).A_(69,true,A.jm,0,[this,this.NI]);},BuM:function(){if(!A._GetAutoObject(
A.Device.Helper).V.TransponderId)A._GetAutoObject(A.Device.Device).A_(85,true,A.
_GetAutoObject(A.Device.Helper).V.VisualId.toFixed(),0,[this,this.NI]);else{A._GetAutoObject(
A.Device.Helper).V.Nf(0);A._GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(
A.Device.Device).Aq);A._GetAutoObject(A.Device.Device).A_(86,true,A._GetAutoObject(
A.Device.Helper).V.VisualId.toFixed(),2000,[this,this.NI]);}},Alg:function(){return this.
Gr;},_Init:function(aArg){A.Device.ActionToString._Init.call(this.ActionToString={
I:this},0);A.Device.AnimalTypeToString._Init.call(this.AnimalTypeToString={I:this
},0);this.__proto__=C.AY1;this.AutoActions=A._GetAutoObject(C.AutoActions);A.hJ++;
},_Done:function(){this.__proto__=null;this.ActionToString._Done();this.AnimalTypeToString.
_Done();A.hJ--;},_ReInit:function(){this.ActionToString._ReInit();this.AnimalTypeToString.
_ReInit();},_Mark:function(D){var B;if((B=this.AutoActions)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.ActionToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AnimalTypeToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B.
_Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::ActionsHelperClass"
};C.AHO={Y8:null,AnK:null,I2:function(E){if(this.Gr===E)return;C.LA.I2.call(this
,E);switch(E){case 1:this.Dw(C.Aoc);break;case 5:case 6:this.Dw(C.Ig);break;case
3:case 4:case 2:case 0:break;default:throw new Error(Ave);}},AXA:function(H){A._GetAutoObject(
A.Device.Device).UpdateOverlayMenu(2);},_Init:function(aArg){C.LA._Init.call(this
,aArg);A.abh.Text._Init.call(this.Y8={I:this},0);C.AHP._Init.call(this.AnK={I:this
},0);this.__proto__=C.AHO;this.A3q(true);this.Y8.G(ATJ);this.Y8.R(A.z2(A.abg.Oz)
);this.Y8.L(A.iF.Text);this.AnK.G(ATK);this.J(this.Y8,0);this.J(this.AnK,0);this.
N.Cn(A.zW(A.abi.AhM));this.Y8.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=
C.LA;this.Y8._Done();this.AnK._Done();C.LA._Done.call(this);},_ReInit:function(){
C.LA._ReInit.call(this);this.Y8._ReInit();this.AnK._ReInit();this.Y8.R(A.z2(A.abg.
Oz));this.Y8.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.LA._Mark.call(this,D);
if((B=this.Y8)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AnK)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::ActionChainScanScreen"};C.ManualActionScanScreen={
Ir:null,Jr:null,AXA:function(H){if(this.Ir.AkU(2048))A._GetAutoObject(A.Device.Device
).UpdateOverlayMenu(8);else A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(
3);},_Init:function(aArg){C.LA._Init.call(this,aArg);A.abh.Text._Init.call(this.
Jr={I:this},0);this.__proto__=C.ManualActionScanScreen;this.Jr.G(ATL);this.Jr.KH(
true);this.Jr.R(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon))+Cw)+A.z2(A.abg.Ayc));this.Jr.
L(A.iF.Text);this.J(this.Jr,0);this.N.Cn(A.zW(A.abi.AhM));this.Jr.Y(A.zW(A.eV.Au
));this.Ir=A._GetAutoObject(C.Pz);},_Done:function(){this.__proto__=C.LA;this.Jr.
_Done();C.LA._Done.call(this);},_ReInit:function(){C.LA._ReInit.call(this);this.
Jr._ReInit();this.Jr.R(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon))+Cw)+A.z2(A.abg.Ayc));
this.Jr.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.LA._Mark.call(this,D);if((B=
this.Ir)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jr)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ManualActionScanScreen"};C.AHP={Ac:null,Init:function(
aArg){var B;A.y_([this,this.AxX],A._GetAutoObject(C.AutoActions),0);A.y_([this,this.
Arx],A._GetAutoObject(A.Device.Helper).V,0);A.ow([this,this.AxX],this);A.ow([this
,this.Arx],this);this.G(A.aaN(this.M,ATM));this.Ac.G(A.aaN(this.Ac.M,A.aaj([(B=this.
M)[2]-B[0],B[3]-B[1]],ATN)));},A7T:function(H){var B;var Ajn=0;var Awa=0;var A8a;
var X=this.Ac.Af;var Cg=null;A8a=((((B=this.M)[2]-B[0])-(A._GetAutoObject(C.AutoActions
).AhF()*58))/2)|0;while(!!X&&!((X.S&0x200)===0x200)){Cg=(C.UH.isPrototypeOf(X)?X:
null);if(((X.S&0x400)===0x400)&&!!Cg){Cg.G(A.aaN(Cg.M,ATO));Cg.G(A.aaP(Cg.M,(Awa
*58)+A8a));Cg.G(A.aaR(Cg.M,Ajn*58));if(Awa>=3){Ajn=Ajn+1;Awa=0;}else Awa=Awa+1;}
X=X.Af;}this.A8(null);},AWa:function(Jt){var Ep=A._GetAutoObject(C.DO).A8d(Jt,null
);this.J(Ep,0);this.A7T(this);},Av0:function(){var B;var X=this.Ac.Af;while(!!X&&
!((X.S&0x200)===0x200)){var Ake=X;X=X.Af;if(((Ake.S&0x400)===0x400))this.HA(Ake);
}},AxX:function(H){this.Av0();var P;var DZ=A._GetAutoObject(C.AutoActions).AhF();
for(P=0;P<DZ;P=P+1){var Yt=A._GetAutoObject(C.AutoActions).Acj(P);this.AWa(Yt);}
A.ow([this,this.A7T],this);A.ow([this,this.Arx],this);A.ow([this,this.BuW],this);
},Arx:function(H){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((
X.S&0x400)===0x400)){var Ab=(C.UH.isPrototypeOf(X)?X:null);Ab.ABK(false);}X=X.Af;
}},BuW:function(H){var B;var X=this.Ac.Af;while(!!X&&!((X.S&0x200)===0x200)){if(((
X.S&0x400)===0x400)){var Ab=(C.UH.isPrototypeOf(X)?X:null);var Bq6=A._GetAutoObject(
C.AutoActions).AhF();if(!!Ab){var P;Ab.A3m(false);for(P=0;P<Bq6;P=P+1)if(Ab.Action===
A._GetAutoObject(C.AutoActions).Acj(P)){Ab.A3m(true);Ab.Bf$(ATP+(P+1).toFixed());
}}}X=X.Af;}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.Ac._Init.
call(this.Ac={I:this},0);this.__proto__=C.AHP;this.Ac.Lf(0);this.J(this.Ac,0);this.
Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Ac._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Ac._ReInit();},
_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ActionChainScreenGrid"};C.DO={_Init:function(
){C.AY1._Init.call(this,0);},_variants:function(){return this;},_this:null};C.ALh={
KE:null,SL:null,Init:function(aArg){this.KE.R(A._GetAutoObject(A.abk.Temperature
).AjA());},_Init:function(aArg){C.DQ._Init.call(this,aArg);A.abh.Text._Init.call(
this.KE={I:this},0);C.CG._Init.call(this.SL={I:this},0);this.__proto__=C.ALh;this.
KE.G(ATQ);this.KE.A0(0x12);this.KE.L(A.iF.Text);this.SL.G(Al7);this.SL.R((A.z2(A.
abg.Afm)+AEu)+A.z2(A.abg.Ky));this.SL.A0(0x12);this.SL.L(A.iF.Text);this.J(this.
KE,0);this.J(this.SL,0);this.KE.Y(A.zW(A.eV.Au));this.SL.Y(A.zW(A.eV.Az));this.SL.
By(A.zW(A.eV.Cr));this.Init(aArg);},_Done:function(){this.__proto__=C.DQ;this.KE.
_Done();this.SL._Done();C.DQ._Done.call(this);},_ReInit:function(){C.DQ._ReInit.
call(this);this.KE._ReInit();this.SL._ReInit();this.SL.R((A.z2(A.abg.Afm)+AEu)+A.
z2(A.abg.Ky));this.KE.Y(A.zW(A.eV.Au));this.SL.Y(A.zW(A.eV.Az));this.SL.By(A.zW(
A.eV.Cr));},_Mark:function(D){var B;C.DQ._Mark.call(this,D);if((B=this.KE)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.SL)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdTemperatures"};C.AzK={IZ:null,DE:null,_Init:function(aArg
){C.DQ._Init.call(this,aArg);A.abh.Text._Init.call(this.IZ={I:this},0);A.abh.Text.
_Init.call(this.DE={I:this},0);this.__proto__=C.AzK;this.IZ.G(AEv);this.IZ.KH(true
);this.IZ.A0(0x14);this.IZ.R(A.z2(A.abg.AfU)+AEw);this.IZ.L(A.iF.Text);this.DE.G(
Al7);this.DE.KH(true);this.DE.R(A.z2(A.abg.ACf));this.DE.L(A.iF.Text);this.J(this.
IZ,0);this.J(this.DE,0);this.IZ.Y(A.zW(A.eV.Az));this.DE.Y(A.zW(A.eV.Az));},_Done:
function(){this.__proto__=C.DQ;this.IZ._Done();this.DE._Done();C.DQ._Done.call(this
);},_ReInit:function(){C.DQ._ReInit.call(this);this.IZ._ReInit();this.DE._ReInit(
);this.IZ.R(A.z2(A.abg.AfU)+AEw);this.DE.R(A.z2(A.abg.ACf));this.IZ.Y(A.zW(A.eV.
Az));this.DE.Y(A.zW(A.eV.Az));},_Mark:function(D){var B;C.DQ._Mark.call(this,D);
if((B=this.IZ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DE)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::HeadlineIdRatings"};C.Sy={IF:null,_Init:function(
aArg){C.DQ._Init.call(this,aArg);C.CG._Init.call(this.IF={I:this},0);this.__proto__=
C.Sy;this.IF.G(Avf);this.IF.R((((A.z2(A.abg.Sg)+AaP)+AEx)+A.z2(A.abg.A5G))+Nu);this.
IF.A0(0x12);this.IF.L(A.iF.Text);this.J(this.IF,0);this.IF.Y(A.zW(A.eV.Au));this.
IF.By(A.zW(A.eV.Az));this.IF.C5(A.zW(A.eV.Cr));},_Done:function(){this.__proto__=
C.DQ;this.IF._Done();C.DQ._Done.call(this);},_ReInit:function(){C.DQ._ReInit.call(
this);this.IF._ReInit();this.IF.R((((A.z2(A.abg.Sg)+AaP)+AEx)+A.z2(A.abg.A5G))+Nu
);this.IF.Y(A.zW(A.eV.Au));this.IF.By(A.zW(A.eV.Az));this.IF.C5(A.zW(A.eV.Cr));}
,_Mark:function(D){var B;C.DQ._Mark.call(this,D);if((B=this.IF)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::HeadlineIdAnimalInfos"};C.ALj={La:null,Lb:
null,C6:function(){this.A4W();},Init:function(aArg){this.A4W();},A4W:function(){
this.La.R(A._GetAutoObject(A.abk.Dy).Abh());this.Lb.R(A._GetAutoObject(A.abk.Dy).
YD());},_Init:function(aArg){C.DQ._Init.call(this,aArg);A.abh.Text._Init.call(this.
La={I:this},0);C.CG._Init.call(this.Lb={I:this},0);this.__proto__=C.ALj;this.La.
G(ATR);this.La.A0(0x12);this.La.L(A.iF.Text);this.Lb.G(Al7);this.Lb.L(A.iF.Text);
this.J(this.La,0);this.J(this.Lb,0);this.La.Y(A.zW(A.eV.Au));this.Lb.Y(A.zW(A.eV.
Au));this.Lb.By(A.zW(A.eV.Az));this.Lb.C5(A.zW(A.eV.Cr));this.Init(aArg);},_Done:
function(){this.__proto__=C.DQ;this.La._Done();this.Lb._Done();C.DQ._Done.call(this
);},_ReInit:function(){C.DQ._ReInit.call(this);this.La._ReInit();this.Lb._ReInit(
);this.C6();},_Mark:function(D){var B;C.DQ._Mark.call(this,D);if((B=this.La)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Lb)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdWeights"};C.AIY={LF:null,Hf:null,In:null,AQ:null,A4:null
,Fl:0,VS:0,HH:0,AgE:false,Init:function(aArg){},Bh:function(aSize){C.A$.Bh.call(
this,aSize);this.Background.G(A.aaQ(this.Background.M,((aSize[0]*65)/100)|0));this.
T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AQ.G([this.T.M[2]-1,0,this.T.M[2
]+1,aSize[1]]);this.Hf.G([this.T.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.A4.
G([this.Hf.M[2]-1,0,this.Hf.M[2]+1,aSize[1]]);this.LF.G([this.Background.M[2],0,
aSize[0],aSize[1]]);this.In.G(this.LF.M);},Ah:function(Ae){C.A$.Ah.call(this,Ae);
if(this.AgE){this.In.R(Qk);this.In.L(A.iF.Text);this.LF.L(this.Background.AM);}else{
this.In.R(A._GetAutoObject(A.Device.Converter).Np(this.Fl,2,true));this.In.L(A._GetAutoObject(
A.abk.Dy).Awy(this.Fl,this.HH));this.LF.L(A._GetAutoObject(A.abk.Dy).Aww(this.Fl
,this.HH));}if(this.VS>0)this.Hf.R(A._GetAutoObject(A.Device.Converter).AlV(this.
VS));else this.Hf.R(Qk);this.Hf.L(this.T.AM);},B8:function(Z){if(!this.AZ)return;
this.Ho=Z;if(!!this.AZ){var Oy=this.AZ.Cq(Z,1);var Art=this.AZ.Ht(Z,24);var AGa=
this.AZ.Cq(Z,23);var Any=this.AZ.Ht(Z,19);this.VS=this.AZ.Cq(Z,18);if((Art>0)&&(
Art!==Any)){var KU=A._GetAutoObject(A.Device.Helper).L7(Art,Any);if(!!KU){this.AgE=
false;this.Fl=A._GetAutoObject(A.abk.Dy).Ajm(KU,AGa,this.VS);}else{this.AgE=true;
this.Fl=0;}}else{this.AgE=true;this.Fl=0;}this.U(Oy.toFixed());this.HH=this.AZ.AkL(
Z,14);this.Al();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.
call(this.LF={I:this},0);A.abh.Text._Init.call(this.Hf={I:this},0);A.abh.Text._Init.
call(this.In={I:this},0);A.abh.AH._Init.call(this.AQ={I:this},0);A.abh.AH._Init.
call(this.A4={I:this},0);this.__proto__=C.AIY;this.T.G(AdJ);this.LF.G(Aqc);this.
Hf.G(AEr);this.Hf.A0(0x12);this.Hf.R(Kd);this.Hf.L(A.iF.Text);this.In.G(AEs);this.
In.R(Kd);this.In.L(A.iF.Text);this.AQ.G(Al5);this.AQ.L(A.iF.A7);this.A4.G(Al6);this.
A4.L(A.iF.A7);this.J(this.LF,0);this.J(this.Hf,0);this.J(this.In,0);this.J(this.
AQ,0);this.J(this.A4,0);this.Hf.Y(A.zW(A.eV.Au));this.In.Y(A.zW(A.eV.Au));this.Init(
aArg);},_Done:function(){this.__proto__=C.A$;this.LF._Done();this.Hf._Done();this.
In._Done();this.AQ._Done();this.A4._Done();C.A$._Done.call(this);},_ReInit:function(
){C.A$._ReInit.call(this);this.LF._ReInit();this.Hf._ReInit();this.In._ReInit();
this.AQ._ReInit();this.A4._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this
,D);if((B=this.LF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hf)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.In)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::CalfListWeightItem"};C.Mk={LE:null,AQ:null,A4:null,G2:null,VF:0,Init:
function(aArg){},Bh:function(aSize){C.A$.Bh.call(this,aSize);this.LE.G([0,0,((aSize[
0]*30)/100)|0,aSize[1]]);this.T.G(this.LE.M);this.Background.G([].concat(this.LE.
M[2],this.Background.M.slice(1,4)));this.Background.G(A.aaQ(this.Background.M,aSize[
0]));this.AQ.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.G2.G([this.T.M[2],
0,this.T.M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.A4.G([this.G2.M[2]-1,0,this.
G2.M[2]+1,aSize[1]]);},Ah:function(Ae){C.A$.Ah.call(this,Ae);this.G2.L(this.T.AM
);if(!!this.VF&&(this.VF!==5)){this.LE.L(A._GetAutoObject(A.abk.Assessment).Pq(this.
VF));this.T.L(A._GetAutoObject(A.abk.Assessment).VN(this.VF));}else this.LE.L(this.
Background.AM);},B8:function(Z){if(!this.AZ)return;this.Ho=Z;if(!!this.AZ){var Oy=
this.AZ.Cq(Z,1);var K1=this.AZ.ID(Z,13);var Ajv=this.AZ.ID(Z,17);var AjE=this.AZ.
Hs(Z,11);var AvT=this.AZ.Ht(Z,4);var AdY=A._GetAutoObject(A.Device.Helper).L7(AvT
,A._GetAutoObject(A.Device.Helper).DR());this.VF=A._GetAutoObject(A.Device.Helper
).AH8(K1,AjE,Ajv);this.U(Oy.toFixed());if(AdY<100)this.G2.R((AdY.toFixed()+Cw)+A.
z2(A.abg.AHN));else this.G2.R(A._GetAutoObject(A.abk.K5).Azj(AvT,A._GetAutoObject(
A.Device.Helper).DR(),AEy));this.Al();}},_Init:function(aArg){C.A$._Init.call(this
,aArg);A.abh.AH._Init.call(this.LE={I:this},0);A.abh.AH._Init.call(this.AQ={I:this
},0);A.abh.AH._Init.call(this.A4={I:this},0);A.abh.Text._Init.call(this.G2={I:this
},0);this.__proto__=C.Mk;this.LE.G(Aqc);this.Background.G(ATS);this.T.G(AdJ);this.
AQ.G(Al5);this.AQ.L(A.iF.A7);this.A4.G(Al6);this.A4.L(A.iF.A7);this.G2.G(Avg);this.
J(this.LE,-2);this.J(this.AQ,0);this.J(this.A4,0);this.J(this.G2,0);this.G2.Y(A.
zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.LE._Done(
);this.AQ._Done();this.A4._Done();this.G2._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.LE._ReInit();this.AQ._ReInit();this.A4._ReInit(
);this.G2._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.
LE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosItem"};C.AIW={Ahm:null,Oa:null,
AQ:null,A4:null,IV:null,AGt:0,AW9:0,Init:function(aArg){},Bh:function(aSize){C.A$.
Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize));this.T.G(A.
aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AQ.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[
1]]);this.Oa.G([this.T.M[2],0,((aSize[0]*65)/100)|0,aSize[1]]);this.Ahm.G(this.Oa.
M);this.A4.G([this.Oa.M[2]-1,0,this.Oa.M[2]+1,aSize[1]]);this.IV.G([this.Oa.M[2]
,0,aSize[0],aSize[1]]);},Ah:function(Ae){C.A$.Ah.call(this,Ae);this.IV.CZ(this.T.
AM);if(this.AGt>0){this.Ahm.L(A._GetAutoObject(A.abk.Assessment).Pq(this.AW9));this.
Oa.L(A._GetAutoObject(A.abk.Assessment).VN(this.AW9));}else{this.Ahm.L(this.Background.
AM);this.Oa.L(this.T.AM);}},B8:function(Z){if(!this.AZ)return;this.Ho=Z;if(!!this.
AZ){var Kl=this.AZ.Cq(Z,0);var Oy=this.AZ.Cq(Z,1);this.AGt=this.AZ.Cq(Z,5);this.
AW9=this.AZ.ID(Z,17);this.U(Oy.toFixed());if(this.AGt>0)this.Oa.R(A._GetAutoObject(
A.Device.Converter).AiN(this.AGt));else this.Oa.R(Qk);var VE=A._GetAutoObject(A.
Device.Helper).X0(6);A._GetAutoObject(A.Device.Device).UZ(Z);var AVj=A._GetAutoObject(
A.Device.Helper).BbT(A._GetAutoObject(A.Device.Device).Bt,9,Kl,VE,0);this.IV.A3A(
AVj.Get(3));this.IV.A3C(AVj.Get(2));this.IV.A3B(AVj.Get(1));this.Al();}},_Init:function(
aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.Ahm={I:this},0);A.abh.
Text._Init.call(this.Oa={I:this},0);A.abh.AH._Init.call(this.AQ={I:this},0);A.abh.
AH._Init.call(this.A4={I:this},0);C.IV._Init.call(this.IV={I:this},0);this.__proto__=
C.AIW;this.Oa.A0(0x12);this.Oa.R(Kd);this.Oa.L(A.iF.Text);this.AQ.G(Al5);this.AQ.
L(A.iF.A7);this.A4.G(Al6);this.A4.L(A.iF.A7);this.IV.G(ATT);this.J(this.Ahm,0);this.
J(this.Oa,0);this.J(this.AQ,0);this.J(this.A4,0);this.J(this.IV,0);this.Oa.Y(A.zW(
A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ahm._Done(
);this.Oa._Done();this.AQ._Done();this.A4._Done();this.IV._Done();C.A$._Done.call(
this);},_ReInit:function(){C.A$._ReInit.call(this);this.Ahm._ReInit();this.Oa._ReInit(
);this.AQ._ReInit();this.A4._ReInit();this.IV._ReInit();},_Mark:function(D){var B;
C.A$._Mark.call(this,D);if((B=this.Ahm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Oa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IV)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListTemperatureItem"};C.IV={Adt:null,ColoredCounterAttrSet:
null,AyN:0,AyO:0,AyM:0,Ka:0,Ah:function(Ae){var B;A.Core.O.Ah.call(this,Ae);var AGk;
var AHt;var AGQ;var AjN=0;if(this.AyM>0){AGk=this.AyM.toFixed();AjN+=AGk.length;
}else{AGk=ATU;AjN++;}if(this.AyO>0){AHt=this.AyO.toFixed();AjN+=AHt.length;}else{
AHt=ATV;AjN++;}if(this.AyN>0){AGQ=this.AyN.toFixed();AjN+=AGQ.length;}else{AGQ=AEm;
AjN++;}if(AjN<=4)this.ColoredCounterAttrSet.AoY(A.zW(A.eV.Au));else if(AjN<=5)this.
ColoredCounterAttrSet.AoY(A.zW(A.eV.Az));else this.ColoredCounterAttrSet.AoY(A.zW(
A.eV.Cr));this.Adt.R(((((ATW+AGk)+ATX)+AHt)+ATY)+AGQ);},A3B:function(E){if(this.
AyN===E)return;this.AyN=E;this.Al();},A3C:function(E){if(this.AyO===E)return;this.
AyO=E;this.Al();},A3A:function(E){if(this.AyM===E)return;this.AyM=E;this.Al();},
CZ:function(E){if(this.Ka===E)return;this.Ka=E;this.ColoredCounterAttrSet.Afs(E);
},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.ArP._Init.call(this.
Adt={I:this},0);A.Graphics.AttrSet._Init.call(this.ColoredCounterAttrSet={I:this
},0);this.__proto__=C.IV;this.G(AEz);this.Adt.AW(0x3F);this.Adt.G(AEz);this.Adt.
R(Kd);this.ColoredCounterAttrSet.Be_(A.iF.E1);this.ColoredCounterAttrSet.A3w(A.iF.
HB);this.ColoredCounterAttrSet.A3v(A.iF.F0);this.ColoredCounterAttrSet.Afs(A.iF.
Text);this.Ka=A.iF.Text;this.J(this.Adt,0);this.Adt.A3p(this.ColoredCounterAttrSet
);this.ColoredCounterAttrSet.AoY(A.zW(A.eV.Au));this.ColoredCounterAttrSet.A3r(null
);},_Done:function(){this.__proto__=A.Core.O;this.Adt._Done();this.ColoredCounterAttrSet.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Adt._ReInit();this.ColoredCounterAttrSet._ReInit();},_Mark:function(D){var
B;A.Core.O._Mark.call(this,D);if((B=this.Adt)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ColoredCounterAttrSet)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCounter"
};C.AIV={AqD:null,Aaj:null,Aak:null,Aal:null,IV:null,AQ:null,A4:null,DU:null,KK:
null,Adv:null,Li:null,Lj:null,AFB:0,AFA:0,AFz:0,Init:function(aArg){},Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize)
);this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AQ.G([this.T.M[2]-1,0,this.
T.M[2]+1,aSize[1]]);this.Aaj.G([this.T.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.
Adv.G(this.Aaj.M);this.A4.G([this.Aaj.M[2]-1,0,this.Aaj.M[2]+1,aSize[1]]);this.Aak.
G([this.Aaj.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.Li.G(this.Aak.M);this.DU.
G([this.Aak.M[2]-1,0,this.Aak.M[2]+1,aSize[1]]);this.Aal.G([this.Aak.M[2],0,((aSize[
0]*65)/100)|0,aSize[1]]);this.Lj.G(this.Aal.M);this.KK.G([this.Aal.M[2]-1,0,this.
Aal.M[2]+1,aSize[1]]);this.IV.G([this.Aal.M[2],0,aSize[0],aSize[1]]);},Ah:function(
Ae){C.A$.Ah.call(this,Ae);this.IV.CZ(this.T.AM);this.Aaj.L(A._GetAutoObject(A.abk.
Assessment).Pq(this.AFz));this.Aak.L(A._GetAutoObject(A.abk.Assessment).Pq(this.
AFA));this.Aal.L(A._GetAutoObject(A.abk.Assessment).Pq(this.AFB));this.Adv.L(A._GetAutoObject(
A.abk.Assessment).VN(this.AFz));this.Li.L(A._GetAutoObject(A.abk.Assessment).VN(
this.AFA));this.Lj.L(A._GetAutoObject(A.abk.Assessment).VN(this.AFB));this.Adv.W(
!this.AFz);this.Li.W(!this.AFA);this.Lj.W(!this.AFB);this.IV.A3A(this.AqD.Get(3)
);this.IV.A3C(this.AqD.Get(2));this.IV.A3B(this.AqD.Get(1));},B8:function(Z){if(
!this.AZ)return;this.Ho=Z;if(!!this.AZ){var Kl=this.AZ.Cq(Z,0);var Oy=this.AZ.Cq(
Z,1);this.U(Oy.toFixed());A._GetAutoObject(A.Device.Device).UZ(Z);this.AFz=A._GetAutoObject(
A.Device.Helper).AWL(A._GetAutoObject(A.Device.Device).Bt,Kl,0);this.AFA=A._GetAutoObject(
A.Device.Helper).AWL(A._GetAutoObject(A.Device.Device).Bt,Kl,-1);this.AFB=A._GetAutoObject(
A.Device.Helper).AWL(A._GetAutoObject(A.Device.Device).Bt,Kl,-2);this.AqD=A._GetAutoObject(
A.Device.Helper).A0U(A._GetAutoObject(A.Device.Device).Bt,Kl,0,0);this.Al();}},_Init:
function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.Aaj={I:this},
0);A.abh.AH._Init.call(this.Aak={I:this},0);A.abh.AH._Init.call(this.Aal={I:this
},0);C.IV._Init.call(this.IV={I:this},0);A.abh.AH._Init.call(this.AQ={I:this},0);
A.abh.AH._Init.call(this.A4={I:this},0);A.abh.AH._Init.call(this.DU={I:this},0);
A.abh.AH._Init.call(this.KK={I:this},0);A.abh.Text._Init.call(this.Adv={I:this},
0);A.abh.Text._Init.call(this.Li={I:this},0);A.abh.Text._Init.call(this.Lj={I:this
},0);this.__proto__=C.AIV;this.AQ.L(A.iF.A7);this.A4.L(A.iF.A7);this.DU.L(A.iF.A7
);this.KK.L(A.iF.A7);this.Adv.R(Al8);this.Li.R(Al8);this.Lj.R(Al8);this.J(this.Aaj
,0);this.J(this.Aak,0);this.J(this.Aal,0);this.J(this.IV,0);this.J(this.AQ,0);this.
J(this.A4,0);this.J(this.DU,0);this.J(this.KK,0);this.J(this.Adv,0);this.J(this.
Li,0);this.J(this.Lj,0);this.Adv.Y(A.zW(A.eV.Au));this.Li.Y(A.zW(A.eV.Au));this.
Lj.Y(A.zW(A.eV.Au));this.AqD=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Init(
aArg);},_Done:function(){this.__proto__=C.A$;this.Aaj._Done();this.Aak._Done();this.
Aal._Done();this.IV._Done();this.AQ._Done();this.A4._Done();this.DU._Done();this.
KK._Done();this.Adv._Done();this.Li._Done();this.Lj._Done();C.A$._Done.call(this
);},_ReInit:function(){C.A$._ReInit.call(this);this.Aaj._ReInit();this.Aak._ReInit(
);this.Aal._ReInit();this.IV._ReInit();this.AQ._ReInit();this.A4._ReInit();this.
DU._ReInit();this.KK._ReInit();this.Adv._ReInit();this.Li._ReInit();this.Lj._ReInit(
);},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.AqD)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Aaj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Aak)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aal)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.IV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DU)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adv).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Lj)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListRatingItem"
};C.AkO={Hx:null,Agz:false,Bh:function(aSize){var B;this.Hx.G([(aSize[0]-((B=this.
Hx.M)[2]-B[0]))-10,0,aSize[0]-10,40]);this.T.G([10,0,this.Hx.M[0]-10,40]);C.Sp.Bh.
call(this,aSize);},Ah:function(Ae){C.Sp.Ah.call(this,Ae);if(this.Agz)this.Hx.Ce(
1);else this.Hx.Ce(0);},JB:function(H){if(this.Agz)C.Sp.JB.call(this,H);},Jw:function(
H){if(this.Agz)C.Sp.Jw.call(this,H);},Sb:function(AK){C.Sp.Sb.call(this,AK);if(!
!AK){this.G(A.aaL(this.M,80));this.Agz=true;this.XI(true);}else{this.G(A.aaL(this.
M,40));this.Agz=false;this.XI(false);}},_Init:function(aArg){C.Sp._Init.call(this
,aArg);A.abh.Am._Init.call(this.Hx={I:this},0);this.__proto__=C.AkO;this.T.A0(0x11
);this.Hx.G(ADV);this.Hx.Ce(0);this.J(this.Hx,0);this.T.C5(A.zW(A.eV.Cr));this.Hx.
At(A.zW(A.abi.An6));},_Done:function(){this.__proto__=C.Sp;this.Hx._Done();C.Sp.
_Done.call(this);},_ReInit:function(){C.Sp._ReInit.call(this);this.Hx._ReInit();
this.T.C5(A.zW(A.eV.Cr));},_Mark:function(D){var B;C.Sp._Mark.call(this,D);if((B=
this.Hx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::GroupFilterItem"
};C.ACe={_Init:function(aArg){C.At5._Init.call(this,aArg);this.__proto__=C.ACe;}
,_className:"Application::OptionsOverlaySeparator"};C.Aiu={Dn:A.jm,Bw:true,_Init:
function(aArg){C.At5._Init.call(this,aArg);this.__proto__=C.Aiu;},_className:"Application::OptionsOverlayNode"
};C.Ac6={AV:null,_Init:function(aArg){C.Aiu._Init.call(this,aArg);this.__proto__=
C.Ac6;},_Mark:function(D){var B;C.Aiu._Mark.call(this,D);if((B=this.AV)&&((B=B[0
])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::OptionsOverlayActivabaleNode"
};C.AJo={Ah:function(Ae){C.Tc.Ah.call(this,Ae);var Gf=A.iF.CE;var G3=A.iF.Text;if(
this.GY){Gf=A.iF.Text;G3=A.iF.Be;}this.Background.L(Gf);this.T.L(G3);},_Init:function(
aArg){C.Tc._Init.call(this,aArg);this.__proto__=C.AJo;},_className:"Application::DarkThemeTextItem"
};C.Tc={Background:null,T:null,GY:false,Init:function(aArg){},Bh:function(aSize){
C.GO.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize));this.
T.G(A.aaN(this.T.M,aSize));},U:function(E){if(this.Dn===E)return;this.Dn=E;this.
T.R(E);},Bk:function(E){if(this.GY===E)return;this.GY=E;this.Al();},_Init:function(
aArg){C.GO._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);
C.CG._Init.call(this.T={I:this},0);this.__proto__=C.Tc;this.G(BI);this.Background.
G(AEA);this.T.G(ATZ);this.J(this.Background,0);this.J(this.T,0);this.T.Y(A.zW(A.
eV.Au));this.T.By(A.zW(A.eV.Az));this.T.C5(A.zW(A.eV.Cr));this.Init(aArg);},_Done:
function(){this.__proto__=C.GO;this.Background._Done();this.T._Done();C.GO._Done.
call(this);},_ReInit:function(){C.GO._ReInit.call(this);this.Background._ReInit(
);this.T._ReInit();},_Mark:function(D){var B;C.GO._Mark.call(this,D);if((B=this.
Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TextItem"};C.ALm={Ek:null,Ij:null,_Init:function(aArg
){C.Eg._Init.call(this,aArg);A.abh.Text._Init.call(this.Ek={I:this},0);A.abh.Text.
_Init.call(this.Ij={I:this},0);this.__proto__=C.ALm;this.G(Ns);this.Background.G(
Ns);this.Ek.G(AEB);this.Ek.R(A.z2(A.abg.Hu));this.Ek.A0(0x11);this.Ek.L(A.iF.Text
);this.Ij.AW(0x3F);this.Ij.G(Ai6);this.Ij.HV(5);this.Ij.A0(0x14);this.Ij.R(A.z2(
A.abg.ACZ));this.Ij.L(A.iF.Text);this.J(this.Ek,0);this.J(this.Ij,0);this.Ek.Y(A.
zW(A.eV.Au));this.Ij.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.Eg;this.
Ek._Done();this.Ij._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.
call(this);this.Ek._ReInit();this.Ij._ReInit();this.Ek.R(A.z2(A.abg.Hu));this.Ij.
R(A.z2(A.abg.ACZ));this.Ek.Y(A.zW(A.eV.Au));this.Ij.Y(A.zW(A.eV.Au));},_Mark:function(
D){var B;C.Eg._Mark.call(this,D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ij)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineStatusSmall"
};C.CN={Q$:null,Ra:null,Acu:null,Ae6:null,PJ:null,Ka:0,LastTemperature:0,AnS:0,AnimalType:
0,IsAlarm:false,IsFever:false,IsWatch:false,Ah:function(Ae){A.Core.O.Ah.call(this
,Ae);switch(this.AnimalType){case 1:{this.Q$.At(A.zW(A.abi.AsC));this.Ra.At(A.zW(
A.abi.AsC));}break;case 2:{this.Q$.At(A.zW(A.abi.AsF));this.Ra.At(A.zW(A.abi.AsF
));}break;default:{this.Q$.At(A.zW(A.abi.Acq));this.Ra.At(A.zW(A.abi.Acq));}}this.
Q$.L(A._GetAutoObject(A.abk.Assessment).Pq(this.AnS));var Anf;if(this.IsWatch)Anf=
A.zW(A.abi.AMi);else if(this.IsFever){Anf=A.zW(A.abi.AMh);switch(A._GetAutoObject(
A.Device.Converter).Ahb(this.LastTemperature,this.AnimalType)){case 3:this.PJ.L(
A.iF.F0);break;case 2:this.PJ.L(A.iF.HB);break;case 1:this.PJ.L(A.iF.E1);break;case
0:this.PJ.L(A.iF.Adz);break;default:;}}else if(this.IsAlarm){Anf=A.zW(A.abi.AMg);
if(!this.AnS||(this.AnS===5))this.PJ.L(A.iF.F0);else this.PJ.L(0xFF000000);}else
Anf=null;this.Acu.At(Anf);this.Ae6.At(Anf);this.PJ.At(Anf);if(A._GetAutoObject(A.
abk.Assessment).Pq(this.AnS)===A.iF.E1)this.Ra.L(this.Ka);},DS:function(E){if(this.
AnimalType===E)return;this.AnimalType=E;this.Al();},ABf:function(E){if(this.AnS===
E)return;this.AnS=E;this.Al();},CZ:function(E){if(this.Ka===E)return;this.Ka=E;this.
Al();},AcZ:function(E){if(this.IsWatch===E)return;this.IsWatch=E;this.Al();},SY:
function(E){if(this.IsFever===E)return;this.IsFever=E;this.Al();},AcX:function(E
){if(this.IsAlarm===E)return;this.IsAlarm=E;this.Al();},Ac1:function(E){if(this.
LastTemperature===E)return;this.LastTemperature=E;this.Al();},G1:function(){this.
DS(0);this.ABf(0);this.AcX(false);this.SY(false);this.AcZ(false);this.Ac1(0);this.
CZ(A.iF.Text);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Am._Init.
call(this.Q$={I:this},0);A.abh.Am._Init.call(this.Ra={I:this},0);A.abh.Am._Init.
call(this.Acu={I:this},0);A.abh.Am._Init.call(this.Ae6={I:this},0);A.abh.Am._Init.
call(this.PJ={I:this},0);this.__proto__=C.CN;this.G(Ai7);this.Q$.AW(0x3F);this.Q$.
G(Ai7);this.Q$.L(A.iF.CE);this.Q$.A0(0x12);this.Q$.Ce(0);this.Ra.AW(0x3F);this.Ra.
G(Ai7);this.Ra.L(0xFF000000);this.Ra.A0(0x12);this.Ra.Ce(1);this.Acu.AW(0x3F);this.
Acu.G(Ai7);this.Acu.L(0xFF000000);this.Acu.Ce(0);this.Ae6.AW(0x3F);this.Ae6.G(Ai7
);this.Ae6.Ce(1);this.PJ.AW(0x3F);this.PJ.G(Ai7);this.PJ.L(A.iF.CR);this.PJ.Ce(2
);this.Ka=A.iF.Text;this.J(this.Q$,0);this.J(this.Ra,0);this.J(this.Acu,0);this.
J(this.Ae6,0);this.J(this.PJ,0);this.Q$.At(A.zW(A.abi.Acq));this.Ra.At(A.zW(A.abi.
Acq));},_Done:function(){this.__proto__=A.Core.O;this.Q$._Done();this.Ra._Done();
this.Acu._Done();this.Ae6._Done();this.PJ._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Q$._ReInit();this.Ra._ReInit();this.
Acu._ReInit();this.Ae6._ReInit();this.PJ._ReInit();},_Mark:function(D){var B;A.Core.
O._Mark.call(this,D);if((B=this.Q$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ra).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Acu)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ae6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalHeadIcon"};C.AIS={B8:function(Z){C.Aho.B8.call(
this,Z);if(!!this.AZ){var BsB=this.AZ.Hs(Z,12);var BqZ=this.AZ.Q_(Z,15);this.Ab7.
R(A._GetAutoObject(A.Device.Helper).L7(BqZ,A._GetAutoObject(A.Device.Helper).DR(
)).toFixed());this.Rb.W(BsB);this.Al();}},_Init:function(aArg){C.Aho._Init.call(
this,aArg);this.__proto__=C.AIS;},_className:"Application::CalfListAlarmItem"};C.
AzI={DE:null,LS:null,_Init:function(aArg){C.Sz._Init.call(this,aArg);A.abh.Text.
_Init.call(this.DE={I:this},0);A.abh.Am._Init.call(this.LS={I:this},0);this.__proto__=
C.AzI;this.DE.G(Al7);this.DE.KH(true);this.DE.R(A.z2(A.abg.AZ_));this.DE.L(A.iF.
Text);this.LS.G(AT0);this.LS.I0(false);this.LS.L(A.iF.Text);this.LS.A0(0x12);this.
J(this.DE,-2);this.J(this.LS,0);this.DE.Y(A.zW(A.eV.Az));this.LS.At(A.zW(A.abi.Az9
));},_Done:function(){this.__proto__=C.Sz;this.DE._Done();this.LS._Done();C.Sz._Done.
call(this);},_ReInit:function(){C.Sz._ReInit.call(this);this.DE._ReInit();this.LS.
_ReInit();this.DE.R(A.z2(A.abg.AZ_));this.DE.Y(A.zW(A.eV.Az));},_Mark:function(D
){var B;C.Sz._Mark.call(this,D);if((B=this.DE)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.LS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAlarm"
};C.JI={Background:null,CT:null,Azc:0,Ayv:0,Ah:function(Ae){A.Core.O.Ah.call(this
,Ae);this.Background.L(this.Azc);this.CT.L(this.Ayv);},Atx:function(E){if(this.Azc===
E)return;this.Azc=E;this.Al();},AA9:function(E){if(this.Ayv===E)return;this.Ayv=
E;this.Al();},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Am._Init.
call(this.Background={I:this},0);A.abh.Am._Init.call(this.CT={I:this},0);this.__proto__=
C.JI;this.G(Al9);this.Background.AW(0x3C);this.Background.G(Al9);this.Background.
Ce(1);this.CT.AW(0x3C);this.CT.G(Al9);this.Azc=A.iF.E1;this.Ayv=A.iF.Text;this.J(
this.Background,0);this.J(this.CT,0);this.Background.At(A.zW(A.abi.JI));this.CT.
At(A.zW(A.abi.JI));},_Done:function(){this.__proto__=A.Core.O;this.Background._Done(
);this.CT._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.Background._ReInit();this.CT._ReInit();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ColoredCircle"
};C.AnT={OG:null,A1u:false,Bh:function(aSize){C.LK.Bh.call(this,aSize);this.T.G([
].concat(this.OG.M[2]-this.T.Text.IH,this.T.M.slice(1,4)));},Ah:function(Ae){C.LK.
Ah.call(this,Ae);this.OG.L(this.T.AM);},ABr:function(E){if(this.A1u===E)return;this.
A1u=E;if(E)this.OG.R(AT1);else this.OG.R(AEC);},_Init:function(aArg){C.LK._Init.
call(this,aArg);A.abh.Text._Init.call(this.OG={I:this},0);this.__proto__=C.AnT;this.
OG.AW(0x34);this.OG.G(Yg);this.OG.R(AEC);this.J(this.OG,0);this.OG.Y(A.zW(A.eV.AKh
));},_Done:function(){this.__proto__=C.LK;this.OG._Done();C.LK._Done.call(this);
},_ReInit:function(){C.LK._ReInit.call(this);this.OG._ReInit();},_Mark:function(
D){var B;C.LK._Mark.call(this,D);if((B=this.OG)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DarkThemeCheckedMenuItem"};C.AKJ={EA:function(H){C.JK.EA.
call(this,H);this.CY.At(A._GetAutoObject(A.Device.Converter).AeF(4));},_Init:function(
aArg){C.JK._Init.call(this,aArg);this.__proto__=C.AKJ;},_className:"Application::HeaderAlarmListFilter"
};C.AutoRegistrationMode={AutoRegistrationModeToString:null,Dx:function(){return 3;
},Dd:function(aIndex){if((aIndex<0)||(aIndex>=3))return-1;return aIndex;},GS:function(
aIndex){if((aIndex<0)||(aIndex>=3))return A.jm;return this.AutoRegistrationModeToString.
Cb(aIndex);},DX:function(A2){return A2;},HP:function(){return 2;},_Init:function(
aArg){C.AC._Init.call(this,aArg);A.Device.AutoRegistrationModeToString._Init.call(
this.AutoRegistrationModeToString={I:this},0);this.__proto__=C.AutoRegistrationMode;
},_Done:function(){this.__proto__=C.AC;this.AutoRegistrationModeToString._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.AutoRegistrationModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.AutoRegistrationModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoRegistrationMode"
};C.ALn={FG:null,KE:null,W8:null,Init:function(aArg){this.KE.R(A._GetAutoObject(
A.abk.Temperature).AjA());},_Init:function(aArg){C.Eg._Init.call(this,aArg);A.abh.
Text._Init.call(this.FG={I:this},0);A.abh.Text._Init.call(this.KE={I:this},0);A.
abh.Text._Init.call(this.W8={I:this},0);this.__proto__=C.ALn;this.Background.L(A.
iF.Text);this.FG.G(AED);this.FG.A0(0x11);this.FG.R(A.z2(A.abg.Date));this.FG.L(A.
iF.Be);this.KE.G(AT2);this.KE.A0(0x12);this.KE.L(A.iF.Be);this.W8.G(AT3);this.W8.
A0(0x12);this.W8.R(A.z2(A.abg.Bp));this.W8.L(A.iF.Be);this.J(this.FG,0);this.J(this.
KE,0);this.J(this.W8,0);this.FG.Y(A.zW(A.eV.Au));this.KE.Y(A.zW(A.eV.Au));this.W8.
Y(A.zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.Eg;this.FG.
_Done();this.KE._Done();this.W8._Done();C.Eg._Done.call(this);},_ReInit:function(
){C.Eg._ReInit.call(this);this.FG._ReInit();this.KE._ReInit();this.W8._ReInit();
this.FG.R(A.z2(A.abg.Date));this.W8.R(A.z2(A.abg.Bp));this.FG.Y(A.zW(A.eV.Au));this.
KE.Y(A.zW(A.eV.Au));this.W8.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.Eg._Mark.
call(this,D);if((B=this.FG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.W8)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineTemperatures"};C.Sj={KB:null,AhH:false,Init:function(aArg){
var B;A.za([this,this.A62],[B=A._GetAutoObject(A.Device.Device),B.ANP,B.AUL],0);
this.ACP(this);A.ow([this,this.AU2],this);},DW:function(H){var DI=(A.Core.B1.isPrototypeOf(
H)?H:null);switch(DI.CO){case 6:this.NJ(this);break;case 7:this.Me(this);break;default:
DI.PF=true;}},CF:function(H){var B;if(!!this.KB)this.KB.CF(this);C.Aw.CF.call(this
,H);},Fc:function(H){var B;if(!!this.KB)this.KB.Fc(this);C.Aw.Fc.call(this,H);},
Alb:function(H){A._GetAutoObject(C.A1).Fm();},ACP:function(H){var B;if(!!this.KB
){this.KB.Fc(this);this.HA(this.KB);}if(this.AhH)switch(A._GetAutoObject(A.Device.
Device).DP){case 0:this.KB=A._NewObject(C.AIc,0);break;case 1:this.KB=A._NewObject(
C.AId,0);break;case 3:this.KB=A._NewObject(C.AIb,0);break;case 2:this.KB=A._NewObject(
C.AIe,0);break;default:throw new Error(Avh);}else switch(A._GetAutoObject(A.Device.
Device).DP){case 0:this.KB=A._NewObject(C.AIf,0);break;case 1:this.KB=A._NewObject(
C.AIo,0);break;case 3:this.KB=A._NewObject(C.AIi,0);break;case 2:this.KB=A._NewObject(
C.AIu,0);break;default:throw new Error(Avh);}this.HY(this);this.J(this.KB,0);this.
KB.G(FN);this.KB.XG([this,this.AU8]);this.KB.CF(this);this.A8(this.KB);},A62:function(
s){this.ACP(s);},AO1:function(H){A._GetAutoObject(A.Device.Device).Co(0);A._GetAutoObject(
A.Device.Device).AcS(0);},AO3:function(H){A._GetAutoObject(A.Device.Device).Co(0
);A._GetAutoObject(A.Device.Device).AcS(1);},AO2:function(H){A._GetAutoObject(A.
Device.Device).Co(0);A._GetAutoObject(A.Device.Device).AcS(3);},AO4:function(H){
A._GetAutoObject(A.Device.Device).Co(0);A._GetAutoObject(A.Device.Device).AcS(2);
},HY:function(H){this.N.C$(A.zW(A.abi.ET));this.N.GZ(A.jm);this.N.CB=[this,this.
Alb];this.N.AOr(A.zW(A.eV.Az));},AU2:function(s){this.HY(s);},BfU:function(E){if(
this.AhH===E)return;this.AhH=E;A.ow([this,this.A62],this);},A4s:function(H){this.
BfU(!this.AhH);},Bg3:function(H){A._GetAutoObject(A.Device.Device).Co(0);A._GetAutoObject(
A.Device.Device).A_(31,true,A.jm,0,null);},Me:function(H){},Byz:function(s){this.
Me(s);},NJ:function(H){},Byy:function(s){this.NJ(s);},A9_:function(H){var Fi=A._GetAutoObject(
A.Device.Device).DP;Fi=Fi+1;if(Fi>=4)Fi=0;A._GetAutoObject(A.Device.Device).AcS(
Fi);},Btr:function(H){var Fi=A._GetAutoObject(A.Device.Device).DP;Fi=Fi-1;if(Fi<
0)Fi=3;A._GetAutoObject(A.Device.Device).AcS(Fi);},AgF:function(H){},AU8:function(
s){this.AgF(s);},_Init:function(aArg){C.Aw._Init.call(this,aArg);this.__proto__=
C.Sj;this.Background.G(B4);this.N.W(true);this.N.O4(true);this.N.O5(true);this.Dw(
C.ALc);this.Init(aArg);},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.
KB)&&(B._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalInfoScreen"
};C.DP={AV:null,AttrSet:null,C4:null,CF:function(H){},AEO:function(s){this.CF(s);
},Fc:function(H){A._GetAutoObject(A.Device.Device).Bt.Bo(null);},Avo:function(s){
this.Fc(s);},XG:function(E){if(A.z$(this.AV,E))return;this.AV=E;this.C4.B2=E;},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.Graphics.AttrSet._Init.call(this.
AttrSet={I:this},0);A.Core.B1._Init.call(this.C4={I:this},0);this.__proto__=C.DP;
this.G(Vt);this.AttrSet.A3w(A.iF.F0);this.AttrSet.A3v(A.iF.HB);this.AttrSet.Afs(
A.iF.Text);this.C4.Filter=1;this.AttrSet.AoY(A.zW(A.eV.Az));this.AttrSet.A3r(null
);},_Done:function(){this.__proto__=A.Core.O;this.AttrSet._Done();this.C4._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AttrSet._ReInit();this.C4._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.AV)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AttrSet
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.C4)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoContent"};C.AIf={QI:null,Y4:null,Si:null,Sh:null,QM:null
,PA:null,QN:null,QK:null,QL:null,QJ:null,C6:function(){var B;this.QI.B8(this);this.
Y4.B8(this);this.Si.B8(this);this.Sh.B8(this);this.QM.B8(this);this.PA.B8(this);
this.QN.B8(this);this.QK.B8(this);this.QL.B8(this);this.QJ.B8(this);},Ix:function(
H){C.QO.Ix.call(this,H);switch(A._GetAutoObject(A.Device.Helper).V.AnimalType){case
0:case 2:{this.QI.W(true);this.Y4.W(false);this.QK.W(false);this.QL.W(false);this.
QJ.W(false);this.QM.W(true);this.PA.W(true);this.QN.W(true);}break;case 1:{this.
QI.W(false);this.Y4.W(true);this.QK.W(true);this.QL.W(true);this.QJ.W(true);this.
QM.W(false);this.PA.W(false);this.QN.W(false);}break;default:A.aa8("%s%e",Ap8,A.
_GetAutoObject(A.Device.Helper).V.AnimalType);}A.ow([this,this.TF],this);},_Init:
function(aArg){C.QO._Init.call(this,aArg);C.QI._Init.call(this.QI={I:this},0);C.
AIa._Init.call(this.Y4={I:this},0);C.Si._Init.call(this.Si={I:this},0);C.Sh._Init.
call(this.Sh={I:this},0);C.QM._Init.call(this.QM={I:this},0);C.PA._Init.call(this.
PA={I:this},0);C.QN._Init.call(this.QN={I:this},0);C.QK._Init.call(this.QK={I:this
},0);C.QL._Init.call(this.QL={I:this},0);C.QJ._Init.call(this.QJ={I:this},0);this.
__proto__=C.AIf;this.QI.G(BI);this.QI.Aj(true);this.QI.Bk(false);this.Y4.G(Ke);this.
Y4.Aj(true);this.Y4.Bk(false);this.Si.G(RT);this.Si.Aj(true);this.Si.Bk(true);this.
Sh.G(Yl);this.Sh.Aj(true);this.Sh.Bk(false);this.QM.G(Ai2);this.QM.Aj(true);this.
QM.Bk(true);this.PA.G(Al4);this.PA.Aj(true);this.PA.Bk(false);this.QN.G(Ap_);this.
QN.Aj(true);this.QN.Bk(true);this.QK.G(Vv);this.QK.Aj(true);this.QK.Bk(true);this.
QL.G(Aqd);this.QL.Aj(true);this.QL.Bk(false);this.QJ.G(AEh);this.QJ.Aj(true);this.
QJ.Bk(true);this.J(this.QI,0);this.J(this.Y4,0);this.J(this.Si,0);this.J(this.Sh
,0);this.J(this.QM,0);this.J(this.PA,0);this.J(this.QN,0);this.J(this.QK,0);this.
J(this.QL,0);this.J(this.QJ,0);},_Done:function(){this.__proto__=C.QO;this.QI._Done(
);this.Y4._Done();this.Si._Done();this.Sh._Done();this.QM._Done();this.PA._Done(
);this.QN._Done();this.QK._Done();this.QL._Done();this.QJ._Done();C.QO._Done.call(
this);},_ReInit:function(){C.QO._ReInit.call(this);this.QI._ReInit();this.Y4._ReInit(
);this.Si._ReInit();this.Sh._ReInit();this.QM._ReInit();this.PA._ReInit();this.QN.
_ReInit();this.QK._ReInit();this.QL._ReInit();this.QJ._ReInit();this.C6();},_Mark:
function(D){var B;C.QO._Mark.call(this,D);if((B=this.QI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Y4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Si)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Sh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QN
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QK)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QJ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfos"};C.AIu={AiG:function(Ll){if(!Ll)return;
var EZ=A._NewObject(A.Device.Filter,0);var Hk=A._NewObject(A.Device.Int32FilterCriterion
,0);Hk.Initialize(1,0,A._GetAutoObject(A.Device.Helper).V.Id,true);EZ.CQ(Hk);var
Aa4=A._NewObject(A.Device.Int32FilterCriterion,0);Aa4.Initialize(8,2,0,true);EZ.
CQ(Aa4);Ll.Bo(EZ);},AAh:function(){if(!A._GetAutoObject(A.Device.Device).Bt)return false;
var Ou=A._GetAutoObject(A.Device.Device).Bt.Cf();if(Ou<2)return false;var BuJ=A.
_GetAutoObject(A.Device.Device).Bt.Ht(0,6);var BuK=A._GetAutoObject(A.Device.Device
).Bt.Ht(Ou-1,6);var AWB=A._NewObject(A.Core.Bp,0);AWB.Initialize(BuJ);var AYl=A.
_NewObject(A.Core.Bp,0);AYl.Initialize(BuK);if((AWB.Z4()!==AYl.Z4())||(AWB.Year!==
AYl.Year))return true;else return false;},_Init:function(aArg){C.AbP._Init.call(
this,aArg);this.__proto__=C.AIu;this.AOC(C.ADq);this.AOD(C.AzM);this.AOt(C.PA);this.
AtB(A.z2(A.abg.A5y));this.Et(A.z2(A.abg.AoC));},_className:"Application::AnimalWeights"
};C.AIo={AiG:function(Ll){if(!Ll)return;var EZ=A._NewObject(A.Device.Filter,0);var
Hk=A._NewObject(A.Device.Int32FilterCriterion,0);Hk.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).V.Id,true);EZ.CQ(Hk);var AxL=A._NewObject(A.Device.Int32FilterCriterion
,0);AxL.Initialize(7,2,0,true);EZ.CQ(AxL);Ll.Bo(EZ);},AAh:function(){return A._GetAutoObject(
A.Device.Device).Bt.Cf()>0;},_Init:function(aArg){C.AbP._Init.call(this,aArg);this.
__proto__=C.AIo;this.AOC(C.AP$);this.AOD(C.ALn);this.AOt(C.Si);this.AtB(A.z2(A.abg.
A1M));this.Et(A.z2(A.abg.AoB));},_ReInit:function(){C.AbP._ReInit.call(this);this.
AtB(A.z2(A.abg.A1M));this.Et(A.z2(A.abg.AoB));},_className:"Application::AnimalTemperatures"
};C.APk={T2:null,T3:null,We:null,AeK:null,KM:null,AQ:null,A4:null,DU:null,KK:null
,AlF:null,Li:null,Lj:null,Aaw:null,Aax:null,Init:function(aArg){},Bh:function(aSize
){C.A$.Bh.call(this,aSize);this.Background.G(A.aaQ(this.Background.M,((aSize[0]*
60)/100)|0));this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AQ.G([this.T.M[
2]-1,0,this.T.M[2]+1,aSize[1]]);this.KM.G([this.T.M[2],0,this.Background.M[2],aSize[
1]]);this.A4.G([this.Background.M[2]-1,0,this.Background.M[2]+1,aSize[1]]);this.
T2.G([this.Background.M[2],0,this.Background.M[2]+22,aSize[1]]);this.DU.G([this.
T2.M[2]-1,0,this.T2.M[2]+1,aSize[1]]);this.T3.G([this.T2.M[2],0,this.T2.M[2]+22,
aSize[1]]);this.KK.G([this.T3.M[2]-1,0,this.T3.M[2]+1,aSize[1]]);this.We.G([this.
T3.M[2],0,this.T3.M[2]+22,aSize[1]]);this.AlF.G([this.We.M[2]-1,0,this.We.M[2]+1
,aSize[1]]);this.AeK.G([this.We.M[2],0,aSize[0],aSize[1]]);this.Li.G(this.T2.M);
this.Lj.G(this.T3.M);this.Aaw.G(this.We.M);this.Aax.G(this.AeK.M);},Ah:function(
Ae){C.A$.Ah.call(this,Ae);this.KM.L(this.T.AM);},B8:function(Z){if(!this.AZ)return;
this.Ho=Z;if(!!this.AZ){var Ajq=this.AZ.Ht(Z,6);var AVT=this.AZ.ID(Z,3);var AWx=
this.AZ.ID(Z,2);var AWw=this.AZ.ID(Z,5);var AYd=this.AZ.ID(Z,4);this.U(A._GetAutoObject(
A.abk.K5).AKk(Ajq));this.KM.R(A._GetAutoObject(A.abk.K5).A0P(Ajq));this.T2.L(A._GetAutoObject(
A.abk.Assessment).Pq(AVT));this.T3.L(A._GetAutoObject(A.abk.Assessment).Pq(AWx));
this.We.L(A._GetAutoObject(A.abk.Assessment).Pq(AWw));this.AeK.L(A._GetAutoObject(
A.abk.Assessment).Pq(AYd));this.Li.L(A._GetAutoObject(A.abk.Assessment).VN(AVT));
this.Lj.L(A._GetAutoObject(A.abk.Assessment).VN(AWx));this.Aaw.L(A._GetAutoObject(
A.abk.Assessment).VN(AWw));this.Aax.L(A._GetAutoObject(A.abk.Assessment).VN(AYd)
);this.Li.W(AVT===5);this.Lj.W(AWx===5);this.Aaw.W(AWw===5);this.Aax.W(AYd===5);
this.Al();}},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(
this.T2={I:this},0);A.abh.AH._Init.call(this.T3={I:this},0);A.abh.AH._Init.call(
this.We={I:this},0);A.abh.AH._Init.call(this.AeK={I:this},0);A.abh.Text._Init.call(
this.KM={I:this},0);A.abh.AH._Init.call(this.AQ={I:this},0);A.abh.AH._Init.call(
this.A4={I:this},0);A.abh.AH._Init.call(this.DU={I:this},0);A.abh.AH._Init.call(
this.KK={I:this},0);A.abh.AH._Init.call(this.AlF={I:this},0);A.abh.Text._Init.call(
this.Li={I:this},0);A.abh.Text._Init.call(this.Lj={I:this},0);A.abh.Text._Init.call(
this.Aaw={I:this},0);A.abh.Text._Init.call(this.Aax={I:this},0);this.__proto__=C.
APk;this.T.G(AdJ);this.T2.G(AT4);this.T3.G(AT5);this.We.G(AT6);this.AeK.G(AT7);this.
KM.R(Kd);this.KM.L(A.iF.Text);this.AQ.L(A.iF.A7);this.A4.L(A.iF.A7);this.DU.L(A.
iF.A7);this.KK.L(A.iF.A7);this.AlF.L(A.iF.A7);this.Li.G(AT8);this.Li.R(Qk);this.
Lj.G(AT9);this.Lj.R(Qk);this.Aaw.G(AT_);this.Aaw.R(Qk);this.Aax.G(AT$);this.Aax.
R(Qk);this.J(this.T2,0);this.J(this.T3,0);this.J(this.We,0);this.J(this.AeK,0);this.
J(this.KM,0);this.J(this.AQ,0);this.J(this.A4,0);this.J(this.DU,0);this.J(this.KK
,0);this.J(this.AlF,0);this.J(this.Li,0);this.J(this.Lj,0);this.J(this.Aaw,0);this.
J(this.Aax,0);this.KM.Y(A.zW(A.eV.Au));this.Li.Y(A.zW(A.eV.Au));this.Lj.Y(A.zW(A.
eV.Au));this.Aaw.Y(A.zW(A.eV.Au));this.Aax.Y(A.zW(A.eV.Au));this.Init(aArg);},_Done:
function(){this.__proto__=C.A$;this.T2._Done();this.T3._Done();this.We._Done();this.
AeK._Done();this.KM._Done();this.AQ._Done();this.A4._Done();this.DU._Done();this.
KK._Done();this.AlF._Done();this.Li._Done();this.Lj._Done();this.Aaw._Done();this.
Aax._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.
T2._ReInit();this.T3._ReInit();this.We._ReInit();this.AeK._ReInit();this.KM._ReInit(
);this.AQ._ReInit();this.A4._ReInit();this.DU._ReInit();this.KK._ReInit();this.AlF.
_ReInit();this.Li._ReInit();this.Lj._ReInit();this.Aaw._ReInit();this.Aax._ReInit(
);},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.T2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.T3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.We)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.AeK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KM
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.KK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AlF)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Li)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Lj)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Aaw)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aax
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingListItem"};C.ALl={
FG:null,Xc:null,W_:null,W$:null,Xa:null,Xb:null,_Init:function(aArg){C.Eg._Init.
call(this,aArg);A.abh.Text._Init.call(this.FG={I:this},0);A.abh.Text._Init.call(
this.Xc={I:this},0);A.abh.Text._Init.call(this.W_={I:this},0);A.abh.Text._Init.call(
this.W$={I:this},0);A.abh.Text._Init.call(this.Xa={I:this},0);A.abh.Text._Init.call(
this.Xb={I:this},0);this.__proto__=C.ALl;this.Background.L(A.iF.Text);this.FG.G(
AED);this.FG.A0(0x11);this.FG.R(A.z2(A.abg.Date));this.FG.L(A.iF.Be);this.Xc.G(Avf
);this.Xc.A0(0x12);this.Xc.R(A.z2(A.abg.Bp));this.Xc.L(A.iF.Be);this.W_.G(AUa);this.
W_.A0(0x12);this.W_.R(A.z2(A.abg.APm));this.W_.L(A.iF.Be);this.W$.G(AUb);this.W$.
A0(0x12);this.W$.R(A.z2(A.abg.APn));this.W$.L(A.iF.Be);this.Xa.G(AUc);this.Xa.A0(
0x12);this.Xa.R(A.z2(A.abg.AKd));this.Xa.L(A.iF.Be);this.Xb.G(AUd);this.Xb.A0(0x12
);this.Xb.R(A.z2(A.abg.AJd));this.Xb.L(A.iF.Be);this.J(this.FG,0);this.J(this.Xc
,0);this.J(this.W_,0);this.J(this.W$,0);this.J(this.Xa,0);this.J(this.Xb,0);this.
FG.Y(A.zW(A.eV.Au));this.Xc.Y(A.zW(A.eV.Au));this.W_.Y(A.zW(A.eV.Au));this.W$.Y(
A.zW(A.eV.Au));this.Xa.Y(A.zW(A.eV.Au));this.Xb.Y(A.zW(A.eV.Au));},_Done:function(
){this.__proto__=C.Eg;this.FG._Done();this.Xc._Done();this.W_._Done();this.W$._Done(
);this.Xa._Done();this.Xb._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg.
_ReInit.call(this);this.FG._ReInit();this.Xc._ReInit();this.W_._ReInit();this.W$.
_ReInit();this.Xa._ReInit();this.Xb._ReInit();this.FG.R(A.z2(A.abg.Date));this.Xc.
R(A.z2(A.abg.Bp));this.W_.R(A.z2(A.abg.APm));this.W$.R(A.z2(A.abg.APn));this.Xa.
R(A.z2(A.abg.AKd));this.Xb.R(A.z2(A.abg.AJd));this.FG.Y(A.zW(A.eV.Au));this.Xc.Y(
A.zW(A.eV.Au));this.W_.Y(A.zW(A.eV.Au));this.W$.Y(A.zW(A.eV.Au));this.Xa.Y(A.zW(
A.eV.Au));this.Xb.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.Eg._Mark.call(this
,D);if((B=this.FG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xc)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.W_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W$)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xb
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineRatings"};C.AIi={
AiG:function(Ll){if(!Ll)return;var EZ=A._NewObject(A.Device.Filter,0);var Hk=A._NewObject(
A.Device.Int32FilterCriterion,0);Hk.Initialize(1,0,A._GetAutoObject(A.Device.Helper
).V.Id,true);EZ.CQ(Hk);var Axt=A._NewObject(A.Device.AssessmentFilterCriterion,0
);Axt.Initialize(3,5,0,true);EZ.CQ(Axt);Ll.Bo(EZ);},AAh:function(){if(!A._GetAutoObject(
A.Device.Device).Bt)return false;return A._GetAutoObject(A.Device.Device).Bt.Cf(
)>0;},_Init:function(aArg){C.AbP._Init.call(this,aArg);this.__proto__=C.AIi;this.
AOC(C.APk);this.AOD(C.ALl);this.AOt(C.Sh);this.AtB(A.z2(A.abg.At$));this.Et(A.z2(
A.abg.Ala));},_ReInit:function(){C.AbP._ReInit.call(this);this.AtB(A.z2(A.abg.At$
));this.Et(A.z2(A.abg.Ala));},_className:"Application::AnimalRatings"};C.H9={Cp:
null,Ac:null,T:null,S0:5,U:function(E){C.Iy.U.call(this,E);this.T.R(E);},CZ:function(
E){C.Iy.CZ.call(this,E);this.T.L(E);},Y:function(E){if(this.Cp===E)return;this.Cp=
E;this.T.Y(this.Cp);},ArR:function(H){var B;var MO=(A.Core.Ac.isPrototypeOf(H)?H:
null);if(!MO)return;if(((B=MO.Dh(0x1))[2]-B[0])>((B=MO.M)[2]-B[0]))this.Y(A.zW(A.
eV.K7));},JO:function(E){if(this.S0===E)return;this.S0=E;this.Ac.G([].concat(E,this.
Ac.M.slice(1,4)));},Axo:function(H){A.ow([this,this.ArR],this);},_Init:function(
aArg){C.Iy._Init.call(this,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);A.abh.
Text._Init.call(this.T={I:this},0);this.__proto__=C.H9;this.Ac.AW(0x3F);this.Ac.
G(AEE);this.Ac.A4c(5);this.Ac.Lf(3);this.T.AW(0x34);this.T.G(Yo);this.T.I0(true);
this.T.A0(0x11);this.T.L(A.iF.Text);this.T.Aj(true);this.J(this.Ac,0);this.J(this.
T,0);this.Ac.Eu=[this,this.Axo];this.T.Y(A.zW(A.eV.OK));},_Done:function(){this.
__proto__=C.Iy;this.Ac._Done();this.T._Done();C.Iy._Done.call(this);},_ReInit:function(
){C.Iy._ReInit.call(this);this.Ac._ReInit();this.T._ReInit();},_Mark:function(D){
var B;C.Iy._Mark.call(this,D);if((B=this.Cp)&&(B._cycle!=D))B._Mark(B._cycle=D);
if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoItem"};C.QI={AdY:0,Ah:function(Ae){C.E$.
Ah.call(this,Ae);this.U(A.z2(A.abg.Sg));if(this.AdY>=0)this.JP((this.AdY.toFixed(
)+Cw)+A.z2(A.abg.Ky));else this.JP(A.z2(A.abg.Unknown));},B8:function(H){C.E$.B8.
call(this,H);if(!A._GetAutoObject(A.Device.Helper).V.DateOfBirth)this.AdY=-1;else
this.AdY=A._GetAutoObject(A.Device.Helper).V.Sg();this.Al();},_Init:function(aArg
){C.E$._Init.call(this,aArg);this.__proto__=C.QI;},_className:"Application::AnimalInfoItemAge"
};C.QM={AYN:0,Ah:function(Ae){C.E$.Ah.call(this,Ae);this.U(A.z2(A.abg.AfZ));if(this.
AYN>0)this.JP((A._GetAutoObject(A.Device.Converter).AlV(this.AYN)+Cw)+A._GetAutoObject(
A.abk.Dy).Abh());else this.JP(A.z2(A.abg.Unknown));},B8:function(H){C.E$.B8.call(
this,H);this.AYN=A._GetAutoObject(A.Device.Helper).V.LastBodyWeight;this.Al();},
_Init:function(aArg){C.E$._Init.call(this,aArg);this.__proto__=C.QM;},_className:
"Application::AnimalInfoItemWeight"};C.Si={Ac:null,D1:null,Ee:null,E5:null,Qc:null
,E4:null,Qd:null,Ag7:0,Ot:0,C6:function(){this.Al();},Ah:function(Ae){C.Je.Ah.call(
this,Ae);this.U(A.z2(A.abg.Ba4));this.E5.R(this.Ag7.toFixed());this.E4.R(this.Ot.
toFixed());if(!!this.Ag7||!!this.Ot)this.Qd.R(AUe+(this.Ag7+this.Ot).toFixed());
else this.Qd.R(A.z2(A.abg.A19));},B8:function(H){C.Je.B8.call(this,H);var AiM;AiM=
A._GetAutoObject(A.Device.Helper).BbU(A._GetAutoObject(A.Device.Device).Bt,9,A._GetAutoObject(
A.Device.Helper).V.Id,0,0);this.Ag7=AiM.Get(2);this.Ot=AiM.Get(1);this.Al();},CZ:
function(E){C.Je.CZ.call(this,E);this.Qc.L(E);this.Qd.L(E);},ApT:function(H){if(
!!this.Ag7||!!this.Ot){this.E5.W(true);this.Qc.W(true);this.E4.W(true);}else{this.
E5.W(false);this.Qc.W(false);this.E4.W(false);}this.D1.G(this.E5.M);this.D1.W(this.
E5.Fe());this.Ee.G(this.E4.M);this.Ee.W(this.E4.Fe());},ArR:function(H){var B;var
MO=(A.Core.Ac.isPrototypeOf(H)?H:null);if(!MO)return;if(((B=MO.Dh(0x1))[2]-B[0])>((
B=MO.M)[2]-B[0])){this.E4.Y(A.zW(A.eV.Az));this.Qc.Y(A.zW(A.eV.Az));this.E5.Y(A.
zW(A.eV.Az));this.Qd.Y(A.zW(A.eV.Az));}},Axo:function(H){A.ow([this,this.ArR],this
);},_Init:function(aArg){C.Je._Init.call(this,aArg);A.Core.Ac._Init.call(this.Ac={
I:this},0);A.abh.AH._Init.call(this.D1={I:this},0);A.abh.AH._Init.call(this.Ee={
I:this},0);A.abh.Text._Init.call(this.E5={I:this},0);A.abh.Text._Init.call(this.
Qc={I:this},0);A.abh.Text._Init.call(this.E4={I:this},0);A.abh.Text._Init.call(this.
Qd={I:this},0);this.__proto__=C.Si;this.Ac.G(Avi);this.Ac.BgL(0);this.Ac.Lf(3);this.
D1.G(AUf);this.D1.L(A.iF.HB);this.Ee.G(Avg);this.Ee.L(A.iF.F0);this.E5.AW(0x34);
this.E5.G(Yo);this.E5.HV(2);this.E5.I0(true);this.E5.R(Ym);this.E5.L(A.iF.Text);
this.E5.Aj(true);this.Qc.AW(0x34);this.Qc.G(Yo);this.Qc.I0(true);this.Qc.R(AEn);
this.Qc.L(A.iF.Text);this.Qc.Aj(true);this.E4.AW(0x34);this.E4.G(Yo);this.E4.HV(
2);this.E4.I0(true);this.E4.R(Ym);this.E4.L(A.iF.Be);this.E4.Aj(true);this.Qd.AW(
0x34);this.Qd.G(Yo);this.Qd.I0(true);this.Qd.R(Kd);this.Qd.L(A.iF.Text);this.Qd.
Aj(true);this.J(this.Ac,0);this.J(this.D1,0);this.J(this.Ee,0);this.J(this.E5,0);
this.J(this.Qc,0);this.J(this.E4,0);this.J(this.Qd,0);this.Ac.Eu=[this,this.Axo];
this.E5.Rs([this,this.ApT]);this.E5.Y(A.zW(A.eV.Au));this.Qc.Y(A.zW(A.eV.Au));this.
E4.Rs([this,this.ApT]);this.E4.Y(A.zW(A.eV.Au));this.Qd.Y(A.zW(A.eV.Au));},_Done:
function(){this.__proto__=C.Je;this.Ac._Done();this.D1._Done();this.Ee._Done();this.
E5._Done();this.Qc._Done();this.E4._Done();this.Qd._Done();C.Je._Done.call(this);
},_ReInit:function(){C.Je._ReInit.call(this);this.Ac._ReInit();this.D1._ReInit();
this.Ee._ReInit();this.E5._ReInit();this.Qc._ReInit();this.E4._ReInit();this.Qd.
_ReInit();this.C6();},_Mark:function(D){var B;C.Je._Mark.call(this,D);if((B=this.
Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E5)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Qc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Qd)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemTemperatureRatings"
};C.PA={Fl:0,HH:0,AWZ:false,Ah:function(Ae){C.E$.Ah.call(this,Ae);this.U(AEF+A.z2(
A.abg.AQJ));if(this.AWZ){this.JP((A._GetAutoObject(A.Device.Converter).Np(this.Fl
,2,true)+Cw)+A._GetAutoObject(A.abk.Dy).YD());this.Background.L(A._GetAutoObject(
A.abk.Dy).Aww(this.Fl,this.HH));this.CZ(A._GetAutoObject(A.abk.Dy).Awy(this.Fl,this.
HH));}else{this.JP(A.z2(A.abg.Unknown));this.Background.L(A.iF.CE);this.CZ(A.iF.
Text);}},B8:function(H){C.E$.B8.call(this,H);var KU=A._GetAutoObject(A.Device.Helper
).L7(A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing,A._GetAutoObject(
A.Device.Helper).V.TimestampLastWeighing);if(!!KU){this.AWZ=true;this.Fl=A._GetAutoObject(
A.abk.Dy).Ajm(KU,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight);}else{this.AWZ=false;this.Fl=0;}this.HH=A._GetAutoObject(
A.Device.Helper).V.AnimalType;this.Al();},_Init:function(aArg){C.E$._Init.call(this
,aArg);this.__proto__=C.PA;},_className:"Application::AnimalInfoItemAvgWeightGain"
};C.Sh={Ac:null,Fn:null,D1:null,Ee:null,MD:null,E5:null,E4:null,Qb:null,YF:0,Ag7:
0,Ot:0,C6:function(){this.Al();},Ah:function(Ae){C.Je.Ah.call(this,Ae);this.U(A.
z2(A.abg.At$));this.MD.R(this.YF.toFixed());this.E5.R(this.Ag7.toFixed());this.E4.
R(this.Ot.toFixed());},B8:function(H){C.Je.B8.call(this,H);var AiM;AiM=A._GetAutoObject(
A.Device.Helper).A0U(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.
Helper).V.Id,0,0);this.YF=AiM.Get(3);this.Ag7=AiM.Get(2);this.Ot=AiM.Get(1);this.
Al();},ApT:function(H){if((!!this.YF||!!this.Ag7)||!!this.Ot){this.MD.W(true);this.
E5.W(true);this.E4.W(true);this.Qb.W(false);}else{this.MD.W(false);this.E5.W(false
);this.E4.W(false);this.Qb.W(true);}this.Fn.G(this.MD.M);this.Fn.W(this.MD.Fe());
this.D1.G(this.E5.M);this.D1.W(this.E5.Fe());this.Ee.G(this.E4.M);this.Ee.W(this.
E4.Fe());},ArR:function(H){var B;var MO=(A.Core.Ac.isPrototypeOf(H)?H:null);if(!
MO)return;if(((B=MO.Dh(0x1))[2]-B[0])>((B=MO.M)[2]-B[0])){this.E4.Y(A.zW(A.eV.Az
));this.E5.Y(A.zW(A.eV.Az));this.MD.Y(A.zW(A.eV.Az));}},Axo:function(H){A.ow([this
,this.ArR],this);},_Init:function(aArg){C.Je._Init.call(this,aArg);A.Core.Ac._Init.
call(this.Ac={I:this},0);A.abh.AH._Init.call(this.Fn={I:this},0);A.abh.AH._Init.
call(this.D1={I:this},0);A.abh.AH._Init.call(this.Ee={I:this},0);A.abh.Text._Init.
call(this.MD={I:this},0);A.abh.Text._Init.call(this.E5={I:this},0);A.abh.Text._Init.
call(this.E4={I:this},0);A.abh.Text._Init.call(this.Qb={I:this},0);this.__proto__=
C.Sh;this.Ac.AW(0x3F);this.Ac.G(Avi);this.Ac.A4c(5);this.Ac.Lf(3);this.Fn.G(AUg);
this.Fn.L(A.iF.E1);this.D1.G(AEG);this.D1.L(A.iF.HB);this.Ee.G(AUh);this.Ee.L(A.
iF.F0);this.MD.AW(0x3C);this.MD.G(Yo);this.MD.HV(2);this.MD.I0(true);this.MD.R(Ym
);this.MD.L(A.iF.Text);this.MD.Aj(true);this.E5.AW(0x3C);this.E5.G(Yo);this.E5.HV(
2);this.E5.I0(true);this.E5.R(Ym);this.E5.L(A.iF.Text);this.E5.Aj(true);this.E4.
AW(0x3C);this.E4.G(Yo);this.E4.HV(2);this.E4.I0(true);this.E4.R(Ym);this.E4.L(A.
iF.Be);this.E4.Aj(true);this.Qb.AW(0x34);this.Qb.G(Yo);this.Qb.I0(true);this.Qb.
A0(0x11);this.Qb.R(A.z2(A.abg.A19));this.Qb.L(A.iF.Text);this.Qb.Aj(true);this.Qb.
W(false);this.J(this.Ac,0);this.J(this.Fn,0);this.J(this.D1,0);this.J(this.Ee,0);
this.J(this.MD,0);this.J(this.E5,0);this.J(this.E4,0);this.J(this.Qb,0);this.Ac.
Eu=[this,this.Axo];this.MD.Rs([this,this.ApT]);this.MD.Y(A.zW(A.eV.Au));this.E5.
Rs([this,this.ApT]);this.E5.Y(A.zW(A.eV.Au));this.E4.Rs([this,this.ApT]);this.E4.
Y(A.zW(A.eV.Au));this.Qb.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.Je;
this.Ac._Done();this.Fn._Done();this.D1._Done();this.Ee._Done();this.MD._Done();
this.E5._Done();this.E4._Done();this.Qb._Done();C.Je._Done.call(this);},_ReInit:
function(){C.Je._ReInit.call(this);this.Ac._ReInit();this.Fn._ReInit();this.D1._ReInit(
);this.Ee._ReInit();this.MD._ReInit();this.E5._ReInit();this.E4._ReInit();this.Qb.
_ReInit();this.C6();},_Mark:function(D){var B;C.Je._Mark.call(this,D);if((B=this.
Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Fn)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.MD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.E5)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.E4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Qb)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoItemRatings"};C.AH3={
_Init:function(aArg){C.Ag9._Init.call(this,aArg);this.__proto__=C.AH3;this.N.Cd(
A.z2(A.abg.A1Z));this.AYZ=1;this.Qf.C5(A.zW(A.eV.Az));},_ReInit:function(){C.Ag9.
_ReInit.call(this);this.N.Cd(A.z2(A.abg.A1Z));this.Qf.C5(A.zW(A.eV.Az));},_className:
"Application::AnimalActionActionsScreen"};C.H_={_Init:function(aArg){C.Ag9._Init.
call(this,aArg);this.__proto__=C.H_;this.N.Cd(A.z2(A.abg.AZF));this.Nn.R(A.z2(A.
abg.ArS));},_ReInit:function(){C.Ag9._ReInit.call(this);this.N.Cd(A.z2(A.abg.AZF
));this.Nn.R(A.z2(A.abg.ArS));},_className:"Application::AnimalListActionsScreen"
};C.AME={NZ:null,Ik:null,Hw:null,Ii:null,Gc:null,AjS:function(H){A.ow([this,this.
BsY],this);},BsY:function(H){A._GetAutoObject(C.A1).BY(3);},_Init:function(aArg){
C.CJ._Init.call(this,aArg);C.NZ._Init.call(this.NZ={I:this},0);C.B$._Init.call(this.
Ik={I:this},0);C.AlH._Init.call(this.Hw={I:this},0);C.ACM._Init.call(this.Ii={I:
this},0);C.AfM._Init.call(this.Gc={I:this},0);this.__proto__=C.AME;var B;this.Lg(
A.z2(A.abg.A4_));this.Ik.G(Ai3);this.Ik.Aj(true);this.Ik.U(A.z2(A.abg.Language));
this.Ik.A3X(100);this.Hw.G(Af4);this.Hw.Aj(true);this.Hw.U(A.z2(A.abg.Date));this.
Hw.Bk(true);this.Ii.G(Ai4);this.Ii.Aj(true);this.Ii.U(A.z2(A.abg.Bp));this.Gc.G(
Af3);this.Gc.Aj(true);this.Gc.W(true);this.Gc.U(A.z2(A.abg.ACk));this.Gc.Bk(true
);this.Gc.AtP(false);this.Gc.A35(true);this.Lh(this.Ac,-1);this.Lh(this.AE,-1);this.
J(this.Ik,0);this.J(this.Hw,0);this.J(this.Ii,0);this.J(this.Gc,0);this.Ik.AoZ(A.
zW(A.eV.LO));this.Ik.Ao0(A.zW(A.eV.LO));this.Ik.AD([B=this.NZ,B.CA,B.CC]);this.Ik.
Dk(this.NZ);this.Hw.Afr([B=this.Hw,B.GC]);this.Hw.He([this,this.Es,this.HW]);this.
Hw.Ail(A.zW(A.abi.Edit));this.Hw.Ac2([B=A._GetAutoObject(A.Device.Helper),B.Tq,B.
Tr]);this.Ii.Afr([B=this.Ii,B.GC]);this.Ii.He([this,this.Es,this.HW]);this.Ii.Ail(
A.zW(A.abi.Edit));this.Ii.Ac2([B=A._GetAutoObject(A.Device.Helper),B.Tq,B.Tr]);this.
Gc.Afr([B=this.Gc,B.GC]);this.Gc.He([this,this.Es,this.HW]);this.Gc.Ail(A.zW(A.abi.
Edit));this.Gc.AD([B=A._GetAutoObject(A.Device.Device),B.AN7,B.AUU]);},_Done:function(
){this.__proto__=C.CJ;this.NZ._Done();this.Ik._Done();this.Hw._Done();this.Ii._Done(
);this.Gc._Done();C.CJ._Done.call(this);},_ReInit:function(){C.CJ._ReInit.call(this
);this.NZ._ReInit();this.Ik._ReInit();this.Hw._ReInit();this.Ii._ReInit();this.Gc.
_ReInit();this.Lg(A.z2(A.abg.A4_));this.Ik.U(A.z2(A.abg.Language));this.Hw.U(A.z2(
A.abg.Date));this.Ii.U(A.z2(A.abg.Bp));this.Gc.U(A.z2(A.abg.ACk));},_Mark:function(
D){var B;C.CJ._Mark.call(this,D);if((B=this.NZ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Hw)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ii)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InitializationSettingsScreen"};C.AbP={Bg:
null,E2:null,AkQ:null,Aky:null,Ub:null,A0$:A.jm,J7:A.jm,AM4:null,AM5:null,AzH:null
,CF:function(H){var B;C.DP.CF.call(this,H);A.za([this,this.AXs],[B=A._GetAutoObject(
A.Device.Helper).V,B.P1,B.OnSetId],0);this.AXs(this);},Fc:function(H){var B;A.zn([
this,this.AXs],[B=A._GetAutoObject(A.Device.Helper).V,B.P1,B.OnSetId],0);C.DP.Fc.
call(this,H);},XG:function(E){C.DP.XG.call(this,E);if(A.z$(this.AV,E))return;if(
!!this.Bg)this.Bg.XG(E);},AOC:function(E){if(this.AM4===E)return;this.AM4=E;if(!
!this.Bg)this.Bg.Ne(E);},AOD:function(E){if(this.AM5===E)return;this.AM5=E;this.
Bia(this);},AOt:function(E){if(this.AzH===E)return;this.AzH=E;A.ow([this,this.Bh$
],this);},AtB:function(E){if(this.A0$===E)return;this.A0$=E;this.Ub.R(E);},Et:function(
E){if(this.J7===E)return;this.J7=E;if(!!this.Bg)this.Bg.Et(E);},AiG:function(Ll){
A.aa8("%s",AUi);},AAh:function(){A.aa8("%s",Ai1);return false;},Auj:function(H){
if(!!this.Bg)this.HA(this.Bg);this.Bg=A._NewObject(C.Fu,0);this.Bg.G(Al_);this.Bg.
XF(A._GetAutoObject(A.Device.Device).Bt);this.Bg.Et(this.J7);this.Bg.Ne(this.AM4
);this.Bg.XG(this.AV);this.J(this.Bg,0);this.A8(this.Bg);},Bia:function(H){var B;
if(!!this.E2)this.HA(this.E2);this.E2=(C.Eg.isPrototypeOf(B=A._NewObject(this.AM5
,0))?B:null);this.E2.G(Ke);this.J(this.E2,0);},Bh$:function(H){var B;if(!!this.AkQ
)this.HA(this.AkQ);if(!!this.AzH&&this.AAh()){this.AkQ=(C.Iy.isPrototypeOf(B=A._NewObject(
this.AzH,0))?B:null);this.AkQ.G(BI);this.AkQ.Bk(false);this.J(this.AkQ,0);this.Ub.
W(false);}else this.Ub.W(true);},AXs:function(H){this.AiG(A._GetAutoObject(A.Device.
Device).Bt);this.Auj(this);},_Init:function(aArg){C.DP._Init.call(this,aArg);A.abh.
AH._Init.call(this.Aky={I:this},0);C.CG._Init.call(this.Ub={I:this},0);this.__proto__=
C.AbP;this.Aky.G(BI);this.Aky.L(A.iF.CE);this.Ub.G(ADU);this.Ub.A0(0x11);this.Ub.
L(A.iF.Text);this.J(this.Aky,0);this.J(this.Ub,0);this.Ub.Y(A.zW(A.eV.OK));this.
Ub.By(A.zW(A.eV.K7));},_Done:function(){this.__proto__=C.DP;this.Aky._Done();this.
Ub._Done();C.DP._Done.call(this);},_ReInit:function(){C.DP._ReInit.call(this);this.
Aky._ReInit();this.Ub._ReInit();},_Mark:function(D){var B;C.DP._Mark.call(this,D
);if((B=this.Bg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.E2)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.AkQ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Aky)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ub)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::AnimalInfoTable"};C.Jf={AnimalListContentToString:null
,Init:function(aArg){var B;A.za([this,this.A7Q],[B=A._GetAutoObject(A.Device.Device
),B.AAN,B.AEP],0);A.ow([this,this.A7Q],this);},Dx:function(){return 4;},GS:function(
aIndex){return this.AnimalListContentToString.Cb(this.Dd(aIndex));},AD:function(
E){C.Dm.AD.call(this,E);A._GetAutoObject(A.Device.Device).Z6(E);},A7Q:function(H
){this.Q=A._GetAutoObject(A.Device.Device).WeightRecordingMode;A.aat([this,this.
CA,this.CC],0);},_Init:function(aArg){C.Dm._Init.call(this,aArg);A.Device.AnimalListContentToString.
_Init.call(this.AnimalListContentToString={I:this},0);this.__proto__=C.Jf;this.Cj.
Set(0,0);this.Cj.Set(1,1);this.Cj.Set(2,2);this.Cj.Set(3,3);this.Init(aArg);},_Done:
function(){this.__proto__=C.Dm;this.AnimalListContentToString._Done();C.Dm._Done.
call(this);},_ReInit:function(){C.Dm._ReInit.call(this);this.AnimalListContentToString.
_ReInit();},_Mark:function(D){var B;C.Dm._Mark.call(this,D);if((B=this.AnimalListContentToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalListContent"};C.
AM9={Ik:null,Xm:null,Xt:null,Xs:null,Xu:null,Xn:null,Xq:null,Xp:null,NZ:null,_Init:
function(aArg){C.CJ._Init.call(this,aArg);C.B$._Init.call(this.Ik={I:this},0);C.
Rl._Init.call(this.Xm={I:this},0);C.Rl._Init.call(this.Xt={I:this},0);C.Rl._Init.
call(this.Xs={I:this},0);C.Rl._Init.call(this.Xu={I:this},0);C.Rl._Init.call(this.
Xn={I:this},0);C.Rl._Init.call(this.Xq={I:this},0);C.Rl._Init.call(this.Xp={I:this
},0);C.NZ._Init.call(this.NZ={I:this},0);this.__proto__=C.AM9;var B;this.Lg(A.z2(
A.abg.Settings));this.Ik.G(Ai3);this.Ik.Aj(true);this.Ik.U(A.z2(A.abg.Language));
this.Ik.A3X(100);this.Xm.G(Aqe);this.Xm.Aj(true);this.Xm.U(A.z2(A.abg.AyU));this.
Xm.Ru(16);this.Xt.G(Aqf);this.Xt.Aj(true);this.Xt.U(A.z2(A.abg.ADi));this.Xt.Ru(
22);this.Xs.G(Aqg);this.Xs.Aj(true);this.Xs.U(A.z2(A.abg.Temperature));this.Xs.Ru(
17);this.Xu.G(Avj);this.Xu.Aj(true);this.Xu.U(A.z2(A.abg.AnU));this.Xu.Ru(45);this.
Xn.G(Al$);this.Xn.Aj(true);this.Xn.U(A.z2(A.abg.Device));this.Xn.Ru(18);this.Xq.
G(Al$);this.Xq.Aj(true);this.Xq.U(A.z2(A.abg.ACu));this.Xq.Ru(19);this.Xp.G(Ap$);
this.Xp.Aj(true);this.Xp.U(A.z2(A.abg.Aza));this.Xp.Ru(87);this.J(this.Ik,0);this.
J(this.Xm,0);this.J(this.Xt,0);this.J(this.Xs,0);this.J(this.Xu,0);this.J(this.Xn
,0);this.J(this.Xq,0);this.J(this.Xp,0);this.Ik.AoZ(A.zW(A.eV.LO));this.Ik.Ao0(A.
zW(A.eV.LO));this.Ik.AD([B=this.NZ,B.CA,B.CC]);this.Ik.Dk(this.NZ);this.Xm.AV=[B=
this.Xm,B.Rw];this.Xt.AV=[B=this.Xt,B.Rw];this.Xs.AV=[B=this.Xs,B.Rw];this.Xu.AV=[
B=this.Xu,B.Rw];this.Xn.AV=[B=this.Xn,B.Rw];this.Xq.AV=[B=this.Xq,B.Rw];this.Xp.
AV=[B=this.Xp,B.Rw];},_Done:function(){this.__proto__=C.CJ;this.Ik._Done();this.
Xm._Done();this.Xt._Done();this.Xs._Done();this.Xu._Done();this.Xn._Done();this.
Xq._Done();this.Xp._Done();this.NZ._Done();C.CJ._Done.call(this);},_ReInit:function(
){C.CJ._ReInit.call(this);this.Ik._ReInit();this.Xm._ReInit();this.Xt._ReInit();
this.Xs._ReInit();this.Xu._ReInit();this.Xn._ReInit();this.Xq._ReInit();this.Xp.
_ReInit();this.NZ._ReInit();this.Lg(A.z2(A.abg.Settings));this.Ik.U(A.z2(A.abg.Language
));this.Xm.U(A.z2(A.abg.AyU));this.Xt.U(A.z2(A.abg.ADi));this.Xs.U(A.z2(A.abg.Temperature
));this.Xu.U(A.z2(A.abg.AnU));this.Xn.U(A.z2(A.abg.Device));this.Xq.U(A.z2(A.abg.
ACu));this.Xp.U(A.z2(A.abg.Aza));},_Mark:function(D){var B;C.CJ._Mark.call(this,
D);if((B=this.Ik)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xm)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Xt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xs)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Xu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xn
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Xp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.NZ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::MainSettingsScreen"};C.AId={EL:null,Init:function(
aArg){this.EL.Afy(A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(A.Device.
Helper).DR()).Format(A.z2(A.abg.AeZ)));},APr:function(){this.EL.AcU(this.AKE());
this.YH=!this.EL.EC.AN;},AgO:function(H){this.EL.Afy(A._NewObject(A.Core.Bp,0).Initialize(
A._GetAutoObject(A.Device.Helper).DR()).Format(A.z2(A.abg.AeZ)));this.APr();if(A.
_GetAutoObject(A.Device.Helper).V.TimestampLastTemperature>0)this.Et(A.z2(A.abg.
A17));else this.Et(A.z2(A.abg.AoB));this.Al();},AKE:function(){var Bx=A._NewObject(
C.AnO,0);var Po=A._GetAutoObject(A.Device.Helper).AJU(A._GetAutoObject(A.Device.
Helper).DR());var Df=A._GetAutoObject(A.Device.Helper).AnL(Po-(86400*this.LX));Bx.
Alk(AUj);Bx.P2([].concat(0,Bx.FB.slice(1,4)));Bx.P2(A.aaQ(Bx.FB,(Po-Df)|0));Bx.P2(
A.aaS(Bx.FB,3400));Bx.P2([].concat(Bx.FB.slice(0,3),4200));var FW=A._GetAutoObject(
A.Device.Device).Bt.Cf();Bx.AtG(FW);Bx.Ww();if(FW>0){var P=0;while(P<FW){var Anl=
A._GetAutoObject(A.Device.Device).Bt.Cq(P,7);var Anm=A._GetAutoObject(A.Device.Device
).Bt.Ht(P,6)-Df;if(Anl>0)Bx.AnI(Anm,Anl);P=P+1;}}return Bx;},_Init:function(aArg
){C.Kv._Init.call(this,aArg);C.Aoa._Init.call(this.EL={I:this},0);this.__proto__=
C.AId;this.EL.G(AUk);this.EL.U(A.z2(A.abg.Temperature));this.EL.ABo(C.AC5);this.
J(this.EL,-2);this.Init(aArg);},_Done:function(){this.__proto__=C.Kv;this.EL._Done(
);C.Kv._Done.call(this);},_ReInit:function(){C.Kv._ReInit.call(this);this.EL._ReInit(
);},_Mark:function(D){var B;C.Kv._Mark.call(this,D);if((B=this.EL)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoTemperatureGraph"};C.AIe={AaH:null
,Pb:null,Ahv:null,YH:false,Init:function(aArg){this.AaH.Afy(A._NewObject(A.Core.
Bp,0).Initialize(A._GetAutoObject(A.Device.Helper).DR()).Format(A.z2(A.abg.AeZ))
);},Ah:function(Ae){C.DP.Ah.call(this,Ae);this.Ahv.W(this.YH);},CF:function(H){var
B;C.DP.CF.call(this,H);A.za([this,this.AgO],[B=A._GetAutoObject(A.Device.Helper)
,B.Tq,B.Tr],0);A.y_([this,this.AgO],A._GetAutoObject(A.Device.Device).Bt,0);A.za([
this,this.Aj8],[B=A._GetAutoObject(A.Device.Helper).V,B.P1,B.OnSetId],0);A.ow([this
,this.Aj8],this);},Fc:function(H){var B;A.zn([this,this.AgO],[B=A._GetAutoObject(
A.Device.Helper),B.Tq,B.Tr],0);A.zl([this,this.AgO],A._GetAutoObject(A.Device.Device
).Bt,0);A.zn([this,this.Aj8],[B=A._GetAutoObject(A.Device.Helper).V,B.P1,B.OnSetId
],0);C.DP.Fc.call(this,H);},Aj8:function(H){var EZ=A._NewObject(A.Device.Filter,
0);var Hk=A._NewObject(A.Device.Int32FilterCriterion,0);Hk.Initialize(1,0,A._GetAutoObject(
A.Device.Helper).V.Id,true);EZ.CQ(Hk);A._GetAutoObject(A.Device.Device).Bt.Bo(EZ
);},AgO:function(H){this.AaH.Afy(A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(
A.Device.Helper).DR()).Format(A.z2(A.abg.AeZ)));this.Bhx();this.Al();},Bhx:function(
){var B;var FW=A._GetAutoObject(A.Device.Device).Bt.Cf();var Ku=A._NewObject(C.AnO
,0);var TQ=A._NewObject(C.AnO,0);var Po=A._GetAutoObject(A.Device.Helper).AJU(A.
_GetAutoObject(A.Device.Helper).DR());var Df=A._GetAutoObject(A.Device.Helper).AnL(
A._GetAutoObject(A.Device.Helper).V.DateOfBirth);Ku.P2([].concat(0,Ku.FB.slice(1
,4)));Ku.P2(A.aaQ(Ku.FB,(Po-Df)|0));Ku.P2(A.aaS(Ku.FB,0));Ku.P2([].concat(Ku.FB.
slice(0,3),150000));Ku.Alk(AUl);TQ.P2([].concat(0,TQ.FB.slice(1,4)));TQ.P2(A.aaQ(
TQ.FB,(Po-Df)|0));TQ.P2(A.aaS(TQ.FB,0));TQ.P2([].concat(TQ.FB.slice(0,3),1500));
TQ.Alk(AUm);Ku.AtG(FW);Ku.Ww();TQ.AtG(FW);TQ.Ww();if(FW>0){var P=0;var VS=0;var AwT=
0;var AGa=0;var AWC=0;var A8v=true;while(P<FW){var Aj2=A._GetAutoObject(A.Device.
Device).Bt.Cq(P,8);var YV=A._GetAutoObject(A.Device.Device).Bt.Ht(P,6)-Df;if(Aj2>
0){Ku.AnI(YV,Aj2);if(!AWC){AWC=YV;AGa=Aj2;}if(AwT>0){var KU=A._GetAutoObject(A.Device.
Helper).L7(AwT,YV);if(!!KU){var Fl=A._GetAutoObject(A.abk.Dy).Ajm(KU,VS,Aj2);if(
A8v){TQ.AnI(AwT,Fl);A8v=false;}TQ.AnI(YV,Fl);}}VS=Aj2;AwT=YV;}P=P+1;}var AbE=A.z2(
A.abg.A$0);var Fl=A._GetAutoObject(A.Device.Helper).BbW(AWC,AwT,AGa,VS);AbE=A._GetAutoObject(
A.Device.Helper).Nk(AbE,Qj,Fl.toFixed());AbE=A._GetAutoObject(A.Device.Helper).Nk(
AbE,AuX,A._GetAutoObject(A.abk.Dy).YD());this.Pb.Ib.R(AbE);}this.YH=!Ku.AN;if(this.
YH)this.Pb.Ib.R(A.jm);(C.Pb.isPrototypeOf(B=this.Pb.EL)?B:null).Alh([B=A._GetAutoObject(
A.Device.Helper).V,B.O1,B.DS]);this.AaH.AcU(Ku);this.Pb.AcU(TQ);},_Init:function(
aArg){C.DP._Init.call(this,aArg);C.Aoa._Init.call(this.AaH={I:this},0);C.Aoa._Init.
call(this.Pb={I:this},0);C.AiE._Init.call(this.Ahv={I:this},0);this.__proto__=C.
AIe;this.AaH.G(AUn);this.AaH.U(A.z2(A.abg.AfZ));this.AaH.ABo(C.AIK);this.Pb.G(AUo
);this.Pb.U(A.z2(A.abg.AQJ));this.Pb.ABo(C.Pb);this.Ahv.G(Vt);this.Ahv.R(A.z2(A.
abg.AoC));this.J(this.AaH,0);this.J(this.Pb,0);this.J(this.Ahv,0);this.Init(aArg
);},_Done:function(){this.__proto__=C.DP;this.AaH._Done();this.Pb._Done();this.Ahv.
_Done();C.DP._Done.call(this);},_ReInit:function(){C.DP._ReInit.call(this);this.
AaH._ReInit();this.Pb._ReInit();this.Ahv._ReInit();},_Mark:function(D){var B;C.DP.
_Mark.call(this,D);if((B=this.AaH)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Pb).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahv)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoWeightsGraph"};C.AIb={Ase:null,Asd:null,Auc:null,ArN:null
,T1:null,Zt:null,Zs:null,Aao:null,Adg:null,Init:function(aArg){this.T1.Afy(A._NewObject(
A.Core.Bp,0).Initialize(A._GetAutoObject(A.Device.Helper).DR()).Format(A.z2(A.abg.
AeZ)));},AYF:function(H){this.T1.Aad(this.ArN);this.Zt.Aad(this.Ase);this.Zs.Aad(
this.Asd);this.Aao.Aad(this.Auc);},Aua:function(){var FW=A._GetAutoObject(A.Device.
Device).Bt.Cf();this.ArN=A._NewObject(C.Ahh,0);this.Ase=A._NewObject(C.Ahh,0);this.
Asd=A._NewObject(C.Ahh,0);this.Auc=A._NewObject(C.Ahh,0);if(FW>0){var P=FW-1;while(
P>=0){var DN=A._GetAutoObject(A.Device.Device).Bt.Ht(P,6);this.Aqv(this.ArN,P,3,
DN);this.Aqv(this.Ase,P,2,DN);this.Aqv(this.Asd,P,5,DN);this.Aqv(this.Auc,P,4,DN
);P=P-1;}}this.YH=!(((this.ArN.AN+this.Asd.AN)+this.Ase.AN)+this.Auc.AN);A.ow([this
,this.AYF],this);},Aqv:function(AVB,Z,AVA,Pi){var Aji=A._GetAutoObject(A.Device.
Device).Bt.ID(Z,AVA);if(!!Aji)AVB.NP(Aji,Pi);},Aac:function(E){if(this.LX===E)return;
C.Kv.Aac.call(this,E);if(!!this.T1)this.T1.Aac(E);if(!!this.Zt)this.Zt.Aac(E);if(
!!this.Zs)this.Zs.Aac(E);if(!!this.Aao)this.Aao.Aac(E);this.Adg.Aac(E);},AgO:function(
H){this.T1.Afy(A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(A.Device.Helper
).DR()).Format(A.z2(A.abg.AeZ)));this.Aua();if(A._GetAutoObject(A.Device.Helper).
V.TimestampLastAssessment>0)this.Et(A.z2(A.abg.Bds));else this.Et(A.z2(A.abg.Ala
));this.Al();},_Init:function(aArg){C.Kv._Init.call(this,aArg);C.AfE._Init.call(
this.T1={I:this},0);C.AfE._Init.call(this.Zt={I:this},0);C.AfE._Init.call(this.Zs={
I:this},0);C.AfE._Init.call(this.Aao={I:this},0);C.APo._Init.call(this.Adg={I:this
},0);this.__proto__=C.AIb;this.Et(A.z2(A.abg.Ala));this.T1.G(BjJ);this.T1.R(A.z2(
A.abg.ACn));this.Zt.G(BjK);this.Zt.R(A.z2(A.abg.Feed));this.Zs.G(BjL);this.Zs.R(
A.z2(A.abg.ACp));this.Aao.G(BjM);this.Aao.R(A.z2(A.abg.ACq));this.Adg.G(BjN);this.
J(this.T1,-1);this.J(this.Zt,-1);this.J(this.Zs,-1);this.J(this.Aao,-1);this.J(this.
Adg,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Kv;this.T1._Done();this.
Zt._Done();this.Zs._Done();this.Aao._Done();this.Adg._Done();C.Kv._Done.call(this
);},_ReInit:function(){C.Kv._ReInit.call(this);this.T1._ReInit();this.Zt._ReInit(
);this.Zs._ReInit();this.Aao._ReInit();this.Adg._ReInit();this.Et(A.z2(A.abg.Ala
));this.T1.R(A.z2(A.abg.ACn));this.Zt.R(A.z2(A.abg.Feed));this.Zs.R(A.z2(A.abg.ACp
));this.Aao.R(A.z2(A.abg.ACq));},_Mark:function(D){var B;C.Kv._Mark.call(this,D);
if((B=this.Ase)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Asd)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Auc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
ArN)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.T1)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Zt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zs)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Aao)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adg)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoRatingsGraph"};C.AIc={
EL:null,XP:null,Ab$:null,AWY:false,Init:function(aArg){this.XP.Afy(A._NewObject(
A.Core.Bp,0).Initialize(A._GetAutoObject(A.Device.Helper).DR()).Format(A.z2(A.abg.
AeZ)));},Bh:function(aSize){C.Kv.Bh.call(this,aSize);this.Ab$.G(this.EL.M);},Ah:
function(Ae){C.Kv.Ah.call(this,Ae);var Buq=!this.YH&&this.AWY;if(A._GetAutoObject(
A.Device.Helper).V.TimestampLastTemperature>0)this.Ab$.R(A.z2(A.abg.A17));else this.
Ab$.R(A.z2(A.abg.AoB));if((A._GetAutoObject(A.Device.Helper).V.TimestampLastTemperature>
0)||(A._GetAutoObject(A.Device.Helper).V.TimestampLastAssessment>0))this.Et(A.z2(
A.abg.Bdu));else this.Et(A.z2(A.abg.Bdv));this.Ab$.W(Buq);},AgO:function(H){this.
XP.Afy(A._NewObject(A.Core.Bp,0).Initialize(A._GetAutoObject(A.Device.Helper).DR(
)).Format(A.z2(A.abg.AeZ)));this.YH=true;this.AWY=true;this.Aua();this.APr();this.
Al();},APr:function(){this.EL.AcU(this.AKE());if(!!this.EL.EC&&(this.EL.EC.AN>0)
){this.YH=false;this.AWY=false;}},AKE:function(){var Bx=A._NewObject(C.AnO,0);var
Po=A._GetAutoObject(A.Device.Helper).AJU(A._GetAutoObject(A.Device.Helper).DR());
var Df=A._GetAutoObject(A.Device.Helper).AnL(Po-(86400*this.LX));Bx.Alk(BjO);Bx.
P2([].concat(0,Bx.FB.slice(1,4)));Bx.P2(A.aaQ(Bx.FB,(Po-Df)|0));Bx.P2(A.aaS(Bx.FB
,3400));Bx.P2([].concat(Bx.FB.slice(0,3),4200));var FW=A._GetAutoObject(A.Device.
Device).Bt.Cf();Bx.AtG(FW);Bx.Ww();if(FW>0){var P=0;while(P<FW){var Anl=A._GetAutoObject(
A.Device.Device).Bt.Cq(P,7);var Anm=A._GetAutoObject(A.Device.Device).Bt.Ht(P,6)-
Df;if(Anl>0)Bx.AnI(Anm,Anl);P=P+1;}}return Bx;},Bb_:function(){var FW=A._GetAutoObject(
A.Device.Device).Bt.Cf();if(FW>0){var A_Y=A._NewObject(C.Ahh,0);var P=FW-1;while(
P>=0){var DG=A._NewObject(A.Device.Rating,0);DG.Fq(P,A._GetAutoObject(A.Device.Device
).Bt);var K1=A._GetAutoObject(A.Device.Helper).Azv(DG);if(!!K1)A_Y.NP(K1,DG.Timestamp
);P=P-1;}return A_Y;}else return null;},Aua:function(){this.XP.Aad(this.Bb_());if(
!!this.XP.Ni&&(this.XP.Ni.AN>0))this.YH=false;},_Init:function(aArg){C.Kv._Init.
call(this,aArg);C.Aoa._Init.call(this.EL={I:this},0);C.AfE._Init.call(this.XP={I:
this},0);C.AiE._Init.call(this.Ab$={I:this},0);this.__proto__=C.AIc;this.EL.G(Al_
);this.EL.U(A.z2(A.abg.Temperature));this.EL.ABo(C.AC5);this.XP.G(BjP);this.XP.R(
A.z2(A.abg.Rating));this.Ab$.G(Al_);this.J(this.EL,-2);this.J(this.XP,-2);this.J(
this.Ab$,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Kv;this.EL._Done(
);this.XP._Done();this.Ab$._Done();C.Kv._Done.call(this);},_ReInit:function(){C.
Kv._ReInit.call(this);this.EL._ReInit();this.XP._ReInit();this.Ab$._ReInit();},_Mark:
function(D){var B;C.Kv._Mark.call(this,D);if((B=this.EL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.XP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab$)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoSummaryGraph"};C.U0={Q:null,FP:
null,FQ:null,PK:null,AI:0,FI:0,Fs:100,E9:0,Init:function(aArg){},JE:function(H){
this.E9=1;C.DY.JE.call(this,H);},Bh:function(aSize){C.DY.Bh.call(this,aSize);this.
PK.G([0,aSize[1]-40,40,aSize[1]]);},AjT:function(H){this.E9=5;this.Al();if(this.
Bi.Bw){A.ow([this,this.Avx],this);this.Bi.An(false);}this.Bi.An(true);},Ah:function(
Ae){C.DY.Ah.call(this,Ae);this.PK.W(this.FI!==this.Fs);this.PK.L(this.T.AM);if((
this.E9===4)||(this.E9===5))this.PK.L(A.iF.E1);},Ps:function(H){if(this.E9===5)A.
ow([this,this.Avx],this);if(this.E9===4)A.ow([this,this.Avy],this);if(this.E9===
1)A.ow(this.AV,this);this.E9=0;this.Al();},C1:function(H){var F;if(!!this.Q)this.
Bu((F=this.Q,F[1].call(F[0])));},AaQ:function(s){this.C1(s);},AD:function(E){if(
A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.AaQ],this.Q,0);this.Q=E;if(!!E
)A.za([this,this.AaQ],E,0);if(!!E)A.ow([this,this.AaQ],this);},AjV:function(H){this.
E9=4;this.Al();if(this.Bi.Bw){A.ow([this,this.Avy],this);this.Bi.An(false);}this.
Bi.An(true);},JB:function(H){this.E9=0;},Avy:function(s){this.JB(s);},Jw:function(
H){this.E9=0;},Avx:function(s){this.Jw(s);},Bu:function(E){if(E<this.FI)E=this.FI;
if(E>this.Fs)E=this.Fs;if(this.AI===E)return;this.AI=E;this.Al();},Hy:function(E
){if(this.FI===E)return;this.FI=E;this.Al();},FS:function(E){if(this.Fs===E)return;
this.Fs=E;this.Al();},_Init:function(aArg){C.DY._Init.call(this,aArg);A.Core.B1.
_Init.call(this.FP={I:this},0);A.Core.B1._Init.call(this.FQ={I:this},0);A.abh.Am.
_Init.call(this.PK={I:this},0);this.__proto__=C.U0;this.G(KO);this.FP.Filter=5;this.
FQ.Filter=4;this.Background.G(KO);this.T.G(AaM);this.T.R(RS);this.PK.G(AUp);this.
J(this.PK,0);this.FP.B2=[this,this.AjT];this.FP.Ea=[this,this.AjT];this.FQ.B2=[this
,this.AjV];this.FQ.Ea=[this,this.AjV];this.T.Y(A.zW(A.eV.Au));this.T.By(A.zW(A.eV.
Az));this.T.C5(null);this.PK.At(A.zW(A.abi.AIA));this.Init(aArg);},_Done:function(
){this.__proto__=C.DY;this.FP._Done();this.FQ._Done();this.PK._Done();C.DY._Done.
call(this);},_ReInit:function(){C.DY._ReInit.call(this);this.FP._ReInit();this.FQ.
_ReInit();this.PK._ReInit();},_Mark:function(D){var B;C.DY._Mark.call(this,D);if((
B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.FP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PK)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemBaseVertically"};C.
APL={AC:null,Cv:null,Hd:null,Bh:function(aSize){C.U0.Bh.call(this,aSize);this.Cv.
G([this.PK.M[2],this.PK.M[1],this.M[2],this.PK.M[3]]);},Ah:function(Ae){C.U0.Ah.
call(this,Ae);this.Cv.ZL(0,this.Cv.AN-1);if(this.FI!==this.Fs)this.PK.W(true);},
Init:function(aArg){},C1:function(H){var F;if(!!this.Q&&!!this.AC)this.Bu(this.AC.
DX((F=this.Q,F[1].call(F[0]))));},JB:function(H){var F;var BR=this.AI;C.U0.JB.call(
this,H);this.Bu(this.AI+1);if(this.AI!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2
].call(F[0],this.AC.Dd(this.AI)));A.aat(this.Q,0);}},Jw:function(H){var F;var BR=
this.AI;C.U0.Jw.call(this,H);this.Bu(this.AI-1);if(this.AI!==BR){if(!!this.Q&&!!
this.AC)(F=this.Q,F[2].call(F[0],this.AC.Dd(this.AI)));A.aat(this.Q,0);}},Bu:function(
E){var Pw=0;if(this.FI!==this.Fs){if(E<this.FI){E=this.Fs;Pw=-this.Cv.Gn*this.Cv.
AN;}if(E>this.Fs){E=this.FI;Pw=this.Cv.Gn;}}C.U0.Bu.call(this,E);if(!!Pw)this.Cv.
Go(Pw);this.Cv.Gp(this.AI);this.Cv.IB(this.Cv.FM,true,this.Hd,null);},GH:function(
H){var B;var Fy=this.Cv.IE;var Ck=(C.CG.isPrototypeOf(B=this.Cv.B5)?B:null);if(!
Ck)return;Ck.Y(this.T.Cp);Ck.By(A.zW(A.eV.Au));Ck.L(this.T.AM);if(!!this.AC)Ck.R(
this.AC.GS(Fy));else Ck.R(JW);Ck.G(A.aaN(Ck.M,[(B=this.Cv.M)[2]-B[0],this.Cv.Gn]
));},Dk:function(E){if(this.AC===E)return;this.AC=E;if(!!this.AC){this.Hy(0);this.
FS(this.AC.Dx()-1);this.Cv.I1(this.AC.Dx());this.Cv.ZL(0,this.Cv.AN-1);}},_Init:
function(aArg){C.U0._Init.call(this,aArg);A.Core.Cv._Init.call(this.Cv={I:this},
0);A.abm.FE._Init.call(this.Hd={I:this},0);this.__proto__=C.APL;this.G(KO);this.
PK.G(BjQ);this.Cv.Ac0(40);this.Cv.Ne(C.CG);this.Hd.UU(23);this.Hd.IG(1);this.Hd.
FK(200);this.J(this.Cv,0);this.T.Y(A.zW(A.eV.Au));this.T.By(A.zW(A.eV.Az));this.
Cv.GH=[this,this.GH];this.Init(aArg);},_Done:function(){this.__proto__=C.U0;this.
Cv._Done();this.Hd._Done();C.U0._Done.call(this);},_ReInit:function(){C.U0._ReInit.
call(this);this.Cv._ReInit();this.Hd._ReInit();},_Mark:function(D){var B;C.U0._Mark.
call(this,D);if((B=this.AC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Cv)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Hd)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SettingsItemGroupVertically"};C.QN={AHo:0,Ah:function(Ae){C.E$.Ah.
call(this,Ae);this.U(A.z2(A.abg.AQJ));if(A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing
!==A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing)this.JP((A._GetAutoObject(
A.Device.Converter).AlV(this.AHo)+Cw)+A._GetAutoObject(A.abk.Dy).Abh());else this.
JP(A.z2(A.abg.Unknown));},B8:function(H){C.E$.B8.call(this,H);this.AHo=A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight-A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight;
this.Al();},_Init:function(aArg){C.E$._Init.call(this,aArg);this.__proto__=C.QN;
},_className:"Application::AnimalInfoItemWeightGain"};C.ALc={A7:null,CY:null,Init:
function(aArg){var B;A.za([this,this.MF],[B=A._GetAutoObject(A.Device.Device),B.
ANP,B.AUL],0);},EA:function(H){C.Ig.EA.call(this,H);this.CY.At(A._GetAutoObject(
A.Device.Converter).Bab(A._GetAutoObject(A.Device.Device).DP));},_Init:function(
aArg){C.Ig._Init.call(this,aArg);A.abh.DK._Init.call(this.A7={I:this},0);A.abh.Am.
_Init.call(this.CY={I:this},0);this.__proto__=C.ALc;this.A7.DL(AUq);this.A7.D5(AUr
);this.A7.L(A.iF.A7);this.CY.G(BjR);this.CY.L(A.iF.Text);this.J(this.A7,0);this.
J(this.CY,0);this.CY.At(A.zW(A.abi.AhK));this.Init(aArg);},_Done:function(){this.
__proto__=C.Ig;this.A7._Done();this.CY._Done();C.Ig._Done.call(this);},_ReInit:function(
){C.Ig._ReInit.call(this);this.A7._ReInit();this.CY._ReInit();},_Mark:function(D
){var B;C.Ig._Mark.call(this,D);if((B=this.A7)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdInfo"
};C.AJi={XX:null,JU:null,LI:null,Timer:null,AyL:3,Ah:function(Ae){C.Aw.Ah.call(this
,Ae);this.XX.R(A._GetAutoObject(A.Device.Helper).Nk(A.z2(A.abg.BjC),Qj,this.AyL.
toFixed()));},CF:function(H){this.Timer.An(true);},Fc:function(H){this.Timer.An(
false);},BtH:function(H){if(this.AyL>1){this.AyL=this.AyL-1;this.Al();}else{this.
Timer.An(false);A._GetAutoObject(A.Device.Device).Auk();}},_Init:function(aArg){
C.Aw._Init.call(this,aArg);A.abh.Text._Init.call(this.XX={I:this},0);A.abh.Text.
_Init.call(this.JU={I:this},0);A.abh.Am._Init.call(this.LI={I:this},0);A.Core.Timer.
_Init.call(this.Timer={I:this},0);this.__proto__=C.AJi;this.Background.L(A.iF.CR
);this.N.W(true);this.XX.G(BjS);this.XX.KH(true);this.XX.R(A.jm);this.XX.L(A.iF.
Text);this.JU.G(BjT);this.JU.KH(true);this.JU.R(A.z2(A.abg.AZI));this.JU.L(A.iF.
Text);this.LI.G(A5J);this.J(this.XX,0);this.J(this.JU,0);this.J(this.LI,0);this.
XX.Y(A.zW(A.eV.Au));this.JU.Y(A.zW(A.eV.Au));this.LI.At(A.zW(A.abi.Ayk));this.Timer.
Mz=[this,this.BtH];},_Done:function(){this.__proto__=C.Aw;this.XX._Done();this.JU.
_Done();this.LI._Done();this.Timer._Done();C.Aw._Done.call(this);},_ReInit:function(
){C.Aw._ReInit.call(this);this.XX._ReInit();this.JU._ReInit();this.LI._ReInit();
this.Timer._ReInit();this.JU.R(A.z2(A.abg.AZI));this.XX.Y(A.zW(A.eV.Au));this.JU.
Y(A.zW(A.eV.Au));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.XX
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.LI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Timer)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::ControlledPowerOffScreen"};C.AI1={JU:null,Akq:null
,PD:null,C6:function(){this.Al();},Ah:function(Ae){C.Ab1.Ah.call(this,Ae);if(A._GetAutoObject(
A.Device.Device).Y_<=10)this.JU.R(A.z2(A.abg.Baw));else this.JU.R(A.z2(A.abg.AZJ
));},_Init:function(aArg){C.Ab1._Init.call(this,aArg);A.abh.Text._Init.call(this.
JU={I:this},0);A.abh.Am._Init.call(this.Akq={I:this},0);C.CG._Init.call(this.PD={
I:this},0);this.__proto__=C.AI1;this.RC.G(BjU);this.LI.G(BjV);this.JU.G(BjW);this.
JU.KH(true);this.JU.L(A.iF.Text);this.Akq.G(A5J);this.PD.G(BjX);this.PD.W(true);
this.PD.R(A.z2(A.abg.APp));this.PD.L(A.iF.Text);this.J(this.JU,0);this.J(this.Akq
,0);this.J(this.PD,0);this.JU.Y(A.zW(A.eV.Au));this.Akq.At(A.zW(A.abi.Ayk));this.
PD.Y(A.zW(A.eV.Au));this.PD.By(A.zW(A.eV.Az));this.PD.C5(A.zW(A.eV.Cr));},_Done:
function(){this.__proto__=C.Ab1;this.JU._Done();this.Akq._Done();this.PD._Done();
C.Ab1._Done.call(this);},_ReInit:function(){C.Ab1._ReInit.call(this);this.JU._ReInit(
);this.Akq._ReInit();this.PD._ReInit();this.PD.R(A.z2(A.abg.APp));this.JU.Y(A.zW(
A.eV.Au));this.PD.Y(A.zW(A.eV.Au));this.PD.By(A.zW(A.eV.Az));this.PD.C5(A.zW(A.eV.
Cr));this.C6();},_Mark:function(D){var B;C.Ab1._Mark.call(this,D);if((B=this.JU).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Akq)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ChargeWarningScreen"
};C.AH1={_Init:function(aArg){C.Iz._Init.call(this,aArg);this.__proto__=C.AH1;this.
QH.An(false);this.QH.Aj(false);this.QH.W(false);},_className:"Application::AlarmListFilterScreen"
};C.AQE={_Init:function(aArg){C.Iz._Init.call(this,aArg);this.__proto__=C.AQE;this.
RM.An(false);this.RM.Aj(false);this.RM.W(false);},_className:"Application::WatchListFilterScreen"
};C.AJf={_Init:function(aArg){C.H_._Init.call(this,aArg);this.__proto__=C.AJf;this.
N.Cd(A.z2(A.abg.Bap));},_className:"Application::ControlListActionsScreen"};C.AQD={
_Init:function(aArg){C.H_._Init.call(this,aArg);this.__proto__=C.AQD;this.N.Cd(A.
z2(A.abg.Bau));},_className:"Application::WatchListActionsScreen"};C.AH0={_Init:
function(aArg){C.H_._Init.call(this,aArg);this.__proto__=C.AH0;this.N.Cd(A.z2(A.
abg.AZC));},_ReInit:function(){C.H_._ReInit.call(this);this.N.Cd(A.z2(A.abg.AZC)
);},_className:"Application::AlarmListActionsScreen"};C.AKK={EA:function(H){C.JK.
EA.call(this,H);this.CY.At(A._GetAutoObject(A.Device.Converter).AeF(5));},_Init:
function(aArg){C.JK._Init.call(this,aArg);this.__proto__=C.AKK;},_className:"Application::HeaderControlListFilter"
};C.ALe={EA:function(H){C.JK.EA.call(this,H);this.CY.At(A._GetAutoObject(A.Device.
Converter).AeF(6));},_Init:function(aArg){C.JK._Init.call(this,aArg);this.__proto__=
C.ALe;},_className:"Application::HeaderWatchListFilter"};C.ALi={DE:null,Mp:null,
_Init:function(aArg){C.Sz._Init.call(this,aArg);C.CG._Init.call(this.DE={I:this}
,0);A.abh.Am._Init.call(this.Mp={I:this},0);this.__proto__=C.ALi;this.DE.G(Al7);
this.DE.R(A.z2(A.abg.AZ$));this.DE.L(A.iF.Text);this.Mp.G(BjY);this.Mp.L(A.iF.Text
);this.Mp.A0(0x12);this.J(this.DE,-2);this.J(this.Mp,0);this.DE.Y(A.zW(A.eV.Az));
this.DE.By(A.zW(A.eV.Cr));this.Mp.At(A.zW(A.abi.Az0));},_Done:function(){this.__proto__=
C.Sz;this.DE._Done();this.Mp._Done();C.Sz._Done.call(this);},_ReInit:function(){
C.Sz._ReInit.call(this);this.DE._ReInit();this.Mp._ReInit();this.DE.R(A.z2(A.abg.
AZ$));this.DE.Y(A.zW(A.eV.Az));this.DE.By(A.zW(A.eV.Cr));},_Mark:function(D){var
B;C.Sz._Mark.call(this,D);if((B=this.DE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Mp)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdWatch"};C.
AIX={B8:function(Z){C.Aho.B8.call(this,Z);if(!!this.AZ){var NF=this.AZ.Hs(Z,8);var
Bu6=this.AZ.Q_(Z,21);this.Ab7.R(A._GetAutoObject(A.Device.Helper).L7(Bu6,A._GetAutoObject(
A.Device.Helper).DR()).toFixed());this.Rb.W(NF);this.Al();}},_Init:function(aArg
){C.Aho._Init.call(this,aArg);this.__proto__=C.AIX;},_className:"Application::CalfListWatchItem"
};C.Sz={Ae_:null,Afa:null,_Init:function(aArg){C.DQ._Init.call(this,aArg);A.abh.
Am._Init.call(this.Ae_={I:this},0);A.abh.Am._Init.call(this.Afa={I:this},0);this.
__proto__=C.Sz;this.Ae_.G(BjZ);this.Ae_.L(A.iF.Text);this.Ae_.A0(0x12);this.Afa.
G(Bj0);this.Afa.L(A.iF.Text);this.Afa.A0(0x12);this.Lh(this.CN,-1);this.J(this.Ae_
,0);this.J(this.Afa,0);this.Ae_.At(A.zW(A.abi.AkS));this.Afa.At(A.zW(A.abi.ZH));
},_Done:function(){this.__proto__=C.DQ;this.Ae_._Done();this.Afa._Done();C.DQ._Done.
call(this);},_ReInit:function(){C.DQ._ReInit.call(this);this.Ae_._ReInit();this.
Afa._ReInit();},_Mark:function(D){var B;C.DQ._Mark.call(this,D);if((B=this.Ae_).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afa)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdFlags"};C.AnO={FB:A.vx,NW:A.vw,P2:function(E){if(A.z9(this.
FB,E))return;this.FB=E;},Alk:function(E){if(A.z8(this.NW,E))return;this.NW=E;},_Init:
function(aArg){A.abw.AyJ._Init.call(this,aArg);this.__proto__=C.AnO;},_className:
"Application::BoundCoordList"};C.Aho={SI:null,Xv:null,SJ:null,Xw:null,Rb:null,Z2:
null,Ab7:null,AQ:null,A4:null,DU:null,KK:null,Init:function(aArg){},Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize)
);this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AQ.G([this.T.M[2]-1,0,this.
T.M[2]+1,aSize[1]]);this.SI.G([this.T.M[2],0,((aSize[0]*42)/100)|0,aSize[1]]);this.
Xv.G(this.SI.M);this.A4.G([this.SI.M[2]-1,0,this.SI.M[2]+1,aSize[1]]);this.SJ.G([
this.SI.M[2],0,((aSize[0]*54)/100)|0,aSize[1]]);this.Xw.G(this.SJ.M);this.DU.G([
this.SJ.M[2]-1,0,this.SJ.M[2]+1,aSize[1]]);this.Rb.G([this.SJ.M[2],0,((aSize[0]*
65)/100)|0,aSize[1]]);this.Z2.G(this.Rb.M);this.KK.G([this.Rb.M[2]-1,0,this.Rb.M[
2]+1,aSize[1]]);this.Ab7.G([this.Rb.M[2],0,aSize[0],aSize[1]]);},Ah:function(Ae){
C.A$.Ah.call(this,Ae);var Kt=this.T.AM;this.SI.AA9(Kt);this.Xv.L(Kt);this.SJ.AA9(
Kt);this.Xw.L(Kt);this.Rb.AA9(Kt);this.Z2.L(Kt);this.Ab7.L(Kt);this.Z2.W(!this.Rb.
Fe());},B8:function(Z){if(!this.AZ)return;this.Ho=Z;var Oy=this.AZ.Cq(Z,1);var HH=
this.AZ.AkL(Z,14);var Arp=this.AZ.Cq(Z,5);var K1=this.AZ.ID(Z,13);this.U(Oy.toFixed(
));if(!!K1){this.SI.W(true);this.SI.Atx(A._GetAutoObject(A.abk.Assessment).A8B(K1
));this.Xv.W(false);}else{this.SI.W(false);this.Xv.W(true);}if(Arp>0){this.SJ.W(
true);this.SJ.Atx(A._GetAutoObject(A.abk.Assessment).A8B(A._GetAutoObject(A.Device.
Converter).ApN(HH,Arp)));this.Xw.W(false);}else{this.SJ.W(false);this.Xw.W(true);
}this.Al();},_Init:function(aArg){C.A$._Init.call(this,aArg);C.JI._Init.call(this.
SI={I:this},0);A.abh.Text._Init.call(this.Xv={I:this},0);C.JI._Init.call(this.SJ={
I:this},0);A.abh.Text._Init.call(this.Xw={I:this},0);C.JI._Init.call(this.Rb={I:
this},0);A.abh.Text._Init.call(this.Z2={I:this},0);A.abh.Text._Init.call(this.Ab7={
I:this},0);A.abh.AH._Init.call(this.AQ={I:this},0);A.abh.AH._Init.call(this.A4={
I:this},0);A.abh.AH._Init.call(this.DU={I:this},0);A.abh.AH._Init.call(this.KK={
I:this},0);this.__proto__=C.Aho;this.Xv.G(Bj1);this.Xv.R(Al8);this.Xw.G(Al9);this.
Xw.R(Al8);this.Rb.Atx(A.iF.AiQ);this.Z2.G(Al9);this.Z2.R(Qk);this.AQ.L(A.iF.A7);
this.A4.L(A.iF.A7);this.DU.L(A.iF.A7);this.KK.L(A.iF.A7);this.J(this.SI,0);this.
J(this.Xv,0);this.J(this.SJ,0);this.J(this.Xw,0);this.J(this.Rb,0);this.J(this.Z2
,0);this.J(this.Ab7,0);this.J(this.AQ,0);this.J(this.A4,0);this.J(this.DU,0);this.
J(this.KK,0);this.Xv.Y(A.zW(A.eV.Au));this.Xw.Y(A.zW(A.eV.Au));this.Z2.Y(A.zW(A.
eV.Au));this.Ab7.Y(A.zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.SI._Done();this.Xv._Done();this.SJ._Done();this.Xw._Done();this.Rb._Done(
);this.Z2._Done();this.Ab7._Done();this.AQ._Done();this.A4._Done();this.DU._Done(
);this.KK._Done();C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this
);this.SI._ReInit();this.Xv._ReInit();this.SJ._ReInit();this.Xw._ReInit();this.Rb.
_ReInit();this.Z2._ReInit();this.Ab7._ReInit();this.AQ._ReInit();this.A4._ReInit(
);this.DU._ReInit();this.KK._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(
this,D);if((B=this.SI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xv)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.SJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Xw)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Rb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Z2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab7)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.DU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KK)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::CalfListFlagItem"};C.Dv={OI:null,
AsT:null,EC:null,Dv:null,Aox:0,Aoy:0,A1x:0,AkC:0,AnZ:0,Init:function(aArg){this.
AOm(6);this.AOn(8);this.AOz(A.iF.A6);this.AOA(3);},Ah:function(Ae){var B;A.Core.
O.Ah.call(this,Ae);this.Dv.Bfi([this.Dv.Zj[0],(B=this.Dv.M)[3]-B[1]]);this.UV(this
);},AOl:function(E){if(this.OI===E)return;this.OI=E;this.Dv.AOl(E);},AOA:function(
E){if(this.Aoy===E)return;this.Aoy=E;this.Dv.AOA(E);},AOz:function(E){if(this.Aox===
E)return;this.Aox=E;this.Dv.AOz(E);this.Dv.Bfn(E);},UV:function(H){var B;while(!
!this.Dv.Af)this.HA(this.Dv.Af);if(!this.EC)return;this.Dv.Alk([((this.EC.NW[0]*((
B=this.M)[2]-B[0]))/(this.EC.FB[2]-this.EC.FB[0]))|0,this.Dv.NW[1]]);this.Dv.Alk([
this.Dv.NW[0],((this.EC.NW[1]*((B=this.M)[3]-B[1]))/(this.EC.FB[3]-this.EC.FB[1]
))|0]);var P;var C9=this.Dv.NW[1];var DN;var AYR=this.EC.FB[1];var Bdr=(((B=this.
Dv.M)[3]-B[1])/this.Dv.NW[1])|0;for(P=0;P<Bdr;P=P+1){DN=A._NewObject(A.abh.Text,
0);DN.G([0,((((B=this.M)[3]-B[1])-(P*C9))-(this.AsT.Ascent+this.AsT.Descent))+2,((
B=this.M)[2]-B[0])-this.Aoy,(((B=this.M)[3]-B[1])-(P*C9))+2]);DN.L(this.A1x);DN.
Y(this.AsT);DN.A0(0x24);if(P>0)DN.R(this.AFP(AYR));else DN.R(this.AGj());AYR=AYR+
this.EC.NW[1];this.J(DN,0);}},Byr:function(s){this.UV(s);},Av8:function(AVi){var
B;if(!this.EC||(this.EC.FB[3]===this.EC.FB[1]))return 0;return(((AVi-this.EC.FB[
1])*((B=this.M)[3]-B[1]))/(this.EC.FB[3]-this.EC.FB[1]))|0;},AcU:function(E){if(
this.EC===E)return;this.EC=E;if(!E)this.Dv.AcU(null);else{var Bx=A._NewObject(A.
abw.AyJ,0);Bx.AtG(this.EC.AAu);Bx.Ww();var I7=E.Ajy;while(!!I7){Bx.AnI(this.Bro(
I7.Tk),this.Brp(I7.Tl));I7=I7.Af;}this.Dv.AcU(Bx);this.Al();}},Bro:function(BpD){
var B;if(!this.EC||(this.EC.FB[2]===this.EC.FB[0]))return 0;return((BpD-this.EC.
FB[0])*((B=this.M)[2]-B[0]))/(this.EC.FB[2]-this.EC.FB[0]);},Brp:function(AVi){var
B;if(!this.EC||(this.EC.FB[3]===this.EC.FB[1]))return 0;return((AVi-this.EC.FB[1
])*((B=this.M)[3]-B[1]))/(this.EC.FB[3]-this.EC.FB[1]);},AFP:function(Amn){return Amn.
toFixed();},AGj:function(){return A.jm;},AOn:function(E){if(this.AkC===E)return;
this.AkC=E;this.Dv.AOn(E);},AOm:function(E){if(this.AnZ===E)return;this.AnZ=E;this.
Dv.AOm(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abw.Dv._Init.call(
this.Dv={I:this},0);this.__proto__=C.Dv;this.G(A5K);this.A1x=A.iF.Text;this.Dv.AW(
0x3F);this.Dv.G(A5K);this.Dv.Bgz(Bj2);this.Dv.Be4(A.iF.AiQ);this.Dv.BfX(A.iF.A7);
this.Dv.BgT(A.iF.AiQ);this.J(this.Dv,0);this.OI=A.zW(A.abw.Ay2);this.AsT=A.zW(A.
eV.Cr);this.Init(aArg);},_Done:function(){this.__proto__=A.Core.O;this.Dv._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
Dv._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.OI
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.AsT)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.EC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Dv)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::Graph"};C.AIK={AFP:function(Amn){return A.
_GetAutoObject(A.Device.Converter).AuJ(Amn,0);},AGj:function(){return A._GetAutoObject(
A.abk.Dy).Abh();},_Init:function(aArg){C.Dv._Init.call(this,aArg);this.__proto__=
C.AIK;},_className:"Application::BodyWeightGraph"};C.Pb={Jg:null,Ee:null,D1:null
,Fn:null,H$:null,Ia:null,Init:function(aArg){this.AOl(null);},UV:function(H){var
B;var F;C.Dv.UV.call(this,H);var AGP=0;var AHs=0;if(!!this.Jg){AGP=this.Av8(A._GetAutoObject(
A.Device.Helper).Azu((F=this.Jg,F[1].call(F[0]))));AHs=this.Av8(A._GetAutoObject(
A.Device.Helper).Azt((F=this.Jg,F[1].call(F[0]))));}this.Fn.G(A.aaS(this.Fn.M,0)
);this.Fn.G([].concat(this.Fn.M.slice(0,3),((B=this.M)[3]-B[1])-AHs));this.H$.G(
A.aaR(this.H$.M,(this.Fn.M[3]-((((B=this.H$.M)[3]-B[1])/2)|0))-2));this.D1.G(A.aaS(
this.D1.M,this.Fn.M[3]));this.D1.G([].concat(this.D1.M.slice(0,3),((B=this.M)[3]-
B[1])-AGP));this.Ia.G(A.aaR(this.Ia.M,(this.D1.M[3]-((((B=this.Ia.M)[3]-B[1])/2)|
0))+2));this.Ee.G(A.aaS(this.Ee.M,this.D1.M[3]));this.Ee.G([].concat(this.Ee.M.slice(
0,3),(B=this.M)[3]-B[1]));},AFP:function(Amn){return A._GetAutoObject(A.Device.Converter
).Np(Amn,0,true);},AGj:function(){return A._GetAutoObject(A.abk.Dy).YD();},Alh:function(
E){if(A.z_(this.Jg,E))return;if(!!this.Jg)A.zn([this,this.Aq2],this.Jg,0);this.Jg=
E;if(!!E)A.za([this,this.Aq2],E,0);if(!!E)A.ow([this,this.Aq2],this);},Aq2:function(
H){this.Al();},_Init:function(aArg){C.Dv._Init.call(this,aArg);A.abh.AH._Init.call(
this.Ee={I:this},0);A.abh.AH._Init.call(this.D1={I:this},0);A.abh.AH._Init.call(
this.Fn={I:this},0);A.abh.AH._Init.call(this.H$={I:this},0);A.abh.AH._Init.call(
this.Ia={I:this},0);this.__proto__=C.Pb;this.Ee.AW(0xD);this.Ee.G(AaL);this.Ee.L(
A.iF.F0);this.D1.AW(0xD);this.D1.G(Qi);this.D1.L(A.iF.HB);this.Fn.AW(0xD);this.Fn.
G(AaK);this.Fn.L(A.iF.E1);this.H$.AW(0xD);this.H$.G(Yj);this.H$.Atk(A.iF.HB);this.
H$.Atl(A.iF.HB);this.H$.Atn(A.iF.E1);this.H$.Atm(A.iF.E1);this.Ia.AW(0xD);this.Ia.
G(Vs);this.Ia.Atk(A.iF.F0);this.Ia.Atl(A.iF.F0);this.Ia.Atn(A.iF.HB);this.Ia.Atm(
A.iF.HB);this.J(this.Ee,-1);this.J(this.D1,-1);this.J(this.Fn,-1);this.J(this.H$
,-1);this.J(this.Ia,-1);this.Init(aArg);},_Done:function(){this.__proto__=C.Dv;this.
Ee._Done();this.D1._Done();this.Fn._Done();this.H$._Done();this.Ia._Done();C.Dv.
_Done.call(this);},_ReInit:function(){C.Dv._ReInit.call(this);this.Ee._ReInit();
this.D1._ReInit();this.Fn._ReInit();this.H$._ReInit();this.Ia._ReInit();},_Mark:
function(D){var B;C.Dv._Mark.call(this,D);if((B=this.Jg)&&((B=B[0])._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Ee)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D1)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Fn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
H$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ia)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::WeightGainGraph"};C.Aoa={EL:null,EC:null,Ss:null,Ib:null
,A7:null,Aus:A.jm,Dn:A.jm,AKG:null,Init:function(aArg){},Bh:function(aSize){A.Core.
O.Bh.call(this,aSize);this.A7.G([].concat([0,aSize[1]-2],aSize));this.Ss.G([30,0
,aSize[0]-2,30]);this.Ib.G(this.Ss.M);if(!!this.EL)this.EL.G([30,this.Ss.M[3],aSize[
0],this.A7.M[1]]);},Afy:function(E){if(this.Aus===E)return;this.Aus=E;this.Ib.R(
E);},U:function(E){if(this.Dn===E)return;this.Dn=E;this.Ss.R(E);},ABo:function(E
){if(this.AKG===E)return;this.AKG=E;this.Bh9(this);},Bh9:function(H){var B;if(!!
this.EL)this.HA(this.EL);this.EL=(C.Dv.isPrototypeOf(B=A._NewObject(this.AKG,0))?
B:null);if(!!this.EL){this.EL.G(Bj3);this.EL.AcU(this.EC);this.J(this.EL,0);}},AcU:
function(E){if(this.EC===E)return;this.EC=E;if(!!this.EL)this.EL.AcU(E);},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text._Init.call(this.Ss={I:this
},0);A.abh.Text._Init.call(this.Ib={I:this},0);A.abh.AH._Init.call(this.A7={I:this
},0);this.__proto__=C.Aoa;this.G(AdL);this.An(false);this.Ss.G(Bj4);this.Ss.A0(0x11
);this.Ss.R(RS);this.Ss.L(A.iF.Text);this.Ib.A0(0x14);this.Ib.R(A.jm);this.Ib.L(
A.iF.Text);this.A7.G(Bj5);this.A7.L(A.iF.A7);this.J(this.Ss,0);this.J(this.Ib,0);
this.J(this.A7,0);this.Ss.Y(A.zW(A.eV.Az));this.Ib.Y(A.zW(A.eV.Az));this.Init(aArg
);},_Done:function(){this.__proto__=A.Core.O;this.Ss._Done();this.Ib._Done();this.
A7._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(
this);this.Ss._ReInit();this.Ib._ReInit();this.A7._ReInit();},_Mark:function(D){
var B;A.Core.O._Mark.call(this,D);if((B=this.EL)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.EC)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ss)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ib)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::GraphItem"};C.AIk={AeG:null,Gp:
function(E){var F;C.Fu.Gp.call(this,E);if(!!this.AeG)(F=this.AeG,F[2].call(F[0],
E));},A3o:function(E){if(A.z_(this.AeG,E))return;if(!!this.AeG)A.zn([this,this.AXu
],this.AeG,0);this.AeG=E;if(!!E)A.za([this,this.AXu],E,0);if(!!E)A.ow([this,this.
AXu],this);},AXu:function(H){var F;if(!this.AeG)return;(F=this.AeG,F[2].call(F[0
],this.FJ()));},_Init:function(aArg){C.Fu._Init.call(this,aArg);this.__proto__=C.
AIk;},_Mark:function(D){var B;C.Fu._Mark.call(this,D);if((B=this.AeG)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::AnimalScrollList"};C.APo={
Qa:null,O9:null,Wb:null,Wc:null,LX:0,C6:function(){this.Al();},Bh:function(aSize
){var B;A.Core.O.Bh.call(this,aSize);this.Qa.G(A.aaL(this.Qa.M,(((B=this.M)[3]-B[
1])/2)|0));this.O9.G(A.aaL(this.O9.M,(((B=this.M)[3]-B[1])/2)|0));this.Qa.G(A.aaR(
this.Qa.M,(((B=this.M)[3]-B[1])/2)|0));this.O9.G(A.aaR(this.O9.M,(((B=this.M)[3]-
B[1])/2)|0));},Ah:function(Ae){A.Core.O.Ah.call(this,Ae);this.Qa.R(A._GetAutoObject(
A.Device.Helper).Nk(A.z2(A.abg.Bdf),Qj,this.LX.toFixed()));},Aac:function(E){if(
this.LX===E)return;this.LX=E;this.Buh(this);},Buh:function(H){var B;var AFW=(((B=
this.M)[2]-B[0])/this.LX)|0;this.Wb.G(A.aaP(this.Wb.M,(((B=this.M)[2]-B[0])-(this.
LX*AFW))+(((AFW/2)-(((B=this.Wb.M)[2]-B[0])/2))|0)));this.Wc.G(A.aaP(this.Wc.M,(((
B=this.M)[2]-B[0])-AFW)+(((AFW/2)-(((B=this.Wc.M)[2]-B[0])/2))|0)));this.Al();},
_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.Text._Init.call(this.Qa={
I:this},0);A.abh.Text._Init.call(this.O9={I:this},0);A.abh.Text._Init.call(this.
Wb={I:this},0);A.abh.Text._Init.call(this.Wc={I:this},0);this.__proto__=C.APo;this.
G(BI);this.Qa.G(Bj6);this.Qa.HV(5);this.Qa.A0(0x11);this.Qa.L(A.iF.Text);this.O9.
G(Bj7);this.O9.HV(5);this.O9.A0(0x14);this.O9.R(A.z2(A.abg.AfU));this.O9.L(A.iF.
Text);this.Wb.G(Bj8);this.Wb.R(A5L);this.Wb.L(A.iF.Text);this.Wc.G(Bj9);this.Wc.
R(A5L);this.Wc.L(A.iF.Text);this.J(this.Qa,0);this.J(this.O9,0);this.J(this.Wb,0
);this.J(this.Wc,0);this.Qa.Y(A.zW(A.eV.Az));this.O9.Y(A.zW(A.eV.Az));this.Wb.Y(
A.zW(A.eV.LO));this.Wc.Y(A.zW(A.eV.LO));},_Done:function(){this.__proto__=A.Core.
O;this.Qa._Done();this.O9._Done();this.Wb._Done();this.Wc._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Qa._ReInit();this.
O9._ReInit();this.Wb._ReInit();this.Wc._ReInit();this.O9.R(A.z2(A.abg.AfU));this.
Qa.Y(A.zW(A.eV.Az));this.O9.Y(A.zW(A.eV.Az));this.C6();},_Mark:function(D){var B;
A.Core.O._Mark.call(this,D);if((B=this.Qa)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
O9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wb)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Wc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::RatingsGraphScale"
};C.Kv={Uq:null,Ahw:null,J7:A.jm,LX:0,YH:false,Init:function(aArg){var AWf=A._NewObject(
C.Ky,0);var P;for(P=0;P<3;P=P+1)if(A._GetAutoObject(A.Device.Helper).V.Sg()<AWf.
Dd(P))AWf.Ak$=P+1;this.Uq.Dk(AWf);},Ah:function(Ae){C.DP.Ah.call(this,Ae);this.Ahw.
W(this.YH);if(this.YH)this.A8(null);else this.A8(this.Uq);},CF:function(H){var B;
var F;C.DP.CF.call(this,H);if(!(F=this.Uq.Q,F[1].call(F[0])))(F=this.Uq.Q,F[2].call(
F[0],this.Uq.AC.Dd(0)));A.za([this,this.AE3],[B=A._GetAutoObject(A.Device.Helper
),B.Tq,B.Tr],0);A.y_([this,this.AE3],A._GetAutoObject(A.Device.Device).Bt,0);A.za([
this,this.Aj8],[B=A._GetAutoObject(A.Device.Helper).V,B.P1,B.OnSetId],0);A.ow([this
,this.Aj8],this);},Fc:function(H){var B;A.zn([this,this.AE3],[B=A._GetAutoObject(
A.Device.Helper),B.Tq,B.Tr],0);A.zl([this,this.AE3],A._GetAutoObject(A.Device.Device
).Bt,0);A.zn([this,this.Aj8],[B=A._GetAutoObject(A.Device.Helper).V,B.P1,B.OnSetId
],0);C.DP.Fc.call(this,H);},XG:function(E){if(A.z$(this.AV,E))return;C.DP.XG.call(
this,E);this.Uq.AV=E;},Aac:function(E){if(this.LX===E)return;this.LX=E;A.ow([this
,this.Aj8],this);},Bpe:function(Ao){this.Aac(Ao);},AgO:function(H){},AE3:function(
s){this.AgO(s);},Et:function(E){if(this.J7===E)return;this.J7=E;this.Ahw.R(E);},
Aj8:function(H){var EZ=A._NewObject(A.Device.Filter,0);var Awg=A._NewObject(A.Device.
UInt32FilterCriterion,0);Awg.Initialize(6,2,(A._GetAutoObject(A.Device.Converter
).AfU()-((this.LX-1)*86400))-1,true);EZ.CQ(Awg);var Hk=A._NewObject(A.Device.Int32FilterCriterion
,0);Hk.Initialize(1,0,A._GetAutoObject(A.Device.Helper).V.Id,true);EZ.CQ(Hk);A._GetAutoObject(
A.Device.Device).Bt.Bo(EZ);},Bep:function(){return this.LX;},_Init:function(aArg
){C.DP._Init.call(this,aArg);C.APL._Init.call(this.Uq={I:this},0);C.AiE._Init.call(
this.Ahw={I:this},0);this.__proto__=C.Kv;this.Uq.G(BI);this.Ahw.G(Vt);this.J(this.
Uq,0);this.J(this.Ahw,0);this.Uq.AD([this,this.Bep,this.Bpe]);this.Init(aArg);},
_Done:function(){this.__proto__=C.DP;this.Uq._Done();this.Ahw._Done();C.DP._Done.
call(this);},_ReInit:function(){C.DP._ReInit.call(this);this.Uq._ReInit();this.Ahw.
_ReInit();},_Mark:function(D){var B;C.DP._Mark.call(this,D);if((B=this.Uq)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ahw)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoGraph"};C.AJp={Uw:null,W5:null,RatingMode:null,OT:null,_Init:
function(aArg){C.CJ._Init.call(this,aArg);C.Rl._Init.call(this.Uw={I:this},0);C.
B$._Init.call(this.W5={I:this},0);C.RatingMode._Init.call(this.RatingMode={I:this
},0);C.JS._Init.call(this.OT={I:this},0);this.__proto__=C.AJp;var B;this.Gb.R(A.
z2(A.abg.AnU));this.Lg(A.z2(A.abg.AZ6));this.Uw.G(AEH);this.Uw.Aj(true);this.Uw.
U(A.z2(A.abg.ApX));this.Uw.Bk(true);this.Uw.Ru(23);this.W5.G(Bj_);this.W5.Aj(true
);this.W5.U(A.z2(A.abg.A4F));this.W5.Bk(false);this.OT.G(A5M);this.OT.Aj(true);this.
OT.U(A.z2(A.abg.AZ2));this.OT.Bk(true);this.OT.Hy(3);this.OT.FS(14);this.OT.Ng(A.
z2(A.abg.Ky)+AEI);this.OT.N5(A.z2(A.abg.GD)+AEI);this.J(this.Uw,0);this.J(this.W5
,0);this.J(this.OT,0);this.Uw.AV=[B=this.Uw,B.Rw];this.W5.AD([B=this.RatingMode,
B.CA,B.CC]);this.W5.Dk(this.RatingMode);this.OT.AD([B=A._GetAutoObject(A.Device.
Device),B.A2C,B.A6G]);},_Done:function(){this.__proto__=C.CJ;this.Uw._Done();this.
W5._Done();this.RatingMode._Done();this.OT._Done();C.CJ._Done.call(this);},_ReInit:
function(){C.CJ._ReInit.call(this);this.Uw._ReInit();this.W5._ReInit();this.RatingMode.
_ReInit();this.OT._ReInit();this.Gb.R(A.z2(A.abg.AnU));this.Lg(A.z2(A.abg.AZ6));
this.Uw.U(A.z2(A.abg.ApX));this.W5.U(A.z2(A.abg.A4F));this.OT.U(A.z2(A.abg.AZ2));
this.OT.Ng(A.z2(A.abg.Ky)+AEI);this.OT.N5(A.z2(A.abg.GD)+AEI);},_Mark:function(D
){var B;C.CJ._Mark.call(this,D);if((B=this.Uw)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.W5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RatingMode)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.OT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DataAcquisitionSettingsScreen"
};C.Ax$={Ah:function(Ae){var B;C.B_.Ah.call(this,Ae);var FV=((Ae&0x10)===0x10);var
Fx=((Ae&0x20)===0x20);var Fw=this.Bi.Bw;var Gf=A.iF.AeO;var G3=A.iF.Be;if(this.GY
){Gf=A.iF.Be;G3=A.iF.Text;}if(!FV){this.Background.L(Gf);this.T.L(A.iF.CE);}else
if(Fw){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);}else if(Fx){this.Background.
L(A.iF.A6);this.T.L(A.iF.Be);}else{this.Background.L(Gf);this.T.L(G3);}this.Lr=FV;
this.Kq=Fx;this.QC=Fw;},Init:function(aArg){this.T.Text.A0(0x11);this.T.Text.HV(
10);},_Init:function(aArg){C.B_._Init.call(this,aArg);this.__proto__=C.Ax$;this.
T.Y(A.zW(A.eV.Az));this.Init(aArg);},_className:"Application::ActionsItemText"};
C.AzC={Am:null,Init:function(aArg){var B;A.za([this,this.EA],[B=A._GetAutoObject(
A.Device.Helper).V,B.O1,B.DS],0);A.ow([this,this.EA],this);},CZ:function(E){C.BW.
CZ.call(this,E);this.Am.L(E);},EA:function(H){switch(A._GetAutoObject(A.Device.Helper
).V.AnimalType){case 0:this.Am.At(A.zW(A.abi.Azz));break;case 1:this.Am.At(A.zW(
A.abi.AK0));break;case 2:this.Am.At(A.zW(A.abi.AK2));break;default:A.aa8("%s%e",
AUs,A._GetAutoObject(A.Device.Helper).V.AnimalType);}},_Init:function(aArg){C.BW.
_Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:this},0);this.__proto__=C.AzC;
this.Am.G(AUt);this.J(this.Am,0);this.Am.At(A.zW(A.abi.Azz));this.Init(aArg);},_Done:
function(){this.__proto__=C.BW;this.Am._Done();C.BW._Done.call(this);},_ReInit:function(
){C.BW._ReInit.call(this);this.Am._ReInit();},_Mark:function(D){var B;C.BW._Mark.
call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimal"
};C.AzD={Am:null,Init:function(aArg){var B;A.za([this,this.EA],[B=A._GetAutoObject(
A.Device.Helper).V,B.O1,B.DS],0);A.ow([this,this.EA],this);},CZ:function(E){C.BW.
CZ.call(this,E);this.Am.L(E);},EA:function(H){switch(A._GetAutoObject(A.Device.Helper
).V.AnimalType){case 0:this.Am.At(A.zW(A.abi.AzA));break;case 1:this.Am.At(A.zW(
A.abi.AK1));break;case 2:this.Am.At(A.zW(A.abi.AK3));break;default:A.aa8("%s%e",
AUs,A._GetAutoObject(A.Device.Helper).V.AnimalType);}},_Init:function(aArg){C.BW.
_Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:this},0);this.__proto__=C.AzD;
this.Am.G(AUt);this.J(this.Am,0);this.Am.At(A.zW(A.abi.AzA));this.Init(aArg);},_Done:
function(){this.__proto__=C.BW;this.Am._Done();C.BW._Done.call(this);},_ReInit:function(
){C.BW._ReInit.call(this);this.Am._ReInit();},_Mark:function(D){var B;C.BW._Mark.
call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderNewAnimals"
};C.E$={B3:null,AuE:A.jm,CZ:function(E){C.Je.CZ.call(this,E);this.B3.L(E);},JP:function(
E){if(this.AuE===E)return;this.AuE=E;this.B3.R(E);},_Init:function(aArg){C.Je._Init.
call(this,aArg);C.CG._Init.call(this.B3={I:this},0);this.__proto__=C.E$;this.B3.
AW(0x34);this.B3.G(Avi);this.B3.A0(0x11);this.B3.L(A.iF.Text);this.J(this.B3,0);
this.B3.Y(A.zW(A.eV.Au));this.B3.By(A.zW(A.eV.Az));this.B3.C5(A.zW(A.eV.Cr));},_Done:
function(){this.__proto__=C.Je;this.B3._Done();C.Je._Done.call(this);},_ReInit:function(
){C.Je._ReInit.call(this);this.B3._ReInit();},_Mark:function(D){var B;C.Je._Mark.
call(this,D);if((B=this.B3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalMonochromeInfoItem"
};C.AKo={XB:function(H){this.Aey();this.AY2(A.z2(A.abg.Bck),[this,this.Bg7],A._GetAutoObject(
A.Device.Device).AkJ);A._GetAutoObject(C.Cz).IT();this.D0(A.z2(A.abg.AQj),[this,
this.AOX],5);this.D0(A.z2(A.abg.AQh),[this,this.AOW],7);this.D0(A.z2(A.abg.AfQ),[
this,this.Aio],2);this.D0(A.z2(A.abg.AbK),[this,this.AoR],1);this.D0(A.z2(A.abg.
Aet),[this,this.Aig],0);A._GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).V5(A.
z2(A.abg.Aeu)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Co(6);},DW:function(
H){},Ack:function(){return C.Ayz;},Acl:function(){return C.AzJ;},Rz:function(H){
A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).A0Y());
},HY:function(H){C.Gi.HY.call(this,H);if(this.Ah6()===false){this.N.Cn(A.zW(A.abi.
ZH));this.N.Ch=[this,this.A0r];this.N.Ft(A.jm);}this.N.O4(false);this.N.O5(false
);},Aeg:function(){A._GetAutoObject(C.A1).BY(47);},Aef:function(){A._GetAutoObject(
C.A1).BY(48);},Bg7:function(H){A._GetAutoObject(A.Device.Device).Co(0);A._GetAutoObject(
A.Device.Device).AtA(!A._GetAutoObject(A.Device.Device).AkJ);this.AlR(this);},AlR:
function(H){var Bb=A._GetAutoObject(A.Device.Device).Aq.Filter.F$();var As=Bb.DJ(
30,3);if(!!As)Bb.P7(As);if(A._GetAutoObject(A.Device.Device).AkJ){var AwS=A._NewObject(
A.Device.UInt32FilterCriterion,0);var AW7=A._GetAutoObject(A.Device.Helper).DR()-
21600;AwS.Initialize(30,3,AW7,true);Bb.CQ(AwS);}A._GetAutoObject(A.Device.Device
).Aq.Bo(Bb);},_Init:function(aArg){C.Gi._Init.call(this,aArg);this.__proto__=C.AKo;
var B;this.Dw(C.AKW);this.Et(A.z2(A.abg.Bdq));this.Afw([B=A._GetAutoObject(A.Device.
Device),B.A2B,B.A6F]);},_className:"Application::FreshCowListScreen"};C.AKn={_Init:
function(aArg){C.Iz._Init.call(this,aArg);this.__proto__=C.AKn;this.KA.An(false);
this.KA.Aj(false);this.KA.W(false);this.IU.An(false);this.IU.Aj(false);this.IU.W(
false);},_className:"Application::FreshCowListFilterScreen"};C.AKm={_Init:function(
aArg){C.H_._Init.call(this,aArg);this.__proto__=C.AKm;this.N.Cd(A.z2(A.abg.AZE));
},_ReInit:function(){C.H_._ReInit.call(this);this.N.Cd(A.z2(A.abg.AZE));},_className:
"Application::FreshCowListActionsScreen"};C.AKW={EA:function(H){C.JK.EA.call(this
,H);this.CY.At(A._GetAutoObject(A.Device.Converter).AeF(7));},_Init:function(aArg
){C.JK._Init.call(this,aArg);this.__proto__=C.AKW;},_className:"Application::HeaderFreshCowListFilter"
};C.AzJ={IZ:null,DE:null,_Init:function(aArg){C.DQ._Init.call(this,aArg);C.CG._Init.
call(this.IZ={I:this},0);C.CG._Init.call(this.DE={I:this},0);this.__proto__=C.AzJ;
this.A3E(1);this.IZ.G(Bj$);this.IZ.R((A.z2(A.abg.Calving)+AaP)+A.z2(A.abg.A5f));
this.IZ.L(A.iF.Text);this.DE.G(Bka);this.DE.R(A.z2(A.abg.AAn));this.DE.L(A.iF.Text
);this.J(this.IZ,0);this.J(this.DE,0);this.IZ.Y(A.zW(A.eV.Az));this.IZ.By(A.zW(A.
eV.Cr));this.DE.Y(A.zW(A.eV.Az));this.DE.By(A.zW(A.eV.Cr));},_Done:function(){this.
__proto__=C.DQ;this.IZ._Done();this.DE._Done();C.DQ._Done.call(this);},_ReInit:function(
){C.DQ._ReInit.call(this);this.IZ._ReInit();this.DE._ReInit();this.IZ.R((A.z2(A.
abg.Calving)+AaP)+A.z2(A.abg.A5f));this.DE.R(A.z2(A.abg.AAn));this.IZ.Y(A.zW(A.eV.
Az));this.IZ.By(A.zW(A.eV.Cr));this.DE.Y(A.zW(A.eV.Az));this.DE.By(A.zW(A.eV.Cr)
);},_Mark:function(D){var B;C.DQ._Mark.call(this,D);if((B=this.IZ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.DE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdFreshCow"
};C.Ayz={AC6:null,Lc:null,S_:null,AQ:null,A4:null,Init:function(aArg){},Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize)
);this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.AQ.G([this.T.M[2]-1,0,this.
T.M[2]+1,aSize[1]]);this.S_.G([this.T.M[2],0,((aSize[0]*72)/100)|0,aSize[1]]);this.
A4.G([this.S_.M[2]-1,0,this.S_.M[2]+1,aSize[1]]);this.Lc.G([this.S_.M[2],0,aSize[
0],aSize[1]]);},Ah:function(Ae){C.A$.Ah.call(this,Ae);this.Lc.L(this.T.AM);this.
S_.CZ(this.T.AM);},B8:function(Z){if(!this.AZ)return;this.Ho=Z;if(!!this.AZ){var
Kl=this.AZ.Cq(Z,0);var Oy=this.AZ.Cq(Z,1);var AW6=this.AZ.Cq(Z,29);var Ajp=this.
AZ.Ht(Z,28);this.U(Oy.toFixed());this.Lc.R(AW6.toFixed());this.S_.Aac(A._GetAutoObject(
A.Device.Device).An8+1);this.S_.BgM(Ajp);this.S_.R(A._GetAutoObject(A.abk.K5).AhB(
Ajp));A._GetAutoObject(A.Device.Device).UZ(Z);this.Anw(Kl);this.Aua();A._GetAutoObject(
A.Device.Device).Bt.Bo(null);this.Al();}},AYF:function(H){this.S_.Aad(this.AC6);
},Aua:function(){var FW=A._GetAutoObject(A.Device.Device).Bt.Cf();this.AC6=A._NewObject(
C.Ahh,0);if(FW>0){var P=FW-1;while(P>=0){var DN=A._GetAutoObject(A.Device.Device
).Bt.Ht(P,6);this.Aqv(this.AC6,P,9,DN);P=P-1;}}A.ow([this,this.AYF],this);},Aqv:
function(AVB,Z,AVA,Pi){var Aji=A._GetAutoObject(A.Device.Device).Bt.ID(Z,AVA);if(
!!Aji)AVB.NP(Aji,Pi);},Anw:function(Aa2){var EZ=A._NewObject(A.Device.Filter,0);
var Awg=A._NewObject(A.Device.UInt32FilterCriterion,0);Awg.Initialize(6,2,A._GetAutoObject(
A.Device.Helper).X0(A._GetAutoObject(A.Device.Device).An8)-1,true);EZ.CQ(Awg);var
Hk=A._NewObject(A.Device.Int32FilterCriterion,0);Hk.Initialize(1,0,Aa2,true);EZ.
CQ(Hk);A._GetAutoObject(A.Device.Device).Bt.Bo(EZ);},_Init:function(aArg){C.A$._Init.
call(this,aArg);A.abh.Text._Init.call(this.Lc={I:this},0);C.APj._Init.call(this.
S_={I:this},0);A.abh.AH._Init.call(this.AQ={I:this},0);A.abh.AH._Init.call(this.
A4={I:this},0);this.__proto__=C.Ayz;this.AQ.L(A.iF.A7);this.A4.L(A.iF.A7);this.J(
this.Lc,0);this.J(this.S_,0);this.J(this.AQ,0);this.J(this.A4,0);this.Lc.Y(A.zW(
A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Lc._Done();
this.S_._Done();this.AQ._Done();this.A4._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.Lc._ReInit();this.S_._ReInit();this.AQ._ReInit(
);this.A4._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((B=this.
AC6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Lc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.S_)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListFreshCowItem"
};C.APj={APY:0,Init:function(aArg){},AKv:function(){return A._GetAutoObject(A.Device.
Helper).AnL(this.APY);},AKx:function(){return this.AKv()+(this.LX*86400);},BgM:function(
E){if(this.APY===E)return;this.APY=E;A.ow([this,this.UV],this);},_Init:function(
aArg){C.AfE._Init.call(this,aArg);this.__proto__=C.APj;this.A7.G(Bkb);this.BgJ(true
);this.Init(aArg);},_className:"Application::RatingHistoryFixedItem"};C.FactoryResetScope={
FactoryResetScopeToString:null,Dx:function(){if(this.K&&this.K.Dx)return this.K.
Dx.apply(this,arguments);else return C.FactoryResetScope.Bnp.apply(this,arguments
);},Bnp:function(){return 2;},GS:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.
jm;return this.FactoryResetScopeToString.Cb(this.Dd(aIndex));},_Init:function(aArg
){C.Dm._Init.call(this,aArg);A.Device.FactoryResetScopeToString._Init.call(this.
FactoryResetScopeToString={I:this},0);this.__proto__=C.FactoryResetScope;this.Cj.
Set(0,0);this.Cj.Set(1,1);var KP=this._variants();if(KP){this.K={};KP._Init.call(
this,aArg);}},_Done:function(){if(this.K)this.K._Done.call(this);this.__proto__=
C.Dm;this.FactoryResetScopeToString._Done();C.Dm._Done.call(this);},_ReInit:function(
){C.Dm._ReInit.call(this);this.FactoryResetScopeToString._ReInit();if(this.K)this.
K._ReInit.call(this);},_Mark:function(D){var B;C.Dm._Mark.call(this,D);if((B=this.
FactoryResetScopeToString)._cycle!=D)B._Mark(B._cycle=D);if(this.K)this.K._Mark(
D);},_variants:function(){return A.abt.FactoryResetScope._variants();},K:null,_className:
"Application::FactoryResetScope"};C.SetSaveTransponderScreen={EY:function(H){if(
this.A85){A._GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.Device
).Aq);A._GetAutoObject(A.Device.Device).A_(67,true,A._GetAutoObject(A.Device.Helper
).V.VisualId.toFixed(),0,null);}C.SetTransponderScreen.EY.call(this,H);},_Init:function(
aArg){C.SetTransponderScreen._Init.call(this,aArg);this.__proto__=C.SetSaveTransponderScreen;
},_className:"Application::SetSaveTransponderScreen"};C.ANH={XB:function(H){this.
Aey();this.D0(A.z2(A.abg.App),[this,this.Ao_],3);this.D0(A.z2(A.abg.AfQ),[this,this.
Aio],2);this.D0(A.z2(A.abg.AbK),[this,this.AoR],1);this.D0(A.z2(A.abg.LinkTransponder
),[this,this.AOB],8);this.D0(A.z2(A.abg.Aet),[this,this.Aig],0);this.D0(A.z2(A.abg.
Oz),[this,this.Z7],9);A._GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).V5(A.z2(
A.abg.Aeu)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Co(6);},DW:function(
H){},Ack:function(){return C.Zc;},Acl:function(){return C.Acp;},Rz:function(H){A.
_GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).AKz());}
,HY:function(H){C.Gi.HY.call(this,H);if(this.Ah6()===false){this.N.Cn(A.zW(A.abi.
Asy));this.N.Ch=[this,this.AJE];this.N.Ft(A.jm);}this.N.O4(false);this.N.O5(false
);},Aeg:function(){A._GetAutoObject(C.A1).BY(51);},Aef:function(){A._GetAutoObject(
C.A1).BY(52);},_Init:function(aArg){C.Gi._Init.call(this,aArg);this.__proto__=C.
ANH;var B;this.Dw(C.AzE);this.Et(A.z2(A.abg.Bdo));this.Afw([B=A._GetAutoObject(A.
Device.Device),B.AN3,B.AUR]);},_className:"Application::NoTransponderListScreen"
};C.ANG={_Init:function(aArg){C.Iz._Init.call(this,aArg);this.__proto__=C.ANG;this.
Kb.An(false);this.Kb.Aj(false);this.Kb.W(false);},_className:"Application::NoTransponderListFilterScreen"
};C.ANF={_Init:function(aArg){C.H_._Init.call(this,aArg);this.__proto__=C.ANF;this.
N.Cd(A.z2(A.abg.Bat));},_className:"Application::NoTransponderListActionsScreen"
};C.AzE={EA:function(H){C.JK.EA.call(this,H);this.CY.At(A._GetAutoObject(A.Device.
Converter).AeF(8));},_Init:function(aArg){C.JK._Init.call(this,aArg);this.__proto__=
C.AzE;},_className:"Application::HeaderNoTransponderListFilter"};C.Ayj={ArQ:null
,GS:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.ArQ.Cb(aIndex
);},_Init:function(aArg){C.Fv._Init.call(this,aArg);A.Device.BooleanToAssignedUnassignedString.
_Init.call(this.ArQ={I:this},0);this.__proto__=C.Ayj;},_Done:function(){this.__proto__=
C.Fv;this.ArQ._Done();C.Fv._Done.call(this);},_ReInit:function(){C.Fv._ReInit.call(
this);this.ArQ._ReInit();},_Mark:function(D){var B;C.Fv._Mark.call(this,D);if((B=
this.ArQ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AssignedUnassigned"
};C.AHU={B_:null,AbS:null,Init:function(aArg){this.A8(this.B_);},Nb:function(){if(
!this.CX){this.CX=A._NewObject(C.N,0);this.CX.CB=[this,this.AjR];this.CX.Ch=null;
this.CX.Cm=[this,this.A95];this.CX.Cd(A.jm);this.CX.Cn(A.zW(A.abi.AhM));this.CX.
C$(A.zW(A.abi.Acr));}return this.CX;},A9M:function(H){var Ab=(C.ArC.isPrototypeOf(
H)?H:null);if(Ab===this.B_)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(3
);else if(Ab===this.AbS)A._GetAutoObject(A.Device.Device).UpdateOverlayMenu(2);else
throw new Error(Bkc);},_Init:function(aArg){C.K2._Init.call(this,aArg);C.ArC._Init.
call(this.B_={I:this},0);C.ArC._Init.call(this.AbS={I:this},0);this.__proto__=C.
AHU;this.G(Vu);this.Text.R(A.z2(A.abg.ActionSettings));this.B_.G(Ke);this.B_.U(A.
z2(A.abg.AAx));this.AbS.G(RT);this.AbS.U(A.z2(A.abg.Oz));this.J(this.B_,0);this.
J(this.AbS,0);this.Text.Y(A.zW(A.eV.Az));this.B_.AV=[this,this.A9M];this.AbS.AV=[
this,this.A9M];this.Init(aArg);},_Done:function(){this.__proto__=C.K2;this.B_._Done(
);this.AbS._Done();C.K2._Done.call(this);},_ReInit:function(){C.K2._ReInit.call(
this);this.B_._ReInit();this.AbS._ReInit();this.Text.R(A.z2(A.abg.ActionSettings
));this.B_.U(A.z2(A.abg.AAx));this.AbS.U(A.z2(A.abg.Oz));this.Text.Y(A.zW(A.eV.Az
));},_Mark:function(D){var B;C.K2._Mark.call(this,D);if((B=this.B_)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.AbS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ActionSettingsOverlayMenu"
};C.BxS={Undefined:0,BxQ:1,BxR:2,IdScanned:3,BwS:4,Bv0:5,BwC:6};C.AH5={A41:function(
){A._GetAutoObject(A.Device.Device).A_(35,true,A._GetAutoObject(A.Device.Helper).
V.VisualId.toFixed(),2000,[this,this.A_q]);},_Init:function(aArg){C.ArJ._Init.call(
this,aArg);this.__proto__=C.AH5;this.Fv.AD(1);this.AOF(true);},_className:"Application::AnimalActionPerishedScreen"
};C.Aci={WH:null,WI:null,WJ:null,Ae3:null,Ae4:null,Ae5:null,CB:null,Ch:null,Cm:null
,AlK:A.jm,AlL:A.jm,AlM:A.jm,Aoh:0,Aoi:0,Aoj:0,Afl:0,XR:false,XQ:false,Apr:false,
ApG:false,ApF:false,Ahn:function(EO){this.CB=EO.CB;this.Ch=EO.Ch;this.Cm=EO.Cm;this.
AlK=EO.AlK;this.AlL=EO.AlL;this.AlM=EO.AlM;this.Afl=EO.Afl;this.WH=EO.WH;this.WI=
EO.WI;this.WJ=EO.WJ;this.Ae3=EO.Ae3;this.Ae4=EO.Ae4;this.Ae5=EO.Ae5;this.ApF=EO.
ApF;this.ApG=EO.ApG;this.Apr=EO.Apr;this.XQ=EO.XQ;this.XR=EO.XR;this.Aoh=EO.Aoh;
this.Aoi=EO.Aoi;this.Aoj=EO.Aoj;},AiD:function(EO){EO.CB=this.CB;EO.Ch=this.Ch;EO.
Cm=this.Cm;EO.GZ(this.AlK);EO.Ft(this.AlL);EO.Cd(this.AlM);EO.ABs(this.Afl);EO.AOr(
this.WH);EO.Atz(this.WI);EO.Ao1(this.WJ);EO.C$(this.Ae3);EO.Cn(this.Ae4);EO.De(this.
Ae5);EO.O4(this.ApF);EO.O5(this.ApG);EO.Apr=this.Apr;EO.XQ=this.XQ;EO.XR=this.XR;
EO.BfZ(this.Aoh);EO.AOv(this.Aoi);EO.A3P(this.Aoj);},_Init:function(aArg){this.__proto__=
C.Aci;this.WH=A.zW(A.eV.Az);this.WI=A.zW(A.eV.Az);this.WJ=A.zW(A.eV.Az);A.hJ++;}
,_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.WH)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.WI)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.WJ)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Ae3)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ae4)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ae5)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.CB)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ch)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Cm)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::FooterState"};C.NewAnimalSetTransponderScreen={_Init:function(aArg
){C.ApC._Init.call(this,aArg);this.__proto__=C.NewAnimalSetTransponderScreen;this.
Dw(C.AzC);},_className:"Application::NewAnimalSetTransponderScreen"};C.C2={Zk:null
,CountryToString:null,Dx:function(){return 40;},Dd:function(aIndex){if((aIndex<0
)||(aIndex>=40))return-1;return aIndex;},GS:function(aIndex){if((aIndex<0)||(aIndex>=
40))return A.jm;return this.CountryToString.KN(aIndex);},DX:function(A2){return A2;
},HP:function(){return 39;},AD:function(E){var F;C.AC.AD.call(this,E);if(!!this.
Zk)(F=this.Zk,F[2].call(F[0],E));},AV$:function(H){var F;if(!!this.Zk)this.Q=(F=
this.Zk,F[1].call(F[0]));else this.Q=0;A.aat([this,this.CA,this.CC],0);},ABe:function(
E){if(A.z_(this.Zk,E))return;if(!!this.Zk)A.zn([this,this.AV$],this.Zk,0);this.Zk=
E;if(!!this.Zk)A.za([this,this.AV$],this.Zk,0);A.ow([this,this.AV$],this);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.CountryToString._Init.call(this.
CountryToString={I:this},0);this.__proto__=C.C2;},_Done:function(){this.__proto__=
C.AC;this.CountryToString._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC.
_ReInit.call(this);this.CountryToString._ReInit();},_Mark:function(D){var B;C.AC.
_Mark.call(this,D);if((B=this.Zk)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::Country"
};C.Oc={AC:null,Q:null,Background:null,HT:null,HS:null,Mj:0,AI:0,FI:0,Fs:0,Aed:function(
H){this.JB(this);},Bh:function(aSize){A.Core.O.Bh.call(this,aSize);this.Background.
G(A.aaN(this.Background.M,aSize));},Ah:function(Ae){var B;A.Core.O.Ah.call(this,
Ae);var Gz=((Ae&0x40)===0x40);if(Gz){this.Background.L(A.iF.A6);this.DF(256);}else{
this.Background.L(this.Mj);this.DF(256);}},Aec:function(H){this.Jw(this);},Dk:function(
E){if(this.AC===E)return;if(!!this.AC)A.zl([this,this.AXS],this.AC,0);this.AC=E;
if(!!E)A.y_([this,this.AXS],E,0);if(!!E)A.ow([this,this.AXS],this);},CU:function(
E){if(this.Mj===E)return;this.Mj=E;this.Al();},JB:function(H){var F;var BR=this.
AI;this.Bu(this.AI+1);if(this.AI!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(
F[0],this.AC.Dd(this.AI)));A.aat(this.Q,0);}},Jw:function(H){var F;var BR=this.AI;
this.Bu(this.AI-1);if(this.AI!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[
0],this.AC.Dd(this.AI)));A.aat(this.Q,0);}},Bu:function(E){if(E<this.FI)E=this.Fs;
if(E>this.Fs)E=this.FI;if(this.AI===E)return;this.AI=E;this.Al();},Hy:function(E
){if(this.FI===E)return;this.FI=E;this.Al();},FS:function(E){if(this.Fs===E)return;
this.Fs=E;this.Al();},C1:function(H){var F;if(!!this.Q)this.Bu(this.AC.DX((F=this.
Q,F[1].call(F[0]))));},AD:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([
this,this.C1],this.Q,0);this.Q=E;if(!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this
,this.C1],this);},AXS:function(H){var F;if(!!this.AC){this.Hy(0);this.FS(this.AC.
HP());if(!!this.Q)this.Bu(this.AC.DX((F=this.Q,F[1].call(F[0]))));this.Al();}},_Init:
function(aArg){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={
I:this},0);A.Core.B1._Init.call(this.HT={I:this},0);A.Core.B1._Init.call(this.HS={
I:this},0);this.__proto__=C.Oc;this.G(A5N);this.Background.G(Aqh);this.HT.Filter=
4;this.HS.Filter=5;this.Mj=A.iF.CE;this.J(this.Background,0);this.HT.B2=[this,this.
Aed];this.HT.Ea=[this,this.Aed];this.HS.B2=[this,this.Aec];this.HS.Ea=[this,this.
Aec];},_Done:function(){this.__proto__=A.Core.O;this.Background._Done();this.HT.
_Done();this.HS._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O.
_ReInit.call(this);this.Background._ReInit();this.HT._ReInit();this.HS._ReInit();
},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.AC)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HS)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::VerticalSelector"
};C.QJ={AV4:A.jm,Ah:function(Ae){C.E$.Ah.call(this,Ae);this.U(A.z2(A.abg.BaG));this.
JP(this.AV4);},B8:function(H){C.E$.B8.call(this,H);var Ajp=A._GetAutoObject(A.Device.
Helper).V.DateOfLastCalving;if(!Ajp)this.AV4=JW;else this.AV4=A._GetAutoObject(A.
abk.K5).AhB(Ajp);this.Al();},_Init:function(aArg){C.E$._Init.call(this,aArg);this.
__proto__=C.QJ;},_className:"Application::AnimalInfoItemCalvingDate"};C.QK={AW5:
0,Ah:function(Ae){C.E$.Ah.call(this,Ae);this.U(A.z2(A.abg.A1y));if(this.AW5>0)this.
JP(this.AW5.toFixed());else this.JP(A.z2(A.abg.Unknown));},B8:function(H){C.E$.B8.
call(this,H);this.AW5=A._GetAutoObject(A.Device.Helper).V.LactationNumber;this.Al(
);},_Init:function(aArg){C.E$._Init.call(this,aArg);this.__proto__=C.QK;},_className:
"Application::AnimalInfoItemLactationNumber"};C.EaseOfDelivery={Animal:null,EaseOfDeliveryToString:
null,Dx:function(){return 5;},Dd:function(aIndex){if((aIndex<0)||(aIndex>=5))return-
1;return aIndex;},GS:function(aIndex){if((aIndex<0)||(aIndex>=5))return A.jm;return this.
EaseOfDeliveryToString.Cb(aIndex);},DX:function(A2){return A2;},HP:function(){return 4;
},AD:function(E){C.AC.AD.call(this,E);if(!!this.Animal)this.Animal.Aij(E);},AWr:
function(H){if(!!this.Animal)this.Q=this.Animal.EaseOfDelivery;else this.Q=0;A.aat([
this,this.CA,this.CC],0);},N1:function(E){var B;if(this.Animal===E)return;if(!!this.
Animal)A.zn([this,this.AWr],[B=this.Animal,B.ANV,B.Aij],0);this.Animal=E;if(!!this.
Animal)A.za([this,this.AWr],[B=this.Animal,B.ANV,B.Aij],0);A.ow([this,this.AWr],
this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);this.__proto__=C.EaseOfDelivery;
},_Done:function(){this.__proto__=C.AC;this.EaseOfDeliveryToString._Done();C.AC.
_Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EaseOfDeliveryToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::EaseOfDelivery"};C.Breed={Animal:null
,BreedToString:null,Dx:function(){return 99;},Dd:function(aIndex){if((aIndex<0)||(
aIndex>=99))return-1;return aIndex;},GS:function(aIndex){if((aIndex<0)||(aIndex>=
99))return A.jm;return this.BreedToString.Cb(aIndex);},DX:function(A2){return A2;
},HP:function(){return 98;},AD:function(E){C.AC.AD.call(this,E);if(!!this.Animal
)this.Animal.O2(E);},AV2:function(H){if(!!this.Animal)this.Q=this.Animal.Breed;else
this.Q=0;A.aat([this,this.CA,this.CC],0);},N1:function(E){var B;if(this.Animal===
E)return;if(!!this.Animal)A.zn([this,this.AV2],[B=this.Animal,B.As3,B.O2],0);this.
Animal=E;if(!!this.Animal)A.za([this,this.AV2],[B=this.Animal,B.As3,B.O2],0);A.ow([
this,this.AV2],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
BreedToString._Init.call(this.BreedToString={I:this},0);this.__proto__=C.Breed;}
,_Done:function(){this.__proto__=C.AC;this.BreedToString._Done();C.AC._Done.call(
this);},_ReInit:function(){C.AC._ReInit.call(this);this.BreedToString._ReInit();
},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=
D))B._Mark(B._cycle=D);if((B=this.BreedToString)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::Breed"};C.AID={Uu:null,M8:null,Mt:null,M9:null,SK:null
,AbL:null,Init:function(aArg){var B;A.za([this,this.A9R],[B=A._GetAutoObject(A.Device.
Device),B.ANO,B.AUK],0);A.za([this,this.AXI],[B=A._GetAutoObject(A.Device.Device
),B.Aib,B.Ai8],0);A.za([this,this.AXI],[B=A._GetAutoObject(A.Device.Device),B.Aic
,B.Ai9],0);A.ow([this,this.A9R],this);A.ow([this,this.AXI],this);},A9R:function(
H){switch(A._GetAutoObject(A.Device.Device).AeC){case 0:{this.M8.Aj(true);this.M8.
An(true);this.M8.W(true);}break;case 1:{this.M8.Aj(false);this.M8.An(false);this.
M8.W(false);}break;default:throw new Error(Bkd+A._GetAutoObject(A.Device.Device).
AeC.toFixed());}},AXI:function(H){var F,Dc;if(((F=this.Mt.Q,F[1].call(F[0]))+(Dc=
this.M9.Q,Dc[1].call(Dc[0])))>12)(Dc=this.M9.Q,Dc[2].call(Dc[0],12-(F=this.Mt.Q,
F[1].call(F[0]))));},_Init:function(aArg){C.CJ._Init.call(this,aArg);C.B$._Init.
call(this.Uu={I:this},0);C.APM._Init.call(this.M8={I:this},0);C.JS._Init.call(this.
Mt={I:this},0);C.JS._Init.call(this.M9={I:this},0);C.ANg._Init.call(this.SK={I:this
},0);C.AbL._Init.call(this.AbL={I:this},0);this.__proto__=C.AID;var B;this.Gb.R(
A.z2(A.abg.AnU));this.Lg(A.z2(A.abg.AZv));this.Uu.G(Bke);this.Uu.Aj(true);this.Uu.
W(true);this.Uu.U(A.z2(A.abg.AZq));this.Uu.Bk(true);this.M8.G(A5M);this.M8.Aj(true
);this.M8.W(true);this.M8.U(A.z2(A.abg.A10));this.M8.Bk(true);this.Mt.G(Bkf);this.
Mt.Aj(true);this.Mt.W(true);this.Mt.U(A.z2(A.abg.A0g));this.Mt.Bk(false);this.Mt.
Hy(2);this.Mt.FS(6);this.Mt.Ng(A.z2(A.abg.AyZ));this.Mt.N5(A.z2(A.abg.FC));this.
M9.G(Yn);this.M9.Aj(true);this.M9.U(A.z2(A.abg.A2a));this.M9.Bk(true);this.M9.Hy(
0);this.M9.FS(12);this.M9.Ng(A.z2(A.abg.AyZ));this.M9.N5(A.z2(A.abg.FC));this.SK.
G(AEj);this.SK.An(true);this.SK.Aj(true);this.SK.Bk(false);this.SK.A3T(A.z2(A.abg.
AZt));this.J(this.Uu,0);this.J(this.M8,0);this.J(this.Mt,0);this.J(this.M9,0);this.
J(this.SK,0);this.Uu.AD([B=this.AbL,B.CA,B.CC]);this.Uu.Dk(this.AbL);this.M8.US([
B=A._GetAutoObject(A.Device.Device),B.XA,B.A6H]);this.M8.Alj([B=A._GetAutoObject(
A.Device.Device),B.AAS,B.AER]);this.Mt.AD([B=A._GetAutoObject(A.Device.Device),B.
Aib,B.Ai8]);this.M9.AD([B=A._GetAutoObject(A.Device.Device),B.Aic,B.Ai9]);this.SK.
DB(A.zW(A.abi.Aoo));this.SK.P3([B=A._GetAutoObject(A.Device.Device),B.Aib,B.Ai8]
);this.SK.Rr([B=A._GetAutoObject(A.Device.Device),B.Aic,B.Ai9]);this.Init(aArg);
},_Done:function(){this.__proto__=C.CJ;this.Uu._Done();this.M8._Done();this.Mt._Done(
);this.M9._Done();this.SK._Done();this.AbL._Done();C.CJ._Done.call(this);},_ReInit:
function(){C.CJ._ReInit.call(this);this.Uu._ReInit();this.M8._ReInit();this.Mt._ReInit(
);this.M9._ReInit();this.SK._ReInit();this.AbL._ReInit();this.Gb.R(A.z2(A.abg.AnU
));this.Lg(A.z2(A.abg.AZv));this.Uu.U(A.z2(A.abg.AZq));this.M8.U(A.z2(A.abg.A10)
);this.Mt.U(A.z2(A.abg.A0g));this.Mt.Ng(A.z2(A.abg.AyZ));this.Mt.N5(A.z2(A.abg.FC
));this.M9.U(A.z2(A.abg.A2a));this.M9.Ng(A.z2(A.abg.AyZ));this.M9.N5(A.z2(A.abg.
FC));this.SK.A3T(A.z2(A.abg.AZt));},_Mark:function(D){var B;C.CJ._Mark.call(this
,D);if((B=this.Uu)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Mt)._cycle!=D)B._Mark(B._cycle=D);if((B=this.M9)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.SK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AbL
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AutoAssignIdsSettingsScreen"
};C.ANe={Ur:null,W3:null,AcD:null,Init:function(aArg){this.A8(this.Ur);},Abo:function(
H){var Ab=(C.B_.isPrototypeOf(H)?H:null);if(!Ab)return;if(Ab===this.W3)this.BqW(
);else if(Ab===this.Ur)this.Btw(this);else throw new Error(Au3);A._GetAutoObject(
A.Device.Device).Co(0);},Btw:function(H){var B;var F;var TM=(C.Akl.isPrototypeOf(
B=(F=A._GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!TM){A.aa8("%s",Bkg);
return;}TM.AGF(this);},BqW:function(){A._GetAutoObject(A.Device.Helper).V.ACI(true
);A._GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.Device).Aq);A.
_GetAutoObject(A.Device.Device).A_(19,true,A._GetAutoObject(A.Device.Helper).V.VisualId.
toFixed(),2000,null);},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);
C.LK._Init.call(this.Ur={I:this},0);C.LK._Init.call(this.W3={I:this},0);C.AJm._Init.
call(this.AcD={I:this},0);this.__proto__=C.ANe;var B;this.G(AdL);this.Ur.G(RT);this.
Ur.An(true);this.Ur.U(A.z2(A.abg.A4H));this.Ur.Bk(true);this.W3.G(Ke);this.W3.An(
true);this.W3.U(A.z2(A.abg.AY8));this.W3.Bk(true);this.AcD.G(BI);this.AcD.U(A.z2(
A.abg.Azf));this.AcD.Bk(true);this.J(this.Ur,0);this.J(this.W3,0);this.J(this.AcD
,0);this.Ur.AV=[this,this.Abo];this.W3.AV=[this,this.Abo];this.AcD.A3u([B=A._GetAutoObject(
A.Device.Device),B.AoG,B.Aqj]);this.Init(aArg);},_Done:function(){this.__proto__=
C.OverlayMenu;this.Ur._Done();this.W3._Done();this.AcD._Done();C.OverlayMenu._Done.
call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this);this.Ur._ReInit(
);this.W3._ReInit();this.AcD._ReInit();this.Ur.U(A.z2(A.abg.A4H));this.W3.U(A.z2(
A.abg.AY8));this.AcD.U(A.z2(A.abg.Azf));},_Mark:function(D){var B;C.OverlayMenu.
_Mark.call(this,D);if((B=this.Ur)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W3)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AcD)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::MeasurementReadyOverlay"};C.AJm={Ah:function(Ae){C.AcJ.Ah.call(this
,Ae);var Gf=A.iF.CE;var G3=A.iF.Text;if(this.GY){Gf=A.iF.Text;G3=A.iF.Be;}if(!this.
Lr){this.Background.L(Gf);this.T.L(A.iF.AkT);}else if(this.QC){this.Background.L(
A.iF.A6);this.T.L(A.iF.Be);}else if(this.Kq){this.Background.L(A.iF.A6);this.T.L(
A.iF.Be);}else{this.Background.L(Gf);this.T.L(G3);}if(this.Aks){this.Ml.Ce(1);this.
Ml.L(A.iF.HB);}else{this.Ml.Ce(0);this.Ml.L(A.iF.Be);}},_Init:function(aArg){C.AcJ.
_Init.call(this,aArg);this.__proto__=C.AJm;},_className:"Application::DarkThemeMenuItemCheckBox"
};C.ANg={CP:null,Fp:null,Fb:null,Ah7:null,Rj:null,El:null,ANv:RS,Bh:function(aSize
){C.B_.Bh.call(this,aSize);var Gf=A.iF.CE;var G3=A.iF.Text;if(this.GY){Gf=A.iF.Be;
G3=A.iF.Text;}this.Background.L(Gf);this.T.L(G3);this.Background.G(A.aaN(this.Background.
M,aSize));this.T.G([10,aSize[1]-40,aSize[0]-10,aSize[1]]);},Ah:function(Ae){var F
,Dc;C.B_.Ah.call(this,Ae);this.Ah7.L(this.T.AM);this.Rj.L(this.T.AM);this.Rj.R(Bkh
);this.U(((this.ANv+A.z2(A.abg.Colon))+Cw)+A._GetAutoObject(A.Device.Helper).AlO(
840003123456789).toFixed());if(!!this.Fp&&!!this.Fb){var AW_=this.Rj.AlE([(this.
Rj.String.length-(F=this.Fb,F[1].call(F[0])))-(Dc=this.Fp,Dc[1].call(Dc[0])),0]);
var AYe=this.Rj.AlE([this.Rj.String.length-(F=this.Fb,F[1].call(F[0])),0]);var AxM=
this.Rj.Dh();this.El.G([AW_[0]-1,AxM[1],AYe[0]+1,AxM[3]]);}else this.El.G(this.Rj.
Dh());},DB:function(E){if(this.CP===E)return;this.CP=E;this.Ah7.At(E);},P3:function(
E){if(A.z_(this.Fp,E))return;if(!!this.Fp)A.zn([this,this.YP],this.Fp,0);this.Fp=
E;if(!!E)A.za([this,this.YP],E,0);if(!!E)A.ow([this,this.YP],this);},Rr:function(
E){if(A.z_(this.Fb,E))return;if(!!this.Fb)A.zn([this,this.YQ],this.Fb,0);this.Fb=
E;if(!!E)A.za([this,this.YQ],E,0);if(!!E)A.ow([this,this.YQ],this);},YQ:function(
H){this.Al();},YP:function(H){this.Al();},A3T:function(E){if(this.ANv===E)return;
this.ANv=E;this.Al();},_Init:function(aArg){C.B_._Init.call(this,aArg);A.abh.Am.
_Init.call(this.Ah7={I:this},0);A.abh.Text._Init.call(this.Rj={I:this},0);A.abh.
CT._Init.call(this.El={I:this},0);this.__proto__=C.ANg;this.G(KO);this.T.A0(0x11
);this.Ah7.G(Qh);this.Rj.G(Bki);this.El.G(Bkj);this.El.N7(2);this.El.L(A.iF.E1);
this.J(this.Ah7,0);this.J(this.Rj,0);this.J(this.El,0);this.Rj.Y(A.zW(A.eV.Au));
},_Done:function(){this.__proto__=C.B_;this.Ah7._Done();this.Rj._Done();this.El.
_Done();C.B_._Done.call(this);},_ReInit:function(){C.B_._ReInit.call(this);this.
Ah7._ReInit();this.Rj._ReInit();this.El._ReInit();},_Mark:function(D){var B;C.B_.
_Mark.call(this,D);if((B=this.CP)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Fp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fb)&&((B=B[0])._cycle!=
D))B._Mark(B._cycle=D);if((B=this.Ah7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Rj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.El)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemIdPreview"};C.AnimalSingleInfoScreen={HY:function(
H){C.Sj.HY.call(this,H);if(this.AhH)this.N.Cn(A.zW(A.abi.Av));else this.N.Cn(A.zW(
A.abi.AI2));this.N.De(A.zW(A.abi.Options));this.N.Ft(A.jm);this.N.Cd(A.jm);this.
N.Ch=[this,this.A4s];this.N.Cm=[this,this.XB];this.N.Atz(A.zW(A.eV.Az));this.N.Ao1(
A.zW(A.eV.Az));},Me:function(H){this.A9_(this);},NJ:function(H){this.Btr(this);}
,Aex:function(Tt,Tu,BpZ){if(A._GetAutoObject(A.Device.Device).DP===BpZ)A._GetAutoObject(
C.Cz).Ag$(Tt,Tu,true);else A._GetAutoObject(C.Cz).Ag$(Tt,Tu,false);},XB:function(
H){if((A._GetAutoObject(A.Device.Device).DP===3)&&!this.AhH){A._GetAutoObject(C.
Cz).Aew(A.z2(A.abg.Ba9),[this,this.Bg3]);A._GetAutoObject(C.Cz).IT();}this.Aex(A.
z2(A.abg.Rating),[this,this.AO2],3);this.Aex(A.z2(A.abg.AfZ),[this,this.AO4],2);
this.Aex(A.z2(A.abg.Temperature),[this,this.AO3],1);this.Aex(A.z2(A.abg.AbK),[this
,this.AO1],0);A._GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).V5(A.z2(A.abg.A0i
));A._GetAutoObject(A.Device.Device).Co(6);},_Init:function(aArg){C.Sj._Init.call(
this,aArg);this.__proto__=C.AnimalSingleInfoScreen;},_className:"Application::AnimalSingleInfoScreen"
};C.AnimalMultiInfoScreen={TY:null,Init:function(aArg){var B;A.za([this,this.Ad$
],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fd,B.Fg],0);A.ow([this,this.A$K],this
);A.ow([this,this.Rz],this);},CF:function(H){C.Sj.CF.call(this,H);A.ow([this,this.
A$Q],this);},ACP:function(H){C.Sj.ACP.call(this,H);if(!!this.KB)this.AlD(this.KB
,this.TY);},HY:function(H){C.Sj.HY.call(this,H);this.N.Cn(A.zW(A.abi.AMB));this.
N.De(A.zW(A.abi.AMC));if(this.AhH)this.N.AOv(0);else this.N.AOv(1);this.N.A3P(A.
_GetAutoObject(A.Device.Converter).Baa(A._GetAutoObject(A.Device.Device).DP));this.
N.Ft(A.jm);this.N.Cd(A.jm);this.N.Ch=[this,this.BeU];this.N.Cm=[this,this.Bg5];this.
N.Atz(A.zW(A.eV.Az));this.N.Ao1(A.zW(A.eV.Az));if(!A._GetAutoObject(A.Device.Device
).Aq.PG()){this.N.Jk.DF(100);this.N.Ch=null;}else this.N.Jk.DF(255);if(!A._GetAutoObject(
A.Device.Device).Aq.Cf()){this.N.Mr.DF(100);this.N.Cm=null;}else this.N.Mr.DF(255
);if(A._GetAutoObject(A.Device.Device).Aq.Cf()<=1){this.N.SE.DF(100);this.N.SF.DF(
100);}else{this.N.SE.DF(255);this.N.SF.DF(255);}},Me:function(H){if(A._GetAutoObject(
A.Device.Device).Aq.Cf()<=1)return;var KT=A._GetAutoObject(A.Device.Helper).V.Cu;
KT=KT+1;if(KT>=A._GetAutoObject(A.Device.Device).Aq.Cf())KT=0;A._GetAutoObject(A.
Device.Helper).HU(KT);},NJ:function(H){if(A._GetAutoObject(A.Device.Device).Aq.Cf(
)<=1)return;var KT=A._GetAutoObject(A.Device.Helper).V.Cu;KT=KT-1;if(KT<0)KT=A._GetAutoObject(
A.Device.Device).Aq.Cf()-1;A._GetAutoObject(A.Device.Helper).HU(KT);},AgF:function(
H){if(A._GetAutoObject(A.Device.Helper).V.Id>0)A._GetAutoObject(C.A1).BY(57);},BeU:
function(H){A._GetAutoObject(A.Device.Device).Co(10);},Bg5:function(H){this.A9_(
this);},Rz:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(
A.Device.Helper).LP());A.ow([this,this.A$Q],this);},A$K:function(H){if(!A._GetAutoObject(
A.Device.Device).Aq.Cf()){this.TY.W(true);if(!A._GetAutoObject(A.Device.Device).
Aq.PG()||!A._GetAutoObject(A.Device.Device).Aq.Filter)this.TY.R(A.z2(A.abg.AAE));
else if(!A._GetAutoObject(A.Device.Device).Aq.Filter.DJ(1,4)){if(A._GetAutoObject(
A.Device.Helper).Azo(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)this.TY.R(
A.z2(A.abg.AJQ));else this.TY.R(A.z2(A.abg.AJP));}else this.TY.R(A.z2(A.abg.AND)
);}else this.TY.W(false);},A$Q:function(H){var Bun=A._GetAutoObject(A.Device.Helper
).V.Id;var Bua=A._GetAutoObject(A.Device.Device).Aq.LM(0,Bun);if(!A._GetAutoObject(
A.Device.Device).Aq.Cf())A._GetAutoObject(A.Device.Helper).HU(-1);else if(Bua<0)
A._GetAutoObject(A.Device.Helper).HU(0);},Ad$:function(H){this.A$K(this);this.HY(
this);},_Init:function(aArg){C.Sj._Init.call(this,aArg);C.AiE._Init.call(this.TY={
I:this},0);this.__proto__=C.AnimalMultiInfoScreen;this.Dw(C.ALb);this.TY.G(FN);this.
J(this.TY,0);this.Init(aArg);},_Done:function(){this.__proto__=C.Sj;this.TY._Done(
);C.Sj._Done.call(this);},_ReInit:function(){C.Sj._ReInit.call(this);this.TY._ReInit(
);},_Mark:function(D){var B;C.Sj._Mark.call(this,D);if((B=this.TY)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalMultiInfoScreen"};C.AIh={PP:null,Us:
null,ZO:null,W6:null,Init:function(aArg){var B;var F;this.A8(this.PP);if(!!A._GetAutoObject(
C.A1).Q){var TM=(C.AnimalMultiInfoScreen.isPrototypeOf(B=(F=A._GetAutoObject(C.A1
).Q,F[1].call(F[0])))?B:null);if(!TM){A.aa8("%s",AUu);return;}else{if(TM.AhH)this.
PP.U(A.z2(A.abg.Bg));else this.PP.U(A.z2(A.abg.EL));var Awb=A._GetAutoObject(A.Device.
Device).Aq.Filter;if(!Awb||A._GetAutoObject(A.Device.Helper).Aoq(Awb))this.W6.An(
false);else if(!A._GetAutoObject(A.Device.Device).Aq.Cf()){this.Us.An(false);this.
PP.An(false);}}}},Abo:function(H){var Ab=(C.B_.isPrototypeOf(H)?H:null);if(!Ab)return;
A._GetAutoObject(A.Device.Device).Co(0);if(Ab===this.ZO)A._GetAutoObject(C.A1).BY(
9);else if(Ab===this.Us)A._GetAutoObject(A.Device.Device).Co(7);else if(Ab===this.
PP)this.BuL();else if(Ab===this.W6)this.AV9();else throw new Error(Au3);},BuL:function(
){var B;var F;var TM=(C.AnimalMultiInfoScreen.isPrototypeOf(B=(F=A._GetAutoObject(
C.A1).Q,F[1].call(F[0])))?B:null);if(!TM){A.aa8("%s",AUu);return;}TM.A4s(this);}
,AV9:function(){var B;var F;var TM=(C.AnimalMultiInfoScreen.isPrototypeOf(B=(F=A.
_GetAutoObject(C.A1).Q,F[1].call(F[0])))?B:null);if(!TM){A.aa8("%s",AUu);return;
}TM.Rz(this);},_Init:function(aArg){C.OverlayMenu._Init.call(this,aArg);C.LK._Init.
call(this.PP={I:this},0);C.LK._Init.call(this.Us={I:this},0);C.LK._Init.call(this.
ZO={I:this},0);C.LK._Init.call(this.W6={I:this},0);this.__proto__=C.AIh;this.G(AdK
);this.PP.G(Yl);this.PP.An(true);this.PP.U(A.z2(A.abg.EL));this.PP.Bk(true);this.
Us.G(RT);this.Us.An(true);this.Us.U(A.z2(A.abg.APE));this.Us.Bk(true);this.ZO.G(
Ke);this.ZO.U(A.z2(A.abg.AiG));this.ZO.Bk(true);this.W6.G(BI);this.W6.U(A.z2(A.abg.
AyF));this.W6.Bk(true);this.J(this.PP,0);this.J(this.Us,0);this.J(this.ZO,0);this.
J(this.W6,0);this.PP.AV=[this,this.Abo];this.Us.AV=[this,this.Abo];this.ZO.AV=[this
,this.Abo];this.W6.AV=[this,this.Abo];this.Init(aArg);},_Done:function(){this.__proto__=
C.OverlayMenu;this.PP._Done();this.Us._Done();this.ZO._Done();this.W6._Done();C.
OverlayMenu._Done.call(this);},_ReInit:function(){C.OverlayMenu._ReInit.call(this
);this.PP._ReInit();this.Us._ReInit();this.ZO._ReInit();this.W6._ReInit();this.PP.
U(A.z2(A.abg.EL));this.Us.U(A.z2(A.abg.APE));this.ZO.U(A.z2(A.abg.AiG));this.W6.
U(A.z2(A.abg.AyF));},_Mark:function(D){var B;C.OverlayMenu._Mark.call(this,D);if((
B=this.PP)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Us)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZO)._cycle!=D)B._Mark(B._cycle=D);if((B=this.W6)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalMultiInfoOverlayMenu"};C.MultiInfoActionsScreen={
_Init:function(aArg){C.H_._Init.call(this,aArg);this.__proto__=C.MultiInfoActionsScreen;
this.N.Cd(A.z2(A.abg.Bas));},_className:"Application::MultiInfoActionsScreen"};C.
Jl={SG:null,Ef:null,WC:null,Background:null,Am:null,HT:null,HS:null,Mj:0,AI:0,Ah:
function(Ae){var B;var F;A.Core.O.Ah.call(this,Ae);var FV=((Ae&0x10)===0x10);var
Gz=((Ae&0x40)===0x40);if(Gz){this.Background.L(A.iF.A6);this.Am.L(A.iF.Be);this.
DF(256);}else if(FV){this.Background.L(this.Mj);this.Am.L(A.iF.Text);this.DF(256
);}else{this.Background.L(this.Mj);this.Am.L(A.iF.Text);this.DF(128);}if(!this.AI
)this.Am.Ce(0);else if(this.AI>0){if(A.z_(this.SG,[B=A._GetAutoObject(A.Device.Device
),B.As$,B.Avv]))this.Am.Ce(2);else if(A.z_(this.SG,[B=A._GetAutoObject(A.Device.
Device),B.As_,B.Avu]))this.Am.Ce(3);else if(!!this.WC&&((F=this.WC,F[1].call(F[0
]))===1))this.Am.Ce(1);else this.Am.Ce(0);}else if(A.z_(this.SG,[B=A._GetAutoObject(
A.Device.Device),B.As$,B.Avv]))this.Am.Ce(6);else if(A.z_(this.SG,[B=A._GetAutoObject(
A.Device.Device),B.As_,B.Avu]))this.Am.Ce(7);else if(!!this.WC&&((F=this.WC,F[1].
call(F[0]))===1))this.Am.Ce(5);else this.Am.Ce(4);},Aed:function(H){this.JB(this
);},Aec:function(H){this.Jw(this);},JB:function(H){this.Bu(1);},Jw:function(H){this.
Bu(-1);},Bf9:function(E){if(A.z_(this.SG,E))return;if(!!this.SG)A.zn([this,this.
AXE],this.SG,0);this.SG=E;if(!!E)A.za([this,this.AXE],this.SG,0);A.ow([this,this.
AXE],this);},US:function(E){if(A.z_(this.Ef,E))return;if(!!this.Ef)A.zn([this,this.
Aeb],this.Ef,0);this.Ef=E;if(!!E)A.za([this,this.Aeb],this.Ef,0);if(!!E)A.ow([this
,this.Aeb],this);},AXE:function(H){var F;if(!!this.SG)this.Bu((F=this.SG,F[1].call(
F[0])));},Aeb:function(H){A.ow([this,this.BuU],this);},CU:function(E){if(this.Mj===
E)return;this.Mj=E;this.Al();},Bu:function(E){var F;if(this.AI===E)return;this.AI=
E;if(!!this.SG)(F=this.SG,F[2].call(F[0],E));this.Al();A.aat([this,this.SW,this.
Bu],0);},A3F:function(E){if(A.z_(this.WC,E))return;if(!!this.WC)A.zn([this,this.
Aeb],this.WC,0);this.WC=E;if(!!E)A.za([this,this.Aeb],this.WC,0);if(!!E)A.ow([this
,this.Aeb],this);},BuU:function(H){var F,Dc;if(!this.WC||!this.Ef)return;this.Bf9(
A._GetAutoObject(A.Device.Helper).A8I((F=this.WC,F[1].call(F[0])),(Dc=this.Ef,Dc[
1].call(Dc[0]))));this.Al();},SW:function(){return this.AI;},_Init:function(aArg
){A.Core.O._Init.call(this,aArg);A.abh.AH._Init.call(this.Background={I:this},0);
A.abh.Am._Init.call(this.Am={I:this},0);A.Core.B1._Init.call(this.HT={I:this},0);
A.Core.B1._Init.call(this.HS={I:this},0);this.__proto__=C.Jl;this.G(AEJ);this.Background.
AW(0x3F);this.Background.G(AEJ);this.Am.AW(0x3C);this.Am.G(AEJ);this.HT.Filter=4;
this.HS.Filter=5;this.Mj=A.iF.CE;this.J(this.Background,0);this.J(this.Am,0);this.
Am.At(A.zW(A.abi.AP0));this.HT.B2=[this,this.Aed];this.HS.B2=[this,this.Aec];},_Done:
function(){this.__proto__=A.Core.O;this.Background._Done();this.Am._Done();this.
HT._Done();this.HS._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.
O._ReInit.call(this);this.Background._ReInit();this.Am._ReInit();this.HT._ReInit(
);this.HS._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.SG)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ef)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.WC)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Am)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HS).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IncOrDecrementSelector"
};C.AHT={XB:function(H){var F;this.Aey();if(!!A._GetAutoObject(A.Device.Helper).
AKt((F=this.D3,F[1].call(F[0])),0,true))this.AY2(A.z2(A.abg.A1a),[this,this.Bg6]
,A._GetAutoObject(A.Device.Device).Aki);else A._GetAutoObject(C.Cz).Ag_(A.z2(A.abg.
A1a));A._GetAutoObject(C.Cz).IT();this.D0(A.z2(A.abg.LinkTransponder),[this,this.
AOB],8);this.D0(A.z2(A.abg.Oz),[this,this.Z7],9);this.D0(A.z2(A.abg.BjG),[this,this.
BgU],10);this.D0(A.z2(A.abg.App),[this,this.Ao_],3);this.D0(A.z2(A.abg.AfQ),[this
,this.Aio],2);A._GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).V5(A.z2(A.abg.Aeu
)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Co(6);},DW:function(H){},
Ack:function(){return C.Zc;},Acl:function(){return C.Acp;},Rz:function(H){var F;
A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).A0S((F=
this.D3,F[1].call(F[0]))));},HY:function(H){var F;C.Gi.HY.call(this,H);if(this.Ah6(
)===false){this.N.Cn(A._GetAutoObject(A.Device.Converter).Bac((F=this.D3,F[1].call(
F[0]))));this.N.Ch=[this,this.AE0];this.N.Ft(A.jm);}this.N.O4(false);this.N.O5(false
);},Aeg:function(){A._GetAutoObject(C.A1).BY(59);},Aef:function(){A._GetAutoObject(
C.A1).BY(60);},AXH:function(H){C.Gi.AXH.call(this,H);A.ow([this,this.A61],this);
},Bg6:function(H){A._GetAutoObject(A.Device.Device).Co(0);A._GetAutoObject(A.Device.
Device).Atd(!A._GetAutoObject(A.Device.Device).Aki);this.AlR(this);},AlR:function(
H){var F;var Bb=A._GetAutoObject(A.Device.Device).Aq.Filter.F$();A._GetAutoObject(
A.Device.Helper).BhC(Bb);if(A._GetAutoObject(A.Device.Device).Aki){var AWP=A._GetAutoObject(
A.Device.Helper).AKt((F=this.D3,F[1].call(F[0])),21600,true);Bb.CQ(AWP);}A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);},_Init:function(aArg){C.Gi._Init.call(this,aArg);this.
__proto__=C.AHT;var B;this.Et(A.z2(A.abg.ANx));this.Afw([B=A._GetAutoObject(A.Device.
Device),B.A2g,B.A6q]);},_className:"Application::ActionListScreen"};C.AHS={_Init:
function(aArg){C.Iz._Init.call(this,aArg);this.__proto__=C.AHS;},_className:"Application::ActionListFilterScreen"
};C.AHR={_Init:function(aArg){C.H_._Init.call(this,aArg);this.__proto__=C.AHR;this.
N.Cd(A.z2(A.abg.Bao));},_className:"Application::ActionListActionsScreen"};C.ALb={
Ih:null,I4:null,A7:null,LY:A.jm,Init:function(aArg){var B;A.za([this,this.MF],[B=
A._GetAutoObject(A.Device.Helper).V,B.A2R,B.A38],0);A.za([this,this.MF],[B=A._GetAutoObject(
A.Device.Device).Aq,B.Fd,B.Fg],0);},CZ:function(E){C.Ig.CZ.call(this,E);this.I4.
L(E);},EA:function(H){C.Ig.EA.call(this,H);var Awb=A._GetAutoObject(A.Device.Device
).Aq.Filter;if(!Awb||A._GetAutoObject(A.Device.Helper).Aoq(Awb))this.Ih.W(false);
else this.Ih.W(true);if(A._GetAutoObject(A.Device.Helper).V.Aob())this.AtM(((A._GetAutoObject(
A.Device.Helper).V.Cu+1).toFixed()+A5O)+A._GetAutoObject(A.Device.Device).Aq.Cf(
).toFixed());else this.AtM(A5P);},AtM:function(E){if(this.LY===E)return;this.LY=
E;this.I4.R(E);},_Init:function(aArg){C.Ig._Init.call(this,aArg);A.abh.Am._Init.
call(this.Ih={I:this},0);A.abh.Text._Init.call(this.I4={I:this},0);A.abh.DK._Init.
call(this.A7={I:this},0);this.__proto__=C.ALb;this.II.G(Bkk);this.CN.G(Bkl);this.
Ih.G(Bkm);this.Ih.L(A.iF.Text);this.I4.G(A5Q);this.I4.HV(2);this.I4.KH(true);this.
I4.A0(0x12);this.I4.R(A5R);this.A7.DL(AUq);this.A7.D5(AUr);this.A7.L(A.iF.A7);this.
J(this.Ih,0);this.J(this.I4,0);this.J(this.A7,0);this.Ih.At(A.zW(A.abi.Act));this.
I4.Y(A.zW(A.eV.Az));this.Init(aArg);},_Done:function(){this.__proto__=C.Ig;this.
Ih._Done();this.I4._Done();this.A7._Done();C.Ig._Done.call(this);},_ReInit:function(
){C.Ig._ReInit.call(this);this.Ih._ReInit();this.I4._ReInit();this.A7._ReInit();
},_Mark:function(D){var B;C.Ig._Mark.call(this,D);if((B=this.Ih)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.I4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderSelectedAnimalIdFilteredInfo"
};C.ApO={Text:null,Bh:function(aSize){C.Oc.Bh.call(this,aSize);this.Text.G(A.aaN(
this.Text.M,aSize));},Ah:function(Ae){var B;var F;C.Oc.Ah.call(this,Ae);if(!this.
AC||!this.Q)this.Text.R(JW);else this.Text.R(this.AC.GS((F=this.Q,F[1].call(F[0]
))));var Gz=((Ae&0x40)===0x40);if(Gz)this.Text.L(A.iF.Be);else this.Text.L(A.iF.
Text);},_Init:function(aArg){C.Oc._Init.call(this,aArg);A.abh.Text._Init.call(this.
Text={I:this},0);this.__proto__=C.ApO;this.Text.R(Qk);this.J(this.Text,0);this.Text.
Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.Oc;this.Text._Done();C.Oc._Done.
call(this);},_ReInit:function(){C.Oc._ReInit.call(this);this.Text._ReInit();},_Mark:
function(D){var B;C.Oc._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::TextSelector"};C.Aon={CP:null,Bh:function(aSize){C.
Oc.Bh.call(this,aSize);this.CP.G(A.aaN(this.CP.M,aSize));},Ah:function(Ae){var B;
var F;C.Oc.Ah.call(this,Ae);if(!this.AC||!this.Q)this.CP.At(null);else{this.CP.At(
this.AC.Azk(this.AC.DX((F=this.Q,F[1].call(F[0])))));this.CP.Ce(this.AC.Azm(this.
AC.DX((F=this.Q,F[1].call(F[0])))));}var Gz=((Ae&0x40)===0x40);if(Gz)this.CP.L(A.
iF.Be);else this.CP.L(A.iF.Text);},_Init:function(aArg){C.Oc._Init.call(this,aArg
);A.abh.Am._Init.call(this.CP={I:this},0);this.__proto__=C.Aon;this.G(AEJ);this.
CP.G(A5N);this.J(this.CP,0);this.CP.At(A.zW(A.abj.J6));},_Done:function(){this.__proto__=
C.Oc;this.CP._Done();C.Oc._Done.call(this);},_ReInit:function(){C.Oc._ReInit.call(
this);this.CP._ReInit();},_Mark:function(D){var B;C.Oc._Mark.call(this,D);if((B=
this.CP)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::IconSelector"};
C.Ar1={Uc:null,DirectionOfCountingToString:null,Ab8:null,Dx:function(){return 2;
},Dd:function(aIndex){if((aIndex<0)||(aIndex>=this.Dx()))return-1;return aIndex;
},GS:function(aIndex){if((aIndex<0)||(aIndex>=this.Dx()))return A.jm;return this.
DirectionOfCountingToString.Cb(aIndex);},DX:function(A2){return A2;},HP:function(
){return this.Dx()-1;},AD:function(E){var F;C.AC.AD.call(this,E);if(!!this.Uc)(F=
this.Uc,F[2].call(F[0],E));},Azk:function(aIndex){if((aIndex<0)||(aIndex>=this.Dx(
)))return null;return this.Ab8.ApP(aIndex);},Azm:function(aIndex){if((aIndex<0)||(
aIndex>=this.Dx()))return-1;return this.Ab8.ApQ(aIndex);},AWk:function(H){var F;
if(!!this.Uc)this.Q=(F=this.Uc,F[1].call(F[0]));else this.Q=0;A.aat([this,this.CA
,this.CC],0);},Z_:function(E){if(A.z_(this.Uc,E))return;if(!!this.Uc)A.zn([this,
this.AWk],this.Uc,0);this.Uc=E;if(!!this.Uc)A.za([this,this.AWk],this.Uc,0);A.ow([
this,this.AWk],this);},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.
DirectionOfCountingToString._Init.call(this.DirectionOfCountingToString={I:this}
,0);A.Device.Ab8._Init.call(this.Ab8={I:this},0);this.__proto__=C.Ar1;},_Done:function(
){this.__proto__=C.AC;this.DirectionOfCountingToString._Done();this.Ab8._Done();
C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.DirectionOfCountingToString.
_ReInit();this.Ab8._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((
B=this.Uc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.DirectionOfCountingToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ab8)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::DirectionOfCounting"};C.AH$={GN:null,Ef:null,AnimalIdGenerationMethodToString:
null,AbO:null,Dx:function(){return 4;},Dd:function(aIndex){var F;var A2=-1;if((aIndex<
0)||(aIndex>=this.Dx()))return-1;switch(aIndex){case 0:A2=0;break;case 1:A2=1;break;
case 2:A2=this.Br6((F=this.Ef,F[1].call(F[0])));break;case 3:A2=5;break;default:
throw new Error(Bkn+aIndex.toFixed());}return A2;},GS:function(aIndex){if((aIndex<
0)||(aIndex>=this.Dx()))return A.jm;return this.AnimalIdGenerationMethodToString.
Cb(this.Dd(aIndex));},DX:function(A2){var aIndex=-1;switch(A2){case 0:aIndex=0;break;
case 1:aIndex=1;break;case 2:case 3:case 4:aIndex=2;break;case 5:aIndex=3;break;
default:throw new Error(Bko+A2.toFixed());}return aIndex;},HP:function(){return this.
Dx()-1;},AD:function(E){var F;C.AC.AD.call(this,E);if(!!this.GN)(F=this.GN,F[2].
call(F[0],E));},Azk:function(aIndex){if((aIndex<0)||(aIndex>=this.Dx()))return null;
return this.AbO.ApP(this.Dd(aIndex));},Azm:function(aIndex){if((aIndex<0)||(aIndex>=
this.Dx()))return-1;return this.AbO.ApQ(this.Dd(aIndex));},AVQ:function(H){var F;
if(!!this.GN)this.Q=(F=this.GN,F[1].call(F[0]));else this.Q=0;A.aat([this,this.CA
,this.CC],0);},Be2:function(E){if(A.z_(this.GN,E))return;if(!!this.GN)A.zn([this
,this.AVQ],this.GN,0);this.GN=E;if(!!this.GN)A.za([this,this.AVQ],this.GN,0);A.ow([
this,this.AVQ],this);},US:function(E){if(A.z_(this.Ef,E))return;if(!!this.Ef)A.zn([
this,this.Aeb],this.Ef,0);this.Ef=E;if(!!this.Ef)A.za([this,this.Aeb],this.Ef,0);
A.ow([this,this.Aeb],this);},Aeb:function(H){A.ow([this,this.BqY],this);},Br6:function(
Ln){var VD=0;switch(Ln){case 0:VD=2;break;case 1:VD=3;break;case 2:VD=4;break;default:
throw new Error(Bkp+Ln.toFixed());}return VD;},BqY:function(H){var A9C=this.Dd(this.
DX(this.Q));if(this.Q!==A9C)this.AD(A9C);A.vv(this,0);},_Init:function(aArg){C.AC.
_Init.call(this,aArg);A.Device.AnimalIdGenerationMethodToString._Init.call(this.
AnimalIdGenerationMethodToString={I:this},0);A.Device.AbO._Init.call(this.AbO={I:
this},0);this.__proto__=C.AH$;},_Done:function(){this.__proto__=C.AC;this.AnimalIdGenerationMethodToString.
_Done();this.AbO._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.
call(this);this.AnimalIdGenerationMethodToString._ReInit();this.AbO._ReInit();},
_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.GN)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ef)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.AnimalIdGenerationMethodToString)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AbO)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalIdGeneration"
};C.ACL={Fa:null,Y6:null,Q:null,EU:null,EN:null,Ha:null,UN:null,AX:null,Hq:null,
Ji:null,A3:0,AI:0,Ajh:0,Init:function(aArg){var B;A.za([this,this.A9S],[B=A._GetAutoObject(
A.Device.Device),B.Alc,B.Ama],0);},Ah:function(Ae){C.DY.Ah.call(this,Ae);if(this.
A3===1){if(this.GY){this.AX.Ff(A.iF.CE);this.Ha.CU(A.iF.CE);this.UN.CU(A.iF.CE);
this.Background.L(A.iF.CR);this.T.L(A.iF.Text);}else{this.AX.Ff(A.iF.CR);this.Ha.
CU(A.iF.CR);this.UN.CU(A.iF.CR);this.Background.L(A.iF.CE);this.T.L(A.iF.Text);}
}else{if(this.GY){this.AX.Ff(A.iF.CE);this.Ha.CU(A.iF.CE);this.UN.CU(A.iF.CE);}else{
this.AX.Ff(A.iF.CR);this.Ha.CU(A.iF.CR);this.UN.CU(A.iF.CR);}this.A8(null);}},JE:
function(H){C.DY.JE.call(this,H);if(!this.A3)this.GC(this);else this.Gy(this);},
DD:function(H){var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(
F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(
F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(
F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(
null);(F=this.N,F[1].call(F[0])).Cd(A.jm);(F=this.N,F[1].call(F[0])).Cm=null;}break;
default:this.Fa.AiD((F=this.N,F[1].call(F[0])));}},GC:function(H){this.Ed(1);},Gy:
function(H){this.Ed(0);},Ed:function(EI){var F;if(!this.A3&&!!this.N)this.Fa.Ahn((
F=this.N,F[1].call(F[0])));this.A3=EI;if(this.A3<0)this.A3=0;else if(this.A3>1)this.
A3=1;switch(this.A3){case 0:this.A8(null);break;case 1:{if(this.AX.A2y())this.A8(
this.AX);else this.A8(this.UN);if(!this.AI)this.AX.RB(2);else this.AX.RB(7);}break;
default:throw new Error(Aqi+this.A3.toFixed());}this.DD(this);this.Al();},AD:function(
E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.C1],this.Q,0);this.Q=E;if(
!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1],this);},C1:function(H){var
F;if(!!this.Q){this.Bu((F=this.Q,F[1].call(F[0])));A.aat([this,this.SW,this.Bu],
0);}},Bu:function(E){var F;if(this.AI===E)return;this.AI=E;if(!!this.Q)(F=this.Q
,F[2].call(F[0],this.AI));},NJ:function(H){this.AxE(2);},Me:function(H){this.AxE(
7);},AxE:function(Ge){var B;var Awc=(A.Core.O.isPrototypeOf(B=this.A6)?B:null);if(
!!Awc){var AwX=(A.Core.O.isPrototypeOf(B=this.Q8(Awc,Ge,0x15))?B:null);if(!!AwX){
this.A8(AwX);return true;}}return false;},Amu:function(H){A.ow([this,this.A9S],this
);},AYo:function(H){var B;var F;if(!this.Hq.GN){this.Ji.Z_(null);return;}switch((
F=this.Hq.GN,F[1].call(F[0]))){case 0:case 1:this.Ji.Z_(null);break;case 3:this.
Ji.Z_([B=A._GetAutoObject(A.Device.Device),B.ANT,B.AUM]);break;case 2:this.Ji.Z_([
B=A._GetAutoObject(A.Device.Device),B.ANU,B.AUN]);break;case 4:this.Ji.Z_([B=A._GetAutoObject(
A.Device.Device),B.As6,B.Avr]);break;case 5:this.Ji.Z_([B=A._GetAutoObject(A.Device.
Device),B.As6,B.Avr]);break;default:throw new Error(Bkq+(F=this.Hq.GN,F[1].call(
F[0])).toFixed());}},A9S:function(H){var F;if(!this.Hq.GN)return;A.ow([this,this.
AYo],this);var AqW=false;switch((F=this.Hq.GN,F[1].call(F[0]))){case 3:case 2:case
5:case 4:{AqW=true;this.AX.A4o(-1);}break;case 0:case 1:{AqW=false;this.AX.A4o(A.
_GetAutoObject(A.Device.Device).Fp);}break;default:throw new Error(Avc+(F=this.Hq.
GN,F[1].call(F[0])).toFixed());}this.AX.An(AqW);this.Ha.An(AqW);this.Ha.W(AqW);if(((
F=this.Hq.GN,F[1].call(F[0]))!==this.Ajh)||(AqW===false)){var BR=this.AI;this.Bu(
A._GetAutoObject(A.Device.Helper).AZe((F=this.Hq.GN,F[1].call(F[0])),A._GetAutoObject(
A.Device.Helper).V));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AI));A.aat(this.Q,0);}}if(A._GetAutoObject(A.Device.Helper).Bcy((F=this.Hq.GN,F[
1].call(F[0])),A._GetAutoObject(A.Device.Helper).V))this.AX.JO(A._GetAutoObject(
A.Device.Device).Fp);else this.AX.JO(0);this.Ajh=(F=this.Hq.GN,F[1].call(F[0]));
},A3n:function(E){var B;if(this.Y6===E)return;if(!!this.Y6){A.zn([this,this.Amu]
,[B=this.Y6,B.XA,B.J9],0);A.zn([this,this.Amu],[B=this.Y6,B.AoH,B.O3],0);A.zn([this
,this.Amu],[B=this.Y6,B.Aid,B.Nf],0);this.Hq.US(null);}this.Y6=E;if(!!E){A.za([this
,this.Amu],[B=this.Y6,B.XA,B.J9],0);A.za([this,this.Amu],[B=this.Y6,B.AoH,B.O3],
0);A.za([this,this.Amu],[B=this.Y6,B.Aid,B.Nf],0);this.Hq.US([B=this.Y6,B.XA,B.J9
]);}if(!!E)A.ow([this,this.Amu],this);},SW:function(){return this.AI;},_Init:function(
aArg){C.DY._Init.call(this,aArg);A.Core.B1._Init.call(this.EU={I:this},0);A.Core.
B1._Init.call(this.EN={I:this},0);C.Aon._Init.call(this.Ha={I:this},0);C.Aon._Init.
call(this.UN={I:this},0);C.AsO._Init.call(this.AX={I:this},0);C.AH$._Init.call(this.
Hq={I:this},0);C.Ar1._Init.call(this.Ji={I:this},0);this.__proto__=C.ACL;var B;this.
G(Yk);this.T.An(false);this.T.R(Aqb);this.T.L(A.iF.Be);this.EU.Filter=6;this.EN.
Filter=7;this.Ha.G(Bkr);this.Ha.An(false);this.UN.G(Bks);this.AX.G(Bkt);this.AX.
An(false);this.J(this.Ha,0);this.J(this.UN,0);this.J(this.AX,0);this.Fa=A._NewObject(
C.Aci,0);this.EU.B2=[this,this.NJ];this.EN.B2=[this,this.Me];this.Ha.Dk(this.Ji);
this.Ha.AD([B=this.Ji,B.CA,B.CC]);this.UN.Dk(this.Hq);this.UN.AD([B=this.Hq,B.CA
,B.CC]);this.AX.AD([this,this.SW,this.Bu]);this.Hq.Be2([B=A._GetAutoObject(A.Device.
Device),B.Alc,B.Ama]);this.Init(aArg);},_Done:function(){this.__proto__=C.DY;this.
EU._Done();this.EN._Done();this.Ha._Done();this.UN._Done();this.AX._Done();this.
Hq._Done();this.Ji._Done();C.DY._Done.call(this);},_ReInit:function(){C.DY._ReInit.
call(this);this.EU._ReInit();this.EN._ReInit();this.Ha._ReInit();this.UN._ReInit(
);this.AX._ReInit();this.Hq._ReInit();this.Ji._ReInit();},_Mark:function(D){var B;
C.DY._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.Y6)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))
B._Mark(B._cycle=D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Ha)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.UN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Hq)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ji)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDGeneration"};C.Gm={Awt:null
,EU:null,EN:null,Gj:null,Fo:null,El:null,Mn:0,AIM:0,Ayw:0,S0:0,A5w:-1,AIL:false,
Init:function(aArg){A.ow([this,this.AVd],this);},Ah:function(Ae){A.Core.O.Ah.call(
this,Ae);this.El.W(this.AIL);this.El.G(A.vS(this.WK(this.Ayw).M,this.WK((this.Ayw+
this.AIM)-1).M));},NJ:function(H){var DI=(A.Core.B1.isPrototypeOf(H)?H:null);var
AV7=this.A$d(2);if(AV7===false)DI.PF=true;},Me:function(H){var DI=(A.Core.B1.isPrototypeOf(
H)?H:null);var AV7=this.A$d(7);if(AV7===false)DI.PF=true;},A$d:function(Ge){var B;
var Eb=(C.Ds.isPrototypeOf(B=this.A6)?B:null);Eb=this.A8K(Eb,Ge,true);if(!!Eb){this.
A8(Eb);this.Awt=(C.Ds.isPrototypeOf(B=this.A6)?B:null);return true;}return false;
},Abn:function(H){A.aa8("%s",Ai1);},Gd:function(s){this.Abn(s);},Ff:function(E){
if(this.Mn===E)return;this.Mn=E;this.Fo.CU(E);this.Gj.CU(E);},RB:function(Ge){var
B;switch(Ge){case 2:this.A8(this.Gj);break;case 7:this.A8(this.Fo);break;default:
A.aa8("%s%e",Bku,Ge);}this.Awt=(C.Ds.isPrototypeOf(B=this.A6)?B:null);},Lw:function(
H){},AVd:function(s){this.Lw(s);},AA_:function(E){if(this.AIL===E)return;this.AIL=
E;this.Al();},A3t:function(E){if(this.AIM===E)return;this.AIM=E;this.Al();},A3s:
function(E){if(this.Ayw===E)return;this.Ayw=E;this.Al();},WK:function(I6){var BS=
null;switch(I6){case-1:case 0:BS=this.Fo;break;case 1:BS=this.Gj;break;default:A.
aa8("%s",Af5);}return BS;},JO:function(E){if(this.S0===E)return;this.S0=E;this.Akd(
);},Akd:function(){A.aa8("%s",Ai1);},A8K:function(AaW,Ge,Lr){var B;if(!!AaW){var
Bb;if(Lr)Bb=0x11;else Bb=0x0;switch(Ge){case 2:AaW=(C.Ds.isPrototypeOf(B=this.An4(
AaW,Bb))?B:null);break;case 7:AaW=(C.Ds.isPrototypeOf(B=this.Zw(AaW,Bb))?B:null);
break;default:throw new Error(Bkv);}}return AaW;},A4o:function(E){if(this.A5w===
E)return;this.A5w=E;var Eb=this.Fo;var AWs;while(!!Eb){AWs=!!E;Eb.An(AWs);Eb.W(AWs
);if(Eb===this.Awt)this.A8(Eb);Eb=this.A8K(Eb,2,false);if(E>0)E=E-1;}},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);A.Core.B1._Init.call(this.EU={I:this},0);A.
Core.B1._Init.call(this.EN={I:this},0);C.Ds._Init.call(this.Gj={I:this},0);C.Ds.
_Init.call(this.Fo={I:this},0);A.abh.CT._Init.call(this.El={I:this},0);this.__proto__=
C.Gm;this.G(Bkw);this.EU.Filter=6;this.EN.Filter=7;this.Mn=A.iF.CE;this.Gj.G(EH);
this.Fo.G(A5S);this.El.G(Bkx);this.El.N7(2);this.El.L(A.iF.E1);this.J(this.Gj,0);
this.J(this.Fo,0);this.J(this.El,0);this.EU.B2=[this,this.NJ];this.EU.Ea=[this,this.
NJ];this.EN.B2=[this,this.Me];this.EN.Ea=[this,this.Me];this.Awt=this.Fo;this.Gj.
C_=[this,this.Gd];this.Fo.C_=[this,this.Gd];this.Init(aArg);},_Done:function(){this.
__proto__=A.Core.O;this.EU._Done();this.EN._Done();this.Gj._Done();this.Fo._Done(
);this.El._Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.
call(this);this.EU._ReInit();this.EN._ReInit();this.Gj._ReInit();this.Fo._ReInit(
);this.El._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Awt)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EU)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gj)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Fo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.El).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber"};C.AMH={Dg:
null,CI:null,Cc:null,Ff:function(E){if(this.Mn===E)return;C.Hb.Ff.call(this,E);this.
Cc.CU(E);this.CI.CU(E);this.Dg.CU(E);},WK:function(I6){var BS=null;switch(I6){case-
1:case 0:BS=this.Fo;break;case 1:BS=this.Cc;break;case 2:BS=this.CI;break;case 3:
BS=this.Dg;break;case 4:BS=this.Gj;break;default:A.aa8("%s",Af5);}return BS;},_Init:
function(aArg){C.Hb._Init.call(this,aArg);C.Ds._Init.call(this.Dg={I:this},0);C.
Ds._Init.call(this.CI={I:this},0);C.Ds._Init.call(this.Cc={I:this},0);this.__proto__=
C.AMH;this.G(Bky);this.Gj.G(Aqh);this.Dg.G(A5T);this.CI.G(A5U);this.Cc.G(A5V);this.
Fo.G(Bkz);this.J(this.Dg,-2);this.J(this.CI,-2);this.J(this.Cc,-2);this.Dg.C_=[this
,this.Gd];this.CI.C_=[this,this.Gd];this.Cc.C_=[this,this.Gd];},_Done:function(){
this.__proto__=C.Hb;this.Dg._Done();this.CI._Done();this.Cc._Done();C.Hb._Done.call(
this);},_ReInit:function(){C.Hb._ReInit.call(this);this.Dg._ReInit();this.CI._ReInit(
);this.Cc._ReInit();},_Mark:function(D){var B;C.Hb._Mark.call(this,D);if((B=this.
Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber5"
};C.AQv={XZ:null,AaD:null,AQu:0,CF:function(H){this.AaD.An(true);},Fc:function(H
){this.AaD.An(false);},BgS:function(E){if(this.AQu===E)return;this.AQu=E;this.XZ.
R((((A.z2(A.abg.A5s)+AaP)+E.toFixed())+BkA)+A.z2(A.abg.Kz));},BeO:function(){return this.
AQu;},BtN:function(H){A._GetAutoObject(C.A1).BY(3);A._GetAutoObject(A.Device.Device
).Ali(1);},_Init:function(aArg){C.Wg._Init.call(this,aArg);C.CG._Init.call(this.
XZ={I:this},0);A.abm.FE._Init.call(this.AaD={I:this},0);this.__proto__=C.AQv;this.
AcE.G(BkB);this.S9.R(A.jm);this.XZ.G(BkC);this.XZ.R(A.z2(A.abg.A5s)+BkD);this.XZ.
L(A.iF.Text);this.AaD.IG(1);this.AaD.FK(5000);this.AaD.BX=100;this.J(this.XZ,0);
this.XZ.Y(A.zW(A.eV.Au));this.XZ.By(A.zW(A.eV.Az));this.XZ.C5(A.zW(A.eV.Cr));this.
AaD.Rn=[this,this.BtN];this.AaD.Q=[this,this.BeO,this.BgS];},_Done:function(){this.
__proto__=C.Wg;this.XZ._Done();this.AaD._Done();C.Wg._Done.call(this);},_ReInit:
function(){C.Wg._ReInit.call(this);this.XZ._ReInit();this.AaD._ReInit();},_Mark:
function(D){var B;C.Wg._Mark.call(this,D);if((B=this.XZ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaD)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::UpdateScreen"
};C.ANr={Ko:null,LT:null,A9s:false,Init:function(aArg){this.A8(this.GX);},EY:function(
H){var B;if(!!this.Ko)this.Ko.EY(this);C.UQ.EY.call(this,H);},Aee:function(H){var
B;if(!!this.Ko)this.Ko.Aee(this);C.UQ.Aee.call(this,H);},CF:function(H){var B;if(
!this.A9s){this.A9s=true;A.ow([this,this.AXY],this);}else if(!this.Ko){this.Ko=A.
_NewObject(C.ANt,0);this.Ko.A3D([this,this.Axu]);this.Lw(this);this.Ko.Lw(this);
if(!A._GetAutoObject(A.Device.Helper).V.NaisIdMother)this.EY(this);else C.UQ.CF.
call(this,H);}else C.UQ.CF.call(this,H);},Anv:function(H){var B;if(!!this.Ko)this.
Ko.Anv(this);},Axu:function(H){var B;var F;this.Lw(this);this.Ko.Lw(this);A.ow([
this,this.Vw],this);var A88=this.K9;this.Atj(A._GetAutoObject(A.Device.Helper).AhE(
A._GetAutoObject(A.Device.Helper).V.AnimalType));A._GetAutoObject(A.Device.Helper
).AQt(A._GetAutoObject(A.Device.Helper).V,A._GetAutoObject(A.Device.Device).EartagNrAssignmentMode
,A88);if(A88)A._GetAutoObject(A.Device.Helper).V.Nf(A._GetAutoObject(A.Device.Helper
).V.NaisId);A._GetAutoObject(A.Device.Helper).V.XK(A._GetAutoObject(A.Device.Helper
).AZe((F=this.Do.Hq.GN,F[1].call(F[0])),A._GetAutoObject(A.Device.Helper).V));this.
Px(this.GX);},AXY:function(H){A._GetAutoObject(C.A1).BY(90);},_Init:function(aArg
){C.UQ._Init.call(this,aArg);C.AfM._Init.call(this.LT={I:this},0);this.__proto__=
C.ANr;var B;this.LT.G(Af2);this.LT.Aj(true);this.LT.U(A.z2(A.abg.AZ5));this.J(this.
LT,-8);this.Lh(this.M$,-1);this.LT.He([this,this.Es,this.HW]);this.LT.AD([B=A._GetAutoObject(
A.Device.Helper).V,B.AN2,B.Alq]);this.Init(aArg);},_Done:function(){this.__proto__=
C.UQ;this.LT._Done();C.UQ._Done.call(this);},_ReInit:function(){C.UQ._ReInit.call(
this);this.LT._ReInit();},_Mark:function(D){var B;C.UQ._Mark.call(this,D);if((B=
this.Ko)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.LT)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NewAnimalCalvingDataScreen"};C.AAa={AeQ:null,AeR:null
,MY:null,MX:null,ED:null,FD:null,D9:null,Dg:null,CI:null,Cc:null,Ff:function(E){
if(this.Mn===E)return;C.KC.Ff.call(this,E);this.Cc.CU(E);this.CI.CU(E);this.Dg.CU(
E);this.D9.CU(E);this.FD.CU(E);this.ED.CU(E);this.MX.CU(E);this.MY.CU(E);this.AeR.
CU(E);this.AeQ.CU(E);},WK:function(I6){var BS=null;switch(I6){case-1:case 0:BS=this.
Fo;break;case 1:BS=this.Cc;break;case 2:BS=this.CI;break;case 3:BS=this.Dg;break;
case 4:BS=this.D9;break;case 5:BS=this.FD;break;case 6:BS=this.ED;break;case 7:BS=
this.MX;break;case 8:BS=this.MY;break;case 9:BS=this.AeR;break;case 10:BS=this.AeQ;
break;case 11:BS=this.Gj;break;default:A.aa8("%s",Af5);}return BS;},_Init:function(
aArg){C.KC._Init.call(this,aArg);C.Ds._Init.call(this.AeQ={I:this},0);C.Ds._Init.
call(this.AeR={I:this},0);C.Ds._Init.call(this.MY={I:this},0);C.Ds._Init.call(this.
MX={I:this},0);C.Ds._Init.call(this.ED={I:this},0);C.Ds._Init.call(this.FD={I:this
},0);C.Ds._Init.call(this.D9={I:this},0);C.Ds._Init.call(this.Dg={I:this},0);C.Ds.
_Init.call(this.CI={I:this},0);C.Ds._Init.call(this.Cc={I:this},0);this.__proto__=
C.AAa;this.G(BkE);this.Gj.G(AEK);this.AeQ.G(Avk);this.AeR.G(AUv);this.MY.G(AUw);
this.MX.G(AUx);this.ED.G(AUy);this.FD.G(AUz);this.D9.G(AUA);this.Dg.G(A5W);this.
CI.G(AUB);this.Cc.G(BkF);this.Fo.G(BkG);this.J(this.AeQ,-2);this.J(this.AeR,-2);
this.J(this.MY,-2);this.J(this.MX,-2);this.J(this.ED,-2);this.J(this.FD,-2);this.
J(this.D9,-2);this.J(this.Dg,-2);this.J(this.CI,-2);this.J(this.Cc,-2);this.AeQ.
C_=[this,this.Gd];this.AeR.C_=[this,this.Gd];this.MY.C_=[this,this.Gd];this.MX.C_=[
this,this.Gd];this.ED.C_=[this,this.Gd];this.FD.C_=[this,this.Gd];this.D9.C_=[this
,this.Gd];this.Dg.C_=[this,this.Gd];this.CI.C_=[this,this.Gd];this.Cc.C_=[this,this.
Gd];},_Done:function(){this.__proto__=C.KC;this.AeQ._Done();this.AeR._Done();this.
MY._Done();this.MX._Done();this.ED._Done();this.FD._Done();this.D9._Done();this.
Dg._Done();this.CI._Done();this.Cc._Done();C.KC._Done.call(this);},_ReInit:function(
){C.KC._ReInit.call(this);this.AeQ._ReInit();this.AeR._ReInit();this.MY._ReInit(
);this.MX._ReInit();this.ED._ReInit();this.FD._ReInit();this.D9._ReInit();this.Dg.
_ReInit();this.CI._ReInit();this.Cc._ReInit();},_Mark:function(D){var B;C.KC._Mark.
call(this,D);if((B=this.AeQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
MX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ED)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D9)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber12"
};C.Hb={Q:null,AI:0,Ah:function(Ae){C.Gm.Ah.call(this,Ae);this.Akd();},Abn:function(
H){var B;var F;var Kl=A.jm;var BS=this.Gj;while(!!BS){if(BS.FC>0)Kl=Kl+BS.FC.toFixed(
);else Kl=Kl+String.fromCharCode(0x30);BS=(C.Ds.isPrototypeOf(B=this.Zw(BS,0x11)
)?B:null);}var BR=this.AI;this.Bu(A.vQ(Kl,-1,10));if(this.AI!==BR){if(!!this.Q)(
F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Lw:function(H){},Akd:function(
){var B;var F;if(!!this.Q){var Eb=this.Fo;var Abt=this.S0;var A2=(F=this.Q,F[1].
call(F[0]));while(!!Eb){if(A2>0){Eb.Mx(A2%10);A2=(A2/10)|0;}else if(Abt>0)Eb.Mx(
0);else Eb.Mx(-1);Eb=(C.Ds.isPrototypeOf(B=this.An4(Eb,0x11))?B:null);Abt=Abt-1;
}}},C1:function(H){var F;if(!!this.Q)this.Bu((F=this.Q,F[1].call(F[0])));},AD:function(
E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.C1],this.Q,0);this.Q=E;if(
!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1],this);},Bu:function(E){if(
this.AI===E)return;this.AI=E;this.Al();},_Init:function(aArg){C.Gm._Init.call(this
,aArg);this.__proto__=C.Hb;},_Mark:function(D){var B;C.Gm._Mark.call(this,D);if((
B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:"Application::InputNumber2_32"
};C.KC={AI:0,Q:null,Ah:function(Ae){C.Gm.Ah.call(this,Ae);this.Akd();},Abn:function(
H){var B;var F;var Kl=A.jm;var BS=this.Gj;while(!!BS){if(BS.FC>0)Kl=Kl+BS.FC.toFixed(
);else Kl=Kl+String.fromCharCode(0x30);BS=(C.Ds.isPrototypeOf(B=this.Zw(BS,0x11)
)?B:null);}var BR=this.AI;this.Bu(A.aa2(Kl,0,10));if(this.AI!==BR){if(!!this.Q)(
F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Lw:function(H){},Akd:function(
){var B;var F;if(!!this.Q){var Eb=this.Fo;var Abt=this.S0;var A2=(F=this.Q,F[1].
call(F[0]));while(!!Eb){if(A2>0){Eb.Mx((A2%10)|0);A2=Math.trunc(A2/10);}else if(
Abt>0)Eb.Mx(0);else Eb.Mx(-1);Eb=(C.Ds.isPrototypeOf(B=this.An4(Eb,0x11))?B:null
);Abt=Abt-1;}}},C1:function(H){var F;if(!!this.Q)this.Bu((F=this.Q,F[1].call(F[0
])));},AD:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.C1],this.
Q,0);this.Q=E;if(!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1],this);}
,Bu:function(E){if(this.AI===E)return;this.AI=E;this.Al();},_Init:function(aArg){
C.Gm._Init.call(this,aArg);this.__proto__=C.KC;},_Mark:function(D){var B;C.Gm._Mark.
call(this,D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::InputNumber2_64"};C.EartagNrAssignmentMode={EartagNrAssignmentModeToString:
null,Dx:function(){return 2;},Dd:function(aIndex){if((aIndex<0)||(aIndex>=2))return-
1;return aIndex;},GS:function(aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.
EartagNrAssignmentModeToString.Cb(aIndex);},DX:function(A2){return A2;},HP:function(
){return 1;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.EartagNrAssignmentModeToString.
_Init.call(this.EartagNrAssignmentModeToString={I:this},0);this.__proto__=C.EartagNrAssignmentMode;
},_Done:function(){this.__proto__=C.AC;this.EartagNrAssignmentModeToString._Done(
);C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.EartagNrAssignmentModeToString.
_ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=this.EartagNrAssignmentModeToString
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EartagNrAssignmentMode"
};C.AsO={D9:null,Dg:null,CI:null,Cc:null,Ff:function(E){if(this.Mn===E)return;C.
Hb.Ff.call(this,E);this.Cc.CU(E);this.CI.CU(E);this.Dg.CU(E);this.D9.CU(E);},WK:
function(I6){var BS=null;switch(I6){case-1:case 0:BS=this.Fo;break;case 1:BS=this.
Cc;break;case 2:BS=this.CI;break;case 3:BS=this.Dg;break;case 4:BS=this.D9;break;
case 5:BS=this.Gj;break;default:A.aa8("%s",Af5);}return BS;},_Init:function(aArg
){C.Hb._Init.call(this,aArg);C.Ds._Init.call(this.D9={I:this},0);C.Ds._Init.call(
this.Dg={I:this},0);C.Ds._Init.call(this.CI={I:this},0);C.Ds._Init.call(this.Cc={
I:this},0);this.__proto__=C.AsO;this.G(Au6);this.Gj.G(ADX);this.D9.G(ADY);this.Dg.
G(ADZ);this.CI.G(AD0);this.Cc.G(AD1);this.Fo.G(AD2);this.El.G(A5X);this.J(this.D9
,-2);this.J(this.Dg,-2);this.J(this.CI,-2);this.J(this.Cc,-2);this.D9.C_=[this,this.
Gd];this.Dg.C_=[this,this.Gd];this.CI.C_=[this,this.Gd];this.Cc.C_=[this,this.Gd
];},_Done:function(){this.__proto__=C.Hb;this.D9._Done();this.Dg._Done();this.CI.
_Done();this.Cc._Done();C.Hb._Done.call(this);},_ReInit:function(){C.Hb._ReInit.
call(this);this.D9._ReInit();this.Dg._ReInit();this.CI._ReInit();this.Cc._ReInit(
);},_Mark:function(D){var B;C.Hb._Mark.call(this,D);if((B=this.D9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CI)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::InputNumber6"};C.APK={AttributeSet:null,Ah:function(Ae){var B;C.B$.
Ah.call(this,Ae);var FV=((Ae&0x10)===0x10);var Fx=((Ae&0x20)===0x20);var Gz=((Ae&
0x40)===0x40);var Fw=this.Bi.Bw;var Gf=A.iF.CE;var G3=A.iF.Text;if(this.GY){Gf=A.
iF.Be;G3=A.iF.Text;}if(!FV){this.Background.L(A.iF.CR);this.T.L(A.iF.CE);this.AttributeSet.
Afs(A.iF.CE);}else if(Fw){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);this.AttributeSet.
Afs(A.iF.Be);}else if(Gz){this.Background.L(A.iF.A6);this.T.L(A.iF.Be);this.AttributeSet.
Afs(A.iF.Be);}else if(Fx){this.Background.L(A.iF.AkT);this.T.L(A.iF.Be);this.AttributeSet.
Afs(A.iF.Be);}else{this.Background.L(Gf);this.T.L(G3);this.AttributeSet.Afs(G3);
}this.Lr=FV;this.Kq=Fx;this.QC=Fw;this.Aws=Gz;},Init:function(aArg){this.AttributeSet.
Bh0(0);this.AttributeSet.Bh1(1);this.AttributeSet.Bh2(4);},GH:function(H){var B;
var Fy=this.Di.IE;var Ck=(A.abh.ArP.isPrototypeOf(B=this.Di.B5)?B:null);Ck.A3p(this.
AttributeSet);Ck.A0(0x12);if(!Ck)return;if(!!this.AC)Ck.R(this.BrX(this.AC.GS(Fy
)));else Ck.R(JW);Ck.G(A.aaN(Ck.M,[this.Di.Ux,(B=this.Di.M)[3]-B[1]]));},BrX:function(
Bqm){var Axe=Bqm;Axe=A._GetAutoObject(A.Device.Helper).Nk(Axe,BkH,BkI);Axe=A._GetAutoObject(
A.Device.Helper).Nk(Axe,BkJ,BkK);return BkL+Axe;},_Init:function(aArg){C.B$._Init.
call(this,aArg);A.Graphics.AttrSet._Init.call(this.AttributeSet={I:this},0);this.
__proto__=C.APK;this.Di.G(BkM);this.Di.I1(2);this.Di.Ne(A.abh.ArP);this.AttributeSet.
Afs(this.T.AM);this.AttributeSet.BfS(A.zW(A.eV.AKi));this.AttributeSet.BfR(A.zW(
A.eV.Az));this.AttributeSet.AoY(A.zW(A.eV.Az));this.Init(aArg);},_Done:function(
){this.__proto__=C.B$;this.AttributeSet._Done();C.B$._Done.call(this);},_ReInit:
function(){C.B$._ReInit.call(this);this.AttributeSet._ReInit();},_Mark:function(
D){var B;C.B$._Mark.call(this,D);if((B=this.AttributeSet)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::SettingsItemGroupSpecialChars"};C.NewAnimalsSetTransponderScreen={
_Init:function(aArg){C.ApC._Init.call(this,aArg);this.__proto__=C.NewAnimalsSetTransponderScreen;
this.Dw(C.AzD);},_className:"Application::NewAnimalsSetTransponderScreen"};C.ReasonOfLeaving={
ReasonOfLeavingToString:null,Dx:function(){return 14;},Dd:function(aIndex){if((aIndex<
0)||(aIndex>=14))return-1;return aIndex;},GS:function(aIndex){if((aIndex<0)||(aIndex>=
14))return A.jm;return this.ReasonOfLeavingToString.Cb(aIndex);},DX:function(A2){
return A2;},HP:function(){return 13;},_Init:function(aArg){C.AC._Init.call(this,
aArg);A.Device.ReasonOfLeavingToString._Init.call(this.ReasonOfLeavingToString={
I:this},0);this.__proto__=C.ReasonOfLeaving;},_Done:function(){this.__proto__=C.
AC;this.ReasonOfLeavingToString._Done();C.AC._Done.call(this);},_ReInit:function(
){C.AC._ReInit.call(this);this.ReasonOfLeavingToString._ReInit();},_Mark:function(
D){var B;C.AC._Mark.call(this,D);if((B=this.ReasonOfLeavingToString)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::ReasonOfLeaving"};C.N9={Fa:null,EnumToCodeset:
null,IY:null,A3:0,Number:0,Ah:function(Ae){C.B$.Ah.call(this,Ae);if(this.A3===1){
if(this.GY){this.Background.L(A.iF.CR);this.T.L(A.iF.Text);}else{this.Background.
L(A.iF.CE);this.T.L(A.iF.Text);}}},Bu:function(E){C.B$.Bu.call(this,E);var BsM=this.
EnumToCodeset.Akv(this.Number);var A9B=this.AC.Dd(this.AI);if(BsM!==A9B){this.ABH(
this.EnumToCodeset.Aca(A9B));A.aat([this,this.AN4,this.ABH],0);}},DD:function(H){
var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).C$(A.
zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[
this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(
A.jm);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(null);(F=
this.N,F[1].call(F[0])).Cd(A.jm);(F=this.N,F[1].call(F[0])).Cm=null;}break;default:
this.Fa.AiD((F=this.N,F[1].call(F[0])));}},GC:function(H){this.Ed(1);},Gy:function(
H){this.Ed(0);},Ed:function(EI){var F;if(!this.A3)this.Fa.Ahn((F=this.N,F[1].call(
F[0])));this.A3=EI;if((this.A3<0)||(this.A3>1))this.A3=0;this.DD(this);if(!this.
A3)this.A8(null);else this.AWF();this.Al();},ABH:function(E){var F;if(this.Number===
E)return;if(!!this.EnumToCodeset){if(this.EnumToCodeset.An_()>E)E=this.EnumToCodeset.
An_();if(this.EnumToCodeset.HP()<E)E=this.EnumToCodeset.HP();}this.Number=E;var BR=
this.AI;if(!!this.EnumToCodeset){var BrM=this.EnumToCodeset.Akv(E);this.Bu(this.
AC.DX(BrM));if(this.AI!==BR){if(!!this.Q&&!!this.AC)(F=this.Q,F[2].call(F[0],this.
AC.Dd(this.AI)));A.aat(this.Q,0);}}},ABk:function(E){if(this.EnumToCodeset===E)return;
this.EnumToCodeset=E;},TC:function(H){this.Ed(this.A3+1);},AWF:function(){A.aa8(
"%s",BkN);},AN4:function(){return this.Number;},_Init:function(aArg){C.B$._Init.
call(this,aArg);A.Core.B1._Init.call(this.IY={I:this},0);this.__proto__=C.N9;this.
IY.Filter=1;this.Fa=A._NewObject(C.Aci,0);this.IY.B2=[this,this.TC];},_Done:function(
){this.__proto__=C.B$;this.IY._Done();C.B$._Done.call(this);},_ReInit:function(){
C.B$._ReInit.call(this);this.IY._ReInit();},_Mark:function(D){var B;C.B$._Mark.call(
this,D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EnumToCodeset
)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.IY)._cycle!=D)B._Mark(B._cycle=D
);},_className:"Application::SettingsItemGroupNumbered"};C.AcN={Text:null,Ah:function(
Ae){C.D4.Ah.call(this,Ae);this.Text.L(this.Azi);},Bu:function(E){if(this.AI===E)
return;this.AI=E;this.Text.R(A._GetAutoObject(A.Device.Converter).Vc(this.AI));this.
Al();},YQ:function(H){A.ow([this,this.Aea],this);},YP:function(H){A.ow([this,this.
Aea],this);},AjQ:function(H){A.ow([this,this.Aea],this);},Aea:function(H){if((!this.
HO||!this.Fp)||!this.Fb)return;},_Init:function(aArg){C.D4._Init.call(this,aArg);
A.abh.Text._Init.call(this.Text={I:this},0);this.__proto__=C.AcN;this.Text.AW(0x3F
);this.Text.G(Ap7);this.Text.R(A.z2(A.abg.Unknown));this.J(this.Text,0);this.Text.
Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.D4;this.Text._Done();C.D4._Done.
call(this);},_ReInit:function(){C.D4._ReInit.call(this);this.Text._ReInit();},_Mark:
function(D){var B;C.D4._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::NaisIDReadonly"};C.ANk={Gh:0,C2:null,AX:null,EM:null
,Jl:null,CountryToString:null,Kw:0,Ls:false,Init:function(aArg){A.za([this,this.
Ts],[this,this.Ro,this.KG],0);},Ah:function(Ae){C.D4.Ah.call(this,Ae);this.AX.Ff(
this.K3);this.EM.CU(this.K3);this.Jl.CU(this.K3);},DD:function(H){var F;if(!this.
N)return;switch(this.A3){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C$(A.zW(
A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this
,this.Gy];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm
);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(null);(F=this.
N,F[1].call(F[0])).Cd(this.CountryToString.Cb(this.Kw));(F=this.N,F[1].call(F[0]
)).Cm=null;}break;default:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.
N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.
N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(
F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd(
A.jm);(F=this.N,F[1].call(F[0])).Cm=null;}}},Ed:function(EI){var YO=this.A3;this.
A3=EI;if(this.A3<0)this.A3=0;else if(this.A3>this.QA)this.A3=this.QA;switch(this.
A3){case 0:{this.A8(null);if(!this.Gh)this.KG(0);}break;case 1:this.A8(this.Jl);
break;case 2:this.A8(this.EM);break;case 3:{this.A8(this.AX);if(!this.Gh||(YO>0)
)this.AX.RB(2);else this.AX.RB(7);}break;default:throw new Error(Aqi+this.A3.toFixed(
));}C.D4.Ed.call(this,EI);},AmT:function(H){this.Jl.US(this.Ef);},YQ:function(H){
var F;this.AX.A3s((F=this.Fb,F[1].call(F[0])));},YP:function(H){var F;this.AX.A3t((
F=this.Fp,F[1].call(F[0])));},Bu:function(E){if(this.AI===E)return;this.AI=E;this.
Ls=true;this.Rp(A._GetAutoObject(A.Device.Helper).Ue(E,0,12));this.KG(A._GetAutoObject(
A.Device.Converter).AfW(E));this.Ls=false;if(!!E)this.AX.JO(12);else this.AX.JO(
0);this.Al();},AjQ:function(H){A.ow([this,this.Aea],this);},GC:function(H){var F;
if(!this.AI){var BR=this.AI;this.Bu(A._GetAutoObject(A.Device.Helper).Azs());if(
this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}}this.
Ed(3);},AhC:function(){return this.Gh;},AhG:function(){return 999999999999;},KG:
function(E){if(this.Kw===E)return;this.Kw=E;if(this.Ls===false)A.ow([this,this.TO
],this);A.aat([this,this.Ro,this.KG],0);},Rp:function(E){if(this.Gh===E)return;this.
Gh=E;if(this.Ls===false)A.ow([this,this.TO],this);A.aat([this,this.Z3,this.Rp],0
);},TO:function(H){var F;var aString=A.aaq(A._GetAutoObject(A.Device.Converter).
ArT(this.Kw),3,10)+A.aar(this.Gh,12,10);var BR=this.AI;this.Bu(A.aa2(aString,0,10
));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,
0);}},Aea:function(H){var F;if((!this.HO||!this.Fp)||!this.Fb)return;if(!(F=this.
HO,F[1].call(F[0])))this.AX.AA_(true);else this.AX.AA_(false);},Ro:function(){return this.
Kw;},Z3:function(){return this.Gh;},_Init:function(aArg){C.D4._Init.call(this,aArg
);C.C2._Init.call(this.C2={I:this},0);C.AAa._Init.call(this.AX={I:this},0);C.ApO.
_Init.call(this.EM={I:this},0);C.Jl._Init.call(this.Jl={I:this},0);A.Device.CountryToString.
_Init.call(this.CountryToString={I:this},0);this.__proto__=C.ANk;var B;this.QA=3;
this.AX.G(BkO);this.EM.G(A5Y);this.Jl.G(A5Z);this.J(this.AX,0);this.J(this.EM,0);
this.J(this.Jl,0);this.C2.ABe([this,this.Ro,this.KG]);this.AX.AD([this,this.Z3,this.
Rp]);this.EM.Dk(this.C2);this.EM.AD([B=this.C2,B.CA,B.CC]);this.Jl.A3F([B=A._GetAutoObject(
A.Device.Device),B.AAS,B.AER]);this.Init(aArg);},_Done:function(){this.__proto__=
C.D4;this.C2._Done();this.AX._Done();this.EM._Done();this.Jl._Done();this.CountryToString.
_Done();C.D4._Done.call(this);},_ReInit:function(){C.D4._ReInit.call(this);this.
C2._ReInit();this.AX._ReInit();this.EM._ReInit();this.Jl._ReInit();this.CountryToString.
_ReInit();},_Mark:function(D){var B;C.D4._Mark.call(this,D);if((B=this.C2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
EM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisIDInternational"
};C.ANj={Gh:0,C2:null,AX:null,WY:null,JL:null,EM:null,Jl:null,GermanStateToString:
null,CountryToString:null,AnimalType:0,OL:0,Kw:0,Ls:false,Init:function(aArg){A.
za([this,this.Ts],[this,this.O1,this.DS],0);A.za([this,this.Ts],[this,this.Ro,this.
KG],0);A.za([this,this.Ts],[this,this.Ald,this.Afu],0);},Ah:function(Ae){C.D4.Ah.
call(this,Ae);this.AX.Ff(this.K3);this.WY.Ff(this.K3);this.JL.Ff(this.K3);this.EM.
CU(this.K3);this.Jl.CU(this.K3);},DD:function(H){var F;if(!this.N)return;switch(
this.A3){case 0:break;case 2:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.
N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.
N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(
F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd(
this.CountryToString.Cb(this.Kw));(F=this.N,F[1].call(F[0])).Cm=null;}break;case
3:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.
jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(null
);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.
N,F[1].call(F[0])).De(null);switch(this.AnimalType){case 0:(F=this.N,F[1].call(F[
0])).Cd(((A.z2(A.abg.ACW)+A.z2(A.abg.Colon))+AaP)+A.z2(A.abg.BaC));break;case 1:(
F=this.N,F[1].call(F[0])).Cd(((A.z2(A.abg.ACW)+A.z2(A.abg.Colon))+AaP)+A.z2(A.abg.
Bh7));break;case 2:(F=this.N,F[1].call(F[0])).Cd(((A.z2(A.abg.ACW)+A.z2(A.abg.Colon
))+AaP)+A.z2(A.abg.Bbv));break;default:(F=this.N,F[1].call(F[0])).Cd(((A.z2(A.abg.
ACW)+A.z2(A.abg.Colon))+AaP)+A.z2(A.abg.Unknown));}(F=this.N,F[1].call(F[0])).Cm=
null;}break;case 4:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].
call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].
call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0
])).Ch=null;(F=this.N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd((A.
z2(A.abg.Gr)+AuW)+this.GermanStateToString.KN(A._GetAutoObject(A.Device.Converter
).AKr(this.OL)));(F=this.N,F[1].call(F[0])).Cm=null;}break;default:{(F=this.N,F[
1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.N,
F[1].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N
,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(
F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd(A.jm);(F=this.N,F[1].call(F[0])).Cm=
null;}}},Ed:function(EI){var YO=this.A3;if(EI<0)EI=0;else if(EI>this.QA)EI=this.
QA;switch(EI){case 0:{this.A8(null);if((!this.Gh&&!this.AnimalType)&&!this.OL)this.
KG(0);}break;case 1:this.A8(this.Jl);break;case 2:this.A8(this.EM);break;case 3:
if(!YO)A.ow([this,this.BtY],this);else this.A8(this.WY);break;case 4:this.A8(this.
JL);break;case 5:if(((YO===4)&&!this.OL)&&!this.Gh)return;else{this.A8(this.AX);
if(!this.Gh||(YO>0))this.AX.RB(2);else this.AX.RB(7);}break;default:throw new Error(
Aqi+EI.toFixed());}this.A3=EI;C.D4.Ed.call(this,EI);},Bu:function(E){if(this.AI===
E)return;this.AI=E;this.Ls=true;this.Rp(A._GetAutoObject(A.Device.Helper).Ue(E,0
,8));this.Afu(A._GetAutoObject(A.Device.Helper).Ue(E,8,2)|0);this.DS(A._GetAutoObject(
A.Device.Helper).Ue(E,10,2)|0);this.KG(A._GetAutoObject(A.Device.Converter).AfW(
E));this.Ls=false;if(!!this.AI){this.WY.JO(2);this.JL.JO(2);this.AX.JO(8);}else{
this.WY.JO(0);this.JL.JO(0);this.AX.JO(0);}this.Al();},AmT:function(H){this.Jl.US(
this.Ef);},YQ:function(H){var F;this.AX.A3s((F=this.Fb,F[1].call(F[0])));},YP:function(
H){var F;this.AX.A3t((F=this.Fp,F[1].call(F[0])));},AjQ:function(H){A.ow([this,this.
Aea],this);},GC:function(H){var F;if(!this.AI){var BR=this.AI;this.Bu(A._GetAutoObject(
A.Device.Helper).Azs());if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AI));A.aat(this.Q,0);}this.Ed(3);}else this.Ed(this.QA);},AhC:function(){return this.
Gh;},AhG:function(){return 99999999;},KG:function(E){if(this.Kw===E)return;this.
Kw=E;if(this.Ls===false)A.ow([this,this.TO],this);A.aat([this,this.Ro,this.KG],0
);},Rp:function(E){if(this.Gh===E)return;this.Gh=E;if(this.Ls===false)A.ow([this
,this.TO],this);A.aat([this,this.Z3,this.Rp],0);},TO:function(H){var F;var aString=((
A.aaq(A._GetAutoObject(A.Device.Converter).ArT(this.Kw),3,10)+A.aaq(this.AnimalType
,2,10))+A.aaq(this.OL,2,10))+A.aar(this.Gh,8,10);var BR=this.AI;this.Bu(A.aa2(aString
,0,10));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.aat(this.
Q,0);}},Aea:function(H){var F;if((!this.HO||!this.Fp)||!this.Fb)return;if(!(F=this.
HO,F[1].call(F[0])))this.AX.AA_(true);else this.AX.AA_(false);},DS:function(E){if(
this.AnimalType===E)return;this.AnimalType=E;if(this.Ls===false)A.ow([this,this.
TO],this);A.aat([this,this.O1,this.DS],0);},Afu:function(E){if(this.OL===E)return;
this.OL=E;if(this.Ls===false)A.ow([this,this.TO],this);A.aat([this,this.Ald,this.
Afu],0);},BtY:function(H){var F;if(!!this.Jg){var HH=(F=this.Jg,F[1].call(F[0]));
var AVR=0;switch(HH){case 0:case 1:AVR=0;break;case 2:AVR=1;break;default:A.aa8(
"%s%e",Ap8,HH);}this.DS(AVR);}if(!this.OL)this.Ed(4);else this.Ed(5);},Ro:function(
){return this.Kw;},Z3:function(){return this.Gh;},O1:function(){return this.AnimalType;
},Ald:function(){return this.OL;},_Init:function(aArg){C.D4._Init.call(this,aArg
);C.C2._Init.call(this.C2={I:this},0);C.AMI._Init.call(this.AX={I:this},0);C.AsN.
_Init.call(this.WY={I:this},0);C.AsN._Init.call(this.JL={I:this},0);C.ApO._Init.
call(this.EM={I:this},0);C.Jl._Init.call(this.Jl={I:this},0);A.Device.GermanStateToString.
_Init.call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(
this.CountryToString={I:this},0);this.__proto__=C.ANj;var B;this.QA=5;this.AX.G(
BkP);this.WY.G(BkQ);this.WY.FS(2);this.JL.G(BkR);this.JL.FS(16);this.EM.G(A5Y);this.
Jl.G(A5Z);this.J(this.AX,0);this.J(this.WY,0);this.J(this.JL,0);this.J(this.EM,0
);this.J(this.Jl,0);this.C2.ABe([this,this.Ro,this.KG]);this.AX.AD([this,this.Z3
,this.Rp]);this.WY.AD([this,this.O1,this.DS]);this.JL.AD([this,this.Ald,this.Afu
]);this.EM.Dk(this.C2);this.EM.AD([B=this.C2,B.CA,B.CC]);this.Jl.A3F([B=A._GetAutoObject(
A.Device.Device),B.AAS,B.AER]);this.Init(aArg);},_Done:function(){this.__proto__=
C.D4;this.C2._Done();this.AX._Done();this.WY._Done();this.JL._Done();this.EM._Done(
);this.Jl._Done();this.GermanStateToString._Done();this.CountryToString._Done();
C.D4._Done.call(this);},_ReInit:function(){C.D4._ReInit.call(this);this.C2._ReInit(
);this.AX._ReInit();this.WY._ReInit();this.JL._ReInit();this.EM._ReInit();this.Jl.
_ReInit();this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:
function(D){var B;C.D4._Mark.call(this,D);if((B=this.C2)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.JL)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Jl)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::NaisIDGerman"};C.D4={AI:0,Atc:null,Q:null,Ef:
null,Fp:null,Fb:null,HO:null,N:null,Jg:null,EU:null,EN:null,Azi:0,K3:0,A3:0,QA:0
,Init:function(aArg){A.ow([this,this.Lw],this);},Ah:function(Ae){A.Core.O.Ah.call(
this,Ae);if(!this.A3)this.A8(null);},BfT:function(E){if(this.Azi===E)return;this.
Azi=E;this.Al();},AcT:function(E){if(this.K3===E)return;this.K3=E;this.Al();},DD:
function(H){A.aa8("%s",Ai1);},Ts:function(s){this.DD(s);},Ed:function(EI){A.ow([
this,this.Ts],this);A.ow(this.Atc,this);},AD:function(E){if(A.z_(this.Q,E))return;
if(!!this.Q)A.zn([this,this.C1],this.Q,0);this.Q=E;if(!!E)A.za([this,this.C1],E,
0);if(!!E)A.ow([this,this.C1],this);},C1:function(H){var F;if(!!this.Q)this.Bu((
F=this.Q,F[1].call(F[0])));},Bu:function(E){A.aa8("%s",AUC);},NJ:function(H){if(
this.A3>1)this.Ed(this.A3-1);},Me:function(H){if((this.A3>0)&&(this.A3<this.QA))
this.Ed(this.A3+1);},US:function(E){if(A.z_(this.Ef,E))return;if(!!this.Ef)A.zn([
this,this.AU6],this.Ef,0);this.Ef=E;if(!!E)A.za([this,this.AU6],this.Ef,0);A.ow([
this,this.AU6],this);},AmT:function(H){},AU6:function(s){this.AmT(s);},P3:function(
E){if(A.z_(this.Fp,E))return;if(!!this.Fp)A.zn([this,this.AU_],this.Fp,0);this.Fp=
E;if(!!E)A.za([this,this.AU_],E,0);if(!!E)A.ow([this,this.AU_],this);},Rr:function(
E){if(A.z_(this.Fb,E))return;if(!!this.Fb)A.zn([this,this.AVa],this.Fb,0);this.Fb=
E;if(!!E)A.za([this,this.AVa],E,0);if(!!E)A.ow([this,this.AVa],this);},YQ:function(
H){},AVa:function(s){this.YQ(s);},YP:function(H){},AU_:function(s){this.YP(s);},
SX:function(E){if(A.z_(this.HO,E))return;if(!!this.HO)A.zn([this,this.AU9],this.
HO,0);this.HO=E;if(!!E)A.za([this,this.AU9],E,0);if(!!E)A.ow([this,this.AU9],this
);},AjQ:function(H){},AU9:function(s){this.AjQ(s);},GC:function(H){A.aa8("%s",A50
);},ByB:function(s){this.GC(s);},Gy:function(H){this.Ed(0);},AhC:function(){A.aa8(
"%s",AUC);return 0;},AhG:function(){A.aa8("%s",AUC);return 0;},Lw:function(H){},
Alh:function(E){if(A.z_(this.Jg,E))return;if(!!this.Jg)A.zn([this,this.Amt],this.
Jg,0);this.Jg=E;if(!!E)A.za([this,this.Amt],this.Jg,0);A.ow([this,this.Amt],this
);},Amt:function(H){},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.Core.
B1._Init.call(this.EU={I:this},0);A.Core.B1._Init.call(this.EN={I:this},0);this.
__proto__=C.D4;this.G(Ap7);this.Azi=A.iF.Text;this.K3=A.iF.CR;this.EU.Filter=6;this.
EN.Filter=7;this.EU.B2=[this,this.NJ];this.EN.B2=[this,this.Me];this.Init(aArg);
},_Done:function(){this.__proto__=A.Core.O;this.EU._Done();this.EN._Done();A.Core.
O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.EU._ReInit(
);this.EN._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=
this.Atc)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ef)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Fp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Fb)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.HO)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.N)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Jg
)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::NaisID"
};C.AfM={AI:0,Dz:null,Fa:null,Ef:null,Fp:null,Fb:null,HO:null,Q:null,Jg:null,AAD:-
1,AJO:false,APc:false,ACr:true,Init:function(aArg){A.ow([this,this.AxY],this);},
Ah:function(Ae){C.DY.Ah.call(this,Ae);if(!this.Dz)return;if(this.Dz.A3>0){if(this.
GY){this.Dz.AcT(A.iF.CE);this.Background.L(A.iF.CR);this.T.L(A.iF.Text);}else{this.
Dz.AcT(A.iF.CR);this.Background.L(A.iF.CE);this.T.L(A.iF.Text);}}else{if(this.GY
)this.Dz.AcT(A.iF.CE);else this.Dz.AcT(A.iF.CR);this.Dz.BfT(this.T.AM);}},JE:function(
H){C.DY.JE.call(this,H);if(!this.Dz)return;if(!this.Dz.A3)this.GC(this);else this.
Gy(this);},He:function(E){C.DY.He.call(this,E);if(!!this.Dz)this.Dz.N=E;},US:function(
E){if(A.z_(this.Ef,E))return;if(!!this.Ef)A.zn([this,this.AmT],this.Ef,0);this.Ef=
E;if(!!E)A.za([this,this.AmT],this.Ef,0);A.ow([this,this.AmT],this);},AmT:function(
H){if(!!this.Dz)this.Dz.US(this.Ef);},P3:function(E){if(A.z_(this.Fp,E))return;this.
Fp=E;if(!!this.Dz)this.Dz.P3(E);},Rr:function(E){if(A.z_(this.Fb,E))return;this.
Fb=E;if(!!this.Dz)this.Dz.Rr(E);},SX:function(E){if(A.z_(this.HO,E))return;this.
HO=E;if(!!this.Dz)this.Dz.SX(E);},Bur:function(H){var AXq=0;if(!!this.Dz){AXq=this.
Dz.A3;this.Dz.N=null;this.HA(this.Dz);}switch(this.AAD){case 0:this.Dz=A._NewObject(
C.AcN,0);break;case 1:this.Dz=A._NewObject(C.ANk,0);break;case 2:this.Dz=A._NewObject(
C.ANj,0);break;case 3:this.Dz=A._NewObject(C.APe,0);break;case 4:this.Dz=A._NewObject(
C.APd,0);break;case 5:this.Dz=A._NewObject(C.ANl,0);break;default:throw new Error(
BkS+this.AAD.toFixed());}this.J(this.Dz,0);this.Dz.Alh(this.Jg);this.Dz.G(BkT);this.
Dz.N=this.N;this.Dz.US(this.Ef);this.Dz.Atc=[this,this.Atc];this.Dz.AD([this,this.
SW,this.Bu]);this.Dz.SX(this.HO);this.Dz.P3(this.Fp);this.Dz.Rr(this.Fb);if(AXq>
0)this.Dz.Ed(AXq);this.A8(this.Dz);this.Al();},GC:function(H){var B;var F;if(!!this.
Dz){if(!!this.N)this.Fa.Ahn((F=this.N,F[1].call(F[0])));else this.Fa=A._NewObject(
C.Aci,0);this.Dz.GC(this);}},Gy:function(H){var B;if(!!this.Dz)this.Dz.Gy(this);
},AhC:function(){if(!this.Dz)return 0;return this.Dz.AhC();},AhG:function(){if(!
this.Dz)return 0;return this.Dz.AhG();},C1:function(H){var F;if(!!this.Q){this.Bu((
F=this.Q,F[1].call(F[0])));A.aat([this,this.SW,this.Bu],0);}},AD:function(E){if(
A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.C1],this.Q,0);this.Q=E;if(!!E)
A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1],this);},Bu:function(E){var F;
if(this.AI===E)return;this.AI=E;if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.
aat(this.Q,0);A.ow([this,this.AxY],this);},Bgt:function(E){if(this.AAD===E)return;
this.AAD=E;A.ow([this,this.Bur],this);},AtP:function(E){if(this.ACr===E)return;this.
ACr=E;A.ow([this,this.AxY],this);},AxY:function(H){var Am4;if(this.ACr){if(this.
AJO)Am4=5;else Am4=0;}else if(this.APc){if(A._GetAutoObject(A.Device.Converter).
AfW(this.AI)===10)Am4=4;else Am4=3;}else if(A._GetAutoObject(A.Device.Converter).
AfW(this.AI)===10)Am4=2;else Am4=1;this.Bgt(Am4);},Atc:function(H){var F;if((!!this.
N&&!!this.Dz)&&!this.Dz.A3)this.Fa.AiD((F=this.N,F[1].call(F[0])));this.Al();},Alh:
function(E){if(A.z_(this.Jg,E))return;if(!!this.Jg)A.zn([this,this.Amt],this.Jg,
0);this.Jg=E;if(!!E)A.za([this,this.Amt],this.Jg,0);A.ow([this,this.Amt],this);}
,Amt:function(H){if(!!this.Dz)this.Dz.Alh(this.Jg);},A35:function(E){if(this.APc===
E)return;this.APc=E;A.ow([this,this.AxY],this);},Bfp:function(E){if(this.AJO===E
)return;this.AJO=E;A.ow([this,this.AxY],this);},SW:function(){return this.AI;},_Init:
function(aArg){C.DY._Init.call(this,aArg);this.__proto__=C.AfM;this.G(Yk);this.T.
R(Aqb);this.T.L(A.iF.Be);this.Fa=A._NewObject(C.Aci,0);this.Init(aArg);},_Mark:function(
D){var B;C.DY._Mark.call(this,D);if((B=this.Dz)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ef)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Fp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D
);if((B=this.Fb)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.HO)&&((B=B[
0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Jg)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);},_className:
"Application::SettingsItemNaisID"};C.AMI={ED:null,FD:null,D9:null,Dg:null,CI:null
,Cc:null,Ff:function(E){if(this.Mn===E)return;C.KC.Ff.call(this,E);this.Cc.CU(E);
this.CI.CU(E);this.Dg.CU(E);this.D9.CU(E);this.FD.CU(E);this.ED.CU(E);},WK:function(
I6){var BS=null;switch(I6){case-1:case 0:BS=this.Fo;break;case 1:BS=this.Cc;break;
case 2:BS=this.CI;break;case 3:BS=this.Dg;break;case 4:BS=this.D9;break;case 5:BS=
this.FD;break;case 6:BS=this.ED;break;case 7:BS=this.Gj;break;default:A.aa8("%s"
,Af5);}return BS;},_Init:function(aArg){C.KC._Init.call(this,aArg);C.Ds._Init.call(
this.ED={I:this},0);C.Ds._Init.call(this.FD={I:this},0);C.Ds._Init.call(this.D9={
I:this},0);C.Ds._Init.call(this.Dg={I:this},0);C.Ds._Init.call(this.CI={I:this},
0);C.Ds._Init.call(this.Cc={I:this},0);this.__proto__=C.AMI;this.G(BkU);this.Gj.
G(AEK);this.ED.G(Avk);this.FD.G(AUv);this.D9.G(AUw);this.Dg.G(AUx);this.CI.G(AUy
);this.Cc.G(AUz);this.Fo.G(AUA);this.El.G(A5X);this.J(this.ED,-2);this.J(this.FD
,-2);this.J(this.D9,-2);this.J(this.Dg,-2);this.J(this.CI,-2);this.J(this.Cc,-2);
this.ED.C_=[this,this.Gd];this.FD.C_=[this,this.Gd];this.D9.C_=[this,this.Gd];this.
Dg.C_=[this,this.Gd];this.CI.C_=[this,this.Gd];this.Cc.C_=[this,this.Gd];},_Done:
function(){this.__proto__=C.KC;this.ED._Done();this.FD._Done();this.D9._Done();this.
Dg._Done();this.CI._Done();this.Cc._Done();C.KC._Done.call(this);},_ReInit:function(
){C.KC._ReInit.call(this);this.ED._ReInit();this.FD._ReInit();this.D9._ReInit();
this.Dg._ReInit();this.CI._ReInit();this.Cc._ReInit();},_Mark:function(D){var B;
C.KC._Mark.call(this,D);if((B=this.ED)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
FD)._cycle!=D)B._Mark(B._cycle=D);if((B=this.D9)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Dg)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber8"
};C.AsN={Q:null,Gj:null,Fo:null,El:null,HT:null,HS:null,Mn:0,S0:0,AI:0,Fs:99,Init:
function(aArg){A.ow([this,this.Lw],this);},Ah:function(Ae){var B;A.Core.O.Ah.call(
this,Ae);this.El.W(false);this.El.G(A.vS(this.WK(0).M,this.WK(-1).M));var Gz=((Ae&
0x40)===0x40);if(Gz){this.A$e(A.iF.A6);this.A$f(A.iF.Be);}else{this.A$e(this.Mn);
this.A$f(A.iF.Text);}this.Akd();},Ff:function(E){if(this.Mn===E)return;this.Mn=E;
this.Al();},Lw:function(H){},WK:function(I6){var BS=null;switch(I6){case-1:case 0:
BS=this.Fo;break;case 1:BS=this.Gj;break;default:A.aa8("%s",Af5);}return BS;},JO:
function(E){if(this.S0===E)return;this.S0=E;this.Akd();},Akd:function(){var B;var
F;if(!!this.Q){var Eb=this.Fo;var Abt=this.S0;var A2=(F=this.Q,F[1].call(F[0]));
while(!!Eb){if(A2>0){Eb.Mx(A2%10);A2=(A2/10)|0;}else if(Abt>0)Eb.Mx(0);else Eb.Mx(-
1);Eb=(C.FC.isPrototypeOf(B=this.An4(Eb,0x11))?B:null);Abt=Abt-1;}}},Aed:function(
H){var F;var BR=this.AI;this.Bu(this.AI+1);if(this.AI!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Aec:function(H){var F;var BR=this.
AI;this.Bu(this.AI-1);if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AI));A.aat(this.Q,0);}},C1:function(H){var F;if(!!this.Q)this.Bu((F=this.Q,F[1].
call(F[0])));},AD:function(E){if(A.z_(this.Q,E))return;if(!!this.Q)A.zn([this,this.
C1],this.Q,0);this.Q=E;if(!!E)A.za([this,this.C1],E,0);if(!!E)A.ow([this,this.C1
],this);},Bu:function(E){if(E<0)E=0;if(E>this.Fs)E=this.Fs;if(this.AI===E)return;
this.AI=E;this.Al();},FS:function(E){if(this.Fs===E)return;this.Fs=E;this.Al();}
,A$e:function(aColor){this.Fo.CU(aColor);this.Gj.CU(aColor);},A$f:function(aColor
){this.Fo.AoX(aColor);this.Gj.AoX(aColor);},_Init:function(aArg){A.Core.O._Init.
call(this,aArg);C.FC._Init.call(this.Gj={I:this},0);C.FC._Init.call(this.Fo={I:this
},0);A.abh.CT._Init.call(this.El={I:this},0);A.Core.B1._Init.call(this.HT={I:this
},0);A.Core.B1._Init.call(this.HS={I:this},0);this.__proto__=C.AsN;this.G(BkV);this.
Mn=A.iF.CE;this.Gj.G(AEK);this.Fo.G(Avk);this.El.G(Avk);this.El.N7(2);this.El.L(
A.iF.E1);this.HT.Filter=4;this.HS.Filter=5;this.J(this.Gj,0);this.J(this.Fo,0);this.
J(this.El,0);this.HT.B2=[this,this.Aed];this.HT.Ea=[this,this.Aed];this.HS.B2=[this
,this.Aec];this.HS.Ea=[this,this.Aec];this.Init(aArg);},_Done:function(){this.__proto__=
A.Core.O;this.Gj._Done();this.Fo._Done();this.El._Done();this.HT._Done();this.HS.
_Done();A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this
);this.Gj._ReInit();this.Fo._ReInit();this.El._ReInit();this.HT._ReInit();this.HS.
_ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Q)&&((
B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Gj)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Fo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.El)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.HT)._cycle!=D)B._Mark(B._cycle=D);if((B=this.HS)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::InputGroupedNumber"};C.FC={AeL:
null,Background:null,Text:null,FC:-1,Mj:0,AkE:0,AnM:false,Ah:function(Ae){A.Core.
O.Ah.call(this,Ae);if(this.FC<0)this.Text.R(Qk);else this.Text.R(this.FC.toFixed(
));this.Background.L(this.Mj);this.Text.L(this.AkE);},Mx:function(E){if(this.FC===
E)return;var BS=E;if((BS<0)||(BS>9))BS=-1;this.FC=BS;this.Al();},CU:function(E){
if(this.Mj===E)return;this.Mj=E;this.Al();},Aii:function(E){if(this.AnM===E)return;
this.AnM=E;this.AeL.An(E);if(E===false)this.Text.W(true);},AoX:function(E){if(this.
AkE===E)return;this.AkE=E;this.Al();},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.abm.Y$._Init.call(this.AeL={I:this},0);A.abh.AH._Init.call(this.Background={
I:this},0);A.abh.Text._Init.call(this.Text={I:this},0);this.__proto__=C.FC;var B;
this.G(Aqh);this.Mj=A.iF.CE;this.AeL.FK(750);this.AeL.Aab(750);this.AeL.Aim(750);
this.AkE=A.iF.Text;this.Background.AW(0x3);this.Background.G(Aqh);this.Text.AW(0x3
);this.Text.G(Aqh);this.Text.R(Qk);this.J(this.Background,0);this.J(this.Text,0);
this.AeL.Q=[B=this.Text,B.Fe,B.W];this.Text.Y(A.zW(A.eV.Au));},_Done:function(){
this.__proto__=A.Core.O;this.AeL._Done();this.Background._Done();this.Text._Done(
);A.Core.O._Done.call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.
AeL._ReInit();this.Background._ReInit();this.Text._ReInit();},_Mark:function(D){
var B;A.Core.O._Mark.call(this,D);if((B=this.AeL)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)
B._Mark(B._cycle=D);},_className:"Application::Digit"};C.E0={Ac:null,IC:null,AJW:
A.jm,ANy:A.jm,R0:0,AFQ:0,AWv:false,AV5:false,Init:function(aArg){},CF:function(H
){var B;C.Aw.CF.call(this,H);A.za([this,this.AxT],[B=A._GetAutoObject(A.Device.Device
).Aq,B.Fd,B.Fg],0);A.za([this,this.Ts],[B=A._GetAutoObject(A.Device.Device).Aq,B.
Fd,B.Fg],0);A.ow([this,this.AxT],this);A.ow([this,this.Ts],this);},Fc:function(H
){var B;C.Aw.Fc.call(this,H);A.zn([this,this.AxT],[B=A._GetAutoObject(A.Device.Device
).Aq,B.Fd,B.Fg],0);},BqK:function(Ol){A._GetAutoObject(A.Device.Helper).HU(Ol);this.
Anw(A._GetAutoObject(A.Device.Device).Bt,A._GetAutoObject(A.Device.Helper).V.Id);
},Anw:function(Ll,AaS){A.aa8("%s",Ai1);},TJ:function(H){var Ar=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===9))A.z3([this,this.BrE],this);
else if(!!Ar&&(Ar.PopupState===5)){this.AV5=true;this.EY(this);}},BrE:function(H
){if(this.R0>0){this.AV5=false;this.Abi(this);this.A4r(0);}},Agp:function(H){if((
this.AFQ+1)<this.R0)this.A4r(this.AFQ+1);else A.z3([this,this.Bpl],this);},Bpm:function(
s){this.Agp(s);},A4r:function(E){this.AFQ=E;if(this.AV5===false){this.BqK(E);A.z3([
this,this.Bpm],this);var V0=(this.AFQ/this.R0)*100;A._GetAutoObject(A.Device.Device
).A_(49,true,A.aap(V0,0,0),0,[this,this.TJ]);}},Yy:function(H){A._GetAutoObject(
A.Device.Device).A_(49,false,BkW,0,[this,this.TJ]);this.AWv=true;A.ow([this,this.
AHh],this);},Bpl:function(s){this.Yy(s);},Abi:function(H){this.IC.W(true);this.AWv=
false;this.AHh(this);},Byw:function(s){this.Abi(s);},Axb:function(H){var Bb=A._GetAutoObject(
A.Device.Helper).A0V();A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);},EY:function(
H){A._GetAutoObject(C.A1).Fm();},AXT:function(H){A._GetAutoObject(C.A1).BY(95);}
,DD:function(H){this.N.W(true);this.N.C$(A.zW(A.abi.ET));this.N.CB=[this,this.EY
];this.N.Cn(A.zW(A.abi.Az3));if(!A._GetAutoObject(A.Device.Device).Aq.Filter||A.
_GetAutoObject(A.Device.Helper).Aoq(A._GetAutoObject(A.Device.Device).Aq.Filter)
){this.N.Ch=null;this.N.Jk.DF(100);}else{this.N.Ch=[this,this.Axb];this.N.Jk.DF(
255);}this.N.De(A.zW(A.abi.Act));this.N.Cm=[this,this.AXT];},Ts:function(s){this.
DD(s);},AxT:function(H){this.R0=A._GetAutoObject(A.Device.Device).Aq.Cf();if(this.
R0>0)A._GetAutoObject(A.Device.Device).A_(49,true,Ym,0,[this,this.TJ]);else{this.
Abi(this);this.Yy(this);}},Aik:function(E){if(this.AJW===E)return;this.AJW=E;A.ow([
this,this.AHh],this);},AHh:function(H){var B;if(this.AWv===false){this.IC.R(A.jm
);return;}var AmH;if(!A._GetAutoObject(A.Device.Device).Aq.Cf()){var Agu=A._GetAutoObject(
A.Device.Device).Aq.Filter;A.zn([this,this.AxT],[B=A._GetAutoObject(A.Device.Device
).Aq,B.Fd,B.Fg],0);this.Axb(this);if(!A._GetAutoObject(A.Device.Device).Aq.PG()||
!Agu)AmH=A.z2(A.abg.WarningNoAnimalsRegistered);else if(A._GetAutoObject(A.Device.
Helper).Azo(A._GetAutoObject(A.Device.Device).Aq.Filter)===1)AmH=A.z2(A.abg.AJQ);
else AmH=A.z2(A.abg.AJP);A._GetAutoObject(A.Device.Device).Aq.Bo(Agu);A.za([this
,this.AxT],[B=A._GetAutoObject(A.Device.Device).Aq,B.Fd,B.Fg],0);}else AmH=this.
ANy;AmH=AmH+(AUD+this.AJW);this.IC.R(AmH);},Afx:function(E){if(this.ANy===E)return;
this.ANy=E;A.ow([this,this.AHh],this);},_Init:function(aArg){C.Aw._Init.call(this
,aArg);A.Core.Ac._Init.call(this.Ac={I:this},0);C.AiE._Init.call(this.IC={I:this
},0);this.__proto__=C.E0;this.Dw(C.Zy);this.Ac.G(FN);this.Ac.Lf(1);this.IC.G(FN);
this.J(this.Ac,0);this.J(this.IC,0);this.Init(aArg);},_Done:function(){this.__proto__=
C.Aw;this.Ac._Done();this.IC._Done();C.Aw._Done.call(this);},_ReInit:function(){
C.Aw._ReInit.call(this);this.Ac._ReInit();this.IC._ReInit();},_Mark:function(D){
var B;C.Aw._Mark.call(this,D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationScreen"
};C.A1r={Af:null,AY:0,_Init:function(aArg){this.__proto__=C.A1r;A.hJ++;},_Done:function(
){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((
B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(
B._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Application::Int32Record"
};C.AsP={Kh:null,Ma:null,AN:0,Ww:function(){this.Kh=null;this.Ma=null;this.AN=0;
},NP:function(A2){var GB;GB=A._NewObject(C.A1r,0);GB.AY=A2;if(!this.Kh){this.Kh=
GB;this.Ma=GB;this.AN=1;}else{this.Ma.Af=GB;this.Ma=GB;this.AN=this.AN+1;}},AkN:
function(){var B;var QE=0;var NC=this.Kh;while(!!NC){QE+=NC.AY;NC=NC.Af;}return QE;
},AhD:function(){if(!this.AN)return 0;return this.AkN()/this.AN;},An$:function(){
var B;if(!this.AN)return 0;var AVY=this.AhD();var Aa$=0;var NC=this.Kh;while(!!NC
){Aa$+=Math.pow(NC.AY-AVY,2);NC=NC.Af;}Aa$/=this.AN;Aa$=Math.sqrt(Aa$);return Aa$;
},_Init:function(aArg){this.__proto__=C.AsP;A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Kh)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ma)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Application::Int32RecordList"};C.AJX={Fu:null,Aco:null,WE:null,DK:null,IC:null,
C6:function(){this.AYI(this);},Init:function(aArg){A.y_([this,this.AYI],A._GetAutoObject(
A.Device.Device).OF,0);A.ow([this,this.AYI],this);},EY:function(H){A._GetAutoObject(
C.A1).Fm();},AYI:function(H){this.WE.B8(-1);this.IC.W(!this.Fu.AZ.Cf());},_Init:
function(aArg){C.Aw._Init.call(this,aArg);C.Fu._Init.call(this.Fu={I:this},0);C.
Aco._Init.call(this.Aco={I:this},0);C.WE._Init.call(this.WE={I:this},0);A.abh.DK.
_Init.call(this.DK={I:this},0);C.AiE._Init.call(this.IC={I:this},0);this.__proto__=
C.AJX;this.N.W(true);this.Dw(C.AKS);this.Fu.G(Al_);this.Fu.Ne(C.An3);this.Aco.G(
Ke);this.WE.G(Ap_);this.DK.DL(BkX);this.DK.D5(BkY);this.DK.N7(3);this.DK.L(A.iF.
Text);this.IC.G(Al1);this.IC.R((A.z2(A.abg.A14)+AUD)+A.z2(A.abg.A0A));this.J(this.
Fu,0);this.J(this.Aco,0);this.J(this.WE,0);this.J(this.DK,0);this.J(this.IC,0);this.
N.CB=[this,this.EY];this.N.C$(A.zW(A.abi.ET));this.Fu.XF(A._GetAutoObject(A.Device.
Device).OF);this.WE.XF(A._GetAutoObject(A.Device.Device).OF);this.Init(aArg);},_Done:
function(){this.__proto__=C.Aw;this.Fu._Done();this.Aco._Done();this.WE._Done();
this.DK._Done();this.IC._Done();C.Aw._Done.call(this);},_ReInit:function(){C.Aw.
_ReInit.call(this);this.Fu._ReInit();this.Aco._ReInit();this.WE._ReInit();this.DK.
_ReInit();this.IC._ReInit();this.IC.R((A.z2(A.abg.A14)+AUD)+A.z2(A.abg.A0A));this.
C6();},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.Fu)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.Aco)._cycle!=D)B._Mark(B._cycle=D);if((B=this.WE).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.DK)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.IC)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationLossesScreen"
};C.AJ0={Arb:null,Ara:null,Ard:null,Arc:null,Arf:null,Are:null,Arh:null,Arg:null
,YS:null,WR:null,Zr:null,Zq:null,RatedAttribute:0,Init:function(aArg){this.Rt(2);
},DW:function(H){var DI=(A.Core.B1.isPrototypeOf(H)?H:null);switch(DI.CO){case 6:
switch(this.RatedAttribute){case 2:this.Rt(3);break;case 1:this.Rt(2);break;case
4:this.Rt(1);break;case 3:this.Rt(4);break;default:this.Rt(0);}break;case 7:switch(
this.RatedAttribute){case 2:this.Rt(1);break;case 1:this.Rt(4);break;case 4:this.
Rt(3);break;case 3:this.Rt(2);break;default:this.Rt(0);}break;default:DI.PF=true;
}},Anw:function(Ll,AaS){if(!Ll)return;var EZ=A._NewObject(A.Device.Filter,0);var
Hk=A._NewObject(A.Device.Int32FilterCriterion,0);Hk.Initialize(1,0,AaS,true);EZ.
CQ(Hk);var Axt=A._NewObject(A.Device.AssessmentFilterCriterion,0);Axt.Initialize(
3,5,0,true);EZ.CQ(Axt);Ll.Bo(EZ);},Agp:function(H){var Ant=0;var AX_=A._GetAutoObject(
A.Device.Device).Bt.Cf();var Ca=A._NewObject(A.Device.Rating,0);while(Ant<AX_){Ca.
Fq(Ant,A._GetAutoObject(A.Device.Device).Bt);this.A8N(Ca,0);var BuI=A._GetAutoObject(
A.Device.Helper).X0(2);this.A8N(Ca,BuI);Ant++;}C.E0.Agp.call(this,H);},Yy:function(
H){A.ow([this,this.A8r],this);C.E0.Yy.call(this,H);},Abi:function(H){this.Arb=A.
_NewObject(A.Device.Int32ArrayWrapper,0);this.Ara=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Arc=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Ard=A._NewObject(A.
Device.Int32ArrayWrapper,0);this.Are=A._NewObject(A.Device.Int32ArrayWrapper,0);
this.Arf=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Arg=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Arh=A._NewObject(A.Device.Int32ArrayWrapper,0);C.E0.Abi.
call(this,H);},DD:function(H){C.E0.DD.call(this,H);this.N.O4(true);this.N.O5(true
);},A8N:function(DG,A7p){if(!DG||(DG.Timestamp<A7p))return;if(!A7p){this.Arb.Set(
DG.Appearance,this.Arb.Get(DG.Appearance)+1);this.Ard.Set(DG.Faeces,this.Ard.Get(
DG.Faeces)+1);this.Arf.Set(DG.Feed,this.Arf.Get(DG.Feed)+1);this.Arh.Set(DG.Respiratory
,this.Arh.Get(DG.Respiratory)+1);}else{this.Ara.Set(DG.Appearance,this.Ara.Get(DG.
Appearance)+1);this.Arc.Set(DG.Faeces,this.Arc.Get(DG.Faeces)+1);this.Are.Set(DG.
Feed,this.Are.Get(DG.Feed)+1);this.Arg.Set(DG.Respiratory,this.Arg.Get(DG.Respiratory
)+1);}},Rt:function(E){if(this.RatedAttribute===E)return;this.RatedAttribute=E;this.
WR.JP(this.YS.KN(E));A.ow([this,this.A8r],this);},A8r:function(H){var YT=null;var
YU=null;switch(this.RatedAttribute){case 2:{YT=this.Ara;YU=this.Arb;}break;case 4:{
YT=this.Arc;YU=this.Ard;}break;case 1:{YT=this.Are;YU=this.Arf;}break;case 0:{YT=
A._NewObject(A.Device.Int32ArrayWrapper,0);YU=A._NewObject(A.Device.Int32ArrayWrapper
,0);}break;case 3:{YT=this.Arg;YU=this.Arh;}break;default:throw new Error(BkZ+this.
RatedAttribute.toFixed());}var ACs=A._NewObject(A.abw.APq,0);ACs.NP(YT.Get(3),A.
iF.E1);ACs.NP(YT.Get(2),A.iF.HB);ACs.NP(YT.Get(1),A.iF.F0);var ACt=A._NewObject(
A.abw.APq,0);ACt.NP(YU.Get(3),A.iF.E1);ACt.NP(YU.Get(2),A.iF.HB);ACt.NP(YU.Get(1
),A.iF.F0);this.Zq.Aad(ACs);this.Zr.Aad(ACt);var AYv=YT.AkN()-YT.Get(5);var A_N=
0;var A_L=0;if(AYv>0){A_N=(YT.Get(2)/AYv)*100;A_L=(YT.Get(1)/AYv)*100;}var AG9=YU.
AkN()-YU.Get(5);this.IC.W(!AG9);var A_O=0;var A_M=0;if(AG9>0){A_O=(YU.Get(2)/AG9
)*100;A_M=(YU.Get(1)/AG9)*100;}this.Zq.A4p(A.aap(A_N,0,0)+AdN);this.Zq.A37(A.aap(
A_L,0,0)+AdN);this.Zr.A4p(A.aap(A_O,0,0)+AdN);this.Zr.A37(A.aap(A_M,0,0)+AdN);},
_Init:function(aArg){C.E0._Init.call(this,aArg);A.Device.RatedAttributeToString.
_Init.call(this.YS={I:this},0);C.MS._Init.call(this.WR={I:this},0);C.Ay9._Init.call(
this.Zr={I:this},0);C.Ay9._Init.call(this.Zq={I:this},0);this.__proto__=C.AJ0;this.
Dw(C.AKT);this.Aik(A.z2(A.abg.A0B));this.Afx(A.z2(A.abg.Ala));this.WR.G(Ke);this.
WR.Aj(true);this.WR.U(A.z2(A.abg.At$)+A.z2(A.abg.Colon));this.WR.Bk(false);this.
WR.Bgr(false);this.Zr.G(Bk0);this.Zr.U(A.z2(A.abg.ACf));this.Zq.G(Bk1);this.Zq.U(
A.z2(A.abg.A1z));this.IC.G(Al1);this.J(this.WR,-1);this.J(this.Zr,-1);this.J(this.
Zq,-1);this.Arb=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Ara=A._NewObject(
A.Device.Int32ArrayWrapper,0);this.Ard=A._NewObject(A.Device.Int32ArrayWrapper,0
);this.Arc=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Arf=A._NewObject(A.Device.
Int32ArrayWrapper,0);this.Are=A._NewObject(A.Device.Int32ArrayWrapper,0);this.Arh=
A._NewObject(A.Device.Int32ArrayWrapper,0);this.Arg=A._NewObject(A.Device.Int32ArrayWrapper
,0);this.Init(aArg);},_Done:function(){this.__proto__=C.E0;this.YS._Done();this.
WR._Done();this.Zr._Done();this.Zq._Done();C.E0._Done.call(this);},_ReInit:function(
){C.E0._ReInit.call(this);this.YS._ReInit();this.WR._ReInit();this.Zr._ReInit();
this.Zq._ReInit();this.Aik(A.z2(A.abg.A0B));this.Afx(A.z2(A.abg.Ala));this.WR.U(
A.z2(A.abg.At$)+A.z2(A.abg.Colon));this.Zr.U(A.z2(A.abg.ACf));this.Zq.U(A.z2(A.abg.
A1z));},_Mark:function(D){var B;C.E0._Mark.call(this,D);if((B=this.Arb)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Ara)&&(B._cycle!=D))B._Mark(B._cycle=D);if((
B=this.Ard)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arc)&&(B._cycle!=D))B.
_Mark(B._cycle=D);if((B=this.Arf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Are)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Arh)&&(B._cycle!=D))B._Mark(B.
_cycle=D);if((B=this.Arg)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.YS)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.WR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Zr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zq)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::EvaluationRatingsScreen"};C.AJ1={Acn:null,Ti:null,Tj:null
,Acm:null,Tf:null,Tg:null,AFS:0,AFR:0,AFy:0,AFx:0,Abb:false,C6:function(){this.Yy(
this);},Anw:function(Ll,AaS){if(!Ll)return;var EZ=A._NewObject(A.Device.Filter,0
);var Hk=A._NewObject(A.Device.Int32FilterCriterion,0);Hk.Initialize(1,0,AaS,true
);EZ.CQ(Hk);var AxL=A._NewObject(A.Device.Int32FilterCriterion,0);AxL.Initialize(
7,2,0,true);EZ.CQ(AxL);Ll.Bo(EZ);},Agp:function(H){if(A._GetAutoObject(A.Device.
Helper).V.LastRatingTemperature===2)this.AFS++;else if(A._GetAutoObject(A.Device.
Helper).V.LastRatingTemperature===1)this.AFR++;var Ant=0;var AX_=A._GetAutoObject(
A.Device.Device).Bt.Cf();var Aq$;var Ax4=0;while(Ant<AX_){this.Abb=true;Aq$=A._GetAutoObject(
A.Device.Device).Bt.ID(Ant,9);if(Aq$===1)Ax4=1;else if((Aq$===2)&&(Ax4!==1))Ax4=
2;Ant++;}if(Ax4===1)this.AFx++;else if(Ax4===2)this.AFy++;C.E0.Agp.call(this,H);
},Yy:function(H){var A_J=0;var A_K=0;if(this.R0>0){A_J=(this.AFS/this.R0)*100;A_K=(
this.AFR/this.R0)*100;}this.Ti.JP(((((((A.aap(A_J,0,0)+AEL)+this.AFS.toFixed())+
Cw)+A.z2(A.abg.AAI))+Cw)+this.R0.toFixed())+Nu);this.Tj.JP(((((((A.aap(A_K,0,0)+
AEL)+this.AFR.toFixed())+Cw)+A.z2(A.abg.AAI))+Cw)+this.R0.toFixed())+Nu);var A_H=
0;var A_I=0;if(this.R0>0){A_H=(this.AFy/this.R0)*100;A_I=(this.AFx/this.R0)*100;
}this.Tf.JP(((((((A.aap(A_H,0,0)+AEL)+this.AFy.toFixed())+Cw)+A.z2(A.abg.AAI))+Cw
)+this.R0.toFixed())+Nu);this.Tg.JP(((((((A.aap(A_I,0,0)+AEL)+this.AFx.toFixed()
)+Cw)+A.z2(A.abg.AAI))+Cw)+this.R0.toFixed())+Nu);this.IC.W(!this.Abb);C.E0.Yy.call(
this,H);},Abi:function(H){this.AFx=0;this.AFy=0;this.AFR=0;this.AFS=0;this.Abb=false;
C.E0.Abi.call(this,H);},_Init:function(aArg){C.E0._Init.call(this,aArg);C.AeB._Init.
call(this.Acn={I:this},0);C.Ahf._Init.call(this.Ti={I:this},0);C.Ahf._Init.call(
this.Tj={I:this},0);C.AeB._Init.call(this.Acm={I:this},0);C.Ahf._Init.call(this.
Tf={I:this},0);C.Ahf._Init.call(this.Tg={I:this},0);this.__proto__=C.AJ1;this.Dw(
C.AKU);this.Aik(A.z2(A.abg.A0C));this.Afx(A.z2(A.abg.AoB));this.Acn.G(Ke);this.Acn.
Aj(true);this.Acn.U(A.z2(A.abg.A0G));this.Acn.Bk(false);this.Ti.G(RT);this.Ti.Aj(
true);this.Ti.U(A.z2(A.abg.Moderate)+A.z2(A.abg.Colon));this.Ti.Bk(true);this.Ti.
Aiq(2);this.Tj.G(Yl);this.Tj.Aj(true);this.Tj.U(A.z2(A.abg.Asu)+A.z2(A.abg.Colon
));this.Tj.Bk(true);this.Tj.Aiq(1);this.Acm.G(Ai2);this.Acm.Aj(true);this.Acm.U(
A.z2(A.abg.A0H));this.Acm.Bk(false);this.Tf.G(Al4);this.Tf.Aj(true);this.Tf.U(A.
z2(A.abg.Moderate)+A.z2(A.abg.Colon));this.Tf.Bk(true);this.Tf.Aiq(2);this.Tg.G(
Ap_);this.Tg.Aj(true);this.Tg.U(A.z2(A.abg.Asu)+A.z2(A.abg.Colon));this.Tg.Bk(true
);this.Tg.Aiq(1);this.J(this.Acn,0);this.J(this.Ti,0);this.J(this.Tj,0);this.J(this.
Acm,0);this.J(this.Tf,0);this.J(this.Tg,0);this.Ti.Y(A.zW(A.eV.Az));this.Tj.Y(A.
zW(A.eV.Az));this.Tf.Y(A.zW(A.eV.Az));this.Tg.Y(A.zW(A.eV.Az));},_Done:function(
){this.__proto__=C.E0;this.Acn._Done();this.Ti._Done();this.Tj._Done();this.Acm.
_Done();this.Tf._Done();this.Tg._Done();C.E0._Done.call(this);},_ReInit:function(
){C.E0._ReInit.call(this);this.Acn._ReInit();this.Ti._ReInit();this.Tj._ReInit();
this.Acm._ReInit();this.Tf._ReInit();this.Tg._ReInit();this.Aik(A.z2(A.abg.A0C));
this.Afx(A.z2(A.abg.AoB));this.Acn.U(A.z2(A.abg.A0G));this.Ti.U(A.z2(A.abg.Moderate
)+A.z2(A.abg.Colon));this.Tj.U(A.z2(A.abg.Asu)+A.z2(A.abg.Colon));this.Acm.U(A.z2(
A.abg.A0H));this.Tf.U(A.z2(A.abg.Moderate)+A.z2(A.abg.Colon));this.Tg.U(A.z2(A.abg.
Asu)+A.z2(A.abg.Colon));this.Ti.Y(A.zW(A.eV.Az));this.Tj.Y(A.zW(A.eV.Az));this.Tf.
Y(A.zW(A.eV.Az));this.Tg.Y(A.zW(A.eV.Az));this.C6();},_Mark:function(D){var B;C.
E0._Mark.call(this,D);if((B=this.Acn)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ti
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tj)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Acm)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Tg)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationTemperaturesScreen"
};C.Ar5={Ku:null,Ag5:null,Ag6:null,Akf:null,ZD:null,Ve:null,ZA:null,RK:null,ZB:null
,RL:null,ZE:null,Vf:null,AE:null,Aa8:0,Aw1:0,AmY:0,AW8:0,A9g:0,C6:function(){this.
Yy(this);},DW:function(H){switch(this.CH.CO){case 4:{if(this.IC.Fe())return;var Pw=
this.Ac.Br[1]+80;this.Ac.Go([this.Ac.Br[0],Pw]);this.Ac.AbJ(null,null);}break;case
5:{if(this.IC.Fe())return;var Pw=this.Ac.Br[1]-80;this.Ac.Go([this.Ac.Br[0],Pw]);
this.Ac.AbJ(null,null);}break;default:C.E0.DW.call(this,H);}},Anw:function(Ll,AaS
){if(!Ll)return;var EZ=A._NewObject(A.Device.Filter,0);var Hk=A._NewObject(A.Device.
Int32FilterCriterion,0);Hk.Initialize(1,0,AaS,true);EZ.CQ(Hk);var Aa4=A._NewObject(
A.Device.Int32FilterCriterion,0);Aa4.Initialize(8,2,0,true);EZ.CQ(Aa4);Ll.Bo(EZ);
},Agp:function(H){if(this.A89()){this.Ku.NP(A._GetAutoObject(A.Device.Helper).V.
LastBodyWeight);if(A._GetAutoObject(A.Device.Helper).V.Aor()){var Pm=A._GetAutoObject(
A.Device.Helper).L7(A._GetAutoObject(A.Device.Helper).V.TimestampFirstWeighing,A.
_GetAutoObject(A.Device.Helper).V.TimestampLastWeighing);if(Pm>0){var AWH=A._GetAutoObject(
A.abk.Dy).Ajm(Pm,A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight,A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight);this.Ag5.NP(AWH);}}var AXm=A._GetAutoObject(A.
Device.Device).Bt.Cf()-2;if(AXm>=0){var BsI=A._GetAutoObject(A.Device.Device).Bt.
Azp(AXm,8);var BsH=A._GetAutoObject(A.Device.Device).Bt.Ht(AXm,6);var Pm=A._GetAutoObject(
A.Device.Helper).L7(BsH,A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing
);if(Pm>0){var AWH=((A._GetAutoObject(A.Device.Helper).V.LastBodyWeight-BsI)/Pm)|
0;this.Ag6.NP(AWH);}}if((A._GetAutoObject(A.Device.Helper).V.Aor()&&((A._GetAutoObject(
A.Device.Helper).V.FirstBodyWeight*2)<A._GetAutoObject(A.Device.Helper).V.LastBodyWeight
))&&(A._GetAutoObject(A.Device.Helper).V.Sg()<=180)){var AHo=A._GetAutoObject(A.
Device.Helper).V.LastBodyWeight-A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight;
var R_=A._GetAutoObject(A.Device.Helper).L7(A._GetAutoObject(A.Device.Helper).V.
TimestampFirstWeighing,A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing
);var BtV=A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight/(AHo/R_);this.Akf.
NP(BtV);}if(A._GetAutoObject(A.Device.Helper).V.AnimalType===1){this.Aa8++;this.
AmY=A._GetAutoObject(A.Device.Helper).V.VisualId;}if(A._GetAutoObject(A.Device.Helper
).V.TimestampLastWeighing<A._GetAutoObject(A.Device.Helper).X0(7)){this.Aw1++;this.
AW8=A._GetAutoObject(A.Device.Helper).V.VisualId;this.A9g=A._GetAutoObject(A.Device.
Helper).L7(A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing,A._GetAutoObject(
A.Device.Helper).DR());}}C.E0.Agp.call(this,H);},Yy:function(H){var AYT=this.Ag5.
AhD()|0;var AYV=this.Ag6.AhD()|0;if(this.Aa8>1)A._GetAutoObject(A.Device.Device).
A_(56,true,this.Aa8.toFixed(),0,null);if(this.Aa8===1)A._GetAutoObject(A.Device.
Device).A_(53,true,this.AmY.toFixed(),0,null);if(this.Aw1>1)A._GetAutoObject(A.Device.
Device).A_(52,true,this.Aw1.toFixed(),0,null);if(this.Aw1===1)A._GetAutoObject(A.
Device.Device).A_(57,true,(this.AW8.toFixed()+Aqa)+this.A9g.toFixed(),0,null);if(
this.Ku.AN>0)this.Ve.U(((((((A._GetAutoObject(A.Device.Converter).AuJ(this.Ku.AhD(
)|0,1)+Avl)+A._GetAutoObject(A.Device.Converter).AuJ(this.Ku.An$()|0,1))+Cw)+A._GetAutoObject(
A.abk.Dy).Abh())+Avm)+this.Ku.AN.toFixed())+Nu);else this.Ve.U(A.z2(A.abg.Unknown
));if(this.Ag5.AN>0)this.RK.U(((((((A._GetAutoObject(A.Device.Converter).Np(AYT,
2,true)+Avl)+A._GetAutoObject(A.Device.Converter).Np(this.Ag5.An$()|0,2,true))+Cw
)+A._GetAutoObject(A.abk.Dy).YD())+Avm)+this.Ag5.AN.toFixed())+Nu);else this.RK.
U(A.z2(A.abg.Unknown));if(this.Ag6.AN>0)this.RL.U(((((((A._GetAutoObject(A.Device.
Converter).Np(AYV,2,true)+Avl)+A._GetAutoObject(A.Device.Converter).Np(this.Ag6.
An$()|0,2,true))+Cw)+A._GetAutoObject(A.abk.Dy).YD())+Avm)+this.Ag6.AN.toFixed()
)+Nu);else this.RL.U(A.z2(A.abg.Unknown));if(this.Akf.AN>0)this.Vf.U(((((((A.aap(
this.Akf.AhD(),0,1)+Avl)+A.aap(this.Akf.An$(),0,1))+Cw)+A.z2(A.abg.Ba3))+Avm)+this.
Akf.AN.toFixed())+Nu);else this.Vf.U(A.z2(A.abg.Unknown));var AYU=0;var AYW=0;var
Abb=false;if(this.Ku.AN>0)Abb=true;var HH=0;if(!!A._GetAutoObject(A.Device.Device
).Aq.Filter){var AF9=A._GetAutoObject(A.Device.Device).Aq.Filter.DJ(14,0);if(!!(
A.Device.AnimalTypeFilterCriterion.isPrototypeOf(AF9)?AF9:null))HH=(A.Device.AnimalTypeFilterCriterion.
isPrototypeOf(AF9)?AF9:null).AY;}if(this.Ag5.AN>0){Abb=true;AYU=A._GetAutoObject(
A.Device.Converter).A5D(AYT,HH);}if(this.Ag6.AN>0){Abb=true;AYW=A._GetAutoObject(
A.Device.Converter).A5D(AYV,HH);}this.RK.Aiq(AYU);this.RL.Aiq(AYW);this.IC.W(!Abb
);C.E0.Yy.call(this,H);},Abi:function(H){this.Ku.Ww();this.Ag5.Ww();this.Ag6.Ww(
);this.Akf.Ww();this.Aa8=0;this.Aw1=0;this.AmY=0;this.AW8=0;C.E0.Abi.call(this,H
);},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-B[1]);this.AE.N6((B=this.
Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);},A89:function(){return A._GetAutoObject(
A.Device.Helper).V.LastBodyWeight>0;},Iv:function(H){A.ow([this,this.FZ],this);}
,_Init:function(aArg){C.E0._Init.call(this,aArg);C.AeB._Init.call(this.ZD={I:this
},0);C.H9._Init.call(this.Ve={I:this},0);C.AeB._Init.call(this.ZA={I:this},0);C.
Ahf._Init.call(this.RK={I:this},0);C.AeB._Init.call(this.ZB={I:this},0);C.Ahf._Init.
call(this.RL={I:this},0);C.AeB._Init.call(this.ZE={I:this},0);C.H9._Init.call(this.
Vf={I:this},0);C.AE._Init.call(this.AE={I:this},0);this.__proto__=C.Ar5;this.Dw(
C.Asr);this.Aik(A.z2(A.abg.A0D));this.Afx(A.z2(A.abg.AoC));this.ZD.G(AEH);this.ZD.
Aj(true);this.ZD.U(A.z2(A.abg.AZz));this.ZD.Bk(false);this.ZD.JO(5);this.Ve.G(AUE
);this.Ve.Aj(true);this.Ve.U(A.jm);this.Ve.Bk(true);this.ZA.G(Aqe);this.ZA.Aj(true
);this.ZA.U(A.z2(A.abg.AHM));this.ZA.Bk(false);this.ZA.JO(5);this.RK.G(Aqf);this.
RK.Aj(true);this.RK.U(A.jm);this.RK.Bk(true);this.RK.JP(A.jm);this.ZB.G(Aqg);this.
ZB.Aj(true);this.ZB.U(A.z2(A.abg.Arz));this.ZB.Bk(false);this.ZB.JO(5);this.RL.G(
Bk2);this.RL.Aj(true);this.RL.U(A.jm);this.RL.Bk(true);this.RL.JP(A.jm);this.ZE.
G(AUF);this.ZE.Aj(true);this.ZE.U(A.z2(A.abg.AZK));this.ZE.Bk(false);this.ZE.JO(
5);this.Vf.G(Al$);this.Vf.Aj(true);this.Vf.U(A.jm);this.Vf.Bk(true);this.AE.G(JV
);this.J(this.ZD,-1);this.J(this.Ve,-1);this.J(this.ZA,-1);this.J(this.RK,-1);this.
J(this.ZB,-1);this.J(this.RL,-1);this.J(this.ZE,-1);this.J(this.Vf,-1);this.J(this.
AE,-1);this.Ac.Eu=[this,this.Iv];this.Ku=A._NewObject(C.AsP,0);this.Ag5=A._NewObject(
C.AsP,0);this.Ag6=A._NewObject(C.AsP,0);this.Ve.Y(A.zW(A.eV.Au));this.RK.Y(A.zW(
A.eV.Az));this.RL.Y(A.zW(A.eV.Az));this.Vf.Y(A.zW(A.eV.Az));this.Akf=A._NewObject(
C.A0N,0);},_Done:function(){this.__proto__=C.E0;this.ZD._Done();this.Ve._Done();
this.ZA._Done();this.RK._Done();this.ZB._Done();this.RL._Done();this.ZE._Done();
this.Vf._Done();this.AE._Done();C.E0._Done.call(this);},_ReInit:function(){C.E0.
_ReInit.call(this);this.ZD._ReInit();this.Ve._ReInit();this.ZA._ReInit();this.RK.
_ReInit();this.ZB._ReInit();this.RL._ReInit();this.ZE._ReInit();this.Vf._ReInit(
);this.AE._ReInit();this.Aik(A.z2(A.abg.A0D));this.Afx(A.z2(A.abg.AoC));this.ZD.
U(A.z2(A.abg.AZz));this.ZA.U(A.z2(A.abg.AHM));this.ZB.U(A.z2(A.abg.Arz));this.ZE.
U(A.z2(A.abg.AZK));this.Ve.Y(A.zW(A.eV.Au));this.RK.Y(A.zW(A.eV.Az));this.RL.Y(A.
zW(A.eV.Az));this.Vf.Y(A.zW(A.eV.Az));this.C6();},_Mark:function(D){var B;C.E0._Mark.
call(this,D);if((B=this.Ku)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag5)&&(
B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ag6)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.Akf)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.ZD)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Ve)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZA)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.RK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
ZB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.RL)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.ZE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Vf)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AE)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationWeightsScreen"
};C.Zy={_Init:function(aArg){C.AhI._Init.call(this,aArg);this.__proto__=C.Zy;this.
CY.At(A.zW(A.abi.AzZ));},_className:"Application::HeaderEvaluationFilter"};C.JK={
C6:function(){this.Text.R(A.z2(A.abg.None));},EA:function(H){C.AhI.EA.call(this,
H);this.CY.At(A._GetAutoObject(A.Device.Converter).AeF(A._GetAutoObject(A.Device.
Device).Jf));},_Init:function(aArg){C.AhI._Init.call(this,aArg);this.__proto__=C.
JK;},_ReInit:function(){C.AhI._ReInit.call(this);this.C6();},_className:"Application::HeaderListFilter"
};C.Asr={Init:function(aArg){this.CY.At(A._GetAutoObject(A.abk.Dy).A8G());},_Init:
function(aArg){C.Zy._Init.call(this,aArg);this.__proto__=C.Asr;this.Init(aArg);}
,_className:"Application::HeaderEvaluationWeightsFilter"};C.AKU={Init:function(aArg
){this.CY.At(A.zW(A.abi.ZH));},_Init:function(aArg){C.Zy._Init.call(this,aArg);this.
__proto__=C.AKU;this.Init(aArg);},_className:"Application::HeaderEvaluationTemperaturesFilter"
};C.AKT={Init:function(aArg){this.CY.At(A.zW(A.abi.AkS));},_Init:function(aArg){
C.Zy._Init.call(this,aArg);this.__proto__=C.AKT;this.Init(aArg);},_className:"Application::HeaderEvaluationRatingsFilter"
};C.AKS={WO:null,CY:null,AQ:null,C6:function(){this.WO.R(A.z2(A.abg.AZR));},CZ:function(
E){C.BW.CZ.call(this,E);this.WO.L(E);this.CY.L(E);},_Init:function(aArg){C.BW._Init.
call(this,aArg);C.CG._Init.call(this.WO={I:this},0);A.abh.Am._Init.call(this.CY={
I:this},0);A.abh.DK._Init.call(this.AQ={I:this},0);this.__proto__=C.AKS;this.WO.
G(Bk3);this.WO.R(A.z2(A.abg.AZR));this.WO.A0(0x11);this.CY.G(Bk4);this.AQ.DL(Bk5
);this.AQ.D5(Bk6);this.AQ.L(A.iF.A7);this.J(this.WO,0);this.J(this.CY,0);this.J(
this.AQ,0);this.WO.Y(A.zW(A.eV.Au));this.WO.By(A.zW(A.eV.Az));this.CY.At(A.zW(A.
abi.ALZ));},_Done:function(){this.__proto__=C.BW;this.WO._Done();this.CY._Done();
this.AQ._Done();C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this
);this.WO._ReInit();this.CY._ReInit();this.AQ._ReInit();this.C6();},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.WO)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.CY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderEvaluationLosses"};C.Aco={Zz:null,AhQ:null,AhN:
null,AhO:null,_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.call(this.
Zz={I:this},0);A.abh.Am._Init.call(this.AhQ={I:this},0);A.abh.Am._Init.call(this.
AhN={I:this},0);A.abh.Am._Init.call(this.AhO={I:this},0);this.__proto__=C.Aco;this.
Zz.G(Bk7);this.Zz.R(A.z2(A.abg.Year));this.Zz.A0(0x11);this.Zz.L(A.iF.Text);this.
AhQ.G(A51);this.AhQ.L(A.iF.Text);this.AhN.G(Bk8);this.AhN.L(A.iF.Text);this.AhO.
G(Bk9);this.AhO.L(A.iF.Text);this.J(this.Zz,0);this.J(this.AhQ,0);this.J(this.AhN
,0);this.J(this.AhO,0);this.Zz.Y(A.zW(A.eV.OK));this.Zz.By(A.zW(A.eV.K7));this.AhQ.
At(A.zW(A.abi.AL_));this.AhN.At(A.zW(A.abi.AL9));this.AhO.At(A.zW(A.abi.AMf));},
_Done:function(){this.__proto__=C.Eg;this.Zz._Done();this.AhQ._Done();this.AhN._Done(
);this.AhO._Done();C.Eg._Done.call(this);},_ReInit:function(){C.Eg._ReInit.call(
this);this.Zz._ReInit();this.AhQ._ReInit();this.AhN._ReInit();this.AhO._ReInit();
},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Zz)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AhQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhN)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AhO)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineEvaluationLosses"};C.An3={Ahk:null,AQ:null,A4:null,DU:null
,U4:null,Tb:null,Gt:null,V0:0,AqH:0,Ajs:0,Ax6:0,Init:function(aArg){},Bh:function(
aSize){C.A$.Bh.call(this,aSize);this.T.G(A.aaQ(this.T.M,((aSize[0]*25)/100)|0));
this.AQ.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.Tb.G([this.T.M[2],0,((aSize[
0]*50)/100)|0,aSize[1]]);this.A4.G([this.Tb.M[2]-1,0,this.Tb.M[2]+1,aSize[1]]);this.
U4.G([this.Tb.M[2],0,((aSize[0]*75)/100)|0,aSize[1]]);this.DU.G([this.U4.M[2]-1,
0,this.U4.M[2]+1,aSize[1]]);this.Gt.G([this.U4.M[2],0,aSize[0],aSize[1]]);this.Ahk.
G(this.Gt.M);},Ah:function(Ae){C.A$.Ah.call(this,Ae);this.U(this.Ax6.toFixed());
this.Tb.L(this.T.AM);this.Tb.R(this.Ajs.toFixed());this.U4.L(this.T.AM);this.U4.
R(this.AqH.toFixed());var Ca=this.BtU(this.V0);this.Gt.L(A._GetAutoObject(A.abk.
Assessment).VN(Ca));this.Ahk.L(A._GetAutoObject(A.abk.Assessment).Pq(Ca));this.Gt.
R(A.aap(this.V0,0,0)+AdN);},B8:function(Z){if(!this.AZ)return;this.Ho=Z;Z=(this.
AZ.Cf()-Z)-1;if(!!this.AZ){this.Ajs=this.AZ.Cq(Z,1);this.AqH=this.AZ.Cq(Z,2);this.
Ax6=this.AZ.Cq(Z,0);if(this.Ajs>0)this.V0=(this.AqH/this.Ajs)*100;else this.V0=0;
this.Al();}},BtU:function(V0){if(V0>=8)return 1;else if(V0>=4)return 2;else return 3;
},_Init:function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.Ahk={
I:this},0);A.abh.AH._Init.call(this.AQ={I:this},0);A.abh.AH._Init.call(this.A4={
I:this},0);A.abh.AH._Init.call(this.DU={I:this},0);A.abh.Text._Init.call(this.U4={
I:this},0);A.abh.Text._Init.call(this.Tb={I:this},0);A.abh.Text._Init.call(this.
Gt={I:this},0);this.__proto__=C.An3;this.Ahk.G(Al2);this.AQ.L(A.iF.A7);this.A4.L(
A.iF.A7);this.DU.G(Al2);this.DU.L(A.iF.A7);this.U4.L(A.iF.Text);this.Tb.G(Al2);this.
Tb.L(A.iF.Text);this.Gt.L(A.iF.Text);this.J(this.Ahk,0);this.J(this.AQ,0);this.J(
this.A4,0);this.J(this.DU,0);this.J(this.U4,0);this.J(this.Tb,0);this.J(this.Gt,
0);this.U4.Y(A.zW(A.eV.Au));this.Tb.Y(A.zW(A.eV.Au));this.Gt.Y(A.zW(A.eV.Au));this.
Init(aArg);},_Done:function(){this.__proto__=C.A$;this.Ahk._Done();this.AQ._Done(
);this.A4._Done();this.DU._Done();this.U4._Done();this.Tb._Done();this.Gt._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.Ahk._ReInit(
);this.AQ._ReInit();this.A4._ReInit();this.DU._ReInit();this.U4._ReInit();this.Tb.
_ReInit();this.Gt._ReInit();},_Mark:function(D){var B;C.A$._Mark.call(this,D);if((
B=this.Ahk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DU)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.U4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Tb)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::EvaluationLossesListItem"};C.Ahf={B3:null,AuE:A.jm,Rating:0,Ah:function(
Ae){C.H9.Ah.call(this,Ae);if(!!this.Rating){this.Background.L(A._GetAutoObject(A.
abk.Assessment).Pq(this.Rating));this.T.L(A._GetAutoObject(A.abk.Assessment).VN(
this.Rating));}this.B3.L(this.T.AM);},Y:function(E){C.H9.Y.call(this,E);if((E===
A.zW(A.eV.OK))||(E===A.zW(A.eV.Au)))this.B3.Y(A.zW(A.eV.Au));else if((E===A.zW(A.
eV.K7))||(E===A.zW(A.eV.Az)))this.B3.Y(A.zW(A.eV.Az));else this.B3.Y(E);},JP:function(
E){if(this.AuE===E)return;this.AuE=E;this.B3.R(E);},Aiq:function(E){if(this.Rating===
E)return;this.Rating=E;this.Al();},_Init:function(aArg){C.H9._Init.call(this,aArg
);A.abh.Text._Init.call(this.B3={I:this},0);this.__proto__=C.Ahf;this.B3.AW(0x34
);this.B3.G(Yo);this.B3.I0(true);this.B3.A0(0x11);this.B3.L(A.iF.Text);this.B3.Aj(
true);this.J(this.B3,0);this.B3.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=
C.H9;this.B3._Done();C.H9._Done.call(this);},_ReInit:function(){C.H9._ReInit.call(
this);this.B3._ReInit();},_Mark:function(D){var B;C.H9._Mark.call(this,D);if((B=
this.B3)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRatedInfoItem"
};C.Ay9={Ni:null,Rx:null,T:null,AlB:null,AlA:null,Adc:null,Adb:null,Dn:RS,A5I:A.
jm,A4G:A.jm,Aad:function(E){if(this.Ni===E)return;this.Ni=E;this.Rx.Aad(this.Ni);
},U:function(E){if(this.Dn===E)return;this.Dn=E;this.T.R(E);},A4p:function(E){if(
this.A5I===E)return;this.A5I=E;this.Adc.R(E);},A37:function(E){if(this.A4G===E)return;
this.A4G=E;this.Adb.R(E);},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.
abw.Rx._Init.call(this.Rx={I:this},0);A.abh.Text._Init.call(this.T={I:this},0);A.
abh.AH._Init.call(this.AlB={I:this},0);A.abh.AH._Init.call(this.AlA={I:this},0);
A.abh.Text._Init.call(this.Adc={I:this},0);A.abh.Text._Init.call(this.Adb={I:this
},0);this.__proto__=C.Ay9;this.G(Bk_);this.Rx.G(Bk$);this.Rx.An(false);this.Rx.Bgy(
360);this.Rx.BgG(0.5);this.T.AW(0x1D);this.T.G(Vp);this.T.KH(true);this.T.R(RS);
this.T.L(A.iF.Text);this.AlB.G(A52);this.AlB.L(A.iF.HB);this.AlA.G(A53);this.AlA.
L(A.iF.F0);this.Adc.AW(0x1D);this.Adc.G(A52);this.Adc.L(A.iF.Text);this.Adb.AW(0x1D
);this.Adb.G(A53);this.Adb.L(A.iF.CR);this.J(this.Rx,0);this.J(this.T,0);this.J(
this.AlB,0);this.J(this.AlA,0);this.J(this.Adc,0);this.J(this.Adb,0);this.Rx.BgI(
A.zW(A.abw.AO8));this.T.Y(A.zW(A.eV.Az));this.Adc.Y(A.zW(A.eV.Az));this.Adb.Y(A.
zW(A.eV.Az));},_Done:function(){this.__proto__=A.Core.O;this.Rx._Done();this.T._Done(
);this.AlB._Done();this.AlA._Done();this.Adc._Done();this.Adb._Done();A.Core.O._Done.
call(this);},_ReInit:function(){A.Core.O._ReInit.call(this);this.Rx._ReInit();this.
T._ReInit();this.AlB._ReInit();this.AlA._ReInit();this.Adc._ReInit();this.Adb._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Ni)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Rx)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
T)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AlB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AlA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adc)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Adb)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationRatingsElement"
};C.AiE={Background:null,Text:null,String:A.jm,R:function(E){if(this.String===E)
return;this.String=E;this.Text.R(E);},_Init:function(aArg){A.Core.O._Init.call(this
,aArg);A.abh.AH._Init.call(this.Background={I:this},0);C.CG._Init.call(this.Text={
I:this},0);this.__proto__=C.AiE;this.G(Vt);this.Background.AW(0x3F);this.Background.
G(Vt);this.Background.L(A.iF.BcW);this.Text.AW(0x3F);this.Text.G(Vt);this.Text.A0(
0x12);this.Text.L(A.iF.Text);this.J(this.Background,0);this.J(this.Text,0);this.
Text.Y(A.zW(A.eV.Au));this.Text.By(A.zW(A.eV.Az));},_Done:function(){this.__proto__=
A.Core.O;this.Background._Done();this.Text._Done();A.Core.O._Done.call(this);},_ReInit:
function(){A.Core.O._ReInit.call(this);this.Background._ReInit();this.Text._ReInit(
);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Background)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::SemiTransparentTextOverlay"};C.P_={AiO:null,M4:null,CP:null,AaA:null
,Jj:null,TemperatureUnit:null,L1:null,O6:null,Q6:null,S2:null,KI:null,RF:null,Ya:
null,X$:null,Q9:null,G$:null,Ahs:null,Init:function(aArg){this.TemperatureUnit.R(
A._GetAutoObject(A.abk.Temperature).AjA());this.S2.R(A._GetAutoObject(A.abk.Temperature
).AjA());this.Q9.W(!A._GetAutoObject(A.Device.Device).AkF);},Ah:function(Ae){C.Aw.
Ah.call(this,Ae);this.AlQ();this.AuB();this.AaC();this.AuC();},JE:function(H){this.
U2(this);},CF:function(H){var B;C.Aw.CF.call(this,H);A.za([this,this.AGD],[B=A._GetAutoObject(
A.Device.Device),B.AAT,B.AES],0);A.za([this,this.Axc],[B=A._GetAutoObject(A.Device.
Device),B.AAX,B.AEV],0);A.za([this,this.Axc],[B=A._GetAutoObject(A.Device.Device
),B.AN6,B.AUT],0);A.za([this,this.AXC],[B=A._GetAutoObject(A.Device.Device),B.AoG
,B.Aqj],0);A.za([this,this.AXy],[B=A._GetAutoObject(A.Device.Device),B.AAR,B.AEQ
],0);A._GetAutoObject(A.Device.Device).AfP();if(A._GetAutoObject(A.Device.Device
).AkF)A._GetAutoObject(A.Device.Device).AcW(true);A._GetAutoObject(A.Device.Device
).Aup();A.ow([this,this.AXy],this);A.ow([this,this.Axc],this);A.ow([this,this.AXC
],this);},Fc:function(H){var B;A._GetAutoObject(A.Device.Device).AfP();A._GetAutoObject(
A.Device.Device).Aag(false);A._GetAutoObject(A.Device.Device).Ac5(false);A._GetAutoObject(
A.Device.Device).AcW(false);A.zn([this,this.AGD],[B=A._GetAutoObject(A.Device.Device
),B.AAT,B.AES],0);A.zn([this,this.Axc],[B=A._GetAutoObject(A.Device.Device),B.AAX
,B.AEV],0);A.zn([this,this.Axc],[B=A._GetAutoObject(A.Device.Device),B.AN6,B.AUT
],0);A.zn([this,this.AXC],[B=A._GetAutoObject(A.Device.Device),B.AoG,B.Aqj],0);A.
zn([this,this.AXy],[B=A._GetAutoObject(A.Device.Device),B.AAR,B.AEQ],0);},Axc:function(
H){this.Al();},AlQ:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 4:{this.Background.L(A.iF.CE);this.CP.L(A.iF.F0);this.Jj.L(this.CP.AM);this.
L1.L(this.CP.AM);this.TemperatureUnit.L(this.CP.AM);}break;default:{this.Background.
L(A.iF.CE);this.CP.L(A.iF.A6);this.Jj.L(A.iF.Text);this.L1.L(this.Jj.AM);this.TemperatureUnit.
L(this.Jj.AM);this.G$.L(A.iF.F0);}}},AuB:function(){this.AiO.An(A._GetAutoObject(
A.Device.Device).MeasureState===1);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:{this.Jj.R(A.z2(A.abg.AAc));this.CP.At(A.zW(A.abi.AsG));this.CP.Ce(0);this.
M4.Ce(0);}break;case 1:{this.AQw(A._GetAutoObject(A.Device.Device).JT,false);this.
CP.At(A.zW(A.abi.AsG));this.M4.Ce(0);}break;case 2:{this.Q6.R(A._GetAutoObject(A.
Device.Converter).AiN(A._GetAutoObject(A.Device.Device).ACj));this.AQw(A._GetAutoObject(
A.Device.Device).JT,false);this.CP.At(null);this.M4.Ce(1);this.AaA.W(true);this.
O6.W(true);this.Q6.W(true);this.S2.W(true);}break;case 3:{this.APJ();this.AQw(A.
_GetAutoObject(A.Device.Device).JT,true);this.AaA.W(false);this.O6.W(false);this.
Q6.W(false);this.S2.W(false);}break;case 4:{this.Jj.R(A.z2(A.abg.Bc9));this.L1.R(
A.z2(A.abv.Ah_));this.CP.At(A.zW(A.abi.AsI));this.CP.Ce(2);this.M4.Ce(0);}break;
default:A.aa8("%s%e",AD_,A._GetAutoObject(A.Device.Device).MeasureState);}},AaC:
function(){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:{
if((A._GetAutoObject(A.Device.Device).JT<=3240)||(A._GetAutoObject(A.Device.Device
).JT>=5460))this.N.De(null);else this.N.De(A.zW(A.abi.Acs));this.N.Cn(null);}break;
case 3:break;case 4:break;default:;}},ApI:function(H){A._GetAutoObject(C.A1).Fm(
);},U2:function(H){},AU4:function(s){this.U2(s);},AiI:function(H){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:this.BtI(this);break;case 3:break;case
4:break;default:;}},AU3:function(s){this.AiI(s);},AQw:function(Amk,Bsz){if(Bsz)this.
KI.L(A.iF.Be);else this.KI.L(A.iF.F0);if(Amk<=3240){this.L1.W(false);this.TemperatureUnit.
W(false);this.KI.W(true);this.KI.R(A.z2(A.abv.AQk));}else if(Amk>=5460){this.L1.
W(false);this.TemperatureUnit.W(false);this.KI.W(true);this.KI.R(A.z2(A.abv.BiW)
);}else{this.L1.W(true);this.TemperatureUnit.W(true);this.KI.W(false);this.L1.R(
A._GetAutoObject(A.Device.Converter).AiN(Amk));}},AuC:function(){switch(A._GetAutoObject(
A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(A.Device.Device
).JT<=3240)||(A._GetAutoObject(A.Device.Device).JT>=5460))this.Jj.R(A.z2(A.abg.AAc
));else this.Jj.R(A.z2(A.abg.Bjt));break;case 3:break;case 4:break;default:;}},AuD:
function(){},Bjc:function(){switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 3:this.Ya.An(true);break;case 4:this.X$.An(true);break;default:{this.Ya.An(
false);this.X$.An(false);A._GetAutoObject(A.Device.Device).Ac5(false);}}},AGD:function(
H){this.Al();this.AuD();this.Bjc();this.Bja();},AXC:function(H){if(A._GetAutoObject(
A.Device.Device).AkG){this.Q9.L(A.iF.HB);this.Q9.Ce(1);}else{this.Q9.L(A.iF.Be);
this.Q9.Ce(0);}},BtI:function(H){if(!A._GetAutoObject(A.Device.Device).AkF)A._GetAutoObject(
A.Device.Device).AcW(!A._GetAutoObject(A.Device.Device).AkG);},Bja:function(){if(
A._GetAutoObject(A.Device.Device).AkF){this.Q9.W(false);if(A._GetAutoObject(A.Device.
Device).MeasureState===1)A._GetAutoObject(A.Device.Device).AcW(true);else A._GetAutoObject(
A.Device.Device).AcW(false);}else if(A._GetAutoObject(A.Device.Device).MeasureState===
1)this.Q9.W(true);else this.Q9.W(false);},AGF:function(H){this.CF(this);},APJ:function(
){A.aa8("%s",A50);},AXy:function(H){if(A._GetAutoObject(A.Device.Device).G$){this.
Jj.G(Bla);this.L1.G(Blb);this.TemperatureUnit.G(Blc);}else{this.Jj.G(Bld);this.L1.
G(Ble);this.TemperatureUnit.G(Blf);}},_Init:function(aArg){C.Aw._Init.call(this,
aArg);A.abm.FE._Init.call(this.AiO={I:this},0);A.abh.Am._Init.call(this.M4={I:this
},0);A.abh.Am._Init.call(this.CP={I:this},0);A.abh.Am._Init.call(this.AaA={I:this
},0);A.abh.Text._Init.call(this.Jj={I:this},0);A.abh.Text._Init.call(this.TemperatureUnit={
I:this},0);A.abh.Text._Init.call(this.L1={I:this},0);A.abh.Text._Init.call(this.
O6={I:this},0);A.abh.Text._Init.call(this.Q6={I:this},0);A.abh.Text._Init.call(this.
S2={I:this},0);C.CG._Init.call(this.KI={I:this},0);A.Device.Y$._Init.call(this.RF={
I:this},0);A.Device.Y$._Init.call(this.Ya={I:this},0);A.Device.Y$._Init.call(this.
X$={I:this},0);A.abh.Am._Init.call(this.Q9={I:this},0);C.CG._Init.call(this.G$={
I:this},0);A.abm.Y$._Init.call(this.Ahs={I:this},0);this.__proto__=C.P_;var B;this.
N.W(true);this.AiO.FK(1000);this.AiO.BX=2;this.M4.G(Blg);this.M4.L(A.iF.CR);this.
CP.G(Blh);this.CP.L(A.iF.A6);this.CP.Ce(0);this.CP.W(true);this.AaA.G(Bli);this.
AaA.L(A.iF.Text);this.AaA.W(false);this.Jj.KH(true);this.Jj.R(A.z2(A.abg.AAc));this.
Jj.L(A.iF.Text);this.TemperatureUnit.A0(0x9);this.TemperatureUnit.L(A.iF.Text);this.
L1.A0(0x14);this.L1.R(A.z2(A.abv.Ah_));this.L1.L(A.iF.Text);this.O6.G(Blj);this.
O6.R(A.z2(A.abg.O6));this.O6.L(A.iF.Text);this.O6.W(false);this.Q6.G(Blk);this.Q6.
A0(0x14);this.Q6.R(Bll);this.Q6.L(A.iF.Text);this.Q6.W(false);this.S2.G(Blm);this.
S2.R(Bln);this.S2.L(A.iF.Text);this.S2.W(false);this.KI.G(Blo);this.KI.R(A.z2(A.
abv.AQk));this.KI.A0(0x12);this.KI.L(A.iF.F0);this.RF.BX=false;this.RF.Ci=true;this.
RF.IG(1);this.RF.FK(4000);this.RF.Aab(0);this.Ya.BX=false;this.Ya.Ci=true;this.Ya.
IG(2);this.Ya.FK(400);this.Ya.Aab(200);this.X$.BX=false;this.X$.Ci=true;this.X$.
IG(3);this.X$.FK(500);this.X$.Aab(250);this.Q9.G(Blp);this.G$.G(Blq);this.G$.W(A.
_GetAutoObject(A.Device.Device).G$);this.G$.R(A.z2(A.abg.G$));this.G$.A0(0x12);this.
G$.L(A.iF.F0);this.Ahs.An(A._GetAutoObject(A.Device.Device).G$);this.Ahs.FK(500);
this.Ahs.Aab(1000);this.J(this.M4,0);this.J(this.CP,0);this.J(this.AaA,0);this.J(
this.Jj,0);this.J(this.TemperatureUnit,0);this.J(this.L1,0);this.J(this.O6,0);this.
J(this.Q6,0);this.J(this.S2,0);this.J(this.KI,0);this.J(this.Q9,0);this.J(this.G$
,0);this.N.CB=[this,this.ApI];this.N.Ch=[this,this.AU3];this.N.Cm=[this,this.AU4
];this.N.C$(A.zW(A.abi.Acr));this.AiO.Q=[B=this.CP,B.ANX,B.Ce];this.M4.At(A.zW(A.
abi.M4));this.CP.At(A.zW(A.abi.AsG));this.AaA.At(A.zW(A.abi.AMs));this.Jj.Y(A.zW(
A.eV.Au));this.TemperatureUnit.Y(A.zW(A.eV.Au));this.L1.Y(A.zW(A.eV.Ach));this.O6.
Y(A.zW(A.eV.Au));this.Q6.Y(A.zW(A.eV.Gk));this.S2.Y(A.zW(A.eV.Gk));this.KI.Y(A.zW(
A.eV.Ach));this.KI.By(A.zW(A.eV.Gk));this.KI.C5(A.zW(A.eV.Au));this.RF.Q=[B=A._GetAutoObject(
A.Device.Device),B.A24,B.A6Q];this.Ya.Q=[B=A._GetAutoObject(A.Device.Device),B.AAY
,B.AEW];this.X$.Q=[B=A._GetAutoObject(A.Device.Device),B.AAY,B.AEW];this.Q9.At(A.
zW(A.abi.An6));this.G$.Y(A.zW(A.eV.Gk));this.G$.By(A.zW(A.eV.OK));this.G$.C5(A.zW(
A.eV.K7));this.Ahs.Q=[B=this.G$,B.Fe,B.W];this.Init(aArg);},_Done:function(){this.
__proto__=C.Aw;this.AiO._Done();this.M4._Done();this.CP._Done();this.AaA._Done();
this.Jj._Done();this.TemperatureUnit._Done();this.L1._Done();this.O6._Done();this.
Q6._Done();this.S2._Done();this.KI._Done();this.RF._Done();this.Ya._Done();this.
X$._Done();this.Q9._Done();this.G$._Done();this.Ahs._Done();C.Aw._Done.call(this
);},_ReInit:function(){C.Aw._ReInit.call(this);this.AiO._ReInit();this.M4._ReInit(
);this.CP._ReInit();this.AaA._ReInit();this.Jj._ReInit();this.TemperatureUnit._ReInit(
);this.L1._ReInit();this.O6._ReInit();this.Q6._ReInit();this.S2._ReInit();this.KI.
_ReInit();this.RF._ReInit();this.Ya._ReInit();this.X$._ReInit();this.Q9._ReInit(
);this.G$._ReInit();this.Ahs._ReInit();this.Jj.R(A.z2(A.abg.AAc));this.L1.R(A.z2(
A.abv.Ah_));this.O6.R(A.z2(A.abg.O6));this.KI.R(A.z2(A.abv.AQk));this.G$.R(A.z2(
A.abg.G$));this.Jj.Y(A.zW(A.eV.Au));this.TemperatureUnit.Y(A.zW(A.eV.Au));this.L1.
Y(A.zW(A.eV.Ach));this.O6.Y(A.zW(A.eV.Au));this.Q6.Y(A.zW(A.eV.Gk));this.S2.Y(A.
zW(A.eV.Gk));this.KI.Y(A.zW(A.eV.Ach));this.KI.By(A.zW(A.eV.Gk));this.KI.C5(A.zW(
A.eV.Au));this.G$.Y(A.zW(A.eV.Gk));this.G$.By(A.zW(A.eV.OK));this.G$.C5(A.zW(A.eV.
K7));},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((B=this.AiO)._cycle!=D
)B._Mark(B._cycle=D);if((B=this.M4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.CP).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.AaA)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Jj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.TemperatureUnit)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.L1)._cycle!=D)B._Mark(B._cycle=D);if((B=this.O6)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Q6)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
S2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.KI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.RF)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ya)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.X$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q9)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.G$)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ahs)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::TemperatureScreen"};C.AQa={AaC:
function(){C.P_.AaC.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState
){case 0:case 1:break;case 3:{this.N.Cn(null);this.N.De(A.zW(A.abi.Aol));}break;
case 4:{this.N.Cn(null);this.N.De(A.zW(A.abi.Aol));}break;default:;}},U2:function(
H){switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:if((A._GetAutoObject(
A.Device.Device).JT>3240)&&(A._GetAutoObject(A.Device.Device).JT<5460)){A._GetAutoObject(
A.Device.Device).AfP();A._GetAutoObject(A.Device.Device).UpdateMeasureState(3);}
break;case 3:case 4:this.AGF(this);break;default:;}},AuC:function(){C.P_.AuC.call(
this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 0:case 1:break;
case 3:this.Jj.R(A.z2(A.abg.Bc_));break;case 4:break;default:;}},AuD:function(){
C.P_.AuD.call(this);switch(A._GetAutoObject(A.Device.Device).MeasureState){case 4:{
A._GetAutoObject(A.Device.Device).Ac3(16711680);this.RF.An(true);}break;default:
this.RF.An(false);}},APJ:function(){this.CP.At(A.zW(A.abi.AsI));this.CP.Ce(0);this.
M4.Ce(0);},_Init:function(aArg){C.P_._Init.call(this,aArg);this.__proto__=C.AQa;
this.Dw(C.AKQ);},_className:"Application::TemperatureMeasurementScreen"};C.AKV={
CY:null,Ih:null,M7:null,AQ:null,Ae7:null,A4:null,CZ:function(E){C.BW.CZ.call(this
,E);this.CY.L(E);this.Ih.L(E);this.M7.L(E);this.Ae7.L(E);},_Init:function(aArg){
C.BW._Init.call(this,aArg);A.abh.Am._Init.call(this.CY={I:this},0);A.abh.Am._Init.
call(this.Ih={I:this},0);A.abh.Am._Init.call(this.M7={I:this},0);A.abh.DK._Init.
call(this.AQ={I:this},0);A.abh.Am._Init.call(this.Ae7={I:this},0);A.abh.DK._Init.
call(this.A4={I:this},0);this.__proto__=C.AKV;this.CY.G(AUp);this.Ih.G(ADJ);this.
M7.G(ADM);this.AQ.DL(A54);this.AQ.D5(A55);this.AQ.L(A.iF.A7);this.Ae7.G(Blr);this.
Ae7.L(A.iF.CR);this.A4.DL(Bls);this.A4.D5(Blt);this.A4.L(A.iF.A7);this.J(this.CY
,0);this.J(this.Ih,0);this.J(this.M7,0);this.J(this.AQ,0);this.J(this.Ae7,0);this.
J(this.A4,0);this.CY.At(A.zW(A.abi.AzZ));this.Ih.At(A.zW(A.abi.Act));this.M7.At(
A.zW(A.abi.AsB));this.Ae7.At(A.zW(A.abi.ALY));},_Done:function(){this.__proto__=
C.BW;this.CY._Done();this.Ih._Done();this.M7._Done();this.AQ._Done();this.Ae7._Done(
);this.A4._Done();C.BW._Done.call(this);},_ReInit:function(){C.BW._ReInit.call(this
);this.CY._ReInit();this.Ih._ReInit();this.M7._ReInit();this.AQ._ReInit();this.Ae7.
_ReInit();this.A4._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((
B=this.CY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ih)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.M7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ae7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::HeaderFilterCalfLosses"};C.DQ={
Ek:null,CN:null,ACD:0,AJt:0,Init:function(aArg){A.y_([this,this.AHf],A._GetAutoObject(
A.Device.Device).Aq,0);A.ow([this,this.AHf],this);},AHf:function(H){var Z=this.ACD;
if(Z<0){this.CN.G1();this.CN.DS(this.AJt);return;}this.CN.DS(A._GetAutoObject(A.
Device.Device).Aq.AkL(Z,14));this.CN.ABf(A._GetAutoObject(A.Device.Device).Aq.ID(
Z,13));this.CN.AcX(A._GetAutoObject(A.Device.Device).Aq.Hs(Z,8));this.CN.SY(A._GetAutoObject(
A.Device.Device).Aq.Hs(Z,11));this.CN.AcZ(A._GetAutoObject(A.Device.Device).Aq.Hs(
Z,12));this.CN.Ac1(A._GetAutoObject(A.Device.Device).Aq.Cq(Z,5));},A39:function(
E){if(this.ACD===E)return;this.ACD=E;A.ow([this,this.AHf],this);},A3E:function(E
){if(this.AJt===E)return;this.AJt=E;A.ow([this,this.AHf],this);},A2U:function(){
return this.ACD;},_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.call(
this.Ek={I:this},0);C.CN._Init.call(this.CN={I:this},0);this.__proto__=C.DQ;this.
Ek.G(Blu);this.Ek.R(A.z2(A.abg.Hu));this.Ek.A0(0x11);this.Ek.L(A.iF.Text);this.CN.
G(A56);this.J(this.Ek,0);this.J(this.CN,0);this.Ek.Y(A.zW(A.eV.Au));this.Ek.By(A.
zW(A.eV.Az));this.Ek.C5(A.zW(A.eV.Cr));this.Init(aArg);},_Done:function(){this.__proto__=
C.Eg;this.Ek._Done();this.CN._Done();C.Eg._Done.call(this);},_ReInit:function(){
C.Eg._ReInit.call(this);this.Ek._ReInit();this.CN._ReInit();this.Ek.R(A.z2(A.abg.
Hu));this.Ek.Y(A.zW(A.eV.Au));this.Ek.By(A.zW(A.eV.Az));this.Ek.C5(A.zW(A.eV.Cr)
);},_Mark:function(D){var B;C.Eg._Mark.call(this,D);if((B=this.Ek)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineAnimalId"
};C.ON={AeP:null,Text:null,Adi:null,CZ:function(E){C.BW.CZ.call(this,E);this.AeP.
L(E);this.Text.L(E);this.Adi.L(E);},_Init:function(aArg){C.BW._Init.call(this,aArg
);A.abh.Am._Init.call(this.AeP={I:this},0);C.CG._Init.call(this.Text={I:this},0);
A.abh.Am._Init.call(this.Adi={I:this},0);this.__proto__=C.ON;this.AeP.G(Blv);this.
AeP.L(A.iF.Text);this.Text.G(ADW);this.Text.An(false);this.Text.R(A.jm);this.Text.
L(A.iF.Text);this.Adi.G(Blw);this.Adi.L(A.iF.Text);this.J(this.AeP,0);this.J(this.
Text,0);this.J(this.Adi,0);this.AeP.At(A.zW(A.abi.AKX));this.Text.Y(A.zW(A.eV.OK
));this.Text.By(A.zW(A.eV.K7));},_Done:function(){this.__proto__=C.BW;this.AeP._Done(
);this.Text._Done();this.Adi._Done();C.BW._Done.call(this);},_ReInit:function(){
C.BW._ReInit.call(this);this.AeP._ReInit();this.Text._ReInit();this.Adi._ReInit(
);},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.AeP)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Adi).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderDevice"};C.AKO={_Init:
function(aArg){C.ON._Init.call(this,aArg);this.__proto__=C.AKO;this.Text.R(A.z2(
A.abg.Device));},_className:"Application::HeaderDeviceMenu"};C.AKQ={_Init:function(
aArg){C.ON._Init.call(this,aArg);this.__proto__=C.AKQ;this.Lh(this.Adi,-2);this.
Adi.At(A.zW(A.abi.ZH));},_className:"Application::HeaderDeviceTemperature"};C.WE={
Ah:function(Ae){C.An3.Ah.call(this,Ae);this.U(A.z2(A.abg.BiX)+A.z2(A.abg.Colon));
},B8:function(Z){var B;if(!this.AZ)return;this.Ajs=0;this.AqH=0;this.V0=0;if(!!this.
AZ){var P;for(P=0;P<this.AZ.Cf();P++){this.Ajs+=this.AZ.Cq(P,1);this.AqH+=this.AZ.
Cq(P,2);}if(this.Ajs>0)this.V0=(this.AqH/this.Ajs)*100;this.Al();}},_Init:function(
aArg){C.An3._Init.call(this,aArg);this.__proto__=C.WE;this.AQ.W(false);this.A4.W(
false);this.DU.W(false);this.T.Y(A.zW(A.eV.OK));this.T.By(A.zW(A.eV.K7));},_className:
"Application::EvaluationLossesSumItem"};C.A0M={Af:null,AY:0,_Init:function(aArg){
this.__proto__=C.A0M;A.hJ++;},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:
function(){},_Mark:function(D){var B;if((B=this.Af)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::FloatRecord"};C.A0N={Kh:null,Ma:null,AN:0,Ww:function(
){this.Kh=null;this.Ma=null;this.AN=0;},NP:function(A2){var GB;GB=A._NewObject(C.
A0M,0);GB.AY=A2;if(!this.Kh){this.Kh=GB;this.Ma=GB;this.AN=1;}else{this.Ma.Af=GB;
this.Ma=GB;this.AN=this.AN+1;}},AkN:function(){var B;var QE=0;var NC=this.Kh;while(
!!NC){QE+=NC.AY;NC=NC.Af;}return QE;},AhD:function(){if(!this.AN)return 0;return this.
AkN()/this.AN;},An$:function(){var B;if(!this.AN)return 0;var AVY=this.AhD();var
Aa$=0;var NC=this.Kh;while(!!NC){Aa$+=Math.pow(NC.AY-AVY,2);NC=NC.Af;}Aa$/=this.
AN;Aa$=Math.sqrt(Aa$);return Aa$;},_Init:function(aArg){this.__proto__=C.A0N;A.hJ++;
},_Done:function(){this.__proto__=null;A.hJ--;},_ReInit:function(){},_Mark:function(
D){var B;if((B=this.Kh)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Ma)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null
,_cycle:0,_observers:null,_className:"Application::FloatRecordList"};C.AeB={Background:
null,T:null,Ka:0,S0:5,GY:false,Ah:function(Ae){C.GO.Ah.call(this,Ae);if(this.GY)
this.Background.L(A.iF.Be);else this.Background.L(A.iF.CE);},U:function(E){C.GO.
U.call(this,E);this.T.R(E);},Bk:function(E){if(this.GY===E)return;this.GY=E;this.
Al();},JO:function(E){if(this.S0===E)return;this.S0=E;this.T.G([].concat(E,this.
T.M.slice(1,4)));},_Init:function(aArg){C.GO._Init.call(this,aArg);A.abh.AH._Init.
call(this.Background={I:this},0);C.CG._Init.call(this.T={I:this},0);this.__proto__=
C.AeB;this.G(BI);this.Background.AW(0x3F);this.Background.G(BI);this.T.AW(0x3F);
this.T.G(AEE);this.T.A0(0x11);this.T.L(A.iF.Text);this.Ka=A.iF.Text;this.J(this.
Background,0);this.J(this.T,0);this.T.Y(A.zW(A.eV.OK));this.T.By(A.zW(A.eV.K7));
this.T.C5(A.zW(A.eV.Cr));},_Done:function(){this.__proto__=C.GO;this.Background.
_Done();this.T._Done();C.GO._Done.call(this);},_ReInit:function(){C.GO._ReInit.call(
this);this.Background._ReInit();this.T._ReInit();},_Mark:function(D){var B;C.GO.
_Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
T)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalHeadingItem"};
C.AJJ={XB:function(H){this.Aey();this.D0(A.z2(A.abg.AQj),[this,this.AOX],5);this.
D0(A.z2(A.abg.AQh),[this,this.AOW],7);this.D0(A.z2(A.abg.Calving),[this,this.Be5
],11);this.D0(A.z2(A.abg.AfQ),[this,this.Aio],2);this.D0(A.z2(A.abg.AbK),[this,this.
AoR],1);this.D0(A.z2(A.abg.Aet),[this,this.Aig],0);A._GetAutoObject(C.Cz).IT();A.
_GetAutoObject(C.Cz).V5(A.z2(A.abg.Aeu)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.
Device).Co(6);},DW:function(H){},Ack:function(){return C.AIU;},Acl:function(){return C.
ALg;},Rz:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.
Device.Helper).Azl());},HY:function(H){C.Gi.HY.call(this,H);if(this.Ah6()===false
){this.N.Cn(A.zW(A.abi.ALG));this.N.Ch=[this,this.A0k];this.N.Ft(A.jm);}this.N.O4(
false);this.N.O5(false);},Aeg:function(){A._GetAutoObject(C.A1).BY(70);},Aef:function(
){A._GetAutoObject(C.A1).BY(71);},_Init:function(aArg){C.Gi._Init.call(this,aArg
);this.__proto__=C.AJJ;var B;this.Dw(C.AKR);this.Et(A.z2(A.abg.A15));this.Afw([B=
A._GetAutoObject(A.Device.Device),B.A2x,B.A6C]);},_className:"Application::DryCowListScreen"
};C.AJI={_Init:function(aArg){C.Iz._Init.call(this,aArg);this.__proto__=C.AJI;this.
KA.An(false);this.KA.Aj(false);this.KA.W(false);this.IU.An(false);this.IU.Aj(false
);this.IU.W(false);},_className:"Application::DryCowListFilterScreen"};C.AJH={_Init:
function(aArg){C.H_._Init.call(this,aArg);this.__proto__=C.AJH;this.N.Cd(A.z2(A.
abg.AZD));},_ReInit:function(){C.H_._ReInit.call(this);this.N.Cd(A.z2(A.abg.AZD)
);},_className:"Application::DryCowListActionsScreen"};C.AKR={EA:function(H){C.JK.
EA.call(this,H);this.CY.At(A._GetAutoObject(A.Device.Converter).AeF(9));},_Init:
function(aArg){C.JK._Init.call(this,aArg);this.__proto__=C.AKR;},_className:"Application::HeaderDryCowListFilter"
};C.Zv={Filter:null,Ld:null,AC_:A.jm,D_:0,ACd:1,Operator:1,Bh:function(aSize){C.
Aaq.Bh.call(this,aSize);this.T.G([15,0,this.AX.M[0]-15,aSize[1]]);},Ah:function(
Ae){C.Aaq.Ah.call(this,Ae);this.Ld.L(this.T.AM);},Bo:function(E){if(A.z_(this.Filter
,E))return;if(!!this.Filter)A.zn([this,this.Lu],this.Filter,0);this.Filter=E;if(
!!E)A.za([this,this.Lu],E,0);A.ow([this,this.Lu],this);},Lu:function(H){var F;if(
!!this.Filter&&!!(F=this.Filter,F[1].call(F[0])))this.Sb((F=this.Filter,F[1].call(
F[0])).DJ(this.D_,this.Operator));else this.Sb(null);},My:function(E){if(this.D_===
E)return;this.D_=E;A.ow([this,this.Lu],this);},Sb:function(AK){if(!!AK){var AWA;
if(this.ACd!==1)AWA=this.ACd;else AWA=AK.Operator;this.U((this.AC_+Cw)+A._GetAutoObject(
A.Device.Converter).A0I(AWA));this.XI(false);}else{this.U(this.AC_);this.XI(true
);}},N3:function(E){if(this.Operator===E)return;this.Operator=E;A.ow([this,this.
Lu],this);},ABY:function(E){if(this.AC_===E)return;this.AC_=E;A.ow([this,this.Lu
],this);},A3Y:function(E){if(this.ACd===E)return;this.ACd=E;A.ow([this,this.Lu],
this);},_Init:function(aArg){C.Aaq._Init.call(this,aArg);C.Ld._Init.call(this.Ld={
I:this},0);this.__proto__=C.Zv;this.G(Ap7);this.AX.G(Blx);this.Ld.G(AUG);this.J(
this.Ld,0);},_Done:function(){this.__proto__=C.Aaq;this.Ld._Done();C.Aaq._Done.call(
this);},_ReInit:function(){C.Aaq._ReInit.call(this);this.Ld._ReInit();},_Mark:function(
D){var B;C.Aaq._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Ld)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumeric"
};C.Ahx={Ld:null,Ah:function(Ae){C.PC.Ah.call(this,Ae);this.Ld.L(this.T.AM);},Sb:
function(AK){if(!!AK){this.Hx.Ce(1);this.XI(true);this.Ld.A3Q(false);}else{this.
Hx.Ce(0);this.XI(false);this.Ld.A3Q(true);}},_Init:function(aArg){C.PC._Init.call(
this,aArg);C.Ld._Init.call(this.Ld={I:this},0);this.__proto__=C.Ahx;this.IH=20;this.
Ld.G(AUG);this.J(this.Ld,0);},_Done:function(){this.__proto__=C.PC;this.Ld._Done(
);C.PC._Done.call(this);},_ReInit:function(){C.PC._ReInit.call(this);this.Ld._ReInit(
);},_Mark:function(D){var B;C.PC._Mark.call(this,D);if((B=this.Ld)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::ExistsFilterItem"};C.Ayu={Q:null,C6:function(
){this.U(A._GetAutoObject(A.Device.Helper).AkM(this.TableId,this.D_));},Sb:function(
AK){var F;if(!!this.Q&&(F=this.Q,F[1].call(F[0])))this.Hx.Ce(1);else this.Hx.Ce(
0);},Oq:function(H){A.ow([this,this.Lu],this);},AD:function(E){if(A.z_(this.Q,E)
)return;if(!!this.Q)A.zn([this,this.Oq],this.Q,0);this.Q=E;if(!!E)A.za([this,this.
Oq],E,0);if(!!E)A.ow([this,this.Oq],this);},_Init:function(aArg){C.PC._Init.call(
this,aArg);this.__proto__=C.Ayu;},_ReInit:function(){C.PC._ReInit.call(this);this.
C6();},_Mark:function(D){var B;C.PC._Mark.call(this,D);if((B=this.Q)&&((B=B[0]).
_cycle!=D))B._Mark(B._cycle=D);},_className:"Application::BoolOutletFilterItem"};
C.ALg={W9:null,IF:null,_Init:function(aArg){C.DQ._Init.call(this,aArg);A.abh.Text.
_Init.call(this.W9={I:this},0);A.abh.Text._Init.call(this.IF={I:this},0);this.__proto__=
C.ALg;this.A3E(1);this.W9.G(Bly);this.W9.KH(true);this.W9.R(A.z2(A.abg.AAn));this.
W9.L(A.iF.Text);this.IF.G(RR);this.IF.R(((A.z2(A.abg.Sg)+A57)+A.z2(A.abg.A5H))+Nu
);this.IF.L(A.iF.Text);this.J(this.W9,0);this.J(this.IF,0);this.W9.Y(A.zW(A.eV.Az
));this.IF.Y(A.zW(A.eV.Cr));},_Done:function(){this.__proto__=C.DQ;this.W9._Done(
);this.IF._Done();C.DQ._Done.call(this);},_ReInit:function(){C.DQ._ReInit.call(this
);this.W9._ReInit();this.IF._ReInit();this.W9.R(A.z2(A.abg.AAn));this.IF.R(((A.z2(
A.abg.Sg)+A57)+A.z2(A.abg.A5H))+Nu);this.W9.Y(A.zW(A.eV.Az));this.IF.Y(A.zW(A.eV.
Cr));},_Mark:function(D){var B;C.DQ._Mark.call(this,D);if((B=this.W9)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.IF)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdDryCow"
};C.AIU={LE:null,Lc:null,Aez:null,AQ:null,A4:null,VF:0,Init:function(aArg){},Bh:
function(aSize){C.A$.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.
M,aSize));this.T.G(A.aaQ(this.T.M,((aSize[0]*30)/100)|0));this.LE.G(this.T.M);this.
AQ.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);this.Lc.G([this.T.M[2],0,((aSize[
0]*58)/100)|0,aSize[1]]);this.A4.G([this.Lc.M[2]-1,0,this.Lc.M[2]+1,aSize[1]]);this.
Aez.G([this.Lc.M[2],0,aSize[0],aSize[1]]);},Ah:function(Ae){C.A$.Ah.call(this,Ae
);this.Lc.L(this.T.AM);this.Aez.L(this.T.AM);if(!!this.VF&&(this.VF!==5)){this.LE.
L(A._GetAutoObject(A.abk.Assessment).Pq(this.VF));this.T.L(A._GetAutoObject(A.abk.
Assessment).VN(this.VF));}else this.LE.L(this.Background.AM);},B8:function(Z){if(
!this.AZ)return;this.Ho=Z;if(!!this.AZ){var Oy=this.AZ.Cq(Z,1);var AW6=this.AZ.Cq(
Z,29);var Yz=this.AZ.Ht(Z,4);var K1=this.AZ.ID(Z,13);var Ajv=this.AZ.ID(Z,17);var
AjE=this.AZ.Hs(Z,11);this.VF=A._GetAutoObject(A.Device.Helper).AH8(K1,AjE,Ajv);this.
U(Oy.toFixed());this.Lc.R(AW6.toFixed());this.Aez.R(A._GetAutoObject(A.abk.K5).Azj(
Yz,A._GetAutoObject(A.Device.Helper).DR(),Blz));this.Al();}},_Init:function(aArg
){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.LE={I:this},0);A.abh.Text.
_Init.call(this.Lc={I:this},0);A.abh.Text._Init.call(this.Aez={I:this},0);A.abh.
AH._Init.call(this.AQ={I:this},0);A.abh.AH._Init.call(this.A4={I:this},0);this.__proto__=
C.AIU;this.LE.G(Aqc);this.AQ.L(A.iF.A7);this.A4.L(A.iF.A7);this.J(this.LE,0);this.
J(this.Lc,0);this.J(this.Aez,0);this.J(this.AQ,0);this.J(this.A4,0);this.Lc.Y(A.
zW(A.eV.Au));this.Aez.Y(A.zW(A.eV.Au));this.Init(aArg);},_Done:function(){this.__proto__=
C.A$;this.LE._Done();this.Lc._Done();this.Aez._Done();this.AQ._Done();this.A4._Done(
);C.A$._Done.call(this);},_ReInit:function(){C.A$._ReInit.call(this);this.LE._ReInit(
);this.Lc._ReInit();this.Aez._ReInit();this.AQ._ReInit();this.A4._ReInit();},_Mark:
function(D){var B;C.A$._Mark.call(this,D);if((B=this.LE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Lc)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aez)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::CalfListDryCowItem"};C.QL={AFU:
0,A86:false,Ah:function(Ae){C.E$.Ah.call(this,Ae);if(this.A86){this.U(A.z2(A.abg.
AJF));this.JP(A.jm);}else{this.U(A.z2(A.abg.BcM));if(this.AFU>0)this.JP(this.AFU.
toFixed());else this.JP(JW);}},B8:function(H){C.E$.B8.call(this,H);this.A86=A._GetAutoObject(
A.Device.Helper).V.IsDry;var Ajp=A._GetAutoObject(A.Device.Helper).V.DateOfLastCalving;
if(Ajp>0)this.AFU=A._GetAutoObject(A.Device.Helper).L7(Ajp,A._GetAutoObject(A.Device.
Helper).DR());else this.AFU=0;this.Al();},_Init:function(aArg){C.E$._Init.call(this
,aArg);this.__proto__=C.QL;},_className:"Application::AnimalInfoItemLactationPhase"
};C.AIa={AYL:A.jm,Ah:function(Ae){C.E$.Ah.call(this,Ae);this.U(A.z2(A.abg.Sg));this.
JP(this.AYL);},B8:function(H){C.E$.B8.call(this,H);var Yz=A._GetAutoObject(A.Device.
Helper).V.DateOfBirth;this.AYL=A._GetAutoObject(A.abk.K5).Azj(Yz,A._GetAutoObject(
A.Device.Helper).DR(),((((BlA+A.z2(A.abg.A$4))+BlB)+A.z2(A.abg.A$3))+BlC)+A.z2(A.
abg.AHN));this.Al();},_Init:function(aArg){C.E$._Init.call(this,aArg);this.__proto__=
C.AIa;this.AYL=A.z2(A.abg.Unknown);},_className:"Application::AnimalInfoItemAgeAdults"
};C.AJz={ST:null,Xo:null,UL:null,UM:null,Rk:null,Init:function(aArg){this.A8(this.
ST);A.ow([this,this.DD],this);},Aw9:function(H){A._GetAutoObject(A.Device.Device
).Co(1);},_Init:function(aArg){C.GP._Init.call(this,aArg);C.Rl._Init.call(this.ST={
I:this},0);C.Rl._Init.call(this.Xo={I:this},0);C.Rl._Init.call(this.UL={I:this},
0);C.ZZ._Init.call(this.UM={I:this},0);C.AcJ._Init.call(this.Rk={I:this},0);this.
__proto__=C.AJz;var B;this.Dw(C.AKO);this.ST.G(Ke);this.ST.Aj(true);this.ST.U(A.
z2(A.abg.AyT));this.ST.Bk(false);this.ST.Ru(94);this.Xo.G(RT);this.Xo.Aj(true);this.
Xo.U(A.abg.Info);this.Xo.Bk(true);this.Xo.Ru(93);this.UL.G(Yl);this.UL.Aj(true);
this.UL.U(A.z2(A.abg.ACG));this.UL.Bk(false);this.UL.Ru(73);this.UM.G(Ai2);this.
UM.Aj(true);this.UM.U(A.z2(A.abg.TempMeasurement));this.UM.Bk(true);this.UM.Ru(68
);this.Rk.G(Al4);this.Rk.Aj(true);this.Rk.U(A.z2(A.abg.Azf));this.Rk.Bk(false);this.
J(this.ST,0);this.J(this.Xo,0);this.J(this.UL,0);this.J(this.UM,0);this.J(this.Rk
,0);this.N.Ch=[this,this.Aw9];this.N.Cn(A.zW(A.abi.Az4));this.ST.AV=[B=this.ST,B.
Rw];this.Xo.AV=[B=this.Xo,B.Rw];this.UL.AV=[B=this.UL,B.Rw];this.UM.AV=[B=this.UM
,B.Rw];this.Rk.AV=null;this.Rk.Afr([B=this.Rk,B.AvA]);this.Rk.He([this,this.Es,this.
HW]);this.Rk.A3u([B=A._GetAutoObject(A.Device.Device),B.AoG,B.Aqj]);this.Init(aArg
);},_Done:function(){this.__proto__=C.GP;this.ST._Done();this.Xo._Done();this.UL.
_Done();this.UM._Done();this.Rk._Done();C.GP._Done.call(this);},_ReInit:function(
){C.GP._ReInit.call(this);this.ST._ReInit();this.Xo._ReInit();this.UL._ReInit();
this.UM._ReInit();this.Rk._ReInit();this.ST.U(A.z2(A.abg.AyT));this.UL.U(A.z2(A.
abg.ACG));this.UM.U(A.z2(A.abg.TempMeasurement));this.Rk.U(A.z2(A.abg.Azf));},_Mark:
function(D){var B;C.GP._Mark.call(this,D);if((B=this.ST)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Xo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UL)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.UM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Rk)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::DeviceMainScreen"};C.AJA={SS:null
,ZW:null,UI:null,Init:function(aArg){this.A8(this.SS);},BrP:function(H){var Ar=(
A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===7))A._GetAutoObject(
A.Device.Device).UpdateFirmware();},BdD:function(H){if(A._GetAutoObject(A.Device.
Device).Y_<=20)A._GetAutoObject(A.Device.Device).A_(76,true,BlD,0,null);else A._GetAutoObject(
A.Device.Device).A_(39,true,A.jm,0,[this,this.BrP]);},_Init:function(aArg){C.GP.
_Init.call(this,aArg);C.Rl._Init.call(this.SS={I:this},0);C.B_._Init.call(this.ZW={
I:this},0);C.ZZ._Init.call(this.UI={I:this},0);this.__proto__=C.AJA;var B;this.Dw(
C.AKP);this.SS.G(Ke);this.SS.Aj(true);this.SS.U(A.z2(A.abg.AZT));this.SS.Bk(false
);this.SS.Ru(74);this.ZW.G(RT);this.ZW.Aj(true);this.ZW.U(A.z2(A.abg.A0K));this.
ZW.Bk(true);this.UI.G(Yl);this.UI.Aj(true);this.UI.U(A.z2(A.abg.RangeTest));this.
UI.Bk(false);this.UI.Ru(15);this.J(this.SS,0);this.J(this.ZW,0);this.J(this.UI,0
);this.SS.AV=[B=this.SS,B.Rw];this.ZW.AV=[this,this.BdD];this.UI.AV=[B=this.UI,B.
Rw];this.Init(aArg);},_Done:function(){this.__proto__=C.GP;this.SS._Done();this.
ZW._Done();this.UI._Done();C.GP._Done.call(this);},_ReInit:function(){C.GP._ReInit.
call(this);this.SS._ReInit();this.ZW._ReInit();this.UI._ReInit();this.SS.U(A.z2(
A.abg.AZT));this.ZW.U(A.z2(A.abg.A0K));this.UI.U(A.z2(A.abg.RangeTest));},_Mark:
function(D){var B;C.GP._Mark.call(this,D);if((B=this.SS)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.ZW)._cycle!=D)B._Mark(B._cycle=D);if((B=this.UI)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::DeviceServiceScreen"};C.AKP={_Init:function(
aArg){C.ON._Init.call(this,aArg);this.__proto__=C.AKP;this.Text.R(A.z2(A.abg.ACG
));},_ReInit:function(){C.ON._ReInit.call(this);this.Text.R(A.z2(A.abg.ACG));},_className:
"Application::HeaderDeviceServiceMenu"};C.Rl={Ae8:null,Ah:function(Ae){C.ZZ.Ah.call(
this,Ae);this.Ae8.L(this.T.AM);},_Init:function(aArg){C.ZZ._Init.call(this,aArg);
A.abh.Am._Init.call(this.Ae8={I:this},0);this.__proto__=C.Rl;this.Ae8.AW(0x38);this.
Ae8.G(BlE);this.J(this.Ae8,0);this.T.C5(A.zW(A.eV.Cr));this.Ae8.At(A.zW(A.abi.Ahg
));},_Done:function(){this.__proto__=C.ZZ;this.Ae8._Done();C.ZZ._Done.call(this);
},_ReInit:function(){C.ZZ._ReInit.call(this);this.Ae8._ReInit();},_Mark:function(
D){var B;C.ZZ._Mark.call(this,D);if((B=this.Ae8)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::MenuItemSubMenu"};C.AJw={Afc:null,Afi:null,Afk:null,Afg:
null,AhX:null,Aff:null,Afe:null,Afd:null,AhV:null,Afb:null,AhW:null,Afj:null,AhY:
null,Afh:null,AhZ:null,Init:function(aArg){this.A8(this.Afc);},_Init:function(aArg
){C.GP._Init.call(this,aArg);C.OZ._Init.call(this.Afc={I:this},0);C.OZ._Init.call(
this.Afi={I:this},0);C.OZ._Init.call(this.Afk={I:this},0);C.OZ._Init.call(this.Afg={
I:this},0);C.OZ._Init.call(this.AhX={I:this},0);C.OZ._Init.call(this.Aff={I:this
},0);C.OZ._Init.call(this.Afe={I:this},0);C.OZ._Init.call(this.Afd={I:this},0);C.
OZ._Init.call(this.AhV={I:this},0);C.OZ._Init.call(this.Afb={I:this},0);C.OZ._Init.
call(this.AhW={I:this},0);C.OZ._Init.call(this.Afj={I:this},0);C.OZ._Init.call(this.
AhY={I:this},0);C.OZ._Init.call(this.Afh={I:this},0);C.OZ._Init.call(this.AhZ={I:
this},0);this.__proto__=C.AJw;this.Dw(C.AKL);this.Afc.G(AEH);this.Afc.Aj(true);this.
Afc.Rq(1);this.Afi.G(AUE);this.Afi.Aj(true);this.Afi.Bk(true);this.Afi.Rq(2);this.
Afk.G(Aqe);this.Afk.Aj(true);this.Afk.Bk(false);this.Afk.Rq(3);this.Afg.G(Aqf);this.
Afg.Aj(true);this.Afg.Bk(true);this.Afg.Rq(4);this.AhX.G(Ap$);this.AhX.Aj(true);
this.AhX.Rq(5);this.Aff.G(BlF);this.Aff.Aj(true);this.Aff.Bk(true);this.Aff.Rq(6
);this.Afe.G(Aqg);this.Afe.Aj(true);this.Afe.Bk(false);this.Afe.Rq(7);this.Afd.G(
Avj);this.Afd.Aj(true);this.Afd.Bk(true);this.Afd.Rq(8);this.AhV.G(AUF);this.AhV.
Aj(true);this.AhV.Rq(9);this.Afb.G(Al$);this.Afb.Aj(true);this.Afb.Bk(true);this.
Afb.Rq(10);this.AhW.G(BlG);this.AhW.Aj(true);this.AhW.Rq(11);this.Afj.G(BlH);this.
Afj.Aj(true);this.Afj.Bk(true);this.Afj.Rq(12);this.AhY.G(BlI);this.AhY.Aj(true);
this.AhY.Rq(13);this.Afh.G(BlJ);this.Afh.Aj(true);this.Afh.Bk(true);this.Afh.Rq(
14);this.AhZ.G(BlK);this.AhZ.Aj(true);this.AhZ.Rq(15);this.J(this.Afc,0);this.J(
this.Afi,0);this.J(this.Afk,0);this.J(this.Afg,0);this.J(this.AhX,0);this.J(this.
Aff,0);this.J(this.Afe,0);this.J(this.Afd,0);this.J(this.AhV,0);this.J(this.Afb,
0);this.J(this.AhW,0);this.J(this.Afj,0);this.J(this.AhY,0);this.J(this.Afh,0);this.
J(this.AhZ,0);this.Init(aArg);},_Done:function(){this.__proto__=C.GP;this.Afc._Done(
);this.Afi._Done();this.Afk._Done();this.Afg._Done();this.AhX._Done();this.Aff._Done(
);this.Afe._Done();this.Afd._Done();this.AhV._Done();this.Afb._Done();this.AhW._Done(
);this.Afj._Done();this.AhY._Done();this.Afh._Done();this.AhZ._Done();C.GP._Done.
call(this);},_ReInit:function(){C.GP._ReInit.call(this);this.Afc._ReInit();this.
Afi._ReInit();this.Afk._ReInit();this.Afg._ReInit();this.AhX._ReInit();this.Aff.
_ReInit();this.Afe._ReInit();this.Afd._ReInit();this.AhV._ReInit();this.Afb._ReInit(
);this.AhW._ReInit();this.Afj._ReInit();this.AhY._ReInit();this.Afh._ReInit();this.
AhZ._ReInit();},_Mark:function(D){var B;C.GP._Mark.call(this,D);if((B=this.Afc).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Afi)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Afk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AhX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Aff)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Afd)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.AhV)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Afb)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhW)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.Afj)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhY)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Afh)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhZ)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceCheckScreen"};C.AKL={_Init:
function(aArg){C.ON._Init.call(this,aArg);this.__proto__=C.AKL;this.Text.R(A.z2(
A.abg.A0e));},_ReInit:function(){C.ON._ReInit.call(this);this.Text.R(A.z2(A.abg.
A0e));},_className:"Application::HeaderDeviceCheck"};C.OZ={DeviceComponentToString:
null,JI:null,ArZ:0,A7I:false,C6:function(){this.T.R(this.DeviceComponentToString.
Cb(this.ArZ));},Bh:function(aSize){var B;C.B_.Bh.call(this,aSize);this.JI.G(A.aaP(
this.JI.M,aSize[0]-((B=this.JI.M)[2]-B[0])));this.T.G(A.aaQ(this.T.M,this.JI.M[0
]));},Ah:function(Ae){C.B_.Ah.call(this,Ae);this.JI.AA9(this.T.AM);if(this.A7I)this.
JI.Atx(A.iF.E1);else this.JI.Atx(A.iF.F0);},Rq:function(E){if(this.ArZ===E)return;
this.ArZ=E;this.U(this.DeviceComponentToString.Cb(E));this.EA(this);},EA:function(
H){this.A7I=A._GetAutoObject(A.Device.Device).AFL(this.ArZ);this.Al();},_Init:function(
aArg){C.B_._Init.call(this,aArg);A.Device.DeviceComponentToString._Init.call(this.
DeviceComponentToString={I:this},0);C.JI._Init.call(this.JI={I:this},0);this.__proto__=
C.OZ;this.T.G(BlL);this.T.A0(0x11);this.JI.G(BlM);this.J(this.JI,0);},_Done:function(
){this.__proto__=C.B_;this.DeviceComponentToString._Done();this.JI._Done();C.B_.
_Done.call(this);},_ReInit:function(){C.B_._ReInit.call(this);this.DeviceComponentToString.
_ReInit();this.JI._ReInit();this.C6();},_Mark:function(D){var B;C.B_._Mark.call(
this,D);if((B=this.DeviceComponentToString)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.JI)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuItemCheckComponent"
};C.Q5={AE:null,EB:null,Ac:null,Init:function(aArg){A.ow([this,this.Axb],this);}
,A8:function(E){C.Aw.A8.call(this,E);this.AHi(this);this.DD(this);},CF:function(
H){A.ow([this,this.Ts],this);},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1
))[3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);},Axb:function(
H){var Bb=A._GetAutoObject(A.Device.Helper).A0V();A._GetAutoObject(A.Device.Device
).Aq.Bo(Bb);A.ow([this,this.Ts],this);},EY:function(H){A._GetAutoObject(C.A1).Fm(
);},AXT:function(H){A._GetAutoObject(C.A1).BY(95);},DD:function(H){this.N.C$(A.zW(
A.abi.ET));this.N.CB=[this,this.EY];this.N.Cn(A.zW(A.abi.Az3));if(!A._GetAutoObject(
A.Device.Device).Aq.Filter||A._GetAutoObject(A.Device.Helper).Aoq(A._GetAutoObject(
A.Device.Device).Aq.Filter)){this.N.Ch=null;this.N.Jk.DF(100);}else{this.N.Ch=[this
,this.Axb];this.N.Jk.DF(255);}this.N.De(A.zW(A.abi.Act));this.N.Cm=[this,this.AXT
];},Ts:function(s){this.DD(s);},AHi:function(H){A.aa8("%s",BlN);},ByD:function(s
){this.AHi(s);},Iv:function(H){A.ow([this,this.FZ],this);},_Init:function(aArg){
C.Aw._Init.call(this,aArg);C.AE._Init.call(this.AE={I:this},0);A.abh.AH._Init.call(
this.EB={I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);this.__proto__=C.Q5;
this.N.An(false);this.N.W(true);this.Dw(C.Zy);this.AE.G(JV);this.EB.AW(0x3F);this.
EB.G(FN);this.EB.L(A.iF.CE);this.Ac.G(Of);this.Ac.Lf(9);this.J(this.AE,0);this.J(
this.EB,0);this.J(this.Ac,0);this.Ac.Eu=[this,this.Iv];this.Init(aArg);},_Done:function(
){this.__proto__=C.Aw;this.AE._Done();this.EB._Done();this.Ac._Done();C.Aw._Done.
call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.AE._ReInit();this.EB.
_ReInit();this.Ac._ReInit();},_Mark:function(D){var B;C.Aw._Mark.call(this,D);if((
B=this.AE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EB)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuScreen"
};C.AJY={Wu:null,Wt:null,Wi:null,Sq:null,DD:function(H){C.Q5.DD.call(this,H);if(
this.A6===this.Sq){this.N.Cn(null);this.N.Ch=null;this.N.De(null);this.N.Cm=null;
}},AHi:function(H){if(this.A6===this.Sq)this.Dw(C.AKV);else this.Dw(C.Zy);},Bsa:
function(){switch(A._GetAutoObject(A.Device.Device).TemperatureUnit){case 0:return A.
zW(A.abi.ALS);case 1:return A.zW(A.abi.ALT);default:A.aa8("%s%s",BlO,A._GetAutoObject(
A.Device.Device).TemperatureUnit.toFixed());}return null;},Bsb:function(){switch(
A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.zW(A.abi.ALU);case 1:
return A.zW(A.abi.ALV);default:A.aa8("%s%s",AEM,A._GetAutoObject(A.Device.Device
).MassUnit.toFixed());}return null;},H5:function(H){var Cg=(C.E3.isPrototypeOf(H
)?H:null);if(!Cg)return;if(Cg===this.Wu)A._GetAutoObject(C.A1).BY(75);else if(Cg===
this.Wt)A._GetAutoObject(C.A1).BY(64);else if(Cg===this.Wi)A._GetAutoObject(C.A1
).BY(66);else if(Cg===this.Sq)A._GetAutoObject(C.A1).BY(67);},_Init:function(aArg
){C.Q5._Init.call(this,aArg);C.E3._Init.call(this.Wu={I:this},0);C.E3._Init.call(
this.Wt={I:this},0);C.E3._Init.call(this.Wi={I:this},0);C.E3._Init.call(this.Sq={
I:this},0);this.__proto__=C.AJY;this.Wu.G(Nr);this.Wu.Aj(true);this.Wu.U(A.z2(A.
abg.AfZ));this.Wt.G(Kc);this.Wt.Aj(true);this.Wt.U(A.z2(A.abg.Temperature));this.
Wi.G(BlP);this.Wi.Aj(true);this.Wi.U(A.z2(A.abg.Rating));this.Sq.G(BlQ);this.Sq.
Aj(true);this.Sq.U(A.z2(A.abg.A1S));this.J(this.Wu,0);this.J(this.Wt,0);this.J(this.
Wi,0);this.J(this.Sq,0);this.Wu.AV=[this,this.H5];this.Wu.DB(this.Bsb());this.Wt.
AV=[this,this.H5];this.Wt.DB(this.Bsa());this.Wi.AV=[this,this.H5];this.Wi.DB(A.
zW(A.abi.ALQ));this.Sq.AV=[this,this.H5];this.Sq.DB(A.zW(A.abi.ALR));},_Done:function(
){this.__proto__=C.Q5;this.Wu._Done();this.Wt._Done();this.Wi._Done();this.Sq._Done(
);C.Q5._Done.call(this);},_ReInit:function(){C.Q5._ReInit.call(this);this.Wu._ReInit(
);this.Wt._ReInit();this.Wi._ReInit();this.Sq._ReInit();this.Wu.U(A.z2(A.abg.AfZ
));this.Wt.U(A.z2(A.abg.Temperature));this.Wi.U(A.z2(A.abg.Rating));this.Sq.U(A.
z2(A.abg.A1S));},_Mark:function(D){var B;C.Q5._Mark.call(this,D);if((B=this.Wu).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.Wt)._cycle!=D)B._Mark(B._cycle=D);if((B=
this.Wi)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Sq)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::EvaluationMenuMainScreen"};C.AJZ={T8:null,Wk:null,
Wv:null,AHi:function(H){this.Dw(C.Asr);},Bse:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AMx);case 1:return A.zW(A.abi.
AMy);default:A.aa8("%s%s",AEM,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},H5:function(H){var Cg=(C.E3.isPrototypeOf(H)?H:null);if(!Cg)return;
if(Cg===this.T8)A._GetAutoObject(C.A1).BY(77);else if(Cg===this.Wv)A._GetAutoObject(
C.A1).BY(65);else if(Cg===this.Wk)A._GetAutoObject(C.A1).BY(76);},Bsd:function(){
switch(A._GetAutoObject(A.Device.Device).MassUnit){case 0:return A.zW(A.abi.ALE);
case 1:return A.zW(A.abi.ALF);default:A.aa8("%s%s",AEM,A._GetAutoObject(A.Device.
Device).MassUnit.toFixed());}return null;},Bsf:function(){switch(A._GetAutoObject(
A.Device.Device).MassUnit){case 0:return A.zW(A.abi.AMz);case 1:return A.zW(A.abi.
AMA);default:A.aa8("%s%s",AEM,A._GetAutoObject(A.Device.Device).MassUnit.toFixed(
));}return null;},_Init:function(aArg){C.Q5._Init.call(this,aArg);C.E3._Init.call(
this.T8={I:this},0);C.E3._Init.call(this.Wk={I:this},0);C.E3._Init.call(this.Wv={
I:this},0);this.__proto__=C.AJZ;this.T8.G(Nr);this.T8.Aj(true);this.T8.U(A.z2(A.
abg.A5x));this.Wk.G(AUH);this.Wk.Aj(true);this.Wk.U(A.z2(A.abg.AZL));this.Wv.G(Og
);this.Wv.Aj(true);this.Wv.U(A.z2(A.abg.A5C));this.J(this.T8,0);this.J(this.Wk,0
);this.J(this.Wv,0);this.T8.AV=[this,this.H5];this.T8.DB(this.Bse());this.T8.Aaa(
A.zW(A.abi.M5));this.Wk.AV=[this,this.H5];this.Wk.DB(this.Bsd());this.Wv.AV=[this
,this.H5];this.Wv.DB(this.Bsf());},_Done:function(){this.__proto__=C.Q5;this.T8.
_Done();this.Wk._Done();this.Wv._Done();C.Q5._Done.call(this);},_ReInit:function(
){C.Q5._ReInit.call(this);this.T8._ReInit();this.Wk._ReInit();this.Wv._ReInit();
this.T8.U(A.z2(A.abg.A5x));this.Wk.U(A.z2(A.abg.AZL));this.Wv.U(A.z2(A.abg.A5C));
},_Mark:function(D){var B;C.Q5._Mark.call(this,D);if((B=this.T8)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Wk)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wv)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::EvaluationMenuWeightsScreen"};C.
AJ2={A89:function(){return(A._GetAutoObject(A.Device.Helper).V.LastBodyWeight>0)&&(
A._GetAutoObject(A.Device.Helper).V.TimestampLastWeighing>A._GetAutoObject(A.Device.
Helper).X0(0));},_Init:function(aArg){C.Ar5._Init.call(this,aArg);this.__proto__=
C.AJ2;this.Afx(A.z2(A.abg.Bdw));},_className:"Application::EvaluationWeightsRecentScreen"
};C.AJV={Agc:null,ZC:null,Th:null,Y5:null,OD:null,Ahd:null,AeD:null,Ahe:null,AeE:
null,AE:null,YX:null,Aa8:0,AmY:0,DW:function(H){switch(this.CH.CO){case 4:{if(this.
IC.Fe())return;var Pw=this.Ac.Br[1]+80;this.Ac.Go([this.Ac.Br[0],Pw]);this.Ac.AbJ(
null,null);}break;case 5:{if(this.IC.Fe())return;var Pw=this.Ac.Br[1]-80;this.Ac.
Go([this.Ac.Br[0],Pw]);this.Ac.AbJ(null,null);}break;default:C.E0.DW.call(this,H
);}},Anw:function(Ll,AaS){if(!Ll)return;var EZ=A._NewObject(A.Device.Filter,0);var
Hk=A._NewObject(A.Device.Int32FilterCriterion,0);Hk.Initialize(1,0,AaS,true);EZ.
CQ(Hk);var Aa4=A._NewObject(A.Device.Int32FilterCriterion,0);Aa4.Initialize(8,2,
0,true);EZ.CQ(Aa4);Ll.Bo(EZ);},Agp:function(H){if(A._GetAutoObject(A.Device.Helper
).V.Aor()){this.Agc.NP(A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight);var AvZ=
this.Br_(A._GetAutoObject(A.Device.Helper).V.FirstBodyWeight,A._GetAutoObject(A.
Device.Device).MassUnit);this.YX.Set(AvZ,this.YX.Get(AvZ)+1);if(A._GetAutoObject(
A.Device.Helper).V.AnimalType===1){this.Aa8++;this.AmY=A._GetAutoObject(A.Device.
Helper).V.VisualId;}}C.E0.Agp.call(this,H);},Yy:function(H){if(this.Aa8>1)A._GetAutoObject(
A.Device.Device).A_(56,true,this.Aa8.toFixed(),0,null);if(this.Aa8===1)A._GetAutoObject(
A.Device.Device).A_(53,true,this.AmY.toFixed(),0,null);if(this.Agc.AN>0)this.Th.
U(((((((A._GetAutoObject(A.Device.Converter).AuJ(this.Agc.AhD()|0,1)+Avl)+A._GetAutoObject(
A.Device.Converter).AuJ(this.Agc.An$()|0,1))+Cw)+A._GetAutoObject(A.abk.Dy).Abh(
))+Avm)+this.Agc.AN.toFixed())+Nu);else this.Th.U(A.z2(A.abg.Unknown));var QE=this.
YX.AkN();var P;for(P=0;P<this.YX.L0;P++){var A5=this.Bss(P);if(!!A5){var DZ=this.
YX.Get(P);A5.Bfj(DZ);if(!QE)A5.A34(0);else A5.A34(Math.round((DZ*100)/QE)|0);A5.
BgV(this.Bsr(P,A._GetAutoObject(A.Device.Device).MassUnit));}}var Abb=false;if(this.
Agc.AN>0)Abb=true;this.IC.W(!Abb);C.E0.Yy.call(this,H);},Abi:function(H){this.Agc.
Ww();this.YX.G1();this.Aa8=0;this.AmY=0;C.E0.Abi.call(this,H);},Bss:function(aIndex
){var A5=null;switch(aIndex){case 0:A5=this.OD;break;case 1:A5=this.Ahd;break;case
2:A5=this.AeD;break;case 3:A5=this.Ahe;break;case 4:A5=this.AeE;break;default:throw new
Error(Avn+aIndex.toFixed());}return A5;},Bsr:function(aIndex,Amg){var B;var Sc=A.
jm;switch(Amg){case 0:{switch(aIndex){case 0:Sc=BlR;break;case 1:Sc=BlS;break;case
2:Sc=BlT;break;case 3:Sc=BlU;break;case 4:Sc=BlV;break;default:throw new Error(Avn+
aIndex.toFixed());}Sc=Sc+(Cw+A.z2(A.abg.AGs));}break;case 1:{switch(aIndex){case
0:Sc=BlW;break;case 1:Sc=BlX;break;case 2:Sc=BlY;break;case 3:Sc=BlZ;break;case 4:
Sc=Bl0;break;default:throw new Error(Avn+aIndex.toFixed());}Sc=Sc+(Cw+A.z2(A.abg.
A1A));}break;default:A.aa8("%s%e",A58,Amg);}return Sc;},Br$:function(AE4,Amg){var
Aa5=0;switch(Amg){case 0:switch(AE4){case 0:Aa5=35000;break;case 1:Aa5=40000;break;
case 2:Aa5=45000;break;case 3:Aa5=50000;break;case 4:Aa5=2147483647;break;default:
throw new Error(Avn+AE4.toFixed());}break;case 1:switch(AE4){case 0:Aa5=36287;break;
case 1:Aa5=40823;break;case 2:Aa5=45359;break;case 3:Aa5=49895;break;case 4:Aa5=
2147483647;break;default:throw new Error(Avn+AE4.toFixed());}break;default:A.aa8(
"%s%e",A58,Amg);}return Aa5;},Br_:function(A2,Amg){var AvZ=0;var P;for(P=0;P<this.
YX.L0;P++)if(A2<this.Br$(P,Amg)){AvZ=P;break;}return AvZ;},FZ:function(H){var B;
this.AE.N2((B=this.Ac.Dh(0x1))[3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.
N4(-this.Ac.Br[1]);},Iv:function(H){A.ow([this,this.FZ],this);},_Init:function(aArg
){C.E0._Init.call(this,aArg);C.AeB._Init.call(this.ZC={I:this},0);C.H9._Init.call(
this.Th={I:this},0);C.Y5._Init.call(this.Y5={I:this},0);C.OD._Init.call(this.OD={
I:this},0);C.OD._Init.call(this.Ahd={I:this},0);C.OD._Init.call(this.AeD={I:this
},0);C.OD._Init.call(this.Ahe={I:this},0);C.OD._Init.call(this.AeE={I:this},0);C.
AE._Init.call(this.AE={I:this},0);A.Device.Int32ArrayWrapper._Init.call(this.YX={
I:this},0);this.__proto__=C.AJV;this.Dw(C.Asr);this.Aik(A.z2(A.abg.A0z));this.Afx(
A.z2(A.abg.A13));this.ZC.G(AEH);this.ZC.Aj(true);this.ZC.U(A.z2(A.abg.AZx));this.
ZC.Bk(false);this.ZC.JO(5);this.Th.G(AUE);this.Th.Aj(true);this.Th.U(A.jm);this.
Th.Bk(true);this.Th.JO(5);this.Y5.G(Aqe);this.Y5.Aj(true);this.OD.G(Aqf);this.OD.
Aj(true);this.OD.Bk(true);this.Ahd.G(Aqg);this.Ahd.Aj(true);this.AeD.G(Avj);this.
AeD.Aj(true);this.AeD.Bk(true);this.Ahe.G(AUF);this.Ahe.Aj(true);this.AeE.G(Al$);
this.AeE.Aj(true);this.AeE.Bk(true);this.AE.G(JV);this.YX.XJ(5);this.J(this.ZC,-
1);this.J(this.Th,-1);this.J(this.Y5,-1);this.J(this.OD,-1);this.J(this.Ahd,-1);
this.J(this.AeD,-1);this.J(this.Ahe,-1);this.J(this.AeE,-1);this.J(this.AE,-1);this.
Ac.Eu=[this,this.Iv];this.Agc=A._NewObject(C.AsP,0);this.Th.Y(A.zW(A.eV.Au));},_Done:
function(){this.__proto__=C.E0;this.ZC._Done();this.Th._Done();this.Y5._Done();this.
OD._Done();this.Ahd._Done();this.AeD._Done();this.Ahe._Done();this.AeE._Done();this.
AE._Done();this.YX._Done();C.E0._Done.call(this);},_ReInit:function(){C.E0._ReInit.
call(this);this.ZC._ReInit();this.Th._ReInit();this.Y5._ReInit();this.OD._ReInit(
);this.Ahd._ReInit();this.AeD._ReInit();this.Ahe._ReInit();this.AeE._ReInit();this.
AE._ReInit();this.YX._ReInit();this.Aik(A.z2(A.abg.A0z));this.Afx(A.z2(A.abg.A13
));this.ZC.U(A.z2(A.abg.AZx));this.Th.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;
C.E0._Mark.call(this,D);if((B=this.Agc)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=
this.ZC)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Th)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Y5)._cycle!=D)B._Mark(B._cycle=D);if((B=this.OD)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ahd)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AeD)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Ahe)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
AeE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.YX)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::EvaluationBirthWeightsScreen"
};C.Y5={IJ:null,Gt:null,Bh:function(aSize){C.H9.Bh.call(this,aSize);this.IJ.G([((
aSize[0]*57)/100)|0,0,((aSize[0]*80)/100)|0,aSize[1]]);this.Gt.G([this.IJ.M[2],0
,aSize[0],aSize[1]]);},Ah:function(Ae){C.H9.Ah.call(this,Ae);this.IJ.L(this.T.AM
);this.Gt.L(this.T.AM);},_Init:function(aArg){C.H9._Init.call(this,aArg);A.abh.Text.
_Init.call(this.IJ={I:this},0);A.abh.Text._Init.call(this.Gt={I:this},0);this.__proto__=
C.Y5;this.U(A.z2(A.abg.A5A));this.IJ.G(Bl1);this.IJ.KH(true);this.IJ.R(A.z2(A.abg.
AyK));this.IJ.L(A.iF.Text);this.Gt.G(A59);this.Gt.R(AdN);this.Gt.L(A.iF.Text);this.
J(this.IJ,0);this.J(this.Gt,0);this.T.Y(A.zW(A.eV.K7));this.IJ.Y(A.zW(A.eV.K7));
this.Gt.Y(A.zW(A.eV.OK));},_Done:function(){this.__proto__=C.H9;this.IJ._Done();
this.Gt._Done();C.H9._Done.call(this);},_ReInit:function(){C.H9._ReInit.call(this
);this.IJ._ReInit();this.Gt._ReInit();},_Mark:function(D){var B;C.H9._Mark.call(
this,D);if((B=this.IJ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=D)B.
_Mark(B._cycle=D);},_className:"Application::AnimalInfoItemWeightClassHeading"};
C.OD={AQ:null,A4:null,RE:null,IJ:null,Gt:null,A5B:A.jm,AyK:0,A4v:0,Bh:function(aSize
){C.H9.Bh.call(this,aSize);this.RE.G([0,0,((aSize[0]*57)/100)|0,aSize[1]]);this.
AQ.G([this.RE.M[2]-1,0,this.RE.M[2]+1,aSize[1]]);this.IJ.G([this.RE.M[2],0,((aSize[
0]*75)/100)|0,aSize[1]]);this.A4.G([this.IJ.M[2]-1,0,this.IJ.M[2]+1,aSize[1]]);this.
Gt.G([this.IJ.M[2],0,aSize[0],aSize[1]]);},Ah:function(Ae){C.H9.Ah.call(this,Ae);
this.RE.L(this.T.AM);this.IJ.L(this.T.AM);this.Gt.L(this.T.AM);},BgV:function(E){
if(this.A5B===E)return;this.A5B=E;this.RE.R(E);},Bfj:function(E){if(this.AyK===E
)return;this.AyK=E;this.IJ.R(E.toFixed());},A34:function(E){if(this.A4v===E)return;
this.A4v=E;this.Gt.R(E.toFixed()+AaO);},_Init:function(aArg){C.H9._Init.call(this
,aArg);A.abh.AH._Init.call(this.AQ={I:this},0);A.abh.AH._Init.call(this.A4={I:this
},0);A.abh.Text._Init.call(this.RE={I:this},0);A.abh.Text._Init.call(this.IJ={I:
this},0);A.abh.Text._Init.call(this.Gt={I:this},0);this.__proto__=C.OD;this.AQ.L(
A.iF.A7);this.A4.L(A.iF.A7);this.RE.G(Bl2);this.RE.R(A.z2(A.abg.A5A));this.RE.L(
A.iF.Text);this.IJ.R(Ym);this.IJ.L(A.iF.Text);this.Gt.R(Bl3);this.Gt.L(A.iF.Text
);this.J(this.AQ,0);this.J(this.A4,0);this.J(this.RE,0);this.J(this.IJ,0);this.J(
this.Gt,0);this.RE.Y(A.zW(A.eV.Au));this.IJ.Y(A.zW(A.eV.Au));this.Gt.Y(A.zW(A.eV.
Au));},_Done:function(){this.__proto__=C.H9;this.AQ._Done();this.A4._Done();this.
RE._Done();this.IJ._Done();this.Gt._Done();C.H9._Done.call(this);},_ReInit:function(
){C.H9._ReInit.call(this);this.AQ._ReInit();this.A4._ReInit();this.RE._ReInit();
this.IJ._ReInit();this.Gt._ReInit();},_Mark:function(D){var B;C.H9._Mark.call(this
,D);if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.RE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IJ)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.Gt)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoItemWeightClassRow"};C.AIm={AGT:function(){var Bb=A._GetAutoObject(
A.Device.Helper).LP();A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);},_Init:function(
aArg){C.Akn._Init.call(this,aArg);this.__proto__=C.AIm;},_className:"Application::AnimalSearchUnfilteredOverlay"
};C.AM7={QR:null,QW:null,QQ:null,QT:null,OE:null,QS:null,AHg:function(H){A.ow([this
,this.Bu3],this);A.ow([this,this.BuQ],this);A.ow([this,this.BuN],this);A.ow([this
,this.AYE],this);A.ow([this,this.BuT],this);A.ow([this,this.BuR],this);},H5:function(
H){var Cg=(C.Ri.isPrototypeOf(H)?H:null);if(!Cg)return;if(Cg===this.QW)A._GetAutoObject(
C.A1).BY(20);else if(Cg===this.OE)A._GetAutoObject(C.A1).BY(14);else if(Cg===this.
QR)A._GetAutoObject(C.A1).BY(12);else if(Cg===this.QT)A._GetAutoObject(C.A1).BY(
46);else if(Cg===this.QQ)A._GetAutoObject(C.A1).BY(58);else if(Cg===this.QS)A._GetAutoObject(
C.A1).BY(69);},BuQ:function(H){var Bb=A._GetAutoObject(A.Device.Helper).LP();var
Av7=A._NewObject(A.Device.BoolFilterCriterion,0);Av7.Initialize(9,0,true,true);Bb.
CQ(Av7);A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.OE.Aae(A._GetAutoObject(
A.Device.Device).Aq.Cf().toFixed());},Bu3:function(H){var Bb=A._GetAutoObject(A.
Device.Helper).LP();var Ax2=A._NewObject(A.Device.BoolFilterCriterion,0);Ax2.Initialize(
12,0,true,true);Bb.CQ(Ax2);A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.QW.Aae(
A._GetAutoObject(A.Device.Device).Aq.Cf().toFixed());},BuN:function(H){var Bb=A.
_GetAutoObject(A.Device.Helper).LP();var AvN=A._NewObject(A.Device.BoolFilterCriterion
,0);AvN.Initialize(8,0,true,true);Bb.CQ(AvN);A._GetAutoObject(A.Device.Device).Aq.
Bo(Bb);this.QR.Aae(A._GetAutoObject(A.Device.Device).Aq.Cf().toFixed());},AYE:function(
H){var Bb=A._GetAutoObject(A.Device.Helper).A0S(A._GetAutoObject(A.Device.Device
).Ax_);A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.QQ.Aae(A._GetAutoObject(
A.Device.Device).Aq.Cf().toFixed());},BuT:function(H){var Bb=A._GetAutoObject(A.
Device.Helper).A0Y();A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.QT.Aae(A._GetAutoObject(
A.Device.Device).Aq.Cf().toFixed());},BuR:function(H){var Bb=A._GetAutoObject(A.
Device.Helper).Azl();A._GetAutoObject(A.Device.Device).Aq.Bo(Bb);this.QS.Aae(A._GetAutoObject(
A.Device.Device).Aq.Cf().toFixed());},_Init:function(aArg){C.SO._Init.call(this,
aArg);C.Ri._Init.call(this.QR={I:this},0);C.Ri._Init.call(this.QW={I:this},0);C.
Ri._Init.call(this.QQ={I:this},0);C.Ri._Init.call(this.QT={I:this},0);C.Ri._Init.
call(this.OE={I:this},0);C.Ri._Init.call(this.QS={I:this},0);this.__proto__=C.AM7;
this.QR.G(Nr);this.QR.Aj(true);this.QR.U(A.z2(A.abg.Alarm));this.QR.Z8(true);this.
QW.G(AUH);this.QW.Aj(true);this.QW.U(A.z2(A.abg.Apj));this.QW.Z8(true);this.QQ.G(
Og);this.QQ.Aj(true);this.QQ.U(A.z2(A.abg.ActionList));this.QQ.Z8(true);this.QT.
G(ME);this.QT.Aj(true);this.QT.U(A.z2(A.abg.AKp));this.QT.Z8(true);this.OE.G(RO);
this.OE.An(false);this.OE.Aj(false);this.OE.W(false);this.OE.U(A.z2(A.abg.AJe));
this.OE.Z8(true);this.QS.G(Tn);this.QS.Aj(true);this.QS.U(A.z2(A.abg.A0v));this.
QS.Z8(true);this.J(this.QR,0);this.J(this.QW,0);this.J(this.QQ,0);this.J(this.QT
,0);this.J(this.OE,0);this.J(this.QS,0);this.QR.AV=[this,this.AdP];this.QR.DB(A.
zW(A.abi.AzR));this.QR.Aaa(A.zW(A.abi.M5));this.QW.AV=[this,this.AdP];this.QW.DB(
A.zW(A.abi.AMw));this.QW.Aaa(A.zW(A.abi.M5));this.QQ.AV=[this,this.AdP];this.QQ.
DB(A.zW(A.abi.ALr));this.QQ.Aaa(A.zW(A.abi.M5));this.QT.AV=[this,this.AdP];this.
QT.DB(A.zW(A.abi.ALX));this.QT.Aaa(A.zW(A.abi.M5));this.OE.AV=[this,this.AdP];this.
OE.DB(A.zW(A.abi.AzR));this.OE.Aaa(A.zW(A.abi.M5));this.QS.AV=[this,this.AdP];this.
QS.DB(A.zW(A.abi.ALN));this.QS.Aaa(A.zW(A.abi.M5));},_Done:function(){this.__proto__=
C.SO;this.QR._Done();this.QW._Done();this.QQ._Done();this.QT._Done();this.OE._Done(
);this.QS._Done();C.SO._Done.call(this);},_ReInit:function(){C.SO._ReInit.call(this
);this.QR._ReInit();this.QW._ReInit();this.QQ._ReInit();this.QT._ReInit();this.OE.
_ReInit();this.QS._ReInit();this.QR.U(A.z2(A.abg.Alarm));this.QW.U(A.z2(A.abg.Apj
));this.QQ.U(A.z2(A.abg.ActionList));this.QT.U(A.z2(A.abg.AKp));this.OE.U(A.z2(A.
abg.AJe));this.QS.U(A.z2(A.abg.A0v));},_Mark:function(D){var B;C.SO._Mark.call(this
,D);if((B=this.QR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QW)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.QQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QT)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.OE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QS
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsMainScreen"};C.AM6={
IA:null,QX:null,QU:null,QV:null,AHg:function(H){A.ow([this,this.Bu0],this);A.ow([
this,this.BuY],this);A.ow([this,this.BuZ],this);A.ow([this,this.Bu4],this);},H5:
function(H){var Cg=(C.Ri.isPrototypeOf(H)?H:null);if(!Cg)return;if(Cg===this.IA)
A._GetAutoObject(C.A1).BY(85);if(Cg===this.QU)A._GetAutoObject(C.A1).BY(80);if(Cg===
this.QV)A._GetAutoObject(C.A1).BY(50);if(Cg===this.QX)A._GetAutoObject(C.A1).BY(
96);},BuZ:function(H){var Bb=A._GetAutoObject(A.Device.Helper).AKz();A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);this.QV.Aae(A._GetAutoObject(A.Device.Device).Aq.Cf().
toFixed());},Bu4:function(H){var Bb=A._GetAutoObject(A.Device.Helper).A07();A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);this.QX.Aae(A._GetAutoObject(A.Device.Device).Aq.Cf().
toFixed());},BuY:function(H){var Bb=A._GetAutoObject(A.Device.Helper).A02();A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);this.QU.Aae(A._GetAutoObject(A.Device.Device).Aq.Cf().
toFixed());},Bu0:function(H){var Bb=A._GetAutoObject(A.Device.Helper).A05();A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);this.IA.Aae(A._GetAutoObject(A.Device.Device).Aq.Cf().
toFixed());},_Init:function(aArg){C.SO._Init.call(this,aArg);C.Ri._Init.call(this.
IA={I:this},0);C.Ri._Init.call(this.QX={I:this},0);C.Ri._Init.call(this.QU={I:this
},0);C.Ri._Init.call(this.QV={I:this},0);this.__proto__=C.AM6;this.IA.G(Nr);this.
IA.Aj(true);this.IA.U(A.z2(A.abg.AIJ));this.IA.Z8(true);this.QX.G(Bl4);this.QX.Aj(
true);this.QX.U(A.z2(A.abg.A1Y));this.QX.Z8(true);this.QU.G(Bl5);this.QU.Aj(true
);this.QU.U(A.z2(A.abg.A12));this.QU.Z8(true);this.QV.G(Bl6);this.QV.Aj(true);this.
QV.U(A.z2(A.abg.A18));this.QV.Z8(true);this.J(this.IA,0);this.J(this.QX,0);this.
J(this.QU,0);this.J(this.QV,0);this.IA.AV=[this,this.AdP];this.IA.DB(A.zW(A.abi.
ALI));this.IA.Aaa(A.zW(A.abi.M5));this.QX.AV=[this,this.AdP];this.QX.DB(A.zW(A.abi.
AMa));this.QX.Aaa(A.zW(A.abi.M5));this.QU.AV=[this,this.AdP];this.QU.DB(A.zW(A.abi.
AMc));this.QU.Aaa(A.zW(A.abi.M5));this.QV.AV=[this,this.AdP];this.QV.DB(A.zW(A.abi.
AMe));this.QV.Aaa(A.zW(A.abi.M5));},_Done:function(){this.__proto__=C.SO;this.IA.
_Done();this.QX._Done();this.QU._Done();this.QV._Done();C.SO._Done.call(this);},
_ReInit:function(){C.SO._ReInit.call(this);this.IA._ReInit();this.QX._ReInit();this.
QU._ReInit();this.QV._ReInit();this.IA.U(A.z2(A.abg.AIJ));this.QX.U(A.z2(A.abg.A1Y
));this.QU.U(A.z2(A.abg.A12));this.QV.U(A.z2(A.abg.A18));},_Mark:function(D){var
B;C.SO._Mark.call(this,D);if((B=this.IA)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
QX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.QU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.QV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::ListsIdManagementScreen"
};C.ANC={XB:function(H){this.Aey();this.D0(A.z2(A.abg.App),[this,this.Ao_],3);this.
D0(A.z2(A.abg.AfQ),[this,this.Aio],2);this.D0(A.z2(A.abg.Oz),[this,this.Z7],9);this.
D0(A.z2(A.abg.A1E),[this,this.BgH],16);this.D0(A.z2(A.abg.A1D),[this,this.Bgo],12
);this.D0(A.z2(A.abg.Aet),[this,this.Aig],0);A._GetAutoObject(C.Cz).IT();A._GetAutoObject(
C.Cz).V5(A.z2(A.abg.Aeu)+A.z2(A.abg.Colon));A._GetAutoObject(A.Device.Device).Co(
6);},DW:function(H){},Ack:function(){return C.Zc;},Acl:function(){return C.Acp;}
,Rz:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.
Helper).A02());},HY:function(H){var F;C.Gi.HY.call(this,H);if(this.Ah6()===false
){if(!!this.D3&&((F=this.D3,F[1].call(F[0]))===16)){this.N.Cn(A.zW(A.abi.AMp));this.
N.Ch=[this,this.A0t];}else{this.N.Cn(A.zW(A.abi.AL6));this.N.Ch=[this,this.A0q];
}this.N.Ft(A.jm);}this.N.O4(false);this.N.O5(false);},Aeg:function(){A._GetAutoObject(
C.A1).BY(81);},Aef:function(){A._GetAutoObject(C.A1).BY(82);},_Init:function(aArg
){C.Gi._Init.call(this,aArg);this.__proto__=C.ANC;var B;this.Dw(C.AK8);this.Et(A.
z2(A.abg.Bdn));this.Afw([B=A._GetAutoObject(A.Device.Device),B.A2O,B.A6L]);},_className:
"Application::NoNaisIdListScreen"};C.ANB={_Init:function(aArg){C.Iz._Init.call(this
,aArg);this.__proto__=C.ANB;this.LU.An(false);this.LU.Aj(false);this.LU.W(false);
},_className:"Application::NoNaisIdListFilterScreen"};C.ANA={_Init:function(aArg
){C.H_._Init.call(this,aArg);this.__proto__=C.ANA;this.N.Cd(A.z2(A.abg.Baq));},_className:
"Application::NoNaisIdListActionsScreen"};C.AK8={EA:function(H){C.JK.EA.call(this
,H);this.CY.At(A._GetAutoObject(A.Device.Converter).AeF(10));},_Init:function(aArg
){C.JK._Init.call(this,aArg);this.__proto__=C.AK8;},_className:"Application::HeaderNoNaisIdListFilter"
};C.APw={A_R:false,XB:function(H){if((!!this.Bg&&!!this.Bg.AZ)&&(this.Bg.AZ.Cf()>
0)){A._GetAutoObject(C.Cz).Aew(A.z2(A.abg.AJL),[this,this.BdO]);A._GetAutoObject(
C.Cz).IT();if(this.Brb())A._GetAutoObject(C.Cz).Aew(A.z2(A.abg.AJ4),[this,this.ANM
]);else A._GetAutoObject(C.Cz).Ag_(A.z2(A.abg.AJ4));A._GetAutoObject(C.Cz).IT();
A._GetAutoObject(C.Cz).Aew(A.z2(A.abg.AyE),[this,this.BdK]);A._GetAutoObject(C.Cz
).IT();A._GetAutoObject(C.Cz).Aew(A.z2(A.abg.A5r),[this,this.BdN]);A._GetAutoObject(
C.Cz).IT();A._GetAutoObject(C.Cz).Aew(A.z2(A.abg.AZW),[this,this.BdJ]);}else{A._GetAutoObject(
C.Cz).Ag_(A.z2(A.abg.AJL));A._GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).Ag_(
A.z2(A.abg.AJ4));A._GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).Ag_(A.z2(A.abg.
AyE));A._GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).Ag_(A.z2(A.abg.A5r));A.
_GetAutoObject(C.Cz).IT();A._GetAutoObject(C.Cz).Ag_(A.z2(A.abg.AZW));}A._GetAutoObject(
C.Cz).IT();this.D0(A.z2(A.abg.AJL),[this,this.Bfo],17);this.D0(A.z2(A.abg.Ba_),[
this,this.BgD],13);this.D0(A.z2(A.abg.Aet),[this,this.Aig],0);A._GetAutoObject(C.
Cz).IT();A._GetAutoObject(C.Cz).V5(A.z2(A.abg.Aeu)+A.z2(A.abg.Colon));A._GetAutoObject(
A.Device.Device).Co(6);},DW:function(H){},CF:function(H){C.Gi.CF.call(this,H);if(
this.A_R&&(A._GetAutoObject(A.Device.Device).Ac_>0))A.ow([this,this.ANM],this);}
,Ack:function(){return C.AyB;},Acl:function(){return C.AzL;},Rz:function(H){A._GetAutoObject(
A.Device.Device).Aq.Bo(A._GetAutoObject(A.Device.Helper).A05());},HY:function(H){
C.Gi.HY.call(this,H);this.N.Cn(A.zW(A.abi.AMl));this.N.Ch=[this,this.A0s];this.N.
Ft(A.jm);this.N.O4(false);this.N.O5(false);},Aeg:function(){A._GetAutoObject(C.A1
).BY(83);},Aef:function(){A._GetAutoObject(C.A1).BY(84);},BdJ:function(H){A._GetAutoObject(
A.Device.Device).Co(0);var AGS=A._GetAutoObject(A.Device.Device).BatchResetBirthAnnouncementPending(
);A._GetAutoObject(A.Device.Device).A_(62,true,AGS.toFixed(),0,null);},BdK:function(
H){A._GetAutoObject(A.Device.Device).Co(0);this.A0m(this);},ANM:function(H){var B;
A._GetAutoObject(A.Device.Device).Co(0);if(!A._GetAutoObject(A.Device.Device).Ac_
){A._GetAutoObject(A.Device.Device).A_(73,true,A.jm,0,[this,this.Bti]);return;}if(
A._GetAutoObject(A.Device.Device).AsR()===false){A.za([this,this.AgI],[B=A._GetAutoObject(
A.Device.Device),B.AcR,B.AdO],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.
jm,0,[this,this.Anc]);return;}var Awp=A._GetAutoObject(A.Device.Device).Auo(0);if(
Awp.AC1){A._GetAutoObject(A.Device.Device).BatchResetBirthAnnouncementPending();
this.Et(A.z2(A.abg.BhA));A._GetAutoObject(A.Device.Device).ArX(Awp);}else A._GetAutoObject(
A.Device.Device).A_(70,true,A.jm,0,null);},Bti:function(H){var Ar=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===7)){this.A_R=true;A._GetAutoObject(
C.A1).BY(87);}},Anc:function(H){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(
H)?H:null);if(!!Ar&&(Ar.PopupState===5))A.zn([this,this.AgI],[B=A._GetAutoObject(
A.Device.Device),B.AcR,B.AdO],0);},AgI:function(H){var B;if(A._GetAutoObject(A.Device.
Device).AiT===3){A._GetAutoObject(A.Device.Device).A_(74,false,A.jm,0,[this,this.
Anc]);A.zn([this,this.AgI],[B=A._GetAutoObject(A.Device.Device),B.AcR,B.AdO],0);
A.ow([this,this.ANM],this);}},Brb:function(){var AWe=this.Bg.AZ;if(!AWe)return false;
var P;for(P=0;P<AWe.Cf();P++)if(A._GetAutoObject(A.Device.Helper).AhU(AWe.AKF(P,
34))===false)return true;return false;},BdN:function(H){A._GetAutoObject(A.Device.
Device).Co(0);this.A0o(this);},BdO:function(H){A._GetAutoObject(A.Device.Device).
Co(0);this.A0p(this);},_Init:function(aArg){C.Gi._Init.call(this,aArg);this.__proto__=
C.APw;var B;this.Dw(C.AK_);this.Et(A.z2(A.abg.Bdt));this.Afw([B=A._GetAutoObject(
A.Device.Device),B.A2Q,B.A6M]);},_className:"Application::RegistrationsListScreen"
};C.APv={_Init:function(aArg){C.Iz._Init.call(this,aArg);this.__proto__=C.APv;},
_className:"Application::RegistrationsListFilterScreen"};C.APu={_Init:function(aArg
){C.H_._Init.call(this,aArg);this.__proto__=C.APu;this.N.Cd(A.z2(A.abg.AZG));},_ReInit:
function(){C.H_._ReInit.call(this);this.N.Cd(A.z2(A.abg.AZG));},_className:"Application::RegistrationsListActionsScreen"
};C.AK_={EA:function(H){C.Ui.EA.call(this,H);this.CY.At(A._GetAutoObject(A.Device.
Converter).AeF(11));},_Init:function(aArg){C.Ui._Init.call(this,aArg);this.__proto__=
C.AK_;this.Text.G(Bl7);this.Text.R(A.z2(A.abg.AIJ));this.Text.A0(0x12);},_className:
"Application::HeaderRegistrationsList"};C.AyB={R7:0,AQ:null,A4:null,DU:null,HR:null
,Td:null,G2:null,Oy:0,J3:0,Init:function(aArg){},Bh:function(aSize){C.A$.Bh.call(
this,aSize);this.Background.G(A.aaN(this.Background.M,aSize));this.T.G(A.aaQ(this.
T.M,((aSize[0]*30)/100)|0));this.AQ.G([this.T.M[2]-1,0,this.T.M[2]+1,aSize[1]]);
this.HR.G([this.T.M[2],0,this.T.M[2]+(((aSize[0]*15)/100)|0),aSize[1]]);this.A4.
G([this.HR.M[2]-1,0,this.HR.M[2]+1,aSize[1]]);this.Td.G([this.HR.M[2],0,this.HR.
M[2]+(((aSize[0]*30)/100)|0),aSize[1]]);this.DU.G([this.Td.M[2]-1,0,this.Td.M[2]+
1,aSize[1]]);this.G2.G([this.Td.M[2],0,aSize[0],aSize[1]]);},Ah:function(Ae){C.A$.
Ah.call(this,Ae);this.HR.L(this.T.AM);this.G2.L(this.T.AM);this.Td.L(this.T.AM);
if(A._GetAutoObject(A.Device.Helper).AhU(this.J3)){this.T.Y(A.zW(A.eV.LO));this.
U(A5_);this.Td.R(Qk);}else{this.T.Y(A.zW(A.eV.Au));this.U(this.Oy.toFixed());this.
Td.R(A._GetAutoObject(A.Device.Helper).Ue(this.R7,0,5).toFixed());}},B8:function(
Z){if(!this.AZ)return;this.Ho=Z;if(!!this.AZ){this.Oy=this.AZ.Cq(Z,1);this.J3=this.
AZ.AKF(Z,34);var AqQ=this.AZ.AKw(Z,7);this.R7=this.AZ.LQ(Z,26);var AvT=this.AZ.Ht(
Z,4);var AdY=A._GetAutoObject(A.Device.Helper).L7(AvT,A._GetAutoObject(A.Device.
Helper).DR());this.HR.At(A._GetAutoObject(A.Device.Converter).AkK(AqQ));if(AdY<100
)this.G2.R((AdY.toFixed()+Cw)+A.z2(A.abg.AHN));else this.G2.R(A._GetAutoObject(A.
abk.K5).Azj(AvT,A._GetAutoObject(A.Device.Helper).DR(),AEy));this.Al();}},_Init:
function(aArg){C.A$._Init.call(this,aArg);A.abh.AH._Init.call(this.AQ={I:this},0
);A.abh.AH._Init.call(this.A4={I:this},0);A.abh.AH._Init.call(this.DU={I:this},0
);A.abh.Am._Init.call(this.HR={I:this},0);A.abh.Text._Init.call(this.Td={I:this}
,0);C.CG._Init.call(this.G2={I:this},0);this.__proto__=C.AyB;this.AQ.G(Al5);this.
AQ.L(A.iF.A7);this.A4.G(Al6);this.A4.L(A.iF.A7);this.DU.G(Bl8);this.DU.L(A.iF.A7
);this.HR.G(A5$);this.HR.L(A.iF.Text);this.Td.G(Avg);this.G2.G(Bl9);this.J(this.
AQ,0);this.J(this.A4,0);this.J(this.DU,0);this.J(this.HR,0);this.J(this.Td,0);this.
J(this.G2,0);this.HR.At(A.zW(A.abj.J6));this.Td.Y(A.zW(A.eV.Au));this.G2.Y(A.zW(
A.eV.Au));this.G2.By(A.zW(A.eV.Az));this.G2.C5(A.zW(A.eV.Cr));this.Init(aArg);},
_Done:function(){this.__proto__=C.A$;this.AQ._Done();this.A4._Done();this.DU._Done(
);this.HR._Done();this.Td._Done();this.G2._Done();C.A$._Done.call(this);},_ReInit:
function(){C.A$._ReInit.call(this);this.AQ._ReInit();this.A4._ReInit();this.DU._ReInit(
);this.HR._ReInit();this.Td._ReInit();this.G2._ReInit();},_Mark:function(D){var B;
C.A$._Mark.call(this,D);if((B=this.AQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
A4)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DU)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Td)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.G2)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::CalfListRegistrationItem"
};C.AzL={AhR:null,AhP:null,M6:null,_Init:function(aArg){C.DQ._Init.call(this,aArg
);A.abh.Am._Init.call(this.AhR={I:this},0);A.abh.Am._Init.call(this.AhP={I:this}
,0);A.abh.Am._Init.call(this.M6={I:this},0);this.__proto__=C.AzL;this.AhR.G(Bl_);
this.AhR.L(A.iF.Text);this.AhP.G(Bl$);this.AhP.L(A.iF.Text);this.M6.G(A51);this.
M6.L(A.iF.Text);this.J(this.AhR,0);this.J(this.AhP,0);this.J(this.M6,0);this.AhR.
At(A.zW(A.abi.Az7));this.AhP.At(A.zW(A.abi.AzY));this.M6.At(A.zW(A.abi.AzU));},_Done:
function(){this.__proto__=C.DQ;this.AhR._Done();this.AhP._Done();this.M6._Done();
C.DQ._Done.call(this);},_ReInit:function(){C.DQ._ReInit.call(this);this.AhR._ReInit(
);this.AhP._ReInit();this.M6._ReInit();},_Mark:function(D){var B;C.DQ._Mark.call(
this,D);if((B=this.AhR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AhP)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.M6)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdRegistration"
};C.AK9={I4:null,Ae1:null,II:null,A7:null,LY:A.jm,AnimalId:-1,WhereAbouts:0,Gender:
2,Init:function(aArg){var B;A.za([this,this.EA],[B=A._GetAutoObject(A.Device.Helper
).V,B.A2R,B.A38],0);A.za([this,this.EA],[B=A._GetAutoObject(A.Device.Helper).V,B.
XA,B.J9],0);A.za([this,this.EA],[B=A._GetAutoObject(A.Device.Helper).V,B.AoL,B.XK
],0);A.y_([this,this.EA],A._GetAutoObject(A.Device.Helper).V,0);A.ow([this,this.
EA],this);},CZ:function(E){C.BW.CZ.call(this,E);this.I4.L(E);this.Ae1.L(E);this.
II.L(E);},OnSetAnimalId:function(E){if(this.AnimalId===E)return;this.AnimalId=E;
if(E<0)this.II.R(A.z2(A.abg.Alz));else this.II.R(((A.z2(A.abg.Hu)+A.z2(A.abg.Colon
))+Cw)+E.toFixed());},EA:function(H){if(A._GetAutoObject(A.Device.Helper).V.Aob(
)){this.AtM(((A._GetAutoObject(A.Device.Helper).V.Cu+1).toFixed()+A5O)+A._GetAutoObject(
A.Device.Device).Aq.Cf().toFixed());this.J9(A._GetAutoObject(A.Device.Helper).V.
Gender);this.OnSetAnimalId(A._GetAutoObject(A.Device.Helper).V.VisualId);this.Aah(
A._GetAutoObject(A.Device.Helper).V.WhereAbouts);}else{this.AtM(A5P);this.J9(2);
this.OnSetAnimalId(-1);this.Aah(0);}},J9:function(E){if(this.Gender===E)return;this.
Gender=E;this.Ae1.At(A._GetAutoObject(A.Device.Converter).AkK(E));},AtM:function(
E){if(this.LY===E)return;this.LY=E;this.I4.R(E);},Aah:function(E){if(this.WhereAbouts===
E)return;this.WhereAbouts=E;if(A._GetAutoObject(A.Device.Helper).AhU(E))this.II.
W(false);else this.II.W(true);},_Init:function(aArg){C.BW._Init.call(this,aArg);
A.abh.Text._Init.call(this.I4={I:this},0);A.abh.Am._Init.call(this.Ae1={I:this},
0);A.abh.Text._Init.call(this.II={I:this},0);A.abh.DK._Init.call(this.A7={I:this
},0);this.__proto__=C.AK9;this.I4.G(A5Q);this.I4.HV(2);this.I4.KH(true);this.I4.
A0(0x12);this.I4.R(A5R);this.Ae1.G(Bma);this.II.G(Bmb);this.II.A0(0x11);this.II.
R(A.z2(A.abg.Alz));this.A7.DL(AUq);this.A7.D5(AUr);this.A7.L(A.iF.A7);this.J(this.
I4,0);this.J(this.Ae1,0);this.J(this.II,0);this.J(this.A7,0);this.I4.Y(A.zW(A.eV.
Az));this.Ae1.At(A._GetAutoObject(A.Device.Converter).AkK(2));this.II.Y(A.zW(A.eV.
Au));this.Init(aArg);},_Done:function(){this.__proto__=C.BW;this.I4._Done();this.
Ae1._Done();this.II._Done();this.A7._Done();C.BW._Done.call(this);},_ReInit:function(
){C.BW._ReInit.call(this);this.I4._ReInit();this.Ae1._ReInit();this.II._ReInit();
this.A7._ReInit();},_Mark:function(D){var B;C.BW._Mark.call(this,D);if((B=this.I4
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Ae1)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.II)._cycle!=D)B._Mark(B._cycle=D);if((B=this.A7)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::HeaderRegistrationInfo"};C.Y7={EaseOfDeliveryToString:
null,AeT:null,B8:function(H){C.MS.B8.call(this,H);var AF3=A._GetAutoObject(A.Device.
Helper).V.EaseOfDelivery;this.JP(this.EaseOfDeliveryToString.KN(AF3));this.GQ.R(
this.AeT.Aca(AF3).toFixed());},CZ:function(E){C.MS.CZ.call(this,E);this.GQ.L(E);
},_Init:function(aArg){C.MS._Init.call(this,aArg);A.Device.EaseOfDeliveryToString.
_Init.call(this.EaseOfDeliveryToString={I:this},0);A.Device.AeT._Init.call(this.
AeT={I:this},0);this.__proto__=C.Y7;this.U(A.z2(A.abg.Akr));},_Done:function(){this.
__proto__=C.MS;this.EaseOfDeliveryToString._Done();this.AeT._Done();C.MS._Done.call(
this);},_ReInit:function(){C.MS._ReInit.call(this);this.EaseOfDeliveryToString._ReInit(
);this.AeT._ReInit();this.U(A.z2(A.abg.Akr));},_Mark:function(D){var B;C.MS._Mark.
call(this,D);if((B=this.EaseOfDeliveryToString)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AeT)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemCalvingEase"
};C.V_={WhereAboutsToString:null,AdE:null,B8:function(H){C.MS.B8.call(this,H);var
J3=A._GetAutoObject(A.Device.Helper).V.WhereAbouts;this.JP(this.WhereAboutsToString.
KN(J3));this.GQ.R(this.AdE.Aca(J3).toFixed());},CZ:function(E){C.MS.CZ.call(this
,E);this.GQ.L(E);},_Init:function(aArg){C.MS._Init.call(this,aArg);A.Device.WhereAboutsToString.
_Init.call(this.WhereAboutsToString={I:this},0);A.Device.AdE._Init.call(this.AdE={
I:this},0);this.__proto__=C.V_;this.U(A.z2(A.abg.Vg));},_Done:function(){this.__proto__=
C.MS;this.WhereAboutsToString._Done();this.AdE._Done();C.MS._Done.call(this);},_ReInit:
function(){C.MS._ReInit.call(this);this.WhereAboutsToString._ReInit();this.AdE._ReInit(
);this.U(A.z2(A.abg.Vg));},_Mark:function(D){var B;C.MS._Mark.call(this,D);if((B=
this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AdE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationInfoItemWhereAbouts"
};C.QO={CH:null,Ac:null,AE:null,Init:function(aArg){},CF:function(H){var B;C.DP.
CF.call(this,H);A.za([this,this.AdQ],[B=A._GetAutoObject(A.Device.Helper).V,B.P1
,B.OnSetId],0);A.za([this,this.AdQ],[B=A._GetAutoObject(A.Device.Helper),B.Tq,B.
Tr],0);A.ow([this,this.AdQ],this);},Fc:function(H){var B;C.DP.Fc.call(this,H);A.
zn([this,this.AdQ],[B=A._GetAutoObject(A.Device.Helper).V,B.P1,B.OnSetId],0);A.zn([
this,this.AdQ],[B=A._GetAutoObject(A.Device.Helper),B.Tq,B.Tr],0);},FZ:function(
H){var B;this.AE.N2((B=this.Ac.Dh(0x1))[3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1
]);this.AE.N4(-this.Ac.Br[1]);},DW:function(H){switch(this.CH.CO){case 6:case 7:
this.CH.PF=true;break;case 4:this.A$b(4);break;case 5:this.A$b(5);break;default:;
}},A$b:function(Ge){var B;switch(Ge){case 5:{var Cl=this.Ac.Br[1]-40;if(Cl<-(((B=
this.Ac.Dh(0x1))[3]-B[1])-((B=this.Ac.M)[3]-B[1])))Cl=-(((B=this.Ac.Dh(0x1))[3]-
B[1])-((B=this.Ac.M)[3]-B[1]));if(Cl>0)Cl=0;this.Ac.Go([this.Ac.Br[0],Cl]);}break;
case 4:{var Cl=this.Ac.Br[1]+40;if(Cl>0)Cl=0;this.Ac.Go([this.Ac.Br[0],Cl]);}break;
default:throw new Error(Bmc);}},Ix:function(H){var B;var X=this.Ac.Af;var Ab;while(
!!X&&!((X.S&0x200)===0x200)){if(((X.S&0x400)===0x400)){Ab=(C.Iy.isPrototypeOf(X)?
X:null);if(!!Ab)Ab.B8(this);}X=X.Af;}},AdQ:function(s){this.Ix(s);},TF:function(
H){var B;this.Ac.AbJ(null,null);if(!!this.A6&&((this.A6.S&0x400)===0x400))this.Ac.
IB(this.A6,true,null,null);},Iv:function(H){A.ow([this,this.FZ],this);},_Init:function(
aArg){C.DP._Init.call(this,aArg);A.Core.B1._Init.call(this.CH={I:this},0);A.Core.
Ac._Init.call(this.Ac={I:this},0);C.AE._Init.call(this.AE={I:this},0);this.__proto__=
C.QO;this.CH.Filter=147;this.Ac.G(Vt);this.Ac.Lf(1);this.AE.G(AiZ);this.J(this.Ac
,0);this.J(this.AE,0);this.CH.B2=[this,this.DW];this.CH.Ea=[this,this.DW];this.Ac.
Eu=[this,this.Iv];this.Init(aArg);},_Done:function(){this.__proto__=C.DP;this.CH.
_Done();this.Ac._Done();this.AE._Done();C.DP._Done.call(this);},_ReInit:function(
){C.DP._ReInit.call(this);this.CH._ReInit();this.Ac._ReInit();this.AE._ReInit();
},_Mark:function(D){var B;C.DP._Mark.call(this,D);if((B=this.CH)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::AnimalRowInfos"};C.V$={Y2:null,
V7:null,Y3:null,V8:null,Y7:null,V_:null,_Init:function(aArg){C.QO._Init.call(this
,aArg);C.Y2._Init.call(this.Y2={I:this},0);C.V7._Init.call(this.V7={I:this},0);C.
Y3._Init.call(this.Y3={I:this},0);C.V8._Init.call(this.V8={I:this},0);C.Y7._Init.
call(this.Y7={I:this},0);C.V_._Init.call(this.V_={I:this},0);this.__proto__=C.V$;
this.Y2.G(BI);this.Y2.Aj(true);this.V7.G(Ke);this.V7.Aj(true);this.V7.Bk(true);this.
Y3.G(RT);this.Y3.Aj(true);this.V8.G(Yl);this.V8.Aj(true);this.V8.Bk(true);this.Y7.
G(Ai2);this.Y7.Aj(true);this.V_.G(Al4);this.V_.Aj(true);this.V_.Bk(true);this.J(
this.Y2,0);this.J(this.V7,0);this.J(this.Y3,0);this.J(this.V8,0);this.J(this.Y7,
0);this.J(this.V_,0);},_Done:function(){this.__proto__=C.QO;this.Y2._Done();this.
V7._Done();this.Y3._Done();this.V8._Done();this.Y7._Done();this.V_._Done();C.QO.
_Done.call(this);},_ReInit:function(){C.QO._ReInit.call(this);this.Y2._ReInit();
this.V7._ReInit();this.Y3._ReInit();this.V8._ReInit();this.Y7._ReInit();this.V_.
_ReInit();},_Mark:function(D){var B;C.QO._Mark.call(this,D);if((B=this.Y2)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.V7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Y3)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V8)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Y7)._cycle!=D)B._Mark(B._cycle=D);if((B=this.V_)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalRegistrationInfos"};C.V8={BreedToString:null
,GQ:null,MV:null,B8:function(H){C.H8.B8.call(this,H);var Bn=A._GetAutoObject(A.Device.
Helper).V.Breed;this.U(this.BreedToString.Cb(Bn));this.GQ.R(this.MV.Aca(Bn).toFixed(
));},CZ:function(E){C.H8.CZ.call(this,E);this.GQ.L(E);},_Init:function(aArg){C.H8.
_Init.call(this,aArg);A.Device.BreedToString._Init.call(this.BreedToString={I:this
},0);A.abh.Text._Init.call(this.GQ={I:this},0);A.Device.MV._Init.call(this.MV={I:
this},0);this.__proto__=C.V8;this.B3.G(Bmd);this.GQ.G(Bme);this.GQ.HV(5);this.GQ.
A0(0x14);this.GQ.R(Bmf);this.GQ.L(A.iF.Text);this.J(this.GQ,0);this.GT.At(A.zW(A.
abi.AzX));this.GQ.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.H8;this.BreedToString.
_Done();this.GQ._Done();this.MV._Done();C.H8._Done.call(this);},_ReInit:function(
){C.H8._ReInit.call(this);this.BreedToString._ReInit();this.GQ._ReInit();this.MV.
_ReInit();},_Mark:function(D){var B;C.H8._Mark.call(this,D);if((B=this.BreedToString
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.MV)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalInfoIconItemBreed"
};C.Y3={B8:function(H){C.H8.B8.call(this,H);var AwW=A._GetAutoObject(A.Device.Helper
).V.NaisIdMother;if(AwW>0)this.U(A._GetAutoObject(A.Device.Converter).Vc(AwW));else
this.U(A.z2(A.abg.Unknown));},_Init:function(aArg){C.H8._Init.call(this,aArg);this.
__proto__=C.Y3;this.GT.At(A.zW(A.abi.ALO));},_className:"Application::AnimalInfoIconItemNaisIdMother"
};C.V7={WU:null,B8:function(H){C.H8.B8.call(this,H);var Yz=A._GetAutoObject(A.Device.
Helper).V.DateOfBirth;var Ad2=A._GetAutoObject(A.Device.Helper).V.BirthType;if(Yz>
0)this.U(A._GetAutoObject(A.abk.K5).AhB(Yz));else this.U(A.z2(A.abg.Unknown));var
AvV=A.zW(A.abj.J6);switch(Ad2){case 0:AvV=A.zW(A.abi.AzV);break;case 1:{AvV=A.zW(
A.abi.Asz);this.WU.Ce(0);}break;case 2:{AvV=A.zW(A.abi.Asz);this.WU.Ce(1);}break;
case 3:{AvV=A.zW(A.abi.Asz);this.WU.Ce(2);}break;default:A.aa8("%s%e",Bmg,Ad2);}
this.WU.At(AvV);},_Init:function(aArg){C.H8._Init.call(this,aArg);A.abh.Am._Init.
call(this.WU={I:this},0);this.__proto__=C.V7;this.B3.G(Bmh);this.WU.G(AD4);this.
WU.L(A.iF.Text);this.J(this.WU,0);this.GT.At(A.zW(A.abi.AzU));this.WU.At(A.zW(A.
abi.AzV));},_Done:function(){this.__proto__=C.H8;this.WU._Done();C.H8._Done.call(
this);},_ReInit:function(){C.H8._ReInit.call(this);this.WU._ReInit();},_Mark:function(
D){var B;C.H8._Mark.call(this,D);if((B=this.WU)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::AnimalInfoIconItemBirth"};C.Y2={R7:0,V9:null,J3:0,Bh:function(
aSize){C.H8.Bh.call(this,aSize);this.V9.G(this.GT.M);},Ah:function(Ae){C.H8.Ah.call(
this,Ae);this.V9.L(this.B3.AM);if(A._GetAutoObject(A.Device.Helper).AhU(this.J3)
){this.U(A.z2(A.abg.AnimalLoss));this.GT.W(false);this.V9.W(true);}else if(this.
R7>0){this.U(A._GetAutoObject(A.Device.Converter).Vc(this.R7));this.GT.W(true);this.
V9.W(false);}else{this.U(A.z2(A.abg.Unknown));this.GT.W(true);this.V9.W(false);}
},B8:function(H){C.H8.B8.call(this,H);this.R7=A._GetAutoObject(A.Device.Helper).
V.NaisId;this.J3=A._GetAutoObject(A.Device.Helper).V.WhereAbouts;this.Al();},_Init:
function(aArg){C.H8._Init.call(this,aArg);A.abh.Text._Init.call(this.V9={I:this}
,0);this.__proto__=C.Y2;this.V9.R(A5_);this.J(this.V9,0);this.GT.At(A.zW(A.abi.AzY
));this.V9.Y(A.zW(A.eV.LO));},_Done:function(){this.__proto__=C.H8;this.V9._Done(
);C.H8._Done.call(this);},_ReInit:function(){C.H8._ReInit.call(this);this.V9._ReInit(
);},_Mark:function(D){var B;C.H8._Mark.call(this,D);if((B=this.V9)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalInfoIconItemNaisId"};C.AIj={V$:null
,DW:function(H){var DI=(A.Core.B1.isPrototypeOf(H)?H:null);switch(DI.CO){case 6:
this.NJ(this);break;case 7:this.Me(this);break;default:DI.PF=true;}},CF:function(
H){var B;this.V$.CF(this);C.Aw.CF.call(this,H);},Fc:function(H){var B;this.V$.Fc(
this);C.Aw.Fc.call(this,H);},Alb:function(H){A._GetAutoObject(C.A1).Fm();},Bg8:function(
H){A._GetAutoObject(C.A1).AfA(85);},Me:function(H){if(A._GetAutoObject(A.Device.
Device).Aq.Cf()<=1)return;var KT=A._GetAutoObject(A.Device.Helper).V.Cu;KT=KT+1;
if(KT>=A._GetAutoObject(A.Device.Device).Aq.Cf())KT=0;A._GetAutoObject(A.Device.
Helper).HU(KT);},NJ:function(H){if(A._GetAutoObject(A.Device.Device).Aq.Cf()<=1)
return;var KT=A._GetAutoObject(A.Device.Helper).V.Cu;KT=KT-1;if(KT<0)KT=A._GetAutoObject(
A.Device.Device).Aq.Cf()-1;A._GetAutoObject(A.Device.Helper).HU(KT);},_Init:function(
aArg){C.Aw._Init.call(this,aArg);C.V$._Init.call(this.V$={I:this},0);this.__proto__=
C.AIj;this.Background.G(B4);this.N.W(true);this.N.O4(true);this.N.O5(true);this.
Dw(C.AK9);this.V$.G(FN);this.J(this.V$,0);this.N.CB=[this,this.Alb];this.N.Ch=[this
,this.Bg8];this.N.C$(A.zW(A.abi.ET));this.N.Cn(A.zW(A.abi.AMm));},_Done:function(
){this.__proto__=C.Aw;this.V$._Done();C.Aw._Done.call(this);},_ReInit:function(){
C.Aw._ReInit.call(this);this.V$._ReInit();},_Mark:function(D){var B;C.Aw._Mark.call(
this,D);if((B=this.V$)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalRegistrationDetailsScreen"
};C.H8={GT:null,B3:null,U:function(E){C.Iy.U.call(this,E);this.B3.R(this.Dn);},CZ:
function(E){C.Iy.CZ.call(this,E);this.GT.L(E);this.B3.L(E);},_Init:function(aArg
){C.Iy._Init.call(this,aArg);A.abh.Am._Init.call(this.GT={I:this},0);C.CG._Init.
call(this.B3={I:this},0);this.__proto__=C.H8;this.GT.G(Bmi);this.GT.L(A.iF.Text);
this.B3.G(Bmj);this.B3.A0(0x11);this.B3.L(A.iF.Text);this.J(this.GT,0);this.J(this.
B3,0);this.GT.At(A.zW(A.abj.J6));this.B3.Y(A.zW(A.eV.Au));this.B3.By(A.zW(A.eV.Az
));},_Done:function(){this.__proto__=C.Iy;this.GT._Done();this.B3._Done();C.Iy._Done.
call(this);},_ReInit:function(){C.Iy._ReInit.call(this);this.GT._ReInit();this.B3.
_ReInit();},_Mark:function(D){var B;C.Iy._Mark.call(this,D);if((B=this.GT)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.B3)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoIconItem"};C.Iy={Background:null,Ka:0,GY:false,C6:function(
){this.B8(this);},Init:function(aArg){var B;A.za([this,this.A63],[B=A._GetAutoObject(
A.Device.Helper).V,B.P1,B.OnSetId],0);A.ow([this,this.A63],this);},Bh:function(aSize
){C.GO.Bh.call(this,aSize);this.Background.G(A.aaN(this.Background.M,aSize));},Ah:
function(Ae){C.GO.Ah.call(this,Ae);if(this.GY)this.Background.L(A.iF.Be);else this.
Background.L(A.iF.CE);},B8:function(H){},A63:function(s){this.B8(s);},Bk:function(
E){if(this.GY===E)return;this.GY=E;this.Al();},CZ:function(E){if(this.Ka===E)return;
this.Ka=E;},_Init:function(aArg){C.GO._Init.call(this,aArg);A.abh.AH._Init.call(
this.Background={I:this},0);this.__proto__=C.Iy;this.G(BI);this.Background.G(AEA
);this.Ka=A.iF.Text;this.J(this.Background,0);this.Init(aArg);},_Done:function(){
this.__proto__=C.GO;this.Background._Done();C.GO._Done.call(this);},_ReInit:function(
){C.GO._ReInit.call(this);this.Background._ReInit();this.C6();},_Mark:function(D
){var B;C.GO._Mark.call(this,D);if((B=this.Background)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalInfoBaseItem"};C.MS={GQ:null,BtM:function(H){
this.B3.G(A.aaQ(this.B3.M,this.GQ.M[0]));},_Init:function(aArg){C.E$._Init.call(
this,aArg);A.abh.Text._Init.call(this.GQ={I:this},0);this.__proto__=C.MS;this.GQ.
AW(0xA);this.GQ.G(Bmk);this.GQ.HV(5);this.GQ.I0(true);this.GQ.A0(0x14);this.GQ.R(
A.jm);this.GQ.L(A.iF.Text);this.J(this.GQ,0);this.GQ.Rs([this,this.BtM]);this.GQ.
Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.E$;this.GQ._Done();C.E$._Done.
call(this);},_ReInit:function(){C.E$._ReInit.call(this);this.GQ._ReInit();},_Mark:
function(D){var B;C.E$._Mark.call(this,D);if((B=this.GQ)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::AnimalMonochromeWrappingInfoItem"};C.At4={A40:false
,_Init:function(aArg){C.Ac6._Init.call(this,aArg);this.__proto__=C.At4;},_className:
"Application::OptionsOverlayCheckableNode"};C.AJn={ABr:function(E){C.AnT.ABr.call(
this,E);if(E)this.OG.R(Bml);else this.OG.R(A6a);},_Init:function(aArg){C.AnT._Init.
call(this,aArg);this.__proto__=C.AJn;this.OG.R(A6a);this.OG.Y(A.zW(A.eV.LO));},_className:
"Application::DarkThemeRadioMenuItem"};C.At6={AkU:false,_Init:function(aArg){C.Ac6.
_Init.call(this,aArg);this.__proto__=C.At6;},_className:"Application::OptionsOverlayRadioNode"
};C.APf={Gc:null,_Init:function(aArg){C.CJ._Init.call(this,aArg);C.AfM._Init.call(
this.Gc={I:this},0);this.__proto__=C.APf;var B;this.Lg(A.z2(A.abg.Aza));this.Gc.
G(Af2);this.Gc.Aj(true);this.Gc.W(true);this.Gc.U(A.z2(A.abg.ACk));this.Gc.AtP(false
);this.Gc.A35(true);this.J(this.Gc,0);this.Gc.Afr([B=this.Gc,B.GC]);this.Gc.He([
this,this.Es,this.HW]);this.Gc.Ail(A.zW(A.abi.Edit));this.Gc.AD([B=A._GetAutoObject(
A.Device.Device),B.AN7,B.AUU]);},_Done:function(){this.__proto__=C.CJ;this.Gc._Done(
);C.CJ._Done.call(this);},_ReInit:function(){C.CJ._ReInit.call(this);this.Gc._ReInit(
);this.Lg(A.z2(A.abg.Aza));this.Gc.U(A.z2(A.abg.ACk));},_Mark:function(D){var B;
C.CJ._Mark.call(this,D);if((B=this.Gc)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::PremisesSettingsScreen"};C.APd={Gh:0,C2:null,AX:null,JL:null,EM:null
,GermanStateToString:null,CountryToString:null,OL:0,Kw:0,Ls:false,Init:function(
aArg){A.za([this,this.Ts],[this,this.Ro,this.KG],0);A.za([this,this.Ts],[this,this.
Ald,this.Afu],0);},Ah:function(Ae){C.D4.Ah.call(this,Ae);this.AX.Ff(this.K3);this.
JL.Ff(this.K3);this.EM.CU(this.K3);},DD:function(H){var F;if(!this.N)return;switch(
this.A3){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.
N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.
N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(
F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd(
this.CountryToString.Cb(this.Kw));(F=this.N,F[1].call(F[0])).Cm=null;}break;case
2:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.
jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(null
);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.
N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd((A.z2(A.abg.Gr)+AuW)+this.
GermanStateToString.KN(A._GetAutoObject(A.Device.Converter).AKr(this.OL)));(F=this.
N,F[1].call(F[0])).Cm=null;}break;default:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.
abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this
,this.Gy];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm
);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(null);(F=this.
N,F[1].call(F[0])).Cd(A.jm);(F=this.N,F[1].call(F[0])).Cm=null;}}},Ed:function(EI
){var YO=this.A3;if(EI<0)EI=0;else if(EI>this.QA)EI=this.QA;switch(EI){case 0:{this.
A8(null);if(!this.Gh&&!this.OL)this.KG(0);}break;case 1:this.A8(this.EM);break;case
2:this.A8(this.JL);break;case 3:if(((YO===2)&&!this.OL)&&!this.Gh)return;else{this.
A8(this.AX);if(!this.Gh||(YO>0))this.AX.RB(2);else this.AX.RB(7);}break;default:
throw new Error(Aqi+EI.toFixed());}this.A3=EI;C.D4.Ed.call(this,EI);},Bu:function(
E){if(this.AI===E)return;this.AI=E;this.Ls=true;this.Rp(A._GetAutoObject(A.Device.
Helper).Ue(E,0,10));this.Afu(A._GetAutoObject(A.Device.Helper).Ue(E,10,2)|0);this.
KG(A._GetAutoObject(A.Device.Converter).AfW(E));this.Ls=false;if(!!this.AI){this.
JL.JO(2);this.AX.JO(10);}else{this.JL.JO(0);this.AX.JO(0);}this.Al();},GC:function(
H){var F;if(!this.AI){var BR=this.AI;this.Bu(A._GetAutoObject(A.Device.Helper).Azs(
));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.AI));A.aat(this.Q,
0);}this.Ed(2);}else this.Ed(this.QA);},AhC:function(){return this.Gh;},AhG:function(
){return 9999999999;},KG:function(E){if(this.Kw===E)return;this.Kw=E;if(this.Ls===
false)A.ow([this,this.TO],this);A.aat([this,this.Ro,this.KG],0);},Rp:function(E){
if(this.Gh===E)return;this.Gh=E;if(this.Ls===false)A.ow([this,this.TO],this);A.aat([
this,this.Z3,this.Rp],0);},TO:function(H){var F;var aString=(A.aaq(A._GetAutoObject(
A.Device.Converter).ArT(this.Kw),3,10)+A.aaq(this.OL,2,10))+A.aar(this.Gh,10,10);
var BR=this.AI;this.Bu(A.aa2(aString,0,10));if(this.AI!==BR){if(!!this.Q)(F=this.
Q,F[2].call(F[0],this.AI));A.aat(this.Q,0);}},Afu:function(E){if(this.OL===E)return;
this.OL=E;if(this.Ls===false)A.ow([this,this.TO],this);A.aat([this,this.Ald,this.
Afu],0);},Ro:function(){return this.Kw;},Z3:function(){return this.Gh;},Ald:function(
){return this.OL;},_Init:function(aArg){C.D4._Init.call(this,aArg);C.C2._Init.call(
this.C2={I:this},0);C.AMF._Init.call(this.AX={I:this},0);C.AsN._Init.call(this.JL={
I:this},0);C.ApO._Init.call(this.EM={I:this},0);A.Device.GermanStateToString._Init.
call(this.GermanStateToString={I:this},0);A.Device.CountryToString._Init.call(this.
CountryToString={I:this},0);this.__proto__=C.APd;var B;this.QA=3;this.AX.G(Bmm);
this.JL.G(Bmn);this.JL.FS(16);this.EM.G(A6b);this.J(this.AX,0);this.J(this.JL,0);
this.J(this.EM,0);this.C2.ABe([this,this.Ro,this.KG]);this.AX.AD([this,this.Z3,this.
Rp]);this.JL.AD([this,this.Ald,this.Afu]);this.EM.Dk(this.C2);this.EM.AD([B=this.
C2,B.CA,B.CC]);this.Init(aArg);},_Done:function(){this.__proto__=C.D4;this.C2._Done(
);this.AX._Done();this.JL._Done();this.EM._Done();this.GermanStateToString._Done(
);this.CountryToString._Done();C.D4._Done.call(this);},_ReInit:function(){C.D4._ReInit.
call(this);this.C2._ReInit();this.AX._ReInit();this.JL._ReInit();this.EM._ReInit(
);this.GermanStateToString._ReInit();this.CountryToString._ReInit();},_Mark:function(
D){var B;C.D4._Mark.call(this,D);if((B=this.C2)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.JL)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GermanStateToString).
_cycle!=D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::PremisesIDGerman"};C.AMF={MY:null,MX:null,ED:null,
FD:null,D9:null,Dg:null,CI:null,Cc:null,Ff:function(E){if(this.Mn===E)return;C.KC.
Ff.call(this,E);this.Cc.CU(E);this.CI.CU(E);this.Dg.CU(E);this.D9.CU(E);this.FD.
CU(E);this.ED.CU(E);this.MX.CU(E);this.MY.CU(E);},WK:function(I6){var BS=null;switch(
I6){case-1:case 0:BS=this.Fo;break;case 1:BS=this.Cc;break;case 2:BS=this.CI;break;
case 3:BS=this.Dg;break;case 4:BS=this.D9;break;case 5:BS=this.FD;break;case 6:BS=
this.ED;break;case 7:BS=this.MX;break;case 8:BS=this.MY;break;case 9:BS=this.Gj;
break;default:A.aa8("%s",Af5);}return BS;},_Init:function(aArg){C.KC._Init.call(
this,aArg);C.Ds._Init.call(this.MY={I:this},0);C.Ds._Init.call(this.MX={I:this},
0);C.Ds._Init.call(this.ED={I:this},0);C.Ds._Init.call(this.FD={I:this},0);C.Ds.
_Init.call(this.D9={I:this},0);C.Ds._Init.call(this.Dg={I:this},0);C.Ds._Init.call(
this.CI={I:this},0);C.Ds._Init.call(this.Cc={I:this},0);this.__proto__=C.AMF;this.
G(Bmo);this.Gj.G(AEK);this.MY.G(Avk);this.MX.G(AUv);this.ED.G(AUw);this.FD.G(AUx
);this.D9.G(AUy);this.Dg.G(AUz);this.CI.G(AUA);this.Cc.G(A5W);this.Fo.G(AUB);this.
El.G(AUB);this.J(this.MY,-2);this.J(this.MX,-2);this.J(this.ED,-2);this.J(this.FD
,-2);this.J(this.D9,-2);this.J(this.Dg,-2);this.J(this.CI,-2);this.J(this.Cc,-2);
this.MY.C_=[this,this.Gd];this.MX.C_=[this,this.Gd];this.ED.C_=[this,this.Gd];this.
FD.C_=[this,this.Gd];this.D9.C_=[this,this.Gd];this.Dg.C_=[this,this.Gd];this.CI.
C_=[this,this.Gd];this.Cc.C_=[this,this.Gd];},_Done:function(){this.__proto__=C.
KC;this.MY._Done();this.MX._Done();this.ED._Done();this.FD._Done();this.D9._Done(
);this.Dg._Done();this.CI._Done();this.Cc._Done();C.KC._Done.call(this);},_ReInit:
function(){C.KC._ReInit.call(this);this.MY._ReInit();this.MX._ReInit();this.ED._ReInit(
);this.FD._ReInit();this.D9._ReInit();this.Dg._ReInit();this.CI._ReInit();this.Cc.
_ReInit();},_Mark:function(D){var B;C.KC._Mark.call(this,D);if((B=this.MY)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.MX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
ED)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FD)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.D9)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Dg)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Cc)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::InputNumber10"};C.APe={Gh:0,C2:null,AX:null
,EM:null,CountryToString:null,Kw:0,Ls:false,Init:function(aArg){A.za([this,this.
Ts],[this,this.Ro,this.KG],0);},Ah:function(Ae){C.D4.Ah.call(this,Ae);this.AX.Ff(
this.K3);this.EM.CU(this.K3);},DD:function(H){var F;if(!this.N)return;switch(this.
A3){case 0:break;case 1:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N
,F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.
N,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(
F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd(
this.CountryToString.Cb(this.Kw));(F=this.N,F[1].call(F[0])).Cm=null;}break;default:{(
F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(
F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(null);(
F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,
F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd(A.jm);(F=this.N,F[1].call(
F[0])).Cm=null;}}},Ed:function(EI){var YO=this.A3;if(EI<0)EI=0;else if(EI>this.QA
)EI=this.QA;switch(EI){case 0:{this.A8(null);if(!this.Gh)this.KG(0);}break;case 1:
this.A8(this.EM);break;case 2:{this.A8(this.AX);if(!this.Gh||(YO>0))this.AX.RB(2
);else this.AX.RB(7);}break;default:throw new Error(Aqi+EI.toFixed());}this.A3=EI;
C.D4.Ed.call(this,EI);},Bu:function(E){if(this.AI===E)return;this.AI=E;this.Ls=true;
this.Rp(A._GetAutoObject(A.Device.Helper).Ue(E,0,12));this.KG(A._GetAutoObject(A.
Device.Converter).AfW(E));this.Ls=false;if(!!this.AI)this.AX.JO(12);else this.AX.
JO(0);this.Al();},GC:function(H){var F;if(!this.AI){var BR=this.AI;this.Bu(A._GetAutoObject(
A.Device.Helper).Azs());if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AI));A.aat(this.Q,0);}}this.Ed(this.QA);},AhC:function(){return this.Gh;},AhG:function(
){return 999999999999;},KG:function(E){if(this.Kw===E)return;this.Kw=E;if(this.Ls===
false)A.ow([this,this.TO],this);A.aat([this,this.Ro,this.KG],0);},Rp:function(E){
if(this.Gh===E)return;this.Gh=E;if(this.Ls===false)A.ow([this,this.TO],this);A.aat([
this,this.Z3,this.Rp],0);},TO:function(H){var F;var aString=A.aaq(A._GetAutoObject(
A.Device.Converter).ArT(this.Kw),3,10)+A.aar(this.Gh,12,10);var BR=this.AI;this.
Bu(A.aa2(aString,0,10));if(this.AI!==BR){if(!!this.Q)(F=this.Q,F[2].call(F[0],this.
AI));A.aat(this.Q,0);}},Ro:function(){return this.Kw;},Z3:function(){return this.
Gh;},_Init:function(aArg){C.D4._Init.call(this,aArg);C.C2._Init.call(this.C2={I:
this},0);C.AAa._Init.call(this.AX={I:this},0);C.ApO._Init.call(this.EM={I:this},
0);A.Device.CountryToString._Init.call(this.CountryToString={I:this},0);this.__proto__=
C.APe;var B;this.QA=2;this.AX.G(Bmp);this.EM.G(A6b);this.J(this.AX,0);this.J(this.
EM,0);this.C2.ABe([this,this.Ro,this.KG]);this.AX.AD([this,this.Z3,this.Rp]);this.
EM.Dk(this.C2);this.EM.AD([B=this.C2,B.CA,B.CC]);this.Init(aArg);},_Done:function(
){this.__proto__=C.D4;this.C2._Done();this.AX._Done();this.EM._Done();this.CountryToString.
_Done();C.D4._Done.call(this);},_ReInit:function(){C.D4._ReInit.call(this);this.
C2._ReInit();this.AX._ReInit();this.EM._ReInit();this.CountryToString._ReInit();
},_Mark:function(D){var B;C.D4._Mark.call(this,D);if((B=this.C2)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EM)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.CountryToString)._cycle!=D)B._Mark(B._cycle=D);
},_className:"Application::PremisesIDInternational"};C.NewMenu={EB:null,Ac:null,
AE:null,Wp:null,Wq:null,Wo:null,Wn:null,DW:function(H){var B;C.Aw.DW.call(this,H
);if(!!this.A6&&((this.A6.S&0x400)===0x400))this.Ac.IB(this.A6,true,null,null);}
,CF:function(H){C.Aw.CF.call(this,H);A._GetAutoObject(A.Device.Device).Aq.Bo(null
);A._GetAutoObject(A.Device.Device).Bt.Bo(null);A._GetAutoObject(A.Device.Helper
).AiC();A._GetAutoObject(A.Device.Helper).Apu();},H5:function(H){var Cg=(C.E3.isPrototypeOf(
H)?H:null);if(!Cg)return;if(Cg===this.Wp)A._GetAutoObject(C.A1).BY(27);else if(Cg===
this.Wq)A._GetAutoObject(C.A1).BY(26);else if(Cg===this.Wo)A._GetAutoObject(C.A1
).BY(62);else if(Cg===this.Wn)A._GetAutoObject(C.A1).BY(89);},AXM:function(H){A.
_GetAutoObject(C.A1).Fm();},FZ:function(H){var B;this.AE.N2((B=this.Ac.Dh(0x1))[
3]-B[1]);this.AE.N6((B=this.Ac.M)[3]-B[1]);this.AE.N4(-this.Ac.Br[1]);},Iv:function(
H){A.ow([this,this.FZ],this);},_Init:function(aArg){C.Aw._Init.call(this,aArg);A.
abh.AH._Init.call(this.EB={I:this},0);A.Core.Ac._Init.call(this.Ac={I:this},0);C.
AE._Init.call(this.AE={I:this},0);C.E3._Init.call(this.Wp={I:this},0);C.E3._Init.
call(this.Wq={I:this},0);C.E3._Init.call(this.Wo={I:this},0);C.E3._Init.call(this.
Wn={I:this},0);this.__proto__=C.NewMenu;this.Background.L(A.iF.CR);this.N.W(true
);this.N.Cd(A.jm);this.D$.An(false);this.Dw(C.Ast);this.EB.AW(0x3F);this.EB.G(FN
);this.EB.L(A.iF.CE);this.Ac.G(FN);this.Ac.Lf(9);this.AE.G(JV);this.Wp.G(Nr);this.
Wp.Aj(true);this.Wp.U(A.z2(A.abg.A1W));this.Wq.G(AUH);this.Wq.Aj(true);this.Wq.U(
A.z2(A.abg.NewAnimals));this.Wo.G(Og);this.Wo.Aj(true);this.Wo.U(A.z2(A.abg.Calving
));this.Wn.G(ME);this.Wn.Aj(true);this.Wn.U(A.z2(A.abg.AnimalLoss));this.J(this.
EB,0);this.J(this.Ac,0);this.J(this.AE,0);this.J(this.Wp,0);this.J(this.Wq,0);this.
J(this.Wo,0);this.J(this.Wn,0);this.N.CB=[this,this.AXM];this.N.C$(A.zW(A.abi.ET
));this.Ac.Eu=[this,this.Iv];this.Wp.AV=[this,this.H5];this.Wp.DB(A.zW(A.abi.Az8
));this.Wq.AV=[this,this.H5];this.Wq.DB(A.zW(A.abi.AsH));this.Wo.AV=[this,this.H5
];this.Wo.DB(A.zW(A.abi.ALH));this.Wn.AV=[this,this.H5];this.Wn.DB(A.zW(A.abi.ALy
));},_Done:function(){this.__proto__=C.Aw;this.EB._Done();this.Ac._Done();this.AE.
_Done();this.Wp._Done();this.Wq._Done();this.Wo._Done();this.Wn._Done();C.Aw._Done.
call(this);},_ReInit:function(){C.Aw._ReInit.call(this);this.EB._ReInit();this.Ac.
_ReInit();this.AE._ReInit();this.Wp._ReInit();this.Wq._ReInit();this.Wo._ReInit(
);this.Wn._ReInit();this.Wp.U(A.z2(A.abg.A1W));this.Wq.U(A.z2(A.abg.NewAnimals));
this.Wo.U(A.z2(A.abg.Calving));this.Wn.U(A.z2(A.abg.AnimalLoss));},_Mark:function(
D){var B;C.Aw._Mark.call(this,D);if((B=this.EB)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ac)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AE)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Wp)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wq)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.Wo)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Wn)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::NewMenu"};C.ANs={Ko:null,EaseOfDelivery:
null,BirthType:null,AaI:null,LT:null,D2:null,GE:null,K$:null,Awr:true,Init:function(
aArg){this.A8(this.GX);A.ow([this,this.Ix],this);},EY:function(H){var B;A._GetAutoObject(
A.Device.Helper).V.G1();A._GetAutoObject(C.A1).Fm();if(!!this.Ko)this.Ko.EY(this
);},Aee:function(H){var B;var F;A._GetAutoObject(A.Device.Helper).V.DS((F=this.Dj.
Q,F[1].call(F[0])));A._GetAutoObject(A.Device.Helper).V.AtC(true);if(!!this.Ko)this.
Ko.Aee(this);if(A._GetAutoObject(A.Device.Device).Aq.Ms())A._GetAutoObject(A.Device.
Helper).AWN(A._GetAutoObject(A.Device.Helper).V,5,5,0,[this,this.Aw5]);else{this.
Anu();A.ow([this,this.Anv],this);}},Ark:function(){this.N.Cd(A.jm);this.N.De(A.zW(
A.abi.Az$));this.N.Cm=[this,this.Avz];},CF:function(H){var B;C.Hp.CF.call(this,H
);if(A._GetAutoObject(A.Device.Device).Aq.Ms()){A._GetAutoObject(A.Device.Device
).A_(41,true,A._GetAutoObject(A.Device.Device).Aq.If().toFixed(),0,null);this.EY(
this);}else if(this.Awr){this.Awr=false;A.ow([this,this.AXY],this);}else if(!this.
Ko){this.Ko=A._NewObject(C.ANt,0);this.Ko.A3D([this,this.Axu]);A._GetAutoObject(
A.Device.Helper).V.GG();A._GetAutoObject(A.Device.Helper).Aye(A._GetAutoObject(A.
Device.Helper).V);A._GetAutoObject(A.Device.Helper).V.Aah(this.ApZ.Aca(6));this.
Ko.Lw(this);if(!A._GetAutoObject(A.Device.Helper).V.NaisIdMother)this.EY(this);}
},Anu:function(){A._GetAutoObject(A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.
Device).Aq);var Ol=A._GetAutoObject(A.Device.Device).Aq.LM(0,A._GetAutoObject(A.
Device.Helper).V.Id);A._GetAutoObject(A.Device.Device).UZ(Ol);if(A._GetAutoObject(
A.Device.Helper).AkV()){if(A._GetAutoObject(A.Device.Device).Bt.Ms())A._GetAutoObject(
A.Device.Device).A_(50,true,A._GetAutoObject(A.Device.Device).Bt.If().toFixed(),
0,null);else{var Ca=A._NewObject(A.Device.Rating,0);Ca.GG();Ca.OnSetAnimalId(A._GetAutoObject(
A.Device.Helper).V.Id);Ca.OnSetBodyWeight(this.PB);Ca.OnSetTimestamp(A._GetAutoObject(
A.Device.Helper).V.DateOfBirth);Ca.Cs(A._GetAutoObject(A.Device.Device).Bt);}}A.
_GetAutoObject(A.Device.Helper).A08(A._GetAutoObject(A.Device.Helper).V.DateOfBirth
,true);},Anv:function(H){var B;if(!!this.Ko)this.Ko.Anv(this);},Ix:function(H){if(
A._GetAutoObject(A.Device.Helper).AkV())this.EG.W(true);else this.EG.W(false);},
Aw5:function(H){var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!Ar)return;
switch(Ar.Id){case 41:break;default:A.aa8("%s%e",Avd,Ar.Id);}},Axu:function(H){this.
Lw(this);this.Atj(A._GetAutoObject(A.Device.Helper).AhE(A._GetAutoObject(A.Device.
Helper).V.AnimalType));this.Px(this.GX);},Am_:function(H){var F;C.Hp.Am_.call(this
,H);(F=this.EG.Q,F[2].call(F[0],this.EG.AlI));},AXY:function(H){A._GetAutoObject(
C.A1).BY(90);},_Init:function(aArg){C.Hp._Init.call(this,aArg);C.EaseOfDelivery.
_Init.call(this.EaseOfDelivery={I:this},0);C.BirthType._Init.call(this.BirthType={
I:this},0);C.AaI._Init.call(this.AaI={I:this},0);C.AfM._Init.call(this.LT={I:this
},0);C.AlH._Init.call(this.D2={I:this},0);C.B$._Init.call(this.GE={I:this},0);C.
B$._Init.call(this.K$={I:this},0);this.__proto__=C.ANs;var B;this.Dw(C.AK7);this.
LT.G(Af2);this.LT.Aj(true);this.LT.U(A.z2(A.abg.AZ5));this.FF.G(Yn);this.D2.G(Yn
);this.D2.Aj(true);this.D2.U(A.z2(A.abg.AnW));this.D2.AOJ(true);this.GE.G(Yn);this.
GE.Aj(true);this.GE.U(A.z2(A.abg.AsY));this.K$.G(Yn);this.K$.Aj(true);this.K$.U(
A.z2(A.abg.Akr));this.J(this.LT,-4);this.J(this.D2,-2);this.J(this.GE,0);this.J(
this.K$,0);this.EaseOfDelivery.N1(A._GetAutoObject(A.Device.Helper).V);this.BirthType.
N1(A._GetAutoObject(A.Device.Helper).V);this.AaI.N1(A._GetAutoObject(A.Device.Helper
).V);this.LT.He([this,this.Es,this.HW]);this.LT.AD([B=A._GetAutoObject(A.Device.
Helper).V,B.AN2,B.Alq]);this.D2.He([this,this.Es,this.HW]);this.D2.Nc([B=this.D2
,B.GC]);this.D2.Nd(A.zW(A.abi.Edit));this.D2.Ac2([B=A._GetAutoObject(A.Device.Helper
).V,B.AAP,B.AcV]);this.M$.AD([B=this.AaI,B.CA,B.CC]);this.M$.Dk(this.AaI);this.GE.
AD([B=this.BirthType,B.CA,B.CC]);this.GE.Dk(this.BirthType);this.K$.AD([B=this.EaseOfDelivery
,B.CA,B.CC]);this.K$.Dk(this.EaseOfDelivery);this.Init(aArg);},_Done:function(){
this.__proto__=C.Hp;this.EaseOfDelivery._Done();this.BirthType._Done();this.AaI.
_Done();this.LT._Done();this.D2._Done();this.GE._Done();this.K$._Done();C.Hp._Done.
call(this);},_ReInit:function(){C.Hp._ReInit.call(this);this.EaseOfDelivery._ReInit(
);this.BirthType._ReInit();this.AaI._ReInit();this.LT._ReInit();this.D2._ReInit(
);this.GE._ReInit();this.K$._ReInit();},_Mark:function(D){var B;C.Hp._Mark.call(
this,D);if((B=this.Ko)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.EaseOfDelivery
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.BirthType)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.AaI)._cycle!=D)B._Mark(B._cycle=D);if((B=this.LT)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.D2)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GE)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.K$)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::NewAnimalLossDataScreen"};C.AIl={Init:function(aArg){var B;A.za([this
,this.A$L],[B=A._GetAutoObject(A.Device.Device),B.AAV,B.AET],0);A.ow([this,this.
A$L],this);},AGT:function(){var Bb=null;switch(A._GetAutoObject(A.Device.Device).
Z0){case 0:Bb=A._GetAutoObject(A.Device.Helper).Azl();break;case 1:Bb=A._GetAutoObject(
A.Device.Helper).AKs();break;case 2:Bb=A._GetAutoObject(A.Device.Helper).LP();break;
default:throw new Error(AUI+A._GetAutoObject(A.Device.Device).Z0.toFixed());}A._GetAutoObject(
A.Device.Device).Aq.Bo(Bb);},A$L:function(H){switch(A._GetAutoObject(A.Device.Device
).Z0){case 0:this.Et(A.z2(A.abg.A15));break;case 1:this.Et(A.z2(A.abg.Bdp));break;
case 2:this.Et(A.z2(A.abg.ANx));break;default:A.aa8("%s",AUI+A._GetAutoObject(A.
Device.Device).Z0.toFixed());}},_Init:function(aArg){C.Akn._Init.call(this,aArg);
this.__proto__=C.AIl;this.Bgp(C.ALk);this.D$.Z9(A._NewObject(C.ALa,0));this.Init(
aArg);},_className:"Application::AnimalSearchDriedOffOverlay"};C.ANt={AwW:0,Agu:
null,ArW:null,A9r:0,AX$:0,AXe:0,Init:function(aArg){this.A9r=A._GetAutoObject(A.
Device.Helper).V.Id;this.Agu=A._GetAutoObject(A.Device.Device).Aq.Filter;this.AwW=
A._GetAutoObject(A.Device.Helper).V.NaisId;this.AXe=A._GetAutoObject(A.Device.Helper
).V.AnimalType;},Lw:function(H){A._GetAutoObject(A.Device.Helper).V.Alq(this.AwW
);A._GetAutoObject(A.Device.Helper).V.Alm(true);switch(this.AXe){case 0:case 1:A.
_GetAutoObject(A.Device.Helper).V.DS(0);break;case 2:A._GetAutoObject(A.Device.Helper
).V.DS(2);break;default:A.aa8("%s%e",AUs,this.AXe);}},EY:function(H){A._GetAutoObject(
A.Device.Device).Aq.Bo(this.Agu);if(!!this.AX$)this.A$N();},Aee:function(H){A._GetAutoObject(
A.Device.Device).Aq.Bo(null);},A$N:function(){var AqY=A._NewObject(A.Device.Animal
,0);var Z=A._GetAutoObject(A.Device.Device).Aq.LM(0,this.A9r);AqY.Fq(Z,A._GetAutoObject(
A.Device.Device).Aq);AqY.Atp(A._GetAutoObject(A.Device.Helper).V.DateOfBirth);AqY.
Ao6(false);AqY.AtD(AqY.LactationNumber+1);AqY.Cs(A._GetAutoObject(A.Device.Device
).Aq);},Anv:function(H){this.AX$++;var Bq4=A._GetAutoObject(A.Device.Converter).
Baz(A._GetAutoObject(A.Device.Helper).V.BirthType);if((this.AX$<Bq4)&&(A._GetAutoObject(
A.Device.Helper).AhU(A._GetAutoObject(A.Device.Helper).V.WhereAbouts)===false))A.
_GetAutoObject(A.Device.Device).A_(59,true,A.jm,0,[this,this.TJ]);else this.A8t(
this);},TJ:function(H){var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(
!!Ar&&(Ar.PopupState===8))this.A8t(this);else if(!!Ar&&(Ar.PopupState===7))this.
Axu(this);},Axu:function(H){var B;var HH=A._GetAutoObject(A.Device.Helper).V.AnimalType;
var Ad2=A._GetAutoObject(A.Device.Helper).V.BirthType;var Bn=A._GetAutoObject(A.
Device.Helper).V.Breed;var Yz=A._GetAutoObject(A.Device.Helper).V.DateOfBirth;var
AF3=A._GetAutoObject(A.Device.Helper).V.EaseOfDelivery;if(!!this.ArW)(B=this.ArW
)?B[1].call(B[0],this):null;A._GetAutoObject(A.Device.Helper).V.DS(HH);A._GetAutoObject(
A.Device.Helper).V.Aih(Ad2);A._GetAutoObject(A.Device.Helper).V.O2(Bn);A._GetAutoObject(
A.Device.Helper).V.AcV(Yz);A._GetAutoObject(A.Device.Helper).V.Aij(AF3);},A8t:function(
H){this.A$N();A._GetAutoObject(C.A1).Fm();A._GetAutoObject(A.Device.Device).Aq.Bo(
this.Agu);},A3D:function(E){if(A.z$(this.ArW,E))return;this.ArW=E;},_Init:function(
aArg){this.__proto__=C.ANt;this.Init(aArg);A.hJ++;},_Done:function(){this.__proto__=
null;A.hJ--;},_ReInit:function(){},_Mark:function(D){var B;if((B=this.Agu)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.ArW)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=
D);if((B=this.I)&&(B._cycle!=D))B._Mark(B._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Application::NewAnimalMotherHelper"};C.AIC={Init:function(aArg){
var B;A.za([this,this.A9P],[B=A._GetAutoObject(A.Device.Device),B.ANN,B.AUJ],0);
this.A9P(this);},Cs:function(){A.aa8("%s",Bmq);},Fq:function(AaR){C.AbI.Fq.call(
this,AaR);var P;for(P=16;P>0;P--)this.Ir.Set(P,this.Ir.Get(P-1));this.Ir.Set(0,0
);if(this.DZ<17)this.DZ++;else A.aa8("%s",Bmr);},A9P:function(H){this.Fq(A._GetAutoObject(
A.Device.Device).ArD);A.vv(this,0);},A1s:function(Jt){switch(Jt){case 2048:return false;
default:return true;}},_Init:function(aArg){C.AbI._Init.call(this,aArg);this.__proto__=
C.AIC;this.Init(aArg);},_className:"Application::AutoActionsSelectableClass"};C.
Ayq={_Init:function(){C.AIC._Init.call(this,0);},_variants:function(){return this;
},_this:null};C.Je={DK:null,T:null,A1P:true,U:function(E){C.Iy.U.call(this,E);this.
T.R(E);},CZ:function(E){C.Iy.CZ.call(this,E);this.T.L(E);},Bgr:function(E){if(this.
A1P===E)return;this.A1P=E;this.DK.W(E);},_Init:function(aArg){C.Iy._Init.call(this
,aArg);A.abh.DK._Init.call(this.DK={I:this},0);C.CG._Init.call(this.T={I:this},0
);this.__proto__=C.Je;this.DK.DL(Bms);this.DK.D5(Bmt);this.DK.L(A.iF.A7);this.T.
AW(0x3F);this.T.G(Bmu);this.T.A0(0x11);this.T.L(A.iF.Text);this.J(this.DK,0);this.
J(this.T,0);this.T.Y(A.zW(A.eV.OK));this.T.By(A.zW(A.eV.K7));this.T.C5(A.zW(A.eV.
Cr));},_Done:function(){this.__proto__=C.Iy;this.DK._Done();this.T._Done();C.Iy.
_Done.call(this);},_ReInit:function(){C.Iy._ReInit.call(this);this.DK._ReInit();
this.T._ReInit();},_Mark:function(D){var B;C.Iy._Mark.call(this,D);if((B=this.DK
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.T)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::AnimalInfoTableItem"};C.ALa={AeY:null,Zu:null,EU:null,EN:null,CY:null
,Init:function(aArg){var B;A.za([this,this.AYG],[B=A._GetAutoObject(A.Device.Device
),B.AAV,B.AET],0);A.ow([this,this.AYG],this);},CZ:function(E){C.WN.CZ.call(this,
E);this.CY.L(E);},A3l:function(H){A.ow([this,this.AYG],this);},AYa:function(H){var
B;var F;var Filter;var FilterCriterion;if(!!this.Q){Filter=(F=this.Q,F[1].call(F[
0])).F$();FilterCriterion=(A.Device.Int32FilterCriterion.isPrototypeOf(B=Filter.
DJ(1,4))?B:null);if(!!FilterCriterion)Filter.P7(FilterCriterion);A._GetAutoObject(
A.Device.Device).Aq.Bo(Filter);}},C1:function(H){var B;var F;C.WN.C1.call(this,H
);if(!(F=this.Q,F[1].call(F[0]))){this.CY.At(A.zW(A.abi.AhK));return;}var BrG=(A.
Device.BoolFilterCriterion.isPrototypeOf(B=(F=this.Q,F[1].call(F[0])).DJ(38,0))?
B:null);var AvD=(A.Device.AnimalTypeFilterCriterion.isPrototypeOf(B=(F=this.Q,F[
1].call(F[0])).DJ(14,0))?B:null);if(!!BrG)this.CY.At(A.zW(A.abi.Azy));else if(!!
AvD&&(AvD.AY===1))this.CY.At(A.zW(A.abi.ALJ));else this.CY.At(A.zW(A.abi.AhK));}
,AYG:function(H){var F;var Filter=null;var AKe;switch(A._GetAutoObject(A.Device.
Device).Z0){case 0:Filter=A._GetAutoObject(A.Device.Helper).Azl();break;case 1:Filter=
A._GetAutoObject(A.Device.Helper).AKs();break;case 2:Filter=A._GetAutoObject(A.Device.
Helper).LP();break;default:throw new Error(AUI+A._GetAutoObject(A.Device.Device).
Z0.toFixed());}var AxD=this.Afo();if(AxD>0){AKe=A._NewObject(A.Device.Int32FilterCriterion
,0);AKe.Initialize(1,4,AxD,false);Filter.CQ(AKe);}if(!!this.Q)(F=this.Q,F[2].call(
F[0],Filter));this.AX.Aii(false);},NJ:function(H){if(!this.Afo())this.AX.Aii(true
);this.A8(this.AX);this.Al();},Me:function(H){this.AX.Aii(false);this.A8(this.AeY
);this.Al();},_Init:function(aArg){C.WN._Init.call(this,aArg);C.Aon._Init.call(this.
AeY={I:this},0);C.Zu._Init.call(this.Zu={I:this},0);A.Core.B1._Init.call(this.EU={
I:this},0);A.Core.B1._Init.call(this.EN={I:this},0);A.abh.Am._Init.call(this.CY={
I:this},0);this.__proto__=C.ALa;var B;this.G(Bmv);this.CN.G(Bmw);this.CN.W(false
);this.AX.G(Bmx);this.AeY.G(Bmy);this.Zu.AD(A._GetAutoObject(A.Device.Device).Z0
);this.EU.Filter=6;this.EN.Filter=7;this.CY.G(Bmz);this.J(this.AeY,0);this.J(this.
CY,0);this.AeY.Dk(this.Zu);this.AeY.AD([B=this.Zu,B.CA,B.CC]);this.EU.B2=[this,this.
NJ];this.EN.B2=[this,this.Me];this.CY.At(A.zW(A.abi.AhK));this.Init(aArg);},_Done:
function(){this.__proto__=C.WN;this.AeY._Done();this.Zu._Done();this.EU._Done();
this.EN._Done();this.CY._Done();C.WN._Done.call(this);},_ReInit:function(){C.WN.
_ReInit.call(this);this.AeY._ReInit();this.Zu._ReInit();this.EU._ReInit();this.EN.
_ReInit();this.CY._ReInit();},_Mark:function(D){var B;C.WN._Mark.call(this,D);if((
B=this.AeY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Zu)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.EU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.CY)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderSearchAnimalDriedOff"
};C.Zu={AcM:null,Init:function(aArg){var B;A.za([this,this.A9t],[B=A._GetAutoObject(
A.Device.Device),B.AAV,B.AET],0);A.ow([this,this.A9t],this);},Dx:function(){return 3;
},AD:function(E){C.Dm.AD.call(this,E);A._GetAutoObject(A.Device.Device).AtI(E);}
,Azk:function(aIndex){if((aIndex<0)||(aIndex>=this.Dx()))return null;return this.
AcM.ApP(aIndex);},Azm:function(aIndex){if((aIndex<0)||(aIndex>=this.Dx()))return-
1;return this.AcM.ApQ(aIndex);},A9t:function(H){this.Q=A._GetAutoObject(A.Device.
Device).Z0;A.aat([this,this.CA,this.CC],0);},_Init:function(aArg){C.Dm._Init.call(
this,aArg);A.Device.AcM._Init.call(this.AcM={I:this},0);this.__proto__=C.Zu;this.
Cj.Set(0,0);this.Cj.Set(1,1);this.Cj.Set(2,2);this.Init(aArg);},_Done:function(){
this.__proto__=C.Dm;this.AcM._Done();C.Dm._Done.call(this);},_ReInit:function(){
C.Dm._ReInit.call(this);this.AcM._ReInit();},_Mark:function(D){var B;C.Dm._Mark.
call(this,D);if((B=this.AcM)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterDriedOffSelection"
};C.ALk={Ek:null,Ij:null,_Init:function(aArg){C.Eg._Init.call(this,aArg);C.CG._Init.
call(this.Ek={I:this},0);A.abh.Text._Init.call(this.Ij={I:this},0);this.__proto__=
C.ALk;this.G(Ns);this.Background.G(Ns);this.Ek.G(AEB);this.Ek.R(A.z2(A.abg.A1b));
this.Ek.A0(0x12);this.Ek.L(A.iF.Text);this.Ij.AW(0x3F);this.Ij.G(Ai6);this.Ij.HV(
5);this.Ij.A0(0x14);this.Ij.R(A.z2(A.abg.ACZ));this.Ij.L(A.iF.Text);this.J(this.
Ek,0);this.J(this.Ij,0);this.Ek.Y(A.zW(A.eV.Au));this.Ek.By(A.zW(A.eV.K7));this.
Ek.C5(A.zW(A.eV.Cr));this.Ij.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=
C.Eg;this.Ek._Done();this.Ij._Done();C.Eg._Done.call(this);},_ReInit:function(){
C.Eg._ReInit.call(this);this.Ek._ReInit();this.Ij._ReInit();this.Ek.R(A.z2(A.abg.
A1b));this.Ij.R(A.z2(A.abg.ACZ));this.Ek.Y(A.zW(A.eV.Au));this.Ek.By(A.zW(A.eV.K7
));this.Ek.C5(A.zW(A.eV.Cr));this.Ij.Y(A.zW(A.eV.Au));},_Mark:function(D){var B;
C.Eg._Mark.call(this,D);if((B=this.Ek)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Ij)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineMotherSelectSmall"
};C.MotherScanScreen={Jr:null,A$p:function(){if(A._GetAutoObject(A.Device.Helper
).V.NaisId>0)this.A9$(this);else A._GetAutoObject(A.Device.Device).A_(63,true,A.
jm,0,[this,this.TJ]);},A9$:function(H){A._GetAutoObject(C.A1).Fm();},TJ:function(
H){var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if((!!Ar&&(Ar.Id===63)
)&&(Ar.PopupState===7))this.A9$(this);},_Init:function(aArg){C.LA._Init.call(this
,aArg);A.abh.Text._Init.call(this.Jr={I:this},0);this.__proto__=C.MotherScanScreen;
this.Dw(C.AK$);this.IL.G(BmA);this.IL.Ais(2);this.Aav.W(false);this.ANc=12;this.
Number.G(BmB);this.Number.R(A.z2(A.abg.A4V));this.AZd=false;this.Jr.G(BmC);this.
Jr.HV(5);this.Jr.KH(true);this.Jr.R(((A.z2(A.abg.Ok)+A.z2(A.abg.Colon))+Cw)+A.z2(
A.abg.Ayc));this.Jr.L(A.iF.Text);this.Lh(this.IL,-1);this.Lh(this.Io,-1);this.Lh(
this.Aav,-1);this.J(this.Jr,0);this.Jr.Y(A.zW(A.eV.Au));},_Done:function(){this.
__proto__=C.LA;this.Jr._Done();C.LA._Done.call(this);},_ReInit:function(){C.LA._ReInit.
call(this);this.Jr._ReInit();this.Number.R(A.z2(A.abg.A4V));this.Jr.R(((A.z2(A.abg.
Ok)+A.z2(A.abg.Colon))+Cw)+A.z2(A.abg.Ayc));this.Jr.Y(A.zW(A.eV.Au));},_Mark:function(
D){var B;C.LA._Mark.call(this,D);if((B=this.Jr)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::MotherScanScreen"};C.AK$={_Init:function(aArg){C.Aoc._Init.
call(this,aArg);this.__proto__=C.AK$;this.CN.DS(1);},_className:"Application::HeaderScannedCowId"
};C.IL={ZS:null,ZR:null,ZQ:null,Q3:null,ApS:0,Ais:function(E){if(this.ApS===E)return;
this.ApS=E;var bitmap=null;var AWp=BmD;var AWo=null;var AWq=false;switch(E){case
0:bitmap=A.zW(A.abi.Aok);break;case 1:{bitmap=A.zW(A.abi.AMj);AWp=BmE;AWo=A.zW(A.
eV.Az);AWq=true;}break;case 2:{bitmap=A.zW(A.abi.AMk);AWp=BmF;AWo=A.zW(A.eV.Cr);
AWq=true;}break;default:throw new Error(BmG+E.toFixed());}this.ZQ.At(bitmap);this.
ZR.At(bitmap);this.ZS.At(bitmap);this.Q3.G(A.aaM(this.Q3.M,AWp));this.Q3.Y(AWo);
this.Q3.W(AWq);this.G(A.aaN(this.M,bitmap.FrameSize));},_Init:function(aArg){A.Core.
O._Init.call(this,aArg);A.abh.Am._Init.call(this.ZS={I:this},0);A.abh.Am._Init.call(
this.ZR={I:this},0);A.abh.Am._Init.call(this.ZQ={I:this},0);A.abh.Text._Init.call(
this.Q3={I:this},0);this.__proto__=C.IL;this.G(AEN);this.ZS.AW(0x3);this.ZS.G(AEN
);this.ZS.L(A.iF.HB);this.ZS.Ce(2);this.ZR.AW(0x3);this.ZR.G(AEN);this.ZR.L(A.iF.
AeO);this.ZR.Ce(1);this.ZQ.AW(0x3);this.ZQ.G(AEN);this.ZQ.L(A.iF.Text);this.ZQ.Ce(
0);this.Q3.AW(0x14);this.Q3.G(BmH);this.Q3.R(A._NewObject(A.Device.LanguageToString
,0).KN(A._GetAutoObject(A.Device.Device).Language)+BmI);this.Q3.L(0xFF020202);this.
Q3.W(false);this.J(this.ZS,0);this.J(this.ZR,0);this.J(this.ZQ,0);this.J(this.Q3
,0);this.ZS.At(A.zW(A.abi.Aok));this.ZR.At(A.zW(A.abi.Aok));this.ZQ.At(A.zW(A.abi.
Aok));this.Q3.Y(A.zW(A.eV.Az));},_Done:function(){this.__proto__=A.Core.O;this.ZS.
_Done();this.ZR._Done();this.ZQ._Done();this.Q3._Done();A.Core.O._Done.call(this
);},_ReInit:function(){A.Core.O._ReInit.call(this);this.ZS._ReInit();this.ZR._ReInit(
);this.ZQ._ReInit();this.Q3._ReInit();},_Mark:function(D){var B;A.Core.O._Mark.call(
this,D);if((B=this.ZS)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZR)._cycle!=D)B.
_Mark(B._cycle=D);if((B=this.ZQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Q3)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::TransponderImage"};C.ApS={Transponder:
0,Byd:1,Bye:2};C.AK7={Am:null,CZ:function(E){C.BW.CZ.call(this,E);this.Am.L(E);}
,_Init:function(aArg){C.BW._Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:
this},0);this.__proto__=C.AK7;this.Am.G(AUt);this.J(this.Am,0);this.Am.At(A.zW(A.
abi.AKZ));},_Done:function(){this.__proto__=C.BW;this.Am._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.Am._ReInit();},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::HeaderNewAnimalLoss"};C.SetSaveNaisIdScreen={Jc:0,YL:4,
AjW:function(H){C.S6.AjW.call(this,H);if(A._GetAutoObject(A.Device.Helper).A84()
){this.Jc=A._GetAutoObject(A.Device.Helper).S7.Id;var Agr=A._GetAutoObject(A.Device.
Helper).AMN(this.Jc);if(Agr){A._GetAutoObject(A.Device.Device).A_(21,true,A._GetAutoObject(
A.Device.Converter).Vc(this.Jc),0,[this,this.TJ]);return;}Agr=A._GetAutoObject(A.
Device.Helper).AMP(this.Jc);if(Agr&&(A._GetAutoObject(A.Device.Helper).V.TransponderId
!==this.Jc)){A._GetAutoObject(A.Device.Device).A_(25,true,A._GetAutoObject(A.Device.
Converter).Vc(this.Jc),0,[this,this.TJ]);return;}this.YL=A._GetAutoObject(A.Device.
Helper).AMQ(this.Jc);switch(this.YL){case 0:A._GetAutoObject(A.Device.Device).A_(
45,true,this.Jc.toFixed().length.toFixed(),0,[this,this.TJ]);break;case 1:case 2:{
var BJ=A._GetAutoObject(A.Device.Converter).Auy(this.Jc);A._GetAutoObject(A.Device.
Device).A_(46,true,BJ.toFixed(),0,[this,this.TJ]);}break;case 3:this.A$g();break;
default:throw new Error(AEp+this.YL.toFixed());}}},EY:function(H){A._GetAutoObject(
C.A1).Fm();},TJ:function(H){var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null
);if(!!Ar)switch(Ar.PopupState){case 4:if(this.YL===2)this.A$g();else A._GetAutoObject(
A.Device.Device).Adn();break;case 5:this.EY(this);break;default:;}},A$g:function(
){A._GetAutoObject(A.Device.Helper).V.O3(this.Jc);if(!A._GetAutoObject(A.Device.
Helper).V.TransponderId)A._GetAutoObject(A.Device.Helper).V.Nf(this.Jc);A._GetAutoObject(
A.Device.Helper).V.Cs(A._GetAutoObject(A.Device.Device).Aq);A._GetAutoObject(A.Device.
Device).A_(68,true,A._GetAutoObject(A.Device.Helper).V.VisualId.toFixed(),0,null
);this.EY(this);},_Init:function(aArg){C.S6._Init.call(this,aArg);this.__proto__=
C.SetSaveNaisIdScreen;this.N.W(true);this.Dw(C.Ig);this.Number.R(A.z2(A.abg.BhP)
);this.IL.G(BmJ);this.Io.G(BmK);this.Ais(1);this.N.CB=[this,this.EY];this.N.C$(A.
zW(A.abi.ET));},_className:"Application::SetSaveNaisIdScreen"};C.AJK={Lw:function(
H){C.An1.Lw.call(this,H);A.ow([this,this.Bum],this);},Bum:function(H){this.Px(this.
OV);},_Init:function(aArg){C.An1._Init.call(this,aArg);this.__proto__=C.AJK;},_className:
"Application::EditAnimalDataNaisIdScreen"};C.ApY={Animal:null,WhereAboutsToString:
null,GS:function(aIndex){return this.WhereAboutsToString.Cb(this.Dd(aIndex));},AD:
function(E){C.Dm.AD.call(this,E);if(!!this.Animal)this.Animal.Aah(E);},AYP:function(
H){if(!!this.Animal)this.Q=this.Animal.WhereAbouts;else this.Q=0;A.aat([this,this.
CA,this.CC],0);},N1:function(E){var B;if(this.Animal===E)return;if(!!this.Animal
)A.zn([this,this.AYP],[B=this.Animal,B.AOf,B.Aah],0);this.Animal=E;if(!!this.Animal
)A.za([this,this.AYP],[B=this.Animal,B.AOf,B.Aah],0);A.ow([this,this.AYP],this);
},_Init:function(aArg){C.Dm._Init.call(this,aArg);A.Device.WhereAboutsToString._Init.
call(this.WhereAboutsToString={I:this},0);this.__proto__=C.ApY;this.Cj.Set(0,1);
this.Cj.Set(1,2);this.Cj.Set(2,3);this.Cj.Set(3,4);this.Cj.Set(4,5);},_Done:function(
){this.__proto__=C.Dm;this.WhereAboutsToString._Done();C.Dm._Done.call(this);},_ReInit:
function(){C.Dm._ReInit.call(this);this.WhereAboutsToString._ReInit();},_Mark:function(
D){var B;C.Dm._Mark.call(this,D);if((B=this.Animal)&&(B._cycle!=D))B._Mark(B._cycle=
D);if((B=this.WhereAboutsToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::WhereaboutsArray"
};C.AQQ={Dx:function(){return 6;},_Init:function(aArg){C.ApY._Init.call(this,aArg
);this.__proto__=C.AQQ;this.Cj.Set(0,0);this.Cj.Set(1,1);this.Cj.Set(2,2);this.Cj.
Set(3,3);this.Cj.Set(4,4);this.Cj.Set(5,5);},_className:"Application::WhereaboutsLiving"
};C.AaI={Dx:function(){return 5;},_Init:function(aArg){C.ApY._Init.call(this,aArg
);this.__proto__=C.AaI;this.Cj.Set(0,6);this.Cj.Set(1,7);this.Cj.Set(2,8);this.Cj.
Set(3,9);this.Cj.Set(4,10);},_className:"Application::WhereaboutsLoss"};C.AbL={AnimalIdAutoGenerationMethodToString:
null,Init:function(aArg){var B;A.za([this,this.A7O],[B=A._GetAutoObject(A.Device.
Device),B.ANO,B.AUK],0);A.ow([this,this.A7O],this);},Dx:function(){return 2;},Dd:
function(aIndex){if((aIndex<0)||(aIndex>=2))return-1;return aIndex;},GS:function(
aIndex){if((aIndex<0)||(aIndex>=2))return A.jm;return this.AnimalIdAutoGenerationMethodToString.
Cb(aIndex);},DX:function(A2){return A2;},HP:function(){return 1;},AD:function(E){
C.AC.AD.call(this,E);A._GetAutoObject(A.Device.Device).Ate(E);},A7O:function(H){
this.Q=A._GetAutoObject(A.Device.Device).AeC;A.aat([this,this.CA,this.CC],0);},_Init:
function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalIdAutoGenerationMethodToString.
_Init.call(this.AnimalIdAutoGenerationMethodToString={I:this},0);this.__proto__=
C.AbL;this.Init(aArg);},_Done:function(){this.__proto__=C.AC;this.AnimalIdAutoGenerationMethodToString.
_Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(this);this.
AnimalIdAutoGenerationMethodToString._ReInit();},_Mark:function(D){var B;C.AC._Mark.
call(this,D);if((B=this.AnimalIdAutoGenerationMethodToString)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::AnimalIDAutoAssigmentMode"};C.APM={Fa:null
,Ef:null,EartagNrAssignmentMode:null,EU:null,EN:null,Ha:null,AX:null,Ji:null,Mq:
null,A3:0,AI:0,Init:function(aArg){},Ah:function(Ae){C.DY.Ah.call(this,Ae);if(this.
A3===1){if(this.GY){this.AX.Ff(A.iF.CE);this.Ha.CU(A.iF.CE);this.Background.L(A.
iF.CR);this.T.L(A.iF.Text);}else{this.AX.Ff(A.iF.CR);this.Ha.CU(A.iF.CR);this.Background.
L(A.iF.CE);this.T.L(A.iF.Text);}}else{if(this.GY){this.AX.Ff(A.iF.CE);this.Ha.CU(
A.iF.CE);}else{this.AX.Ff(A.iF.CR);this.Ha.CU(A.iF.CR);}this.A8(null);}this.Mq.L(
this.T.AM);},JE:function(H){C.DY.JE.call(this,H);if(!this.A3)this.GC(this);else this.
Gy(this);},DD:function(H){var F;if(!this.N)return;switch(this.A3){case 1:{(F=this.
N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.
N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(null);(F=this.
N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=null;(F=this.N,F[1].call(
F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd(A.jm);(F=this.N,F[1].call(F[0])).Cm=
null;}break;default:this.Fa.AiD((F=this.N,F[1].call(F[0])));}},GC:function(H){this.
Ed(1);},Gy:function(H){this.Ed(0);},Ed:function(EI){var F;if(!this.A3&&!!this.N)
this.Fa.Ahn((F=this.N,F[1].call(F[0])));this.A3=EI;if(this.A3<0)this.A3=0;else if(
this.A3>1)this.A3=1;switch(this.A3){case 0:this.A8(null);break;case 1:{this.A8(this.
AX);if(!this.AI)this.AX.RB(2);else this.AX.RB(7);}break;default:throw new Error(
Aqi+this.A3.toFixed());}this.DD(this);this.Al();},Bu:function(E){if(this.AI===E)
return;this.AI=E;},NJ:function(H){this.AxE(2);},Me:function(H){this.AxE(7);},AxE:
function(Ge){var B;var Awc=(A.Core.O.isPrototypeOf(B=this.A6)?B:null);if(!!Awc){
var AwX=(A.Core.O.isPrototypeOf(B=this.Q8(Awc,Ge,0x15))?B:null);if(!!AwX){this.A8(
AwX);return true;}}return false;},Ad8:function(H){var F;if(!this.Ef||!this.EartagNrAssignmentMode
)return;switch((F=this.EartagNrAssignmentMode,F[1].call(F[0]))){case 0:this.Mq.At(
A._GetAutoObject(A.Device.Converter).AkK(2));break;case 1:this.Mq.At(A._GetAutoObject(
A.Device.Converter).AkK((F=this.Ef,F[1].call(F[0]))));break;default:throw new Error(
A6c+(F=this.EartagNrAssignmentMode,F[1].call(F[0])).toFixed());}A.ow([this,this.
AYo],this);},AYo:function(H){var B;var F;if(!this.Ef||!this.EartagNrAssignmentMode
){this.Ji.Z_(null);return;}switch((F=this.EartagNrAssignmentMode,F[1].call(F[0])
)){case 0:{this.AX.AD([B=A._GetAutoObject(A.Device.Device),B.Ale,B.Amb]);this.Ji.
Z_([B=A._GetAutoObject(A.Device.Device),B.As6,B.Avr]);}break;case 1:switch((F=this.
Ef,F[1].call(F[0]))){case 1:{this.AX.AD([B=A._GetAutoObject(A.Device.Device),B.As7
,B.Avs]);this.Ji.Z_([B=A._GetAutoObject(A.Device.Device),B.ANT,B.AUM]);}break;case
0:{this.AX.AD([B=A._GetAutoObject(A.Device.Device),B.As8,B.Avt]);this.Ji.Z_([B=A.
_GetAutoObject(A.Device.Device),B.ANU,B.AUN]);}break;case 2:{this.AX.AD([B=A._GetAutoObject(
A.Device.Device),B.Ale,B.Amb]);this.Ji.Z_([B=A._GetAutoObject(A.Device.Device),B.
As6,B.Avr]);}break;default:throw new Error(BmL+(F=this.Ef,F[1].call(F[0])).toFixed(
));}break;default:throw new Error(A6c+(F=this.EartagNrAssignmentMode,F[1].call(F[
0])).toFixed());}},US:function(E){if(A.z_(this.Ef,E))return;if(!!this.Ef)A.zn([this
,this.Ad8],this.Ef,0);this.Ef=E;if(!!E)A.za([this,this.Ad8],this.Ef,0);if(!!E)A.
ow([this,this.Ad8],this);},Alj:function(E){if(A.z_(this.EartagNrAssignmentMode,E
))return;if(!!this.EartagNrAssignmentMode)A.zn([this,this.Ad8],this.EartagNrAssignmentMode
,0);this.EartagNrAssignmentMode=E;if(!!E)A.za([this,this.Ad8],this.EartagNrAssignmentMode
,0);if(!!E)A.ow([this,this.Ad8],this);},SW:function(){return this.AI;},_Init:function(
aArg){C.DY._Init.call(this,aArg);A.Core.B1._Init.call(this.EU={I:this},0);A.Core.
B1._Init.call(this.EN={I:this},0);C.Aon._Init.call(this.Ha={I:this},0);C.AsO._Init.
call(this.AX={I:this},0);C.Ar1._Init.call(this.Ji={I:this},0);A.abh.Am._Init.call(
this.Mq={I:this},0);this.__proto__=C.APM;var B;this.G(Yk);this.T.An(false);this.
T.R(Aqb);this.T.L(A.iF.Be);this.EU.Filter=6;this.EN.Filter=7;this.Ha.G(BmM);this.
AX.G(BmN);this.Mq.G(BmO);this.J(this.Ha,0);this.J(this.AX,0);this.J(this.Mq,0);this.
Fa=A._NewObject(C.Aci,0);this.EU.B2=[this,this.NJ];this.EN.B2=[this,this.Me];this.
Ha.Dk(this.Ji);this.Ha.AD([B=this.Ji,B.CA,B.CC]);this.AX.AD([this,this.SW,this.Bu
]);this.Init(aArg);},_Done:function(){this.__proto__=C.DY;this.EU._Done();this.EN.
_Done();this.Ha._Done();this.AX._Done();this.Ji._Done();this.Mq._Done();C.DY._Done.
call(this);},_ReInit:function(){C.DY._ReInit.call(this);this.EU._ReInit();this.EN.
_ReInit();this.Ha._ReInit();this.AX._ReInit();this.Ji._ReInit();this.Mq._ReInit(
);},_Mark:function(D){var B;C.DY._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D
))B._Mark(B._cycle=D);if((B=this.Ef)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((
B=this.EartagNrAssignmentMode)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
EU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.EN)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Ha)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AX)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.Ji)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Mq)._cycle!=D)B._Mark(
B._cycle=D);},_className:"Application::SettingsItemIDAutoGeneration"};C.AJy={UK:
null,Xr:null,ZX:null,UG:null,Init:function(aArg){this.A8(this.UK);},AAK:function(
H){var A9p=(C.Ak8.isPrototypeOf(H)?H:null);if(!!A9p)A._GetAutoObject(A.Device.Device
).A_(A9p.Abu,true,A.jm,0,null);},DW:function(H){if((this.CH.CO===7)&&(this.A6===
this.UG))A._GetAutoObject(A.Device.Device).A_(10,true,A.jm,0,null);C.GP.DW.call(
this,H);},_Init:function(aArg){C.GP._Init.call(this,aArg);C.Ak8._Init.call(this.
UK={I:this},0);C.Ak8._Init.call(this.Xr={I:this},0);C.Ak8._Init.call(this.ZX={I:
this},0);C.Ak8._Init.call(this.UG={I:this},0);this.__proto__=C.AJy;this.Dw(C.AKN
);this.UK.G(Ke);this.UK.Aj(true);this.UK.U(A.z2(A.abg.AfL));this.UK.Bk(false);this.
UK.Abu=79;this.Xr.G(RT);this.Xr.Aj(true);this.Xr.U(A.z2(A.abg.A48));this.Xr.Bk(true
);this.Xr.Abu=77;this.ZX.G(Yl);this.ZX.Aj(true);this.ZX.U(A.abg.Bci);this.ZX.Bk(
false);this.ZX.Abu=78;this.UG.G(Ai2);this.UG.Aj(true);this.UG.U(A.z2(A.abg.About
));this.UG.Bk(true);this.UG.Abu=3;this.J(this.UK,0);this.J(this.Xr,0);this.J(this.
ZX,0);this.J(this.UG,0);this.UK.AV=[this,this.AAK];this.Xr.AV=[this,this.AAK];this.
ZX.AV=[this,this.AAK];this.UG.AV=[this,this.AAK];this.Init(aArg);},_Done:function(
){this.__proto__=C.GP;this.UK._Done();this.Xr._Done();this.ZX._Done();this.UG._Done(
);C.GP._Done.call(this);},_ReInit:function(){C.GP._ReInit.call(this);this.UK._ReInit(
);this.Xr._ReInit();this.ZX._ReInit();this.UG._ReInit();this.UK.U(A.z2(A.abg.AfL
));this.Xr.U(A.z2(A.abg.A48));this.UG.U(A.z2(A.abg.About));},_Mark:function(D){var
B;C.GP._Mark.call(this,D);if((B=this.UK)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
Xr)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZX)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.UG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceInfoScreen"
};C.AKN={_Init:function(aArg){C.ON._Init.call(this,aArg);this.__proto__=C.AKN;this.
Text.R(A.abg.Info);},_className:"Application::HeaderDeviceInfoMenu"};C.AJx={AjZ:
null,Xl:null,ZY:null,ZV:null,SU:null,FactoryResetScope:null,Init:function(aArg){
this.A8(this.Xl);A.ow([this,this.DD],this);},A9Y:function(H){var B;var AwI=A._GetAutoObject(
A.Device.Device).AAf();switch(AwI){case 1:A._GetAutoObject(A.Device.Device).A_(84
,true,A.jm,0,null);break;case 0:A._GetAutoObject(A.Device.Device).A_(92,true,Ym,
0,[this,this.A_g]);break;case 2:{this.AjZ=[this,this.A9Y];A.za([this,this.AgI],[
B=A._GetAutoObject(A.Device.Device),B.AcR,B.AdO],0);A._GetAutoObject(A.Device.Device
).A_(74,true,A.jm,0,[this,this.Anc]);}break;default:throw new Error(A6d+AwI.toFixed(
));}},Anc:function(H){var B;var Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null
);if(!!Ar&&(Ar.PopupState===5)){A.zn([this,this.AgI],[B=A._GetAutoObject(A.Device.
Device),B.AcR,B.AdO],0);this.AjZ=null;}},AgI:function(H){var B;if(A._GetAutoObject(
A.Device.Device).AiT===3){A._GetAutoObject(A.Device.Device).A_(74,false,A.jm,0,[
this,this.Anc]);A.zn([this,this.AgI],[B=A._GetAutoObject(A.Device.Device),B.AcR,
B.AdO],0);if(!!this.AjZ)A.ow(this.AjZ,this);this.AjZ=null;}},A_i:function(H){var
B;var AwI=A._GetAutoObject(A.Device.Device).AAg();switch(AwI){case 1:A._GetAutoObject(
A.Device.Device).A_(84,true,A.jm,0,null);break;case 0:A._GetAutoObject(A.Device.
Device).A_(96,true,A.jm,0,[this,this.BsZ]);break;case 2:{this.AjZ=[this,this.A_i
];A.za([this,this.AgI],[B=A._GetAutoObject(A.Device.Device),B.AcR,B.AdO],0);A._GetAutoObject(
A.Device.Device).A_(74,true,A.jm,0,[this,this.Anc]);}break;case 3:A._GetAutoObject(
A.Device.Device).A_(95,true,A.jm,0,null);break;case 4:A._GetAutoObject(A.Device.
Device).A_(94,true,A.jm,0,null);break;default:throw new Error(A6d+AwI.toFixed());
}},BdC:function(H){switch(this.FactoryResetScope.Dd(this.FactoryResetScope.Q)){case
1:A._GetAutoObject(A.Device.Device).A_(33,true,A.jm,0,[this,this.A_6]);break;case
0:A._GetAutoObject(A.Device.Device).A_(7,true,A.jm,0,[this,this.A_6]);break;default:
A.aa8("%s%i",BmP,this.FactoryResetScope.Q);}},A_6:function(H){var Ar=(A.Device.PopupContext.
isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===7))switch(Ar.Id){case 7:{A._GetAutoObject(
A.Device.Device).BhE();A._GetAutoObject(A.Device.Device).A_(8,true,A.jm,0,null);
A._GetAutoObject(C.A1).BY(37);}break;case 33:{A._GetAutoObject(A.Device.Helper).
BhD();A._GetAutoObject(A.Device.Device).Ao3(0);A._GetAutoObject(A.Device.Device).
Ao4(0);A._GetAutoObject(A.Device.Device).Ao5(0);A._GetAutoObject(A.Device.Device
).Ao7(0);A._GetAutoObject(A.Device.Device).Ao8(0);A._GetAutoObject(A.Device.Device
).Ao9(0);A._GetAutoObject(A.Device.Device).SX(5);A._GetAutoObject(A.Device.Device
).Ats(0);A._GetAutoObject(A.Device.Device).Att(0);A._GetAutoObject(A.Device.Device
).Atu(0);A._GetAutoObject(A.Device.Device).AtJ(1);A._GetAutoObject(A.Device.Device
).AtK(1);A._GetAutoObject(A.Device.Device).AtL(1);A._GetAutoObject(A.Device.Device
).A_(34,true,A.jm,0,null);}break;default:A.aa8("%s%e",AEq,Ar.Id);}},A9Z:function(
H){var B;if(!A._GetAutoObject(A.Device.Device).Aq.Cf()){A._GetAutoObject(A.Device.
Device).A_(30,true,A.jm,0,null);return;}if(A._GetAutoObject(A.Device.Device).AsR(
)===false){this.AjZ=[this,this.A9Z];A.za([this,this.AgI],[B=A._GetAutoObject(A.Device.
Device),B.AcR,B.AdO],0);A._GetAutoObject(A.Device.Device).A_(74,true,A.jm,0,[this
,this.Anc]);return;}var Awp=A._GetAutoObject(A.Device.Device).Auo(1);if(Awp.AC1)
A._GetAutoObject(A.Device.Device).ArX(Awp);else A._GetAutoObject(A.Device.Device
).A_(88,true,A.jm,0,null);},A_g:function(H){var Ar=(A.Device.PopupContext.isPrototypeOf(
H)?H:null);switch(Ar.Id){case 92:if(Ar.PopupState===9)A.z3([this,this.BrD],this);
break;case 93:if(Ar.PopupState===9)A.z3([this,this.BrF],this);break;default:throw new
Error(BmQ+Ar.Id.toFixed());}},BrD:function(H){if(A._GetAutoObject(A.Device.Device
).AyP()){var AXo=A._GetAutoObject(A.Device.Device).Aq.PG();A._GetAutoObject(A.Device.
Device).A_(80,true,AXo.toFixed(),0,null);}else A._GetAutoObject(A.Device.Device).
A_(82,true,A.jm,0,null);A.z3([this,this.BsV],this);},BrF:function(H){if(A._GetAutoObject(
A.Device.Device).ACx()){var AXo=A._GetAutoObject(A.Device.Device).Aq.PG();A._GetAutoObject(
A.Device.Device).A_(81,true,AXo.toFixed(),0,null);}else A._GetAutoObject(A.Device.
Device).A_(83,true,A.jm,0,null);A.z3([this,this.Bty],this);},BsZ:function(H){var
Ar=(A.Device.PopupContext.isPrototypeOf(H)?H:null);if(!!Ar&&(Ar.PopupState===7))
A.ow([this,this.Buz],this);},Buz:function(H){A._GetAutoObject(A.Device.Device).A_(
93,true,Ym,0,[this,this.A_g]);},Bty:function(H){A._GetAutoObject(A.Device.Device
).A_(93,false,A.jm,0,null);},BsV:function(H){A._GetAutoObject(A.Device.Device).A_(
92,false,A.jm,0,null);},_Init:function(aArg){C.GP._Init.call(this,aArg);C.B_._Init.
call(this.Xl={I:this},0);C.B_._Init.call(this.ZY={I:this},0);C.B_._Init.call(this.
ZV={I:this},0);C.B$._Init.call(this.SU={I:this},0);C.FactoryResetScope._Init.call(
this.FactoryResetScope={I:this},0);this.__proto__=C.AJx;var B;this.Dw(C.AKM);this.
Xl.G(Ke);this.Xl.Aj(true);this.Xl.U(A.z2(A.abg.AyP));this.Xl.Bk(false);this.ZY.G(
RT);this.ZY.Aj(true);this.ZY.U(A.z2(A.abg.ACx));this.ZY.Bk(true);this.ZV.G(Yl);this.
ZV.Aj(true);this.ZV.U(A.z2(A.abg.A0E));this.ZV.Bk(false);this.SU.G(BmR);this.SU.
Aj(true);this.SU.Be1(true);this.SU.U(A.z2(A.abg.A0F));this.SU.Bk(true);this.J(this.
Xl,0);this.J(this.ZY,0);this.J(this.ZV,0);this.J(this.SU,0);this.Xl.AV=[this,this.
A9Y];this.ZY.AV=[this,this.A_i];this.ZV.AV=[this,this.A9Z];this.SU.AV=[this,this.
BdC];this.SU.AD([B=this.FactoryResetScope,B.CA,B.CC]);this.SU.Dk(this.FactoryResetScope
);this.Init(aArg);},_Done:function(){this.__proto__=C.GP;this.Xl._Done();this.ZY.
_Done();this.ZV._Done();this.SU._Done();this.FactoryResetScope._Done();C.GP._Done.
call(this);},_ReInit:function(){C.GP._ReInit.call(this);this.Xl._ReInit();this.ZY.
_ReInit();this.ZV._ReInit();this.SU._ReInit();this.FactoryResetScope._ReInit();this.
Xl.U(A.z2(A.abg.AyP));this.ZY.U(A.z2(A.abg.ACx));this.ZV.U(A.z2(A.abg.A0E));this.
SU.U(A.z2(A.abg.A0F));},_Mark:function(D){var B;C.GP._Mark.call(this,D);if((B=this.
AjZ)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.Xl)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.ZY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZV)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.SU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FactoryResetScope
)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::DeviceDataManagementScreen"
};C.AKM={_Init:function(aArg){C.ON._Init.call(this,aArg);this.__proto__=C.AKM;this.
Text.R(A.z2(A.abg.AyT));},_ReInit:function(){C.ON._ReInit.call(this);this.Text.R(
A.z2(A.abg.AyT));},_className:"Application::HeaderDeviceDatamanagementMenu"};C.Acp={
PR:null,Uy:null,_Init:function(aArg){C.Sy._Init.call(this,aArg);C.CG._Init.call(
this.PR={I:this},0);C.CG._Init.call(this.Uy={I:this},0);this.__proto__=C.Acp;this.
PR.G(BmS);this.PR.R(A.z2(A.abg.A4Z));this.PR.A0(0x12);this.PR.L(A.iF.Text);this.
Uy.G(A59);this.Uy.R(A.z2(A.abg.AlP));this.Uy.L(A.iF.Text);this.J(this.PR,0);this.
J(this.Uy,0);this.PR.Y(A.zW(A.eV.Au));this.PR.By(A.zW(A.eV.Az));this.PR.C5(A.zW(
A.eV.Cr));this.Uy.Y(A.zW(A.eV.Au));this.Uy.By(A.zW(A.eV.Az));},_Done:function(){
this.__proto__=C.Sy;this.PR._Done();this.Uy._Done();C.Sy._Done.call(this);},_ReInit:
function(){C.Sy._ReInit.call(this);this.PR._ReInit();this.Uy._ReInit();this.PR.R(
A.z2(A.abg.A4Z));this.Uy.R(A.z2(A.abg.AlP));this.PR.Y(A.zW(A.eV.Au));this.PR.By(
A.zW(A.eV.Az));this.PR.C5(A.zW(A.eV.Cr));this.Uy.Y(A.zW(A.eV.Au));this.Uy.By(A.zW(
A.eV.Az));},_Mark:function(D){var B;C.Sy._Mark.call(this,D);if((B=this.PR)._cycle
!=D)B._Mark(B._cycle=D);if((B=this.Uy)._cycle!=D)B._Mark(B._cycle=D);},_className:
"Application::HeadlineIdAnimalInfosGenderType"};C.ALf={PT:null,_Init:function(aArg
){C.Sy._Init.call(this,aArg);C.CG._Init.call(this.PT={I:this},0);this.__proto__=
C.ALf;this.PT.G(BmT);this.PT.R(A.z2(A.abg.Z1));this.PT.A0(0x12);this.PT.L(A.iF.Text
);this.J(this.PT,0);this.PT.Y(A.zW(A.eV.Au));this.PT.By(A.zW(A.eV.Az));this.PT.C5(
A.zW(A.eV.Cr));},_Done:function(){this.__proto__=C.Sy;this.PT._Done();C.Sy._Done.
call(this);},_ReInit:function(){C.Sy._ReInit.call(this);this.PT._ReInit();this.PT.
R(A.z2(A.abg.Z1));this.PT.Y(A.zW(A.eV.Au));this.PT.By(A.zW(A.eV.Az));this.PT.C5(
A.zW(A.eV.Cr));},_Mark:function(D){var B;C.Sy._Mark.call(this,D);if((B=this.PT).
_cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeadlineIdAnimalInfosShortNaisId"
};C.Zc={HR:null,ZG:null,DU:null,Bh:function(aSize){C.Mk.Bh.call(this,aSize);this.
HR.G([this.G2.M[2],0,this.G2.M[2]+(((aSize[0]*20)/100)|0),aSize[1]]);this.DU.G([
this.HR.M[2]-1,0,this.HR.M[2]+1,aSize[1]]);this.ZG.G([this.HR.M[2],0,aSize[0],aSize[
1]]);},Ah:function(Ae){C.Mk.Ah.call(this,Ae);this.ZG.L(this.G2.AM);this.HR.L(this.
G2.AM);},B8:function(Z){C.Mk.B8.call(this,Z);if(!this.AZ)return;this.Ho=Z;if(!!this.
AZ){var HH=this.AZ.AkL(Z,14);var AqQ=this.AZ.AKw(Z,7);this.HR.At(A._GetAutoObject(
A.Device.Converter).AkK(AqQ));this.ZG.At(A._GetAutoObject(A.Device.Converter).AZi(
HH));this.Al();}},_Init:function(aArg){C.Mk._Init.call(this,aArg);A.abh.Am._Init.
call(this.HR={I:this},0);A.abh.Am._Init.call(this.ZG={I:this},0);A.abh.AH._Init.
call(this.DU={I:this},0);this.__proto__=C.Zc;this.HR.G(A5$);this.HR.L(A.iF.Text);
this.ZG.G(BmU);this.ZG.L(A.iF.Text);this.DU.G(BmV);this.DU.L(A.iF.A7);this.J(this.
HR,0);this.J(this.ZG,0);this.J(this.DU,0);this.HR.At(A.zW(A.abj.J6));this.ZG.At(
A.zW(A.abj.J6));},_Done:function(){this.__proto__=C.Mk;this.HR._Done();this.ZG._Done(
);this.DU._Done();C.Mk._Done.call(this);},_ReInit:function(){C.Mk._ReInit.call(this
);this.HR._ReInit();this.ZG._ReInit();this.DU._ReInit();},_Mark:function(D){var B;
C.Mk._Mark.call(this,D);if((B=this.HR)._cycle!=D)B._Mark(B._cycle=D);if((B=this.
ZG)._cycle!=D)B._Mark(B._cycle=D);if((B=this.DU)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::CalfListAnimalInfosGenderTypeItem"};C.AIT={Aay:null,Bh:
function(aSize){C.Mk.Bh.call(this,aSize);this.Aay.G([this.G2.M[2],0,aSize[0],aSize[
1]]);},Ah:function(Ae){C.Mk.Ah.call(this,Ae);this.Aay.L(this.G2.AM);},B8:function(
Z){C.Mk.B8.call(this,Z);if(!this.AZ)return;this.Ho=Z;if(!!this.AZ){var R7=this.AZ.
LQ(Z,26);if(R7>0)this.Aay.R(A.aa4(R7.toFixed(),5));else this.Aay.R(Qk);this.Al();
}},_Init:function(aArg){C.Mk._Init.call(this,aArg);A.abh.Text._Init.call(this.Aay={
I:this},0);this.__proto__=C.AIT;this.Aay.G(BmW);this.J(this.Aay,0);this.Aay.Y(A.
zW(A.eV.Au));},_Done:function(){this.__proto__=C.Mk;this.Aay._Done();C.Mk._Done.
call(this);},_ReInit:function(){C.Mk._ReInit.call(this);this.Aay._ReInit();},_Mark:
function(D){var B;C.Mk._Mark.call(this,D);if((B=this.Aay)._cycle!=D)B._Mark(B._cycle=
D);},_className:"Application::CalfListAnimalInfosShortNaisIdItem"};C.ANl={Am:null
,Ah:function(Ae){C.AcN.Ah.call(this,Ae);this.Am.L(this.Text.AM);},_Init:function(
aArg){C.AcN._Init.call(this,aArg);A.abh.Am._Init.call(this.Am={I:this},0);this.__proto__=
C.ANl;this.Text.G(BmX);this.Am.G(A56);this.J(this.Am,0);this.Am.At(A.zW(A.abi.Ac$
));},_Done:function(){this.__proto__=C.AcN;this.Am._Done();C.AcN._Done.call(this
);},_ReInit:function(){C.AcN._ReInit.call(this);this.Am._ReInit();},_Mark:function(
D){var B;C.AcN._Mark.call(this,D);if((B=this.Am)._cycle!=D)B._Mark(B._cycle=D);}
,_className:"Application::NaisIDReadonlyElectronic"};C.Ui={Text:null,CY:null,AQ:
null,SB:null,GI:null,A4:null,Init:function(aArg){var B;A.za([this,this.MF],[B=A.
_GetAutoObject(A.Device.Device),B.AAN,B.AEP],0);A.y_([this,this.MF],A._GetAutoObject(
A.Device.Device).Aq,0);A.ow([this,this.MF],this);},CZ:function(E){C.BW.CZ.call(this
,E);this.CY.L(E);this.Text.L(E);this.SB.L(E);this.GI.AoX(E);},AcT:function(E){C.
BW.AcT.call(this,E);this.GI.CU(E);},EA:function(H){this.GI.U(A._GetAutoObject(A.
Device.Device).Aq.Cf().toFixed());},MF:function(s){this.EA(s);},_Init:function(aArg
){C.BW._Init.call(this,aArg);C.CG._Init.call(this.Text={I:this},0);A.abh.Am._Init.
call(this.CY={I:this},0);A.abh.DK._Init.call(this.AQ={I:this},0);A.abh.Am._Init.
call(this.SB={I:this},0);C.GI._Init.call(this.GI={I:this},0);A.abh.DK._Init.call(
this.A4={I:this},0);this.__proto__=C.Ui;this.Text.G(BmY);this.Text.A0(0x11);this.
CY.G(AUp);this.AQ.DL(A54);this.AQ.D5(A55);this.AQ.L(A.iF.A7);this.SB.G(BmZ);this.
SB.L(A.iF.CR);this.GI.AW(0x14);this.GI.G(Bm0);this.GI.AoX(A.iF.Be);this.GI.CU(A.
iF.AiQ);this.GI.HV(2);this.A4.DL(Bm1);this.A4.D5(Bm2);this.A4.L(A.iF.A7);this.J(
this.Text,0);this.J(this.CY,0);this.J(this.AQ,0);this.J(this.SB,0);this.J(this.GI
,0);this.J(this.A4,0);this.Text.Y(A.zW(A.eV.Au));this.Text.By(A.zW(A.eV.Az));this.
CY.At(A.zW(A.abi.AhK));this.SB.At(A.zW(A.abi.SB));this.GI.Y(A.zW(A.eV.Cr));this.
Init(aArg);},_Done:function(){this.__proto__=C.BW;this.Text._Done();this.CY._Done(
);this.AQ._Done();this.SB._Done();this.GI._Done();this.A4._Done();C.BW._Done.call(
this);},_ReInit:function(){C.BW._ReInit.call(this);this.Text._ReInit();this.CY._ReInit(
);this.AQ._ReInit();this.SB._ReInit();this.GI._ReInit();this.A4._ReInit();this.Text.
Y(A.zW(A.eV.Au));this.Text.By(A.zW(A.eV.Az));this.GI.Y(A.zW(A.eV.Cr));},_Mark:function(
D){var B;C.BW._Mark.call(this,D);if((B=this.Text)._cycle!=D)B._Mark(B._cycle=D);
if((B=this.CY)._cycle!=D)B._Mark(B._cycle=D);if((B=this.AQ)._cycle!=D)B._Mark(B.
_cycle=D);if((B=this.SB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.GI)._cycle!=D)
B._Mark(B._cycle=D);if((B=this.A4)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::HeaderAnimalList"
};C.Adm={Fa:null,Jp:null,Jo:null,AiA:null,AiB:null,P6:null,PE:null,ZF:null,Uk:null
,PU:null,PV:null,SM:null,FP:null,FQ:null,IY:null,AjC:0,AjH:0,DM:0,DC:0,A3:0,Bh:function(
aSize){var B;this.Di.G([this.GU.M[2]-10,this.GU.M[1],this.Hv.M[0]+10,this.GU.M[3
]]);this.Di.ABt((B=this.Di.M)[2]-B[0]);this.Di.IB(this.Di.FM,true,null,null);},Ah:
function(Ae){var B;C.B$.Ah.call(this,Ae);var Fx=((Ae&0x20)===0x20);var Fw=this.Bi.
Bw;if(!!this.Q)this.Ix(this);if((this.A3===1)||(this.A3===2)){var AVO=this.AWK(this.
A3);if(!!AVO){this.ZF.W(true);this.ZF.G(AVO.M);this.ZF.L(this.T.AM);this.Uk.W(true
);this.Uk.G(AVO.M);}else{this.ZF.W(false);this.Uk.W(false);}this.GU.W(false);this.
Hv.W(false);}else{this.ZF.W(false);this.Uk.W(false);this.GU.W(Fx||Fw);this.Hv.W(
Fx||Fw);}},Ps:function(H){if(!!this.Q){if(this.E9===1)A.ow([this,this.TC],this);
else if(this.E9===4)A.ow([this,this.AU7],this);else if(this.E9===5)A.ow([this,this.
AU5],this);}C.B$.Ps.call(this,H);},JB:function(H){switch(this.A3){case 0:C.B$.JB.
call(this,H);break;case 2:break;default:this.AjU(this);}},Jw:function(H){switch(
this.A3){case 0:C.B$.Jw.call(this,H);break;default:this.Agj(this);}},AWg:function(
H){var F;if(this.A3===1){var BR=this.DM;this.DM=this.DM-10;if(this.DM<this.AjH)this.
DM=this.AjH;if(this.DM<A._GetAutoObject(A.Device.Device).X_)this.DM=A._GetAutoObject(
A.Device.Device).X_;if(this.DC!==BR){if(!!this.Jp)(F=this.Jp,F[2].call(F[0],this.
DM));A.aat(this.Jp,0);}}if(this.A3===2){var BR=this.DC;this.DC=this.DC-10;if(this.
DC<this.DM)this.DC=this.DM;if(this.DC!==BR){if(!!this.Jo)(F=this.Jo,F[2].call(F[
0],this.DC));A.aat(this.Jo,0);}}this.DD(this);this.Al();},AU5:function(s){this.AWg(
s);},AjT:function(H){this.E9=5;this.Al();if(this.Bi.Bw){A.ow([this,this.AU5],this
);this.Bi.An(false);}this.Bi.An(true);},AWS:function(H){var F;if(this.A3===1){var
BR=this.DM;this.DM=this.DM+10;if(this.DM>this.DC)this.DM=this.DC;if(this.DM!==BR
){if(!!this.Jp)(F=this.Jp,F[2].call(F[0],this.DM));A.aat(this.Jp,0);}}if(this.A3===
2){var BR=this.DC;this.DC=this.DC+10;if(this.DC>this.AjC)this.DC=this.AjC;if(this.
DC!==BR){if(!!this.Jo)(F=this.Jo,F[2].call(F[0],this.DC));A.aat(this.Jo,0);}}this.
DD(this);this.Al();},AU7:function(s){this.AWS(s);},AjV:function(H){this.E9=4;this.
Al();if(this.Bi.Bw){A.ow([this,this.AU7],this);this.Bi.An(false);}this.Bi.An(true
);return;},TC:function(H){this.Ed(this.A3+1);},AjU:function(H){this.E9=1;this.Al(
);if(this.Bi.Bw){A.ow([this,this.TC],this);this.Bi.An(false);}this.Bi.An(true);}
,Ix:function(H){},AdQ:function(s){this.Ix(s);},DD:function(H){var F;if(!this.N)return;
switch(this.A3){case 1:{(F=this.N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,
F[1].call(F[0])).GZ(A.jm);(F=this.N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.N
,F[1].call(F[0])).Cn(null);(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(
F[0])).Ch=null;(F=this.N,F[1].call(F[0])).De(A.zW(A.abi.Acs));(F=this.N,F[1].call(
F[0])).Cd(A.jm);(F=this.N,F[1].call(F[0])).Cm=[this,this.TC];}break;case 2:{(F=this.
N,F[1].call(F[0])).C$(A.zW(A.abi.ET));(F=this.N,F[1].call(F[0])).GZ(A.jm);(F=this.
N,F[1].call(F[0])).CB=[this,this.Gy];(F=this.N,F[1].call(F[0])).Cn(A.zW(A.abi.AkR
));(F=this.N,F[1].call(F[0])).Ft(A.jm);(F=this.N,F[1].call(F[0])).Ch=[this,this.
Agj];(F=this.N,F[1].call(F[0])).De(null);(F=this.N,F[1].call(F[0])).Cd(A.jm);(F=
this.N,F[1].call(F[0])).Cm=null;}break;default:this.Fa.AiD((F=this.N,F[1].call(F[
0])));}},A31:function(E){if(A.z_(this.Jp,E))return;if(!!this.Jp)A.zn([this,this.
AX0],this.Jp,0);this.Jp=E;if(!!this.Jp)A.za([this,this.AX0],this.Jp,0);A.ow([this
,this.AX0],this);},AX0:function(H){var F;this.DM=(F=this.Jp,F[1].call(F[0]));this.
Al();},A30:function(E){if(A.z_(this.Jo,E))return;if(!!this.Jo)A.zn([this,this.AXZ
],this.Jo,0);this.Jo=E;if(!!this.Jo)A.za([this,this.AXZ],this.Jo,0);A.ow([this,this.
AXZ],this);},AXZ:function(H){var F;this.DC=(F=this.Jo,F[1].call(F[0]));this.Al();
},GC:function(H){this.Ed(1);},Gy:function(H){this.Ed(0);},Ed:function(EI){var F;
if(!this.A3)this.Fa.Ahn((F=this.N,F[1].call(F[0])));this.A3=EI;if((this.A3<0)||(
this.A3>2))this.A3=0;this.DD(this);this.FQ.Bw=!!this.A3;this.FP.Bw=!!this.A3;this.
Al();},Agj:function(H){if(this.A3>1)this.Ed(this.A3-1);},AYc:function(H){},AvB:function(
s){this.AYc(s);},AXP:function(H){},A66:function(s){this.AXP(s);},AWK:function(Aqq
){return null;},_Init:function(aArg){C.B$._Init.call(this,aArg);A.abh.AH._Init.call(
this.AiA={I:this},0);A.abh.AH._Init.call(this.AiB={I:this},0);A.abh.AH._Init.call(
this.P6={I:this},0);A.abh.Am._Init.call(this.PE={I:this},0);A.abh.AH._Init.call(
this.ZF={I:this},0);A.abh.CT._Init.call(this.Uk={I:this},0);A.abh.Text._Init.call(
this.PU={I:this},0);A.abh.Text._Init.call(this.PV={I:this},0);A.abh.Text._Init.call(
this.SM={I:this},0);A.Core.B1._Init.call(this.FP={I:this},0);A.Core.B1._Init.call(
this.FQ={I:this},0);A.Core.B1._Init.call(this.IY={I:this},0);this.__proto__=C.Adm;
this.G(AdK);this.U(A.z2(A.abg.AAw));this.Background.G(AdK);this.T.G(BI);this.T.R(
A.z2(A.abg.A5h));this.T.A0(0x12);this.AiA.G(Bm3);this.AiA.L(A.iF.F0);this.AiB.G(
Bm4);this.AiB.L(A.iF.HB);this.P6.G(Bm5);this.P6.L(A.iF.E1);this.PE.G(Bm6);this.ZF.
G(Bm7);this.Uk.G(Bm8);this.Uk.N7(3);this.Uk.L(A.iF.A6);this.Uk.W(false);this.PU.
G(Bm9);this.PU.HV(8);this.PU.I0(true);this.PU.A0(0x11);this.PU.L(0xFF000000);this.
PV.G(Bm_);this.PV.HV(8);this.PV.I0(true);this.PV.A0(0x11);this.PV.L(0xFF000000);
this.SM.G(Bm$);this.SM.I0(false);this.SM.A0(0x12);this.SM.L(0xFF000000);this.FP.
Filter=5;this.FP.Bw=false;this.FQ.Filter=4;this.FQ.Bw=false;this.IY.Filter=1;this.
Lh(this.Di,-2);this.J(this.AiA,-1);this.J(this.AiB,-1);this.J(this.P6,-1);this.J(
this.PE,-1);this.J(this.ZF,-1);this.J(this.Uk,-1);this.J(this.PU,-1);this.J(this.
PV,0);this.J(this.SM,0);this.PE.At(A.zW(A.abi.AzW));this.PU.Y(A.zW(A.eV.Au));this.
PV.Y(A.zW(A.eV.Au));this.SM.Y(A.zW(A.eV.Az));this.FP.B2=[this,this.AjT];this.FP.
Ea=[this,this.AU5];this.FQ.B2=[this,this.AjV];this.FQ.Ea=[this,this.AU7];this.IY.
B2=[this,this.AjU];this.Fa=A._NewObject(C.Aci,0);},_Done:function(){this.__proto__=
C.B$;this.AiA._Done();this.AiB._Done();this.P6._Done();this.PE._Done();this.ZF._Done(
);this.Uk._Done();this.PU._Done();this.PV._Done();this.SM._Done();this.FP._Done(
);this.FQ._Done();this.IY._Done();C.B$._Done.call(this);},_ReInit:function(){C.B$.
_ReInit.call(this);this.AiA._ReInit();this.AiB._ReInit();this.P6._ReInit();this.
PE._ReInit();this.ZF._ReInit();this.Uk._ReInit();this.PU._ReInit();this.PV._ReInit(
);this.SM._ReInit();this.FP._ReInit();this.FQ._ReInit();this.IY._ReInit();},_Mark:
function(D){var B;C.B$._Mark.call(this,D);if((B=this.Fa)&&(B._cycle!=D))B._Mark(
B._cycle=D);if((B=this.Jp)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.
Jo)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);if((B=this.AiA)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.AiB)._cycle!=D)B._Mark(B._cycle=D);if((B=this.P6)._cycle!=
D)B._Mark(B._cycle=D);if((B=this.PE)._cycle!=D)B._Mark(B._cycle=D);if((B=this.ZF
)._cycle!=D)B._Mark(B._cycle=D);if((B=this.Uk)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.PU)._cycle!=D)B._Mark(B._cycle=D);if((B=this.PV)._cycle!=D)B._Mark(B._cycle=
D);if((B=this.SM)._cycle!=D)B._Mark(B._cycle=D);if((B=this.FP)._cycle!=D)B._Mark(
B._cycle=D);if((B=this.FQ)._cycle!=D)B._Mark(B._cycle=D);if((B=this.IY)._cycle!=
D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemThresholds"};C.G9={
Wa:null,Aas:null,AlT:0,AlU:0,Dx:function(){if(!this.Wa)return 0;return this.Wa.L0;
},Dd:function(aIndex){if(!this.Wa||(aIndex>=this.Wa.L0))return-1;return this.Wa.
Get(aIndex);},GS:function(aIndex){return this.Aas.Cb(this.Dd(aIndex));},DX:function(
A2){if(!this.Wa)return-1;return this.Wa.Aso(A2);},HP:function(){if(!this.Wa)return-
1;return this.Wa.HP();},Alu:function(E){if(this.AlT===E)return;this.AlT=E;A.ow([
this,this.AQx],this);},AU0:function(Ao){this.Alu(Ao);},Alv:function(E){if(this.AlU===
E)return;this.AlU=E;A.ow([this,this.AQy],this);},AU1:function(Ao){this.Alv(Ao);}
,AQy:function(H){A.aat([this,this.AOe,this.AU1],0);},AQx:function(H){A.aat([this
,this.AOd,this.AU0],0);},AOd:function(){return this.AlT;},AOe:function(){return this.
AlU;},_Init:function(aArg){C.AC._Init.call(this,aArg);A.Device.AnimalTypeToString.
_Init.call(this.Aas={I:this},0);this.__proto__=C.G9;},_Done:function(){this.__proto__=
C.AC;this.Aas._Done();C.AC._Done.call(this);},_ReInit:function(){C.AC._ReInit.call(
this);this.Aas._ReInit();},_Mark:function(D){var B;C.AC._Mark.call(this,D);if((B=
this.Wa)&&(B._cycle!=D))B._Mark(B._cycle=D);if((B=this.Aas)._cycle!=D)B._Mark(B.
_cycle=D);},_className:"Application::AnimalThresholds"};C.AIp={Init:function(aArg
){A.y_([this,this.A_m],A._GetAutoObject(A.Device.Helper).Ta,0);A.y_([this,this.A_k
],A._GetAutoObject(A.Device.Helper).S$,0);this.A_m(this);this.A_k(this);},AD:function(
E){C.G9.AD.call(this,E);this.Alv(A._GetAutoObject(A.Device.Helper).Ta.Get(this.DX(
E)));this.Alu(A._GetAutoObject(A.Device.Helper).S$.Get(this.DX(E)));},Alu:function(
E){if(this.AlT===E)return;C.G9.Alu.call(this,E);A._GetAutoObject(A.Device.Helper
).S$.Set(this.DX(this.Q),E);A._GetAutoObject(A.Device.Helper).S$.Cs();},Alv:function(
E){if(this.AlU===E)return;C.G9.Alv.call(this,E);A._GetAutoObject(A.Device.Helper
).Ta.Set(this.DX(this.Q),E);A._GetAutoObject(A.Device.Helper).Ta.Cs();},A_m:function(
H){this.AlU=A._GetAutoObject(A.Device.Helper).Ta.Get(this.DX(this.Q));A.ow([this
,this.AQy],this);},A_k:function(H){this.AlT=A._GetAutoObject(A.Device.Helper).S$.
Get(this.DX(this.Q));A.ow([this,this.AQx],this);},_Init:function(aArg){C.G9._Init.
call(this,aArg);this.__proto__=C.AIp;this.Wa=A._GetAutoObject(A.Device.Helper).AbQ;
this.Init(aArg);},_className:"Application::AnimalThresholdsTemperatures"};C.AIq={
Ays:0,Ayr:0,Init:function(aArg){A.y_([this,this.A_v],A._GetAutoObject(A.Device.Helper
).AdC,0);A.y_([this,this.A_t],A._GetAutoObject(A.Device.Helper).AdB,0);A.y_([this
,this.A_r],A._GetAutoObject(A.Device.Helper).AdA,0);A.y_([this,this.A_x],A._GetAutoObject(
A.Device.Helper).AdD,0);this.A_v(this);this.A_t(this);this.A_r(this);this.A_x(this
);},AD:function(E){C.G9.AD.call(this,E);this.Alv(A._GetAutoObject(A.Device.Helper
).AdC.Get(this.DX(E)));this.Alu(A._GetAutoObject(A.Device.Helper).AdB.Get(this.DX(
E)));this.AOj(A._GetAutoObject(A.Device.Helper).AdA.Get(this.DX(E)));this.AOk(A.
_GetAutoObject(A.Device.Helper).AdD.Get(this.DX(E)));},Alu:function(E){if(this.AlT===
E)return;C.G9.Alu.call(this,E);A._GetAutoObject(A.Device.Helper).AdB.Set(this.DX(
this.Q),E);A._GetAutoObject(A.Device.Helper).AdB.Cs();},Alv:function(E){if(this.
AlU===E)return;C.G9.Alv.call(this,E);A._GetAutoObject(A.Device.Helper).AdC.Set(this.
DX(this.Q),E);A._GetAutoObject(A.Device.Helper).AdC.Cs();},A_v:function(H){this.
AlU=A._GetAutoObject(A.Device.Helper).AdC.Get(this.DX(this.Q));A.ow([this,this.AQy
],this);},A_t:function(H){this.AlT=A._GetAutoObject(A.Device.Helper).AdB.Get(this.
DX(this.Q));A.ow([this,this.AQx],this);},AOk:function(E){if(this.Ays===E)return;
this.Ays=E;A._GetAutoObject(A.Device.Helper).AdD.Set(this.DX(this.Q),E);A._GetAutoObject(
A.Device.Helper).AdD.Cs();A.ow([this,this.A5v],this);},AOj:function(E){if(this.Ayr===
E)return;this.Ayr=E;A._GetAutoObject(A.Device.Helper).AdA.Set(this.DX(this.Q),E);
A._GetAutoObject(A.Device.Helper).AdA.Cs();A.ow([this,this.A5u],this);},A5u:function(
H){A.aat([this,this.A2s,this.AOj],0);},A5v:function(H){A.aat([this,this.A2t,this.
AOk],0);},A_r:function(H){this.Ayr=A._GetAutoObject(A.Device.Helper).AdA.Get(this.
DX(this.Q));A.ow([this,this.A5u],this);},A_x:function(H){this.Ays=A._GetAutoObject(
A.Device.Helper).AdD.Get(this.DX(this.Q));A.ow([this,this.A5v],this);},A2t:function(
){return this.Ays;},A2s:function(){return this.Ayr;},_Init:function(aArg){C.G9._Init.
call(this,aArg);this.__proto__=C.AIq;this.Wa=A._GetAutoObject(A.Device.Helper).AeI;
this.Init(aArg);},_className:"Application::AnimalThresholdsWeightGain"};C.AH9={QG:
null,Init:function(aArg){var B;A.za([this,this.Aq2],[B=this.AnimalType,B.CA,B.CC
],0);A.ow([this,this.Aq2],this);this.A8(this.QG);},Bo:function(E){C.Iz.Bo.call(this
,E);this.QG.Bu(this.IU.AI);},Aq2:function(H){A._GetAutoObject(A.Device.Device).Atv(
this.AnimalType.Q);},_Init:function(aArg){C.Iz._Init.call(this,aArg);C.Sp._Init.
call(this.QG={I:this},0);this.__proto__=C.AH9;var B;this.QG.G(Bna);this.QG.Aj(true
);this.QG.My(14);this.QG.Afz(0);this.QG.N3(0);this.IU.An(false);this.IU.Aj(false
);this.IU.W(false);this.J(this.QG,-2);this.QG.AV=[this,this.Aw3];this.QG.AD([B=this.
AnimalType,B.CA,B.CC]);this.QG.Dk(this.AnimalType);this.Init(aArg);},_Done:function(
){this.__proto__=C.Iz;this.QG._Done();C.Iz._Done.call(this);},_ReInit:function(){
C.Iz._ReInit.call(this);this.QG._ReInit();},_Mark:function(D){var B;C.Iz._Mark.call(
this,D);if((B=this.QG)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::AnimalEvaluationFilterScreen"
};C.Sp={Filter:null,D_:0,TableId:0,Operator:1,C6:function(){var F;this.Sb((F=this.
Filter,F[1].call(F[0])).DJ(this.D_,this.Operator));},Bh:function(aSize){var B;C.
B$.Bh.call(this,aSize);this.T.G([10,0,((B=this.M)[2]-B[0])-10,40]);this.GU.G(Nt);
this.Hv.G([aSize[0]-40,40,aSize[0],80]);this.Di.G([this.GU.M[2]-5,this.GU.M[1],this.
Hv.M[0]+5,this.GU.M[3]]);this.Di.ABt((B=this.Di.M)[2]-B[0]);this.Di.IB(this.Di.FM
,true,null,null);},Bo:function(E){if(A.z_(this.Filter,E))return;if(!!this.Filter
)A.zn([this,this.Lu],this.Filter,0);this.Filter=E;if(!!E)A.za([this,this.Lu],E,0
);A.ow([this,this.Lu],this);},Lu:function(H){var F;if(!!this.Filter&&!!(F=this.Filter
,F[1].call(F[0])))this.Sb((F=this.Filter,F[1].call(F[0])).DJ(this.D_,this.Operator
));else this.Sb(null);},Afz:function(E){if(this.TableId===E)return;this.TableId=
E;A.ow([this,this.Lu],this);},My:function(E){if(this.D_===E)return;this.D_=E;A.ow([
this,this.Lu],this);},Sb:function(AK){this.U(A._GetAutoObject(A.Device.Helper).AkM(
this.TableId,this.D_));this.Al();},N3:function(E){if(this.Operator===E)return;this.
Operator=E;A.ow([this,this.Lu],this);},_Init:function(aArg){C.B$._Init.call(this
,aArg);this.__proto__=C.Sp;this.G(KO);this.T.A0(0x11);this.T.C5(A.zW(A.eV.Cr));}
,_ReInit:function(){C.B$._ReInit.call(this);this.T.C5(A.zW(A.eV.Cr));this.C6();}
,_Mark:function(D){var B;C.B$._Mark.call(this,D);if((B=this.Filter)&&((B=B[0])._cycle
!=D))B._Mark(B._cycle=D);},_className:"Application::BaseGroupFilterItem"};C.ApC={
Xx:null,_Init:function(aArg){C.SetTransponderScreen._Init.call(this,aArg);A.abh.
Text._Init.call(this.Xx={I:this},0);this.__proto__=C.ApC;this.N.Cd(A.abg.Bbr);this.
Number.G(Bnb);this.IL.G(Bnc);this.Io.G(Bnd);this.Ais(2);this.A7_=false;this.A9a=
true;this.Xx.G(Bne);this.Xx.KH(true);this.Xx.R(A.z2(A.abg.A47));this.Xx.L(A.iF.Text
);this.J(this.Xx,0);this.N.CB=null;this.N.Cm=[this,this.AEY];this.N.C$(null);this.
Xx.Y(A.zW(A.eV.Au));},_Done:function(){this.__proto__=C.SetTransponderScreen;this.
Xx._Done();C.SetTransponderScreen._Done.call(this);},_ReInit:function(){C.SetTransponderScreen.
_ReInit.call(this);this.Xx._ReInit();this.Xx.R(A.z2(A.abg.A47));this.Xx.Y(A.zW(A.
eV.Au));},_Mark:function(D){var B;C.SetTransponderScreen._Mark.call(this,D);if((
B=this.Xx)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SetTransponderCancableScreen"
};C.AAb={Cc:null,Ff:function(E){if(this.Mn===E)return;C.Hb.Ff.call(this,E);this.
Cc.CU(E);},WK:function(I6){var BS=null;switch(I6){case-1:case 0:BS=this.Fo;break;
case 1:BS=this.Cc;break;case 2:BS=this.Gj;break;default:A.aa8("%s",Af5);}return BS;
},_Init:function(aArg){C.Hb._Init.call(this,aArg);C.Ds._Init.call(this.Cc={I:this
},0);this.__proto__=C.AAb;this.G(Bnf);this.Cc.G(A5S);this.Fo.G(Bng);this.J(this.
Cc,-2);this.Cc.C_=[this,this.Gd];},_Done:function(){this.__proto__=C.Hb;this.Cc.
_Done();C.Hb._Done.call(this);},_ReInit:function(){C.Hb._ReInit.call(this);this.
Cc._ReInit();},_Mark:function(D){var B;C.Hb._Mark.call(this,D);if((B=this.Cc)._cycle
!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber3"};C.ACJ={Gm:null
,Bh:function(aSize){C.N9.Bh.call(this,aSize);this.T.G(A.aaQ(this.T.M,this.Gm.M[0
]));},Ah:function(Ae){C.N9.Ah.call(this,Ae);if(this.GY)this.Gm.Ff(A.iF.CE);else this.
Gm.Ff(A.iF.CR);},AWF:function(){this.A8(this.Gm);},_Init:function(aArg){C.N9._Init.
call(this,aArg);C.Hb._Init.call(this.Gm={I:this},0);this.__proto__=C.ACJ;this.Gm.
G(Bnh);this.J(this.Gm,0);this.Gm.AD([this,this.AN4,this.ABH]);},_Done:function(){
this.__proto__=C.N9;this.Gm._Done();C.N9._Done.call(this);},_ReInit:function(){C.
N9._ReInit.call(this);this.Gm._ReInit();},_Mark:function(D){var B;C.N9._Mark.call(
this,D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::SettingsItemGroupNumbered2"
};C.ACK={Gm:null,Bh:function(aSize){C.N9.Bh.call(this,aSize);this.T.G(A.aaQ(this.
T.M,this.Gm.M[0]));},Ah:function(Ae){C.N9.Ah.call(this,Ae);if(this.GY)this.Gm.Ff(
A.iF.CE);else this.Gm.Ff(A.iF.CR);},AWF:function(){this.A8(this.Gm);},_Init:function(
aArg){C.N9._Init.call(this,aArg);C.AAb._Init.call(this.Gm={I:this},0);this.__proto__=
C.ACK;this.Gm.AW(0x18);this.Gm.G(Bni);this.J(this.Gm,0);this.Gm.AD([this,this.AN4
,this.ABH]);},_Done:function(){this.__proto__=C.N9;this.Gm._Done();C.N9._Done.call(
this);},_ReInit:function(){C.N9._ReInit.call(this);this.Gm._ReInit();},_Mark:function(
D){var B;C.N9._Mark.call(this,D);if((B=this.Gm)._cycle!=D)B._Mark(B._cycle=D);},
_className:"Application::SettingsItemGroupNumbered3"};C.Aat={ScreenTypeToString:
null,Dx:function(){return 4;},GS:function(aIndex){if((aIndex<0)||(aIndex>=99))return A.
jm;return this.ScreenTypeToString.Cb(this.Dd(aIndex));},_Init:function(aArg){C.Dm.
_Init.call(this,aArg);A.Device.ScreenTypeToString._Init.call(this.ScreenTypeToString={
I:this},0);this.__proto__=C.Aat;this.Cj.Set(0,3);this.Cj.Set(1,34);this.Cj.Set(2
,33);this.Cj.Set(3,46);},_Done:function(){this.__proto__=C.Dm;this.ScreenTypeToString.
_Done();C.Dm._Done.call(this);},_ReInit:function(){C.Dm._ReInit.call(this);this.
ScreenTypeToString._ReInit();},_Mark:function(D){var B;C.Dm._Mark.call(this,D);if((
B=this.ScreenTypeToString)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::StartScreenType"
};C.AQU={XB:function(H){this.Aey();this.D0(A.z2(A.abg.App),[this,this.Ao_],3);this.
D0(A.z2(A.abg.AfQ),[this,this.Aio],2);this.D0(A.z2(A.abg.AbK),[this,this.AoR],1);
this.D0(A.z2(A.abg.LinkTransponder),[this,this.AOB],8);this.D0(A.z2(A.abg.Aet),[
this,this.Aig],0);this.D0(A.z2(A.abg.Oz),[this,this.Z7],9);A._GetAutoObject(C.Cz
).IT();A._GetAutoObject(C.Cz).V5(A.z2(A.abg.Aeu)+A.z2(A.abg.Colon));A._GetAutoObject(
A.Device.Device).Co(6);},DW:function(H){},Ack:function(){return C.Zc;},Acl:function(
){return C.Acp;},Rz:function(H){A._GetAutoObject(A.Device.Device).Aq.Bo(A._GetAutoObject(
A.Device.Helper).A07());},HY:function(H){C.Gi.HY.call(this,H);if(this.Ah6()===false
){this.N.Cn(A.zW(A.abi.Asy));this.N.Ch=[this,this.AJE];this.N.Ft(A.jm);}this.N.O4(
false);this.N.O5(false);},Aeg:function(){A._GetAutoObject(C.A1).BY(97);},Aef:function(
){A._GetAutoObject(C.A1).BY(98);},_Init:function(aArg){C.Gi._Init.call(this,aArg
);this.__proto__=C.AQU;var B;this.Dw(C.AzE);this.Et(A.z2(A.abg.Bdx));this.Afw([B=
A._GetAutoObject(A.Device.Device),B.AN3,B.AUR]);},_className:"Application::YoungNoTransponderListScreen"
};C.AQT={_Init:function(aArg){C.Iz._Init.call(this,aArg);this.__proto__=C.AQT;this.
Kb.An(false);this.Kb.Aj(false);this.Kb.W(false);},_className:"Application::YoungNoTransponderListFilterScreen"
};C.AQS={_Init:function(aArg){C.H_._Init.call(this,aArg);this.__proto__=C.AQS;this.
N.Cd(A.z2(A.abg.Bar));},_className:"Application::YoungNoTransponderListActionsScreen"
};C.AMJ={Rc:null,Q:null,A16:0,Mn:0,Init:function(aArg){this.AOE(6);},AD:function(
E){if(A.z_(this.Q,E))return;this.Q=E;if(!!this.Rc)this.Rc.AD(E);},AOE:function(E
){if(this.A16===E)return;this.A16=E;var X;switch(E){case 2:X=A._NewObject(C.Hb,0
);break;case 3:X=A._NewObject(C.AAb,0);break;case 4:X=A._NewObject(C.AMG,0);break;
case 5:X=A._NewObject(C.AMH,0);break;case 6:X=A._NewObject(C.AsO,0);break;default:{
X=null;A.aa8("%s%i",Bnj,E);}}this.Bga(X);},Bga:function(E){if(this.Rc===E)return;
if(!!this.Rc){this.Rc.AD(null);this.HA(this.Rc);}this.Rc=E;if(!!this.Rc){this.Rc.
AD(this.Q);this.J(this.Rc,0);}},Ff:function(E){if(this.Mn===E)return;this.Mn=E;if(
!!this.Rc)this.Rc.Ff(E);},RB:function(Ge){if(!!this.Rc)this.Rc.RB(Ge);},_Init:function(
aArg){A.Core.O._Init.call(this,aArg);this.__proto__=C.AMJ;this.G(Au6);this.Init(
aArg);},_Mark:function(D){var B;A.Core.O._Mark.call(this,D);if((B=this.Rc)&&(B._cycle
!=D))B._Mark(B._cycle=D);if((B=this.Q)&&((B=B[0])._cycle!=D))B._Mark(B._cycle=D);
},_className:"Application::InputNumberVariable_32"};C.AMG={CI:null,Cc:null,Ff:function(
E){if(this.Mn===E)return;C.Hb.Ff.call(this,E);this.Cc.CU(E);this.CI.CU(E);},WK:function(
I6){var BS=null;switch(I6){case-1:case 0:BS=this.Fo;break;case 1:BS=this.Cc;break;
case 2:BS=this.CI;break;case 3:BS=this.Gj;break;default:A.aa8("%s",Af5);}return BS;
},_Init:function(aArg){C.Hb._Init.call(this,aArg);C.Ds._Init.call(this.CI={I:this
},0);C.Ds._Init.call(this.Cc={I:this},0);this.__proto__=C.AMG;this.G(Bnk);this.Gj.
G(Aqh);this.CI.G(A5T);this.Cc.G(A5U);this.Fo.G(A5V);this.J(this.CI,-2);this.J(this.
Cc,-2);this.CI.C_=[this,this.Gd];this.Cc.C_=[this,this.Gd];},_Done:function(){this.
__proto__=C.Hb;this.CI._Done();this.Cc._Done();C.Hb._Done.call(this);},_ReInit:function(
){C.Hb._ReInit.call(this);this.CI._ReInit();this.Cc._ReInit();},_Mark:function(D
){var B;C.Hb._Mark.call(this,D);if((B=this.CI)._cycle!=D)B._Mark(B._cycle=D);if((
B=this.Cc)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::InputNumber4"
};C.Azd={RJ:null,Ah:function(Ae){C.Zv.Ah.call(this,Ae);this.RJ.L(this.T.AM);},_Init:
function(aArg){C.Zv._Init.call(this,aArg);C.CG._Init.call(this.RJ={I:this},0);this.
__proto__=C.Azd;this.T.W(false);this.AX.G(Bnl);this.AX.AOE(4);this.RJ.G(Bnm);this.
RJ.R(A.z2(A.abg.Ky));this.RJ.L(A.iF.Be);this.J(this.RJ,0);this.RJ.Y(A.zW(A.eV.Au
));this.RJ.By(A.zW(A.eV.Az));this.RJ.C5(null);},_Done:function(){this.__proto__=
C.Zv;this.RJ._Done();C.Zv._Done.call(this);},_ReInit:function(){C.Zv._ReInit.call(
this);this.RJ._ReInit();this.RJ.R(A.z2(A.abg.Ky));this.RJ.Y(A.zW(A.eV.Au));this.
RJ.By(A.zW(A.eV.Az));},_Mark:function(D){var B;C.Zv._Mark.call(this,D);if((B=this.
RJ)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::FilterItemNumericAge"
};C.Ld={Xe:null,SN:null,AM:0,A1v:false,L:function(E){if(this.AM===E)return;this.
AM=E;this.Xe.L(this.AM);this.SN.L(this.AM);},A3Q:function(E){var B;if(this.A1v===
E)return;this.A1v=E;if(E){this.Xe.W(true);this.SN.DL([this.SN.Ev[0],(((B=this.M)[
3]-B[1])/2)|0]);}else{this.Xe.W(false);this.SN.DL([this.SN.Ev[0],(B=this.M)[3]-B[
1]]);}},_Init:function(aArg){A.Core.O._Init.call(this,aArg);A.abh.DK._Init.call(
this.Xe={I:this},0);A.abh.DK._Init.call(this.SN={I:this},0);this.__proto__=C.Ld;
this.G(AUG);this.Xe.AW(0x2D);this.Xe.DL(Af1);this.Xe.D5(A6e);this.Xe.L(A.iF.Text
);this.SN.AW(0x36);this.SN.DL(A6e);this.SN.D5(Bnn);this.SN.L(A.iF.Text);this.AM=
A.iF.Text;this.J(this.Xe,0);this.J(this.SN,0);},_Done:function(){this.__proto__=
A.Core.O;this.Xe._Done();this.SN._Done();A.Core.O._Done.call(this);},_ReInit:function(
){A.Core.O._ReInit.call(this);this.Xe._ReInit();this.SN._ReInit();},_Mark:function(
D){var B;A.Core.O._Mark.call(this,D);if((B=this.Xe)._cycle!=D)B._Mark(B._cycle=D
);if((B=this.SN)._cycle!=D)B._Mark(B._cycle=D);},_className:"Application::MenuTreeElement"
};
C._Init=function(){C.AIw.__proto__=A.Core.Root;C.Aw.__proto__=C.Zo;C.UX.__proto__=
A.Core.O;C.NR.__proto__=A.Core.O;C.XN.__proto__=A.abm.FE;C.D$.__proto__=A.Core.O;
C.Wg.__proto__=C.Aw;C.APW.__proto__=C.Aw;C.Asv.__proto__=C.Aw;C.S6.__proto__=C.Aw;
C.E3.__proto__=C.GO;C.AE.__proto__=A.Core.O;C.CJ.__proto__=C.Aw;C.Ast.__proto__=
C.BW;C.BW.__proto__=A.Core.O;C.N.__proto__=A.Core.O;C.AzF.__proto__=C.AkP;C.AC5.
__proto__=C.Dv;C.B_.__proto__=C.Tc;C.Da.__proto__=C.DY;C.JS.__proto__=C.Da;C.B$.
__proto__=C.Da;C.AlH.__proto__=C.Da;C.NZ.__proto__=C.Dm;C.P$.__proto__=C.AC;C.AP$.
__proto__=C.A$;C.Fu.__proto__=A.Core.O;C.A$.__proto__=C.B_;C.Gi.__proto__=C.Aw;C.
AyA.__proto__=C.A$;C.Ab1.__proto__=C.Aw;C.LI.__proto__=C.NR;C.AP6.__proto__=C.Aw;
C.Aoc.__proto__=C.AzF;C.Gender.__proto__=C.AC;C.BirthType.__proto__=C.AC;C.AnimalType.
__proto__=C.AC;C.APN.__proto__=C.Adm;C.Eg.__proto__=A.Core.O;C.Rating.__proto__=
A.Core.O;C.Apx.__proto__=A.Core.O;C.ACM.__proto__=C.Da;C.CG.__proto__=A.Core.O;C.
AhI.__proto__=C.Ui;C.Akl.__proto__=C.P_;C.AfE.__proto__=A.Core.O;C.GP.__proto__=
C.Aw;C.AO_.__proto__=C.Aw;C.LK.__proto__=C.B_;C.Ak8.__proto__=C.B_;C.OverlayMenu.
__proto__=C.Zo;C.ALq.__proto__=C.OverlayMenu;C.F_.__proto__=A.Core.O;C.Zo.__proto__=
A.Core.O;C.APS.__proto__=A.abm.Acc;C.AkP.__proto__=C.BW;C.AzG.__proto__=C.AkP;C.
Ky.__proto__=C.AC;C.APP.__proto__=C.Da;C.ACm.__proto__=C.Aw;C.Hp.__proto__=C.Aw;
C.UQ.__proto__=C.AoA;C.Ig.__proto__=C.AzG;C.Iz.__proto__=C.Aw;C.AH6.__proto__=C.
ACm;C.AH2.__proto__=C.Gi;C.AJg.__proto__=C.Gi;C.Acf.__proto__=C.B_;C.PC.__proto__=
C.Acf;C.ALd.__proto__=C.BW;C.Ass.__proto__=C.BW;C.Ds.__proto__=C.FC;C.AX.__proto__=
A.Core.O;C.Fv.__proto__=C.AC;C.Adl.__proto__=C.B$;C.APi.__proto__=C.Aw;C.ZZ.__proto__=
C.B_;C.AcJ.__proto__=C.B_;C.AJr.__proto__=C.CJ;C.AQb.__proto__=C.CJ;C.AJB.__proto__=
C.CJ;C.APs.__proto__=C.CJ;C.Vd.__proto__=A.Core.O;C.Ri.__proto__=C.E3;C.GI.__proto__=
A.Core.O;C.SO.__proto__=C.Aw;C.AQF.__proto__=C.Gi;C.AH7.__proto__=C.AuI;C.AQr.__proto__=
C.CJ;C.AcF.__proto__=C.AC;C.AuI.__proto__=C.Aw;C.AQO.__proto__=C.CJ;C.APO.__proto__=
C.Adm;C.Ax9.__proto__=A.Graphics.G0;C.Ag9.__proto__=C.Aw;C.ANb.__proto__=A.Core.
O;C.K2.__proto__=C.OverlayMenu;C.AnH.__proto__=C.B$;C.ArC.__proto__=C.B_;C.AHQ.__proto__=
C.K2;C.Dm.__proto__=C.AC;C.AutoAction.__proto__=C.AC;C.AHW.__proto__=C.AbI;C.AHX.
__proto__=C.K2;C.Aev.__proto__=C.AcJ;C.AIB.__proto__=C.AbI;C.UH.__proto__=C.E3;C.
TU.__proto__=A.Core.O;C.JQ.__proto__=A.Core.O;C.ANu.__proto__=C.Hp;C.APl.__proto__=
C.OverlayMenu;C.RatingMode.__proto__=C.Dm;C.AJh.__proto__=C.Akl;C.GO.__proto__=A.
Core.O;C.AQH.__proto__=C.OverlayMenu;C.WeightRecordingMode.__proto__=C.Dm;C.Wd.__proto__=
C.Fv;C.Auz.__proto__=C.Ax9;C.AO5.__proto__=C.OverlayMenu;C.AKj.__proto__=A.Core.
O;C.Nh.__proto__=A.Core.O;C.AO6.__proto__=A.Core.O;C.APR.__proto__=A.abm.Acc;C.ApD.
__proto__=C.JS;C.Akn.__proto__=C.OverlayMenu;C.AyC.__proto__=C.A$;C.WN.__proto__=
C.Ass;C.An1.__proto__=C.Hp;C.Aaq.__proto__=C.Da;C.WeightRecordingScope.__proto__=
C.AC;C.ArJ.__proto__=C.Aw;C.APQ.__proto__=C.JS;C.AH4.__proto__=C.Aw;C.AoA.__proto__=
C.Hp;C.ADm.__proto__=A.Core.O;C.AQK.__proto__=A.Core.O;C.DY.__proto__=C.B_;C.AcK.
__proto__=C.DY;C.AsW.__proto__=C.AcK;C.SetTransponderScreen.__proto__=C.S6;C.AzM.
__proto__=C.Eg;C.ADq.__proto__=C.A$;C.WeightListScreen.__proto__=C.Aw;C.LA.__proto__=
C.S6;C.AHO.__proto__=C.LA;C.ManualActionScanScreen.__proto__=C.LA;C.AHP.__proto__=
A.Core.O;C.ALh.__proto__=C.DQ;C.AzK.__proto__=C.DQ;C.Sy.__proto__=C.DQ;C.ALj.__proto__=
C.DQ;C.AIY.__proto__=C.A$;C.Mk.__proto__=C.A$;C.AIW.__proto__=C.A$;C.IV.__proto__=
A.Core.O;C.AIV.__proto__=C.A$;C.AkO.__proto__=C.Sp;C.ACe.__proto__=C.At5;C.Aiu.__proto__=
C.At5;C.Ac6.__proto__=C.Aiu;C.AJo.__proto__=C.Tc;C.Tc.__proto__=C.GO;C.ALm.__proto__=
C.Eg;C.CN.__proto__=A.Core.O;C.AIS.__proto__=C.Aho;C.AzI.__proto__=C.Sz;C.JI.__proto__=
A.Core.O;C.AnT.__proto__=C.LK;C.AKJ.__proto__=C.JK;C.AutoRegistrationMode.__proto__=
C.AC;C.ALn.__proto__=C.Eg;C.Sj.__proto__=C.Aw;C.DP.__proto__=A.Core.O;C.AIf.__proto__=
C.QO;C.AIu.__proto__=C.AbP;C.AIo.__proto__=C.AbP;C.APk.__proto__=C.A$;C.ALl.__proto__=
C.Eg;C.AIi.__proto__=C.AbP;C.H9.__proto__=C.Iy;C.QI.__proto__=C.E$;C.QM.__proto__=
C.E$;C.Si.__proto__=C.Je;C.PA.__proto__=C.E$;C.Sh.__proto__=C.Je;C.AH3.__proto__=
C.Ag9;C.H_.__proto__=C.Ag9;C.AME.__proto__=C.CJ;C.AbP.__proto__=C.DP;C.Jf.__proto__=
C.Dm;C.AM9.__proto__=C.CJ;C.AId.__proto__=C.Kv;C.AIe.__proto__=C.DP;C.AIb.__proto__=
C.Kv;C.AIc.__proto__=C.Kv;C.U0.__proto__=C.DY;C.APL.__proto__=C.U0;C.QN.__proto__=
C.E$;C.ALc.__proto__=C.Ig;C.AJi.__proto__=C.Aw;C.AI1.__proto__=C.Ab1;C.AH1.__proto__=
C.Iz;C.AQE.__proto__=C.Iz;C.AJf.__proto__=C.H_;C.AQD.__proto__=C.H_;C.AH0.__proto__=
C.H_;C.AKK.__proto__=C.JK;C.ALe.__proto__=C.JK;C.ALi.__proto__=C.Sz;C.AIX.__proto__=
C.Aho;C.Sz.__proto__=C.DQ;C.AnO.__proto__=A.abw.AyJ;C.Aho.__proto__=C.A$;C.Dv.__proto__=
A.Core.O;C.AIK.__proto__=C.Dv;C.Pb.__proto__=C.Dv;C.Aoa.__proto__=A.Core.O;C.AIk.
__proto__=C.Fu;C.APo.__proto__=A.Core.O;C.Kv.__proto__=C.DP;C.AJp.__proto__=C.CJ;
C.Ax$.__proto__=C.B_;C.AzC.__proto__=C.BW;C.AzD.__proto__=C.BW;C.E$.__proto__=C.
Je;C.AKo.__proto__=C.Gi;C.AKn.__proto__=C.Iz;C.AKm.__proto__=C.H_;C.AKW.__proto__=
C.JK;C.AzJ.__proto__=C.DQ;C.Ayz.__proto__=C.A$;C.APj.__proto__=C.AfE;C.FactoryResetScope.
__proto__=C.Dm;C.SetSaveTransponderScreen.__proto__=C.SetTransponderScreen;C.ANH.
__proto__=C.Gi;C.ANG.__proto__=C.Iz;C.ANF.__proto__=C.H_;C.AzE.__proto__=C.JK;C.
Ayj.__proto__=C.Fv;C.AHU.__proto__=C.K2;C.AH5.__proto__=C.ArJ;C.NewAnimalSetTransponderScreen.
__proto__=C.ApC;C.C2.__proto__=C.AC;C.Oc.__proto__=A.Core.O;C.QJ.__proto__=C.E$;
C.QK.__proto__=C.E$;C.EaseOfDelivery.__proto__=C.AC;C.Breed.__proto__=C.AC;C.AID.
__proto__=C.CJ;C.ANe.__proto__=C.OverlayMenu;C.AJm.__proto__=C.AcJ;C.ANg.__proto__=
C.B_;C.AnimalSingleInfoScreen.__proto__=C.Sj;C.AnimalMultiInfoScreen.__proto__=C.
Sj;C.AIh.__proto__=C.OverlayMenu;C.MultiInfoActionsScreen.__proto__=C.H_;C.Jl.__proto__=
A.Core.O;C.AHT.__proto__=C.Gi;C.AHS.__proto__=C.Iz;C.AHR.__proto__=C.H_;C.ALb.__proto__=
C.Ig;C.ApO.__proto__=C.Oc;C.Aon.__proto__=C.Oc;C.Ar1.__proto__=C.AC;C.AH$.__proto__=
C.AC;C.ACL.__proto__=C.DY;C.Gm.__proto__=A.Core.O;C.AMH.__proto__=C.Hb;C.AQv.__proto__=
C.Wg;C.ANr.__proto__=C.UQ;C.AAa.__proto__=C.KC;C.Hb.__proto__=C.Gm;C.KC.__proto__=
C.Gm;C.EartagNrAssignmentMode.__proto__=C.AC;C.AsO.__proto__=C.Hb;C.APK.__proto__=
C.B$;C.NewAnimalsSetTransponderScreen.__proto__=C.ApC;C.ReasonOfLeaving.__proto__=
C.AC;C.N9.__proto__=C.B$;C.AcN.__proto__=C.D4;C.ANk.__proto__=C.D4;C.ANj.__proto__=
C.D4;C.D4.__proto__=A.Core.O;C.AfM.__proto__=C.DY;C.AMI.__proto__=C.KC;C.AsN.__proto__=
A.Core.O;C.FC.__proto__=A.Core.O;C.E0.__proto__=C.Aw;C.AJX.__proto__=C.Aw;C.AJ0.
__proto__=C.E0;C.AJ1.__proto__=C.E0;C.Ar5.__proto__=C.E0;C.Zy.__proto__=C.AhI;C.
JK.__proto__=C.AhI;C.Asr.__proto__=C.Zy;C.AKU.__proto__=C.Zy;C.AKT.__proto__=C.Zy;
C.AKS.__proto__=C.BW;C.Aco.__proto__=C.Eg;C.An3.__proto__=C.A$;C.Ahf.__proto__=C.
H9;C.Ay9.__proto__=A.Core.O;C.AiE.__proto__=A.Core.O;C.P_.__proto__=C.Aw;C.AQa.__proto__=
C.P_;C.AKV.__proto__=C.BW;C.DQ.__proto__=C.Eg;C.ON.__proto__=C.BW;C.AKO.__proto__=
C.ON;C.AKQ.__proto__=C.ON;C.WE.__proto__=C.An3;C.AeB.__proto__=C.GO;C.AJJ.__proto__=
C.Gi;C.AJI.__proto__=C.Iz;C.AJH.__proto__=C.H_;C.AKR.__proto__=C.JK;C.Zv.__proto__=
C.Aaq;C.Ahx.__proto__=C.PC;C.Ayu.__proto__=C.PC;C.ALg.__proto__=C.DQ;C.AIU.__proto__=
C.A$;C.QL.__proto__=C.E$;C.AIa.__proto__=C.E$;C.AJz.__proto__=C.GP;C.AJA.__proto__=
C.GP;C.AKP.__proto__=C.ON;C.Rl.__proto__=C.ZZ;C.AJw.__proto__=C.GP;C.AKL.__proto__=
C.ON;C.OZ.__proto__=C.B_;C.Q5.__proto__=C.Aw;C.AJY.__proto__=C.Q5;C.AJZ.__proto__=
C.Q5;C.AJ2.__proto__=C.Ar5;C.AJV.__proto__=C.E0;C.Y5.__proto__=C.H9;C.OD.__proto__=
C.H9;C.AIm.__proto__=C.Akn;C.AM7.__proto__=C.SO;C.AM6.__proto__=C.SO;C.ANC.__proto__=
C.Gi;C.ANB.__proto__=C.Iz;C.ANA.__proto__=C.H_;C.AK8.__proto__=C.JK;C.APw.__proto__=
C.Gi;C.APv.__proto__=C.Iz;C.APu.__proto__=C.H_;C.AK_.__proto__=C.Ui;C.AyB.__proto__=
C.A$;C.AzL.__proto__=C.DQ;C.AK9.__proto__=C.BW;C.Y7.__proto__=C.MS;C.V_.__proto__=
C.MS;C.QO.__proto__=C.DP;C.V$.__proto__=C.QO;C.V8.__proto__=C.H8;C.Y3.__proto__=
C.H8;C.V7.__proto__=C.H8;C.Y2.__proto__=C.H8;C.AIj.__proto__=C.Aw;C.H8.__proto__=
C.Iy;C.Iy.__proto__=C.GO;C.MS.__proto__=C.E$;C.At4.__proto__=C.Ac6;C.AJn.__proto__=
C.AnT;C.At6.__proto__=C.Ac6;C.APf.__proto__=C.CJ;C.APd.__proto__=C.D4;C.AMF.__proto__=
C.KC;C.APe.__proto__=C.D4;C.NewMenu.__proto__=C.Aw;C.ANs.__proto__=C.Hp;C.AIl.__proto__=
C.Akn;C.AIC.__proto__=C.AbI;C.Je.__proto__=C.Iy;C.ALa.__proto__=C.WN;C.Zu.__proto__=
C.Dm;C.ALk.__proto__=C.Eg;C.MotherScanScreen.__proto__=C.LA;C.AK$.__proto__=C.Aoc;
C.IL.__proto__=A.Core.O;C.AK7.__proto__=C.BW;C.SetSaveNaisIdScreen.__proto__=C.S6;
C.AJK.__proto__=C.An1;C.ApY.__proto__=C.Dm;C.AQQ.__proto__=C.ApY;C.AaI.__proto__=
C.ApY;C.AbL.__proto__=C.AC;C.APM.__proto__=C.DY;C.AJy.__proto__=C.GP;C.AKN.__proto__=
C.ON;C.AJx.__proto__=C.GP;C.AKM.__proto__=C.ON;C.Acp.__proto__=C.Sy;C.ALf.__proto__=
C.Sy;C.Zc.__proto__=C.Mk;C.AIT.__proto__=C.Mk;C.ANl.__proto__=C.AcN;C.Ui.__proto__=
C.BW;C.Adm.__proto__=C.B$;C.G9.__proto__=C.AC;C.AIp.__proto__=C.G9;C.AIq.__proto__=
C.G9;C.AH9.__proto__=C.Iz;C.Sp.__proto__=C.B$;C.ApC.__proto__=C.SetTransponderScreen;
C.AAb.__proto__=C.Hb;C.ACJ.__proto__=C.N9;C.ACK.__proto__=C.N9;C.Aat.__proto__=C.
Dm;C.AQU.__proto__=C.Gi;C.AQT.__proto__=C.Iz;C.AQS.__proto__=C.H_;C.AMJ.__proto__=
A.Core.O;C.AMG.__proto__=C.Hb;C.Azd.__proto__=C.Zv;C.Ld.__proto__=A.Core.O;};C._ReInit=
function(){var B;if((B=C.ACS._this))B._ReInit();if((B=C.ACT._this))B._ReInit();if((
B=C.A1._this))B._ReInit();if((B=C.Pz._this))B._ReInit();if((B=C.AutoActions._this
))B._ReInit();if((B=C.AfH._this))B._ReInit();if((B=C.Cz._this))B._ReInit();if((B=
C.XL._this))B._ReInit();if((B=C.Auh._this))B._ReInit();if((B=C.ApE._this))B._ReInit(
);if((B=C.DO._this))B._ReInit();if((B=C.Ayq._this))B._ReInit();};C.Dq=function(D
){var B;if((B=C.ACS._this)&&(B._cycle!=D))B._Done(C.ACS._this=null);if((B=C.ACT.
_this)&&(B._cycle!=D))B._Done(C.ACT._this=null);if((B=C.A1._this)&&(B._cycle!=D)
)B._Done(C.A1._this=null);if((B=C.Pz._this)&&(B._cycle!=D))B._Done(C.Pz._this=null
);if((B=C.AutoActions._this)&&(B._cycle!=D))B._Done(C.AutoActions._this=null);if((
B=C.AfH._this)&&(B._cycle!=D))B._Done(C.AfH._this=null);if((B=C.Cz._this)&&(B._cycle
!=D))B._Done(C.Cz._this=null);if((B=C.XL._this)&&(B._cycle!=D))B._Done(C.XL._this=
null);if((B=C.Auh._this)&&(B._cycle!=D))B._Done(C.Auh._this=null);if((B=C.ApE._this
)&&(B._cycle!=D))B._Done(C.ApE._this=null);if((B=C.DO._this)&&(B._cycle!=D))B._Done(
C.DO._this=null);if((B=C.Ayq._this)&&(B._cycle!=D))B._Done(C.Ayq._this=null);};return C;
})();

/* VitalControl demonstration application, © Urban GmbH & Co.KG 2023 */